---
title: Getting Started Guide
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Deploy a Red Hat OpenShift platform within your tenant

### Assigning Access Rights

It is essential that the [Tenant](../console/iam/concepts.md#tenant) administrator grants the OpenShift platform read and management permissions to the OpenShift administrator user in order to access it:

<img src={oshiftRights} />

### Accessing the OpenShift Environment within a Tenant

After rights have been assigned, the **__OpenShift__** module appears in the Cloud Temple console menu:

<img src={oshiftMenu_001} />

You will then see the OpenShift clusters deployed within your tenant.

Click on the cluster you wish to manage. You will be directed to the cluster administration environment:

<img src={oshiftMenu_002} />

After authentication, you can manage your cluster:

<img src={oshiftMenu_003} />

### Resources for your environment

Here are the connection and configuration details specific to your OpenShift environment.

#### Connection Details

To access the various OpenShift components, ensure your tenant is whitelisted in the console (see documentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Shiva Tenant URL__:
  [https://__your-tenant-id__.shiva.cloud-temple.com/](https://**your-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__your-tenant-id__.paas.cloud-temple.com/](https://ui-ocp01-**your-tenant-id**.paas.cloud-temple.com/)

- __External API__:
  [https://api-ocp01-__your-tenant-id__.paas.cloud-temple.com](https://api-ocp01-**your-tenant-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__your-tenant-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**your-tenant-id**.paas.cloud-temple.com/applications)

#### Connecting to the cluster via CLI

To connect via the command line interface (CLI), use the following command:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com/ --web
```

#### Access to the Registry

To access the registry, log in using the following commands:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com --web
docker login -u {your-username} -p $(oc whoami -t) registry-ocp01-{your-id}.paas.cloud-temple.com
```

Then, test building and pushing a Docker image:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Router and Load Balancer Configuration

The platform provides flexible options for __traffic routing__ and __load balancing__:

- By default, private load balancers are used for routes and ingresses.
- Domains:
  - `*.apps-priv-ocp01-{your-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your-id}.paas.cloud-temple.com`

Ensure your routes or ingresses are configured with the appropriate labels or ingress classes to guarantee correct routing.

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