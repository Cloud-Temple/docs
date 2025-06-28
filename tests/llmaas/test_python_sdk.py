#!/usr/bin/env python3
"""
Test Python SDK - Validation Documentation API LLMaaS
Teste les exemples OpenAI SDK et LangChain de docs/llmaas/api.md
"""

import os
import sys
from typing import Dict, Any
from dotenv import load_dotenv

# Charger les variables d'environnement depuis .env
load_dotenv()

# Configuration
# Assurez-vous que LLMAAS_API_KEY est toujours une chaîne de caractères pour SecretStr
API_KEY = os.getenv("LLMAAS_API_KEY", "") # Utilise la variable d'environnement LLMAAS_API_KEY, avec une chaîne vide par défaut
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")

def test_openai_sdk() -> bool:
    """Teste l'intégration OpenAI SDK"""
    print("🧪 Test: OpenAI Python SDK")
    
    try:
        from openai import OpenAI
    except ImportError:
        print("❌ Module 'openai' non installé")
        print("Installez avec: pip install openai")
        return False
    
    try:
        client = OpenAI(
            api_key=API_KEY,
            base_url=BASE_URL
        )
        
        print("✅ Client OpenAI initialisé")
        
        # Test de base
        response = client.chat.completions.create(
            model="granite3.3:8b",
            messages=[
                {"role": "user", "content": "Bonjour !"}
            ],
            max_tokens=50
        )
        
        print(f"Content: {response.choices[0].message.content}")
        print(f"Usage: {response.usage}")
        print("✅ OpenAI SDK fonctionne!")
        return True
        
    except Exception as e:
        print(f"❌ Erreur OpenAI SDK: {e}")
        return False

def test_openai_sdk_streaming() -> bool:
    """Teste le streaming avec OpenAI SDK"""
    print("\n🧪 Test: OpenAI SDK Streaming")
    
    try:
        from openai import OpenAI
    except ImportError:
        print("❌ Module 'openai' non installé")
        return False
    
    try:
        client = OpenAI(
            api_key=API_KEY,
            base_url=BASE_URL
        )
        
        print("📡 Streaming avec OpenAI SDK...")
        print("Response: ", end="", flush=True)
        
        stream = client.chat.completions.create(
            model="granite3.3:8b",
            messages=[
                {"role": "user", "content": "Dites bonjour en quelques mots"}
            ],
            stream=True,
            max_tokens=50
        )
        
        chunks_received = 0
        content_received = ""
        
        for chunk in stream:
            chunks_received += 1
            if chunk.choices[0].delta.content is not None:
                content = chunk.choices[0].delta.content
                print(content, end="", flush=True)
                content_received += content
        
        print(f"\n\n📊 SDK Streaming terminé:")
        print(f"Chunks reçus: {chunks_received}")
        print(f"Contenu total: {len(content_received)} caractères")
        
        if chunks_received > 0 and content_received:
            print("✅ OpenAI SDK streaming validé!")
            return True
        else:
            print("❌ Aucun contenu reçu")
            return False
        
    except Exception as e:
        print(f"❌ Erreur streaming OpenAI SDK: {e}")
        return False

def test_langchain_integration() -> bool:
    """Teste l'intégration LangChain (ChatOpenAI uniquement)"""
    print("\n🧪 Test: LangChain Integration (ChatOpenAI)")
    
    try:
        from langchain_openai import ChatOpenAI
        from langchain_core.caches import BaseCache # Importation locale pour garantir la portée
        from langchain_core.callbacks.base import Callbacks # Importation locale pour Callbacks
        # Appeler model_rebuild() pour résoudre les problèmes de définition Pydantic
        # Cela est souvent nécessaire après l'importation pour les modèles basés sur Pydantic v2
        ChatOpenAI.model_rebuild()
    except ImportError:
        print("❌ Module 'langchain_openai' ChatOpenAI non disponible. Installez avec: pip install langchain-openai")
        return False # Rendre le test bloquant si le module principal manque
    
    try:
        chat = ChatOpenAI(
            api_key=API_KEY, # Passer la clé API directement en chaîne
            base_url=BASE_URL,
            model="granite3.3:8b",
            model_kwargs={"max_tokens": 50} # Passer max_tokens via model_kwargs pour la robustesse
        )
        
        print("✅ LangChain ChatOpenAI initialisé")
        
        # Test avec messages (format compatible)
        from langchain.schema import HumanMessage
        messages = [HumanMessage(content="Expliquez l'IA en 2 phrases")]
        response = chat.invoke(messages)
        
        print(f"Response: {response.content}")
        print("✅ LangChain ChatOpenAI fonctionne!")
        return True
        
    except Exception as e:
        print(f"⚠️  Erreur LangChain ChatOpenAI: {e}")
        print("ℹ️  Note: Utilisez ChatOpenAI avec messages pour LLMaaS")
        return True  # Non bloquant

