"""
Modèles de données pour le système de traduction.

Ce module définit toutes les structures de données utilisées par le système
de traduction, incluant les statistiques, métadonnées et états de traduction.
"""

from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
from pathlib import Path
from typing import Dict, List, Optional, Set
from pydantic import BaseModel


class TranslationStatus(Enum):
    """États possibles d'une traduction."""
    PENDING = "pending"          # En attente
    PROCESSING = "processing"    # En cours de traitement
    COMPLETED = "completed"      # Terminée avec succès
    FAILED = "failed"           # Échec
    SKIPPED = "skipped"         # Ignorée (à jour)
    COPIED = "copied"           # Copiée (fichier non-markdown)


class FileType(Enum):
    """Types de fichiers gérés par le système."""
    MARKDOWN = "markdown"        # Fichier .md à traduire
    IMAGE = "image"             # Image à copier
    DOCUMENT = "document"       # Document (docx, pdf) à copier
    OTHER = "other"             # Autre type de fichier


@dataclass
class TranslationStats:
    """Statistiques globales de traduction."""
    
    # Compteurs principaux
    files_processed: int = 0
    files_translated: int = 0
    files_copied: int = 0
    files_skipped: int = 0
    files_failed: int = 0
    
    # Détails temporels
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
    
    # Statistiques par langue
    stats_by_lang: Dict[str, Dict[str, int]] = field(default_factory=dict)
    
    # Détails des erreurs
    errors: List[str] = field(default_factory=list)
    
    def add_error(self, error: str) -> None:
        """Ajoute une erreur aux statistiques."""
        self.errors.append(f"[{datetime.now().strftime('%H:%M:%S')}] {error}")
    
    def start_timer(self) -> None:
        """Démarre le chronomètre."""
        self.start_time = datetime.now()
    
    def stop_timer(self) -> None:
        """Arrête le chronomètre."""
        self.end_time = datetime.now()
    
    @property
    def duration(self) -> Optional[float]:
        """Durée totale en secondes."""
        if self.start_time and self.end_time:
            return (self.end_time - self.start_time).total_seconds()
        return None
    
    @property
    def total_files(self) -> int:
        """Nombre total de fichiers traités."""
        return (self.files_processed + self.files_translated + 
                self.files_copied + self.files_skipped + self.files_failed)
    
    def increment_lang_stat(self, lang: str, stat_type: str) -> None:
        """Incrémente une statistique pour une langue."""
        if lang not in self.stats_by_lang:
            self.stats_by_lang[lang] = {}
        
        if stat_type not in self.stats_by_lang[lang]:
            self.stats_by_lang[lang][stat_type] = 0
        
        self.stats_by_lang[lang][stat_type] += 1


@dataclass
class FileTranslationTask:
    """Tâche de traduction pour un fichier."""
    
    # Informations sur le fichier
    source_path: Path
    relative_path: str
    file_type: FileType
    
    # Configuration de traduction
    target_lang: str
    target_lang_name: str
    target_path: Path
    
    # État et métadonnées
    status: TranslationStatus = TranslationStatus.PENDING
    current_hash: Optional[str] = None
    stored_hash: Optional[str] = None
    needs_translation: bool = True
    
    # Informations de traitement
    content_size: int = 0
    blocks_count: int = 0
    current_block: int = 0
    
    # Résultats
    error_message: Optional[str] = None
    processing_time: Optional[float] = None
    
    @property
    def is_translatable(self) -> bool:
        """Vérifie si le fichier peut être traduit."""
        return self.file_type == FileType.MARKDOWN
    
    @property
    def is_up_to_date(self) -> bool:
        """Vérifie si la traduction est à jour."""
        return (self.stored_hash is not None and 
                self.current_hash == self.stored_hash)
    
    @property
    def progress_percent(self) -> float:
        """Pourcentage de progression du traitement."""
        if self.blocks_count == 0:
            return 0.0
        return min(100.0, (self.current_block / self.blocks_count) * 100.0)


