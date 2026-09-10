---
title: Tutoriali 
sidebar_position: 6
---

# Tutoriali LLMaaS

:::info[Scegliere i modelli prima di eseguire gli esempi]
Gli identificatori utilizzati illustrano le integrazioni. Verificare la loro disponibilità con `GET /v1/models`, le relative capacità e il [ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle). Adattare la configurazione al proprio utilizzo; un nome precedente può essere reindirizzato verso un successore.
:::

## Panoramica

Questi tutorial presentano esempi di integrazione con LLMaaS. L'ambito delle verifiche relative agli esempi LangChain è specificato di seguito; i risultati e i dati dimostrativi non costituiscono misure delle prestazioni del servizio.

## 🚀 Integrazioni LangChain e Framework

### Prerequisiti LangChain

Gli esempi LangChain da 1 a 4 e quelli del [riferimento API](./api.md#langchain) sono stati verificati il 7 settembre 2026 con Python 3.13.15 e le seguenti versioni. Installateli in un ambiente dedicato:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install \
  langchain-classic==1.0.8 langchain-core==1.6.2 langchain-openai==1.6.0 \
  langchain-community==0.4.2 langchain-text-splitters==1.1.2 \
  langchain-qdrant==1.1.0 qdrant-client==1.19.0 faiss-cpu==1.15.0 \
  pydantic==2.13.5 python-dotenv==1.2.3 requests==2.34.2 httpx==0.28.1
```

Queste versioni definiscono un ambiente di riferimento; rivalutate gli esempi prima di aggiornare le dipendenze.

Le catene legacy `LLMChain`, `RetrievalQA` e l’agente ReAct di questi tutorial utilizzano `langchain-classic`, in conformità con la [guida di migrazione LangChain](https://docs.langchain.com/oss/python/migrate/langchain-v1). Questa scelta conserva la struttura degli esempi esistenti; alcune classi emettono avvisi di deprecazione. Per un nuovo progetto, consultate le interfacce attuali raccomandate da LangChain.

**Verifiche effettuate:** caricamento degli esempi, invocazione del wrapper, ricerca e generazione con FAISS e Qdrant in memoria, esecuzione di uno strumento da parte dell’agente, chat e embedding del riferimento API. Le risposte HTTP LLMaaS sono state simulate e gli accessi di rete bloccati. Queste verifiche non validano né i modelli in produzione né la connessione a un server Qdrant remoto.

### 1. Integrazione di base con LangChain

Questo primo esempio mostra come integrare la nostra API LLMaaS con il popolare framework LangChain creando un "wrapper" personalizzato. Un wrapper è una classe che "avvolge" la nostra API per renderla compatibile con i meccanismi interni di LangChain.

#### Il codice spiegato

Il codice seguente definisce una classe `CloudTempleLLM` che eredita dalla classe base `LLM` di LangChain. Questo ci permette di definire un comportamento su misura rimanendo comunque compatibile con l'ecosistema LangChain (catene, agenti, ecc.).

1. **`CloudTempleLLM(LLM)`** : La nostra classe eredita da `LLM`, il che ci obbliga a implementare alcuni metodi, in particolare `_call`.
2. **`_call(self, prompt: str, ...)`** : È il cuore del nostro wrapper. Ogni volta che LangChain avrà bisogno di invocare il nostro modello linguistico, chiamerà questo metodo. All'interno, formattiamo una richiesta HTTP POST standard con le intestazioni corrette (`Authorization`) e il `payload` atteso dalla nostra API `/v1/chat/completions`.
3. **`exemple_langchain_wrapper()`** : Questa funzione di dimostrazione mostra come utilizzare il nostro wrapper. Lo istanziamo, creiamo un `PromptTemplate` per strutturare la nostra richiesta e li combiniamo in un `LLMChain`. Quando si esegue la catena (`chain.invoke(...)`), LangChain chiama dietro le quinte il metodo `_call` che abbiamo definito.

Questo approccio è utile se si desidera un controllo totale sul modo in cui LangChain interagisce con l'API, ma è più verboso rispetto all'utilizzo del client `ChatOpenAI` (vedi [API Reference](./api#langchain)).

```python
# Installazione delle dipendenze
# Vedere le versioni validate nei prerequisiti LangChain sopra.

from langchain_core.language_models.llms import LLM
from typing import Optional, List, Any
from pydantic import Field
import requests
import json
import os

# --- Configurazione ---
# Si consiglia di memorizzare la chiave API in una variabile d'ambiente
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
        
        # Esecuzione della richiesta POST verso l'API
        response = requests.post(
            f"{BASE_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=60
        )
        
        response.raise_for_status()  # Solleva un'eccezione in caso di errore HTTP
        result = response.json()
        
        # Restituisce il contenuto del messaggio dell'assistente
        return result['choices'][0]['message']['content']

# --- Esempio di utilizzo ---
from langchain_classic.chains import LLMChain
from langchain_core.prompts import PromptTemplate

def exemple_langchain_wrapper():
    """Démontre l'utilisation du wrapper LLM avec une chaîne LangChain."""
    
    # 1. Inizializzazione del nostro LLM personalizzato
    llm = CloudTempleLLM(
        api_key=API_KEY,
        model_name="gpt-oss:120b"
    )
    
    # 2. Creazione di un template di prompt per strutturare le richieste
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
    
    # 3. Creazione di una catena che combina il prompt e il LLM
    chain = LLMChain(llm=llm, prompt=prompt)
    
    # 4. Esecuzione della catena con variabili specifiche
    result = chain.invoke({
        "domaine": "cybersécurité",
        "question": "Quelles sont les meilleures pratiques pour sécuriser une API REST ?"
    })
    
    return result["text"]

# --- Avvio del test ---
if __name__ == "__main__":
    if API_KEY == "votre-clé-api-ici":
        print("Veuillez configurer votre LLMAAS_API_KEY dans vos variables d'environnement.")
    else:
        reponse = exemple_langchain_wrapper()
        print("Réponse de l'expert en cybersécurité :\n")
        print(reponse)
```

### 2. RAG (Retrieval-Augmented Generation) con l'API LLMaaS

Il RAG è una tecnica potente che consente a un LLM di rispondere a domande basandosi su una base di conoscenza esterna. Questo tutorial vi guida attraverso la creazione di un pipeline RAG semplice utilizzando la nostra API per gli embedding e la generazione, e FAISS, una libreria di similarità vettoriale, per creare un indice in memoria.

#### Il codice spiegato

Il pipeline si scompone in diverse fasi logiche :

1. **Configurazione** : Importiamo le librerie necessarie e carichiamo la nostra chiave API dalle variabili d'ambiente. Definiamo i modelli da utilizzare : `granite-embedding:278m` per la vettorizzazione e `gpt-oss:120b` per la generazione.
2. **`OpenAIEmbeddings`** : Il client standard invia i testi a LLMaaS con `check_embedding_ctx_length=False` e richiede vettori numerici con `encoding_format="float"`. La suddivisione dei documenti viene eseguita prima della chiamata ; consulta le [réglages embeddings](./api.md#utilizzo-degli-embeddings).
3. **`setup_rag_pipeline`** : Questa funzione orchestra la creazione del pipeline.
    * **Caricamento dei documenti** : `DirectoryLoader` carica i file di testo dalla nostra knowledge base.
    * **Divisione in chunk** : `RecursiveCharacterTextSplitter` suddivide i documenti in parti più piccole. È essenziale affinché il modello di embedding possa elaborare il testo in modo efficiente e affinché la ricerca di similarità sia precisa.
    * **Vettorizzazione e Indicizzazione** : `FAISS.from_documents` è un passaggio chiave. Prende i chunk di testo, utilizza il client `OpenAIEmbeddings` per chiamare l'API e ottenere i vettori corrispondenti, quindi memorizza questi vettori in un indice FAISS in memoria.
    * **Configurazione del LLM** : Utilizziamo `ChatOpenAI`, che è nativamente compatibile con la nostra API per la parte di generazione della risposta.
    * **Creazione della catena `RetrievalQA`** : È la catena LangChain che collega tutti gli elementi. Quando le viene posta una domanda, essa :
        a. Utilizza il `retriever` (basato sul nostro indice FAISS) per trovare i chunk di testo più pertinenti.
        b. "Stuff" (inserisce) questi chunk in un prompt con la domanda.
        c. Invia questo prompt arricchito al LLM per generare una risposta contestuale.
4. **Esecuzione** : La funzione `main` simula un utilizzo reale creando file di conoscenza temporanei, costruendo il pipeline e ponendo una domanda.

```python
import os
import tempfile
import shutil
from pathlib import Path
from dotenv import load_dotenv

# --- Import LangChain ---
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_classic.chains import RetrievalQA

# --- Configurazione ---
# Carica le variabili d'ambiente (ex: LLMAAS_API_KEY)
load_dotenv()
API_KEY = os.getenv("LLMAAS_API_KEY")
BASE_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
EMBEDDING_MODEL = "granite-embedding:278m"
LLM_MODEL = "gpt-oss:120b"

# --- Pipeline RAG ---
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

# --- Esecuzione ---
def main():
    """Fonction principale pour exécuter le pipeline RAG de bout en bout."""
    if not API_KEY:
        print("Erreur: La variable d'environnement LLMAAS_API_KEY n'est pas définie.")
        return

    # Crea documenti di test temporanei
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
        
        # Configura ed esegue il pipeline
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
        # Pulisce la directory temporanea
        print(f"\nNettoyage du répertoire temporaire: {temp_dir}")
        shutil.rmtree(temp_dir)

if __name__ == "__main__":
    main()
```

### 3. Integrazione con un database vettoriale (Qdrant)

Per applicazioni RAG in produzione, l'utilizzo di un database vettoriale dedicato come **Qdrant** è consigliato. A differenza di FAISS che funziona in memoria, Qdrant offre la persistenza dei dati, capacità di ricerca avanzate e una migliore scalabilità.

#### Il codice spiegato

Questo tutorial adatta il pipeline RAG precedente per utilizzare Qdrant.

1. **Prerequisiti** : Il primo passo è avviare un'istanza di Qdrant. Il modo più semplice è utilizzare Docker.
2. **`setup_qdrant_rag_pipeline`** :
    * **Embeddings e Documenti** : La creazione degli embeddings e dei documenti rimane identica all'esempio precedente.
    * **Connessione a Qdrant** : Invece di creare un indice FAISS, utilizziamo `QdrantVectorStore.from_documents`. Questo metodo di LangChain gestisce più passaggi :
        a. Si connette alla tua istanza Qdrant tramite l'URL fornito.
        b. Crea una nuova "collection" (l'équivalent d'une table dans une base de données SQL) se non esiste già.
        c. Chiama il client `OpenAIEmbeddings` per vettorizzare i documenti.
        d. Inserisce i documenti e i loro vettori nella collection Qdrant.
    * **`force_recreate=True`** : Per questo tutorial, utilizziamo questo parametro per assicurarci che la collection sia vuota ad ogni esecuzione. In produzione, lo impostereste su `False` per conservare i vostri dati.
3. **Il resto del pipeline** (configuration du LLM, création de la chaîne `RetrievalQA`) est identique, ce qui démontre la flexibilité de LangChain : il suffit de changer la source du `retriever` (le chercheur d'informations) pour passer de FAISS à Qdrant.

:::info[Prérequis : Lancer Qdrant]
Per questo tutorial, avrete bisogno di un'istanza Qdrant. Potete avviarla facilmente con Docker :

```bash
# 1. Scaricare l'ultima immagine di Qdrant
docker pull qdrant/qdrant

# 2. Avviare il contenitore Qdrant
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant
```
:::

Il codice sottostante mostra come adattare il pipeline RAG per utilizzare Qdrant come database vettoriale. I documenti di dimostrazione sono brevi; per i vostri documenti, applicate una suddivisione preliminare come nel tutorial FAISS.

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_classic.chains import RetrievalQA
from langchain_qdrant import QdrantVectorStore
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

# --- Configurazione ---
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
        force_recreate=True, # Garantisce una collection pulita per il tutorial
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

# --- Esecuzione ---
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

### 4. Agenti LangChain con Strumenti

Un agente è un LLM che non si limita a rispondere a una domanda, ma che può utilizzare un insieme di **strumenti** (fonctions, API, etc.) per costruire una risposta più complessa. Può ragionare, scomporre un problema, scegliere uno strumento, eseguirlo, osservare il risultato e ripetere questo ciclo fino a ottenere una risposta finale.

#### Il codice spiegato

Questo esempio costruisce un agente semplice in grado di utilizzare due strumenti: uno per interrogare un'API (simulata) di Cloud Temple e un altro per eseguire calcoli.

1. **Definizione degli Strumenti** : Le classi `CloudTempleAPITool` e `SimpleCalculatorTool` ereditano da `BaseTool`. Ogni strumento ha :
    * Un `name` : un nome semplice e descrittivo.
    * Una `description` : **cruciale**, è ciò che il LLM legge per decidere quale strumento utilizzare. Deve essere molto chiara su cosa fa lo strumento e quando utilizzarlo.
    * Un metodo `_run` : il codice che viene effettivamente eseguito quando l'agente sceglie questo strumento.
2. **`create_agent_with_tools`** :
    * **Inizializzazione del LLM** : Utilizziamo il nostro wrapper `CloudTempleLLM` definito nel primo tutorial.
    * **Elenco degli strumenti** : Forniamo all'agente l'elenco degli strumenti che ha il diritto di utilizzare.
    * **Prompt dell'agente** : Il prompt è molto specifico. Si tratta di un "prompt di ragionamento" che istruisce il LLM su come pensare (`Thought`), scegliere un'azione (`Action`), fornire un input a questa azione (`Action Input`) e osservare il risultato (`Observation`). È il meccanismo centrale del framework ReAct (Reasoning and Acting) utilizzato qui.
    * **Creazione dell'agente** : `create_react_agent` assembla il LLM, gli strumenti e il prompt per creare l'agente.
    * **`AgentExecutor`** : È il motore che fa girare l'agente in un ciclo fino a quando non produce una `Final Answer`. Il parametro `verbose=True` è molto utile per vedere il "dialogo interiore" dell'agente (i suoi pensieri, le sue azioni, ecc.).

```python
from langchain_classic.agents import AgentExecutor, create_react_agent
from langchain_core.tools import BaseTool
from langchain_core.prompts import PromptTemplate
import requests
import json
import os

# (La classe CloudTempleLLM è la stessa del primo esempio)

# --- Definizione degli Strumenti ---

class CloudTempleAPITool(BaseTool):
    """Un outil qui simule un appel à une API interne pour obtenir des informations sur les services."""
    name: str = "cloud_temple_api_checker"
    description: str = "Utile pour obtenir des informations sur les services, produits et offres de Cloud Temple."

    def _run(self, query: str) -> str:
        # In un caso reale, questo chiamerebbe una vera API.
        print(f"--- Outil CloudTempleAPITool appelé avec la requête: '{query}' ---")
        if "service" in query.lower():
            return "Cloud Temple propose les services suivants : IaaS, PaaS, LLMaaS, Sécurité Managée."
        return "Information non trouvée."

    async def _arun(self, query: str) -> str:
        # Implementazione asincrona non necessaria per questo esempio.
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

# --- Creazione dell'Agente ---

def create_agent():
    """Configure et retourne un agent LangChain avec les outils définis."""
    print("1. Initialisation du LLM pour l'agent...")
    llm = CloudTempleLLM(api_key=os.getenv("LLMAAS_API_KEY", "votre-clé-api-ici"))

    tools = [CloudTempleAPITool(), SimpleCalculatorTool()]
    
    # Il template del prompt è cruciale: guida il LLM nel suo ragionamento.
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

    # L'AgentExecutor è responsabile dell'esecuzione dei cicli dell'agente.
    agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
    print("   -> Agent prêt.")
    return agent_executor

# --- Esecuzione ---

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

### 5. Integrazione SDK OpenAI

**Configurazione del SDK OpenAI per LLMaaS**

Questo esempio utilizza le chiamate supportate da LLMaaS. Per adattare un'applicazione esistente, consulta le [différences documentées](./api.md#compatibilità-openai).

```python
from openai import OpenAI

# Configurazione per Cloud Temple LLMaaS
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
    
    # Chat completion standard
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

# Test di compatibilità
test_openai_compatibility()
```

### 5. Integrazione Semantic Kernel (Microsoft)

[Semantic Kernel](https://learn.microsoft.com/fr-fr/semantic-kernel/overview/) è un SDK open-source di Microsoft che consente di integrare LLM in applicazioni .NET, Python e Java. Sebbene sia ottimizzato per i servizi Azure OpenAI, la sua flessibilità consente di utilizzarlo con qualsiasi API compatibile con OpenAI, inclusa la nostra.

#### Il codice spiegato

Questo esempio non richiede il SDK Semantic Kernel completo. Dimostra come il **concetto di "funzione semantica"** possa essere implementato tramite una semplice chiamata alla nostra API. Una funzione semantica è essenzialmente un prompt strutturato inviato a un LLM per svolgere un compito specifico.

1. **`semantic_kernel_simple()`** : Questa funzione simula una "funzione di riepilogo".
2. **Prompt Strutturato** : Utilizziamo un messaggio `system` per assegnare un ruolo al LLM ("Sei un esperto di riepilogo.") e un messaggio `user` contenente il testo da riassumere. Questo è il cuore del concetto di funzione semantica.
3. **Chiamata API Diretta** : Una semplice chiamata `requests.post` al nostro endpoint `/v1/chat/completions` è sufficiente per eseguire la funzione.

Questo esempio illustra come non sia sempre necessario utilizzare un framework pesante. Per compiti semplici e ben definiti, una chiamata diretta all'API LLMaaS è spesso la soluzione più efficace e performante.

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
    
    # Le prompt combine une instruction (rôle système) et des données (rôle utilisateur)
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

### 6. Framework Haystack

[Haystack](https://haystack.deepset.ai/) è un altro framework open-source potente per costruire applicazioni di ricerca semantica, RAG e agenti. Come per Semantic Kernel, la nostra API può essere integrata direttamente.

#### Il codice spiegato

Questo esempio simula un "pipeline" Haystack di base per la ricerca di risposte in un dato contesto (Question Answering).

1. **`process_with_context`** : Questa funzione rappresenta il cuore di un pipeline di QA. Prende un `contesto` (ad esempio, un paragrafo di un documento) e una `domanda`.
2. **Prompt Contestuale** : Il prompt è accuratamente strutturato per includere sia il contesto che la domanda. È una tecnica fondamentale nel RAG: si forniscono al LLM le informazioni pertinenti affinché possa formulare una risposta fattuale.
3. **Chiamata API** : Ancora una volta, una semplice chiamata `requests.post` alla nostra API è sufficiente. Il LLM riceve il contesto e la domanda, e il suo compito è sintetizzare una risposta basata *esclusivamente* sulle informazioni fornite.

Questo esempio illustra la flessibilità dell'API LLMaaS, che può fungere da mattone fondamentale per la generazione di testo in qualsiasi framework, anche per quelli per i quali non esiste un'integrazione ufficiale.

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
    
    # Il contesto è l'informazione che il LLM è autorizzato a utilizzare.
    context = """
    Un cloud souverain est une infrastructure de cloud computing qui est entièrement contenue 
    dans les frontières d'un pays spécifique et soumise à ses lois. 
    Les principaux avantages sont la garantie de la résidence des données, la conformité avec 
    les réglementations locales (comme le RGPD en Europe), et une protection accrue contre 
    l'accès par des entités étrangères en vertu de lois extraterritoriales comme le CLOUD Act américain.
    """
    
    question = "Quels sont les avantages d'un cloud souverain ?"
    
    # Il prompt guida il LLM a basare la propria risposta sul contesto fornito.
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

### 7. Integrazione LlamaIndex

[LlamaIndex](https://www.llamaindex.ai/) è un framework specializzato nella costruzione di applicazioni RAG. Offre componenti di alto livello per l'ingestione dei dati, l'indicizzazione e l'interrogazione. La nostra API, essendo compatibile con l'interfaccia OpenAI, si integra molto facilmente.

#### Il codice spiegato

Questo esempio mostra come configurare LlamaIndex per utilizzare l'API LLMaaS per la generazione di testo, utilizzando al contempo un modello di embedding locale per la vettorizzazione.

1. **`setup_and_run_llamaindex`** : Questa funzione unica orchestra l'intero processo.
    * **Configurazione del LLM** : LlamaIndex fornisce una classe `OpenAILike` che consente di connettersi a qualsiasi API che rispetti il formato OpenAI. Basta fornirle il nostro `api_base` e una `api_key`. È il metodo più semplice per rendere il nostro LLM compatibile.
    * **Configurazione degli Embeddings** : Per questo esempio, utilizziamo un modello di embedding locale (`HuggingFaceEmbedding`). Questo dimostra la flessibilità di LlamaIndex, che consente di combinare i componenti.
    * **`Settings`** : L'oggetto `Settings` di LlamaIndex è un modo pratico per configurare i componenti predefiniti (LLM, modello di embedding, dimensione dei chunk, ecc.) che verranno utilizzati dagli altri oggetti LlamaIndex.
    * **Ingestione dei dati** : `SimpleDirectoryReader` carica i documenti da una cartella.
    * **Creazione dell'indice** : `VectorStoreIndex.from_documents` è il metodo di alto livello di LlamaIndex. Gestisce automaticamente il partizionamento in chunk, la vettorizzazione dei chunk (utilizzando `embed_model` configurato in `Settings`), e la creazione dell'indice in memoria.
    * **Motore di query** : `.as_query_engine()` crea un'interfaccia semplice per porre domande al nostro indice. Quando si chiama `.query()`, il motore vettorizza la domanda, trova i documenti più pertinenti nell'indice e li invia al LLM (configurato in `Settings`) insieme alla domanda per generare una risposta.

```python
# Dipendenze:
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

    # 1. Configurazione del LLM per utilizzare l'API LLMaaS tramite l'interfaccia OpenAILike
    print("1. Configuration du LLM pour pointer vers l'API LLMaaS...")
    llm = OpenAILike(
        api_key=api_key,
        api_base="https://api.ai.cloud-temple.com/v1",
        model="gpt-oss:120b",
        is_chat_model=True,
        # A volte è necessario aggiungere parametri di contesto per alcuni modelli
        # context_window=3900, 
    )

    # 2. Configurazione del modello di embedding (locale in questo esempio per semplicità)
    print("2. Configuration du modèle d'embedding local...")
    embed_model = HuggingFaceEmbedding(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    # 3. Applicazione delle configurazioni globali tramite l'oggetto Settings di LlamaIndex
    Settings.llm = llm
    Settings.embed_model = embed_model
    print("   -> LLM et modèle d'embedding configurés.")

    # 4. Creazione di una semplice base di conoscenza in una directory temporanea
    print("4. Création et chargement d'une base de connaissances temporaire...")
    with TemporaryDirectory(prefix="llmaas_llamaindex_") as temp_dir:
        knowledge_file = os.path.join(temp_dir, "knowledge.txt")
        with open(knowledge_file, "w", encoding="utf-8") as f:
            f.write("L'offre LLMaaS de Cloud Temple est une solution d'IA générative souveraine, "
                    "entièrement opérée en France et qualifiée SecNumCloud par l'ANSSI.")

        documents = SimpleDirectoryReader(temp_dir).load_data()
        print(f"   -> {len(documents)} document(s) chargé(s).")
    # I documenti sono in memoria; la cartella temporanea viene eliminata,
    # anche in caso di fallimento della scrittura o del caricamento.

    # 5. Creazione dell'indice vettoriale. LlamaIndex gestisce il chunking e l'embedding.
    print("5. Création de l'index vectoriel...")
    index = VectorStoreIndex.from_documents(documents)
    print("   -> Index créé.")

    # 6. Creazione del motore di query e interrogazione della base di conoscenza
    print("6. Création du moteur de requête et interrogation...")
    query_engine = index.as_query_engine()
    question = "Quelles sont les garanties de souveraineté de l'offre LLMaaS ?"
    response = query_engine.query(question)
    
    print(f"\nQuestion: {question}")
    print(f"Réponse: {response}")


if __name__ == "__main__":
    setup_and_run_llamaindex()
```

### 8. Configurazione dell'estensione CLINE per VSCode

Questa guida illustra come configurare l'estensione CLINE in Visual Studio Code per utilizzare i modelli linguistici di Cloud Temple direttamente dall'editor.

#### Passaggi di configurazione

1. **Aprire le impostazioni di CLINE** : In VSCode, aprite le impostazioni dell'estensione CLINE.
2. **Creare un nuovo modello** : Aggiungete una nuova configurazione del modello.
3. **Compilare i campi** : Configurate i campi come segue, facendo riferimento all'immagine sottostante.

    ![Configurazione di CLINE per LLMaaS](@site/docs/llmaas/images/cline_configuration.png)

    * **API Provider**: Selezionate `OpenAI Compatible`.
    * **Base URL**: Inserite l'endpoint dell'API LLMaaS di Cloud Temple : `https://api.ai.cloud-temple.com/v1`.
    * **OpenAI Compatible API Key**: Incollate la chiave API che avete generato dalla console Cloud Temple.
    
    :::tip[Generazione della chiave API]
    Per generare la vostra chiave API, recatevi nella console Cloud Temple, sezione **LLMaaS** > **Chiavi API**, quindi cliccate su **"Crea una chiave API"**.
    
    ![Creazione di una chiave API dalla console](@site/docs/llmaas/images/console_create_api_key.png)
    :::
    
    * **Model ID**: Specificate il modello che desiderate utilizzare, ad esempio `qwen3.6:35b`. Potete trovare l'elenco dei modelli disponibili nella sezione [Modelli](./models.md).
    * **Model Configuration**:
        * **Supports Images**: Spuntate questa casella se il modello supporta le immagini.
        * **Supports browser use**: Spuntate questa casella.
        * **Context Window Size**: Indicate la dimensione della finestra di contesto del modello (es: `128000`).
        * **Max Output Tokens**: Lasciate a `-1` per un output non limitato di default.
        * **Temperature**: Regolate la temperatura in base alle vostre esigenze (es: `0`).

Ora potete selezionare un modello in CLINE e utilizzarlo per generare codice, rispondere a domande, ecc.

---

## 💡 Esempi Avanzati

Nella directory GitHub riportata di seguito troverete una raccolta di esempi di codice e script che dimostrano le diverse funzionalità e casi d'uso dell'offerta LLM as a Service (LLMaaS) di Cloud Temple :

[Cloud-Temple/product-llmaas-how-to](https://github.com/Cloud-Temple/product-llmaas-how-to/tree/main)

Troverete guide pratiche per :
- __Estrazione di Informazioni e Analisi del Testo:__ Capacità di analizzare documenti per estrarre dati strutturati come entità, eventi, relazioni e attributi, basandosi su ontologie specifiche per dominio (ex: juridique, RH, IT).

- __Interazione Conversazionale e Chatbot:__ Sviluppo di agenti conversazionali in grado di dialogare, mantenere lo storico delle conversazioni, utilizzare istruzioni di sistema (prompts système) e invocare strumenti esterni.

- __Trascrizione Audio (Speech-to-Text):__ Conversione di contenuti audio in testo, anche per file di grandi dimensioni, grazie a tecniche di segmentazione, normalizzazione e elaborazione in batch.

- __Traduzione di Testo:__ Traduzione di documenti da una lingua all'altra, gestendo il contesto su più segmenti per migliorare la coerenza.

- __Gestione e Valutazione dei Modelli:__ Elencazione dei modelli linguistici disponibili tramite l'API, consultazione delle loro specifiche ed esecuzione di test per confrontarne le prestazioni.

- __Streaming delle Risposte in Tempo Reale:__ Dimostrazione della capacità di ricevere e visualizzare le risposte dei modelli in modo progressivo (token par token), essenziale per le applicazioni interattive.
- __Pipeline RAG con Base di Conoscenze in Memoria:__ Demo RAG didattica per illustrare il funzionamento del Retrieval-Augmented Generation. Utilizza l'API LLMaaS per l'embedding e la generazione, con memorizzazione dei vettori in memoria (FAISS) per una chiara comprensione del processo.
- __Pipeline RAG con Database Vettoriale (Qdrant):__ Demo RAG completa e containerizzata che utilizza Qdrant come database vettoriale. L'API LLMaaS viene utilizzata per l'embedding dei documenti e la generazione di risposte aumentate.
- __OCR e Analisi dei Documenti (DeepSeek-OCR):__ Guida completa e strumento di dimostrazione per convertire immagini e PDF in Markdown strutturato, estrarre tabelle e trascrivere formule matematiche. Vedi la [documentation dédiée](./ocr).