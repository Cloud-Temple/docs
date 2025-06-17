---
title: MCO/MCS
---

**Política de Mantenimiento en Condiciones Operativas (MCO) y Mantenimiento en Condiciones de Seguridad (MCS) en el PaaS OpenShift SNC **Cloud Temple****

## Preliminares

Esta política detalla las responsabilidades y recomendaciones para el Mantenimiento en Condiciones Operativas (MCO) y el Mantenimiento en Condiciones de Seguridad (MCS) de sus entornos en el PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Mantenimiento en Condiciones Operativas (MCO)

### 1.1. Gestión y actualización de clusters

**Responsabilidad de **Cloud Temple** :**

- Gestión completa de la infraestructura subyacente, incluyendo los nodos maestros, las actualizaciones de versiones de OpenShift y la resiliencia de los servicios críticos desplegados por **Cloud Temple**.
- Actualizaciones menores/patches automáticas sin interrupciones para las cargas de trabajo alojadas, salvo notificación contraria.
- Limitación de derechos y funcionalidades según las restricciones de SecNumCloud.
- Comunicación de las actualizaciones próximas y las actualizaciones de ruptura en los próximos tres meses a través de la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilidad del usuario :**

- Gestión de las cargas de trabajo desplegadas (aplicaciones, herramientas CI/CD) y sus configuraciones.
- Pruebas de las actualizaciones de carga de trabajo en un entorno de staging antes del despliegue en producción.
- Garantía de la compatibilidad de las cargas de trabajo con los componentes del cluster.

**Recomendación :**

