

---
title: Catalogo dei Modelli LLMaaS
sidebar_position: 2
---



# Catalogo dei Modelli LLM come un Servizio



## Panoramica

Cloud Temple LLMaaS propone **51 modelli di linguaggio grandi** selezionati e ottimizzati con cura per soddisfare i requisiti più rigorosi di SecNumCloud. Il catalogo copre l'intero spettro, dai micro-modelli estremamente efficienti ai modelli estremamente grandi.



### Statistiche globali

| Metrica | Valore |
|----------|--------|
| **Numero totale di modelli** | 51 modelli |
| **Contesto minimo** | 8 192 token |
| **Contesto massimo** | 262 144 token |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranità ✅ C5 ❌ |
| **Localizzazione** | 100% Francia 🇫🇷 |



### Tariffa

| Tipo di utilizzo | Prezzo |
|-------------------|--------|
| **Token di input** | 0,9€ / milione di token |
| **Token di output** | 4€ / milione di token |
| **Ragionamento avanzato** | 21€ / milione di token |



## Modelli di Grande Dimensione



### gpt-oss:120b  
**OpenAI • 120B parametri • Contesto: 120.000 token**  

Modello di linguaggio open-weight di punta di OpenAI, che offre prestazioni solide con una licenza flessibile Apache 2.0.  

**Specifiche tecniche:**  
- **Velocità:** 38 token/secondo  
- **Consumo:** 3,51 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `MoE` `Agente` `Ragionamento` `Open-Source` `Molto Grande`  

**Casi d'uso:**  
- Agenti conversazionali avanzati con ragionamento complesso e integrazione di strumenti.  
- Applicazioni che richiedono una trasparenza totale del processo di ragionamento (chain-of-thought).  
- Scenari commerciali che richiedono una licenza permissiva (Apache 2.0).  
- Fine-tuning per compiti specializzati che necessitano di un modello base potente.



### llama3.3:70b  
**Meta • 70B parametri • Contesto: 120 000 token**  

Modello multilingue di punta sviluppato da Meta, progettato per eccellere nel dialogo naturale, nel ragionamento complesso e nella comprensione fine delle istruzioni.  

**Specifiche tecniche:**  
- **Velocità:** 15 token/secondo  
- **Consumo:** 8,89 kWh/milione di token  
- **Licenza:** Licenza Community LLAMA 3.3  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Agent` `Dialogo` `Multilingue`  

**Casi d'uso:**  
- Chatbot multilingue che supportano 8 lingue contemporaneamente  
- Esecuzione di istruzioni complesse concatenate (prompt chaining)  
- Elaborazione di una finestra di dialogo di 60.000 token per storico di conversazione  
- Analisi di documenti giuridici o tecnici voluminosi (>100 pagine)  
- Generazione di testi strutturati con fedeltà alle istruzioni stilistiche



### qwen3:235b
**Qwen Team • 235B parametri • Contesto: 60.000 token**

Modello molto grande della nuova generazione Qwen3, che offre capacità estese per le attività più complesse.

**Specifiche tecniche:**
- **Velocità** : 17 token al secondo ⚡
- **Consumo** : 7,84 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags:** `Agent` `Ragionamento` `Multilingue` `Molto Grande`

**Casi d'uso:**
- Agenti conversazionali molto avanzati con ampio contesto e integrazione di strumenti (MCP)
- Risoluzione di problemi estremamente complessi (matematica, codice)
- Analisi e generazione di documenti molto voluminosi e tecnici
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione e una generazione di alta fedeltà



### deepseek-r1:671b  
**DeepSeek AI • 671B parametri • Contesto : 16 000 token**  

Modello estremamente grande di DeepSeek AI, progettato per l'apice del ragionamento e della generazione.  

**Specifiche tecniche :**  
- **Velocità** : 12 token al secondo  
- **Consumo** : 11,11 kWh/milione di token  
- **Licenza** : Licenza MIT  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Ragionamento` `Estremamente Grande`  

**Casi d'uso :**  
- Compiti di ragionamento di punta  
- Generazione di testo di alta qualità  
- Ricerca e sviluppo nell'IA  

---



### gemma3:27b  
**Google • 27B parametri • Contesto: 120.000 token**  

Modello rivoluzionario di Google che offre un equilibrio ottimale tra potenza ed efficienza, con un rapporto prestazioni/costo eccezionale per applicazioni professionali esigenti.  

**Specifiche tecniche:**  
- **Velocità** : 20 token/secondo  
- **Consumo** : 6,67 kWh/milione di token  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Visione` `Agente` `Grande contesto`  

**Casi d'uso :**  
- Analisi di documenti con contesto esteso fino a 120.000 token (circa 400 pagine)  
- Indicizzazione e ricerca semantica in grandi basi di documenti  
- Elaborazione di immagini e testo in contemporanea grazie alle capacità multimodali  
- Estrazione strutturata di dati da PDF e documenti scansionati  
- Integrazione con strumenti esterni tramite la chiamata di funzione dell'API



### qwen3-coder:30b  
**Qwen Team • 30B parametri • Contesto: 250.000 token**  

Modello MoE ottimizzato per compiti di ingegneria del software, con un contesto molto lungo.  

**Specifiche tecniche:**  
- **Velocità:** 80 token/secondo ⚡  
- **Consumo:** 3,3 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Agente` `Programmazione` `Grande Contesto` `MoE`  

