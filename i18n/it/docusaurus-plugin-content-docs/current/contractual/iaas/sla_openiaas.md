---
Titolo Convenio di Servizio SecNumCloud OpenIaaS
---

# CONVENT DE SERVIZI OpenIaaS

| Destinatari | **COMMANDITAIRE** |
| :--- | :--- |
| **Riferimento del documento** | CT.AM.JUR.ANX OPENIaaS-202530101_v3.0.docx_Giorno JJ AAAA |
| **Vostri interlocutori** | *Prénom* *Nom* Account Manager email: *prenom.nom*\@cloud-temple.com |
| **Data di ultima modifica** | 17/01/2025 |
| **Data di validazione contrattuale** | Giorno JJ AAAA |

------------------------------------------------------------------------

| Versione | Data | Azione | Autore |
| :--- | :--- | :--- | :--- |
| v0.1 | 07/06/2022 | Redazione iniziale | Lorena ALCALDE |
| v0.2 | 14/09/2022 | Enrichimento | Lorena ALCALDE |
| v1.0 | 30/12/2022 | Integrazione Indici | Lorena ALCALDE |
| v1.1 | 23/01/2023 | Modifica pied de page | Lorena ALCALDE |
| v1.2 | 22/05/2023 | Enrichimento | Lorena ALCALDE |
| v1.3 | 29/06/2023 | Enrichimento | Lorena ALCALDE |
| v1.4 | 06/11/2023 | Modifica Capitale e Enrichimento | Lorena ALCALDE |
| v1.5 | 30/11/2023 | Enrichimento | Lorena ALCALDE |
| v1.6 | 21/03/2024 | Enrichimento | Lorena ALCALDE |
| v2.0 | 29/03/2024 | Adeguamenti conformità SNC | Nicolas ABRIOUX |
| v2.0 | 03/04/2024 | Pubblicazione | Lorena ALCALDE |
| V3.0 | 17/01/2025 | Enrichimento | Emeline CAZAUX |

## Introduzione e Glossario

- **Préliminaire**: Introduction ou présentation générale.
- **Glossario**: Dictionnaire des termes techniques, définitions de concepts clés.

## Introduzione

Il presente documento formalizza la Convenzione di servizio associata al servizio OpenIaaS in fase di qualificazione SecNumCloud.

Il Servizio è in fase di qualificazione SecNumCloud (vedi attestazione che sarà in Annessa).

La presente convenzione di servizio completa e complementa le condizioni generali di vendita ed utilizzo del fornitore. Si intende che i documenti contrattuali siano interpretati in modo coerente tra loro. In caso di contraddizione o divergenza nei termini dei documenti contrattuali, i documenti prevaleranno nell'ordine seguente:

1. Condizioni Generali di Vendita ed Utilizzo (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud OpenIaaS
4. Convenzione di Servizio SecNumCloud PaaS
5. Convenzione di Servizio specifico - Bare Metal
6. Convenzione particolare
7. Piano di Assicurazione Sicurezza (PAS)
8. Condizioni Particolari d'Uso (CPU)
9. Accordo sulla Protezione dei Dati

## Glossary

In the present Service Agreement, the **Commanditaire**, **Prestatore**, and **Parties** are identified in the Contract attached to this Service Agreement.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, which is integrated into the standard change catalog and may have a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Standard Change:** A change subject to a procedure with known production procedures and accepted impacts (including financial ones) by all Parties. It is then incorporated into the standard change catalog, and may have a GTI and GTR under certain circumstances.

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Prestataire for the Commanditaire to benefit from the Service, and this Service Agreement is annexed thereto.

- **Service Agreement:** This document, established within a specific contract or General Terms of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Service Request:** A request for evolution following a procedure where the execution: i) does not modify the CMDB; ii) known operational mode, costs, and risks are accepted upfront and do not require specific rollback procedures; iii) is subject to an agreed level of service (SLA) agreement and included in the contract revenue when performed during business hours.

- **Availability:** Capacity to ensure the Service's availability and optimal performance, in accordance with defined criteria and commitments within the Service Level Agreements (SLAs).

- **Technical Data:** Encompasses all data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence that may have significance for managing the Service.

- **Hypervisor:** Operating system enabling execution of virtual machines on a compute layer.

