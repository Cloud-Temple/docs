---
title: Inicio rápido
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import shivaProfil_006 from '@site/docs/console/images/shiva_profil_006.png'
import shivaSupport from '@site/docs/console/images/shiva_support.png'
import shivaSupport_01 from '@site/docs/console/images/shiva_support_01.png'
import shivaSupport_02 from '@site/docs/console/images/shiva_support_02.png'
import shivaSupport_03 from '@site/docs/console/images/shiva_support_03.png'
import shivaOnboard_007 from '@site/docs/console/images/shiva_onboard_007.png'
import shivaLogs from '@site/docs/console/images/shiva_logs.png'
import shivaOnboard_009 from '@site/docs/console/images/shiva_onboard_009.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'
import shivaSupportCriticities from '@site/docs/console/images/shiva_incident_criticities.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import imgDashboard from '@site/docs/console/images/shiva_org_dashboard.png'
import imgTenants from '@site/docs/console/images/shiva_org_tenants.png'
import imgTenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import imgUsers from '@site/docs/console/images/shiva_org_users.png'
import imgAccess from '@site/docs/console/images/shiva_org_access.png'
import imgCostsOverview from '@site/docs/console/images/shiva_org_costs_overview.png'
import imgCostsConsumption from '@site/docs/console/images/shiva_org_costs_consumption.png'

## Prerrequisitos

- Haber suscrito un producto Cloud Temple. Para suscribirse fácilmente, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo electrónico a la dirección __contact@cloud-temple.com__.
- Contar con acceso a la Consola
- Tener su IPv4 pública declarada en la zona de confianza de Cloud Temple (el acceso a la Consola está limitado a las direcciones de confianza identificadas)

## Conexión a su tenant Cloud Temple

