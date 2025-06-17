"""
Gestionnaire de fichiers et métadonnées pour le système de traduction.

Ce module gère la lecture/écriture des fichiers, le calcul des hashes,
la gestion des métadonnées de traduction et les opérations sur les fichiers.
"""

import hashlib
import json
import shutil
from pathlib import Path
from typing import Dict, List, Optional, Set

import aiofiles

try:
    from .config import TranslationConfig, LANG_CONFIG, get_paths
    from .models import (
        FileType, 
        FileTranslationTask, 
        TranslationMetadata, 
        TranslationStatus
    )
except ImportError:
    from config import TranslationConfig, LANG_CONFIG, get_paths
    from models import (
        FileType, 
        FileTranslationTask, 
        TranslationMetadata, 
        TranslationStatus
    )


class FileHasher:
    """Utilitaire pour calculer les hashes de fichiers."""
    
    @staticmethod
    def compute_file_hash(file_path: Path) -> str:
        """
        Calcule le hash SHA-256 d'un fichier.
        
        Args:
            file_path: Chemin vers le fichier
            
        Returns:
            Hash SHA-256 en hexadécimal
        """
        sha256_hash = hashlib.sha256()
        
        with open(file_path, "rb") as f:
            # Lecture par blocs pour les gros fichiers
            for chunk in iter(lambda: f.read(4096), b""):
                sha256_hash.update(chunk)
        
        return sha256_hash.hexdigest()
    
    @staticmethod
    async def compute_file_hash_async(file_path: Path) -> str:
        """
        Calcule le hash SHA-256 d'un fichier de manière asynchrone.
        
        Args:
            file_path: Chemin vers le fichier
            
        Returns:
            Hash SHA-256 en hexadécimal
        """
        sha256_hash = hashlib.sha256()
        
        async with aiofiles.open(file_path, "rb") as f:
            while chunk := await f.read(4096):
                sha256_hash.update(chunk)
        
        return sha256_hash.hexdigest()


class FileTypeDetector:
    """Détecteur de type de fichier."""
    
    @staticmethod
    def detect_file_type(file_path: Path) -> FileType:
        """
        Détecte le type d'un fichier basé sur son extension.
        
        Args:
            file_path: Chemin vers le fichier
            
        Returns:
            Type de fichier détecté
        """
        extension = file_path.suffix.lower()
        
        if extension in LANG_CONFIG.TRANSLATABLE_EXTENSIONS:
            return FileType.MARKDOWN
        elif extension in {'.png', '.jpg', '.jpeg', '.gif', '.svg'}:
            return FileType.IMAGE
        elif extension in {'.docx', '.pdf'}:
            return FileType.DOCUMENT
        else:
            return FileType.OTHER


class MetadataManager:
    """Gestionnaire des métadonnées de traduction."""
    
    def __init__(self, config: TranslationConfig):
        """
        Initialise le gestionnaire.
        
        Args:
            config: Configuration du système
        """
        self.config = config
        self.paths = get_paths(config)
        self.metadata_file = self.paths['metadata']
    
    async def load_metadata(self) -> TranslationMetadata:
        """
        Charge les métadonnées existantes ou crée un nouveau fichier.
        
        Returns:
            Métadonnées de traduction
        """
        if not self.metadata_file.exists():
            return TranslationMetadata()
        
        try:
            async with aiofiles.open(self.metadata_file, 'r', encoding='utf-8') as f:
                data = await f.read()
                metadata_dict = json.loads(data)
                
                # Migration du format legacy si nécessaire
                if isinstance(metadata_dict, dict) and 'files' not in metadata_dict:
                    # Ancien format: fichier -> langue -> hash
                    metadata = TranslationMetadata()
                    metadata.files = metadata_dict
                    return metadata
                
                return TranslationMetadata.parse_obj(metadata_dict)
                
        except (json.JSONDecodeError, ValueError) as e:
            # Fichier corrompu, on recommence
            print(f"Attention: Métadonnées corrompues ({e}), création d'un nouveau fichier")
            return TranslationMetadata()
    
    async def save_metadata(self, metadata: TranslationMetadata) -> None:
        """
        Sauvegarde les métadonnées sur disque.
        
        Args:
            metadata: Métadonnées à sauvegarder
        """
        # Création du dossier parent si nécessaire
        self.metadata_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Sérialisation avec indentation pour lisibilité
        json_data = metadata.model_dump_json(indent=2)
        
        async with aiofiles.open(self.metadata_file, 'w', encoding='utf-8') as f:
            await f.write(json_data)


