---
Guía de inicio
---
importar imagen de derechos de oshiftRights desde './images/oshift_rights.png'
importar imagen de menú 001 de oshiftMenu_001 desde './images/oshift_menu_001.png'
importar imagen de menú 002 de oshiftMenu_002 desde './images/oshift_menu_002.png'
importar imagen de menú 003 de oshiftMenu_003 desde './images/oshift_menu_003.png'

## Desplegar una plataforma Red Hat OpenShift en tu tenencia

### Asignación de derechos de acceso

Es esencial que el administrador del [Tenant](../console/iam/concepts.md#tenant) otorgue los derechos de gestión de la plataforma Openshift al usuario administrador Openshift para poder acceder a ella:

<img src={oshiftRights} />

### Acceso al entorno Openshift dentro de un teniente

Después de asignar los permisos, el módulo '__Openshift__' aparece en el menú de la consola Cloud Temple:

<img src={oshiftMenu_001} />

A continuación, se muestran los clusters Openshift desplegados dentro de su teniente. Haga clic en el cluster que desee administrar para acceder al entorno de administración del cluster:

<img src={oshiftMenu_002} />

Después de la autenticación, podrá administrar su cluster:

<img src={oshiftMenu_003} />

### Recursos de su entorno

Aquí están las informaciónes de conexión y configuración específicas de su entorno OpenShift.

#### Detalles de conexión

Para acceder a los diferentes componentes OpenShift, asegúrate de que tu inquilino esté en la lista blanca en la consola (consulta la documentación: [Documentación del Templo del Cielo](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :
  [https://__tu_identificador_inquilino__.shiva.cloud-temple.com/](https://**tu_identificador_inquilino**.shiva.cloud-temple.com/)

- __UI OpenShift__ :
  [https://ui-ocp01-__tu_identificador_inquilino__.paas.cloud-temple.com/](https://ui-ocp01-**tu_identificador_inquilino**.paas.cloud-temple.com/)

- __API externo__ :
  [https://api-ocp01-__tu_identificador_inquilino__.paas.cloud-temple.com](https://api-ocp01-**tu_identificador_inquilino**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__tu_identificador_inquilino__.paas.cloud-temple.com/applications](https://gitops-ocp01-**tu_identificador_inquilino**.paas.cloud-temple.com/applications)

#### Conexión al clúster a través de CLI

Para conectarse a través de la línea de comandos (CLI), utilice la siguiente comando:

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com/ --web
```

#### Acceso al registro

Para acceder al registro, inicie sesión utilizando las siguientes comandos:

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com --web
docker login -u {votre-usuario} -p $(oc whoami -t) registry-ocp01-{votre-id}.paas.cloud-temple.com
```

Después, prueba la construcción y descarga de una imagen Docker:

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuración de Routers y Balances de Carga

La plataforma ofrece opciones flexibles para el __rolamiento de flujos__ y el __equilibrio de carga__:

- De forma predeterminada, se utilizan balanceadores de carga privados para las rutas y las ingresas.
- Dominios:
  - `*.apps-priv-ocp01-{tu-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{tu-id}.paas.cloud-temple.com`

Asegúrate de que tus rutas o ingresas estén configuradas con las etiquetas o clases de entrada adecuadas para garantizar un enrutamiento correcto.

Ejemplo:

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconexión de IaaS

Las configuraciones de red juegan un papel crucial para garantizar la seguridad de las comunicaciones con OpenShift.

- __Red de interconexión__ : 100.67.0.0/28
- __VIP del balanceador de carga privado__ : 100.67.0.3

Verifique que su firewall tenga una interfaz dedicada y permita el tráfico entre los redes especificados.