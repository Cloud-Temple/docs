---
title: Getting Started Guide
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'


## Deploy a Redhat Openshift platform within your tenant

### Assigning access rights

It is essential that the [Tenant](../console/iam/concepts.md#tenants) administrator grants the Openshift platform management right to the Openshift admin user to access it:

<img src={oshiftRights} />

### Access to the Openshift environment within a tenant

After assigning rights, the '__Openshift__' module will then appear in the Cloud Temple console menu:

<img src={oshiftMenu_001} />

You will then see the Openshift clusters that are deployed within your tenant.

Click on the cluster you wish to administer. You will access the cluster administration environment:

<img src={oshiftMenu_002} />

Once authenticated, you can administer your cluster:

<img src={oshiftMenu_003} />

### Resources of your environment

Here is the connection and configuration information specific to your OpenShift environment.

#### Connection Details

To access the various OpenShift components, make sure your tenant is whitelisted in the console (refer to the documentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Shiva Tenant URL__:
  [https://**your-tenant-id**.shiva.cloud-temple.com/](https://**your-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-**your-id**.paas.cloud-temple.com/](https://ui-ocp01-**your-id**.paas.cloud-temple.com/)

- __External API__:
  [https://api-ocp01-**your-id**.paas.cloud-temple.com](https://api-ocp01-**your-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-**your-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**your-id**.paas.cloud-temple.com/applications)

#### Connecting to the cluster via CLI

To connect via the command line (CLI), use the following command:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com/ --web
```

#### Access to the registry

To access the registry, log in using the following commands:

```bash
oc login https://api-ocp01-{your-id}.paas.cloud-temple.com --web
docker login -u {your-user} -p $(oc whoami -t) registry-ocp01-{your-id}.paas.cloud-temple.com
```

Next, test building and uploading a Docker image:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{your-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Router and Load Balancer configuration

The platform offers flexible options for __traffic routing__ and __load balancing__:

- By default, private load balancers are used for routes and ingresses.
- Domains:
  - `*.apps-priv-ocp01-{your-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your-id}.paas.cloud-temple.com`

Ensure that your routes or ingresses are configured with appropriate labels or ingress classes to ensure proper routing.

Example:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS Interconnection

Network configurations play a crucial role in securing communications with OpenShift.

- __Interconnection Network__: 100.67.0.0/28
- __Private load balancer VIP__: 100.67.0.3

Ensure that your firewall has a dedicated interface and allows traffic between the specified networks.