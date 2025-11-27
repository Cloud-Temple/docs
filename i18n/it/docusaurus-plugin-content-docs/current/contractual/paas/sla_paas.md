---
title: Convenzione di Servizio SecNumCloud PaaS
---

## Framework

| Reference | CT.AM.JUR.ANX.PAAS 2.1 |
| :--- | :--- |
| **Date** | 21 gennaio 2025 |

## Acronimi

| Acronimo | Descrizione |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Comitato consultivo sui cambiamenti |
| **CMDB** | Configuration Management Database -- Database di gestione delle configurazioni |
| **COPIL** | Comitato di pilotaggio |
| **COSTRAT** | Comitato strategico |
| **DB** | Database (base di dati) |
| **DRP** | Disaster Recovery Plan (Piano di ripristino dell'attività) |
| **GTI** | Garanzia di Tempo di Intervento |
| **GTR** | Garanzia di Tempo di Risoluzione |
| **GTE** | Garanzia di Tempo di Escalation |
| **HYPERVISEUR** | Sistema operativo che permette l'esecuzione di VM su un nodo di calcolo |
| **ITIL** | Information Technology Infrastructure Library - Buone pratiche per la gestione dei sistemi informativi |
| **IAAS** | Infrastructure as a Service |
| **MCO** | Mantenimento in condizione operativa |
| **MOA** | Maitrise d'Ouvrage |
| **MOE** | Maitrise d'Œuvre |
| **OS** | Operating system |
| **PAQ** | Piano di Assicurazione Qualità |
| **PAAS** | Platform as a Service |
| **SDM** | Service Delivery Manager |
| **RFC** | Request For Change -- Richiesta di cambiamento |
| **RGPD** | Regolamento Generale sulla Protezione dei Dati (personali) |
| **RPO** | Recovery Point Objective -- Attualità dei dati ripristinati in caso di incidente |
| **RTO** | Recovery Time Objective -- Tempo di ripristino del servizio in caso di incidente |
| **SLA** | Service Level Agreement -- Accordo sui livelli di servizio |
| **UO** | Unità d'Opera |
| **VABF** | Validazione di Aptitudine al Buon Funzionamento |
| **VABE** | Validazione di Aptitudine alla Buona Utilizzabilità |
| **VM** | Virtual Machine (Macchina virtuale) |
| **VSR** | Validazione di Servizio Regolare |
| **SNC** | SecNumCloud |

## Glossario

Le espressioni seguenti utilizzate nel presente documento saranno interpretate conformemente alle definizioni qui attribuite:

| Espressione | Definizione |
| :--- | :--- |
| **\"Secure Temple\"** | Indica il servizio IaaS qualificato SecNumCloud, offerto dalla società Cloud Temple, come definito nell'attestazione consultabile sul sito dell'ANSSI e fornita in allegato alla presente Convenzione di servizio. |
| **Regione** | Una "regione" nel contesto del cloud computing indica un insieme geograficamente delimitato di zone di disponibilità cloud, che fornisce servizi di rete, calcolo e archiviazione per ottimizzare la latenza, le prestazioni e la conformità normativa locale. |
| **Zona di disponibilità (AZ) (Availability zone)** | Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire elevata disponibilità e resilienza dei servizi attraverso una distribuzione geografica delle risorse. |
| **Tenant** | Un'istanza isolata riservata a un utente o a un gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni |

| Espressione | Definizione |
| :--- | :--- |
| **Incidente** | Un "incidente" indica ogni evento imprevisto che interrompe il funzionamento normale di un sistema o compromette la sicurezza dei dati. |
| **Problema** | Un "problema" è una causa fondamentale di uno o più incidenti, identificata o sospettata, che richiede un'analisi e una risoluzione per prevenire la sua ricorrenza. |
| **Cambiamento** | Un "cambiamento" indica ogni aggiunta, modifica o rimozione che impatta sul Servizio, autorizzata, pianificata o gestita. |
| **Cambiamento standard** | Un "cambiamento standard" è un cambiamento soggetto a una procedura, le cui modalità di produzione e gli impatti (inclusi quelli finanziari) sono noti e accettati in anticipo dalle Parti. Viene quindi integrato nel catalogo dei cambiamenti standard e, a seconda dei casi, può avere una GTI e una GTR. |
| **Produzione** | Azione(i) di amministrazione relative alla realizzazione del cambiamento una volta approvato (il cambiamento, nel senso di ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione). |
| **Richiesta di servizio** | Richiesta di evoluzione soggetta a una procedura, la cui realizzazione: i) non modifica la CMDB, ii) il modo di operare, i costi e i rischi sono noti e accettati in anticipo e non richiedono modalità di rollback specifiche; iii) la realizzazione è soggetta a un accordo sul livello di servizio e inclusa nella tariffa contrattuale quando realizzata in ore lavorative e giorni lavorativi. |
| **Elemento di configurazione** | Un "elemento di configurazione" è un componente identificabile del sistema informativo, come un software, un hardware o un documento, soggetto alla gestione nell'ambito della gestione dei servizi IT. |
| **Servizio** | Un "servizio" indica il servizio qualificato SecNumCloud, fornito dal PRESTATORE al COMANDITARIO, come descritto nella sezione « Descrizione del Servizio » della presente Convenzione di servizio. |
| **Evento** | Un "evento" è ogni accadimento rilevabile o identificabile che può avere importanza per la gestione del Servizio. |
| **Sinistro** | Un « sinistro » indica un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni significativi alla parte danneggiata. |
| **Convenzione di servizio** | Il presente documento, redatto nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e di Utilizzo (CGVU), in conformità con i requisiti del Riferimento SecNumCloud. |
| **Disponibilità** | Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali di un servizio, in accordo con i criteri e gli impegni definiti negli Accordi sul Livello di Servizio (SLA). |
| **Supervisione** | Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di diverse informazioni come misurazioni e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che spetta alle operazioni di Amministrazione. |

