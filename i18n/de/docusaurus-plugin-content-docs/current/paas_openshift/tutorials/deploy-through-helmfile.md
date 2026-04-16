---
title : Deploying through HelmFile
---

# Mit Helmfile deployen

---

## Ziele

Das Hauptziel dieses Tutorials ist es zu zeigen, wie Anwendungen auf unserer OpenShift PaaS mithilfe von **Helmfile** in der Orchestrierung mehrerer Helm-Charts bereitgestellt werden können.

Den Front-End-Dienst über HTTP/HTTPS freigeben.

## Bekannte Einschränkungen

Der Kontext dieser Demonstration ist wie folgt:

- Einhaltung der OpenShift-Beschränkungen **(SCC restricted-V2)**.
- Bereitstellung ausschließlich von **nicht privilegierten Containern** (UID > 30000).
- Keine Verwendung von **benutzerdefinierten CRDs**.
- Kein Zugriff auf die Plattformrolle als **cluster-admin**.
- Keine bereichsweite Bereitstellung auf Clusterebene (**clusterweite Installation**).
- Keine **Namespace-Erstellung** über Helmfile (um Berechtigungskonflikte zu vermeiden).

## Highlights

- Demonstration der Bereitstellung eines Front-Ends (Nginx) und eines Back-Ends (PostgreSQL) mithilfe von Helmfile.

## Softwareversionen

- OpenShift CLI : 4.17.6  
- Helm : v3.16.3  
- Helmfile : v0.169.2  
- OpenShift : v4.15  
- PostgreSQL : v17.2.0-debian-12-r5  
- Nginx : v1.27.3  

---

## Voraussetzungen

Vor Beginn dieser Demonstration stellen Sie sicher, dass Sie die folgenden Werkzeuge und Ressourcen haben:

1. **CLI-Tools**  
   - **OpenShift CLI (`oc`)** : [Dokumentation](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
   - **Helm** : [Dokumentation](https://helm.sh/docs/)  
   - **Helmfile** : [Dokumentation](https://helmfile.readthedocs.io/en/latest/)

2. **OpenShift-Umgebung**

   - Ein funktionsfähiges OpenShift-Cluster, das von Cloud Temple verwaltet wird.

3. **Zugriff und Berechtigungen**  
   - Kundenadmin-Rolle zur Erstellung von Projekten und Bereitstellung von Ressourcen.

---

## Demonstrationsplan

### Überblick über die Schritte

1. Vorbereitung der Umgebung und Tools.  
2. Bereitstellung von Anwendungen mit Helmfile:  
   - **nginx**: Ein einfacher Webserver.  
   - **PostgreSQL**: Ein Datenbankserver.  
3. Überprüfung der Bereitstellung:  
   - Bestätigen, dass die rootlosen Konfigurationen angewendet werden.  
   - Testen der Funktionalität der Anwendungen.  
4. Erkundung von fortgeschrittenen Anwendungsfällen und Erweiterungen.  

---

## Notwendige Dateien

Um zu beginnen, benötigen Sie unser **Demonstrationsrepository**

- Holen Sie es sich [hier](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) im Verzeichnis `/examples/deploy-through-helmfile/`.

Dort finden Sie drei Dateien:

- `Helmfile.yaml`: Bereitstellungsmanifest, das Helmfile ermöglicht, die Bereitstellung der Helm-Charts zu definieren und zu orchestrieren.  
- `nginx-values.yaml`: Gibt die Konfiguration und das Verhalten von Nginx an.  
- `postgres-values.yaml`: Gibt die Konfiguration und das Verhalten von PostgreSQL an.  

---

### `Helmfile.yaml`

Die Hauptkonfigurationsdatei von Helmfile.  
Es definiert die Repositories, Helm-Charts und benutzerdefinierten Werte für jede Anwendung.

#### Analyse Zeile für Zeile

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Beschreibung**: Legt das Standardverhalten der über Helmfile ausgeführten Helm-Befehle fest.
- **Detail**:
  - `createNamespace: false`: Verhindert, dass Helm während der Bereitstellung versucht, Namespaces zu erstellen.
- **Auswirkung**:
  - Stellt sicher, dass der Namespace vor der Bereitstellung der Charts existieren muss.
  - Reduziert Fehler in Umgebungen mit eingeschränkten Berechtigungen.

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Beschreibung**: Definiert die Helm-Repositories, die die benötigten Charts enthalten.
- **Detail**:
  - `name`: Alias des Helm-Repositories.
  - `url`: URL des Bitnami-Repositories, das häufig verwendete Charts enthält, die mit OpenShift kompatibel sind.

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Beschreibung**: Definiert eine Helm-Anwendung namens **nginx**.
- **Detail**:
  - `name`: Name des Helm-Releases.
  - `namespace`: Kubernetes-Namespace, in dem diese Anwendung bereitgestellt wird.
  - `chart`: Verwendetes Helm-Chart, hier `bitnami/nginx`, das vom Bitnami-Repository abgerufen wurde.
  - `values`: YAML-Datei, die spezifische Konfigurationen für die Bereitstellung enthält, hier `nginx-values.yaml`.

---

### `nginx-values.yaml`

Konfigurationsdatei für die Bereitstellung von **Nginx**.

---

### `postgres-values.yaml`

Gibt die Konfiguration für die Bereitstellung von **PostgreSQL** an.

---

## Bereitstellungsablauf

### 1. Installieren der Voraussetzungen

Stellen Sie sicher, dass alle in der Software-Sektion erwähnten Tools installiert sind.  
Befolgen Sie gegebenenfalls die folgenden Anleitungen:

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Anmeldung am OpenShift-Cluster

Melden Sie sich mit folgendem Befehl bei Ihrem OpenShift-Cluster an:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Achtung**:
> Ändern Sie `--server=url` in die URL Ihrer Cloud Temple PaaS-Instanz.

---

### 3. Erstellen eines dedizierten Namespace

Dieser Namespace isoliert die Demonstrationsressourcen:

```bash
oc new-project poc-helmfile
```

---

### 4. Bereitstellen der Anwendungen mit Helmfile

Verwenden Sie den folgenden Befehl:

```bash
helmfile sync
```

---

### 5. Überprüfung der Bereitstellung

- **Pods überprüfen**:

```bash
oc get pods -n poc-helmfile
```

---

### 6. Testen der Dienste

Stellen Sie die bereitgestellten Dienste bereit, um deren Erreichbarkeit und Funktionalität zu testen.

#### 1. Routen erstellen

Stellen Sie den Nginx-Dienst bereit, indem Sie HTTP- oder HTTPS-Routen konfigurieren:

- **Für HTTPS**:

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Für HTTP**:

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Ein Label für die öffentliche Bereitstellung hinzufügen

Fügen Sie dem Router ein spezifisches Label hinzu, damit Ihr Dienst öffentlich zugänglich ist:

- Für die HTTPS-Route:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Für die HTTP-Route:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Diese Schritte gewährleisten, dass Ihre Routen korrekt bereitgestellt werden.

---

### 7. Überprüfen der Routen und Zugreifen auf die Anwendungen

#### 1. Liste der verfügbaren Routen

Überprüfen Sie, ob die Routen korrekt erstellt wurden:

```bash
oc get routes -n poc-helmfile
```

Beispielausgabe:

| Name        | Host/Port                                                                      | Service | Port | TLS-Terminierung | Label                                     |
|-------------|--------------------------------------------------------------------------------|---------|------|------------------|-------------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com          | nginx   | 8080 | Keine           | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com      | nginx   | 8080 | Edge (TLS)      | `ct-router-type=public`                   |

#### 2. Zugriff auf die Anwendungen

Verwenden Sie die in der Spalte „Host/Port“ aufgeführten URLs, um auf die Anwendungen zuzugreifen. Hier ist ein Beispiel:

- Für HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Für HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Sie sollten eine Webserver-Antwort vom **Nginx-Front-End** sehen, das bereitgestellt wurde.

---

## Validierungskriterien

Um den Erfolg dieser Demonstration sicherzustellen, überprüfen Sie die folgenden Punkte:

1. **Beide Anwendungen laufen fehlerfrei**.
2. Die Pods verwenden UID > 30000, gemäß den rootlosen Containerbeschränkungen.
3. Keine benutzerdefinierten CRDs wurden bereitgestellt.
4. Die bereitgestellten Dienste sind über ihre definierten Routen zugänglich (prüfen Sie Nginx über HTTP und HTTPS).

---

## Fazit

Sie haben nun ein vollständiges Beispiel für die Bereitstellung von Front-End- und Back-End-Anwendungen auf OpenShift mit Helmfile. Diese Methode bietet eine modulare und robuste Verwaltung komplexer Umgebungen.

Sie beherrschen jetzt die Bereitstellung über **Helmfile** auf OpenShift in einer von Cloud Temple verwalteten Umgebung. 🚀
