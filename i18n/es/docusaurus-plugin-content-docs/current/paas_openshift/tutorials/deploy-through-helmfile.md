---
title : Desplegar a través de HelmFile
---

# Desplegar con Helmfile

---

## Objetivos

El objetivo principal de este tutorial es mostrar cómo desplegar aplicaciones en nuestro PaaS OpenShift utilizando **Helmfile** para orquestar varios charts Helm juntos.

Exponga el servicio front-end mediante HTTP/HTTPS.

## Limitaciones conocidas

El contexto de esta demostración es el siguiente:

- Respeta las restricciones de OpenShift **(SCC restricted-V2)**.
- Despliegue únicamente de **contenedores sin privilegios** (UID > 30000).
- Sin uso de **CRD personalizados**.
- Sin acceso al rol de la plataforma como **cluster-admin**.
- Sin despliegue a nivel de clúster (**instalación cluster-wide**).
- Sin **creación de namespaces** a través de Helmfile (para evitar conflictos de permisos).

## Puntos fuertes

- Demostración del despliegue de un front-end (Nginx) y un back-end (PostgreSQL) utilizando Helmfile.

## Versiones de los software

- OpenShift CLI : 4.17.6
- Helm : v3.16.3
- Helmfile : v0.169.2
- OpenShift : v4.15
- PostgreSQL : v17.2.0-debian-12-r5
- Nginx : v1.27.3

---

## Prerrequisitos

Antes de comenzar esta demostración, asegúrese de tener las siguientes herramientas y recursos:

1. **Herramientas CLI**
   - **OpenShift CLI (`oc`)** : [Documentación](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)
   - **Helm** : [Documentación](https://helm.sh/docs/)
   - **Helmfile** : [Documentación](https://helmfile.readthedocs.io/en/latest/)

2. **Entorno OpenShift**

   - Un clúster OpenShift funcional gestionado por Cloud Temple.

3. **Acceso y permisos**
   - Rol de cliente admin para crear proyectos y desplegar recursos.

---

## Plan de demostración

### Vista general de las etapas

1. Preparar el entorno y las herramientas.
2. Desplegar aplicaciones utilizando Helmfile:
   - **nginx** : Un servidor web simple.
   - **PostgreSQL** : Un servidor de base de datos.
3. Verificar el despliegue:
   - Confirmar que las configuraciones rootless están aplicadas.
   - Probar la funcionalidad de las aplicaciones.
4. Explorar casos de uso avanzados y extensiones.

---

## Archivos necesarios

Para comenzar, necesitará nuestro **Repositorio de demostración**

- Descárguelo [aquí](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) en el directorio `/examples/deploy-through-helmfile/`.

Ahí encontrará tres archivos:

- `Helmfile.yaml` : Manifiesto de despliegue que permite a Helmfile definir y orquestar el despliegue de los charts Helm.
- `nginx-values.yaml` : Especifica la configuración y el comportamiento de Nginx.
- `postgres-values.yaml` : Especifica la configuración y el comportamiento de PostgreSQL.

---

### `Helmfile.yaml`

El archivo principal de configuración de Helmfile.
Define los repositorios, los charts Helm y los valores personalizados para cada aplicación.

#### Análisis línea por línea

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Descripción** : Define el comportamiento predeterminado de los comandos Helm ejecutados a través de Helmfile.
- **Detalle** :
  - `createNamespace: false` : Evita que Helm intente crear namespaces durante el despliegue.
- **Impacto** :
  - Asegura que el namespace debe existir antes de iniciar el despliegue de los charts.
  - Reduce los errores en entornos con permisos limitados.

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Descripción** : Define los repositorios Helm que contienen los charts necesarios.
- **Detalle** :
  - `name` : Alias del repositorio Helm.
  - `url` : URL del repositorio Bitnami, que contiene charts comúnmente utilizados, compatibles con OpenShift.

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Descripción** : Define una aplicación Helm denominada **nginx**.
- **Detalle** :
  - `name` : Nombre de la release Helm.
  - `namespace` : Namespace de Kubernetes en el que se desplegará esta aplicación.
  - `chart` : Chart Helm utilizado, en este caso `bitnami/nginx`, obtenido desde el repositorio Bitnami.
  - `values` : Archivo YAML que contiene configuraciones específicas para el despliegue, en este caso `nginx-values.yaml`.

---

### `nginx-values.yaml`

Archivo de configuración para el despliegue de **Nginx**.

---

### `postgres-values.yaml`

Proporciona la configuración para el despliegue de **PostgreSQL**.

---

## Desarrollo del despliegue

### 1. Instalar los prerrequisitos

Asegúrese de que todas las herramientas mencionadas en la sección de software estén instaladas.
Siga las siguientes guías si es necesario:

- [Guía OCP CLI](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)
- [Guía Helmfile](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Conexión al clúster OpenShift

Autentíquese en su clúster OpenShift con el siguiente comando:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Atención** :
> Modifique `--server=url` con la URL de su instancia Cloud Temple PaaS.

---

### 3. Crear un namespace dedicado

Este namespace aislará los recursos de la demostración:

```bash
oc new-project poc-helmfile
```

---

### 4. Desplegar las aplicaciones con Helmfile

Utilice el siguiente comando:

```bash
helmfile sync
```

---

### 5. Verificación del despliegue

- **Verifique los pods** :

```bash
oc get pods -n poc-helmfile
```

---

### 6. Probar los servicios

Exponga los servicios desplegados para probar su accesibilidad y su correcto funcionamiento.

#### 1. Creación de rutas

Exponga el servicio Nginx configurando rutas HTTP o HTTPS:

- **Para HTTPS** :

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Para HTTP** :

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Agregar una etiqueta para una exposición pública

Agregue una etiqueta específica al enrutador para que su servicio sea accesible públicamente:

- Para la ruta HTTPS:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Para la ruta HTTP:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Estas etapas garantizan que sus rutas estén expuestas correctamente.

---

### 7. Verificar las rutas y acceder a las aplicaciones

#### 1. Lista de rutas disponibles

Verifique que las rutas hayan sido creadas correctamente:

```bash
oc get routes -n poc-helmfile
```

Ejemplo de salida:

| Nombre      | Host/Port                                                                        | Servicio | Puerto | Resolución TLS | Etiqueta                                  |
|-------------|----------------------------------------------------------------------------------|----------|--------|----------------|-------------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080   | Ninguna        | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080   | Edge (TLS)     | `ct-router-type=public`                   |

#### 2. Acceda a las aplicaciones

Utilice las URL listadas en la columna « Host/Port » para acceder a las aplicaciones. Aquí hay un ejemplo:

- Para HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Para HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Debería ver una respuesta de tipo servidor web desde el **front-end Nginx** desplegado.

---

## Criterios de validación

Para garantizar el éxito de esta demostración, verifique los siguientes elementos:

1. **Las dos aplicaciones se ejecutan sin errores**.
2. Los pods utilizan UIDs > 30000, conforme a las restricciones de los contenedores rootless.
3. No se ha desplegado ningún CRD personalizado.
4. Los servicios desplegados son accesibles a través de sus rutas definidas (verifique Nginx en HTTP y HTTPS).

---

## Conclusión

Ahora tiene un ejemplo completo de despliegue de aplicaciones front-end y back-end en OpenShift con Helmfile. Este método ofrece una gestión modular y robusta de entornos complejos.

Ahora domina el despliegue a través de **Helmfile** en OpenShift en un entorno gestionado por Cloud Temple. 🚀