## Oggetto dell'Accordo di Servizio PaaS del Fornitore

Il presente Accordo di Servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire al COMMITTENTE un'infrastruttura conforme alle specifiche dell'offerta « Platform as a Service -- PaaS », adeguatamente qualificata SecNumCloud.

Oggetto dell'Accordo di Servizio:

1. Definire i requisiti di prestazione attesi dal COMMITTENTE in termini di funzionalità e affidabilità dell'infrastruttura.
2. Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati.
3. Individuare le normative regolamentari applicabili specificamente all'infrastruttura proposta.
4. Garantire uniformità e integrità nella valutazione della qualità dei servizi erogati.
5. Assicurare l'eccellenza dei servizi forniti, valutata tramite indicatori quantitativi di prestazione.

Si stabilisce che, in caso di revoca della qualifica SecNumCloud al Fornitore, il presente Contratto potrà essere risolto di diritto, senza incorrere in penali, da parte del COMMITTENTE. In tale evenienza, il Fornitore si impegna a informare tempestivamente il COMMITTENTE della revoca, inviando una notifica ufficiale tramite lettera raccomandata con ricevuta di ritorno.

Si precisa che una modifica o un aggiustamento della qualifica SecNumCloud non sarà interpretato come revoca della qualifica iniziale.

## Evoluzione della convenzione di servizio PaaS

Le modifiche o aggiunte apportate alla presente convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. Tali proposte di modifica saranno esaminate all'interno del comitato strategico, unica istanza autorizzata a determinare gli aspetti che richiedono una formalizzazione scritta.

Si conviene che ogni evoluzione della convenzione, dopo la validazione, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la stesura e la firma di un allegato al contratto in corso.

I fattori che possono indurre una revisione di questa convenzione includono, senza limitarsi a:

- L'adattamento della piattaforma PaaS orchestrata dal Fornitore.
- Gli aggiustamenti apportati ai servizi implementati dal Fornitore.
- Le variazioni degli impegni assunti e delle sanzioni applicabili.
- Le riorganizzazioni organizzative all'interno del COMMITTENTE o del Fornitore.
- L'ampliamento o la riduzione del campo di applicazione dei servizi ai quali il COMMITTENTE ha sottoscritto.

La gestione delle versioni e delle revisioni della convenzione è documentata nel preambolo del documento per facilitarne il tracciamento.

## Audit

Il Fornitore si impegna a consentire al COMMITTENTE, o a qualsiasi revisore terzo designato dallo stesso, l'accesso a tutti i documenti necessari per attestare il rispetto integrale degli obblighi connessi alla conformità alle disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così l'esecuzione di revisioni.

