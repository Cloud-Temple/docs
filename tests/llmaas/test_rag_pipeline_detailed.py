#!/usr/bin/env python3
"""
Test RAG Pipeline Détaillé - Cloud Temple LLMaaS
Script spécialisé pour valider le pipeline RAG complet avec documentation exhaustive
"""

import os
import sys
import json
import time
import tempfile
import shutil
import requests
from typing import Optional, List, Any, Dict
from pathlib import Path
from dotenv import load_dotenv

# --- Imports LangChain ---
from langchain_core.embeddings import Embeddings
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.schema import HumanMessage

# --- Configuration ---
load_dotenv(dotenv_path=Path(__file__).parent / ".env")
API_KEY = os.getenv("LLMAAS_API_KEY", "")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "granite-embedding:278m")
LLM_MODEL = os.getenv("DEFAULT_MODEL", "granite3.3:8b")

class RAGTestLogger:
    """Logger spécialisé pour les tests RAG"""
    
    def __init__(self):
        self.steps = []
        self.start_time = time.time()
    
    def log_step(self, step: str, status: str, details: str = ""):
        """Enregistre une étape du test"""
        timestamp = time.time() - self.start_time
        self.steps.append({
            "step": step,
            "status": status,
            "details": details,
            "timestamp": f"{timestamp:.2f}s"
        })
        
        status_icon = "✅" if status == "SUCCESS" else "❌" if status == "ERROR" else "🔄"
        print(f"{status_icon} [{timestamp:6.2f}s] {step}")
        if details:
            print(f"    📝 {details}")
    
    def print_summary(self):
        """Affiche le résumé des tests"""
        total_time = time.time() - self.start_time
        success_count = sum(1 for step in self.steps if step["status"] == "SUCCESS")
        total_steps = len(self.steps)
        
        print(f"\n{'='*60}")
        print(f"📊 RÉSUMÉ TEST RAG PIPELINE")
        print(f"{'='*60}")
        print(f"⏱️  Durée totale: {total_time:.2f}s")
        print(f"✅ Étapes réussies: {success_count}/{total_steps}")
        print(f"📈 Taux de succès: {success_count/total_steps*100:.1f}%")
        
        return success_count == total_steps

def check_dependencies():
    """Vérification des dépendances RAG"""
    logger = RAGTestLogger()
    logger.log_step("Vérification dépendances", "PROGRESS")
    
    required_packages = {
        "langchain": "langchain",
        "langchain-community": "langchain_community",
        "langchain-openai": "langchain_openai",
        "faiss-cpu": "faiss",
        "requests": "requests",
        "httpx": "httpx",
        "python-dotenv": "dotenv"
    }
    
    all_ok = True
    for pkg_name, import_name in required_packages.items():
        try:
            __import__(import_name)
            logger.log_step(f"✓ {pkg_name}", "SUCCESS", "Disponible")
        except ImportError:
            logger.log_step(f"✗ {pkg_name}", "ERROR", "Manquant. Installez avec: pip install " + pkg_name)
            all_ok = False
            
    if all_ok:
        logger.log_step("Dépendances validées", "SUCCESS", f"{len(required_packages)} packages OK")
    
    return all_ok

def test_api_connection():
    """Test de connexion à l'API LLMaaS"""
    logger = RAGTestLogger()
    logger.log_step("Test connexion API", "PROGRESS")
    
    try:
        headers = {"Authorization": f"Bearer {API_KEY}"}
        response = requests.get(f"{BASE_URL}/models", headers=headers, timeout=10)
        
        if response.status_code == 200:
            models = response.json()
            model_count = len(models.get('data', []))
            logger.log_step("Connexion API", "SUCCESS", f"{model_count} modèles disponibles")
            
            # Vérifier que granite3.3:8b est disponible
            available_models = [m.get('id', '') for m in models.get('data', [])]
            if 'granite3.3:8b' in available_models:
                logger.log_step("Modèle granite3.3:8b", "SUCCESS", "Disponible")
            else:
                logger.log_step("Modèle granite3.3:8b", "ERROR", "Non trouvé")
                return False
            
            return True
        else:
            logger.log_step("Connexion API", "ERROR", f"Status {response.status_code}")
            return False
            
    except Exception as e:
        logger.log_step("Connexion API", "ERROR", str(e))
        return False

