---
title: Getting Started Guide
title: Getting Started Guide
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

# QuickStart for the OpenShift Offering

This page guides you through the initial steps to use the **OpenShift** offering from the Cloud Temple console. Follow these instructions to discover the available menus and features.

---

## Prerequisites

Before starting, ensure the following points:

1. **Active subscription**: Your organization must have subscribed to the OpenShift offering.
2. **User permissions**: Your user account must have the necessary rights to access and manage OpenShift resources.

---

## Access to the OpenShift Interface

Once the subscription is activated and permissions are configured, a new menu titled **OpenShift** appears in the Cloud Temple console. This menu contains a main submenu: **Clusters**.

<img src={oshiftMenu_001} />

---

### 1. **Clusters** Submenu

The **Clusters** submenu presents you with a table listing all available OpenShift clusters deployed within your tenant. This table includes the main information for each cluster:

- **Cluster name**
- **Access URL**
- **API URL**
- **Version**
- **Status**
- **Last update**

<img src={oshiftSubMenu_001} />

#### Main Feature

- **Clickable name**: By clicking on the name of an OpenShift cluster, a new page displays with the **complete details** of the cluster:
  - Connectivity information for management (**Access URL**, **API URL**).
  - General information (**Status**, **Last update**, **Version**)
  - Node table including the information:
    - **Node name**
    - **Type**
    - **AZ**
    - **Status**
    - **CPU**
    - **RAM**

<img src={oshiftClusterDetail_001} />

---

## Access to the OpenShift Administration Interface

Click on the **Access URL** of the cluster you wish to administer. You access the cluster's administration environment:

<img src={oshiftMenu_002} />

After authentication, you can administer your cluster:

<img src={oshiftMenu_003} />

### Your Environment Resources

Here are the connection and configuration information specific to your OpenShift environment.

#### Connection Details
#### Connection Details

To access the various OpenShift components, ensure your tenant is whitelisted in the console (refer to the documentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Shiva Tenant URL__:
  [https://__your-tenant-id__.shiva.cloud-temple.com/](https://**your-tenant-id**.shiva.cloud-temple.com/)
  [https://__your-tenant-id__.shiva.cloud-temple.com/](https://**your-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__your-id__.paas.cloud-temple.com/](https://ui-ocp01-**your-id**.paas.cloud-temple.com/)

- __External API__:
  [https://api-ocp01-__your-id__.paas.cloud-temple.com](https://api-ocp01-**your-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__your-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**your-id**.paas.cloud-temple.com/applications)

#### Connecting to the cluster via CLI

To connect via the command line interface (CLI), use the following command:
To connect via the command line interface (CLI), use the following command:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com/ --web
```

#### Registry Access

To access the registry, log in using the following commands:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com --web
docker login -u {your-username} -p $(oc whoami -t) registry-ocp01-{your-id}.paas.cloud-temple.com
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com --web
docker login -u {your-username} -p $(oc whoami -t) registry-ocp01-{your-id}.paas.cloud-temple.com
```

Then, test building and pushing a Docker image:
Then, test building and pushing a Docker image:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker tag <namespace>/temp:latest registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Router and Load Balancer Configuration
#### Router and Load Balancer Configuration

The platform provides flexible options for __traffic routing__ and __load balancing__:

- By default, private load balancers are used for routes and ingresses.
- By default, private load balancers are used for routes and ingresses.
- Domains:
  - `*.apps-priv-ocp01-{your-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your-id}.paas.cloud-temple.com`
  - `*.apps-priv-ocp01-{your-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your-id}.paas.cloud-temple.com`

Ensure your routes or ingresses are configured with the appropriate labels or ingress classes to guarantee correct routing.
Ensure your routes or ingresses are configured with the appropriate labels or ingress classes to guarantee correct routing.

Example:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS Interconnection

Network configurations play a crucial role in securing communications with OpenShift.
Network configurations play a crucial role in securing communications with OpenShift.

- __Interconnection network__: 100.67.0.0/28
- __Private load balancer VIP__: 100.67.0.3

Verify that your firewall has a dedicated interface and allows traffic between the specified networks.
