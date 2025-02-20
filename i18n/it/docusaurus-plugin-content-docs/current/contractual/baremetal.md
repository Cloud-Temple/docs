---
title: Convention de Service spécifique - Bare Metal
---

# 1. CONVENTION DE SERVICES Bare Metal

  ------------------------------------------------------------------------------------------------------
  **Destinataires :**                    **COMMANDITAIRE**
  -------------------------------------- ---------------------------------------------------------------
  **Référence du documents**             CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Giorno MM AAAA - VF

  **Vos interlocuteurs**                 *Nome* *Cognome*

                                         Account Manager

                                         e-mail : *nome.cognome*\@cloud-temple.com

  **Date de dernière mise à jour**       22/01/2025

  **Date de validation contractuelle**   Giorno MM AAAA
  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  **Version**   **Data**     **Azione**                           **Autore**
  ------------- ------------ ------------------------------------ -----------------
  v1.0          22/01/2025   Redazione iniziale                   Nicolas BODILIS
  ------------- ------------ ------------------------------------ -----------------
                                                                  

                                                                  

                                                                  
  ---------------------------------------------------------------------------------

# 2. TABLE DES MATIÈRES

-   [1. **CONVENTION DE SERVICES Bare**](#Xc3786c07943ae71dec5191b24567a7f31cb6100) Metal
-   [2. **TABLE DES MATIÈRES**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Préliminaire et Glossaire](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Préliminaire](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossaire](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acronymes](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Objet de la présente Convention de service](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Description du Service](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modèle de responsabilità condivisa](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Presentazione dettagliata del perimetro del Servizio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Infrastrutture Datacenters](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Infrastruttura software di pilotaggio del Servizio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Infrastrutture di calcolo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Infrastruttura di stoccaggio](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Infrastruttura rete globale](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Implementazione di soluzioni di ripresa di attività o di continuità di attività](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitazioni dei servizi nel modello Bare Metal qualificato](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Servizi gestiti in RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Configurazione della controparte](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)

    <!-- -->

    -   [7.4. Implementazione del servizio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Prerequisiti tecnici](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)

    <!-- -->

    -   [7.5. Localizzazione del servizio in Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Localizzazione dei Datacenters che ospitano il Servizio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Supporto](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Natura del supporto che accompagna il servizio](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Richiesta del servizio di supporto tecnico](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Processo di gestione degli Incidenti](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Processo di priorizzazione dei trattamenti](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Lingua e localizzazione del servizio di supporto](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Impegni e livelli dei servizi](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Impegni di disponibilità dell'infrastruttura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Impegno di disponibilità dell'interfaccia COMMANDITAIRE](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Impegno di disponibilità del supporto](#Xfc8548982b300528a67725f1705f15805f405f0)
-   [9. Organizzazione della relazione contrattuale](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Responsabilità del Fornitore](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Limitazione delle responsabilità del Fornitore](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Limitazione di accesso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)

[9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio Secure Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)

-   [9.5. Responsabilità e obblighi del COMMANDITAIRE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
-   [9.6. Diritti del COMMANDITAIRE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
-   [9.7. Cancellazione dei dati a fine Contratto](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)

<!-- -->

-   [10. Ciclo di vita della presente Convenzione di servizio](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Entrata in vigore della Convenzione di servizio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Evoluzioni della Convenzione di servizio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Evoluzioni avviate dal COMMANDITAIRE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Evoluzioni avviate dal Fornitore](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilità](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Disponibilità, continuità e ripristino del servizio](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Gestione degli Incidenti e delle interruzioni](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1. Incidenti](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Tipi di Incidenti trattati nell'ambito della presente Convenzione di servizio](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Trattamento degli incidenti](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Livello di notificazione degli Incidenti di sicurezza](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Manutenzione del Servizio](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Natura della manutenzione](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMANDITAIRE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Accessi remoti di terzi partecipanti alla fornitura del servizio sul perimetro del COMMANDITAIRE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Procedura di cancellazione dei dati a fine Contratto](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Diritto applicabile](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. In generale](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Rispetto del diritto e delle normative applicabili](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. RGPD](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protezione rispetto al diritto extra-europeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. FIRME](#X7ad993788a708b47017c27c9d96178e8795e44f)

# 3. Préliminaire et Glossaire

## 3.1. Préliminaire

Il presente documento formalizza la Convenzione di servizio associata al servizio Bare Metal in corso di qualificazione SecNumCloud.

Il Servizio è in corso di qualificazione SecNumCloud (vedi attestazione in Appendice).

La presente convenzione di servizio completa e integra le condizioni generali di vendita e utilizzo del Fornitore. Si intende che i documenti contrattuali vengono interpretati in maniera coerente tra loro. In caso di contraddizione o divergenza tra i termini dei documenti contrattuali, i documenti prevarranno gli uni sugli altri nel seguente ordine:

1.  Condizioni Generali di Vendita e Utilizzo (CGVU)
2.  Convenzione di Servizio SecNumCloud IaaS
3.  Convenzione di Servizio SecNumCloud OpenIaaS
4.  Convenzione di Servizio SecNumCloud PaaS
5.  Convenzione di Servizio specifica - Bare Metal
6.  Convenzione specifica particolare
7.  Piano di Assicurazione Sicurezza (PAS)
8.  Condizioni Particolari di Utilizzo (CPU)
9.  Data Protection Agreement

## 3.2. Glossaire

Nella presente Convenzione di servizio, il **COMMANDITAIRE**, il **Fornitore** e le **Parti** sono identificati nel Contratto al quale è allegata la presente Convenzione di servizio.

Le espressioni di seguito utilizzate nella presente Convenzione di servizio saranno interpretate conformemente alle definizioni loro attribuite qui sotto:

-   **Cambiamento:** Qualsiasi aggiunta, modifica o eliminazione che impatta il Servizio, autorizzato, pianificato o gestito.

-   **Cambiamento standard:** Cambiamento soggetto a una procedura, le cui modalità di messa in produzione e gli impatti (compresi quelli finanziari) sono conosciuti e accettati in anticipo dalle Parti. Viene quindi integrato nel catalogo dei cambiamenti standard e può, a seconda dei casi, avere una GTI e una GTR.
-   **Contratto:** indica il contratto stipulato dal COMMITTENTE con il Fornitore per consentire al COMMITTENTE di beneficiare del Servizio, e al quale è allegata la presente Convenzione di servizio.

-   **Convenzione di servizio:** Questo documento, redatto nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), in conformità con i requisiti del Riferimento SecNumCloud.

-   **Richiesta di servizio:** richiesta di evoluzione oggetto di una procedura, la cui realizzazione: i) non modifica la CMDB, ii) il modo operativo, i costi e i rischi sono conosciuti e accettati in anticipo e non richiedono modalità di rollback specifiche iii) la realizzazione è soggetta a un accordo di livello di servizio ed è inclusa nel canone del contratto quando viene effettuata in orario lavorativo e nei giorni lavorativi.

-   **Disponibilità:** Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, secondo i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

-   **Dati tecnici:** comprende l'insieme dei dati manipolati per erogare il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i log dell'infrastruttura tecnica, la configurazione degli accessi, la directory, i certificati...

-   **Evento:** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che potrebbe avere importanza per la gestione del Servizio.

-   **Hypervisor:** Sistema operativo che permette l'esecuzione di macchine virtuali su una lama di calcolo.

-   **Incidente:** Qualsiasi evento imprevisto che interrompe il normale funzionamento del Servizio o compromette la sicurezza dei dati.

-   **Incidente di sicurezza:** Qualsiasi evento nell'ambito del Servizio:

    -   Di natura intenzionalmente malevola;
    -   Di natura accidentale che intacca l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
    -   Che compromette le misure di sicurezza esistenti. Le interruzioni della Disponibilità di origine non malevola non sono considerate Incidenti di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

-   **Interfaccia COMMITTENTE:** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, comprendente una console di amministrazione web e un'API.

-   **Messa in produzione:** azione(i) di amministrazione di realizzazione del Cambiamento quando questo è approvato (il cambiamento, ai sensi ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/attuazione).

-   **Problema:** causa di uno o più Incidenti ricorrenti, causa di un Incidente potenziale (situazione di rischio) che richiede un'analisi e una risoluzione per prevenire la sua ricorrenza.

-   **Regione:** indica un insieme geograficamente delimitato di zone di disponibilità cloud, fornendo servizi di rete, calcolo e archiviazione per ottimizzare la latenza, le prestazioni e la conformità alle normative locali.

-   **Servizio:** indica il servizio Bare Metal in corso di qualificazione SecNumCloud, fornito al COMMITTENTE dal Fornitore da infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" della presente Convenzione di servizio.

-   **Sinistro:** indica un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni significativi alla Parte sinistrata.

-   **Supervisione:** Monitoraggio di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati quali misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, prerogativa che spetta alle operazioni di Amministrazione.

-   **Tenant:** Un'istanza isolata riservata a un utente o gruppo di utenti, che condividono un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zona di Disponibilità (AZ) (Availibility zone):** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi mediante una distribuzione geografica delle risorse.

# 4. Acronimi

  --------------------------------------------------------------------------------------------------------
  **Acronimo**   **Definizione**
  -------------- -----------------------------------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comitato consultivo sui cambiamenti

  **CMDB**       Configuration Management Database -- Base di dati di gestione delle configurazioni

  **COPIL**      Comitato di pilotaggio

  **COSTRAT**    Comitato strategico

  **COPROJ**     Comitato Progetto

  **DB**         Database (base di dati)
                 
  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Piano di ripristino dell'attività)

  **GTE**        Garanzia di Tempo di Escalation

  **GTI**        Garanzia di Tempo di Intervento

  **GTR**        Garanzia di Tempo di Risoluzione

  **ITIL**       Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Mantenimento in condizioni operative

  **MOA**        Direzione dei Lavori

  **MOE**        Direzione dell'Esecuzione

  **MSP**        Managed Services Provider

  **OS**         Operating system (sistema operativo)

  **PAQ**        Piano di Assicurazione Qualità

  **PaaS**       Platform as a Service

  **PAS**        Piano di Assicurazione Sicurezza

  **PASSI**      Fornitore di Audit di Sicurezza dei Sistemi Informativi

  **RFC**        Request For Change -- Richiesta di cambiamento

  **RGPD**       Regolamento Generale sulla Protezione dei Dati (personali)

  **RPO**        Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistro

  **RTO**        Recovery Time Objective -- Termine per il ripristino del servizio in caso di Sinistro

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Accordo sui livelli di servizio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Manutenzione correttiva e adattativa di applicazioni terze

  **UO**         Unità di Opera

  **VABE**       Validation d'Aptitude à la Bonne Exploitabilité (Convalida di Idoneità alla Buona Sfruttabilità)

  **VABF**       Validation d'Aptitude au Bon Fonctionnement (Convalida di Idoneità al Buon Funzionamento)

  **VM**         Virtual Machine (Macchina virtuale)

  **VSR**        Validation de Service Régulier (Convalida di Servizio Regolare)
  --------------------------------------------------------------------------------------------------------

# 5. Oggetto della presente Convenzione di servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni in base ai quali il Fornitore si impegna a fornire il Servizio al COMMITTENTE. Il suo obiettivo è di:

-   Precisare i requisiti di prestazione attesi dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

-   Enunciare gli obblighi del Fornitore per soddisfare i livelli di servizio concordati;

-   Identificare le norme regolamentari specificamente applicabili al Servizio fornito;

-   Assicurare uniformità e integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di prestazione quantitativi.

Si stipula che, nell'ipotesi in cui al Fornitore venga revocata la qualificazione SecNumCloud, il Contratto potrà essere risolto di diritto, senza incorrere in penalità, da parte del COMMITTENTE. In tale eventualità, il Fornitore si impegna a informare il COMMITTENTE di questa squalifica inviando una notifica ufficiale, tramite lettera raccomandata con richiesta di ricevuta di ritorno.

È opportuno notare che una modifica o un aggiustamento della qualificazione SecNumCloud non sarà interpretato come una revoca della qualificazione iniziale.

# 6. Audit

Il Fornitore si impegna a permettere al COMMITTENTE, o a qualsiasi revisore terzo e non concorrente del Fornitore che quest'ultimo abbia designato, di consultare tutti i documenti necessari per certificare il rispetto integrale degli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione di audit.

Con l'accettazione della presente Convenzione di servizio, il COMMITTENTE concede il suo esplicito consenso a:

1.  L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI) nonché all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al riferimento SecNumCloud.
2.  Un fornitore di audit della sicurezza dei sistemi informativi, debitamente qualificato PASSI e espressamente designato dal Fornitore, per condurre audit di sicurezza sul Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio offerto dal Fornitore si caratterizza per la fornitura delle seguenti prestazioni, che si allineano al principio di responsabilità condivisa presentato nel riferimento SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La messa a disposizione di spazi di archiviazione;

