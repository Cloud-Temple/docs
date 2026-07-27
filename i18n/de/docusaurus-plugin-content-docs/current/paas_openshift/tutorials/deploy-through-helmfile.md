---
title : Bereitstellen über HelmFile
---

# Bereitstellen mit Helmfile

---

## Ziele

Das Hauptziel dieses Tutorials ist es, zu zeigen, wie Anwendungen auf unserer OpenShift-PaaS mit **Helmfile** bereitgestellt werden, indem mehrere Helm-Charts gemeinsam orchestriert werden.

Stellen Sie den Frontend-Service über HTTP/HTTPS bereit.

## Bekannte Einschränkungen

Der Kontext dieser Demonstration ist wie folgt:

- Einhaltung der OpenShift-Einschränkungen **(SCC restricted-V2)**.
- Ausschließliches Deployment von **nicht privilegierten Containern** (UID > 30000).
- Keine Verwendung von **benutzerdefinierten CRDs**.
- Kein Zugriff auf die Plattformrolle als **cluster-admin**.
- Kein clusterweites Deployment (**clusterweite Installation**).
- Keine **Namespace-Erstellung** über Helmfile (um Berechtigungskonflikte zu vermeiden).

## Stärken

- Demonstration der Bereitstellung eines Frontends (Nginx) und eines Backends (PostgreSQL) mit Helmfile.

## Softwareversionen

- OpenShift CLI : 4.17.6  
- Helm : v3.16.3  
- Helmfile : v0.169.2  
- OpenShift : v4.15  
- PostgreSQL : v17.2.0-debian-12-r5  
- Nginx : v1.27.3  

---

## Voraussetzungen

Bevor Sie mit dieser Demonstration beginnen, stellen Sie sicher, dass Sie über die folgenden Tools und Ressourcen verfügen:

1. **CLI-Tools**  
   - **OpenShift CLI (`oc`)** : [Dokumentation](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
   - **Helm** : [Dokumentation](https://helm.sh/docs/)  
   - **Helmfile** : [Dokumentation](https://helmfile.readthedocs.io/en/latest/)

2. **OpenShift-Umgebung**

   - Ein funktionsfähiger OpenShift-Cluster, der von Cloud Temple verwaltet wird.  

3. **Zugriff und Berechtigungen**  
   - Administratorrolle für Kunden zum Erstellen von Projekten und Bereitstellen von Ressourcen.
  
---

## Demonstrationsplan

### Übersicht der Schritte

1. Umgebung und Tools vorbereiten.  
2. Anwendungen mit Helmfile bereitstellen:  
   - **nginx**: Ein einfacher Webserver.  
   - **PostgreSQL**: Ein Datenbankserver.  
3. Bereitstellung überprüfen:  
   - Sicherstellen, dass die rootless-Konfigurationen angewendet werden.  
   - Die Funktionalität der Anwendungen testen.  
4. Erweiterte Anwendungsfälle und Erweiterungen erkunden.  

---

## Erforderliche Dateien

Um zu beginnen, benötigen Sie unser **Demonstrations-Repository**

- Laden Sie es [ici](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) im Verzeichnis `/examples/deploy-through-helmfile/` herunter.

Dort finden Sie drei Dateien:

- `Helmfile.yaml` : Bereitstellungsmanifest, mit dem Helmfile die Bereitstellung von Helm-Charts definiert und orchestriert.  
- `nginx-values.yaml` : Legt die Konfiguration und das Verhalten von Nginx fest.  
- `postgres-values.yaml` : Legt die Konfiguration und das Verhalten von PostgreSQL fest.  

---

### `Helmfile.yaml`

Die Hauptkonfigurationsdatei für Helmfile.  
Sie definiert die Repositories, die Helm-Charts und die benutzerdefinierten Werte für jede Anwendung.

#### Zeilenweise Analyse

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Beschreibung** : Definiert das Standardverhalten der über Helmfile ausgeführten Helm-Befehle.
- **Details** :
  - `createNamespace: false` : Verhindert, dass Helm versucht, Namespaces während der Bereitstellung zu erstellen.  
- **Auswirkung** :
  - Stellt sicher, dass der Namespace vor der Bereitstellung der Charts vorhanden sein muss.  
  - Reduziert Fehler in Umgebungen mit eingeschränkten Berechtigungen.  

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Beschreibung** : Definiert die Helm-Repositories, die die erforderlichen Charts enthalten.  
- **Details** :  
  - `name` : Alias des Helm-Repositorys.  
  - `url` : URL des Bitnami-Repositorys, das häufig verwendete, mit OpenShift kompatible Charts enthält.  

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Beschreibung** : Definiert eine Helm-Anwendung mit dem Namen **nginx**.  
- **Details** :  
  - `name` : Name der Helm-Release.  
  - `namespace` : Kubernetes-Namespace, in dem diese Anwendung bereitgestellt wird.  
  - `chart` : Verwendetes Helm-Chart, hier `bitnami/nginx`, abgerufen aus dem Bitnami-Repository.  
  - `values` : YAML-Datei mit spezifischen Konfigurationen für die Bereitstellung, hier `nginx-values.yaml`.  

---

### `nginx-values.yaml`

Konfigurationsdatei für die Bereitstellung von **Nginx**.  

---

### `postgres-values.yaml`

Stellt die Konfiguration für die Bereitstellung von **PostgreSQL** bereit.

---

## Ablauf der Bereitstellung

### 1. Installieren der Voraussetzungen

Stellen Sie sicher, dass alle im Software-Abschnitt erwähnten Tools installiert sind.  
Folgen Sie bei Bedarf den folgenden Leitfäden:  

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Verbindung zum OpenShift-Cluster

Authentifizieren Sie sich bei Ihrem OpenShift-Cluster mit dem folgenden Befehl:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Achtung** :  
> Ersetzen Sie `--server=url` durch die URL Ihrer Cloud Temple PaaS-Instanz.

---

### 3. Dedizierten Namespace erstellen

Dieser Namespace isoliert die Demonstrationsressourcen :

```bash
oc new-project poc-helmfile
```

---

### 4. Bereitstellen von Anwendungen mit Helmfile

Verwenden Sie den folgenden Befehl:

```bash
helmfile sync
```

---

### 5. Überprüfung der Bereitstellung

- **Überprüfen Sie die Pods** :  

```bash
oc get pods -n poc-helmfile
```

---

### 6. Dienste testen

Machen Sie die bereitgestellten Dienste verfügbar, um ihre Erreichbarkeit und ordnungsgemäße Funktion zu testen.

#### 1. Routen erstellen

Stellen Sie den Nginx-Dienst durch Konfigurieren von HTTP- oder HTTPS-Routen bereit:

- **Für HTTPS** :

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Für HTTP** :

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Ein Label für die öffentliche Freigabe hinzufügen

Fügen Sie dem Router ein spezifisches Label hinzu, damit Ihr Dienst öffentlich zugänglich ist:

- Für die HTTPS-Route:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Für die HTTP-Route:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Diese Schritte stellen sicher, dass Ihre Routen korrekt freigegeben werden.

---

### 7. Routen überprüfen und auf Anwendungen zugreifen

#### 1. Liste der verfügbaren Routen

Überprüfen Sie, ob die Routen korrekt erstellt wurden:

```bash
oc get routes -n poc-helmfile
```

Beispielausgabe:

| Name        | Host/Port                                                                        | Service  | Port  | TLS-Terminierung | Label                                  |
|-------------|----------------------------------------------------------------------------------|----------|-------|------------------|----------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080  | Keine            | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080  | Edge (TLS)       | `ct-router-type=public`                   |

#### 2. Greifen Sie auf die Anwendungen zu

Verwenden Sie die in der Spalte „Host/Port“ aufgeführten URLs, um auf die Anwendungen zuzugreifen. Hier ein Beispiel:

- Für HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Für HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Sie sollten eine Webserver-Antwort vom bereitgestellten **Nginx-Frontend** erhalten.

---

## Validierungskriterien

Um den Erfolg dieser Demonstration zu gewährleisten, überprüfen Sie die folgenden Punkte:

1. **Beide Anwendungen laufen ohne Fehler**.  
2. Die Pods verwenden UIDs > 30000, entsprechend den Einschränkungen für rootless-Container.  
3. Es wurde keine benutzerdefinierte CRD bereitgestellt.  
4. Die bereitgestellten Dienste sind über ihre definierten Routen erreichbar (prüfen Sie Nginx über HTTP und HTTPS).  

---

## Fazit

Sie haben nun ein vollständiges Beispiel für die Bereitstellung von Frontend- und Backend-Anwendungen auf OpenShift mit Helmfile. Diese Methode bietet eine modulare und robuste Verwaltung komplexer Umgebungen.

Sie beherrschen nun die Bereitstellung über **Helmfile** auf OpenShift in einer von Cloud Temple verwalteten Umgebung. 🚀