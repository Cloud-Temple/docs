---
title: MCO/MCS
---

**Politica di Mantenimento in Condizioni Operative (MCO) e di Mantenimento in Condizioni di Sicurezza (MCS) sul PaaS OpenShift SNC **Cloud Temple** **

## Premessa

Questa politica descrive le responsabilità e le raccomandazioni per il Mantenimento in Condizioni Operative (MCO) e il Mantenimento in Condizioni di Sicurezza (MCS) dei vostri ambienti sul PaaS OpenShift SNC **Cloud Temple**.

## 1. Manutenzione in Condizioni Operative (MCO)

### 1.1. Gestione e aggiornamento dei cluster

**Responsabilità di Cloud Temple:**

- Gestione completa dell'infrastruttura sottostante, inclusi i nodi master, gli aggiornamenti delle versioni OpenShift e la resilienza dei servizi critici distribuiti da **Cloud Temple**.
- Aggiornamenti automatici minori/puntuali senza interruzioni per i carichi di lavoro ospitati, salvo notifica contraria.
- Limitazione dei diritti e delle funzionalità alle restrizioni SecNumCloud.
- Comunicazione degli aggiornamenti futuri e delle rotture previste nei prossimi tre mesi tramite la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilità dell'utente:**

- Gestione dei carichi di lavoro distribuiti (applicazioni, strumenti CI/CD) e delle loro configurazioni.
- Test degli aggiornamenti dei carichi di lavoro in un ambiente di staging prima del deployment in produzione.
- Garanzia della compatibilità dei carichi di lavoro con i componenti del cluster.

**Raccomandazione:**

