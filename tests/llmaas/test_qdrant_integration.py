#!/usr/bin/env python3
"""
Test d'Intégration Qdrant avec LLMaaS Cloud Temple

Ce script est conçu pour valider l'intégration du service d'embeddings de LLMaaS Cloud Temple
avec la base de données vectorielle Qdrant. Il couvre les étapes clés d'un pipeline RAG (Retrieval Augmented Generation) :
1.  Connexion à l'API LLMaaS pour la génération d'embeddings.
2.  Connexion à un serveur Qdrant (local par défaut).
3.  Création et gestion d'une collection Qdrant.
4.  Génération d'embeddings pour des documents de test via LLMaaS.
5.  Insertion de ces documents et de leurs embeddings dans Qdrant.
6.  Exécution d'une requête de recherche de similarité dans Qdrant.
7.  Utilisation des documents récupérés pour générer une réponse RAG avec un LLM Cloud Temple.

Le script s'assure que tous les composants interagissent correctement et que le pipeline RAG
fonctionne comme attendu, en fournissant des logs détaillés à chaque étape.

Prérequis:
- Python 3.9+
- Les bibliothèques Python listées dans `requirements.txt` (qdrant-client, httpx, langchain, etc.)
- Un serveur Qdrant en cours d'exécution.

Instructions pour lancer Qdrant via Docker (recommandé pour les tests locaux):
    docker pull qdrant/qdrant
    docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant

Variables d'environnement (à configurer dans un fichier .env à la racine du projet ou exportées):
- LLMAAS_API_KEY: Votre clé API pour accéder à LLMaaS Cloud Temple.
- API_URL: L'URL de base de l'API LLMaaS (par défaut: https://api.ai.cloud-temple.com/v1).
- EMBEDDING_MODEL: Le modèle d'embedding à utiliser (par défaut: granite-embedding:278m).
- DEFAULT_MODEL: Le modèle LLM à utiliser pour la génération de texte (par défaut: granite3.3:8b).
- QDRANT_URL: L'URL du serveur Qdrant (par défaut: http://localhost:6333).
"""

import os
import sys
import json
import time
import requests
import httpx
from typing import Optional, List, Any, Dict
from pathlib import Path
from dotenv import load_dotenv

# NOTE: Si vous rencontrez des erreurs d'importation (ex: "qdrant_client", "langchain_core"),
# assurez-vous d'avoir installé les dépendances nécessaires:
# pip install -r tests/llmaas/requirements.txt
# Et que votre environnement Python dans VSCode est correctement sélectionné.

# Importations spécifiques à LangChain pour les embeddings et les utilitaires
from langchain_core.embeddings import Embeddings
from langchain_core.utils.input import SecretStr

# Charger les variables d'environnement depuis le fichier .env
# Cela permet de gérer les clés API et autres configurations sensibles
# sans les coder en dur dans le script.
load_dotenv()

# --- Configuration des services Cloud Temple LLMaaS ---
# Clé API pour l'authentification auprès de LLMaaS.
# Récupérée depuis les variables d'environnement ou utilise une valeur par défaut pour les tests.
API_KEY = os.getenv("LLMAAS_API_KEY", "your-api-key-here")
# URL de base de l'API LLMaaS.
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
# Modèle d'embedding à utiliser pour convertir le texte en vecteurs numériques.
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "granite-embedding:278m")
# Modèle de langage large (LLM) à utiliser pour générer des réponses textuelles.
LLM_MODEL = os.getenv("DEFAULT_MODEL", "granite3.3:8b")

# --- Configuration de Qdrant ---
# URL du serveur Qdrant. Par défaut, il s'agit d'une instance locale.
QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
# Nom de la collection Qdrant qui sera utilisée pour stocker les vecteurs d'embeddings.
QDRANT_COLLECTION_NAME = "cloud_temple_docs_test"

# --- Instructions pour lancer Qdrant via Docker ---
# Ces commandes sont fournies pour faciliter la mise en place d'un environnement de test local.
# docker pull qdrant/qdrant
# docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant

