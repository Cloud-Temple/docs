"""
Interface utilisateur moderne pour le système de traduction.

Interface avancée utilisant Rich pour un affichage professionnel avec :
- Barres de progression multiples
- Layout organisé en panneaux
- Couleurs cohérentes
- Affichage en temps réel
"""

import asyncio
import sys
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any
from threading import Lock
from pathlib import Path

from rich.console import Console
from rich.progress import (
    Progress, 
    TaskID, 
    SpinnerColumn, 
    TextColumn, 
    BarColumn, 
    TaskProgressColumn, 
    TimeRemainingColumn,
    TimeElapsedColumn,
    MofNCompleteColumn
)
from rich.panel import Panel
from rich.layout import Layout
from rich.live import Live
from rich.table import Table
from rich.text import Text
from rich.align import Align
from rich.columns import Columns
from rich.rule import Rule
from rich.status import Status
from rich.tree import Tree
from rich.markup import escape

try:
    from .models import (
        TranslationStats, 
        TranslationStatus, 
        FileTranslationTask, 
        TranslationJob
    )
    from .config import LANG_CONFIG
except ImportError:
    from models import (
        TranslationStats, 
        TranslationStatus, 
        FileTranslationTask, 
        TranslationJob
    )
    from config import LANG_CONFIG


