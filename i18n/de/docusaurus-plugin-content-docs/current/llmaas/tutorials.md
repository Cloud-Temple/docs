---
title: Tutorials 
sidebar_position: 6
---

# Tutorials LLMaaS

## Übersicht

Diese erweiterten Tutorials behandeln die Integration, Optimierung und Best Practices, um LLMaaS Cloud Temple in der Produktion voll auszuschöpfen. Jeder Tutorial enthält getesteten Code und echte Leistungsmetriken.

## 🚀 Integrationen von LangChain und Frameworks

### 1. LangChain-Integration

**LangChain-Konfiguration mit LLMaaS**

```python

# Installation der Abhängigkeiten

# pip install langchain openai requests

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
from typing import Optional, List, Any
from pydantic import Field
import requests
import json

class CloudTempleLLM(LLM):
    """LangChain wrapper für LLMaaS Cloud Temple"""
    
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

# Verwendung mit LangChain
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def exemple_langchain_basic():
    # Initialisierung des LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Prompt-Vorlage
    template = """
    Sie sind ein Experte im Bereich {domaine}. 
    Beantworten Sie diese Frage detailliert und professionell:
    
    Frage: {question}
    
    Antwort:
    """
    
    prompt = PromptTemplate(
        input_variables=["domaine", "question"],
        template=template
    )
    
    # Erstellung der Kette
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # Ausführung
    result = chain.run(
        domaine="cybersécurité",
        question="Quelles sont les meilleures pratiques pour sécuriser une API REST ?"
    )
    
    return result

# Integrationstest
if __name__ == "__main__":
    reponse = exemple_langchain_basic()
    print(f"LangChain-Antwort: {reponse}")
```

### 2. RAG (Retrieval-Augmented Generation) mit LangChain

```python
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

def setup_rag_pipeline():
    """Vollständige Konfiguration der RAG-Pipeline mit LLMaaS"""
    
    # 1. Dokumente laden
    loader = TextLoader("documents/knowledge_base.txt")
    documents = loader.load()
    
    # 2. Aufteilung in Chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    splits = text_splitter.split_documents(documents)
    
    # 3. Erstellung der Embeddings
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # 4. Vektorindex
    vectorstore = FAISS.from_documents(splits, embeddings)
    
    # 5. LLM-Cloud-Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.3  # Präziser für RAG
    )
    
    # 6. RAG-Kette
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
        return_source_documents=True
    )
    
    return qa_chain

def query_rag(qa_chain, question: str):
    """Abfrage des RAG-Systems"""
    result = qa_chain({"query": question})
    
    print(f"Frage: {question}")
    print(f"Antwort: {result['result']}")
    print(f"Quellen: {len(result['source_documents'])} Dokumente")
    
    for i, doc in enumerate(result['source_documents']):
        print(f"Quelle {i+1}: {doc.page_content[:200]}...")
    
    return result

# Beispiel der Verwendung
rag_pipeline = setup_rag_pipeline()
query_rag(rag_pipeline, "Comment configurer la sécurité d'une API ?")
```

### 3. LangChain-Agenten mit Tools

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json

class CloudTempleAPITool(BaseTool):
    """Werkzeug zum Abfragen der Cloud Temple API"""
    
    name = "cloud_temple_api"
    description = "Werkzeug zum Abrufen von Informationen zu Cloud-Temple-Diensten"
    
    def _run(self, query: str) -> str:
        # Simulation eines API-Aufrufs von Cloud Temple
        api_url = "https://api.cloud-temple.com/v1/services"
        response = requests.get(api_url, params={"query": query})
        
        if response.status_code == 200:
            return f"Cloud Temple Informationen: {response.json()}"
        else:
            return "Fehler beim Abrufen der Daten"
    
    def _arun(self, query: str) -> str:
        raise NotImplementedError("Async nicht implementiert")

class CalculatorTool(BaseTool):
    """Einfaches Rechenwerkzeug"""
    
    name = "calculator"
    description = "Werkzeug zum Durchführen einfacher mathematischer Berechnungen"
    
    def _run(self, expression: str) -> str:
        try:
            result = eval(expression)  # Achtung: nur für Demo
            return f"Ergebnis: {result}"
        except Exception as e:
            return f"Fehler bei der Berechnung: {str(e)}"
    
    def _arun(self, expression: str) -> str:
        raise NotImplementedError("Async nicht implementiert")

