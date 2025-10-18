# Domande frequenti sull'offerta di servizio LLMaaS Cloud Temple

## Offerta e Capacità

### **Qual è l'offerta del vostro servizio LLMaaS?**

Il nostro servizio vi offre un accesso **sovrano e sicuro** a un ampio catalogo di modelli di intelligenza artificiale di ultima generazione, tramite un'API compatibile con OpenAI. Gestiamo tutta la complessità dell'infrastruttura certificata **SecNumCloud 3.2**, consentendovi di concentrarvi sulla creazione di valore per le vostre applicazioni, mantenendo sotto controllo i costi grazie a un modello economico prevedibile e accelerando i vostri sviluppi grazie a standard aperti.

### **What types of models do you offer, and how does the catalog evolve?**
We offer a rich catalog of 45 open-source models, including the families **Llama (Meta), Qwen, Deepseek, Mistral, Gemma (Google), Cogito, and Granite (IBM)**. Our models are specialized for various use cases:
*   **Complex reasoning and conversational tasks**.
*   **Code generation and analysis**.
*   **Long-document analysis** (up to 128k tokens with models such as `Gemma 3` or `Qwen2.5-VL`).
*   **Multimodal capabilities** (image analysis with the `Granite Vision`, `Gemma 3`, `Qwen2.5-VL`, and `Mistral Small` series).
*   **Advanced multilingual support** (with models like `Llama 3.3` and the `Qwen` family).

This catalog is **reviewed quarterly** to incorporate the most performant models, with a transparent lifecycle policy (3-month notice prior to any deprecation) to ensure stability for your applications.

### **Quali sono le principali funzionalità offerte dalla tua API?**  
La nostra API, completamente compatibile con lo standard OpenAI, ti permette di creare facilmente funzionalità avanzate come:  
*   **Chatbot/assistenti conversazionali**.  
*   Sistemi di **Ricerca Aumentata con Generazione (RAG)** utilizzando il nostro endpoint per gli embedding.  
*   Applicazioni di **analisi di immagini e documenti visivi** senza necessità di OCR predefinito.  
*   **Trascrizione audio** tramite un servizio dedicato.

## Sicurezza e Sovranità

### **Come garantite la sovranità e la riservatezza dei vostri dati?**

La sovranità è al centro della nostra offerta. Si basa su diversi pilastri:

1.  **Ospitalità in Francia**: La nostra infrastruttura è esclusivamente in Francia, gestita da Cloud Temple, una società di diritto francese. Ci esonera dalle leggi extraterritoriali come il **CLOUD Act americano**.
2.  **Qualifica SecNumCloud 3.2**: Il massimo riconoscimento di sicurezza dell'ANSSI garantisce questa posizione.
3.  **Nessun archiviazione dei dati**: Non conserviamo **né i vostri prompt, né le risposte**. I dati vengono elaborati in modo volatile in memoria durante l'inferenza.
4.  **Crittografia end-to-end**: Tutte le comunicazioni con l'API sono crittografate tramite **TLS 1.3**.

### **How do you manage access, permissions (RBAC), and authentication (SSO, MFA)?**

Our service integrates with your security policy under a shared responsibility model:

*   **For your end users**: Identity management, permissions (RBAC), and strong authentication (SSO, MFA) are the responsibility of **your application**.
*   **For your administrators**: Access to the **Cloud Temple Console** for service management (key management, monitoring) can be connected to your enterprise SSO (via OpenID Connect) to leverage your security policies, including MFA.
*   **For your applications**: You can create different API keys with distinct consumption quotas to segment permissions at the application level.

### **How is the platform secured?**
We implement a defense-in-depth strategy:
*   **Strong authentication** via API key for every request.
*   **TLS 1.3 encryption** for all data flows.
*   **Network protection** through next-generation firewalls and intrusion detection/prevention systems (IDS/IPS).
*   **Application-level guardrails** to defend against LLM-specific threats, such as prompt injection and model exploitation attempts.
*   **Regular penetration testing** conducted by qualified auditors (PASSI) as part of our SecNumCloud 3.2 certification process.

## Integrazione e utilizzo

### **How do you integrate your API?**
Our service is "API-first". Being **OpenAI API-compatible**, you can use all standard SDKs (Python, Node.js, etc.) and market-leading frameworks such as **LangChain** or **LlamaIndex** for rapid integration. We provide comprehensive technical documentation (OpenAPI) and code examples.

### **Is it possible to customize the user experience?**
Yes, absolutely. Since our service is a "headless" API, you have full control over the interface and end-user experience, including the integration of your own design guidelines and the display of compliance messages, which are your responsibility.

### **How do you manage risks related to intellectual property (IP)?**

You have full control over the models your application calls. For use cases sensitive to IP, we highlight IBM's **Granite models**, which come with a **contractual, uncapped indemnification** against IP claims — a unique guarantee in the market.

## Modello Economico e Supporto

### **Qual è il vostro modello economico?**  
Il nostro modello si basa sul consumo effettivo (**token** per il linguaggio, **minuti** per l'audio) per riflettere il costo di calcolo reale. Per garantire prevedibilità e controllo del budget, offriamo **Piani di servizio** con budget massimi e **contratti su misura**. Potete monitorare il consumo in tempo reale dalla Console Cloud Temple, per una trasparenza totale. Inoltre, il numero di utenti è sempre illimitato, indipendentemente dal piano scelto.

### **What level of support and SLA do you offer?**
Our standard offering includes technical support in French and English, accessible via our customer portal, with a commitment to first response within one business day. The platform is backed by a **99%** availability commitment. For more critical needs, our optional **Professional Services** provide enhanced SLAs, including priority support with response times of up to 4 hours for critical incidents, and customized strategic support (innovation workshops, ITIL governance).

### **Come posso monitorare lo stato di salute della piattaforma LLMaaS?**  
Crediamo in una trasparenza totale riguardo alla disponibilità dei nostri servizi. Puoi verificare in tempo reale lo stato operativo di ciascun modello di intelligenza artificiale sulla nostra pagina di stato pubblica: **[https://llmaas.status.cloud-temple.app/](https://llmaas.status.cloud-temple.app/)**.

Questa pagina fornisce informazioni dettagliate su:
*   Lo stato generale della piattaforma.
*   La disponibilità di ciascun modello singolarmente.
*   Le metriche di prestazione come il tempo di risposta (TTFB) e il throughput (tokens/s).
*   L'archivio degli incidenti per un monitoraggio completo.