class TranslationUI:
    """Interface utilisateur moderne avec Rich."""
    
    def __init__(self, debug: bool = False, show_system_prompt: bool = True):
        """Initialise l'interface moderne."""
        self.debug = debug
        self.show_system_prompt = show_system_prompt
        self.console = Console(force_terminal=True, width=120)
        
        # État de l'interface
        self._start_time: Optional[datetime] = None
        self._live: Optional[Live] = None
        self._layout: Optional[Layout] = None
        self._lock = Lock()
        
        # Progression
        self._progress: Optional[Progress] = None
        self._global_task: Optional[TaskID] = None
        self._file_tasks: Dict[str, TaskID] = {}
        
        # Données d'affichage
        self._current_stats = TranslationStats()
        self._active_files: Dict[str, FileTranslationTask] = {}
        self._recent_logs: List[Dict[str, Any]] = []
        self._config_info: Dict[str, Any] = {}
        self._job_info: Dict[str, Any] = {}
        
        # Limite des logs récents
        self._max_logs = 15
        
    def show_banner(self) -> None:
        """Affiche la bannière de démarrage."""
        banner = Text()
        banner.append("🇫🇷 ", style="bold red")
        banner.append("Cloud Temple", style="bold blue")
        banner.append(" Documentation Translation ", style="bold white")
        banner.append("🌍", style="bold green")
        
        panel = Panel(
            Align.center(banner),
            border_style="blue",
            padding=(1, 2)
        )
        
        self.console.print()
        self.console.print(panel)
        self.console.print()
        
    def show_config_summary(self, config, paths: Dict[str, str]) -> None:
        """Affiche un résumé de la configuration."""
        self._config_info = {
            'model': config.model,
            'api_url': config.api_url,
            'concurrent_translations': config.concurrent_translations,
            'docs_path': paths.get('docs', 'N/A')
        }
        
        # Création du tableau de configuration
        config_table = Table(title="📋 Configuration", show_header=True, header_style="bold cyan")
        config_table.add_column("Paramètre", style="cyan", width=20)
        config_table.add_column("Valeur", style="white", width=60)
        
        config_table.add_row("🤖 Modèle", f"[green]{config.model}[/green]")
        config_table.add_row("🌐 API", f"[blue]{config.api_url}[/blue]")
        config_table.add_row("⚡ Concurrence", f"[yellow]{config.concurrent_translations}[/yellow]")
        config_table.add_row("📁 Dossier Docs", f"[green]{paths.get('docs', 'N/A')}[/green]")
        
        # Tableau des langues
        lang_table = Table(title="🗣️ Langues Cibles", show_header=True, header_style="bold magenta")
        lang_table.add_column("Code", style="cyan", width=8)
        lang_table.add_column("Nom", style="white", width=20)
        lang_table.add_column("Emoji", style="white", width=8)
        
        lang_emojis = {'en': '🇬🇧', 'de': '🇩🇪', 'es': '🇪🇸', 'it': '🇮🇹'}
        
        for code, name in LANG_CONFIG.LANGUAGES.items():
            emoji = lang_emojis.get(code, '🌍')
            lang_table.add_row(code, name, emoji)
        
        # Affichage des tableaux côte à côte
        columns = Columns([config_table, lang_table], equal=True, expand=True)
        self.console.print(columns)
        self.console.print()
    
    def start_job_progress(self, job: TranslationJob, tasks_to_process: Optional[int] = None) -> None:
        """Démarre l'affichage de progression avec interface live."""
        self._start_time = datetime.now()
        
        # Utilise le nombre de tâches à traiter ou le total des tâches
        total_tasks = tasks_to_process if tasks_to_process is not None else len(job.tasks)
        
        self._job_info = {
            'total_tasks': total_tasks,
            'target_languages': job.target_languages,
            'dry_run': job.dry_run,
            'force_retranslation': job.force_retranslation
        }
        
        # Configuration des barres de progression
        self._progress = Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(bar_width=40),
            TaskProgressColumn(),
            MofNCompleteColumn(),
            TimeElapsedColumn(),
            TimeRemainingColumn(),
            console=self.console,
            transient=False
        )
        
        # Tâche globale basée sur les tâches à traiter
        self._global_task = self._progress.add_task(
            "[bold blue]🌍 Progression Globale",
            total=total_tasks
        )
        
        # Création du layout
        self._create_layout()
        
        # Démarrage de l'affichage live
        self._live = Live(
            self._layout,
            console=self.console,
            refresh_per_second=4,
            screen=False
        )
        self._live.start()
        
        # Message de démarrage
        self.add_log("🚀 Démarrage de la traduction", "success")
        self.add_log(f"📊 {len(job.tasks)} tâches au total", "info")
    
    def _create_layout(self) -> None:
        """Crée le layout principal."""
        self._layout = Layout()
        
        # Division principale
        self._layout.split_column(
            Layout(name="header", size=3),
            Layout(name="main", ratio=1),
            Layout(name="logs", ratio=1)
        )
        
        # Division de la section principale
        self._layout["main"].split_row(
            Layout(name="progress", ratio=2),
            Layout(name="stats", ratio=1)
        )
        
        # Mise à jour initiale du layout
        self._update_layout()
    
    def _update_layout(self) -> None:
        """Met à jour le contenu du layout."""
        if not self._layout:
            return
            
        # Header - informations du job
        self._layout["header"].update(self._create_header_panel())
        
        # Progress - barres de progression
        if self._progress:
            self._layout["progress"].update(Panel(
                self._progress,
                title="📊 Progression",
                border_style="blue",
                padding=(0, 1)
            ))
        else:
            self._layout["progress"].update(Panel(
                Text("Initialisation...", style="dim"),
                title="📊 Progression",
                border_style="blue"
            ))
        
        # Stats - statistiques en temps réel
        self._layout["stats"].update(self._create_stats_panel())
        
        # Logs - messages récents
        self._layout["logs"].update(self._create_logs_panel())
    
    def _create_header_panel(self) -> Panel:
        """Crée le panneau d'en-tête."""
        if self._start_time:
            elapsed = datetime.now() - self._start_time
            elapsed_str = str(elapsed).split('.')[0]  # Supprime les microsecondes
        else:
            elapsed_str = "00:00:00"
        
        mode = "🔍 DRY RUN" if self._job_info.get('dry_run', False) else "🚀 PRODUCTION"
        mode_style = "yellow" if self._job_info.get('dry_run', False) else "green"
        
        header_text = Text()
        header_text.append(f"⏱️  {elapsed_str} ", style="cyan")
        header_text.append("| ", style="white")
        header_text.append(f"{mode} ", style=f"bold {mode_style}")
        header_text.append("| ", style="white")
        header_text.append(f"🗣️ {', '.join(self._job_info.get('target_languages', []))}", style="magenta")
        
        return Panel(
            Align.center(header_text),
            border_style="cyan",
            height=3
        )
    
    def _create_stats_panel(self) -> Panel:
        """Crée le panneau de statistiques."""
        stats_table = Table(show_header=False, box=None, padding=(0, 1))
        stats_table.add_column("Icon", width=3)
        stats_table.add_column("Label", width=12)
        stats_table.add_column("Value", width=10, justify="right")
        
        # Statistiques de fichiers
        stats_table.add_row("✅", "Traduits", f"[green]{self._current_stats.files_translated:,}[/green]")
        stats_table.add_row("📋", "Copiés", f"[blue]{self._current_stats.files_copied:,}[/blue]")
        stats_table.add_row("⏭️", "Ignorés", f"[yellow]{self._current_stats.files_skipped:,}[/yellow]")
        stats_table.add_row("❌", "Échecs", f"[red]{self._current_stats.files_failed:,}[/red]")
        
        # Séparateur
        stats_table.add_row("", "", "")
        
        # Statistiques de tokens
        stats_table.add_row("🔤", "Tokens IN", f"[cyan]{self._current_stats.total_input_tokens:,}[/cyan]")
        stats_table.add_row("📤", "Tokens OUT", f"[magenta]{self._current_stats.total_output_tokens:,}[/magenta]")
        
        # Calculs de moyennes et vitesse en temps réel
        if self._current_stats.total_api_calls > 0:
            avg_input = self._current_stats.total_input_tokens / self._current_stats.total_api_calls
            avg_output = self._current_stats.total_output_tokens / self._current_stats.total_api_calls
            stats_table.add_row("📥", "IN moyen", f"[dim]{avg_input:.0f}[/dim]")
            stats_table.add_row("📤", "OUT moyen", f"[dim]{avg_output:.0f}[/dim]")
        
        # Vitesse tokens/seconde en temps réel (seulement tokens OUT générés)
        if self._start_time:
            elapsed = (datetime.now() - self._start_time).total_seconds()
            if elapsed > 0 and self._current_stats.total_output_tokens > 0:
                tokens_per_sec = self._current_stats.total_output_tokens / elapsed
                stats_table.add_row("⚡", "Tokens/s", f"[yellow]{tokens_per_sec:.1f}[/yellow]")
        
        return Panel(
            stats_table,
            title="📈 Statistiques",
            border_style="green"
        )
    
    def _create_logs_panel(self) -> Panel:
        """Crée le panneau des logs."""
        if not self._recent_logs:
            log_content = Text("Aucun log pour le moment...", style="dim")
        else:
            log_lines = []
            for log_entry in self._recent_logs[-self._max_logs:]:
                timestamp = log_entry['timestamp']
                level = log_entry['level']
                message = log_entry['message']
                
                # Couleurs par niveau
                level_styles = {
                    "info": "white",
                    "success": "green",
                    "warning": "yellow",
                    "error": "red",
                    "debug": "dim"
                }
                
                # Emojis par niveau
                level_emojis = {
                    "info": "ℹ️",
                    "success": "✅",
                    "warning": "⚠️",
                    "error": "❌",
                    "debug": "🔍"
                }
                
                style = level_styles.get(level, "white")
                emoji = level_emojis.get(level, "ℹ️")
                
                line = Text()
                line.append(f"{timestamp} ", style="dim")
                line.append(f"{emoji} ", style="white")
                line.append(message, style=style)
                
                log_lines.append(line)
            
            log_content = Text("\n").join(log_lines)
        
        return Panel(
            log_content,
            title="📝 Logs Récents",
            border_style="white"
        )
    
    
    def update_task_progress(self, task: FileTranslationTask) -> None:
        """Met à jour la progression d'une tâche."""
        with self._lock:
            # Mise à jour de la progression globale
            if self._progress and self._global_task is not None:
                self._progress.advance(self._global_task, 1)
            
            # Mise à jour des statistiques
            if task.status == TranslationStatus.COMPLETED:
                self._current_stats.files_translated += 1
            elif task.status == TranslationStatus.COPIED:
                self._current_stats.files_copied += 1
            elif task.status == TranslationStatus.FAILED:
                self._current_stats.files_failed += 1
            elif task.status == TranslationStatus.SKIPPED:
                self._current_stats.files_skipped += 1
            
            # Suppression du fichier des actifs s'il est terminé
            task_key = f"{task.relative_path}:{task.target_lang}"
            if task.status in [TranslationStatus.COMPLETED, TranslationStatus.FAILED, TranslationStatus.COPIED, TranslationStatus.SKIPPED]:
                self._active_files.pop(task_key, None)
                
                # Suppression de la tâche de fichier individuelle
                if task_key in self._file_tasks:
                    task_id = self._file_tasks.pop(task_key)
                    if self._progress:
                        try:
                            self._progress.remove_task(task_id)
                        except:
                            pass  # La tâche n'existe peut-être plus
            
            # Mise à jour du layout
            self._update_layout()
    
    def add_log(self, message: str, level: str = "info") -> None:
        """Ajoute un message de log."""
        if not self.debug and level == "debug":
            return
        
        with self._lock:
            timestamp = datetime.now().strftime("%H:%M:%S")
            
            log_entry = {
                'timestamp': timestamp,
                'level': level,
                'message': escape(message)  # Échappement des caractères spéciaux Rich
            }
            
            self._recent_logs.append(log_entry)
            
            # Maintenir la limite des logs
            if len(self._recent_logs) > self._max_logs * 2:
                self._recent_logs = self._recent_logs[-self._max_logs:]
            
            # Mise à jour du layout si le live display est actif
            if self._live and self._live.is_started:
                self._update_layout()
    
    def log_task_start(self, task: FileTranslationTask) -> None:
        """Log le début d'une tâche et ajoute une barre de progression."""
        task_key = f"{task.relative_path}:{task.target_lang}"
        
        with self._lock:
            # Ajout aux fichiers actifs
            self._active_files[task_key] = task
            
            # Création d'une barre de progression pour ce fichier
            if self._progress and task.is_translatable:
                file_name = Path(task.relative_path).name
                if len(file_name) > 30:
                    file_name = file_name[:27] + "..."
                
                description = f"[cyan]{file_name}[/cyan] → [magenta]{task.target_lang}[/magenta]"
                
                # Toujours commencer avec total=1, sera mis à jour quand on connaît le vrai nombre de blocs
                task_id = self._progress.add_task(
                    description,
                    total=1
                )
                self._file_tasks[task_key] = task_id
        
        # Log du démarrage
        if task.is_translatable:
            self.add_log(f"🔄 Traduction: {task.relative_path} → {task.target_lang}", "info")
        elif self.debug:
            self.add_log(f"📋 Copie: {task.relative_path} → {task.target_lang}", "debug")
        
        # Mise à jour du layout
        if self._live and self._live.is_started:
            self._update_layout()
    
    def log_task_complete(self, task: FileTranslationTask) -> None:
        """Log la fin d'une tâche."""
        if task.status == TranslationStatus.FAILED:
            message = f"❌ Échec: {task.relative_path}"
            if task.error_message:
                message += f" - {task.error_message}"
            self.add_log(message, "error")
        else:
            status_emojis = {
                TranslationStatus.COMPLETED: "✅",
                TranslationStatus.COPIED: "📋",
                TranslationStatus.SKIPPED: "⏭️",
            }
            emoji = status_emojis.get(task.status, "ℹ️")
            
            if task.is_translatable or self.debug:
                message = f"{emoji} {task.status.value.title()}: {task.relative_path}"
                if task.processing_time:
                    message += f" ({task.processing_time:.1f}s)"
                self.add_log(message, "success" if task.status == TranslationStatus.COMPLETED else "info")
    
    def update_file_progress(self, task: FileTranslationTask, current_block: int, total_blocks: int) -> None:
        """Met à jour la progression d'un fichier spécifique."""
        task_key = f"{task.relative_path}:{task.target_lang}"
        
        with self._lock:
            if task_key in self._file_tasks and self._progress:
                task_id = self._file_tasks[task_key]
                
                # Mise à jour du total si nécessaire
                if total_blocks != task.blocks_count:
                    self._progress.update(task_id, total=total_blocks)
                    task.blocks_count = total_blocks
                
                # Mise à jour de la position
                progress_diff = current_block - task.current_block
                if progress_diff > 0:
                    self._progress.advance(task_id, progress_diff)
                    task.current_block = current_block
            
            # Mise à jour du layout
            if self._live and self._live.is_started:
                self._update_layout()
    
    def log_api_request(self, attempt: int, model: str, system_prompt: str, user_prompt: str, system_tokens: int, user_tokens: int) -> None:
        """Affiche les détails de la requête API de manière structurée."""
        total_tokens = system_tokens + user_tokens
        
        self.add_log(f"🔄 Requête API (Tentative {attempt}) - Modèle: {model}", "debug")
        self.add_log(f"   📊 Tokens System: {system_tokens:,} | User: {user_tokens:,} | Total: {total_tokens:,}", "debug")
        
        if self.show_system_prompt and self.debug:
            # Affichage du prompt système (tronqué)
            prompt_preview = system_prompt[:200] + "..." if len(system_prompt) > 200 else system_prompt
            self.add_log(f"   🤖 Prompt Système: {prompt_preview}", "debug")
        
        if self.debug:
            # Affichage du chunk (tronqué)
            chunk_preview = user_prompt[:200] + "..." if len(user_prompt) > 200 else user_prompt
            self.add_log(f"   📝 Chunk: {chunk_preview}", "debug")
    
    def log_api_response(self, attempt: int, status: int, response_content: str, prompt_tokens: int, completion_tokens: int, total_tokens: int) -> None:
        """Affiche les détails de la réponse API de manière structurée."""
        self.add_log(f"✅ Réponse API (Tentative {attempt}) - Status: {status}", "debug")
        self.add_log(f"   📊 Tokens IN: {prompt_tokens:,} | OUT: {completion_tokens:,} | Total: {total_tokens:,}", "debug")
        
        if self.debug and response_content:
            # Affichage du résultat (tronqué)
            result_preview = response_content[:200] + "..." if len(response_content) > 200 else response_content
            self.add_log(f"   📄 Résultat: {result_preview}", "debug")
    
    def stop_live_display(self) -> None:
        """Arrête l'affichage en temps réel."""
        if self._live and self._live.is_started:
            self._live.stop()
            self._live = None
    
    def show_final_stats(self, stats: TranslationStats) -> None:
        """Affiche les statistiques finales."""
        self.stop_live_display()
        
        # Mise à jour des stats finales
        self._current_stats = stats
        
        self.console.print()
        self.console.print(Rule("📊 Résultats de Traduction", style="blue"))
        self.console.print()
        
        # Statistiques principales
        main_stats = Table(show_header=False, box=None, padding=(0, 2))
        main_stats.add_column("Metric", width=25)
        main_stats.add_column("Value", width=15, justify="right")
        main_stats.add_column("Icon", width=5)
        
        main_stats.add_row("Traductions réussies", f"[green]{stats.files_translated:,}[/green]", "✅")
        main_stats.add_row("Fichiers copiés", f"[blue]{stats.files_copied:,}[/blue]", "📋")
        main_stats.add_row("Fichiers ignorés", f"[yellow]{stats.files_skipped:,}[/yellow]", "⏭️")
        main_stats.add_row("Échecs", f"[red]{stats.files_failed:,}[/red]", "❌")
        
        if stats.duration:
            duration_str = str(timedelta(seconds=int(stats.duration)))
            main_stats.add_row("Durée totale", f"[magenta]{duration_str}[/magenta]", "⏱️")
            
            if stats.files_translated > 0:
                avg_time = stats.duration / stats.files_translated
                main_stats.add_row("Temps moyen/fichier", f"[magenta]{avg_time:.1f}s[/magenta]", "⚡")
        
        self.console.print(Panel(main_stats, title="📈 Statistiques Principales", border_style="green"))
        
        # Statistiques par langue
        if stats.stats_by_lang:
            self._show_language_stats_final(stats.stats_by_lang)
        
        # Erreurs
        if stats.errors:
            self._show_errors_final(stats.errors)
        
        # Message final
        if stats.files_failed > 0:
            final_message = Text("⚠️ Traduction terminée avec des erreurs", style="bold yellow")
        else:
            final_message = Text("🎉 Traduction terminée avec succès!", style="bold green")
        
        self.console.print()
        self.console.print(Panel(Align.center(final_message), border_style="cyan"))
        self.console.print()
    
    def _show_language_stats_final(self, stats_by_lang: Dict[str, Dict[str, int]]) -> None:
        """Affiche les statistiques finales par langue."""
        lang_table = Table(title="🗣️ Statistiques par Langue", show_header=True, header_style="bold magenta")
        lang_table.add_column("Langue", style="cyan", width=12)
        lang_table.add_column("Traduits", style="green", width=10, justify="right")
        lang_table.add_column("Copiés", style="blue", width=10, justify="right")
        lang_table.add_column("Ignorés", style="yellow", width=10, justify="right")
        lang_table.add_column("Échecs", style="red", width=10, justify="right")
        lang_table.add_column("Total", style="white", width=10, justify="right")
        
        lang_emojis = {'en': '🇬🇧', 'de': '🇩🇪', 'es': '🇪🇸', 'it': '🇮🇹'}
        
        for lang_code, lang_stats in stats_by_lang.items():
            emoji = lang_emojis.get(lang_code, '🌍')
            lang_name = LANG_CONFIG.LANGUAGES.get(lang_code, lang_code)
            
            translated = lang_stats.get("translated", 0)
            copied = lang_stats.get("copied", 0)
            skipped = lang_stats.get("skipped", 0)
            failed = lang_stats.get("failed", 0)
            total = translated + copied + skipped + failed
            
            lang_table.add_row(
                f"{emoji} {lang_name}",
                str(translated),
                str(copied),
                str(skipped),
                str(failed),
                f"[bold]{total}[/bold]"
            )
        
        self.console.print(lang_table)
        self.console.print()
    
    def _show_errors_final(self, errors: List[str]) -> None:
        """Affiche la liste finale des erreurs."""
        error_panel_content = []
        
        # Affiche les 10 dernières erreurs
        for error in errors[-10:]:
            error_panel_content.append(f"• {escape(error)}")
        
        if len(errors) > 10:
            error_panel_content.append(f"\n... et {len(errors) - 10} autres erreurs")
        
        error_content = "\n".join(error_panel_content)
        
        self.console.print(Panel(
            error_content,
            title=f"❌ Erreurs Rencontrées ({len(errors)} total)",
            border_style="red"
        ))
        self.console.print()
    
    def confirm_dry_run(self, job: TranslationJob) -> bool:
        """Demande confirmation pour un dry run."""
        self.console.print()
        
        # Informations du dry run
        dry_run_info = Table(show_header=False, box=None)
        dry_run_info.add_column("Label", width=20)
        dry_run_info.add_column("Value", width=40)
        
        dry_run_info.add_row("📊 Tâches à traiter", f"[yellow]{len(job.tasks)}[/yellow]")
        dry_run_info.add_row("🗣️ Langues", f"[magenta]{', '.join(job.target_languages)}[/magenta]")
        dry_run_info.add_row("🔄 Force retraduction", f"[cyan]{'Oui' if job.force_retranslation else 'Non'}[/cyan]")
        
        panel = Panel(
            dry_run_info,
            title="🔍 Mode Simulation (Dry Run)",
            border_style="yellow",
            padding=(1, 2)
        )
        
        self.console.print(panel)
        self.console.print()
        
        response = input(f"❓ Continuer ? [y/N]: ")
        return response.lower() in ['y', 'yes', 'oui']
    
    def show_error(self, message: str, details: Optional[str] = None) -> None:
        """Affiche une erreur formatée."""
        self.console.print()
        error_content = f"[red]❌ Erreur: {escape(message)}[/red]"
        if details:
            error_content += f"\n[dim]{escape(details)}[/dim]"
        
        self.console.print(Panel(
            error_content,
            border_style="red",
            padding=(1, 2)
        ))
        self.console.print()
    
    def show_warning(self, message: str) -> None:
        """Affiche un avertissement formaté."""
        warning_content = f"[yellow]⚠️ Attention: {escape(message)}[/yellow]"
        self.console.print(Panel(
            warning_content,
            border_style="yellow",
            padding=(1, 2)
        ))
    
    def show_success(self, message: str) -> None:
        """Affiche un message de succès formaté."""
        success_content = f"[green]✅ Succès: {escape(message)}[/green]"
        self.console.print(Panel(
            success_content,
            border_style="green",
            padding=(1, 2)
        ))
