---
title: Convention de Service IaaS
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **CONVENTION DE SERVICES IaaS**

| **Destinataires :**                  | **COMMANDITAIRE**                               |
| :----------------------------------- | :---------------------------------------------- |
| **Référence du documents**           | CT.AM.JUR.ANX_Convention de Services_IaaS_v2.0  |
| **Vos interlocuteurs**               | *Prénom* *Nom*                                  |
|                                      | Account Manager                                 |
|                                      | e-mail : *prenom.nom*@cloud-temple.com          |
| **Date de dernière mise à jour**     | 03/04/2024                                      |
| **Date de validation contractuelle** | Jour JJ AAAA                                    |


----------------------------------------------------------------------------------

| **Version** | **Date**   | **Action**                             | **Auteur**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Rédaction initiale                     | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enrichissement                         | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Intégration Indicateurs                | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modification pied de page              | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modification Capital et Enrichissement | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enrichissement                         | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Ajustements conformité SNC             | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publication                            | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **TABLE DES MATIÈRES**


- [1. **CONVENTION DE SERVICES IaaS**](#1-convention-de-services-iaas)
- [2. **TABLE DES MATIÈRES**](#2-table-des-matières)
- [3. Préliminaire et Glossaire](#3-préliminaire-et-glossaire)
  - [3.1. Préliminaire](#31-préliminaire)
  - [3.2. Glossaire](#32-glossaire)
- [4. Acronymes](#4-acronymes)
- [5. Objet de la présente Convention de service](#5-objet-de-la-présente-convention-de-service)
- [6. Audit](#6-audit)
- [7. Description du Service](#7-description-du-service)
  - [7.1. Modèle de responsabilité partagé](#71-modèle-de-responsabilité-partagé)
  - [7.2. Présentation détaillée du périmètre du Service](#72-présentation-détaillée-du-périmètre-du-service)
    - [7.2.1. Infrastructures Datacenters](#721-infrastructures-datacenters)
    - [7.2.2. Infrastructure logicielle de pilotage du Service](#722-infrastructure-logicielle-de-pilotage-du-service)
    - [7.2.3. Infrastructures de calcul](#723-infrastructures-de-calcul)
    - [7.2.4. Infrastructure de stockage](#724-infrastructure-de-stockage)
    - [7.2.5. Infrastructure réseau globale](#725-infrastructure-réseau-globale)
    - [7.2.6. Infrastructure de sauvegarde](#726-infrastructure-de-sauvegarde)
    - [7.2.7. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité](#727-mise-en-œuvre-de-solutions-de-reprise-dactivité-ou-de-continuité-dactivité)
  - [7.3. Limitations des services dans le modèle IaaS qualifié](#73-limitations-des-services-dans-le-modèle-iaas-qualifié)
    - [7.3.1. Services managés en RUN](#731-services-managés-en-run)
    - [7.3.2. Configuration du secours](#732-configuration-du-secours)
    - [7.3.3. Configuration de la sauvegarde](#733-configuration-de-la-sauvegarde)
  - [7.4. Mise en œuvre du service](#74-mise-en-œuvre-du-service)
    - [7.4.1. Prérequis techniques](#741-prérequis-techniques)
  - [7.5. Localisation du service en France](#75-localisation-du-service-en-france)
    - [7.5.1. Localisation des Datacenters hébergeant le Service](#751-localisation-des-datacenters-hébergeant-le-service)
    - [7.5.2. Localisation des agences Cloud Temple opérant le service](#752-localisation-des-agences-cloud-temple-opérant-le-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature du support accompagnant le service](#761-nature-du-support-accompagnant-le-service)
    - [7.6.2. Sollicitation du service support technique](#762-sollicitation-du-service-support-technique)
    - [7.6.3. Processus de gestion des Incidents](#763-processus-de-gestion-des-incidents)
    - [7.6.4. Processus de priorisation des traitements](#764-processus-de-priorisation-des-traitements)
    - [7.6.5. Langue et localisation du service de support](#765-langue-et-localisation-du-service-de-support)
- [8. Engagements et niveaux de services](#8-engagements-et-niveaux-de-services)
  - [8.1. Engagements de disponibilité de l'infrastructure](#81-engagements-de-disponibilité-de-linfrastructure)
  - [8.2. Engagement de disponibilité de l'interface COMMANDITAIRE](#82-engagement-de-disponibilité-de-linterface-commanditaire)
  - [8.3. Engagement de disponibilité du support](#83-engagement-de-disponibilité-du-support)
  - [8.4. Engagement de disponibilité du stockage objet S3](#84-engagement-de-disponibilité-du-stockage-objet-s3)
  - [8.5. Précision concernant l'engagement de sauvegarde](#85-précision-concernant-lengagement-de-sauvegarde)
- [9. Organisation de la relation contractuelle](#9-organisation-de-la-relation-contractuelle)
  - [9.1. Responsabilités du Prestataire](#91-responsabilités-du-prestataire)
  - [9.2. Limitation des responsabilités du Prestataire](#92-limitation-des-responsabilités-du-prestataire)
  - [9.3. Limitation d'accès](#93-limitation-daccès)
  - [9.4. Responsabilités des tiers participant à la fourniture du service Secure Temple](#94-responsabilités-des-tiers-participant-à-la-fourniture-du-service-secure-temple)
  - [9.5. Responsabilités et obligations du COMMANDITAIRE](#95-responsabilités-et-obligations-du-commanditaire)
  - [9.6. Droits du COMMANDITAIRE](#96-droits-du-commanditaire)
  - [9.7. Effacement des données en fin de Contrat](#97-effacement-des-données-en-fin-de-contrat)
- [10. Cycle de vie de la présente Convention de service](#10-cycle-de-vie-de-la-présente-convention-de-service)
  - [10.1. Entrée en effet de la Convention de service](#101-entrée-en-effet-de-la-convention-de-service)
  - [10.2. Évolutions de la Convention de service](#102-évolutions-de-la-convention-de-service)
    - [10.2.1. Évolutions déclenchées par le COMMANDITAIRE](#1021-évolutions-déclenchées-par-le-commanditaire)
    - [10.2.2. Évolutions déclenchées par le Prestataire](#1022-évolutions-déclenchées-par-le-prestataire)
  - [10.3. Réversibilité](#103-réversibilité)
- [11. Disponibilité, continuité et restauration du service](#11-disponibilité-continuité-et-restauration-du-service)
  - [11.1. Gestion des Incidents et des interruptions](#111-gestion-des-incidents-et-des-interruptions)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types d'Incidents traités dans le cadre de cette Convention de service](#11111-types-dincidents-traités-dans-le-cadre-de-cette-convention-de-service)
      - [11.1.1.2. Traitement des incidents](#11112-traitement-des-incidents)
      - [11.1.1.3. Niveau de notification des Incidents de sécurité](#11113-niveau-de-notification-des-incidents-de-sécurité)
  - [11.2. Maintenance du Service](#112-maintenance-du-service)
    - [11.2.1. Nature de la maintenance](#1121-nature-de-la-maintenance)
    - [11.2.2. Accès distants de Cloud Temple sur le périmètre du COMMANDITAIRE](#1122-accès-distants-de-cloud-temple-sur-le-périmètre-du-commanditaire)
    - [11.2.3. Accès distants de tiers participant à la fourniture du service sur le périmètre du COMMANDITAIRE](#1123-accès-distants-de-tiers-participant-à-la-fourniture-du-service-sur-le-périmètre-du-commanditaire)
- [12. Procédure d'effacement des données en fin de Contrat](#12-procédure-deffacement-des-données-en-fin-de-contrat)
- [13. Droit applicable](#13-droit-applicable)
  - [13.1. De manière générale](#131-de-manière-générale)
  - [13.2. Respect du droit et des réglementations applicables](#132-respect-du-droit-et-des-réglementations-applicables)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protection vis à vis du droit extra-européen](#134-protection-vis-à-vis-du-droit-extra-européen)
- [14. SIGNATURES](#14-signatures)


----------------------------------------------------------------------------------


# 3. Préliminaire et Glossaire

## 3.1. Préliminaire

Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS qualificato SecNumCloud sotto il nome di «*Secure Temple*».

\"La presente convenzione di servizio completa ed è complementare alle condizioni generali di vendita e utilizzo del Fornitore. Si intende che i documenti contrattuali si interpretano in maniera coerente tra loro. In caso di contraddizione o divergenza tra i termini dei documenti contrattuali, i documenti prevarranno l'uno sull'altro nel seguente ordine:

1. Condizioni Generali di Vendita e Utilizzo (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud PaaS
4. Convenzione specifica particolare
5. Piano di Assicurazione Sicurezza (PAS)
6. Condizioni Particolari di Utilizzo (CPU)

## 3.2. Glossario

Nella presente Convenzione di servizio, il **COMMANDITAIRE**, il **Fornitore** e le **Parti** sono identificati nel Contratto cui è allegata la presente Convenzione di servizio.

Le espressioni sotto elencate impiegate nella presente Convenzione di servizio saranno interpretate conformemente alle definizioni a loro attribuite qui di seguito:

-   **Changement :** Qualsiasi aggiunta, modifica o eliminazione che impatta il Servizio, autorizzata, pianificata o gestita.

-   **Changement standard :** Modifica oggetto di una procedura, di cui sono conosciute e accettate in anticipo dalle Parti le modalità di messa in produzione e gli impatti (inclusi quelli finanziari). È quindi integrata nel catalogo delle modifiche standard e può, in alcuni casi, avere una GTI e una GTR.

-   **Contrat :** si riferisce al contratto sottoscritto dal COMMITTENTE con il Fornitore per consentire al COMMITTENTE di beneficiare del Servizio, al quale è allegata la presente Convenzione di servizio.

-   ***Convention de service :** Questo documento, redatto nel contesto di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), in conformità con i requisiti del Riferimento SecNumCloud.

-   **Demande de service :** richiesta del COMMITTENTE al Fornitore nel contesto del Servizio, coprendo le operazioni che non possono essere svolte dal COMMITTENTE dall'interfaccia COMMITTENTE e le richieste di supporto nel contesto del Servizio. Le richieste di servizio sono limitate a quelle previste dal Contratto o dalla presente Convenzione di servizio.

-   **Disponibilité :** Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

-   **Données techniques** : comprende l'insieme dei dati manipolati per fornire il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i registri dell'infrastruttura tecnica, la configurazione degli accessi, la directory, i certificati...

-   **Evènement :** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che può essere rilevante per la gestione del Servizio.

-   **Hyperviseur :** Sistema operativo che permette l'esecuzione di macchine virtuali su una schiena di calcolo.

-   **Incident :** Qualsiasi evento imprevisto che interrompe il normale funzionamento del Servizio o compromette la sicurezza dei dati.

-   **Incident de sécurité :** Qualsiasi evento nell'ambito del Servizio:

    -   Di natura intenzionalmente maliziosa;
    -   Di natura accidentale che compromette l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
    -   Che compromette le misure di sicurezza esistenti.
    Le compromissioni della Disponibilità di origine non maliziosa non sono considerate Incidenti di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

-   **Interface COMMANDITAIRE :** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, che comprende una console di amministrazione web e una API.

-   **Mise en production :** azione(i) di amministrazione per la realizzazione della Modifica quando questa è approvata (la modifica, nel senso
    ITIL, riguarda solo la gestione della modifica e non la sua realizzazione/concretizzazione).

-   **Problème** : causa di uno o più Incidenti ricorrenti, oppure causa di un Incidente potenziale (situazione a rischio).

-   **Région :** si riferisce a un insieme geograficamente delimitato di zone di disponibilità cloud, che forniscono servizi di rete, di calcolo e di storage per ottimizzare la latenza, le prestazioni e la conformità normativa locale.

-   **Service :** si riferisce al servizio IaaS qualificato SecNumCloud "Secure Temple", fornito al COMMITTENTE dal Fornitore dalle infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" della presente Convenzione di servizio.

-   **Secure Temple** : si riferisce al servizio IaaS qualificato SecNumCloud, offerto dalla società Cloud Temple, come definito nella certificazione consultabile sul sito dell'ANSSI e fornita in allegato alla presente Convenzione di servizio.

-   **Sinistre :** si riferisce a un evento grave di origine naturale o umana, accidentale o intenzionale, che provoca perdite e danni significativi alla Parte colpita.

-   **Supervision :** Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi monitorati, una prerogativa che appartiene alle operazioni di Amministrazione.

-   **Tenant :** Una istanza isolata riservata a un utente o gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zone de Disponibilité (AZ) (Availibility zone) :** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.

# 4. Acronymes


  | **Acronyme** | **Définition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comitato consultivo per le modifiche                           |
  | **CMDB**     | Configuration Management Database -- Base di dati per la gestione delle configurazioni  |
  | **COPIL**    | Comitato di controllo                                                                   |
  | **COSTRAT**  | Comitato strategico                                                                     |
  | **COPROJ**   | Comitato di progetto                                                                    |
  | **DB**       | Database (base di dati)                                                                 |
  | **DRP**      | Disaster Recovery Plan (PRA) (Piano di ripristino dell'operatività)                     |
  | **GTE**      | Garanzia del Tempo di Escalation                                                        |
  | **GTI**      | Garanzia del Tempo di Intervento                                                        |
  | **GTR**      | Garanzia del Tempo di Risoluzione                                                       |
  | **ITIL**     | Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI   |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Mantenimento delle condizioni operative                                                 |
  | **MOA**      | Direzione dei Lavori                                                                    |
  | **MOE**      | Direzione dell'Opera                                                                    |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Piano di Assicurazione Qualità                                                          |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Piano di Assicurazione Sicurezza                                                        |
  | **PASSI**    | Fornitore di Audit di Sicurezza dei Sistemi Informativi                                 |
  | **RFC**      | Request For Change -- Richiesta di modifica                                             |
  | **RGPD**     | Regolamento Generale sulla Protezione dei Dati (personali)                              |
  | **RPO**      | Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistro        |
  | **RTO**      | Recovery Time Objective -- Tempo di ripristino del servizio in caso di Sinistro         |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Accordo sui livelli di servizio                              |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Terza Manutenzione Applicativa                                                          |
  | **UO**       | Unità di Opera                                                                          |
  | **VABE**     | Validazione di Idoneità alla Buona Operabilità                                           |
  | **VABF**     | Validazione di Idoneità al Buon Funzionamento                                           |
  | **VM**       | Virtual Machine (Macchina virtuale)                                                     |
  | **VSR**      | Validazione di Servizio Regolare                                                        |


# 5. Objet de la présente Convention de service

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al
COMMITTENTE. Il suo scopo è:

-   Precisare i requisiti di prestazione attesi dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

-   Enunciare le obbligazioni del Fornitore per soddisfare i livelli di servizio concordati;

-   Identificare gli standard normativi applicabili specificamente al Servizio fornito;

-   Assicurare un'uniformità e un'integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata attraverso indicatori di prestazione quantitativi.

È stipulato che, nel caso in cui al Fornitore venga ritirata la qualificazione SecNumCloud, il Contratto potrà essere risolto da
plein droit, sans encourir de pénalità, dal COMMITTENTE. In tal caso, il Fornitore si impegna a informare il COMMITTENTE
di tale squalifica mediante l'invio di una notifica ufficiale, attraverso una lettera raccomandata con ricevuta di ritorno.

È importante notare che una modifica o un adeguamento della qualificazione SecNumCloud non sarà interpretato come una revoca della
qualificazione iniziale.

# 6. Audit

Il Fornitore si impegna a consentire al COMMITTENTE, o a qualsiasi revisore terzo e non concorrente del Fornitore che quest'ultimo avesse designato, di consultare tutti i documenti necessari per attestare il pieno rispetto degli obblighi relativi alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione
di audit.

Accettando il presente Contratto di servizio, il COMMITTENTE conferisce la sua autorizzazione esplicita a:

1.  L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI) così come all'ente di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al quadro di riferimento SecNumCloud.
2.  Un fornitore di audit della sicurezza dei sistemi informativi, debitamente qualificato PASSI e espressamente designato dal Fornitore, per condurre audit di sicurezza sul Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio offerto dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, le quali si allineano al principio di responsabilità condivisa presentato nel quadro di riferimento SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La messa a disposizione di spazi di archiviazione;

-   L'accesso a servizi di connettività di rete e internet;

-   L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nell'ambito del Servizio è presentato in §7.1.

È inteso che il Fornitore impiegherà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali e
conformemente ai requisiti del quadro di riferimento SecNumCloud.

Il Servizio è qualificato SecNumCloud (vedi attestazione in Appendice).

## 7.2. Presentazione dettagliata del perimetro del Servizio

| Compute               | Risorsa di calcolo del Tenant COMMITTENTE                                                                           |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------ |
| Storage               | Dati di produzione del Tenant COMMITTENTE                                                                           |
| Archiviazione oggetti S3 | messa a disposizione di un'infrastruttura di archiviazione oggetti sovrana multi-AZ e compatibile con le API standard S3. |
| Backup                | Modulo sottoscrizione al mass-storage adeguato                                                                      |
| Infrastruttura di rete | Risorsa di rete del Tenant COMMITTENTE                                                                              |
| Console COMMITTENTE   | Il servizio che consente al COMMITTENTE di accedere al suo servizio IaaS e di amministrarlo via l'interfaccia Shiva |
| Supporto              | Il servizio di supporto che accompagna i servizi precedenti e solo questi (*)                                      |

_(*) Nei limiti del perimetro del Servizio qualificato SNC e delle responsabilità del Fornitore in materia_

### 7.2.1. Infrastrutture Datacenter

Il Servizio comprende la messa a disposizione, per ciascuna Zona di disponibilità, delle prestazioni qualificate qui di seguito:

-   Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 dell'Uptime Institute;
-   Messa a disposizione di sale tecniche all'interno di datacenter dedicati ad accogliere le attrezzature tecniche indispensabili alla produzione del servizio, includendo calcolo, archiviazione, rete, cablaggio, e altri componenti necessari;
-   Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, assicurando una continuità del servizio;
-   Fornitura di servizi di climatizzazione, regolati per rispettare le norme e le raccomandazioni dei produttori di attrezzature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
-   Supervisione continua e metrologia dettagliata, permettendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore garantisce la messa a disposizione di servizi avanzati di rilevazione e spegnimento degli incendi, progettati per identificare e neutralizzare efficacemente qualsiasi principio di incendio all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle attrezzature e dei dati. Comprendono rilevatori di fumo ad alta precisione e dispositivi di spegnimento che possono agire rapidamente senza danneggiare l'attrezzatura informatica. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i potenziali danni e garantire la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e misure di sicurezza implementate, inclusi i test annuali di switching sui gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare i rischi di interruzione e garantire una reattività ottimale in caso di incidente. Accettando queste condizioni, il cliente riconosce l'importanza di queste misure e si impegna a collaborare pienamente per facilitarne l'implementazione. Il COMMITTENTE è inoltre incoraggiato a prendere visione delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria per l'utilizzo del Servizio. Si impegna inoltre a mantenere questa console di amministrazione e l'API in condizioni operative ottimali e a garantirne la sicurezza in modo continuo.
Questa console di amministrazione e l'API sono designate collettivamente con il termine «interface COMMITTENTE».

Il Fornitore informa il COMMITTENTE che un uso anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o al Servizio. È importante sottolineare che questa situazione non costituisce un'interruzione del Servizio ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come un'interruzione nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMITTENTE invia richieste identiche a una frequenza superiore, il loro rifiuto non può essere interpretato come un'interruzione del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle attrezzature necessarie all'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Ciò comprende:

- La fornitura dei telai tecnici necessari al buon funzionamento delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e distribuite secondo le zone di disponibilità di sua scelta. È importante notare che queste lame di calcolo sono esclusivamente dedicate al COMMITTENTE;
- La messa a disposizione di sistemi operativi di tipo hypervisor, così come la garanzia del mantenimento operativo e della sicurezza dell'infrastruttura software necessaria alla gestione di questi sistemi operativi. È importante sottolineare che, anche se il Fornitore è responsabile della manutenzione operativa e della sicurezza globale del Servizio, non possiede conoscenze specifiche riguardo agli ambienti di produzione del COMMITTENTE né dei requisiti legati ai suoi carichi di lavoro. Di conseguenza, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, un'azione suscettibile di richiedere un riavvio, spetta interamente al COMMITTENTE. Questa operazione può essere effettuata tramite l'Interfaccia COMMITTENTE.

La scelta del modello di lama di calcolo, selezionato dal catalogo offerto dal Fornitore, è responsabilità del
COMMITTENTE.

### 7.2.4. Infrastruttura di archiviazione

Il servizio comprende la fornitura al COMMITTENTE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), offrendo vari livelli di prestazioni. Questo servizio include:

- L'implementazione e il mantenimento operativo e in condizioni di sicurezza della rete SAN dedicata;
- L'installazione e la gestione delle baie di archiviazione condivise tra i clienti, inclusi il loro mantenimento operativo e in condizioni di sicurezza, il loro monitoraggio e la loro misurazione;
- L'implementazione di sistemi automatizzati per l'allocazione delle LUNs (Numeri di Unità Logiche) di archiviazione dedicati all'uso del COMMITTENTE, conformemente ai volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore implementa, nell'ambito del Servizio, una rete globale che facilita al COMMITTENTE l'accessibilità ai suoi sistemi
ospitati. Questo servizio comprende:
-   La fornitura, il mantenimento in condizione operativa e in condizione di sicurezza di tutte le connessioni in fibra ottica
    che interconnettono le diverse Zone di disponibilità;

-   La fornitura, il mantenimento in condizione operativa e in condizione di sicurezza delle attrezzature tecniche necessarie per il corretto
    funzionamento della rete e per l'isolamento dei vari clienti.

L'interconnessione della rete del Tenant COMMITTENTE, a Internet o a reti private, e le attrezzature di rete, i collegamenti degli operatori e altri
componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete è implementata
conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMITTENTE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue
macchine virtuali. Il Fornitore assicura il mantenimento in condizione operativa e in condizione di sicurezza di questo servizio di backup.
Il Fornitore garantisce che i backup del COMMITTENTE saranno situati al di fuori della Zona di disponibilità dei carichi di lavoro
backupati, a condizione che il COMMITTENTE abbia sottoscritto le Unità d'opera adeguate.

Questo servizio di backup è limitato al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS
dei Tenants del COMMITTENTE nel quadro del Servizio. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del
COMMITTENTE dipendono dalla sottoscrizione a unità d'opera specifiche. Spetta quindi al COMMITTENTE assicurarsi della
disponibilità delle risorse tecniche necessarie presso il Fornitore per attuare la sua politica di backup o di adattare quest'ultima in base ai mezzi disponibili. 

Il Fornitore si impegna a notificare il COMMITTENTE in caso di vincoli di capacità e a fornire consulenza per
l'ottimizzazione delle risorse. Gli obblighi del Fornitore saranno limitati all'implementazione delle esigenze espresse dal COMMITTENTE
in materia di politica di backup, nel quadro delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripristino di emergenza o di continuità operativa

Il Fornitore fornisce al COMMITTENTE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso le diverse Zone di disponibilità. Spetta al COMMITTENTE la responsabilità di gestire efficacemente questa distribuzione di risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a tale scopo.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

-   L'hosting di componenti fisici del COMMITTENTE;

-   L'interconnessione della rete del Tenant COMMITTENTE, a Internet o a reti private, inclusi i collegamenti dell'operatore;

-   Qualsiasi servizio di tipo gestito, o TMA;

-   Qualsiasi assistenza sulle macchine virtuali a livello OS e superiori nella pila di responsabilità IaaS, anche se si tratta di semplice supervisione.

Detto ciò, non è assolutamente escluso che il COMMITTENTE ricorra a tali servizi dall'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenants. Tali servizi non saranno coperti dalla presente Convention di servizo e dai suoi impegni/clausole bipartiti.

### 7.3.2. Configurazione del ripristino di emergenza

Di default, il Fornitore fornisce l'implementazione delle risorse IaaS al COMMITTENTE riservando risorse e configurando i deploy per utilizzare le Zone di disponibilità. Spetta al COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia COMMITTENTE.

### 7.3.3. Configurazione del backup

Il servizio di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia rappresentanti l'ambiente IaaS dei Tenants del COMMITTENTE nel quadro del Servizio.

Il servizio di backup e il completamento della politica di backup del COMMITTENTE è soggetta alla sottoscrizione di spazio di archiviazione sul mass storage necessario per garantire il servizio. Spetta quindi al COMMITTENTE sottoscrivere presso il Fornitore i mezzi tecnici necessari per garantire la politica di backup sul proprio perimetro informatico, o di adattare la politica di backup ai mezzi implementati. Il Fornitore si impegna a informare il COMMITTENTE in caso di limite di capacità tecnica.

Il Fornitore metterà in atto i mezzi tecnici e umani necessari per il backup del sistema ospitato nei limiti delle risorse sottoscritte dal COMMITTENTE.

Inoltre, per i perimetri non coperti dal Fornitore, spetta al COMMITTENTE definire la propria strategia di backup e configurare autonomamente i backup delle VM o effettuare una Richiesta di servizio al Fornitore affinché la configurazione dei backup per i server fisici sia implementata se il COMMITTENTE dispone di un contratto di servizio gestito che consente al Fornitore di agire tramite l'interfaccia COMMITTENTE che è la console di amministrazione messa a disposizione nel quadro di questa Convention di servizi e che dispone di funzionalità per configurare i backup.

Inoltre, questo servizio avrà come solo impegno quello di tradurre mediante la configurazione tramite l'interfaccia COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per motivi di flessibilità dell'offerta del Fornitore, il COMMITTENTE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In questo caso, spetta al COMMITTENTE sostenere questa scelta. Il Fornitore non effettuerà backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMITTENTE che scegliere la politica "no backup" o scegliere di eseguire backup manualmente espone il COMMITTENTE a una perdita definitiva dei dati in caso di Incidente sui livelli inferiori o sui livelli dipendenti dalla sua responsabilità nel modello IaaS. In tal caso, sarà impossibile ritenere il Fornitore responsabile per il ripristino dei dati poiché non ci sarà nulla da ripristinare. Il Fornitore raccomanda di eseguire sempre il backup delle VM.

Per qualunque questione riguardante il sistema operativo installato su una macchina virtuale e qualsiasi software o programma in esecuzione "sopra il sistema operativo", è responsabilità del COMMITTENTE eseguire le operazioni di amministrazione e supervisione all'interno dell'Unione Europea, se desidera garantire che tutta la verticalità degli strati del SI siano operati e gestiti dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nel quadro della presente Convention di servizio sono indicate nella sezione "Modello di responsabilità condivisi" della presente Convention di Servizi.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l'implementazione del Servizio, il COMMITTENTE riconosce che dovrà:

-   Operare con una virtualizzazione di tipo VMware nelle versioni supportate dall'editore e fornite dal Fornitore nel quadro del Servizio;

-   Utilizzare tramite il Fornitore lo strumento di backup;

-   Dichiarare IP fissi dai quali il Fornitore lo autorizzerà ad accedere all'interfaccia COMMITTENTE (Filtraggio tramite lista bianca). Le modifiche a questa lista di IP dovranno essere effettuate tramite Richieste di servizio (lista non amministrabile tramite l'interfaccia di amministrazione del Servizio).


## 7.5. Localizzazione del servizio in Francia

È specificato che nessuna delle operazioni e nessuno dei componenti fisici coinvolti nella fornitura del Servizio, oggetto della presente Convention di servizio, si trova al di fuori dell'Unione Europea.

Ciò include in particolare il supporto, la supervisione operativa e la supervisione della sicurezza (SOC) dell'infrastruttura tecnica che eroga il Servizio. Di fatto, tutto lo storage, tutte le attività di amministrazione, supervision e tutti i processi sono realizzati in Francia.

### 7.5.1. Localizzazione dei Datacenter ospitanti il Servizio

Ad eccezione delle operazioni dei collaboratori e delle agenzie del Fornitore, tutte le operazioni di produzione (compreso lo storage e il trattamento dei dati) e componenti tecnici che erogano il Servizio si trovano nei Datacenter situati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio

I collaboratori di Cloud Temple che operano sul perimetro del Servizio operano dalle agenzie di Cloud Temple tutte situate
esclusivamente in Francia. Queste agenzie sono situate in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità per i dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza per quanto riguarda gli accessi a distanza, in particolare per quanto riguarda gli accessi VPN. Tali accessi remoti sono implementati conformemente ai requisiti del framework SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere il COMMITTENTE nella gestione, nella risoluzione dei problemi e nell'ottimizzazione delle
risorse distribuite. Questo servizio copre una vasta gamma di attività, dall'aiuto alla configurazione iniziale dei servizi
fino al supporto tecnico avanzato per risolvere problemi specifici.

Di seguito una descrizione delle caratteristiche e delle funzionalità del servizio di supporto:

-   Assistenza nell'implementazione iniziale dell'utilizzo del Servizio;
-   Assistenza nella risoluzione degli incidenti;
-   Assistenza nella risoluzione dei problemi;
-   Monitoraggio e consulenza sull'ottimizzazione della base tecnica.
Dans le quadro del servizio di supporto, il Fornitore non si sostituisce al COMMITTENTE nell'uso del Servizio. Il COMMITTENTE rimane interamente responsabile della configurazione, dell'operazione delle sue VM e dei suoi Tenant, e della gestione di tutti gli elementi (dati e applicazioni inclusi) che ha immagazzinato o installato sulle infrastrutture del Fornitore. Il servizio di supporto tecnico è fornito in accordo con le Condizioni Generali di Vendita e di Utilizzo, il Fornitore essendo tenuto a un obbligo di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti presso il Fornitore e dal fare intervenire le squadre del Fornitore presso i propri clienti o terzi non inclusi nel Contratto. Il Fornitore si riserva il diritto di rifiutare qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità di opera di supporto associate.

### 7.6.2. Richiesta del servizio di supporto tecnico 

Il supporto tecnico è accessibile tramite un sistema di ticket via la console COMMITTENTE ed è disponibile durante le ore normali di ufficio esclusi i giorni festivi (8h - 18h ; Lunedì -- Venerdì; calendario e orari francesi). Per le emergenze che si verificano al di fuori delle ore lavorative, in particolare gli incidenti che influenzano significativamente la produzione, il servizio di reperibilità può essere contattato tramite un numero fornito al COMMITTENTE all'inizio del Servizio.

Per ogni richiesta o Incidente, è imperativo generare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprensivo di tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia tramite la console di gestione che a seguito di una chiamata telefonica, un ticket viene automaticamente creato. Durante la dichiarazione di un Incidente, è essenziale che il COMMITTENTE fornisca al fornitore il maggior numero di dettagli sul problema riscontrato. Questo processo è cruciale per consentire una valutazione adeguata della situazione, la sua prioritizzazione e una diagnosi efficace.

Il Cliente riceve quindi una conferma via e-mail, indicando la creazione del ticket e il suo numero unico. Il COMMITTENTE può consultare
lo stato e la cronologia delle sue richieste e delle dichiarazioni di Incidenti direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti 

Durante una dichiarazione di un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il Cliente deve collaborare attivamente col Fornitore fornendo tutte le informazioni necessarie ed effettuando i test richiesti. Il Fornitore può accedere al Servizio del Cliente per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono giudicati funzionali e l'Incidente non è attribuibile a lui, il Cliente ne sarà informato. Su richiesta del Cliente, il Fornitore può proporre Servizi Professionali per identificare l'origine del problema, fatturabili su accordo preventivo per tranche di 30 minuti.

Nel caso in cui l'Incidente sia responsabilità del Fornitore o di uno dei suoi subappaltatori, questo completa la diagnosi e si impegna a ripristinare il Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e sui dati del Fornitore, considerati probanti per accordo delle Parti.

### 7.6.4. Processo di prioritizzazione dei trattamenti 

La determinazione del livello di priorità di un caso si basa su un'analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di criticità:

-   I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impatto I1       | I servizi del Fornitore sono interrotti                                                                    |
| Impatto I2       | I servizi del Fornitore sono degradati                                                                       |
| Impatto I3       | I servizi del Fornitore sono attualmente stabili, ma mostrano segni di declino potenziale a lungo termine |

-   I livelli di Criticità sono definiti come segue:

| Livello di criticità | Descrizione                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticità C1        | I servizi del Fornitore si degradano a una velocità preoccupante                               |
| Criticità C2        | I servizi del Fornitore si deteriorano progressivamente nel tempo                          |
| Criticità C3        | I servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative |

-   Sulla base di un'analisi approfondita della situazione, che prende in considerazione gli elementi determinanti l'Impatto e la Criticità, una priorità è attribuita al ticket conforme alla matrice di decisione qui di seguito:

| Livello di impatto <br/> \ Livello di criticità | Impatto I1       | Impatto I2       | Impatto I3       |
| ------------------------------------------- | --------------- | --------------- | --------------- |
| Criticità C1                                | Priorità **P1** | Priorità **P2** | Priorità **P3** |
| Criticità C2                                | Priorità **P2** | Priorità **P3** | Priorità **P4** |
| Criticità C3                                | Priorità **P3** | Priorità **P4** | Priorità **P5** |

Gli impegni di livello di servizio corrispondenti a ciascun livello di priorità sono dettagliati nel capitolo successivo.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in lingua francese. Il supporto può essere fornito anche in lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di servizio di infrastruttura qualificata SecNumCloud sono situate nell'Unione Europea.

# 8. Impegni e livelli di servizi

Il Fornitore si impegna a garantire una sorveglianza continua della performance e dell'integrità sicura della sua infrastruttura tecnica che eroga il Servizio, assicurandone il funzionamento ottimale.

L'indisponibilità di un servizio, risultante da un indicatore di prestazione, è riconosciuta al momento dell'identificazione da parte del sistema di supervisione del Fornitore, o a seguito di una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato nel momento più precoce tra questi due eventi, per garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente marcata dal ripristino completo del servizio, confermato sia dagli strumenti di supervisione del Fornitore sia dal feedback dell'utente, assicurando così una ripresa effettiva delle operazioni e una misura fedele della durata dell'interruzione.

## 8.1 Impegni di disponibilità dell'infrastruttura 

Il Fornitore si impegna a mantenere un livello di disponibilità e di performance conforme agli standard definiti per ogni periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLAs) si applicano a condizione che il COMMITTENTE implementi i suoi sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza del rispetto di queste condizioni da parte del COMMITTENTE,
quest'ultimo sarà impossibilitato a rivendicare l'applicazione degli
SLAs interessati, che sono specificamente identificati da
un asterisco (\*). L'accessibilità agli SLAs avviene tramite l'interfaccia
COMMITTENTE. Le misurazioni si intendono calcolate mensilmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilità della potenza di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 3     : IC-INFRA_SNC-03** – Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 5     : IC-INFRA_SNC-05** – Accesso a Internet: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.

_**Note**_ :

- *In risposta a un attacco denial of service distribuito (DDoS), il Fornitore si riserva il diritto di adeguare la sua configurazione di routing di internet per limitare l'impatto di tale attacco e salvaguardare la sua infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE è mirato, il Fornitore può ricorrere alla tecnica del blackholing tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP obiettivo in upstream dai suoi fornitori, al fine di proteggere le risorse del COMMITTENTE così come quelle di altri COMMITTENTI e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il COMMITTENTE ad adottare misure simili, come l'uso di software firewall applicativi web disponibili sul mercato, e a configurare accuratamente i suoi gruppi di sicurezza tramite l'API di comando.*
- *Il Fornitore insiste sulla necessità che il COMMITTENTE minimizzi le aperture di flussi, evitando in particolare di rendere accessibili le porte di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) da tutta Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE

-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, assicurata in continuo, 24 ore su 24 e 7 giorni su 7.
-   SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su base 24h/24, 7g/7.

## 8.3. Impegno di disponibilità del supporto 

- **SLA 8      : IC-INFRA_SNC-08** – Ecco gli impegni di performance del supporto tecnico del Fornitore per gli incidenti, escluse le manutenzioni programmate:

| Priorità        | Garanzia di tempo di intervento (GTI) | Obiettivo di performance |
| --------------- | -------------------------------------- | ------------------------ |
| Priorità **P1** | 30min                                  | 95%                      |
| Priorità **P2** | 2h                                     | 90%                      |
| Priorità **P3** | 4h                                     | 90%                      |
| Priorità **P4** | 24h                                    | 85%                      |
| Priorità **P5** | 48h                                    | 85%                      |

- **SLA 9      : IC-INFRA_SNC-09** – Ecco gli impegni di performance del supporto tecnico del Fornitore per le richieste di servizio:

|                    | Garanzia di tempo di intervento (GTI) | Obiettivo di performance |
| ------------------ | -------------------------------------- | ------------------------ |
| Richiesta di servizio | 4h                                  | 90%                      |

*Nota:*

- *Il tempo per la Garanzia di Tempo di Intervento (GTI) è calcolato dalla differenza tra il momento in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
- *L'investigazione di incidenti riguardanti i COMMITTENTI non comprenderà interventi remoti sui server ospitati del COMMITTENTE. Questo supporto sarà limitato alla spiegazione delle metriche disponibili relative all'ambiente del COMMITTENTE, al fine di facilitare la comprensione degli incidenti o dei problemi di performance riscontrati. Sulla base dei risultati di questa analisi, potranno essere suggerite delle raccomandazioni.* 

## 8.4. Impegno di disponibilità dello storage oggetti S3

- **SLA 10      : IC-INFRA_SNC-10** – Ecco gli impegni di disponibilità per lo storage oggetti S3:

| Indicatore        | Impegno                                          | Obiettivo di disponibilità |
| ----------------- | ------------------------------------------------ | ------------------------- |
| IC-INFRA-SNC-10.1 | Durabilità dello storage di un oggetto su una regione | 99.9999999% / anno          |
| IC-INFRA-SNC-10.2 | Disponibilità dell'API Storage Oggetti S3         | 99.99%                    |
| IC-INFRA-SNC-10.3 | Latenza massima di accesso a un oggetto su una regione | 150 ms                    |

Note:

- Il Servizio di Storage Oggetti è specificamente progettato per lo storage di oggetti e deve essere impiegato unicamente a questo scopo, **escludendo categoricamente il suo utilizzo in modalità a blocchi**. Usare la modalità a blocchi attraverso metodi non corretti, inclusi ad esempio l'utilizzo di *"FUSE" in un ambiente Linux*, costituisce una violazione dei termini di utilizzo enunciati. Nessun incidente, malfunzionamento o danno derivante da questo uso non conforme sarà coperto dagli Accordi di Livello di Servizio (SLA) definiti in questa convenzione di servizi.
- La garanzia di durabilità è condizionata a un utilizzo dei servizi conforme alle migliori pratiche e standard attuali, ed esclude esplicitamente qualsiasi modifica dei dati, sia essa intenzionale o accidentale, risultante da azioni intraprese dal COMMITTENTE.

## 8.5. Precisazione riguardante l'impegno di backup

La strategia di backup dispiegata per il COMMITTENTE è condizionata dalla sottoscrizione delle unità di lavoro adeguate.

Il Fornitore si impegna a mettere a disposizione una soluzione di backup che permetterà al COMMITTENTE di applicare le politiche di backup desiderate.

È precisato che il perimetro del Fornitore si arresta alla messa a disposizione di un servizio di backup ed è responsabilità del COMMITTENTE supervisionare tramite l'interfaccia COMMITTENTE la corretta esecuzione delle politiche associate.

È precisato che la gestione delle capacità di storage dello spazio di storage dedicato ai backup, rimane a carico e responsabilità del COMMITTENTE. Il Fornitore mette a disposizione il tasso di utilizzo tramite la console.

*Esempio: Non backup di una macchina virtuale:*

*Il COMMITTENTE ha il compito di verificare / supervisionare la corretta esecuzione delle politiche dei backup, nel caso in cui il COMMITTENTE constati che una macchina virtuale non è salvata, spetta a lui verificarne la causa, il COMMITTENTE potrà richiedere il supporto del Fornitore secondo il livello di supporto sottoscritto per essere assistiti.*

**Il SLA 8: IC-INFRA_SNC-08 e SLA 9**, sarà esclusivamente applicabile nel caso di un Incidente del servizio backup.

# 9. Organizzazione della relazione contrattuale


## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna:

- a informare il suo COMMITTENTE in maniera adeguata (per esempio in caso di limite di capacità delle risorse tecniche di fornitura del Servizio).

- a informare formalmente il COMMITTENTE e entro un mese, di qualsiasi cambiamento giuridico, organizzativo o tecnico che possa avere un impatto sulla conformità del Servizio ai requisiti di protezione contro le leggi extra-europee (19.6 del riferimento SNC v3.2).

- a fornire al COMMITTENTE delle interfacce e delle interfacce di servizio che siano almeno in lingua francese.

- a studiare e prendere in considerazione le esigenze settoriali specifiche legate ai tipi di informazioni affidate dal COMMITTENTE nell'ambito della messa in opera del servizio e nei limiti delle responsabilità del Fornitore.

- a non divulgare alcuna informazione relativa alla prestazione a terzi, salvo autorizzazione formale e scritta del COMMITTENTE.

- a mettere a disposizione tutte le informazioni necessarie alla realizzazione di audit di conformità conformemente alle disposizioni dell'articolo 28 del RGPD.

- a rendere conto presso il COMMITTENTE, tramite la presente Convenzione di servizio, di qualsiasi Incidente di sicurezza che impatti il Servizio o l'utilizzo fatto dal COMMITTENTE del Servizio (inclusi i dati del COMMITTENTE).

- ad autorizzare un fornitore di audit della sicurezza dei sistemi informativi (PASSI) qualificato, incaricato dal Fornitore, ad auditare il servizio e il suo sistema informativo, conformemente al piano di controllo del SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per condurre correttamente gli audit di conformità alle disposizioni dell'articolo 28 del RGPD, effettuati dal committente o da un terzo incaricato.

- a fornire, in qualità di subappaltatore, conformemente all'articolo 28 del Regolamento generale sulla protezione dei dati (RGPD), assistenza e consigli al COMMITTENTE avvertendolo non appena un'istruzione emessa da quest'ultimo sia suscettibile di costituire una violazione delle regole di protezione dei dati.
 
- a notificare per iscritto, quando un progetto impatta o è suscettibile di impattare il livello di sicurezza del Servizio, il COMMITTENTE dei potenziali impatti, delle misure di attenuazione messe in atto, così come dei rischi residui che lo riguardano.

- a documentare e mettere in atto l'insieme delle procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali applicabili al servizio, così come le necessità di sicurezza specifiche del COMMITTENTE, definite da quest'ultimo e previste nel Contratto. Su richiesta del COMMITTENTE, il modulo Documentazione dell'interfaccia COMMITTENTE permetterà una condivisione sicura di tali documenti.

- a fornire, su richiesta del COMMITTENTE, gli elementi di valutazione dei rischi relativi alla sottomissione dei dati del COMMITTENTE al diritto di uno stato non-membro dell'Unione Europea.


Su richiesta del COMMITTENTE formale e scritta, il Fornitore si impegna a:

1. Rendere accessibile al COMMITTENTE il regolamento interno e la carta etica del Fornitore;

2. Rendere accessibile al COMMITTENTE le sanzioni previste in caso di infrazione alla politica di sicurezza;

3. Fornire al COMMITTENTE l'insieme degli eventi che lo riguardano negli elementi di registrazione del Servizio;

4. Alla fine del Contratto il Fornitore si impegna a eliminare i dati e i Dati tecnici relativi al COMMITTENTE, conformemente alla «procedura di cancellazione dei dati a fine Contratto» descritta nella presente Convenzione di servizio.

5. ad assicurare una cancellazione sicura dell'interezza dei dati del COMMITTENTE mediante la riscrittura completa di tutto il supporto che ha ospitato i suoi dati nell'ambito del Servizio.

6. a fornire l'elenco completo delle terze parti autorizzate ad accedere alle infrastrutture che ospitano i dati.

Le Fornitore manterrà aggiornato e metterà a disposizione del COMMITTENTE l'elenco esaustivo dei terzi autorizzati ad accedere alle infrastrutture contenenti i dati, informando quest'ultimo di qualsiasi cambiamento relativo ai subappaltatori. Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell'Unione europea, cioè la dignità umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto, nonché il rispetto dei Diritti umani. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell'Unione europea relativi al rispetto della dignità umana, della libertà, dell'uguaglianza, della democrazia e dello Stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore

A causa dell'insieme delle definizioni e condizioni menzionate nella presente Convenzione di servizio, le responsabilità del Fornitore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione «Modello di responsabilità condivisa» della presente Convenzione di servizio, limita di fatto il coinvolgimento del Fornitore nei livelli di funzionamento "superiori" alla messa a disposizione di risorse di calcolo, di rete, di storage e di backup. Questo esclude in particolare senza limitarsi a:

    -   La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicativi, ecc.);

    -   L'aggiornamento degli OS e altri software installati dal COMMITTENTE sulle sue macchine nei suoi Tenant;

    -   La sicurezza dei programmi, software e applicativi installati sulle macchine virtuali;

    -   L'aggiornamento delle macchine virtuali;
  
    -   Il backup dei dati a livello applicativo.

2.  Il Fornitore non può assumere impegni di backup dei Tenant del COMMITTENTE senza che quest'ultimo abbia precedentemente sottoscritto le unità di opere adeguate.

3.  Il Fornitore non può rivendicare la proprietà dei dati trasmessi e generati dal COMMITTENTE. Infatti, questi ultimi rientrano nella proprietà del COMMITTENTE.

4.  Il Fornitore sottolinea che non può in nessun caso utilizzare i dati trasmessi e generati dal COMMITTENTE senza previa validazione di quest'ultimo.
   
5.  Il Fornitore declina ogni responsabilità sui componenti fisicamente ospitati e gestiti dal Fornitore, ma di proprietà diretta del COMMITTENTE o di un terzo con il quale il COMMITTENTE ha contrattualizzato. L'hosting di componenti fisici dei clienti non fa parte del Servizio ed è quindi fuori dall'ambito della presente Convenzione di servizio. È compito del COMMITTENTE valutare il livello di adesione o dipendenza che introducono questi componenti rispetto al Servizio IaaS qualificato SecNumCloud.

## 9.3. Limitazione di accesso 

Nell'ambito del Servizio, il Fornitore è formalmente vietato di accedere ai Tenant appartenenti al COMMITTENTE senza previa autorizzazione. È responsabilità del COMMITTENTE fornire gli accessi necessari al personale del Fornitore, secondo le esigenze specifiche dell'hosting e, se del caso, dei servizi professionali di supporto, se questa opzione è stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla fornitura dei servizi concordati, assicurando così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella fornitura del servizio del Fornitore è severamente vietato. Nell'eventualità in cui una specifica esigenza tecnica richiedesse tale accesso, esso potrebbe essere stabilito solo dopo aver chiaramente notificato il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo accordo scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio Secure Temple

Il Fornitore supervisiona l'elenco dei terzi partner che partecipano alla fornitura del Servizio. Questi terzi sono gli editori, fornitori (del Fornitore) e altri fornitori che partecipano alla fornitura del Servizio. Il Fornitore applica le seguenti misure a questi terzi:

-   Il Fornitore richiede ai terzi che partecipano all'implementazione del servizio, nel loro contributo al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

-   Il Fornitore contrattualizza, con ciascuno dei terzi che partecipano all'implementazione del servizio, clausole di audit che permettono a un organismo di qualificazione di verificare che questi terzi rispettino i requisiti legali e i requisiti SNC, permettendo al Fornitore di rispettare i propri impegni nella presente Convenzione di servizio.

-   Il Fornitore implementa una procedura che permette di controllare regolarmente le misure messe in atto dai terzi che partecipano all'implementazione del servizio per rispettare i requisiti del Fornitore di rispettare i propri impegni nella presente Convenzione di servizio.

-   Il Fornitore implementa una procedura di monitoraggio dei cambiamenti apportati dai terzi che partecipano all'implementazione del servizio suscettibili di influenzare il livello di sicurezza del sistema informativo del servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

Come promemoria, il Fornitore fornisce al COMMITTENTE una piattaforma di esecuzione di macchine virtuali, la configurazione di queste è a carico del COMMITTENTE. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Fornitore definisce tramite le sue interfacce politiche di backup automatiche. Ma è a carico del COMMITTENTE l'attivazione di queste politiche di backup e quindi l'attivazione delle macchine virtuali.

Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione SNC ad auditare il Servizio e l'infrastruttura tecnica che fornisce il Servizio.

## 9.6. Diritti del COMMITTENTE

In qualsiasi momento durante la relazione contrattuale, il COMMITTENTE può presentare un reclamo relativo al servizio qualificato all'ANSSI.

In qualsiasi momento, il COMMITTENTE può chiedere al Fornitore di rendergli accessibile il suo regolamento interno e la sua carta etica.

## 9.7. Cancellazione dei dati alla fine del Contratto

Al termine del contratto, che giunga a scadenza o che sia rescisso per qualsiasi ragione, il Fornitore si impegna a procedere alla cancellazione sicura di tutti i dati del COMMITTENTE, compresi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un preavviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno quindi eliminati entro un termine massimo di trenta (30) giorni a partire da questa notifica.

Per attestare questa eliminazione, il Fornitore consegnerà al COMMITTENTE un certificato che conferma la cancellazione dei dati.

# 10. Ciclo di vita della presente Convenzione di servizio

## 10.1. Entrata in vigore della Convenzione di servizio

La presente Convenzione di servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, lo storage e il trattamento dei dati effettuati nell'ambito della prevendita, l'implementazione, l'interruzione del Servizio, sono effettuati nel rispetto della legislazione vigente.

## 10.2. Evoluzioni della Convenzione di servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tal fine. Queste proposte di modifica saranno esaminate dalle Parti, autorizzate a determinare gli aspetti che richiedono una formalizzazione scritta.

È convenuto che qualsiasi evoluzione della Convenzione di servizio, dopo la convalida, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la redazione e la firma di un emendamento al Contratto in corso.

I fattori che possono indurre una revisione della presente Convenzione di servizio includono, senza limitarsi a:

-   L'evoluzione dell'infrastruttura tecnica che fornisce il Servizio IaaS;
-   Gli aggiustamenti apportati ai servizi offerti dal Fornitore per fornire il Servizio;
-   Le variazioni degli impegni assunti e delle sanzioni applicabili;
-   Le riconfigurazioni organizzative all'interno del COMMITTENTE o del Fornitore;
-   L'espansione o la riduzione del campo di applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è registrata in premessa del documento per facilitarne il monitoraggio.

### 10.2.1. Evoluzioni avviate dal COMMITTENTE

Le evoluzioni della Convenzione di servizio possono avere, tra l'altro, per origine:

-   Un'evoluzione dell'infrastruttura gestita dal Fornitore;

-   Una modifica dei servizi implementati dal Fornitore;

-   Una modifica degli impegni di livello di servizio del Fornitore.

### 10.2.2. Evoluzioni avviate dal Fornitore

Qualsiasi modifica della Convenzione di servizio è soggetta all'accettazione del COMMITTENTE. Si intende che qualsiasi modifica o integrazione 
convalidata che modifichi gli elementi finanziari del Contratto, potrebbe implicare la firma di un emendamento allo stesso.

## 10.3. Reversibilità

Inoltre, Cloud Temple si impegna a consentire una revisione della presente Convenzione di servizio (prevedendo in particolare la sua risoluzione) senza penalità per il COMMITTENTE in caso di perdita della qualifica SecNumCloud.
I Servizi non comprendono un obbligo di reversibilità (ovvero, l'assistenza al Cliente affinché possa migrare il suo sistema verso un altro Fornitore) ad eccezione della messa a disposizione del COMMITTENTE da parte del Fornitore dell'interfaccia COMMITTENTE che consente al COMMITTENTE di salvare e recuperare i propri dati, inclusi in particolare i dati di configurazione del loro sistema informativo tramite una delle seguenti modalità tecniche, a scelta del COMMITTENTE: la messa a disposizione di file secondo uno o più formati documentati e utilizzabili al di fuori del servizio fornito dal Fornitore o tramite la messa in opera di interfacce tecniche che permettano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il COMMITTENTE, unico responsabile del proprio sistema, deve fare tutto il possibile per facilitare questa operazione laddove necessario (il che implica, in particolare, che egli metta in atto una documentazione rigorosa a tal fine) e l'elaborazione di piani di reversibilità. Nel caso in cui il COMMITTENTE avesse bisogno di una prestazione complementare, il Fornitore può proporre una missione di consulenza a tale riguardo nell'ambito di un contratto specifico da negoziare.

# 11. Disponibilità, continuità e ripristino del servizio

## 11.1. Gestione degli Incidenti e delle interruzioni

### 11.1.1. Incidenti

#### 11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di servizio

-   Sinistri

-   Guasti e malfunzionamenti

-   Incidenti di sicurezza:

-   Che impattano la disponibilità del servizio

-   Che impattano la riservatezza del servizio

-   Che impattano l'integrità del servizio

#### 11.1.1.2. Trattamento degli incidenti

-   Tempi

-   Azioni a posteriori

-   Archiviare i documenti che dettagliano gli incidenti di sicurezza.

-   Notifica di violazione dei dati personali (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Livello di notifica degli Incidenti di sicurezza

Il COMMITTENTE ha la responsabilità di scegliere i livelli di gravità degli Incidenti di sicurezza per i quali desidera essere informato, ad esempio tramite la loro formalizzazione in un PSA applicabile al Servizio.

Per impostazione predefinita, il COMMITTENTE è informato:

-   Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo la scala di impatto definita nel processo di priorizzazione dei trattamenti della presente Convenzione di servizio);

-   Delle violazioni dei dati personali di cui il COMMITTENTE è il responsabile del trattamento;

-   Delle violazioni dei dati personali di cui il Fornitore è il responsabile del trattamento e contenenti dati personali del COMMITTENTE.

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

La manutenzione assicurata consiste nell'attuazione:

-   Del piano di mantenimento in stato operativo del Servizio per garantire buoni indicatori di disponibilità come impegnato dal Fornitore in precedenza;

-   Del piano di PCA/PRA se sottoscritto dal COMMITTENTE attivato in base agli eventuali incidenti che potrebbero verificarsi.

### 11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE

Il Fornitore si impegna, nell'ambito della presente Convenzione di servizio, a non accedere ai Tenant e allo spazio dell'interfaccia del COMMITTENTE.

Spetterà al COMMITTENTE fornire gli accessi necessari al personale del Fornitore. Il COMMITTENTE riconosce che gli accessi saranno utilizzati nell'ambito dell'hosting e infine della gestione del sistema (se sottoscritta dal COMMITTENTE).

### 11.2.3. Accessi remoti di terzi partecipanti alla fornitura del servizio sul perimetro del COMMITTENTE

Nessun accesso remoto di terzi partecipanti alla fornitura del Servizio è autorizzato.

Se una necessità tecnica rendesse questo caso necessario, allora tale tipo di accesso sarebbe effettuato solo dopo notifica al COMMITTENTE, giustificazione e ottenimento del suo consenso scritto.

# 12. Procedura di cancellazione dei dati a fine Contratto

Alla fine del Contratto, sia che il Contratto sia giunto alla sua scadenza o per qualsiasi altra causa, il Fornitore garantirà la cancellazione sicura di tutti i dati trattati nell'ambito del Servizio, comprese le Dati tecniche del COMMITTENTE. Il Fornitore darà un preavviso formale rispettando un periodo di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno cancellati entro un periodo massimo di trenta (30) giorni dalla notifica. Il Fornitore fornirà un certificato di cancellazione dei dati al COMMITTENTE.

# 13. Diritto applicabile

## 13.1. In generale

Il diritto applicabile e al quale è soggetta la presente Convenzione di servizio è il diritto francese.

## 13.2. Rispetto del diritto e delle normative applicabili

Il Fornitore si impegna sui seguenti punti:

-   L'identificazione delle restrizioni legali e normative applicabili nell'ambito del Servizio;

-   Il rispetto delle restrizioni legali e normative applicabili ai dati affidati al Fornitore;

-   Il rispetto della Legge informatica e libertà e del GDPR;

-   L'attuazione di misure di protezione dei dati personali;

-   L'attuazione di un processo di monitoraggio legale e normativo;

-   Di disporre e mantenere relazioni appropriate o un monitoraggio con le autorità settoriali in relazione alla natura dei dati trattati nell'ambito del Servizio. Ciò include in particolare l'ANSSI, il CERT-FR e la CNIL.

## 13.3. GDPR

Agendo in qualità di subappaltatore ai sensi dell'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), il Fornitore si impegna:

-   Ad assicurare trasparenza e tracciabilità;

-   A designare un DPO incaricato di definire e attuare le misure di protezione dei dati personali;

-   Fornire assistenza e consulenza al COMMITTENTE allertandolo se un'istruzione di quest'ultimo costituisce una violazione delle regole di protezione dei dati personali, se il Fornitore è in grado di identificarla;

-   Una garanzia di sicurezza sui dati trattati (a causa della qualificazione SecNumCloud).

## 13.4. Protezione rispetto al diritto extra-europeo

Qualora il Fornitore, nell'ambito del Servizio, faccia ricorso al servizio di una società terza - incluso un subappaltatore - avente la propria sede statutaria, amministrazione centrale o stabilimento principale in uno Stato non membro dell'Unione Europea o appartenente o controllata da una società terza domiciliata al di fuori dell'Unione Europea, il Fornitore si impegna che tale società non avrà alcun accesso ai dati operati dal servizio 'Secure Temple'.

Ricordiamo che i dati interessati sono quelli affidati al Fornitore dal COMMITTENTE, nonché tutte le Dati tecniche che comprendono informazioni sui COMMITTENTI.

Per le necessità del presente articolo, la nozione di controllo è intesa come quella menzionata al II dell'articolo L233-3 del codice di commercio.

# 14. FIRME

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, il FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il COMMITTENTE