- Pianificare i deployment applicativi al di fuori delle finestre di manutenzione per evitare conflitti con gli aggiornamenti automatici del cluster.
- Seguire le comunicazioni **Cloud Temple** riguardo agli aggiornamenti principali per pianificare gli adattamenti necessari.
- Seguire gli aggiornamenti futuri tramite la [**Roadmap prodotto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Iscriversi alle notifiche [**di incidenti**](/console/status.md#gestione-delle-notifiche)

### 1.2. Monitoraggio e supervisione

**Responsabilità di Cloud Temple:**

- Monitoraggio e supervisione dell'infrastruttura e dei servizi sottostanti distribuiti da **Cloud Temple**.

**Responsabilità dell'utente:**

- Monitoraggio delle proprie carichi di lavoro.

**Raccomandazione:**

Utilizzare gli **strumenti nativi forniti:**

- Analisi dei log di prestazione e degli eventi tramite la console OpenShift.
- Configurazione di alert personalizzate a partire dalle metriche del cluster e dei pod tramite l'interfaccia utente.  
  
Configurare i limiti critici per le alert:

- **CPU/Memoria** dei pod : ≥ 80 %.
- **Spazio su volumi persistenti** : ≥ 85 %.
- **Fallimenti nel lancio dei pod** : più di X occorrenze in 10 minuti.  
  
Automatizzare l'escalation delle alert verso i propri strumenti di gestione per una risposta rapida.  

---

### 1.3. Backup e ripristino

I componenti critici del cluster vengono salvati automaticamente da **Cloud Temple**. I carichi di lavoro e i dati degli utenti richiedono una gestione dedicata.

**Responsabilità di **Cloud Temple** :**

- Meccanismi di ridondanza automatica all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente:**

- Eseguire backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.

**Raccomandazione:**

- Implementare politiche di backup regolari:
  - Backup automatici dei PV con Kasten.
  - Backup giornalieri delle configurazioni Kubernetes, dei segreti e dei deployment YAML.
- Testare regolarmente i ripristini per validare i RPO.

## 2. Mantenimento in Condizioni di Sicurezza (MCS)

### 2.1. Gestione dei segreti e delle configurazioni

Utilizzo dei segreti di OpenShift/Kubernetes e raccomandazione di integrare sistemi centralizzati di gestione dei segreti.

**Responsabilità di Cloud Temple:**

- La gestione dei segreti e delle configurazioni dell'infrastruttura e dei servizi sottostanti all'offerta è responsabilità di **Cloud Temple**.

**Responsabilità dell'utente:**

- La gestione dei segreti e delle configurazioni dei carichi di lavoro del **Cliente** è responsabilità del **Cliente**.
  
**Raccomandazione:**

- Non memorizzare segreti in chiaro nei file YAML.
- Utilizzare strumenti per crittografare le informazioni sensibili.

### 2.2. Controllo degli accessi (IAM)

La revisione degli accessi viene effettuata tramite la console Shiva e il modulo "User Management" della console OpenShift.

Per ulteriori dettagli su questa funzionalità, fare riferimento al nostro [**guida**](../../console/iam/iam.md) e alla [**documentazione**](https://docs.redhat.com/en/documentation/openshift_container_platform/) dell'editore.

**Responsabilità di Cloud Temple:**

- **Cloud Temple** è responsabile della gestione dei conti di servizio e di amministrazione.
- **Cloud Temple** è responsabile dell'integrazione con il sistema di identità **Cloud Temple** per gestire gli accessi.
- **Cloud Temple** è responsabile della configurazione predefinita di **RBAC** e delle restrizioni dei diritti degli utenti iniziali.
- **Cloud Temple** è responsabile della fornitura del sistema di **autenticazione a due fattori** e del suo mantenimento per rafforzare gli accessi.

**Responsabilità del cliente:**

- Il **Cliente** deve controllare regolarmente gli accessi dei propri utenti.
- Il **Cliente** è responsabile dell'erogazione degli accessi ai propri utenti e del loro onboarding nel tenant.
- Il **Cliente** deve gestire i propri utenti nel rispetto delle limitazioni imposte dal sistema **Cloud Temple**.

### 2.3. Gestione delle vulnerabilità

Le vulnerabilità nell'infrastruttura e nei servizi sottostanti all'offerta saranno comunicate nel modulo incidente.

**Responsabilità di Cloud Temple:**

- **Cloud Temple** è responsabile della comunicazione delle vulnerabilità nell'infrastruttura e nei servizi sottostanti all'offerta immediatamente dopo la loro rilevazione tramite il modulo [**incidente**](/console/status.md) della console SHIVA.
- **Cloud Temple** è responsabile dell'applicazione dei correttivi in questo ambito.
- **Cloud Temple** è responsabile della messa a disposizione di strumenti per analizzare le vulnerabilità delle immagini Docker. Per impostazione predefinita, **Cloud Temple** implementa **[Quay]** per eseguire lo scanning automatico delle immagini Docker.

**Responsabilità dell'utente:**

- **Il Cliente** è responsabile del rilevamento e della correzione delle vulnerabilità nelle proprie workloads.
- **Il Cliente** è responsabile dell'aggiornamento delle proprie workloads per permettere l'applicazione dei patch di sicurezza il più rapidamente possibile.

**Raccomandazione:**

- Utilizzare l'alerting del cluster fornito da **[Quay]** per analizzare le vulnerabilità e rilevare comportamenti anomali nelle immagini utilizzate dal **Cliente**.
- Iscriversi alle notifiche degli [**incidenti**](/console/status.md#gestione-delle-notifiche).

### 2.4. Crittografia

Garanzia di un crittografia nativa sull'infrastruttura **Cloud Temple**, con raccomandazioni per i carichi di lavoro.

**Responsabilità di **Cloud Temple** :**

- Meccanismi di ridondanza all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente :**

- Eseguire backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Verificare che i carichi di lavoro utilizzino i meccanismi di resilienza e adattare i deployment per attuarli.

**Raccomandazione :**

- Abilitare la **crittografia TLS** per tutte le comunicazioni intra-pod.
- Abilitare la **crittografia TLS** per tutte le comunicazioni tra le Offerte PaaS e IaaS **Cloud Temple**.
- Assicurare la crittografia dei dati a riposo tramite le soluzioni di storage **Cloud Temple**.

### 2.5. Registrazione e audit

Registrazione automatica degli eventi critici del cluster.

**Responsabilità di Cloud Temple:**

- **Cloud Temple** è responsabile della registrazione e dell'audit dell'infrastruttura e dei servizi sottostanti all'offerta.

**Responsabilità dell'utente:**

- Il **Cliente** è responsabile della registrazione e dell'audit dei propri carichi di lavoro.
  
**Raccomandazione:**

- Configurare pipeline per centralizzare e analizzare i log dei propri carichi di lavoro:
  - Utilizzare collettori per l'aggregazione dei log, con un strumento di visualizzazione.
  - Integrare i log nel proprio **SIEM** (consigliato).

## 3. Gestione degli incidenti e PCA (Piano di Continuità dell'Attività)

**Responsabilità di Cloud Temple:**

- **Cloud Temple** è responsabile dei meccanismi di ridondanza all'interno dell'infrastruttura.
- **Cloud Temple** è responsabile delle copie di backup automatiche delle configurazioni del cluster.
- **Cloud Temple** è responsabile del ripristino dell'attività in caso di incidente sull'infrastruttura o sui servizi sottostanti all'offerta.

**Responsabilità dell'utente:**

- Il **Cliente** è responsabile del backup dei dati critici delle workload utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Il **Cliente** deve verificare che le workload utilizzino i meccanismi di resilienza e adattare i propri deployment per attuarli.
- Il **Cliente** è responsabile del PRA/PCA delle proprie workload.

**Procedura "Ripristino dopo un disastro"**

- In caso di perdita completa dell'accesso a un cluster, il **Cliente** deve segnalare un incidente al supporto **Cloud Temple** tramite il modulo supporto della console.
Vedere la [**procedura per richiedere supporto tecnico**](/console/console_quickstart.md#accesso-al-supporto-tecnico)

## Raccomandazioni generali

1. **Pianificare le risorse** : Assicurare una capacità del cluster sufficiente per i carichi di lavoro di picco.
2. **Convalidare le configurazioni** : Testare le applicazioni in ambienti di staging prima del deployment in produzione.
3. **Monitorare regolarmente** : Utilizzare gli strumenti integrati per seguire l'utilizzo delle risorse e rilevare i problemi il più presto possibile.
4. **Stare aggiornati** : Seguire la roadmap e le guide per evitare funzionalità obsoleti.
5. **Contattare il supporto** : Per i problemi non risolti, contattare il supporto tramite la [**procedura di richiesta di supporto tecnico**](/console/console_quickstart.md#accesso-al-supporto-tecnico) o via e-mail all'indirizzo [**contact**](mailto:contact@cloud-temple.com).

Per conoscere in dettaglio le responsabilità, consultare la nostra [**matrice di responsabilità**](/contractual/paas/raci.md).