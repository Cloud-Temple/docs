---
title: Convenzione di Servizio SecNumCloud OpenIaaS
---

# OPENIaaS SERVICE CONVENTION

| Recipients: | **CLIENT** |
| :--- | :--- |
| **Document Reference** | CT.AM.JUR.ANX OPENIaaS-202530101_v3.0.docx_JJJJ AAAA |
| **Your Contacts** | *First Name* *Last Name* Account Manager email: *firstname.lastname*@cloud-temple.com |
| **Last Updated Date** | 01/17/2025 |
| **Contractual Validation Date** | Day DD YYYY |

------------------------------------------------------------------------

| Version | Date | Action | Author |
| :--- | :--- | :--- | :--- |
| v0.1 | 06/07/2022 | Initial Draft | Lorena ALCALDE |
| v0.2 | 09/14/2022 | Enrichment | Lorena ALCALDE |
| v1.0 | 12/30/2022 | Integration of Indicators | Lorena ALCALDE |
| v1.1 | 01/23/2023 | Footer Update | Lorena ALCALDE |
| v1.2 | 05/22/2023 | Enrichment | Lorena ALCALDE |
| v1.3 | 06/29/2023 | Enrichment | Lorena ALCALDE |
| v1.4 | 11/06/2023 | Capital Update and Enrichment | Lorena ALCALDE |
| v1.5 | 11/30/2023 | Enrichment | Lorena ALCALDE |
| v1.6 | 03/21/2024 | Enrichment | Lorena ALCALDE |
| v2.0 | 03/29/2024 | Compliance Adjustments SNC | Nicolas ABRIOUX |
| v2.0 | 04/03/2024 | Publication | Lorena ALCALDE |
| v3.0 | 01/17/2025 | Enrichment | Emeline CAZAUX |

# Preliminare e Glossario

## Preliminare

Il presente documento formalizza il Contratto di Servizio associato al servizio OpenIaaS in corso di qualifica SecNumCloud.

Il Servizio è in corso di qualifica SecNumCloud (vedi attestazione che sarà in Allegato).

Il presente contratto di servizio integra e completa le Condizioni Generali di Vendita e Utilizzo del Fornitore. Si intende che i documenti contrattuali debbano essere interpretati in modo coerente tra loro. In caso di contraddizione o divergenza tra i termini dei documenti contrattuali, questi avranno prevalenza l'uno sull'altro nell'ordine seguente:

1. Condizioni Generali di Vendita e Utilizzo (CGVU)

2. Contratto di Servizio SecNumCloud IaaS

3. Contratto di Servizio SecNumCloud OpenIaaS

4. Contratto di Servizio SecNumCloud PaaS

5. Contratto di Servizio specifico - Bare Metal

6. Contratto specifico particolare

7. Piano di Assicurazione Sicurezza (PAS)

8. Condizioni Particolari di Utilizzo (CPU)

9. Accordo sulla Protezione dei Dati

## Glossario

Nel presente Accordo di servizio, il **Committente**, il **Fornitore** e le **Parti** sono identificati nel Contratto al quale è allegato il presente Accordo di servizio.

Le espressioni seguenti utilizzate nel presente Accordo di servizio saranno interpretate conformemente alle definizioni attribuite loro di seguito:

- **Cambiamento**: ogni aggiunta, modifica o rimozione che influisca sul Servizio, autorizzata, pianificata o gestita.

- **Cambiamento standard**: cambiamento oggetto di una procedura, le cui modalità di messa in produzione e gli impatti (inclusi quelli finanziari) sono noti e accettati in anticipo dalle Parti. È quindi integrato nel catalogo dei cambiamenti standard e, a seconda dei casi, può avere una GTI e una GTR.

- **Contratto**: indica il contratto sottoscritto dal Committente presso il Fornitore per consentire al Committente di fruire del Servizio, al quale è allegato il presente Accordo di servizio.

- \***Accordo di servizio**: questo documento, redatto nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e di Utilizzo (CGVU), e conforme ai requisiti del Riferimento SecNumCloud.

- **Richiesta di servizio**: richiesta di evoluzione oggetto di una procedura, la cui realizzazione: i) non modifica la CMDB, ii) le modalità operative, i costi e i rischi sono noti e accettati in anticipo e non richiedono modalità di ritorno specifiche, iii) la realizzazione è soggetta a un accordo sul livello di servizio e inclusa nella tariffa contrattuale quando realizzata in ore lavorative e giorni lavorativi.

- **Disponibilità**: capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi sul Livello di Servizio (SLA).

- **Dati tecnici**: comprende l'insieme dei dati gestiti per erogare il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i log dell'infrastruttura tecnica, la configurazione degli accessi, l'archivio, i certificati\...

- **Evento**: un "evento" è ogni evenienza rilevabile o identificabile che possa avere rilevanza per la gestione del Servizio.

- **Hypervisor**: sistema operativo che permette l'esecuzione di macchine virtuali su un nodo di calcolo.

- **Incidente**: ogni evenienza imprevista che perturba il normale funzionamento del Servizio o compromette la sicurezza dei dati.

- **Incidente di sicurezza**: ogni evenienza nel perimetro del Servizio:

  - di natura intenzionalmente maliziosa;
  - di natura accidentale che arrechi danno all'integrità, alla riservatezza o alla tracciabilità del Servizio o dei dati del Committente;
  - che comprometta le misure di sicurezza esistenti. I danni alla Disponibilità di origine non maliziosa non sono considerati come un Incidente di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

- **Interfaccia Committente**: interfaccia di amministrazione del Servizio messa a disposizione del Committente dal Fornitore, che raggruppa una console web di amministrazione e un'API.

- **Messa in produzione**: azione(oni) di amministrazione per la realizzazione del Cambiamento quando è approvato (il cambiamento, nel senso di ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).

- **Problema**: causa di uno o più incidenti ricorrenti, causa di un incidente potenziale (situazione a rischio) che richiede un'analisi e una risoluzione per prevenire la ricorrenza.

- **Regione**: indica un insieme geograficamente delimitato di zone di disponibilità cloud, che fornisce servizi di rete, calcolo e archiviazione per ottimizzare la latenza, le prestazioni e la conformità normativa locale.

- **Servizio OpenIaaS**: indica il servizio IaaS basato su tecnologia open source, in corso di qualifica SecNumCloud, erogato dal Fornitore al Committente da infrastrutture tecniche gestite dal Fornitore, come descritto nella sezione « Descrizione del Servizio » del presente Accordo di servizio.

<!-- -->

- **Sinistro**: indica un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni significativi alla Parte colpita.

<!-- -->

- **Supervisione**: sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di diverse tipologie di dati quali misurazioni e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che spetta alle operazioni di Amministrazione.

- **Tenant**: un'istanza isolata riservata a un utente o a un gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

- **Zona di Disponibilità (AZ) (Availability zone)**: una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire elevata disponibilità e resilienza dei servizi attraverso una distribuzione geografica delle risorse.

# Acronimi

