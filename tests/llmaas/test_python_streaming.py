#!/usr/bin/env python3
"""
Test Python Streaming - Validation Documentation API LLMaaS
Teste l'exemple Python streaming SSE de docs/llmaas/api.md
"""

import requests
import json
import os
import sys
import time
from typing import Generator, Dict, Any
from dotenv import load_dotenv # Importation nécessaire

# Charger les variables d'environnement depuis .env
load_dotenv()

# Configuration
API_KEY = os.getenv("LLMAAS_API_KEY", "test-token-for-docs")
BASE_URL = "https://api.ai.cloud-temple.com/v1"

def stream_chat_test(message: str, model: str = "granite3.3:8b") -> bool:
    """Teste le streaming SSE avec parsing exact de la documentation"""
    print(f"🧪 Test: Python Streaming SSE")
    print(f"Message: {message}")
    print(f"Model: {model}")
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    
    payload = {
        "model": model,
        "messages": [{"role": "user", "content": message}],
        "stream": True,
        "max_tokens": 100
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            stream=True,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('content-type', 'N/A')}")
        
        if response.status_code != 200:
            print(f"❌ Erreur {response.status_code}")
            print(f"Response: {response.text}")
            return False
        
        # Validation du Content-Type pour SSE
        content_type = response.headers.get('content-type', '')
        if 'text/event-stream' not in content_type:
            print(f"⚠️  Content-Type inattendu: {content_type}")
        
        print("\n📡 Streaming en cours...")
        print("Response: ", end="", flush=True)
        
        chunks_received = 0
        content_received = ""
        
        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                
                # Parse selon format documentation
                if line.startswith('data: '):
                    data = line[6:]  # Enlever 'data: '
                    
                    if data == '[DONE]':
                        print("\n✅ Signal [DONE] reçu")
                        break
                    
                    try:
                        chunk = json.loads(data)
                        chunks_received += 1
                        
                        # Validation structure chunk
                        if 'choices' not in chunk:
                            print(f"\n⚠️  Chunk sans 'choices': {chunk}")
                            continue
                        
                        choice = chunk['choices'][0]
                        delta = choice.get('delta', {})
                        content = delta.get('content', '')
                        finish_reason = choice.get('finish_reason')
                        
                        if content:
                            print(content, end='', flush=True)
                            content_received += content
                        
                        # Vérifier finish_reason à la fin
                        if finish_reason == 'stop':
                            print(f"\n✅ Streaming terminé (finish_reason: stop)")
                        
                    except json.JSONDecodeError as e:
                        print(f"\n❌ Erreur JSON: {e}")
                        print(f"Data: {data}")
                        return False
        
        print(f"\n\n📊 Streaming terminé:")
        print(f"Chunks reçus: {chunks_received}")
        print(f"Contenu total: {len(content_received)} caractères")
        
        if chunks_received > 0 and content_received:
            print("✅ Streaming SSE validé!")
            return True
        else:
            print("❌ Aucun contenu reçu")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur réseau: {e}")
        return False

def test_streaming_headers() -> bool:
    """Teste que les headers SSE sont corrects"""
    print("\n🧪 Test: Headers SSE")
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    
    payload = {
        "model": "granite3.3:8b",
        "messages": [{"role": "user", "content": "Test headers"}],
        "stream": True,
        "max_tokens": 10
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            stream=True,
            timeout=15
        )
        
        if response.status_code == 200:
            # Vérification headers SSE
            content_type = response.headers.get('content-type', '')
            cache_control = response.headers.get('cache-control', '')
            
            print(f"Content-Type: {content_type}")
            print(f"Cache-Control: {cache_control}")
            
            if 'text/event-stream' in content_type:
                print("✅ Content-Type SSE correct")
                return True
            else:
                print("❌ Content-Type SSE manquant")
                return False
        else:
            print(f"❌ Erreur {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur réseau: {e}")
        return False

def test_streaming_interrupt() -> bool:
    """Teste l'interruption d'un stream long"""
    print("\n🧪 Test: Interruption streaming")
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    
    payload = {
        "model": "granite3.3:8b",
        "messages": [{"role": "user", "content": "Écrivez un long texte sur l'intelligence artificielle"}],
        "stream": True,
        "max_tokens": 200
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            stream=True,
            timeout=30
        )
        
        if response.status_code != 200:
            print(f"❌ Erreur {response.status_code}")
            return False
        
        chunks_before_interrupt = 0
        
        for line in response.iter_lines():
            if line:
                line = line.decode('utf-8')
                if line.startswith('data: '):
                    data = line[6:]
                    if data != '[DONE]':
                        chunks_before_interrupt += 1
                        if chunks_before_interrupt >= 3:
                            print(f"✅ Interruption après {chunks_before_interrupt} chunks")
                            response.close()
                            return True
        
        print("⚠️  Stream terminé naturellement")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur réseau: {e}")
        return False

def main():
    """Execute tous les tests streaming"""
    print("🚀 Tests Python Streaming SSE - Documentation LLMaaS API")
    print("=" * 60)
    
    tests = [
        lambda: test_streaming_headers(),
        lambda: stream_chat_test("Bonjour, comment allez-vous ?"),
        lambda: stream_chat_test("Expliquez la photosynthèse en 2 phrases"),
        lambda: test_streaming_interrupt()
    ]
    
    passed = 0
    total = len(tests)
    
    for i, test_func in enumerate(tests, 1):
        print(f"\n--- Test {i}/{total} ---")
        try:
            if test_func():
                passed += 1
                print("✅ PASS")
            else:
                print("❌ FAIL")
        except Exception as e:
            print(f"❌ Exception: {e}")
    
    print("\n" + "=" * 60)
    print(f"📊 Résultats Streaming: {passed}/{total} tests réussis")
    
    if passed == total:
        print("✅ Tous les tests streaming passent!")
        sys.exit(0)
    else:
        print("❌ Certains tests streaming échouent")
        sys.exit(1)

if __name__ == "__main__":
    main()
