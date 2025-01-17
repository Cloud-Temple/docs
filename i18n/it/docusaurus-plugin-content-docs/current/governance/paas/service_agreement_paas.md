---
title: Convenzione di Servizio PaaS
---

**Indice**

- [1. Quadro](#1-quadro)
- [2. Acronomi](#2-acronomi)
- [3. Glossario](#3-glossario)
- [4. Oggetto della convenzione di servizio PaaS del Fornitore](#4-oggetto-della-convenzione-di-servizio-paas-del-fornitore)
- [5. Evoluzione della convenzione di servizio PaaS](#5-evoluzione-della-convenzione-di-servizio-paas)
- [6. Audit](#6-audit)
- [7. Descrizione del servizio](#7-descrizione-del-servizio)
- [8. Implementazione del servizio](#8-implementazione-del-servizio)
  - [8.1. Descrizione dei componenti tecnici](#81-descrizione-dei-componenti-tecnici)
    - [8.1.1. Piattaforma di servizio REDHAT OpenShift](#811-piattaforma-di-servizio-redhat-openshift)
    - [8.1.2. Infrastruttura software di gestione della piattaforma Redhat Openshift](#812-infrastruttura-software-di-gestione-della-piattaforma-redhat-openshift)
    - [8.1.3. Infrastruttura di backup associata](#813-infrastruttura-di-backup-associata)
    - [8.1.4. Implementazione di soluzioni di ripristino o continuità delle attività](#814-implementazione-di-soluzioni-di-ripristino-o-continuità-delle-attività)
- [9. Impegni e livelli di servizio](#9-impegni-e-livelli-di-servizio)
  - [9.1. Impegni di disponibilità della piattaforma RedHat OpenShift](#91-impegni-di-disponibilità-della-piattaforma-redhat-openshift)
- [10. Modello di responsabilità condivisa applicabile](#10-modello-di-responsabilità-condivisa-applicabile)
  - [10.1. Responsabilità e Obblighi del Fornitore](#101-responsabilità-e-obblighi-del-fornitore)
  - [10.2. Limitazione della responsabilità del Fornitore](#102-limitazione-della-responsabilità-del-fornitore)
  - [10.3. Limitazione dell'accesso](#103-limitazione-dellaccesso)
- [11. Cancellazione dei dati a fine contratto](#11-cancellazione-dei-dati-a-fine-contratto)
- [12. Diritto applicabile](#12-diritto-applicabile)


## 1. Quadro

|           |                        |
| --------- | ---------------------- |
| Riferimento | CT.AM.JUR.ANX.PAAS 2.0 |
| Data      | 13 marzo 2024           |

## 2. Acronomi

| Acronym              | Descrizione                                                                                                 |
| -----------          | ----------------------------------------------------------------------------------------------------------- |
| CAB                  | Change Advisory Board – Comitato consultivo sui cambiamenti                                                 |
| CMDB                 | Configuration Management Database – Database di gestione delle configurazioni                               |
| COPIL                | Comitato di pilotaggio                                                                                          |
| COSTRAT              | Comitato strategico                                                                                          |
| DB                   | Database (database)                                                                                  |
| DRP                  | Disaster Recovery Plan (Piano di ripristino delle attività)                                                         |
| GTI                  | Garanzia di Tempo d'Intervento                                                                            |
| GTR                  | Garanzia di Tempo di Risoluzione                                                                             |
| GTE                  | Garanzia di Tempo di Escalation                                                                                |
| HYPERVISEUR          | Sistema operativo che consente l'esecuzione di VM su una scheda di calcolo                                  |
| ITIL                 | Information Technology Infrastructure Library - Best practice per la gestione dei sistemi informativi |
| IAAS                 | Infrastructure as a Service                                                                             |
| MCO                  | Manutenzione in condizioni operative                                                                        |
| MOA                  | Committente                                                                                          |
| MOE                  | Direzione dei Lavori                                                                                            |
| OS                   | Operating system                                                                                            |
| PAQ                  | Piano di Garanzia della Qualità                                                                                    |
| PAAS                 | Platform as a Service                                                                                       |
| SDM                  | Service Delivery Manager                                                                                    |
| RFC                  | Request For Change – Richiesta di cambiamento                                                                  |
| RGPD                 | Regolamento Generale per la Protezione dei Dati (personali)                                                  |
| RPO                  | Recovery Point Objective – Freschezza dei dati ripristinati in caso di disastro                              |
| RTO                  | Recovery Time Objective – Tempo di ripristino del servizio in caso di disastro                             |
| SLA                  | Service Level Agreement – Accordo sui livelli di servizio                                                |
| UO                   | Unità di Lavoro                                                                                               |
| VABF                 | Validazione di Idoneità al Buon Funzionamento                                                                 |
| VABE                 | Validazione di Idoneità alla Buona Operabilità                                                             |
| VM                   | Virtual Machine (Macchina virtuale)                                                                         |
| VSR                  | Validazione del Servizio Regolare                                                                              |
| SNC                  | SecNumCloud                                                                                                 |

## 3. Glossario

Le seguenti espressioni utilizzate nel presente documento saranno interpretate conformemente alle definizioni che sono attribuite loro qui di seguito:

| Espressione                                          | Definizione                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------  | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                      | La denominazione "Secure Temple" si riferisce al servizio di Infrastruttura come Servizio IaaS, qualificato SecNumCloud, proposto dalla società Cloud Temple.                                                                                                                          |
| Regione                                              | Una "regione" nel contesto del cloud computing designa un insieme geograficamente delimitato di zone di disponibilità cloud,<br/>fornendo servizi di rete, di calcolo e di archiviazione per ottimizzare la latenza, le prestazioni<br/>e la conformità normativa locale |
| Zona di Disponibilità<br/>(AZ)<br/>(Availability zone) | Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.                                                                                    |
| Tenant                                               | Un'istanza isolata riservata a un utente o gruppo di utenti, che condividono un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.                                                                                        |

| Espressione               | Definizione                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------  | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                 | Un "incidente" designa qualsiasi evento imprevisto che disturba il normale funzionamento di un sistema o compromette la sicurezza dei dati e delle infrastrutture                                                                                                                                                                                                                                                                                   |
| Problème                 | Un "problema" è una causa fondamentale di uno o più incidenti, identificata o sospettata, che richiede un'analisi e una risoluzione per prevenire la sua ricorrenza                                                                                                                                                                                                                                                                          |
| Changement               | Un "cambiamento" indica qualsiasi modifica apportata all'ambiente informatico, volta a migliorare o correggere i sistemi, i processi o i servizi.                                                                                                                                                                                                                                                                             |
| changement standard      | Un "cambiamento standard" è una modifica pre-approvata, a basso rischio, ripetitiva e seguente una procedura stabilita nell'ambiente informatico.                                                                                                                                                                                                                                                                                 |
| Mise en production       | azione(i) di amministrazione per l'attuazione del cambiamento quando questo è approvato <br/>(il cambiamento, secondo ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/attuazione).                                                                                                                                                                                                                                      |
| Demande de service       | richiesta di evoluzione soggetta a una procedura, la cui realizzazione: <br/> i) non modifica la CMDB,<br/>ii) il metodo operativo, i costi e i rischi sono noti e accettati in anticipo e non richiedono modalità specifiche di ripristino<br/> iii) la realizzazione è soggetta a un accordo di livello di servizio ed è inclusa nella tariffa del contratto quando effettuata in orari e giorni lavorativi. |
| Element de configuration | Un "elemento di configurazione" è un componente identificabile del sistema informativo, come software, hardware o documenti,<br/> soggetto a gestione nell'ambito della gestione dei servizi IT                                                                                                                                                                                                                                        |
| Service                  | Un "servizio" è un mezzo per fornire valore ai CLIENTi facilitando i risultati desiderati senza che questi debbano gestire <br/>i costi e i rischi specifici                                                                                                                                                                                                                                                                |
| Evenement                | Un "evento" è qualsiasi occorrenza rilevabile o identificabile in un sistema informatico o rete, che può avere importanza per la gestione dei servizi IT                                                                                                                                                                                                                                                                           |
| Sinistre                 | Un "sinistro" indica un evento dannoso imprevisto che causa perdite materiali, finanziarie o di dati per un CLIENTE                                                                                                                                                                                                                                                                                                            |
| Convention de service    | Questo documento, redatto nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), e ciò, in conformità con i requisiti del Riferimento SecNumCloud.                                                                                                                                                                                                                                                   |
| Disponibilité            | Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali di un servizio, in accordo con i criteri e impegni definiti negli Accordi di Livello di Servizio (SLA)                                                                                                                                                                                                                                                    |
| Supervision              | Monitoraggio di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi. <br/>Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi monitorati, una prerogativa che appartiene alle operazioni di Amministrazione.                                                                                                                        |

## 4. Objet de la convention de service PaaS du Prestataire

La presente Convention de Services stabilisce i termini e condizioni secondo cui il Fornitore si impegna a fornire al CLIENTE un'infrastruttura 
conforme alle specifiche dell'offerta « Platform as a Service – PaaS », debitamente qualificata SecNumCloud.

Oggetto della Convention de Services:

1. Precisare i requisiti di performance attesi dal CLIENTE in termini di funzionalità e affidabilità dell'infrastruttura.
2. Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio convenuti.
3. Identificare le norme regolamentari applicabili specificamente all'infrastruttura proposta.
4. Assicurare un'uniformità e un'integrità nella valutazione della qualità dei servizi resi.
5. Garantire l'eccellenza dei servizi forniti, valutata tramite indicatori di performance quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore si vedrà revocare la sua qualifica SecNumCloud, il presente Contratto potrà essere risolto di diritto, senza incorrere in penalità, da parte del CLIENTE.
In tale eventualità, il Fornitore si impegna a informare il CLIENTE di tale dequalificazione tramite l'invio di una notifica ufficiale, mediante lettera raccomandata con ricevuta di ritorno.

Va notato che una modifica o un aggiustamento della qualifica SecNumCloud non sarà interpretato come una revoca della qualifica iniziale.

## 5. Evolution de la convention de service PaaS

Le modifiche o aggiunte apportate alla presente convention de service derivano esclusivamente dalle richieste formulate dagli organi di governo designati a tale scopo.
Queste proposte di cambiamento saranno esaminate nel comitato strategico, l'unico organo autorizzato a determinare gli aspetti che necessitano di una formalizzazione scritta.

Si conviene che ogni evoluzione della convention, dopo la convalida, che altera le condizioni finanziarie inizialmente stabilite, richiederà la redazione e la firma di un emendamento al contratto in corso.

I fattori che possono indurre una revisione di questa convention includono, senza limitazioni:

- L'adattamento della piattaforma PaaS orchestrata dal Fornitore.
- Gli aggiustamenti apportati ai servizi erogati dal Fornitore.
- Le variazioni degli impegni presi e delle sanzioni applicabili.
- Le riconfigurazioni organizzative all'interno del CLIENTE o del Fornitore.
- L'espansione o la riduzione del campo di applicazione dei servizi a cui il CLIENTE ha aderito.

La gestione delle versioni e delle revisioni della convention è riportata in premessa del documento per facilitarne il follow-up.

## 6. Audit 

Il Fornitore si impegna a consentire al CLIENTE, o a qualsiasi revisore esterno da questo designato, di consultare tutti i documenti necessari a certificare il rispetto integrale degli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

**Il Fornitore si impegna in particolare a rendere disponibile al CLIENTE l'elenco di tutti i terzi che possono accedere ai dati e informarlo di qualsiasi cambiamento di subappaltatori.**

Con l'accettazione della presente convention de service, il CLIENTE conferisce il suo esplicito consenso a:

1. __L'Agenzia Nazionale per la Sicurezza dei Sistemi Informatici (ANSSI)__ così come all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo Sistema Informatico agli standard definiti dal Riferimento SecNumCloud.
2. __Un fornitore di servizi di audit di sicurezza dei sistemi informatici__, debitamente qualificato ed espressamente designato dal Fornitore, per effettuare audit di sicurezza riguardanti il Servizio erogato dal Fornitore.

## 7. Description du service

L'offerta di servizi proposta dal Fornitore si caratterizza per la messa a disposizione delle prestazioni seguenti, 
che si allineano al principio di responsabilità condivisa dettagliato nelle norme stabilite dal riferimento SecNumCloud:

- La fornitura di una piattaforma di gestione dei container Redhat Openshift gestita dal Fornitore.

Si intende che il Fornitore impiegherà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali,
conformément à leurs Spécifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Mise en œuvre du service

Il est précisé que toutes les opérations et tous les composants physiques impliqués dans la fourniture du service qualifié, dont la présente convention fait l’objet, 
sont situés dans l’Union Européenne. Cela inclut notamment le support, la supervision opérationnelle et la supervision de sécurité (SOC).

### 8.1. Description des composants techniques 

Les service PaaS (Platform as a Service) englobent l'intégralité des composants et services requis pour son fonctionnement optimal dans le respect de la qualification SecNumCloud.

À cet égard, leur performance et fiabilité sont intrinsèquement liées aux composants techniques et aux services de **l'infrastructure IaaS** du Prestataire, comme spécifié dans le document [Convention de Service IaaS](../iaas/sla_iaas.md) du Prestataire.

#### 8.1.1. Plateforme de service REDHAT OpenShift

Le service englobe la mise à disposition au sein d'une région, sur 3 zones de disponibilité, 

#### 8.1.2. Infrastructure logiciel de pilotage de la plateforme Redhat Openshift

Il Fornitore fornisce al CLIENTE la console di amministrazione e l'API necessarie per l'uso dei suoi ambienti PaaS RedHat OpenShift. 
Si impegna inoltre a mantenerli in condizioni operative ottimali e a garantirne la sicurezza continua.

Nell'ambito specifico del servizio fornito, il Fornitore mette a disposizione del CLIENTE tutte le interfacce e le API della piattaforma RedHat OpenShift all'interno del tenant selezionato. È responsabilità del CLIENTE instaurare i dispositivi di sicurezza appropriati, come firewall, firewall applicativi web (WAF) e altre misure di protezione, e definire le regole di filtraggio associate per mettere in sicurezza l'accesso alla sua piattaforma in conformità con la sua politica di sicurezza.

Il Fornitore avvisa il Cliente che un uso anomalo della sua console di amministrazione, in particolare in caso di sovraccarico delle sue API di comando (hammering), 
può innescare misure di sicurezza automatiche che bloccano l'accesso alle API di comando o a certi servizi del Fornitore. È importante sottolineare che tale situazione non costituisce una indisponibilità del servizio ma un'azione di protezione dell'Infrastruttura del Fornitore; 
pertanto, il Cliente non può considerarla come una indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al Cliente che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una per secondo (Throttling).
Se il Cliente invia richieste identiche a una frequenza superiore, il rifiuto di tali richieste non deve essere interpretato come una indisponibilità del servizio.

#### 8.1.3. Infrastructure de sauvegarde associée

Il Fornitore mette a disposizione del CLIENTE una piattaforma di backup integrata, dedicata e gestita, destinata alla protezione dei dati dei suoi ambienti RedHat OpenShift.
Il Fornitore garantisce il mantenimento in condizioni operative e di sicurezza ottimali di questa piattaforma integrata di backup.
Indipendentemente dal numero di zone di disponibilità sottoscritte dal CLIENTE, il Fornitore garantisce che la piattaforma di 
backup del CLIENTE sarà situata al di fuori della zona di disponibilità dei carichi di lavoro salvati.

La prestazione di backup è limitata al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS dei tenant SecNumCloud del CLIENTE.
L'elaborazione e l'applicazione di una politica di backup adeguata da parte del CLIENTE dipendono dalla sottoscrizione a unità di lavoro specifiche.
È quindi responsabilità del CLIENTE assicurarsi della disponibilità delle risorse tecniche necessarie presso il Fornitore
per attuare la sua politica di backup o aggiustarla in funzione delle risorse disponibili.

Il Fornitore si impegna a notificare il CLIENTE in caso di vincoli di capacità e a fornire assistenza consulenziale per l'ottimizzazione delle risorse.
Gli obblighi del Fornitore si limiteranno all'attuazione delle esigenze espresse dal CLIENTE in materia di politica di backup, nell'ambito delle risorse sottoscritte.

#### 8.1.4. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité

Il Fornitore fornisce al CLIENTE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse 
attraverso diverse zone di disponibilità. È responsabilità del CLIENTE gestire efficacemente questa distribuzione delle risorse, 
per la quale può utilizzare gli strumenti del Fornitore disponibili a tale scopo.

In particolare, le applicazioni distribuite sulla piattaforma RedHat OpenShift devono supportare i meccanismi di ridondanza offerti dal Fornitore per poter beneficiare delle soluzioni di ripristino dell'attività o di continuità dell'attività associate.

## 9. Engagements et niveaux de services

Il Fornitore si impegna a garantire una sorveglianza continua delle prestazioni e dell'integrità di sicurezza delle sue
piattaforme e servizi, garantendo il loro funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di prestazione, è riconosciuta al momento della sua identificazione da parte del sistema di supervisione del Fornitore,
o a seguito di una notifica da parte di un utente del CLIENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi,
per garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal pieno ripristino del servizio, confermata sia dagli strumenti di supervisione del Fornitore, 
sia da un ritorno utente, garantendo così una ripresa effettiva delle operazioni e una misura fedele della durata dell'interruzione.

### 9.1. Engagements de disponibilité de la plateforme RedHat OpenShift

Il Fornitore si impegna a mantenere un livello di disponibilità e prestazioni conforme agli standard definiti per ogni periodo specificato.
Gli impegni di livello di servizio (Service Level Agreements, SLAs) si applicano purché il CLIENTE implementi i suoi sistemi attraverso
almeno due delle zone di disponibilità presenti nella regione interessata.

In assenza del rispetto di queste condizioni da parte del CLIENTE, questo non potrà reclamare l'applicazione degli SLAs interessati,
che sono specificamente identificati da un asterisco (*). L'accessibilità agli SLAs avviene tramite l'interfaccia CLIENTE. **Le misure si intendono calcolate mensilmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilità della piattaforma RedHat OpenShift: tasso di disponibilità garantito del 99,9%, calcolato su base 24h/24, 7j/7.

_**Note**_ : 

- *In risposta ad un attacco da negazione di servizio distribuito (DDoS), il Fornitore si riserva il diritto di aggiustare la sua configurazione di routing internet per
limitare l'impatto di tale attacco e salvaguardare la sua infrastruttura. In particolare, se un indirizzo IP appartenente al CLIENTE viene preso di mira, il Fornitore può ricorrere alla tecnica di blackholing
tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP mirato a monte presso i suoi fornitori, al fine di proteggere le risorse del CLIENTE così come quelle di altri clienti
e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il CLIENTE ad adottare misure simili, come l'utilizzo di software di firewall
di applicazioni web disponibili sul mercato, e a configurare accuratamente i suoi gruppi di sicurezza tramite l'API di comando.*

- *Il Fornitore insiste sulla necessità per il CLIENTE di minimizzare le aperture di flusso, evitando in particolare di rendere accessibili le porte
di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) da tutta Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

Il Fornitore si impegna a fornire al CLIENTE interfacce utente in lingua francese e inglese, facilitando così l'accesso e la gestione dei servizi forniti.
Il CLIENTE, da parte sua, si impegna a rispettare i vincoli legali e normativi vigenti relativi ai dati che affida al Fornitore per il trattamento.

In caso di trasmissione di dati soggetti a requisiti legali specifici, il Fornitore collaborerà con il CLIENTE per identificare e implementare
le misure di sicurezza necessarie, in conformità con gli obblighi del Fornitore e nell'ambito della prestazione di servizi.

Il Fornitore prende altresì l'impegno di esaminare e considerare le necessità specifiche legate ai settori di attività del CLIENTE,
rispettando i limiti della sua responsabilità, per garantire un livello di sicurezza adeguato alle informazioni trattate.

Se un progetto è suscettibile di impattare la sicurezza del servizio offerto, il Fornitore si impegna a informare il CLIENTE degli impatti potenziali,
delle misure correttive previste e dei rischi residui, garantendo una totale trasparenza.

Il Fornitore garantisce che non utilizzerà i dati del CLIENTE per scopi di test senza un accordo preventivo ed esplicito del CLIENTE
e si impegna a anonimizzare e proteggere la riservatezza di tali dati durante il loro trattamento.

In caso di cambiamento del subappaltatore per l'hosting, il Fornitore informerà il CLIENTE in anticipo, assicurandosi che questa transizione non influisca negativamente sul servizio fornito.

Su richiesta del CLIENTE, il Fornitore fornirà l'accesso al suo regolamento interno, alla sua carta etica, alle sanzioni applicabili in caso di mancato rispetto del
politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e ai requisiti specifici di sicurezza.

### 10.2. Limitazione di responsabilità del Fornitore

La struttura di responsabilità condivisa riduce efficacemente l'ambito dell'intervento del Fornitore agli aspetti legati alla fornitura di una piattaforma RedHat OpenShift funzionale, comprendenti:

- La gestione dell'infrastruttura IaaS che supporta la piattaforma RedHat OpenShift e il suo provisioning,
- La gestione dei sistemi necessari per il corretto funzionamento della piattaforma,
- Il mantenimento delle condizioni di sicurezza,
- L'aggiornamento della piattaforma RedHat OpenShift,
- Il backup dei dati di configurazione essenziali di questa piattaforma, ad eccezione dei dati e delle applicazioni del CLIENTE che sono di sua responsabilità.

Rimane escluso, in particolare, ma non limitatamente a:

- L'aggiornamento dei sistemi operativi e dei software installati dal CLIENTE sui suoi ambienti OpenShift nei suoi spazi locativi,
- La sicurezza dei programmi, software e applicazioni installati all'interno dell'ambiente OpenShift dal CLIENTE,
- Il backup dei dati a livello applicativo,
- La configurazione delle politiche di backup.

### 10.3. Limitazione dell'accesso

Nell'ambito di questa convenzione di servizio, il Fornitore è formalmente proibito di accedere ai tenants appartenenti al CLIENTE senza previa autorizzazione.
È responsabilità del CLIENTE fornire gli accessi necessari al personale del Fornitore, secondo le specifiche esigenze dell'hosting e, se del caso, dei servizi professionali di supporto, se questa opzione è stata scelta dal CLIENTE.

Il CLIENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla prestazione dei servizi concordati, assicurando così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del servizio del Fornitore è strettamente vietato.
Nel caso in cui un requisito tecnico specifico richiedesse tale accesso, questo potrebbe essere stabilito solo dopo aver chiaramente notificato il CLIENTE, fornito una giustificazione dettagliata e ottenuto il suo accordo scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del CLIENTE, assicurando che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 11. Cancellazione dei dati a fine contratto

Al termine del contratto, che arrivi a scadenza o che venga rescisso per qualsiasi motivo, il Fornitore si impegna a procedere alla cancellazione sicura di tutti i dati del Cliente, incluse le informazioni tecniche. Il Fornitore si assicurerà di comunicare al CLIENTE un preavviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del CLIENTE saranno quindi eliminati entro un termine massimo di trenta (30) giorni dalla notifica.

Per attestare questa eliminazione, il Fornitore fornirà al Cliente un certificato che conferma la cancellazione dei dati.

## 12. Legge applicabile

La legge applicabile a questa convenzione di servizio è la legge francese.

Nel caso di ricorso da parte del Fornitore, nell'ambito dei servizi forniti al CLIENTE, a una società terza, inclusi i subappaltatori, la cui sede legale, l'amministrazione centrale o l'ufficio principale si trova in uno Stato non membro dell'Unione Europea, o che è di proprietà o sotto il controllo di una società terza domiciliata al di fuori dell'Unione Europea, il Fornitore si impegna a garantire che tale società terza non avrà accesso ai dati trattati dal servizio del Fornitore.

È da notare che i dati in questione includono quelli affidati al Fornitore dal CLIENTE, così come tutti i dati tecnici come le identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i dati manipolati dalle reti, i log dell'infrastruttura tecnica, la directory, i certificati, la configurazione degli accessi, ecc., contenenti informazioni sul CLIENTE.

Per precisazione, la nozione di controllo è definita conformemente al II dell'articolo L233-3 del codice di commercio.