| Acronimo | Definizione |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Comitato consultivo sui cambiamenti |
| **CMDB** | Configuration Management Database -- Database di gestione delle configurazioni |
| **COPIL** | Comitato di pilotaggio |
| **COSTRAT** | Comitato strategico |
| **COPROJ** | Comitato Progetto |
| **DB** | Database (base di dati) |
| **DPA** | Data Protection Agreement |
| **DRP** | Disaster Recovery Plan (PRA) (Piano di ripristino dell'attività) |
| **GTE** | Garanzia di Tempo di Escalation |
| **GTI** | Garanzia di Tempo di Intervento |
| **GTR** | Garanzia di Tempo di Risoluzione |
| **ITIL** | Information Technology Infrastructure Library - Buone pratiche per la gestione dei sistemi informativi |
| **IaaS** | Infrastructure as a Service |
| **MCO** | Mantenimento in condizione operativa |
| **MOA** | Maitrise d'Ouvrage |
| **MOE** | Maitrise d'Œuvre |
| **MSP** | Managed Services Provider |
| **OS** | Operating system (sistema operativo) |
| **PAQ** | Piano di Assicurazione Qualità |
| **PaaS** | Platform as a Service |
| **PAS** | Piano di Assicurazione Sicurezza |
| **PASSI** | Fornitore di Audit di Sicurezza dei Sistemi Informativi |
| **RFC** | Request For Change -- Richiesta di cambiamento |
| **RGPD** | Regolamento Generale sulla Protezione dei Dati (personali) |
| **RPO** | Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistro |
| **RTO** | Recovery Time Objective -- Tempo di ripristino del servizio in caso di Sinistro |
| **SDM** | Service Delivery Manager |
| **SLA** | Service Level Agreement -- Accordo sui livelli di servizio |
| **SNC** | SecNumCloud |
| **SOC** | Security Operation Center |
| **TMA** | Terza Manutenzione di Applicazione |
| **UO** | Unità d'Opera |
| **VABE** | Validazione di Aptitudine alla Buona Esplorabilità |
| **VABF** | Validazione di Aptitudine al Buon Funzionamento |
| **VM** | Virtual Machine (Macchina virtuale) |
| **VSR** | Validazione di Servizio Regolare |

# Oggetto del presente Contratto di servizio

Il presente Contratto di servizio stabilisce i termini e le condizioni secondo cui il Prestatore si impegna a fornire il Servizio al COMMITTENTE. Il suo scopo è:

- Definire le prestazioni attese dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

- Enunciare gli obblighi del Prestatore al fine di soddisfare i livelli di servizio concordati;

- Individuare le normative regolamentari applicabili specificamente al Servizio fornito;

- Garantire uniformità e integrità nella valutazione della qualità del Servizio;

- Assicurare l'eccellenza dei servizi forniti, valutata tramite indicatori quantitativi di performance.

Si stabilisce che, in caso di revoca della qualifica SecNumCloud al Prestatore, il Contratto potrà essere risolto di diritto, senza incorrere in penali, da parte del COMMITTENTE. In tale evenienza, il Prestatore si impegna a informare tempestivamente il COMMITTENTE della revoca, inviando una notifica ufficiale tramite lettera raccomandata con avviso di ricevuta.

Si precisa che una modifica o un aggiustamento della qualifica SecNumCloud non sarà interpretato come una revoca della qualifica iniziale.

# Audit

Il Fornitore si impegna a consentire al COMMITTENTE, o a qualsiasi revisore terzo non concorrente del Fornitore designato da quest'ultimo, di consultare l'intero insieme dei documenti necessari per attestare il rispetto integrale degli obblighi connessi alla conformità alle disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), agevolando così l'esecuzione di revisioni.

Con l'accettazione del presente Contratto di servizio, il COMMITTENTE concede il proprio esplicito consenso a:

1. L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) e all'ente qualificatore competente per avviare la verifica della conformità del Servizio e del relativo sistema informativo al quadro normativo SecNumCloud.
2. Un fornitore di revisione della sicurezza dei sistemi informativi, appositamente qualificato PASSI e espressamente designato dal Fornitore, per effettuare revisioni di sicurezza relative al Servizio.

# Descrizione del Servizio

## Modello di responsabilità condivisa

Il Servizio offerto dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, le quali si allineano al principio di responsabilità condivisa presentato nel riferimento SecNumCloud:

- Fornitura di risorse di calcolo (compute);

- Messa a disposizione di spazi di archiviazione;

- Accesso a servizi di connettività di rete e internet;

- Offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nell'ambito del Servizio è illustrato al §7.1.

Si intende che il Fornitore metterà in atto la propria esperienza professionale per erogare le Prestazioni secondo le migliori pratiche e nel rispetto dei requisiti del riferimento SecNumCloud.

## Dettagliata presentazione del perimetro del Servizio

| Servizio | Descrizione |
| :--- | :--- |
| **Compute** | Risorse di calcolo del Tenant COMMITTENTE |
| **Storage** | Dati di produzione del Tenant COMMITTENTE |
| **Archiviazione oggetti S3** | messa a disposizione di un'infrastruttura di archiviazione oggetti sovrana, multi-AZ e compatibile con le API S3 standard. |
| **Backup** | Su sottoscrizione all'Archiviazione oggetti S3 |
| **Infrastruttura di rete** | Risorse di rete del Tenant COMMITTENTE |
| **Console COMMITTENTE** | Il servizio che consente al COMMITTENTE di accedere al proprio servizio OpenIaaS e di gestirlo tramite l'interfaccia Console |
| **Supporto** | Il servizio di supporto che accompagna i servizi precedenti e soltanto questi (\*) |

\_(\*) Nel limite del perimetro del Servizio in fase di qualifica  
SNC e delle responsabilità del Fornitore in materia\_

### Infrastrutture Datacenter

Il Servizio comprende la messa a disposizione, per ogni Zona di Disponibilità, dei servizi qualificati di seguito indicati:

- Sito datacenter situato in Francia per la Regione FR, conforme alle più recenti normative tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 dell’Uptime Institute;
- Messa a disposizione di sale tecniche all’interno di datacenter dedicati all’installazione degli apparati tecnici indispensabili alla produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio e altri componenti necessari;
- Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, che assicurano la continuità del servizio;
- Fornitura di servizi di climatizzazione, regolati secondo le norme e le raccomandazioni dei produttori degli apparecchi, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
- Supervisione continua e metrologia dettagliata, che consentono un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore garantisce la messa a disposizione di servizi avanzati di rilevamento e spegnimento incendi, progettati per individuare e neutralizzare efficacemente qualsiasi innesco di fuoco all’interno delle installazioni. Tali sistemi sono essenziali per garantire la sicurezza degli apparati e dei dati. Comprendono rilevatori di fumo ad alta precisione e dispositivi di spegnimento in grado di agire rapidamente senza danneggiare l’attrezzatura informatica. Questo servizio è cruciale per prevenire i rischi di incendio, ridurre al minimo i danni potenziali e garantire la continuità delle operazioni.

