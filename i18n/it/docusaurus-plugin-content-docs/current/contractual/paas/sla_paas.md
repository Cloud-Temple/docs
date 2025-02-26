---
title: Convention de Service SecNumCloud PaaS
---

**Table des matières**

-   [1. Cadre](#X09af6387e1d2792b8edc09fc15abd136a837db5)
-   [2. Acronymes](#Xc79d173393c04b42ba8cdf223cca3c0202f4dee)
-   [3. Glossaire](#X0c9d1d82fdc5fcc3d01a320dd2dd3715a6900b4)
-   [4. Objet de la convention de service PaaS du
    Prestataire](#X23ec3c3767539f9e69acc7cbf5af8aa8c1b6ad7)
-   [5. Evolution de la convention de service
    PaaS](#Xa7161677dcf9a35d02c20807040326b39d55881)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Description du
    service](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
-   [8. Mise en œuvre du
    service](#Xc98fb6da582d483e300add6a80df6e3eb76498a)
    -   [8.1. Description des composants
        techniques](#Xa61c340e3fdf14082cef411d3a913fc4bdeeb4c)
        -   [8.1.1. Plateforme de service REDHAT
            OpenShift](#Xf81d22ed0abca8eab163c160107fa228901d82c)
        -   [8.1.2. Infrastructure logiciel de pilotage de la plateforme
            Redhat Openshift](#Xf11ec2e6a431ae11852fe3129245b4d0fd0747b)
        -   [8.1.3. Infrastructure de sauvegarde
            associée](#X77b1112fa2c2a53eb0cf09b416962164b77b437)
        -   [8.1.4. Mise en œuvre de solutions de reprise d\'activité ou
            de continuité
            d\'activité](#Xae1394210f1c9bee4293a93160d2d11cc70ebdd)
-   [9. Engagements et niveaux de
    services](#Xad2b4ae071a52a99b502c4e84cbba3f15ac78f8)
    -   [9.1. Engagements de disponibilité de la plateforme RedHat
        OpenShift](#X273341276df81e9f6fad2000ac84216560e59fa)
-   [10. Modèle de responsabilités partagées
    applicable](#Xa90d4e180ca2ae1d92e4e4cf00f20aca5061eac)
    -   [10.1. Responsabilité et Obligations du
        Prestataire](#Xe5cf73850ea2189ab60f41560bf52e97d3019f9)
    -   [10.2. Limitation de responsabilité du
        Prestataire](#X8856c8f606130116944398b24484722823c023c)
    -   [10.3. Limitation
        d\'accès](#X902763258f1242326933ce46892d3f549e73e30)
-   [11. Effacement des données en fin de
    contrat](#Xbe642a80027ce4ad88cc932e98b8661c2a0d3a6)
-   [12. Droit applicable](#Xa219184d62eb90dfeec612801fd05c5d816c331)

## 1. Cadre

  --------------------- -------------------------------------------------
  Référence             CT.AM.JUR.ANX.PAAS 2.1

  Date                  21 janvier 2025
  --------------------- -------------------------------------------------

## 2. Acronymes

  ------------------------------------------------------------------------------
  Acronyme      Description
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Comitato consultivo sulle modifiche

  CMDB          Configuration Management Database -- Base dati gestione delle
                configurazioni

  COPIL         Comitato di pilotaggio

  COSTRAT       Comitato strategico

  DB            Database (base di dati)

  DRP           Disaster Recovery Plan (Piano di ripristino delle attività)

  GTI           Garanzia di Tempo di Intervento

  GTR           Garanzia di Tempo di Risoluzione

  GTE           Garanzia di Tempo di Escalation

  HYPERVISEUR   Sistema operativo che permette l\'esecuzione di VM su una
                macchina fisica

  ITIL          Information Technology Infrastructure Library - Best practices
                per la gestione dei sistemi di informazione

  IAAS          Infrastructure as a Service

  MCO           Manutenzione in condizioni operative

  MOA           Committente

  MOE           Direttore dei Lavori

  OS            Sistema operativo

  PAQ           Piano di Assicurazione Qualità

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change -- Richiesta di cambiamento

  RGPD          Regolamento Generale sulla Protezione dei Dati (personali)

  RPO           Recovery Point Objective -- Freschezza dei dati ripristinati in
                caso di disastro

  RTO           Recovery Time Objective -- Tempo di ripristino del servizio in
                caso di disastro

  SLA           Service Level Agreement -- Accordo sui livelli di servizi

  UO            Unità di Produzione

  VABF          Validazione di Idroneità al Buon Funzionamento

  VABE          Validazione di Idroneità alla Buona Gestibilità

  VM            Virtual Machine (Macchina virtuale)

  VSR           Validazione del Servizio Regolare

  SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossaire

Le espressioni di seguito utilizzate nel presente documento saranno
interpretate conformemente alle definizioni che vengono loro attribuite
qui di seguito:

  --------------------------------------------------------------------------------------------
  Espressione                    Definizione
  ------------------------------ -----------------------------------------------------------
  \"Secure Temple\"              Designa il servizio IaaS qualificato SecNumCloud, proposto
                                 dalla società Cloud Temple, come definito nel certificato
                                 consultabile sul sito dell'ANSSI e fornito in allegato alla
                                 presente Convenzione di servizio.

  Regione                        Una \"regione\" nel contesto del cloud computing designa
                                 un insieme geograficamente delimitato di zone di
                                 disponibilità cloud, fornendo servizi di rete, computazione
                                 e stoccaggio per ottimizzare la latenza, la performance e la
                                 conformità regolamentare locale.

  Zona                           Una sezione specifica e isolata dell\'infrastruttura di
  Disponibilità(AZ)(Availability cloud computing, progettata per garantire l'alta disponibilità
  zone)                          e la resilienza dei servizi tramite una distribuzione
                                 geografica delle risorse.

  Tenant                         Una istanza isolata riservata per un utente o gruppo
                                 d\'utenti, che condivide una infrastruttura comune mantenendo
                                 l'indipendenza e la sicurezza dei dati e delle applicazioni.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Espressione      Definizione
  --------------- ---------------------------------------------------------
  Incidente        Un \"incidente\" designa ogni evento imprevisto che
                  disturba il funzionamento normale di un sistema o
                  compromette la sicurezza dei dati.

  Problema         Un \"problema\" è una causa fondamentale di uno o
                  molti incidenti, identificata o sospettata, che necessita
                  di un'analisi e risoluzione per prevenirne la ricorrenza.

  Cambiamento      Un \"cambiamento\" designa ogni aggiunta, una modifica o
                  eliminazione che impatta il Servizio, essendo stata
                  autorizzata, pianificata o gestita.

  Cambiamento      Un \"cambiamento standard\" è un cambiamento che è
  standard         oggetto di una procedura, le cui modalità di messa in
                  produzione e impatti (inclusi finanziari) sono conosciuti e
                  accettati in anticipo dalle Parti. È quindi integrato nel
                  catalogo dei cambiamenti standard e può secondo i casi avere
                  una GTI e una GTR.

  Messa in         Azione/i di amministrazione per la realizzazione del cambiamento
  produzione       quando questo è approvato (il cambiamento, nel senso ITIL,
                  riguarda solo la gestione del cambiamento e non la sua
                  realizzazione/concretizzazione).

  Richiesta di     Richiesta di evoluzione che è oggetto di una procedura e la
  servizio         sua realizzazione: i) non modifica la CMDB, ii) il modo “operativo”,
                  i costi e i rischi sono conosciuti e accettati in anticipo e non
                  richiedono modalità di ritorno specifiche iii) la realizzazione è soggetta
                  ad un accordo sul livello del servizio ed inclusa nel canone del contratto
                  quando viene effettuata in ore lavorative e giorni lavorativi.

  Elemento di      Un \"elemento di configurazione\" è un componente
  configurazione   identificabile del sistema informativo, come un
                  software, un hardware o un documento, soggetto alla gestione
                  nell'ambito della gestione dei servizi IT.

  Servizio         Un \"servizio\" designa il servizio qualificato SecNumCloud,
                  erogato al COMMITTENTE dal Fornitore, come descritto nella sezione
                  « Descrizione del Servizio » della presente Convenzione di servizio.

  Evento           Un \"evento\" è ogni occorrenza rilevabile o
                  identificabile che può essere importante per la gestione
                  del Servizio.

  Sinistro         Un « sinistro » designa un evento grave di origine
                  naturale o umana, accidentale o intenzionale,
                  causando perdite e danni significativi alla Parte danneggiata.

  Convenzione di   Questo documento, stabilito nel quadro di un contratto
  servizio         specifico o delle Condizioni Generali di Vendita e
                  Utilizzo (CGVU), e questo, in conformità con i
                  requisiti del Riferimento SecNumCloud.

  Disponibilità    Capacità di assicurare la disponibilità e il mantenimento
                  delle performance ottimali di un servizio, in accordo con i
                  criteri e impegni definiti negli Accordi di

                  Livello di Servizio (SLA)

  Supervisione    Sorveglianza di un Sistema Informativo o di un
                  Servizio, che implica la raccolta di vari dati
                  come misure e allarmi. Questa attività si limita
                  all'osservazione e al monitoraggio, senza intervenire
                  direttamente sugli elementi sorvegliati, prerogativa
                  che appartiene alle operazioni di Amministrazione.
  -------------------------------------------------------------------------

## 4. Oggetto della convenzione di servizio PaaS del Fornitore

La presente Convenzione di Servizi stabilisce i termini e le condizioni
secondo i quali il Fornitore si impegna a fornire al COMMITTENTE una
infrastruttura conforme alle specifiche dell'offerta « Platform as a
Service -- PaaS », debitamente qualificata SecNumCloud.

Oggetto della Convenzione di Servizi:

1.  Specificare i requisiti di performance attesi dal COMMITTENTE
    in termini di funzionalità e affidabilità dell'infrastruttura.
2.  Enunciare gli obblighi del Fornitore per soddisfare i
    livelli di servizio concordati.
3.  Identificare le norme regolamentari applicabili specificamente
    all'infrastruttura proposta.
4.  Assicurare uniformità e integrità nella valutazione della
    qualità dei servizi resi.
5.  Garantire l'eccellenza dei servizi forniti, valutata tramite
    indicatori di performance quantitativi.

È stipulato che, nel caso in cui al Fornitore venga
ritirata la qualifica SecNumCloud, il presente Contratto potrà essere
risolto di diritto, senza incorrere in penali, dal
COMMITTENTE. In una tale eventualità, il Fornitore si impegna a
informare il COMMITTENTE di questa dequalificazione mediante invio di una
notifica ufficiale, mediante lettera raccomandata con richiesta
di ricevuta di ritorno.

Si precisa che una modifica o un aggiustamento della
qualifica SecNumCloud non sarà interpretato come una revoca della
qualifica iniziale.

## 5. Evoluzione della convenzione di servizio PaaS

Le modifiche o gli aggiustamenti apportati alla presente convenzione di servizio
derivano esclusivamente dalle richieste formulate dagli organi di
governance designati a tal fine. Queste proposte di cambiamento saranno
esaminate all'interno del comitato strategico, unica istanza abilitata a
determinare gli aspetti che richiedono una formalizzazione scritta.

È convenuto che ogni evoluzione della convenzione, dopo la validazione,
che altera le condizioni finanziarie inizialmente stabilite, richiederà
la redazione e la firma di un appendice al contratto in corso.

I fattori che possono indurre una revisione di questa convenzione includono,
ma non si limitano a:

-   L'adattamento della piattaforma PaaS orchestrata dal Fornitore.
-   Gli aggiustamenti apportati ai servizi distribuiti dal Fornitore.
-   Le variazioni degli impegni assunti e delle sanzioni applicabili.
-   Le riconfigurazioni organizzative all'interno del COMMITTENTE o
    del Fornitore.
-   L'espansione o la riduzione del campo di applicazione dei servizi
    a cui il COMMITTENTE ha sottoscritto.

La gestione delle versioni e delle revisioni della convenzione è registrata
in premessa al documento per facilitarne il follow-up.

## 6. Audit

Il Fornitore si impegna a permettere al COMMITTENTE, o a qualsiasi
auditor terzo che quest'ultimo abbia designato, di consultare tutti
i documenti necessari per attestare il pieno rispetto degli
obblighi legati alla conformità con le disposizioni dell'articolo 28
del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando
così la realizzazione di audit.

**Il Fornitore si impegna in particolare a tenere a disposizione del
COMMITTENTE l'elenco completo dei terzi che possono accedere
ai dati e ad informarlo di ogni cambiamento di subappaltatori.**

Con l'accettazione della presente convenzione di servizio, il
COMMITTENTE conferisce la sua autorizzazione esplicita a:

1.  **L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi
    (ANSSI)** così come all'ente di qualificazione competente per
    intraprendere la verifica della conformità del Servizio e del suo
    Sistema Informativo agli standard definiti dal Registro
    SecNumCloud.
2.  **Un fornitore di audit sulla sicurezza dei sistemi informativi**,
    debitamente qualificato ed espressamente designato dal Fornitore, per
    condurre audit di sicurezza riguardanti il Servizio fornito
    dal Fornitore.

## 7. Descrizione del servizio

L'offerta di servizi proposta dal Fornitore si caratterizza per la
disponibilità delle seguenti prestazioni, che si allineano al
principio di responsabilità condivisa dettagliato nelle norme stabilite
dal registro SecNumCloud:

-   La provision di una piattaforma di gestione dei contenitori Redhat
    Openshift gestita dal Fornitore.

È sottinteso che il Fornitore mobiliterà la propria esperienza per realizzare
le Prestazioni secondo le migliori pratiche professionali,
in conformità con le loro Specifiche e nel rispetto delle norme della sua
certificazione ISO/IEC 27001 così come le direttive del Registro
SecNumCloud.

## 8. Implementazione del servizio

È specificato che tutte le operazioni e tutti i componenti
fisici coinvolti nella fornitura del servizio qualificato, oggetto della
presente convenzione, sono situati nell'Unione Europea.
Ciò include specificamente il supporto, la supervisione operativa e la
supervisione della sicurezza (SOC).

### 8.1. Descrizione dei componenti tecnici

I servizi PaaS (Platform as a Service) comprendono la totalità dei
componenti e servizi necessari per il loro funzionamento ottimale nel
rispetto della qualifica SecNumCloud.

A tal riguardo, la loro performance e affidabilità sono intrinsecamente
legate ai componenti tecnici e ai servizi dell'**infrastruttura IaaS**
del Fornitore, come specificato nel documento [Convenzione di Servizio
IaaS](../Working%20in%20progress%20-%20not%20use/iaas/sla_iaas.md) del
Fornitore.

#### 8.1.1. Piattaforma di servizio REDHAT OpenShift

Il servizio comprende la disponibilità all'interno di una regione, su 3
zone di disponibilità,

#### 8.1.2. Infrastruttura software di pilotaggio della piattaforma Redhat Openshift

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e
l'API necessaria per l'esercizio dei suoi ambienti PaaS RedHat
OpenShift.
Si impegna inoltre a mantenerle in condizioni operative ottimali e a garantire
la loro sicurezza in modo continuo.

Nel quadro specifico del servizio fornito, il Fornitore mette a disposizione
del COMMITTENTE tutte le interfacce e le API della
piattaforma RedHat OpenShift all'interno del tenant selezionato. Spetta al
COMMITTENTE instaurare i dispositivi di sicurezza appropriati, come i
firewall, i firewall applicativi Web (WAF), e altre misure di protezione,
nonché definire le regole di filtraggio associate per garantire la sicurezza
dell'accesso alla sua piattaforma conformemente alla sua politica di sicurezza.

Il Fornitore avvisa il COMMITTENTE del fatto che un utilizzo
anomalo della sua console di amministrazione, in particolare in caso di sovraccarico
delle sue API di comando (martellamento), può innescare misure di sicurezza
automatiche che comportano il blocco dell'accesso alle API di
comando o a determinati servizi del Fornitore. È importante sottolineare
che questa situazione non costituisce un'indisponibilità del servizio ma
una misura di protezione dell'Infrastruttura del Fornitore; di
conseguenza, il COMMITTENTE non può considerarla come un'indisponibilità
nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste
perfettamente identiche (duplicati) inviate alle sue API sono limitate
a una per secondo (Throttling). Se il COMMITTENTE invia richieste
identiche a una frequenza superiore, il loro rifiuto non deve essere
interpretato come un'indisponibilità del servizio.

#### 8.1.3. Infrastruttura di backup associata

Il Fornitore mette a disposizione del COMMITTENTE una piattaforma di
backup integrata, dedicata e gestita, destinata alla protezione dei
dati dei suoi ambienti RedHat Openshift. Il Fornitore garantisce il
mantenimento in condizioni operative e di sicurezza
di questa piattaforma integrata di backup. Indipendentemente dal numero di
zone di disponibilità sottoscritte dal COMMITTENTE, il Fornitore
garantisce che la piattaforma di backup del COMMITTENTE verrà collocata
fuori dalla zona di disponibilità dei carichi di lavoro salvati.

La prestazione di backup si limita al backup delle macchine
virtuali e delle configurazioni di topologia dell'ambiente IaaS
dei tenant SecNumCloud del COMMITTENTE. L'elaborazione e
l'applicazione di una politica di backup adeguata da parte del
COMMITTENTE dipendono dalla sottoscrizione a unità di lavoro
specifiche. È quindi responsabilità del COMMITTENTE garantire la
disponibilità delle risorse tecniche necessarie presso il
Fornitore per implementare la sua politica di backup o
aggiustare quest'ultima in funzione dei mezzi disponibili.

Il Fornitore si impegna a notificare il COMMITTENTE in caso di
limitazioni di capacità e a fornire assistenza e consulenza per
l'ottimizzazione delle risorse. Gli obblighi del Fornitore si
limiteranno all'implementazione delle necessità espresse dal COMMITTENTE
in materia di politica di backup, nel quadro delle risorse
sottoscritte.

#### 8.1.4. Implementazione di soluzioni di ripresa di attività o continuità di attività

Il Fornitore fornisce al COMMITTENTE tutte le soluzioni
tecniche necessarie per garantire una distribuzione ottimale delle sue
risorse attraverso varie zone di disponibilità. Spetta al
COMMITTENTE la responsabilità di gestire efficacemente questa distribuzione
delle risorse, per la quale ha la possibilità di sfruttare gli strumenti
du Prestataire disponibles à cet usage.

En particulier, les applications déployées sur la plateforme RedHat
OpenShift doivent prendre en charge les mécanismes de redondance
proposés par le Prestataire afin de pouvoir bénéficier des solutions de
reprise d\'activité ou de continuité d\'activité associées.

## 9. Engagements et niveaux de services

Le Prestataire s\'engage à garantir une surveillance continue de la
performance et de l\'intégrité sécuritaire de ses plateformes et
services, veillant à leur fonctionnement optimal.

L\'indisponibilité d\'un service, faisant l\'objet d\'un indicateur de
performance, est reconnue dès son identification par le système de
supervision du Prestataire, ou suite à une notification par un
utilisateur du COMMANDITAIRE. Le début de l\'indisponibilité est fixé au
moment le plus précoce entre ces deux événements, afin de garantir un
décompte précis et juste du temps d\'indisponibilité.

La fin de l\'indisponibilité est officiellement marquée par la
restauration complète du service, confirmée soit par les outils de
supervision du Prestataire, soit par un retour utilisateur, assurant
ainsi une reprise effective des opérations et une mesure fidèle de la
durée de l\'interruption.

### 9.1. Engagements de disponibilité de la plateforme RedHat OpenShift

Le Prestataire s\'engage à maintenir un niveau de disponibilité et de
performance conforme aux standards définis pour chaque période
spécifiée. Les engagements de niveau de service (Service Level
Agreements, SLAs) s\'appliquent sous réserve que le COMMANDITAIRE
implémente ses systèmes à travers au moins deux des zones de
disponibilité présentes dans la région concernée.

En l\'absence de respect de ces conditions par le COMMANDITAIRE,
celui-ci se verra dans l\'incapacité de revendiquer l\'application des
SLAs concernés, lesquels sont spécifiquement identifiés par un
astérisque (\*). L\'accessibilité aux SLAs se fait via l\'interface
COMMANDITAIRE. **Les mesures s\'entendent calculées mensuellement**:

-   \*\*SLA 1 (\*) : IC-PAAS_SNC-01\*\* -- Disponibilité de la
    plateforme RedHat OpenShift : taux de disponibilité garanti de
    99,9%, calculé sur une base 24h/24, 7j/7.

***Remarques*** :

-   *En réponse une attaque par déni de service distribué (DDoS), le
    Prestataire se réserve le droit d\'ajuster sa configuration de
    routage internet pour limiter l\'impact de cette attaque et
    sauvegarder son infrastructure. En particulier, si une adresse IP
    appartenant au COMMANDITAIRE est ciblée, le Prestataire peut
    recourir à la technique de blackholing via la communauté BGP pour
    bloquer tout le trafic vers l\'adresse IP visée en amont chez ses
    fournisseurs, dans le but de protéger les ressources du
    COMMANDITAIRE ainsi que celles d\'autres COMMANDITAIREs et de
    l\'infrastructure du Prestataire. Le Prestataire encourage vivement
    le COMMANDITAIRE à adopter des mesures similaires, telles que
    l\'utilisation de logiciels de pare-feu d\'applications web
    disponibles sur le marché, et à configurer soigneusement ses groupes
    de sécurité via l\'API de commande.*

-   *Le Prestataire insiste sur la nécessité pour le COMMANDITAIRE de
    minimiser les ouvertures de flux, en évitant notamment de rendre
    accessibles les ports d\'administration **SSH** (port TCP 22) et
    **RDP** (port TCP 3389) depuis l\'ensemble d\'Internet (sous-réseau
    0.0.0.0/0), ainsi que les protocoles internes tels que **SMB** (port
    TCP/UDP 445) ou **NFS** (port TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

Le Prestataire s\'engage à mettre à la disposition du COMMANDITAIRE des
interfaces utilisateur en langue française et anglaise, facilitant ainsi
l\'accès et la gestion des services fournis. Le COMMANDITAIRE, de son
côté, s\'engage à respecter les contraintes légales et réglementaires en
vigueur relatives aux données qu\'il confie au Prestataire pour
traitement.

En cas de transmission de données sujettes à des exigences légales
spécifiques, le Prestataire collaborera avec le COMMANDITAIRE pour
identifier et mettre en œuvre les mesures de sécurité nécessaires,
conformément aux obligations du Prestataire et dans le cadre de la
prestation de services.

Le Prestataire prend également l\'engagement d\'examiner et de prendre
en considération les besoins spécifiques liés aux secteurs d\'activité
du COMMANDITAIRE, en respectant les limitations de sa responsabilité,
pour garantir un niveau de sécurité adapté aux informations traitées.

Si un progetto è suscettibile di impattare la sicurezza del Servizio offerto
o la disponibilità di detto Servizio o ancora generare una perdita di
funzionalità, il Fornitore si impegna a informare tramite la console
o via e-mail al contatto del COMMITTENTE e entro un termine ragionevole
il COMMITTENTE degli impatti potenziali, delle misure correttive
previste e dei rischi residui che concerne, assicurando una
trasparenza totale.

Il Fornitore si impegna a non utilizzare i dati del COMMITTENTE
provenienti dalla produzione per fare dei test, tranne ottenere
precedentemente l'autorizzazione esplicita del COMMITTENTE, in
quel caso il Fornitore si impegna a anonimizzare questi dati e a garantire la
loro riservatezza durante la loro anonimizzazione.

In caso di cambio di subappaltatore per l'hosting, il
Fornitore informerà il COMMITTENTE in anticipo, assicurandosi che questa
transizione non impatti negativamente il servizio fornito.

Su richiesta del COMMITTENTE, il Fornitore fornirà l'accesso al suo
regolamento interno, alla sua carta etica, alle sanzioni applicabili
in caso di non-rispetto della sua politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e ai requisiti
specifici di sicurezza.

Il Fornitore si impegna a informare il COMMITTENTE di ogni cambiamento
futuro su elementi software sotto la responsabilità di Cloud
Temple appena la compatibilità completa non può essere assicurata.

### 10.2. Limitatione di responsabilità del Fornitore

La struttura di responsabilità condivisa riduce efficacemente l'ambito
di intervento del Fornitore agli aspetti legati alla fornitura di
una piattaforma RedHat OpenShift funzionante, comprendente:

-   La gestione dell'infrastruttura IaaS che supporta la
    piattaforma RedHat OpenShift e il suo provisioning,
-   La gestione dei sistemi necessari al corretto funzionamento della
    piattaforma,
-   Il mantenimento in condizioni di sicurezza,
-   L'aggiornamento della piattaforma RedHat OpenShift,
-   Il backup dei dati di configurazione essenziali di questa
    piattaforma, ad eccezione dei dati e delle applicazioni del
    COMMITTENTE che rientrano nella sua responsabilità.

Essa esclude in particolare, ma senza limitarsi a:

-   L'aggiornamento dei sistemi operativi e dei software
    installati dal COMMITTENTE negli ambienti OpenShift nei
    suoi spazi locativi,
-   La sicurezza dei programmi, dei software e delle applicazioni installate all'interno
    dell'ambiente OpenShift da parte del COMMITTENTE,
-   Il backup dei dati a livello applicativo,
-   La configurazione delle politiche di backup.

### 10.3. Limitazione di accesso

Nel contesto di questa convenzione di servizio, il Fornitore è
formalmente vietato di accedere ai tenant appartenenti al
COMMITTENTE senza previa autorizzazione. È responsabilità del
COMMITTENTE fornire gli accessi necessari al personale del
Fornitore, secondo le esigenze specifiche dell'hosting e, se del caso,
dei servizi professionali di supporto, se questa opzione è stata
scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che questi accessi sono concessi esclusivamente
per le necessità legate alla prestazione dei servizi concordati, assicurando
così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto di terzi coinvolti nella prestazione di servizio
del Fornitore è strettamente vietato. Nell'eventualità in cui un
requisito tecnico specifico richiedesse tale accesso, questo potrebbe
essere stabilito solo dopo aver chiaramente notificato il
COMMITTENTE, fornito una giustificazione dettagliata e
ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del
COMMITTENTE, assicurandosi che ogni eccezione alla regola sia debitamente
autorizzata e documentata.

## 11. Cancellazione dei dati alla fine del contratto

Alla scadenza del contratto, sia che giunga a scadenza o sia risolto
per qualsiasi motivo, il Fornitore si impegna a procedere alla
cancellazione sicura di tutti i dati del COMMITTENTE, inclusi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un avviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno quindi eliminati
entro un termine massimo di trenta (30) giorni dopo
tale notifica.

Per attestare questa cancellazione, il Fornitore rilascerà al
COMMITTENTE un certificato che conferma la cancellazione dei dati.

## 12. Legge applicabile

La legge applicabile per la presente convenzione di servizio è la legge
francese.

In caso di ricorso da parte del Fornitore, nel contesto dei servizi forniti
al COMMITTENTE, a una società terza, compreso un subfornitore, la cui sede principale, l'amministrazione centrale o lo stabilimento principale è situata in uno Stato non membro dell'Unione Europea, o che è di proprietà o sotto il controllo di una società terza
con sede al di fuori dell'Unione Europea, il Fornitore si impegna a
garantire che la detta società terza non avrà alcun accesso ai dati
trattati dal servizio del Fornitore.

Si noterà che i dati in questione comprendono quelli forniti al
Fornitore dal COMMITTENTE, nonché tutti i dati tecnici come le identità
dei beneficiari e dei
administratori dell'infrastruttura tecnica, i dati gestiti
dai network, i registri dell'infrastruttura tecnica,
la rubrica, i certificati, la configurazione degli accessi, ecc.,
contenenti informazioni sul COMMITTENTE.

Per precisazione, la nozione di controllo è definita in conformità all'articolo II
L233-3 del codice di commercio.