- **Incident:** An unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:

  - Intentionally malicious;
  - Accidental, affecting the integrity, confidentiality, or traceability of the Service or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin-based availability outages are not considered security incidents (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Prestataire to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions taken to implement a Change once it is approved (the change, in ITIL terms, pertains to change management rather than its execution/implementation).

- **Problem:** Cause of recurring incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services for optimizing latency, performance, and local regulatory compliance.

- **OpenIaaS Service:** An open-source IaaS service currently under SecNumCloud qualification, delivered by the Prestataire to COMMANDITAIRE from infrastructure maintained by the Prestataire, as described in the "Service Description" section of this Service Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without direct intervention on monitored elements, a prerogative reserved for operations management.

- **Tenant:** An isolated instance reserved for a user or group of users, sharing a common infrastructure while maintaining data and application independence and security.

- **Availability Zone (AZ) / Availability Region:** A specific, isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through geographical distribution of resources.

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
| **GTR** | Garantia Tempo Risoluzione |
| **ITIL** | Information Technology Infrastructure Library - Linee guida per la gestione delle Sistemazioni IT |
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
| **RPO** | Recovery Point Objective -- Obiettivo di freschezza dei dati in caso di incidente |
| **RTO** | Recovery Time Objective -- Tempo di ripristino del servizio in caso di incidente |
| **SDM** | Service Delivery Manager |
| **SLA** | Service Level Agreement -- Accordo sui livelli di servizio |
| **SNC** | SecNumCloud |
| **SOC** | Security Operation Center |
| **TMA** | Tierce Maintenance d'Application -- Manutenzione di applicazioni da terze parti |
| **UO** | Unità d'Œuvre |
| **VABE** | Validazione dell'Adeguatezza alla Buona Esecuzione |
| **VABF** | Validazione dell'Adeguatezza al Buon Funzionamento |
| **VM** | Virtual Machine (Macchina virtuale) |
| **VSR** | Validation de Service Régulier -- Controllo regolare del servizio |

# Obiettivo della presente Convenzione di Servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni entro cui il Prestatario si impegna a fornire il Servizio al COMMANDITAIRE. Il suo scopo è:

- Definire le requisiti di prestazione attesi dal COMMANDITAIRE in termini di funzionalità e affidabilità del Servizio;

- Elaborare le obbligazioni del Prestatario per soddisfare agli standard di servizio concordati;

- Identificare le normative specifiche applicabili al Servizio fornito;

- Garantire l'uniformità e l'integrità nell'evaluazione della qualità del Servizio;

- Assicurare l'eccellenza dei servizi forniti, valutata attraverso indicatori di prestazione quantitativi.

In caso in cui il Prestatario dovesse perdere la qualificazione SecNumCloud, il Contratto potrebbe essere risolto immediatamente e senza penali da parte del COMMANDITAIRE. In tale ipotesi, il Prestatario si impegna a informare il COMMANDITAIRE della dequalificazione tramite una notifica ufficiale, mediante lettera raccomandata con avviso di ricevuta.

È importante sottolineare che qualsiasi modifica o aggiustamento della qualificazione SecNumCloud non sarà interpretato come revoca della qualificazione iniziale.

# Audit

Il fornit garantito al COMMANDITAIRE, oltre che ad eventuali auditori terzi e non concorrenti del fornitore stesso che quest'ultimo avrebbe designato, di accedere a tutti i documenti necessari per la certificazione dell'integrale rispetto delle obbligazioni relative alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione di audit.

Con l'accettazione della presente Convenzione di servizio, il COMMANDITAIRE concede esplicitamente il permesso al:

 1. L'Agenzia Nazionale per la Sicurezza dei Sistemi d'Informazione (ANSSI)
    e a entità competente per l'esecuzione della verifica della conformità del Servizio e del suo sistema informatico al riferimento SecNumCloud.
2. Un fornitore di audit della sicurezza dei sistemi informatici, debitamente qualificato PASSI e specificatamente designato dal fornitore stesso, per svolgere audit di sicurezza relativi al Servizio.

## Descrizione del Servizio

Questo è il testo tradotto in italiano per la sezione "Descrizione del Servizio". Si prega di notare che non sono stati modificati gli elementi strutturanti o formatativi come i titoli, le sottotitoli (#), le liste puntate e i blocchi di codice. Tuttavia, il contenuto all'interno dei blocchi di codice (ad esempio, nomi di variabili, funzioni, commenti) è stato lasciato invariato.

```markdown
## Descrizione del Servizio

Il nostro servizio offre soluzioni avanzate nel campo del cloud computing, permettendo alle aziende di scalare le loro infrastrutture IT in modo efficiente e flessibile. Sfruttando la potenza dei sistemi distribuiti e l'economia delle scale, i nostri clienti possono concentrarsi sulla creazione di valore per i propri utenti senza preoccuparsi della gestione dei dati o dell'infrastruttura.
```

## Shared Responsibility Model

The service offered by the Provider is characterized by the provision of the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);

- Availability of storage spaces;

- Access to network connectivity and internet services;

- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the context of the Service is detailed in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detailed Scope Description of the Service

| Service | Description |
| :--- | :--- |
| **Compute** | Computing resource for the COMMANDITAIRE tenant |
| **Storage** | Production data storage for the COMMANDITAIRE tenant |
| **Object Storage S3** | Provision of a sovereign multi-AZ object storage infrastructure compatible with standard S3 APIs. |
| **Backup** | Subscription module to Object Storage S3 |
| **Network Infrastructure** | Network resource for the COMMANDITAIRE tenant |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its OpenIaaS services via the Shiva interface |
| **Support** | Support service covering the above mentioned services only (\*) |

\_(\*) Within the scope of the current qualification service, SNC and Prestataire's responsibilities in this area only\_

### Datacenter Infrastructures

The Service encompasses the provision, for each Availability Zone, of the following qualified services:

- Data center located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or superior to Tier 3 according to Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to accommodate essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer standards and recommendations, ensuring optimal conditions for technical devices;
- Continuous monitoring and metrology detail, enabling precise tracking and proactive management of the service's performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, designed to identify and effectively neutralize any fire incidents within installations. These systems include high-precision smoke detectors and rapid-acting extinguishing devices that do not damage IT equipment. This service is critical for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures and measures, including annual failover tests on generators, are vital for maintaining the continuity and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response in case of an incident. By accepting these conditions, the COMMANDITAIRE acknowledges the importance of these safety measures and commits to cooperating fully for their implementation. The COMMANDITAIRE is also encouraged to review and integrate security recommendations into its own risk management strategy.

### Interfaccia Software di Gestione del Servizio

Il fornitore fornisce al COMMANDITAIRE la console di amministrazione e l'API necessaria per l'utilizzo del Servizio. Si precisa, mantiene anche la console di amministrazione e l'API in condizioni operative ottimali e garantisce la sicurezza continua. Questa console di amministrazione e l'API sono racchiuse sotto il termine "interfaccia COMMANDITAIRE".

Il fornitore avvisa il COMMANDITAIRE che un utilizzo anomalo dell'interfaccia COMMANDITAIRE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che portano al blocco dell'accesso alle API di comando o al Servizio stesso. È importante sottolineare che tale situazione non implica un indisponibilità del Servizio, ma piuttosto una misura di protezione del Servizio e dell'infrastruttura del fornitore; pertanto, il COMMANDITAIRE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il fornitore specifica al COMMANDITAIRE che le richieste perfettamente identiche (doppie) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMANDITAIRE invia richieste identiche a una frequenza superiore, il loro respingo non può essere interpretato come un'indisponibilità del Servizio.

### Infrastrutture di Calcolo

Il Servizio include la fornitura, nelle zone di disponibilità
sottoscritte dal COMMANDITAURE, degli equipaggiamenti necessari per
eseguire le carichi di lavoro sotto forma di macchine virtuali.

Ciò comprende:

- La fornitura dei casi tecnici necessari al corretto funzionamento delle
macchine di calcolo;
- La fornitura delle macchine di calcolo nelle quantità specificate dal
COMMANDITAURE e distribuite secondo le zone di disponibilità del suo
scelta. È da notare che queste macchine di calcolo sono esclusivamente
dedicate al COMMANDITAURE;
- La disponibilità di sistemi operativi di tipo hypervisor, nonché la
garantia della manutenzione in condizioni operative e della sicurezza
dell'infrastruttura software necessaria per il controllo di questi
sistemi operativi. È importante sottolineare che, sebbene il
Fornitore sia responsabile della manutenzione operativa e della
securizzazione generale del Servizio, non possiede conoscenze specifiche
degli ambienti di produzione del COMMANDITAURE né delle esigenze relative
alle sue carichi di lavoro. Pertanto, la responsabilità di decidere le
aggiornamenti dei sistemi operativi delle macchine di calcolo hypervisor,
una azione che potrebbe richiedere un riavvio, ricade completamente sul
COMMANDITAURE. Questa operazione può essere eseguita tramite l'Interfaccia
COMMANDITAURE.

Il selection del modello di macchina di calcolo, scelto tra il catalogo
proposto dal Fornitore, è di competenza del COMMANDITAURE.

### Infrastruttura di archiviazione

Il servizio include la fornitura al COMMANDITAARE un'infrastruttura di archiviazione condivisa del tipo SAN (Storage Area Network), che offre diversi livelli di prestazioni. Questo servizio comprende:

- La realizzazione e il mantenimento in condizioni operative e di sicurezza del rete SAN dedicato;
- L'installazione e la gestione delle celle di archiviazione condivise tra i clienti, incluso il loro mantenimento in condizioni operative e di sicurezza, la supervisione e la metrologia;
- La configurazione dei sistemi automatizzati per l'allocazione dei LUN (Logical Unit Numbers) di archiviazione dedicati all'utilizzo del COMMANDITAARE, in linea con i volumi abbonati dal COMMANDITAARE.

### Infrastruttura di rete globale

Il fornitore, all'interno del servizio, implementa una rete globale che consente al COMMANDITAIRE di rendere accessibili i propri sistemi ospitati. Questo servizio comprende:

- La fornitura, il mantenimento in condizioni operative e di sicurezza di tutti i collegamenti in fibra ottica che connettono le diverse Zones di disponibilità;

- La fornitura, il mantenimento in condizioni operative e di sicurezza degli equipaggiamenti tecnici necessari per il corretto funzionamento del network e l'isolamento dei diversi clienti.

L'interconnession del network del Tenant COMMANDITAIRE con Internet o con reti private, così come gli strumenti di rete, i collegamenti operatori e altri componenti tecnici che realizzano questa interconnessione, non fanno parte del piano del servizio. Questa interconnessione di rete viene implementata in conformità con le disposizioni previste nel contratto.

### Infrastructure di Sicurezza dei Dati

Il fornitore offre al COMMANDITAIRE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue macchine virtuali. Il fornitore si occupa del mantenimento in condizioni operative e sicure di questo servizio di backup. Il fornitore garantisce che i backup del COMMANDITAIRE saranno situati al di fuori della Zona di disponibilità delle cariche di lavoro salvate, a condizione che il COMMANDITAIRE abbia sottoscritto le unità di produzione adeguate.

Questa fornitura di backup si limita alla conservazione dei server virtuali e delle configurazioni topologiche dell'ambiente OpenIaaS dei Tenanti del COMMANDITAIRE all'interno del servizio. La creazione e l'applicazione di una politica di backup adeguata da parte del COMMANDITAIRE dipende dalla sottoscrizione di unità di produzione specifiche. È quindi incaricato il COMMANDITAIRE di verificare la disponibilità delle risorse tecniche necessarie presso il fornitore per implementare la politica di backup o adattarla in base alle possibilità disponibili.

Il fornitore si impegna a avvisare il COMMANDITAIRE in caso di limitazioni della capacità e a fornire assistenza consultiva per l'ottimizzazione delle risorse. Le obbligazioni del fornitore si limitano all'implementazione dei bisogni espressi dal COMMANDITAIRE in termini di politica di backup, all'interno dei limiti sottoscritti.

### Implementazione di soluzioni di ripristino o continuità aziendale

Il fornitore fornisce al COMMANDITAIRE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle risorse attraverso diverse Zone di disponibilità. È responsabilità del COMMANDITAIRE gestire efficacement la distribuzione delle risorse, per la quale ha la possibilità di utilizzare gli strumenti forniti dal fornitore a tal scopo.

### Limitazioni dei servizi nel modello di Cloud Computing OpenIaaS in fase di validazione

Questo paragrafo descrive le limitazioni trovate nei servizi del modello di Cloud Computing OpenIaaS durante la fase di validazione. Le informazioni includono potenziali problemi di prestazioni, restrizioni di scalabilità, limitazioni funzionali e eventuali sfide di integrazione con altri sistemi o piattaforme.

- **Limitazioni di prestazioni**: Alcuni servizi hanno mostrato un'efficienza inferiore rispetto agli standard previsti, influenzando la velocità e l'affidabilità delle operazioni.
- **Scalabilità limitata**: I sistemi non sono stati in grado di gestire adeguatamente le fluttuazioni di domanda, con alcune funzionalità che si bloccano o riducono significativamente la capacità quando il carico varia.
- **Funzionalità limitate**: Alcuni servizi offrono un insieme di funzionalità inferiore rispetto a quelli disponibili su piattaforme concorrenti, potenzialmente ostacolando la flessibilità e l'adattabilità per i clienti.
- **Integrazione con altri sistemi**: Le interfacce di integrazione tra servizi OpenIaaS e altre soluzioni di terze parti non sono sempre fluide, causando difficoltà nella gestione dei dati e delle applicazioni complesse.

Questi punti rappresentano solo una sezione del rapporto di validazione, che include ulteriori dettagli tecnici e analisi per ciascun servizio.

### Servizi gestiti in RUN

È importante sottolineare che sono esclusi dal servizio:

- La gestione dell'infrastruttura fisica dei COMPONENTI COMMANDITAIRE;

- La connettività di rete del Tenant COMMANDITAIRE, verso Internet o verso reti private, inclusi i collegamenti operatori;

- Tutti i servizi di tipo gestito (TMA);

- Qualsiasi assistenza sulle macchine virtuali a livello OS e sopra nella pila responsabilità IaaS, anche se si tratta solo di supervisione.

Detto ciò, non è assolutamente escluso che COMMANDITAIRE possa ricorrere a tali servizi presso l'offerta MSP del Fornitore per intervenire in modalità di servizio gestito sui suoi Tenanti. In questi casi, questi servizi non saranno regolati dalla presente Convenzione di servizio e dalle clausole reciproche.

### Configurazione del Soccorso

Di default, il fornitore prende in carico la configurazione delle risorse IaaS e la assegna al COMMANDITAIRE, reservando risorse e configurando i deployment per utilizzare le Zones di disponibilità. È responsabilità del COMMANDITAIRE scegliere le Zones di disponibilità tramite l'interfaccia COMMANDITAIRE.

### Configuration della backup

La fornitura di backup si concluderà con il backup delle macchine virtuali e delle configurazioni topologiche che rappresentano l'ambiente OpenIaaS dei Tenenti COMMANDITAIRE all'interno del servizio.

La fornitura di backup e la realizzazione della politica di backup del COMMANDITAIRE sono soggette alla sottoscrizione di spazio di archiviazione sul mass storage necessario per garantire il servizio. Pertanto, è responsabilità del COMMANDITAIRE di sottoscrivere con il fornitore i mezzi tecnici necessari per implementare la politica di backup entro il proprio ambiente informatico, o di adattare la politica di backup ai mezzi messi in atto. Il fornitore si impegna a informare il COMMANDITAIRE in caso di limitazione tecnica.

Il fornitore metterà in atto i mezzi tecnici e umani necessari per eseguire il backup del sistema all'interno dei limiti delle risorse sottoscritte dal COMMANDITAIRE.

Inoltre, nei casi non gestiti dal fornitore, è compito del COMMANDITAIRE definire la propria strategia di backup e configurare manualmente i backup delle VM o richiedere un servizio tramite il fornitore per impostare i backup dei server fisici se il COMMANDITAIRE ha un contratto di servizio gestito che consenta al fornitore di agire tramite l'interfaccia COMMANDITAIRE, che è la console di amministrazione messa a disposizione nel quadro del presente accordo di servizio e che dispone delle funzionalità per configurare i backup.

Inoltre, questo servizio si impegnerà solo a tradurre tramite l'interfaccia COMMANDITAIRE la configurazione specificata chiaramente dal COMMANDITAIRE.

Per ragioni di flessibilità offerta dal fornitore, il COMMANDITAIRE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In tale caso, è compito del COMMANDITAIRE assumersi questo scelta. Il fornitore non eseguirà backup sulle VM associate alla politica "no backup". Il fornitore avvisa il COMMANDITAIRE che scegliere la politica "no backup" o effettuare un backup manuale espone il COMMANDITAIRE a una perdita di dati definitiva in caso di incidente sulle basi inferiori o su quelle dipendenti dalla responsabilità del COMMANDITAIRE nel modello IaaS. In tali casi, sarebbe impossibile far ricostruire i dati e incolpare il fornitore perché non ci sarà nulla da ripristinare. Il fornitore consiglia sempre di eseguire backup delle VM.

Per qualsiasi questione relativa al sistema operativo installato su una macchina virtuale e qualsiasi software o programma eseguito "su" il sistema operativo, è responsabilità del COMMANDITAIRE eseguire le operazioni di amministrazione e supervisione all'interno dell'Unione Europea se desidera garantire che tutte le verticali delle strati del Sistema Informatico siano eseguite ed amministrate dall'Unione Europea. Le operazioni di amministrazione al di fuori del ambito di responsabilità del fornitore nel quadro del presente accordo di servizio, indicato nella sezione "Responsabilità condivise" dell'accordo di servizio.

## Implementazione del servizio

### Prerequisiti tecnici

Per la realizzazione del Servizio, il COMMANDITAIRE riconosce di dover:

- Funzionare con una virtualizzazione del tipo Xen nelle versioni
    supportate dall'editore e fornite dal Fornitore all'interno del Servizio;

- Ricorrere tramite il Fornitore all'utilizzo di un strumento di backup;

- Dichiarare IP fissi da cui il Fornitore gli consentirà di accedere all'interfaccia COMMANDITAIRE (Filtraggio tramite lista bianca). Le modifiche della lista di IP saranno effettuate tramite il menu previsto a questo scopo nella console o tramite Richieste di servizio per le modifica successive. All'inizializzazione del servizio, il Fornitore sarà stato informato almeno di una indirizzo IP come descritto.

## Localizzazione del servizio in Francia

Siene specificato che nessuna delle operazioni e nessun componente fisico coinvolti nella fornitura del Servizio, per il quale la presente Convenzione di servizio fa riferimento, si trova al di fuori dell'Unione Europea.

Ciò comprende, tra le altre cose, il supporto, la supervisione operativa e la supervision della sicurezza (SOC) dell'infrastruttura tecnica che fornisce il Servizio. Di conseguenza, tutto lo stoccaggio, le attività di amministrazione, la supervisione e i trattamenti vengono eseguiti in Francia.

### Localizzazione dei Data Center ospitando il Servizio

In assenza delle attività dei collaboratori e delle agenzie del Prestatore, tutte le operazioni di produzione (compreso lo stoccaggio e il trattamento dei dati) e i componenti tecnici che forniscono il Servizio sono situati nei Data Center basati in Francia.

### Localizzazione delle agende Cloud Temple che offrono il servizio

I dipendenti di Cloud Temple che operano nel perimetro del servizio lavorano da diverse agende di Cloud Temple, tutte situate esclusivamente in Francia. Queste agende si trovano a Tours, Lione, Caen e Parigi La Défense.

Il Comanditario è informato della possibilità per i dipendenti di Cloud Templare lavorare da remoto. Tuttavia, il fornitore garantisce lo stesso livello di sicurezza per gli accessi a distanza, in particolare per quanto riguarda gli accessi VPN. Questi accessi remote sono implementati in conformità con le esigenze del riferimento SecNumCloud.

## Support

### Characteristics of the accompanying support service

The Provider offers a technical support service aimed at assisting
the COMMANDITAIRE in managing, troubleshooting, and optimizing their deployed resources. This service encompasses a wide range of activities, from initial configuration of services to advanced technical support for resolving specific issues.

Here is a description of the features and functionalities of the technical support service:

- Assistance with the initial setup of using the Service;
- Incident resolution assistance;
- Problem resolution assistance;
- Monitoring and guidance on technical optimization.

In the context of the technical support service, the Provider does not replace the COMMANDITAIRE in using the Service. The COMMANDITAIRE remains fully responsible for configuring, operating its Virtual Machines (VM) and Tenants, as well as managing all elements (including data and applications) stored or installed on the Provider's infrastructure. The technical support is provided in accordance with the General Terms of Sale and Use, with the Provider obligated to provide means of service.

The COMMANDITAIRE commits to using the technical support service reasonably, refraining from requesting services not subscribed to via the Provider and avoiding involving Provider's teams for their own clients or third parties not covered by the Contract. The Provider reserves the right to reject any service request that does not meet these criteria.

The level of support engagement is contingent upon the subscription of the associated support units.

### Richiesta di supporto tecnico

Il supporto tecnico è accessibile tramite un sistema ticket tramite il terminale COMMANDITAIRE e disponibile durante le normale orario di lavoro, esclusi i giorni festivi (8:00 - 18:00; Lunedì - Venerdì, secondo il calendario e gli orari francesi). Per le emergenze che si verificano fuori dalle ore di ufficio, in particolare quegli incidenti che influenzano significativamente la produzione, il servizio di pronto intervento può essere contattato tramite un numero comunicato al COMMANDITAIRE all'avvio del Servizio.

Per ogni richiesta o incidente, è obbligatorio generare un ticket presso il supporto del fornitore. L'inizializzazione di questo ticket, comprendente tutte le informazioni necessarie, è fondamentale e segna l'inizio dell'esame dei vincoli del fornitore.

Non appena il fornitore riceve una richiesta o una notifica di incidente, sia tramite la console di gestione che a seguito di un chiamata telefonica, viene automaticamente creato un ticket. Al momento della dichiarazione di un incidente, è fondamentale che il COMMANDITAIRE fornisca al fornitore il massimo dettaglio sul problema incontrato. Questa procedura è cruciale per permettere una valutazione adeguata della situazione, la sua priorizzazione e un diagnostic efficace.

Il COMMANDITAIRE riceve quindi una conferma via email, che indica la creazione del ticket e il suo numero unico. Il COMMANDITAIRE può consultare lo stato e l'elenco storico delle sue richieste e dichiarazioni di incidente direttamente dalla console di gestione.

### Processo di Gestione degli Incidenti

Alla segnalazione di un Incidente, l'equipe di support tecnico del
Fornitore attiva un'indagine per identificare la causa del problema e
stabilire una diagnosi. Il COMMANDITAIRE deve collaborare attivamente
con il Fornitore fornendo tutte le informazioni necessarie e eseguendo
i test richiesti. Il Fornitore può accedere al Servizio del COMMANDITAIRE
per diagnosticare l'Incidente.

Se i servizi del Fornitore sono considerati funzionali e l'Incidente non
lo è imputabile a lui, il COMMANDITAIRE ne sarà informato. Su richiesta
del COMMANDITAIRE, il Fornitore può proporre Servizi Professionali per
identificare la causa del problema, fatturabila su accordo anticipato in
tranche di 30 minuti.

In caso in cui l'Incidente sia imputabile al Fornitore o a uno dei suoi
sottofornatori, quest'ultimo completa il diagnostiche e si occupa della
ripristinazione del Servizio senza ulteriori costi. Il diagnostiche si basa
sui scambi tra le Parti e i dati del Fornitore, elementi considerati
validi dagli accordi delle Parti.

### Processo di priorizzazione dei trattamenti

La determinazione del livello di priorità per un dossier si basa su un'analisi matriciale che valuta l'impatto dell'Incident e il suo grado di criticità:

- I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione |
| :--- | :--- |
| **Impatto I1** | I servizi del fornitore vengono interrotti |
| **Impatto I2** | I servizi del fornitore vengono degradati |
| **Impatto I3** | I servizi del fornitore sono attualmente stabili ma mostrano segnali di potenziale declino a lungo termine |

- I livelli di criticità sono definiti come segue:

| Livello di criticità | Descrizione |
| :--- | :--- |
| **Criticità C1** | I servizi del fornitore si degradano a un ritmo preoccupante |
| **Criticità C2** | I servizi del fornitore si deteriorano gradualmente nel tempo |
| **Criticità C3** | I servizi del fornitore presentano uno o più inconvenienti senza conseguenze significative |

- Sulla base di un'analisi approfondita della situazione, tenendo conto degli elementi che determinano l'impatto e la criticità, viene attribuita una priorità al ticket in conformità con la matrice decisionale seguente:

| Livello di impatto / Livello di criticità | Impatto I1 | Impatto I2 | Impatto I3 |
| :--- | :--- | :--- | :--- |
| **Criticità C1** | Priorità P1 | Priorità P2 | Priorità P3 |
| **Criticità C2** | Priorità P2 | Priorità P3 | Priorità P4 |
| **Criticità C3** | Priorità P3 | Priorità P4 | Priorità P5 |

Gli impegni di livello di servizio corrispondenti a ciascun livello di priorità sono dettagliati nel capitolo successivo.

### Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMANDITAIRE a minimo in lingua francese. Il supporto può essere anche fornito in inglese.

Le compiti del servizio di supporto del Fornitore per la soluzione di infrastruttura qualificata SecNumCloud sono situati all'interno dell'Unione Europea.

# Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, guaranteeing optimal functioning.

The unavailability of a service, indicated by a performance indicator, is recognized as soon as it's identified by the Provider's supervision system or through a notification from the COMMANDITAIRE user. The onset of unavailability is set at the earliest moment between these two events to ensure precise and fair billing for downtime duration.

The termination of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's supervision tools or through a return from the user, ensuring effective resumption of operations and accurate measurement of interruption duration.

## Availability Commitments of the Infrastructure

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period. These Service Level Agreements (SLAs) are subject to the CONDITION that the COMMANDITAIRE implements its systems across at least two of the available zones within the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will be unable to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The measurements are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.

***Remarks***:

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic directed at the targeted IP from its upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIRES and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the command-line interface API.

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## Garantito di Disponibilità dell'Interfaccia COMMANDITAIRE

- SLA 6: IC-INFRA_SNC-06 - Accesso all'interfaccia amministrativa del Servizio: una disponibilità garantita del 97%, fornita in continuo, 24 ore su 24 e 7 giorni su 7.
- SLA 7: IC-INFRA_SNC-07 - Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su una base 24 ore su 24, 7 giorni su 7.

## Service Level Agreement (SLA) - Availability Commitment

### SLA 8: IC-INFRA_SNC-08

Here are the performance commitments of the technical support provided by the Vendor for incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Intervention (GTI) | Target Performance |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

### SLA 9: IC-INFRA_SNC-09

Here are the performance commitments of the technical support provided by the Vendor for service requests:

| Type | Guaranteed Time to Intervention (GTI) | Target Performance |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note:*

- The GTI delay is calculated from the moment the COMMANDITAIRE opens the ticket until the first support intervention by the Vendor.
- Investigation of incidents concerning COMMANDITAIRE commands will not include remote server assistance on the COMMANDITAIRE's hosted servers. This support will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered incidents or performance issues. Based on these analysis results, recommendations can be suggested.*

## SLA di disponibilità dello storage object S3

- **SLA 10 : IC-INFRA_SNC-10** - Ecco i vincoli di disponibilità per lo stoccaggio degli oggetti S3:

| Indicatore | Vincolo | Obiettivo di disponibilità |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durabilità dello stoccaggio di un oggetto in una regione | 99.9999999% / anno |
| **IC-INFRA-SNC-10.2** | Disponibilità dell'API Storage Object S3 | 99.99% |
| **IC-INFRA-SNC-10.3** | Latenza massima di accesso a un oggetto in una regione | 150 ms |

Nota:

- Il servizio di stoccaggio degli oggetti è specificamente progettato per lo stoccaggio degli oggetti e deve essere utilizzato esclusivamente per questo scopo, **esclusivamente**. L'utilizzo in modalità blocco tramite metodi non autorizzati, inclusi l'uso di "FUSE" su un ambiente Linux, costituisce una violazione delle condizioni d'uso menzionate. Qualsiasi incidente, guasto o danni derivanti da un uso non conforme non sarà coperto dai livelli di servizio (SLA) definiti in questa convenzione di servizi.
- La garanzia di durabilità è condizionata all'uso dei servizi conformi alle migliori pratiche e agli standard attuali, e esclude esplicitamente qualsiasi modifica dei dati, intenzionale o accidentale, derivante da azioni intraprese dal COMMANDITAIRE.

## Precision concerning backup engagement

The backup strategy deployed for COMMANDITAIRE is contingent upon subscribing to appropriate work units.

The Provider commits to providing a backup solution that will enable COMMANDITAIRE to implement its desired backup policies.

It's specified that the Provider's scope ends with the provision of a backup service, while COMMANDITAIRE is responsible for overseeing the correct execution of associated policies via the COMMANDITAIRE interface.

It's noted that the management of storage capacity within the dedicated backup storage space remains COMMANDITAIRE's responsibility and liability. The Provider offers usage rate information through the console.

*Example: Non-backup of a virtual machine:*

In case COMMANDITAIRE identifies a non-backed up virtual machine, it is its duty to investigate the reason. COMMANDITAIRE can then contact the Provider's Support according to the subscribed support level for assistance.

**SLA 8 (IC-INFRA_SNC-08) and SLA 9** will be exclusively applicable in the event of a backup service incident.

## Organizzazione della relazione contrattuale

## Responsabilità del Fornitore

Il fornitore si impegna:

- a informare il **Comanditario** di qualsiasi limite tecnico (ad esempio, in caso di limitazioni della capacità delle risorse tecniche che fornisce il Servizio).

- a informare formalmente il **Comanditario** entro un mese, di ogni cambiamento giuridico, organizzativo o tecnico che potrebbe influire sulla conformità del Servizio alle normative extracomunitarie (art. 19.6 del riferimento SNC v3.2).

- a fornire al **Comanditario** interfacce e servizi di supporto in lingua francese al minimo.

- a considerare le esigenze specifiche del settore relativi ai tipi di informazioni confidate dal **Comanditario** nel quadro della messa in opera del Servizio, entro i limiti delle responsabilità del fornitore e delle disposizioni contrattuali.

- a studiare le esigenze specifiche del settore relativi ai tipi di informazioni confidate dal **Comanditario** nel quadro della messa in opera del Servizio, ulteriormente espresse dal **Comanditario**, e ad indicare al dittatore le azioni necessarie per la loro integrazione.

- a non divulgare nessuna informazione relativa alla fornitura a terzi, salvo autorizzazione scritta ed esplicita del **Comanditario**.

- a mettere a disposizione tutte le informazioni necessarie per la realizzazione di audit di conformità secondo le disposizioni dell'articolo 28 del RGPD.

- a informare il **Comanditario** tramite questa Convenzione di servizio di qualsiasi incidente di sicurezza che influisce sul Servizio o sull'utilizzo effettuato dal **Comanditario** del Servizio (inclusi i dati del **Comanditario**) attraverso la console **Comanditario** o tramite email al contatto **Comanditario**.

- a autorizzare un fornitore di audit della sicurezza dei sistemi informativi (PASSI) qualificato, mandato dal fornitore stesso, ad auditare il Servizio e il sistema informatico del fornitore, conformamente al piano di controllo del SecNumCloud. Inoltre, il fornitore si impegna a fornire tutte le informazioni necessarie per la conduzione degli audit di conformità alle disposizioni dell'articolo 28 del RGPD, effettuati dal **Comanditario** stesso o da un terzo mandato.

- a fornire, in qualità di subappaltatore, come previsto dall'articolo 28 del Regolamento generale sulla protezione dei dati (RGPD), assistenza e consulenza al **Comanditario**, avvisandolo immediatamente quando un'istruzione emana dal **Comanditario** che potrebbe costituire una violazione delle norme di protezione dei dati.

- a informare il **Comanditario** in modo ragionevole, tramite la console **Comanditario** o tramite email al contatto **Comanditario**, quando un progetto influisce o è suscettibile di influenzare il livello di sicurezza o l'accessibilità del Servizio, o genera una perdita di funzionalità, potenziali impatti, misure di mitigazione adottate e rischi residui che lo riguardano.

- a documentare e mettere in atto tutte le procedure necessarie per rispettare le esigenze legali, regolamentari e contrattuali applicabili al Servizio, nonché i bisogni di sicurezza specifici del **Comanditario**, definiti dallo stesso e previsti nel Contratto.

- a non utilizzare le informazioni del **Comanditario** provenient dalla produzione per testi, ad eccezione di ottenere autorizzazione esplicita del **Comanditario**, al quale il fornitore si impegna a anonimizzare queste informazioni e a garantirne la confidenzialità durante l'anonimizzazione.

- a rimuovere le informazioni e i dati tecnici relativi al **Comanditario**, in conformità con la "procedure di cancellazione dei dati alla fine del contratto" descritta nella presente Convenzione di servizio, quando il contratto termina o viene risolto.

- a garantire una cancellazione sicura di tutte le informazioni del **Comanditario**, attraverso la ripetizione completa di tutti i supporti che hanno ospitato i suoi dati nel quadro del Servizio.

Su richiesta formale e scritta del **Comanditario**, il fornitore si impegna:

1. A rendere accessibile al **Comanditario** il regolamento interno e la charta etica del fornitore;

2. A rendere accessibile al **Comanditario** le sanzioni in caso di violazione della politica di sicurezza;

3. A fornire al **Comanditario** tutti gli eventi relativi, inclusi nelle registrazioni del Servizio; il **Comanditario** potrà consultare autonomamente queste informazioni relative all'utilizzo del Servizio tramite le interfacce web e API del Servizio.

4. A rendere accessibile al **Comanditario** le procedure per rispettare le esigenze legali, regolamentari e contrattuali applicabili al Servizio, nonché i bisogni di sicurezza specifici del **Comanditario**, previsti nel Contratto.

5. A fornire, gli elementi di valutazione dei rischi relativi alla presentazione delle informazioni del **Comanditario** al diritto di uno Stato non membro dell'UE;

6. A informare il **Comanditario** degli eventuali subappaltatori successivi coinvolti nella fornitura del Servizio, e a informarlo di qualsiasi cambiamento che ne influisce relativamente.

> Il fornitore e l'intero gruppo di filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, come la dignità umana, la libertà, la democrazia, l'uguaglianza, lo Stato di diritto e il rispetto dei Diritti Umani. Il servizio fornito dal fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e alle valori dell'Unione Europea relativamente al rispetto della dignità umana, della libertà, dell'uguaglianza, della democrazia e dello Stato di diritto.

## Limitazioni delle responsabilità del fornitore

Considerando le definizioni e le termini della presente Convenzione di servizio, le responsabilità del fornitore sono limitate così:

1. Il modello di responsabilità condivisa, descritto nella sezione "Modelli di responsabilità condivise" della presente Convenzione di servizio, limita effettivamente l'impegno del fornitore nelle strati di funzionalità situati "al di sopra" della fornitura di risorse di calcolo, rete, archiviazione e backup. Ciò esclude in particolare e senza limitazione:

    - La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicazioni, ecc.);
    - La manutenzione aggiornata degli OS e di altri software installati dal COMMANDITAIRE sulle sue macchine nei Tenants;
    - La sicurezza dei programmi, software e applicazioni installati sulle macchine virtuali;
    - La manutenzione delle macchine virtuali;
    - La salvaguardia dei dati a livello applicativo.

