---
title: Scheduled Operations and Incident Management
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

As with any cloud infrastructure platform, the Temple Cloud platform undergoes regular hardware and software maintenance and updates.

## Access to ongoing operations and incidents

The operations tracking icon allows you to view planned operations on the Cloud Temple infrastructure as well as open incidents on the tenant. This icon is accessible in the icon bar in the upper-left corner of the screen and appears as the __'Tools'__ icon.

<img src={shivaInterventionMenu01} />

This icon is designed to provide visibility into planned, ongoing, and completed interventions, as well as incidents on the tenant.

When ongoing interventions and/or incidents exist, a number appears on the icon.

By clicking on "Quick view," you will see the ongoing interventions. It is also possible to click on __'All interventions'__ or __'All incidents and tenant reports'__ to display more details.

<img src={shivaInterventionMenu03} />

## Seguimiento de intervenciones programadas

La página de Intervenciones está compuesta por dos pestañas. La primera pestaña permite visualizar las intervenciones previstas durante los próximos 60 días y las intervenciones en curso.

<img src={shivaInterventionMenu04} />

Las intervenciones finalizadas, por su parte, son visibles en la segunda pestaña 'Terminado'. Las intervenciones finalizadas se conservan y permanecen accesibles durante los últimos 60 días, permitiendo un seguimiento completo del historial de operaciones de mantenimiento.

<img src={shivaInterventionMenu05} />

El acceso a esta información requiere, para el perfil de usuario, el permiso '__intervention_read__'.

## Gestión de incidentes

Se distinguen dos tipos de incidentes: los incidentes globales, que afectan a todo el sistema, y los incidentes específicos de un ámbito cliente, que solo impactan los recursos o servicios asociados a un cliente determinado.

### Incidentes globales

La recuperación de la información sobre incidentes globales no requiere permisos especiales. Se muestra una bandera roja inmediatamente tras la conexión a la consola para advertir sobre la existencia de un incidente global en curso de resolución. El usuario tiene la posibilidad de ocultar temporalmente esta bandera durante su sesión, pero esta volverá a aparecer en cada nueva conexión o al recargar la página, mientras el incidente permanezca sin resolver.

<img src={shivaIncident_001} />

Un botón __'Más información'__ redirige a la página pública de seguimiento de incidentes, permitiendo acceder a información adicional sobre el incidente actual:

<img src={shivaIncident_002} />

Es posible obtener informes sobre incidentes globales. El acceso a estos informes requiere el permiso específico '__incident_management__'. Los informes de incidentes globales se archivan y permanecen accesibles durante 60 días tras su resolución, garantizando una trazabilidad completa de los eventos del sistema.

A continuación se muestra un ejemplo de la pestaña que muestra estos informes:

<img src={shivaIncident_003} />

### Incidents en un entorno cliente

La visibilidad de los incidentes específicos de un entorno cliente requiere el permiso __incident_read__. Estos incidentes se representan mediante un ícono dedicado, acompañado de un indicador rojo que muestra el número de incidentes activos.

El ícono es clickeable y permite listar los tickets asociados a los incidentes. Cada ticket incluye un enlace a los detalles del incidente, ofreciendo la posibilidad de seguir el avance de su resolución. Los incidentes resueltos y sus informes (CRs) permanecen consultables durante 60 días, permitiendo un análisis retrospectivo y el seguimiento de las acciones correctivas implementadas.

<img src={shivaIncident_004} />

Para consultar los detalles de un incidente, es necesario ser el autor del ticket del incidente o contar con el permiso __support_management__.

### Gestión de notificaciones

Con el fin de informar rápidamente a los usuarios en caso de un nuevo incidente, se ha implementado un sistema de notificaciones por correo electrónico. Desde su perfil de usuario, una pestaña titulada '*Mis suscripciones*' permite a los usuarios suscribirse a las notificaciones para los dos tipos de incidentes. De esta manera, recibirán un correo electrónico en un plazo muy corto cuando se declare o se resuelva un incidente.

<img src={shivaIncident_005} />

El asunto del correo indicará el tipo de incidente y, en el caso de un incidente relacionado con un perímetro, el nombre del perímetro afectado. La notificación también incluirá un enlace que permite acceder directamente a los detalles del incidente:

<img src={shivaIncident_006} />