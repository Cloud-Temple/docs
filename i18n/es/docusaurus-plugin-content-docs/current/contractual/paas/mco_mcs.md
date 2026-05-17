---
title: MCO/MCS PaaS OpenShift
slug: /contractual/paas/mco-mcs
displayed_sidebar: docSidebar
---


**Política de Mantenimiento en Condiciones Operacionales (MCO) y de Mantenimiento en Condiciones de Seguridad (MCS) en el PaaS OpenShift de SNC **Cloud Temple****

## Preámbulo

Esta política detalla las responsabilidades y recomendaciones para el Mantenimiento en Condiciones Operativas (MCO) y el Mantenimiento en Condiciones de Seguridad (MCS) de sus entornos en el PaaS OpenShift SNC **Cloud Temple**.

---

## Mantenimiento en Condiciones Operativas (MCO)

### Gestión y actualización de los clústeres

**Responsabilidad de **Cloud Temple** :**

- Gestión completa de la infraestructura subyacente, incluidos los nodos maestros, las actualizaciones de versiones de OpenShift y la resiliencia de los servicios críticos implementados por **Cloud Temple**.
- Actualizaciones menores/patches automáticas sin interrupción para las cargas de trabajo alojadas, salvo notificación en contrario.
- Limitación de los derechos y las funcionalidades a las restricciones SecNumCloud.
- Comunicación de las actualizaciones próximas y de las actualizaciones de ruptura en los próximos tres meses a través de la [**Hoja de ruta Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilidad del usuario:**

- Gestión de las cargas de trabajo implementadas (aplicaciones, herramientas CI/CD) y sus configuraciones.
- Pruebas de las actualizaciones de carga de trabajo en un entorno de staging antes de su implementación en producción.
- Garantía de la compatibilidad de las cargas de trabajo con los componentes del clúster.

**Recomendación:**

- Planificar los despliegues de aplicaciones fuera de las ventanas de mantenimiento para evitar conflictos con las actualizaciones automáticas del clúster.
- Seguir las comunicaciones de **Cloud Temple** sobre las actualizaciones mayores para planificar los ajustes necesarios.
- Seguir las actualizaciones próximas a través de la [**Hoja de ruta del producto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Suscribirse a las notificaciones [**de incidentes**](../../console/status.md#gestion-des-notifications)

---

### Supervisión y monitorización

**Responsabilidad de **Cloud Temple** :**

- Supervisión y monitorización de la infraestructura y los servicios subyacentes implementados por **Cloud Temple**.

**Responsabilidad del usuario :**

- Supervisión y monitorización de sus cargas de trabajo.

**Recomendación :**

Utilizar las **herramientas nativas proporcionadas :**

- Análisis de los logs de rendimiento y de los eventos a través de la consola de OpenShift.
- Configuración de alertas personalizadas a partir de las métricas del clúster y de los pods mediante la interfaz de usuario.
  
Configurar umbrales críticos de alerta :

- **CPU/Memoria** de los pods : ≥ 80 %.
- **Espacio en disco en los volúmenes persistentes** : ≥ 85 %.
- **Fallos en el inicio de los pods** : más de X ocurrencias en 10 minutos.
  
Automatizar la escalada de alertas hacia sus herramientas de gestión para una respuesta rápida.  

---

### Copias de seguridad y restauración

Los componentes críticos del clúster se respaldan automáticamente por **Cloud Temple**. Las cargas de trabajo y los datos de los usuarios requieren una gestión dedicada.

**Responsabilidad de **Cloud Temple** :**

- Mecanismos de redundancia automática dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del clúster.

**Responsabilidad del usuario :**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.

**Recomendación :**

- Establecer políticas de copia de seguridad periódicas :
  - Copias de seguridad automáticas de los PV con Kasten.
  - Copia de seguridad diaria de las configuraciones de Kubernetes, secretos y despliegues YAML.
- Probar regularmente las restauraciones para validar los RPO.

---

## Mantenimiento en Condiciones de Seguridad (MCS)

### Gestión de secretos y configuraciones

Uso de secretos de OpenShift/Kubernetes y recomendación de integrar sistemas de gestión centralizada de secretos.

**Responsabilidad **Cloud Temple** :**

- La gestión de secretos y de la configuración de la infraestructura y los servicios subyacentes a la oferta es responsabilidad de **Cloud Temple**.

**Responsabilidad del usuario :**

- La gestión de secretos y de la configuración de las cargas de trabajo del **Cliente** es responsabilidad del **Cliente**.
  
**Recomendación :**

- No almacenar secretos en texto plano en los archivos YAML.
- Utilizar herramientas para cifrar la información sensible.

### Control de accesos (IAM)

La revisión de accesos se realiza a través de la Consola y del módulo "User Management" de la consola OpenShift.

Para más detalles sobre esta funcionalidad, consulte nuestra [**guía**](../../console/iam/iam.md) y la [**documentación**](https://docs.redhat.com/en/documentation/openshift_container_platform/) del editor.

**Responsabilidad **Cloud Temple** :**

- **Cloud Temple** es responsable de la gestión de las cuentas de servicio y de administración.
- **Cloud Temple** es responsable de la integración con el sistema de identidad **Cloud Temple** para gestionar los accesos.
- **Cloud Temple** es responsable de la configuración por defecto de **RBAC** y de las restricciones iniciales de derechos de los usuarios.
- **Cloud Temple** es responsable de la implementación del sistema de **autenticación de doble factor** y de su mantenimiento para reforzar los accesos.
  
**Responsabilidad del usuario :**

- El **Cliente** debe controlar regularmente los accesos de sus usuarios.
- El **Cliente** es responsable de otorgar accesos a sus usuarios y de su incorporación en el tenant.
- El **Cliente** debe gestionar a sus usuarios respetando las limitaciones impuestas por el sistema **Cloud Temple**.

### Gestión de vulnerabilidades

Las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta se comunicarán en el módulo de incidentes.

**Responsabilidad de **Cloud Temple** :**

- **Cloud Temple** es responsable de comunicar las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta desde su detección a través del módulo [**incidentes**](../../console/status.md) de la Consola.
- **Cloud Temple** es responsable de la aplicación de parches en este ámbito.
- **Cloud Temple** es responsable de proporcionar herramientas para analizar las vulnerabilidades de las imágenes Docker. Por defecto, **Cloud Temple** implementa **[Quay]** para realizar el escaneo automático de las imágenes Docker.

**Responsabilidad del usuario :**

- El **Cliente** es responsable de la detección y corrección de vulnerabilidades en sus cargas de trabajo.
- El **Cliente** es responsable de actualizar sus cargas de trabajo para permitir la aplicación de parches de seguridad lo antes posible.

**Recomendación :**

- Utilizar las alertas del clúster proporcionadas por **[Quay]** para analizar las vulnerabilidades y detectar comportamientos anómalos en las imágenes utilizadas por el **Cliente**.
- Suscribirse a las notificaciones de [**incidentes**](../../console/status.md#gestion-des-notifications).

### Cifrado

Garantía de cifrado nativo en la infraestructura **Cloud Temple**, con recomendaciones para las cargas de trabajo.

**Responsabilidad de **Cloud Temple** :**

- Mecanismos de redundancia dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del clúster.

**Responsabilidad del usuario :**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- Asegurarse de que las cargas de trabajo utilicen los mecanismos de resiliencia y adaptar los despliegues para implementarlos.

**Recomendación :**

- Habilitar el **cifrado TLS** para todas las comunicaciones intra-pod.
- Habilitar el **cifrado TLS** para todas las comunicaciones entre las Ofertas PaaS e IaaS **Cloud Temple**.
- Garantizar el cifrado de datos en reposo a través de las soluciones de almacenamiento de **Cloud Temple**.

### Registro y auditoría

Registro automático de eventos críticos del clúster.

**Responsabilidad de Cloud Temple:**

- **Cloud Temple** es responsable del registro y la auditoría de la infraestructura y los servicios subyacentes de la oferta.

**Responsabilidad del usuario:**

- El **Cliente** es responsable del registro y la auditoría de sus cargas de trabajo.
  
**Recomendación:**

- Configurar pipelines para centralizar y analizar los registros de sus cargas de trabajo:
  - Utilizar colectores para la agregación de registros, junto con una herramienta de visualización.
  - Integrar los registros en su **SIEM** (recomendado).

---

## Gestión de incidentes y PCD (Plan de Continuidad de la Actividad)

**Responsabilidad de **Cloud Temple** :**

- **Cloud Temple** es responsable de los mecanismos de redundancia dentro de la infraestructura.
- **Cloud Temple** es responsable de las copias de seguridad automáticas de las configuraciones del clúster.
- **Cloud Temple** es responsable de la recuperación de la actividad tras un incidente en la infraestructura o en los servicios subyacentes a la oferta.

**Responsabilidad del usuario :**

- El **Cliente** es responsable de realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- El **Cliente** debe asegurarse de que las cargas de trabajo utilicen los mecanismos de resiliencia y debe adaptar sus despliegues para implementarlos.
- El **Cliente** es responsable del PRA/PCD de sus cargas de trabajo.

**Procedimiento "Recuperación ante desastres"**

- En caso de pérdida total de acceso a un clúster, el **Cliente** debe declarar un incidente al soporte **Cloud Temple** a través del módulo de soporte de la consola.
Consulte la [**procédure de demande de support technique**](../../console/console_quickstart.md#accès-au-support-technique)

---

## Recomendaciones generales

1. **Planificar los recursos** : Garantizar una capacidad de clúster suficiente para las cargas de trabajo de pico.
2. **Validar las configuraciones** : Probar las aplicaciones en entornos de staging antes del despliegue en producción.
3. **Monitorear regularmente** : Utilizar las herramientas integradas para seguir el uso de los recursos y detectar los problemas lo antes posible.
4. **Mantenerse informado** : Seguir la hoja de ruta y las guías para evitar funciones obsoletas.
5. **Contactar al soporte** : Para problemas no resueltos, contactar al soporte a través del [**procedimiento de solicitud de soporte técnico**](../../console/console_quickstart.md#accès-au-support-technique) o por correo electrónico a la dirección [**contacto**](mailto:contact@cloud-temple.com).

Para consultar las responsabilidades en detalle, por favor, consulte nuestra [**matriz de responsabilidad**](../../contractual/paas/raci.md).