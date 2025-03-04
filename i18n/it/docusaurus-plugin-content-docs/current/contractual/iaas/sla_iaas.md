---
title: Convenzione di Servizio SecNumCloud IaaS
---


# 1. CONVENZIONE DI SERVIZI IaaS

  -----------------------------------------------------------------------
  **Destinatari:**            **COMMITTENTE**
  ------------------------------ ----------------------------------------
  **Riferimento del documento**     CT.AM.JUR.ANX CdS-IaaS -
                                 20251701_v3.0.docx_Giorno GG AAAA

  **I vostri interlocutori**         *Nome* *Cognome*

                                 Account Manager

                                 e-mail : *nome.cognome*\@cloud-temple.com

  **Data dell'ultimo aggiornamento**      17/01/2025

  **Data di validazione           Giorno GG AAAA
  contrattuale**
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Versione**  **Data**      **Azione**                            **Autore**
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

# 2. INDICE

-   [1. **CONVENZIONE DI SERVIZI
    IaaS**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **INDICE**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Preliminare e
    Glossario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Preliminare](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acronimi](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Oggetto della presente Convenzione di
    servizio](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Verifica](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Descrizione del
    Servizio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modello di responsabilità
        condivisa](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Presentazione dettagliata del perimetro del
        Servizio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Infrastrutture dei
            Datacenter](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Infrastruttura software di gestione del
            Servizio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Infrastrutture di
            calcolo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Infrastruttura di
            storage](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Infrastruttura di rete
            globale](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Infrastruttura di
            backup](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementazione di soluzioni di ripristino dell'attività o
            continuità
            dell'attività](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitazioni dei servizi nel modello IaaS
        qualificato](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Servizi gestiti in
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Configurazione del
            ripristino](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Configurazione del
            backup](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Implementazione del
        servizio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Requisiti
            tecnici](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Localizzazione del servizio in
        Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Localizzazione dei Datacenter che ospitano il
            Servizio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Localizzazione delle agenzie Cloud Temple che operano il
            servizio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Supporto](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Natura del supporto che accompagna il
            servizio](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Richiesta del servizio di supporto
            tecnico](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Processo di gestione degli
            Incidenti](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Processo di prioritizzazione dei
            trattamenti](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Lingua e localizzazione del servizio di
            supporto](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Impegni e livelli di
    servizi](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Impegni di disponibilità dell'
        infrastruttura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Impegno di disponibilità dell'interfaccia del
        COMMITTENTE](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Impegno di disponibilità del
        supporto](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Impegno di disponibilità dello storage degli oggetti
        S3](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Precisazione riguardante l'impegno di
        backup](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organizzazione della relazione
    contrattuale](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Responsabilità del
        Fornitore](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Limitazione delle responsabilità del
        Fornitore](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Limitazione
        d'accesso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Responsabilità delle terze parti coinvolte nella fornitura del
        servizio Secure
        Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. Responsabilità e obblighi del
        COMMITTENTE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. Diritti del
        COMMITTENTE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Cancellazione dei dati alla fine del
        Contratto](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Ciclo di vita della presente Convenzione di
    servizio](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Entrata in vigore della Convenzione di
        servizio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Evoluzioni della Convenzione di
        servizio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Evoluzioni innescate dal
            COMMITTENTE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Evoluzioni innescate dal
            Fornitore](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilità](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Disponibilità, continuità e ripristino del
    servizio](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Gestione degli Incidenti e delle
        interruzioni](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Incidenti](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di
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
            COMMITTENTE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Accessi remoti di terzi partecipanti alla fornitura
            del servizio sul perimetro del
            COMMITTENTE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Procedura di cancellazione dei dati alla fine del
    Contratto](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Diritto applicabile](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. In modo
        generale](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Rispetto del diritto e delle normative
        applicabili](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. GDPR](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protezione rispetto al diritto
        extra-europeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. FIRME](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminare e Glossario

## 3.1. Preliminare

Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS qualificato SecNumCloud sotto la denominazione di "*Secure Temple*".

Il Servizio è qualificato SecNumCloud (vedere attestazione in Allegato).

La presente convenzione di servizio completa ed è complementare alle condizioni generali di vendita e di utilizzo del Fornitore. Si intende che i documenti contrattuali si interpretano in modo coerente tra loro. In caso di contraddizione o di divergenza tra i termini dei documenti contrattuali, i documenti prevarranno gli uni sugli altri nel seguente ordine:

1.  Condizioni Generali di Vendita e Utilizzo (CGVU)

2.  Convenzione di Servizio SecNumCloud IaaS

3.  Convenzione di Servizio SecNumCloud OpenIaaS

4.  Convenzione di Servizio SecNumCloud PaaS

5.  Convenzione di Servizio specifica - Bare Metal

6.  Convenzione specifica particolare

7.  Piano di Assicurazione Sicurezza (PAS)

8.  Condizioni Particolari di Utilizzo (CPU)

9.  Data Protection Agreement

## 3.2. Glossario

Nella presente Convenzione di servizio, il **COMMITTENTE**, il **Fornitore** e le **Parti** sono identificati nel Contratto al quale è allegata la presente Convenzione di servizio.

Le espressioni di seguito utilizzate nella presente Convenzione di servizio saranno interpretate conformemente alle definizioni che sono loro attribuite qui di seguito:

-   **Cambiamento:** Qualsiasi aggiunta, modifica o eliminazione che impatta il Servizio, che sia stata autorizzata, pianificata o presa in carico.

-   **Cambiamento standard:** Cambiamento oggetto di una procedura, le cui modalità di messa in produzione e gli impatti (compresi quelli finanziari) sono conosciuti e accettati in anticipo dalle Parti. È quindi integrato nel catalogo dei cambiamenti standard, e può a seconda dei casi avere una GTI e una GTR.

-   **Contratto:** designa il contratto sottoscritto dal COMMITTENTE presso il Fornitore per permettere al COMMITTENTE di beneficiare del Servizio, e al quale la presente Convenzione di servizio è allegata.

-   \***Convenzione di servizio:** Questo documento, stabilito nel quadro di un contratto specifico o delle Condizioni Generali di Vendita e di Utilizzo (CGVU), e ciò, in conformità con i requisiti del Referenziale SecNumCloud.

-   **Richiesta di servizio:** richiesta di evoluzione oggetto di una procedura, la cui realizzazione: i) non modifica la CMDB, ii) la modalità operativa, i costi e i rischi sono conosciuti e accettati in anticipo e non necessitano di modalità di ritorno indietro specifiche iii) la realizzazione è soggetta a un accordo di livello di servizio ed è inclusa nel canone del contratto quando è realizzata in ore lavorative e giorni lavorativi.

