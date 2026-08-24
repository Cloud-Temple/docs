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
- **Load Balancing** : Distribuzione intelligente su 12 macchine GPU
- **Monitoring** : Metriche in tempo reale e alerting

#### 2. **Servizio di Autenticazione**
- **Token API sicuri** : Rotazione automatica
- **Controllo degli accessi** : Permessi granulari per modello
- **Audit trails** : Tracciabilità completa degli accessi

## 🤖 Modelli e Token

### Catalogo di Modelli

*Catalogo completo : [Liste des modèles](./models)*

### Gestione dei Token

#### **Tipi di Token**
- **Token di input** : Il tuo prompt e contesto
- **Token di output** : Risposta generata dal modello
- **Token di sistema** : Metadati e istruzioni

#### **Calcolo dei Costi**
```
Chat/Completion = (Tokens entrée × 1.8€/M) + (Tokens sortie × 8€/M) + (Tokens sortie Raisonnement × 8€/M)
Reranking       = Documents rerankés × 4€/M
Batch (async)   = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M)
Audio (ASR)     = 0.01€ / minute de transcription
```

#### **Ottimizzazione**
- **Context window** : Riutilizzare le conversazioni per risparmiare
- **Modelli appropriati** : Scegliere la dimensione in base alla complessità
- **Max tokens** : Limitare la lunghezza delle risposte

### Tokenizzazione

```python
# Esempio di stima dei token
def estimate_tokens(text: str) -> int:
    """Estimation approximative : 1 token ≈ 4 caractères"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # token massimi desiderati

estimated_input = estimate_tokens(prompt)  # ~6 token
total_cost = (estimated_input * 1.8 + response_max * 8) / 1_000_000
print(f"Coût estimé: {total_cost:.6f}€")
```

## 🔒 Sicurezza e Conformità

### Qualificazione SecNumCloud

Il servizio LLMaaS viene elaborato su un'infrastruttura tecnica che beneficia della **qualificazione SecNumCloud 3.2** dell'ANSSI, garantendo:

#### **Protezione dei Dati**
- **Crittografia end-to-end** : TLS 1.3 per tutte le comunicazioni
- **Archiviazione sicura** : Dati crittografati a riposo (AES-256)
- **Isolamento** : Ambienti dedicati per tenant

#### **Sovranità Digitale**
- **Hosting in Francia** : Datacenter Cloud Temple certificati
- **Legislazione francese** : Conformità GDPR nativa
- **Nessuna esposizione** : Nessun trasferimento verso cloud esteri

#### **Audit e Tracciabilità**
- **Log completi** : Tutte le interazioni tracciate
- **Ritenzione** : Conservazione in conformità alle politiche legali
- **Conformità** : Report di audit disponibili

### Controlli di Sicurezza

import SecurityControls from '@site/docs/llmaas/images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controlli di Sicurezza LLMaaS" />

### Sicurezza dei Prompt

L'analisi dei prompt è una funzionalità di sicurezza **nativa e integrata** nella piattaforma LLMaaS. Abilitata per impostazione predefinita, ha lo scopo di rilevare e prevenire i tentativi di "jailbreak" o di iniezione di prompt malevoli prima ancora che raggiungano il modello. Questa protezione si basa su un approccio multilivello.

:::tip Contattare il supporto per la disattivazione
È possibile disattivare questa analisi di sicurezza per casi d'uso molto specifici, sebbene non sia consigliato. Per qualsiasi domanda in merito o per richiedere una disattivazione, si prega di contattare il supporto Cloud Temple.
:::

#### 1. Analisi Strutturale (`check_structure`)
- **Verifica JSON malformato** : Il sistema rileva se il prompt inizia con un `{` e tenta di eseguirne il parsing come JSON. Se il parsing ha successo e il JSON contiene parole chiave sospette (es: "system", "bypass"), o se il parsing fallisce in modo inaspettato, ciò può indicare un tentativo di iniezione.
- **Normalizzazione Unicode** : Il prompt viene normalizzato utilizzando `unicodedata.normalize('NFKC', prompt)`. Se il prompt originale differisce dalla sua versione normalizzata, ciò può indicare l'uso di caratteri Unicode ingannevoli (omoglifi) per eludere i filtri. Ad esempio, "аdmin" (cirillico) invece di "admin" (latino).

