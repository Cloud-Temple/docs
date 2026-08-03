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
import shivaTenant from '@site/docs/console/iam/images/shiva_tenant.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import shivaIpAccessManagement_01 from '@site/docs/console/iam/images/shiva_ip_access_management_01.png'

## Requisitos

- Haber suscrito un producto Cloud Temple. Para suscribirse, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo electrónico a la dirección __contact@cloud-temple.com__.
- Tener acceso a la Consola
- Tener declarada su dirección IPv4 pública en la zona de confianza de Cloud Temple (el acceso a la Consola está limitado a las direcciones de confianza identificadas)

## Conexión a su tenant de Cloud Temple

La consola es accesible a través de la siguiente URL: [Consola](https://shiva.cloud-temple.com) o bien desde la URL directa que se le ha comunicado por correo electrónico.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la que se ha creado su usuario.
Una vez introducida la empresa, haga clic en __'Iniciar sesión'__.

<img src={shivaLogin} />

A continuación, será redirigido a una página que le solicitará autenticarse.
Una vez conectado, accederá a esta página.

Encontrará allí todas las métricas relacionadas con los productos suscritos en su ámbito. En caso de problema(s) con sus productos VMware y/o OpenIaaS, se mostrarán alertas; el color está relacionado con su importancia.

<img src={shivaHome} />

## Gestión del idioma

La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento mediante el icono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes de usuario'__.

<img src={shivaProfil_006} />

La configuración se aplica a cada tenant [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar al __equipo de soporte de Cloud Temple__ a través de __el ícono 'boya'__ ubicado en la esquina superior derecha de la pantalla.

<img src={shivaSupport} />

Será guiado durante todo el proceso de solicitud de soporte.

El primer paso es identificar el tipo de solicitud de soporte:

- Solicitar asesoramiento sobre el uso de un producto (fuera de incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (puesta a disposición de un ingeniero de Cloud Temple para resolver un problema).

<img src={shivaSupport_01} />

Posteriormente, tiene la posibilidad de proporcionar detalles e incluir archivos (imágenes o registros, por ejemplo).

El solicitante también puede especificar un nivel de criticidad (P1 a P5) en la descripción del ticket, en caso de un incidente de seguridad, como:

<img src={shivaSupportCriticities} />

__CRÍTICA (P1)__:

- Sospecha de fuga de datos sensibles
- Detección de un acceso no autorizado a sus datos
- Comprometimiento de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anómalos en datos sensibles
- Violación de datos personales

__ALTA (P2)h__:

- Mal funcionamiento de los accesos de usuario
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Incoherencia en los datos
- Lentitud importante que afecta a la actividad

__MEDIA (P3)__:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

__BAJA (P4)__:

- Solicitud de investigación
- Anomalía sin impacto directo
- Consulta sobre cumplimiento
- Necesidad de aclaración técnica

__SERVICIO OPERATIVO (P5)__:

- Servicio operativo sin riesgo inmediato

<img src={shivaSupport_02} />

Una vez realizada su solicitud, es posible encontrar sus solicitudes a través de __el ícono 'boya'__ ubicado en la esquina superior derecha de la pantalla:

<img src={shivaSupport_03} />

## Acceso a las funcionalidades de usuario a través de la interfaz web

El conjunto de funcionalidades accesibles para su usuario (en función de sus permisos) se encuentra a la izquierda de la pantalla, en la barra verde.
Las funcionalidades están agrupadas por módulo. Esto incluye principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de operaciones__,
- La __gestión de recursos IaaS__ (Cálculo, almacenamiento, red, ...)
- La __gestión de recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...)
- El acceso a los __servicios complementarios__ (Bastión, monitoring, ...)
- La __administración de su organización__ (Gestión de tenants, permisos, ...)

La activación de un módulo para un usuario depende de los permisos de este. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no cuenta con el permiso __'ORDER'__.

A continuación se presenta una descripción de los diferentes módulos disponibles. Nuevos módulos se añaden regularmente para enriquecer la consola:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Panel de Control__ : permite obtener rápidamente una visión del __total de recursos de cálculo y almacenamiento__, las estadísticas de la __copia de seguridad__ y un __resumen de los expedientes de soporte__,
- __Inventario__ : permite obtener una visión del conjunto de sus recursos de tipo __'máquinas virtuales'__. Si se utilizan __etiquetas__, permite obtener una vista por __etiqueta__ (por ejemplo, vista empresarial, vista de aplicación, ...),
- __Gestión externa__ : da acceso al seguimiento de sus __solicitudes de soporte__ y a la __métrica de los servicios__,
- __IaaS__ : permite la __gestión de infraestructuras IaaS VMware__ (Máquinas virtuales, clústers, hipervisores, réplicas, copias de seguridad, ...),
- __OpenIaaS__ : permite la __gestión de recursos Xen Orchestra__ (Máquinas virtuales, copias de seguridad, ...),
- __OpenShift__ : permite la gestión de su **arquitectura PaaS RedHat OpenShift** y la administración de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastión__ : Permite desplegar y gestionar appliances de bastión SSH/RDP en sus redes,
- __Red__ : permite la gestión de __redes de nivel 2 y 3__, de las __IPs públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__ : Ofrece la visión de los equipos situados en zona de __colocación compartida o dedicada__,
- __Pedido__ : Permite el pedido de recursos y el seguimiento de los despliegues,
- __Administración__ : Agrupa las funciones de administración de usuarios y tenants, así como el acceso al registro global.
</div>
</div>
Los pictogramas __'NEW'__ indican que el producto en cuestión ha sido aprovisionado pero aún no está cualificado para la __oferta SecNumCloud__, y __'BETA'__ indican que el producto en cuestión ha sido aprovisionado y acaba de ser cualificado para la __oferta SecNumCloud__.

## Administración: su organización y sus tenants

El módulo __Administración__ (en la parte inferior de la banda verde, a la izquierda) reúne la gestión de su __organización__ y de sus __tenants__: selección del ámbito de trabajo, gestión de los usuarios y de sus permisos, restricción de accesos por IP y registro de actividad.

- La __organización__ es su entidad contractual: alberga las cuentas de usuario, el mecanismo de autenticación (directorio local o federación de identidades) y federa el conjunto de sus tenants.
- Un __tenant__ es una agrupación de recursos aislada dentro de la organización (Producción, Preproducción, por aplicación, por criticidad…). Los recursos de un tenant no se comparten con los demás.

Los permisos de los usuarios se definen __por cada tenant__: una misma cuenta puede, por ejemplo, pedir recursos en un tenant y solo consultarlos en otro.

:::info
Esta página describe el recorrido dentro de la Console. Para la referencia detallada — definiciones, ciclo de vida, federación de identidades y la lista exhaustiva de permisos — consulte el módulo IAM: [Conceptos](iam/concepts.md) y [Guía de inicio de IAM](iam/quickstart.md).
:::

### Seleccionar el tenant de trabajo

El selector de tenant se encuentra en la parte superior izquierda de la Console. Permite cambiar de un ámbito a otro; los tenants cualificados muestran la insignia __SecNumCloud__.

<img src={shivaTenant} />

La creación de un tenant se realiza mediante una solicitud de servicio (véase [Creación de un tenant](iam/quickstart.md#creación-de-un-tenant)). Un tenant no puede estar vacío: se inicializa con al menos una zona de disponibilidad, un clúster de cómputo, un espacio de almacenamiento y una VLAN de red.

### Gestionar los usuarios y sus permisos

Desde __Administración > Usuarios__, invita a un usuario por correo electrónico y, a continuación, le asigna sus permisos __para cada tenant__. De forma predeterminada, una cuenta no posee ningún permiso; la asignación requiere el permiso `iam_write`.

<img src={shivaOnboard_005} />

Los permisos son __unitarios__ (no se solapan) y __acumulativos__: una acción puede exigir varios permisos (por ejemplo `..._read` __y__ `..._write`). El procedimiento completo y la [lista exhaustiva de permisos](iam/concepts.md#permisos) están documentados en el módulo IAM.

### Restringir los accesos: IP autorizadas (Whitelist IP)

De conformidad con la cualificación SecNumCloud, el acceso a la Console se limita a las direcciones IP públicas previamente declaradas. Desde __Administración > Acceso__, consulta y añade las IP y subnets autorizados.

<img src={shivaIpAccessManagement_01} />

- Consultar la lista: permiso `console_public_access_read`.
- Añadir una dirección: permiso `console_public_access_write`.
- La __eliminación__ de una IP autorizada se realiza mediante una solicitud de soporte.

### Propietarios y ciclo de vida de un tenant

Cada tenant tiene al menos un __propietario__, que dispone automáticamente de todos los permisos de los productos activados en ese tenant. Estos permisos no se pueden modificar, y la interfaz avisa a partir de 3 propietarios para fomentar el mínimo privilegio. La retirada de un propietario se realiza mediante una solicitud de soporte (véase [Gestión de propietarios en un tenant](iam/concepts.md#gestión-de-propietarios-en-un-tenant)).

Puede seguir el uso de un tenant mediante el __Informe de consumo__ (véase [Consumo de recursos en un inquilino](iam/concepts.md#consumo-de-recursos-en-un-inquilino)).

El registro de actividad, que también forma parte del módulo __Administración__, se detalla a continuación.

__Registro - Seguimiento de Actividades__
=====================================

La página de actividades está destinada a proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas dentro de la consola, asegurando así una trazabilidad y una seguridad mejoradas. Destaca las dos pestañas principales: Recientes y Archivadas.

<img src={shivaLogs} />

### __Estructura de la Página__

#### __Pestañas__

- __Recientes__

- Operaciones recientes
- Seguimiento en tiempo real

- __Archivados__

- Operaciones en un período más largo
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

Conforme a la certificación SecNumCloud, el almacenamiento de los eventos de la consola Cloud Temple tiene una duración mínima de __6 meses__, garantizando así el cumplimiento de los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en la esquina inferior izquierda de la barra verde en el icono __'Novedades'__. Verá el detalle de los cambios para cada versión de la consola Cloud Temple.

<img src={shivaOnboard_009} />

## Acceso a las funcionalidades de usuario a través de la API

El acceso a todas las funcionalidades de la Consola es posible a través de la API de Consola. Puede consultar el detalle de los métodos y las configuraciones a través de __'Perfil'__ y __'APIs'__ :

<img src={shivaOnboard_008} />

## Proveedor Terraform

Cloud Temple pone a su disposición un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) para gestionar *"como código"* su plataforma Cloud.