-   L'accesso a servizi di connettività di rete e internet;

-   L'accesso a una console di gestione delle risorse distribuite;

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nell'ambito del Servizio è presentato in §7.1.

Si intende che il Fornitore impiegherà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali e in conformità con i requisiti del riferimento SecNumCloud.
## 7.2. Presentazione dettagliata del perimetro del Servizio

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Compute                 Risorsa di calcolo del Tenant COMMITTENTE
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Storage                 Dati di produzione del Tenant COMMITTENTE

  Infrastruttura di rete  Risorsa di rete del Tenant COMMITTENTE

  Console COMMITTENTE     Il servizio che permette al COMMITTENTE di accedere al proprio servizio Bare Metal e di gestirlo tramite l'interfaccia Console

  Supporto                Il servizio di supporto che accompagna i servizi precedenti e solo questi (\*)
  -----------------------------------------------------------------------------------------------------------------------------------------------

(\*) Nel limite del perimetro del Servizio qualificato SNC e delle responsabilità del Fornitore in materia\_

### 7.2.1. Infrastrutture Datacenter

Il Servizio include la messa a disposizione, per ogni Zona di disponibilità, delle prestazioni in corso di qualificazione qui di seguito:

-   Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 del Uptime Institute;
-   Messa a disposizione di sale tecniche all'interno dei datacenter dedicate all'ospitalità delle apparecchiature tecniche indispensabili alla produzione del servizio, incluso calcolo, storage, rete, cablaggio e altri componenti necessari;
-   Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, garantendo una continuità del servizio;
-   Fornitura di servizi di climatizzazione, adeguati per rispettare le norme e le raccomandazioni dei produttori di apparecchiature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
-   Supervisione continua e metrologia dettagliata, permettendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore assicura la messa a disposizione di servizi avanzati di rilevamento e estinzione degli incendi, progettati per identificare e neutralizzare efficacemente qualsiasi incendio all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle apparecchiature e dei dati. Includono rilevatori di fumo ad alta precisione e dispositivi di estinzione che possono agire rapidamente senza danneggiare l'apparecchiatura informatica. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e garantire la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e misure di sicurezza messe in atto, inclusi i test annuali di trasferimento sui gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare i rischi di guasto e garantire una reattività ottimale in caso di Incidente. Accettando queste condizioni, il COMMITTENTE riconosce l'importanza di queste misure e si impegna a collaborare pienamente per facilitare la loro attuazione. Il COMMITTENTE è anche incoraggiato a prendere conoscenza delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria all'utilizzo del Servizio. Si impegna inoltre a mantenere questa console di amministrazione e l'API in condizioni operative ottimali e a garantirne la sicurezza in modo continuo. Questa console di amministrazione e l'API sono designate collettivamente con il termine « interfaccia COMMITTENTE ».

