---
title: Catalogo dei Modelli IA
sidebar_position: 2
---

# Catalogo dei Modelli LLM as a Service

## Panoramica

Cloud Temple LLMaaS propone **56 modelli linguistici di grandi dimensioni** attentamente selezionati e ottimizzati per soddisfare i requisiti **SecNumCloud** più rigorosi. Il nostro catalogo copre l'intero spettro, dai micro-modelli ultra-efficienti ai modelli estremamente grandi.

### Statistiche Globali

| Metrica | Valore |
|----------|--------|
| **Numero totale di modelli** | 56 modelli |
| **Contesto minimo** | 512 token |
| **Contesto massimo** | 1,000,000 token |
| **Conformità** | SecNumCloud ✅ HDS ✅ Sovranità ✅ C5 ✅ |
| **Localizzazione** | 100% Francia 🇫🇷 |

### Tariffazione

| Tipo di utilizzo | Prezzo |
|-------------------|------|
| **Token di input** | 1.8€ / milione di token |
| **Token di output** | 8€ / milione di token |
| **Ragionamento avanzato** | 8€ / milione di token |
| **Reranking dei documenti** | 4€ / milione di token rerankati |
| **Batch asincrono (input)** | 0.9€ / milione di token |
| **Batch asincrono (output)** | 4€ / milione di token |

## Modelli Chat & Ragionamento

Modelli generalisti per il dialogo, l'analisi, il ragionamento e i compiti multilingue.

### cogito:32b
**Deep Cogito • 32B parametri • Contesto : 32,000 token**

Modello di ragionamento analitico avanzato, progettato per la scomposizione di problemi complessi e la verifica logica.

