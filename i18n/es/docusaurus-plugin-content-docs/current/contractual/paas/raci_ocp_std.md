---
title: Matriz de responsabilidad - OpenShift Standard
---

Este es el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de la oferta **OpenShift Standard**.

### Definición de los diferentes roles

Recordamos aquí los diferentes roles del RACI:

| Rol         | Descripción                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realiza  | __R__realiza el proceso                                                              |
| (A) Aprueba | __A__prueba la realización del proceso                                              |
| (C) Consulta | __C__onsultado durante el proceso                                                     |
| (I) Informado  | __I__nformado de los resultados del proceso (a través de la herramienta, el portal o el correo electrónico) |

### Configuración inicial

| Actividad                                                                                 | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------------------------------- | ----------- | ----------------- |
| Definir la arquitectura general del servicio OpenShift                                      | C           | RA                |
| Dimensionar el servicio OpenShift (número de nodos, recursos)                          | C           | RA                |
| Instalar el servicio OpenShift con una configuración predeterminada                         | I           | RA                |
| Configuración del servicio OpenShift                                                       | RA          | C                 |
| Configurar la red básica del servicio OpenShift                                        | I           | RA                |
| Despliegue de la configuración inicial de identidades y accesos para OpenShift       | C           | RA                |
| Definir la estrategia de escalado y alta disponibilidad en la infraestructura  | C           | RA                |

### Gestión de proyectos y aplicaciones

| Actividad                                          | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------- | ----------- | ----------------- |
| Crear y gestionar los proyectos OpenShift              | RA          | C                 |
| Desplegar y gestionar las aplicaciones en OpenShift | RA          | C                 |
| Configurar los pipelines CI/CD                    | RA          | C                 |
| Gestionar las imágenes de contenedores y los registros   | RA          | C                 |

### Mantenimiento y actualizaciones

| Actividad                                         | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------ | ----------- | ----------------- |
| Actualizar el servicio OpenShift               | RA          | I                 |
| Aplicar los parches de seguridad a OpenShift | RA          | I                 |
| Actualizar las aplicaciones desplegadas         | RA          | I                 |
| Gestionar las actualizaciones de las imágenes de contenedores  | RA          | I                 |

### Supervisión y rendimiento

| Actividad                                             | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Supervisar el rendimiento del servicio OpenShift       | RA          | I                 |
| Supervisar el rendimiento de las aplicaciones           | RA          | I                 |
| Administrar las alertas relacionadas con el servicio OpenShift         | RA          | I                 |
| Administrar las alertas relacionadas con las aplicaciones             | RA          | I                 |

### Seguridad

| Actividad                                                          | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Gestionar la seguridad del servicio OpenShift                     | RA          | I                 |
| Configurar y gestionar las políticas de seguridad de los pods     | RA          | C                 |
| Gestionar los certificados SSL/TLS para el servicio OpenShift      | RA          | I                 |
| Gestionar los certificados SSL/TLS para las aplicaciones          | RA          | C                 |
| Implementar y gestionar el control de acceso basado en roles (RBAC) | RA          | I                 |

### Copia de seguridad y recuperación ante desastres

| Actividad                                                              | Rol Cliente | Rol Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Definir la estrategia de copia de seguridad para el servicio OpenShift          | RA          | CI                |
| Implementar y gestionar las copias de seguridad del servicio OpenShift         | RA          | CI                |
| Definir la estrategia de copia de seguridad para las aplicaciones              | RA          | CI                |
| Implementar y gestionar las copias de seguridad de las aplicaciones             | RA          | CI                |
| Probar los procedimientos de recuperación ante desastres para el servicio       | RA          | CI                |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones | RA          | CI                |

### Soporte y resolución de problemas

| Actividad                                                         | Rol del Cliente | Rol de Cloud Temple |
| ---------------------------------------------------------------- | --------------- | ------------------- |
| Proporcionar soporte de nivel 1 para la infraestructura             | I               | RA                  |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura        | I               | RA                  |
| Resolver problemas relacionados con el servicio OpenShift                 | RA              | C                   |
| Resolver problemas relacionados con las aplicaciones                     | RA              | C                   |

