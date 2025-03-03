---
title: Convention de Service SecNumCloud IaaS
---


# 1. CONVENTION DE SERVICES IaaS

  -----------------------------------------------------------------------
  **Destinataires :**            **COMMITTENTE**
  ------------------------------ ----------------------------------------
  **Référence du documents**     CT.AM.JUR.ANX CdS-IaaS -
                                 20251701_v3.0.docx_Giorno GG AAAA

  **Vos interlocuteurs**         *Nome* *Cognome*

                                 Account Manager

                                 e-mail : *nome.cognome*\@cloud-temple.com

  **Date de dernière mise à      17/01/2025
  jour**

  **Date de validation           Giorno GG AAAA
  contractuelle**
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

-   [1. **CONVENTION DE SERVICES
    IaaS**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **TABLE DES
    MATIÈRES**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
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


Le présent document formalise la Convention de service associée au service IaaS qualifiée SecNumCloud sous l'appellation de « *Secure Temple* ».

Le Service est qualifié SecNumCloud (voir attestation en Annexe).

La présente convention de service complète et est complémentaire aux conditions générales de vente et d'utilisation du Prestataire. Il est entendu que les documents contractuels s'interprètent de manière cohérente entre eux. En cas de contradiction ou de divergence entre les termes des documents contractuels, les documents prévaudront les uns sur les autres dans l'ordre suivant :

1.  Conditions Générales de Vente et Utilisation (CGVU)

2.  Convention de Service SecNumCloud IaaS

3.  Convention de Service SecNumCloud OpenIaaS

4.  Convention de Service SecNumCloud PaaS

5.  Convention de Service spécifique - Bare Metal

6.  Convention spécifique particulière

7.  Plan d'Assurance Sécurité (PAS)

8.  Conditions Particulières d'Utilisation (CPU)

9.  Data Protection Agreement

## 3.2. Glossaire

Dans la présente Convention de service, le **COMMANDITAIRE**, le **Prestataire** et les **Parties** sont identifiés dans le Contrat auquel est annexe la présente Convention de service.

Les expressions ci-après employées dans la présente Convention de service seront interprétées conformément aux définitions qui leur sont attribuées ci-dessous :

-   **Changement :** Tout ajout, une modification ou suppression impactant le Service, ayant été autorisé, planifié ou pris en charge.

-   **Changement standard :** Changement faisant l'objet d'une procédure, dont les modalités de mise en production et les impacts (y compris financiers) sont connus et acceptés à l'avance par les Parties. Il est alors intégré au catalogue des changements standards, et peut selon les cas avoir une GTI et une GTR.

-   **Contrat :** désigne le contrat souscrit par le COMMANDITAIRE auprès du Prestataire pour permettre au COMMANDITAIRE de bénéficier du Service, et auquel la présente Convention de service est annexée.

-   \***Convention de service :** Ce document, établi dans le cadre d'un contrat spécifique ou des Conditions Générales de Vente et d'Utilisation (CGVU), et ce, en conformité avec les exigences du Référentiel SecNumCloud.

-   **Demande de service :** demande d'évolution faisant l'objet d'une procédure, dont la réalisation: i) ne modifie pas la CMDB,ii) le mode opératoire, les coûts et les risques sont connus et acceptés à l'avance et ne nécessitent pas de modalités de retour arrière spécifiques iii) la réalisation est soumise à un accord de niveau de service et incluse dans la redevance du contrat lorsqu'elle est réalisée en heures ouvrées et jours ouvrés.

-   **Disponibilité :** Capacité à assurer la disponibilité et le maintien des performances optimales du Service, en accord avec les critères et engagements définis dans les Accords de Niveau de Service (SLA).

-   **Données techniques** : comprend l'ensemble des données manipulées pour délivrer le Service, notablement dont l'identité des bénéficiaires et des administrateurs de l'infrastructure technique, des journaux de l'infrastructure technique, configuration des accès, annuaire, certificats...

-   **Evènement :** Un "événement" est toute occurrence détectable ou identifiable pouvant avoir une importance pour la gestion du Service.

-   **Hyperviseur :** Système d'exploitation permettant l'exécution de machines virtuelles sur une lame de calcul.

-   **Incident :** Tout événement imprévu qui perturbe le fonctionnement normal du Service ou compromet la sécurité des données.

-   **Incident de sécurité :** Tout événement dans le périmètre du Service:

    -   De nature intentionnellement malveillante ;
    -   De nature accidentelle portant atteinte à l'intégrité, la confidentialité ou la traçabilité du Service ou des données du COMMANDITAIRE ;
    -   Portant atteinte aux mesures de sécurité existantes. Les atteintes à la Disponibilité d'origine non-malveillante ne sont pas considérées comme un Incident de sécurité (panne matérielle, bug, dysfonctionnement, sinistre naturel...).

-   **Interface COMMANDITAIRE :** Interface d'administration du Service mise à disposition du COMMANDITAIRE par le Prestataire, regroupant une console d'administration web et une API.

-   **Mise en production :** action(s) d'administration de réalisation du Changement quand celui-ci est approuvé (le changement, au sens ITIL, ne concernant que la gestion du changement et non sa réalisation/concrétisation).

-   **Problème** : cause d'un ou plusieurs Incidents récurrents, cause d'un Incident potentiel (situation à risque) nécessitant une analyse et une résolution pour prévenir sa récurrence.

-   **Région :** désigne un ensemble géographiquement délimité de zones de disponibilité cloud, fournissant des services de réseau, de calcul et de stockage pour optimiser la latence, la performance et la conformité réglementaire locale.

-   **Service :** désigne le service IaaS qualifié SecNumCloud « Secure Temple », délivré au COMMANDITAIRE par la Prestataire depuis des infrastructures techniques maintenues par le Prestataire, tel que décrit dans la section « Description du Service » de la présente Convention de service.

-   **Secure Temple** : désigne le service IaaS qualifié SecNumCloud, proposé par la société Cloud Temple, tel que défini dans l'attestation consultable sur le site de l'ANSSI et fournie en annexe de la présente Convention de service.

-   **Sinistre :** désigne un événement grave d'origine naturelle ou humaine, accidentelle ou intentionnelle, occasionnant des pertes et des dommages importants à la Partie sinistrée.

-   **Supervision :** Surveillance d'un Système d'Information ou d'un Service, impliquant la collecte de diverses données telles que mesures et alarmes. Cette activité se limite à l'observation et au suivi, sans intervenir directement sur les éléments surveillés, une prérogative qui appartient aux opérations d'Administration.

-   **Tenant :** Une instance isolée réservée à un utilisateur ou groupe d'utilisateurs, partageant une infrastructure commune tout en maintenant l'indépendance et la sécurité des données et des applications.

-   **Zone de Disponibilité (AZ) (Availibility zone) :** Une section spécifique et isolée de l'infrastructure de cloud computing, conçue pour assurer la haute disponibilité et la résilience des services par une distribution géographique des ressources.

# 4. Acronymes

  -----------------------------------------------------------------------------
  **Acronyme**   **Definizione**
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

La presente Convenzione di servizio stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire il Servizio al MANDANTE. Il suo oggetto è di:

-   Precisare i requisiti di prestazione attesi dal MANDANTE in termini di funzionalità e affidabilità del Servizio;

-   Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati;

-   Identificare le norme regolamentari applicabili specificatamente al Servizio fornito;

-   Assicurare uniformità e integrità nella valutazione della qualità del Servizio;

-   Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di prestazione quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore si vedesse
retirer sa qualification SecNumCloud, le Contrat pourra être résilié de
plein droit, sans encourir de pénalités, par il MANDANTE. Dans une
telle eventualità, il Fornitore s'impegna ad informare il MANDANTE
di tale decertificazione mediante invio di notifica ufficiale, a
mezzo di lettera raccomandata con richiesta di avviso di ricevimento.

Si noti che una modifica o un adeguamento della
qualificazione SecNumCloud non sarà interpretata come una revoca della
qualificazione iniziale.

# 6. Audit

Il Fornitore s'impegna a permettere al MANDANTE, o a qualsiasi revisore
terzo e non concorrente del Fornitore che questi abbia designato, di
consultare tutti i documenti necessari per l'attestazione del
pieno rispetto degli obblighi relativi alla conformità con le
disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei
Dati (GDPR), facilitando così la realizzazione di audit.

Accettando il presente Contratto di Servizio, il MANDANTE
conferisce la sua esplicita autorizzazione a:

1.  L'Agenzia Nazionale per la Sicurezza Informatica (ANSSI)
    nonché all'entità di qualificazione competente per intraprendere la
    verifica della conformità del Servizio e del suo sistema
    informativo al referenziale SecNumCloud.
2.  Un fornitore di audit della sicurezza dei sistemi informativi,
    debitamente qualificato PASSI ed espressamente designato dal Fornitore,
    per effettuare audit di sicurezza riguardanti il Servizio.

# 7. Descrizione del Servizio

## 7.1. Modello di responsabilità condivisa

Il Servizio proposto dal Fornitore si caratterizza per la messa a
disposizione delle seguenti prestazioni, allineandosi al
principio di responsabilità condivisa presentato nel referenziale
SecNumCloud:

-   La fornitura di risorse di calcolo (compute);

-   La fornitura di spazi di archiviazione;

-   L'accesso a servizi di connettività di rete e internet;

-   L'offerta di un servizio di backup dedicato alle macchine virtuali.

Il modello di responsabilità condivisa applicato tra il Fornitore e il
MANDANTE nel contesto del Servizio è presentato nel §7.1.

È inteso che il Fornitore mobiliterà la sua esperienza per realizzare
le Prestazioni secondo le migliori pratiche professionali e
in conformità con i requisiti del referenziale SecNumCloud.

## 7.2. Presentazione dettagliata dell'ambito del Servizio

  -----------------------------------------------------------------------------
  Compute          Risorsa di calcolo del Tenant MANDANTE
  ---------------- ------------------------------------------------------------
  Storage          Dati di produzione del Tenant MANDANTE

  Object storage   messa a disposizione di un'infrastruttura di object storage
  S3               sovrano multi AZ e compatibile con le API standard S3.

  Backup           Modulo sottoscrizione al mass-storage adeguato

  Infrastruttura   Risorsa di rete del Tenant MANDANTE
  di rete

  Console          Il servizio che permette al MANDANTE di accedere al proprio
  MANDANTE         servizio IaaS e gestirlo tramite l'interfaccia Shiva.

  Supporto         Il servizio di supporto che accompagna i servizi precedenti
                   e solo questi (\*)
  -----------------------------------------------------------------------------

\_(\*) Entro i limiti dell'ambito del Servizio qualificato SNC e delle
responsabilità del Fornitore in materia\_

### 7.2.1. Infrastrutture Datacenters

Il Servizio include la messa a disposizione, per ciascuna Zona di
disponibilità, delle prestazioni qualificate di seguito:

-   Sito datacenter situato in Francia per la Regione FR, conforme alle
    ultime norme tecnologiche, con un livello di
    resilienza equivalente o superiore al livello Tier 3 dell'Uptime
    Institute;
-   Messa a disposizione di sale tecniche all'interno dei datacenter
    dedicati ad ospitare le attrezzature tecniche indispensabili alla
    produzione del servizio, inclusi calcolo, archiviazione, rete, cablaggio,
    e altri componenti necessari;
-   Alimentazione elettrica sicura, garantita da due circuiti
    elettrici distinti, garantendo la continuità del servizio;
-   Fornitura di servizi di condizionamento, regolati per rispettare le
    norme e le raccomandazioni dei produttori di attrezzature, al fine di
    mantenere un ambiente ottimale per i dispositivi tecnici;
-   Supervisione continua e metrologia dettagliata, permettendo un monitoraggio
    preciso e una gestione proattiva delle prestazioni e della sicurezza
    del servizio fornito.

Il Fornitore assicura la messa a disposizione di servizi avanzati di
rilevamento e spegnimento incendi, progettati per identificare e
neutralizzare efficacemente qualsiasi principio di incendio all'interno delle strutture.
Questi sistemi sono essenziali per garantire la sicurezza delle attrezzature
e dei dati. Includono rilevatori di fumo ad alta precisione e dispositivi di
spegnimento che possono agire rapidamente senza danneggiare l'attrezzatura informatica.
Questo servizio è cruciale per prevenire i rischi di incendio, minimizzare i danni potenziali e
assicurare la continuità delle operazioni.

Il MANDANTE viene informato che tutte le procedure e le misure di
sicurezza implementate, inclusi i test annuali di bypass sui gruppi elettrogeni,
sono essenziali per garantire la continuità e l'integrità dei servizi forniti.
Queste pratiche sono progettate per
minimizzare i rischi di interruzione e assicurare una reattività ottimale in caso
di Incidente. Accettando queste condizioni, il MANDANTE riconosce
l'importanza di tali misure e si impegna a cooperare pienamente per
facilitare la loro implementazione. Il MANDANTE è inoltre incoraggiato a
prendere visione delle raccomandazioni di sicurezza fornite e a integrarle
nella propria strategia di gestione dei rischi.

### 7.2.2. Infrastruttura software per la gestione del servizio

Il Fornitore fornisce al MANDANTE la console di amministrazione e
l'API necessario per l'utilizzo del Servizio. Si impegna inoltre a mantenere
questa console di amministrazione e l'API in stato operativo ottimale
e a garantirne la sicurezza in modo continuo.
Questa console di amministrazione e l'API sono designate collettivamente
con il termine "interfaccia MANDANTE".

Il Fornitore avverte il MANDANTE che un uso anomalo
dell'interfaccia MANDANTE, in particolare in caso di sovraccarico delle sue API di comando (hammering),
può attivare misure di sicurezza automatiche che comportano il blocco dell'accesso alle API di
comando o al Servizio. È opportuno sottolineare che questa situazione non costituisce
un'indisponibilità del Servizio ma un'azione di protezione del Servizio e dell'infrastruttura del Fornitore;
pertanto, il MANDANTE non può considerarla come un'indisponibilità nei suoi calcoli.

Inoltre, il Fornitore precisa al MANDANTE che le richieste
perfettamente identiche (duplicati) inviate alle sue API sono limitate a
una per secondo (Throttling). Se il MANDANTE invia richieste
identiche a una frequenza superiore, il loro rifiuto non potrà essere
interpretato come un'indisponibilità del Servizio.

### 7.2.3. Infrastrutture di calcolo

Il Servizio include la fornitura, nelle zone di disponibilità
sottoscritte dal MANDANTE, delle attrezzature necessarie per
l'esecuzione dei carichi di lavoro sotto forma di macchine virtuali.

Ciò comprende:

-   La fornitura dei chassis tecnici necessari per il corretto
    funzionamento delle lame di calcolo;
-   La fornitura delle lame di calcolo nelle quantità specificate dal
    MANDANTE e distribuite secondo le zone di disponibilità di
    sua scelta. Si noti che queste lame di calcolo sono esclusivamente
    dedicate al MANDANTE;
-   La messa a disposizione di sistemi operativi di tipo
    hypervisors, oltre a garantire di mantenere operativa e sicura
    l'infrastruttura software necessaria per la gestione di questi sistemi operativi.
    È importante enfatizzare che, sebbene il Fornitore sia responsabile della manutenzione
    operativa e della sicurezza globale del Servizio, non dispone di conoscenze specifiche
    riguardo agli ambienti di produzione del MANDANTE né delle esigenze relative ai suoi carichi di lavoro.
    Di conseguenza, la responsabilità di decidere l'aggiornamento dei sistemi operativi delle lame di calcolo hypervisors, un'azione che può richiedere un riavvio, ricade interamente sul MANDANTE. Tale
    operazione può essere eseguita tramite l'Interfaccia MANDANTE.

La scelta del modello di lama di calcolo, selezionato tra il catalogo
proposto dal Fornitore, è responsabilità esclusiva del
MANDANTE.

### 7.2.4. Infrastruttura di archiviazione

Il servizio include la fornitura al MANDANTE di un'infrastruttura
di archiviazione condivisa di tipo SAN (Storage Area Network), che offre vari
livelli di prestazione. Questo servizio include:

-   L'implementazione e la manutenzione in stato operativo e di
    sicurezza della rete SAN dedicata;
-   L'installazione e la gestione delle array di archiviazione condivise tra
    i clienti, inclusa la manutenzione in stato operativo e di sicurezza, la supervisione e
    la metrologia;
-   L'implementazione di sistemi automatizzati per l'assegnazione delle LUN
    (Logical Unit Numbers) di archiviazione dedicati all'uso del
    MANDANTE, in conformità con i volumi sottoscritti dal MANDANTE.