-   **Disponibilità:** Capacità di assicurare la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

-   **Dati tecnici**: comprende l'insieme dei dati manipolati per fornire il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, dei log dell'infrastruttura tecnica, configurazione degli accessi, directory, certificati...

-   **Evento:** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che può avere un'importanza per la gestione del Servizio.

-   **Hypervisor:** Sistema operativo che permette l'esecuzione di macchine virtuali su una lama di calcolo.

-   **Incidente:** Qualsiasi evento imprevisto che perturba il funzionamento normale del Servizio o compromette la sicurezza dei dati.

-   **Incidente di sicurezza:** Qualsiasi evento nel perimetro del Servizio:

    -   Di natura intenzionalmente malevola;
    -   Di natura accidentale che compromette l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
    -   Che compromette le misure di sicurezza esistenti. I danni alla Disponibilità di origine non malevola non sono considerati come un Incidente di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

-   **Interfaccia COMMITTENTE:** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, che raggruppa una console di amministrazione web e un'API.

-   **Messa in produzione:** azione(i) di amministrazione di realizzazione del Cambiamento quando questo è approvato (il cambiamento, nel senso ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).

-   **Problema**: causa di uno o più Incidenti ricorrenti, causa di un Incidente potenziale (situazione a rischio) che necessita di un'analisi e una risoluzione per prevenire la sua ricorrenza.

-   **Regione:** designa un insieme geograficamente delimitato di zone di disponibilità cloud, che fornisce servizi di rete, di calcolo e di archiviazione per ottimizzare la latenza, la performance e la conformità normativa locale.

-   **Servizio:** designa il servizio IaaS qualificato SecNumCloud "Secure Temple", fornito al COMMITTENTE dal Fornitore da infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" della presente Convenzione di servizio.

-   **Secure Temple**: designa il servizio IaaS qualificato SecNumCloud, proposto dalla società Cloud Temple, come definito nell'attestazione consultabile sul sito dell'ANSSI e fornita in allegato alla presente Convenzione di servizio.

-   **Sinistro:** designa un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni importanti alla Parte sinistrata.

-   **Supervisione:** Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di diversi dati come misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che appartiene alle operazioni di Amministrazione.

-   **Tenant:** Un'istanza isolata riservata a un utente o gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zona di Disponibilità (AZ) (Availability zone):** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per assicurare l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.

# 4. Acronimi

  -----------------------------------------------------------------------------
  **Acronimo**   **Definizione**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comitato consultivo sui cambiamenti

  **CMDB**       Configuration Management Database -- Database di gestione delle configurazioni

  **COPIL**      Comitato di pilotaggio

  **COSTRAT**    Comitato strategico

  **COPROJ**     Comitato Progetto

  **DB**         Database (base di dati)

  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Piano di recupero disastri)

  **GTE**        Garanzia di Tempo di Escalation

  **GTI**        Garanzia di Tempo di Intervento

  **GTR**        Garanzia di Tempo di Risoluzione

  **ITIL**       Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Mantenimento in condizioni operative

  **MOA**        Promotore

  **MOE**        Direzione dei Lavori

  **MSP**        Managed Services Provider

  **OS**         Operating system (sistema operativo)

  **PAQ**        Piano di Assicurazione della Qualità

  **PaaS**       Platform as a Service

  **PAS**        Piano di Assicurazione della Sicurezza

  **PASSI**      Fornitore di Audit della Sicurezza dei Sistemi Informatici

  **RFC**        Request For Change -- Richiesta di cambiamento

  **RGPD**       Regolamento Generale sulla Protezione dei Dati (personali)

  **RPO**        Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Disastro

  **RTO**        Recovery Time Objective -- Tempo di ripristino del servizio in caso di Disastro

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Accordo sui livelli di servizio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Manutenzione Applicativa Terza

  **UO**         Unità di Lavoro

  **VABE**       Validazione di Idoneità alla Buona Manutenibilità

  **VABF**       Validazione di Idoneità al Buon Funzionamento

  **VM**         Virtual Machine (Macchina virtuale)

  **VSR**        Validazione del Servizio Regolare
  -----------------------------------------------------------------------------

# 5. Oggetto della presente Convenzione di servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al COMMITTENTE. Il suo oggetto è di:

-   Precisare i requisiti di prestazione attesi dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

-   Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati;

-   Identificare le norme regolamentari applicabili specificatamente al Servizio fornito;

-   Assicurare uniformità e integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di prestazione quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore si vedesse ritirare la sua qualificazione SecNumCloud, il Contratto potrà essere risolto di pieno diritto, senza incorrere in penalità, dal COMMITTENTE. In tale eventualità, il Fornitore si impegna ad informare il COMMITTENTE di tale decertificazione mediante invio di notifica ufficiale, a mezzo di lettera raccomandata con richiesta di avviso di ricevimento.

Si noti che una modifica o un adeguamento della qualificazione SecNumCloud non sarà interpretata come una revoca della qualificazione iniziale.

# 6. Audit

Il Fornitore s'impegna a permettere al COMMITTENTE, o a qualsiasi revisore terzo e non concorrente del Fornitore che questi abbia designato, di consultare tutti i documenti necessari per l'attestazione del pieno rispetto degli obblighi relativi alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

Accettando la presente Convenzione di servizio, il COMMITTENTE conferisce la sua esplicita autorizzazione a:

1.  L'Agenzia Nazionale per la Sicurezza Informatica (ANSSI) nonché all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al referenziale SecNumCloud.
2.  Un fornitore di audit della sicurezza dei sistemi informativi, debitamente qualificato PASSI ed espressamente designato dal Fornitore, per effettuare audit di sicurezza riguardanti il Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio proposto dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, allineandosi al principio di responsabilità condivisa presentato nel referenziale SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La fornitura di spazi di archiviazione;

-   L'accesso a servizi di connettività di rete e internet;

-   L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nel contesto del Servizio è presentato nel §7.1.

È inteso che il Fornitore mobiliterà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali e in conformità con i requisiti del referenziale SecNumCloud.

## 7.2. Presentazione dettagliata dell'ambito del Servizio

  -----------------------------------------------------------------------------
  Compute          Risorsa di calcolo del Tenant COMMITTENTE
  ---------------- ------------------------------------------------------------
  Storage          Dati di produzione del Tenant COMMITTENTE

  Object storage   messa a disposizione di un'infrastruttura di object storage
  S3               sovrano multi AZ e compatibile con le API standard S3.

  Backup           Modulo sottoscrizione al mass-storage adeguato

  Infrastruttura   Risorsa di rete del Tenant COMMITTENTE
  di rete

  Console          Il servizio che permette al COMMITTENTE di accedere al proprio
  COMMITTENTE      servizio IaaS e gestirlo tramite l'interfaccia Shiva.

  Supporto         Il servizio di supporto che accompagna i servizi precedenti
                   e solo questi (\*)
  -----------------------------------------------------------------------------