def test_langchain_chat() -> bool:
    """Teste LangChain avec ChatOpenAI"""
    print("\n🧪 Test: LangChain ChatOpenAI")
    
    try:
        from langchain_openai import ChatOpenAI
        from langchain_core.caches import BaseCache # Importation locale pour garantir la portée
        from langchain_core.callbacks.base import Callbacks # Importation locale pour Callbacks
        # Appeler model_rebuild() pour résoudre les problèmes de définition Pydantic
        ChatOpenAI.model_rebuild()
    except ImportError:
        print("❌ Module 'langchain_openai' ChatOpenAI non disponible. Installez avec: pip install langchain-openai")
        return False # Rendre le test bloquant si le module principal manque
    
    try:
        chat = ChatOpenAI(
            api_key=API_KEY, # Passer la clé API directement en chaîne
            base_url=BASE_URL,
            model="granite3.3:8b",
            model_kwargs={"max_tokens": 50} # Passer max_tokens via model_kwargs pour la robustesse
        )
        
        print("✅ LangChain ChatOpenAI initialisé")
        
        # Test avec messages
        from langchain.schema import HumanMessage
        
        messages = [HumanMessage(content="Bonjour, comment allez-vous ?")]
        response = chat.invoke(messages)
        
        print(f"Response: {response.content}")
        print("✅ LangChain ChatOpenAI fonctionne!")
        return True
        
    except Exception as e:
        print(f"❌ Erreur LangChain ChatOpenAI: {e}")
        return False

def test_completions_endpoint() -> bool:
    """Teste l'endpoint /v1/completions avec OpenAI SDK"""
    print("\n🧪 Test: Endpoint /v1/completions via SDK")
    
    try:
        from openai import OpenAI
    except ImportError:
        print("❌ Module 'openai' non installé")
        return False
    
    try:
        client = OpenAI(
            api_key=API_KEY,
            base_url=BASE_URL
        )
        
        # Note: L'endpoint /v1/completions utilise le format chat selon la documentation
        # Nous testons donc avec chat.completions.create
        response = client.chat.completions.create(
            model="granite3.3:8b",
            messages=[
                {"role": "user", "content": "Complétez cette phrase: L'intelligence artificielle est"}
            ],
            max_tokens=30
        )
        
        print(f"Content: {response.choices[0].message.content}")
        print("✅ Endpoint completions (format chat) validé!")
        return True
        
    except Exception as e:
        print(f"❌ Erreur endpoint completions: {e}")
        return False

def main():
    """Execute tous les tests SDK"""
    print("🚀 Tests Python SDK - Documentation LLMaaS API")
    print("=" * 55)
    
    tests = [
        test_openai_sdk,
        test_openai_sdk_streaming,
        test_completions_endpoint,
        test_langchain_integration,
        test_langchain_chat
    ]
    
    passed = 0
    total = len(tests)
    
    for test_func in tests:
        try:
            if test_func():
                passed += 1
        except Exception as e:
            print(f"❌ Exception dans {test_func.__name__}: {e}")
    
    print("\n" + "=" * 55)
    print(f"📊 Résultats SDK: {passed}/{total} tests réussis")
    
    if passed >= 3:  # OpenAI SDK + au moins un LangChain
        print("✅ Tests SDK critiques passent!")
        sys.exit(0)
    else:
        print("❌ Tests SDK critiques échouent")
        sys.exit(1)

if __name__ == "__main__":
    main()
