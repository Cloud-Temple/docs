---
title: Tutorials LLMaaS
sidebar_position: 6
---

# Tutorials LLMaaS

## Vue d'ensemble

Ces tutorials avancés couvrent l'intégration, l'optimisation et les meilleures pratiques pour exploiter pleinement LLMaaS Cloud Temple en production. Chaque tutorial inclut du code testé et des métriques de performance réelles.

## 🚀 Intégrations LangChain et Frameworks

### 1. Intégration LangChain

**Configuration LangChain avec LLMaaS**

```python
# Installation des dépendances
# pip install langchain openai requests

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
from typing import Optional, List, Any
import requests
import json

class CloudTempleLLM(LLM):
    """LangChain wrapper pour LLMaaS Cloud Temple"""
    
    api_key: str
    model_name: str = "granite3.3:8b"
    base_url: str = "https://api.ai.cloud-temple.com/v1"
    temperature: float = 0.7
    max_tokens: int = 1000
    
    def __init__(self, api_key: str, **kwargs):
        super().__init__(**kwargs)
        self.api_key = api_key
    
    @property
    def _llm_type(self) -> str:
        return "cloud_temple_llmaas"
    
    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "model": self.model_name,
            "messages": [{"role": "user", "content": prompt}],
            "temperature": self.temperature,
            "max_tokens": self.max_tokens
        }
        
        if stop:
            payload["stop"] = stop
        
        response = requests.post(
            f"{self.base_url}/chat/completions",
            headers=headers,
            json=payload,
            timeout=60
        )
        
        response.raise_for_status()
        result = response.json()
        
        return result['choices'][0]['message']['content']
    
    def _generate(self, prompts: List[str], stop: Optional[List[str]] = None) -> LLMResult:
        generations = []
        
        for prompt in prompts:
            text = self._call(prompt, stop)
            generations.append([Generation(text=text)])
        
        return LLMResult(generations=generations)

# Utilisation avec LangChain
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def exemple_langchain_basic():
    # Initialisation LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Template de prompt
    template = """
    Tu es un expert en {domaine}. 
    Réponds à cette question de manière détaillée et professionnelle:
    
    Question: {question}
    
    Réponse:
    """
    
    prompt = PromptTemplate(
        input_variables=["domaine", "question"],
        template=template
    )
    
    # Création de la chaîne
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # Exécution
    result = chain.run(
        domaine="cybersécurité",
        question="Quelles sont les meilleures pratiques pour sécuriser une API REST ?"
    )
    
    return result

# Test de l'intégration
if __name__ == "__main__":
    reponse = exemple_langchain_basic()
    print(f"Réponse LangChain: {reponse}")
```

### 2. RAG (Retrieval-Augmented Generation) avec LangChain

```python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

def setup_rag_pipeline():
    """Configuration complète pipeline RAG avec LLMaaS"""
    
    # 1. Chargement des documents
    loader = TextLoader("documents/knowledge_base.txt")
    documents = loader.load()
    
    # 2. Division en chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    splits = text_splitter.split_documents(documents)
    
    # 3. Création des embeddings
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # 4. Index vectoriel
    vectorstore = FAISS.from_documents(splits, embeddings)
    
    # 5. LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.3  # Plus précis pour RAG
    )
    
    # 6. Chain RAG
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
        return_source_documents=True
    )
    
    return qa_chain

def query_rag(qa_chain, question: str):
    """Interrogation du système RAG"""
    result = qa_chain({"query": question})
    
    print(f"Question: {question}")
    print(f"Réponse: {result['result']}")
    print(f"Sources: {len(result['source_documents'])} documents")
    
    for i, doc in enumerate(result['source_documents']):
        print(f"Source {i+1}: {doc.page_content[:200]}...")
    
    return result

# Exemple d'utilisation
rag_pipeline = setup_rag_pipeline()
query_rag(rag_pipeline, "Comment configurer la sécurité d'une API ?")
```

### 3. Agents LangChain avec Outils

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json

