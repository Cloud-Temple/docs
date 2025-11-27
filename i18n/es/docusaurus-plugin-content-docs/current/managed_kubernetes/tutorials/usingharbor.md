---
title: Usar Harbor
---

Harbor es un registro de artefactos OCI (imágenes de contenedor, charts Helm, SBOM, firmas, etc.) que ofrece una gestión precisa de proyectos, control de acceso, escaneo de vulnerabilidades, políticas de retención y gestión de firmas. Esta guía explica cómo usarlo con Cloud Temple Managed Kubernetes, desde la conexión al registro hasta la integración en sus despliegues de Kubernetes y sus pipelines CI/CD.

:::note
En esta guía, reemplace las siguientes variables con sus valores:

- `<IDENTIFIANT>`: código de su clúster (ej: `ctodev`)
- `<HARBOR_URL>`: URL pública de Harbor construida así: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (ej: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>`: nombre de su proyecto Harbor
- `<NAMESPACE>`: namespace de Kubernetes objetivo
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>`: credenciales de una cuenta robot de Harbor

:::

## Requisitos previos

- Acceso a la Consola y al servicio Managed Kubernetes
- Un proyecto Harbor existente (o permisos para crear uno)
- Herramientas instaladas localmente:
  - Docker o Podman
  - kubectl (configurado en su clúster)
  - Helm v3.8+ (soporte OCI)
  - Opcional: `cosign` para firmas de imágenes
- Acceso de red saliente hacia `<HARBOR_URL>` en HTTPS (443)
- No se requiere certificado adicional: el certificado TLS de Harbor es público y reconocido

## Conceptos esenciales

- Proyecto: espacio lógico (público o privado) que contiene repositorios.
- Repositorio: colección de etiquetas para una imagen dada (`<PROJET>/app-web:1.0.0`).
- Cuentas robot: identidades técnicas con privilegios limitados, destinadas a CI/CD.
- Escaneo de vulnerabilidades: análisis automático (ej: Trivy) al subir y bajo demanda.
- Políticas: inmutabilidad de etiquetas, retención, reglas de seguridad.
- Artefactos OCI: imágenes, charts Helm (OCI), SBOM, firmas.

## Conexión al registro (Docker / Podman)

Prefiera una **cuenta robot** adjunta al proyecto para operaciones de CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Usuario: `<ROBOT_USERNAME>` (ej: `robot$miproyecto+pusher`)
- Contraseña: `<ROBOT_TOKEN>`

:::tip Certificados
La instancia Harbor gestionada por Cloud Temple presenta un certificado público reconocido. Normalmente no se requiere configuración de CA adicional en Docker o Podman.
:::

## Crear un proyecto

A través de la UI de Harbor:

- Projects > New Project
- Nombre: `<PROJET>`, visibilidad: Private (recomendado)
- Opciones: activar inmutabilidad de etiquetas, auto-scan on push, etc.

:::info Buenas prácticas

- Un proyecto por aplicación o por dominio funcional.
- Restringir roles (maintainer, developer, guest).
- Activar auto-scan y políticas de retención.

:::

## Subir una imagen (Push)

Ejemplo con Docker:

```bash
# Construir localmente
docker build -t app-web:1.0.0 .

# Etiquetar para Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Subir
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Organización recomendada:

- `<PROJET>/<service>:<version>` (ej: `payments/api:2.3.4`)
- Inmutabilidad de etiquetas para evitar sobrescrituras
- Etiquetas semánticas: `1.2.3`, `1.2`, `latest` (use `latest` con precaución)

## Descargar una imagen (Pull)

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Verifique los resultados del escaneo y la firma (si está activada) antes de promover a producción.

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
El parámetro --docker-email ya no es necesario en versiones recientes de kubectl (y puede ser ignorado).
:::

### 2) Referenciar el secreto en sus cargas de trabajo

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

### 3) Probar la descarga desde el clúster (opcional)

Verifique rápidamente que el nodo puede descargar su imagen con el secreto:

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
- Almacenar el token como secreto (Kubernetes/CI)

:::caution Mínimo privilegio
No utilice cuentas personales para sus pipelines. Prefiera un robot por proyecto, o incluso por entorno.
:::

## Escaneo de vulnerabilidades

- Activar "Scan on push" a nivel de proyecto
- Activar bajo demanda desde la UI o API
- Configurar políticas: bloquear la descarga si severidad >= `High` (según gobernanza)

Puede exportar los informes (JSON) o ver CVEs y capas afectadas.

## Retención e inmutabilidad

- Retención: conservar, por ejemplo, las últimas `N` etiquetas que coincidan con un patrón (ej: `release-*`)
- Inmutabilidad: evitar sobrescribir etiquetas existentes
- Garbage Collection: programada por la administración de Harbor (elimina blobs huérfanos)

Estos mecanismos reducen el costo de almacenamiento y refuerzan la trazabilidad.

## Charts Helm (OCI)

Helm v3.8+ soporta OCI de forma nativa.

```bash
# Iniciar sesión
helm registry login <HARBOR_URL> \
  --username '<ROBOT_USERNAME>' \
  --password '<ROBOT_TOKEN>'

# Empaquetado del chart
helm package charts/myapp

# Push del chart
helm push myapp-0.1.0.tgz oci://<HARBOR_URL>/<PROJET>/charts

# Pull / Install
helm pull oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0
helm install myapp oci://<HARBOR_URL>/<PROJET>/charts/myapp --version 0.1.0 -n <NAMESPACE>
```

## Firmas y SBOM (Cadena de suministro)

Con `cosign`:

```bash
# Login (si es necesario para obtener la clave pública de Harbor)
cosign login <HARBOR_URL>

# Firmar una imagen (clave local o KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Verificar firma
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
En versiones antiguas de cosign, puede ser necesario exportar COSIGN_EXPERIMENTAL=1.
:::

Harbor puede mostrar atestaciones (firmas, SBOM) y hacer cumplir políticas de firma.

## Integración CI/CD

### Ejemplo GitLab CI

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

## Solución de problemas

- `denied: requested access to the resource is denied`
  - Verificar permisos de la cuenta robot en el proyecto y/o nombre del repo
- `name unknown` / `manifest unknown`
  - Proyecto inexistente, repo mal escrito, etiqueta inexistente
- `x509: certificate signed by unknown authority`
  - Actualizar el almacén de certificados del runner (ca-certificates), verificar ausencia de proxy TLS interceptor; añadir CA del proxy si es necesario y/o sincronizar reloj del sistema
- 401/403 durante pull en Kubernetes
  - Falta secreto `imagePullSecrets` o credenciales caducadas
- `413 Request Entity Too Large`
  - Tamaño de imagen demasiado grande para config de Ingress/Registry; optimizar imagen o ajustar config (vía soporte Cloud Temple)

## Buenas prácticas

- Proyectos privados por defecto, separación dev/preprod/prod
- Cuentas robot dedicadas, rotación regular de tokens
- Inmutabilidad de etiquetas y promoción por digest
- Política de escaneo: umbral de severidad y remediación documentada
- Retención estricta, eliminación programada de artefactos obsoletos
- Registro/auditoría: exportar y conservar logs de acceso/actividad
- Integración SBOM y firmas para seguridad de cadena de suministro
