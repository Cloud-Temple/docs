---
title: Vue d'ensemble
---

# Managed Kubernetes

Managed Kubernetes by Cloud Temple est une solution d’orchestration de conteneurs basée sur des produits OpenSources et conçue pour offrir un haut niveau de sécurité, de résilience et d’automatisation sur les plateformes SecNumcloud de Cloud Temple.
Chaque cluster est déployé dans un environnement IaaS Cloud-Temple (VMware ou OpenIaaS) entièrement dédié au client.

L'offre inclus:

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
- (optionnel): Authentification Entra avec SSO

2 types de déploiements sont proposés:

- mono-AZ, pour les environnements hors production (sans SLA), avec 1 Control Plane et un stockage colocalisé sur les 3 (ou plus) workers nodes
- multi-AZ, pour les environnements de production avec SLA, avec 3 Control planes, 3 noeuds de stockage dédiés, et 3 (ou +) workers

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Découvrez les bases et principes essentiels pour comprendre et maîtriser notre infrastructure.</p>
    <a href="managed_kubernetes/concepts" class="card-link">Explorer les concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Quickstart</h3>
    <p>Commencez rapidement avec nos ressources en suivant des instructions claires et simples.</p>
    <a href="managed_kubernetes/quickstart" class="card-link">Lancer le Quickstart &rarr;</a>
  </div>
    <div class="card">
    <h3>Tutorials</h3>
    <p>Apprenez étape par étape à configurer et utiliser nos services avec des guides détaillés.</p>
    <a href="managed_kubernetes/tutorials" class="card-link">Découvrir les tutoriels &rarr;</a>
  </div>
</div>