**Il Fornitore si impegna in particolare a mettere a disposizione del COMMITTENTE l'elenco di tutti i terzi che possono accedere ai dati e a informare tempestivamente il COMMITTENTE di ogni variazione dei subappaltatori.**

Con l'accettazione del presente contratto di servizio, il COMMITTENTE concede il proprio esplicito consenso a:

1. **L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI)** e all'ente qualificato competente per effettuare la verifica della conformità del Servizio e del suo Sistema Informativo agli standard definiti dal Referenziale SecNumCloud.
2. **Un fornitore di revisione in materia di sicurezza dei sistemi informativi**, debitamente qualificato e espressamente designato dal Fornitore, per condurre revisioni di sicurezza relative al Servizio fornito dal Fornitore.

## Descrizione del servizio

L'offerta di servizi proposta dal Prestatore si caratterizza per la messa a disposizione delle seguenti prestazioni, le quali si allineano al principio di responsabilità condivisa dettagliato nelle norme stabilite dal riferimento SecNumCloud:

- Fornitura di una piattaforma di gestione dei container Redhat OpenShift gestita dal Prestatore.

Si intende che il Prestatore metterà in atto la propria esperienza professionale per realizzare le Prestazioni secondo le migliori pratiche professionali, conformemente alle loro Specifiche e nel rispetto delle norme della propria certificazione ISO/IEC 27001 nonché delle direttive del Riferimento SecNumCloud.

## Implementation of the Service

It is specified that all operations and physical components involved in the provision of the qualified service, the subject of this agreement, are located within the European Union. This includes, in particular, support, operational monitoring, and security monitoring (SOC).

### Descrizione dei componenti tecnici

I servizi PaaS (Platform as a Service) includono l'intera gamma di componenti e servizi necessari per il loro funzionamento ottimale, nel rispetto della qualifica SecNumCloud.

A questo proposito, le loro prestazioni e affidabilità sono strettamente legate ai componenti tecnici e ai servizi dell'**infrastruttura IaaS** del Fornitore, come specificato nel documento [Convenzione di Servizio IaaS](../iaas/sla_iaas.md) del Fornitore.

#### Piattaforma di servizio REDHAT OpenShift

Il servizio comprende la messa a disposizione all'interno di una regione, su 3 zone di disponibilità,

#### Software infrastructure for managing the Red Hat OpenShift platform

The Supplier provides the COMMANDITARY with the administration console and the necessary APIs for operating its Red Hat OpenShift PaaS environments. The Supplier undertakes to maintain them in optimal operational condition and to ensure their continuous security.

Within the specific scope of the service provided, the Supplier makes available to the COMMANDITARY all interfaces and APIs of the Red Hat OpenShift platform within the selected tenant. It is the responsibility of the COMMANDITARY to implement appropriate security measures, such as firewalls (firewall), web application firewalls (WAF), and other protective measures, as well as to define the associated filtering rules to secure access to its platform in compliance with its security policy.

The Supplier alerts the COMMANDITARY that abnormal use of its administration console—particularly in cases of API command overload (hammering)—may trigger automatic security measures resulting in the blocking of access to the command APIs or certain Supplier services. It should be emphasized that this situation does not constitute a service outage but rather a protective action taken against the Supplier’s infrastructure; therefore, the COMMANDITARY may not consider it an unavailability in its calculations.

Furthermore, the Supplier informs the COMMANDITARY that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITARY submits identical requests at a higher frequency, their rejection must not be interpreted as a service unavailability.

#### Infrastruttura di backup associata

Il Prestatore mette a disposizione del COMMITTENTE una piattaforma di backup integrata, dedicata e gestita, finalizzata alla protezione dei dati dei suoi ambienti RedHat OpenShift. Il Prestatore garantisce il mantenimento della piattaforma di backup integrata in condizioni operative e di sicurezza. Indipendentemente dal numero di zone di disponibilità sottoscritte dal COMMITTENTE, il Prestatore garantisce che la piattaforma di backup del COMMITTENTE sia ubicata al di fuori della zona di disponibilità dei carichi di lavoro protetti.

Il servizio di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS dei tenant SecNumCloud del COMMITTENTE. La definizione e l'applicazione di una politica di backup adeguata da parte del COMMITTENTE dipendono dalla sottoscrizione di unità di lavoro specifiche. Il COMMITTENTE è pertanto responsabile del garantire la disponibilità delle risorse tecniche necessarie presso il Prestatore per implementare la propria politica di backup o per adeguarla in base alle risorse disponibili.

