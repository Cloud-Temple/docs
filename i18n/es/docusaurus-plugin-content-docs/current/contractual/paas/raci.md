---
title: Matriz de responsabilidad PaaS - OpenShift SecNumCloud
---

Aquí está el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso del PaaS OpenShift SecNumCloud.

## Definición de los diferentes roles

Aquí recordamos los diferentes roles del RACI:

| Rol          | Descripción                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realiza  | __R__ealiza el proceso                                                                |
| (A) Aprueba  | __A__prueba la realización del proceso                                                |
| (C) Consultado | __C__onsultado durante el proceso                                                    |
| (I) Informado  | __I__nformado de los resultados del proceso (a través de la herramienta, el portal o la mensajería) |

## Configuración inicial

| Actividad                                                              | Rol Cliente | Rol Cloud Temple |
| --------------------------------------------------------------------- | ----------- | ---------------- |
| Definir la arquitectura general de la plataforma OpenShift             | C           | RA               |
| Dimensionar la plataforma OpenShift (número de nodos, recursos)        | C           | RA               |
| Instalar y configurar la plataforma OpenShift                         | I           | RA               |
| Configurar la red básica de la plataforma OpenShift                    | I           | RA               |
| Implementar la gestión de identidades y accesos para OpenShift          | C           | RA               |
| Definir la estrategia de escalado y alta disponibilidad                 | C           | RA               |

## Gestión de proyectos y aplicaciones

| Actividad                                          | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------- | ----------- | ----------------- |
| Crear y gestionar los proyectos OpenShift              | RA          | C                 |
| Desplegar y gestionar las aplicaciones en OpenShift | RA          | C                 |
| Configurar los pipelines CI/CD                    | RA          | C                 |
| Gestionar las imágenes de contenedores y los registros   | RA          | C                 |

## Mantenimiento y actualizaciones

| Actividad                                        | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------ | ----------- | ----------------- |
| Actualizar la plataforma OpenShift               | I           | RA                |
| Aplicar los parches de seguridad a OpenShift     | I           | RA                |
| Actualizar las aplicaciones desplegadas          | RA          | I                 |
| Gestionar las actualizaciones de las imágenes de contenedores | RA          | I                 |

## Supervisión y rendimiento

| Actividad                                             | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------- | ----------- | ----------------- |
| Supervisar el rendimiento de la plataforma OpenShift | I           | RA                |
| Supervisar el rendimiento de las aplicaciones           | RA          | I                 |
| Gestionar las alertas relacionadas con la plataforma              | I           | RA                |
| Gestionar las alertas relacionadas con las aplicaciones             | RA          | I                 |

## Seguridad

| Actividad                                                          | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------------ | ----------- | ----------------- |
| Gestionar la seguridad de la plataforma OpenShift                 | I           | RA                |
| Configurar y gestionar las políticas de seguridad de los pods      | RA          | C                 |
| Gestionar los certificados SSL/TLS para la plataforma              | I           | RA                |
| Gestionar los certificados SSL/TLS para las aplicaciones           | RA          | C                 |
| Implementar y gestionar el control de acceso basado en roles (RBAC) | C           | RA                |

## Respaldo y recuperación después de un desastre

| Actividad                                                              | Rol del Cliente | Rol de Cloud Temple |
| --------------------------------------------------------------------- | --------------- | ------------------- |
| Definir la estrategia de respaldo para la plataforma OpenShift       | C               | RA                  |
| Implementar y gestionar los respaldos de la plataforma             | I               | RA                  |
| Definir la estrategia de respaldo para las aplicaciones              | RA          | C                 |
| Implementar y gestionar los respaldos de las aplicaciones             | RA          | I                 |
| Probar los procedimientos de recuperación después de un desastre para la plataforma    | I           | RA                |
| Probar los procedimientos de recuperación después de un desastre para las aplicaciones | RA          | C                 |

## Soporte y resolución de problemas

| Actividad                                                         | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Proporcionar soporte de nivel 1 para la plataforma OpenShift      | I           | RA                |
| Proporcionar soporte de nivel 2 y 3 para la plataforma OpenShift | I           | RA                |
| Resolver problemas relacionados con la plataforma                      | I           | RA                |
| Resolver problemas relacionados con las aplicaciones                     | RA          | C                 |

