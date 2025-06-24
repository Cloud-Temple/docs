#!/usr/bin/env python3
"""
🚀 Générateur de Documentation LLMaaS Cloud Temple

Ce script génère automatiquement la documentation Markdown des modèles LLMaaS
à partir du fichier de configuration YAML `memory-bank/models_config.yaml`.

Usage:
    python scripts/generate_models_doc.py

Auteur: Cloud Temple Documentation Team
Version: 1.0.0
"""

import yaml
import os
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging

# Configuration des couleurs pour les logs
class Colors:
    """Classe pour les codes couleurs ANSI"""
    RESET = '\033[0m'
    BOLD = '\033[1m'
    GREEN = '\033[92m'
    BLUE = '\033[94m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    CYAN = '\033[96m'
    MAGENTA = '\033[95m'

class LLMaaSDocGenerator:
    """
    Générateur de documentation pour les modèles LLMaaS Cloud Temple.
    
    Cette classe lit la configuration des modèles depuis un fichier YAML
    et génère une documentation Markdown formatée pour Docusaurus.
    """
    
    def __init__(self, config_path: str, output_path: str):
        """
        Initialise le générateur de documentation.
        
        Args:
            config_path (str): Chemin vers le fichier YAML de configuration
            output_path (str): Chemin de sortie pour le fichier Markdown
        """
        self.config_path = Path(config_path)
        self.output_path = Path(output_path)
        self.config = None
        
        # Configuration du logging avec couleurs
        logging.basicConfig(
            level=logging.INFO,
            format='%(message)s',
            handlers=[logging.StreamHandler()]
        )
        self.logger = logging.getLogger(__name__)
    
    def _log_info(self, message: str, icon: str = "ℹ️"):
        """Log une information avec couleur"""
        self.logger.info(f"{Colors.BLUE}{icon} {message}{Colors.RESET}")
    
    def _log_success(self, message: str, icon: str = "✅"):
        """Log un succès avec couleur"""
        self.logger.info(f"{Colors.GREEN}{icon} {message}{Colors.RESET}")
    
    def _log_warning(self, message: str, icon: str = "⚠️"):
        """Log un avertissement avec couleur"""
        self.logger.info(f"{Colors.YELLOW}{icon} {message}{Colors.RESET}")
    
    def _log_error(self, message: str, icon: str = "❌"):
        """Log une erreur avec couleur"""
        self.logger.error(f"{Colors.RED}{icon} {message}{Colors.RESET}")
    
    def load_config(self) -> bool:
        """
        Charge la configuration depuis le fichier YAML.
        
        Returns:
            bool: True si le chargement a réussi, False sinon
        """
        try:
            self._log_info(f"Lecture du fichier {self.config_path}")
            
            if not self.config_path.exists():
                self._log_error(f"Fichier non trouvé: {self.config_path}")
                return False
            
            with open(self.config_path, 'r', encoding='utf-8') as file:
                self.config = yaml.safe_load(file)
            
            total_models = self.config.get('stats', {}).get('total_models', 0)
            self._log_success(f"Configuration chargée: {total_models} modèles trouvés")
            return True
            
        except yaml.YAMLError as e:
            self._log_error(f"Erreur YAML: {e}")
            return False
        except Exception as e:
            self._log_error(f"Erreur lors du chargement: {e}")
            return False
    
    def _get_capability_icons(self, model: Dict[str, Any]) -> str:
        """
        Génère les icônes des capacités d'un modèle.
        
        Args:
            model (Dict): Données du modèle
            
        Returns:
            str: Chaîne formatée avec les icônes des capacités
        """
        capabilities = [
            ("Outils/Agent", model.get('supports_tools', False)),
            ("Vision", model.get('supports_vision', False)),
            ("Raisonnement", model.get('supports_reasoning', False)),
            ("Sécurité", model.get('supports_security', False))
        ]
        
        icons = []
        for name, supported in capabilities:
            icon = "✅" if supported else "❌"
            icons.append(f"{icon} {name}")
        
        return " • ".join(icons)
    
    def _format_tags(self, tags: List[str]) -> str:
        """
        Formate les tags d'un modèle.
        
        Args:
            tags (List[str]): Liste des tags
            
        Returns:
            str: Tags formatés pour Markdown
        """
        if not tags:
            return ""
        return " ".join([f"`{tag}`" for tag in tags])
    
    def _format_number(self, number: Optional[float]) -> str:
        """
        Formate un nombre avec séparateurs de milliers.
        
        Args:
            number (Optional[float]): Nombre à formater
            
        Returns:
            str: Nombre formaté ou chaîne vide si None
        """
        if number is None:
            return ""
        
        if isinstance(number, int):
            return f"{number:,}".replace(",", " ")
        else:
            return f"{number:,.2f}".replace(",", " ")
    
    def _generate_licence_filename(self, model_name: str, parameters_string: str) -> str:
        """
        Génère automatiquement le nom du fichier de licence à partir du nom du modèle.
        
        Args:
            model_name (str): Nom du modèle (ex: "Qwen3 14B")
            parameters_string (str): Taille du modèle (ex: "14B")
            
        Returns:
            str: Nom du fichier de licence (ex: "qwen3_14b.licence.md")
        """
        # Normalisation du nom du modèle
        name_lower = model_name.lower()
        
        # Mappings spéciaux pour correspondre aux noms de fichiers existants
        name_mappings = {
            "llama 3.3 70b": "llama3.3_70b",
            "qwen3 235b": "apache2",  # Apache 2.0
            "deepseek-r1 671b": "deepseek-r1_671b", 
            "deepseek-r1 70b": "deepseek-r1_70b",
            "deepseek-r1 32b": "deepseek-r1_32b",
            "deepseek-r1 14b": "deepseek-r1_14b",
            "gemma 3 27b": "gemma3_27b",
            "gemma 3 12b": "gemma3_12b",
            "gemma 3 4b": "gemma3_4b", 
            "gemma 3 1b": "gemma3_1b",
            "qwen3 30b-a3b fp8": "apache2",  # Apache 2.0
            "granite 3.2 vision": "apache2",  # Apache 2.0
            "granite 3.3 8b": "apache2",  # Apache 2.0
            "granite 3.3 2b": "apache2",  # Apache 2.0
            "granite 3.1 moe": "apache2",  # Apache 2.0
            "granite 3 guardian 2b": "apache2",  # Apache 2.0
            "granite 3 guardian 8b": "apache2",  # Apache 2.0
            "granite embedding": "apache2",  # Apache 2.0
            "lucie-7b-instruct": "apache2",  # Apache 2.0
            "mistral small 3.1": "apache2",  # Apache 2.0
            "foundation-sec-8b": "apache2",  # Apache 2.0
            "cogito 14b": "cogito_14b",
            "cogito 32b": "cogito_32b", 
            "cogito 3b": "cogito_3b",
            "qwen3 32b": "apache2",  # Apache 2.0
            "qwen3 14b": "apache2",  # Apache 2.0
            "qwen3 8b": "apache2",  # Apache 2.0
            "qwen3 4b": "apache2",  # Apache 2.0
            "qwen3 1.7b": "apache2",  # Apache 2.0
            "qwen3 0.6b": "apache2",  # Apache 2.0
            "qwen 2.5 32b": "qwen2.5_32b",
            "qwen 2.5 14b": "qwen2.5_14b",
            "qwen 2.5 3b": "qwen2.5_3b",
            "qwen 2.5 1.5b": "qwen2.5_1.5b",
            "qwen 2.5 0.5b": "qwen2.5_0.5b",
            "qwen2.5-vl 7b": "apache2",  # Apache 2.0
            "qwen2.5-vl 3b": "apache2",  # Apache 2.0
            "qwq-32b": "apache2",  # Apache 2.0
            "deepcoder": "apache2",  # Apache 2.0
            "devstral 24b": "apache2"  # Apache 2.0
        }
        
        # Vérifier si on a un mapping direct
        if name_lower in name_mappings:
            return name_mappings[name_lower]
        
        # Génération automatique par défaut
        # Remplacer espaces par underscore, supprimer caractères spéciaux
        clean_name = name_lower.replace(" ", "_").replace("-", "-").replace(".", "")
        
        # Ajouter la taille si pas déjà présente
        if parameters_string.lower() not in clean_name:
            clean_name += f"_{parameters_string.lower()}"
        
        return clean_name
    
    def _generate_model_section(self, model: Dict[str, Any]) -> str:
        """
        Génère la section Markdown pour un modèle.
        
        Args:
            model (Dict): Données du modèle
            
        Returns:
            str: Section Markdown formatée
        """
        # Icônes conditionnelles
        speed_icon = " ⚡" if model.get('is_fast', False) else ""
        efficient_icon = " 🌱" if 'Efficient' in model.get('tags', []) else ""
        
        # Construction de la section
        section = f"### {model['name']}\n"
        section += f"**{model['editor']} • {model['parameters_string']} paramètres • "
        section += f"Contexte : {self._format_number(model['context_size'])} tokens**\n\n"
        section += f"{model['description']}\n\n"
        
        # Spécifications techniques
        section += "**Spécifications techniques :**\n"
        
        if 'speed' in model and model['speed']:
            section += f"- **Vitesse** : {model['speed']} tokens/seconde{speed_icon}\n"
        
        if 'energy_per_million_tokens' in model and model['energy_per_million_tokens']:
            section += f"- **Consommation** : {model['energy_per_million_tokens']} kWh/million tokens{efficient_icon}\n"
        
        # Génération du lien vers la licence
        licence_text = model['licence']
        licence_filename = self._generate_licence_filename(model['name'], model['parameters_string'])
        licence_file = f"./licences/{licence_filename}.licence.md"
        
        # Vérifier si le fichier de licence existe
        licence_file_path = self.output_path.parent / "licences" / f"{licence_filename}.licence.md"
        if licence_file_path.exists():
            licence_text = f"[{model['licence']}]({licence_file})"
        # Sinon, garder le texte de licence sans lien
        
        section += f"- **Licence** : {licence_text}\n"
        
        if 'location' in model:
            section += f"- **Localisation** : {model['location']}\n"
        
        section += "\n"
        
        # Capacités
        section += "**Capacités :**\n"
        section += f"{self._get_capability_icons(model)}\n\n"
        
        # Tags
        if model.get('tags'):
            section += f"**Tags :** {self._format_tags(model['tags'])}\n\n"
        
        # Cas d'usage
        if model.get('use_cases'):
            section += "**Cas d'usage :**\n"
            for use_case in model['use_cases']:
                section += f"- {use_case}\n"
            section += "\n"
        
        section += "---\n\n"
        return section
    
    def _generate_use_cases_section(self, use_cases: List[Dict[str, Any]]) -> str:
        """
        Génère la section des cas d'usage recommandés.
        
        Args:
            use_cases (List[Dict]): Liste des cas d'usage
            
        Returns:
            str: Section Markdown des cas d'usage
        """
        section = "## Cas d'Usage Recommandés\n\n"
        
        for use_case in use_cases:
            section += f"### {use_case['name']}\n"
            section += f"{use_case['description']}\n\n"
            section += "**Modèles recommandés :**\n"
            
            for model in use_case['recommended_models']:
                section += f"- {model}\n"
            
            section += "\n"
        
        return section
    
    def generate_documentation(self) -> bool:
        """
        Génère la documentation complète des modèles.
        
        Returns:
            bool: True si la génération a réussi, False sinon
        """
        try:
            if self.config is None:
                self._log_error("Configuration non chargée")
                return False
                
            self._log_info("🔨 Génération de la documentation en cours...")
            
            stats = self.config['stats']
            large_models = self.config.get('large_models', [])
            specialized_models = self.config.get('specialized_models', [])
            use_cases = self.config.get('use_cases', [])
            
            # En-tête du fichier Markdown
            markdown = f"""---
title: Catalogue des Modèles LLMaaS
sidebar_position: 2
---

# Catalogue des Modèles LLM as a Service

## Vue d'ensemble

Cloud Temple LLMaaS propose **{stats['total_models']} modèles de langage large** soigneusement sélectionnés et optimisés pour répondre aux exigences **SecNumCloud** les plus strictes. Notre catalogue couvre l'ensemble du spectre, des micro-modèles ultra-efficaces aux modèles extrêmement volumineux.

### Statistiques Globales

| Métrique | Valeur |
|----------|--------|
| **Nombre total de modèles** | {stats['total_models']} modèles |
| **Contexte minimum** | {self._format_number(stats['min_context'])} tokens |
| **Contexte maximum** | {self._format_number(stats['max_context'])} tokens |
| **Conformité** | SecNumCloud {'✅' if stats['secnumcloud'] else '❌'} HDS {'✅' if stats['hds'] else '❌'} Souveraineté {'✅' if stats['sovereign'] else '❌'} C5 {'✅' if stats.get('c5', False) else '❌'} |
| **Localisation** | 100% France 🇫🇷 |

### Tarification

| Type d'utilisation | Prix |
|-------------------|------|
| **Tokens d'entrée** | {stats['pricing_input']}€ / million de tokens |
| **Tokens de sortie** | {stats['pricing_output']}€ / million de tokens |
| **Raisonnement avancé** | {stats['pricing_reasoning']}€ / million de tokens |

## Modèles de Grande Taille

"""
            
            # Génération des modèles de grande taille
            for model in large_models:
                markdown += self._generate_model_section(model)
            
            # Génération des modèles spécialisés
            markdown += "## Modèles Spécialisés\n\n"
            for model in specialized_models:
                markdown += self._generate_model_section(model)
            
            # Génération des cas d'usage
            if use_cases:
                markdown += self._generate_use_cases_section(use_cases)
            
            # Écriture du fichier
            self.output_path.parent.mkdir(parents=True, exist_ok=True)
            
            with open(self.output_path, 'w', encoding='utf-8') as file:
                file.write(markdown)
            
            self._log_success(f"Documentation générée : {self.output_path}")
            self._log_info(f"📊 {len(large_models)} modèles de grande taille")
            self._log_info(f"🔧 {len(specialized_models)} modèles spécialisés")
            self._log_info(f"🎯 {len(use_cases)} cas d'usage documentés")
            
            return True
            
        except Exception as e:
            self._log_error(f"Erreur lors de la génération: {e}")
            return False
    
    def run(self) -> bool:
        """
        Lance le processus complet de génération.
        
        Returns:
            bool: True si tout s'est bien passé, False sinon
        """
        print(f"\n{Colors.CYAN}{Colors.BOLD}🚀 Générateur de Documentation LLMaaS Cloud Temple{Colors.RESET}")
        print(f"{Colors.CYAN}{'=' * 60}{Colors.RESET}\n")
        
        if not self.load_config():
            return False
        
        if not self.generate_documentation():
            return False
        
        print(f"\n{Colors.GREEN}{Colors.BOLD}🎉 Documentation générée avec succès !{Colors.RESET}")
        print(f"{Colors.GREEN}Fichier créé : {self.output_path}{Colors.RESET}\n")
        
        return True

def main():
    """Fonction principale du script"""
    # Chemins des fichiers
    script_dir = Path(__file__).parent
    project_dir = script_dir.parent
    
    config_path = project_dir / "memory-bank" / "models_config.yaml"
    output_path = project_dir / "docs" / "llmaas" / "models.md"
    
    # Génération de la documentation
    generator = LLMaaSDocGenerator(str(config_path), str(output_path))
    success = generator.run()
    
    # Code de sortie
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
