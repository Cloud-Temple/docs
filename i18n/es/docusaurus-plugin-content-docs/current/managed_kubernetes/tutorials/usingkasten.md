---
title: Back up your applications with Veeam Kasten
---

import k10dashboard from './images/k10dashboard.png'
import k10s3location from './images/k10s3location.png'
import k10infrabackups from './images/k10infrabackups.png'

## Introducción

Veeam Kasten K10 es una solución de copia de seguridad y recuperación diseñada específicamente para entornos Kubernetes. En el servicio Kubernetes gestionado de Cloud Temple, Kasten está integrado para permitirle proteger sus aplicaciones, restaurar datos cuando sea necesario y garantizar la continuidad de sus actividades.

Este tutorial le guiará a través de los pasos básicos para realizar copias de seguridad y recuperar una aplicación utilizando Kasten.

## Requis

Antes de comenzar, asegúrese de contar con los siguientes elementos:
- Un clúster Kubernetes gestionado activo.
- El identificador de su clúster (por ejemplo, `ctodev`).
- Una aplicación desplegada en su clúster que desee respaldar.

## 1. Access the Kasten dashboard

The Kasten dashboard is accessible via a secure URL, built using your cluster's identifier.

1.  **Build the access URL**:
    The URL follows this pattern: `https://k10.external-secured.<identifier>.mk.ms-cloud-temple.com`  
    Replace `<identifier>` with your cluster's identifier. For example, if your identifier is `ctodev`, the URL will be: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com`.

2.  **Access the URL** in your browser.

    :::info Security note
    Access to this URL is restricted to the public IP addresses you have declared. If you are unable to connect, ensure your IP address is authorized by contacting Cloud Temple support.
    :::

<img src={k10dashboard} />

:::tip Integrated quick start guide
The Kasten console includes an interactive quick start guide on its home page. Feel free to follow it for a hands-on introduction directly from the interface.
:::

## 2. Understanding Backup Storage

By default, Kasten is preconfigured to use Cloud Temple's object storage service (S3) to securely and durably store your backups.

No configuration is required on your part. The storage location is already set up in the Kasten dashboard under **Settings > Locations**. This configuration ensures your data is stored on sovereign infrastructure.

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
    - You can choose to restore into a new namespace or replace the existing application. For this tutorial, we will replace the existing application.
    - Click **Restore** to start the process.

Kasten will now restore the application to the state captured in the snapshot. You can monitor the progress in the dashboard.

## 5. Backup Security

Protecting your backup data is a top priority. Integrating Kasten into the Managed Kubernetes offering adheres to the highest security standards.

-   **Encryption**: In compliance with SecNumCloud requirements, all your backups are encrypted. Data is encrypted in transit to the S3 storage using the **TLS 1.3** protocol and at rest in storage buckets using the **AES-256** algorithm.

-   **Permission Management**: Access to the Kasten interface and its features is controlled by a role-based access control (RBAC) system integrated with Kubernetes. Only authorized users can create, modify, or execute backup and restore policies, ensuring strict governance over your backup operations.

## Conclusión

Ha aprendido a utilizar Veeam Kasten para realizar operaciones básicas de copia de seguridad y restauración en su clúster Managed Kubernetes. Kasten ofrece muchas funciones avanzadas, como la migración de aplicaciones entre clústeres y políticas de retención granulares, que puede explorar para fortalecer su estrategia de protección de datos.

Para obtener más información, consulte la [documentación oficial de Kasten K10](https://docs.kasten.io/latest/).