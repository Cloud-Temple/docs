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

Le présent document formalise la Convention de service associée au service IaaS qualifiée SecNumCloud sous l'appellation de « *Secure Temple*».

\"La présente convention de service complète et est complémentaire aux conditions générales de vente et d'utilisation du Prestataire. Il est
entendu que les documents contractuels s'interprètent de manière cohérente entre eux. En cas de contradiction ou de divergence entre les
termes des documents contractuels, les documents prévaudront les uns sur les autres dans l'ordre suivant :

1. Conditions Générales de Vente et Utilisation (CGVU)
2. Convention de Service SecNumCloud IaaS
3. Convention de Service SecNumCloud PaaS
4. Convention spécifique particulière
5. Plan d'Assurance Sécurité (PAS)
6. Conditions Particulières d'Utilisation (CPU)

## 3.2. Glossaire

Dans la présente Convention de service, le **COMMANDITAIRE**, le **Prestataire** et les **Parties** sont identifiés dans le Contrat
auquel est annexe la présente Convention de service.

Les expressions ci-après employées dans la présente Convention de service seront interprétées conformément aux définitions qui leur sont
attribuées ci-dessous :

- **Changement :** Tout ajout, une modification ou suppression impactant le Service, ayant été autorisé, planifié ou pris en charge.


- **Changement standard :** Changement faisant l'objet d'une procédure, dont les modalités de mise en production et les impacts (y compris financiers) sont connus et acceptés à l'avance par les Parties. Il est alors intégré au catalogue des changements standards, et peut selon les cas avoir une GTI et une GTR.

- **Contrat :** désigne le contrat souscrit par le COMMITTENTE presso il Fornitore pour permettre au COMMITTENTE de bénéficier du Service, et auquel la présente Convention de service est annexée.

- **Convention de service :** Questo documento, stabilito nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e di Utilizzo (CGVU), in conformità con i requisiti del Référentiel SecNumCloud.

- **Demande de service :** richiesta del COMMITTENTE verso il Fornitore nell'ambito del Service, coprendo le operazioni non realizzabili dal COMMITTENTE dall'interfaccia COMMITTENTE e le richieste di supporto nell'ambito del Service. Le richieste di servizio sono limitate a quelle previste a titolo del Contrato o della presente Convention de service.

- **Disponibilité :** Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali del Service, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

- **Données techniques :** comprende l'insieme dei dati manipolati per fornire il Service, notevolmente l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, dei registres dell'infrastruttura tecnica, configurazione degli accessi, directory, certificati...

- **Evènement :** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che possa avere importanza per la gestione del Service.

- **Hyperviseur :** Sistema operativo che permette l'esecuzione delle macchine virtuali su una blade di calcolo.

- **Incident :** Qualsiasi evento imprevisto che interrompe il normale funzionamento del Service o compromette la sicurezza dei dati.

- **Incident de sécurité :** Qualsiasi evento nel perimetro del Service:

  - Di natura intenzionalmente malintenzionata;
  - Di natura accidentale che compromette l'integrità, la riservatezza o la tracciabilità del Service o dei dati del COMMITTENTE;
  - Compromettendo le misure di sicurezza esistenti.
    I disservizi alla Disponibilità non di natura malintenzionata non sono considerati come un Incident de sécurité (guasto hardware, bug, malfunzionamento, calamità naturale...).

- **Interface COMMITTENTE :** Interfaccia di amministrazione del Service messa a disposizione del COMMITTENTE da parte del Fornitore, che include una console di amministrazione web e una API.

- **Mise en production :** azione(i) di amministrazione per la realizzazione del Changement quando questo è approvato (il cambio, nel senso di ITIL, riguarda solo la gestione del cambiamento e non la realizzazione).

- **Problème :** causa di uno o più Incident ricorrenti, causa di un Incident potenziale (situazione a rischio).

- **Région :** désigne un insieme géographiquement délimité de zones de disponibilità cloud, fournendo des services de réseau, de calcul et de stockage pour optimiser la latence, la performance et la conformité réglementaire locale.

- **Service :** désigne le service IaaS qualifié SecNumCloud "Secure Temple", délivré au COMMITTENTE par la Prestataire de des infrastructures techniques mantenute dal Fornitore, così come descritta nella sezione "Descrizione del Service" della presente Convention de service.

- **Secure Temple :** désigne le service IaaS qualifié SecNumCloud, proposé par la société Cloud Temple, tel que défini dans l'attestation consultable sur le site de l'ANSSI et fournie en annexe de la présente Convention de service.

- **Sinistre :** désigne un événement grave d'origine naturelle ou humaine, accidentelle ou intentionnelle, occasionnant des pertes et des dommages importants à la Partie sinistrée.

- **Supervision :** Sorveglianza di un Sistema Informativo o di un Service, comprendente la raccolta di vari dati come misure e allarmi. Questa attività si limita all'osservazione e monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che appartiene alle operazioni di Amministrazione.

- **Tenant :** Un'istanza isolata riservata a un utente o gruppo di utenti, che condividono un'infrastruttura comune pur mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

- **Zone de Disponibilité (AZ) (Availibility zone) :** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei serviced alla distribuzione geografica delle risorse.

