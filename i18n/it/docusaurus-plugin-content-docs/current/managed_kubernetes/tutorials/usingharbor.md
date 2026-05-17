---
title: Utilizzare Harbor
---

Harbor è un registro di artefatti OCI (immagini container, chart Helm, SBOM, firme, ecc.) che offre una gestione granulare dei progetti, un controllo degli accessi, scansioni di vulnerabilità, politiche di retention e gestione delle firme. Questa guida spiega come utilizzarlo con Cloud Temple Managed Kubernetes, dalla connessione al registro fino all'integrazione nei vostri deployment Kubernetes e nelle vostre pipeline CI/CD.

:::note
In questa guida, sostituite le seguenti variabili con i vostri valori:

- `<IDENTIFIANT>` : codice del vostro cluster (es: `ctodev`)
- `<HARBOR_URL>` : URL pubblica di Harbor costruita nel seguente modo: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (es: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : nome del vostro progetto Harbor
- `<NAMESPACE>` : namespace Kubernetes di destinazione
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : credenziali di un account robot Harbor

:::

## Prerequisiti

- Accesso alla Console e al servizio Kubernetes gestito
- Un progetto Harbor esistente (o i permessi per crearne uno)
- Strumenti installati localmente:
  - Docker o Podman
  - kubectl (configurato sul tuo cluster)
  - Helm v3.8+ (supporto OCI)
  - Opzionale: `cosign` per le firme delle immagini
- Accesso di rete in uscita verso `<HARBOR_URL>` in HTTPS (443)
- Nessun certificato aggiuntivo richiesto: il certificato TLS di Harbor è pubblico e riconosciuto

## Concetti essenziali

- Progetto: spazio logico (pubblico o privato) che contiene dei repository.
- Repository: insieme di tag per un'immagine data (`<PROJET>/app-web:1.0.0`).
- Account robot: identità tecniche con privilegi limitati, destinate a CI/CD.
- Scansioni di vulnerabilità: analisi automatica (es. Trivy) al caricamento e su richiesta.
- Politiche: immutabilità dei tag, retention, regole di sicurezza.
- Artefatti OCI: immagini, chart Helm (OCI), SBOM, firme.

## Connessione al registro (Docker / Podman)

Si consiglia di utilizzare un **account robot** associato al progetto per le operazioni CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Utente: `<ROBOT_USERNAME>` (es: `robot$monprojet+pusher`)
- Password: `<ROBOT_TOKEN>`

:::tip[Certificati
]
L'istanza Harbor gestita da Cloud Temple presenta un certificato pubblico riconosciuto. Non è normalmente necessaria alcuna configurazione CA aggiuntiva in Docker o Podman.
:::

## Creare un progetto

Tramite l'interfaccia utente Harbor:

- Progetti > Nuovo progetto
- Nome: `<PROJET>`, visibilità: Private (recommandé)
- Opzioni: abilitare l'immutabilità dei tag, la scansione automatica al push, ecc.

:::info[Bonnes pratiques
]

- Un progetto per applicazione o per dominio funzionale.
- Limitare i ruoli (maintainer, developer, guest).
- Abilitare la scansione automatica e le politiche di retention.

:::

## Spingere un'immagine

Esempio con Docker:

```bash
# Construire localement
docker build -t app-web:1.0.0 .

# Tag vers Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Pousser
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Organisation consigliata:

- `<PROJET>/<service>:<version>` (ex: `payments/api:2.3.4`)
- Immutabilità dei tag per evitare sovrascritture
- Tag semantici: `1.2.3`, `1.2`, `latest` (utilizzare `latest` con cautela)

## Recuperare un'immagine

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Verificare i risultati della scansione e la firma (se attivata) prima della promozione in produzione.

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

### 2) Referenziare il segreto nei tuoi workload

- Tramite il ServiceAccount:

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

Verifica rapidamente che il nodo possa scaricare la tua immagine con il segreto:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Per la promozione in produzione, preferisci l'uso di un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Account robot e autorizzazioni

- Progetti > `<PROJET>` > Account Robot > Nuovo Robot
- Ambiti: limitare alle azioni necessarie (`pull` per runtime, `push` per CI)
- Scadenza: impostare una durata e un processo di rotazione
- Memorizzare il token in modo sicuro (Kubernetes/CI)

:::caution[Principio di minimo privilegio
]
Non utilizzare account personali per i pipeline. Preferire un robot per progetto, o addirittura per ambiente.
:::

## Scansioni di vulnerabilità

- Abilitare « Scan on push » a livello di progetto
- Attivare su richiesta dall'interfaccia utente o dall'API
- Configurare le policy: bloccare il pull se la severità >= `High` (in base alla governance)

È possibile esportare i report (JSON) o visualizzare le CVE e i layer interessati.

## Conservazione e immutabilità

- Conservazione: conservare, ad esempio, gli ultimi `N` tag corrispondenti a un pattern (es: `release-*`)
- Immutabilità: impedire la riscrittura dei tag esistenti
- Garbage Collection: pianificata dall'amministrazione di Harbor (elimina i blob orfani)

Questi meccanismi riducono il costo di archiviazione e rafforzano la tracciabilità.

## Chart Helm (OCI)

Helm v3.8+ supporta OCI nativamente.

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

## Firme e SBOM (Supply Chain)

Con `cosign`:

```bash
# Accesso (se necessario per recuperare la chiave pubblica in Harbor)
cosign login <HARBOR_URL>

# Firmare un'immagine (chiave locale o KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Verificare la firma
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
Sulle versioni precedenti di cosign, potrebbe essere necessario esportare COSIGN_EXPERIMENTAL=1.
:::

Harbor può visualizzare le attestazioni (firme, SBOM) e far rispettare le politiche di firma.

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
  - Verificare i permessi dell'account robot sul progetto e/o il nome del repo
- `name unknown` / `manifest unknown`
  - Progetto inesistente, repo non correttamente scritto, tag inesistente
- `x509: certificate signed by unknown authority`
  - Aggiornare l'archivio certificati del runner (ca-certificates), verificare l'assenza di un proxy TLS che effettua l'intercettazione; aggiungere la CA del proxy se necessario e/o sincronizzare l'orologio di sistema
- 401/403 durante il pull in Kubernetes
  - Secret `imagePullSecrets` assente o credenziali scadute
- `413 Request Entity Too Large`
  - Dimensione dell'immagine troppo grande rispetto alla configurazione di Ingress/Registry; ottimizzare l'immagine o regolare la configurazione (via support Cloud Temple)

## Buone pratiche

- Progetti privati per impostazione predefinita, separazione dev/preprod/prod
- Account robot dedicati, rotazione regolare dei token
- Immutabilità dei tag e promozione tramite digest
- Politica di scansione: soglia di severità e remediation documentata
- Ritenzione rigorosa, eliminazione programmata degli artefatti obsoleti
- Logging/audit: esportare e conservare i log di accesso/attività
- Integrazione SBOM e firme per la catena di approvvigionamento