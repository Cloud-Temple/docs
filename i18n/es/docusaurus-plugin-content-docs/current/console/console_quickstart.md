---
title: Recorrido por la consola
---
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

Esta página recorre la interfaz de la consola Cloud Temple: dónde encontrar cada función y qué permite.

:::tip[¿Está empezando?]
La creación de su organización, la conexión, el doble factor, las direcciones IP autorizadas, la creación de un tenant, la invitación de sus colaboradores, la activación de los productos y el acceso a la API se describen, en orden, en [Onboarding](./onboarding.md).
:::

## Requisitos previos

- Tener acceso a la consola: ver [Onboarding](./onboarding.md).
- Conectarse desde una dirección IP pública autorizada: ver [Añadir una dirección IP](./onboarding.md#añadir-una-dirección-ip).

<a id="connexion-à-votre-tenant-cloud-temple"></a>

## Vista de organización

:::info
La **vista de organización** está reservada a los **propietarios de la organización**.
:::

La **vista de organización** agrupa las funciones de gestión de su entidad en la consola Cloud Temple: gestión de los tenants, de los usuarios y de sus permisos, control de los accesos y seguimiento del consumo. Una organización agrupa uno o varios **tenants** (entornos cloud aislados) y los permisos de los usuarios están sujetos a una **segregación por tenant**.

:::info
Esta sección describe la **interfaz**. Los procedimientos se encuentran en [Onboarding](./onboarding.md); la documentación de **referencia** del modelo organización / tenant y de los permisos se encuentra en el módulo [IAM](iam/concepts.md).
:::

### Barra superior y selección del tenant de trabajo

En la parte superior de la consola, la barra superior muestra la organización actual (**« Mi organización »**). El selector asociado abre la lista **« Mis tenants »**, desde la que elige su tenant de trabajo: ver [Elegir su tenant de trabajo](./onboarding.md#elegir-su-tenant-de-trabajo).

<img src={imgSelector} />

### Panel de control

El **Panel de control** es la página de inicio de la organización. Presenta un resumen transversal:

- el estado de los **casos de soporte** (abiertos, respuestas requeridas, validación del cliente, incidentes);
- el **número de tenants** de la organización;
- un **resumen de costos** (costo del mes en curso, distribución por tenant y por servicio).

<img src={imgDashboard} />

### Administración de la organización

El panel **Administración** de la navegación izquierda agrupa las páginas de gobernanza de la organización.

| Página | Rol | Para actuar |
|---|---|---|
| **Tenants** | Crear y hacer evolucionar los tenants | [Crear un entorno](./onboarding.md#crear-un-nuevo-entorno), [activar un producto](./onboarding.md#activar-un-producto) |
| **Usuarios** | Gestionar las cuentas y sus permisos | [Invitar a sus colaboradores](./onboarding.md#etapa-4-invitar-a-sus-colaboradores) |
| **Acceso** | Lista de las IP públicas autorizadas | [Añadir una dirección IP](./onboarding.md#añadir-una-dirección-ip) |
| **Logs** | Registro de actividades (trazabilidad) | [Registro de actividades](#registro---seguimiento-de-actividades) |
| **Soporte** | Tickets de la organización | [Soporte técnico](#acceso-al-soporte-técnico) |

El **Gestor de costos** (fuera del panel Administración) proporciona el seguimiento del consumo.

### Tenants

La página **Tenants** lista todos los tenants de la organización. Una barra de búsqueda y la paginación facilitan la navegación cuando hay muchos tenants. El botón **« Nuevo tenant »** crea un entorno: ver [Crear un nuevo entorno](./onboarding.md#crear-un-nuevo-entorno).

#### Acciones sobre un tenant

El menú de acciones de cada fila ofrece:

- **Conectarse al tenant** — define este tenant como tenant de trabajo;
- **Modificar los productos** — activa o desactiva productos en el tenant, para hacer evolucionar su perímetro;
- **Copiar UUID** — copia el identificador técnico del tenant (útil para la API o un ticket de soporte).

Cada tenant tiene al menos un propietario. Las reglas (número recomendado, tiempo de propagación, retirada mediante solicitud de soporte, permisos de un propietario) se detallan en el módulo [IAM](iam/concepts.md#gestión-de-propietarios-en-un-tenant).

:::info
Las operaciones sobre los tenants se registran en la página **Logs** (por ejemplo « *Creating tenant…* » o « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

### Usuarios y permisos

La página **Usuarios** lista las cuentas de la organización. Las credenciales son **globales a la organización**; los permisos, en cambio, se definen **por tenant**. El botón **« Nuevo usuario »** invita a un colaborador: ver [Invitar a sus colaboradores](./onboarding.md#etapa-4-invitar-a-sus-colaboradores).

Para cada cuenta se muestran el **nombre**, el **correo electrónico**, el **tipo** de cuenta — **Cuenta federada** (repositorio de identidad externo) o **Cuenta local** — e indicadores visuales: **Propietario de la organización**, **Yo**, o **Correo electrónico no verificado** (cuenta no finalizada).

#### Herramientas de la página

- **Filtros**: por **Propietarios de la organización**, **Tipo**, **Origen** y **Estado**.
- **Exportar CSV**: exportación de la lista de usuarios y de sus accesos, útil para la auditoría.

#### Acciones sobre una cuenta

El menú de acciones ofrece, según el estado de la cuenta:

- **Añadir como propietario de la organización**;
- **Reinvitación** — reenvía la invitación a una cuenta no finalizada;
- **Copiar UUID**;
- **Eliminar**.

:::note
No puede eliminarse a sí mismo.
:::

#### Propietario de organización y propietario de tenant

Se trata de dos nociones distintas:

- el **propietario de la organización** se añade desde la página **Usuarios** (acción « Añadir como propietario de la organización »); su **retirada se realiza mediante una solicitud de soporte**;
- el **propietario de tenant** pertenece al ámbito de un tenant; sus reglas se describen en el módulo [IAM](iam/concepts.md#gestión-de-propietarios-en-un-tenant).

:::info
Como **propietario de la organización**, usted es por defecto **propietario de todos los tenants** de la organización. Por ello, dispone de todos los permisos sobre cada uno de estos tenants. A la inversa, si se le retira este rol, **no pierde** estos permisos: siguen adquiridos en los tenants correspondientes.
:::

<img src={imgUsers} />

<a id="accès--whitelist-ip"></a>

### Informe de consumo — Gestor de costos

El **Gestor de costos** ofrece una vista del consumo de la organización, desglosada por tenant. Propone dos pestañas.

#### Pestaña « Resumen »

Vista sintética del mes en curso:

- indicadores clave: **costo del mes en curso**, **costo del año en curso**, **número de productos activos**;
- **Costo por tenant** — distribución de los costos entre los tenants;
- **Costo actual por servicio** y **Costo actual por producto** — principales partidas de consumo.

#### Pestaña « Consumo »

Informe detallado e histórico:

- selección del **período** (mes de inicio y de fin) y del eje **« Mostrar por »**;
- vistas **Consumo mensual**, **Total**, **Previsión** y **Tendencia**;
- tabla desplegable por **Mes / Tenant / Servicio / Producto / Importe**, con la **tendencia** respecto al mes anterior.

:::info
El importe del mes en curso es **provisional**: se estima a partir de los días ya consumidos.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Registro de actividades y soporte

- **Logs** — la página **Actividades** registra las operaciones de lectura y escritura de la organización (pestañas **Recientes** / **Archivadas**, filtros, exportación CSV) con fines de trazabilidad. Vea la sección [Registro — Seguimiento de actividades](#registro---seguimiento-de-actividades) a continuación.
- **Soporte** — la página **Soporte** centraliza los **tickets de la organización** (indicadores, creación de tickets, filtros, exportación). La creación y el seguimiento de las solicitudes se describen en la sección [Acceso al soporte técnico](#acceso-al-soporte-técnico) a continuación.

## Acceso a las funcionalidades de usuario a través de la interfaz web

El conjunto de funcionalidades accesibles para su usuario (en función de sus permisos) se encuentra a la izquierda de la pantalla, en la barra verde.
Las funcionalidades están agrupadas por módulo. Esto agrupa principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de las operaciones__,
- La __gestión de los recursos IaaS__ (cómputo, almacenamiento, red, ...)
- La __gestión de los recursos OpenIaaS__ (cómputo, almacenamiento, red, ...)
- El acceso a los __servicios complementarios__ (Bastion, monitorización, ...)
- La __administración de su organización__ (gestión de los tenants, de los permisos, ...)

La activación de un módulo para un usuario depende de los permisos del usuario. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no dispone del permiso __'ORDER'__.

A continuación se presenta una descripción de los diferentes módulos disponibles. Nuevos módulos enriquecen la consola regularmente:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Panel de control__: permite tener rápidamente una vista del __total de recursos de cómputo y almacenamiento__, las estadísticas de la __copia de seguridad__ y una __síntesis de los casos de soporte__,
- __Inventario__: permite tener una vista de todos sus recursos de tipo __'máquinas virtuales'__. Si se utilizan los __tags__, permite tener una vista por __tag__ (por ejemplo, vista de negocio, vista de aplicación, ...),
- __Servicios gestionados__: da acceso al seguimiento de sus __solicitudes de soporte__ y a la __metrología de los servicios__,
- __IaaS__: permite la __gestión de las infraestructuras IaaS VMware__ (máquinas virtuales, clústeres, hipervisores, replicaciones, copia de seguridad, ...),
- __OpenIaaS__: permite la __gestión de los recursos Xen Orchestra__ (máquinas virtuales, copia de seguridad, ...),
- __OpenShift__: permite la gestión de su **arquitectura PaaS RedHat OpenShift** y la gestión de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastion__: permite desplegar y gestionar appliances bastion SSH/RDP en sus redes,
- __Red__: permite la gestión de las __redes de nivel 2 y 3__, de las __IP públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocation__: ofrece la vista de los equipos ubicados en zona de __colocation compartida o dedicada__,
- __Pedido__: permite el pedido de recursos y el seguimiento de los despliegues,
- __Administración__: agrupa las funciones de administración de los usuarios y de los tenants, así como el acceso al registro global de actividades.
</div>
</div>

## Gestión del idioma

La consola está disponible en __francés__ e __inglés__. Puede cambiar el idioma de funcionamiento mediante el icono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en la __'Configuración de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada [tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar con __el equipo de soporte de Cloud Temple__ a través del __icono 'salvavidas'__ situado en la parte superior derecha de la pantalla.

<img src={shivaSupport} />

Se le guiará durante todo el proceso de solicitud de soporte.

El primer paso es la identificación del tipo de solicitud de soporte:

- Solicitar un consejo sobre el uso de un producto (fuera de incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (puesta a disposición de un ingeniero de Cloud Temple para una problemática).

<img src={shivaSupport_01} />

A continuación, tiene la posibilidad de aportar precisiones e incluir archivos (imágenes o registros, por ejemplo).

El solicitante también puede especificar un nivel de criticidad (de P1 a P5) en la descripción del ticket, en caso de un incidente de seguridad, como:

<img src={shivaSupportCriticities} />

__CRÍTICA (P1)__:

- Sospecha de fuga de datos sensibles
- Detección de un acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anómalos en datos sensibles
- Violación de datos de carácter personal

__ALTA (P2)__:

- Disfunción de los accesos de usuarios
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Incoherencia en los datos
- Lentitudes importantes que afectan a la actividad

__MEDIA (P3)__:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

__BAJA (P4)__:

- Solicitud de investigación
- Anomalía sin impacto directo
- Cuestión de cumplimiento
- Necesidad de aclaración técnica

__SERVICIO OPERATIVO (P5)__:

- Servicio operativo sin riesgo inmediato

<img src={shivaSupport_02} />

Una vez realizada su solicitud, puede encontrar sus solicitudes a través del __icono 'salvavidas'__ situado en la parte superior derecha de la pantalla:

<img src={shivaSupport_03} />

## Registro - Seguimiento de actividades

La página de actividades tiene como objetivo proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas en la consola, garantizando así una mayor trazabilidad y seguridad. Destaca las dos pestañas principales: Recientes y Archivadas.

<img src={shivaLogs} />

### __Estructura de la página__

#### __Pestañas__

- __Recientes__

- Operaciones recientes
- Seguimiento en tiempo real

- __Archivadas__

- Operaciones en un período más largo
- Operaciones archivadas para trazabilidad y cumplimiento

#### __Información mostrada__

- Fecha y hora

- Tipo de operación
  - Estado
- Usuario
- Descripción de la operación

#### __Funcionalidad__

- Búsqueda/filtrado de operaciones específicas

### __Uso__

- __Acceso:__ permiso `activity_read`
- __Navegación:__
  - Seleccione la pestaña "Recientes" para las operaciones en tiempo real.
  - Elija "Archivadas" para consultar el historial.
  - Utilice las funciones de búsqueda y filtrado para localizar operaciones específicas.

#### __Nota de cumplimiento__

Al estar la consola alojada en una infraestructura cualificada SecNumCloud, sus eventos se conservan durante un mínimo de __6 meses__, para cumplir los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic, en la parte inferior izquierda de la barra verde, en el icono __'Novedades'__. Obtendrá el detalle de las modificaciones de cada versión de la consola Cloud Temple.

<img src={shivaOnboard_009} />

<a id="accès-aux-fonctionnalités-utilisateur-via-lapi"></a>
<a id="provider-terraform"></a>

## Automatizar

La API de la consola y el provider Terraform se presentan en [Onboarding](./onboarding.md#etapa-6-automatizar), y se detallan en la [documentación de la API](./api.md) y en [Terraform Provider](/terraform).