# 4. Acronymes

  | **Acronyme** | **Définition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comitato consultivo sui cambiamenti                             |
  | **CMDB**     | Configuration Management Database -- Database di gestione delle configurazioni           |
  | **COPIL**    | Comitato di pilotaggio                                                                   |
  | **COSTRAT**  | Comitato strategico                                                                      |
  | **COPROJ**   | Comitato Progetto                                                                        |
  | **DB**       | Database (base di dati)                                                                  |
  | **DRP**      | Disaster Recovery Plan (PRA) (Piano di ripristino dell'attività)                         |
  | **GTE**      | Garanzia di Tempo di Escalation                                                          |
  | **GTI**      | Garanzia di Tempo di Intervento                                                          |
  | **GTR**      | Garanzia di Tempo di Risoluzione                                                         |
  | **ITIL**     | Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI     |
  | **IaaS**     | Infrastructure as a Service                                                              |
  | **MCO**      | Mantenimento in condizione operativa                                                     |
  | **MOA**      | Committenza                                                                               |
  | **MOE**      | Esecutività                                                                              |
  | **MSP**      | Managed Services Provider                                                                |
  | **OS**       | Operating system (sistema operativo)                                                     |
  | **PAQ**      | Piano di Garanzia della Qualità                                                          |
  | **PaaS**     | Platform as a Service                                                                    |
  | **PAS**      | Piano di Garanzia della Sicurezza                                                        |
  | **PASSI**    | Prestataire d'Audit de Sécurité des Systèmes d'Information                               |
  | **RFC**      | Request For Change -- Richiesta di cambiamento                                           |
  | **RGPD**     | Regolamento generale sulla protezione dei dati (personali)                               |
  | **RPO**      | Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistre         |
  | **RTO**      | Recovery Time Objective -- Tempo di ripristino del service in caso di Sinistre           |
  | **SDM**      | Service Delivery Manager                                                                 |
  | **SLA**      | Service Level Agreement -- Accordo sui livelli di serviced                               |
  | **SNC**      | SecNumCloud                                                                              |
  | **SOC**      | Security Operation Center                                                                |
  | **TMA**      | Terza Manutenzione d'Applicazione                                                        |
  | **UO**       | Unità Operativa                                                                          |
  | **VABE**     | Validation d'Aptitude à la Bonne Exploitabilité                                          |
  | **VABF**     | Validation d'Aptitude au Bon Fonctionnement                                              |
  | **VM**       | Virtual Machine (Machine virtuelle)                                                      |
  | **VSR**      | Validation de Service Régulier                                                           |

# 5. Objet de la présente Convention de service

La présente Convention de service établit les termes et conditions selon lesquels le Fornitore s'engage à delivering il Service al COMMITTENTE. Son objet est di :

- Préciser les exigences de performance attendues par le COMMITTENTE en termes de fonctionnalité et de fiabilité du Service;

- Énoncer les obligations du Fornitore al fine di soddisfare i livelli di service concordati;

- Identificare le norme regolamentari applicabili specificamente al Service fornito;

- Garantire una uniformità e una integrità nella valutazione della qualità del Service;

- Garantire l'eccellenza dei serviced forniti, valutata mediante indicatori di performance quantitativi.

Ė stipulato che, nell'ipotesi in cui il Fornitore si vedesse ritirare la sua qualificazione SecNumCloud, il Contrato potrà essere rescisso di pien diritto, senza incorrere in penali, dal COMMITTENTE. In una tale eventualità, il Fornitore s'impegna a informare il COMMITTENTE di questa dequalificazione tramite l'invio di una notifica ufficiale, tramite lettera raccomandata con richiesta di avviso di ricevimento.
Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de
la qualification initiale.

# 6. Audit

Il Fornitore s'impegna a consentire al COMMITTENTE, o a qualsiasi revisore terzo e non concorrente del Fornitore che quest'ultimo avesse designato, di consultare tutti i documenti necessari per l'attestazione della piena conformità agli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione
di audit.

Accettando la presente Convenzione di Servizio, il COMMITTENTE conferisce il suo esplicito consenso a:

1. L'Agenzia Nazionale per la Sicurezza dei Sistemi Informatici (ANSSI) nonché all'ente di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al riferimento SecNumCloud.
2. Un fornitore di audit della sicurezza dei sistemi informatici, debitamente qualificato PASSI ed espressamente designato dal Fornitore, per condurre audit di sicurezza sul Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio offerto dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, le quali si allineano al
principio di responsabilità condivisa presentato nel riferimento SecNumCloud:

- La fornitura di risorse di calcolo (compute);

- La disponibilità di spazi di archiviazione;

- L'accesso a servizi di connettività di rete e internet;

- L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nell'ambito del Servizio è presentato in §7.1.

È inteso che il Fornitore utilizzerà la sua competenza per realizzare le prestazioni secondo le migliori pratiche professionali e
conformemente ai requisiti del riferimento SecNumCloud.

Il Servizio è qualificato SecNumCloud (vedi attestazione in Appendice).

## 7.2. Presentazione dettagliata dell'ambito del Servizio

| Compute               | Risorsa di calcolo del Tenant COMMITTENTE                                                                             |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Storage               | Dati di produzione del Tenant COMMITTENTE                                                                             |
| Archiviazione oggetti S3 | messa a disposizione di un'infrastruttura di archiviazione oggetti sovrana multi AZ e compatibile con le API S3 standard. |
| Backup                | Modulo di sottoscrizione al mass-storage adeguato                                                                      |
| Infrastruttura di rete| Risorsa di rete del Tenant COMMITTENTE                                                                                 |
| Console COMMITTENTE   | Il servizio che permette al COMMITTENTE di accedere al proprio servizio IaaS e di amministrarlo tramite l'interfaccia Shiva |
| Supporto              | Il servizio di supporto che accompagna i servizi precedenti e solo questi (*)                                          |

*(*) Nei limiti dell'ambito del Servizio qualificato SNC e delle responsabilità del Fornitore in materia*

### 7.2.1. Infrastrutture dei Datacenter

Il Servizio comprende la messa a disposizione, per ogni Zona di disponibilità, delle prestazioni qualificate di seguito:

- Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 dell'Uptime Institute;
- Disponibilità di sale tecniche all'interno di datacenter dedicati all'ospitare le attrezzature tecniche indispensabili per la produzione del servizio, incluse calcolo, archiviazione, rete, cablaggio e altri componenti necessari;
- Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, assicurando una continuità di servizio;
- Fornitura di servizi di climatizzazione, regolati per rispettare le norme e le raccomandazioni dei produttori di attrezzature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
- Supervisione continua e metrologia dettagliata, permettendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore assicura la messa a disposizione di servizi avanzati di rilevazione e spegnimento incendi, progettati per identificare e
neutralizzare efficacemente ogni principio d'incendio nelle strutture. Questi sistemi sono essenziali per garantire la sicurezza delle
attrezzature e dei dati. Comprendono rilevatori di fumo di alta precisione e dispositivi di spegnimento che possono agire rapidamente senza
danneggiare l'attrezzatura informatica. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e
assicurare la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e le misure di sicurezza messe in atto, inclusi i test annuali di trasferimento ai gruppi
elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare i
rischi di guasto e assicurare una reattività ottimale in caso di Incidente. Accettando queste condizioni, il cliente riconosce l'importanza di
queste misure e si impegna a collaborare pienamente per facilitare la loro implementazione. Il COMMITTENTE è inoltre incoraggiato a
prendere conoscenza delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria per l'utilizzo del Servizio. Si impegna inoltre a mantenere questa console di amministrazione e l'API in condizione operativa ottimale e a garantirne la sicurezza in modo continuo.
Questa console di amministrazione e l'API sono designate in modo collettivo con il termine "interfaccia COMMITTENTE".

Il Fornitore avverte il COMMITTENTE che un uso anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o al Servizio. È importante sottolineare che questa situazione non costituisce un'indisponibilità del Servizio, ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMITTENTE invia richieste identiche a una frequenza superiore, il loro rifiuto non può essere interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle attrezzature necessarie per
l'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Questo comprende:

- La fornitura dei chassis tecnici necessari al buon funzionamento delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e ripartite secondo le zone di disponibilità di sua scelta. È importante notare che queste lame di calcolo sono esclusivamente dedicate al COMMITTENTE;
- La messa a disposizione di sistemi operativi di tipo hypervisor, così come la garanzia del mantenimento in condizione operativa e di sicurezza dell'infrastruttura software necessaria alla gestione di questi sistemi operativi. È importante evidenziare che, anche se il Fornitore è responsabile della manutenzione operativa e della sicurezza complessiva del Servizio, non possiede conoscenze specifiche sugli ambienti di produzione del COMMITTENTE né sui requisiti legati ai suoi carichi di lavoro. Di conseguenza, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, un'azione che potrebbe richiedere un riavvio, ricade completamente sul COMMITTENTE. Questa operazione può essere effettuata tramite l'Interfaccia COMMITTENTE.

La scelta del modello di lama di calcolo, selezionato tra il catalogo proposto dal Fornitore, è di responsabilità del
COMMITTENTE.

### 7.2.4. Infrastruttura di archiviazione

Il servizio comprende la fornitura al COMMITTENTE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), che offre vari
livelli di prestazioni. Questo servizio comprende:

- L'implementazione e il mantenimento in condizioni operative e di sicurezza della rete SAN dedicata;
- L'installazione e la gestione delle baie di archiviazione condivise tra i clienti, compreso il loro mantenimento in condizioni operative e di sicurezza, la loro supervisione e metrologia;
- L'introduzione di sistemi automatizzati per l'allocazione delle LUN (Logical Unit Numbers) di archiviazione dedicati all'uso del COMMITTENTE, conformemente ai volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore implementa nell'ambito del Servizio, una rete globale che facilita al COMMITTENTE la messa in accessibilità dei suoi sistemi
ospitati. Questo servizio comprende:

- La fornitura, il mantenimento in condizioni operative e di sicurezza di tutte le connessioni in fibra ottica che interconnettono le diverse Zone di disponibilità;

- La fornitura, il mantenimento in condizioni operative e di sicurezza delle attrezzature tecniche necessarie al buon funzionamento della rete e all'isolamento dei diversi clienti.
L'interconnexion réseau del Tenant COMMANDITAIRE, a Internet o alle reti private, e le attrezzature di rete, i collegamenti degli operatori e altri componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete viene implementata conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMANDITAIRE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue macchine virtuali. Il Fornitore assicura il mantenimento in condizioni operative e di sicurezza di questo servizio di backup. Il Fornitore garantisce che i backup del COMMANDITAIRE saranno situati al di fuori della Zona di disponibilità dei carichi di lavoro salvati, sempre che il COMMANDITAIRE abbia sottoscritto le Unità di lavoro adeguate.

Questa prestazione di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS dei Tenants del COMMANDITAIRE nell'ambito del Servizio. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del COMMANDITAIRE dipendono dalla sottoscrizione a specifiche unità di lavoro. Pertanto, è compito del COMMANDITAIRE garantire la disponibilità delle risorse tecniche necessarie presso il Fornitore per attuare la propria politica di backup o adeguare quest'ultima in base ai mezzi disponibili.

Il Fornitore si impegna a notificare il COMMANDITAIRE in caso di vincoli di capacità e a fornire assistenza consulenziale per l'ottimizzazione delle risorse. Gli obblighi del Fornitore saranno limitati all’implementazione delle esigenze espresse dal COMMANDITAIRE in materia di politica di backup, nell'ambito delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripresa dell'attività o di continuità dell'attività

Il Fornitore fornisce al COMMANDITAIRE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso diverse Zone di disponibilità. È responsabilità del COMMANDITAIRE gestire efficacemente questa distribuzione di risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a tale scopo.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

- L'hosting di componenti fisici del COMMANDITAIRE;

- L'interconnessione di rete del Tenant COMMANDITAIRE, a Internet o a reti private, inclusi i collegamenti degli operatori;

- Ogni tipo di servizio gestito, o TMA;

- Qualsiasi tipo di assistenza sulle macchine virtuali a livello di sistema operativo e oltre nello stack di responsabilità IaaS, anche se si tratta di semplice supervisione.

Ciononostante, non è assolutamente escluso che il COMMANDITAIRE possa ricorrere a tali servizi nell'ambito dell'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenants. Questi servizi non saranno quindi regolati dalla presente Convenzione di servizio e dai suoi impegni/clausole bilaterali.

### 7.3.2. Configurazione del ripristino

Per impostazione predefinita, il Fornitore fornisce l'implementazione delle risorse IaaS al COMMANDITAIRE riservando delle risorse e configurando i deploy per utilizzare le Zone di disponibilità. È responsabilità del COMMANDITAIRE scegliere le Zone di disponibilità tramite l'interfaccia COMMANDITAIRE.

### 7.3.3. Configurazione del backup

La prestazione di backup si arresta al backup delle macchine virtuali e delle configurazioni di topologia che rappresentano l'ambiente IaaS dei Tenants del COMMANDITAIRE nell'ambito del Servizio.

La prestazione di backup e l'attuazione della politica di backup del COMMANDITAIRE è soggetta alla sottoscrizione di spazio di archiviazione nel mass storage necessario per garantire il servizio. Pertanto, è responsabilità del COMMANDITAIRE sottoscrivere presso il Fornitore i mezzi tecnici necessari per garantire la politica di backup sul suo perimetro informatico, oppure adeguare la politica di backup ai mezzi disponibili. Il Fornitore si impegna a informare il COMMANDITAIRE in caso di limite di capacità tecnica.

Il Fornitore metterà in atto i mezzi tecnici e umani necessari al backup del sistema ospitato entro i limiti delle risorse sottoscritte dal COMMANDITAIRE.

Inoltre, nel caso di perimetri non coperti dal Fornitore, spetta al COMMANDITAIRE definire la propria strategia di backup e configurare autonomamente i backup delle VM o effettuare una Richiesta di servizio presso il Fornitore affinché venga impostata la configurazione dei backup per i server fisici, se il COMMANDITAIRE dispone di un contratto di servizio gestito che consente al Fornitore di agire tramite l'interfaccia COMMANDITAIRE, che è la console di amministrazione messa a disposizione nell'ambito della presente Convenzione di servizio e che dispone di funzionalità per configurare i backup.

Inoltre, questo servizio avrà l'unico impegno di tradurre tramite la configurazione tramite l'interfaccia COMMANDITAIRE, la configurazione specificata chiaramente dal COMMANDITAIRE.

