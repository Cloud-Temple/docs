---
title: MCO/MCS
---

**Política de Mantenimiento en Condiciones Operativas (MCO) y de Mantenimiento en Condiciones de Seguridad (MCS) sobre el PaaS OpenShift SNC **Cloud Temple****

## Preámbulo

Esta política detalla las responsabilidades y recomendaciones para el Mantenimiento en Condiciones Operativas (MCO) y el Mantenimiento en Condiciones de Seguridad (MCS) de sus entornos sobre el PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Mantenimiento en Condiciones Operativas (MCO)

### 1.1. Gestión y actualización de clústeres

**Responsabilidad de **Cloud Temple**:**

- Gestión completa de la infraestructura subyacente, incluyendo los nodos maestros, las actualizaciones de versiones de OpenShift y la resiliencia de los servicios críticos desplegados por **Cloud Temple**.
- Actualizaciones menores/parches automáticos sin interrupción para las cargas de trabajo hospedadas, salvo notificación contraria.
- Limitación de los derechos y funcionalidades según las restricciones de SecNumCloud.
- Comunicación de futuras actualizaciones y actualizaciones importantes para los próximos tres meses a través del [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilidad del usuario:**

- Gestión de las cargas de trabajo desplegadas (aplicaciones, herramientas CI/CD) y sus configuraciones.
- Pruebas de actualizaciones de las cargas de trabajo en un entorno de staging antes del despliegue en producción.
- Asegurar la compatibilidad de las cargas de trabajo con los componentes del clúster.

**Recomendación:**

- Planificar los despliegues de aplicaciones fuera de las ventanas de mantenimiento para evitar conflictos con las actualizaciones automáticas del clúster.
- Seguir las comunicaciones de **Cloud Temple** respecto a actualizaciones mayores para planificar los ajustes necesarios.
- Seguir las actualizaciones futuras a través del [**Roadmap producto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Suscribirse a las notificaciones de [**incidentes**](/console/status.md#gestion-des-notifications)

---

### 1.2. Supervisión y monitoreo

**Responsabilidad de **Cloud Temple**:**

- Supervisión y monitoreo de la infraestructura y los servicios subyacentes desplegados por **Cloud Temple**.

**Responsabilidad del usuario:**

- Supervisión y monitoreo de sus cargas de trabajo.

**Recomendación:**

Usar las **herramientas nativas proporcionadas:**

- Análisis de logs de rendimiento y eventos a través de la consola OpenShift.
- Configuración de alertas personalizadas a partir de las métricas del clúster y de los pods mediante la interfaz de usuario.  
  
Configurar umbrales críticos de alerta:

- **CPU/Memoria** de los pods: ≥ 80 %.
- **Espacio en disco en los volúmenes persistentes**: ≥ 85 %.
- **Fallos en el arranque de los pods**: más de X ocurrencias en 10 minutos.  
  
Automatizar la escalada de alertas hacia sus herramientas de gestión para una reacción rápida.  

---

### 1.3. Copias de seguridad y restauración

Los componentes críticos del clúster son respaldados automáticamente por **Cloud Temple**. Las cargas de trabajo y datos del usuario requieren una gestión dedicada.

**Responsabilidad de **Cloud Temple**:**

- Mecanismos de redundancia automática dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del clúster.

**Responsabilidad del usuario:**

- Respaldar los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.

**Recomendación:**

- Implementar políticas de copia de seguridad regulares:
  - Copias automáticas de los PV con Kasten.
  - Copias diarias de configuraciones de Kubernetes, secrets y YAMLs de despliegue.
- Probar regularmente la restauración para validar los RPO.

---

## 2. Mantenimiento en Condiciones de Seguridad (MCS)

### 2.1. Gestión de secretos y configuraciones

Uso de secretos OpenShift/Kubernetes y recomendación de integrar sistemas centralizados de gestión de secretos.

**Responsabilidad de **Cloud Temple**:**

- La gestión de los secretos y configuraciones de la infraestructura y los servicios subyacentes a la oferta es responsabilidad de **Cloud Temple**.

**Responsabilidad del usuario:**

- La gestión de los secretos y configuraciones de las cargas de trabajo del **Cliente** es responsabilidad del **Cliente**.
  
**Recomendación:**

- No almacenar secretos en texto plano dentro de archivos YAML.
- Utilizar herramientas para cifrar la información sensible.

### 2.2. Control de accesos (IAM)

La revisión de accesos se realiza por medio de la consola Shiva y del módulo "User Management" de la consola OpenShift.

Para más detalles sobre esta funcionalidad, consulte nuestra [**guía**](/console/iam/iam) y la [**documentación**](https://docs.redhat.com/en/documentation/openshift_container_platform/) del proveedor.

**Responsabilidad de **Cloud Temple**:**

- **Cloud Temple** es responsable de la gestión de las cuentas de servicio y administración.
- **Cloud Temple** es responsable de la integración al sistema de identidad **Cloud Temple** para gestionar los accesos.
- **Cloud Temple** es responsable de la implementación por defecto de la configuración **RBAC** y de las restricciones iniciales de derechos de los usuarios.
- **Cloud Temple** es responsable del suministro del sistema de **doble autenticación** y de su mantenimiento para reforzar los accesos.
  
**Responsabilidad del usuario:**

- El **Cliente** debe revisar regularmente los accesos de sus usuarios.
- El **Cliente** es responsable de otorgar accesos a sus usuarios y de su incorporación en el tenant.
- El **Cliente** debe gestionar a sus usuarios respetando las limitaciones impuestas por el sistema **Cloud Temple**.

### 2.3. Gestión de vulnerabilidades

Las vulnerabilidades sobre la infraestructura y los servicios subyacentes a la oferta serán comunicadas en el módulo de incidentes.

**Responsabilidad de **Cloud Temple**:**

- **Cloud Temple** es responsable de la comunicación de vulnerabilidades sobre la infraestructura y los servicios subyacentes a la oferta desde su detección mediante el módulo [**incident**](/console/status.md) de la consola SHIVA.
- **Cloud Temple** es responsable de aplicar los parches en dicho perímetro.
- **Cloud Temple** es responsable de proporcionar herramientas para analizar vulnerabilidades en imágenes Docker. Por defecto, **Cloud Temple** implementa **[Quay]** para realizar el escaneo automático de imágenes Docker.

**Responsabilidad del usuario:**

- El **Cliente** es responsable de la detección y corrección de vulnerabilidades en sus cargas de trabajo.
- El **Cliente** es responsable de actualizar sus cargas de trabajo para permitir la aplicación de parches de seguridad lo antes posible.

**Recomendación:**

- Utilizar la alerta del clúster proporcionada por **[Quay]** para analizar vulnerabilidades y detectar comportamientos anómalos en las imágenes utilizadas por el **Cliente**.
- Suscribirse a las notificaciones de [**incidentes**](/console/status.md#gestion-des-notifications).

### 2.4. Cifrado

Garantía de cifrado nativo en la infraestructura de **Cloud Temple**, con recomendaciones para las cargas de trabajo.

**Responsabilidad de **Cloud Temple**:**

- Mecanismos de redundancia dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del clúster.

**Responsabilidad del usuario:**

- Respaldar los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- Asegurar que las cargas de trabajo usen los mecanismos de resiliencia y adaptar los despliegues para implementarlos.

**Recomendación:**

- Activar el **cifrado TLS** para todas las comunicaciones intra-pod.
- Activar el **cifrado TLS** para todas las comunicaciones entre las Ofertas PaaS e IaaS **Cloud Temple**.
- Asegurar el cifrado de los datos en reposo mediante las soluciones de almacenamiento **Cloud Temple**.

### 2.5. Registro y auditoría

Registro automático de los eventos críticos del clúster.

**Responsabilidad de **Cloud Temple**:**

- **Cloud Temple** es responsable del registro y auditoría de la infraestructura y los servicios subyacentes a la oferta.

**Responsabilidad del usuario:**

- El **Cliente** es responsable del registro y auditoría de sus cargas de trabajo.
  
**Recomendación:**

- Configurar pipelines para centralizar y analizar los logs de sus cargas de trabajo:
  - Usar recolectores para la agregación de logs, con una herramienta de visualización.
  - Integrar los logs con su **SIEM** (recomendado).

---

## 3. Gestión de incidentes y PCA (Plan de Continuidad de Actividad)

**Responsabilidad de **Cloud Temple**:**

- **Cloud Temple** es responsable de los mecanismos de redundancia dentro de la infraestructura.
- **Cloud Temple** es responsable de las copias de seguridad automáticas de las configuraciones del clúster.
- **Cloud Temple** es responsable de la recuperación de la actividad tras un incidente sobre la infraestructura o en los servicios subyacentes a la oferta.

**Responsabilidad del usuario:**

- El **Cliente** es responsable de respaldar los datos críticos de sus cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- El **Cliente** debe asegurarse de que sus cargas de trabajo utilicen mecanismos de resiliencia y debe adaptar sus despliegues para implementarlos.
- El **Cliente** es responsable del PRA/PCA de sus cargas de trabajo.

**Procedimiento "Recuperación ante desastre"**

- En caso de pérdida completa de acceso a un clúster, el **Cliente** debe declarar un incidente al soporte **Cloud Temple** mediante el módulo de soporte de la consola.
Ver el [**procedimiento para solicitud de soporte técnico**](/console/console_quickstart.md#accès-au-support-technique)

---

## Recomendaciones generales
1. **Planificar los recursos**: Asegurar una capacidad de clúster suficiente para las cargas de trabajo máximas.  
2. **Validar las configuraciones**: Probar las aplicaciones en entornos de staging antes del despliegue en producción.  
3. **Supervisar regularmente**: Utilizar las herramientas integradas para seguir el uso de los recursos y detectar los problemas lo antes posible.  
4. **Mantenerse informado**: Seguir la hoja de ruta y las guías para evitar las funcionalidades obsoletas.  
5. **Contactar con el soporte**: Para los problemas no resueltos, contactar con el soporte a través del [**procedimiento de solicitud de soporte técnico**](/console/console_quickstart.md#accès-au-support-technique) o por correo electrónico a la dirección [**contacto**](mailto:contact@cloud-temple.com).

Para conocer las responsabilidades en detalle, por favor consulte nuestra [**matriz de responsabilidades**](/contractual/paas/raci.md).