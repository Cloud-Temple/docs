---
title: Matriz de responsabilidad PaaS - OpenShift SecNumCloud
displayed_sidebar: docSidebar
---


Este es el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso del PaaS OpenShift SecNumCloud.

## Definición de los diferentes roles

Aquí se recuerdan los diferentes roles del RACI:

| Rol         | Descripción                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realiza  | __R__ealiza el proceso                                                                |
| (A) Aprueba  | __A__prueba la realización del proceso                                                 |
| (C) Consulta | __C__onsultado durante el proceso                                                     |
| (I) Informado| __I__nformado de los resultados del proceso (vía herramientas, el portal o la mensajería) |

## Configuración inicial

| Actividad                                                             | Rol Cliente | Rol Cloud Temple |
| -------------------------------------------------------------------- | ----------- | ----------------- |
| Definir la arquitectura global de la plataforma OpenShift            | C           | RA                |
| Dimensionar la plataforma OpenShift (número de nodos, recursos)      | C           | RA                |
| Instalar y configurar la plataforma OpenShift                        | I           | RA                |
| Configurar la red base de la plataforma OpenShift                    | I           | RA                |
| Implementar la gestión de identidades y accesos para OpenShift       | C           | RA                |
| Definir la estrategia de escalado y alta disponibilidad              | C           | RA                |

## Gestión de proyectos y aplicaciones

| Actividad                                          | Rol del Cliente | Rol Cloud Temple |
| ------------------------------------------------- | --------------- | ---------------- |
| Crear y gestionar los proyectos de OpenShift       | RA              | C                |
| Desplegar y gestionar las aplicaciones en OpenShift | RA              | C                |
| Configurar los pipelines CI/CD                     | RA              | C                |
| Gestionar las imágenes de contenedores y los registros | RA           | C                |

## Mantenimiento y actualizaciones

| Actividad                                         | Rol del Cliente | Rol Cloud Temple |
| ------------------------------------------------ | --------------- | ---------------- |
| Actualizar la plataforma OpenShift                | I               | RA               |
| Aplicar parches de seguridad a OpenShift          | I               | RA               |
| Actualizar las aplicaciones desplegadas           | RA              | I                |
| Gestionar las actualizaciones de las imágenes de contenedores | RA              | I                |

## Monitoreo y rendimiento

| Actividad                                             | Rol del Cliente | Rol Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Monitorear el rendimiento de la plataforma OpenShift | I           | RA                |
| Monitorear el rendimiento de las aplicaciones        | RA          | I                 |
| Gestionar las alertas relacionadas con la plataforma | I           | RA                |
| Gestionar las alertas relacionadas con las aplicaciones | RA          | I                 |

## Seguridad

| Actividad                                                           | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Gestionar la seguridad de la plataforma OpenShift                       | I           | RA                |
| Configurar y gestionar las políticas de seguridad de los pods            | RA          | C                 |
| Gestionar los certificados SSL/TLS para la plataforma                   | I           | RA                |
| Gestionar los certificados SSL/TLS para las aplicaciones                | RA          | C                 |
| Implementar y gestionar el control de acceso basado en roles (RBAC) | C           | RA                |

## Copia de seguridad y recuperación ante desastres

| Actividad                                                              | Rol del Cliente | Rol Cloud Temple |
| --------------------------------------------------------------------- | --------------- | ---------------- |
| Definir la estrategia de copia de seguridad para la plataforma OpenShift | C           | RA                |
| Implementar y gestionar las copias de seguridad de la plataforma             | I           | RA                |
| Definir la estrategia de copia de seguridad para las aplicaciones              | RA          | C                 |
| Implementar y gestionar las copias de seguridad de las aplicaciones             | RA          | I                 |
| Probar los procedimientos de recuperación ante desastres para la plataforma    | I           | RA                |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones | RA          | C                 |

## Soporte y resolución de problemas

| Actividad                                                         | Rol del Cliente | Rol de Cloud Temple |
| ---------------------------------------------------------------- | --------------- | ------------------- |
| Proporcionar soporte de nivel 1 para la plataforma OpenShift      | I               | RA                  |
| Proporcionar soporte de niveau 2 y 3 para la plataforma OpenShift | I               | RA                  |
| Resolver problemas relacionados con la plataforma                | I               | RA                  |
| Resolver problemas relacionados con las aplicaciones             | RA              | C                   |