### 7.2.5. Infrastruttura di rete globale

Il Fornitore distribuisce nell'ambito del Servizio, una rete globale che
facilita al MANDANTE l'accessibilità dei propri sistemi
ospitati. Questo servizio include:

-   La fornitura, la manutenzione in stato operativo e di
    sicurezza di tutte le connessioni in fibra ottica.
    interconnettendo le diverse Zone di disponibilità;

-   La fornitura, il mantenimento in condizioni operative e di sicurezza delle apparecchiature tecniche necessarie al corretto funzionamento della rete e all'isolamento dei vari clienti.

L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, e le apparecchiature di rete, i collegamenti degli operatori e altri componenti tecnici che realizzano questa interconnessione, non fanno parte del perimetro del Servizio. Questa interconnessione di rete è messa in atto secondo le disposizioni previste nel Contratto.

### 7.2.6. Infrastruttura di backup

Il Fornitore mette a disposizione del COMMITTENTE un servizio di backup integrato, dedicato e gestito, destinato alla protezione delle sue macchine virtuali. Il Fornitore assicura il mantenimento in condizione operativa e di sicurezza di questo servizio di backup. Il Fornitore garantisce che i backup del COMMITTENTE saranno situati al di fuori della Zona di disponibilità dei carichi di lavoro backupati, a condizione che il COMMITTENTE abbia sottoscritto alle Unità di lavoro adeguate.

Questo servizio di backup si limita al backup delle macchine virtuali e delle configurazioni della topologia dell'ambiente IaaS dei Tenant del COMMITTENTE nell'ambito del Servizio. L'elaborazione e l'applicazione di una politica di backup adeguata da parte del COMMITTENTE dipendono dalla sottoscrizione a specifiche unità di lavoro. Pertanto, spetta al COMMITTENTE assicurarsi della disponibilità delle risorse tecniche necessarie presso il Fornitore per attuare la sua politica di backup o per adattarla in base ai mezzi disponibili.

Il Fornitore si impegna a notificare il COMMITTENTE in caso di vincoli di capacità e a fornire assistenza consultiva per l'ottimizzazione delle risorse. Gli obblighi del Fornitore si limiteranno alla messa in opera dei bisogni espressi dal COMMITTENTE in materia di politica di backup, nell'ambito delle risorse sottoscritte.

### 7.2.7. Implementazione di soluzioni di ripristino o continuità operativa

Il Fornitore fornisce al COMMITTENTE tutte le soluzioni tecniche necessarie per garantire una distribuzione ottimale delle sue risorse attraverso diverse Zone di disponibilità. Spetta al COMMITTENTE la responsabilità di gestire efficacemente questa distribuzione delle risorse, per la quale ha la possibilità di sfruttare gli strumenti del Fornitore disponibili a questo scopo.

## 7.3. Limitazioni dei servizi nel modello IaaS qualificato

### 7.3.1. Servizi gestiti in RUN

È importante notare che sono esclusi dal Servizio:

-   L'hosting di componenti fisici del COMMITTENTE;
-   L'interconnessione di rete del Tenant COMMITTENTE, a Internet o a reti private, inclusi i collegamenti degli operatori;
-   Qualsiasi servizio di tipo gestito, o TMA;
-   Qualsiasi assistenza sulle macchine virtuali al livello OS e superiore nella pila delle responsabilità IaaS, anche se si tratta di semplice supervisione.

Tuttavia, non è assolutamente escluso che il COMMITTENTE possa fare ricorso a tali servizi presso l'offerta MSP del Fornitore per intervenire in modalità servizi gestiti sui suoi Tenant. Questi servizi non saranno quindi regolati dalla presente Convenzione di servizio e dai suoi impegni/clausole bilaterali.

### 7.3.2. Configurazione del ripristino

Per impostazione predefinita, il Fornitore fornisce la messa in atto delle risorse dell'IaaS al COMMITTENTE riservando risorse e configurando i deployment per utilizzare le Zone di disponibilità. Spetta al COMMITTENTE scegliere le Zone di disponibilità tramite l'interfaccia del COMMITTENTE.

### 7.3.3. Configurazione del backup

Il servizio di backup si limita al backup delle macchine virtuali e delle configurazioni di topologia rappresentanti l'ambiente IaaS dei Tenant del COMMITTENTE nell'ambito del Servizio.

Il servizio di backup e l'attuazione della politica di backup del COMMITTENTE sono soggetti alla sottoscrizione di spazio di archiviazione sul mass storage necessario per garantire il servizio. È quindi responsabilità del COMMITTENTE sottoscrivere presso il Fornitore i mezzi tecnici necessari per garantire la politica di backup sul suo perimetro informatico, o adattare la politica di backup ai mezzi implementati. Il Fornitore si impegna a informare il COMMITTENTE in caso di limiti di capacità tecnica.

Il Fornitore metterà in atto i mezzi tecnici e umani necessari per il backup del sistema ospitato nei limiti delle risorse sottoscritte dal COMMITTENTE.

Inoltre, per i perimetri non coperti dal Fornitore, spetta al COMMITTENTE definire la propria strategia di backup e configurare personalmente i backup delle VM o effettuare una Richiesta di servizio presso il Fornitore affinché la configurazione dei backup per i server fisici venga messa in atto se il COMMITTENTE dispone di un contratto di servizio gestito che consente al Fornitore di agire tramite l'interfaccia del COMMITTENTE, che è la console di amministrazione messa a disposizione nell'ambito di questa Convenzione di servizio e che dispone di funzionalità per configurare i backup.

Inoltre, questo servizio avrà come unico impegno di tradurre tramite configurazione via l'interfaccia del COMMITTENTE, la configurazione specificata chiaramente dal COMMITTENTE.

Per motivi di flessibilità dell'offerta del Fornitore, il COMMITTENTE ha l'opzione di associare una politica di non-backup su alcune delle sue VM. In tal caso, spetta al COMMITTENTE assumersi questa scelta. Il Fornitore non effettuerà il backup delle VM associate alla politica "no backup". Il Fornitore avverte il COMMITTENTE che scegliere la politica "no backup" o scegliere di effettuare manualmente il backup espone il COMMITTENTE a una perdita definitiva di dati in caso di Incidente sugli strati inferiori o sugli strati dipendenti dalla sua responsabilità nel modello IaaS. In tal caso, sarà impossibile ritenere il Fornitore responsabile del ripristino dei dati poiché non ci sarà nulla da ripristinare. Il Fornitore raccomanda di effettuare sempre il backup delle VM.

Per tutti i problemi riguardanti il sistema operativo installato su una macchina virtuale e qualsiasi software o programma eseguito "sopra l'OS", è responsabilità del COMMITTENTE realizzare operazioni di amministrazione e supervisione nell'Unione Europea se desidera garantire che l'intera verticalità degli strati del SI venga operata e gestita dall'Unione Europea. Le operazioni di amministrazione al di fuori del perimetro di responsabilità del Fornitore nell'ambito della presente Convenzione di servizio sono indicate nella sezione "Modello di responsabilità condivise" della presente Convenzione di servizio.

## 7.4. Implementazione del servizio

### 7.4.1. Prerequisiti tecnici

Per l'implementazione del Servizio, il COMMITTENTE riconosce che dovrà:

-   Funzionare con una virtualizzazione di tipo VMware nelle versioni supportate dall'editore e fornite dal Fornitore nell'ambito del Servizio;
-   Fare uso, tramite il Fornitore, dello strumento di backup;
-   Dichiarare indirizzi IP fissi dai quali il Fornitore autorizzerà l'accesso all'interfaccia del COMMITTENTE (Filtro tramite whitelist). Le modifiche di questa lista di indirizzi IP dovranno essere effettuate tramite il menu previsto a questo scopo nella console o tramite Richieste di servizio per le modifiche successive. All'inizio del servizio, il Fornitore sarà stato informato almeno di 1 indirizzo IP come descritto.

## 7.5. Localizzazione del servizio in Francia

È specificato che nessuna delle operazioni e nessun componente fisico coinvolto nella fornitura del Servizio, oggetto della presente Convenzione di servizio, è situato al di fuori dell'Unione Europea.

Ciò include in particolare il supporto, la supervisione operativa e la supervisione della sicurezza (SOC) dell'infrastruttura tecnica che eroga il Servizio. Di conseguenza, tutto lo stoccaggio, tutte le attività di amministrazione, di supervisione e tutti i trattamenti sono realizzati in Francia.

