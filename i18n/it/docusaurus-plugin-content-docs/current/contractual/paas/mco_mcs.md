---
title: MCO/MCS
---

**Politica di Mantenimento in Condizioni Operative (MCO) e di Mantenimento in Condizioni di Sicurezza (MCS) sul PaaS OpenShift SNC **Cloud Temple****

## Premessa

Questa politica dettaglia le responsabilità e le raccomandazioni relative al Mantenimento in Condizioni Operative (MCO) e al Mantenimento in Condizioni di Sicurezza (MCS) dei vostri ambienti sul PaaS OpenShift SNC **Cloud Temple**.

## Maintenance in Operational Conditions (MCO)

### Gestione e aggiornamento dei cluster

**Responsabilità di Cloud Temple:**

- Gestione completa dell'infrastruttura sottostante, inclusi i nodi master, gli aggiornamenti delle versioni OpenShift e la resilienza dei servizi critici distribuiti da **Cloud Temple**.
- Aggiornamenti minori/patch automatici senza interruzioni per i carichi di lavoro ospitati, salvo comunicazione contraria.
- Limitazione dei diritti e delle funzionalità secondo i vincoli SecNumCloud.
- Comunicazione degli aggiornamenti imminenti e delle rotture previste nei prossimi tre mesi tramite la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilità dell'utente:**

- Gestione dei carichi di lavoro distribuiti (applicazioni, strumenti CI/CD) e delle relative configurazioni.
- Test degli aggiornamenti dei carichi di lavoro su un ambiente di staging prima del rilascio in produzione.
- Garanzia della compatibilità dei carichi di lavoro con i componenti del cluster.

**Raccomandazione:**

