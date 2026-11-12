---
title: Concepts
---
import cillium from '@site/docs/managed_kubernetes/images/cillium.png'
import grafana from '@site/docs/managed_kubernetes/images/grafana.png'
import archi_overview from '@site/docs/managed_kubernetes/images/archi_overview.png'
import archi_overview_1az from '@site/docs/managed_kubernetes/images/archi_overview_1az.png'
import arch_hld from '@site/docs/managed_kubernetes/images/archmk-prod.png'
import arch_lld from '@site/docs/managed_kubernetes/images/archmck-prod-LLD-FR.png'
import cni_vs_node from '@site/docs/managed_kubernetes/tutorials/images/cni-vs-node.png'

:::info[Service managé, hors Console]

Managed Kubernetes se souscrit auprès des équipes Cloud Temple. Il ne se commande pas depuis la Console Cloud Temple, qui ne propose pour ce service ni vue ni API.

:::

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
| **Déploiement Continu (GitOps)** | ❌                      | ✅ArgoCD (désactivable)     |
| **Container Registry**           | ❌                      | ✅Harbor (désactivable)     |
| **Authentification SSO**         | ❌                      | ✅Intégration OIDC (désactivable) |
| **Autoscaling de pods**          | ❌                      | 🔵Keda                      |
| **Gestion des Coûts (FinOps)**   | ❌                      | ✅OpenCost (désactivable)   |
| **Observabilité (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : inclus
🔵 : optionnel
❌ : non inclus

Les composants marqués ✅ sont inclus dans l'offre. Ceux indiqués « désactivable » (ArgoCD, Harbor, OpenCost et l'authentification SSO) peuvent être désactivés.

### Publics et cas d'usage

Managed Kubernetes s'adresse aux équipes DevOps, aux développeurs d'applications cloud-native, aux architectes qui migrent vers des architectures conteneurisées, et aux organisations publiques ou réglementées. Cas d'usage typiques :

<<<<<<< HEAD
- **CNI Cilium**, avec interface d'observabilité (**Hubble**) : Cilium est une solution de mise en réseau pour les containers Kubernetes (*Container Network Interface*). Il gère la sécurité, le load balancing, le service mesh, l'observabilité, le chiffrement, etc... C'est un composant réseau fondamental que l'on retrouve dans la plupart des déclinaisons de Kubernetes (OpenShift, AKS, GKE, EKS,...). Dans **Managed Kubernetes**, nous avons inclus l'interface graphique **Hubble** pour une visualisation des flux Cilium.
  - **Gateway API** : les CRDs Gateway API (≥ v1.6.1) sont installées avant Cilium et sont requises par Cilium ≥ 1.20 pour l'API Gateway.

  <img src={cillium} />

  Le schéma ci-dessous illustre la distinction entre le réseau porté par le CNI (trafic pod ↔ pod) et le réseau des nœuds, ainsi que la manière dont Cilium encapsule le trafic entre nœuds :

  <img src={cni_vs_node} alt="Réseau CNI vs réseau des nœuds" />
- **MetalLB** et **nginx** : Pour l'exposition des applications Web, 3 *ingress-class* **nginx** sont intégrées de base:
=======
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
>>>>>>> origin/dev

- **MetalLB** et **nginx** : pour l'exposition des applications web, trois *ingress-class* **nginx** sont intégrées :
  - *nginx-external-secured* : exposition sur une IP publique, filtrée sur le pare-feu pour n'autoriser que des IP connues (utilisée pour les interfaces graphiques des différents produits et pour l'API Kubernetes) ;
  - *nginx-external* : exposition sur une seconde IP publique non filtrée (ou avec un filtrage propre au client) ;
  - *nginx-internal* : exposition sur une IP interne uniquement.

  Pour les services « non web », le load-balancer **MetalLB** expose des services en interne ou sur des IP publiques, ce qui permet de déployer d'autres ingress, par exemple un WAF.

> Note : la version open source de nginx utilisée est celle *maintenue par F5 Networks*, et non la version d'origine, dépréciée.

### Stockage

<<<<<<< HEAD
  - **Prometheus**, pour la collecte des métriques
  - **Grafana**, avec de nombreux dashboards
  - **Alloy** : agent de collecte de logs et de métriques (il remplace Promtail).
  - **Loki** : les journaux de la plateforme sont exportés vers le stockage S3 Cloud-Temple (et intégrés dans Grafana).
  - **Pyroscope** : (optionnel) plateforme de profilage en continu, interrogeable via LLM.
