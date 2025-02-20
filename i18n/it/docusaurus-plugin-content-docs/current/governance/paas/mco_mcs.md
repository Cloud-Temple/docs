---
title: MCO/MCS
---

**Politica di Mantenimento in Condizioni Operative (MCO) e di Mantenimento in Condizioni di Sicurezza (MCS) sul PaaS OpenShift SNC **Cloud Temple****

## Preludio

Questa politica dettaglia le responsabilità e le raccomandazioni per il Mantenimento in Condizioni Operative (MCO) e il Mantenimento in Condizioni di Sicurezza (MCS) dei vostri ambienti sul PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Mantenimento in Condizioni Operative (MCO)

### 1.1. Gestione e aggiornamento dei cluster

**Responsabilità **Cloud Temple** :**

- Gestione completa dell'infrastruttura sottostante, inclusi i nodi master, gli aggiornamenti delle versioni di OpenShift e la resilienza dei servizi critici distribuiti da **Cloud Temple**.
- Aggiornamenti minori/patch automatici senza interruzioni per i carichi di lavoro ospitati, salvo contraria notifica.
- Limitazione dei diritti e delle funzionalità alle restrizioni SecNumCloud.
- Comunicazione degli aggiornamenti imminenti e degli aggiornamenti di rottura nei prossimi tre mesi tramite la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilità dell'utente :**

- Gestione dei carichi di lavoro distribuiti (applicazioni, strumenti CI/CD) e delle loro configurazioni.
- Test degli aggiornamenti dei carichi di lavoro su un ambiente di staging prima del deployment in produzione.
- Garanzia della compatibilità dei carichi di lavoro con i componenti del cluster.

**Raccomandazione :**