Il Committente è informato che tutte le procedure e le misure di sicurezza implementate, incluse le verifiche annuali di commutazione sui gruppi elettrogeni, sono fondamentali per garantire la continuità e l’integrità dei servizi forniti. Queste pratiche sono progettate per ridurre al minimo i rischi di guasto e assicurare una risposta ottimale in caso di incidente. Accettando tali condizioni, il Committente riconosce l’importanza di tali misure e si impegna a collaborare pienamente per facilitarne l’implementazione. Il Committente è inoltre invitato a prendere conoscenza delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione dei rischi.

### Software infrastructure for Service management

The Provider supplies the COMMANDITAIRE with the administration console and the API necessary for using the Service. The Provider undertakes to maintain this administration console and API in optimal operational condition and to ensure their continuous security. The administration console and API are collectively referred to as the « COMMANDITAIRE interface ».

The Provider alerts the COMMANDITAIRE that abnormal use of the COMMANDITAIRE interface, particularly in the case of command API overload (hammering), may trigger automatic security measures resulting in the blocking of access to the command APIs or to the Service. It should be emphasized that this situation does not constitute Service unavailability, but rather a protective action taken to safeguard the Service and the Provider’s infrastructure; therefore, the COMMANDITAIRE may not consider it as an unavailability in its calculations.

Furthermore, the Provider informs the COMMANDITAIRE that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITAIRE submits identical requests at a higher frequency, their rejection cannot be interpreted as Service unavailability.

### Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, degli apparati necessari all'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Ciò include:

- La fornitura dei chassis tecnici necessari al corretto funzionamento delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e distribuite secondo le zone di disponibilità scelte da quest'ultimo. Si precisa che tali lame di calcolo sono esclusivamente dedicate al COMMITTENTE;
- La messa a disposizione di sistemi operativi di tipo hypervisor, nonché la garanzia del mantenimento in condizioni operative e sicure dell'infrastruttura software necessaria al controllo di tali sistemi operativi. È opportuno sottolineare che, anche se il Prestatore è responsabile della manutenzione operativa e della sicurezza complessiva del Servizio, non possiede conoscenze specifiche relative agli ambienti di produzione del COMMITTENTE né alle esigenze connesse ai suoi carichi di lavoro. Di conseguenza, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, azione che potrebbe richiedere un riavvio, ricade interamente sul COMMITTENTE. Tale operazione può essere eseguita tramite l'Interfaccia COMMITTENTE.

La scelta del modello di lama di calcolo, selezionato tra il catalogo proposto dal Prestatore, ricade interamente sulla responsabilità del COMMITTENTE.

### Infrastruttura di archiviazione

Il servizio prevede la fornitura al COMMITTENTE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), che offre diversi livelli di prestazioni. Tale servizio include:

- L'implementazione e il mantenimento in condizioni operative e di sicurezza della rete SAN dedicata;
- L'installazione e la gestione delle baie di archiviazione condivise tra i clienti, compreso il loro mantenimento in condizioni operative e di sicurezza, la supervisione e la metrolgia;
- La messa in opera di sistemi automatizzati per l'allocazione delle LUN (Logical Unit Numbers) di archiviazione dedicate all'uso del COMMITTENTE, conformemente ai volumi sottoscritti dal COMMITTENTE.

### Architettura di rete globale

Il Prestatore attua, nell'ambito del Servizio, una rete globale che consente al COMMITTENTE di rendere accessibili i propri sistemi ospitati. Tale servizio comprende:

- La fornitura, il mantenimento in condizioni operative e di sicurezza di tutte le connessioni in fibra ottica che interconnettono le diverse Zone di disponibilità;

- La fornitura, il mantenimento in condizioni operative e di sicurezza degli apparati tecnici necessari al corretto funzionamento della rete e all'isolamento tra i diversi clienti.

L'interconnessione di rete del Tenant COMMITTENTE con Internet o con reti private, nonché gli apparati di rete, i collegamenti degli operatori e altri componenti tecnici che realizzano tale interconnessione, non rientrano nel perimetro del Servizio. Tale interconnessione di rete viene implementata conformemente alle disposizioni previste dal Contratto.

### Backup Infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup service, designed to protect its virtual machines. The Provider ensures the operational readiness and security of this backup service.

The Provider guarantees that the CLIENT's backups will be stored outside the availability zone of the workloads being backed up, provided that the CLIENT has subscribed to the appropriate Work Units.

This backup service is limited to backing up virtual machines and the topology configurations of the OpenIaaS environment of the CLIENT's Tenants within the scope of the Service. The development and implementation of an adequate backup policy by the CLIENT depend on the subscription to specific Work Units. Therefore, it is the CLIENT's responsibility to ensure the availability of the necessary technical resources with the Provider to implement its backup policy or adjust it according to the available resources.

The Provider undertakes to notify the CLIENT in case of capacity constraints and to provide advisory assistance for resource optimization. The Provider's obligations are limited to implementing the backup policy requirements expressed by the CLIENT, within the scope of the subscribed resources.

### Implementation of Business Continuity or Disaster Recovery Solutions

The Provider supplies the CONTRACTOR with all the necessary technical solutions to ensure optimal distribution of its resources across multiple Availability Zones. It is the CONTRACTOR's responsibility to effectively manage this resource distribution, for which it has access to the tools provided by the Provider specifically designed for this purpose.

## Limitazioni dei servizi nel modello OpenIaaS in fase di qualifica

### Managed Services in RUN

It is important to note that the following are excluded from the Service:

- Hosting of physical components of the CUSTOMER;

- Network interconnection of the CUSTOMER's Tenant, to the Internet or to private networks, including operator links;

- Any managed service or TMA (Third-Party Managed Application);

- Any support related to virtual machines at the OS level and above in the IaaS responsibility stack, even if it involves only monitoring.

That said, the CUSTOMER is in no way precluded from using such services through the Provider’s MSP offering to perform managed services on its Tenants. These services will then not be governed by the present Service Agreement and its bilateral commitments/clauses.

### Configurazione di emergenza

Per impostazione predefinita, il Fornitore provvede alla configurazione delle risorse del IaaS per il COMMITTENTE riservando le risorse e configurando i deployment per utilizzare le Zone di disponibilità. Spetta al COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia COMMITTENTE.

### Configurazione del backup

Il servizio di backup si conclude con il backup delle macchine virtuali e delle configurazioni di topologia che rappresentano l'ambiente OpenIaaS dei Tenant del COMMITTENTE nel quadro del Servizio.

Il servizio di backup e il completamento della politica di backup del COMMITTENTE sono soggetti alla sottoscrizione di spazio di archiviazione sul mass storage necessario per garantire il servizio. È quindi responsabilità del COMMITTENTE sottoscrivere presso il Prestatore i mezzi tecnici necessari per garantire la politica di backup nel proprio perimetro informatico, oppure adattare la politica di backup ai mezzi messi in atto. Il Prestatore si impegna a informare il COMMITTENTE in caso di limitazioni di capacità tecnica.

Il Prestatore metterà in atto i mezzi tecnici e umani necessari per il backup del sistema ospitato, entro i limiti delle risorse sottoscritte dal COMMITTENTE.