#### 2. Rilevamento di Pattern Sospetti (`check_patterns`)
- Il sistema utilizza espressioni regolari (`regex`) per identificare pattern noti di attacchi ai prompt, e questo, in diverse lingue (français, anglais, chinois, japonais).
- **Esempi di pattern rilevati** :
    - **Comandi di Sistema** : Parole chiave come "ignora le istruzioni", "ignore instructions", "忽略指令", "指示を無視".
    - **Iniezione HTML** : Tag HTML nascosti o malevoli, ad esempio `<div caché>`, `<hidden div>`.
    - **Iniezione Markdown** : Link Markdown malevoli, ad esempio `[texte](javascript:...)`, `[text](data:...)`.
    - **Sequenze Ripetute** : Ripetizione eccessiva di parole o frasi come "dimentica dimentica dimentica", "forget forget forget".
    - **Caratteri Speciali/Misti** : Utilizzo di caratteri Unicode insoliti o mescolanza di script per nascondere comandi (ex: "s\u0443stème").

#### 3. Analisi Comportamentale (`check_behavior`)
- Il load balancer mantiene uno storico dei prompt recenti.
- **Rilevamento della Frammentazione** : Combina i prompt recenti per verificare se un attacco è frammentato su più richieste. Ad esempio, se "ignore" viene inviato in un prompt e "instructions" nel successivo, il sistema può rilevarli insieme.
- **Rilevamento della Ripetizione** : Identifica se lo stesso prompt viene ripetuto in modo eccessivo. La soglia attuale per il rilevamento della ripetizione è di 30 prompt consecutivi identici.

Questo approccio multilivello consente di rilevare un'ampia gamma di attacchi ai prompt, dai più semplici ai più sofisticati, combinando l'analisi statica del contenuto e l'analisi dinamica del comportamento.

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

