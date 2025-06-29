---
title: Tutorials 
sidebar_position: 6
---

# Tutorials LLMaaS

## Overview

These advanced tutorials cover integration, optimization, and best practices for fully leveraging LLMaaS Cloud Temple in production. Each tutorial includes tested code and real performance metrics.

## 🚀 LangChain Integrations and Frameworks

### 1. Basic Integration with LangChain

This first example shows how to integrate our LLMaaS API with the popular LangChain framework by creating a custom "wrapper". A wrapper is a class that "wraps" our API to make it compatible with LangChain's internal mechanisms.

#### The code explained

The code below defines a class `CloudTempleLLM` that inherits from the base `LLM` class of LangChain. This allows us to define custom behavior while remaining compatible with the LangChain ecosystem (chains, agents, etc.).

1.  **`CloudTempleLLM(LLM)`** : Our class inherits from `LLM`, which requires us to implement certain methods, notably `_call`.
2.  **`_call(self, prompt: str, ...)`** : This is the core of our wrapper. Every time LangChain needs to call our language model, it will invoke this method. Inside, we format a standard HTTP POST request with the correct headers (`Authorization`) and the `payload` expected by our API `/v1/chat/completions`.
3.  **`exemple_langchain_basic()`** : This demonstration function shows how to use our wrapper. We instantiate it, create a `PromptTemplate` to structure our request, and combine them in a `LLMChain`. When we run the chain (`chain.run(...)`), LangChain calls the `_call` method we defined.

This approach is useful if you want full control over how LangChain interacts with the API, but it's more verbose than using the `ChatOpenAI` client (see [API Reference](./api#langchain)).

```python


# Installing dependencies

# pip install langchain requests pydantic

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
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
    Custom LangChain wrapper for Cloud Temple's LLMaaS API.
    This class allows using our API as a standard LLM in LangChain.
    """
    
    api_key: str = Field()
    model_name: str = Field(default="granite3.3:8b")
    temperature: float = Field(default=0.7)
    max_tokens: int = Field(default=1000)
    
    @property
    def _llm_type(self) -> str:
        """Unique identifier for our LLM type."""
        return "cloud_temple_llmaas"
    
    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        """
        The main method that makes the call to the LLMaaS API.
        LangChain uses this method for each request to the model.
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
        
        response.raise_for_status()  # Raises an exception in case of HTTP error
        result = response.json()
        
        # Returns the content of the assistant's message
        return result['choices'][0]['message']['content']

# --- Example usage ---
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def example_langchain_wrapper():
    """Demonstrates the use of the LLM wrapper with a LangChain chain."""
    
    # 1. Initializing our custom LLM
    llm = CloudTempleLLM(
        api_key=API_KEY,
        model_name="granite3.3:8b"
    )
    
    # 2. Creating a prompt template to structure requests
    template = """
    You are an expert in {domaine}. 
    Answer this question in a detailed and professional manner:
    
    Question: {question}
    
    Answer:
    """
    prompt = PromptTemplate(
        input_variables=["domaine", "question"],
        template=template
    )
    
    # 3. Creating a chain that combines the prompt and LLM
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # 4. Running the chain with specific variables
    result = chain.run(
        domaine="cybersécurité",
        question="What are the best practices for securing a REST API?"
    )
    
    return result

# --- Test Launch ---
if __name__ == "__main__":
    if API_KEY == "votre-clé-api-ici":
        print("Please configure your LLMAAS_API_KEY in your environment variables.")
    else:
        reponse = exemple_langchain_wrapper()
        print("Response from the cybersecurity expert:\n")
        print(reponse)
```

### 2. RAG (Retrieval-Augmented Generation) with the LLMaaS API

RAG is a powerful technique that allows a LLM to answer questions by relying on an external knowledge base. This tutorial guides you through the creation of a simple RAG pipeline using our API for embeddings and generation, and FAISS, a vector similarity library, to create an in-memory index.

#### The code explained

The pipeline is divided into several logical steps:

1.  **Configuration** : We import the necessary libraries and load our API key from environment variables. We define the models to use: `granite-embedding:278m` for vectorization and `granite3.3:8b` for generation.
2.  **`LLMaaSEmbeddings`** : As in the previous example, we need a wrapper to interact with our embeddings API. This class is responsible for transforming text chunks into numerical vectors (embeddings).
3.  **`setup_rag_pipeline`** : This function orchestrates the creation of the pipeline.
    *   **Loading documents** : `DirectoryLoader` loads text files from our knowledge base.
    *   **Splitting into chunks** : `RecursiveCharacterTextSplitter` splits documents into smaller pieces. This is essential for the embedding model to efficiently process the text and for accurate similarity search.
    *   **Vectorization and Indexing** : `FAISS.from_documents` is a key step. It takes text chunks, uses our `LLMaaSEmbeddings` class to call the API and get the corresponding vectors, then stores these vectors in an in-memory FAISS index.
    *   **LLM configuration** : We use `ChatOpenAI` which is natively compatible with our API for the generation part.
    *   **Creating the `RetrievalQA` chain** : This is the LangChain chain that connects all elements. When asked a question, it:
        a. Uses the `retriever` (based on our FAISS index) to find the most relevant text chunks.
        b. "Stuff" (packs) these chunks into a prompt with the question.
        c. Sends this enriched prompt to the LLM to generate a contextual response.
4.  **Execution** : The `main` function simulates real-world usage by creating temporary knowledge files, building the pipeline, and asking a question.

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
    """Custom embedding class for Cloud Temple's LLMaaS API."""
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
    print("1. Loading and splitting of documents...")
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
    # Correction for Pydantic/LangChain compatibility
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
            "pricing.txt": "The LLMaaS API rates are 0.9€ per million input tokens and 4€ per million output tokens."
        }
        for filename, content in documents_content.items():
            with open(Path(temp_dir) / filename, 'w', encoding='utf-8') as f:
                f.write(content)
        
        # Configure and run the pipeline
        rag_chain = setup_rag_pipeline(temp_dir)
        
        print("\n--- Querying the RAG Pipeline ---")
        question = "What is the output token rate on Cloud Temple's LLMaaS API?"
        result = rag_chain({"query": question})
        
        print(f"\nQuestion: {question}")
        print(f"Answer: {result['result']}")
        print("\nSources used for the answer:")
        for source in result["source_documents"]:
            print(f"- File: {os.path.basename(source.metadata['source'])}")
            print(f"  Content: \"{source.page_content}\"")

    finally:
        # Clean up the temporary directory
        print(f"\nCleaning up the temporary directory: {temp_dir}")
        shutil.rmtree(temp_dir)

if __name__ == "__main__":
    main()
```

### 3. Integration with a vector database (Qdrant)

For production RAG applications, the use of a dedicated vector database such as **Qdrant** is recommended. Unlike FAISS, which works in memory, Qdrant offers data persistence, advanced search capabilities, and better scalability.

#### The code explained

This tutorial adapts the previous RAG pipeline to use Qdrant.

1.  **Prerequisites**: The first step is to launch a Qdrant instance. The easiest way is to use Docker.
2.  **`setup_qdrant_rag_pipeline`**:
    *   **Embeddings and Documents**: Creating embeddings and documents remains the same as the previous example.
    *   **Connecting to Qdrant**: Instead of creating a FAISS index, we use `Qdrant.from_documents`. This LangChain method handles several steps:
        a. It connects to your Qdrant instance via the provided URL.
        b. It creates a new "collection" (the equivalent of a table in a SQL database) if it doesn't exist.
        c. It calls our `LLMaaSEmbeddings` class to vectorize the documents.
        d. It inserts the documents and their vectors into the Qdrant collection.
    *   **`force_recreate=True`**: For this tutorial, we use this parameter to ensure the collection is empty on each execution. In production, you would set it to `False` to preserve your data.
3.  **The rest of the pipeline** (LLM configuration, creation of the `RetrievalQA` chain) is identical, demonstrating LangChain's flexibility: simply changing the `retriever` (information searcher) source from FAISS to Qdrant is sufficient.

:::info Prerequisites: Launch Qdrant
For this tutorial, you'll need a Qdrant instance. You can easily launch it with Docker:

```bash


# 1. Download the latest Qdrant image
docker pull qdrant/qdrant

