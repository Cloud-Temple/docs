---
title: Convention de Service SecNumCloud OpenIaaS
---

# 1. CONVENTION DE SERVICES OpenIaaS

  -----------------------------------------------------------------------
  **Destinataires :**            **COMMANDITAIRE**
  ------------------------------ ----------------------------------------
  **Référence du documents**     CT.AM.JUR.ANX OPENIaaS-
                                 202530101_v3.0.docx_Giorno GG AAAA

  **Vos interlocuteurs**         *Nome* *Cognome*

                                 Account Manager

                                 e-mail : *nome.cognome*\@cloud-temple.com

  **Date de dernière mise à      17/01/2025
  jour**                         

  **Date de validazione          Giorno GG AAAA
  contrattuale**                
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Versione**   **Data**     **Azione**                            **Autore**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07/06/2022   Redazione iniziale                   Lorena ALCALDE

  v0.2          14/09/2022   Arricchimento                        Lorena ALCALDE

  v1.0          30/12/2022   Integrazione Indicatori              Lorena ALCALDE

  v1.1          23/01/2023   Modifica piè di pagina               Lorena ALCALDE

  v1.2          22/05/2023   Arricchimento                        Lorena ALCALDE

  v1.3          29/06/2023   Arricchimento                        Lorena ALCALDE

  v1.4          06/11/2023   Modifica Capitale e                  Lorena ALCALDE
                             Arricchimento                        

  v1.5          30/11/2023   Arricchimento                        Lorena ALCALDE

  v1.6          21/03/2024   Arricchimento                        Lorena ALCALDE

  v2.0          29/03/2024   Regolazioni conformità SNC           Nicolas
                                                                  ABRIOUX

  v2.0          03/04/2024   Pubblicazione                        Lorena ALCALDE

  V3.0          17/01/2025   Arricchimento                        Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------

  ------------------------------------------------------------------------------

------------------------------------------------------------------------

# 2. TABELLA DEI CONTENUTI

-   [1. **CONVENZIONE DI SERVIZI
    IaaS**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **TABELLA DEI
    CONTENUTI**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Preliminare e
    Glossario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Preliminari](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acronomi](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Oggetto della presente Convenzione di
    servizio](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Descrizione del
    Servizio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modello di responsabilità
        condivisa](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Presentazione dettagliata del perimetro del
        Servizio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Infrastrutture
            Datacenters](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Infrastruttura software di gestione del
            Servizio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Infrastrutture di
            calcolo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Infrastruttura di
            stoccaggio](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Infrastruttura di rete
            globale](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Infrastruttura di
            backup](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementazione soluzioni di ripristino di attività o
            continuità
            dell'attività](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitazioni dei servizi nel modello IaaS
        certificato](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Servizi gestiti in
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Configurazione del
            recupero](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Configurazione del
            backup](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Implementazione del
        servizio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Prerequisiti
            tecnici](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Localizzazione del servizio in
        Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Localizzazione dei Datacenter ospitanti il
            Servizio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Localizzazione delle agenzie Cloud Temple operanti il
            servizio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Supporto](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Natura del supporto che accompagna il
            servizio](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Richiesta del servizio di supporto
            tecnico](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Processo di gestione degli
            incidenti](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Processo di priorizzazione dei
            trattamenti](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Lingua e localizzazione del servizio di
            supporto](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Impegni e livelli di
    servizi](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Impegni di disponibilità dell'
        infrastruttura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Impegno di disponibilità dell'interfaccia del
        COMMANDITAIRE](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Impegno di disponibilità del
        supporto](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Impegno di disponibilità dello stoccaggio oggetti
        S3](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Precisione riguardo l'impegno di
        backup](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organizzazione della relazione
    contrattuale](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Responsabilità del
        Fornitore](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Limitazione delle responsabilità del
        Fornitore](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Limitazione
        di accesso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Responsabilità delle terze parti partecipanti alla fornitura del
        servizio Secure
        Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. Responsabilità e obblighi del
        COMMANDITAIRE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. Diritti del
        COMMANDITAIRE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Cancellazione dei dati al termine del
        Contratto](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Ciclo di vita della presente Convenzione di
    servizio](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Entrata in vigore della Convenzione di
        servizio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Evoluzioni della Convenzione di
        servizio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Evoluzioni attivate dal
            COMMANDITAIRE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Evoluzioni attivate dal
            Fornitore](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilità](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Disponibilità, continuità e ripristino del
    servizio](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Gestione degli Incidenti e delle
        interruzioni](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Incidenti](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Tipi di Incidenti trattati nel contesto di
                questa Convenzione di
                servizio](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Gestione degli
                incidenti](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Livello di notifica degli Incidenti di
                sicurezza](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Manutenzione del
        Servizio](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Natura della
            manutenzione](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Accessi remoti di Cloud Temple sul perimetro del
            COMMANDITAIRE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Accessi remoti di terzi partecipanti alla fornitura
            del servizio sul perimetro del
            COMMANDITAIRE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Procedura di cancellazione dei dati al termine del
    Contratto](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Diritto applicabile](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. In generale](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Rispetto del diritto e delle normative
        applicabili](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. GDPR](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protezione rispetto al diritto
        extra-europeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. FIRME](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminari e Glossario


## 3.1. Preliminare

Il presente documento formalizza la Convenzione di servizio associata al
servizio OpenIaaS in corso di qualificazione SecNumCloud.

Il Servizio è in corso di qualificazione SecNumCloud (vedi attestazione
che sarà in Appendice).

La presente convenzione di servizio completa ed è complementare alle
condizioni generali di vendita e d'uso del Fornitore. È
inteso che i documenti contrattuali vengano interpretati in maniera
coerente tra di loro. In caso di contraddizione o divergenza tra i
termini dei documenti contrattuali, i documenti prevarranno gli uni sugli
altri nel seguente ordine:

1.  Condizioni Generali di Vendita e Uso (CGVU)

2.  Convenzione di Servizio SecNumCloud IaaS

3.  Convenzione di Servizio SecNumCloud OpenIaaS

4.  Convenzione di Servizio SecNumCloud PaaS

5.  Convenzione di Servizio specifica - Bare Metal

6.  Convenzione specifica particolare

7.  Piano di Assicurazione Sicurezza (PAS)

8.  Condizioni Particolari di Uso (CPU)

9.  Data Protection Agreement

## 3.2. Glossario

Nella presente Convenzione di servizio, il **COMMITTENTE**, il
**Fornitore** e le **Parti** sono identificati nel Contratto
al quale è allegata la presente Convenzione di servizio.

Le espressioni di seguito impiegate nella presente Convenzione di
servizio saranno interpretate conformemente alle definizioni che sono
attribuite loro di seguito:

-   **Cambio:** Qualsiasi aggiunta, modifica o eliminazione
    che impatti il Servizio, che sia stato autorizzato, pianificato o preso in
    carico.

-   **Cambio standard:** Cambio soggetto a una
    procedura, le cui modalità di messa in produzione e gli impatti
    (inclusi finanziari) sono noti e accettati in anticipo dalle Parti. È quindi integrato nel catalogo dei cambiamenti
    standard e può, a seconda dei casi, avere una GTI e una GTR.

-   **Contratto:** indica il contratto sottoscritto dal COMMITTENTE
    presso il Fornitore per consentire al COMMITTENTE di beneficiare
    del Servizio, e al quale è allegata la presente Convenzione di servizio.

-   **Convenzione di Servizio:** Questo documento, stabilito nel quadro di un
    contratto specifico o delle Condizioni Generali di Vendita e
    Uso (CGVU), e questo, in conformità con i requisiti del
    Referenziale SecNumCloud.

-   **Richiesta di Servizio:** richiesta di evoluzione soggetta a una procedura, la cui realizzazione: i) non modifica la CMDB, ii) il
    metodo operativo, i costi e i rischi sono noti e accettati in
    anticipo e non richiedono modalità di rollback specifiche iii) la realizzazione è sottoposta a un accordo di livello di servizio e inclusa nel canone del contratto quando viene
    realizzata in orario e giorni lavorativi.

-   **Disponibilità:** Capacità di assicurare la disponibilità e il
    mantenimento delle prestazioni ottimali del Servizio, in accordo con i
    criteri e gli impegni definiti negli Accordi di Livello di
    Servizio (SLA).

-   **Dati tecnici**: comprende l'insieme dei dati manipolati
    per erogare il Servizio, in particolare di cui l'identità dei
    beneficiari e degli amministratori dell'infrastruttura tecnica,
    dei log dell'infrastruttura tecnica, configurazione degli accessi,
    directory, certificati...

-   **Evento:** Un "evento" è qualsiasi occorrenza rilevabile o
    identificabile che possa avere un'importanza per la gestione del
    Servizio.