=======
- **Stockage distribué Rook-Ceph** : stockage **Ceph** open source pour les volumes persistants (PV). Il fournit les *storage-classes* *ceph-block* (bloc, répliqué multi-zones), *ceph-block-norepl* (bloc, non répliqué) et *ceph-filesystem* (fichier, répliqué multi-zones). Le stockage utilisé offre **7 500 IOPS**.
- **Stockage local TopoLVM** (optionnel) : la *storage-class* *topolvm-ssd* stocke localement des données *sur les Worker nodes*. Cette option est utile pour les applications qui répliquent elles-mêmes leurs données (Kafka, MongoDB, PostgreSQL…) et bénéficient d'un stockage ultra-rapide, à faible latence. Elle sert généralement à dédier des *Worker nodes* à une charge de travail spécifique.
>>>>>>> origin/dev

### Observabilité

La stack open source **Prometheus** est livrée en standard :

- **Prometheus**, pour la collecte des métriques ;
- **Grafana**, avec de nombreux tableaux de bord ;
- **Loki** : les journaux de la plateforme sont exportés vers le Stockage Objet Cloud Temple et intégrés dans Grafana ;
- **Pyroscope** (optionnel) : plateforme de profilage en continu, interrogeable via un LLM.

<img src={grafana} />

<<<<<<< HEAD
## Versions de référence (au 11/2026)

- **Kubernetes** : v1.36.6
- **Talos** : v1.13.12

Ces versions sont **une base**, celle du socle de référence à cette date : elles évoluent à chaque release du socle (correctifs de sécurité, montées de version). Les versions exactes déployées sur un cluster donné figurent dans le DAT de ce cluster. La politique de support des versions est décrite plus bas (« Politique de versions & cycle de vie »).

## Packages Helm managés (au 11/2026)

Le socle ci-dessous est déployé sur tout cluster Managed Kubernetes. Les versions sont une base, celle du template de référence à cette date ; un cluster en service peut être sur une version antérieure entre deux fenêtres de maintenance.

### Socle de la plateforme (toujours déployé)

| **Composant** | **Version** | **Dépôt** | **Rôle Principal** |
| --- | --- | --- | --- |
| **Cilium** | 1.20.4 | https://helm.cilium.io/ | CNI avancée, politiques réseau et observabilité (Hubble), API Gateway |
| **Gateway API** | v1.6.1 | https://gateway-api.sigs.k8s.io/ | CRDs Gateway API, installées avant Cilium (Cilium ≥ 1.20 exige ≥ v1.6.1) |
| **MetalLB** | 0.16.1 | https://metallb.github.io/metallb | LoadBalancer BGP (BFD) exposant deux plages, interne et externe, en TCP/UDP |
| **Rook-Ceph** | 1.20.1 | https://charts.rook.io/release | Stockage distribué haute disponibilité (bloc RBD + CephFS) |
| **TopoLVM** | 17.3.0 | https://github.com/topolvm/topolvm | Stockage LVM local au nœud pour charges de travail basse latence |
| **Metrics Server** | 3.13.1 | https://github.com/kubernetes-sigs/metrics-server | API de métriques ressources (`kubectl top`, HPA) |
| **kubelet-cert-approver** | v0.12.0 | https://github.com/alex1989hu/kubelet-serving-cert-approver | Approbation automatique des certificats kubelet |

### Services de la plateforme managée

| **Composant** | **Version** | **Dépôt** | **Rôle Principal** |
| --- | --- | --- | --- |
| **Cert-Manager** | v1.21.3 | https://charts.jetstack.io | Gestion automatisée des certificats TLS (ZeroSSL intégré) |
| **NGINX Ingress** | 2.8.0 | https://helm.nginx.com/stable | Contrôleurs Ingress : interne, externe et externe-sécurisé (avec filtrage IP) |
| **Kyverno** | 3.9.2 | https://kyverno.github.io/kyverno/ | Application des politiques de sécurité |
| **Capsule** | 0.13.11 | https://projectcapsule.github.io/charts/ | Multi-tenancy et isolation des namespaces avec politiques de sécurité |
| **ArgoCD** | 10.11.6 | https://argoproj.github.io/argo-helm | GitOps / déploiement continu |
| **Prometheus Stack** | 87.21.0 | https://prometheus-community.github.io/helm-charts | Supervision & alerting |
| **Alloy** | 1.11.0 | https://grafana.github.io/helm-charts | Agent de collecte logs/métriques (remplace Promtail) |
| **Loki** | 18.7.0 | https://grafana.github.io/helm-charts | Centralisation des logs (logs stockés sur S3 Cloud Temple) |
| **Pyroscope** | 2.1.0 | https://grafana.github.io/helm-charts | Profilage continu & analyse de performance (flamegraphs dans Grafana) |
| **Harbor** | 1.19.4 | https://helm.goharbor.io | Registre d'images (images stockées sur S3 Cloud Temple) |
| **Kasten K10** | 9.0.9 | https://charts.kasten.io/ | Sauvegarde & restauration (sauvegardes exportées sur S3 Cloud Temple) |
| **OpenCost** | 2.5.28 | https://opencost.github.io/opencost-helm-chart/ | Observabilité et suivi des coûts |
| **KEDA** | 2.21.0 | https://kedacore.github.io/charts | Autoscaling événementiel (Beta) |

