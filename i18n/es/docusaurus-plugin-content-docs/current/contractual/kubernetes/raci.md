---
title: Matriz de Responsabilidades (RACI) - Kubernetes Gestionado
displayed_sidebar: docSidebar
---

## RACI

### Arquitectura e Infraestructura

| **Actividad**                                                        | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------------------- | ---------- | ---------------- |
| Definir la arquitectura global del servicio Kubernetes                | C          | RA               |
| Dimensionar el servicio Kubernetes (número de nodos, recursos)   | C          | RA               |
| Instalar el servicio Kubernetes con una configuración predeterminada   | I          | RA               |
| Configuración del servicio Kubernetes                                 | C          | RA               |
| Configurar la red base del servicio Kubernetes                  | I          | RA               |
| Despliegue de la configuración inicial de identidades y accesos | C          | RA               |
| Definir la estrategia de escalado y alta disponibilidad  | C          | RA               |

### Gestión de proyectos y aplicaciones empresariales

| **Actividad**                                       | **Cliente** | **Cloud Temple** |
| -------------------------------------------------- | ----------- | ---------------- |
| Crear y gestionar proyectos de Kubernetes          | RA          | I*               |
| Implementar y gestionar aplicaciones en Kubernetes  | RA          | I*               |
| Configurar pipelines CI/CD                         | RA          | I*               |
| Gestionar imágenes de contenedores y registros      | RA          | I*               |

*Estas responsabilidades pueden delegarse en Cloud Temple mediante un contrato de gestión complementario.

### Supervisión y rendimiento

| **Actividad**                                   | **Cliente** | **Cloud Temple** |
| ----------------------------------------------- | ----------- | ---------------- |
| Supervisar el rendimiento del servicio Kubernetes | I          | RA               |
| Supervisar el rendimiento de las aplicaciones   | RA         |                  |
| Gestionar las alertas relacionadas con el servicio Kubernetes | I          | RA               |
| Gestionar las alertas relacionadas con las aplicaciones | RA         |                  |

### Mantenimiento y actualizaciones de infraestructuras

| **Actividad**                                          | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Actualizar el servicio Kubernetes/OS                   | C          | RA               |
| Aplicar parches de seguridad a Kubernetes              | C          | RA               |
| Actualizar las aplicaciones desplegadas (operadores*)  | C          | RA               |

*Paquete de operador incluido en Managed Kube - ver capítulos: Paquetes Helm gestionados

### Seguridad

| **Actividad**                                                               | **Cliente** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ----------- | ---------------- |
| Gestionar la seguridad del servicio Kubernetes                              | RA          | RA               |
| Configurar y gestionar las políticas de seguridad de los pods               | RA          | I*               |
| Gestionar los certificados SSL/TLS para el servicio Kubernetes              | C           | RA               |
| Gestionar los certificados SSL/TLS para las aplicaciones                    | RA          | I*               |
| Implementar y gestionar el control de acceso basado en roles básicos (RBAC) | C           | R                |
| Implementar y gestionar el control de acceso basado en roles del cliente (RBAC) | RA      | I*               |

*Estas responsabilidades pueden delegarse en Cloud Temple mediante un contrato de gestión complementario.

### Copia de seguridad y recuperación ante desastres

| **Actividad**                                                               | **Cliente** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Definir la estrategia de copia de seguridad para el servicio de Kubernetes              | I          | RA               |
| Implementar y gestionar las copias de seguridad del servicio de Kubernetes            | I          | RA               |
| Definir la estrategia de copia de seguridad para las aplicaciones                   | RA*        | I*               |
| Implementar y gestionar las copias de seguridad de las aplicaciones                 | RA*        | I*               |
| Probar los procedimientos de recuperación ante desastres para el servicio de Kubernetes | CI         | RA               |
| Probar los procedimientos de recuperación ante desastres para las aplicaciones      | RA*        | CI*              |

*Estas responsabilidades pueden delegarse a Cloud Temple mediante un contrato de gestión externalizada complementario.

### Soporte y resolución de problemas

| **Actividad**                                              | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ----------- | ---------------- |
| Proporcionar soporte de nivel 1 para la infraestructura   | I           | RA               |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura | I          | RA               |
| Resolver problemas relacionados con el servicio de Kubernetes | C          | RA               |
| Resolver problemas relacionados con las aplicaciones      | RA          | I                |