-   **Hypervisor:** Sistema operativo che permette l'esecuzione di
    macchine virtuali su una unità di calcolo.

-   **Incidente:** Qualsiasi evento imprevisto che disturba il
    funzionamento normale del Servizio o compromette la sicurezza dei dati.

-   **Incidente di sicurezza:** Qualsiasi evento nell'ambito del
    Servizio:

    -   Di natura intenzionalmente malevola;
    -   Di natura accidentale che comprometta l'integrità, la
        riservatezza o la tracciabilità del Servizio o dei dati del
        COMMITTENTE;
    -   Che comprometta le misure di sicurezza esistenti. Le
        mancate Disponibilità di origine non malevola non sono
        considerate Incidente di Sicurezza (guasto hardware,
        bug, malfunzionamento, calamità naturale...).

-   **Interfaccia COMMITTENTE:** Interfaccia di amministrazione del Servizio
    messa a disposizione del COMMITTENTE dal Fornitore, includente una console di amministrazione web e un'API.

-   **Messa in produzione:** azione(i) di amministrazione della realizzazione
    del Cambio quando questo viene approvato (il cambio, nel senso ITIL, riguarda solo la gestione del cambiamento e non la
    sua realizzazione/concretizzazione).

-   **Problema:** causa di uno o più Incidenti ricorrenti, causa
    di un potenziale Incidente (situazione a rischio) che richiede un'analisi
    e una risoluzione per prevenirne la ricorrenza.

-   **Regione:** indica un insieme geograficamente delimitato di zone
    di disponibilità cloud, fornendo servizi di rete, di
    calcolo e di archiviazione per ottimizzare la latenza, le prestazioni e la conformità normativa locale.

-   **Servizio OpenIaaS:** indica il servizio IaaS basato su una
    tecnologia open-source, in corso di qualificazione SecNumCloud,
    erogato al COMMITTENTE dal Fornitore da
    infrastrutture tecniche mantenute dal Fornitore, come
    descritto nella sezione "Descrizione del Servizio" della presente
    Convenzione di servizio.

<!-- -->

-   **Sinistro:** indica un evento grave di origine naturale o
    umana, accidentale o intenzionale, che causa perdite e
    danni significativi alla Parte colpita.

<!-- -->

-   **Supervisione:** Sorveglianza di un Sistema Informativo o di un
    Servizio, che implica la raccolta di vari dati come
    misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa spettante alle operazioni di Amministrazione.

-   **Tenant:** Un'istanza isolata riservata a un utente o gruppo
    di utenti, condividendo un'infrastruttura comune pur mantenendo
    l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zona di Disponibilità (AZ) (Availability zone):** Una sezione
    specifica e isolata dell'infrastruttura di cloud computing,
    progettata per assicurare l'alta disponibilità e la resilienza dei servizi
    mediante una distribuzione geografica delle risorse.

# 4. Acronimi

  -----------------------------------------------------------------------------
  **Acronimo**   **Definizione**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comitato consultivo sui cambiamenti

  **CMDB**       Configuration Management Database -- Database di
                 gestione delle configurazioni

  **COPIL**      Comitato di pilotaggio

  **COSTRAT**    Comitato strategico

  **COPROJ**     Comitato Progetto

  **DB**         Database (base di dati)
                 
  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Piano di ripristino di attività)

  **GTE**        Garanzia di Tempo di Escalation

  **GTI**        Garanzia di Tempo di Intervento

  **GTR**        Garanzia di Tempo di Risoluzione

  **ITIL**       Information Technology Infrastructure Library - Buone
                 pratiche per la gestione dei SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Manutenzione in condizione operativa

  **MOA**        Direzione Lavori

  **MOE**        Direzione dell'opera

  **MSP**        Fornitore di Servizi Gestiti

  **OS**         Operating System (sistema operativo)

  **PAQ**        Piano di Assicurazione Qualità

  **PaaS**       Platform as a Service

  **PAS**        Piano di Assicurazione Sicurezza

  **PASSI**      Fornitore di Audit della Sicurezza dei Sistemi Informativi

  **RFC**        Request For Change -- Richiesta di cambiamento

  **RGPD**       Regolamento Generale sulla Protezione dei Dati (personali)

  **RPO**        Recovery Point Objective -- Freschezza dei dati restaurati
                 in caso di Sinistro

  **RTO**        Recovery Time Objective -- Termine di recupero del servizio
                 in caso di Sinistro

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Accordo sui livelli di servizio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Manutenzione Applicativa per Terzi

  **UO**         Unità d'Opera

  **VABE**       Validazione di Attitudine alla Buona Utilizzabilità

  **VABF**       Validazione di Attitudine al Buon Funzionamento

  **VM**         Virtual Machine (Macchina virtuale)

  **VSR**        Validazione di Servizio Regolare
  -----------------------------------------------------------------------------

# 5. Oggetto della presente Convenzione di servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo
cui il Fornitore si impegna a erogare il Servizio al COMMITTENTE.
Il suo oggetto è di:

-   Precisare i requisiti di performance attesi dal COMMITTENTE
    in termini di funzionalità e affidabilità del Servizio;

-   Dichiarare gli obblighi del Fornitore per soddisfare i
    livelli di servizio concordati;

-   Identificare le norme regolamentari applicabili specificamente al
    Servizio erogato;

-   Assicurare un'uniformità e un'integrità nella valutazione della
    qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata mediante
    indicatori di performance quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore vedesse
revocata la sua qualificazione SecNumCloud, il Contratto potrà essere risolto di
diritto, senza incorrere in penali, dal COMMITTENTE. In una
tale eventualità, il Fornitore si impegna a informare il COMMITTENTE
di tale dequalificazione tramite notifica ufficiale, con l'invio di una lettera raccomandata con ricevuta di ritorno.

Si rileva che una modifica o un adeguamento della qualifica SecNumCloud non sarà interpretata come una revoca della qualifica iniziale.

# 6. Audit

Il Fornitore si impegna a consentire al COMMITTENTE, o a qualsiasi auditor 
terzo e non concorrenti del Fornitore designato da quest'ultimo, di consultare 
tutti i documenti necessari per attestare il pieno rispetto degli obblighi relativi 
alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale 
sulla Protezione dei Dati (GDPR), facilitando così lo svolgimento degli audit.

Con l'accettazione della presente Convenzione di servizio, il COMMITTENTE
concede la sua autorizzazione esplicita a:

1.  L'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI)
    nonché all'ente di qualificazione competente per intraprendere la
    verifica della conformità del Servizio e del suo sistema
    informativo al referenziale SecNumCloud.
2.  Un fornitore di audit della sicurezza dei sistemi informativi,
    debitamente qualificato PASSI e espressamente designato dal Fornitore,
    per eseguire audit di sicurezza relativi al Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio offerto dal Fornitore si caratterizza per la disponibilità dei seguenti
servizi, che si allineano con il principio di responsabilità condivisa presentato 
nel riferimento SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La messa a disposizione di spazi di storage;

-   L'accesso a servizi di connettività di rete e internet;

-   L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il
COMMITTENTE nell'ambito del Servizio è presentato nel §7.1.

È inteso che il Fornitore mobiliterà la sua esperienza per eseguire i
Servizi secondo le migliori pratiche professionali e in conformità con i requisiti
del riferimento SecNumCloud.

## 7.2. Presentazione dettagliata dell'ambito del Servizio

  ------------------------------------------------------------------------
  Compute          Risorsa di calcolo del Tenant COMMITTENTE.
  ---------------- -------------------------------------------------------
  Storage          Dati di produzione del Tenant COMMITTENTE.

  Object Storage   Disponibilità di un'infrastruttura di object storage
  S3               sovrana multi AZ e compatibile con le API S3 standard.

  Backup           Soggetto a sottoscrizione all'Object Storage S3.

  Infrastruttura   Risorsa di rete del Tenant COMMITTENTE.
  di rete           

  Consola          Il servizio che consente al COMMITTENTE di accedere al
  COMMITTENTE      servizio OpenIaaS e amministrarlo tramite l'interfaccia
                   Shiva.

  Supporto         Il servizio di supporto che accompagna i servizi
                   precedenti e solo questi (\*)
  ------------------------------------------------------------------------

\_(\*) Entro i limiti dell'ambito del Servizio in corso di qualificazione
SNC e delle responsabilità del Fornitore in materia\_

### 7.2.1. Infrastrutture Datacenter

Il Servizio include la messa a disposizione, per ogni Zona di
disponibilità, dei servizi qualificati di seguito riportati:

-   Sito datacenter situato in Francia per la Regione FR, conforme alle
    ultime norme tecnologiche, con un livello di resilienza equivalente o 
    superiore al livello Tier 3 dell'Uptime Institute;