**Casi d'uso:**  
- Agenti di ingegneria del software per esplorare e modificare basi di codice  
- Generazione di codice complesso con comprensione a livello di repository  
- Compiti di ragionamento su contesti estesi  
- Ottimizzazione del codice tramite apprendimento per rinforzo



### qwen3-2507-think:30b-a3b
**Qwen Team • 30B parametri • Contesto: 120.000 token**

Modello avanzato della famiglia Qwen3, ottimizzato per il ragionamento approfondito e i contesti estesi.

**Specifiche tecniche:**
- **Velocità** : 80 token/secondo ⚡
- **Consumo** : 3,3 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agente` `Ragionamento` `Grande Contesto`

**Casi d'uso :**
- Analisi di documenti molto grandi con ragionamento complesso.
- Agenti conversazionali con un history di conversazione esteso.
- Domande e risposte su grandi corpora testuali.
- Integrazione con strumenti esterni tramite function calling su grandi contesti.



### qwen3-2507:30b-a3b
**Qwen Team • 30B parametri • Contesto: 250.000 token**

Versione migliorata del modo non pensante di Qwen3-30B, con capacità generali, copertura delle conoscenze e allineamento utente migliorati.

**Specifiche tecniche:**
- **Velocità**: 90 token/secondo ⚡
- **Consumo**: 2,16 kWh/milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags:** `Agente` `Grande Contesto` `MoE` `Multilingue`

**Casi d'uso:**
- Compiti complessi che richiedono un tracciamento preciso delle istruzioni e un ragionamento logico.
- Applicazioni multilingue con una vasta copertura delle conoscenze.
- Generazione di testo di alta qualità per compiti aperti e soggettivi.
- Analisi di documenti molto voluminosi grazie al contesto di 250k token.



### qwen3:30b-a3b
**Qwen Team • 30 miliardi di parametri • Contesto: 32.000 token**

Ultima generazione dei modelli Qwen, che offre miglioramenti significativi in termini di dati di addestramento, architettura e ottimizzazione.

**Specifiche tecniche:**
- **Velocità** : 50 token al secondo
- **Consumo** : 3,89 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Programmazione` `Multilingue` `MoE`

**Casi d'uso :**
- Compiti di ragionamento complessi e generazione di codice.
- Applicazioni multilingue che richiedono una vasta copertura linguistica.
- Scenari che richiedono un buon equilibrio tra prestazioni ed efficienza delle risorse grazie all'architettura MoE.



### deepseek-r1:70b  
**DeepSeek AI • 70B parametri • Contesto: 32.000 token**  

Modello da 70B di DeepSeek AI  

**Specifiche tecniche:**  
- **Velocità:** 21 token/secondo  
- **Consumo:** 12,56 kWh/milione di token  
- **Licenza:** Licenza MIT  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Ragionamento` `Grande`  

**Casi d'uso:**  
- Compiti di ragionamento di punta  
- Generazione di testo di alta qualità  
- Ricerca e sviluppo in IA



### qwen2.5vl:32b
**Qwen Team • 32B parametri • Contesto : 120 000 token**

Versione più potente della serie Qwen2.5-VL, che offre capacità di comprensione visiva e agenti di punta.

**Specifiche tecniche :**
- **Velocità** : 18 token al secondo
- **Consumo** : 7,41 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Etichette :** `Visione` `Agente` `Ragionamento` `OCR` `Localizzazione Visiva` `Grande`

**Casi d'uso :**
- Analisi di documenti e diagrammi molto complessi
- Agenti visivi autonomi per la navigazione e l'interazione con le GUI
- Compiti di localizzazione di oggetti e riconoscimento di testo ad alta precisione
- Generazione di descrizioni ricche e dettagliate a partire da immagini complesse



### qwen2.5vl:72b  
**Qwen Team • 72B parametri • Contesto: 128.000 token**  

Versione più potente della serie Qwen2.5-VL, offrendo capacità di comprensione visiva e di agenzia di punta per le attività più esigenti.  

**Specifiche tecniche:**  
- **Velocità** : 15 token al secondo  
- **Consumo** : 8,89 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Visione` `Agente` `Ragionamento` `OCR` `Localizzazione Visiva` `Molto Grande`  

**Casi d'uso:**  
- Analisi di documenti e diagrammi molto complessi  
- Agenti visivi autonomi per la navigazione e l'interazione con le GUI  
- Compiti di localizzazione di oggetti e riconoscimento di testo di alta precisione  
- Generazione di descrizioni ricche e dettagliate a partire da immagini molto complesse



