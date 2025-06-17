#!/usr/bin/env python3
"""
Script principal de traduction automatique pour la documentation Cloud Temple.

Ce script utilise l'API Cloud Temple LLMaaS pour traduire automatiquement
la documentation Markdown de français vers plusieurs langues cibles.

Usage:
    python translate.py [OPTIONS]

Exemples:
    python translate.py --dry-run                    # Simulation
    python translate.py --init --translate-missing   # Initialisation
    python translate.py --force --lang=en           # Force traduction en anglais
    python translate.py --debug                     # Mode debug
"""

import asyncio
import sys
from pathlib import Path
from typing import List, Optional

import click

# Gestion des imports relatifs/absolus
try:
    # Import relatif (quand exécuté comme module)
    from . import (
        TranslationConfig,
        load_config,
        TranslationUI,
        CloudTempleTranslator,
        test_api_connection,
        FileManager,
        TranslationStatus
    )
    from .config import validate_environment, get_paths, LANG_CONFIG
    from .models import TranslationJob, TranslationStats
    from .file_manager import FileCopier
except ImportError:
    # Import absolu (quand exécuté directement)
    sys.path.insert(0, str(Path(__file__).parent))
    from config import TranslationConfig, load_config, validate_environment, get_paths, LANG_CONFIG
    from models import TranslationJob, TranslationStats, TranslationStatus
    from ui import TranslationUI
    from translator import CloudTempleTranslator, test_api_connection
    from file_manager import FileManager, FileCopier