class LLMaaSEmbeddings(Embeddings):
    """Classe d'embedding personnalisée pour l'API LLMaaS de Cloud Temple."""
    
    def __init__(self, api_key: str, model_name: str, logger: RAGTestLogger):
        self.api_key = api_key
        self.model_name = model_name
        self.base_url = BASE_URL
        self.logger = logger
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def _embed(self, texts: List[str]) -> List[List[float]]:
        """Génère les embeddings pour une liste de textes."""
        self.logger.log_step("Génération Embeddings", "PROGRESS", f"Vectorisation de {len(texts)} chunk(s) via LLMaaS...")
        payload = {"input": texts, "model": self.model_name}
        try:
            import httpx
            with httpx.Client(timeout=60.0) as client:
                response = client.post(f"{self.base_url}/embeddings", headers=self.headers, json=payload)
                response.raise_for_status()
                data = response.json()['data']
                data.sort(key=lambda e: e['index'])
                self.logger.log_step("Embeddings générés", "SUCCESS", f"{len(data)} vecteurs reçus")
                return [item['embedding'] for item in data]
        except Exception as e:
            self.logger.log_step("Erreur Embeddings", "ERROR", str(e))
            raise

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        return self._embed([text])[0]

def create_test_documents():
    """Création de documents de test pour le RAG"""
    logger = RAGTestLogger()
    logger.log_step("Création documents test", "PROGRESS")
    
    # Créer un répertoire temporaire
    temp_dir = tempfile.mkdtemp(prefix="rag_test_")
    
    # Documents de test avec contenu Cloud Temple
    documents = {
        "cloud_temple_overview.txt": """
        Cloud Temple est un fournisseur de cloud souverain français avec la qualification SecNumCloud de l'ANSSI.
        Cette qualification garantit le plus haut niveau de sécurité et de conformité pour l'hébergement de données sensibles.
        Cloud Temple propose une infrastructure 100% française avec un contrôle total des données.
        """,
        
        "llmaas_service.txt": """
        L'API LLMaaS de Cloud Temple permet d'accéder à 36 modèles d'intelligence artificielle.
        Les tarifs publics sont disponibles sur https://www.cloud-temple.com/nos-tarifs-publics/
        Le service inclut des modèles comme Granite 3.3, Qwen3, DeepSeek-R1, et Gemma 3.
        Tous les modèles sont hébergés en France avec conformité SecNumCloud.
        """,
        
        "security_compliance.txt": """
        La sécurité Cloud Temple est garantie par plusieurs certifications :
        - SecNumCloud : Qualification ANSSI pour données sensibles
        - HDS : Hébergement de Données de Santé
        - ISO 27001 : Management de la sécurité de l'information
        - RGPD : Conformité réglementation européenne
        Le chiffrement end-to-end protège toutes les communications.
        """,
        
        "technical_architecture.txt": """
        L'architecture technique Cloud Temple repose sur :
        - Datacenters certifiés Tier III+ en France
        - Infrastructure redondante multi-sites
        - Réseau privé sécurisé avec chiffrement
        - API REST compatible OpenAI pour LLMaaS
        - Monitoring 24/7 avec SLA 99.9%
        """,
        
        "use_cases.txt": """
        Les cas d'usage principaux de Cloud Temple LLMaaS incluent :
        - Dialogue multilingue avec 8+ langues supportées
        - Analyse de documents longs jusqu'à 120k tokens
        - Génération de code dans 15+ langages
        - Analyse visuelle sans preprocessing OCR
        - Applications sécurisées avec audit complet
        - Déploiements embarqués et edge computing
        """
    }
    
    # Écrire les fichiers
    for filename, content in documents.items():
        file_path = Path(temp_dir) / filename
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content.strip())
        
        logger.log_step(f"Document {filename}", "SUCCESS", f"{len(content)} caractères")
    
    logger.log_step("Documents créés", "SUCCESS", f"{len(documents)} fichiers dans {temp_dir}")
    return temp_dir