Il Fornitore avvisa il COMMITTENTE che un utilizzo anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o al Servizio. È importante sottolineare che questa situazione non costituisce una indisponibilità del Servizio ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come una indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una per secondo (Throttling). Se il COMMITTENTE invia richieste identiche a una frequenza superiore, il loro rifiuto non potrà essere interpretato come una indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle apparecchiature necessarie all'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Ciò comprende:

-   La fornitura dei chassis tecnici necessari al corretto funzionamento delle lame di calcolo;
-   La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e distribuite secondo le zone di disponibilità di sua scelta. Occorre notare che queste lame di calcolo sono esclusivamente dedicate al COMMITTENTE;
-   La messa a disposizione di una console tipo KVM per gestire la risorsa di calcolo.

La scelta del modello di lama di calcolo, selezionato tra il catalogo proposto dal Fornitore, spetta al COMMITTENTE.

### 7.2.4. Infrastruttura di storage

Il servizio include la fornitura al COMMITTENTE di un'infrastruttura di storage condivisa di tipo SAN (Storage Area Network), che offre vari livelli di prestazioni. Questo servizio include:

-   L'implementazione e il mantenimento in condizioni operative e di sicurezza della rete SAN dedicata;
-   L'installazione e la gestione dei bay di storage mutualizzati tra i clienti, inclusi il loro mantenimento in condizioni operative e di sicurezza, la loro supervisione e la loro metrologia;
-   L'implementazione di sistemi automatizzati per l'allocazione dei LUN (Logical Unit Numbers) di storage dedicati all'uso del COMMITTENTE, in conformità ai volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore implementa nell'ambito del Servizio una rete globale che facilita al COMMITTENTE la messa in accessibilità dei suoi sistemi ospitati. Questo servizio include:

-   La fornitura, il mantenimento in condizioni operative e di sicurezza di tutte le connessioni in fibra ottica che interconnettono le diverse Zone di disponibilità;

-   La fornitura, il mantenimento in condizioni operative e di sicurezza delle apparecchiature tecniche necessarie al corretto funzionamento della rete e all'isolamento dei diversi clienti.

L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, e le apparecchiature di rete, i collegamenti degli operatori e altri componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete è implementata in conformità alle disposizioni previste nel Contratto.

### 7.2.6. Implementazione di soluzioni di disaster recovery o di continuità operativa

Il Fornitore fornisce al COMMITTENTE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso diverse Zone di disponibilità. È responsabilità del COMMITTENTE gestire efficacemente questa distribuzione di risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a tale scopo.

## 7.3. Limitazioni dei servizi nel modello Bare Metal qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

-   L'hosting di componenti fisici del COMMITTENTE;

-   L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, inclusi i collegamenti degli operatori;

-   Qualsiasi servizio di tipo gestito, o TMA;

-   Qualsiasi assistenza sui sistemi operativi installati e oltre nella pila di responsabilità, anche se si tratta di semplice supervisione.

Tuttavia, non è assolutamente escluso che il COMMITTENTE faccia ricorso a tali servizi dall'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenant. Questi servizi non saranno quindi inquadrati dalla presente Convenzione di servizio e dai suoi impegni/clausole bipartite.

### 7.3.2. Configurazione del soccorso

Per impostazione predefinita, il Fornitore fornisce la messa in opera delle risorse del Bare Metal al COMMITTENTE riservando delle risorse e configurando i deploy per utilizzare le Zone di disponibilità. È responsabilità del COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia COMMITTENTE.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l'implementazione del Servizio, il COMMITTENTE riconosce che dovrà:

-   Dichiarare degli IP fissi dai quali il Fornitore autorizzerà l'accesso all'interfaccia COMMITTENTE (Filtraggio per lista bianca). Le modifiche di questa lista di IP dovranno essere effettuate tramite il menu previsto a tal fine nella console o tramite delle Richieste di servizio per le modifiche successive. All'inizializzazione del servizio, il Fornitore sarà stato informato di almeno 1 indirizzo IP come descritto.

