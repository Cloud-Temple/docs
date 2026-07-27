---
title: Back up your applications with Veeam Kasten
---


import k10dashboard from '@site/docs/managed_kubernetes/tutorials/images/k10dashboard.png'
import k10s3location from '@site/docs/managed_kubernetes/tutorials/images/k10s3location.png'
import k10infrabackups from '@site/docs/managed_kubernetes/tutorials/images/k10infrabackups.png'

## Introduction

Veeam Kasten K10 is a backup and restore solution specifically designed for Kubernetes environments. In Cloud Temple's Managed Kubernetes product, Kasten is integrated to allow you to protect your applications, restore data as needed, and ensure business continuity.

This tutorial will guide you through the basic steps to back up and restore an application using Kasten.

## Prerequisites

Before you begin, make sure you have the following:

- An active Managed Kubernetes cluster.
- Your cluster ID (for example, `ctodev`).
- An application deployed in your cluster that you want to back up.

## 1. Access the Kasten Dashboard

The Kasten dashboard is accessible via a secure URL, constructed from your cluster identifier.

1. **Construct the access URL** :
   The URL is based on the following pattern: `https://k10.external-secured.<identifiant>.mk.ms-cloud-temple.com/k10/`
   Replace `<identifiant>` with your cluster identifier. For example, if your identifier is `ctodev`, the URL will be: `https://k10.external-secured.ctodev.mk.ms-cloud-temple.com/k10/`.
2. **Access the URL** in your browser.

   > ℹ️Security Note
   > Access to this URL is restricted to the public IP addresses you have declared. If you are unable to connect, ensure that your IP address is authorized by contacting Cloud Temple support.
   >

<img src={k10dashboard} />

> ℹ️[Built-in Quick Start Guide] The Kasten console includes an interactive quick start guide on its home page. Feel free to follow it for an initial hands-on experience directly from the interface.

## 2. Understanding Backup Storage

By default, Kasten is preconfigured to use Cloud Temple's object storage service (S3) to store your backups securely and durably.

You do not need to perform any configuration. The storage location is already defined in the Kasten dashboard, under **Settings > Locations**. This configuration ensures that your data is stored on a sovereign infrastructure.

<img src={k10s3location} />

> ℹ️[Modèle de coût] The Veeam Kasten service is included in the Managed Kubernetes product. Backup storage on our sovereign S3 is billed on a pay-as-you-go basis. Please refer to our pricing grid for more details.

## 3. Create a backup policy

A backup policy (`Policy`) is a set of rules that define when and how to back up your applications.

⚠[Existing backup policy] A backup policy named `infra-backups` is already configured in your Kasten instance. This policy ensures the backup of essential components shipped with the cluster.

<img src={k10infrabackups} />

**Do not modify or delete this policy.**

You must create your own policies to back up the applications you deploy.

1. In the Kasten dashboard, go to the **Policies** section and click **Create New Policy**.
2. **Name your policy**: Give it a descriptive name, for example `backup-my-app-daily`.
3. **Set the frequency (Action)**:

   - **Action**: `Snapshot`.
   - **Frequency**: Choose the frequency that suits you (for example, `Daily` at `02:00`).
4. **Select resources to back up**:

   - **Select resources by**: You can select applications by name (`Application Name`), by namespace (`Namespace`), or by labels.
   - To back up all applications in a namespace, choose `Namespace` and select the desired namespace.
5. **Click `Create Policy`** to save.

The policy will run automatically at the defined frequency. You can also trigger a manual run by clicking the "Play" button (▶️) next to the policy.

### Quick backup policies

To facilitate getting started with Kasten, Cloud-Temple has provided *24 backup policies*, which perform a backup at a fixed time, with a 7-day retention in S3.

![K10policies](images/k10policies.png)

These policies apply to **namespaces that have a label indicating which policy(ies) to apply.**

For example, a namespace with the label **kasten-daily05-r7d = true** will be backed up to S3 every day at 05:00 UTC, with a 7-day retention.

## 4. Restore an Application

Kasten facilitates restoring an application to its previous state from a restore point.

1. In the dashboard, go to the **Applications** section. You will see a list of your applications and their compliance status with respect to backup policies.
2. **Select the application** you want to restore.
3. **Choose a restore point** :
   The application page displays a list of available restore points. Choose the one you want to use and click **Restore**.
4. **Configure the restore** :

   - You can choose to restore to a new namespace or replace the existing application. For this tutorial, we will replace the existing application.
   - Click **Restore** to start the process.

Kasten will now restore the application to the state captured in the snapshot. You can track the progress in the dashboard.

## 5. Backup Security

Protecting your backup data is a priority. Integrating Kasten into the Managed Kubernetes product adheres to the highest security standards.

- **Encryption**: In compliance with SecNumCloud requirements, all your backups are encrypted. Data is encrypted in transit to S3 storage using the **TLS 1.3** protocol and at rest in storage buckets using the **AES-256** algorithm.
- **Permission Management**: Access to the Kasten interface and its features is controlled by a permission system based on Kubernetes RBAC. Only authorized users can create, modify, or execute backup and restore policies, ensuring strict governance of your backup operations.

## Conclusion

You have learned how to use Veeam Kasten to perform basic backup and restore operations in your Managed Kubernetes cluster. Kasten offers many advanced features, such as application migration between clusters and granular retention policies, which you can explore to strengthen your data protection strategy.

For more information, refer to the [official Kasten K10 documentation](https://docs.kasten.io/latest/).