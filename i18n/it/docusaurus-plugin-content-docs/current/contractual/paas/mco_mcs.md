---
title: MCO/MCS PaaS OpenShift
slug: /contractual/paas/mco-mcs
displayed_sidebar: docSidebar
---


**Politica di Manutenzione in Condizioni Operative (MCO) e di Manutenzione in Condizioni di Sicurezza (MCS) sul PaaS OpenShift SNC **Cloud Temple****

## Premessa

Questa politica dettaglia le responsabilità e le raccomandazioni relative al Mantenimento in Condizioni Operative (MCO) e al Mantenimento in Condizioni di Sicurezza (MCS) dei vostri ambienti sul PaaS OpenShift SNC **Cloud Temple**.

---

## Manutenzione in Condizioni Operative (MCO)

### Gestione e aggiornamento dei cluster

**Responsabilità di **Cloud Temple** :**

- Gestione completa dell'infrastruttura sottostante, inclusi i nodi master, gli aggiornamenti delle versioni OpenShift e la resilienza dei servizi critici distribuiti da **Cloud Temple**.
- Aggiornamenti minori/patch automatici senza interruzione per i carichi di lavoro ospitati, salvo diversa comunicazione.
- Limitazione dei diritti e delle funzionalità ai vincoli SecNumCloud.
- Comunicazione degli aggiornamenti in arrivo e degli aggiornamenti con modifiche incompatibili (breaking changes) per i prossimi tre mesi tramite la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilità dell'utente :**

- Gestione dei carichi di lavoro distribuiti (applicazioni, strumenti CI/CD) e delle relative configurazioni.
- Test degli aggiornamenti dei carichi di lavoro su un ambiente di staging prima del deployment in produzione.
- Verifica della compatibilità dei carichi di lavoro con i componenti del cluster.

**Raccomandazione :**

