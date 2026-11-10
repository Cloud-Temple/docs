---
title: Guía de inicio de OpenShift
---
import oshiftMenu_001 from '@site/docs/paas_openshift/images/oshift_menu_001.png'
import oshiftSubMenu_001 from '@site/docs/paas_openshift/images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from '@site/docs/paas_openshift/images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from '@site/docs/paas_openshift/images/oshift_menu_002.png'
import oshiftMenu_003 from '@site/docs/paas_openshift/images/oshift_menu_003.png'
import oshiftOrder_001 from '@site/docs/paas_openshift/images/oshift_order_001.png'

# Guía de inicio de OpenShift

Esta página le guía a través de los pasos iniciales para utilizar la oferta **OpenShift** desde la consola Cloud Temple. Siga estas instrucciones para explorar los menús y funcionalidades disponibles.

## Requisitos previos

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

### 2. Detalle de un cluster

Cuando hace clic en el **nombre de un cluster** en la lista, se muestra una página detallada con la información completa del cluster:

**Información de conectividad:**

- **URL de acceso**: Interfaz web del cluster
- **URL de API**: Punto de entrada API para las operaciones CLI

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

## Acceso a la interfaz de administración de OpenShift

Haga clic en la **URL de acceso** del clúster que desea administrar. Accederá al entorno de administración del clúster:

<img src={oshiftMenu_002} />

Tras autenticarse, podrá administrar su clúster:

<img src={oshiftMenu_003} />

### Recursos de su entorno

Esta es la información de conexión y de configuración propia de su entorno OpenShift.

#### Detalles de conexión

Para acceder a los diferentes componentes de OpenShift, asegúrese de que su inquilino esté registrado en la lista blanca en la consola (consulte la documentación: [Documentación de Cloud Temple](https://docs.cloud-temple.com/)).

- **URL Consola Inquilino** :
  [https://**su-id-inquilino**.shiva.cloud-temple.com/](https://**su-id-inquilino**.shiva.cloud-temple.com/)

- **Interfaz de usuario de OpenShift** :
  [https://ui-ocp01-**su-id**.paas.cloud-temple.com/](https://ui-ocp01-**su-id**.paas.cloud-temple.com/)

- **API externa** :
  [https://api-ocp01-**su-id**.paas.cloud-temple.com](https://api-ocp01-**su-id**.paas.cloud-temple.com)

- **GitOps (ARGOCD)** :
  [https://gitops-ocp01-**su-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**su-id**.paas.cloud-temple.com/applications)

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

La plataforma ofrece opciones flexibles para el **enrutamiento de flujos** y el **equilibrado de carga**:

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

#### Interconexión IaaS

Las configuraciones de red desempeñan un papel crucial para proteger las comunicaciones con OpenShift.

- **Red de interconexión**: 100.67.0.0/28
- **VIP del load balancer privado**: 100.67.0.3

Verifique que su firewall disponga de una interfaz dedicada y autorice el tráfico entre las redes especificadas.