Inoltre, nei casi in cui i perimetri non siano coperti dal Prestatore, spetta al COMMITTENTE definire la propria strategia di backup e configurare autonomamente i backup delle VM, oppure presentare una Richiesta di servizio al Prestatore affinché venga attivata la configurazione dei backup per i server fisici, qualora il COMMITTENTE disponga di un contratto di servizio gestito che consenta al Prestatore di agire tramite l'interfaccia COMMITTENTE, ovvero la console di amministrazione messa a disposizione nel quadro della presente Convenzione di servizio e dotata di funzionalità per configurare i backup.

Inoltre, questo servizio si impegna esclusivamente a tradurre, tramite la configurazione tramite l'interfaccia COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per ragioni di flessibilità dell'offerta del Prestatore, il COMMITTENTE ha la possibilità di associare una politica di "no backup" a determinate VM. In tal caso, spetta al COMMITTENTE assumersi tale scelta. Il Prestatore non effettuerà il backup delle VM associate alla politica "no backup". Il Prestatore avvisa il COMMITTENTE che scegliere la politica "no backup" o optare per un backup manuale espone il COMMITTENTE a una perdita definitiva dei dati in caso di incidente sulle layer inferiori o su quelle dipendenti dalla sua responsabilità nel modello IaaS. In un tale caso, sarà impossibile ritenere il Prestatore responsabile del ripristino dei dati, poiché non ci sarà nulla da ripristinare. Il Prestatore raccomanda di effettuare sempre il backup delle VM.

Per quanto riguarda qualsiasi aspetto relativo al sistema operativo installato su una macchina virtuale e qualsiasi software o programma eseguito "sopra il sistema operativo", spetta al COMMITTENTE eseguire le operazioni di amministrazione e supervisione all'interno dell'Unione Europea, qualora desideri garantire che tutta la verticalità dei livelli del SI sia gestita e operata dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Prestatore, come indicato nella sezione «Modello di responsabilità condivisa» della presente Convenzione di servizio.

## Implementazione del servizio

### Requis tecnici

Per l'implementazione del Servizio, il COMMITTENTE riconosce di dover:

- Funzionare con una virtualizzazione di tipo Xen nelle versioni supportate dall'editore e fornite dal Prestatore nell'ambito del Servizio;

- Utilizzare, tramite il Prestatore, lo strumento di backup;

- Dichiarare indirizzi IP fissi da cui il Prestatore autorizzerà l'accesso all'interfaccia COMMITTENTE (filtro tramite lista bianca). Le modifiche a tale lista dovranno essere effettuate tramite il menu apposito nella console o tramite Richieste di servizio per le modifiche successive. All'attivazione del servizio, il Prestatore sarà stato informato almeno di un indirizzo IP come descritto.

## Service location in France

It is specified that none of the operations or physical components involved in the provision of the Service, the subject of this Service Agreement, are located outside the European Union.

This specifically includes support, operational monitoring, and security monitoring (SOC) of the technical infrastructure delivering the Service. As a result, all storage, administration tasks, monitoring, and processing are carried out in France.

### Localizzazione dei datacenter che ospitano il Servizio

In assenza delle operazioni dei collaboratori e delle agenzie del Fornitore, tutte le operazioni di produzione (comprese la memorizzazione e l'elaborazione dei dati) e i componenti tecnici che erogano il Servizio sono ubicati nei datacenter situati in Francia.

### Location of Cloud Temple agencies operating the service

The Cloud Temple staff members involved in the scope of the Service operate from Cloud Temple agencies, all located exclusively in France. These agencies are situated in France, in Tours, Lyon, Caen, and Paris La Défense.

The CLIENT is informed of the possibility for Cloud Temple employees to work remotely. However, the PROVIDER guarantees the same level of security regarding remote access, particularly concerning VPN access. These remote connections are implemented in compliance with the requirements of the SecNumCloud reference framework.

## Support

### Natura del supporto che accompagna il servizio

Il Prestatore fornisce un servizio di supporto tecnico finalizzato ad assistere il COMMESSARIO nella gestione, nel troubleshooting e nell'ottimizzazione delle risorse implementate. Tale servizio copre un ampio spettro di attività, dall'assistenza alla configurazione iniziale dei servizi fino al supporto tecnico avanzato per la risoluzione di problemi specifici.

Di seguito viene descritta la caratteristiche e le funzionalità del servizio di supporto:

- Assistenza all'implementazione iniziale dell'utilizzo del Servizio;
- Assistenza alla risoluzione di incidenti;
- Assistenza alla risoluzione di problemi;
- Monitoraggio e consulenza sull'ottimizzazione dell'infrastruttura tecnica.

Nel quadro del servizio di supporto, il Prestatore non sostituisce il COMMESSARIO nell'utilizzo del Servizio. Il COMMESSARIO rimane interamente responsabile della configurazione, dell'operatività delle proprie VM e dei propri Tenant, nonché della gestione di tutti gli elementi (dati e applicazioni incluse) che ha archiviato o installato sulle infrastrutture del Prestatore. Il servizio di supporto tecnico è fornito in conformità alle Condizioni Generali di Vendita e di Utilizzo, con il Prestatore tenuto a un obbligo di mezzi.

Il COMMESSARIO si impegna ad utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti presso il Prestatore e dall'interpellare le squadre del Prestatore nei confronti dei propri clienti o di terzi non inclusi nel Contratto. Il Prestatore si riserva il diritto di rifiutare qualsiasi richiesta di servizio che non rispetti tali criteri.

Il livello di impegno del supporto è subordinato alla sottoscrizione delle unità di lavoro di supporto associate.

### Richiesta del servizio di supporto tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket tramite la console COMMANDITAIRE ed è disponibile durante gli orari normali di ufficio, esclusi i giorni festivi (8h - 18h; lunedì - venerdì; calendario e orari francesi). Per le emergenze verificatesi al di fuori degli orari lavorativi, in particolare per gli incidenti che influenzano significativamente la produzione, il servizio di turno può essere contattato tramite un numero comunicato al COMMANDITAIRE all'attivazione del Servizio.

Per ogni richiesta o incidente, è obbligatorio creare un ticket presso il supporto del Fornitore. L'attivazione di questo ticket, contenente tutte le informazioni necessarie, è fondamentale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di incidente, sia tramite la console di gestione che a seguito di una chiamata telefonica, viene automaticamente creato un ticket. Nella segnalazione di un incidente, è essenziale che il COMMANDITAIRE fornisca al Fornitore il maggior numero possibile di dettagli sul problema riscontrato. Tale procedura è cruciale per consentire una valutazione adeguata della situazione, la sua priorità e un'analisi efficace.

Il COMMANDITAIRE riceve quindi una conferma via e-mail, che indica la creazione del ticket e il relativo numero univoco. Il COMMANDITAIRE può consultare lo stato e la cronologia delle proprie richieste e segnalazioni di incidenti direttamente dalla console di gestione.

### Processo di gestione degli Incidenti

In caso di segnalazione di un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il COMMITTENTE deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie ed eseguendo i test richiesti. Il Fornitore può accedere ai Servizi del COMMITTENTE per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono ritenuti funzionanti e l'Incidente non è imputabile al Fornitore, il COMMITTENTE ne sarà informato. Su richiesta del COMMITTENTE, il Fornitore può proporre Servizi Professionali per identificare l'origine del problema, fatturabili previo accordo, a tranches di 30 minuti.

Nel caso in cui l'Incidente sia attribuibile al Fornitore o a uno dei suoi subappaltatori, quest'ultimo completa la diagnosi e procede alla ripristino del Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e sui dati del Fornitore, considerati probanti per accordo delle Parti.

### Processo di priorizzazione dei trattamenti

La determinazione del livello di priorità di un ticket si basa su un'analisi matriciale che valuta l'impatto dell'incidente e il suo grado di criticità:

- I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione |
| :--- | :--- |
| **Impatto I1** | Il o i servizi del Fornitore sono interrotti |
| **Impatto I2** | Il o i servizi del Fornitore sono degradati |
| **Impatto I3** | Il o i servizi del Fornitore sono attualmente stabili, ma mostrano segni di possibile declino a lungo termine |

- I livelli di criticità sono definiti come segue:

| Livello di criticità | Descrizione |
| :--- | :--- |
| **Criticità C1** | Il o i servizi del Fornitore si degradano a una velocità preoccupante |
| **Criticità C2** | Il o i servizi del Fornitore si deteriorano progressivamente nel tempo |
| **Criticità C3** | Il o i servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative |

- In base a un'analisi approfondita della situazione, tenendo conto degli elementi determinanti per l'Impatto e la Criticità, viene assegnata una priorità al ticket conformemente alla matrice di decisione riportata di seguito:

| Livello di impatto / Livello di criticità | Impatto I1 | Impatto I2 | Impatto I3 |
| :--- | :--- | :--- | :--- |
| **Criticità C1** | Priorità **P1** | Priorità **P2** | Priorità **P3** |
| **Criticità C2** | Priorità **P2** | Priorità **P3** | Priorità **P4** |
| **Criticità C3** | Priorità **P3** | Priorità **P4** | Priorità **P5** |

Gli impegni relativi al livello di servizio corrispondenti a ciascun livello di priorità sono dettagliati nel capitolo successivo.

### Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno nella lingua francese. Il supporto può inoltre essere fornito nella lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di servizio di infrastruttura qualificata SecNumCloud sono situate nell'Unione Europea.

# Commitments and Service Levels

The Provider undertakes to ensure continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal operation.

Service unavailability, subject to a performance indicator, is recognized as soon as it is identified by the Provider's monitoring system, or following notification by a user of the CLIENT. The start of unavailability is set at the earliest of these two events, ensuring accurate and fair calculation of the downtime duration.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and a faithful measurement of the interruption duration.

## Impegni di disponibilità dell'infrastruttura

Il Prestatore si impegna a mantenere un livello di disponibilità e prestazioni conforme agli standard definiti per ogni periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLAs) si applicano a condizione che il COMMITTENTE implementi i propri sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza del rispetto di tali condizioni da parte del COMMITTENTE, quest'ultimo non potrà richiedere l'applicazione degli SLAs corrispondenti, i quali sono specificamente identificati da un asterisco (\*). L'accesso agli SLAs avviene tramite l'interfaccia COMMITTENTE. Le misurazioni sono calcolate mensilmente:

- \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilità della potenza di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilità del storage: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 3 : IC-INFRA_SNC-03** -- Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 5 : IC-INFRA_SNC-05** -- Accesso a Internet: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.

***Osservazioni*** :

- *Di fronte a un attacco distribuito di tipo denial-of-service (DDoS), il Prestatore si riserva il diritto di modificare la propria configurazione di routing Internet per limitare l'impatto dell'attacco e proteggere la propria infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE viene oggetto di attacco, il Prestatore può ricorrere alla tecnica del blackholing tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP interessato a monte presso i propri fornitori, al fine di proteggere sia le risorse del COMMITTENTE che quelle di altri COMMITTENTI e l'infrastruttura del Prestatore. Il Prestatore incoraggia vivamente il COMMITTENTE ad adottare misure simili, come l'utilizzo di software firewall per applicazioni web disponibili sul mercato, e a configurare attentamente i propri gruppi di sicurezza tramite l'API di comando.*

- *Il Prestatore insiste sulla necessità per il COMMITTENTE di ridurre al minimo le aperture di flussi, evitando in particolare di rendere accessibili i porti di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) da tutto Internet (sottorete 0.0.0.0/0), nonché i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## Disponibilità dell'interfaccia COMMITTENTE

- SLA 6: IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del servizio: una disponibilità garantita del 97%, assicurata in continuo, 24 ore su 24 e 7 giorni su 7.
- SLA 7: IC-INFRA_SNC-07 -- Accesso alle API di gestione del servizio: una disponibilità del 99,9%, calcolata su base 24 ore su 24, 7 giorni su 7.

## Impegno di disponibilità del supporto

- **SLA 8: IC-INFRA_SNC-08** -- Ecco gli impegni di prestazione del supporto tecnico del Fornitore per gli incidenti, esclusi i periodi di manutenzione pianificata:

| Priorità | Garanzia di tempo di intervento (GTI) | Obiettivo di prestazione |
| :--- | :--- | :--- |
| **Priorità P1** | 30 min | 95% |
| **Priorità P2** | 2 ore | 90% |
| **Priorità P3** | 4 ore | 90% |
| **Priorità P4** | 24 ore | 85% |
| **Priorità P5** | 48 ore | 85% |

- **SLA 9: IC-INFRA_SNC-09** -- Ecco gli impegni di prestazione del supporto tecnico del Fornitore per le richieste di servizio:

| Tipo | Garanzia di tempo di intervento (GTI) | Obiettivo di prestazione |
| :--- | :--- | :--- |
| **Richiesta di servizio** | 4 ore | 90% |

*Nota*:

- *Il termine per la Garanzia di Tempo di Intervento (GTI) è calcolato a partire dalla differenza tra l'istante in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
- *L'indagine sugli incidenti relativi ai COMMITTENTI non prevederà interventi a distanza sui server ospitati dal COMMITTENTE. L'assistenza si limiterà alla spiegazione delle metriche disponibili relative all'ambiente del COMMITTENTE, al fine di facilitare la comprensione degli incidenti o dei problemi di prestazione riscontrati. In base ai risultati di questa analisi, potranno essere formulate raccomandazioni.*

## S3 Object Storage Availability Commitment

- **SLA 10: IC-INFRA_SNC-10** -- Here are the availability commitments for S3 Object Storage:

| Indicator | Commitment | Availability Target |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durability of object storage within a region | 99.9999999% / year |
| **IC-INFRA-SNC-10.2** | S3 Object Storage API availability | 99.99% |
| **IC-INFRA-SNC-10.3** | Maximum latency for accessing an object within a region | 150 ms |

Notes:

- The Object Storage Service is specifically designed for object storage and must be used exclusively for this purpose, **strictly excluding its use in block mode**. Using it in block mode through indirect methods, such as employing *"FUSE"* in a Linux environment, constitutes a violation of the terms of use. No incident, malfunction, or damage resulting from such non-compliant usage will be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditional upon the use of services in accordance with current best practices and standards, and explicitly excludes any data modification, whether intentional or accidental, resulting from actions taken by the **CLIENT**.

