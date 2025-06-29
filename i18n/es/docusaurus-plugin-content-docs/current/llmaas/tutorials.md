---
title: Tutoriales 
sidebar_position: 6
---

# Tutoriales LLMaaS

## Vista general

Estos tutoriales avanzados cubren la integración, optimización y mejores prácticas para aprovechar al máximo LLMaaS Cloud Temple en producción. Cada tutorial incluye código probado y métricas de rendimiento reales.

## 🚀 Integraciones LangChain y Frameworks

### 1. Integración básica con LangChain

Este primer ejemplo muestra cómo integrar nuestra API LLMaaS con el framework popular LangChain creando un "wrapper" personalizado. Un wrapper es una clase que "envuelve" nuestra API para hacerla compatible con los mecanismos internos de LangChain.

#### El código explicado

El código siguiente define una clase `CloudTempleLLM` que hereda de la clase base `LLM` de LangChain. Esto nos permite definir un comportamiento personalizado manteniéndonos compatibles con el ecosistema LangChain (cadenas, agentes, etc.).

1.  **`CloudTempleLLM(LLM)`** : Nuestra clase hereda de `LLM`, lo que nos obliga a implementar ciertos métodos, especialmente `_call`.
2.  **`_call(self, prompt: str, ...)`** : Es el núcleo de nuestro wrapper. Cada vez que LangChain necesite invocar a nuestro modelo de lenguaje, llamará a este método. Dentro, formamos una solicitud HTTP POST estándar con los headers adecuados (`Authorization`) y el `payload` esperado por nuestra API `/v1/chat/completions`.
3.  **`ejemplo_langchain_basic()`** : Esta función de demostración muestra cómo usar nuestro wrapper. Lo instanciamos, creamos un `PromptTemplate` para estructurar nuestra solicitud y los combinamos en una `LLMChain`. Cuando ejecutamos la cadena (`chain.run(...)`), LangChain llama internamente al método `_call` que hemos definido.