**Specifiche tecniche:**
- **Velocità** : 21 token/secondo
- **Consumo** : 6.32 kWh/milione di token
- **Licenza** : [LLAMA 3.2 Community Licence](./licences/llama_3.2_community_licence.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Ragionamento` `Comprensione` `Analisi`

**Casi d'uso :**
- Analisi di scenari multifattoriali
- Risoluzione di problemi scientifici con dimostrazione formale
- Sistemi esperti (giuridico, medico, tecnico)

---

### gemma3:27b
**Google • 27B parametri • Contesto : 120,000 token**

Modello multimodale di Google con visione integrata e supporto per oltre 140 lingue. Contesto di 120K token.

**Specifiche tecniche:**
- **Velocità** : 23 token/secondo
- **Consumo** : 5.80 kWh/milione di token
- **Licenza** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Vision` `Agent` `Grand Contexte`

**Casi d'uso :**
- Analisi di documenti con contesto esteso (120K tokens)
- Elaborazione simultanea di immagini e testo
- Estrazione strutturata da PDF e documenti scansionati

---

### glm-4.7-flash:30b
**Zhipu AI • 30B parametri • Contesto : 120.000 token**

Modello rapido con un eccellente equilibrio prestazioni/latenza per il ragionamento e l'analisi.

**Specifiche tecniche:**
- **Velocità** : 88 token/secondo
- **Consumo** : 1.58 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Rapido` `Contesto Esteso` `Multilingue`

**Casi d'uso :**
- Assistenti conversazionali rapidi
- Analisi di documenti lunghi (120k tokens)
- Attività di ragionamento a bassa latenza

---

### gpt-oss:120b
**OpenAI • 120B parametri • Contesto : 120,000 token**

Modello open-weight all'avanguardia di OpenAI con ragionamento configurabile e catena di pensiero trasparente.

**Specifiche tecniche:**
- **Velocità** : 94 token/secondo
- **Consumo** : 2.37 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `MoE` `Agent` `Raisonnement` `Open-Source` `Très Large`

**Casi d'uso :**
- Agenti conversazionali avanzati con ragionamento complesso
- Applicazioni che richiedono trasparenza nel processo di ragionamento
- Scenari aziendali che richiedono una licenza permissiva

---

### gpt-oss:20b
**OpenAI • 20B parametri • Contesto : 120.000 token**

Versione compatta del modello OpenAI, ottimizzata per un'inferenza rapida con buone capacità di ragionamento.

**Specifiche tecniche:**
- **Velocità** : 41 token/secondo
- **Consumo** : 3,25 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Posizione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `MoE` `Agente` `Ragionamento` `Open-Source` `Compatto` `Rapido`

**Casi d'uso :**
- Inferenza rapida con buone capacità di ragionamento
- Casi d'uso agentic (chiamate di funzioni, navigazione web, esecuzione di codice)
- Applicazioni con budget di calcolo limitato

---

### llama3.3:70b
**Meta • 70B parametri • Contesto : 132,000 token**

Modello multilingue di Meta, eccellente nel dialogo naturale e nella comprensione sfumata in 8 lingue.

**Specifiche tecniche:**
- **Velocità** : 10 token/secondo
- **Consumo** : 13.33 kWh/milione di token
- **Licenza** : [LLAMA 3.3 Community Licence](./licences/llama_3.3_community_licence.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Agent` `Dialogue` `Multilingue`

**Casi d'uso :**
- Chatbot multilingue (8 langues)
- Analisi di documenti giuridici o tecnici di grandi dimensioni
- Generazione di testi strutturati con fedeltà stilistica

---

### ministral-3:14b
**Mistral AI • 14B parametri • Contesto: 250.000 token**

Il più potente della famiglia Ministral, con capacità avanzate di ragionamento e codifica. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 28 token/secondo
- **Consumo** : 4,74 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tags :** `Haute Performance` `Raisonnement` `Code`

**Casi d'uso :**
- Risoluzione di problemi complessi
- Assistenti per la codifica e l'ingegneria
- Analisi approfondita di documenti con ragionamento

---

### ministral-3:3b
**Mistral AI • 3B parametri • Contesto : 250.000 token**

Modello compatto Mistral, performante nonostante le dimensioni ridotte. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 22 token/secondo
- **Consumo** : 1,75 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compatto` `Efficiente`

**Casi d'uso :**
- Assistenti personali reattivi
- Classificazione e instradamento rapidi
- Compiti semplici con contesto ampio

---

### ministral-3:8b
**Mistral AI • 8B parametri • Contesto: 250,000 token**

Modello intermedio di Ministral con un eccellente compromesso prestazioni/velocità. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 40 token/secondo
- **Consumo** : 3.33 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Efficiente` `Ragionamento`

**Casi d'uso :**
- Assistenti conversazionali avanzati
- Analisi di documenti ed estrazione di informazioni
- Buon compromesso velocità/qualità

---

### mistral-small3.2:24b
**Mistral AI • 24B parametri • Contesto: 128,000 token**

Modello Mistral con miglioramento del rispetto delle istruzioni, function calling robusto e capacità vision. Rilevamento integrato di contenuti problematici.

**Specifiche tecniche:**
- **Velocità** : 28 token/secondo
- **Consumo** : 5.05 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tag :** `Visione` `Agente` `Sicurezza` `Instruction Following`

**Casi d'uso :**
- Agent conversazionali affidabili con rispetto delle istruzioni preciso
- Integrazione di strumenti esterni tramite function calling
- Applicazioni che richiedono filtraggio di sicurezza nativo

---

### mistral-small4:119b
**Mistral AI • 119B parametri • Contesto : 262,144 token**

Modello Mistral ad alte prestazioni (119B) con visione, sicurezza integrata e contesto di 262K token. Rapido (100 t/s).

**Specifiche tecniche:**
- **Velocità** : 100 token/secondo
- **Consumo** : 2.00 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tag :** `Visione` `Agente` `Sicurezza` `Contesto Esteso` `Rapido`

**Casi d'uso :**
- Agent conversazionali ad alte prestazioni con visione
- Analisi di documenti molto lunghi (262K token)
- Applicazioni critiche che richiedono affidabilità e sicurezza

### nemotron-3-super:120b
**NVIDIA • 120B parametri • Contesto : 1,000,000 token**

Modello NVIDIA ottimizzato per agenti collaborativi, ragionamento a lungo termine e carichi di lavoro ad alto volume. Contesto da 1M token.

**Specifiche tecniche:**
- **Velocità** : 72 token/secondo
- **Consumo** : 1.93 kWh/milione di token
- **Licenza** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Ragionamento` `Contesto Lungo`

**Casi d'uso :**
- Agenti autonomi con chiamate multiple agli strumenti
- Automazione di workflow ad alto volume
- Analisi di documenti lunghi con estrazione precisa

---

### nemotron-cascade:30b
**NVIDIA • 30B parametri • Contesto : 1,000,000 token**

Modello NVIDIA specializzato in matematica (médaille d'or IMO 2025) e decomposizione dei problemi. Contesto 1M token.

**Specifiche tecniche:**
- **Velocità** : 130 token/secondo
- **Consumo** : 1,93 kWh/milione di token
- **Licenza** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Ragionamento` `Grande Contesto` `Matematica`

**Casi d'uso :**
- Risoluzione di problemi matematici complessi
- Agenti con chiamate multiple agli strumenti
- Analisi di documenti lunghi

---

### nemotron3-nano:30b
**NVIDIA • 30B parametri • Contesto : 1,000,000 token**

Modello NVIDIA ultra-veloce (160 t/s) con ragionamento e function calling. Contesto di 1M token.

**Specifiche tecniche:**
- **Velocità** : 160 token/secondo
- **Consumo** : 1.56 kWh/milione di token
- **Licenza** : [NVIDIA Community License](./licences/nvidia_community_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Ragionamento` `Contesto Esteso` `Veloce`

**Casi d'uso :**
- Agenti autonomi che richiedono una risposta rapida
- Ragionamento logico e risoluzione dei problemi
- Analisi di documenti lunghi con estrazione precisa

---

### olmo-3:32b
**AllenAI • 32B parametri • Contesto : 65,536 token**

Primo modello di ragionamento completamente open source a questa scala. Trasparenza totale (dati, codice, pesi).

**Specifiche tecniche:**
- **Velocità** : 22 token/secondo
- **Consumo** : 5.98 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Open-Source` `Contesto Esteso` `Ragionamento` `Trasparente` `Codice` `Alte Prestazioni`

**Casi d'uso :**
- Ragionamento complesso e risoluzione di problemi multi-fase
- Sviluppo software con trasparenza del processo decisionale
- Attività critiche che richiedono una completa auditabilità

---

### olmo-3:7b
**AllenAI • 7B parametri • Contesto : 65.536 token**

Modello completamente open source ed efficiente, eccellente in matematica e programmazione con trasparenza totale.

**Specifiche tecniche:**
- **Velocità** : 35 token/secondo
- **Consumo** : 1,13 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Open-Source` `Grand Contexte` `Transparent` `Efficient` `Maths` `Code`

**Casi d'uso :**
- Ricerca accademica che richiede una riproducibilità totale
- Programmazione e risoluzione di problemi matematici
- Analisi di documenti con tracciabilità completa

---

### qwen3-2507-think:4b
**Qwen Team • 4B parametri • Contesto : 250.000 token**

Modello compatto ottimizzato per il ragionamento profondo (logica, matematica, scienza, codice). Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 55 token/secondo
- **Consumo** : 2,42 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Ragionamento` `Grande Contesto` `Compatto` `Veloce`

**Casi d'uso :**
- Ragionamento complesso (logica, matematica, scienza, codice)
- Agenti con lunga cronologia di conversazione (250K token)
- Analisi di documenti di grandi dimensioni con ragionamento profondo

---

### qwen3-2507:235b
**Qwen Team • 235B parametri • Contesto : 200,000 token**

Modello più potente del catalogo (235B parametri, 22B attivi). Eccelle in matematica, codifica e ragionamento logico.

**Specifiche tecniche:**
- **Velocità** : 56 token/secondo
- **Consumo** : 3.97 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `MoE` `Agente` `Ragionamento` `Molto Grande`

**Casi d'uso :**
- Risoluzione di problemi matematici e logici complessi
- Attività che richiedono un'ampia base di conoscenze
- Assistente di codifica avanzato

---

### qwen3-omni:30b
**Qwen Team • 30B parametri • Contesto : 32.768 token**

Modello omnimodale nativo — comprende simultaneamente testo, immagini, video e audio.

**Specifiche tecniche:**
- **Velocità** : 19 token/secondo
- **Consumo** : 7,43 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Omni` `Audio` `Visione` `Agente` `Multimodale`

**Casi d'uso :**
- Interazioni multimodali (testo + immagini + audio + video)
- Analisi video e audio combinata
- Assistenti intelligenti di nuova generazione

---

### qwen3.5:0.8b
**Qwen Team • 0.8B parametri • Contesto : 250.000 token**

Modello ultra-leggero con un contesto eccezionale di 250K token — notevole per un modello di queste dimensioni.

**Specifiche tecniche:**
- **Velocità** : 16 token/secondo
- **Consumo** : 2.39 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compatto` `Efficiente` `Grande Contesto` `Multilingue`

**Casi d'uso :**
- Elaborazione del testo con contesto molto ampio (250K tokens)
- Classificazione e ordinamento rapido
- Assistenti leggeri con grande cronologia

---

### qwen3.5:4b
**Team Qwen • 4B parametri • Contesto : 250,000 token**

Modello Qwen3.5 compatto con un buon compromesso prestazioni/efficienza e un contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 37 token/secondo
- **Consumo** : 3.64 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compatto` `Efficiente` `Lungo Contesto` `Multilingue`

**Casi d'uso :**
- Assistenti conversazionali con lungo contesto
- Riepilogo di testo e classificazione
- Compiti di codifica semplici

---

### qwen3.5:9b
**Qwen Team • 9B parametri • Contesto: 250,000 token**

Modello Qwen3.5 intermedio con solido ragionamento e contesto esteso a 250K token.

**Specifiche tecniche:**
- **Velocità** : 32 token/secondo
- **Consumo** : 4.23 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Efficient` `Grande Contesto` `Multilingue` `Ragionamento`

**Casi d'uso :**
- Assistenti conversazionali avanzati
- Analisi di documenti ed estrazione di informazioni
- Compiti di ragionamento di complessità media

---

### qwen3.6:27b
**Qwen Team • 27B parametri • Contesto : 1,000,000 token**

Modello generalista di riferimento con un contesto nativo di 1M token. Eccelle nel ragionamento, nell'esecuzione precisa delle istruzioni e nel multilinguismo.

**Specifiche tecniche:**
- **Velocità** : 80 token/secondo
- **Consumo** : 2.78 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Grande Contesto` `Multilingue` `Visione` `Ragionamento`

**Casi d'uso :**
- Assistenti versatili con un'accurata esecuzione delle istruzioni
- Analisi di documenti di grandi dimensioni (1M token)
- Applicazioni multilingue con ragionamento logico
- Programmazione e generazione di codice

---

### qwen3:0.6b
**Squadra Qwen • 0.6B parametri • Contesto : 40,000 token**

Micro-modello ultra-veloce per compiti semplici e routing. 40K token di contesto.

**Specifiche tecniche:**
- **Velocità** : 46 token/secondo
- **Consumo** : 1.33 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Compatto` `Veloce` `Efficiente` `Multilingue`

**Casi d'uso :**
- Classificazione e ordinamento rapido
- Assistenti leggeri con bassa latenza
- Routing in architetture multi-modello

---

## Modelli Programmazione & Agenti

Modelli specializzati nel codice, nell'ingegneria del software e negli agenti autonomi.

### devstral-small-2:24b
**Mistral AI & All Hands AI • 24B parametri • Contesto : 200.000 token**

Modello agentico all'avanguardia per l'ingegneria del software. Prestazioni vicine a modelli >100B per il codice. Visione integrata.

**Specifiche tecniche :**
- **Velocità** : 33 token/secondo
- **Consumo** : 4,23 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità :**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ✅ Sicurezza

**Tag :** `Agente` `Programmazione` `Visione` `Open-Source` `Lungo Contesto` `Veloce`

**Casi d'uso :**
- Agenti di codifica autonomi
- Refactoring rapido del codice
- Attività di ingegneria iterative

---

### functiongemma:270m
**Google • 270M parametri • Contesto : 32,768 token**

Micro-modello specializzato nel rilevamento delle chiamate di funzione. Ideale come router in un'architettura agentica.

**Specifiche tecniche:**
- **Velocità** : 40 token/secondo
- **Consumo** : 0.97 kWh/milione di token
- **Licenza** : [Termini di utilizzo di Google Gemma](./licences/google_gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Compatto` `Efficiente` `Function Calling`

**Casi d'uso :**
- Router di strumenti in un'architettura agentica
- Rilevamento di intenzioni di chiamate di funzione
- Pre-filtraggio rapido prima del routing

---

### qwen-coder-next:80b
**Team Qwen • 80B parametri • Contesto: 250,000 token**

Modello all'avanguardia per il codice e il ragionamento complesso. Contesto di 250K token.

**Specifiche tecniche:**
- **Velocità** : 97 token/secondo
- **Consumo** : 2.29 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Programmazione` `MoE` `Contesto Lungo`

**Casi d'uso :**
- Assistente di programmazione avanzato (scala repository)
- Analisi e refactoring di codice complesso
- Agenti autonomi di ingegneria del software

---

### qwen3-next:80b
**Qwen Team • 80B parametri • Contesto : 250,000 token**

Modello versatile da 80B ottimizzato per contesti lunghi, function calling e ragionamento strutturato.

**Specifiche tecniche:**
- **Velocità** : 67 token/secondo
- **Consumo** : 2.09 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Contesto Lungo` `MoE`

**Casi d'uso :**
- Agent conversazionali avanzati con integrazione di strumenti
- Analisi di documenti molto voluminosi
- Generazione di codice e ragionamento strutturato

---

### qwen3.6:35b
**Team Qwen • 35B parametri • Contesto: 1,000,000 token**

Leader nell'ingegneria del software agentica (SWE-bench 73.4%). Contesto da 1M di token, visione e tool calling integrati.

**Specifiche tecniche:**
- **Velocità** : 121 token/secondo
- **Consumo** : 2,07 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Programmazione` `Grande Contesto` `MoE` `Visione` `Ragionamento`

**Casi d'uso :**
- Assistente di codifica agentico negli IDE (Cursor, Continue.dev, VS Code Copilot)
- Analisi di basi di codice complete (1M tokens)
- Revisione del codice automatizzata e CI/CD intelligenti
- Risoluzione di bug complessi con ragionamento multi-fase

---

### rnj-1:8b
**Essential AI • 8B parametri • Contesto : 32,000 token**

Modello specializzato STEM — eccellente nel codice (83.5% HumanEval+), matematica e scienze.

**Specifiche tecniche:**
- **Velocità** : 23 token/secondo
- **Consumo** : 1.69 kWh/milione di token
- **Licenza** : [Open Weights](./licences/open_weights.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Codice` `Matematica` `STEM` `Ragionamento` `Efficiente`

**Casi d'uso :**
- Generazione di codice avanzata
- Risoluzione di problemi matematici complessi
- Attività scientifiche e tecniche

---

## Modelli Visione & Multimodali

Modelli per l'analisi di immagini, video, OCR e documenti visivi.

### deepseek-ocr
**DeepSeek AI • 3B parametri • Contesto : 8,192 token**

Modello OCR specializzato nell'estrazione di testo ad alta precisione con preservazione della formattazione (tabelle, formule).

**Specifiche tecniche:**
- **Velocità** : 84 token/secondo
- **Consumo** : 0,66 kWh/milione di token
- **Licenza** : [Licenza MIT](./licences/mit_licence.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag** : `Visione` `OCR` `Efficiente`

**Casi d'uso** :
- Estrazione di testo strutturato (Markdown/LaTeX) da immagini/PDF
- Digitalizzazione di documenti con tabelle e formule

---

### gemma4:31b
**Google • 31B parametri • Contesto: 250,000 token**

Modello denso multimodale di Google, classificato 3° mondiale su Arena AI. Visione avanzata, ragionamento e codifica. Contesto 250K token.

**Specifiche tecniche:**
- **Velocità** : 59 token/secondo
- **Consumo** : 3.77 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agent` `Grand Contexte` `Vision` `Raisonnement` `Multilingue` `Open-Source`

**Casi d'uso :**
- Agenti autonomi con ragionamento e chiamate di strumenti
- Analisi di documenti di grandi dimensioni con visione
- Comprensione visiva (OCR, graphiques, documents scannés)

---

### gemma4:e2b
**Google • 31B (E2B) parametri • Contesto : 128.000 token**

Variante ultra-rapida (125 t/s) di Gemma 4 con visione. Eccellente efficienza energetica.

**Specifiche tecniche:**
- **Velocità** : 125 token/secondo
- **Consumo** : 1,11 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Rapido` `Efficiente`

**Casi d'uso :**
- Analisi di immagini con bassa latenza
- Documenti di grandi dimensioni con impronta ridotta

---

### gemma4:e4b
**Google • 31B (E4B) parametri • Contesto : 128,000 token**

Variante di Gemma 4 con miglior compromesso qualità/velocità rispetto alla versione E2B. Visione integrata.

**Specifiche tecniche:**
- **Velocità** : 85 token/secondo
- **Consumo** : 1.63 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Rapido`

**Casi d'uso :**
- Analisi di documenti e immagini con buon compromesso qualità/velocità
- Alternativa rapida per attività di visione

---

### granite3.2-vision:2b
**IBM • 2B parametri • Contesto : 16.384 token**

Modello vision compatto IBM Granite per OCR rapido ed estrazione di dati da documenti scansionati.

**Specifiche tecniche:**
- **Velocità** : 49 token/secondo
- **Consumo** : 0,80 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Compatto` `Efficiente` `OCR`

**Casi d'uso :**
- OCR rapido su documenti leggeri
- Estrazione di dati da immagini
- Analisi visiva a basso consumo

---

### qwen3-vl:235b
**Qwen Team • 235B parametri • Contesto : 200.000 token**

Il modello multimodale più potente del catalogo. Comprensione visiva all'avanguardia e ragionamento eccezionale.

**Specifiche tecniche:**
- **Velocità** : 24 token/secondo
- **Consumo** : 5,56 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ✅ Ragionamento • ❌ Sicurezza

**Tag :** `Agente` `Ragionamento` `Lungo Contesto` `Visione`

**Casi d'uso :**
- Automazione documentale complessa (OCR multilingue, estrazione strutturata)
- Agenti visivi intelligenti
- Analisi scientifica avanzata (STEM, ragionamento spaziale)
- RAG Multimodale su documenti e video

---

### qwen3-vl:2b
**Qwen Team • 2B parametri • Contesto : 250,000 token**

Modello vision ultra-compatto per OCR rapido, rilevamento di oggetti e applicazioni embedded.

**Specifiche tecniche:**
- **Velocità** : 64 token/secondo
- **Consumo** : 0.95 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Compatto` `Efficiente` `Multimodale` `OCR`

**Casi d'uso :**
- Analisi di immagini in tempo reale
- OCR e lettura di documenti leggeri
- Smistamento e classificazione visiva rapida

---

### qwen3-vl:30b
**Qwen Team • 30B parametri • Contesto : 250,000 token**

Modello multimodale ad alte prestazioni per OCR, rilevamento di oggetti, analisi video e ragionamento spaziotemporale.

**Specifiche tecniche:**
- **Velocità** : 39 token/secondo
- **Consumo** : 3.39 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Vision` `Agent` `Grand Contexte` `Multimodal` `Vidéo` `OCR`

**Casi d'uso :**
- Analisi di video lunghi e sorveglianza intelligente
- Estrazione di dati strutturati (documents, tableaux, graphiques)
- Assistenti visivi con comprensione spaziale

---

### qwen3-vl:32b
**Team Qwen • 32B parametri • Contesto : 250,000 token**

Variante ad alte prestazioni per i compiti di visione più impegnativi. Contesto 250K token.

**Specifiche tecniche:**
- **Velocità** : 17 token/secondo
- **Consumo** : 7.75 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Agente` `Grande Contesto` `Multimodale` `Video` `OCR`

**Casi d'uso :**
- Analisi scientifica e tecnica di immagini ad alta risoluzione
- Automazione di processi visivi complessi
- Comprensione dettagliata di scene dinamiche

---

### qwen3-vl:4b
**Qwen Team • 4B parametri • Contesto : 250,000 token**

Modello vision compatto e veloce per l'analisi documentale e la comprensione video.

**Specifiche tecniche:**
- **Velocità** : 57 token/secondo
- **Consumo** : 2.34 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Compatto` `Multimodale` `Efficiente` `Video` `OCR`

**Casi d'uso :**
- Analisi documentale automatizzata (fatture, moduli)
- Comprensione di contenuti video
- Assistenti visivi interattivi

---

### qwen3-vl:8b
**Squadra Qwen • 8B parametri • Contesto: 250.000 token**

Modello vision intermedio — buon compromesso tra prestazioni e impronta. Contesto 250K token.

**Specifiche tecniche:**
- **Velocità** : 39 token/secondo
- **Consumo** : 3,38 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
✅ Strumenti/Agente • ✅ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Visione` `Multimodale` `Efficiente` `Video` `OCR`

**Casi d'uso :**
- Analisi documentale automatizzata
- Comprensione dei contenuti video
- Assistenti visivi interattivi

---

## Modelli di Embedding

Modelli per la ricerca semantica e il Retrieval-Augmented Generation (RAG).

### bge-m3:567m
**BAAI • 567M parametri • Contesto : 8,192 token**

Embedding multilingue di punta (100+ lingue). Supporta ricerche dense, sparse e multi-vettoriali.

**Specifiche tecniche:**
- **Velocità** : 171 token/secondo
- **Consumo** : 0.36 kWh/milione di token
- **Licenza** : [MIT](./licences/mit.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Multilingue` `Efficient`

**Casi d'uso :**
- Ricerca semantica multilingue
- Retrieval-Augmented Generation (RAG)
- Clustering e classificazione dei documenti

---

### embeddinggemma:300m
**Google • 300M parametri • Contesto : 2,048 token**

Embedding Google multilingue (100+ lingue), ottimizzato per la ricerca e il recupero semantico.

**Specifiche tecniche:**
- **Velocità** : 175 token/secondo
- **Consumo** : 0.35 kWh/milione di token
- **Licenza** : [Google Gemma Terms of Use](./licences/google_gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Compatto` `Semantico` `Efficiente` `Multilingue`

**Casi d'uso :**
- Ricerca e recupero di informazioni
- Classificazione e clustering di documenti
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

**Tag :** `Embedding` `Compatto` `Efficiente`

**Casi d'usage :**
- Ricerca semantica ad alta frequenza
- Clustering di documenti

---

### qwen3-embedding:0.6b
**Team Qwen • 0.6B parametri • Contesto : 32,768 token**

Embedding ultra-leggero e veloce per la ricerca semantica a bassa latenza.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : 0.57 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Compatto` `Efficiente`

**Casi d'uso :**
- Ricerca semantica rapida
- Classificazione del testo in tempo reale

---

### qwen3-embedding:4b
**Team Qwen • 4B parametri • Contesto : 40,000 token**

Embedding ad alte prestazioni con comprensione semantica profonda e contesto esteso (40K token).

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : 0.57 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Grande Contesto` `Efficiente`

**Casi d'uso :**
- Ricerca semantica su documenti lunghi
- RAG con contesto esteso
- Analisi semantica di precisione

---

### qwen3-embedding:8b
**Qwen Team • 8B parametri • Contesto : 40,000 token**

Embedding ad alta capacità con la migliore comprensione semantica della famiglia Qwen3. Contesto esteso (40K tokens).

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : 0.57 kWh/milione di token
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Embedding` `Lungo Contesto` `Alte Prestazioni`

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
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Reranker` `Alte Prestazioni`

**Casi d'uso :**
- Riordinamento multilingue per RAG

---

### nvidia/llama-nemotron-rerank-vl-1b-v2
**NVIDIA • 1B parametri • Contesto : 4,096 token**

Modello di reranking compatibile con l'API Cohere (/v1/rerank e /v2/rerank). Ordina i documenti in base alla pertinenza rispetto a una query.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [NVIDIA Open Model License](./licences/nvidia_open_model_license.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Rerank` `RAG` `Compact`

**Casi d'uso :**
- Riordinamento dei risultati della ricerca semantica
- Affinamento della pertinenza nelle pipeline RAG

---

### qwen3-reranker:0.6b
**Squadra Qwen • 0.6B parametri • Contesto : 4.096 token**

Modello di reranking compatto ed efficiente per il riordinamento rapido.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tags :** `Reranker` `Compatto` `Efficiente`

**Casi d'uso :**
- Riordinamento rapido per RAG

---

### qwen3-reranker:4b
**Qwen Team • 4B parametri • Contesto : 4,096 token**

Modello di reranking ad alte prestazioni con una grande capacità di comprensione contestuale.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [Apache 2.0](./licences/apache_2.0.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Reranker` `Performance`

**Casi d'uso :**
- Riordinamento di alta qualità per RAG

---

## Modelli di Sicurezza

Modelli per il filtraggio dei contenuti, la conformità e i guardrail.

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

**Tag :** `Sicurezza` `Guardrails` `Compatto` `Efficiente`

**Casi d'uso :**
- Guardrails a bassa latenza nei workflow agentici
- Filtraggio di sicurezza in tempo reale

---

### granite3-guardian:8b
**IBM • 8B parametri • Contesto : 8,192 token**

Modello di sicurezza specializzato nel rilevamento di contenuti problematici, jailbreak e conformità normativa.

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
- Conformità normativa (RGPD, HDS)

---

## Modelli di Traduzione

Modelli specializzati nella traduzione multilingue ad alta fedeltà.

### translategemma:12b
**Google • 12B parametri • Contesto : 128,000 token**

Traduzione ad alta fedeltà per 55 lingue con un contesto di 128K token.

**Specifiche tecniche:**
- **Velocità** : 27 token/secondo
- **Consumo** : 4.87 kWh/milione di token
- **Licenza** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Traduzione` `Multilingue` `Specializzato`

**Casi d'uso :**
- Traduzione di documenti lunghi
- Comunicazione interlingue
- Localizzazione di contenuti

---

### translategemma:27b
**Google • 27B parametri • Contesto : 120,000 token**

Traduzione ad alte prestazioni per 55 lingue. Qualità superiore per contenuti complessi e tecnici.

**Specifiche tecniche:**
- **Velocità** : 17 token/secondo
- **Consumo** : 7.84 kWh/milione di token
- **Licenza** : [Termini di utilizzo Gemma](./licences/gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Traduzione` `Multilingue` `Specializzato` `Alte Prestazioni`

**Casi d'uso :**
- Traduzione ad alta precisione
- Traduzione di documenti tecnici
- Sfumature letterarie e culturali

---

### translategemma:4b
**Google • 4B parametri • Contesto : 128.000 token**

Traduzione rapida ed efficiente per 55 lingue. Ideale per la localizzazione in tempo reale.

**Specifiche tecniche:**
- **Velocità** : 31 token/secondo
- **Consumo** : 1,25 kWh/milione di token
- **Licenza** : [Gemma Terms of Use](./licences/gemma_terms_of_use.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Traduzione` `Multilingue` `Specializzato` `Efficiente`

**Casi d'uso :**
- Traduzione rapida di testi
- Localizzazione in tempo reale
- Traduzione a budget limitato

---

## Modelli Audio & Immagine

Modelli per la trascrizione audio e la generazione di immagini.

### voxtral
**Mistral AI • 4B parametri • Contesto : 32,768 token**

Trascrizione audio in tempo reale tramite WebSocket. Riconoscimento vocale in streaming con bassa latenza.

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
- Sottotitolazione in diretta

---

### z-image:16b
**Community • 16B parametri • Contesto : 0 token**

Generazione di immagini a partire da prompt testuali, compatibile con l'API OpenAI /v1/images/generations.

**Specifiche tecniche:**
- **Velocità** : N/A
- **Consumo** : N/A
- **Licenza** : [Open Weights](./licences/open_weights.licence.md)
- **Localizzazione** : FR 🇫🇷

**Capacità:**
❌ Strumenti/Agente • ❌ Visione • ❌ Ragionamento • ❌ Sicurezza

**Tag :** `Generazione Immagini` `Creativo` `Multimodale`

**Casi d'uso :**
- Generazione di immagini a partire da descrizioni testuali
- Creazione di contenuti visivi
- Prototipazione visiva rapida

---

## Casi d'uso consigliati

### Dialogo multilingue

Chatbot e assistenti in grado di comunicare in più lingue con rilevamento automatico e mantenimento del contesto

**Modelli consigliati:**

- nemotron-3-super:120b
- qwen3.6:27b
- nemotron3-nano:30b
- gpt-oss:120b

### Analisi di documenti lunghi

Elaborazione di documenti di grandi dimensioni (>100 pagine) con estrazione di informazioni chiave, riassunti e risposte alle domande

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

Filtraggio di contenuti sensibili, rilevamento di jailbreak, conformità RGPD/HDS

**Modelli consigliati:**

- granite3-guardian:8b
- granite3-guardian:2b
- mistral-small4:119b

### Distribuzioni leggere

Applicazioni che richiedono un'impronta minima, bassa latenza e basso consumo

**Modelli consigliati:**

- qwen3.5:0.8b
- qwen3-vl:2b
- ministral-3:3b

### RAG (Retrieval-Augmented Generation)

Pipeline completi per la ricerca semantica, la riclassificazione e la generazione potenziata tramite recupero

**Modelli consigliati:**

- bge-m3:567m
- nvidia/llama-nemotron-rerank-vl-1b-v2
- qwen3.6:27b