### 7.5.1. Localizzazione dei Datacenter che ospitano il Servizio

Escluse le operazioni dei collaboratori e delle agenzie del Fornitore, tutte le operazioni di produzione (compreso lo stoccaggio e il trattamento dei dati) e i componenti tecnici che erogano il Servizio sono situati nei Datacenter basati in Francia.

### 7.5.2. Localizzazione delle agenzie Cloud Temple che operano il servizio

I collaboratori di Cloud Temple che intervengono sul perimetro del Servizio operano dalle agenzie di Cloud Temple tutte situate esclusivamente in Francia. Queste agenzie sono situate in Francia, a Tours, Lione, Caen e Parigi La Défense.

Il COMMITTENTE è informato della possibilità per i dipendenti di Cloud Temple di lavorare a distanza. Tuttavia, il Fornitore garantisce lo stesso livello di sicurezza per quanto riguarda gli accessi a distanza, in particolare riguardo agli accessi VPN. Questi accessi remoti sono realizzati in conformità ai requisiti del riferimento SecNumCloud.

## 7.6. Supporto

### 7.6.1. Natura del supporto che accompagna il servizio

Il Fornitore fornisce un servizio di supporto tecnico mirato ad assistere il COMMITTENTE nella gestione, risoluzione problemi e ottimizzazione delle loro risorse dispiegate. Questo servizio copre una vasta gamma di attività, dall'aiuto alla configurazione iniziale dei servizi fino al supporto tecnico avanzato per risolvere problemi specifici.

Ecco una descrizione delle caratteristiche e funzionalità del servizio di supporto:

-   Assistenza nell'implementazione iniziale dell'utilizzo del Servizio;
-   Assistenza nella risoluzione degli incidenti;
-   Assistenza nella risoluzione dei problemi;
-   Monitoraggio e consulenza per l'ottimizzazione della base tecnica.
Dans le cadre du service de support, il Prestataire non si sostituisce
al COMMITTENTE nell'uso del Servizio. Il COMMITTENTE rimane
interamente responsabile della configurazione, dell'utilizzo delle proprie VM
e dei propri Tenants, e della gestione di tutti gli elementi (dati e
applicazioni incluse) che ha archiviato o installato sulle
infrastrutture del Fornitore. Il servizio di supporto tecnico è
fornito in accordo con le Condizioni Generali di Vendita e
Utilizzo, il Fornitore essendo tenuto a un'obbligazione di mezzi.

Il COMMITTENTE si impegna a utilizzare il servizio di supporto tecnico in
modo ragionevole, astenendosi in particolare dal richiedere servizi
non sottoscritti presso il Fornitore e dal far intervenire le squadre
del Fornitore presso i propri clienti o terzi non inclusi nel
Contratto. Il Fornitore si riserva il diritto di rifiutare qualsiasi richiesta
di servizio che non rispetti questi criteri.

Il livello di impegno del supporto è condizionato alla sottoscrizione delle
unità di lavoro di supporto associate.

### 7.6.2. Richiesta del servizio supporto tecnico

Il supporto tecnico è accessibile tramite un sistema di ticket
via la console COMMITTENTE ed è disponibile durante le ore
normali di ufficio fuori dai giorni festivi (8h - 18h; Lunedì - Venerdì;
calendario e orari francesi). Per le emergenze che si verificano al di fuori
delle ore di lavoro, in particolare gli incidenti che influiscono significativamente
sulla produzione, il servizio di reperibilità può essere contattato tramite un numero
comunicato al COMMITTENTE all'inizio del Servizio.

Per ogni richiesta o Incidente, è indispensabile generare un ticket
presso il supporto del Fornitore. L'inizializzazione di questo ticket,
includendo tutte le informazioni necessarie, è essenziale e
segna l'inizio della valutazione degli impegni del Fornitore.

Non appena il Fornitore riceve una richiesta o una notifica
di Incidente, sia tramite la console di gestione che a seguito di una chiamata
telefonica, un ticket è automaticamente creato. Durante la dichiarazione di un Incidente,
è essenziale che il COMMITTENTE fornisca al Fornitore il maggior numero di dettagli sul problema
riscontrato. Questo processo è cruciale per consentire una valutazione
adeguata della situazione, la sua priorizzazione e una diagnosi efficace.

Il COMMITTENTE riceverà quindi una conferma via email, indicante la
creazione del ticket e il suo numero unico. Il COMMITTENTE può
consultare lo stato e la cronologia delle proprie richieste e dichiarazioni
di Incidenti direttamente dalla console di gestione.

### 7.6.3. Processo di gestione degli Incidenti

Durante una dichiarazione di Incidente, il team di supporto tecnico del
Fornitore avvia un'investigazione per identificare la causa del
problema e stabilire una diagnosi. Il COMMITTENTE deve collaborare
attivamente con il Fornitore fornendo tutte le informazioni necessarie
ed eseguendo i test richiesti. Il Fornitore può
accedere al Servizio del COMMITTENTE per diagnosticare l'Incidente.

Se i Servizi del Fornitore sono ritenuti funzionali e l'Incidente
non è imputabile a quest'ultimo, il COMMITTENTE ne sarà informato. Su richiesta
del COMMITTENTE, il Fornitore può proporre Servizi
Professionali per identificare l'origine del problema, fatturabile previo accordo per tranche di 30 minuti.

Nel caso in cui l'Incidente sia di responsabilità del Fornitore o di
uno dei suoi subfornitori, quest'ultimo completa la diagnosi e si impegna
a ripristinare il Servizio senza costi aggiuntivi. La diagnosi
si basa sugli scambi tra le Parti e sui dati del
Fornitore, questi elementi essendo considerati probanti per accordo delle
Parti.

### 7.6.4. Processo di prioritizzazione dei trattamenti

La determinazione del livello di priorità di un dossier si basa su un'analisi
matriciale che valuta l'impatto dell'Incidente e il suo grado di
criticità:

- I livelli di impatto sono definiti come segue:

  -------------------------------------------------------------------------
  Livello     Descrizione
  di impatto
  ---------- --------------------------------------------------------------
  Impatto I1  Uno o più servizi del Fornitore sono interrotti

  Impatto I2  Uno o più servizi del Fornitore sono degradati

  Impatto I3  Uno o più servizi del Fornitore sono attualmente stabili,
             ma mostrano segni di declino potenziale a lungo termine
  -------------------------------------------------------------------------

- I livelli di Criticità sono definiti come segue:

  -----------------------------------------------------------------------
  Livello di   Descrizione
  criticità
  ----------- -----------------------------------------------------------
  Criticità   Uno o più servizi del Fornitore si degradano a una
  C1          velocità preoccupante

  Criticità   Uno o più servizi del Fornitore si deteriorano
  C2          progressivamente nel tempo

  Criticità   Uno o più servizi del Fornitore presentano uno o più
  C3          inconvenienti senza conseguenze significative
  -----------------------------------------------------------------------

- Sulla base di un'analisi approfondita della situazione, prendendo in
    considerazione gli elementi che determinano l'Impatto e la Criticità, una
    priorità è attribuita al ticket conformemente alla matrice di
    decisione qui di seguito:

  -------------------------------------------------------------------------
  Livello di impatto  Livello di       Impatto I1  Impatto I2  Impatto I3
  criticità
  ---------------------------------- ------------ ------------ ------------
  Criticità C1                       Priorità     Priorità     Priorità
                                     **P1**       **P2**       **P3**

  Criticità C2                       Priorità     Priorità     Priorità
                                     **P2**       **P3**       **P4**

  Criticità C3                       Priorità     Priorità     Priorità
                                     **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

Gli impegni di livello di servizio corrispondenti a ciascun livello di
priorità sono dettagliati nel capitolo seguente.

### 7.6.5. Lingua e localizzazione del servizio di supporto

Il supporto è fornito dal Fornitore al COMMITTENTE almeno in
lingua francese. Il supporto può essere anche fornito in lingua
inglese.

Le operazioni del servizio di supporto del Fornitore per l'offerta di
servizio di infrastruttura qualificata SecNumCloud sono situate
nell'Unione Europea.

# 8. Impegni e livelli di servizi

Il Fornitore si impegna a garantire una sorveglianza continua della
performance e dell'integrità della sicurezza della propria infrastruttura
tecnica che eroga il Servizio, curando il loro funzionamento ottimale.

