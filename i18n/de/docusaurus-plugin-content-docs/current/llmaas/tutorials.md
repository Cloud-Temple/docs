---
title: Tutorials 
sidebar_position: 6
---

# Tutorials LLMaaS

## Übersicht

Diese fortgeschrittenen Tutorials decken die Integration, Optimierung und Best Practices ab, um LLMaaS Cloud Temple in der Produktion voll auszuschöpfen. Jedes Tutorial enthält getesteten Code und reale Leistungsmetriken.

## 🚀 Integrationen von LangChain und Frameworks

### 1. Integration von LangChain

**Konfiguration von LangChain mit LLMaaS**

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
    """LangChain Wrapper für LLMaaS Cloud Temple"""
    
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

# Nutzung mit LangChain
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def beispiel_langchain_basic():
    # Initialisierung LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Prompt-Vorlage
    template = """
    Sie sind ein Experte in {Bereich}. 
    Beantworten Sie diese Frage detailliert und professionell:
    
    Frage: {frage}
    
    Antwort:
    """
    
    prompt = PromptTemplate(
        input_variables=["Bereich", "frage"],
        template=template
    )
    
    # Erstellung der Kette
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # Ausführung
    result = chain.run(
        Bereich="Cybersicherheit",
        Frage="Welche sind die besten Praktiken, um eine REST-API zu sichern?"
    )
    
    return result

# Test der Integration
if __name__ == "__main__":
    antwort = beispiel_langchain_basic()
    print(f"Antwort von LangChain: {antwort}")
```

### 2. RAG (Retrieval-Augmented Generation) mit LangChain

```python
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

def setup_rag_pipeline():
    """Vollständige RAG-Pipeline-Konfiguration mit LLMaaS"""
    
    # 1. Dokumente laden
    loader = TextLoader("documents/knowledge_base.txt")
    documents = loader.load()
    
    # 2. Aufteilung in Abschnitte
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
    
    # 5. LLM Cloud Temple
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

def frag_rag(qa_chain, frage: str):
    """Abfrage des RAG-Systems"""
    result = qa_chain({"query": frage})
    
    print(f"Frage: {frage}")
    print(f"Antwort: {result['result']}")
    print(f"Quellen: {len(result['source_documents'])} Dokumente")
    
    for i, doc in enumerate(result['source_documents']):
        print(f"Quelle {i+1}: {doc.page_content[:200]}...")
    
    return result

# Beispielanwendung
rag_pipeline = setup_rag_pipeline()
frag_rag(rag_pipeline, "Wie konfiguriert man die Sicherheit einer API?")
```

### 3. LangChain-Agents mit Tools

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json

class CloudTempleAPITool(BaseTool):
    """Werkzeug zur Abfrage der Cloud Temple API"""
    
    name = "cloud_temple_api"
    description = "Werkzeug zur Abruf von Informationen zu Cloud Temple-Diensten"
    
    def _run(self, query: str) -> str:
        # Simulation eines API-Aufrufs von Cloud Temple
        api_url = "https://api.cloud-temple.com/v1/services"
        response = requests.get(api_url, params={"query": query})
        
        if response.status_code == 200:
            return f"Cloud Temple Informationen: {response.json()}"
        else:
            return "Fehler beim Abruf der Daten"
    
    def _arun(self, query: str) -> str:
        raise NotImplementedError("Async nicht implementiert")

class CalculatorTool(BaseTool):
    """Einfaches Rechenwerkzeug"""
    
    name = "calculator"
    description = "Werkzeug zur Durchführung einfacher mathematischer Berechnungen"
    
    def _run(self, expression: str) -> str:
        try:
            result = eval(expression)  # Achtung: Nur für Demo
            return f"Ergebnis: {result}"
        except Exception as e:
            return f"Fehler bei der Berechnung: {str(e)}"
    
    def _arun(self, expression: str) -> str:
        raise NotImplementedError("Async nicht implementiert")

def create_agent_with_tools():
    """Erstellung eines LangChain-Agents mit Tools"""
    
    # LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Verfügbare Tools
    tools = [
        CloudTempleAPITool(),
        CalculatorTool(),
    ]
    
    # Prompt-Vorlage für den Agenten
    prompt_template = """Sie sind ein KI-Assistent mit Zugriff auf spezialisierte Tools.
    
    Sie haben folgende Tools zur Verfügung:
    {tools}
    
    Verwenden Sie das folgende Format:
    
    Frage: Die Eingabe-Frage, die Sie beantworten müssen
    Gedanke: Sie sollten immer zuerst überlegen, was Sie tun werden
    Aktion: Die Aktion, die durchgeführt werden muss, muss eine der folgenden sein [{tool_names}]
    Aktion Eingabe: Die Eingabe der Aktion
    Beobachtung: Das Ergebnis der Aktion
    ... (diese Sequenz Gedanke/Aktion/Aktion Eingabe/Beobachtung kann N-mal wiederholt werden)
    Gedanke: Ich kenne nun die endgültige Antwort
    Endgültige Antwort: Die endgültige Antwort auf die ursprüngliche Frage
    
    Beginnen Sie!
    
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

# Nutzung des Agenten
def test_agent():
    agent = create_agent_with_tools()
    
    # Test mit Berechnung
    result1 = agent.invoke({
        "input": "Berechnen Sie die monatlichen Kosten für 1 Million Tokens mit LLMaaS zu 4€/Million"
    })
    print(f"Ergebnis 1: {result1}")
    
    # Test mit Information
    result2 = agent.invoke({
        "input": "Welche Dienste sind bei Cloud Temple verfügbar?"
    })
    print(f"Ergebnis 2: {result2}")

test_agent()
```