def setup_rag_pipeline(documents_dir: str):
    """Configuration complète du pipeline RAG avec les outils LLMaaS."""
    logger = RAGTestLogger()
    logger.log_step("Configuration pipeline RAG", "PROGRESS")
    
    try:
        # 1. Chargement des documents
        logger.log_step("Chargement documents", "PROGRESS")
        loader = DirectoryLoader(documents_dir, glob="*.txt", loader_cls=TextLoader, loader_kwargs={'encoding': 'utf-8'})
        documents = loader.load()
        logger.log_step("Documents chargés", "SUCCESS", f"{len(documents)} fichiers")
        
        # 2. Division en chunks
        logger.log_step("Division en chunks", "PROGRESS")
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        splits = text_splitter.split_documents(documents)
        logger.log_step("Chunks créés", "SUCCESS", f"{len(splits)} chunks")
        
        # 3. Création des embeddings avec LLMaaS
        logger.log_step("Initialisation embeddings LLMaaS", "PROGRESS")
        embeddings = LLMaaSEmbeddings(api_key=API_KEY, model_name=EMBEDDING_MODEL, logger=logger)
        logger.log_step("Embeddings initialisés", "SUCCESS", f"Modèle: {EMBEDDING_MODEL}")
        
        # 4. Création de l'index vectoriel FAISS
        logger.log_step("Création index FAISS", "PROGRESS")
        vectorstore = FAISS.from_documents(splits, embeddings)
        logger.log_step("Index FAISS créé", "SUCCESS", f"{vectorstore.index.ntotal} vecteurs")
        
        # 5. Configuration du LLM Cloud Temple avec ChatOpenAI
        logger.log_step("Configuration LLM", "PROGRESS")
        
        # Correction pour les problèmes de définition Pydantic dans LangChain
        from langchain_core.caches import BaseCache
        from langchain_core.callbacks.base import Callbacks
        ChatOpenAI.model_rebuild()

        llm = ChatOpenAI(
            api_key=API_KEY,
            base_url=BASE_URL,
            model=LLM_MODEL,
            temperature=0.3,
            model_kwargs={"max_tokens": 300}
        )
        logger.log_step("LLM configuré", "SUCCESS", f"Modèle: {LLM_MODEL}")
        
        # 6. Création de la chaîne RAG
        logger.log_step("Création chaîne RAG", "PROGRESS")
        qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff",
            retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
            return_source_documents=True
        )
        logger.log_step("Chaîne RAG créée", "SUCCESS", "RetrievalQA avec k=3")
        
        return qa_chain, vectorstore, logger
        
    except Exception as e:
        logger.log_step("Erreur pipeline", "ERROR", str(e))
        import traceback
        traceback.print_exc()
        raise

