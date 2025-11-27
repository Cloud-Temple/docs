---
title: Utilizzare Harbor
---

Harbor è un registro di artefatti OCI (immagini container, chart Helm, SBOM, firme, ecc.) che offre una gestione dettagliata dei progetti, controllo degli accessi, scansione delle vulnerabilità, policy di conservazione e gestione delle firme. Questa guida spiega come utilizzarlo con Cloud Temple Managed Kubernetes, dalla connessione al registro fino all'integrazione nei tuoi deployment Kubernetes e nelle pipeline CI/CD.

:::note
In questa guida, sostituisci le seguenti variabili con i tuoi valori:

- `<IDENTIFIANT>`: codice del tuo cluster (es: `ctodev`)
- `<HARBOR_URL>`: URL pubblico di Harbor costruito come segue: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (es: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>`: nome del tuo progetto Harbor
- `<NAMESPACE>`: namespace Kubernetes di destinazione
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>`: credenziali di un account robot Harbor

:::

## Prerequisiti

- Accesso alla Console e al servizio Managed Kubernetes
- Un progetto Harbor esistente (o diritti per crearne uno)
- Strumenti installati localmente:
  - Docker o Podman
  - kubectl (configurato sul tuo cluster)
  - Helm v3.8+ (supporto OCI)
  - Opzionale: `cosign` per la firma delle immagini
- Accesso di rete in uscita verso `<HARBOR_URL>` su HTTPS (443)
- Nessun certificato aggiuntivo richiesto: il certificato TLS di Harbor è pubblico e riconosciuto

## Concetti fondamentali

- Progetto: spazio logico (pubblico o privato) che contiene repository.
- Repository: collezione di tag per una data immagine (`<PROJET>/app-web:1.0.0`).
- Account robot: identità tecniche con privilegi limitati, destinate alla CI/CD.
- Scansione delle vulnerabilità: analisi automatica (es: Trivy) al caricamento e su richiesta.
- Policy: immutabilità dei tag, conservazione, regole di sicurezza.
- Artefatti OCI: immagini, chart Helm (OCI), SBOM, firme.

## Connessione al registro (Docker / Podman)

Preferisci un **account robot** collegato al progetto per le operazioni CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Utente: `<ROBOT_USERNAME>` (es: `robot$mioprogetto+pusher`)
- Password: `<ROBOT_TOKEN>`

:::tip Certificati
L'istanza Harbor gestita da Cloud Temple presenta un certificato pubblico riconosciuto. Normalmente non è richiesta alcuna configurazione CA aggiuntiva in Docker o Podman.
:::

## Creare un progetto

Tramite l'interfaccia utente di Harbor:

- Projects > New Project
- Nome: `<PROJET>`, visibilità: Private (consigliato)
- Opzioni: abilitare immutabilità dei tag, auto-scan on push, ecc.

:::info Buone pratiche

- Un progetto per applicazione o dominio funzionale.
- Limitare i ruoli (maintainer, developer, guest).
- Abilitare auto-scan e policy di conservazione.

:::

## Push di un'immagine

Esempio con Docker:

```bash
# Build locale
docker build -t app-web:1.0.0 .

# Tag per Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Push
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Organizzazione consigliata:

- `<PROJET>/<service>:<version>` (es: `payments/api:2.3.4`)
- Immutabilità dei tag per evitare sovrascritture
- Tag semantici: `1.2.3`, `1.2`, `latest` (usare `latest` con cautela)

## Pull di un'immagine

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Verifica i risultati della scansione e la firma (se abilitata) prima della promozione in produzione.

## Utilizzare le immagini in Kubernetes

### 1) Creare un secret di pull

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
Il parametro --docker-email non è più richiesto nelle versioni recenti di kubectl (e può essere ignorato).
:::

### 2) Referenziare il secret nei tuoi workload

- Tramite ServiceAccount:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: <NAMESPACE>
imagePullSecrets:
  - name: harbor-pull-secret
```

- O direttamente nel Pod/Deployment:

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

### 3) Testare il pull dal cluster (opzionale)

Verifica rapidamente che il nodo possa scaricare la tua immagine con il secret:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Per una promozione in produzione, preferisci l'uso di un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Account robot e permessi

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: limitare alle azioni necessarie (`pull` per runtime, `push` per CI)
- Scadenza: definire una durata e un processo di rotazione
- Archiviare il token come secret (Kubernetes/CI)

:::caution Minimo privilegio
Non utilizzare account personali per le tue pipeline. Preferisci un robot per progetto, o anche per ambiente.
:::

## Scansione delle vulnerabilità

- Abilitare "Scan on push" a livello di progetto
- Attivare su richiesta dall'UI o API
- Configurare policy: bloccare il pull se gravità >= `High` (secondo governance)

Puoi esportare i report (JSON) o visualizzare le CVE e i livelli interessati.

## Conservazione e immutabilità

- Conservazione: mantenere, ad esempio, gli ultimi `N` tag corrispondenti a un pattern (es: `release-*`)
- Immutabilità: impedire la sovrascrittura di tag esistenti
- Garbage Collection: pianificata dall'amministrazione di Harbor (elimina i blob orfani)

Questi meccanismi riducono i costi di archiviazione e rafforzano la tracciabilità.

## Chart Helm (OCI)

Helm v3.8+ supporta OCI nativamente.

```bash
# Login
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Packaging del chart
helm package charts/myapp

# Push del chart
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Firme e SBOM (Supply Chain)

Con `cosign`:

```bash
# Login (se necessario per recuperare la chiave pubblica da Harbor)
cosign login <HARBOR_URL>

# Firmare un'immagine (chiave locale o KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Verificare la firma
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
Sulle versioni precedenti di cosign, potrebbe essere necessario esportare COSIGN_EXPERIMENTAL=1.
:::

Harbor può visualizzare le attestazioni (firme, SBOM) e applicare le policy di firma.

## Integrazione CI/CD

### Esempio GitLab CI

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

### Esempio GitHub Actions

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

## Risoluzione dei problemi

- `denied: requested access to the resource is denied`
  - Verificare diritti dell'account robot sul progetto e/o nome del repo
- `name unknown` / `manifest unknown`
  - Progetto inesistente, repo scritto male, tag inesistente
- `x509: certificate signed by unknown authority`
  - Aggiornare l'archivio certificati del runner (ca-certificates), verificare assenza di proxy TLS intercettante; aggiungere CA del proxy se necessario e/o sincronizzare l'orologio di sistema
- 401/403 durante il pull in Kubernetes
  - Secret `imagePullSecrets` mancante o credenziali scadute
- `413 Request Entity Too Large`
  - Dimensione dell'immagine troppo grande per la configurazione di Ingress/Registry; ottimizzare l'immagine o regolare la configurazione (tramite supporto Cloud Temple)

## Buone pratiche

- Progetti privati per impostazione predefinita, separazione dev/preprod/prod
- Account robot dedicati, rotazione regolare dei token
- Immutabilità dei tag e promozione tramite digest
- Policy di scansione: soglia di gravità e rimedio documentato
- Conservazione rigorosa, eliminazione programmata degli artefatti obsoleti
- Logging/Audit: esportare e conservare i log di accesso/attività
- Integrazione SBOM e firme per la sicurezza della supply chain