\_(\*) Entro i limiti dell'ambito del Servizio qualificato SNC e delle responsabilità del Fornitore in materia\_

### 7.2.1. Infrastrutture Datacenter

Il Servizio include la messa a disposizione, per ciascuna Zona di disponibilità, delle prestazioni qualificate di seguito:

-   Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 dell'Uptime Institute;
-   Messa a disposizione di sale tecniche all'interno dei datacenter dedicati ad ospitare le attrezzature tecniche indispensabili alla produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio, e altri componenti necessari;
-   Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, garantendo la continuità del servizio;
-   Fornitura di servizi di condizionamento, regolati per rispettare le norme e le raccomandazioni dei produttori di attrezzature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
-   Supervisione continua e metrologia dettagliata, permettendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore assicura la messa a disposizione di servizi avanzati di rilevamento e di estinzione di incendi, progettati per identificare e neutralizzare efficacemente qualsiasi principio di incendio all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle attrezzature e dei dati. Comprendono rilevatori di fumo ad alta precisione e dispositivi di estinzione che possono agire rapidamente senza danneggiare l'attrezzatura informatica. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e assicurare la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e le misure di sicurezza messe in atto, inclusi i test annuali di commutazione sui gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare i rischi di guasto e assicurare una reattività ottimale in caso di Incidente. Accettando queste condizioni, il COMMITTENTE riconosce l'importanza di queste misure e si impegna a cooperare pienamente per facilitarne l'attuazione. Il COMMITTENTE è anche incoraggiato a prendere conoscenza delle raccomandazioni di sicurezza fornite e ad integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria all'utilizzo del Servizio. Si impegna inoltre a mantenerle in condizioni operative ottimali e ad assicurarne la sicurezza in modo continuo. Questa console di amministrazione e l'API sono designate in modo raggruppato sotto il termine "interfaccia COMMITTENTE".

Il Fornitore avverte il COMMITTENTE che un utilizzo anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può innescare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o al Servizio. È importante sottolineare che questa situazione non costituisce un'indisponibilità del Servizio ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una al secondo (Throttling). Se il COMMITTENTE invia richieste identiche con una frequenza superiore, il loro rifiuto non potrà essere interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle attrezzature necessarie all'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Questo comprende:

-   La fornitura degli chassis tecnici necessari al buon funzionamento delle lame di calcolo;
-   La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e distribuite secondo le zone di disponibilità di sua scelta. È da notare che queste lame di calcolo sono esclusivamente dedicate al COMMITTENTE;
-   La messa a disposizione di sistemi operativi di tipo hypervisor, nonché la garanzia del mantenimento in condizioni operative e di sicurezza dell'infrastruttura software necessaria alla gestione di questi sistemi operativi. È importante evidenziare che, anche se il Fornitore è responsabile della manutenzione operativa e della sicurezza globale del Servizio, non possiede conoscenze specifiche riguardanti gli ambienti di produzione del COMMITTENTE né dei requisiti legati ai suoi carichi di lavoro. Pertanto, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisor, un'azione che potrebbe richiedere un riavvio, ricade interamente sul COMMITTENTE. Questa operazione può essere realizzata tramite l'Interfaccia COMMITTENTE.

La scelta del modello di lama di calcolo, selezionato tra il catalogo proposto dal Fornitore, è responsabilità del COMMITTENTE.

### 7.2.4. Infrastruttura di storage

Il servizio comprende la fornitura al COMMITTENTE di un'infrastruttura di storage condivisa di tipo SAN (Storage Area Network), che offre diversi livelli di prestazione. Questo servizio include:

-   L'implementazione e il mantenimento in condizioni operative e in condizioni di sicurezza della rete SAN dedicata;
-   L'installazione e la gestione delle baie di storage condivise tra i clienti, compreso il loro mantenimento in condizioni operative e in condizioni di sicurezza, la loro supervisione e la loro metrologia;
-   L'implementazione dei sistemi automatizzati per l'allocazione dei LUN (Logical Unit Numbers) di storage dedicati all'uso del COMMITTENTE, conformemente ai volumi sottoscritti dal COMMITTENTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore implementa nel contesto del Servizio, una rete globale che facilita al COMMITTENTE la messa in accessibilità dei suoi sistemi ospitati. Questo servizio comprende:

-   La fornitura, il mantenimento in condizioni operative e in condizioni di sicurezza dell'insieme dei collegamenti in fibra ottica che interconnettono le diverse Zone di disponibilità;

-   La fornitura, il mantenimento in condizioni operative e in condizioni di sicurezza delle attrezzature tecniche necessarie al buon funzionamento della rete e all'isolamento dei diversi clienti.

L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, e le attrezzature di rete, i collegamenti operatori e altri componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete è implementata conformemente alle disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMITTENTE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue macchine virtuali. Il Fornitore assicura il mantenimento in condizioni operative e in condizioni di sicurezza di questo servizio di backup. Il Fornitore garantisce che i backup del COMMITTENTE saranno situati al di fuori della Zona di disponibilità dei carichi di lavoro salvati, a condizione che il COMMITTENTE abbia sottoscritto alle Unità di lavoro adeguate.

Questa prestazione di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia dell'ambiente IaaS dei Tenant del COMMITTENTE nel contesto del Servizio. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del COMMITTENTE dipendono dalla sottoscrizione a unità di lavoro specifiche. Spetta quindi al COMMITTENTE assicurarsi della disponibilità delle risorse tecniche necessarie presso il Fornitore per implementare la sua politica di backup o di adeguare quest'ultima in funzione dei mezzi disponibili.

Il Fornitore si impegna a notificare il COMMITTENTE in caso di vincoli di capacità e a fornire un'assistenza consulenza per l'ottimizzazione delle risorse. Gli obblighi del Fornitore si limiteranno all'implementazione delle esigenze espresse dal COMMITTENTE in materia di politica di backup, nel contesto delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripristino dell'attività o di continuità dell'attività

Il Fornitore fornisce al COMMITTENTE l'insieme delle soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso diverse Zone di disponibilità. Spetta al COMMITTENTE la responsabilità di gestire efficacemente questa distribuzione di risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a questo scopo.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

