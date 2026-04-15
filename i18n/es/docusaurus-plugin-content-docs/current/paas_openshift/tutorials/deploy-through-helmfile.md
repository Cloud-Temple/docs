---
title : Implementación a través de HelmFile
---

# Desplegar con Helmfile

---

## Objetivos

El objetivo principal de este tutorial es mostrar cómo desplegar aplicaciones en nuestro PaaS OpenShift utilizando **Helmfile** para orquestar múltiples charts de Helm juntos.

Exponer el servicio de front-end a través de HTTP/HTTPS.

## Limitaciones conocidas

El contexto de esta demostración es el siguiente:

- Respeta las restricciones de OpenShift **(SCC restricted-V2)**.
- Despliegue únicamente de **contenedores sin privilegios** (UID > 30000).
- Ningún uso de **CRD personalizados**.
- Sin acceso al rol de plataforma como **cluster-admin**.
- Ningún despliegue a nivel de clúster (**instalación cluster-wide**).
- Ninguna **creación de namespaces** mediante Helmfile (para evitar conflictos de permisos).

## Puntos fuertes

- Demostración del despliegue de un front-end (Nginx) y un back-end (PostgreSQL) utilizando Helmfile.

## Versiones de software

- OpenShift CLI: 4.17.6  
- Helm: v3.16.3  
- Helmfile: v0.169.2  
- OpenShift: v4.15  
- PostgreSQL: v17.2.0-debian-12-r5  
- Nginx: v1.27.3  

---

## Prerrequisitos

Antes de comenzar esta demostración, asegúrate de tener las siguientes herramientas y recursos:

1. **Herramientas CLI**  
   - **OpenShift CLI (`oc`)**: [Documentación](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
   - **Helm**: [Documentación](https://helm.sh/docs/)  
   - **Helmfile**: [Documentación](https://helmfile.readthedocs.io/en/latest/)

2. **Entorno OpenShift**

   - Un clúster funcional de OpenShift gestionado por Cloud Temple.

3. **Accesos y permisos**  
   - Rol de cliente admin para crear proyectos y desplegar recursos.

---

## Plan de demostración

### Resumen de pasos

1. Preparar el entorno y las herramientas.  
2. Desplegar aplicaciones utilizando Helmfile:  
   - **nginx**: Un servidor web simple.  
   - **PostgreSQL**: Un servidor de bases de datos.  
3. Verificar el despliegue:  
   - Confirmar que las configuraciones rootless se han aplicado.  
   - Probar la funcionalidad de las aplicaciones.  
4. Explorar casos de uso avanzados y extensiones.  

---

## Archivos necesarios

Para empezar, necesitarás nuestro **Repositorio de demostración**

- Descárgalo [aquí](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) en el directorio `/examples/deploy-through-helmfile/`.

Encontrarás tres archivos:

- `Helmfile.yaml`: Manifiesto de despliegue que permite a Helmfile definir y orquestar el despliegue de charts de Helm.  
- `nginx-values.yaml`: Especifica la configuración y el comportamiento de Nginx.  
- `postgres-values.yaml`: Especifica la configuración y el comportamiento de PostgreSQL.  

---

### `Helmfile.yaml`

El archivo principal de configuración de Helmfile.  
Define los repositorios, los charts de Helm y los valores personalizados para cada aplicación.

#### Análisis línea por línea

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Descripción**: Define el comportamiento por defecto de los comandos de Helm ejecutados a través de Helmfile.
- **Detalle**:
  - `createNamespace: false`: Evita que Helm intente crear namespaces durante el despliegue.  
- **Impacto**:
  - Asegura que el namespace debe existir antes de lanzar el despliegue de los charts.  
  - Reduce los errores en entornos con permisos limitados.  

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Descripción**: Define los repositorios de Helm que contienen los charts necesarios.  
- **Detalle**:  
  - `name`: Alias del repositorio de Helm.  
  - `url`: URL del repositorio Bitnami, que contiene charts comúnmente usados, compatibles con OpenShift.  

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Descripción**: Define una aplicación de Helm llamada **nginx**.  
- **Detalle**:  
  - `name`: Nombre del release de Helm.  
  - `namespace`: Namespace de Kubernetes en el que se desplegará esta aplicación.  
  - `chart`: Chart de Helm utilizado, aquí `bitnami/nginx`, recuperado desde el repositorio de Bitnami.  
  - `values`: Archivo YAML que contiene configuraciones específicas para el despliegue, aquí `nginx-values.yaml`.  

---

### `nginx-values.yaml`

Archivo de configuración para el despliegue de **Nginx**.  

---

### `postgres-values.yaml`

Proporciona la configuración para el despliegue de **PostgreSQL**.

---

## Proceso de despliegue

### 1. Instalar los prerrequisitos

Asegúrate de que todas las herramientas mencionadas en la sección sobre versiones de software están instaladas.  
Sigue las siguientes guías si es necesario:  

- [Guía de OCP CLI](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Guía de Helmfile](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Conexión al clúster de OpenShift

Autentícate con tu clúster de OpenShift con el siguiente comando:

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Atención**:  
> Modifica `--server=url` con la URL de tu instancia de PaaS de Cloud Temple.

---

### 3. Crear un namespace dedicado

Este namespace aislará los recursos de demostración:

```bash
oc new-project poc-helmfile
```

---

### 4. Desplegar las aplicaciones con Helmfile

Utiliza el siguiente comando:

```bash
helmfile sync
```

---

### 5. Verificación del despliegue

- **Verifica los pods**:  

```bash
oc get pods -n poc-helmfile
```

---

### 6. Probar los servicios

Expón los servicios desplegados para probar su accesibilidad y correcto funcionamiento.

#### 1. Creación de rutas

Expón el servicio Nginx configurando rutas HTTP o HTTPS:

- **Para HTTPS**:

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Para HTTP**:

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Añadir una etiqueta para exposición pública

Añade una etiqueta específica al enrutador para que tu servicio sea accesible públicamente:

- Para la ruta HTTPS:

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Para la ruta HTTP:

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Estos pasos garantizan que tus rutas sean expuestas correctamente.

---

### 7. Verificar las rutas y acceder a las aplicaciones

#### 1. Lista de rutas disponibles

Verifica que las rutas han sido creadas correctamente:

```bash
oc get routes -n poc-helmfile
```

Ejemplo de salida:

| Nombre       | Host/Port                                                                         | Servicio | Puerto | Resolución TLS | Etiqueta                                   |
|--------------|-----------------------------------------------------------------------------------|----------|--------|----------------|-------------------------------------------|
| nginx        | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com           | nginx    | 8080   | Ninguno        | `ct-router-type=public`                   |
| nginx-tls    | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com       | nginx    | 8080   | Edge (TLS)     | `ct-router-type=public`                   |

#### 2. Acceder a las aplicaciones

Utiliza las URLs listadas en la columna "Host/Port" para acceder a las aplicaciones. Aquí hay un ejemplo:

- Para HTTP: `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Para HTTPS: `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Deberías ver una respuesta del servidor web desde el **front-end Nginx** desplegado.

---

## Criterios de validación

Para garantizar el éxito de esta demostración, verifica los siguientes elementos:

1. **Ambas aplicaciones se están ejecutando sin errores**.  
2. Los pods usan UID > 30000, conforme a las restricciones de contenedores rootless.  
3. Ningún CRD personalizado ha sido desplegado.  
4. Los servicios desplegados son accesibles a través de sus rutas definidas (verifica Nginx en HTTP y HTTPS).  

---

## Conclusión

Ahora tienes un ejemplo completo de cómo desplegar aplicaciones de front-end y back-end en OpenShift utilizando Helmfile. Este método ofrece una gestión modular y robusta de entornos complejos.

Ahora dominas el despliegue a través de **Helmfile** en OpenShift en un entorno gestionado por Cloud Temple. 🚀