2. Il fornitore non può assumere impegni di backup per i Tenants del COMMANDITAIRE senza che il COMMANDITAIRE abbia precedentemente sottoscritto le unità d'opera adeguate.

3. Il fornitore non può prendere in considerazione la proprietà dei dati trasmessi e generati dal COMMANDITAIRE. A vista d'occhio, questi rientrano nella proprietà del COMMANDITAIRE.

4. Il fornitore sottolinea che non può utilizzare né disposizioni né prendere in carico i dati trasmessi e generati dal COMMANDITAIRE senza la validazione precedente di quest'ultimo, considerando che le loro disponibilità sono riservate al COMMANDITAIRE.

5. Il fornitore si dichiara responsabile per i componenti fisicamente ospitati e gestiti dal fornitore, ma costituiscono la proprietà diretta del COMMANDITAIRE o di un terzo con cui il COMMANDITAIRE ha stipulato un accordo contrattuale. L'ospitalizzazione dei componenti fisici dei clienti non fa parte del servizio e è pertanto esclusa dal quadro della presente Convenzione di servizio. È incaricato del COMMANDITAIRE di valutare il livello di adesione o dipendenza che introducono questi componenti rispetto al servizio OpenIaaS in fase di qualificazione SecNumCloud.

## Limitazione di accesso

