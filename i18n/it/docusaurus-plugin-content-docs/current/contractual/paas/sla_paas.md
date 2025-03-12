---
title: Accordo di Servizio SecNumCloud PaaS
---

**Indice**

- [1. Quadro](#X09af6387e1d2792b8edc09fc15abd136a837db5)
- [2. Acronimi](#Xc79d173393c04b42ba8cdf223cca3c0202f4dee)
- [3. Glossario](#X0c9d1d82fdc5fcc3d01a320dd2dd3715a6900b4)
- [4. Oggetto del presente accordo di servizio PaaS del Fornitore](#X23ec3c3767539f9e69acc7cbf5af8aa8c1b6ad7)
- [5. Evoluzione dell'accordo di servizio PaaS](#Xa7161677dcf9a35d02c20807040326b39d55881)
- [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Descrizione del servizio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
- [8. Implementazione del servizio](#Xc98fb6da582d483e300add6a80df6e3eb76498a)
  - [8.1. Descrizione dei componenti tecnici](#Xa61c340e3fdf14082cef411d3a913fc4bdeeb4c)
    - [8.1.1. Piattaforma di servizio REDHAT OpenShift](#Xf81d22ed0abca8eab163c160107fa228901d82c)
    - [8.1.2. Infrastruttura software per la gestione della piattaforma Redhat Openshift](#Xf11ec2e6a431ae11852fe3129245b4d0fd0747b)
    - [8.1.3. Infrastruttura di backup associata](#X77b1112fa2c2a53eb0cf09b416962164b77b437)
    - [8.1.4. Implementazione di soluzioni di ripresa di attività o di continuità operativa](#Xae1394210f1c9bee4293a93160d2d11cc70ebdd)
- [9. Impegni e livelli di servizio](#Xad2b4ae071a52a99b502c4e84cbba3f15ac78f8)
  - [9.1. Impegni di disponibilità della piattaforma RedHat OpenShift](#X273341276df81e9f6fad2000ac84216560e59fa)
- [10. Modello di responsabilità condivisa applicabile](#Xa90d4e180ca2ae1d92e4e4cf00f20aca5061eac)
  - [10.1. Responsabilità e Obblighi del Fornitore](#Xe5cf73850ea2189ab60f41560bf52e97d3019f9)
  - [10.2. Limitazione di responsabilità del Fornitore](#X8856c8f606130116944398b24484722823c023c)
  - [10.3. Limitazione di accesso](#X902763258f1242326933ce46892d3f549e73e30)
- [11. Cancellazione dei dati alla fine del contratto](#Xbe642a80027ce4ad88cc932e98b8661c2a0d3a6)
- [12. Diritto applicabile](#Xa219184d62eb90dfeec612801fd05c5d816c331)

## 1. Quadro

  --------------------- -------------------------------------------------
  Riferimento             CT.AM.JUR.ANX.PAAS 2.1

  Data                  21 gennaio 2025
  --------------------- -------------------------------------------------

## 2. Acronimi

  ------------------------------------------------------------------------------
  Acronimo      Descrizione
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Comitato consultivo sui cambiamenti

  CMDB          Configuration Management Database -- Database di gestione delle configurazioni

  COPIL         Comitato di pilotaggio

  COSTRAT       Comitato strategico

  DB            Database (base di dati)

  DRP           Disaster Recovery Plan (Piano di ripresa di attività)

  GTI           Garanzia di Tempo di Intervento

  GTR           Garanzia di Tempo di Risoluzione

  GTE           Garanzia di Tempo di Escalation

  HYPERVISEUR   Sistema operativo che permette l'esecuzione di VM su una lama di calcolo

  ITIL          Information Technology Infrastructure Library - Buone pratiche per la gestione dei sistemi informativi

  IAAS          Infrastructure as a Service

  MCO           Mantenimento in condizione operativa

  MOA           Committenza

  MOE           Direzione Lavori

  OS            Operating system (sistema operativo)

  PAQ           Piano di Assicurazione Qualità

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change -- Richiesta di cambiamento

  RGPD          Regolamento Generale sulla Protezione dei Dati (personali)

  RPO           Recovery Point Objective -- Freschezza dei dati ripristinati in caso di sinistro

  RTO           Recovery Time Objective -- Tempo di ripristino del servizio in caso di sinistro

  SLA           Service Level Agreement -- Accordo sui livelli di servizio

  UO            Unità Operativa

  VABF          Validazione di Idoneità al Buon Funzionamento

  VABE          Validazione di Idoneità alla Buona Utilizzabilità

  VM            Virtual Machine (Macchina virtuale)

  VSR           Validazione di Servizio Regolare

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossario

Le espressioni di seguito utilizzate nel presente documento saranno interpretate in conformità con le definizioni loro attribuite qui sotto:

  --------------------------------------------------------------------------------------------
  Espressione                     Definizione
  -------------------------------- -----------------------------------------------------------
  \"Secure Temple\"                Indica il servizio IaaS qualificato SecNumCloud, proposto dalla società Cloud Temple, come definito nella certificazione consultabile sul sito dell'ANSSI e fornita in allegato al presente Accordo di servizio.

  Regione                          Una \"regione\" nel contesto del cloud computing indica un insieme geograficamente delimitato di zone di disponibilità cloud, che fornisce servizi di rete, di calcolo e di archiviazione per ottimizzare la latenza, le prestazioni e la conformità normativa locale.

  Zona di                          Una sezione specifica e isolata dell'infrastruttura di cloud computing, progettata per garantire l'alta disponibilità e la resilienza dei servizi attraverso una distribuzione geografica delle risorse.
  Disponibilità(AZ)(Availability
  zone)

Tenant                           Un'istanza isolata riservata a un utente o gruppo di utenti, che condividono un'infrastruttura comune mantenendo l'indipendenza e la sicurezza dei dati e delle applicazioni.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Espressione     Definizione
  --------------- ---------------------------------------------------------
  Incidente      Un \"incidente\" indica qualsiasi evento imprevisto che disturba il normale funzionamento di un sistema o compromette la sicurezza dei dati.

  Problema       Un \"problema\" è una causa fondamentale di uno o più incidenti, identificata o sospettata, che richiede un'analisi e una risoluzione per prevenirne la ricorrenza.

  Cambiamento    Un \"cambiamento\" indica qualsiasi aggiunta, modifica o eliminazione che influisce sul Servizio, che è stata autorizzata, pianificata o assunta.

  Cambiamento    Un \"cambiamento standard\" è un cambiamento soggetto a una procedura, le cui modalità di messa in produzione e impatti (inclusi finanziari) sono conosciuti e accettati in anticipo dalle Parti. Viene quindi integrato nel catalogo dei cambiamenti standard, e può a seconda dei casi avere un GTI e un GTR.
  standard

  Messa in       azione(i) di amministrazione per la realizzazione del cambiamento quando questo è approvato (il cambiamento, nel senso ITIL, riguarda solo la gestione del cambiamento e non la sua realizzazione/concretizzazione).
  produzione

  Richiesta di   richiesta di evoluzione soggetta a una procedura, la cui realizzazione: i) non modifica la CMDB, ii) la modalità operativa, i costi e i rischi sono conosciuti e accettati in anticipo e non richiedono modalità specifiche di ritorno indietro iii) la realizzazione è soggetta a un accordo di livello di servizio ed è inclusa nella quota del contratto quando viene realizzata in ore lavorative e giorni lavorativi.
  servizio

  Elemento di    Un \"elemento di configurazione\" è un componente identificabile del sistema informativo, come un software, un hardware o un documento, soggetto a gestione nell'ambito della gestione dei servizi IT.
  configurazione

  Servizio       Un \"servizio\" indica il servizio qualificato SecNumCloud, fornito al COMMITTENTE dal Fornitore, come descritto nella sezione « Descrizione del Servizio » del presente Accordo di servizio.

  Evento         Un \"evento\" è qualsiasi occorrenza rilevabile o identificabile che può avere importanza per la gestione del Servizio.

  Sinistro       Un « sinistro » indica un evento grave di origine naturale o umana, accidentale o intenzionale, che causa perdite e danni importanti alla Parte sinistrata.

  Accordo di     Questo documento, stabilito nell'ambito di un contratto specifico o delle Condizioni Generali di Vendita e Utilizzo (CGVU), e questo, in conformità con le esigenze del Referenziale SecNumCloud.
  servizio

  Disponibilità  Capacità di garantire la disponibilità e il mantenimento delle prestazioni ottimali di un servizio, in accordo con i criteri e gli impegni definiti negli Accordi di Livello di Servizio (SLA).

Supervisione   Sorveglianza di un Sistema Informativo o di un Servizio, che implica la raccolta di vari dati come misure e allarmi. Questa attività si limita all'osservazione e al monitoraggio, senza intervenire direttamente sugli elementi sorvegliati, una prerogativa che appartiene alle operazioni di Amministrazione.
  -------------------------------------------------------------------------

## 4. Oggetto del presente accordo di servizio PaaS del Fornitore

Il presente Accordo di Servizi stabilisce i termini e le condizioni secondo cui il Fornitore si impegna a fornire al COMMITTENTE un'infrastruttura conforme alle specifiche dell'offerta « Platform as a Service -- PaaS », debitamente qualificata SecNumCloud.

Oggetto dell'Accordo di Servizi:

1. Precisare le esigenze di prestazione attese dal COMMITTENTE in termini di funzionalità e affidabilità dell'infrastruttura.
2. Enunciare gli obblighi del Fornitore al fine di soddisfare i livelli di servizio concordati.
3. Identificare le norme regolamentari applicabili specificamente all'infrastruttura proposta.
4. Assicurare un'uniformità e integrità nella valutazione della qualità dei servizi resi.
5. Garantire l'eccellenza dei servizi forniti, valutata mediante indicatori di prestazione quantitativi.

Si stipula che, nell'ipotesi in cui il Fornitore si vedesse ritirare la sua qualificazione SecNumCloud, il presente Contratto potrà essere rescisso di pieno diritto, senza incorrere in penalità, dal COMMITTENTE. In tale eventualità, il Fornitore si impegna a informare il COMMITTENTE di questa squalifica mediante l'invio di una notifica ufficiale, per mezzo di una lettera raccomandata con ricevuta di ritorno.

È opportuno notare che una modifica o un aggiustamento della qualificazione SecNumCloud non sarà interpretato come una revoca della qualificazione iniziale.

## 5. Evoluzione dell'accordo di servizio PaaS

Le modifiche o aggiunte apportate al presente accordo di servizio derivano esclusivamente dalle richieste formulate dagli organi di governance designati a tale scopo. Queste proposte di cambiamento saranno esaminate in seno al comitato strategico, unica istanza abilitata a determinare gli aspetti che necessitano di una formalizzazione scritta.

Si conviene che ogni evoluzione dell'accordo, dopo validazione, che alteri le condizioni finanziarie inizialmente stabilite, richiederà la stesura e la firma di un addendum al contratto in corso.

I fattori che possono indurre una revisione di questo accordo includono, senza limitarsi a:

- L'adattamento della piattaforma PaaS orchestrata dal Fornitore.
- Gli aggiustamenti apportati ai servizi implementati dal Fornitore.
- Le variazioni degli impegni presi e delle sanzioni applicabili.
- Le riconfigurazioni organizzative in seno al COMMITTENTE o al Fornitore.
- L'espansione o la riduzione del campo di applicazione dei servizi a cui il COMMITTENTE ha sottoscritto.

La gestione delle versioni e delle revisioni dell'accordo è registrata nel preambolo del documento per facilitarne il monitoraggio.

## 6. Audit

Il Fornitore si impegna a permettere al COMMITTENTE, o a qualsiasi auditor terzo che quest'ultimo avesse designato, di consultare l'insieme dei documenti necessari all'attestazione del rispetto integrale degli obblighi legati alla conformità con le disposizioni dell'articolo 28 del Regolamento Generale sulla Protezione dei Dati (RGPD), facilitando così la realizzazione di audit.

**Il Fornitore si impegna in particolare a tenere a disposizione del COMMITTENTE la lista di tutti i terzi che possono accedere ai dati e a informarlo di qualsiasi cambiamento di subappaltatori.**

Con l'accettazione del presente accordo di servizio, il COMMITTENTE conferisce la sua autorizzazione esplicita a:

1. **L'Agenzia Nazionale della Sicurezza dei Sistemi Informativi (ANSSI)** così come all'entità di qualificazione competente per intraprendere la verifica della conformità del Servizio e del suo Sistema Informativo agli standard definiti dal Referenziale SecNumCloud.
2. **Un fornitore di audit della sicurezza dei sistemi informativi**, debitamente qualificato ed espressamente designato dal Fornitore, per condurre audit di sicurezza sul Servizio fornito dal Fornitore.

## 7. Descrizione del servizio

L'offerta di servizi proposta dal Fornitore si caratterizza per la messa a disposizione delle seguenti prestazioni, le quali si allineano con il principio di responsabilità condivisa dettagliato nelle norme stabilite dal referenziale SecNumCloud:

- La fornitura di una piattaforma di gestione dei container Redhat Openshift pilotata dal Fornitore.

Si intende che il Fornitore mobiliterà la sua esperienza per realizzare le Prestazioni secondo le migliori pratiche professionali, conformemente alle loro Specifiche e rispettando le norme della sua certificazione ISO/IEC 27001 così come le direttive del Referenziale SecNumCloud.

## 8. Implementazione del servizio

Si precisa che tutte le operazioni e tutti i componenti fisici coinvolti nella fornitura del servizio qualificato, oggetto del presente accordo, sono situati nell'Unione Europea. Ciò include in particolare il supporto, la supervisione operativa e la supervisione di sicurezza (SOC).

### 8.1. Descrizione dei componenti tecnici

I servizi PaaS (Platform as a Service) comprendono la totalità dei componenti e servizi richiesti per il loro funzionamento ottimale nel rispetto della qualificazione SecNumCloud.

A questo riguardo, le loro prestazioni e affidabilità sono intrinsecamente legate ai componenti tecnici e ai servizi **dell'infrastruttura IaaS** del Fornitore, come specificato nel documento [Accordo di Servizio IaaS](../Working%20in%20progress%20-%20not%20use/iaas/sla_iaas.md) del Fornitore.

#### 8.1.1. Piattaforma di servizio REDHAT OpenShift

Il servizio comprende la messa a disposizione all'interno di una regione, su 3 zone di disponibilità,
