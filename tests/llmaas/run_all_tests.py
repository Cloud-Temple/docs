#!/usr/bin/env python3
"""
Run All Tests - Suite complète de validation LLMaaS
Orchestre tous les tests de validation de la documentation API LLMaaS
"""

import os
import sys
import subprocess
import time
from pathlib import Path

# Configuration globale
TESTS_DIR = Path(__file__).parent
API_KEY = os.getenv("LLMAAS_API_KEY", "test-token-for-docs")

class TestRunner:
    def __init__(self):
        self.results = {}
        self.start_time = time.time()
    
    def run_python_script(self, script_name: str) -> bool:
        """Exécute un script Python et retourne True si succès"""
        script_path = TESTS_DIR / script_name
        
        if not script_path.exists():
            print(f"❌ Script non trouvé: {script_path}")
            return False
        
        print(f"\n{'='*20} {script_name} {'='*20}")
        
        try:
            result = subprocess.run(
                [sys.executable, str(script_path)],
                capture_output=False,  # Affichage direct
                timeout=120,  # 2 minutes max par test
                env={**os.environ, "LLMAAS_API_KEY": API_KEY}
            )
            
            success = result.returncode == 0
            
            if success:
                print(f"✅ {script_name}: SUCCÈS")
            else:
                print(f"❌ {script_name}: ÉCHEC (code {result.returncode})")
            
            return success
            
        except subprocess.TimeoutExpired:
            print(f"⏰ {script_name}: TIMEOUT (>2min)")
            return False
        except Exception as e:
            print(f"❌ {script_name}: EXCEPTION - {e}")
            return False
    
    def run_node_script(self, script_name: str) -> bool:
        """Exécute un script Node.js et retourne True si succès"""
        script_path = TESTS_DIR / script_name
        
        if not script_path.exists():
            print(f"❌ Script non trouvé: {script_path}")
            return False
        
        print(f"\n{'='*20} {script_name} {'='*20}")
        
        # Vérifier que Node.js est disponible
        try:
            subprocess.run(["node", "--version"], capture_output=True, check=True)
        except (subprocess.CalledProcessError, FileNotFoundError):
            print("❌ Node.js non disponible")
            return False
        
        try:
            result = subprocess.run(
                ["node", str(script_path)],
                capture_output=False,
                timeout=120,
                env={**os.environ, "LLMAAS_API_KEY": API_KEY}
            )
            
            success = result.returncode == 0
            
            if success:
                print(f"✅ {script_name}: SUCCÈS")
            else:
                print(f"❌ {script_name}: ÉCHEC (code {result.returncode})")
            
            return success
            
        except subprocess.TimeoutExpired:
            print(f"⏰ {script_name}: TIMEOUT (>2min)")
            return False
        except Exception as e:
            print(f"❌ {script_name}: EXCEPTION - {e}")
            return False
    
    def check_dependencies(self) -> dict:
        """Vérifie les dépendances disponibles"""
        deps = {}
        
        # Python requests
        try:
            import requests
            deps['requests'] = True
        except ImportError:
            deps['requests'] = False
        
        # OpenAI SDK
        try:
            import openai
            deps['openai'] = True
        except ImportError:
            deps['openai'] = False
        
        # LangChain
        try:
            import langchain
            deps['langchain'] = True
        except ImportError:
            deps['langchain'] = False
        
        # Node.js et axios
        try:
            result = subprocess.run(["node", "-e", "require('axios')"], 
                                  capture_output=True, timeout=5)
            deps['node_axios'] = result.returncode == 0
        except:
            deps['node_axios'] = False
        
        return deps
    
    def print_summary(self):
        """Affiche le résumé des tests"""
        total_tests = len(self.results)
        passed_tests = sum(1 for success in self.results.values() if success)
        
        duration = time.time() - self.start_time
        
        print("\n" + "="*70)
        print("🏁 RÉSUMÉ FINAL - Tests Documentation LLMaaS API")
        print("="*70)
        
        for test_name, success in self.results.items():
            status = "✅ PASS" if success else "❌ FAIL"
            print(f"{status} {test_name}")
        
        print("-"*70)
        print(f"📊 Résultats: {passed_tests}/{total_tests} tests réussis")
        print(f"⏱️  Durée totale: {duration:.1f}s")
        
        success_rate = passed_tests / total_tests if total_tests > 0 else 0
        
        if success_rate >= 0.8:
            print("🎉 EXCELLENTE COUVERTURE - Documentation validée!")
            return True
        elif success_rate >= 0.6:
            print("✅ BONNE COUVERTURE - Documentation largement validée")
            return True
        elif success_rate >= 0.4:
            print("⚠️  COUVERTURE PARTIELLE - Révisions nécessaires")
            return False
        else:
            print("❌ COUVERTURE INSUFFISANTE - Documentation à revoir")
            return False