Il Prestatore si impegna a informare il COMMITTENTE in caso di limitazioni di capacità e a fornire un supporto consulenziale per l'ottimizzazione delle risorse. Le obbligazioni del Prestatore si limiteranno all'implementazione dei requisiti espressi dal COMMITTENTE in materia di politica di backup, nel quadro delle risorse sottoscritte.

#### Implementation of Business Continuity or Disaster Recovery Solutions

The Provider supplies the CONTRACTOR with all the necessary technical solutions to ensure optimal distribution of its resources across multiple availability zones. It is the CONTRACTOR's responsibility to effectively manage this resource distribution, for which it has access to the tools provided by the Provider for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider, in order to benefit from the associated business continuity or disaster recovery solutions.

## Impegni e livelli di servizio

Il Prestatore si impegna a garantire un monitoraggio continuo delle prestazioni e dell'integrità sicura delle proprie piattaforme e servizi, assicurandone il funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di prestazione, è riconosciuta non appena identificata dal sistema di monitoraggio del Prestatore, oppure successivamente a una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, al fine di garantire un conteggio preciso e equo del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal ripristino completo del servizio, confermato sia dagli strumenti di monitoraggio del Prestatore, sia da un feedback dell'utente, assicurando così un ripristino effettivo delle operazioni e una misurazione fedele della durata dell'interruzione.

### Availability Commitments for the RedHat OpenShift Platform

The Provider undertakes to maintain an availability and performance level compliant with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided that the CUSTOMER implements its systems across at least two of the availability zones present in the relevant region.

In the event that the CUSTOMER fails to meet these conditions, it will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (\*). SLA accessibility is available through the CUSTOMER interface. **Measurements are calculated on a monthly basis**:

- \*\*SLA 1 (\*) : IC-PAAS_SNC-01\*\* -- RedHat OpenShift platform availability: guaranteed availability rate of 99.9%, calculated on a 24/7, 7 days a week basis.

***Notes***:

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of the attack and protect its infrastructure. In particular, if an IP address belonging to the CUSTOMER is targeted, the Provider may employ blackholing via the BGP community to block all traffic destined for the targeted IP address upstream with its providers, with the aim of protecting the CUSTOMER’s resources as well as those of other CUSTOMERS and the Provider’s infrastructure. The Provider strongly encourages the CUSTOMER to adopt similar measures, such as using commercially available web application firewalls, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the importance for the CUSTOMER to minimize traffic openings, particularly by avoiding exposing administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) to the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## Modello di responsabilità condivise applicabile

### Responsabilità e Obblighi del Prestatore

Il Prestatore si impegna a mettere a disposizione del COMMITTENTE interfacce utente in lingua francese e inglese, facilitando così l'accesso e la gestione dei servizi forniti. Il COMMITTENTE, a sua volta, si impegna a rispettare le normative e le disposizioni legali vigenti relative ai dati che consegna al Prestatore per il trattamento.

In caso di trasmissione di dati soggetti a requisiti legali specifici, il Prestatore collaborerà con il COMMITTENTE per identificare e implementare le misure di sicurezza necessarie, conformemente agli obblighi del Prestatore e nel quadro della prestazione dei servizi.

Il Prestatore si impegna inoltre a esaminare e tenere in considerazione le esigenze specifiche legate ai settori di attività del COMMITTENTE, rispettando i limiti della propria responsabilità, per garantire un livello di sicurezza adeguato alle informazioni trattate.

Se un progetto è suscettibile di impattare sulla sicurezza del Servizio offerto o sulla disponibilità del medesimo Servizio, oppure di causare una perdita di funzionalità, il Prestatore si impegna a informare, tramite la console o via e-mail al contatto del COMMITTENTE, e in un termine ragionevole, del COMMITTENTE sugli impatti potenziali, sulle misure correttive previste e sui rischi residui, garantendo una trasparenza totale.

Il Prestatore si impegna a non utilizzare i dati del COMMITTENTE derivanti dalla produzione per eseguire test, salvo ottenere preventivamente l'autorizzazione esplicita del COMMITTENTE; in tal caso, il Prestatore si impegna a anonimizzare tali dati e a garantirne la riservatezza durante l'anonimizzazione.

