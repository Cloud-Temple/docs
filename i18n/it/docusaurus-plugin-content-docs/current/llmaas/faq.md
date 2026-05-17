# FAQ sull'offerta di servizio LLMaaS Cloud Temple

## Offerta e Capacità

### **Qual è la proposta di valore del vostro servizio LLMaaS?**
Il nostro servizio offre un accesso **sovrano e sicuro** a un ampio catalogo di modelli di IA all'avanguardia, tramite un'API compatibile con OpenAI. Gestiamo tutta la complessità dell'infrastruttura certificata **SecNumCloud 3.2**, consentendovi di concentrarvi sulla creazione di valore per le vostre applicazioni, controllando al contempo i costi grazie a un modello economico prevedibile e accelerando lo sviluppo grazie a standard aperti.

### **Che tipo di modelli offrite e come evolve il catalogo?**
Offriamo un catalogo ricco di **58 modelli open-source**, che includono le famiglie **Llama (Meta), Qwen, Mistral, Gemma (Google), NVIDIA Nemotron, Cogito e Granite (IBM)**. I nostri modelli coprono 8 categorie:
*   **Chat & Ragionamento** — dialogo, analisi, agenti con function calling.
*   **Programmazione & Agenti** — generazione di codice, refactoring, agenti autonomi.
*   **Visione & Multimodale** — analisi di immagini, OCR, video, contesti fino a 1M token.
*   **Embedding** — vettorizzazione per RAG semantico (BGE-M3, Granite, Qwen3-Embedding).
*   **Reranking** — riordinamento dei risultati RAG (API compatible Cohere `/v1/rerank`).
*   **Sicurezza** — filtraggio dei contenuti, guardrails (Granite3-Guardian).
*   **Traduzione** — 55 lingue (TranslateGemma).
*   **Audio & Immagine** — trascrizione in tempo reale (Voxtral), generazione di immagini (z-image).

Questo catalogo viene **riveduto ogni trimestre** per integrare i modelli più performanti, con una politica di ciclo di vita trasparente (préavis de 3 mois avant tout retrait) per garantire la stabilità delle vostre applicazioni.

### **Quali sono le principali capacità funzionali della vostra API?**
La nostra API, 100% compatibile con lo standard OpenAI, vi permette di costruire facilmente funzionalità avanzate come:
*   **Chatbot/assistenti** conversazionali con streaming e function calling.
*   Sistemi completi di **Ricerca Aumentata dalla Generazione (RAG)**: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + generazione aumentata.
*   Applicazioni per l'**analisi di immagini e documenti visivi** (OCR, grafici, PDF) senza pre-elaborazione.
*   **Trascrizione audio** batch o in tempo reale tramite WebSocket.
*   **Elaborazione in batch (Batch API)** asincrona per carichi di lavoro voluminosi, con una tariffazione ridotta del 50%.
*   **Generazione di immagini** tramite API compatibile con OpenAI.

## Sicurezza e Sovranità

### **Come garantite la sovranità e la riservatezza dei nostri dati?**
La sovranità è al centro della nostra offerta. Si basa su diversi pilastri:
1.  **Hosting in Francia** : La nostra infrastruttura è esclusivamente in Francia, gestita da Cloud Temple, una società di diritto francese. Questo ci sottrae alle leggi extraterritoriali come il **CLOUD Act americano**.
2.  **Qualifica SecNumCloud 3.2** : Il più alto visto di sicurezza dell'ANSSI garantisce questo posizionamento.
3.  **Non conservazione dei dati** : Non memorizziamo **né i vostri prompt, né le risposte**. I dati vengono elaborati in modo volatile in memoria per tutta la durata dell'inferenza.
4.  **Crittografia end-to-end** : Tutte le comunicazioni con l'API sono crittografate in **TLS 1.3**.

### **Come gestite gli accessi, i diritti (RBAC) e l'autenticazione (SSO, MFA) ?**
Il nostro servizio si integra con la vostra politica di sicurezza secondo un modello di responsabilità condivisa:
*   **Per i vostri utenti finali** : La gestione delle identità, dei diritti (RBAC) e dell'autenticazione forte (SSO, MFA) è di responsabilità della **vostra applicazione**.
*   **Per i vostri amministratori** : Gli accessi alla **Console Cloud Temple** per la gestione del servizio (gestione delle chiavi, supervisione) possono essere collegati al vostro SSO aziendale (tramite OpenID Connect) per beneficiare delle vostre politiche di sicurezza, incluso il MFA.
*   **Per le vostre applicazioni** : Potete creare diverse chiavi API con quote di consumo distinte per segmentare i diritti a livello applicativo.

