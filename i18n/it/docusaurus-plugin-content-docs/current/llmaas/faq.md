# FAQ sull'offerta di servizio LLMaaS Cloud Temple

## Offerta e Capacità

### **Qual è la proposta di valore del vostro servizio LLMaaS ?**
Il nostro servizio vi offre un accesso **sovrano e sicuro** a un ampio catalogo di modelli di IA all'avanguardia, tramite un'API compatibile con OpenAI. Gestiamo tutta la complessità dell'infrastruttura qualificata **SecNumCloud 3.2**, consentendovi di concentrarvi sulla creazione di valore per le vostre applicazioni, mantenendo sotto controllo i costi grazie a un modello economico prevedibile e accelerando i vostri sviluppi grazie a standard aperti.

### **Quale tipo di modelli proponete e come evolve il catalogo?**
Il catalogo copre chat e ragionamento, programmazione e agenti, visione, embeddings, reranking, sicurezza, traduzione e utilizzi audio/immagine. I modelli e le relative licenze variano in base all'uso.

Consultate il **[catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle)** per l'elenco attuale, gli stati LTS, le scadenze e le migrazioni consigliate. Le novità vengono pubblicate nel **[changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog)**.

### **Un nome di modello precedente può continuare a funzionare dopo un'evoluzione del catalogo?**
Sì, alcuni identificativi vengono reindirizzati verso un successore. Ciò preserva la chiamata API ma può modificare il comportamento del modello. Verificate la destinazione nel ciclo di vita, testatela sui vostri casi d'uso e poi aggiornate la configurazione. Consultate la [guida di migrazione](./concepts.md#migrazione-a-un-altro-modello).