def test_rag_queries(qa_chain, vectorstore):
    """Test de requêtes RAG avec différents scénarios"""
    logger = RAGTestLogger()
    logger.log_step("Tests requêtes RAG", "PROGRESS")
    
    # Questions de test avec réponses attendues
    test_queries = [
        {
            "question": "Qu'est-ce que Cloud Temple et quelle est sa qualification principale ?",
            "expected_keywords": ["cloud temple", "secnumcloud", "anssi", "français", "souverain"],
            "category": "Présentation générale"
        },
        {
            "question": "Combien coûte l'utilisation de l'API LLMaaS ?",
            "expected_keywords": ["tarifs", "cloud-temple.com"],
            "category": "Tarification"
        },
        {
            "question": "Quelles sont les certifications de sécurité de Cloud Temple ?",
            "expected_keywords": ["secnumcloud", "hds", "iso", "rgpd", "anssi"],
            "category": "Sécurité"
        },
        {
            "question": "Quels sont les cas d'usage principaux de LLMaaS ?",
            "expected_keywords": ["dialogue", "multilingue", "code", "analyse", "documents"],
            "category": "Cas d'usage"
        },
        {
            "question": "Comment fonctionne l'architecture technique de Cloud Temple ?",
            "expected_keywords": ["datacenter", "tier", "france", "redondant", "api"],
            "category": "Architecture"
        }
    ]
    
    results = []
    
    for i, test_query in enumerate(test_queries, 1):
        question = test_query["question"]
        expected_keywords = test_query["expected_keywords"]
        category = test_query["category"]
        
        logger.log_step(f"Question {i}/{len(test_queries)}", "PROGRESS", f"{category}: {question}")
        
        try:
            # Exécution de la requête RAG
            start_time = time.time()
            result = qa_chain({"query": question})
            query_time = time.time() - start_time
            
            # Extraction des résultats
            answer = result['result']
            source_docs = result['source_documents']
            
            # Validation des mots-clés
            answer_lower = answer.lower()
            found_keywords = [kw for kw in expected_keywords if kw in answer_lower]
            keyword_score = len(found_keywords) / len(expected_keywords)
            
            # Test de recherche vectorielle
            similar_docs = vectorstore.similarity_search(question, k=3)
            
            # Résultats du test
            test_result = {
                "question": question,
                "category": category,
                "answer": answer,
                "answer_length": len(answer),
                "query_time": query_time,
                "source_count": len(source_docs),
                "keyword_score": keyword_score,
                "found_keywords": found_keywords,
                "missing_keywords": [kw for kw in expected_keywords if kw not in found_keywords],
                "similarity_docs": len(similar_docs),
                "success": keyword_score >= 0.4  # Au moins 40% des mots-clés
            }
            
            results.append(test_result)
            
            # Log des résultats
            status = "SUCCESS" if test_result["success"] else "ERROR"
            details = f"Score: {keyword_score:.1%}, Temps: {query_time:.2f}s, Sources: {len(source_docs)}"
            logger.log_step(f"Réponse {i}", status, details)
            
            # Affichage détaillé
            print(f"    💬 Question: {question}")
            print(f"    🤖 Réponse: {answer[:100]}...")
            print(f"    📊 Mots-clés trouvés: {found_keywords}")
            print(f"    📚 Sources utilisées: {len(source_docs)}")
            print(f"    ⏱️  Temps de réponse: {query_time:.2f}s")
            print()
            
        except Exception as e:
            logger.log_step(f"Erreur question {i}", "ERROR", str(e))
            results.append({
                "question": question,
                "category": category,
                "success": False,
                "error": str(e)
            })
    
    # Résumé des tests
    successful_queries = sum(1 for r in results if r.get("success", False))
    total_queries = len(results)
    
    logger.log_step("Tests terminés", "SUCCESS" if successful_queries == total_queries else "ERROR",
                   f"{successful_queries}/{total_queries} requêtes réussies")
    
    return results, logger

