---
title: Catalogo dei Modelli LLMaaS
sidebar_position: 2
---

# Catalogo dei Modelli LLM come Servizio

## Panoramica

Cloud Temple LLMaaS propone **45 modelli di linguaggio su larga scala** selezionati e ottimizzati con cura per rispondere alle esigenze **SecNumCloud** più rigorose. Il catalogo copre l'intero spettro, dai micro-modelli estremamente efficienti ai modelli estremamente grandi.

### Statistiche globali

| Metrica | Valore |
|----------|--------|
| **Numero totale di modelli** | 45 modelli |
| **Contesto minimo** | 8 192 token |
| **Contesto massimo** | 128 000 token |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranità ✅ C5 ❌ |
| **Localizzazione** | 100% Francia 🇫🇷 |

### Tariffa

| Tipo di utilizzo | Prezzo |
|-------------------|--------|
| **Token di input** | 0,9€ / milione di token |
| **Token di output** | 4€ / milione di token |
| **Ragionamento avanzato** | 21€ / milione di token |

## Modelli di Grande Dimensione

### Llama 3.3 70B  
**Meta • 70B parametri • Contesto : 60 000 token**  

Modello multilingue di punta sviluppato da Meta, progettato per eccellere nel dialogo naturale, nel ragionamento complesso e nella comprensione sottile delle istruzioni.  

**Specifiche tecniche :**  
- **Velocità** : 26 token/secondo  
- **Consumo** : 11,75 kWh/milione di token  
- **Licenza** : Licenza Community LLAMA 3.3  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Agent` `Dialogo` `Multilingue`  

**Casi d'uso :**  
- Chatbot multilingue che supportano 8 lingue contemporaneamente  
- Esecuzione di istruzioni complesse concatenate (prompt chaining)  
- Elaborazione di una finestra di dialogo di 60K token per storico di conversazione  
- Analisi di documenti giuridici o tecnici di grandi dimensioni (>100 pagine)  
- Generazione di testi strutturati con fedeltà alle istruzioni stilistiche

### Qwen3 235B
**Team Qwen • 235B parametri • Contesto: 60.000 token**

Modello molto grande della nuova generazione Qwen3, che offre capacità estese per le attività più complesse.

**Specifiche tecniche:**
- **Velocità**: 17 token/secondo
- **Consumo**: 7,84 kWh/milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags:** `Agente` `Ragionamento` `Multilingue` `Molto Grande`

**Casi d'uso:**
- Agenti conversazionali molto avanzati con ampio contesto e integrazione di strumenti (MCP)
- Risoluzione di problemi estremamente complessi (matematica, codice)
- Analisi e generazione di documenti molto voluminosi e tecnici
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione e una generazione di alta fedeltà

### DeepSeek-R1 671B  
**DeepSeek AI • 671B parametri • Contesto: 16 000 token**  

Modello estremamente grande di DeepSeek AI, progettato per il massimo ragionamento e generazione.  

**Specifiche tecniche:**  
- **Velocità:** 12 token/secondo  
- **Consumo:** 11,11 kWh/milione di token  
- **Licenza:** Licenza MIT  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tag:** `Ragionamento` `Estremamente Grande`  

**Casi d'uso:**  
- Compiti di ragionamento di punta  
- Generazione di testo di alta qualità  
- Ricerca e sviluppo in IA  

---

### Gemma 3 27B  
**Google • 27B parametri • Contesto: 120.000 token**  

Modello rivoluzionario di Google che offre un equilibrio ottimale tra potenza ed efficienza, con un rapporto prestazioni/costo eccezionale per applicazioni professionali esigenti.  

**Specifiche tecniche :**  
- **Velocità** : 20 token/secondo  
- **Consumo** : 6,67 kWh/milione di token  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Visione` `Agente` `Grande contesto`  

**Casi d'uso :**  
- Analisi di documenti con contesto esteso fino a 120.000 token (circa 400 pagine)  
- Indicizzazione e ricerca semantica in basi documentarie di grandi dimensioni  
- Elaborazione di immagini e testo contemporaneamente grazie alle capacità multimodali  
- Estrazione strutturata dei dati da PDF e documenti scansionati  
- Integrazione con strumenti esterni tramite l'API di chiamata di funzione

