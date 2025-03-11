---
title: Operaciones planificadas y gestión de Incidentes
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


Como toda plataforma de infraestructura en la Nube, la plataforma Cloud Temple es objeto de trabajos y mantenimiento de hardware y software regularmente.

## Acceso a las operaciones e incidentes en curso

El ícono de seguimiento de operaciones permite visualizar las operaciones planificadas en la infraestructura Cloud Temple así como los incidentes abiertos en el tenant. Este ícono es accesible en la barra de íconos en la parte superior izquierda de la pantalla y tiene la forma de un ícono de __'Herramientas'__

<img src={shivaInterventionMenu01} />

Este ícono tiene como objetivo proporcionar visibilidad sobre las intervenciones planificadas, en curso y terminadas y/o los incidentes en el tenant.

Cuando hay intervenciones y/o incidentes en curso, un número aparece en el ícono.

Al hacer clic en visualización rápida, encontrarás las intervenciones en curso. También es posible hacer clic en __'Todas las intervenciones'__ o __'Todos los incidentes e informes del tenant'__ para mostrar más detalles.

<img src={shivaInterventionMenu03} />

## Seguimiento de las intervenciones planificadas

La página de Intervenciones está compuesta de dos pestañas. La primera pestaña permite visualizar las intervenciones previstas para los próximos 30 días y las intervenciones en curso.

<img src={shivaInterventionMenu04} />

Las intervenciones terminadas se pueden ver en la segunda pestaña 'Terminado'

<img src={shivaInterventionMenu05} />

El acceso a esta información requiere que el perfil del usuario tenga el permiso '**intervention_read**'.

## Gestión de incidentes

Existen dos tipos de incidentes a distinguir: los incidentes globales, que afectan a todo el sistema, y los incidentes específicos a un perímetro cliente, que impactan únicamente los recursos o servicios asociados a un cliente particular.

### Incidentes globales

La recuperación de información sobre los incidentes globales no requiere ningún permiso particular. Un banner rojo se muestra al conectar a la consola para advertir sobre la presencia de un incidente global en proceso de resolución. El usuario tiene la posibilidad de ocultar este banner temporalmente durante su sesión, pero reaparecerá en cada nueva conexión o cuando se actualice la página, mientras el incidente siga sin resolverse.

<img src={shivaIncident_001} />

Un botón __'Más información'__ redirige a la página pública de seguimiento de incidentes, permitiendo acceder a información adicional sobre el incidente en curso:

<img src={shivaIncident_002} />

Es posible obtener los informes de los incidentes globales. El acceso a estos informes requiere el permiso específico '**incident_management**'.

Aquí tienes un ejemplo de la pestaña que muestra estos informes:

<img src={shivaIncident_003} />

### Incidentes en un perímetro de cliente

La visibilidad de los incidentes específicos a un perímetro cliente requiere el permiso **incident_read**. Estos incidentes están representados por un ícono dedicado, acompañado de una insignia roja que indica la cantidad de incidentes en curso.

El ícono es clicable, lo que permite listar los tickets asociados a los incidentes. Cada ticket incluye un enlace a los detalles del incidente, ofreciendo la posibilidad de seguir el avance de su resolución:

<img src={shivaIncident_004} />

Para consultar los detalles de un incidente, es necesario ser el autor del ticket de incidente o tener el permiso **support_management**.

### Gestión de notificaciones

Con el fin de informar rápidamente a los usuarios en caso de un nuevo incidente, se ha implementado un sistema de notificaciones por correo electrónico. Desde su perfil de usuario, una pestaña titulada '*Mis suscripciones*' permite a los usuarios suscribirse a notificaciones para los dos tipos de incidentes. Así, recibirán un correo electrónico en un plazo muy corto durante la declaración o resolución de un incidente.

<img src={shivaIncident_005} />

El asunto del correo indicará el tipo de incidente y, en el caso de un incidente relacionado con un perímetro, el nombre del perímetro afectado. La notificación también contendrá un enlace que permite acceder directamente a los detalles del incidente:

<img src={shivaIncident_006} />