- Pianificare i rilasci applicativi al di fuori delle finestre di manutenzione per evitare conflitti con gli aggiornamenti automatici del cluster.
- Seguire le comunicazioni **Cloud Temple** relative agli aggiornamenti principali per pianificare gli adeguamenti necessari.
- Monitorare gli aggiornamenti imminenti tramite la [**Roadmap prodotto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Iscriversi alle notifiche [**incidenti**](../../console/status.md#gestione-delle-notifiche)

### Monitoraggio e supervisione

**Responsabilità di Cloud Temple:**

- Monitoraggio e supervisione dell'infrastruttura e dei servizi sottostanti distribuiti da **Cloud Temple**.

**Responsabilità dell'utente:**

- Monitoraggio e supervisione delle proprie carichi di lavoro.

**Raccomandazione:**

Utilizzare gli **strumenti nativi forniti:**

- Analisi dei log di prestazioni e degli eventi tramite la console OpenShift.
- Configurazione di avvisi personalizzati basati sulle metriche del cluster e dei pod tramite l'interfaccia utente.

Impostare soglie critiche per gli avvisi:

- **CPU/Memoria** dei pod: ≥ 80 %.
- **Spazio disco sui volumi persistenti**: ≥ 85 %.
- **Errori di avvio dei pod**: più di X occorrenze in 10 minuti.

Automatizzare l'escalation degli avvisi verso i propri strumenti di gestione per una risposta rapida.

### Backup e ripristino

I componenti critici del cluster vengono salvati automaticamente da **Cloud Temple**. Le workload e i dati degli utenti richiedono una gestione dedicata.

**Responsabilità di **Cloud Temple** :**

- Meccanismi di ridondanza automatica all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente :**

- Eseguire il backup dei dati critici delle workload utilizzando soluzioni come l'offerta **Kasten**, disponibile nel catalogo **Cloud Temple**.

**Raccomandazione :**

- Implementare politiche di backup regolari:
  - Backup automatici dei PV con Kasten.
  - Backup giornaliero delle configurazioni Kubernetes, dei segreti e dei deployment YAML.
- Testare regolarmente i processi di ripristino per validare i RPO.

## Maintenance in Safety Conditions (MCS)

### Gestione dei segreti e delle configurazioni

Utilizzo dei segreti OpenShift/Kubernetes e raccomandazione di integrare sistemi centralizzati di gestione dei segreti.

**Responsabilità di Cloud Temple:**

- La gestione dei segreti e delle configurazioni dell'infrastruttura e dei servizi sottostanti all'offerta è di competenza di **Cloud Temple**.

**Responsabilità dell'utente:**

- La gestione dei segreti e delle configurazioni dei carichi di lavoro del **Cliente** è di competenza del **Cliente**.

**Raccomandazione:**

- Non memorizzare i segreti in testo chiaro nei file YAML.
- Utilizzare strumenti per crittografare le informazioni sensibili.

### Gestione degli accessi (IAM)

La revisione degli accessi viene effettuata tramite la Console e il modulo "User Management" della console OpenShift.

Per ulteriori dettagli su questa funzionalità, fare riferimento al nostro [**guida**](../../console/iam/iam.md) e alla [**documentazione**](https://docs.redhat.com/en/documentation/openshift_container_platform/) dell'editore.

**Responsabilità di Cloud Temple:**

- **Cloud Temple** è responsabile della gestione dei conti di servizio e di amministrazione.
- **Cloud Temple** è responsabile dell'integrazione con il sistema di identità **Cloud Temple** per la gestione degli accessi.
- **Cloud Temple** è responsabile della configurazione predefinita di **RBAC** e delle restrizioni sui diritti degli utenti iniziali.
- **Cloud Temple** è responsabile della fornitura e del mantenimento del sistema di **autenticazione a due fattori** per rafforzare gli accessi.

**Responsabilità dell'utente:**

- Il **Cliente** deve controllare regolarmente gli accessi dei propri utenti.
- Il **Cliente** è responsabile dell'assegnazione degli accessi ai propri utenti e del loro onboarding nel tenant.
- Il **Cliente** deve gestire i propri utenti nel rispetto delle limitazioni imposte dal sistema **Cloud Temple**.

### Gestione delle vulnerabilità

Le vulnerabilità relative all'infrastruttura e ai servizi sottostanti all'offerta verranno comunicate nel modulo incidente.

**Responsabilità di Cloud Temple:**

- **Cloud Temple** è responsabile della comunicazione delle vulnerabilità relative all'infrastruttura e ai servizi sottostanti all'offerta, a partire dalla loro rilevazione tramite il modulo [**incidente**](../../console/status.md) della Console.
- **Cloud Temple** è responsabile dell'applicazione dei patch su questo ambito.
- **Cloud Temple** è responsabile della messa a disposizione di strumenti per analizzare le vulnerabilità delle immagini Docker. Per impostazione predefinita, **Cloud Temple** implementa **[Quay]** per eseguire lo scanning automatico delle immagini Docker.

**Responsabilità dell'utente:**

- Il **Cliente** è responsabile della rilevazione e correzione delle vulnerabilità presenti nei propri carichi di lavoro.
- Il **Cliente** è responsabile del aggiornamento dei propri carichi di lavoro per consentire l'applicazione dei patch di sicurezza nel minor tempo possibile.

**Raccomandazione:**

- Utilizzare l'alerting del cluster fornito da **[Quay]** per analizzare le vulnerabilità e rilevare comportamenti anomali nelle immagini utilizzate dal **Cliente**.
- Iscriversi alle notifiche di [**incidenti**](../../console/status.md#gestione-delle-notifiche).

### Encryption

Guarantee of native encryption on the **Cloud Temple** infrastructure, with recommendations for workloads.

**Cloud Temple Responsibility:**

- Redundancy mechanisms within the infrastructure.
- Automatic backups of cluster configurations.

**User Responsibility:**

- Back up critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.
- Ensure workloads use resilience mechanisms and adapt deployments to implement them.

**Recommendation:**

- Enable **TLS encryption** for all intra-pod communications.
- Enable **TLS encryption** for all communications between **Cloud Temple** PaaS and IaaS offerings.
- Ensure data-at-rest encryption via **Cloud Temple** storage solutions.

### Logging and Auditing

Automatic recording of critical cluster events.

**Responsibility **Cloud Temple** :**

- **Cloud Temple** is responsible for logging and auditing the infrastructure and underlying services supporting the offering.

**User Responsibility:**

- The **Customer** is responsible for logging and auditing their workloads.

**Recommendation:**

- Set up pipelines to centralize and analyze your workload logs:
  - Use log collectors for aggregation, combined with a visualization tool.
  - Integrate logs with your **SIEM** (recommended).

## Gestione degli incidenti e PIANO DI CONTINUITÀ DELLE OPERAZIONI (PCA)

**Responsabilità di Cloud Temple:**

- **Cloud Temple** è responsabile dei meccanismi di ridondanza all'interno dell'infrastruttura.
- **Cloud Temple** è responsabile dei backup automatici delle configurazioni del cluster.
- **Cloud Temple** è responsabile del ripristino delle attività dopo un incidente riguardante l'infrastruttura o i servizi sottostanti all'offerta.

**Responsabilità dell'utente:**

- Il **Cliente** è responsabile del backup dei dati critici delle carichi di lavoro utilizzando soluzioni come l'offerta **Kasten**, disponibile nel catalogo **Cloud Temple**.
- Il **Cliente** deve assicurarsi che le carichi di lavoro utilizzino i meccanismi di resilienza e adattare i propri deployment per implementarli.
- Il **Cliente** è responsabile del PRA/PCA delle proprie carichi di lavoro.

**Procedura "Ripristino dopo evento catastrofico"**

- In caso di perdita completa dell'accesso a un cluster, il **Cliente** deve segnalare un incidente al supporto **Cloud Temple** tramite il modulo di supporto della console.  
Vedere la [**procedura per la richiesta di supporto tecnico**](../../console/console_quickstart.md#accesso-al-supporto-tecnico)

## Raccomandazioni generali

1. **Pianificare le risorse**: garantire una capacità del cluster sufficiente per i carichi di lavoro di picco.
2. **Convalidare le configurazioni**: testare le applicazioni in ambienti di staging prima del rilascio in produzione.
3. **Monitorare regolarmente**: utilizzare gli strumenti integrati per seguire l'uso delle risorse e rilevare i problemi il prima possibile.
4. **Stare aggiornati**: seguire la roadmap e le guide per evitare funzionalità obsoleti.
5. **Contattare il supporto**: per i problemi non risolti, contattare il supporto tramite la [**procedura di richiesta di supporto tecnico**](../../console/console_quickstart.md#accesso-al-supporto-tecnico) o via email all'indirizzo [**contact**](mailto:contact@cloud-temple.com).

Per ulteriori dettagli sulle responsabilità, si prega di consultare la nostra [**matrice di responsabilità**](../../contractual/paas/raci.md).