### Qwen3 30B-A3B FP8  
**Qwen Team • 30B-A3B parametri • Contesto: 32.000 token**  

Modello MoE FP8 (3B attivati) di nuova generazione, con modalità di pensiero ibride e capacità avanzate di agente.  

**Specifiche tecniche:**  
- **Velocità:** 106 token/secondo ⚡  
- **Consumo:** 2,88 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `MoE` `Agente` `Ragionamento` `Veloce` `Multilingue`  

**Casi d'uso:**  
- Agenti conversazionali avanzati con integrazione di strumenti (MCP)  
- Risoluzione di problemi complessi (matematica, codice) con modalità "Thinking"  
- Applicazioni multilingue (>100 lingue)  
- Scenari che richiedono un equilibrio costo/prestazioni (MoE) su VLLM  
- Dialoghi multi-turno coinvolgenti e seguito preciso delle istruzioni

### DeepSeek-R1 70B
**DeepSeek AI • 70B parametri • Contesto: 32 000 token**

Modello 70B di DeepSeek AI

**Specifiche tecniche:**
- **Velocità** : 21 token/secondo token/secondo
- **Consumo** : 12,56 kWh/milione di token
- **Licenza** : Licenza MIT
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Ragionamento` `Large`

**Casi d'uso:**
- Compiti di ragionamento di punta
- Generazione di testo di alta qualità
- Ricerca e sviluppo nell'IA

### Qwen2.5-VL 32B  
**Qwen Team • 32B parametri • Contesto: 120.000 token**  

La versione più potente della serie Qwen2.5-VL, che offre capacità di comprensione visiva e di agenzia di punta.  

**Specifiche tecniche:**  
- **Velocità** : 18 token/secondo  
- **Consumo** : 7,41 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Visione` `Agente` `Ragionamento` `OCR` `Localizzazione Visiva` `Large`  

**Casi d'uso:**  
- Analisi di documenti e diagrammi molto complessi  
- Agenti visivi autonomi per la navigazione e l'interazione con le GUI  
- Compiti di localizzazione degli oggetti e riconoscimento del testo ad alta precisione  
- Generazione di descrizioni ricche e dettagliate a partire da immagini complesse

### Qwen2.5-VL 72B  
**Qwen Team • 72B parametri • Contesto: 128 000 token**  

Versione più potente della serie Qwen2.5-VL, con capacità di comprensione visiva e di agenzia di punta per compiti estremamente complessi.  

**Specifiche tecniche:**  
- **Velocità:** 15 token/secondo  
- **Consumo:** 8,89 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** IT 🇮🇹  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Visione` `Agente` `Ragionamento` `OCR` `Localizzazione Visiva` `Molto Grande`  

**Casi d'uso:**  
- Analisi di documenti e diagrammi estremamente complessi  
- Agenti visivi autonomi per la navigazione e l'interazione con GUI  
- Compiti di localizzazione di oggetti e riconoscimento di testo di alta precisione  
- Generazione di descrizioni ricche e dettagliate a partire da immagini complesse

## Modelli Specializzati

### Qwen3 14B
**Team Qwen • 14B parametri • Contesto: 32.000 token**

Modello Qwen3 (14B) di nuova generazione, che offre prestazioni equivalenti a Qwen2.5 32B con una migliore efficienza.

**Specifiche tecniche:**
- **Velocità**: 68 token/secondi ⚡
- **Consumo**: 3,88 kWh/milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Ragionamento` `Veloce` `Multilingue`

**Casi d'uso:**
- Compiti generali che richiedono prestazioni e ampio contesto
- Generazione di contenuti creativi e tecnici
- Analisi dei dati e ragionamento complesso
- Integrazione con strumenti esterni tramite function calling

### Gemma 3 12B  
**Google • 12B parametri • Contesto: 120.000 token**  

Versione intermedia del modello Gemma 3 che offre un ottimo equilibrio tra prestazioni ed efficienza.  

**Specifiche tecniche:**  
- **Velocità** : 56 token/secondo ⚡  
- **Consumo** : 4,71 kWh/milione di token  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tag:** `Visione` `Veloce` `Grande Contesto`  

**Casi d'uso:**  
- Applicazioni multimodali con vincoli di risorse moderati  
- Elaborazione di documenti con contesto standard (fino a 100 pagine)  
- Generazione di contenuti testuali e analisi di immagini combinate  
- Deployment su GPU standard senza infrastruttura specializzata  
- Chatbot avanzati con capacità visive e testuali integrate

