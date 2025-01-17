---
title: Convenzione di Servizio IaaS
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **CONVENZIONE DI SERVIZI IaaS**

| **Destinatari :**                  | **COMMITTENTE**                               |
| :----------------------------------- | :---------------------------------------------- |
| **Riferimento del documento**           | CT.AM.JUR.ANX_Convenzione di Servizi_IaaS_v2.0  |
| **I vostri interlocutori**               | *Nome* *Cognome*                                  |
|                                      | Account Manager                                 |
|                                      | e-mail : *nome.cognome*@cloud-temple.com          |
| **Data dell'ultimo aggiornamento**     | 03/04/2024                                      |
| **Data di validazione contrattuale** | Giorno GG AAAA                                    |


----------------------------------------------------------------------------------

| **Version** | **Data**   | **Azione**                             | **Autore**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Redazione iniziale                     | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Arricchimento                         | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Integrazione Indicatori                | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modifica piè di pagina              | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Arricchimento                         | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Arricchimento                         | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modifica Capitale e Arricchimento | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Arricchimento                         | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Arricchimento                         | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Regolazioni conformità SNC             | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Pubblicazione                            | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **INDICE**


- [1. **CONVENZIONE DI SERVIZI IaaS**](#1-convenzione-di-servizi-iaas)
- [2. **INDICE**](#2-indice)
- [3. Preliminare e Glossario](#3-preliminare-e-glossario)
  - [3.1. Preliminare](#31-preliminare)
  - [3.2. Glossario](#32-glossario)
- [4. Acronimi](#4-acronimi)
- [5. Oggetto della presente Convenzione di servizio](#5-oggetto-della-presente-convenzione-di-servizio)
- [6. Audit](#6-audit)
- [7. Descrizione del Servizio](#7-descrizione-del-servizio)
  - [7.1. Modello di responsabilità condivisa](#71-modello-di-responsabilità-condivisa)
  - [7.2. Presentazione dettagliata del perimetro del Servizio](#72-presentazione-dettagliata-del-perimetro-del-servizio)
    - [7.2.1. Infrastrutture Datacenter](#721-infrastrutture-datacenter)
    - [7.2.2. Infrastruttura software di gestione del Servizio](#722-infrastruttura-software-di-gestione-del-servizio)
    - [7.2.3. Infrastrutture di calcolo](#723-infrastrutture-di-calcolo)
    - [7.2.4. Infrastruttura di stoccaggio](#724-infrastruttura-di-stoccaggio)
    - [7.2.5. Infrastruttura di rete globale](#725-infrastruttura-di-rete-globale)
    - [7.2.6. Infrastruttura di backup](#726-infrastruttura-di-backup)
    - [7.2.7. Implementazione di soluzioni di ripristino attività o continuità operativa](#727-implementazione-di-soluzioni-di-ripristino-attività-o-continuità-operativa)
  - [7.3. Limitazioni dei servizi nel modello IaaS qualificato](#73-limitazioni-dei-servizi-nel-modello-iaas-qualificato)
    - [7.3.1. Servizi gestiti in RUN](#731-servizi-gestiti-in-run)
    - [7.3.2. Configurazione del soccorso](#732-configurazione-del-soccorso)
    - [7.3.3. Configurazione del backup](#733-configurazione-del-backup)
  - [7.4. Implementazione del servizio](#74-implementazione-del-servizio)
    - [7.4.1. Prerequisiti tecnici](#741-prerequisiti-tecnici)
  - [7.5. Localizzazione del servizio in Francia](#75-localizzazione-del-servizio-in-francia)
    - [7.5.1. Localizzazione dei Datacenter che ospitano il Servizio](#751-localizzazione-dei-datacenter-che-ospitano-il-servizio)
    - [7.5.2. Localizzazione delle agenzie Cloud Temple operanti il servizio](#752-localizzazione-delle-agenzie-cloud-temple-operanti-il-servizio)
  - [7.6. Supporto](#76-supporto)
    - [7.6.1. Natura del supporto che accompagna il servizio](#761-natura-del-supporto-che-accompagna-il-servizio)
    - [7.6.2. Richiesta di supporto tecnico](#762-richiesta-di-supporto-tecnico)
    - [7.6.3. Processo di gestione degli Incidenti](#763-processo-di-gestione-degli-incidenti)
    - [7.6.4. Processo di prioritizzazione dei trattamenti](#764-processo-di-prioritizzazione-dei-trattamenti)
    - [7.6.5. Lingua e localizzazione del servizio di supporto](#765-lingua-e-localizzazione-del-servizio-di-supporto)
- [8. Impegni e livelli di servizio](#8-impegni-e-livelli-di-servizio)
  - [8.1. Impegni di disponibilità dell'infrastruttura](#81-impegni-di-disponibilità-dellinfrastruttura)
  - [8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE](#82-impegno-di-disponibilità-dellinterfaccia-committente)
  - [8.3. Impegno di disponibilità del supporto](#83-impegno-di-disponibilità-del-supporto)
  - [8.4. Impegno di disponibilità dello storage oggetti S3](#84-impegno-di-disponibilità-dello-storage-oggetti-s3)
  - [8.5. Chiarimento riguardo l'impegno di backup](#85-chiarimento-riguardo-limpegno-di-backup)
- [9. Organizzazione della relazione contrattuale](#9-organizzazione-della-relazione-contrattuale)
  - [9.1. Responsabilità del Fornitore](#91-responsabilità-del-fornitore)
  - [9.2. Limitazione delle responsabilità del Fornitore](#92-limitazione-delle-responsabilità-del-fornitore)
  - [9.3. Limitazione di accesso](#93-limitazione-di-accesso)
  - [9.4. Responsabilità delle terze parti partecipanti alla fornitura del servizio Secure Temple](#94-responsabilità-delle-terze-parti-partecipanti-alla-fornitura-del-servizio-secure-temple)
  - [9.5. Responsabilità e obblighi del COMMITTENTE](#95-responsabilità-e-obblighi-del-committente)
  - [9.6. Diritti del COMMITTENTE](#96-diritti-del-committente)
  - [9.7. Cancellazione dei dati a fine Contratto](#97-cancellazione-dei-dati-a-fine-contratto)
- [10. Ciclo di vita della presente Convenzione di servizio](#10-ciclo-di-vita-della-presente-convenzione-di-servizio)
  - [10.1. Entrata in vigore della Convenzione di servizio](#101-entrata-in-vigore-della-convenzione-di-servizio)
  - [10.2. Evoluzioni della Convenzione di servizio](#102-evoluzioni-della-convenzione-di-servizio)
    - [10.2.1. Evoluzioni avviate dal COMMITTENTE](#1021-evoluzioni-avviate-dal-committente)
    - [10.2.2. Evoluzioni avviate dal Fornitore](#1022-evoluzioni-avviate-dal-fornitore)
  - [10.3. Reversibilità](#103-reversibilità)
- [11. Disponibilità, continuità e ripristino del servizio](#11-disponibilità-continuità-e-ripristino-del-servizio)
  - [11.1. Gestione degli Incidenti e delle interruzioni](#111-gestione-degli-incidenti-e-delle-interruzioni)
    - [11.1.1. Incidenti](#1111-incidenti)
      - [11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di servizio](#11111-tipi-di-incidenti-trattati-nellambito-di-questa-convenzione-di-servizio)
      - [11.1.1.2. Gestione degli incidenti](#11112-gestione-degli-incidenti)
      - [11.1.1.3. Livello di notifica degli Incidenti di sicurezza](#11113-livello-di-notifica-degli-incidenti-di-sicurezza)
  - [11.2. Manutenzione del Servizio](#112-manutenzione-del-servizio)
    - [11.2.1. Natura della manutenzione](#1121-natura-della-manutenzione)
    - [11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE](#1122-accessi-remoti-di-cloud-temple-sul-perimetro-del-committente)
    - [11.2.3. Accessi remoti di terzi partecipanti alla fornitura del servizio sul perimetro del COMMITTENTE](#1123-accessi-remoti-di-terzi-partecipanti-alla-fornitura-del-servizio-sul-perimetro-del-committente)
- [12. Procedura di cancellazione dei dati a fine Contratto](#12-procedura-di-cancellazione-dei-dati-a-fine-contratto)
- [13. Diritto applicabile](#13-diritto-applicabile)
  - [13.1. In generale](#131-in-generale)
  - [13.2. Rispetto del diritto e delle normative applicabili](#132-rispetto-del-diritto-e-delle-normative-applicabili)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protezione nei confronti del diritto extra-europeo](#134-protezione-nei-confronti-del-diritto-extra-europeo)
- [14. FIRME](#14-firme)


----------------------------------------------------------------------------------


# 3. Preliminare e Glossario

## 3.1. Preliminare

Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS qualificata SecNumCloud sotto l'appellativo di « *Secure Temple* ».

\"La presente convenzione di servizio completa ed è complementare ai termini e condizioni generali di vendita e utilizzo del Fornitore. È inteso che i documenti contrattuali si interpretano in maniera coerente tra di loro. In caso di contraddizione o divergenza tra i termini dei documenti contrattuali, i documenti prevarranno gli uni sugli altri nel seguente ordine:

1. Condizioni Generali di Vendita e Utilizzo (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud PaaS
4. Convenzione specifica particolare
5. Piano di Assicurazione della Sicurezza (PAS)
6. Condizioni Particolari di Utilizzo (CPU)

## 3.2. Glossario

Nella presente Convenzione di servizio, il **COMMITTENTE**, il **Fornitore** e le **Parti** sono identificati nel Contratto a cui è allegata la presente Convenzione di servizio.

Le espressioni di seguito utilizzate nella presente Convenzione di servizio saranno interpretate conformemente alle definizioni che sono attribuite loro di seguito:


-   **Cambio:** Qualsiasi aggiunta, modifica o eliminazione che impatta il Servizio, autorizzata, pianificata o gestita.

-   **Cambio standard:** Modifica soggetta a una procedura, le cui modalità di messa in produzione e gli impatti (inclusi quelli finanziari) sono noti e accettati in anticipo dalle Parti. Viene quindi integrata nel catalogo dei cambi standard e può, in alcuni casi, avere un GTI e un GTR.

-   **Contratto:** indica il contratto stipulato dal COMMITTENTE con il Fornitore per permettere al COMMITTENTE di beneficiare del Servizio, al quale è allegata la presente Convenzione di servizio.

-   ***Convenzione di servizio:** Questo documento, redatto nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), in conformità ai requisiti del Riferimento SecNumCloud.

-   **Richiesta di servizio:** richiesta del COMMITTENTE al Fornitore nell'ambito del Servizio, coprendo le operazioni non realizzabili dal COMMITTENTE attraverso l'interfaccia COMMITTENTE e le richieste di supporto nell'ambito del Servizio. Le richieste di servizio sono limitate a quelle previste dal Contratto o dalla presente Convenzione di servizio.

-   **Disponibilità:** Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

-   **Dati tecnici:** comprende l'insieme dei dati manipolati per fornire il Servizio, inclusi i dati relativi all'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i registri dell'infrastruttura tecnica, la configurazione degli accessi, l'elenco, i certificati...

-   **Evento:** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che può avere importanza nella gestione del Servizio.

-   **Hypervisor:** Sistema operativo che consente l'esecuzione di macchine virtuali su una postazione di calcolo.

-   **Incidente:** Qualsiasi evento imprevisto che disturba il normale funzionamento del Servizio o compromette la sicurezza dei dati.

-   **Incidente di sicurezza:** Qualsiasi evento nell'ambito del Servizio:

    -   Di natura intenzionalmente dannosa;
    -   Di natura accidentale che compromette l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
    -   Che compromette le misure di sicurezza esistenti.
      Le interruzioni della Disponibilità di origine non malevola non sono considerate Incidente di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

-   **Interfaccia COMMITTENTE:** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, che raggruppa una console di amministrazione web e un'API.

-   **Messa in produzione:** Azione(i) di amministrazione per la realizzazione del Cambio quando questo è approvato (il cambio, in senso ITIL, riguarda solo la gestione del cambio e non la sua realizzazione/concretizzazione).

-   **Problema:** Causa di uno o più Incidenti ricorrenti, causa di un Incidente potenziale (situazione a rischio).

-   **Regione:** indica un insieme geograficamente delimitato di zone di disponibilità cloud, fornendo servizi di rete, calcolo e archiviazione per ottimizzare la latenza, le prestazioni e la conformità normativa locale.

-   **Servizio:** indica il servizio IaaS qualificato SecNumCloud "Secure Temple", fornito al COMMITTENTE dal Fornitore tramite le infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" della presente Convenzione di servizio.

-   **Secure Temple:** indica il servizio IaaS qualificato SecNumCloud, proposto dalla società Cloud Temple, come definito nell'attestazione consultabile sul sito dell'ANSSI e fornita in allegato alla presente Convenzione di servizio.

-   **Sinistro:** indica un evento grave di origine naturale o umana, accidentale o intenzionale, che provoca perdite e danni significativi alla Parte interessata.

-   **Supervisione:** Monitoraggio di un Sistema Informativo o di un Servizio, che comporta la raccolta di vari dati come misurazioni e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi monitorati, una prerogativa che appartiene alle operazioni di Amministrazione.

-   **Tenant:** Una istanza isolata riservata a un utente o gruppo di utenti, condividendo un'infrastruttura comune pur mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zona di Disponibilità (AZ) (Availability zone):** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.

# 4. Acronimi


  | **Acronimo** | **Definizione**                                                                          |
  | ------------ | :--------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comitato consultivo sui cambiamenti                              |
  | **CMDB**     | Configuration Management Database -- Database di gestione delle configurazioni           |
  | **COPIL**    | Comitato di gestione                                                                      |
  | **COSTRAT**  | Comitato strategico                                                                       |
  | **COPROJ**   | Comitato Progetto                                                                         |
  | **DB**       | Database (base di dati)                                                                  |
  | **DRP**      | Disaster Recovery Plan (PRA) (Piano di ripristino dell'attività)                         |
  | **GTE**      | Garanzia del Tempo di Escalation                                                         |
  | **GTI**      | Garanzia del Tempo di Intervento                                                         |
  | **GTR**      | Garanzia del Tempo di Risoluzione                                                        |
  | **ITIL**     | Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI   |
  | **IaaS**     | Infrastructure as a Service                                                              |
  | **MCO**      | Mantenimento delle condizioni operative                                                  |
  | **MOA**      | Direzione dei Lavori                                                                      |
  | **MOE**      | Direzione delle Opere                                                                    |
  | **MSP**      | Managed Services Provider                                                                |
  | **OS**       | Operating system (sistema operativo)                                                     |
  | **PAQ**      | Piano di Assicurazione Qualità                                                           |
  | **PaaS**     | Platform as a Service                                                                    |
  | **PAS**      | Piano di Assicurazione Sicurezza                                                         |
  | **PASSI**    | Fornitore di Audit di Sicurezza dei Sistemi Informativi                                   |
  | **RFC**      | Request For Change -- Richiesta di cambiamento                                           |
  | **RGPD**     | Regolamento Generale per la Protezione dei Dati (personali)                               |
  | **RPO**      | Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistro         |
  | **RTO**      | Recovery Time Objective -- Tempo di ripristino del servizio in caso di Sinistro          |
  | **SDM**      | Service Delivery Manager                                                                 |
  | **SLA**      | Service Level Agreement -- Accordo sui livelli di servizio                               |
  | **SNC**      | SecNumCloud                                                                              |
  | **SOC**      | Security Operation Center                                                                |
  | **TMA**      | Manutenzione Terza Applicazione                                                          |
  | **UO**       | Unità di Opera                                                                           |
  | **VABE**     | Validazione di Attitudine alla Buona Operabilità                                         |
  | **VABF**     | Validazione dell'Attitudine al Buon Funzionamento                                        |
  | **VM**       | Virtual Machine (Macchina virtuale)                                                      |
  | **VSR**      | Validazione di Servizio Regolare                                                         |


# 5. Oggetto della presente Convenzione di servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al COMMITTENTE. Il suo obiettivo è:

-   Precisare i requisiti di prestazioni attesi dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

-   Stabilire gli obblighi del Fornitore per soddisfare i livelli di servizio concordati;

-   Identificare le norme regolamentari applicabili specificamente al Servizio fornito;

-   Garantire uniformità e integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata attraverso indicatori di prestazione quantitativi.

È stabilito che, nell'ipotesi in cui il Fornitore vedesse ritirata la sua qualificazione SecNumCloud, il Contratto potrebbe essere risolto di
plein droit, sans encourir de pénalità, da parte del COMMITTENTE. In tale eventualità, il Fornitore si impegna a informare il COMMITTENTE
di questa squalifica mediante l'invio di una notifica ufficiale, tramite lettera raccomandata con avviso di ricevimento.

È importante notare che una modifica o un aggiustamento della qualifica SecNumCloud non sarà interpretato come una revoca della
qualifica iniziale.

# 6. Audit

Il Fornitore si impegna a consentire al COMMITTENTE, o a qualsiasi revisore terzo non concorrente del Fornitore designato da quest'ultimo, di consultare tutti i documenti necessari per attestare il pieno rispetto degli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione
di audit.

Accettando il presente Contratto di servizio, il COMMITTENTE concede la sua esplicita autorizzazione a:

1.  L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI) nonché l'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al quadro di riferimento SecNumCloud.
2.  Un fornitore di audit della sicurezza dei sistemi informativi, debitamente qualificato PASSI ed espressamente designato dal Fornitore, per condurre audit di sicurezza sul Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio proposto dal Fornitore è caratterizzato dalla messa a disposizione delle seguenti prestazioni, le quali si allineano al
principio di responsabilità condivisa presentato nel quadro di riferimento SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La messa a disposizione di spazi di archiviazione;

-   L'accesso a servizi di connettività di rete e internet;

-   L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nell'ambito del Servizio è presentato in §7.1.

Si intende che il Fornitore utilizzerà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali e
conformemente ai requisiti del quadro di riferimento SecNumCloud.

Il Servizio è qualificato SecNumCloud (vedi attestazione in Appendice).

## 7.2. Presentazione dettagliata del perimetro del Servizio

| Compute               | Risorsa di calcolo del Tenant COMMITTENTE                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Dati di produzione del Tenant COMMITTENTE                                                                            |
| Archiviazione oggetti S3 | disposizione di un’infrastruttura di archiviazione oggetti sovrana multi AZ e compatibile con le API S3 standard. |
| Backup                | Modulo sottoscrizione allo storage di massa adeguato                                                                  |
| Infrastruttura di rete | Risorsa di rete del Tenant COMMITTENTE                                                                               |
| Console COMMITTENTE   | Il servizio che consente al COMMITTENTE di accedere al suo servizio IaaS e di amministrarlo tramite l'interfaccia Shiva|
| Supporto              | Il servizio di supporto che accompagna i servizi precedenti e solamente quelli (*)                                   |

_(*) Nei limiti del perimetro del Servizio qualificato SNC e delle responsabilità del Fornitore in materia_

### 7.2.1. Infrastrutture Datacenter

Il Servizio include la messa a disposizione, per ogni Zona di disponibilità, delle seguenti prestazioni qualificate:

-   Sito datacenter situato in Francia per la Regione FR, conforme agli ultimi standard tecnologici, con un livello di resilienza equivalente o superiore al livello Tier 3 del Uptime Institute;
-   Messa a disposizione di sale tecniche all'interno di datacenter dedicati all'accoglienza delle attrezzature tecniche indispensabili alla produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio e altri componenti necessari;
-   Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, garantendo una continuità del servizio;
-   Fornitura di servizi di climatizzazione, adattati per rispettare gli standard e le raccomandazioni dei produttori di attrezzature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
-   Monitoraggio continuo e metrologia dettagliata, consentendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore garantisce la messa a disposizione di servizi avanzati di rilevamento e spegnimento degli incendi, progettati per identificare e
neutralizzare efficacemente qualsiasi inizio di incendio all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle apparecchiature
e dei dati. Comprendono rilevatori di fumo ad alta precisione e dispositivi di spegnimento che possono agire rapidamente
senza danneggiare le apparecchiature informatiche. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e
garantire la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e le misure di sicurezza messe in atto, inclusi i test annuali di trasferimento sui
gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per
minimizzare i rischi di interruzione e garantire una reattività ottimale in caso di incidente. Accettando queste condizioni, il cliente riconosce
l'importanza di queste misure e si impegna a cooperare pienamente per facilitarne l'implementazione. Il COMMITTENTE è inoltre incoraggiato a
prendere conoscenza delle raccomandazioni di sicurezza fornite e ad integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria all'utilizzo del Servizio. Si impegna inoltre a mantenere tale console di amministrazione e l'API in condizioni operative ottimali e ad assicurare la loro sicurezza in modo continuo.
Questa console di amministrazione e l'API sono designate congiuntamente con il termine «interfaccia COMMITTENTE».

Il Fornitore avverte il COMMITTENTE che un uso anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che portano al blocco dell'accesso alle API di comando o al Servizio. È importante sottolineare che questa situazione non costituisce un'indisponibilità del Servizio ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Fornitore specifica al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMITTENTE invia richieste identiche a una frequenza superiore, il loro rifiuto non potrà essere interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle attrezzature necessarie all'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Ciò include:

- La fornitura dei chassis tecnici necessari al buon funzionamento delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e distribuite secondo le zone di disponibilità di sua scelta. È importante notare che queste lame di calcolo sono esclusivamente dedicate al COMMITTENTE;
- La messa a disposizione di sistemi operativi di tipo hypervisor, nonché la garanzia del mantenimento in condizioni operative e di sicurezza dell'infrastruttura software necessaria per la gestione di questi sistemi operativi. È importante evidenziare che, anche se il Fornitore è responsabile della manutenzione operativa e della sicurezza generale del Servizio, non possiede conoscenze specifiche riguardanti gli ambienti di produzione del COMMITTENTE né i requisiti legati ai suoi carichi di lavoro. Pertanto, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, un'azione che può richiedere un riavvio, ricade interamente sul COMMITTENTE. Questa operazione può essere effettuata tramite l'Interfaccia COMMITTENTE.

La scelta del modello di lama di calcolo, selezionato tra il catalogo proposto dal Fornitore, è di responsabilità del
COMMITTENTE.

### 7.2.4. Infrastruttura di archiviazione

Il servizio comprende la fornitura al COMMITTENTE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), offrendo vari livelli di prestazioni. Questo servizio include:

- L'implementazione e il mantenimento in condizioni operative e di sicurezza della rete SAN dedicata;
- L'installazione e la gestione delle baie di archiviazione condivise tra i clienti, inclusi il mantenimento in condizioni operative e di sicurezza, la supervisione e la metrologia;
- L'implementazione di sistemi automatizzati per l'allocazione delle LUNs (Logical Unit Numbers) di archiviazione dedicate all'uso del COMMITTENTE, in conformità ai volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore implementa nell'ambito del Servizio, una rete globale facilitando al COMMITTENTE la messa in accessibilità dei suoi sistemi ospitati. Questo servizio comprende:
-   La fornitura, il mantenimento in condizioni operative e di sicurezza di tutte le connessioni in fibra ottica
    che interconnettono le diverse Zone di Disponibilità;

-   La fornitura, il mantenimento in condizioni operative e di sicurezza delle attrezzature tecniche necessarie al buon
    funzionamento della rete e all'isolamento dei diversi clienti.

L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, e le attrezzature di rete, i collegamenti degli operatori e altri
componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete viene attuata
conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMITTENTE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue
macchine virtuali. Il Fornitore assicura il mantenimento in condizioni operative e di sicurezza di questo servizio di backup.
Il Fornitore garantisce che i backup del COMMITTENTE saranno situati al di fuori della Zona di Disponibilità dei carichi di lavoro
backuppati, a condizione che il COMMITTENTE abbia sottoscritto le Unità di lavoro adeguate.

Questo servizio di backup è limitato al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS
dei Tenants del COMMITTENTE nell'ambito del Servizio. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del
COMMITTENTE dipendono dalla sottoscrizione a delle unità di lavoro specifiche. Spetta quindi al COMMITTENTE assicurarsi della
disponibilità delle risorse tecniche necessarie presso il Fornitore per attuare la sua politica di backup o
adattare quest'ultima in funzione dei mezzi disponibili.

Il Fornitore si impegna a notificare il COMMITTENTE in caso di vincoli di capacità e a fornire assistenza per
l'ottimizzazione delle risorse. Gli obblighi del Fornitore si limiteranno all'implementazione delle necessità espresse dal COMMITTENTE
in materia di politica di backup, nell'ambito delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di disaster recovery o continuità operativa

Il Fornitore fornisce al COMMITTENTE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso varie Zone di Disponibilità. È responsabilità del COMMITTENTE gestire efficacemente questa distribuzione delle risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a tale scopo.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

-   L'hosting di componenti fisici del COMMITTENTE;

-   L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, inclusi i collegamenti dell'operatore;

-   Qualsiasi servizio di tipo gestito, o TMA;

-   Qualsiasi assistenza sulle macchine virtuali a livello di OS e superiore nella pila di responsabilità Iaa, anche se si tratta di semplice supervisione.

Ciò nonostante, non è escluso che il COMMITTENTE possa utilizzare tali servizi nell'ambito dell'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenants. Tali servizi non saranno quindi regolati dalla presente Convenzione di servizio e dai suoi impegni/clausole bipartite.

### 7.3.2. Configurazione del failover

Per impostazione predefinita, il Fornitore fornisce l'implementazione delle risorse del IaaS al COMMITTENTE riservando le risorse e configurando i deployment per utilizzare le Zone di Disponibilità. Spetta al COMMITTENTE scegliere le Zone di Disponibilità tramite l'interfaccia COMMITTENTE.

### 7.3.3. Configurazione del backup

Il servizio di backup è limitato al backup delle macchine virtuali e delle configurazioni di topologia rappresentanti l'ambiente IaaS dei Tenants del COMMITTENTE nell'ambito del Servizio.

Il servizio di backup e la realizzazione della politica di backup del COMMITTENTE è soggetta alla sottoscrizione dello spazio di archiviazione sul mass storage necessario per garantire il servizio. È quindi responsabilità del COMMITTENTE sottoscrivere presso il Fornitore i mezzi tecnici necessari per garantire la politica di backup sul suo perimetro informatico, o adattare la politica di backup ai mezzi implementati. Il Fornitore si impegna a informare il COMMITTENTE in caso di limite di capacità tecnica.

Il Fornitore metterà in atto i mezzi tecnici e umani necessari al backup del sistema ospitato entro i limiti delle risorse sottoscritte dal COMMITTENTE.

Inoltre, nelle aree non supportate dal Fornitore, spetta al COMMITTENTE definire la propria strategia di backup e configurare autonomamente i backup delle VM o effettuare una Richiesta di servizio presso il Fornitore affinché la configurazione dei backup per i server fisici sia implementata se il COMMITTENTE dispone di un contratto di servizio gestito che consente al Fornitore di agire tramite l'interfaccia COMMITTENTE, che è la console di amministrazione messa a disposizione nell'ambito della presente Convenzione di servizio e che dispone delle funzionalità per configurare i backup.

Inoltre, questo servizio avrà come unico impegno quello di tradurre, tramite la configurazione via interfaccia COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per ragioni di flessibilità dell'offerta del Fornitore, il COMMITTENTE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In tal caso, spetta al COMMITTENTE assumersi la responsabilità di questa scelta. Il Fornitore non eseguirà il backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMITTENTE che scegliere la politica "no backup" o scegliere di eseguire backup manuali espone il COMMITTENTE a una perdita definitiva dei dati in caso di Incidente sugli strati inferiori o sugli strati sotto la sua responsabilità nel modello IaaS. In tal caso, sarà impossibile ritenere il Fornitore responsabile del ripristino dei dati poiché non ci sarà nulla da ripristinare. Il Fornitore consiglia sempre di eseguire il backup delle VM.

Per qualsiasi questione riguardante il sistema operativo installato su una macchina virtuale e qualsiasi software o programma eseguito "sopra l'OS", è responsabilità del COMMITTENTE effettuare le operazioni di amministrazione e supervisione all'interno dell'Unione Europea se desidera garantire che l'intera verticalità degli strati del SI sia operata e gestita dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nell'ambito della presente Convenzione di servizio sono indicate nella sezione "Modello di responsabilità condivisa" della presente Convenzione di Servizio.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l'implementazione del Servizio, il COMMITTENTE riconosce che dovrà:

-   Funzionare con una virtualizzazione di tipo VMware nelle versioni supportate dall'editore e fornite dal Fornitore nell'ambito del Servizio;

-   Ricorrere tramite il Fornitore all'utilizzo dello strumento di backup;

-   Dichiarare degli IP fissi dai quali il Fornitore lo autorizzerà ad accedere all'interfaccia COMMITTENTE (Filtraggio tramite whitelist). Le modifiche di questa lista di IP dovranno essere effettuate tramite Richieste di servizio (lista non amministrabile tramite l'interfaccia di amministrazione del Servizio).

## 7.5. Localizzazione del servizio in Francia

Si precisa che nessuna delle operazioni e nessuno dei componenti fisici coinvolti nella fornitura del Servizio, oggetto della presente Convenzione di servizio, è situato al di fuori dell'Unione Europea.

Ciò include in particolare il supporto, la supervisione operativa e la supervisione di sicurezza (SOC) dell'infrastruttura tecnica che fornisce il Servizio. Di fatto, tutto lo stoccaggio, tutte le attività di amministrazione, supervisione e tutti i processi vengono realizzati in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

Salvo le operazioni dei collaboratori e delle agenzie del Fornitore, tutte le operazioni di produzione (incluso lo stoccaggio e l'elaborazione dei dati) e componenti tecnici che forniscono il Servizio sono situati nei Datacenter basati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio

I collaboratori di Cloud Temple che intervengono nel perimetro del Servizio operano dalle agenzie di Cloud Temple tutte situate
esclusivamente in Francia. Queste agenzie si trovano in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità che i dipendenti di Cloud Temple lavorino a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza riguardo gli accessi a distanza, in particolare per quanto riguarda gli accessi VPN. Questi accessi remoti sono attuati conformemente ai requisiti del referenziale SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto a corredo del servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere il COMMITTENTE nella gestione, risoluzione dei problemi e ottimizzazione delle
loro risorse distribuite. Questo servizio copre una vasta gamma di attività, dall'aiuto nella configurazione iniziale dei servizi
al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e delle funzionalità del servizio di supporto:

-   Assistenza nella messa in opera iniziale dell'utilizzo del Servizio;
-   Assistenza nella risoluzione di incidenti;
-   Assistenza nella risoluzione dei problemi;
-   Monitoraggio e consulenza sull'ottimizzazione del fondamento tecnico.
Dans le quadro del servizio di supporto, il Fornitore non si sostituisce al COMMITTENTE nell'uso del Servizio. Il COMMITTENTE rimane interamente responsabile della configurazione, dell'operazione delle sue VM e dei suoi Tenant, e della gestione di tutti gli elementi (dati e applicazioni inclusi) che ha memorizzato o installato sulle infrastrutture del Fornitore. Il servizio di supporto tecnico è fornito in accordo con le Condizioni Generali di Vendita e di Utilizzo, il Fornitore essendo tenuto a una obbligazione di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in maniera ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti presso il Fornitore e dal far intervenire le squadre del Fornitore presso i suoi propri clienti o terzi non inclusi nel Contratto. Il Fornitore si riserva il diritto di rifiutare qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità di lavoro di supporto associate.

### 7.6.2. Richiesta del servizio di supporto tecnico 

Il supporto tecnico è accessibile tramite un sistema di ticket attraverso la console COMMITTENTE ed è disponibile durante le ore normali di ufficio, escluse le festività (8h - 18h; Lunedì -- Venerdì; calendario e orari francesi). Per le emergenze che si verificano al di fuori dell'orario lavorativo, in particolare gli incidenti che incidono significativamente sulla produzione, il servizio di reperibilità può essere contattato tramite un numero comunicato al COMMITTENTE all'inizio del Servizio.

Per ogni richiesta o Incidente, è imperativo generare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprendente tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia tramite la console di gestione o a seguito di una chiamata telefonica, viene automaticamente creato un ticket. Durante la dichiarazione di un Incidente, è essenziale che il COMMITTENTE fornisca al Fornitore il massimo dei dettagli sul problema riscontrato. Questa procedura è cruciale per permettere una valutazione adeguata della situazione, la sua priorizzazione e una diagnosi efficace.

Il Cliente riceve quindi una conferma via email, indicando la creazione del ticket e il suo numero unico. Il COMMITTENTE può consultare lo stato e la cronologia delle sue richieste e dichiarazioni di Incidente direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti 

Durante una dichiarazione di un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il Cliente deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie e effettuando i test richiesti. Il Fornitore può accedere al Servizio del Cliente per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono giudicati funzionali e l'Incidente non è imputabile al Fornitore, il Cliente ne sarà informato. Su richiesta del Cliente, il Fornitore può proporre Servizi Professionali per identificare l'origine del problema, addebitabile previo accordo per intervalli di 30 minuti.

Nel caso in cui l'Incidente sia di responsabilità del Fornitore o di uno dei suoi subappaltatori, questi completa la diagnosi e si impegna al ripristino del Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e i dati del Fornitore, questi elementi essendo considerati probanti per accordo delle Parti.

### 7.6.4. Processo di prioritizzazione delle lavorazioni 

La determinazione del livello di priorità di un dossier si basa su un'analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di criticità:

-   I livelli di impatto sono definiti nel seguente modo:

| Livello di impatto | Descrizione                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impatto I1       | I servizi del Fornitore sono interrotti                                                                    |
| Impatto I2       | I servizi del Fornitore sono degradati                                                                       |
| Impatto I3       | I servizi del Fornitore sono attualmente stabili, ma mostrano segni di potenziale declino a lungo termine |

-   I livelli di criticità sono definiti nel seguente modo:

| Livello di criticità | Descrizione                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticità C1        | I servizi del Fornitore si degradano a una velocità preoccupante                               |
| Criticità C2        | I servizi del Fornitore si deteriorano progressivamente col tempo                          |
| Criticità C3        | I servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative |

-   Sulla base di un'analisi approfondita della situazione, tenendo conto degli elementi che determinano l'Impatto e la Criticità, viene assegnata una priorità al ticket conformemente alla matrice di decisione di seguito:

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

Il Fornitore si impegna a garantire un monitoraggio continuo delle prestazioni e dell'integrità della sicurezza della propria infrastruttura tecnica che eroga il Servizio, vigilando sul loro funzionamento ottimale.

L'indisponibilità di un servizio, che è oggetto di un indicatore di prestazione, è riconosciuta dal momento in cui viene identificata dal sistema di supervisione del Fornitore, o a seguito di una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, al fine di garantire un calcolo preciso e corretto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal ripristino completo del servizio, confermata sia dagli strumenti di supervisione del Fornitore, sia da un feedback dell'utente, garantendo così una ripresa effettiva delle operazioni e una misurazione fedele della durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura 

Il Fornitore si impegna a mantenere un livello di disponibilità e prestazioni conforme agli standard definiti per ogni periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLA) si applicano a condizione che il COMMITTENTE implementi i propri sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza del rispetto di queste condizioni da parte del COMMITTENTE,
quest'ultimo si vedrà nell'incapacità di rivendicare l'applicazione degli SLA interessati, i quali sono specificamente identificati con un asterisco (\*). L'accessibilità agli SLA avviene tramite l'interfaccia COMMITTENTE. Le misurazioni si intendono calcolate mensilmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilità della potenza di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 3     : IC-INFRA_SNC-03** – Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
- **SLA 5     : IC-INFRA_SNC-05** – Accesso a Internet: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.

_**Note**_ : 

- *In risposta a un attacco di tipo denial of service distribuito (DDoS), il Fornitore si riserva il diritto di regolare la propria configurazione di routing internet per limitare l'impatto di tale attacco e salvaguardare la propria infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE è mirato, il Fornitore può utilizzare la tecnica del blackholing tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP mirato a monte presso i suoi fornitori, al fine di proteggere le risorse del COMMITTENTE così come quelle di altri COMMITTENTI e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il COMMITTENTE ad adottare misure simili, come l'uso di software di firewall per applicazioni web disponibili sul mercato, e configurare attentamente i propri gruppi di sicurezza attraverso l'API di comando.*
- *Il Fornitore insiste sulla necessità per il COMMITTENTE di minimizzare le aperture di flussi, evitando in particolare di rendere accessibili le porte 
di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) dall'intera Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE

-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, assicurata in continuo, 24 ore su 24 e 7 giorni su 7.
-   SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su base 24h/24, 7g/7.

## 8.3. Impegno di disponibilità del supporto

- **SLA 8      : IC-INFRA_SNC-08** – Ecco gli impegni di performance del supporto tecnico del Fornitore per gli incidenti, escluse le manutenzioni programmate:

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
| Richiesta di servizio | 4h                                  | 90%                     |

*Nota:*

- *Il tempo per la Garanzia di Tempo di Intervento (GTI) è calcolato a partire dalla differenza tra il momento in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
- *L'investigazione degli incidenti riguardanti i COMMITTENTI non comprenderà interventi remoti sui server ospitati del COMMITTENTE. Questo supporto sarà limitato alla spiegazione delle metriche disponibili relative all'ambiente del COMMITTENTE, al fine di facilitare la comprensione degli incidenti o dei problemi di performance riscontrati. Sulla base dei risultati di questa analisi, potranno essere suggerite delle raccomandazioni.* 

## 8.4. Impegno di disponibilità dello storage oggetti S3

- **SLA 10      : IC-INFRA_SNC-10** – Ecco gli impegni di disponibilità per lo storage oggetti S3:

| Indicatore        | Impegno                                           | Obiettivo di disponibilità |
| ----------------- | ------------------------------------------------- | -------------------------- |
| IC-INFRA-SNC-10.1 | Durata di conservazione di un oggetto in una regione | 99.9999999% / anno         |
| IC-INFRA-SNC-10.2 | Disponibilità delle API di Storage Oggetti S3          | 99.99%                     |
| IC-INFRA-SNC-10.3 | Latenza massima di accesso a un oggetto in una regione | 150 ms                     |

Note:

- Il Servizio di Storage Oggetti è specificamente progettato per lo storage di oggetti e deve essere impiegato esclusivamente a questo scopo, **escludendo categoricamente il suo utilizzo in modalità blocco**. Utilizzare la modalità blocco con metodi deviati, includendo ad esempio l'uso di *"FUSE" in un ambiente Linux*, costituisce una violazione dei termini d'uso enunciati. Nessun incidente, malfunzionamento o danno derivante da tale uso non conforme sarà coperto dagli Accordi di Livello di Servizio (SLA) definiti in questa convenzione del servizio.
- La garanzia di durabilità è condizionata a un utilizzo dei servizi conforme alle migliori pratiche e standard attuali, ed esclude esplicitamente qualsiasi modifica dei dati, sia essa intenzionale o accidentale, risultante da azioni intraprese dal COMMITTENTE.

## 8.5. Precisazioni riguardanti l'impegno di backup

La strategia di backup implementata per il COMMITTENTE, è condizionata dalla sottoscrizione alle unità di lavoro adeguate.

Il Fornitore si impegna a fornire una soluzione di backup che permetterà al COMMITTENTE di applicare le politiche di backup desiderate.

È precisato che il perimetro del Fornitore si limita alla messa a disposizione di un servizio di backup e che è responsabilità del COMMITTENTE supervisionare tramite l'interfaccia COMMITTENTE la corretta esecuzione delle politiche associate.

È inoltre precisato che la gestione delle capacità di storage dello spazio di storage dedicato ai backup, rimane a carico e responsabilità del COMMITTENTE. Il Fornitore mette a disposizione il tasso di utilizzo tramite la console.

*Esempio: Non backup di una macchina virtuale:*

*È responsabilità del COMMITTENTE verificare / supervisionare la corretta esecuzione delle politiche di backup, nel caso in cui il COMMITTENTE riscontri che una macchina virtuale non è stata salvata, spetta a lui verificarne la causa. Il COMMITTENTE potrà richiedere il Supporto del Fornitore secondo il livello di supporto sottoscritto per essere assistito.*

**Il SLA 8 : IC-INFRA_SNC-08 e SLA 9**, sarà applicabile esclusivamente in caso di un Incidente del servizio di backup.

# 9. Organizzazione della relazione contrattuale

## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna a:

- informare il suo COMMITTENTE adeguatamente (ad esempio in caso di limite di capacità delle risorse tecniche che forniscono il Servizio).

- informare formalmente il COMMITTENTE e con un preavviso di un mese, di qualsiasi cambiamento giuridico, organizzativo o tecnico che potrebbe avere un impatto sulla conformità del Servizio con i requisiti di protezione contro leggi extra-europee (19.6 del referente SNC v3.2).

- fornire al COMMITTENTE interfacce e servizi che siano almeno in lingua francese.

- studiare e tenere in considerazione le esigenze settoriali specifiche legate ai tipi di informazioni affidate dal COMMITTENTE nell'ambito dell'implementazione del servizio e nei limiti delle responsabilità del Fornitore.

- non divulgare alcuna informazione relativa alla prestazione a terzi, tranne che con autorizzazione formale e scritta del COMMITTENTE.

- mettere a disposizione tutte le informazioni necessarie per realizzare audit di conformità in accordo alle disposizioni dell'articolo 28 del GDPR.

- rendere conto al COMMITTENTE, tramite la presente Convenzione di servizio, di qualsiasi Incidente di sicurezza che impatti il Servizio o l'uso che il COMMITTENTE fa del Servizio (incluse le informazioni del COMMITTENTE).

- autorizzare un prestatore di audit della sicurezza dei sistemi di informazione (PASSI) qualificato, incaricato dal Fornitore, a verificare il servizio così come il suo sistema informatico, in accordo al piano di controllo del SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per portare a termine gli audit di conformità delle disposizioni dell'articolo 28 del GDPR, condotti dal committente o da un terzo incaricato.

- fornire, in qualità di responsabile del trattamento, come stabilito dall'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), assistenza e consigli al COMMITTENTE avvisandolo qualora un'istruzione emessa da quest'ultimo sia suscettibile di costituire una violazione delle norme di protezione dei dati.
 
- notificare per iscritto, quando un progetto impatta o è suscettibile di impattare il livello di sicurezza del Servizio, il COMMITTENTE dei potenziali impatti, delle misure di mitigazione messe in atto, nonché dei rischi residui che lo riguardano.

- documentare e implementare tutte le procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali applicabili al servizio, così come i requisiti specifici del COMMITTENTE, definiti da quest'ultimo e previsti dal Contratto. Su richiesta del COMMITTENTE, il modulo Documentazione dell'interfaccia COMMITTENTE consentirà una condivisione sicura di questi documenti.

- fornire, su richiesta del COMMITTENTE, gli elementi di valutazione dei rischi relativi alla sottoposizione dei dati del COMMITTENTE alle leggi di uno Stato non membro dell'Unione Europea.

Su richiesta formale e scritta del COMMITTENTE, il Fornitore si impegna a:

1. Rendere accessibili al COMMITTENTE il regolamento interno e la carta etica del Fornitore;

2. Rendere accessibili al COMMITTENTE le sanzioni previste in caso di violazione della politica di sicurezza;

3. Fornire al COMMITTENTE tutti gli eventi che lo riguardano all'interno degli elementi di registrazione del Servizio;

4. Alla fine del Contratto, il Fornitore si impegna a eliminare i dati e le Informazioni tecniche relativi al COMMITTENTE, in conformità con la «procedura di cancellazione dei dati alla fine del Contratto» descritta nella presente Convenzione di servizio.

5. assicurare una cancellazione sicura di tutti i dati del COMMITTENTE mediante riscrittura completa di tutti i supporti che hanno ospitato i suoi dati nel contesto del Servizio.

6. fornire l'elenco completo dei terzi autorizzati ad accedere alle infrastrutture contenenti i dati.
Le Fornitore manterrà aggiornata e renderà disponibile al COMMITTENTE la lista esaustiva dei terzi autorizzati ad accedere alle infrastrutture che contengono i dati, informando quest'ultimo di qualsiasi cambiamento relativo ai subappaltatori. Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, a sapere la dignità umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto, nonché il rispetto dei diritti umani. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell'Unione Europea relativi al rispetto della dignità umana, alla libertà, all'uguaglianza, alla democrazia e allo stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore

A causa di tutte le definizioni e condizioni menzionate nella presente Convenzione di servizio, le responsabilità del Fornitore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione « Modello di responsabilità condivisa » della presente Convenzione di servizio, limita effettivamente l'implicazione del Fornitore nei livelli di funzionamento che vanno "al di sopra" della fornitura di risorse di calcolo, rete, archiviazione e backup. Ciò esclude in particolare senza limitarsi a:

    -   La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicativi, ecc.);

    -   Il mantenimento aggiornato degli OS e altri software installati dal COMMITTENTE sulle sue macchine nei suoi Tenant;

    -   La sicurezza dei programmi, software e applicativi installati sulle macchine virtuali;

    -   L'aggiornamento delle macchine virtuali;
  
    -   Il backup dei dati a livello applicativo.

2.  Il Fornitore non può assumere impegni di backup dei Tenant del COMMITTENTE senza che il COMMITTENTE abbia precedentemente sottoscritto le unità operative adeguate.

3.  Il Fornitore non può rivendicare la proprietà dei dati trasmessi e generati dal COMMITTENTE. Infatti, questi sono di proprietà del COMMITTENTE.

4.  Il Fornitore sottolinea che non può in alcun caso sfruttare i dati trasmessi e generati dal COMMITTENTE senza la preventiva convalida di quest’ultimo.
   
5.  Il Fornitore si solleva da ogni responsabilità sui componenti fisicamente ospitati e gestiti dal Fornitore, ma di proprietà diretta del COMMITTENTE o di un terzo con cui il COMMITTENTE ha stipulato un contratto. L'hosting di componenti fisici dei clienti non fa parte del Servizio ed è quindi fuori dall'ambito della presente Convenzione di servizio. È responsabilità del COMMITTENTE valutare il livello di adesione o dipendenza che questi componenti introducono nei confronti del Servizio IaaS qualificato SecNumCloud.

## 9.3. Limitazione d'accesso

Nell'ambito del Servizio, al Fornitore è formalmente vietato accedere ai Tenant appartenenti al COMMITTENTE senza previa autorizzazione. È responsabilità del COMMITTENTE fornire gli accessi necessari al personale del Fornitore, secondo le esigenze specifiche dell'hosting e, se applicabile, dei servizi professionali di supporto, se questa opzione è stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che questi accessi sono concessi esclusivamente per le esigenze legate alla prestazione di servizi convenuti, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del servizio del Fornitore è strettamente vietato. Nel caso in cui una specifica esigenza tecnica richiedesse tale accesso, questo potrebbe essere stabilito solo dopo aver chiaramente notificato il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurandosi che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio Secure Temple

Il Fornitore gestisce la lista dei partner terzi partecipanti alla fornitura del Servizio. Questi terzi sono editori, fornitori (del Fornitore) e altri fornitori che partecipano alla fornitura del Servizio. Il Fornitore applica le seguenti misure a questi terzi:

-   Il Fornitore richiede ai terzi partecipanti alla realizzazione del servizio, nel loro contributo al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

-   Il Fornitore stipula con ciascuno dei terzi partecipanti alla realizzazione del servizio, clausole di audit che permettono a un organismo di qualificazione di verificare che questi terzi rispettino i requisiti legali e i requisiti SNC, consentendo al Fornitore di rispettare i propri impegni nella presente Convenzione di servizio.

-   Il Fornitore implementa una procedura che consente di controllare regolarmente le misure messe in atto dai terzi partecipanti alla realizzazione del servizio per rispettare i requisiti del Fornitore affinché rispetti i suoi impegni nella presente Convenzione di servizio.

-   Il Fornitore implementa una procedura di monitoraggio dei cambiamenti apportati dai terzi partecipanti alla realizzazione del servizio che possono influenzare il livello di sicurezza del sistema di informazione del servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

In promemoria, il Fornitore fornisce al COMMITTENTE una piattaforma di esecuzione di macchine virtuali, la configurazione delle quali è a carico del COMMITTENTE. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Fornitore definisce tramite le sue interfacce politiche di backup automatiche. Ma è a carico del COMMITTENTE l'attivazione di queste politiche di backup e quindi l'attivazione delle macchine virtuali.

Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione SNC ad auditare il Servizio e l'infrastruttura tecnica che fornisce il Servizio.

## 9.6. Diritti del COMMITTENTE

In qualsiasi momento durante la relazione contrattuale, il COMMITTENTE può presentare una reclamo relativo al servizio qualificato presso l'ANSSI.

In qualsiasi momento, il COMMITTENTE può richiedere al Fornitore di rendergli accessibile il suo regolamento interno e la sua carta etica.

## 9.7. Cancellazione dei dati alla fine del Contratto

Alla fine del contratto, che arrivi alla sua scadenza o che sia risolto per qualsiasi motivo, il Fornitore si impegna a procedere alla cancellazione sicura di tutti i dati del COMMITTENTE, compresi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un preavviso formale, rispettando un periodo di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno quindi cancellati entro un massimo di trenta (30) giorni successivi a questa notifica.

Per attestare questa cancellazione, il Fornitore consegnerà al COMMITTENTE un certificato che conferma la cancellazione dei dati.

# 10. Ciclo di vita della presente Convenzione di servizio

## 10.1. Entrata in vigore della Convenzione di servizio

La presente Convenzione di servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, l'archiviazione e il trattamento dei dati effettuati nell'ambito della pre-vendita, dell'implementazione, della cessazione del Servizio, sono fatti nel rispetto della legislazione vigente.

## 10.2. Evoluzioni della Convenzione di servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. Queste proposte di cambiamento saranno esaminate dalle Parti, autorizzate a determinare gli aspetti che necessitano di una formalizzazione scritta.

Si conviene che qualsiasi evoluzione della Convenzione di servizio, dopo la convalida, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la stesura e la firma di un addendum al Contratto in corso.

I fattori che possono indurre una revisione di questa Convenzione di servizio includono, senza limitarsi a:

-   L'evoluzione dell'infrastruttura tecnica che fornisce il Servizio IaaS;
-   Gli aggiustamenti apportati ai servizi implementati dal Fornitore per fornire il Servizio;
-   Le variazioni degli impegni presi e delle sanzioni applicabili;
-   Le riconfigurazioni organizzative all'interno del COMMITTENTE o del Fornitore;
-   L'espansione o la riduzione dell'ambito di applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è registrata nel preambolo del documento per facilitare il monitoraggio.

### 10.2.1. Evoluzioni innescate dal COMMITTENTE

Le evoluzioni della Convenzione di servizio possono avere, tra l'altro, come origine:

-   Un'evoluzione dell'infrastruttura gestita dal Fornitore;

-   Una modifica dei servizi implementati dal Fornitore;

-   Una modifica degli impegni sui livelli dei servizi da parte del Fornitore.

### 10.2.2. Evoluzioni innescate dal Fornitore

Qualsiasi modifica della Convenzione di servizio è soggetta ad accettazione da parte del COMMITTENTE. Si comprende che qualsiasi modifica o integrazione validata che modifichi gli elementi finanziari del Contratto, possa comportare la firma di un addendum a quest'ultimo.

## 10.3. Reversibilità

Inoltre, Cloud Temple si impegna a permettere una revisione della presente Convenzione di servizio (che preveda in particolare la sua risoluzione) senza penalità per il COMMITTENTE in caso di perdita della qualificazione SecNumCloud.
I Servizi non comprendono un'obbligo di reversibilità (ovvero, l'assistenza al Cliente per migrare il proprio sistema verso un altro Fornitore) ad eccezione della messa a disposizione del COMMITTENTE da parte del Fornitore dell'interfaccia COMMITTENTE che permette al COMMITTENTE di salvare e recuperare i propri dati inclusi in particolare i dati di configurazione del loro sistema informativo attraverso una delle seguenti modalità tecniche a scelta del COMMITTENTE: la messa a disposizione di file secondo uno o più formati documentati ed utilizzabili al di fuori del servizio fornito dal Fornitore oppure tramite l'implementazione di interfacce tecniche che permettano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il COMMITTENTE, unico responsabile del proprio sistema, deve fare tutto il possibile per facilitare questa operazione se necessario (il che implica, in particolare, che metta in atto una documentazione rigorosa a tale scopo) e l'elaborazione di piani di reversibilità. Nel caso in cui il COMMITTENTE necessiti di un servizio aggiuntivo, il
Fornitore può offrire una consulenza a tal riguardo nel contesto di un contratto specifico da negoziare.

# 11. Disponibilità, continuità e ripristino del servizio

## 11.1. Gestione degli Incidenti e delle interruzioni

### 11.1.1. Incidenti

#### 11.1.1.1. Tipi di Incidenti trattati nell'ambito della presente Convenzione di servizio

-   Sinistri

-   Guasti e malfunzionamenti

-   Incidenti di sicurezza:

-   Che impattano la disponibilità del servizio

-   Che impattano la riservatezza del servizio

-   Che impattano l'integrità del servizio

#### 11.1.1.2. Trattamento degli incidenti

-   Tempi di risposta

-   Azioni a posteriori

-   Archiviare i documenti che dettagliano gli incidenti di sicurezza.

-   Notifica di violazione di dati personali (online): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Livello di notifica degli Incidenti di sicurezza

Il COMMITTENTE ha la responsabilità di scegliere i livelli di gravità degli Incidenti di sicurezza per i quali desidera essere informato, ad esempio tramite una loro formalizzazione in un PAS applicabile al Servizio.

Per impostazione predefinita, il COMMITTENTE è informato:

-   Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo la scala d'impatto definita nel processo di prioritizzazione dei trattamenti della presente Convenzione di servizio);

-   Delle violazioni dei dati personali per i quali il COMMITTENTE è responsabile del trattamento;

-   Delle violazioni dei dati personali per i quali il Fornitore è responsabile del trattamento e che comportano dati
    personali del COMMITTENTE.

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

La manutenzione garantita consiste nell'implementazione:

-   Del piano di mantenimento in condizioni operative del Servizio per garantire buoni indicatori di disponibilità come si impegna il Fornitore sopra;

-   Del piano di PCA/PRA se sottoscritto dal COMMITTENTE attivato secondo eventuali incidenti che potrebbero verificarsi.

### 11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE

Il Fornitore si vieta, nell'ambito della presente Convenzione di servizio, qualsiasi accesso ai Tenants e allo spazio dell'interfaccia del
COMMITTENTE.

Sarà responsabilità del COMMITTENTE fornire gli accessi necessari al personale del Fornitore. Il COMMITTENTE riconosce che gli accessi saranno utilizzati nell'ambito dell'hosting e in definitiva dell'outsourcing (se sottoscritto dal COMMITTENTE).

### 11.2.3. Accessi remoti di terze parti partecipanti alla fornitura del servizio sul perimetro del COMMITTENTE

Nessun accesso remoto di terze parti partecipanti alla fornitura del Servizio è autorizzato.

Se una necessità tecnica rendesse questo scenario necessario, allora tale tipo di accesso verrebbe realizzato solo dopo notifica del COMMITTENTE giustificazione e ottenimento del suo consenso scritto.

# 12. Procedura di cancellazione dei dati alla fine del Contratto

Alla fine del Contratto, che il Contratto sia giunto alla sua scadenza o per qualsiasi altra causa, il Fornitore garantirà la cancellazione sicura di tutti i dati trattati nell'ambito del Servizio, inclusi i Dati tecnici del COMMITTENTE. Il Fornitore darà un preavviso formale rispettando un termine di ventuno (21) giorni
di calendario. I dati del COMMITTENTE saranno cancellati entro un termine massimo di trenta (30) giorni dalla notifica. Il Fornitore fornirà un certificato di cancellazione dei dati al COMMITTENTE.

# 13. Legge applicabile

## 13.1. In generale

La legge applicabile alla presente Convenzione di servizio è la legge francese.

## 13.2. Rispetto delle leggi e dei regolamenti applicabili

Il Fornitore si impegna sui seguenti punti:

-   L'identificazione dei vincoli legali e normativi applicabili nell'ambito del Servizio;

-   Il rispetto dei vincoli legali e normativi applicabili ai dati affidati al Fornitore;

-   Il rispetto della Legge Informatica e Libertà e del GDPR;

-   L'implementazione di mezzi di protezione dei dati personali;

-   L'implementazione di un processo di monitoraggio legale e normativo;

-   Disporre e mantenere relazioni appropriate o un monitoraggio con le autorità settoriali in relazione alla natura dei dati trattati nell'ambito dei Servizi. Ciò include in particolare l'ANSSI, il CERT-FR e la CNIL.

## 13.3. GDPR

Agendo in qualità di responsabile del trattamento ai sensi dell'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), il Fornitore si impegna:

-   A garantire trasparenza e tracciabilità;

-   A designare un DPO incaricato di definire e implementare le misure di protezione dei dati personali;

-   A fornire assistenza e consulenza al COMMITTENTE in caso di violazione delle regole di protezione dei dati personali identificate dal Fornitore;

-   Una garanzia di sicurezza sui dati trattati (grazie alla qualifica SecNumCloud).

## 13.4. Protezione rispetto al diritto extra-europeo

In caso di ricorso da parte del Fornitore, nell'ambito del Servizio, al servizio di una società terza, inclusi i subfornitori, con sede legale, amministrazione centrale o principale stabilimento in uno Stato non membro dell'Unione Europea o appartenente o controllato da una società terza con sede legale al di fuori dell'Unione Europea, il Fornitore s'impegna affinché questa società terza non abbia accesso ai dati gestiti dal servizio 'Secure Temple'.

Per chiarezza, i dati interessati sono quelli affidati al Fornitore dal COMMITTENTE nonché tutti i Dati tecnici contenenti informazioni sui COMMITTENTI.

Ai fini del presente articolo, il concetto di controllo è inteso come quello menzionato al II dell'articolo L233-3 del codice di commercio.

# 14. FIRME

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, il FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il COMMITTENTE