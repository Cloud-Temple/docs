---
title: Effettuare il backup delle vostre applicazioni con Veeam Kasten
---


import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Introduzione

Veeam Kasten K10 è una soluzione di backup e ripristino progettata specificamente per gli ambienti Kubernetes. Nel prodotto Managed Kubernetes di Cloud Temple, Kasten è integrato per consentirvi di proteggere le vostre applicazioni, ripristinare i dati in caso di necessità e garantire la continuità operativa.

Questo tutorial vi guiderà attraverso i passaggi di base per eseguire il backup e il ripristino di un'applicazione utilizzando Kasten.

## Prerequisiti

Prima di iniziare, assicurati di disporre dei seguenti elementi:

- Un cluster Managed Kubernetes attivo.
- L'identificativo del tuo cluster (ad esempio, `ctodev`).
- Un'applicazione distribuita nel tuo cluster che desideri eseguire il backup.

## 1. Accedere alla dashboard Kasten

La dashboard Kasten è accessibile tramite un URL sicuro, costruito a partire dall'identificativo del cluster.

1. **Costruire l'URL di accesso** :
   L'URL si basa sul seguente modello: `https://k10.external-secured.<identificativo>.mk.ms-cloud-temple.com/k10/`
   Sostituisci `<identificativo>` con l'identificativo del tuo cluster. Ad esempio, se il tuo identificativo è `ctodev`, l'URL sarà: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.
2. **Accedi all'URL** nel tuo browser.

   > ℹ️Nota sulla sicurezza
   > L'accesso a questo URL è limitato agli indirizzi IP pubblici che hai dichiarato. Se non riesci ad accedere, assicurati che il tuo indirizzo IP sia autorizzato contattando il supporto Cloud Temple.
   >

<img src={k10dashboard} />

> ℹ️[Guida di avvio rapido integrata] La console Kasten include una guida di avvio rapido interattiva nella sua homepage. Non esitare a seguirla per un primo approccio direttamente dall'interfaccia.

## 2. Comprendere lo storage dei backup

Per impostazione predefinita, Kasten è preconfigurato per utilizzare il servizio di object storage (S3) di Cloud Temple per archiviare i backup in modo sicuro e duraturo.

Non è necessaria alcuna configurazione da parte vostra. La posizione di storage è già definita nella dashboard di Kasten, sotto **Settings > Locations**. Questa configurazione garantisce che i vostri dati siano archiviati su un'infrastruttura sovrana.

<img src={k10s3location} />

> ℹ️[Modèle de coût] Il servizio Veeam Kasten è incluso nel prodotto Managed Kubernetes. Lo storage dei backup sul nostro S3 sovrano è fatturato in base all'utilizzo. Consultate la nostra griglia tariffaria per ulteriori dettagli.

## 3. Creare una policy di backup

Una policy di backup (`Policy`) è un insieme di regole che definiscono quando e come eseguire il backup delle vostre applicazioni.

⚠[Policy di backup esistente] Una policy di backup denominata `infra-backups` è già configurata nella vostra istanza Kasten. Questa policy garantisce il backup dei componenti essenziali forniti con il cluster.

<img src={k10infrabackups} />

**Non modificare e non eliminare questa policy.**

È necessario creare le proprie policy per eseguire il backup delle applicazioni che si distribuiscono.

1. Nella dashboard di Kasten, accedete alla sezione **Policies** e fate clic su **Create New Policy**.
2. **Dare un nome alla policy** : Assegnare un nome descrittivo, ad esempio `backup-my-app-daily`.
3. **Definire la frequenza (Action)** :

   - **Action**: `Snapshot` (istantanea).
   - **Frequency**: Scegliere la frequenza più adatta (ad esempio, `Daily` alle `02:00`).
4. **Selezionare le risorse da backup** :

   - **Select resources by**: È possibile selezionare le applicazioni per nome (`Application Name`), per namespace (`Namespace`) o per etichette.
   - Per eseguire il backup di tutte le applicazioni di un namespace, scegliere `Namespace` e selezionare il namespace desiderato.
5. **Fare clic su `Create Policy`** per salvare.

La policy verrà eseguita automaticamente alla frequenza definita. È inoltre possibile avviare un'esecuzione manuale facendo clic sul pulsante "Play" (▶️) accanto alla policy.

### Politiche di backup rapide

Per facilitare l'adozione di Kasten, Cloud-Temple ha fornito *24 politiche di backup*, che eseguono un backup a orario fisso, con una ritenzione di 7 giorni su S3.

![K10policies](images/k10policies.png)

Queste politiche si applicano ai **namespace che dispongono di un label che indica quale/i politica/e applicare.**

Ad esempio, un namespace con il label **kasten-daily05-r7d = true** verrà salvato su S3 ogni giorno alle 05:00 UTC, con una ritenzione di 7 giorni.

## 4. Ripristinare un'applicazione

Kasten semplifica il ripristino di un'applicazione al suo stato precedente a partire da un punto di ripristino.

1. Nella dashboard, vai alla sezione **Applications**. Qui vedrai l'elenco delle tue applicazioni e il loro stato di conformità rispetto alle politiche di backup.
2. **Seleziona l'applicazione** che desideri ripristinare.
3. **Scegli un punto di ripristino** :
   La pagina dell'applicazione mostra un elenco dei punti di ripristino disponibili. Scegli quello che desideri utilizzare e fai clic su **Restore**.
4. **Configura il ripristino** :

   - Puoi scegliere di ripristinare in un nuovo namespace o di sostituire l'applicazione esistente. Per questo tutorial, sostituiremo l'applicazione esistente.
   - Fai clic su **Restore** per avviare il processo.

Kasten ripristinerà ora l'applicazione allo stato catturato nello snapshot. Puoi monitorare l'avanzamento nella dashboard.

## 5. Sicurezza dei backup

La protezione dei vostri dati di backup è una priorità. L'integrazione di Kasten nel prodotto Managed Kubernetes rispetta i più elevati standard di sicurezza.

- **Crittografia** : In conformità con i requisiti SecNumCloud, tutti i vostri backup sono crittografati. I dati sono crittografati in transito verso lo storage S3 con il protocollo **TLS 1.3** e a riposo nei bucket di archiviazione con l'algoritmo **AES-256**.
- **Gestione delle autorizzazioni** : L'accesso all'interfaccia Kasten e alle sue funzionalità è controllato da un sistema di autorizzazioni basato sul RBAC di Kubernetes. Solo gli utenti autorizzati possono creare, modificare o eseguire politiche di backup e ripristino, garantendo così una rigorosa governance delle vostre operazioni di backup.

## Conclusione

Hai imparato a utilizzare Veeam Kasten per eseguire operazioni di base di backup e ripristino nel tuo cluster Managed Kubernetes. Kasten offre numerose funzionalità avanzate, come la migrazione delle applicazioni tra cluster e politiche di retention granulari, che puoi esplorare per rafforzare la tua strategia di protezione dei dati.

Per ulteriori informazioni, consulta la [documentazione ufficiale di Kasten K10](https://docs.kasten.io/latest/).