### Gemma 3 4B  
**Google • 4B parametri • Contesto: 120 000 token**  

Modello compatto di Google che offre ottime prestazioni in un formato leggero ed economico.  

**Specifiche tecniche:**  
- **Velocità** : 57 token/secondo ⚡  
- **Consumo** : 0.58 kWh/milione di token 🌱  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Visione` `Veloci` `Compatto` `Grande Contesto` `Efficiente`  

**Casi d'uso:**  
- Applicazioni embedded e edge computing con elaborazione delle immagini  
- Chatbot multimodali reattivi che richiedono bassa latenza  
- Deployamenti su larga scala con capacità visive e testuali  
- Applicazioni mobili con analisi di immagini e testi  
- Elaborazione di richieste visive semplici a media complessità con alte prestazioni

### Gemma 3 1B  
**Google • 1B parametri • Contesto: 32 000 token**  

Micro-modello estremamente leggero progettato per deployamenti su dispositivi con risorse molto limitate.  

**Specifiche tecniche:**  
- **Velocità** : 112 token/secondo ⚡  
- **Consumo** : 0,15 kWh/milione di token 🌱  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : IT 🇮🇹  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Ultra-compact` `Embedded` `Efficiente` `Veloci`  

**Casi d'uso:**  
- Deployamento su dispositivi IoT e sistemi embedded con integrazione API  
- Applicazioni che richiedono inferenza locale su CPU con chiamate a funzioni  
- Compiti testuali di base con risposta istantanea e chiamate a funzioni  
- Assistenti compatti per applicazioni di massa con integrazione di servizi esterni  
- Sistemi di controllo intelligenti che integrano diverse API/servizi

### Lucie-7B-Instruct  
**OpenLLM-France • 7B parametri • Contesto: 32.000 token**  

Modello multilingue open-source (7B), finetunato da Lucie-7B. Ottimizzato per il francese.  

**Specifiche tecniche:**  
- **Velocità** : 4 token/secondo token/secondo  
- **Consumo** : 8,33 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Etichette:** `Francese` `Open-Source` `Efficiente`

### Mistral Small 3.1  
**Mistral AI • 24B parametri • Contesto : 120 000 token**  

Modello compatto e reattivo di Mistral AI, progettato specificamente per offrire un'assistenza conversazionale fluida e rilevante con una velocità di risposta ottimale.  

**Specifiche tecniche :**  
- **Velocità** : 35 token al secondo  
- **Consumo** : 3,72 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags :** `Visione` `Agente` `Sicurezza`  

**Casi d'uso :**  
- Applicazioni conversazionali  
- Assistenti virtuali che combinano analisi delle immagini e testo (26 token/s)  
- Chatbot di supporto tecnico con accesso alla documentazione tecnica  
- Strumenti di creazione/produzione di contenuti con risposta immediata (blog, email)  
- Distribuzione su infrastrutture standard (24B di parametri)

### Mistral Small 3.2  
**Mistral AI • 24B parametri • Contesto: 120 000 token**  

Aggiornamento minore di Mistral Small 3.1, che migliora il tracciamento delle istruzioni, la robustezza del function calling e riduce gli errori di ripetizione.  

**Specifiche tecniche:**  
- **Velocità:** 35 token/secondo  
- **Consumo:** 3,72 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Etichette:** `Visione` `Agente` `Sicurezza` `Seguimento delle istruzioni`  

**Casi d'uso:**  
- Agenti conversazionali con un tracciamento delle istruzioni migliorato  
- Integrazione robusta con strumenti esterni tramite function calling  
- Applicazioni che richiedono una grande affidabilità per evitare ripetizioni  
- Casi d'uso identici a Mistral Small 3.1 con prestazioni migliorate  

---

### DeepCoder  
**Agentica x Together AI • 14B parametri • Contesto: 32.000 token**  

Modello IA open source (14B) di Together AI & Agentica, alternativa credibile ai modelli proprietari per la generazione di codice.  