## 7.5. Localizzazione del servizio in Francia

È precisato che nessuna delle operazioni e nessuno dei componenti fisici coinvolti nella fornitura del Servizio, di cui la presente Convenzione di servizio è oggetto, è situato fuori dall'Unione Europea.
Cela inclut notamment le support, la supervisione operativa e la supervisione di sicurezza (SOC) dell'infrastruttura tecnica che eroga il Servizio. Di fatto, tutto lo storage, tutte le attività di amministrazione, supervisione e tutti i trattamenti sono realizzati in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

Salvo le operazioni dei collaboratori e delle agenzie del Fornitore, tutte le operazioni di produzione (compreso lo storage e il trattamento dei dati) e componenti tecnici che erogano il Servizio sono situati nei Datacenter basati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple operanti il servizio

I collaboratori di Cloud Temple che intervengono nell'ambito del Servizio operano dalle agenzie di Cloud Temple tutte situate esclusivamente in Francia. Queste agenzie sono situate in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità dei dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza per quanto riguarda gli accessi a distanza, in particolare per quanto riguarda gli accessi VPN. Questi accessi remoti sono implementati conformemente ai requisiti del referenziale SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere il COMMITTENTE nella gestione, risoluzione dei problemi e ottimizzazione delle loro risorse distribuite. Questo servizio copre una vasta gamma di attività, dall'assistenza nella configurazione iniziale dei servizi al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e funzionalità del servizio di supporto:

- Assistenza nella messa in opera iniziale dell'uso del Servizio;
- Assistenza nella risoluzione degli incidenti;
- Assistenza nella risoluzione dei problemi;
- Monitoraggio e consulenza sull'ottimizzazione della base tecnica.

Nell'ambito del servizio di supporto, il Fornitore non si sostituisce al COMMITTENTE nell'uso del Servizio. Il COMMITTENTE rimane pienamente responsabile della configurazione, dell'operatività delle sue VM e dei suoi Tenant, e della gestione di tutti gli elementi (dati e applicazioni inclusi) che ha archiviato o installato sulle infrastrutture del Fornitore. Il servizio di supporto tecnico è fornito in conformità con i Termini e Condizioni Generali di Vendita e Utilizzo, con il Fornitore tenuto a un obbligo di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti al Fornitore e dal far intervenire le squadre del Fornitore presso i propri clienti o terzi non inclusi nel Contratto. Il Fornitore si riserva il diritto di rifiutare qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità di lavoro di supporto associate.

### 7.6.2. Richiesta del servizio di supporto tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket attraverso la console del COMMITTENTE ed è disponibile durante le normali ore di ufficio, escluse le festività (8h - 18h; Lunedì - Venerdì; calendario e orari francesi). Per le emergenze che si verificano fuori dagli orari di ufficio, in particolare gli incidenti che influenzano significativamente la produzione, il servizio di reperibilità può essere contattato tramite un numero fornito al COMMITTENTE all'inizializzazione del Servizio.

Per ogni richiesta o incidente, è imperativo generare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprensiva di tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia tramite la console di gestione che a seguito di una chiamata telefonica, viene automaticamente creato un ticket. Durante la dichiarazione di un Incidente, è essenziale che il COMMITTENTE fornisca al fornitore il massimo dei dettagli sul problema riscontrato. Questo approccio è cruciale per permettere una valutazione adeguata della situazione, la sua priorizzazione e una diagnosi efficace.

Il COMMITTENTE riceve quindi una conferma via email, indicando la creazione del ticket e il suo numero unico. Il COMMITTENTE può consultare lo stato e la cronologia delle proprie richieste e dichiarazioni di Incidente direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti

Nella dichiarazione di un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il COMMITTENTE deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie e effettuando i test richiesti. Il Fornitore può accedere al Servizio del COMMITTENTE per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono giudicati funzionali e l'Incidente non è imputabile a esso, il COMMITTENTE sarà informato. Su richiesta del COMMITTENTE, il Fornitore può offrire Servizi Professionali per identificare l'origine del problema, fatturabile su accordo preventivo per tranche di 30 minuti.

Nel caso in cui l'Incidente sia di responsabilità del Fornitore o di uno dei suoi subcontraenti, quest'ultimo completa la diagnosi e si dedica al ripristino del Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e sui dati del Fornitore, questi elementi sono considerati probatori per accordo delle Parti.

### 7.6.4. Processo di prioritizzazione dei trattamenti

La determinazione del livello di priorità di un caso si basa su un'analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di criticità:

- I livelli di impatto sono definiti nel seguente modo:

  -----------------------------------------------------------------------------------------------------------------------------------------
  Livello di impatto     Descrizione
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Impatto I1             Il o i servizi del Fornitore sono interrotti

  Impatto I2             Il o i servizi del Fornitore sono degradati

  Impatto I3             Il o i servizi del Fornitore sono attualmente stabili, ma mostrano segni di potenziale declino a lungo termine
  -----------------------------------------------------------------------------------------------------------------------------------------

- I livelli di Criticità sono definiti nel seguente modo:

  -------------------------------------------------------------------------------------------------------------------------------
  Livello di criticità   Descrizione
  --------------------- ---------------------------------------------------------------------------------------------------------
  Criticità C1          Il o i servizi del Fornitore si degradano a una velocità preoccupante

  Criticità C2          Il o i servizi del Fornitore si deteriorano progressivamente nel tempo

  Criticità C3          Il o i servizi del Fornitore presentano uno o più inconvenienti senza conseguenze significative
  -------------------------------------------------------------------------------------------------------------------------------

- Sulla base di un'analisi approfondita della situazione, prendendo in considerazione gli elementi determinanti l'Impatto e la Criticità, una priorità è attribuita al ticket secondo la matrice decisionale qui di seguito:

  --------------------------------------------------------------------------------------------
  Livello di impatto    Livello di criticità       Impatto I1         Impatto I2         Impatto I3
  ----------------------------------------------- ----------------- ----------------- -----------------
  Criticità C1                                     Priorità **P1**    Priorità **P2**     Priorità **P3**

  Criticità C2                                     Priorità **P2**    Priorità **P3**     Priorità **P4**

  Criticità C3                                     Priorità **P3**    Priorità **P4**     Priorità **P5**
  --------------------------------------------------------------------------------------------

Gli impegni di livello di servizio corrispondenti a ogni livello di priorità sono dettagliati nel capitolo successivo.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in lingua francese. Il supporto può essere fornito anche in lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di servizio di Bare Metal in corso di qualificazione SecNumCloud sono situate nell'Unione Europea.

