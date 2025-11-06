---
title: Matriz de Responsabilidades (RACI) - Kubernetes Administrado
---

## RACI

### Architecture & Infrastructure

| **Activity**                                                        | **Client** | **Cloud Temple** |
| ------------------------------------------------------------------- | ---------- | ---------------- |
| Define the overall architecture of the Kubernetes service           | C          | RA               |
| Size the Kubernetes service (number of nodes, resources)           | C          | RA               |
| Install the Kubernetes service with default configuration           | I          | RA               |
| Configure the Kubernetes service                                    | C          | RA               |
| Set up the base network for the Kubernetes service                  | I          | RA               |
| Deploy initial configuration for identities and access              | C          | RA               |
| Define scaling and high availability strategy                       | C          | RA               |

### Gestión de proyectos y aplicaciones empresariales

| **Actividad**                                       | **Cliente** | **Cloud Temple** |
| -------------------------------------------------- | ---------- | ---------------- |
| Crear y gestionar los proyectos Kubernetes         | RA         | I*               |
| Desplegar y gestionar las aplicaciones en Kubernetes | RA         | I*               |
| Configurar las pipelines CI/CD                      | RA         | I*               |
| Gestionar las imágenes de contenedores y los registros | RA         | I*               |

*Estas responsabilidades pueden ser delegadas a Cloud Temple mediante un contrato de gestión complementario.

### Monitoreo y rendimiento

| **Actividad**                                    | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ----------- | ---------------- |
| Monitorear el rendimiento del servicio Kubernetes | I           | RA               |
| Monitorear el rendimiento de las aplicaciones    | RA          |                  |
| Gestionar las alertas relacionadas con el servicio Kubernetes | I | RA               |
| Gestionar las alertas relacionadas con las aplicaciones | RA |                  |

### Maintenance and Infrastructure Updates

| **Activity**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------ | ---------- | ---------------- |
| Update Kubernetes/OS service                           | C          | RA               |
| Apply security patches to Kubernetes                   | C          | RA               |
| Update deployed applications (operators*)              | C          | RA               |

*Operator package included in Managed Kube - see sections: Managed Helm Packages

### Security

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Manage security for the Kubernetes service                                 | RA         | RA               |
| Configure and manage pod security policies                                   | RA         | I*               |
| Manage SSL/TLS certificates for the Kubernetes service                     | C          | RA               |
| Manage SSL/TLS certificates for applications                                 | RA         | I*               |
| Implement and manage Role-Based Access Control (RBAC) for base roles        | C          | R                |
| Implement and manage Role-Based Access Control (RBAC) for client roles     | RA         | I*               |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.

### Backup and Disaster Recovery

| **Activity**                                                               | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------- | ---------- | ---------------- |
| Define the backup strategy for the Kubernetes service                      | I          | RA               |
| Implement and manage backups for the Kubernetes service                    | I          | RA               |
| Define the backup strategy for applications                                | RA*        | I*               |
| Implement and manage backups for applications                              | RA*        | I*               |
| Test disaster recovery procedures for the Kubernetes service              | CI         | RA               |
| Test disaster recovery procedures for applications                         | RA*        | CI*              |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.

### Soporte y resolución de problemas

| **Actividad**                                              | **Cliente** | **Cloud Temple** |
| --------------------------------------------------------- | ---------- | ---------------- |
| Proporcionar soporte de nivel 1 para la infraestructura   | I          | RA               |
| Proporcionar soporte de nivel 2 y 3 para la infraestructura | I          | RA               |
| Resolver problemas relacionados con el servicio Kubernetes | C          | RA               |
| Resolver problemas relacionados con las aplicaciones      | RA         | I                |

### Gestión de capacidades y evolución

| **Actividad**                                          | **Cliente** | **Cloud Temple** |
| ------------------------------------------------------ | ----------- | ---------------- |
| Supervisar el uso de los recursos de Kubernetes        | C           | RA               |
| Planificar la evolución de las capacidades del servicio | RA          | C                |
| Implementar los cambios de capacidad                   | I           | RA               |
| Gestionar la evolución de las aplicaciones y sus recursos | RA          | I                |

### Documentación y cumplimiento

| **Actividad**                                     | **Cliente** | **Cloud Temple** |
| ------------------------------------------------ | ----------- | ---------------- |
| Mantener la documentación del servicio Kubernetes | I           | RA               |
| Mantener la documentación de las aplicaciones     | RA          | I                |
| Asegurar el cumplimiento del servicio Kubernetes  | I           | RA               |
| Asegurar el cumplimiento de las aplicaciones      | RA          | I                |
| Realizar auditorías del servicio Kubernetes       | I           | RA               |
| Realizar auditorías de las aplicaciones           | RA          | I                |

### Basic Kubernetes Operators/CRD Management

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Provisioning of default Operators catalog                   | CI         | RA               |
| Updating Operators                                          | CI         | RA               |
| Monitoring Operators status                                 | CI         | RA               |
| Troubleshooting Operator-related issues                     | CI         | RA               |
| Managing Operator permissions                               | CI         | RA               |
| Managing Operator resources (addition/removal)              | CI         | RA               |
| Backup of Operator resources data                           | CI         | RA               |
| Monitoring Operator resources                               | CI         | RA               |
| Restoration of Operator resources data                      | CI         | RA               |
| Security auditing of Operators                              | CI         | RA               |
| Operator support                                            | CI         | RA               |
| License management for operators                            | CI         | RA               |
| Management of specific support plans for operators          | CI         | RA               |

*Operator package included in Managed Kube – see sections: Managed Helm Packages*

### Management of Kubernetes applications/operators/CRDs (business)

| **Activity**                                                | **Client** | **Cloud Temple** |
| ----------------------------------------------------------- | ---------- | ---------------- |
| Deployment of CRDs                                          | RA*        | I*               |
| Updating operators                                          | RA         | I                |
| Monitoring operator status                                  | RA         | I                |
| Troubleshooting operator-related issues                     | RA         | I                |
| Managing operator permissions                               | RA         | I                |
| Managing operator resources (addition/removal)              | RA         | I                |
| Backing up operator resource data                           | RA         | I                |
| Monitoring operator resources                               | RA         | I                |
| Restoring operator resource data                            | RA         | I                |
| Security auditing of operators                              | RA         | I                |
| Operator support                                            | RA         | I                |
| License management for operators                            | RA         | I                |
| Management of specific support plans for operators          | RA         | I                |

*These responsibilities may be delegated to Cloud Temple via a complementary managed services contract.

### Aplicación de soporte

| **Actividad**                                | **Cliente** | **Cloud Temple** |
| ------------------------------------------- | ---------- | ---------------- |
| Soporte aplicativo (prestación externa)     | RA         | I                |

El soporte aplicativo también puede proporcionarse dentro de una prestación complementaria.

### RACI (sintético)

- Cloud Temple: responsable y actor (RA) del núcleo Kubernetes, seguridad del clúster, copias de seguridad de infraestructura y supervisión.
- Cliente: responsable y actor (RA) de los proyectos aplicativos, operadores comerciales, pipelines CI/CD y copias de seguridad aplicativas.
- Zona "gris": adaptaciones y extensiones (IAM, operadores específicos, fortalecimiento de conformidad/seguuridad del clúster) – facturadas en modalidad proyecto.