---
title: Schnellstartanleitung
title: Schnellstartanleitung
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

# QuickStart für das OpenShift-Angebot

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des **OpenShift**-Angebots über die Cloud Temple-Konsole. Folgen Sie diesen Anweisungen, um die verfügbaren Menüs und Funktionen zu entdecken.

---

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass folgende Punkte erfüllt sind:

1. **Aktiviertes Abonnement**: Ihre Organisation muss das OpenShift-Angebot abonniert haben.
2. **Benutzerberechtigungen**: Ihr Benutzerkonto muss über die erforderlichen Rechte verfügen, um auf OpenShift-Ressourcen zuzugreifen und diese zu verwalten.

---

## Zugriff auf die OpenShift-Oberfläche

Sobald das Abonnement aktiviert und die Berechtigungen konfiguriert sind, erscheint ein neues Menü mit dem Titel **OpenShift** in der Cloud Temple-Konsole. Dieses Menü enthält ein Hauptuntermenü: **Clusters**.

<img src={oshiftMenu_001} />

---

### 1. Untermenü **Clusters**

Das Untermenü **Clusters** zeigt Ihnen eine Tabelle mit allen verfügbaren OpenShift-Clustern, die in Ihrem Tenant bereitgestellt sind. Diese Tabelle enthält die wichtigsten Informationen für jeden Cluster:

- **Cluster-Name**
- **Zugriffs-URL**
- **API-URL**
- **Version**
- **Status**
- **Letzte Aktualisierung**

<img src={oshiftSubMenu_001} />

#### Hauptfunktion

- **Anklickbarer Name**: Wenn Sie auf den Namen eines OpenShift-Clusters klicken, wird eine neue Seite mit den **vollständigen Details** des Clusters angezeigt:
  - Verbindungsinformationen für die Verwaltung (**Zugriffs-URL**, **API-URL**).
  - Allgemeine Informationen (**Status**, **Letzte Aktualisierung**, **Version**)
  - Tabelle der Knoten mit folgenden Informationen:
    - **Knotenname**
    - **Typ**
    - **AZ**
    - **Status**
    - **CPU**
    - **RAM**

<img src={oshiftClusterDetail_001} />

---

## Zugriff auf die OpenShift-Verwaltungsoberfläche

Klicken Sie auf die **Zugriffs-URL** des Clusters, den Sie verwalten möchten. Sie gelangen zur Verwaltungsumgebung des Clusters:

<img src={oshiftMenu_002} />

Nach der Authentifizierung können Sie Ihren Cluster verwalten:
Nach der Authentifizierung können Sie Ihren Cluster verwalten:

<img src={oshiftMenu_003} />

### Ressourcen Ihrer Umgebung

Hier finden Sie die Verbindungs- und Konfigurationsinformationen für Ihre OpenShift-Umgebung.

#### Verbindungsdetails
#### Verbindungsdetails

Um auf die verschiedenen OpenShift-Komponenten zuzugreifen, stellen Sie sicher, dass Ihr Tenant in der Konsole auf der Whitelist steht (siehe Dokumentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __Shiva Tenant URL__:
  [https://__ihre-tenant-id__.shiva.cloud-temple.com/](https://**ihre-tenant-id**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__ihre-id__.paas.cloud-temple.com/](https://ui-ocp01-**ihre-id**.paas.cloud-temple.com/)

- __Externe API__:
  [https://api-ocp01-__ihre-id__.paas.cloud-temple.com](https://api-ocp01-**ihre-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__ihre-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**ihre-id**.paas.cloud-temple.com/applications)

#### Connection to the cluster via CLI

Um sich über die Befehlszeile (CLI) zu verbinden, verwenden Sie folgenden Befehl:

```bash
oc login https://api-ocp01-{ihre-id}.paas.cloud-temple.com/ --web
```

#### Zugriff auf die Registry

Um auf die Registry zuzugreifen, melden Sie sich mit den folgenden Befehlen an:
Um auf die Registry zuzugreifen, melden Sie sich mit den folgenden Befehlen an:

```bash
oc login https://api-ocp01-{ihre-id}.paas.cloud-temple.com --web
docker login -u {ihr-benutzername} -p $(oc whoami -t) registry-ocp01-{ihre-id}.paas.cloud-temple.com
```

Testen Sie anschließend den Build und das Hochladen eines Docker-Images:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{ihre-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{ihre-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Konfiguration von Routern und Load Balancern

Die Plattform bietet flexible Optionen für das __Routing von Datenflüssen__ und die __Lastverteilung__:

- Standardmäßig werden private Load Balancer für Routen und Ingresses verwendet.
- Domains:
  - `*.apps-priv-ocp01-{ihre-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{ihre-id}.paas.cloud-temple.com`

Stellen Sie sicher, dass Ihre Routen oder Ingresses mit den entsprechenden Labels oder Ingress-Klassen konfiguriert sind, um ein korrektes Routing zu gewährleisten.

Example:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS-Interconnection

Netzwerkkonfigurationen spielen eine entscheidende Rolle für die Sicherung der Kommunikation mit OpenShift.

- __Interconnection-Netzwerk__: 100.67.0.0/28
- __VIP des privaten Load Balancers__: 100.67.0.3

Überprüfen Sie, dass Ihre Firewall über eine dedizierte Schnittstelle verfügt und den Datenverkehr zwischen den angegebenen Netzwerken zulässt.