**Specifiche tecniche:**  
- **Velocità** : 64 token/secondo ⚡  
- **Consumo** : 4,12 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Programmazione` `Ragionamento` `Open-Source` `Matematica` `Veloce`  

**Casi d'uso:**  
- Generazione di codice in più di 15 linguaggi con ottimizzazione delle prestazioni  
- Debugging e refactoring di basi di codice esistenti con analisi dell'impatto  
- Implementazione di algoritmi complessi (grafici, alberi, euristici)  
- Creazione automatica di test unitari con copertura del codice > 80%  
- Trasposizione di codice tra linguaggi/frameworks (ad esempio Python verso JavaScript)

### Granite 3.2 Vision  
**IBM • 2B parametri • Contesto: 16 384 token**  

Modello compatto rivoluzionario di IBM specializzato nella visione artificiale, in grado di analizzare e comprendere direttamente i documenti visivi senza ricorrere a tecnologie OCR intermedie.  

**Specifiche tecniche:**  
- **Velocità:** 48 token/secondo  
- **Consumo:** 0.69 kWh/milione di token 🌱  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags:** `Visione` `Sicurezza` `Compatto` `Efficiente`  

**Casi d'uso:**  
- Estrazione di dati strutturati da fatture e moduli senza OCR  
- Analisi diretta di tabelle e grafici con interpretazione delle tendenze  
- Lettura e interpretazione di diagrammi tecnici (elettrici, meccanici)  
- Elaborazione di documenti manoscritti con alto tasso di riconoscimento  
- Visione artificiale leggera (2B parametri) con velocità elevata (50 token/s)

### Granite 3.3 8B  
**IBM • 8B parametri • Contesto: 60 000 token**  

Modello Granite 8B ottimizzato da IBM per un ragionamento e un seguito di istruzioni migliorati, con un contesto di 128k token.  

**Specifiche tecniche:**  
- **Velocità** : 30 token al secondo  
- **Consumo** : 1,11 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza  

**Tags :** `Agent` `Ragionamento` `Sicurezza` `Efficiente`  

**Casi d'uso:**  
- Compiti generali di seguito di istruzioni (classificazione, estrazione, Q&A)  
- Assistenti IA multilingue (12 lingue)  
- Elaborazione di documenti molto lunghi (128k token) per compiti di riassunti, Q&A,...  
- Generazione/completo di codice con Fill-in-the-Middle  
- Integrazione con strumenti esterni tramite chiamata di funzione  
- Ragionamento strutturato con la modalità "Thinking"

### Granite 3.3 2B  
**IBM • 2B parametri • Contesto: 120.000 token**  

Modello Granite 2B ottimizzato da IBM, progettato per il ragionamento e il follow-up delle istruzioni, con un contesto di 128k token.  

**Specifiche tecniche:**  
- **Velocità** : 45 token/secondo  
- **Consumo** : 0.74 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza  

**Tags :** `Agente` `Ragionamento` `Sicurezza` `Efficiente`  

**Casi d'uso:**  
- Distribuzioni leggere con grande contesto (128k token)  
- Compiti di follow-up di istruzioni generali su risorse limitate  
- Assistenti IA multilingue compatti  
- Elaborazione di documenti lunghi su dispositivi meno potenti  
- Generazione/completamento di codice FIM su postazioni di lavoro standard

### Mistral 24B  
**Mistral AI • 24B parametri • Contesto: 40.000 token**  

Il primo modello di ragionamento di Mistral AI, eccellente nel ragionamento specifico del dominio, trasparente e multilingue.  

**Specifiche tecniche:**  
- **Velocità** : 25 token/secondo  
- **Consumo** : 5,33 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza  

**Tags:** `Ragionamento` `Multilingue`  

**Casi d'uso:**  
- Strategia e operazioni commerciali (modellazione dei rischi)  
- Industrie regolamentate (giuridico, finanza) con ragionamento tracciabile  
- Ingegneria del software (pianificazione del progetto, architettura)  
- Creazione di contenuti e comunicazione (scrittura creativa, narrazione)

### Granite 3.1 MoE  
**IBM • 3B parametri • Contesto: 32.000 token**  

Modello innovativo di IBM che utilizza l'architettura Mixture-of-Experts (MoE) per offrire prestazioni eccezionali e ottimizzare in modo drastico l'utilizzo delle risorse computazionali.  

**Specifiche tecniche:**  
- **Velocità:** 74 token/secondo ⚡  
- **Consumo:** 0,45 kWh/milione di token 🌱  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags:** `Agente` `Sicurezza` `Veloci` `MoE` `Efficienza` `Efficiente`  

**Casi d'uso:**  
- Applicazioni generaliste con costo di inferenza ottimizzato (42 token/secondo)  
- Elaborazione di documenti in ambienti CPU con utilizzo RAM limitato  
- Analisi specializzate con attivazione dinamica delle parti rilevanti del modello  
- Deployamenti ad alta densità con basso consumo energetico per inferenza  
- Elaborazione parallela di diversi tipi di richieste con specializzazione MoE

### cogito:14b  
**Deep Cogito • 14B parametri • Contesto: 32.000 token**  

Modello Deep Cogito progettato specificamente per eccellere nei compiti di ragionamento profondo e comprensione contestuale sottile, ideale per applicazioni analitiche avanzate.  

**Specifiche tecniche:**  
- **Velocità** : 60 token/secondo ⚡  
- **Consumo** : 4,4 kWh/milione di token  
- **Licenza** : Licenza Community LLAMA 3.2  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Agent` `Ragionamento` `Comprensione` `Analisi` `Veloci`  

