---
title: Concetti
sidebar_position: 3
---

# Concetti e Architettura LLMaaS

## Panoramica

Il servizio **LLMaaS** (Large Language Models as a Service) di Cloud Temple fornisce un accesso sicuro e sovrano ai modelli di intelligenza artificiale più avanzati, con la **qualifica SecNumCloud** dell'ANSSI.

## 🏗️ Architettura Tecnica

### Infrastruttura Cloud Temple

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Architettura Tecnica LLMaaS Cloud Temple" />

### Componenti Principali

#### 1. **API Gateway LLMaaS**
- **Compatibile con OpenAI** : Integrazione trasparente con ecosistema esistente
- **Limitazione delle richieste** : Gestione dei quoti per livello di fatturazione
- **Bilanciamento del carico** : Distribuzione intelligente su 12 macchine GPU
- **Monitoraggio** : Metriche in tempo reale e alerting

#### 2. **Servizio di Autenticazione**
- **Token API sicuri** : rotazione automatica
- **Controllo degli accessi** : permessi granulari per modello
- **Tracce di audit** : tracciabilità completa degli accessi

## 🤖 Modelli e Tokens

### Catalogo dei Modelli

*Catalogo completo : [Elenco dei modelli](./models)*

### Gestione dei Token

#### **Tipi di Token**
- **Token di input** : Il tuo prompt e contesto
- **Token di output** : Risposta generata dal modello
- **Token di sistema** : Metadata e istruzioni

#### **Calcolo dei Costi**
```
Costo totale = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M) +  (Tokens sortie Raisonnement × 21€/M)
```

#### **Ottimizzazione**
- **Finestra di contesto** : Riutilizza le conversazioni per risparmiare
- **Modelli appropriati** : Scegli la dimensione in base alla complessità
- **Max token** : Limita la lunghezza delle risposte

### Tokenizzazione

```python

# Esempio di stima dei token
def estimate_tokens(text: str) -> int:
    """Stima approssimativa: 1 token ≈ 4 caratteri"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # token massimi desiderati

estimated_input = estimate_tokens(prompt)  # ~6 token
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Costo stimato: {total_cost:.6f}€")
```

## 🔒 Sicurezza e Conformità

### Qualifica SecNumCloud

Il servizio LLMaaS è eseguito su un'infrastruttura tecnica che gode della **qualifica SecNumCloud 3.2** dell'ANSSI, garantendo :

#### **Protezione dei dati**
- **Crittografia end-to-end** : TLS 1.3 per tutti gli scambi
- **Archiviazione sicura** : Dati crittografati a riposo (AES-256)
- **Isolamento** : Ambienti dedicati per tenant

#### **Sovranità Digitale**
- **Hosting Francia** : Datacenters Cloud Temple certificati
- **Diritto francese** : Conformità GDPR nativa
- **Nessuna esposizione** : Nessun trasferimento verso cloud esteri

#### **Audit e tracciabilità**
- **Log completi** : Tutte le interazioni tracciate
- **Ritenzione** : Conservazione secondo le politiche legali
- **Conformità** : Report di audit disponibili

### Controlli di Sicurezza

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controlli di Sicurezza LLMaaS" />

### Sicurezza dei Prompt

L'analisi dei prompt è una funzionalità di sicurezza **nativa e integrata** nella piattaforma LLMaaS. Abilitata di default, mira a rilevare e prevenire tentativi di "jailbreak" o iniezioni di prompt dannosi prima che raggiungano effettivamente il modello. Questa protezione si basa su un approccio multilivello.

:::tip Contattare il supporto per la disattivazione
È possibile disattivare questa analisi di sicurezza per casi d'uso molto specifici, anche se non è consigliato. Per qualsiasi domanda su questo argomento o per richiedere una disattivazione, si prega di contattare il supporto Cloud Temple.
:::

#### 1. Analisi Strutturale (`check_structure`)
- **Verifica JSON non corretto** : Il sistema rileva se il prompt inizia con un `{` e cerca di analizzarlo come JSON. Se l'analisi ha successo e il JSON contiene parole chiave sospette (es: "system", "bypass"), o se l'analisi ha esito negativo in modo inaspettato, ciò può indicare un tentativo di iniezione.
- **Normalizzazione Unicode** : Il prompt viene normalizzato utilizzando `unicodedata.normalize('NFKC', prompt)`. Se il prompt originale è diverso dalla sua versione normalizzata, ciò può indicare l'uso di caratteri Unicode ingannevoli (omogliфи) per bypassare i filtri. Ad esempio, "аdmin" (cyrillico) invece di "admin" (latino).

