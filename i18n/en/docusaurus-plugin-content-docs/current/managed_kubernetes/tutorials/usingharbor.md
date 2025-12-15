---
title: Using Harbor
---

Harbor is an OCI artifacts registry (container images, Helm charts, SBOMs, signatures, etc.) offering fine-grained project management, access control, vulnerability scanning, retention policies, and signature management. This guide explains how to use Harbor with Cloud Temple Managed Kubernetes, from connecting to the registry to integrating it into your Kubernetes deployments and CI/CD pipelines.

:::note
In this guide, replace the following variables with your own values:

- `<IDENTIFIANT>`: your cluster ID (e.g., `ctodev`)
- `<HARBOR_URL>`: public Harbor URL built as: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (e.g., `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>`: your Harbor project name
- `<NAMESPACE>`: target Kubernetes namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>`: credentials for a Harbor robot account

:::

## Prerequisites

- Access to the Console and Managed Kubernetes service
- An existing Harbor project (or permissions to create one)
- Locally installed tools:
  - Docker or Podman
  - kubectl (configured for your cluster)
  - Helm v3.8+ (OCI support)
  - Optional: `cosign` for image signing
- Outbound network access to `<HARBOR_URL>` over HTTPS (port 443)
- No additional certificates required: Harbor's TLS certificate is public and trusted

## Core Concepts

- Project: logical space (public or private) containing repositories.
- Repository: collection of tags for a given image (`<PROJECT>/app-web:1.0.0`).
- Robot accounts: technical identities with limited privileges, intended for CI/CD.
- Vulnerability scans: automated analysis (e.g., Trivy) at upload and on demand.
- Policies: tag immutability, retention, security rules.
- OCI artifacts: images, Helm charts (OCI), SBOMs, signatures.

## Connecting to the registry (Docker / Podman)

Prefer a **robot account** linked to the project for CI/CD operations.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- User: `<ROBOT_USERNAME>` (e.g., `robot$monprojet+pusher`)
- Password: `<ROBOT_TOKEN>`

:::tip Certificates
The Harbor instance managed by Cloud Temple uses a publicly recognized certificate. No additional CA configuration is normally required in Docker or Podman.
:::

## Create a project

Via the Harbor UI:

- Projects > New Project
- Name: `<PROJECT>`, visibility: Private (recommended)
- Options: enable tag immutability, auto-scan on push, etc.

:::info Best practices

- One project per application or functional domain.
- Restrict roles (maintainer, developer, guest).
- Enable auto-scan and retention policies.

:::

## Push an image

Example with Docker:

```bash
# Build locally
docker build -t app-web:1.0.0 .

# Tag to Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Push

```bash
docker push <HARBOR_URL>/<PROJECT>/app-web:1.0.0
```

Recommended organization:

- `<PROJECT>/<service>:<version>` (e.g., `payments/api:2.3.4`)
- Immutable tags to prevent overwrites
- Semantic tags: `1.2.3`, `1.2`, `latest` (use `latest` with caution)

## Pull an image

```bash
docker pull <HARBOR_URL>/<PROJECT>/app-web:1.0.0
```

Check the scan results and signature (if enabled) before promoting to production.

## Using Images in Kubernetes

### 1) Create a pull secret

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
The `--docker-email` parameter is no longer required in recent versions of kubectl (and can be safely ignored).
:::

### 2) Reference the secret in your workloads

- Via the ServiceAccount:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: <NAMESPACE>
imagePullSecrets:
  - name: harbor-pull-secret
```

- Or directly in the Pod/Deployment:

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

### 3) Test pulling from the cluster (optional)

Quickly verify that the node can pull your image using the secret:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

For promotion to production, prefer using a digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Robot Accounts and Permissions

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: restrict to necessary actions (`pull` for runtime, `push` for CI)
- Expiration: set a duration and rotation process
- Store the token securely (Kubernetes/CI)

:::caution Least Privilege
Do not use personal accounts for your pipelines. Prefer one robot account per project, or even per environment.
:::

## Vulnerability Scans

- Enable "Scan on push" at the project level  
- Trigger manually via UI or API  
- Configure policies: block pull if severity >= `High` (according to governance)

You can export reports (in JSON format) or view affected CVEs and layers.

## Retention and Immutability

- Retention: keep, for example, the last `N` tags matching a pattern (e.g. `release-*`)
- Immutability: prevent rewriting of existing tags
- Garbage Collection: scheduled by Harbor administration (removes orphaned blobs)

These mechanisms reduce storage costs and enhance traceability.

## Charts Helm (OCI)

Helm v3.8+ supports OCI natively.

```bash
# Connection
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Packaging the chart
helm package charts/myapp

# Push the chart
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Signatures and SBOM (Supply Chain)

With `cosign`:

```bash
# Login (if required to fetch public key from Harbor)
cosign login <HARBOR_URL>

# Sign an image (local key or KMS)
cosign sign <HARBOR_URL>/<PROJECT>/app-web:1.0.0

# Verify the signature
cosign verify <HARBOR_URL>/<PROJECT>/app-web:1.0.0

```
:::note
On older versions of cosign, you may need to export COSIGN_EXPERIMENTAL=1.
:::

Harbor can display attestations (signatures, SBOMs) and enforce signing policies.
```

## CI/CD Integration

### GitLab CI Example

```yaml
stages: [build, push]

variables:
  HARBOR_URL: "<HARBOR_URL>"
  HARBOR_PROJECT: "<PROJECT>"

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

### GitHub Actions Example

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

## Troubleshooting

- `denied: requested access to the resource is denied`
  - Check robot account permissions on the project and/or repository name
- `name unknown` / `manifest unknown`
  - Project does not exist, repository name misspelled, or tag does not exist
- `x509: certificate signed by unknown authority`
  - Update the runner's certificate store (ca-certificates), verify no TLS proxy is intercepting traffic; add the proxy's CA if necessary and/or synchronize the system clock
- 401/403 when pulling in Kubernetes
  - Missing `imagePullSecrets` secret or expired credentials
- `413 Request Entity Too Large`
  - Image size too large compared to Ingress/Registry configuration; optimize the image or adjust the configuration (via Cloud Temple support)

## Best Practices

- Private projects by default, separation of dev/preprod/prod environments
- Dedicated robot accounts with regular token rotation
- Immutable tags and promotion by digest
- Scan policy: severity threshold and documented remediation
- Strict retention with scheduled deletion of obsolete artifacts
- Logging/auditing: export and retain access/activity logs
- SBOM integration and signing for supply chain integrity
