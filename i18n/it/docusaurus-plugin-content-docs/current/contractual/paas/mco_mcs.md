---
title: MCO/MCS
---

**Politica di Mantenimento in Condizioni Operative (MCO) e di Mantenimento in Condizioni di Sicurezza (MCS) sul PaaS OpenShift SNC **Cloud Temple****

## Preambolo

Questa politica dettaglia le responsabilità e le raccomandazioni per il Mantenimento in Condizioni Operative (MCO) e il Mantenimento in Condizioni di Sicurezza (MCS) dei vostri ambienti sul PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Mantenimento in Condizioni Operative (MCO)

### 1.1. Gestione e aggiornamento dei cluster

**Responsabilità di **Cloud Temple**:**

- Gestione completa dell'infrastruttura sottostante, inclusi i nodi master, aggiornamenti delle versioni di OpenShift e resilienza dei servizi critici distribuiti da **Cloud Temple**.
- Aggiornamenti minori/patch automatici senza interruzione per i carichi di lavoro ospitati, salvo diversa comunicazione.
- Limitazione dei diritti e delle funzionalità alle restrizioni SecNumCloud.
- Comunicazione degli aggiornamenti in arrivo e delle modifiche di rilievo nei prossimi tre mesi tramite la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilità dell'utente:**

- Gestione dei carichi di lavoro distribuiti (applicazioni, strumenti CI/CD) e delle relative configurazioni.
- Test degli aggiornamenti dei carichi di lavoro in un ambiente di staging prima del rilascio in produzione.
- Garantire la compatibilità dei carichi di lavoro con i componenti del cluster.

**Raccomandazione:**

