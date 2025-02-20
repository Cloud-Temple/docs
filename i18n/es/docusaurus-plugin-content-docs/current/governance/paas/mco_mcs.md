---
title: MCO/MCS
---

**Política de Mantenimiento en Condiciones Operativas (MCO) y Mantenimiento en Condiciones de Seguridad (MCS) en el PaaS OpenShift SNC **Cloud Temple****

## Preámbulo

Esta política detalla las responsabilidades y las recomendaciones para el Mantenimiento en Condiciones Operativas (MCO) y el Mantenimiento en Condiciones de Seguridad (MCS) de sus entornos en el PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Mantenimiento en Condiciones Operativas (MCO)

### 1.1. Gestión y actualización de los clusters

**Responsabilidad **Cloud Temple** :**

- Gestión completa de la infraestructura subyacente, incluyendo los nodos maestros, las actualizaciones de versiones OpenShift, y la resiliencia de los servicios críticos desplegados por **Cloud Temple**.
- Actualizaciones menores/parches automáticos sin interrupción para las cargas de trabajo alojadas, salvo notificación contraria.
- Limitación de los derechos y las funcionalidades a las restricciones de SecNumCloud.
- Comunicación de las actualizaciones futuras y las actualizaciones críticas en los próximos tres meses a través del [**Mapa de Ruta Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilidad del usuario :**

- Gestión de las cargas de trabajo desplegadas (aplicaciones, herramientas CI/CD) y de sus configuraciones.
- Pruebas de actualizaciones de carga de trabajo en un entorno de staging antes del despliegue en producción.
- Asegurar la compatibilidad de las cargas de trabajo con los componentes del cluster.

**Recomendación :**

- Planificar los despliegues de aplicaciones fuera de las ventanas de mantenimiento para evitar conflictos con las actualizaciones automáticas del cluster.
- Seguir las comunicaciones de **Cloud Temple** sobre las actualizaciones mayores para planificar los ajustes necesarios.
- Seguir las actualizaciones futuras a través del [**Mapa de Ruta del Producto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Suscribirse a las notificaciones de [**incidentes**](/console/status.md#gestion-des-notifications)

---

### 1.2. Supervisión y monitoreo

**Responsabilidad **Cloud Temple** :**

- Supervisión y monitoreo de la infraestructura y los servicios subyacentes desplegados por **Cloud Temple**.

**Responsabilidad del usuario :**

- Supervisión y monitoreo de sus cargas de trabajo.

**Recomendación :**

Utilizar las **herramientas nativas proporcionadas :**

- Análisis de logs de rendimiento y eventos a través de la consola OpenShift.
- Configuración de alertas personalizadas a partir de las métricas del cluster y de los pods a través de la interfaz de usuario.  

Configurar umbrales críticos de alerta :

- **CPU/Memoria** de los pods: ≥ 80 %.
- **Espacio en disco en los volúmenes persistentes**: ≥ 85 %.
- **Fallos en el inicio de los pods**: más de X ocurrencias en 10 minutos.  

Automatizar la escalada de alertas hacia sus herramientas de gestión para una reacción rápida.  

---

### 1.3. Copias de seguridad y restauración

Los componentes críticos del cluster son copiados automáticamente por **Cloud Temple**. Las cargas de trabajo y los datos de los usuarios requieren una gestión dedicada.

**Responsabilidad **Cloud Temple** :**

- Mecanismos de redondez automática dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del cluster.

**Responsabilidad del usuario :**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo de **Cloud Temple**.

**Recomendación :**

- Implementar políticas de copias de seguridad regulares :
  - Copias de seguridad automáticas de los PV con Kasten.
  - Copia de seguridad diaria de las configuraciones de Kubernetes, secretos y despliegues YAML.
- Probar regularmente las restauraciones para validar los RPO.

---

## 2. Mantenimiento en Condiciones de Seguridad (MCS)

### 2.1. Gestión de secretos y configuraciones

Uso de los secretos de OpenShift/Kubernetes y se recomienda integrar sistemas de gestión centralizada de secretos.

**Responsabilidad **Cloud Temple** :**

- La gestión de los secretos y la configuración de la infraestructura y los servicios subyacentes a la oferta es responsabilidad de **Cloud Temple**.

**Responsabilidad del usuario :**

- La gestión de los secretos y la configuración de las cargas de trabajo del **Cliente** es responsabilidad del **Cliente**.
  
**Recomendación :**

- No almacenar secretos en texto claro en los archivos YAML.
- Usar herramientas para cifrar la información sensible.

### 2.2. Control de accesos (IAM)

La revisión de los accesos se realiza a través de la consola Shiva y del módulo "User Management" de la consola OpenShift.

Para más detalles sobre esta funcionalidad, consulte nuestra [**guía**](/console/iam/iam) y la [**documentación**](https://docs.redhat.com/en/documentation/openshift_container_platform/) del editor.

**Responsabilidad **Cloud Temple** :**

- **Cloud Temple** es responsable de la gestión de las cuentas de servicio y administración.
- **Cloud Temple** es responsable de la integración con el sistema de identidad de **Cloud Temple** para gestionar los accesos.
- **Cloud Temple** es responsable de la implementación predeterminada de la configuración **RBAC** y de las restricciones iniciales de los derechos de los usuarios.
- **Cloud Temple** es responsable de proporcionar el sistema de **doble autenticación** y de su mantenimiento para reforzar los accesos.
  
**Responsabilidad del usuario :**

- El **Cliente** debe revisar regularmente los accesos de sus usuarios.
- El **Cliente** es responsable de otorgar accesos a sus usuarios y de su incorporación en el tenant.
- El **Cliente** debe gestionar a sus usuarios respetando las limitaciones impuestas por el sistema de **Cloud Temple**.

### 2.3. Gestión de vulnerabilidades

Las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta serán comunicadas en el módulo de incidentes.

**Responsabilidad **Cloud Temple** :**

- **Cloud Temple** es responsable de la comunicación de las vulnerabilidades en la infraestructura y los servicios subyacentes a la oferta, una vez detectadas, a través del módulo de [**incidentes**](/console/status.md) de la consola SHIVA.
- **Cloud Temple** es responsable de la aplicación de los parches en este ámbito.
- **Cloud Temple** es responsable de proporcionar herramientas para analizar las vulnerabilidades de las imágenes Docker. Por defecto, **Cloud Temple** proporciona **[Quay]** para realizar el escaneo automático de las imágenes Docker.

**Responsabilidad del usuario :**

- El **Cliente** es responsable de la detección y corrección de vulnerabilidades en sus cargas de trabajo.
- El **Cliente** es responsable de actualizar sus cargas de trabajo para permitir la aplicación de los parches de seguridad lo antes posible.

**Recomendación :**

- Usar el alerting del cluster proporcionado por **[Quay]** para analizar las vulnerabilidades y detectar comportamientos anormales en las imágenes utilizadas por el **Cliente**.
- Suscribirse a las notificaciones de [**incidentes**](/console/status.md#gestion-des-notifications).

### 2.4. Cifrado

Garantía de cifrado nativo en la infraestructura de **Cloud Temple**, con recomendaciones para las cargas de trabajo.

**Responsabilidad **Cloud Temple** :**

- Mecanismos de redondez dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del cluster.

**Responsabilidad del usuario :**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo de **Cloud Temple**.
- Asegurarse de que las cargas de trabajo utilizan los mecanismos de resiliencia y adaptar los despliegues para implementarlos.

**Recomendación :**

- Activar el **cifrado TLS** para todas las comunicaciones intra-pod.
- Activar el **cifrado TLS** para todas las comunicaciones entre las ofertas PaaS e IaaS de **Cloud Temple**.
- Garantizar el cifrado de los datos en reposo a través de las soluciones de almacenamiento de **Cloud Temple**.

### 2.5. Registro y auditoría

Registro automático de eventos críticos del cluster.

**Responsabilidad **Cloud Temple** :**

- **Cloud Temple** es responsable del registro y la auditoría de la infraestructura y los servicios subyacentes a la oferta.

**Responsabilidad del usuario :**

- El **Cliente** es responsable del registro y la auditoría de sus cargas de trabajo.
  
**Recomendación :**

- Configurar pipelines para centralizar y analizar los logs de sus cargas de trabajo :
  - Usar colectores para la agregación de logs con una herramienta de visualización.
  - Integrar los logs en su **SIEM** (recomendado).

---

## 3. Gestión de incidentes y PCA (Plan de Continuidad de Actividad)

**Responsabilidad **Cloud Temple** :**

- **Cloud Temple** es responsable de los mecanismos de redundancia dentro de la infraestructura.
- **Cloud Temple** es responsable de las copias de seguridad automáticas de las configuraciones del cluster.
- **Cloud Temple** es responsable de la recuperación de la actividad después de un incidente en la infraestructura o en los servicios subyacentes a la oferta.

**Responsabilidad del usuario :**

- El **Cliente** es responsable de respaldar los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo de **Cloud Temple**.
- El **Cliente** debe asegurarse de que las cargas de trabajo utilizan los mecanismos de resiliencia y debe adaptar sus despliegues para implementarlos.
- El **Cliente** es responsable del DRP/PCA de sus cargas de trabajo.

**Procedimiento "Recuperación ante desastres"**

- En caso de pérdida completa de acceso a un cluster, el **Cliente** debe declarar un incidente al soporte de **Cloud Temple** a través del módulo de soporte de la consola.
Ver el [**procedimiento de solicitud de soporte técnico**](/console/console_quickstart.md#accès-au-support-technique)

---

## Recomendaciones Generales
1. **Planificar los recursos** : Asegurar una capacidad de clúster suficiente para las cargas de trabajo máximas.
2. **Validar las configuraciones** : Probar las aplicaciones en entornos de staging antes del despliegue en producción.
3. **Supervisar regularmente** : Utilizar las herramientas integradas para seguir el uso de recursos y detectar los problemas lo antes posible.
4. **Mantenerse informado** : Seguir la hoja de ruta y las guías para evitar funcionalidades obsoletas.
5. **Contactar al soporte** : Para problemas no resueltos, contactar al soporte mediante la [**procedimiento de solicitud de soporte técnico**](/console/console_quickstart.md#acc%C3%A9s-au-support-technique) o por correo a la dirección [**contacto**](mailto:contact@cloud-temple.com).

Para conocer las responsabilidades en detalle, por favor consulte nuestra [**matriz de responsabilidad**](/governance/paas/raci.md).