### **Come è protetta la piattaforma ?**
Applichiamo una difesa in profondità :
*   **Autenticazione forte** tramite chiave API per ogni richiesta.
*   **Crittografia TLS 1.3** di tutti i flussi.
*   **Protezione di rete** tramite firewall di nuova generazione e sistemi di rilevamento/prevenzione delle intrusioni (IDS/IPS).
*   **"Guardrails" applicativi** per proteggersi dalle minacce specifiche dei LLMs, come l'iniezione di prompt e i tentativi di sfruttamento dei modelli.
*   **Test di penetrazione regolari** condotti da auditor qualificati (PASSI) nell'ambito della nostra qualifica SecNumCloud 3.2.

## Integrazione e Utilizzo

### **Come si integra la vostra API?**
Il nostro servizio è "API-first". Essendo **compatibile con l'API OpenAI**, potete utilizzare tutti gli SDK (Python, Node.js, ecc.) e i framework standard di mercato come **LangChain** o **LlamaIndex** per un'integrazione rapida. Forniamo una documentazione tecnica completa (OpenAPI) ed esempi di codice.

### **È possibile personalizzare l'esperienza utente ?**
Sì, assolutamente. Essendo il nostro servizio un'API "headless", hai un controllo totale sull'interfaccia e sull'esperienza dei tuoi utenti finali, inclusa l'integrazione delle tue linee guida grafiche e la visualizzazione dei messaggi di conformità, che sono di tua responsabilità.

### **Come gestite i rischi legati alla proprietà intellettuale (PI)?**
Avete il controllo totale sui modelli che la vostra applicazione chiama. Per i casi d'uso sensibili alla PI, evidenziamo i modelli **Granite di IBM**, che beneficiano di un **risarcimento contrattuale senza limiti** contro le richieste di PI, una garanzia unica sul mercato.

## Modello Economico e Supporto

### **Qual è il vostro modello di business?**
Il nostro modello si basa sul consumo effettivo per riflettere il costo di calcolo esatto. La tariffazione per tipo di utilizzo:

| Utilizzo | Tariffa |
|-------|-------|
| **Token di input (chat)** | 1.8 € / milione |
| **Token di output (chat)** | 8.0 € / milione |
| **Token di ragionamento** | 8.0 € / milione |
| **Reranking** | 4.0 € / milione di token rerankati |
| **Batch (input)** | 0.9 € / milione (−50%) |
| **Batch (output)** | 4.0 € / milione (−50%) |
| **Audio ASR** | 0.01 € / minuto di trascrizione |

Per garantire la prevedibilità e il controllo del budget, offriamo **Livelli di servizio** con budget limitati e **contratti su misura**. È possibile monitorare i consumi in tempo reale dalla Console Cloud Temple per una trasparenza totale. Il numero di utenti è sempre illimitato, indipendentemente dal piano scelto.

### **Che livello di supporto e SLA offrite?**
La nostra offerta standard include un supporto tecnico in francese e inglese, accessibile tramite il nostro portale clienti, con un impegno di prima risposta in giornata lavorativa. La piattaforma garantisce un impegno di disponibilità del **99%**. Per le esigenze più critiche, i nostri **Servizi Professionali** opzionali vi danno accesso a SLA potenziati, che includono un supporto prioritario con un tempo di risposta fino a 4 ore per gli incidenti critici, e un accompagnamento strategico su misura (workshop di innovazione, governance ITIL).

### **Come posso monitorare lo stato di salute della piattaforma LLMaaS ?**
Crediamo in una trasparenza totale sulla disponibilità dei nostri servizi. Puoi consultare in tempo reale lo stato operativo di ciascun modello di IA sulla nostra pagina di stato pubblica: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Questa pagina fornisce informazioni dettagliate su:
*   Lo stato generale della piattaforma.
*   La disponibilità di ciascun modello individualmente.
*   Le metriche di performance come il tempo di risposta (TTFB) e il throughput (tokens/s).
*   La cronologia degli incidenti per un monitoraggio completo.