class FileScanner:
    """Scanner de fichiers pour la documentation."""
    
    def __init__(self, config: TranslationConfig):
        """
        Initialise le scanner.
        
        Args:
            config: Configuration du système
        """
        self.config = config
        self.paths = get_paths(config)
        self.docs_path = self.paths['docs']
    
    def scan_files(self) -> List[Path]:
        """
        Scanne tous les fichiers dans le dossier docs.
        
        Returns:
            Liste des chemins de fichiers trouvés
        """
        if not self.docs_path.exists():
            raise FileNotFoundError(f"Dossier docs non trouvé: {self.docs_path}")
        
        # Fichiers à ignorer
        ignore_patterns = {'.DS_Store', 'Thumbs.db', '.gitkeep'}
        
        files = []
        for file_path in self.docs_path.rglob('*'):
            if (file_path.is_file() and 
                file_path.name not in ignore_patterns and
                not file_path.name.startswith('.')):
                files.append(file_path)
        
        return sorted(files)
    
    def get_relative_path(self, file_path: Path) -> str:
        """
        Obtient le chemin relatif par rapport au dossier docs.
        
        Args:
            file_path: Chemin absolu du fichier
            
        Returns:
            Chemin relatif
        """
        return str(file_path.relative_to(self.docs_path))


class TaskBuilder:
    """Constructeur de tâches de traduction."""
    
    def __init__(self, config: TranslationConfig):
        """
        Initialise le constructeur.
        
        Args:
            config: Configuration du système
        """
        self.config = config
        self.paths = get_paths(config)
        self.file_scanner = FileScanner(config)
        self.file_hasher = FileHasher()
        self.file_detector = FileTypeDetector()
    
    async def build_translation_tasks(
        self,
        target_languages: List[str],
        metadata: TranslationMetadata,
        force_retranslation: bool = False,
        init_mode: bool = False,
        translate_missing: bool = False
    ) -> List[FileTranslationTask]:
        """
        Construit la liste des tâches de traduction.
        
        Args:
            target_languages: Langues cibles
            metadata: Métadonnées existantes
            force_retranslation: Forcer la retraduction
            init_mode: Mode initialisation
            translate_missing: Traduire les fichiers manquants
            
        Returns:
            Liste des tâches de traduction
        """
        files = self.file_scanner.scan_files()
        tasks = []
        
        for file_path in files:
            relative_path = self.file_scanner.get_relative_path(file_path)
            file_type = self.file_detector.detect_file_type(file_path)
            
            # Calcul du hash pour les fichiers traduisibles
            current_hash = None
            if file_type == FileType.MARKDOWN:
                current_hash = self.file_hasher.compute_file_hash(file_path)
            
            # Création des tâches pour chaque langue
            for lang_code in target_languages:
                lang_name = LANG_CONFIG.LANGUAGES.get(lang_code, lang_code)
                target_path = self._get_target_path(relative_path, lang_code)
                
                # Récupération du hash stocké
                stored_hash = metadata.get_hash(relative_path, lang_code)
                
                # Détermination si traduction nécessaire
                needs_translation = self._needs_translation(
                    file_type=file_type,
                    target_path=target_path,
                    current_hash=current_hash,
                    stored_hash=stored_hash,
                    force_retranslation=force_retranslation,
                    init_mode=init_mode,
                    translate_missing=translate_missing
                )
                
                task = FileTranslationTask(
                    source_path=file_path,
                    relative_path=relative_path,
                    file_type=file_type,
                    target_lang=lang_code,
                    target_lang_name=lang_name,
                    target_path=target_path,
                    current_hash=current_hash,
                    stored_hash=stored_hash,
                    needs_translation=needs_translation
                )
                
                tasks.append(task)
        
        return tasks
    
    def _get_target_path(self, relative_path: str, lang_code: str) -> Path:
        """
        Calcule le chemin cible pour un fichier traduit.
        
        Args:
            relative_path: Chemin relatif du fichier source
            lang_code: Code de langue
            
        Returns:
            Chemin cible pour la traduction
        """
        return (self.paths['i18n'] / 
                lang_code / 
                'docusaurus-plugin-content-docs' / 
                'current' / 
                relative_path)
    
    def _needs_translation(
        self,
        file_type: FileType,
        target_path: Path,
        current_hash: Optional[str],
        stored_hash: Optional[str],
        force_retranslation: bool,
        init_mode: bool,
        translate_missing: bool
    ) -> bool:
        """
        Détermine si un fichier a besoin d'être traduit.
        
        Args:
            file_type: Type de fichier
            target_path: Chemin cible
            current_hash: Hash actuel du fichier source
            stored_hash: Hash stocké en métadonnées
            force_retranslation: Forcer la retraduction
            init_mode: Mode initialisation
            translate_missing: Traduire les fichiers manquants
            
        Returns:
            True si traduction nécessaire
        """
        # En mode force, tout est à traduire
        if force_retranslation:
            return True
        
        # En mode init, on ne traduit que les manquants si demandé
        if init_mode:
            return translate_missing and not target_path.exists()
        
        # Fichiers non-markdown : copie si manquant
        if file_type != FileType.MARKDOWN:
            return not target_path.exists()
        
        # Fichiers markdown : vérification du hash
        if not target_path.exists():
            return True  # Fichier manquant
        
        if stored_hash is None:
            return True  # Pas de hash stocké
        
        if current_hash != stored_hash:
            return True  # Contenu modifié
        
        return False  # À jour


