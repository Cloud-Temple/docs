---
title: Getting Started Guide
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Deploy a Redhat Openshift platform within your tenant

### Assignment of access rights

It is essential that the [Tenant](../console/iam/concepts.md#tenants) administrator grants the OpenShift platform management rights to the OpenShift administrator user to access it:

<img src={oshiftRights} />

### Access to the Openshift environment within a tenant

After assigning the rights, the '__Openshift__' module then appears in the Cloud Temple console menu:

<img src={oshiftMenu_001} />

You will then see the Openshift clusters that are deployed within your tenant.

Click on the cluster you want to administer. You will access the cluster administration environment:

<img src={oshiftMenu_002} />

After authentication, you can manage your cluster:

<img src={oshiftMenu_003} />

### Resources of your environment

Here are the connection and configuration information specific to your OpenShift environment.

#### Connection details

To access the different OpenShift components, make sure your tenant is registered on the whitelist in the console (see the documentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Shiva Tenant URL__ :
  [https://__votre-id-locataire__.shiva.cloud-temple.com/](https://**votre-id-locataire**.shiva.cloud-temple.com/)

- __OpenShift UI__ :
  [https://ui-ocp01-__votre-id__.paas.cloud-temple.com/](https://ui-ocp01-**votre-id**.paas.cloud-temple.com/)

- __External API__ :
  [https://api-ocp01-__votre-id__.paas.cloud-temple.com](https://api-ocp01-**votre-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__votre-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/applications)

#### Connecting to the cluster via CLI

To connect via the command line (CLI), use the following command :

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com/ --web
```

#### Accessing the registry

To access the registry, log in using the following commands :

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com --web
docker login -u {votre-utilisateur} -p $(oc whoami -t) registry-ocp01-{votre-id}.paas.cloud-temple.com
```

Then test the build and upload of a Docker image :

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuration of routers and Load Balancers

The platform offers flexible options for __traffic routing__ and __load balancing__ :

- By default, private load balancers are used for routes and ingresses.
- Domains :
  - `*.apps-priv-ocp01-{votre-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{votre-id}.paas.cloud-temple.com`

Make sure your routes or ingresses are configured with the appropriate labels or ingress classes to ensure correct routing.

Example :

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS Interconnection

Network configurations play a crucial role in securing communications with OpenShift.

- __Interconnection network__ : 100.67.0.0/28
- __Private load balancer VIP__ : 100.67.0.3

Check that your firewall has a dedicated interface and allows traffic between the specified networks.