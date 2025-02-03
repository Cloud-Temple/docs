---
title: Convenzione di Servizio IaaS
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **CONVENZIONE DI SERVIZI IaaS**

| **Destinatari :**                    | **COMMITTENTE**                                    |
| :----------------------------------- | :------------------------------------------------- |
| **Riferimento del documento**        | CT.AM.JUR.ANX_Convenzione di Servizi_IaaS_v2.0     |
| **I vostri interlocutori**           | *Nome* *Cognome*                                   |
|                                      | Account Manager                                    |
|                                      | e-mail : *nome.cognome*@cloud-temple.com           |
| **Data dell'ultimo aggiornamento**   | 03/04/2024                                         |
| **Data di validazione contrattuale** | Giorno GG AAAA                                     |

----------------------------------------------------------------------------------

| **Versione** | **Data**   | **Azione**                               | **Autore**       |
| ------------ | ---------- | ---------------------------------------- | ---------------- |
| v0.1         | 07/06/2022 | Redazione iniziale                       | Lorena ALCALDE   |
| v0.2         | 14/09/2022 | Arricchimento                            | Lorena ALCALDE   |
| v1.0         | 30/12/2022 | Integrazione Indicatori                  | Lorena ALCALDE   |
| v1.1         | 23/01/2023 | Modifica piè di pagina                   | Lorena ALCALDE   |
| v1.2         | 22/05/2023 | Arricchimento                            | Lorena ALCALDE   |
| v1.3         | 29/06/2023 | Arricchimento                            | Lorena ALCALDE   |
| v1.4         | 06/11/2023 | Modifica Capitale e Arricchimento        | Lorena ALCALDE   |
| v1.5         | 30/11/2023 | Arricchimento                            | Lorena ALCALDE   |
| v1.6         | 21/03/2024 | Arricchimento                            | Lorena ALCALDE   |
| v2.0         | 29/03/2024 | Adeguamenti conformità SNC               | Nicolas ABRIOUX  |
| v2.0         | 03/04/2024 | Pubblicazione                            | Lorena ALCALDE   |

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
  - [7.1. Modello di responsabilità condiviso](#71-modello-di-responsabilità-condiviso)
  - [7.2. Presentazione dettagliata del perimetro del Servizio](#72-presentazione-dettagliata-del-perimetro-del-servizio)
    - [7.2.1. Infrastrutture Datacenter](#721-infrastrutture-datacenter)
    - [7.2.2. Infrastruttura software di gestione del Servizio](#722-infrastruttura-software-di-gestione-del-servizio)
    - [7.2.3. Infrastrutture di calcolo](#723-infrastrutture-di-calcolo)
    - [7.2.4. Infrastruttura di archiviazione](#724-infrastruttura-di-archiviazione)
    - [7.2.5. Infrastruttura di rete globale](#725-infrastruttura-di-rete-globale)
    - [7.2.6. Infrastruttura di backup](#726-infrastruttura-di-backup)
    - [7.2.7. Implementazione di soluzioni di ripristino o continuità operativa](#727-implementazione-di-soluzioni-di-ripristino-o-continuità-operativa)
  - [7.3. Limitazioni dei servizi nel modello IaaS qualificato](#73-limitazioni-dei-servizi-nel-modello-iaas-qualificato)
    - [7.3.1. Servizi gestiti in RUN](#731-servizi-gestiti-in-run)
    - [7.3.2. Configurazione del soccorso](#732-configurazione-del-soccorso)
    - [7.3.3. Configurazione del backup](#733-configurazione-del-backup)
  - [7.4. Implementazione del servizio](#74-implementazione-del-servizio)
    - [7.4.1. Prerequisiti tecnici](#741-prerequisiti-tecnici)
  - [7.5. Localizzazione del servizio in Francia](#75-localizzazione-del-servizio-in-francia)
    - [7.5.1. Localizzazione dei Datacenter ospitanti il Servizio](#751-localizzazione-dei-datacenter-ospitanti-il-servizio)
    - [7.5.2. Localizzazione delle agenzie Cloud Temple operanti il servizio](#752-localizzazione-delle-agenzie-cloud-temple-operanti-il-servizio)
  - [7.6. Supporto](#76-supporto)
    - [7.6.1. Natura del supporto che accompagna il servizio](#761-natura-del-supporto-che-accompagna-il-servizio)
    - [7.6.2. Richiesta del servizio di supporto tecnico](#762-richiesta-del-servizio-di-supporto-tecnico)
    - [7.6.3. Processo di gestione degli Incidenti](#763-processo-di-gestione-degli-incidenti)
    - [7.6.4. Processo di priorizzazione dei trattamenti](#764-processo-di-priorizzazione-dei-trattamenti)
    - [7.6.5. Lingua e localizzazione del servizio di supporto](#765-lingua-e-localizzazione-del-servizio-di-supporto)
- [8. Impegni e livelli di servizio](#8-impegni-e-livelli-di-servizio)
  - [8.1. Impegni di disponibilità dell'infrastruttura](#81-impegni-di-disponibilità-dellinfrastruttura)
  - [8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE](#82-impegno-di-disponibilità-dellinterfaccia-committente)
  - [8.3. Impegno di disponibilità del supporto](#83-impegno-di-disponibilità-del-supporto)
  - [8.4. Impegno di disponibilità dello storage oggetti S3](#84-impegno-di-disponibilità-dello-storage-oggetti-s3)
  - [8.5. Precisione riguardo l'impegno di backup](#85-precisione-riguardo-limpegno-di-backup)
- [9. Organizzazione della relazione contrattuale](#9-organizzazione-della-relazione-contrattuale)
  - [9.1. Responsabilità del Fornitore](#91-responsabilità-del-fornitore)
  - [9.2. Limitazione delle responsabilità del Fornitore](#92-limitazione-delle-responsabilità-del-fornitore)
  - [9.3. Limitazione di accesso](#93-limitazione-di-accesso)
  - [9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio Secure Temple](#94-responsabilità-dei-terzi-partecipanti-alla-fornitura-del-servizio-secure-temple)
  - [9.5. Responsabilità e obblighi del COMMITTENTE](#95-responsabilità-e-obblighi-del-committente)
  - [9.6. Diritti del COMMITTENTE](#96-diritti-del-committente)
  - [9.7. Cancellazione dei dati a fine Contratto](#97-cancellazione-dei-dati-a-fine-contratto)
- [10. Ciclo di vita della presente Convenzione di servizio](#10-ciclo-di-vita-della-presente-convenzione-di-servizio)
  - [10.1. Entrata in vigore della Convenzione di servizio](#101-entrata-in-vigore-della-convenzione-di-servizio)
  - [10.2. Evoluzioni della Convenzione di servizio](#102-evoluzioni-della-convenzione-di-servizio)
    - [10.2.1. Evoluzioni innescate dal COMMITTENTE](#1021-evoluzioni-innescate-dal-committente)
    - [10.2.2. Evoluzioni innescate dal Fornitore](#1022-evoluzioni-innescate-dal-fornitore)
  - [10.3. Reversibilità](#103-reversibilità)
- [11. Disponibilità, continuità e ripristino del servizio](#11-disponibilità-continuità-e-ripristino-del-servizio)
  - [11.1. Gestione degli Incidenti e delle interruzioni](#111-gestione-degli-incidenti-e-delle-interruzioni)
    - [11.1.1. Incidenti](#1111-incidenti)
      - [11.1.1.1. Tipi di Incidente trattati nel quadro di questa Convenzione di servizio](#11111-tipi-di-incidente-trattati-nel-quadro-di-questa-convenzione-di-servizio)
      - [11.1.1.2. Trattamento degli incidenti](#11112-trattamento-degli-incidenti)
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
  - [13.4. Protezione nei confronti del diritto extraeuropeo](#134-protezione-nei-confronti-del-diritto-extraeuropeo)
- [14. FIRME](#14-firme)

----------------------------------------------------------------------------------

# 3. Preliminare e Glossario

## 3.1. Preliminare

Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS qualificato SecNumCloud sotto la denominazione di « *Secure Temple* ».

"La presente convenzione di servizio integra ed è complementare ai termini e condizioni generali di vendita e uso del Fornitore. È
inteso che i documenti contrattuali si interpretano in modo coerente tra loro. In caso di contraddizione o divergenza tra i
termini dei documenti contrattuali, i documenti prevarranno l'uno sull'altro nel seguente ordine:

1. Termini e Condizioni Generali di Vendita e Utilizzo (CGVU)
2. Convenzione di Servizio SecNumCloud IaaS
3. Convenzione di Servizio SecNumCloud PaaS
4. Convenzione specifica particolare
5. Piano di Assicurazione Sicurezza (PAS)
6. Condizioni Particolari di Utilizzo (CPU)

## 3.2. Glossario

Nella presente Convenzione di servizio, il **COMMITTENTE**, il **Fornitore** e le **Parti** sono identificati nel Contratto
al quale è allegata la presente Convenzione di servizio.

Le espressioni di seguito utilizzate nella presente Convenzione di servizio saranno interpretate conformemente alle definizioni che sono
loro attribuite qui di seguito:

- **Cambiamento :** Qualsiasi aggiunta, modifica o eliminazione che impatta il Servizio, autorizzato, pianificato o preso in carico.


- **Changement standard :** Cambiamento che è soggetto a una procedura, con modalità di messa in produzione e impatti (anche finanziari) conosciuti e accettati in anticipo dalle Parti. Viene quindi integrato nel catalogo dei cambiamenti standard, e può avere, a seconda dei casi, una GTI e una GTR.

- **Contrat :** si riferisce al contratto sottoscritto dal COMMITTENTE con il Fornitore per permettere al COMMITTENTE di beneficiare del Servizio, al quale è allegata la presente Convenzione di servizio.

- ***Convention de service :** Questo documento, redatto nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e d'Uso (CGVU), e in conformità con i requisiti del Riferimento SecNumCloud.

- **Demande de service :** richiesta del COMMITTENTE al Fornitore nell'ambito del Servizio, che copre le operazioni non realizzabili dal COMMITTENTE tramite l'interfaccia COMMITTENTE e le richieste di supporto nell'ambito del Servizio. Le richieste di servizio sono limitate a quelle previste dal Contratto o dalla presente Convenzione di servizio.

- **Disponibilité :** Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

- **Données techniques** : comprende l'insieme dei dati manipolati per fornire il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i registri dell'infrastruttura tecnica, la configurazione degli accessi, l'annuario, i certificati\...

- **Evènement :** Un \"evento\" è qualsiasi occorrenza rilevabile o identificabile che può avere importanza per la gestione del Servizio.

- **Hyperviseur :** Sistema operativo che consente l'esecuzione di macchine virtuali su una lama di calcolo.

- **Incident :** Qualsiasi evento imprevisto che disturba il normale funzionamento del Servizio o compromette la sicurezza dei dati.

- **Incident de sécurité :** Qualsiasi evento nel perimetro del Servizio:

  - Di natura intenzionalmente malevola;
  - Di natura accidentale che compromette l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
  - Compromette le misure di sicurezza esistenti.
    Le compromissioni della Disponibilità di origine non malevola non sono considerate come un Incidente di sicurezza (guasto hardware, bug, malfunzionamento, calamità naturale...).

- **Interface COMMANDITAIRE :** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, comprendente una console di amministrazione web e un'API.

- **Mise en production :** azione(i) di amministrazione di realizzazione del Cambiamento quando questo è approvato (il cambiamento, nel senso ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).

- **Problème** : causa di uno o più Incidenti ricorrenti, causa di un Potenziale Incidente (situazione a rischio).

- **Région :** si riferisce a un insieme geograficamente delimitato di zone di disponibilità cloud, che forniscono servizi di rete, calcolo e storage per ottimizzare la latenza, la performance e la conformità regolamentare locale.

- **Service :** si riferisce al servizio IaaS qualificato SecNumCloud « Secure Temple », fornito al COMMITTENTE dal Fornitore dalle infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione « Descrizione del Servizio » della presente Convenzione di servizio.

- **Secure Temple** : si riferisce al servizio IaaS qualificato SecNumCloud, proposto dalla società Cloud Temple, come definito nella certificazione consultabile sul sito dell'ANSSI e fornita in allegato alla presente Convenzione di servizio.

- **Sinistre :** si riferisce a un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni significativi alla Parte colpita.

- **Supervision :** Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi monitorati, una prerogativa che appartiene alle operazioni di Amministrazione.

- **Tenant :** Un'istanza isolata riservata a un utente o gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

- **Zone de Disponibilité (AZ) (Availibility zone) :** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi mediante una distribuzione geografica delle risorse.

# 4. Acronymes

  | **Acronyme** | **Définition**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comitato consultivo sui cambiamenti                            |
  | **CMDB**     | Configuration Management Database -- Banca dati di gestione delle configurazioni        |
  | **COPIL**    | Comitato direttivo                                                                      |
  | **COSTRAT**  | Comitato strategico                                                                     |
  | **COPROJ**   | Comitato Progetto                                                                       |
  | **DB**       | Database (banca dati)                                                                   |
  | **DRP**      | Disaster Recovery Plan (PRA) (Piano di ripristino delle attività)                       |
  | **GTE**      | Garanzia di Tempo di Escalation                                                         |
  | **GTI**      | Garanzia di Tempo di Intervento                                                         |
  | **GTR**      | Garanzia di Tempo di Risoluzione                                                        |
  | **ITIL**     | Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI   |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Mantenimento delle condizioni operative                                                 |
  | **MOA**      | Committente                                                                            |
  | **MOE**      | Direzione dei Lavori                                                                    |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Piano di Assicurazione Qualità                                                          |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Piano di Assicurazione della Sicurezza                                                  |
  | **PASSI**    | Fornitore di Audit di Sicurezza dei Sistemi Informativi                                  |
  | **RFC**      | Request For Change -- Richiesta di cambiamento                                          |
  | **RGPD**     | Regolamento Generale sulla Protezione dei Dati (personali)                              |
  | **RPO**      | Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistro        |
  | **RTO**      | Recovery Time Objective -- Tempo di recupero del servizio in caso di Sinistro           |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Accordo sui livelli di servizio                              |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Centro Operativo di Sicurezza                                                           |
  | **TMA**      | Manutenzione del software da parte terza                                                |
  | **UO**       | Unità di Lavoro                                                                         |
  | **VABE**     | Validazione di Idoneità alla Buona Operabilità                                           |
  | **VABF**     | Validazione di Idoneità al Buon Funzionamento                                            |
  | **VM**       | Virtual Machine (Macchina virtuale)                                                     |
  | **VSR**      | Validazione del Servizio Regolare                                                       |

# 5. Oggetto della presente Convenzione di servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al
COMMITTENTE. L'oggetto è di:

- Specificare i requisiti di prestazione attesi dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

- Enunciare gli obblighi del Fornitore per soddisfare i livelli di servizio concordati;

- Identificare le norme regolamentari applicabili specificamente al Servizio fornito;

- Assicurare uniformità e integrità nella valutazione della qualità del Servizio;

- Garantire l'eccellenza dei servizi forniti, valutata tramite indicatori di performance quantitativi.

Si precisa che, nell'eventualità in cui al Fornitore venga ritirata la qualificazione SecNumCloud, il Contratto potrà essere risolto di
diritto, senza incorrere in penalità, da parte del COMMITTENTE. In tale eventualità, il Fornitore si impegna a informare il COMMITTENTE
di questa squalifica mediante invio di una notifica ufficiale, tramite lettera raccomandata con richiesta di ricevuta di ritorno.
Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de
la qualification initiale.

# 6. Audit

Il Fornitore si impegna a permettere al COMMITTENTE, o a qualsiasi revisore terzo non concorrente designato da quest'ultimo, di consultare tutti i documenti necessari per attestare il rispetto integrale degli obblighi di conformità alle disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione
degli audit.

Con l'accettazione del presente Contratto di servizio, il COMMITTENTE conferisce la sua esplicita autorizzazione a:

1. L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI) e all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al referente SecNumCloud.
2. Un fornitore di audit della sicurezza dei sistemi informativi, debitamente qualificato PASSI ed espressamente designato dal Fornitore, per effettuare audit di sicurezza sul Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio offerto dal Fornitore si caratterizza per la fornitura delle seguenti prestazioni, che si allineano al
principio di responsabilità condivisa presentato nel referente SecNumCloud:

- La fornitura di risorse di calcolo (compute);

- La fornitura di spazi di archiviazione;

- L’accesso a servizi di connettività di rete e Internet;

- L’offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nell'ambito del Servizio è presentato in §7.1.

Si intende che il Fornitore mobiliterà la propria esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali e
conformemente ai requisiti del referente SecNumCloud.

Il Servizio è qualificato SecNumCloud (vedi attestazione in Allegato).

## 7.2. Presentazione dettagliata dell'ambito del Servizio

| Compute               | Risorsa di calcolo del Tenant COMMITTENTE                                                                           |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------ |
| Storage               | Dati di produzione del Tenant COMMITTENTE                                                                           |
| Archiviazione oggetto S3 | messa a disposizione di un'infrastruttura di archiviazione oggetti sovrana multi-AZ e compatibile con le API S3 standard. |
| Backup                | Soggetto a sottoscrizione allo storage di massa appropriato                                                         |
| Infrastruttura di rete | Risorsa di rete del Tenant COMMITTENTE                                                                             |
| Console COMMITTENTE   | Il servizio che consente al COMMITTENTE di accedere al proprio servizio IaaS e di amministrarlo tramite l'interfaccia Shiva  |
| Supporto              | Il servizio di supporto che accompagna i servizi precedenti e solamente questi (*)                                  |

* (*) Nel limite dell'ambito del Servizio qualificato SNC e delle responsabilità del Fornitore in materia *

### 7.2.1. Infrastrutture Datacenter

Il Servizio comprende la fornitura, per ogni Zona di disponibilità, delle prestazioni qualificate di seguito:

- Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con livello di resilienza pari o superiore al Tier 3 dell'Uptime Institute;
- Fornitura di sale tecniche all'interno di datacenter dedicati all'ospitalità delle attrezzature tecniche necessarie alla produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio, e altri componenti necessari;
- Alimentazione elettrica sicura, assicurata da due circuiti elettrici distinti, garantendo la continuità del servizio;
- Fornitura di servizi di climatizzazione, adattati per rispettare le norme e raccomandazioni dei produttori di attrezzature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
- Monitoraggio continuo e metrologia dettagliata, permettendo un preciso monitoraggio e gestione proattiva delle performance e della sicurezza del servizio fornito.

Il Fornitore assicura la fornitura di servizi avanzati di rilevazione e spegnimento incendi, progettati per identificare e neutralizzare efficacemente qualsiasi inizio di incendio all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle apparecchiature
e dei dati. Includono rilevatori di fumo ad alta precisione e dispositivi di estinzione che possono agire rapidamente senza danneggiare l'apparecchiatura informatica. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e
assicurare la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e misure di sicurezza implementate, inclusi i test annuali di trasferimento sui gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per
minimizzare i rischi di guasto e assicurare una reattività ottimale in caso di Incidente. Accettando queste condizioni, il cliente riconosce
l'importanza di queste misure e si impegna a cooperare pienamente per facilitare la loro attuazione. Il COMMITTENTE è inoltre incoraggiato a
prendere conoscenza delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria all'utilizzo del Servizio. Si impegna altresì a mantenere questa console di amministrazione e l'API in condizioni operative ottimali e ad assicurare la loro sicurezza in maniera continuativa.
Questa console di amministrazione e l'API sono designate collettivamente con il termine "interfaccia COMMITTENTE".

Il Fornitore avvisa il COMMITTENTE che un utilizzo anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o al Servizio. Si sottolinea che questa situazione non costituisce un'indisponibilità del Servizio ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Fornitore specifica al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMITTENTE invia richieste identiche a una frequenza superiore, il loro rifiuto non può essere interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle apparecchiature necessarie per
l'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Ciò comprende:

- La fornitura degli chassis tecnici necessari al buon funzionamento delle blade di calcolo;
- La fornitura delle blade di calcolo nelle quantità specificate dal COMMITTENTE e distribuite secondo le zone di disponibilità di sua scelta. È da notare che queste blade di calcolo sono esclusivamente dedicate al COMMITTENTE;
- La messa a disposizione di sistemi operativi di tipo hypervisor, così come la garanzia del mantenimento in condizioni operative e di sicurezza dell'infrastruttura software necessaria per la gestione di questi sistemi operativi. Si deve evidenziare che, sebbene il Fornitore sia responsabile della manutenzione operativa e della sicurezza globale del Servizio, non detiene conoscenze specifiche sui contesti produttivi del COMMITTENTE né sui requisiti relativi ai suoi carichi di lavoro. Pertanto, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle blade di calcolo hypervisor, azione che potrebbe richiedere un riavvio, ricade interamente sul COMMITTENTE. Questa operazione può essere eseguita tramite l'Interfaccia COMMITTENTE.

La scelta del modello di blade di calcolo, selezionato tra il catalogo proposto dal Fornitore, compete al COMMITTENTE.

### 7.2.4. Infrastruttura di archiviazione

Il servizio comprende la fornitura al COMMITTENTE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), che offre diversi
livelli di performance. Questo servizio include:

- L'implementazione e il mantenimento in condizioni operative e di sicurezza della rete SAN dedicata;
- L'installazione e la gestione delle baie di archiviazione condivise tra i clienti, inclusi il mantenimento in condizioni operative e di sicurezza, la supervisione e la metrologia;
- L'implementazione di sistemi automatizzati per l'assegnazione di LUN (Logical Unit Numbers) di archiviazione dedicati all'uso del COMMITTENTE, secondo i volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore distribuisce nell'ambito del Servizio, una rete globale che facilita al COMMITTENTE l'accessibilità dei propri sistemi
ospitati. Questo servizio include:

- La fornitura, il mantenimento in condizioni operative e di sicurezza di tutte le connessioni in fibra ottica che interconnettono le diverse Zone di disponibilità;

- La fornitura, il mantenimento in condizioni operative e di sicurezza delle apparecchiature tecniche necessarie al buon
funzionamento della rete e all'isolamento dei diversi clienti.
L'interconnexion réseau du Tenant COMMITTENTE, a Internet o a reti private, e le apparecchiature di rete, i collegamenti degli operatori e altri
componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete è implementata
conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMITTENTE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue
macchine virtuali. Il Fornitore garantisce il mantenimento in condizioni operative e di sicurezza di questo servizio di backup.
Il Fornitore garantisce che i backup del COMMITTENTE saranno situati al di fuori della Zona di disponibilità dei carichi di lavoro
salvati, a condizione che il COMMITTENTE abbia sottoscritto le Unità operative adeguate.

Questo servizio di backup è limitato al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS
dei Tenant del COMMITTENTE nell'ambito del Servizio. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del
COMMITTENTE dipendono dalla sottoscrizione a unità operative specifiche. Spetta quindi al COMMITTENTE assicurarsi della
disponibilità delle risorse tecniche necessarie presso il Fornitore per implementare la sua politica di backup o
adattare quest'ultima in base ai mezzi disponibili.

Il Fornitore si impegna a notificare il COMMITTENTE in caso di vincoli di capacità e a fornire assistenza e consulenza per
l'ottimizzazione delle risorse. Gli obblighi del Fornitore saranno limitati all'implementazione delle esigenze espresse dal COMMITTENTE
in materia di politica di backup, nell'ambito delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripristino o di continuità operativa

Il Fornitore fornisce al COMMITTENTE l'insieme delle soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso diverse Zone di disponibilità. Spetta al COMMITTENTE la responsabilità di gestire efficacemente questa distribuzione delle risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a tal fine.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

- L'hosting di componenti fisici del COMMITTENTE;

- L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, compresi i collegamenti dell'operatore;

- Qualsiasi servizio di tipo gestito, o TMA;

- Qualsiasi assistenza sulle macchine virtuali a livello di sistema operativo e superiore nella pila di responsabilità IaaS, anche se si tratta di semplice supervisione.

Tuttavia, non è affatto escluso che il COMMITTENTE si avvalga di tali servizi nell'ambito dell'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenant. Questi servizi non saranno quindi disciplinati dalla presente Convenzione di servizio e dai suoi impegni/clausole bipartite.

### 7.3.2. Configurazione del ripristino

Per impostazione predefinita, il Fornitore fornisce la configurazione delle risorse IaaS al COMMITTENTE riservando risorse e configurando i deployment per utilizzare le Zone di disponibilità. Spetta al COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia COMMITTENTE.

### 7.3.3. Configurazione del backup

Il servizio di backup è limitato al backup delle macchine virtuali e delle configurazioni di topologia rappresentanti l'ambiente IaaS dei Tenant del COMMITTENTE nell'ambito del Servizio.

Il servizio di backup e il completamento della politica di backup del COMMITTENTE è soggetto alla sottoscrizione di spazio di archiviazione su mass storage necessario per garantire il servizio. È quindi responsabilità del COMMITTENTE sottoscrivere presso il Fornitore i mezzi tecnici necessari per garantire la politica di backup sul proprio perimetro informatico, o adattare la politica di backup ai mezzi implementati. Il Fornitore si impegna a informare il COMMITTENTE in caso di limiti di capacità tecnica.

Il Fornitore implementerà le risorse tecniche e umane necessarie per il backup del sistema ospitato nei limiti delle risorse sottoscritte dal COMMITTENTE.

Inoltre, nei casi di perimetri non supportati dal Fornitore, spetta al COMMITTENTE definire la propria strategia di backup e configurare autonomamente i backup delle VM o effettuare una Richiesta di servizio presso il Fornitore affinché la configurazione dei backup per i server fisici venga implementata se il COMMITTENTE dispone di un contratto di servizio gestito che consente al Fornitore di agire tramite l'interfaccia COMMITTENTE, che è la console di amministrazione messa a disposizione nell'ambito di questa Convenzione di servizio e che dispone di funzionalità per configurare i backup.

Inoltre, questo servizio si impegnerà solamente a tradurre, tramite la configurazione tramite l'interfaccia COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per ragioni di flessibilità dell'offerta del Fornitore, il COMMITTENTE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In tal caso, spetta al COMMITTENTE assumersi la responsabilità di questa scelta. Il Fornitore non eseguirà il backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMITTENTE che scegliere la politica "no backup" o scegliere di eseguire i backup manualmente espone il COMMITTENTE a una perdita definitiva dei dati in caso di Incidente sugli strati bassi o sugli strati dipendenti dalla sua responsabilità nel modello IaaS. In tal caso, sarà impossibile ritenere il Fornitore responsabile del ripristino dei dati poiché non ci sarà nulla da ripristinare. Il Fornitore raccomanda di effettuare sempre il backup delle VM.

Per qualsiasi questione riguardante il sistema operativo installato su una macchina virtuale e qualsiasi software o programma eseguito "sopra il sistema operativo", è responsabilità del COMMITTENTE realizzare le operazioni di amministrazione e supervisione all'interno dell'Unione Europea se si desidera garantire che tutti gli strati verticali del SI siano operati e gestiti dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nell'ambito della presente Convenzione di servizio sono indicate nella sezione "Modello di responsabilità condivisa" della presente Convenzione di servizio.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l'implementazione del Servizio, il COMMITTENTE riconosce che dovrà:

- Funzionare con una virtualizzazione di tipo VMware nelle versioni supportate dall'editore e fornite dal Fornitore nell'ambito del Servizio;

- Avvalersi tramite il Fornitore dell'utilizzo dello strumento di backup;

- Dichiarare IP fissi dai quali il Fornitore lo autorizzerà ad accedere all'interfaccia COMMITTENTE (Filtro tramite whitelist). Le modifiche di questa lista di IP devono essere effettuate tramite Richieste di servizio (lista non amministrabile tramite l'interfaccia di amministrazione del Servizio).

## 7.5. Localizzazione del servizio in Francia

È specificato che nessuna delle operazioni e nessun componente fisico coinvolto nella fornitura del Servizio, di cui la presente Convenzione di servizio è oggetto, è situato al di fuori dell'Unione Europea.

Questo include in particolare il supporto, la supervisione operativa e la supervisione della sicurezza (SOC) dell'infrastruttura tecnica che eroga il Servizio. Di fatto, tutto lo stoccaggio, tutte le operazioni di amministrazione, di supervisione e tutti i trattamenti sono realizzati in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

Salvo le operazioni dei collaboratori e delle agenzie del Fornitore, l'insieme delle operazioni di produzione (incluso lo stoccaggio e il trattamento dei dati) e componenti tecnici che erogano il Servizio sono situati nei Datacenter con sede in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio

I collaboratori di Cloud Temple che intervengono sul perimetro del Servizio operano dalle agenzie di Cloud Temple tutte situate esclusivamente in Francia. Queste agenzie sono situate in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità dei dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza riguardante gli accessi a distanza, in particolare riguardo agli accessi VPN. Questi accessi remoti sono implementati in conformità ai requisiti del riferimento SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere il COMMITTENTE nella gestione, risoluzione dei problemi e ottimizzazione delle
risorse dispiegate. Questo servizio copre una vasta gamma di attività, dall'assistenza alla configurazione iniziale dei servizi
fino al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e funzionalità del servizio di supporto:

- Assistenza all'implementazione iniziale dell'utilizzo del Servizio;
- Assistenza alla risoluzione di incidenti;
- Assistenza alla risoluzione di problemi;
- Monitoraggio e consulenza sull'ottimizzazione della base tecnica.
Dans le quadro del servizio di supporto, il Fornitore non si sostituisce al COMMITTENTE nell'uso del Servizio. Il COMMITTENTE rimane interamente responsabile della configurazione, del funzionamento delle sue VM e dei suoi Tenant, e della gestione di tutti gli elementi (inclusi dati e applicazioni) che ha memorizzato o installato sulle infrastrutture del Fornitore. Il servizio di supporto tecnico è fornito in accordo con le Condizioni Generali di Vendita e di Utilizzo, e il Fornitore è tenuto a un obbligo di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi dal richiedere servizi non sottoscritti con il Fornitore e dal coinvolgere le squadre del Fornitore presso i suoi stessi clienti o terzi non inclusi nel Contratto. Il Fornitore si riserva il diritto di respingere qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità di lavoro di supporto associate.

### 7.6.2. Richiesta del servizio supporto tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket attraverso la console del COMMITTENTE ed è disponibile durante le ore normali d'ufficio esclusi i giorni festivi (8h - 18h; Lunedì -- Venerdì; calendario e orari francesi). Per le emergenze che si verificano al di fuori dell'orario lavorativo, in particolare per gli incidenti che influiscono significativamente sulla produzione, il servizio di reperibilità può essere contattato tramite un numero comunicato al COMMITTENTE all'inizio del Servizio.

Per ogni richiesta o Incidente, è imperativo generare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprensiva di tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia tramite la console di gestione sia a seguito di una chiamata telefonica, viene automaticamente creato un ticket. Alla dichiarazione di un Incidente, è essenziale che il COMMITTENTE fornisca al fornitore il massimo dei dettagli sul problema
riscontrato. Questo approccio è cruciale per consentire una valutazione adeguata della situazione, la sua prioritizzazione e una diagnosi efficace.

Il Cliente riceve quindi una conferma via e-mail, che indica la creazione del ticket e il suo numero unico. Il COMMITTENTE può consultare
lo stato e la cronologia delle sue richieste e dichiarazioni di Incidenti direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti

Alla dichiarazione di un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il Cliente deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie ed eseguendo i test richiesti. Il Fornitore può accedere al Servizio del Cliente per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono ritenuti funzionali e l'Incidente non gli è imputabile, il Cliente sarà informato. Su richiesta del Cliente, il Fornitore può offrire Servizi Professionali per identificare l'origine del problema, fatturabili previo accordo in tranche da 30 minuti.

Nel caso in cui l'Incidente sia di responsabilità del Fornitore o di uno dei suoi subfornitori, quest'ultimo completa la diagnosi e si impegna a ripristinare il Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e sui dati del Fornitore, questi elementi sono considerati probanti per accordo delle Parti.

### 7.6.4. Processo di prioritizzazione dei trattamenti

La determinazione del livello di priorità di un fascicolo si basa su un'analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di criticità:

- I livelli di impatto sono definiti come segue:

| Livello di impatto | Descrizione                                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Impatto I1         | Uno o più servizi del Fornitore sono interrotti                                                                         |
| Impatto I2         | Uno o più servizi del Fornitore sono degradati                                                                          |
| Impatto I3         | Uno o più servizi del Fornitore sono attualmente stabili, ma mostrano segni di potenziale declino a lungo termine       |

- I livelli di Criticità sono definiti come segue:

| Livello di criticità | Descrizione                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| Criticità C1        | Uno o più servizi del Fornitore si degradano a una velocità preoccupante                               |
| Criticità C2        | Uno o più servizi del Fornitore si degradano progressivamente nel tempo                                |
| Criticità C3        | Uno o più servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative     |

- Sulla base di un'analisi approfondita della situazione, prendendo in considerazione gli elementi che determinano l'Impatto e la Criticità, viene attribuita una priorità al ticket conforme alla matrice decisionale di seguito:

| Livello di impatto <br/> \ Livello di criticità | Impatto I1       | Impatto I2       | Impatto I3       |
| ----------------------------------------------- | ---------------- | ---------------- | ---------------- |
| Criticità C1                                    | Priorità **P1**  | Priorità **P2**  | Priorità **P3**  |
| Criticità C2                                    | Priorità **P2**  | Priorità **P3**  | Priorità **P4**  |
| Criticità C3                                    | Priorità **P3**  | Priorità **P4**  | Priorità **P5**  |

Gli impegni di livello di servizio corrispondenti a ciascun livello di priorità sono dettagliati nel capitolo seguente.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in lingua francese. Il supporto può essere fornito anche in lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di servizio di infrastruttura qualificata SecNumCloud sono situate nell'Unione Europea.

# 8. Impegni e livelli di servizio

Il Fornitore s'impegna a garantire un monitoraggio continuo delle prestazioni e dell'integrità della sicurezza della propria infrastruttura tecnica che fornisce il Servizio, assicurandone il funzionamento ottimale.

L'indisponibilità di un servizio, che fa parte di un indicatore di prestazione, è riconosciuta non appena identificata dal sistema di supervisione del Fornitore, o a seguito di una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, in modo da garantire un calcolo preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal completo ripristino del servizio, confermato sia dagli strumenti di supervisione del Fornitore, sia da un riscontro utente, assicurando così una ripresa effettiva delle operazioni e una misura fedele della durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura

Il Fornitore s'impegna a mantenere un livello di disponibilità e prestazione conforme agli standard definiti per ciascun periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLAs) si applicano a condizione che il COMMITTENTE implementi i propri sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza del rispetto di queste condizioni da parte del COMMITTENTE,
quest'ultimo non sarà in grado di rivendicare l'applicazione degli
SLAs interessati, che sono specificamente identificati con un asterisco (\*). L'accessibilità agli SLAs avviene tramite l'interfaccia
del COMMITTENTE. Le misurazioni sono calcolate su base mensile:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilità della capacità di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 3     : IC-INFRA_SNC-03** – Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
- **SLA 5     : IC-INFRA_SNC-05** – Accesso Internet: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.

***Note***:

- *In risposta a un attacco di tipo "denial of service" distribuito (DDoS), il Fornitore si riserva il diritto di modificare la sua configurazione di routing internet per
limitare l'impatto di tale attacco e salvaguardare la sua infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE è oggetto di attacco, il Fornitore può ricorrere alla tecnica del "blackholing"
tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP mirato a monte presso i suoi fornitori, con l'obiettivo di proteggere le risorse del COMMITTENTE e quelle di altri COMMITTENTI
e dell'infrastruttura del Fornitore. Il Fornitore esorta vivamente il COMMITTENTE ad adottare misure simili, come l'uso di software firewall per applicazioni web disponibili sul mercato, e a configurare attentamente i propri gruppi di sicurezza tramite l'API di comando.*
- *Il Fornitore insiste sulla necessità per il MANDANTE di minimizzare le aperture di flussi, evitando in particolare di rendere accessibili le porte
di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) da tutta Internet (sotto-rete 0.0.0.0/0), nonché i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia MANDANTE

- SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, assicurata in continuo, 24 ore su 24 e 7 giorni su 7.
- SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su base 24h/24, 7g/7.

## 8.3. Impegno di disponibilità del supporto

- **SLA 8 : IC-INFRA_SNC-08** – Ecco gli impegni di prestazione del supporto tecnico del Fornitore per gli incidenti, escluse le manutenzioni programmate:

| Priorità        | Garanzia del tempo di intervento (GTI) | Obiettivo di prestazione |
| --------------- | -------------------------------------- | ------------------------ |
| Priorità **P1** | 30mn                                   | 95%                      |
| Priorità **P2** | 2h                                     | 90%                      |
| Priorità **P3** | 4h                                     | 90%                      |
| Priorità **P4** | 24h                                    | 85%                      |
| Priorità **P5** | 48h                                    | 85%                      |

- **SLA 9 : IC-INFRA_SNC-09** – Ecco gli impegni di prestazione del supporto tecnico del Fornitore per le richieste di servizio:

|                    | Garanzia del tempo di intervento (GTI) | Obiettivo di prestazione |
| ------------------ | -------------------------------------- | ------------------------ |
| Richiesta di servizio | 4h                                   | 90%                      |

*Nota:*

- *Il termine per la Garanzia del Tempo di Intervento (GTI) è calcolato a partire dalla differenza tra il momento in cui il MANDANTE apre il ticket e il primo intervento del supporto del Fornitore.*
- *L'investigazione di incidenti riguardanti i MANDANTI non comprenderà interventi remoti sui server ospitati del MANDANTE. Questo supporto si limiterà alla spiegazione delle metriche disponibili relative
all'ambiente del MANDANTE, al fine di facilitare la comprensione degli incidenti o dei problemi di prestazione riscontrati. Sulla base dei risultati di questa analisi, potranno essere suggerite raccomandazioni.*

## 8.4. Impegno di disponibilità dello storage a oggetti S3

- **SLA 10 : IC-INFRA_SNC-10** – Ecco gli impegni di disponibilità per lo storage a oggetti S3:

| Indicatore        | Impegno                                          | Obiettivo di disponibilità |
| ----------------- | ------------------------------------------------ | -------------------------- |
| IC-INFRA-SNC-10.1 | Durabilità dello storage di un oggetto in una regione | 99,9999999% / anno        |
| IC-INFRA-SNC-10.2 | Disponibilità dell'API Storage a oggetti S3      | 99,99%                     |
| IC-INFRA-SNC-10.3 | Latenza massima di accesso a un oggetto in una regione | 150 ms                  |

Note:

- Il Servizio di Storage a Oggetti è specificamente progettato per lo storage di oggetti e deve essere utilizzato esclusivamente a questo scopo, **escludendo categoricamente il suo utilizzo in modalità blocco**. Utilizzare la modalità blocco con metodi alternativi, inclusa ad esempio l'utilizzo di *"FUSE" in un ambiente Linux*, costituisce una violazione dei termini d'uso delineati. Nessun incidente, malfunzionamento o danno derivante da questo uso non conforme sarà coperto dagli Accordi di Livello di Servizio (SLA) definiti in questa convenzione di servizi.
- La garanzia di durabilità è condizionata a un utilizzo dei servizi conforme alle migliori pratiche e standard attuali, ed esclude esplicitamente qualsiasi modifica dei dati, sia intenzionale che accidentale, risultante da azioni intraprese dal MANDANTE.

## 8.5. Precisazione riguardo l'impegno di backup

La strategia di backup implementata per il MANDANTE, è condizionata dalla sottoscrizione alle unità di lavoro adeguate.

Il Fornitore si impegna a fornire una soluzione di backup che permetta al MANDANTE di applicare le politiche di backup desiderate.

Si precisa che il perimetro del Fornitore si arresta alla fornitura di un servizio di backup ed è responsabilità del MANDANTE supervisionare tramite l'interfaccia MANDANTE la corretta esecuzione delle politiche associate.

Si precisa che la gestione delle capacità di archiviazione dello spazio di storage dedicato ai backup, rimane a carico e responsabilità del MANDANTE. Il Fornitore mette a disposizione il tasso di utilizzo tramite la console.

*Esempio: Non backup di una macchina virtuale:*

*Il MANDANTE è incaricato di verificare / supervisionare la corretta esecuzione delle politiche di backup, nel caso in cui il MANDANTE rilevi che una macchina virtuale non è salvata, è sua responsabilità verificare la causa, il MANDANTE potrà richiedere al Supporto del Fornitore in base al livello di supporto sottoscritto per essere assistito.*

**Il SLA 8 : IC-INFRA_SNC-08 e SLA 9**, sarà esclusivamente applicabile nel caso di un incidente del servizio di backup.

# 9. Organizzazione della relazione contrattuale

## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna:

- a informare il suo MANDANTE in modo adeguato (ad esempio in caso di limite di capacità delle risorse tecniche che erogano il Servizio).

- a informare formalmente il MANDANTE e con un preavviso di un mese, di qualsiasi cambiamento giuridico, organizzativo o tecnico che possa avere un impatto sulla conformità del Servizio ai requisiti di protezione contro le leggi extra-europee (19.6 del riferimento SNC v3.2).

- a fornire al MANDANTE interfacce e interfacce di servizio che siano almeno in lingua francese.

- a studiare e tenere in conto le richieste settoriali specifiche legate ai tipi di informazioni affidate dal MANDANTE nell'ambito della realizzazione del servizio e nella misura delle sue responsabilità.

- a non divulgare alcuna informazione relativa alla prestazione a terzi, salvo autorizzazione formale e scritta del MANDANTE.

- a mettere a disposizione tutte le informazioni necessarie per la realizzazione di audit di conformità conformemente alle disposizioni dell'articolo 28 del RGPD.

- a riferire al MANDANTE, mediante la presente Convenzione di servizio, di qualsiasi incidente di sicurezza che impatti il Servizio o l'utilizzo che il MANDANTE fa del Servizio (incluse le dati del MANDANTE).

- ad autorizzare un fornitore di audit della sicurezza dei sistemi informativi (PASSI) qualificato, incaricato dal Fornitore, a auditare il servizio e il suo sistema informativo, conforme al piano di controllo del SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per effettuare gli audit di conformità alle disposizioni dell'articolo 28 del RGPD, condotti dal mandante o da un terzo incaricato.

- a fornire, in qualità di sub-fornitore, conformemente all'articolo 28 del Regolamento generale sulla protezione dei dati (RGPD), assistenza e consulenza al MANDANTE avvertendolo ogniqualvolta un'istruzione emessa da quest'ultimo sia suscettibile di costituire una violazione delle regole di protezione dei dati.

- a notificare per iscritto, quando un progetto impatti o sia suscettibile di impattare il livello di sicurezza del Servizio, il MANDANTE dei potenziali impatti, delle misure di attenuazione messe in atto, nonché dei rischi residui che lo riguardano.

- a documentare e implementare tutte le procedure necessarie per rispettare i requisiti legali, normativi e contrattuali applicabili al servizio, nonché le esigenze di sicurezza specifiche del MANDANTE, definite da quest'ultimo e previste nel Contratto. Su richiesta del MANDANTE, il modulo Documentazione dell'interfaccia MANDANTE permetterà una condivisione sicura di tali documenti.

- a fornire, su richiesta del MANDANTE, gli elementi di valutazione dei rischi relativi alla sottoposizione dei dati del MANDANTE alla giurisdizione di uno stato non membro dell'Unione Europea.

Su richiesta del MANDANTE formale e scritta, il Fornitore si impegna a:

1. Rendere accessibile al MANDANTE il regolamento interno e il codice etico del Fornitore;

2. Rendere accessibile al MANDANTE le sanzioni previste in caso di infrazione alla politica di sicurezza;

3. Fornire al MANDANTE tutti gli eventi che lo riguardano negli elementi di log del Servizio;

4. Alla fine del Contratto, il Fornitore si impegna a cancellare i dati e i Dati tecnici relativi al MANDANTE, conformemente alla "procedura di cancellazione dei dati a fine Contratto" descritta nella presente Convenzione di servizio.

5. assicurare una cancellazione sicura dell'interezza dei dati del MANDANTE mediante riscrittura completa di tutti i supporti che hanno ospitato i suoi dati nell'ambito del Servizio.

6. fornire l'elenco completo dei terzi autorizzati ad accedere alle infrastrutture che ospitano i dati.
Le Fornitore manterrà aggiornata e metterà a disposizione del COMMITTENTE la lista esaustiva delle terze parti autorizzate ad accedere alle infrastrutture che ospitano i dati, informandolo di qualsiasi cambiamento relativo ai subappaltatori. Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, ovvero la dignità umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto, nonché il rispetto dei Diritti dell'uomo. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell'Unione Europea relativi al rispetto della dignità umana, alla libertà, all'uguaglianza, alla democrazia e allo Stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore

A causa dell'insieme delle definizioni e condizioni menzionate nel presente Contratto di servizio, le responsabilità del Fornitore sono limitate come segue:

1. Il modello di responsabilità condivisa, descritto nella sezione « Modello di responsabilità condivise » del presente Contratto di servizio, limita di fatto l'implicazione del Fornitore negli strati di funzionamento che vanno "sopra" la messa a disposizione di risorse di calcolo, rete, storage e backup. Ciò esclude in particolare, ma non si limita a:

    - La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicativi, ecc.);

    - L'aggiornamento degli OS e altri software installati dal COMMITTENTE sulle sue macchine nei suoi Tenant;

    - La sicurezza dei programmi, software e applicativi installati sulle macchine virtuali;

    - L'aggiornamento delle macchine virtuali;
  
    - Il backup dei dati a livello applicativo.

2. Il Fornitore non può impegnarsi al backup dei Tenant del COMMITTENTE senza che il COMMITTENTE abbia preventivamente sottoscritto le unità operative appropriate.

3. Il Fornitore non può vantare la proprietà dei dati trasmessi e generati dal COMMITTENTE. In effetti, questi sono di proprietà del COMMITTENTE.

4. Il Fornitore sottolinea che non può in nessun caso sfruttare i dati trasmessi e generati dal COMMITTENTE senza preventiva validazione di quest'ultimo.

5. Il Fornitore declina ogni responsabilità sui componenti fisicamente ospitati e gestiti dal Fornitore, ma essendo di proprietà diretta del COMMITTENTE o di una terza parte con cui il COMMITTENTE ha contrattualizzato. L'hosting di componenti fisici dei clienti non fa parte del Servizio ed è di fatto fuori dall'ambito del presente Contratto di servizio. Spetta al COMMITTENTE valutare il livello di aderenza o dipendenza che questi componenti introducono rispetto al Servizio IaaS qualificato SecNumCloud.

## 9.3. Limitazione di accesso

Nell'ambito del Servizio, il Fornitore è formalmente vietato dall'accedere ai Tenant appartenenti al COMMITTENTE senza previa autorizzazione. È responsabilità del COMMITTENTE fornire gli accessi necessari al personale del Fornitore, secondo le specifiche esigenze dell'hosting e, eventualmente, dei servizi professionali di supporto, qualora questa opzione sia stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che questi accessi sono concessi esclusivamente per le necessità legate alla fornitura dei servizi concordati, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella fornitura di servizi del Fornitore è strettamente vietato. Nell'eventualità in cui un requisito tecnico specifico richiedesse tale accesso, questo potrebbe essere stabilito solo dopo aver chiaramente notificato il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurandosi che qualsiasi eccezione alla regola sia debitamente autorizzata e documentata.

## 9.4. Responsabilità delle terze parti partecipanti alla fornitura del servizio Secure Temple

Il Fornitore controlla la lista dei partner terzi partecipanti alla fornitura del Servizio. Questi terzi sono gli editori, fornitori (del Fornitore) e altri fornitori partecipanti alla fornitura del Servizio. Il Fornitore applica le seguenti misure a questi terzi:

- Il Fornitore richiede ai terzi partecipanti all'implementazione del servizio, nel loro contributo al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio Secure Temple;

- Il Fornitore contrattualizza, con ciascuno dei terzi partecipanti all'implementazione del servizio, clausole di audit che consentono a un organismo di qualificazione di verificare che questi terzi rispettino i requisiti legali e i requisiti SNC, consentendo al Fornitore di rispettare i suoi impegni nel presente Contratto di servizio.

- Il Fornitore implementa una procedura che consente di controllare regolarmente le misure messe in atto dai terzi partecipanti all'implementazione del servizio per rispettare i requisiti del Fornitore e rispettare i suoi impegni nel presente Contratto di servizio.

- Il Fornitore implementa una procedura di monitoraggio delle modifiche apportate dai terzi partecipanti all'implementazione del servizio che potrebbero influire sul livello di sicurezza del sistema informativo del servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

A tal proposito, il Fornitore fornisce al COMMITTENTE una piattaforma di esecuzione di macchine virtuali, la configurazione delle quali è a carico del COMMITTENTE. Ogni macchina virtuale non può funzionare senza una politica di backup associata. Il Fornitore definisce tramite le sue interfacce politiche di backup automatiche. Ma è a carico del COMMITTENTE l'attivazione di queste politiche di backup e quindi l'attivazione delle macchine virtuali.

Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione SNC ad auditare il Servizio e l'infrastruttura tecnica che fornisce il Servizio.

## 9.6. Diritti del COMMITTENTE

In qualsiasi momento durante la relazione contrattuale, il COMMITTENTE può presentare un reclamo relativo al servizio qualificato presso l'ANSSI.

In qualsiasi momento, il COMMITTENTE può chiedere al Fornitore di rendergli accessibile il suo regolamento interno e il suo codice etico.

## 9.7. Cancellazione dei dati alla fine del Contratto

Alla fine del contratto, che sia giunto a scadenza o che sia stato risolto per qualsiasi motivo, il Fornitore si impegna a procedere alla cancellazione sicura di tutti i dati del COMMITTENTE, inclusi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un preavviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno quindi cancellati entro un massimo di trenta (30) giorni dalla notifica.

Per attestare tale cancellazione, il Fornitore rilascerà al COMMITTENTE un certificato che conferma la cancellazione dei dati.

# 10. Ciclo di vita del presente Contratto di servizio

## 10.1. Entrata in vigore del Contratto di servizio

Il presente Contratto di servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, la memorizzazione e il trattamento dei dati effettuati nell'ambito della prevendita, dell'implementazione, dell'interruzione del Servizio sono effettuati nel rispetto della legislazione vigente.

## 10.2. Evoluzioni del Contratto di servizio

Le modifiche o aggiunte apportate al presente Contratto di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. Queste proposte di modifica saranno esaminate dalle Parti, autorizzate a determinare gli aspetti che necessitano di una formalizzazione scritta.

È convenuto che qualsiasi evoluzione del Contratto di servizio, dopo la convalida, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la stipula e la firma di un emendamento al Contratto in corso.

I fattori che possono indurre una revisione di questo Contratto di servizio includono, senza limitarsi a:

- L'evoluzione dell'infrastruttura tecnica che fornisce il Servizio IaaS;
- Gli aggiustamenti apportati ai servizi implementati dal Fornitore per fornire il Servizio;
- Le variazioni degli impegni presi e delle sanzioni applicabili;
- Le ristrutturazioni organizzative all'interno del COMMITTENTE o del Fornitore;
- L'espansione o la riduzione dell'ambito di applicazione del Servizio.

La gestione delle versioni e delle revisioni del Contratto di servizio è riportata nel preambolo del documento per facilitarne il monitoraggio.

### 10.2.1. Evoluzioni avviate dal COMMITTENTE

Le evoluzioni del Contratto di servizio possono avere, in particolare, origine da:

- Un'evoluzione dell'infrastruttura gestita dal Fornitore;

- Una modifica dei servizi implementati dal Fornitore;

- Una modifica degli impegni di livello di servizio da parte del Fornitore.

### 10.2.2. Evoluzioni avviate dal Fornitore

Qualsiasi modifica del Contratto di servizio è soggetta all'accettazione del COMMITTENTE. Si intende che qualsiasi modifica o complemento
validati che modifichino gli elementi finanziari del Contratto, possono implicare la firma di un emendamento a quest'ultimo.

## 10.3. Reversibilità

Inoltre, Cloud Temple si impegna a consentire una revisione del presente Contratto di servizio (prevedendo in particolare la sua risoluzione) senza penalità
per il COMMITTENTE in caso di perdita della qualificazione SecNumCloud.
I Servizi non comprendono l’obbligo di reversibilità (ossia, l’aiuto al Cliente per consentirgli di migrare il suo sistema verso un altro Fornitore) ad eccezione della messa a disposizione del MANDANTE da parte del Fornitore dell’interfaccia MANDANTE che permette al MANDANTE di salvare e recuperare i suoi dati, comprese in particolare le informazioni di configurazione del loro sistema informatico, tramite una delle modalità tecniche seguenti a scelta del MANDANTE: la messa a disposizione di file secondo uno o più formati documentati e utilizzabili al di fuori del servizio fornito dal Fornitore oppure tramite la messa in opera di interfacce tecniche che permettono l’accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il MANDANTE, unico responsabile del suo sistema, deve fare tutto il possibile per facilitare questa operazione se necessario (il che implica, in particolare, che prepari una documentazione rigorosa a tal fine) e l’elaborazione di piani di reversibilità. Nel caso in cui il MANDANTE necessiti di un servizio aggiuntivo, il Fornitore può proporre una consulenza a tal riguardo nell’ambito di un contratto specifico da negoziare.

# 11. Disponibilità, continuità e ripristino del servizio

## 11.1. Gestione degli Incidenti e delle interruzioni

### 11.1.1. Incidenti

#### 11.1.1.1. Tipi di Incidenti trattati nel quadro di questo Accordo di servizio

- Sinistri

- Guasti e malfunzionamenti

- Incidenti di sicurezza:

- Che impattano la disponibilità del servizio

- Che impattano la confidenzialità del servizio

- Che impattano l’integrità del servizio

#### 11.1.1.2. Trattamento degli incidenti

- Tempi

- Azioni a posteriori

- Archiviare i documenti che dettagliano gli incidenti di sicurezza.

- Notifica di violazione dei dati personali [online](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Livello di notifica degli Incidenti di sicurezza

Il MANDANTE ha la responsabilità di scegliere i livelli di gravità degli Incidenti di sicurezza per cui desidera essere informato, ad esempio tramite la loro formalizzazione in un PAS applicabile al Servizio.

Per impostazione predefinita, il MANDANTE è informato:

- Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo la scala di impatto definita nel processo di priorizzazione dei trattamenti del presente Accordo di servizio);

- Delle violazioni dei dati personali per i quali il MANDANTE è responsabile del trattamento;

- Delle violazioni dei dati personali per i quali il Fornitore è responsabile del trattamento e che comportano dati personali del MANDANTE.

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

La manutenzione assicurata consiste nella messa in opera:

- Del piano di mantenimento in condizioni operative del Servizio per garantire buoni indicatori di disponibilità come impegnato dal Fornitore sopra;

- Del piano di PCA/PRA se sottoscritto dal MANDANTE, attivato in base agli eventuali incidenti che dovessero verificarsi.

### 11.2.2. Accessi remoti di Cloud Temple nel perimetro del MANDANTE

Il Fornitore si proibisce, nell'ambito del presente Accordo di servizio, qualsiasi accesso ai Tenants e allo spazio dell'interfaccia del MANDANTE.

Competerà al MANDANTE fornire gli accessi necessari al personale del Fornitore. Il MANDANTE riconosce che gli accessi saranno utilizzati nell’ambito dell’hosting e in fine dell’outsourcing (se sottoscritto dal MANDANTE).

### 11.2.3. Accessi remoti di terzi partecipanti alla fornitura del servizio nel perimetro del MANDANTE

Nessun accesso remoto di terzi partecipanti alla fornitura del Servizio è autorizzato.

Se una necessità tecnica rendesse necessario questo caso, allora questo tipo di accesso sarebbe effettuato solo dopo la notifica del MANDANTE, giustificazione e ottenimento del suo consenso scritto.

# 12. Procedura di cancellazione dei dati a fine Contratto

Alla fine del Contratto, sia che il Contratto sia giunto a scadenza o per qualsiasi altra causa, il Fornitore garantirà la cancellazione sicura di tutti i dati trattati nel quadro del Servizio, comprese le Dati tecniche del MANDANTE. Il Fornitore darà un preavviso formale rispettando un termine di ventuno (21) giorni di calendario. I dati del MANDANTE saranno cancellati entro un termine massimo di trenta (30) giorni dalla notifica. Il Fornitore fornirà un certificato di cancellazione dei dati al MANDANTE.

# 13. Legge applicabile

## 13.1. In maniera generale

La legge applicabile a cui è soggetto il presente Accordo di servizio è il diritto francese.

## 13.2. Conformità alla legge e alle normative applicabili

Il Fornitore si impegna sui seguenti punti:

- L’identificazione dei vincoli legali e normativi applicabili nell’ambito del Servizio;

- Il rispetto dei vincoli legali e normativi applicabili ai dati affidati al Fornitore;

- Il rispetto della Legge informatica e libertà e del GDPR;

- La messa in opera di mezzi di protezione dei dati personali;

- La messa in opera di un processo di monitoraggio legale e normativo;

- Il disporre e mantenere le relazioni appropriate o un monitoraggio con le autorità settoriali in relazione con la natura dei dati trattati nell’ambito del Servizio. Questo include in particolare l'ANSSI, il CERT-FR e la CNIL.

## 13.3. GDPR

Agendo come responsabile del trattamento ai sensi dell’articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), il Fornitore si impegna:

- A garantire la trasparenza e la tracciabilità;

- A designare un DPO incaricato di definire e mettere in opera le misure di protezione dei dati personali;

- A offrire assistenza e consulenza al MANDANTE avvisandolo qualora un’istruzione di quest’ultimo costituisca una violazione delle norme sulla protezione dei dati personali, se il Fornitore è in grado di identificarla;

- A offrire una garanzia di sicurezza sui dati trattati (a causa della qualifica SecNumCloud).

## 13.4. Protezione nei confronti della legge extra-europea

Qualora il Fornitore, nell’ambito del Servizio, ricorresse all'uso di una società terza - incluso un subappaltatore - detenente la sua sede statutaria, la sede principale o la principale sede di attività in uno Stato non membro dell’Unione Europea o appartenente o controllata da una società terza domiciliata al di fuori dell'Unione Europea, il Fornitore si impegna a garantire che questa società terza non avrà alcun accesso ai dati operati dal servizio 'Secure Temple'.

Per ricordare, i dati interessati sono quelli affidati al Fornitore dal MANDANTE come pure tutti i Dati tecnici che comprendono informazioni sui MANDANTI.

Ai fini del presente articolo, il concetto di controllo è inteso come indicato al II dell’articolo L233-3 del codice di commercio.

# 14. FIRME

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, il FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il MANDANTE