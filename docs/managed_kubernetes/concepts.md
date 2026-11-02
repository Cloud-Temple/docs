---
title: Concepts
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'

<a id="nos-offres-managed-kubernetes"></a>

## Présentation

Managed Kubernetes est une plateforme d'orchestration de conteneurs entièrement managée, basée sur des standards open source validés par la CNCF. Chaque cluster est déployé dans un environnement dédié au client, sur une zone de disponibilité unique ou sur trois. La plateforme est livrée prête à l'emploi, avec une stack complète pour le réseau, la sécurité, le stockage, le déploiement continu, l'observabilité, la sauvegarde et la gestion des coûts.

Pour les équipes qui préfèrent construire leur propre plateforme sur un socle minimal, l'offre [Managed Core Kubernetes](../managed_core_kubernetes/concepts.md) fournit uniquement les composants de base.

### Tableau comparatif des offres

| Composant                        | Managed Core Kubernetes | Managed Kubernetes          |
| -------------------------------- | ----------------------- | --------------------------- |
| **OS**                           | ✅Talos                 | ✅Talos                     |
| **CNI**                          | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                | ✅MetalLB               | ✅MetalLB                   |
| **Stockage distribué**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Stockage local**               | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Observabilité CNI**            | ❌                      | ✅Hubble                    |
| **Ingress**                      | ❌                      | ✅Ingress Nginx             |
| **Observabilité**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Sauvegarde et Migration**      | ❌                      | ✅Veeam Kasten              |
| **Gouvernance et Sécurité**      | ❌                      | ✅Kyverno, Capsule          |
| **Gestion des certificats**      | ❌                      | ✅Cert-Manager              |
| **Déploiement Continu (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container Registry**           | ❌                      | 🔵Harbor                    |
| **Authentification SSO**         | ❌                      | 🔵Intégration OIDC          |
| **Autoscaling de pods**          | ❌                      | 🔵Keda                      |
| **Gestion des Coûts (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Observabilité (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : inclus
🔵 : optionnel/désactivable
❌ : non inclus

### Publics et cas d'usage

Managed Kubernetes s'adresse aux équipes DevOps, aux développeurs d'applications cloud-native, aux architectes qui migrent vers des architectures conteneurisées, et aux organisations publiques ou réglementées. Cas d'usage typiques :

- **Applications cloud-native** : architectures microservices.
- **Migration vers les conteneurs** : modernisation progressive d'applications existantes.
- **CI/CD avancé** : pipelines de déploiement automatisés en GitOps.
- **Environnements multiples** : séparation développement, test et production.
- **Applications critiques** : haute disponibilité sur trois zones de disponibilité.
- **Conformité réglementaire** : déploiements soumis à des exigences de souveraineté.

## Avantages

| Avantage                      | Description                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Entièrement managé            | Configuration, déploiement et cycle de vie du cluster sont pris en charge.                                         |
| Haute disponibilité           | En production, le cluster est réparti sur trois zones de disponibilité.                                            |
| Sécurité by design            | OS minimaliste et immuable, géré uniquement par API, sans shell ni accès SSH.                                      |
| Plateforme prête à l'emploi   | Réseau, observabilité, sauvegarde, gouvernance et certificats sont intégrés dès la livraison.                      |
| Compatible CNCF               | Les standards open source évitent la dépendance technologique et garantissent la portabilité de vos applications. |

<a id="présentation-des-produits-managed-core-kubernetes"></a>

## Fonctionnalités

Les clusters reposent sur Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un système d'exploitation dédié à Kubernetes, léger et sécurisé. Il est immuable, sans shell ni accès SSH, et configuré uniquement de manière déclarative via une API gRPC. L'installation standardisée inclut un ensemble de composants, majoritairement open source et validés par la CNCF.

### Réseau et exposition des services

- **CNI Cilium**, avec l'interface d'observabilité **Hubble** : Cilium gère la mise en réseau des conteneurs (*Container Network Interface*) : sécurité, load balancing, service mesh, observabilité, chiffrement. L'interface graphique **Hubble** permet de visualiser les flux Cilium.

  <img src={cillium} />

- **MetalLB** et **nginx** : pour l'exposition des applications web, trois *ingress-class* **nginx** sont intégrées :
  - *nginx-external-secured* : exposition sur une IP publique, filtrée sur le pare-feu pour n'autoriser que des IP connues (utilisée pour les interfaces graphiques des différents produits et pour l'API Kubernetes) ;
  - *nginx-external* : exposition sur une seconde IP publique non filtrée (ou avec un filtrage propre au client) ;
  - *nginx-internal* : exposition sur une IP interne uniquement.

  Pour les services « non web », le load-balancer **MetalLB** expose des services en interne ou sur des IP publiques, ce qui permet de déployer d'autres ingress, par exemple un WAF.

> Note : la version open source de nginx utilisée est celle *maintenue par F5 Networks*, et non la version d'origine, dépréciée.

### Stockage

- **Stockage distribué Rook-Ceph** : stockage **Ceph** open source pour les volumes persistants (PV). Il fournit les *storage-classes* *ceph-block* (bloc, répliqué multi-zones), *ceph-block-norepl* (bloc, non répliqué) et *ceph-filesystem* (fichier, répliqué multi-zones). Le stockage utilisé offre **7 500 IOPS**.
- **Stockage local TopoLVM** (optionnel) : la *storage-class* *topolvm-ssd* stocke localement des données *sur les Worker nodes*. Cette option est utile pour les applications qui répliquent elles-mêmes leurs données (Kafka, MongoDB, PostgreSQL…) et bénéficient d'un stockage ultra-rapide, à faible latence. Elle sert généralement à dédier des *Worker nodes* à une charge de travail spécifique.

### Observabilité

La stack open source **Prometheus** est livrée en standard :

- **Prometheus**, pour la collecte des métriques ;
- **Grafana**, avec de nombreux tableaux de bord ;
- **Loki** : les journaux de la plateforme sont exportés vers le Stockage Objet Cloud Temple et intégrés dans Grafana ;
- **Pyroscope** (optionnel) : plateforme de profilage en continu, interrogeable via un LLM.

<img src={grafana} />

### Gouvernance et sécurité

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) : contrôleur d'admission qui applique des stratégies de sécurité et de gouvernance.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) : gestion des permissions avec la notion de *tenant*, qui centralise et délègue des droits sur plusieurs namespaces. Les utilisateurs de la plateforme disposent ainsi de droits restreints à leurs seuls namespaces.
- **Cert-Manager** : gestionnaire de certificats open source intégré nativement.
- **Authentification SSO** (optionnel) : intégration avec un fournisseur d'identité externe OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Déploiement et automatisation

- **ArgoCD** (optionnel) : déploiements automatisés en GitOps, au sein d'une chaîne **CI/CD**.
- **Harbor** (optionnel) : **registre de conteneurs** qui stocke les images de vos conteneurs et vos charts Helm directement dans le cluster. Il effectue des **scans de vulnérabilités** sur vos images et se synchronise avec d'autres registres ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (optionnel) : autoscaling des pods à partir de métriques avancées, par exemple un nombre de connexions HTTP.
- **OpenCost** (optionnel, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)) : suivi FinOps de la consommation des ressources Kubernetes et refacturation par projet ou namespace.