## Precision regarding the backup commitment

The backup strategy deployed for the CLIENT is subject to the subscription of appropriate work units.

The Provider commits to making available a backup solution enabling the CLIENT to implement the desired backup policies.

It is specified that the Provider's scope ends with the provision of a backup service, and it is the CLIENT's responsibility to monitor, via the CLIENT's interface, the proper execution of associated policies.

It is further specified that the management of storage capacity for the dedicated backup storage space remains the sole responsibility of the CLIENT. The Provider will make available the utilization rate via the console.

*Example: Failure to back up a virtual machine:*

*The CLIENT is responsible for verifying and monitoring the correct execution of backup policies. If the CLIENT detects that a virtual machine is not being backed up, it is their responsibility to investigate the cause. The CLIENT may contact the Provider's Support team, according to the support level subscribed, for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will apply exclusively in the event of a backup service incident.

# Organizzazione del rapporto contrattuale

## Responsabilità del Fornitore

Il Fornitore si impegna a:

- informare adeguatamente il PROPRIETARIO (ad esempio in caso di limitazione della capacità delle risorse tecniche eroganti il Servizio).

- informare formalmente il PROPRIETARIO e entro un termine di un mese, di ogni cambiamento giuridico, organizzativo o tecnico che possa avere un impatto sulla conformità del Servizio ai requisiti di protezione contro le leggi extra-europee (punto 19.6 del riferimento SNC v3.2).

- fornire al PROPRIETARIO interfacce e interfacce di servizio in lingua francese almeno.

- tenere conto dei requisiti settoriali specifici legati ai tipi di informazioni affidate dal PROPRIETARIO nell’ambito dell’implementazione del Servizio, nella misura delle responsabilità del Fornitore da una parte e delle disposizioni previste dal Contratto dall’altra;

- esaminare i requisiti settoriali specifici legati ai tipi di informazioni affidate dal PROPRIETARIO nell’ambito dell’implementazione del Servizio, successivamente espressi dal PROPRIETARIO, e indicare a quest’ultimo le azioni necessarie per tenerne conto.

- non divulgare alcuna informazione relativa alla prestazione a terzi, salvo autorizzazione formale e scritta del PROPRIETARIO.

- mettere a disposizione tutte le informazioni necessarie per la realizzazione di audit di conformità conformemente alle disposizioni dell’articolo 28 del GDPR.

- rendere conto al PROPRIETARIO, tramite la presente Convenzione di servizio, di ogni incidente di sicurezza che impatti sul Servizio o sull’utilizzo che il PROPRIETARIO fa del Servizio (inclusi i dati del PROPRIETARIO).

- autorizzare un fornitore di audit di sicurezza dei sistemi informativi (PASSI) qualificato, nominato dal Fornitore, a effettuare audit sul servizio e sul proprio sistema informativo, conformemente al piano di controllo del SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per condurre gli audit di conformità previsti dall’articolo 28 del GDPR, effettuati dal PROPRIETARIO o da un terzo incaricato.

- fornire, in qualità di sottoprocessatore, conformemente all’articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), assistenza e consulenza al PROPRIETARIO, avvertendolo immediatamente qualora un’istruzione emessa da quest’ultimo possa costituire una violazione delle norme di protezione dei dati.

- notificare al PROPRIETARIO entro un termine ragionevole, tramite la console del PROPRIETARIO o via e-mail al contatto del PROPRIETARIO, quando un progetto impatti o sia suscettibile di impattare il livello di sicurezza o la disponibilità del Servizio, o causi una perdita di funzionalità, indicando i potenziali impatti, le misure di mitigazione adottate e i rischi residui che lo riguardano.

- documentare e attuare tutte le procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali applicabili al servizio, nonché i requisiti di sicurezza specifici del PROPRIETARIO, definiti da quest’ultimo e previsti dal Contratto.

- non utilizzare i dati del PROPRIETARIO derivanti dalla produzione per effettuare test, salvo ottenere preventivamente l’autorizzazione esplicita del PROPRIETARIO; in tal caso, il Fornitore si impegna a anonimizzare tali dati e a garantirne la riservatezza durante l’anonymizzazione.

- cancellare i dati e i dati tecnici relativi al PROPRIETARIO, conformemente alla « procedura di cancellazione dei dati alla fine del Contratto » descritta nella presente Convenzione di servizio, in caso di cessazione o risoluzione del Contratto.

- garantire una cancellazione sicura di tutti i dati del PROPRIETARIO mediante sovrascrittura completa di ogni supporto che abbia ospitato i suoi dati nell’ambito del Servizio.

Su richiesta formale e scritta del PROPRIETARIO, il Fornitore si impegna a:

1. rendere accessibile al PROPRIETARIO il regolamento interno e la carta etica del Fornitore;

2. rendere accessibile al PROPRIETARIO le sanzioni previste in caso di violazione della politica di sicurezza;

3. fornire al PROPRIETARIO l’insieme degli eventi che lo riguardano nei log del Servizio; il PROPRIETARIO potrà inoltre consultare autonomamente gli eventi relativi al suo utilizzo del Servizio tramite le interfacce web e API del Servizio;

4. rendere accessibile al PROPRIETARIO le procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali in vigore applicabili al Servizio, nonché i requisiti di sicurezza specifici del PROPRIETARIO previsti dal Contratto;

5. fornire gli elementi di valutazione dei rischi relativi alla sottoposizione dei dati del PROPRIETARIO al diritto di uno Stato non membro dell’Unione Europea;

6. informare il PROPRIETARIO dei sottoprocessatori successivi coinvolti nella fornitura del Servizio, e informarlo di ogni cambiamento che possa influenzarli.

> Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell’Unione europea, vale a dire la dignità umana, la libertà, la democrazia, l’uguaglianza, lo Stato di diritto, nonché il rispetto dei diritti umani. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell’Unione europea relativi al rispetto della dignità umana, della libertà, dell’uguaglianza, della democrazia e dello Stato di diritto.

## Limitazione delle responsabilità del Prestatore

A causa dell'insieme delle definizioni e delle condizioni menzionate nella presente Convenzione di servizio, le responsabilità del Prestatore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione « Modello di responsabilità condivisa » della presente Convenzione di servizio, limita effettivamente l'implicazione del Prestatore nei livelli operativi che si trovano "al di sopra" della messa a disposizione di risorse di calcolo, rete, archiviazione e backup. Ciò esclude in particolare e senza limitazione:

    - La gestione di quanto installato sulle macchine virtuali (OS, middleware, applicativi, ecc.);

    - L'aggiornamento degli OS e di altri software installati dal COMMITTENTE sulle proprie macchine nei propri Tenant;

    - La sicurezza dei programmi, software e applicativi installati sulle macchine virtuali;

    - L'aggiornamento delle macchine virtuali;

    - Il backup dei dati a livello applicativo.

2. Il Prestatore non può assumere impegni relativi al backup dei Tenant del COMMITTENTE senza che il COMMITTENTE abbia precedentemente sottoscritto le unità d'opera adeguate.