-   Disponibilità di sale tecniche all'interno di datacenter
    dedicati all'hosting delle apparecchiature tecniche necessarie alla
    produzione del servizio, incluse calcolo, storage, rete, cablaggio,
    e altri componenti necessari;
-   Alimentazione elettrica sicura, garantita da due circuiti elettrici
    distinti, per assicurare la continuità del servizio;
-   Fornitura di servizi di climatizzazione, adeguati per rispettare le
    normative e raccomandazioni dei produttori di apparecchiature, al
    fine di mantenere un ambiente ottimale per i dispositivi tecnici;
-   Supervisione continua e metrologia dettagliata, permettendo un
    monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza
    del servizio fornito.

Il Fornitore assicura la disponibilità di servizi avanzati di
rilevazione e spegnimento incendi, progettati per identificare e neutralizzare
efficacemente qualsiasi inizio di incendio all'interno delle installazioni. 
Questi sistemi sono essenziali per garantire la sicurezza delle attrezzature
e dei dati. Includono rilevatori di fumo ad alta precisione e dispositivi di
spegnimento che possono agire rapidamente senza danneggiare l'attrezzatura
informatica. Questo servizio è fondamentale per prevenire i rischi di
incendio, minimizzare i danni potenziali e garantire la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e misure di sicurezza implementate, inclusi i test annuali di commutazione sui gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare i rischi di guasto e assicurare una reattività ottimale in caso di incidente. Accettando queste condizioni, il COMMITTENTE riconosce l'importanza di queste misure e si impegna a collaborare pienamente per facilitare la loro implementazione. Il COMMITTENTE è inoltre incoraggiato a prendere conoscenza delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione del rischio.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria per l'uso del Servizio. Si impegna altresì a mantenere questa console di amministrazione e l'API in condizioni operative ottimali e ne assicura la sicurezza in modo continuativo. Questa console di amministrazione e l'API sono designate collettivamente come "interfaccia COMMITTENTE".

Il Fornitore avverte il COMMITTENTE che un uso anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può attivare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o al Servizio. Si precisa che questa situazione non costituisce un'indisponibilità del Servizio, ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come una indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste identiche perfettamente duplicate inviate alle sue API sono limitate a una al secondo (Throttling). Se il COMMITTENTE invia richieste identiche a una frequenza superiore, il loro rifiuto non potrà essere interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle attrezzature necessarie per l'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Questo comprende:

-   La fornitura dei telai tecnici necessari per il corretto
    funzionamento delle lame di calcolo;
-   La fornitura delle lame di calcolo nelle quantità specificate dal
    COMMITTENTE e distribuite secondo le zone di disponibilità di sua scelta. 
    Si precisa che queste lame di calcolo sono dedicate esclusivamente al COMMITTENTE;
-   La messa a disposizione di sistemi operativi di tipo
    hypervisor, e la garanzia del mantenimento in condizioni operative e di sicurezza della
    infrastruttura software necessaria per il controllo di questi sistemi operativi.
    Si sottolinea che, anche se il Fornitore è responsabile della manutenzione operativa e della 
    sicurezza generale del Servizio, non possiede conoscenze specifiche riguardo agli ambienti di
    produzione del COMMITTENTE né ai requisiti relativi ai suoi carichi di lavoro. Pertanto, 
    la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, 
    un'azione che potrebbe richiedere un riavvio, ricade interamente sul COMMITTENTE. Questa operazione può 
    essere effettuata tramite l'interfaccia COMMITTENTE.

La scelta del modello di lama di calcolo, selezionata dal catalogo proposto dal Fornitore, è di responsabilità del COMMITTENTE.

### 7.2.4. Infrastruttura di storage

Il servizio include la fornitura al COMMITTENTE di un'infrastruttura di archiviazione condivisa di tipo SAN (Storage Area Network), offrendo vari livelli di prestazioni. Questo servizio comprende:

-   L'implementazione e il mantenimento in condizioni operative e di sicurezza del 
    rete SAN dedicata;
-   L'installazione e la gestione delle baie di storage condivise tra
    i clienti, inclusi il loro mantenimento in condizioni operative e di 
    sicurezza, la supervisione e la metrologia;
-   La messa in funzione di sistemi automatizzati per l'allocazione dei LUNs 
    (Logical Unit Numbers) di storage dedicati all'uso del
    COMMITTENTE, in conformità ai volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore implementa, nell'ambito del Servizio, una rete globale
che facilita al COMMITTENTE l'accessibilità dei suoi sistemi
ospitati. Questo servizio comprende:

-   La fornitura, il mantenimento in condizioni operative e di sicurezza
    di tutte le connessioni in fibra ottica che interconnettono le diverse 
    Zone di disponibilità.
-   La fornitura, il mantenimento in condizioni operative e in
    condizioni di sicurezza delle attrezzature tecniche necessarie al buon
    funzionamento della rete e all'isolamento dei diversi clienti.

L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti
private, e le attrezzature di rete, collegamenti operatore e altri
componenti tecnici che realizzano questa interconnessione, non fanno parte
del perimetro del Servizio. Questa interconnessione di rete è implementata
conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMITTENTE un servizio di
backup integrato, dedicato e gestito, destinato alla protezione delle sue
macchine virtuali. Il Fornitore assicura il mantenimento in condizioni
operative e in condizioni di sicurezza di questo servizio di backup.
Il Fornitore garantisce che i backup del COMMITTENTE saranno situati
fuori dalla Zona di disponibilità dei carichi di lavoro
sottoposti a backup, a condizione che il COMMITTENTE abbia sottoscritto alle
Unità di lavoro adeguate.

Questa prestazione di backup si limita al backup delle macchine
virtuali e delle configurazioni di topologia dell'ambiente
OpenIaaS dei Tenants del COMMITTENTE nell'ambito del Servizio.
L'elaborazione e l'applicazione di una politica di backup adeguata
da parte del COMMITTENTE dipendono dalla sottoscrizione a specifiche unità di
lavoro. Spetta quindi al COMMITTENTE assicurarsi della
disponibilità delle risorse tecniche necessarie presso il
Fornitore per implementare la sua politica di backup o adeguarla
alle risorse disponibili.

Il Fornitore si impegna a notificare il COMMITTENTE in caso di
vincoli di capacità e a fornire assistenza consulenziale per
l'ottimizzazione delle risorse. Gli obblighi del Fornitore si
limiteranno all'implementazione delle esigenze espresse dal COMMITTENTE
in materia di politica di backup, nell'ambito delle risorse
sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripristino o continuità operativa

Il Fornitore fornisce al COMMITTENTE l'insieme delle soluzioni
tecniche necessarie per garantire una distribuzione ottimale delle sue
risorse attraverso diverse Zone di disponibilità. Spetta al
COMMITTENTE la responsabilità di gestire efficacemente questa distribuzione
di risorse, per la quale ha la possibilità di sfruttare gli strumenti
del Fornitore disponibili a tale scopo.

## 7.3. Limitazioni dei servizi nel modello OpenIaaS in corso di qualificazione

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

-   L'hosting di componenti fisici del COMMITTENTE;

-   L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti
    private, inclusi i collegamenti operatore;

-   Qualsiasi servizio di tipo gestito, o TMA;

-   Qualsiasi assistenza sulle macchine virtuali a livello OS e
    superiore nel stack di responsabilità IaaS, anche se si tratta di
    semplice supervisione.

Ciò nonostante, non è affatto escluso che il COMMITTENTE possa
ricorrere a tali servizi nell'ambito dell'offerta MSP del Fornitore per
intervenire in modalità di servizi gestiti sui propri Tenants. Questi servizi
non saranno quindi regolamentati dalla presente Convenzione di servizio
e dai suoi impegni/clausole bilaterali.

### 7.3.2. Configurazione del ripristino

Per impostazione predefinita, il Fornitore fornisce l'implementazione delle
risorse IaaS al COMMITTENTE riservando risorse e configurando i
deployment per utilizzare le Zone di disponibilità. Spetta al
COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia
COMMITTENTE.

### 7.3.3. Configurazione del backup

La prestazione di backup si limita al backup delle macchine
virtuali e delle configurazioni di topologia che rappresentano
l'ambiente OpenIaaS dei Tenants del COMMITTENTE nell'ambito del
Servizio.

La prestazione di backup e il completamento della politica di
backup del COMMITTENTE è soggetta alla sottoscrizione di spazio di
archiviazione sul mass storage necessario per garantire il servizio. È
quindi responsabilità del COMMITTENTE sottoscrivere presso il
Fornitore i mezzi tecnici necessari per garantire la politica di
backup sul proprio perimetro informatico, o adeguare la politica di
backup ai mezzi disponibili. Il Fornitore si impegna a
informare il COMMITTENTE in caso di limiti di capacità tecnica.