# 8. Impegni e livelli di servizi

Il Fornitore si impegna a garantire un monitoraggio continuo delle prestazioni e dell'integrità della sicurezza della propria infrastruttura tecnica che eroga il Servizio, assicurando il loro funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di prestazione, è riconosciuta non appena identificata dal sistema di supervisione del Fornitore, o a seguito di una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, al fine di garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal ripristino completo del servizio, confermato sia dagli strumenti di supervisione del Fornitore, sia da un feedback dell'utente, assicurando così una ripresa effettiva delle operazioni e una misura fedele della durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura
Le Fornitore si impegna a mantenere un livello di disponibilità e prestazioni conforme agli standard definiti per ogni periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLAs) si applicano a condizione che il COMMITTENTE implementi i suoi sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza del rispetto di tali condizioni da parte del COMMITTENTE, quest'ultimo non potrà rivendicare l'applicazione degli SLA interessati, i quali sono specificamente identificati da un asterisco (\*). L'accessibilità agli SLA avviene tramite l'interfaccia del COMMITTENTE. Le misurazioni sono calcolate mensilmente:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilità della potenza di calcolo: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
-   \*\*SLA 3 (\*) : IC-INFRA_SNC-03\*\* -- Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
-   **SLA 4 : IC-INFRA_SNC-04** -- Accesso a Internet: tasso di disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.

***Note***:

-   *In risposta a un attacco Distributed Denial of Service (DDoS), il Fornitore si riserva il diritto di regolare la configurazione del routing Internet per limitare l'impatto di tale attacco e proteggere la sua infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE è bersaglio, il Fornitore può ricorrere alla tecnica del blackholing tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP mirato a monte dai suoi fornitori, al fine di proteggere le risorse del COMMITTENTE così come quelle di altri COMMITTENTI e dell'infrastruttura del Fornitore. Il Fornitore incoraggia fortemente il COMMITTENTE ad adottare misure simili, come l'uso di software firewall per applicazioni web disponibili sul mercato, e a configurare accuratamente i propri gruppi di sicurezza tramite l'API di controllo.*

-   *Il Fornitore sottolinea la necessità per il COMMITTENTE di minimizzare le aperture di flussi, evitando in particolare di rendere accessibili le porte di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) da tutta Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia del COMMITTENTE

-   SLA 5 : IC-INFRA_SNC-05 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, assicurata in continuo, 24 ore su 24 e 7 giorni su 7.
-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alle API di gestione del Servizio: una disponibilità del 99.9%, calcolata su base 24h/24, 7g/7.

## 8.3. Impegno di disponibilità del supporto

-   **SLA 7 : IC-INFRA_SNC-07** -- Ecco gli impegni di performance del supporto tecnico del Fornitore per gli incidenti, escluse le manutenzioni programmate:

  ------------------------------------------------------------------------------------
  Priorità          Garanzia di tempo di intervento (GTI)   Obiettivo di performance
  ----------------- ---------------------------------------- -------------------------
  Priorità **P1**   30min                                    95%

  Priorità **P2**   2h                                       90%

  Priorità **P3**   4h                                       90%

  Priorità **P4**   24h                                      85%

  Priorità **P5**   48h                                      85%
  ------------------------------------------------------------------------------------

-   **SLA 8 : IC-INFRA_SNC-08** -- Ecco gli impegni di performance del supporto tecnico del Fornitore per le richieste di servizio:

  ---------------------------------------------------------------------------------------
                       Garanzia di tempo di intervento (GTI)   Obiettivo di performance
  -------------------- ---------------------------------------- -------------------------
  Richiesta di servizio 4h                                       90%

  ---------------------------------------------------------------------------------------

*Nota*:

-   *Il tempo per la Garanzia di Tempo di Intervento (GTI) è calcolato dalla differenza tra il momento in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
-   *L'indagine di incidenti riguardanti i COMMITTENTI non includerà interventi remoti sui server ospitati dal COMMITTENTE. Questo supporto si limiterà a spiegare le metriche disponibili relative all'ambiente del COMMITTENTE, al fine di facilitare la comprensione degli incidenti o dei problemi di prestazioni riscontrati. Sulla base dei risultati di questa analisi, potranno essere suggerite raccomandazioni.*

# 9. Organizzazione della relazione contrattuale

## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna a:

-   informare il suo COMMITTENTE in modo adeguato (ad esempio in caso di limitazione delle capacità di risorse tecniche eroganti il Servizio).

-   informare formalmente il COMMITTENTE entro un mese, di ogni cambiamento legale, organizzativo o tecnico che possa avere un impatto sulla conformità del Servizio ai requisiti di protezione contro le leggi extra-europee (19.6 del riferimento SNC v3.2).

-   fornire al COMMITTENTE interfacce e interfacce di servizio che siano almeno in lingua francese.

-   prendere in considerazione i requisiti settoriali specifici legati ai tipi di informazioni affidate dal COMMITTENTE nell'ambito dell’implementazione del Servizio e nei limiti delle responsabilità del Fornitore da una parte, e delle disposizioni previste nel Contratto dall'altra;

-   esaminare i requisiti settoriali specifici legati ai tipi di informazioni affidate dal COMMITTENTE nell’ambito dell’implementazione del Servizio, successivamente espressi dal COMMITTENTE, e a indicare a quest'ultimo le azioni necessarie per la loro considerazione.

-   non divulgare alcuna informazione relativa al servizio a terzi, salvo autorizzazione formale e scritta del COMMITTENTE.

-   fornire tutte le informazioni necessarie per la realizzazione di audit di conformità, in conformità con le disposizioni dell'articolo 28 del GDPR.

-   riportare al COMMITTENTE, tramite questo Accordo di Servizio, qualsiasi incidente di sicurezza che abbia un impatto sul Servizio o sull'uso del Servizio da parte del COMMITTENTE (inclusi i dati del COMMITTENTE).

-   autorizzare un fornitore di audit della sicurezza dei sistemi informativi (PASSI) qualificato, nominato dal Fornitore, ad auditare il servizio nonché il sistema informativo, in conformità con il piano di controllo del SecNumCloud del Fornitore. Inoltre, il Fornitore si impegna a fornire tutte le informazioni necessarie per condurre a buon fine gli audit di conformità alle disposizioni dell'articolo 28 del GDPR, condotti dal committente o da un terzo nominato.

-   fornire, in qualità di subfornitore, in conformità con l'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), assistenza e consulenza al COMMITTENTE e ad allertare quest'ultimo non appena un'istruzione emessa da quest'ultimo sia suscettibile di costituire una violazione delle norme di protezione dei dati.

