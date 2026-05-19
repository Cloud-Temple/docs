---
title: Backup delle tue applicazioni con Veeam Kasten
---

import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Introduzione

Veeam Kasten K10 è una soluzione di backup e ripristino progettata specificamente per gli ambienti Kubernetes. Nel prodotto Managed Kubernetes di Cloud Temple, Kasten è integrato per consentirti di proteggere le tue applicazioni, ripristinare i dati quando necessario e garantire la continuità operativa.

Questo tutorial ti guiderà attraverso i passaggi di base per eseguire il backup e il ripristino di un'applicazione utilizzando Kasten.

## Prerequisiti

Prima di iniziare, assicurati di disporre dei seguenti elementi:

- Un cluster Managed Kubernetes attivo.
- L'ID del tuo cluster (ad esempio, `ctodev`).
- Un'applicazione distribuita nel tuo cluster che desideri salvare.

## 1. Accedere alla dashboard di Kasten

La dashboard di Kasten è accessibile tramite un URL sicuro, costruito a partire dall'identificativo del proprio cluster.

1. **Comporre l'URL di accesso** :
    L'URL si basa sul modello seguente: `https://k10.external-secured.<identifiant>.mk.ms-cloud-temple.com/k10/`
    Sostituire `<identifiant>` con l'identificativo del proprio cluster. Ad esempio, se l'identificativo è `ctodev`, l'URL sarà: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.

2. **Accedere all'URL** nel browser.

    :::info Nota sulla sicurezza
    L'accesso a questo URL è limitato agli indirizzi IP pubblici dichiarati. Se non si riesce ad accedere, assicurarsi che il proprio indirizzo IP sia autorizzato contattando il supporto di Cloud Temple.
    :::

<img src={k10dashboard} />

:::tip[Guide de démarrage rapide intégré
]
La console Kasten include una guida rapida interattiva nella propria pagina iniziale. Si consiglia di seguirla per un primo utilizzo direttamente dall'interfaccia.
:::

## 2. Comprendere lo storage dei backup

Per impostazione predefinita, Kasten è preconfigurato per utilizzare il servizio di storage oggetto (S3) di Cloud Temple per archiviare i tuoi backup in modo sicuro e persistente.

Non è necessaria alcuna configurazione. Il percorso di storage è già impostato nella dashboard di Kasten, sotto **Settings > Locations**. Questa configurazione garantisce che i tuoi dati vengano archiviati su un'infrastruttura sovrana.

<img src={k10s3location} />

:::info[Modello di costo
]
Il servizio Veeam Kasten è incluso nel prodotto Managed Kubernetes. Lo storage dei backup sul nostro S3 sovrano è fatturato a consumo. Consulta la nostra griglia tariffaria per maggiori dettagli.
:::

## 3. Creare una politica di backup

Una politica di backup (`Policy`) è un insieme di regole che definiscono quando e come eseguire il backup delle tue applicazioni.

:::warning[Politica di backup esistente
]
Una politica di backup denominata `infra-backups` è già configurata nella tua istanza Kasten. Questa politica garantisce il backup dei componenti essenziali forniti con il cluster.

<img src={k10infrabackups} />

**Non modificare e non eliminare questa politica.**

Devi creare le tue politiche per eseguire il backup delle applicazioni che distribuisci.
:::

1. Nella dashboard di Kasten, accedi alla sezione **Policies** e fai clic su **Create New Policy**.

2. **Assegna un nome alla tua politica** : Assegna un nome descrittivo, ad esempio `backup-my-app-daily`.

3. **Definisci la frequenza (Action)** :
    - **Action**: `Snapshot` (istantaneo).
    - **Frequency**: Scegli la frequenza desiderata (ad esempio, `Daily` alle `02:00`).

4. **Seleziona le risorse da salvare** :
    - **Select resources by**: Puoi selezionare le applicazioni per nome (`Application Name`), per namespace (`Namespace`) o per etichette.
    - Per salvare tutte le applicazioni di un namespace, scegli `Namespace` e seleziona il namespace desiderato.

5. **Fai clic su `Create Policy`** per salvare.

La politica verrà eseguita automaticamente alla frequenza impostata. Puoi anche avviare un'esecuzione manuale facendo clic sul pulsante "Play" (▶️) accanto alla politica.

## 4. Ripristinare un'applicazione

Kasten facilita il ripristino di un'applicazione al suo stato precedente a partire da un punto di ripristino.

1. Nella dashboard, vai alla sezione **Applicazioni**. Vedrai l'elenco delle tue applicazioni e il loro stato di conformità rispetto alle policy di backup.

2. **Seleziona l'applicazione** che desideri ripristinare.

3. **Scegli un punto di ripristino** :
    La pagina dell'applicazione visualizza un elenco dei punti di ripristino disponibili. Scegli quello che desideri utilizzare e fai clic su **Restore**.

4. **Configura il ripristino** :
    - Puoi scegliere di ripristinare in un nuovo namespace o di sostituire l'applicazione esistente. Per questo tutorial, sostituiremo l'applicazione esistente.
    - Fai clic su **Restore** per avviare il processo.

Kasten ripristinerà ora l'applicazione allo stato catturato nello snapshot. Puoi seguire l'avanzamento nella dashboard.

## 5. Sicurezza dei backup

La protezione dei vostri dati di backup è una priorità. L'integrazione di Kasten nel prodotto Managed Kubernetes rispetta i più elevati standard di sicurezza.

- **Crittografia** : In conformità ai requisiti SecNumCloud, tutti i vostri backup sono crittografati. I dati sono crittografati in transito verso l'archiviazione S3 tramite il protocollo **TLS 1.3** e a riposo nei bucket di storage con l'algoritmo **AES-256**.

- **Gestione dei permessi** : L'accesso all'interfaccia Kasten e alle relative funzionalità è controllato da un sistema di permessi basato sul RBAC di Kubernetes. Solo gli utenti autorizzati possono creare, modificare o eseguire le politiche di backup e ripristino, garantendo così una governance rigorosa delle vostre operazioni di backup.

## Conclusione

Avete imparato a utilizzare Veeam Kasten per eseguire operazioni di backup e ripristino di base nel vostro cluster Kubernetes gestito. Kasten offre numerose funzionalità avanzate, come la migrazione delle applicazioni tra cluster e politiche di retention granulari, che potete esplorare per rafforzare la vostra strategia di protezione dei dati.

Per ulteriori informazioni, consultate la [documentazione ufficiale di Kasten K10](https://docs.kasten.io/latest/).