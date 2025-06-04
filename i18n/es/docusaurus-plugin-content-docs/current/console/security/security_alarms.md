---
title: Alertas de seguridad
---

Encuentre aquí las alertas de seguridad relacionadas con nuestros servicios cloud.  
Esta página se actualiza diariamente para tener en cuenta las vulnerabilidades recién identificadas.

## Vulnerabilidades

| Fecha | Referencia(s) | CVSS | Título | Descripción | Servicio(s) | Severidad | Tratamiento |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010 : Múltiples vulnerabilidades en VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Se han reportado varias vulnerabilidades en VMware ESXi: Vulnerabilidad de denegación de servicio en operaciones de invitado (CVE-2025-41226), vulnerabilidad de denegación de servicio (CVE-2025-41227), vulnerabilidad de tipo Cross Site Scripting (XSS) (CVE-2025-41228). Se proporcionan parches por parte del proveedor. | IaaS By VMware | 🟡 Moderada | ⚠️ Le recomendamos actualizar sus hipervisores. Las versiones corregidas de ESXi están disponibles tan pronto como sean validadas por Cloud Temple. Console le indica los ESXi que requieren actualización. | 
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010 : Múltiples vulnerabilidades en vCenter (CVE-2025-41225, CVE-2025-41228)** | Se han reportado varias vulnerabilidades en VMware vCenter: Vulnerabilidad de ejecución de comandos autenticados en VMware vCenter Server (CVE-2025-41225), vulnerabilidad de tipo Cross Site Scripting (XSS) (CVE-2025-41228). Se proporcionan parches por parte del proveedor. | IaaS By VMware | 🟠 Importante | ✅ La actualización de sus instancias vCenter está prevista tan pronto como los parches sean validados por Cloud Temple. No se requiere ninguna acción por su parte. | 
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007 : Vulnerabilidad de gestión de archivos no segura en VMware Tools (CVE-2025-22247)** | Se ha reportado una vulnerabilidad de gestión de archivos no segura en VMware Tools. Se proporcionan parches por parte del proveedor. | IaaS By VMware | 🟡 Moderada | ⚠️ Le recomendamos actualizar VMware Tools en sus máquinas virtuales. | 
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005 : Vulnerabilidad de omisión de autenticación en VMware Tools para Windows (CVE-2025-22230)** | Se ha reportado una vulnerabilidad de omisión de autenticación en VMware Tools para Windows. Se proporcionan parches por parte del proveedor. | IaaS By VMware | 🟠 Importante | ⚠️ Le recomendamos actualizar VMware Tools en sus máquinas virtuales. |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004 : Múltiples vulnerabilidades en VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Se han reportado varias vulnerabilidades en VMware ESXi: Vulnerabilidad de desbordamiento de pila VMCI (CVE-2025-22224) evaluada como Crítica por VMware, vulnerabilidad de escritura arbitraria en VMware ESXi (CVE-2025-22225), vulnerabilidad de divulgación de información HGFS (CVE-2025-22226). Se proporcionan parches por parte del proveedor. | IaaS By VMware | 🟠 Importante | ⚠️ Le recomendamos actualizar sus hipervisores. Las versiones corregidas de ESXi están disponibles tan pronto como sean validadas por Cloud Temple. Console le indica los ESXi que requieren actualización. |

## Información

- **Fecha** : Fecha de publicación inicial de la alerta de seguridad Cloud Temple.
- **Referencia(s)** : ID CVE, si está disponible.
- **CVSS** : Puntuación base CVSS v3 reportada por el proveedor o el CVE, no contextualizada. La contextualización se expresa mediante la severidad CT. Si la alerta tiene múltiples vulnerabilidades, se indican los valores mínimo y máximo del CVSS.
- **Título** : Título de la alerta, con referencia del proveedor si está disponible.
- **Descripción** : Descripción sintética, con enlace(s) a información detallada.
- **Servicio(s)** : Servicio(s) de Cloud Temple potencialmente afectados.
- **Severidad** : Nivel de severidad en el contexto de los servicios de Cloud Temple (para la vulnerabilidad más crítica en caso de múltiples). Se consideran los criterios de explotación en el contexto técnico de nuestras infraestructuras y servicios Cloud.

| Nivel | Descripción |
|--------|-------------|
| 🔴 **Crítica** | Vulnerabilidad CVSS 7+ que presenta riesgo importante de explotación (gran exposición, fácil explotación). Se recomienda encarecidamente aplicar correcciones o mitigaciones lo antes posible. |
| 🟠 **Importante** | Vulnerabilidad CVSS 7+ que no presenta un riesgo de explotación importante (exposición limitada o restricciones de explotación). |
| 🟡 **Moderada** | Vulnerabilidad CVSS 4+. |
| 🔵 **Baja** | Vulnerabilidad CVSS menor a 4, o no explotable. |

- **Tratamiento** : Información y recomendaciones en el contexto de los servicios de Cloud Temple. ⚠️ indica que se requiere una acción por parte de los usuarios para tratar la vulnerabilidad. ✅ indica que el tratamiento de la vulnerabilidad está gestionado por Cloud Temple.