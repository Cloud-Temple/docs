---
title: Utilizzare Harbor
---

Harbor è un registro di artefatti OCI (immagini di container, chart Helm, SBOM, firme, ecc.) che offre una gestione granulare dei progetti, un controllo degli accessi, scansioni delle vulnerabilità, politiche di ritenzione e gestione delle firme. Questa guida spiega come utilizzarlo con Cloud Temple Managed Kubernetes, dalla connessione al registro fino all'integrazione nelle vostre distribuzioni Kubernetes e nei vostri pipeline CI/CD.

>ℹ️
In questa guida, sostituire le seguenti variabili con i vostri valori:

- `<IDENTIFIANT>` : codice del vostro cluster (es: `ctodev`)
- `<HARBOR_URL>` : URL pubblica di Harbor costruita come segue: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (es: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : nome del vostro progetto Harbor
- `<NAMESPACE>` : namespace Kubernetes di destinazione
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : credenziali di un account robot Harbor

## Prerequisiti

- Accesso alla Console e al servizio Managed Kubernetes
- Un progetto Harbor esistente (o diritti per crearne uno)
- Strumenti installati localmente:
  - Docker o Podman
  - kubectl (configurato sul vostro cluster)
  - Helm v3.8+ (supporto OCI)
  - Opzionale: `cosign` per firme delle immagini
- Accesso di rete in uscita verso `<HARBOR_URL>` in HTTPS (443)
- Nessun certificato aggiuntivo richiesto: il certificato TLS di Harbor è pubblico e riconosciuto

## Concetti essenziali

- Progetto: spazio logico (pubblico o privato) che contiene repository.
- Repository: raccolta di tag per una data immagine (`<PROJET>/app-web:1.0.0`).
- Account robot: identità tecniche con privilegi limitati, destinate al CI/CD.
- Scansioni delle vulnerabilità: analisi automatica (es: Trivy) al caricamento e su richiesta.
- Politiche: immutabilità dei tag, conservazione, regole di sicurezza.
- Artefatti OCI: immagini, chart Helm (OCI), SBOM, firme.

## Connessione al registro (Docker / Podman)

Preferire un **account robot** associato al progetto per le operazioni CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Utente: `<ROBOT_USERNAME>` (ex: `robot$monprojet+pusher`)
- Password: `<ROBOT_TOKEN>`

>ℹ️[Certificati]
>L'istanza Harbor gestita da Cloud Temple presenta un certificato pubblico riconosciuto. Non è normalmente necessaria alcuna configurazione CA aggiuntiva in Docker o Podman.

## Creare un progetto

Via l'interfaccia utente di Harbor:

- Progetti > Nuovo progetto
- Nome: `<PROGETTO>`, visibilità: Private (recommandé)
- Opzioni: abilitare l'immutabilità dei tag, l'auto-scan al push, ecc.

>ℹ️[Bonnes pratiques]
>
>- Un progetto per applicazione o per dominio funzionale.
>- Limitare i ruoli (maintainer, developer, guest).
>- Abilitare l'auto-scan e le politiche di retention.

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

Organizzazione consigliata:

- `<PROJET>/<service>:<version>` (es: `payments/api:2.3.4`)
- Immutabilità dei tag per evitare riscritture
- Tag semantici: `1.2.3`, `1.2`, `latest` (utilizzare `latest` con cautela)

## Scaricare un'immagine

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Verificare i risultati della scansione e la firma (se abilitata) prima della promozione in produzione.

## Utilizzare le immagini in Kubernetes

### 1) Creare un segreto di pull

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

>ℹ️Il parametro --docker-email non è più richiesto nelle versioni recenti di kubectl (e può essere ignorato).

### 2) Riferire il segreto ai tuoi workload

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

Verificate rapidamente che il nodo possa scaricare la vostra immagine con il segreto:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Per una promozione in produzione, privilegiate l'uso di un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Account robot e permessi

- Projects > `<PROJET>` > Account robot > Nuovo robot
- Scopes: limitare alle azioni necessarie (`pull` per runtime, `push` per CI)
- Scadenza: definire una durata e un processo di rotazione
- Memorizzare il token come segreto (Kubernetes/CI)

>⚠[Privilegio minimo] : Non utilizzare account personali per i pipeline. Preferire un robot per progetto, o addirittura per ambiente.

## Scansioni delle vulnerabilità

- Abilitare « Scan on push » a livello di progetto
- Attivare su richiesta dall'UI o dall'API
- Configurare le policy: bloccare il pull se la gravità >= `High` (in base alla governance)

È possibile esportare i report (JSON) o visualizzare le CVE e i layer interessati.

## Retenzione e immutabilità

- Retenzione: conservare, ad esempio, gli ultimi `N` tag corrispondenti a un pattern (es: `release-*`)
- Immutabilità: impedire la riscrittura di tag esistenti
- Garbage Collection: pianificata dall'amministrazione Harbor (rimuove i blob orfani)

Questi meccanismi riducono il costo di archiviazione e rafforzano la tracciabilità.

## Helm Charts (OCI)

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
# Login (si nécessaire pour fetch public key dans Harbor)
cosign login <HARBOR_URL>

# Signer une image (clé locale ou KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Vérifier la signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

>ℹ️Sulle versioni precedenti di cosign, potrebbe essere necessario esportare COSIGN_EXPERIMENTAL=1.


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
  - Verificare i permessi dell'account robot sul progetto e/o il nome del repository
- `name unknown` / `manifest unknown`
  - Progetto inesistente, repository scritto male, tag inesistente
- `x509: certificate signed by unknown authority`
  - Aggiornare il repository dei certificati del runner (ca-certificates), verificare l'assenza di un proxy TLS di intercettazione; aggiungere la CA del proxy se necessario e/o sincronizzare l'orologio di sistema
- 401/403 durante il pull in Kubernetes
  - Secret `imagePullSecrets` mancante o credenziali scadute
- `413 Request Entity Too Large`
  - Dimensione dell'immagine troppo grande rispetto alla configurazione dell'Ingress/Registry; ottimizzare l'immagine o regolare la configurazione (via support Cloud Temple)

## Buone pratiche

- Progetti privati per impostazione predefinita, separazione dev/preprod/prod
- Account robot dedicati, rotazione regolare dei token
- Immutabilità dei tag e promozione tramite digest
- Politica di scansione: soglia di severità e rimedio documentato
- Retenzione rigorosa, eliminazione programmata degli artefatti obsoleti
- Registrazione/audit: esportazione e conservazione dei log di accesso/attività
- Integrazione SBOM e firme per la catena di fornitura