3. Il Prestatore non può rivendicare alcun diritto di proprietà sulle dati trasmessi e generati dal COMMITTENTE. Infatti, tali dati sono di proprietà del COMMITTENTE.

4. Il Prestatore sottolinea che non può in alcun modo sfruttare e/o disporre dei dati trasmessi e generati dal COMMITTENTE senza un'autorizzazione preventiva da parte di quest'ultimo, considerato che la loro gestione è riservata esclusivamente al COMMITTENTE.

5. Il Prestatore si esime da ogni responsabilità riguardo ai componenti fisici ospitati e gestiti dal Prestatore, ma che sono di proprietà diretta del COMMITTENTE o di un terzo con cui il COMMITTENTE ha stipulato un contratto. L'ospitaggio di componenti fisici dei clienti non fa parte del Servizio e, di conseguenza, è al di fuori del campo di applicazione della presente Convenzione di servizio. Spetta al COMMITTENTE valutare il livello di conformità o di dipendenza introdotto da tali componenti rispetto al Servizio OpenIaaS in fase di qualifica SecNumCloud.

## Accesso limitato

Nel quadro del Servizio, il Fornitore è formalmente proibito dall'accedere ai Tenant appartenenti al COMMITTENTE senza autorizzazione preventiva. Spetta al COMMITTENTE fornire gli accessi necessari al personale del Fornitore, in base ai bisogni specifici dell'hosting e, ove previsto, ai servizi professionali di supporto, se tale opzione è stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che tali accessi sono concessi esclusivamente per le esigenze connesse alla prestazione dei servizi concordati, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del servizio da parte del Fornitore è rigorosamente vietato. In caso di necessità tecnica specifica che richieda un tale accesso, quest'ultimo potrebbe essere stabilito soltanto dopo aver notificato chiaramente il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurando che ogni eccezione alla regola sia adeguatamente autorizzata e documentata.

## Responsabilità dei terzi partecipanti alla fornitura del servizio

Il Prestatore detiene l'elenco dei terzi partner coinvolti nella fornitura del Servizio. Tali terzi comprendono i produttori, i fornitori (del Prestatore) e altri fornitori coinvolti nella fornitura del Servizio. Il Prestatore applica le seguenti misure nei confronti di tali terzi:

- Il Prestatore richiede ai terzi coinvolti nell'implementazione del servizio, nella loro contribuzione al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

- Il Prestatore stipula con ciascuno dei terzi coinvolti nell'implementazione del servizio clausole di audit che consentano a un organismo qualificato di verificare che tali terzi rispettino i requisiti legali e i requisiti SNC, permettendo al Prestatore di rispettare gli impegni assunti nella presente Convenzione di servizio;

- Il Prestatore implementa una procedura che permetta di controllare regolarmente le misure messe in atto dai terzi coinvolti nell'implementazione del servizio al fine di garantire il rispetto dei requisiti necessari affinché il Prestatore possa rispettare gli impegni assunti nella presente Convenzione di servizio;

- Il Prestatore effettua un monitoraggio dei cambiamenti apportati dai terzi coinvolti nell'implementazione del servizio che potrebbero influire sul livello di sicurezza del sistema informativo del servizio.

## Responsabilità e obblighi del COMMITTENTE

Il COMMITTENTE ha i seguenti obblighi nel quadro del Servizio:

- Per ricordare, il Prestatore fornisce al COMMITTENTE una piattaforma per l'esecuzione di macchine virtuali; la configurazione di tali macchine è a carico del COMMITTENTE. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Prestatore definisce tramite le proprie interfacce politiche di backup automatiche. Tuttavia, spetta al COMMITTENTE attivare tali politiche di backup e quindi attivare le macchine virtuali.

- Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione SNC a effettuare audit sul Servizio e sull'infrastruttura tecnica che eroga il Servizio.

- Il COMMITTENTE è responsabile del fornire al Prestatore eventuali requisiti settoriali specifici legati ai tipi di informazioni trasmesse dal COMMITTENTE e che devono essere presi in considerazione dal Prestatore.

- Il COMMITTENTE accetta di non richiedere al Prestatore requisiti o azioni che possano discostare il Prestatore dai requisiti del riferimento SecNumCloud nella sua versione corrente, né abbassare il livello di sicurezza stabilito dal rispetto dei requisiti di tale riferimento.

## Diritti del COMMITTENTE

In qualsiasi momento durante il rapporto contrattuale, il COMMITTENTE può presentare un reclamo relativo al servizio qualificato presso l'ANSSI.

In qualsiasi momento, il COMMITTENTE può richiedere al Prestatore di mettere a disposizione il proprio regolamento interno e la propria carta etica.

## Cancellazione dei dati al termine del contratto

Al termine del contratto, sia esso scaduto che risolto per qualsiasi motivo, il Prestatore si impegna a procedere alla cancellazione sicura di tutte le informazioni del COMMITTENTE, comprese quelle tecniche. Il Prestatore garantirà di inviare al COMMITTENTE un preavviso formale, rispettando un termine di ventuno (21) giorni calendario. Le informazioni del COMMITTENTE verranno quindi eliminate entro un massimo di trenta (30) giorni successivi a tale notifica.

Per attestare tale cancellazione, il Prestatore fornirà al COMMITTENTE un certificato che confermi l'effettuata cancellazione dei dati.

# Ciclo di vita della presente Convenzione di servizio

## Entrata in vigore del Contratto di servizio

Il presente Contratto di servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, l'archiviazione e l'elaborazione dei dati effettuate nell'ambito della fase pre-vendita, dell'implementazione e dell'interruzione del Servizio, avvengono nel rispetto della legislazione vigente.

## Evoluzioni della Convenzione di servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. Tali proposte di modifica saranno esaminate dalle Parti, autorizzate a determinare gli aspetti che richiedono una formalizzazione scritta.

Si conviene che qualsiasi evoluzione della Convenzione di servizio, dopo la validazione, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la stesura e la firma di un allegato al Contratto in corso.

I fattori che possono indurre una revisione della presente Convenzione di servizio includono, senza limitazione:

- L'evoluzione dell'infrastruttura tecnica che eroga il Servizio OpenIaaS;
- Gli aggiustamenti apportati dai servizi implementati dal Fornitore per erogare il Servizio;
- Le variazioni degli impegni assunti e delle sanzioni applicabili;
- Le riorganizzazioni organizzative all'interno del COMANDITARIO o del Fornitore;
- L'estensione o la riduzione del campo di applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è documentata nel preambolo del documento per facilitarne il tracciamento.

### Evoluzioni innescate dal COMMITTENTE

Le evoluzioni della Convenzione di servizio possono avere, in particolare, le seguenti cause:

- Un'evoluzione dell'infrastruttura gestita dal Prestatore;

- Una modifica dei servizi implementati dal Prestatore;

- Una modifica degli impegni relativi ai livelli di servizio da parte del Prestatore.

### Updates triggered by the Provider

Any modification to the Service Agreement must be accepted by the **CLIENT**. It is understood that any validated modification or addition altering the financial terms of the Contract may require the signing of an amendment to it.

## Reversibility

