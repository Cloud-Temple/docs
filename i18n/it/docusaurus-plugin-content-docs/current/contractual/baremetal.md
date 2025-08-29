---
title: Titolo di Convenzione di Servizio Specifico - Hardware Nudo
---

# CONVENTION DE SERVIZI DI SERVER BARE METAL

| DESTINATARI | **COMMANDITAIRE** |
| :--- | :--- |
| **Riferimento del documento** | CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Giorno MM AAAA - VF |
| **Interlocutori** | *Prénom* *Nom* Account Manager e-mail : *prenom.nom*\@cloud-temple.com |
| **Data ultima revisione** | 22/01/2025 |
| **Validazione contrattuale** | Giorno MM AAAA |

| Versione | Data | Azione | Autore |
| :--- | :--- | :--- | :--- |
| v1.0 | 22/01/2025 | Redazione iniziale | Nicolas BODILIS |

## Introduzione e Glossario

- **Préliminaire**: Introduction ou préambule qui fournit des informations générales, contexte ou objectifs du document.
- **Glossario**: Section où sont définies les termes techniques spécifiques utilisés dans le document pour faciliter la compréhension par les lecteurs non spécialistes.

## Introduzione

Il presente documento formalizza la Convenzione di servizio associata al servizio Bare Metal in fase di qualificazione SecNumCloud.

Il Servizio è in fase di qualificazione SecNumCloud (vedi attestazione all'Annesso).

La presente convenzione di servizio completa e complementa le condizioni generali di vendita ed utilizzo del fornitore. Si intende che i documenti contrattuali siano interpretati in modo coerente tra loro. In caso di contraddizione o divergenza nei termini dei documenti contrattuali, i documenti prevaleranno nell'ordine seguente:

1. Condizioni Generali di Vendita ed Utilizzo (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud OpenIaaS
4. Convenzione di Servizio SecNumCloud PaaS
5. Convenzione di Servizio specifica - Bare Metal
6. Convenzione particolare
7. Piano di Assicurazione Sicurezza (PAS)
8. Condizioni Particolari d'Uso (CPU)
9. Accordo sulla Protezione dei Dati



## Glossary

In the present Service Agreement, the **Commanditaire**, the **Provider** and the **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, provided that it meets predefined criteria and is accepted by all Parties. It will then be included in the Standard Change list, potentially having a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Provider, enabling the Commanditaire to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within a specific contract or General Terms of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Request for Service:** A request for enhancement following a procedure wherein the execution: i) does not modify the CMDB (Configuration Management Database); ii) known operational mode, costs, and risks are accepted upfront; iii) no specific rollback procedures are required; iv) is subject to an agreed level of service agreement and included in the contract revenue when performed during business hours.

- **Availability:** Capacity to ensure the Service's availability and optimal performance, aligning with defined service level agreements (SLAs).

- **Technical Data:** Encompasses all data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration settings, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence that may have significance for managing the Service.

- **Hypervisor:** Operating system enabling execution of virtual machines on a compute layer.

- **Incident:** An unexpected event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:
  - Intentionally malicious;
  - Accidental, affecting the integrity, confidentiality, or traceability of the Service or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin-based availability downtime is not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Provider to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions taken to implement a Change once approved (the change, in ITIL terms, pertains to change management but not its execution/implementation).

- **Problem:** Root cause of recurring Incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services for optimizing latency, performance, and local regulatory compliance.

- **Service:** The Bare Metal service currently under SecNumCloud qualification, delivered by the Provider from maintained technical infrastructures as described in the "Description of Service" section of this Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without intervening directly on monitored elements, a prerogative reserved for operational administration.

- **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ):** A specific, isolated section of the cloud computing infrastructure, designed to ensure high availability and resilience of services through geographical distribution of resources.

# Abbreviations