-   L'hosting di componenti fisici del COMMITTENTE;

-   L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, inclusi i collegamenti operatore;

-   Qualsiasi servizio di tipo gestito, o TMA;

-   Qualsiasi assistenza sulle macchine virtuali a livello OS e al di sopra nello stack di responsabilità IaaS, anche se si tratta di semplice supervisione.

Ciò detto, non è assolutamente escluso che il COMMITTENTE ricorra a tali servizi presso l'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenant. Questi servizi non saranno allora inquadrati dalla presente Convenzione di servizio e dai suoi impegni/clausole bipartite.

### 7.3.2. Configurazione del ripristino

Per impostazione predefinita, il Fornitore fornisce l'implementazione delle risorse dell'IaaS al COMMITTENTE riservando risorse e configurando i deployment per utilizzare le Zone di disponibilità. Spetta al COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia COMMITTENTE.

### 7.3.3. Configurazione del backup

La prestazione di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia che rappresentano l'ambiente IaaS dei Tenant del COMMITTENTE nel contesto del Servizio.

La prestazione di backup e il completamento della politica di backup del COMMITTENTE sono soggetti alla sottoscrizione di spazio di storage sul mass storage necessario per assicurare il servizio. È quindi responsabilità del COMMITTENTE sottoscrivere presso il Fornitore i mezzi tecnici necessari per assicurare la politica di backup sul suo perimetro informatico, o di adeguare la politica di backup ai mezzi implementati. Il Fornitore si impegna a informare il COMMITTENTE in caso di limite di capacità tecnica.

Il Fornitore metterà in atto i mezzi tecnici e umani necessari al backup del sistema ospitato nel limite delle risorse sottoscritte dal COMMITTENTE.

Inoltre, nel caso dei perimetri non presi in carico dal Fornitore, spetta al COMMITTENTE definire la propria strategia di backup e parametrizzare egli stesso i backup delle VM o effettuare una Richiesta di servizio presso il Fornitore affinché la parametrizzazione dei backup per i server fisici sia messa in atto se il COMMITTENTE dispone di un contratto di servizio gestito che permette al Fornitore di agire tramite l'interfaccia COMMITTENTE che è la console di amministrazione che è messa a disposizione nel contesto di questa Convenzione di servizio e che dispone di funzionalità per configurare i backup.

Inoltre, questo servizio avrà come impegno solo quello di tradurre tramite la parametrizzazione via l'interfaccia COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per ragioni di flessibilità dell'offerta del Fornitore, il COMMITTENTE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In questo caso, spetta al COMMITTENTE assumere questa scelta. Il Fornitore non effettuerà il backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMITTENTE che scegliere la politica "no backup" o scegliere di effettuare il backup manualmente espone il COMMITTENTE a una perdita di dati definitiva in caso di Incidente sugli strati bassi o sugli strati che dipendono dalla sua responsabilità nel modello IaaS. In tal caso, sarà impossibile ritenere il Fornitore responsabile di ripristinare i dati perché non ci sarà nulla da ripristinare. Il Fornitore raccomanda di effettuare sempre il backup delle VM.

Per qualsiasi argomento riguardante l'OS installato su una macchina virtuale e qualsiasi software o programma eseguito "sopra l'OS", è responsabilità del COMMITTENTE realizzare le operazioni di amministrazione e di supervisione all'interno dell'Unione Europea se desidera garantire che tutta la verticalità degli strati del SI siano operati e gestiti dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nel contesto della presente Convenzione di servizio sono indicate nella sezione "Modello di responsabilità condivisa" della presente Convenzione di Servizio.

## 7.4. Implementazione del servizio

### 7.4.1. Requisiti tecnici

Per l'implementazione del Servizio, il COMMITTENTE riconosce che dovrà:

-   Funzionare con una virtualizzazione di tipo VMware nelle versioni supportate dall'editore e fornite dal Fornitore nel contesto del Servizio;

-   Ricorrere tramite il Fornitore all'utilizzo dello strumento di backup;

-   Dichiarare IP fissi dai quali il Fornitore lo autorizzerà ad accedere all'interfaccia COMMITTENTE (Filtraggio per lista bianca). Le modifiche di questa lista di IP dovranno essere realizzate tramite il menu previsto a questo scopo nella console o tramite Richieste di servizio per le modifiche successive. All'inizializzazione del servizio, il Fornitore sarà stato informato come minimo di almeno 1 indirizzo IP come descritto.

## 7.5. Localizzazione del servizio in Francia

Si precisa che nessuna delle operazioni e nessuno dei componenti fisici coinvolti nella fornitura del Servizio, di cui la presente Convenzione di servizio è oggetto, è situato al di fuori dell'Unione Europea.

Ciò include in particolare il supporto, la supervisione operativa e la supervisione di sicurezza (SOC) dell'infrastruttura tecnica che fornisce il Servizio. Di fatto, tutto lo storage, tutte le attività di amministrazione, di supervisione e tutti i trattamenti sono realizzati in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

A prescindere dalle operazioni dei collaboratori e delle agenzie del Fornitore, l'insieme delle operazioni di produzione (comprendenti lo storage e il trattamento dei dati) e dei componenti tecnici che forniscono il Servizio sono situati nei Datacenter basati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio

I collaboratori di Cloud Temple che intervengono sul perimetro del Servizio operano dalle agenzie di Cloud Temple tutte situate esclusivamente in Francia. Queste agenzie sono situate in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità dei dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza riguardante gli accessi a distanza, in particolare riguardante gli accessi VPN. Questi accessi remoti sono implementati conformemente ai requisiti del referenziale SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio

Il Fornitore fornisce un servizio di supporto tecnico volto ad assistere il COMMITTENTE nella gestione, nella risoluzione dei problemi e nell'ottimizzazione delle loro risorse distribuite. Questo servizio copre una gamma estesa di attività, dall'aiuto alla configurazione iniziale dei servizi fino al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e funzionalità del servizio di supporto:

-   Assistenza all'implementazione iniziale dell'utilizzo del Servizio;
-   Assistenza alla risoluzione di incidenti;
-   Assistenza alla risoluzione di problemi;
-   Monitoraggio e consulenza sull'ottimizzazione della base tecnica.