**Casi d'uso:**  
- Analisi semantica di testi con identificazione delle implicazioni non esplicite  
- Ragionamento causale strutturato con identificazione delle relazioni causa-effetto  
- Sintesi di documenti complessi con estrazione delle informazioni chiave  
- Sistemi di domande-risposte precisi su corpora documentari specializzati  
- Analisi argomentativa con valutazione della solidità dei ragionamenti

### Cogito 32B  
**Deep Cogito • 32B parametri • Contesto: 32 000 token**  

Versione avanzata del modello Cogito che offre capacità di ragionamento e analisi notevolmente amplificate, progettata per le applicazioni più esigenti in termini di intelligenza artificiale analitica.  

**Specifiche tecniche:**  
- **Velocità** : 32 token/secondo  
- **Consumo** : 8,25 kWh/milione di token  
- **Licenza** : Licenza Comunitaria LLAMA 3.2  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Agente` `Ragionamento` `Comprensione` `Analisi`  

**Casi d'uso:**  
- Analisi di scenari multi-fattoriali con valutazione probabilistica dei risultati  
- Risoluzione di problemi scientifici con dimostrazione formale dei passaggi  
- Applicazioni ad alta criticità che richiedono precisione e verificabilità dei risultati  
- Sistemi esperti in ambiti specializzati (giuridico, medico, tecnico)  
- Analisi con ragionamento a più livelli e spiegabilità completa delle conclusioni

### Qwen3 32B  
**Qwen Team • 32B parametri • Contesto: 40.000 token**  

Modello potente della nuova generazione Qwen3, che offre capacità avanzate in ragionamento, codice e agenti, con un contesto esteso.  

**Specifiche tecniche:**  
- **Velocità:** 18 token/secondo token/secondo  
- **Consumo:** 7,41 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Agente` `Ragionamento` `Multilingue` `Grande Contesto`  

**Casi d'uso:**  
- Agenti conversazionali avanzati con grande contesto e integrazione di strumenti (MCP)  
- Risoluzione di problemi complessi (matematica, codice) con il modo "Thinking"  
- Analisi e generazione di documenti voluminosi  
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione approfondita

### QwQ-32B  
**Qwen Team • 32B parametri • Contesto: 32 000 token**  

Modello da 32 miliardi di parametri migliorato con apprendimento per rinforzo (RL) per eccellere nel ragionamento, nella codifica, nelle matematiche e nei compiti dell'agente.  

**Specifiche tecniche:**  
- **Velocità:** 35 token al secondo  
- **Consumo:** 7,54 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Posizione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tag:** `Agente` `Ragionamento` `Codifica` `Matematica`  

**Casi d'uso:**  
- Risoluzione di problemi complessi che richiedono ragionamento e utilizzo di strumenti  
- Generazione ed esecuzione di codice con verifica dei risultati  
- Compiti matematici avanzati con verifica dell'esattezza  
- Applicazioni di agente in grado di interagire con l'ambiente  
- Seguimento delle istruzioni migliorato e allineamento con le preferenze umane

### DeepSeek-R1 14B  
**DeepSeek AI • 14B parametri • Contesto: 32.000 token**  

