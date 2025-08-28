---
Título: Matriz de Responsabilidad - OpenShift estándar
---

Aquí se presenta el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de la oferta **OpenShift estándar**.

### Definición de los diferentes roles

Aquí repasamos los diferentes roles del RACI:

| Rol         | Descripción                                                                                  |
|------------|-------------------------------------------------------------------------------------------------|
| (R) Realiza  | __R__ realiza el proceso                                                                   |
| (A) Aprova    | __A__ aprova la realización del proceso                                                        |
| (C) Consulta  | __C__ consulta durante el proceso                                                              |
| (I) Informa   | __I__ informa sobre los resultados del proceso (vía herramientas, portal o correo electrónico) |

### Instalación inicial

| Actividad                                                                                 | Rol del Cliente | Rol del Cloud Temple |
| ---------------------------------------------------------------------------------------- | ----------- | ----------------- |
| Definir la arquitectura global del servicio OpenShift                                      | C           | RA                |
| Dimensionar el servicio OpenShift (número de nodos, recursos)                          | C           | RA                |
| Instalar el servicio OpenShift con configuración por defecto                             | I           | RA                |
| Configuración del servicio OpenShift                                                       | RA          | C                 |
| Configurar la red básica del servicio OpenShift                                        | I           | RA                |
| Despliegue de la configuración inicial de identidades y acceso para OpenShift       | C           | RA                |
| Definir la estrategia de escalado y alta disponibilidad en la infraestructura          | C           | RA                |

### Gestión de proyectos y aplicaciones

| Actividad                                          | Rol del Cliente | Rol de Cloud Temple |
| ------------------------------------------------- | ----------- | ----------------- |
| Crear y gestionar proyectos OpenShift              | RA          | C                 |
| Despliegue y gestión de aplicaciones en OpenShift | RA          | C                 |
| Configuración de pipelines CI/CD                    | RA          | C                 |
| Gestión de imágenes de contenedores y registros   | RA          | C                 |

### Mantenimiento y actualizaciones

| Actividad                                         | Rol del Cliente | Rol de Cloud Temple |
| ------------------------------------------------- | ---------------- | --------------------- |
| Actualizar el servicio OpenShift                   | RA              | I                     |
| Aplicar los correcciones de seguridad a OpenShift | RA              | I                     |
| Actualizar las aplicaciones desplegadas          | RA              | I                     |
| Gestionar las actualizaciones de imágenes de contenedores | RA              | I                     |

### Supervisión y rendimiento

| Actividad                                             | Rol del Cliente | Rol de Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Monitorear el rendimiento del servicio OpenShift     | RA          | I                 |
| Monitorear el rendimiento de las aplicaciones       | RA          | I                 |
| Gestionar los alertas relacionados con el servicio OpenShift | RA          | I                 |
| Gestionar los alertas relacionadas con las aplicaciones | RA          | I                 |

### Seguridad

| Actividad                                                                   | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------|----------------|------------------|
| Gestionar la seguridad del servicio OpenShift                          | RA            | I                  |
| Configuración y gestión de políticas de seguridad de pods             | RA            | C                  |
| Gestionar los certificados SSL/TLS para el servicio OpenShift          | RA            | I                  |
| Gestionar los certificados SSL/TLS para las aplicaciones              | RA            | C                  |
| Implementación y gestión del control de acceso basado en roles (RBAC) | RA            | I                  |

### Backup and Disaster Recovery

| Activity                                                                   | Client Role (RA) | Cloud Temple Role (CI) |
|-------------------------------------------------------------------------------|-------------------|-------------------------|
| Define the backup strategy for the OpenShift service                      | RA               | CI                    |
| Implement and manage backups of the OpenShift service                     | RA               | CI                    |
| Define the backup strategy for applications                               | RA               | CI                    |
| Implement and manage backups of applications                            | RA               | CI                    |
| Test disaster recovery procedures for the service                       | RA               | CI                    |
| Test disaster recovery procedures for applications                      | RA               | CI                    |

### Soporte y resolución de problemas

