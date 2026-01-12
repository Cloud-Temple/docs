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
import shivaSupportCriticities from './images/shiva_incident_criticities.png'

## Requis

- Tener suscrito a una oferta Cloud Temple. Para suscribirse de forma sencilla, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo electrónico a la dirección __contact@cloud-temple.com__.
- Tener acceso a la Consola
- Tener su dirección IPv4 pública declarada en la zona de confianza Cloud Temple (el acceso a la Consola está limitado a las direcciones de confianza identificadas)

## Conexión a su inquilino Cloud Temple

La consola está disponible a través de la siguiente URL: [Console](https://shiva.cloud-temple.com) o bien desde la URL directa que le fue proporcionada por correo electrónico.

La primera página le permite seleccionar la [organización](iam/concepts.md#organisations) en la que fue creado su usuario.  
Una vez que haya especificado la empresa, haga clic en __'Conectarse'__.

<img src={shivaLogin} />

A continuación, se le redirigirá a una página donde se le pedirá que se autentique.  
Una vez conectado, llegará a esta página.

Aquí encontrará todas las métricas relacionadas con los productos suscritos en su ámbito. En caso de problemas con sus productos VMware y/o OpenIaaS, se mostrarán alertas, cuyo color está relacionado con su gravedad.

<img src={shivaHome} />

## Gestión del idioma

La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento mediante el icono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, en la parte superior derecha de la pantalla, dentro de los __'Ajustes de usuario'__.

<img src={shivaProfil_006} />

La configuración se realiza para cada inquilino [Tenant](iam/concepts.md#tenant).

## Acceso al soporte técnico

En cualquier momento, puede contactar al __equipo de soporte Cloud Temple__ a través del __icono de 'balsa'__ situado en la parte superior derecha de la pantalla.

<img src={shivaSupport} />

Será guiado durante todo el proceso de solicitud de soporte.

La primera etapa consiste en identificar el tipo de solicitud de soporte:

- Solicitar consejos sobre el uso de un producto (fuera de incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Reportar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (puesta a disposición de un ingeniero Cloud Temple ante una problemática).

<img src={shivaSupport_01} />

A continuación, tiene la posibilidad de proporcionar detalles adicionales e incluir archivos (por ejemplo, imágenes o registros).

El cliente también puede especificar un nivel de criticidad (P1 a P5) en la descripción del ticket, en caso de un incidente de seguridad, tal como:

<img src={shivaSupportCriticities} />

__CRÍTICO (P1)__:

- Suspensión de fuga de datos sensibles
- Detección de acceso no autorizado a sus datos
- Compromiso de sus credenciales de administración
- Indisponibilidad total de sus servicios críticos
- Comportamientos anómalos en datos sensibles
- Violación de datos personales

__ALTO (P2)__:

- Fallos en el acceso de usuarios
- Anomalía en el cifrado de sus datos
- Pérdida de acceso a ciertas funciones críticas
- Incoherencia en los datos
- Lentitud significativa que afecta la actividad

__MEDIO (P3)__:

- Problema de rendimiento localizado
- Incidente en una función no crítica
- Error de configuración con impacto limitado
- Dificultad de acceso puntual

__BAJO (P4)__:

- Solicitud de investigación
- Anomalía sin impacto directo
- Consulta de conformidad
- Necesidad de aclaración técnica

__SERVICIO OPERATIVO (P5)__:

- Servicio operativo sin riesgo inmediato

<img src={shivaSupport_02} />

Una vez realizada su solicitud, podrá recuperar sus solicitudes a través del __icono de 'balsa'__ situado en la parte superior derecha de la pantalla:

<img src={shivaSupport_03} />

## Acceso a las funcionalidades del usuario a través de la interfaz web

Todas las funcionalidades accesibles para su usuario (según sus permisos) se encuentran a la izquierda de la pantalla, en la barra verde.  
Las funcionalidades están agrupadas por módulo. Principalmente, esto incluye:

- El __inventario__ de sus recursos,
- El __seguimiento de operaciones__,
- El __piloto de recursos IaaS__ (Cálculo, almacenamiento, red, ...),
- El __piloto de recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...),
- El acceso a los __servicios complementarios__ (Bastión, monitorización, ...),
- La __administración de su organización__ (Gestión de tenants, permisos, ...).

La activación de un módulo para un usuario depende de sus permisos. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no dispone del permiso __'ORDER'__.

A continuación se presenta una descripción de los diferentes módulos disponibles. Nuevos módulos se añaden regularmente a la consola:
<div style={{display: 'flex'}}>
<img src={shivaOnboard_007} style={{'margin-right': 20}}/>
<div>
- __Panel de control__: permite obtener rápidamente una visión general del __total de recursos de cálculo y almacenamiento__, las estadísticas de la __copia de seguridad__ y un __resumen de los casos de soporte__,
- __Inventario__: permite tener una visión de todos sus recursos del tipo __'máquinas virtuales'__. Si se utilizan __etiquetas__, permite visualizar por __etiqueta__ (por ejemplo, vista empresarial, vista aplicativa, ...),
- __Infogestión__: proporciona acceso al seguimiento de sus __solicitudes de soporte__ y a la __metodología de servicios__,
- __IaaS__: permite el __piloto de infraestructuras IaaS VMware__ (máquinas virtuales, clústeres, hipervisores, replicaciones, copias de seguridad, ...),
- __OpenIaaS__: permite el __piloto de recursos Xen Orchestra__ (máquinas virtuales, copias de seguridad, ...),
- __OpenShift__: permite el piloto de su **arquitectura PaaS RedHat OpenShift** y la gestión de sus contenedores en las 3 zonas de disponibilidad de la plataforma.
- __Bastión__: Permite desplegar y gestionar appliances bastión SSH/RDP en sus redes,
- __Red__: permite el piloto de los __redes de nivel 2 y 3__, de las __IP públicas__ y de sus __circuitos de telecomunicaciones__,
- __Colocación__: Ofrece la vista sobre los equipos ubicados en zonas de __colocación compartida o dedicada__,
- __Pedido__: Permite realizar pedidos de recursos y seguir los despliegues,
- __Administración__: Agrupa las funciones de administración de usuarios y tenants, así como el acceso a la auditoría global.
</div>
</div>
Los pictogramas __'NEW'__ indican que el producto correspondiente ha sido provisionado pero aún no está calificado como __oferta SecNumCloud__, y los pictogramas __'BETA'__ indican que el producto ha sido provisionado y acaba de ser calificado como __oferta SecNumCloud__.

__Auditoría - Seguimiento de Actividades__
=====================================

La página de actividades tiene como objetivo proporcionar una visibilidad completa sobre todas las operaciones de lectura y escritura realizadas dentro de la consola, garantizando así una trazabilidad y seguridad mejoradas. Destaca dos pestañas principales: Recientes y Archivados.

<img src={shivaLogs} />

### __Estructura de la página__

#### __Pestañas__

 + **Recientes**

- Operaciones recientes
- Seguimiento en tiempo real

- __Archivados__

- Operaciones durante un período más largo
- Operaciones archivadas para trazabilidad y cumplimiento

#### __Information Displayed__

 + Date and Time

- Operation Type
  - Status
- User
- Operation Description

#### __Funcionalidad__

 + Búsqueda/Filtrado para operaciones específicas

### __Uso__

- __Acceso:__ permiso `activity_read`
- __Navegación:__
  - Seleccione la pestaña "Recientes" para operaciones en tiempo real.
  - Elija "Archivados" para consultar el historial.
  - Utilice las funciones de búsqueda y filtrado para localizar operaciones específicas.

#### __Nota de Cumplimiento__

De acuerdo con la calificación SecNumCloud, el almacenamiento de los eventos de la consola Cloud Temple tiene una duración mínima de __6 meses__, garantizando así el cumplimiento de los requisitos de seguridad y trazabilidad.

## Consulta de las últimas actualizaciones

Haga clic en la esquina inferior izquierda de la barra verde sobre el icono __'Novedades'__. Obtendrá un detalle de los cambios realizados en cada versión de la consola Cloud Temple.

<img src={shivaOnboard_009} />

## Acceso a las funcionalidades de usuario a través de la API

El acceso a todas las funcionalidades de la Consola está disponible a través de la API de la Consola. Puede obtener detalles sobre los verbos y configuraciones mediante __'Perfil'__ y __'APIs'__:

<img src={shivaOnboard_008} />

## Terraform Provider

Cloud Temple vous met à disposition un [provider Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest) pour piloter votre plateforme Cloud *"as code"*.