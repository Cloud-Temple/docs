---
title: Concetti
sidebar_position: 3
---

# Concetti e Architettura LLMaaS

## Panoramica

Il servizio **LLMaaS** (Large Language Models as a Service) di Cloud Temple fornisce un accesso sicuro e sovrano ai modelli di intelligenza artificiale più avanzati, con la **qualificazione SecNumCloud** dell'ANSSI.

## 🏗️ Architettura Tecnica

### Infrastruttura Cloud Temple

import ArchitectureLLMaaS from '@site/docs/llmaas/images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Architettura Tecnica LLMaaS Cloud Temple" />

### Componenti Principali

#### 1. **API Gateway LLMaaS**
- **Compatible OpenAI** : Integrazione trasparente con l'ecosistema esistente
- **Rate Limiting** : Gestione delle quote per livello di fatturazione
- **Load Balancing** : Distribuzione delle richieste sulle risorse di inferenza
- **Monitoring** : Metriche in tempo reale e alerting

#### 2. **Servizio di Autenticazione**
- **Chiavi API** : Creazione, rotazione e revoca sotto la responsabilità del cliente. Vedi il [partage des responsabilités (RACI)](../contractual/llmaas/raci.md).
- **Controllo degli accessi** : Permessi granulari per modello
- **Audit trails** : Tracciabilità completa degli accessi

## 🤖 Modelli e Token

### Catalogo dei Modelli

*Consultate il [catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) e la [guida alla scelta](./models.md).*

### Gestione dei Token

#### **Tipi di Token**
- **Token di input** : Il tuo prompt e contesto
- **Token di output** : Risposta generata dal modello
- **Token di sistema** : Metadati e istruzioni

#### **Calcolo dei Costi**
```
Chat/Completion = (Tokens entrée × 1.8€/M) + (Tokens sortie × 8€/M) + (Tokens sortie Raisonnement × 8€/M)
Reranking (€)   = Nombre de documents traités × 4 / 1 000 000
Batch (async)   = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M)
Audio (ASR)     = 0.01€ / minute de transcription
```

#### **Ottimizzazione**
- **Finestra di contesto** : Riutilizzare le conversazioni per risparmiare
- **Modelli appropriati** : Scegliere la dimensione in base alla complessità
- **Max tokens** : Limitare la lunghezza delle risposte

### Tokenizzazione

```python
# Exemple d'estimation de tokens
def estimate_tokens(text: str) -> int:
    """Estimation approximative : 1 token ≈ 4 caractères"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # tokens max souhaités

estimated_input = estimate_tokens(prompt)  # ~6 tokens
total_cost = (estimated_input * 1.8 + response_max * 8) / 1_000_000
print(f"Coût estimé: {total_cost:.6f}€")
```

## 🔒 Sicurezza e Conformità

### Qualificazione SecNumCloud

Il servizio LLMaaS viene eseguito su un'infrastruttura tecnica che beneficia della **qualificazione SecNumCloud 3.2** dell'ANSSI, garantendo:

#### **Protezione dei Dati**
- **Crittografia end-to-end** : TLS 1.3 per tutti gli scambi
- **Archiviazione sicura** : Dati crittografati a riposo (AES-256)

#### **Sovranità Digitale**
- **Hosting in Francia** : Datacenter Cloud Temple certificati
- **Diritto francese** : Conformità GDPR nativa
- **Nessuna esposizione** : Nessun trasferimento verso cloud esteri

#### **Audit e Tracciabilità**
- **Log completi** : Tutte le interazioni tracciate
- **Ritenzione** : Conservazione secondo politiche legali
- **Conformità** : Report di audit disponibili

### Controlli di Sicurezza

import SecurityControls from '@site/docs/llmaas/images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controlli di Sicurezza LLMaaS" />

### Sicurezza dei Prompt

La piattaforma LLMaaS non applica un filtraggio automatico del contenuto dei prompt contro le iniezioni o i tentativi di elusione delle istruzioni (*jailbreaks*).

