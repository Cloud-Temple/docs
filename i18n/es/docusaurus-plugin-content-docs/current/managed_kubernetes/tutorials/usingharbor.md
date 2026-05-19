---
title: Usar Harbor
---

Harbor es un registro de artefactos OCI (imágenes de contenedor, charts Helm, SBOM, firmas, etc.) que ofrece una gestión fina de proyectos, control de acceso, análisis de vulnerabilidades, políticas de retención y gestión de firmas. Esta guía explica cómo utilizarlo con Cloud Temple Managed Kubernetes, desde la conexión al registro hasta la integración en sus despliegues de Kubernetes y sus pipelines CI/CD.

:::note
En esta guía, reemplace las siguientes variables por sus valores:

- `<IDENTIFIANT>` : código de su clúster (ej: `ctodev`)
- `<HARBOR_URL>` : URL pública de Harbor construida de la siguiente manera: `harbor.external-secured.<IDENTIFIANT>.mk.ms-cloud-temple.com` (ej: `harbor.external-secured.ctodev.mk.ms-cloud-temple.com`)
- `<PROJET>` : nombre de su proyecto de Harbor
- `<NAMESPACE>` : namespace de Kubernetes destino
- `<ROBOT_USERNAME>` / `<ROBOT_TOKEN>` : credenciales de una cuenta robot de Harbor

:::

## Prerrequisitos

- Acceso a la Consola y al servicio Managed Kubernetes
- Un proyecto Harbor existente (ou droits pour en créer un)
- Herramientas instaladas localmente:
  - Docker o Podman
  - kubectl (configuré sur votre cluster)
  - Helm v3.8+ (support OCI)
  - Opcional: `cosign` para firmas de imágenes
- Acceso de red saliente hacia `<HARBOR_URL>` en HTTPS (443)
- No se requiere ningún certificado adicional: el certificado TLS de Harbor es público y reconocido

## Conceptos esenciales

- Proyecto: espacio lógico (público o privado) que contiene repositorios.
- Repositorio: colección de etiquetas para una imagen dada (`<PROJET>/app-web:1.0.0`).
- Cuentas robot: identidades técnicas con privilegios limitados, destinadas a CI/CD.
- Escaneos de vulnerabilidades: análisis automático (ej.: Trivy) en la carga y bajo demanda.
- Políticas: inmutabilidad de las etiquetas, retención, reglas de seguridad.
- Artefactos OCI: imágenes, gráficos Helm (OCI), SBOM, firmas.

## Conexión al registro (Docker / Podman)

Prefiera una **cuenta robot** asociada al proyecto para las operaciones de CI/CD.

```bash
# Docker
docker login <HARBOR_URL>

# Podman
podman login <HARBOR_URL>
```

- Usuario: `<ROBOT_USERNAME>` (ex: `robot$monprojet+pusher`)
- Contraseña: `<ROBOT_TOKEN>`

:::tip[Certificados
]
La instancia de Harbor gestionada por Cloud Temple presenta un certificado público reconocido. No es necesaria ninguna configuración adicional de CA en Docker o Podman.
:::

## Crear un proyecto

A través de la interfaz de Harbor:

- Proyectos > Nuevo proyecto
- Nombre: `<PROJET>`, visibilidad: Privado (recomendado)
- Opciones: habilitar la inmutabilidad de las etiquetas, el autoescaneo en push, etc.

:::info[Buenas prácticas
]

- Un proyecto por aplicación o por dominio funcional.
- Restringir los roles (mantenedor, desarrollador, invitado).
- Habilitar el autoescaneo y las políticas de retención.

:::

## Subir una imagen

Exemple con Docker:

```bash
# Construir localmente
docker build -t app-web:1.0.0 .

# Etiquetar para Harbor
docker tag app-web:1.0.0 <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Subir
docker push <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Organisation recomendada:

- `<PROJET>/<service>:<version>` (ex: `payments/api:2.3.4`)
- Inmutabilidad de las etiquetas para evitar sobrescrituras
- Etiquetas semánticas: `1.2.3`, `1.2`, `latest` (utilice `latest` con precaución)

## Extraer una imagen

```bash
docker pull <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

