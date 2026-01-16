---
title: Tutoriales
sidebar_position: 6
---

# Tutoriales de LLMaaS

## Visión general

Estos tutoriales avanzados cubren la integración, optimización y mejores prácticas para aprovechar al máximo LLMaaS Cloud Temple en producción. Cada tutorial incluye código probado y métricas de rendimiento reales.

## 🚀 Integraciones y frameworks de LangChain

### 1. Integración básica con LangChain

Este primer ejemplo demuestra cómo integrar nuestra API LLMaaS con el popular framework LangChain creando un "wrapper" personalizado. Un wrapper es una clase que "encapsula" nuestra API para hacerla compatible con los mecanismos internos de LangChain.

#### Código explicado

El siguiente código define una clase `CloudTempleLLM` que hereda de la clase base `LLM` en LangChain. Esto nos permite definir un comportamiento personalizado mientras mantenemos la compatibilidad con el ecosistema LangChain (cadenas, agentes, etc.).

1. **`CloudTempleLLM(LLM)`**: Nuestra clase hereda de `LLM`, lo que nos obliga a implementar ciertos métodos, en particular `_call`.
2. **`_call(self, prompt: str, ...)`**: Este es el núcleo de nuestro wrapper. Cada vez que LangChain necesite invocar nuestro modelo de lenguaje, llamará a este método. Dentro, formateamos una solicitud HTTP POST estándar con los encabezados correctos (`Authorization`) y el `payload` esperado para nuestro endpoint de API `/v1/chat/completions`.
3. **`example_langchain_basic()`**: Esta función de demostración muestra cómo usar nuestro wrapper. Lo instanciamos, creamos un `PromptTemplate` para estructurar nuestra solicitud y los combinamos en un `LLMChain`. Cuando ejecutamos la cadena (`chain.run(...)`), LangChain llama internamente al método `_call` que hemos definido.

