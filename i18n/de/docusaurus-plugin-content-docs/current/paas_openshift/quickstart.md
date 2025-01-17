---
title: Quickstart
---

## Eine Redhat-Openshift-Plattform innerhalb Ihres Tenants bereitstellen

### Zuweisung der Zugriffsrechte

Es ist unerlässlich, dass der Administrator des [Tenants](../console/iam/concepts.md#tenants) das Verwaltungsrecht der Openshift-Plattform dem Openshift-Administratorbenutzer gewährt, um darauf zugreifen zu können:

![](images/oshift_rights.png)

### Zugriff auf die Openshift-Umgebung innerhalb eines Tenants

Nach der Zuweisung der Rechte erscheint das Modul '__Openshift__' im Menü der Cloud Temple-Konsole:

![](images/oshift_menu_001.png)

Sie sehen dann die Openshift-Cluster, die innerhalb Ihres Tenants bereitgestellt sind.

Klicken Sie auf den Cluster, den Sie verwalten möchten. Sie greifen auf die Verwaltungsumgebung des Clusters zu:

![](images/oshift_menu_002.png)

Nach der Authentifizierung können Sie Ihren Cluster verwalten:

![](images/oshift_menu_003.png)

### Ressourcen Ihrer Umgebung

Hier sind die Verbindungs- und Konfigurationsinformationen Ihrer OpenShift-Umgebung.

#### Verbindungsdetails

Um auf die verschiedenen OpenShift-Komponenten zuzugreifen, stellen Sie sicher, dass Ihr Tenant auf der Whitelist in der Konsole steht (siehe Dokumentation: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :  
  [https://**ihr-tenant-id**.shiva.cloud-temple.com/](https://**ihr-tenant-id**.shiva.cloud-temple.com/)  
  
- __OpenShift UI__ :  
  [https://ui-ocp01-**ihr-id**.paas.cloud-temple.com/](https://ui-ocp01-**ihr-id**.paas.cloud-temple.com/)  
  
- __Externe API__ :  
  [https://api-ocp01-**ihr-id**.paas.cloud-temple.com](https://api-ocp01-**ihr-id**.paas.cloud-temple.com)  
  
- __GitOps (ARGOCD)__ :  
  [https://gitops-ocp01-**ihr-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**ihr-id**.paas.cloud-temple.com/applications)  
  
#### Verbindung zum Cluster über CLI

Um sich über die Befehlszeile (CLI) zu verbinden, verwenden Sie folgenden Befehl:

```bash
oc login https://api-ocp01-{ihr-id}.paas.cloud-temple.com/ --web
```

#### Zugriff auf das Register

Um auf das Register zuzugreifen, melden Sie sich mit den folgenden Befehlen an:

```bash
oc login https://api-ocp01-{ihr-id}.paas.cloud-temple.com --web
docker login -u {ihr-benutzer} -p $(oc whoami -t) registry-ocp01-{ihr-id}.paas.cloud-temple.com
```

Testen Sie anschließend den Aufbau und das Hochladen eines Docker-Images:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{ihr-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{ihr-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Konfiguration der Router und Load Balancer

Die Plattform bietet flexible Optionen für das __Routing des Datenverkehrs__ und das __Load Balancing__:

- Standardmäßig werden private Load Balancer für Routes und Ingresses verwendet.  
- Domains:  
  - `*.apps-priv-ocp01-{ihr-id}.paas.cloud-temple.com`  
  - `*.apps-ocp01-{ihr-id}.paas.cloud-temple.com`  

Stellen Sie sicher, dass Ihre Routes oder Ingresses mit den passenden Labels oder Ingress-Klassen konfiguriert sind, um korrektes Routing zu gewährleisten.

Beispiel:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS-Interkonnektivität

Die Netzwerkkonfigurationen spielen eine entscheidende Rolle für die Sicherung der Kommunikation mit OpenShift.

- __Interkonnektivitätsnetz__ : 100.67.0.0/28  
- __VIP des privaten Load Balancers__ : 100.67.0.3  

Stellen Sie sicher, dass Ihre Firewall eine dedizierte Schnittstelle hat und den Verkehr zwischen den angegebenen Netzwerken zulässt.