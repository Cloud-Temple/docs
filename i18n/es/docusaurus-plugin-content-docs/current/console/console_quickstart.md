---
title: Inicio rápido
---
import shivaLogin from './images/shiva_login.png'
import shivaHome from './images/shiva_home.png'
import shivaProfil_006 from './images/shiva_profil_006.png'
import shivaSupport from './images/shiva_support.png'
import shivaSupport_01 from './images/shiva_support_01.png'
import shivaSupport_02 from './images/shiva_support_02.png'
import shivaSupport_03 from './images/shiva_support_03.png'
import shivaOnboard_007 from './images/shiva_onboard_007.png'
import shivaLogs from './images/shiva_logs.png'
import shivaOnboard_009 from './images/shiva_onboard_009.png'
import shivaOnboard_008 from './images/shiva_onboard_008.png'

## Requisitos previos

- Haber suscrito una oferta de Cloud Temple. Para suscribirse fácilmente, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo electrónico a __contact@cloud-temple.com__.
- Tener acceso a la consola Shiva
- Tener su IPv4 pública declarada en la zona de confianza de Cloud Temple (el acceso a la consola Shiva está limitado a direcciones de confianza identificadas)

## Conexión a su tenant de Cloud Temple

Shiva es accesible a través de la URL siguiente: [Shiva](https://shiva.cloud-temple.com) o bien desde la URL directa que se le ha comunicado por correo electrónico.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la que se ha creado su usuario.
Una vez introducida la empresa, por favor haga clic en __'Iniciar sesión'__.

<img src={shivaLogin} />

A continuación, será redirigido a una página que le pedirá autenticarse.
Una vez conectado, llegará a esta página.

<img src={shivaHome} />

## Gestión del idioma

La consola está disponible en __francés__ e __inglés__. Puede cambiar el idioma de funcionamiento gracias al icono de __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario se realiza en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar con el __equipo de soporte de Cloud Temple__ a través del __icono de 'salvavidas'__ situado en la parte superior derecha de la pantalla.

<img src={shivaSupport} />

Será guiado durante todo el proceso de solicitud de soporte.

El primer paso es la identificación del tipo de solicitud de soporte:

- Solicitar consejo sobre el uso de un producto (fuera de incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico,
- Solicitar la asistencia de un servicio profesional (puesta a disposición de un ingeniero de Cloud Temple para una problemática).

<img src={shivaSupport_01} />

A continuación, tiene la posibilidad de dar precisiones e incluir archivos (imagen o registros, por ejemplo).

El solicitante también puede precisar un nivel de criticidad (P1 a P4) en la descripción del ticket, en caso de un incidente, tal como:

__CRÍTICO (P1)__:

- Sospecha de fuga de datos sensibles
- Detección de un acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anormales en datos sensibles
- Violación de datos de carácter personal

__ALTO (P2)__:

- Mal funcionamiento de los accesos de usuarios
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Incoherencia en los datos
- Lentitudes mayores que impactan la actividad

__MEDIO (P3)__:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

__BAJO (P4)__:

- Solicitud de investigación
- Anomalía sin impacto directo
- Pregunta de conformidad
- Necesidad de clarificación técnica

<img src={shivaSupport_02} />

Una vez realizada su solicitud, es posible encontrar sus peticiones a través del __icono de 'salvavidas'__ situado en la parte superior derecha de la pantalla:

<img src={shivaSupport_03} />

## Acceso a las funcionalidades de usuario a través de la interfaz web

El conjunto de funcionalidades accesibles a su usuario (en función de sus derechos) se sitúa a la izquierda de la pantalla, en la franja verde.
Las funcionalidades están agrupadas por módulo. Esto incluye principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de las operaciones__,
- La __gestión de los recursos IaaS__ (Cálculo, almacenamiento, red, ...),
- La __gestión de los recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...),
- El acceso a los __servicios anexos__ (Bastion, monitoreo, ...),
- La __administración de su organización__ (Gestión de tenants, de derechos, ...).

La activación de un módulo para un usuario depende de los derechos del usuario. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no dispone del derecho __'ORDER'__.

Aquí hay una presentación de los diferentes módulos disponibles. Nuevos módulos enriquecen la consola regularmente:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Tablero de control__: permite tener rápidamente una vista sobre el __total de recursos de cálculo y de almacenamiento__, las estadísticas de la __copia de seguridad__ y una __síntesis de los expedientes de soporte__,
- __Inventario__: permite tener una vista del conjunto de sus recursos de tipo __'máquinas virtuales'__. Si se utilizan las __etiquetas__, permite tener una vista por __etiqueta__ (por ejemplo, vista de negocio, vista de aplicación, ...),
- __Servicios gestionados__: da acceso al seguimiento de sus __solicitudes de soporte__ y a la metrología de los servicios,
- __IaaS__: permite la __gestión de las infraestructuras IaaS VMware__ (Máquinas virtuales, clusters, hipervisores, replicaciones, copia de seguridad, ...),
- __OpenIaaS__: permite la __gestión de los recursos Xen Orchestra__ (Máquinas virtuales, copia de seguridad, ...),
- __OpenShift__: permite la gestión de su **arquitectura PaaS RedHat Openshift** y la gestión de sus contenedores en las 3 zonas de disponibilidad de la plataforma,
- __Bastion__: Permite desplegar y gestionar appliances bastion SSH/RDP en sus redes,
- __Red__: permite la gestión de las __redes de nivel 2 y 3__, de las __IP públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__: Ofrece la vista sobre los equipos situados en zona de __colocación compartida o dedicada__,
- __Pedido__: Permite el pedido de recursos y el seguimiento de los despliegues,
- __Administración__: Agrupa las funciones de administración de los usuarios y de los tenants así como el acceso al registro global.
</div>
</div>
Los pictogramas __'NEW'__ significan que el producto en cuestión ha sido aprovisionado pero aún no está calificado como __oferta SecNumCloud__ y __'BETA'__ significan que el producto en cuestión ha sido aprovisionado y acaba de ser calificado como __oferta SecNumCloud__.

__Registro - Seguimiento de Actividades__
=====================================

La página de actividades está destinada a proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas dentro de la consola, asegurando así una trazabilidad y seguridad aumentadas. Destaca las dos pestañas principales: Recientes y Archivadas.

<img src={shivaLogs} />

### __Estructura de la Página__

#### __Pestañas__

 + **Recientes**

- Operaciones recientes
- Seguimiento en tiempo real

 + __Archivadas__

- Operaciones sobre un período más largo
- Operaciones archivadas para trazabilidad y conformidad

#### __Información Mostrada__

 + Fecha y Hora
 + Tipo de operación
 + Estado
 + Usuario
 + Descripción de la operación

#### __Funcionalidad__

 + Búsqueda/Filtrado para operaciones específicas

### __Utilización__

- __Acceso:__ permiso `activity_read`
- __Navegación:__
  - Seleccione la pestaña "Recientes" para las operaciones en tiempo real.
  - Elija "Archivadas" para consultar el historial.
  - Utilice las funcionalidades de búsqueda y filtrado para localizar operaciones específicas.

#### __Nota de Conformidad__

Conforme a la calificación SecNumCloud, el almacenamiento de los eventos de la consola Cloud Temple es de una duración mínima de __6 meses__, garantizando así el respeto de las exigencias de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en la parte inferior izquierda de la franja verde en el icono __'Novedades'__. Tendrá el detalle de las modificaciones para cada versión de la consola Cloud Temple.

<img src={shivaOnboard_009} />

## Acceso a las funcionalidades de usuario a través de la API

El acceso al conjunto de las funcionalidades de la consola Shiva es posible a través de la API Shiva. Puede tener el detalle de los verbos y de las configuraciones a través de __'Perfil'__ y __'APIs'__:

<img src={shivaOnboard_008} />

## Proveedor Terraform

Cloud Temple pone a su disposición un [proveedor Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) para gestionar *"as code"* su plataforma Cloud.
