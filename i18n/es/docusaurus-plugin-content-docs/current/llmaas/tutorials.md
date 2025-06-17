---
title: Tutoriales 
sidebar_position: 6
---

# Tutoriales LLMaaS

## Visión general

Estos tutoriales avanzados cubren la integración, optimización y buenas prácticas para aprovechar al máximo LLMaaS Cloud Temple en producción. Cada tutorial incluye código probado y métricas de rendimiento reales.

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
    """Envoltura para LLMaaS Cloud Temple en LangChain"""
    
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
    # Inicialización LLM Cloud Temple
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

# Prueba de la integración
if __name__ == "__main__":
    respuesta = ejemplo_langchain_basic()
    print(f"Respuesta LangChain: {respuesta}")
```

### 2. RAG (Generación con Recuperación) con LangChain

```python
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

def configurar_pipeline_rag():
    """Configuración completa de la pipeline RAG con LLMaaS"""
    
    # 1. Carga de documentos
    loader = TextLoader("documents/knowledge_base.txt")
    documentos = loader.load()
    
    # 2. División en chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    splits = text_splitter.split_documents(documentos)
    
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

def consultar_rag(qa_chain, pregunta: str):
    """Consulta del sistema RAG"""
    result = qa_chain({"query": pregunta})
    
    print(f"Pregunta: {pregunta}")
    print(f"Respuesta: {result['result']}")
    print(f"Fuentes: {len(result['source_documents'])} documentos")
    
    for i, doc in enumerate(result['source_documents']):
        print(f"Fuente {i+1}: {doc.page_content[:200]}...")
    
    return result

# Ejemplo de uso
pipeline_rag = configurar_pipeline_rag()
consultar_rag(pipeline_rag, "¿Cómo configurar la seguridad de una API?")
```

### 3. Agentes de LangChain con Herramientas

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
            return f"Información Cloud Temple: {response.json()}"
        else:
            return "Error al recuperar los datos"
    
    def _arun(self, query: str) -> str:
        raise NotImplementedError("Async no implementado")

class CalculadoraTool(BaseTool):
    """Herramienta de cálculo simple"""
    
    name = "calculadora"
    description = "Herramienta para realizar cálculos matemáticos simples"
    
    def _run(self, expresion: str) -> str:
        try:
            resultado = eval(expresion)  # Solo para demostración
            return f"Resultado: {resultado}"
        except Exception as e:
            return f"Error de cálculo: {str(e)}"
    
    def _arun(self, expresion: str) -> str:
        raise NotImplementedError("Async no implementado")

def crear_agente_con_herramientas():
    """Creación de un agente LangChain con herramientas"""
    
    # LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Herramientas disponibles
    herramientas = [
        CloudTempleAPITool(),
        CalculadoraTool(),
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
    
    Comienza!
    
    Pregunta: {input}
    Pensamiento: {agent_scratchpad}"""
    
    prompt = PromptTemplate(
        template=prompt_template,
        input_variables=["input", "agent_scratchpad", "tools", "tool_names"]
    )
    
    # Creación del agente
    agente = create_react_agent(llm, herramientas, prompt)
    
    # Ejecutor del agente
    agente_executor = AgentExecutor(
        agente=agente,
        herramientas=herramientas,
        verbose=True,
        max_iterations=3
    )
    
    return agente_executor

# Uso del agente
def probar_agente():
    agente = crear_agente_con_herramientas()
    
    # Prueba con cálculo
    resultado1 = agente.invoke({
        "input": "Calcula el costo mensual para 1 millón de tokens con LLMaaS a 4€/millón"
    })
    print(f"Resultado 1: {resultado1}")
    
    # Prueba con información
    resultado2 = agente.invoke({
        "input": "¿Cuáles son los servicios disponibles en Cloud Temple?"
    })
    print(f"Resultado 2: {resultado2}")

probar_agente()
```

### 4. Integración con SDK de OpenAI

**Migración transparente desde OpenAI**

