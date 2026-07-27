---
title: Vue d'ensemble
---

import archiOverview1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import archiOverview from '@site/docs/managed_kubernetes/images/archi_overview.png'

# Managed Kubernetes

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

**Managed Kubernetes** by Cloud Temple est une solution d’orchestration de conteneurs basée sur des standards open source (CNCF). Elle est conçue pour offrir un haut niveau de sécurité, de résilience et d’automatisation sur les plateformes SecNumcloud de Cloud Temple. Chaque cluster est déployé dans un environnement IaaS Cloud-Temple entièrement dédié au client.

Afin de répondre au mieux aux besoins de vos équipes, nous proposons deux déclinaisons de ce produit : **Managed Core Kubernetes** (un socle minimaliste) et **Managed Kubernetes** (une plateforme complète "prête à l'emploi").

---

## Deux approches pour vos clusters

### 1. Managed Core Kubernetes (Le socle minimaliste)
Cette offre est conçue pour les équipes ayant une **excellente maîtrise de Kubernetes** et des outils Cloud Native, qui souhaitent construire leur propre plateforme sur des fondations minimalistes et robustes. Elle s'adresse aux adeptes de l'open source qui recherchent une solution épurée, portable, sans surcouche constructeur, sur un OS minimaliste et immuable conçu pour l’automatisation et la sécurité.

- **OS et Réseau inclus** : Talos OS, Rook-Ceph (stockage), Cilium (CNI), MetalLB (Load Balancer).
- **Philosophie** : À partir de ce socle performant et standardisé, vous êtes libre d'intégrer vos propres outils de déploiement continu, d'observabilité, de sauvegarde ou de sécurité.

### 2. Managed Kubernetes (La plateforme complète)
Cette offre clé en main est conçue pour les équipes souhaitant une solution **native, prête à l'emploi et tout-en-un**, intégrant les meilleurs standards open source pour couvrir tous les besoins du cycle de vie applicatif sans avoir à assembler et maintenir les composants soi-même.

En plus du socle "Core" (Talos, Ceph, Cilium, MetalLB), elle intègre nativement :
- **Réseau et Sécurité** : Hubble, Ingress Nginx, Kyverno, Capsule, Cert-Manager.
- **Déploiement Continu (GitOps)** : ArgoCD, Container registry Harbor, Keda
- **Observabilité** : Stack complète (Prometheus, Grafana, Loki, Pyroscope).
- **Gestion des Coûts (FinOps)** : OpenCost.
- **Sauvegarde et Réversibilité** : Veeam Kasten.
- **Identité** : Authentification SSO avec un Identity Provider Externe OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...).

---

## Bénéfices Clés Communs

Quelle que soit l'offre choisie, nos clusters Kubernetes partagent ces bénéfices fondamentaux :

- **Souveraineté et Réversibilité** : La solution s'appuie sur des standards open source pour éviter toute dépendance technologique (*vendor lock-in*) et garantir la portabilité totale de vos applications. (Avec Veeam Kasten inclus dans la version complète pour faciliter les migrations inter-cloud).
- **Sécurité "Zero-Trust" by design** : L'architecture repose sur **Talos OS**, un système d'exploitation Linux immuable et éphémère conçu spécifiquement pour Kubernetes. Il ne dispose d'aucun accès direct (ni shell, ni SSH), ce qui réduit drastiquement la surface d'attaque.
- **Maîtrise des Coûts** : Le modèle économique est transparent, basé exclusivement sur les ressources IaaS sous-jacentes consommées, sans coût de licence additionnel pour l'orchestrateur.

---

## Architectures de Déploiement

Nous proposons deux architectures distinctes pour répondre à vos besoins, que ce soit pour des environnements de développement ou de production critiques. Ces architectures s'appliquent aux deux offres (Core et Full).

### Architecture "Dev/Test"

Idéale pour les environnements de POC, cette architecture compacte déploie toutes les ressources au sein d'une seule zone de disponibilité (AZ).

- **Cas d'usage** : Développement, tests, proof-of-concept (POC).
- **Points clés** :
  - 1 nœud Control Plane.
  - 3 nœuds Workers (ou plus).
  - Le stockage distribué (Ceph) est co-localisé sur les nœuds workers.
  - Ne bénéficie pas de SLA de haute disponibilité.
  - Aucune restriction de sécurité spécifique à l'architecture.

<img src={archiOverview1az} alt="Architecture Mono-AZ" />

### Architecture Production (Multi-AZ)

Conçue pour la production et les applications critiques, cette architecture distribue les ressources sur trois zones de disponibilité (AZ) pour garantir une haute disponibilité et une résilience maximale, conformément aux exigences SecNumCloud.

- **Cas d'usage** : Applications de production, services critiques, plateformes nécessitant un SLA.
- **Points clés** :
  - **Haute Disponibilité** : 3 nœuds Control Plane répartis sur 3 AZ.
  - **Stockage Dédié** : 3 nœuds de stockage dédiés et répartis pour la performance et la résilience.
  - **Workers Répartis** : Au minimum 3 nœuds workers, un par AZ.
  - **Nœuds Bare Metal (Optionnel)** : Intégration possible de nœuds workers de type **"Bare Metal"** pour des besoins de performance spécifiques, notamment le **support des GPU**.
  - **SLA de 99.95%**, mesuré mensuellement.

<img src={archiOverview} alt="Architecture Multi-AZ" />
