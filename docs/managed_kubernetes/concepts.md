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

## Nos offres Managed Kubernetes

Cloud Temple propose deux offres distinctes pour répondre à vos besoins en matière d'orchestration de conteneurs :

- **Managed Core Kubernetes** : Un produit minimaliste qui vous fournit un socle Kubernetes robuste et sécurisé, basé sur des composants open-source de pointe. Elle est idéale pour les équipes expertes qui souhaitent construire leur propre plateforme sur-mesure.
- **Managed Kubernetes** : Une solution complète et prête à l'emploi qui inclut une stack complète d'outils pour le réseau, la sécurité, le stockage, le déploiement continu, l'observabilité, la sauvegarde et la gestion des coûts.

### Tableau comparatif des offres

| Composant                               | Managed Core Kubernetes | Managed Kubernetes          |
| --------------------------------------- | ----------------------- | --------------------------- |
| **OS**                            | ✅Talos                 | ✅Talos                     |
| **CNI**                           | ✅Cilium                | ✅Cilium                    |
| **Load Balancer**                 | ✅MetalLB               | ✅MetalLB                   |
| **Stockage distribué**           | ✅Rook-Ceph             | ✅Rook-Ceph                 |
| **Stockage local**                | 🔵TopoLVM               | 🔵TopoLVM                   |
| **Observabilité CNI**            | ❌                      | ✅Hubble                    |
| **Ingress**                       | ❌                      | ✅Ingress Nginx             |
| **Observabilité**                | ❌                      | ✅Prometheus, Grafana, Loki |
| **Sauvegarde et Migration**       | ❌                      | ✅Veeam Kasten              |
| **Gouvernance et Sécurité**     | ❌                      | ✅Kyverno, Capsule          |
| **Gestion des certificats**       | ❌                      | ✅Cert-Manager              |
| **Déploiement Continu (GitOps)** | ❌                      | 🔵ArgoCD                    |
| **Container Registry**            | ❌                      | 🔵Harbor                    |
| **Authentification SSO**          | ❌                      | 🔵Intégration OIDC         |
| **Autoscaling de pods**           | ❌                      | 🔵Keda                      |
| **Gestion des Coûts (FinOps)**   | ❌                      | 🔵OpenCost                  |
| **Observabilité (profiling)**    | ❌                      | 🔵Pyroscope + LLM           |

✅ : inclus
🔵 : optionnel/désactivable
❌ : non inclus

## Présentation des produits Managed (Core) Kubernetes