Este enfoque es útil si necesita un control total sobre cómo LangChain interactúa con la API, pero es más detallado que usar el cliente `ChatOpenAI` (ver [Referencia de la API](./api#langchain)).

```python
# Instalación de dependencias

# pip install langchain requests pydantic

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
from typing import Optional, List, Any
from pydantic import Field
import requests
import json
import os

# --- Configuración ---

# Se recomienda almacenar su clave API en una variable de entorno
API_KEY = os.getenv("LLMAAS_API_KEY", "su-clave-api-aqui")
BASE_URL = "https://api.ai.cloud-temple.com/v1"

class CloudTempleLLM(LLM):
    """
    Wrapper de LangChain personalizado para la API LLMaaS de Cloud Temple.
    Esta clase permite utilizar nuestra API como un LLM estándar dentro de LangChain.
    """
    
    api_key: str = Field(default="")
    model_name: str = Field(default="granite3.3:8b")
    temperature: float = Field(default=0.7)
    max_tokens: int = Field(default=1000)
    
    @property
    def _llm_type(self) -> str:
        """Identificador único para nuestro tipo de LLM."""
        return "cloud_temple_llmaas"
    
    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        """
        Método principal que realiza la llamada a la API LLMaaS.
        LangChain utiliza este método para cada solicitud al modelo.
        """
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
        
        # Ejecutar la solicitud POST a la API
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=60
        )
        
        response.raise_for_status()  # Lanza una excepción en caso de error HTTP
        result = response.json()
        
        # Devolver el contenido del mensaje del asistente
        return result['choices'][0]['message']['content']

# --- Ejemplo de uso ---
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def example_langchain_wrapper():
    """Demuestra el uso del wrapper LLM con una cadena LangChain."""
    
    # 1. Inicializar nuestro LLM personalizado
    llm = CloudTempleLLM(
        api_key=API_KEY,
        model_name="granite3.3:8b"
    )
    
    # 2. Crear una plantilla de prompt para estructurar las solicitudes
    template = """
    Eres un experto en {domaine}. 
    Responde a esta pregunta de forma detallada y profesional:
    
    Pregunta: {question}
    
    Respuesta:
    """
    prompt = PromptTemplate(
        input_variables=["domaine", "question"],
        template=template
    )
    
    # 3. Crear una cadena que combine el prompt y el LLM
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # 4. Ejecutar la cadena con variables específicas
    result = chain.run(
        domaine="ciberseguridad",
        question="¿Cuáles son las mejores prácticas para asegurar una API REST?"
    )
    
    return result

# --- Ejecutando la prueba ---
if __name__ == "__main__":
    if API_KEY == "su-clave-api-aqui":
        print("Por favor, establezca su LLMAAS_API_KEY en sus variables de entorno.")
    else:
        response = example_langchain_wrapper()
        print("Respuesta del experto en ciberseguridad:\n")
        print(response)
```

### 2. RAG (Generación Aumentada por Recuperación) con la API LLMaaS

RAG es una técnica potente que permite a un Modelo de Lenguaje Grande (LLM) responder preguntas aprovechando una base de conocimientos externa. Este tutorial le guiará a través de la construcción de un pipeline RAG simple utilizando nuestra API para embeddings y generación, y FAISS, una biblioteca de similitud vectorial, para crear un índice en memoria.

#### Código explicado

El pipeline se desglosa en varios pasos lógicos:

1.  **Configuración**: Importamos las bibliotecas necesarias y cargamos nuestra clave API de las variables de entorno. Definimos los modelos a utilizar: `granite-embedding:278m` para la vectorización y `granite3.3:8b` para la generación de respuestas.
2.  **`LLMaaSEmbeddings`**: Como en el ejemplo anterior, necesitamos un wrapper para interactuar con nuestra API de embeddings. Esta clase es responsable de transformar los fragmentos de texto en vectores numéricos (embeddings).
3.  **`setup_rag_pipeline`**: Esta función orquesta la creación del pipeline.
    *   **Carga de documentos**: `DirectoryLoader` carga archivos de texto desde nuestra base de conocimientos.
    *   **División en fragmentos**: `RecursiveCharacterTextSplitter` divide los documentos en piezas más pequeñas. Esto es esencial para que el modelo de embedding pueda procesar el texto de manera eficiente y garantizar una búsqueda de similitud precisa.
    *   **Vectorización e indexación**: `FAISS.from_documents` es un paso clave. Toma los fragmentos de texto, utiliza nuestra clase `LLMaaSEmbeddings` para llamar a la API y obtener los vectores correspondientes, luego almacena estos vectores en un índice FAISS en memoria.
    *   **Configuración de LLM**: Utilizamos `ChatOpenAI`, que es compatible de forma nativa con nuestra API para la parte de generación de respuestas.
    *   **Creación de la cadena `RetrievalQA`**: Esta es la cadena de LangChain que une todo. Cuando se le hace una pregunta, hace lo siguiente:
        a. Utiliza el `retriever` (basado en nuestro índice FAISS) para encontrar los fragmentos de texto más relevantes.
        b. "Inserta" (apila) estos fragmentos en un prompt junto con la pregunta.
        c. Envía este prompt enriquecido al LLM para generar una respuesta contextualmente relevante.
4.  **Ejecución**: La función `main` simula el uso en el mundo real creando archivos de conocimiento temporales, construyendo el pipeline y planteando una pregunta.

```python
import os
import tempfile
import shutil
from pathlib import Path
from dotenv import load_dotenv
from typing import List

# --- LangChain Imports ---
from langchain_core.embeddings import Embeddings
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA

# --- Configuration ---

# Load environment variables (e.g., LLMAAS_API_KEY)
load_dotenv()
API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = "granite-embedding:278m"
LLM_MODEL = "granite3.3:8b"

# --- Custom Embedding Class ---
class LLMaaSEmbeddings(Embeddings):
    """Custom embedding class for the Cloud Temple LLMaaS API."""
    def __init__(self, api_key: str, model_name: str):
        if not api_key:
            raise ValueError("The LLMaaS API key cannot be empty.")
        self.api_key = api_key
        self.model_name = model_name
        self.base_url = BASE_URL
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def _embed(self, texts: List[str]) -> List[List[float]]:
        import httpx
        payload = {"input": texts, "model": self.model_name}
        try:
            with httpx.Client(timeout=60.0) as client:
                response = client.post(f"{self.base_url}/embeddings", headers=self.headers, json=payload)
                response.raise_for_status()
                data = response.json()['data']
                data.sort(key=lambda e: e['index'])
                return [item['embedding'] for item in data]
        except httpx.HTTPStatusError as e:
            print(f"HTTP error during embedding generation: {e.response.text}")
            raise
        except Exception as e:
            print(f"An unexpected error occurred during embedding generation: {e}")
            raise

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        # The _embed method expects a list, so we wrap the single text.
        return self._embed([text])[0]

# --- RAG Pipeline ---
def setup_rag_pipeline(documents_path: str):
    """Complete configuration of the RAG pipeline with LLMaaS tools."""
    print("1. Loading and splitting documents...")
    loader = DirectoryLoader(documents_path, glob="*.txt", loader_cls=TextLoader, loader_kwargs={'encoding': 'utf-8'})
    documents = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    splits = text_splitter.split_documents(documents)
    print(f"   -> {len(documents)} document(s) loaded and split into {len(splits)} chunks.")
    
    print(f"2. Creating embeddings via LLMaaS (model: {EMBEDDING_MODEL})...")
    embeddings = LLMaaSEmbeddings(api_key=API_KEY, model_name=EMBEDDING_MODEL)
    
    print("3. Creating in-memory vector index (FAISS)...")
    vectorstore = FAISS.from_documents(splits, embeddings)
    print("   -> FAISS index created successfully.")
    
    print(f"4. Configuring the LLM (model: {LLM_MODEL})...")
    # Fix for Pydantic/LangChain compatibility
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
    
    print("5. Creating the Question/Answer chain (RAG)...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(),
        return_source_documents=True
    )
    print("   -> RAG pipeline ready.")
    return qa_chain

# --- Execution ---
def main():
    """Main function to run the end-to-end RAG pipeline."""
    if not API_KEY:
        print("Error: The LLMAAS_API_KEY environment variable is not set.")
        return

    # Create temporary test documents
    temp_dir = tempfile.mkdtemp()
    print(f"\nCreating test documents in: {temp_dir}")
    try:
        documents_content = {
            "overview.txt": "Cloud Temple is a French sovereign cloud provider qualified SecNumCloud.",
            "pricing.txt": "The LLMaaS API pricing is €0.9 per million input tokens and €4 per million output tokens."
        }
        for filename, content in documents_content.items():
            with open(Path(temp_dir) / filename, 'w', encoding='utf-8') as f:
                f.write(content)
        
        # Set up and run the pipeline
        rag_chain = setup_rag_pipeline(temp_dir)
        
        print("\n--- Querying the RAG Pipeline ---")
        question = "What is the output token rate for the LLMaaS API at Cloud Temple?"
        result = rag_chain({"query": question})
        
        print(f"\nQuestion: {question}")
        print(f"Answer: {result['result']}")
        print("\nSources used for the answer:")
        for source in result["source_documents"]:
            print(f"- File: {os.path.basename(source.metadata['source'])}")
            print(f"  Content: \"{source.page_content}\"")

    finally:
        # Clean up the temporary directory
        print(f"\nCleaning up temporary directory: {temp_dir}")
        shutil.rmtree(temp_dir)

if __name__ == "__main__":
    main()
```

### 3. Integración con una base de datos vectorial (Qdrant)

Para aplicaciones RAG de producción, se recomienda utilizar una base de datos vectorial dedicada como **Qdrant**. A diferencia de FAISS, que opera en memoria, Qdrant proporciona persistencia de datos, capacidades de búsqueda avanzadas y una mejor escalabilidad.

#### Código explicado

Este tutorial adapta el pipeline RAG anterior para utilizar Qdrant.

1.  **Prerrequisitos**: El primer paso es lanzar una instancia de Qdrant. La forma más sencilla es utilizar Docker.
2.  **`setup_qdrant_rag_pipeline`**:
    *   **Embeddings y Documentos**: La creación de embeddings y documentos sigue siendo la misma que en el ejemplo anterior.
    *   **Conexión a Qdrant**: En lugar de crear un índice FAISS, utilizamos `Qdrant.from_documents`. Este método de LangChain gestiona varios pasos:
        a. Se conecta a su instancia de Qdrant a través de la URL proporcionada.
        b. Crea una nueva "colección" (el equivalente a una tabla en una base de datos SQL) si aún no existe.
        c. Llama a nuestra clase `LLMaaSEmbeddings` para vectorizar los documentos.
        d. Inserta los documentos y sus vectores en la colección de Qdrant.
    *   **`force_recreate=True`**: Para este tutorial, utilizamos este parámetro para asegurar que la colección esté vacía en cada ejecución. En producción, lo establecería en `False` para preservar sus datos.
3.  El resto del pipeline (configuración del LLM, creación de la cadena `RetrievalQA`) permanece idéntico, demostrando la flexibilidad de LangChain: simplemente cambiar la fuente del `retriever` (recuperador de información) permite cambiar de FAISS a Qdrant.

:::info Prerrequisitos: Iniciar Qdrant
Para este tutorial, necesitará una instancia de Qdrant. Puede lanzarla fácilmente con Docker:

```bash


# 1. Descargue la última imagen de Qdrant
docker pull qdrant/qdrant

# 2. Inicie el contenedor de Qdrant
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant
```
:::

El siguiente código muestra cómo adaptar el pipeline RAG para utilizar Qdrant como base de datos vectorial.

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain_community.vectorstores import Qdrant
from langchain.docstore.document import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from typing import List
from langchain_core.embeddings import Embeddings

# (La clase LLMaaSEmbeddings es la misma que en el ejemplo anterior,
# La reutilizamos aquí. Asegúrese de que esté definida en su script).

# --- Configuración ---
load_dotenv()
API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = "granite-embedding:278m"
LLM_MODEL = "granite3.3:8b"
QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
QDRANT_COLLECTION_NAME = "tutorial_collection"

# --- Clase de Embedding (reutilizada del ejemplo anterior) ---
class LLMaaSEmbeddings(Embeddings):
    def __init__(self, api_key: str, model_name: str):
        if not api_key: raise ValueError("API Key is required.")
        self.api_key, self.model_name, self.base_url = api_key, model_name, BASE_URL
        self.headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
    def _embed(self, texts: List[str]) -> List[List[float]]:
        import httpx
        payload = {"input": texts, "model": self.model_name}
        with httpx.Client(timeout=60.0) as client:
            r = client.post(f"{self.base_url}/embeddings", headers=self.headers, json=payload)
            r.raise_for_status()
            data = r.json()['data']
            data.sort(key=lambda e: e['index'])
            return [item['embedding'] for item in data]
    def embed_documents(self, texts: List[str]) -> List[List[float]]: return self._embed(texts)
    def embed_query(self, text: str) -> List[float]: return self._embed([text])[0]

def setup_qdrant_rag_pipeline():
    """Configura y devuelve un pipeline RAG utilizando Qdrant."""
    print("1. Inicializando el cliente de embeddings LLMaaS...")
    embeddings = LLMaaSEmbeddings(api_key=API_KEY, model_name=EMBEDDING_MODEL)

    print("2. Preparando documentos...")
    documents_content = [
        "Cloud Temple is a French sovereign cloud provider with SecNumCloud certification.",
        "LLMaaS pricing is €0.9 for input and €4 for output per million tokens."
    ]
    documents = [Document(page_content=d) for d in documents_content]
    
    print(f"3. Conectando a Qdrant y poblando la colección '{QDRANT_COLLECTION_NAME}'...")
    vectorstore = Qdrant.from_documents(
        documents,
        embeddings,
        url=QDRANT_URL,
        collection_name=QDRANT_COLLECTION_NAME,
        force_recreate=True, # Asegura una colección limpia para el tutorial
    )
    print("   -> Colección creada y poblada correctamente.")

    print(f"4. Configurando el LLM ({LLM_MODEL})...")
    llm = ChatOpenAI(
        api_key=API_KEY,
        base_url=BASE_URL,
        model=LLM_MODEL,
        temperature=0.3
    )

    print("5. Creando la cadena RAG...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        return_source_documents=True
    )
    print("   -> Pipeline RAG basado en Qdrant listo.")
    return qa_chain

# --- Ejecución ---
def main_qdrant():
    """Función principal para ejecutar el pipeline RAG con Qdrant."""
    if not API_KEY:
        print("Error: La variable de entorno LLMAAS_API_KEY no está establecida.")
        return
        
    try:
        rag_chain = setup_qdrant_rag_pipeline()
        question = "¿Cuáles son los detalles de precios para la API LLMaaS de Cloud Temple?"

        print(f"\n--- Consultando el pipeline ---")
        result = rag_chain({"query": question})

        print(f"\nPregunta: {question}")
        print(f"Respuesta: {result['result']}")
        print("\nFuentes utilizadas para la respuesta:")
        for source in result["source_documents"]:
            print(f"- Contenido: \"{source.page_content}\"")
            
    except Exception as e:
        print(f"\nSe ha producido un error: {e}")
        print("Asegúrese de que el contenedor de Qdrant esté en ejecución.")

if __name__ == "__main__":
    main_qdrant()
```

### 4. Agentes LangChain con herramientas

Un agente es un LLM que hace más que simplemente responder a una pregunta: puede utilizar un conjunto de **herramientas** (funciones, API, etc.) para construir una respuesta más compleja. Puede razonar, desglosar un problema, seleccionar una herramienta adecuada, ejecutarla, observar el resultado y repetir este ciclo hasta que llega a una respuesta final.

#### Código explicado

Este ejemplo construye un agente simple capaz de utilizar dos herramientas: una para consultar una API (simulada) de Cloud Temple y otra para realizar cálculos.

1.  **Definiciones de herramientas**: Las clases `CloudTempleAPITool` y `CalculatorTool` heredan de `BaseTool`. Cada herramienta tiene:
    *   Un `name`: un nombre simple y descriptivo.
    *   Una `description`: **crucial**, esto es lo que el LLM lee para decidir qué herramienta usar. Debe ser muy claro sobre lo que hace la herramienta y cuándo usarla.
    *   Un método `_run`: el código real ejecutado cuando el agente selecciona esta herramienta.

2.  **`create_agent_with_tools`**:
    *   **Inicialización de LLM**: Usamos nuestro wrapper `CloudTempleLLM` definido en el primer tutorial.
    *   **Lista de herramientas**: Proporcionamos al agente una lista de herramientas que puede usar.
    *   **Prompt del agente**: El prompt es muy específico. Es un "prompt de razonamiento" que instruye al LLM sobre cómo pensar (`Thought`), elegir una acción (`Action`), proporcionar entrada para esa acción (`Action Input`) y observar el resultado (`Observation`). Este es el mecanismo central del framework ReAct (Razonamiento y Actuación) utilizado aquí.
    *   **Creación del agente**: `create_react_agent` ensambla el LLM, las herramientas y el prompt para crear el agente.
    *   **`AgentExecutor`**: Este es el motor que ejecuta el agente en un bucle hasta que produce una `Final Answer`. El parámetro `verbose=True` es muy útil para ver el "diálogo interno" del agente (sus pensamientos, acciones, etc.).

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json
import os

# (La clase CloudTempleLLM es la misma que en el primer ejemplo)

# --- Definiciones de herramientas ---

class CloudTempleAPITool(BaseTool):
    """Una herramienta que simula la llamada a una API interna para recuperar información sobre los servicios."""
    name = "cloud_temple_api_checker"
    description = "Útil para obtener información sobre servicios, productos y ofertas de Cloud Temple."

    def _run(self, query: str) -> str:
        # En un escenario real, esto llamaría a una API real.
        print(f"--- CloudTempleAPITool llamado con la consulta: '{query}' ---")
        if "servicio" in query.lower():
            return "Cloud Temple ofrece los siguientes servicios: IaaS, PaaS, LLMaaS, Seguridad Gestionada."
        return "Información no encontrada."

    async def _arun(self, query: str) -> str:
        # La implementación asíncrona no es necesaria para este ejemplo.
        raise NotImplementedError("La herramienta API no admite la ejecución asíncrona.")

class SimpleCalculatorTool(BaseTool):
    """Una herramienta sencilla para realizar cálculos matemáticos."""
    name = "simple_calculator"
    description = "Útil para realizar cálculos matemáticos sencillos. Admite una expresión Python válida."

    def _run(self, expression: str) -> str:
        print(f"--- SimpleCalculatorTool llamado con la expresión: '{expression}' ---")
        try:
            # ADVERTENCIA: eval() es peligroso en producción. Esto es solo para fines de demostración.
            return str(eval(expression))
        except Exception as e:
            return f"Error de cálculo: {e}"

    async def _arun(self, expression: str) -> str:
        raise NotImplementedError("La herramienta Calculadora no admite la ejecución asíncrona.")

# --- Creación del agente ---

def create_agent():
    """Configura y devuelve un agente LangChain con las herramientas definidas."""
    print("1. Inicializando el LLM para el agente...")
    llm = CloudTempleLLM(api_key=os.getenv("LLMAAS_API_KEY", "su-clave-api-aqui"))

    tools = [CloudTempleAPITool(), SimpleCalculatorTool()]
    
    # La plantilla de prompt es crucial: guía al LLM en su razonamiento.
    template = """
    Responde a las siguientes preguntas lo mejor que puedas. Tienes acceso a las siguientes herramientas:

    {tools}

    Utiliza el siguiente formato:

    Pregunta: la pregunta que necesitas responder
    Thought: siempre debes pensar en lo que harás
    Action: la acción a realizar, debe ser una de [{tool_names}]
    Action Input: la entrada para la acción
    Observation: el resultado de la acción
    ... (esta secuencia Thought/Action/Action Input/Observation puede repetirse)
    Thought: Ya sé la respuesta final.
    Final Answer: la respuesta final a la pregunta original

    ¡Comienza!

    Pregunta: {input}
    Thought:{agent_scratchpad}
    """
    
    prompt = PromptTemplate.from_template(template)
    
    print("2. Creando el agente utilizando el framework ReAct...")
    agent = create_react_agent(llm, tools, prompt)

    # El AgentExecutor es responsable de ejecutar los ciclos del agente.
    agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
    print("   -> Agente listo.")
    return agent_executor

# --- Ejecución ---

def run_agent():
    """Ejecuta el agente con diferentes preguntas para probar sus capacidades."""
    if os.getenv("LLMAAS_API_KEY") is None:
        print("Por favor, establezca su LLMAAS_API_KEY.")
        return
        
    agent_executor = create_agent()
    
    print("\n--- Prueba 1: Pregunta que requiere una herramienta de información ---")
    question1 = "¿Qué servicios ofrece Cloud Temple?"
    response1 = agent_executor.invoke({"input": question1})
    print(f"\nRespuesta final del agente: {response1['output']}")
    
    print("\n--- Prueba 2: Pregunta que requiere un cálculo ---")
    question2 = "¿Cuál es el resultado de 125 * 8 + 50?"
    response2 = agent_executor.invoke({"input": question2})
    print(f"\nRespuesta final del agente: {response2['output']}")

if __name__ == "__main__":
    run_agent()
```

### 5. Integración del SDK de OpenAI

**Migración fluida desde OpenAI**

```python
from openai import OpenAI

# Configuración de LLMaaS de Cloud Temple

def setup_cloud_temple_client():
    """Configuración del cliente OpenAI para Cloud Temple"""
    
    client = OpenAI(
        api_key="su-clave-api-de-cloud-temple",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Prueba de compatibilidad con el SDK de OpenAI"""
    
    client = setup_cloud_temple_client()
    
    # Completado de chat estándar
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "Usted es un asistente de IA profesional."},
            {"role": "user", "content": "Explique la arquitectura nativa de la nube."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Respuesta: {response.choices[0].message.content}")
    
    # Streaming
    stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Escriba un poema sobre la IA."}
        ],
        stream=True,
        max_tokens=200
    )
    
    print("Streaming:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Prueba de compatibilidad
test_openai_compatibility()
```

### 5. Integración de Semantic Kernel (Microsoft)

[Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/overview/) es un SDK de código abierto de Microsoft que permite integrar LLM en aplicaciones .NET, Python y Java. Aunque está optimizado para los servicios de Azure OpenAI, su flexibilidad permite utilizarlo con cualquier API compatible con OpenAI, incluida la nuestra.

#### Código explicado

Este ejemplo no requiere el SDK completo de Semantic Kernel. Demuestra cómo se puede implementar el **concepto de "función semántica"** con una simple llamada a nuestra API. Una función semántica es esencialmente un prompt estructurado enviado a un Modelo de Lenguaje Grande (LLM) para realizar una tarea específica.

1.  **`semantic_kernel_simple()`**: Esta función simula una "función de resumen".
2.  **Prompt estructurado**: Usamos un mensaje `system` para asignar un rol al LLM ("Eres un experto en resumen") y un mensaje `user` que contiene el texto a resumir. Este es el núcleo del concepto de función semántica.
3.  **Llamada directa a la API**: Una simple llamada `requests.post` a nuestro endpoint `/v1/chat/completions` es suficiente para ejecutar la función.

Este ejemplo ilustra que no siempre es necesario utilizar un framework pesado. Para tareas simples y bien definidas, una llamada directa a la API LLMaaS suele ser la solución más eficiente y de mayor rendimiento.

```python
import requests
import os
from dotenv import load_dotenv

def semantic_kernel_simulation():
    """
    Simula una "función semántica" para el resumen llamando directamente a la API LLMaaS.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Por favor, establezca la variable de entorno LLMAAS_API_KEY.")
        return

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    text_to_summarize = """
    La inteligencia artificial (IA) está transformando numerosos sectores industriales al automatizar tareas, 
    optimizar procesos y habilitar análisis predictivos avanzados. 
    Cloud Temple, con su oferta LLMaaS soberana y certificada SecNumCloud, permite a las empresas 
    integrar estas capacidades de IA al tiempo que garantiza la seguridad y confidencialidad de sus datos.
    """
    
    # El prompt combina una instrucción (rol del sistema) y datos (rol del usuario)
    payload = {
        "model": "granite3.3:8b",
        "messages": [
            {"role": "system", "content": "Usted es un asistente experto para resumir documentos técnicos."},
            {"role": "user", "content": f"Resuma el siguiente texto en una única frase concisa: {text_to_summarize}"}
        ],
        "max_tokens": 100,
        "temperature": 0.5
    }
    
    try:
        response = requests.post(
            "https://api.ai.cloud-temple.com/v1/chat/completions",
            headers=headers,
            json=payload,
            timeout=30
        )
        response.raise_for_status()
        result = response.json()
        summary = result['choices'][0]['message']['content']
        
        print("Texto original:\n", text_to_summarize)
        print("\nResumen generado:\n", summary)
        return summary
        
    except requests.exceptions.RequestException as e:
        print(f"Se ha producido un error de API: {e}")

if __name__ == "__main__":
    semantic_kernel_simulation()
```

### 6. Haystack Framework

[Haystack](https://haystack.deepset.ai/) es otro potente framework de código abierto para construir aplicaciones de búsqueda semántica, RAG y agentes. Al igual que con Semantic Kernel, nuestra API se puede integrar directamente.

#### Código explicado

Este ejemplo simula un pipeline básico de tipo Haystack para responder preguntas dentro de un contexto dado (Question Answering).

1.  **`process_with_context`**: Esta función representa el núcleo de un pipeline de QA. Toma un `context` (por ejemplo, un párrafo de un documento) y una `question`.
2.  **Prompt contextual**: El prompt está cuidadosamente estructurado para incluir tanto el contexto como la pregunta. Esta es una técnica fundamental en RAG: proporcionamos al LLM información relevante para que pueda formular una respuesta fáctica.
3.  **Llamada a la API**: Una vez más, una simple llamada `requests.post` a nuestra API es suficiente. El LLM recibe el contexto y la pregunta, y su tarea es sintetizar una respuesta basándose *exclusivamente* en la información proporcionada.

Este ejemplo demuestra la flexibilidad de la API LLMaaS, que puede servir como un bloque de construcción fundamental para la generación de texto en cualquier framework, incluso aquellos para los que no existe una integración oficial.

```python
import requests
import os
from dotenv import load_dotenv

def haystack_simulation():
    """
    Simula un pipeline de Preguntas y Respuestas (QA) de estilo Haystack
    utilizando una llamada directa a la API LLMaaS.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Por favor, establezca la variable de entorno LLMAAS_API_KEY.")
        return

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # El contexto es la información que el LLM puede utilizar.
    context = """
    Una nube soberana es una infraestructura de computación en la nube que está completamente contenida 
    dentro de las fronteras de un país específico y sujeta a sus leyes. 
    Las principales ventajas incluyen la residencia de datos garantizada, el cumplimiento de las normativas locales 
    (como el GDPR en Europa) y una mayor protección contra el acceso de entidades extranjeras 
    en virtud de leyes extraterritoriales como la U.S. CLOUD Act.
    """
    
    question = "¿Cuáles son los beneficios de una nube soberana?"
    
    # El prompt guía al LLM para que base su respuesta exclusivamente en el contexto proporcionado.
    prompt = f"""
    Responda a la pregunta basándose exclusivamente en el siguiente contexto.
    
    Contexto:
    ---
    {context}
    ---
    
    Pregunta: {question}
    """
    
    payload = {
        "model": "granite3.3:8b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 200,
        "temperature": 0.2  # Baja temperatura para una respuesta factual
    }
    
    try:
        response = requests.post(
            "https://api.ai.cloud-temple.com/v1/chat/completions",
            headers=headers,
            json=payload,
            timeout=30
        )
        response.raise_for_status()
        result = response.json()
        answer = result['choices'][0]['message']['content']
        
        print(f"Pregunta: {question}")
        print("\nRespuesta generada:\n", answer)
        return answer
        
    except requests.exceptions.RequestException as e:
        print(f"Se ha producido un error de API: {e}")

if __name__ == "__main__":
    haystack_simulation()
```

### 7. Integración de LlamaIndex

[LlamaIndex](https://www.llamaindex.ai/) es un framework especializado en la construcción de aplicaciones RAG. Proporciona componentes de alto nivel para la ingesta, indexación y consulta de datos. Nuestra API, al ser compatible con la interfaz de OpenAI, se integra muy fácilmente.

#### Explicación del código

Este ejemplo demuestra cómo configurar LlamaIndex para usar la API LLMaaS para la generación de texto, mientras se utiliza un modelo de embedding local para la vectorización.

1.  **`setup_and_run_llamaindex`**: Esta única función orquesta todo el proceso.
    *   **Configuración de LLM**: LlamaIndex proporciona una clase `OpenAILike` que permite la conexión a cualquier API compatible con el formato OpenAI. Simplemente proporcione su `api_base` y una `api_key`. Esta es la forma más sencilla de hacer que su LLM sea compatible.
    *   **Configuración de Embedding**: Para este ejemplo, usamos un modelo de embedding local (`HuggingFaceEmbedding`). Esto ilustra la flexibilidad de LlamaIndex, que permite mezclar diferentes componentes. Podría usar fácilmente la clase `LLMaaSEmbeddings` de ejemplos anteriores para usar nuestra API de embedding.
    *   **`Settings`**: El objeto `Settings` en LlamaIndex es una forma conveniente de configurar componentes predeterminados (LLM, modelo de embedding, tamaño de chunk, etc.) que serán utilizados por otros objetos de LlamaIndex.
    *   **Ingesta de datos**: `SimpleDirectoryReader` carga documentos de un directorio.
    *   **Creación de índice**: `VectorStoreIndex.from_documents` es el método de alto nivel de LlamaIndex. Maneja automáticamente la división en chunks, la vectorización de chunks (usando el `embed_model` configurado en `Settings`) y la creación de índices en memoria.
    *   **Motor de consulta**: `.as_query_engine()` crea una interfaz simple para hacer preguntas a su índice. Cuando llama a `.query()`, el motor vectoriza su pregunta, recupera los documentos más relevantes del índice y los envía al LLM (configurado en `Settings`) junto con la pregunta para generar una respuesta.

```python


# Dependencias:

# pip install llama-index llama-index-llms-openai-like llama-index-embeddings-huggingface

import os
from dotenv import load_dotenv
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.llms.openai_like import OpenAILike
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
import shutil

def setup_and_run_llamaindex():
    """
    Configura y ejecuta un pipeline RAG simple con LlamaIndex y la API LLMaaS.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Por favor, establezca la variable de entorno LLMAAS_API_KEY.")
        return

    # 1. Configurar el LLM para usar la API LLMaaS a través de la interfaz OpenAILike
    print("1. Configurando el LLM para que apunte a la API LLMaaS...")
    llm = OpenAILike(
        api_key=api_key,
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True,
        # A veces es necesario añadir parámetros de ventana de contexto para ciertos modelos
        # context_window=3900, 
    )

    # 2. Configurar el modelo de embedding (local en este ejemplo por simplicidad)
    print("2. Configurando el modelo de embedding local...")
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    # 3. Aplicar configuraciones globalmente a través del objeto Settings de LlamaIndex
    Settings.llm = llm
    Settings.embed_model = embed_model
    print("   -> LLM y modelo de embedding configurados.")

    # 4. Crear una base de conocimientos simple en un directorio temporal
    print("4. Creando y cargando una base de conocimientos temporal...")
    temp_dir = "temp_llama_data"
    os.makedirs(temp_dir, exist_ok=True)
    knowledge_file = os.path.join(temp_dir, "knowledge.txt")
    with open(knowledge_file, "w", encoding="utf-8") as f:
        f.write("La oferta LLMaaS de Cloud Temple es una solución de IA generativa soberana, "
                "operada íntegramente en Francia y certificada SecNumCloud por la ANSSI.")
    
    documents = SimpleDirectoryReader(temp_dir).load_data()
    print(f"   -> {len(documents)} documento(s) cargado(s).")

    # 5. Crear el índice vectorial. LlamaIndex maneja automáticamente la división en chunks y la vectorización.
    print("5. Creando el índice vectorial...")
    index = VectorStoreIndex.from_documents(documents)
    print("   -> Índice creado.")

    # 6. Crear el motor de consulta y consultar la base de conocimientos
    print("6. Creando el motor de consulta y consultando...")
    query_engine = index.as_query_engine()
    question = "¿Cuáles son las garantías de soberanía de la oferta LLMaaS?"
    response = query_engine.query(question)
    
    print(f"\nPregunta: {question}")
    print(f"Respuesta: {response}")

    # Limpiar el directorio temporal
    shutil.rmtree(temp_dir)
    print(f"\nDirectorio temporal '{temp_dir}' eliminado.")

if __name__ == "__main__":
    setup_and_run_llamaindex()
```

### 8. Configuración de la extensión CLINE para VSCode

Este tutorial le guiará a través de la configuración de la extensión CLINE en Visual Studio Code para utilizar los modelos de lenguaje de Cloud Temple directamente desde su editor.

#### Pasos de configuración

1.  **Abrir la configuración de CLINE**: En VSCode, abra la configuración de la extensión CLINE.
2.  **Crear un nuevo modelo**: Añada una nueva configuración de modelo.
3.  **Rellenar los campos**: Configure los campos como se muestra a continuación, basándose en la imagen siguiente.

    ![Configuración de CLINE para LLMaaS](./images/cline_configuration.png)

    *   **Proveedor de API**: Seleccione `OpenAI Compatible`.
    *   **URL base**: Introduzca el endpoint de la API LLMaaS de Cloud Temple: `https://api.ai.cloud-temple.com/v1`.
    *   **Clave API compatible con OpenAI**: Pegue la clave API que generó desde la consola de Cloud Temple.
    
    :::tip Generar clave API
    Para generar su clave API, vaya a la consola de Cloud Temple, navegue hasta **LLMaaS** > **Claves API**, y haga clic en **"Crear clave API"**.
    
    ![Crear clave API desde la consola](./images/console_create_api_key.png)
    :::
    
    *   **ID del modelo**: Especifique el modelo que desea utilizar, por ejemplo `qwen3-coder:30b`. Puede encontrar la lista de modelos disponibles en la sección [Modelos](./models.md).
    *   **Configuración del modelo**:
        *   **Admite imágenes**: Marque esta casilla si el modelo admite imágenes.
        *   **Admite uso en el navegador**: Marque esta casilla.
        *   **Tamaño de la ventana de contexto**: Introduzca el tamaño de la ventana de contexto del modelo (por ejemplo, `128000`).
        *   **Tokens de salida máximos**: Deje `-1` para una salida ilimitada por defecto.
        *   **Temperatura**: Establezca la temperatura según sus necesidades (por ejemplo, `0`).

Ahora puede seleccionar un modelo en CLINE y utilizarlo para generar código, responder preguntas y mucho más.

## 💡 Ejemplos avanzados

El siguiente directorio de GitHub contiene una colección de ejemplos de código y scripts que demuestran las diversas características y casos de uso de la oferta de LLM as a Service (LLMaaS) de Cloud Temple:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Encontrará guías prácticas para:

-   **Extracción de información y análisis de texto:** Capacidad para analizar documentos y extraer datos estructurados como entidades, eventos, relaciones y atributos, aprovechando ontologías específicas del dominio (por ejemplo, legal, RRHH, TI).

-   **Interacción conversacional y chatbots:** Desarrollo de agentes conversacionales capaces de dialogar, mantener el historial de conversación, utilizar prompts del sistema e invocar herramientas externas.

-   **Transcripción de audio (Speech-to-Text):** Conversión de contenido de audio a texto, incluso para archivos grandes, utilizando técnicas como la segmentación, la normalización y el procesamiento por lotes.

-   **Traducción de texto:** Traducción de documentos de un idioma a otro, gestionando el contexto a través de múltiples segmentos para mejorar la coherencia.

-   **Gestión y evaluación de modelos:** Listado de los modelos de lenguaje disponibles a través de la API, revisión de sus especificaciones y ejecución de pruebas para comparar el rendimiento.

-   **Streaming de respuesta en tiempo real:** Demostración de la capacidad de recibir y mostrar las respuestas del modelo de forma progresiva (token por token), esencial para aplicaciones interactivas.

-   **Pipeline RAG con base de conocimientos en memoria:** Demostrador RAG educativo que ilustra el flujo de trabajo de la Generación Aumentada por Recuperación. Utiliza la API LLMaaS para embedding y generación, con almacenamiento vectorial en memoria (FAISS) para una comprensión clara del proceso.

-   **Pipeline RAG con base de datos vectorial (Qdrant):** Demostrador RAG completo y contenedorizado que utiliza Qdrant como base de datos vectorial. La API LLMaaS se utiliza para el embedding de documentos y la generación de respuestas aumentadas.

-   **Análisis de OCR y documentos (DeepSeek-OCR):** Guía completa y herramienta de demostración para convertir imágenes y PDF a Markdown estructurado, extraer tablas y transcribir fórmulas matemáticas. Consulte la [documentación dedicada](./ocr).
