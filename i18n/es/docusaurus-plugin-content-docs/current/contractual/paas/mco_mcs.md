---
title: MCO/MCS
---

**Operational Readiness Policy (MCO) and Security Readiness Policy (MCS) for the OpenShift SNC PaaS Cloud Temple**

## Preámbulo

Esta política detalla las responsabilidades y recomendaciones para el Mantenimiento en Condiciones Operativas (MCO) y el Mantenimiento en Condiciones de Seguridad (MCS) de sus entornos en el PaaS OpenShift SNC **Cloud Temple**.

## Mantenimiento en Condiciones Operativas (MCO)

### Gestión y actualización de los clusters

**Responsabilidad de Cloud Temple:**

- Gestión completa de la infraestructura subyacente, incluyendo los nodos maestros, las actualizaciones de versiones de OpenShift y la resiliencia de los servicios críticos desplegados por **Cloud Temple**.
- Actualizaciones menores/patches automáticas sin interrupciones para las cargas de trabajo alojadas, salvo notificación contraria.
- Limitación de permisos y funcionalidades según las restricciones de SecNumCloud.
- Comunicación de las actualizaciones próximas y de las actualizaciones de ruptura para los próximos tres meses a través de la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilidad del usuario:**

- Gestión de las cargas de trabajo desplegadas (aplicaciones, herramientas CI/CD) y sus configuraciones.
- Pruebas de las actualizaciones de carga de trabajo en un entorno de staging antes del despliegue en producción.
- Garantía de la compatibilidad de las cargas de trabajo con los componentes del cluster.

**Recomendación:**

