---
title: Guía rápida
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

- Tener suscrito a una oferta Cloud Temple. Para suscribirse de forma sencilla, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo electrónico a la dirección __contact@cloud-temple.com__.
- Tener acceso a la consola Shiva
- Tener su IPv4 pública declarada en la zona de confianza Cloud Temple (el acceso a la consola Shiva está limitado a las direcciones de confianza identificadas)

## Conexión a su inquilino Cloud Temple

Shiva es accesible a través de la URL siguiente: [Shiva](https://shiva.cloud-temple.com) o bien desde la URL directa que le ha sido comunicada por correo electrónico.

La primera página le permite seleccionar [la organización](iam/concepts.md#organisations) en la que se ha creado su usuario.
Una vez ingresada la empresa, por favor haga clic en __'Iniciar sesión'__.

<img src={shivaLogin} />

A continuación, será redirigido a una página que le solicitará autenticarse.
Una vez conectado, llegará a esta página.

<img src={shivaHome} />

## Gestión del idioma

La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento mediante el icono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, en los __'Ajustes del usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza por cada inquilino [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar al __equipo de soporte Cloud Temple__ mediante el __icono 'balsa'__ situado en la parte superior derecha de la pantalla.

<img src={shivaSupport} />

Le guiarán durante todo el proceso de solicitud de soporte.

La primera etapa es la identificación del tipo de solicitud de soporte:

- Solicitar consejo sobre el uso de un producto (fuera de incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (puesta a disposición de un ingeniero Cloud Temple sobre una problemática).

<img src={shivaSupport_01} />

A continuación, tiene la posibilidad de dar más detalles y adjuntar archivos (imagen o registros, por ejemplo).

El cliente también puede especificar un nivel de criticidad (P1 a P4) en la descripción del ticket, en caso de un incidente, tal como:

__CRÍTICO (P1)__:

- Suspición de fuga de datos sensibles
- Detección de acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anómalos en datos sensibles
- Violación de datos de carácter personal

__ALTO (P2)__:

- Fallos en los accesos de los usuarios
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funcionalidades críticas
- Inconsistencias en los datos
- Lentitudes importantes que afectan a la actividad

__MEDIO (P3)__:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

__BAJO (P4)__:

- Solicitud de investigación
- Anomalía sin impacto directo
- Pregunta de conformidad
- Necesidad de aclaración técnica

<img src={shivaSupport_02} />

Una vez realizada su solicitud, es posible recuperar sus solicitudes mediante el __icono 'balsa'__ situado en la parte superior derecha de la pantalla :

<img src={shivaSupport_03} />

## Acceso a las funcionalidades de usuario a través de la interfaz web

El conjunto de funcionalidades accesibles a su usuario (según sus derechos) se encuentra a la izquierda de la pantalla, en la barra verde.
Las funcionalidades están agrupadas por módulo. Esto incluye principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de operaciones__,
- El __piloto de recursos IaaS__ (Cálculo, almacenamiento, red, ...)
- El __piloto de recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...)
- El acceso a los __servicios adicionales__ (Bastión, monitoreo, ...)
- La __administración de su organización__ (Gestión de inquilinos, derechos, ...)

La activación de un módulo para un usuario depende de los derechos del usuario. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no tiene el derecho __'ORDER'__.

Aquí hay una presentación de los diferentes módulos disponibles. Nuevos módulos se agregan regularmente a la consola:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Panel de control__ : permite tener rápidamente una vista del __total de recursos de cálculo y almacenamiento__, las estadísticas de la __copia de seguridad__ y una __síntesis de los casos de soporte__,
- __Inventario__ : permite tener una vista de todos sus recursos de tipo __'máquinas virtuales'__. Si se utilizan los __etiquetas__, permite tener una vista por __etiqueta__ (por ejemplo, vista empresarial, vista aplicativa, ...),
- __Gestión__ : da acceso al seguimiento de sus __solicitudes de soporte__ y a la __metrología de los servicios__,
- __IaaS__ : permite el __piloto de infraestructuras IaaS VMware__ (Máquinas virtuales, clústeres, hipervisores, replicaciones, copias de seguridad, ...),
- __OpenIaaS__ : permite el __piloto de recursos Xen Orchestra__ (Máquinas virtuales, copias de seguridad, ...),
- __OpenShift__ : permite el piloto de su **arquitectura PaaS RedHat Openshift** y la gestión de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastión__ : Permite desplegar y pilotar appliances bastión SSH/RDP en sus redes,
- __Red__ : permite el piloto de los __redes de nivel 2 y 3__, de las __IP públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__ : Ofrece la vista sobre los equipos ubicados en zona de __colocación compartida o dedicada__,
- __Pedido__ : Permite el pedido de recursos y el seguimiento de los despliegues,
- __Administración__ : Agrupa las funciones de administración de usuarios y inquilinos así como el acceso a la auditoría global.
</div>
</div>
Los iconos __'NEW'__ indican que el producto en cuestión ha sido provisionado pero aún no está calificado __oferta SecNumCloud__ y __'BETA'__ indican que el producto en cuestión ha sido provisionado y acaba de ser calificado __oferta SecNumCloud__.

__Registro - Seguimiento de Actividades__
=====================================

La página de actividades está destinada a proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas dentro de la consola, asegurando así una trazabilidad y seguridad aumentadas. Destaca los dos pestañas principales: Recientes y Archivados.

<img src={shivaLogs} />

### __Estructura de la Página__

#### __Pestañas__

 + **Recientes**

- Operaciones recientes
- Seguimiento en tiempo real

- __Archivados__

- Operaciones en un período más largo
- Operaciones archivadas para trazabilidad y conformidad

#### __Información Mostrada__

 + Fecha y Hora

- Tipo de operación
  - Estado
- Usuario
- Descripción de la operación

#### __Funcionalidad__

 + Búsqueda/Filtrado para operaciones específicas

### __Uso__

- __Acceso :__ permiso `activity_read`
- __Navegación :__
  - Seleccione la pestaña "Recientes" para operaciones en tiempo real.
  - Elija "Archivados" para consultar el historial.
  - Utilice las funciones de búsqueda y filtrado para localizar operaciones específicas.

#### __Nota de Conformidad__

De acuerdo con la calificación SecNumCloud, el almacenamiento de los eventos de la consola Cloud Temple tiene una duración mínima de __6 meses__, garantizando así el cumplimiento de los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en el icono __'Novedades'__ en la parte inferior izquierda de la barra verde. Tendrá el detalle de los cambios para cada versión de la consola Cloud Temple.

<img src={shivaOnboard_009} />

## Acceso a las funcionalidades de usuario a través de la API

El acceso a todas las funcionalidades de la consola Shiva es posible a través de la API Shiva. Puede obtener el detalle de los verbos y configuraciones a través de __'Perfil'__ y __'APIs'__ :

<img src={shivaOnboard_008} />

## Proveedor Terraform

Cloud Temple le proporciona un [proveedor Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) para controlar su plataforma Cloud "as code".