I controlli sul contenuto devono essere implementati nella vostra applicazione in base al vostro caso d'uso. È possibile chiamare esplicitamente un [modello di sicurezza del catalogo](./models.md#sicurezza-e-guardrails) per valutare gli input o le risposte. Questi modelli non vengono eseguiti automaticamente sulle richieste indirizzate ad altri modelli.

Definite i criteri di filtraggio e la gestione dei risultati con i vostri reparti aziendali, quindi testateli sui vostri dati, in particolare per misurare i falsi positivi. Il [modello di responsabilità condivise](../contractual/llmaas/raci.md) specifica i ruoli del cliente e di Cloud Temple.

## 📈 Prestazioni e Scalabilità

### Monitoraggio in Tempo Reale

Accesso tramite **Console Cloud Temple** :
- Metriche di utilizzo per modello
- Grafici di latenza e throughput
- Avvisi sulle soglie di prestazioni
- Cronologia delle richieste

## 🌐 Integrazione ed Ecosistema

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

# Codice identico !
response = client_ct.chat.completions.create(
    model="gpt-oss:120b",  # Modello Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Ecosistema Supportato

#### **Framework IA**
- ✅ **LangChain** : Integrazione nativa
- ✅ **Haystack** : Pipeline di documenti
- ✅ **Semantic Kernel** : Orchestrazione Microsoft
- ✅ **AutoGen** : Agenti conversazionali

#### **Strumenti di Sviluppo**
- ✅ **Jupyter** : Notebooks interattivi
- ✅ **Streamlit** : Applicazioni web rapide
- ✅ **Gradio** : Interfacce utente IA
- ✅ **FastAPI** : API backend

#### **Piattaforme No-Code**
- ✅ **Zapier** : Automazioni
- ✅ **Make** : Integrazioni visive
- ✅ **Bubble** : Applicazioni web

## 🔄 Ciclo di Vita dei Modelli

Il **[ciclo di vita dei modelli](https://llmaas.status.cloud-temple.app/lifecycle)** pubblica gli stati, le scadenze e le migrazioni consigliate. Consultatelo prima di scegliere un modello e durante l'utilizzo della vostra applicazione.

### Consultare il ciclo di vita

- **DMP** : data di messa in produzione.
- **DSP** : data di fine produzione (fine del supporto) annunciata per il modello.
- **LTS (Long Term Support)** : modello che beneficia di un supporto esteso; verificare la data pubblicata per il modello interessato.
- **Production** : modello indicato come in produzione nel catalogo.
- **Deprecated** : modello deprecato per il quale deve essere preparata una migrazione. Questo stato non implica necessariamente che le chiamate API siano già interrotte.
- **Planned** : modello annunciato, la cui disponibilità deve essere verificata prima dell'utilizzo.

Gli annunci di aggiunta, reindirizzamento e rimozione sono pubblicati nel [changelog del servizio](https://llmaas.status.cloud-temple.app/changelog). Per esigenze di stabilità o supporto particolari, contattare il supporto per definire le modalità applicabili.

### Reindirizzamenti e identificatori precedenti

Alcuni identificatori precedenti vengono reindirizzati a un modello successivo. Una richiesta può quindi continuare a funzionare pur essendo elaborata da un altro modello. La continuità della chiamata API non garantisce risposte identiche, né le stesse capacità, latenze o limiti di contesto.

### Migrazione a un altro modello

1. Identificate il modello interessato, la scadenza e il successore consigliato nel [ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle).
2. Verificate l'identificatore del successore con `GET /v1/models` e le sue capacità: visione, tool calls, ragionamento e contesto in base al vostro utilizzo.
3. Testate il successore su un campione rappresentativo delle vostre richieste: qualità, formati di output, strumenti, latenza e consumo.
4. Aggiornate il parametro `model` nella configurazione della vostra applicazione dopo la validazione, quindi monitorate i risultati.
5. Per gli embedding, prevedete di ricalcolare i vettori e di ricostruire l'indice se il modello cambia.

### Modelli deprecati

L'elenco e le destinazioni di migrazione sono disponibili nel [catalogo del ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle). Se non viene indicata alcuna migrazione, contattare il supporto prima della scadenza per scegliere una soluzione adeguata.

## 💡 Buone Pratiche

Per sfruttare al meglio l'API LLMaaS, è essenziale adottare strategie di ottimizzazione dei costi, delle prestazioni e della sicurezza.

### Ottimizzazione dei Costi

Il controllo dei costi si basa su un utilizzo intelligente dei token e dei modelli.

1.  **Scelta del Modello** : Confrontate più modelli su esempi rappresentativi del vostro utilizzo. Selezionate quello che soddisfa i vostri requisiti di qualità e latenza, quindi misurate il suo consumo di token. Consultate il [catalogo del ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle) per identificare i modelli disponibili e i loro successori. La fatturazione dipende dal tariffario applicabile e dai volumi consumati; la dimensione del modello da sola non determina il costo fatturato.

2.  **Gestione del Contesto** : La cronologia della conversazione (`messages`) viene restituita a ogni chiamata, consumando token in input. Per conversazioni lunghe, valutate strategie di riassunto o di finestramento per conservare solo le informazioni pertinenti.
    ```python
    # Per una conversazione lunga, è possibile riassumere i primi scambi.
    messages = [
        {"role": "system", "content": "Vous êtes un assistant IA."},
        {"role": "user", "content": "Résumé des 10 premiers échanges..."},
        {"role": "assistant", "content": "Ok, j'ai le contexte."},
        {"role": "user", "content": "Voici ma nouvelle question."}
    ]
    ```

3.  **Limitazione dei Token in Output** : Utilizzate sempre il parametro `max_tokens` per evitare risposte eccessivamente lunghe e costose. Impostate un limite ragionevole in base alle vostre aspettative.
    ```python
    # Richiedere un riassunto di massimo 100 parole.
    response = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Résume ce document..."}],
        max_tokens=150, # Margine di sicurezza per ~100 parole
    )
    ```

### Prestazioni

La reattività della tua applicazione dipende dal modo in cui gestisci le chiamate all'API.

1.  **Richieste Asincrone** : Per elaborare più richieste senza attendere il completamento di ciascuna, utilizza chiamate asincrone. Questo è particolarmente utile per le applicazioni backend che gestiscono un elevato volume di richieste simultanee.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Elabora una singola richiesta in modo asincrono
        response = await client.chat.completions.create(model="gpt-oss:120b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Avvia più task in parallelo e attende il loro completamento
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming per l'Esperienza Utente (UX)** : Per le interfacce utente (chatbot, assistenti), lo streaming è essenziale. Consente di visualizzare la risposta del modello parola per parola, dando un'impressione di reattività immediata invece di attendere la risposta completa.
    ```python
    # Visualizza la risposta in tempo reale in un'interfaccia utente
    response_stream = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Raconte-moi une histoire."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Visualizza il frammento di testo nell'UI
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Sicurezza

La sicurezza della vostra applicazione è fondamentale, soprattutto quando si elaborano gli input degli utenti.

1.  **Validazione e Pulizia degli Input (Sanitization)** : Non fidatevi mai degli input degli utenti. Prima di inviarli all'API, sanizzateli per rimuovere qualsiasi codice potenzialmente dannoso o istruzioni di "prompt injection". Limitate inoltre la loro dimensione per evitare abusi.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Esempio semplice: rimuovere i delimitatori di codice e limitare la lunghezza.
        # Possono essere utilizzate librerie più robuste per una sanitization avanzata.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limita la dimensione a 2000 caratteri
    ```

2.  **Gestione Robusta degli Errori** : Incapsulate sempre le chiamate API in blocchi `try...except` per gestire gli errori di rete, gli errori dell'API (es: 429 Rate Limit, 500 Internal Server Error) e fornire un'esperienza utente degradata ma funzionale.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Gestire il caso in cui la richiesta impiega troppo tempo
        return "Le service prend plus de temps que prévu, veuillez réessayer."
    except APIError as e:
        # Gestire gli errori specifici dell'API
        logger.error(f"Erreur API LLMaaS: {e.status_code} - {e.message}")
        return "Désolé, une erreur est survenue avec le service d'IA."
    except Exception as e:
        # Gestire tutti gli altri errori (rete, ecc.)
        logger.error(f"Une erreur inattendue est survenue: {e}")
        return "Désolé, une erreur inattendue est survenue."
    ```