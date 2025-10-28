# Contexte Managed Kubernetes - Memory Bank

## État Actuel (`/docs/managed_kubernetes/`)

### Statut : ✅ BON (85% complet)

**Managed Kubernetes** est une offre de Kubernetes pur, open source, entièrement managée par Cloud Temple et hébergée sur notre infrastructure souveraine.

## Architecture du Service

### Composants Clés
- **OS** : Talos Linux (immuable, sans shell/SSH, gestion par API).
- **Déploiements** : Architectures Mono-AZ (développement/test) et Multi-AZ (production, HA, SLA).
- **Réseau** : Cilium avec Hubble pour l'observabilité.
- **Ingress** : MetalLB et Nginx.
- **Stockage** : Rook-Ceph pour le stockage distribué.
- **Sécurité** : Kyverno pour les politiques, Capsule pour le multi-tenancy, Harbor pour le scan d'images.
- **GitOps** : ArgoCD pour le déploiement continu.
- **Observabilité** : Stack Prometheus complète (Grafana, Loki).
- **Sauvegarde** : Veeam Kasten pour la sauvegarde et la réversibilité.
- **FinOps** : KubeCost pour le suivi des coûts.

## Documentation Existante

### Pages Principales ✅
| Fichier | Contenu | Complétude |
|---|---|---|
| `managed_kubernetes.md` | Vue d'ensemble, bénéfices stratégiques, architectures | 95% |
| `concepts.md` | Description technique détaillée de tous les composants | 100% |
| `quickstart.md` | Guide de démarrage pour la connexion au cluster | 100% |
| `tutorials.md` | Tutoriel "Hello World" pour un premier déploiement | 60% |

### Document Contractuel ✅
| Fichier | Contenu | Complétude |
|---|---|---|
| `contractual/kubernetes/raci.md` | Matrice de responsabilités détaillée | 100% |

## Recommandations d'Amélioration

### Court Terme
1.  **Enrichir les Tutoriels** : Ajouter des guides pratiques sur des sujets clés :
    - Configuration d'une `StorageClass` avec Rook-Ceph.
    - Application d'une politique de sécurité simple avec Kyverno.
    - Utilisation de Harbor pour scanner une image.
2.  **Détailler le Pricing** : Créer une section ou une page dédiée au modèle de coût (facturation des nœuds, du stockage, des licences Veeam Kasten, etc.).

### Moyen Terme
1.  **Tutoriels Avancés** : Scénarios de sauvegarde/restauration avec Veeam Kasten, configuration d'un pipeline GitOps avec ArgoCD.
2.  **Intégration Console** : Documenter comment le service Managed Kubernetes apparaît et est géré (même de manière limitée) depuis la console Shiva.