Verifique los resultados del escaneo y la firma (si está activada) antes de promover a producción.

## Utilizar las imágenes en Kubernetes

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

### 2) Referenciar el secreto en tus cargas de trabajo

- A través de la ServiceAccount:

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

Verifique rápidamente que el nodo puede extraer su imagen con el secreto:

```bash
kubectl run pull-check --rm -it --image=<HARBOR_URL>/<PROJET>/app-web:1.0.0 \
  --overrides='{"spec":{"imagePullSecrets":[{"name":"harbor-pull-secret"}]}}' \
  -n <NAMESPACE> --command -- sh -c 'echo OK'
```

Para una promoción a producción, utilice preferentemente un digest:

```yaml
image: <HARBOR_URL>/<PROJET>/app-web@sha256:<DIGEST>
```

## Cuentas de robot y permisos

- Proyectos > `<PROJET>` > Cuentas de robot > Nuevo robot
- Ámbitos: limitar a las acciones necesarias (`pull` para runtime, `push` para CI)
- Expiración: definir una duración y un proceso de rotación
- Almacenar el token en secreto (Kubernetes/CI)

:::caution[Principio de menor privilegio
]
No utilice cuentas personales para sus pipelines. Prefiera un robot por proyecto, e incluso por entorno.
:::

## Escaneos de vulnerabilidades

- Activar « Scan on push » a nivel de proyecto
- Ejecutar bajo demanda desde la UI o la API
- Configurar políticas: bloquear el pull si la severidad >= `High` (según la gobernanza)

Puede exportar los informes (JSON) o visualizar las CVE y las capas afectadas.

## Retención e inmutabilidad

- Retención: conservar, por ejemplo, las `N` últimas etiquetas que coincidan con un patrón (ej: `release-*`)
- Inmutabilidad: impedir la reescritura de etiquetas existentes
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

## Firmas y SBOM (Supply Chain)

Con `cosign`:

```bash
# Login (si nécessaire pour fetch public key dans Harbor)
cosign login <HARBOR_URL>

# Signer une image (clé locale ou KMS)
cosign sign <HARBOR_URL>/<PROJET>/app-web:1.0.0

# Vérifier la signature
cosign verify <HARBOR_URL>/<PROJET>/app-web:1.0.0
```

:::note
En versiones antiguas de cosign, puede ser necesario exportar COSIGN_EXPERIMENTAL=1.
:::

Harbor puede mostrar las atestaciones (signatures, SBOM) y hacer cumplir las políticas de firma.

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
  - Verificar los permisos de la cuenta robot en el proyecto y/o el nombre del repositorio
- `name unknown` / `manifest unknown`
  - Proyecto inexistente, repositorio mal escrito, etiqueta inexistente
- `x509: certificate signed by unknown authority`
  - Actualizar el almacén de certificados del runner (ca-certificates), verificar la ausencia de un proxy TLS interceptante; agregar la CA del proxy si es necesario y/o sincronizar la hora del sistema
- 401/403 lors du pull dans Kubernetes
  - Falta el secreto `imagePullSecrets` o las credenciales han expirado
- `413 Request Entity Too Large`
  - Tamaño de imagen demasiado grande en relación con la configuración del Ingress/Registry; optimizar la imagen o ajustar la configuración (vía soporte Cloud Temple)

## Buenas prácticas

- Proyectos privados por defecto, separación dev/preprod/prod
- Cuentas de robot dedicadas, rotación regular de tokens
- Inmutabilidad de las etiquetas y promoción por digest
- Política de escaneo: umbral de severidad y remediación documentada
- Retención estricta, eliminación programada de artefactos obsoletos
- Registro/Auditoría: exportar y conservar los logs de acceso/actividad
- Integración de SBOM y firmas para la cadena de suministro