**Managed Core Kubernetes** est basé sur Talos Linux ([https://www.talos.dev/](https://www.talos.dev/)), un système d'exploitation dédié à Kubernetes qui est léger et sécurisé. Il est immuable, sans aucun shell ni accès ssh, et configuré uniquement de manière déclarative via API gRPC.

L'installation standardisée inclus un ensemble de composants, majoritairement OpenSource et validés par le CNCF:

- **CNI Cilium**, avec interface d'observabilité (**Hubble**) : Cilium est une solution de mise en réseau pour les containers Kubernetes (*Container Network Interface*). Il gère la sécurité, le load balancing, le service mesh, l'observabilité, le chiffrement, etc... C'est un composant réseau fondamental que l'on retrouve dans la plupart des déclinaisons de Kubernetes (OpenShift, AKS, GKE, EKS,...). Dans **Managed Kubernetes**, nous avons inclus l'interface graphique **Hubble** pour une visualisation des flux Cilium.
  - **Gateway API** : les CRDs Gateway API (≥ v1.6.1) sont installées avant Cilium et sont requises par Cilium ≥ 1.20 pour l'API Gateway.

  <img src={cillium} />

  Le schéma ci-dessous illustre la distinction entre le réseau porté par le CNI (trafic pod ↔ pod) et le réseau des nœuds, ainsi que la manière dont Cilium encapsule le trafic entre nœuds :

  <img src={cni_vs_node} alt="Réseau CNI vs réseau des nœuds" />
- **MetalLB** et **nginx** : Pour l'exposition des applications Web, 3 *ingress-class* **nginx** sont intégrées de base:

  - *nginx-external-secured* : exposition sur une IP publique, filtrée sur le firewall pour n'autoriser que des IP connues (utilisé pour les interfaces graphiques des différents produits, et l'API Kubernetes)
  - *nginx-external* : exposition sur une seconde IP publique non filtrée (ou filtrage spécifique au client)
  - *nginx-internal* : exposition sur une IP interne uniquement

    Pour les services "non web", un load-balancer **metalLB** permet d'exposer des services en interne ou sur des IP publiques. (ce qui permet de déployer des autres ingresses, comme par exemple un WAF)

> Note : nous utilisons nginx en version openSource *maintenue par F5 Networks*. (pas la version d'origine, opensource, qui est deprecated)

- **Stockage distribué Rook-Ceph** : pour le stockage des volumes persistents (PV), un stockage distribué **Ceph** OpenSource est intégré à la plateforme. Il permet d'utiliser les *storage-classes* *ceph-block* (Block, répliqué multi-zones), *ceph-block-norepl* (Block, non répliqué), et *ceph-filesystem* (File, répliqué multi-zones). Un stockage a **7500 IOPS** est utilisé, permettant des performances élevées. Dans les déploiements de production (sur 3 AZ), les noeuds de stockage sont dédiés (1 noeud par AZ) ; dans les déploiements hors-production (1 AZ), le stockage est mutualisé avec les workers nodes.
- **Stockage local TopoLVM** : pour le stockage des volumes persistents (PV), un stockage local **TopoLVM** OpenSource peut être ajouté (en option) à la plateforme. Il permet d'utiliser la *storage-class* *topolvm-ssd* pout stocker localement, *sur les Worker nodes*, des données. Cette option est utile pour les déploiements qui utilisent une réplication applicative intégrée (Kafka, MongoDB, PostgreSQL, ...) et bénéficient d'un stockage ultra-rapide, avec une latence réduite. Cette option est généralement utilisée pour dédier des *Worker nodes* à une workload spécifique.
- **Cert-Manager**: le gestionnaire de certificats OpenSource **Cert-Manager** est intégré nativement dans la plateforme.
- **ArgoCD**  est à votre disposition pour vos déploiements automatisés via une chaine de **CI/CD**. (optionnel)
- Stack **Prometheus** (Prometheus, Grafana, Loki): les clusters Managed kubernetes sont livrés en standard avec une stack OpenSource complète **Prometheus** pour l'observabilité, incluant:

  - **Prometheus**, pour la collecte des métriques
  - **Grafana**, avec de nombreux dashboards
  - **Alloy** : agent de collecte de logs et de métriques (il remplace Promtail).
  - **Loki** : les journaux de la plateforme sont exportés vers le stockage S3 Cloud-Temple (et intégrés dans Grafana).
  - **Pyroscope** : (optionnel) plateforme de profilage en continu, interrogeable via LLM.

    <img src={grafana} />
- **Harbor** est une **Container registry** qui vous permet de stocker les images de vos containers ou vos charts helm directement dans le cluster. Elle effectue des **scan de vulnérabilité** sur vos images. **Harbor** permet aussi des synchronisations avec d'autres registries. ([https://goharbor.io/](https://goharbor.io/)) (optionnel)
- **OpenCost** ([https://github.com/opencost/opencost](https://github.com/opencost/opencost)) est un outil de gestion des couts (Finops) pour kubernetes. Il vous permet de suivre finement la consommations des ressources kubernetes et de faire de la sous-facturation par projet/namespace. (optionnel)
- Stratégies de sécurité avancée avec **Kyverno** et **Capsule**:

  - **Kyverno** ([https://kyverno.io/](https://kyverno.io/)) est un controleur d'admission pour Kubernetes qui permet d'appliquer des stratégies. C'est un outil essentiel pour la gouvernance et la sécurité dans kubernetes.
  - **Capsule** ([https://projectcapsule.dev/](https://projectcapsule.dev/)) est un outil de gestion des permissions qui facilite la gestion des droits dans Kubernetes. Il introduit la notion de *tenant* qui permet de centraliser et déléguer des permissions sur plusieurs namespaces. Via **Capsule**, les utilisateurs de la plateforme Kubernetes Managé disposent donc de droits restreints à leurs seuls namespaces.
- **Veeam Kasten** (aka 'k10') est une solution pour la **sauvegarde** des workloads Kubernetes.

  Il permet de sauvegarder un déploiement complet : manifestes, volumes, etc... vers le stockage objet S3 Cloud-Temple. **Kasten** utilise **Kanister** pour permettre des sauvegardes applicatives cohérentes, par exemple pour les bases de données ([https://docs.kasten.io/latest/usage/blueprints/](https://docs.kasten.io/latest/usage/blueprints/)).

  **Kasten** est un outil cross-platform qui peut fonctionner avec d'autres clusters Kubernetes (OpenShift, Hyperscaler,...). Il peut donc être utilisé pour des scénarii de réversibilité ou de migration (K10 gère les adaptations éventuelles via des *transformations*, par exemple un changement d'ingress-class), mais aussi de "refresh" (exemple : restauration planifiée d'un environnement de production en pré-production).
- **Authentification SSO** avec un Identity Provider Externe OIDC (Microsoft Entra, FranceConnect, Okta, AWS IAM, Google, Salesforce, ...) (optionnel)
- **Keda** permet l'autoscaling des pods via des métriques avancés, comme par exemple un nombre de connexions http. (optionnel)

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

## Politique de versions & cycle de vie

- **Kubernetes supporté :** N-2 (3 releases majeures par an, environ tous les 4 mois). Chaque release est supportée officiellement 12 mois, ce qui assure une fenêtre de support Cloud Temple de ~16 mois maximum par version.
- **Talos OS :** aligné sur les versions stables de Kubernetes.
  - Chaque branche est maintenue environ 12 mois (patchs sécurité inclus).
  - Rythme d’upgrade recommandé : 3 fois par an, en cohérence avec les upgrades Kubernetes.
  - Les patchs critiques (CVE, kernel) sont appliqués en rolling upgrade, sans interruption de service.
- **Mises à jour :**
  - **Majeures** (Kubernetes N+1, Talos X+1) : planifiées 3 fois/an, en rolling update.
  - **Mineures** : appliquées automatiquement dans un délai de 30 à 60 jours.
- **Dépréciation :** version N-3 → fin de support sous 90 jours après sortie de N.

## Noeuds Kubernetes

### Production (multi-zonal)

<img src={archi_overview} />

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

### Dev/test (mono zone)

<img src={archi_overview_1az} />

Pour une version "dev/test", les machines suivantes sont déployées:

| **AZ** | **Machine** | **vCores** | **RAM** | **Stockage local**             |
| ------------ | ----------------- | ---------------- | ------------- | ------------------------------------ |
| AZ0n         | Git Runner        | 4                | 8 Go          | OS: 256 Go                           |
| AZ0n         | Control Plane     | 8                | 12 Go         | OS: 128 Go                           |
| AZ0n         | Worker Node 1 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |
| AZ0n         | Worker Node 2 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |
| AZ0n         | Worker Node 3 (*) | 12               | 24 Go         | OS: 128 Go + Ceph 300 Go minimum (**) |

(*) : La taille et le nombre des Worker Nodes peut être adaptée en fonction du besoin en capacité de calcul du client. Le nombre minimal de Worker nodes est de 3 (du fait de la réplication du stockage). La taille des Worker Node peut être adaptée, avec un minimum de 12 cores et 24 Go de RAM ; la limite supérieure par Worker node est fixée par la taille des hyperviseurs utilisés (donc potentiellement 112 cores/1536 Go de RAM avec des lames Performance 3). La quantité de Worker Nodes est limitée à 100. Le CNCF conseille d'avoir des worker nodes de taille identique. La limite du nombre de pods par Worker Node est de 110.

(**) : 3 Worker nodes sont utilisés comme Storage nodes et sont livrés avec un minimum de 300 Go d'espace disque, pour un stockage utile distribué de 300 Go (les données sont répliquées trois fois). L'espace libre disponible pour le client est d'environ 150 Go. Cette taille initiale peut être augmentée au moment de la construction, ou plus tard, en fonction des besoins.

## RACI

### Architecture & Infrastructure

| **Activité**                                                      | **Client** | **Cloud Temple** |
| ------------------------------------------------------------------------ | ---------------- | ---------------------- |
| Définir l'architecture globale du service Kubernetes                    | C                | RA                     |
| Dimensionner le service Kubernetes (nombre de noeuds, ressources)        | C                | RA                     |
| Installer le service Kubernetes avec une configuration par défaut       | I                | RA                     |
| Configuration du service Kubernetes                                      | C                | RA                     |
| Configurer le réseau de base du service Kubernetes                      | I                | RA                     |
| Déploiement de la configuration initiale des identités et des accès   | C                | RA                     |
| Définir la stratégie de mise à l’échelle et de haute disponibilité | C                | RA                     |

### Gestion des projets et applications métiers

| **Activité**                                  | **Client** | **Cloud Temple** |
| ---------------------------------------------------- | ---------------- | ---------------------- |
| Créer et gérer les projets Kubernetes              | RA               | I*                     |
| Déployer et gérer les applications dans Kubernetes | RA               | I*                     |
| Configurer les pipelines CI/CD                       | RA               | I*                     |
| Gérer les images de conteneurs et les registres     | RA               | I*                     |

*peut passer à "C" en fonction du contrat d'infogérance

### Surveillance et performance

| **Activité**                             | **Client** | **Cloud Temple** |
| ----------------------------------------------- | ---------------- | ---------------------- |
| Surveiller la performance du service Kubernetes | I                | RA*                    |
| Surveiller la performance des applications      | RA               |                        |
| Gérer les alertes liées au service Kubernetes | I                | RA*                    |
| Gérer les alertes liées aux applications      | RA               |                        |

(*) : *Cluster de Production Managed Kubernetes seulement. En Dev/Test et en version Core le client est entièrement en autonomie et en responsabilité.*

### Maintenance et mises à jour Infrastructures

| **Activité**                                        | **Client** | **Cloud Temple** |
| ---------------------------------------------------------- | ---------------- | ---------------------- |
| Mettre à jour le service Kubernetes/OS                    | C                | RA                     |
| Appliquer les correctifs de sécurité à Kubernetes       | C                | RA                     |
| Mettre à jour les applications déployées (opérateurs*) | C                | RA                     |

*Package opérateur inclus sur Managed Kube - voir chapitres : Packages Helm managés

### Sécurité

| **Activité**                                                              | **Client** | **Cloud Temple** |
| -------------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Gérer la sécurité du service Kubernetes                                       | RA               | RA*                    |
| Configurer et gérer les politiques de sécurité des pods                       | RA               | I                      |
| Gérer les certificats SSL/TLS pour le service Kubernetes                        | C                | RA*                    |
| Gérer les certificats SSL/TLS pour les applications                             | RA               | I                      |
| Implémenter et gérer le contrôle d'accès basé sur les rôles de base (RBAC) | C                | R*                     |
| Implémenter et gérer le contrôle d'accès basé sur les rôles client (RBAC)  | RA               | I                      |

(*) : *Cluster de Production Managed Kubernetes seulement. En Dev/Test et en version Core le client est entièrement en autonomie et en responsabilité.*

### Sauvegarde et reprise après sinistre

| **Activité**                                                          | **Client** | **Cloud Temple** |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- |
| Définir la stratégie de sauvegarde pour le service Kubernetes              | I                | RA                     |
| Mettre en oeuvre et gérer les sauvegardes du service Kubernetes             | I                | RA                     |
| Définir la stratégie de sauvegarde pour les applications                   | RA*              | I*                     |
| Mettre en oeuvre et gérer les sauvegardes des applications                  | RA*              | I*                     |
| Tester les procédures de reprise après sinistre pour le service Kubernetes | CI               | RA                     |
| Tester les procédures de reprise après sinistre pour les applications      | RA*              | CI*                    |

*peut passer à "CI | RA" en fonction du contrat d'infogérance

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

| **Activité**                                       | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Fournir un support de niveau 1 pour l'infrastructure      | I                | RA                     |
| Fournir un support de niveau 2 et 3 pour l'infrastructure | I                | RA                     |
| Résoudre les problèmes liés au service Kubernetes      | C                | RA                     |
| Résoudre les problèmes liés aux applications           | RA               | I                      |

### Gestion des capacités et évolution

*Cluster de Production Managed Kubernetes seulement. En Dev/Test et en version Core le client est entièrement en autonomie et en responsabilité.*

| **Activité**                                       | **Client** | **Cloud Temple** |
| --------------------------------------------------------- | ---------------- | ---------------------- |
| Surveiller l'utilisation des ressources Kubernetes        | C                | RA                     |
| Planifier l’évolution des capacités du service         | RA               | C                      |
| Implémenter les changements de capacité                 | I                | RA                     |
| Gérer l’évolution des applications et leurs ressources | RA               | I                      |

### Documentation et conformité

| **Activité**                              | **Client** | **Cloud Temple** |
| ------------------------------------------------ | ---------------- | ---------------------- |
| Maintenir la documentation du produit Kubernetes | I                | RA                     |
| Maintenir la documentation des applications      | RA               | I                      |
| Assurer la conformité du service Kubernetes     | I                | RA                     |
| Assurer la conformité des applications          | RA               | I                      |
| Réaliser des audits du service Kubernetes       | I                | RA                     |
| Réaliser des audits des applications            | RA               | I                      |

### Gestion des opérateurs/CRD Kubernetes (inclus dans le produit)

| **Activité**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Mise à disposition du catalogue d'Opérateurs par défaut    | CI               | RA                     |
| Mise à jour des Opérateurs                                  | CI               | RA                     |
| Surveillance de l’état des Opérateurs                      | CI               | RA                     |
| Résolution des problèmes liés aux Opérateurs              | CI               | RA                     |
| Gestion des autorisations des Opérateurs                     | CI               | RA                     |
| Gestion des ressources des Opérateurs (ajout/suppression)    | CI               | RA                     |
| Sauvegarde des données des ressources des Opérateurs        | CI               | RA                     |
| Supervision des ressources Opérateurs                        | CI               | RA                     |
| Restauration des données des ressources des Opérateurs      | CI               | RA                     |
| Audit de sécurité des Opérateurs                           | CI               | RA                     |
| Support des Opérateurs                                       | CI               | RA                     |
| Gestion des licences sur les opérateurs                      | CI               | RA                     |
| Gestion des plans de support spécifiques sur les opérateurs | CI               | RA                     |

*Package opérateur inclus sur Managed Kube - voir chapitres : Packages Helm managés

### Gestion des applications/opérateurs/CRD Kubernetes (du client)

*Cluster de Production Managed Kubernetes seulement. En Dev/Test et en version Core le client est entièrement en autonomie et en responsabilité.*

| **Activité**                                           | **Client** | **Cloud Temple** |
| ------------------------------------------------------------- | ---------------- | ---------------------- |
| Déploiement des CRDs                                         | I*               | RA*                    |
| Mise à jour des Opérateurs                                  | RA               | I                      |
| Surveillance de l’état des Opérateurs                      | RA               | I                      |
| Résolution des problèmes liés aux Opérateurs              | RA               | I                      |
| Gestion des autorisations des Opérateurs                     | RA               | I                      |
| Gestion des ressources des Opérateurs (ajout/suppression)    | RA               | I                      |
| Sauvegarde des données des ressources des Opérateurs        | RA               | I                      |
| Supervision des ressources Opérateurs                        | RA               | I                      |
| Restauration des données des ressources des Opérateurs      | RA               | I                      |
| Audit de sécurité des Opérateurs                           | RA               | I                      |
| Support des Opérateurs                                       | RA               | I                      |
| Gestion des licences sur les opérateurs                      | RA               | I                      |
| Gestion des plans de support spécifiques sur les opérateurs | RA               | I                      |

Certains services opérateurs peuvent être pris en charge en fonction du contrat d'infogérance.

*peut passer à "A | RC" en fonction du contrat d'infogérance

### Assistance applicative

| **Activité**                         | **Client** | **Cloud Temple** |
| ------------------------------------------- | ---------------- | ---------------------- |
| Assistance applicative (prestation externe) | RA               | I                      |

Un support applicatif peut être fourni via une prestation complémentaire.

### RACI (synthétique)

- Cloud Temple : responsable et acteur (RA) du socle *Core Kubernetes* et des services additionnels *Managed Kubernetes* (sécurité, sauvegarde, supervision)
- Client : responsable et acteur (RA) des projets applicatifs, opérateurs métiers, pipelines CI/CD, sauvegardes applicatives.
- Zone "grise" : adaptations et extensions (IAM, opérateurs spécifiques, durcissement de conformité/sécurité du cluster) - facturées en mode projet.
