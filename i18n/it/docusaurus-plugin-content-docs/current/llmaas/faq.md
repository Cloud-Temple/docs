# Domande frequenti sull'offerta di servizio LLMaaS Cloud Temple

## Offerta e Capacità

### **Qual è la proposta di valore del tuo servizio LLMaaS?**
Il nostro servizio ti offre un accesso **sovrano e sicuro** a un'ampia gamma di modelli di intelligenza artificiale di punta, tramite un'API compatibile con OpenAI. Gestiamo tutta la complessità dell'infrastruttura certificata **SecNumCloud 3.2**, permettendoti di concentrarti sulla creazione di valore per le tue applicazioni, controllando contemporaneamente i tuoi costi grazie a un modello economico prevedibile e accelerando i tuoi sviluppi grazie a standard aperti.

### **Quale tipo di modelli offriamo e come evolve il catalogo?**  
Offriamo un catalogo ricco di 45 modelli open-source, che includono le famiglie **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito e Granite (IBM)**. I nostri modelli sono specializzati per diversi casi d'uso:  
*   **Ragionamento complesso e conversazionale**.  
*   **Generazione e analisi del codice**.  
*   **Analisi di documenti lunghi** (fino a 128k token con modelli come `Gemma 3` o `Qwen2.5-VL`).  
*   **Capacità multimodali** (analisi di immagini con le serie `Granite Vision`, `Gemma 3`, `Qwen2.5-VL` e `Mistral Small`).  
*   **Supporto multilingue avanzato** (con modelli come `Llama 3.3` e la famiglia `Qwen`).  

Questo catalogo è **verificato ogni trimestre** per integrare i modelli più performanti, con una politica di ciclo di vita trasparente (avviso di 3 mesi prima di eventuali rimozioni) per garantire la stabilità delle tue applicazioni.

### **Quali sono le principali capacità funzionali della tua API?**  
La nostra API, al 100% compatibile con lo standard OpenAI, ti permette di creare facilmente funzionalità avanzate come:  
*   Dei **chatbot/assistenti** conversazionali.  
*   Sistemi di **Ricerca Ampliata con Generazione (RAG)** utilizzando il nostro endpoint di embedding.  
*   Applicazioni di **analisi di immagini e documenti visivi** senza OCR predefinito.  
*   La **trascrizione audio** attraverso un servizio dedicato.

## Sicurezza e Sovranità

### **Come garantisci la sovranità e la riservatezza dei nostri dati?**  
La sovranità è al centro della nostra offerta. Si basa su diversi pilastri:  
1.  **Ospitazione in Francia** : La nostra infrastruttura è esclusivamente in Francia, gestita da Cloud Temple, una società di diritto francese. Questo ci sottrae alle leggi extraterritoriali come il **CLOUD Act americano**.  
2.  **Qualificazione SecNumCloud 3.2** : Il più alto visto di sicurezza dell'ANSSI garantisce questa posizione.  
3.  **Non conservazione dei dati** : Non conserviamo **né i tuoi prompt, né le risposte**. I dati vengono elaborati in modo volatile in memoria per il tempo dell'inferenza.  
4.  **Crittografia end-to-end** : Tutte le comunicazioni con l'API sono crittografate in **TLS 1.3**.

### **Come gestisci gli accessi, i diritti (RBAC) e l'autenticazione (SSO, MFA)?**
Il nostro servizio si integra con la tua politica di sicurezza seguendo un modello di responsabilità condivisa:
*   **Per i tuoi utenti finali**: La gestione delle identità, dei diritti (RBAC) e dell'autenticazione forte (SSO, MFA) è responsabilità della **tua applicazione**.
*   **Per i tuoi amministratori**: Gli accessi alla **Console Cloud Temple** per il controllo del servizio (gestione delle chiavi, monitoraggio) possono essere collegati al tuo SSO aziendale (tramite OpenID Connect) per beneficiare delle tue politiche di sicurezza, incluse le MFA.
*   **Per le tue applicazioni**: Puoi creare diverse chiavi API con quotature di consumo distinte per segmentare i diritti a livello applicativo.

### **Come è sicura la piattaforma?**
Applichiamo una difesa in profondità:
*   **Autenticazione forte** tramite chiave API per ogni richiesta.
*   **Crittografia TLS 1.3** di tutti i flussi.
*   **Protezione di rete** con firewall di nuova generazione e sistemi di rilevamento/prevenzione delle intrusioni (IDS/IPS).
*   **"Guardrails" applicativi** per proteggersi dalle minacce specifiche ai LLM, come l'iniezione di prompt e le tentativi di sfruttamento dei modelli.
*   **Test di intrusione regolari** effettuati da auditor qualificati (PASSI) nell'ambito della nostra certificazione SecNumCloud 3.2.

## Integrazione e Utilizzo

### **Come si integra la tua API?**
Il nostro servizio è "API-first". Essendo **compatibile con l'API OpenAI**, puoi utilizzare tutti i SDK (Python, Node.js, ecc.) e framework standard del mercato come **LangChain** o **LlamaIndex** per un'integrazione rapida. Forniamo una documentazione tecnica completa (OpenAPI) e esempi di codice.

### **È possibile personalizzare l'esperienza utente?**
Sì, completamente. Il nostro servizio essendo un'API "headless", hai un controllo totale sull'interfaccia e sull'esperienza degli utenti finali, inclusa l'integrazione della tua grafica e la visualizzazione di messaggi di conformità, che sono di tua responsabilità.

### **Come gestisci i rischi relativi alla proprietà intellettuale (PI)?**
Hai un controllo totale sui modelli chiamati dall'applicazione. Per i casi d'uso sensibili alla PI, promuoviamo i modelli **Granite di IBM**, che beneficiano di un **indennizzo contrattuale senza limiti** per le richieste di PI, una garanzia unica sul mercato.

## Modello Economico e Supporto

### **Qual è il vostro modello economico?**
Il nostro modello si basa sul consumo effettivo (**tokens** per il linguaggio, **minuti** per l'audio) per riflettere i costi di calcolo reali. Per garantire prevedibilità e controllo dei budget, offriamo dei **Terze parti** con budget massimi e **contratti personalizzati**. Potete monitorare il vostro consumo in tempo reale dalla Console Cloud Temple per una trasparenza totale. Inoltre, il numero di utenti è sempre illimitato, indipendentemente dal piano scelto.

### **Quale livello di supporto e di SLA offriamo?**
La nostra offerta standard include un supporto tecnico in francese e inglese, accessibile tramite il nostro portale clienti, con un impegno di prima risposta entro il giorno lavorativo. La piattaforma gode di un impegno di disponibilità del **99%**. Per le esigenze più critiche, i nostri opzionali **Servizi Professionali** vi danno accesso a SLA rafforzati, inclusi un supporto prioritario con un tempo di risposta fino a 4 ore per gli incidenti critici, e un supporto strategico personalizzato (workshop di innovazione, governance ITIL).