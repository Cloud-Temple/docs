"""
Configuration et gestion des variables d'environnement pour le système de traduction.

Ce module centralise toutes les configurations nécessaires au fonctionnement
du système de traduction automatique de la documentation Cloud Temple.
"""

import os
from pathlib import Path
from typing import Dict, Optional
from pydantic import BaseModel, Field, validator
from dotenv import load_dotenv


class TranslationConfig(BaseModel):
    """Configuration pour le système de traduction."""
    
    # Configuration API
    api_url: str = Field(
        default="https://api.ai.cloud-temple.com/v1/chat/completions",
        description="URL de l'API Cloud Temple LLMaaS"
    )
    api_key: Optional[str] = Field(
        default=None,
        description="Clé API pour l'authentification"
    )
    
    # Configuration modèle
    model: str = Field(
        default="qwen3:30b-a3b",
        description="Modèle utilisé pour la traduction"
    )
    temperature: float = Field(
        default=0.1,
        ge=0.0,
        le=2.0,
        description="Température du modèle (créativité)"
    )
    top_p: float = Field(
        default=1.0,
        ge=0.0,
        le=1.0,
        description="Top-p sampling"
    )
    
    # Configuration système
    doc_base_path: Path = Field(
        default=Path("."),
        description="Chemin de base vers la documentation"
    )
    concurrent_translations: int = Field(
        default=4,
        ge=1,
        le=20,
        description="Nombre de traductions simultanées"
    )
    max_retries: int = Field(
        default=5,
        ge=1,
        le=10,
        description="Nombre max de tentatives par traduction"
    )
    retry_delay: float = Field(
        default=5.0,
        ge=1.0,
        le=60.0,
        description="Délai entre les tentatives (secondes)"
    )
    
    # Configuration contenu
    max_tokens_per_block: int = Field(
        default=5000, # Réduit davantage pour laisser de la place au prompt système et à la complétion
        ge=500, # Ajustement de la borne inférieure
        le=6000, # Ajustement de la borne supérieure pour rester dans la limite du modèle
        description="Taille maximale d'un bloc de traduction"
    )
    
    @validator('doc_base_path', pre=True)
    def convert_path(cls, v) -> Path:
        """Convertit le chemin en objet Path."""
        return Path(v)
    
    @validator('api_key')
    def validate_api_key(cls, v) -> Optional[str]:
        """Valide la présence de la clé API si nécessaire."""
        if not v and not os.getenv('TRANSLATION_LOCAL_MODE'):
            raise ValueError("CLOUDTEMPLE_API_KEY est requis")
        return v


class LanguageConfig(BaseModel):
    """Configuration des langues supportées."""
    
    # Langues cibles avec leurs noms complets
    LANGUAGES: Dict[str, str] = {
        'en': 'English',
        'de': 'Deutsch',
        'es': 'Español',
        'it': 'Italiano'
    }
    
    # Extensions de fichiers à traiter
    TRANSLATABLE_EXTENSIONS: set = {'.md'}
    
    # Extensions de fichiers à copier sans traduction
    COPYABLE_EXTENSIONS: set = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.docx', '.pdf'}


def load_config() -> TranslationConfig:
    """
    Charge la configuration depuis les variables d'environnement.
    
    Returns:
        TranslationConfig: Configuration chargée et validée
        
    Raises:
        ValueError: Si la configuration est invalide
    """
    # Chargement du fichier .env s'il existe
    env_files = [
        Path("scripts/.env"),
        Path("scripts/translate_py/.env"),
        Path(".env")
    ]
    
    for env_file in env_files:
        if env_file.exists():
            load_dotenv(env_file, override=True)
            break
    
    # Construction de la configuration depuis les variables d'environnement
    config_data = {
        'api_url': os.getenv('CLOUDTEMPLE_API_URL'),
        'api_key': os.getenv('CLOUDTEMPLE_API_KEY'),
        'model': os.getenv('TRANSLATION_MODEL'),
        'temperature': _get_float_env('TRANSLATION_TEMPERATURE'),
        'top_p': _get_float_env('TRANSLATION_TOP_P'),
        'doc_base_path': os.getenv('DOC_BASE_PATH'),
        'concurrent_translations': _get_int_env('CONCURRENT_TRANSLATIONS'),
        'max_retries': _get_int_env('MAX_RETRIES'),
        'retry_delay': _get_float_env('RETRY_DELAY'),
        'max_tokens_per_block': _get_int_env('MAX_TOKENS_PER_BLOCK'),
    }
    
    # Suppression des valeurs None pour utiliser les défauts
    config_data = {k: v for k, v in config_data.items() if v is not None}
    
    return TranslationConfig(**config_data)


def _get_int_env(key: str) -> Optional[int]:
    """Récupère une variable d'environnement entière."""
    value = os.getenv(key)
    if value:
        try:
            # Strip les espaces et guillemets
            cleaned_value = value.strip().strip('\'"')
            return int(cleaned_value)
        except ValueError:
            return None
    return None


def _get_float_env(key: str) -> Optional[float]:
    """Récupère une variable d'environnement flottante."""
    value = os.getenv(key)
    if value:
        try:
            return float(value)
        except ValueError:
            return None
    return None


def get_paths(config: TranslationConfig) -> Dict[str, Path]:
    """
    Génère les chemins importants du projet.
    
    Args:
        config: Configuration du système
        
    Returns:
        Dict contenant les chemins principaux
    """
    # Détection automatique du répertoire racine du projet
    base_path = _find_project_root(config.doc_base_path)
    
    return {
        'docs': base_path / 'docs',
        'i18n': base_path / 'i18n',
        'scripts': base_path / 'scripts',
        'metadata': base_path / 'scripts' / 'translate_py' / 'translation-meta.json',
        'translate_py': base_path / 'scripts' / 'translate_py'
    }


def _find_project_root(start_path: Path) -> Path:
    """
    Trouve automatiquement la racine du projet en remontant les répertoires.
    
    Args:
        start_path: Chemin de départ
        
    Returns:
        Chemin vers la racine du projet
    """
    current = Path(start_path).resolve()
    
    # Cherche la racine en remontant jusqu'à trouver le dossier 'docs'
    while current != current.parent:
        if (current / 'docs').exists() and (current / 'scripts').exists():
            return current
        current = current.parent
    
    # Si pas trouvé, utilise le répertoire courant
    return Path(".").resolve()


def validate_environment(config: TranslationConfig) -> bool:
    """
    Valide l'environnement d'exécution.
    
    Args:
        config: Configuration à valider
        
    Returns:
        True si l'environnement est valide
        
    Raises:
        FileNotFoundError: Si des dossiers requis n'existent pas
        ValueError: Si la configuration est invalide
    """
    paths = get_paths(config)
    
    # Vérification des dossiers essentiels
    if not paths['docs'].exists():
        raise FileNotFoundError(f"Dossier docs non trouvé : {paths['docs']}")
    
    # Création du dossier i18n si nécessaire
    paths['i18n'].mkdir(exist_ok=True)
    
    # Vérification de la clé API en mode distant
    if not os.getenv('TRANSLATION_LOCAL_MODE') and not config.api_key:
        raise ValueError("CLOUDTEMPLE_API_KEY requis pour l'API distante")
    
    return True


# Instance globale de configuration des langues
LANG_CONFIG = LanguageConfig()