Este enfoque es útil si deseas un control total sobre la forma en que LangChain interactúa con la API, pero es más verboso que el uso del cliente `ChatOpenAI` (ver [Referencia de la API](./api#langchain)).

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

# Se recomienda almacenar su clave de API en una variable de entorno
API_KEY = os.getenv("LLMAAS_API_KEY", "su-clave-api-aqui")
BASE_URL = "https://api.ai.cloud-temple.com/v1"

class CloudTempleLLM(LLM):
    """
    Envoltura personalizada de LangChain para la API LLMaaS de Cloud Temple.
    Esta clase permite utilizar nuestra API como un LLM estándar en LangChain.
    """
    
    api_key: str = Field()
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
        
        # Ejecución de la solicitud POST a la API
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=60
        )
        
        response.raise_for_status()  # Lanza una excepción en caso de error HTTP
        result = response.json()
        
        # Devuelve el contenido del mensaje del asistente
        return result['choices'][0]['message']['content']

# --- Ejemplo de uso ---
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def ejemplo_langchain_wrapper():
    """Muestra el uso del wrapper LLM con una cadena LangChain."""
    
    # 1. Inicialización de nuestro LLM personalizado
    llm = CloudTempleLLM(
        api_key=API_KEY,
        model_name="granite3.3:8b"
    )
    
    # 2. Creación de un modelo de prompt para estructurar las consultas
    template = """
    Eres un experto en {dominio}. 
    Responde a esta pregunta de manera detallada y profesional :
    
    Pregunta: {pregunta}
    
    Respuesta:
    """
    prompt = PromptTemplate(
        input_variables=["dominio", "pregunta"],
        template=template
    )
    
    # 3. Creación de una cadena que combina el prompt y el LLM
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # 4. Ejecución de la cadena con variables específicas
    result = chain.run(
        dominio="ciberseguridad",
        pregunta="¿Cuáles son las mejores prácticas para proteger una API REST ?"
    )
    
    return result

# --- Inicio de la prueba ---
if __name__ == "__main__":
    if API_KEY == "votre-clé-api-ici":
        print("Por favor, configure su LLMAAS_API_KEY en sus variables de entorno.")
    else:
        reponse = ejemplo_langchain_wrapper()
        print("Respuesta del experto en ciberseguridad:\n")
        print(reponse)
```

### 2. RAG (Retrieval-Augmented Generation) con la API LLMaaS

El RAG es una técnica poderosa que permite a un LLM responder preguntas apoyándose en una base de conocimientos externa. Este tutorial lo guía a través de la creación de un pipeline RAG simple utilizando nuestra API para los embeddings y la generación, y FAISS, una biblioteca de similitud vectorial, para crear un índice en memoria.

#### El código explicado

El pipeline se descompone en varias etapas lógicas:

1.  **Configuración** : Importamos las bibliotecas necesarias y cargamos nuestra clave API desde las variables de entorno. Definimos los modelos a utilizar: `granite-embedding:278m` para la vectorización y `granite3.3:8b` para la generación.
2.  **`LLMaaSEmbeddings`** : Como en el ejemplo anterior, necesitamos un wrapper para interactuar con nuestra API de embeddings. Esta clase se encarga de transformar los fragmentos de texto (chunks) en vectores numéricos (embeddings).
3.  **`setup_rag_pipeline`** : Esta función orquesta la creación del pipeline.
    *   **Carga de documentos** : `DirectoryLoader` carga los archivos de texto de nuestra base de conocimientos.
    *   **División en chunks** : `RecursiveCharacterTextSplitter` divide los documentos en fragmentos más pequeños. Es esencial para que el modelo de embedding pueda procesar eficientemente el texto y para que la búsqueda de similitud sea precisa.
    *   **Vectorización e índice** : `FAISS.from_documents` es un paso clave. Toma los fragments de texto, utiliza nuestra clase `LLMaaSEmbeddings` para llamar a la API y obtener los vectores correspondientes, y luego almacena estos vectores en un índice FAISS en memoria.
    *   **Configuración del LLM** : Usamos `ChatOpenAI` que es nativamente compatible con nuestra API para la parte de generación de respuesta.
    *   **Creación de la cadena `RetrievalQA`** : Es la cadena de LangChain que une todos los elementos. Cuando se le hace una pregunta, ella:
        a. Usa el `retriever` (basado en nuestro índice FAISS) para encontrar los fragments de texto más relevantes.
        b. "Stuff" (inserta) estos fragments en un prompt junto con la pregunta.
        c. Envía este prompt enriquecido al LLM para generar una respuesta contextual.
4.  **Ejecución** : La función `main` simula un uso real creando archivos de conocimiento temporales, construyendo el pipeline y haciendo una pregunta.

```python
import os
import tempfile
import shutil
from pathlib import Path
from dotenv import load_dotenv
from typing import List

# --- Importaciones de LangChain ---
from langchain_core.embeddings import Embeddings
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA

# --- Configuración ---

# Carga las variables de entorno (ej: LLMAAS_API_KEY)
load_dotenv()
API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = "granite-embedding:278m"
LLM_MODEL = "granite3.3:8b"

# --- Clase de Embedding Personalizada ---
class LLMaaSEmbeddings(Embeddings):
    """Clase de embedding personalizada para la API LLMaaS de Cloud Temple."""
    def __init__(self, api_key: str, model_name: str):
        if not api_key:
            raise ValueError("La clave API LLMaaS no puede estar vacía.")
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
            print(f"Erreur HTTP lors de la génération des embeddings: {e.response.text}")
            raise
        except Exception as e:
            print(f"Une erreur inattendue est survenue lors de la génération des embeddings: {e}")
            raise

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self._embed(texts)

    def embed_query(self, text: str) -> List[float]:
        # El método _embed espera una lista, por lo tanto encapsulamos el texto único.
        return self._embed([text])[0]

# --- Pipeline RAG ---
def setup_rag_pipeline(documents_path: str):
    """Configuración completa del pipeline RAG con las herramientas LLMaaS."""
    print("1. Carga y división de los documentos...")
    loader = DirectoryLoader(documents_path, glob="*.txt", loader_cls=TextLoader, loader_kwargs={'encoding': 'utf-8'})
    documents = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    splits = text_splitter.split_documents(documents)
    print(f"   -> {len(documents)} documento(s) cargado(s) y dividido(s) en {len(splits)} chunks.")
    
    print(f"2. Creación de los embeddings mediante LLMaaS (modelo: {EMBEDDING_MODEL})...")
    embeddings = LLMaaSEmbeddings(api_key=API_KEY, model_name=EMBEDDING_MODEL)
    
    print("3. Creación del índice vectorial en memoria (FAISS)...")
    vectorstore = FAISS.from_documents(splits, embeddings)
    print("   -> Índice FAISS creado con éxito.")
    
    print(f"4. Configuración del LLM (modelo: {LLM_MODEL})...")
    # Corrección para la compatibilidad Pydantic/LangChain
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
    
    print("5. Creación de la cadena de Pregunta/Respuesta (RAG)...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(),
        return_source_documents=True
    )
    print("   -> Pipeline RAG listo.")
    return qa_chain

# --- Ejecución ---
def main():
    """Función principal para ejecutar el pipeline RAG de extremo a extremo."""
    if not API_KEY:
        print("Error: La variable de entorno LLMAAS_API_KEY no está definida.")
        return

    # Crear documentos de prueba temporales
    temp_dir = tempfile.mkdtemp()
    print(f"\nCreación de documentos de prueba en: {temp_dir}")
    try:
        documents_content = {
            "overview.txt": "Cloud Temple es un proveedor de cloud soberano francés certificado SecNumCloud.",
            "pricing.txt": "Los precios de la API LLMaaS son de 0,9€/millón de tokens de entrada y 4€/millón de tokens de salida."
        }
        for filename, content in documents_content.items():
            with open(Path(temp_dir) / filename, 'w', encoding='utf-8') as f:
                f.write(content)
        
        # Configurar y ejecutar el pipeline
        rag_chain = setup_rag_pipeline(temp_dir)
        
        print("\n--- Consulta del Pipeline RAG ---")
        question = "¿Cuál es el precio de los tokens de salida en la API LLMaaS de Cloud Temple?"
        result = rag_chain({"query": question})
        
        print(f"\nPregunta: {question}")
        print(f"Respuesta: {result['result']}")
        print("\nFuentes utilizadas para la respuesta:")
        for source in result["source_documents"]:
            print(f"- Archivo: {os.path.basename(source.metadata['source'])}")
            print(f"  Contenido: \"{source.page_content}\"")

    finally:
        # Limpiar el directorio temporal
        print(f"\nLimpieza del directorio temporal: {temp_dir}")
        shutil.rmtree(temp_dir)

if __name__ == "__main__":
    main()
```

### 3. Integración con una base de datos vectorial (Qdrant)

Para aplicaciones RAG en producción, se recomienda utilizar una base de datos vectorial dedicada como **Qdrant**. A diferencia de FAISS, que funciona en memoria, Qdrant ofrece persistencia de datos, capacidades de búsqueda avanzadas y una mejor escalabilidad.

#### El código explicado

Este tutorial adapta el pipeline RAG anterior para utilizar Qdrant.

1.  **Requisitos previos** : La primera etapa es iniciar una instancia de Qdrant. El método más sencillo es utilizar Docker.
2.  **`setup_qdrant_rag_pipeline`** :
    *   **Embeddings y Documentos** : La creación de embeddings y documentos permanece igual que en el ejemplo anterior.
    *   **Conexión a Qdrant** : En lugar de crear un índice FAISS, utilizamos `Qdrant.from_documents`. Este método de LangChain maneja varias etapas:
        a. Se conecta a su instancia de Qdrant mediante la URL proporcionada.
        b. Crea una nueva "colección" (el equivalente a una tabla en una base de datos SQL) si no existe.
        c. Llama a nuestra clase `LLMaaSEmbeddings` para vectorizar los documentos.
        d. Inserta los documentos y sus vectores en la colección de Qdrant.
    *   **`force_recreate=True`** : Para este tutorial, utilizamos este parámetro para asegurarnos de que la colección esté vacía en cada ejecución. En producción, lo pondrías en `False` para conservar tus datos.
3.  **El resto del pipeline** (configuración del LLM, creación de la cadena `RetrievalQA`) es idéntico, lo que demuestra la flexibilidad de LangChain: basta con cambiar la fuente del `retriever` (el buscador de información) para pasar de FAISS a Qdrant.

:::info Requisitos previos: Iniciar Qdrant
Para este tutorial, necesitarás una instancia de Qdrant. Puedes iniciarla fácilmente con Docker:

```bash

# 1. Descargar la última imagen de Qdrant
docker pull qdrant/qdrant

# 2. Iniciar el contenedor Qdrant
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant
```
:::

El código siguiente muestra cómo adaptar el pipeline RAG para utilizar Qdrant como base de datos vectorial.

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

# la reutilizamos aquí. Asegúrese de que esté definida en su script.)

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
    """Configura y devuelve un pipeline RAG usando Qdrant."""
    print("1. Inicialización del cliente de embedding LLMaaS...")
    embeddings = LLMaaSEmbeddings(api_key=API_KEY, model_name=EMBEDDING_MODEL)

    print("2. Preparación de los documentos...")
    documents_content = [
        "Cloud Temple es un proveedor de cloud soberano francés con la calificación SecNumCloud.",
        "Los tarifas de LLMaaS son 0.9€ para la entrada y 4€ para la salida por millón de tokens."
    ]
    documents = [Document(page_content=d) for d in documents_content]
    
    print(f"3. Conexión a Qdrant y llenado de la colección '{QDRANT_COLLECTION_NAME}'...")
    vectorstore = Qdrant.from_documents(
        documents,
        embeddings,
        url=QDRANT_URL,
        collection_name=QDRANT_COLLECTION_NAME,
        force_recreate=True, # Asegura una colección limpia para el tutorial
    )
    print("   -> Colección creada y poblada con éxito.")

    print(f"4. Configuración del LLM ({LLM_MODEL})...")
    llm = ChatOpenAI(
        api_key=API_KEY,
        base_url=BASE_URL,
        model=LLM_MODEL,
        temperature=0.3
    )

    print("5. Creación de la cadena RAG...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        return_source_documents=True
    )
    print("   -> Pipeline RAG con Qdrant listo.")
    return qa_chain

# --- Ejecución ---
def main_qdrant():
    """Función principal para ejecutar el pipeline RAG con Qdrant."""
    if not API_KEY:
        print("Error: La variable de entorno LLMAAS_API_KEY no está definida.")
        return
        
    try:
        rag_chain = setup_qdrant_rag_pipeline()
        question = "¿Cuáles son las tarifas de la API LLMaaS de Cloud Temple ?"
        
        print(f"\n--- Interrogación del pipeline ---")
        result = rag_chain({"query": question})

        print(f"\nPregunta: {question}")
        print(f"Respuesta: {result['result']}")
        print("\nFuentes utilizadas para la respuesta:")
        for source in result["source_documents"]:
            print(f"- Contenido: \"{source.page_content}\"")
            
    except Exception as e:
        print(f"\nHa ocurrido un error: {e}")
        print("Asegúrese de que el contenedor Qdrant esté en ejecución.")

if __name__ == "__main__":
    main_qdrant()
```

### 4. Agents LangChain con Herramientas

Un agente es un LLM que no se limita a responder una pregunta, sino que puede utilizar un conjunto de **herramientas** (funciones, APIs, etc.) para construir una respuesta más compleja. Puede razonar, descomponer un problema, elegir una herramienta, ejecutarla, observar el resultado y repetir este ciclo hasta obtener una respuesta final.

#### El código explicado

Este ejemplo construye un agente simple capaz de utilizar dos herramientas: una para consultar una API (simulada) de Cloud Temple y otra para realizar cálculos.

1.  **Definición de las Herramientas** : Las clases `CloudTempleAPITool` y `CalculatorTool` heredan de `BaseTool`. Cada herramienta tiene:
    *   Un `name` : un nombre simple y descriptivo.
    *   Una `description` : **crucial**, es lo que el LLM lee para decidir qué herramienta usar. Debe ser muy clara sobre lo que hace la herramienta y cuándo usarla.
    *   Un método `_run` : el código que se ejecuta realmente cuando el agente elige esta herramienta.
2.  **`create_agent_with_tools`** :
    *   **Inicialización del LLM** : Usamos nuestro wrapper `CloudTempleLLM` definido en el primer tutorial.
    *   **Lista de herramientas** : Le proporcionamos al agente la lista de herramientas que tiene permiso de usar.
    *   **Prompt del agente** : El prompt es muy específico. Se trata de un "prompt de razonamiento" que instruye al LLM sobre cómo pensar (`Thought`), elegir una acción (`Action`), proporcionar una entrada para esta acción (`Action Input`) y observar el resultado (`Observation`). Es el mecanismo central del framework ReAct (Reasoning and Acting) utilizado aquí.
    *   **Creación del agente** : `create_react_agent` reúne al LLM, las herramientas y el prompt para crear al agente.
    *   **`AgentExecutor`** : Es el motor que ejecuta al agente en bucle hasta que produce una `Final Answer`. El parámetro `verbose=True` es muy útil para ver el "diálogo interno" del agente (sus pensamientos, sus acciones, etc.).

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json
import os

# (La clase CloudTempleLLM es la misma que en el primer ejemplo)

# --- Definición de Herramientas ---

class CloudTempleAPITool(BaseTool):
    """Una herramienta que simula una llamada a una API interna para obtener información sobre los servicios."""
    name = "cloud_temple_api_checker"
    description = "Útil para obtener información sobre los servicios, productos y ofertas de Cloud Temple."

    def _run(self, query: str) -> str:
        # En un caso real, esto llamaría a una verdadera API.
        print(f"--- Herramienta CloudTempleAPITool llamada con la consulta: '{query}' ---")
        if "servicio" in query.lower():
            return "Cloud Temple ofrece los siguientes servicios: IaaS, PaaS, LLMaaS, Seguridad gestionada."
        return "Información no encontrada."

    async def _arun(self, query: str) -> str:
        # Implementación asíncrona no necesaria para este ejemplo.
        raise NotImplementedError("La herramienta API no admite ejecución asíncrona.")

class SimpleCalculatorTool(BaseTool):
    """Una herramienta simple para realizar cálculos matemáticos."""
    name = "simple_calculator"
    description = "Útil para realizar cálculos matemáticos simples. Toma una expresión válida en Python."

    def _run(self, expression: str) -> str:
        print(f"--- Herramienta SimpleCalculatorTool llamada con la expresión: '{expression}' ---")
        try:
            # ATENCIÓN: eval() es peligroso en producción. Solo para demostración.
            return str(eval(expression))
        except Exception as e:
            return f"Error de cálculo: {e}"

    async def _arun(self, expression: str) -> str:
        raise NotImplementedError("La herramienta Calculadora no admite ejecución asíncrona.")

# --- Creación del Agente ---

def create_agent():
    """Configura y devuelve un agente LangChain con las herramientas definidas."""
    print("1. Inicialización del LLM para el agente...")
    llm = CloudTempleLLM(api_key=os.getenv("LLMAAS_API_KEY", "votre-clé-api-ici"))

    tools = [CloudTempleAPITool(), SimpleCalculatorTool()]
    
    # El modelo de prompt es crucial: guía al LLM en su razonamiento.
    template = """
    Responde a las siguientes preguntas lo mejor que puedas. Tienes acceso a las siguientes herramientas:

    {tools}

    Utiliza el siguiente formato:

    Pregunta: la pregunta a la que debes responder
    Pensamiento: siempre debes reflexionar sobre lo que harás
    Acción: la acción a realizar, debe ser una de [{tool_names}]
    Entrada de la acción: la entrada de la acción
    Observación: el resultado de la acción
    ... (esta secuencia Pensamiento/Acción/Entrada de la acción/Observación puede repetirse)
    Pensamiento: Ahora conozco la respuesta final.
    Respuesta final: la respuesta final a la pregunta original

    ¡Comienza!

    Pregunta: {input}
    Pensamiento:{agent_scratchpad}
    """
    
    prompt = PromptTemplate.from_template(template)
    
    print("2. Creación del agente con el framework ReAct...")
    agent = create_react_agent(llm, tools, prompt)

    # El AgentExecutor es responsable de ejecutar los ciclos del agente.
    agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
    print("   -> Agente listo.")
    return agent_executor

# --- Ejecución ---

def run_agent():
    """Ejecuta al agente con diferentes preguntas para probar sus capacidades."""
    if os.getenv("LLMAAS_API_KEY") is None:
        print("Por favor, configure su LLMAAS_API_KEY.")
        return
        
    agent_executor = create_agent()
    
    print("\n--- Prueba 1: Pregunta que requiere una herramienta de información ---")
    question1 = "¿Cuáles son los servicios ofrecidos por Cloud Temple ?"
    response1 = agent_executor.invoke({"input": question1})
    print(f"\nRespuesta final del agente: {response1['output']}")
    
    print("\n--- Prueba 2: Pregunta que requiere un cálculo ---")
    question2 = "¿Cuál es el resultado de 125 * 8 + 50 ?"
    response2 = agent_executor.invoke({"input": question2})
    print(f"\nRespuesta final del agente: {response2['output']}")

if __name__ == "__main__":
    run_agent()
```

### 5. Integración del SDK de OpenAI

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
    """Prueba de compatibilidad con el SDK OpenAI"""
    
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
    
    # Streaming
    stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Escribe un poema sobre la IA."}
        ],
        stream=True,
        max_tokens=200
    )
    
    print("Stream:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Prueba de compatibilidad
test_openai_compatibility()
```

### 5. Integración Semantic Kernel (Microsoft)

[Semantic Kernel](https://learn.microsoft.com/fr-fr/semantic-kernel/overview/) es un SDK de código abierto de Microsoft que permite integrar LLMs en aplicaciones .NET, Python y Java. Aunque está optimizado para los servicios Azure OpenAI, su flexibilidad permite usarlo con cualquier API compatible con OpenAI, incluida la nuestra.

#### El código explicado

Este ejemplo no requiere el SDK completo de Semantic Kernel. Muestra cómo el **concepto de "función semántica"** puede implementarse con una llamada simple a nuestra API. Una función semántica es esencialmente un prompt estructurado enviado a un LLM para realizar una tarea específica.

1.  **`semantic_kernel_simple()`** : Esta función simula una "función de resumen".
2.  **Prompt estructurado** : Usamos un mensaje `system` para dar un rol al LLM ("Eres un experto en resúmenes.") y un mensaje `user` que contiene el texto a resumir. Este es el núcleo del concepto de función semántica.
3.  **Llamada directa a la API** : Una simple llamada `requests.post` a nuestro endpoint `/v1/chat/completions` es suficiente para ejecutar la función.

Este ejemplo demuestra que no siempre es necesario usar un framework pesado. Para tareas simples y bien definidas, una llamada directa a la API LLMaaS suele ser la solución más eficiente y rápida.

```python
import requests
import os
from dotenv import load_dotenv

def semantic_kernel_simulation():
    """
    Simula una "función semántica" de resumen llamando directamente a la API LLMaaS.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Por favor, defina la variable de entorno LLMAAS_API_KEY.")
        return

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    text_to_summarize = """
    La inteligencia artificial (IA) transforma muchos sectores industriales automatizando tareas, 
    optimizando procesos y permitiendo análisis predictivos avanzados. 
    Cloud Temple, con su oferta LLMaaS soberana y certificada SecNumCloud, permite a las empresas 
    integrar estas capacidades de IA garantizando la seguridad y confidencialidad de sus datos.
    """
    
    # El prompt combina una instrucción (rol sistema) y datos (rol usuario)
    payload = {
        "model": "granite3.3:8b",
        "messages": [
            {"role": "system", "content": "Eres un asistente experto en síntesis de documentos técnicos."},
            {"role": "user", "content": f"Resuma el siguiente texto en una sola frase concisa: {text_to_summarize}"}
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
        print(f"Se produjo un error de API: {e}")

if __name__ == "__main__":
    semantic_kernel_simulation()
```

### 6. Marco Haystack

[Haystack](https://haystack.deepset.ai/) es otro framework open-source potente para construir aplicaciones de búsqueda semántica, RAG y agentes. Como con Semantic Kernel, nuestra API se puede integrar directamente.

#### El código explicado

Este ejemplo simula un "pipeline" básico de Haystack para la búsqueda de respuestas en un contexto dado (Preguntas y respuestas).

1.  **`process_with_context`** : Esta función representa el núcleo de un pipeline de QA. Recibe un `contexto` (por ejemplo, un párrafo de documento) y una `pregunta`.
2.  **Prompt contextual** : El prompt está estructurado cuidadosamente para incluir tanto el contexto como la pregunta. Esta es una técnica fundamental en RAG: se proporcionan al LLM las informaciones relevantes para que pueda formular una respuesta factual.
3.  **Llamada a la API** : Una simple llamada `requests.post` a nuestra API es suficiente. El LLM recibe el contexto y la pregunta, y su tarea es sintetizar una respuesta basada *únicamente* en la información proporcionada.

Este ejemplo ilustra la flexibilidad de la API LLMaaS, que puede servir como bloque básico para la generación de texto en cualquier framework, incluso aquellos para los que no existe una integración oficial.

```python
import requests
import os
from dotenv import load_dotenv

def haystack_simulation():
    """
    Simula un pipeline de Preguntas y respuestas de tipo Haystack
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
    
    # El contexto es la información que el LLM está autorizado a utilizar.
    context = """
    Un cloud soberano es una infraestructura de computación en la nube que está completamente contenida 
    dentro de las fronteras de un país específico y sujeta a sus leyes. 
    Los principales beneficios son la garantía de la ubicación de los datos, la conformidad con 
    las regulaciones locales (como el RGPD en Europa) y una protección aumentada contra 
    el acceso por entidades extranjeras según leyes extraterritoriales como la Ley CLOUD estadounidense.
    """
    
    question = "¿Cuáles son los beneficios de un cloud soberano?"
    
    # El prompt guía al LLM para que base su respuesta en el contexto proporcionado.
    prompt = f"""
    Basándote únicamente en el siguiente contexto, responde a la pregunta.
    
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
        "temperature": 0.2 # Temperatura baja para una respuesta factual
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

### 7. Integración LlamaIndex

[LlamaIndex](https://www.llamaindex.ai/) es un framework especializado en la construcción de aplicaciones RAG. Ofrece componentes de alto nivel para la ingesta de datos, la indexación y la consulta. Nuestra API, al ser compatible con la interfaz OpenAI, se integra muy fácilmente.

#### El código explicado

Este ejemplo muestra cómo configurar LlamaIndex para utilizar la API LLMaaS para la generación de texto, al mismo tiempo que se utiliza un modelo de embedding local para la vectorización.

1.  **`setup_and_run_llamaindex`** : Esta función única orquesta todo el proceso.
    *   **Configuración del LLM** : LlamaIndex proporciona una clase `OpenAILike` que permite conectarse a cualquier API que respete el formato OpenAI. Solo hay que proporcionar nuestra `api_base` y una `api_key`. Es el método más sencillo para hacer compatible nuestro LLM.
    *   **Configuración de los Embeddings** : Para este ejemplo, utilizamos un modelo de embedding local (`HuggingFaceEmbedding`). Esto muestra la flexibilidad de LlamaIndex, que permite combinar componentes. También podría utilizarse la clase `LLMaaSEmbeddings` de los ejemplos anteriores para utilizar nuestra API de embedding.
    *   **`Settings`** : El objeto `Settings` de LlamaIndex es un medio práctico para configurar los componentes por defecto (LLM, modelo de embedding, tamaño de los chunks, etc.) que serán utilizados por los demás objetos de LlamaIndex.
    *   **Ingestión de datos** : `SimpleDirectoryReader` carga los documentos de un directorio.
    *   **Creación del índice** : `VectorStoreIndex.from_documents` es el método de alto nivel de LlamaIndex. Gestiona automáticamente la división en chunks, la vectorización de los chunks (utilizando el `embed_model` configurado en `Settings`), y la creación del índice en memoria.
    *   **Motor de consulta** : `.as_query_engine()` crea una interfaz sencilla para hacer preguntas a nuestro índice. Cuando llama a `.query()`, el motor vectoriza su pregunta, encuentra los documentos más relevantes en el índice y los envía al LLM (configurado en `Settings`) junto con la pregunta para generar una respuesta.

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
        print("Por favor, defina la variable de entorno LLMAAS_API_KEY.")
        return

    # 1. Configuración del LLM para usar la API LLMaaS a través de la interfaz OpenAILike
    print("1. Configuración del LLM para apuntar a la API LLMaaS...")
    llm = OpenAILike(
        api_key=api_key,
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True,
        # A veces es necesario agregar parámetros de contexto para ciertos modelos
        # context_window=3900, 
    )

    # 2. Configuración del modelo de embedding (local en este ejemplo para simplicidad)
    print("2. Configuración del modelo de embedding local...")
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    # 3. Aplicación de las configuraciones globales a través del objeto Settings de LlamaIndex
    Settings.llm = llm
    Settings.embed_model = embed_model
    print("   -> LLM y modelo de embedding configurados.")

    # 4. Creación de una base de conocimiento simple en un directorio temporal
    print("4. Creación y carga de una base de conocimiento temporal...")
    temp_dir = "temp_llama_data"
    os.makedirs(temp_dir, exist_ok=True)
    knowledge_file = os.path.join(temp_dir, "knowledge.txt")
    with open(knowledge_file, "w", encoding="utf-8") as f:
        f.write("La oferta LLMaaS de Cloud Temple es una solución de IA generativa soberana, "
                "completamente operada en Francia y calificada SecNumCloud por la ANSSI.")
    
    documents = SimpleDirectoryReader(temp_dir).load_data()
    print(f"   -> {len(documents)} documento(s) cargado(s).")

    # 5. Creación del índice vectorial. LlamaIndex maneja el chunking y el embedding.
    print("5. Creación del índice vectorial...")
    index = VectorStoreIndex.from_documents(documents)
    print("   -> Índice creado.")

    # 6. Creación del motor de consulta e interrogación de la base de conocimiento
    print("6. Creación del motor de consulta e interrogación...")
    query_engine = index.as_query_engine()
    question = "¿Cuáles son las garantías de soberanía de la oferta LLMaaS?"
    response = query_engine.query(question)
    
    print(f"\nPregunta: {question}")
    print(f"Respuesta: {response}")

    # Limpieza del directorio temporal
    shutil.rmtree(temp_dir)
    print(f"\nDirectorio temporal '{temp_dir}' eliminado.")

if __name__ == "__main__":
    setup_and_run_llamaindex()

## 💡 Ejemplos Avanzados

En el repositorio GitHub del producto encontrarás una colección de ejemplos de código y scripts que demuestran las diferentes funcionalidades y casos de uso de la oferta LLM as a Service (LLMaaS) de Cloud Temple:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Allí encontrarás guías prácticas para:
- __Extracción de información y análisis de texto__: Capacidad para analizar documentos y extraer datos estructurados como entidades, eventos, relaciones y atributos, basándose en ontologías específicas de dominios (ej: jurídico, RR.HH., IT).

- __Interacción conversacional y chatbots__: Desarrollo de agentes conversacionales capaces de dialogar, mantener un historial de intercambio, utilizar instrucciones del sistema (prompts sistema) e invocar herramientas externas.

- __Transcripción de audio (Speech-to-Text__: Conversión de contenido de audio a texto, incluyendo archivos voluminosos, gracias a técnicas de segmentación, normalización y procesamiento por lotes.

- __Traducción de texto__: Traducción de documentos de un idioma a otro, gestionando el contexto en múltiples segmentos para mejorar la coherencia.

- __Gestión y evaluación de modelos__: Listado de modelos de lenguaje disponibles a través de la API, consulta de sus especificaciones y ejecución de pruebas para comparar sus rendimientos.

- __Transmisión de respuestas en tiempo real__: Demostración de la capacidad para recibir y mostrar las respuestas de los modelos de forma progresiva (token por token), esencial para las aplicaciones interactivas.