## Modelli Specializzati



### embeddinggemma:300m  
**Google • 300M parametri • Contesto : 2 048 token**  

Modello di embedding di punta di Google, ottimizzato per le sue dimensioni, ideale per attività di ricerca e recupero semantico.  

**Specifiche tecniche :**  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Embedding` `Compatto` `Semantico` `Efficiente` `Multilingue`  

**Casi d'uso :**  
- Ricerca e recupero di informazioni (Retrieval)  
- Classificazione e clustering di documenti  
- Ricerca di similarità semantica  
- Distribuzione su dispositivi con risorse limitate (mobile, laptop)



### gpt-oss:20b  
**OpenAI • 20B parametri • Contesto: 120 000 token**  

Modello di linguaggio open-weight di OpenAI, ottimizzato per l'efficienza e il deployment su hardware di consumo.  

**Specifiche tecniche:**  
- **Velocità** : 57 token/secondo ⚡  
- **Consumo** : 2,34 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `MoE` `Agente` `Ragionamento` `Open-Source` `Compatto` `Veloce`  

**Casi d'uso:**  
- Distribuzioni su dispositivi con risorse limitate (edge devices) o server a basso costo.  
- Applicazioni che richiedono un'infelazione rapida con buone capacità di ragionamento.  
- Casi d'uso per agenti con chiamata di funzioni, navigazione web ed esecuzione di codice.  
- Fine-tuning per compiti specializzati su hardware di consumo.



### qwen3:14b  
**Qwen Team • 14B parametri • Contesto: 32.000 token**  

Modello di nuova generazione Qwen3 (14B), che offre prestazioni equivalenti a Qwen2.5 32B con una maggiore efficienza.  

**Specifiche tecniche:**  
- **Velocità:** 40 token/secondo ⚡  
- **Consumo:** 3,33 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Agente` `Ragionamento` `Veloce` `Multilingue`  

**Casi d'uso:**  
- Compiti generali che richiedono prestazioni e un ampio contesto  
- Generazione di contenuti creativi e tecnici  
- Analisi dei dati e ragionamento complesso  
- Integrazione con strumenti esterni tramite function calling



### gemma3:12b  
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
- Generazione di contenuti testuali e analisi combinata di immagini  
- Deployment su GPU standard senza infrastruttura specializzata  
- Chatbot avanzati con capacità visive e testuali integrate



### gemma3:4b  
**Google • 4B parametri • Contesto : 120 000 token**  

Modello compatto di Google che offre ottime prestazioni in un formato leggero ed economico.  

**Specifiche tecniche :**  
- **Velocità** : 57 token/secondo ⚡  
- **Consumo** : 0,58 kWh/milione di token 🌱  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : IT 🇮🇹  

**Capacità :**  
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Visione` `Veloce` `Compatto` `Grande Contesto` `Efficiente`  

**Casi d'uso :**  
- Applicazioni embedded e edge computing con elaborazione di immagini  
- Chatbot multimodali reattivi che richiedono bassa latenza  
- Deployamenti su larga scala con capacità visive e testuali  
- Applicazioni mobili con analisi di immagini e testi  
- Elaborazione di richieste visive di complessità semplice a media con alta prestazione



### gemma3:1b  
**Google • 1B parametri • Contesto: 32.000 token**  

Modello micro-ultraleggero progettato per distribuzioni su dispositivi con risorse estremamente limitate.  

**Specifiche tecniche:**  
- **Velocità** : 112 token/secondo ⚡  
- **Consumo** : 0,15 kWh/milione di token 🌱  
- **Licenza** : Google Gemma Terms of Use  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tag:** `Ultra-compacto` `Incorporato` `Efficiente` `Veloce`  

**Casi d'uso:**  
- Distribuzione su dispositivi IoT e sistemi incorporati con integrazione API  
- Applicazioni che richiedono inferenza locale su CPU con chiamate a funzioni  
- Compiti testuali base con risposta istantanea e chiamate a funzioni  
- Assistenti compatti per applicazioni di massa con integrazione di servizi esterni  
- Sistemi di controllo intelligente che integrano più API/servizi



### lucie-instruct:7b  
**OpenLLM-France • 7B parametri • Contesto: 32.000 token**  

Modello multilingue open-source (7B), fine-tunato da Lucie-7B. Ottimizzato per il francese.  

**Specifiche tecniche :**  
- **Velocità** : 4 token/secondo  
- **Consumo** : 8,33 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tag :** `Francese` `Open-Source` `Efficiente`



### mistral-small3.1:24b  
**Mistral AI • 24B parametri • Contesto: 120.000 token**  

Modello compatto e reattivo di Mistral AI, progettato specificamente per offrire un'assistenza conversazionale fluida e rilevante con una velocità di risposta ottimale.  

**Specifiche tecniche:**  
- **Velocità:** 35 token al secondo  
- **Consumo:** 3,72 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags:** `Visione` `Agente` `Sicurezza`  

**Casi d'uso:**  
- Applicazioni conversazionali  
- Assistenti virtuali che combinano analisi delle immagini e testo (26 token al secondo)  
- Chatbot di supporto tecnico con accesso alla documentazione tecnica  
- Strumenti per la creazione/produzione di contenuti con risposta immediata (blog, email)  
- Distribuzione su infrastrutture standard (24 miliardi di parametri)



### mistral-small3.2:24b  
**Mistral AI • 24B parametri • Contesto: 120.000 token**  

Aggiornamento minore di Mistral Small 3.1, migliorando il follow-up delle istruzioni, la robustezza delle chiamate di funzioni e riducendo gli errori di ripetizione.  

**Specifiche tecniche:**  
- **Velocità** : 35 tokens/seconde  
- **Consumo** : 3,72 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags :** `Visione` `Agente` `Sicurezza` `Follow-up delle istruzioni`  

**Casi d'uso :**  
- Agenti conversazionali con un follow-up delle istruzioni migliorato  
- Integrazione robusta con strumenti esterni tramite chiamate di funzioni  
- Applicazioni che richiedono una grande affidabilità per evitare ripetizioni  
- Casi d'uso identici a Mistral Small 3.1 con prestazioni migliorate



### deepcoder:14b  
**Agentica x Together AI • 14B parametri • Contesto: 32.000 token**  

Modello IA open source (14B) di Together AI & Agentica, alternativa credibile ai modelli proprietari per la generazione di codice.  

**Specifiche tecniche:**  
- **Velocità** : 64 token/secondo token/secondo ⚡  
- **Consumo** : 4,12 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Programmazione` `Ragionamento` `Open-Source` `Matematica` `Velocità`  