| Abbreviation | Definition |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Comitato consultivo per i cambiamenti |
| **CMDB** | Configuration Management Database -- Database di gestione delle configurazioni |
| **COPIL** | Comitato di pianificazione |
| **COSTRAT** | Comitato strategico |
| **COPROJ** | Comitato Progetto |
| **DB** | Database (database) |
| **DPA** | Data Protection Agreement -- Accordo sulla protezione dei dati |
| **DRP** | Disaster Recovery Plan (PRA) (Piano di recupero d'attività) |
| **GTE** | Garantia Tempi Escalation |
| **GTI** | Garantia Tempi Intervento |
| **GTR** | Garantia Tempi Risoluzione |
| **ITIL** | Information Technology Infrastructure Library - Linee guida per la gestione delle Sistemazioni Informatiche |
| **IaaS** | Infrastructure as a Service -- Servizi di infrastruttura come servizio |
| **MCO** | Manutenzione in condizioni operative |
| **MOA** | Maitrise d'Ouvrage |
| **MOE** | Maitrise d'Œuvre |
| **MSP** | Managed Services Provider -- Fornitore di servizi gestiti |
| **OS** | Operating system (sistema operativo) |
| **PAQ** | Piano Assicurazione Qualità |
| **PaaS** | Platform as a Service -- Servizi come servizio |
| **PAS** | Piano Assicurazione Sicurezza |
| **PASSI** | Prestatore di Audit di Sicurezza dei Sistemi d'Informazione |
| **RFC** | Request For Change -- Richiesta di cambio |
| **RGPD** | Regolamento Generale sulla Protezione dei Dati (personali) |
| **RPO** | Recovery Point Objective -- Obiettivo di fraichezza delle informazioni restaurate in caso di incidente |
| **RTO** | Recovery Time Objective -- Tempo di ripristino del servizio in caso di incidente |
| **SDM** | Service Delivery Manager |
| **SLA** | Service Level Agreement -- Accordo sui livelli di servizio |
| **SNC** | SecNumCloud |
| **SOC** | Security Operation Center |
| **TMA** | Tierce Maintenance d'Application -- Manutenzione di applicazioni da terze parti |
| **UO** | Unità d'Œuvre |
| **VABE** | Validazione dell'Adeguatezza alla Buona Esecuzione |
| **VABF** | Validazione dell'Adeguatezza al Buon Funzionamento |
| **VM** | Virtual Machine (Machine virtuale) |
| **VSR** | Validation del Servizio Regolare |

# Obiettivo della presente Convenzione di Servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni entro cui il Prestatore si impegna a fornire il Servizio al COMMANDITAIRE. L'obiettivo è:

- Definire le livello di prestazioni atteso dal COMMANDITAIRE in termini di funzionalità e affidabilità del Servizio;

- Elaborare le obbligazioni del Prestatore per soddisfare agli standard di servizio concordati;

- Identificare le normative specifiche applicabili al Servizio fornito;

- Garantire l'uniformità e l'integrità nell'evaluazione della qualità del Servizio;

- Assicurare l'eccellenza dei servizi forniti, valutata attraverso indicatori di prestazione quantitativi.

In caso in cui il Prestatore dovesse perdere la qualificazione SecNumCloud, il Contratto potrebbe essere risolto immediatamente e senza penali da parte del COMMANDITAIRE. In tale ipotesi, il Prestatore si impegna a informare il COMMANDITAIRE della dequalificazione tramite una notifica formale, utilizzando una lettera raccomandata con avviso di ricevuta.

È importante sottolineare che qualsiasi modifica o aggiustamento della qualificazione SecNumCloud non sarà interpretato come revoca dell'originale qualificazione.

# Audit

Il forme un impegno del Fornitore di consentire al COMMANDITAIRE, o a qualsivene auditor terzo e non concorrent del Fornitore, di consultare tutti i documenti necessari per l'attestazione del rispetto integrale delle obbligazioni relative alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione di audit.

Accettando questa Convenzione di Servizio, il COMMANDITAIRE concede esplicitamente il permesso al Fornitore:

 1. All'Agenzia Nazionale per la Sicurezza dei Sistemi d'Informazione (ANSSI) e ad entita' di certificazione competente per verificare la conformità del Servizio e del sistema informativo con il riferimento SecNumCloud.
2. Un fornitore di audit della sicurezza dei sistemi d'informazione, debitamente qualificato PASSI e specificatamente designato dal Fornitore, per svolgere audit di sicurezza relativi al Servizio.

## Descrizione del Servizio

Questo è il testo tradotto in italiano per la sezione "Descrizione del Servizio". Si prega di notare che non sono stati modificati gli elementi strutturali o formatativi del Markdown originale, come i titoli (#), le liste, i blocchi di codice e le en-têtes. Tuttavia, il contenuto all'interno dei blocchi di testo è stato tradotto dal français al italiano.

### Esempio Markdown Original:
```markdown
# Description du Service

Ce service offre une plateforme de cloud computing flexible et évolutive pour les entreprises. Il permet aux clients de stocker, traiter et analyser des données en temps réel grâce à une infrastructure hautement disponible et sécurisée.
```

### Traduction in Italiano:
```markdown
## Descrizione del Servizio

Questo servizio offre una piattaforma di cloud computing flessibile ed evolutiva per le aziende. Permette ai clienti di archiviare, elaborare e analizzare i dati in tempo reale grazie a un'infrastruttura altamente disponibile e sicura.
```

## Shared Responsibility Model

The service offered by the Provider is characterized by the provision of the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);
- Availability of storage spaces;
- Access to network connectivity and internet services;
- Access to a management console for deployed resources.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the scope of the Service is outlined in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope Description of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource for Tenant COMMANDITAIRE |
| **Storage** | Production data for Tenant COMMANDITAIRE |
| **Network Infrastructure** | Network resource for Tenant COMMANDITAIRE |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its Bare Metal service via the Console interface |
| **Support** | Support service accompanying the aforementioned services, limited to SNC qualified scope and Prestataire responsibilities (\*) |

(\*) Within the scope of the qualified Service SNC and Prestataire's responsibilities.

### Infrastrutture Datacenter

Il servizio comprende la disponibilità, per ogni Zona di disponibilità, delle prestazioni in fase di qualificazione seguente:

- Data center situato in Francia per la regione FR, conforme alle ultime norme tecnologiche, che offre un livello di resilienza equivalente o superiore al Tier 3 del Uptime Institute;
- Fornitura di sale tecniche all'interno dei data center dedicati all'accoglienza degli impianti tecnici essenziali per la produzione del servizio, compresi calcolo, archiviazione, rete, cablaggio e altri componenti necessari;
- Fornitura di un'alimentazione elettrica sicura garantita da due circuiti elettrici distinti, che assicurano la continuità del servizio;
- Fornitura di servizi di climatizzazione regolati per rispettare le norme e le raccomandazioni dei produttori degli impianti, per mantenere un ambiente ottimale per i dispositivi tecnici;
- Supervisione continua e metrologia dettagliata, che permette un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il fornitore garantisce la disponibilità di servizi avanzati di rilevamento e spegnimento degli incendi, progettati per identificare e neutralizzare in modo efficace qualsiasi fuga di fumo all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza degli impianti e dei dati. Comprendono sensori di fumo di alta precisione e dispositivi di spegnimento che possono agire rapidamente senza danneggiare l'impianto informatico. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e garantire la continuità delle operazioni.

Il COMMANDITAIRE è informato che tutte le procedure e misure di sicurezza implementate, inclusi i test annuali di scarico su generatore, sono fondamentali per garantire la continuità ed integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare i rischi di interruzione e assicurare una risposta ottimale in caso di incidente. Accettando queste condizioni, il COMMANDITAIRE riconosce l'importanza di queste misure e si impegna a collaborare pienamente per la loro implementazione. Il COMMANDITAIRE è anche incoraggiato a consultare le raccomandazioni di sicurezza fornite e ad integrarle nella propria strategia gestione dei rischi.

### Interfaccia Software di Gestione del Servizio

Il fornitore fornisce al COMMANDITAIRE la console di amministrazione e l'API necessarie per l'utilizzo del Servizio. Si precisa, mantiene anche la console di amministrazione e l'API in condizioni operative ottimali e garantisce la sicurezza continuamente. Questa console di amministrazione e l'API sono racchiuse sotto il termine "interfaccia COMMANDITAIRE".

Il fornitore avvisa il COMMANDITAIRE che un utilizzo anomalo dell'interfaccia COMMANDITAIRE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che portano al blocco dell'accesso alle API di comando o al Servizio stesso. È importante sottolineare che tale situazione non implica un indisponibilità del Servizio, ma piuttosto una misura di protezione del Servizio e dell'infrastruttura del fornitore; pertanto, il COMMANDITAIRE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il fornitore specifica al COMMANDITAIRE che le richieste perfettamente identiche (doppie) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMANDITAIRE invia richieste identiche a una frequenza superiore, il loro respingo non può essere interpretato come un'indisponibilità del Servizio.

### Infrastrutture di Calcolo

Il Servizio comprende la fornitura, nelle zone di disponibilità sottoscritte dal COMMANDITAIRE, degli equipaggiamenti necessari per l'esecuzione delle cariche lavorative sotto forma di macchine virtuali.

Ciò include:

- La fornitura dei casi tecnici necessari al corretto funzionamento delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMANDITAIRE e distribuite secondo le zone di disponibilità del suo scelta. È da notare che queste lame di calcolo sono esclusivamente dedicate al COMMANDITAIRE;
- La messa a disposizione di una console tipo KVM per il controllo della risorsa di calcolo.

Il selezione del modello di lama di calcolo, scelto tra quelli proposti dal fornitore, ricade nella responsabilità del COMMANDITAIRE.

### Infrastruttura di Archiviazione

Il servizio include la fornitura al COMMANDITAARE di un'infrastruttura di archiviazione condivisa del tipo SAN (Storage Area Network), offrendo vari livelli di prestazioni. Questo servizio comprende:

- La realizzazione e il mantenimento in condizioni operative e di sicurezza del rete SAN dedicato;
- L'installazione e la gestione delle celle di archiviazione condivise tra i clienti, inclusa la loro manutenzione in condizioni operative e di sicurezza, il monitoraggio e la meccanometria;
- La configurazione dei sistemi automatizzati per l'allocazione dei LUN (Logical Unit Numbers) di archiviazione dedicati all'uso del COMMANDITAARE, in conformità con i volumi abbonati dal COMMANDITAARE.

### Infrastruttura di rete globale

Il fornitore implementa, all'interno del Servizio, un'infrastruttura di rete globale che consente al COMMANDITAIRE di rendere accessibili i propri sistemi ospitati. Questo servizio comprende:

- La fornitura, il mantenimento in condizioni operative e di sicurezza di tutti i collegamenti in fibra ottica che connettono le diverse Zone di disponibilità;

- La fornitura, il mantenimento in condizioni operative e di sicurezza degli equipaggiamenti tecnici necessari per il corretto funzionamento del network e l'isolamento dei diversi client.

L'interconnessione del network del TENENTE COMMANDITAIRE con Internet o con reti private, così come gli strumenti di rete, i collegamenti operatori e altri componenti tecnici che realizzano questa interconnessione, non fanno parte del piano di servizio. Questa interconnessione network viene implementata in conformità con le disposizioni previste nel Contratto.

### Implementazione di soluzioni di ripristino o continuità aziendale

Il fornitore fornisce al COMMANDITAIRE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle risorse attraverso diverse Zone di disponibilità. È responsabilità del COMMANDITAIRE gestire efficacement la distribuzione delle risorse, che può sfruttare gli strumenti forniti dal fornitore per questo scopo.

### Limitazioni dei servizi nel modello di infrastruttura fisica qualificata

Questo paragrafo descrive le limitazioni associati ai servizi offerti all'interno del modello di infrastruttura fisica qualificata. In questo contesto, "limitazioni" si riferisce a vincoli relativi alla scalabilità, flessibilità, sicurezza e manutenzione che possono influenzare l'efficacia e la convenienza di tali servizi.

1. **Scalabilità**: I servizi basati su infrastrutture fisiche qualificate spesso presentano una scalabilità limitata rispetto ai modelli cloud tradizionali. La necessità di acquistare e configurare hardware aggiuntivo può rappresentare un ostacolo significativo per l'espansione rapida dei servizi.

2. **Flessibilità**: Sebbene i sistemi fisici possano offrire maggiore controllo su risorse, la flessibilità di implementazione e modifica può essere limitata a causa delle specifiche hardware e software richieste. Le applicazioni potrebbero dover essere ottimizzate per l'ambiente fisico, il che può ridurre la velocità di sviluppo e l'adattabilità alle esigenze mutevoli.

3. **Sicurezza**: I sistemi fisici possono offrire un livello di sicurezza più elevato grazie al controllo diretto sulle risorse hardware, ma richiedono una manutenzione continua e aggiornamenti per contrastare le minacce emergenti. Inoltre, la gestione della sicurezza fisica può essere complessa, poiché comporta l'affidabilità delle infrastrutture di rete, dei sistemi di accesso e delle politiche di sicurezza.

4. **Manutenzione**: La manutenzione dei servizi basati su infrastrutture fisiche richiede competenze specializzate per la gestione hardware e software. Inoltre, le interruzioni per la manutenzione possono influire negativamente sulla disponibilità del sistema, poiché è necessario pianificare attentamente i tempi di servizio e garantire che le operazioni non vengano interrotte in modo imprevisto.

5. **Costo**: Sebbene l'acquisto diretto dei componenti possa sembrare economico a prima vista, il costo totale può essere elevato a causa delle spese di acquisizione e manutenzione continua del hardware, oltre alla necessità di personale altamente qualificato per gestire l'infrastruttura.

6. **Tempi di implementazione**: La configurazione di un sistema fisico può richiedere più tempo rispetto a una soluzione cloud, soprattutto quando si tratta di installare e ottimizzare hardware specifico per le esigenze del servizio.

7. **Compatibilità**: Assicurarsi che tutti i componenti fisici siano compatibili tra loro può essere un compito impegnativo, specialmente quando si lavora con hardware di diverse marche o generazioni.

8. **Efficienza energetica**: I sistemi fisici possono avere un'efficienza energetica inferiore rispetto ai modelli cloud, poiché la gestione dell'energia e delle prestazioni richiede una pianificazione e un monitoraggio attenti.

9. **Disponibilità**: La disponibilità dei servizi basati su infrastrutture fisiche può essere limitata da fattori come la dipendenza dalle forniture di componenti specifiche, le condizioni geografiche per l'installazione e i vincoli legati alla manutenzione.

10. **Aggiornamenti**: Implementare aggiornamenti o miglioramenti significativi richiede tipicamente un processo più complesso rispetto ai modelli cloud, poiché comporta l'acquisto e la sostituzione di hardware, nonché la gestione dei cambiamenti per evitare interruzioni.

Queste limitazioni dovrebbero essere considerate quando si valuta se un servizio basato su infrastrutture fisiche qualificata è il modello più adatto per le esigenze specifiche di un'organizzazione, tenendo conto dei propri requisiti in termini di scalabilità, flessibilità, sicurezza e costo.

### Servizi gestiti in RUN

È importante sottolineare che sono esclusi dal servizio:

- La gestione dell'infrastruttura fisica del COMMANDITAIRE;

- La connettività di rete del Tenant COMMANDITAIRE, sia a Internet che ai reti private, inclusi i collegamenti operatori;

- Tutti i servizi di tipo gestito (TMA);

- Qualsiasi assistenza relativa ai sistemi operativi installati e sopra nella pila di responsabilità, anche se si tratta solo di supervisione.

Detto ciò, non è assolutamente escluso che il COMMANDITAIRE possa ricorrere a tali servizi attraverso l'offerta MSP del Fornitore per intervenire in modalità di servizio gestito sui Tenanti. In questi casi, questi servizi non saranno regolati dalla presente Convenzione di servizio e dalle clausole reciproche.

### Configurazione del Sicurezza

Inizialmente, il fornitore prende in carico la configurazione delle risorse Bare Metal al COMMANDITAIRE, assegnando risorse e configurando i deployment per utilizzare le Zones di disponibilità. È responsabilità del COMMANDITAIRE selezionare le Zones di disponibilità tramite l'interfaccia COMMANDITAIRE.

## Implementazione del servizio

### Prerequisiti tecnici

Per la messa in funzione del Servizio, il COMMANDITAIRE riconosce che l'avrà bisogno di:

- Dichiarare IP fissi dai quali il fornitore lo autorizzerà ad accedere all'interfaccia COMMANDITAIRE (Filtraggio per lista bianca). Le modifiche della lista di IP dovranno essere effettuate tramite il menu previsto a tal scopo nella console o tramite Richieste di servizio per le modifica successive. All'inizio del servizio, il fornitore sarà informato almeno di una addebita IP come descritto.

## Localizzazione del servizio in Francia

Siene specificato che nessuna delle operazioni e nessun componente fisico coinvolti nella fornitura del Servizio, incluso il presente Contratto di Servizio, non si trova al di fuori dell'Unione Europea.

Ciò comprende, tra l'altro, il supporto, la supervisione operativa e la supervision della sicurezza (SOC) dell'infrastruttura tecnica che fornisce il Servizio. Di conseguenza, tutto lo stoccaggio, le attività di amministrazione, la supervisione e i trattamenti sono eseguiti in Francia.

### Localizzazione dei Data Center ospitando il Servizio

In assenza delle attività dei collaboratori e delle agenzie del Fornitore, l'intero ambiente di produzione (compreso lo stoccaggio e il trattamento dei dati, così come i componenti tecnici che forniscono il Servizio) è ubicato nei Data Center situati in Francia.

### Localizzazione delle agende Cloud Temple che offrono il servizio

I dipendenti di Cloud Temple che operano nel perimetro del servizio lavorano da diverse agende di Cloud Temple, tutte situate esclusivamente in Francia. Queste agende si trovano a Tours, Lyon, Caen e Parigi La Défense.

Il Comanditario è informato della possibilità per i dipendenti di Cloud Temple di lavorare remoto. Tuttavia, il fornitore garantisce lo stesso livello di sicurezza per gli accessi remote, in particolare per quelli tramite VPN. Questi accessi remoti vengono implementati in conformità con le esigenze del riferimento SecNumCloud.

## Support

### Natura del servizio di supporto fornito dal fornitore

Il fornitore offre un servizio di support tecnico volto a assistere il COMMANDITAIRE nella gestione, nel ripristino e nell'ottimizzazione delle risorse impiegate. Questo servizio copre una vasta gamma di attività, dalla configurazione iniziale dei servizi fino al supporto tecnico avanzato per la risoluzione di problemi specifici.

Ecco una panoramica delle caratteristiche e delle funzionalità del servizio di supporto:

- Assistenza nella configurazione iniziale dell'utilizzo del Servizio;
- Assistenza per la risoluzione degli incidenti;
- Assistenza per la risoluzione dei problemi;
- Monitoraggio e consiglio sull'ottimizzazione del supporto tecnico.

Nel contesto del servizio di supporto, il fornitore non assume alcuna responsabilità in relazione all'uso del Servizio da parte del COMMANDITAIRE. Il COMMANDITAIRE rimane pienamente responsabile della configurazione, dell'utilizzo delle VM e dei Tenants, così come della gestione di tutti gli elementi (dati e applicazioni inclusi) che ha memorizzato o installato sulle infrastrutture del fornitore. Il servizio di supporto tecnico viene fornito in conformità con le Condizioni Generali di Vendita ed Uso, il fornitore è tenuto a un obbligo di mezzi.

Il COMMANDITAIRE si impegna ad utilizzare il servizio di supporto tecnico in modo ragionevole, evitando di sollevare servizi non sottoscritti presso il fornitore e di far intervenire le squadre del fornitore nei propri clienti o in terzi non inclusi nel contratto. Il fornitore si riserva il diritto di respingere qualsiasi richiesta di servizio che non soddisfi questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità di lavoro di supporto associate.

### Richiesta di Supporto Tecnico

Il supporto tecnico è accessibile tramite un sistema ticket tramite la console COMMANDITAIRE e disponibile durante le normale orario di lavoro, esclusi i giorni festivi (8:00 - 18:00; Lunedì - Venerdì; calendario e orari francesi). Per le emergenze che si verificano fuori dalle ore di ufficio, in particolare quegli incidenti che influenzano significativamente la produzione, il servizio di pronto intervento può essere contattato tramite un numero comunicato al COMMANDITAIRE all'inizio del Servizio.

Per ogni richiesta o Incidente, è obbligatorio generare un ticket presso il supporto del Fornitore. L'inserimento di questo ticket, comprensivo di tutte le informazioni necessarie, è fondamentale e segna l'inizio dell'esame dei vincoli del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia tramite la console di gestione che a seguito di un chiamata telefonica, viene automaticamente creato un ticket. Al momento della dichiarazione di un Incidente, il COMMANDITAIRE deve fornire al Fornitore il maggior numero di dettagli sul problema incontrato. Questa procedura è fondamentale per consentire una valutazione adeguata della situazione, la sua priorizzazione e un diagnostico efficace.

Il COMMANDITAIRE riceve quindi una conferma via email, che indica la creazione del ticket e il suo numero unico. Il COMMANDITAIRE può consultare lo stato e l'elenco degli incidenti direttamente dalla console di gestione.

### Processo di Gestione degli Incidenti

Alla segnalazione di un Incidente, l'equipe di support tecnico del Fornitore attiva un'indagine per identificare la causa del problema e stabilire una diagnosi. Il COMMANDITAIRE deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie e eseguendo i test richiesti. Il Fornitore può accedere al Servizio del COMMANDITAIRE per diagnosticare l'Incidente.

Se i servizi del Fornitore sono considerati funzionali e l'Incidente non gli è imputabile, il COMMANDITAIRE ne sarà informato. Su richiesta del COMMANDITAIRE, il Fornitore può proporre Servizi Professionali per identificare la causa del problema, fatturabila su accordo anticipato in tranche di 30 minuti.

In caso in cui l'Incidente sia imputabile al Fornitore o a uno dei suoi subappaltatori, quest'ultimo completa il diagnostic e si occupa della ripristinazione del Servizio senza ulteriori spese. Il diagnosticato si basa sulle scambi tra le Parti e i dati del Fornitore, elementi considerati validi dagli accordi delle Parti.

### Processo di priorizzazione dei trattamenti

La determinazione del livello di priorità di un dossier si basa su un'analisi matriciale che valuta l'impatto dell'Incident e il suo grado di criticità:

- I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione |
| :--- | :--- |
| **Impatto I1** | I servizi del fornitore vengono interrotti |
| **Impatto I2** | I servizi del fornitore vengono degradati |
| **Impatto I3** | I servizi del fornitore sono attualmente stabili, ma mostrano segnali di potenziale declino a lungo termine |

- I livelli di criticità sono definiti come segue:

| Livello di criticità | Descrizione |
| :--- | :--- |
| **Criticità C1** | I servizi del fornitore si degradano a un ritmo preoccupante |
| **Criticità C2** | I servizi del fornitore si deteriorano gradualmente nel tempo |
| **Criticità C3** | I servizi del fornitore presentano uno o più inconvenienti senza conseguenze significative |

- Sulla base di un'analisi approfondita della situazione, tenendo conto degli elementi che determinano l'impatto e la criticità, viene attribuita una priorità al ticket secondo la matrice decisionale qui sotto:

| Livello di impatto / Livello di criticità | Impatto I1 | Impatto I2 | Impatto I3 |
| :--- | :--- | :--- | :--- |
| **Criticità C1** | Priorità P1 | Priorità P2 | Priorità P3 |
| **Criticità C2** | Priorità P2 | Priorità P3 | Priorità P4 |
| **Criticità C3** | Priorità P3 | Priorità P4 | Priorità P5 |

Gli impegni di servizio del livello di priorità corrispondente per ogni livello di priorità sono dettagliati nel capitolo successivo.

### Lingua e localizzazione del servizio di supporto

Il servizio di supporto è fornito dal Fornitore al COMMANDITARIO almeno in francese. Il supporto può essere anche fornito in inglese.

Le compiti del servizio di supporto del Fornitore per l'offerta di servizi Bare Metal in fase di qualificazione SecNumCloud si trovano all'interno dell'Unione Europea.

# Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, guaranteeing optimal operation.

The unavailability of a service, indicated by a performance indicator, is recognized as soon as it's identified by the Provider's supervision system or upon notification from a COMMANDITAIRE user. The onset of unavailability is set at the earliest time between these two events to ensure precise and fair billing for downtime.

The termination of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's supervision tools or through a return from a user, ensuring effective resumption of operations and accurate measurement of interruption duration.

## Availability Commitments of the Infrastructure

The Provider commits to maintaining a level of availability and performance in accordance with the defined standards for each specified period. These Service Level Agreements (SLAs) are subject to the CONDITION that the COMMANDITAIRE implements its systems across at least two of the available zones within the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will not be able to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The measurements are calculated monthly:

- **SLA 1** (*IC-INFRA_SNC-01*): Compute availability - Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 2** (*IC-INFRA_SNC-02*): Storage availability - Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 3** (*IC-INFRA_SNC-03*): Network infrastructure availability - Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.
- **SLA 4** (IC-INFRA_SNC-04): Internet access - Guaranteed uptime of 99.99%, calculated on a daily, 24/7 basis.

***Remarks***:

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic directed at that IP from its upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIREs and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the command-line interface (CLI).

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## Garantito di disponibilità dell'interfaccia COMMANDITAIRE

- SLA 5: IC-INFRA_SNC-05 - Accesso all'interfaccia amministrativa del Servizio: una disponibilità garantita del 97%, fornita in continuo, 24 ore su 24 e 7 giorni su 7.
- SLA 6: IC-INFRA_SNC-06 - Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su una base 24 ore su 24, 7 giorni su 7.

## Engagement di disponibilità del support

- **SLA 7 : IC-INFRA_SNC-07** -- Ecco i vincoli di prestazione per il supporto tecnico del fornitore per gli incidenti, non in periodi di manutenzione programmata:

| Priorità | Garantito Tempo di Intervento (GTI) | Obiettivo di Performance |
| :--- | :--- | :--- |
| **P1** | 30min | 95% |
| **P2** | 2h | 90% |
| **P3** | 4h | 90% |
| **P4** | 24h | 85% |
| **P5** | 48h | 85% |

- **SLA 8 : IC-INFRA_SNC-08** -- Ecco i vincoli di prestazione per il supporto tecnico del fornitore per le richieste di servizio:

| Tipo | Garantito Tempo di Intervento (GTI) | Obiettivo di Performance |
| :--- | :--- | :--- |
| **Richiesta di Servizio** | 4h | 90% |

*Nota* :

- *Il tempo di Garantita di Tempo d'Intervento (GTI) viene calcolato dalla differenza tra il momento in cui il COMMANDITAIRE apre il ticket e la prima intervento del supporto del fornitore.*
- *L'indagine degli incidenti per i COMMANDITAIRE non includerà un intervento remoto sui server ospitati dal COMMANDITAIRE. Questa assistenza si limiterà a spiegare le metriche disponibili relative all'ambiente del COMMANDITAIRE, al fine di facilitare la comprensione degli incidenti o dei problemi di prestazione incontrati. Sulla base dei risultati di questa analisi, possono essere suggerite raccomandazioni.*

## Organizzazione della relazione contrattuale

## Responsabilità del Fornitore

Il fornitore si impegna:

- a informare il COMMANDITAIRE di eventuali limitazioni delle capacità tecniche (ad esempio, in caso di limite della potenza di elaborazione per fornire il Servizio)

- a informare formalmente il COMMANDITAIRE entro un mese, qualsiasi cambiamento giuridico, organizzativo o tecnico che possa influenzare la conformità del Servizio alle normative di protezione contro le leggi extra-europee (19.6 del riferimento SNC v3.2)

- a fornire al COMMANDITAIRE interfacce e servizi di supporto in lingua francese al minimo

- a considerare le esigenze normative specifiche relative ai tipi di informazioni confidate dal COMMANDITAIRE per la messa in atto del Servizio, entro i limiti delle responsabilità del fornitore e delle disposizioni contrattuali, e successivamente espresse dal COMMANDITAIRE

- a studiare le esigenze normative specifiche relative ai tipi di informazioni confidate dal COMMANDITAIRE per la messa in atto del Servizio, espresse successivamente da quest'ultimo, e a informarlo delle azioni necessarie per il loro rispetto

- a non divulgare alcuna informazione relativa alla fornitura a terzi, salvo autorizzazione scritta ed esplicita del COMMANDITAIRE

- a mettere a disposizione tutte le informazioni necessarie per la realizzazione di audit di conformità secondo le disposizioni dell'articolo 28 del GDPR

- a rendere conto al COMMANDITAIRE, attraverso la presente Convenzione di servizio, di qualsiasi incidente di sicurezza che influisce sul Servizio o sull'utilizzo effettuato dal COMMANDITAIRE (inclusi i dati del COMMANDITAIRE)

- a autorizzare un fornitore di audit della sicurezza dei sistemi informativi (PASSI) qualificato, mandato dal fornitore stesso, ad eseguire l'audit del Servizio e del sistema informatico del fornitore, in linea con il piano di controllo del SecNumCloud. Inoltre, il fornitore si impegna a fornire tutte le informazioni necessarie per la conformità agli audit di sicurezza previsti dal GDPR, sia da parte del COMMANDITAIRE che da un terzo mandatario.

- a fornire, in qualità di subappaltatore, secondo l'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), assistenza e consulenza al COMMANDITAIRE, avvisandolo immediatamente quando una disposizione emana dal COMMANDITAIRE che potrebbe violare le norme di protezione dei dati.

- a informare il COMMANDITAIRE in un tempo ragionevole, tramite la console COMMANDITAIRE o tramite l'indirizzo email del COMMANDITAIRE, qualsiasi progetto che influisca sul livello di sicurezza o sulla disponibilità del Servizio, o che possa comportare una perdita di funzionalità, potenziali impatti, misure di mitigazione adottate e rischi residui che lo riguardano.

- a implementare ed eseguire tutte le procedure necessarie per rispettare le esigenze legali, normative e contrattuali applicabili al Servizio, nonché i requisiti di sicurezza specifici richiesti dal COMMANDITAIRE, definiti da quest'ultimo e previsti nel Contratto.

- a non utilizzare le informazioni del COMMANDITAIRE provenient dalla produzione per testi, tranne in caso di autorizzazione esplicita scritta del COMMANDITAIRE, al quale il fornitore si impegna ad anonimizzare queste informazioni e a garantir la loro confidenzialità durante l'anonimizzazione.

- a rimuovere le informazioni e i dati tecnici relativi al COMMANDITAIRE, secondo la "procedure di cancellazione dei dati alla fine del contratto" descritta nella presente Convenzione di servizio, in caso di fine o risoluzione del contratto.

- a garantire una cancellazione sicura di tutte le informazioni relativi al COMMANDITAIRE, attraverso la ripetizione completa di tutti i supporti che hanno ospitato queste informazioni nel contesto del Servizio.

Su richiesta formale e scritta del COMMANDITAIRE, il fornitore si impegna:

1. A rendere accessibile al COMMANDITAIRE il regolamento interno e la carta etica del fornitore;
2. A rendere accessibile al COMMANDITAIRE le sanzioni in caso di violazione della politica di sicurezza;
3. A fornire al COMMANDITAIRE tutte le informazioni relativi agli eventi che lo riguardano, all'interno delle registrazioni del Servizio; il COMMANDITAIRE potrà consultare autonomamente queste informazioni relative alla propria utilizzo del Servizio tramite le interfacce web e API del Servizio;
4. A rendere accessibile al COMMANDITAIRE le procedure per rispettare le esigenze legali, normative e contrattuali applicabili al Servizio, nonché i requisiti di sicurezza specifici richiesti dal COMMANDITAIRE, previsti nel Contratto;
5. A fornire, gli elementi di valutazione dei rischi relativi alla presentazione delle informazioni del COMMANDITAIRE al diritto di uno Stato non membro dell'UE;
6. A informare il COMMANDITAIRE degli eventuali sotto-fornitori successivi coinvolti nella fornitura del Servizio, e a informarlo di qualsiasi cambiamento che ne influisca relativamente.

> Il fornitore e l'intero gruppo di filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, come la dignità umana, la libertà, la democrazia, l'uguaglianza, lo Stato di diritto e il rispetto dei Diritti Umani. Il servizio fornito dal fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e alle valori dell'Unione Europea relativi al rispetto della dignità umana, della libertà, dell'uguaglianza, della democrazia e dello Stato di diritto.

## Limitazioni delle responsabilità del fornitore

Considerando le definizioni e le termini di questa Convenzione di Servizio, le responsabilità del fornitore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione "Modelli di responsabilità condivise" della presente Convenzione di Servizio, limita effettivamente l'impegno del fornitore nelle strati di funzionalità situati "al di sopra" della fornitura di risorse di calcolo, rete, archiviazione e backup. Ciò esclude esplicitamente:

    - La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicazioni, ecc.);
    - La manutenzione aggiornata degli OS e di altri software installati dal COMMANDITAIRE sulle sue Tenants;
    - La sicurezza dei programmi, software e applicazioni installati sulle macchine virtuali;
    - La manutenzione delle macchine virtuali;
    - La salvaguardia dei dati a livello applicativo.