Per ragioni di flessibilità dell'offerta del Fornitore, il COMMANDITAIRE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In tal caso, spetta al COMMANDITAIRE assumersi questa scelta. Il Fornitore non eseguirà il backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMANDITAIRE che scegliere la politica "no backup" o scegliere di eseguire il backup manualmente espone il COMMANDITAIRE a una perdita definitiva dei dati in caso di Incidente sui livelli bassi o sui livelli dipendenti dalla sua responsabilità nel modello IaaS. In tal caso, sarà impossibile ritenere il Fornitore responsabile del recupero dei dati poiché non ci sarà nulla da recuperare. Il Fornitore raccomanda di eseguire sempre il backup delle VM.

Per qualsiasi questione riguardante il sistema operativo installato su una macchina virtuale e qualsiasi software o programma eseguito "al di sopra del sistema operativo", è responsabilità del COMMANDITAIRE eseguire le operazioni di amministrazione e supervisione all'interno dell'Unione Europea se desidera garantire che tutta la verticalità dei livelli del sistema informativo siano operati e gestiti dall'interno dell'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nell'ambito della presente Convenzione di servizio sono indicate nella sezione "Modello di responsabilità condivise" della presente Convenzione di servizio.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l'implementazione del Servizio, il COMMANDITAIRE riconosce che dovrà:

- Funzionare con una virtualizzazione di tipo VMware nelle versioni supportate dall'editore e fornite dal Fornitore nell'ambito del Servizio;

- Ricorrere tramite il Fornitore all'utilizzo dello strumento di backup;

- Dichiarare degli IP fissi da cui il Fornitore gli consentirà di accedere all'interfaccia COMMANDITAIRE (filtraggio tramite lista bianca). Le modifiche a questa lista di IP dovranno essere effettuate tramite Richieste di servizio (lista non gestibile dall'interfaccia di amministrazione del Servizio).

## 7.5. Localizzazione del servizio in Francia

Si specifica che nessuna delle operazioni e nessuno dei componenti fisici coinvolti nella fornitura del Servizio, oggetto della presente Convenzione di servizio, è situato al di fuori dell'Unione Europea.

Questo include in particolare il supporto, la supervisione operativa e la supervisione della sicurezza (SOC) dell'infrastruttura tecnica che fornisce il Servizio. Di fatto, tutto lo storage, tutte le operazioni di amministrazione, di supervisione e tutti i trattamenti sono effettuati in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

Ad eccezione delle operazioni del personale e delle agenzie del Fornitore, tutte le operazioni di produzione (inclusi lo storage e il trattamento dei dati) e i componenti tecnici che forniscono il Servizio sono situati nei Datacenter basati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio

Il personale di Cloud Temple che interviene sul perimetro del Servizio opera dalle agenzie di Cloud Temple tutte situate esclusivamente in Francia. Queste agenzie si trovano in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMANDITAIRE è informato della possibilità per i dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza riguardo gli accessi a distanza, in particolare per quanto riguarda gli accessi VPN. Questi accessi remoti sono implementati conformemente ai requisiti del framework SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto a corredo del servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere il COMMANDITAIRE nella gestione, nella risoluzione dei problemi e nell'ottimizzazione delle risorse distribuite. Questo servizio copre una gamma estesa di attività, dall'assistenza nella configurazione iniziale dei servizi fino al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e delle funzionalità del servizio di supporto:

- Assistenza nell'implementazione iniziale dell'utilizzo del Servizio;
- Assistenza nella risoluzione degli incidenti;
- Assistenza nella risoluzione dei problemi;
- Monitoraggio e consulenza sull'ottimizzazione della base tecnica.
Dans il contesto del servizio di supporto, il Fornitore non sostituisce il COMMITTENTE nell’uso del Servizio. Il COMMITTENTE rimane completamente responsabile della configurazione, dello sfruttamento delle sue VM e dei suoi Tenant, e della gestione di tutti gli elementi (inclusi dati e applicazioni) che ha archiviato o installato sulle infrastrutture del Fornitore. Il servizio di supporto tecnico è fornito in conformità con le Condizioni Generali di Vendita e Utilizzo, il Fornitore essendo tenuto a un obbligo di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti con il Fornitore e dal far intervenire le squadre del Fornitore presso i suoi clienti o terzi non inclusi nel Contratto. Il Fornitore si riserva il diritto di rifiutare qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità operative di supporto associate.

### 7.6.2. Risoluzione del servizio di supporto tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket attraverso la console COMMITTENTE ed è disponibile durante le ore lavorative normali, esclusi i giorni festivi (8h - 18h; Lunedì -- Venerdì; calendario e orari francesi). Per le emergenze al di fuori degli orari lavorativi, in particolare per gli incidenti che incidono significativamente sulla produzione, è possibile contattare il servizio di reperibilità tramite un numero comunicato al COMMITTENTE all'inizio del Servizio.

Per ogni richiesta o Incident, è imperativo creare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprensiva di tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli obblighi del Fornitore.

Appena il Fornitore riceve una richiesta o una notifica di Incident, tramite la console di gestione o in seguito a una chiamata telefonica, viene automaticamente creato un ticket. Durante la dichiarazione di un Incident, è essenziale che il COMMITTENTE fornisca al Fornitore il massimo dei dettagli sul problema riscontrato. Questo approccio è cruciale per consentire una valutazione adeguata della situazione, la sua priorizzazione e una diagnosi efficace.

Il Cliente riceve quindi una conferma via e-mail, che indica la creazione del ticket e il suo numero unico. Il COMMITTENTE può consultare lo stato e la cronologia delle sue richieste e dichiarazioni di Incident direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incident

Durante una dichiarazione di un Incident, il team di supporto tecnico del Fornitore avvia un'inchiesta per identificare la causa del problema e stabilire una diagnosi. Il Cliente deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie ed eseguendo i test richiesti. Il Fornitore può accedere al Servizio del Cliente per diagnosticare l'Incident.

Se i Servizi del Fornitore sono giudicati funzionali e l'Incident non è imputabile, il Cliente sarà informato. Su richiesta del Cliente, il Fornitore può proporre Servizi Professionali per identificare l'origine del problema, fatturabili previo accordo per tranche di 30 minuti.

Nel caso in cui l'Incident sia di responsabilità del Fornitore o di uno dei suoi subfornitori, questo completa la diagnosi e si dedica al ripristino del Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e sui dati del Fornitore, questi elementi essendo considerati come probanti per accordo delle Parti.

### 7.6.4. Processo di prioritizzazione dei trattamenti

La determinazione del livello di priorità di un caso si basa su un'analisi matriciale che valuta l'impatto dell'Incident e il suo grado di criticità:

- I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Impatto I1         | Il o i servizi del Fornitore sono interrotti                                                                          |
| Impatto I2         | Il o i servizi del Fornitore sono degradati                                                                           |
| Impatto I3         | Il o i servizi del Fornitore sono attualmente stabili, ma mostrano segni di potenziale declino a lungo termine        |

- I livelli di Criticità sono definiti come segue:

| Livello di criticità | Descrizione                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Criticità C1         | Il o i servizi del Fornitore si degradano a una velocità preoccupante                                                                                      |
| Criticità C2         | Il o i servizi del Fornitore si deteriorano progressivamente nel tempo                                                                                    |
| Criticità C3         | Il o i servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative                                                            |

- Sulla base di un'analisi approfondita della situazione, tenendo conto degli elementi che determinano l'Impatto e la Criticità, una priorità è assegnata al ticket in conformità alla matrice di decisione qui sotto:

| Livello di impatto <br/> \ Livello di criticità | Impatto I1       | Impatto I2       | Impatto I3       |
| ---------------------------------------------- | --------------- | --------------- | --------------- |
| Criticità C1                                   | Priorità **P1** | Priorità **P2** | Priorità **P3** |
| Criticità C2                                   | Priorità **P2** | Priorità **P3** | Priorità **P4** |
| Criticità C3                                   | Priorità **P3** | Priorità **P4** | Priorità **P5** |

Gli impegni di livello di servizio corrispondenti a ciascun livello di priorità sono dettagliati nel capitolo successivo.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in lingua francese. Il supporto può essere fornito anche in lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di servizio infrastrutturale qualificata SecNumCloud sono situate nell'Unione Europea.

# 8. Impegni e livelli di servizio

Il Fornitore si impegna a garantire un monitoraggio continuato delle prestazioni e dell'integrità sicura della sua infrastruttura tecnica che eroga il Servizio, assicurandone il funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di prestazione, è riconosciuta appena individuata dal sistema di supervisione del Fornitore, o in seguito a una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, al fine di garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente marcata dal ripristino completo del servizio, confermato sia dagli strumenti di supervisione del Fornitore, sia dal feedback dell’utente, assicurando così una ripresa effettiva delle operazioni e una misura fedele della durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura

Il Fornitore si impegna a mantenere un livello di disponibilità e prestazione conforme agli standard definiti per ciascun periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLA) si applicano a condizione che il COMMITTENTE implementi i suoi sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza di rispetto di queste condizioni da parte del COMMITTENTE,
questo sarà impossibilitato a rivendicare l'applicazione degli SLA interessati, i quali sono specificamente identificati da un asterisco (\*). L'accessibilità agli SLA avviene tramite l'interfaccia COMMITTENTE. Le misure sono calcolate mensilmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilità della potenza di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 3     : IC-INFRA_SNC-03** – Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 5     : IC-INFRA_SNC-05** – Accesso Internet: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.

***Osservazioni*** :

- *In risposta a un attacco tramite Distributed Denial-of-Service (DDoS), il Fornitore si riserva il diritto di adeguare la propria configurazione di routing per limitare l'impatto di questo attacco e proteggere la sua infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE è mirato, il Fornitore può ricorrere alla tecnica di blackholing tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP bersagliato a monte presso i suoi fornitori, al fine di proteggere le risorse del COMMITTENTE nonché quelle di altri COMMITTENTE e l'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il COMMITTENTE ad adottare misure simili, come l'uso di software di firewall applicativi disponibili sul mercato, e a configurare accuratamente i propri gruppi di sicurezza tramite l'API di comando.*
- *Il Fornitore insiste sulla necessità per il COMMITTENTE di minimizzare le aperture dei flussi, evitando in particolare di rendere accessibili le porte di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) da tutta Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE

- SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, garantita continuativamente, 24 ore su 24 e 7 giorni su 7.
- SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del servizio: una disponibilità del 99.9%, calcolata su base 24h/24, 7g/7.

## 8.3. Impegno di disponibilità del supporto

- **SLA 8      : IC-INFRA_SNC-08** – Ecco gli impegni di performance del supporto tecnico del Fornitore per gli incidenti, escluse le manutenzioni pianificate:

| Priorità        | Garanzia di tempo di intervento (GTI)  | Obiettivo di performance |
| --------------- | -------------------------------------- | ------------------------ |
| Priorità **P1** | 30mn                                   | 95%                      |
| Priorità **P2** | 2h                                     | 90%                      |
| Priorità **P3** | 4h                                     | 90%                      |
| Priorità **P4** | 24h                                    | 85%                      |
| Priorità **P5** | 48h                                    | 85%                      |

- **SLA 9      : IC-INFRA_SNC-09** – Ecco gli impegni di performance del supporto tecnico del Fornitore per le richieste di servizio:

|                     | Garanzia di tempo di intervento (GTI) | Obiettivo di performance |
| ------------------  | -------------------------------------- | ------------------------ |
| Richiesta di servizio| 4h                                    | 90%                      |

*Nota:*

- *Il tempo per la Garanzia di Tempo di Intervento (GTI) è calcolato a partire dalla differenza tra il momento in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
- *L'investigazione degli incidenti riguardanti i COMMITTENTI non includerà interventi remoti sui server ospitati del COMMITTENTE. Questa assistenza si limiterà alla spiegazione delle metriche disponibili relative all'ambiente del COMMITTENTE, per facilitare la comprensione degli incidenti o dei problemi di performance riscontrati. Sulla base dei risultati di questa analisi, potranno essere suggerite raccomandazioni.*

## 8.4. Impegno di disponibilità dello storage oggetti S3

- **SLA 10      : IC-INFRA_SNC-10** – Ecco gli impegni di disponibilità per lo storage oggetti S3:

| Indicatore       | Impegno                                           | Obiettivo di disponibilità |
| ---------------- | ------------------------------------------------- | -------------------------- |
| IC-INFRA-SNC-10.1| Durabilità dello storage di un oggetto su una regione | 99.9999999% / anno     |
| IC-INFRA-SNC-10.2| Disponibilità dell'API Storage Oggetti S3         | 99.99%                   |
| IC-INFRA-SNC-10.3| Latenza massima di accesso a un oggetto su una regione | 150 ms                 |

Note:

- Il Servizio di Storage Oggetti è specificamente progettato per lo storage di oggetti e deve essere impiegato solo a questo scopo, **escludendo categoricamente il suo utilizzo in modalità blocco**. Utilizzare la modalità blocco attraverso metodi alternativi, inclusi l'uso di *"FUSE" in un ambiente Linux*, costituisce una violazione dei termini d'uso specificati. Nessun incidente, malfunzionamento o danno derivante da questo uso non conforme sarà coperto dagli Accordi di Livello di Servizio (SLA) definiti in questo accordo di servizio.
- La garanzia di durabilità è condizionata da un utilizzo dei servizi conforme alle migliori pratiche e standard attuali, ed esclude esplicitamente qualsiasi modifica dei dati, sia intenzionale che accidentale, risultante da azioni intraprese dal COMMITTENTE.

