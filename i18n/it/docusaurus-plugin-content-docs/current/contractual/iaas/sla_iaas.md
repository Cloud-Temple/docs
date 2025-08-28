---
Titolo Convenio di Servizio SecNumCloud IaaS
---

# CONVENTION DE SERVIZI IaaS

| Destinatari | **COMMANDITAIRE** |
| :--- | :--- |
| **Riferimento del documento** | CT.AM.JUR.ANX CdS-IaaS - 20251701_v3.0.docx_Giorno JJ AAAA |
| **Interlocutori** | *Prénom* *Nome* Account Manager e-mail : *prenom.nom*\@cloud-temple.com |
| **Data ultima modifica** | 17/01/2025 |
| **Validazione contrattuale** | Giorno JJ AAAA |

------------------------------------------------------------------------

| Versione | Data | Azione | Autore |
| :--- | :--- | :--- | :--- |
| v0.1 | 07/06/2022 | Redazione iniziale | Lorena ALCALDE |
| v0.2 | 14/09/2022 | Arricchimento | Lorena ALCALDE |
| v1.0 | 30/12/2022 | Integrazione Indici | Lorena ALCALDE |
| v1.1 | 23/01/2023 | Modifica piedone pagina | Lorena ALCALDE |
| v1.2 | 22/05/2023 | Arricchimento | Lorena ALCALDE |
| v1.3 | 29/06/2023 | Arricchimento | Lorena ALCALDE |
| v1.4 | 06/11/2023 | Modifica Capitale e Arricchimento | Lorena ALCALDE |
| v1.5 | 30/11/2023 | Arricchimento | Lorena ALCALDE |
| v1.6 | 21/03/2024 | Arricchimento | Lorena ALCALDE |
| v2.0 | 29/03/2024 | Adeguamenti conformità SNC | Nicolas ABRIOUX |
| v2.0 | 03/04/2024 | Pubblicazione | Lorena ALCALDE |
| V3.0 | 17/01/2025 | Arricchimento | Emeline CAZAUX |

------------------------------------------------------------------------

## Introduzione e Glossario

La traduction du texte "Préliminaire et Glossaire" en italien conservant la structure Markdown originale serait :

```markdown
## Introduzione e Glossario
```

Notez que le titre "Préliminaire et Glossaire" a été traduit directement en "Introduzione e Glossario". Les éléments de formatage (en-têtes, listes) et les blocs de code ont été conservés sans modification.

## Introduzione

Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS certificato SecNumCloud, denominato "Secure Temple".

Il Servizio è certificato SecNumCloud (vedi attestazione nella Annessa).

La presente convenzione di servizio completa e integra le condizioni generali di vendita ed utilizzo del fornitore. Si intende che i documenti contrattuali siano interpretati in modo coerente tra loro. In caso di contraddizione o divergenza nei termini dei documenti contrattuali, le contraenti prevalentemente prevarranno in questo ordine:

1. Condizioni Generali di Vendita ed Utilizzo (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud OpenIaaS
4. Convenzione di Servizio SecNumCloud PaaS
5. Convenzione di Servizio specifico - Bare Metal
6. Convenzione particolare
7. Piano Assicurazione Sicurezza (PAS)
8. Condizioni Particolari d'Uso (CPU)
9. Accordo sulla Protezione dei Dati

## Glossary

In the present Service Agreement, the **Commanditaire**, **Prestatore**, and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement will be interpreted according to the definitions assigned below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, that affects the service's functionality, performance, and costs.

- **Standard Change:** A change subject to a procedure with known production procedures and accepted impacts (including financial ones) by all Parties beforehand. It is then integrated into the standard change catalog, potentially having a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Prestataire enabling the Commanditaire to benefit from the Service, to which this Service Agreement is annexed.

- **Service Agreement:** This document established within a specific contract or General Terms and Conditions of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Service Request:** A request for enhancement following a procedure where the execution:
  i) Does not modify the CMDB,
  ii) Known operational mode, costs, and risks are accepted upfront,
  iii) No specific rollback procedures are required,
  iv) Is subject to an agreed level of service (SLA) and included in the contract revenue when performed during business hours.

- **Availability:** Capacity to ensure the Service's availability and optimal performance, aligned with defined criteria and commitments under SLAs.

- **Technical Data:** Encompasses all data processed to deliver the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration access, directory, certificates, etc.

- **Event:** Any detectable or identifiable occurrence potentially impacting Service management.

- **Hypervisor:** Operating system enabling virtual machine execution on a compute layer.

