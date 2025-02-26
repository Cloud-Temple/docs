---
title: Convenzione di Servizio IaaS
---

![Logo Cloud Temple](images/ct.png)

# 1. **CONVENZIONE DI SERVIZI IaaS**

| **Destinatari :**                     | **COMMITTENTE**                                 |
| :------------------------------------ | :---------------------------------------------- |
| **Riferimento del documento**         | CT.AM.JUR.ANX_Convention de Services_IaaS_v2.0  |
| **I vostri interlocutori**            | *Nome* *Cognome*                                |
|                                       | Account Manager                                 |
|                                       | e-mail: *nome.cognome*@cloud-temple.com         |
| **Data dell'ultimo aggiornamento**    | 03/04/2024                                      |
| **Data di validazione contrattuale**  | Giorno GG AAAA                                  |


----------------------------------------------------------------------------------

| **Versione** | **Data**   | **Azione**                              | **Autore**      |
| ------------ | ---------- | --------------------------------------- | --------------- |
| v0.1         | 07/06/2022 | Redazione iniziale                      | Lorena ALCALDE  |
| v0.2         | 14/09/2022 | Arricchimento                           | Lorena ALCALDE  |
| v1.0         | 30/12/2022 | Integrazione Indicatori                 | Lorena ALCALDE  |
| v1.1         | 23/01/2023 | Modifica a piè di pagina                | Lorena ALCALDE  |
| v1.2         | 22/05/2023 | Arricchimento                           | Lorena ALCALDE  |
| v1.3         | 29/06/2023 | Arricchimento                           | Lorena ALCALDE  |
| v1.4         | 06/11/2023 | Modificazione Capitale e Arricchimento  | Lorena ALCALDE  |
| v1.5         | 30/11/2023 | Arricchimento                           | Lorena ALCALDE  |
| v1.6         | 21/03/2024 | Arricchimento                           | Lorena ALCALDE  |
| v2.0         | 29/03/2024 | Regolazioni conformità SNC              | Nicolas ABRIOUX |
| v2.0         | 03/04/2024 | Pubblicazione                           | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **INDICE**