**Casi d'uso:**  
- Generazione di codice in più di 15 linguaggi con ottimizzazione delle prestazioni  
- Debugging e refactoring di basi di codice esistenti con analisi dell'impatto  
- Implementazione di algoritmi complessi (grafo, alberi, euristici)  
- Creazione automatica di test unitari con copertura del codice > 80%  
- Trasposizione di codice tra linguaggi/frameworks (ad esempio Python verso JavaScript)



### granite3.2-vision:2b  
**IBM • 2 miliardi di parametri • Contesto: 16 384 token**  

Modello compatto rivoluzionario di IBM specializzato nella visione artificiale, in grado di analizzare e comprendere direttamente i documenti visivi senza ricorrere a tecnologie OCR intermedie.  

**Specifiche tecniche:**  
- **Velocità:** 48 token/secondo  
- **Consumo:** 0,69 kWh/milione di token 🌱  
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
- Visione artificiale leggera (2 miliardi di parametri) con velocità elevata (50 token/s)



### granite3.3:8b
**IBM • 8B parametri • Contesto: 60.000 token**

Modello Granite 8B finetunato da IBM per un ragionamento e un seguito di istruzioni migliorati, con un contesto di 128k token.

**Specifiche tecniche :**
- **Velocità** : 30 token/secondo
- **Consumo** : 1,11 kWh/milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tags :** `Agente` `Ragionamento` `Sicurezza` `Efficiente`

**Casi d'uso :**
- Compiti generali di seguito di istruzioni (classificazione, estrazione, Q&A)
- Assistenti IA multilingue (12 lingue)
- Elaborazione di documenti molto lunghi (128k token) per compiti di riassunti, Q&A,...
- Generazione/completamento di codice con Fill-in-the-Middle
- Integrazione con strumenti esterni tramite function calling
- Ragionamento strutturato con la modalità "Thinking"



### granite3.3:2b
**IBM • 2 miliardi di parametri • Contesto: 120.000 token**

Modello Granite 2B addestrato in modo fine da IBM, ottimizzato per il ragionamento e il follow-up delle istruzioni, con un contesto di 128k token.

**Specifiche tecniche:**
- **Velocità** : 45 token/secondo
- **Consumo** : 0.74 kWh/milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tags :** `Agente` `Ragionamento` `Sicurezza` `Efficiente`

**Casi d'uso :**
- Deployments leggeri con grande contesto (128k token)
- Compiti generali di follow-up delle istruzioni su risorse limitate
- Assistenti IA multilingue compatti
- Elaborazione di documenti lunghi su dispositivi meno potenti
- Generazione/completamento di codice FIM su posti di lavoro standard



### magistral:24b  
**Mistral AI • 24B parametri • Contesto : 40 000 token**  

Il primo modello di ragionamento di Mistral AI, eccellente nel ragionamento specifico al dominio, trasparente e multilingue.  

**Specifiche tecniche :**  
- **Velocità** : 25 token al secondo  
- **Consumo** : 5,33 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza  

**Tags :** `Ragionamento` `Multilingue`  

