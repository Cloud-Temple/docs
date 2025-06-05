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
        
        section += f"- **Licence** : {model['licence']}\n"
        
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