## 8.5. Precisazione riguardante l'impegno di backup

La strategia di backup implementata per il COMMITTENTE è condizionata dalla sottoscrizione delle unità di lavoro adeguate.

Il Fornitore si impegna a mettere a disposizione una soluzione di backup che permetterà al COMMITTENTE di applicare le politiche di backup desiderate.

Si precisa che il perimetro del Fornitore si arresta alla messa a disposizione di un servizio di backup ed è compito del COMMITTENTE supervisionare tramite l'interfaccia COMMITTENTE la corretta esecuzione delle politiche associate.

Si precisa che la gestione delle capacità di storage dello spazio di storage dedicato ai backup, resta a carico e responsabilità del COMMITTENTE. Il Fornitore mette a disposizione il tasso di utilizzo tramite la console.

*Esempio: Non backup di una macchina virtuale:*

*È compito del COMMITTENTE verificare / supervisionare la corretta esecuzione delle politiche di backup, nel caso in cui il COMMITTENTE riscontri che una macchina virtuale non è stata salvata, spetta a lui verificare la causa. Il COMMITTENTE potrà richiedere il supporto del Fornitore secondo il livello di supporto sottoscritto per ottenere assistenza.*

**L'SLA 8 : IC-INFRA_SNC-08 e SLA 9**, sarà applicabile esclusivamente in caso di un incidente del servizio di backup.

# 9. Organizzazione della relazione contrattuale

## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna:

- a informare il suo COMMITTENTE in modo adeguato (ad esempio in caso di limite di capacità delle risorse tecniche che erogano il Servizio).

- a informare formalmente il COMMITTENTE e entro un mese, di qualsiasi cambiamento giuridico, organizzativo o tecnico che possa avere un impatto sulla conformità del Servizio ai requisiti di protezione contro le leggi extra-europee (19.6 del riferimento SNC v3.2).

- a fornire al COMMITTENTE delle interfacce e delle interfacce di servizio che siano almeno in lingua francese.

- a studiare e prendere in considerazione i requisiti settoriali specifici legati ai tipi di informazioni affidate dal COMMITTENTE nel contesto dell'implementazione del servizio e nei limiti delle responsabilità del Fornitore.

- a non divulgare alcuna informazione relativa alla prestazione a terzi, salvo autorizzazione formale e scritta del COMMITTENTE.

- a mettere a disposizione tutte le informazioni necessarie per la realizzazione di audit di conformità secondo le disposizioni dell'articolo 28 del GDPR.

- a comunicare al COMMITTENTE, tramite il presente Contratto di servizio, qualsiasi incidente di sicurezza che impatti il Servizio o l'uso fatto dal COMMITTENTE del Servizio (inclusi i dati del COMMITTENTE).

- ad autorizzare un revisore della sicurezza dei sistemi informativi (PASSI) qualificato, incaricato dal Fornitore, ad auditare il servizio così come il suo sistema informativo, in conformità al piano di controllo del SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per svolgere gli audit di conformità alle disposizioni dell'articolo 28 del GDPR, condotti dal COMMITTENTE o da un terzo incaricato.

- a fornire, in qualità di responsabile del trattamento, conformemente all'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), assistenza e consulenza al COMMITTENTE avvisandolo nel caso in cui un'istruzione emessa da quest'ultimo possa costituire una violazione delle norme di protezione dei dati.

- a notificare per iscritto, quando un progetto impatti o potrebbe impattare il livello di sicurezza del Servizio, il COMMITTENTE degli eventuali impatti, delle misure di mitigazione implementate, così come dei rischi residui che lo riguardano.

- a documentare e implementare tutte le procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali applicabili al servizio, così come le esigenze di sicurezza specifiche del COMMITTENTE, definite da quest'ultimo e previste nel Contratto. Su richiesta del COMMITTENTE, il modulo Documentazione dell'interfaccia COMMITTENTE permetterà una condivisione sicura di questi documenti.

- a fornire, su richiesta del COMMITTENTE, gli elementi di valutazione dei rischi relativi alla sottomissione dei dati del COMMITTENTE alla legge di uno stato non membro dell'Unione Europea.

Su richiesta formale e scritta del COMMITTENTE, il Fornitore si impegna a:

1. Rendere accessibile al COMMITTENTE il regolamento interno e la carta etica del Fornitore;

2. Rendere accessibile al COMMITTENTE le sanzioni previste in caso di violazione della politica di sicurezza;

3. Fornire al COMMITTENTE tutti gli eventi che lo riguardano negli elementi di registrazione del Servizio;

4. Alla fine del Contratto, il Fornitore si impegna a eliminare i dati e i Dati tecnici relativi al COMMITTENTE, secondo la "procedura di cancellazione dei dati alla fine del contratto" descritta nel presente Contratto di servizio.

5. Assicurare una cancellazione sicura di tutti i dati del COMMITTENTE tramite riscrittura completa di ogni supporto che abbia ospitato i suoi dati nel contesto del Servizio.

6. Fornire l'elenco completo dei terzi autorizzati ad accedere alle infrastrutture contenenti i dati.
Il Fornitore manterrà aggiornato e metterà a disposizione del COMMITTENTE l'elenco esaustivo dei terzi autorizzati ad accedere alle infrastrutture che trattano i dati, informando il COMMITTENTE di qualsiasi cambiamento relativo ai subappaltatori. Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, ovvero la dignità umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto, nonché il rispetto dei Diritti umani. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell'Unione Europea relativi al rispetto della dignità umana, alla libertà, all'uguaglianza, alla democrazia e allo Stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore

A causa di tutte le definizioni e condizioni menzionate nella presente Convenzione del servizio, le responsabilità del Fornitore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione «Modello di responsabilità condivise» della presente Convenzione di servizio, limita di fatto il coinvolgimento del Fornitore negli strati di funzionamento che vanno "al di sopra" della messa a disposizione di risorse di calcolo, rete, archiviazione e backup. Questo esclude in particolare, senza limitazione:

    - La gestione di ciò che è installato sulle macchine virtuali (sistemi operativi, middleware, applicazioni, ecc.);

    - L'aggiornamento dei sistemi operativi e altri software installati dal COMMITTENTE sulle sue macchine nei suoi Tenant;

    - La sicurezza dei programmi, software e applicazioni installati sulle macchine virtuali;

    - L'aggiornamento delle macchine virtuali;
  
    - Il backup dei dati a livello applicativo.