def main():
    print("🚀 Suite Complète de Tests LLMaaS API Documentation")
    print("="*70)
    print(f"📁 Répertoire tests: {TESTS_DIR}")
    print(f"🔑 API Key: {'✅ Configurée' if API_KEY != 'test-token-for-docs' else '⚠️  Token par défaut'}")
    
    runner = TestRunner()
    
    # Vérification des dépendances
    print("\n🔍 Vérification des dépendances...")
    deps = runner.check_dependencies()
    
    for dep, available in deps.items():
        status = "✅" if available else "❌"
        print(f"  {status} {dep}")
    
    # Liste des tests à exécuter
    tests_config = [
        # Tests Python critiques
        {
            'name': 'Python Basic (requests)',
            'script': 'test_python_basic.py',
            'type': 'python',
            'critical': True,
            'requires': ['requests']
        },
        {
            'name': 'Python Streaming SSE',
            'script': 'test_python_streaming.py',
            'type': 'python',
            'critical': True,
            'requires': ['requests']
        },
        
        # Tests JavaScript/Node.js
        {
            'name': 'JavaScript Node.js (axios)',
            'script': 'test_javascript_node.js',
            'type': 'node',
            'critical': True,
            'requires': ['node_axios']
        },
        
        # Tests SDK (optionnels mais importants)
        {
            'name': 'Python SDK (OpenAI + LangChain)',
            'script': 'test_python_sdk.py',
            'type': 'python',
            'critical': False,
            'requires': ['requests']
        },
        
        # Tests Audio (optionnels)
        {
            'name': 'Audio Transcription',
            'script': 'test_audio_transcription.py',
            'type': 'python',
            'critical': False,
            'requires': ['requests']
        }
    ]
    
    # Exécution des tests
    print(f"\n🧪 Exécution de {len(tests_config)} suites de tests...")
    
    for test_config in tests_config:
        test_name = test_config['name']
        script = test_config['script']
        test_type = test_config['type']
        critical = test_config['critical']
        requires = test_config.get('requires', [])
        
        # Vérifier les dépendances
        missing_deps = [dep for dep in requires if not deps.get(dep, False)]
        
        if missing_deps:
            print(f"\n⚠️  {test_name}: Dépendances manquantes: {missing_deps}")
            if critical:
                print(f"❌ Test critique ignoré")
                runner.results[test_name] = False
            else:
                print(f"ℹ️  Test optionnel ignoré")
                runner.results[test_name] = True  # Non bloquant
            continue
        
        # Exécuter le test
        if test_type == 'python':
            success = runner.run_python_script(script)
        elif test_type == 'node':
            success = runner.run_node_script(script)
        else:
            print(f"❌ Type de test inconnu: {test_type}")
            success = False
        
        runner.results[test_name] = success
        
        # Pause entre les tests
        time.sleep(1)
    
    # Résumé final
    overall_success = runner.print_summary()
    
    # Code de sortie
    sys.exit(0 if overall_success else 1)

if __name__ == "__main__":
    main()
