---
title: Catalogo dei Modelli IA
sidebar_position: 2
---

# Catalogo dei Modelli LLM as a Service

## Panoramica

Cloud Temple LLMaaS propone **36 modelli di linguaggio su larga scala** attentamente selezionati e ottimizzati per soddisfare i requisiti più rigorosi di **SecNumCloud**. Il nostro catalogo copre l'intero spettro, dai modelli micro estremamente efficienti ai modelli estremamente grandi.

### Statistiche Globali

| Metrica | Valore |
|--------|--------|
| **Numero totale di modelli** | 36 modelli |
| **Contesto minimo** | 8 192 token |
| **Contesto massimo** | 120 000 token |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranietà ✅ C5 ✅ |
| **Localizzazione** | 100% Francia 🇫🇷 |

### Tariffa

| Tipo di utilizzo | Prezzo |
|------------------|--------|
| **Token di input** | 0,9€ / milione di token |
| **Token di output** | 4€ / milione di token |
| **Ragionamento avanzato** | 21€ / milione di token |

## Modelli di Grande Dimensione

### Llama 3.3 70B
**Meta • 70B parametri • Contesto: 60 000 token**

Modello multilingue di punta sviluppato da Meta, progettato per eccellere nel dialogo naturale, nel ragionamento complesso e nella comprensione sottile delle istruzioni.