Il Fornitore implementerà i mezzi tecnici e umani necessari
per il backup del sistema ospitato nel limite delle risorse sottoscritte
dal COMMITTENTE.

D'altra parte, nei perimetri non gestiti dal
Fornitore, spetta al COMMITTENTE definire la propria
strategia di backup e configurare autonomamente i backup delle VM
o effettuare una Richiesta di servizio presso il Fornitore affinché la
configurazione dei backup per i server fisici venga messa in
funzione se il COMMITTENTE dispone di un contratto di servizio
gestito che consente al Fornitore di agire tramite l'interfaccia 
COMMITTENTE che è la console di amministrazione messa a disposizione
nell'ambito della presente Convenzione di servizio e che dispone
di funzionalità per configurare i backup.

Inoltre, questo servizio avrà come unico impegno quello di tradurre
attraverso la configurazione tramite l'interfaccia COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per motivi di flessibilità dell'offerta del Fornitore, il
COMMITTENTE ha l'opzione di associare una politica di non-backup su
alcune delle sue VM. In tal caso, spetta al COMMITTENTE
assumersi la responsabilità di questa scelta. Il Fornitore non
eseguirà i backup delle VM associate alla politica "no backup". Il Fornitore
informa il COMMITTENTE che scegliere la politica "no backup" o
scegliere di eseguire i backup manualmente espone il COMMITTENTE a una perdita
definitiva di dati in caso di Incidente nei livelli inferiori o sui
livelli dipendenti dalla sua responsabilità nel modello IaaS. In tal caso,
sarà impossibile ritenere il Fornitore responsabile per il ripristino
dei dati poiché non ci sarà nulla da ripristinare. Il Fornitore
raccomanda sempre di eseguire i backup delle VM.

Per quanto riguarda il sistema operativo installato su una macchina
virtuale e qualsiasi software o programma eseguito "sopra l'OS", è
responsabilità del COMMITTENTE effettuare le operazioni di
amministrazione e supervisione all'interno dell'Unione Europea se
desidera garantire che l'intera verticalità dei livelli del SI sia
operata e gestita dall'Unione Europea. Le operazioni di
amministrazione al di fuori del perimetro di responsabilità del
Fornitore nell'ambito della presente Convenzione di servizio sono
indicate nella sezione "Modello di responsabilità condivise" della
presente Convenzione di Servizio.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l'implementazione del servizio, il COMMITTENTE riconosce che dovrà:

-   Funzionare con una virtualizzazione di tipo Xen nelle versioni
    supportate dall'editore e fornite dal Fornitore
    nell'ambito del Servizio;

-   Ricorrere tramite il Fornitore all'utilizzo dello strumento di
    backup;

-   Dichiarare IP fissi dai quali il Fornitore autorizzerà l'accesso
    all'interfaccia COMMITTENTE (Filtraggio tramite whitelist).
    Le modifiche di questa lista di IP dovranno essere effettuate tramite il
    menu dedicato nella console o tramite Richieste di
    servizio per le modifiche successive. All'inizio del
    servizio, il Fornitore sarà stato informato di almeno un
    indirizzo IP come descritto.

## 7.5. Localizzazione del servizio in Francia

Si precisa che nessuna delle operazioni e nessuno dei componenti
fisici coinvolti nella fornitura del Servizio, di cui la presente
Convenzione di servizio è oggetto, è situato fuori dall'Unione
Europea.

Questo include in particolare il supporto, la supervisione operativa e la
supervisione della sicurezza (SOC) dell'infrastruttura tecnica che
fornisce il Servizio. Di fatto, tutto lo stoccaggio, tutte le operazioni di
amministrazione, supervisione e tutti i trattamenti sono eseguiti in
Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

A eccezione delle operazioni dei collaboratori e degli uffici del
Fornitore, l'insieme delle operazioni di produzione (inclusi lo
stoccaggio e il trattamento dei dati) e dei componenti tecnici che
forniscono il Servizio si trovano nei Datacenter situati in
Francia.

### 7.5.2. Localizzazione degli uffici Cloud Temple che operano il servizio

I collaboratori di Cloud Temple coinvolti nel perimetro del
Servizio operano dagli uffici di Cloud Temple tutti situati
esclusivamente in Francia. Questi uffici sono situati in Francia, a Tours,
Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità dei dipendenti di Cloud
Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo
stesso livello di sicurezza per quanto riguarda gli accessi a distanza,
in particolare riguardo agli accessi VPN. Questi accessi a distanza sono
implementati in conformità ai requisiti del referenziale SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere
il COMMITTENTE nella gestione, risoluzione dei problemi e
ottimizzazione delle risorse implementate. Questo servizio copre una
gamma estesa di attività, dal supporto nella configurazione iniziale dei
servizi fino al supporto tecnico avanzato per la risoluzione di problemi
specifici.

Ecco una descrizione delle caratteristiche e delle funzionalità del servizio
di supporto:

-   Assistenza nella messa in opera iniziale dell'utilizzo del Servizio;
-   Assistenza nella risoluzione degli incidenti;
-   Assistenza nella risoluzione dei problemi;
-   Monitoraggio e consulenza sull'ottimizzazione del sostrato tecnico.
Dans le cadre du service de support, le Prestataire ne se substitue pas
al COMMITTENTE nell'uso del Servizio. Il COMMITTENTE resta
completamente responsabile della configurazione, dell'operatività delle sue VM
e dei suoi Tenant, e della gestione di tutti gli elementi (dati e
applicazioni inclusi) che ha memorizzato o installato sull'
infrastrutture del Prestataire. Il servizio di supporto tecnico è
fornito in accordo con le Condizioni Generali di Vendita e
d'Uso, il Prestataire essendo tenuto a un obbligo di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti al Prestataire e dal fare intervenire i team del Prestataire presso i propri clienti o terze parti non incluse nel Contratto. Il Prestataire si riserva il diritto di respingere qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle
unità di opera di supporto associate.

### 7.6.2. Sollecitazione del servizio support tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket
via la console COMMITTENTE ed è disponibile durante le ore
normali di ufficio esclusi i giorni festivi (8h - 18h ; Lunedì -- Venerdì ;
calendario e orari francesi). Per le emergenze al di fuori delle ore lavorative, in particolare per gli incidenti che influiscono in modo significativo sulla produzione, è possibile contattare il servizio di reperibilità tramite un numero comunicato al COMMITTENTE al momento dell'avvio del Servizio.

Per ogni richiesta o Incidente, è indispensabile generare un ticket
presso il supporto del Prestataire. L'inizializzazione di questo ticket,
che comprenda tutte le informazioni necessarie, è essenziale e
segna l'inizio della valutazione degli impegni del Prestataire.

Non appena il Prestataire riceve una richiesta o una notifica
di Incidente, sia tramite la console di gestione sia in seguito a una telefonata, viene creato un ticket automaticamente. Durante la dichiarazione di un Incidente, è essenziale che il COMMITTENTE
fornisca al prestatore il maggior numero di dettagli possibile sul problema
incontrato. Questo approccio è cruciale per consentire una valutazione
adeguata della situazione, la sua prioritizzazione e una diagnosi efficace.

Il COMMITTENTE riceve quindi una conferma via email, che indica
la creazione del ticket e il suo numero unico. Il COMMITTENTE può
consultare lo stato e la cronologia delle sue richieste e dichiarazioni
di Incidenti direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti

Quando si dichiara un Incidente, il team di supporto tecnico del
Prestataire avvia un'indagine per identificare la causa del
problema e stabilire una diagnosi. Il COMMITTENTE deve collaborare
attivamente con il Prestataire fornendo tutte le informazioni
necessarie ed eseguendo i test richiesti. Il Prestataire può
accedere al Servizio del COMMITTENTE per diagnosticare l'Incidente.

Se i Servizi del Prestataire sono considerati funzionali e l'Incidente
non è imputabile a esso, il COMMITTENTE sarà informato. Su richiesta
del COMMITTENTE, il Prestataire può offrire Servizi
Professionali per identificare l'origine del problema, fatturabile su
accordo previo per tranche di 30 minuti.

Nel caso in cui l'Incidente sia responsabilità del Prestataire o di
uno dei suoi subappaltatori, questo completa la diagnosi e si impegna
a ripristinare il Servizio senza costi aggiuntivi. La diagnosi
si basa sugli scambi tra le Parti e sui dati del
Prestataire, questi elementi essendo considerati probanti per accordo delle
Parti.

### 7.6.4. Processo di prioritizzazione dei trattamenti

La determinazione del livello di priorità di un dossier si basa su un'
analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di
criticità:

-   I livelli di impatto sono definiti nel modo seguente:

  -------------------------------------------------------------------------
  Livello     Descrizione
  d'impatto   
  ---------- --------------------------------------------------------------
  Impatto I1  Uno o più servizi del Prestataire sono interrotti

  Impatto I2  Uno o più servizi del Prestataire sono degradati

  Impatto I3  Uno o più servizi del Prestataire sono attualmente stabili,
             ma mostrano segni di potenziale declino a lungo termine
  -------------------------------------------------------------------------

-   I livelli di Criticità sono definiti nel modo seguente:

  -----------------------------------------------------------------------
  Livello di   Descrizione
  criticità   
  ----------- -----------------------------------------------------------
  Criticità   Uno o più servizi del Prestataire si degradano a una velocità
  C1          preoccupante

  Criticità   Uno o più servizi del Prestataire si deteriorano
  C2          progressivamente nel tempo

  Criticità   Uno o più servizi del Prestataire presentano uno o più
  C3          inconvenienti senza conseguenze significative
  -----------------------------------------------------------------------

-   Basato su un'analisi approfondita della situazione, prendendo in
    conto gli elementi che determinano l'Impatto e la Criticità, una
    priorità è assegnata al ticket conformemente alla matrice di
    decisione di seguito:

  -------------------------------------------------------------------------
  Livello di impatto  Livello di         Impatto I1    Impatto I2    Impatto I3
  criticità                                                    
  ---------------------------------- ------------ ------------ ------------
  Criticità C1                       Priorità     Priorità     Priorità
                                     **P1**       **P2**       **P3**

  Criticità C2                       Priorità     Priorità     Priorità
                                     **P2**       **P3**       **P4**

  Criticità C3                       Priorità     Priorità     Priorità
                                     **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

Gli impegni di livello di servizio corrispondenti a ogni livello di
priorità sono dettagliati nel capitolo seguente.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Prestataire al COMMITTENTE almeno in
lingua francese. Il supporto può essere anche fornito in lingua
inglese.

Le operazioni del servizio di supporto del Prestataire per l'offerta di
servizio di infrastruttura qualificata SecNumCloud sono situate nell'Unione
Europea.

# 8. Impegni e livelli di servizi

Il Prestataire si impegna a garantire una sorveglianza continua della
performance e dell'integrità sicuritaria della sua infrastruttura
tecnica che fornisce il Servizio, garantendone il funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di
performance, è riconosciuta dal momento della sua identificazione dal sistema
di supervisione del Prestataire, o in seguito a una notifica da parte di un
utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al
momento più precoce tra questi due eventi, al fine di garantire un
conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente marcata dal ripristino
completo del servizio, confermato sia dagli strumenti di supervisione
del Prestataire, sia con il feedback dell'utente, garantendo così una ripresa delle operazioni effettiva e una misurazione affidabile della durata
dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura

Il Prestataire si impegna a mantenere un livello di disponibilità e di
performance conforme agli standard definiti per ogni periodo
specificato. Gli impegni di livello di servizio (Service Level
Agreements, SLAs) si applicano a condizione che il COMMITTENTE
implementi i suoi sistemi attraverso almeno due delle Zone di
disponibilità presenti nella Regione interessata.

In assenza del rispetto di queste condizioni da parte del COMMITTENTE, questi sarà
nella posizione di non potere pretendere l'applicazione degli SLAs
interessati, i quali sono specificamente identificati da un asterisco
(\*). L'accessibilità agli SLAs avviene tramite l'interfaccia COMMITTENTE.
Le misurazioni si intendono calcolate mensilmente:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilità della
    potenza di calcolo (Compute): tasso di disponibilità garantito del
    99,99%, calcolato su una base 24h/24, 7g/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilità dell'archiviazione:
    tasso di disponibilità garantito del 99,99%, calcolato sul una base
    24h/24, 7g/7.
-   **SLA 3 : IC-INFRA_SNC-03** -- Affidabilità del backup: tasso di
    disponibilità garantito del 99,99%, calcolato sul una base 24h/24,
    7g/7.
-   \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilità dell'infrastruttura
    di rete: tasso di disponibilità garantito del 99,99%, calcolato su una base
    24h/24, 7g/7.
-   **SLA 5 : IC-INFRA_SNC-05** -- Accesso a Internet: tasso di
    disponibilità garantito del 99,99%, calcolato sul una base 24h/24, 7g/7.

***Note*** :

-   *In risposta a un attacco di negazione dei servizi distribuito (DDoS), il
    Prestataire si riserva il diritto di adeguare la propria configurazione di
    routing internet per limitare l'impatto di questo attacco e
    proteggere la propria infrastruttura. In particolare, se un indirizzo IP
    appartenente al COMMITTENTE è mirato, il Prestataire può
    utilizzare la tecnica di blackholing tramite la comunità BGP per
    bloccare tutto il traffico verso l'indirizzo IP mirato a monte, presso i suoi
    fornitori, al fine di proteggere le risorse del
    COMMITTENTE così come quelle di altri COMMITTENTI e dell'
    infrastruttura del Prestataire. Il Prestataire incoraggia vivamente
    il COMMITTENTE ad adottare misure simili, come
    l'uso di software firewall per applicazioni web.
    disponibili sul mercato, e a configurare attentamente i suoi gruppi
    di sicurezza tramite l'API di comando.*