**Casi d'uso :**  
- Strategia e operazioni commerciali (modellazione dei rischi)  
- Industrie regolamentate (giuridico, finanza) con ragionamento tracciabile  
- Ingegneria del software (pianificazione del progetto, architettura)  
- Creazione di contenuti e comunicazione (redazione creativa, narrazione)



### granite3.1-moe:3b  
**IBM • 3B parametri • Contesto: 32 000 token**  

Modello innovativo di IBM che utilizza l'architettura Mixture-of-Experts (MoE) per offrire prestazioni eccezionali ottimizzando in modo drastico l'utilizzo delle risorse computazionali.  

**Specifiche tecniche:**  
- **Velocità** : 74 token/seconde ⚡  
- **Consumo** : 0.45 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags:** `Agent` `Sicurezza` `Veloci` `MoE` `Efficienza` `Efficiente`  

**Casi d'uso:**  
- Applicazioni generaliste con costo di inferenza ottimizzato (42 token/seconde)  
- Elaborazione di documenti in ambienti CPU con utilizzo della RAM limitato  
- Analisi specializzate con attivazione dinamica delle parti pertinenti del modello  
- Distribuzioni ad alta densità con basso consumo energetico per inferenza  
- Elaborazione parallela di diversi tipi di richieste con specializzazione MoE



### cogito:14b  
**Deep Cogito • 14B parametri • Contesto: 32.000 token**  

Modello Deep Cogito progettato specificamente per eccellere nelle attività di ragionamento profondo e comprensione contestuale raffinata, ideale per applicazioni analitiche avanzate.  

**Specifiche tecniche:**  
- **Velocità** : 60 token/secondo ⚡  
- **Consumo** : 4,4 kWh/milione di token  
- **Licenza** : Licenza Community LLAMA 3.2  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Agente` `Ragionamento` `Comprensione` `Analisi` `Veloce`  

**Casi d'uso:**  
- Analisi semantica dei testi con identificazione delle implicazioni non esplicite  
- Ragionamento causale strutturato con identificazione delle relazioni causa-effetto  
- Sintesi di documenti complessi con estrazione delle informazioni chiave  
- Sistemi di domande-risposte precisi su corpus documentari specializzati  
- Analisi argomentativa con valutazione della solidità dei ragionamenti



### cogito:32b  
**Deep Cogito • 32 miliardi di parametri • Contesto: 32.000 token**  

Versione avanzata del modello Cogito che offre capacità di ragionamento e analisi notevolmente amplificate, progettata per le applicazioni più esigenti in termini di intelligenza artificiale analitica.  

**Specifiche tecniche:**  
- **Velocità** : 32 token/secondo  
- **Consumo** : 8,25 kWh/milione di token  
- **Licenza** : Licenza Community LLAMA 3.2  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Agente` `Ragionamento` `Comprensione` `Analisi`  

**Casi d'uso :**  
- Analisi di scenari multi-fattoriali con valutazione probabilistica dei risultati  
- Risoluzione di problemi scientifici con dimostrazione formale dei passaggi  
- Applicazioni a alta criticità che richiedono precisione e verificabilità dei risultati  
- Sistemi esperti in ambiti specializzati (giuridico, medico, tecnico)  
- Analisi con ragionamento multi-step e spiegabilità completa delle conclusioni



### qwen3:32b
**Qwen Team • 32B parametri • Contesto: 40 000 token**

Modello potente della nuova generazione Qwen3, con capacità avanzate di ragionamento, codifica e agenti, con un contesto esteso.

**Specifiche tecniche:**
- **Velocità** : 18 token al secondo
- **Consumo** : 7,41 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags:** `Agente` `Ragionamento` `Multilingue` `Grande Contesto`

**Casi d'uso:**
- Agenti conversazionali avanzati con grande contesto e integrazione di strumenti (MCP)
- Risoluzione di problemi complessi (matematica, codifica) con modalità "Thinking"
- Analisi e generazione di documenti voluminosi
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione approfondita



### qwq:32b  
**Qwen Team • 32B parametri • Contesto: 32.000 token**  

Modello con 32 miliardi di parametri migliorato tramite apprendimento per rinforzo (RL) per eccellere nel ragionamento, nella codifica, nelle matematiche e nelle attività di agente.  

**Specifiche tecniche:**  
- **Velocità:** 35 token/secondo  
- **Consumo:** 7,54 kWh/milione di token  
- **Licenza:** Apache 2.0  
- **Posizione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tag:** `Agente` `Ragionamento` `Codifica` `Matematica`  

**Casi d'uso:**  
- Risoluzione di problemi complessi che richiedono ragionamento e utilizzo di strumenti  
- Generazione ed esecuzione di codice con verifica dei risultati  
- Compiti matematici avanzati con verifica dell'accuratezza  
- Applicazioni di agente in grado di interagire con l'ambiente  
- Seguimento di istruzioni migliorato e allineamento con le preferenze umane



### deepseek-r1:14b  
**DeepSeek AI • 14B parametri • Contesto : 32 000 token**  