Nel contesto del servizio di supporto, il Fornitore non si sostituisce al COMMITTENTE nell'uso del Servizio. Il COMMITTENTE rimane interamente responsabile della configurazione, dell'utilizzo delle sue VM e dei suoi Tenant, e della gestione di tutti gli elementi (dati e applicazioni inclusi) che ha archiviato o installato sulle infrastrutture del Fornitore. Il servizio di supporto tecnico è fornito in accordo con le Condizioni Generali di Vendita e di Utilizzo, essendo il Fornitore tenuto a un obbligo di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in modo ragionevole, astenendosi in particolare dal richiedere servizi non sottoscritti presso il Fornitore e dal far intervenire le squadre del Fornitore presso i propri clienti o terzi non inclusi nel Contratto. Il Fornitore si riserva il diritto di respingere qualsiasi richiesta di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle unità di lavoro di supporto associate.

### 7.6.2. Richiesta del servizio di supporto tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket via la console COMMITTENTE ed è disponibile durante le normali ore d'ufficio esclusi i giorni festivi (8h - 18h; Lunedì -- Venerdì; calendario e orari francesi). Per le urgenze che si verificano al di fuori delle ore lavorative, in particolare gli incidenti che influenzano significativamente la produzione, il servizio di reperibilità può essere contattato tramite un numero comunicato al COMMITTENTE all'inizializzazione del Servizio.

Per ogni richiesta o Incidente, è imperativo generare un ticket presso il supporto del Fornitore. L'inizializzazione di questo ticket, comprendente tutte le informazioni necessarie, è essenziale e segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica di Incidente, sia tramite la console di gestione sia a seguito di una chiamata telefonica, un ticket viene automaticamente creato. Durante la dichiarazione di un Incidente, è essenziale che il COMMITTENTE fornisca al fornitore il massimo dei dettagli sul problema riscontrato. Questa procedura è cruciale per permettere una valutazione adeguata della situazione, la sua prioritizzazione e una diagnosi efficace.

Il COMMITTENTE riceve quindi una conferma via e-mail, indicante la creazione del ticket e il suo numero unico. Il COMMITTENTE può consultare lo stato e la cronologia delle sue richieste e dichiarazioni di Incidenti direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti

Durante una dichiarazione di un Incidente, il team di supporto tecnico del Fornitore avvia un'indagine per identificare la causa del problema e stabilire una diagnosi. Il COMMITTENTE deve collaborare attivamente con il Fornitore fornendo tutte le informazioni necessarie ed effettuando i test richiesti. Il Fornitore può accedere al Servizio del COMMITTENTE per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono giudicati funzionali e l'Incidente non gli è imputabile, il COMMITTENTE ne sarà informato. Su richiesta del COMMITTENTE, il Fornitore può proporre Servizi Professionali per identificare l'origine del problema, fatturabile su accordo preliminare per tranche di 30 minuti.

Nel caso in cui l'Incidente sia responsabilità del Fornitore o di uno dei suoi subappaltatori, questi completa la diagnosi e si dedica al ripristino del Servizio senza costi aggiuntivi. La diagnosi si basa sugli scambi tra le Parti e i dati del Fornitore, questi elementi essendo considerati probanti per accordo delle Parti.

### 7.6.4. Processo di prioritizzazione dei trattamenti

La determinazione del livello di priorità di un dossier si basa su un'analisi matriciale che valuta l'impatto dell'Incidente e il suo grado di criticità:

-   I livelli di impatto sono definiti nel modo seguente:

  -------------------------------------------------------------------------
  Livello     Descrizione
  d'impatto
  ---------- --------------------------------------------------------------
  Impatto I1  Il o i servizi del Fornitore sono interrotti

  Impatto I2  Il o i servizi del Fornitore sono degradati

  Impatto I3  Il o i servizi del Fornitore sono attualmente stabili,
             ma mostrano segni di potenziale declino a lungo termine
  -------------------------------------------------------------------------

-   I livelli di Criticità sono definiti nel modo seguente:

  -----------------------------------------------------------------------
  Livello di   Descrizione
  criticità
  ----------- -----------------------------------------------------------
  Criticità   Il o i servizi del Fornitore si degradano a una
  C1          velocità preoccupante

  Criticità   Il o i servizi del Fornitore si deteriorano
  C2          progressivamente nel tempo

  Criticità   Il o i servizi del Fornitore presentano uno o più
  C3          inconvenienti senza conseguenze significative
  -----------------------------------------------------------------------

-   Sulla base di un'analisi approfondita della situazione, tenendo conto degli elementi che determinano l'Impatto e la Criticità, una priorità è attribuita al ticket conformemente alla matrice di decisione qui di seguito:

  -------------------------------------------------------------------------
  Livello d'impatto  Livello di         Impatto I1    Impatto I2    Impatto I3
  criticità
  ---------------------------------- ------------ ------------ ------------
  Criticità C1                       Priorità     Priorità     Priorità
                                     **P1**       **P2**       **P3**

  Criticità C2                       Priorità     Priorità     Priorità
                                     **P2**       **P3**       **P4**

  Criticità C3                       Priorità     Priorità     Priorità
                                     **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

Gli impegni di livello di servizio corrispondenti a ciascun livello di priorità sono dettagliati nel capitolo seguente.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in lingua francese. Il supporto può essere fornito anche in lingua inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di servizio di infrastruttura qualificata SecNumCloud sono situate nell'Unione Europea.

# 8. Impegni e livelli di servizi

Il Fornitore si impegna a garantire una sorveglianza continua della performance e dell'integrità di sicurezza della sua infrastruttura tecnica che fornisce il Servizio, vigilando sul loro funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di performance, è riconosciuta fin dalla sua identificazione da parte del sistema di supervisione del Fornitore, o a seguito di una notifica da parte di un utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al momento più precoce tra questi due eventi, al fine di garantire un conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal ripristino completo del servizio, confermato sia dagli strumenti di supervisione del Fornitore, sia da un feedback dell'utente, assicurando così una ripresa effettiva delle operazioni e una misura fedele della durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura

Il Fornitore si impegna a mantenere un livello di disponibilità e di performance conforme agli standard definiti per ciascun periodo specificato. Gli impegni di livello di servizio (Service Level Agreements, SLA) si applicano a condizione che il COMMITTENTE implementi i suoi sistemi attraverso almeno due delle Zone di disponibilità presenti nella Regione interessata.

In assenza di rispetto di queste condizioni da parte del COMMITTENTE, questi si vedrà nell'incapacità di rivendicare l'applicazione degli SLA interessati, i quali sono specificamente identificati da un asterisco (\*). L'accessibilità agli SLA si fa tramite l'interfaccia COMMITTENTE. Le misure si intendono calcolate mensilmente:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilità della potenza di calcolo (Compute): tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilità dello storage: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
-   **SLA 3 : IC-INFRA_SNC-03** -- Affidabilità del backup: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
-   \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilità dell'infrastruttura di rete: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.
-   **SLA 5 : IC-INFRA_SNC-05** -- Accesso Internet: tasso di disponibilità garantito del 99,99%, calcolato su una base 24h/24, 7g/7.