2. Il Fornitore non può prendere impegni di backup per i Tenant del COMMITTENTE senza che il COMMITTENTE abbia precedentemente sottoscritto alle unità di opera adeguate.

3. Il Fornitore non può vantarsi della proprietà dei dati trasmessi e generati dal COMMITTENTE. Infatti, questi rientrano nella proprietà del COMMITTENTE.

4. Il Fornitore sottolinea che non può in alcun caso sfruttare i dati trasmessi e generati dal COMMITTENTE senza la preventiva convalida di quest'ultimo.

5. Il Fornitore declina ogni responsabilità sui componenti fisicamente ospitati e gestiti dal Fornitore, ma che sono di proprietà diretta del COMMITTENTE o di un terzo con cui il COMMITTENTE ha contrattualizzato. L'hosting di componenti fisici dei clienti non fa parte del Servizio ed è, di fatto, fuori dall'ambito della presente Convenzione di servizio. È responsabilità del COMMITTENTE valutare il livello di aderenza o dipendenza che questi componenti introducono nei confronti del Servizio IaaS qualificato SecNumCloud.

## 9.3. Limitazione di accesso

Nell'ambito del Servizio, il Fornitore è formalmente vietato di accedere ai Tenant appartenenti al COMMITTENTE senza autorizzazione preventiva. È responsabilità del COMMITTENTE fornire gli accessi necessari al personale del Fornitore, secondo le specifiche esigenze di hosting e, se applicabile, dei servizi professionali di supporto, se questa opzione è stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla prestazione di servizi concordati, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del servizio del Fornitore è strettamente vietato. Nel caso in cui una specifica esigenza tecnica richiedesse tale accesso, questo potrebbe essere stabilito solo dopo aver chiaramente notificato il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurandosi che qualsiasi eccezione alla regola sia debitamente autorizzata e documentata.

## 9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio Secure Temple

Il Fornitore gestisce l'elenco dei partner terzi partecipanti alla fornitura del Servizio. Questi terzi sono gli editori, fornitori (del Fornitore) e altri fornitori partecipanti alla fornitura del Servizio. Il Fornitore applica le seguenti misure a questi terzi:

- Il Fornitore richiede ai terzi partecipanti all'implementazione del servizio, nella loro contribuzione al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

- Il Fornitore stipula, con ciascuno dei terzi partecipanti all'implementazione del servizio, clausole di audit che permettono a un organismo di qualificazione di verificare che questi terzi rispettino i requisiti legali e i requisiti SNC, permettendo al Fornitore di rispettare i propri impegni nella presente Convenzione di servizio.

- Il Fornitore implementa una procedura che consente di controllare regolarmente le misure messe in atto dai terzi partecipanti all'implementazione del servizio per rispettare i requisiti al Fornitore di rispettare i propri impegni nella presente Convenzione di servizio.

- Il Fornitore implementa una procedura di monitoraggio delle modifiche apportate dai terzi partecipanti all'implementazione del servizio che potrebbero influenzare il livello di sicurezza del sistema informativo del servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

Per promemoria, il Fornitore fornisce al COMMITTENTE una piattaforma di esecuzione di macchine virtuali, la cui configurazione è a carico del COMMITTENTE. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Fornitore definisce tramite le sue interfacce delle politiche di backup automatiche. Tuttavia, è a carico del COMMITTENTE l'attivazione di queste politiche di backup e quindi l'attivazione delle macchine virtuali.

Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione SNC ad auditare il Servizio e l'infrastruttura tecnica che eroga il Servizio.

## 9.6. Diritti del COMMITTENTE

In qualsiasi momento durante il rapporto contrattuale, il COMMITTENTE può presentare un reclamo relativo al servizio qualificato presso l'ANSSI.

In qualsiasi momento, il COMMITTENTE può chiedere al Fornitore di rendere accessibile il suo regolamento interno e la sua carta etica.

## 9.7. Cancellazione dei dati alla fine del Contratto

Alla fine del contratto, sia che giunga a scadenza sia che venga risolto per qualsiasi motivo, il Fornitore si impegna a procedere alla cancellazione sicura di tutti i dati del COMMITTENTE, inclusi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un preavviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno quindi eliminati entro un termine massimo di trenta (30) giorni successivi a tale notifica.

Per attestare questa cancellazione, il Fornitore consegnerà al COMMITTENTE un certificato che conferma la cancellazione dei dati.

# 10. Ciclo di vita della presente Convenzione di servizio

## 10.1. Entrata in vigore della Convenzione di servizio

La presente Convenzione di servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, l'archiviazione e il trattamento dei dati effettuati nell'ambito della prevendita, dell'implementazione, dell'interruzione del Servizio, sono effettuati nel rispetto della legislazione vigente.

## 10.2. Evoluzioni della Convenzione di servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tal fine. Queste proposte di cambiamento saranno esaminate dalle Parti, abilitate a determinare gli aspetti che necessitano una formalizzazione scritta.

Si conviene che qualsiasi evoluzione della Convenzione di servizio, dopo convalida, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la redazione e la firma di un'addenda al Contratto in corso.

I fattori che possono indurre una revisione della presente Convenzione di servizio includono, senza limitazione:

- L'evoluzione dell'infrastruttura tecnica che eroga il Servizio IaaS;
- Gli aggiustamenti apportati ai servizi dispiegati dal Fornitore per fornire il Servizio;
- Le variazioni degli impegni presi e delle sanzioni applicabili;
- Le riconfigurazioni organizzative all'interno del COMMITTENTE o del Fornitore;
- L'espansione o la riduzione dell'ambito di applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è registrata nel preambolo del documento per facilitarne il monitoraggio.

### 10.2.1. Evoluzioni innescate dal COMMITTENTE

Le evoluzioni della Convenzione di servizio possono avere, in particolare, origine da:

- Un'evoluzione dell'infrastruttura gestita dal Fornitore;

- Una modifica dei servizi implementati dal Fornitore;

- Una modifica degli impegni di livelli di servizio da parte del Fornitore.

### 10.2.2. Evoluzioni innescate dal Fornitore

Qualsiasi modifica della Convenzione di servizio è soggetta all'accettazione del COMMITTENTE. Si intende che qualsiasi modifica o integrazione validata che modifichi gli elementi finanziari del Contratto, potrebbe comportare la firma di un'addenda allo stesso.

## 10.3. Reversibilità