class RAGTestLogger:
    """
    Classe utilitaire pour logger les étapes des tests RAG.
    Elle permet de suivre la progression, le statut (succès/échec) et le temps écoulé
    pour chaque opération, rendant le débogage plus facile.
    """
    
    def __init__(self):
        """Initialise le logger et le chronomètre."""
        self.steps = []
        self.start_time = time.time()
    
    def log_step(self, step: str, status: str, details: str = ""):
        """
        Enregistre une étape du test avec son statut et des détails optionnels.

        Args:
            step (str): Description de l'étape.
            status (str): Statut de l'étape ("SUCCESS", "ERROR", "PROGRESS", "INFO").
            details (str): Informations supplémentaires sur l'étape.
        """
        timestamp = time.time() - self.start_time
        self.steps.append({
            "step": step,
            "status": status,
            "details": details,
            "timestamp": f"{timestamp:.2f}s"
        })
        
        # Détermine l'icône à afficher en fonction du statut pour une meilleure lisibilité.
        status_icon = "✅" if status == "SUCCESS" else "❌" if status == "ERROR" else "🔄"
        print(f"{status_icon} [{timestamp:6.2f}s] {step}")
        if details:
            print(f"    📝 {details}")

    def print_summary(self) -> bool:
        """
        Affiche un résumé final de tous les tests exécutés.

        Returns:
            bool: True si toutes les étapes ont réussi, False sinon.
        """
        total_time = time.time() - self.start_time
        success_count = sum(1 for step in self.steps if step["status"] == "SUCCESS")
        total_steps = len(self.steps)
        
        print(f"\n{'='*70}")
        print(f"📊 RÉSUMÉ DES TESTS D'INTÉGRATION QDRANT")
        print(f"{'='*70}")
        print(f"⏱️  Durée totale des tests: {total_time:.2f}s")
        print(f"✅ Étapes réussies: {success_count}/{total_steps}")
        print(f"📈 Taux de succès global: {success_count/total_steps*100:.1f}%")
        
        # Retourne True si toutes les étapes ont été un succès, False sinon.
        return success_count == total_steps

class LLMaaSEmbeddings(Embeddings):
    """
    Classe d'embedding personnalisée pour interagir avec l'API LLMaaS de Cloud Temple.
    Cette classe est conçue pour être compatible avec l'interface `Embeddings` de LangChain,
    permettant son utilisation dans des pipelines LangChain tout en appelant notre API spécifique.
    """
    def __init__(self, api_key: str, base_url: str, model_name: str, logger: RAGTestLogger):
        """
        Initialise la classe LLMaaSEmbeddings.

        Args:
            api_key (str): Clé API pour l'authentification LLMaaS.
            base_url (str): URL de base de l'API LLMaaS.
            model_name (str): Nom du modèle d'embedding à utiliser.
            logger (RAGTestLogger): Instance du logger pour suivre les opérations.
        """
        self.api_key = api_key
        self.base_url = base_url
        self.model_name = model_name
        self.logger = logger
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def _embed(self, texts: List[str]) -> List[List[float]]:
        """
        Méthode interne pour générer des embeddings à partir d'une liste de textes.
        Elle envoie une requête POST à l'endpoint /v1/embeddings de l'API LLMaaS.

        Args:
            texts (List[str]): Liste des textes à vectoriser.

        Returns:
            List[List[float]]: Liste des vecteurs d'embeddings générés.

        Raises:
            httpx.HTTPStatusError: Si l'API renvoie une erreur HTTP.
            httpx.RequestError: Si une erreur réseau se produit.
        """
        payload = {"input": texts, "model": self.model_name}
        try:
            with httpx.Client(timeout=30.0) as client:
                response = client.post(f"{self.base_url}/embeddings", headers=self.headers, json=payload)
                response.raise_for_status() # Lève une exception pour les codes d'erreur HTTP (4xx, 5xx)
                data = response.json()['data']
                # Les données retournées par l'API incluent un index pour chaque embedding.
                # Nous les trions pour garantir que l'ordre des embeddings correspond à l'ordre des textes d'entrée.
                data.sort(key=lambda e: e['index'])
                self.logger.log_step("Embeddings générés", "SUCCESS", f"{len(data)} vecteurs pour {len(texts)} textes")
                return [item['embedding'] for item in data]
        except httpx.HTTPStatusError as e:
            self.logger.log_step("Erreur Embeddings", "ERROR", f"HTTP {e.response.status_code}: {e.response.text}")
            raise # Rélève l'exception après logging
        except httpx.RequestError as e:
            self.logger.log_step("Erreur Embeddings", "ERROR", f"Réseau: {e}")
            raise # Rélève l'exception après logging

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        """
        Implémentation de la méthode `embed_documents` requise par l'interface LangChain.
        Utilisée pour générer des embeddings pour une liste de documents.
        """
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        """
        Implémentation de la méthode `embed_query` requise par l'interface LangChain.
        Utilisée pour générer un embedding pour une seule requête.
        """
        return self._embed([text])[0]

