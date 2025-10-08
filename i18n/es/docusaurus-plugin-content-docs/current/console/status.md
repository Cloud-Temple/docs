---
title: Operaciones programadas y gestión de incidentes
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

Como cualquier plataforma de infraestructura en la nube, la plataforma Cloud Temple está sujeta a trabajos y mantenimiento regular de hardware y software.

## Acceso a las operaciones y incidentes en curso

El icono de seguimiento de operaciones permite visualizar las operaciones programadas en la infraestructura Cloud Temple así como los incidentes abiertos en el inquilino. Este icono es accesible en la barra de iconos en la parte superior izquierda de la pantalla y tiene la forma de un icono __'Herramientas'__.

<img src={shivaInterventionMenu01} />

Este icono tiene como objetivo proporcionar visibilidad sobre las intervenciones programadas, en curso y finalizadas, así como los incidentes en el inquilino.

Cuando hay intervenciones y/o incidentes en curso, un número aparece en el icono.

Al hacer clic en visualización rápida, encontrarás las intervenciones en curso. También es posible hacer clic en __'Todas las intervenciones'__ o __'Todos los incidentes y informes del inquilino'__ para mostrar más detalles.

<img src={shivaInterventionMenu03} />

## Seguimiento de intervenciones programadas

La página Intervenciones está compuesta por dos pestañas. La primera pestaña permite visualizar las intervenciones previstas en los próximos 60 días y las intervenciones en curso.

<img src={shivaInterventionMenu04} />

Las intervenciones finalizadas, por su parte, son visibles en la segunda pestaña 'Finalizado'. Las intervenciones finalizadas se conservan y son accesibles durante 60 días en el pasado, permitiendo un seguimiento completo del historial de operaciones de mantenimiento.

<img src={shivaInterventionMenu05} />

El acceso a esta información requiere, para el perfil del usuario, la permisión '__intervention_read__'.

## Gestión de incidentes

Dos tipos de incidentes deben distinguirse: los incidentes globales, que afectan a todo el sistema, y los incidentes específicos de un área del cliente, que impactan únicamente en los recursos o servicios asociados a un cliente determinado.

### Incidentes globales

La recuperación de información sobre los incidentes globales no requiere ninguna permisión especial. Un banner rojo se muestra al iniciar sesión en la consola para alertar sobre la presencia de un incidente global en resolución. El usuario tiene la posibilidad de ocultar temporalmente este banner durante su sesión, pero volverá a aparecer en cada nueva conexión o al recargar la página, mientras el incidente no esté resuelto.

<img src={shivaIncident_001} />

Un botón __'Más información'__ redirige a la página pública de seguimiento de incidentes, permitiendo acceder a información adicional sobre el incidente en curso:

<img src={shivaIncident_002} />

Es posible obtener informes sobre los incidentes globales. El acceso a estos informes requiere la permisión específica '__incident_management__'. Los informes de incidentes globales se archivan y son accesibles durante 60 días después de su resolución, garantizando una trazabilidad completa de los eventos del sistema.

Aquí hay un ejemplo de la pestaña que muestra estos informes:

<img src={shivaIncident_003} />

### Incidentes en un área del cliente

La visibilidad de los incidentes específicos de un área del cliente requiere la permisión __incident_read__. Estos incidentes se representan mediante un icono dedicado, acompañado de un indicador rojo que muestra el número de incidentes en curso.

El icono es clicable, permitiendo listar los tickets asociados a los incidentes. Cada ticket incluye un enlace a los detalles del incidente, ofreciendo la posibilidad de seguir el avance de su resolución. Los incidentes resueltos y sus informes (CRs) permanecen accesibles durante 60 días, permitiendo un análisis retrospectivo y seguimiento de las acciones correctivas implementadas.

<img src={shivaIncident_004} />

Para consultar los detalles de un incidente, es necesario ser el autor del ticket de incidente o contar con la permisión __support_management__.

### Gestión de notificaciones

Con el fin de informar rápidamente a los usuarios en caso de un nuevo incidente, se ha implementado un sistema de notificaciones por correo electrónico. Desde su perfil de usuario, una pestaña denominada '*Mis suscripciones*' permite a los usuarios suscribirse a las notificaciones para los dos tipos de incidentes. De esta manera, recibirán un correo electrónico en un plazo muy corto al declararse o resolverse un incidente.

<img src={shivaIncident_005} />

El asunto del correo electrónico indicará el tipo de incidente y, en el caso de un incidente relacionado con un área, el nombre del área afectada. La notificación también contendrá un enlace que permite acceder directamente a los detalles del incidente:

<img src={shivaIncident_006} />