class TranslationEngine:
    """Moteur principal de traduction."""
    
    def __init__(self, config: TranslationConfig, ui: TranslationUI):
        """
        Initialise le moteur.
        
        Args:
            config: Configuration système
            ui: Interface utilisateur
        """
        self.config = config
        self.ui = ui
        self.file_manager = FileManager(config)
    
    async def run_translation_job(self, job: TranslationJob) -> TranslationStats:
        """
        Exécute un job de traduction complet.
        
        Args:
            job: Job de traduction à exécuter
            
        Returns:
            Statistiques de traduction
        """
        # Chargement des métadonnées
        job.metadata = await self.file_manager.metadata_manager.load_metadata()
        
        # Construction des tâches
        job.tasks = await self.file_manager.task_builder.build_translation_tasks(
            target_languages=job.target_languages,
            metadata=job.metadata,
            force_retranslation=job.force_retranslation,
            init_mode=job.init_mode,
            translate_missing=job.translate_missing
        )
        
        # Filtrage des tâches qui nécessitent un traitement
        tasks_to_process = [task for task in job.tasks if task.needs_translation]
        
        if not tasks_to_process:
            self.ui.show_success("Aucune traduction nécessaire - tous les fichiers sont à jour")
            return job.stats
        
        self.ui.add_log(f"{len(tasks_to_process)} tâches à traiter", "info")
        
        # Confirmation en mode dry-run
        if job.dry_run:
            if not self.ui.confirm_dry_run(job):
                self.ui.add_log("Annulation par l'utilisateur", "warning")
                return job.stats
        
        # Démarrage du suivi de progression
        job.stats.start_timer()
        self.ui.start_job_progress(job, len(tasks_to_process))
        
        # Traitement des tâches
        if job.dry_run:
            await self._simulate_tasks(tasks_to_process, job)
        else:
            await self._process_tasks(tasks_to_process, job)
        
        # Finalisation
        job.stats.stop_timer()
        
        # Sauvegarde des métadonnées si pas en dry-run
        if not job.dry_run:
            await self.file_manager.metadata_manager.save_metadata(job.metadata)
        
        return job.stats
    
    async def _simulate_tasks(self, tasks: List, job: TranslationJob) -> None:
        """
        Simule l'exécution des tâches (mode dry-run).
        
        Args:
            tasks: Tâches à simuler
            job: Job de traduction
        """
        for task in tasks:
            # Simulation des statistiques
            if task.is_translatable:
                if task.stored_hash is None:
                    self.ui.add_log(f"[DRY RUN] Nouvelle traduction: {task.relative_path} → {task.target_lang}", "info")
                else:
                    self.ui.add_log(f"[DRY RUN] Mise à jour: {task.relative_path} → {task.target_lang}", "info")
                
                task.status = TranslationStatus.COMPLETED
                job.stats.files_translated += 1
                job.stats.increment_lang_stat(task.target_lang, "translated")
            else:
                self.ui.add_log(f"[DRY RUN] Copie: {task.relative_path} → {task.target_lang}", "info")
                task.status = TranslationStatus.COPIED
                job.stats.files_copied += 1
                job.stats.increment_lang_stat(task.target_lang, "copied")
            
            self.ui.update_task_progress(task)
            
            # Petite pause pour l'effet visuel
            await asyncio.sleep(0.1)
    
    async def _process_tasks(self, tasks: List, job: TranslationJob) -> None:
        """
        Traite les tâches réelles de traduction.
        
        Args:
            tasks: Tâches à traiter
            job: Job de traduction
        """
        # Séparation des tâches par type
        translation_tasks = [t for t in tasks if t.is_translatable]
        copy_tasks = [t for t in tasks if not t.is_translatable]
        
        # Traitement des copies en premier (plus rapide)
        await self._process_copy_tasks(copy_tasks, job)
        
        # Traitement des traductions avec concurrence
        if translation_tasks:
            await self._process_translation_tasks(translation_tasks, job)
    
    async def _process_copy_tasks(self, copy_tasks: List, job: TranslationJob) -> None:
        """
        Traite les tâches de copie de fichiers.
        
        Args:
            copy_tasks: Tâches de copie
            job: Job de traduction
        """
        for task in copy_tasks:
            self.ui.log_task_start(task)
            
            try:
                success = await FileCopier.copy_file(task.source_path, task.target_path)
                
                if success:
                    task.status = TranslationStatus.COPIED
                    job.stats.files_copied += 1
                    job.stats.increment_lang_stat(task.target_lang, "copied")
                else:
                    task.status = TranslationStatus.FAILED
                    task.error_message = "Échec de la copie"
                    job.stats.files_failed += 1
                    job.stats.increment_lang_stat(task.target_lang, "failed")
                
            except Exception as e:
                task.status = TranslationStatus.FAILED
                task.error_message = str(e)
                job.stats.files_failed += 1
                job.stats.add_error(f"Copie {task.relative_path}: {e}")
            
            self.ui.log_task_complete(task)
            self.ui.update_task_progress(task)
    
    async def _process_translation_tasks(self, translation_tasks: List, job: TranslationJob) -> None:
        """
        Traite les tâches de traduction avec concurrence optimale.
        
        Args:
            translation_tasks: Tâches de traduction
            job: Job de traduction
        """
        # En mode debug, traiter un fichier à la fois
        if self.ui.debug:
            async with CloudTempleTranslator(self.config, self.ui) as translator:
                for task in translation_tasks:
                    await self._translate_single_task(task, translator, job)
            return
        
        # Mode production : pool de workers avec queue optimisée
        async with CloudTempleTranslator(self.config, self.ui) as translator:
            # Queue des tâches à traiter
            task_queue = asyncio.Queue()
            
            # Ajout de toutes les tâches dans la queue
            for task in translation_tasks:
                await task_queue.put(task)
            
            # Fonction worker qui traite les tâches en continu
            async def worker():
                while True:
                    try:
                        # Récupération d'une tâche (timeout pour éviter l'attente infinie)
                        task = await asyncio.wait_for(task_queue.get(), timeout=1.0)
                        
                        # Traitement de la tâche
                        await self._translate_single_task(task, translator, job)
                        
                        # Marquer la tâche comme terminée
                        task_queue.task_done()
                        
                    except asyncio.TimeoutError:
                        # Plus de tâches disponibles, sortir du worker
                        break
                    except Exception as e:
                        # Log de l'erreur mais continuer
                        self.ui.add_log(f"Erreur dans worker: {e}", "error")
                        break
            
            # Lancement des workers concurrents
            max_workers = self.config.concurrent_translations
            workers = [asyncio.create_task(worker()) for _ in range(max_workers)]
            
            # Attendre que toutes les tâches soient terminées
            await task_queue.join()
            
            # Annuler les workers restants
            for worker_task in workers:
                worker_task.cancel()
            
            # Attendre que tous les workers se terminent proprement
            await asyncio.gather(*workers, return_exceptions=True)
    
    async def _translate_single_task(self, task, translator, job: TranslationJob) -> None:
        """
        Traite une tâche de traduction individuelle.
        
        Args:
            task: Tâche à traiter
            translator: Instance du traducteur
            job: Job de traduction
        """
        self.ui.log_task_start(task)
        task.status = TranslationStatus.PROCESSING
        
        try:
            # Lecture du contenu source
            content = await self.file_manager.read_file_content(task.source_path)
            task.content_size = len(content)
            
            # Callback de progression avec mise à jour des tokens en temps réel
            def progress_callback(block_num: int, total_blocks: int, block_result=None):
                # Mise à jour des tokens à chaque chunk traduit
                if block_result and block_result.success:
                    if block_result.prompt_tokens:
                        job.stats.total_input_tokens += block_result.prompt_tokens
                    if block_result.completion_tokens:
                        job.stats.total_output_tokens += block_result.completion_tokens
                    
                    # Mise à jour des statistiques en temps réel dans l'UI
                    self.ui._current_stats = job.stats
                
                # Mise à jour de la progression du fichier
                self.ui.update_file_progress(task, block_num, total_blocks)
            
            # Traduction
            result = await translator.translate_content(
                content=content,
                target_lang=task.target_lang,
                progress_callback=progress_callback
            )
            
            if result.success and result.translated_text:
                # Sauvegarde du fichier traduit
                await self.file_manager.write_file_content(
                    task.target_path,
                    result.translated_text
                )
                
                # Mise à jour des métadonnées
                if task.current_hash and job.metadata:
                    job.metadata.set_hash(task.relative_path, task.target_lang, task.current_hash)
                
                task.status = TranslationStatus.COMPLETED
                task.processing_time = result.processing_time
                job.stats.files_translated += 1
                job.stats.increment_lang_stat(task.target_lang, "translated")
                
                # Les tokens sont maintenant mis à jour en temps réel via le callback
                # Mise à jour finale des statistiques dans l'UI
                self.ui._current_stats = job.stats
                
            else:
                task.status = TranslationStatus.FAILED
                task.error_message = result.error or "Traduction échouée"
                job.stats.files_failed += 1
                job.stats.add_error(f"Traduction {task.relative_path}: {task.error_message}")
                
        except Exception as e:
            task.status = TranslationStatus.FAILED
            task.error_message = str(e)
            job.stats.files_failed += 1
            job.stats.add_error(f"Erreur {task.relative_path}: {e}")
        
        self.ui.log_task_complete(task)
        self.ui.update_task_progress(task)