Versione compatta ed efficiente del modello DeepSeek-R1, che offre un ottimo equilibrio tra prestazioni e leggerezza per le implementazioni che richiedono flessibilità e reattività.  

**Specifiche tecniche:**  
- **Velocità:** 62 token/secondo ⚡  
- **Consumo:** 4,26 kWh/milione di token  
- **Licenza:** MIT license  
- **Localizzazione:** IT 🇮🇹  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Ragionamento` `Compact` `Polivalente` `Veloci`  

**Casi d'uso:**  
- Applicazioni generaliste con esigenze di inferenza rapida (44 token/s)  
- Implementazioni su server standard senza GPU dedicata (14B parametri)  
- Elaborazione testi con analisi contestuale e tempi di risposta rapidi  
- Implementazione su edge computing con inferenza locale ottimizzata  
- Prototipazione rapida di applicazioni IA con tempi di iterazione brevi

### DeepSeek-R1 32B  
**DeepSeek AI • 32B parametri • Contesto: 32.000 token**  

Versione intermedia del modello DeepSeek-R1 che offre un equilibrio strategico tra le avanzate capacità della versione 70B e l'efficienza della versione 14B, per una versatilità e prestazioni ottimali.  

**Specifiche tecniche:**  
- **Velocità** : 33 token/secondo  
- **Consumo** : 7,99 kWh/milione di token  
- **Licenza** : MIT licenza  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Ragionamento` `Versatile`  

**Casi d'uso:**  
- Applicazioni che richiedono un buon equilibrio tra potenza e costo (32B parametri)  
- Elaborazione del testo professionale con analisi delle sottili sfumature semantiche  
- Generazione automatica di rapporti strutturati a partire da dati grezzi  
- Applicazioni che combinano analisi dei dati e generazione di contenuti  
- Assistenti specializzati per settori tecnici (giuridico, medico, tecnico)

### Cogito 3B
**Deep Cogito • 3B parametri • Contesto : 32 000 tokens**

Versione compatta del modello Cogito, ottimizzata per il ragionamento su dispositivi con risorse limitate.

**Specifiche tecniche :**
- **Velocità** : 55 tokens/seconde ⚡
- **Consumo** : 0.61 kWh/million tokens 🌱
- **Licenza** : LLAMA 3.2 Community Licence
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Ragionamento` `Compatta` `Embedded` `Efficiente` `Veloci`

### Granite Embedding  
**IBM • 278M parametri • Contesto: 512 token**  

Modello di embedding estremamente leggero di IBM per la ricerca semantica e la classificazione.  

**Specifiche tecniche:**  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tag :** `Embedding` `Compatto` `Semantico` `Efficiente`

### Granite 3 Guardian 2B  
**IBM • 2B parametri • Contesto: 8 192 token**  

Modello compatto IBM specializzato nella sicurezza e nel rispetto delle normative, che rileva i rischi e i contenuti inappropriati.  

**Specifiche tecniche:**  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tag:** `Sicurezza` `Conformità` `Compatto` `Filtraggio` `Efficiente`

### Granite 3 Guardian 8B  
**IBM • 8 miliardi di parametri • Contesto: 32.000 token**  

Modello IBM specializzato nella sicurezza e nel rispetto delle normative, con avanzate capacità di rilevamento dei rischi.  

**Specifiche tecniche:**  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tag :** `Sicurezza` `Conformità` `Filtraggio`

### Qwen 2.5 0.5B  
**Qwen Team • 0.5B parametri • Contesto: 32.000 token**  

Micro-modello estremamente leggero della famiglia Qwen 2.5, progettato per un'efficienza massima su dispositivi limitati.  

**Specifiche tecniche:**  
- **Velocità** : 162 token/secondo ⚡  
- **Consumo** : 0,1 kWh/milione di token 🌱  
- **Licenza** : MIT license  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Ultra-compacto` `Veloce` `Incorporato` `Efficiente`

### Qwen 2.5 1.5B  
**Qwen Team • 1.5B parametri • Contesto: 32.000 token**  

Modello molto compatto della famiglia Qwen 2.5, che offre un buon equilibrio tra prestazioni e dimensioni per implementazioni leggere.  