-   notificare il COMMITTENTE entro un termine ragionevole, attraverso la console del COMMITTENTE o via email al contatto del COMMITTENTE, quando un progetto impatta o è suscettibile di impattare il livello di sicurezza o la disponibilità del Servizio, o a generare una perdita di funzionalità, i potenziali impatti, le misure di mitigazione messe in atto, nonché i rischi residui che lo riguardano.

-   documentare e implementare tutte le procedure necessarie per rispettare i requisiti legali, regolamentari e contrattuali applicabili al servizio, così come le esigenze di sicurezza specifiche del COMMITTENTE, definite da quest’ultimo e previste nel Contratto.

-   non utilizzare i dati del COMMITTENTE provenienti dalla produzione per eseguire test, salvo ottenere precedentemente l'autorizzazione esplicita del COMMITTENTE, nel qual caso il Fornitore si impegna ad anonimizzare tali dati e garantirne la riservatezza durante la loro anonimizzazione.

-   eliminare i dati e i Dati tecnici relativi al COMMITTENTE, conformemente alla "procedura di cancellazione dei dati a fine Contratto" descritta nel presente Accordo di Servizio al termine o alla risoluzione del Contratto.

-   assicurare una cancellazione sicura di tutti i dati del COMMITTENTE tramite riscrittura completa di tutti i supporti che hanno ospitato i loro dati nell'ambito del Servizio.

Su richiesta formale e scritta del COMMITTENTE, il Fornitore si impegna a:

1.  Rendere accessibile al COMMITTENTE il regolamento interno e il codice etico del Fornitore;

2.  Rendere accessibili al COMMITTENTE le sanzioni previste in caso di infrazione alla politica di sicurezza;

3.  Fornire al COMMITTENTE tutti gli eventi che lo riguardano negli elementi di logging del Servizio; il COMMITTENTE potrà inoltre consultare autonomamente gli eventi relativi al suo utilizzo del Servizio tramite le interfacce web e API del Servizio;

4.  Rendere accessibili al COMMITTENTE le procedure che permettono di rispettare i requisiti legali, regolamentari e contrattuali in vigore applicabili al Servizio, così come le esigenze di sicurezza specifiche del COMMITTENTE previste nel Contratto.

5.  A fornire, gli elementi di valutazione dei rischi relativi alla sottomissione dei dati del COMMITTENTE alla giurisdizione di uno stato non-membro dell'Unione Europea;

6.  A informare il COMMITTENTE dei subappaltatori successivi coinvolti nella fornitura del Servizio e a informarlo di ogni cambiamento che lo impatti relativo a questi subappaltatori.

> Il Fornitore e tutte le sue filiali si impegnano a rispettare i valori fondamentali dell'Unione Europea, vale a dire la dignità umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto, nonché il rispetto dei Diritti dell'uomo. Il servizio fornito dal Fornitore è conforme alla legislazione vigente in materia di diritti fondamentali e ai valori dell'Unione Europea relativi al rispetto della dignità umana, alla libertà, all'uguaglianza, alla democrazia e allo Stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore

In virtù di tutte le definizioni e condizioni menzionate nella presente Convenzione di servizio, le responsabilità del Fornitore sono limitate come segue:

1.  Il modello di responsabilità condivisa, descritto nella sezione « Modello di responsabilità condivisa » della presente Convenzione di servizio, limita di fatto il coinvolgimento del Fornitore negli strati di funzionamento che vanno "sopra" la messa a disposizione di risorse di calcolo, di rete, di memoria e di backup. Ciò esclude in particolare senza limitarsi a:

    -   La gestione di ciò che è installato sulle macchine virtuali (OS, middleware, applicazioni, ecc.);

    -   Il mantenimento aggiornato dei OS e altri software installati dal COMMITTENTE sulle sue macchine nei suoi Tenant;

    -   La sicurezza dei programmi, dei software e delle applicazioni installati sulle macchine virtuali;

    -   L'aggiornamento delle macchine virtuali;

    -   Il backup dei dati a livello applicativo.

2.  Il Fornitore non può vantare la proprietà dei dati trasmessi e generati dal COMMITTENTE. Infatti, questi stessi dati appartengono al COMMITTENTE.

3.  Il Fornitore sottolinea che non può in alcun caso sfruttare e/o disporre dei dati trasmessi e generati dal COMMITTENTE senza previa validazione di quest'ultimo, essendo inteso che la loro disposizione è riservata al COMMITTENTE.

4.  Il Fornitore declina ogni responsabilità sui componenti fisicamente ospitati e gestiti dal Fornitore, ma essendo la proprietà diretta del COMMITTENTE o di un terzo con cui il COMMITTENTE ha stipulato un contratto. L'hosting di componenti fisici dei clienti non fa parte del Servizio ed è di fatto al di fuori dell'ambito della presente Convenzione di servizio. Spetta al COMMITTENTE valutare il livello di adesione o di dipendenza che questi componenti introducono nei confronti del Servizio Bare Metal in corso di qualificazione SecNumCloud.

## 9.3. Limitazione di accesso

Nell'ambito del Servizio, il Fornitore è formalmente vietato dall'accedere ai Tenant appartenenti al COMMITTENTE senza preventiva autorizzazione. È responsabilità del COMMITTENTE fornire i necessari accessi al personale del Fornitore, secondo le specifiche esigenze dell'hosting e, se del caso, dei servizi professionali di supporto, se questa opzione è stata scelta dal COMMITTENTE.

Il COMMITTENTE riconosce che tali accessi sono concessi esclusivamente per le esigenze legate alla prestazione di servizi concordati, garantendo così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione di servizio del Fornitore è strettamente proibito. Nell'eventualità che una specifica esigenza tecnica richieda tale accesso, esso potrà essere stabilito solo dopo aver chiaramente notificato il COMMITTENTE, fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del COMMITTENTE, assicurando che ogni eccezione alla regola sia debitamente autorizzata e documentata.

## 9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio

Il Fornitore gestisce la lista dei partner terzi partecipanti alla fornitura del Servizio. Questi terzi sono editori, fornitori (del Fornitore) e altri fornitori partecipanti alla fornitura del Servizio. Il Fornitore applica le seguenti misure a questi terzi:

-   Il Fornitore richiede ai terzi partecipanti alla realizzazione del servizio, nella loro contributo al Servizio, un livello di sicurezza almeno equivalente a quello che si impegna a mantenere nella propria politica di sicurezza applicabile al servizio;

