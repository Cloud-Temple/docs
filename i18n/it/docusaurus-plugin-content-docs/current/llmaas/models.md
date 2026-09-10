---
title: Catalogo dei Modelli IA
sidebar_position: 2
---

# Catalogo dei Modelli LLM as a Service

## Panoramica

Cloud Temple LLMaaS offre **56 modelli linguistici di grandi dimensioni** accuratamente selezionati e ottimizzati per soddisfare i requisiti **SecNumCloud** più rigorosi. Il nostro catalogo copre l'intero spettro, dai micro-modelli ultra-efficienti ai modelli estremamente voluminosi.

### Statistiche Globali

| Metrica | Valore |
|----------|--------|
| **Numero totale di modelli** | 56 modelli |
| **Contesto minimo** | 512 tokens |
| **Contesto massimo** | 1.000.000 tokens |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranità ✅ C5 ✅ |
| **Localizzazione** | 100% Francia 🇫🇷 |

### Tariffazione

| Tipo di utilizzo | Prezzo |
|-------------------|------|
| **Token in input** | 1,8€ / milione di token |
| **Token in output** | 8€ / milione di token |
| **Ragionamento avanzato** | 8€ / milione di token |
| **Reranking dei documenti** | 4€ / milione di token sottoposti a reranking |
| **Batch asincrono (input)** | 0,9€ / milione di token |
| **Batch asincrono (output)** | 4€ / milione di token |

## Modelli Chat & Ragionamento

Modelli generalisti per il dialogo, l'analisi, il ragionamento e i compiti multilingua.

### cogito:32b
**Deep Cogito • 32B parametri • Contesto : 32,000 token**

Modello di ragionamento analitico avanzato, progettato per la scomposizione di problemi complessi e la verifica logica.

**Specifiche tecniche:**
- **Velocità** : 21 token/secondo
- **Consumo** : 6.32 kWh/milione di token
- **Licenza** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Ragionamento` `Comprensione` `Analisi`

**Casi d'uso :**
- Analisi di scenari multifattoriali
- Risoluzione di problemi scientifici con dimostrazione formale
- Sistemi esperti (giuridico, medico, tecnico)

---

### gemma3:27b
**Google • 27B parametri • Contesto : 120.000 token**

Modello multimodale di Google con visione integrata e supporto per oltre 140 lingue. Contesto di 120K token.

**Specifiche tecniche:**
- **Velocità** : 23 token/secondo
- **Consumo** : 5.80 kWh/milione di token
- **Licenza** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Vision` `Agent` `Grand Contexte`

**Casi d'uso :**
- Analisi di documenti con contesto esteso (120K token)
- Elaborazione simultanea di immagini e testo
- Estrazione strutturata da PDF e documenti scansionati

---

### glm-4.7-flash:30b
**Zhipu AI • 30B parametri • Contesto : 120.000 token**

Modello veloce con un eccellente equilibrio tra prestazioni e latenza per il ragionamento e l'analisi.

**Specifiche tecniche:**
- **Velocità** : 88 token/secondo
- **Consumo** : 1.58 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Rapide` `Grand Contexte` `Multilingue`

**Casi d'uso :**
- Assistenti conversazionali veloci
- Analisi di documenti lunghi (120k token)
- Compiti di ragionamento a bassa latenza

---

### gpt-oss:120b
**OpenAI • 120B parametri • Contesto : 120.000 tokens**

Modello open-weight all'avanguardia di OpenAI con ragionamento configurabile e catena di pensiero trasparente.

**Specifiche tecniche:**
- **Velocità** : 94 tokens/secondo
- **Consumo** : 2.37 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `MoE` `Agente` `Ragionamento` `Open-Source` `Molto Grande`

**Casi d'uso :**
- Agent conversazionali avanzati con ragionamento complesso
- Applicazioni che richiedono trasparenza nel processo di ragionamento
- Scenari commerciali che richiedono una licenza permissiva

---

### gpt-oss:20b
**OpenAI • 20B parametri • Contesto : 120,000 token**

Version compatta del modello OpenAI, ottimizzata per l'inferenza rapida con buone capacità di ragionamento.

**Specifiche tecniche:**
- **Velocità** : 41 token/secondo
- **Consumo** : 3.25 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `MoE` `Agent` `Raisonnement` `Open-Source` `Compact` `Rapide`

**Casi d'uso :**
- Inferenza rapida con buone capacità di ragionamento
- Casi d'uso agentici (appel de fonctions, navigation web, exécution de code)
- Applicazioni con budget di calcolo limitato

---

### llama3.3:70b
**Meta • 70B parametri • Contesto : 132.000 tokens**

Modello multilingue di Meta, eccellente nel dialogo naturale e nella comprensione sfumata in 8 lingue.

**Specifiche tecniche:**
- **Velocità** : 10 tokens/secondo
- **Consumo** : 13,33 kWh/milione di tokens
- **Licenza** : [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Dialogue` `Multilingue`

