---
title: Operaciones planificadas y gestión de incidentes
---
import shivaInterventionMenu01 from './images/shiva_intervention_menu01.png'
import shivaInterventionMenu03 from './images/shiva_intervention_menu03.png'
import shivaInterventionMenu04 from './images/shiva_intervention_menu04.png'
import shivaInterventionMenu05 from './images/shiva_intervention_menu05.png'
import shivaIncident_001 from './images/shiva_incident_001.png'
import shivaIncident_002 from './images/shiva_incident_002.png'
import shivaIncident_003 from './images/shiva_incident_003.png'
import shivaIncident_004 from './images/shiva_incident_004.png'
import shivaIncident_005 from './images/shiva_incident_005.png'
import shivaIncident_006 from './images/shiva_incident_006.png'

Como cualquier plataforma de infraestructura Cloud, la plataforma Cloud Temple es objeto de trabajos y mantenimiento de hardware y software regularmente.

## Acceso a operaciones e incidentes en curso

El icono de seguimiento de operaciones permite visualizar las operaciones planificadas en la infraestructura Cloud Temple así como los incidentes abiertos en el tenant. Este icono es accesible en la barra de iconos en la parte superior izquierda de la pantalla y tiene la forma de un icono __'Herramientas'__.

<img src={shivaInterventionMenu01} />

Este icono tiene como objetivo proporcionar visibilidad sobre las intervenciones planificadas, en curso y terminadas y/o los incidentes en el tenant.

Cuando hay intervenciones y/o incidentes en curso, aparece un número en el icono.

Al hacer clic en visualización rápida, encontrará las intervenciones en curso. También es posible hacer clic en __'Todas las intervenciones'__ o __'Todos los incidentes e informes del tenant'__ para mostrar más detalles.

<img src={shivaInterventionMenu03} />

## Seguimiento de intervenciones planificadas

La página Intervenciones está compuesta por dos pestañas. La primera pestaña permite visualizar las intervenciones previstas para los próximos 30 días y las intervenciones en curso.

<img src={shivaInterventionMenu04} />

Las intervenciones terminadas, por su parte, son visibles en la segunda pestaña 'Terminado'.

<img src={shivaInterventionMenu05} />

El acceso a esta información requiere para el perfil del usuario el permiso '__intervention_read__'.

## Gestión de incidentes

Se distinguen dos tipos de incidentes: los incidentes globales, que afectan a todo el sistema, y los incidentes específicos a un perímetro cliente, que impactan únicamente los recursos o servicios asociados a un cliente particular.

### Incidentes globales

La recuperación de información sobre los incidentes globales no requiere ningún permiso particular. Se muestra un banner rojo desde la conexión a la consola para advertir de la presencia de un incidente global en curso de resolución. El usuario tiene la posibilidad de ocultar este banner temporalmente durante su sesión, pero éste reaparecerá en cada nueva conexión o durante un refresco de la página, mientras el incidente siga sin resolverse.

<img src={shivaIncident_001} />

Un botón __'Saber más'__ redirige hacia la página pública de seguimiento de incidentes, permitiendo acceder a información adicional sobre el incidente en curso:

<img src={shivaIncident_002} />

Es posible obtener los informes de los incidentes globales. El acceso a estos informes requiere el permiso específico '__incident_management__'.

Aquí hay un ejemplo de la pestaña que muestra estos informes:

<img src={shivaIncident_003} />

### Incidentes en un perímetro cliente

La visibilidad de los incidentes específicos a un perímetro cliente requiere el permiso __incident_read__. Estos incidentes están representados por un icono dedicado, acompañado de una insignia roja que indica el número de incidentes en curso.

El icono es clicable, permitiendo listar los tickets asociados a los incidentes. Cada ticket incluye un enlace a los detalles del incidente, ofreciendo la posibilidad de seguir el avance de su resolución:

<img src={shivaIncident_004} />

Para consultar los detalles de un incidente, es necesario ser el autor del ticket de incidente o disponer del permiso __support_management__.

### Gestión de notificaciones

Con el fin de informar rápidamente a los usuarios en caso de nuevo incidente, se ha establecido un sistema de notificaciones por correo electrónico. Desde su perfil de usuario, una pestaña titulada '*Mis suscripciones*' permite a los usuarios suscribirse a las notificaciones para los dos tipos de incidentes. Así, recibirán un correo electrónico en un plazo muy corto durante la declaración o la resolución de un incidente.

<img src={shivaIncident_005} />

El asunto del correo electrónico indicará el tipo de incidente y, en el caso de un incidente relacionado con un perímetro, el nombre del perímetro impactado. La notificación también contendrá un enlace que permite acceder directamente a los detalles del incidente:

<img src={shivaIncident_006} />