Moreover, Cloud Temple undertakes to allow the revision of this Service Agreement (including its termination) without penalty for the CLIENT in the event of loss of SecNumCloud qualification.

The Services do not include an obligation of reversibility (i.e., assistance to the CLIENT to enable migration of its system to another "Provider"), except for the provision by the Provider to the CLIENT of the CLIENT interface, allowing the CLIENT to back up and retrieve its data—including configuration data of its information system—through one of the following technical options, at the CLIENT’s discretion: the provision of files in one or more documented and usable formats outside the service provided by the Provider, or the implementation of technical interfaces enabling access to data according to a documented and usable schema (API).

The CLIENT, as sole owner of its system, must take all necessary measures to facilitate this operation as needed (including, in particular, the creation of thorough documentation for this purpose) and the development of reversibility plans. In the event the CLIENT requires additional services, the Provider may offer a consulting engagement on this matter under a separate contract to be negotiated.

# Disponibilità, continuità e ripristino del servizio

## Gestione degli incidenti e delle interruzioni

### Incidenti

#### Tipi di incidenti trattati nel quadro di questa convenzione di servizio

- Sinistri;

- Guasti e malfunzionamenti;

- Incidenti di sicurezza che influiscono sulla disponibilità, sulla riservatezza o sull'integrità del Servizio.

#### Gestione degli incidenti

> Il Prestatore informa il COMMITTENTE nei tempi migliori possibili sugli
> incidenti e interruzioni, tramite una notifica nella console del
> COMMITTENTE o tramite e-mail al contatto del COMMITTENTE. Il Prestatore
> informa il COMMITTENTE sul trattamento dell'incidente tramite il canale
> utilizzato per notificare l'incidente, oppure tramite il canale indicato
> nella notifica dell'incidente.

#### Livello di notifica degli Incidenti di sicurezza

Il COMMITTENTE è responsabile della scelta dei livelli di gravità degli Incidenti di sicurezza per i quali desidera essere informato, ad esempio tramite la loro formalizzazione in un PAS applicabile al Servizio.

Di default, il COMMITTENTE viene informato:

- Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo la scala di impatto definita nel processo di priorizzazione dei trattamenti previsto nella presente Convenzione di servizio);

- Degli incidenti di sicurezza che interessano la riservatezza o l'integrità dei dati del COMMITTENTE consegnati nell'ambito del Servizio;

- Delle violazioni dei dati personali per le quali il COMMITTENTE è responsabile del trattamento ai sensi dell'articolo 8 dell'Allegato DPA nell'ambito del Servizio;

## Servizio di manutenzione

### Tipo di manutenzione

Violazioni dei dati personali per le quali il Fornitore è responsabile del trattamento e che riguardano dati personali del COMMITTENTE, conformemente all'articolo 8 dell'Allegato DPA. La manutenzione fornita consiste nell'implementazione:

- del piano di mantenimento in condizioni operative del Servizio, al fine di garantire buoni indicatori di disponibilità, come impegnato dal Fornitore in precedenza;

- del piano di PCA/PRA, se sottoscritto dal COMMITTENTE, attivato in caso di eventuali incidenti verificatisi.

### Remote Access to Cloud Temple within the COMMANDITAIRE's Environment

Under the terms of this Service Agreement, the Provider is prohibited from accessing the COMMANDITAIRE's Tenants and the COMMANDITAIRE's interface space.

It shall be the responsibility of the COMMANDITAIRE to grant the necessary access to the Provider's personnel. The COMMANDITAIRE acknowledges that such access will be used solely for hosting purposes and ultimately for managed services (if subscribed to by the COMMANDITAIRE).

### Remote access by third parties involved in service delivery within the COMMANDITAIRE's scope

No remote access by third parties involved in the delivery of the Service is permitted.

If a technical requirement made this situation necessary, such remote access would only be carried out after notifying the COMMANDITAIRE, providing justification, and obtaining their written approval.

# Procedure per l'eliminazione dei dati alla fine del Contratto

Alla fine del Contratto, sia che questo sia scaduto che per qualsiasi altra ragione, il Prestatore garantisce l'eliminazione sicura di tutte le informazioni elaborate nell'ambito del Servizio, comprese le Dati tecnici del COMMITTENTE. Il Prestatore fornirà un avviso formale rispettando un termine di ventuno (21) giorni lavorativi. I dati del COMMITTENTE verranno eliminati entro un massimo di trenta (30) giorni dalla notifica. Il Prestatore fornirà al COMMITTENTE un certificato di eliminazione dei dati.

# Legge applicabile

## In generale

Il diritto applicabile e a cui è soggetto il presente Contratto di servizio è il diritto francese.

## Rispetto della legge e delle normative applicabili

Il Prestatore si impegna sui seguenti punti:

- L'identificazione delle restrizioni legali e normative applicabili nel contesto del Servizio;

- Il rispetto delle restrizioni legali e normative applicabili ai dati affidati al Prestatore, entro i limiti delle responsabilità di quest'ultimo da una parte, e delle disposizioni previste dal Contratto dall'altra;

- Il rispetto della Legge sull'informatica e sulla libertà e del GDPR;

- L'implementazione di misure di protezione dei dati personali;

- L'implementazione di un processo di monitoraggio legale e normativo;

- La disponibilità e il mantenimento di relazioni appropriate o di un monitoraggio continuo con le autorità settoriali in relazione alla natura dei dati trattati nel quadro del Servizio. Ciò include in particolare l'ANSSI, il CERT-FR e la CNIL.

## GDPR

Acting as a data processor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the Supplier undertakes:

- To ensure transparency and traceability;

- To appoint a Data Protection Officer (DPO) responsible for defining and implementing measures to protect personal data;

- To provide assistance and advice to the CLIENT and alert the CLIENT if an instruction from the latter constitutes a breach of personal data protection rules, provided the Supplier has the means to identify such a breach;

- To guarantee security for the processed data (due to the SecNumCloud certification).

## Protezione rispetto alla normativa extra-europea

La sede legale del Prestatore è situata in uno Stato membro dell'Unione Europea. Il capitale sociale e i diritti di voto nella società del Prestatore non sono, direttamente o indirettamente:

- detenuti individualmente per più del 24%;

- e detenuti collettivamente per più del 39%;

da entità terze aventi la propria sede legale, amministrazione centrale o stabilimento principale in uno Stato non membro dell'Unione Europea.

In caso di utilizzo da parte del Prestatore, nell'ambito del Servizio, del servizio di una società terza – inclusi i subappaltatori – avente la propria sede legale, amministrazione centrale o stabilimento principale in uno Stato non membro dell'Unione Europea o appartenente o controllata da una società terza con sede al di fuori dell'Unione Europea, il Prestatore si impegna:

- affinché detta società terza non abbia alcun accesso ai dati operativi;

- a disporre di un'autonomia operativa attraverso la possibilità di ricorrere a un altro subappaltatore o di attuare rapidamente un'alternativa tecnologica.

Per quanto riguarda il presente articolo, il concetto di controllo è inteso come definito al punto II dell'articolo L233-3 del codice commerciale.

# FIRME

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, il PRESTATORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il COMMITTENTE