- [1. **CONVENZIONE DI SERVIZI IaaS**](#1-convenzione-di-servizi-iaas)
- [2. **INDICE**](#2-indice)
- [3. Preliminari e Glossario](#3-preliminari-e-glossario)
  - [3.1. Preliminari](#31-preliminari)
  - [3.2. Glossario](#32-glossario)
- [4. Acronimi](#4-acronimi)
- [5. Oggetto della presente Convenzione di servizio](#5-oggetto-della-presente-convenzione-di-servizio)
- [6. Audit](#6-audit)
- [7. Descrizione del Servizio](#7-descrizione-del-servizio)
  - [7.1. Modello di responsabilità condivisa](#71-modello-di-responsabilità-condivisa)
  - [7.2. Presentazione dettagliata del perimetro del Servizio](#72-presentazione-dettagliata-del-perimetro-del-servizio)
    - [7.2.1. Infrastrutture Datacenter](#721-infrastrutture-datacenter)
    - [7.2.2. Infrastruttura software di pilotaggio del Servizio](#722-infrastruttura-software-di-pilotaggio-del-servizio)
    - [7.2.3. Infrastrutture di calcolo](#723-infrastrutture-di-calcolo)
    - [7.2.4. Infrastruttura di archiviazione](#724-infrastruttura-di-archiviazione)
    - [7.2.5. Infrastruttura di rete globale](#725-infrastruttura-di-rete-globale)
    - [7.2.6. Infrastruttura di backup](#726-infrastruttura-di-backup)
    - [7.2.7. Implementazione di soluzioni di ripristino dell'attività o continuità operativa](#727-implementazione-di-soluzioni-di-ripristino-dellattività-o-continuità-operativa)
  - [7.3. Limitazioni dei servizi nel modello IaaS qualificato](#73-limitazioni-dei-servizi-nel-modello-iaas-qualificato)
    - [7.3.1. Servizi gestiti in RUN](#731-servizi-gestiti-in-run)
    - [7.3.2. Configurazione del ripristino](#732-configurazione-del-ripristino)
    - [7.3.3. Configurazione del backup](#733-configurazione-del-backup)
  - [7.4. Implementazione del servizio](#74-implementazione-del-servizio)
    - [7.4.1. Prerequisiti tecnici](#741-prerequisiti-tecnici)
  - [7.5. Localizzazione del servizio in Francia](#75-localizzazione-del-servizio-in-francia)
    - [7.5.1. Localizzazione dei Datacenter che ospitano il Servizio](#751-localizzazione-dei-datacenter-che-ospitano-il-servizio)
    - [7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio](#752-localizzazione-delle-agenzie-cloud-temple-che-operano-il-servizio)
  - [7.6. Supporto](#76-supporto)
    - [7.6.1. Natura del supporto che accompagna il servizio](#761-natura-del-supporto-che-accompagna-il-servizio)
    - [7.6.2. Richiesta del servizio di supporto tecnico](#762-richiesta-del-servizio-di-supporto-tecnico)
    - [7.6.3. Processo di gestione degli Incidenti](#763-processo-di-gestione-degli-incidenti)
    - [7.6.4. Processo di prioritizzazione del trattamento](#764-processo-di-prioritizzazione-del-trattamento)
    - [7.6.5. Lingua e localizzazione del servizio di supporto](#765-lingua-e-localizzazione-del-servizio-di-supporto)
- [8. Impegni e livelli di servizi](#8-impegni-e-livelli-di-servizi)
  - [8.1. Impegni di disponibilità dell'infrastruttura](#81-impegni-di-disponibilità-dellinfrastruttura)
  - [8.2. Impegno di disponibilità dell'interfaccia del COMMITTENTE](#82-impegno-di-disponibilità-dellinterfaccia-del-committente)
  - [8.3. Impegno di disponibilità del supporto](#83-impegno-di-disponibilità-del-supporto)
  - [8.4. Impegno di disponibilità dello storage a oggetti S3](#84-impegno-di-disponibilità-dello-storage-a-oggetti-s3)
  - [8.5. Precisazioni sull'impegno di backup](#85-precisazioni-sullimpegno-di-backup)
- [9. Organizzazione della relazione contrattuale](#9-organizzazione-della-relazione-contrattuale)
  - [9.1. Responsabilità del Fornitore](#91-responsabilità-del-fornitore)
  - [9.2. Limitazione delle responsabilità del Fornitore](#92-limitazione-delle-responsabilità-del-fornitore)
  - [9.3. Limitazione dell'accesso](#93-limitazione-dellaccesso)
  - [9.4. Responsabilità dei terzi coinvolti nella fornitura del servizio Secure Temple](#94-responsabilità-dei-terzi-coinvolti-nella-fornitura-del-servizio-secure-temple)
  - [9.5. Responsabilità e obblighi del COMMITTENTE](#95-responsabilità-e-obblighi-del-committente)
  - [9.6. Diritti del COMMITTENTE](#96-diritti-del-committente)
  - [9.7. Cancellazione dei dati alla fine del Contratto](#97-cancellazione-dei-dati-alla-fine-del-contratto)
- [10. Ciclo di vita della presente Convenzione di servizio](#10-ciclo-di-vita-della-presente-convenzione-di-servizio)
  - [10.1. Entrata in vigore della Convenzione di servizio](#101-entrata-in-vigore-della-convenzione-di-servizio)
  - [10.2. Evoluzioni della Convenzione di servizio](#102-evoluzioni-della-convenzione-di-servizio)
    - [10.2.1. Evoluzioni innescate dal COMMITTENTE](#1021-evoluzioni-innescate-dal-committente)
    - [10.2.2. Evoluzioni innescate dal Fornitore](#1022-evoluzioni-innescate-dal-fornitore)
  - [10.3. Reversibilità](#103-reversibilità)
- [11. Disponibilità, continuità e ripristino del servizio](#11-disponibilità-continuità-e-ripristino-del-servizio)
  - [11.1. Gestione degli Incidenti e delle interruzioni](#111-gestione-degli-incidenti-e-delle-interruzioni)
    - [11.1.1. Incidenti](#1111-incidenti)
      - [11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di servizio](#11111-tipi-di-incidenti-trattati-nellambito-di-questa-convenzione-di-servizio)
      - [11.1.1.2. Trattamento degli incidenti](#11112-trattamento-degli-incidenti)
      - [11.1.1.3. Livello di notifica degli Incidenti di sicurezza](#11113-livello-di-notifica-degli-incidenti-di-sicurezza)
  - [11.2. Manutenzione del Servizio](#112-manutenzione-del-servizio)
    - [11.2.1. Natura della manutenzione](#1121-natura-della-manutenzione)
    - [11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE](#1122-accessi-remoti-di-cloud-temple-sul-perimetro-del-committente)
    - [11.2.3. Accessi remoti dei terzi coinvolti nella fornitura del servizio sul perimetro del COMMITTENTE](#1123-accessi-remoti-dei-terzi-coinvolti-nella-fornitura-del-servizio-sul-perimetro-del-committente)
- [12. Procedura di cancellazione dei dati alla fine del Contratto](#12-procedura-di-cancellazione-dei-dati-alla-fine-del-contratto)
- [13. Diritto applicabile](#13-diritto-applicabile)
  - [13.1. In generale](#131-in-generale)
  - [13.2. Rispetto del diritto e delle normative applicabili](#132-rispetto-del-diritto-e-delle-normative-applicabili)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protezione rispetto al diritto extra-europeo](#134-protezione-rispetto-al-diritto-extra-europeo)
- [14. FIRME](#14-firme)


----------------------------------------------------------------------------------


# 3. Preliminari e Glossario

## 3.1. Preliminari

Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS qualificata SecNumCloud sotto la denominazione di « *Secure Temple *».

\"La presente convenzione di servizio è complementare ed integra le condizioni generali di vendita e di uso del Fornitore. È
inteso che i documenti contrattuali devono essere interpretati in modo coerente tra loro. In caso di contraddizione o divergenza tra i
termini dei documenti contrattuali, i documenti prevarranno l'uno sull'altro nel seguente ordine:

1. Condizioni Generali di Vendita e di Uso (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud PaaS
4. Convenzione specifica particolare
5. Piano di Assicurazione Sicurezza (PAS)
6. Condizioni Particolari di Uso (CPU)

## 3.2. Glossario

Nella presente Convenzione di servizio, il **COMMITTENTE**, il **Fornitore** e le **Parti** sono identificati nel Contratto
di cui la presente Convenzione di servizio è un allegato.

Le espressioni di seguito utilizzate nella presente Convenzione di servizio saranno interpretate conformemente alle definizioni ad esse
attribuite qui di seguito:


-   **Changement :** Qualsiasi aggiunta, modifica o cancellazione che impatti il Servizio, autorizzata, pianificata o presa in carico.

-   **Changement standard :** Modifica soggetta a una procedura, le cui modalità di messa in produzione e impatti (inclusi quelli finanziari) sono conosciuti e accettati in anticipo dalle Parti. È quindi integrata nel catalogo delle modifiche standard e può, in alcuni casi, avere un GTI e un GTR.

-   **Contrat :** indica il contratto sottoscritto dal COMMITTENTE con il Fornitore per consentire al COMMITTENTE di beneficiare del Servizio, al quale è allegata la presente Convenzione di servizio.

-   ***Convention de service :** Questo documento, stabilito nell'ambito di un contratto specifico o delle Condizioni generali di vendita e utilizzo (CGVU), in conformità con i requisiti del Riferimento SecNumCloud.

-   **Demande de service :** richiesta del COMMITTENTE al Fornitore nell'ambito del Servizio, che copre le operazioni non realizzabili dal COMMITTENTE attraverso l'interfaccia COMMITTENTE e le richieste di supporto nell'ambito del Servizio. Le richieste di servizio sono limitate a quelle previste ai sensi del Contratto o della presente Convenzione di servizio.

-   **Disponibilité :** Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

-   **Données techniques** : comprende l'insieme dei dati manipolati per fornire il Servizio, in particolare i dati relativi all'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i log dell'infrastruttura tecnica, configurazione degli accessi, rubrica, certificati...

-   **Evènement :** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che possa avere importanza per la gestione del Servizio.

-   **Hyperviseur :** Sistema operativo che consente l'esecuzione di macchine virtuali su una blade di calcolo.

-   **Incident :** Qualsiasi evento imprevisto che interrompe il normale funzionamento del Servizio o compromette la sicurezza dei dati.

-   **Incident de sécurité :** Qualsiasi evento nell'ambito del Servizio:

    -   Di natura intenzionalmente dannosa;
    -   Di natura accidentale che compromette l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
    -   Che compromette le misure di sicurezza esistenti.
    Le violazioni di disponibilità di origine non dannosa non sono considerate un Incidente di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

-   **Interface COMMANDITAIRE :** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, che raggruppa una console di amministrazione web e un'API.

-   **Mise en production :** Azione(i) di amministrazione per realizzare la Modifica quando quest'ultima è approvata (la modifica, in senso ITIL, riguarda solo la gestione della modifica e non la sua realizzazione/concretizzazione).

-   **Problème** : causa di uno o più Incidents ricorrenti, causa di un potenziale Incidente (situazione a rischio).

-   **Région :** Indica un insieme geograficamente delimitato di zone di disponibilità cloud, che forniscono servizi di rete, calcolo e archiviazione per ottimizzare la latenza, le prestazioni e la conformità normativa locale.

-   **Service :** Indica il servizio IaaS qualificato SecNumCloud "Secure Temple", fornito al COMMITTENTE dalla Fornitrice da infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" della presente Convenzione di servizio.

-   **Secure Temple** : Indica il servizio IaaS qualificato SecNumCloud, proposto dalla società Cloud Temple, come definito nell'attestazione consultabile sul sito dell'ANSSI e fornita in allegato alla presente Convenzione di servizio.

-   **Sinistre :** Indica un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni significativi alla Parte danneggiata.

-   **Supervision :** Monitoraggio di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi. Questa attività è limitata all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi monitorati, una prerogativa che appartiene alle operazioni di Amministrazione.

-   **Tenant :** Un'istanza isolata riservata a un utente o gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zone de Disponibilité (AZ) (Availability zone) :** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.

# 4. Acronymes


  | **Acronyme** | **Définition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comitato consultivo sulle modifiche                            |
  | **CMDB**     | Configuration Management Database -- Database di gestione delle configurazioni         |
  | **COPIL**    | Comitato di pilotaggio                                                                  |
  | **COSTRAT**  | Comitato strategico                                                                     |
  | **COPROJ**   | Comitato Progetto                                                                       |
  | **DB**       | Database (database)                                                                     |
  | **DRP**      | Disaster Recovery Plan (PRA) (Piano di ripristino dell'attività)                        |
  | **GTE**      | Garanzia di Tempo di Escalation                                                         |
  | **GTI**      | Garanzia di Tempo di Intervento                                                         |
  | **GTR**      | Garanzia di Tempo di Risoluzione                                                        |
  | **ITIL**     | Information Technology Infrastructure Library -- Best practice per la gestione degli SI |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Mantenimento in condizione operativa                                                    |
  | **MOA**      | Committenza                                                                             |
  | **MOE**      | Direzione lavori                                                                        |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Piano di Assicurazione Qualità                                                          |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Piano di Assicurazione Sicurezza                                                        |
  | **PASSI**    | Prestataire d'Audit de Sécurité des Systèmes d'Information (fornitore di audit di sicurezza dei sistemi informativi) |
  | **RFC**      | Request For Change -- Richiesta di modifica                                             |
  | **RGPD**     | Regolamento generale per la protezione dei dati (personali)                             |
  | **RPO**      | Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistro        |
  | **RTO**      | Recovery Time Objective -- Tempo di ripristino del servizio in caso di Sinistro         |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Accordo sui livelli di servizio                              |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Manutenzione applicativa di terze parti                                                 |
  | **UO**       | Unità di Lavoro                                                                         |
  | **VABE**     | Validazione di Idoneità alla Buona Gestibilità                                           |
  | **VABF**     | Validazione di Idoneità al Buon Funzionamento                                           |
  | **VM**       | Virtual Machine (macchina virtuale)                                                     |
  | **VSR**      | Validazione del Servizio Regolare                                                       |


# 5. Objet de la présente Convention de service

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al COMMITTENTE. Il suo scopo è di:

-   Precisare i requisiti di prestazione attesi dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

-   Elencare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati;

-   Identificare le norme regolamentari applicabili specificamente al Servizio fornito;

-   Assicurare uniformità e integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata attraverso indicatori di prestazione quantitativi.

Si precisa che, nell'ipotesi in cui il Fornitore perda la sua qualificazione SecNumCloud, il Contratto potrà essere risolto da
plein droit, sans encourir de pénalités, par le COMMANDITAIRE. Dans une telle éventualité, le Prestataire s'engage à informer le COMMANDITAIRE
de cette déqualification par envoi d'une notification officielle, au moyen d'une lettre recommandée avec demande d'avis de réception.

Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de
la qualification initiale.

# 6. Audit

Le Prestataire s'engage à permettre au COMMANDITAIRE, ou à tout auditeur tiers et non concurrent du Prestataire que ce dernier aurait désigné, de consulter l'ensemble des documents nécessaires à l'attestation du respect intégral des obligations liées à la conformité avec les dispositions de l'article 28 du Règlement Général sur la Protection des Données (RGPD), facilitant ainsi la réalisation
d'audits.

Par l'acceptation de la présente Convention de service, le COMMANDITAIRE confère son autorisation explicite à :

1.  L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) ainsi qu'à l'entité de qualification compétente pour entreprendre la vérification de la conformité du Service et de son système d'information au référentiel SecNumCloud.
2.  Un prestataire d'audit de la sécurité des systèmes d'information, dûment qualifié PASSI et expressément désigné par le Prestataire, pour mener à bien des audits de sécurité portant sur le Service.

# 7. Description du Service

## 7.1. Modèle de responsabilité partagé

Le Service proposé par le Prestataire se caractérise par la mise à disposition des prestations suivantes, lesquelles s'alignent sur le
principe de responsabilité partagée présenté dans le référentiel SecNumCloud :

-   La provision de ressources de calcul (compute) ;

-   La mise à disposition d'espaces de stockage ;

-   L'accès à des services de connectivité réseau et internet ;

-   L'offre d'un service de sauvegarde dédié aux machines virtuelles.

Le modèle de responsabilités partagé appliqué entre le Prestataire et le COMMANDITAIRE dans le cadre du Service est présenté en §7.1.

Il est entendu que le Prestataire mobilisera son expertise pour réaliser les Prestations selon les meilleures pratiques professionnelles et
conformément aux exigences du référentiel SecNumCloud.

Le Service est qualifié SecNumCloud (voir attestation en Annexe).

## 7.2. Présentation détaillée du périmètre du Service

| Compute               | Risorsa di calcolo del Tenant COMMANDITAIRE                                                                          |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Dati di produzione del Tenant COMMANDITAIRE                                                                        |
| Stockage objet S3     | Messa a disposizione di un'infrastruttura di archiviazione oggetti sovrana multi AZ e compatibile con le API S3 standard. |
| Sauvegarde            | Modulo di sottoscrizione al mass-storage appropriato                                                                          |
| Infrastructure réseau | Risorsa di rete del Tenant COMMANDITAIRE                                                                             |
| Console COMMANDITAIRE | Il servizio che consente al COMMANDITAIRE di accedere al proprio servizio IaaS e di amministrarlo tramite l'interfaccia Shiva        |
| Support               | Il servizio di supporto che accompagna i servizi precedenti e solo quelli (*)                                 |

_(*) Nei limiti del perimetro del Servizio qualificato SNC e delle responsabilità del Prestataire in merito_

### 7.2.1. Infrastructures Datacenters

Le Service englobe la mise à disposition, pour chaque Zone de disponibilité, des prestations qualifiées ci-après :

-   Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 dell'Uptime Institute ;
-   Messa a disposizione di sale tecniche all'interno di datacenter dedicati all'accoglienza delle apparecchiature tecniche essenziali per la produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio e altri componenti necessari ;
-   Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, garantendo la continuità del servizio ;
-   Fornitura di servizi di climatizzazione, regolati per rispettare le norme e raccomandazioni dei produttori di apparecchiature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici ;
-   Sorveglianza continua e metrologia dettagliata, permettendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Prestataire assicura la messa a disposizione di servizi avanzati di rilevamento e spegnimento incendi, progettati per identificare e
neutralizzare efficacemente qualsiasi principio di incendio all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle apparecchiature e dei dati. Comprendono rilevatori di fumo ad alta precisione e dispositivi di spegnimento che possono agire rapidamente senza danneggiare le apparecchiature informatiche. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e garantire la continuità delle operazioni.

Il COMMANDITAIRE è informato che tutte le procedure e misure di sicurezza messe in atto, inclusi i test annuali di commutazione sui
generatori, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per
minimizzare i rischi di guasto e garantire una reattività ottimale in caso di Incidente. Accettando queste condizioni, il cliente riconosce
l'importanza di queste misure e s'impegna a cooperare pienamente per facilitare la loro implementazione. Il COMMANDITAIRE è inoltre incoraggiato a
prendere conoscenza delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastructure logicielle de pilotage du Service

Il Prestataire fornisce al COMMANDITAIRE la console di amministrazione e l'API necessaria per l'utilizzo del servizio. Si impegna anche a mantenere questa console di amministrazione e l'API in condizioni operative ottimali e ad assicurare la loro sicurezza in modo continuo.
Questa console di amministrazione e l'API sono designate collettivamente con il termine « interfaccia COMMANDITAIRE ».

Il Prestataire avvisa il COMMANDITAIRE che un uso anormale dell'interfaccia COMMANDITAIRE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche portando al blocco dell'accesso alle API di comando o al servizio. Si sottolinea che questa situazione non costituisce un'indisponibilità del servizio, ma un'azione di protezione del servizio e dell'infrastruttura del Prestataire; di conseguenza, il COMMANDITAIRE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Prestataire precisa al COMMANDITAIRE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMANDITAIRE invia richieste identiche a una frequenza superiore, il loro rifiuto non potrà essere interpretato come un'indisponibilità del servizio.

### 7.2.3. Infrastructures di calcolo

Il servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMANDITAIRE, delle apparecchiature necessarie all'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Questo include:

- La fornitura degli chassis tecnici necessari al corretto funzionamento delle lame di calcolo ;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMANDITAIRE e distribuite secondo le zone di disponibilità di sua scelta. È da notare che queste lame di calcolo sono esclusivamente dedicate al COMMANDITAIRE ;
- La messa a disposizione di sistemi operativi di tipo hypervisor, nonché la garanzia del mantenimento delle condizioni operative e di sicurezza dell'infrastruttura software necessaria al pilotaggio di questi sistemi operativi. È importante evidenziare che, anche se il Prestataire è responsabile della manutenzione operativa e della sicurezza globale del Servizio, non possiede conoscenze specifiche sugli ambienti di produzione del COMMANDITAIRE né sulle esigenze legate ai suoi carichi di lavoro. Di conseguenza, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, un'azione che può richiedere un riavvio, ricade interamente sul COMMANDITAIRE. Questa operazione può essere eseguita tramite l'Interfaccia COMMANDITAIRE.

La scelta del modello di lama di calcolo, selezionato dal catalogo proposto dal Prestataire, è una responsabilità del
COMMANDITAIRE.

### 7.2.4. Infrastruttura di archiviazione

Il servizio comprende la fornitura al COMMANDITAIRE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), che offre vari
livelli di prestazione. Questo servizio include:

- L'implementazione e il mantenimento in condizioni operative e di sicurezza della rete SAN dedicata ;
- L'installazione e la gestione degli array di archiviazione condivisi tra i clienti, incluso il loro mantenimento in condizioni operative e di sicurezza, la loro sorveglianza e la loro metrologia ;
- L'implementazione di sistemi automatizzati per l'allocazione delle LUNs (Logical Unit Numbers) di archiviazione dedicati all'uso del COMMANDITAIRE, in conformità con i volumi sottoscritti dal COMMANDITAIRE.

### 7.2.5. Infrastruttura di rete globale

Il Prestataire implementa nell'ambito del servizio, una rete globale che facilita al COMMANDITAIRE la messa in accessibilità dei suoi sistemi
ospitati. Questo servizio comprende:

-   La fornitura, il mantenimento in condizioni operative e in condizioni di sicurezza di tutte le connessioni in fibre ottiche
    interconnesse alle diverse Zone di disponibilità;

-   La fornitura, il mantenimento in condizioni operative e in condizioni di sicurezza degli apparati tecnici necessari al corretto
    funzionamento della rete e all'isolamento dei diversi clienti.

L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, e gli apparati di rete, i collegamenti operatore e altri
componenti tecnici che realizzano tale interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete è implementata
conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMITTENTE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue
macchine virtuali. Il Fornitore garantisce il mantenimento in condizioni operative e in condizioni di sicurezza di questo servizio di backup.
Il Fornitore garantisce che i backup del COMMITTENTE saranno situati al di fuori della Zona di disponibilità dei carichi di lavoro
salvati, a condizione che il COMMITTENTE abbia sottoscritto le Unità d'opera adeguate.

Questo servizio di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS
dei Tenants del COMMITTENTE nell'ambito del Servizio. L'elaborazione e l’applicazione di una politica di backup adeguata da parte del
COMMITTENTE dipendono dalla sottoscrizione a specifiche unità d'opera. Spetta quindi al COMMITTENTE assicurarsi della
disponibilità delle risorse tecniche necessarie presso il Fornitore per implementare la sua politica di backup o
adattare quest'ultima in base ai mezzi disponibili.

Il Fornitore si impegna a notificare il COMMITTENTE in caso di vincoli di capacità e a fornire assistenza consulenziale per
l'ottimizzazione delle risorse. Gli obblighi del Fornitore saranno limitati alla messa in opera dei bisogni espressi dal COMMITTENTE
in materia di politica di backup, nell'ambito delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripristino attività o di continuità attività

Il Fornitore mette a disposizione del COMMITTENTE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso diverse Zone di disponibilità. È responsabilità del COMMITTENTE gestire efficacemente questa distribuzione delle risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a questo scopo.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

-   L'hosting di componenti fisici del COMMITTENTE;

-   L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, inclusi i collegamenti operatore;

-   Qualsiasi servizio di tipo gestito, o TMA;

-   Qualsiasi assistenza sulle macchine virtuali a livello OS e superiore nella pila di responsabilità IaaS, anche se si tratta di semplice supervisione.

Tuttavia, non è assolutamente escluso che il COMMITTENTE faccia ricorso a tali servizi attraverso l'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenants. Questi servizi non saranno quindi regolati dalla presente Convenzione di servizio e dai suoi impegni/clausole bipartite.

### 7.3.2. Configurazione del ripristino

Per impostazione predefinita, il Fornitore fornisce la messa a disposizione delle risorse IaaS al COMMITTENTE riservando risorse e configurando i deploy per utilizzare le Zone di disponibilità. È responsabilità del COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia del COMMITTENTE.

### 7.3.3. Configurazione del backup

Il servizio di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia rappresentanti l'ambiente IaaS dei Tenants del COMMITTENTE nell'ambito del Servizio.

Il servizio di backup e il completamento della politica di backup del COMMITTENTE sono soggetti alla sottoscrizione di spazio di archiviazione su mass storage necessario per garantire il servizio. È quindi responsabilità del COMMITTENTE sottoscrivere presso il Fornitore i mezzi tecnici necessari per garantire la politica di backup nel suo perimetro informatico, o adattare la politica di backup ai mezzi messi in opera. Il Fornitore si impegna a informare il COMMITTENTE in caso di limitazioni di capacità tecnica.

Il Fornitore metterà in atto i mezzi tecnici e umani necessari al backup del sistema ospitato nel limite delle risorse sottoscritte dal COMMITTENTE.

Inoltre, nei casi di ambiti non coperti dal Fornitore, spetta al COMMITTENTE definire la propria strategia di backup e configurare autonomamente i backup delle VM o effettuare una Richiesta di servizio presso il Fornitore affinché la configurazione dei backup per i server fisici sia implementata, se il COMMITTENTE dispone di un contratto di servizio gestito che permette al Fornitore di agire tramite l'interfaccia del COMMITTENTE che è la console di amministrazione fornita nel contesto di questa Convenzione di servizio e che dispone di funzionalità per configurare i backup.

Inoltre, questo servizio avrà come unico impegno quello di tradurre configurando tramite l'interfaccia del COMMITTENTE, la configurazione chiaramente specificata dal COMMITTENTE.

Per motivi di flessibilità dell'offerta del Fornitore, il COMMITTENTE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In tal caso, spetta al COMMITTENTE assumersi questa scelta. Il Fornitore non eseguirà il backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMITTENTE che scegliere la politica "no backup" o scegliere di eseguire i backup manualmente espone il COMMITTENTE a una perdita definitiva dei dati in caso di Incidente sugli strati bassi o sugli strati dipendenti dalla sua responsabilità nel modello IaaS. In tal caso, sarà impossibile ritenere il Fornitore responsabile per il ripristino dei dati poiché non ci sarà nulla da ripristinare. Il Fornitore raccomanda di eseguire sempre i backup delle VM.

Per ogni argomento riguardante l'OS installato su una macchina virtuale e qualsiasi software o programma eseguito "al di sopra dell'OS", è responsabilità del COMMITTENTE svolgere le operazioni di amministrazione e supervisione all'interno dell'Unione Europea se desidera garantire che tutta la verticalità degli strati del SI sia operata e gestita dall'interno dell'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nell'ambito della presente Convenzione di servizio sono indicate nella sezione "Modello di responsabilità condivisa" della presente Convenzione di Servizio.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l’implementazione del Servizio, il COMMITTENTE riconosce che dovrà:

-   Operare con una virtualizzazione di tipo VMware nelle versioni supportate dal produttore e fornite dal Fornitore nell’ambito del Servizio;

-   Utilizzare tramite il Fornitore lo strumento di backup;

-   Dichiarare degli IP fissi dai quali il Fornitore lo autorizzerà ad accedere all'interfaccia del COMMITTENTE (Filtraggio tramite whitelist). Le modifiche di questa lista di IP dovranno essere effettuate tramite Richieste di servizio (lista non amministrabile dalla interfaccia di amministrazione del Servizio).

## 7.5. Localizzazione del servizio in Francia

Si precisa che nessuna delle operazioni e nessuno dei componenti fisici coinvolti nella fornitura del Servizio, oggetto della presente Convenzione di servizio, si trova al di fuori dell'Unione Europea.

Ciò include in particolare il supporto, la supervisione operativa e la supervisione della sicurezza (SOC) dell'infrastruttura tecnica che eroga il Servizio. Di fatto, tutto l'archiviazione, tutte le operazioni di amministrazione, supervisione e tutti i trattamenti sono realizzati in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

Fatte salve le operazioni dei collaboratori e delle agenzie del Fornitore, tutte le operazioni di produzione (compreso l'archiviazione e il trattamento dei dati) e componenti tecnici che erogano il Servizio sono situati nei Datacenter basati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio

I collaboratori di Cloud Temple che intervengono nel perimetro del Servizio operano dalle agenzie di Cloud Temple situate
esclusivamente in Francia. Queste agenzie sono situate in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità per i dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza per quanto riguarda gli accessi remoti, in particolare per quanto riguarda gli accessi VPN. Questi accessi remoti sono implementati in conformità ai requisiti del riferimento SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere il COMMITTENTE nella gestione, risoluzione dei problemi e ottimizzazione delle
risorse distribuite. Questo servizio copre un'ampia gamma di attività, dall'aiuto nella configurazione iniziale dei servizi
fino al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e funzionalità del servizio di supporto:

-   Assistenza alla messa in opera iniziale dell'uso del Servizio;
-   Assistenza alla risoluzione degli incidenti;
-   Assistenza alla risoluzione dei problemi;
-   Monitoraggio e consulenza sull'ottimizzazione della base tecnica.
Dans le contesto del servizio di supporto, il Fornitore non si sostituisce al COMMITTENTE nell'utilizzo del Servizio. Il COMMITTENTE rimane completamente responsabile della configurazione, dell'operatività delle sue VM e dei suoi Tenants, e della gestione di tutti gli elementi (inclusi dati e applicazioni) che ha memorizzato o installato sulle infrastrutture del Fornitore. Il servizio di supporto tecnico è fornito in conformità con le Condizioni Generali di Vendita e di Utilizzo, il Fornitore essendo tenuto a una obbligazione di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti presso il Fornitore e dal far intervenire le squadre del Fornitore presso i suoi propri clienti o terzi non inclusi nel Contratto. Il Fornitore si riserva il diritto di rifiutare qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità operative di supporto associate.

### 7.6.2. Richiesta del servizio di supporto tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket attraverso la console COMMITTENTE ed è disponibile durante le normali ore di lavoro esclusi i giorni festivi (8h - 18h; Lunedì - Venerdì; calendario e orari francesi). Per le emergenze che si verificano al di fuori dell'orario lavorativo, in particolare gli incidenti che influenzano significativamente la produzione, il servizio di reperibilità può essere contattato tramite un numero comunicato al COMMITTENTE all'inizio del Servizio.

Per ogni richiesta o incidente, è imperativo generare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprendente tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia tramite la console di gestione che a seguito di una chiamata telefonica, viene creato automaticamente un ticket. Al momento della dichiarazione di un Incidente, è essenziale che il COMMITTENTE fornisca al Fornitore il maggior numero di dettagli sul problema riscontrato. Questa procedura è cruciale per consentire una valutazione adeguata della situazione, la sua priorizzazione e una diagnosi efficace.

Il Cliente riceve quindi una conferma via email, indicando la creazione del ticket e il suo numero unico. Il COMMITTENTE può consultare lo stato e la cronologia delle sue richieste e dichiarazioni di Incidenti direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidents

Quando viene dichiarato un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il Cliente deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie ed eseguendo i test richiesti. Il Fornitore può accedere al servizio del Cliente per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono giudicati funzionali e l'Incidente non è a lui imputabile, il Cliente sarà informato. Su richiesta del Cliente, il Fornitore può proporre Servizi Professionali per identificare l'origine del problema, fatturabili previa accordo in frazioni di 30 minuti.

Nel caso in cui l'Incidente sia responsabilità del Fornitore o di uno dei suoi subappaltatori, questo completa la diagnosi e si dedica alla ripristinazione del Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e sui dati del Fornitore, questi elementi essendo considerati probanti per accordo delle Parti.

### 7.6.4. Processo di prioritizzazione del trattamento

La determinazione del livello di priorità di un dossier si basa su un'analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di criticità:

-   I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impatto I1       | Uno o più servizi del Fornitore sono interrotti                                                                    |
| Impatto I2       | Uno o più servizi del Fornitore sono degradati                                                                       |
| Impatto I3       | Uno o più servizi del Fornitore sono attualmente stabili, ma mostrano segni di potenziale declino a lungo termine |

-   I livelli di Criticità sono definiti come segue:

| Livello di criticità | Descrizione                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticità C1        | Uno o più servizi del Fornitore si degradano a una velocità preoccupante                               |
| Criticità C2        | Uno o più servizi del Fornitore si deteriorano progressivamente nel tempo                          |
| Criticità C3        | Uno o più servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative |

-   Sulla base di un'analisi approfondita della situazione, tenendo conto degli elementi che determinano l'Impatto e la Criticità, viene attribuita una priorità al ticket conformemente alla matrice di decisione qui di seguito:

| Livello di impatto <br/> \ Livello di criticità | Impatto I1       | Impatto I2       | Impatto I3       |
| ------------------------------------------- | --------------- | --------------- | --------------- |
| Criticità C1                                | Priorità **P1** | Priorità **P2** | Priorità **P3** |
| Criticità C2                                | Priorità **P2** | Priorità **P3** | Priorità **P4** |
| Criticità C3                                | Priorità **P3** | Priorità **P4** | Priorità **P5** |

Gli impegni di livello di servizio corrispondenti a ciascun livello di priorità sono dettagliati nel capitolo seguente.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in lingua francese. Il supporto può essere fornito anche in lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di servizio infrastrutturale qualificata SecNumCloud sono situate nell'Unione Europea.

# 8. Impegni e livelli di servizio

Il Fornitore si impegna a garantire un monitoraggio continuo delle prestazioni e dell'integrità sicura della propria infrastruttura tecnica che fornisce il Servizio, assicurandone il funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di prestazione, è riconosciuta dalla sua identificazione da parte del sistema di supervisione del Fornitore, o in seguito a una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, per garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente marcata dal ripristino completo del servizio, confermato sia dagli strumenti di supervisione del Fornitore che da un feedback dell'utente, garantendo così una ripresa effettiva delle operazioni e una misurazione fedele della durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura

Il Fornitore si impegna a mantenere un livello di disponibilità e prestazioni conforme agli standard definiti per ogni periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLA) si applicano a condizione che il COMMITTENTE implementi i suoi sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza di rispetto di queste condizioni da parte del COMMITTENTE,
quest'ultimo sarà incapace di rivendicare l'applicazione degli SLA pertinenti, i quali sono specificamente identificati da un
asterisco (\*). L'accessibilità agli SLA è realizzata tramite l'interfaccia COMMITTENTE. Le misurazioni sono calcolate mensilmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilità della potenza di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 3     : IC-INFRA_SNC-03** – Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 5     : IC-INFRA_SNC-05** – Accesso Internet: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.

_**Note**_ :

- *In risposta a un attacco di tipo denial-of-service distribuito (DDoS), il Fornitore si riserva il diritto di regolare la propria configurazione di routing internet per limitare l'impatto di questo attacco e proteggere la propria infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE viene preso di mira, il Fornitore può ricorrere alla tecnica del blackholing
tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP preso di mira a monte dai suoi fornitori, con l'obiettivo di proteggere le risorse del COMMITTENTE così come quelle di altri COMMITTENTE
e dell'infrastruttura del Fornitore. Il Fornitore incoraggia fortemente il COMMITTENTE ad adottare misure simili, come l'utilizzo di software di firewall per applicazioni web disponibili sul mercato, e a configurare accuratamente i propri gruppi di sicurezza tramite l'API di comando.*
- *Il Fornitore insiste sulla necessità per il COMMITTENTE di minimizzare le aperture di flusso, evitando in particolare di rendere accessibili le porte di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) dall'intera Internet (sotto-rete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE

-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, assicurata in modo continuativo, 24 ore su 24 e 7 giorni su 7.
-   SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su base 24h/24, 7g/7.

## 8.3. Impegno di disponibilità del supporto

- **SLA 8      : IC-INFRA_SNC-08** – Ecco gli impegni di performance del supporto tecnico del Fornitore per gli incidenti, esclusa la manutenzione programmata:

| Priorità        | Garanzia di tempo di intervento (GTI) | Obiettivo di performance |
| --------------- | -------------------------------------- | ----------------------- |
| Priorità **P1** | 30min                                  | 95%                     |
| Priorità **P2** | 2h                                     | 90%                     |
| Priorità **P3** | 4h                                     | 90%                     |
| Priorità **P4** | 24h                                    | 85%                     |
| Priorità **P5** | 48h                                    | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – Ecco gli impegni di performance del supporto tecnico del Fornitore per le richieste di servizio:

|                    | Garanzia di tempo di intervento (GTI) | Obiettivo di performance |
| ------------------ | -------------------------------------- | ----------------------- |
| Richiesta di servizio | 4h                                 | 90%                     |

*Nota:*

- *Il tempo per la Garanzia del Tempo di Intervento (GTI) è calcolato dalla differenza tra il momento in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
- *L'investigazione degli incidenti riguardanti i COMMITTENTI non comprenderà l'intervento remoto sui server ospitati del COMMITTENTE. Tale assistenza si limiterà alla spiegazione delle metriche disponibili relative all'ambiente del COMMITTENTE, al fine di facilitare la comprensione degli incidenti o dei problemi di performance incontrati. Sulla base dei risultati di questa analisi, potrebbero essere suggerite delle raccomandazioni.*

## 8.4. Impegno di disponibilità dello storage oggetto S3

- **SLA 10      : IC-INFRA_SNC-10** – Ecco gli impegni di disponibilità per lo storage oggetto S3:

| Indicatore        | Impegno                                           | Obiettivo di disponibilità |
| ----------------- | ------------------------------------------------- | -------------------------- |
| IC-INFRA-SNC-10.1 | Durabilità dello storage di un oggetto su una regione | 99.9999999% / anno         |
| IC-INFRA-SNC-10.2 | Disponibilità dell'API Storage Oggetto S3        | 99.99%                    |
| IC-INFRA-SNC-10.3 | Latenza massima di accesso a un oggetto su una regione | 150 ms                    |

Note:

- Il Servizio di Storage Oggetto è specificamente progettato per lo storage di oggetti e deve essere utilizzato esclusivamente per questo scopo, **escludendo categoricamente il suo utilizzo in modalità blocco**. Utilizzare la modalità blocco con metodi non conformi, inclusa ad esempio l'uso di *"FUSE" in un ambiente Linux*, costituisce una violazione dei termini di utilizzo stabiliti. Nessun incidente, malfunzionamento o danno derivante da tale uso non conforme sarà coperto dagli Accordi di Livello di Servizio (SLA) definiti in questo accordo di servizi.
- La garanzia di durabilità è condizionata a un uso dei servizi conforme alle migliori pratiche e standard attuali, e esclude esplicitamente qualsiasi modifica dei dati, intenzionale o accidentale, risultante da azioni intraprese dal COMMITTENTE.

## 8.5. Precisazione riguardo all'impegno di backup

La strategia di backup implementata per il COMMITTENTE è condizionata alla sottoscrizione delle unità operative appropriate.

Il Fornitore si impegna a mettere a disposizione una soluzione di backup che permetta al COMMITTENTE di applicare le politiche di backup desiderate.

Si precisa che il perimetro del Fornitore si ferma alla messa a disposizione di un servizio di backup e che spetta al COMMITTENTE monitorare tramite l'interfaccia COMMITTENTE la corretta esecuzione delle politiche associate.

Si precisa che la gestione delle capacità di storage dello spazio di storage dedicato ai backup rimane a carico e responsabilità del COMMITTENTE. Il Fornitore mette a disposizione il tasso di utilizzo tramite la console.

*Esempio: Mancato backup di una macchina virtuale:*

*Spetta al COMMITTENTE verificare/supervisionare la corretta esecuzione delle politiche di backup. Nel caso in cui il COMMITTENTE riscontri che una macchina virtuale non viene sottoposta a backup, è suo compito verificarne la causa. Il COMMITTENTE potrà richiedere l'assistenza del Supporto del Fornitore in base al livello di supporto sottoscritto per essere assistito.*

**Il SLA 8 : IC-INFRA_SNC-08 e SLA 9**, sarà applicabile esclusivamente in caso di un incidente del servizio di backup.

# 9. Organizzazione della relazione contrattuale


## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna:

- a informare il proprio COMMITTENTE in modo adeguato (ad esempio in caso di limite di risorse tecniche che erogano il Servizio).

- a informare formalmente il COMMITTENTE e entro un mese, di ogni cambiamento giuridico, organizzativo o tecnico che possa avere un impatto sulla conformità del Servizio ai requisiti di protezione contro le leggi extra-europee (19.6 del riferimento SNC v3.2).

- a fornire al COMMITTENTE interfacce e interfacce di servizio che siano almeno in lingua francese.

- a studiare e prendere in considerazione i requisiti settoriali specifici legati ai tipi di informazioni affidate dal COMMITTENTE nell'ambito dell'implementazione del servizio e nei limiti delle responsabilità del Fornitore.

- a non divulgare alcuna informazione relativa alla prestazione a terzi, salvo autorizzazione formale e scritta del COMMITTENTE.

- a mettere a disposizione tutte le informazioni necessarie alla realizzazione di audit di conformità conformemente alle disposizioni dell'articolo 28 del GDPR.

- a rendere conto al COMMITTENTE, mediante la presente Convenzione di servizio, di ogni incidente di sicurezza che impatti il Servizio o l'utilizzo fatto dal COMMITTENTE del Servizio (incluse le informazioni del COMMITTENTE).

- ad autorizzare un fornitore di audit della sicurezza dei sistemi informativi (PASSI) qualificato, incaricato dal Fornitore, ad auditare il servizio nonché il suo sistema informativo, conformemente al piano di controllo del SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per portare a termine gli audit di conformità alle disposizioni dell'articolo 28 del GDPR, condotti dal committente o da un terzo incaricato.

- a fornire, in qualità di responsabile del trattamento, conformemente all'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), assistenza e consigli al COMMITTENTE informandolo tempestivamente quando un'istruzione emessa da quest'ultimo è suscettibile di costituire una violazione delle regole di protezione dei dati.

- a notificare per iscritto, quando un progetto impatta o è suscettibile di impattare il livello di sicurezza del Servizio, il COMMITTENTE degli impatti potenziali, delle misure di attenuazione adottate, nonché dei rischi residui che lo riguardano.

- a documentare e attuare tutte le procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali applicabili al servizio, nonché i requisiti di sicurezza specifici del COMMITTENTE, definiti da quest'ultimo e previsti nel Contratto. Su richiesta del COMMITTENTE, il modulo Documentazione dell'interfaccia COMMITTENTE consentirà una condivisione sicura di questi documenti.

- a fornire, su richiesta del COMMITTENTE, gli elementi di valutazione dei rischi relativi alla sottomissione delle informazioni del COMMITTENTE alla legge di uno stato non membro dell'Unione Europea.


Su richiesta del COMMITTENTE formale e scritta, il Fornitore si impegna a:

1. Rendere accessibile al COMMITTENTE il regolamento interno e la carta etica del Fornitore;

2. Rendere accessibile al COMMITTENTE le sanzioni previste in caso di infrazione alla politica di sicurezza;

3. Fornire al COMMITTENTE tutti gli eventi che lo riguardano negli elementi di log del Servizio;

4. Alla scadenza del Contratto il Fornitore si impegna a cancellare le informazioni e i Dati tecnici relativi al COMMITTENTE, conformemente alla "procedura di cancellazione dei dati a termine del Contratto" descritta nella presente Convenzione di servizio.

5. garantire una cancellazione sicura dell'interezza delle informazioni del COMMITTENTE mediante riscrittura completa di ogni supporto che abbia ospitato i suoi dati nel quadro del Servizio.

6. fornire l'elenco completo dei terzi autorizzati ad accedere alle infrastrutture contenenti le informazioni.
Le Fornitore manterrà aggiornato e metterà a disposizione del COMMITTENTE l'elenco esaustivo dei terzi autorizzati ad accedere alle infrastrutture contenenti i dati, informando quest'ultimo di qualsiasi cambiamento relativo ai subappaltatori. Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, ossia la dignità umana, la libertà, la democrazia, l'uguaglianza, lo Stato di diritto, nonché il rispetto dei Diritti dell'uomo. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell'Unione Europea relativi al rispetto della dignità umana, della libertà, dell'uguaglianza, della democrazia e dello Stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore

In virtù di tutte le definizioni e condizioni menzionate nel presente Contratto di Servizio, le responsabilità del Fornitore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione « Modello di responsabilità condivisa » del presente Contratto di Servizio, limita di fatto il coinvolgimento del Fornitore nei livelli operativi che vanno "sopra" alla messa a disposizione di risorse di calcolo, di rete, di storage e di backup. Ciò esclude in particolare, ma non limitatamente a:

    -   La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicativi, ecc.);

    -   Il mantenimento degli OS e altri software installati dal COMMITTENTE sulle sue macchine nei suoi Tenant;

    -   La sicurezza dei programmi, software e applicativi installati sulle macchine virtuali;

    -   L'aggiornamento delle macchine virtuali;

    -   Il backup dei dati a livello applicativo.

2.  Il Fornitore non può prendere impegni di backup dei Tenant del COMMITTENTE senza che il COMMITTENTE abbia preventivamente sottoscritto le unità di lavoro adeguate.

3.  Il Fornitore non può rivendicare la proprietà dei dati trasmessi e generati dal COMMITTENTE. Infatti, questi ultimi sono di proprietà del COMMITTENTE.

4.  Il Fornitore sottolinea che non può in alcun caso sfruttare i dati trasmessi e generati dal COMMITTENTE senza la preventiva convalida di quest'ultimo.

5.  Il Fornitore declina ogni responsabilità sui componenti fisicamente ospitati e gestiti dal Fornitore, ma di proprietà diretta del COMMITTENTE o di un terzo con cui il COMMITTENTE ha contrattualizzato. L'hosting di componenti fisici dei clienti non fa parte del Servizio ed è quindi al di fuori dell'ambito del presente Contratto di Servizio. È compito del COMMITTENTE valutare il livello di adesione o dipendenza che questi componenti introducono rispetto al Servizio IaaS qualificato SecNumCloud.

## 9.3. Limitazione degli accessi

Nell'ambito del Servizio, il Fornitore è formalmente vietato dall'accesso ai Tenant appartenenti al COMMITTENTE senza previa autorizzazione. È responsabilità del COMMITTENTE fornire gli accessi necessari al personale del Fornitore, a seconda delle specifiche esigenze di hosting e, se del caso, dei servizi professionali di supporto, se tale opzione è stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla prestazione dei servizi concordati, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella fornitura del servizio del Fornitore è strettamente proibito. Nell'eventualità in cui una specifica esigenza tecnica richiedesse tale accesso, quest'ultimo potrebbe essere stabilito solo dopo aver chiaramente notificato il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo accordo scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio Secure Temple

Il Fornitore gestisce l'elenco dei partner terzi che partecipano alla fornitura del Servizio. Questi terzi sono gli editori, i fornitori (del Fornitore) e altri fornitori partecipanti alla fornitura del Servizio. Il Fornitore applica le seguenti misure a questi terzi:

-   Il Fornitore richiede ai terzi che partecipano all'implementazione del servizio, nella loro collaborazione al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

-   Il Fornitore sottoscrive, con ciascuno dei terzi che partecipano all'implementazione del servizio, clausole di audit che permettono a un organismo di qualificazione di verificare che questi terzi rispettino i requisiti legali e i requisiti SNC, permettendo al Fornitore di rispettare i propri impegni nel presente Contratto di Servizio.

-   Il Fornitore implementa una procedura che consente di controllare regolarmente le misure messe in atto dai terzi partecipanti all'implementazione del servizio per rispettare i requisiti del Fornitore di rispettare i suoi impegni nel presente Contratto di Servizio.

-   Il Fornitore implementa una procedura di monitoraggio delle modifiche apportate dai terzi partecipanti all'implementazione del servizio che potrebbero influenzare il livello di sicurezza del sistema informativo del servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

Si ricorda che il Fornitore fornisce al COMMITTENTE una piattaforma di esecuzione di macchine virtuali, la cui configurazione è a carico del COMMITTENTE. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Fornitore definisce tramite le sue interfacce delle politiche di backup automatiche. Ma è a carico del COMMITTENTE l'attivazione di queste politiche di backup e quindi l'attivazione delle macchine virtuali.

Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione SNC ad auditare il Servizio e l'infrastruttura tecnica che eroga il Servizio.

## 9.6. Diritti del COMMITTENTE

In qualsiasi momento durante il rapporto contrattuale, il COMMITTENTE può presentare un reclamo relativo al servizio qualificato presso l'ANSSI.

In qualsiasi momento, il COMMITTENTE può richiedere al Fornitore di rendere accessibile il proprio regolamento interno e il proprio codice etico.

## 9.7. Cancellazione dei dati alla scadenza del Contratto

Alla scadenza del contratto, che giunga a termine o che venga risolto per qualsiasi motivo, il Fornitore si impegna a procedere con la cancellazione sicura di tutti i dati del COMMITTENTE, compresi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un avviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno quindi cancellati entro un termine massimo di trenta (30) giorni da tale notifica.

Per attestare questa cancellazione, il Fornitore consegnerà al COMMITTENTE un certificato che confermi la cancellazione dei dati.

# 10. Ciclo di vita del presente Contratto di Servizio

## 10.1. Entrata in vigore del Contratto di Servizio

Il presente Contratto di Servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, lo stoccaggio e il trattamento dei dati effettuati nell'ambito della prevendita, dell'implementazione, dell'interruzione del Servizio, sono effettuati nel rispetto della legislazione vigente.

## 10.2. Evoluzioni del Contratto di Servizio

Le modifiche o aggiunte apportate al presente Contratto di Servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tal fine. Queste proposte di modifica saranno esaminate dalle Parti, abilitate a determinare gli aspetti che necessitano di una formalizzazione scritta.

È convenuto che qualsiasi evoluzione del Contratto di Servizio, dopo la convalida, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la stesura e la firma di un emendamento al Contratto in corso.

I fattori che possono portare a una revisione del presente Contratto di Servizio includono, senza limitazioni:

-   L'evoluzione dell'infrastruttura tecnica che eroga il Servizio IaaS;

-   Gli aggiustamenti apportati ai servizi implementati dal Fornitore per fornire il Servizio;

-   Le variazioni degli impegni presi e delle sanzioni applicabili;

-   Le riconfigurazioni organizzative all'interno del COMMITTENTE o del Fornitore;

-   L'espansione o la riduzione dell'ambito di applicazione del Servizio.

La gestione delle versioni e delle revisioni del Contratto di Servizio è registrata nella prefazione del documento per facilitarne il monitoraggio.

### 10.2.1. Evoluzioni avviate dal COMMITTENTE

Le evoluzioni del Contratto di Servizio possono avere, tra l'altro, origine:

-   Una evoluzione dell'infrastruttura gestita dal Fornitore;

-   Una modifica dei servizi implementati dal Fornitore;

-   Una modifica degli impegni di livello di servizio del Fornitore.

### 10.2.2. Evoluzioni avviate dal Fornitore

Qualsiasi modifica del Contratto di Servizio è soggetta all'accettazione del COMMITTENTE. Si intende che qualsiasi modifica o integrazione
convalidata che modifichi gli elementi finanziari del Contratto, potrà implicare la firma di un emendamento a quest'ultimo.

## 10.3. Reversibilità

Inoltre, Cloud Temple si impegna a consentire una revisione del presente Contratto di Servizio (prevedendo anche la sua risoluzione) senza penali
per il COMMITTENTE in caso di perdita della qualifica SecNumCloud.

I Servizi non comprendono obblighi di reversibilità (ossia, l'assistenza al Cliente per migrare il suo sistema verso un altro Fornitore) tranne la messa a disposizione da parte del Fornitore dell'interfaccia del COMMITTENTE che permette al COMMITTENTE di salvare e recuperare i suoi dati, compresi in particolare i dati di configurazione del loro sistema informativo, attraverso una delle modalità tecniche seguenti a scelta del COMMITTENTE: la fornitura di file in uno o più formati documentati e utilizzabili al di fuori del servizio fornito dal Fornitore oppure attraverso l'implementazione di interfacce tecniche che consentano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il COMMITTENTE, unico responsabile del suo sistema, deve fare tutto il possibile per facilitare questa operazione se necessario (ciò implica, in particolare, che predisponga una documentazione rigorosa a tal fine) e l'elaborazione di piani di reversibilità. Nel caso in cui il COMMITTENTE avesse bisogno di un servizio aggiuntivo, il Fornitore può proporre una consulenza a tal riguardo nell'ambito di un contratto specifico da negoziare.

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

-   Azioni successive

-   Archiviare i documenti che dettagliano gli incidenti di sicurezza.

-   Notifica di violazione dei dati personali (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Livello di notifica degli Incidenti di sicurezza

Il COMMITTENTE ha la responsabilità di scegliere i livelli di gravità degli Incidenti di sicurezza per i quali desidera essere informato, ad esempio tramite la loro formalizzazione in un PAS applicabile al Servizio.

Per impostazione predefinita, il COMMITTENTE viene informato:

-   Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo la scala di impatto definita nel processo di prioritizzazione dei trattamenti di questa Convenzione di servizio);

-   Delle violazioni dei dati personali per le quali il COMMITTENTE è responsabile del trattamento;

-   Delle violazioni dei dati personali per le quali il Fornitore è responsabile del trattamento e che contengono dati personali del COMMITTENTE.

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

La manutenzione assicurata consiste nell'implementazione di:

-   Un piano di mantenimento in condizioni operative del Servizio per garantire buoni indicatori di disponibilità, come promesso dal Fornitore sopra;

-   Un piano di PCA/PRA se sottoscritto dal COMMITTENTE attivato in base agli eventuali incidenti che potrebbero verificarsi.

### 11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE

Il Fornitore si impegna, nell'ambito della presente Convenzione di servizio, a non accedere ai Tenant e allo spazio dell'interfaccia del COMMITTENTE.

Sarà responsabilità del COMMITTENTE fornire l'accesso necessario al personale del Fornitore. Il COMMITTENTE riconosce che gli accessi saranno utilizzati nell'ambito dell'hosting e in ultima analisi della gestione IT (se sottoscritto dal COMMITTENTE).

### 11.2.3. Accessi remoti di terzi partecipanti alla fornitura del servizio sul perimetro del COMMITTENTE

Non è consentito alcun accesso remoto di terzi partecipanti alla fornitura del Servizio.

Se una necessità tecnica rendesse necessario questo scenario, tale accesso sarebbe realizzato solo previo notifica del COMMITTENTE, giustificazione e ottenimento del suo consenso scritto.

# 12. Procedura di cancellazione dei dati alla fine del Contratto

Alla fine del Contratto, che il Contratto sia giunto alla sua scadenza o per qualsiasi altra causa, il Fornitore assicurerà la cancellazione sicura di tutti i dati trattati nell'ambito del Servizio, comprese le Dati tecniche del COMMITTENTE. Il Fornitore darà un preavviso formale rispettando un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno cancellati entro un termine massimo di trenta (30) giorni dalla notifica. Il Fornitore fornisce un certificato di cancellazione dei dati al COMMITTENTE.

# 13. Legge applicabile

## 13.1. In generale

La legge applicabile e a cui è soggetta la presente Convenzione di servizio è la legge francese.

## 13.2. Rispetto delle leggi e delle normative applicabili

Il Fornitore si impegna sui seguenti punti:

-   L'identificazione dei vincoli legali e normativi applicabili nell'ambito del Servizio;

-   Il rispetto dei vincoli legali e normativi applicabili ai dati affidati al Fornitore;

-   Il rispetto della Legge informatica e libertà e del GDPR;

-   L'implementazione di misure di protezione dei dati personali;

-   L'implementazione di un processo di monitoraggio legale e normativo;

-   Disporre e mantenere relazioni appropriate o un monitoraggio con le autorità settoriali in relazione alla natura dei dati trattati nell'ambito del Servizio. Questi includono in particolare l'ANSSI, il CERT-FR e la CNIL.

## 13.3. GDPR

Agendo in qualità di subappaltatore ai sensi dell'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), il Fornitore si impegna:

-   A garantire trasparenza e tracciabilità;

-   A designare un DPO incaricato di definire e attuare le misure di protezione dei dati personali;

-   A fornire assistenza e consulenza al COMMITTENTE, avvertendolo se una sua istruzione costituisce una violazione delle norme di protezione dei dati personali, se il Fornitore è in grado di identificarla;

-   A garantire la sicurezza sui dati trattati (a causa qualifica SecNumCloud).

## 13.4. Protezione rispetto al diritto extra-europeo

Nel caso in cui il Fornitore, nell'ambito del Servizio, si avvalga del servizio di una società terza - inclusa un subappaltatore - con sede statutaria, amministrazione centrale o principale stabilimento in uno Stato non membro dell'Unione Europea o appartenente o controllata da una società terza domiciliata al di fuori dell'Unione Europea, il Fornitore si impegna affinché tale società terza non abbia alcun accesso ai dati gestiti dal servizio 'Secure Temple'.

Si ricorda che i dati in questione sono quelli affidati al Fornitore dal COMMITTENTE nonché tutti i dati tecnici comprendenti informazioni sui COMMITTENTI.

Ai fini del presente articolo, il concetto di controllo è inteso come quello menzionato nel secondo comma dell'articolo L233-3 del codice di commercio.

# 14. FIRME

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, il FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il COMMITTENTE