**Casi d'uso :**
- Chatbot multilingue (8 lingue)
- Analisi di documenti giuridici o tecnici di grandi dimensioni
- Generazione di testi strutturati con fedeltà stilistica

---

### ministral-3:14b
**Mistral AI • 14B parametri • Contesto : 250,000 token**

Il più potente della famiglia Ministral, con ragionamento e codifica avanzati. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 28 token/secondo
- **Consumo** : 4.74 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Alta Prestazione` `Ragionamento` `Codice`

**Casi d'uso :**
- Risoluzione di problemi complessi
- Assistenti per la codifica e l'ingegneria
- Analisi approfondita di documenti con ragionamento

---

### ministral-3:3b
**Mistral AI • 3B parametri • Contesto : 250,000 token**

Modello Mistral compatto, performante nonostante le sue dimensioni ridotte. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 22 token/secondo
- **Consumo** : 1.75 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compact` `Efficient`

**Casi d'uso :**
- Assistenti personali reattivi
- Classificazione e instradamento rapidi
- Compiti semplici con ampio contesto

---

### ministral-3:8b
**Mistral AI • 8B parametri • Contesto : 250.000 tokens**

Modello intermedio Ministral con un eccellente compromesso tra prestazioni e velocità. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 40 tokens/secondo
- **Consumo** : 3.33 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Efficient` `Raisonnement`

**Casi d'uso :**
- Assistenti conversazionali avanzati
- Analisi di documenti ed estrazione di informazioni
- Buon compromesso velocità/qualità

---

### mistral-small3.2:24b
**Mistral AI • 24B parametri • Contesto : 128,000 token**

Modello Mistral con migliorato seguimento delle istruzioni, function calling robusto e capacità visive. Rilevamento integrato di contenuti problematici.

**Specifiche tecniche:**
- **Velocità** : 28 token/secondo
- **Consumo** : 5.05 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tag :** `Visione` `Agente` `Sicurezza` `Seguimento delle istruzioni`

**Casi d'uso :**
- Agent conversazionali affidabili con preciso seguimento delle istruzioni
- Integrazione di strumenti esterni tramite function calling
- Applicazioni che richiedono un filtraggio di sicurezza nativo

---

### mistral-small4:119b
**Mistral AI • 119B parametri • Contesto : 262,144 tokens**

Modello Mistral ad alte prestazioni (119B) con visione, sicurezza integrata e contesto di 262K tokens. Veloce (100 t/s).

**Specifiche tecniche:**
- **Velocità** : 100 token/secondo
- **Consumo** : 2,00 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tags :** `Visione` `Agent` `Sicurezza` `Contesto Esteso` `Veloce`

**Casi d'uso :**
- Agent conversazionali ad alte prestazioni con visione
- Analisi di documenti molto lunghi (262K tokens)
- Applicazioni critiche che richiedono affidabilità e sicurezza

---

### nemotron-3-super:120b
**NVIDIA • 120B parametri • Contesto : 1,000,000 token**

Modello NVIDIA ottimizzato per agenti collaborativi, ragionamento esteso e carichi di lavoro ad alto volume. Contesto di 1M token.

**Specifiche tecniche:**
- **Velocità** : 72 token/secondo
- **Consumo** : 1.93 kWh/milione di token
- **Licenza** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Ragionamento` `Contesto Esteso`

**Casi d'uso :**
- Agenti autonomi con chiamate multiple a strumenti
- Automazione di flussi di lavoro ad alto volume
- Analisi di documenti lunghi con estrazione precisa

---

### nemotron-cascade:30b
**NVIDIA • 30B parametri • Contesto : 1,000,000 token**

