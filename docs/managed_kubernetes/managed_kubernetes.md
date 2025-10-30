---
title: Vue d'ensemble
---

# Managed Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Découvrez les bases et principes essentiels pour maîtriser notre infrastructure.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Explorer les concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Guide de démarrage</h3>
    <p>Commencez rapidement en suivant des instructions claires et simples.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Lancer le Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutoriels</h3>
    <p>Apprenez étape par étape à configurer et utiliser nos services avec des guides détaillés.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Découvrir les tutoriels &rarr;</a>
  </div>
</div>

Managed Kubernetes by Cloud Temple est une solution d’orchestration de conteneurs basée sur des produits OpenSources et conçue pour offrir un haut niveau de sécurité, de résilience et d’automatisation sur les plateformes SecNumcloud de Cloud Temple. Chaque cluster est déployé dans un environnement IaaS Cloud-Temple OpenIaaS entièrement dédié au client.

Cette offre est conçue pour les experts Kubernetes et les adeptes de l'open source qui recherchent une solution native, portable, sans surcouche constructeur, sur un OS minimaliste et immuable conçu pour l’automatisation et la sécurité.

### Bénéfices Clés
- **Souveraineté et Réversibilité** : La solution s'appuie sur des standards open source (Kubernetes CNCF) pour éviter toute dépendance technologique et garantir la portabilité de vos applications. L'outil de sauvegarde Veeam Kasten, inclus dans l'offre, est spécialement conçu pour faciliter les migrations d'un cloud à un autre.
- **Sécurité "Zero-Trust" et Gouvernance** : L'architecture repose sur Talos OS, un système d'exploitation immuable sans accès direct (ni shell, ni SSH), ce qui réduit drastiquement la surface d'attaque. Cette approche est couplée à des outils de gouvernance comme Kyverno pour la gestion des politiques et Capsule pour la gestion fine des droits, constituant une base solide pour une stratégie de sécurité "Zero-Trust".
- **Maîtrise des Coûts et Intégration** : La solution intègre nativement des outils de FinOps comme KubeCost pour un suivi précis des consommations. Le modèle économique est transparent, basé sur les ressources IaaS consommées, et l'utilisation de composants open source reconnus (Cilium, Ceph, ArgoCD) facilite l'intégration dans vos écosystèmes existants.

### Une plateforme complète et prête à l'emploi
La solution inclut nativement une stack complète et cohérente d'outils open source de pointe pour couvrir tous les besoins du cycle de vie applicatif :

- **Réseau et Sécurité** : Cilium, Hubble, Kyverno, Capsule
- **Stockage** : Rook-Ceph
- **Déploiement Continu (GitOps)** : ArgoCD
- **Observabilité** : Prometheus, Grafana, Loki
- **Sauvegarde et Migration** : Veeam Kasten
- **Gestion des Coûts (FinOps)** : KubeCost

---

## Architectures de Déploiement

Nous proposons deux architectures distinctes pour répondre à vos besoins, que ce soit pour des environnements de développement ou de production critiques.

### Architecture "Dev/Test"

Idéale pour les environnements hors production, cette architecture compacte déploie toutes les ressources au sein d'une seule zone de disponibilité (AZ). Elle est conçue pour l'agilité et la maîtrise des coûts.

- **Cas d'usage** : Développement, tests, proof-of-concept (POC).
- **Points clés** :
    - 1 nœud Control Plane.
    - 3 nœuds Workers (ou plus).
    - Le stockage distribué (Ceph) est co-localisé sur les nœuds workers.
    - Ne bénéficie pas de SLA de haute disponibilité.
    - aucune restriction de sécurité

<img src={require('./images/archi_overview_1az.png').default} alt="Architecture Mono-AZ" />

### Architecture Production (Multi-AZ)

Conçue pour la production et les applications critiques, cette architecture distribue les ressources sur trois zones de disponibilité (AZ) pour garantir une haute disponibilité et une résilience maximale, conformément aux exigences SecNumCloud.

- **Cas d'usage** : Applications de production, services critiques, plateformes nécessitant un SLA.
- **Points clés** :
    - **Haute Disponibilité** : 3 nœuds Control Plane répartis sur 3 AZ.
    - **Stockage Dédié** : 3 nœuds de stockage dédiés et répartis pour la performance et la résilience.
    - **Workers Répartis** : Au minimum 3 nœuds workers, un par AZ.
    - **SLA de 99,95%**.

<img src={require('./images/archi_overview.png').default} alt="Architecture Multi-AZ" />

---

### Composants techniques détaillés
L'offre inclus en détail les composants suivants:

- CNI Cillium, avec interface d'observabilité (Hubble)
- Ingresses internes et externes MetalLB et nginx
- Stockage distribué Rook-Ceph
- Cert-Manager
- ArgoCD
- Stack prometheus (Prometheus, Grafana, Promtail, Loki)
- Container registry Harbor
- Cost management avec KubeCost
- Stratégies de sécurité avancée avec Kyverno et Capsule
- Veeam Kasten (sauvegarde, automatisations inter-environnements et réversibilité)
- (optionnel): Authentification SSO avec un Identity Provider Externe OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...)
