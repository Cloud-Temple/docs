---
title: Accordo di Servizio Specifico - Bare Metal
---

# 1. ACCORDO DI SERVIZIO BARE METAL

  ------------------------------------------------------------------------------------------------------
  **Destinatari:**                       **COMMITTENTE**
  -------------------------------------- ---------------------------------------------------------------
  **Riferimento del documento**          CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Giorno MM AAAA - VF

  **I vostri contatti**                  *Nome* *Cognome*

                                         Account Manager

                                         e-mail: *nome.cognome*\@cloud-temple.com

  **Data dell'ultimo aggiornamento**     22/01/2025

**Data di convalida contrattuale**     Giorno MM AAAA
  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  **Versione**  **Data**     **Azione**                           **Autore**
  ------------- ------------ ------------------------------------ -----------------
  v1.0          22/01/2025   Redazione iniziale                   Nicolas BODILIS
  ------------- ------------ ------------------------------------ -----------------

  ---------------------------------------------------------------------------------

# 2. INDICE

- [1. **ACCORDO DI SERVIZIO BARE METAL**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
- [2. **INDICE**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
- [3. Premessa e Glossario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
  - [3.1. Premessa](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
  - [3.2. Glossario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
- [4. Acronimi](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
- [5. Oggetto del presente Accordo di servizio](#X30e34f28e133265489633a87e3abd4d1a022de5)
- [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Descrizione del Servizio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
  - [7.1. Modello di responsabilità condivisa](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
  - [7.2. Presentazione dettagliata dell'ambito del Servizio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
    - [7.2.1. Infrastrutture dei Datacenter](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
    - [7.2.2. Infrastruttura software di gestione del Servizio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
    - [7.2.3. Infrastrutture di calcolo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
    - [7.2.4. Infrastruttura di archiviazione](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
    - [7.2.5. Infrastruttura di rete globale](#X78b4484e386c95a988a698cd84bae342679ddb5)
    - [7.2.6. Implementazione di soluzioni di disaster recovery o continuità operativa](#X5610bffa77dd118e87cbee05f204158179c962f)
  - [7.3. Limitazioni dei servizi nel modello Bare Metal qualificato](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
    - [7.3.1. Servizi gestiti in RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
    - [7.3.2. Configurazione del backup](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)

    <!-- -->

  - [7.4. Implementazione del servizio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
    - [7.4.1. Prerequisiti tecnici](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)

    <!-- -->

  - [7.5. Localizzazione del servizio in Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
    - [7.5.1. Localizzazione dei Datacenter che ospitano il Servizio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
    - [7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
  - [7.6. Supporto](#X451baaab9b4764d97da95395b7e24265143a283)
    - [7.6.1. Natura del supporto che accompagna il servizio](#X192381358bcad693baa22b16773742f4c8cf227)
    - [7.6.2. Richiesta del servizio di supporto tecnico](#X03ef425751011df1818d9488df5625576c33f5e)
    - [7.6.3. Processo di gestione degli Incidenti](#Xac759d2aee6d685130dea876d7a1ed03888b994)
    - [7.6.4. Processo di prioritizzazione dei trattamenti](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
    - [7.6.5. Lingua e localizzazione del servizio di supporto](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
- [8. Impegni e livelli di servizio](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
  - [8.1. Impegni di disponibilità dell'infrastruttura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
  - [8.2. Impegno di disponibilità dell'interfaccia COMMITTENTE](#X86570f48e6da9370f069232b4ae175183f2dafd)
  - [8.3. Impegno di disponibilità del supporto](#Xfc8548982b300528a67725f1705f15805f405f0)
- [9. Organizzazione della relazione contrattuale](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
  - [9.1. Responsabilità del Fornitore](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
  - [9.2. Limitazione delle responsabilità del Fornitore](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
  - [9.3. Limitazione di accesso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)

[9.4. Responsabilità di terzi che partecipano alla fornitura del servizio Secure Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)

- [9.5. Responsabilità e obblighi del COMMITTENTE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
- [9.6. Diritti del COMMITTENTE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
- [9.7. Cancellazione dei dati alla fine del Contratto](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)

<!-- -->

- [10. Ciclo di vita del presente Accordo di servizio](#X89744c1f67247955b75e73d73aaa55899645415)
  - [10.1. Entrata in vigore dell'Accordo di servizio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
  - [10.2. Evoluzioni dell'Accordo di servizio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
    - [10.2.1. Evoluzioni attivate dal COMMITTENTE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
    - [10.2.2. Evoluzioni attivate dal Fornitore](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
  - [10.3. Reversibilità](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
- [11. Disponibilità, continuità e ripristino del servizio](#X115fcc8f59c1201dae17a3d86136d153be01044)
  - [11.1. Gestione degli Incidenti e delle interruzioni](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
    - [11.1.1. Incidenti](#X648046c564ac1cd52bebb02b256b193a3da4d74)
      - [11.1.1.1. Tipi di Incidenti trattati nell'ambito di questo Accordo di servizio](#X09cc1e22db275b1a463f85596829f3f871ae224)
      - [11.1.1.2. Trattamento degli incidenti](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
      - [11.1.1.3. Livello di notifica degli Incidenti di sicurezza](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
  - [11.2. Manutenzione del Servizio](#X8f50b0b400c67568e380ddb602ac786ec585905)
    - [11.2.1. Natura della manutenzione](#X903d92edf16182242ecfd404337edbaf2243b81)
    - [11.2.2. Accessi remoti di Cloud Temple sul perimetro del COMMITTENTE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
    - [11.2.3. Accessi remoti di terzi che partecipano alla fornitura del servizio sul perimetro del COMMITTENTE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
- [12. Procedura di cancellazione dei dati alla fine del Contratto](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
- [13. Diritto applicabile](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
  - [13.1. In generale](#X5ed94d170893fb4c04d7110c419f01198fda773)
  - [13.2. Rispetto del diritto e delle normative applicabili](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
  - [13.3. GDPR](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
  - [13.4. Protezione nei confronti del diritto extra-europeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
- [14. FIRME](#X7ad993788a708b47017c27c9d96178e8795e44f)

# 3. Premessa e Glossario

## 3.1. Premessa

Il presente documento formalizza l'Accordo di servizio associato al servizio Bare Metal in corso di qualificazione SecNumCloud.

Il Servizio è in corso di qualificazione SecNumCloud (vedere attestazione in Allegato).

Il presente accordo di servizio completa ed è complementare alle condizioni generali di vendita e utilizzo del Fornitore. Si intende che i documenti contrattuali saranno interpretati in modo coerente tra loro. In caso di contraddizione o divergenza tra i termini dei documenti contrattuali, i documenti prevarranno gli uni sugli altri nel seguente ordine:

1. Condizioni Generali di Vendita e Utilizzo (CGVU)
2. Accordo di Servizio SecNumCloud IaaS
3. Accordo di Servizio SecNumCloud OpenIaaS
4. Accordo di Servizio SecNumCloud PaaS
5. Accordo di Servizio specifico - Bare Metal
6. Accordo specifico particolare
7. Piano di Assicurazione della Sicurezza (PAS)
8. Condizioni Particolari di Utilizzo (CPU)
9. Accordo di Protezione dei Dati

## 3.2. Glossario

Nel presente Accordo di servizio, il **COMMITTENTE**, il **Fornitore** e le **Parti** sono identificati nel Contratto a cui è allegato il presente Accordo di servizio.

Le espressioni di seguito impiegate nel presente Accordo di servizio saranno interpretate conformemente alle definizioni loro attribuite di seguito:

- **Cambiamento:** Qualsiasi aggiunta, modifica o eliminazione che impatta sul Servizio, che sia stata autorizzata, pianificata o presa in carico.

- **Cambiamento standard:** Cambiamento che segue una procedura, le cui modalità di messa in produzione e impatti (compresi quelli finanziari) sono conosciuti e accettati in anticipo dalle Parti. Viene quindi integrato nel catalogo dei cambiamenti standard, e può, a seconda dei casi, avere un GTI e un GTR.

- **Contratto:** designa il contratto sottoscritto dal COMMITTENTE con il Fornitore per permettere al COMMITTENTE di beneficiare del Servizio, e a cui è allegato il presente Accordo di servizio.

- **Accordo di servizio:** Questo documento, stabilito nel quadro di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), e ciò, in conformità con i requisiti del Referenziale SecNumCloud.

- **Richiesta di servizio:** richiesta di evoluzione che segue una procedura, la cui realizzazione: i) non modifica la CMDB, ii) il modo operativo, i costi e i rischi sono conosciuti e accettati in anticipo e non richiedono modalità specifiche di ritorno iii) la realizzazione è soggetta a un accordo di livello di servizio e inclusa nella tariffa del contratto quando viene realizzata in ore lavorative e giorni lavorativi.

- **Disponibilità:** Capacità di assicurare la disponibilità e il mantenimento delle prestazioni ottimali del Servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

- **Dati tecnici**: comprende tutti i dati manipolati per fornire il Servizio, in particolare l'identità dei beneficiari e degli amministratori dell'infrastruttura tecnica, i log dell'infrastruttura tecnica, la configurazione degli accessi, la directory, i certificati...

- **Evento:** Un "evento" è qualsiasi occorrenza rilevabile o identificabile che può avere importanza per la gestione del Servizio.

- **Hypervisor:** Sistema operativo che permette l'esecuzione di macchine virtuali su una lama di calcolo.

- **Incidente:** Qualsiasi evento imprevisto che disturba il funzionamento normale del Servizio o compromette la sicurezza dei dati.

- **Incidente di sicurezza:** Qualsiasi evento nell'ambito del Servizio:

  - Di natura intenzionalmente malevola;
  - Di natura accidentale che colpisce l'integrità, la riservatezza o la tracciabilità del Servizio o dei dati del COMMITTENTE;
  - Che colpisce le misure di sicurezza esistenti. Gli attacchi alla Disponibilità di origine non malevola non sono considerati un Incidente di sicurezza (guasto hardware, bug, malfunzionamento, sinistro naturale...).

- **Interfaccia COMMITTENTE:** Interfaccia di amministrazione del Servizio messa a disposizione del COMMITTENTE dal Fornitore, che raggruppa una console di amministrazione web e un'API.

- **Messa in produzione:** azione(i) di amministrazione di realizzazione del Cambiamento quando questo è approvato (il cambiamento, nel senso ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).

- **Problema**: causa di uno o più Incidenti ricorrenti, causa di un Incidente potenziale (situazione a rischio) che richiede un'analisi e una risoluzione per prevenirne la ricorrenza.

- **Regione:** designa un insieme geograficamente delimitato di zone di disponibilità cloud, che fornisce servizi di rete, calcolo e archiviazione per ottimizzare la latenza, le prestazioni e la conformità normativa locale.

- **Servizio:** designa il servizio Bare Metal in corso di qualificazione SecNumCloud, consegnato al COMMITTENTE dal Fornitore da infrastrutture tecniche mantenute dal Fornitore, come descritto nella sezione "Descrizione del Servizio" del presente Accordo di servizio.

- **Sinistro:** designa un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni importanti alla Parte sinistrata.

- **Supervisione:** Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che appartiene alle operazioni di Amministrazione.

- **Tenant:** Un'istanza isolata riservata a un utente o gruppo di utenti, che condividono un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.

- **Zona di Disponibilità (AZ) (Availability zone):** Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per assicurare l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.

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

  **DPA**        Data Protection Agreement (Accordo di Protezione dei Dati)

  **DRP**        Disaster Recovery Plan (PRA) (Piano di ripresa dell'attività)

  **GTE**        Garanzia di Tempo di Escalation

  **GTI**        Garanzia di Tempo di Intervento

  **GTR**        Garanzia di Tempo di Risoluzione

  **ITIL**       Information Technology Infrastructure Library - Buone pratiche per la gestione dei SI

  **IaaS**       Infrastructure as a Service (Infrastruttura come Servizio)

  **MCO**        Mantenimento in condizioni operative

  **MOA**        Committenza

  **MOE**        Direzione Lavori

  **MSP**        Managed Services Provider (Fornitore di Servizi Gestiti)

  **OS**         Operating system (sistema operativo)

  **PAQ**        Piano di Assicurazione Qualità

  **PaaS**       Platform as a Service (Piattaforma come Servizio)

  **PAS**        Piano di Assicurazione Sicurezza

  **PASSI**      Fornitore di Audit di Sicurezza dei Sistemi Informativi

  **RFC**        Request For Change -- Richiesta di cambiamento

  **GDPR**       Regolamento Generale sulla Protezione dei Dati (personali)

  **RPO**        Recovery Point Objective -- Freschezza dei dati ripristinati in caso di Sinistro

  **RTO**        Recovery Time Objective -- Tempo di ripristino del servizio in caso di Sinistro

  **SDM**        Service Delivery Manager (Responsabile della Consegna del Servizio)

  **SLA**        Service Level Agreement -- Accordo sui livelli di servizio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center (Centro Operativo di Sicurezza)

  **TMA**        Manutenzione Applicativa di Terze Parti

  **UO**         Unità d'Opera

  **VABE**       Validazione di Attitudine alla Buona Sfruttabilità

  **VABF**       Validazione di Attitudine al Buon Funzionamento

  **VM**         Virtual Machine (Macchina virtuale)

**VSR**        Validazione di Servizio Regolare
  --------------------------------------------------------------------------------------------------------

# 5. Oggetto del presente Accordo di servizio

Il presente Accordo di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al COMMITTENTE. Il suo oggetto è:

- Precisare le esigenze di prestazione attese dal COMMITTENTE in termini di funzionalità e affidabilità del Servizio;

- Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio convenuti;

- Identificare le norme regolamentari applicabili specificamente al Servizio fornito;

- Assicurare un'uniformità e un'integrità nella valutazione della qualità del Servizio;

- Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di prestazione quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore si vedesse ritirare la sua qualificazione SecNumCloud, il Contratto potrà essere rescisso di pieno diritto, senza incorrere in penalità, dal COMMITTENTE. In tale eventualità, il Fornitore si impegna a informare il COMMITTENTE di questa squalifica mediante l'invio di una notifica ufficiale, per mezzo di una lettera raccomandata con richiesta di avviso di ricevimento.

Conviene notare che una modifica o un aggiustamento della qualificazione SecNumCloud non sarà interpretato come una revoca della qualificazione iniziale.

# 6. Audit

Il Fornitore si impegna a permettere al COMMITTENTE, o a qualsiasi auditor terzo e non concorrente del Fornitore che quest'ultimo avesse designato, di consultare l'insieme dei documenti necessari all'attestazione del rispetto integrale degli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (GDPR), facilitando così la realizzazione di audit.

Con l'accettazione del presente Accordo di servizio, il COMMITTENTE conferisce la sua autorizzazione esplicita a:

1. L'Agenzia Nazionale per la Sicurezza dei Sistemi Informativi (ANSSI) così come all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo sistema informativo al referenziale SecNumCloud.
2. Un fornitore di audit della sicurezza dei sistemi informativi, debitamente qualificato PASSI ed espressamente designato dal Fornitore, per condurre audit di sicurezza sul Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio proposto dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, le quali si allineano con il principio di responsabilità condivisa presentato nel referenziale SecNumCloud:

- La fornitura di risorse di calcolo (compute);

- La messa a disposizione di spazi di archiviazione;

- L'accesso a servizi di connettività di rete e internet;

- L'accesso a una console di gestione delle risorse distribuite;

Il modello di responsabilità condivisa applicato tra il Fornitore e il COMMITTENTE nell'ambito del Servizio è presentato in §7.1.

Si intende che il Fornitore mobiliterà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali e conformemente alle esigenze del referenziale SecNumCloud.

## 7.2. Presentazione dettagliata dell'ambito del Servizio

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Compute                 Risorsa di calcolo del Tenant COMMITTENTE
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Storage                 Dati di produzione del Tenant COMMITTENTE

  Infrastruttura di rete   Risorsa di rete del Tenant COMMITTENTE

  Console COMMITTENTE     Il servizio che permette al COMMITTENTE di accedere al suo servizio Bare Metal e di amministrarlo tramite l'interfaccia Console

Supporto               Il servizio di supporto che accompagna i servizi precedenti e unicamente quelli (\*)
  -----------------------------------------------------------------------------------------------------------------------------------------------

(\*) Entro i limiti del perimetro del Servizio qualificato SNC e delle responsabilità del Fornitore in materia\_

### 7.2.1. Infrastrutture dei Datacenter

Il Servizio comprende la messa a disposizione, per ogni Zona di disponibilità, delle prestazioni in corso di qualificazione qui di seguito:

- Sito datacenter situato in Francia per la Regione FR, conforme alle ultime norme tecnologiche, con un livello di resilienza equivalente o superiore al livello Tier 3 dell'Uptime Institute;
- Messa a disposizione di sale tecniche all'interno di datacenter dedicati all'accoglienza delle apparecchiature tecniche indispensabili alla produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio, e altri componenti necessari;
- Alimentazione elettrica sicura, assicurata da due circuiti elettrici distinti, garantendo una continuità di servizio;
- Fornitura di servizi di climatizzazione, regolati per rispettare le norme e le raccomandazioni dei produttori di apparecchiature, al fine di mantenere un ambiente ottimale per i dispositivi tecnici;
- Supervisione continua e metrologia dettagliata, permettendo un monitoraggio preciso e una gestione proattiva delle prestazioni e della sicurezza del servizio fornito.

Il Fornitore assicura la messa a disposizione di servizi avanzati di rilevamento e estinzione incendi, concepiti per identificare e neutralizzare efficacemente qualsiasi principio di incendio all'interno delle installazioni. Questi sistemi sono essenziali per garantire la sicurezza delle apparecchiature e dei dati. Includono rilevatori di fumo ad alta precisione e dispositivi di estinzione che possono agire rapidamente senza danneggiare l'apparecchiatura informatica. Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e assicurare la continuità delle operazioni.

Il COMMITTENTE è informato che tutte le procedure e misure di sicurezza messe in atto, inclusi i test annuali di commutazione sui gruppi elettrogeni, sono essenziali per garantire la continuità e l'integrità dei servizi forniti. Queste pratiche sono progettate per minimizzare i rischi di guasto e assicurare una reattività ottimale in caso di Incidente. Accettando queste condizioni, il COMMITTENTE riconosce l'importanza di queste misure e si impegna a cooperare pienamente per facilitarne l'attuazione. Il COMMITTENTE è anche incoraggiato a prendere conoscenza delle raccomandazioni di sicurezza fornite e a integrarle nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software di gestione del Servizio

Il Fornitore fornisce al COMMITTENTE la console di amministrazione e l'API necessaria per l'utilizzo del Servizio. Si impegna inoltre a mantenere questa console di amministrazione e l'API in condizione operativa ottimale e ad assicurarne la sicurezza in modo continuo. Questa console di amministrazione e l'API sono designate in modo raggruppato sotto il termine "interfaccia COMMITTENTE".

Il Fornitore avverte il COMMITTENTE sul fatto che un utilizzo anomalo dell'interfaccia COMMITTENTE, in particolare in caso di sovraccarico delle sue API di comando (hammering), può innescare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di comando o al Servizio. Conviene sottolineare che questa situazione non costituisce un'indisponibilità del Servizio ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore; di conseguenza, il COMMITTENTE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al COMMITTENTE che le richieste perfettamente identiche (duplicati) inviate alle sue API sono limitate a una al secondo (Throttling). Se il COMMITTENTE sottomette richieste identiche a una frequenza superiore, il loro rifiuto non potrà essere interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità sottoscritte dal COMMITTENTE, delle apparecchiature necessarie all'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Questo comprende:

- La fornitura degli chassis tecnici necessari al buon funzionamento delle lame di calcolo;
- La fornitura delle lame di calcolo nelle quantità specificate dal COMMITTENTE e ripartite secondo le zone di disponibilità di sua scelta. È da notare che queste lame di calcolo sono esclusivamente dedicate al COMMITT