Modello NVIDIA specializzato in matematica (medaglia d'oro IMO 2025) e decomposizione dei problemi. Contesto 1M token.

**Specifiche tecniche:**
- **Velocità** : 130 token/secondo
- **Consumo** : 1.93 kWh/milione di token
- **Licenza** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Raisonnement` `Grand Contexte` `Maths`

**Casi d'uso:**
- Risoluzione di problemi matematici complessi
- Agent con chiamate multiple a strumenti
- Analisi di documenti lunghi

---

### nemotron3-nano:30b
**NVIDIA • 30B parametri • Contesto: 1.000.000 token**

Modello NVIDIA ultra-veloce (160 t/s) con ragionamento e function calling. Contesto di 1M tokens.

**Specifiche tecniche:**
- **Velocità** : 160 token/secondo
- **Consumo** : 1.56 kWh/milione di token
- **Licenza** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Raisonnement` `Grand Contexte` `Rapide`

**Casi d'uso :**
- Agenti autonomi che richiedono una risposta rapida
- Ragionamento logico e risoluzione dei problemi
- Analisi di documenti lunghi con estrazione precisa

---

### olmo-3:32b
**AllenAI • 32B parametri • Contesto : 65,536 token**

Primo modello di ragionamento completamente open-source a questa scala. Trasparenza totale (dati, codice, pesi).

**Specifiche tecniche:**
- **Velocità** : 22 token/secondo
- **Consumo** : 5.98 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Open-Source` `Contesto Ampio` `Ragionamento` `Trasparente` `Codice` `Alta Prestazione`

**Casi d'uso :**
- Ragionamento complesso e risoluzione di problemi a più fasi
- Sviluppo software con trasparenza del processo decisionale
- Task critiche che richiedono una completa auditabilità

---

### olmo-3:7b
**AllenAI • 7B parametri • Contesto : 65,536 token**

Modello completamente open-source ed efficiente, eccellente in matematica e programmazione con totale trasparenza.

**Specifiche tecniche:**
- **Velocità** : 35 token/secondo
- **Consumo** : 1.13 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Open-Source` `Contesto Ampio` `Trasparente` `Efficiente` `Matematica` `Codice`

**Casi d'uso :**
- Ricerca accademica che richiede una riproducibilità totale
- Programmazione e risoluzione di problemi matematici
- Analisi di documenti con tracciabilità completa

---

### qwen3-2507-think:4b
**Qwen Team • 4B parametri • Contesto : 250,000 token**

Modello compatto ottimizzato per il ragionamento profondo (logica, matematica, scienza, codice). Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 55 token/secondo
- **Consumo** : 2.42 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Ragionamento` `Contesto Ampio` `Compatto` `Veloce`

**Casi d'uso :**
- Ragionamento complesso (logica, matematica, scienza, codice)
- Agent con ampio storico di conversazione (250K token)
- Analisi di documenti voluminosi con ragionamento profondo

---

### qwen3-2507:235b
**Qwen Team • 235B parametri • Contesto : 200.000 token**

Modello più potente del catalogo (235B parametri, 22B attivi). Eccelle in matematica, programmazione e ragionamento logico.

**Specifiche tecniche:**
- **Velocità** : 56 token/secondo
- **Consumo** : 3.97 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `MoE` `Agent` `Ragionamento` `Molto Grande`

**Casi d'uso :**
- Risoluzione di problemi matematici e logici complessi
- Compiti che richiedono una vasta base di conoscenze
- Assistente di codifica avanzato

---

### qwen3-omni:30b
**Qwen Team • 30B parametri • Contesto : 32.768 token**

Modello omnimodale nativo — comprende simultaneamente testo, immagini, video e audio.

**Specifiche tecniche:**
- **Velocità** : 19 token/secondo
- **Consumo** : 7.43 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Omni` `Audio` `Visione` `Agente` `Multimodale`

**Casi d'uso :**
- Interazioni multimodali (testo + immagine + audio + video)
- Analisi combinata di video e audio
- Assistenti intelligenti di nuova generazione

---

### qwen3.5:0.8b
**Qwen Team • 0.8B parametri • Contesto : 250,000 token**

Modello ultra-leggero con un contesto eccezionale di 250K token — notevole per un modello di queste dimensioni.

**Specifiche tecniche:**
- **Velocità** : 16 token/secondo
- **Consumo** : 2.39 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compatto` `Efficiente` `Ampio Contesto` `Multilingue`

**Casi d'uso :**
- Elaborazione del testo con contesto molto ampio (250K tokens)
- Classificazione e ordinamento rapido
- Assistenti leggeri con cronologia estesa

---

### qwen3.5:4b
**Qwen Team • 4B parametri • Contesto : 250,000 token**

Modello Qwen3.5 compatto con un buon compromesso tra prestazioni/efficienza e un contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 37 token/secondo
- **Consumo** : 3.64 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compact` `Efficient` `Grand Contexte` `Multilingue`

**Casi d'uso :**
- Assistenti conversazionali con ampio contesto
- Riepilogo di testo e classificazione
- Compiti di programmazione semplici

---

### qwen3.5:9b
**Qwen Team • 9B parametri • Contesto : 250.000 tokens**

Modello Qwen3.5 intermedio con ragionamento solido e contesto esteso a 250K tokens.

**Specifiche tecniche:**
- **Velocità** : 32 tokens/secondo
- **Consumo** : 4,23 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Efficient` `Grand Contexte` `Multilingue` `Raisonnement`

**Casi d'uso :**
- Assistenti conversazionali avanzati
- Analisi di documenti ed estrazione di informazioni
- Compiti di ragionamento di complessità media

---

### qwen3.6:27b
**Qwen Team • 27B parametri • Contesto : 1,000,000 token**

Modello generalista di riferimento con un contesto nativo di 1M di token. Eccelle nel ragionamento, nel seguimento delle istruzioni e nel multilinguismo.

**Specifiche tecniche:**
- **Velocità** : 80 token/secondo
- **Consumo** : 2.78 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Grand Contexte` `Multilingue` `Vision` `Raisonnement`

**Casi d'uso :**
- Assistenti versatili con un preciso seguimento delle istruzioni
- Analisi di documenti molto voluminosi (1M tokens)
- Applicazioni multilingue con ragionamento logico
- Programmazione e generazione di codice

---

### qwen3:0.6b
**Qwen Team • 0.6B parametri • Contesto : 40,000 token**

Micro-modello ultra-veloce per compiti semplici e routing. 40K token di contesto.

**Specifiche tecniche:**
- **Velocità** : 46 token/secondo
- **Consumo** : 1.33 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Compact` `Rapide` `Efficient` `Multilingue`

**Casi d'uso :**
- Classificazione e ordinamento rapido
- Assistenti leggeri a bassa latenza
- Routing in architetture multi-modello

---

## Modelli di Programmazione & Agenti

Modelli specializzati nel codice, nell'ingegneria del software e negli agenti autonomi.

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B parametri • Contesto : 200,000 token**

Modello agentico all'avanguardia per l'ingegneria del software. Prestazioni vicine ai modelli >100B per il codice. Visione integrata.

**Specifiche tecniche:**
- **Velocità** : 33 token/secondo
- **Consumo** : 4.23 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tags :** `Agent` `Programmazione` `Visione` `Open-Source` `Contesto Ampio` `Veloce`

**Casi d'uso :**
- Agenti di codifica autonomi
- Refactoring rapido del codice
- Attività di ingegneria iterative

---

### functiongemma:270m
**Google • 270M parametri • Contesto : 32.768 token**

Micro-modello specializzato nel rilevamento delle chiamate a funzioni. Ideale come router in un'architettura agentica.

**Specifiche tecniche:**
- **Velocità** : 40 token/secondo
- **Consumo** : 0.97 kWh/milione di token
- **Licenza** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Compact` `Efficient` `Function Calling`

**Casi d'uso :**
- Router per strumenti in un'architettura agentica
- Rilevamento delle intenzioni di chiamata a funzioni
- Pre-filtraggio rapido prima del routing

---

### qwen-coder-next:80b
**Qwen Team • 80B parametri • Contesto : 250.000 token**

Modello all'avanguardia per il codice e il ragionamento complesso. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 97 token/secondo
- **Consumo** : 2.29 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Programmazione` `MoE` `Contesto Ampio`

**Casi d'uso :**
- Assistente di programmazione avanzato (scala repository)
- Analisi e refactoring di codice complesso
- Agenti autonomi di ingegneria del software

---

### qwen3-next:80b
**Qwen Team • 80B parametri • Contesto : 250,000 token**

Modello versatile da 80B ottimizzato per contesti ampi, function calling e ragionamento strutturato.

**Specifiche tecniche:**
- **Velocità** : 67 token/secondo
- **Consumo** : 2.09 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Grand Contexte` `MoE`

**Casi d'uso :**
- Agenti conversazionali avanzati con integrazione di strumenti
- Analisi di documenti di grandi dimensioni
- Generazione di codice e ragionamento strutturato

---

### qwen3.6:35b
**Qwen Team • 35B parametri • Contesto : 1,000,000 tokens**

Leader nell'ingegneria del software agentico (SWE-bench 73.4%). Contesto di 1M tokens, visione e tool calling integrati.

**Specifiche tecniche:**
- **Velocità** : 121 tokens/secondo
- **Consumo** : 2.07 kWh/milione tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Programmation` `Grand Contexte` `MoE` `Vision` `Raisonnement`

**Casi d'uso :**
- Assistente di codifica agentico negli IDE (Cursor, Continue.dev, VS Code Copilot)
- Analisi di intere codebase (1M tokens)
- Revisione del codice automatizzata e CI/CD intelligenti
- Risoluzione di bug complessi con ragionamento multi-step

---

### rnj-1:8b
**Essential AI • 8B parametri • Contesto : 32.000 tokens**

Modello specializzato STEM — eccelle nel codice (83.5% HumanEval+), matematica e scienze.

**Specifiche tecniche:**
- **Velocità** : 23 token/secondo
- **Consumo** : 1,69 kWh/milione di token
- **Licenza** : [Open Weights](./licences/open_weights.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Code` `Maths` `STEM` `Raisonnement` `Efficient`

**Casi d'uso :**
- Generazione di codice avanzato
- Risoluzione di problemi matematici complessi
- Attività scientifiche e tecniche

---

## Modelli Vision & Multimodali

Modelli per l'analisi di immagini, video, OCR e documenti visivi.

### deepseek-ocr
**DeepSeek AI • 3B parametri • Contesto : 8,192 token**

Modello OCR specializzato per l'estrazione di testo ad alta precisione con preservazione della formattazione (tableaux, formules).

**Specifiche tecniche:**
- **Velocità** : 84 token/secondo
- **Consumo** : 0.66 kWh/milione di token
- **Licenza** : [MIT licence](./licences/mit_licence.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Vision` `OCR` `Efficient`

**Casi d'uso :**
- Estrazione di testo strutturato (Markdown/LaTeX) da immagini/PDF
- Digitalizzazione di documenti con tabelle e formule

---

### gemma4:31b
**Google • 31B parametri • Contesto : 250,000 token**

Modello denso multimodale di Google, classificato 3° al mondo su Arena AI. Visione avanzata, ragionamento e programmazione. Contesto 250K token.

**Specifiche tecniche:**
- **Velocità** : 59 token/secondo
- **Consumo** : 3.77 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Grand Contexte` `Vision` `Raisonnement` `Multilingue` `Open-Source`

**Casi d'uso :**
- Agent autonomi con ragionamento e chiamate a strumenti
- Analisi di documenti di grandi dimensioni con visione
- Comprensione visiva (OCR, grafici, documenti scansionati)

---

### gemma4:e2b
**Google • 31B (E2B) parametri • Contesto : 128,000 token**

Variante ultra-veloce (125 t/s) di Gemma 4 con visione. Eccellente efficienza energetica.

**Specifiche tecniche:**
- **Velocità** : 125 token/secondo
- **Consumo** : 1.11 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Visione` `Veloce` `Efficiente`

**Casi d'uso :**
- Analisi di immagini con bassa latenza
- Documenti di grandi dimensioni con impronta ridotta

---

### gemma4:e4b
**Google • 31B (E4B) parametri • Contesto : 128.000 token**

Variante di Gemma 4 con un miglior compromesso qualità/velocità rispetto alla versione E2B. Visione integrata.

**Specifiche tecniche:**
- **Velocità** : 85 token/secondo
- **Consumo** : 1,63 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Vision` `Rapide`

**Casi d'uso :**
- Analisi di documenti e immagini con un buon compromesso qualità/velocità
- Alternativa rapida per i compiti di visione

---

### granite3.2-vision:2b
**IBM • 2B parametri • Contesto : 16.384 token**

Modello vision compact IBM Granite per OCR rapido ed estrazione di dati da documenti scansionati.

**Specifiche tecniche:**
- **Velocità** : 49 token/secondo
- **Consumo** : 0.80 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Vision` `Compact` `Efficient` `OCR`

**Casi d'uso :**
- OCR rapido su documenti leggeri
- Estrazione di dati da immagini
- Analisi visiva a basso consumo

---

### qwen3-vl:235b
**Qwen Team • 235B parametri • Contesto : 200,000 token**

Il modello multimodale più potente del catalogo. Comprensione visiva all'avanguardia e ragionamento eccezionale.

**Specifiche tecniche:**
- **Velocità** : 24 token/secondo
- **Consumo** : 5.56 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Ragionamento` `Contesto Esteso` `Visione`

**Casi d'uso:**
- Automazione documentale complessa (OCR multilingue, estrazione strutturata)
- Agent visivi intelligenti
- Analisi scientifica avanzata (STEM, ragionamento spaziale)
- RAG Multimodale su documenti e video

---

### qwen3-vl:2b
**Qwen Team • 2B parametri • Contesto : 250.000 tokens**

Modello vision ultra-compattto per OCR rapido, rilevamento di oggetti e applicazioni embedded.

**Specifiche tecniche:**
- **Velocità** : 64 tokens/secondo
- **Consumo** : 0.95 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Vision` `Compact` `Efficient` `Multimodal` `OCR`

**Casi d'uso :**
- Analisi di immagini in tempo reale
- OCR e lettura di documenti leggeri
- Ordinamento e classificazione visiva rapida

---

### qwen3-vl:30b
**Qwen Team • 30B parametri • Contesto : 250,000 token**

Modello multimodale ad alte prestazioni per l'OCR, il rilevamento degli oggetti, l'analisi video e il ragionamento spazio-temporale.

**Specifiche tecniche:**
- **Velocità** : 39 token/secondo
- **Consumo** : 3,39 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Vision` `Agent` `Grand Contexte` `Multimodal` `Vidéo` `OCR`

**Casi d'uso:**
- Analisi di video lunghi e sorveglianza intelligente
- Estrazione di dati strutturati (documents, tableaux, graphiques)
- Assistenti visivi con comprensione spaziale

---

### qwen3-vl:32b
**Qwen Team • 32B parametri • Contesto : 250,000 token**

Variante ad alte prestazioni per i compiti di visione più impegnativi. Contesto 250K token.

**Specifiche tecniche:**
- **Velocità** : 17 token/secondo
- **Consumo** : 7.75 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agent • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Visione` `Agente` `Contesto Esteso` `Multimodale` `Video` `OCR`

**Casi d'uso :**
- Analisi scientifica e tecnica di immagini ad alta risoluzione
- Automazione di processi visivi complessi
- Comprensione dettagliata di scene dinamiche

---

### qwen3-vl:4b
**Qwen Team • 4B parametri • Contesto : 250,000 tokens**

Modello visivo compatto e veloce per l'analisi documentale e la comprensione video.

**Specifiche tecniche:**
- **Velocità** : 57 tokens/secondo
- **Consumo** : 2.34 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Compatto` `Multimodale` `Efficiente` `Video` `OCR`

**Casi d'uso :**
- Analisi documentale automatizzata (factures, formulaires)
- Comprensione di contenuti video
- Assistenti visivi interattivi

---

### qwen3-vl:8b
**Qwen Team • 8B parametri • Contesto : 250,000 tokens**

Modello vision intermedio — buon compromesso tra prestazioni e impronta. Contesto 250K tokens.

**Specifiche tecniche:**
- **Velocità** : 39 tokens/secondo
- **Consumo** : 3.38 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Vision` `Multimodal` `Efficient` `Vidéo` `OCR`

**Casi d'uso :**
- Analisi documentale automatizzata
- Comprensione di contenuto video
- Assistenti visivi interattivi

---

## Modelli di Embedding

Modelli per la ricerca semantica e il Retrieval-Augmented Generation (RAG).

### bge-m3:567m
**BAAI • 567M parametri • Contesto : 8,192 tokens**

Embedding multilingue all'avanguardia (100+ langues). Supporta le ricerche dense, sparse e multi-vettoriali.

**Specifiche tecniche:**
- **Velocità** : 171 tokens/secondo
- **Consumo** : 0.36 kWh/milione di token
- **Licenza** : [MIT](./licences/mit.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Embedding` `Multilingue` `Efficient`

**Casi d'uso :**
- Ricerca semantica multilingue
- Retrieval-Augmented Generation (RAG)
- Clustering e classificazione di documenti

---

### embeddinggemma:300m
**Google • 300M parametri • Contesto : 2.048 token**

Embedding multilingue di Google (100+ lingue), ottimizzato per la ricerca e il recupero semantico.

**Specifiche tecniche:**
- **Velocità** : 175 token/secondo
- **Consumo** : 0.35 kWh/milione di token
- **Licenza** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Embedding` `Compact` `Sémantique` `Efficient` `Multilingue`

**Casi d'uso :**
- Ricerca e recupero delle informazioni
- Classificazione e clustering dei documenti
- Ricerca di similarità semantica

---

### granite-embedding:278m
**IBM • 278M parametri • Contesto : 512 token**

Embedding IBM ultra-compatto per una ricerca semantica a latenza minima.

**Specifiche tecniche:**
- **Velocità** : 196.3 token/secondo
- **Consumo** : 0.31 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Compact` `Efficient`

**Casi d'uso :**
- Ricerca semantica ad alta frequenza
- Clustering di documenti

---

### qwen3-embedding:0.6b
**Qwen Team • 0.6B parametri • Contesto : 32,768 token**

Embedding ultra-leggero e veloce per la ricerca semantica a bassa latenza.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : 0.57 kWh/milioni di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Compact` `Efficient`

**Casi d'uso :**
- Ricerca semantica rapida
- Classificazione del testo in tempo reale

---

### qwen3-embedding:4b
**Qwen Team • 4B parametri • Contesto : 40,000 tokens**

Embedding ad alte prestazioni con profonda comprensione semantica e contesto esteso (40K tokens).

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : 0.57 kWh/milione di tokens
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Embedding` `Grand Contexte` `Efficient`

**Casi d'uso :**
- Ricerca semantica su documenti lunghi
- RAG con contesto esteso
- Analisi semantica di precisione

---

### qwen3-embedding:8b
**Qwen Team • 8B parametri • Contesto : 40,000 tokens**

Embedding ad alta capacità con la migliore comprensione semantica della famiglia Qwen3. Contesto esteso (40K tokens).

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : 0.57 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Contesto Ampio` `Alta Prestazione`

**Casi d'uso :**
- Ricerca semantica ad alta precisione
- RAG avanzato con contesto esteso
- Analisi semantica di documenti complessi

---

## Modelli di Reranking

Modelli per il riordinamento dei risultati nei pipeline RAG.

### bge-reranker-large
**BAAI • 335M parametri • Contesto : 512 token**

Modello di reranking ad alte prestazioni della famiglia BGE, multilingue.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [MIT](./licences/mit.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Reranker` `Alte Prestazioni`

**Casi d'uso :**
- Reranking multilingue per RAG

---

### nvidia/llama-nemotron-rerank-vl-1b-v2
**NVIDIA • 1B parametri • Contesto : 4.096 token**

Modello di reranking compatibile con l'API Cohere (/v1/rerank e /v2/rerank). Ordina i documenti in base alla pertinenza rispetto a una query.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [NVIDIA Open Model License](./licences/nvidia_open_model_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Rerank` `RAG` `Compact`

**Casi d'uso :**
- Riordinamento dei risultati della ricerca semantica
- Raffinamento della pertinenza nei pipeline RAG

---

### qwen3-reranker:0.6b
**Qwen Team • 0.6B parametri • Contesto : 4,096 token**

Modello di reranking compatto ed efficiente per il riordinamento rapido.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Reranker` `Compatto` `Efficiente`

**Casi d'uso :**
- Riordinamento rapido per RAG

---

### qwen3-reranker:4b
**Qwen Team • 4B parametri • Contesto : 4,096 tokens**

Modello di reranking ad alte prestazioni con una grande capacità di comprensione contestuale.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Reranker` `Performance`

**Casi d'uso :**
- Reranking di alta qualità per RAG

---

## Modelli di Sicurezza

Modelli per il filtraggio dei contenuti, la conformità e i guardrails.

### granite3-guardian:2b
**IBM • 2B parametri • Contesto : 8,192 token**

Versione compatta del modello di sicurezza Granite Guardian per il filtraggio a bassa latenza.

**Specifiche tecniche:**
- **Velocità** : 60 token/secondo
- **Consumo** : 0.65 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tags :** `Sécurité` `Guardrails` `Compact` `Efficient`

**Casi d'uso :**
- Guardrails a bassa latenza nei flussi di lavoro agentici
- Filtraggio di sicurezza in tempo reale

---

### granite3-guardian:8b
**IBM • 8B parametri • Contesto : 8.192 token**

Modello di sicurezza specializzato nel rilevamento di contenuti problematici, nel jailbreak e nella conformità normativa.

**Specifiche tecniche:**
- **Velocità** : 45 token/secondo
- **Consumo** : 3,09 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tag :** `Sicurezza` `Guardrails` `Conformità` `Filtraggio`

**Casi d'uso :**
- Rilevamento di contenuti problematici e jailbreak
- Filtraggio di sicurezza pre/post-generazione
- Conformità normativa (GDPR, HDS)

---

## Modelli di Traduzione

Modelli specializzati nella traduzione multilingue ad alta fedeltà.

### translategemma:12b
**Google • 12B parametri • Contesto : 128,000 token**

Traduzione ad alta fedeltà per 55 lingue con contesto di 128K token.

**Specifiche tecniche:**
- **Velocità** : 27 token/secondo
- **Consumo** : 4.87 kWh/milione di token
- **Licenza** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Traduzione` `Multilingue` `Specializzato`

**Casi d'uso :**
- Traduzione di documenti lunghi
- Comunicazione interlinguistica
- Localizzazione dei contenuti

---

### translategemma:27b
**Google • 27B parametri • Contesto : 120,000 tokens**

Traduzione ad alte prestazioni per 55 lingue. Qualità superiore per contenuti complessi e tecnici.

**Specifiche tecniche:**
- **Velocità** : 17 tokens/secondo
- **Consumo** : 7.84 kWh/milione di tokens
- **Licenza** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Traduction` `Multilingue` `Spécialisé` `Haute Performance`

**Casi d'uso:**
- Traduzione ad alta precisione
- Traduzione di documenti tecnici
- Sfumature letterarie e culturali

---

### translategemma:4b
**Google • 4B parametri • Contesto : 128,000 token**

Traduzione rapida ed efficiente per 55 lingue. Ideale per la localizzazione in tempo reale.

**Specifiche tecniche:**
- **Velocità** : 31 token/secondo
- **Consumo** : 1.25 kWh/milione di token
- **Licenza** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agent • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Traduzione` `Multilingue` `Specializzato` `Efficiente`

**Casi d'uso:**
- Traduzione rapida di testi
- Localizzazione in tempo reale
- Traduzione a budget limitato

---

## Modelli Audio & Immagine

Modelli per la trascrizione audio e la generazione di immagini.

### voxtral
**Mistral AI • 4B parametri • Contesto: 32,768 token**

Trascrizione audio in tempo reale via WebSocket. Riconoscimento vocale in streaming a bassa latenza.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `ASR` `Audio` `Realtime` `WebSocket`

**Casi d'uso :**
- Trascrizione audio in tempo reale (streaming)
- Assistenti vocali
- Sottotitoli in diretta

---

### z-image:16b
**Community • 16B parametri • Contesto : 0 token**

Generazione di immagini da prompt testuali, compatibile con l'API OpenAI /v1/images/generations.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [Open Weights](./licences/open_weights.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Image Generation` `Creativo` `Multimodale`

**Casi d'uso :**
- Generazione di immagini da descrizioni testuali
- Creazione di contenuti visivi
- Prototipazione visiva rapida

---

## Casi d'Uso Raccomandati

### Dialogo multilingue

Chatbot e assistenti in grado di comunicare in più lingue con rilevamento automatico e mantenimento del contesto

**Modelli consigliati:**

- nemotron-3-super:120b
- qwen3.6:27b
- nemotron3-nano:30b
- gpt-oss:120b

### Analisi di documenti lunghi

Elaborazione di documenti voluminosi (>100 pagine) con estrazione di informazioni chiave, riassunti e risposte a domande

**Modelli consigliati:**

- nemotron-3-super:120b
- qwen3.6:27b
- qwen3-2507:235b

### Programmazione e sviluppo

Generazione, ottimizzazione e debug del codice in più linguaggi, refactoring e creazione di test

**Modelli consigliati:**

- qwen3.6:35b
- qwen-coder-next:80b
- devstral-small-2:24b
- nemotron-3-super:120b

### Analisi visiva

Elaborazione di immagini e documenti visivi, OCR, interpretazione di grafici e tabelle

**Modelli consigliati:**

- qwen3-vl:235b
- gemma4:31b
- deepseek-ocr
- qwen3-vl:30b

### Sicurezza e conformità

Filtraggio di contenuti sensibili, rilevamento di jailbreak, conformità GDPR/HDS

**Modelli consigliati:**

- granite3-guardian:8b
- granite3-guardian:2b
- mistral-small4:119b

### Deployment leggeri

Applicazioni che richiedono un'impronta minima, bassa latenza e basso consumo

**Modelli consigliati:**

- qwen3.5:0.8b
- qwen3-vl:2b
- ministral-3:3b

### RAG (Retrieval-Augmented Generation)

Pipeline completi di ricerca semantica, riordinamento e generazione aumentata dal recupero

**Modelli consigliati:**

- bge-m3:567m
- nvidia/llama-nemotron-rerank-vl-1b-v2
- qwen3.6:27b