Inoltre, Cloud Temple si impegna a permettere una revisione della presente Convenzione di servizio (prevedendo, tra l'altro, la sua risoluzione) senza penali per il COMMITTENTE in caso di perdita della qualificazione SecNumCloud.
I Servizi non comprendono obblighi di reversibilità (ossia, l'assistenza al Cliente per migrare il suo sistema verso un altro fornitore) ad eccezione della messa a disposizione del CLIENTE da parte del Fornitore dell'interfaccia CLIENTE, permettendo al CLIENTE di salvare e recuperare i propri dati, inclusi in particolare i dati di configurazione del loro sistema informativo tramite una delle seguenti modalità tecniche a scelta del CLIENTE: la messa a disposizione di file secondo uno o più formati documentati e utilizzabili al di fuori del servizio fornito dal Fornitore oppure tramite l'implementazione di interfacce tecniche che permettano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il CLIENTE, unico responsabile del proprio sistema, deve fare tutto il possibile per facilitare questa operazione all'occorrenza (il che implica, in particolare, che metta in atto una documentazione rigorosa a tal fine) e l'elaborazione di piani di reversibilità. Qualora il CLIENTE necessiti di un servizio aggiuntivo, il Fornitore può offrire una consulenza a tal riguardo nel contesto di un contratto specifico da negoziare.

# 11. Disponibilità, continuità e ripristino del servizio

## 11.1. Gestione degli Incidenti e delle interruzioni

### 11.1.1. Incidenti

#### 11.1.1.1. Tipi di incidenti trattati nel contesto di questa Convenzione di servizio

- Sinistri

- Guasti e malfunzionamenti

- Incidenti di sicurezza:

- Inficiano la disponibilità del servizio

- Inficiano la riservatezza del servizio

- Inficiano l'integrità del servizio

#### 11.1.1.2. Trattamento degli incidenti

- Tempi

- Azioni successive

- Archiviare i documenti che dettagliavano gli incidenti di sicurezza.

- Notifica della violazione di dati personali [online](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Livello di notifica degli incidenti di sicurezza

Il CLIENTE ha la responsabilità di scegliere i livelli di gravità degli incidenti di sicurezza per i quali desidera essere informato, ad esempio tramite la formalizzazione in un PSA applicabile al Servizio.

Per impostazione predefinita, il CLIENTE è informato:

- Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo la scala di impatto definita nel processo di prioritizzazione dei trattamenti della presente Convenzione di servizio);

- Delle violazioni di dati personali per i quali il CLIENTE è responsabile del trattamento;

- Delle violazioni di dati personali per i quali il Fornitore è responsabile del trattamento e contenenti dati personali del CLIENTE.

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

La manutenzione fornita consiste nell'implementazione:

- Del piano di mantenimento in condizioni operative del Servizio per garantire buoni indicatori di disponibilità come garantito dal Fornitore sopra;

- Del piano di PCA/PRA se sottoscritto dal CLIENTE attivato in base agli eventuali incidenti che si verificano.

### 11.2.2. Accessi remoti di Cloud Temple sul perimetro del CLIENTE

Il Fornitore si impegna, nel contesto della presente Convenzione di servizio, a non accedere ai Tenant e allo spazio dell'interfaccia del CLIENTE.

Sarà responsabilità del CLIENTE fornire gli accessi necessari al personale del Fornitore. Il CLIENTE riconosce che gli accessi saranno utilizzati nel contesto dell'hosting e infine della gestione (se sottoscritta dal CLIENTE).

### 11.2.3. Accessi remoti di terzi che partecipano alla fornitura del servizio sul perimetro del CLIENTE

Nessun accesso remoto da parte di terzi che partecipano alla fornitura del Servizio è autorizzato.

Qualora una necessità tecnica renda questo caso di figura necessario, tale tipo di accesso sarà eseguito solo dopo notifica del CLIENTE giustificazione e ottenimento del suo consenso scritto.

# 12. Procedura di cancellazione dei dati alla fine del Contratto

Alla fine del Contratto, sia che il Contratto sia scaduto o per qualsiasi altra ragione, il Fornitore garantirà la cancellazione sicura di tutti i dati trattati nel contesto del Servizio, inclusi i Dati tecnici del CLIENTE. Il Fornitore darà un preavviso formale rispettando un periodo di ventuno (21) giorni di calendario. I dati del CLIENTE saranno cancellati entro un massimo di trenta (30) giorni dalla notifica. Il Fornitore fornirà un certificato di cancellazione dei dati al CLIENTE.

# 13. Diritto applicabile

## 13.1. In generale

Il diritto applicabile e al quale è soggetta la presente Convenzione di servizio è il diritto francese.

## 13.2. Rispetto della legge e delle normative applicabili

Il Fornitore si impegna per i seguenti punti:

- L'identificazione delle limitazioni legali e regolamentari applicabili nel contesto del Servizio;

- Il rispetto delle limitazioni legali e regolamentari applicabili ai dati affidati al Fornitore;

- Il rispetto della Legge Informatica e Libertà e del GDPR;

- L'implementazione di misure di protezione dei dati personali;

- L'implementazione di un processo di monitoraggio legale e regolamentare;

- Disporre e mantenere relazioni appropriate o un monitoraggio con le autorità settoriali pertinenti alla natura dei dati trattati nel contesto del Servizio. Ciò include in particolare l'ANSSI, il CERT-FR e la CNIL.

## 13.3. GDPR

Agendo come sub-responsabile ai sensi dell'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), il Fornitore si impegna:

- A garantire trasparenza e tracciabilità;

- A designare un DPO incaricato di definire e implementare le misure di protezione dei dati personali;

- Fornire assistenza e consulenza al CLIENTE avvisandolo se un'istruzione di quest'ultimo costituisce una violazione delle norme sulla protezione dei dati personali se il Fornitore ha i mezzi per identificarlo;

- Una garanzia di sicurezza sui dati trattati (grazie alla qualificazione SecNumCloud).

## 13.4. Protezione rispetto al diritto extra-europeo

Nel caso in cui il Fornitore, nel contesto del Servizio, si avvalga di una società terza - inclusi subappaltatori - con sede legale, amministrazione centrale o principale stabilimento in uno Stato non membro dell'Unione Europea o appartenente o controllata da una società terza domiciliata al di fuori dell'Unione Europea, il Fornitore si impegna affinché tale suddetta società terza non abbia accesso ai dati operati dal servizio 'Secure Temple'.

Per ricordare, i dati interessati sono quelli affidati al Fornitore dal CLIENTE nonché tutti i Dati tecnici comprendenti informazioni sui CLIENTI.

Ai fini del presente articolo, la nozione di controllo è intesa come menzionata al II dell'articolo L233-3 del codice del commercio.

# 14. FIRME

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, il FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il CLIENTE