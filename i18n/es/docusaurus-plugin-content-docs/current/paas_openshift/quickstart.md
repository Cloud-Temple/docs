---
title: Guía de inicio
---
import oshiftRights from './images/oshift_rights.png'
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

## Deploy a Red Hat OpenShift platform within your tenant

### Asignación de permisos de acceso

Es imprescindible que el administrador del [Tenant](../console/iam/concepts.md#tenant) otorgue los permisos de lectura y gestión de la plataforma OpenShift al usuario administrador de OpenShift para poder acceder a ella:

<img src={oshiftRights} />

### Acceso al entorno OpenShift dentro de un tenant

Después de asignar los permisos, el módulo '__OpenShift__' aparece entonces en el menú de la consola Cloud Temple:

<img src={oshiftMenu_001} />

A continuación, verá aparecer los clusters de OpenShift desplegados dentro de su tenant.

Haga clic en el cluster que desee administrar. Accederá al entorno de administración del cluster:

<img src={oshiftMenu_002} />

Tras autenticarse, podrá administrar su cluster:

<img src={oshiftMenu_003} />

### Resources of your environment

Here are the connection and configuration details specific to your OpenShift environment.

#### Detalles de conexión

Para acceder a los diferentes componentes de OpenShift, asegúrese de que su inquilino esté registrado en la lista blanca en la consola (consulte la documentación: [Documentación de Cloud Temple](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :
  [https://__su-id-de-inquilino__.shiva.cloud-temple.com/](https://**su-id-de-inquilino**.shiva.cloud-temple.com/)

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