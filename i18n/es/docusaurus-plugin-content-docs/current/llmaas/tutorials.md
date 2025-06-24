---
title: Tutoriales 
sidebar_position: 6
---

# Tutoriales LLMaaS

## Visión general

Estos tutoriales avanzados cubren la integración, optimización y mejores prácticas para aprovechar al máximo LLMaaS Cloud Temple en producción. Cada tutorial incluye código probado y métricas de rendimiento reales.

## 🚀 Integraciones de LangChain y Frameworks

### 1. Integración de LangChain

**Configuración de LangChain con LLMaaS**

```python

# Instalación de dependencias

# pip install langchain openai requests

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
from typing import Optional, List, Any
from pydantic import Field
import requests
import json

class CloudTempleLLM(LLM):
    """Envoltura de LangChain para LLMaaS Cloud Temple"""
    
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

# Uso con LangChain
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def ejemplo_langchain_basic():
    # Inicialización del LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Plantilla de prompt
    template = """
    Eres un experto en {dominio}. 
    Responde a esta pregunta de manera detallada y profesional:
    
    Pregunta: {pregunta}
    
    Respuesta:
    """
    
    prompt = PromptTemplate(
        input_variables=["dominio", "pregunta"],
        template=template
    )
    
    # Creación de la cadena
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # Ejecución
    result = chain.run(
        dominio="ciberseguridad",
        pregunta="¿Cuáles son las mejores prácticas para proteger una API REST?"
    )
    
    return result

# Prueba de integración
if __name__ == "__main__":
    reponse = exemple_langchain_basic()
    print(f"Réponse LangChain: {reponse}")

### 2. RAG (Generación Mejorada por Recuperación) con LangChain

```python
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

def setup_rag_pipeline():
    """Configuración completa de la pipeline RAG con LLMaaS"""
    
    # 1. Carga de documentos
    loader = TextLoader("documents/knowledge_base.txt")
    documents = loader.load()
    
    # 2. División en chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    splits = text_splitter.split_documents(documents)
    
    # 3. Creación de embeddings
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # 4. Índice vectorial
    vectorstore = FAISS.from_documents(splits, embeddings)
    
    # 5. LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.3  # Más preciso para RAG
    )
    
    # 6. Cadena RAG
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
        return_source_documents=True
    )
    
    return qa_chain

def query_rag(qa_chain, question: str):
    """Interrogación del sistema RAG"""
    result = qa_chain({"query": question})
    
    print(f"Pregunta: {question}")
    print(f"Respuesta: {result['result']}")
    print(f"Fuentes: {len(result['source_documents'])} documentos")
    
    for i, doc in enumerate(result['source_documents']):
        print(f"Fuente {i+1}: {doc.page_content[:200]}...")
    
    return result
```

# Ejemplo de uso
rag_pipeline = setup_rag_pipeline()
query_rag(rag_pipeline, "¿Cómo configurar la seguridad de una API?")

### 3. Agentes de LangChain con herramientas

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json

class CloudTempleAPITool(BaseTool):
    """Herramienta para consultar la API Cloud Temple"""
    
    name = "cloud_temple_api"
    description = "Herramienta para recuperar información sobre los servicios Cloud Temple"
    
    def _run(self, query: str) -> str:
        # Simulación de llamada a la API Cloud Temple
        api_url = "https://api.cloud-temple.com/v1/services"
        response = requests.get(api_url, params={"query": query})
        
        if response.status_code == 200:
            return f"Informaciones Cloud Temple: {response.json()}"
        else:
            return "Error al recuperar los datos"
    
    def _arun(self, query: str) -> str:
        raise NotImplementedError("Async no implementado")

class CalculatorTool(BaseTool):
    """Herramienta de cálculo simple"""
    
    name = "calculator"
    description = "Herramienta para realizar cálculos matemáticos simples"
    
    def _run(self, expression: str) -> str:
        try:
            result = eval(expression)  # Atención: solo para demostración
            return f"Resultado: {result}"
        except Exception as e:
            return f"Error de cálculo: {str(e)}"
    
    def _arun(self, expression: str) -> str:
        raise NotImplementedError("Async no implementado")

def create_agent_with_tools():
    """Creación de un agente LangChain con herramientas"""
    
    # LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Herramientas disponibles
    tools = [
        CloudTempleAPITool(),
        CalculatorTool(),
    ]
    
    # Plantilla de prompt para el agente
    prompt_template = """Eres un asistente de IA con acceso a herramientas especializadas.
    
    Tienes acceso a las siguientes herramientas:
    {tools}
    
    Usa el siguiente formato:
    
    Pregunta: la pregunta de entrada que debes responder
    Pensamiento: siempre debes reflexionar sobre qué hacer
    Acción: la acción a realizar, debe ser una de [{tool_names}]
    Entrada de la acción: la entrada de la acción
    Observación: el resultado de la acción
    ... (esta secuencia Pensamiento/Acción/Entrada de la acción/Observación puede repetirse N veces)
    Pensamiento: Ahora conozco la respuesta final
    Respuesta final: la respuesta final a la pregunta original
    
    Comienza !
    
    Pregunta: {input}
    Pensamiento: {agent_scratchpad}"""
    
    prompt = PromptTemplate(
        template=prompt_template,
        input_variables=["input", "agent_scratchpad", "tools", "tool_names"]
    )
    
    # Creación del agente
    agent = create_react_agent(llm, tools, prompt)
    
    # Ejecutor del agente
    agent_executor = AgentExecutor(
        agent=agent,
        tools=tools,
        verbose=True,
        max_iterations=3
    )
    
    return agent_executor


# Uso del agente
def test_agent():
    agent = create_agent_with_tools()
    
    # Prueba con cálculo
    result1 = agent.invoke({
        "input": "Calcula el costo mensual para 1 millón de tokens con LLMaaS a 4€/millón"
    })
    print(f"Resultado 1: {result1}")
    
    # Prueba con información
    result2 = agent.invoke({
        "input": "¿Cuáles son los servicios disponibles en Cloud Temple?"
    })
    print(f"Resultado 2: {result2}")

test_agent()
```

