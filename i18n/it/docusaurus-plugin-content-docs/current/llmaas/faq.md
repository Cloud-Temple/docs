# FAQ sull'offerta di servizio LLMaaS Cloud Temple

## Offerta e Capacità

### **Qual è la proposta di valore del vostro servizio LLMaaS?**
Il nostro servizio vi offre un accesso **sovrano e sicuro** a un ampio catalogo di modelli di IA all'avanguardia, tramite un'API compatibile con OpenAI. Gestiamo tutta la complessità dell'infrastruttura qualificata **SecNumCloud 3.2**, consentendovi di concentrarvi sulla creazione di valore per le vostre applicazioni, controllando al contempo i costi grazie a un modello economico prevedibile e accelerando i vostri sviluppi grazie a standard aperti.

### **Che tipo di modelli offrite e come evolve il catalogo?**
Il catalogo copre chat e ragionamento, programmazione e agenti, visione, embedding, reranking, sicurezza, traduzione e utilizzi audio/immagine. I modelli e le relative licenze variano in base all'utilizzo.

Consultate il **[catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle)** per l'elenco attuale, gli stati LTS, le scadenze e le migrazioni consigliate. Le novità vengono pubblicate nel **[changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog)**.

### **Un vecchio nome di modello può continuare a funzionare dopo un'evoluzione del catalogo?**
Sì, alcuni identificatori sono reindirizzati verso un successore. Ciò preserva la chiamata API ma può modificare il comportamento del modello. Verificate la destinazione nel ciclo di vita, testatela sui vostri casi d'uso e aggiornate la vostra configurazione. Consultate la [guida alla migrazione](./concepts.md#migrazione-verso-un-altro-modello).

