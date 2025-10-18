#!/usr/bin/env python3
"""
Test Python Basic - Validation Documentation API LLMaaS
Teste l'exemple Python requests de docs/llmaas/api.md
"""

import requests
import json
import os
import sys
from typing import Dict, Any
from dotenv import load_dotenv # Importation nécessaire

# Charger les variables d'environnement depuis .env
load_dotenv()

# Configuration
API_KEY = os.getenv("LLMAAS_API_KEY", "test-token-for-docs")
BASE_URL = "https://api.ai.cloud-temple.com/v1"

def test_chat_completion() -> bool:
    """Teste l'endpoint /v1/chat/completions basique"""
    print("🧪 Test: Python requests - Chat Completion")
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }

    payload = {
        "model": "granite3.3:8b",
        "messages": [
            {"role": "user", "content": "Bonjour !"}
        ],
        "max_tokens": 100
    }

    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            result = response.json()
            print("✅ Succès!")
            print(f"Content: {result['choices'][0]['message']['content']}")
            print(f"Usage: {result.get('usage', 'N/A')}")
            return True
        else:
            print(f"❌ Erreur {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur réseau: {e}")
        return False

def test_models_list() -> bool:
    """Teste l'endpoint /v1/models"""
    print("\n🧪 Test: Liste des modèles")
    
    headers = {
        "Authorization": f"Bearer {API_KEY}"
    }
    
    try:
        response = requests.get(
            f"{BASE_URL}/models",
            headers=headers,
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            models_count = len(result.get('data', []))
            print(f"✅ Succès! {models_count} modèles trouvés")
            
            # Affiche les 3 premiers modèles
            for i, model in enumerate(result.get('data', [])[:3]):
                print(f"  {i+1}. {model.get('id', 'N/A')}")
            
            return True
        else:
            print(f"❌ Erreur {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur réseau: {e}")
        return False

def test_error_handling() -> bool:
    """Teste la gestion d'erreur avec un modèle inexistant"""
    print("\n🧪 Test: Gestion d'erreur (modèle inexistant)")
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }

    payload = {
        "model": "modele-inexistant-test",
        "messages": [
            {"role": "user", "content": "Test"}
        ],
        "max_tokens": 10
    }

    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 404:
            error_data = response.json()
            print("✅ Erreur 404 correctement gérée")
            print(f"Error message: {error_data.get('error', {}).get('message', 'N/A')}")
            return True
        else:
            print(f"⚠️  Code de statut inattendu: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur réseau: {e}")
        return False

def test_invalid_auth() -> bool:
    """Teste l'erreur d'authentification"""
    print("\n🧪 Test: Authentification invalide")
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer token-invalid-test"
    }

    payload = {
        "model": "granite3.3:8b",
        "messages": [
            {"role": "user", "content": "Test"}
        ],
        "max_tokens": 10
    }

    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 401:
            error_data = response.json()
            print("✅ Erreur 401 correctement gérée")
            print(f"Error type: {error_data.get('error', {}).get('type', 'N/A')}")
            return True
        else:
            print(f"⚠️  Code de statut inattendu: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur réseau: {e}")
        return False

def main():
    """Execute tous les tests"""
    print("🚀 Tests Python Basic - Documentation LLMaaS API")
    print("=" * 50)
    
    tests = [
        test_models_list,
        test_chat_completion,
        test_error_handling,
        test_invalid_auth
    ]
    
    passed = 0
    total = len(tests)
    
    for test_func in tests:
        try:
            if test_func():
                passed += 1
        except Exception as e:
            print(f"❌ Exception dans {test_func.__name__}: {e}")
    
    print("\n" + "=" * 50)
    print(f"📊 Résultats: {passed}/{total} tests réussis")
    
    if passed == total:
        print("✅ Tous les tests passent - Documentation validée!")
        sys.exit(0)
    else:
        print("❌ Certains tests échouent - Révision nécessaire")
        sys.exit(1)

if __name__ == "__main__":
    main()