#### 2. Rilevamento di Pattern Sospetti (`check_patterns`)
- Il sistema utilizza espressioni regolari (`regex`) per identificare modelli noti di attacchi ai prompt, in diversi linguaggi (francese, inglese, cinese, giapponese).
- **Esempi di pattern rilevati** :
    - **Comandi di Sistema** : parole chiave come "ignora le istruzioni", "ignore instructions", "忽略指令", "指示を無視".
    - **Iniezione HTML** : tag HTML nascosti o dannosi, ad esempio `<div nascosto>`, `<hidden div>`.
    - **Iniezione Markdown** : link Markdown dannosi, ad esempio `[testo](javascript:...)`, `[testo](data:...)`.
    - **Sequenze Ripetute** : ripetizione eccessiva di parole o frasi come "dimentica dimentica dimentica", "forget forget forget".
    - **Caratteri Speciali/Misti** : utilizzo di caratteri Unicode insoliti o mescolanza di script per nascondere comandi (es: "s\u0443stème").

#### 3. Analisi Comportamentale (`check_behavior`)
- Il load balancer mantiene un registro degli ultimi prompt.
- **Rilevamento della frammentazione** : Combina i prompt recenti per verificare se un attacco è frammentato in più richieste. Ad esempio, se "ignore" viene inviato in un prompt e "instructions" nel successivo, il sistema può rilevarli insieme.
- **Rilevamento della ripetizione** : Identifica se lo stesso prompt viene ripetuto in modo eccessivo. La soglia attuale per il rilevamento della ripetizione è di **30 prompt consecutivi identici**.

Questo approccio multistrato permette di rilevare una vasta gamma di attacchi ai prompt, dai più semplici ai più sofisticati, combinando l'analisi statica del contenuto e l'analisi dinamica del comportamento.

## 📈 Prestazioni e Scalabilità

### Monitoraggio in tempo reale

Accesso tramite **Console Cloud Temple** :
- Metriche di utilizzo per modello
- Grafici di latenza e throughput
- Avvisi sui limiti di prestazione
- Storico delle richieste

## 🌐 Integrazione e Ecosistema

### Compatibilità OpenAI

Il servizio LLMaaS è **compatibile** con l'API OpenAI :

