---
title: Alertas de seguridad
---

Encuentre aquí las alertas de seguridad relacionadas con nuestros servicios en la nube.
Esta página se actualiza diariamente para tener en cuenta las vulnerabilidades recién identificadas.

## Vulnerabilidades

| Fecha | Referencia(s) | CVSS | Título | Descripción | Servicio(s) | Severidad | Tratamiento |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010 : Múltiples vulnerabilidades en VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Se han notificado múltiples vulnerabilidades en VMware ESXi: Vulnerabilidad de denegación de servicio en operaciones de invitado (CVE-2025-41226), Vulnerabilidad de denegación de servicio (CVE-2025-41227), Vulnerabilidad de Cross Site Scripting (XSS) (CVE-2025-41228). Se proporcionan parches por parte del editor. | IaaS By VMware | 🟡 Moderada | ⚠️ Le recomendamos actualizar sus hipervisores. Las versiones de ESXi corregidas están disponibles una vez validadas por Cloud Temple. La consola le indica los ESXi que requieren una actualización. | 
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010 : Múltiples vulnerabilidades en vCenter (CVE-2025-41225, CVE-2025-41228)** | Se han notificado múltiples vulnerabilidades en VMware vCenter: Vulnerabilidad de ejecución de comandos autenticados en VMware vCenter Server (CVE-2025-41225), Vulnerabilidad de Cross Site Scripting (XSS) (CVE-2025-41228). Se proporcionan parches por parte del editor. | IaaS By VMware | 🟠 Importante | ✅ La actualización de sus instancias vCenter está programada desde la validación de los parches por parte de Cloud Temple. No es necesaria ninguna acción por su parte. | 
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007 : Vulnerabilidad de gestión de archivos insegura en VMware Tools (CVE-2025-22247)** | Se ha notificado una vulnerabilidad de gestión de archivos insegura en VMware Tools. Se proporcionan parches por parte del editor. | IaaS By VMware | 🟡 Moderada | ⚠️ Le recomendamos actualizar VMware Tools en sus máquinas virtuales. | 
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005 : Vulnerabilidad de contornear autenticación en VMware Tools para Windows (CVE-2025-22230)** | Se ha notificado una vulnerabilidad de contornear autenticación en VMware Tools para Windows. Se proporcionan parches por parte del editor. | IaaS By VMware | 🟠 Importante | ⚠️ Le recomendamos actualizar VMware Tools en sus máquinas virtuales. |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004 : Múltiples vulnerabilidades en VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Se han notificado múltiples vulnerabilidades en VMware ESXi: Vulnerabilidad de desbordamiento de pila VMCI (CVE-2025-22224) calificada como Crítica por VMware, Vulnerabilidad de escritura arbitraria en VMware ESXi (CVE-2025-22225), Vulnerabilidad de divulgación de información HGFS (CVE-2025-22226). Se proporcionan parches por parte del editor.  | IaaS By VMware | 🟠 Importante | ⚠️ Le recomendamos actualizar sus hipervisores. Las versiones de ESXi corregidas están disponibles una vez validadas por Cloud Temple. La consola le indica los ESXi que requieren una actualización. |

## Información

- **Fecha** : Fecha de publicación inicial de la alerta de seguridad de Cloud Temple.
- **Referencia(s)** : ID CVE, según disponibilidad.
- **CVSS** : Puntuación CVSS v3 base tal como informada por el editor o el CVE, no contextualizada. La contextualización se expresa mediante la severidad CT. Si la alerta abarca múltiples vulnerabilidades, se indican las puntuaciones CVSS mínima y máxima.
- **Título** : Título de la alerta, con referencia del editor si está disponible.
- **Descripción** : Descripción sintética, con enlace(s) a información detallada.
- **Servicio(s)** : Servicio(s) de Cloud Temple que pueden estar afectados.
- **Severidad** : Nivel de severidad en el contexto de los servicios de Cloud Temple (para la vulnerabilidad más crítica en caso de múltiples vulnerabilidades). Los criterios de explotación se tienen en cuenta en el contexto técnico de nuestras infraestructuras y servicios en la nube.

| Nivel | Descripción |
|--------|-------------|
| 🔴 **Crítico** | Vulnerabilidad CVSS 7+ que presenta un riesgo importante de explotación (alta exposición, facilidad de explotación). Se recomienda fuertemente aplicar un parche o mitigación lo antes posible.|
| 🟠 **Importante** | Vulnerabilidad CVSS 7+ que no presenta un riesgo importante de explotación (exposición limitada o restricciones de explotación) |
| 🟡 **Moderada** | Vulnerabilidad CVSS 4+ |
| 🔵 **Baja** | Vulnerabilidad CVSS inferior a 4, o no explotable. |

- **Tratamiento** : Información y recomendaciones en el contexto de los servicios de Cloud Temple. ⚠️ indica que se requiere una acción por parte del usuario para tratar la vulnerabilidad. ✅ indica que el tratamiento de la vulnerabilidad es gestionado por Cloud Temple.