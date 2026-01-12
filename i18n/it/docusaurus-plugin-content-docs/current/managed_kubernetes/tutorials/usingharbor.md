---
title: Usare Harbor
---

Harbor è un registro di artefatti OCI (immagini di contenitori, chart Helm, SBOM, firme, ecc.) che offre un controllo fine sui progetti, un controllo degli accessi, scansione delle vulnerabilità, politiche di conservazione e gestione delle firme. Questa guida spiega come utilizzarlo con Cloud Temple Managed Kubernetes, dalla connessione al registro fino all'integrazione nei tuoi deployment Kubernetes e nei tuoi pipeline CI/CD.

:::note
In questa guida, sostituisci le seguenti variabili con i tuoi valori:

- `<IDENTIFIANT>` : codice del tuo cluster (es: `ctodev`)
- `<HARBOR_URL>` : URL pubblica di Harbor costruita nel seguente modo: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (es: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : nome del tuo progetto Harbor
- `<NAMESPACE>` : namespace Kubernetes di destinazione
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : credenziali di un account robot Harbor

:::

## Prerequisiti

- Accesso alla Console e al servizio Managed Kubernetes
- Un progetto Harbor esistente (o i permessi per crearne uno)
- Strumenti installati localmente:
  - Docker o Podman
  - kubectl (configurato sul tuo cluster)
  - Helm v3.8+ (con supporto OCI)
  - Opzionale: `cosign` per la firma delle immagini
- Accesso in uscita alla rete verso `<HARBOR_URL>` tramite HTTPS (porta 443)
- Nessun certificato aggiuntivo richiesto: il certificato TLS di Harbor è pubblico e riconosciuto

## Concetti fondamentali

- Progetto: spazio logico (pubblico o privato) che contiene repository.
- Repository: raccolta di tag per un'immagine specifica (`<PROGETTO>/app-web:1.0.0`).
- Account robot: identità tecniche con privilegi limitati, destinate ai processi CI/CD.
- Scansioni di vulnerabilità: analisi automatiche (es. Trivy) all'upload e su richiesta.
- Politiche: immutabilità dei tag, conservazione, regole di sicurezza.
- Artefatti OCI: immagini, chart Helm (OCI), SBOM, firme.

## Accesso al registro (Docker / Podman)

Preferite un **account robot** associato al progetto per le operazioni CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Utente: `<ROBOT_USERNAME>` (es: `robot$monprojet+pusher`)
- Password: `<ROBOT_TOKEN>`

:::tip Certificati
L'istanza Harbor gestita da Cloud Temple presenta un certificato pubblico riconosciuto. Normalmente non è necessaria alcuna configurazione aggiuntiva della CA in Docker o Podman.
:::

## Creare un progetto

Tramite l'interfaccia utente di Harbor:

- Progetti > Nuovo Progetto
- Nome: `<PROGETTO>`, visibilità: Privata (consigliato)
- Opzioni: abilitare l'immutabilità dei tag, scansione automatica al push, ecc.

:::info Best practice

- Un progetto per applicazione o dominio funzionale.
- Limitare i ruoli (maintainer, developer, guest).
- Abilitare le scansioni automatiche e le politiche di conservazione.

:::

## Inviare un'immagine

Esempio con Docker:

```bash
# Costruire localmente
docker build -t app-web:1.0.0 .

# Tag to Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Push
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Raccomandazione struttura:

- `<PROJET>/<service>:<version>` (es: `payments/api:2.3.4`)
- Immutabilità dei tag per evitare sovrascritture
- Tag semantici: `1.2.3`, `1.2`, `latest` (usare `latest` con cautela)

## Estrai un'immagine

```bash
docker pull <HARBOR_URL>/<PROGETTO>/app-web:1.0.0
```

Verifica i risultati dello scan e la firma (se abilitata) prima della promozione in produzione.

## Utilizzare le immagini in Kubernetes

### 1) Creare un segreto di pull

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

### 2) Riferire il segreto nei tuoi workload

- Attraverso il ServiceAccount:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: <NAMESPACE>
imagePullSecrets:
  - name: harbor-pull-secret
```

- Oppure direttamente nel Pod/Deployment:

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

Verifica rapidamente che il nodo possa effettuare il pull dell'immagine utilizzando il secret:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Per una promozione in produzione, preferisci utilizzare un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Account robot e autorizzazioni

- Projects > `<PROGETTO>` > Robot Accounts > Nuovo Robot
- Scopes: limitare alle azioni necessarie (`pull` per runtime, `push` per CI)
- Scadenza: definire una durata e un processo di rotazione
- Memorizzare il token come segreto (Kubernetes/CI)

:::caution Minima autorizzazione
Non utilizzare account personali per i tuoi pipeline. Preferisci un account robot per progetto, oppure per ambiente.
:::

## Scansione delle vulnerabilità

- Abilita "Scan on push" a livello di progetto
- Attiva manualmente dall'interfaccia o tramite API
- Configura politiche: blocca il pull se la gravità >= `High` (in base alla governance)

Puoi esportare i report (in formato JSON) o visualizzare le CVE e i livelli interessati.

## Conservazione e immutabilità

- Conservazione: mantenere, ad esempio, gli ultimi `N` tag corrispondenti a un pattern (es: `release-*`)
- Immutabilità: impedire la sovrascrittura di tag esistenti
- Raccolta dei rifiuti (Garbage Collection): pianificata dall'amministrazione di Harbor (elimina i blob orfani)

Questi meccanismi riducono i costi di archiviazione e migliorano la tracciabilità.

## Grafici Helm (OCI)

Helm v3.8+ supporta nativamente OCI.

```bash
# Connessione
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
# Accesso (necessario per recuperare la chiave pubblica in Harbor)
cosign login <HARBOR_URL>

# Firmare un'immagine (chiave locale o KMS)
cosign sign <HARBOR_URL>/<PROGETTO>/app-web:1.0.0

# Verify the signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
On older versions of cosign, it may be necessary to export COSIGN_EXPERIMENTAL=1.
:::

Harbor can display attestations (signatures, SBOMs) and enforce signing policies.

## Integrazione CI/CD

### Esempio GitLab CI

```yaml
stages: [build, push]

variables:
  HARBOR_URL: "<HARBOR_URL>"
  HARBOR_PROJECT: "<PROGETTO>"

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
name: Build e Push
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
  - Verifica i permessi dell'account robot sul progetto e/o sul nome del repository
- `name unknown` / `manifest unknown`
  - Il progetto non esiste, errore di battitura nel nome del repository, o tag inesistente
- `x509: certificate signed by unknown authority`
  - Aggiorna lo store dei certificati del runner (ca-certificates), verifica l'intercezione proxy TLS; aggiungi la CA del proxy se necessario e/o sincronizza l'orologio di sistema
- 401/403 durante il pull in Kubernetes
  - Secret `imagePullSecrets` mancante o credenziali scadute
- `413 Request Entity Too Large`
  - Dimensione dell'immagine troppo grande rispetto alla configurazione Ingress/Registry; ottimizzare l'immagine o adattare la configurazione (tramite supporto Cloud Temple)

## Best practices

- Progetti privati di default, separazione degli ambienti dev/preprod/prod
- Account robot dedicati, rotazione regolare dei token
- Tag immutabili, promozione tramite digest
- Politica di scansione: soglia di gravità e rimedio documentato
- Conservazione rigorosa, eliminazione programmata degli artefatti obsoleti
- Logging/audit: esportare e conservare i log di accesso/attività
- Integrazione SBOM e firma per l'integrità della supply chain
