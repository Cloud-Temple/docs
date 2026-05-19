---
title: Matriz de responsabilidad - OpenShift Standard
slug: /contractual/paas/raci-ocp-standard
displayed_sidebar: docSidebar
---


A continuación se presenta el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de la oferta **OpenShift Standard**.

### Definición de los diferentes roles

Aquí recordamos los diferentes roles del RACI :

| Rol          | Descripción                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realiza  | __R__aliza el proceso                                                                 |
| (A) Aprueba  | __A__prueba la realización del proceso                                                 |
| (C) Consulta | __C__onsultado durante el proceso                                                     |
| (I) Informado| __I__nformado de los resultados del proceso (vía herramientas, el portal o la mensajería)|

### Configuración inicial

| Actividad                                                                                 | Rol del Cliente | Rol de Cloud Temple |
| ---------------------------------------------------------------------------------------- | --------------- | ------------------- |
| Definir la arquitectura general del servicio OpenShift                                   | C               | RA                  |
| Dimensionar el servicio OpenShift (número de nodos, recursos)                            | C               | RA                  |
| Instalar el servicio OpenShift con una configuración predeterminada                      | I               | RA                  |
| Configuración del servicio OpenShift                                                     | RA              | C                   |
| Configurar la red base del servicio OpenShift                                            | I               | RA                  |
| Despliegue de la configuración inicial de identidades y accesos para OpenShift           | C               | RA                  |
| Definir la estrategia de escalado y alta disponibilidad en la infraestructura            | C               | RA                  |

### Gestión de proyectos y aplicaciones

| Actividad                                          | Rol del Cliente | Rol de Cloud Temple |
| ------------------------------------------------- | --------------- | ------------------- |
| Crear y gestionar los proyectos de OpenShift              | RA          | C                 |
| Desplegar y gestionar las aplicaciones en OpenShift | RA          | C                 |
| Configurar los pipelines CI/CD                    | RA          | C                 |
| Gestionar las imágenes de contenedores y los registros   | RA          | C                 |

### Mantenimiento y actualizaciones

| Actividad                                         | Rol del Cliente | Rol de Cloud Temple |
| ------------------------------------------------ | ----------- | ----------------- |
| Actualizar el servicio OpenShift                  | RA          | I                 |
| Aplicar parches de seguridad a OpenShift          | RA          | I                 |
| Actualizar las aplicaciones desplegadas           | RA          | I                 |
| Gestionar las actualizaciones de las imágenes de contenedores | RA          | I                 |

### Supervisión y rendimiento

| Actividad                                             | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Supervisar el rendimiento del servicio OpenShift       | RA          | I                 |
| Supervisar el rendimiento de las aplicaciones           | RA          | I                 |
| Gestionar las alertas relacionadas con el servicio OpenShift | RA          | I                 |
| Gestionar las alertas relacionadas con las aplicaciones | RA          | I                 |

### Seguridad

| Actividad                                                           | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Gestionar la seguridad del servicio OpenShift                             | RA          | I                 |
| Configurar y gestionar las políticas de seguridad de los pods            | RA          | C                 |
| Gestionar los certificados SSL/TLS para el servicio OpenShift            | RA          | I                 |
| Gestionar los certificados SSL/TLS para las aplicaciones                | RA          | C                 |
| Implementar y gestionar el control de acceso basado en roles (RBAC) | RA          | I                 |

### Copia de seguridad y recuperación ante desastres

| Actividad                                                              | Rol del Cliente | Rol de Cloud Temple |
| --------------------------------------------------------------------- | --------------- | ------------------- |
| Definir la estrategia de copia de seguridad para el servicio OpenShift | RA              | CI                  |
| Implementar y gestionar las copias de seguridad del servicio OpenShift | RA              | CI                  |
| Definir la estrategia de copia de seguridad para las aplicaciones      | RA              | CI                  |
| Implementar y gestionar las copias de seguridad de las aplicaciones    | RA              | CI                  |
| Probar los procedimientos de recuperación ante desastres para el servicio | RA              | CI                  |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones | RA              | CI                  |

### Soporte y resolución de problemas