-   *Il Fornitore insiste sulla necessità per il COMMITTENTE di
    minimizzare le aperture di flusso, evitando in particolare di rendere
    accessibili le porte di amministrazione **SSH** (porta TCP 22) e
    **RDP** (porta TCP 3389) dall'intera Internet (sotto-rete
    0.0.0.0/0), così come i protocolli interni come **SMB** (porta
    TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE

-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del
    Servizio: una disponibilità garantita del 97%, assicurata in modo continuo, 24 ore su 24 e 7 giorni su 7.
-   SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del Servizio:
    una disponibilità del 99,9%, calcolata su base 24 ore su 24, 7 giorni su 7.

## 8.3. Impegno di disponibilità del supporto

-   **SLA 8 : IC-INFRA_SNC-08** -- Ecco gli impegni di performance
    del supporto tecnico del Fornitore per gli incidenti, escludendo
    le manutenzioni programmate :

  ------------------------------------------------------------------------
  Priorità         Garanzia di tempo di intervento        Obiettivo di
                   (GTI)                                  performance
  ---------------  -------------------------------------- ---------------------
  Priorità         30mn                                   95%
  **P1**                                             

  Priorità         2h                                     90%
  **P2**                                             

  Priorità         4h                                     90%
  **P3**                                             

  Priorità         24h                                    85%
  **P4**                                             

  Priorità         48h                                    85%
  **P5**                                             
  ------------------------------------------------------------------------

-   **SLA 9 : IC-INFRA_SNC-09** -- Ecco gli impegni di performance
    del supporto tecnico del Fornitore per le richieste di servizio:

  ------------------------------------------------------------------------
                   Garanzia di tempo di intervento        Obiettivo di
                   (GTI)                                  performance
  ---------------- -------------------------------------- --------------------
  Richiesta di     4h                                     90%
  servizio                                             

  ------------------------------------------------------------------------

*Nota* :

-   *Il ritardo per la Garanzia di Tempo di Intervento (GTI) è calcolato
    a partire dalla differenza tra il momento in cui il COMMITTENTE apre
    il ticket e il primo intervento del supporto del Fornitore.*
-   *L'investigazione di incidenti riguardanti i COMMITTENTI non
    comprenderà interventi a distanza sui server ospitati dal
    COMMITTENTE. Questa assistenza si limiterà alla spiegazione delle
    metriche disponibili relative all'ambiente del COMMITTENTE,
    al fine di facilitare la comprensione degli incidenti o dei problemi
    di performance incontrati. Sulla base dei risultati di questa
    analisi, potranno essere suggeriti dei consigli.*

## 8.4. Impegno di disponibilità dello storage oggetto S3

-   **SLA 10 : IC-INFRA_SNC-10** -- Ecco gli impegni di
    disponibilità per lo storage oggetto S3 :

  ------------------------------------------------------------------------------
  Indicatore           Impegno                                  Obiettivo di
                                                                 disponibilità
  -------------------  --------------------------------------   -------------------
  IC-INFRA-SNC-10.1    Durabilità dello storage di un oggetto   99,9999999% / anno
                       in una regione                            

  IC-INFRA-SNC-10.2    Disponibilità dell'API Storage Oggetto   99,99%
                       S3                                        

  IC-INFRA-SNC-10.3    Latenza massima di accesso a un oggetto   150 ms
                       in una regione                           
  ------------------------------------------------------------------------------

Osservazioni:

-   Il Servizio di Storage Oggetto è specificamente pensato per lo
    storage di oggetti e deve essere utilizzato solo per questo scopo, **escludendo
    categoricamente l'uso in modalità blocco**. Utilizzare la modalità blocco attraverso
    metodi indiretti, inclusi ad esempio l'uso di *"FUSE" in un ambiente Linux*, costituisce
    una violazione dei termini di utilizzo indicati. Nessun incidente, malfunzionamento
    o danno derivante da questo uso non conforme sarà coperto dagli Accordi di Livello
    di Servizio (SLA) definiti in questa convenzione di servizi.
-   La garanzia di durabilità è condizionata a un utilizzo dei servizi conforme
    alle migliori pratiche e agli standard attuali, ed esclude esplicitamente qualsiasi
    modifica dei dati, che sia volontaria o accidentale, risultante da azioni intraprese
    dal COMMITTENTE.

## 8.5. Precisazione riguardante l'impegno di backup

La strategia di backup dispiegata per il COMMITTENTE, è
condizionata dalla sottoscrizione alle unità operative adeguate.

Il Fornitore si impegna a mettere a disposizione una soluzione di
backup che permetterà al COMMITTENTE di applicare le politiche di
backup desiderate.

È precisato che il perimetro del Fornitore si ferma alla messa a
disposizione di un servizio di backup e che spetta al COMMITTENTE
supervisionare tramite l'interfaccia COMMITTENTE la corretta esecuzione
delle politiche associate.

È precisato che la gestione delle capacità di storage dello spazio di
storage dedicato ai backup, resta a carico e responsabilità del
COMMITTENTE. Il Fornitore mette a disposizione il tasso di utilizzo
tramite la console.

*Esempio: Mancato backup di una macchina virtuale:*

*Il COMMITTENTE ha l'onere di verificare / supervisionare la corretta
esecuzione delle politiche di backup, nel caso in cui il COMMITTENTE
constati che una macchina virtuale non è stata sottoposta a backup,
spetta a lui verificare la causa, il COMMITTENTE potrà
richiedere il Supporto del Fornitore secondo il livello di supporto
sottoscritto per essere assistito.*

**Lo SLA 8 : IC-INFRA_SNC-08 e SLA 9**, sarà esclusivamente applicabile
nel caso di un Incidente del servizio di backup.

# 9. Organizzazione della relazione contrattuale

## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna:

-   a informare il suo COMMITTENTE adeguatamente (ad esempio in caso
    di limite di capacità delle risorse tecniche che forniscono il
    Servizio).

-   a informare formalmente il COMMITTENTE e con un preavviso di un mese,
    di ogni cambiamento giuridico, organizzativo o tecnico che possa
    avere un impatto sulla conformità del Servizio ai requisiti di
    protezione contro le leggi extra-europee (19.6 del riferimento
    SNC v3.2).

-   a fornire al COMMITTENTE delle interfacce e dei servizi
    che siano almeno in lingua francese.

-   a tenere conto dei requisiti settoriali specifici legati ai
    tipi di informazioni affidate dal COMMITTENTE nel quadro
    dell'implementazione del Servizio e nei limiti delle responsabilità del
    Fornitore da una parte, e delle disposizioni previste nel Contratto
    dall'altra;

-   a esaminare i requisiti settoriali specifici legati ai tipi
    di informazioni affidate dal COMMITTENTE nel quadro
    dell'implementazione del Servizio, successivamente espressi dal
    COMMITTENTE, e a indicare a quest'ultimo le azioni necessarie per
    adottarli

-   a non divulgare nessuna informazione relativa alla prestazione a terzi,
    salvo autorizzazione formale e scritta del COMMITTENTE.

-   a mettere a disposizione tutte le informazioni necessarie per la
    realizzazione degli audit di conformità secondo le disposizioni dell'
    articolo 28 del GDPR.

-   a rendere conto al COMMITTENTE, con la presente Convenzione
    di servizio, di ogni Incidente di sicurezza che impatti il Servizio o
    l'utilizzo del Servizio fatto dal COMMITTENTE (incluse i dati del
    COMMITTENTE).

-   ad autorizzare un fornitore di audit della sicurezza dei sistemi
    informativi (PASSI) qualificato, incaricato dal Fornitore, ad
    auditare il servizio nonché il suo sistema informativo, conformemente 
    al piano di controllo del SecNumCloud del Fornitore. Inoltre, il
    Fornitore s'impegna a fornire tutte le informazioni necessarie
    per realizzare gli audit di conformità alle disposizioni dell'
    articolo 28 del GDPR, realizzati dal committente o da una terza parte
    incaricata.

-   a fornire, in qualità di subappaltatore, conformemente all'articolo 28
    del Regolamento generale sulla protezione dei dati (GDPR),
    assistenza e consigli al COMMITTENTE avvisandolo ogni volta
    che un'istruzione emessa da quest'ultimo sia suscettibile di
    costituire una violazione delle norme di protezione dei dati.

-   a notificare il COMMITTENTE entro un tempo ragionevole, tramite la
    console COMMITTENTE o tramite email al contatto del COMMITTENTE,
    quando un progetto impatta o è suscettibile di impattare il livello di
    sicurezza o la disponibilità del Servizio, o di comportare una perdita di
    funzionalità, i potenziali impatti, le misure di attenuazione
    implementate, così come i rischi residui che lo riguardano.

-   a documentare e a implementare tutte le procedure
    necessarie per rispettare i requisiti legali, regolamentari e
    contrattuali applicabili al servizio, così come i bisogni di
    sicurezza specifici del COMMITTENTE, definiti da quest'ultimo e
    previsti nel Contratto.

-   a non utilizzare i dati del COMMITTENTE derivanti dalla
    production pour réaliser des tests, à l'exception d'en obtenir
    préalablement l'autorisation explicite du COMMITTENTE, auquel cas
    il Fornitore si impegna a anonimizzare tali dati e a garantirne la
    riservatezza durante l'anonimizzazione.

-   cancellare i dati e i Dati tecnici relativi al
    COMMITTENTE, in conformità con la "procedura di cancellazione dei
    dati a fine Contratto" descritta nella presente Convenzione di
    servizio al termine o in caso di risoluzione del Contratto.

-   garantire una cancellazione sicura di tutti i dati del
    COMMITTENTE tramite la riscrittura completa di ogni supporto che abbia
    ospitato i loro dati nel contesto del Servizio.

Su richiesta formale e scritta del COMMITTENTE, il Fornitore si impegna
a:

1.  Rendere accessibili al COMMITTENTE il regolamento interno e la
    carta etica del Fornitore ;

2.  Rendere accessibili al COMMITTENTE le sanzioni applicabili in caso
    di infrazione alla politica di sicurezza ;

3.  Fornire al COMMITTENTE tutti gli eventi che lo riguardano
    negli elementi di log del Servizio; il COMMITTENTE
    può anche consultare autonomamente gli eventi relativi
    al suo utilizzo del Servizio attraverso le interfacce web e API del
    Servizio;

4.  Rendere accessibili al COMMITTENTE le procedure che permettono di
    rispettare i requisiti legali, normativi e contrattuali in
    vigore applicabili al Servizio, nonché le esigenze di sicurezza
    specifiche del COMMITTENTE previste dal Contratto ;

5.  Fornire, gli elementi di valutazione dei rischi relativi alla
    sottomissione dei dati del COMMITTENTE al diritto di uno stato
    non-membro dell'Unione Europea ;

6.  Informare il COMMITTENTE dei subappaltatori successivi
    intervenuti nella fornitura del Servizio, e informarlo di ogni
    cambiamento che vi riguardi in relazione a tali subappaltatori.

> Il Fornitore e tutte le sue filiali si impegnano a rispettare
> i valori fondamentali dell'Unione Europea, ovvero la dignità
> umana, la libertà, la democrazia, l'uguaglianza, lo stato di diritto, nonché
> il rispetto dei Diritti dell'Uomo. Il servizio fornito dal
> Fornitore è conforme alla legislazione vigente in materia di
> diritti fondamentali e ai valori dell'Unione Europea relativi al
> rispetto della dignità umana, della libertà, dell'uguaglianza, della
> democrazia e dello stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore

Considerato l'insieme delle definizioni e condizioni menzionate nella
presente Convenzione di servizio, le responsabilità del Fornitore sono
limitate come segue:

1.  Il modello di responsabilità condivisa, descritto nella sezione
    "Modello di responsabilità condivise" della presente Convenzione di
    servizio, limita di fatto il coinvolgimento del Fornitore negli
    strati di funzionamento che vanno "al di sopra" della messa a
    disposizione di risorse di calcolo, rete, archiviazione e
    backup. Ciò esclude in particolare e senza limitarsi a:

    -   La gestione di ciò che è installato sulle macchine virtuali
        (OS, middleware, applicazioni, ecc.);

    -   L'aggiornamento degli OS e altri software installati dal
        COMMITTENTE sulle sue macchine nei suoi Tenants;

    -   La sicurezza dei programmi, software e applicazioni installati
        sulle macchine virtuali;

    -   L'aggiornamento delle macchine virtuali;

    -   Il backup dei dati a livello applicativo.

