---
title: Concepts
---

## Présentation

GPU fournit des cartes graphiques NVIDIA H100 et L40S pour les calculs d'intelligence artificielle, d'apprentissage automatique et de calcul haute performance. Les GPU ne se commandent pas seuls : ils sont intégrés aux lames de calcul et aux worker nodes des offres IaaS et PaaS. Vous les utilisez depuis des machines virtuelles, des serveurs Bare Metal, des conteneurs ou des clusters Kubernetes, avec les outils standards de l'écosystème NVIDIA.

### Publics et cas d'usage

GPU s'adresse aux data scientists, aux chercheurs, aux ingénieurs, aux entreprises qui déploient des services d'IA et au secteur public. Cas d'usage typiques :

- **Entraînement de modèles** : entraînement de réseaux de neurones et apprentissage profond (deep learning).
- **Inférence** : déploiement de services d'IA en production.
- **Vision par ordinateur** : traitement d'images et de vidéos.
- **Ingénierie et simulation** : modélisation et outils de simulation.
- **Recherche scientifique** : calcul scientifique, modélisation de scénarios complexes et analyse de données massives.

## Avantages

| Avantage                   | Description                                                                                                       |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| Accélération des calculs   | Les GPU accélèrent l'entraînement et l'inférence des modèles d'IA par rapport à un traitement sur CPU.             |
| Plusieurs modes d'usage    | Les GPU s'utilisent depuis des machines virtuelles, des serveurs Bare Metal, des conteneurs et Kubernetes.         |
| Ressources dédiées         | Les cartes sont installées dans des lames de calcul dédiées à votre usage.                                         |
| Partitionnement            | Une carte H100 peut être partagée entre plusieurs charges de travail isolées grâce au Multi-Instance GPU (MIG).    |
| Écosystème standard        | CUDA, cuDNN et les principaux frameworks d'IA s'utilisent sans adaptation.                                        |
| Hébergement en France      | Les ressources GPU et les données traitées sont hébergées en France.                                              |

## Fonctionnalités

| Fonctionnalité          | Description                                                                                          |
|-------------------------|------------------------------------------------------------------------------------------------------|
| NVIDIA H100             | Carte de 80 Go de mémoire GPU.                                                                       |
| NVIDIA L40S             | Carte de 48 Go de mémoire GPU.                                                                       |
| Multi-Instance GPU      | Partitionnement d'une carte H100 en 7 instances au plus, chacune avec sa mémoire dédiée.             |
| Serveurs Bare Metal     | Lames de calcul équipées de GPU, à votre usage exclusif.                                             |
| Machines virtuelles     | GPU accessibles depuis les machines virtuelles des offres IaaS.                                      |
| Conteneurs et Kubernetes | Worker nodes GPU sur PaaS OpenShift et nœuds Bare Metal avec GPU sur Managed Kubernetes.            |
| Bibliothèques NVIDIA    | Compatibilité avec CUDA, cuDNN et les frameworks d'IA (TensorFlow, PyTorch, etc.).                   |
| Gestion centralisée     | Gestion des ressources depuis la Console Cloud Temple.                                               |

## Architecture

### Offres intégrant des GPU

Chaque lame de calcul ou worker node GPU embarque deux cartes NVIDIA. La configuration GPU dépend de l'offre utilisée :

| Offre              | Configuration GPU                                                                                         | Documentation                                                    |
|--------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Bare Metal         | Lame PERFORMANCE 4 : 2 x NVIDIA L40S 48 Go. Lame PERFORMANCE 5 : 2 x NVIDIA H100 80 Go.                   | [Concepts Bare Metal](../iaas_bare-metal/concepts.md)            |
| IaaS VMware        | Lame PERFORMANCE 4 : 2 x NVIDIA L40S 48 Go.                                                               | [Concepts IaaS VMware](../iaas_vmware/concepts.md)               |
| IaaS OpenSource    | Lame PERFORMANCE 4 : 2 x NVIDIA L40S 48 Go.                                                               | [Concepts IaaS OpenSource](../iaas_opensource/concepts.md)       |
| PaaS OpenShift     | Worker nodes GPU : 2 x NVIDIA L40S 48 Go par worker, par groupe de 3 workers, 1 par zone de disponibilité. | [Concepts PaaS OpenShift](../paas_openshift/concepts.md)         |
| Managed Kubernetes | Nœuds workers de type Bare Metal équipés de GPU.                                                           | [Utiliser un GPU sur Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md) |

### Intégrations