## Gestión de capacidades y evolución

| Actividad                                                 | Rol Cliente | Rol Cloud Temple |
| -------------------------------------------------------- | ----------- | ---------------- |
| Supervisar el uso de los recursos de la plataforma       | I           | RA               |
| Planificar la evolución de las capacidades de la plataforma | C        | RA               |
| Implementar los cambios de capacidad                     | I           | RA               |
| Gestionar la evolución de las aplicaciones y sus recursos | RA          | C                |

## Documentación y cumplimiento

| Actividad                                                       | Rol Cliente | Rol Cloud Temple |
| --------------------------------------------------------------- | ----------- | ---------------- |
| Mantener la documentación de la plataforma OpenShift            | I           | RA               |
| Mantener la documentación de las aplicaciones                   | RA          | I                |
| Garantizar el cumplimiento de la plataforma con las normas de seguridad | I           | RA               |
| Garantizar el cumplimiento de las aplicaciones con las normas de seguridad | RA          | C                |
| Realizar auditorías de la plataforma                            | I           | RA               |
| Realizar auditorías de las aplicaciones                         | RA          | C                |

### Gestión de operadores de OpenShift

Los **operadores de OpenShift** son extensiones de la plataforma que automatizan la gestión de aplicaciones o servicios complejos en Kubernetes.

Solo se ofrecerán **Operadores** procedentes de los catálogos **Certificados, Red Hat y MarketPlace**, siempre que sean **conformes con los requisitos SecNumCloud** y respeten las limitaciones del ecosistema.

La instalación, la supervisión y la gestión de las actualizaciones de estos operadores son gestionadas por **Cloud Temple**, mientras que el **Cliente** es responsable del uso de estos operadores para gestionar sus cargas de trabajo.

| Actividad                                                        | Rôle Cliente | Rôle Cloud Temple |
| --------------------------------------------------------------- | ------------ | ----------------- |
| Puesta a disposición de los operadores en el catálogo           | CI           | RA                |
| Configuración inicial de los Operadores a través de la Marketplace | CI           | RA                |
| Actualización de los Operadores                                  | I            | RA                |
| Supervisión del estado de los Operadores                         | I            | RA                |
| Resolución de problemas relacionados con los Operadores          | CI           | RA                |
| Gestión de los permisos de los Operadores                        | C            | RA                |
| Gestión de los recursos de los Operadores (añadir/eliminar)      | CI           | RA                |
| Copia de seguridad de los datos de los recursos de los Operadores | CI           | RA                |
| Supervisión y monitorización de los recursos de los Operadores   | CI           | RA                |
| Restauración de los datos de los recursos de los Operadores      | CI           | RA                |
| Auditoría de seguridad de los Operadores                         | I            | RA                |
| Soporte de los Operadores Red Hat                                | I            | RA                |
| Soporte de los Operadores Certificados                           | I            | RA                |
| Soporte de los Operadores MarketPlace                            | I            | RA                |
| Gestión de las licencias y contratos de licencia de los operadores | RA           | I                 |
| Gestión de los planes de soporte específicos para los operadores | RA           | I                 |

> **Nota importante** :
> Solo se ponen a disposición los operadores **declarados compatibles** por Cloud Temple y conformes con **SecNumCloud**. Todo operador no certificado o procedente de una fuente externa no será admitido ni validado para su uso en los entornos.
> La gestión de las **licencias** y de los **planes de soporte específicos** para los operadores procedentes del catálogo **MarketPlace Red Hat** no es responsabilidad de **Cloud Temple**. La gestión del soporte de estos operadores se delega de facto al socio que proporciona el servicio.
---

### Aclaración sobre la asistencia de aplicaciones

**Asistencia de aplicaciones (servicio complementario) :**

La asistencia de aplicaciones relacionada con el desarrollo, la configuración, la gestión y el mantenimiento de las aplicaciones **no es responsabilidad de Cloud Temple**. El alcance se centra únicamente en la gestión de la infraestructura OpenShift y de los operadores. El **soporte de las cargas de trabajo** (applications déployées) y de los pipelines CI/CD son responsabilidad del cliente o de cualquier proveedor externo designado para esta tarea.

| Actividad | Rol del Cliente | Rol de Cloud Temple |
| --- | --- | --- |
| Asistencia de aplicaciones (servicio complementario) | RA | C |