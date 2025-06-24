"""
Système de traduction automatique pour la documentation Cloud Temple.

Ce package fournit un système complet de traduction de documentation
Markdown utilisant l'API Cloud Temple LLMaaS avec une interface colorée,
suivi de progression et gestion des métadonnées.
"""

__version__ = "2.0.0"
__author__ = "Cloud Temple"
__description__ = "Système de traduction automatique pour Docusaurus"

from .config import TranslationConfig, load_config
from .models import TranslationStatus, FileType, TranslationStats
from .ui import TranslationUI
from .translator import CloudTempleTranslator, test_api_connection
from .file_manager import FileManager

__all__ = [
    "TranslationConfig",
    "load_config", 
    "TranslationStatus",
    "FileType",
    "TranslationStats",
    "TranslationUI",
    "CloudTempleTranslator",
    "test_api_connection",
    "FileManager"
]