Versione compatta ed efficiente del modello DeepSeek-R1, che offre un ottimo equilibrio tra prestazioni e leggerezza per i deployment che richiedono flessibilità e reattività.  

**Specifiche tecniche :**  
- **Velocità** : 62 token/secondo ⚡  
- **Consumo** : 4,26 kWh/milione di token  
- **Licenza** : MIT license  
- **Localizzazione** : IT 🇮🇹  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Ragionamento` `Compatta` `Polivalente` `Veloce`  

**Casi d'uso :**  
- Applicazioni generaliste con esigenze di inferenza rapida (44 token/s)  
- Deployment su server standard senza GPU specializzata (14B parametri)  
- Elaborazione di testo con analisi contestuale e tempi di risposta rapidi  
- Deployment su edge computing con inferenza locale ottimizzata  
- Prototipazione rapida di applicazioni IA con tempi di iterazione brevi



### deepseek-r1:32b  
**DeepSeek AI • 32B parametri • Contesto: 32.000 token**  

Versione intermedia del modello DeepSeek-R1 che offre un equilibrio strategico tra le capacità avanzate della versione 70B e l'efficienza della versione 14B, per una versatilità e prestazioni ottimali.  

**Specifiche tecniche:**  
- **Velocità:** 33 token/secondo  
- **Consumo:** 7,99 kWh/milione di token  
- **Licenza:** Licenza MIT  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags:** `Ragionamento` `Versatile`  

**Casi d'uso:**  
- Applicazioni che richiedono un buon equilibrio tra potenza e costo (32B parametri)  
- Elaborazione di testi professionali con analisi delle sottigliezze semantiche  
- Generazione automatica di rapporti strutturati a partire da dati grezzi  
- Applicazioni che combinano analisi dei dati e generazione di contenuti  
- Assistenti specializzati per settori tecnici (giuridico, medico, tecnico)



### cogito:3b
**Deep Cogito • 3B parametri • Contesto : 32 000 tokens**

Versione compatta del modello Cogito, ottimizzata per il ragionamento su dispositivi con risorse limitate.

**Specifiche tecniche :**
- **Velocità** : 55 tokens/seconde ⚡
- **Consumo** : 0.61 kWh/million tokens 🌱
- **Licenza** : LLAMA 3.2 Community Licence
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Ragionamento` `Compatto` `Embedded` `Efficiente` `Veloce`



### granite-embedding:278m  
**IBM • 278M parametri • Contesto: 512 token**  

Modello di embedding estremamente leggero di IBM per la ricerca semantica e la classificazione.  

**Specifiche tecniche:**  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tag:** `Embedding` `Compatto` `Semantico` `Efficiente`



### granite3-guardian:2b  
**IBM • 2B parametri • Contesto: 8 192 token**  

Modello compatto di IBM specializzato nella sicurezza e conformità, che rileva rischi e contenuti inappropriati.  

**Specifiche tecniche:**  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tag:** `Sicurezza` `Conformità` `Compatto` `Filtraggio` `Efficiente`



### granite3-guardian:8b  
**IBM • 8 miliardi di parametri • Contesto: 32 000 token**  

Modello IBM specializzato nella sicurezza e conformità, con avanzate capacità di rilevamento dei rischi.  

**Specifiche tecniche:**  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tag:** `Sicurezza` `Conformità` `Filtraggio`



### qwen2.5:0.5b
**Qwen Team • 0.5B parametri • Contesto: 32.000 token**

Micro-modello estremamente leggero della famiglia Qwen 2.5, progettato per una massima efficienza su dispositivi limitati.

**Specifiche tecniche :**
- **Velocità** : 162 token/secondo ⚡
- **Consumo** : 0.1 kWh/milione di token 🌱
- **Licenza** : Licenza MIT
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Ultra-compact` `Veloci` `Incorporati` `Efficiente`



### qwen2.5:1.5b
**Qwen Team • 1,5B parametri • Contesto: 32.000 token**

Modello molto compatto della famiglia Qwen 2.5, che offre un buon equilibrio tra prestazioni e dimensioni per i deployment leggeri.

**Specifiche tecniche :**
- **Velocità** : 102 token/secondo ⚡
- **Consumo** : 0,33 kWh/milione di token 🌱
- **Licenza** : MIT license
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Compatto` `Veloci` `Integrato` `Efficiente`



### qwen2.5:14b  
**Qwen Team • 14B parametri • Contesto: 32 000 token**  

Modello versatile di dimensioni medie della famiglia Qwen 2.5, buon equilibrio tra prestazioni e risorse.  

**Specifiche tecniche:**  
- **Velocità** : 61 token/secondo ⚡  
- **Consumo** : 4,33 kWh/milione di token  
- **Licenza** : Licenza MIT  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Polivalente` `Multilingue` `Veloci`



### qwen2.5:32b  
**Team Qwen • 32B parametri • Contesto: 32 000 token**  

Modello potente della famiglia Qwen 2.5, che offre capacità avanzate in comprensione e generazione.  

**Specifiche tecniche:**  
- **Velocità** : 31 token/secondo token/secondo  
- **Consumo** : 8,51 kWh/milione di token  
- **Licenza** : MIT license  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Polivalente` `Multilingue` `Ragionamento`