2. Il fornitore non può sostenere la proprietà dei dati trasmessi e generati dal COMMANDITAIRE. Infatti, questi rientrano nella proprietà del COMMANDITAIRE.

3. Il fornitore sottolinea che non può utilizzare né disposizere i dati trasmessi e generati dal COMMANDITAIRE senza la validazione preventiva di questo ultimo, considerando che tali disposizioni sono riservate al COMMANDITAIRE.

4. Il fornitore assume qualsiasi responsabilità relativa ai componenti fisicamente ospitati e gestiti dal fornitore, ma costituisce la proprietà diretta del COMMANDITAIRE o di un terzo con cui il COMMANDITAIRE ha stipulato un accordo. L'ospitalizzazione dei componenti fisici dei clienti non fa parte del Servizio e, pertanto, è esclusa dal ambito della presente Convenzione di Servizio. È incaricato al COMMANDITAIRE l'esame del livello di adesione o dipendenza che introducono questi componenti rispetto al Servizio Bare Metal in fase di qualifica SecNumCloud.

## Limitazione di Accesso

Nel contesto del servizio, il fornitore è esplicitamente vietato accedere ai tenant appartenenti al COMMANDITAIRE senza autorizzazione precedente. È la responsabilità del COMMANDITAIRE di fornire gli accessi necessari al personale del fornitore, in base alle esigenze specifiche dell'hosting e, se applicabile, a servizi professionali di supporto scelti dal COMMANDITAIRE.