- Pianificare i deploy applicativi al di fuori delle finestre di manutenzione per evitare conflitti con gli aggiornamenti automatici del cluster.
- Seguire le comunicazioni **Cloud Temple** riguardanti gli aggiornamenti maggiori per pianificare gli adeguamenti necessari.
- Seguire gli aggiornamenti imminenti tramite la [**Roadmap prodotto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Iscriversi alle notifiche [**di incidenti**](/console/status.md#gestion-des-notifications)

---

### 1.2. Supervisione e monitoraggio

**Responsabilità **Cloud Temple** :**

- Supervisione e monitoraggio dell'infrastruttura e dei servizi sottostanti distribuiti da **Cloud Temple**.

**Responsabilità dell'utente :**

- Supervisione e monitoraggio dei propri carichi di lavoro.

**Raccomandazione :**

Utilizzare gli **strumenti nativi forniti :**

- Analisi dei log di performance e degli eventi tramite la console OpenShift.
- Configurazione di allarmi personalizzati a partire dalle metriche del cluster e dei pod tramite l'interfaccia utente.  
  
Configurare soglie critiche di avviso :

- **CPU/Memoria** dei pod : ≥ 80 %.
- **Spazio disco sui volumi persistenti** : ≥ 85 %.
- **Fallimenti all’avvio dei pod** : più di X occorrenze in 10 minuti.  
  
Automatizzare l’escalation degli avvisi verso i vostri strumenti di gestione per una reazione rapida.  

---

### 1.3. Backup e ripristino

I componenti critici del cluster sono automaticamente salvati da **Cloud Temple**. I carichi di lavoro e i dati degli utenti necessitano di una gestione dedicata.

**Responsabilità **Cloud Temple** :**

- Meccanismi di ridondanza automatica all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente :**

- Eseguire il backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.

**Raccomandazione :**

- Implementare politiche di backup regolari :
  - Backup automatici dei PV con Kasten.
  - Backup giornaliero delle configurazioni Kubernetes, segreti e deployment YAML.
- Testare regolarmente i ripristini per convalidare i RPO.

---

## 2. Mantenimento in Condizioni di Sicurezza (MCS)

### 2.1. Gestione dei segreti e delle configurazioni

Utilizzo dei segreti OpenShift/Kubernetes e raccomandazione di integrare sistemi di gestione centralizzata dei segreti.

**Responsabilità **Cloud Temple** :**

- La gestione dei segreti e della configurazione dell'infrastruttura e dei servizi sottostanti all'offerta è di responsabilità di **Cloud Temple**.

**Responsabilità dell'utente :**

- La gestione dei segreti e della configurazione dei carichi di lavoro del **Cliente** è di responsabilità del **Cliente**.
  
**Raccomandazione :**

- Non memorizzare segreti in chiaro nei file YAML.
- Utilizzare strumenti per criptare le informazioni sensibili.

### 2.2. Controllo degli accessi (IAM)

La revisione degli accessi avviene tramite la console Shiva e il modulo "User Management" della console OpenShift.

Per ulteriori dettagli su questa funzionalità, fare riferimento alla nostra [**guida**](/console/iam/iam) e alla [**documentazione**](https://docs.redhat.com/en/documentation/openshift_container_platform/) dell'editore.

**Responsabilità **Cloud Temple** :**

- **Cloud Temple** è responsabile della gestione degli account di servizio e amministrazione.
- **Cloud Temple** è responsabile dell'integrazione al sistema di identità **Cloud Temple** per gestire gli accessi.
- **Cloud Temple** è responsabile della configurazione **RBAC** predefinita e delle restrizioni iniziali sui diritti degli utenti.
- **Cloud Temple** è responsabile della fornitura del sistema di **autenticazione a due fattori** e del suo mantenimento per rafforzare gli accessi.
  
**Responsabilità dell'utente :**

- Il **Cliente** deve controllare regolarmente gli accessi dei propri utenti.
- Il **Cliente** è responsabile della concessione degli accessi ai propri utenti e del loro onboarding nel tenant.
- Il **Cliente** deve gestire i propri utenti nel rispetto delle limitazioni imposte dal sistema **Cloud Temple**.

### 2.3. Gestione delle vulnerabilità

Le vulnerabilità sull'infrastruttura e sui servizi sottostanti all'offerta saranno comunicate nel modulo incidenti.

**Responsabilità **Cloud Temple** :**

- **Cloud Temple** è responsabile della comunicazione delle vulnerabilità sull'infrastruttura e sui servizi sottostanti all'offerta non appena rilevate tramite il modulo [**incidenti**](/console/status.md) della console SHIVA.
- **Cloud Temple** è responsabile dell'applicazione delle patch su questo perimetro.
- **Cloud Temple** è responsabile di mettere a disposizione strumenti per analizzare le vulnerabilità delle immagini Docker. Di default, **Cloud Temple** fornisce **[Quay]** per eseguire la scansione automatica delle immagini Docker.

**Responsabilità dell'utente :**

- Il **Cliente** è responsabile della rilevazione e della correzione delle vulnerabilità nei propri carichi di lavoro.
- Il **Cliente** è responsabile dell'aggiornamento dei propri carichi di lavoro per permettere l'applicazione delle patch di sicurezza il più presto possibile.

**Raccomandazione :**

- Utilizzare il sistema di allerta del cluster fornito da **[Quay]** per analizzare le vulnerabilità e rilevare comportamenti anomali nelle immagini utilizzate dal **Cliente**.
- Iscriversi alle notifiche di [**incidenti**](/console/status.md#gestion-des-notifications).

### 2.4. Criptazione

Garanzia di una criptazione nativa sull'infrastruttura **Cloud Temple**, con raccomandazioni per i carichi di lavoro.

**Responsabilità **Cloud Temple** :**

- Meccanismi di ridondanza all'interno dell'infrastruttura.
- Backup automatici delle configurazioni del cluster.

**Responsabilità dell'utente :**

- Eseguire il backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Assicurarsi che i carichi di lavoro utilizzino i meccanismi di resilienza e adattare i deploy per implementarli.

**Raccomandazione :**

- Abilitare la **criptazione TLS** per tutte le comunicazioni intra-pod.
- Abilitare la **criptazione TLS** per tutte le comunicazioni tra le Offerte PaaS e IaaS **Cloud Temple**.
- Assicurare la criptazione dei dati a riposo tramite le soluzioni di storage **Cloud Temple**.

### 2.5. Logging e audit

Registrazione automatica degli eventi critici del cluster.

**Responsabilità **Cloud Temple** :**

- **Cloud Temple** è responsabile del logging e dell'audit dell'infrastruttura e dei servizi sottostanti all'offerta.

**Responsabilità dell'utente :**

- Il **Cliente** è responsabile del logging e dell'audit dei propri carichi di lavoro.
  
**Raccomandazione :**

- Configurare pipeline per centralizzare e analizzare i log dei carichi di lavoro :
  - Utilizzare collettori per l'aggregazione dei log, con uno strumento di visualizzazione.
  - Integrare i log nel proprio **SIEM** (consigliato).

---

## 3. Gestione degli incidenti e PCA (Piano di Continuità dell’Attività)

**Responsabilità **Cloud Temple** :**

- **Cloud Temple** è responsabile dei meccanismi di ridondanza all'interno dell'infrastruttura.
- **Cloud Temple** è responsabile dei backup automatici delle configurazioni del cluster.
- **Cloud Temple** è responsabile del ripristino dell'attività dopo un incidente sull'infrastruttura o sui servizi sottostanti all'offerta.

**Responsabilità dell'utente :**

- Il **Cliente** è responsabile di eseguire il backup dei dati critici dei carichi di lavoro utilizzando soluzioni come l'offerta **Kasten** disponibile nel catalogo **Cloud Temple**.
- Il **Cliente** deve assicurarsi che i carichi di lavoro utilizzino i meccanismi di resilienza e deve adattare i propri deploy per implementarli.
- Il **Cliente** è responsabile del DRP/PCA dei propri carichi di lavoro.

**Procedura "Recupero dopo disastro"**

- In caso di perdita totale di accesso a un cluster, il **Cliente** deve dichiarare un incidente presso il supporto **Cloud Temple** tramite il modulo supporto della console.
Vedere la [**procedura di richiesta di supporto tecnico**](/console/console_quickstart.md#accès-au-support-technique)

---

## Raccomandazioni generali


1. **Pianificare le risorse**: Assicurare una capacità di cluster sufficiente per i carichi di lavoro di picco.
2. **Validare le configurazioni**: Testare le applicazioni in ambienti di staging prima del deployment in produzione.
3. **Monitoraggio regolare**: Utilizzare gli strumenti integrati per seguire l'uso delle risorse e rilevare i problemi il prima possibile.
4. **Mantenersi informati**: Seguire la roadmap e le guide per evitare le funzionalità obsolete.
5. **Contattare il supporto**: Per i problemi irrisolti, contattare il supporto tramite la [**procedura di richiesta di supporto tecnico**](/console/console_quickstart.md#accès-au-support-technique) o via email all'indirizzo [**contact**](mailto:contact@cloud-temple.com).

Per ulteriori dettagli sulle responsabilità, si prega di consultare la nostra [**matrice di responsabilità**](/governance/paas/raci.md).