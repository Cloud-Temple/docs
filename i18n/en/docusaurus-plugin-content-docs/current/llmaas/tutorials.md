---
title: Tutorials 
sidebar_position: 6
---

# Tutorials LLMaaS

## Overview

These advanced tutorials cover integration, optimization, and best practices to fully leverage LLMaaS Cloud Temple in production. Each tutorial includes tested code and real performance metrics.

## 🚀 LangChain Integrations and Frameworks

### 1. LangChain Integration

**LangChain Configuration with LLMaaS**

```python
```

# Installing dependencies

# pip install langchain openai requests

from langchain.llms.base import LLM
from langchain.schema import LLMResult, Generation
from typing import Optional, List, Any
from pydantic import Field
import requests
import json

class CloudTempleLLM(LLM):
    """LangChain wrapper for LLMaaS Cloud Temple"""
    
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

# Usage with LangChain
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

def exemple_langchain_basic():
    # Initialize Cloud Temple LLM
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Prompt template
    template = """
    Tu es un expert en {domaine}. 
    Réponds à cette question de manière détaillée et professionnelle:
    
    Question: {question}
    
    Réponse:
    """
    
    # Create the chain
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # Execution
    result = chain.run(
        domaine="cybersécurité",
        question="Quelles sont les meilleures pratiques pour sécuriser une API REST ?"
    )
    
    return result

# Integration Test
if __name__ == "__main__":
    reponse = exemple_langchain_basic()
    print(f"LangChain Response: {reponse}")

### 2. RAG (Retrieval-Augmented Generation) with LangChain

```python
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

def setup_rag_pipeline():
    """Complete RAG pipeline configuration with LLMaaS"""
    
    # 1. Loading documents
    loader = TextLoader("documents/knowledge_base.txt")
    documents = loader.load()
    
    # 2. Splitting into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    splits = text_splitter.split_documents(documents)
    
    # 3. Creating embeddings
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    
    # 4. Vector indexing
    vectorstore = FAISS.from_documents(splits, embeddings)
    
    # 5. LLM Cloud Temple
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.3  # More precise for RAG
    )
    
    # 6. RAG Chain
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
        return_source_documents=True
    )
    
    return qa_chain

def query_rag(qa_chain, question: str):
    """Querying the RAG system"""
    result = qa_chain({"query": question})
    
    print(f"Question: {question}")
    print(f"Answer: {result['result']}")
    print(f"Sources: {len(result['source_documents'])} documents")
    
    for i, doc in enumerate(result['source_documents']):
        print(f"Source {i+1}: {doc.page_content[:200]}...")
    
    return result
```

# Example usage
rag_pipeline = setup_rag_pipeline()
query_rag(rag_pipeline, "Comment configurer la sécurité d'une API ?")

### 3. LangChain Agents with Tools

```python
from langchain.agents import Tool, AgentExecutor, create_react_agent
from langchain.tools import BaseTool
from langchain.prompts import PromptTemplate
import requests
import json

class CloudTempleAPITool(BaseTool):
    """Tool to query the Cloud Temple API"""
    
    name = "cloud_temple_api"
    description = "Tool to retrieve information about Cloud Temple services"
    
    def _run(self, query: str) -> str:
        # Simulation of Cloud Temple API call
        api_url = "https://api.cloud-temple.com/v1/services"
        response = requests.get(api_url, params={"query": query})
        
        if response.status_code == 200:
            return f"Cloud Temple Information: {response.json()}"
        else:
            return "Error retrieving data"
    
    def _arun(self, query: str) -> str:
        raise NotImplementedError("Async not implemented")

class CalculatorTool(BaseTool):
    """Simple calculation tool"""
    
    name = "calculator"
    description = "Tool for performing simple mathematical calculations"
    
    def _run(self, expression: str) -> str:
        try:
            result = eval(expression)  # Note: only for demo
            return f"Result: {result}"
        except Exception as e:
            return f"Calculation error: {str(e)}"
    
    def _arun(self, expression: str) -> str:
        raise NotImplementedError("Async not implemented")

def create_agent_with_tools():
    """Creating a LangChain agent with tools"""
    
    # Cloud Temple LLM
    llm = CloudTempleLLM(
        api_key="your-api-key",
        model_name="granite3.3:8b",
        temperature=0.7
    )
    
    # Available tools
    tools = [
        CloudTempleAPITool(),
        CalculatorTool(),
    ]
    
    # Prompt template for the agent
    prompt_template = """You are an AI assistant with access to specialized tools.
    
    You have access to the following tools:
    {tools}
    
    Use the following format:
    
    Question: the input question you need to answer
    Thought: you should always think about what you need to do
    Action: the action to take, must be one of [{tool_names}]
    Action Input: the action input
    Observation: the result of the action
    ... (this Thought/Action/Action Input/Observation sequence can repeat N times)
    Thought: I now know the final answer
    Final Answer: the final answer to the original question
    
    Start!
    
    Question: {input}
    Thought: {agent_scratchpad}"""
    
    prompt = PromptTemplate(
        template=prompt_template,
        input_variables=["input", "agent_scratchpad", "tools", "tool_names"]
    )
    
    # Creating the agent
    agent = create_react_agent(llm, tools, prompt)
    
    # Agent executor
    agent_executor = AgentExecutor(
        agent=agent,
        tools=tools,
        verbose=True,
        max_iterations=3
    )
    
    return agent_executor
```