***Osservazioni*** :

-   *In risposta a un attacco di tipo denial of service distribuito (DDoS), il Fornitore si riserva il diritto di regolare la sua configurazione di routing internet per limitare l'impatto di questo attacco e salvaguardare la sua infrastruttura. In particolare, se un indirizzo IP appartenente al COMMITTENTE è preso di mira, il Fornitore può ricorrere alla tecnica di blackholing tramite la comunità BGP per bloccare tutto il traffico verso l'indirizzo IP mirato a monte presso i suoi fornitori, allo scopo di proteggere le risorse del COMMITTENTE così come quelle di altri COMMITTENTI e dell'infrastruttura del Fornitore. Il Fornitore incoraggia vivamente il COMMITTENTE ad adottare misure simili, come l'utilizzo di software di firewall per applicazioni web disponibili sul mercato, e a configurare attentamente i suoi gruppi di sicurezza tramite l'API di comando.*

-   *Il Fornitore insiste sulla necessità per il COMMITTENTE di minimizzare le aperture di flusso, evitando in particolare di rendere accessibili le porte di amministrazione **SSH** (porta TCP 22) e **RDP** (porta TCP 3389) dall'insieme di Internet (sottorete 0.0.0.0/0), così come i protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia del COMMITTENTE

-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione del Servizio: una disponibilità garantita del 97%, assicurata in continuo, 24 ore su 24 e 7 giorni su 7.
-   SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di pilotaggio del Servizio: una disponibilità del 99.9%, calcolata su una base 24h/24, 7g/7.

## 8.3. Impegno di disponibilità del supporto

-   **SLA 8 : IC-INFRA_SNC-08** -- Ecco gli impegni di performance del supporto tecnico del Fornitore per gli incidenti, escluse le manutenzioni programmate:

  ------------------------------------------------------------------------
  Priorità       Garanzia di tempo di intervento    Obiettivo di
                 (GTI)                               performance
  -------------- ----------------------------------- ---------------------
  Priorità       30min                                95%
  **P1**

  Priorità       2h                                  90%
  **P2**

  Priorità       4h                                  90%
  **P3**

  Priorità       24h                                 85%
  **P4**

  Priorità       48h                                 85%
  **P5**
  ------------------------------------------------------------------------

-   **SLA 9 : IC-INFRA_SNC-09** -- Ecco gli impegni di performance del supporto tecnico del Fornitore per le richieste di servizio:

  ------------------------------------------------------------------------
                   Garanzia di tempo di intervento   Obiettivo di
                   (GTI)                              performance
  ---------------- ---------------------------------- --------------------
  Richiesta di       4h                                 90%
  servizio

  ------------------------------------------------------------------------

*Nota* :

-   *Il tempo per la Garanzia di Tempo di Intervento (GTI) è calcolato a partire dalla differenza tra il momento in cui il COMMITTENTE apre il ticket e il primo intervento del supporto del Fornitore.*
-   *L'indagine sugli incidenti riguardanti i COMMITTENTI non comprenderà interventi a distanza sui server ospitati del COMMITTENTE. Questa assistenza si limiterà alla spiegazione delle metriche disponibili relative all'ambiente del COMMITTENTE, al fine di facilitare la comprensione degli incidenti o dei problemi di performance incontrati. Sulla base dei risultati di questa analisi, potranno essere suggerite delle raccomandazioni.*

## 8.4. Impegno di disponibilità dello storage degli oggetti S3

-   **SLA 10 : IC-INFRA_SNC-10** -- Ecco gli impegni di disponibilità per lo storage degli oggetti S3:

  ------------------------------------------------------------------------------
  Indicatore          Impegno                               Obiettivo di
                                                             disponibilità
  ------------------- -------------------------------------- -------------------
  IC-INFRA-SNC-10.1   Durabilità dello storage di un oggetto  99.9999999% / anno
                      su una regione

  IC-INFRA-SNC-10.2   Disponibilità dell'API Storage Oggetto  99.99%
                      S3

  IC-INFRA-SNC-10.3   Latenza massima di accesso a un oggetto  150 ms
                      su una regione
  ------------------------------------------------------------------------------

Note:

-   Il Servizio di Storage Oggetto è specificamente progettato per lo storage di oggetti e deve essere utilizzato solo per questo scopo, **escludendo categoricamente il suo utilizzo in modalità blocco**. Ricorrere alla modalità blocco attraverso metodi indiretti, incluso ad esempio l'uso di *"FUSE in un ambiente Linux"*, costituisce una violazione dei termini d'uso indicati. Nessun incidente, malfunzionamento o danno derivante da questo uso non conforme sarà coperto dagli Accordi di Livello di Servizio (SLA) definiti in questa convenzione di servizi.
-   La garanzia di durabilità è condizionata da un utilizzo dei servizi conforme alle migliori pratiche e standard attuali, ed esclude esplicitamente qualsiasi modifica dei dati, sia essa intenzionale o accidentale, risultante da azioni intraprese dal COMMITTENTE.

  IC-
---
title: Convenzione di Servizio SecNumCloud IaaS
---


# 1. CONVENZIONE DI SERVIZI IaaS

  -----------------------------------------------------------------------
  **Destinatari:**            **COMMITTENTE**
  ------------------------------ ----------------------------------------
  **Riferimento del documento**     CT.AM.JUR.ANX CdS-IaaS -
                                 20251701_v3.0.docx_Giorno GG AAAA

  **I vostri interlocutori**         *Nome* *Cognome*

                                 Account Manager

                                 e-mail : *nome.cognome*\@cloud-temple.com

  **Data dell'ultimo aggiornamento**      17/01/2025

  **Data di validazione           Giorno GG AAAA
  contrattuale**
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Versione**  **Data**      **Azione**                            **Autore**
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

# 2. INDICE