| Actividad                                                                   | Rol del Cliente | Rol de Cloud Temple |
|-------------------------------------------------------------------------------|----------------|------------------|
| Proporcionar soporte de nivel 1 para la infraestructura                  | I             | RA                |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura            | I             | RA                |
| Resolver problemas relacionados con el servicio OpenShift              | RA           | C                 |
| Resolver problemas relacionados con las aplicaciones                  | RA           | C                 |

### Gestión de capacidades y evolución

| Actividad                                                     | Rol del Cliente | Rol del Templo Cloud |
| ------------------------------------------------------------ | ----------- | ----------------- |
| Monitorear el uso de recursos del servicio OpenShift        | RA          | C                 |
| Planificar la evolución de las capacidades del servicio      | RA          | C                 |
| Implementar los cambios en capacidad                      | I           | RA                |
| Gestionar la evolución de las aplicaciones y sus recursos  | RA          | C                 |

### Documentación y cumplimiento

| Actividad                                                          | Rol del Cliente | Rol de Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Mantener la documentación del servicio OpenShift                   | I           | RA                |
| Mantener la documentación de las aplicaciones                       | RA          | I                 |
| Asegurar el cumplimiento del servicio OpenShift con las normas de seguridad | RA          | C                 |
| Asegurar el cumplimiento de las aplicaciones con las normas de seguridad     | RA          | C                 |
| Realizar auditorías del servicio OpenShift                          | RA          | C                 |
| Realizar auditorías de las aplicaciones                              | RA          | C                 |

### Gestión de Operadores OpenShift

Los **operadores OpenShift** son extensiones del servicio que automatizan la gestión de aplicaciones o servicios complejos en Kubernetes/OpenShift.

En el marco del servicio **OpenShift Standard**, no existen restricciones para los operadores. Solo se asegura la disponibilidad de la función **OperatorHub** por parte de **Cloud Temple**. Los operadores se ofrecen a través del catálogo de la marketplace Red Hat. La instalación, supervisión y gestión de las actualizaciones de estos operadores son responsabilidad del **Cliente**.
El **Cliente** es el encargado de utilizar estos operadores para administrar sus cargas de trabajo.

| Actividad                                                          | Rôle Cliente | Rôle Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ----------------- |
| Provisión del catálogo de Operadores por defecto                 | CI          | RA                |
| Actualización de los Operadores                                        | RA          | CI                |
| Supervisión del estado de los Operadores                             | RA          | CI                |
| Resolución de problemas relacionados con los Operadores         | RA          | CI                |
| Gestión de permisos de los Operadores                          | RA          | CI                |
| Gestión de recursos de los Operadores (adición/supresión)        | RA          | CI                |
| Aseguramiento de datos de los recursos de los Operadores         | RA          | CI                |
| Supervisión y monitoreo de los recursos operadores               | RA          | CI                |
| Restauración de datos de los recursos de los Operadores            | RA          | CI                |
| Auditoría de seguridad de los Operadores                          | RA          | CI                |
| Soporte a los Operadores                                            | RA          | CI                |
| Gestión de licencias y contratos de licencias sobre los operadores | RA          | I                 |
| Gestión de planes de soporte específicos sobre los operadores      | RA          | I                 |

> **Nota importante**:
>
> - Todo daño causado por la instalación de un operador o resultado de una acción del cliente es responsabilidad del **Cliente**.
> - La gestión de las licencias y los planes de soporte específicos sobre los operadores no es responsabilidad de **Cloud Temple**.

### Clarification sur la asistencia aplicativa

**Asistencia aplicativa (prestación adicional):**

La asistencia aplicativa relacionada con el desarrollo, configuración, gestión y mantenimiento de las aplicaciones **no está bajo la responsabilidad de Cloud Temple**. Nuestro alcance se centra únicamente en la gestión de la infraestructura subyacente del servicio OpenShift. El soporte a las cargas de trabajo, la gestión del cluster hasta el sistema operativo, la gestión de los operadores y las pipelines CI/CD son responsabilidad del cliente o de cualquier prestador externo designado para esta tarea.

| Actividad                                           | Rol del Cliente | Rollo de Cloud Temple |
| -------------------------------------------------- | ----------- | ----------------- |
| Asistencia aplicativa (prestación adicional) | RA          | C                 |