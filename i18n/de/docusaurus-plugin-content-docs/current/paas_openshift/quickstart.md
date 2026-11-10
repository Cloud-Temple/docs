---
title: Erste Schritte mit OpenShift
---
import oshiftMenu_001 from '@site/docs/paas_openshift/images/oshift_menu_001.png'
import oshiftSubMenu_001 from '@site/docs/paas_openshift/images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from '@site/docs/paas_openshift/images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from '@site/docs/paas_openshift/images/oshift_menu_002.png'
import oshiftMenu_003 from '@site/docs/paas_openshift/images/oshift_menu_003.png'
import oshiftOrder_001 from '@site/docs/paas_openshift/images/oshift_order_001.png'

# Erste Schritte mit OpenShift

Diese Seite führt Sie durch die ersten Schritte zur Nutzung des Produkts **OpenShift** über die Cloud Temple-Konsole. Folgen Sie diesen Anweisungen, um die verfügbaren Menüs und Funktionen kennenzulernen.

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

## Zugriff auf die OpenShift-Oberfläche

Sobald Ihr erster Cluster bereitgestellt ist, erscheint in der Cloud Temple-Konsole ein neues Menü mit dem Titel **OpenShift**. Dieses Menü enthält ein Hauptuntermenü: **Clusters**.

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

### 2. Details eines Clusters

Wenn Sie in der Liste auf den **Namen eines Clusters** klicken, wird eine Detailseite mit den vollständigen Informationen zum Cluster angezeigt:

**Konnektivitätsinformationen:**

- **Zugriffs-URL**: Weboberfläche des Clusters
- **API-URL**: API-Einstiegspunkt für CLI-Operationen

**Allgemeine Informationen:**

- **Status**: Aktueller Zustand des Clusters
- **Letzte Aktualisierung**: Datum der letzten Änderung
- **Version**: Bereitgestellte OpenShift-Version

**Knoten des Clusters:**

Eine Tabelle enthält für jeden Knoten die folgenden Informationen:

- **Knotenname**
- **Type**
- **AZ** (Availability Zone)
- **Status**
- **CPU**
- **RAM**

<img src={oshiftClusterDetail_001} />

## Zugriff auf die OpenShift-Administrationsoberfläche

Klicken Sie auf die **Zugriffs-URL** des Clusters, den Sie verwalten möchten. Sie gelangen in die Administrationsumgebung des Clusters:

<img src={oshiftMenu_002} />

Nach der Authentifizierung können Sie Ihren Cluster verwalten:

<img src={oshiftMenu_003} />

### Ressourcen Ihrer Umgebung

Nachfolgend die Verbindungs- und Konfigurationsinformationen, die für Ihre OpenShift-Umgebung spezifisch sind.

#### Verbindungsdetails

Um auf die verschiedenen OpenShift-Komponenten zuzugreifen, stellen Sie sicher, dass Ihr Tenant in der Konsole auf der Whitelist eingetragen ist (siehe Dokumentation: [Cloud Temple-Dokumentation](https://docs.cloud-temple.com/)).

- **Tenant-Konsolen-URL**:
  [https://**your-tenant-id**.shiva.cloud-temple.com/](https://**your-tenant-id**.shiva.cloud-temple.com/)

- **OpenShift UI**:
  [https://ui-ocp01-**your-tenant-id**.paas.cloud-temple.com/](https://ui-ocp01-**your-tenant-id**.paas.cloud-temple.com/)

- **Externe API**:
  [https://api-ocp01-**your-tenant-id**.paas.cloud-temple.com](https://api-ocp01-**your-tenant-id**.paas.cloud-temple.com)

- **GitOps (ARGOCD)**:
  [https://gitops-ocp01-**your-tenant-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**your-tenant-id**.paas.cloud-temple.com/applications)

#### Verbindung zum Cluster über die Befehlszeile (CLI)

Verwenden Sie den folgenden Befehl, um sich über die Befehlszeile (CLI) zu verbinden:

```bash
oc login https://api-ocp01-{Ihre-ID}.paas.cloud-temple.com/ --web
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

#### Konfiguration der Router und Load Balancer

Die Plattform bietet flexible Optionen für das **Routing des Datenverkehrs** und den **Lastausgleich**:

- Standardmäßig werden private Load Balancer für Routes und Ingresses verwendet.
- Domains:
  - `*.apps-priv-ocp01-{your-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{your-id}.paas.cloud-temple.com`

Stellen Sie sicher, dass Ihre Routes oder Ingresses mit den passenden Labels oder Ingress-Klassen konfiguriert sind, um ein korrektes Routing zu gewährleisten.

Beispiel:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS-Interconnect

Die Netzwerkkonfigurationen spielen eine entscheidende Rolle für die Absicherung der Kommunikation mit OpenShift.

- **Interconnect-Netzwerk**: 100.67.0.0/28  
- **VIP des privaten Load Balancers**: 100.67.0.3  

Stellen Sie sicher, dass Ihre Firewall über eine dedizierte Schnittstelle verfügt und den Datenverkehr zwischen den angegebenen Netzwerken zulässt.