Il COMMANDITAIRE riconosce che questi accessi siano concessi esclusivamente per scopi legati alla fornitura dei servizi convenuti, garantendo così una gestione sicura e conformi agli accordi stipulati.

L'accesso remoto da parte di terzi coinvolti nella fornitura del servizio del fornitore è esclusivamente vietato. In caso in cui una necessità tecnica specifica richieda un tale accesso, questo potrebbe essere autorizzato solo dopo aver chiaramente notificato il COMMANDITAIRE, fornire una giustificazione dettagliata e ottenere il consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMANDITAIRE, assicurando che qualsiasi eccezione alla regola sia adeguatamente autorizzata ed documentata.

## Responsabilità dei terzi coinvolti nella fornitura del servizio

Il Fornitore ha il controllo della lista di partner esterni che contribuiscono alla fornitura del Servizio. Questi partner sono gli editor, i fornitori (del Fornitore) e altri fornitori coinvolti nella fornitura del Servizio. Il Fornitore applica le seguenti misure ai propri partner:

- Il Fornitore richiede ai partner che partecipano alla realizzazione del servizio un livello di sicurezza almeno uguale a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al Servizio;

- Il Fornitore stipula con ciascun partner che partecipa alla realizzazione del servizio, clausole di audit consentendo a un organo di certificazione di verificare che questi partner rispettino le normative e le esigenze SNC, permettendo al Fornitore di adempiere i propri impegni in conformità con la presente Convenzione di Servizio.

