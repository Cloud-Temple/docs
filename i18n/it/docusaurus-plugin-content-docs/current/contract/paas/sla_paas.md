---
title: Convention de Service PaaS
---

**Table des matières**

- [1. Cadre](#1-cadre)
- [2. Acronymes](#2-acronymes)
- [3. Glossaire](#3-glossaire)
- [4. Objet de la convention de service PaaS du Prestataire](#4-objet-de-la-convention-de-service-paas-du-prestataire)
- [5. Evolution de la convention de service PaaS](#5-evolution-de-la-convention-de-service-paas)
- [6. Audit](#6-audit)
- [7. Description du service](#7-description-du-service)
- [8. Mise en œuvre du service](#8-mise-en-œuvre-du-service)
  - [8.1. Description des composants techniques](#81-description-des-composants-techniques)
    - [8.1.1. Plateforme de service REDHAT OpenShift](#811-plateforme-de-service-redhat-openshift)
    - [8.1.2. Infrastructure logiciel de pilotage de la plateforme Redhat Openshift](#812-infrastructure-logiciel-de-pilotage-de-la-plateforme-redhat-openshift)
    - [8.1.3. Infrastructure de sauvegarde associée](#813-infrastructure-de-sauvegarde-associée)
    - [8.1.4. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité](#814-mise-en-œuvre-de-solutions-de-reprise-dactivité-ou-de-continuité-dactivité)
- [9. Engagements et niveaux de services](#9-engagements-et-niveaux-de-services)
  - [9.1. Engagements de disponibilité de la plateforme RedHat OpenShift](#91-engagements-de-disponibilité-de-la-plateforme-redhat-openshift)
- [10. Modèle de responsabilités partagées applicable](#10-modèle-de-responsabilités-partagées-applicable)
  - [10.1. Responsabilité et Obligations du Prestataire](#101-responsabilité-et-obligations-du-prestataire)
  - [10.2. Limitation de responsabilité du Prestataire](#102-limitation-de-responsabilité-du-prestataire)
  - [10.3. Limitation d'accès](#103-limitation-daccès)
- [11. Effacement des données en fin de contrat](#11-effacement-des-données-en-fin-de-contrat)
- [12. Droit applicable](#12-droit-applicable)


## 1. Cadre

|           |                        |
| --------- | ---------------------- |
| Référence | CT.AM.JUR.ANX.PAAS 2.0 |
| Date      | 13 mars 2024           |

## 2. Acronymes

| Acronyme    | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Comité consultatif sur les changements                                              |
| CMDB        | Configuration Management Database – Base de données de gestion des configurations                           |
| COPIL       | Comité de pilotage                                                                                          |
| COSTRAT     | Comité stratégique                                                                                          |
| DB          | Database (base de données)                                                                                  |
| DRP         | Disaster Recovery Plan (Piano di ripristino d'emergenza)                                                    |
| GTI         | Garantie de Temps d’Intervention                                                                            |
| GTR         | Garantie de Temps de Résolution                                                                             |
| GTE         | Garantie de Temps d’Escalade                                                                                |
| HYPERVISEUR | Système d'exploitation permettant l'execution de VM sur une lame de calcul                                  |
| ITIL        | Information Technology Infrastructure Library - Buone pratiche per la gestione dei sistemi informativi     |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Maintien en condition opérationnelle                                                                        |
| MOA         | Maitrise d’Ouvrage                                                                                          |
| MOE         | Maitrise d’Œuvre                                                                                            |
| OS          | Operating system                                                                                            |
| PAQ         | Piano di Garanzia della Qualità                                                                             |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Richiesta di Modifica                                                               |
| RGPD        | Regolamento Generale sulla Protezione dei Dati (personali)                                                  |
| RPO         | Recovery Point Objective – Freschezza dei dati ripristinati in caso di disastro                             |
| RTO         | Recovery Time Objective – Tempo di ripristino del servizio in caso di disastro                             |
| SLA         | Service Level Agreement – Accordo sul livello del servizio                                                |
| UO          | Unité d’Œuvre                                                                                               |
| VABF        | Validation d’Aptitude au Bon Fonctionnement                                                                 |
| VABE        | Validation d’Aptitude à la Bonne Exploitabilité                                                             |
| VM          | Virtual Machine (Macchina Virtuale)                                                                         |
| VSR         | Validazione del Servizio Regolare                                                                           |
| SNC         | SecNumCloud                                                                                                 |

## 3. Glossaire

Les expressions ci-après employées dans le présent document seront interprétées conformément aux définitions qui leur sont attribuées ci-dessous :

| Expression                                          | Définition                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | L'appellation "Secure Temple" fait référence au service d'Infrastructure en tant que Service IaaS, qualifié SecNumCloud, proposé par la société Cloud Temple.                                                                                                                          |
| Région                                              | Une "région" dans le contexte du cloud computing désigne un ensemble géographiquement délimité de zones de disponibilité cloud, <br/>fournissant des services de réseau, de calcul et de stockage pour optimiser la latence, la performance <br/>et la conformité réglementaire locale |
| Zone Disponibilité<br/>(AZ)<br/>(Availability zone) | Une section spécifique et isolée de l'infrastructure de cloud computing, conçue pour assurer la haute disponibilité et la résilience des services par une distribution géographique des ressources.                                                                                    |
| Tenant                                              | Une instance isolée réservée à un utilisateur ou groupe d'utilisateurs, partageant une infrastructure commune tout en maintenant l'indépendance et la sécurité des données et des applications.                                                                                        |

| Expression               | Définition                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incident                 | Un "incident" désigne tout événement imprévu qui perturbe le fonctionnement normal d'un système ou compromet la sécurité des données et des infrastructures                                                                                                                                                                                                                                                                                   |
| Problème                 | Un "problème" è una causa fondamentale di uno o più incidenti, identificata o sospettata, che richiede un'analisi e una risoluzione per prevenirne la ricorrenza                                                                                                                                                                                                                                                                         |
| Changement               | Un "cambiamento" indica qualsiasi modifica apportata all'ambiente informatico, mirante a migliorare o correggere i sistemi, i processi o i servizi.                                                                                                                                                                                                                                                                                            |
| changement standard      | Un "cambiamento standard" è una modifica pre-approvata, a basso rischio, ripetitiva e che segue una procedura stabilita, nell'ambiente informatico.                                                                                                                                                                                                                                                                                            |
| Mise en production       | azione/e di amministrazione per l'implementazione del cambiamento quando questo è approvato <br/>(il cambiamento, secondo ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).                                                                                                                                                                                                                      |
| Demande de service       | richiesta di evoluzione soggetta a una procedura, la cui realizzazione: <br/> i) non modifica la CMDB,<br/>ii) il metodo operativo, i costi e i rischi sono conosciuti e accettati in anticipo e non richiedono modalità di rollback specifiche<br/> iii) la realizzazione è soggetta a un accordo di livello di servizio e inclusa nel compenso del contratto se realizzata durante l'orario di lavoro ordinario.                                |
| Element de configuration | Un "elemento di configurazione" è un componente identificabile del sistema informativo, come un software, un hardware o un documento,<br/> soggetto a gestione nell'ambito della gestione dei servizi IT                                                                                                                                                                                                                                        |
| Service                  | Un "servizio" è un mezzo per fornire valore ai CLIENTI facilitando i risultati desiderati senza che questi debbano gestire <br/>i costi e i rischi specifici                                                                                                                                                                                                                                                                                     |
| Evenement                | Un "evento" è qualsiasi occorrenza rilevabile o identificabile in un sistema informatico o in una rete, che può essere significativa per la gestione dei servizi IT                                                                                                                                                                                                                                                                              |
| Sinistre                 | Un "incidente" indica un evento dannoso imprevisto che comporta perdite materiali, finanziarie o di dati per un CLIENTE                                                                                                                                                                                                                                                                                                                        |
| Convention de service    | Questo documento, redatto nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), e ciò in conformità con i requisiti del Referenziale SecNumCloud.                                                                                                                                                                                                                                                     |
| Disponibilité            | Capacità di garantire la disponibilità e mantenere le prestazioni ottimali di un servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA)                                                                                                                                                                                                                                                            |
| Supervision              | Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misurazioni e allarmi. <br/>Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che appartiene alle operazioni di Amministrazione.                                                                                                                       |

## 4. Objet de la convention de service PaaS du Prestataire

La presente Convenzione di Servizi stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire al CLIENTE un'infrastruttura 
conforme alle specifiche dell'offerta « Platform as a Service – PaaS », debitamente qualificata SecNumCloud.

Oggetto della Convenzione di Servizi :

1. Specificare i requisiti di performance attesi dal CLIENTE in termini di funzionalità e affidabilità dell'infrastruttura.
2. Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati.
3. Identificare le norme regolamentari applicabili specificamente all'infrastruttura proposta.
4. Assicurare un'uniformità e un'integrità nella valutazione della qualità dei servizi forniti.
5. Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di performance quantitativi.

Si stabilisce che, qualora al Fornitore venga revocata la qualificazione SecNumCloud, il presente Contratto potrà essere risolto di diritto, senza incorrere in penali, dal CLIENTE. 
In tale eventualità, il Fornitore si impegna a informare il CLIENTE di tale revoca mediante invio di una notifica ufficiale, a mezzo lettera raccomandata con richiesta di avviso di ricevimento.

Si precisa che una modifica o un adeguamento della qualificazione SecNumCloud non sarà interpretato come una revoca della qualificazione iniziale.

## 5. Evolution de la convention de service PaaS

Le modifiche o le aggiunte apportate alla presente convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organismi di governance designati a tal fine. 
Queste proposte di cambiamento saranno esaminate all'interno del comitato strategico, il solo organo abilitato a determinare gli aspetti che necessitano una formalizzazione scritta.

Si conviene che qualsiasi evoluzione della convenzione, dopo la convalida, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la redazione e la firma di un emendamento al contratto in corso.

I fattori che possono indurre una revisione di questa convenzione includono, senza limitarsi a:

- L'adattamento della piattaforma PaaS orchestrato dal Fornitore.
- Gli aggiustamenti ai servizi implementati dal Fornitore.
- Le variazioni degli impegni presi e delle sanzioni applicabili.
- Le riconfigurazioni organizzative all'interno del CLIENTE o del Fornitore.
- L'espansione o la riduzione del campo di applicazione dei servizi ai quali il CLIENTE ha sottoscritto.

La gestione delle versioni e delle revisioni della convenzione è registrata in preambolo del documento per facilitarne il monitoraggio.

## 6. Audit 

Il Fornitore si impegna a permettere al CLIENTE, o a qualsiasi revisore terzo che quest'ultimo abbia designato, di consultare l'insieme dei documenti necessari per attestare il completo rispetto delle obbligazioni relative alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

**Il Fornitore si impegna in particolare a tenere a disposizione del CLIENTE l'elenco di tutti i terzi che possono accedere ai dati e a informarlo di qualsiasi cambiamento di subappaltatori.**

Con l'accettazione della presente convenzione di servizio, il CLIENTE conferisce la sua autorizzazione esplicita a:

1. __L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI)__ nonché all'ente di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo Sistema Informativo agli standard definiti dal Referenziale SecNumCloud.
2. __Un fornitore di audit in sicurezza dei sistemi informativi__, debitamente qualificato e espressamente designato dal Fornitore, per condurre audit di sicurezza sul Servizio fornito dal Fornitore.

## 7. Description du service

L'offerta di servizi proposta dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, 
che si allineano al principio di responsabilità condivisa dettagliato nelle norme stabilite dal referenziale SecNumCloud:

- La fornitura di una piattaforma di gestione dei contenitori Redhat Openshift gestita dal Fornitore.

Si intende che il Fornitore utilizzerà la propria competenza per realizzare le Prestazioni secondo le migliori pratiche professionali,
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

Le Prestataire fournit au CLIENT l'ensemble des solutions techniques nécessaires pour garantir une répartition optimale de ses ressources 
à travers diverses zones de disponibilité. Il incombe au CLIENT la responsabilité de gérer efficacement cette distribution de ressources, 
pour laquelle il a la possibilité à exploiter les outils du Prestataire disponibles à cet usage.

En particulier, les applications déployées sur la plateforme RedHat OpenShift doivent prendre en charge les mécanismes de redondance proposés par le Prestataire afin de pouvoir bénéficier des solutions de reprise d'activité ou de continuité d'activité associées.

## 9. Engagements et niveaux de services

Le Prestataire s'engage à garantir une surveillance continue de la performance et de l'intégrité sécuritaire de ses 
plateformes et services, veillant à leur fonctionnement optimal.

L'indisponibilité d'un service, faisant l'objet d'un indicateur de performance, est reconnue dès son identification par le système de supervision du Prestataire, 
ou suite à une notification par un utilisateur du CLIENT. Le début de l'indisponibilité est fixé au moment le plus précoce entre ces deux événements, 
afin de garantir un décompte précis et juste du temps d'indisponibilité.

La fin de l'indisponibilité est officiellement marquée par la restauration complète du service, confirmée soit par les outils de supervision du Prestataire, 
soit par un retour utilisateur, assurant ainsi une reprise effective des opérations et une mesure fidèle de la durée de l'interruption.

### 9.1. Engagements de disponibilité de la plateforme RedHat OpenShift

Le Prestataire s'engage à maintenir un niveau de disponibilité et de performance conforme aux standards définis pour chaque période spécifiée. 
Les engagements de niveau de service (Service Level Agreements, SLAs) s'appliquent sous réserve que le CLIENT implémente ses systèmes à travers 
au moins deux des zones de disponibilité présentes dans la région concernée. 

En l'absence de respect de ces conditions par le CLIENT, celui-ci se verra dans l'incapacité de revendiquer l'application des SLAs concernés, 
lesquels sont spécifiquement identifiés par un astérisque (*). L'accessibilité aux SLAs se fait via l'interface CLIENT. **Les mesures s'entendent calculées mensuellement**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilité de la plateforme RedHat OpenShift : taux de disponibilità garantita del 99,9%, calcolato su base 24 ore su 24, 7 giorni su 7.

_**Remarques**_ : 

- *In risposta a un attacco di tipo denial of service distribuito (DDoS), il Prestataire si riserva il diritto di aggiustare la sua configurazione di routing internet per 
limitare l’impatto di questo attacco e salvaguardare la sua infrastruttura. In particolare, se un indirizzo IP appartenente al CLIENT viene preso di mira, il Prestataire può ricorrere alla tecnica di blackholing 
via la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP bersagliato in anticipo dai suoi fornitori, al fine di proteggere le risorse del CLIENT così come quelle di altri clienti 
e dell’infrastruttura del Prestataire. Il Prestataire incoraggia vivamente il CLIENT ad adottare misure simili, come l’utilizzo di software di firewall 
di applicazioni web disponibili sul mercato, e a configurare con attenzione i suoi gruppi di sicurezza tramite l'API di comando.*

- *Il Prestataire insiste sulla necessità per il CLIENT di minimizzare le aperture di flussi, per evitare in particolare di rendere accessibili le porte 
di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) dall’intera Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

Il Prestataire s'engage à mettre à la disposition du CLIENT des interfaces utilista in lingua francese e inglese, facilitando così l’accesso e la gestione dei servizi forniti.
Il CLIENT, da parte sua, si impegna a rispettare i vincoli legali e normativi in vigore relativi ai dati che affida al Prestataire per il trattamento.

In caso di trasmissione di dati soggetti a requisiti legali specifici, il Prestataire collaborerà con il CLIENT per identificare e mettere in atto 
le misure di sicurezza necessarie, in conformità con gli obblighi del Prestataire e nel quadro della prestazione di servizi.

Il Prestataire prende anche l’impegno di esaminare e tenere in considerazione le necessità specifiche legate ai settori di attività del CLIENT,
rispettando le limitazioni della sua responsabilità, per garantire un livello di sicurezza adeguato ai dati trattati.

Se un progetto è suscettibile di impattare la sicurezza del servizio offerto, il Prestataire si impegna a informare il CLIENT degli impatti potenziali, 
delle misure correttive previste e dei rischi residui, garantendo una trasparenza totale.

Il Prestataire garantisce che non utilizzerà i dati del CLIENT a fini di test senza un accordo previo ed esplicito del CLIENT
e si impegna ad anonimizzare e proteggere la riservatezza di questi dati durante il loro trattamento.

In caso di cambiamento del subappaltatore per l'hosting, Il Prestataire informerà il CLIENT anticipatamente, assicurandosi che questa transizione non influisca negativamente sul servizio fornito.

Su richiesta del CLIENT, il Prestataire fornirà l’accesso al suo regolamento interno, alla sua carta etica, alle sanzioni applicabili in caso di non rispetto del suo
politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e ai requisiti specifici di sicurezza.

### 10.2. Limitazione di responsabilità del Fornitore

La struttura di responsabilità condivisa riduce efficacemente l'ampiezza dell'intervento del Fornitore agli aspetti legati alla fornitura di una piattaforma RedHat OpenShift funzionale, comprendente:

- La gestione dell'infrastruttura IaaS che supporta la piattaforma RedHat OpenShift e il suo provisioning,
- La gestione dei sistemi necessari al buon funzionamento della piattaforma,
- Il mantenimento in condizioni di sicurezza,
- L'aggiornamento della piattaforma RedHat OpenShift,
- Il backup dei dati di configurazione essenziali di questa piattaforma, ad eccezione dei dati e delle applicazioni del CLIENTE che rientrano nella sua responsabilità.

Esclude in particolare, ma non solo:

- L'aggiornamento dei sistemi operativi e dei software installati dal CLIENTE sui suoi ambienti OpenShift nei suoi spazi locativi,
- La sicurezza dei programmi, software e applicazioni installati all'interno dell'ambiente OpenShift dal CLIENTE,
- Il backup dei dati a livello applicativo,
- La configurazione delle politiche di backup.

### 10.3. Limitazione di accesso

Nell'ambito di questa convenzione di servizio, il Fornitore è formalmente vietato di accedere ai tenant appartenenti al CLIENTE senza previa autorizzazione. 
È responsabilità del CLIENTE fornire gli accessi necessari al personale del Fornitore, secondo le esigenze specifiche dell'hosting e, 
dove applicabile, dei servizi professionali di supporto, se questa opzione è stata scelta dal CLIENTE.

Il CLIENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla prestazione di servizi concordati, 
assicurando così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione di servizio del Fornitore è strettamente vietato. 
Nell'eventualità in cui una specifica esigenza tecnica richieda tale accesso, esso potrà essere stabilito 
solo dopo aver chiaramente notificato il CLIENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del CLIENTE, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 11. Cancellazione dei dati a fine contratto

Alla fine del contratto, sia che raggiunga la scadenza sia che venga rescisso per qualsiasi motivo, il Fornitore si impegna a procedere con la cancellazione 
sicura di tutti i dati del Cliente, inclusi i dati tecnici. Il Fornitore si assicurerà di comunicare al CLIENTE un preavviso formale, 
rispettando un periodo di ventuno (21) giorni di calendario. I dati del CLIENTE saranno quindi eliminati entro un massimo di trenta (30) giorni 
dalla notifica.

Per attestare questa cancellazione, il Fornitore fornirà al Cliente un certificato che confermi l'eliminazione dei dati.

## 12. Legge applicabile

La legge applicabile per la presente convenzione di servizio è la legge francese.

Nel caso di ricorso da parte del Fornitore, nell'ambito dei servizi forniti al CLIENTE, a una società terza, incluso un subappaltatore, la cui sede sociale, amministrazione centrale 
o principale stabilimento sia situato in uno Stato non membro dell'Unione Europea, o che sia proprietà o sotto il controllo di una società terza domiciliata al di fuori dell'Unione Europea,
il Fornitore si impegna a garantire che tale società terza non avrà alcun accesso ai dati trattati dal servizio del Fornitore.

Si noti che i dati in questione comprendono quelli affidati al Fornitore dal CLIENTE, nonché tutti i dati tecnici come le identità dei beneficiari e degli amministratori dell'infrastruttura tecnica,
i dati manipolati dalle reti, i registri dell'infrastruttura tecnica, l'elenco, i certificati, la configurazione degli accessi, ecc., contenendo informazioni sul CLIENTE.

Per precisazione, la nozione di controllo è definita conformemente al II dell'articolo L233-3 del codice di commercio.