def test_qdrant_connection(logger: RAGTestLogger) -> bool:
    """
    Teste la connexion au serveur Qdrant.
    Vérifie si le client Qdrant peut s'initialiser et interagir avec le serveur.

    Args:
        logger (RAGTestLogger): Instance du logger.

    Returns:
        bool: True si la connexion est réussie, False sinon.
    """
    logger.log_step("Test connexion Qdrant", "PROGRESS", f"Tentative de connexion à {QDRANT_URL}")
    try:
        # Importation locale pour gérer les dépendances optionnelles.
        from qdrant_client import QdrantClient
        # Initialise le client Qdrant.
        client = QdrantClient(host="localhost", port=6333)
        
        # Tente de récupérer des collections pour vérifier que le serveur répond.
        collections = client.get_collections()
        logger.log_step("Connexion Qdrant", "SUCCESS", f"{len(collections.collections)} collections trouvées sur le serveur")
        return True
    except ImportError:
        logger.log_step("Qdrant Client", "ERROR", "Module 'qdrant-client' non installé. Installez avec: pip install qdrant-client")
        return False
    except Exception as e:
        logger.log_step("Connexion Qdrant", "ERROR", f"Impossible de se connecter à Qdrant: {e}. Assurez-vous que Qdrant est lancé (ex: docker run -p 6333:6333 qdrant/qdrant)")
        return False