def analyze_rag_performance(results: List[Dict], vectorstore):
    """Analyse des performances du pipeline RAG"""
    logger = RAGTestLogger()
    logger.log_step("Analyse performances", "PROGRESS")
    
    # Métriques globales
    successful_results = [r for r in results if r.get("success", False)]
    
    if not successful_results:
        logger.log_step("Aucun résultat", "ERROR", "Impossible d'analyser les performances")
        return False
    
    # Calculs de performance
    avg_query_time = sum(r.get("query_time", 0) for r in successful_results) / len(successful_results)
    avg_answer_length = sum(r.get("answer_length", 0) for r in successful_results) / len(successful_results)
    avg_keyword_score = sum(r.get("keyword_score", 0) for r in successful_results) / len(successful_results)
    avg_source_count = sum(r.get("source_count", 0) for r in successful_results) / len(successful_results)
    
    # Analyse par catégorie
    categories = {}
    for result in successful_results:
        category = result.get("category", "Unknown")
        if category not in categories:
            categories[category] = []
        categories[category].append(result)
    
    # Métriques vectorstore
    total_vectors = vectorstore.index.ntotal if hasattr(vectorstore, 'index') else 0
    
    # Affichage des métriques
    print(f"\n📈 ANALYSE PERFORMANCES RAG")
    print(f"{'='*50}")
    print(f"⏱️  Temps moyen par requête: {avg_query_time:.2f}s")
    print(f"📝 Longueur moyenne réponse: {avg_answer_length:.0f} caractères")
    print(f"🎯 Score moyen mots-clés: {avg_keyword_score:.1%}")
    print(f"📚 Sources moyennes utilisées: {avg_source_count:.1f}")
    print(f"🔍 Vecteurs dans l'index: {total_vectors}")
    print(f"✅ Taux de succès: {len(successful_results)}/{len(results)} ({len(successful_results)/len(results):.1%})")
    
    print(f"\n📊 PERFORMANCE PAR CATÉGORIE")
    print(f"{'='*50}")
    for category, cat_results in categories.items():
        cat_score = sum(r.get("keyword_score", 0) for r in cat_results) / len(cat_results)
        cat_time = sum(r.get("query_time", 0) for r in cat_results) / len(cat_results)
        print(f"🏷️  {category}: Score {cat_score:.1%}, Temps {cat_time:.2f}s")
    
    # Critères de validation
    performance_criteria = {
        "Temps de réponse": avg_query_time < 8.0,  # < 8 secondes (seuil ajusté)
        "Score mots-clés": avg_keyword_score >= 0.6,  # >= 60%
        "Utilisation sources": avg_source_count >= 1.0,  # Au moins 1 source
        "Taux de succès": len(successful_results) / len(results) >= 0.8  # >= 80%
    }
    
    print(f"\n✅ CRITÈRES DE VALIDATION")
    print(f"{'='*50}")
    all_criteria_met = True
    for criterion, met in performance_criteria.items():
        status = "✅ PASS" if met else "❌ FAIL"
        print(f"{status} {criterion}")
        if not met:
            all_criteria_met = False
    
    logger.log_step("Analyse terminée", "SUCCESS" if all_criteria_met else "ERROR",
                   f"Critères: {sum(performance_criteria.values())}/{len(performance_criteria)}")
    
    return all_criteria_met

def main():
    """Fonction principale du test RAG"""
    print("🚀 TEST RAG PIPELINE DÉTAILLÉ - CLOUD TEMPLE LLMAAS")
    print("=" * 70)
    print(f"📅 Date: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"🔑 API Key: {'✅ Configurée' if API_KEY != 'your-api-key-here' else '❌ Non configurée'}")
    print(f"🌐 Base URL: {BASE_URL}")
    print("=" * 70)
    
    # Variables pour cleanup
    temp_dir = None
    
    try:
        # 1. Vérification des dépendances
        if not check_dependencies():
            print("❌ Échec vérification dépendances")
            return False
        
        # 2. Test de connexion API
        if not test_api_connection():
            print("❌ Échec connexion API")
            return False
        
        # 3. Création des documents de test
        temp_dir = create_test_documents()
        
        # 4. Configuration du pipeline RAG
        qa_chain, vectorstore, setup_logger = setup_rag_pipeline(temp_dir)
        
        # 5. Tests de requêtes
        results, query_logger = test_rag_queries(qa_chain, vectorstore)
        
        # 6. Analyse des performances
        performance_ok = analyze_rag_performance(results, vectorstore)
        
        # 7. Résumé final
        print(f"\n🏁 RÉSUMÉ FINAL")
        print(f"{'='*70}")
        
        if performance_ok:
            print("🎉 SUCCÈS - Pipeline RAG entièrement validé!")
            print("✅ Tous les critères de performance sont respectés")
            print("✅ Documentation tutorials.md RAG section validée")
            return True
        else:
            print("⚠️  PARTIEL - Pipeline RAG fonctionne mais performances à améliorer")
            print("🔧 Certains critères de performance ne sont pas respectés")
            return False
        
    except Exception as e:
        print(f"\n❌ ERREUR CRITIQUE: {e}")
        import traceback
        traceback.print_exc()
        return False
        
    finally:
        # Cleanup
        if temp_dir and os.path.exists(temp_dir):
            try:
                shutil.rmtree(temp_dir)
                print(f"\n🧹 Cleanup: Répertoire temporaire supprimé")
            except Exception as e:
                print(f"\n⚠️  Cleanup warning: {e}")

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