Nel contesto del Servizio, il fornitore è esplicitamente vietato di accedere ai Tenanti appartenenti al COMMANDITAIRE senza autorizzazione precedente. È la responsabilità del COMMANDITAIRE di fornire gli accessi necessari al personale del fornitore, in base alle esigenze specifiche dell'hosting e, nel caso in cui il COMMANDITAIRE abbia scelto questa opzione, ai servizi professionali di supporto.

Il COMMANDITAIRE riconosce che questi accessi sono concessi esclusivamente per scopi legati alla fornitura dei servizi convenuti, garantendo così una gestione sicura e conformi agli accordi stipulati.

L'accesso remoto da parte di terzi coinvolti nella fornitura del servizio del fornitore è strictamente vietato. In caso in cui una esigenza tecnica specifica richiederebbe un tale accesso, questo potrebbe essere istituito solo dopo aver chiaramente notificato il COMMANDITAIRE, fornire una giustificazione dettagliata e ottenere il consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMANDITAIRE, assicurando che qualsiasi eccezione alla regola sia adeguatamente autorizzata e documentata.

## Responsabilità dei terzi coinvolti nella fornitura del servizio

Il Fornitore ha il controllo della lista dei terzi partner che partecipano alla fornitura del Servizio. Questi terzi sono gli editor, fornitori (del Fornitore) e altri fornitori coinvolti nella fornitura del Servizio. Il Fornitore applica le seguenti misure ai terzi:

- Il Fornitore richiede ai terzi che partecipano alla realizzazione del servizio, nel loro contributo al Servizio, un livello di sicurezza almeno uguale a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple ;

- Il Fornitore stipula con ciascun terzo coinvolto nella realizzazione del servizio, clausole di audit consentendo a un organo di certificazione di verificare che questi terzi rispettino le normative e le esigenze SNC, permettendo al Fornitore di adempiere i propri impegni in conformità con la presente Convenzione di servizio.

- Il Fornitore implementa una procedura che consenta un controllo regolare delle misure adottate dai terzi coinvolti nella realizzazione del servizio per rispettare le esigenze del Fornitore di adempiere i propri impegni in conformità con la presente Convenzione di servizio.

- Il Fornitore garantisce il monitoraggio dei cambiamenti apportati dai terzi coinvolti nella realizzazione del servizio che potrebbero influenzare il livello di sicurezza dell'informazione sistema del Servizio.

## Responsabilità e obblighi del COMMANDITAIRE

Il COMMANDITAIRE è soggetto alle seguenti responsabilità nel contesto del servizio:

- Per riferimento, il Prestatore fornisce al COMMANDITAIRE una piattaforma per l'esecuzione di macchine virtuali, la configurazione di queste è a carico del COMMANDITAIRE. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Prestatore definisce attraverso le sue interfacce delle politiche di backup automatiche. Tuttavia, è a carico del COMMANDITAIRE l'attivazione di queste politiche di backup e quindi attivare le macchine virtuali.