def create_agent_with_tools():
    """Erstellung eines LangChain-Agents mit Werkzeugen"""
    
    # LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Verfügbare Werkzeuge
    tools = [
        CloudTempleAPITool(),
        CalculatorTool(),
    ]
    
    # Prompt-Vorlage für den Agenten
    prompt_template = """Sie sind ein KI-Assistent mit Zugriff auf spezialisierte Werkzeuge.
    
    Sie haben Zugriff auf folgende Werkzeuge:
    {tools}
    
    Verwenden Sie das folgende Format:
    
    Frage: Die Eingabefrage, die Sie beantworten müssen
    Gedanke: Sie sollten immer darüber nachdenken, was Sie tun werden
    Aktion: Die auszuführende Aktion, muss eine der folgenden sein [{tool_names}]
    Aktionseingabe: Die Eingabe für die Aktion
    Beobachtung: Das Ergebnis der Aktion
    ... (diese Sequenz aus Gedanke/Aktion/Aktionseingabe/Beobachtung kann N-mal wiederholt werden)
    Gedanke: Ich kenne nun die endgültige Antwort
    Endgültige Antwort: Die endgültige Antwort auf die ursprüngliche Frage
    
    Los geht's!
    
    Frage: {input}
    Gedanke: {agent_scratchpad}"""
    
    prompt = PromptTemplate(
        template=prompt_template,
        input_variables=["input", "agent_scratchpad", "tools", "tool_names"]
    )
    
    # Erstellung des Agenten
    agent = create_react_agent(llm, tools, prompt)
    
    # Agenten-Executor
    agent_executor = AgentExecutor(
        agent=agent,
        tools=tools,
        verbose=True,
        max_iterations=3
    )
    
    return agent_executor

# Verwendung des Agents
def test_agent():
    agent = create_agent_with_tools()
    
    # Test mit Berechnung
    result1 = agent.invoke({
        "input": "Berechnen Sie die monatlichen Kosten für 1 Million Tokens mit LLMaaS zu 4 €/Million"
    })
    print(f"Ergebnis 1: {result1}")
    
    # Test mit Information
    result2 = agent.invoke({
        "input": "Welche Dienste sind bei Cloud Temple verfügbar?"
    })
    print(f"Ergebnis 2: {result2}")

test_agent()
```

### 4. OpenAI SDK-Integration

**Transparente Migration von OpenAI**

```python
from openai import OpenAI

