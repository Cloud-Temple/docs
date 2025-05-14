---
title: Alertes de sécurité
---

Retrouvez ici nos alertes et recommandation de sécurité liées aux services Cloud Temple.

## Vulnérabilités de sécurité

### Tableau des vulnérabilités

| Date de publication | Service impacté | Identifiant | Score CVSSv3 | Détails | Sévérité CT | Recommandation | Description |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 12/05/2025 | IaaS By VMware | CVE-2025-22247 | 6.1 | **Vulnérabilité VMware Tools : CVE-2025-25234** [Bulletin éditeur](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 🟡 Modérée | Mettre à jour les VMware Tools en 12.5.2 sur vos VM afin de corriger la vulnérabilité. | Une vulnérabilité de gestion de fichiers non sécurisée dans VMware Tools a été signalée à VMware en privé. Des mises à jour sont disponibles pour corriger cette vulnérabilité dans les produits VMware concernés. |
| 25/03/2025 | IaaS By VMware | CVE-2025-22230 | 7.8 | **Vulnérabilité VMware Tools : CVE-2025-22230** [Bulletin éditeur](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 🟠 Élevée | Mettre à jour les VMware Tools en 15.5.1 pour Windows sur vos VM afin de corriger cette vulnérabilité. | Une vulnérabilité de contournement d'authentification dans VMware Tools pour Windows a été signalée en privé à VMware. Des mises à jour sont disponibles pour corriger cette vulnérabilité dans les produits VMware concernés. |
| 04/03/2025 | IaaS By VMware | Multiples CVE | 7.1 à 9.3 | **Vulnérabilités dans VMware ESXI (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** [Bulletin éditeur](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 🟠 Élevée | Déployer dès que possible les correctifs disponibles correspondant à votre branche. Les nouvelles versions corrigées sont mises à disposition dans Console. Pour rappel Console vous indique les versions de vos ESXi qui ne sont pas à jour. | Plusieurs vulnérabilités dans VMware ESXi ont été signalées en privé à VMware (CVE-2025-22224 ; CVE-2025-22225 ; CVE-2025-22226). Des mises à jour sont disponibles pour corriger ces vulnérabilités dans les produits VMware concernés. |

## Echelles de sévérité

| Niveau | Description |
|--------|-------------|
| 🔴 **Critique** | Vulnérabilité CVSS 7+ présentant un risque d'exploitation important (exposition, facilité d'exploitation) |
| 🟠 **Élevée** | Vulnérabilité CVSS 7+ ne présentant pas de risque d'exploitation important (exposition limitée ou contraintes d'exploitation) |
| 🟡 **Modérée** | Vulnérabilité CVSS 4+ |
| 🔵 **Faible** | Vulnérabilité CVSS inférieur à 4, ou non exploitable. |

*Les critères d'exploitation sont pris en compte dans le contexte technique de nos infrastructures et services Cloud.*