L'indisponibilità di un servizio, oggetto di un indicatore di
performance, è riconosciuta sin dalla sua identificazione da parte del sistema di
supervisione del Fornitore, o a seguito di una notifica da parte di un
utente del COMMITTENTE. L'inizio dell'indisponibilità è fissato al
momento più precoce tra questi due eventi, per garantire un
conteggio preciso e giusto del tempo di indisponibilità.

La fine dell'indisponibilità è ufficialmente segnata dal
completo ripristino del servizio, confermato sia dagli strumenti di
supervisione del Fornitore, sia da un ritorno dell'utente, garantendo
così una ripresa efficace delle operazioni e una misura fedele della
durata dell'interruzione.

## 8.1. Impegni di disponibilità dell'infrastruttura

Il Fornitore si impegna a mantenere un livello di disponibilità e di
performance conforme agli standard definiti per ciascun periodo
specificato. Gli impegni di livello di servizio (Service Level
Agreements, SLA) si applicano a condizione che il COMMITTENTE
implementi i propri sistemi tramite almeno due delle Zone di
disponibilità presenti nella Regione interessata.

In assenza del rispetto di queste condizioni da parte del COMMITTENTE, questi
non sarà in grado di rivendicare l'applicazione degli SLA
interessati, i quali sono specificamente identificati da un asterisco
(\*). L'accessibilità agli SLA si fa tramite l'interfaccia COMMITTENTE.
Le misure sono intese calcolate mensilmente:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilità della
    potenza di calcolo (Compute) : tasso di disponibilità garantito del
    99,99%, calcolato su base 24h/24, 7g/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilità dello storage :
    tasso di disponibilità garantito del 99,99%, calcolato su base
    24h/24, 7g/7.
-   **SLA 3 : IC-INFRA_SNC-03** -- Affidabilità del backup : tasso di
    disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.
-   \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilità
    dell'infrastruttura di rete : tasso di disponibilità garantito del 99,99%,
    calcolato su base 24h/24, 7g/7.
-   **SLA 5 : IC-INFRA_SNC-05** -- Accesso a Internet : tasso di
    disponibilità garantito del 99,99%, calcolato su base 24h/24, 7g/7.

***Osservazioni*** :

-   *In risposta a un attacco di tipo denial of service distribuito (DDoS), il
    Fornitore si riserva il diritto di aggiustare la propria configurazione di
    routing internet per limitare l'impatto di tale attacco e
    tutelare la propria infrastruttura. In particolare, se un indirizzo IP
    appartenente al COMMITTENTE è bersagliato, il Fornitore può
    ricorrere alla tecnica di blackholing tramite la comunità BGP per
    bloccare tutto il traffico verso l'indirizzo IP interessato a monte presso i suoi
    fornitori, con l'obiettivo di proteggere le risorse del
    COMMITTENTE così come quelle di altri COMMITTENTI e dell'infrastruttura del
    Fornitore. Il Fornitore incoraggia fortemente il COMMITTENTE a adottare
    misure simili, come l'utilizzo di software firewall per applicazioni web

    disponibles sur le marché, et à configurer soigneusement ses groupes
    de sécurité via l'API de commande.*

-   *Il Fornitore insiste sulla necessità per il MANDANTE di minimizzare
    le aperture di flussi, evitando in particolare di rendere accessibili
    le porte di amministrazione **SSH** (porta TCP 22) e **RDP** (porta
    TCP 3389) dall'intera Internet (sotto-rete 0.0.0.0/0), così come i
    protocolli interni come **SMB** (porta TCP/UDP 445) o **NFS** (porta
    TCP/UDP 2049).*

## 8.2. Impegno di disponibilità dell'interfaccia MANDANTE

-   SLA 6 : IC-INFRA_SNC-06 -- Accesso alla console di amministrazione
    del Servizio : una disponibilità garantita del 97%, assicurata in
    continuo, 24 ore su 24 e 7 giorni su 7.
-   SLA 7 : IC-INFRA_SNC-07 -- Accesso alle API di gestione del
    Servizio : una disponibilità del 99.9%, calcolata su base 24h/24, 7j/7.

## 8.3. Impegno di disponibilità del supporto

-   **SLA 8 : IC-INFRA_SNC-08** -- Ecco gli impegni di performance del
    supporto tecnico del Fornitore per gli incidenti, escluse le manutenzioni
    programmate:

  ------------------------------------------------------------------------
  Priorità       Garanzia di tempo d'intervento         Obiettivo di
                 (GTI)                                 performance
  -------------- ----------------------------------- ---------------------
  Priorità       30min                                95%
  **P1**

  Priorità       2h                                   90%
  **P2**

  Priorità       4h                                   90%
  **P3**

  Priorità       24h                                  85%
  **P4**

  Priorità       48h                                  85%
  **P5**
  ------------------------------------------------------------------------

-   **SLA 9 : IC-INFRA_SNC-09** -- Ecco gli impegni di performance del
    supporto tecnico del Fornitore per le richieste di servizio:

  ------------------------------------------------------------------------
                   Garanzia di tempo d'intervento       Obiettivo di
                   (GTI)                                performance
  ---------------- ---------------------------------- --------------------
  Richiesta di    4h                                   90%
  servizio

  ------------------------------------------------------------------------

*Nota* :

-   *Il tempo per la Garanzia di Tempo di Intervento (GTI) è calcolato a
    partire dalla differenza tra il momento in cui il MANDANTE apre il
    ticket e il primo intervento del supporto del Fornitore.*
-   *L'investigazione di incidenti riguardanti i MANDANTI non comprenderà
    interventi a distanza sui server ospitati del MANDANTE. Questo
    supporto si limiterà alla spiegazione delle metriche disponibili relative
    all'ambiente del MANDANTE, al fine di facilitare la comprensione degli
    incidenti o dei problemi di performance incontrati. Sulla base dei
    risultati di questa analisi, possono essere suggeriti raccomandazioni.*

## 8.4. Impegno di disponibilità dello storage oggetti S3

-   **SLA 10 : IC-INFRA_SNC-10** -- Ecco gli impegni di disponibilità per
    lo storage oggetti S3:

  ------------------------------------------------------------------------------
  Indicatore          Impegno                              Obiettivo di
                                                           disponibilità
  ------------------- ------------------------------------ -------------------
  IC-INFRA-SNC-10.1   Durabilità dello storage di un       99.9999999% / anno
                      oggetto su una regione

  IC-INFRA-SNC-10.2   Disponibilità dell'API Storage       99.99%
                      Oggetti S3

  IC-INFRA-SNC-10.3   Latenza massima di accesso a un      150 ms
                      oggetto su una regione
  ------------------------------------------------------------------------------

Osservazioni :

-   Il Servizio di Storage Oggetti è specificamente progettato per il
    storage di oggetti e deve essere impiegato solo a questo scopo, **escludendo
    categoricamente il suo utilizzo in modalità blocco**. Utilizzare la modalità
    blocco attraverso metodi diversi, inclusa per esempio l'utilizzo di *"FUSE in
    un ambiente Linux*, costituisce una violazione dei termini di utilizzo
    enunciati. Nessun incidente, malfunzionamento o danno derivante
    da questo uso non conforme sarà coperto dagli Accordi di Livello di
    Servizio (SLA) definiti in questa convenzione di servizi.
-   La garanzia di durabilità è condizionata a un utilizzo dei servizi conforme
    alle migliori pratiche e standard attuali, ed esclude esplicitamente ogni
    modifica dei dati, sia essa intenzionale o accidentale, risultante da
    azioni intraprese dal MANDANTE.

## 8.5. Precisione riguardante l'impegno di backup

La strategia di backup dispiegata per il MANDANTE, è condizionata
dall'abbonamento alle unità operative adeguate.

Il Fornitore si impegna a fornire una soluzione di backup che permetterà
al MANDANTE di applicare le politiche di backup desiderate.

Si precisa che il perimetro del Fornitore termina alla messa a disposizione
di un servizio di backup e che spetta al MANDANTE supervisionare, tramite
l'interfaccia MANDANTE, la corretta esecuzione delle politiche associate.

Si precisa che la gestione delle capacità di storage dello spazio di
storage dedicato ai backup, resta a carico e responsabilità del
MANDANTE. Il Fornitore mette a disposizione il tasso di utilizzo
tramite la console.

*Esempio: Non backup di una macchina virtuale:*