- Planificar los despliegues aplicativos fuera de las ventanas de mantenimiento para evitar conflictos con las actualizaciones automáticas del cluster.
- Seguir las comunicaciones de **Cloud Temple** sobre actualizaciones importantes para planificar los ajustes necesarios.
- Seguir las actualizaciones próximas a través de la [**Roadmap producto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Suscribirse a las notificaciones [**de incidentes**](../../console/status.md#gestion-des-notifications)

### Supervisión y monitoreo

**Responsabilidad de Cloud Temple:**

- Supervisión y monitoreo de la infraestructura y servicios subyacentes desplegados por **Cloud Temple**.

**Responsabilidad del usuario:**

- Supervisión y monitoreo de sus cargas de trabajo.

**Recomendación:**

Utilizar las **herramientas nativas proporcionadas:**

- Análisis de registros de rendimiento y eventos a través de la consola de OpenShift.
- Configuración de alertas personalizadas a partir de las métricas del clúster y los pods mediante la interfaz de usuario.

Configurar umbrales críticos para las alertas:

- **CPU/Memoria** de los pods: ≥ 80 %.
- **Espacio en disco en volúmenes persistentes**: ≥ 85 %.
- **Fallos al iniciar los pods**: más de X ocurrencias en 10 minutos.

Automatizar la escalada de alertas hacia sus herramientas de gestión para una respuesta rápida.

### Copias de seguridad y restauración

Los componentes críticos del clúster se copian automáticamente mediante **Cloud Temple**. Las cargas de trabajo y los datos de los usuarios requieren una gestión específica.

**Responsabilidad de **Cloud Temple** :**

- Mecanismos de redundancia automática dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del clúster.

**Responsabilidad del usuario:**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten**, disponible en el catálogo **Cloud Temple**.

**Recomendación:**

- Implementar políticas de copia de seguridad periódicas:
  - Copias automáticas de los PV con Kasten.
  - Copia diaria de las configuraciones de Kubernetes, secrets y despliegues YAML.
- Probar regularmente las restauraciones para validar los RPO.

## Maintenance under Safety Conditions (MCS)

### Gestión de secretos y configuraciones

Uso de secretos de OpenShift/Kubernetes y recomendación de integrar sistemas centralizados de gestión de secretos.

**Responsabilidad de Cloud Temple:**

- La gestión de secretos y configuraciones de la infraestructura y servicios subyacentes a la oferta corresponde a **Cloud Temple**.

**Responsabilidad del usuario:**

- La gestión de secretos y configuraciones de las cargas de trabajo del **Cliente** corresponde al **Cliente**.

**Recomendación:**

- No almacenar secretos en texto plano en archivos YAML.
- Utilizar herramientas para cifrar la información sensible.

### Control de accesos (IAM)

La revisión de accesos se realiza a través de la Consola y del módulo "User Management" de la consola OpenShift.

Para obtener más detalles sobre esta funcionalidad, consulte nuestra [**guía**](../../console/iam/iam.md) y la [**documentación**](https://docs.redhat.com/en/documentation/openshift_container_platform/) del editor.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable de la gestión de las cuentas de servicio y de administración.
- **Cloud Temple** es responsable de la integración con el sistema de identidad **Cloud Temple** para gestionar los accesos.
- **Cloud Temple** es responsable de la configuración predeterminada de **RBAC** y de las restricciones de permisos para los usuarios iniciales.
- **Cloud Temple** es responsable de la provisión y mantenimiento del sistema de **autenticación dual** para reforzar los accesos.

**Responsabilidad del usuario:**

- El **Cliente** debe controlar periódicamente los accesos de sus usuarios.
- El **Cliente** es responsable de otorgar accesos a sus usuarios y de su incorporación (onboarding) en el tenant.
- El **Cliente** debe gestionar sus usuarios respetando las limitaciones impuestas por el sistema **Cloud Temple**.

### Gestión de vulnerabilidades

Las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta se comunicarán mediante el módulo de incidentes.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable de la comunicación de vulnerabilidades en la infraestructura y servicios subyacentes a la oferta desde su detección a través del módulo [**incidente**](../../console/status.md) de la Consola.
- **Cloud Temple** es responsable de la aplicación de parches en este ámbito.
- **Cloud Temple** es responsable de poner a disposición herramientas para analizar vulnerabilidades en imágenes Docker. Por defecto, **Cloud Temple** implementa **[Quay]** para realizar escaneos automáticos de imágenes Docker.

**Responsabilidad del usuario:**

- El **Cliente** es responsable de detectar y corregir vulnerabilidades en sus cargas de trabajo.
- El **Cliente** es responsable de actualizar sus cargas de trabajo para permitir la aplicación de parches de seguridad lo antes posible.

**Recomendación:**

- Utilizar la función de alertas del clúster proporcionada por **[Quay]** para analizar vulnerabilidades y detectar comportamientos anómalos en las imágenes utilizadas por el **Cliente**.
- Suscribirse a las notificaciones de [**incidentes**](../../console/status.md#gestion-de-las-notificaciones).

### Cifrado

Garantía de cifrado nativo en la infraestructura **Cloud Temple**, con recomendaciones para cargas de trabajo.

**Responsabilidad de **Cloud Temple**:

- Mecanismos de redundancia dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del clúster.

**Responsabilidad del usuario**:

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten**, disponible en el catálogo **Cloud Temple**.
- Asegurarse de que las cargas de trabajo utilicen mecanismos de resiliencia y adaptar los despliegues para implementarlos.

**Recomendación**:

- Activar el **cifrado TLS** para todas las comunicaciones intra-pod.
- Activar el **cifrado TLS** para todas las comunicaciones entre las ofertas PaaS e IaaS de **Cloud Temple**.
- Asegurar el cifrado de los datos en reposo mediante las soluciones de almacenamiento de **Cloud Temple**.

### Logging and Auditing

Automatic recording of critical cluster events.

**Responsibility **Cloud Temple** :**

- **Cloud Temple** is responsible for logging and auditing the infrastructure and underlying services supporting the offering.

**User Responsibility:**

- The **Customer** is responsible for logging and auditing their workloads.

**Recommendation:**

- Set up pipelines to centralize and analyze your workload logs:
  - Use log collectors for log aggregation, combined with a visualization tool.
  - Integrate logs with your **SIEM** (recommended).

## Gestión de incidentes y PCA (Plan de Continuidad de Actividad)

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable de los mecanismos de redundancia dentro de la infraestructura.
- **Cloud Temple** es responsable de las copias de seguridad automáticas de las configuraciones del clúster.
- **Cloud Temple** es responsable de la recuperación de la actividad tras un incidente en la infraestructura o en los servicios subyacentes a la oferta.

**Responsabilidad del usuario:**

- El **Cliente** es responsable de realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten**, disponible en el catálogo **Cloud Temple**.
- El **Cliente** debe asegurarse de que las cargas de trabajo utilicen los mecanismos de resiliencia y debe adaptar sus despliegues para implementarlos.
- El **Cliente** es responsable del PRA/PCA de sus cargas de trabajo.

**Procedimiento "Recuperación tras siniestro"**

- En caso de pérdida total de acceso a un clúster, el **Cliente** debe declarar un incidente ante el soporte **Cloud Temple** a través del módulo de soporte de la consola.  
Ver la [**procedimiento de solicitud de soporte técnico**](../../console/console_quickstart.md#acceso-al-soporte-técnico)

## Recomendaciones generales

1. **Planificar los recursos**: Asegurar una capacidad de clúster suficiente para las cargas de trabajo de pico.
2. **Validar las configuraciones**: Probar las aplicaciones en entornos de staging antes del despliegue en producción.
3. **Supervisar regularmente**: Utilizar las herramientas integradas para seguir el uso de los recursos y detectar problemas lo antes posible.
4. **Mantenerse informado**: Seguir la roadmap y las guías para evitar funcionalidades obsoletas.
5. **Contactar al soporte**: Para problemas no resueltos, contactar al soporte a través de la [**procedimiento de solicitud de soporte técnico**](../../console/console_quickstart.md#acceso-al-soporte-técnico) o por correo electrónico a la dirección [**contact**](mailto:contact@cloud-temple.com).

Para conocer en detalle las responsabilidades, por favor consulte nuestra [**matriz de responsabilidad**](../../contractual/paas/raci.md).