**Specifiche tecniche:**  
- **Velocità** : 102 token al secondo ⚡  
- **Consumo** : 0,33 kWh/milione di token 🌱  
- **Licenza** : MIT licenza  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Compatto` `Veloci` `Incorporato` `Efficiente`

### Qwen 2.5 14B
**Team Qwen • 14B parametri • Contesto: 32.000 token**

Modello polivalente di dimensione media della famiglia Qwen 2.5, buon equilibrio tra prestazioni e risorse.

**Specifiche tecniche:**
- **Velocità** : 61 token/secondo ⚡
- **Consumo** : 4,33 kWh/milione di token
- **Licenza** : MIT
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Polivalente` `Multilingue` `Veloce`

### Qwen 2.5 32B
**Qwen Team • 32B parametri • Contesto: 32 000 token**

Modello potente della famiglia Qwen 2.5, che offre capacità avanzate in comprensione e generazione.

**Specifiche tecniche:**
- **Velocità** : 31 token/secondo token/secondo
- **Consumo** : 8,51 kWh/milione di token
- **Licenza** : MIT License
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags:** `Polivalente` `Multilingue` `Ragionamento`

### Qwen 2.5 3B
**Qwen Team • 3B parametri • Contesto : 32 000 token**

Modello compatto ed efficiente della famiglia Qwen 2.5, adatto alle attività generali su risorse limitate.

**Specifiche tecniche :**
- **Velocità** : 64 token/secondo ⚡
- **Consumo** : 0.52 kWh/milione di token 🌱
- **Licenza** : MIT license
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compatto` `Veloce` `Polivalente` `Efficiente`

### Qwen3 0.6b  
**Qwen Team • 0.6B parametri • Contesto: 32 000 token**  

Modello compatto ed efficiente della famiglia Qwen3, adatto alle attività generali su risorse limitate.  

**Specifiche tecniche:**  
- **Velocità** : 112 token/secondo ⚡  
- **Consumo** : 0.15 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : IT 🇮🇹  

**Capacità :**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Compatto` `Veloce` `Polivalente` `Efficiente`

### Qwen3 1.7b  
**Qwen Team • 1.7B parametri • Contesto: 32.000 token**  

Modello molto compatto della famiglia Qwen3, che offre un buon equilibrio tra prestazioni e dimensioni per i deployment leggeri.  

**Specifiche tecniche:**  
- **Velocità** : 88 token/secondo ⚡  
- **Consumo** : 0.38 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : IT 🇮🇹  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Compatto` `Veloce` `Incorporato` `Efficiente`

### Qwen3 4b  
**Qwen Team • 4B parametri • Contesto: 32.000 token**  

Modello compatto della famiglia Qwen3 che offre ottime prestazioni in un formato leggero ed economico.  

**Specifiche tecniche:**  
- **Velocità** : 49 token al secondo  
- **Consumo** : 0.68 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Compatto` `Efficiente`

### Qwen3 8b  
**Qwen Team • 8B parametri • Contesto: 32.000 token**  

Modello Qwen3 8B che offre un buon equilibrio tra prestazioni ed efficienza per i compiti generici.  

**Specifiche tecniche:**  
- **Velocità** : 33 token/secondo  
- **Consumo** : 1.01 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Ragionamento` `Agente` `Multilingue` `Efficiente`

### Qwen2.5-VL 3B  
**Qwen Team • 3.8B parametri • Contesto: 128 000 token**  

Modello Vision-Langage compatto, soluzione performante per l'AI in edge (edge AI).  

**Specifiche tecniche:**  
- **Velocità** : 65 token/secondo ⚡  
- **Consumo** : 0.51 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Visione` `Agente` `Ragionamento` `Veloce` `Efficiente` `OCR` `Localizzazione Visiva` `Edge AI`

### Qwen2.5-VL 7B  
**Qwen Team • 7B (8.3B) parametri • Contesto: 128 000 token**  

Modello Vision-Langage performante, che supera GPT-4o-mini su alcune attività.  

