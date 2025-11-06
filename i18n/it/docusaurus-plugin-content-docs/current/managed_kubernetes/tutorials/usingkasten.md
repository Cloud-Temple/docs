---
title: Backup delle tue applicazioni con Veeam Kasten
---

import k10dashboard from './images/k10dashboard.png'
import k10s3location from './images/k10s3location.png'
import k10infrabackups from './images/k10infrabackups.png'

## Introduzione

Veeam Kasten K10 è una soluzione di backup e ripristino progettata specificamente per gli ambienti Kubernetes. Nel servizio Managed Kubernetes di Cloud Temple, Kasten è integrato per consentirti di proteggere le tue applicazioni, ripristinare i dati quando necessario e garantire la continuità operativa.

Questo tutorial ti guiderà attraverso i passaggi fondamentali per eseguire il backup e il ripristino di un'applicazione utilizzando Kasten.

## Prerequisiti

Prima di iniziare, assicurati di disporre degli elementi seguenti:
- Un cluster Kubernetes gestito attivo.
- L'identificativo del tuo cluster (ad esempio, `ctodev`).
- Un'applicazione distribuita nel tuo cluster che desideri salvare.

## 1. Access the Kasten Dashboard

The Kasten dashboard is accessible via a secure URL, constructed using your cluster's identifier.

1.  **Build the access URL**:
    The URL follows this pattern: `https://k10.external-secured.<identifier>.mk.ms-cloud-temple.com`  
    Replace `<identifier>` with your cluster's identifier. For example, if your identifier is `ctodev`, the URL will be: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com`.

2.  **Access the URL** in your browser.

    :::info Security Note
    Access to this URL is restricted to the public IP addresses you have declared. If you are unable to connect, ensure your IP address is authorized by contacting Cloud Temple support.
    :::

<img src={k10dashboard} />

:::tip Integrated Quick Start Guide
The Kasten console includes an interactive quick start guide on its home page. Feel free to follow it for a hands-on introduction directly from the interface.
:::

## 2. Understanding Backup Storage

By default, Kasten is preconfigured to use Cloud Temple's object storage service (S3) to securely and durably store your backups.

No configuration is required. The storage location is already set up in the Kasten dashboard under **Settings > Locations**. This configuration ensures your data is stored on sovereign infrastructure.

<img src={k10s3location} />

:::info Cost Model
The Veeam Kasten service is included in the Managed Kubernetes offering. Backup storage on our sovereign S3 is billed on a pay-per-use basis. Refer to our pricing grid for more details.
:::

## 3. Create a backup policy

A backup policy (`Policy`) is a set of rules that define when and how to back up your applications.

:::warning Existing backup policy
A backup policy named `infra-backups` is already configured in your Kasten instance. This policy ensures the backup of essential components included with the cluster.

<img src={k10infrabackups} />

**Do not modify or delete this policy.**

You must create your own policies to back up the applications you deploy.
:::

1. In the Kasten dashboard, go to the **Policies** section and click **Create New Policy**.

2. **Name your policy**: Provide a descriptive name, for example `backup-my-app-daily`.

3. **Set the frequency (Action)**:
    - **Action**: `Snapshot` (snapshot).
    - **Frequency**: Choose the frequency that suits your needs (for example, `Daily` at `02:00`).

4. **Select the resources to back up**:
    - **Select resources by**: You can select applications by name (`Application Name`), by namespace (`Namespace`), or by labels.
    - To back up all applications in a namespace, choose `Namespace` and select the desired namespace.

5. **Click `Create Policy`** to save.

The policy will run automatically at the defined frequency. You can also trigger a manual execution by clicking the "Play" (▶️) button next to the policy.

## 4. Restore an application

Kasten makes it easy to restore an application to a previous state from a backup point.

1.  In the dashboard, go to the **Applications** section. You will see a list of your applications and their compliance status with backup policies.

2.  **Select the application** you want to restore.

3.  **Choose a restore point**:
    The application page displays a list of available restore points. Select the one you wish to use and click **Restore**.

4.  **Configure the restore**:
    - You can choose to restore into a new namespace or overwrite the existing application. For this tutorial, we will overwrite the existing application.
    - Click **Restore** to start the process.

Kasten will now restore the application to the state captured in the snapshot. You can monitor the progress in the dashboard.

## 5. Backup Security

Protecting your backup data is a top priority. Integrating Kasten into the Managed Kubernetes offering adheres to the highest security standards.

-   **Encryption**: In compliance with SecNumCloud requirements, all your backups are encrypted. Data is encrypted in transit to the S3 storage using the **TLS 1.3** protocol and at rest in storage buckets using the **AES-256** algorithm.

-   **Permission Management**: Access to the Kasten interface and its features is controlled by a permission system based on Kubernetes RBAC. Only authorized users can create, modify, or execute backup and restore policies, ensuring strict governance over your backup operations.

## Conclusione

Hai imparato a utilizzare Veeam Kasten per eseguire operazioni di backup e ripristino di base nel tuo cluster Kubernetes gestito. Kasten offre numerose funzionalità avanzate, come la migrazione di applicazioni tra cluster e politiche di conservazione granulari, che puoi esplorare per rafforzare la tua strategia di protezione dei dati.

Per ulteriori informazioni, consulta la [documentazione ufficiale di Kasten K10](https://docs.kasten.io/latest/).