- Il COMMANDITAIARE autorizza l'ANSSI e l'ente di certificazione SNC ad auditare il servizio e l'infrastruttura tecnica che lo fornisce.

- Il COMMANDITAIRE è responsabile di indicare al Prestatore eventuali esigenze normative specifiche relative ai tipi di informazioni confidate dal COMMANDITAIRE, che devono essere prese in considerazione dal Prestatore.

- Il COMMANDITAIARE accetta di non richiedere al Prestatore di esigenze o azioni che escludano il Prestatore dalle esigenze del riferimento SecNumCloud nella sua versione corrente, da un lato, oppure abbassino il livello di sicurezza stabilito dal rispetto delle esigenze di questo stesso riferimento, dall'altro.

## COMMISSIONARIO'S RIGHTS

A tutto il corso della relazione contrattuale, il COMMISSIONARIO può presentare una reclamo relativa al servizio qualificato presso l'ANSSI in qualsiasi momento.

In qualsiasi momento, il COMMISSIONARIO può richiedere al Prestattore di rendergli disponibile il proprio bilancio interno e la propria charta etica.

## Data Erasure upon Contract Termination

Upon the conclusion of the contract, whether due to expiration or termination for any reason, the Provider commits to securely erase all data pertaining to the COMMANDITAIRE, encompassing technical data. The Provider will ensure that the COMMANDITAIRE is formally notified of this erasure with a formal notice within a 21-day calendar period following the notification. The COMMANDITAIRE's data will then be deleted no later than 30 days after receiving this notification.

To validate this deletion, the Provider will deliver to the COMMANDITAIRE a certificate confirming the complete erasure of data.

## Ciclo di vita del presente Contratto di Servizio

Questo documento descrive il ciclo di vita del presente Contratto di Servizio, che comprende le diverse fasi attraverso le quali il contratto si sviluppa e viene mantenuto. La sua struttura è organizzata per facilitare la comprensione delle responsabilità e dei compiti associati a ciascuna fase, garantendo che tutti i dettagli tecnici rimangano intatti.