- Il Fornitore implementa una procedura che permette di controllare regolarmente le misure adottate dai partner che partecipano alla realizzazione del servizio per rispettare le esigenze del Fornitore di adempiere i propri impegni in conformità con la presente Convenzione di Servizio.

- Il Fornitore garantisce il monitoraggio dei cambiamenti apportati dai partner che partecipano alla realizzazione del servizio che potrebbero influenzare il livello di sicurezza dell'ambiente informativo del Servizio.

## Responsabilità e obblighi del COMMANDITA

Il COMMANDITA ha le seguenti obblighi nel contesto del servizio:

- Per riferimento, il Prestatore fornisce al COMMANDITA una piattaforma di calcolo (server senza OS) la cui configurazione è a carico del COMMANDITA.

- Il COMMANDITA concede al Prestatore l'autorizzazione per l'ANSSI e l'organo di certificazione SNC di auditare il servizio e l'infrastruttura tecnica che lo fornisce.

- Il COMMANDITA è responsabile di indicare al Prestatore eventuali esigenze specifiche del settore relative ai tipi di informazioni confidate dal COMMANDITA, che devono essere prese in considerazione dal Prestatore.

- Il COMMANDITA accetta di non richiedere al Prestatore di esigenze o azioni che esentino il Prestatore dalle esigenze del riferimento SecNumCloud nella sua versione corrente, da un lato, oppure che abbassino il livello di sicurezza stabilito dal rispetto delle esigenze di questo stesso riferimento, dall'altro.