### 4. Integration des OpenAI SDK

**Transparente Migration von OpenAI**

```python
from openai import OpenAI

# Konfiguration für Cloud Temple LLMaaS
def setup_cloud_temple_client():
    """Konfiguration des OpenAI-Clients für Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Test der Kompatibilität mit dem OpenAI SDK"""
    
    client = setup_cloud_temple_client()
    
    # Standard Chat Completion
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "Sie sind ein professioneller KI-Assistent."},
            {"role": "user", "content": "Erklären Sie mir die Cloud-Native-Architektur."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Antwort: {response.choices[0].message.content}")
    
    # Streaming
    stream = client.chat.completions.create(
```
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

# Kompatibilitätstest
test_openai_compatibility()
```

### 5. Semantic Kernel-Integration (Microsoft)

```python
import requests

def semantic_kernel_simple():
    """Einfache Version, kompatibel mit LLMaaS"""
    
    headers = {
        "Authorization": "Bearer your-api-key",
        "Content-Type": "application/json"
    }
    
    # Einfache Zusammenfassungsfunktion
    text = "KI verändert Branchen. Cloud Temple bietet sicheres LLMaaS mit SecNumCloud an."
    
    response = requests.post(
        "https://api.ai.cloud-temple.com/v1/chat/completions",
        headers=headers,
        json={
            "model": "granite3.3:8b",
            "messages": [
                {"role": "system", "content": "Sie sind ein Experte für Zusammenfassungen."},
                {"role": "user", "content": f"Zusammenfassung: {text}"}
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
    """Haystack-Pipeline mit LLMaaS"""
    
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
    question = "Welche Vorteile bietet ein souveräner Cloud-Anbieter?"
    
    result = process_with_context(context, question)
    print(f"Antwort Haystack: {result}")

haystack_simple()
```

### 7. LlamaIndex-Integration

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
    
    # Index mit lokalen Embeddings erstellen
    index = VectorStoreIndex.from_documents(documents)
    
    # Abfragesystem
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

---

## 💡 Erweiterte Beispiele

Im GitHub-Verzeichnis des Produkts finden Sie eine Sammlung von Code-Beispielen und Skripten, die die verschiedenen Funktionen und Anwendungsfälle des LLM as a Service (LLMaaS)-Angebots von Cloud Temple demonstrieren:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Sie werden dort praktische Anleitungen finden für:
- __Informationsextraktion und Textanalyse:__ Fähigkeit, Dokumente zu analysieren, um strukturierte Daten wie Entitäten, Ereignisse, Beziehungen und Attribute zu extrahieren, basierend auf spezifischen Ontologien für bestimmte Branchen (z. B. Recht, Personalwesen, IT).

- __Konversationelle Interaktion und Chatbots:__ Entwicklung von konversationellen Agenten, die mit Benutzern kommunizieren können, einen Austauschverlauf aufrechterhalten, Systemanweisungen (Systemprompts) verwenden und externe Tools aufrufen.

- __Audio-Transkription (Speech-to-Text):__ Umwandlung von Audioinhalten in Text, einschließlich für große Dateien, dank Techniken wie Aufteilung, Normalisierung und Batch-Verarbeitung.

- __Textübersetzung:__ Übersetzung von Dokumenten von einer Sprache in eine andere, wobei der Kontext über mehrere Segmente hinweg verwaltet wird, um die Kohärenz zu verbessern.

- __Modellverwaltung und -bewertung:__ Auflistung der über die API verfügbaren Sprachmodelle, Anzeige ihrer Spezifikationen und Ausführung von Tests, um ihre Leistung zu vergleichen.

- __Echtzeit-Stream-Verarbeitung:__ Demonstration der Fähigkeit, Antworten der Sprachmodelle schrittweise (Token für Token) zu empfangen und anzuzeigen, was für interaktive Anwendungen entscheidend ist.

---