- Pianificare i deployment applicativi al di fuori delle finestre di manutenzione per evitare conflitti con gli aggiornamenti automatici del cluster.
- Seguire le comunicazioni di **Cloud Temple** relative agli aggiornamenti principali per pianificare eventuali modifiche necessarie.
- Monitorare gli aggiornamenti previsti tramite la [**Roadmap prodotto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Iscriversi alle notifiche [**di incidenti**](/console/status.md#gestion-des-notifications)

---

### 1.2. Supervisione e monitoraggio

**Responsabilità di **Cloud Temple**:**

- Supervisione e monitoraggio dell'infrastruttura e dei servizi sottostanti distribuiti da **Cloud Temple**.

**Responsabilità dell'utente:**

- Supervisione e monitoraggio dei propri carichi di lavoro.

**Raccomandazione:**

Utilizzare gli **strumenti nativi forniti:**

- Analisi dei log di performance e degli eventi tramite la console OpenShift.
- Configurazione di avvisi personalizzati a partire dalle metriche del cluster e dei pod mediante interfaccia grafica.

Configurare soglie critiche di allerta:

- **CPU/Memoria** dei pod: ≥ 80%.
- **Spazio disco sui volumi persistenti**: ≥ 85%.
- **Errori di avvio dei pod**: più di X occorrenze in 10 minuti.

Automatizzare l’escalation degli avvisi verso i vostri strumenti di gestione per una risposta rapida.

---

### 1.3. Backup e ripristino

I componenti critici del cluster sono salvati automaticamente da **Cloud Temple**. I carichi di lavoro e i dati degli utenti necessitano di una gestione dedicata.

**Responsabilità di **Cloud Temple**:**

- Meccanismi di ridondanza automatica all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente:**

- Eseguire il salvataggio dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.

**Raccomandazione:**

- Implementare politiche di backup regolari:
  - Backup automatici dei PV con Kasten.
  - Backup giornaliero delle configurazioni Kubernetes, secrets e deployment YAML.
- Testare regolarmente i ripristini per convalidare i RPO.

---

## 2. Mantenimento in Condizioni di Sicurezza (MCS)

### 2.1. Gestione dei secrets e delle configurazioni

Utilizzo dei secrets OpenShift/Kubernetes e raccomandazione di integrare sistemi di gestione centralizzata dei secrets.

**Responsabilità di **Cloud Temple**:**

- La gestione dei secrets e della configurazione dell'infrastruttura e dei servizi sottostanti all'offerta è responsabilità di **Cloud Temple**.

**Responsabilità dell'utente:**

- La gestione dei secrets e della configurazione dei carichi di lavoro del **Cliente** è responsabilità del **Cliente**.

**Raccomandazione:**

- Non memorizzare secrets in chiaro nei file YAML.
- Utilizzare strumenti per cifrare le informazioni sensibili.

### 2.2. Controllo degli accessi (IAM)

La revisione degli accessi avviene attraverso la console Shiva e il modulo "User Management" della console OpenShift.

Per maggiori dettagli su questa funzionalità, fare riferimento alla nostra [**guida**](/console/iam/iam) e alla [**documentazione**](https://docs.redhat.com/en/documentation/openshift_container_platform/) dell’editore.

**Responsabilità di **Cloud Temple**:**

- **Cloud Temple** è responsabile della gestione degli account di servizio e di amministrazione.
- **Cloud Temple** è responsabile dell'integrazione con il sistema di identità **Cloud Temple** per la gestione degli accessi.
- **Cloud Temple** è responsabile dell’implementazione predefinita della configurazione **RBAC** e delle restrizioni iniziali dei privilegi degli utenti.
- **Cloud Temple** è responsabile della fornitura e del mantenimento del sistema di **autenticazione a due fattori** per rafforzare gli accessi.

**Responsabilità dell'utente:**

- Il **Cliente** deve controllare regolarmente gli accessi dei propri utenti.
- Il **Cliente** è responsabile della concessione degli accessi ai propri utenti e del loro onboarding nel tenant.
- Il **Cliente** deve gestire i propri utenti nel rispetto delle limitazioni imposte dal sistema **Cloud Temple**.

### 2.3. Gestione delle vulnerabilità

Le vulnerabilità sull'infrastruttura e sui servizi sottostanti all’offerta saranno comunicate nel modulo incidenti.

**Responsabilità di **Cloud Temple**:**

- **Cloud Temple** è responsabile della comunicazione delle vulnerabilità sull'infrastruttura e sui servizi sottostanti all'offerta non appena rilevate tramite il modulo [**incidenti**](/console/status.md) della console SHIVA.
- **Cloud Temple** è responsabile dell'applicazione delle patch su questo perimetro.
- **Cloud Temple** è responsabile della messa a disposizione di strumenti per analizzare le vulnerabilità delle immagini Docker. Per impostazione predefinita, **Cloud Temple** implementa **[Quay]** per eseguire la scansione automatica delle immagini Docker.

**Responsabilità dell'utente:**

- Il **Cliente** è responsabile della rilevazione e della correzione delle vulnerabilità nei propri carichi di lavoro.
- Il **Cliente** è responsabile dell'aggiornamento dei propri carichi di lavoro per garantire l'applicazione tempestiva delle patch di sicurezza.

**Raccomandazione:**

- Utilizzare il sistema di alerting del cluster fornito da **[Quay]** per analizzare le vulnerabilità e rilevare comportamenti anomali nelle immagini utilizzate dal **Cliente**.
- Iscriversi alle notifiche di [**incidenti**](/console/status.md#gestion-des-notifications).

### 2.4. Crittografia

Garanzia di crittografia nativa sull'infrastruttura **Cloud Temple**, con raccomandazioni per i carichi di lavoro.

**Responsabilità di **Cloud Temple**:**

- Meccanismi di ridondanza all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente:**

- Eseguire il salvataggio dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Assicurarsi che i propri carichi di lavoro utilizzino i meccanismi di resilienza e adattare i deployment per implementarli.

**Raccomandazione:**

- Attivare la **crittografia TLS** per tutte le comunicazioni intra-pod.
- Attivare la **crittografia TLS** per tutte le comunicazioni fra le Offerte PaaS e IaaS **Cloud Temple**.
- Garantire la crittografia dei dati a riposo tramite le soluzioni di storage **Cloud Temple**.

### 2.5. Logging e audit

Registrazione automatica degli eventi critici del cluster.

**Responsabilità di **Cloud Temple**:**

- **Cloud Temple** è responsabile della registrazione e dell’audit dell'infrastruttura e dei servizi sottostanti all'offerta.

**Responsabilità dell'utente:**

- Il **Cliente** è responsabile della registrazione e dell’audit dei propri carichi di lavoro.

**Raccomandazione:**

- Configurare pipeline per centralizzare e analizzare i log dei propri carichi di lavoro:
  - Utilizzare dei collector per l'aggregazione dei log, con uno strumento di visualizzazione.
  - Integrare i log nel vostro **SIEM** (raccomandato).

---

## 3. Gestione degli incidenti e PCA (Piano di Continuità Operativa)

**Responsabilità di **Cloud Temple**:**

- **Cloud Temple** è responsabile dei meccanismi di ridondanza all'interno dell'infrastruttura.
- **Cloud Temple** è responsabile dei backup automatici delle configurazioni del cluster.
- **Cloud Temple** è responsabile del ripristino dell’operatività dopo un incidente sull'infrastruttura o sui servizi sottostanti all’offerta.

**Responsabilità dell'utente:**

- Il **Cliente** è responsabile del backup dei dati critici dei propri carichi di lavoro utilizzando soluzioni come l’offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Il **Cliente** deve assicurarsi che i carichi di lavoro utilizzino meccanismi di resilienza e adattare i deployment per implementarli.
- Il **Cliente** è responsabile del proprio PRA/PCA per i carichi di lavoro.

**Procedura "Ripristino dopo disastro"**

- In caso di perdita completa di accesso a un cluster, il **Cliente** deve dichiarare un incidente presso il supporto **Cloud Temple** tramite il modulo supporto della console.
Consultare la [**procedura di richiesta di supporto tecnico**](/console/console_quickstart.md#accès-au-support-technique)

---

## Raccomandazioni generali


1. **Pianificare le risorse**: Garantire una capacità del cluster sufficiente per i carichi di lavoro di picco.  
2. **Validare le configurazioni**: Testare le applicazioni in ambienti di staging prima della distribuzione in produzione.  
3. **Monitorare regolarmente**: Utilizzare gli strumenti integrati per monitorare l’utilizzo delle risorse e rilevare i problemi il prima possibile.  
4. **Rimanere informati**: Seguire la roadmap e le guide per evitare funzionalità obsolete.  
5. **Contattare il supporto**: Per i problemi non risolti, contattare il supporto tramite la [**procedura di richiesta di supporto tecnico**](/console/console_quickstart.md#accès-au-support-technique) o via mail all’indirizzo [**contact**](mailto:contact@cloud-temple.com).  

Per consultare nel dettaglio le responsabilità, si prega di fare riferimento alla nostra [**matrice di responsabilità**](/contractual/paas/raci.md).