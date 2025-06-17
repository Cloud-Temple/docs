---
title: Convenzione di Servizio SecNumCloud PaaS
---

**Indice**

- [1. Contesto](#1-contesto)
- [2. Acronimi](#2-acronimi)
- [SNC           SecNumCloud](#snc-----------secnumcloud)
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
    - [8.1.4. Implementazione di soluzioni di ripresa o continuità operativa](#814-implementazione-di-soluzioni-di-ripristino-o-continuità-operativa)
- [9. Impegni e livelli di servizio](#9-impegni-e-livelli-di-servizio)
  - [9.1. Impegni di disponibilità della piattaforma RedHat OpenShift](#91-impegni-di-disponibilità-della-piattaforma-redhat-openshift)
- [10. Modello di responsabilità condivisa applicabile](#10-modello-di-responsabilità-condivisa-applicabile)
  - [10.1. Responsabilità e obblighi del Fornitore](#101-responsabilità-e-obblighi-del-fornitore)
  - [10.2. Limitazione di responsabilità del Fornitore](#102-limitazione-di-responsabilità-del-fornitore)
  - [10.3. Limitazione di accesso](#103-limitazione-di-accesso)
- [11. Cancellazione dei dati alla fine del contratto](#11-cancellazione-dei-dati-alla-fine-del-contratto)
- [12. Legge applicabile](#12-legge-applicabile)

## 1. Contesto

  --------------------- -------------------------------------------------
  Riferimento           CT.AM.JUR.ANX.PAAS 2.1

  Data                  21 gennaio 2025
  --------------------- -------------------------------------------------

## 2. Acronimi

  ------------------------------------------------------------------------------
  Acronimo      Descrizione
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Comitato Consultivo sui Cambiamenti

  CMDB          Configuration Management Database -- Database di Gestione delle Configurazioni
                dei sistemi

  COPIL         Comitato di Pilotaggio

  COSTRAT       Comitato Strategico

  DB            Database (base di dati)

  DRP           Disaster Recovery Plan (Piano di Recupero da Disastri)

  GTI           Garanzia Tempo di Intervento

  GTR           Garanzia Tempo di Risoluzione

  GTE           Garanzia Tempo di Escalation

  HYPERVISEUR   Sistema operativo che permette l'esecuzione di VM su una
                lama di calcolo

  ITIL          Information Technology Infrastructure Library - Buone pratiche
                per la gestione delle infrastrutture informatiche

  IAAS          Infrastructure as a Service

  MCO           Manutenzione in Condizione Operativa

  MOA           Gestione d'Opera

  MOE           Realizzazione d'Opera

  OS            Sistema Operativo

  PAQ           Piano di Assicurazione Qualità

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change -- Richiesta di Cambiamento

  RGPD          Regolamento Generale sulla Protezione dei Dati (personali)

  RPO           Recovery Point Objective -- Freschezza dei dati ripristinati in
                caso di incidente

  RTO           Recovery Time Objective -- Tempo di ripristino del servizio in
                caso di incidente

  SLA           Service Level Agreement -- Accordo sui Livelli di Servizio

  UO            Unità d'Opera

  VABF          Validazione dell'Adattamento al Buon Funzionamento

  VABE          Validazione dell'Adattamento alla Buona Utilizzabilità

  VM            Virtual Machine (Macchina Virtuale)

  VSR           Validazione del Servizio Regolare

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossario

Le espressioni seguenti utilizzate nel presente documento saranno interpretate conformemente alle definizioni che le riguardano di seguito:

  --------------------------------------------------------------------------------------------
  Espressione                       Definizione
  -------------------------------- -----------------------------------------------------------
  "Secure Temple"                Indica il servizio IaaS qualificato SecNumCloud, proposto
                                   dalla società Cloud Temple, come definito nell'attestazione
                                   consultabile sul sito dell'ANSSI e fornita in allegato alla
                                   presente Convenzione di servizio.

  Regione                           Una "regione" nel contesto del cloud computing indica
                                   un insieme geograficamente delimitato di zone di
                                   disponibilità cloud, che fornisce servizi di rete, calcolo e
                                   archiviazione per ottimizzare la latenza, le prestazioni e la
                                   conformità normativa locale.

  Zona                             Una sezione specifica e isolata dell'infrastruttura di
  Disponibilità (AZ) (Availability   calcolo cloud, progettata per garantire alta disponibilità
  zone)                            e resilienza dei servizi attraverso una distribuzione
                                   geografica delle risorse.

Tenant                           Un'istanza isolata riservata a un utente o gruppo di
                                   utenti, condividendo un'infrastruttura comune, mantenendo
                                   l'indipendenza e la sicurezza dei dati e delle applicazioni
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Espressione      Definizione
  --------------- ---------------------------------------------------------
  Incidente        Un "incidente" indica ogni evento imprevisto che
                  interrompe il funzionamento normale di un sistema o
                  compromette la sicurezza dei dati.

  Problema         Un "problema" è una causa fondamentale di uno o
                   più incidenti, identificata o sospettata, che richiede
                   un'analisi e una risoluzione per prevenire la sua
                   ricorrenza.

  Cambiamento      Un "cambiamento" indica ogni aggiunta, modifica o
                   cancellazione che impatta sul Servizio, autorizzata,
                   pianificata o supportata.

  Cambiamento      Un "cambiamento standard" è un cambiamento che
  standard         fa oggetto di una procedura, le cui modalità di
                   implementazione e impatti (inclusi quelli finanziari) sono
                   noti e accettati in anticipo dalle Parti. Viene quindi
                   integrato nel catalogo dei cambiamenti standard, e può
                   in alcuni casi avere una GTI e una GTR.

  Implementazione   azioni di amministrazione per la realizzazione del
  (Mise en production)   cambiamento quando è approvato (il cambiamento, nel senso
                   ITIL, riguarda solo la gestione del cambiamento e non la sua
                   realizzazione/concretizzazione).

  Richiesta di      richiesta di evoluzione che fa oggetto di una procedura, la
  servizio          realizzazione: i) non modifica la CMDB, ii) il procedimento
                   operativo, i costi e i rischi sono noti e accettati in anticipo
                   e non richiedono modalità di rollback specifiche iii) la
                   realizzazione è soggetta a un accordo di livello di servizio e
                   inclusa nella tariffa del contratto quando è realizzata in
                   orari di lavoro e giorni lavorativi.

  Elemento di       Un "elemento di configurazione" è un componente
  configurazione   identificabile del sistema informativo, come un
                   software, un hardware o un documento, soggetto a gestione
                   nel contesto della gestione dei servizi IT

  Servizio         Un "servizio" indica il servizio qualificato SecNumCloud,
                   fornito dal PRESTATORE al COMANDITARIO, come descritto
                   nella sezione «Descrizione del Servizio» della presente
                   Convenzione di servizio.

  Evento           Un "evento" è ogni occorrenza rilevabile o identificabile
                   che può avere importanza per la gestione del Servizio.

  Sinistro         Un «sinistro» indica un evento grave di origine
                   naturale o umana, accidentale o intenzionale, che causa
                   perdite e danni significativi alla Parte danneggiata.

  Convenzione di   Questo documento, redatto nel quadro di un contratto
  servizio         specifico o delle Condizioni Generali di Vendita e
                   Utilizzo (CGVU), in conformità con i requisiti del
                   Riferimento SecNumCloud.

  Disponibilità    Capacità di garantire la disponibilità e il mantenimento
                   delle prestazioni ottimali di un servizio, in accordo con i
                   criteri e gli impegni definiti negli Accordi di Livello di
                   Servizio (SLA)

Supervisione     Sorveglianza di un Sistema Informativo o di un
                 Servizio, che implica la raccolta di diverse dati come
                 misure e allarmi. Questa attività si limita all'osservazione
                 e al monitoraggio, senza intervenire direttamente sugli
                 elementi sorvegliati, una prerogativa che appartiene alle
                 operazioni di Amministrazione

## 4. Oggetto della convenzione dei servizi PaaS del Fornitore

La presente Convenzione dei Servizi stabilisce i termini e le condizioni
secondo cui il Fornitore si impegna a fornire al COMMITTENTE una
infrastruttura conforme alle specifiche dell'offerta « Platform as a
Service -- PaaS », correttamente qualificata SecNumCloud.

Oggetto della Convenzione dei Servizi:

1. Definire i requisiti di prestazione attesi dal COMMITTENTE
    in termini di funzionalità e affidabilità dell'infrastruttura.
2. Elenca le obbligazioni del Fornitore per soddisfare i
    livelli di servizio concordati.
3. Identificare le normative applicabili specificamente all'
    infrastruttura proposta.
4. Garantire un'armonizzazione e un'integrità nella valutazione della
    qualità dei servizi erogati.
5. Garantire l'eccellenza dei servizi forniti, valutata attraverso
    indicatori di prestazione quantitativi.

È stabilito che, in caso in cui il Fornitore venisse privato della qualifica SecNumCloud, il presente Contratto potrà essere risolto di diritto, senza incorrere in penali, dal COMMITTENTE. In tale evenienza, il Fornitore si impegna a informare il COMMITTENTE di tale privazione mediante invio di una notifica ufficiale, attraverso una lettera raccomandata con ricevuta di ritorno.

Va precisato che una modifica o un adattamento della qualifica SecNumCloud non sarà interpretata come revoca della qualifica iniziale.

## 5. Evoluzione della convenzione di servizio PaaS

Le modifiche o aggiunte apportate alla presente convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. Queste proposte di modifica saranno esaminate dal comitato strategico, unica istanza autorizzata a determinare gli aspetti che necessitano di una formalizzazione scritta.

Si conviene che ogni evoluzione della convenzione, dopo la validazione, che modifica le condizioni finanziarie inizialmente stabilite, richiederà la stesura e la sottoscrizione di un accordo integrativo al contratto in corso.

I fattori che possono indurre una revisione di questa convenzione includono, ma non si limitano a:

- L'adattamento della piattaforma PaaS orchestrata dal Prestatore.
- Gli aggiustamenti apportati ai servizi distribuiti dal Prestatore.
- Le variazioni degli impegni assunti e delle sanzioni applicabili.
- Le riconfigurazioni organizzative all'interno del COMMITTENTE o del Prestatore.
- L'espansione o la riduzione del campo di applicazione dei servizi ai quali il COMMITTENTE ha sottoscritto.

La gestione delle versioni e delle revisioni della convenzione è registrata nell'introduzione del documento per facilitarne il tracciamento.

## 6. Audit

Il Fornitore si impegna a permettere al COMMITTENTE, o a qualsiasi auditor terzo da quest'ultimo designato, di consultare l'intero insieme dei documenti necessari per attestare il rispetto integrale degli obblighi derivanti dalla conformità alle disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

**Il Fornitore si impegna in particolare a mettere a disposizione del COMMITTENTE l'elenco di tutti i terzi che possono accedere ai dati e a informare del cambiamento di subappaltatori.**

Con l'accettazione del presente accordo di servizio, il COMMITTENTE conferisce il proprio consenso esplicito a:

1. **L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI)** e all'ente competente per effettuare la verifica della conformità del Servizio e del suo Sistema Informatico agli standard definiti dal Referente SecNumCloud.
2. **Un fornitore di audit di sicurezza dei sistemi informativi**, correttamente qualificato ed espressamente designato dal Fornitore, per effettuare audit di sicurezza relativi al Servizio fornito dal Fornitore.

## 7. Descrizione del servizio

L'offerta di servizi proposta dal Prestatore si caratterizza con la messa a disposizione delle prestazioni seguenti, le quali si allineano con il principio di responsabilità condivisa dettagliato nei documenti stabiliti dal riferimento SecNumCloud:

- La fornitura di una piattaforma di gestione dei container Redhat Openshift gestita dal Prestatore.

Si intende che il Prestatore metterà a disposizione la propria esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali, conformemente alle loro Specifiche e rispettando le norme della propria certificazione ISO/IEC 27001 nonché le direttive del Riferimento SecNumCloud.

## 8. Implementazione del servizio

Si precisa che tutte le operazioni e i componenti fisici coinvolti nell'erogazione del servizio qualificato, di cui la presente convenzione è oggetto, si trovano nell'Unione Europea.
Questo include in particolare il supporto, la supervisione operativa e la supervisione della sicurezza (SOC).

### 8.1. Descrizione dei componenti tecnici

I servizi PaaS (Platform as a Service) comprendono l'intero insieme dei componenti e dei servizi necessari per il loro funzionamento ottimale nel rispetto della qualifica SecNumCloud.

In questo contesto, la loro performance e affidabilità sono strettamente correlate ai componenti tecnici e ai servizi dell'**infrastruttura IaaS** del Prestatore, come specificato nel documento [Convenzione di Servizio IaaS](../iaas/sla_iaas.md) del Prestatore.

#### 8.1.1. Piattaforma del servizio REDHAT OpenShift

Il servizio include la messa a disposizione all'interno di una regione, su 3 zone di disponibilità,

#### 8.1.2. Infrastruttura software per il controllo della piattaforma Redhat Openshift

Il Fornitore fornisce al Committente la console di amministrazione e l'API necessaria per l'operazione dei propri ambienti PaaS RedHat OpenShift. Si impegna inoltre a mantenerle in condizioni operative ottimali e a garantire la loro sicurezza in modo continuo.

Nel contesto specifico del servizio fornito, il Fornitore mette a disposizione del Committente tutte le interfacce e le API della piattaforma RedHat OpenShift all'interno del tenant selezionato. Spetta al Committente stabilire i dispositivi di sicurezza appropriati, come i firewall, i firewall applicativi Web (WAF) e altre misure di protezione, nonché definire le relative regole di filtraggio per garantire l'accesso alla propria piattaforma in conformità con la propria politica di sicurezza.

Il Fornitore avvisa il Committente che un'utilizzo anomalo della propria console di amministrazione, in particolare in caso di sovraccarico delle API di comando (hammering), può attivare misure di sicurezza automatiche che bloccano l'accesso alle API di comando o a determinati servizi del Fornitore. Si sottolinea che questa situazione non costituisce un'indisponibilità del servizio, ma un'azione di protezione dell'infrastruttura del Fornitore; pertanto, il Committente non può considerarla come un'indisponibilità nei propri calcoli.

Inoltre, il Fornitore informa il Committente che le richieste perfettamente identiche (duplicati) inviate alle proprie API sono limitate a una al secondo (Throttling). Se il Committente invia richieste identiche a una frequenza superiore, il loro rifiuto non deve essere interpretato come un'indisponibilità del servizio.

#### 8.1.3. Infrastruttura di backup associata

Il Prestatore mette a disposizione del COMMittente una piattaforma di backup integrata, dedicata e gestita, destinata alla protezione dei dati dei suoi ambienti RedHat Openshift. Il Prestatore garantisce il mantenimento in condizioni operative e di sicurezza di questa piattaforma integrata di backup. Indipendentemente dal numero di zone di disponibilità sottoscritte dal COMMittente, il Prestatore garantisce che la piattaforma di backup del COMMittente sia situata al di fuori della zona di disponibilità dei carichi di lavoro salvati.

La prestazione di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS dei tenant SecNumCloud del COMMittente. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del COMMittente dipendono dalla sottoscrizione di unità di lavoro specifiche. Spetta quindi al COMMittente assicurarsi della disponibilità delle risorse tecniche necessarie presso il Prestatore per attuare la propria politica di backup o per aggiornarla in base alle risorse disponibili.

Il Prestatore si impegna a notificare al COMMittente in caso di vincoli di capacità e a fornire un'assistenza consulenza per l'ottimizzazione delle risorse. Gli obblighi del Prestatore si limiteranno all'implementazione delle esigenze espresse dal COMMittente in materia di politica di backup, nel contesto delle risorse sottoscritte.

#### 8.1.4. Implementazione di soluzioni di continuità operativa o di ripristino delle attività

Il Fornitore fornisce al COMMITTENTE l'insieme delle soluzioni tecniche necessarie per garantire una distribuzione ottimale delle proprie risorse attraverso diverse aree di disponibilità. Spetta al COMMITTENTE la responsabilità di gestire in modo efficace questa distribuzione delle risorse, per la quale ha la possibilità di utilizzare gli strumenti del Fornitore disponibili a tale scopo.

In particolare, le applicazioni distribuite sulla piattaforma RedHat OpenShift devono supportare i meccanismi di ridondanza proposti dal Fornitore per poter beneficiare delle soluzioni di continuità operativa o di ripristino delle attività associate.

## 9. Impegni e livelli di servizio

Il Fornitore si impegna a garantire un monitoraggio continuo delle prestazioni e dell'integrità sicura delle proprie piattaforme e servizi, vigilando sul loro funzionamento ottimale.

L'inutilizzabilità di un servizio, che è oggetto di un indicatore di prestazione, è riconosciuta non appena identificata dal sistema di monitoraggio del Fornitore, o a seguito di una notifica da parte di un utente del COMANDITARIO. L'inizio dell'inutilizzabilità è fissato al momento più precoce tra questi due eventi, al fine di garantire un calcolo preciso e giusto del tempo di inutilizzabilità.

La fine dell'inutilizzabilità è ufficialmente segnata dal ripristino completo del servizio, confermato sia dagli strumenti di monitoraggio del Fornitore, sia da un feedback utente, garantendo così un ripristino effettivo delle operazioni e una misurazione fedele della durata dell'interruzione.

### 9.1. Impegni di disponibilità della piattaforma RedHat OpenShift

Il Fornitore si impegna a mantenere un livello di disponibilità e di prestazioni conforme agli standard definiti per ogni periodo specificato. Gli accordi sul livello dei servizi (Service Level Agreements, SLA) si applicano a condizione che il COMANDANTE implementi i propri sistemi attraverso almeno due delle zone di disponibilità presenti nella regione interessata.

In assenza del rispetto di tali condizioni da parte del COMANDANTE, quest'ultimo non potrà richiedere l'applicazione degli SLA interessati, i quali sono specificamente identificati da un asterisco (\*). L'accesso agli SLA avviene tramite l'interfaccia COMANDANTE. **Le misure si intendono calcolate mensilmente**:

- **SLA 1 (\*) : IC-PAAS_SNC-01** -- Disponibilità della piattaforma RedHat OpenShift: tasso di disponibilità garantito del 99,9%, calcolato su base 24h/24, 7g/7.

***Osservazioni*** :

- *Di fronte a un attacco di tipo DDoS, il Fornitore si riserva il diritto di modificare la propria configurazione di routing internet per limitare l'impatto di tale attacco e proteggere la propria infrastruttura. In particolare, se un indirizzo IP appartenente al COMANDANTE viene bersagliato, il Fornitore può ricorrere alla tecnica del blackholing tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP bersagliato a monte presso i propri fornitori, al fine di proteggere le risorse del COMANDANTE nonché quelle di altri COMANDANTI e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il COMANDANTE ad adottare misure simili, come l'utilizzo di software firewall per applicazioni web disponibili sul mercato, e a configurare attentamente i propri gruppi di sicurezza tramite l'API di comando.*

- *Il Fornitore insiste sulla necessità per il COMANDANTE di minimizzare le aperture di flusso, evitando in particolare di rendere accessibili i porti di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) da tutto Internet (sottorete 0.0.0.0/0), nonché i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 10. Modello di responsabilità condivise applicabile

### 10.1. Responsabilità e Obblighi del Prestatore

Il Prestatore si impegna a mettere a disposizione del COMMITTENTE delle interfacce utente in lingua francese e inglese, facilitando così l'accesso e la gestione dei servizi forniti. Il COMMITTENTE, a sua volta, si impegna a rispettare i vincoli legali e regolamentari in vigore relativi ai dati che conferisce al Prestatore per il trattamento.

In caso di trasmissione di dati soggetti a requisiti legali specifici, il Prestatore collaborerà con il COMMITTENTE per identificare e implementare le misure di sicurezza necessarie, conformemente agli obblighi del Prestatore e nel quadro della prestazione dei servizi.

Il Prestatore si impegna inoltre a esaminare e considerare le esigenze specifiche relative ai settori di attività del COMMITTENTE, rispettando i limiti della sua responsabilità, per garantire un livello di sicurezza adeguato alle informazioni trattate.

Se un progetto è suscettibile di impattare la sicurezza del Servizio offerto o la disponibilità di detto Servizio o ancora di generare una perdita di funzionalità, il Prestatore si impegna a informare attraverso la console o via e-mail il contatto del COMMITTENTE e in un termine ragionevole del COMMITTENTE sugli impatti potenziali, sulle misure correttive previste e sui rischi residui che lo riguardano, garantendo una trasparenza totale.

Il Prestatore si impegna a non utilizzare i dati del COMMITTENTE derivanti dalla produzione per effettuare test, ad eccezione del fatto di ottenere preventivamente l'autorizzazione esplicita del COMMITTENTE, nel qual caso il Prestatore si impegna a anonimizzare tali dati e a garantirne la riservatezza durante l'anonimizzazione.

In caso di cambio di sottappaltatore per l'hosting, il Prestatore informerà il COMMITTENTE in anticipo, assicurandosi che questa transizione non danneggi negativamente il servizio fornito.

Su richiesta del COMMITTENTE, il Prestatore fornirà l'accesso al suo regolamento interno, alla sua carta etica, alle sanzioni applicabili in caso di mancato rispetto della sua politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e alle esigenze specifiche di sicurezza.

Il Prestatore si impegna a informare il COMMITTENTE di ogni cambiamento imminente su elementi software sotto la responsabilità di Cloud Temple, nel momento in cui non possa essere garantita la completa compatibilità.

### 10.2. Limitazione di responsabilità del Prestatore

La struttura di responsabilità condivisa riduce efficacemente l'ambito di intervento del Prestatore agli aspetti relativi alla fornitura di una piattaforma RedHat OpenShift funzionante, comprensiva di:

- La gestione dell'infrastruttura IaaS che supporta la piattaforma RedHat OpenShift e il suo provisioning,
- La gestione dei sistemi necessari al corretto funzionamento della piattaforma,
- Il mantenimento in condizioni di sicurezza,
- L'aggiornamento della piattaforma RedHat OpenShift,
- La salvataggio dei dati di configurazione essenziali di questa piattaforma, ad eccezione dei dati e delle applicazioni del COMMITTENTE che rientrano nella sua responsabilità.

Esclude in particolare, ma non solo:

- L'aggiornamento dei sistemi operativi e dei software installati dal COMMITTENTE sui suoi ambienti OpenShift nei suoi spazi locativi,
- La sicurezza dei programmi, software e applicazioni installati all'interno dell'ambiente OpenShift dal COMMITTENTE,
- La salvataggio dei dati a livello applicativo,
- La configurazione delle politiche di salvataggio.

### 10.3. Limitazione di accesso

All'interno di questa convenzione di servizio, il Fornitore è formalmente vietato dall'accedere ai tenant appartenenti al Committente senza autorizzazione preventiva. Spetta al Committente fornire gli accessi necessari al personale del Fornitore, in base alle esigenze specifiche dell'hosting e, se del caso, dei servizi professionali di supporto, se questa opzione è stata scelta dal Committente.

Il Committente riconosce che questi accessi sono concessi esclusivamente per gli scopi connessi alla prestazione dei servizi concordati, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del servizio del Fornitore è strettamente vietato. In caso di esigenza tecnica specifica che richiedesse un tale accesso, quest'ultimo potrebbe essere stabilito solo dopo aver chiaramente notificato al Committente, fornito una giustificazione dettagliata e ottenuto il suo accordo scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del Committente, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 11. Cancellazione dei dati alla fine del contratto

Al termine del contratto, sia che scada o venga risolto per qualsiasi motivo, il Prestatore si impegna a procedere alla cancellazione sicura dell'intera quantità di dati del COMMittente, inclusi i dati tecnici. Il Prestatore garantirà di comunicare al COMMittente un preavviso formale, rispettando un termine di ventuno (21) giorni calendariali. I dati del COMMittente verranno quindi eliminati entro un massimo di trenta (30) giorni dalla detta notifica.

Per attestare questa eliminazione, il Prestatore rilascerà al COMMittente un certificato che conferma la cancellazione dei dati.

## 12. Legge applicabile

La legge applicabile per la presente convenzione di servizio è la legge francese.

In caso di ricorso da parte del Prestatore, nel quadro dei servizi forniti al COMMANDITAIRE, a una società terza, compreso un subappaltatore, la cui sede sociale, amministrazione centrale o principale stabilimento si trova in uno Stato non membro dell'Unione Europea, o che è di proprietà o sotto il controllo di una società terza con sede fuori dall'Unione Europea, il Prestatore si impegna a garantire che detta società terza non avrà alcun accesso ai dati elaborati dal servizio del Prestatore.

Si precisa che i dati indicati comprendono quelli affidati al Prestatore dal COMMANDITAIRE, nonché tutti i dati tecnici, come le identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i dati elaborati dai reti, i log dell'infrastruttura tecnica, l'elenco, i certificati, la configurazione degli accessi, ecc., contenenti informazioni sul COMMANDITAIRE.

Per precisazione, il concetto di controllo è definito conformemente al II dell'articolo L233-3 del codice commerciale.