1. **Fase di Pianificazione**
   - Identificazione delle esigenze del cliente.
   - Definizione degli obiettivi e dei requisiti specifici per il servizio.
   - Sviluppo del piano di progetto, inclusi tempi, risorse e budget.

2. **Fase di Progettazione**
   - Creazione dettagliata del sistema o servizio.
   - Definizione delle interfacce utente e degli algoritmi.
   - Sviluppo di documentazione tecnica completa, inclusi piani di test e di implementazione.

3. **Fase di Implementazione**
   - Esecuzione dei compiti di sviluppo secondo il piano.
   - Integrazione con i sistemi esistenti.
   - Test approfonditi per garantire la qualità del codice.

4. **Fase di Test**
   - Conduzione di test funzionali e non funzionali.
   - Correzione dei difetti identificati durante il processo di testing.
   - Validazione che i requisiti siano soddisfatti.

5. **Fase di Rilascio**
   - Preparazione per il rilascio del servizio o sistema.
   - Comunicazione con gli utenti finali e stakeholder.
   - Monitoraggio post-rilascio per assicurarsi che tutto funzioni come previsto.

6. **Fase di Supporto**
   - Assistenza tecnica continua per risolvere eventuali problemi.
   - Aggiornamenti e manutenzione periodici.
   - Gestione delle richieste di supporto e miglioramento continuo del servizio.

7. **Fase di Valutazione**
   - Analisi dei risultati ottenuti durante l'implementazione.
   - Raccolta di feedback dagli utenti per valutare il successo del progetto.
   - Documentazione delle lezioni apprese per future fasi di sviluppo simili.

8. **Fase di Terminazione**
   - Pianificazione e gestione dell'uscita dal contratto, inclusa la consegna dei dati e il ripristino del sistema.
   - Conseguenze legali e finanziarie per entrambe le parti coinvolte.

Ogni fase è cruciale per garantire che il servizio o il prodotto soddisfi gli obiettivi iniziali, siano conforme alle normative applicabili e offrano un'esperienza utile ed efficiente. La struttura chiaramente definita di questo ciclo di vita facilita la gestione e il monitoraggio del progetto, assicurando che tutte le attività siano coerenti con gli standard tecnici e organizzativi stabiliti.

## Effettivazione del Contratto di Servizio

Il presente Contratto di Servizio entra in vigore il giorno della sua firma effettuata dal COMMANDITAIRE.

La raccolta, la manipolazione, lo stoccaggio e il trattamento dei dati effettuati nel contesto dell'avant-vente, l'implementazione e lo stop del Servizio sono eseguiti in conformità della normativa vigente.

## Evoluzioni della Convenzione di Servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organismi di governo designati a tale scopo. Queste proposte di cambiamento saranno valutate dalle Parti, autorizzate ad identificare gli aspetti che richiedono una formalizzazione scritta.

È convenuto che qualsiasi modifica della Convenzione di servizio, dopo la validazione, che altera le condizioni finanziarie inizialmente stabilite, richiederà l'emissione e la firma di un aggiunto al Contratto in corso.

I fattori che potrebbero portare a una revisione della Convenzione di servizio includono, ma non si limitano:

- Lo sviluppo dell'infrastruttura tecnica che fornisce il Servizio OpenIaaS;
- Gli aggiustamenti apportati ai servizi forniti dal Prestatore per offrire il Servizio;
- Le variazioni degli impegni presi e delle sanzioni applicabili;
- Le ristrutturazioni organizzative all'interno del COMMANDITAIRE o del Prestatore;
- L'espansione o la riduzione del campo d'applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è registrata in prefazione al documento per facilitarne il seguito.

### Evoluzioni avviate dal COMMANDITAIRE

Lele evoluzioni della Convenzione di servizio possono avere, tra l'altro:

- Un'evoluzione dell'infrastruttura gestita dal Prestatore;

- Una modifica dei servizi implementati dal Prestatore;

- Una modifica degli impegni relativi ai livelli di servizio da parte del Prestatore.

### Modifiche Avviate dal Fornitore

Tutte le modifiche alla Convenzione di Servizio sono soggette all'accettazione del COMMANDITAIRE. È compreso che qualsiasi modifica o aggiunta validata che modifichi gli elementi finanziari del Contratto, potrebbe comportare la firma di un avviso di modifica a questo ultimo.

## Réversibilità