```python
from openai import OpenAI

# Configuración para Cloud Temple LLMaaS
def configurar_cliente_cloud_temple():
    """Configuración del cliente OpenAI para Cloud Temple"""
    
    cliente = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return cliente

def probar_compatibilidad_openai():
    """Prueba de compatibilidad con SDK de OpenAI"""
    
    cliente = configurar_cliente_cloud_temple()
    
    # Chat completion estándar
    respuesta = cliente.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "Eres un asistente de IA profesional."},
            {"role": "user", "content": "Explica la arquitectura cloud native."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Respuesta: {respuesta.choices[0].message.content}")
    
    # Streaming
    stream = cliente.chat.completions.create(
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

### 5. Integración de Semantic Kernel (Microsoft)

```python
import requests

def semantic_kernel_simple():
    """Versión simplificada compatible con LLMaaS"""
    
    headers = {
        "Authorization": "Bearer your-api-key",
        "Content-Type": "application/json"
    }
    
    # Función de resumen simple
    text = "La IA transforma los sectores. Cloud Temple ofrece LLMaaS seguro con SecNumCloud."
    
    response = requests.post(
        "https://api.ai.cloud-temple.com/v1/chat/completions",
        headers=headers,
        json={
            "model": "granite3.3:8b",
            "messages": [
                {"role": "system", "content": "Eres un experto en resúmenes."},
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
        Contexto: {context}
        
        Pregunta: {question}
        
        Responde de manera precisa y profesional:
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
    context = "Cloud Temple es un proveedor de nube soberana francés."
    question = "¿Cuáles son las ventajas de una nube soberana?"
    
    result = process_with_context(context, question)
    print(f"Respuesta Haystack: {result}")

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
    """Configuración de LlamaIndex con Cloud Temple"""
    
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
    """Creación de una base de conocimientos"""
    
    llm = setup_llamaindex()
    
    # Carga de documentos
    documents = SimpleDirectoryReader("data/").load_data()
    
    # Creación del índice con embeddings locales
    index = VectorStoreIndex.from_documents(documents)
    
    # Motor de consulta
    query_engine = index.as_query_engine()
    
    return query_engine

def test_llamaindex():
    """Prueba de LlamaIndex con Cloud Temple"""
    
    query_engine = create_knowledge_base()
    
    response = query_engine.query(
        "¿Cuáles son las funciones principales de Cloud Temple LLMaaS?"
    )
    
    print(f"Respuesta LlamaIndex: {response}")

test_llamaindex()
```

---

## 💡 Ejemplos Avanzados

En el repositorio GitHub del producto encontrarás una colección de ejemplos de código y scripts que demuestran las diferentes funcionalidades y casos de uso de la oferta LLM as a Service (LLMaaS) de Cloud Temple:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Allí encontrarás guías prácticas para:
- __Extracción de información y análisis de texto:__ Capacidad para analizar documentos y extraer datos estructurados como entidades, eventos, relaciones y atributos, basándose en ontologías específicas a dominios (ej: jurídico, RR.HH., TI).

- __Interacción conversacional y chatbots:__ Desarrollo de agentes conversacionales capaces de dialogar, mantener un historial de intercambio, usar instrucciones del sistema (prompts del sistema) e invocar herramientas externas.

- __Transcripción de audio (Speech-to-Text):__ Conversión de contenido de audio a texto, incluyendo archivos voluminosos, gracias a técnicas de segmentación, normalización y procesamiento por lotes.

- __Traducción de texto:__ Traducción de documentos de un idioma a otro, manejando el contexto en varios segmentos para mejorar la coherencia.

- __Gestión y evaluación de modelos:__ Listado de modelos de lenguaje disponibles a través de la API, consulta de sus especificaciones y ejecución de pruebas para comparar sus rendimientos.

- __Transmisión de respuestas en tiempo real:__ Demostración de la capacidad para recibir y mostrar respuestas de los modelos de manera progresiva (token por token), esencial para aplicaciones interactivas.

---