---
title: Guía de inicio
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'
import oshiftOrder_001 from './images/oshift_order_001.png'

# QuickStart para la oferta OpenShift

Esta página le guía a través de los pasos iniciales para utilizar la oferta **OpenShift** desde la consola Cloud Temple. Siga estas instrucciones para descubrir los menús y funcionalidades disponibles.

---

## Prerrequisitos

Antes de comenzar, asegúrese de los siguientes puntos:

1. **Suscripción activada**: Su organización debe haber suscrito la oferta OpenShift.
2. **Permisos de usuario**: Su cuenta de usuario debe tener los derechos necesarios para acceder y gestionar los recursos OpenShift.

---

## Primer acceso y pedido

En su primer acceso a la oferta OpenShift, después de la activación de la suscripción y la configuración de permisos, se muestra una pantalla de bienvenida:

<img src={oshiftOrder_001} />

Esta pantalla indica que aún no tiene clusters OpenShift SecNumCloud desplegados.

**Para pedir su primer cluster OpenShift SecNumCloud, contacte por favor con el soporte de Cloud Temple.**

Una vez que su pedido haya sido procesado por el soporte y su cluster desplegado, podrá acceder al menú OpenShift.

---

## Acceso a la interfaz OpenShift

Una vez desplegado su primer cluster, un nuevo menú titulado **OpenShift** aparece en la consola Cloud Temple. Este menú contiene un submenú principal: **Clusters**.

<img src={oshiftMenu_001} />

---

### 1. Lista de clusters

El submenú **Clusters** le presenta una tabla que lista todos los clusters OpenShift disponibles, desplegados dentro de su tenant. Esta tabla incluye la información principal para cada cluster:

- **Nombre del cluster**
- **URL de acceso**
- **URL API**
- **Versión**
- **Estado**
- **Última actualización**

<img src={oshiftSubMenu_001} />

💡 **Para acceder a los detalles completos de un cluster, haga clic en su nombre en la tabla.**

---

### 2. Detalles del cluster

Cuando hace clic en el **nombre de un cluster** en la lista, se muestra una página detallada con la información completa del cluster:

**Información de conectividad:**
- **URL de acceso**: Interfaz web del cluster
- **URL de API**: Punto de entrada API para operaciones CLI

**Información general:**
- **Estado**: Estado actual del cluster
- **Última actualización**: Fecha de la última modificación
- **Versión**: Versión de OpenShift desplegada

**Nodos del cluster:**

Una tabla detalla cada nodo con la siguiente información:
- **Nombre del nodo**
- **Tipo**
- **AZ** (Availability Zone)
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