# Codice identico!
response = client_ct.chat.completions.create(
    model="gpt-oss:120b",  # Modello Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Ecosistema Supportato

#### **Frameworks IA**
- ✅ **LangChain** : Integrazione nativa
- ✅ **Haystack** : Pipeline di documenti
- ✅ **Semantic Kernel** : Orchestrazione Microsoft
- ✅ **AutoGen** : Agent conversazionali

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

### Aggiornamento dei Modelli

import ModelLifecycle from '@site/docs/llmaas/images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Ciclo di Vita dei Modelli LLMaaS" />

### Politica di Versioning

- **Modelli stabili** : Versioni fisse disponibili per 6 mesi
- **Modelli sperimentali** : Versioni beta per early adopters
- **Deprecazione** : Preavviso di 3 mesi prima della rimozione
- **Migrazione** : Servizi professionali disponibili per garantire le vostre transizioni

### Pianificazione Preventiva del Ciclo di Vita

La tabella sottostante presenta il ciclo di vita preventivo dei nostri modelli. L'ecosistema dell'IA generativa evolve molto rapidamente, il che spiega cicli di vita che possono sembrare brevi. La nostra volontà è di fornirvi accesso ai modelli più performanti del momento.

Tuttavia, ci impegniamo a preservare nel tempo i modelli più utilizzati dai nostri clienti. Per casi d'uso critici che richiedono stabilità a lungo termine, sono possibili fasi di **supporto esteso**. Non esitate a **contattare il supporto** per discutere delle vostre esigenze specifiche.

Questa pianificazione è fornita a titolo indicativo ed è **riveduta all'inizio di ogni trimestre**.

- **DMP (Data di Messa in Produzione)** : Data in cui il modello diventa disponibile in produzione.
- **DSP (Data di Fine Supporto)** : Data prevista a partire dalla quale il modello non sarà più mantenuto. Viene rispettato un preavviso di 3 mesi prima di qualsiasi rimozione effettiva.

| Modello                                | Editore                   | Fase      | DMP        | DSP        | LTS | Migrazione consigliata |
| :------------------------------------ | :------------------------ | :--------- | :--------- | :--------- | :-- | :------------------- |
| cogito:32b                            | Deep Cogito               | Produzione | 13/06/2025 | 30/06/2026 | No  | gpt-oss:120b         |
| embeddinggemma:300m                   | Google                    | Produzione | 10/09/2025 | 30/06/2026 | No  |                      |
| gemma3:27b                            | Google                    | Produzione | 13/06/2025 | 30/06/2026 | No  |                      |
| glm-4.7-flash:30b                     | Zhipu AI                  | Produzione | 22/01/2026 | 30/06/2026 | No  |                      |
| ministral-3:14b                       | Mistral AI                | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| ministral-3:3b                        | Mistral AI                | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| ministral-3:8b                        | Mistral AI                | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| olmo-3:32b                            | AllenAI                   | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| olmo-3:7b                             | AllenAI                   | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| qwen3-omni:30b                        | Qwen Team                 | Produzione | 05/01/2026 | 30/06/2026 | No  |                      |
| qwen3-vl:2b                           | Qwen Team                 | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| qwen3-vl:32b                          | Qwen Team                 | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| qwen3-vl:8b                           | Qwen Team                 | Produzione | 05/01/2026 | 30/06/2026 | No  |                      |
| rnj-1:8b                              | Essential AI              | Produzione | 30/12/2025 | 30/06/2026 | No  |                      |
| devstral-small-2:24b                  | Mistral AI & All Hands AI | Produzione | 02/02/2026 | 30/09/2026 | No  |                      |
| gemma4:e2b                            | Google                    | Produzione | 19/04/2026 | 30/09/2026 | No  |                      |
| gemma4:e4b                            | Google                    | Produzione | 19/04/2026 | 30/09/2026 | No  |                      |
| gpt-oss:20b                           | OpenAI                    | Produzione | 08/08/2025 | 30/09/2026 | No  |                      |
| mistral-small3.2:24b                  | Mistral AI                | Produzione | 23/06/2025 | 30/09/2026 | No  |                      |
| qwen3.5:4b                            | Qwen Team                 | Produzione | 24/03/2026 | 30/09/2026 | No  |                      |
| qwen3.5:9b                            | Qwen Team                 | Produzione | 24/03/2026 | 30/09/2026 | No  |                      |
| bge-reranker-large                    | BAAI                      | Produzione | 13/05/2026 | 30/12/2026 | No  |                      |
| deepseek-ocr                          | DeepSeek AI               | Produzione | 22/11/2025 | 30/12/2026 | No  |                      |
| functiongemma:270m                    | Google                    | Produzione | 30/12/2025 | 30/12/2026 | No  |                      |
| gemma4:31b                            | Google                    | Produzione | 14/04/2026 | 30/12/2026 | No  |                      |
| granite3-guardian:2b                  | IBM                       | Produzione | 13/06/2025 | 30/12/2026 | No  |                      |
| granite3-guardian:8b                  | IBM                       | Produzione | 13/06/2025 | 30/12/2026 | No  |                      |
| granite3.2-vision:2b                  | IBM                       | Produzione | 13/06/2025 | 30/12/2026 | No  |                      |
| mistral-small4:119b                   | Mistral AI                | Produzione | 13/05/2026 | 30/12/2026 | No  |                      |
| nemotron-3-super:120b                 | NVIDIA                    | Produzione | 01/04/2026 | 30/12/2026 | No  |                      |
| nemotron-cascade:30b                  | NVIDIA                    | Produzione | 01/04/2026 | 30/12/2026 | No  |                      |
| nemotron3-nano:30b                    | NVIDIA                    | Produzione | 04/01/2026 | 30/12/2026 | No  |                      |
| qwen-coder-next:80b                   | Qwen Team                 | Produzione | 04/02/2026 | 30/12/2026 | No  |                      |
| qwen3-embedding:0.6b                  | Qwen Team                 | Produzione | 14/05/2026 | 30/12/2026 | No  |                      |
| qwen3-embedding:4b                    | Qwen Team                 | Produzione | 14/05/2026 | 30/12/2026 | No  |                      |
| qwen3-embedding:8b                    | Qwen Team                 | Produzione | 14/05/2026 | 30/12/2026 | No  |                      |
| qwen3-next:80b                        | Qwen Team                 | Produzione | 02/02/2026 | 30/12/2026 | No  |                      |
| qwen3-reranker:0.6b                   | Qwen Team                 | Produzione | 13/05/2026 | 30/12/2026 | No  |                      |
| qwen3-reranker:4b                     | Qwen Team                 | Produzione | 13/05/2026 | 30/12/2026 | No  |                      |
| qwen3-vl:235b                         | Qwen Team                 | Produzione | 04/01/2026 | 30/12/2026 | No  |                      |
| qwen3-vl:30b                          | Qwen Team                 | Produzione | 30/12/2025 | 30/12/2026 | No  |                      |
| qwen3-vl:4b                           | Qwen Team                 | Produzione | 30/12/2025 | 30/12/2026 | No  |                      |
| qwen3.5:0.8b                          | Qwen Team                 | Produzione | 24/03/2026 | 30/12/2026 | No  |                      |
| qwen3.6:27b                           | Qwen Team                 | Produzione | 01/05/2026 | 30/12/2026 | No  |                      |
| qwen3.6:35b                           | Qwen Team                 | Produzione | 01/05/2026 | 30/12/2026 | No  |                      |
| qwen3:0.6b                            | Qwen Team                 | Produzione | 13/06/2025 | 30/12/2026 | Sì  |                      |
| translategemma:12b                    | Google                    | Produzione | 22/01/2026 | 30/12/2026 | No  |                      |
| translategemma:27b                    | Google                    | Produzione | 22/01/2026 | 30/12/2026 | No  |                      |
| translategemma:4b                     | Google                    | Produzione | 22/01/2026 | 30/12/2026 | No  |                      |
| voxtral                               | Mistral AI                | Produzione | 01/04/2026 | 30/12/2026 | No  |                      |
| z-image:16b                           | Community                 | Produzione | 01/04/2026 | 30/12/2026 | No  |                      |
| nvidia/llama-nemotron-rerank-vl-1b-v2 | NVIDIA                    | Produzione | 13/05/2026 | 30/06/2027 | No  |                      |
| bge-m3:567m                           | BAAI                      | Produzione | 18/10/2025 | 30/12/2027 | Sì  |                      |
| gpt-oss:120b                          | OpenAI                    | Produzione | 11/11/2025 | 30/12/2027 | Sì  |                      |
| granite-embedding:278m                | IBM                       | Produzione | 13/06/2025 | 30/12/2027 | Sì  |                      |
| llama3.3:70b                          | Meta                      | Produzione | 13/06/2025 | 30/12/2027 | Sì  |                      |
| qwen3-2507:235b                       | Qwen Team                 | Produzione | 04/01/2026 | 30/12/2027 | Sì  |                      |
| qwen3-2507-think:4b                   | Qwen Team                 | Produzione | 31/08/2025 | 30/12/2027 | Sì  |                      |

### Legenda

- **Phase**: Ciclo di vita del modello (Valutazione, Produzione, Deprecato)
- **DMP**: Data di Messa in Produzione
- **DSP**: Data di Dismissione Prevista
- **LTS**: Long Term Support. I modelli LTS beneficiano di una stabilità garantita e di un supporto esteso, ideale per le applicazioni critiche.
- **Migration consigliata**: Modello raccomandato per sostituire un modello a fine vita.

Per monitorare lo stato del ciclo di vita in tempo reale, consulta la pagina : [LLMaaS Status - Ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle)

---

## Modelli Deprecati

Il mondo degli LLM evolve molto rapidamente. Per garantire ai nostri clienti l'accesso alle tecnologie più performanti, depreciamo regolarmente i modelli che non sono più all'altezza degli standard attuali o che non vengono utilizzati. I modelli elencati di seguito non sono più disponibili sulla piattaforma pubblica. Possono tuttavia essere riattivati per progetti specifici, su richiesta.

| Modello                   | Fase    | Data di Deprecazione |
| :----------------------- | :------- | :------------------- |
| devstral:24b             | Deprecato | 30/03/2026           |
| granite3.1-moe:2b        | Deprecato | 30/03/2026           |
| granite4-small-h:32b     | Deprecato | 15/05/2026           |
| granite4-tiny-h:7b       | Deprecato | 15/05/2026           |
| medgemma:27b             | Deprecato | 15/05/2026           |
| qwen3-2507-gptq:235b     | Deprecato | 15/05/2026           |
| qwen3-coder:30b          | Deprecato | 30/03/2026           |
| qwen3:30b-a3b            | Deprecato | 30/03/2026           |
| deepseek-r1:14b          | Deprecato | 30/12/2025           |
| deepseek-r1:32b          | Deprecato | 30/12/2025           |
| gemma3:1b                | Deprecato | 30/12/2025           |
| gemma3:4b                | Deprecato | 30/12/2025           |
| qwen3:1.7b               | Deprecato | 30/12/2025           |
| qwen3:14b                | Deprecato | 30/12/2025           |
| qwen3:4b                 | Deprecato | 30/12/2025           |
| qwen3:8b                 | Deprecato | 30/12/2025           |
| qwen3:32b                | Deprecato | 30/12/2025           |
| qwq:32b                  | Deprecato | 30/12/2025           |
| granite3.3:2b            | Deprecato | 30/12/2025           |
| granite3.3:8b            | Deprecato | 30/12/2025           |
| mistral-small3.1:24b     | Deprecato | 30/12/2025           |
| qwen2.5vl:32b            | Deprecato | 30/12/2025           |
| qwen2.5vl:3b             | Deprecato | 30/12/2025           |
| qwen2.5vl:72b            | Deprecato | 30/12/2025           |
| qwen2.5vl:7b             | Deprecato | 30/12/2025           |
| cogito:8b                | Deprecato | 30/12/2025           |
| deepcoder:14b            | Deprecato | 30/12/2025           |
| cogito:3b                | Deprecato | 30/12/2025           |
| qwen3:235b               | Deprecato | 22/11/2025           |
| qwen3-2507-think:30b-a3b | Deprecato | 14/11/2025           |
| gemma3:12b               | Deprecato | 21/11/2025           |
| cogito:14b               | Deprecato | 17/10/2025           |
| deepseek-r1:70b          | Deprecato | 17/10/2025           |
| granite3.1-moe:3b        | Deprecato | 17/10/2025           |
| llama3.1:8b              | Deprecato | 17/10/2025           |
| phi4-reasoning:14b       | Deprecato | 17/10/2025           |
| qwen2.5:0.5b             | Deprecato | 17/10/2025           |
| qwen2.5:1.5b             | Deprecato | 17/10/2025           |
| qwen2.5:14b              | Deprecato | 17/10/2025           |
| qwen2.5:32b              | Deprecato | 17/10/2025           |
| qwen2.5:3b               | Deprecato | 17/10/2025           |
| deepseek-r1:671b         | Deprecato | 17/10/2025           |

## 💡 Buone Pratiche

Per sfruttare al meglio l'API LLMaaS, è essenziale adottare strategie di ottimizzazione dei costi, delle prestazioni e della sicurezza.

### Ottimizzazione dei Costi

Il controllo dei costi si basa su un utilizzo intelligente dei token e dei modelli.

1.  **Scelta del Modello** : Non utilizzare un modello eccessivamente potente per un compito semplice. Un modello più grande è più capace, ma è anche più lento e consuma molta più energia, il che impatta direttamente sul costo. Adatta la dimensione del modello alla complessità della tua esigenza per un equilibrio ottimale.

    Ad esempio, per elaborare un milione di token :
    - **`Gemma 3 1B`** consuma **0.15 kWh**.
    - **`Llama 3.3 70B`** consuma **11.75 kWh**, ovvero **78 volte di più**.

        ```python
        # Per una classificazione del sentiment, un modello compatto è sufficiente ed economico.
        if task == "sentiment_analysis":
            model = "qwen3.5:0.8b"
        # Per un'analisi giuridica complessa, è necessario un modello più grande.
        elif task == "legal_analysis":
            model = "gpt-oss:120b"
        ```

2.  **Gestione del Contesto** : La cronologia della conversazione (`messages`) viene inviata a ogni chiamata, consumando token in input. Per conversazioni lunghe, valuta strategie di riassunto o di finestra scorrevole per conservare solo le informazioni pertinenti.
        ```python
        # Per una conversazione lunga, è possibile riassumere i primi scambi.
        messages = [
            {"role": "system", "content": "Vous êtes un assistant IA."},
            {"role": "user", "content": "Résumé des 10 premiers échanges..."},
            {"role": "assistant", "content": "Ok, j'ai le contexte."},
            {"role": "user", "content": "Voici ma nouvelle question."}
        ]
        ```

3.  **Limitazione dei Token in Output** : Utilizza sempre il parametro `max_tokens` per evitare risposte eccessivamente lunghe e costose. Imposta un limite ragionevole in base a ciò che ti aspetti.
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

2.  **Streaming per l'Esperienza Utente (UX)** : Per le interfacce utente (chatbot, assistenti), lo streaming è essenziale. Consente di visualizzare la risposta del modello parola per parola, offrendo un'impressione di reattività immediata invece di attendere la risposta completa.
    ```python
    # Visualizza la risposta in tempo reale in un'interfaccia utente
    response_stream = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Raconte-moi une histoire."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Visualizza il frammento di testo nell'interfaccia utente
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Sicurezza

La sicurezza della tua applicazione è fondamentale, soprattutto quando si gestiscono gli input degli utenti.

1.  **Validazione e Pulizia degli Input (Sanitization)** : Non fidatevi mai degli input degli utenti. Prima di inviarli all'API, sanizzateli per rimuovere qualsiasi codice potenzialmente dannoso o istruzioni di "prompt injection". Limitate inoltre la loro dimensione per evitare abusi.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Esempio semplice: rimuovere i delimitatori di codice e limitare la lunghezza.
        # Possono essere utilizzate librerie più robuste per una sanitization avanzata.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limita la dimensione a 2000 caratteri
    ```

2.  **Gestione Robusta degli Errori** : Incorniciate sempre le chiamate API in blocchi `try...except` per gestire gli errori di rete, gli errori dell'API (es: 429 Rate Limit, 500 Internal Server Error) e fornire un'esperienza utente degradata ma funzionale.
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