```python

# Migrazione trasparente
from openai import OpenAI

# Prima (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Dopo (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Codice identico!
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Modèle Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Ecosistema Supportato

#### **Frameworks IA**
- ✅ **LangChain** : Integrazione nativa
- ✅ **Haystack** : Pipeline di documenti
- ✅ **Semantic Kernel** : Orchestrazione Microsoft
- ✅ **AutoGen** : Agenti conversazionali

#### **Strumenti di Sviluppo**
- ✅ **Jupyter** : Notebook interattivi
- ✅ **Streamlit** : Applicazioni web rapide
- ✅ **Gradio** : Interfacce utente per l'IA
- ✅ **FastAPI** : API backend

#### **Piattaforme No-Code**
- ✅ **Zapier** : Automazioni
- ✅ **Make** : Integrazioni visive
- ✅ **Bubble** : Applicazioni web

## 🔄 Ciclo di vita dei Modelli

### Aggiornamento dei Modelli

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Ciclo di Vita dei Modelli LLMaaS" />

### Politica di Versioning

- **Modelli stabili** : Versioni fisse disponibili per 6 mesi
- **Modelli sperimentali** : Versioni beta per early adopters
- **Depreciazione** : Avviso di 3 mesi prima del ritiro
- **Migrazione** : Servizi professionali disponibili per garantire le vostre transizioni

### Piano Preventivo del Ciclo di Vita

La tabella seguente presenta il ciclo di vita preventivo dei nostri modelli. L'ecosistema dell'IA generativa si evolve molto rapidamente, il che spiega cicli di vita che possono sembrare brevi. La nostra volontà è fornire accesso ai modelli più performanti disponibili.

Tuttavia, ci impegniamo a preservare nel tempo i modelli più utilizzati dai nostri clienti. Per casi d'uso critici che richiedono una stabilità a lungo termine, sono possibili fasi di **supporto esteso**. Non esitate a **contattare il supporto** per discutere delle vostre esigenze specifiche.

Questo piano è fornito a titolo indicativo e viene **revisionato all'inizio di ogni trimestre**.

- **DMP (Data di Messa in Produzione)**: Data in cui il modello diventa disponibile in produzione.
- **DSP (Data di Fine Supporto)**: Data prevista a partire dalla quale il modello non sarà più mantenuto. È rispettato un preavviso di 3 mesi prima di qualsiasi cancellazione effettiva.

| Modello                | Editore                   | Fase       | DMP        | DSP        |
| :--------------------- | :------------------------ | :--------- | :--------- | :--------- |
| deepcoder:14b          | Agentica x Together AI    | Produzione | 13/06/2025 | 30/06/2026 |
| cogito:14b             | Deep Cogito               | Produzione | 13/06/2025 | 30/06/2026 |
| cogito:32b             | Deep Cogito               | Produzione | 13/06/2025 | 30/06/2026 |
| cogito:3b              | Deep Cogito               | Produzione | 13/06/2025 | 30/06/2026 |
| cogito:8b              | Deep Cogito               | Produzione | 13/06/2025 | 30/06/2026 |
| deepseek-r1:14b        | DeepSeek AI               | Produzione | 13/06/2025 | 31/12/2025 |
| deepseek-r1:32b        | DeepSeek AI               | Produzione | 13/06/2025 | 31/12/2025 |
| deepseek-r1:671b       | DeepSeek AI               | Produzione | 13/06/2025 | 31/12/2025 |
| deepseek-r1:70b        | DeepSeek AI               | Produzione | 13/06/2025 | 31/12/2025 |
| foundation-sec:8b      | Foundation AI — Cisco     | Produzione | 13/06/2025 | 30/09/2025 |
| gemma3:12b             | Google                    | Produzione | 13/06/2025 | 31/12/2026 |
| gemma3:1b              | Google                    | Produzione | 13/06/2025 | 31/12/2026 |
| gemma3:27b             | Google                    | Produzione | 13/06/2025 | 31/12/2026 |
| gemma3:4b              | Google                    | Produzione | 13/06/2025 | 31/12/2026 |
| granite-embedding:278m | IBM                       | Produzione | 13/06/2025 | 31/12/2026 |
| granite3-guardian:2b   | IBM                       | Produzione | 13/06/2025 | 31/12/2026 |
| granite3-guardian:8b   | IBM                       | Produzione | 13/06/2025 | 31/12/2026 |
| granite3.1-moe:3b      | IBM                       | Produzione | 13/06/2025 | 31/12/2026 |
| granite3.2-vision:2b   | IBM                       | Produzione | 13/06/2025 | 31/12/2026 |
| granite3.3:2b          | IBM                       | Produzione | 13/06/2025 | 31/12/2026 |
| granite3.3:8b          | IBM                       | Produzione | 13/06/2025 | 31/12/2026 |
| llama3.1:8b            | Meta                      | Produzione | 13/06/2025 | 31/12/2025 |
| llama3.3:70b           | Meta                      | Produzione | 13/06/2025 | 31/12/2026 |
| phi4-reasoning:14b     | Microsoft                 | Produzione | 13/06/2025 | 31/12/2025 |
| magistral:24b          | Mistral AI                | Produzione | 13/06/2025 | 31/12/2026 |
| mistral-small3.1:24b   | Mistral AI                | Produzione | 13/06/2025 | 31/12/2026 |
| mistral-small3.2:24b   | Mistral AI                | Produzione | 23/06/2025 | 30/03/2026 |
| devstral:24b           | Mistral AI & All Hands AI | Produzione | 13/06/2025 | 31/12/2026 |
| lucie-instruct:7b      | OpenLLM-France            | Produzione | 13/06/2025 | 30/10/2025 |
| qwen2.5:0.5b           | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2025 |
| qwen2.5:1.5b           | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2025 |
| qwen2.5:14b            | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2025 |
| qwen2.5:32b            | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2025 |
| qwen2.5:3b             | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:32b          | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:3b           | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:72b          | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:7b           | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:0.6b             | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:1.7b             | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:14b              | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:30b-a3b          | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:4b               | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:8b               | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:32b              | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwen3:235b             | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2026 |
| qwq:32b                | Qwen Team                 | Produzione | 13/06/2025 | 31/12/2025 |

## 💡 Buone Pratiche

Per trarre il massimo dall'API LLMaaS, è essenziale adottare strategie di ottimizzazione dei costi, delle prestazioni e della sicurezza.

### Ottimizzazione dei Costi

La gestione dei costi si basa sull'utilizzo intelligente dei token e dei modelli.

1. **Scelta del Modello**: Non utilizzare un modello potente per un compito semplice. Un modello più grande è più potente, ma è anche più lento e consuma molto più energia, il che influisce direttamente sul costo. Adatta la dimensione del modello alla complessità del tuo bisogno per un equilibrio ottimale.

   Ad esempio, per elaborare un milione di token:
   - **`Gemma 3 1B`** consuma **0.15 kWh**.
   - **`Llama 3.3 70B`** consuma **11.75 kWh**, ovvero **78 volte di più**.

   ```python
   # Per una classificazione del sentiment, un modello compatto è sufficiente ed economico.
   if task == "sentiment_analysis":
       model = "granite3.3:2b"
   # Per un'analisi legale complessa, è necessario un modello più grande.
   elif task == "legal_analysis":
       model = "deepseek-r1:70b"
   ```

2. **Gestione del Contesto**: La cronologia della conversazione (`messages`) viene restituita a ogni chiamata, consumando token di input. Per conversazioni lunghe, considera strategie di riepilogo o di finestra per conservare solo le informazioni rilevanti.
   ```python
   # Per una conversazione lunga, è possibile riepilogare i primi scambi.
   messages = [
       {"role": "system", "content": "Sei un assistente IA."},
       {"role": "user", "content": "Riassunto dei primi 10 scambi..."},
       {"role": "assistant", "content": "Okay, ho il contesto."},
       {"role": "user", "content": "Ecco la mia nuova domanda."}
   ]
   ```

3. **Limitazione dei Token di Output**: Utilizza sempre il parametro `max_tokens` per evitare risposte eccessivamente lunghe e costose. Imposta un limite ragionevole in base a ciò che ti aspetti.
   ```python
   # Richiedere un riepilogo di massimo 100 parole.
   response = client.chat.completions.create(
       model="granite3.3:8b",
       messages=[{"role": "user", "content": "Riassumi questo documento..."}],
       max_tokens=150, # Margine di sicurezza per ~100 parole
   )
   ```

### Prestazioni

La reattività della tua applicazione dipende dal modo in cui gestisci le chiamate all'API.

1.  **Richieste Asincrone** : Per elaborare più richieste senza attendere la fine di ciascuna, utilizza chiamate asincrone. Questo è particolarmente utile per le applicazioni backend che gestiscono un alto volume di richieste simultanee.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Elabora una singola richiesta in modo asincrono
        response = await client.chat.completions.create(model="granite3.3:8b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Avvia più task in parallelo e attende la loro completazione
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming per l'esperienza utente (UX)** : Per le interfacce utente (chatbot, assistenti), lo streaming è essenziale. Consente di visualizzare la risposta del modello parola per parola, dando l'impressione di una reattività immediata invece di attendere la risposta completa.
    ```python
    # Visualizza la risposta in tempo reale in un'interfaccia utente
    response_stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[{"role": "user", "content": "Raccontami una storia."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Mostra il frammento di testo nell'UI
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Sicurezza

La sicurezza della tua applicazione è fondamentale, soprattutto quando si gestiscono input degli utenti.

1. **Validazione e Pulizia delle Entrate (Sanitizzazione)** : Non fare mai affidamento sugli input degli utenti. Prima di inviarli all'API, puliscili per rimuovere qualsiasi codice potenzialmente dannoso o istruzioni di "iniezione di prompt". Limita inoltre la loro dimensione per evitare abusi.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Esempio semplice: rimuovere i delimitatori di codice e limitare la lunghezza.
        # Possono essere utilizzate librerie più robuste per una sanitizzazione avanzata.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limita la dimensione a 2000 caratteri
    ```

2. **Gestione Robusta delle Errore** : Incapsula sempre le chiamate API in blocchi `try...except` per gestire errori di rete, errori dell'API (es: 429 Rate Limit, 500 Internal Server Error) e fornire un'esperienza utente ridotta ma funzionante.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Gestire il caso in cui la richiesta impiega troppo tempo
        return "Il servizio sta impiegando più tempo del previsto, riprova."
    except APIError as e:
        # Gestire gli errori specifici dell'API
        logger.error(f"Errore API LLMaaS: {e.status_code} - {e.message}")
        return "Spiacente, si è verificato un errore con il servizio di intelligenza artificiale."
    except Exception as e:
        # Gestire tutti gli altri errori (rete, ecc.)
        logger.error(f"Si è verificato un errore imprevisto: {e}")
        return "Spiacente, si è verificato un errore imprevisto."
    ```