La consola es accesible a través de la siguiente URL: [Console](https://shiva.cloud-temple.com) o bien desde la URL directa que se le ha comunicado por correo electrónico.

La primera página le permite seleccionar [l'organisation](iam/concepts.md#organizaciones) en la que se creó su usuario.
Una vez indicada la empresa, haga clic en __'Iniciar sesión'__.

<img src={shivaLogin} />

A continuación, será redirigido a una página que le solicitará autenticarse.
Una vez conectado, llegará a esta página.

Allí encontrará el conjunto de métricas relacionadas con los productos suscritos en su entorno. En caso de problema(s) con sus productos VMware y/o OpenIaaS, se mostrarán alertas; el color está relacionado con su nivel de importancia.

<img src={shivaHome} />

## Vista de organización

:::info
La **vista de organización** está reservada para los **propietarios de la organización**.
:::

La **vista de organización** agrupa las funciones de gestión de su entidad en la Consola Cloud Temple: gestión de tenants, usuarios y sus permisos, control de accesos y seguimiento del consumo. Una organización agrupa uno o varios **tenants** (entornos cloud aislados) y los permisos de los usuarios están sujetos a una **segregación por tenant**.

:::info
Esta sección describe la **interfaz**: dónde encontrar cada función y qué permite. La documentación de **referencia** del modelo organización / tenant y de los permisos se encuentra en el módulo [IAM](iam/concepts.md).
:::

### Barra superior y selección del tenant de trabajo

En la parte superior de la Consola, la barra superior muestra la organización actual (**« Mi organización »**). El selector asociado abre la lista **« Mis tenants »**: cada tenant aparece allí, acompañado en su caso de la insignia **SecNumCloud** cuando está certificado.

Para **seleccionar el tenant de trabajo**, hay dos opciones:

- desde la barra superior, abra el selector **« Mis tenants »** y haga clic en el tenant deseado;
- desde la página **Tenants**, utilice la acción **« Conectarse al tenant »** de una fila.

Los recursos técnicos (cómputo, almacenamiento, red…) son **exclusivos de cada tenant** y no se comparten entre tenants.

<img src={imgSelector} />

### Panel de control

El **Panel de control** es la página de inicio de la organización. Presenta un resumen transversal:

- el estado de los **casos de soporte** (abiertos, respuestas requeridas, validación del cliente, incidentes);
- el **número de tenants** de la organización;
- un **resumen de costos** (costo del mes en curso, distribución por tenant y por servicio).

<img src={imgDashboard} />

### Administración de la organización

El panel **Administración** de la navegación izquierda agrupa las páginas de gobernanza de la organización.

| Página | Rol |
|---|---|
| **Tenants** | Crear y gestionar los tenants |
| **Usuarios** | Gestionar las cuentas y sus permisos |
| **Acceso** | Lista de IPs públicas autorizadas (lista blanca) |
| **Registros** | Registro de actividades (trazabilidad) |
| **Soporte** | Tickets de la organización |

El **Gestor de costos** (fuera del panel Administración) proporciona el seguimiento del consumo.

### Inquilinos

La página **Inquilinos** lista todos los inquilinos de la organización. Una barra de búsqueda y la paginación facilitan la navegación cuando hay muchos inquilinos.

#### Crear un tenant

El botón **« Nuevo tenant »** abre un formulario en dos partes :

- **Identidad del tenant** : el **nombre** (validado en tiempo real) y una **descripción** ;
- **Productos del tenant** : los productos a activar en el tenant. Los botones **« Seleccionar todo »** / **« Deseleccionar todo »** agilizan la introducción de datos.

Valide con **« Crear »** : el tenant se inicializa con los productos seleccionados.

#### Acciones sobre un tenant

El menú de acciones de cada fila ofrece:

- **Conectarse al tenant** — define este tenant como tenant de trabajo;
- **Modificar los productos** — activa o desactiva productos en el tenant, para modificar su alcance;
- **Copiar UUID** — copia el identificador técnico del tenant (útil para la API o un ticket de soporte).

#### Propietarios y ciclo de vida

- **Creación** : en self-service a través de **« Nuevo tenant »**.
- **Evolución** : adición o eliminación de productos a través de **« Modificar productos »**.
- **Propietarios de tenant** : cada tenant tiene al menos un propietario. Las reglas (número recomendado, tiempo de propagación, eliminación a petición del soporte, permisos de un propietario) se detallan en el módulo [IAM](iam/concepts.md).

:::info
Las operaciones sobre los tenants se registran en la página **Logs** (por ejemplo « *Creating tenant…* » o « *Updating features on tenant…* »).
:::

<img src={imgTenants} />

<img src={imgTenantNew} />

### Usuarios y permisos

La página **Usuarios** lista las cuentas de la organización. Las credenciales son **globales a la organización**; los permisos, por su parte, se definen **por tenant**.

Para cada cuenta se muestran el **nombre**, el **correo electrónico**, el **tipo** de cuenta — **Cuenta federada** (repositorio de identidad externo) o **Cuenta local** — e indicadores visuales: **Propietario de la organización**, **Yo**, o **Correo electrónico no verificado** (cuenta no finalizada).

#### Herramientas de la página

- **Filtros** : por **Propietarios de la organización**, **Tipo**, **Fuente** y **Estado**.
- **Exportar CSV** : exportación de la lista de usuarios y sus accesos, útil para la auditoría.

#### Acciones en una cuenta

El menú de acciones ofrece, según el estado de la cuenta:

- **Agregar como propietario de la organización**;
- **Reinvitación** — reenvía la invitación a una cuenta no finalizada;
- **Copiar UUID**;
- **Eliminar**.

:::note
No puede eliminarse a sí mismo. La **invitación** de un nuevo usuario y la **asignación granular de permisos por inquilino** se describen en el módulo [IAM](iam/quickstart.md).
:::

#### Propietario de organización y propietario de tenant

Se trata de dos conceptos distintos :

- el **propietario de la organización** se añade desde la página **Usuarios** (acción « Añadir como propietario de organización ») ; su **retirada se realiza mediante una solicitud de soporte** ;
- el **propietario de tenant** pertenece al ámbito de un tenant ; sus reglas se describen en el módulo [IAM](iam/concepts.md).

:::info
Como **propietario de la organización**, es por defecto **propietario de todos los tenants** de la organización. En esta calidad, dispone de todos los permisos sobre cada uno de estos tenants. Por el contrario, si se le retira este rol, **no perderá** estos permisos : seguirán asignados a los tenants correspondientes.
:::

<img src={imgUsers} />

### Acceso — lista blanca de IP

La página **Acceso** gestiona la **lista de direcciones IP públicas autorizadas** para acceder a la Consola. De acuerdo con los requisitos de **SecNumCloud**, solo se acepta el tráfico procedente de estas direcciones.

- Cada entrada asocia una **IP** (notación CIDR) a una **descripción**.
- El botón **« Agregar una IP »** permite añadir una dirección a la lista.

:::warning
La **eliminación** de una IP autorizada se realiza mediante **solicitud de soporte**.
:::

<img src={imgAccess} />

### Informe de consumo — Administrador de costos

El **Administrador de costos** ofrece una vista del consumo de la organización, desglosada por inquilino. Propone dos pestañas.

#### Pestaña « Resumen »

Vista general del mes en curso :

- indicadores clave : **costo del mes en curso**, **costo del año en curso**, **número de productos activos** ;
- **Costo por tenant** — distribución de los costos entre los tenants ;
- **Costo actual por servicio** y **Costo actual por producto** — principales partidas de consumo.

#### Pestaña « Consumo »

Informe detallado e historizado :

- selección del **período** (mes de inicio y de fin) y del eje **« Mostrar por »** ;
- vistas **Consumo mensual**, **Total**, **Previsión** y **Tendencia** ;
- tabla desplegable por **Mes / Tenant / Servicio / Producto / Importe**, con la **tendencia** en comparación con el mes anterior.

:::info
El importe del mes en curso es **provisional** : se estima a partir de los días ya consumidos.
:::

<img src={imgCostsOverview} />

<img src={imgCostsConsumption} />

### Registro y soporte

- **Logs** — la página **Actividades** registra las operaciones de lectura y escritura de la organización (pestañas **Recientes** / **Archivadas**, filtros, exportación CSV) con fines de trazabilidad. Vea también la sección [Registro — Seguimiento de Actividades](#registro---seguimiento-de-actividades) a continuación.
- **Soporte** — la página **Soporte** centraliza los **tickets de la organización** (indicadores, creación de tickets, filtros, exportación). La creación y el seguimiento de las solicitudes se describen en la sección [Acceso al soporte técnico](#acceso-al-soporte-técnico) a continuación.

## Gestión del idioma

La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento mediante el icono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en la __'Configuración de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada tenant [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar a __el equipo de soporte Cloud Temple__ a través de __el ícono 'bouée'__ situado en la parte superior derecha de la pantalla.

<img src={shivaSupport} />

Se le guiará durante todo el proceso de solicitud de soporte.

El primer paso es la identificación del tipo de solicitud de soporte:

- Solicitar un consejo sobre el uso de un producto (hors incident),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (mise à disposition d'un ingénieur Cloud Temple sur une problématique).

<img src={shivaSupport_01} />

A continuación, tendrá la posibilidad de proporcionar más detalles e incluir archivos (image ou journaux par exemple).

El solicitante también puede especificar un nivel de criticidad (P1 à P5) en la descripción del ticket, en caso de un incidente de seguridad, como:

<img src={shivaSupportCriticities} />

__CRÍTICO (P1)__:

- Sospecha de fuga de datos sensibles
- Detección de acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anormales en datos sensibles
- Violación de datos de carácter personal

__ALTA (P2)h__:

- Disfunción en los accesos de usuarios
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Inconsistencia en los datos
- Lentitudes importantes que afectan la actividad

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

__SERVICIO OPERACIONAL (P5)__:

- Servicio operativo sin riesgo inmediato

<img src={shivaSupport_02} />

Una vez realizada su solicitud, es posible encontrar sus solicitudes a través de __el ícono 'bouée'__ situado en la parte superior derecha de la pantalla:

<img src={shivaSupport_03} />

## Acceso a las funcionalidades de usuario a través de la interfaz web

El conjunto de funcionalidades accesibles para su usuario (en fonction de ses droits) se encuentra a la izquierda de la pantalla, en la barra verde.
Las funcionalidades están agrupadas por módulo. Esto agrupa principalmente :

- El __inventario__ de sus recursos,
- El __seguimiento de operaciones__,
- La __gestión de los recursos IaaS__ (Calcul, stockage, réseau, ...)
- La __gestión de los recursos OpenIaaS__ (Calcul, stockage, réseau, ...)
- El acceso a los __servicios complementarios__ (Bastion, monitoring, ...)
- La __administración de su organización__ (Gestion des tenants, des droits, ...)

La activación de un módulo para un usuario depende de los permisos del usuario. Por ejemplo el módulo __'Commande'__ no estará disponible si el usuario no dispone del permiso __'ORDER'__.

A continuación se presenta una descripción de los diferentes módulos disponibles. Nuevos módulos enriquecen la consola regularmente :
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Panel de Control__ : permite tener rápidamente una vista del __total de recursos de cómputo y almacenamiento__, las estadísticas de la __copia de seguridad__ y una __síntesis de los tickets de soporte__,
- __Inventario__ : permite tener una vista de todos sus recursos de tipo __'machines virtuelles'__. Si les __tags__ sont utilisés, il permet d'avoir une vue par __tag__ (par exemple, vue métier, vue applicatif, ...),
- __Gestión de TI__ : da acceso al seguimiento de sus __solicitudes de soporte__ y a la __medición de los servicios__,
- __IaaS__ : permite la __gestión de las infraestructuras IaaS VMware__ (Machines virtuelles, clusters, hyperviseurs, réplications, sauvegarde, ...),
- __OpenIaaS__ : permite la __gestión de los recursos Xen Orchestra__ (Machines virtuelles, sauvegarde, ...),
- __OpenShift__ : permite la gestión de su **arquitectura PaaS RedHat OpenShift** y la gestión de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastión__ : Permite desplegar y gestionar appliances bastión SSH/RDP en sus redes,
- __Red__ : permite la gestión de las __redes de nivel 2 y 3__, de las __IP públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__ : Ofrece la vista de los equipos ubicados en zona de __colocación compartida o dedicada__,
- __Pedido__ : Permite la solicitud de recursos y el seguimiento de los despliegues,
- __Administración__ : Agrupa las funciones de administración de usuarios y tenants, así como el acceso a los registros globales.
</div>
</div>
Los pictogramas __'NEW'__ indican que el producto en cuestión ha sido aprovisionado pero aún no está certificado como __oferta SecNumCloud__, y __'BETA'__ indica que el producto en cuestión ha sido aprovisionado y acaba de ser certificado como __oferta SecNumCloud__.

## Registro - Seguimiento de Actividades

La página de actividades tiene como objetivo proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas en la consola, garantizando así una mayor trazabilidad y seguridad. Destaca las dos pestañas principales: Recientes y Archivados.

<img src={shivaLogs} />

### __Estructura de la Página__

#### __Pestañas__

- __Recientes__

- Operaciones recientes
- Seguimiento en tiempo real

- __Archivados__

- Operaciones durante un período más largo
- Operaciones archivadas para trazabilidad y cumplimiento

#### __Información Mostrada__

- Fecha y Hora

- Tipo de operación
  - Estado
- Usuario
- Descripción de la operación

#### __Funcionalidad__

- Búsqueda/Filtrado para operaciones específicas

### __Uso__

- __Acceso :__ permiso `activity_read`
- __Navegación :__
  - Seleccione la pestaña "Recientes" para las operaciones en tiempo real.
  - Elija "Archivados" para consultar el historial.
  - Utilice las funciones de búsqueda y filtrado para localizar operaciones específicas.

#### __Nota de Cumplimiento__

De acuerdo con la certificación SecNumCloud, el almacenamiento de los eventos de la consola Cloud Temple tiene una duración mínima de __6 meses__, garantizando así el cumplimiento de los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en la parte inferior izquierda de la barra verde en el ícono __'Novedades'__. Obtendrá el detalle de las modificaciones para cada versión de la consola Cloud Temple.

<img src={shivaOnboard_009} />

## Acceso a las funcionalidades de usuario a través de la API

El acceso a todas las funcionalidades de la Consola es posible a través de la API de la Consola. Puede obtener el detalle de los verbos y las configuraciones a través de __'Profil'__ y __'APIs'__ :

<img src={shivaOnboard_008} />

## Proveedor de Terraform

Cloud Temple pone a su disposición un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) para gestionar *"as code"* su plataforma Cloud.