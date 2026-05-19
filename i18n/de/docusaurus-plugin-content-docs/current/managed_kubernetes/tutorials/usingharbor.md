---
title: Harbor verwenden
---

Harbor ist eine OCI-Artefakt-Registry (Container-Images, Helm-Charts, SBOMs, Signaturen usw.), die eine feingranulare Projektverwaltung, Zugriffskontrollen, Schwachstellen-Scans, Aufbewahrungsrichtlinien und Signaturenverwaltung bietet. Dieser Leitfaden erläutert die Verwendung mit Cloud Temple Managed Kubernetes, von der Anmeldung an der Registry bis zur Integration in Ihre Kubernetes-Deployments und CI/CD-Pipelines.

:::note
Ersetzen Sie in diesem Leitfaden die folgenden Variablen durch Ihre Werte:

- `<IDENTIFIANT>` : Cluster-Code (z. B. `ctodev`)
- `<HARBOR_URL>` : Öffentliche Harbor-URL, die wie folgt aufgebaut ist: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (z. B. `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : Name Ihres Harbor-Projekts
- `<NAMESPACE>` : Ziel-Kubernetes-Namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : Anmeldeinformationen eines Harbor-Roboters

:::

## Voraussetzungen

- Zugriff auf die Konsole und den Managed Kubernetes-Dienst
- Ein vorhandenes Harbor-Projekt (oder Berechtigungen zum Erstellen eines neuen)
- Lokal installierte Tools:
  - Docker oder Podman
  - kubectl (auf Ihrem Cluster konfiguriert)
  - Helm v3.8+ (OCI-Unterstützung)
  - Optional: `cosign` für Image-Signaturen
- Ausgehender Netzwerkzugriff auf `<HARBOR_URL>` über HTTPS (443)
- Keine zusätzlichen Zertifikate erforderlich: Das TLS-Zertifikat von Harbor ist öffentlich und vertrauenswürdig

## Wesentliche Konzepte

- Projekt: logischer Bereich (öffentlich oder privat), der Repositories enthält.
- Repository: Sammlung von Tags für ein bestimmtes Image (`<PROJET>/app-web:1.0.0`).
- Robot-Konten: technische Identitäten mit eingeschränkten Berechtigungen, die für CI/CD vorgesehen sind.
- Schwachstellen-Scans: automatische Analyse (z. B. Trivy) beim Upload und auf Abruf.
- Richtlinien: Tag-Unveränderlichkeit, Aufbewahrungsregeln, Sicherheitsrichtlinien.
- OCI-Artefakte: Images, Helm-Charts (OCI), SBOM, Signaturen.

## Anmeldung bei der Registry (Docker / Podman)

Verwenden Sie für CI/CD-Operationen vorzugsweise ein **Robot-Konto**, das dem Projekt zugeordnet ist.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Benutzername: `<ROBOT_USERNAME>` (z. B. `robot$monprojet+pusher`)
- Passwort: `<ROBOT_TOKEN>`

:::tip[Zertifikate
]
Die von Cloud Temple verwaltete Harbor-Instanz verfügt über ein anerkanntes öffentliches Zertifikat. In der Regel ist keine zusätzliche CA-Konfiguration in Docker oder Podman erforderlich.
:::

## Projekt erstellen

Über die Harbor-UI:

- Projekte > Neues Projekt
- Name: `<PROJET>`, Sichtbarkeit: Private (recommandé)
- Optionen: Tag-Immutabilität aktivieren, Auto-Scan bei Push, usw.

:::info[Bonnes pratiques
]

- Ein Projekt pro Anwendung oder pro Geschäftsbereich.
- Rollen einschränken (maintainer, developer, guest).
- Auto-Scan und Aufbewahrungsrichtlinien aktivieren.

:::

## Image pushen

Beispiel mit Docker:

```bash
# Construire localement
docker build -t app-web:1.0.0 .

# Tag vers Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Pousser
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Empfohlene Organisation:

- `<PROJET>/<service>:<version>` (z. B. `payments/api:2.3.4`)
- Unveränderlichkeit der Tags, um Überschreibungen zu vermeiden
- Semantische Tags: `1.2.3`, `1.2`, `latest` (`latest` nur mit Vorsicht verwenden)

## Image herunterladen

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Prüfen Sie die Scan-Ergebnisse und die Signatur (falls aktiviert), bevor Sie in die Produktionsumgebung übernehmen.

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

### 3) Pull vom Cluster testen (optional)

Überprüfen Sie kurz, ob der Knoten Ihr Image mit dem Secret ziehen kann:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Für die Promotion in die Produktion bevorzugen Sie die Verwendung eines Digests:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Roboter-Konten und Berechtigungen

- Projekte > `<PROJET>` > Roboter-Konten > Neuer Roboter
- Scopes: auf die erforderlichen Aktionen beschränken (`pull` für Runtime, `push` für CI)
- Ablaufdatum: eine Dauer und einen Rotationsprozess festlegen
- Token geheim speichern (Kubernetes/CI)

:::caution[Prinzip der geringsten Rechte
]
Verwenden Sie keine persönlichen Konten für Ihre Pipelines. Bevorzugen Sie einen Roboter pro Projekt, ggf. sogar pro Umgebung.
:::

## Schwachstellen-Scans

- „Scan on Push“ auf Projektebene aktivieren
- Bei Bedarf über die UI oder API auslösen
- Richtlinien konfigurieren: Pull blockieren, wenn Schweregrad >= `High` (gemäß Governance)

Sie können die Berichte (JSON) exportieren oder die CVEs und betroffenen Schichten anzeigen.

## Aufbewahrung und Unveränderlichkeit

- Aufbewahrung: z. B. die letzten `N` Tags speichern, die einem Muster entsprechen (z. B. `release-*`)
- Unveränderlichkeit: das Überschreiben vorhandener Tags verhindern
- Garbage Collection: von der Harbor-Administration geplant (löscht verwaiste Blobs)

Diese Mechanismen senken die Speicherkosten und erhöhen die Nachverfolgbarkeit.

## Helm-Charts (OCI)

Helm v3.8+ unterstützt OCI nativ.

```bash
# Anmeldung
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Chart packen
helm package charts/myapp

# Chart pushen
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Installation
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Signaturen und SBOM (Supply Chain)

Mit `cosign`:

```bash
# Anmeldung (falls erforderlich, um den öffentlichen Schlüssel in Harbor abzurufen)
cosign login <HARBOR_URL>

# Image signieren (lokaler Schlüssel oder KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Signatur überprüfen
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
Bei älteren Versionen von cosign kann es erforderlich sein, COSIGN_EXPERIMENTAL=1 zu exportieren.
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
  - Berechtigungen des Robot-Accounts im Projekt und/oder des Repo-Namens überprüfen
- `name unknown` / `manifest unknown`
  - Projekt nicht vorhanden, Repo falsch geschrieben, Tag nicht vorhanden
- `x509: certificate signed by unknown authority`
  - Zertifikatsspeicher des Runners aktualisieren (ca-certificates), auf das Fehlen eines TLS-Intercepting-Proxy prüfen; bei Bedarf die CA des Proxies hinzufügen und/oder die Systemuhr synchronisieren
- 401/403 beim Pull in Kubernetes
  - Secret `imagePullSecrets` fehlt oder Zugangsdaten sind abgelaufen
- `413 Request Entity Too Large`
  - Image-Größe zu groß im Vergleich zur Ingress/Registry-Konfiguration; Image optimieren oder Konfiguration anpassen (via support Cloud Temple)

## Best Practices
- Projekte standardmäßig privat, Trennung von Dev/Preprod/Prod
- Dedizierte Roboterkonten, regelmäßige Token-Rotation
- Unveränderlichkeit von Tags, Promotion per Digest
- Scan-Richtlinie: Schweregrad-Schwellenwert und dokumentierte Remediation
- Strikte Aufbewahrungsrichtlinie, geplante Löschung veralteter Artefakte
- Protokollierung/Audit: Export und Aufbewahrung von Zugriffs-/Aktivitäts-Logs
- SBOM-Integration und Signaturen für die Lieferkette