### Sauvegarde

**Veeam Kasten** (aussi appelé K10) sauvegarde un déploiement complet (manifestes, volumes…) vers le Stockage Objet Cloud Temple. Il s'appuie sur **Kanister** pour des sauvegardes applicatives cohérentes, par exemple pour les bases de données ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architecture

### Production (multi-zonal)

<img src={archi_overview} />

Le cluster de production est réparti sur trois zones de disponibilité :

- **Control Plane** : trois nœuds, un par zone ;
- **nœuds de stockage** : trois nœuds Rook-Ceph dédiés, un par zone ;
- **nœuds Worker** : au moins trois, un par zone, ajustables selon vos besoins ;
- **nœuds Worker Bare Metal** (optionnel) : pour des besoins de performance spécifiques, notamment les GPU ;
- **Git Runner** : un nœud pour les pipelines CI/CD ;
- **pare-feu managé** : deux machines virtuelles, qui filtrent les IP publiques de l'API Kubernetes et des ingress sécurisés.

### Dev/test (mono ou dual zone)

<img src={archi_overview_1az} />

Le cluster de développement et de test est déployé sur une seule zone de disponibilité, avec un Control Plane, trois nœuds Worker au minimum et un Git Runner. Le stockage Ceph est mutualisé sur les nœuds Worker.

### Intégrations

- **Stockage Objet Cloud Temple** : journaux (Loki) et sauvegardes (Kasten).
- **Fournisseurs d'identité** : intégration optionnelle via OIDC.
- **IaaS Cloud Temple** : interconnexion des clusters avec des ressources virtualisées, comme des bases de données ou des composants middleware.

