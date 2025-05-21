---
title: Alertes de sécurité
---

Retrouvez ici les alertes de sécurité liées à nos services cloud.
Cette page est mise à jour quotidiennement afin de tenir compte des vulnérabilités nouvellement identifiées.

## Vulnérabilités de sécurité

### Tableau des vulnérabilités

| Date | Référence(s) | CVSS | Titre | Description | Service(s) | Sévérité | Traitement |
|---------------------|-----------------|-------------|--------------|---------|-------------|----------------|-------------|
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-6.8 | **VMSA-2025-0010 : Multiples vulnérabilités dans VMware ESXi (CVE-2025-41226, CVE-2025-41227, CVE-2025-41228)** | Plusieurs vulnérabilités dans VMware ESXi ont été signalées : Vulnérabilité par déni de service des opérations invité (CVE-2025-41226), Vulnérabilité par déni de service (CVE-2025-41227), Vulnérabilité de type Cross Site Scripting (XSS) (CVE-2025-41228). Des correctifs sont disponibles pour corriger cette vulnérabilité. | IaaS By VMware | 🟡 Modérée | ⚠️ Nous vous recommandons de mettre à jour vos ESXi. Les nouvelles versions ESXi corrigées sont mises à disposition dans Console après validation par les équipes Cloud Temple. Pour rappel, Console vous indique vos ESXi qui ne sont pas à jour. | 
| 21/05/2025 | [VMSA-2025-0010](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25717) | 4.3-8.8 | **VMSA-2025-0010 : Multiples vulnérabilités dans vCenter (CVE-2025-41225, CVE-2025-41228)** | Plusieurs vulnérabilités dans VMware vCenter ont été signalées : Vulnérabilité d'exécution de commande authentifiée de VMware vCenter Server  (CVE-2025-41225), Vulnérabilité de type Cross Site Scripting (XSS) (CVE-2025-41228). Des correctifs sont disponibles pour corriger cette vulnérabilité. | IaaS By VMware | 🟠 Important | Les correctifs sont déployés sur vos instances vCenter après validation par Cloud Temple. Aucune action n'est requise de votre part. | 
| 14/05/2025 | [VMSA-2025-0007](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25683) | 6.1 | **VMSA-2025-0007 : Vulnérabilité de gestion de fichiers non sécurisée dans VMware Tools (CVE-2025-22247)** | Une vulnérabilité de gestion de fichiers non sécurisée dans VMware Tools a été signalée à VMware. Des correctifs sont disponibles pour corriger cette vulnérabilité. | IaaS By VMware | 🟡 Modérée | ⚠️ Nous vous recommandons de mettre à jour VMware Tools sur vos VM. | 
| 25/03/2025 | [VMSA-2025-0005](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25518) | 7.8 | **VMSA-2025-0005 : Vulnérabilité contournement d'authentification dans VMware Tools pour Windows (CVE-2025-22230)** | Une vulnérabilité de contournement d'authentification dans VMware Tools pour Windows a été signalée. Des correctifs sont disponibles pour corriger cette vulnérabilité. | IaaS By VMware | 🟠 Important | ⚠️ Nous vous recommandons mettre à jour VMware Tools sur vos VM Windows. |
| 04/03/2025 | [VMSA-2025-0004](https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/25390) | 7.1-9.3 | **VMSA-2025-0004 : Multiples vulnérabilités dans VMware ESXi (CVE-2025-22224, CVE-2025-22225, CVE-2025-22226)** | Plusieurs vulnérabilités dans VMware ESXi ont été signalées : Vulnérabilité de dépassement de tas VMCI (CVE-2025-22224) évaluée comme Critique par VMware, Vulnérabilité d'écriture arbitraire dans VMware ESXi (CVE-2025-22225), Vulnérabilité de divulgation d'informations HGFS (CVE-2025-22226). Des correctifs sont disponibles pour corriger ces vulnérabilités.  | IaaS By VMware | 🟠 Important | ⚠️ Nous vous recommandons de mettre à jour vos ESXi. Les nouvelles versions ESXi corrigées sont mises à disposition dans Console après validation par les équipes Cloud Temple. Pour rappel, Console vous indique vos ESXi qui ne sont pas à jour. |

## Informations

- **Date** : Date de publication initiale de l'alerte sécurité Cloud Temple.
- **Référence(s)** : ID CVE, selon disponibilité.
- **CVSS** : Score CVSS v3 de base tel que reporté par l'éditeur ou le CVE, non contextualisé. La contextulisation est exprimée par la sévérité CT. Si l'alertes concerne plusieurs vulnérabilités, les scores CVSS min et max sont indiqués.
- **Titre** : Titre de l'alerte, avec référence éditeur si disponible.
- **Description** : Description synthétique, avec lien(s) vers informations détaillées.
- **Service(s)** : Service(s) Cloud Temple pouvant être concerné(s).
- **Sévérité** : Niveau de sévérité dans le contexte des services Cloud Temple (pour la vulnérabilité la plus critique en cas de vulnérabilités multiples). Les critères d'exploitation sont pris en compte dans le contexte technique de nos infrastructures et services Cloud.

| Niveau | Description |
|--------|-------------|
| 🔴 **Critique** | Vulnérabilité CVSS 7+ présentant un risque d'exploitation important (forte exposition, facilité d'exploitation). Une correction ou mitigation dans les meilleurs délais est fortement recommandée.|
| 🟠 **Important** | Vulnérabilité CVSS 7+ ne présentant pas de risque d'exploitation important (exposition limitée ou contraintes d'exploitation) |
| 🟡 **Modérée** | Vulnérabilité CVSS 4+ |
| 🔵 **Faible** | Vulnérabilité CVSS inférieur à 4, ou non exploitable. |

- **Traitement** : Informations et recommandations dans le contexte des services Cloud Temple. Le symbole ⚠️ indique qu'une action des utilisateurs des services cloud est requise.