class FileCopier:
    """Gestionnaire de copie de fichiers non-traduisibles."""
    
    @staticmethod
    async def copy_file(source_path: Path, target_path: Path) -> bool:
        """
        Copie un fichier de source vers cible.
        
        Args:
            source_path: Chemin source
            target_path: Chemin cible
            
        Returns:
            True si copie réussie
        """
        try:
            # Création du dossier parent
            target_path.parent.mkdir(parents=True, exist_ok=True)
            
            # Vérification si les fichiers sont identiques
            if target_path.exists():
                if await FileCopier._files_are_identical(source_path, target_path):
                    return True
            
            # Copie du fichier
            if source_path.suffix.lower() == '.docx':
                # Copie spéciale pour les fichiers docx (préservation métadonnées)
                shutil.copy2(source_path, target_path)
            else:
                # Copie standard
                shutil.copy(source_path, target_path)
            
            return True
            
        except Exception as e:
            print(f"Erreur lors de la copie {source_path} → {target_path}: {e}")
            return False
    
    @staticmethod
    async def _files_are_identical(file1: Path, file2: Path) -> bool:
        """
        Vérifie si deux fichiers sont identiques.
        
        Args:
            file1: Premier fichier
            file2: Deuxième fichier
            
        Returns:
            True si identiques
        """
        try:
            # Comparaison rapide par taille
            if file1.stat().st_size != file2.stat().st_size:
                return False
            
            # Comparaison par hash
            hash1 = FileHasher.compute_file_hash(file1)
            hash2 = FileHasher.compute_file_hash(file2)
            
            return hash1 == hash2
            
        except Exception:
            return False


class FileManager:
    """Gestionnaire principal des fichiers."""
    
    def __init__(self, config: TranslationConfig):
        """
        Initialise le gestionnaire.
        
        Args:
            config: Configuration du système
        """
        self.config = config
        self.metadata_manager = MetadataManager(config)
        self.task_builder = TaskBuilder(config)
        self.file_copier = FileCopier()
    
    async def read_file_content(self, file_path: Path) -> str:
        """
        Lit le contenu d'un fichier.
        
        Args:
            file_path: Chemin vers le fichier
            
        Returns:
            Contenu du fichier
        """
        async with aiofiles.open(file_path, 'r', encoding='utf-8') as f:
            return await f.read()
    
    async def write_file_content(self, file_path: Path, content: str) -> None:
        """
        Écrit du contenu dans un fichier.
        
        Args:
            file_path: Chemin vers le fichier
            content: Contenu à écrire
        """
        # Création du dossier parent
        file_path.parent.mkdir(parents=True, exist_ok=True)
        
        async with aiofiles.open(file_path, 'w', encoding='utf-8') as f:
            await f.write(content)
    
    async def get_file_size(self, file_path: Path) -> int:
        """
        Obtient la taille d'un fichier.
        
        Args:
            file_path: Chemin vers le fichier
            
        Returns:
            Taille en octets
        """
        import os
        stat = os.stat(file_path)
        return stat.st_size
