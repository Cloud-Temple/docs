---
title: Using Harbor
---

Harbor is an OCI artifact registry (container images, Helm charts, SBOMs, signatures, etc.) offering fine-grained project management, access control, vulnerability scanning, retention policies, and signature management. This guide explains how to use it with Cloud Temple Managed Kubernetes, from registry connection to integration into your Kubernetes deployments and CI/CD pipelines.

:::note
In this guide, replace the following variables with your values:

- `<IDENTIFIANT>`: your cluster code (e.g., `ctodev`)
- `<HARBOR_URL>`: public Harbor URL constructed as follows: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (e.g., `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>`: your Harbor project name
- `<NAMESPACE>`: target Kubernetes namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>`: Harbor robot account credentials

:::

## Prerequisites

- Access to the Console and Managed Kubernetes service
- An existing Harbor project (or rights to create one)
- Locally installed tools:
  - Docker or Podman
  - kubectl (configured on your cluster)
  - Helm v3.8+ (OCI support)
  - Optional: `cosign` for image signing
- Outbound network access to `<HARBOR_URL>` via HTTPS (443)
- No additional certificates required: the Harbor TLS certificate is public and recognized

## Key Concepts

- Project: logical space (public or private) containing repositories.
- Repository: collection of tags for a given image (`<PROJET>/app-web:1.0.0`).
- Robot Accounts: technical identities with limited privileges, intended for CI/CD.
- Vulnerability Scanning: automatic analysis (e.g., Trivy) on upload and on demand.
- Policies: tag immutability, retention, security rules.
- OCI Artifacts: images, Helm charts (OCI), SBOM, signatures.

## Connecting to the Registry (Docker / Podman)

Prefer a **robot account** attached to the project for CI/CD operations.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Username: `<ROBOT_USERNAME>` (e.g., `robot$myproject+pusher`)
- Password: `<ROBOT_TOKEN>`

:::tip Certificates
The Cloud Temple managed Harbor instance presents a recognized public certificate. No additional CA configuration is normally required in Docker or Podman.
:::

## Creating a Project

Via the Harbor UI:

- Projects > New Project
- Name: `<PROJET>`, visibility: Private (recommended)
- Options: enable tag immutability, auto-scan on push, etc.

:::info Best Practices

- One project per application or functional domain.
- Restrict roles (maintainer, developer, guest).
- Enable auto-scan and retention policies.

:::

## Pushing an Image

Example with Docker:

```bash
# Build locally
docker build -t app-web:1.0.0 .

# Tag for Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Push
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Recommended organization:

- `<PROJET>/<service>:<version>` (e.g., `payments/api:2.3.4`)
- Tag immutability to avoid overwrites
- Semantic tags: `1.2.3`, `1.2`, `latest` (use `latest` with caution)

## Pulling an Image

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Check scan results and signature (if enabled) before promotion to production.

## Using Images in Kubernetes

### 1) Create a Pull Secret

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
The --docker-email parameter is no longer required on recent kubectl versions (and can be ignored).
:::

### 2) Reference the Secret in Your Workloads

- Via ServiceAccount:

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

### 3) Test Pull from Cluster (Optional)

Quickly verify that the node can pull your image with the secret:

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
- Scopes: limit to necessary actions (`pull` for runtime, `push` for CI)
- Expiration: define a duration and rotation process
- Store the token as a secret (Kubernetes/CI)

:::caution Least Privilege
Do not use personal accounts for your pipelines. Prefer one robot per project, or even per environment.
:::

## Vulnerability Scanning

- Enable "Scan on push" at the project level
- Trigger on demand from UI or API
- Set policies: block pull if severity >= `High` (according to governance)

You can export reports (JSON) or view CVEs and affected layers.

## Retention and Immutability

- Retention: keep, for example, the last `N` tags matching a pattern (e.g., `release-*`)
- Immutability: prevent overwriting existing tags
- Garbage Collection: scheduled by Harbor administration (deletes orphaned blobs)

These mechanisms reduce storage costs and strengthen traceability.

## Helm Charts (OCI)

Helm v3.8+ supports OCI natively.

```bash
# Login
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Chart Packaging
helm package charts/myapp

# Push Chart
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Signatures and SBOM (Supply Chain)

With `cosign`:

```bash
# Login (if necessary to fetch public key from Harbor)
cosign login <HARBOR_URL>

# Sign an image (local key or KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Verify signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
On older versions of cosign, exporting COSIGN_EXPERIMENTAL=1 might be necessary.
:::

Harbor can display attestations (signatures, SBOM) and enforce signature policies.

## CI/CD Integration

### GitLab CI Example

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
  - Check robot account rights on the project and/or repo name
- `name unknown` / `manifest unknown`
  - Non-existent project, misspelled repo, non-existent tag
- `x509: certificate signed by unknown authority`
  - Update runner's certificate store (ca-certificates), check for intercepting TLS proxy; add proxy CA if necessary and/or sync system clock
- 401/403 during pull in Kubernetes
  - Missing `imagePullSecrets` or expired credentials
- `413 Request Entity Too Large`
  - Image size too large for Ingress/Registry config; optimize image or adjust config (via Cloud Temple support)

## Best Practices

- Private projects by default, dev/preprod/prod separation
- Dedicated robot accounts, regular token rotation
- Tag immutability and digest promotion
- Scan policy: severity threshold and documented remediation
- Strict retention, scheduled deletion of obsolete artifacts
- Logging/Audit: export and retain access/activity logs
- SBOM and signature integration for supply chain security
