---
title: MCO/MCS
---

**Política de Mantenimiento en Condiciones Operativas (MCO) y de Mantenimiento en Condiciones de Seguridad (MCS) en el PaaS OpenShift SNC **Cloud Temple****

## Prólogo

Esta política detalla las responsabilidades y las recomendaciones para el Mantenimiento en Condiciones Operativas (MCO) y el Mantenimiento en Condiciones de Seguridad (MCS) de sus entornos en el PaaS OpenShift SNC **Cloud Temple**.

## 1. Mantenimiento en Condiciones Operativas (MCO)

### 1.1. Gestión y actualización de clusters

**Responsabilidad de Cloud Temple:**

- Gestión completa de la infraestructura subyacente, incluyendo los nodos maestros, las actualizaciones de versiones de OpenShift y la resiliencia de los servicios críticos desplegados por **Cloud Temple**.
- Actualizaciones menores/patches automáticas sin interrupción para las cargas de trabajo alojadas, salvo notificación contraria.
- Limitación de derechos y funcionalidades según las restricciones de SecNumCloud.
- Comunicación de las actualizaciones próximas y las actualizaciones de ruptura en los próximos tres meses a través de la [**Roadmap de Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilidad del usuario:**

- Gestión de las cargas de trabajo desplegadas (aplicaciones, herramientas CI/CD) y sus configuraciones.
- Pruebas de las actualizaciones de carga de trabajo en un entorno de staging antes del despliegue en producción.
- Garantía de la compatibilidad de las cargas de trabajo con los componentes del cluster.

**Recomendación:**

- Planificar los despliegues aplicativos fuera de las ventanas de mantenimiento para evitar conflictos con las actualizaciones automáticas del cluster.
- Seguir las comunicaciones de **Cloud Temple** sobre las actualizaciones principales para planificar los ajustes necesarios.
- Seguir las actualizaciones próximas a través de la [**Roadmap del producto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Suscribirse a las notificaciones [**de incidentes**](/console/status.md#gestion-de-notificaciones)

---

### 1.2. Supervisión y monitoreo

**Responsabilidad de Cloud Temple:**

- Supervisión y monitoreo de la infraestructura y los servicios subyacentes desplegados por **Cloud Temple**.

**Responsabilidad del usuario:**

- Supervisión y monitoreo de sus cargas de trabajo.

**Recomendación:**

Utilizar las **herramientas nativas proporcionadas:**

- Análisis de los registros de rendimiento y eventos a través de la consola de OpenShift.
- Configuración de alertas personalizadas a partir de las métricas del cluster y los pods a través de la interfaz de usuario.  
  
Configurar umbrales críticos de alerta:

- **CPU/Memoria** de los pods: ≥ 80 %.
- **Espacio en disco en los volúmenes persistentes**: ≥ 85 %.
- **Fracasos en el inicio de los pods**: más de X ocurrencias en 10 minutos.  
  
Automatizar la escalada de alertas hacia sus herramientas de gestión para una reacción rápida.  

---

### 1.3. Copias de seguridad y restauración

Los componentes críticos del clúster se realizan automáticamente por **Cloud Temple**. Las cargas de trabajo y los datos de los usuarios requieren una gestión dedicada.

**Responsabilidad de **Cloud Temple** :**

- Mecanismos de redundancia automática dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del clúster.

**Responsabilidad del usuario:**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.

**Recomendación:**

- Implementar políticas de copia de seguridad periódicas:
  - Copias de seguridad automáticas de los PV con Kasten.
  - Copia diaria de las configuraciones de Kubernetes, secretos y despliegues YAML.
- Probar regularmente las restauraciones para validar los RPO.

## 2. Mantenimiento en Condiciones de Seguridad (MCS)

### 2.1. Gestión de secretos y configuraciones

Uso de los secretos de OpenShift/Kubernetes y recomendación de integrar sistemas de gestión centralizada de secretos.

**Responsabilidad **Cloud Temple** :**

- La gestión de los secretos y la configuración de la infraestructura y los servicios subyacentes a la oferta es responsabilidad de **Cloud Temple**.

**Responsabilidad del usuario :**

- La gestión de los secretos y la configuración de las cargas de trabajo del **Cliente** es responsabilidad del **Cliente**.
  
**Recomendación :**

- No almacenar secretos en texto plano en los archivos YAML.
- Utilizar herramientas para cifrar la información sensible.

### 2.2. Control de accesos (IAM)

La revisión de accesos se realiza a través de la consola Shiva y del módulo "User Management" de la consola OpenShift.

Para más detalles sobre esta funcionalidad, consulte nuestro [**guía**](../../console/iam/iam.md) y la [**documentación**](https://docs.redhat.com/en/documentation/openshift_container_platform/) del editor.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable de la gestión de las cuentas de servicio y administración.
- **Cloud Temple** es responsable de la integración al sistema de identidad **Cloud Temple** para gestionar los accesos.
- **Cloud Temple** es responsable de la implementación por defecto de la configuración **RBAC** y las restricciones de derechos de los usuarios iniciales.
- **Cloud Temple** es responsable de la provisión del sistema de autenticación de doble factor y su mantenimiento para reforzar los accesos.
  
**Responsabilidad del usuario:**

- El **Cliente** debe controlar regularmente los accesos de sus usuarios.
- El **Cliente** es responsable de la concesión de accesos a sus usuarios y de su onboarding en el tenant.
- El **Cliente** debe gestionar a sus usuarios respetando las limitaciones impuestas por el sistema **Cloud Temple**.

### 2.3. Gestión de vulnerabilidades

Las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta se comunicarán en el módulo de incidentes.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable de la comunicación de las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta desde su detección a través del módulo [**incidentes**](/console/status.md) de la consola SHIVA.
- **Cloud Temple** es responsable de la aplicación de parches en este ámbito.
- **Cloud Temple** es responsable de poner a disposición herramientas para analizar las vulnerabilidades de las imágenes Docker. Por defecto, **Cloud Temple** implementa **[Quay]** para realizar el escaneo automático de las imágenes Docker.

**Responsabilidad del usuario:**

- El **Cliente** es responsable de detectar y corregir las vulnerabilidades en sus cargas de trabajo.
- El **Cliente** es responsable de actualizar sus cargas de trabajo para permitir la aplicación de los parches de seguridad lo más rápidamente posible.

**Recomendación:**

- Utilizar las alertas del cluster proporcionadas por **[Quay]** para analizar las vulnerabilidades y detectar comportamientos anómalos en las imágenes utilizadas por el **Cliente**.
- Suscribirse a las notificaciones de [**incidentes**](/console/status.md#gestion-de-notificaciones).

### 2.4. Cifrado

Garantía de un cifrado nativo en la infraestructura **Cloud Temple**, con recomendaciones para las cargas de trabajo.

**Responsabilidad de **Cloud Temple** :**

- Mecanismos de redundancia dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del cluster.

**Responsabilidad del usuario:**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- Asegurarse de que las cargas de trabajo utilicen los mecanismos de resiliencia y adaptar los despliegues para implementarlos.

**Recomendación:**

- Activar el **cifrado TLS** para todas las comunicaciones intra-pod.
- Activar el **cifrado TLS** para todas las comunicaciones entre las Ofertas PaaS e IaaS **Cloud Temple**.
- Asegurar el cifrado de los datos en reposo mediante las soluciones de almacenamiento **Cloud Temple**.

### 2.5. Registro y auditoría

Registro automático de los eventos críticos del clúster.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable del registro y auditoría de la infraestructura y servicios subyacentes de la oferta.

**Responsabilidad del usuario:**

- El **Cliente** es responsable del registro y auditoría de sus cargas de trabajo.
  
**Recomendación:**

- Configurar pipelines para centralizar y analizar los logs de sus cargas de trabajo:
  - Usar colectores, para la agregación de logs, con una herramienta de visualización.
  - Integrar los logs en su **SIEM** (recomendado).

## 3. Gestión de incidentes y PCA (Plan de Continuidad de Actividades)

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable de los mecanismos de redundancia dentro de la infraestructura.
- **Cloud Temple** es responsable de las copias de seguridad automáticas de las configuraciones del cluster.
- **Cloud Temple** es responsable de la reanudación de la actividad tras un incidente en la infraestructura o en los servicios subyacentes a la oferta.

**Responsabilidad del usuario:**

- El **Cliente** es responsable de realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- El **Cliente** debe asegurarse de que las cargas de trabajo utilicen los mecanismos de resiliencia y adaptar sus despliegues para implementarlos.
- El **Cliente** es responsable del PRA/PCA de sus cargas de trabajo.

**Procedimiento "Reanudación tras un siniestro"**

- En caso de pérdida completa de acceso a un cluster, el **Cliente** debe declarar un incidente ante el soporte **Cloud Temple** a través del módulo de soporte de la consola.
Ver el [**procedimiento de solicitud de soporte técnico**](/console/console_quickstart.md#accès-au-support-technique)

## Recomendaciones generales

1. **Planificar los recursos**: Asegurar una capacidad de cluster suficiente para las cargas de trabajo pico.
2. **Validar las configuraciones**: Probar las aplicaciones en entornos de staging antes del despliegue en producción.
3. **Supervisar regularmente**: Utilizar las herramientas integradas para seguir el uso de los recursos y detectar problemas lo antes posible.
4. **Mantenerse informado**: Seguir la roadmap y las guías para evitar funciones obsoletas.
5. **Contactar al soporte**: Para problemas no resueltos, contactar al soporte a través del [**procedimiento de solicitud de soporte técnico**](/console/console_quickstart.md#acceso-al-soporte-técnico) o por correo electrónico a la dirección [**contacto**](mailto:contacto@cloud-temple.com).

Para conocer en detalle las responsabilidades, por favor consulte nuestra [**matriz de responsabilidad**](/contractual/paas/raci.md).