- Pianificare i deployment applicativi al di fuori delle finestre di manutenzione per evitare conflitti con gli aggiornamenti automatici del cluster.
- Seguire le comunicazioni di **Cloud Temple** relative agli aggiornamenti maggiori per pianificare le eventuali modifiche necessarie.
- Seguire gli aggiornamenti in arrivo tramite la [**Roadmap prodotto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Iscriversi alle notifiche [**di incidenti**](../../console/status.md#gestion-des-notifications)

---

### Supervisione e monitoraggio

**Responsabilità **Cloud Temple** :**

- Supervisione e monitoraggio dell'infrastruttura e dei servizi sottostanti distribuiti da **Cloud Temple**.

**Responsabilità dell'utente :**

- Supervisione e monitoraggio dei propri carichi di lavoro.

**Raccomandazione :**

Utilizzare gli **strumenti nativi forniti :**

- Analisi dei log di prestazioni ed eventi tramite la console OpenShift.
- Configurazione di avvisi personalizzati a partire dalle metriche del cluster e dei pod tramite l'interfaccia utente.  
  
Configurare soglie critiche di allerta :

- **CPU/Memoria** dei pod : ≥ 80 %.
- **Spazio su disco nei volumi persistenti** : ≥ 85 %.
- **Fallimenti di avvio dei pod** : più di X occorrenze in 10 minuti.  
  
Automatizzare l'escalation degli avvisi verso i vostri strumenti di gestione per una risposta rapida.  

---

### Backup e ripristino

I componenti critici del cluster vengono salvati automaticamente da **Cloud Temple**. I carichi di lavoro e i dati degli utenti richiedono una gestione dedicata.

**Responsabilità di **Cloud Temple** :**

- Meccanismi di ridondanza automatica all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente :**

- Eseguire il backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.

**Raccomandazione :**

- Implementare politiche di backup regolari:
  - Backup automatici dei PV con Kasten.
  - Backup giornaliero delle configurazioni Kubernetes, dei secret e dei deployment YAML.
- Testare regolarmente i ripristini per convalidare i RPO.

---

## Manutenzione delle Condizioni di Sicurezza (MCS)

### Gestione dei segreti e delle configurazioni

Utilizzo dei segreti OpenShift/Kubernetes e raccomandazione di integrare sistemi di gestione centralizzata dei segreti.

**Responsabilità **Cloud Temple** :**

- La gestione dei segreti e della configurazione dell'infrastruttura e dei servizi sottostanti all'offerta è di responsabilità di **Cloud Temple**.

**Responsabilità dell'utente :**

- La gestione dei segreti e della configurazione dei carichi di lavoro del **Cliente** è di responsabilità del **Cliente**.
  
**Raccomandazione :**

- Non memorizzare segreti in chiaro nei file YAML.
- Utilizzare strumenti per crittografare le informazioni sensibili.

### Controllo degli accessi (IAM)

La revisione degli accessi avviene tramite la Console e il modulo "User Management" della console OpenShift.

Per ulteriori dettagli su questa funzionalità, fare riferimento alla nostra [**guida**](../../console/iam/iam.md) e alla [**documentazione**](https://docs.redhat.com/en/documentation/openshift_container_platform/) del fornitore.

**Responsabilità **Cloud Temple** :**

- **Cloud Temple** è responsabile della gestione degli account di servizio e di amministrazione.
- **Cloud Temple** è responsabile dell'integrazione con il sistema di identità **Cloud Temple** per gestire gli accessi.
- **Cloud Temple** è responsabile della configurazione predefinita di **RBAC** e delle restrizioni iniziali dei diritti degli utenti.
- **Cloud Temple** è responsabile della fornitura del sistema di **autenticazione a due fattori** e della sua manutenzione per rafforzare gli accessi.
  
**Responsabilità dell'utente :**

- Il **Cliente** deve verificare regolarmente gli accessi dei propri utenti.
- Il **Cliente** è responsabile del conferimento degli accessi ai propri utenti e del loro onboarding nel tenant.
- Il **Cliente** deve gestire i propri utenti nel rispetto dei limiti imposti dal sistema **Cloud Temple**.

### Gestione delle vulnerabilità

Le vulnerabilità relative all'infrastruttura e ai servizi sottostanti all'offerta saranno comunicate nel modulo Incident.

**Responsabilità **Cloud Temple** :**

- **Cloud Temple** è responsabile della comunicazione delle vulnerabilità relative all'infrastruttura e ai servizi sottostanti all'offerta non appena rilevate, tramite il modulo [**incidenti**](../../console/status.md) della Console.
- **Cloud Temple** è responsabile dell'applicazione delle patch su questo perimetro.
- **Cloud Temple** è responsabile della fornitura di strumenti per analizzare le vulnerabilità delle immagini Docker. Per impostazione predefinita, **Cloud Temple** implementa **[Quay]** per eseguire lo scan automatico delle immagini Docker.

**Responsabilità dell'utente :**

- Il **Cliente** è responsabile del rilevamento e della correzione delle vulnerabilità nei propri workload.
- Il **Cliente** è responsabile dell'aggiornamento dei propri workload per consentire l'applicazione delle patch di sicurezza il prima possibile.

**Raccomandazione :**

- Utilizzare l'alerting del cluster fornito da **[Quay]** per analizzare le vulnerabilità e rilevare comportamenti anomali nelle immagini utilizzate dal **Cliente**.
- Iscriversi alle notifiche di [**incidenti**](../../console/status.md#gestion-des-notifications).

### Crittografia

Garanzia di una crittografia nativa sull'infrastruttura **Cloud Temple**, con raccomandazioni per i carichi di lavoro.

**Responsabilità di **Cloud Temple** :**

- Meccanismi di ridondanza all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente :**

- Eseguire il backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Assicurarsi che i carichi di lavoro utilizzino i meccanismi di resilienza e adattare i deployment per implementarli.

**Raccomandazione :**

- Abilitare la **crittografia TLS** per tutte le comunicazioni intra-pod.
- Abilitare la **crittografia TLS** per tutte le comunicazioni tra le Offerte PaaS e IaaS **Cloud Temple**.
- Garantire la crittografia dei dati a riposo tramite le soluzioni di archiviazione **Cloud Temple**.

### Logging e audit

Registrazione automatica degli eventi critici del cluster.

**Responsabilità **Cloud Temple** :**

- **Cloud Temple** è responsabile del logging e dell'audit dell'infrastruttura e dei servizi sottostanti all'offerta.

**Responsabilità dell'utente :**

- Il **Client** è responsabile del logging e dell'audit dei propri carichi di lavoro.
  
**Raccomandazione :**

- Configurare pipeline per centralizzare e analizzare i log dei propri carichi di lavoro :
  - Utilizzare collector, per l'aggregazione dei log, con uno strumento di visualizzazione.
  - Integrare i log nel proprio **SIEM** (raccomandato).

---

## Gestione degli incidenti e PRA (Piano di Continuità d'Attività)

**Responsabilità di **Cloud Temple** :**

- **Cloud Temple** è responsabile dei meccanismi di ridondanza all'interno dell'infrastruttura.
- **Cloud Temple** è responsabile dei backup automatici delle configurazioni del cluster.
- **Cloud Temple** è responsabile della ripresa delle attività dopo un incidente sull'infrastruttura o sui servizi sottostanti all'offerta.

**Responsabilità dell'utente :**

- Il **Cliente** è responsabile del backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Il **Cliente** deve assicurarsi che i carichi di lavoro utilizzino i meccanismi di resilienza e deve adattare i propri deployments per implementarli.
- Il **Cliente** è responsabile del PRA/PCA dei propri carichi di lavoro.

**Procedura "Ripresa dopo un disastro"**

- In caso di perdita completa dell'accesso a un cluster, il **Cliente** deve dichiarare un incidente al supporto **Cloud Temple** tramite il modulo di supporto della console.
Vedi la [**procedura di richiesta di supporto tecnico**](../../console/console_quickstart.md#accès-au-support-technique)

---

## Raccomandazioni generali

1. **Pianificare le risorse** : Garantire una capacità di cluster sufficiente per i carichi di lavoro di picco.
2. **Convalidare le configurazioni** : Testare le applicazioni in ambienti di staging prima del rilascio in produzione.
3. **Monitorare regolarmente** : Utilizzare gli strumenti integrati per monitorare l'utilizzo delle risorse e rilevare i problemi il prima possibile.
4. **Restare aggiornati** : Seguire la roadmap e le guide per evitare funzionalità obsolete.
5. **Contattare il supporto** : Per i problemi non risolti, contattare il supporto tramite la [**procedura di richiesta di supporto tecnico**](../../console/console_quickstart.md#accès-au-support-technique) o via email all'indirizzo [**contact**](mailto:contact@cloud-temple.com).

Per consultare i dettagli sulle responsabilità, si prega di leggere la nostra [**matrice di responsabilità**](../../contractual/paas/raci.md).