---
title: Matriz de responsabilidad PaaS
---

Aquí está el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de las plataformas PaaS de Cloud Temple.

## Definición de los diferentes roles

Recordamos aquí los diferentes roles del RACI:

| Rol           | Descripción                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| (R) Realiza   | __R__ealiza el proceso                                                               |
| (A) Aprueba   | __A__prueba la realización del proceso                                               |
| (C) Consulta  | __C__onsultado durante el proceso                                                    |
| (I) Informado | __I__nformado de los resultados del proceso (vía herramientas, portal o correo)      |


## Implementación inicial

| Actividad                                                         | Rol Cliente | Rol Cloud Temple |
| ----------------------------------------------------------------- | ----------- | ---------------- |
| Definir la arquitectura global de la plataforma OpenShift         | C           | RA               |
| Dimensionar la plataforma OpenShift (número de nodos, recursos)   | C           | RA               |
| Instalar y configurar la plataforma OpenShift                     | I           | RA               |
| Configurar la red básica de la plataforma OpenShift               | I           | RA               |
| Implementar la gestión de identidades y accesos para OpenShift    | C           | RA               |
| Definir la estrategia de escalamiento y alta disponibilidad       | C           | RA               |

## Gestión de proyectos y aplicaciones

| Actividad                                         | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------- | ----------- | ---------------- |
| Crear y gestionar los proyectos de OpenShift      | RA          | C                |
| Desplegar y gestionar las aplicaciones en OpenShift| RA         | C                |
| Configurar las pipelines CI/CD                    | RA          | C                |
| Gestionar las imágenes de contenedores y los registros| RA       | C                |

## Mantenimiento y actualizaciones

| Actividad                                        | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------ | ----------- | ---------------- |
| Actualizar la plataforma OpenShift               | I           | RA               |
| Aplicar los parches de seguridad a OpenShift     | I           | RA               |
| Actualizar las aplicaciones desplegadas          | RA          | I                |
| Gestionar las actualizaciones de las imágenes de contenedores| RA | I               |

## Supervisión y rendimiento

| Actividad                                              | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------ | ----------- | ---------------- |
| Supervisar el rendimiento de la plataforma OpenShift   | I           | RA               |
| Supervisar el rendimiento de las aplicaciones          | RA          | I                |
| Gestionar las alertas relacionadas con la plataforma   | I           | RA               |
| Gestionar las alertas relacionadas con las aplicaciones| RA          | I                |

## Seguridad

| Actividad                                                         | Rol Cliente | Rol Cloud Temple |
| ------------------------------------------------------------------| ----------- | ---------------- |
| Gestionar la seguridad de la plataforma OpenShift                 | I           | RA               |
| Configurar y gestionar las políticas de seguridad de los pods     | RA          | C                |
| Gestionar los certificados SSL/TLS para la plataforma             | I           | RA               |
| Gestionar los certificados SSL/TLS para las aplicaciones          | RA          | C                |
| Implementar y gestionar el control de acceso basado en roles (RBAC)| C         | RA               |

## Respaldo y recuperación ante desastres

| Actividad                                                        | Rol Cliente | Rol Cloud Temple |
| ---------------------------------------------------------------- | ----------- | ---------------- |
| Definir la estrategia de respaldo para la plataforma OpenShift   | C           | RA               |
| Implementar y gestionar los respaldos de la plataforma           | I           | RA               |
| Definir la estrategia de respaldo para las aplicaciones          | RA          | C                |
| Implementar y gestionar los respaldos de las aplicaciones        | RA          | I                |
| Probar los procedimientos de recuperación ante desastres para la plataforma| I | RA               |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones| RA | C              |

## Soporte y resolución de problemas

| Actividad                                                      | Rol Cliente | Rol Cloud Temple |
| -------------------------------------------------------------- | ----------- | ---------------- |
| Proporcionar soporte de nivel 1 para la plataforma OpenShift   | I           | RA               |
| Proporcionar soporte de nivel 2 y 3 para la plataforma OpenShift| I          | RA               |
| Resolver los problemas relacionados con la plataforma          | I           | RA               |
| Resolver los problemas relacionados con las aplicaciones       | RA          | C                |

## Gestión de capacidades y evolución

| Actividad                                           | Rol Cliente | Rol Cloud Temple |
| --------------------------------------------------- | ----------- | ---------------- |
| Supervisar el uso de los recursos de la plataforma  | I           | RA               |
| Planificar la evolución de las capacidades de la plataforma| C     | RA               |
| Implementar los cambios de capacidad                | I           | RA               |
| Gestionar la evolución de las aplicaciones y sus recursos| RA    | C                |

## Documentación y conformidad

| Actividad                                                 | Rol Cliente | Rol Cloud Temple |
| --------------------------------------------------------- | ----------- | ---------------- |
| Mantener la documentación de la plataforma OpenShift      | I           | RA               |
| Mantener la documentación de las aplicaciones             | RA          | I                |
| Asegurar la conformidad de la plataforma con las normas de seguridad| I | RA               |
| Asegurar la conformidad de las aplicaciones con las normas de seguridad| RA | C             |
| Realizar auditorías de la plataforma                      | I           | RA               |
| Realizar auditorías de las aplicaciones                   | RA          | C                |