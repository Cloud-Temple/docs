---
title: Operaciones planificadas y gestión de Incidentes
---

Como cualquier plataforma de infraestructura Cloud, la plataforma Cloud Temple es objeto de trabajos y mantenimiento de hardware y software regularmente.

## Acceso a las operaciones e incidentes en curso

El ícono de seguimiento de las operaciones permite visualizar las operaciones planificadas en la infraestructura Cloud Temple así como los incidentes abiertos en el tenant. Este ícono está accesible en la barra de íconos en la parte superior izquierda de la pantalla y tiene la forma de un ícono __'Herramientas'__

![](images/shiva_intervention_menu01.png)

Este ícono tiene como objetivo proporcionar visibilidad sobre las intervenciones planificadas, en curso y terminadas y/o los incidentes en el tenant.

Cuando hay intervenciones y/o incidentes en curso, aparece un número en el ícono.

Al hacer clic en visualización rápida, encontrará las intervenciones en curso. También es posible hacer clic en __‘Todas las intervenciones’__ o __‘Todos los incidentes y reportes del tenant’__ para mostrar más detalles.

![](images/shiva_intervention_menu03.png)

## Seguimiento de las intervenciones planificadas

La página Intervenciones se compone de dos pestañas. La primera pestaña permite visualizar las intervenciones previstas para los próximos 30 días y las intervenciones en curso.

![](images/shiva_intervention_menu04.png)

Las intervenciones terminadas por su parte son visibles en la segunda pestaña ‘Terminado’

![](images/shiva_intervention_menu05.png)

El acceso a esta información requiere que el perfil del usuario tenga el permiso '**intervention_read**'.

## Gestión de incidentes

Se deben diferenciar dos tipos de incidentes: los incidentes globales, que afectan a todo el sistema, y los incidentes específicos a un perímetro cliente, que impactan únicamente los recursos o servicios asociados a un cliente particular.

### Incidentes globales

La recuperación de la información sobre los incidentes globales no requiere ningún permiso particular. Se muestra una banda roja al iniciar sesión en la consola para advertir de la presencia de un incidente global en curso de resolución. El usuario tiene la posibilidad de ocultar esta banda temporalmente durante su sesión, pero esta reaparecerá en cada nueva conexión o al actualizar la página, mientras el incidente no esté resuelto.

![](images/shiva_incident_001.png)

Un botón __'Más información'__ redirige a la página pública de seguimiento de incidentes, permitiendo acceder a información adicional sobre el incidente en curso:

![](images/shiva_incident_002.png)

Es posible obtener los informes de los incidentes globales. El acceso a estos informes requiere el permiso específico '**incident_management**'.

Aquí un ejemplo de la pestaña mostrando estos reportes:

![](images/shiva_incident_003.png)

### Incidentes en un perímetro del cliente

La visibilidad de los incidentes específicos a un perímetro cliente requiere el permiso **incident_read**. Estos incidentes están representados por un ícono dedicado, acompañado de una insignia roja que indica el número de incidentes en curso.

El ícono es clicable, permitiendo listar los tickets asociados a los incidentes. Cada ticket incluye un enlace hacia los detalles del incidente, ofreciendo la posibilidad de seguir el avance de su resolución:

![](images/shiva_incident_004.png)

Para consultar los detalles de un incidente, es necesario ser el autor del ticket de incidente o tener el permiso **support_management**.

### Gestión de notificaciones

Con el fin de informar rápidamente a los usuarios en caso de un nuevo incidente, se ha implementado un sistema de notificaciones por correo electrónico. Desde su perfil de usuario, una pestaña titulada '*Mis suscripciones*' permite a los usuarios suscribirse a las notificaciones para ambos tipos de incidentes. Así, recibirán un correo electrónico en un tiempo muy corto durante la declaración o resolución de un incidente.

![](images/shiva_incident_005.png)

El asunto del correo electrónico indicará el tipo de incidente y, en el caso de un incidente relacionado a un perímetro, el nombre del perímetro impactado. La notificación también contendrá un enlace que permite acceder directamente a los detalles del incidente:

![](images/shiva_incident_006.png)