*Il MANDANTE ha l'onere di verificare / supervisionare la corretta
esecuzione delle politiche di backup, nel caso in cui il MANDANTE
constati che una macchina virtuale non è stata salvata, spetta a lui
verificarne la causa, il MANDANTE può richiedere il supporto del
Fornitore in base al livello di supporto sottoscritto per essere assistito.*

**Il SLA 8 : IC-INFRA_SNC-08 e SLA 9**, sarà applicabile esclusivamente
nel caso di un incidente del servizio di backup.

# 9. Organizzazione della relazione contrattuale

## 9.1. Responsabilità del Fornitore

Il Fornitore si impegna a:

-   informare il suo MANDANTE in modo adeguato (ad esempio in caso di
    limite di capacità delle risorse tecniche che forniscono il Servizio).

-   informare formalmente il MANDANTE e con un preavviso di un mese, di ogni
    cambiamento legale, organizzativo o tecnico che possa avere un impatto
    sulla conformità del Servizio ai requisiti di protezione dalle leggi
    extra-europee (19.6 del riferimento SNC v3.2).

-   fornire al MANDANTE interfacce e servizi che siano almeno in lingua francese.

-   prendere in considerazione i requisiti settoriali specifici legati ai diversi
    tipi di informazioni affidate dal MANDANTE nell'ambito della messa in
    opera del Servizio e nei limiti delle responsabilità del Fornitore da un
    lato, e delle disposizioni previste dal Contratto dall'altro;

-   studiare i requisiti settoriali specifici legati ai diversi tipi di informazioni
    affidate dal MANDANTE nell'ambito della messa in opera del Servizio,
    successivamente espressi dal MANDANTE, e indicare a quest'ultimo le azioni
    necessarie per la loro presa in considerazione.

-   non divulgare nessuna informazione relativa alla prestazione a terze parti,
    salvo autorizzazione formale e scritta del MANDANTE.

-   mettere a disposizione tutte le informazioni necessarie alla realizzazione
    di audit di conformità in conformità alle disposizioni dell'articolo 28 del RGPD.

-   comunicare al MANDANTE, tramite l'attuale Convenzione di servizio, qualsiasi
    incidente di sicurezza che impatti il Servizio o l'utilizzo fatto dal MANDANTE
    del Servizio (inclusi i dati del MANDANTE).

-   autorizzare un prestatore di audit della sicurezza dei sistemi
    informativi (PASSI) qualificato, incaricato dal Fornitore, a
    eseguire audit del servizio e del suo sistema informativo, in conformità
    con il piano di controllo del SecNumCloud del Fornitore. Inoltre, il
    Fornitore si impegna a fornire tutte le informazioni necessarie per realizzare
    gli audit di conformità alle disposizioni dell'articolo 28 del RGPD, portati a
    termine dal mandante o da una terza parte incaricata.

-   fornire, in qualità di responsabile del trattamento, conformemente all'articolo
    28 del Regolamento generale sulla protezione dei dati (RGPD), assistenza e
    consigli al MANDANTE avvisandolo non appena un'istruzione emessa da
    quest'ultimo possa costituire una violazione delle norme di protezione dei dati.

-   notificare il MANDANTE in un ragionevole lasso di tempo, attraverso la console
    MANDANTE o tramite email al contatto MANDANTE, quando un progetto impatta
    o è suscettibile di impattare il livello di sicurezza o la disponibilità del Servizio,
    o di generare una perdita di funzionalità, i potenziali impatti, le misure di attenuazione
    messe in atto, e i rischi residui che lo riguardano.

-   documentare e attuare tutte le procedure necessarie per rispettare i requisiti
    legali, regolamentari e contrattuali applicabili al servizio, così come le esigenze
    di sicurezza specifiche del MANDANTE, definite da quest'ultimo e previste nel
    Contratto.

-   non utilizzare i dati del MANDANTE derivanti dalla produzione per eseguire test,
    salvo previa esplicita autorizzazione del MANDANTE, nel qual caso il Fornitore si
    impegna ad anonimizzare questi dati e a garantire la loro riservatezza durante la
    loro anonimizzazione.

-   eliminare i dati e i Dati tecnici relativi al
    COMMANDITAIRE, conformemente alla « procedura di cancellazione dei
    dati alla fine del Contratto » descritta nella presente Convenzione di
    servizio al termine o alla risoluzione del Contratto.

-   garantendo una cancellazione sicura di tutti i dati del
    COMMANDITAIRE attraverso una riscrittura completa di tutti i supporti che hanno ospitato
    i suoi dati nel contesto del Servizio.

Su richiesta formale e scritta del COMMANDITAIRE, il Fornitore di servizi si impegna
a :

1.  Rendere accessibile al COMMANDITAIRE il regolamento interno e la
    carta etica del Fornitore di servizi ;

2.  Rendere accessibile al COMMANDITAIRE le sanzioni previste in caso
    di infrazione alla politica di sicurezza ;

3.  Fornire al COMMANDITAIRE l\'insieme degli eventi che lo riguardano
    nei registri del Servizio; il COMMANDITAIRE
    può inoltre consultare autonomamente gli eventi relativi
    al suo utilizzo del Servizio attraverso le interfacce web e le API del
    Servizio;

4.  Rendere accessibile al COMMANDITAIRE le procedure che permettono di
    rispettare i requisiti legali, normativi e contrattuali in
    vigore applicabili al Servizio, nonché i bisogni di sicurezza
    specifici del COMMANDITAIRE previsti nel Contratto ;

5.  Fornire gli elementi di valutazione dei rischi relativi alla
    sottomissione dei dati del COMMANDITAIRE al diritto di uno stato
    non membro dell'Unione Europea;

6.  Informare il COMMANDITAIRE sui subappaltatori successivi
    coinvolti nella fornitura del Servizio, e informarlo di qualsiasi
    cambiamento che lo riguardi relativo a tali subappaltatori.

> Il Fornitore di servizi e tutte le sue filiali si impegnano a rispettare
> i valori fondamentali dell\'Unione Europea, cioè la dignità
> umana, la libertà, la democrazia, l\'uguaglianza, lo stato di diritto, così
> come il rispetto dei Diritti umani. Il servizio fornito dal
> Fornitore di servizi è conforme alla legislazione vigente in materia di
> diritti fondamentali e ai valori dell\'Unione Europea relativi al
> rispetto della dignità umana, alla libertà, all\'uguaglianza,
> alla democrazia e allo stato di diritto.

## 9.2. Limitazione delle responsabilità del Fornitore di servizi

Alla luce delle definizioni e delle condizioni menzionate nella
presente Convenzione di servizio, le responsabilità del Fornitore di servizi sono
limitate come segue:

1.  Il modello di responsabilità condivisa, descritto nella sezione
    « Modello di responsabilità condivisa » della presente Convenzione di
    servizio, limita di fatto il coinvolgimento del Fornitore di servizi negli
    strati di funzionamento che vanno "sopra" la messa a
    disposizione di risorse di calcolo, rete, archiviazione e backup. Questo esclude in particolare, ma non si limita a:

    -   La gestione di ciò che è installato sulle macchine virtuali
        (OS, middleware, applicativi, ecc.);

    -   Il mantenimento degli OS e altro software installato dal
        COMMANDITAIRE sulle sue macchine nei suoi Tenant;

    -   La sicurezza dei programmi, software e applicativi installati
        sulle macchine virtuali;

    -   L'aggiornamento delle macchine virtuali;

    -   Il backup dei dati a livello applicativo.

2.  Il Fornitore di servizi non può prendere impegni di backup dei
    Tenant del COMMANDITAIRE senza che il COMMANDITAIRE non abbia
    preventivamente sottoscritto alle unità operative adeguate.

3.  Il Fornitore di servizi non può rivendicare la proprietà dei dati
    trasmessi e generati dal COMMANDITAIRE. Infatti, questi
    appartengono al COMMANDITAIRE.

4.  Il Fornitore di servizi sottolinea che non può in alcun caso sfruttare e/o
    disporre dei dati trasmessi e generati dal COMMANDITAIRE
    senza la previa convalida di quest\'ultimo, essendo inteso che la loro
    disposizione è riservata al COMMANDITAIRE.