# 2. Start the Qdrant Container
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant
```
:::

The code below shows how to adapt the RAG pipeline to use Qdrant as a vector database.

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


# (The LLMaaSEmbeddings class is the same as in the previous example,

# we reuse it here. Make sure it is defined in your script.)

# --- Configuration ---
load_dotenv()
API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = "granite-embedding:278m"
LLM_MODEL = "granite3.3:8b"
QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")
QDRANT_COLLECTION_NAME = "tutorial_collection"

# --- Embedding Class (reused from the previous example) ---
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
    """Configures and returns a RAG pipeline using Qdrant."""
    print("1. Initializing the LLMaaS embedding client...")
    embeddings = LLMaaSEmbeddings(api_key=API_KEY, model_name=EMBEDDING_MODEL)

    print("2. Preparing documents...")
    documents_content = [
        "Cloud Temple is a sovereign French cloud provider with the SecNumCloud qualification.",
        "LLMaaS pricing is 0.9€ for input and 4€ for output per million tokens."
    ]
    documents = [Document(page_content=d) for d in documents_content]
    
    print(f"3. Connecting to Qdrant and populating the collection '{QDRANT_COLLECTION_NAME}'...")
    vectorstore = Qdrant.from_documents(
        documents,
        embeddings,
        url=QDRANT_URL,
        collection_name=QDRANT_COLLECTION_NAME,
        force_recreate=True, # Ensures a clean collection for the tutorial
    )
    print("   -> Collection created and populated successfully.")

    print(f"4. Configuring the LLM ({LLM_MODEL})...")
    llm = ChatOpenAI(
        api_key=API_KEY,
        base_url=BASE_URL,
        model=LLM_MODEL,
        temperature=0.3
    )

    print("5. Creating the RAG chain...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vectorstore.as_retriever(),
        return_source_documents=True
    )
    print("   -> RAG pipeline with Qdrant is ready.")
    return qa_chain

# --- Execution ---
def main_qdrant():
    """Main function to run the RAG pipeline with Qdrant."""
    if not API_KEY:
        print("Error: The LLMAAS_API_KEY environment variable is not set.")
        return
        
    try:
        rag_chain = setup_qdrant_rag_pipeline()
        question = "What are the prices of Cloud Temple's LLMaaS API?"

        print(f"\n--- Querying the pipeline ---")
        result = rag_chain({"query": question})

        print(f"\nQuestion: {question}")
        print(f"Answer: {result['result']}")
        print("\nSources used for the answer:")
        for source in result["source_documents"]:
            print(f"- Content: \"{source.page_content}\"")
            
    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("Please make sure the Qdrant container is running.")

if __name__ == "__main__":
    main_qdrant()
```

### 4. LangChain Agents with Tools

An agent is a LLM that doesn't just answer a question, but can use a set of **tools** (functions, APIs, etc.) to build a more complex answer. It can reason, break down a problem, choose a tool, execute it, observe the result, and repeat this cycle until it reaches a final answer.

#### The code explained

This example builds a simple agent capable of using two tools: one to query a (simulated) Cloud Temple API and another to perform calculations.

1.  **Tool Definitions**: The classes `CloudTempleAPITool` and `CalculatorTool` inherit from `BaseTool`. Each tool has:
    *   A `name`: a simple and descriptive name.
    *   A `description`: **crucial**, this is what the LLM reads to decide which tool to use. It must be very clear about what the tool does and when to use it.
    *   A `_run` method: the code that is actually executed when the agent chooses this tool.
2.  **`create_agent_with_tools`**:
    *   **LLM Initialization**: We use our wrapper `CloudTempleLLM` defined in the first tutorial.
    *   **Tools list**: We provide the agent with the list of tools it is allowed to use.
    *   **Agent prompt**: The prompt is very specific. It is a "reasoning prompt" that instructs the LLM on how to think (`Thought`), choose an action (`Action`), provide input for this action (`Action Input`), and observe the result (`Observation`). This is the central mechanism of the ReAct framework (Reasoning and Acting) used here.
    *   **Agent creation**: `create_react_agent` assembles the LLM, tools, and prompt to create the agent.
    *   **`AgentExecutor`**: This is the engine that runs the agent in a loop until it produces a `Final Answer`. The `verbose=True` parameter is very useful to see the agent's "inner dialogue" (its thoughts, actions, etc.).

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json
import os

# (The class CloudTempleLLM is the same as in the first example)

# --- Tool Definitions ---

class CloudTempleAPITool(BaseTool):
    """A tool that simulates a call to an internal API to get information about services."""
    name = "cloud_temple_api_checker"
    description = "Useful for getting information about services, products, and offers from Cloud Temple."

    def _run(self, query: str) -> str:
        # In a real case, this would call a real API.
        print(f"--- CloudTempleAPITool tool called with the query: '{query}' ---")
        if "service" in query.lower():
            return "Cloud Temple offers the following services: IaaS, PaaS, LLMaaS, Managed Security."
        return "Information not found."

    async def _arun(self, query: str) -> str:
        # Asynchronous implementation is not necessary for this example.
        raise NotImplementedError("The API tool does not support asynchronous execution.")

