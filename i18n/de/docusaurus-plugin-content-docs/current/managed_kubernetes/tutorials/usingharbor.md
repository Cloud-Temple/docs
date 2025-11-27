---
title: Harbor nutzen
---

Harbor ist eine OCI-Artefakt-Registry (Container-Images, Helm-Charts, SBOMs, Signaturen usw.), die eine detaillierte Projektverwaltung, Zugriffskontrolle, Schwachstellen-Scans, Aufbewahrungsrichtlinien und Signaturverwaltung bietet. Dieser Leitfaden erklärt, wie Sie Harbor mit Cloud Temple Managed Kubernetes nutzen können, von der Verbindung zur Registry bis zur Integration in Ihre Kubernetes-Deployments und CI/CD-Pipelines.

:::note
Ersetzen Sie in diesem Leitfaden die folgenden Variablen durch Ihre Werte:

- `<IDENTIFIANT>`: Ihr Cluster-Code (z. B.: `ctodev`)
- `<HARBOR_URL>`: öffentliche Harbor-URL, aufgebaut wie folgt: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (z. B.: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>`: Name Ihres Harbor-Projekts
- `<NAMESPACE>`: Ziel-Kubernetes-Namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>`: Anmeldedaten eines Harbor-Roboterkontos

:::

## Voraussetzungen

- Zugriff auf die Konsole und den Managed Kubernetes-Dienst
- Ein bestehendes Harbor-Projekt (oder Rechte, eines zu erstellen)
- Lokal installierte Tools:
  - Docker oder Podman
  - kubectl (auf Ihrem Cluster konfiguriert)
  - Helm v3.8+ (OCI-Support)
  - Optional: `cosign` für Image-Signaturen
- Ausgehender Netzwerkzugriff auf `<HARBOR_URL>` über HTTPS (443)
- Kein zusätzliches Zertifikat erforderlich: Das TLS-Zertifikat von Harbor ist öffentlich und anerkannt

## Wichtige Konzepte

- Projekt: logischer Raum (öffentlich oder privat), der Repositories enthält.
- Repository: Sammlung von Tags für ein bestimmtes Image (`<PROJET>/app-web:1.0.0`).
- Roboterkonten: technische Identitäten mit eingeschränkten Rechten, bestimmt für CI/CD.
- Schwachstellen-Scans: automatische Analyse (z. B. Trivy) beim Upload und auf Abruf.
- Richtlinien: Unveränderlichkeit von Tags, Aufbewahrung, Sicherheitsregeln.
- OCI-Artefakte: Images, Helm-Charts (OCI), SBOM, Signaturen.

## Verbindung zur Registry (Docker / Podman)

Bevorzugen Sie ein **Roboterkonto**, das dem Projekt für CI/CD-Operationen zugeordnet ist.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Benutzer: `<ROBOT_USERNAME>` (z. B.: `robot$meinprojekt+pusher`)
- Passwort: `<ROBOT_TOKEN>`

:::tip Zertifikate
Die von Cloud Temple verwaltete Harbor-Instanz verfügt über ein anerkanntes öffentliches Zertifikat. Normalerweise ist keine zusätzliche CA-Konfiguration in Docker oder Podman erforderlich.
:::

## Ein Projekt erstellen

Über die Harbor-Benutzeroberfläche:

- Projects > New Project
- Name: `<PROJET>`, Sichtbarkeit: Private (empfohlen)
- Optionen: Unveränderlichkeit von Tags aktivieren, Auto-Scan beim Push usw.

:::info Best Practices

- Ein Projekt pro Anwendung oder funktionalem Bereich.
- Rollen einschränken (Maintainer, Developer, Guest).
- Auto-Scan und Aufbewahrungsrichtlinien aktivieren.

:::

## Ein Image pushen

Beispiel mit Docker:

```bash
# Lokal bauen
docker build -t app-web:1.0.0 .

# Tag für Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Pushen
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Empfohlene Organisation:

- `<PROJET>/<service>:<version>` (z. B.: `payments/api:2.3.4`)
- Unveränderlichkeit von Tags zur Vermeidung von Überschreibungen
- Semantische Tags: `1.2.3`, `1.2`, `latest` (verwenden Sie `latest` mit Vorsicht)

## Ein Image pullen

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
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

### 2) Das Secret in Ihren Workloads referenzieren

- Über das ServiceAccount:

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

### 3) Den Pull vom Cluster testen (optional)

Überprüfen Sie schnell, ob der Knoten Ihr Image mit dem Secret ziehen kann:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Für eine Promotion in die Produktion bevorzugen Sie die Verwendung eines Digests:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Roboterkonten und Berechtigungen

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: auf notwendige Aktionen beschränken (`pull` für Runtime, `push` für CI)
- Ablauf: Dauer und Rotationsprozess definieren
- Token als Secret speichern (Kubernetes/CI)

:::caution Minimale Rechte
Verwenden Sie keine persönlichen Konten für Ihre Pipelines. Bevorzugen Sie einen Roboter pro Projekt oder sogar pro Umgebung.
:::

## Schwachstellen-Scans

- "Scan on push" auf Projektebene aktivieren
- Auf Abruf über die UI oder API auslösen
- Richtlinien konfigurieren: Pull blockieren, wenn Schweregrad >= `High` (gemäß Governance)

Sie können Berichte exportieren (JSON) oder CVEs und betroffene Layer anzeigen.

## Aufbewahrung und Unveränderlichkeit

- Aufbewahrung: zum Beispiel die letzten `N` Tags behalten, die einem Muster entsprechen (z. B.: `release-*`)
- Unveränderlichkeit: Überschreiben vorhandener Tags verhindern
- Garbage Collection: durch die Harbor-Administration geplant (löscht verwaiste Blobs)

Diese Mechanismen reduzieren Speicherkosten und stärken die Nachvollziehbarkeit.

## Helm-Charts (OCI)

Helm v3.8+ unterstützt OCI nativ.

```bash
# Anmeldung
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Chart-Paketierung
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
# Login (falls erforderlich, um Public Key von Harbor abzurufen)
cosign login <HARBOR_URL>

# Ein Image signieren (lokaler Schlüssel oder KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Signatur überprüfen
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
Bei älteren Versionen von cosign kann es erforderlich sein, COSIGN_EXPERIMENTAL=1 zu exportieren.
:::

Harbor kann Attestierungen (Signaturen, SBOM) anzeigen und Signaturrichtlinien durchsetzen.

## CI/CD-Integration

### Beispiel GitLab CI

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
  - Rechte des Roboterkontos am Projekt und/oder Repo-Namen überprüfen
- `name unknown` / `manifest unknown`
  - Projekt nicht vorhanden, Repo falsch geschrieben, Tag nicht vorhanden
- `x509: certificate signed by unknown authority`
  - Zertifikatsspeicher des Runners aktualisieren (ca-certificates), auf abfangenden TLS-Proxy prüfen; Proxy-CA falls nötig hinzufügen und/oder Systemuhr synchronisieren
- 401/403 beim Pull in Kubernetes
  - Secret `imagePullSecrets` fehlt oder Anmeldedaten abgelaufen
- `413 Request Entity Too Large`
  - Image-Größe zu groß für Ingress/Registry-Konfiguration; Image optimieren oder Konfiguration anpassen (über Cloud Temple-Support)

## Best Practices

- Projekte standardmäßig privat, Trennung Dev/Preprod/Prod
- Dedizierte Roboterkonten, regelmäßige Token-Rotation
- Unveränderlichkeit von Tags und Promotion per Digest
- Scan-Richtlinie: Schweregrad-Schwellenwert und dokumentierte Behebung
- Strenge Aufbewahrung, geplante Löschung veralteter Artefakte
- Protokollierung/Audit: Zugriffs-/Aktivitätsprotokolle exportieren und aufbewahren
- SBOM- und Signatur-Integration für Supply-Chain-Sicherheit