5.  Il Fornitore di servizi esonera qualsiasi responsabilità sui componenti
    fisicamente ospitati e gestiti dall'Fornitore di servizi, ma di proprietà
    diretta del COMMANDITAIRE o di un terzo con cui il
    COMMANDITAIRE ha contrattualizzato. L'hosting di componenti
    fisici dei clienti non fa parte del Servizio ed è quindi
    fuori dal contesto della presente Convenzione di servizio. Spetta al
    COMMANDITAIRE valutare il livello di aderenza o dipendenza
    introdotto da tali componenti nei confronti del Servizio IaaS qualificato
    SecNumCloud.

## 9.3. Limitazione dell'accesso

Nell'ambito del Servizio, il Fornitore di servizi è formalmente vietato
di accedere ai Tenant appartenenti al COMMANDITAIRE senza previa autorizzazione.
È responsabilità del COMMANDITAIRE fornire gli
accessi necessari al personale del Fornitore di servizi, in base alle esigenze
specifiche di hosting e, se del caso, dei servizi
professionali di supporto, se quest'opzione è stata scelta dal
COMMANDITAIRE.

Il COMMANDITAIRE riconosce che tali accessi sono concessi esclusivamente
per le necessità legate alla prestazione dei servizi convenuti, garantendo
così una gestione sicura e conforme ai termini dell'accordo.

L'accesso remoto da parte di terzi coinvolti nella prestazione del
servizio del Fornitore di servizi è strettamente vietato. Nell'eventualità che un requisito
tecnico specifico richieda tale accesso, questo potrà
essere stabilito solo dopo aver chiaramente notificato il COMMANDITAIRE,
fornendo una giustificazione dettagliata e ottenendo il suo consenso scritto.

Questa misura garantisce il controllo e la sicurezza dei dati del
COMMANDITAIRE, assicurando che qualsiasi eccezione alla regola sia debitamente
autorizzata e documentata.

## 9.4. Responsabilità dei terzi partecipanti alla fornitura del servizio Secure Temple

Il Fornitore di servizi gestisce la lista dei terzi partner partecipanti alla
fornitura del Servizio. Questi terzi sono gli editori, fornitori di servizi (del
Fornitore di servizi) e altri fornitori partecipanti alla
fornitura del Servizio. Il Fornitore di servizi applica le seguenti misure a questi terzi:

-   Il Fornitore di servizi richiede ai terzi partecipanti all\'implementazione del
    servizio, nel loro contributo al Servizio, un livello di sicurezza almeno
    equivalente a quello che si impegna a mantenere nella propria
    politica di sicurezza applicabile al servizio Secure Temple ;

-   Il Fornitore di servizi contrattualizza, con ciascuno dei terzi partecipanti all'
    implementazione del servizio, clausole di audit che permettono a un
    organismo di qualificazione di verificare che tali terzi rispettino
    i requisiti legali e i requisiti SNC, permettendo al Fornitore di servizi di
    rispettare i propri impegni nella presente Convenzione di servizio.

-   Il Fornitore di servizi implementa una procedura che permette di controllare
    regolarmente le misure messe in atto dai terzi partecipanti all'
    implementazione del servizio per rispettare i requisiti necessari
    al Fornitore di servizi di rispettare i propri impegni nella presente Convenzione
    di servizio.

-   Il Fornitore di servizi garantisce il monitoraggio delle modifiche
    apportate dai terzi partecipanti all'implementazione del servizio suscettibili
    di influire sul livello di sicurezza del sistema informativo del
    servizio.

## 9.5. Responsabilità e obblighi del COMMANDITAIRE

Il COMMANDITAIRE ha i seguenti obblighi nell'ambito del
Servizio:

-   Per ricordare, il Fornitore di servizi fornisce al COMMANDITAIRE una piattaforma
    di esecuzione di macchine virtuali, la configurazione di queste è a
    carico del COMMANDITAIRE. Ogni macchina virtuale non può
    funzionare senza una politica di backup associata. Il
    Fornitore di servizi definisce tramite le sue interfacce le politiche di backup
    automatiche. Tuttavia, è a carico del COMMANDITAIRE l'attivazione di
    queste politiche di backup e quindi l'attivazione delle macchine
    virtuali.

-   Il COMMANDITAIRE autorizza l'ANSSI e l'organismo di qualificazione
    SNC ad auditare il Servizio e l'infrastruttura tecnica erogante il
    Servizio.

-   Il COMMANDITAIRE è responsabile di indicare al Fornitore di servizi eventuali
    requisiti settoriali specifici legati ai tipi
    di informazioni affidati dal COMMANDITAIRE che necessitano di essere
    prese in considerazione dal Fornitore di servizi.

-   Il COMMANDITAIRE accetta di non chiedere al Fornitore di servizi requisiti o
    azioni che vadano in deroga ai requisiti del
    quadro di riferimento SecNumCloud nella sua versione corrente, da una parte, o
    che abbassino il livello di sicurezza stabilito dal rispetto dei requisiti
    dello stesso quadro di riferimento dall\'altra.

## 9.6. Diritti del COMMANDITAIRE

In qualsiasi momento durante la relazione contrattuale, il COMMANDITAIRE
può presentare un reclamo relativo al servizio qualificato presso
l'ANSSI.

In qualsiasi momento, il COMMANDITAIRE può chiedere al Fornitore di servizi di rendere
accessibile il proprio regolamento interno e la propria carta etica.

## 9.7. Cancellazione dei dati alla fine del Contratto

Alla conclusione del contratto, che sia giunto a scadenza o che sia stato risolto per
qualsiasi motivo, il Fornitore di servizi si impegna a procedere alla
cancellazione sicura di tutti i dati del COMMANDITAIRE, inclusi i dati tecnici. Il Fornitore di servizi si assicurerà di comunicare
al COMMANDITAIRE un preavviso formale, rispettando un termine di ventuno (21) giorni
di calendario. I dati del COMMANDITAIRE saranno quindi
eliminati entro un termine massimo di trenta (30) giorni dalla notifica.

Per attestare questa cancellazione, il Fornitore di servizi fornirà al
COMMANDITAIRE un certificato che confermi la cancellazione dei dati.

# 10. Ciclo di vita della presente Convenzione di servizio

## 10.1. Entrata in vigore della Convenzione di servizio

La presente Convenzione di servizio entra in vigore il giorno della sua firma
da parte del COMMANDITAIRE.

La raccolta, la manipolazione, lo stoccaggio e il trattamento dei dati
effettuati nell\'ambito della prevendita, della messa in opera, della cessazione del
Servizio​, sono effettuati nel rispetto della legislazione vigente.

## 10.2. Evoluzioni della Convenzione di servizio

Le modifiche o aggiunte apportate alla presente Convenzione di servizio
découlent exclusivement des requêtes formulées par les organes de
gouvernance désignés à cet effet. Ces propositions de changement seront
examinées par les Parties, habilitées à déterminer les aspects
nécessitant une formalisation écrite.

Il est convenu que toute évolution de la Convention de service, après
validation, qui altère les conditions financières initialement établies,
nécessitera l'établissement et la signature d'un avenant au Contrat en
cours.

Les facteurs pouvant induire une révision de cette Convention de service
incluent, sans s'y limiter :

-   L'évolution de l'infrastructure technique délivrant le Service
    IaaS ;
-   Les ajustements apportés aux services déployés par le Prestataire
    pour fournir le Service ;
-   Les variations des engagements pris et des sanctions applicables ;
-   Les reconfigurations organisationnelles au sein du COMMANDITAIRE ou
    du Prestataire ;
-   L'expansion ou la réduction du champ d'application du Service.

La gestion des versions et des révisions de la Convention de service est
consignée en préambule du document pour en faciliter le suivi.

### 10.2.1. Évolutions déclenchées par le COMMANDITAIRE

Les évolutions de la Convention de service peuvent avoir, notamment,
pour origine :

-   Une évolution de l'infrastructure gérée par le Prestataire ;

-   Une modification des services mis en œuvre par le Prestataire ;

-   Une modification des engagements de niveaux de services par le
    Prestataire.

### 10.2.2. Évolutions déclenchées par le Prestataire

Toute modification de la Convention de service est soumise à acceptation
du COMMANDITAIRE. Il est entendu que toute modification ou complément
validés modifiant les éléments financiers du Contrat, pourra impliquer
la signature d'un avenant à celui-ci.

## 10.3. Réversibilité

De plus, Cloud Temple s'engage à permettre une révision de la présente
Convention de service (prévoyant notamment sa résiliation) sans pénalité
pour le COMMANDITAIRE en cas de perte de la qualification SecNumCloud.