### 4. Integración del SDK de OpenAI

**Migración transparente desde OpenAI**

```python
from openai import OpenAI

# Configuración para Cloud Temple LLMaaS
def setup_cloud_temple_client():
    """Configuración del cliente OpenAI para Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Prueba de compatibilidad con el SDK de OpenAI"""
    
    client = setup_cloud_temple_client()
    
    # Completación de chat estándar
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "Eres un asistente de IA profesional."},
            {"role": "user", "content": "Explícame la arquitectura de nube nativa."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Respuesta: {response.choices[0].message.content}")
    
    # Flujo
    stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Escribe un poema sobre la IA."}
        ],
        stream=True,
        max_tokens=200
    )
    
    print("Flujo:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Prueba de compatibilidad
test_openai_compatibility()
```

### 5. Integración Semantic Kernel (Microsoft)

```python
import requests

def semantic_kernel_simple():
    """Versión simplificada compatible con LLMaaS"""
    
    headers = {
        "Authorization": "Bearer your-api-key",
        "Content-Type": "application/json"
    }
    
    # Función de resumen simple
    text = "L'IA transforme les secteurs. Cloud Temple propose LLMaaS sécurisé avec SecNumCloud."
    
    response = requests.post(
        "https://api.ai.cloud-temple.com/v1/chat/completions",
        headers=headers,
        json={
            "model": "granite3.3:8b",
            "messages": [
                {"role": "system", "content": "Eres un expert en resúmenes."},
                {"role": "user", "content": f"Resumen: {text}"}
            ],
            "max_tokens": 100
        },
        timeout=30
    )
    
    response.raise_for_status()
    result = response.json()
    resume = result['choices'][0]['message']['content']
    
    print(f"Resumen: {resume}")
    return resume

semantic_kernel_simple()
```

### 6. Marco Haystack

```python
import requests

def haystack_simple():
    """Pipeline Haystack avec LLMaaS"""
    
    def process_with_context(context: str, question: str) -> str:
        headers = {
            "Authorization": "Bearer your-api-key",
            "Content-Type": "application/json"
        }
        
        prompt = f"""
        Contexte: {context}
        
        Question: {question}
        
        Réponds de manière précise et professionnelle:
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
    
    # Prueba
    context = "Cloud Temple est un fournisseur cloud souverain français."
    question = "Quels sont les avantages d'un cloud souverain ?"
    
    result = process_with_context(context, question)
    print(f"Réponse Haystack: {result}")

haystack_simple()
```

### 7. Integración LlamaIndex

```python


# pip install llama-index

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai_like import OpenAILike
from llama_index.core import Settings
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

def setup_llamaindex():
    """Configuration LlamaIndex avec Cloud Temple"""
    
    # Configuración LLM
    llm = OpenAILike(
        api_key="your-api-key",
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True
    )
    
    # Configuración de embeddings locales (evita OpenAI)
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # Configuración global
    Settings.llm = llm
    Settings.embed_model = embed_model
    
    return llm

def create_knowledge_base():
    """Création d'une base de connaissances"""
    
    llm = setup_llamaindex()
    
    # Carga de documentos
    documents = SimpleDirectoryReader("data/").load_data()
    
    # Creación del índice con embeddings locales
    index = VectorStoreIndex.from_documents(documents)
    
    # Motor de consulta
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

## 💡 Ejemplos Avanzados

En el directorio GitHub del producto encontrarás una colección de ejemplos de código y scripts que demuestran las diferentes funcionalidades y casos de uso de la oferta LLM as a Service (LLMaaS) de Cloud Temple:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Allí encontrarás guías prácticas para:
- __Extracción de Información y Análisis de Texto :__ Capacidad para analizar documentos y extraer datos estructurados como entidades, eventos, relaciones y atributos, apoyándose en ontologías específicas a dominios (ej: jurídico, RR.HH., IT).

- __Interacción Conversacional y Chatbots :__ Desarrollo de agentes conversacionales capaces de dialogar, mantener un historial de intercambio, utilizar instrucciones del sistema (prompts del sistema) e invocar herramientas externas.

- __Transcripción de Audio (Speech-to-Text) :__ Conversión de contenido de audio a texto, incluyendo archivos voluminosos, gracias a técnicas de segmentación, normalización y procesamiento por lotes.

- __Traducción de Texto :__ Traducción de documentos de un idioma a otro, gestionando el contexto en varios segmentos para mejorar la coherencia.

- __Gestión y Evaluación de Modelos :__ Listado de los modelos de lenguaje disponibles a través de la API, consulta de sus especificaciones y ejecución de pruebas para comparar sus rendimientos.

- __Streaming de Respuestas en Tiempo Real :__ Demostración de la capacidad para recibir y mostrar las respuestas de los modelos de manera progresiva (token por token), esencial para las aplicaciones interactivas.

---