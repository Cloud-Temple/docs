---
title: Guía de inicio
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

# QuickStart para la oferta OpenShift

Esta página le guía a través de los pasos iniciales para utilizar la oferta **OpenShift** desde la consola Cloud Temple. Siga estas instrucciones para descubrir los menús y funcionalidades disponibles.

---

## Prerrequisitos

Antes de comenzar, asegúrese de los siguientes puntos:

1. **Suscripción activada**: Su organización debe haber suscrito la oferta OpenShift.
2. **Permisos de usuario**: Su cuenta de usuario debe tener los derechos necesarios para acceder y gestionar los recursos OpenShift.

---

## Acceso a la interfaz OpenShift

Una vez activada la suscripción y configurados los permisos, un nuevo menú titulado **OpenShift** aparece en la consola Cloud Temple. Este menú contiene un submenú principal: **Clusters**.

<img src={oshiftMenu_001} />

---

### 1. Submenú **Clusters**

El submenú **Clusters** le presenta una tabla que lista todos los clusters OpenShift disponibles, desplegados dentro de su tenant. Esta tabla incluye la información principal para cada cluster:

- **Nombre del cluster**
- **URL de acceso**
- **URL API**
- **Versión**
- **Estado**
- **Última actualización**

<img src={oshiftSubMenu_001} />

#### Funcionalidad principal

- **Nombre clicable**: Al hacer clic en el nombre de un cluster OpenShift, se muestra una nueva página con los **detalles completos** del cluster:
  - Información de conectividad para la gestión (**URL de acceso**, **URL de API**).
  - Información general (**Estado**, **Última actualización**, **Versión**)
  - Tabla de nodos incluyendo la información:
    - **Nombre del nodo**
    - **Tipo**
    - **AZ**
    - **Estado**
    - **CPU**
    - **RAM**

<img src={oshiftClusterDetail_001} />

---

## Acceso a la interfaz de administración OpenShift

Haga clic en la **URL de acceso** del cluster que desea administrar. Accederá al entorno de administración del cluster:

<img src={oshiftMenu_002} />

Después de la autenticación, puede administrar su cluster:

<img src={oshiftMenu_003} />

### Resources of your environment

Aquí están las informaciones de conexión y configuración específicas de su entorno OpenShift.

#### Detalles de conexión

Para acceder a los diferentes componentes OpenShift, asegúrese de que su tenant esté inscrito en la lista blanca en la consola (consulte la documentación: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__:
  [https://__su-id-tenant__.shiva.cloud-temple.com/](https://**su-id-tenant**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__su-id__.paas.cloud-temple.com/](https://ui-ocp01-**su-id**.paas.cloud-temple.com/)

- __API externa__:
  [https://api-ocp01-__su-id__.paas.cloud-temple.com](https://api-ocp01-**su-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__su-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**su-id**.paas.cloud-temple.com/applications)

#### Conexión al cluster vía CLI

Para conectarse a través de la línea de comandos (CLI), utilice el siguiente comando:

```bash
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com/ --web
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com/ --web
```

#### Acceso al registro

Para acceder al registro, conéctese utilizando los siguientes comandos:

```bash
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com --web
docker login -u {su-usuario} -p $(oc whoami -t) registry-ocp01-{su-id}.paas.cloud-temple.com
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com --web
docker login -u {su-usuario} -p $(oc whoami -t) registry-ocp01-{su-id}.paas.cloud-temple.com
```

Luego, pruebe la construcción y carga de una imagen Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker tag <namespace>/temp:latest registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuración de routers y Load Balancers
#### Configuración de routers y Load Balancers

La plataforma ofrece opciones flexibles para el __enrutamiento de flujos__ y el __equilibrio de carga__:

- Por defecto, se utilizan load balancers privados para las rutas y los ingresses.
- Dominios:
  - `*.apps-priv-ocp01-{su-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{su-id}.paas.cloud-temple.com`
  - `*.apps-priv-ocp01-{su-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{su-id}.paas.cloud-temple.com`

Asegúrese de que sus rutas o ingresses estén configurados con las etiquetas o clases de ingress apropiadas para garantizar un enrutamiento correcto.

Ejemplo:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconexión IaaS

Las configuraciones de red juegan un papel crucial para asegurar las comunicaciones con OpenShift.

- __Red de interconexión__: 100.67.0.0/28
- __VIP del load balancer privado__: 100.67.0.3

Verifique que su firewall disponga de una interfaz dedicada y autorice el tráfico entre las redes especificadas.