-   [1. **CONVENZIONE DI SERVIZI
    IaaS**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **INDICE**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Preliminare e
    Glossario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Preliminare](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glossario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acronimi](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Oggetto della presente Convenzione di
    servizio](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Verifica](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Descrizione del
    Servizio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modello di responsabilità
        condivisa](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Presentazione dettagliata del perimetro del
        Servizio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Infrastrutture dei
            Datacenter](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Infrastruttura software di gestione del
            Servizio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Infrastrutture di
            calcolo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Infrastruttura di
            storage](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Infrastruttura di rete
            globale](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Infrastruttura di
            backup](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementazione di soluzioni di ripristino dell'attività o
            continuità
            dell'attività](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitazioni dei servizi nel modello IaaS
        qualificato](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Servizi gestiti in
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Configurazione del
            ripristino](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Configurazione del
            backup](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Implementazione del
        servizio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Requisiti
            tecnici](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Localizzazione del servizio in
        Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Localizzazione dei Datacenter che ospitano il
            Servizio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Localizzazione delle agenzie Cloud Temple che operano il
            servizio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Supporto](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Natura del supporto che accompagna il
            servizio](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Richiesta del servizio di supporto
            tecnico](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Processo di gestione degli
            Incidenti](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Processo di prioritizzazione dei
            trattamenti](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Lingua e localizzazione del servizio di
            supporto](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Impegni e livelli di
    servizi](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Impegni di disponibilità dell'
        infrastruttura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Impegno di disponibilità dell'interfaccia del
        COMMITTENTE](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Impegno di disponibilità del
        supporto](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Impegno di disponibilità dello storage degli oggetti
        S3](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Precisazione riguardante l'impegno di
        backup](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organizzazione della relazione
    contrattuale](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Responsabilità del
        Fornitore](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Limitazione delle responsabilità del
        Fornitore](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Limitazione
        d'accesso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Responsabilità delle terze parti coinvolte nella fornitura del
        servizio Secure
        Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. Responsabilità e obblighi del
        COMMITTENTE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. Diritti del
        COMMITTENTE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Cancellazione dei dati alla fine del
        Contratto](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Ciclo di vita della presente Convenzione di
    servizio](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Entrata in vigore della Convenzione di
        servizio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Evoluzioni della Convenzione di
        servizio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Evoluzioni innescate dal
            COMMITTENTE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Evoluzioni innescate dal
            Fornitore](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilità](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Disponibilità, continuità e ripristino del
    servizio](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Gestione degli Incidenti e delle
        interruzioni](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Incidenti](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Tipi di Incidenti trattati nell'ambito di questa Convenzione di
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
            COMMITTENTE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Accessi remoti di terzi partecipanti alla fornitura
            del servizio sul perimetro del
            COMMITTENTE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Procedura di cancellazione dei dati alla fine del
    Contratto](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Diritto applicabile](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. In modo
        generale](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Rispetto del diritto e delle normative
        applicabili](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. GDPR](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protezione rispetto al diritto
        extra-europeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. FIRME](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminare e Glossario

## 3.1. Preliminare

Il presente documento formalizza la Convenzione di servizio associata al servizio IaaS qualificato SecNumCloud sotto la denominazione di "*Secure Temple*".

Il Servizio è qualificato SecNumCloud (vedere attestazione in Allegato).

La presente convenzione di servizio completa ed è complementare alle condizioni generali di vendita e di utilizzo del Fornitore. Si intende che i documenti contrattuali si interpretano in modo coerente tra loro. In caso di contraddizione o di divergenza tra i termini dei documenti contrattuali, i documenti prevarranno gli uni sugli altri nel seguente ordine:

1.  Condizioni Generali di Vendita e Utilizzo (CGVU)

2.  Convenzione di Servizio SecNumCloud IaaS

3.  Convenzione di Servizio SecNumCloud OpenIaaS

4.  Convenzione di Servizio SecNumCloud PaaS

5.  Convenzione di Servizio specifica - Bare Metal

6.  Convenzione specifica particolare

7.  Piano di Assicurazione Sicurezza (PAS)

8.  Condizioni Particolari di Utilizzo (CPU)

9.  Data Protection Agreement

## 3.2. Glossario

Nella presente Convenzione di servizio, il **COMMITTENTE**, il **Fornitore** e le **Parti** sono identificati nel Contratto al quale è allegata la presente Convenzione di servizio.

Le espressioni di seguito utilizzate nella presente Convenzione di servizio saranno interpretate conformemente alle definizioni che sono loro attribuite qui di seguito:

-   **Cambiamento:** Qualsiasi aggiunta, modifica o eliminazione che impatta il Servizio, che sia stata autorizzata, pianificata o presa in carico.

-   **Cambiamento standard:** Cambiamento oggetto di una procedura, le cui modalità di messa in produzione e gli impatti (compresi quelli finanziari) sono conosciuti e accettati in anticipo dalle Parti. È quindi integrato nel catalogo dei cambiamenti standard, e può a seconda dei casi avere una GTI e una GTR.

-   **Contratto:** designa il contratto sottoscritto dal COMMITTENTE presso il Fornitore per permettere al COMMITTENTE di beneficiare del Servizio, e al quale la presente Convenzione di servizio è allegata.

-   \***Convenzione di servizio:** Questo documento, stabilito nel quadro di un contratto specifico o delle Condizioni Generali di Vendita e di Utilizzo (CGVU), e ciò, in conformità con i requisiti del Referenziale SecNumCloud.

-   **Richiesta di servizio:** richiesta di evoluzione oggetto di una procedura, la cui realizzazione: i) non modifica la CMDB, ii) la modalità operativa, i costi e i rischi sono conosciuti e accettati in anticipo e non necessitano di modalità di ritorno indietro specifiche iii) la realizzazione è soggetta a un accordo di livello di servizio ed è inclusa nel canone del contratto quando è realizzata in ore lavorative e giorni lavorativi.

-   **Disponibilità:** Capacità di assicurare la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

-   **Dati tecnici**: comprende l'insieme dei dati manipolati per fornire il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, dei log dell'infrastruttura tecnica, configurazione degli accessi, directory, certificati...

-   **Evento:** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che può avere un'importanza per la gestione del Servizio.

-   **Hypervisor:** Sistema operativo che permette l'esecuzione di macchine virtuali su una lama di calcolo.

-   **Incidente:** Qualsiasi evento imprevisto che perturba il funzionamento normale del Servizio o compromette la sicurezza dei dati.

-   **Incidente di sicurezza:** Qualsiasi evento nel perimetro del Servizio:

    -   Di natura intenzionalmente malevola;
    -   Di natura accidentale che compromette l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
    -   Che compromette le misure di sicurezza esistenti. I danni alla Disponibilità di origine non malevola non sono considerati come un Incidente di sicurezza (guasto hardware, bug, malfunzionamento, disastro naturale...).

-   **Interfaccia COMMITTENTE:** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, che raggruppa una console di amministrazione web e un'API.

-   **Messa in produzione:** azione(i) di amministrazione di realizzazione del Cambiamento quando questo è approvato (il cambiamento, nel senso ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).

