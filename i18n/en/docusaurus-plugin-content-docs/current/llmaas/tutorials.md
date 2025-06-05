---
title: Tutorials 
sidebar_position: 6
---

# Tutorials LLMaaS

## Overview

These advanced tutorials cover integration, optimization, and best practices for fully leveraging LLMaaS Cloud Temple in production. Each tutorial includes tested code and real performance metrics.

## 🚀 LangChain and Frameworks Integrations

### 1. LangChain Integration

**LangChain Configuration with LLMaaS**

```python
# Installation des dépendances
# pip install langchain openai requests

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
from typing import Optional, List, Any
from pydantic import Field
import requests
import json

class CloudTempleLLM(LLM):
    """LangChain wrapper pour LLMaaS Cloud Temple"""
    
    api_key: str = Field()
    model_name: str = Field(default="granite3.3:8b")
    base_url: str = Field(default="https://api.ai.cloud-temple.com/v1")
    temperature: float = Field(default=0.7)
    max_tokens: int = Field(default=1000)
    
    def __init__(self, api_key: str, model_name: str = "granite3.3:8b", **kwargs):
        super().__init__(api_key=api_key, model_name=model_name, **kwargs)
    
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

### 2. RAG (Retrieval-Augmented Generation) with LangChain

```python
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
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

### 3. LangChain Agents with Tools

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

### 4. OpenAI SDK Integration

**Transparent migration from OpenAI**

```python
from openai import OpenAI

# Configuration for Cloud Temple LLMaaS
def setup_cloud_temple_client():
    """Configuration client OpenAI for Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Test of compatibility with OpenAI SDK"""
    
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
```
print("Stream:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Compatibility Test
test_openai_compatibility()
```

### 5. Semantic Kernel Integration (Microsoft)

```python
import requests

def semantic_kernel_simple():
    """Simplified version compatible with LLMaaS"""
    
    headers = {
        "Authorization": "Bearer your-api-key",
        "Content-Type": "application/json"
    }
    
    # Simple summary function
    text = "AI is transforming sectors. Cloud Temple offers a secure LLMaaS with SecNumCloud."
    
    response = requests.post(
        "https://api.ai.cloud-temple.com/v1/chat/completions",
        headers=headers,
        json={
            "model": "granite3.3:8b",
            "messages": [
                {"role": "system", "content": "You are an expert in summaries."},
                {"role": "user", "content": f"Summarize: {text}"}
            ],
            "max_tokens": 100
        },
        timeout=30
    )
    
    response.raise_for_status()
    result = response.json()
    resume = result['choices'][0]['message']['content']
    
    print(f"Summary: {resume}")
    return resume

semantic_kernel_simple()
```

### 6. Haystack Framework

```python
import requests

def haystack_simple():
    """Haystack Pipeline with LLMaaS"""
    
    def process_with_context(context: str, question: str) -> str:
        headers = {
            "Authorization": "Bearer your-api-key",
            "Content-Type": "application/json"
        }
        
        prompt = f"""
        Context: {context}
        
        Question: {question}
        
        Answer precisely and professionally:
        """
        
        response = requests.post(
            "https://api.ai.cloud-temple.com/v1/chat/completions",
            headers=headers,
            json={
                "model": "granite3.3:8b",
                "messages": [{"role": "user", "content": prompt}],
                "max_tokens": 150
            },
            timeout=30
        )
        
        response.raise_for_status()
        result = response.json()
        return result['choices'][0]['message']['content']
    
    # Test
    context = "Cloud Temple is a French sovereign cloud provider."
    question = "What are the advantages of a sovereign cloud?"
    
    result = process_with_context(context, question)
    print(f"Haystack Response: {result}")

haystack_simple()
```

### 7. LlamaIndex Integration

```python
# pip install llama-index

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai_like import OpenAILike
from llama_index.core import Settings
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

def setup_llamaindex():
    """LlamaIndex Configuration with Cloud Temple"""
    
    # LLM Configuration
    llm = OpenAILike(
        api_key="your-api-key",
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True
    )
    
    # Local embeddings configuration (avoids OpenAI)
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # Global configuration
    Settings.llm = llm
    Settings.embed_model = embed_model
    
    return llm

def create_knowledge_base():
    """Knowledge Base Creation"""
    
    llm = setup_llamaindex()
    
    # Document loading
    documents = SimpleDirectoryReader("data/").load_data()
    
    # Index creation with local embeddings
    index = VectorStoreIndex.from_documents(documents)
    
    # Query engine
    query_engine = index.as_query_engine()
    
    return query_engine

def test_llamaindex():
    """LlamaIndex Test with Cloud Temple"""
    
    query_engine = create_knowledge_base()
    
    response = query_engine.query(
        "What are the main features of Cloud Temple LLMaaS?"
    )
    
    print(f"LlamaIndex Response: {response}")

test_llamaindex()
```

---

## 💡 Advanced Examples

You will find in the product's GitHub directory a collection of code examples and scripts demonstrating the different features and use cases of Cloud Temple's LLM as a Service (LLMaaS) offering:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

You will find practical guides for:
- __Information Extraction and Text Analysis:__ Ability to analyze documents to extract structured data such as entities, events, relationships, and attributes, relying on domain-specific ontologies (e.g., legal, HR, IT).

- __Conversational Interaction and Chatbots:__ Development of conversational agents capable of dialoguing, maintaining exchange history, using system prompts, and invoking external tools.

- __Audio Transcription (Speech-to-Text):__ Conversion of audio content into text, including for large files, through segmentation, normalization, and batch processing techniques.

- __Text Translation:__ Translation of documents from one language to another, managing context across multiple segments to improve coherence.

- __Model Management and Evaluation:__ Listing of language models available via the API, consulting their specifications, and running tests to compare their performance.

- __Real-Time Response Streaming:__ Demonstration of the ability to receive and display model responses progressively (token by token), essential for interactive applications.

---