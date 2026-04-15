---
title: Harbor verwenden
---

Harbor ist eine OCI-Artefakt-Registry (Container-Images, Helm Charts, SBOM, Signaturen usw.) mit detaillierter Projektverwaltung, Zugangskontrolle, Schwachstellen-Scans, Aufbewahrungsrichtlinien und Signaturverwaltung. Dieser Leitfaden erklärt, wie Sie Harbor mit Cloud Temple Managed Kubernetes verwenden – von der Verbindung zur Registry bis hin zur Integration in Ihre Kubernetes-Deployments und CI/CD-Pipelines.

:::note
Ersetzen Sie in diesem Leitfaden die folgenden Variablen durch Ihre eigenen Werte:

- `<IDENTIFIANT>` : Ihr Cluster-Code (z.B.: `ctodev`)
- `<HARBOR_URL>` : Öffentliche Harbor-URL, die folgendermaßen aufgebaut wird: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (z.B.: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : Name Ihres Harbor-Projekts
- `<NAMESPACE>` : Ziel-Kubernetes-Namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : Anmeldedaten eines Harbor-Robot-Kontos

:::

## Voraussetzungen

- Zugang zur Konsole und zum Managed Kubernetes-Dienst
- Ein bestehendes Harbor-Projekt (oder Rechte zum Erstellen eines Projekts)
- Lokal installierte Werkzeuge:
  - Docker oder Podman
  - kubectl (auf Ihrem Cluster konfiguriert)
  - Helm v3.8+ (OCI-Unterstützung)
  - Optional: `cosign` für Image-Signaturen
- Ausgehender Netzwerkzugang zu `<HARBOR_URL>` über HTTPS (443)
- Keine zusätzlichen Zertifikate erforderlich: Das TLS-Zertifikat von Harbor ist öffentlich und vertrauenswürdig

## Grundlegende Konzepte

- Projekt: Logischer Bereich (öffentlich oder privat), der Repositories enthält.
- Repository: Sammlung von Tags für ein bestimmtes Image (`<PROJET>/app-web:1.0.0`).
- Robot-Konten: Technische Identitäten mit eingeschränkten Rechten, für CI/CD bestimmt.
- Schwachstellen-Scans: Automatische Analyse (z.B.: Trivy) beim Upload und auf Anfrage.
- Richtlinien: Tag-Unveränderlichkeit, Aufbewahrung, Sicherheitsregeln.
- OCI-Artefakte: Images, Helm Charts (OCI), SBOM, Signaturen.

## Verbindung zur Registry (Docker / Podman)

Bevorzugen Sie für CI/CD-Operationen ein **Robot-Konto**, das dem Projekt zugeordnet ist.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Benutzer: `<ROBOT_USERNAME>` (z.B.: `robot$meinprojekt+pusher`)
- Passwort: `<ROBOT_TOKEN>`

:::tip Zertifikate
Die von Cloud Temple verwaltete Harbor-Instanz verwendet ein öffentlich vertrauenswürdiges Zertifikat. In der Regel ist keine zusätzliche CA-Konfiguration in Docker oder Podman erforderlich.
:::

## Ein Projekt erstellen

Über die Harbor-UI:

- Projects > New Project
- Name: `<PROJET>`, Sichtbarkeit: Private (empfohlen)
- Optionen: Tag-Unveränderlichkeit aktivieren, Auto-Scan on Push usw.

:::info Bewährte Methoden

- Ein Projekt pro Anwendung oder pro Funktionsbereich.
- Rollen einschränken (maintainer, developer, guest).
- Auto-Scan und Aufbewahrungsrichtlinien aktivieren.

:::

## Ein Image pushen

Beispiel mit Docker:

```bash
# Lokal bauen
docker build -t app-web:1.0.0 .

# Tag zu Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Pushen
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Empfohlene Organisation:

- `<PROJET>/<service>:<version>` (z.B.: `payments/api:2.3.4`)
- Tag-Unveränderlichkeit, um Überschreibungen zu verhindern
- Semantische Tags: `1.2.3`, `1.2`, `latest` (verwenden Sie `latest` mit Bedacht)

## Ein Image pullen

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Überprüfen Sie die Scan-Ergebnisse und die Signatur (falls aktiviert), bevor Sie in die Produktion übergehen.

## Images in Kubernetes verwenden

### 1) Ein Pull-Secret erstellen

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
Der Parameter --docker-email ist in neueren Versionen von kubectl nicht mehr erforderlich (und kann weggelassen werden).
:::

### 2) Das Secret in Ihren Workloads referenzieren

- Über den ServiceAccount:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: <NAMESPACE>
imagePullSecrets:
  - name: harbor-pull-secret
```

- Oder direkt im Pod/Deployment:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-web
  namespace: <NAMESPACE>
spec:
  replicas: 2
  selector:
    matchLabels:
      app: app-web
  template:
    metadata:
      labels:
        app: app-web
    spec:
      imagePullSecrets:
        - name: harbor-pull-secret
      containers:
        - name: app-web
          image: <HARBOR_URL>/<PROJET>/app-web:1.0.0
          ports:
            - containerPort: 8080
```

### 3) Den Pull vom Cluster aus testen (optional)

Überprüfen Sie schnell, ob der Knoten Ihr Image mit dem Secret pullen kann:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Für eine Produktions-Promotion empfiehlt sich die Verwendung eines Digests:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Robot-Konten und Berechtigungen

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: auf die notwendigen Aktionen beschränken (`pull` für Runtime, `push` für CI)
- Ablauf: Dauer und Rotationsprozess festlegen
- Token als Secret speichern (Kubernetes/CI)

:::caution Prinzip der geringsten Rechte
Verwenden Sie keine persönlichen Konten für Ihre Pipelines. Bevorzugen Sie einen Robot pro Projekt oder sogar pro Umgebung.
:::

## Schwachstellen-Scans

- „Scan on push" auf Projektebene aktivieren
- Auf Anfrage über die UI oder API auslösen
- Richtlinien festlegen: Pull blockieren, wenn Schweregrad >= `High` (je nach Governance)

Sie können Berichte (JSON) exportieren oder die CVEs und betroffenen Schichten anzeigen.

## Aufbewahrung und Unveränderlichkeit

- Aufbewahrung: z.B. die letzten `N` Tags behalten, die einem Muster entsprechen (z.B.: `release-*`)
- Unveränderlichkeit: Überschreiben bestehender Tags verhindern
- Garbage Collection: vom Harbor-Administrator geplant (entfernt verwaiste Blobs)

Diese Mechanismen reduzieren die Speicherkosten und stärken die Rückverfolgbarkeit.

## Helm Charts (OCI)

Helm v3.8+ unterstützt OCI nativ.

```bash
# Anmeldung
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Chart verpacken
helm package charts/myapp

# Chart pushen
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Signaturen und SBOM (Supply Chain)

Mit `cosign`:

```bash
# Anmeldung (falls nötig, um den öffentlichen Schlüssel in Harbor abzurufen)
cosign login <HARBOR_URL>

# Ein Image signieren (lokaler Schlüssel oder KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Die Signatur überprüfen
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
Bei älteren Versionen von cosign kann es notwendig sein, COSIGN_EXPERIMENTAL=1 zu exportieren.
:::

Harbor kann Attestierungen (Signaturen, SBOM) anzeigen und Signaturrichtlinien durchsetzen.

## CI/CD-Integration

### GitLab CI-Beispiel

```yaml
stages: [build, push]

variables:
  HARBOR_URL: "<HARBOR_URL>"
  HARBOR_PROJECT: "<PROJET>"

build:
  stage: build
  image: docker:24
  services: [docker:24-dind]
  before_script:
    - echo "${ROBOT_TOKEN}" | docker login -u "${ROBOT_USERNAME}" --password-stdin "${HARBOR_URL}"
  script:
    - docker build -t app-web:${CI_COMMIT_SHORT_SHA} .
    - docker tag app-web:${CI_COMMIT_SHORT_SHA} ${HARBOR_URL}/${HARBOR_PROJECT}/app-web:${CI_COMMIT_SHORT_SHA}
    - docker push ${HARBOR_URL}/${HARBOR_PROJECT}/app-web:${CI_COMMIT_SHORT_SHA}
```

### GitHub Actions-Beispiel

```yaml
name: Build and Push
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: "<HARBOR_URL>"
          username: ${{ secrets.ROBOT_USERNAME }}
          password: ${{ secrets.ROBOT_TOKEN }}
      - uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          tags: |
            <HARBOR_URL>/<PROJET>/app-web:${{ github.sha }}
```

## Fehlerbehebung

- `denied: requested access to the resource is denied`
  - Rechte des Robot-Kontos für das Projekt und/oder den Repository-Namen überprüfen
- `name unknown` / `manifest unknown`
  - Nicht vorhandenes Projekt, falsch geschriebenes Repository, nicht vorhandener Tag
- `x509: certificate signed by unknown authority`
  - Zertifikatsspeicher des Runners aktualisieren (ca-certificates), das Fehlen eines TLS-abfangenden Proxys prüfen; falls nötig die CA des Proxys hinzufügen und/oder die Systemuhr synchronisieren
- 401/403 beim Pull in Kubernetes
  - `imagePullSecrets`-Secret fehlt oder Anmeldedaten sind abgelaufen
- `413 Request Entity Too Large`
  - Image-Größe zu groß für die Ingress/Registry-Konfiguration; Image optimieren oder Konfiguration anpassen (über Cloud Temple-Support)

## Bewährte Methoden

- Standardmäßig private Projekte, Trennung von dev/preprod/prod
- Dedizierte Robot-Konten, regelmäßige Token-Rotation
- Tag-Unveränderlichkeit und Promotion per Digest
- Scan-Richtlinie: Schweregrad-Schwellenwert und dokumentierte Behebung
- Strenge Aufbewahrung, geplante Löschung veralteter Artefakte
- Protokollierung/Auditing: Zugriffs-/Aktivitätsprotokolle exportieren und aufbewahren
- SBOM- und Signatur-Integration für die Software-Lieferkette