-   **Problema**: causa di uno o più Incidenti ricorrenti, causa di un Incidente potenziale (situazione a rischio) che necessita di un'analisi e una risoluzione per prevenire la sua ricorrenza.

-   **Regione:** designa un insieme geograficamente delimitato di zone di disponibilità cloud, che fornisce servizi di rete, di calcolo e di archiviazione per ottimizzare la latenza, la performance e la conformità normativa locale.

-   **Servizio:** designa il servizio IaaS qualificato SecNumCloud "Secure Temple", fornito al COMMITTENTE dal Fornitore da infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" della presente Convenzione di servizio.

-   **Secure Temple**: designa il servizio IaaS qualificato SecNumCloud, proposto dalla società Cloud Temple, come definito nell'attestazione consultabile sul sito dell'ANSSI e fornita in allegato alla presente Convenzione di servizio.

-   **Sinistro:** designa un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni importanti alla Parte sinistrata.

-   **Supervisione:** Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di diversi dati come misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che appartiene alle operazioni di Amministrazione.

-   **Tenant:** Un'istanza isolata riservata a un utente o gruppo di utenti, che condivide un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

-   **Zona di Disponibilità (AZ) (Availability zone):** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per assicurare l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.

# 4. Acronimi

  -----------------------------------------------------------------------------
  **Acronimo**   **Definizione**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comitato consultivo sui cambiamenti

  **CMDB**       Configuration Management Database -- Database di gestione delle configurazioni

  **COPIL**      Comitato di pilotaggio

  **COSTRAT**    Comitato strategico

  **COPROJ**     Comitato Progetto

  **DB**         Database (base di dati)

  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Piano di recupero disastri)

  **GTE**        Garanzia di Tempo di Escalation

  **GTI**        Garanzia di Tempo di Intervento

  **GTR**        Garanzia di Tempo di Risoluzione

  **ITIL**       Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Mantenimento in condizioni operative

  **MOA**        Promotore

  **MOE**        Direzione dei Lavori

  **MSP**        Managed Services Provider

  **OS**         Operating system (sistema operativo)

  **PAQ**        Piano di Assicurazione della Qualità

  **PaaS**       Platform as a Service

  **PAS**        Piano di Assicurazione della Sicurezza

  **PASSI**      Fornitore di Audit della Sicurezza dei Sistemi Informatici

  **RFC**        Request For Change -- Richiesta di cambiamento

  **RGPD**       Regolamento Generale sulla Protezione dei Dati (personali)

  **RPO**        Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Disastro

  **RTO**        Recovery Time Objective -- Tempo di ripristino del servizio in caso di Disastro

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Accordo sui livelli di servizio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Manutenzione Applicativa Terza

  **UO**         Unità di Lavoro

  **VABE**       Validazione di Idoneità alla Buona Manutenibilità

  **VABF**       Validazione di Idoneità al Buon Funzionamento

  **VM**         Virtual Machine (Macchina virtuale)

  **VSR**        Validazione del Servizio Regolare
  -----------------------------------------------------------------------------

# 5. Oggetto della presente Convenzione di servizio

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al COMMITTENTE. Il suo oggetto è di:

-   Precisare i requisiti di prestazione attesi dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

-   Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati;

-   Identificare le norme regolamentari applicabili specificatamente al Servizio fornito;

-   Assicurare uniformità e integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di prestazione quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore si vedesse ritirare la sua qualificazione SecNumCloud, il Contratto potrà essere risolto di pieno diritto, senza incorrere in penalità, dal COMMITTENTE. In tale eventualità, il Fornitore si impegna ad informare il COMMITTENTE di tale decertificazione mediante invio di notifica ufficiale, a mezzo di lettera raccomandata con richiesta di avviso di ricevimento.

Si noti che una modifica o un adeguamento della qualificazione SecNumCloud non sarà interpretata come una revoca della qualificazione iniziale.

# 6. Audit

Il Fornitore s'impegna a permettere al COMMITTENTE, o a qualsiasi revisore terzo e non concorrente del Fornitore che questi abbia designato, di consultare tutti i documenti necessari per l'attestazione del pieno rispetto degli obblighi relativi alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

Accettando la presente Convenzione di servizio, il COMMITTENTE conferisce la sua esplicita autorizzazione a:

1.  L'Agenzia Nazionale per la Sicurezza Informatica (ANSSI) nonché all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al referenziale SecNumCloud.
2.  Un fornitore di audit della sicurezza dei sistemi informativi, debitamente qualificato PASSI ed espressamente designato dal Fornitore, per effettuare audit di sicurezza riguardanti il Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio proposto dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, allineandosi al principio di responsabilità condivisa presentato nel referenziale SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La fornitura di spazi di archiviazione;

-   L'accesso a servizi di connettività di rete e internet;

-   L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nel contesto del Servizio è presentato nel §7.1.

È inteso che il Fornitore mobiliterà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali e in conformità con i requisiti del referenziale SecNumCloud.

## 7.2. Presentazione dettagliata dell'ambito del Servizio

  -----------------------------------------------------------------------------
  Compute          Risorsa di calcolo del Tenant COMMITTENTE
  ---------------- ------------------------------------------------------------
  Storage          Dati di produzione del Tenant COMMITTENTE

  Object storage   messa a disposizione di un'infrastruttura di object storage
  S3               sovrano multi AZ e compatibile con le API standard S3.

  Backup           Modulo sottoscrizione al mass-storage adeguato

  Infrastruttura   Risorsa di rete del Tenant COMMITTENTE
  di rete

  Console          Il servizio che permette al COMMITTENTE di accedere al proprio
  COMMITTENTE      servizio IaaS e gestirlo tramite l'interfaccia Shiva.

  Supporto         Il servizio di supporto che accompagna i servizi precedenti
                   e solo questi (\*)
  -----------------------------------------------------------------------------

\_(\*) Entro i limiti dell'ambito del Servizio qualificato SNC e delle responsabilità del Fornitore in materia\_

### 7.2.1. Infrastrutture Datacenter

Il Servizio include la messa a disposizione, per ciascuna Zona di disponibilità, delle prestazioni qualificate di seguito:

-   Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 dell'Uptime Institute;
-   Messa a disposizione di sale tecniche all'interno dei datacenter dedicati ad ospitare le attrezzature tecniche indispensabili alla produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio, e altri componenti necessari;
-   Alimentazione elettrica sicura, garantita da due circuiti elettrici distinti, garantendo la continuità del servizio;
-   Fornitura di servizi di condizionamento, regolati per rispettare le norme e le raccomandazioni dei produttori di attrezzature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
-   Supervisione continua e metrologia dettagliata, permettendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il