Les Services ne comprennent pas d'obligation de réversibilité (à savoir,
l'aide au COMMANDITAIRE pour qu'il puisse migrer son système vers un
altro "Prestataire) à l'exception de la mise à disposition du
COMMANDITAIRE par le Prestataire de l'interface COMMANDITAIRE permettant
au COMMANDITAIRE de sauvegarder et récupérer ses données y compris
notamment les données de configuration de leur système d'information via
l'une des modalités techniques suivantes au choix du COMMANDITAIRE : la
mise à disposition de fichiers suivant un ou plusieurs formats
documentés et exploitables en dehors du service fourni par le
Prestataire ou bien via la mise en place d'interfaces techniques
permettant l'accès aux données suivant un schéma documenté et
exploitable (API).

Le COMMANDITAIRE, seul maître de son système, doit tout mettre en œuvre
pour faciliter cette opération en tant que de besoin (ce qui implique,
notamment, qu'il mette en place une documentation rigoureuse à cet
effet) et l'élaboration de plans de réversibilité. Dans le cas où le
COMMANDITAIRE aurait besoin d'une prestation complémentaire, le
Prestataire peut proposer une mission de conseil à cet égard dans le
cadre d'un contrat spécifique à négocier.

# 11. Disponibilité, continuité et restauration du service

## 11.1. Gestion des Incidents et des interruptions

### 11.1.1. Incidents

#### 11.1.1.1. Types d'Incidents traités dans le cadre de cette Convention de service

-   Sinistres ;

-   Pannes et défaillances ;

-   Incidents de sécurité impactant la disponibilité, la confidentialité
    ou l'intégrité du Service.

#### 11.1.1.2. Traitement des incidents

> Le Prestataire informe le COMMANDITAIRE dans les meilleurs délais, des
> incidents et interruptions, au moyen d'une une notification dans la
> console COMMANDITAIRE ou par courriel au contact COMMANDITAIRE. Le
> Prestataire informe le COMMANDITAIRE du traitement de l'incident par
> le canal utilisé pour notifier l'incident, ou par le canal indiqué
> dans la notification de l'incident.

#### 11.1.1.3. Niveau de notification des Incidents de sécurité

Le COMMANDITAIRE a la responsabilité de choisir les niveaux de gravité
des Incidents de sécurité pour lesquels il souhaite être informé, par
exemple via leur formalisation dans un PAS applicable au Service.

Par défaut, le COMMANDITAIRE est informé :

-   Des incidents de sécurité avec impact (impacts I1 et I2 selon
    l'échelle d'impact définie dans le processus de priorisation des
    traitements de la présente Convention de service) ;

-   Des incidents de sécurité impactant la confidentialité ou
    l'intégrité des données du COMMANDITAIRE confiées dans le cadre du
    Service ;

-   Des violations de données à caractère personnel pour lesquelles le
    COMMANDITAIRE est responsable du traitement conformément à l'article
    8 de l'Annexe DPA dans le cadre du Service ;

-

## 11.2. Maintenance du Service

### 11.2.1. Nature de la maintenance

Des violations de données à caractère personnel pour lesquelles le
Prestataire est responsable du traitement et comportant des données
personnelles du COMMANDITAIRE, conformément à l'article 8 de l'Annexe
DPA. La maintenance assurée consiste en la mise en œuvre :

-   Du plan de maintien en conditions opérationnelles du Service pour
    assurer de bons indicateurs de disponibilité tels que s'y engage le
    Prestataire plus haut ;

-   Du plan de PCA/PRA si souscrit par le COMMANDITAIRE déclenché selon
    les éventuels incidents qui surviendraient.

### 11.2.2. Accès distants de Cloud Temple sur le périmètre du COMMANDITAIRE

Le Prestataire s'interdit, dans le cadre de la présente Convention de
service, tout accès aux Tenants et à l'espace de l'interface du
COMMANDITAIRE.

Il incombera au COMMANDITAIRE donner les accès nécessaires au personnel
du Prestataire. Le COMMANDITAIRE reconnaît que les accès seront utilisés
dans le cadre de l'hébergement et in fine de l'infogérance (si souscrit
par le COMMANDITAIRE).

### 11.2.3. Accès distants de tiers participant à la fourniture du service sur le périmètre du COMMANDITAIRE

Aucun accès distant de tiers participant à la fourniture du Service
n'est autorisé.

Si un besoin technique rendait ce cas de figure nécessaire, alors ce
type d'accès ne serait réalisé qu'après notification du COMMANDITAIRE
justification et obtention de son accord écrit.

# 12. Procédure d'effacement des données en fin de Contrat

A la fin du Contrat, que le Contrat soit arrivé à son terme ou pour
toute altra cause, le Prestataire assura l'effacement sécurisé de
l'intégralité des données traitées dans le cadre du Service, y compris
les Données techniques du COMMANDITAIRE. Le Prestataire donnera un
préavis formel en respectant un délai de vingt et un jours (21)
calendaires. Les données du COMMANDITAIRE seront supprimées dans un
délai maximum de trenta (30) jour après la notification. Le Prestataire
fournit un certificat de suppression de données au COMMANDITAIRE.

# 13. Droit applicable

## 13.1. De manière générale

Le droit applicable et auquel est soumise la présente Convention de
service est le droit français.

## 13.2. Respect du droit et des réglementations applicables

Le Prestataire s'engage sur les points suivants :

-   L'identification des contraintes légales et réglementaires
    applicables dans le cadre du Service ;

-   Le respect des contraintes légales et réglementaires applicables aux
    données confiées au Prestataire dans la limite des responsabilités
    de ce dernier d\'une part, et des dispositions prévues au Contrat
    d\'autre part.;

-   Le respect de la Loi informatique et liberté et du RGPD ;

-   La mise en œuvre de moyens de protection des données personnelles ;

-   La mise en œuvre d'un processus de veille légale et réglementaire ;

-   De disposer et maintenir des relations appropriées ou une veille
    avec les autorités sectorielles en lien avec la nature des données
    traitées dans le cadre du Services. Cela inclus notamment l'ANSSI,
    le CERT-FR et la CNIL.

## 13.3. RGPD

Agissant en qualité de sous-traitant au sens de l'article 28 du
Règlement général sur la protection des données (RGPD), le Prestataire
s'engage :

-   A assurer la transparence et la traçabilité ;

-   A désigner un DPO en charge de définir et mettre en œuvre les
    mesures de protection des données à caractère personnel ;

-   Apporter une assistance et du conseil au COMMANDITAIRE en l'alerte
    si une instruction de ce dernier constitue une violation des règles
    de protection des données personnelles si le Prestataire a le moyen
    d'en identifier ;

-   Une garantie de sécurité sur les données traitées (du fait de la
    qualification SecNumCloud).

## 13.4. Protection vis à vis du droit extra-européen

Le siège statuaire du Prestataire est établi au sein d'un Stato membro
del 'Unione Europea. Il capitale sociale e i diritti di voto nella
società del Fornitore non sono, direttamente o indirettamente:

-   individuellement detenus à plus de 24% ;

-   et collectivement detenus à plus de 39% ;

par des entités tierces possédant leur siège statutaire, administration
centrale ou principal établissement au sein d'un Stato non membro del
l'Unione Europea.

En cas de recours par le Prestataire, dans le cadre du Service, au
service d'une società tierce - y compris un sous-traitant - possédant
son siège statutaire, administration centrale ou principal établissement
au sein d'un Stato non membro del l'Unione Europea ou appartenant ou
étant contrôlée par une società tierce domiciliée en dehors l'Unione
Europea, le Prestataire s'engage :

-   a questo che questa suddetta società tierce ne disponera d'aucun accès
    aux données opérées par le service 'Temple sicuro' ;

-   a disporre d'una autonoma d'exploitation attraverso la possibilité
    di fare appello a un altro sous-traitant o di mettere rapidamente in
    opera una alternativa tecnologica.
Pour rappel, les données visées sont celles qui sont confiées au
Prestataire par le COMMANDITAIRE ainsi que toutes Données techniques
comprenant des informations sur les COMMANDITAIRES.

Per esigenze dell'articolo corrente, il concetto di controllo è inteso
come quello menzionato al secondo comma dell’articolo L233-3 del codice
del commercio.

# 14. SIGNATURES

Fait à \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, le
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Pour Cloud Temple, le PRESTATAIRE

Pour \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, le COMMANDITAIRE