# Konfiguration für Cloud Temple LLMaaS
def setup_cloud_temple_client():
    """OpenAI-Client-Konfiguration für Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Test der Kompatibilität mit dem OpenAI SDK"""
    
    client = setup_cloud_temple_client()
    
    # Standard-Chat-Completion
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "Sie sind ein professioneller IA-Assistent."},
            {"role": "user", "content": "Erklären Sie die Cloud-Native-Architektur."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Antwort: {response.choices[0].message.content}")
    
    # Streaming
    stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Schreibe ein Gedicht über KI."}
        ],
        stream=True,
        max_tokens=200
    )
    
    print("Stream:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Test von Kompatibilität
test_openai_compatibility()
```

### 5. Integration Semantic Kernel (Microsoft)

```python
import requests

def semantic_kernel_simple():
    """Einfache Version kompatibel mit LLMaaS"""
    
    headers = {
        "Authorization": "Bearer your-api-key",
        "Content-Type": "application/json"
    }
    
    # Einfache Zusammenfassungsfunktion
    text = "L'IA transforme les secteurs. Cloud Temple propose LLMaaS sécurisé avec SecNumCloud."
    
    response = requests.post(
        "https://api.ai.cloud-temple.com/v1/chat/completions",
        headers=headers,
        json={
            "model": "granite3.3:8b",
            "messages": [
                {"role": "system", "content": "Tu es un expert en résumé."},
                {"role": "user", "content": f"Résume: {text}"}
            ],
            "max_tokens": 100
        },
        timeout=30
    )
    
    response.raise_for_status()
    result = response.json()
    resume = result['choices'][0]['message']['content']
    
    print(f"Zusammenfassung: {resume}")
    return resume

semantic_kernel_simple()
```

### 6. Haystack-Framework

```python
import requests

def haystack_simple():
    """Pipeline Haystack mit LLMaaS"""
    
    def process_with_context(context: str, question: str) -> str:
        headers = {
            "Authorization": "Bearer your-api-key",
            "Content-Type": "application/json"
        }
        
        prompt = f"""
        Kontext: {context}
        
        Frage: {question}
        
        Beantworten Sie präzise und professionell:
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
    context = "Cloud Temple ist ein französischer souveräner Cloud-Anbieter."
    question = "Welche Vorteile bietet ein souveräner Cloud-Service?"
    
    result = process_with_context(context, question)
    print(f"Antwort Haystack: {result}")

haystack_simple()
```

### 7. Integration LlamaIndex

```python

# pip install llama-index

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai_like import OpenAILike
from llama_index.core import Settings
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

def setup_llamaindex():
    """LlamaIndex-Konfiguration mit Cloud Temple"""
    
    # LLM-Konfiguration
    llm = OpenAILike(
        api_key="your-api-key",
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True
    )
    
    # Lokale Embeddings-Konfiguration (vermeidet OpenAI)
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # Globale Konfiguration
    Settings.llm = llm
    Settings.embed_model = embed_model
    
    return llm

def create_knowledge_base():
    """Erstellung einer Wissensbasis"""
    
    llm = setup_llamaindex()
    
    # Dokumente laden
    documents = SimpleDirectoryReader("data/").load_data()
    
    # Indexerstellung mit lokalen Embeddings
    index = VectorStoreIndex.from_documents(documents)
    
    # Abfrage-Engine
    query_engine = index.as_query_engine()
    
    return query_engine

def test_llamaindex():
    """LlamaIndex-Test mit Cloud Temple"""
    
    query_engine = create_knowledge_base()
    
    response = query_engine.query(
        "Welche sind die Hauptfunktionen von Cloud Temple LLMaaS?"
    )
    
    print(f"Antwort LlamaIndex: {response}")

test_llamaindex()
```

## 💡 Fortgeschrittene Beispiele

Sie finden in dem GitHub-Verzeichnis des Produkts eine Sammlung von Code-Beispielen und Skripten, die die verschiedenen Funktionen und Anwendungsfälle des LLM as a Service (LLMaaS)-Angebots von Cloud Temple demonstrieren:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Sie finden dort praktische Anleitungen für:
- __Informationsextraktion und Textanalyse:__ Fähigkeit, Dokumente zu analysieren, um strukturierte Daten wie Entitäten, Ereignisse, Beziehungen und Attribute zu extrahieren, basierend auf spezifischen Ontologien für bestimmte Bereiche (z. B. rechtlich, HR, IT).

- __Konversationelle Interaktion und Chatbots:__ Entwicklung von conversationalen Agenten, die mit Benutzern kommunizieren, Austauschverläufe verfolgen, Systemanweisungen (System-Prompts) verwenden und externe Tools aufrufen können.

- __Audio-Transkription (Speech-to-Text):__ Umwandlung von Audio-Inhalten in Text, auch für große Dateien, mithilfe von Aufteilungstechniken, Normalisierung und Batch-Verarbeitung.

- __Textübersetzung:__ Übersetzung von Dokumenten von einer Sprache in eine andere, wobei der Kontext über mehrere Segmente verarbeitet wird, um die Konsistenz zu verbessern.

- __Modellverwaltung und -bewertung:__ Auflistung der über die API verfügbaren Sprachmodelle, Anzeige ihrer Spezifikationen und Durchführung von Tests zur Bewertung ihrer Leistung.

- __Echtzeit-Response-Streaming:__ Demonstration der Fähigkeit, Antworten der Modelle schrittweise (Token für Token) zu empfangen und anzuzeigen, was für interaktive Anwendungen entscheidend ist.

---