- Planificar los despliegues aplicativos fuera de las ventanas de mantenimiento para evitar conflictos con las actualizaciones automáticas del cluster.
- Seguir las comunicaciones de **Cloud Temple** sobre las actualizaciones importantes para planificar los ajustes necesarios.
- Seguir las actualizaciones próximas a través de la [**Roadmap producto**](https://github.com/orgs/Cloud-Temple/projects/2)
- Suscribirse a las notificaciones [**de incidentes**](/console/status.md#gestion-des-notifications)

---

### 1.2. Supervisión y monitorización

**Responsabilidad de **Cloud Temple** :**

- Supervisión y monitorización de la infraestructura y los servicios subyacentes desplegados por **Cloud Temple**.

**Responsabilidad del usuario :**

- Supervisión y monitorización de sus cargas de trabajo.

**Recomendación :**

Utilizar las **herramientas nativas proporcionadas :**

- Análisis de logs de rendimiento y eventos a través de la consola OpenShift.
- Configuración de alertas personalizadas a partir de las métricas del cluster y los pods a través de la interfaz de usuario.  
  
Configurar umbrales críticos de alerta :

- **CPU/Memoria** de los pods : ≥ 80 %.
- **Espacio en disco en volúmenes persistentes** : ≥ 85 %.
- **Fallas en el inicio de los pods** : más de X ocurrencias en 10 minutos.  
  
Automatizar la escalada de alertas a sus herramientas de gestión para una reacción rápida.  

---

### 1.3. Copias de seguridad y restauración

Los componentes críticos del cluster se respaldan automáticamente por **Cloud Temple**. Las cargas de trabajo y los datos de los usuarios requieren una gestión dedicada.

**Responsabilidad de **Cloud Temple** :**

- Mecanismos de redundancia automática dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del cluster.

**Responsabilidad del usuario :**

- Realizar copias de seguridad de los datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.

**Recomendación :**

- Establecer políticas de copia de seguridad periódicas :
  - Copias de seguridad automáticas de PV con Kasten.
  - Copia diaria de las configuraciones Kubernetes, secrets y despliegues YAML.
- Probar regularmente las restauraciones para validar los RPO.

---

## 2. Mantenimiento en Condiciones de Seguridad (MCS)

### 2.1. Gestión de secrets y configuraciones

Uso de secrets de OpenShift/Kubernetes y recomendación de integrar sistemas centralizados de gestión de secrets.

**Responsabilidad de **Cloud Temple** :**

- La gestión de secrets y configuración de la infraestructura y servicios subyacentes a la oferta es responsabilidad de **Cloud Temple**.

**Responsabilidad del usuario :**

- La gestión de secrets y configuración de las cargas de trabajo del **Cliente** es responsabilidad del **Cliente**.
  
**Recomendación :**

- No almacenar secrets en texto plano en archivos YAML.
- Utilizar herramientas para cifrar información sensible.

### 2.2. Control de accesos (IAM)

La revisión de accesos se realiza a través de la consola Shiva y el módulo "User Management" de la consola OpenShift.

Para más detalles sobre esta funcionalidad, consultar nuestro [**guía**](/console/iam/iam) y la [**documentación**](https://docs.redhat.com/en/documentation/openshift_container_platform/) del editor.

**Responsabilidad de **Cloud Temple** :**

- **Cloud Temple** es responsable de la gestión de cuentas de servicio y administración.
- **Cloud Temple** es responsable de la integración al sistema de identidad **Cloud Temple** para gestionar accesos.
- **Cloud Temple** es responsable de la implementación por defecto de la configuración **RBAC** y restricciones de derechos de usuarios iniciales.
- **Cloud Temple** es responsable de la provisión del sistema de **autenticación dual** y su mantenimiento para reforzar accesos.
  
**Responsabilidad del usuario :**

- El **Cliente** debe revisar regularmente los accesos de sus usuarios.
- El **Cliente** es responsable de otorgar accesos a sus usuarios y su onboarding en el tenant.
- El **Cliente** debe gestionar sus usuarios respetando las limitaciones impuestas por el sistema **Cloud Temple**.

### 2.3. Gestión de vulnerabilidades

Las vulnerabilidades en la infraestructura y servicios subyacentes a la oferta se comunicarán en el módulo de incidentes.

**Responsabilidad de **Cloud Temple** :**

- **Cloud Temple** es responsable de comunicar vulnerabilidades en la infraestructura y servicios subyacentes a la oferta tan pronto como se detecten a través del módulo [**incidente**](/console/status.md) de la consola SHIVA.
- **Cloud Temple** es responsable de aplicar parches en este ámbito.
- **Cloud Temple** es responsable de proporcionar herramientas para analizar vulnerabilidades en imágenes Docker. Por defecto, **Cloud Temple** implementa **[Quay]** para escanear imágenes Docker de forma automática.

**Responsabilidad del usuario :**

- El **Cliente** es responsable de detectar y corregir vulnerabilidades en sus cargas de trabajo.
- El **Cliente** es responsable de actualizar sus cargas de trabajo para permitir la aplicación de parches de seguridad lo más rápido posible.

**Recomendación :**

- Utilizar el alerting del cluster proporcionado por **[Quay]** para analizar vulnerabilidades y detectar comportamientos anómalos en las imágenes utilizadas por el **Cliente**.
- Suscribirse a las notificaciones de [**incidentes**](/console/status.md#gestion-des-notificaciones).

### 2.4. Cifrado

Garantía de cifrado nativo en la infraestructura **Cloud Temple**, con recomendaciones para las cargas de trabajo.

**Responsabilidad de **Cloud Temple** :**

- Mecanismos de redundancia dentro de la infraestructura.
- Copias de seguridad automáticas de las configuraciones del cluster.

**Responsabilidad del usuario :**

- Guardar datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- Asegurarse de que las cargas de trabajo utilicen mecanismos de resiliencia y adaptar los despliegues para implementarlos.

**Recomendación :**

- Activar el **cifrado TLS** para todas las comunicaciones intra-pod.
- Activar el **cifrado TLS** para todas las comunicaciones entre las Ofertas PaaS e IaaS **Cloud Temple**.
- Garantizar el cifrado de datos en reposo mediante soluciones de almacenamiento **Cloud Temple**.

### 2.5. Registro y auditoría

Registro automático de eventos críticos del cluster.

**Responsabilidad de **Cloud Temple** :**

- **Cloud Temple** es responsable del registro y auditoría de la infraestructura y servicios subyacentes a la oferta.

**Responsabilidad del usuario :**

- El **Cliente** es responsable del registro y auditoría de sus cargas de trabajo.
  
**Recomendación :**

- Configurar pipelines para centralizar y analizar los logs de sus cargas de trabajo :
  - Utilizar recolectores para la agregación de logs, con una herramienta de visualización.
  - Integrar los logs en su **SIEM** (recomendado).

---

## 3. Gestión de incidentes y PCA (Plan de Continuidad de Actividad)

**Responsabilidad de **Cloud Temple** :**

- **Cloud Temple** es responsable de los mecanismos de redundancia dentro de la infraestructura.
- **Cloud Temple** es responsable de las copias de seguridad automáticas de las configuraciones del cluster.
- **Cloud Temple** es responsable de la recuperación de la actividad tras un incidente en la infraestructura o en los servicios subyacentes a la oferta.

**Responsabilidad del usuario :**

- El **Cliente** es responsable de guardar datos críticos de las cargas de trabajo utilizando soluciones como la oferta **Kasten** disponible en el catálogo **Cloud Temple**.
- El **Cliente** debe asegurarse de que las cargas de trabajo utilicen mecanismos de resiliencia y debe adaptar sus despliegues para implementarlos.
- El **Cliente** es responsable del PRA/PCA de sus cargas de trabajo.

**Procedimiento "Recuperación tras desastre"**

- En caso de pérdida total de acceso a un cluster, el **Cliente** debe declarar un incidente al soporte **Cloud Temple** a través del módulo de soporte de la consola.
Ver la [**procedimiento de solicitud de soporte técnico**](/console/console_quickstart.md#acceso-al-soporte-tecnico)

---

## Recomendaciones generales
1. **Planificar los recursos**: Asegurar una capacidad de cluster suficiente para las cargas de trabajo de pico.  
2. **Validar las configuraciones**: Probar las aplicaciones en entornos de staging antes del despliegue en producción.  
3. **Monitorear regularmente**: Usar las herramientas integradas para seguir el uso de los recursos y detectar problemas lo antes posible.  
4. **Mantenerse informado**: Seguir la roadmap y las guías para evitar las funcionalidades obsoletas.  
5. **Contactar al soporte**: Para problemas no resueltos, contactar al soporte mediante la [**procedimiento de solicitud de soporte técnico**](/console/console_quickstart.md#acceso-al-soporte-técnico) o por correo electrónico a la dirección [**contacto**](mailto:contact@cloud-temple.com).  

Para conocer en detalle las responsabilidades, consulte nuestra [**matriz de responsabilidad**](/contractual/paas/raci.md).