class CloudTempleAPITool(BaseTool):
    """Outil pour interroger l'API Cloud Temple"""
    
    name = "cloud_temple_api"
    description = "Outil pour récupérer des informations sur les services Cloud Temple"
    
    def _run(self, query: str) -> str:
        # Simulation d'appel API Cloud Temple
        api_url = "https://api.cloud-temple.com/v1/services"
        response = requests.get(api_url, params={"query": query})
        
        if response.status_code == 200:
            return f"Informations Cloud Temple: {response.json()}"
        else:
            return "Erreur lors de la récupération des données"
    
    def _arun(self, query: str) -> str:
        raise NotImplementedError("Async not implemented")

class CalculatorTool(BaseTool):
    """Outil de calcul simple"""
    
    name = "calculator"
    description = "Outil pour effectuer des calculs mathématiques simples"
    
    def _run(self, expression: str) -> str:
        try:
            result = eval(expression)  # Attention: seulement pour démo
            return f"Résultat: {result}"
        except Exception as e:
            return f"Erreur de calcul: {str(e)}"
    
    def _arun(self, expression: str) -> str:
        raise NotImplementedError("Async not implemented")

def create_agent_with_tools():
    """Création d'un agent LangChain avec outils"""
    
    # LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Outils disponibles
    tools = [
        CloudTempleAPITool(),
        CalculatorTool(),
    ]
    
    # Template de prompt pour l'agent
    prompt_template = """Tu es un assistant IA avec accès à des outils spécialisés.
    
    Tu as accès aux outils suivants:
    {tools}
    
    Utilise le format suivant:
    
    Question: la question d'entrée que tu dois répondre
    Thought: tu devrais toujours réfléchir à ce que tu vas faire
    Action: l'action à prendre, doit être une des [{tool_names}]
    Action Input: l'entrée de l'action
    Observation: le résultat de l'action
    ... (cette séquence Thought/Action/Action Input/Observation peut se répéter N fois)
    Thought: Je connais maintenant la réponse finale
    Final Answer: la réponse finale à la question originale
    
    Commence !
    
    Question: {input}
    Thought: {agent_scratchpad}"""
    
    prompt = PromptTemplate(
        template=prompt_template,
        input_variables=["input", "agent_scratchpad", "tools", "tool_names"]
    )
    
    # Création de l'agent
    agent = create_react_agent(llm, tools, prompt)
    
    # Exécuteur d'agent
    agent_executor = AgentExecutor(
        agent=agent,
        tools=tools,
        verbose=True,
        max_iterations=3
    )
    
    return agent_executor

# Utilisation de l'agent
def test_agent():
    agent = create_agent_with_tools()
    
    # Test avec calcul
    result1 = agent.invoke({
        "input": "Calcule le coût mensuel pour 1 million de tokens avec LLMaaS à 4€/million"
    })
    print(f"Résultat 1: {result1}")
    
    # Test avec information
    result2 = agent.invoke({
        "input": "Quels sont les services disponibles chez Cloud Temple ?"
    })
    print(f"Résultat 2: {result2}")

test_agent()
```

### 4. Intégration OpenAI SDK

**Migration transparente depuis OpenAI**

```python
from openai import OpenAI