- **Console Cloud Temple** : gestion des lames, des machines virtuelles et des clusters qui portent les GPU.
- **API Kubernetes** : exposition des GPU aux pods sur PaaS OpenShift et Managed Kubernetes.
- **CUDA et bibliothèques NVIDIA** : CUDA toolkit, cuDNN et frameworks d'IA (TensorFlow, PyTorch, etc.).

## Régions et zones de disponibilité

Les GPU sont disponibles dans la région FR1. Les données traitées restent hébergées en France. Sur PaaS OpenShift, les worker nodes GPU d'un même groupe sont répartis sur trois zones de disponibilité, à raison d'un worker par zone.

## Caractéristiques techniques

### Spécifications des cartes

| Paramètre               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| Mémoire GPU             | 48 Go        | 80 Go        |
| FP32                    | 91,6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1 513 TFlops |
| FP8 (Tensor Core) *     | 1 466 TFlops | 3 026 TFlops |
| Consommation maximale   | 350 W        | 350 W        |

\* Valeurs du constructeur NVIDIA avec parcimonie structurée (sparsity). Sans parcimonie, ces valeurs sont divisées par deux.

### Multi-Instance GPU

La technologie Multi-Instance GPU (MIG) partitionne une carte H100 en 7 instances au plus. Chaque instance dispose de sa propre mémoire et de ses propres unités de calcul, isolées des autres instances. Plusieurs charges de travail partagent ainsi une même carte sans interférer entre elles.

### Limites

- Le Multi-Instance GPU est disponible sur les cartes H100 uniquement. Les cartes L40S ne le prennent pas en charge.
- Le nombre et le modèle des cartes sont fixés par la classe de lame ou le type de worker node : vous ne pouvez pas modifier la configuration GPU d'une lame.
- Sur PaaS OpenShift, les worker nodes GPU se commandent par groupe de 3 workers.
- Sur IaaS VMware, un cluster d'hyperviseurs se compose de lames d'un même type : les lames GPU forment un cluster distinct.

## Sécurité et conformité

GPU est certifié HDS et ISO 27001, et disponible sur des services qualifiés SecNumCloud et conformes C5.

- **Ressources dédiées** : les cartes sont installées dans des lames de calcul dédiées à votre usage.
- **Isolation** : sur H100, chaque instance MIG dispose d'une mémoire dédiée, isolée des autres instances.
- **Résidence des données** : les données traitées sont hébergées en France, dans la région FR1.

## Disponibilité du service

Sur l'offre Bare Metal, l'objectif de disponibilité des GPU est de 99,9 %, mesuré sur un mois. Sur les autres offres, l'objectif de disponibilité est celui de l'offre qui héberge le GPU.

## Réversibilité

À la fin du service, vous pouvez récupérer les éléments suivants :

| Élément exporté        | Livrable                             | Délai de mise à disposition | Coût       |
|------------------------|--------------------------------------|-----------------------------|------------|
| Modèles                | Formats standards (ONNX, etc.)       | 15 jours                    | Sans frais |
| Données                | Formats ouverts                      | 30 jours                    | Sans frais |
| Assistance à la migration | Support technique                 | Sur demande                 | Sur devis  |

## Tarification

Les GPU sont facturés avec la lame de calcul ou le worker node qui les héberge. Les modalités d'engagement dépendent de l'offre : sur PaaS OpenShift, les worker nodes GPU sont disponibles en paiement à l'usage mensuel ou en réservation de 12 mois. Les tarifs de GPU sont publiés sur la page produit du site Cloud Temple :
[GPU — tarifs](https://www.cloud-temple.com/produits/gpu/).

## Bonnes pratiques

- **Dimensionnez selon la mémoire nécessaire** : choisissez la carte H100 (80 Go) ou L40S (48 Go) selon la taille des modèles et des données à traiter.
- **Partagez une carte H100** entre plusieurs charges de travail de petite taille avec le Multi-Instance GPU, plutôt que de dédier une carte entière à chacune.
- **Machines virtuelles** : pour utiliser un GPU depuis une machine virtuelle IaaS VMware, activez les paramètres avancés `pciPassthru.use64bitMMIO` et `pciPassthru.64bitMMIOSizeGB` (voir le [guide de démarrage IaaS VMware](../iaas_vmware/quickstart.md)).
- **Kubernetes** : sur Managed Kubernetes, déclarez `runtimeClassName: nvidia` dans vos pods pour qu'ils accèdent au GPU (voir le tutoriel [Utiliser un GPU sur Managed Kubernetes](../managed_kubernetes/tutorials/usinggpu.md)).