Inoltre, Cloud Temple si impegna a garantire la possibilità di revisionare la presente Convenzione di servizio (che prevede tra l'altro la risoluzione del contratto) senza penali per il COMMANDITAIRE in caso di perdita della qualifica SecNumCloud.

I Servizi non includono alcuna obbligazione di ripristino (cioè, l'aiuto al COMMANDITAIRE per permettergli di migrare il proprio sistema su un altro "Prestatore") a parte la fornitura dell'interfaccia COMMANDITAIRE dal Prestatore, che consente al COMMANDITAIRE di salvare e recuperare i propri dati, compresi quelli di configurazione del proprio sistema informativo tramite una o più modalità tecniche scelte dal COMMANDITAIRE: la disponibilità di file seguendo uno o più formati documentati ed esplorabili al di fuori del servizio fornito dal Prestatore, oppure attraverso l'implementazione di interfacce tecniche che consentano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il COMMANDITAIRE, unico detentore della propria infrastruttura, deve adottare tutte le misure necessarie per facilitare tale operazione in caso di necessità (ciò implica, tra l'altro, la creazione di una documentazione accurata a questo scopo) e la pianificazione di scenari di ripristino. In caso in cui il COMMANDITAIRE abbia bisogno di un servizio aggiuntivo, il Prestatore può proporre una missione di consulenza a titolo personale, da stipulare tramite un contratto specifico da negoziare.

## Disponibilità, continuità e ripristino del servizio

La disponibilità del servizio è garantita attraverso la distribuzione geografica dei nostri data center, che permettono di minimizzare i tempi di inattività dovuti a guasti hardware o software. I sistemi di monitoraggio e automazione ci consentono di rilevare rapidamente eventuali problemi e di implementare soluzioni automatiche per garantire la continuità del servizio.

In caso di incidente più complesso, abbiamo in atto un piano di ripristino rapido che include procedure di backup e recupero dati automatizzate, nonché team dedicati per gestire le situazioni critiche. Questi meccanismi garantiscono che il servizio possa essere rapidamente ripristinato senza interruzioni significative per i nostri utenti.

I nostri sistemi di allerta e notifica sono progettati per informare tempestivamente le parti interessate in caso di problemi, consentendo loro di prendere decisioni informate e minimizzare l'impatto sulle operazioni aziendali.

Inoltre, la nostra infrastruttura è costantemente aggiornata per soddisfare le normative di sicurezza e privacy più rigorose, garantendo che i dati dei nostri utenti siano protetti in ogni momento.

### Gestione degli Incidenti e delle Interruzioni

Questo capitolo descrive le procedure per la gestione degli incidenti e delle interruzioni che possono verificarsi nei sistemi IT. La nostra strategia si basa su un approccio proattivo, con il focus sulla prevenzione, sul monitoraggio continuo e sulla risposta rapida in caso di problemi.

1. **Prevenzione**
   - Implementazione di sistemi di allerta precoce per identificare potenziali problemi prima che influiscano negativamente i servizi.
   - Regolari aggiornamenti e patching dei sistemi operativi e delle applicazioni per mitigare le vulnerabilità di sicurezza.

2. **Monitoraggio Continuo**
   - Strumenti di monitoraggio avanzati che forniscono visibilità in tempo reale sulle prestazioni del sistema, sulla disponibilità dei servizi e sull'integrità dei dati.
   - Reporting automatizzato per la gestione delle risorse umane e tecniche.

3. **Risposta alle Interruzioni**
   - Squadre di risposta agli incidenti specializzata, pronta a intervenire rapidamente in caso di problemi critici.
   - Piani di ripristino rapido (BCP) che definiscono le azioni da intraprendere per minimizzare l'impatto delle interruzioni.

4. **Documentazione e Analisi**
   - Registrazione dettagliata degli incidenti, inclusi i passaggi di risoluzione, le cause sottostanti e le misure correttive implementate.
   - Analisi continua per identificare modelli o tendenze che potrebbero indicare problemi sistemici più ampi.

5. **Comunicazione**
   - Canali di comunicazione chiari e tempestivi con stakeholder interni ed esterni, inclusi team IT, amministrazione, clienti e parti interessate.
   - Reporti regolari sulla situazione dei servizi e sulle iniziative di miglioramento continuo.

6. **Apprendimento Continuo**
   - Utilizzo degli incidenti come opportunità di apprendimento per migliorare le procedure, i sistemi e le competenze del team IT.
   - Formazione continua per il personale sulla gestione degli incidenti e sulle migliori pratiche del settore.

Questo approccio integrato garantisce che possiamo gestire gli incidenti in modo efficiente, minimizzare l'impatto sulle operazioni aziendali e mantenere la fiducia dei nostri clienti.

### Incidenti

Cette section pourrait contenir des informations sur divers incidents rencontrés dans le système Cloud computing, les systèmes IT ou l'ingénierie logicielle. Elle pourrait inclure des détails sur les problèmes techniques, les pannes, les erreurs de logiciel, les violations de sécurité, etc. La traduction en italien devrait maintenir la même structure et le formatage Markdown original, tout en traduisant le contenu textuel à l'intérieur des tableaux (y compris les en-têtes de tableau) et des blocs de code Python.

#### Tipi di incidenti gestiti in conformità con questa Convenzione di servizio

- Sinistri;

- Interruzioni e guasti;

- Incidenti di sicurezza che influenzano la disponibilità, la riservatezza o l'integrità del Servizio.

#### Gestione degli incidenti

Il fornitore informa il COMMANDITAIRE nei tempi più rapidi possibili di eventuali incidenti e interruzioni, tramite una notifica nella console COMMANDITAIRE o tramite email al contatto COMMANDITAIRE. Il fornitore informa anche il COMMANDITAIRE del processo di risoluzione dell'incidente tramite lo stesso canale utilizzato per notificare l'incidento, oppure tramite il canale indicato nella notifica dell'incidento.

#### Level of Security Incident Notification

The COMMANDITAIRE is responsible for determining the severity levels
of Security Incidents for which it wishes to be informed, such as formalization within a PAS applicable to the Service.

By default, the COMMANDITAIRE is notified:

- Of Security Incidents with impact (I1 and I2 according to the severity scale defined in the processing priority process of this Service Convention) ;

- Of Security Incidents affecting the COMMANDITAIRE's confidentiality or data integrity entrusted within the framework of the Service ;

- Of personal data breaches for which the COMMANDITAIRE is responsible for processing as per Article 8 of Annex DPA within the framework of the Service ;

-

### Manutenzione del Servizio

### Natura della manutenzione

Violazioni dei dati personali per cui il fornitore è responsabile del trattamento e che contengono i dati personali dell'UTENTE, in conformità con l'articolo 8 dell'Annesso DPA. La manutenzione garantita consiste nella messa in opera:

- Il piano di manutenzione in condizioni di funzionalità del Servizio per assicurare buoni indicatori di disponibilità come lo stesso fornitore ha dichiarato sopra;

- Il piano PCA/PRA, se abilitato dall'UTENTE, che viene attivato in caso di incidenti eventuali.

### Accesso ai Cloud Temple da remoto all'interno del piano di controllo COMMANDITAIRE

Il fornitore si impone, nel contesto della presente Convenzione di servizio, di non accedere ai Tenanti e all'ambiente dell'interfaccia del COMMANDITAIRE.

Sarà incaricato dal COMMANDITAIRE di concedere gli accessi necessari al personale del fornitore. Il COMMANDITAIRE riconosce che tali accessi saranno utilizzati nell'ambito dell'hosting e, in ultima analisi, dell'infogestione (se abilitato dal COMMANDITAIRE).

### Accesso remoto di terze parti coinvolte nella fornitura del servizio all'interno del perimetro del COMMANDITAIRE

Non è autorizzato alcun accesso remoto da parte di terze parti coinvolte nella fornitura del Servizio.

In caso di necessità tecnica che renda questo scenario necessario, tale tipo di accesso sarebbe realizzato solo dopo la notifica scritta e l'accordo esplicito del COMMANDITAIRE.

# Procedure of Data Erasure at Contract Termination

At the end of the Contract, whether due to expiration or any other reason, the Provider ensures a secure erasure of all data processed within the scope of the Service, including the technical data of the COMMANDITAIRE. The Provider will provide a formal notice within twenty-one (21) calendar days. The COMMANDITAIRE's data will be deleted no later than thirty (30) days after the notification. The Provider will deliver a data erasure certificate to the COMMANDITAIRE.

## Dirit applicabile

Questo elemento Markdown non contiene elementi HTML o Markdown strutturati che richiederebbero una traduzione specifica. Pertanto, la traduzione rimane illoco:

**Diritto Applicabile**

## Generalemente

Il dirit applicabile e a cui è soggetta la presente Convenzione di servizio è il diritto francese.

## Respecto della legge e delle normative applicabili

Il fornitore si impegna nei seguenti punti:

- Identificazione delle limitazioni legali ed amministrative applicabili nel contesto del Servizio;

- Adeguamento alle limitazioni legali ed amministrative applicabili ai dati affidati al fornitore, entro le responsabilità di quest'ultimo, e alle disposizioni previste dal contratto.

- Adeguamento alla Legge sulla protezione dei dati informatici (LDP) e al Regolamento generale sulla protezione dei dati (GDPR);

- Implementazione di misure di protezione dei dati personali;

- Estensione di un processo di vigilanza legale ed amministrativa;

- Disposizione e manutenzione di relazioni adeguate o di vigilanza con le autorità competenti nel settore, in relazione alle caratteristiche dei dati trattati nel contesto del Servizio. Ciò comprende, tra le altre, l'ANSSI (Agenzia Nazionale per la Sicurezza dei Sistemi Informatici), il CERT-FR (Centro di Analisi e Prevenzione delle Minacce per le Infrastrutture Critiche) e la CNIL (Commission Nationale de l'Informatique et des Libertés).

## GDPR

As a processor under the provisions of Article 28 of the General Data Protection Regulation (RGPD), the Provider commits to:

- Ensuring transparency and traceability;

- Designating a DPO responsible for defining and implementing data protection measures concerning personal data;

- Providing assistance and advice to the COMMANDITAIRE, alerting them if an instruction from the latter constitutes a violation of data protection rules that the Provider can identify;

- Ensuring security of processed data (due to SecNumCloud qualification).

## Protection against extra-EU law

The provider's corporate seat is located within an EU member state. The provider's share capital and voting rights in the company are not, directly or indirectly:

- individually held by more than 24%;

- and collectively held by more than 39%;

by third entities having their registered office, central administration, or main establishment within a non-EU member state.

In case the provider, as part of the service, engages with a third party - including a subcontractor - that has its registered office, central administration, or main establishment within a non-EU member state or is owned or controlled by a third party based outside the EU, the provider commits to:

- ensuring this third party does not have access to operational data;

- maintaining operational autonomy through the ability to engage another subcontractor or swiftly implement a technological alternative.

For clarity, the data in question are those entrusted to the provider by the COMMANDITAIRE, as well as all TECHNICAL DATA encompassing information about the COMMANDITAIRES.

For the purposes of this article, the notion of control is understood according to the definition provided in Article L233-3 II of the French Commercial Code.

# FIRMAZIONI

Fatti a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, IL FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, IL COMMANDATARIO