---
title: Catalogo dei Modelli IA
sidebar_position: 2
---

# Catalogo dei Modelli LLM come Servizio

## Panoramica

Cloud Temple LLMaaS propone **modelli di linguaggio di grandi dimensioni** selezionati e ottimizzati con cura. Il nostro catalogo copre l'intero spettro, dai micro-modelli estremamente efficienti ai modelli estremamente grandi.

### Nota sulle misure di prestazione
I valori di velocità (tokens/s) rappresentano obiettivi di prestazione in condizioni reali. Il consumo energetico (kWh/Mtoken) viene calcolato dividendo la potenza stimata del server di inferenza (in Watt) per la velocità misurata del modello (in tokens/secondo), quindi convertito in chilowattora per milione di token. Questo metodo offre un confronto pratico sull'efficienza energetica dei diversi modelli, da utilizzare come indicatore relativo piuttosto che come misura assoluta del consumo elettrico.

### Statistiche globali

| Metrica | Valore |
|----------|--------|
| **Numero totale di modelli** | 36 modelli |
| **Contesto minimo** | 8 192 token |
| **Contesto massimo** | 120 000 token |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranità ✅ C5 ✅ |
| **Localizzazione** | 100% Francia 🇫🇷 |

### Tariffa

| Tipo di utilizzo | Prezzo |
|-------------------|--------|
| **Token di input** | 0,9€ / milione di token |
| **Token di output** | 4€ / milione di token |
| **Ragionamento avanzato** | 21€ / milione di token |

## Modelli di Grande Dimensione

### Llama 3.3 70B  
**Meta • 70B parametri • Contesto: 60.000 token**  

Modello multilingue di punta sviluppato da Meta, progettato per eccellere nel dialogo naturale, nel ragionamento complesso e nella comprensione fine delle istruzioni.  