-   Il Fornitore stipula con ciascuno dei terzi partecipanti alla realizzazione del servizio, clausole di audit che consentono a un organismo di qualificazione di verificare che tali terzi rispettino i requisiti legali e le esigenze SNC, permettendo al Fornitore di rispettare i suoi impegni nella presente Convenzione di servizio;

-   Il Fornitore implementa una procedura che consente di controllare regolarmente le misure adottate dai terzi partecipanti alla realizzazione del servizio per rispettare le esigenze del Fornitore e gli impegni nella presente Convenzione di servizio;

-   Il Fornitore assicura un monitoraggio delle modifiche apportate dai terzi partecipanti alla realizzazione del servizio suscettibili di influenzare il livello di sicurezza del sistema informativo del servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

Il COMMITTENTE ha le seguenti obblighi nell'ambito del Servizio:

-   Per ricordare, il Fornitore fornisce al COMMITTENTE una piattaforma di calcolo (server senza OS) la cui configurazione è a carico del COMMITTENTE.

-   Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione SNC a auditare il Servizio e l'infrastruttura tecnica che fornisce il Servizio.

-   Il COMMITTENTE è responsabile di indicare al Fornitore le eventuali esigenze specifiche del settore legate ai tipi di informazioni affidate dal COMMITTENTE che devono essere prese in considerazione dal Fornitore.

-   Il COMMITTENTE accetta di non richiedere al Fornitore requisiti o azioni che rendano il Fornitore non conforme alle esigenze del riferimento SecNumCloud nella sua versione corrente da una parte, o riducano il livello di sicurezza stabilito dal rispetto di tali esigenze dall'altra parte.

## 9.6. Diritti del COMMITTENTE

In qualsiasi momento nel corso della relazione contrattuale, il COMMITTENTE può presentare una denuncia relativa al servizio qualificato all'ANSSI.

In qualsiasi momento, il COMMITTENTE può chiedere al Fornitore di rendere disponibile il suo regolamento interno e la sua carta etica.

## 9.7. Cancellazione dei dati alla fine del Contratto

Alla fine del contratto, che giunga a scadenza o che sia risolto per qualsiasi motivo, il Fornitore si impegna a procedere con la cancellazione sicura di tutti i dati del COMMITTENTE, inclusi i dati tecnici. Il Fornitore si assicurerà di comunicare al COMMITTENTE un preavviso formale, rispettando un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno quindi eliminati entro un massimo di trenta (30) giorni dalla notifica.

Per attestare questa eliminazione, il Fornitore fornirà al COMMITTENTE un certificato che confermi la cancellazione dei dati.

# 10. Ciclo di vita della presente Convenzione di servizio

## 10.1. Entrata in vigore della Convenzione di servizio

La presente Convenzione di servizio entra in vigore il giorno della sua firma da parte del COMMITTENTE.

La raccolta, la manipolazione, la memoria e il trattamento dei dati effettuati nell'ambito della pre-vendita, dell'implementazione e della cessazione del Servizio, sono effettuati nel rispetto della legislazione vigente.

## 10.2. Evoluzioni della Convenzione di servizio

Le modifiche o gli aggiustamenti apportati alla presente Convenzione di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tal fine. Queste proposte di cambiamento saranno esaminate dalle Parti, abilitate a determinare gli aspetti che necessitano di una formalizzazione scritta.

Si conviene che qualsiasi evoluzione della Convenzione di servizio, dopo validazione, che alteri le condizioni finanziarie inizialmente stabilite, richiederà l'istituzione e la firma di un emendamento al Contratto in corso.

I fattori che possono indurre una revisione di questa Convenzione di servizio includono, senza limitarsi a:

-   L'evoluzione dell'infrastruttura tecnica che fornisce il Servizio Bare Metal;
-   Gli aggiustamenti apportati ai servizi implementati dal Fornitore per fornire il Servizio;
-   Le variazioni degli impegni presi e delle sanzioni applicabili;
-   Le riconfigurazioni organizzative all'interno del COMMITTENTE o del Fornitore;
-   L'espansione o la riduzione del campo di applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è registrata nel preambolo del documento per facilitarne il monitoraggio.

### 10.2.1. Evoluzioni innescate dal COMMITTENTE

Le evoluzioni della Convenzione di servizio possono avere, in particolare, origine da:

-   Un'evoluzione dell'infrastruttura gestita dal Fornitore;

-   Una modifica dei servizi implementati dal Fornitore;

-   Una modifica degli impegni di livelli di servizi da parte del Fornitore.

### 10.2.2. Evoluzioni innescate dal Fornitore

Qualsiasi modifica della Convenzione di servizio è soggetta ad accettazione del COMMITTENTE. Si intende che qualsiasi modifica o integrazione approvata che modifichi gli elementi finanziari del Contratto, potrà implicare la firma di un emendamento a quest'ultimo.

## 10.3. Reversibilità

Cloud Temple si impegna a permettere una revisione della presente Convenzione di servizio (prevedendo in particolare la sua risoluzione) senza penalità per il COMMITTENTE in caso di perdita della qualificazione SecNumCloud.
Les Services ne comprennent pas d'obligation de réversibilité (a sapere, l'aiuto al COMMITTENTE affinché possa migrare il suo sistema verso un altro Fornitore) a eccezione della messa a disposizione del COMMITTENTE da parte del Fornitore dell'interfaccia COMMITTENTE che permette al COMMITTENTE di salvare e recuperare i suoi dati inclusi, in particolare, i dati di configurazione del loro sistema informativo tramite una delle modalità tecniche seguenti a scelta del COMMITTENTE: la messa a disposizione di file secondo uno o più formati documentati e utilizzabili al di fuori del servizio fornito dal Fornitore o tramite la messa in atto di interfacce tecniche che permettano l'accesso ai dati secondo uno schema documentato e utilizzabile (API).

Il COMMITTENTE, solo responsabile del suo sistema, deve fare tutto il necessario per facilitare questa operazione nel caso di necessità (ciò implica, tra l'altro, che metta in atto una documentazione rigorosa a tal fine) e l'elaborazione di piani di reversibilità. Nel caso in cui il COMMITTENTE avesse bisogno di una prestazione complementare, il Fornitore può proporre una missione di consulenza a tal riguardo nel quadro di un contratto specifico da negoziare.

# 11. Disponibilità, continuità e ripristino del servizio

## 11.1. Gestione degli Incidenti e delle interruzioni

### 11.1.1. Incidenti

#### 11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di servizio

-   Sinistri;

-   Guasti e malfunzionamenti;

-   Incidenti di sicurezza che impattano la disponibilità, la riservatezza o l'integrità del Servizio.

#### 11.1.1.2. Trattamento degli incidenti

> Il Fornitore informa il COMMITTENTE il prima possibile, degli incidenti e delle interruzioni, mediante una notifica nella console COMMITTENTE o via e-mail al contatto COMMITTENTE. Il Fornitore informa il COMMITTENTE del trattamento dell'incidente attraverso il canale utilizzato per notificare l'incidente, o tramite il canale indicato nella notifica dell'incidente.

#### 11.1.1.3. Livello di notifica degli Incidenti di sicurezza

Il COMMITTENTE ha la responsabilità di scegliere i livelli di gravità degli Incidenti di sicurezza per i quali desidera essere informato, ad esempio tramite la loro formalizzazione in un DPA applicabile al Servizio.

Per impostazione predefinita, il COMMITTENTE è informato:

-   Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo la scala di impatto definita nel processo di prioritizzazione dei trattamenti della presente Convenzione di servizio);

