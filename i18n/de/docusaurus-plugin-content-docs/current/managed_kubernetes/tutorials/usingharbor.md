---
title: Harbor verwenden
---

Harbor ist eine OCI-Artefakt-Registry (Container-Images, Helm-Charts, SBOMs, Signaturen usw.), die eine feingranulare Projektverwaltung, Zugriffskontrolle, Schwachstellen-Scans, Retentionsrichtlinien und die Verwaltung von Signaturen bietet. Dieser Leitfaden erklärt, wie Sie Harbor mit Cloud Temple Managed Kubernetes verwenden, von der Verbindung zur Registry bis zur Integration in Ihre Kubernetes-Bereitstellungen und CI/CD-Pipelines.

>ℹ️
In diesem Leitfaden ersetzen Sie die folgenden Variablen durch Ihre Werte:

- `<IDENTIFIANT>` : Kennung Ihres Clusters (z. B. `ctodev`)
- `<HARBOR_URL>` : Öffentliche Harbor-URL, die wie folgt aufgebaut ist: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (z. B. `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : Name Ihres Harbor-Projekts
- `<NAMESPACE>` : Ziel-Kubernetes-Namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : Anmeldeinformationen eines Harbor-Robot-Accounts

## Voraussetzungen

- Zugriff auf die Konsole und den Managed Kubernetes-Dienst
- Ein bestehendes Harbor-Projekt (oder Berechtigungen zur Erstellung eines neuen)
- Lokal installierte Tools:
  - Docker oder Podman
  - kubectl (auf Ihrem Cluster konfiguriert)
  - Helm v3.8+ (OCI-Unterstützung)
  - Optional: `cosign` für Image-Signaturen
- Ausgehender Netzwerkzugriff zu `<HARBOR_URL>` über HTTPS (443)
- Keine zusätzlichen Zertifikate erforderlich: Das TLS-Zertifikat von Harbor ist öffentlich und allgemein vertraut

## Wesentliche Konzepte

- Projekt: logischer Raum (öffentlich oder privat), der Repositories enthält.
- Repository: Sammlung von Tags für ein bestimmtes Image (`<PROJET>/app-web:1.0.0`).
- Robot-Accounts: technische Identitäten mit eingeschränkten Rechten, vorgesehen für CI/CD.
- Schwachstellen-Scans: automatische Analyse (z. B. Trivy) beim Upload und auf Anfrage.
- Richtlinien: Tag-Immutabilität, Retention, Sicherheitsregeln.
- OCI-Artefakte: Images, Helm-Charts (OCI), SBOM, Signaturen.

## Anmeldung beim Registry (Docker / Podman)

Für CI/CD-Operationen sollte vorzugsweise ein **Robot-Konto** verwendet werden, das an das Projekt gebunden ist.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Benutzer: `<ROBOT_USERNAME>` (z. B. `robot$monprojet+pusher`)
- Passwort: `<ROBOT_TOKEN>`

>ℹ️[Zertifikate]
>Die von Cloud Temple verwaltete Harbor-Instanz verfügt über ein öffentlich anerkanntes Zertifikat. Eine zusätzliche CA-Konfiguration ist in Docker oder Podman in der Regel nicht erforderlich.

## Ein Projekt erstellen

Über die Harbor-UI:

- Projects > New Project
- Name: `<PROJET>`, Sichtbarkeit: Private (empfohlen)
- Optionen: Tag-Immutabilität aktivieren, automatisches Scannen beim Push, usw.

>ℹ️[Best Practices]
>
>- Ein Projekt pro Anwendung oder pro funktionalem Bereich.
>- Rollen einschränken (maintainer, developer, guest).
>- Automatisches Scannen und Retention-Richtlinien aktivieren.

## Ein Image pushen

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
- Semantische Tags: `1.2.3`, `1.2`, `latest` (verwenden Sie `latest` mit Vorsicht)

## Ein Image ziehen

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Überprüfen Sie die Scanergebnisse und die Signatur (falls aktiviert) vor der Promotion in die Produktionsumgebung.

## Images in Kubernetes verwenden

### 1) Ein Pull-Secret erstellen

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

>ℹ️Der Parameter --docker-email ist in neueren Versionen von kubectl nicht mehr erforderlich (und kann ignoriert werden).

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

### 3) Pull aus dem Cluster testen (optional)

Überprüfen Sie kurz, ob der Knoten Ihr Image mit dem Secret ziehen kann:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Für eine Promotion in die Produktion sollten Sie die Verwendung eines Digests bevorzugen:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Roboter-Konten und Berechtigungen

- Projekte > `<PROJET>` > Roboter-Konten > Neuer Roboter
- Scopes: auf die erforderlichen Aktionen beschränken (`pull` für Runtime, `push` für CI)
- Ablauf: eine Dauer und einen Rotationsprozess festlegen
- Token als Secret speichern (Kubernetes/CI)

>⚠[Moindre privilège] : Verwenden Sie keine persönlichen Konten für Ihre Pipelines. Bevorzugen Sie einen Roboter pro Projekt, ggf. sogar pro Umgebung.

## Schwachstellen-Scans

- „Scan on push“ auf Projektebene aktivieren
- Bei Bedarf über die UI oder die API auslösen
- Richtlinien konfigurieren: Pull blockieren, wenn Schweregrad >= `High` (gemäß Governance)

Sie können die Berichte (JSON) exportieren oder die betroffenen CVEs und Schichten anzeigen.

## Aufbewahrung und Unveränderlichkeit

- Aufbewahrung: Beibehalten, zum Beispiel, der `N` letzten Tags, die einem Muster entsprechen (z. B. `release-*`)
- Unveränderlichkeit: Verhindern des Überschreibens bestehender Tags
- Garbage Collection: Geplant durch die Harbor-Administration (löscht verwaiste Blobs)

Diese Mechanismen reduzieren die Speicherkosten und stärken die Nachverfolgbarkeit.

## Helm Charts (OCI)

Helm v3.8+ unterstützt OCI nativ.

```bash
# Connexion
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Packaging du chart
helm package charts/myapp

# Push du chart
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Signaturen und SBOM (Supply Chain)

Mit `cosign`:

```bash
# Login (si nécessaire pour fetch public key dans Harbor)
cosign login <HARBOR_URL>

# Signer une image (clé locale ou KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Vérifier la signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

>ℹ️Bei älteren Versionen von cosign kann es erforderlich sein, COSIGN_EXPERIMENTAL=1 zu exportieren.


Harbor kann Attestationen (Signaturen, SBOM) anzeigen und Signaturrichtlinien durchsetzen.

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
  - Berechtigungen des Robot-Accounts für das Projekt und/oder den Repository-Namen überprüfen
- `name unknown` / `manifest unknown`
  - Projekt existiert nicht, Repository falsch geschrieben, Tag existiert nicht
- `x509: certificate signed by unknown authority`
  - Zertifikatspeicher des Runners aktualisieren (ca-certificates), prüfen, ob kein TLS-Intercepting-Proxy vorhanden ist; CA des Proxys bei Bedarf hinzufügen und/oder Systemuhr synchronisieren
- 401/403 beim Pull in Kubernetes
  - Secret `imagePullSecrets` fehlt oder Anmeldeinformationen sind abgelaufen
- `413 Request Entity Too Large`
  - Bildgröße zu groß im Vergleich zur Konfiguration des Ingress/Registry; Bild optimieren oder Konfiguration anpassen (via support Cloud Temple)

## Best Practices

- Standardmäßig private Projekte, Trennung von dev/preprod/prod
- Dedizierte Service-Accounts, regelmäßige Token-Rotation
- Unveränderlichkeit von Tags und Promotion über Digest
- Scan-Richtlinie: definierte Schweregradschwellenwerte und dokumentierte Remediation
- Strikte Aufbewahrung, geplante Löschung veralteter Artefakte
- Protokollierung/Audit: Export und Aufbewahrung von Zugriffs-/Aktivitätslogs
- Integration von SBOM und Signaturen für die Lieferkette