**Specifiche tecniche:**  
- **Velocità** : 30 token/secondo  
- **Consumo** : 8,87 kWh/milione di token  
- **Licenza** : [Licenza Community LLAMA 3.3](./licences/llama3.3_70b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Chatbot multilingue che supportano 8 lingue contemporaneamente  
- Esecuzione di istruzioni complesse concatenate (prompt chaining)  
- Elaborazione di una finestra di dialogo di 60.000 token per storico conversazionale  
- Analisi di documenti giuridici o tecnici voluminosi (>100 pagine)  
- Generazione di testi strutturati con fedeltà alle indicazioni stilistiche

### Qwen3 235B  
**Qwen Team • 235B parametri • Contesto: 32.000 token**  

Modello molto grande della nuova generazione Qwen3, che offre capacità estese per le attività più complesse.  

**Specifiche tecniche:**  
- **Velocità** : 21 token/secondo  
- **Consumo** : 6,35 kWh/milione di token  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Agenti conversazionali molto avanzati con ampio contesto e integrazione di strumenti (MCP)  
- Risoluzione di problemi estremamente complessi (matematica, codice)  
- Analisi e generazione di documenti molto grandi e tecnici  
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione e una generazione di alta fedeltà

### DeepSeek-R1 671B  
**DeepSeek AI • 671B parametri • Contesto: 32.000 token**  

Modello estremamente grande di DeepSeek AI, progettato per il massimo ragionamento e generazione.  

**Specifiche tecniche:**  
- **Velocità** : 16 token/secondo  
- **Consumo** : 8,33 kWh/milione di token  
- **Licenza** : [MIT Licence](./licences/deepseek-r1_671b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Compiti di ragionamento di punta  
- Generazione di testo di alta qualità  
- Ricerca e sviluppo nell'IA

### Gemma 3 27B  
**Google • 27B parametri • Contesto: 120 000 token**  

Modello rivoluzionario di Google che offre un equilibrio ottimale tra potenza ed efficienza, con un rapporto prestazioni/costo eccezionale per le applicazioni professionali esigenti.  

**Specifiche tecniche:**  
- **Velocità** : 68 token/secondo ⚡  
- **Consumo** : 3,91 kWh/milione di token  
- **Licenza** : [Google Gemma Terms of Use](./licences/gemma3_27b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Analisi di documenti con contesto esteso fino a 120K token (circa 400 pagine)  
- Indicizzazione e ricerca semantica in basi documentarie di grandi dimensioni  
- Elaborazione di immagini e testo contemporaneamente grazie alle capacità multimodali  
- Estrazione strutturata di dati da PDF e documenti scansionati  
- Integrazione con strumenti esterni tramite l'API function calling

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B parametri • Contesto: 32.000 token**

Modello MoE FP8 (3B attivati) di nuova generazione, con modalità di pensiero ibride e capacità avanzate di agente.

**Specifiche tecniche:**
- **Velocità**: 103 token/secondo ⚡
- **Consumo**: 2,58 kWh/milione di token
- **Licenza**: [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione**: IT 🇮🇹

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Casi d'uso:**
- Agenti conversazionali avanzati con integrazione di strumenti (MCP)
- Risoluzione di problemi complessi (matematica, codice) con modalità "Thinking"
- Applicazioni multilingue (>100 lingue)
- Scenari che richiedono un equilibrio costo/prestazioni (MoE) su VLLM
- Dialoghi multi-turno coinvolgenti e seguito preciso delle istruzioni

### DeepSeek-R1 70B  
**DeepSeek AI • 70B parametri • Contesto: 32.000 token**  

Modello 70B di DeepSeek AI  

**Specifiche tecniche:**  
- **Velocità** : 20 token/secondo token/secondo  
- **Consumo** : 11,44 kWh/milione di token  
- **Licenza** : [MIT Licence](./licences/deepseek-r1_70b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Compiti di ragionamento complessi  
- Generazione di testo di alta qualità  
- Analisi approfondita dei documenti (entro il limite del contesto di 27k)  

---

## Modelli Specializzati

### Qwen3 14B  
**Qwen Team • 14B parametri • Contesto: 32.000 token**  

Modello di rete neurale denso di nuova generazione Qwen3 (14B), che offre prestazioni equivalenti a Qwen2.5 32B con una maggiore efficienza.  

**Specifiche tecniche:**  
- **Velocità:** 69 token/secondo ⚡  
- **Consumo:** 2,65 kWh/milione di token  
- **Licenza:** [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione:** IT 🇮🇹  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Compiti generali che richiedono prestazioni e ampio contesto  
- Generazione di contenuti creativi e tecnici  
- Analisi dei dati e ragionamento complesso  
- Integrazione con strumenti esterni tramite chiamata di funzioni

### Gemma 3 12B  
**Google • 12B parametri • Contesto: 120.000 token**  

Versione intermedia del modello Gemma 3 che offre un ottimo equilibrio tra prestazioni ed efficienza.  

**Specifiche tecniche:**  
- **Velocità** : 67 token al secondo ⚡  
- **Consumo** : 2,73 kWh/milione di token  
- **Licenza** : [Google Gemma Terms of Use](./licences/gemma3_12b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Applicazioni multimodali con vincoli di risorse moderati  
- Elaborazione di documenti con contesto standard (fino a 100 pagine)  
- Generazione di contenuti testuali e analisi di immagini combinate  
- Deployment su GPU standard senza infrastruttura specializzata  
- Chatbot avanzati con capacità visive e testuali integrate

### Gemma 3 4B  
**Google • 4B parametri • Contesto: 120.000 token**  

Modello compatto di Google che offre ottime prestazioni in un formato leggero ed economico.  

**Specifiche tecniche:**  
- **Velocità** : 58 token/secondo ⚡  
- **Consumo** : 0,93 kWh/milione di token 🌱  
- **Licenza** : [Google Gemma Terms of Use](./licences/gemma3_4b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Applicazioni embedded e edge computing con elaborazione delle immagini  
- Chatbot multimodali reattivi che richiedono bassa latenza  
- Deployamenti su larga scala con capacità visive e testuali  
- Applicazioni mobili con analisi di immagini e testi  
- Elaborazione di richieste visive di complessità semplice a media con alta prestazione

### Gemma 3 1B  
**Google • 1B parametri • Contesto: 32.000 token**  

Modello micro-ultraleggero progettato per deployment su dispositivi con risorse estremamente limitate.  

**Specifiche tecniche:**  
- **Velocità** : 41 token/secondo  
- **Consumo** : 1,32 kWh/milione di token 🌱  
- **Licenza** : [Google Gemma Terms of Use](./licences/gemma3_1b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Distribuzione su dispositivi IoT e sistemi embedded con integrazione API  
- Applicazioni che richiedono inferenza locale su CPU con chiamate a funzioni  
- Compiti testuali base con risposta istantanea e chiamata di funzioni  
- Assistenti compatti per applicazioni di massa con integrazione di servizi esterni  
- Sistemi di controllo intelligente che integrano più API/servizi

### Lucie-7B-Instruct  
**OpenLLM-France • 7B parametri • Contesto : 32 000 tokens**  

Modello multilingue open-source (7B), fine-tunato da Lucie-7B. Ottimizzato per il francese.  

**Specifiche tecniche :**  
- **Velocità** : 41 tokens/secondo tokens/secondo  
- **Consumo** : 1,32 kWh/milione di tokens 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità :**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Mistral Small 3.1  
**Mistral AI • 24B parametri • Contesto: 60.000 token**  

Modello compatto e reattivo di Mistral AI, progettato specificamente per offrire un'assistenza conversazionale fluida e rilevante con una velocità di risposta ottimale.  

**Specifiche tecniche:**  
- **Velocità** : 14 token/secondo token/secondo  
- **Consumo** : 13,06 kWh/milione di token  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Casi d'uso:**  
- Applicazioni conversazionali  
- Assistenti virtuali che combinano analisi delle immagini e testo (26 token/s)  
- Chatbot di supporto tecnico con accesso alla documentazione tecnica  
- Strumenti di creazione/revisione di contenuti con risposta immediata (blog, email)  
- Deployment su infrastrutture standard (24B di parametri)

### DeepCoder  
**Agentica x Together AI • 14B parametri • Contesto: 32.000 token**  

Modello IA open source (14B) di Together AI & Agentica, alternativa credibile ai modelli proprietari per la generazione di codice.  

**Specifiche tecniche:**  
- **Velocità** : 62 token al secondo ⚡  
- **Consumo** : 2,95 kWh/milione di token  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Generazione di codice in più di 15 linguaggi con ottimizzazione delle prestazioni  
- Debug e refactoring di basi di codice esistenti con analisi dell'impatto  
- Implementazione di algoritmi complessi (grafo, alberi, euristiche)  
- Trasposizione di codice tra linguaggi e framework (ad esempio Python verso JavaScript)  
- Creazione automatica di test unitari con copertura del codice > 80%

### Granite 3.2 Vision  
**IBM • 2B parametri • Contesto: 16 384 token**  

Modello compatto rivoluzionario di IBM specializzato nella visione artificiale, in grado di analizzare e comprendere direttamente i documenti visivi senza ricorrere a tecnologie OCR intermedie.  

**Specifiche tecniche:**  
- **Velocità** : 48 token/secondo ⚡  
- **Consumo** : 1,13 kWh/milione di token 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Casi d'uso:**  
- Estrazione di dati strutturati da fatture e moduli senza OCR  
- Analisi diretta di tabelle e grafici con interpretazione delle tendenze  
- Lettura e interpretazione di diagrammi tecnici (elettrici, meccanici)  
- Elaborazione di documenti manoscritti con alto tasso di riconoscimento  
- Visione artificiale leggera (2B parametri) con velocità elevata (79 token/s)

### Granite 3.3 8B  
**IBM • 8B parametri • Contesto: 60 000 token**  

Modello Granite 8B finetunato da IBM per un ragionamento e un seguito di istruzioni migliorati, con un contesto di 128k token.  

**Specifiche tecniche:**  
- **Velocità** : 27 token/secondo  
- **Consumo** : 2.0 kWh/milione di token 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza  

**Casi d'uso:**  
- Compiti generali di seguito di istruzioni (classificazione, estrazione, Q&A)  
- Assistenti IA multilingue (12 lingue)  
- Elaborazione di documenti molto lunghi (128k token): riassunti e domande-risposte  
- Generazione/completamento di codice con Fill-in-the-Middle  
- Integrazione con strumenti esterni tramite function calling  
- Ragionamento strutturato con la modalità "Thinking"

### Granite 3.3 2B  
**IBM • 2B parametri • Contesto: 120.000 token**  

Modello Granite 2B finetunato da IBM, ottimizzato per il ragionamento e il follow-up delle istruzioni, con un contesto di 128k token.  

**Specifiche tecniche:**  
- **Velocità** : 45 token/secondo ⚡  
- **Consumo** : 1,2 kWh/milione di token 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza  

**Casi d'uso:**  
- Deployments leggeri con grande contesto (128k token)  
- Compiti di follow-up delle istruzioni su risorse limitate  
- Assistenti IA multilingue compatti  
- Elaborazione di documenti lunghi su dispositivi meno potenti  
- Generazione/completamento di codice FIM su workstation standard

### Granite 3.1 MoE  
**IBM • 3B parametri • Contesto: 32 000 token**  

Modello innovativo di IBM che utilizza l'architettura Mixture-of-Experts (MoE) per offrire prestazioni eccezionali ottimizzando drasticamente l'utilizzo delle risorse computazionali.  

**Specifiche tecniche:**  
- **Velocità:** 74 token/secondo ⚡  
- **Consumo:** 0,73 kWh/milione di token 🌱  
- **Licenza:** [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Casi d'uso:**  
- Applicazioni generaliste con costo di inferenza ottimizzato (42 token/secondo)  
- Elaborazione di documenti in ambienti CPU con utilizzo RAM limitato  
- Analisi specializzate con attivazione dinamica delle parti rilevanti del modello  
- Deployment ad alta densità con basso consumo energetico per inferenza  
- Elaborazione parallela di diversi tipi di richieste con specializzazione MoE

### Cogito 14B  
**Deep Cogito • 14B parametri • Contesto: 32.000 token**  

Modello Deep Cogito progettato specificamente per eccellere nelle attività di ragionamento profondo e comprensione contestuale raffinata, ideale per applicazioni analitiche avanzate.  

**Specifiche tecniche:**  
- **Velocità** : 60 token/secondo ⚡  
- **Consumo** : 3,05 kWh/milione di token  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Analisi semantica dei testi con identificazione delle implicazioni non esplicite  
- Ragionamento causale strutturato con identificazione delle relazioni causa-effetto  
- Sintesi di documenti complessi con estrazione delle informazioni chiave  
- Sistemi di domande-risposte precisi su corpora documentari specializzati  
- Analisi argomentativa con valutazione della solidità dei ragionamenti

### Cogito 32B  
**Deep Cogito • 32B parametri • Contesto: 32.000 token**  

Versione avanzata del modello Cogito che offre capacità di ragionamento e analisi notevolmente ampliate, progettata per le applicazioni più esigenti in termini di intelligenza artificiale analitica.  

**Specifiche tecniche:**  
- **Velocità** : 32 token/secondo  
- **Consumo** : 5,73 kWh/milione di token  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : IT 🇮🇹  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Analisi di scenari multi-fattoriali con valutazione probabilistica dei risultati  
- Risoluzione di problemi scientifici con dimostrazione formale dei passaggi  
- Applicazioni a alta criticità che richiedono precisione e verificabilità dei risultati  
- Sistemi esperti in ambiti specializzati (giuridico, medico, tecnico)  
- Analisi con ragionamento a più livelli e spiegabilità completa delle conclusioni

### Qwen3 32B  
**Qwen Team • 32B parametri • Contesto: 40 000 token**  

Modello potente della nuova generazione Qwen3, che offre capacità avanzate in ragionamento, codice e agenti, con un contesto esteso.  

**Specifiche tecniche:**  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : IT 🇮🇹  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Agenti conversazionali avanzati con ampio contesto e integrazione di strumenti (MCP)  
- Risoluzione di problemi complessi (matematica, codice) con il modo "Thinking"  
- Analisi e generazione di documenti voluminosi  
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione approfondita

### QwQ-32B  
**Qwen Team • 32B parametri • Contesto: 32.000 token**  

Modello da 32 miliardi di parametri migliorato con apprendimento per rinforzo (RL) per eccellere nel ragionamento, nella programmazione, nelle matematiche e nelle attività degli agenti.  

**Specifiche tecniche:**  
- **Velocità** : 35 token/secondo  
- **Consumo** : 5,22 kWh/milione di token  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Risoluzione di problemi complessi che richiedono ragionamento e utilizzo di strumenti  
- Generazione ed esecuzione di codice con verifica dei risultati  
- Compiti matematici avanzati con verifica dell'accuratezza  
- Applicazioni di agente in grado di interagire con l'ambiente  
- Follow-up delle istruzioni migliorato e allineamento con le preferenze umane

### DeepSeek-R1 14B  
**DeepSeek AI • 14B parametri • Contesto: 32.000 token**  

Versione compatta ed efficiente del modello DeepSeek-R1, che offre un ottimo compromesso tra prestazioni e leggerezza per i deployment che richiedono flessibilità e reattività.  

**Specifiche tecniche:**  
- **Velocità:** 60 token/secondo ⚡  
- **Consumo:** 3,05 kWh/milione di token  
- **Licenza:** [MIT licence](./licences/deepseek-r1_14b.licence.md)  
- **Localizzazione:** IT 🇮🇹  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Applicazioni generaliste con bisogni di inferenza rapida (44 token/s)  
- Deployment su server standard senza GPU dedicata (14B parametri)  
- Elaborazione testi con analisi contestuale e tempo di risposta < 2s  
- Deployment su edge computing con inferenza locale ottimizzata  
- Prototipazione rapida di applicazioni IA con tempo di iterazione breve

### DeepSeek-R1 32B  
**DeepSeek AI • 32B parametri • Contesto: 32.000 token**  

Versione intermedia del modello DeepSeek-R1 che offre un equilibrio strategico tra le capacità avanzate della versione 70B e l'efficienza della versione 14B, per una versatilità e prestazioni ottimali.  

**Specifiche tecniche:**  
- **Velocità** : 33 token/secondo  
- **Consumo** : 5,54 kWh/milione di token  
- **Licenza** : [licenza MIT](./licenze/deepseek-r1_32b.licenza.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza  

**Casi d'uso:**  
- Applicazioni che richiedono un buon equilibrio tra potenza e costo (32B parametri)  
- Elaborazione di testi professionali con analisi delle sottigliezze semantiche  
- Generazione automatica di rapporti strutturati a partire da dati grezzi  
- Applicazioni che combinano analisi dei dati e generazione di contenuti  
- Assistenti specializzati per settori tecnici (giuridico, medico, tecnico)

### Cogito 3B
**Deep Cogito • 3B parametri • Contesto: 32 000 token**

Versione compatta del modello Cogito, ottimizzata per il ragionamento su dispositivi con risorse limitate.

**Specifiche tecniche:**
- **Velocità** : 63 token/secondo ⚡
- **Consumo** : 0.86 kWh/milione di token 🌱
- **Licenza** : [LLAMA 3.2 Community Licence](./licences/cogito_3b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

### Granite Embedding  
**IBM • 278M parametri • Contesto: 32.000 token**  

Modello di embedding estremamente leggero di IBM per la ricerca semantica e la classificazione.  

**Specifiche tecniche:**  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Granite 3 Guardian 2B  
**IBM • 2B parametri • Contesto: 8192 token**  

Modello compatto IBM specializzato nella sicurezza e nel rispetto delle normative, che rileva i rischi e i contenuti inappropriati.  

**Specifiche tecniche:**  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : IT 🇮🇹  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

### Granite 3 Guardian 8B  
**IBM • 8B parametri • Contesto: 32.000 token**  

Modello IBM specializzato nella sicurezza e conformità, che offre avanzate capacità di rilevamento dei rischi.  

**Specifiche tecniche:**  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

### Qwen 2.5 0.5B  
**Qwen Team • 0.5B parametri • Contesto: 32.000 token**  

Micro-modello estremamente leggero della famiglia Qwen 2.5, progettato per un'efficienza massima su dispositivi limitati.  

**Specifiche tecniche:**  
- **Velocità** : 57 token/secondo ⚡  
- **Consumo** : 0.95 kWh/milione di token 🌱  
- **Licenza** : [MIT license](./licences/qwen2.5_0.5b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Qwen 2.5 1.5B  
**Qwen Team • 1.5B parametri • Contesto: 32 000 token**  

Modello molto compatto della famiglia Qwen 2.5, che offre un buon equilibrio tra prestazioni e dimensioni per implementazioni leggere.  

**Specifiche tecniche:**  
- **Velocità** : 94 token al secondo ⚡  
- **Consumo** : 0.58 kWh/milione di token 🌱  
- **Licenza** : [MIT licenza](./licences/qwen2.5_1.5b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Qwen 2.5 14B  
**Qwen Team • 14B parametri • Contesto: 32 000 token**  

Modello versatile di dimensioni medie della famiglia Qwen 2.5, buon equilibrio tra prestazioni e risorse.  

**Specifiche tecniche:**  
- **Velocità** : 61 token al secondo ⚡  
- **Consumo** : 3.0 kWh/milione di token  
- **Licenza** : [MIT licenza](./licences/qwen2.5_14b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Qwen 2.5 32B  
**Qwen Team • 32B parametri • Contesto: 32.000 token**  

Modello potente della famiglia Qwen 2.5, che offre avanzate capacità di comprensione e generazione.  

**Specifiche tecniche:**  
- **Velocità** : 32 token/secondo  
- **Consumo** : 5,73 kWh/milione di token  
- **Licenza** : [MIT licenza](./licences/qwen2.5_32b.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

### Qwen 2.5 3B  
**Qwen Team • 3B parametri • Contesto: 32.000 token**  

Modello compatto ed efficiente della famiglia Qwen 2.5, adatto alle attività generali su risorse limitate.  

**Specifiche tecniche:**  
- **Velocità** : 60 token/al secondo ⚡  
- **Consumo** : 0,9 kWh/milione di token 🌱  
- **Licenza** : [licenza MIT](./licences/qwen2.5_3b.licence.md)  
- **Localizzazione** : IT 🇮🇹  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Qwen3 0.6b  
**Qwen Team • 0.6B parametri • Contesto : 32 000 token**  

Modello compatto ed efficiente della famiglia Qwen3, adatto alle attività generali su risorse limitate.  

**Specifiche tecniche :**  
- **Velocità** : 60 token/secondo ⚡  
- **Consumo** : 0.9 kWh/milione di token 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : IT 🇮🇹  

**Capacità :**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Qwen3 1.7b  
**Team Qwen • 1,7B parametri • Contesto: 32.000 token**  

Modello molto compatto della famiglia Qwen3, che offre un buon equilibrio tra prestazioni e dimensioni per i deployment leggeri.  

**Specifiche tecniche:**  
- **Velocità:** 83 token al secondo ⚡  
- **Consumo:** 0,65 kWh/milione di token 🌱  
- **Licenza:** [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione:** FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Qwen3 4b
**Qwen Team • 4B parametri • Contesto: 32 000 token**

Modello compatto della famiglia Qwen3 che offre eccellenti prestazioni in un formato leggero ed economico.

**Specifiche tecniche:**
- **Velocità** : 48 token/secondo token/secondo
- **Consumo** : 1,13 kWh/milione di token 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

### Qwen3 8b  
**Qwen Team • 8B parametri • Contesto: 32.000 token**  

Modello Qwen3 8B che offre un buon equilibrio tra prestazioni ed efficienza per compiti generali.  

**Specifiche tecniche:**  
- **Velocità** : 29 token/secondo  
- **Consumo** : 1,87 kWh/milione di token 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

### Qwen2.5-VL 3B  
**Qwen Team • 3,8 miliardi di parametri • Contesto: 128.000 token**  

Modello Visione-Linguaggio compatto, soluzione performante per l'AI in edge.  

**Specifiche tecniche:**  
- **Velocità** : 65 token/secondo ⚡  
- **Consumo** : 0,83 kWh/milione di token 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

### Qwen2.5-VL 7B  
**Qwen Team • 7B (8.3B) parametri • Contesto: 128 000 token**  

Modello Vision-Langage performante, che supera GPT-4o-mini in alcune attività.  

**Specifiche tecniche:**  
- **Velocità** : 37 token/secondo  
- **Consumo** : 1,46 kWh/milione di token 🌱  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parametri • Contesto: 16.000 token**

Modello di linguaggio specializzato per la sicurezza informatica, ottimizzato per l'efficienza.

**Specifiche tecniche :**
- **Velocità** : 22 token/secondo token/secondo
- **Consumo** : 2,46 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

### devstral 24B  
**Mistral AI & All Hands AI • 24B parametri • Contesto: 120.000 token**  

Devstral è un LLM agente per compiti di ingegneria del software.  

**Specifiche tecniche:**  
- **Velocità** : 53 token/secondo ⚡  
- **Consumo** : 4,5 kWh/milione di token  
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)  
- **Localizzazione** : FR 🇫🇷  

**Capacità:**  
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza  

**Casi d'uso:**  
- Esplorazione e modifica di basi di codice  
- Agentic  
- Europeo

## Casi d'uso Consigliati

### Dialogo multilingue

Chatbot e assistenti in grado di comunicare in più lingue con rilevamento automatico, mantenimento del contesto durante l'intera conversazione e comprensione delle specificità linguistiche

**Modelli consigliati :**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Analisi di documenti lunghi

Elaborazione di documenti voluminosi (>100 pagine) con mantenimento del contesto sull'intero testo, estrazione di informazioni chiave, generazione di riassunti pertinenti e risposta a domande specifiche sul contenuto

**Modelli consigliati :**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programmazione e sviluppo
Generazione e ottimizzazione di codice in diversi linguaggi, debugging, refactoring, sviluppo di funzionalità complete, comprensione di implementazioni algoritmiche complesse e creazione di test unitari

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

Applicazioni che richiedono capacità specifiche in materia di sicurezza; filtraggio del contenuto sensibile, tracciabilità dei ragionamenti, verifica del RGPD/HDS, minimizzazione dei rischi, analisi delle vulnerabilità e rispetto delle normative settoriali

**Modelli consigliati :**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Foundation-Sec-8B

### Distribuzioni leggere e incorporate

Applicazioni che richiedono un'impronta minima in termini di risorse, distribuzione su dispositivi con capacità limitata, inferenza in tempo reale su CPU standard e integrazione in sistemi incorporati o IoT

**Modelli consigliati:**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3