**Empreinte de la stack sur le cluster Ceph : environ 180 Gi**, identique en production et en recette.

Trois `StorageClass` sont fournies :

| StorageClass | Backend | Mode d'accès | Usage typique |
| --- | --- | --- | --- |
| `ceph-block` | Ceph RBD (bloc distribué) | ReadWriteOnce | Bases de données, charges mono-pod |
| `ceph-filesystem` | CephFS (système de fichiers distribué) | ReadWriteMany | Volumes partagés entre pods |
| `topolvm-ssd` | TopoLVM (LVM local au nœud) | ReadWriteOnce | Stockage local basse latence, non répliqué, sauvegardé par Kasten **en mode blueprint** uniquement (voir Sauvegarde) |

**Quotas** — valeurs standard d'un cluster livré, **ajustables par cluster** à la commande comme en cours de vie :

| Portée | RBD (bloc) | CephFS |
| --- | --- | --- |
| Plafond du pool, tous tenants confondus | 300 Gi | 125 Gi |
| Plafond du tenant par défaut, appliqué par Capsule | 115 Gi | 100 Gi |

La capacité Ceph elle-même dépend du dimensionnement retenu : avec le gabarit par défaut (3 nœuds Ceph à 500 Go), un cluster dispose de 1500 Go bruts, soit 500 Go utiles après réplication ×3.

## SLA & Information sur le support

- **Disponibilité garantie (production 3 AZ)** : 99.95 %
- **Support** : N1/N2/N3 inclus pour le périmètre socle (infrastructure et opérateurs standards).
- **Grille de support** : les délais de prise en charge et de rétablissement dépendent de la sévérité de l’incident, conformément à la grille P1 à P4 ci-dessous.
- **Engagement RPO / RTO** : sur un cluster 3 AZ, RPO ≤ 24 h et RTO ≤ 4 h. En mono-AZ, les sauvegardes existent mais ne sont pas couvertes par un engagement RTO.
- **Maintenance (MCO)** : patching régulier Talos / Kubernetes / opérateurs standards par MSP, sans interruption de service (rolling upgrade).

| Niveau | Définition | Prise en charge | Rétablissement cible |
| --- | --- | --- | --- |
| **P1** | Production indisponible | Immédiate (7/24) | ≤ 4 h |
| **P2** | Dégradation majeure | ≤ 1 h (7/24) | ≤ 8 h |
| **P3** | Dégradation mineure | ≤ 4 h (heures ouvrées) | ≤ 2 j ouvrés |
| **P4** | Question / amélioration | ≤ 1 j ouvré | À planifier |
=======
### Gouvernance et sécurité

- **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) : contrôleur d'admission qui applique des stratégies de sécurité et de gouvernance.
- **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) : gestion des permissions avec la notion de *tenant*, qui centralise et délègue des droits sur plusieurs namespaces. Les utilisateurs de la plateforme disposent ainsi de droits restreints à leurs seuls namespaces.
- **Cert-Manager** : gestionnaire de certificats open source intégré nativement.
- **Authentification SSO** (inclus, désactivable) : intégration avec un fournisseur d'identité externe OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce…).

### Déploiement et automatisation
>>>>>>> origin/dev