### **Quali sono le principali capacità funzionali della vostra API?**
La nostra API compatibile con OpenAI vi consente di sviluppare funzionalità come quelle elencate di seguito. Gli endpoint e i parametri supportati sono specificati nella [documentazione di riferimento dell'API](./api.md#compatibilità-openai).
*   **Chatbot/assistenti** conversazionali con streaming e function calling.
*   Sistemi completi di **Generazione Aumentata dal Recupero (RAG)**: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + generazione aumentata.
*   Applicazioni di **analisi di immagini e documenti visivi** (OCR, grafici). Per i PDF, convertite preliminarmente le pagine in immagini; consultate i [prerequisiti della guida OCR](./ocr.md#prerequisiti-formato-dellimmagine-e-dipendenze).
*   La **trascrizione audio** in batch o in tempo reale tramite WebSocket.
*   L'**elaborazione in batch (Batch API)** asincrona per carichi di lavoro di grandi dimensioni, con una tariffazione ridotta del 50%.
*   La **generazione di immagini** tramite API compatibile con OpenAI.

## Sicurezza e Sovranità

### **Come garantite la sovranità e la riservatezza dei nostri dati?**
La sovranità è al centro della nostra offerta. Si basa su diversi pilastri:
1.  **Hosting e gestione in Francia** : L'infrastruttura LLMaaS è ospitata in Francia e gestita in Francia da Cloud Temple, società di diritto francese. Per le garanzie di sovranità associate alla qualificazione, consulta [il nostro approccio SecNumCloud](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **Qualificazione SecNumCloud 3.2** : Il più alto livello di sicurezza dell'ANSSI garantisce questo posizionamento.
3.  **Non-conservazione dei dati** : Non memorizziamo **né i vostri prompt, né le risposte**. I dati vengono elaborati in modo volatile in memoria per la durata dell'inferenza.
4.  **Crittografia end-to-end** : Tutte le comunicazioni con l'API sono crittografate con **TLS 1.3**.

### **Come gestite gli accessi, i diritti (RBAC) e l'autenticazione (SSO, MFA)?**
Il nostro servizio si integra alla vostra politica di sicurezza secondo un modello di responsabilità condivisa:
*   **Per i vostri utenti finali** : La gestione delle identità, dei diritti (RBAC) e dell'autenticazione forte (SSO, MFA) è di responsabilità della **vostra applicazione**.
*   **Per i vostri amministratori** : Gli accessi alla **Console Cloud Temple** per la gestione del servizio (gestion des clés, supervision) possono essere collegati al vostro SSO aziendale (via OpenID Connect) per beneficiare delle vostre politiche di sicurezza, incluso il MFA.
*   **Per le vostre applicazioni** : È possibile creare diverse chiavi API con quote di consumo distinte per segmentare i diritti a livello applicativo.

### **Come è sicura la piattaforma?**
Applichiamo un approccio di difesa in profondità :
*   **Autenticazione forte** tramite chiave API per ogni richiesta.
*   **Crittografia TLS 1.3** di tutti i flussi.
*   **Protezione di rete** tramite firewall di nuova generazione e sistemi di rilevamento/prevenzione delle intrusioni (IDS/IPS).
*   **Test di intrusione regolari** eseguiti da auditor qualificati (PASSI) nell'ambito della nostra qualificazione SecNumCloud 3.2.

### **I prompt vengono filtrati automaticamente?**
No. La piattaforma non applica un filtraggio automatico del contenuto dei prompt contro le iniezioni o i tentativi di elusione delle istruzioni. I controlli dei contenuti sono responsabilità della vostra applicazione. Potete integrare esplicitamente un modello di sicurezza per valutare gli input o le risposte, in base ai vostri criteri aziendali. Consultate la [sicurezza dei prompt](./concepts.md#sicurezza-dei-prompt).

## Integrazione e Utilizzo

### **Come si integra la tua API?**
Il nostro servizio è "API-first". La sua **API compatibile con OpenAI** consente di utilizzare i SDK OpenAI e framework come **LangChain** o **LlamaIndex** per le chiamate supportate. Configura l'URL base e la tua chiave LLMaaS, quindi verifica i parametri e le capacità del modello selezionato. Consulta le [differenze documentate](./api.md#compatibilità-openai) e gli [esempi di integrazione](./tutorials.md).

### **È possibile personalizzare l'esperienza utente?**
Sì, assolutamente. Essendo il nostro servizio un'API "headless", avete il controllo totale sull'interfaccia e sull'esperienza dei vostri utenti finali, inclusa l'integrazione delle vostre linee guida grafiche e la visualizzazione di messaggi di conformità, che sono di vostra responsabilità.

### **Come gestite i rischi legati alla proprietà intellettuale (PI)?**
Avete il controllo totale sui modelli che la vostra applicazione invoca. Per i casi d'uso sensibili alla PI, raccomandiamo i modelli **Granite di IBM**, che beneficiano di un **indennizzo contrattuale senza limiti** contro le rivendicazioni di PI, una garanzia unica sul mercato.

## Modello Economico e Supporto

### **Qual è il vostro modello economico?**
Il nostro modello si basa sul consumo effettivo per riflettere il costo computazionale esatto. La tariffazione per tipo di utilizzo:

| Utilizzo | Tariffa |
|-------|-------|
| **Token in input (chat)** | 1.8 € / milione |
| **Token in output (chat)** | 8.0 € / milione |
| **Token di ragionamento** | 8.0 € / milione |
| **Reranking** | 4,00 € / milione di documenti elaborati |
| **Batch (input)** | 0.9 € / milione (−50%) |
| **Batch (output)** | 4.0 € / milione (−50%) |
| **Audio ASR** | 0.01 € / minuto di trascrizione |

Per garantire la prevedibilità e il controllo di budget, proponiamo **Tier di servizio** con budget con massimali e **contratti su misura**. È possibile monitorare il proprio consumo in tempo reale dalla Console Cloud Temple per una trasparenza totale. Il numero di utenti è sempre illimitato, indipendentemente dal piano scelto.

### **Quale livello di supporto e SLA offrite?**
La nostra offerta standard include un supporto tecnico in francese e inglese, accessibile tramite il nostro portale clienti, con un impegno di prima risposta entro un giorno lavorativo. La piattaforma garantisce un impegno di disponibilità del **99%**. Per le esigenze più critiche, i nostri **Servizi Professionali** opzionali vi danno accesso a SLA rafforzati, che includono un supporto prioritario con un tempo di risposta entro 4 ore per gli incidenti critici e un supporto strategico su misura (ateliers d'innovation, gouvernance ITIL).

### **Come posso monitorare lo stato di salute della piattaforma LLMaaS ?**
Crediamo in una trasparenza totale sulla disponibilità dei nostri servizi. È possibile consultare in tempo reale lo stato operativo di ogni modello di IA sulla nostra pagina di stato pubblica: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Questa pagina fornisce informazioni dettagliate su:
*   Lo stato generale della piattaforma.
*   La disponibilità di ogni modello individualmente.
*   Le metriche di performance come il tempo di risposta (TTFB) e il throughput (tokens/s).
*   La cronologia degli incidenti per un monitoraggio completo.