## Régions et zones de disponibilité

Managed Kubernetes est disponible dans la région FR1. Un cluster de production est réparti sur trois zones de disponibilité ; un cluster de développement et de test est déployé sur une seule. Les données sont hébergées en France.

<a id="noeuds-kubernetes"></a>

## Caractéristiques techniques

### Nœuds d'un cluster de production

| **AZ** | **Machine**         | **vCores** | **RAM** | **Stockage local**                    |
| ------ | ------------------- | ---------- | ------- | ------------------------------------- |
| AZ07   | Git Runner          | 4          | 8 Go    | OS: 256 Go                            |
| AZ05   | Control Plane 1     | 8          | 12 Go   | OS: 64 Go                             |
| AZ06   | Control Plane 2     | 8          | 12 Go   | OS: 64 Go                             |
| AZ07   | Control Plane 3     | 8          | 12 Go   | OS: 64 Go                             |
| AZ05   | Storage Node 1 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go minimum (***) |
| AZ06   | Storage Node 2 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go minimum (***) |
| AZ07   | Storage Node 3 (**) | 12         | 24 Go   | OS: 64 Go + Ceph 500 Go minimum (***) |
| AZ05   | Worker Node 1 (*)   | 12         | 24 Go   | OS: 64 Go                             |
| AZ06   | Worker Node 2 (*)   | 12         | 24 Go   | OS: 64 Go                             |
| AZ07   | Worker Node 3 (*)   | 12         | 24 Go   | OS: 64 Go                             |

(*) : la taille et le nombre des Worker Nodes s'adaptent à votre besoin en capacité de calcul. Il est recommandé d'augmenter leur nombre par lot de 3 pour conserver une distribution multi-zonale cohérente, et d'avoir des Worker Nodes de taille identique, comme le conseille la CNCF.

(**) : la taille des Storage Nodes peut être augmentée en fonction de la taille du stockage Ceph associé (par exemple 24 cœurs et 128 Go de RAM pour 10 To de Ceph).

(***) : chaque nœud de stockage est livré avec au minimum 500 Go d'espace disque, pour un stockage utile Ceph distribué de 500 Go (les données sont répliquées sur chaque zone, donc trois fois). L'espace libre disponible pour le client est d'environ 350 Go. Cette taille initiale peut être augmentée à la construction ou plus tard. Des quotas sont appliqués sur Ceph, avec une répartition bloc / fichier.

### Nœuds d'un cluster de développement et de test

| **AZ** | **Machine**       | **vCores** | **RAM** | **Stockage local**                   |
| ------ | ----------------- | ---------- | ------- | ------------------------------------ |
| AZ0n   | Git Runner        | 4          | 8 Go    | OS: 256 Go                           |
| AZ0n   | Control Plane     | 8          | 12 Go   | OS: 64 Go                            |
| AZ0n   | Worker Node 1 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go minimum (**) |
| AZ0n   | Worker Node 2 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go minimum (**) |
| AZ0n   | Worker Node 3 (*) | 12         | 24 Go   | OS: 64 Go + Ceph 300 Go minimum (**) |

(*) : la taille et le nombre des Worker Nodes s'adaptent à votre besoin. Le minimum de trois Worker Nodes est imposé par la réplication du stockage.

(**) : trois Worker Nodes servent de nœuds de stockage et sont livrés avec au minimum 300 Go d'espace disque, pour un stockage utile distribué de 300 Go (les données sont répliquées trois fois). L'espace libre disponible pour le client est d'environ 150 Go. Cette taille initiale peut être augmentée à la construction ou plus tard.

### Limites

| Paramètre                          | Production                         | Développement et test              |
|------------------------------------|------------------------------------|------------------------------------|
| Nombre de Worker Nodes             | 3 minimum (1 par zone), 100 maximum | 3 minimum, 250 maximum            |
| Taille minimale d'un Worker Node   | 12 cœurs, 24 Go de RAM             | 12 cœurs, 24 Go de RAM             |
| Taille maximale d'un Worker Node   | Taille de l'hyperviseur, jusqu'à 112 cœurs et 1 536 Go de RAM (lames Performance 3) | Idem |
| Pods par Worker Node               | 110                                | 110                                |

## Sécurité et conformité

Managed Kubernetes est certifié HDS et ISO 27001, et disponible sur des services qualifiés SecNumCloud et conformes C5.