class SimpleCalculatorTool(BaseTool):
    """A simple tool for performing mathematical calculations."""
    name = "simple_calculator"
    description = "Useful for performing simple mathematical calculations. Takes a valid Python expression."

    def _run(self, expression: str) -> str:
        print(f"--- SimpleCalculatorTool called with the expression: '{expression}' ---")
        try:
            # WARNING: eval() is dangerous in production. This is only for demo.
            return str(eval(expression))
        except Exception as e:
            return f"Calculation error: {e}"

    async def _arun(self, expression: str) -> str:
        raise NotImplementedError("The Calculator tool does not support asynchronous execution.")

# --- Creation of the Agent ---

def create_agent():
    """Configures and returns a LangChain agent with the defined tools."""
    print("1. Initializing the LLM for the agent...")
    llm = CloudTempleLLM(api_key=os.getenv("LLMAAS_API_KEY", "your-api-key-here"))

    tools = [CloudTempleAPITool(), SimpleCalculatorTool()]
    
    # The prompt template is crucial: it guides the LLM in its reasoning.
    template = """
    Answer the following questions as best as you can. You have access to the following tools:

    {tools}

    Use the following format:

    Question: the question you need to answer
    Thought: you must always think about what you will do
    Action: the action to take, must be one of [{tool_names}]
    Action Input: the action input
    Observation: the result of the action
    ... (this Thought/Action/Action Input/Observation sequence can repeat)
    Thought: I now know the final answer.
    Final Answer: the final answer to the original question

    Start!

    Question: {input}
    Thought:{agent_scratchpad}
    """
    
    prompt = PromptTemplate.from_template(template)
    
    print("2. Creating the agent with the ReAct framework...")
    agent = create_react_agent(llm, tools, prompt)

    # The AgentExecutor is responsible for executing the agent's cycles.
    agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
    print("   -> Agent ready.")
    return agent_executor

# --- Execution ---

def run_agent():
    """Executes the agent with different questions to test its capabilities."""
    if os.getenv("LLMAAS_API_KEY") is None:
        print("Please set up your LLMAAS_API_KEY.")
        return
        
    agent_executor = create_agent()
    
    print("\n--- Test 1: Question requiring an information tool ---")
    question1 = "What services does Cloud Temple offer?"
    response1 = agent_executor.invoke({"input": question1})
    print(f"\nFinal agent response: {response1['output']}")
    
    print("\n--- Test 2: Question requiring a calculation ---")
    question2 = "What is the result of 125 * 8 + 50?"
    response2 = agent_executor.invoke({"input": question2})
    print(f"\nFinal agent response: {response2['output']}")

if __name__ == "__main__":
    run_agent()
```

### 5. OpenAI SDK Integration

**Transparent migration from OpenAI**

```python
from openai import OpenAI

# Configuration for Cloud Temple LLMaaS
def setup_cloud_temple_client():
    """Client configuration for OpenAI Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Compatibility test with OpenAI SDK"""
    
    client = setup_cloud_temple_client()
    
    # Standard chat completion
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "system", "content": "You are a professional AI assistant."},
            {"role": "user", "content": "Explain the cloud-native architecture."}
        ],
        max_tokens=300,
        temperature=0.7
    )
    
    print(f"Response: {response.choices[0].message.content}")
    
    # Streaming
    stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[
            {"role": "user", "content": "Write a poem about AI."}
        ],
        stream=True,
        max_tokens=200
    )
    
    print("Stream:")
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")
    print()

# Compatibility Test
test_openai_compatibility()
```

### 5. Semantic Kernel Integration (Microsoft)

[Semantic Kernel](https://learn.microsoft.com/fr-fr/semantic-kernel/overview/) is an open-source SDK from Microsoft that allows integrating Large Language Models (LLMs) into .NET, Python, and Java applications. Although it is optimized for Azure OpenAI services, its flexibility allows it to be used with any compatible OpenAI API, including ours.

#### The code explained

This example does not require the full Semantic Kernel SDK. It demonstrates how the **"semantic function"** concept can be implemented with a simple call to our API. A semantic function is essentially a structured prompt sent to an LLM to accomplish a specific task.

1.  **`semantic_kernel_simple()`** : This function simulates a "summary function".
2.  **Structured Prompt** : We use a `system` message to give a role to the LLM ("You are an expert in summarizing.") and a `user` message containing the text to summarize. This is the core of the semantic function concept.
3.  **Direct API Call** : A simple `requests.post` call to our endpoint `/v1/chat/completions` is sufficient to execute the function.

This example shows that it is not always necessary to use a heavy framework. For simple and well-defined tasks, a direct call to the LLMaaS API is often the most efficient and performant solution.

```python
import requests
import os
from dotenv import load_dotenv