class TranslationMetadata(BaseModel):
    """Métadonnées de traduction stockées en JSON."""
    
    # Dictionnaire: chemin_relatif -> langue -> hash
    files: Dict[str, Dict[str, str]] = {}
    
    # Métadonnées globales
    last_update: Optional[datetime] = None
    version: str = "2.0"
    
    class Config:
        """Configuration Pydantic."""
        json_encoders = {
            datetime: lambda v: v.isoformat() if v else None
        }
    
    def get_hash(self, file_path: str, lang: str) -> Optional[str]:
        """Récupère le hash stocké pour un fichier et une langue."""
        return self.files.get(file_path, {}).get(lang)
    
    def set_hash(self, file_path: str, lang: str, hash_value: str) -> None:
        """Définit le hash pour un fichier et une langue."""
        if file_path not in self.files:
            self.files[file_path] = {}
        
        self.files[file_path][lang] = hash_value
        self.last_update = datetime.now()
    
    def remove_file(self, file_path: str) -> None:
        """Supprime un fichier des métadonnées."""
        if file_path in self.files:
            del self.files[file_path]
            self.last_update = datetime.now()
    
    def get_files_for_lang(self, lang: str) -> Set[str]:
        """Récupère tous les fichiers traduits pour une langue."""
        return {
            file_path for file_path, langs in self.files.items()
            if lang in langs
        }
    
    def cleanup_missing_files(self, existing_files: Set[str]) -> None:
        """Supprime les métadonnées des fichiers qui n'existent plus."""
        files_to_remove = set(self.files.keys()) - existing_files
        for file_path in files_to_remove:
            self.remove_file(file_path)


@dataclass
class TranslationJob:
    """Job de traduction global."""
    
    # Configuration
    source_directory: Path
    target_languages: List[str]
    force_retranslation: bool = False
    dry_run: bool = False
    init_mode: bool = False
    translate_missing: bool = False
    
    # État du job
    tasks: List[FileTranslationTask] = field(default_factory=list)
    metadata: Optional[TranslationMetadata] = None
    stats: TranslationStats = field(default_factory=TranslationStats)
    
    # Filtres
    file_filter: Optional[str] = None
    path_filter: Optional[str] = None
    
    def add_task(self, task: FileTranslationTask) -> None:
        """Ajoute une tâche au job."""
        self.tasks.append(task)
    
    def get_tasks_by_status(self, status: TranslationStatus) -> List[FileTranslationTask]:
        """Récupère les tâches par statut."""
        return [task for task in self.tasks if task.status == status]
    
    def get_tasks_by_lang(self, lang: str) -> List[FileTranslationTask]:
        """Récupère les tâches pour une langue."""
        return [task for task in self.tasks if task.target_lang == lang]
    
    @property
    def total_tasks(self) -> int:
        """Nombre total de tâches."""
        return len(self.tasks)
    
    @property
    def pending_tasks(self) -> List[FileTranslationTask]:
        """Tâches en attente."""
        return self.get_tasks_by_status(TranslationStatus.PENDING)
    
    @property
    def completed_tasks(self) -> List[FileTranslationTask]:
        """Tâches terminées."""
        return self.get_tasks_by_status(TranslationStatus.COMPLETED)
    
    @property
    def failed_tasks(self) -> List[FileTranslationTask]:
        """Tâches échouées."""
        return self.get_tasks_by_status(TranslationStatus.FAILED)


@dataclass 
class APIResponse:
    """Réponse de l'API de traduction."""
    
    success: bool
    content: Optional[str] = None
    error: Optional[str] = None
    
    # Métadonnées de la réponse
    model_used: Optional[str] = None
    tokens_used: Optional[int] = None
    response_time: Optional[float] = None
    
    # Informations de retry
    attempt_number: int = 1
    max_attempts: int = 1


@dataclass
class BlockTranslationResult:
    """Résultat de traduction d'un bloc de contenu."""
    
    original_text: str
    translated_text: Optional[str] = None
    success: bool = False
    error: Optional[str] = None
    
    # Métadonnées
    block_number: int = 0
    total_blocks: int = 0
    processing_time: Optional[float] = None
    tokens_used: Optional[int] = 0
