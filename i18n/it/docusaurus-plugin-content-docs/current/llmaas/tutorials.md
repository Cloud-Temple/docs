---
title: Tutorial 
sidebar_position: 6
---

# Tutorial LLMaaS

## Panoramica

Questi tutorial avanzati coprono l'integrazione, l'ottimizzazione e le migliori pratiche per sfruttare appieno LLMaaS Cloud Temple in produzione. Ogni tutorial include codice testato e metriche di prestazione reali.

## 🚀 Integrazioni LangChain e Frameworks

### 1. Integrazione LangChain

**Configurazione di LangChain con LLMaaS**

```python
# Installazione delle dipendenze
# pip install langchain openai requests

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
from typing import Optional, List, Any
from pydantic import Field
import requests
import json

class CloudTempleLLM(LLM):
    """Wrapper per LangChain per LLMaaS Cloud Temple"""
    
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

# Utilizzo con LangChain
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def esempio_langchain_base():
    # Inizializzazione LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Template del prompt
    template = """
    Sei un esperto in {dominio}. 
    Rispondi a questa domanda in modo dettagliato e professionale:
    
    Domanda: {domanda}
    
    Risposta:
    """
    
    prompt = PromptTemplate(
        input_variables=["dominio", "domanda"],
        template=template
    )
    
    # Creazione della catena
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # Esecuzione
    result = chain.run(
        dominio="sicurezza informatica",
        domanda="Quali sono le migliori pratiche per proteggere un'API REST?"
    )
    
    return result

# Test dell'integrazione
if __name__ == "__main__":
    risposta = esempio_langchain_base()
    print(f"Risposta LangChain: {risposta}")
```

### 2. RAG (Generazione Amplificata con Recupero) con LangChain

```python
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

def setup_rag_pipeline():
    """Configurazione completa del pipeline RAG con LLMaaS"""
    
    # 1. Caricamento dei documenti
    loader = TextLoader("documents/knowledge_base.txt")
    documents = loader.load()
    
    # 2. Divisione in chunk
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    splits = text_splitter.split_documents(documents)
    
    # 3. Creazione degli embeddings
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # 4. Indice vettoriale
    vectorstore = FAISS.from_documents(splits, embeddings)
    
    # 5. LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.3  # Maggiore precisione per RAG
    )
    
    # 6. Catena RAG
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
        return_source_documents=True
    )
    
    return qa_chain

def query_rag(qa_chain, domanda: str):
    """Interrogazione del sistema RAG"""
    result = qa_chain({"query": domanda})
    
    print(f"Domanda: {domanda}")
    print(f"Risposta: {result['result']}")
    print(f"Fonti: {len(result['source_documents'])} documenti")
    
    for i, doc in enumerate(result['source_documents']):
        print(f"Fonte {i+1}: {doc.page_content[:200]}...")
    
    return result

# Esempio di utilizzo
rag_pipeline = setup_rag_pipeline()
query_rag(rag_pipeline, "Come configurare la sicurezza di un'API?")
```

### 3. Agenti LangChain con Strumenti

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json

class CloudTempleAPITool(BaseTool):
    """Strumento per interrogare l'API Cloud Temple"""
    
    name = "cloud_temple_api"
    description = "Strumento per recuperare informazioni sui servizi Cloud Temple"
    
    def _run(self, query: str) -> str:
        # Simulazione di chiamata API Cloud Temple
        api_url = "https://api.cloud-temple.com/v1/services"
        response = requests.get(api_url, params={"query": query})
        
        if response.status_code == 200:
            return f"Informazioni Cloud Temple: {response.json()}"
        else:
            return "Errore nel recupero dei dati"
    
    def _arun(self, query: str) -> str:
        raise NotImplementedError("Async non implementato")

class CalculatorTool(BaseTool):
    """Strumento di calcolo semplice"""
    
    name = "calcolatrice"
    description = "Strumento per eseguire calcoli matematici semplici"
    
    def _run(self, espressione: str) -> str:
        try:
            result = eval(espressione)  # Attenzione: solo per demo
            return f"Risultato: {result}"
        except Exception as e:
            return f"Errore di calcolo: {str(e)}"
    
    def _arun(self, espressione: str) -> str:
        raise NotImplementedError("Async non implementato")

def crea_agente_con_strumenti():
    """Creazione di un agente LangChain con strumenti"""
    
    # LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Strumenti disponibili
    strumenti = [
        CloudTempleAPITool(),
        CalculatorTool(),
    ]
    
    # Template del prompt per l'agente
    prompt_template = """Sei un assistente IA con accesso a strumenti specializzati.
    
    Hai accesso ai seguenti strumenti:
    {strumenti}
    
    Usa il seguente formato:
    
    Domanda: la domanda iniziale che devi rispondere
    Pensiero: dovresti sempre riflettere su cosa fare
    Azione: l'azione da eseguire, deve essere una delle [{tool_names}]
    Input dell'azione: l'input dell'azione
    Osservazione: il risultato dell'azione
    ... (questa sequenza Pensiero/Azione/Input dell'azione/Osservazione può ripetersi N volte)
    Pensiero: Ora conosco la risposta finale
    Risposta finale: la risposta finale alla domanda originale
    
    Inizia!
    
    Domanda: {input}
    Pensiero: {agent_scratchpad}"""
    
    prompt = PromptTemplate(
        template=prompt_template,
        input_variables=["input", "agent_scratchpad", "strumenti", "tool_names"]
    )
    
    # Creazione dell'agente
    agente = create_react_agent(llm, strumenti, prompt)
    
    # Esecutore dell'agente
    agente_esecutore = AgentExecutor(
        agente=agente,
        strumenti=strumenti,
        verbose=True,
        max_iterations=3
    )
    
    return agente_esecutore

