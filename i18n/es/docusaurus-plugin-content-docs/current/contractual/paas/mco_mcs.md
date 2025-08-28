---
Política de Mantenimiento en Condiciones Operativas (MCO) y Mantenimiento en Condiciones de Seguridad (MCS) sobre el PaaS OpenShift SNC en Cloud Temple****

---

## Introducción

Esta política describe las responsabilidades y recomendaciones para el Mantenimiento en Condiciones Operativas (MCO) y el Mantenimiento en Condiciones de Seguridad (MCS) de sus entornos en Plataforma como Servicio (PaaS) OpenShift SNC **Templo del Cloud**.

---

## Mantenimiento en Condiciones Operativas (MCO)

### Gestión y actualización de clusters

**Responsabilidad de Cloud Temple:**

- Gerenciamiento completo de la infraestructura subyacente, incluyendo núcleos maestros, actualizaciones de versiones OpenShift y resiliencia de servicios críticos desplegados por Cloud Temple.
- Actualizaciones menores/parches automáticos sin interrupción para las cargas de trabajo alojadas, a menos que se notifique lo contrario.
- Limitación de los derechos y funcionalidades a las restricciones SecNumCloud.
- Comunicación de actualizaciones futuras e fragmentos de fractura en los próximos tres meses a través del [**Planificador de Actualizaciones Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilidad del usuario:**

- Gestión de las cargas de trabajo desplegadas (aplicaciones, herramientas CI/CD) y sus configuraciones.
- Pruebas de actualizaciones de carga de trabajo en un entorno de prueba antes del despliegue en producción.
- Asegurar la compatibilidad de las cargas de trabajo con los componentes del cluster.

**Recomendación:**

- Planificar los despliegues aplicativos fuera de las horas de mantenimiento para evitar conflictos con actualizaciones automáticas del cluster.
- Seguir las comunicaciones **Cloud Temple** sobre actualizaciones mayores para planificar los ajustes necesarios.
- Seguir las actualizaciones futuras a través del [**Planificador de Actualizaciones del Producto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Suscribirse a las notificaciones [**de incidentes**](../../console/status.md#gestion-de-las-notificaciones)

### Supervisión y monitoreo

**Responsabilidad de Cloud Temple:**

- Supervisión y monitoreo de la infraestructura y servicios subyacentes desplegados por Cloud Temple.

**Responsabilidad del usuario:**

- Supervisión y monitoreo de sus cargas de trabajo.

**Recomendación:**

Utilizar los **herramientas nativas proporcionadas:**

- Análisis de registros de rendimiento y eventos a través de la consola OpenShift.
- Configuración de alertas personalizadas basadas en métricas del cluster y pods a través de la interfaz de usuario.  

Configurar niveles críticos de alerta:

- **CPU/Memoria de los pods:** ≥ 80 %.
- **Espacio en volúmenes persistentes:** ≥ 85 %.
- **Fallas al arrancar los pods:** más de X ocasiones en 10 minutos.  

Automatizar la escalada de alertas hacia sus herramientas de gestión para una respuesta rápida.  

---

### Backups and Recovery

The critical components of the cluster are automatically backed up by **Cloud Temple**. Workloads and user data require dedicated management.

**Responsibility of Cloud Temple:**

- Automatic redundancy mechanisms within the infrastructure.
- Automated backups of cluster configurations.

**User Responsibility:**

- Save critical workload data using solutions such as the **Kasten** offering available in the **Cloud Temple** catalog.

**Recommendation:**

- Establish regular backup policies:
  - Automatic backups of PVs with Kasten.
  - Daily backups of Kubernetes configurations, secrets, and YAML deployment files.
- Regularly test restores to validate RPO (Recovery Point Objective).

## Mantenimiento de Condiciones de Seguridad (MCS)

### Gestión de secretos y configuraciones

Uso de secretos OpenShift/Kubernetes y recomendación de integrar sistemas de gestión centralizada de secretos.

**Responsabilidad de Cloud Temple:**

- La gestión de secretos e la configuración de la infraestructura y los servicios subyacentes del servicio es responsabilidad de **Cloud Temple**.

**Responsabilidad del usuario:**

- La gestión de secretos y la configuración de las cargas de trabajo del **Usuario** es responsabilidad del **Usuario**.

**Recomendación:**

- No almacenar secretos en texto claro en los archivos YAML.
- Utilizar herramientas para cifrar las información sensibles.

### Control de acceso (IAM)

La revisión de los permisos se realiza a través de la consola Shiva y del módulo "Gestión de usuarios" de la consola OpenShift.

Para obtener más información sobre esta función, consulte nuestro [guía](https://console.openshift.io/iam/iam) y la [documentación](https://docs.redhat.com/en/documentation/openshift_container_platform/) del editor.

**Responsabilidad **Cloud Temple**:

- **Cloud Temple** es responsable de la gestión de los cuentas de servicio y administración.
- **Cloud Temple** es responsable de la integración con el sistema de identidad **Cloud Temple** para gestionar los permisos.
- **Cloud Temple** es responsable de la configuración por defecto de RBAC (Control de Acceso basado en Roles) y las restricciones de derechos de los usuarios iniciales.
- **Cloud Temple** es responsable del suministro del sistema de autenticación de dos factores y su mantenimiento para fortalecer los acceso.

**Responsabilidad del usuario**:

- El **Cliente** debe revisar regularmente los permisos de sus usuarios.
- El **Cliente** es responsable del otorgamiento de permisos a sus usuarios y su onboarding en el teniente.
- El **Cliente** debe gestionar a sus usuarios en cumplimiento de las limitaciones impuestas por el sistema **Cloud Temple**.

### Gestión de vulnerabilidades

Las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta serán comunicadas en el módulo incidente.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable de la comunicación de las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta tan pronto como se detecten mediante el módulo [**incidente**](../../console/status.md) de la consola SHIVA.
- **Cloud Temple** es responsable de aplicar los parches en este ámbito.
- **Cloud Temple** es responsable de proporcionar herramientas para analizar las vulnerabilidades de las imágenes Docker. De forma predeterminada, **Cloud Temple** instala **[Quay]** para realizar el escaneo automático de las imágenes Docker.

**Responsabilidad del usuario:**

- El **Cliente** es responsable de la detección y corrección de las vulnerabilidades en sus cargas de trabajo.
- El **Cliente** es responsable de actualizar sus cargas de trabajo para permitir la aplicación rápida de los parches de seguridad.

**Recomendación:**

- Utilice el alerting del cluster proporcionado por **[Quay]** para analizar las vulnerabilidades y detectar comportamientos anormales en las imágenes utilizadas por el **Cliente**.
- Suscribirse a las notificaciones de [**incidentes**](../../console/status.md#gestión-de-notificaciones).

### Encriptación

Garantizar un encriptado nativo en la infraestructura **Templo del Cloud**, junto con recomendaciones para las cargas de trabajo.

**Responsabilidad de Cloud Temple:**

- Mecanismos de redundancia dentro de la infraestructura.
- Sistemas de respaldo automáticos de las configuraciones de cluster.

**Responsabilidad del usuario:**

- Guardar los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Templo del Cloud**.
- Asegurarse de que las cargas de trabajo utilicen mecanismos de resiliencia y adaptar los despliegues para implementarlos.

**Recomendación:**

- Activar el **cifrado TLS** para todas las comunicaciones intra-pod.
- Activar el **cifrado TLS** para todas las comunicaciones entre las ofertas PaaS e IaaS **Templo del Cloud**.
- Asegurar el encriptado de los datos en reposo mediante las soluciones de almacenamiento **Templo del Cloud**.

### Registro y auditoría

Registros automáticos de eventos críticos del cluster.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable del registro y auditoría de la infraestructura y los servicios subyacentes de la oferta.

**Responsabilidad del usuario:**

- El **Cliente** es responsable del registro y auditoría de sus cargas de trabajo.

**Recomendación:**

- Configure pipelines para centralizar y analizar los registros de sus cargas de trabajo:
  - Utilice colectores para la agregación de logs, con un herramienta de visualización.
  - Intégrese los logs a su **SIEM** (recomendado).

---

## Incident Management and Business Continuity Plan (PCA)

### Cloud Temple Responsibilities:

- **Cloud Temple** is responsible for redundancy mechanisms within the infrastructure.
- **Cloud Temple** manages automated backups of cluster configurations.
- **Cloud Temple** ensures business continuity following incidents affecting the infrastructure or underlying services offered.

### User Responsibilities:

- The **Client** is responsible for backing up critical workload data using solutions like the **Kasten** offering available in the Cloud Temple catalog.
- The **Client** must ensure workloads utilize resilience mechanisms and adapt deployments accordingly.
- The **Client** is solely accountable for the PRA/PCA of their workloads.

### Incident Recovery Procedure

- In case of complete loss of access to a cluster, the **Client** must report an incident to Cloud Temple's technical support via the support module in the console.
  - Refer to the [**technical support request procedure**](../../console/console_quickstart.md#accessing-technical-support) for details.

## Recomendaciones generales


1. **Planificar recursos**: Asegurar una capacidad de cluster suficiente para las cargas de trabajo de punta.
2. **Validar configuraciones**: Probar las aplicaciones en entornos de prueba antes del despliegue en producción.
3. **Monitorear regularmente**: Utilizar los herramientas integradas para seguir el uso de recursos y detectar problemas lo antes posible.
4. **Mantenerse informado**: Seguir la ruta de desarrollo y las guías para evitar funcionalidades obsoletas.
5. **Contactar soporte**: Para los problemas no resueltos, póngase en contacto con el soporte a través de la [**procedimiento de solicitud de soporte técnico**](../../console/console_quickstart.md#acceso-al-soporte-técnico) o al correo electrónico contact@cloud-temple.com.

Para conocer las responsabilidades en detalle, por favor revise la nuestra [**matriz de responsabilidad**](../../contractual/paas/raci.md).