## COMMISSIONARIO'S RIGHTS

At any point during the contractual relationship, the COMMISSIONARIO can file a claim regarding the qualified service with the ANSSI.

At any time, the COMMISSIONARIO may request from the Provider access to its internal settlement and ethics charter.

## Data Erasure upon Contract Termination

Upon the conclusion of the contract, whether due to expiration or termination for any reason, the Provider commits to securely erase all data pertaining to the **COMMANDITAIRE**, including technical data. The Provider will ensure that the **COMMANDITAIRE** is formally notified of this erasure with a formal notice within a 21-day calendar window. The **COMMANDITAIRE**'s data will then be deleted no later than 30 days following this notification.

To validate this deletion, the Provider will provide the **COMMANDITAIRE** with a certificate confirming the erasure of data.

## Ciclo di vita del presente Contratto di Servizio

Questo documento descrive il ciclo di vita del presente Contratto di Servizio, che comprende le diverse fasi attraverso le quali il contratto si sviluppa e viene mantenuto.

1. **Stadio di Preparazione**
   - Identificazione delle esigenze e definizione dei requisiti del servizio da fornire.
   - Sviluppo del progetto, inclusa la pianificazione, l'analisi e la progettazione del sistema IT necessario.

2. **Fase di Offerta**
   - Presentazione delle offerte da parte dei fornitori di servizi.
   - Valutazione delle offerte in base ai criteri definiti nel contratto.
   - Selezione del fornitore e stipulazione dell'accordo di fornitura.

3. **Fase di Progettazione**
   - Disegno dettagliato dei sistemi IT, inclusi architetture, componenti hardware/software, interfacce utente, etc.
   - Definizione dei requisiti di sicurezza e conformità normativa.

4. **Fase di Implementazione**
   - Costruzione del sistema secondo i dettagli progettati.
   - Integrazione con altri sistemi esistenti.
   - Test approfonditi per garantire la qualità e le prestazioni.

5. **Fase di Rafforzamento**
   - Formazione dell'utente finale sull'utilizzo del nuovo sistema.
   - Monitoraggio continuo delle prestazioni e dei feedback degli utenti.
   - Apporti di miglioramenti basati sulle esperienze in corso d'opera.

6. **Fase di Supporto**
   - Assistenza tecnica continua per la risoluzione di eventuali problemi.
   - Manutenzione preventiva e correttiva dei sistemi IT.
   - Aggiornamenti software e patch di sicurezza.

7. **Fine del Contratto**
   - Valutazione della performance del fornitore.
   - Raccolta feedback dagli utenti finali.
   - Documentazione completa delle prestazioni, dei problemi risolti e degli aggiornamenti apportati.
   - Conclusione del contratto con la valutazione finale e il pagamento.

8. **Fase di Raffreddamento**
   - Passaggio graduale della gestione del sistema all'organizzazione cliente.
   - Supporto tecnico ridotto, eventualmente trasferito a team interni o al fornitore stesso.

Ogni fase è cruciale per garantire che il contratto di servizio soddisfi le esigenze dell'organizzazione cliente e rispetti gli standard tecnologici e normativi richiesti.

## Effettivazione del Contratto di Servizio

Il presente Contratto di Servizio entra in vigore il giorno della sua firma dal COMMANDITAIRE.

La raccolta, la manipolazione, lo stoccaggio e il trattamento dei dati effettuati nel contesto dell'avant-vente, l'implementazione e lo stop del Servizio sono eseguiti in conformità della normativa vigente.

## Evoluzioni della Convenzione di Servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organismi di governo designati a tale scopo. Queste proposte di modifica saranno valutate dalle Parti, autorizzate ad identificare gli aspetti che necessitano una formalizzazione scritta.

È concordato che qualsiasi modifica della Convenzione di servizio, dopo la validazione, che altera le condizioni finanziarie inizialmente stabilite, richiederà l'emissione e la firma di un aggiunta al Contratto corrente.

I fattori che potrebbero portare a una revisione della Convenzione di servizio includono, ma non si limitano a:

- Lo sviluppo dell'infrastruttura tecnica che fornisce il Servizio Bare Metal;
- Gli aggiustamenti apportati ai servizi forniti dal Prestatore per offrire il Servizio;
- Le variazioni degli impegni presi e delle sanzioni applicabili;
- Le ristrutturazioni organizzative all'interno del COMMANDITAIRE o del Prestatore;
- L'espansione o la riduzione del campo d'applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è registrata in prefazione al documento per facilitarne il monitoraggio.

### Evoluzioni avviate dal COMMANDITAIRE

Le changement de la Convention di servizio peut avoir, notamment, pour origine :

- Une évolution de l'infrastructure gérée par le Prestatore;