- **OS immuable** : sans shell ni accès SSH, géré uniquement par API.
- **Chiffrement** : données chiffrées au repos et en transit, chiffrement physique des liens entre zones de disponibilité.
- **Gouvernance** : politiques Kyverno, permissions par tenant avec Capsule, journal d'audit complet.
- **Résidence des données** : France (FR1), dans des formats Kubernetes standards.

## Sauvegarde et continuité

- **Sauvegarde des workloads** : Veeam Kasten sauvegarde vos déploiements (manifestes et volumes) vers le Stockage Objet Cloud Temple, avec des sauvegardes applicatives cohérentes.
- **Réplication du stockage** : en production, les volumes Ceph répliqués sont copiés sur les trois zones de disponibilité.
- **Haute disponibilité** : en production, le Control Plane et les nœuds de stockage sont répartis sur trois zones.

<a id="politique-de-versions--cycle-de-vie"></a>

## Versions et cycle de vie

- **Kubernetes supporté :** N-2 (trois releases majeures par an, environ tous les quatre mois). Chaque release est supportée officiellement 12 mois, soit une fenêtre de support d'environ 16 mois maximum par version.
- **Talos OS :** aligné sur les versions stables de Kubernetes.
  - Chaque branche est maintenue environ 12 mois, patchs de sécurité inclus.
  - Rythme d'upgrade recommandé : trois fois par an, en cohérence avec les upgrades Kubernetes.
  - Les patchs critiques (CVE, noyau) sont appliqués en rolling upgrade, sans interruption de service.
- **Mises à jour :**
  - **majeures** (Kubernetes N+1, Talos X+1) : planifiées trois fois par an, en rolling update ;
  - **mineures** : appliquées automatiquement dans un délai de 30 à 60 jours.
- **Dépréciation :** la version N-3 arrive en fin de support 90 jours après la sortie de la version N.

<a id="sla--information-sur-le-support"></a>

## Disponibilité du service

| Élément                     | Objectif de disponibilité, mesuré sur un mois |
|-----------------------------|-----------------------------------------------|
| Cluster de production (API Kubernetes) | 99,95 %                            |
| Stockage de production (volumes Ceph)  | 99,90 %                            |

Les clusters de développement et de test n'ont pas d'objectif de disponibilité.

<a id="raci"></a>

## Responsabilités

La répartition des responsabilités entre le client et Cloud Temple est détaillée dans la [matrice de responsabilités (RACI) Managed Kubernetes](../contractual/kubernetes/raci.md). En synthèse :

- **Cloud Temple** est responsable du socle Kubernetes et des services managés : sécurité, sauvegarde du cluster, supervision, mises à jour et opérateurs inclus.
- **Le client** est responsable de ses projets applicatifs, de ses opérateurs métiers, de ses pipelines CI/CD et des sauvegardes de ses applications.
- **Support** : niveaux 1, 2 et 3 inclus pour le socle (infrastructure et opérateurs standards). Les délais de prise en charge dépendent de la sévérité de l'incident (P1 à P4).
- **Maintenance** : patching régulier de Talos, de Kubernetes et des opérateurs standards, en rolling upgrade, sans interruption de service.

## Réversibilité

Les clusters reposent sur des standards open source et des formats Kubernetes standards, ce qui garantit la portabilité de vos applications.

| Opération                | Livrable                    | Délai       | Coût       |
|--------------------------|-----------------------------|-------------|------------|
| Export des applications  | Manifestes YAML Kubernetes  | 15 jours    | Sans frais |
| Sauvegarde des volumes   | Sauvegardes Veeam Kasten    | En continu  | Inclus     |
| Assistance à la migration | Support technique          | Sur demande | Sur devis  |

**Veeam Kasten** fonctionne aussi avec d'autres clusters Kubernetes (OpenShift, hyperscalers…). Il peut donc servir à des scénarios de réversibilité ou de migration, en gérant les adaptations nécessaires via des *transformations* (par exemple un changement d'ingress-class), mais aussi de « refresh », comme la restauration planifiée d'un environnement de production en pré-production.

## Tarification

Le service managé est facturé mensuellement, par cluster ; l'infrastructure IaaS sous-jacente (compute, stockage, réseau) est facturée en complément, selon le dimensionnement. Les tarifs sont publiés sur la page produit du site Cloud Temple :
[Managed Kubernetes — tarifs](https://www.cloud-temple.com/produits/managed-kubernetes/).