| Actividad                                                         | Rol del Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------- | --------------- | ---------------- |
| Proporcionar soporte de nivel 1 para la infraestructura             | I               | RA               |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura        | I               | RA               |
| Resolver problemas relacionados con el servicio OpenShift                 | RA              | C                |
| Resolver problemas relacionados con las aplicaciones                     | RA              | C                |

### Gestión de capacidades y evolución

| Actividad                                                     | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Supervisar el uso de recursos del servicio OpenShift         | RA          | C                 |
| Planificar la evolución de las capacidades del servicio      | RA          | C                 |
| Implementar los cambios de capacidad                         | I           | RA                |
| Gestionar la evolución de las aplicaciones y sus recursos    | RA          | C                 |

### Documentación y cumplimiento

| Actividad                                                          | Rol del Cliente | Rol de Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Mantener la documentación del servicio OpenShift                   | I           | RA                |
| Mantener la documentación de las aplicaciones                       | RA          | I                 |
| Asegurar el cumplimiento del servicio OpenShift con las normas de seguridad | RA          | C                 |
| Asegurar el cumplimiento de las aplicaciones con las normas de seguridad     | RA          | C                 |
| Realizar auditorías del servicio OpenShift                          | RA          | C                 |
| Realizar auditorías de las aplicaciones                              | RA          | C                 |

### Gestión de operadores de OpenShift

Los **operadores de OpenShift** son extensiones del servicio que automatizan la gestión de aplicaciones o servicios complejos en Kubernetes/OpenShift.

En el marco del servicio **OpenShift Standard**, no se aplica ninguna limitación sobre los operadores. Solo la disponibilidad de la funcionalidad **OperatorHub** está garantizada por **Cloud Temple**. Los operadores están disponibles a través del catálogo del marketplace de Red Hat. La instalación, la supervisión y la gestión de las actualizaciones de estos operadores son gestionadas por el **Cliente**.
El **Cliente** es responsable del uso de estos operadores para gestionar sus cargas de trabajo.

| Actividad                                                          | Rôle Client | Rôle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Disponibilidad del catálogo de Operadores predeterminado           | CI          | RA                |
| Actualización de los Operadores                                        | RA          | CI                |
| Supervisión del estado de los Operadores                             | RA          | CI                |
| Resolución de problemas relacionados con los Operadores                      | RA          | CI                |
| Gestión de permisos de los Operadores                          | RA          | CI                |
| Gestión de recursos de los Operadores (agregar/eliminar)         | RA          | CI                |
| Copia de seguridad de los datos de los recursos de los Operadores              | RA          | CI                |
| Supervisión y monitoreo de los recursos de los Operadores               | RA          | CI                |
| Restauración de los datos de los recursos de los Operadores            | RA          | CI                |
| Auditoría de seguridad de los Operadores                                  | RA          | CI                |
| Soporte de los Operadores                                            | RA          | CI                |
| Gestión de licencias y contratos de licencia de los operadores   | RA          | I                 |
| Gestión de planes de soporte específicos para los operadores      | RA          | I                 |

> **Nota importante** :
>
> - Todo **daño** causado por la instalación de un **operador** o derivado de una **operación del cliente** es responsabilidad del **Cliente**.
> - La gestión de las **licencias** y de los **planes de soporte específicos** en los operadores no es responsabilidad de **Cloud Temple**.

---

### Aclaración sobre la asistencia de aplicaciones

**Asistencia de aplicaciones (servicio complementario) :**

La asistencia de aplicaciones relacionada con el desarrollo, la configuración, la gestión y el mantenimiento de las aplicaciones **no es responsabilidad de Cloud Temple**. El alcance se centra únicamente en la gestión de **la infraestructura subyacente al servicio OpenShift**. El **soporte de las cargas de trabajo**, **la gestión del clúster hasta el sistema operativo**, **la gestión de los operadores** y los **pipelines CI/CD** son de la **responsabilidad del cliente** o de cualquier **proveedor externo designado** para esta tarea.

| Actividad                                           | Rol del Cliente | Rol de Cloud Temple |
| -------------------------------------------------- | ----------- | ----------------- |
| Asistencia de aplicaciones (servicio complementario) | RA          | C                 |