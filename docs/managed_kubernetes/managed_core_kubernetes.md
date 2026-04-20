---
title: Vue d'ensemble
---
import archiOverview1az from './images/archi_overview_1az.png'
import archiOverview from './images/archi_overview.png'

# Managed Core Kubernetes

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Découvrez les bases et principes essentiels pour maîtriser notre infrastructure.</p>
    <a href="./managed_kubernetes/concepts" class="card-link">Explorer les concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Guide de démarrage</h3>
    <p>Commencez rapidement en suivant des instructions claires et simples.</p>
    <a href="./managed_kubernetes/quickstart" class="card-link">Lancer le Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutoriels</h3>
    <p>Apprenez étape par étape à configurer et utiliser nos services avec des guides détaillés.</p>
    <a href="./managed_kubernetes/tutorials" class="card-link">Découvrir les tutoriels &rarr;</a>
  </div>
</div>

Managed **Core** Kubernetes by Cloud Temple est une solution d’orchestration de conteneurs reposant sur une sélection de produits Open Source, conçue pour offrir un socle de base sécurisé, résilient et automatisé sur les plateformes SecNumCloud de Cloud Temple. Chaque cluster est déployé dans un environnement IaaS Cloud-Temple entièrement dédié au client.

ce produit est conçue pour les équipes ayant une excellente maîtrise de Kubernetes et des outils Cloud Native, qui souhaitent construire leur propre plateforme sur des fondations minimalistes et robustes. Elle s'adresse aux adeptes de l'open source qui recherchent une solution épurée, portable, sans surcouche constructeur, sur un OS minimaliste et immuable conçu pour l’automatisation et la sécurité.

### Bénéfices Clés

- **Souveraineté et Réversibilité** : La solution s'appuie exclusivement sur des standards open source (Kubernetes CNCF) pour éviter toute dépendance technologique et garantir la portabilité de vos applications.
- **Sécurité "Zero-Trust" by design** : L'architecture repose sur Talos OS, un système d'exploitation immuable sans accès direct (ni shell, ni SSH), ce qui réduit drastiquement la surface d'attaque et constitue une base solide pour une stratégie de sécurité "Zero-Trust".
- **Fondations réseau modernes** : L'intégration de Cilium pour le CNI et MetalLB pour l'exposition des services fournit une base réseau performante et standard, prête à accueillir vos propres briques de sécurité et de filtrage.

### Une plateforme de base prête à être étendue

L'offre "Managed Core" inclut nativement une stack minimale et cohérente d'outils open source de pointe pour vous fournir les fondations d'un cluster Kubernetes :

- **OS et Réseau** : Talos, Cilium, MetalLB

A partir de ce socle, vous êtes libre d'intégrer vos propres outils pour le déploiement continu, l'observabilité, la sauvegarde et la gestion des coûts.

---

## Architectures de Déploiement

Nous proposons deux architectures distinctes pour répondre à vos besoins, que ce soit pour des environnements de développement ou de production critiques.

### Architecture "Dev/Test"

Idéale pour les environnements de POC, cette architecture compacte déploie toutes les ressources au sein d'une seule zone de disponibilité (AZ).

- **Cas d'usage** : Développement, tests, proof-of-concept (POC).
- **Points clés** :
  - 1 nœud Control Plane.
  - 3 nœuds Workers (ou plus).
  - Ne bénéficie pas de SLA de haute disponibilité.
  - aucune restriction de sécurité

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Architecture Production (Multi-AZ)

Conçue pour la production et les applications critiques, cette architecture distribue les ressources sur trois zones de disponibilité (AZ) pour garantir une haute disponibilité et une résilience maximale, conformément aux exigences SecNumCloud.

- **Cas d'usage** : Applications de production, services critiques, plateformes nécessitant un SLA.
- **Points clés** :
  - **Haute Disponibilité** : 3 nœuds Control Plane répartis sur 3 AZ.
  - **Workers Répartis** : Au minimum 3 nœuds workers, un par AZ.
  - **Nœuds Bare Metal (Optionnel)** : Intégration possible de nœuds workers de type **"Bare Metal"** pour des besoins de performance spécifiques, notamment le **support des GPU**.
  - **SLA de 99.90%**, mesurée mensuellement.

<img src={archiOverview} alt="Architecture Multi-AZ" />

---

### Composants techniques inclus

L'offre "Managed Core" inclut les composants suivants:

- **Système d'exploitation** : Talos OS
- **Stockage** : Rook-Ceph
- **CNI (Container Network Interface)** : Cilium
- **Load Balancer** : MetalLB
