---
title: Schnellstartanleitung
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'
import oshiftOrder_001 from './images/oshift_order_001.png'

# QuickStart für das OpenShift-Angebot

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des **OpenShift**-Angebots über die Cloud Temple-Konsole. Befolgen Sie diese Anweisungen, um die verfügbaren Menüs und Funktionen kennenzulernen.

---

## Voraussetzungen

Stellen Sie sicher, dass die folgenden Punkte erfüllt sind, bevor Sie beginnen:

1. **Aktivierte Abonnement**: Ihre Organisation muss ein OpenShift-Abonnement abgeschlossen haben.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Berechtigungen verfügen, um auf OpenShift-Ressourcen zuzugreifen und diese zu verwalten.

## Erster Zugriff und Bestellung

Beim ersten Zugriff auf das OpenShift-Angebot nach Aktivierung der Subscription und Konfiguration der Berechtigungen wird folgende Startseite angezeigt:

<img src={oshiftOrder_001} />

Diese Seite zeigt an, dass Sie noch keine OpenShift SecNumCloud-Cluster bereitgestellt haben.

**Um Ihren ersten OpenShift SecNumCloud-Cluster zu bestellen, wenden Sie sich bitte an den Cloud Temple-Support.**

Sobald Ihre Bestellung vom Support bearbeitet wurde und Ihr Cluster bereitgestellt ist, können Sie auf das OpenShift-Menü zugreifen.

## Access to the OpenShift Interface

Once your first cluster has been deployed, a new menu titled **OpenShift** appears in the Cloud Temple console. This menu contains a main submenu: **Clusters**.

<img src={oshiftMenu_001} />

### 1. Liste der Clusters

Das Untermenü **Clusters** zeigt Ihnen eine Tabelle mit allen verfügbaren OpenShift-Clustern an, die innerhalb Ihres Tenants bereitgestellt wurden. Die Tabelle enthält die wichtigsten Informationen für jeden Cluster:

- **Cluster-Name**
- **Zugriffs-URL**
- **API-URL**
- **Version**
- **Status**
- **Letzte Aktualisierung**

<img src={oshiftSubMenu_001} />

💡 **Um detaillierte Informationen zu einem Cluster anzuzeigen, klicken Sie auf dessen Namen in der Tabelle.**

### 2. Cluster Details

When you click on a **cluster name** in the list, a detailed page is displayed with complete cluster information:

**Connectivity Information:**
- **Access URL**: Web interface of the cluster
- **API URL**: API endpoint for CLI operations

**General Information:**
- **Status**: Current state of the cluster
- **Last Updated**: Date of the last modification
- **Version**: OpenShift version deployed

**Cluster Nodes:**

A table provides detailed information for each node:
- **Node Name**
- **Type**
- **AZ** (Availability Zone)
- **Status**
- **CPU**
- **RAM**

<img src={oshiftClusterDetail_001} />

## Access to the OpenShift Administration Interface

Click on the **Access URL** of the cluster you wish to manage. You will be directed to the cluster administration environment:

<img src={oshiftMenu_002} />

After authentication, you can manage your cluster:

<img src={oshiftMenu_003} />

### Resources of your environment

Here are the connection and configuration details specific to your OpenShift environment.

#### Connection Details

To access the various OpenShift components, ensure your tenant is whitelisted in the console (see documentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Konsole Tenant URL__:
  [https://__your-tenant-id__.shiva.cloud-temple.com/](https://**your-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__your-tenant-id__.paas.cloud-temple.com/](https://ui-ocp01-**your-tenant-id**.paas.cloud-temple.com/)

- __External API__:
  [https://api-ocp01-__your-tenant-id__.paas.cloud-temple.com](https://api-ocp01-**your-tenant-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__your-tenant-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**your-tenant-id**.paas.cloud-temple.com/applications)

#### Connection to the cluster via CLI

To connect via the command line interface (CLI), use the following command:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com/ --web
```

#### Zugriff auf den Registry

Um auf die Registry zuzugreifen, melden Sie sich mit den folgenden Befehlen an:

```bash
oc login https://api-ocp01-{Ihr-ID}.paas.cloud-temple.com --web
docker login -u {Ihr-Benutzername} -p $(oc whoami -t) registry-ocp01-{Ihr-ID}.paas.cloud-temple.com
```

Testen Sie anschließend die Erstellung und das Hochladen eines Docker-Images:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{Ihr-ID}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{Ihr-ID}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuration of Routers and Load Balancers

The platform provides flexible options for __traffic routing__ and __load balancing__:

- By default, private load balancers are used for routes and ingresses.
- Domains:
  - `*.apps-priv-ocp01-{your-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your-id}.paas.cloud-temple.com`

Ensure your routes or ingresses are configured with the appropriate ingress labels or classes to guarantee correct routing.

Example:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS Connectivity

Network configurations play a crucial role in securing communications with OpenShift.

- __Connectivity Network__: 100.67.0.0/28  
- __Private Load Balancer VIP__: 100.67.0.3

Ensure your firewall has a dedicated interface and permits traffic between the specified networks.