### qwen2.5:3b  
**Qwen Team • 3B parametri • Contesto : 32 000 tokens**  

Modello compatto ed efficiente della famiglia Qwen 2.5, adatto alle attività generali su risorse limitate.  

**Specifiche tecniche :**  
- **Velocità** : 64 tokens/secondo ⚡  
- **Consumo** : 0.52 kWh/milione di tokens 🌱  
- **Licenza** : MIT license  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Compatto` `Veloce` `Polivalente` `Efficiente`



### qwen3:0.6b  
**Qwen Team • 0,6B parametri • Contesto: 32.000 token**  

Modello compatto ed efficiente della famiglia Qwen3, adatto alle attività generali su risorse limitate.  

**Specifiche tecniche:**  
- **Velocità** : 112 token/secondo ⚡  
- **Consumo** : 0,15 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags :** `Compatto` `Veloce` `Polivalente` `Efficiente`



### qwen3:1.7b
**Qwen Team • 1,7B parametri • Contesto: 32.000 token**

Modello molto compatto della famiglia Qwen3, che offre un buon equilibrio tra prestazioni e dimensioni per i deployment leggeri.

**Specifiche tecniche :**
- **Velocità** : 88 token al secondo ⚡
- **Consumo** : 0,38 kWh per milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Compacto` `Veloci` `Incorporato` `Efficiente`



### qwen3:4b  
**Qwen Team • 4B parametri • Contesto: 32 000 token**  

Modello compatto della famiglia Qwen3 che offre ottime prestazioni in un formato leggero ed economico.  

**Specifiche tecniche:**  
- **Velocità:** 49 token/secondo token/secondo  
- **Consumo:** 0.68 kWh/milione di token 🌱  
- **Licenza:** Apache 2.0  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Compatto` `Efficiente`



### qwen3-2507-think:4b
**Qwen Team • 4B parametri • Contesto: 250 000 token**

Modello Qwen3-4B ottimizzato per il ragionamento, con prestazioni migliorate per compiti logici, matematici, scientifici e di codifica, e un contesto esteso fino a 250.000 token.

**Specifiche tecniche:**
- **Velocità** : 70 token/secondo ⚡
- **Consumo** : 1,9 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Ragionamento` `Grande Contesto` `Compact` `Veloci`

**Casi d'uso :**
- Compiti di ragionamento molto complessi (logica, matematica, scienza, codice).
- Agenti conversazionali con un storico di conversazione molto esteso (256k token).
- Analisi di documenti molto voluminosi con ragionamento approfondito.
- Integrazione con strumenti esterni tramite function calling su contesti molto estesi.



### qwen3-2507:4b
**Qwen Team • 4B parametri • Contesto: 250.000 token**

Versione aggiornata del modello non pensante di Qwen3-4B, con miglioramenti significativi delle capacità generali, una copertura delle conoscenze estesa e un migliore allineamento con le preferenze degli utenti.

**Specifiche tecniche:**
- **Velocità**: 70 token/secondo ⚡
- **Consumo**: 1,9 kWh/milione di token
- **Licenza**: Apache 2.0
- **Localizzazione**: FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags:** `Agente` `Grande Contesto` `Compatto` `Veloce` `Multilingue`

**Casi d'uso:**
- Compiti generali che richiedono un follow-up preciso delle istruzioni e un ragionamento logico.
- Applicazioni multilingue con una vasta copertura delle conoscenze.
- Generazione di testo di alta qualità per compiti aperti e soggettivi.
- Analisi di documenti molto grandi grazie al contesto di 256k token.



### qwen3:8b
**Qwen Team • 8B parametri • Contesto: 32 000 token**

Modello Qwen3 8B che offre un buon equilibrio tra prestazioni ed efficienza per compiti generali.

**Specifiche tecniche:**
- **Velocità** : 33 token/secondo token/secondo
- **Consumo** : 1,01 kWh/milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags:** `Ragionamento` `Agente` `Multilingue` `Efficiente`



### qwen2.5vl:3b  
**Qwen Team • 3.8B parametri • Contesto : 128 000 token**  

Modello Vision-Langage compatto, soluzione performante per l'AI in edge (edge AI).  

**Specifiche tecniche :**  
- **Velocità** : 65 token/secondo ⚡  
- **Consumo** : 0.51 kWh/milione di token 🌱  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Visione` `Agente` `Ragionamento` `Veloce` `Efficiente` `OCR` `Localizzazione Visiva` `Edge AI`



### qwen2.5vl:7b
**Qwen Team • 7B (8.3B) parametri • Contesto : 128 000 token**

Modello Vision-Langage performante, che supera GPT-4o-mini in alcune attività.

**Specifiche tecniche :**
- **Velocità** : 35 token/secondo token/secondo
- **Consumo** : 0.95 kWh/milione di token 🌱
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Visione` `Agente` `Ragionamento` `Efficiente` `OCR` `Localizzazione Visiva`