@click.command()
@click.option('--dry-run', is_flag=True, help='Mode simulation - aucune modification')
@click.option('--force', is_flag=True, help='Force la retraduction de tous les fichiers')
@click.option('--init', is_flag=True, help='Mode initialisation des métadonnées')
@click.option('--translate-missing', is_flag=True, help='Traduit les fichiers manquants')
@click.option('--lang', help='Langue cible spécifique (ex: en, de, es, it)')
@click.option('--debug', is_flag=True, help='Mode debug avec logs détaillés')
@click.option('--no-debug-system-prompt', is_flag=True, help='Masque le prompt système en mode debug')
@click.option('--test-api', is_flag=True, help='Test la connexion API et sort')
@click.version_option(version="2.0.0", prog_name="Cloud Temple Translation System")
def main(
    dry_run: bool,
    force: bool,
    init: bool,
    translate_missing: bool,
    lang: Optional[str],
    debug: bool,
    no_debug_system_prompt: bool,
    test_api: bool
) -> None:
    """
    Système de traduction automatique pour la documentation Cloud Temple.
    
    Ce script traduit automatiquement la documentation Markdown du français
    vers plusieurs langues en utilisant l'API Cloud Temple LLMaaS.
    """
    asyncio.run(_async_main(
        dry_run=dry_run,
        force=force,
        init=init,
        translate_missing=translate_missing,
        lang=lang,
        debug=debug,
        no_debug_system_prompt=no_debug_system_prompt,
        test_api=test_api
    ))


async def _async_main(
    dry_run: bool,
    force: bool,
    init: bool,
    translate_missing: bool,
    lang: Optional[str],
    debug: bool,
    no_debug_system_prompt: bool,
    test_api: bool
) -> None:
    """Version asynchrone du main."""
    
    # Initialisation de l'UI
    ui = TranslationUI(debug=debug, show_system_prompt=not no_debug_system_prompt)
    ui.show_banner()
    
    try:
        # Chargement de la configuration
        config = load_config()
        validate_environment(config)
        
        # Affichage de la configuration
        paths = {k: str(v) for k, v in get_paths(config).items()}
        ui.show_config_summary(config, paths)
        
        # Test de l'API si demandé
        if test_api:
            ui.add_log("Test de la connexion API...", "info")
            success, message = await test_api_connection(config)
            
            if success:
                ui.show_success(message)
            else:
                ui.show_error("Test API échoué", message)
            
            return
        
        # Détermination des langues cibles
        if lang:
            if lang not in LANG_CONFIG.LANGUAGES:
                ui.show_error(f"Langue '{lang}' non supportée", 
                             f"Langues disponibles: {', '.join(LANG_CONFIG.LANGUAGES.keys())}")
                return
            target_languages = [lang]
        else:
            target_languages = list(LANG_CONFIG.LANGUAGES.keys())
        
        # Création du job de traduction
        paths = get_paths(config)
        job = TranslationJob(
            source_directory=paths['docs'],
            target_languages=target_languages,
            force_retranslation=force,
            dry_run=dry_run,
            init_mode=init,
            translate_missing=translate_missing
        )
        
        # Exécution de la traduction
        engine = TranslationEngine(config, ui)
        stats = await engine.run_translation_job(job)
        
        # Affichage des résultats
        ui.show_final_stats(stats)
        
        # Code de sortie
        if stats.files_failed > 0:
            sys.exit(1)
        else:
            sys.exit(0)
            
    except Exception as e:
        ui.show_error("Erreur critique", str(e))
        if debug:
            import traceback
            ui.add_log(traceback.format_exc(), "error")
        sys.exit(1)


if __name__ == "__main__":
    main()