2.  Il Fornitore non può impegnarsi nel backup dei
    Tenants del COMMITTENTE senza che il COMMITTENTE abbia previamente
    sottoscritto le unità di lavoro adeguate.

3.  Il Fornitore non può vantare la proprietà dei dati
    trasmessi e generati dal COMMITTENTE. Infatti, tali dati
    rientrano nella proprietà del COMMITTENTE.

4.  Il Fornitore sottolinea che non può in nessun caso sfruttare e/o
    disporre dei dati trasmessi e generati dal COMMITTENTE
    senza la sua previa validazione, essendo inteso che la loro
    disponibilità è riservata al COMMITTENTE.

5.  Il Fornitore declina ogni responsabilità sui componenti
    fisicamente ospitati e gestiti dal Fornitore, ma che siano di
    proprietà diretta del COMMITTENTE o di terzi con i quali il
    COMMITTENTE ha contratto. L'hosting di componenti
    fisici dei clienti non fa parte del Servizio ed è di fatto
    fuori dal contesto della presente Convenzione di servizio. Spetta al
    COMMITTENTE valutare il livello di adesione o dipendenza
    che tali componenti introducono nei confronti del Servizio OpenIaaS
    durante la fase di qualificazione SecNumCloud.

## 9.3. Limitazione dell'accesso

Nel contesto del Servizio, il Fornitore è formalmente vietato
accedere ai Tenants appartenenti al COMMITTENTE senza previa autorizzazione.
Spetta al COMMITTENTE fornire i necessari accessi al personale del Fornitore,
secondo le specifiche esigenze dell'hosting e, se del caso, dei servizi
professionali di supporto, se questa opzione è stata scelta dal
COMMITTENTE.

Il COMMITTENTE riconosce che tali accessi sono concessi esclusivamente
per le esigenze correlate alla prestazione di servizi concordati, garantendo
così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del
Fornitore è strettamente vietato. Nell'eventualità in cui un requisito
tecnico specifico richieda tale accesso, questo
può essere stabilito solo dopo aver chiaramente notificato il COMMITTENTE,
fornito una giustificazione dettagliata e ottenuto il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del
COMMITTENTE, assicurandosi che ogni eccezione alla regola sia debitamente
autorizzata e documentata.

## 9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio 

Il Fornitore gestisce l'elenco dei partner terzi partecipanti alla
fornitura del Servizio. Questi terzi sono gli editori, i fornitori (del
Fornitore) e altri fornitori partecipanti alla fornitura del Servizio.
Il Fornitore applica le seguenti misure a questi terzi:

-   Il Fornitore richiede ai terzi partecipanti all'implementazione del
    servizio, nel loro contributo al Servizio, un livello di sicurezza almeno
    equivalente a quello che si impegna a mantenere nella propria politica di
    sicurezza applicabile al servizio Secure Temple;

-   Il Fornitore stipula contrattualmente, con ciascun terzo partecipante
    all'implementazione del servizio, clausole di audit che consentano
    ad un organismo di qualificazione di verificare che tali terzi rispettino i
    requisiti legali e i requisiti SNC, consentendo al Fornitore di
    rispettare i propri impegni nella presente Convenzione di servizio.

-   Il Fornitore implementa una procedura che consente di controllare
    regolarmente le misure messe in atto dai terzi partecipanti
    all'implementazione del servizio per rispettare i requisiti affinché il
    Fornitore rispetti i propri impegni nella presente Convenzione
    di servizio.

-   Il Fornitore garantisce un monitoraggio dei cambiamenti apportati dai
    terzi partecipanti all'implementazione del servizio che potrebbero
    influire sul livello di sicurezza del sistema informativo del
    servizio.

## 9.5. Responsabilità e obblighi del COMMITTENTE

Il COMMITTENTE ha le seguenti obbligazioni nel contesto del
Servizio:

-   Come promemoria, il Fornitore fornisce al COMMITTENTE una piattaforma
    di esecuzione di macchine virtuali, la cui configurazione è a carico del
    COMMITTENTE. Ogni macchina virtuale non può funzionare senza una politica
    di backup associata. Il Fornitore definisce attraverso le proprie interfacce
    politiche di backup automatiche. Ma è a carico del COMMITTENTE
    l'attivazione di tali politiche di backup e quindi l'attivazione delle
    macchine virtuali.

-   Il COMMITTENTE autorizza l'ANSSI e l'organismo di qualificazione
    SNC ad auditare il Servizio e l'infrastruttura tecnica che eroga il
    Servizio.

-   Il COMMITTENTE è responsabile di indicare al Fornitore eventuali requisiti
    settoriali specifici legati ai tipi di informazioni affidate dal
    COMMITTENTE e che necessitano di essere prese in considerazione dal Fornitore.

-   Il COMMITTENTE accetta di non chiedere al Fornitore requisiti o azioni che facciano derogare il Fornitore ai requisiti del
    SecNumCloud nel suo corrente riferimento o abbassino il livello di
    sicurezza stabilito dal rispetto dei requisiti di tale riferimento.

## 9.6. Diritti del COMMITTENTE

In qualsiasi momento durante il rapporto contrattuale, il COMMITTENTE
può presentare un reclamo relativo al servizio qualificato presso l'ANSSI.

In qualsiasi momento, il COMMITTENTE può richiedere al Fornitore di rendere
accessibili il suo regolamento interno e la sua carta etica.

## 9.7. Cancellazione dei dati a fine Contratto

Alla fine del contratto, che giunga a scadenza o che venga risolto
per qualsiasi motivo, il Fornitore si impegna a procedere alla
cancellazione sicura di tutti i dati del COMMITTENTE, compresi i dati tecnici. Il Fornitore
si assicurerà di comunicare al COMMITTENTE un preavviso formale, rispettando
un termine di ventuno (21) giorni di calendario. I dati del COMMITTENTE saranno
poi cancellati entro un massimo di trenta (30) giorni successivi a tale
notifica.

Per attestare tale cancellazione, il Fornitore rilascerà al
COMMITTENTE un certificato che conferma la cancellazione dei dati.

# 10. Ciclo di vita della presente Convenzione di servizio

## 10.1. Entrata in vigore della Convenzione di servizio

La presente Convenzione di servizio entra in vigore il giorno della sua firma
da parte del COMMITTENTE.
La raccolta, la manipolazione, l'archiviazione e l'elaborazione dei dati
effettuati nell'ambito della prevendita, dell'implementazione, della cessazione del
Servizio, sono eseguiti nel rispetto della legislazione vigente.

## 10.2. Evoluzioni della Convenzione di servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio
derivano esclusivamente dalle richieste formulate dagli organismi di
governance designati a tale scopo. Queste proposte di cambiamento saranno
esaminate dalle Parti, abilitate a determinare gli aspetti
che necessitano di una formalizzazione scritta.

È convenuto che qualsiasi evoluzione della Convenzione di servizio, dopo
la convalida, che alteri le condizioni finanziarie inizialmente stabilite,
richiederà la redazione e la firma di un emendamento al Contratto in
corso.

I fattori che possono indurre una revisione di questa Convenzione di servizio
includono, senza limitarsi a:

-   L'evoluzione dell'infrastruttura tecnica che eroga il Servizio
    OpenIaaS;
-   Le regolazioni apportate ai servizi implementati dal Fornitore
    per fornire il Servizio;
-   Le variazioni degli impegni presi e delle sanzioni applicabili;
-   Le riorganizzazioni all'interno dello SPONSOR o del Fornitore;
-   L'espansione o la riduzione del campo di applicazione del Servizio.

La gestione delle versioni e delle revisioni della Convenzione di servizio è
registrata nel preambolo del documento per facilitare il monitoraggio.

### 10.2.1. Evoluzioni avviate dallo SPONSOR

Le evoluzioni della Convenzione di servizio possono avere, tra l'altro,
come origine:

-   Un'evoluzione dell'infrastruttura gestita dal Fornitore;

-   Una modifica dei servizi implementati dal Fornitore;

-   Una modifica degli impegni di livelli di servizi da parte del
    Fornitore.

### 10.2.2. Evoluzioni avviate dal Fornitore

Qualsiasi modifica della Convenzione di servizio è soggetta all'accettazione
dello SPONSOR. È inteso che qualsiasi modifica o integrazione
convalidate che modifichino gli elementi finanziari del Contratto, possono implicare
la firma di un emendamento a quest'ultimo.

