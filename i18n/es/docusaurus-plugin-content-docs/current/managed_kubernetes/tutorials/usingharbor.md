---
title: Usar Harbor
---

Harbor es un registro de artefactos OCI (imágenes de contenedor, charts Helm, SBOM, firmas, etc.) que ofrece una gestión detallada de proyectos, control de acceso, escaneos de vulnerabilidades, políticas de retención y gestión de firmas. Esta guía explica cómo utilizarlo con Cloud Temple Managed Kubernetes, desde la conexión al registro hasta la integración en sus despliegues de Kubernetes y sus pipelines CI/CD.

>ℹ️
En esta guía, reemplace las siguientes variables por sus valores:

- `<IDENTIFIANT>` : código de su clúster (ex: `ctodev`)
- `<HARBOR_URL>` : URL pública de Harbor construida de la siguiente manera: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (ex: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : nombre de su proyecto Harbor
- `<NAMESPACE>` : namespace de Kubernetes objetivo
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : credenciales de una cuenta robot de Harbor

## Prerrequisitos

- Acceso a la Consola y al servicio Managed Kubernetes
- Un proyecto Harbor existente (o permisos para crear uno)
- Herramientas instaladas localmente:
  - Docker o Podman
  - kubectl (configurado en su clúster)
  - Helm v3.8+ (soporte OCI)
  - Opcional: `cosign` para firmas de imágenes
- Acceso de red saliente a `<HARBOR_URL>` en HTTPS (443)
- No se requiere ningún certificado adicional: el certificado TLS de Harbor es público y reconocido

## Conceptos esenciales

- Proyecto: espacio lógico (público o privado) que contiene repositorios.
- Repositorio: colección de etiquetas para una imagen dada (`<PROJET>/app-web:1.0.0`).
- Cuentas de robot: identidades técnicas con privilegios limitados, destinadas a CI/CD.
- Escaneos de vulnerabilidades: análisis automático (ej: Trivy) al subir y bajo demanda.
- Políticas: inmutabilidad de las etiquetas, retención, reglas de seguridad.
- Artefactos OCI: imágenes, gráficos Helm (OCI), SBOM, firmas.

## Conexión al registro (Docker / Podman)

Preferir una **cuenta de robot** asociada al proyecto para las operaciones CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Usuario: `<ROBOT_USERNAME>` (ex: `robot$monprojet+pusher`)
- Contraseña: `<ROBOT_TOKEN>`

>ℹ️[Certificats]
>La instancia Harbor gestionada por Cloud Temple cuenta con un certificado público reconocido. Normalmente, no se requiere ninguna configuración adicional de CA en Docker o Podman.

## Crear un proyecto

A través de la UI de Harbor:

- Projects > New Project
- Nombre: `<PROJET>`, visibilidad: Private (recomendado)
- Opciones: activar la inmutabilidad de los tags, el auto-escaneo al hacer push, etc.

>ℹ️[Mejores prácticas]
>
>- Un proyecto por aplicación o por dominio funcional.
>- Restringir los roles (maintainer, developer, guest).
>- Activar el auto-escaneo y las políticas de retención.

## Subir una imagen

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
- Inmutabilidad de las etiquetas para evitar sobrescrituras
- Etiquetas semánticas: `1.2.3`, `1.2`, `latest` (use `latest` con precaución)

## Extraer una imagen

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Verifique los resultados del escaneo y la firma (si activée) antes de la promoción a producción.

## Utilizar imágenes en Kubernetes

### 1) Crear un secreto de extracción

```bash
kubectl create secret docker-registry harbor-pull-secret \
  --docker-server=<HARBOR_URL> \
  --docker-username='<ROBOT_USERNAME>' \
  --docker-password='<ROBOT_TOKEN>' \
  -n <NAMESPACE>
```

>ℹ️El parámetro --docker-email ya no es obligatorio en las versiones recientes de kubectl (y puede omitirse).

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

### 3) Probar el pull desde el clúster (opcional)

Verifique rápidamente que el nodo pueda extraer su imagen con el secreto:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Para una promoción a producción, prefiera el uso de un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Cuentas de robot y permisos

- Projects > `<PROJET>` > Robot Accounts > New Robot
- Scopes: limitar a las acciones necesarias (`pull` para runtime, `push` para CI)
- Expiration: definir una duración y un proceso de rotación
- Almacenar el token como secreto (Kubernetes/CI)

>⚠[Moindre privilège] : No utilicen cuentas personales para sus pipelines. Prefieran un robot por proyecto, o incluso por entorno.

## Escaneos de vulnerabilidades

- Activar « Scan on push » a nivel de proyecto
- Disparar bajo demanda desde la UI o la API
- Configurar políticas: bloquear el pull si la severidad >= `High` (según gobernanza)

Puede exportar los informes (JSON) o mostrar las CVE y las capas afectadas.

## Retención e inmutabilidad

- Retención: conservar, por ejemplo, las últimas `N` tags que coincidan con un patrón (ej: `release-*`)
- Inmutabilidad: impedir la sobrescritura de tags existentes
- Garbage Collection: planificada por la administración de Harbor (elimina los blobs huérfanos)

Estos mecanismos reducen el costo de almacenamiento y refuerzan la trazabilidad.

## Charts Helm (OCI)

Helm v3.8+ admite OCI de forma nativa.

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

## Firmas y SBOM (Cadena de suministro)

Con `cosign`:

```bash
# Login (si nécessaire pour fetch public key dans Harbor)
cosign login <HARBOR_URL>

# Signer une image (clé locale ou KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Vérifier la signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

>ℹ️En las versiones antiguas de cosign, puede ser necesario exportar COSIGN_EXPERIMENTAL=1.


Harbor puede mostrar las atestaciones (firmas, SBOM) y hacer cumplir políticas de firma.

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
  - Verificar los permisos de la cuenta de robot en el proyecto y/o el nombre del repositorio
- `name unknown` / `manifest unknown`
  - Proyecto inexistente, repositorio mal escrito, tag inexistente
- `x509: certificate signed by unknown authority`
  - Actualizar el almacén de certificados del runner (ca-certificates), verificar la ausencia de un proxy TLS de intercepción; agregar la CA del proxy si es necesario y/o sincronizar la hora del sistema
- 401/403 durante el pull en Kubernetes
  - Secret `imagePullSecrets` ausente o credenciales expiradas
- `413 Request Entity Too Large`
  - Tamaño de la imagen demasiado grande en comparación con la configuración del Ingress/Registry; optimizar la imagen o ajustar la configuración (via support Cloud Temple)

## Buenas prácticas

- Proyectos privados por defecto, separación dev/preprod/prod
- Cuentas de servicio dedicadas, rotación regular de tokens
- Inmutabilidad de los tags y promoción por digest
- Política de escaneo: umbral de severidad y remediación documentada
- Retención estricta, eliminación programada de artefactos obsoletos
- Registro/auditoría: exportar y conservar los logs de acceso/actividad
- Integración de SBOM y firmas para la cadena de suministro