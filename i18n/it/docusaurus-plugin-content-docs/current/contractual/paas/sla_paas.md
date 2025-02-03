---
title: Convenzione di Servizio PaaS
---

**Indice**

- [1. Contesto](#1-contesto)
- [2. Acronimi](#2-acronimi)
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
    - [8.1.4. Implementazione di soluzioni di ripristino o di continuità operativa](#814-implementazione-di-soluzioni-di-ripristino-o-di-continuità-operativa)
- [9. Impegni e livelli di servizio](#9-impegni-e-livelli-di-servizio)
  - [9.1. Impegni di disponibilità della piattaforma RedHat OpenShift](#91-impegni-di-disponibilità-della-piattaforma-redhat-openshift)
- [10. Modello di responsabilità condivise applicabile](#10-modello-di-responsabilità-condivise-applicabile)
  - [10.1. Responsabilità e Obblighi del Fornitore](#101-responsabilità-e-obblighi-del-fornitore)
  - [10.2. Limitazione di responsabilità del Fornitore](#102-limitazione-di-responsabilità-del-fornitore)
  - [10.3. Limitazione di accesso](#103-limitazione-di-accesso)
- [11. Cancellazione dei dati alla fine del contratto](#11-cancellazione-dei-dati-alla-fine-del-contratto)
- [12. Legge applicabile](#12-legge-applicabile)


## 1. Contesto

|           |                        |
| --------- | ---------------------- |
| Riferimento | CT.AM.JUR.ANX.PAAS 2.0 |
| Data      | 13 marzo 2024           |

## 2. Acronimi

| Acronimo    | Descrizione                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Comitato consultivo sui cambiamenti                                                 |
| CMDB        | Configuration Management Database – Base di dati di gestione delle configurazioni                           |
| COPIL       | Comitato di pilotaggio                                                                                      |
| COSTRAT     | Comitato strategico                                                                                         |
| DB          | Database (base di dati)                                                                                     |
| DRP         | Disaster Recovery Plan (Piano di ripristino dell'attività)                                                  |
| GTI         | Garanzia di Tempo di Intervento                                                                             |
| GTR         | Garanzia di Tempo di Risoluzione                                                                            |
| GTE         | Garanzia di Tempo di Escalation                                                                             |
| HYPERVISEUR | Sistema operativo che permette l'esecuzione di VM su una unità di elaborazione                              |
| ITIL        | Information Technology Infrastructure Library - Buone pratiche per la gestione dei sistemi informatici      |
| IAAS        | Infrastructure as a Service                                                                                 |
| MCO         | Manutenzione in condizioni operative                                                                        |
| MOA         | Direzione Lavori                                                                                           |
| MOE         | Direzione delle Opere                                                                                       |
| OS          | Operative system                                                                                             |
| PAQ         | Piano di Assicurazione della Qualità                                                                        |
| PAAS        | Platform as a Service                                                                                       |
| SDM         | Service Delivery Manager                                                                                    |
| RFC         | Request For Change – Richiesta di cambiamento                                                                |
| RGPD        | Regolamento Generale sulla Protezione dei Dati (personali)                                                  |
| RPO         | Recovery Point Objective – Freschezza dei dati ripristinati in caso di disastro                             |
| RTO         | Recovery Time Objective – Tempo di ripristino del servizio in caso di disastro                              |
| SLA         | Service Level Agreement – Accordo sui livelli di servizio                                                   |
| UO          | Unità d’Opera                                                                                               |
| VABF        | Validazione di idoneità al buon funzionamento                                                               |
| VABE        | Validazione di idoneità alla buona fruibilità                                                                |
| VM          | Virtual Machine (Macchina virtuale)                                                                         |
| VSR         | Validazione di Servizio Regolare                                                                            |
| SNC         | SecNumCloud                                                                                                 |

## 3. Glossario

Le espressioni di seguito utilizzate nel presente documento saranno interpretate secondo le definizioni loro attribuite al di sotto:

| Espressione                                          | Definizione                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                      | La denominazione "Secure Temple" si riferisce al servizio di Infrastruttura come Servizio IaaS, qualificato SecNumCloud, offerto dalla società Cloud Temple.                                                                                                                            |
| Regione                                              | Una "regione" nel contesto del cloud computing si riferisce a un insieme geograficamente delimitato di zone di disponibilità cloud, <br/>fornendo servizi di rete, calcolo e storage per ottimizzare la latenza, le performance <br/>e la conformità regolamentare locale               |
| Zona di Disponibilità<br/>(AZ)<br/>(Availability Zone)| Una specifica sezione isolata dell’infrastruttura di cloud computing, progettata per garantire l’alta disponibilità e la resilienza dei servizi tramite una distribuzione geografica delle risorse.                                                                                    |
| Tenant                                               | Un'istanza isolata riservata a un utente o gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.                                                                                                              |

| Espressione               | Definizione                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                 | Un "incidente" designa qualsiasi evento imprevisto che interrompe il normale funzionamento di un sistema o compromette la sicurezza dei dati e delle infrastrutture                                                                                                                                                                                                                                                                            |
| Problème                 | Un "problema" è una causa fondamentale di uno o più incidenti, identificata o sospettata, che richiede un'analisi e una risoluzione per prevenirne il ripetersi                                                                                                                                                                                                                                                                        |
| Changement               | Un "cambiamento" indica qualsiasi modifica apportata all'ambiente informatico, allo scopo di migliorare o correggere i sistemi, i processi o i servizi.                                                                                                                                                                                                                                                                                         |
| changement standard      | Un "cambiamento standard" è una modifica pre-approvata, a basso rischio, ripetitiva e seguendo una procedura stabilita, nell'ambiente informatico.                                                                                                                                                                                                                                                                                             |
| Mise en production       | azione(i) di amministrazione della realizzazione del cambiamento quando questo è approvato <br/>(il cambiamento, nel senso ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).                                                                                                                                                                                                                        |
| Demande de service       | richiesta di evoluzione oggetto di una procedura, la cui realizzazione:<br/> i) non modifica la CMDB,<br/> ii) il modo operativo, i costi e i rischi sono noti e accettati in anticipo e non richiedono modalità di ripristino specifiche<br/> iii) la realizzazione è soggetta ad un accordo di livello di servizio e inclusa nel canone del contratto quando effettuata durante le ore e i giorni lavorativi.                     |
| Element de configuration | Un "elemento di configurazione" è un componente identificabile del sistema informativo, come software, hardware o documento,<br/> soggetto a gestione nell'ambito della gestione dei servizi IT                                                                                                                                                                                                                                                    |
| Service                  | Un "servizio" è un mezzo per fornire valore ai CLIENTi facilitando i risultati desiderati senza che questi debbano gestire <br/>i costi e i rischi specifici                                                                                                                                                                                                                                              |
| Evenement                | Un "evento" è qualsiasi occorrenza rilevabile o identificabile in un sistema informatico o di rete, che potrebbe avere importanza per la gestione dei servizi IT                                                                                                                                                                                                                                           |
| Sinistre                 | Un "sinistro" indica un evento dannoso imprevisto che comporta perdite materiali, finanziarie o di dati per un CLIENTe                                                                                                                                                                                                                                                                                      |
| Convention de service    | Questo documento, stabilito nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), in conformità con i requisiti del Riferimento SecNumCloud.                                                                                                                                                                                                                                                             |
| Disponibilité            | Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali di un servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA)                                                                                                                                                                                                                                                    |
| Supervision              | Monitoraggio di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi.<br/> Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi monitorati, una prerogativa che appartiene alle operazioni di Amministrazione.                                                                                                                            |

## 4. Oggetto della convenzione di servizio PaaS del Fornitore

La presente Convenzione di Servizi stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire al CLIENTe un'infrastruttura 
conforme alle specifiche dell'offerta «Platform as a Service – PaaS», debitamente qualificata SecNumCloud.

Oggetto della Convenzione di Servizi:

1. Precisare le esigenze di prestazione attese dal CLIENTe in termini di funzionalità e affidabilità dell'infrastruttura.
2. Dichiarare gli obblighi del Fornitore per soddisfare i livelli di servizio concordati.
3. Identificare le norme regolamentari applicabili specificamente all'infrastruttura proposta.
4. Assicurare uniformità e integrità nella valutazione della qualità dei servizi erogati.
5. Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di prestazione quantitativi.

È specificato che, nell'ipotesi in cui al Fornitore venga ritirata la qualificazione SecNumCloud, il presente Contratto può essere risolto di diritto, senza incorrere in penali, dal CLIENTe. 
In questo caso, il Fornitore si impegna a informare il CLIENTe della disqualifica inviando una notifica ufficiale tramite lettera raccomandata con richiesta di ricevuta di ritorno.

Si precisa che una modifica o un adeguamento della qualificazione SecNumCloud non sarà interpretata come una revoca della qualificazione iniziale.

## 5. Evoluzione della convenzione di servizio PaaS

Le modifiche o aggiunte apportate alla presente convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. 
Queste proposte di cambiamento saranno esaminate dal comitato strategico, l'unica istanza autorizzata a determinare gli aspetti che necessitano di una formalizzazione scritta.

È convenuto che ogni evoluzione della convenzione, dopo la convalida, che altera le condizioni finanziarie inizialmente stabilite, richiederà la redazione e la firma di un'appendice al contratto in corso.

I fattori che possono indurre una revisione di questa convenzione includono, ma non si limitano a:

- L'adattamento della piattaforma PaaS orchestrata dal Fornitore.
- Le modifiche apportate ai servizi dispiegati dal Fornitore.
- Le variazioni degli impegni assunti e delle sanzioni applicabili.
- Le riconfigurazioni organizzative all'interno del CLIENTe o del Fornitore.
- L'espansione o la riduzione del campo di applicazione dei servizi a cui il CLIENTe ha sottoscritto.

La gestione delle versioni e delle revisioni della convenzione è annotata in premessa al documento per facilitarne il monitoraggio.

## 6. Audit 

Il Fornitore si impegna a consentire al CLIENTe, o a qualsiasi revisore terzo da lui designato, di consultare tutta la documentazione necessaria per attestare il rispetto integrale degli obblighi relativi alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione degli audit.

**Il Fornitore si impegna inoltre a tenere a disposizione del CLIENTe l'elenco di tutti i terzi che possono accedere ai dati e ad informarlo di qualsiasi cambio di subappaltatore.**

Accettando la presente convenzione di servizio, il CLIENTe conferisce la sua esplicita autorizzazione a:

1. __L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI)__ e all'ente di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo Sistema Informativo agli standard definiti dal Riferimento SecNumCloud.
2. __Un fornitore di audit per la sicurezza dei sistemi informativi__, debitamente qualificato e espressamente designato dal Fornitore, per condurre audit di sicurezza relativi al Servizio fornito dal Fornitore.

## 7. Descrizione del servizio

L'offerta di servizi proposta dal Fornitore si caratterizza per la fornitura delle seguenti prestazioni,
che si allineano al principio di responsabilità condivisa dettagliato nelle norme stabilite dal riferimento SecNumCloud:

- La fornitura di una piattaforma di gestione dei container Redhat Openshift gestita dal Fornitore.

È inteso che il Fornitore mobiliterà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali,
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

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilité de la plateforme RedHat OpenShift : taux de disponibilité garanti de 99,9%, calculé sur une base 24h/24, 7j/7.

_**Remarques**_ : 

- *En réponse une attaque par déni de service distribué (DDoS), le Prestataire se réserve le droit d'ajuster sa configuration de routage internet pour 
limiter l'impact de cette attaque et sauvegarder son infrastructure. En particulier, si une adresse IP appartenant au CLIENT est ciblée, le Prestataire peut recourir à la technique de blackholing 
via la communauté BGP pour bloquer tout le trafic vers l'adresse IP visée en amont chez ses fournisseurs, dans le but de protéger les ressources du CLIENT ainsi que celles d'autres clients 
et de l'infrastructure du Prestataire. Le Prestataire encourage vivement le CLIENT à adopter des mesures similaires, telles que l'utilisation de logiciels de pare-feu 
d'applications web disponibles sur le marché, et à configurer soigneusement ses groupes de sécurité via l'API de commande.*

- *Le Prestataire insiste sur la nécessité pour le CLIENT de minimiser les ouvertures de flux, en évitant notamment de rendre accessibles les ports 
d'administration **SSH** (port TCP 22) et **RDP** (port TCP 3389) depuis l'ensemble d'Internet (sous-réseau 0.0.0.0/0), ainsi que les protocoles internes tels que **SMB** (port TCP/UDP 445) ou **NFS** (port TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

Le Prestataire s'engage à mettre à la disposition du CLIENT des interfaces utilisateur en langue française et anglaise, facilitant ainsi l'accès et la gestion des services fournis.
Le CLIENT, de son côté, s'engage à respecter les contraintes légales et réglementaires en vigueur relatives aux données qu'il confie au Prestataire pour traitement.

En cas de transmission de données sujettes à des exigences légales spécifiques, le Prestataire collaborera avec le CLIENT pour identifier et mettre en œuvre 
les mesures de sécurité nécessaires, conformément aux obligations du Prestataire et dans le cadre de la prestation de services.

Le Prestataire prend également l'engagement d'examiner et de prendre en considération les besoins spécifiques liés aux secteurs d'activité du CLIENT,
en respectant les limitations de sa responsabilité, pour garantir un niveau de sécurité adapté aux informations traitées.

Si un projet est susceptible d'impacter la sécurité du service offert, le Prestataire s'engage à informer le CLIENT des impacts potentiels, 
des mesures correctives envisagées et des risques résiduels, assurant une transparence totale.

Le Prestataire garantit qu'elle n'utilisera pas les données du CLIENT à des fins de test sans un accord préalable et explicite du CLIENT
et s'engage à anonymiser et protéger la confidentialité de ces données durant leur traitement.

En cas de changement de sous-traitant pour l'hébergement, Le Prestataire informera le CLIENT en amont, s'assurant que cette transition n'affecte pas négativement le service fourni.

À la demande du CLIENT, le Prestataire fournira l'accès à son règlement intérieur, à sa charte d'éthique, aux sanctions applicables en cas de non-respect de sa
politica di sicurezza, agli eventi che lo riguardano, alle procedure relative al servizio e ai requisiti specifici di sicurezza.

### 10.2. Limitazione di responsabilità del Fornitore

La struttura di responsabilità condivisa riduce efficacemente l'ambito di intervento del Fornitore agli aspetti relativi alla fornitura di una piattaforma RedHat OpenShift funzionale, comprendendo:

- La gestione dell'infrastruttura IaaS che supporta la piattaforma RedHat OpenShift e il suo provisioning,
- La gestione dei sistemi necessari per il corretto funzionamento della piattaforma,
- Il mantenimento in condizioni di sicurezza,
- L'aggiornamento della piattaforma RedHat OpenShift,
- Il backup dei dati di configurazione essenziali di questa piattaforma, ad eccezione dei dati e delle applicazioni del CLIENTE che rientrano sotto la sua responsabilità.

Esclude in particolare, ma senza limitarsi a:

- L'aggiornamento dei sistemi operativi e dei software installati dal CLIENTE nei suoi ambienti OpenShift nei suoi spazi locativi,
- La sicurezza dei programmi, software e applicazioni installati nell'ambiente OpenShift dal CLIENTE,
- Il backup dei dati a livello applicativo,
- La configurazione delle politiche di backup.

### 10.3. Limitazione di accesso

Nell'ambito di questa convenzione di servizio, al Fornitore è formalmente vietato accedere ai tenant appartenenti al CLIENTE senza preventiva autorizzazione.
È responsabilità del CLIENTE fornire gli accessi necessari al personale del Fornitore, a seconda delle esigenze specifiche dell'hosting e, se del caso, dei servizi professionali di supporto, se questa opzione è stata scelta dal CLIENTE.

Il CLIENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla prestazione dei servizi convenuti, assicurando così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione di servizi del Fornitore è strettamente vietato.
Nell'eventualità in cui un'esigenza tecnica specifica richieda tale accesso, questo potrà essere stabilito solo dopo aver chiaramente notificato il CLIENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del CLIENTE, assicurandosi che qualsiasi eccezione alla regola sia debitamente autorizzata e documentata.

## 11. Cancellazione dei dati a fine contratto

Alla scadenza del contratto, sia che giunga a termine o che venga rescisso per qualsiasi ragione, il Fornitore si impegna a procedere alla cancellazione sicura di tutti i dati del Cliente, inclusi i dati tecnici. Il Fornitore provvederà a comunicare al CLIENTE un preavviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del CLIENTE saranno quindi cancellati entro un termine massimo di trenta (30) giorni successivi a questa notifica.

Per attestare questa cancellazione, il Fornitore consegnerà al Cliente un certificato che conferma l'avvenuta cancellazione dei dati.

## 12. Diritto applicabile

Il diritto applicabile per la presente convenzione di servizio è il diritto francese.

Nel caso di ricorso da parte del Fornitore, nell'ambito dei servizi forniti al CLIENTE, a una società terza, incluso un subappaltatore, la cui sede legale, l'amministrazione centrale o l'ufficio principale sia situato in uno Stato non membro dell'Unione Europea, o che sia proprietà o sotto controllo di una società terza domiciliata al di fuori dell'Unione Europea, il Fornitore si impegna a garantire che tale società terza non avrà alcun accesso ai dati trattati dal servizio del Fornitore.

Si noti che i dati in questione includono quelli affidati al Fornitore dal CLIENTE, nonché tutti i dati tecnici come le identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i dati manipolati dalle reti, i registri dell'infrastruttura tecnica, l'ordine, i certificati, la configurazione degli accessi, ecc., contenenti informazioni sul CLIENTE.

Per precisazione, il concetto di controllo è definito conformemente al II dell'articolo L233-3 del codice di commercio.