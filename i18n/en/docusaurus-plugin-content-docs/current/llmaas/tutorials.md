---
title: Tutorials
sidebar_position: 6
---

# LLMaaS Tutorials

:::info[Choose models before running the examples]
The identifiers used illustrate the integrations. Check their availability with `GET /v1/models`, their capabilities, and their [lifecycle](https://llmaas.status.cloud-temple.app/lifecycle). Adapt the configuration to your use case; an older name may be redirected to a successor.
:::

## Overview

These tutorials present integration examples with LLMaaS. The scope of the LangChain example validations is detailed below; the demonstration results and data do not constitute service performance metrics.

## 🚀 LangChain Integrations and Frameworks

### LangChain Prerequisites

LangChain examples 1 to 4 and those in the [API reference](./api.md#langchain) were verified on September 7, 2026 with Python 3.13.15 and the following versions. Install them in a dedicated environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install \
  langchain-classic==1.0.8 langchain-core==1.6.2 langchain-openai==1.6.0 \
  langchain-community==0.4.2 langchain-text-splitters==1.1.2 \
  langchain-qdrant==1.1.0 qdrant-client==1.19.0 faiss-cpu==1.15.0 \
  pydantic==2.13.5 python-dotenv==1.2.3 requests==2.34.2 httpx==0.28.1
```

These versions establish a reference environment; re-evaluate the examples before updating the dependencies.

The legacy chains `LLMChain`, `RetrievalQA`, and the ReAct agent in these tutorials use `langchain-classic`, in accordance with the [LangChain migration guide](https://docs.langchain.com/oss/python/migrate/langchain-v1). This choice preserves the structure of the existing examples; some classes emit deprecation warnings. For a new project, consult the current interfaces recommended by LangChain.

**Verifications performed:** loading examples, wrapper invocation, search and generation with in-memory FAISS and Qdrant, tool execution by the agent, chat and embeddings from the API reference. LLMaaS HTTP responses were simulated and network access was blocked. These verifications do not validate production models nor the connection to a remote Qdrant server.

### 1. Basic Integration with LangChain

This first example shows how to integrate our LLMaaS API with the popular LangChain framework by creating a custom "wrapper". A wrapper is a class that "wraps" our API to make it compatible with LangChain's internal mechanisms.

#### The Code Explained

The code below defines a `CloudTempleLLM` class that inherits from LangChain's base `LLM` class. This allows us to define custom behavior while remaining compatible with the LangChain ecosystem (chains, agents, etc.).

1. **`CloudTempleLLM(LLM)`** : Our class inherits from `LLM`, which requires us to implement certain methods, notably `_call`.
2. **`_call(self, prompt: str, ...)`** : This is the core of our wrapper. Whenever LangChain needs to call our language model, it will invoke this method. Inside, we format a standard HTTP POST request with the correct headers (`Authorization`) and the `payload` expected by our `/v1/chat/completions` API.
3. **`exemple_langchain_wrapper()`** : This demonstration function shows how to use our wrapper. We instantiate it, create a `PromptTemplate` to structure our request, and combine them into an `LLMChain`. When we execute the chain (`chain.invoke(...)`), LangChain calls the `_call` method we defined behind the scenes.

This approach is useful if you want full control over how LangChain interacts with the API, but it is more verbose than using the `ChatOpenAI` client (voir [API Reference](./api#langchain)).

```python
# Installing dependencies
# See the validated versions in the LangChain prerequisites above.

from langchain_core.language_models.llms import LLM
from typing import Optional, List, Any
from pydantic import Field
import requests
import json
import os

# --- Configuration ---
# It is recommended to store your API key in an environment variable
API_KEY = os.getenv("LLMAAS_API_KEY", "votre-clé-api-ici")
BASE_URL = "https://api.ai.cloud-temple.com/v1"

class CloudTempleLLM(LLM):
    """
    Wrapper LangChain personnalisé pour l'API LLMaaS de Cloud Temple.
    Cette classe permet d'utiliser notre API comme un LLM standard dans LangChain.
    """
    
    api_key: str = Field(default="")
    model_name: str = Field(default="gpt-oss:120b")
    temperature: float = Field(default=0.7)
    max_tokens: int = Field(default=1000)
    
    @property
    def _llm_type(self) -> str:
        """Identifiant unique pour notre type de LLM."""
        return "cloud_temple_llmaas"
    
    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        """
        La méthode principale qui effectue l'appel à l'API LLMaaS.
        LangChain utilise cette méthode pour chaque requête au modèle.
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
        
        # Executing the POST request to the API
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=60
        )
        
        response.raise_for_status()  # Raises an exception in case of an HTTP error
        result = response.json()
        
        # Returns the assistant message content
        return result['choices'][0]['message']['content']

# --- Usage Example ---
from langchain_classic.chains import LLMChain
from langchain_core.prompts import PromptTemplate

def exemple_langchain_wrapper():
    """Démontre l'utilisation du wrapper LLM avec une chaîne LangChain."""
    
    # 1. Initializing our custom LLM
    llm = CloudTempleLLM(
        api_key=API_KEY,
        model_name="gpt-oss:120b"
    )
    
    # 2. Creating a prompt template to structure requests
    template = """
    Tu es un expert en {domaine}. 
    Réponds à cette question de manière détaillée et professionnelle :
    
    Question: {question}
    
    Réponse:
    """
    prompt = PromptTemplate(
        input_variables=["domaine", "question"],
        template=template
    )
    
    # 3. Creating a chain that combines the prompt and the LLM
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # 4. Executing the chain with specific variables
    result = chain.invoke({
        "domaine": "cybersécurité",
        "question": "Quelles sont les meilleures pratiques pour sécuriser une API REST ?"
    })
    
    return result["text"]

# --- Running the test ---
if __name__ == "__main__":
    if API_KEY == "votre-clé-api-ici":
        print("Veuillez configurer votre LLMAAS_API_KEY dans vos variables d'environnement.")
    else:
        reponse = exemple_langchain_wrapper()
        print("Réponse de l'expert en cybersécurité :\n")
        print(reponse)
```

### 2. RAG (Retrieval-Augmented Generation) with the LLMaaS API

RAG is a powerful technique that enables an LLM to answer questions by leveraging an external knowledge base. This tutorial guides you through building a simple RAG pipeline using our API for embeddings and generation, and FAISS, a vector similarity library, to create an in-memory index.

#### The code explained

The pipeline breaks down into several logical steps:

1. **Configuration**: We import the necessary libraries and load our API key from environment variables. We define the models to use: `granite-embedding:278m` for vectorization and `gpt-oss:120b` for generation.
2. **`OpenAIEmbeddings`**: The standard client sends texts to LLMaaS with `check_embedding_ctx_length=False` and requests numerical vectors with `encoding_format="float"`. Document chunking is performed before the call; see the [réglages embeddings](./api.md#using-embeddings).
3. **`setup_rag_pipeline`**: This function orchestrates the pipeline creation.
    * **Document loading**: `DirectoryLoader` loads the text files from our knowledge base.
    * **Chunking**: `RecursiveCharacterTextSplitter` splits the documents into smaller pieces. This is essential for the embedding model to process the text efficiently and for similarity search to be accurate.
    * **Vectorization and Indexing**: `FAISS.from_documents` is a key step. It takes the text chunks, uses the `OpenAIEmbeddings` client to call the API and retrieve the corresponding vectors, then stores these vectors in an in-memory FAISS index.
    * **LLM Configuration**: We use `ChatOpenAI`, which is natively compatible with our API for the response generation part.
    * **Creating the `RetrievalQA` chain**: This is the LangChain chain that ties all elements together. When asked a question, it:
        a. Uses the `retriever` (based on our FAISS index) to find the most relevant text chunks.
        b. "Stuffs" (inserts) these chunks into a prompt along with the question.
        c. Sends this enriched prompt to the LLM to generate a contextual response.
4. **Execution**: The `main` function simulates real-world usage by creating temporary knowledge files, building the pipeline, and asking a question.

```python
import os
import tempfile
import shutil
from pathlib import Path
from dotenv import load_dotenv

# --- LangChain Imports ---
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_classic.chains import RetrievalQA

# --- Configuration ---
# Loads environment variables (e.g., LLMAAS_API_KEY)
load_dotenv()
API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = "granite-embedding:278m"
LLM_MODEL = "gpt-oss:120b"

# --- RAG Pipeline ---
def setup_rag_pipeline(documents_path: str):
    """Configuration complète du pipeline RAG avec les outils LLMaaS."""
    print("1. Chargement et division des documents...")
    loader = DirectoryLoader(documents_path, glob="*.txt", loader_cls=TextLoader, loader_kwargs={'encoding': 'utf-8'})
    documents = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    splits = text_splitter.split_documents(documents)
    print(f"   -> {len(documents)} document(s) chargé(s) et divisé(s) en {len(splits)} chunks.")
    
    print(f"2. Création des embeddings via LLMaaS (modèle: {EMBEDDING_MODEL})...")
    embeddings = OpenAIEmbeddings(
        api_key=API_KEY,
        base_url=BASE_URL,
        model=EMBEDDING_MODEL,
        check_embedding_ctx_length=False,
        model_kwargs={"encoding_format": "float"},
    )
    
    print("3. Création de l'index vectoriel en mémoire (FAISS)...")
    vectorstore = FAISS.from_documents(splits, embeddings)
    print("   -> Index FAISS créé avec succès.")
    
    print(f"4. Configuration du LLM (modèle: {LLM_MODEL})...")
    llm = ChatOpenAI(
        api_key=API_KEY,
        base_url=BASE_URL,
        model=LLM_MODEL,
        temperature=0.3,
        max_tokens=300
    )
    
    print("5. Création de la chaîne de Question/Réponse (RAG)...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(),
        return_source_documents=True
    )
    print("   -> Pipeline RAG prêt.")
    return qa_chain

# --- Execution ---
def main():
    """Fonction principale pour exécuter le pipeline RAG de bout en bout."""
    if not API_KEY:
        print("Erreur: La variable d'environnement LLMAAS_API_KEY n'est pas définie.")
        return

    # Create temporary test documents
    temp_dir = tempfile.mkdtemp()
    print(f"\nCréation de documents de test dans: {temp_dir}")
    try:
        documents_content = {
            "overview.txt": "Cloud Temple est un fournisseur de cloud souverain français qualifié SecNumCloud.",
            "pricing.txt": "Les tarifs de l'API LLMaaS sont de 1.9€/million de tokens en entrée et 8€/million en sortie."
        }
        for filename, content in documents_content.items():
            with open(Path(temp_dir) / filename, 'w', encoding='utf-8') as f:
                f.write(content)
        
        # Configure and run the pipeline
        rag_chain = setup_rag_pipeline(temp_dir)
        
        print("\n--- Interrogation du Pipeline RAG ---")
        question = "Quel est le tarif des tokens en sortie sur l'API LLMaaS de Cloud Temple ?"
        result = rag_chain.invoke({"query": question})
        
        print(f"\nQuestion: {question}")
        print(f"Réponse: {result['result']}")
        print("\nSources utilisées pour la réponse:")
        for source in result["source_documents"]:
            print(f"- Fichier: {os.path.basename(source.metadata['source'])}")
            print(f"  Contenu: \"{source.page_content}\"")

    finally:
        # Clean up the temporary directory
        print(f"\nNettoyage du répertoire temporaire: {temp_dir}")
        shutil.rmtree(temp_dir)

if __name__ == "__main__":
    main()
```

### 3. Integration with a Vector Database (Qdrant)

For production RAG applications, using a dedicated vector database like **Qdrant** is recommended. Unlike FAISS, which operates in-memory, Qdrant provides data persistence, advanced search capabilities, and better scalability.

#### The code explained

This tutorial adapts the previous RAG pipeline to use Qdrant.

1. **Prerequisites** : The first step is to launch a Qdrant instance. The easiest way is to use Docker.
2. **`setup_qdrant_rag_pipeline`** :
    * **Embeddings and Documents** : Creating embeddings and documents remains identical to the previous example.
    * **Connecting to Qdrant** : Instead of creating a FAISS index, we use `QdrantVectorStore.from_documents`. This LangChain method handles several steps :
        a. It connects to your Qdrant instance via the provided URL.
        b. It creates a new "collection" (the equivalent of a table in a SQL database) if it does not exist.
        c. It calls the `OpenAIEmbeddings` client to vectorize the documents.
        d. It inserts the documents and their vectors into the Qdrant collection.
    * **`force_recreate=True`** : For this tutorial, we use this parameter to ensure the collection is empty on each run. In production, you would set it to `False` to preserve your data.
3. **The rest of the pipeline** (LLM configuration, creating the `RetrievalQA` chain) is identical, which demonstrates LangChain's flexibility: you only need to change the `retriever` source (the information seeker) to switch from FAISS to Qdrant.

:::info[Prerequisites: Launch Qdrant]
For this tutorial, you will need a Qdrant instance. You can easily launch it with Docker :

```bash
# 1. Télécharger la dernière image de Qdrant
docker pull qdrant/qdrant

# 2. Démarrer le conteneur Qdrant
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant
```
:::

The code below shows how to adapt the RAG pipeline to use Qdrant as a vector database. The demonstration documents are short; for your own documents, apply prior chunking as in the FAISS tutorial.

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_classic.chains import RetrievalQA
from langchain_qdrant import QdrantVectorStore
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

# --- Configuration ---
load_dotenv()
API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = "granite-embedding:278m"
LLM_MODEL = "gpt-oss:120b"
QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
QDRANT_COLLECTION_NAME = "tutorial_collection"

def setup_qdrant_rag_pipeline():
    """Configure et retourne un pipeline RAG utilisant Qdrant."""
    print("1. Initialisation du client d'embedding LLMaaS...")
    embeddings = OpenAIEmbeddings(
        api_key=API_KEY,
        base_url=BASE_URL,
        model=EMBEDDING_MODEL,
        check_embedding_ctx_length=False,
        model_kwargs={"encoding_format": "float"},
    )

    print("2. Préparation des documents...")
    documents_content = [
        "Cloud Temple est un fournisseur de cloud souverain français avec la qualification SecNumCloud.",
        "Les tarifs LLMaaS sont de 1.9€ pour l'input et 8€ pour l'output par million de tokens."
    ]
    documents = [Document(page_content=d) for d in documents_content]
    
    print(f"3. Connexion à Qdrant et peuplement de la collection '{QDRANT_COLLECTION_NAME}'...")
    vectorstore = QdrantVectorStore.from_documents(
        documents,
        embeddings,
        url=QDRANT_URL,
        collection_name=QDRANT_COLLECTION_NAME,
        force_recreate=True, # Ensures a clean collection for the tutorial
    )
    print("   -> Collection créée et peuplée avec succès.")

    print(f"4. Configuration du LLM ({LLM_MODEL})...")
    llm = ChatOpenAI(
        api_key=API_KEY,
        base_url=BASE_URL,
        model=LLM_MODEL,
        temperature=0.3
    )

    print("5. Création de la chaîne RAG...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        return_source_documents=True
    )
    print("   -> Pipeline RAG avec Qdrant prêt.")
    return qa_chain

# --- Execution ---
def main_qdrant():
    """Fonction principale pour exécuter le pipeline RAG avec Qdrant."""
    if not API_KEY:
        print("Erreur: La variable d'environnement LLMAAS_API_KEY n'est pas définie.")
        return
        
    try:
        rag_chain = setup_qdrant_rag_pipeline()
        question = "Quels sont les tarifs de l'API LLMaaS de Cloud Temple ?"
        
        print(f"\n--- Interrogation du pipeline ---")
        result = rag_chain.invoke({"query": question})

        print(f"\nQuestion: {question}")
        print(f"Réponse: {result['result']}")
        print("\nSources utilisées pour la réponse:")
        for source in result["source_documents"]:
            print(f"- Contenu: \"{source.page_content}\"")
            
    except Exception as e:
        print(f"\nUne erreur est survenue: {e}")
        print("Veuillez vous assurer que le conteneur Qdrant est bien en cours d'exécution.")

if __name__ == "__main__":
    main_qdrant()
```

### 4. LangChain Agents with Tools

An agent is an LLM that does not merely answer a question, but can use a set of **tools** (functions, APIs, etc.) to construct a more complex response. It can reason, break down a problem, select a tool, execute it, observe the result, and repeat this cycle until a final answer is obtained.

#### The code explained

This example builds a simple agent capable of using two tools: one to query a (simulated) Cloud Temple API and another to perform calculations.

1. **Tool Definition** : The `CloudTempleAPITool` and `SimpleCalculatorTool` classes inherit from `BaseTool`. Each tool has :
    * A `name` : a simple and descriptive name.
    * A `description` : **crucial**, this is what the LLM reads to decide which tool to use. It must be very clear about what the tool does and when to use it.
    * A `_run` method : the code that is actually executed when the agent chooses this tool.
2. **`create_agent_with_tools`** :
    * **LLM Initialization** : We use our `CloudTempleLLM` wrapper defined in the first tutorial.
    * **Tool List** : We provide the agent with the list of tools it is allowed to use.
    * **Agent Prompt** : The prompt is very specific. It is a "reasoning prompt" that instructs the LLM on how to think (`Thought`), choose an action (`Action`), provide input to that action (`Action Input`), and observe the result (`Observation`). This is the central mechanism of the ReAct (Reasoning and Acting) framework used here.
    * **Agent Creation** : `create_react_agent` assembles the LLM, the tools, and the prompt to create the agent.
    * **`AgentExecutor`** : This is the engine that runs the agent in a loop until it produces a `Final Answer`. The `verbose=True` parameter is very useful for seeing the agent's "inner dialogue" (its thoughts, actions, etc.).

```python
from langchain_classic.agents import AgentExecutor, create_react_agent
from langchain_core.tools import BaseTool
from langchain_core.prompts import PromptTemplate
import requests
import json
import os

# (The CloudTempleLLM class is the same as in the first example)

# --- Tool Definition ---

class CloudTempleAPITool(BaseTool):
    """Un outil qui simule un appel à une API interne pour obtenir des informations sur les services."""
    name: str = "cloud_temple_api_checker"
    description: str = "Utile pour obtenir des informations sur les services, produits et offres de Cloud Temple."

    def _run(self, query: str) -> str:
        # In a real case, this would call a real API.
        print(f"--- Outil CloudTempleAPITool appelé avec la requête: '{query}' ---")
        if "service" in query.lower():
            return "Cloud Temple propose les services suivants : IaaS, PaaS, LLMaaS, Sécurité Managée."
        return "Information non trouvée."

    async def _arun(self, query: str) -> str:
        # Asynchronous implementation not necessary for this example.
        raise NotImplementedError("L'outil API ne supporte pas l'exécution asynchrone.")

class SimpleCalculatorTool(BaseTool):
    """Un outil simple pour effectuer des calculs mathématiques."""
    name: str = "simple_calculator"
    description: str = (
        "Effectue une opération entre deux nombres, séparés par des espaces : "
        "par exemple '125 * 8'. Opérateurs autorisés : +, -, *, /. "
        "Pour un calcul composé, appeler l'outil plusieurs fois."
    )

    def _run(self, expression: str) -> str:
        import math
        import operator

        operations = {
            "+": operator.add,
            "-": operator.sub,
            "*": operator.mul,
            "/": operator.truediv,
        }
        try:
            if len(expression) > 100:
                raise ValueError("Entrée trop longue.")
            left, symbol, right = expression.split()
            if symbol not in operations:
                raise ValueError("Opérateur autorisé : +, -, * ou /.")
            left, right = float(left), float(right)
            if not (math.isfinite(left) and math.isfinite(right)):
                raise ValueError("Les nombres doivent être finis.")
            result = operations[symbol](left, right)
            if not math.isfinite(result):
                raise ValueError("Résultat hors limites.")
            return str(result)
        except (ValueError, OverflowError, ZeroDivisionError) as e:
            return f"Erreur de calcul: {e}"

    async def _arun(self, expression: str) -> str:
        raise NotImplementedError("L'outil Calculatrice ne supporte pas l'exécution asynchrone.")

# --- Agent Creation ---

def create_agent():
    """Configure et retourne un agent LangChain avec les outils définis."""
    print("1. Initialisation du LLM pour l'agent...")
    llm = CloudTempleLLM(api_key=os.getenv("LLMAAS_API_KEY", "votre-clé-api-ici"))

    tools = [CloudTempleAPITool(), SimpleCalculatorTool()]
    
    # The prompt template is crucial: it guides the LLM in its reasoning.
    template = """
    Réponds aux questions suivantes du mieux que tu peux. Tu as accès aux outils suivants :

    {tools}

    Utilise le format suivant :

    Question: la question à laquelle tu dois répondre
    Thought: tu dois toujours réfléchir à ce que tu vas faire
    Action: l'action à prendre, doit être l'un de [{tool_names}]
    Action Input: l'entrée de l'action
    Observation: le résultat de l'action
    ... (cette séquence Thought/Action/Action Input/Observation peut se répéter)
    Thought: Je connais maintenant la réponse finale.
    Final Answer: la réponse finale à la question d'origine

    Commence !

    Question: {input}
    Thought:{agent_scratchpad}
    """
    
    prompt = PromptTemplate.from_template(template)
    
    print("2. Création de l'agent avec le framework ReAct...")
    agent = create_react_agent(llm, tools, prompt)

    # The AgentExecutor is responsible for executing the agent's cycles.
    agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
    print("   -> Agent prêt.")
    return agent_executor

# --- Execution ---

def run_agent():
    """Exécute l'agent avec différentes questions pour tester ses capacités."""
    if os.getenv("LLMAAS_API_KEY") is None:
        print("Veuillez configurer votre LLMAAS_API_KEY.")
        return
        
    agent_executor = create_agent()
    
    print("\n--- Test 1 : Question nécessitant un outil d'information ---")
    question1 = "Quels sont les services offerts par Cloud Temple ?"
    response1 = agent_executor.invoke({"input": question1})
    print(f"\nRéponse finale de l'agent: {response1['output']}")
    
    print("\n--- Test 2 : Question nécessitant un calcul ---")
    question2 = "Quel est le résultat de 125 * 8 + 50 ?"
    response2 = agent_executor.invoke({"input": question2})
    print(f"\nRéponse finale de l'agent: {response2['output']}")

if __name__ == "__main__":
    run_agent()
```

### 5. OpenAI SDK Integration

**OpenAI SDK Configuration for LLMaaS**

This example uses the calls supported by LLMaaS. To adapt an existing application, refer to the [documented differences](./api.md#openai-compatibility).

```python
from openai import OpenAI

# Configuration for Cloud Temple LLMaaS
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
    
    # Standard chat completion
    response = client.chat.completions.create(
        model="gpt-oss:120b",
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
        model="gpt-oss:120b",
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

# Compatibility test
test_openai_compatibility()
```

### 5. Semantic Kernel Integration (Microsoft)

[Semantic Kernel](https://learn.microsoft.com/fr-fr/semantic-kernel/overview/) is an open-source SDK from Microsoft that allows integrating LLMs into .NET, Python, and Java applications. Although it is optimized for Azure OpenAI services, its flexibility allows it to be used with any OpenAI-compatible API, including ours.

#### The code explained

This example does not require the full Semantic Kernel SDK. It demonstrates how the **"semantic function" concept** can be implemented with a simple call to our API. A semantic function is essentially a structured prompt sent to an LLM to perform a specific task.

1. **`semantic_kernel_simple()`** : This function simulates a "summarization function".
2. **Structured Prompt** : We use a `system` message to assign a role to the LLM ("You are a summarization expert.") and a `user` message containing the text to summarize. This is the core of the semantic function concept.
3. **Direct API Call** : A simple `requests.post` call to our `/v1/chat/completions` endpoint is sufficient to execute the function.

This example illustrates that it is not always necessary to use a heavy framework. For simple and well-defined tasks, a direct call to the LLMaaS API is often the most efficient and high-performance solution.

```python
import requests
import os
from dotenv import load_dotenv

def semantic_kernel_simulation():
    """
    Simule une "fonction sémantique" de résumé en appelant directement l'API LLMaaS.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Veuillez définir la variable d'environnement LLMAAS_API_KEY.")
        return

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    text_to_summarize = """
    L'intelligence artificielle (IA) transforme de nombreux secteurs industriels en automatisant les tâches, 
    en optimisant les processus et en permettant des analyses prédictives avancées. 
    Cloud Temple, avec son offre LLMaaS souveraine et certifiée SecNumCloud, permet aux entreprises 
    d'intégrer ces capacités d'IA tout en garantissant la sécurité et la confidentialité de leurs données.
    """
    
    # The prompt combines an instruction (system role) and data (user role)
    payload = {
        "model": "gpt-oss:120b",
        "messages": [
            {"role": "system", "content": "Tu es un assistant expert en synthèse de documents techniques."},
            {"role": "user", "content": f"Résume le texte suivant en une seule phrase concise: {text_to_summarize}"}
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
        
        print("Texte original:\n", text_to_summarize)
        print("\nRésumé généré:\n", summary)
        return summary
        
    except requests.exceptions.RequestException as e:
        print(f"Une erreur d'API est survenue: {e}")

if __name__ == "__main__":
    semantic_kernel_simulation()
```

### 6. Haystack Framework

[Haystack](https://haystack.deepset.ai/) is another powerful open-source framework for building semantic search, RAG, and agent applications. As with Semantic Kernel, our API can be integrated directly.

#### The code explained

This example simulates a basic Haystack "pipeline" for answer retrieval in a given context (Question Answering).

1. **`process_with_context`** : This function represents the core of a QA pipeline. It takes a `context` (e.g., a document paragraph) and a `question`.
2. **Contextual Prompt** : The prompt is carefully structured to include both the context and the question. This is a fundamental technique in RAG: we provide the LLM with relevant information so it can formulate a factual answer.
3. **API Call** : Once again, a simple `requests.post` call to our API is sufficient. The LLM receives the context and the question, and its task is to synthesize an answer based *only* on the provided information.

This example illustrates the flexibility of the LLMaaS API, which can serve as a building block for text generation in any framework, even those without an official integration.

```python
import requests
import os
from dotenv import load_dotenv

def haystack_simulation():
    """
    Simule un pipeline de Question-Answering de type Haystack
    en utilisant un appel direct à l'API LLMaaS.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Veuillez définir la variable d'environnement LLMAAS_API_KEY.")
        return

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # The context is the information the LLM is allowed to use.
    context = """
    Un cloud souverain est une infrastructure de cloud computing qui est entièrement contenue 
    dans les frontières d'un pays spécifique et soumise à ses lois. 
    Les principaux avantages sont la garantie de la résidence des données, la conformité avec 
    les réglementations locales (comme le RGPD en Europe), et une protection accrue contre 
    l'accès par des entités étrangères en vertu de lois extraterritoriales comme le CLOUD Act américain.
    """
    
    question = "Quels sont les avantages d'un cloud souverain ?"
    
    # The prompt guides the LLM to base its answer on the provided context.
    prompt = f"""
    En te basant uniquement sur le contexte suivant, réponds à la question.
    
    Contexte:
    ---
    {context}
    ---
    
    Question: {question}
    """
    
    payload = {
        "model": "gpt-oss:120b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 200,
        "temperature": 0.2 # Température basse pour une réponse factuelle
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
        
        print(f"Question: {question}")
        print("\nRéponse générée:\n", answer)
        return answer
        
    except requests.exceptions.RequestException as e:
        print(f"Une erreur d'API est survenue: {e}")

if __name__ == "__main__":
    haystack_simulation()
```

### 7. LlamaIndex Integration

[LlamaIndex](https://www.llamaindex.ai/) is a framework specialized in building RAG applications. It offers high-level components for data ingestion, indexing, and querying. Our API, being compatible with the OpenAI interface, integrates very easily.

#### The code explained

This example shows how to configure LlamaIndex to use the LLMaaS API for text generation, while using a local embedding model for vectorization.

1. **`setup_and_run_llamaindex`** : This single function orchestrates the entire process.
    * **LLM Configuration** : LlamaIndex provides an `OpenAILike` class that allows connecting to any API compliant with the OpenAI format. You just need to provide it with our `api_base` and an `api_key`. This is the simplest method to make our LLM compatible.
    * **Embedding Configuration** : For this example, we use a local embedding model (`HuggingFaceEmbedding`). This demonstrates the flexibility of LlamaIndex, which allows mixing components.
    * **`Settings`** : The `Settings` object in LlamaIndex is a convenient way to configure default components (LLM, embedding model, chunk size, etc.) that will be used by other LlamaIndex objects.
    * **Data Ingestion** : `SimpleDirectoryReader` loads documents from a directory.
    * **Index Creation** : `VectorStoreIndex.from_documents` is LlamaIndex's high-level method. It automatically handles chunking, vectorizing the chunks (using the `embed_model` configured in `Settings`), and creating the index in memory.
    * **Query Engine** : `.as_query_engine()` creates a simple interface to ask questions to our index. When you call `.query()`, the engine vectorizes your question, finds the most relevant documents in the index, and sends them to the LLM (configured in `Settings`) along with the question to generate a response.

```python
# Dependencies:
# pip install llama-index llama-index-llms-openai-like llama-index-embeddings-huggingface

import os
from dotenv import load_dotenv
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.llms.openai_like import OpenAILike
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from tempfile import TemporaryDirectory

def setup_and_run_llamaindex():
    """
    Configure et exécute un pipeline RAG simple avec LlamaIndex et l'API LLMaaS.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Veuillez définir la variable d'environnement LLMAAS_API_KEY.")
        return

    # 1. LLM Configuration to use the LLMaaS API via the OpenAILike interface
    print("1. Configuration du LLM pour pointer vers l'API LLMaaS...")
    llm = OpenAILike(
        api_key=api_key,
        api_base="https://api.ai.cloud-temple.com/v1",
        model="gpt-oss:120b",
        is_chat_model=True,
        # It is sometimes necessary to add context parameters for certain models
        # context_window=3900, 
    )

    # 2. Embedding model configuration (local in this example for simplicity)
    print("2. Configuration du modèle d'embedding local...")
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    # 3. Applying global configurations via the LlamaIndex Settings object
    Settings.llm = llm
    Settings.embed_model = embed_model
    print("   -> LLM et modèle d'embedding configurés.")

    # 4. Creating a simple knowledge base in a temporary directory
    print("4. Création et chargement d'une base de connaissances temporaire...")
    with TemporaryDirectory(prefix="llmaas_llamaindex_") as temp_dir:
        knowledge_file = os.path.join(temp_dir, "knowledge.txt")
        with open(knowledge_file, "w", encoding="utf-8") as f:
            f.write("L'offre LLMaaS de Cloud Temple est une solution d'IA générative souveraine, "
                    "entièrement opérée en France et qualifiée SecNumCloud par l'ANSSI.")

        documents = SimpleDirectoryReader(temp_dir).load_data()
        print(f"   -> {len(documents)} document(s) chargé(s).")
    # The documents are in memory; the temporary directory is deleted,
    # even if writing or loading fails.

    # 5. Creating the vector index. LlamaIndex handles chunking and embedding.
    print("5. Création de l'index vectoriel...")
    index = VectorStoreIndex.from_documents(documents)
    print("   -> Index créé.")

    # 6. Creating the query engine and querying the knowledge base
    print("6. Création du moteur de requête et interrogation...")
    query_engine = index.as_query_engine()
    question = "Quelles sont les garanties de souveraineté de l'offre LLMaaS ?"
    response = query_engine.query(question)
    
    print(f"\nQuestion: {question}")
    print(f"Réponse: {response}")


if __name__ == "__main__":
    setup_and_run_llamaindex()
```

### 8. Configuring the CLINE Extension for VSCode

This tutorial guides you through configuring the CLINE extension in Visual Studio Code to use Cloud Temple's language models directly from your editor.

#### Configuration Steps

1. **Open CLINE settings** : In VSCode, open the CLINE extension settings.
2. **Create a new model** : Add a new model configuration.
3. **Fill in the fields** : Configure the fields as follows, based on the image below.

    ![Configuration de CLINE pour LLMaaS](@site/docs/llmaas/images/cline_configuration.png)

    * **API Provider**: Select `OpenAI Compatible`.
    * **Base URL**: Enter the Cloud Temple LLMaaS API endpoint: `https://api.ai.cloud-temple.com/v1`.
    * **OpenAI Compatible API Key**: Paste the API key you generated from the Cloud Temple console.
    
    :::tip[Génération de la clé API]
    To generate your API key, go to the Cloud Temple console, **LLMaaS** > **API Keys** section, then click on **"Create an API key"**.
    
    ![Création d'une clé API depuis la console](@site/docs/llmaas/images/console_create_api_key.png)
    :::
    
    * **Model ID**: Specify the model you want to use, for example `qwen3.6:35b`. You can find the list of available models in the [Modèles](./models.md) section.
    * **Model Configuration**:
        * **Supports Images**: Check this box if the model supports images.
        * **Supports browser use**: Check this box.
        * **Context Window Size**: Specify the model's context window size (e.g., `128000`).
        * **Max Output Tokens**: Leave at `-1` for an unlimited output by default.
        * **Temperature**: Set the temperature according to your needs (e.g., `0`).

You can now select a model in CLINE and use it to generate code, answer questions, etc.

---

## 💡 Advanced Examples

You will find in the GitHub repository below a collection of code examples and scripts demonstrating the various features and use cases of Cloud Temple's LLM as a Service (LLMaaS) offering:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

You will find practical guides for:
- __Information Extraction and Text Analysis:__ Ability to analyze documents to extract structured data such as entities, events, relationships, and attributes, leveraging domain-specific ontologies (e.g., legal, HR, IT).

- __Conversational Interaction and Chatbots:__ Development of conversational agents capable of dialogue, maintaining conversation history, using system instructions (system prompts), and invoking external tools.

- __Audio Transcription (Speech-to-Text):__ Conversion of audio content to text, including for large files, using chunking, normalization, and batch processing techniques.

- __Text Translation:__ Translation of documents from one language to another, managing context across multiple segments to improve consistency.

- __Model Management and Evaluation:__ Listing available language models via the API, reviewing their specifications, and running tests to compare their performance.

- __Real-Time Response Streaming:__ Demonstration of the ability to receive and display model responses progressively (token by token), essential for interactive applications.
- __RAG Pipeline with In-Memory Knowledge Base:__ Educational RAG demonstrator to illustrate how Retrieval-Augmented Generation works. Uses the LLMaaS API for embedding and generation, with in-memory vector storage (FAISS) for a clear understanding of the process.
- __RAG Pipeline with Vector Database (Qdrant):__ Complete and containerized RAG demonstrator using Qdrant as the vector database. The LLMaaS API is used for document embedding and augmented response generation.
- __OCR & Document Analysis (DeepSeek-OCR):__ Comprehensive guide and demonstration tool for converting images and PDFs into structured Markdown, extracting tables, and transcribing mathematical formulas. See the [dedicated documentation](./ocr).