# Usage of the agent
def test_agent():
    agent = create_agent_with_tools()
    
    # Test with calculation
    result1 = agent.invoke({
        "input": "Calculate the monthly cost for 1 million tokens with LLMaaS at 4€/million"
    })
    print(f"Result 1: {result1}")
    
    # Test with information
    result2 = agent.invoke({
        "input": "What services are available at Cloud Temple?"
    })
    print(f"Result 2: {result2}")

test_agent()
```

### 4. OpenAI SDK Integration

**Transparent migration from OpenAI**

```python
from openai import OpenAI

```

# Configuration for Cloud Temple LLMaaS
def setup_cloud_temple_client():
    """OpenAI client configuration for Cloud Temple"""
    
    client = OpenAI(
        api_key="your-cloud-temple-api-key",
        base_url="https://api.ai.cloud-temple.com/v1"
    )
    
    return client

def test_openai_compatibility():
    """Test of compatibility with OpenAI SDK"""
    
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

### 5. Semantic Kernel Integration (Microsoft)

```python
import requests

def semantic_kernel_simple():
    """Version simplifiée compatible avec LLMaaS"""
    
    headers = {
        "Authorization": "Bearer your-api-key",
        "Content-Type": "application/json"
    }
    
    # Simple summary function
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
    
    print(f"Résumé: {resume}")
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
        
        Answer accurately and professionally:
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
    context = "Cloud Temple is a sovereign cloud provider in France."
    question = "What are the advantages of a sovereign cloud?"
    
    result = process_with_context(context, question)
    print(f"Haystack Answer: {result}")

haystack_simple()
```

### 7. Integration LlamaIndex

```python
```

# pip install llama-index

from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.llms.openai_like import OpenAILike
from llama_index.core import Settings
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

def setup_llamaindex():
    """Configuration LlamaIndex with Cloud Temple"""
    
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
    """Creating a knowledge base"""
    
    llm = setup_llamaindex()
    
    # Loading documents
    documents = SimpleDirectoryReader("data/").load_data()
    
    # Creating index with local embeddings
    index = VectorStoreIndex.from_documents(documents)
    
    # Query engine
    query_engine = index.as_query_engine()
    
    return query_engine

def test_llamaindex():
    """Test LlamaIndex with Cloud Temple"""
    
    query_engine = create_knowledge_base()
    
    response = query_engine.query(
        "What are the main features of Cloud Temple LLMaaS?"
    )
    
    print(f"LlamaIndex Response: {response}")

test_llamaindex()
```

## 💡 Advanced Examples

You will find in the product's GitHub repository a collection of code examples and scripts demonstrating the different features and use cases of Cloud Temple's LLM as a Service (LLMaaS) offering:

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

You will find practical guides for:
- __Information Extraction and Text Analysis:__ Ability to analyze documents to extract structured data such as entities, events, relationships, and attributes, relying on domain-specific ontologies (e.g., legal, HR, IT).

- __Conversational Interaction and Chatbots:__ Development of conversational agents capable of dialoging, maintaining exchange history, using system instructions (system prompts), and invoking external tools.

- __Audio Transcription (Speech-to-Text):__ Conversion of audio content to text, including for large files, through segmentation, normalization, and batch processing techniques.

- __Text Translation:__ Translation of documents from one language to another, managing context across multiple segments to improve consistency.

- __Model Management and Evaluation:__ Listing the available language models via the API, reviewing their specifications, and running tests to compare their performance.

- __Real-Time Response Streaming:__ Demonstration of the ability to receive and display model responses progressively (token by token), essential for interactive applications.

---