## 10.3. Reversibilità

Inoltre, Cloud Temple si impegna a consentire una revisione della presente
Convenzione di servizio (prevedendo in particolare la sua risoluzione) senza penalità
per lo SPONSOR in caso di perdita della qualificazione SecNumCloud.

I Servizi non comprendono un'obbligazione di reversibilità (cioè,
l'aiuto allo SPONSOR per poter migrare il proprio sistema verso un altro Fornitore),
ad eccezione della messa a disposizione dello
SPONSOR da parte del Fornitore dell'interfaccia SPONSOR che consente
allo SPONSOR di salvare e recuperare i propri dati inclusi
in particolare i dati di configurazione del loro sistema informativo tramite
una delle modalità tecniche seguenti a scelta dello SPONSOR: la
messa a disposizione di file secondo uno o più formati
documentati e utilizzabili al di fuori del servizio fornito dal
Fornitore oppure tramite la creazione di interfacce tecniche
che permettano l'accesso ai dati secondo uno schema documentato e
utilizzabile (API).

Lo SPONSOR, unico responsabile del proprio sistema, deve fare tutto il possibile
per facilitare questa operazione quando necessario (il che implica,
in particolar modo, che prepari una documentazione rigorosa a tal fine) e l'elaborazione di piani di reversibilità. Nel caso in cui lo
SPONSOR avesse bisogno di una prestazione aggiuntiva, il
Fornitore può proporre una missione di consulenza a tale riguardo nell'ambito
di un contratto specifico da negoziare.

# 11. Disponibilità, continuità e ripristino del servizio

## 11.1. Gestione degli Incidenti e delle interruzioni

### 11.1.1. Incidenti

#### 11.1.1.1. Tipi di Incidenti trattati nell'ambito della presente Convenzione di servizio

-   Sinistri;

-   Guasti e malfunzionamenti;

-   Incidenti di sicurezza che impattano la disponibilità, la riservatezza
    o l'integrità del Servizio.

#### 11.1.1.2. Trattamento degli incidenti

> Il Fornitore informa lo SPONSOR, nel più breve tempo possibile,
> degli incidenti e delle interruzioni, mediante una notifica nella
> console SPONSOR o via email al contatto SPONSOR. Il
> Fornitore informa lo SPONSOR del trattamento dell'incidente tramite
> il canale utilizzato per notificare l'incidente, o tramite il canale indicato
> nella notifica dell'incidente.

#### 11.1.1.3. Livello di notifica degli Incidenti di sicurezza

Lo SPONSOR ha la responsabilità di scegliere i livelli di gravità
degli Incidenti di sicurezza per i quali desidera essere informato, ad esempio tramite la formalizzazione in un PAS applicabile al Servizio.

Di default, lo SPONSOR è informato:

-   Degli incidenti di sicurezza con impatto (impatti I1 e I2 secondo
    la scala di impatto definita nel processo di priorizzazione dei trattamenti della presente Convenzione di servizio);

-   Degli incidenti di sicurezza che impattano la riservatezza o
    l'integrità dei dati affidati dallo SPONSOR nell'ambito del
    Servizio;

-   Delle violazioni di dati personali per le quali lo SPONSOR è responsabile del trattamento conformemente all'articolo
    8 dell'Allegato DPA nell'ambito del Servizio;

  

## 11.2. Manutenzione del Servizio

### 11.2.1. Natura della manutenzione

Delle violazioni di dati personali per le quali il
Fornitore è responsabile del trattamento e che includano dati
personali dello SPONSOR, conformemente all'articolo 8 dell'Allegato
DPA. La manutenzione assicurata consiste nell'implementazione:

-   Del piano di mantenimento in condizioni operative del Servizio per
    garantire buoni indicatori di disponibilità come impegnato
    dal Fornitore sopra;

-   Del piano di PCA/PRA se sottoscritto dallo SPONSOR avviato secondo
    gli eventuali incidenti che si verifichino.

### 11.2.2. Accessi remoti di Cloud Temple sul perimetro dello SPONSOR

Il Fornitore si proibisce, nell'ambito della presente Convenzione di
servizio, qualsiasi accesso ai Tenants e allo spazio dell'interfaccia dello
SPONSOR.

Sarà responsabilità dello SPONSOR fornire i necessari accessi al personale
del Fornitore. Lo SPONSOR riconosce che gli accessi saranno utilizzati
nell'ambito dell'hosting e infine della gestione esternalizzata (se sottoscritta
dallo SPONSOR).

### 11.2.3. Accessi remoti di terzi che partecipano alla fornitura del servizio sul perimetro dello SPONSOR

Nessun accesso remoto di terzi che partecipano alla fornitura del Servizio
è autorizzato.

Se un bisogno tecnico rendesse questo caso necessario, allora tale
accesso non sarà effettuato se non dopo notifica allo SPONSOR,
giustificazione e ottenimento del suo accordo scritto.

# 12. Procedura di cancellazione dei dati a fine Contratto

Alla fine del Contratto, sia esso giunto a termine o per qualsiasi
altra causa, il Fornitore assicurerà la cancellazione sicura
dell'integrità dei dati trattati nell'ambito del Servizio, inclusi
i Dati tecnici dello SPONSOR. Il Fornitore darà un
preavviso formale rispettando un termine di ventuno (21)
giorni di calendario. I dati dello SPONSOR saranno eliminati entro un
massimo di trenta (30) giorni dopo la notifica. Il Fornitore
fornirà un certificato di eliminazione dei dati allo SPONSOR.

# 13. Diritto applicabile

## 13.1. In generale

Il diritto applicabile alla presente Convenzione di servizio è il diritto
francese.

## 13.2. Rispetto del diritto e delle normative applicabili

Il Fornitore si impegna sui seguenti punti:

-   L'identificazione dei vincoli legali e normativi
    applicabili nell'ambito del Servizio;

-   Il rispetto dei vincoli legali e normativi applicabili ai
    dati affidati al Fornitore nel limite delle responsabilità
    di quest'ultimo da una parte, e delle disposizioni previste nel Contratto
    dall'altra;

-   Il rispetto della Legge informatica e libertà e del RGPD;

-   L'implementazione di mezzi di protezione dei dati personali;

-   L'implementazione di un processo di aggiornamento legale e normativo;

-   Disporre e mantenere relazioni appropriate o un monitoraggio
    con le autorità settoriali in relazione alla natura dei dati
    trattati nell'ambito dei Servizi. Questo include in particolare l'ANSSI,
    il CERT-FR e la CNIL.

## 13.3. RGPD

Agendo in qualità di subappaltatore ai sensi dell'articolo 28 del
Regolamento generale sulla protezione dei dati (RGPD), il Fornitore
si impegna:

-   Ad assicurare trasparenza e tracciabilità;

-   A designare un DPO incaricato di definire e implementare le
    misure di protezione dei dati personali;

-   Fornire assistenza e consulenza allo SPONSOR avvisandolo
    se un'istruzione di quest'ultimo costituisce una violazione delle regole
    di protezione dei dati personali, qualora il Fornitore ne riscontri la possibilità;

-   Una garanzia di sicurezza sui dati trattati (grazie alla
    qualificazione SecNumCloud).

## 13.4. Protezione nei confronti del diritto extra-europeo

La sede statutaria del Fornitore è stabilita in uno Stato membro
dell'Unione Europea. Il capitale sociale e i diritti di voto nella società del Fornitore
non sono, direttamente o indirettamente:

-   detenuti individualmente per più del 24%;

-   e detenuti collettivamente per più del 39%;

da entità terze che hanno la propria sede, amministrazione centrale
o principale stabilimento in uno Stato non membro
dell'Unione Europea.

Nel caso in cui il Fornitore ricorra, nell'ambito del Servizio, ai
servizi di una società terza - incluso un subappaltatore - con sede statutaria,
amministrazione centrale o principale stabilimento in uno Stato non membro
dell'Unione Europea o appartenente o controllata da una società terza domiciliata
al di fuori dell'Unione Europea, il Fornitore si impegna:
-   che questa suddetta società terza non avrà alcun accesso
    ai dati trattati;

-   di disporre di un'autonomia operativa attraverso la possibilità
    di fare ricorso a un altro subappaltatore o di implementare rapidamente
    un'alternativa tecnologica.

Per richiamo, i dati interessati sono quelli affidati al
Fornitore dal COMMITTENTE nonché tutti i Dati tecnici
contenenti informazioni sui COMMITTENTI.

Per le esigenze del presente articolo, il concetto di controllo è inteso
come quello menzionato al II dell'articolo L233-3 del codice di
commercio.

# 14. FIRME

Fatto a \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Per Cloud Temple, il FORNITORE

Per \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, il COMMITTENTE