In caso di cambio di subappaltatore per l'hosting, il Prestatore informerà preventivamente il COMMITTENTE, assicurandosi che tale transizione non abbia un impatto negativo sul servizio fornito.

Su richiesta del COMMITTENTE, il Prestatore fornirà l'accesso al proprio regolamento interno, alla propria carta etica, alle sanzioni applicabili in caso di mancato rispetto della politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e alle specifiche richieste di sicurezza.

Il Prestatore si impegna a informare il COMMITTENTE di ogni cambiamento imminente riguardante elementi software sotto la propria responsabilità da Cloud Temple, nel momento in cui non sia più garantita la compatibilità completa.

### Limitazione di responsabilità del Prestatore

La struttura della responsabilità condivisa riduce efficacement l'ambito di intervento del Prestatore agli aspetti legati alla fornitura di una piattaforma RedHat OpenShift funzionale, comprensiva di:

- Gestione dell'infrastruttura IaaS che supporta la piattaforma RedHat OpenShift e il suo provisioning,
- Gestione dei sistemi necessari al corretto funzionamento della piattaforma,
- Mantenimento in condizioni di sicurezza,
- Aggiornamento della piattaforma RedHat OpenShift,
- Backup dei dati di configurazione essenziali della piattaforma, con esclusione dei dati e delle applicazioni del COMMITTENTE, che ricadono nella sua responsabilità.

Escludono in particolare, ma non solo:

- Aggiornamento dei sistemi operativi e dei software installati dal COMMITTENTE nei suoi ambienti OpenShift nei suoi spazi locativi,
- Sicurezza dei programmi, software e applicazioni installati all'interno dell'ambiente OpenShift dal COMMITTENTE,
- Backup dei dati a livello applicativo,
- Configurazione delle politiche di backup.

### Limitazione di accesso

Nel quadro del presente accordo di servizio, il Prestatore è formalmente proibito dall'accedere ai componenti appartenenti al COMMITTENTE senza autorizzazione preventiva. Spetta al COMMITTENTE fornire gli accessi necessari al personale del Prestatore, in base alle esigenze specifiche dell'hosting e, ove previsto, dei servizi professionali di supporto, se tale opzione è stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che tali accessi sono concessi esclusivamente per le esigenze connesse alla prestazione dei servizi concordati, garantendo così una gestione sicura e conforme ai termini dell'accordo.

È rigorosamente vietato l'accesso remoto da parte di terzi coinvolti nella prestazione del servizio da parte del Prestatore. In caso di necessità tecnica specifica che richieda un tale accesso, quest'ultimo potrebbe essere stabilito soltanto dopo aver notificato chiaramente il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurando che ogni eccezione alla regola sia adeguatamente autorizzata e documentata.

## Cancellazione dei dati al termine del contratto

Al termine del contratto, sia esso scaduto che risolto per qualsiasi motivo, il Prestatore si impegna a procedere alla cancellazione sicura di tutte le informazioni del COMMITTENTE, comprese quelle tecniche. Il Prestatore si assicurerà di inviare al COMMITTENTE un preavviso formale, rispettando un termine di ventuno (21) giorni calendario. Le informazioni del COMMITTENTE verranno quindi eliminate entro un massimo di trenta (30) giorni successivi a tale notifica.

Per attestare tale cancellazione, il Prestatore fornirà al COMMITTENTE un certificato che confermi l'eliminazione dei dati.

## Legge applicabile

La legge applicabile al presente contratto di servizio è la legge francese.

In caso di ricorso da parte del Prestatore, nell'ambito dei servizi forniti al COMMITTENTE, a una società terza, inclusa una società subappaltatrice, il cui sede legale, sede centrale o principale stabilimento si trovi in uno Stato non membro dell'Unione Europea, o che sia di proprietà o sotto il controllo di una società terza con sede al di fuori dell'Unione Europea, il Prestatore si impegna a garantire che detta società terza non abbia alcun accesso ai dati trattati dal servizio del Prestatore.

Si precisa che i dati in questione includono quelli affidati al Prestatore dal COMMITTENTE, nonché tutti i dati tecnici quali le identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i dati elaborati dalle reti, i log dell'infrastruttura tecnica, l'elenco, i certificati, la configurazione degli accessi, ecc., contenenti informazioni sul COMMITTENTE.

Per completezza, il concetto di controllo è definito conformemente al punto II dell'articolo L233-3 del codice commerciale.