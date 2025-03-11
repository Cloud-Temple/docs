---
title: Guide de démarrage
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'


## Eine Redhat Openshift-Plattform innerhalb Ihres Tenants bereitstellen

### Zuweisung der Zugriffsrechte

Der Administrator des [Tenants](../console/iam/concepts.md#tenants) muss dem Openshift-Administrator die Zugriffsrechte zur Verwaltung der Openshift-Plattform zuweisen, um darauf zugreifen zu können:

<img src={oshiftRights} />

### Zugriff auf die Openshift-Umgebung innerhalb eines Tenants

Nach der Zuweisung der Rechte erscheint das Modul '__Openshift__' im Menü der Cloud Temple-Konsole:

<img src={oshiftMenu_001} />

Sie sehen dann die Openshift-Cluster, die innerhalb Ihres Tenants bereitgestellt werden.

Klicken Sie auf den Cluster, den Sie verwalten möchten. Sie greifen auf die Verwaltungsumgebung des Clusters zu:

<img src={oshiftMenu_002} />

Nach der Authentifizierung können Sie Ihren Cluster verwalten:

<img src={oshiftMenu_003} />

### Ressourcen Ihrer Umgebung

Hier sind die Verbindungs- und Konfigurationsinformationen Ihrer OpenShift-Umgebung.

#### Verbindungsdetails

Um auf die verschiedenen OpenShift-Komponenten zuzugreifen, stellen Sie sicher, dass Ihr Tenant in der Whitelist der Konsole eingetragen ist (siehe Dokumentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__:
  [https://**ihr-tenant-id**.shiva.cloud-temple.com/](https://**ihr-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-**ihr-id**.paas.cloud-temple.com/](https://ui-ocp01-**ihr-id**.paas.cloud-temple.com/)

- __Externe API__:
  [https://api-ocp01-**ihr-id**.paas.cloud-temple.com](https://api-ocp01-**ihr-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-**ihr-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**ihr-id**.paas.cloud-temple.com/applications)

#### Verbindung zum Cluster via CLI

Um sich über die Befehlszeile (CLI) zu verbinden, verwenden Sie den folgenden Befehl:

```bash
oc login https://api-ocp01-{ihr-id}.paas.cloud-temple.com/ --web
```

#### Zugriff auf das Registry

Um auf das Registry zuzugreifen, loggen Sie sich mit den folgenden Befehlen ein:

```bash
oc login https://api-ocp01-{ihr-id}.paas.cloud-temple.com --web
docker login -u {ihr-benutzername} -p $(oc whoami -t) registry-ocp01-{ihr-id}.paas.cloud-temple.com
```

Testen Sie dann den Build und das Hochladen eines Docker-Images:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{ihr-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{ihr-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Konfiguration der Router und Load Balancer

Die Plattform bietet flexible Optionen für das __Routing der Flows__ und das __Load-Balancing__:

- Standardmäßig werden private Load Balancer für Routen und Ingress verwendet.
- Domains:
  - `*.apps-priv-ocp01-{ihr-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{ihr-id}.paas.cloud-temple.com`

Stellen Sie sicher, dass Ihre Routen oder Ingress mit den entsprechenden Labels oder Klassen konfiguriert sind, um korrektes Routing zu gewährleisten.

Beispiel:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS-Interkonnektivität

Netzwerkkonfigurationen spielen eine entscheidende Rolle bei der Sicherung der Kommunikation mit OpenShift.

- __Interkonnektivitätsnetzwerk__: 100.67.0.0/28
- __VIP des privaten Load Balancers__: 100.67.0.3

Stellen Sie sicher, dass Ihre Firewall über eine dedizierte Schnittstelle verfügt und den Verkehr zwischen den angegebenen Netzwerken zulässt.