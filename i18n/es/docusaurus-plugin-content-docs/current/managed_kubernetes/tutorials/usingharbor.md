---
title: Usar Harbor
---

Harbor es un registro de artefactos OCI (imágenes de contenedores, charts Helm, SBOM, firmas, etc.) que ofrece una gestión detallada de proyectos, control de acceso, escaneo de vulnerabilidades, políticas de retención y gestión de firmas. Esta guía explica cómo utilizarlo con Kubernetes administrado de Cloud Temple, desde la conexión al registro hasta la integración en sus despliegues Kubernetes y sus pipelines CI/CD.

:::note
En esta guía, reemplace las siguientes variables por sus valores:

- `<IDENTIFIANT>`: código de su clúster (por ejemplo: `ctodev`)
- `<HARBOR_URL>`: URL pública de Harbor construida de la siguiente manera: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (por ejemplo: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>`: nombre de su proyecto en Harbor
- `<NAMESPACE>`: namespace de Kubernetes objetivo
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>`: credenciales de una cuenta robot en Harbor

:::

## Requis previos

- Acceso a la Consola y al servicio Managed Kubernetes
- Un proyecto Harbor existente (o permisos para crear uno)
- Herramientas instaladas localmente:
  - Docker o Podman
  - kubectl (configurado en su clúster)
  - Helm v3.8+ (con soporte OCI)
  - Opcional: `cosign` para firmas de imágenes
- Acceso de red saliente hacia `<HARBOR_URL>` mediante HTTPS (puerto 443)
- No se requieren certificados adicionales: el certificado TLS de Harbor es público y reconocido

## Conceptos esenciales

- Proyecto: espacio lógico (público o privado) que contiene repositorios.
- Repositorio: colección de etiquetas para una imagen determinada (`<PROYECTO>/app-web:1.0.0`).
- Cuentas robot: identidades técnicas con privilegios limitados, destinadas a CI/CD.
- Escaneos de vulnerabilidades: análisis automático (por ejemplo, Trivy) al cargar y bajo demanda.
- Políticas: inmutabilidad de etiquetas, retención, reglas de seguridad.
- Artefactos OCI: imágenes, charts Helm (OCI), SBOM, firmas.

## Conexión al registro (Docker / Podman)

Prefiera un **cuenta robot** asociada al proyecto para las operaciones CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Usuario: `<ROBOT_USERNAME>` (por ejemplo: `robot$monprojet+pusher`)
- Contraseña: `<ROBOT_TOKEN>`

:::tip Certificados
La instancia de Harbor gestionada por Cloud Temple tiene un certificado público reconocido. Normalmente no es necesario realizar ninguna configuración adicional de CA en Docker o Podman.
:::

## Create a project

Via the Harbor UI:

- Projects > New Project
- Name: `<PROJET>`, visibility: Private (recommended)
- Options: enable tag immutability, auto-scan on push, etc.

:::info Best practices

- One project per application or functional domain.
- Restrict roles (maintainer, developer, guest).
- Enable auto-scan and retention policies.

:::

## Push an image

Example with Docker:

```bash
# Construir localmente
docker build -t app-web:1.0.0 .

# Tag to Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Push
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Recomendación de organización:

- `<PROJET>/<service>:<version>` (por ejemplo: `payments/api:2.3.4`)
- Inmutabilidad de las etiquetas para evitar sobrescribirlas
- Etiquetas semánticas: `1.2.3`, `1.2`, `latest` (utilice `latest` con precaución)

## Pull an image

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Check the scan results and signature (if enabled) before promoting to production.

## Usar imágenes en Kubernetes

### 1) Crear un secreto de pull

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
El parámetro --docker-email ya no es necesario en las versiones recientes de kubectl (y puede ignorarse).
:::

### 2) Referenciar el secreto en tus workloads

- A través del ServiceAccount:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: default
  namespace: <NAMESPACE>
imagePullSecrets:
  - name: harbor-pull-secret
```

- O directamente en el Pod/Deployment:

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

### 3) Probar el pull desde el clúster (opcional)

Compruebe rápidamente que el nodo puede extraer su imagen con el secreto:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Para una promoción hacia producción, prefiera el uso de un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Robot accounts and permissions

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: limit to necessary actions (`pull` for runtime, `push` for CI)
- Expiration: set a duration and rotation process
- Store the token as a secret (Kubernetes/CI)

:::caution Least privilege
Do not use personal accounts for your pipelines. Prefer one robot per project, or even per environment.
:::

## Vulnerability Scans

- Enable "Scan on push" at the project level  
- Trigger manually via UI or API  
- Configure policies: block pull if severity >= `High` (according to governance)

You can export reports (JSON) or view affected CVEs and layers.

## Retención e inmutabilidad

- Retención: conservar, por ejemplo, los últimos `N` tags que coincidan con un patrón (por ejemplo, `release-*`)
- Inmutabilidad: impedir la sobrescritura de tags existentes
- Recolección de basura: programada por la administración de Harbor (elimina los blobs huérfanos)

Estos mecanismos reducen el costo de almacenamiento y refuerzan la trazabilidad.

## Gráficos Helm (OCI)

Helm v3.8+ tiene soporte nativo para OCI.

```bash
# Conexión
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Empaquetado del chart
helm package charts/myapp

# Push del chart
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Instalar
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Firmas y SBOM (Cadena de suministro)

Con `cosign`:

```bash
# Inicio de sesión (si es necesario para obtener la clave pública en Harbor)
cosign login <HARBOR_URL>

# Sign a container image (local key or KMS)
cosign sign <HARBOR_URL>/<PROJECT>/app-web:1.0.0

# Verify the signature
cosign verify <HARBOR_URL>/<PROJECT>/app-web:1.0.0
```

:::note
On older versions of cosign, you might need to export COSIGN_EXPERIMENTAL=1.
:::

Harbor can display attestations (signatures, SBOMs) and enforce signing policies.

## Integración CI/CD

### Ejemplo GitLab CI

```yaml
stages: [build, push]

variables:
  HARBOR_URL: "<HARBOR_URL>"
  HARBOR_PROJECT: "<PROYECTO>"

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

### Ejemplo GitHub Actions

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
  - Update the runner's certificate store (ca-certificates), check for TLS proxy interception; add the proxy's CA if necessary and/or synchronize the system clock
- 401/403 when pulling in Kubernetes
  - Missing `imagePullSecrets` secret or expired credentials
- `413 Request Entity Too Large`
  - Image size too large compared to Ingress/Registry configuration; optimize the image or adjust the configuration (via Cloud Temple support)

## Buenas prácticas

- Proyectos privados por defecto, separación entre dev/preprod/prod
- Cuentas robot dedicadas, rotación regular de tokens
- Inmutabilidad de etiquetas y promoción mediante digest
- Política de escaneo: umbral de severidad y remediación documentada
- Retención estricta, eliminación programada de artefactos obsoletos
- Registro/auditoría: exportar y conservar los registros de acceso/actividad
- Integración de SBOM y firmas para la cadena de suministro
