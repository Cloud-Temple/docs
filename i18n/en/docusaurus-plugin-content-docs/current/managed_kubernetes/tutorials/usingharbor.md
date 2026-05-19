---
title: Using Harbor
---

Harbor is an OCI artifact registry (container images, Helm charts, SBOM, signatures, etc.) offering fine-grained project management, access control, vulnerability scanning, retention policies, and signature management. This guide explains how to use it with Cloud Temple Managed Kubernetes, from connecting to the registry to integrating it into your Kubernetes deployments and CI/CD pipelines.

:::note
In this guide, replace the following variables with your values:

- `<IDENTIFIANT>` : your cluster code (ex: `ctodev`)
- `<HARBOR_URL>` : public Harbor URL constructed as follows: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (ex: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : your Harbor project name
- `<NAMESPACE>` : target Kubernetes namespace
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : credentials for a Harbor robot account

:::

## Prerequisites

- Access to the Console and the Managed Kubernetes service
- An existing Harbor project (or permissions to create one)
- Locally installed tools:
  - Docker or Podman
  - kubectl (configured on your cluster)
  - Helm v3.8+ (OCI support)
  - Optional: `cosign` for image signing
- Outbound network access to `<HARBOR_URL>` over HTTPS (443)
- No additional certificates required: Harbor's TLS certificate is public and trusted

## Essential Concepts

- Project: logical space (public or private) that contains repositories.
- Repository: collection of tags for a given image (`<PROJET>/app-web:1.0.0`).
- Robot accounts: technical identities with limited privileges, intended for CI/CD.
- Vulnerability scans: automatic analysis (e.g., Trivy) on upload and on demand.
- Policies: tag immutability, retention, security rules.
- OCI artifacts: images, Helm charts (OCI), SBOM, signatures.

## Connecting to the registry (Docker / Podman)

Prefer a **robot account** associated with the project for CI/CD operations.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Username: `<ROBOT_USERNAME>` (e.g., `robot$monprojet+pusher`)
- Password: `<ROBOT_TOKEN>`

:::tip[Certificates
]
The Harbor instance managed by Cloud Temple has a recognized public certificate. No additional CA configuration is normally required in Docker or Podman.
:::

## Create a project

Via the Harbor UI:

- Projects > New Project
- Name: `<PROJET>`, visibility: Private (recommended)
- Options: enable tag immutability, auto-scan on push, etc.

:::info[Best practices
]

- One project per application or functional domain.
- Restrict roles (maintainer, developer, guest).
- Enable auto-scan and retention policies.

:::

## Push an image

Example with Docker:

```bash
# Construire localement
docker build -t app-web:1.0.0 .

# Tag vers Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Pousser
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Recommended organization:

- `<PROJET>/<service>:<version>` (e.g., `payments/api:2.3.4`)
- Tag immutability to prevent overwrites
- Semantic tags: `1.2.3`, `1.2`, `latest` (use `latest` with caution)

## Pull an image

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Check the scan results and signature (if enabled) before promotion to prod.

## Using images in Kubernetes

### 1) Create a pull secret

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
The --docker-email parameter is no longer required in recent versions of kubectl (and can be ignored).
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

### 3) Test the pull from the cluster (optional)

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
- Expiration: set a duration and a rotation process
- Store the token as a secret (Kubernetes/CI)

:::caution[Least Privilege
]
Do not use personal accounts for your pipelines. Prefer one robot per project, or even per environment.
:::

## Vulnerability Scans

- Enable "Scan on push" at the project level
- Trigger on demand from the UI or API
- Configure policies: block pull if severity >= `High` (according to governance)

You can export reports (JSON) or view the affected CVEs and layers.

## Retention and immutability

- Retention: keep, for example, the last `N` tags matching a pattern (e.g., `release-*`)
- Immutability: prevent rewriting of existing tags
- Garbage Collection: scheduled by Harbor administration (removes orphaned blobs)

These mechanisms reduce storage costs and enhance traceability.

## Helm Charts (OCI)

Helm v3.8+ natively supports OCI.

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

## Signatures and SBOM (Supply Chain)

With `cosign`:

```bash
# Login (si nécessaire pour fetch public key dans Harbor)
cosign login <HARBOR_URL>

# Sign an image (clé locale ou KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Verify the signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
On older versions of cosign, you may need to export COSIGN_EXPERIMENTAL=1.
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
  - Check the robot account permissions on the project and/or the repo name
- `name unknown` / `manifest unknown`
  - Non-existent project, misspelled repo name, non-existent tag
- `x509: certificate signed by unknown authority`
  - Update the runner's certificate store (ca-certificates), verify there is no intercepting TLS proxy; add the proxy's CA if necessary and/or synchronize the system clock
- 401/403 during pull in Kubernetes
  - Missing `imagePullSecrets` secret or expired credentials
- `413 Request Entity Too Large`
  - Image size too large relative to the Ingress/Registry configuration; optimize the image or adjust the configuration (via Cloud Temple support)

## Best practices
- Private projects by default, dev/preprod/prod separation
- Dedicated service accounts, regular token rotation
- Tag immutability and promotion by digest
- Scan policy: severity threshold and documented remediation
- Strict retention, scheduled deletion of obsolete artifacts
- Logging/auditing: export and retain access/activity logs
- SBOM and signature integration for the supply chain