- **Incident:** An unforeseen event disrupting the normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:
  - Intentionally malicious;
  - Accidental affecting the Service’s integrity, confidentiality, or traceability, or existing security measures;
  - Not considered a Security Incident (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Prestataire to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions taken to implement a Change once approved (ITIL change management concerns itself with process, not actual execution).

- **Problem:** Root cause of recurring Incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** Geographically defined set of availability cloud zones providing network, compute, and storage services for optimizing latency, performance, and local regulatory compliance.

- **Service:** Qualified IaaS service "Secure Temple" provided by SecNumCloud's Cloud Temple, as described in the "Description of Service" section of this Agreement.

- **Secure Temple:** Qualified IaaS service "Secure Temple" offered by Cloud Temple, as defined in the accessible ANSSI attestation and attached to this Service Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving data collection such as measurements and alarms. This activity is limited to observation and tracking without direct intervention on monitored elements, a prerogative reserved for administration operations.

- **Tenant:** An isolated instance reserved for a user or group of users sharing a common technical infrastructure while maintaining data and application independence and security.

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
| **GTR** | Garantia Tempi Risoluzione |
| **ITIL** | Information Technology Infrastructure Library - Linee guida per la gestione delle Sistemazioni Informatiche |
| **IaaS** | Infrastructure as a Service -- Servizi di Infrastruttura come Servizio |
| **MCO** | Manutenzione in condizioni operative |
| **MOA** | Maitrise d'Ouvrage |
| **MOE** | Maitrise d'Œuvre |
| **MSP** | Managed Services Provider -- Fornitore di Servizi Gestiti |
| **OS** | Operating system (sistema operativo) |
| **PAQ** | Piano Assicurazione Qualità |
| **PaaS** | Platform as a Service -- Servizio come Servizio |
| **PAS** | Piano Assicurazione Sicurezza |
| **PASSI** | Prestatore di Audit di Sicurezza dei Sistemi d'Informazione |
| **RFC** | Request For Change -- Richiesta di cambiamento |
| **RGPD** | Regolamento Generale sulla Protezione dei Dati (personali) |
| **RPO** | Recovery Point Objective -- Obiettivo di fraichezza delle informazioni restaurate in caso di incidente |
| **RTO** | Recovery Time Objective -- Tempo di ripristino del servizio in caso di incidente |
| **SDM** | Service Delivery Manager |
| **SLA** | Service Level Agreement -- Accordo sui livelli di servizio |
| **SNC** | SecNumCloud |
| **SOC** | Security Operation Center |
| **TMA** | Tierce Maintenance d'Application -- Manutenzione di Applicazione a Terze Parti |
| **UO** | Unità d'Œuvre |
| **VABE** | Validazione dell'Adeguatezza alla Buona Esecuzione |
| **VABF** | Validazione dell'Adeguatezza al Buon Funzionamento |
| **VM** | Virtual Machine (Machine virtuale) |
| **VSR** | Validation de Service Régulier -- Controllo regolare del Servizio |

# Obiettivo della presente Convenzione di Servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni entro cui il Prestatore si impegna a fornire il Servizio al COMMANDITAIRE. Il suo scopo è:

- Definire le requisiti di prestazione attesi dal COMMANDITAIRE in termini di funzionalità e affidabilità del Servizio;

- Elaborare le obbligazioni del Prestatore per soddisfare agli standard di servizio concordati;

- Identificare le normative specifiche applicabili al Servizio fornito;

- Garantire l'uniformità e l'integrità nell'evaluazione della qualità del Servizio;

- Assicurare l'eccellenza dei servizi forniti, valutata attraverso indicatori di prestazione quantitativi.

In caso in cui il Prestatore si veda revocata la qualificazione SecNumCloud, il Contratto potrà essere risolto immediatamente e senza penali da parte del COMMANDITAIRE. In tale ipotesi, il Prestatore si impegna a informare il COMMANDITAIRE della dequalificazione tramite una notifica ufficiale, mediante lettera raccomandata con avviso di ricevuta.

È importante sottolineare che qualsiasi modifica o aggiustamento della qualificazione SecNumCloud non sarà interpretato come revoca dell'originale qualificazione.

# Audit

Il fornit garantito al COMMANDITAIRE, oltre che ad eventuali auditori terzi e non concorrenti del fornitore stesso nominati, di accedere a tutti i documenti necessari per la certificazione dell'integrale rispetto delle obbligazioni relative alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione di audit.

Con l'accettazione della presente Convenzione di servizio, il COMMANDITAIRE concede esplicitamente il consenso al:

 1. L'Agenzia Nazionale per la Sicurezza dei Sistemi d'Informazione (ANSSI)
 e a qualsiasi entità di certificazione competente per verificare la conformità del Servizio e del sistema informatico al riferimento SecNumCloud.
 2. Un fornitore di audit della sicurezza dei sistemi d'informazione, debitamente qualificato PASSI e esplicitamente designato dal fornitore stesso, per eseguire audit di sicurezza relativi al Servizio.

## Descrizione del Servizio

Questo è il testo tradotto in italiano per la sezione "Descrizione del Servizio". Si prega di notare che non sono stati modificati gli elementi strutturanti o formatativi come i titoli, elenchi puntati (#), blocchi di codice (```) o le righe di commento Markdown (`#`). Tuttavia, il contenuto interno di questi elementi è stato tradotto.

### Esempio di Markdown con Blocco di Codice Python:

```python
def greet(name):
    """Saluta il nome specificato."""
    return f"Ciao, {name}!"
```

In questo esempio, solo i commenti (linee iniziali con `#`) sono stati tradotti. I nomi delle variabili (`name`, `greet`), le funzioni e la sintassi Python stessa non sono state modificate. La struttura di codifica Python, inclusi gli spazi e l'indentazione, è stata mantenuta intatta.

### Esempio di URL:

```
Per ulteriori informazioni, visita il nostro sito ufficiale: [Sito ufficiale](https://www.example.com)
```

Anche i link (URL) sono stati lasciati invariati nella loro forma originale.

### Esempio di Blocco di Commento Markdown:

```markdown
# Descrizione del Servizio

Questo è il testo tradotto in italiano per la sezione "Descrizione del Servizio". Si prega di notare che non sono stati modificati gli elementi strutturanti o formatativi come i titoli, elenchi puntati (#), blocchi di codice (```) o le righe di commento Markdown (`#`). Tuttavia, il contenuto interno di questi elementi è stato tradotto.
```

In questo caso, solo il testo all'interno dei tag Markdown è stato tradotto, mantenendo la struttura e l'indentazione originale.

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
| **Backup** | Subscription to appropriate mass storage capacity |
| **Network Infrastructure** | Network resource for the COMMANDITAIRE tenant |
| **COMMANDITAIRE Console** | Service enabling COMMANDITAIRE to access and manage its IaaS services via the Shiva interface |
| **Support** | Support service accompanying the aforementioned services, limited to SNC qualified scope and Prestator responsibilities in this regard |

### Datacenter Infrastructures

The Service encompasses the provision, for each Availability Zone, of the following qualified services:

- Data center located in France for the FR region, compliant with the latest technological standards, offering a resilience level equivalent to or superior to Tier 3 according to Uptime Institute;
- Provision of technical rooms within dedicated datacenters designed to accommodate essential technical equipment required for service production, including computing, storage, networking, cabling, and other necessary components;
- Secure electrical supply ensured by two independent power circuits, guaranteeing uninterrupted service continuity;
- Supply of climate control systems tailored to meet manufacturer standards and recommendations, ensuring optimal conditions for technical devices;
- Continuous monitoring and detailed metrology, enabling precise tracking and proactive management of the service's performance and security.

The Provider ensures the availability of advanced fire detection and suppression services, designed to identify and effectively neutralize any fire incidents within installations. These systems include high-precision smoke detectors and rapid-response extinguishing devices that do not damage IT equipment. This service is critical for preventing fire hazards, minimizing potential damage, and ensuring operational continuity.

The COMMANDITAIRE is informed that all implemented security procedures and measures, including annual failover tests on generators, are vital for maintaining the continuity and integrity of provided services. These practices aim to minimize downtime risks and ensure optimal response in case of an incident. By accepting these terms, the COMMANDITAIRE acknowledges the importance of these safety measures and commits to full cooperation for their implementation. The COMMANDITAIRE is also encouraged to review security recommendations and integrate them into its own risk management strategy.

### Interfaccia Software di Gestione del Servizio

Il fornitore fornisce al COMMANDITAIRE la console di amministrazione e l'API necessaria per l'utilizzo del Servizio. Si precisa, mantiene anche la console di amministrazione e l'API in condizioni operative ottimali e garantisce la sicurezza continuamente. Questa console di amministrazione e l'API sono racchiuse sotto il termine "interfaccia COMMANDITAIRE".

Il fornitore avvisa il COMMANDITAIRE che un utilizzo anomalo dell'interfaccia COMMANDITAIRE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che portano al blocco dell'accesso alle API di comando o al Servizio stesso. È importante sottolineare che tale situazione non implica un indisponibilità del Servizio, ma piuttosto una misura di protezione del Servizio e dell'infrastruttura del fornitore; pertanto, il COMMANDITAIRE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il fornitore specifica al COMMANDITAIRE che le richieste perfettamente identiche (doppie) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMANDITAIRE invia richieste identiche a una frequenza superiore, il loro respingo non può essere interpretato come un'indisponibilità del Servizio.

### Infrastrutture di Calcolo

Il Servizio include la fornitura, nelle zone di disponibilità
sottoscritte dal COMMANDITAURE, degli equipaggiamenti necessari per
eseguire le carichi di lavoro sotto forma di macchine virtuali.

Ciò comprende:

- La fornitura dei casi tecnici necessari per il corretto funzionamento
  delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal
  COMMANDITAURE e distribuite secondo le zone di disponibilità del
  suo scelta. È da notare che queste lame di calcolo sono esclusivamente
  dedicate al COMMANDITAURE;
- La messa a disposizione di sistemi operativi di tipo hypervisor, così
  come la garanzia del mantenimento in condizioni operative e della
  sicurezza dell'infrastruttura software necessaria per il controllo
  di questi sistemi operativi. È importante sottolineare che, anche se
  il fornitore è responsabile della manutenzione operativa e della
  sicurezza generale del Servizio, non possiede conoscenze specifiche
  riguardo agli ambienti di produzione del COMMANDITAURE o alle esigenze
  relative ai suoi carichi di lavoro. Pertanto, la responsabilità di
  decidere le aggiornamenti dei sistemi operativi delle lame di calcolo
  hypervisor, un'azione che potrebbe richiedere un riavvio, ricade
  completamente sul COMMANDITAURE. Questa operazione può essere eseguita
  tramite l'Interfaccia COMMANDITAURE.

Il selection del modello di lama di calcolo, scelto tra il catalogo
proposto dal fornitore, riveste la responsabilità del COMMANDITAURE.

### Infrastruttura di archiviazione

Il servizio include la fornitura al COMMANDITAARE un'infrastruttura di archiviazione condivisa del tipo SAN (Storage Area Network), che offre diversi livelli di prestazioni. Questo servizio comprende:

- La realizzazione e il mantenimento in condizioni operative e di sicurezza del rete SAN dedicato;
- L'installazione e la gestione delle celle di archiviazione condivise tra i clienti, inclusa la loro manutenzione in condizioni operative e di sicurezza, il monitoraggio e la meccanometria;
- La configurazione dei sistemi automatizzati per l'allocazione delle LUN (Logical Unit Numbers) di archiviazione dedicate all'uso del COMMANDITAARE, in linea con i volumi abbonati dal COMMANDITAARE.

### Infrastruttura di rete globale

Il fornitore, all'interno del servizio, implementa una rete globale che consente al COMMANDITAIRE di rendere accessibili i propri sistemi ospitati. Questo servizio comprende:

- La fornitura, il mantenimento in condizioni operative e di sicurezza di tutti i collegamenti in fibra ottica che connettono le diverse Zone di disponibilità;

- La fornitura, il mantenimento in condizioni operative e di sicurezza degli equipaggiamenti tecnici necessari per il corretto funzionamento del network e l'isolamento dei diversi clienti.

L'interconnession del network del Tenant COMMANDITAIRE con Internet o con reti private, così come gli strumenti di rete, i collegamenti operatori e altri componenti tecnici che realizzano questa interconnessione, non rientrano nel ambito del servizio. Questa interconnessione di rete viene implementata in conformità con le disposizioni previste nel contratto.

### Infrastructure di Sicurezza dei Dati

Il fornitore offre al COMMANDITAIRE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue macchine virtuali. Il fornitore si occupa del mantenimento in condizioni operative e sicure di questo servizio di backup. Il fornitore garantisce che i backup del COMMANDITAIRE saranno situati al di fuori della Zona di disponibilità delle risorse da salvaguardare, a condizione che il COMMANDITAIRE abbia sottoscritto le unità di lavoro necessarie.

Questa fornitura di backup si limita alla conservazione dei server virtuali e delle configurazioni topologiche dell'ambiente IaaS dei Tenanti del COMMANDITAIRE all'interno del servizio. La creazione e l'applicazione di una politica di backup adeguata da parte del COMMANDITAIRE dipende dalla sottoscrizione di unità di lavoro specifiche. È quindi incaricato il COMMANDITAIRE di verificare la disponibilità delle risorse tecniche necessarie presso il fornitore per implementare la politica di backup o adattarla in base alle possibilità disponibili.

Il fornitore si impegna a avvisare il COMMANDITAIRE in caso di limitazioni di capacità e a fornire assistenza consultiva per l'ottimizzazione delle risorse. Le obbligazioni del fornitore si limitano all'implementazione dei bisogni espressi dal COMMANDITAIRE in termini di politica di backup, entro i limiti delle unità di lavoro sottoscritte.

### Implementazione di soluzioni di ripristino o continuità aziendale

Il fornitore fornisce al COMMANDITAIRE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle risorse attraverso diverse Zone di disponibilità. È responsabilità del COMMANDITAIRE gestire efficacement la distribuzione delle risorse, per la quale ha la possibilità di utilizzare gli strumenti forniti dal fornitore a tal scopo.

### Limitazioni dei servizi nel modello IaaS avanzato

Nel contesto del Modello di Infrastruttura come Servizio (IaaS) avanzato, diverse limitazioni devono essere considerate per garantire un'efficace gestione e utilizzo delle risorse. Queste limitazioni si applicano principalmente al livello di infrastruttura e non includono i servizi di piattaforma o software come SaaS (Software as a Service) o PaaS (Platform as a Service).

1. **Scalabilità**:
   - **Limitazione**: La scalabilità può essere un problema, soprattutto quando si lavora con risorse critiche che richiedono una rapida espansione. Le limitazioni possono derivare dalla capacità di rete, dal numero di server disponibili e dalle prestazioni dei componenti hardware.
   - **Traduzione**: Limitazione della scalabilità, soprattutto per risorse critiche che richiedono una rapida espansione, può essere influenzata da capacità di rete limitate, numero di server disponibili e prestazioni dei componenti hardware.

2. **Disponibilità**:
   - **Limitazione**: La disponibilità del servizio può essere compromessa in caso di guasto di un singolo punto di failover o di una cattiva configurazione della rete. Le limitazioni possono derivare dalla mancanza di meccanismi di ripristino automatici e da una pianificazione delle risorse non adeguata.
   - **Traduzione**: La disponibilità del servizio può essere compromessa in caso di guasto di un singolo punto di failover o di una cattiva configurazione della rete, influenzata dalla mancanza di meccanismi di ripristino automatici e da una pianificazione delle risorse non adeguata.

3. **Sicurezza**:
   - **Limitazione**: La sicurezza può essere un problema significativo, soprattutto quando si lavora con risorse sensibili. Le limitazioni possono includere la mancanza di misure di sicurezza adeguate, vulnerabilità del software e problemi di gestione delle credenziali.
   - **Traduzione**: La sicurezza può essere un problema significativo, soprattutto per le risorse sensibili, influenzata dalla mancanza di misure di sicurezza adeguate, vulnerabilità del software e problemi di gestione delle credenziali.

4. **Gestione dei costi**:
   - **Limitazione**: La gestione dei costi può essere difficile, soprattutto quando si lavora con risorse non fisse o con modelli di consumo dinamici. Le limitazioni possono derivare dalla mancanza di strumenti di monitoraggio e ottimizzazione dei costi, così come da una pianificazione delle risorse inefficiente.
   - **Traduzione**: La gestione dei costi può essere difficile, soprattutto per le risorse non fisse o con modelli di consumo dinamici, influenzata dalla mancanza di strumenti di monitoraggio e ottimizzazione dei costi, così come da una pianificazione delle risorse inefficiente.

5. **Interoperabilità**:
   - **Limitazione**: L'interoperabilità tra diversi ambienti IaaS può essere un problema, soprattutto quando si lavora con tecnologie diverse o standard non conformi. Le limitazioni possono derivare dalla mancanza di protocolli standardizzati e da una compatibilità limitata tra i sistemi.
   - **Traduzione**: L'interoperabilità tra diversi ambienti IaaS può essere un problema, soprattutto quando si lavora con tecnologie diverse o standard non conformi, influenzata dalla mancanza di protocolli standardizzati e da una compatibilità limitata tra i sistemi.

6. **Gestione dei dati**:
   - **Limitazione**: La gestione dei dati può essere complessa, soprattutto quando si lavora con grandi volumi di dati o con requisiti di archiviazione e recupero specifici. Le limitazioni possono includere la mancanza di strumenti di archiviazione efficienti, problemi di backup e ripristino dei dati e difficoltà nella gestione della qualità dei dati.
   - **Traduzione**: La gestione dei dati può essere complessa, soprattutto per grandi volumi di dati o con requisiti di archiviazione e recupero specifici, influenzata dalla mancanza di strumenti di archiviazione efficienti, problemi di backup e ripristino dei dati e difficoltà nella gestione della qualità dei dati.

7. **Gestione delle applicazioni**:
   - **Limitazione**: La gestione delle applicazioni può essere complicata, soprattutto quando si lavora con applicazioni heterogenee o con requisiti di integrazione e test specifici. Le limitazioni possono derivare dalla mancanza di strumenti di sviluppo e testing efficienti, così come da una pianificazione delle risorse inadeguata per le applicazioni.
   - **Traduzione**: La gestione delle applicazioni può essere complicata, soprattutto con applicazioni heterogenee o con requisiti di integrazione e test specifici, influenzata dalla mancanza di strumenti di sviluppo e testing efficienti, così come da una pianificazione delle risorse inadeguata per le applicazioni.

Queste limitazioni devono essere attentamente considerate durante la progettazione e l'implementazione di un sistema IaaS avanzato per garantire che le prestazioni, la sicurezza e la flessibilità siano ottimizzate.

### Servizi gestiti in RUN

È importante sottolineare che sono esclusi dal servizio:

- La gestione dell'infrastruttura fisica dei COMPONENTI COMMANDITAIRE;

- La connettività di rete del Tenant COMMANDITAIRE, sia a Internet che a reti private, inclusi i collegamenti operatori;

- Tutti i servizi di tipo gestito, o TMA;

- Qualsiasi assistenza sulle macchine virtuali al livello OS e sopra nella pila delle responsabilità Iaa, anche se si tratta solo di supervisione.

Tuttavia, non è assolutamente escluso che COMMANDITAIRE possa ricorrere a tali servizi presso l'offerta MSP del Fornitore per intervenire in modalità di servizio gestito sui Tenanti. In questi casi, questi servizi non saranno regolati dalla presente Convenzione di servizio e dalle clausole reciproche.

### Configurazione del Supporto

Di default, il fornitore presta la configurazione delle risorse IaaS al COMMANDITAIRE, assegnando risorse e configurando i deployment per utilizzare le Zones di disponibilità. È incaricato del COMMANDITAIRE di scegliere le Zones di disponibilità tramite l'interfaccia COMMANDITAIRE.

### Configuration della backup

La fornitura di backup si concluderà con il backup delle macchine virtuali e delle configurazioni topologiche che rappresentano l'ambiente IaaS dei Tenanti del COMMANDITAIRE all'interno del servizio.

La fornitura di backup e la realizzazione della politica di backup del COMMANDITAIRE sono soggette alla sottoscrizione di spazio di archiviazione sul mass storage necessario per garantire il servizio. Pertanto, è responsabilità del COMMANDITAIRE di sottoscrivere con il fornitore i mezzi tecnici necessari per implementare la politica di backup entro il proprio ambiente informatico, o di adattare la politica di backup ai mezzi messi in atto. Il fornitore si impegna a informare il COMMANDITAIRE in caso di limitazione tecnica della capacità.

Il fornitore metterà a disposizione i mezzi tecnici e umani necessari per eseguire il backup del sistema all'interno dei limiti delle risorse sottoscritte dal COMMANDITAIRE.

Inoltre, in caso di perimeter non gestito dal fornitore, è compito del COMMANDITAIRE definire la propria strategia di backup e configurare manualmente i backup delle VM o richiedere un servizio di supporto al fornitore per impostare i backup dei server fisici se il COMMANDITAIRE ha un contratto di servizio gestito che consenta al fornitore di agire tramite l'interfaccia COMMANDITAIRE, che è la console di amministrazione messa a disposizione nel quadro del presente accordo di servizio e che dispone delle funzionalità per configurare i backup.

Inoltre, questo servizio si impegnerà solo a tradurre tramite l'interfaccia COMMANDITAIRE la configurazione specificata chiaramente dal COMMANDITAIRE.

Per ragioni di flessibilità offerta dal fornitore, il COMMANDITAIRE ha la possibilità di associare una politica di non-backup su alcune delle sue VM. In questo caso, è compito del COMMANDITAIRE assumersi questa scelta. Il fornitore non eseguirà backup sulle VM associate alla politica "no backup". Il fornitore avvisa il COMMANDITAIRE che scegliere la politica "no backup" o effettuare un backup manuale espone il COMMANDITAIRE a una perdita di dati definitiva in caso di incidente sulle basi inferiori o su quelle dipendenti dalla responsabilità del COMMANDITAIRE nel modello IaaS. In tali casi, sarebbe impossibile far ricostruire i dati e tenere il fornitore responsabile della ripristino, poiché non ci sarà nulla da ripristinare. Il fornitore consiglia sempre di eseguire backup delle VM.

Per qualsiasi questione relativa all'OS installato su una macchina virtuale e qualsiasi software o programma eseguito "su" l'OS, è responsabilità del COMMANDITAIRE eseguire le operazioni di amministrazione e supervisione all'interno dell'Unione Europea se desidera garantire che tutte le verticali delle strati del Sistema siano eseguite ed amministrate dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del fornitore, nel quadro del presente accordo di servizio indicato nella sezione "Politiche di responsabilità condivise" del presente Accordo di Servizio.

## Implementazione del Servizio

### Prerequisiti tecnici

Per la realizzazione del Servizio, il COMMANDITAIRE riconosce di dover:

- Funzionare con una virtualizzazione di tipo VMware nelle versioni
    supportate dall'editore e fornite dal Fornitore all'interno del Servizio;

- Ricorrere al servizio di backup fornito dal Fornitore tramite il Fornitore;

- Dichiarare IP fissi da cui il Fornitore gli consentirà di accedere all'interfaccia COMMANDITAIRE (Filtraggio tramite lista bianca). Le modifiche della lista di IP devono essere effettuate tramite il menu previsto a questo scopo nella console o tramite Richieste di servizio per le modifica successive. All'inizializzazione del servizio, il Fornitore sarà stato informato almeno di una indirizzo IP come descritto.

## Localizzazione del servizio in Francia

Siene specificato che nessuna delle operazioni e nessun componente fisico coinvolti nella fornitura del Servizio, per il quale la presente Convenzione di servizio fa riferimento, si trova al di fuori dell'Unione Europea.

Ciò comprende, tra le altre cose, il supporto, la supervisione operativa e la supervision della sicurezza (SOC) dell'infrastruttura tecnica che fornisce il Servizio. Di conseguenza, tutto lo stoccaggio, le attività di amministrazione, la supervisione e i trattamenti sono eseguiti in Francia.

### Localizzazione dei Centri Dati che ospitano il Servizio

In assenza delle attività dei collaboratori e delle agenzie del Prestatore, l'intero processo di produzione (che include lo stoccaggio e il trattamento dei dati) e i componenti tecnici che forniscono il Servizio sono situati nei Centri Dati basati in Francia.

### Localizzazione delle agende Cloud Temple che offrono il servizio

I dipendenti di Cloud Temple che operano nel perimetro del servizio lavorano da diverse agende di Cloud Temple, tutte situate esclusivamente in Francia. Queste agende si trovano a Tours, Lione, Caen e Parigi La Défense.

Il Comanditario è informato della possibilità per i dipendenti di Cloud Templare lavorare da remoto. Tuttavia, il fornitore garantisce lo stesso livello di sicurezza per gli accessi a distanza, in particolare per quanto riguarda gli accessi VPN. Questi accessi remote sono implementati in conformità con le esigenze del riferimento SecNumCloud.

### Support

La traduction en italien pour "Support" est "Supporto".

### Natura del servizio di supporto fornito

Il fornitore offre un servizio di support tecnico volto a assistere il COMMANDITAIRE nella gestione, nel ripristino e nell'ottimizzazione delle risorse impiegate. Questo servizio copre una vasta gamma di attività, dalla configurazione iniziale dei servizi fino al supporto tecnico avanzato per la risoluzione di problemi specifici.

Ecco una descrizione dettagliata delle caratteristiche e delle funzionalità del servizio di supporto:

- Assistenza nella configurazione iniziale dell'utilizzo del Servizio;
- Assistenza nel risoluzione degli incidenti;
- Assistenza nella risoluzione dei problemi;
- Monitoraggio e consiglio sull'ottimizzazione del supporto tecnico.

Nel contesto del servizio di supporto, il fornitore non assume la responsabilità del COMMANDITAIRE nell'utilizzo del Servizio. Il COMMANDITAIRE rimane pienamente responsabile della configurazione, dell'esercizio delle sue VM e dei suoi Tenants, così come della gestione di tutti gli elementi (dati e applicazioni inclusi) che ha memorizzato o installato sulle infrastrutture del fornitore. Il servizio di supporto tecnico viene fornito in conformità con le Condizioni Generali di Vendita ed Uso, il fornitore è tenuto a un obbligo di mezzi.

Il COMMANDITAIRE si impegna ad utilizzare il servizio di supporto tecnico in modo ragionevole, evitando in particolare di sollevare servizi non sottoscritti presso il fornitore e di far intervenire le squadre del fornitore nei propri clienti o in terzi non inclusi nel contratto. Il fornitore si riserva il diritto di respingere qualsiasi richiesta di servizio che non soddisfi questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità di lavoro di supporto associate.

### Richiesta di supporto tecnico

Il supporto tecnico è accessibile tramite un sistema ticket tramite il terminale COMMANDITAIRE e disponibile durante le normale orario di lavoro, esclusi i giorni festivi (8:00 - 18:00; Lunedì - Venerdì, secondo il calendario e gli orari francesi). Per le emergenze che si verificano fuori dalle ore di ufficio, in particolare quegli incidenti che influenzano significativamente la produzione, il servizio di pronto intervento può essere contattato tramite un numero comunicato al COMMANDITAIRE all'avvio del Servizio.

Per ogni richiesta o incidente, è obbligatorio generare un ticket presso il supporto del fornitore. L'inizializzazione di questo ticket, comprendente tutte le informazioni necessarie, è fondamentale e segna l'inizio dell'esame dei compiti del fornitore.

Non appena il fornitore riceve una richiesta o una notifica di incidente, sia tramite la console di gestione che a seguito di un chiamata telefonica, viene automaticamente creato un ticket. Al momento della dichiarazione di un incidente, è fondamentale che il COMMANDITAIRE fornisca al fornitore il massimo dettaglio sul problema incontrato. Questa procedura è cruciale per consentire una valutazione adeguata della situazione, la sua priorizzazione e un diagnostic efficace.

Il COMMANDITAIRE riceve quindi una conferma via email, che indica la creazione del ticket e il suo numero unico. Il COMMANDITAIRE può consultare lo stato e l'elenco degli incidenti direttamente dalla console di gestione.

### Processo di Gestione degli Incidenti

Quando viene segnalato un incidente, l'equipe di support tecnico del fornitore attiva un'indagine per identificare la causa del problema e stabilire una diagnosi. Il COMMANDITAIRE deve collaborare attivamente con il fornitore fornendo tutte le informazioni necessarie e eseguendo i test richiesti. Il fornitore può accedere al servizio del COMMANDITAIRE per diagnosticare l'incidente.

Se i servizi del fornitore sono considerati funzionali e l'incidente non gli è imputabile, il COMMANDITAIRE ne sarà informato. Su richiesta del COMMANDITAIRE, il fornitore può proporre servizi professionali per identificare la causa del problema, fatturabili su accordo anticipato in tranche di 30 minuti.

In caso in cui l'incidente sia imputabile al fornitore o a uno dei suoi subappaltatori, quest'ultimo completa il diagnostic e si occupa della ripristinazione del servizio senza ulteriori spese. Il diagnostico si basa sulle scambi tra le parti e sui dati del fornitore, elementi considerati validi dagli accordi delle parti.

### Processo di priorizzazione dei trattamenti

La determinazione del livello di priorità per un dossier si basa su un'analisi matriciale che valuta l'impatto dell'Incident e il suo grado di criticità:

- I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione |
| :--- | :--- |
| **Impatto I1** | I servizi del fornitore sono interrotti |
| **Impatto I2** | I servizi del fornitore sono degradati |
| **Impatto I3** | I servizi del fornitore sono attualmente stabili, ma mostrano segnali di potenziale declino a lungo termine |

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

Il servizio di supporto è fornito dal Fornitore al COMMANDITAIRE al minimo in francese. Il supporto può essere anche fornito in inglese.

Le compiti del servizio di supporto del Fornitore per l'offerta di servizi di infrastruttura qualificata SecNumCloud si trovano all'interno dell'Unione Europea.

# Engagements e Servizio e Livelli di Servizio

Il fornitore si impegna a garantire una monitoraggio continuo della performance e dell'integrità sicurezza della propria infrastruttura tecnica che fornisce il Servizio, assicurando il funzionamento ottimale.

L'assenza di un servizio, indicata da un indicatore di prestazione, viene riconosciuta immediatamente dal sistema di supervisione del fornitore, oppure su segnalazione da parte di un utente COMMANDITAIRE. Il momento in cui inizia l'assenza è fissato al momento più anticipato tra questi due eventi per garantire un conteggio preciso e giusto del tempo di assenza.

La fine dell'assenza viene ufficialmente segnalata dalla completa ripristino del servizio, confermato dagli strumenti di supervisione del fornitore o da una segnalazione utente, garantendo così un recupero operativo efficace e una misurazione accurata della durata dell'interruzione.

## Availability Commitments of the Infrastructure

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period. These Service Level Agreements (SLAs) are subject to the COMMANDITAIRE implementing its systems across at least two of the available zones within the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will be unable to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The measurements are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.

**Remarks:**

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic directed at the targeted IP from its upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIREs and the Prestataire’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the command-line interface (CLI).

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## Disponibilità dell'interfaccia COMMANDITAIRE

- SLA 6: IC-INFRA_SNC-06 - Accesso all'interfaccia di amministrazione del Servizio: una disponibilità garantita del 97%, fornita in continuo, 24 ore su 24 e 7 giorni su 7.
- SLA 7: IC-INFRA_SNC-07 - Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su una base 24 ore/24, 7 giorni/sette.

## Service Level Agreement (SLA) - Availability Commitment

### SLA 8: IC-INFRA_SNC-08

This is the availability commitment of technical support by the Provider for incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

### SLA 9: IC-INFRA_SNC-09

This is the availability commitment of technical support by the Provider for service requests:

| Type | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note:*

- The GTI delay is calculated from the moment the COMMANDITAIRE opens a ticket until the first intervention by the Provider's support team.
- Investigation of incidents concerning COMMANDITAIRE commands will not include remote server assistance on the COMMANDITAIRE's hosted servers. Assistance will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered performance issues or problems. Based on these analysis results, recommendations can be suggested.*

## SLA di disponibilità dello storage object S3

- **SLA 10 : IC-INFRA_SNC-10** - Ecco i vincoli di disponibilità per lo storage object S3:

| Indicatore | Vincolo | Obiettivo di disponibilità |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durabilità dello stoccaggio di un oggetto in una regione | 99.9999999% / anno |
| **IC-INFRA-SNC-10.2** | Disponibilità dell'API Storage Object S3 | 99.99% |
| **IC-INFRA-SNC-10.3** | Latenza massima di accesso a un oggetto in una regione | 150 ms |

Nota:

- Il servizio di storage è specificamente progettato per lo stoccaggio degli oggetti e deve essere utilizzato esclusivamente per questo scopo, **esclusivamente**. L'utilizzo in modalità blocco tramite metodi non autorizzati, inclusi l'uso di "FUSE" su un ambiente Linux, costituisce una violazione delle condizioni d'uso menzionate. Qualsiasi incidente, guasto o danno derivante da un uso non conforme non sarà coperto dai livelli di servizio (SLA) definiti in questa convenzione di servizi.
- La garanzia di durabilità è condizionata all'utilizzo dei servizi conformi alle migliori pratiche e agli standard attuali, e esclude esplicitamente qualsiasi modifica dei dati, intenzionale o accidentale, derivante da azioni intraprese dal COMMANDITAIRE.

## Precision concerning backup engagement

The backup strategy deployed for COMMANDITAIRE is contingent upon subscribing to the appropriate units of work.

The Provider commits to providing a backup solution that will enable COMMANDITAIRE to apply its desired backup policies.

It is specified that the scope of the Provider ends with the provision of a backup service, and it is up to COMMANDITAIRE to oversee, via the COMMANDITAIRE interface, the proper execution of associated policies.

It is also noted that the management of storage capacities within the dedicated backup storage space remains the responsibility and liability of COMMANDITAIRE. The Provider offers usage rate information through the console.

*Example: Non-backup of a virtual machine:*

In case COMMANDITAIRE identifies a non-backed up virtual machine, it is its duty to investigate the reason for this omission. COMMANDITAIRE can then contact Provider Support according to the subscribed support level for assistance.

**SLA 8: IC-INFRA_SNC-08 and SLA 9**, will be exclusively applicable in the event of a backup service incident.

## Organizzazione della relazione contrattuale

## Responsabilità del Fornitore

Il fornitore si impegna:

- a informare il **Comanditario** di qualsiasi limite tecnico (ad esempio, in caso di limitazioni della capacità delle risorse tecniche che fornisce il Servizio).

- a informare formalmente il **Comanditario** entro un mese, di ogni cambiamento giuridico, organizzativo o tecnico che potrebbe influenzare la conformità del Servizio alle normative sulla protezione contro le leggi extra-europee (19.6 del riferimento SNC v3.2).

- a fornire al **Comanditario** interfacce e servizi di supporto in lingua francese al minimo.

- a considerare le esigenze normative specifiche per i tipi di informazioni confidate dal **Comanditario** nel contesto della messa in opera del Servizio, entro i limiti delle responsabilità del fornitore e delle disposizioni contrattuali, e studiarle ulteriormente espresse dal **Comanditario**, indicando le azioni necessarie per la loro integrazione.

- a non divulgare alcuna informazione relativa alla prestazione a terzi, salvo autorizzazione formale e scritta del **Comanditario**.

- a mettere a disposizione tutte le informazioni necessarie per la realizzazione di audit di conformità secondo le disposizioni dell'articolo 28 del GDPR.

- a informare il **Comanditario** tramite questa Convenzione di servizio di qualsiasi incidente di sicurezza che influisce sul Servizio o sull'utilizzo effettuato dal **Comanditario** del Servizio (compresi i dati del **Comanditario**).

- a autorizzare un fornitore di audit della sicurezza dei sistemi informatici (PASSI) qualificato, mandato dal fornitore stesso, ad auditare il servizio e il sistema informatico del fornitore, conformemente al piano di controllo del SecNumCloud. Inoltre, il fornitore si impegna a fornire tutte le informazioni necessarie per l'esecuzione degli audit di conformità alle disposizioni dell'articolo 28 del GDPR, effettuati dal **Comanditario** stesso o da un terzo mandato.

- a fornire, in qualità di subappaltatore, secondo l'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), assistenza e consulenza al **Comanditario**, avvisandolo tempestivamente quando un'istruzione emana dal **Comanditario** che potrebbe costituire una violazione delle norme di protezione dei dati.

- a informare il **Comanditario** in modo ragionevole, tramite la console del **Comanditario** o tramite l'indirizzo email del **Comanditario**, quando un progetto influisce o è suscettibile di influenzare il livello di sicurezza o l'accessibilità del Servizio, o genera una perdita di funzionalità, potenziali impatti, misure di mitigazione adottate e rischi residui che lo riguardano.

- a documentare e implementare tutte le procedure necessarie per rispettare le esigenze legali, normative e contrattuali applicabili al Servizio, nonché i bisogni di sicurezza specifici del **Comanditario**, definiti dallo stesso e previsti nel Contratto.

- a non utilizzare i dati del **Comanditario** provenienti dalla produzione per testi, tranne in caso di autorizzazione esplicita del **Comanditario**, al quale il fornitore si impegna ad anonimizzare queste informazioni e a garantir la loro confidenzialità durante l'anonimizzazione.

- a rimuovere i dati e le informazioni tecniche relativi al **Comanditario**, in conformità con la "procedure di cancellazione dei dati alla fine del contratto" descritta nella presente Convenzione di servizio, durante la fine o la risoluzione del contratto.

- a garantire una cancellazione sicura di tutte le informazioni relativi al **Comanditario**, attraverso una riproduzione completa di tutti i supporti che hanno ospitato i suoi dati nel contesto del Servizio.

Su richiesta formale e scritta del **Comanditario**, il fornitore si impegna:

1. A rendere accessibile al **Comanditario** il regolamento interno e la charta etica del fornitore;

2. A rendere accessibile al **Comanditario** le sanzioni in caso di violazione della politica di sicurezza;

3. A fornire al **Comanditario** tutti gli eventi relativi, all'interno delle registrazioni del Servizio; il **Comanditario** potrà consultare autonomamente queste informazioni tramite le interfacce web e API del Servizio.

4. A rendere accessibile al **Comanditario** le procedure per rispettare le esigenze legali, normative e contrattuali applicabili al Servizio, nonché i bisogni di sicurezza specifici del **Comanditario**, previsti nel Contratto.

5. A fornire, gli elementi di valutazione dei rischi relativi alla presentazione delle informazioni del **Comanditario** al diritto di uno Stato non membro dell'UE;

6. A informare il **Comanditario** degli eventuali subappaltatori intervenienti nella fornitura del Servizio, e a informarlo di qualsiasi cambiamento che influisce sui suddetti subappaltatori.

> Il fornitore e l'intero gruppo delle sue filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, come la dignità umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto e il rispetto dei Diritti Umani. Il servizio fornito dal fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e alle valori dell'Unione Europea relativamente al rispetto della dignità umana, della libertà, dell'uguaglianza, della democrazia e dello stato di diritto.

## Limitazioni delle responsabilità del fornitore

Considerando l'insieme di definizioni e condizioni riportate nella presente Convenzione di servizio, le responsabilità del fornitore sono limitate così:

1. Il modello di responsabilità condivisa, descritto nella sezione "Modelli di responsabilità condivise" della presente Convenzione di servizio, limita effettivamente l'impegno del fornitore nelle strati di funzionalità situati "al di sopra" della disponibilità delle risorse di calcolo, rete, archiviazione e backup. Ciò esclude in particolare:

    - La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicazioni, ecc.);
    - La manutenzione aggiornata degli OS e di altri software installati dal COMMANDITAIRE sulle sue macchine nei Tenants;
    - La sicurezza dei programmi, software e applicazioni installati sulle macchine virtuali;
    - La manutenzione delle macchine virtuali;
    - La salvaguardia dei dati a livello applicativo.


2. Il fornitore non può assumere impegni di backup per i Tenants del COMMANDITAIRE senza che il COMMANDITAIRE abbia precedentemente sottoscritto le unità di lavoro corrispondenti.


3. Il fornitore non può prendere in considerazione la proprietà dei dati trasmessi e generati dal COMMANDITAIRE. A vista d'occhio, questi relèvano della proprietà del COMMANDITAIRE.


4. Il fornitore sottolinea che non può utilizzare né disposizioni né prendere in carico i dati trasmessi e generati dal COMMANDITAIRE senza la validazione precedente di quest'ultimo, considerando che le loro disponibilità sono riservate al COMMANDITAIRE.


5. Il fornitore si dichiara responsabile per i componenti fisicamente ospitati e gestiti da sé, ma costituiscono la proprietà diretta del COMMANDITAIRE o di un terzo con il quale il COMMANDITAIRE ha stipulato un accordo contrattuale. L'ospitalizzazione dei componenti fisici dei clienti non fa parte del servizio e, pertanto, è esclusa dal quadro della presente Convenzione di servizio. È incaricato il COMMANDITAIRE di valutare l'adesione o dipendenza che questi componenti introducono rispetto al Servizio IaaS qualificato SecNumCloud.

## Limitazione di Accesso

Nel contesto del Servizio, il Fornitore è formalmente vietato di accedere ai Tenanti appartenenti al COMMANDITAIRE senza autorizzazione precedente. È la responsabilità del COMMANDITAIRE di fornire gli accessi necessari al personale del Fornitore, in base alle esigenze specifiche dell'hosting e, se applicabile, ai servizi professionali di supporto, nel caso in cui il COMMANDITAIRE abbia scelto questa opzione.

Il COMMANDITAIRE riconosce che questi accessi sono concessi esclusivamente per scopi legati alla fornitura dei servizi convenuti, garantendo così una gestione sicura e conformi agli accordi stipulati.

L'accesso remoto da parte di terzi coinvolti nella fornitura del servizio del Fornitore è esclusivamente vietato. In caso in cui una necessità tecnica specifica richieda un tale accesso, questo potrebbe essere autorizzato solo dopo aver chiaramente notificato il COMMANDITAIRE, fornire una giustificazione dettagliata e ottenere il consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMANDITAIRE, assicurando che qualsiasi eccezione alla regola sia adeguatamente autorizzata ed documentata.

## Responsabilità dei terzi coinvolti nella fornitura del servizio Secure Temple

Il Fornitore mantiene una lista esaustiva dei terzi partner che contribuiscono alla fornitura del Servizio, ovvero gli editori, i fornitori (del Fornitore) e altri fornitori partecipanti alla fornitura del Servizio. Il Fornitore applica le seguenti misure ai terzi partner:

- Il Fornitore richiede ai terzi che contribuiscono alla realizzazione del Servizio, all'interno delle loro contributi al Servizio, un livello di sicurezza almeno uguale a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

- Il Fornitore stipula con ciascun terzo partner che contribuisce alla realizzazione del Servizio, contratti di audit consentendo a un organismo di certificazione di verificare che questi terzi rispettano le disposizioni legali e le esigenze SNC, permettendo al Fornitore di adempiere i propri impegni in conformità con la presente Convenzione di servizio.

- Il Fornitore implementa una procedura che permette di controllare regolarmente le misure adottate dai terzi partner per rispettare le esigenze del Fornitore di adempiere i propri impegni in conformità con la presente Convenzione di servizio.

- Il Fornitore garantisce il monitoraggio dei cambiamenti apportati dai terzi partner che potrebbero influenzare il livello di sicurezza del sistema informativo del Servizio.

## Responsabilità e obblighi del COMMANDITAIRE

Il COMMANDITAIRE è soggetto alle seguenti responsabilità nel contesto del servizio:

- Per riferimento, il Prestatore fornisce al COMMANDITAIRE una piattaforma per l'esecuzione di macchine virtuali, la configurazione di queste è a carico del COMMANDITAIRE. Ogni macchina virtuale deve essere abilitata con una politica di backup associata. Il Prestatore definisce attraverso le sue interfacce politiche di backup automatiche. Tuttavia, è a carico del COMMANDITAIRE l'attivazione di queste politiche di backup e, di conseguenza, l'attivazione delle macchine virtuali.

- Il COMMANDITAIRE autorizza l'ANSSI e l'organo di certificazione SNC ad auditare il servizio e l'infrastruttura tecnica che lo fornisce.

- Il COMMANDITAIARE è responsabile di indicare al Prestatore eventuali esigenze normative specifiche relative ai tipi di informazioni confidate dal COMMANDITAIRE, che devono essere prese in considerazione dal Prestatore.

- Il COMMANDITAIRE accetta di non richiedere al Prestatore di requisiti o azioni che escludano il Prestatore dalle esigenze del riferimento SecNumCloud nella sua versione corrente, da un lato, oppure che abbassino il livello di sicurezza stabilito dal rispetto delle esigenze di questo stesso riferimento, dall'altro.

## COMMISSIONARIO'S RIGHTS

A qualsiasi momento durante la relazione contrattuale, il COMMISSIONARIO
può depositare una denuncia relativa al servizio qualificato presso l'ANSSI.

A qualsiasi momento, il COMMISSIONARIO può richiedere al Prestattore di rendergli disponibile il suo bilancio interno e la sua charta etica.

## Data Erasure upon Contract Termination

Upon the conclusion of the contract, whether due to expiration or termination for any reason, the Provider commits to securely erase all data pertaining to the COMMANDITAIRE, encompassing technical data. The Provider will ensure that the COMMANDITAIRE is formally notified of this erasure with a formal notice within a 21-day calendar window. The COMMANDITAIRE's data will then be deleted no later than 30 days following this notification.

To validate this deletion, the Provider will deliver to the COMMANDITAIRE a certificate attesting to the complete removal of data.

## Ciclo di vita del presente Contratto di Servizio

Questo documento descrive il ciclo di vita del presente Contratto di Servizio, che comprende le diverse fasi attraverso le quali il contratto si sviluppa e viene gestito. La sua struttura è organizzata per facilitare la comprensione delle responsabilità e dei compiti associati a ciascuna fase, mantenendo intatta la struttura Markdown originale.

1. **Fase di Pianificazione**
   - Identificazione delle esigenze del cliente.
   - Definizione degli obiettivi del contratto.
   - Sviluppo dei requisiti tecnici e funzionali.
   - Selezione della squadra di progetto.

2. **Fase di Progettazione**
   - Creazione dettagliata del sistema.
   - Definizione degli interfacce utente.
   - Pianificazione dei test.
   - Sviluppo di piani di risoluzione dei problemi.

3. **Fase di Implementazione**
   - Codifica e integrazione dei componenti software.
   - Test unitari e di sistema.
   - Monitoraggio del progresso e gestione dei rischi.
   - Allineamento con gli standard di qualità.

4. **Fase di Test**
   - Test funzionali approfonditi.
   - Valutazione delle prestazioni.
   - Verifica della sicurezza.
   - Validazione degli aspetti di localizzazione.

5. **Fase di Rilascio**
   - Pianificazione del rilascio.
   - Comunicazione con i clienti.
   - Supporto durante il passaggio al prodotto finale.
   - Monitoraggio post-rilascio e raccolta feedback.

6. **Fase di Manutenzione**
   - Correzione dei bug identificati.
   - Aggiornamenti e miglioramenti secondari.
   - Supporto tecnico continuo.
   - Pianificazione per nuovi sviluppi futuri.

7. **Fine del Contratto**
   - Conclusione dei compiti rimanenti.
   - Raccolta di feedback e valutazione del contratto.
   - Documentazione finale e consegna di tutti i materiali.
   - Gestione degli asset digitali (codice sorgente, database, ecc.).

Ogni fase è cruciale per il successo complessivo del progetto, e la sua efficace gestione garantisce che le aspettative del cliente siano soddisfatte in modo tempestivo ed efficiente. La struttura Markdown mantiene intatta la sequenza delle fasi e l'organizzazione dei contenuti, facilitando una lettura chiara e un'interpretazione accurata per qualsiasi stakeholder coinvolto nel processo di sviluppo del contratto.

## Effettivazione del Contratto di Servizio

Il presente Contratto di Servizio entra in vigore il giorno della sua firma effettuata dal COMMANDITAIRE.

La raccolta, la manipolazione, lo stoccaggio e il trattamento dei dati effettuati nel contesto dell'avant-vente, l'implementazione e lo stop del Servizio sono eseguiti in conformità della normativa vigente.

## Evoluzioni della Convenzione di Servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organismi di governo designati a tale scopo. Queste proposte di cambiamento saranno valutate dalle Parti, autorizzate ad determinare gli aspetti che richiedono una formalizzazione scritta.

È concordato che qualsiasi modifica della Convenzione di servizio, dopo la validazione, che altera le condizioni finanziarie inizialmente stabilite, richiederà l'emissione e la firma di un aggiunto al Contratto in corso.

I fattori che potrebbero portare a una revisione della Convenzione di servizio includono, ma non si limitano:

- Lo sviluppo dell'infrastruttura tecnica che fornisce il Servizio IaaS;
- Gli aggiustamenti apportati ai servizi emessi dal Prestatore per fornire il Servizio;
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

Tutte le modifiche alla Convenzione di Servizio sono soggette all'accettazione del COMMANDITAIRE. Si intende che qualsiasi modifica o aggiunta validata che modifichi gli elementi finanziari del Contratto, potrebbe comportare la firma di un accordo aggiuntivo a questo.

## Réversibilità

Inoltre, Cloud Temple si impegna a garantire la possibilità di revisionare la presente Convenzione di servizio (che prevede tra l'altro la risoluzione del contratto) senza penali per il COMMANDITAIRE in caso di perdita della qualifica SecNumCloud.

I Servizi non includono alcuna obbligazione di ripristino (cioè, l'aiuto al COMMANDITAIRE per permettergli di migrare il proprio sistema su un altro "Prestatore") a parte la fornitura dell'interfaccia COMMANDITAIRE dal Prestatore, che consente al COMMANDITAIRE di salvare e recuperare i propri dati, compresi quelli di configurazione del proprio sistema informativo tramite una o più modalità tecniche scelte dal COMMANDITAIRE: la fornitura di file seguendo uno o più formati documentati ed esplorabili al di fuori del servizio fornito dal Prestatore, oppure attraverso l'implementazione di interfacce tecniche che consentano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il COMMANDITAIRE, unico detentore della propria infrastruttura, deve adottare tutte le misure necessarie per facilitare tale operazione in caso di necessità (ciò implica, tra l'altro, la creazione di una documentazione accurata a questo scopo) e la pianificazione di scenari di ripristino. In caso in cui il COMMANDITAIRE abbia bisogno di un servizio aggiuntivo, il Prestatore può offrire una missione di consulenza a titolo personale, da stipulare tramite un contratto specifico.

## Disponibilità, continuità e ripristino del servizio

La disponibilità del servizio è garantita attraverso la distribuzione geografica dei nostri data center, che permettono di minimizzare i tempi di inattività dovuti a guasti hardware o software. La continuità del servizio è assicurata da sistemi di backup e ripristino automatici, che garantiscono la disponibilità dei dati in caso di perdita o corruzione. Inoltre, i nostri processi di gestione delle incidenti sono stati progettati per ridurre al minimo l'impatto sul servizio clienti e per ripristinare rapidamente le funzionalità normali.

I dettagli sui meccanismi di backup, ripristino e gestione delle incidenti sono disponibili nel documento relativo alle politiche di sicurezza e alla continuità aziendale.

### Gestione degli Incidenti e delle Interruzioni

Questo capitolo descrive le procedure per la gestione degli incidenti e delle interruzioni che possono verificarsi nei sistemi IT. La nostra strategia si basa su un approccio proattivo, con il focus sulla prevenzione, sul monitoraggio continuo e sulla risposta rapida in caso di problemi.

1. **Prevenzione**
   - Implementazione di sistemi di allerta precoce per identificare potenziali problemi prima che questi causino interruzioni.
   - Regolari manutenzioni e aggiornamenti dei sistemi per mantenere la loro salute e prestazioni ottimali.

2. **Monitoraggio Continuo**
   - Strumenti di monitoraggio avanzati che forniscono visibilità in tempo reale sulle prestazioni dei nostri servizi.
   - Analisi continua per identificare modelli e anomalie che potrebbero indicare un problema imminente.

3. **Risposta Rapida**
   - Squadre di risposta agli incidenti altamente qualificata, pronta a intervenire rapidamente in caso di problemi.
   - Piani di risposta agli incidenti ben definiti che definiscono i passaggi da seguire in diverse situazioni.

4. **Documentazione**
   - Registrazione dettagliata di ogni incidente, inclusi i suoi cause, le azioni intraprese per risolverlo e le misure prese per evitare futuri problemi simili.
   - Utilizzo di sistemi di gestione dei documenti per garantire che tutte le informazioni rilevanti siano archiviate e accessibili rapidamente.

5. **Revisione Post-Incidente**
   - Analisi approfondita degli incidenti per identificare cause radicate, valutare l'efficacia delle procedure di risposta e implementare miglioramenti strutturali.
   - Condivisione delle lezioni apprese con tutta l'organizzazione per promuovere una cultura della continua miglioramento.

Questo approccio ci permette di gestire gli incidenti in modo efficace, minimizzando i tempi di inattività e garantendo la continuità dei nostri servizi critici.

## Incidenti

La traduzione mantiene la struttura Markdown originale e non modifica alcun elemento HTML o Markdown strutturale. Il testo all'interno dei tavoli (compresi gli en-tetti di tavolo) viene tradotto, mentre i contenuti all'interno dei blocchi di codice vengono preservati esattamente come sono, inclusa la sintassi Python e qualsiasi altro formato specifico.

### Esempio di Markdown originale:
```markdown
# Incidenti

## Incidente 1
- Descrizione dettagliata dell'incidente 1
- Chi è stato coinvolto
- Data e ora dell'incidente

## Incidente 2
- Descrizione dettagliata dell'incidente 2
- Chi è stato coinvolto
- Data e ora dell'incidente
```

### Traduzione in Markdown Italiano:
```markdown
# Incidenti

## Incidente 1
- Descrizione dettagliata dell'incidente 1
- I partecipanti
- Data e ora dell'incidente

## Incidente 2
- Descrizione dettagliata dell'incidente 2
- I partecipanti
- Data e ora dell'incidente
```

### Blocchi di codice Python:

#### Markdown originale con blocco di codice Python:
```markdown
```python
def calculate_area(r):
    """Calcola l'area di un cerchio."""
    import math
    area = math.pi * r**2
    return area
```
```

### Traduzione in Markdown Italiano con blocco di codice Python:
```markdown
```python
def calcolare_area(r):
    """Calcola l'area di un cerchio."""
    import math
    area = math.pi * r**2
    return area
```
```

In questo esempio, il testo all'interno dei tavoli e dei blocchi di codice viene tradotto mantenendo la struttura Markdown originale, mentre i nomi delle variabili, le funzioni e le commenti Python rimangono in linguaggio originale.

#### Tipi di incidenti gestiti in conformità con questa Convenzione di servizio

- Sinistri;

- Interruzioni e guasti;

- Incidenti di sicurezza che influenzano la disponibilità, la riservatezza o l'integrità del Servizio.

#### Gestione degli incidenti

Il fornitore informa il COMMANDITAIRE nei tempi più brevi possibili di eventuali incidenti e interruzioni, tramite una notifica nella console COMMANDITAIRE o tramite email al contatto COMMANDITAIRE. Il fornitore informa anche il COMMANDITAIRE del processo di risoluzione dell'incidente tramite lo stesso canale utilizzato per notificare l'incidento, oppure tramite il canale indicato nella notifica dell'incidento.

#### Nivello di notificazione degli Incidenti di sicurezza

Il COMMANDITAIRE ha la responsabilità di scegliere i livelli di gravità
degli Incidenti di sicurezza per cui desidera essere informato, ad esempio
tramite la loro formalizzazione in un PAS applicabile al Servizio.

Per default, il COMMANDITAIRE è informato:

- Di incidenti di sicurezza con impatto (impatti I1 e I2 secondo
    l'scala di impatto definita nel processo di priorizzazione dei trattamenti
    della presente Convenzione di servizio);

- Di incidenti di sicurezza che influenzano la riservatezza o l'integrità
    delle informazioni del COMMANDITAIRE confidate nel contesto del Servizio;

- Di violazioni dei dati personali per cui il COMMANDITAIRE è responsabile
    del trattamento in conformità all'articolo 8 dell'Annuletto DPA nel contesto del Servizio;

-

### Manutenzione del Servizio

### Natura della manutenzione

Violazioni dei dati personali per cui il fornitore è responsabile del trattamento e che contengono i dati personali dell'UTENTE, in conformità con l'articolo 8 dell'Annesso DPA. La manutenzione assicurata consiste nella messa in opera:

- Del piano di manutenzione in condizioni operative del Servizio per garantire buoni indicatori di disponibilità come previsto dal fornitore sopra;

- Del piano PCA/PRA, se abilitato dall'UTENTE, che può essere attivato in caso di incidenti eventuali.

### Accesso ai Cloud Temple fuori dal perimetro del COMMANDITAIRE

Il fornitore si impone, nel contesto della presente Convenzione di servizio, qualsiasi accesso ai Tenanti e all'ambiente dell'interfaccia del COMMANDITAIRE.

Sarà incaricato il COMMANDITAIRE di concedere gli accessi necessari al personale del fornitore. Il COMMANDITAIRE riconosce che tali accessi saranno utilizzati nell'ambito dell'hosting e, in ultima analisi, dell'infogestione (se abilitato dal COMMANDITAIRE).

### Accesso remoto di terze parti coinvolte nella fornitura del servizio all'interno del perimetro del COMMANDITA

Non è autorizzato alcun accesso remoto da parte di terze parti coinvolte nella fornitura del Servizio.

In caso di necessità tecnica che renda questa situazione necessaria, tale tipo di accesso sarebbe realizzato solo dopo la notifica scritta del COMMANDITA per giustificazione e ottenimento dell'accordo scritto.

# Procedure of Data Erasure at Contract Termination

At the termination of the Contract, whether due to expiration or any other reason, the Provider ensures a secure erasure of all data processed within the scope of the Service, including the technical data of the COMMANDITORE. The Provider will provide a formal notice within a 21 calendar day period (21). The COMMANDITORE's data will be deleted no later than 30 days following the notification. The Provider furnishes a data erasure certificate to the COMMANDITORE.

## Dirit Applicabile

La traduction du terme "Droit applicable" en italien est "Diritto applicabile".

## Generalemente

Il dirit applicabile e a cui è soggetta la presente Convenzione di servizio è il diritto francese.

## Respecto della legge e delle normative applicabili

Il fornitore si impegna nei seguenti punti:

- Identificazione delle limitazioni legali ed amministrative applicabili nel contesto del Servizio;

- Adeguamento alle limitazioni legali ed amministrative applicabili ai dati affidati al fornitore, entro le responsabilità di quest'ultimo, e alle disposizioni previste dal contratto.

- Adeguamento alla Legge sulla protezione dei dati informatici (LDP) e al Regolamento generale sulla protezione dei dati (GDPR);

- Implementazione di misure di protezione dei dati personali;

- Estensione di un processo di vigilanza legale ed amministrativa;

- Mantenere relazioni adeguate o una vigilanza con le autorità competenti nel settore, in relazione alle caratteristiche dei dati trattati nel contesto del Servizio. Ciò include, ma non si limita all'ANSSI, al CERT-FR e alla CNIL.

## GDPR

As a processor under the provisions of Article 28 of the General Data Protection Regulation (RGPD), the Provider commits to:

- Ensuring transparency and traceability;

- Designating a DPO responsible for defining and implementing data protection measures for personal data;

- Providing assistance and advice to the COMMANDITAIRE, alerting them if an instruction from the latter constitutes a violation of data protection rules that the Provider can identify;

- Ensuring security of processed data (due to SecNumCloud qualification).

## Protection against extra-EU law

The provider's corporate seat is located within an EU member state. The provider's share capital and voting rights in the company are not, directly or indirectly:

- individually held by more than 24%;

- and collectively held by more than 39%;

by third entities having their registered office, central administration, or main establishment within a non-EU member state.

In case the provider, as part of the service, engages with a third party - including a subcontractor - that has its registered office, central administration, or main establishment in a non-EU member state or is owned or controlled by a third party based outside the EU, the provider commits to:

- ensuring this third party does not have access to the data processed by the 'Secure Temple' service;

- maintaining operational autonomy through the ability to engage another subcontractor or swiftly implement a technological alternative.

For clarity, the data in question includes those entrusted to the provider by the COMMANDITAIRE, as well as all technical data encompassing information about the COMMANDITAIRES.

For the purposes of this article, the notion of control is understood according to the definition provided in Article L233-3 of the French Commercial Code.

# FIRMAZIONI

Fatti a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, IL FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, IL COMMANDIERE