## Gestión de capacidades y evolución

| Actividad                                                | Rol Cliente | Rol Cloud Temple |
| -------------------------------------------------------- | ----------- | ----------------- |
| Supervisar el uso de los recursos de la plataforma       | I           | RA                |
| Planificar la evolución de las capacidades de la plataforma | C           | RA                |
| Implementar los cambios de capacidad                     | I           | RA                |
| Gestionar la evolución de las aplicaciones y sus recursos | RA          | C                 |

## Documentación y cumplimiento

| Actividad                                                      | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------- | ----------- | ----------------- |
| Mantener la documentación de la plataforma OpenShift         | I           | RA                |
| Mantener la documentación de las aplicaciones                | RA          | I                 |
| Garantizar el cumplimiento de la plataforma con los estándares de seguridad | I           | RA                |
| Garantizar el cumplimiento de las aplicaciones con los estándares de seguridad | RA          | C                 |
| Realizar auditorías de la plataforma                         | I           | RA                |
| Realizar auditorías de las aplicaciones                      | RA          | C                 |

### Gestión de los operadores OpenShift

Los **operadores OpenShift** son extensiones de la plataforma que automatizan la gestión de aplicaciones o servicios complejos en Kubernetes.

Únicamente los **operadores** provenientes de los catálogos **Certificados, Red Hat y MarketPlace** serán ofrecidos bajo la condición de que sean **conformes a los requisitos SecNumCloud** y que respeten las limitaciones del ecosistema.

La instalación, la supervisión y la gestión de las actualizaciones de estos operadores son gestionadas por **Cloud Temple**, mientras que el **Cliente** es responsable del uso de estos operadores para gestionar sus cargas de trabajo.

| Actividad                                                        | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ---------------- |
| Puesta a disposición de los operadores en el catálogo             | CI          | RA               |
| Configuración inicial de los Operadores a través de la Marketplace | CI          | RA               |
| Actualización de los Operadores                                  | I           | RA               |
| Supervisión del estado de los Operadores                         | I           | RA               |
| Resolución de problemas relacionados con los Operadores          | CI          | RA               |
| Gestión de los permisos de los Operadores                        | C           | RA               |
| Gestión de los recursos de los Operadores (adición/eliminación)  | CI          | RA               |
| Copia de seguridad de los datos de los recursos de los Operadores | CI          | RA               |
| Supervisión y monitorización de los recursos de los Operadores    | CI          | RA               |
| Restauración de los datos de los recursos de los Operadores      | CI          | RA               |
| Auditoría de seguridad de los Operadores                         | I           | RA               |
| Soporte de los Operadores Red Hat                                | I           | RA               |
| Soporte de los Operadores Certificados                           | I           | RA               |
| Soporte de los Operadores MarketPlace                            | I           | RA               |
| Gestión de las licencias y contratos de licencias en los operadores | RA          | I                |
| Gestión de los planes de soporte específicos en los operadores    | RA          | I                |

> **Nota importante** :
> Solo los operadores **declarados soportados** por Cloud Temple y conformes a **SecNumCloud** se pondrán a disposición. Cualquier operador no certificado o proveniente de una fuente externa no será soportado ni validado para ser utilizado en los entornos.
> La gestión de las **licencias** y los **planes de soporte específicos** en los operadores del catálogo **MarketPlace Red Hat** no son responsabilidad de **Cloud Temple**. La gestión del soporte de estos operadores se delega de facto al socio que proporciona el servicio.

### Aclaración sobre la asistencia aplicativa

**Asistencia aplicativa (servicio complementario) :**

La asistencia aplicativa relacionada con el desarrollo, la configuración, la gestión y el mantenimiento de las aplicaciones **no está bajo la responsabilidad de Cloud Temple**. El ámbito de actuación se centra únicamente en la gestión de la infraestructura OpenShift y los operadores. El **soporte de las cargas de trabajo** (aplicaciones desplegadas) y los pipelines CI/CD son responsabilidad del cliente o de cualquier prestador tercero designado para esta tarea.

| Actividad | Rol del Cliente | Rol de Cloud Temple |
| --- | --- | --- |
| Asistencia aplicativa (servicio complementario) | RA | C |