-   Degli incidenti di sicurezza che impattano la riservatezza o l'integrità dei dati del COMMITTENTE affidati nell'ambito del Servizio;

-   Delle violazioni dei dati a carattere personale per i quali il COMMITTENTE è responsabile del trattamento conformemente all'articolo 8 dell'Allegato DPA nell'ambito del Servizio;

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

Delle violazioni di dati a carattere personale per le quali il Fornitore è responsabile del trattamento comportanti dati personali del COMMITTENTE, conformemente all'articolo 8 dell'Allegato DPA. La manutenzione assicurata consiste nell'attuazione:

-   Del piano di mantenimento in condizioni operative del Servizio per garantire buoni indicatori di disponibilità tali da impegnarsi come sopra indicato dal Fornitore;

-   Del piano di PCA/PRA se sottoscritto dal COMMITTENTE attivato in base agli eventuali incidenti che potrebbero verificarsi.

### 11.2.2. Accessi remoti di Cloud Temple nel perimetro del COMMITTENTE

Il Fornitore si proibisce, nell'ambito della presente Convenzione di servizio, qualsiasi accesso ai Tenants e allo spazio dell'interfaccia del COMMITTENTE.

Spetterà al COMMITTENTE concedere gli accessi necessari al personale del Fornitore. Il COMMITTENTE riconosce che gli accessi saranno utilizzati nell'ambito dell'ospitalità e infine della gestione (se sottoscritta dal COMMITTENTE).

### 11.2.3. Accessi remoti di terzi partecipanti alla fornitura del servizio nel perimetro del COMMITTENTE

Nessun accesso remoto di terzi partecipanti alla fornitura del Servizio è autorizzato.

Se un'esigenza tecnica dovesse rendere necessario tale scenario, allora tale tipo di accesso sarebbe effettuato solo previa notifica al COMMITTENTE, giustificazione e ottenimento del suo accordo scritto.

# 12. Procedura di cancellazione dei dati alla fine del Contratto

Alla fine del Contratto, che il Contratto sia giunto a termine o per qualsiasi altra causa, il Fornitore assicurerà la cancellazione sicura di tutti i dati trattati nell'ambito del Servizio, comprese le Dati tecniche del COMMITTENTE. Il Fornitore fornirà un preavviso formale rispettando un termine di ventuno giorni (21) di calendario. I dati del COMMITTENTE saranno eliminati entro un termine massimo di trenta (30) giorni dopo la notifica. Il Fornitore fornirà un certificato di cancellazione dei dati al COMMITTENTE.

# 13. Legge applicabile

## 13.1. In generale

La legge applicabile e a cui è sottoposta la presente Convenzione di servizio è la legge francese.

## 13.2. Rispetto della legge e delle normative applicabili

Il Fornitore si impegna sui seguenti punti:

-   L'identificazione delle restrizioni legali e normative applicabili nell'ambito del Servizio;

-   Il rispetto delle restrizioni legali e normative applicabili ai dati affidati al Fornitore entro i limiti delle responsabilità di quest'ultimo da una parte, e delle disposizioni previste dal Contratto dall'altra;

-   Il rispetto della Legge informatica e libertà e del GDPR;

-   L'attuazione di misure di protezione dei dati personali;

-   L'attuazione di un processo di monitoraggio legale e normativo;

-   Disporre e mantenere relazioni appropriate o un monitoraggio con le autorità settoriali in relazione alla natura dei dati trattati nell'ambito del Servizi. Ciò include, in particolare, l'ANSSI, il CERT-FR e il CNIL.

## 13.3. GDPR

Agendo in qualità di subappaltatore ai sensi dell'articolo 28 del Regolamento generale sulla protezione dei dati (GDPR), il Fornitore si impegna a:

-   Assicurare la trasparenza e la tracciabilità;

-   Nominare un DPO incaricato di definire e attuare le misure di protezione dei dati a carattere personale;

-   Fornire assistenza e consulenza al COMMITTENTE avvertendolo in caso una sua istruzione costituisca una violazione delle norme di protezione dei dati personali se il Fornitore ha il modo di identificarla;

-   Una garanzia di sicurezza sui dati trattati (grazie alla qualificazione SecNumCloud).

## 13.4. Protezione rispetto alla legge extra-europea

La sede statutaria del Fornitore è stabilita in uno Stato membro dell'Unione Europea. Il capitale sociale e i diritti di voto nella società del Fornitore non sono, direttamente o indirettamente:

-   Detenuti individualmente per oltre il 24%;

-   E detenuti collettivamente per oltre il 39%;

da entità terze aventi la loro sede statutaria, amministrazione centrale o principale stabilimento in uno Stato non membro dell'Unione Europea.

In caso di ricorso da parte del Fornitore, nell'ambito del Servizio, al servizio di una società terza - inclusi subappaltatori - avente la sua sede statutaria, amministrazione centrale o principale stabilimento in uno Stato non membro dell'Unione Europea o appartenente o controllata da una società terza domiciliata al di fuori dell'Unione Europea, il Fornitore si impegna a:

-   Che tale società terza summenzionata non avrà alcun accesso ai dati operati;

-   Disporre di un'autonomia operativa attraverso la possibilità di ricorrere a un altro subappaltatore o di mettere rapidamente in atto un'alternativa tecnologica.

Per ricordare, i dati indicati sono quelli affidati al Fornitore da parte del COMMITTENTE nonché tutte le Dati tecniche contenenti informazioni sui COMMITTENTI.

Ai fini del presente articolo, la nozione di controllo è intesa come quella menzionata al II dell'articolo L233-3 del codice di commercio.

# 14. FIRME

Fatto a ________________, il _________________________

Per Cloud Temple, il FORNITORE

Per _______________, il COMMITTENTE