- **ArgoCD** (inclus, désactivable) : déploiements automatisés en GitOps, au sein d'une chaîne **CI/CD**.
- **Harbor** (inclus, désactivable) : **registre de conteneurs** qui stocke les images de vos conteneurs et vos charts Helm directement dans le cluster. Il effectue des **scans de vulnérabilités** sur vos images et se synchronise avec d'autres registres ([https://goharbor.io/](https://goharbor.io/)).
- **Keda** (optionnel) : autoscaling des pods à partir de métriques avancées, par exemple un nombre de connexions HTTP.
- **OpenCost** (inclus, désactivable, [https://github.com/opencost/opencost](https://github.com/opencost/opencost)) : suivi FinOps de la consommation des ressources Kubernetes et refacturation par projet ou namespace.

### Sauvegarde

**Veeam Kasten** (aussi appelé K10) sauvegarde un déploiement complet (manifestes, volumes…) vers le Stockage Objet Cloud Temple. Il s'appuie sur **Kanister** pour des sauvegardes applicatives cohérentes, par exemple pour les bases de données ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

## Architecture

### Production (multi-zonal)

<img src={archi_overview} />

<<<<<<< HEAD
#### Schémas d'architecture

- **Vue HLD (High Level Design)** :

<img src={arch_hld} alt="Schéma d'architecture HLD" />

- **Vue LLD (Low Level Design)** :

<img src={arch_lld} alt="Schéma d'architecture LLD" />

Pour un déploiement "de production" (multi-zonal), les machines suivantes sont utilisées:

| **AZ** | **Machine**   | **vCores** | **RAM** | **Stockage local**              |
| ------------ | ------------------- | ---------------- | ------------- | ------------------------------------- |
| AZ07         | Git Runner          | 4                | 8 Go          | OS: 256 Go                            |
| AZ05         | Control Plane 1     | 8                | 12 Go         | OS: 128 Go                            |
| AZ06         | Control Plane 2     | 8                | 12 Go         | OS: 128 Go                            |
| AZ07         | Control Plane 3     | 8                | 12 Go         | OS: 128 Go                            |
| AZ05         | Storage Node 1 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimum (***) |
| AZ06         | Storage Node 2 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimum (***) |
| AZ07         | Storage Node 3 (**) | 12               | 24 Go         | OS: 128 Go + Ceph 500 Go minimum (***) |
| AZ05         | Worker Node 1 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ06         | Worker Node 2 (*)   | 12               | 24 Go         | OS: 128 Go                            |
| AZ07         | Worker Node 3 (*)   | 12               | 24 Go         | OS: 128 Go                            |

(*) : La taille et le nombre des Worker Nodes peut être adaptée en fonction du besoin en capacité de calcul du client. Le nombre minimal de Worker nodes est de 3 (1 par AZ), et nous conseillons d'augmenter leur nombre par lot de 3 pour conserver une distribution multi zonale cohérente. La taille des Worker Node peut être adaptée, avec un minimum de 12 cores et 24 Go de RAM ; la limite supérieure par Worker node est fixée par la taille des hyperviseurs utilisés (donc potentiellement 112 cores/1536 Go de RAM avec des lames Performance 3). La quantité de Worker Nodes est limitée à 100. Le CNCF conseille d'avoir des worker nodes de taille identique. La limite du nombre de pods par Worker Node est de 110.

(**) : la taille des Storage nodes peut être revue à la hausse en fonction de la taille du stockage Ceph associé. (par exemple : 24c/128Go pour 10 To de Ceph)

(***) : Chaque noeud de stockage est livré avec un minimum de 500 Go d'espace disque, pour un stockage utile Ceph distribué de 500 Go (les données sont répliquées sur chaque AZ, donc x3). L'espace libre disponible pour le client est d'environ 350 Go. Cette taille initiale peut être augmentée au moment de la construction, ou plus tard, en fonction des besoins. Des quotas sont appliqués sur Ceph, avec une répartition Block/File.
=======
Le cluster de production est réparti sur trois zones de disponibilité :

- **Control Plane** : trois nœuds, un par zone ;
- **nœuds de stockage** : trois nœuds Rook-Ceph dédiés, un par zone ;
- **nœuds Worker** : au moins trois, un par zone, ajustables selon vos besoins ;
- **nœuds Worker Bare Metal** (optionnel) : pour des besoins de performance spécifiques, notamment les GPU ;
- **Git Runner** : un nœud pour les pipelines CI/CD ;
- **pare-feu managé** : deux machines virtuelles, qui filtrent les IP publiques de l'API Kubernetes et des ingress sécurisés.
>>>>>>> origin/dev

### Dev/test (mono zone)

<img src={archi_overview_1az} />

Le cluster de développement et de test est déployé sur une seule zone de disponibilité, avec un Control Plane, trois nœuds Worker au minimum et un Git Runner. Le stockage Ceph est mutualisé sur les nœuds Worker.

<<<<<<< HEAD
| **AZ** | **Machine** | **vCores** | **RAM** | **Stockage local**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 Go          | OS: 256 Go                           |
| AZ0n         | Control Plane     | 8                | 12 Go         | OS: 128 Go                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |

(*) : La taille et le nombre des Worker Nodes peut être adaptée en fonction du besoin en capacité de calcul du client. Le nombre minimal de Worker nodes est de 3 (du fait de la réplication du stockage). La taille des Worker Node peut être adaptée, avec un minimum de 12 cores et 24 Go de RAM ; la limite supérieure par Worker node est fixée par la taille des hyperviseurs utilisés (donc potentiellement 112 cores/1536 Go de RAM avec des lames Performance 3). La quantité de Worker Nodes est limitée à 100. Le CNCF conseille d'avoir des worker nodes de taille identique. La limite du nombre de pods par Worker Node est de 110.
=======
### Intégrations

- **Stockage Objet Cloud Temple** : journaux (Loki) et sauvegardes (Kasten).
- **Fournisseurs d'identité** : intégration via OIDC, incluse et désactivable.
- **IaaS Cloud Temple** : interconnexion des clusters avec des ressources virtualisées, comme des bases de données ou des composants middleware.
>>>>>>> origin/dev

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

<<<<<<< HEAD
#### Sauvegarde de l'infrastructure (périmètre managé)

- **Sauvegarde du cluster via Kasten K10** (partie Disaster Recovery et Infrastructure), avec tests de reprise après sinistre.
- **Périmètre socle** : namespaces & PVC (Ceph RBD), objets CRD critiques infra, observabilité, opérateurs standards.
- **etcd (état du cluster)** : snapshot quotidien pris par Cloud Temple hors Kasten, avec la configuration des nœuds Talos ; il sert à reconstruire le plan de contrôle. Les snapshots sont conservés 2 jours sur la VM de management, elle-même sauvegardée au niveau IaaS par une politique quotidienne avec 35 jours de rétention.
- **Fréquence** : quotidienne (rétention 7 j) et hebdomadaire (rétention 4 sem).
- **Engagements** : RPO ≤ 24 h, RTO ≤ 4 h (reconstruction automatisée du cluster et restauration des composants via Kasten).
- **Cible** : S3 Cloud Temple (FR), chiffrement côté serveur.

#### Sauvegarde des charges de travail client (basée sur les labels)

Le service fournit un mécanisme flexible pour sauvegarder les charges de travail client en utilisant des labels.

- **Mécanisme** : inscrire des ressources (namespaces, PVCs, etc.) dans une politique de sauvegarde via des labels spécifiques.
- **Politiques disponibles** : 24 politiques horaires, couvrant chaque heure de la journée (00 à 23 UTC).
- **Format du label** : `kasten-dailyHH-r7d: "true"` (où `HH` est l'heure au format 24 h, par ex. `00`, `14`, `23`).
- **Fréquence** : quotidienne à l'heure spécifiée (UTC). **Rétention** : 7 jours sur S3.
- **Exemple** : pour sauvegarder un namespace tous les jours à 14 h 00 UTC, ajouter le label `kasten-daily14-r7d: "true"` au namespace.
- **Volumes TopoLVM** : `topolvm-ssd` ne gère pas les snapshots ; sans précaution, un namespace sauvegardé contenant un volume TopoLVM voit **toute** sa sauvegarde échouer, volumes Ceph compris. Ces volumes se sauvegardent avec Kasten **en mode blueprint** (Kanister) : Kasten exécute une sauvegarde applicative (dump de base, export des données) envoyée sur S3, et la restauration rejoue l'opération inverse. Le blueprint est propre à chaque application et est mis en place **sur étude**, à la demande du client.
- **Périmètre applicatif** : RPO et RTO définis par le client.

### Support et résolution des problèmes
=======
- **Sauvegarde des workloads** : Veeam Kasten sauvegarde vos déploiements (manifestes et volumes) vers le Stockage Objet Cloud Temple, avec des sauvegardes applicatives cohérentes.
- **Réplication du stockage** : en production, les volumes Ceph répliqués sont copiés sur les trois zones de disponibilité.
- **Haute disponibilité** : en production, le Control Plane et les nœuds de stockage sont répartis sur trois zones.
>>>>>>> origin/dev

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