### Gestión de capacidades y evolución

| Actividad                                                    | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Supervisar el uso de los recursos del servicio OpenShift    | RA          | C                 |
| Planificar la evolución de las capacidades del servicio      | RA          | C                 |
| Implementar los cambios de capacidad                         | I           | RA                |
| Gestionar la evolución de las aplicaciones y sus recursos    | RA          | C                 |

### Documentación y cumplimiento

| Actividad                                                          | Rol del Cliente | Rol de Cloud Temple |
| ----------------------------------------------------------------- | --------------- | ------------------- |
| Mantener la documentación del servicio OpenShift                   | I               | RA                  |
| Mantener la documentación de las aplicaciones                       | RA              | I                   |
| Garantizar el cumplimiento del servicio OpenShift con los estándares de seguridad | RA              | C                   |
| Garantizar el cumplimiento de las aplicaciones con los estándares de seguridad     | RA              | C                   |
| Realizar auditorías del servicio OpenShift                          | RA              | C                   |
| Realizar auditorías de las aplicaciones                              | RA              | C                   |

### Gestión de los operadores OpenShift

Los **operadores OpenShift** son extensiones del servicio que automatizan la gestión de aplicaciones o servicios complejos en Kubernetes/OpenShift.

En el marco del servicio **OpenShift Standard**, no se aplican limitaciones a los operadores. Solo se garantiza la disponibilidad de la funcionalidad **OperatorHub** por parte de **Cloud Temple**. Los operadores se ponen a disposición a través del catálogo de la marketplace Red Hat. La instalación, supervisión y gestión de las actualizaciones de estos operadores son responsabilidad del **Cliente**. El **Cliente** es responsable del uso de estos operadores para gestionar sus cargas de trabajo.

| Actividad                                                          | Rol del Cliente | Rol de Cloud Temple |
| ----------------------------------------------------------------- | --------------- | ------------------- |
| Puesta a disposición del catálogo de operadores por defecto           | CI              | RA                  |
| Actualización de los operadores                                        | RA              | CI                  |
| Supervisión del estado de los operadores                             | RA              | CI                  |
| Resolución de problemas relacionados con los operadores              | RA              | CI                  |
| Gestión de los permisos de los operadores                            | RA              | CI                  |
| Gestión de los recursos de los operadores (adición/eliminación)      | RA              | CI                  |
| Copia de seguridad de los datos de los recursos de los operadores     | RA              | CI                  |
| Supervisión y monitorización de los recursos de los operadores        | RA              | CI                  |
| Restauración de los datos de los recursos de los operadores           | RA              | CI                  |
| Auditoría de seguridad de los operadores                             | RA              | CI                  |
| Soporte de los operadores                                            | RA              | CI                  |
| Gestión de las licencias y contratos de licencias sobre los operadores | RA              | I                   |
| Gestión de los planes de soporte específicos sobre los operadores     | RA              | I                   |

> **Nota importante**:
>
> - Todo **daño** causado por la instalación de un **operador** o derivado de una **operación del cliente** es responsabilidad del **Cliente**.
> - La gestión de las **licencias** y los **planes de soporte específicos** sobre los operadores no son responsabilidad de **Cloud Temple**.

### Aclaración sobre la asistencia aplicativa

**Asistencia aplicativa (servicio complementario):**

La asistencia aplicativa relacionada con el desarrollo, configuración, gestión y mantenimiento de las aplicaciones **no está bajo la responsabilidad de Cloud Temple**. El ámbito se centra únicamente en la gestión de la **infraestructura subyacente al servicio OpenShift**. El **soporte de las cargas de trabajo**, **la gestión del cluster hasta el sistema operativo**, **la gestión de los operadores** y los **pipelines CI/CD** son responsabilidad del **cliente** o de cualquier **prestador tercero designado** para esta tarea.

| Actividad                                           | Rol del Cliente | Rol de Cloud Temple |
| -------------------------------------------------- | --------------- | ------------------- |
| Asistencia aplicativa (servicio complementario) | RA              | C                   |

---