---
title: Schnellstartanleitung
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Deploy a Red Hat OpenShift platform within your tenant

### Zuweisung von Zugriffsrechten

Es ist unbedingt erforderlich, dass der Administrator des [Tenant](../console/iam/concepts.md#tenant) dem OpenShift-Administrator die Berechtigungen zum Lesen und Verwalten der OpenShift-Plattform erteilt, um darauf zugreifen zu können:

<img src={oshiftRights} />

### Zugriff auf die Openshift-Umgebung innerhalb eines Tenants

Nach der Zuweisung der Berechtigungen erscheint das Modul '__Openshift__' im Menü der Cloud Temple-Konsole:

<img src={oshiftMenu_001} />

Sie sehen nun die Openshift-Cluster, die innerhalb Ihres Tenants bereitgestellt wurden.

Klicken Sie auf den Cluster, den Sie verwalten möchten. Sie gelangen dann in die Administrationsumgebung des Clusters:

<img src={oshiftMenu_002} />

Nach der Authentifizierung können Sie Ihren Cluster verwalten:

<img src={oshiftMenu_003} />

### Resources of your environment

Here are the connection and configuration details specific to your OpenShift environment.

#### Verbindungsdetails

Um auf die verschiedenen OpenShift-Komponenten zugreifen zu können, stellen Sie sicher, dass Ihr Mandant in der Liste der zugelassenen Mandanten in der Konsole aufgeführt ist (siehe Dokumentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Shiva Mandant-URL__ :
  [https://__Ihre-Mandanten-ID__.shiva.cloud-temple.com/](https://**Ihre-Mandanten-ID**.shiva.cloud-temple.com/)

- __OpenShift UI__ :
  [https://ui-ocp01-__Ihre-Mandanten-ID__.paas.cloud-temple.com/](https://ui-ocp01-**Ihre-Mandanten-ID**.paas.cloud-temple.com/)

- __Externe API__ :
  [https://api-ocp01-__Ihre-Mandanten-ID__.paas.cloud-temple.com](https://api-ocp01-**Ihre-Mandanten-ID**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__Ihre-Mandanten-ID__.paas.cloud-temple.com/applications](https://gitops-ocp01-**Ihre-Mandanten-ID**.paas.cloud-temple.com/applications)

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