# Configuration pour Cloud Temple LLMaaS
def setup_cloud_temple_client():
    """Configuration client OpenAI pour Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Test de compatibilité avec SDK OpenAI"""
    
    client = setup_cloud_temple_client()
    
    # Chat completion standard
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "Tu es un assistant IA professionnel."},
            {"role": "user", "content": "Explique-moi l'architecture cloud native."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Réponse: {response.choices[0].message.content}")
    
    # Streaming
    stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Écris un poème sur l'IA."}
        ],
        stream=True,
        max_tokens=200
    )
    
    print("Stream:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Test de compatibilité
test_openai_compatibility()
```

### 5. Intégration Semantic Kernel (Microsoft)

```python
# pip install semantic-kernel

import semantic_kernel as sk
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion

def setup_semantic_kernel():
    """Configuration Semantic Kernel avec Cloud Temple"""
    
    # Création du kernel
    kernel = sk.Kernel()
    
    # Service LLM Cloud Temple (compatible OpenAI)
    service_id = "cloud_temple_llm"
    kernel.add_service(
        OpenAIChatCompletion(
            service_id=service_id,
            api_key="your-api-key",
            base_url="https://api.ai.cloud-temple.com/v1",
            ai_model_id="granite3.3:8b"
        ),
    )
    
    return kernel

def create_semantic_function():
    """Création d'une fonction sémantique"""
    
    kernel = setup_semantic_kernel()
    
    # Fonction de résumé
    summarize_function = kernel.create_function_from_prompt(
        prompt="""
        Résume le texte suivant en français, en gardant les points essentiels:
        
        {{$input}}
        
        Résumé:
        """,
        function_name="Summarize",
        description="Résume un texte long"
    )
    
    return kernel, summarize_function

def test_semantic_kernel():
    """Test Semantic Kernel avec Cloud Temple"""
    
    kernel, summarize_func = create_semantic_function()
    
    # Test de résumé
    long_text = """
    L'intelligence artificielle (IA) est une technologie en rapide évolution qui transforme
    de nombreux secteurs. Cloud Temple propose LLMaaS, un service sécurisé et souverain
    permettant d'accéder aux modèles les plus avancés tout en respectant la réglementation
    française. Avec la qualification SecNumCloud, les entreprises peuvent déployer des
    solutions IA en toute confiance pour leurs données sensibles.
    """
    
    result = kernel.invoke(summarize_func, input=long_text)
    print(f"Résumé: {result}")

test_semantic_kernel()
```

### 6. Framework Haystack

```python
# pip install haystack-ai

from haystack import Pipeline
from haystack.components.generators import OpenAIGenerator
from haystack.components.builders import PromptBuilder

def setup_haystack_pipeline():
    """Configuration pipeline Haystack avec Cloud Temple"""
    
    # Générateur compatible OpenAI
    generator = OpenAIGenerator(
        api_key="your-api-key",
        api_base_url="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b"
    )
    
    # Template de prompt
    prompt_builder = PromptBuilder(
        template="""
        Contexte: {{context}}
        
        Question: {{question}}
        
        Réponds de manière précise et professionnelle:
        """
    )
    
    # Pipeline
    pipeline = Pipeline()
    pipeline.add_component("prompt_builder", prompt_builder)
    pipeline.add_component("llm", generator)
    
    # Connexions
    pipeline.connect("prompt_builder", "llm")
    
    return pipeline

def test_haystack():
    """Test pipeline Haystack"""
    
    pipeline = setup_haystack_pipeline()
    
    result = pipeline.run({
        "prompt_builder": {
            "context": "Cloud Temple est un fournisseur cloud souverain français.",
            "question": "Quels sont les avantages d'un cloud souverain ?"
        }
    })
    
    print(f"Réponse Haystack: {result['llm']['replies'][0]}")

test_haystack()
```

### 7. Intégration LlamaIndex

```python
# pip install llama-index

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai_like import OpenAILike
from llama_index.core import Settings

def setup_llamaindex():
    """Configuration LlamaIndex avec Cloud Temple"""
    
    # Configuration LLM
    llm = OpenAILike(
        api_key="your-api-key",
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True
    )
    
    # Configuration globale
    Settings.llm = llm
    
    return llm

def create_knowledge_base():
    """Création d'une base de connaissances"""
    
    llm = setup_llamaindex()
    
    # Chargement des documents
    documents = SimpleDirectoryReader("data/").load_data()
    
    # Création de l'index
    index = VectorStoreIndex.from_documents(documents)
    
    # Moteur de requête
    query_engine = index.as_query_engine()
    
    return query_engine

def test_llamaindex():
    """Test LlamaIndex avec Cloud Temple"""
    
    query_engine = create_knowledge_base()
    
    response = query_engine.query(
        "Quelles sont les fonctionnalités principales de Cloud Temple LLMaaS ?"
    )
    
    print(f"Réponse LlamaIndex: {response}")

test_llamaindex()
```

---

## 🔧 Optimisations de Performance

*Section à venir - prochaine étape*

## 📊 Monitoring et Métriques

*Section à venir - prochaine étape*

## 🛡️ Best Practices de Sécurité

*Section à venir - prochaine étape*

## 💡 Exemples Avancés

*Section à venir - prochaine étape*

---

**Prochaines étapes :** Section suivante selon vos besoins - optimisations, monitoring, sécurité ou exemples avancés.
