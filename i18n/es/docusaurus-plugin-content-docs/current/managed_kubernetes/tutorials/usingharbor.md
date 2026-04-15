---
title: Usar Harbor
---

Harbor es un registro de artefactos OCI (imágenes de contenedor, charts de Helm, SBOM, firmas, etc.) que ofrece una gestión detallada de proyectos, control de acceso, análisis de vulnerabilidades, políticas de retención y gestión de firmas. Esta guía explica cómo usarlo con Cloud Temple Managed Kubernetes, desde la conexión al registro hasta la integración en sus despliegues de Kubernetes y pipelines CI/CD.

:::note
En esta guía, reemplace las siguientes variables con sus propios valores:

- `<IDENTIFIANT>` : código de su clúster (ej.: `ctodev`)
- `<HARBOR_URL>` : URL pública de Harbor construida así: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (ej.: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : nombre de su proyecto Harbor
- `<NAMESPACE>` : namespace de Kubernetes de destino
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : credenciales de una cuenta robot de Harbor

:::

## Requisitos previos

- Acceso a la Consola y al servicio Managed Kubernetes
- Un proyecto Harbor existente (o derechos para crear uno)
- Herramientas instaladas localmente:
  - Docker o Podman
  - kubectl (configurado en su clúster)
  - Helm v3.8+ (soporte OCI)
  - Opcional: `cosign` para firmas de imágenes
- Acceso de red saliente a `<HARBOR_URL>` en HTTPS (443)
- No se requieren certificados adicionales: el certificado TLS de Harbor es público y reconocido

## Conceptos esenciales

- Proyecto: espacio lógico (público o privado) que contiene repositorios.
- Repositorio: colección de tags para una imagen dada (`<PROJET>/app-web:1.0.0`).
- Cuentas robot: identidades técnicas con privilegios limitados, destinadas a CI/CD.
- Análisis de vulnerabilidades: análisis automático (ej.: Trivy) en la carga y bajo demanda.
- Políticas: inmutabilidad de tags, retención, reglas de seguridad.
- Artefactos OCI: imágenes, charts de Helm (OCI), SBOM, firmas.

## Conexión al registro (Docker / Podman)

Prefiera una **cuenta robot** vinculada al proyecto para las operaciones CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Usuario: `<ROBOT_USERNAME>` (ej.: `robot$miproyecto+pusher`)
- Contraseña: `<ROBOT_TOKEN>`

:::tip Certificados
La instancia Harbor gestionada por Cloud Temple presenta un certificado público reconocido. Normalmente no se requiere ninguna configuración adicional de CA en Docker o Podman.
:::

## Crear un proyecto

A través de la UI de Harbor:

- Projects > New Project
- Nombre: `<PROJET>`, visibilidad: Private (recomendado)
- Opciones: activar la inmutabilidad de tags, auto-scan on push, etc.

:::info Buenas prácticas

- Un proyecto por aplicación o por dominio funcional.
- Restringir roles (maintainer, developer, guest).
- Activar el auto-scan y las políticas de retención.

:::

## Subir una imagen (push)

Ejemplo con Docker:

```bash
# Construir localmente
docker build -t app-web:1.0.0 .

# Etiquetar hacia Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Subir (push)
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Organización recomendada:

- `<PROJET>/<servicio>:<versión>` (ej.: `payments/api:2.3.4`)
- Inmutabilidad de tags para evitar sobreescrituras
- Tags semánticos: `1.2.3`, `1.2`, `latest` (use `latest` con precaución)

## Descargar una imagen (pull)

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Verifique los resultados del análisis y la firma (si está activada) antes de promocionar a producción.

## Usar las imágenes en Kubernetes

### 1) Crear un secret de pull

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

:::tip
El parámetro --docker-email ya no es requerido en las versiones recientes de kubectl (y puede omitirse).
:::

### 2) Referenciar el secret en sus workloads

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

Verifique rápidamente que el nodo puede descargar su imagen con el secret:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Para una promoción a producción, prefiera usar un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Cuentas robot y permisos

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: limitar a las acciones necesarias (`pull` para runtime, `push` para CI)
- Expiración: definir una duración y un proceso de rotación
- Almacenar el token como secret (Kubernetes/CI)

:::caution Mínimo privilegio
No use cuentas personales para sus pipelines. Prefiera un robot por proyecto, o incluso por entorno.
:::

## Análisis de vulnerabilidades

- Activar "Scan on push" a nivel de proyecto
- Activar bajo demanda desde la UI o la API
- Configurar políticas: bloquear el pull si la severidad >= `High` (según la gobernanza)

Puede exportar los informes (JSON) o mostrar los CVE y las capas afectadas.

## Retención e inmutabilidad

- Retención: conservar, por ejemplo, los últimos `N` tags que coincidan con un patrón (ej.: `release-*`)
- Inmutabilidad: evitar la sobreescritura de tags existentes
- Garbage Collection: planificada por la administración de Harbor (elimina blobs huérfanos)

Estos mecanismos reducen el costo de almacenamiento y refuerzan la trazabilidad.

## Charts de Helm (OCI)

Helm v3.8+ soporta OCI de forma nativa.

```bash
# Conexión
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Empaquetar el chart
helm package charts/myapp

# Subir el chart (push)
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Firmas y SBOM (Supply Chain)

Con `cosign`:

```bash
# Login (si es necesario para obtener la clave pública en Harbor)
cosign login <HARBOR_URL>

# Firmar una imagen (clave local o KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Verificar la firma
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
En versiones antiguas de cosign, puede ser necesario exportar COSIGN_EXPERIMENTAL=1.
:::

Harbor puede mostrar las attestations (firmas, SBOM) y hacer cumplir las políticas de firma.

## Integración CI/CD

### Ejemplo de GitLab CI

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

### Ejemplo de GitHub Actions

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

## Solución de problemas

- `denied: requested access to the resource is denied`
  - Verificar los derechos de la cuenta robot sobre el proyecto y/o el nombre del repositorio
- `name unknown` / `manifest unknown`
  - Proyecto inexistente, repositorio mal escrito, tag inexistente
- `x509: certificate signed by unknown authority`
  - Actualizar el almacén de certificados del runner (ca-certificates), verificar la ausencia de un proxy TLS interceptor; añadir la CA del proxy si es necesario y/o sincronizar el reloj del sistema
- 401/403 al hacer pull en Kubernetes
  - El secret `imagePullSecrets` está ausente o las credenciales han expirado
- `413 Request Entity Too Large`
  - El tamaño de la imagen es demasiado grande respecto a la configuración del Ingress/Registry; optimice la imagen o ajuste la configuración (a través del soporte de Cloud Temple)

## Buenas prácticas

- Proyectos privados por defecto, separación dev/preprod/prod
- Cuentas robot dedicadas, rotación regular de tokens
- Inmutabilidad de tags y promoción por digest
- Política de análisis: umbral de severidad y remediación documentada
- Retención estricta, eliminación programada de artefactos obsoletos
- Registro/auditoría: exportar y conservar los logs de acceso/actividad
- Integración de SBOM y firmas para la cadena de suministro de software
