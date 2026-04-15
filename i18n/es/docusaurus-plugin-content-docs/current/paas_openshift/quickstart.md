---
title: Guía de inicio
---
import oshiftMenu_001 from '@site/docs/paas_openshift/images/oshift_menu_001.png'
import oshiftSubMenu_001 from '@site/docs/paas_openshift/images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from '@site/docs/paas_openshift/images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from '@site/docs/paas_openshift/images/oshift_menu_002.png'
import oshiftMenu_003 from '@site/docs/paas_openshift/images/oshift_menu_003.png'
import oshiftOrder_001 from '@site/docs/paas_openshift/images/oshift_order_001.png'

# Guía Rápida para la oferta OpenShift

Esta página le guía a través de los pasos iniciales para utilizar la oferta **OpenShift** desde la consola Cloud Temple. Siga estas instrucciones para explorar los menús y funcionalidades disponibles.

## Requis previos

Antes de comenzar, asegúrese de cumplir los siguientes puntos:

1. **Suscripción activa**: Su organización debe tener suscrito el servicio OpenShift.
2. **Permisos de usuario**: Su cuenta de usuario debe contar con los permisos necesarios para acceder y gestionar los recursos de OpenShift.

## Primer acceso y comando

Al realizar su primer acceso a la oferta OpenShift, tras activar la suscripción y configurar los permisos, se muestra una pantalla de bienvenida:

<img src={oshiftOrder_001} />

Esta pantalla indica que aún no tiene ningún clúster OpenShift SecNumCloud desplegado.

**Para solicitar su primer clúster OpenShift SecNumCloud, póngase en contacto con el soporte de Cloud Temple.**

Una vez que su solicitud sea procesada por el soporte y su clúster desplegado, podrá acceder al menú de OpenShift.

## Acceso a la interfaz de OpenShift

Una vez desplegado su primer clúster, aparece un nuevo menú denominado **OpenShift** en la consola Cloud Temple. Este menú contiene un submenú principal: **Clusters**.

<img src={oshiftMenu_001} />

### 1. Lista de clusters

El submenú **Clusters** le presenta una tabla que muestra todos los clusters OpenShift disponibles, desplegados dentro de su tenant. Esta tabla incluye la información principal para cada cluster:

- **Nombre del cluster**
- **URL de acceso**
- **URL de la API**
- **Versión**
- **Estado**
- **Última actualización**

<img src={oshiftSubMenu_001} />

💡 **Para acceder a los detalles completos de un cluster, haga clic en su nombre en la tabla.**

### 2. Cluster details

When you click on a **cluster name** in the list, a detailed page appears with complete cluster information:

**Connectivity information:**
- **Access URL**: Web interface of the cluster
- **API URL**: API endpoint for CLI operations

**General information:**
- **Status**: Current state of the cluster
- **Last updated**: Date of the last modification
- **Version**: OpenShift version deployed

**Cluster nodes:**

A table details each node with the following information:
- **Node name**
- **Type**
- **AZ** (Availability Zone)
- **Status**
- **CPU**
- **RAM**

<img src={oshiftClusterDetail_001} />

## Acceso a la interfaz de administración de OpenShift

Haga clic en la **URL de acceso** del clúster que desea administrar. Accederá al entorno de administración del clúster:

<img src={oshiftMenu_002} />

Tras autenticarse, podrá administrar su clúster:

<img src={oshiftMenu_003} />

### Resources of your environment

Here are the connection and configuration details specific to your OpenShift environment.

#### Detalles de conexión

Para acceder a los diferentes componentes de OpenShift, asegúrese de que su inquilino esté registrado en la lista blanca en la consola (consulte la documentación: [Documentación de Cloud Temple](https://docs.cloud-temple.com/)).

- __URL Consola Inquilino__ :
  [https://__su-id-inquilino__.shiva.cloud-temple.com/](https://**su-id-inquilino**.shiva.cloud-temple.com/)

- __Interfaz de usuario de OpenShift__ :
  [https://ui-ocp01-__su-id__.paas.cloud-temple.com/](https://ui-ocp01-**su-id**.paas.cloud-temple.com/)

- __API externa__ :
  [https://api-ocp01-__su-id__.paas.cloud-temple.com](https://api-ocp01-**su-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__su-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**su-id**.paas.cloud-temple.com/applications)

#### Conexión al clúster mediante CLI

Para conectarse mediante la línea de comandos (CLI), utilice el siguiente comando:

```bash
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com/ --web
```

#### Acceso al registro

Para acceder al registro, inicie sesión utilizando los siguientes comandos:

```bash
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com --web
docker login -u {su-usuario} -p $(oc whoami -t) registry-ocp01-{su-id}.paas.cloud-temple.com
```

A continuación, pruebe la compilación y carga de una imagen Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuración de routers y Load Balancers

La plataforma ofrece opciones flexibles para el __enrutamiento de flujos__ y el __equilibrado de carga__:

- Por defecto, se utilizan balanceadores de carga privados para rutas e ingresses.
- Dominios:
  - `*.apps-priv-ocp01-{su-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{su-id}.paas.cloud-temple.com`

Asegúrese de que sus rutas o ingresses estén configurados con las etiquetas o clases de ingress adecuadas para garantizar un enrutamiento correcto.

Ejemplo:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### IaaS Interconnection

Network configurations play a crucial role in securing communications with OpenShift.

- __Interconnection network__: 100.67.0.0/28
- __Private load balancer VIP__: 100.67.0.3

Ensure your firewall has a dedicated interface and allows traffic between the specified networks.