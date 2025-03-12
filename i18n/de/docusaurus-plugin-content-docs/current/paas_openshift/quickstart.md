---
title: Erste Schritte
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Bereitstellung einer RedHat OpenShift-Plattform innerhalb Ihres Tenants

### Zuweisung von Zugriffsrechten

Es ist unerlässlich, dass der [Tenant](../console/iam/concepts.md#tenants)-Administrator dem OpenShift-Administrator-Benutzer das Recht zur Verwaltung der OpenShift-Plattform gewährt, um darauf zugreifen zu können:

<img src={oshiftRights} />

### Zugriff auf die OpenShift-Umgebung innerhalb eines Tenants

Nach der Rechtezuweisung erscheint das Modul '__Openshift__' im Menü der Cloud Temple-Konsole:

<img src={oshiftMenu_001} />

Sie sehen dann die OpenShift-Cluster, die innerhalb Ihres Tenants bereitgestellt sind.

Klicken Sie auf den Cluster, den Sie verwalten möchten. Sie gelangen zur Cluster-Verwaltungsumgebung:

<img src={oshiftMenu_002} />

Nach der Authentifizierung können Sie Ihren Cluster verwalten:

<img src={oshiftMenu_003} />

### Ressourcen für Ihre Umgebung

Hier sind die Verbindungs- und Konfigurationsinformationen, die spezifisch für Ihre OpenShift-Umgebung sind.

#### Verbindungsdetails

Um auf die verschiedenen OpenShift-Komponenten zuzugreifen, stellen Sie sicher, dass Ihr Tenant in der Konsole auf der Whitelist steht (siehe Dokumentation: [Cloud Temple Dokumentation](https://docs.cloud-temple.com/)).

- __Shiva Tenant URL__:
  [https://__ihre-tenant-id__.shiva.cloud-temple.com/](https://**ihre-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__ihre-id__.paas.cloud-temple.com/](https://ui-ocp01-**ihre-id**.paas.cloud-temple.com/)

- __Externe API__:
  [https://api-ocp01-__ihre-id__.paas.cloud-temple.com](https://api-ocp01-**ihre-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__ihre-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**ihre-id**.paas.cloud-temple.com/applications)

#### Verbindung zum Cluster über CLI

Um sich über die Befehlszeilenschnittstelle (CLI) zu verbinden, verwenden Sie den folgenden Befehl:

```bash
oc login https://api-ocp01-{ihre-id}.paas.cloud-temple.com/ --web
```

#### Registry-Zugriff

Um auf die Registry zuzugreifen, melden Sie sich mit den folgenden Befehlen an:

```bash
oc login https://api-ocp01-{ihre-id}.paas.cloud-temple.com --web
docker login -u {ihr-benutzer} -p $(oc whoami -t) registry-ocp01-{ihre-id}.paas.cloud-temple.com
```

Testen Sie dann das Erstellen und Hochladen eines Docker-Images:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{ihre-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{ihre-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Router- und Load-Balancer-Konfiguration

Die Plattform bietet flexible Optionen für __Verkehrsrouting__ und __Lastausgleich__:

- Standardmäßig werden private Load Balancer für Routen und Ingresses verwendet.
- Domains:
  - `*.apps-priv-ocp01-{ihre-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{ihre-id}.paas.cloud-temple.com`

Stellen Sie sicher, dass Ihre Routen oder Ingresses mit den entsprechenden Labels oder Ingress-Klassen konfiguriert sind, um ein korrektes Routing zu gewährleisten.

Beispiel:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS-Verbindung

Netzwerkkonfigurationen spielen eine entscheidende Rolle bei der Sicherung der Kommunikation mit OpenShift.

- __Verbindungsnetzwerk__: 100.67.0.0/28
- __Private Load Balancer VIP__: 100.67.0.3

Überprüfen Sie, ob Ihre Firewall über eine dedizierte Schnittstelle verfügt und den Verkehr zwischen den angegebenen Netzwerken zulässt.