- Une modification des services mis en œuvre par le Prestatore;

- Uno cambiamento degli impegni relativi ai livelli di servizio da parte del Prestatore.

### Modifiche Avviate dal Fornitore

Tutte le modifiche alla Convenzione di Servizio sono soggette all'accettazione del COMMANDITAIRE. È compreso che qualsiasi modifica o aggiunta validata che modifichi gli elementi finanziari del Contratto, potrebbe comportare la firma di un avvio conforme a quello stesso.

## Reversibilità

Cloud Temple si impegna a garantire la possibilità di revisionare la presente Convenzione di servizio (che comprende, tra l'altro, la rinuncia al contratto) senza penali per il COMMANDITAIRE in caso di perdita della qualifica SecNumCloud.

I Servizi non includono alcuna obbligazione di reversibilità (cioè, l'aiuto del COMMANDITAIRE per permettergli di migrare il proprio sistema su un altro "Prestatore") a parte la fornitura dell'interfaccia COMMANDITAIRE dal Prestatore, che consente al COMMANDITAIRE di salvare e recuperare i propri dati, compresi quelli di configurazione del proprio sistema informativo tramite una o più modalità tecniche scelte dal COMMANDITAIRE: la fornitura di file seguendo uno o più formati documentati ed esplorabili al di fuori del servizio fornito dal Prestatore o attraverso l'implementazione di interfacce tecniche che consentano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il COMMANDITAIRE, unico detentore della propria infrastruttura, deve adottare tutte le misure necessarie per facilitare tale operazione in caso di necessità (ciò implica, tra l'altro, la creazione di una documentazione accurata a questo proposito) e la pianificazione della reversibilità. In caso in cui il COMMANDITAIRE abbia bisogno di un servizio aggiuntivo, il Prestatore può offrire una missione di consulenza su questi argomenti all'interno di un contratto specifico da negoziare.

## Disponibilità, continuità e ripristino del servizio

La disponibilità, la continuità e il ripristino del servizio sono aspetti fondamentali per garantire l'affidabilità dei sistemi cloud. La disponibilità si riferisce alla capacità di un sistema di essere accessibile e operativo in qualsiasi momento, mentre la continuità assicura che il servizio possa essere ripristinato rapidamente in caso di interruzioni. Il ripristino del servizio è una fase critica nel piano di recupero dalle emergenze (BCP), che mira a minimizzare l'impatto delle interruzioni e a garantire la continuità operativa.

### Disponibilità

La disponibilità viene misurata come percentuale di tempo in cui un sistema è funzionante e accessibile. Per i sistemi cloud, ciò può essere ottenuto attraverso architetture distribuite, repliche automatiche e tecniche di failover. Strategie come il clustering, la virtualizzazione e l'utilizzo di infrastrutture in diverse regioni geografiche contribuiscono a migliorare la disponibilità.

### Continuità

La continuità si concentra sulla capacità del sistema di riprendersi rapidamente da eventuali interruzioni, garantendo che le operazioni possano essere proseguite senza ritardi significativi. Questo viene ottenuto attraverso strategie di backup e ripristino automatizzato, così come l'implementazione di sistemi di monitoraggio continuo per individuare rapidamente i problemi.

### Ripristino del servizio

Il ripristino del servizio è un processo critico che include diverse fasi:

1. **Identificazione**: Individuare la causa dell'interruzione e determinare l'impatto.
2. **Isolamento**: Separare il sistema interessato dal resto della rete per evitare ulteriori danni.
3. **Correzione**: Risolvere il problema alla fonte, che può comportare la sostituzione di componenti difettosi o l'aggiornamento del software.
4. **Ricostruzione**: Ripristinare i servizi interrotti attraverso backup e sistemi di ripristino automatizzato.
5. **Test**: Verificare che tutti i servizi funzionino correttamente prima della riapertura al pubblico.
6. **Comunicazione**: Informare gli utenti sull'interruzione e sulle azioni intraprese per la risoluzione dei problemi.

### Best Practices

- **Architettura distribuita**: Utilizzare architetture che permettono il failover automatico tra i server.
- **Repliche e backup**: Mantenere copie di sicurezza regolari e repliche in tempo reale per garantire la continuità.
- **Monitoraggio continuo**: Implementare strumenti di monitoraggio per rilevare rapidamente le anomalie e segnalare potenziali problemi.
- **Piani di recupero dalle emergenze (BCP)**: Sviluppare e mantenere piani dettagliati che delineino i passaggi da seguire in caso di interruzione.
- **Formazione e simulazioni**: Eseguire regolarmente esercitazioni per valutare la capacità del team di ripristinare rapidamente il servizio.

In conclusione, la disponibilità, la continuità e il ripristino del servizio sono componenti essenziali per i sistemi cloud, che richiedono una pianificazione accurata, un monitoraggio continuo e l'implementazione di strategie robuste per garantire che le operazioni possano essere mantenute senza interruzioni.

### Gestione degli Incidenti e delle Interruzioni

Questo capitolo descrive le procedure per la gestione degli incidenti e delle interruzioni che possono verificarsi nei sistemi IT. La nostra strategia si basa su un approccio proattivo, con il focus sulla prevenzione, sul monitoraggio continuo e sulla risposta rapida in caso di problemi.

1. **Prevenzione**
   - Implementazione di sistemi di allerta precoce per identificare potenziali problemi prima che influiscano negativamente i servizi.
   - Regolari manutenzioni e aggiornamenti dei sistemi IT per mantenere la loro salute e prestazioni ottimali.

2. **Monitoraggio Continuo**
   - Sistemi di monitoraggio avanzati che forniscono visibilità in tempo reale sulla performance dei servizi, identificando anomalie potenziali.
   - Utilizzo di strumenti di analisi predittiva per anticipare eventuali problemi prima che si verifichino.

3. **Risposta Rapida**
   - Formazione del team di risposta agli incidenti (SRE) per garantire una gestione efficace delle situazioni critiche.
   - Implementazione di flussi di lavoro standardizzati per la risoluzione dei problemi, minimizzando il tempo di inattività.

4. **Documentazione**
   - Registrazione dettagliata degli incidenti e delle interruzioni, inclusi i passaggi di risoluzione adottati, le cause sottostanti e le azioni correttive implementate.
   - Utilizzo di queste informazioni per migliorare continuamente le procedure di gestione dei servizi e prevenire futuri incidenti simili.

5. **Comunicazione**
   - Canali di comunicazione chiari e tempestivi con stakeholder interni ed esterni, informandoli sulla natura dell'incidente, i suoi impatti e le azioni in corso per la risoluzione.
   - Documentazione dettagliata degli aggiornamenti e delle decisioni prese durante il processo di gestione dell'incidente.

6. **Revisione Post-Incidente**
   - Analisi approfondita degli incidenti per identificare cause radici, valutare l'efficacia delle procedure di risposta e implementare miglioramenti strutturali.
   - Revisione dei flussi di lavoro e delle politiche per garantire che siano allineati con le lezioni apprese dai precedenti incidenti.

Questa gestione proattiva degli incidenti e delle interruptions è fondamentale per mantenere la disponibilità, affidabilità e prestazioni dei nostri servizi IT, garantendo un'esperienza utente costante di alta qualità.

### Incidenti

Cette section pourrait contenir des informations sur divers incidents rencontrés dans le système Cloud computing, les systèmes IT ou l'ingénierie logicielle. Elle pourrait inclure des détails sur les problèmes techniques, les pannes, les erreurs de logiciel, etc., ainsi que les mesures prises pour les résoudre et éviter les répétitions futures.

Exemple de contenu :
```markdown
## Incidenti

### 2023-04-15: Panne du serveur de base de données

**Description:**
Le système a rencontré une panne du serveur de base de données principal, entraînant une interruption temporaire des services critiques. Les clients ont signalé des difficultés pour accéder aux données et effectuer des transactions.

**Mesures prises:**
- Réactivé immédiatement le serveur de secours.
- Analyse du système pour identifier la cause principale (surcharge CPU due à un script mal conçu).
- Mise en place d'un algorithme de surveillance pour détecter les signaux avant-gardistes de surcharge future.
- Formation du personnel sur la gestion des scripts et l'optimisation des performances.

### 2023-05-10: Erreur de sécurité dans le système d'authentification

**Description:**
Une vulnérabilité a été découverte dans le système d'authentification, permettant aux attaquants potentiels d'accéder à des comptes privés.

**Mesures prises:**
- Mise à jour immédiate de tous les systèmes pour corriger la vulnérabilité.
- Audit complet du code source pour identifier et supprimer toutes les failles potentielles.
- Renforcement des politiques d'accès et mise en place de contrôles d'accès plus stricts.
- Formation du personnel sur la sécurité informatique et l'importance des mesures de protection contre les menaces externes.
```

#### Tipi di incidenti gestiti in conformità con questa Convenzione di servizio

- Gatti;

- Interruzioni e guasti;

- Incidenti di sicurezza che influenzano la disponibilità, la riservatezza o l'integrità del Servizio.

#### Gestione degli incidenti

Il fornitore informa il COMMANDITAIRE nei tempi più rapidi possibili degli incidenti e delle interruzioni, tramite una notifica nella console COMMANDITAIRE o tramite email al contatto COMMANDITAIRE. Il fornitore informa anche il COMMANDITAIRE del processo di risoluzione dell'incidente tramite lo stesso canale utilizzato per notificare l'incidento, oppure tramite il canale indicato nella notifica dell'incidento.

#### Nivello di notificazione degli Incidenti di sicurezza

Il COMMANDITAIRE ha la responsabilità di scegliere i livelli di gravità degli Incidenti di sicurezza per cui desidera essere informato, ad esempio attraverso la formalizzazione in un PAS applicabile al Servizio.

Per default, il COMMANDITAIRE viene informato:

- Gli incidenti di sicurezza con impatto (impatti I1 e I2 secondo l'scala di impatto definita nel processo di priorizzazione dei trattamenti previsto dalla presente Convenzione di Servizio);

- Gli incidenti di sicurezza che influenzano la riservatezza o l'integrità dei dati del COMMANDITAIRE confidati nel quadro del Servizio;

- Le violazioni dei dati personali per cui il COMMANDITAIRE è responsabile del trattamento in conformità all'articolo 8 dell'Annuletto DPA nel quadro del Servizio.

-

### Manutenzione del Servizio

### Natura della manutenzione

Violazioni dei dati personali per cui il fornitore è responsabile del trattamento e che contengono i dati personali dell'UTENTE, in conformità con l'articolo 8 dell'Annesso DPA. La manutenzione garantita consiste nella messa in opera:

- Del piano di manutenzione in condizioni di funzionalità del Servizio per assicurare buoni indicatori di disponibilità come previsto dal fornitore sopra;

- Del piano PCA/PRA, se abilitato dall'UTENTE, che viene attivato in caso di incidenti eventuali.

### Accesso remoto di Cloud Temple all'interno del perimetro del COMMANDITAIRE

Il fornitore si impone, nel contesto della presente Convenzione di servizio, di non accedere ai Tenanti e all'ambiente dell'interfaccia del COMMANDITAIRE.

Sarà incaricato dal COMMANDITAIRE di concedere gli accessi necessari al personale del fornitore. Il COMMANDITAIRE riconosce che tali accessi saranno utilizzati nell'ambito dell'hosting e, in ultima analisi, dell'infogestione (se abilitato dal COMMANDITAIRE).

### Accesso remoto di terze parti coinvolte nella fornitura del servizio all'interno del perimetro del COMMANDITAIRE

Non è autorizzato alcun accesso remoto da parte di terze parti coinvolte nella fornitura del Servizio.

In caso di necessità tecnica che renda questo scenario necessario, tale tipo di accesso sarebbe realizzato solo dopo la notifica scritta e l'accordo esplicito del COMMANDITAIRE.

# Procedure of Data Erasure at Contract Termination

At the conclusion of the Contract, whether due to expiration or any other reason, the Provider ensures a secure erasure of all data processed within the scope of the Service, including the technical data of the COMMANDITAIRE. The Provider will provide a formal notice within a 21 calendar day (21) period. The COMMANDITAIRE's data will be deleted no later than 30 days following the notification. The Provider will deliver a data erasure certificate to the COMMANDITAIRE.

## Dirit applicabile

Questo elemento Markdown non contiene elementi HTML o Markdown strutturati che richiederebbero un'attenzione speciale. Pertanto, la traduzione rimane invariata:

**Diritto Applicabile**

## Generalemente

Il dirit applicabile e a cui è soggetta la presente Convenzione di servizio è il diritto francese.

## Respecto della normativa e delle regolamentazioni applicabili

Il fornitore si impegna a:

- Identificare le limitazioni legali ed amministrative applicabili nel contesto del Servizio;

- Adeguarsi alle limitazioni legali ed amministrative applicabili ai dati conferiti al fornitore, entro i limiti delle responsabilità di quest'ultimo e le disposizioni previste dal contratto;

- Rispettare la Legge sulla protezione dei dati informatici e della libertà (L.D.P.I.) e il Regolamento generale sulla protezione dei dati (RGPD);

- Implementare misure di protezione dei dati personali;

- Effettuare un monitoraggio legale e regolamentare continuo;

- Essere in grado di mantenere relazioni adeguate o una vigilanza con le autorità competenti nel settore, in relazione alla natura dei dati trattati nel contesto del Servizio. Ciò include, ma non si limita all'ANSSI (Agenzia Nazionale per la Sicurezza dei Sistemi Informatici), al CERT-FR (Centre National de Sécurité des Systems d'Information) e alla CNIL (Commission Nationale de l'Informatique et des Libertés).

## GDPR

As a processor under the provisions of Article 28 of the General Data Protection Regulation (RGPD), the Provider commits to:

- Ensuring transparency and traceability;

- Designating a DPO responsible for defining and implementing data protection measures concerning personal data;

- Providing assistance and advice to the COMMANDITAIRE, alerting them if an instruction from the latter constitutes a violation of data protection rules that the Provider can identify;

- Ensuring security of processed data (due to SecNumCloud qualification).

## Protezione contro il rischio extra-UE

L'ufficio centrale del fornitore è situato all'interno di uno Stato membro dell'Unione Europea. Il capitale sociale e i diritti di voto nella società del fornitore non sono, direttamente o indirettamente:

- detenuti individualmente a più del 24% ;

- e collettivamente detenuti a più del 39% ;

da entità terze possesso di sede sociale, amministrazione centrale o principale istituzione all'interno di uno Stato non membro dell'Unione Europea.

In caso di ricorso da parte del fornitore, all'interno del servizio, a un servizio fornito da una società terza - incluso un subappaltatore - che possiede la propria sede sociale, amministrazione centrale o principale istituzione all'interno di uno Stato non membro dell'Unione Europea o è controllata o controllata da una società terza domiciliata al di fuori dell'UE, il fornitore si impegna:

- a garantire che tale società terza non abbia accesso alle informazioni operative ;

- ad avere autonomia operativa attraverso la possibilità di richiedere un altro subappaltatore o di implementare rapidamente una alternativa tecnologica.

Per riferimento, le informazioni in questione sono quelle confinate al fornitore dal COMMANDITAIRE, nonché tutte le Donne in Commissione che includono informazioni sui COMMANDITAIRE.

Per i fini di questo articolo, la nozione di controllo è intesa come descritta all'articolo L233-3 II del codice commerciale.

# FIRMA

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\, il \_\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, IL FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\, il \_\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