# Utilizzo dell'agente
def test_agente():
    agente = crea_agente_con_strumenti()
    
    # Test con calcolo
    risultato1 = agente.invoke({
        "input": "Calcola il costo mensile per 1 milione di token con LLMaaS a 4€/milione"
    })
    print(f"Risultato 1: {risultato1}")
    
    # Test con informazione
    risultato2 = agente.invoke({
        "input": "Quali sono i servizi disponibili da Cloud Temple ?"
    })
    print(f"Risultato 2: {risultato2}")

test_agente()
```

### 4. Integrazione OpenAI SDK

**Migrazione trasparente da OpenAI**

```python
from openai import OpenAI

# Configurazione per Cloud Temple LLMaaS
def setup_client_cloud_temple():
    """Configurazione client OpenAI per Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_compatibilità_openai():
    """Test di compatibilità con SDK OpenAI"""
    
    client = setup_client_cloud_temple()
    
    # Chat completion standard
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "Sei un assistente IA professionale."},
            {"role": "user", "content": "Spiega l'architettura cloud native."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Risposta: {response.choices[0].message.content}")
    
    # Streaming
    stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Scrivi un poema sull'IA."}
        ],
        stream=True,
        max_tokens=200
    )
    
    print("Stream:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Test di compatibilità
test_compatibilita_openai()
```

### 5. Integrazione Semantic Kernel (Microsoft)

```python
import requests

def semantic_kernel_simple():
    """Versione semplificata compatibile con LLMaaS"""
    
    headers = {
        "Authorization": "Bearer your-api-key",
        "Content-Type": "application/json"
    }
    
    # Funzione di riassunto semplice
    text = "L'IA trasforma i settori. Cloud Temple offre LLMaaS sicuro con SecNumCloud."
    
    response = requests.post(
        "https://api.ai.cloud-temple.com/v1/chat/completions",
        headers=headers,
        json={
            "model": "granite3.3:8b",
            "messages": [
                {"role": "system", "content": "Sei un esperto di riassunto."},
                {"role": "user", "content": f"Riassumi: {text}"}
            ],
            "max_tokens": 100
        },
        timeout=30
    )
    
    response.raise_for_status()
    result = response.json()
    resume = result['choices'][0]['message']['content']
    
    print(f"Riassunto: {resume}")
    return resume

semantic_kernel_simple()
```

### 6. Framework Haystack

```python
import requests

def haystack_simple():
    """Pipeline Haystack con LLMaaS"""
    
    def process_with_context(context: str, question: str) -> str:
        headers = {
            "Authorization": "Bearer your-api-key",
            "Content-Type": "application/json"
        }
        
        prompt = f"""
        Contesto: {context}
        
        Domanda: {question}
        
        Rispondi in modo preciso e professionale:
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
    context = "Cloud Temple è un fornitore cloud sovrano francese."
    question = "Quali sono i vantaggi di un cloud sovrano?"
    
    result = process_with_context(context, question)
    print(f"Risposta Haystack: {result}")

haystack_simple()
```

### 7. Integrazione LlamaIndex

```python
# pip install llama-index

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai_like import OpenAILike
from llama_index.core import Settings
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

def setup_llamaindex():
    """Configurazione LlamaIndex con Cloud Temple"""
    
    # Configurazione LLM
    llm = OpenAILike(
        api_key="your-api-key",
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True
    )
    
    # Configurazione embeddings locali (evita OpenAI)
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # Configurazione globale
    Settings.llm = llm
    Settings.embed_model = embed_model
    
    return llm

def create_knowledge_base():
    """Creazione di una base di conoscenza"""
    
    llm = setup_llamaindex()
    
    # Caricamento dei documenti
    documents = SimpleDirectoryReader("data/").load_data()
    
    # Creazione dell'indice con embeddings locali
    index = VectorStoreIndex.from_documents(documents)
    
    # Motore di richiesta
    query_engine = index.as_query_engine()
    
    return query_engine

def test_llamaindex():
    """Test LlamaIndex con Cloud Temple"""
    
    query_engine = create_knowledge_base()
    
    response = query_engine.query(
        "Quali sono le funzionalità principali di Cloud Temple LLMaaS?"
    )
    
    print(f"Risposta LlamaIndex: {response}")

test_llamaindex()
```

---

## 💡 Esempi avanzati

Nel repository GitHub del prodotto troverai una raccolta di esempi di codice e script che mostrano le diverse funzionalità e casi d'uso dell'offerta LLM as a Service (LLMaaS) di Cloud Temple:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Troverai guide pratiche per:
- __Estrazione di informazioni e analisi del testo :__ Capacità di analizzare documenti per estrarre dati strutturati come entità, eventi, relazioni e attributi, basandosi su ontologie specifiche per settori (es: giuridico, HR, IT).

- __Interazione conversazionale e chatbot :__ Sviluppo di agenti conversazionali in grado di dialogare, mantenere un cronologia degli scambi, utilizzare istruzioni di sistema (prompts di sistema) e richiamare strumenti esterni.

- __Trascrizione audio (Speech-to-Text) :__ Conversione di contenuti audio in testo, incluso per file di grandi dimensioni, grazie a tecniche di segmentazione, normalizzazione e elaborazione a batch.

- __Traduzione di testi :__ Traduzione di documenti da una lingua all'altra, gestendo il contesto su più segmenti per migliorare la coerenza.

- __Gestione e valutazione dei modelli :__ Elenco dei modelli di linguaggio disponibili tramite l'API, consultazione delle loro specifiche e esecuzione di test per confrontarne le prestazioni.

- __Streaming di risposte in tempo reale :__ Dimostrazione della capacità di ricevere e visualizzare le risposte dei modelli in modo progressivo (token per token), essenziale per le applicazioni interattive.

---
