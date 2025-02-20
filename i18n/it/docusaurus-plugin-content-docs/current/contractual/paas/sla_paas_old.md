---
title: Convenzione di Servizio PaaS
---

**Indice dei contenuti**

- [1. Ambito](#1-ambito)
- [2. Acronomi](#2-acronomi)
- [3. Glossario](#3-glossario)
- [4. Oggetto della convenzione di servizio PaaS del Fornitore](#4-oggetto-della-convenzione-di-servizio-paas-del-fornitore)
- [5. Evoluzione della convenzione di servizio PaaS](#5-evoluzione-della-convenzione-di-servizio-paas)
- [6. Verifica](#6-verifica)
- [7. Descrizione del servizio](#7-descrizione-del-servizio)
- [8. Implementazione del servizio](#8-implementazione-del-servizio)
  - [8.1. Descrizione dei componenti tecnici](#81-descrizione-dei-componenti-tecnici)
    - [8.1.1. Piattaforma di servizio REDHAT OpenShift](#811-piattaforma-di-servizio-redhat-openshift)
    - [8.1.2. Infrastruttura software di gestione della piattaforma Redhat Openshift](#812-infrastruttura-software-di-gestione-della-piattaforma-redhat-openshift)
    - [8.1.3. Infrastruttura di backup associata](#813-infrastruttura-di-backup-associata)
    - [8.1.4. Implementazione di soluzioni di ripristino o di continuità dell'attività](#814-implementazione-di-soluzioni-di-ripristino-o-di-continuità-della-attività)
- [9. Impegni e livelli di servizio](#9-impegni-e-livelli-di-servizio)
  - [9.1. Impegni di disponibilità della piattaforma RedHat OpenShift](#91-impegni-di-disponibilità-della-piattaforma-redhat-openshift)
- [10. Modello di responsabilità condivise applicabile](#10-modello-di-responsabilità-condivise-applicabile)
  - [10.1. Responsabilità e Obblighi del Fornitore](#101-responsabilità-e-obblighi-del-fornitore)
  - [10.2. Limitazione della responsabilità del Fornitore](#102-limitazione-della-responsabilità-del-fornitore)
  - [10.3. Limitazione di accesso](#103-limitazione-di-accesso)
- [11. Cancellazione dei dati alla fine del contratto](#11-cancellazione-dei-dati-alla-fine-del-contratto)
- [12. Legge applicabile](#12-legge-applicabile)


## 1. Ambito

|           |                        |
| --------- | ---------------------- |
| Riferimento | CT.AM.JUR.ANX.PAAS 2.0 |
| Data      | 13 marzo 2024          |

## 2. Acronomi

| Acronimo    | Descrizione                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Comitato consultivo sui cambiamenti                                               |
| CMDB        | Configuration Management Database – Database di gestione delle configurazioni                             |
| COPIL       | Comitato direttivo                                                                                        |
| COSTRAT     | Comitato strategico                                                                                       |
| DB          | Database (base di dati)                                                                                   |
| DRP         | Disaster Recovery Plan (Piano di ripristino dell'attività)                                                |
| GTI         | Garanzia di Tempo di Intervento                                                                           |
| GTR         | Garanzia di Tempo di Risoluzione                                                                          |
| GTE         | Garanzia di Tempo di Escalation                                                                           |
| HYPERVISEUR | Sistema operativo che permette l'esecuzione di VM su una lamina di calcolo                                |
| ITIL        | Information Technology Infrastructure Library - Best practices per la gestione dei sistemi informativi    |
| IAAS        | Infrastructure as a Service                                                                               |
| MCO         | Mantenimento in condizioni operative                                                                      |
| MOA         | Committenza                                                                                               |
| MOE         | Direzione Lavori                                                                                          |
| OS          | Operating system (sistema operativo)                                                                      |
| PAQ         | Piano di Assicurazione Qualità                                                                            |
| PAAS        | Platform as a Service                                                                                     |
| SDM         | Service Delivery Manager                                                                                  |
| RFC         | Request For Change – Richiesta di cambiamento                                                             |
| RGPD        | Regolamento Generale sulla Protezione dei Dati (personali)                                                |
| RPO         | Recovery Point Objective – Freschezza dei dati ripristinati in caso di disastro                           |
| RTO         | Recovery Time Objective – Tempo di ripristino del servizio in caso di disastro                            |
| SLA         | Service Level Agreement – Accordo sui livelli di servizio                                                 |
| UO          | Unità Operativa                                                                                           |
| VABF        | Validazione di Idoneità al Buon Funzionamento                                                             |
| VABE        | Validazione di Idoneità alla Buona Esportabilità                                                          |
| VM          | Virtual Machine (Macchina virtuale)                                                                       |
| VSR         | Validazione di Servizio Regolare                                                                          |
| SNC         | SecNumCloud                                                                                               |

## 3. Glossario

Le espressioni di seguito impiegate nel presente documento saranno interpretate conformemente alle definizioni che sono loro attribuite di seguito:

| Espressione                                    | Definizione                                                                                                                                                                                                                                                                           |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                | La denominazione "Secure Temple" si riferisce al servizio di Infrastructure as a Service (IaaS), qualificato SecNumCloud, offerto dalla società Cloud Temple.                                                                                                                           |
| Regione                                        | Una "regione" nel contesto del cloud computing denota un insieme geograficamente delimitato di zone di disponibilità cloud, <br/>fornendo servizi di rete, di calcolo e di storage per ottimizzare la latenza, la performance <br/>e la conformità normativa locale                     |
| Zona di Disponibilità<br/>(AZ)<br/>(Availability zone) | Una specifica e isolata sezione dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi mediante una distribuzione geografica delle risorse.                                                                                    |
| Tenant                                          | Un'istanza isolata riservata a un utente o gruppo di utenti, condividendo una infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.                                                                                                            |

| Espressione               | Definizione                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                 | Un "incidente" designa qualsiasi evento imprevisto che interrompe il normale funzionamento di un sistema o compromette la sicurezza dei dati e delle infrastrutture.                                                                                                                                                                                                                                                                          |
| Problème                 | Un "problème" è una causa fondamentale di uno o più incidenti, identificata o sospettata, che richiede un'analisi e una soluzione per prevenirne la ricorrenza                                                                                                                                                                                                                                                                          |
| Changement               | Un "cambiamento" indica qualsiasi modifica apportata all'ambiente informatico, mirata a migliorare o correggere i sistemi, i processi o i servizi.                                                                                                                                                                                                                                                                                                |
| changement standard      | Un "cambiamento standard" è una modifica pre-approvata, a basso rischio, ripetitiva e in conformità con una procedura stabilita, nell'ambiente informatico.                                                                                                                                                                                                                                                                                      |
| Mise en production       | azione(i) di amministrazione per la realizzazione del cambiamento una volta che quest'ultimo è approvato <br/>(il cambiamento, secondo ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).                                                                                                                                                                                                             |
| Demande de service       | richiesta di evoluzione che è oggetto di una procedura, la cui realizzazione: <br/> i) non modifica la CMDB,<br/>ii) il metodo operativo, i costi e i rischi sono conosciuti e accettati in anticipo e non richiedono modalità specifiche di roll-back<br/> iii) la realizzazione è soggetta a un accordo di livello di servizio ed è inclusa nel canone del contratto quando viene effettuata in orari e giorni lavorativi.                             |
| Element de configuration | Un "elemento di configurazione" è un componente identificabile del sistema informativo, come un software, un hardware o un documento,<br/> soggetto a gestione nell'ambito della gestione dei servizi IT                                                                                                                                                                                                                                        |
| Service                  | Un "servizio" è un mezzo per fornire valore ai CLIENTi facilitando i risultati desiderati senza che questi debbano gestire <br/>i costi e i rischi specifici                                                                                                                                                                                                                                                                                       |
| Evenement                | Un "evento" è qualsiasi occorrenza rilevabile o identificabile in un sistema informatico o di rete, che può avere rilevanza per la gestione dei servizi IT                                                                                                                                                                                                                                                                                        |
| Sinistre                 | Un "sinistro" indica un evento dannoso imprevisto che comporta perdite materiali, finanziarie o di dati per un CLIENTE                                                                                                                                                                                                                                                                                                                           |
| Convention de service    | Questo documento, redatto nell'ambito di uno specifico contratto o delle Condizioni Generali di Vendita e Utilizzo (CGVU), e conforme ai requisiti del Riferimento SecNumCloud.                                                                                                                                                                                                                                                                   |
| Disponibilité            | La capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali di un servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA)                                                                                                                                                                                                                                                |
| Supervision              | Monitoraggio di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi. <br/>Questa attività si limita all'osservazione e al controllo, senza intervenire direttamente sugli elementi monitorati, una prerogativa riservata alle operazioni di Amministrazione.                                                                                                                           |

## 4. Oggetto della convenzione di servizio PaaS del Fornitore

La presente Convenzione di Servizi stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire al CLIENTE un'infrastruttura 
conforme alle specifiche dell'offerta «Platform as a Service – PaaS», debitamente qualificata SecNumCloud.

Oggetto della Convenzione di Servizi:

1. Precisare i requisiti di performance attesi dal CLIENTE in termini di funzionalità e affidabilità dell'infrastruttura.
2. Enunciare gli obblighi del Fornitore per soddisfare i livelli di servizio concordati.
3. Identificare le norme regolamentari applicabili specificamente all'infrastruttura proposta.
4. Assicurare un'uniformità e un'integrità nella valutazione della qualità dei servizi resi.
5. Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di performance quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore si vedesse revocare la sua qualificazione SecNumCloud, il presente Contratto potrà essere risolto di diritto, senza incorrere in penali, dal CLIENTE. 
In tale eventualità, il Fornitore si impegna a informare il CLIENTE di questa dequalifica mediante l'invio di una notifica ufficiale, tramite lettera raccomandata con avviso di ricevimento.

Vale la pena notare che una modifica o un aggiustamento della qualificazione SecNumCloud non sarà interpretato come una revoca della qualificazione iniziale.

## 5. Evoluzione della convenzione di servizio PaaS

Le modifiche o aggiunte apportate alla presente convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governo designati a tal fine. 
Queste proposte di cambiamento verranno esaminate all'interno del comitato strategico, l'unica istanza abilitata a determinare gli aspetti che richiedono una formalizzazione scritta.

Si conviene che qualsiasi evoluzione della convenzione, una volta convalidata, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la redazione e la firma di un appendice al contratto in corso.

I fattori che possono indurre una revisione di questa convenzione includono, senza limitarsi a:

- L'adattamento della piattaforma PaaS orchestrata dal Fornitore.
- Gli aggiustamenti apportati ai servizi distribuiti dal Fornitore.
- Le variazioni degli impegni presi e delle sanzioni applicabili.
- Le riconfigurazioni organizzative all'interno del CLIENTE o del Fornitore.
- L'espansione o la riduzione del campo di applicazione dei servizi a cui il CLIENTE ha sottoscritto.

La gestione delle versioni e delle revisioni della convenzione è annotata nel preambolo del documento per facilitarne il monitoraggio.

## 6. Audit 

Il Fornitore si impegna a permettere al CLIENTE, o a qualsiasi auditor terzo che quest'ultimo avrà designato, di consultare tutta la documentazione necessaria ad attestare il pieno rispetto delle obbligazioni legate alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

**Il Fornitore si impegna in particolare a mantenere a disposizione del CLIENTE l'elenco di tutti i terzi che possono accedere ai dati e a informarlo di qualsiasi cambiamento di subappaltatori.**

Con l'accettazione della presente convenzione di servizio, il CLIENTE conferisce la sua autorizzazione esplicita a:

1. __L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI)__ così come all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo Sistema Informativo agli standard definiti dal Riferimento SecNumCloud.
2. __Un fornitore di audit per la sicurezza dei sistemi informativi__, debitamente qualificato ed espressamente designato dal Fornitore, per condurre audit di sicurezza riguardanti il Servizio fornito dal Fornitore.

## 7. Descrizione del servizio

L'offerta di servizi proposta dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, 
che si allineano al principio di responsabilità condivisa dettagliato nelle norme stabilite dal riferimento SecNumCloud:

- La fornitura di una piattaforma di gestione dei container Redhat Openshift gestita dal Fornitore.

Si intende che il Fornitore impiegherà la sua competenza per realizzare le Prestazioni secondo le migliori pratiche professionali,

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

Le Prestataire fournit au CLIENT la console d'administration et l'API nécessaire à l'exploitation de ses environnements PaaS RedHat OpenShift. 
Il s'engage également à les maintenir en condition opérationnelle optimale et à assurer sa sécurité de manière continue.

Dans le cadre spécifique du service fourni, le Prestataire met à la disposition du CLIENT toutes les interfaces et API de la plateforme RedHat OpenShift au sein du tenant sélectionné. Il revient au CLIENT d'instaurer les dispositifs de sécurité appropriés, tels que les pare-feux (firewall), les pare-feux applicatifs Web (WAF), et autres mesures de protection, ainsi que de définir les règles de filtrage associées pour sécuriser l'accès à sa plateforme conformément à sa politique de sécurité.

Le Prestataire alerte le Client sur le fait qu'une utilisation anormale de sa console d'administration, notamment en cas de surcharge de ses APIs de commande (hammering), 
peut déclencher des mesures de sécurité automatiques entrainant le blocage de l'accès aux APIs de commande ou à certains services du Prestataire.  Il convient de souligner que cette situation ne constitue pas une indisponibilité du service mais une action de protection de l'Infrastructure du Prestataire ; 
par conséquent, le Client ne peut la considérer comme une indisponibilité dans ses calculs.

De plus, le Prestataire précise au Client que les requêtes parfaitement identiques (doublons) envoyées à ses APIs sont limitées à une par seconde (Throttling). 
Si le Client soumet des requêtes identiques à une fréquence supérieure, leur rejet ne doit pas être interprété comme une indisponibilité du service.

#### 8.1.3. Infrastructure de sauvegarde associée

Le Prestataire met à disposition du CLIENT une plateforme de sauvegarde intégrée, dédiée et gérée, destinée à la protection des données de ses environnements RedHat Openshift. 
Le Prestataire assure le maintien en condition opérationnelle et en condition de sécurité de cette plateforme intégrée de sauvegarde.
Indépendamment du nombre de zones de disponibilité souscrites par le CLIENT, le Prestataire garantit que la plateforme de 
sauvegarde du CLIENT sera située en dehors de la zone de disponibilité des charges de travail sauvegardées.

La prestation de sauvegarde se limite à la sauvegarde des machines virtuelles et des configurations de topologie de l'environnement IaaS des tenants SecNumCloud du CLIENT. 
L'élaboration et l'application d'une politique de sauvegarde adéquate par le CLIENT dépendent de la souscription à des unités d'œuvre spécifiques.
Il incombe donc au CLIENT de s'assurer de la disponibilité des ressources techniques nécessaires auprès du Prestataire
pour mettre en œuvre sa politique de sauvegarde ou d'ajuster cette dernière en fonction des moyens disponibles. 

Le Prestataire s'engage à notifier le CLIENT en cas de contraintes de capacité et à fournir une assistance conseil pour l'optimisation des ressources.
Les obligations du Prestataire se limiteront à la mise en œuvre des besoins exprimés par le CLIENT en matière de politique de sauvegarde, dans le cadre des ressources souscrites.

#### 8.1.4. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité

Il Fornitore fornisce al CLIENTE l'insieme delle soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse
attraverso diverse zone di disponibilità. Spetta al CLIENTE la responsabilità di gestire efficacemente tale distribuzione di risorse,
per la quale può sfruttare gli strumenti del Fornitore disponibili a tale scopo.

In particolare, le applicazioni distribuite sulla piattaforma RedHat OpenShift devono supportare i meccanismi di ridondanza offerti dal Fornitore per poter beneficiare delle soluzioni di ripristino delle attività o di continuità delle attività associate.

## 9. Impegni e livelli di servizio

Il Fornitore si impegna a garantire una sorveglianza continua delle prestazioni e dell'integrità di sicurezza delle sue
piattaforme e servizi, assicurando il loro funzionamento ottimale.

L'indisponibilità di un servizio, soggetta a un indicatore di prestazione, è riconosciuta una volta identificata dal sistema di supervisione del Fornitore,
o in seguito a una notifica da parte di un utente del CLIENTE. L'inizio dell'indisponibilità è fissato nel momento più precoce tra questi due eventi,
per garantire un calcolo preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal ripristino completo del servizio, confermata sia dagli strumenti di supervisione del Fornitore,
sia da un feedback dell'utente, garantendo così una ripresa effettiva delle operazioni e una misura fedele della durata dell'interruzione.

### 9.1. Impegni di disponibilità della piattaforma RedHat OpenShift

Il Fornitore si impegna a mantenere un livello di disponibilità e prestazioni conforme agli standard definiti per ogni periodo specificato.
Gli impegni di livello di servizio (Service Level Agreements, SLAs) si applicano a condizione che il CLIENTE implementi i suoi sistemi attraverso
almeno due delle zone di disponibilità presenti nella regione interessata.

In assenza del rispetto di queste condizioni da parte del CLIENTE, quest'ultimo non potrà rivendicare l'applicazione delle SLAs interessate,
le quali sono specificamente identificate con un asterisco (*). L'accessibilità alle SLAs avviene tramite l'interfaccia CLIENT. **Le misure sono calcolate mensilmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilità della piattaforma RedHat OpenShift: tasso di disponibilità garantito del 99,9%, calcolato su base 24h/24, 7g/7.

_**Osservazioni**_ : 

- *In risposta a un attacco di negazione del servizio distribuito (DDoS), il Fornitore si riserva il diritto di modificare la sua configurazione di routing internet per 
limitare l'impatto di tale attacco e salvaguardare la sua infrastruttura. In particolare, se un indirizzo IP appartenente al CLIENTE è mirato, il Fornitore può ricorrere alla tecnica di blackholing
via la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP mirato a monte presso i suoi fornitori, al fine di proteggere le risorse del CLIENTE così come quelle di altri clienti
e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il CLIENTE ad adottare misure simili, come l'utilizzo di software di firewall
per applicazioni web disponibili sul mercato, e a configurare attentamente i suoi gruppi di sicurezza tramite l'API di comando.*

- *Il Fornitore insiste sulla necessità per il CLIENTE di minimizzare le aperture di flusso, evitando in particolare di rendere accessibili le porte
di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) dall'intera Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 10. Modello di responsabilità condivise applicabile

### 10.1. Responsabilità e Obblighi del Fornitore

Il Fornitore si impegna a mettere a disposizione del CLIENTE interfacce utente in lingua francese e inglese, facilitando così l'accesso e la gestione dei servizi forniti.
Il CLIENTE, da parte sua, si impegna a rispettare i vincoli legali e normativi vigenti relativi ai dati che affida al Fornitore per il trattamento.

In caso di trasmissione di dati soggetti a requisiti legali specifici, il Fornitore collaborerà con il CLIENTE per identificare e implementare
le misure di sicurezza necessarie, in conformità con gli obblighi del Fornitore e nel contesto della prestazione di servizi.

Il Fornitore si impegna inoltre a esaminare e a prendere in considerazione le esigenze specifiche legate ai settori di attività del CLIENTE,
nel rispetto delle limitazioni della sua responsabilità, per garantire un livello di sicurezza adeguato alle informazioni trattate.

Se un progetto è suscettibile di impattare la sicurezza del servizio offerto, il Fornitore si impegna a informare il CLIENTE degli impatti potenziali,
delle misure correttive previste e dei rischi residui, assicurando una totale trasparenza.

Il Fornitore garantisce che non utilizzerà i dati del CLIENTE a fini di test senza il preventivo e esplicito consenso del CLIENTE
e si impegna ad anonimizzare e proteggere la riservatezza di tali dati durante il loro trattamento.

In caso di cambio di subappalto per l'hosting, il Fornitore informerà il CLIENTE in anticipo, garantendo che tale transizione non influisca negativamente sul servizio fornito.

Su richiesta del CLIENTE, il Fornitore fornirà l'accesso al suo regolamento interno, alla sua carta etica, alle sanzioni applicabili in caso di violazione delle sue
politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e ai requisiti specifici di sicurezza.

### 10.2. Limitazione della responsabilità del Fornitore

La struttura di responsabilità condivisa riduce efficacemente la portata dell'intervento del Fornitore agli aspetti legati alla fornitura di una piattaforma RedHat OpenShift funzionale, comprendendo:

- La gestione dell'infrastruttura IaaS che supporta la piattaforma RedHat OpenShift e il suo provisioning,
- La gestione dei sistemi necessari al corretto funzionamento della piattaforma,
- Il mantenimento in condizioni di sicurezza,
- L'aggiornamento della piattaforma RedHat OpenShift,
- Il backup dei dati di configurazione essenziali di questa piattaforma, ad eccezione dei dati e delle applicazioni del CLIENTE che rientrano nella sua responsabilità.

Esclude in particolare, ma non limitatamente a:

- L'aggiornamento dei sistemi operativi e dei software installati dal CLIENTE nei suoi ambienti OpenShift nei suoi spazi locativi,
- La sicurezza dei programmi, dei software e delle applicazioni installate all'interno dell'ambiente OpenShift dal CLIENTE,
- Il backup dei dati a livello applicativo,
- La configurazione delle politiche di backup.

### 10.3. Limitazione di accesso

Nel quadro di questa convenzione di servizio, è formalmente vietato al Fornitore di accedere ai tenant appartenenti al CLIENTE senza previa autorizzazione.
È responsabilità del CLIENTE fornire gli accessi necessari al personale del Fornitore, secondo le esigenze specifiche dell'hosting e,
se del caso, dei servizi professionali di supporto, se questa opzione è stata scelta dal CLIENTE.

Il CLIENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla prestazione dei servizi concordati,
assicurando così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione di servizio del Fornitore è strettamente proibito.
Nell'eventualità in cui un'esigenza tecnica specifica richiedesse tale accesso, quest'ultimo potrebbe essere stabilito
solo dopo aver chiaramente notificato il CLIENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del CLIENTE, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 11. Cancellazione dei dati a fine contratto

Al termine del contratto, che arrivi a scadenza o sia risolto per qualsiasi motivo, il Fornitore si impegna a procedere alla cancellazione
sicura della totalità dei dati del Cliente, inclusi i dati tecnici. Il Fornitore si impegnerà a comunicare al CLIENTE un preavviso formale,
rispettando un termine di ventuno (21) giorni di calendario. I dati del CLIENTE saranno quindi cancellati entro un termine massimo di trenta (30) giorni
successivi a questa notifica.

Per attestare questa cancellazione, il Fornitore rilascerà al Cliente un certificato che conferma la cancellazione dei dati.

## 12. Diritto applicabile

Il diritto applicabile per la presente convenzione di servizio è il diritto francese.

In caso di ricorso da parte del Fornitore, nell'ambito dei servizi forniti al CLIENTE, a una società terza, inclusi i subappaltatori, la cui sede sociale, amministrazione centrale
o principale stabilimento si trova in uno Stato non membro dell'Unione Europea, o che è proprietà o sotto il controllo di una società terza domiciliata al di fuori dell'Unione Europea,
il Fornitore si impegna a garantire che detta società terza non avrà alcun accesso ai dati trattati dal servizio del Fornitore.

Va notato che i dati oggetto della garanzia comprendono quelli affidati al Fornitore dal CLIENTE, così come tutti i dati tecnici come le identità dei beneficiari e degli amministratori dell'infrastruttura tecnica,
i dati manipolati dalle reti, i log dell'infrastruttura tecnica, l'area di servizio, i certificati, la configurazione degli accessi, ecc., contenenti informazioni sul CLIENTE.

Per precisione, la nozione di controllo è definita conformemente al II dell'articolo L233-3 del codice di commercio.