### hf.co/roadus/Foundation-Sec-8B-Q4_K_M-GGUF:Q4_K_M
**Foundation AI — Cisco • 8B parametri • Contesto: 16.384 token**

Modello linguistico specializzato per la cybersecurity, ottimizzato per l'efficienza.

**Specifiche tecniche :**
- **Velocità** : 21 token/seconde
- **Consumo** : 1,59 kWh/milione di token
- **Licenza** : Apache 2.0
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tags :** `Sicurezza` `Compact`



### devstral:24b  
**Mistral AI & All Hands AI • 24B parametri • Contesto: 120.000 token**  

Devstral è un LLM agente per compiti di ingegneria del software.  

**Specifiche tecniche:**  
- **Velocità** : 45 token al secondo  
- **Consumo** : 5,86 kWh/milione di token  
- **Licenza** : Apache 2.0  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Tags:** `Agent` `Programmazione` `Open-Source` `Grande Contesto`  

**Casi d'uso:**  
- Esplorazione e modifica di basi di codice  
- Agentic  
- Europeo



### cogito:8b
**Deep Cogito • 8B parametri • Contesto : 32 000 token**

Modello di dimensione intermedia della famiglia Cogito, che offre un buon equilibrio tra le capacità di ragionamento e l'efficienza.

**Specifiche tecniche :**
- **Velocità** : 30 token/secondo
- **Consumo** : 1,11 kWh/milione di token 🌱
- **Licenza** : LLAMA 3.2 Community Licence
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agente` `Ragionamento` `Polivalente` `Efficiente`



### llama3.1:8b  
**Meta • 8B parametri • Contesto: 32.000 token**  

Modello base della famiglia Llama 3.1, che offre prestazioni solide per la sua dimensione.  

**Specifiche tecniche:**  
- **Velocità** : 31 token/secondo  
- **Consumo** : 1,08 kWh/milione di token 🌱  
- **Licenza** : Licenza Comunitaria LLAMA 3.1  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Tags:** `Polivalente` `Efficiente`



### phi4-reasoning:14b  
**Microsoft • 14B parametri • Contesto: 32.000 token**  

Modello della famiglia Phi di Microsoft, specializzato nel ragionamento complesso e nelle matematiche.  

**Specifiche tecniche:**  
- **Velocità** : 71 token/secondo ⚡  
- **Consumo** : 3,71 kWh/milione di token  
- **Licenza** : Licenza MIT  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Tags :** `Ragionamento` `Matematiche` `Programmazione` `Veloce`



## Casi d'uso consigliati



### Dialogo multilingue  
Chatbot e assistenti in grado di comunicare in più lingue con rilevamento automatico, mantenimento del contesto per l'intera conversazione e comprensione delle specificità linguistiche  

**Modelli consigliati:**  
- Llama 3.3  
- Mistral Small 3.2  
- Qwen 3  
- Granite 3.3



### Analisi di documenti lunghi
Elaborazione di documenti voluminosi (più di 100 pagine) con conservazione del contesto su tutto il testo, estrazione di informazioni chiave, generazione di riassunti pertinenti e risposta a domande specifiche sul contenuto

**Modelli consigliati :**
- Gemma 3
- Qwen3
- Granite 3.3



### Programmazione e sviluppo  
Generazione e ottimizzazione di codice in molti linguaggi, debugging, refactoring, sviluppo di funzionalità complete, comprensione delle implementazioni algoritmiche complesse e creazione di test unitari  

**Modelli consigliati:**  
- DeepCoder  
- QwQ  
- Qwen3 coder  
- Granite 3.3  
- Devstral



### Analisi visiva
Elaborazione diretta di immagini e documenti visivi senza pre-elaborazione OCR, interpretazione di diagrammi tecnici, grafici, tabelle, disegni e foto con generazione di spiegazioni testuali dettagliate del contenuto visivo

**Modelli consigliati:**
- Granite 3.2 Vision
- Mistral Small 3.2
- Gemma 3
- Qwen2.5-VL



### Sicurezza e conformità
Applicazioni che richiedono capacità specifiche in materia di sicurezza; filtraggio del contenuto sensibile, tracciabilità dei ragionamenti, verifica del RGPD/HDS, minimizzazione dei rischi, analisi delle vulnerabilità e rispetto delle normative settoriali

**Modelli consigliati:**
- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Magistral 24b
- Foundation-Sec-8B



### Distribuzioni leggere e embedded
Applicazioni che richiedono un'impronta minima in termini di risorse, distribuzione su dispositivi con capacità limitata, inferenza in tempo reale su CPU standard e integrazione in sistemi embedded o IoT

**Modelli consigliati:**
- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3