### Gestión de capacidades y evolución

| **Actividad**                                           | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Supervisar el uso de recursos de Kubernetes            | C          | RA               |
| Planificar la evolución de la capacidad del servicio   | RA         | C                |
| Implementar los cambios de capacidad                   | I          | RA               |
| Gestionar la evolución de las aplicaciones y sus recursos | RA      | I                |

### Documentación y cumplimiento

| **Actividad**                                     | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ----------- | ---------------- |
| Mantener la documentación del servicio de Kubernetes | I          | RA               |
| Mantener la documentación de las aplicaciones      | RA         | I                |
| Garantizar el cumplimiento del servicio de Kubernetes      | I          | RA               |
| Garantizar el cumplimiento de las aplicaciones           | RA         | I                |
| Realizar auditorías del servicio de Kubernetes        | I          | RA               |
| Realizar auditorías de las aplicaciones             | RA         | I                |

### Gestión de operadores/CRD de Kubernetes básicos

| **Actividad**                                               | **Cliente** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Puesta a disposición del catálogo de Operadores predeterminado | CI         | RA               |
| Actualización de Operadores                                 | CI         | RA               |
| Supervisión del estado de los Operadores                    | CI         | RA               |
| Resolución de problemas relacionados con Operadores       | CI         | RA               |
| Gestión de permisos de Operadores                           | CI         | RA               |
| Gestión de recursos de Operadores (adición/eliminación)     | CI         | RA               |
| Copia de seguridad de los datos de los recursos de Operadores | CI         | RA               |
| Supervisión de recursos de Operadores                       | CI         | RA               |
| Restauración de los datos de los recursos de Operadores     | CI         | RA               |
| Auditoría de seguridad de Operadores                        | CI         | RA               |
| Soporte de Operadores                                       | CI         | RA               |
| Gestión de licencias de operadores                          | CI         | RA               |
| Gestión de planes de soporte específicos para operadores    | CI         | RA               |

*Paquete de operador incluido en Managed Kube - ver capítulos: Paquetes Helm gestionados

### Gestión de aplicaciones/operadores/CRD de Kubernetes (negocio)

| **Actividad**                                               | **Cliente** | **Cloud Temple** |
| ----------------------------------------------------------- | ----------- | ---------------- |
| Despliegue de CRDs                                          | RA*         | I*               |
| Actualización de Operadores                                 | RA          | I                |
| Supervisión del estado de los Operadores                    | RA          | I                |
| Resolución de problemas relacionados con Operadores         | RA          | I                |
| Gestión de permisos de Operadores                           | RA          | I                |
| Gestión de recursos de Operadores (adición/eliminación)     | RA          | I                |
| Copia de seguridad de datos de recursos de Operadores       | RA          | I                |
| Supervisión de recursos de Operadores                       | RA          | I                |
| Restauración de datos de recursos de Operadores             | RA          | I                |
| Auditoría de seguridad de Operadores                        | RA          | I                |
| Soporte de Operadores                                       | RA          | I                |
| Gestión de licencias en operadores                          | RA          | I                |
| Gestión de planes de soporte específicos para operadores    | RA          | I                |

*Estas responsabilidades pueden delegarse a Cloud Temple mediante un contrato de gestión complementario.

### Soporte de aplicaciones

| **Actividad**                                | **Cliente** | **Cloud Temple** |
| ------------------------------------------- | ----------- | ---------------- |
| Soporte de aplicaciones (servicio externo)  | RA          | I                |

El soporte de aplicaciones también puede proporcionarse en el marco de un servicio complementario.

### RACI (sintético)

- Cloud Temple : responsable y actor (RA) de la plataforma Kubernetes, seguridad del clúster, copia de seguridad de la infraestructura, supervisión.
- Cliente : responsable y actor (RA) de los proyectos de aplicaciones, operadores de negocio, pipelines CI/CD, copias de seguridad de aplicaciones.
- Zona "gris" : adaptaciones y extensiones (IAM, operadores específicos, endurecimiento del cumplimiento/seguridad del clúster) - facturadas en modo proyecto.