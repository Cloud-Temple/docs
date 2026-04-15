---
title: Eseguire il backup delle applicazioni con Veeam Kasten
---

import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Introduzione

Veeam Kasten K10 è una soluzione di backup e ripristino progettata specificamente per gli ambienti Kubernetes. Nel servizio Managed Kubernetes di Cloud Temple, Kasten è integrato per consentire di proteggere le applicazioni, ripristinare i dati quando necessario e garantire la continuità operativa.

Questo tutorial guida attraverso i passaggi di base per eseguire il backup e ripristinare un'applicazione utilizzando Kasten.

## Prerequisiti

Prima di iniziare, assicurarsi di disporre dei seguenti elementi:

- Un cluster Managed Kubernetes attivo.
- L'identificatore del cluster (ad esempio, `ctodev`).
- Un'applicazione distribuita nel cluster di cui si desidera eseguire il backup.

## 1. Accedere al dashboard di Kasten

Il dashboard di Kasten è accessibile tramite un URL sicuro, costruito a partire dall'identificatore del cluster.

1. **Costruire l'URL di accesso**:
    L'URL si basa sul seguente modello: `https://k10.external-secured.<identificatore>.mk.ms-cloud-temple.com/k10/`
    Sostituire `<identificatore>` con l'identificatore del cluster. Ad esempio, se l'identificatore è `ctodev`, l'URL sarà: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.

2. **Accedere all'URL** nel browser.

    :::info Nota sulla sicurezza
    L'accesso a questo URL è limitato agli indirizzi IP pubblici dichiarati. Se non è possibile connettersi, assicurarsi che il proprio indirizzo IP sia autorizzato contattando il supporto Cloud Temple.
    :::

<img src={k10dashboard} />

:::tip Guida introduttiva rapida integrata
La console Kasten include una guida introduttiva rapida interattiva nella sua pagina iniziale. Non esitare a seguirla per una prima esperienza pratica direttamente dall'interfaccia.
:::

## 2. Comprendere l'archiviazione dei backup

Per impostazione predefinita, Kasten è preconfigurato per utilizzare il servizio di archiviazione oggetti (S3) di Cloud Temple per conservare i backup in modo sicuro e duraturo.

Non è necessaria alcuna configurazione. La posizione di archiviazione è già definita nel dashboard di Kasten, in **Settings > Locations**. Questa configurazione garantisce che i dati siano archiviati su un'infrastruttura sovrana.

<img src={k10s3location} />

:::info Modello di costo
Il servizio Veeam Kasten è incluso nell'offerta Managed Kubernetes. L'archiviazione dei backup sul nostro S3 sovrano viene fatturata in base all'utilizzo. Consultare la griglia tariffaria per maggiori dettagli.
:::

## 3. Creare una politica di backup

Una politica di backup (`Policy`) è un insieme di regole che definiscono quando e come eseguire il backup delle applicazioni.

:::warning Politica di backup esistente
Una politica di backup denominata `infra-backups` è già configurata nell'istanza Kasten. Questa politica garantisce il backup dei componenti essenziali forniti con il cluster.

<img src={k10infrabackups} />

**Non modificare né eliminare questa politica.**

È necessario creare le proprie politiche per eseguire il backup delle applicazioni distribuite.
:::

1. Nel dashboard di Kasten, accedere alla sezione **Policies** e fare clic su **Create New Policy**.

2. **Assegnare un nome alla politica**: Fornire un nome descrittivo, ad esempio `backup-my-app-daily`.

3. **Definire la frequenza (Action)**:
    - **Action**: `Snapshot`.
    - **Frequency**: Scegliere la frequenza più adatta (ad esempio, `Daily` alle `02:00`).

4. **Selezionare le risorse di cui eseguire il backup**:
    - **Select resources by**: È possibile selezionare le applicazioni per nome (`Application Name`), per namespace (`Namespace`) o per label.
    - Per eseguire il backup di tutte le applicazioni di un namespace, scegliere `Namespace` e selezionare il namespace desiderato.

5. **Fare clic su `Create Policy`** per salvare.

La politica verrà eseguita automaticamente alla frequenza definita. È anche possibile avviare un'esecuzione manuale facendo clic sul pulsante "Play" (▶️) accanto alla politica.

## 4. Ripristinare un'applicazione

Kasten facilita il ripristino di un'applicazione al suo stato precedente da un punto di ripristino.

1. Nel dashboard, accedere alla sezione **Applications**. Qui è possibile vedere l'elenco delle applicazioni e il loro stato di conformità rispetto alle politiche di backup.

2. **Selezionare l'applicazione** da ripristinare.

3. **Scegliere un punto di ripristino**:
    La pagina dell'applicazione mostra un elenco dei punti di ripristino disponibili. Scegliere quello da utilizzare e fare clic su **Restore**.

4. **Configurare il ripristino**:
    - È possibile scegliere di ripristinare in un nuovo namespace o di sostituire l'applicazione esistente. Per questo tutorial, sostituiremo l'applicazione esistente.
    - Fare clic su **Restore** per avviare il processo.

Kasten ripristinerà ora l'applicazione allo stato acquisito nello snapshot. È possibile seguire l'avanzamento nel dashboard.

## 5. Sicurezza dei backup

La protezione dei dati di backup è una priorità. L'integrazione di Kasten nell'offerta Managed Kubernetes rispetta i più alti standard di sicurezza.

- **Crittografia**: In conformità con i requisiti SecNumCloud, tutti i backup sono crittografati. I dati vengono crittografati in transito verso l'archiviazione S3 con il protocollo **TLS 1.3** e a riposo nei bucket di archiviazione con l'algoritmo **AES-256**.

- **Gestione dei permessi**: L'accesso all'interfaccia Kasten e alle sue funzionalità è controllato da un sistema di permessi basato sul RBAC di Kubernetes. Solo gli utenti autorizzati possono creare, modificare o eseguire politiche di backup e ripristino, garantendo così una governance rigorosa delle operazioni di backup.

## Conclusione

È stato illustrato come utilizzare Veeam Kasten per eseguire operazioni di base di backup e ripristino nel cluster Managed Kubernetes. Kasten offre molte funzionalità avanzate, come la migrazione delle applicazioni tra cluster e politiche di conservazione granulari, che è possibile esplorare per rafforzare la strategia di protezione dei dati.

Per ulteriori informazioni, consultare la [documentazione ufficiale di Kasten K10](https://docs.kasten.io/latest/).