def test_qdrant_integration():
    """
    Fonction principale qui exécute le test d'intégration complet avec Qdrant.
    Elle orchestre toutes les étapes du pipeline RAG avec Qdrant.
    """
    logger = RAGTestLogger()
    logger.log_step("Début test intégration Qdrant", "INFO", "Validation du pipeline RAG avec Qdrant et LLMaaS Embeddings")

    # Vérifie la connexion à Qdrant avant de poursuivre.
    if not test_qdrant_connection(logger):
        logger.log_step("Test Qdrant", "ERROR", "Connexion Qdrant échouée, arrêt du test.")
        return False

    try:
        # Importations nécessaires pour LangChain et Qdrant.
        from qdrant_client import QdrantClient, models
        from langchain_community.document_loaders import TextLoader
        from langchain.text_splitter import RecursiveCharacterTextSplitter
        from langchain_community.vectorstores import Qdrant
        from langchain.chains import RetrievalQA
        from langchain_openai import ChatOpenAI # Utilisé car compatible avec l'API LLMaaS

        # 1. Initialisation des clients et nettoyage de la collection Qdrant.
        logger.log_step("Initialisation clients et nettoyage", "PROGRESS")
        qdrant_client = QdrantClient(host="localhost", port=6333)
        
        # Supprime la collection de test si elle existe déjà pour garantir un état propre à chaque exécution.
        if qdrant_client.collection_exists(collection_name=QDRANT_COLLECTION_NAME):
            qdrant_client.delete_collection(collection_name=QDRANT_COLLECTION_NAME)
            logger.log_step("Nettoyage collection", "SUCCESS", f"Collection '{QDRANT_COLLECTION_NAME}' supprimée pour un nouveau test.")

        # Crée une nouvelle collection Qdrant avec les paramètres de vecteurs appropriés.
        # La taille du vecteur (size) doit correspondre à la dimension des embeddings générés par le modèle LLMaaS.
        # all-MiniLM-L6-v2 (souvent utilisé pour les embeddings) a une dimension de 384.
        qdrant_client.create_collection(
            collection_name=QDRANT_COLLECTION_NAME,
            vectors_config=models.VectorParams(size=384, distance=models.Distance.COSINE), 
        )
        logger.log_step("Collection Qdrant", "SUCCESS", f"Collection '{QDRANT_COLLECTION_NAME}' créée avec succès.")

        # Initialisation de la classe d'embeddings personnalisée LLMaaSEmbeddings.
        # C'est cette classe qui fera les appels à l'API LLMaaS pour obtenir les vecteurs.
        embeddings = LLMaaSEmbeddings(
            api_key=API_KEY,
            base_url=BASE_URL,
            model_name=EMBEDDING_MODEL,
            logger=logger
        )
        logger.log_step("LLMaaS Embeddings", "SUCCESS", f"Classe d'embeddings LLMaaS initialisée avec le modèle: {EMBEDDING_MODEL}")

        # 2. Création de documents de test.
        # Ces documents simulent une base de connaissances à partir de laquelle le RAG va récupérer des informations.
        logger.log_step("Création documents de test", "PROGRESS", "Génération de contenu pour la base de connaissances Qdrant.")
        documents_content = [
            "Cloud Temple est un fournisseur de cloud souverain français avec la qualification SecNumCloud de l'ANSSI.",
            "L'API LLMaaS de Cloud Temple permet d'accéder à 36 modèles d'intelligence artificielle.",
            "Les tarifs LLMaaS sont de 0.9€ pour l'input et 4€ pour l'output par million de tokens.",
            "La sécurité Cloud Temple est garantie par les certifications HDS et ISO 27001.",
            "Les cas d'usage de LLMaaS incluent le dialogue multilingue et l'analyse de documents longs."
        ]
        
        # Conversion du contenu brut en objets Document de LangChain.
        from langchain.docstore.document import Document
        documents = [Document(page_content=d) for d in documents_content]
        logger.log_step("Documents de test", "SUCCESS", f"{len(documents)} documents de test créés en mémoire.")

        # 3. Division des documents en chunks (morceaux).
        # Cette étape est cruciale pour le RAG afin de gérer des documents longs et d'optimiser la recherche.
        # Ici, les documents sont petits, donc le chunking aura un effet minimal mais la logique est présente.
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=50)
        splits = text_splitter.split_documents(documents)
        logger.log_step("Division en chunks", "SUCCESS", f"{len(splits)} chunks de texte générés.")

        # 4. Ajout des documents et de leurs embeddings à Qdrant.
        # La méthode `from_documents` de Qdrant (via LangChain) génère les embeddings
        # en utilisant la classe `embeddings` fournie (notre LLMaaSEmbeddings)
        # et les insère dans la collection Qdrant.
        logger.log_step("Ajout documents à Qdrant", "PROGRESS", "Génération des embeddings et insertion dans la base vectorielle.")
        vectorstore = Qdrant.from_documents(
            splits,
            embeddings,
            url=QDRANT_URL,
            collection_name=QDRANT_COLLECTION_NAME,
            force_recreate=False # La collection est déjà créée et nettoyée au début du test.
        )
        logger.log_step("Documents ajoutés à Qdrant", "SUCCESS", f"{len(splits)} points (documents + embeddings) insérés dans Qdrant.")

        # 5. Configuration du LLM pour la chaîne RAG.
        # Utilisation de ChatOpenAI de langchain_openai car il est compatible avec l'API LLMaaS.
        logger.log_step("Configuration LLM", "PROGRESS", f"Initialisation du modèle LLM: {LLM_MODEL}")
        llm = ChatOpenAI(
            api_key=SecretStr(API_KEY), # Utilisation de SecretStr pour la clé API
            base_url=BASE_URL,
            model=LLM_MODEL,
            temperature=0.3 # Une température basse favorise des réponses plus factuelles, idéal pour le RAG.
        )
        logger.log_step("LLM configuré", "SUCCESS", "Modèle LLM Cloud Temple prêt pour la génération de réponses.")

        # 6. Création de la chaîne RAG avec Qdrant.
        # `RetrievalQA` est une chaîne LangChain qui combine la récupération de documents
        # (via le retriever de Qdrant) et la génération de réponses (via le LLM).
        logger.log_step("Création chaîne RAG Qdrant", "PROGRESS", "Assemblage du retriever (Qdrant) et du générateur (LLMaaS).")
        qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff", # "stuff" combine tous les documents récupérés en un seul prompt.
            retriever=vectorstore.as_retriever(search_kwargs={"k": 2}), # Récupère les 2 documents les plus pertinents.
            return_source_documents=True # Permet de voir quels documents ont été utilisés pour la réponse.
        )
        logger.log_step("Chaîne RAG Qdrant", "SUCCESS", "Chaîne RetrievalQA créée avec succès.")

        # 7. Exécution d'une requête de test.
        # Cette requête simule une question utilisateur à laquelle le pipeline RAG doit répondre
        # en utilisant les documents stockés dans Qdrant.
        question = "Quelle est la qualification principale de Cloud Temple et quels sont les tarifs LLMaaS ?"
        logger.log_step("Exécution requête RAG", "PROGRESS", f"Question posée au pipeline RAG: '{question}'")
        
        start_time = time.time()
        result = qa_chain({"query": question})
        query_time = time.time() - start_time

        answer = result['result']
        source_docs = result['source_documents']

        logger.log_step("Réponse RAG", "SUCCESS", f"Réponse générée en {query_time:.2f}s, basée sur {len(source_docs)} sources.")
        print(f"\n--- Résultat de la requête RAG ---")
        print(f"Question: {question}")
        print(f"Réponse: {answer}")
        print(f"Sources utilisées ({len(source_docs)}):")
        for doc in source_docs:
            # Affiche un aperçu du contenu des documents sources pour vérification.
            print(f"  - {doc.page_content[:100]}...")
        print("-----------------------------------\n")

        # 8. Validation simple de la réponse.
        # Vérifie si les mots-clés attendus sont présents dans la réponse générée.
        if "SecNumCloud" in answer and "0.9€" in answer and "4€" in answer:
            logger.log_step("Validation réponse", "SUCCESS", "Les mots-clés 'SecNumCloud', '0.9€' et '4€' sont présents dans la réponse.")
            return True
        else:
            logger.log_step("Validation réponse", "ERROR", "Certains mots-clés attendus ('SecNumCloud', '0.9€', '4€') sont manquants dans la réponse.")
            return False

    except Exception as e:
        # Capture et log toute exception survenant pendant le test.
        logger.log_step("Erreur test Qdrant", "ERROR", f"Une erreur inattendue est survenue: {str(e)}")
        import traceback
        traceback.print_exc() # Affiche la stack trace pour le débogage.
        return False
    finally:
        # 9. Nettoyage final de la collection Qdrant.
        # Cette étape est cruciale pour ne pas laisser de données de test sur le serveur Qdrant.
        logger.log_step("Nettoyage final Qdrant", "PROGRESS", "Suppression de la collection de test.")
        try:
            qdrant_client = QdrantClient(host="localhost", port=6333)
            if qdrant_client.collection_exists(collection_name=QDRANT_COLLECTION_NAME):
                qdrant_client.delete_collection(collection_name=QDRANT_COLLECTION_NAME)
                logger.log_step("Nettoyage final", "SUCCESS", f"Collection '{QDRANT_COLLECTION_NAME}' supprimée avec succès.")
        except Exception as e:
            logger.log_step("Erreur nettoyage", "ERROR", f"Impossible de nettoyer la collection Qdrant: {e}")

def main():
    """
    Fonction principale du script de test.
    Elle initialise le logger et exécute le test d'intégration Qdrant.
    """
    logger = RAGTestLogger()
    logger.log_step("Démarrage des tests d'intégration Qdrant avec LLMaaS", "INFO")
    print("=" * 70)
    print("ATTENTION: Ce test nécessite un serveur Qdrant en cours d'exécution.")
    print("Pour lancer Qdrant via Docker: docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant")
    print("Assurez-vous que votre clé API LLMaaS est configurée dans le fichier .env ou comme variable d'environnement.")
    print("=" * 70)

    # Exécute le test d'intégration Qdrant.
    success = test_qdrant_integration()
    
    # Affiche le résumé des étapes du test.
    all_steps_passed = logger.print_summary()
    
    # Détermine le code de sortie du script.
    if success and all_steps_passed:
        print("\n🎉 SUCCÈS GLOBAL - L'intégration Qdrant avec LLMaaS est validée!")
        sys.exit(0)
    else:
        print("\n❌ ÉCHEC GLOBAL - L'intégration Qdrant avec LLMaaS a rencontré des problèmes.")
        sys.exit(1)

if __name__ == "__main__":
    main()
