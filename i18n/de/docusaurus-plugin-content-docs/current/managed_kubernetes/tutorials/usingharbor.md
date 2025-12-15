---
title: Harbor verwenden
---

Harbor ist ein OCI-Artifact-Registry (Containerimages, Helm-Charts, SBOMs, Signaturen usw.), die eine fein abgestimmte Projektverwaltung, Zugriffssteuerung, Vulnerabilitätsscans, Retentionsrichtlinien und Signaturverwaltung bietet. Dieser Leitfaden erklärt, wie Sie Harbor mit Cloud Temple Managed Kubernetes verwenden, von der Verbindung zur Registry bis hin zur Integration in Ihre Kubernetes-Deployment und CI/CD-Pipelines.

:::note
Ersetzen Sie in diesem Leitfaden die folgenden Variablen durch Ihre eigenen Werte:

- `<IDENTIFIANT>`: Cluster-Code (z. B. `ctodev`)
- `<HARBOR_URL>`: Öffentliche Harbor-URL, die wie folgt aufgebaut ist: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (z. B. `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>`: Name Ihres Harbor-Projekts
- `<NAMESPACE>`: Ziel-Kubernetes-Namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>`: Anmeldeinformationen eines Harbor-Robot-Accounts

:::

## Voraussetzungen

- Zugriff auf die Console und den Managed Kubernetes-Service
- Ein vorhandenes Harbor-Projekt (oder Berechtigungen zum Erstellen eines neuen)
- Lokal installierte Tools:
  - Docker oder Podman
  - kubectl (auf Ihrem Cluster konfiguriert)
  - Helm v3.8+ (OCI-Unterstützung)
  - Optional: `cosign` für Image-Signaturen
- Ausgehender Netzwerkzugriff auf `<HARBOR_URL>` über HTTPS (Port 443)
- Keine zusätzlichen Zertifikate erforderlich: Das TLS-Zertifikat von Harbor ist öffentlich und allgemein anerkannt

## Grundlegende Konzepte

- Projekt: logischer Bereich (öffentlich oder privat), der Repositories enthält.
- Repository: Sammlung von Tags für ein bestimmtes Image (`<PROJET>/app-web:1.0.0`).
- Robot-Konten: technische Identitäten mit eingeschränkten Berechtigungen, vorgesehen für CI/CD.
- Sicherheitsüberprüfungen: automatisierte Analyse (z. B. Trivy) beim Hochladen und auf Anfrage.
- Richtlinien: Unveränderlichkeit von Tags, Aufbewahrungsdauer, Sicherheitsregeln.
- OCI-Artefakte: Images, Helm-Charts (OCI), SBOMs, Signaturen.

## Verbindung zur Registry herstellen (Docker / Podman)

Bevorzugen Sie ein **Robot-Konto**, das mit dem Projekt verknüpft ist, für CI/CD-Operationen.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- User: `<ROBOT_USERNAME>` (z. B. `robot$meinprojekt+pusher`)
- Passwort: `<ROBOT_TOKEN>`

:::tip Zertifikate
Die von Cloud Temple betriebene Harbor-Instanz verwendet ein öffentlich anerkanntes Zertifikat. Eine zusätzliche CA-Konfiguration ist in Docker oder Podman normalerweise nicht erforderlich.
:::

## Ein Projekt erstellen

Über die Harbor-UI:

- Projekte > Neues Projekt
- Name: `<PROJEKT>`, Sichtbarkeit: Privat (empfohlen)
- Optionen: Tag-Unveränderlichkeit aktivieren, Auto-Scan bei Push, usw.

:::info Best Practices

- Ein Projekt pro Anwendung oder Funktionsbereich.
- Rollen einschränken (Maintainer, Developer, Guest).
- Automatische Scans und Aufbewahrungsrichtlinien aktivieren.

:::

## Ein Image pushen

Beispiel mit Docker:

```bash
# Lokales Erstellen
docker build -t app-web:1.0.0 .

# Tag to Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Push
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Empfohlene Struktur:

- `<PROJET>/<service>:<version>` (z. B. `payments/api:2.3.4`)
- Unveränderlichkeit der Tags, um Überschreibungen zu vermeiden
- Semantische Tags: `1.2.3`, `1.2`, `latest` (verwenden Sie `latest` mit Vorsicht)

## Ein Image pullen

```bash
docker pull <HARBOR_URL>/<PROJECT>/app-web:1.0.0
```

Überprüfen Sie die Scan-Ergebnisse und die Signatur (falls aktiviert) vor der Promotion in die Produktion.

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
Der Parameter --docker-email ist in neueren kubectl-Versionen nicht mehr erforderlich (und kann ignoriert werden).
:::

### 2) Referenzieren des Geheimnisses in Ihren Workloads

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

### 3) Testen des Pulls vom Cluster aus (optional)

Stellen Sie schnell sicher, dass der Knoten Ihre Image mit dem Secret abrufen kann:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Für eine Promotion in die Produktion empfiehlt sich die Verwendung eines Digits:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Robot-Konten und Berechtigungen

- Projekte > `<PROJEKT>` > Robot-Konten > Neuer Robot
- Bereiche: auf notwendige Aktionen beschränken (`pull` für Runtime, `push` für CI)
- Ablauf: definieren Sie eine Dauer und einen Rotationsprozess
- Speichern Sie das Token sicher (Kubernetes/CI)

:::caution Least Privilege
Verwenden Sie keine persönlichen Konten für Ihre Pipelines. Bevorzugen Sie einen Robot pro Projekt oder sogar pro Umgebung.
:::

## Schwachstellen-Scans

- Aktivieren Sie "Scan on push" auf Projektebene
- Manuell über UI oder API auslösen
- Richtlinien konfigurieren: Pull blockieren, wenn Schweregrad >= `High` (gemäß Governance)

Sie können Berichte exportieren (JSON) oder betroffene CVEs und Layer anzeigen.

## Aufbewahrung und Unveränderlichkeit

- Aufbewahrung: Beibehaltung beispielsweise der letzten `N` Tags, die einem Muster entsprechen (z. B. `release-*`)
- Unveränderlichkeit: Verhinderung der Überschreibung vorhandener Tags
- Garbage Collection: Wird von der Harbor-Administration geplant (entfernt verwaiste Blobs)

Diese Mechanismen reduzieren die Speicherkosten und stärken die Nachvollziehbarkeit.

## Helm-Charts (OCI)

Helm ab Version 3.8+ unterstützt OCI nativ.

```bash
# Verbindung
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Packaging des Charts
helm package charts/myapp

# Push the chart
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Signaturen und SBOM (Lieferkette)

Mit `cosign`:

```bash
# Anmeldung (falls erforderlich, um öffentlichen Schlüssel in Harbor abzurufen)
cosign login <HARBOR_URL>

# Sign a container image (local key or KMS)
cosign sign <HARBOR_URL>/<PROJECT>/app-web:1.0.0

# Verify Signature
cosign verify <HARBOR_URL>/<PROJECT>/app-web:1.0.0
```

:::note
Bei älteren Versionen von cosign muss möglicherweise COSIGN_EXPERIMENTAL=1 exportiert werden.
:::

Harbor kann Attestierungen (Signaturen, SBOMs) anzeigen und Signaturrichtlinien durchsetzen.

## CI/CD-Integration

### GitLab CI Beispiel

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

### Beispiel GitHub Actions

```yaml
name: Build und Push
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

## Troubleshooting

- `denied: requested access to the resource is denied`
  - Überprüfen Sie die Berechtigungen des Robot-Kontos für das Projekt und/oder den Repository-Namen
- `name unknown` / `manifest unknown`
  - Projekt existiert nicht, Tippfehler im Repository-Namen oder Tag existiert nicht
- `x509: certificate signed by unknown authority`
  - Aktualisieren Sie den Zertifikatsspeicher des Runners (ca-certificates), prüfen Sie auf TLS-Proxy-Interception; fügen Sie ggf. die CA des Proxys hinzu und/oder synchronisieren Sie die Systemuhr
- 401/403 beim Pull in Kubernetes
  - Fehlendes `imagePullSecrets`-Secret oder abgelaufene Anmeldeinformationen
- `413 Request Entity Too Large`
  - Image-Größe zu groß im Vergleich zur Ingress/Registry-Konfiguration; Image optimieren oder Konfiguration anpassen (via Cloud Temple Support)

## Best Practices

- Standardmäßig private Projekte, Trennung von Dev/Preprod/Prod-Umgebungen
- Dedizierte Robot-Konten, regelmäßige Rotation von Tokens
- Unveränderliche Tags, Promotion via Digest
- Scan-Richtlinie: Schweregrad-Schwellenwert und dokumentierte Behebung
- Strenge Aufbewahrung, geplante Löschung veralteter Artefakte
- Logging/Auditing: Export und Aufbewahrung von Zugriffs-/Aktivitätsprotokollen
- SBOM-Integration und Signierung für die Integrität der Lieferkette
