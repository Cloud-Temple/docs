---
title: Alertas de Seguridad
---

Encuentre aquí nuestras alertas y recomendaciones de seguridad relacionadas con los servicios de Cloud Temple.

## Vulnerabilidades de Seguridad

### Tabla de Vulnerabilidades

| Fecha de Publicación | Servicio Afectado | Identificador | Puntuación CVSSv3 | Detalles | Severidad CT | Recomendación | Descripción |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 12/05/2025 | IaaS By VMware | CVE-2025-22247 | 6.1 | **Vulnerabilidad de VMware Tools: CVE-2025-25234** [Boletín del Fabricante](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 🟡 Moderada | Actualice VMware Tools a la versión 12.5.2 en sus máquinas virtuales para corregir la vulnerabilidad. | Una vulnerabilidad de gestión de archivos insegura en VMware Tools fue reportada de forma privada a VMware. Hay actualizaciones disponibles para remediar esta vulnerabilidad en los productos VMware afectados. |
| 25/03/2025 | IaaS By VMware | CVE-2025-22230 | 7.8 | **Vulnerabilidad de VMware Tools: CVE-2025-22230** [Boletín del Fabricante](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 🟠 Alta | Actualice VMware Tools a la versión 15.5.1 para Windows en sus máquinas virtuales para corregir esta vulnerabilidad. | Una vulnerabilidad de bypass de autenticación en VMware Tools para Windows fue reportada de forma privada a VMware. Hay actualizaciones disponibles para remediar esta vulnerabilidad en los productos VMware afectados. |
| 04/03/2025 | IaaS By VMware | Múltiples CVEs | 7.1 a 9.3 | **Vulnerabilidades en VMware ESXI (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** [Boletín del Fabricante](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 🟠 Alta | Implemente los parches disponibles correspondientes a su rama lo antes posible. Las nuevas versiones parcheadas están disponibles en Console. Como recordatorio, Console indica qué versiones de sus ESXi no están actualizadas. | Múltiples vulnerabilidades en VMware ESXi fueron reportadas de forma privada a VMware (CVE-2025-22224; CVE-2025-22225; CVE-2025-22226). Hay actualizaciones disponibles para remediar estas vulnerabilidades en los productos VMware afectados. |

## Escalas de Severidad

| Nivel | Descripción |
|--------|-------------|
| 🔴 **Crítica** | Vulnerabilidad CVSS 7+ con riesgo significativo de explotación (exposición, facilidad de explotación) |
| 🟠 **Alta** | Vulnerabilidad CVSS 7+ sin riesgo significativo de explotación (exposición limitada o restricciones de explotación) |
| 🟡 **Moderada** | Vulnerabilidad CVSS 4+ |
| 🔵 **Baja** | Vulnerabilidad CVSS inferior a 4, o no explotable. |

*Los criterios de explotación se consideran dentro del contexto técnico de nuestras infraestructuras y servicios Cloud.*
