---
title: Utiliser Harbor
---

Harbor est un registre d’artefacts OCI (images de conteneur, charts Helm, SBOM, signatures, etc.) proposant une gestion fine des projets, un contrôle d’accès, des scans de vulnérabilités, des politiques de rétention et la gestion des signatures. Ce guide explique comment l’utiliser avec Cloud Temple Managed Kubernetes, de la connexion au registre jusqu’à l’intégration dans vos déploiements Kubernetes et vos pipelines CI/CD.

:::note
Dans ce guide, remplacez les variables suivantes par vos valeurs:

- `<IDENTIFIANT>` : code de votre cluster (ex: `ctodev`)
- `<HARBOR_URL>` : URL Harbor publique construite ainsi: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (ex: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : nom de votre projet Harbor
- `<NAMESPACE>` : namespace Kubernetes cible
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : identifiants d'un compte robot Harbor

:::


## Prérequis

- Accès à la Console et au service Managed Kubernetes
- Un projet Harbor existant (ou droits pour en créer un)
- Outils installés localement:
  - Docker ou Podman
  - kubectl (configuré sur votre cluster)
  - Helm v3.8+ (support OCI)
  - Optionnel: `cosign` pour signatures d'images
- Accès réseau sortant vers `<HARBOR_URL>` en HTTPS (443)
- Aucun certificat supplémentaire requis: le certificat TLS de Harbor est public et reconnu

## Concepts essentiels

- Projet: espace logique (public ou privé) qui contient des repositories.
- Repository: collection de tags pour une image donnée (`<PROJET>/app-web:1.0.0`).
- Comptes robots: identités techniques à privilèges limités, destinées aux CI/CD.
- Scans de vulnérabilités: analyse automatique (ex: Trivy) à l'upload et à la demande.
- Politiques: immutabilité des tags, rétention, règles de sécurité.
- Artefacts OCI: images, charts Helm (OCI), SBOM, signatures.

## Connexion au registre (Docker / Podman)

Préférez un **compte robot** attaché au projet pour les opérations CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Utilisateur: `<ROBOT_USERNAME>` (ex: `robot$monprojet+pusher`)
- Mot de passe: `<ROBOT_TOKEN>`

:::tip Certificats
L’instance Harbor managée par Cloud Temple présente un certificat public reconnu. Aucune configuration de CA supplémentaire n’est normalement nécessaire dans Docker ou Podman.
:::

## Créer un projet

Via l'UI Harbor:

- Projects > New Project
- Nom: `<PROJET>`, visibilité: Private (recommandé)
- Options: activer l'immutabilité des tags, l'auto-scan on push, etc.

:::info Bonnes pratiques

- Un projet par application ou par domaine fonctionnel.
- Restreindre les rôles (maintainer, developer, guest).
- Activer l'auto-scan et les politiques de rétention.

:::

## Pousser une image

Exemple avec Docker:

```bash
# Construire localement
docker build -t app-web:1.0.0 .

# Tag vers Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Pousser
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Organisation recommandée:

- `<PROJET>/<service>:<version>` (ex: `payments/api:2.3.4`)
- Immutabilité des tags pour éviter les réécritures
- Tags sémantiques: `1.2.3`, `1.2`, `latest` (utilisez `latest` avec prudence)

## Tirer une image

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Vérifiez les résultats de scan et la signature (si activée) avant promotion en prod.

## Utiliser les images dans Kubernetes

### 1) Créer un secret de pull

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
Le paramètre --docker-email n’est plus requis sur les versions récentes de kubectl (et peut être ignoré).
:::

### 2) Référencer le secret dans vos workloads

- Via le ServiceAccount:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: <NAMESPACE>
imagePullSecrets:
  - name: harbor-pull-secret
```

- Ou directement dans le Pod/Deployment:

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

### 3) Tester le pull depuis le cluster (optionnel)

Vérifiez rapidement que le nœud peut tirer votre image avec le secret:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Pour une promotion vers la production, privilégiez l’usage d’un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Comptes robots et permissions

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: limiter aux actions nécessaires (`pull` pour runtime, `push` pour CI)
- Expiration: définir une durée et un processus de rotation
- Stocker le token en secret (Kubernetes/CI)

:::caution Moindre privilège
N'utilisez pas de comptes personnels pour vos pipelines. Préférez un robot par projet, voire par environnement.
:::

## Scans de vulnérabilités

- Activer « Scan on push » au niveau projet
- Déclencher à la demande depuis l'UI ou l'API
- Paramétrer des politiques: bloquer le pull si sévérité >= `High` (selon gouvernance)

Vous pouvez exporter les rapports (JSON) ou afficher les CVE et couches affectées.

## Rétention et immutabilité

- Rétention: conserver, par exemple, les `N` derniers tags correspondant à un pattern (ex: `release-*`)
- Immutabilité: empêcher la réécriture de tags existants
- Garbage Collection: planifiée par l'administration Harbor (supprime les blobs orphelins)

Ces mécanismes réduisent le coût de stockage et renforcent la traçabilité.

## Charts Helm (OCI)

Helm v3.8+ supporte OCI nativement.

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

## Signatures et SBOM (Supply Chain)

Avec `cosign`:

```bash
# Login (si nécessaire pour fetch public key dans Harbor)
cosign login <HARBOR_URL>

# Signer une image (clé locale ou KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Vérifier la signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
Sur les versions anciennes de cosign, il peut être nécessaire d’exporter COSIGN_EXPERIMENTAL=1.
:::

Harbor peut afficher les attestations (signatures, SBOM) et faire respecter des politiques de signature.

## Intégration CI/CD

### Exemple GitLab CI

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

### Exemple GitHub Actions

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

## Dépannage

- `denied: requested access to the resource is denied`
  - Vérifier droits du compte robot sur le projet et/ou nom du repo
- `name unknown` / `manifest unknown`
  - Projet inexistant, repo mal orthographié, tag inexistant
- `x509: certificate signed by unknown authority`
  - Mettre à jour le magasin de certificats du runner (ca-certificates), vérifier l’absence de proxy TLS interceptant; ajouter la CA du proxy si nécessaire et/ou synchroniser l’horloge du système
- 401/403 lors du pull dans Kubernetes
  - Secret `imagePullSecrets` absent ou credentials expirés
- `413 Request Entity Too Large`
  - Taille d’image trop importante par rapport à la config de l’Ingress/Registry; optimiser l’image ou ajuster la config (via support Cloud Temple)

## Bonnes pratiques

- Projets privés par défaut, séparation dev/preprod/prod
- Comptes robots dédiés, rotation régulière des tokens
- Immutabilité des tags et promotion par digest
- Politique de scan: seuil de sévérité et remédiation documentée
- Rétention stricte, suppression programmée des artefacts obsolètes
- Journalisation/audit: exporter et conserver les logs d’accès/activité
- Intégration SBOM et signatures pour la chaîne d’approvisionnement