def semantic_kernel_simulation():
    """
    Simulates a "semantic function" for summarization by directly calling the LLMaaS API.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Please set the LLMAAS_API_KEY environment variable.")
        return

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    text_to_summarize = """
    Artificial intelligence (AI) is transforming many industrial sectors by automating tasks, 
    optimizing processes, and enabling advanced predictive analytics. 
    Cloud Temple, with its sovereign and SecNumCloud certified LLMaaS offering, allows companies 
    to integrate these AI capabilities while ensuring the security and confidentiality of their data.
    """
    
    # The prompt combines an instruction (system role) and data (user role)
    payload = {
        "model": "granite3.3:8b",
        "messages": [
            {"role": "system", "content": "You are an expert assistant for technical document synthesis."},
            {"role": "user", "content": f"Summarize the following text in one concise sentence: {text_to_summarize}"}
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
        
        print("Original text:\n", text_to_summarize)
        print("\nGenerated summary:\n", summary)
        return summary
        
    except requests.exceptions.RequestException as e:
        print(f"An API error occurred: {e}")

if __name__ == "__main__":
    semantic_kernel_simulation()
```

### 6. Haystack Framework

[Haystack](https://haystack.deepset.ai/) is another powerful open-source framework for building semantic search, RAG, and agent applications. Like Semantic Kernel, our API can be integrated directly.

#### The Code Explained

This example simulates a basic "pipeline" Haystack for question answering within a given context (Question Answering).

1.  **`process_with_context`** : This function represents the core of a QA pipeline. It takes a `context` (for example, a paragraph of a document) and a `question`.
2.  **Contextual Prompt** : The prompt is carefully structured to include both the context and the question. This is a fundamental technique in RAG: providing the LLM with relevant information so it can formulate a factual answer.
3.  **API Call** : Again, a simple `requests.post` call to our API is sufficient. The LLM receives the context and the question, and its task is to synthesize a response based *only* on the provided information.

This example demonstrates the flexibility of the LLMaaS API, which can serve as a foundational block for text generation in any framework, even those without official integration.

```python
import requests
import os
from dotenv import load_dotenv

def haystack_simulation():
    """
    Simulates a Haystack-type Question-Answering pipeline
    using a direct call to the LLMaaS API.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Please set the LLMAAS_API_KEY environment variable.")
        return

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    # The context is the information the LLM is allowed to use.
    context = """
    A sovereign cloud is a cloud computing infrastructure that is entirely contained 
    within the borders of a specific country and subject to its laws. 
    The main advantages are the guarantee of data residency, compliance with 
    local regulations (such as the GDPR in Europe), and increased protection against 
    access by foreign entities under extraterritorial laws such as the US CLOUD Act.
    """
    
    question = "What are the advantages of a sovereign cloud?"
    
    # The prompt guides the LLM to base its answer on the provided context.
    prompt = f"""
    Based solely on the following context, answer the question.
    
    Context:
    ---
    {context}
    ---
    
    Question: {question}
    """
    
    payload = {
        "model": "granite3.3:8b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 200,
        "temperature": 0.2 # Low temperature for factual responses
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
        print("\nGenerated Answer:\n", answer)
        return answer
        
    except requests.exceptions.RequestException as e:
        print(f"An API error occurred: {e}")

if __name__ == "__main__":
    haystack_simulation()
```

### 7. Integration LlamaIndex

[LlamaIndex](https://www.llamaindex.ai/) is a specialized framework for building RAG applications. It offers high-level components for data ingestion, indexing, and querying. Our API, being compatible with the OpenAI interface, integrates very easily.

#### The code explained

This example shows how to configure LlamaIndex to use the LLMaaS API for text generation, while using a local embedding model for vectorization.

1.  **`setup_and_run_llamaindex`** : This single function orchestrates the entire process.
    *   **LLM configuration** : LlamaIndex provides a `OpenAILike` class that allows connecting to any API adhering to the OpenAI format. Just provide your `api_base` and an `api_key`. This is the simplest way to make our LLM compatible.
    *   **Embeddings configuration** : For this example, we use a local embedding model (`HuggingFaceEmbedding`). This demonstrates the flexibility of LlamaIndex, which allows mixing components. You could just as easily use the `LLMaaSEmbeddings` class from previous examples to use our embedding API.
    *   **`Settings`** : The `Settings` object of LlamaIndex is a convenient way to configure default components (LLM, embedding model, chunk size, etc.) that will be used by other LlamaIndex objects.
    *   **Data ingestion** : `SimpleDirectoryReader` loads documents from a directory.
    *   **Index creation** : `VectorStoreIndex.from_documents` is the high-level method of LlamaIndex. It automatically handles chunking, vectorization of chunks (using the `embed_model` configured in `Settings`), and creation of the in-memory index.
    *   **Query engine** : `.as_query_engine()` creates a simple interface to ask questions to our index. When you call `.query()`, the engine vectorizes your question, finds the most relevant documents in the index, and sends them to the LLM (configured in `Settings`) along with the question to generate a response.

```python

# Dependencies:

# pip install llama-index llama-index-llms-openai-like llama-index-embeddings-huggingface

import os
from dotenv import load_dotenv
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.llms.openai_like import OpenAILike
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
import shutil

def setup_and_run_llamaindex():
    """
    Configures and runs a simple RAG pipeline with LlamaIndex and the LLMaaS API.
    """
    load_dotenv()
    api_key = os.getenv("LLMAAS_API_KEY")
    if not api_key:
        print("Please set the LLMAAS_API_KEY environment variable.")
        return

    # 1. Configuration of the LLM to point to the LLMaaS API via the OpenAILike interface
    print("1. Configuring the LLM to point to the LLMaaS API...")
    llm = OpenAILike(
        api_key=api_key,
        api_base="https://api.ai.cloud-temple.com/v1",
        model="granite3.3:8b",
        is_chat_model=True,
        # Sometimes it's necessary to add context parameters for certain models
        # context_window=3900, 
    )

    # 2. Configuration of the local embedding model (simplified for demonstration)
    print("2. Configuring the local embedding model...")
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    # 3. Applying global configurations via the LlamaIndex Settings object
    Settings.llm = llm
    Settings.embed_model = embed_model
    print("   -> LLM and embedding model configured.")

    # 4. Creating a simple knowledge base in a temporary directory
    print("4. Creating and loading a temporary knowledge base...")
    temp_dir = "temp_llama_data"
    os.makedirs(temp_dir, exist_ok=True)
    knowledge_file = os.path.join(temp_dir, "knowledge.txt")
    with open(knowledge_file, "w", encoding="utf-8") as f:
        f.write("Cloud Temple's LLMaaS offering is a sovereign generative AI solution, fully operated in France and certified SecNumCloud by ANSSI.")
    
    documents = SimpleDirectoryReader(temp_dir).load_data()
    print(f"   -> {len(documents)} document(s) loaded.")

    # 5. Creating the vector index. LlamaIndex handles chunking and embedding.
    print("5. Creating the vector index...")
    index = VectorStoreIndex.from_documents(documents)
    print("   -> Index created.")

    # 6. Creating the query engine and querying the knowledge base
    print("6. Creating the query engine and querying...")
    query_engine = index.as_query_engine()
    question = "What are the sovereignty guarantees of the LLMaaS offering?"
    response = query_engine.query(question)
    
    print(f"\nQuestion: {question}")
    print(f"Answer: {response}")

    # Cleaning up the temporary directory
    shutil.rmtree(temp_dir)
    print(f"\nTemporary directory '{temp_dir}' deleted.")

if __name__ == "__main__":
    setup_and_run_llamaindex()
```

## 💡 Advanced Examples

You will find in the product's GitHub directory a collection of code examples and scripts demonstrating the different features and use cases of Cloud Temple's LLM as a Service (LLMaaS) offering:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

You will find practical guides for:
- __Information Extraction and Text Analysis :__ Ability to analyze documents to extract structured data such as entities, events, relationships, and attributes, based on domain-specific ontologies (e.g., legal, HR, IT).

- __Conversational Interaction and Chatbots :__ Development of conversational agents capable of dialoguing, maintaining exchange history, using system instructions (system prompts), and invoking external tools.

- __Audio Transcription (Speech-to-Text) :__ Conversion of audio content to text, including for large files, through splitting techniques, normalization, and batch processing.

- __Text Translation :__ Translation of documents from one language to another, managing context across multiple segments to improve consistency.

- __Model Management and Evaluation :__ Listing of available language models via the API, consulting their specifications, and running tests to compare their performance.

- __Real-Time Response Streaming :__ Demonstration of the ability to receive and display model responses progressively (token by token), essential for interactive applications.