---
title: Guía de inicio rápido
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Desplegar una plataforma RedHat OpenShift dentro de su tenant

### Asignación de derechos de acceso

Es indispensable que el administrador del [Tenant](../console/iam/concepts.md#tenants) conceda el derecho de gestión de la plataforma OpenShift al usuario administrador de OpenShift para poder acceder a ella:

<img src={oshiftRights} />

### Acceso al entorno OpenShift dentro de un tenant

Después de la asignación de derechos, el módulo '__Openshift__' aparece en el menú de la consola Cloud Temple:

<img src={oshiftMenu_001} />

Entonces verá los clústeres OpenShift que están desplegados dentro de su tenant.

Haga clic en el clúster que desea administrar. Accederá al entorno de administración del clúster:

<img src={oshiftMenu_002} />

Después de la autenticación, puede administrar su clúster:

<img src={oshiftMenu_003} />

### Recursos de su entorno

Aquí está la información de conexión y configuración específica para su entorno OpenShift.

#### Detalles de conexión

Para acceder a los diferentes componentes de OpenShift, asegúrese de que su tenant esté en la lista blanca en la consola (consulte la documentación: [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__:
  [https://__su-id-tenant__.shiva.cloud-temple.com/](https://**su-id-tenant**.shiva.cloud-temple.com/)

- __OpenShift UI__:
  [https://ui-ocp01-__su-id__.paas.cloud-temple.com/](https://ui-ocp01-**su-id**.paas.cloud-temple.com/)

- __API externa__:
  [https://api-ocp01-__su-id__.paas.cloud-temple.com](https://api-ocp01-**su-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__:
  [https://gitops-ocp01-__su-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**su-id**.paas.cloud-temple.com/applications)

#### Conexión al clúster vía CLI

Para conectarse a través de la interfaz de línea de comandos (CLI), utilice el siguiente comando:

```bash
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com/ --web
```

#### Acceso al registro

Para acceder al registro, inicie sesión utilizando los siguientes comandos:

```bash
oc login https://api-ocp01-{su-id}.paas.cloud-temple.com --web
docker login -u {su-usuario} -p $(oc whoami -t) registry-ocp01-{su-id}.paas.cloud-temple.com
```

Luego, pruebe la construcción y carga de una imagen Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{su-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuración de routers y balanceadores de carga

La plataforma ofrece opciones flexibles para el __enrutamiento de flujos__ y el __equilibrio de carga__:

- Por defecto, se utilizan balanceadores de carga privados para las rutas y los ingresses.
- Dominios:
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
- __VIP del balanceador de carga privado__: 100.67.0.3

Verifique que su firewall disponga de una interfaz dedicada y autorice el tráfico entre las redes especificadas.
