---
title: MCO/MCS
---

**Politique de Maintien en Conditions Opérationnelles (MCO) et de Maintien en Conditions de Sécurité (MCS) sur le PaaS OpenShift SNC **Cloud Temple****

## Préambule

Cette politique détaille les responsabilités et les recommandations pour le Maintien en Conditions Opérationnelles (MCO) et le Maintien en Conditions de Sécurité (MCS) de vos environnements sur le PaaS OpenShift SNC **Cloud Temple**.

---

## Maintien en Conditions Opérationnelles (MCO)

### Gestion et mise à jour des clusters

**Responsabilité **Cloud Temple** :**

- Gestion complète de l'infrastructure sous-jacente, incluant les nœuds maîtres, les mises à jour de versions OpenShift, et la résilience des services critiques déployés par **Cloud Temple**.
- Mises à jour mineures/patches automatiques sans interruption pour les charges de travail hébergées, sauf notification contraire.
- Limitation des droits et des fonctionnalités aux contraintes SecNumCloud.
- Communication des mises à jour à venir et des mises à jour de fractures sur les trois prochains mois via la [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Responsabilité de l'utilisateur :**

- Gestion des charges de travail déployées (applications, outils CI/CD) et de leurs configurations.
- Tests des mises à jour de charge de travail sur un environnement de staging avant déploiement en production.
- Assurance de la compatibilité des charges de travail avec les composants du cluster.

**Recommandation :**

- Planifier les déploiements applicatifs en dehors des fenêtres de maintenance pour éviter les conflits avec les mises à jour automatiques du cluster.
- Suivre les communications **Cloud Temple** concernant les mises à jour majeures pour planifier les ajustements nécessaires.
- Suivre les mises à jour à venir via la [**Roadmap produit**](https://github.com/orgs/Cloud-Temple/projects/2)
- S'abonner aux notifications [**d'incidents**](../../console/status.md#gestion-des-notifications)

---

### Supervision et monitoring

**Responsabilité **Cloud Temple** :**

- Supervision et monitoring de l'infrastructure et des services sous-jacents déployés par **Cloud Temple**.

**Responsabilité de l'utilisateur :**

- Supervision et monitoring de ses charges de travail.

**Recommandation :**

Utiliser les **outils natifs fournis :**

- Analyse des logs de performance et des événements via la console OpenShift.
- Configuration d'alertes personnalisées à partir des métriques du cluster et des pods via l'interface utilisateur.  
  
Configurer des seuils critiques d'alerte :

- **CPU/Mémoire** des pods : ≥ 80 %.
- **Espace disque sur les volumes persistants** : ≥ 85 %.
- **Échecs au démarrage des pods** : plus de X occurrences en 10 minutes.  
  
Automatiser l’escalade des alertes vers vos outils de gestion pour une réaction rapide.  

---

### Sauvegardes et restauration

Les composants critiques du cluster sont sauvegardés automatiquement par **Cloud Temple**. Les charges de travail et les données des utilisateurs nécessitent une gestion dédiée.

**Responsabilité **Cloud Temple** :**

- Mécanismes de redondance automatique au sein de l’infrastructure.
- Sauvegardes automatiques des configurations de cluster.

**Responsabilité de l'utilisateur :**

- Sauvegarder les données critiques des charges de travail en utilisant des solutions telles que l'offre **Kasten** disponible dans le catalogue **Cloud Temple**.

**Recommandation :**

- Mettre en place des politiques de sauvegarde régulières :
  - Sauvegardes automatiques des PV avec Kasten.
  - Sauvegarde quotidienne des configurations Kubernetes, secrets, et déploiements YAML.
- Tester régulièrement les restaurations pour valider les RPO.

---

## Maintien en Conditions de Sécurité (MCS)

### Gestion des secrets et des configurations

Utilisation des secrets OpenShift/Kubernetes et recommandation d'intégrer des systèmes de gestion centralisée des secrets.

**Responsabilité **Cloud Temple** :**

- La gestion des secrets et de la configuration de l'infrastructure et des services sous-jacents à l'offre est de la responsabilité de **Cloud Temple**.

**Responsabilité de l'utilisateur :**

- La gestion des secrets et de la configuration des charges de travail du **Client** est de la responsabilité du **Client**.
  
**Recommandation :**

- Ne pas stocker de secrets en texte clair dans les fichiers YAML.
- Utiliser des outils pour chiffrer les informations sensibles.

### Contrôle des accès (IAM)

La revue des accès se réalise par l'intermédiaire de la console Shiva et du module "User Management" de la console OpenShift.

Pour plus de détails sur cette fonctionnalité, se référer à notre [**guide**](../../console/iam/iam.md) et à la [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) de l'éditeur.

**Responsabilité **Cloud Temple** :**

- **Cloud Temple** est responsable de la gestion des comptes de service et d'administration.
- **Cloud Temple** est responsable de l'intégration au système d'identité **Cloud Temple** pour gérer les accès.
- **Cloud Temple** est responsable de la mise en place par défaut de la configuration **RBAC** et des restrictions des droits des utilisateurs initiales.
- **Cloud Temple** est responsable de la fourniture du système de **double authentification** et de son maintien pour renforcer les accès.
  
**Responsabilité de l'utilisateur :**

- Le **Client** doit contrôler régulièrement les accès de ses utilisateurs.
- Le **Client** est responsable de l'octroi des accès à ses utilisateurs et de leur onboarding dans le tenant.
- Le **Client** doit gérer ses utilisateurs dans le respect des limitations imposées par le système **Cloud Temple**.

### Gestion des vulnérabilités

Les vulnérabilités sur l'infrastructure et les services sous-jacents à l'offre seront communiquées dans le module incident.

**Responsabilité **Cloud Temple** :**

- **Cloud Temple** est responsable de la communication des vulnérabilités sur l'infrastructure et les services sous-jacents à l'offre dès leur détection via le module [**incident**](../../console/status.md) de la console SHIVA.
- **Cloud Temple** est responsable de l'application des correctifs sur ce périmètre.
- **Cloud Temple** est responsable de la mise à disposition d'outils pour analyser les vulnérabilités des images Docker. Par défaut, **Cloud Temple** met en place **[Quay]** pour effectuer le scan automatique des images Docker.

**Responsabilité de l'utilisateur :**

- Le **Client** est responsable de la détection et de la correction des vulnérabilités dans ses charges de travail.
- Le **Client** est responsable de mettre à niveau ses charges de travail pour permettre l'application des patchs de sécurité au plus vite.

**Recommandation :**

- Utiliser l'alerting du cluster fourni par **[Quay]** pour analyser les vulnérabilités et détecter les comportements anormaux dans les images utilisées par le **Client**.
- S'abonner aux notifications d'[**incidents**](../../console/status.md#gestion-des-notifications).

### Chiffrement

Garantie d'un chiffrement natif sur l'infrastructure **Cloud Temple**, avec recommandations pour les charges de travail.

**Responsabilité **Cloud Temple** :**

- Mécanismes de redondance au sein de l’infrastructure.
- Sauvegardes automatiques des configurations de cluster.

**Responsabilité de l'utilisateur :**

- Sauvegarder les données critiques des charges de travail en utilisant des solutions telles que l'offre **Kasten** disponible dans le catalogue **Cloud Temple**.
- S'assurer que les charges de travail utilisent les mécanismes de résilience et adapter les déploiements pour les mettre en œuvre.

**Recommandation :**

- Activer le **chiffrement TLS** pour toutes les communications intra-pod.
- Activer le **chiffrement TLS** pour toutes les communications entre les Offres PaaS et IaaS **Cloud Temple**.
- Assurer le chiffrement des données au repos via les solutions de stockage **Cloud Temple**.

### Journalisation et audit

Enregistrement automatique des événements critiques du cluster.

**Responsabilité **Cloud Temple** :**

- **Cloud Temple** est responsable de la journalisation et de l'audit de l'infrastructure et des services sous-jacents à l'offre.

**Responsabilité de l'utilisateur :**

- Le **Client** est responsable de la journalisation et de l'audit de ses charges de travail.
  
**Recommandation :**

- Configurer des pipelines pour centraliser et analyser les logs de vos charges de travail :
  - Utiliser des collecteurs, pour l'agrégation de logs, avec un outil de visualisation.
  - Intégrer les logs à votre **SIEM** (recommandé).

---

## Gestion des incidents et PCA (Plan de Continuité d’Activité)

**Responsabilité **Cloud Temple** :**

- **Cloud Temple** est responsable des mécanismes de redondance au sein de l’infrastructure.
- **Cloud Temple** est responsable des sauvegardes automatiques des configurations de cluster.
- **Cloud Temple** est responsable de la reprise de l'activité après incident sur l'infrastructure ou sur les services sous-jacents à l'offre.

**Responsabilité de l'utilisateur :**

- Le **Client** est responsable de sauvegarder les données critiques des charges de travail en utilisant des solutions telles que l'offre **Kasten** disponible dans le catalogue **Cloud Temple**.
- Le **Client** doit s'assurer que les charges de travail utilisent les mécanismes de résilience et doit adapter ses déploiements pour les mettre en œuvre.
- Le **Client** est responsable du PRA/PCA de ses charges de travail.

**Procédure "Reprise après sinistre"**

- En cas de perte complète d'accès à un cluster, le **Client** doit déclarer un incident auprès du support **Cloud Temple** via le module support de la console.
Voir la [**procédure de demande de support technique**](../../console/console_quickstart.md#accès-au-support-technique)

---

## Recommandations générales

1. **Planifier les ressources** : Assurer une capacité de cluster suffisante pour les charges de travail de pointe.
2. **Valider les configurations** : Tester les applications dans des environnements de staging avant déploiement en production.
3. **Surveiller régulièrement** : Utiliser les outils intégrés pour suivre l'utilisation des ressources et détecter les problèmes le plus tôt possible.
4. **Se tenir informé** : Suivre la roadmap et les guides pour éviter les fonctionnalités obsolètes.
5. **Contacter le support** : Pour les problèmes non résolus, contacter le support via la [**procédure de demande de support technique**](../../console/console_quickstart.md#accès-au-support-technique) ou par mail à l'adresse [**contact**](mailto:contact@cloud-temple.com).

Pour retrouver les responsabilités en détail, merci de prendre connaissance de notre [**matrice de responsabilité**](./raci.md).
