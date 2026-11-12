---
title : Deployment über HelmFile
---

# Deployment mit Helmfile

---

## Ziele

Das Hauptziel dieses Tutorials ist es zu zeigen, wie man Anwendungen auf unserer OpenShift-PaaS mit **Helmfile** deployt, indem mehrere Helm-Charts gemeinsam orchestriert werden.

Stellen Sie den Front-End-Service über HTTP/HTTPS bereit.

## Bekannte Einschränkungen

Der Kontext dieser Demonstration ist wie folgt:

- Einhaltung der OpenShift-Einschränkungen **(SCC restricted-V2)**.
- Deployment ausschließlich von **nicht privilegierten Containern** (UID > 30000).
- Kein Einsatz von **benutzerdefinierten CRDs**.
- Kein Zugriff auf die Plattformrolle als **cluster-admin**.
- Kein Deployment auf Cluster-Ebene (**cluster-weite Installation**).
- Keine **Erstellung von Namespaces** über Helmfile (um Berechtigungskonflikte zu vermeiden).

## Vorteile

- Demonstration des Deployments eines Front-Ends (Nginx) und eines Back-Ends (PostgreSQL) mit Helmfile.

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
   - Client-Admin-Rolle zum Erstellen von Projekten und Deployen von Ressourcen.

---

## Demonstrationsplan

### Übersicht der Schritte

1. Umgebung und Tools vorbereiten.
2. Anwendungen mit Helmfile deployen:
   - **nginx** : Ein einfacher Webserver.
   - **PostgreSQL** : Ein Datenbankserver.
3. Deployment überprüfen:
   - Bestätigen, dass die Rootless-Konfigurationen angewendet wurden.
   - Die Funktionalität der Anwendungen testen.
4. Fortgeschrittene Anwendungsfälle und Erweiterungen erkunden.

---

## Erforderliche Dateien

Um zu beginnen, benötigen Sie unser **Demonstrations-Repository**

- Rufen Sie es [hier](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) im Verzeichnis `/examples/deploy-through-helmfile/` ab.

Dort finden Sie drei Dateien:

- `Helmfile.yaml` : Deployment-Manifest, mit dem Helmfile die Definition und Orchestrierung der Helm-Chart-Deployments steuert.
- `nginx-values.yaml` : Spezifiziert die Konfiguration und das Verhalten von Nginx.
- `postgres-values.yaml` : Spezifiziert die Konfiguration und das Verhalten von PostgreSQL.

---

### `Helmfile.yaml`

Die Hauptkonfigurationsdatei von Helmfile.
Sie definiert die Repositories, die Helm-Charts und die benutzerdefinierten Werte für jede Anwendung.

#### Zeilenweise Analyse

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Beschreibung** : Definiert das Standardverhalten der über Helmfile ausgeführten Helm-Befehle.
- **Detail** :
  - `createNamespace: false` : Verhindert, dass Helm versucht, Namespaces während des Deployments zu erstellen.
- **Auswirkung** :
  - Stellt sicher, dass der Namespace vor dem Start des Chart-Deployments existieren muss.
  - Reduziert Fehler in Umgebungen mit eingeschränkten Berechtigungen.

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Beschreibung** : Definiert die Helm-Repositories, die die erforderlichen Charts enthalten.
- **Detail** :
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
- **Detail** :
  - `name` : Name der Helm-Release.
  - `namespace` : Kubernetes-Namespace, in dem diese Anwendung deployed wird.
  - `chart` : Verwendetes Helm-Chart, hier `bitnami/nginx`, abgerufen aus dem Bitnami-Repository.
  - `values` : YAML-Datei mit spezifischen Konfigurationen für das Deployment, hier `nginx-values.yaml`.

---

### `nginx-values.yaml`

Konfigurationsdatei für das Deployment von **Nginx**.

---

### `postgres-values.yaml`

Bereitstellt die Konfiguration für das Deployment von **PostgreSQL**.

---

## Deployment-Ablauf

### 1. Voraussetzungen installieren

Stellen Sie sicher, dass alle in der Softwaresektion genannten Tools installiert sind.
Folgen Sie bei Bedarf den folgenden Anleitungen:

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Verbindung zum OpenShift-Cluster

Authentifizieren Sie sich bei Ihrem OpenShift-Cluster mit dem folgenden Befehl:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Hinweis**:
> Ersetzen Sie `--server=url` durch die URL Ihrer Cloud Temple PaaS-Instanz.

---

### 3. Dedizierten Namespace erstellen

Dieser Namespace isoliert die Demonstrationsressourcen:

```bash
oc new-project poc-helmfile
```

---

### 4. Anwendungen mit Helmfile deployen

Verwenden Sie den folgenden Befehl:

```bash
helmfile sync
```

---

### 5. Deployment überprüfen

- **Pods überprüfen** :

```bash
oc get pods -n poc-helmfile
```

---

### 6. Dienste testen

Stellen Sie die deployed Dienste bereit, um deren Erreichbarkeit und Funktionsfähigkeit zu testen.

#### 1. Erstellen von Routes

Stellen Sie den Nginx-Dienst bereit, indem Sie HTTP- oder HTTPS-Routes konfigurieren:

- **Für HTTPS** :

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Für HTTP** :

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Label für öffentliche Bereitstellung hinzufügen

Fügen Sie dem Router ein spezifisches Label hinzu, damit Ihr Dienst öffentlich zugänglich ist:

- Für die HTTPS-Route:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Für die HTTP-Route:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Diese Schritte stellen sicher, dass Ihre Routes korrekt bereitgestellt werden.

---

### 7. Routes überprüfen und auf die Anwendungen zugreifen

#### 1. Liste der verfügbaren Routes

Überprüfen Sie, ob die Routes korrekt erstellt wurden:

```bash
oc get routes -n poc-helmfile
```

Beispiel für die Ausgabe:

| Name        | Host/Port                                                                        | Service  | Port  | TLS-Auflösung | Label                                  |
|-------------|----------------------------------------------------------------------------------|----------|-------|---------------|----------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080  | Keine         | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080  | Edge (TLS)    | `ct-router-type=public`                   |

#### 2. Auf die Anwendungen zugreifen

Verwenden Sie die in der Spalte „Host/Port" aufgeführten URLs, um auf die Anwendungen zuzugreifen. Hier ein Beispiel:

- Für HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Für HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Sie sollten eine Webserver-Antwort vom deployed **Nginx-Front-End** sehen.

---

## Validierungskriterien

Um den Erfolg dieser Demonstration zu gewährleisten, überprüfen Sie die folgenden Punkte:

1. **Beide Anwendungen laufen ohne Fehler**.
2. Die Pods verwenden UIDs > 30000, gemäß den Einschränkungen der Rootless-Container.
3. Es wurden keine benutzerdefinierten CRDs deployed.
4. Die deployed Dienste sind über ihre definierten Routes erreichbar (prüfen Sie Nginx über HTTP und HTTPS).

---

## Fazit

Sie haben nun ein vollständiges Beispiel für das Deployment von Front-End- und Back-End-Anwendungen auf OpenShift mit Helmfile. Diese Methode bietet eine modulare und robuste Verwaltung komplexer Umgebungen.

Sie beherrschen nun das Deployment über **Helmfile** auf OpenShift in einer von Cloud Temple verwalteten Umgebung. 🚀