**Specifiche tecniche:**  
- **Velocità** : 35 token/secondo token/secondo  
- **Consumo** : 0.95 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Visione` `Agente` `Ragionamento` `Efficiente` `OCR` `Localizzazione Visiva`

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parametri • Contesto: 16 384 tokens**

Modello di linguaggio specializzato per la cybersecurity, ottimizzato per l'efficienza.

**Specifiche tecniche:**
- **Velocità** : 21 tokens/secondo tokens/secondo
- **Consumo** : 1.59 kWh/milione di tokens
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tags :** `Sicurezza` `Compact`

### devstral 24B  
**Mistral AI & All Hands AI • 24B parametri • Contesto: 120.000 token**  

Devstral è un LLM agente per compiti di ingegneria del software.  

**Specifiche tecniche:**  
- **Velocità** : 45 token al secondo  
- **Consumo** : 5,86 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags:** `Agent` `Programmazione` `Open Source` `Grande Contesto`  

**Casi d'uso:**  
- Esplorazione e modifica di basi di codice  
- Agentic  
- Europeo

### Cogito 8B
**Deep Cogito • 8B parametri • Contesto: 32.000 token**

Modello di dimensione intermedia della famiglia Cogito, che offre un buon equilibrio tra le capacità di ragionamento e l'efficienza.

**Specifiche tecniche:**
- **Velocità** : 30 token/secondo token/secondo
- **Consumo** : 1,11 kWh/milione di token 🌱
- **Licenza** : LLAMA 3.2 Community License
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agente` `Ragionamento` `Polivalente` `Efficiente`

### Llama 3.1 8B  
**Meta • 8B parametri • Contesto: 32 000 token**  

Modello base della famiglia Llama 3.1, con prestazioni solide per la sua dimensione.  

**Specifiche tecniche:**  
- **Velocità** : 31 token/secondo  
- **Consumo** : 1,08 kWh/milione di token 🌱  
- **Licenza** : Licenza Community Llama 3.1  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Polivalente` `Efficiente`

### Phi-4 Reasoning 14B  
**Microsoft • 14B parametri • Contesto: 32.000 token**  

Modello della famiglia Phi di Microsoft, specializzato nel ragionamento complesso e nella matematica.  

**Specifiche tecniche:**  
- **Velocità** : 71 token/secondo ⚡  
- **Consumo** : 3,71 kWh/milione di token  
- **Licenza** : Licenza MIT  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Ragionamento` `Matematica` `Programmazione` `Velocità`

## Esempi di Utilizzo Consigliati

### Dialogo multilingue  
Chatbot e assistenti in grado di comunicare in più lingue con rilevamento automatico, mantenimento del contesto durante l'intera conversazione e comprensione delle specificità linguistiche  

**Modelli consigliati :**  
- Llama 3.3  
- Mistral Small 3.1  
- Qwen 2.5  
- Granite 3.3

### Analisi di documenti lunghi
Elaborazione di documenti voluminosi (>100 pagine) con conservazione del contesto sull'intero testo, estrazione di informazioni chiave, generazione di riassunti rilevanti e risposta a domande specifiche sul contenuto

**Modelli consigliati:**
- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programmazione e sviluppo
Generazione e ottimizzazione di codice in molti linguaggi, debugging, refactoring, sviluppo di funzionalità complete, comprensione di implementazioni algoritmiche complesse e creazione di test unitari

**Modelli consigliati :**
- DeepCoder
- QwQ
- DeepSeek-R1
- Granite 3.3
- Devstral

### Analisi visiva
Elaborazione diretta di immagini e documenti visivi senza pre-elaborazione OCR, interpretazione di diagrammi tecnici, grafici, tabelle, disegni e foto con generazione di spiegazioni testuali dettagliate del contenuto visivo

**Modelli consigliati :**
- Granite 3.2 Vision
- Mistral Small 3.1
- Gemma 3
- Qwen2.5-VL

### Sicurezza e conformità
Applicazioni che richiedono capacità specifiche in materia di sicurezza; filtraggio del contenuto sensibile, tracciabilità dei ragionamenti, verifica RGPD/HDS, minimizzazione dei rischi, analisi delle vulnerabilità e rispetto delle normative settoriali

**Modelli consigliati:**
- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Magistral 24b
- Foundation-Sec-8B

### Distribuzioni leggere e incorporate  
Applicazioni che richiedono un'impronta minima in termini di risorse, distribuzione su dispositivi con capacità limitata, inferenza in tempo reale su CPU standard e integrazione in sistemi incorporati o IoT  

**Modelli consigliati:**  
- Gemma 3  
- Granite 3.1 MoE  
- Granite Guardian  
- Granite 3.3