### **Quali sono le principali capacità funzionali della vostra API?**
La nostra API compatibile con OpenAI vi permette di costruire funzionalità come quelle di seguito. Gli endpoint e i parametri supportati sono specificati nel [riferimento API](./api.md#compatibilità-openai).
*   **Chatbot/assistenti** conversazionali con streaming e function calling.
*   Sistemi completi di **Ricerca Aumentata dalla Generazione (RAG)**: embedding (`/v1/embeddings`) + reranking (`/v1/rerank`) + generazione aumentata.
*   Applicazioni di **analisi di immagini e documenti visivi** (OCR, grafici). Per i PDF, convertite preventivamente le pagine in immagini; consultate i [prerequisiti della guida OCR](./ocr.md#prerequisiti-formato-dellimmagine-e-dipendenze).
*   **Trascrizione audio** batch o in tempo reale tramite WebSocket.
*   **Elaborazione in batch (Batch API)** asincrona per carichi di lavoro voluminosi, con una tariffazione specifica pubblicata nel catalogo tariffario ufficiale.
*   **Generazione di immagini** tramite API compatibile con OpenAI.

## Sicurezza e Sovranità

### **Come garantite la sovranità e la riservatezza dei nostri dati?**
La sovranità è al centro della nostra offerta. Si basa su diversi pilastri:
1.  **Hosting e gestione in Francia**: L'infrastruttura LLMaaS è ospitata in Francia e gestita in Francia da Cloud Temple, società di diritto francese. Per le garanzie di sovranità associate alla qualifica, consultate [il nostro approccio SecNumCloud](https://www.cloud-temple.com/notre-approche-secnumcloud/).
2.  **Qualifica SecNumCloud 3.2**: Il più alto visto di sicurezza dell'ANSSI garantisce questo posizionamento.
3.  **Non conservazione dei dati**: Non memorizziamo **né i vostri prompt, né le risposte**. I dati vengono elaborati in modo volatile in memoria per la durata dell'inferenza.
4.  **Crittografia end-to-end**: Tutte le comunicazioni con l'API sono crittografate in **TLS 1.3**.

### **Come gestite gli accessi, i diritti (RBAC) e l'autenticazione (SSO, MFA)?**
Il nostro servizio si integra con la vostra politica di sicurezza secondo un modello di responsabilità condivisa:
*   **Per i vostri utenti finali**: La gestione delle identità, dei diritti (RBAC) e dell'autenticazione forte (SSO, MFA) è di responsabilità della **vostra applicazione**.
*   **Per i vostri amministratori**: Gli accessi alla **Console Cloud Temple** per la gestione del servizio (gestione delle chiavi, supervisione) possono essere collegati al vostro SSO aziendale (tramite OpenID Connect) per beneficiare delle vostre politiche di sicurezza, incluso il MFA.
*   **Per le vostre applicazioni**: Potete creare diverse chiavi API con quote di consumo distinte per segmentare i diritti a livello applicativo.

### **Come è sicura la piattaforma?**
Applichiamo una difesa in profondità:
*   **Autenticazione forte** tramite chiave API per ogni richiesta.
*   **Crittografia TLS 1.3** di tutti i flussi.
*   **Protezione di rete** tramite firewall di nuova generazione e sistemi di rilevamento/prevenzione delle intrusioni (IDS/IPS).
*   **Test di intrusione regolari** realizzati da auditor qualificati (PASSI) nell'ambito della nostra qualifica SecNumCloud 3.2.

### **I prompt vengono filtrati automaticamente?**
No. La piattaforma non applica alcun filtraggio automatico del contenuto dei prompt contro le iniezioni o i tentativi di elusione delle istruzioni. I controlli del contenuto rientrano nella vostra applicazione. Potete integrare esplicitamente un modello di sicurezza per valutare gli input o le risposte, in base ai vostri criteri aziendali. Consultate la [sicurezza dei prompt](./concepts.md#sicurezza-dei-prompt).

## Integrazione e Utilizzo

### **Come si integra la vostra API?**
Il nostro servizio è "API-first". La sua **API compatibile con OpenAI** permette di utilizzare gli SDK OpenAI e framework come **LangChain** o **LlamaIndex** per le chiamate supportate. Configurare l'URL di base e la vostra chiave LLMaaS, quindi verificare i parametri e le capacità del modello scelto. Consultate le [differenze documentate](./api.md#compatibilità-openai) e gli [esempi di integrazione](./tutorials.md).

### **È possibile personalizzare l'esperienza utente?**
Sì, totalmente. Essendo il nostro servizio un'API "headless", avete un controllo totale sull'interfaccia e sull'esperienza dei vostri utenti finali, inclusa l'integrazione della vostra identità grafica e la visualizzazione di messaggi di conformità, che sono di vostra responsabilità.

### **Come gestite i rischi legati alla proprietà intellettuale (PI)?**
Avete il controllo totale sui modelli che la vostra applicazione chiama. Per i casi d'uso sensibili alla PI, mettiamo in evidenza i modelli **Granite di IBM**, che beneficiano di una **indennizzo contrattuale senza plafond** contro le contestazioni di PI, una garanzia unica sul mercato.

## Modello Economico e Supporto

### **Qual è il vostro modello economico?**
Il nostro modello si basa sul consumo reale per riflettere il costo di calcolo esatto. La tariffazione per tipo di utilizzo:

| Utilizzo |
| ------- |
| **Token di input (chat)** |
| **Token di output (chat)** |
| **Token di ragionamento** |
| **Reranking** |
| **Batch (input)** |
| **Batch (output)** |
| **Audio ASR** |

Per conoscere i prezzi pubblici vigenti e creare la vostra stima, consultate il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).


Per garantire la prevedibilità e il controllo del budget, offriamo **Livelli di servizio** con budget limitati e **contratti su misura**. Potete monitorare il vostro consumo in tempo reale dalla Console Cloud Temple per una trasparenza totale. Il numero di utenti è sempre illimitato, indipendentemente dal piano scelto.

### **Quale livello di supporto e SLA offrite?**
La nostra offerta standard include un supporto tecnico in Francese e Inglese, accessibile tramite il nostro portale clienti, con un impegno di prima risposta in giorno lavorativo. La piattaforma beneficia di un impegno di disponibilità del **99%**. Per le esigenze più critiche, i nostri **Servizi Professionali** opzionali vi danno accesso a SLA rafforzati, inclusi un supporto prioritario con un tempo di risposta fino a 4 ore per gli incidenti critici e un accompagnamento strategico su misura (workshop di innovazione, governance ITIL).

### **Come posso monitorare lo stato di salute della piattaforma LLMaaS?**
Crediamo in una trasparenza totale sulla disponibilità dei nostri servizi. Potete consultare in tempo reale lo stato operativo di ogni modello di IA sulla nostra pagina di stato pubblica: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Questa pagina fornisce informazioni dettagliate su:
*   Lo stato generale della piattaforma.
*   La disponibilità di ogni modello individualmente.
*   Le metriche di prestazioni come il tempo di risposta (TTFB) e il throughput (token/s).
*   La cronologia degli incidenti per un monitoraggio completo.