**Specifiche tecniche:**
- **Velocità** : 30 token/secondo token/secondo
- **Consumo** : 8,87 kWh/milione di token
- **Licenza** : [Licenza Comunitaria Llama 3.3](./licences/llama3.3_70b.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Dialogo` `Multilingue`

**Casi d'uso:**
- Chatbot multilingue che supportano 8 lingue contemporaneamente
- Esecuzione di istruzioni complesse concatenate (prompt chaining)
- Elaborazione di una finestra di dialogo di 60K token per storico conversazionale
- Analisi di documenti giuridici o tecnici di grandi dimensioni (>100 pagine)
- Generazione di testi strutturati con fedeltà alle istruzioni stilistiche

---

### Qwen3 235B
**Qwen Team • 235B parametri • Contesto: 32 000 token**

Modello molto grande della nuova generazione Qwen3, che offre capacità estese per le attività più complesse.

**Specifiche tecniche:**
- **Velocità** : 21 token/secondo
- **Consumo** : 6,35 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Ragionamento` `Multilingue` `Molto Grande`

**Casi d'uso:**
- Agenti conversazionali molto avanzati con grande contesto e integrazione di strumenti (MCP)
- Risoluzione di problemi estremamente complessi (matematica, codice)
- Analisi e generazione di documenti molto grandi e tecnici
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione e una generazione di alta fedeltà

---

### DeepSeek-R1 671B
**DeepSeek AI • 671B parametri • Contesto: 32 000 token**

Modello estremamente grande di DeepSeek AI, progettato per il massimo del ragionamento e della generazione.

**Specifiche tecniche:**
- **Velocità** : 16 token/secondo token/secondo
- **Consumo** : 8,33 kWh/milione di token
- **Licenza** : [Licenza MIT](./licences/deepseek-r1_671b.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Ragionamento` `Estremamente Grande`

**Casi d'uso:**
- Compiti di ragionamento di punta
- Generazione di testo di alta qualità
- Ricerca e sviluppo in IA

---

### Gemma 3 27B
**Google • 27B parametri • Contesto: 120 000 token**

Modello rivoluzionario di Google che offre un equilibrio ottimale tra potenza ed efficienza, con un rapporto prestazioni/costo eccezionale per applicazioni professionali esigenti.

**Specifiche tecniche:**
- **Velocità** : 68 token/secondo token/secondo ⚡
- **Consumo** : 3,91 kWh/milione di token
- **Licenza** : [Termini d'uso di Google Gemma](./licences/gemma3_27b.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Visione` `Agente` `Veloce` `Grande contesto`

**Casi d'uso:**
- Analisi di documenti con contesto esteso fino a 120K token (circa 400 pagine)
- Indicizzazione e ricerca semantica in grandi basi documentarie
- Elaborazione di immagini e testo contemporaneamente grazie alle capacità multimodali
- Estrazione strutturata di dati da PDF e documenti scansionati
- Integrazione con strumenti esterni tramite l'API function calling

---

### Qwen3 30B-A3B FP8
**Qwen Team • 30B-A3B parametri • Contesto: 32 000 token**

Modello MoE FP8 (3B attivati) di nuova generazione, con modi di pensiero ibridi e capacità avanzate per gli agenti.

**Specifiche tecniche:**
- **Velocità** : 103 token/secondo token/secondo ⚡
- **Consumo** : 2,58 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `MoE` `Agente` `Ragionamento` `Veloce` `Multilingue`

**Casi d'uso:**
- Agenti conversazionali avanzati con integrazione di strumenti (MCP)
- Risoluzione di problemi complessi (matematica, codice) con modalità "Thinking"
- Applicazioni multilingue (>100 lingue)
- Scenari che richiedono un equilibrio costo/prestazioni (MoE) su VLLM
- Dialoghi multi-turno coinvolgenti e seguito preciso delle istruzioni

---

### DeepSeek-R1 70B
**DeepSeek AI • 70B parametri • Contesto: 32 000 token**

Modello 70B di DeepSeek AI

**Specifiche tecniche:**
- **Velocità** : 20 token/secondo token/secondo
- **Consumo** : 11,44 kWh/milione di token
- **Licenza** : [Licenza MIT](./licences/deepseek-r1_70b.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Ragionamento` `Grande`

**Casi d'uso:**
- Compiti di ragionamento complessi
- Generazione di testo di alta qualità
- Analisi approfondita di documenti (entro il limite del contesto di 27k)

---

## Modelli Specializzati

### Qwen3 14B
**Qwen Team • 14B parametri • Contesto: 32 000 token**

Modello denso di nuova generazione Qwen3 (14B), che offre prestazioni equivalenti a Qwen2.5 32B con una migliore efficienza.

**Specifiche tecniche:**
- **Velocità** : 69 token/secondo token/secondo ⚡
- **Consumo** : 2,65 kWh/milione di token
- **Licenza** : [Apache 2.0](./licenze/apache2.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag:** `Agente` `Ragionamento` `Veloce` `Multilingue`

**Casi d'uso:**
- Compiti generali che richiedono prestazioni e grande contesto
- Generazione di contenuti creativi e tecnici
- Analisi di dati e ragionamento complesso
- Integrazione con strumenti esterni tramite function calling

---

### Gemma 3 12B
**Google • 12B parametri • Contesto: 120 000 token**

Versione intermedia del modello Gemma 3 che offre un ottimo equilibrio tra prestazioni ed efficienza.

**Specifiche tecniche:**
- **Velocità** : 67 token/secondo token/secondo ⚡
- **Consumo** : 2,73 kWh/milione di token
- **Licenza** : [Termini d'uso di Google Gemma](./licenze/gemma3_12b.licenza.md)
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

---

### Gemma 3 4B
**Google • 4B parametri • Contesto: 120 000 token**

Modello compatto di Google che offre ottime prestazioni in un formato leggero ed economico.

**Specifiche tecniche:**
- **Velocità** : 58 token/secondo token/secondo ⚡
- **Consumo** : 0,93 kWh/milione di token 🌱
- **Licenza** : [Termini d'uso di Google Gemma](./licenze/gemma3_4b.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Visione` `Veloce` `Compatto` `Grande Contesto` `Efficiente`

**Casi d'uso:**
- Applicazioni embedded e computing edge con elaborazione di immagini
- Chatbot multimodali reattivi che richiedono bassa latenza
- Deployment su larga scala con capacità visive e testuali
- Applicazioni mobili con analisi di immagini e testi
- Elaborazione di richieste visive semplici a media complessità con alta prestazione

---

### Gemma 3 1B
**Google • 1B parametri • Contesto: 32 000 token**

Micro-modello ultra-leggero progettato per deployment su dispositivi con risorse molto limitate.

**Specifiche tecniche:**
- **Velocità** : 41 token/secondo token/secondo
- **Consumo** : 1,32 kWh/milione di token 🌱
- **Licenza** : [Termini d'uso di Google Gemma](./licenze/gemma3_1b.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag:** `Ultra-Compatto` `Embedded` `Efficiente`

**Casi d'uso:**
- Deployment su dispositivi IoT e sistemi embedded con integrazione API
- Applicazioni che richiedono inferenza locale su CPU con chiamate a funzioni
- Compiti testuali base con risposta istantanea e function calling
- Assistenti compatti per applicazioni di massa con integrazione servizi esterni
- Sistemi di controllo intelligente che integrano diversi API/servizi

---

### Lucie-7B-Instruct
**OpenLLM-France • 7B parametri • Contesto: 32 000 token**

Modello open-source multilingue causale (7B), fine-tuned da Lucie-7B. Ottimizzato per il francese.

**Specifiche tecniche:**
- **Velocità** : 41 token/secondo token/secondo
- **Consumo** : 1,32 kWh/milione di token 🌱
- **Licenza** : [Apache 2.0](./licenze/apache2.licenza.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Francese` `Open-Source` `Efficiente`

---

### Mistral Small 3.1
**Mistral AI • 24B parametri • Contesto : 60 000 token**

Modello compatto e reattivo di Mistral AI, progettato specificamente per offrire un'assistenza conversazionale fluida e rilevante con una velocità di risposta ottimale.

**Specifiche tecniche :**
- **Velocità** : 14 token/secondo token/secondo
- **Consumo** : 13.06 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tags :** `Visione` `Agente` `Sicurezza`

**Casi d'uso :**
- Applicazioni conversazionali
- Assistenti virtuali che combinano analisi di immagini e testo (26 token/s)
- Chatbot di supporto tecnico con accesso alla documentazione tecnica
- Strumenti di creazione/revisione di contenuti con risposta immediata (blog, email)
- Deployment su infrastrutture standard (24B di parametri)

---

### DeepCoder
**Agentica x Together AI • 14B parametri • Contesto : 32 000 token**

Modello IA open source (14B) di Together AI & Agentica, alternativa credibile ai modelli proprietari per la generazione di codice.

**Specifiche tecniche :**
- **Velocità** : 62 token/secondo token/secondo ⚡
- **Consumo** : 2.95 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Programmazione` `Ragionamento` `Open-Source` `Matematica` `Veloce`

**Casi d'uso :**
- Generazione di codice in più di 15 linguaggi con ottimizzazione delle prestazioni
- Debugging e refactoring di basi di codice esistenti con analisi dell'impatto
- Implementazione di algoritmi complessi (grafo, alberi, euristica)
- Trasposizione di codice tra linguaggi e framework (es. Python vs JavaScript)
- Creazione automatica di test unitari con copertura del codice > 80%

---

### Granite 3.2 Vision
**IBM • 2B parametri • Contesto : 16 384 token**

Modello rivoluzionario di IBM specializzato in visione artificiale, in grado di analizzare e comprendere direttamente documenti visivi senza ricorrere a tecnologie OCR intermedie.

**Specifiche tecniche :**
- **Velocità** : 48 token/secondo token/secondo ⚡
- **Consumo** : 1.13 kWh/milione di token 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tags :** `Visione` `Sicurezza` `Veloce` `Compatto` `Efficiente`

**Casi d'uso :**
- Estrazione di dati strutturati da fatture e moduli senza OCR
- Analisi diretta di tabelle e grafici con interpretazione delle tendenze
- Lettura e interpretazione di diagrammi tecnici (elettrici, meccanici)
- Elaborazione di documenti manoscritti con alto tasso di riconoscimento
- Visione artificiale leggera (2B parametri) con velocità elevata (79 token/s)

---

### Granite 3.3 8B
**IBM • 8B parametri • Contesto : 60 000 token**

Modello Granite 8B ottimizzato da IBM per un ragionamento e un follow-up di istruzioni migliorati, con un contesto di 128k token.

**Specifiche tecniche :**
- **Velocità** : 27 token/secondo token/secondo
- **Consumo** : 2.0 kWh/milione di token 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tags :** `Agente` `Ragionamento` `Sicurezza` `Efficiente`

**Casi d'uso :**
- Compiti generali di follow-up di istruzioni (classificazione, estrazione, Q&A)
- Assistenti IA multilingue (12 lingue)
- Elaborazione di documenti molto lunghi (128k token): riassunti e Q&A
- Generazione/completamento di codice con Fill-in-the-Middle
- Integrazione con strumenti esterni tramite function calling
- Ragionamento strutturato con il modo "Thinking"

---

### Granite 3.3 2B
**IBM • 2B parametri • Contesto : 120 000 token**

Modello Granite 2B ottimizzato da IBM, ottimizzato per il ragionamento e il follow-up di istruzioni, con un contesto di 128k token.

**Specifiche tecniche :**
- **Velocità** : 45 token/secondo token/secondo ⚡
- **Consumo** : 1.2 kWh/milione di token 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tags :** `Agente` `Ragionamento` `Sicurezza` `Veloce` `Efficiente`

**Casi d'uso :**
- Deployment leggeri con grande contesto (128k token)
- Compiti generali di follow-up di istruzioni su risorse limitate
- Assistenti IA multilingue compatti
- Elaborazione di documenti lunghi su dispositivi meno potenti
- Generazione/completamento di codice FIM su workstation standard

---

### Granite 3.1 MoE
**IBM • 3B parametri • Contesto : 32 000 token**

Modello innovativo di IBM che utilizza l'architettura Mixture-of-Experts (MoE) per offrire prestazioni eccezionali e ottimizzare drasticamente l'utilizzo delle risorse computazionali.

**Specifiche tecniche :**
- **Velocità** : 74 token/secondo token/secondo ⚡
- **Consumo** : 0.73 kWh/milione di token 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tags :** `Agente` `Sicurezza` `Veloce` `MoE` `Efficienza` `Efficiente`

**Casi d'uso :**
- Applicazioni generaliste con costo di inferenza ottimizzato (42 token/secondo)
- Elaborazione di documenti in ambienti CPU con utilizzo RAM limitato
- Analisi specializzate con attivazione dinamica delle parti pertinenti del modello
- Deployment ad alta densità con basso consumo energetico per inferenza
- Elaborazione parallela di diversi tipi di query con specializzazione MoE

---

### Cogito 14B
**Deep Cogito • 14B parametri • Contesto : 32 000 token**

Modello di Deep Cogito progettato per eccellere nelle attività di ragionamento profondo e comprensione contestuale raffinata, ideale per applicazioni analitiche avanzate.

**Specifiche tecniche :**
- **Velocità** : 60 token/secondo token/secondo ⚡
- **Consumo** : 3.05 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agente` `Ragionamento` `Comprensione` `Analisi` `Veloce`

**Casi d'uso :**
- Analisi semantica di testi con identificazione delle implicazioni non esplicite
- Ragionamento causale strutturato con identificazione delle relazioni causa-effetto
- Sintesi di documenti complessi con estrazione delle informazioni chiave
- Sistemi di domanda-risposta precisi su corpus documentari specializzati
- Analisi argomentativa con valutazione della solidità dei ragionamenti

---

### Cogito 32B
**Deep Cogito • 32B parametri • Contesto : 32 000 token**

Versione avanzata del modello Cogito che offre capacità di ragionamento e analisi notevolmente amplificate, progettata per applicazioni più esigenti in termini di intelligenza artificiale analitica.

**Specifiche tecniche :**
- **Velocità** : 32 token/secondo token/secondo
- **Consumo** : 5.73 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agente` `Ragionamento` `Comprensione` `Analisi`

**Casi d'uso :**
- Analisi di scenari multi-fattoriali con valutazione probabilistica dei risultati
- Risoluzione di problemi scientifici con dimostrazione formale dei passaggi
- Applicazioni ad alta criticità che richiedono precisione e verificabilità dei risultati
- Sistemi esperti in ambiti specializzati (giuridico, medico, tecnico)
- Analisi con ragionamento multi-fase e spiegabilità completa delle conclusioni

---

### Qwen3 32B
**Qwen Team • 32B parametri • Contesto : 40 000 token**

Modello potente della nuova generazione Qwen3, che offre avanzate capacità di ragionamento, codifica e agenti, con un contesto esteso.

**Specifiche tecniche :**
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agente` `Ragionamento` `Multilingua` `Grande Contesto`

**Casi d'uso :**
- Agenti conversazionali avanzati con grande contesto e integrazione di strumenti (MCP)
- Risoluzione di problemi complessi (matematica, codifica) con modalità "Thinking"
- Analisi e generazione di documenti voluminosi
- Applicazioni multilingue (>100 lingue) che richiedono una comprensione approfondita

---

### QwQ-32B
**Qwen Team • 32B parametri • Contesto : 32 000 token**

Modello da 32 miliardi di parametri migliorato con apprendimento per rinforzo (RL) per eccellere nel ragionamento, nella codifica, nelle matematiche e nelle attività di agente.

**Specifiche tecniche :**
- **Velocità** : 35 token/secondo token/secondo
- **Consumo** : 5.22 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agente` `Ragionamento` `Codifica` `Matematica`

**Casi d'uso :**
- Risoluzione di problemi complessi che richiedono ragionamento e utilizzo di strumenti
- Generazione ed esecuzione di codice con verifica dei risultati
- Compiti matematici avanzati con verifica dell'esattezza
- Applicazioni di agente in grado di interagire con l'ambiente
- Follow-up di istruzioni migliorato e allineamento con le preferenze umane

---

### DeepSeek-R1 14B
**DeepSeek AI • 14B parametri • Contesto : 32 000 token**
Versione compatta ed efficiente del modello DeepSeek-R1, che offre un ottimo compromesso tra prestazioni e leggerezza per i deployamenti che richiedono flessibilità e reattività.

**Specifiche tecniche :**
- **Velocità** : 60 tokens/secondo tokens/secondo ⚡
- **Consumo** : 3.05 kWh/milione di tokens
- **Licenza** : [MIT licence](./licences/deepseek-r1_14b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Ragionamento` `Compact` `Versatile` `Veloce`

**Casi d'uso :**
- Applicazioni generaliste con esigenze di inferenza rapida (44 tokens/s)
- Deployamenti su server standard senza GPU specializzati (14B parametri)
- Elaborazione testi con analisi contestuale e tempo di risposta < 2s
- Deployamento su calcolo periferico con inferenza locale ottimizzata
- Prototipazione rapida di applicazioni IA con tempo di iterazione breve

---

### DeepSeek-R1 32B
**DeepSeek AI • 32B parametri • Contesto : 32 000 tokens**

Versione intermedia del modello DeepSeek-R1 che offre un equilibrio strategico tra le capacità avanzate della versione 70B e l'efficienza della versione 14B, per una versatilità e prestazioni ottimali.

**Specifiche tecniche :**
- **Velocità** : 33 tokens/secondo tokens/secondo
- **Consumo** : 5.54 kWh/milione di tokens
- **Licenza** : [MIT licence](./licences/deepseek-r1_32b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Ragionamento` `Versatile`

**Casi d'uso :**
- Applicazioni che richiedono un buon equilibrio tra potenza e costo (32B parametri)
- Elaborazione testi professionale con analisi delle sottigliezze semantiche
- Generazione automatica di rapporti strutturati a partire da dati grezzi
- Applicazioni che combinano analisi dei dati e generazione di contenuti
- Assistenti specializzati per settori tecnici (giuridico, medico, tecnico)

---

### Cogito 3B
**Deep Cogito • 3B parametri • Contesto : 32 000 tokens**

Versione compatta del modello Cogito, ottimizzata per il ragionamento su dispositivi con risorse limitate.

**Specifiche tecniche :**
- **Velocità** : 63 tokens/secondo tokens/secondo ⚡
- **Consumo** : 0.86 kWh/milione di tokens 🌱
- **Licenza** : [LLAMA 3.2 Community Licence](./licences/cogito_3b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Ragionamento` `Compact` `Embedded` `Efficiente` `Veloce`

---

### Granite Embedding
**IBM • 278M parametri • Contesto : 32 000 tokens**

Modello di embedding ultra-leggero di IBM per la ricerca semantica e la classificazione.

**Specifiche tecniche :**
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Compact` `Semantico` `Efficiente`

---

### Granite 3 Guardian 2B
**IBM • 2B parametri • Contesto : 8 192 tokens**

Modello compatto di IBM specializzato nella sicurezza e conformità, che rileva i rischi e i contenuti inappropriati.

**Specifiche tecniche :**
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tag :** `Sicurezza` `Conformità` `Compact` `Filtraggio` `Efficiente`

---

### Granite 3 Guardian 8B
**IBM • 8B parametri • Contesto : 32 000 tokens**

Modello di IBM specializzato nella sicurezza e conformità, che offre capacità avanzate di rilevamento dei rischi.

**Specifiche tecniche :**
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tag :** `Sicurezza` `Conformità` `Filtraggio`

---

### Qwen 2.5 0.5B
**Qwen Team • 0.5B parametri • Contesto : 32 000 tokens**

Micro-modello ultra-leggero della serie Qwen 2.5, progettato per un'efficienza massima su dispositivi limitati.

**Specifiche tecniche :**
- **Velocità** : 57 tokens/secondo tokens/secondo ⚡
- **Consumo** : 0.95 kWh/milione di tokens 🌱
- **Licenza** : [MIT licence](./licences/qwen2.5_0.5b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Ultra-compact` `Veloce` `Embedded` `Efficiente`

---

### Qwen 2.5 1.5B
**Qwen Team • 1.5B parametri • Contesto : 32 000 tokens**

Modello molto compatto della serie Qwen 2.5, che offre un buon equilibrio tra prestazioni e dimensioni per deployamenti leggeri.

**Specifiche tecniche :**
- **Velocità** : 94 tokens/secondo tokens/secondo ⚡
- **Consumo** : 0.58 kWh/milione di tokens 🌱
- **Licenza** : [MIT licence](./licences/qwen2.5_1.5b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compact` `Veloce` `Embedded` `Efficiente`

---

### Qwen 2.5 14B
**Qwen Team • 14B parametri • Contesto : 32 000 tokens**

Modello versatile di dimensione media della serie Qwen 2.5, buon equilibrio tra prestazioni e risorse.

**Specifiche tecniche :**
- **Velocità** : 61 tokens/secondo tokens/secondo ⚡
- **Consumo** : 3.0 kWh/milione di tokens
- **Licenza** : [MIT licence](./licences/qwen2.5_14b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Versatile` `Multilingue` `Veloce`

---

### Qwen 2.5 32B
**Qwen Team • 32B parametri • Contesto : 32 000 tokens**

Modello potente della serie Qwen 2.5, che offre capacità avanzate di comprensione e generazione.

**Specifiche tecniche :**
- **Velocità** : 32 tokens/secondo tokens/secondo
- **Consumo** : 5.73 kWh/milione di tokens
- **Licenza** : [MIT licence](./licences/qwen2.5_32b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Versatile` `Multilingue` `Ragionamento`

---

### Qwen 2.5 3B
**Qwen Team • 3B parametri • Contesto : 32 000 tokens**

Modello compatto ed efficiente della serie Qwen 2.5, adatto alle attività generali su risorse limitate.

**Specifiche tecniche :**
- **Velocità** : 60 tokens/secondo tokens/secondo ⚡
- **Consumo** : 0.9 kWh/milione di tokens 🌱
- **Licenza** : [MIT licence](./licences/qwen2.5_3b.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compact` `Veloce` `Versatile` `Efficiente`

---

### Qwen3 0.6b
**Qwen Team • 0.6B parametri • Contesto : 32 000 tokens**

Modello compatto ed efficiente della serie Qwen3, adatto alle attività generali su risorse limitate.

**Specifiche tecniche :**
- **Velocità** : 60 tokens/secondo tokens/secondo ⚡
- **Consumo** : 0.9 kWh/milione di tokens 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compact` `Veloce` `Versatile` `Efficiente`

---

### Qwen3 1.7b
**Qwen Team • 1.7B parametri • Contesto : 32 000 tokens**

Modello molto compatto della serie Qwen3, che offre un buon equilibrio tra prestazioni e dimensioni per deployamenti leggeri.

**Specifiche tecniche :**
- **Velocità** : 83 tokens/secondo tokens/secondo ⚡
- **Consumo** : 0.65 kWh/milione di tokens 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compact` `Veloce` `Embedded` `Efficiente`

---

### Qwen3 4b
**Qwen Team • 4B parametri • Contesto : 32 000 tokens**

Modello compatto della serie Qwen3 che offre ottime prestazioni in un formato leggero ed economico.

**Specifiche tecniche :**
- **Velocità** : 48 tokens/secondo tokens/secondo
- **Consumo** : 1.13 kWh/milione di tokens 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compact` `Efficiente`

---

### Qwen3 8b
**Qwen Team • 8B parametri • Contesto : 32 000 tokens**

Modello Qwen3 8B che offre un buon equilibrio tra prestazioni ed efficienza per attività generali.

**Specifiche tecniche :**
- **Velocità** : 29 tokens/secondo tokens/secondo
- **Consumo** : 1.87 kWh/milione di tokens 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Ragionamento` `Agente` `Multilingue` `Efficiente`

---

### Qwen2.5-VL 3B
**Qwen Team • 3.8B parametri • Contesto : 128 000 tokens**

Modello Vision-Langage compatto, soluzione performante per l'IA in periferia (edge AI).

**Specifiche tecniche :**
- **Velocità** : 65 tokens/secondo tokens/secondo ⚡
- **Consumo** : 0.83 kWh/milione di tokens 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Agente` `Ragionamento` `Veloce` `Efficiente` `OCR` `Localizzazione Visiva` `Edge AI`

---

### Qwen2.5-VL 7B
**Qwen Team • 7B (8.3B) parametri • Contesto : 128 000 tokens**

Modello Vision-Langage performante, che supera GPT-4o-mini in alcune attività.

**Specifiche tecniche :**
- **Velocità** : 37 tokens/secondo tokens/secondo
- **Consumo** : 1.46 kWh/milione di tokens 🌱
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Agente` `Ragionamento` `Efficiente` `OCR` `Localizzazione Visiva`

---

### Foundation-Sec-8B
**Foundation AI — Cisco • 8B parametri • Contesto : 16 000 tokens**

Modello di linguaggio specializzato per la cybersecurity, ottimizzato per l'efficienza.
- **Velocità** : 22 tokens/secondo tokens/secondo
- **Consumo** : 2,46 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ✅ Sicurezza

**Tags :** `Sicurezza` `Compacto`

---

### devstral 24B
**Mistral AI & All Hands AI • 24B parametri • Contesto : 120 000 tokens**

Devstral è un LLM agente per compiti di ingegneria del software.

**Specifiche tecniche :**
- **Velocità** : 53 tokens/secondo tokens/secondo ⚡
- **Consumo** : 4,5 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache2.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tags :** `Agente` `Programmazione` `Open-Source` `Grande Contesto`

**Casi d'uso :**
- Esplorazione e modifica di basi di codice
- Agentic
- Europeo

---

## Casi d'uso consigliati

### Dialogo multilingue

Chatbot e assistenti in grado di comunicare in più lingue con rilevamento automatico, mantenimento del contesto su tutta la conversazione e comprensione delle specificità linguistiche

**Modelli consigliati :**

- Llama 3.3
- Mistral Small 3.1
- Qwen 2.5
- Granite 3.3

### Analisi di documenti lunghi

Elaborazione di documenti voluminosi (>100 pagine) con mantenimento del contesto su tutto il testo, estrazione di informazioni chiave, generazione di riassunti pertinenti e risposta a domande specifiche sul contenuto

**Modelli consigliati :**

- Gemma 3
- DeepSeek-R1
- Granite 3.3

### Programmazione e sviluppo
Generazione e ottimizzazione di codice in diversi linguaggi, debugging, refactoring, sviluppo di funzionalità complete, comprensione delle implementazioni algoritmiche complesse e creazione di test unitari

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

Applicazioni che richiedono capacità specifiche in materia di sicurezza; filtraggio di contenuti sensibili, tracciabilità dei ragionamenti, verifica RGPD/HDS, minimizzazione dei rischi, analisi delle vulnerabilità e rispetto delle normative settoriali

**Modelli consigliati :**

- Granite Guardian
- Granite 3.3
- Devstral
- Mistral Small 3.1
- Foundation-Sec-8B

### Deployment leggeri e embedded

Applicazioni che richiedono un'impronta minima in termini di risorse, deployment su dispositivi con capacità limitata, inferenza in tempo reale su CPU standard e integrazione in sistemi embedded o IoT

**Modelli consigliati :**

- Gemma 3
- Granite 3.1 MoE
- Granite Guardian
- Granite 3.3
