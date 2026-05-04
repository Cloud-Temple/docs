---
title: Concepts
---

L'offre __IaaS (Infrastructure As A Service)__ de Cloud Temple est conçue pour répondre aux besoins critiques de continuité et reprise d'activité, avec un accent particulier sur les secteurs exigeants comme l'industrie, la banque et l'assurance. Basée sur des technologies de pointe, cette infrastructure garantit une disponibilité maximale et une performance optimale pour vos charges de travail critiques.

## Une plateforme technologique de confiance

La plateforme IaaS de Cloud Temple s'appuie sur des partenaires technologiques de renommée internationale :

- Calcul : __CISCO UCS__.
- Stockage : __IBM Spectrum Virtualize__, __IBM FlashSystem__ pour le stockage bloc, et __DELL ECS__ pour le stockage objet.
- Réseau : __JUNIPER__.
- Virtualisation : __Stack Opensource__, offrant une base fiable et éprouvée pour gérer vos environnements cloud.

Cette architecture repose sur le modèle __VersaStack__, une alliance entre Cisco et IBM, garantissant une compatibilité étendue avec les principaux éditeurs logiciels.

## Une infrastructure dédiée et automatisée

Bien qu'entièrement automatisée grâce à des APIs et un provider Terraform, le produit IaaS de Cloud Temple propose une infrastructure unique :

- __Ressources dédiées__ : Les lames de calcul, volumes de stockage, et stacks logicielles (virtualisation, sauvegarde, firewalling, etc.) ne sont jamais mutualisées entre les clients.
- __Prédictibilité maximale__ : Vous maîtrisez les taux de virtualisation, la pression en IOPS sur le stockage et bénéficiez d'une facturation claire, à la consommation mensuelle.

La plateforme est qualifiée __SecNumCloud__ par l'[ANSSI](https://www.ssi.gouv.fr/), garantissant un haut niveau d'automatisation et de sécurité.

## Principales fonctionnalités

- Ressources de calcul (CPU, RAM) dédiées et à la demande.
- Stockage à la demande (plusieurs classes disponibles).
- Ressources réseau (Internet, réseaux privés).
- Sauvegardes croisées avec rétention configurable.
- Réplication asynchrone pour le stockage ou les machines virtuelles.
- Pilotage via la [Console](../console/console.md) ou en mode Infrastructure as Code grâce aux APIs et au provider Terraform.

## Avantages

| Avantage            | Description                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confiance numérique | Hébergement des données en France et conformité RGPD.                                                                                          |
| Sécurité            | Plateforme hautement sécurisée, qualifiée __SecNumCloud__, __HDS__ (Hébergement des Données de Santé), __ISO 27001__ et __ISAE 3402 type II__. |
| Haute disponibilité | Taux de disponibilité de la plateforme de 99,99%, mesuré mensuellement, plages de maintenance incluses.                                        |
| Résilience          | Mise en place de plans de continuité ou de reprise d'activité selon les besoins.                                                               |
| Automatisation      | Plateforme entièrement automatisée pensée pour s'intégrer dans un programme de transformation numérique.                                        |
| On demand           | Ressources disponibles à la demande.                                                                                                          |

## Régions et zones de disponibilité

Le produit OpenIaaS est déployé dans une zone de disponibilité.
Une zone de disponibilité fait partie d'une région.

Ce type de déploiement permet de choisir la localisation des clusters et de pouvoir les répartir sur différentes zones de disponibilité (AZ).
Cela offre une meilleure répartition de la charge, maximise la redondance et facilite la mise en place d'un plan de reprise d'activité (DRP) en cas d'incident.

---

## Classes de lames de calcul

Les lames de calcul disponibles pour l'offre Bare Metal offrent une gamme de performances pour répondre à divers besoins :

| Référence             | RAM  __(1)__ | Fréquence __(2)__                         | Nombre de cœurs / threads | Connectivité __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notes

- __(1)__ La quantité de mémoire est celle physiquement disponible sur les lames et ne peut être modifiée.
- __(2)__ Les fréquences indiquées correspondent à la fréquence de base minimum et à la fréquence turbo.
- __(3)__ La connectivité physique est mutualisée pour l'accès réseau et l'accès stockage bloc, grâce à une architecture convergée Cisco UCS.
- __(4)__ Les GPU disponibles évoluent en fonction des dernières technologies. Au 1er mai 2024, le produit inclut des GPU NVIDIA LOVELACE L40S.
- __(5)__ La haute disponibilité sur un cluster est disponible uniquement à partir de 2 nœuds.

La disponibilité de l'infrastructure est garantie à 99.9%, mesurée mensuellement, plages de maintenance incluses. Toute demande liée au SLA doit être déclarée via un ticket incident.

---

## Classes de stockage en mode bloc

Le stockage bloc distribué, basé sur __IBM Spectrum Virtualize__, offre une gamme de performances adaptées à divers cas d'utilisation :

| Référence                         | IOPS/To        | Plafond IOPS max / Volume | Bande passante max / Volume | Usage principal                        |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500            | 10 000 IOPS               | 512 Mo/s                    | Charges de travail légères             |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 Mo/s                   | Charges de travail standard            |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 Mo/s                   | Charges intensives                     |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 Mo/s                   | Charges critiques                      |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 Mo/s                   | Charges ultra-intensives               |
| **MASS STORAGE - Archivage**      | Non applicable | Non garanti               | Non garanti                 | Stockage économique pour l'archivage   |

### Caractéristiques

- **Performances** : La performance effective croît de manière linéaire en fonction de la volumétrie allouée (selon le ratio IOPS/To), **dans la limite du plafond matériel absolu défini ci-dessus**. (Par exemple, un volume de 10 To en classe Ultra sera physiquement limité à 30 000 IOPS et 1024 Mo/s).
- __Technologie__ : Flash NVMe avec __Distributed RAID 6__ pour une résilience accrue.
- __Disponibilité__ : 99.99%, mesurée mensuellement.
- __Restrictions__ : Pas de limitation sur les lectures ou écritures. Pas de compression ou de déduplication automatique, garantissant l'utilisation intégrale des volumes réservés.

### Sécurité et Chiffrement du Stockage Bloc

Pour garantir la confidentialité de vos données au repos, l'ensemble de notre infrastructure de stockage bloc intègre un chiffrement matériel robuste.

- __Type de Chiffrement__ : Les données sont chiffrées directement sur les disques (`Data At Rest`) en utilisant l'algorithme __XTS-AES 256__.
- __Conformité__ : Cette méthode de chiffrement est conforme à la norme __FIPS 1-40-2__, assurant un haut niveau de sécurité validé.
- __Fonctionnement__ : Le chiffrement est appliqué au moment de l'écriture des données sur le support de stockage physique.

:::warning[Point d'attention sur la réplication]
Il est important de noter que ce chiffrement protège les données stockées sur les disques. Il n'est pas actif "on-the-fly", ce qui signifie que les données ne sont pas chiffrées durant les opérations de réplication de stockage entre les zones de disponibilité. La sécurité des transferts est assurée par des canaux de communication dédiés et sécurisés.
:::

---

## Les réseaux

Le produit OpenIaaS est compatible avec [les réseaux privés](../network/private_network) et [l'accès internet](../network/internet).

Deux types de réseaux sont disponibles depuis la configuration d'une machine virtuelle.

### Les réseaux de type VLAN

Les réseaux de type VLAN sont à propager à raison d'un VLAN par carte réseau. Si vous souhaitez utiliser plusieurs réseaux, il suffit de créer plusieurs cartes réseau.

Une limitation est présente sur le nombre de cartes maximum qu'on peut créer sur une VM, elle est de 7.

### Le VLAN TRUNK

Dans le cas où vous devez propager plus de 7 VLANs, vous devez utiliser le VLAN Trunk.
Le VLAN Trunk laisse passer tous vos VLANs sur une seule carte. La configuration des ID de VLANs est à faire via des interfaces virtuelles de type VLAN depuis l'OS de la VM. Les ID de VLANs sont les mêmes que ceux présents et visibles depuis la console.

## Sauvegarde de machines virtuelles

L'offre OpenIaaS intègre __une architecture de sauvegarde distribuée native et non débrayable__, élément obligatoire dans le cadre de la qualification SecNumCloud française.

Les sauvegardes sont stockées sur le [Stockage Objet qualifié SecNumCloud](../storage/oss), garantissant une protection optimale en cas de défaillance majeure du datacenter de production. Cette approche permet de restaurer vos données sur un datacenter secondaire, même en cas d'incident critique comme un incendie.

### Services de protection des données disponibles

| Service | Description |
|---|---|
| **Sauvegarde incrémentale (Agentless)** | Sauvegarde sans agent via les mécanismes natifs de l'hyperviseur, vers un dépôt S3 distant. |
| **Sauvegarde des métadonnées** | Protection des configurations du pool de virtualisation et de l'orchestrateur de sauvegarde — indispensable pour le Disaster Recovery. |
| **Restauration granulaire** | Restauration possible au niveau VM complète, disque virtuel individuel, ou fichier unitaire. |
| **Offloading S3 Multi-AZ** | Externalisation vers le stockage objet S3 Cloud Temple répliqué entre zones de disponibilité. |

Les vitesses de sauvegarde et de restauration dépendent du taux de changement sur les environnements. La politique de sauvegarde est entièrement configurable depuis [la Console Cloud Temple](../console/console.md) pour chaque machine virtuelle.

| Référence                                    | Unité | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SAUVEGARDE - Accès au service                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Architecture technique de la sauvegarde

#### Vue globale

L'architecture repose sur une séparation stricte entre le **plan de contrôle** et le **plan de données** : l'orchestrateur de sauvegarde est hébergé dans le cluster de management de Cloud Temple (distinct et inaccessible au client), tandis que les données de sauvegarde sont stockées sur un dépôt S3 distant, physiquement séparé de l'infrastructure de production. Les données transitent chiffrées entre les deux composants.

#### Orchestrateur de sauvegarde

L'orchestrateur est déployé dans le cluster de management de Cloud Temple, **inaccessible directement au client**. Il orchestre l'ensemble des jobs de sauvegarde et gère le chiffrement.

- **Politiques standard** : des politiques de sauvegarde sont appliquées par défaut à chaque tenant.
- **Politiques personnalisées** : le client peut demander des fréquences ou rétentions spécifiques via un ticket de support dans la console Cloud Temple.

#### Stockage distant S3

Les sauvegardes sont envoyées vers le [Stockage Objet qualifié SecNumCloud](../storage/oss) de Cloud Temple, avec réplication Multi-AZ pour garantir la résilience face à la perte d'un site physique entier.

---

### Mécanisme de sauvegarde : Incremental Backup

Le service utilise un mode de sauvegarde **incrémentale**. Ce mode cible un **Backup Repository** (le stockage S3 distant) et n'exporte jamais un backup complet après le premier : seuls les **blocs de données modifiés** sont transférés à chaque cycle.

:::info[Sauvegarde incrémentale vs Réplication]
La **sauvegarde incrémentale** cible un dépôt S3 distant et est optimisée pour la **protection longue durée**. Elle ne doit pas être confondue avec la **réplication** (Disaster Recovery à chaud) qui cible un Storage Repository local — ce mode est couvert par la fonctionnalité de [réplication de machines virtuelles](#réplication-de-machines-virtuelles).
:::

#### Cycle de vie technique d'une sauvegarde incrémentale

Voici les étapes successives déclenchées à chaque exécution d'un job de sauvegarde :

**1. Création du snapshot local (Source)**

Au lancement du job, l'orchestrateur demande à l'hyperviseur de créer un snapshot de la VM. Ce snapshot sert de point de comparaison pour calculer le delta par rapport au snapshot de référence précédent.

**2. Export différentiel via Changed Block Tracking (CBT)**

L'orchestrateur compare le nouveau snapshot avec le snapshot de référence précédent via les métadonnées CBT. Seuls les blocs de données ayant changé depuis le dernier backup sont extraits — pas l'intégralité du disque.

**3. Chiffrement et transfert vers S3**

Les blocs modifiés sont **chiffrés à la volée par l'orchestrateur** puis envoyés via HTTPS/TLS 1.3 vers le bucket S3 distant.

**4. Rotation des snapshots (Coalesce)**

Une fois le transfert validé, l'ancien snapshot de référence est supprimé, et le nouveau snapshot devient la référence pour le prochain cycle. L'hyperviseur déclenche alors un processus de **coalesce** (fusion) pour réintégrer les données de l'ancien delta dans la chaîne de disques virtuels.

:::warning[Impact I/O du Coalesce]
L'opération de coalesce est **intensive en I/O** sur le stockage de production. Elle est déclenchée automatiquement après chaque sauvegarde réussie. Il est recommandé de planifier les fenêtres de sauvegarde pendant les périodes de faible charge applicative.
:::

**5. Gestion de la rétention sur S3 (Merge) et Key Backup Interval**

Sur le stockage S3, l'orchestrateur gère la rotation des sauvegardes par **fusion** (*merge*) des anciens deltas dans le backup complet le plus ancien conservé selon la politique de rétention.

Pour garantir l'intégrité de la chaîne de sauvegarde, un backup complet est **forcé périodiquement** (typiquement tous les 20 incréments — *Key Backup Interval*). Cela crée un nouveau point de départ propre et limite l'impact d'une éventuelle corruption d'un maillon de la chaîne.

---

### Impact sur le dimensionnement du stockage de production

:::warning[Point d'attention critique — Stockage Bloc (Thick provisioning)]
L'offre OpenIaaS repose sur du stockage Bloc à haute performance (Fibre Channel / LVM). Les snapshots utilisés par la sauvegarde incrémentale sont provisionnés en mode **Thick** : chaque snapshot consomme sur le Storage Repository (SR) la **taille nominale complète du disque de la VM**, et non uniquement le delta réel.

**Exemple de consommation pour une VM avec un disque de 50 Go :**

| Élément | Consommation sur le SR |
|---|---|
| Disque VM actif | 50 Go |
| Snapshot de référence permanent (pour le calcul du delta) | 50 Go |
| Snapshot temporaire créé durant l'export | 50 Go |
| **Total requis durant la fenêtre de sauvegarde** | **jusqu'à 150 Go** |

**Règle de dimensionnement recommandée** : prévoir **au minimum 50% d'espace libre** sur le stockage de production par rapport au volume total des VMs sauvegardées, afin de supporter cette surcharge inhérente au stockage bloc haute performance.
:::

---

### Sécurité et chiffrement des sauvegardes

#### Chiffrement en transit

Toutes les communications entre l'orchestrateur de sauvegarde et le stockage S3 sont chiffrées via **HTTPS / TLS 1.3**.

#### Chiffrement au repos (At Rest) et gestion des clés

Le chiffrement est appliqué par l'orchestrateur de sauvegarde, **avant** l'envoi des données vers le S3.

| Paramètre | Valeur |
|---|---|
| **Algorithme** | AES-256 ou ChaCha20-Poly1305 |
| **Génération de la clé** | Automatique au déploiement de l'orchestrateur de sauvegarde |
| **Stockage de la clé** | Vault centralisé Cloud Temple (jamais exposé dans l'interface client) |
| **Résilience** | En cas de perte de l'orchestrateur, la clé est réinjectée depuis le Vault pour restaurer le service |

#### Isolation réseau (architecture SecNumCloud)

L'infrastructure de sauvegarde est conçue pour être **strictement étanche** vis-à-vis des environnements clients :

- **Séparation physique** : les réseaux *Client*, *Administration* et *Backup* reposent sur des backbones physiques distincts et des contextes de routage (VRF) séparés.
- **Impossibilité d'infection latérale** : une VM compromise ne peut pas atteindre le stockage S3 ni l'orchestrateur de sauvegarde — aucun chemin réseau n'existe entre eux. Le S3 n'est jamais « monté » dans la VM.

#### Administration sécurisée

L'administration de la plateforme de sauvegarde est **réservée aux équipes Backup de Cloud Temple** et soumise aux exigences SecNumCloud :

| Contrôle | Mesure |
|---|---|
| **Bastion d'accès** | Passage obligatoire par un bastion d'administration interne durci (Ubuntu Hardened) |
| **Poste de travail** | Accès uniquement depuis des laptops d'administration dédiés et sécurisés |
| **Authentification** | MFA obligatoire via un annuaire LDAP d'administration dédié (distinct du LDAP bureautique) |

---

### Monitoring et audit

- **Journaux de sauvegarde** : visibles par le client directement dans la Console Cloud Temple — statut (succès/échec), volumétrie, horodatage.
- **Logs d'accès administrateur** : les accès aux infrastructures de backup (orchestrateur, S3) sont journalisés et **audités mensuellement** pour détecter toute anomalie.
- **Tests d'intrusion (Pentests PASSI)** : l'infrastructure fait l'objet de pentests réguliers par des prestataires qualifiés PASSI dans le cadre du maintien de la qualification SecNumCloud.
- **Sécurité physique** : l'ensemble des équipements est hébergé dans les zones SecNumCloud (cages physiques dédiées avec contrôle d'accès biométrique) des datacenters Cloud Temple.

---

### Compatibilité et cas particuliers

:::warning[VMs à écritures disque continues]
Certaines machines virtuelles ne sont pas compatibles avec cette technologie de sauvegarde lorsque leurs **charges d'écriture disque sont constantes** (bases de données actives, journaux transactionnels, etc.). L'hyperviseur ne peut alors pas finaliser le cliché instantané sans geler la VM, ce qui peut durer plusieurs heures.

Pour ces charges de travail, nous recommandons de **compléter ou remplacer la sauvegarde hyperviseur par une sauvegarde applicative** : dump de base de données (pg_dump, mysqldump…), sauvegarde par agent, ou export natif de l'application.
:::

---

### Création d'une politique de sauvegarde

La création d'une politique de sauvegarde est une opération d'administration réalisée **exclusivement via une demande de support**, accessible par l'icône de bouée en haut à droite de l'interface.

La demande doit préciser :

- Le nom de votre Organisation
- Les coordonnées d'un contact (email et téléphone) pour finaliser la configuration
- Le nom du tenant
- Le nom de la politique de sauvegarde
- Les caractéristiques souhaitées : fréquence, rétention (x jours, y semaines, z mois…)

#### Contraintes de planification

| Contrainte | Valeur |
|---|---|
| **Intervalle minimum entre deux exécutions** | 24 heures |
| **Rétention maximale** | 24 mois |
| **Exécutions simultanées par politique** | 1 seule à la fois |

:::warning[Une politique ne peut tourner qu'une seule fois à la fois]
Chaque politique de sauvegarde est **mono-instance** : une seule exécution peut être active simultanément.

**Conséquence pratique** : si vous ajoutez de nombreuses machines virtuelles dans une politique existante et que le backup de la veille n'est pas encore terminé au moment du déclenchement planifié, **le nouveau cycle ne démarrera pas** — il sera ignoré jusqu'à la prochaine occurrence.

Pour éviter ce cas de figure :
- vérifiez les **durées d'exécution** de vos jobs depuis les journaux de la Console Cloud Temple,
- ajustez la **fréquence** ou la **taille de la politique** si les sauvegardes débordent régulièrement sur la fenêtre suivante,
- envisagez de **répartir les VMs sur plusieurs politiques** avec des horaires décalés pour les gros périmètres.
:::

:::info[Rétention longue durée — disponibilité future]
**La rétention maximale est actuellement de 24 mois.** Une rétention longue durée (jusqu'à 10 ans) sera intégrée avec le lancement de notre produit **Glacier**, prévu au **premier trimestre 2027**, sous forme de souscription complémentaire.

Pour des durées de rétention aussi longues, nous recommandons de sauvegarder **exclusivement des fichiers plats** (fichiers bruts, documents statiques) ainsi que des **dumps de bases de données**. La restauration d'un serveur complet après 10 ans comporte en effet des risques importants : de nombreux services ou dépendances peuvent être devenus obsolètes ou incompatibles avec l'environnement actuel.

**Alternative disponible dès maintenant** : le service de **sauvegarde par agent**, disponible en souscription complémentaire. Contactez le support pour plus d'informations.
:::

## Les machines virtuelles

### Gestion des ressources vCPU

Les modifications de ressources vCPU s'effectuent à froid (machine éteinte). La plateforme supporte jusqu'à 254 vCPUs par machine virtuelle (limite théorique), avec des tests concluants réalisés sur des VMs Linux équipées de 128 vCPUs.

Il est important de noter que le support du système d'exploitation invité constitue un facteur déterminant lors de l'allocation des ressources. Une allocation dépassant les limites supportées par le système d'exploitation peut entraîner des problèmes de performance significatifs.

### Gestion des ressources mémoire

Les modifications de mémoire s'effectuent également à froid. Les limites sont les suivantes:

- 1,5 TiB avec prise en charge des snapshots mémoire
- 8 TiB sans prise en charge des snapshots mémoire
- 16 TiB (limite théorique sans support de sécurité, moins la RAM allouée à Xen et au domaine de contrôle)

La mémoire réellement utilisable peut être limitée par le système d'exploitation invité. Dépasser les limites prises en charge par l'OS invité peut entraîner des baisses de performances.

### Gestion des disques

- La taille maximale d'un disque est de 2 To
- Les disques utilisent le format VHD standard
- Le nombre maximal de disques virtuels par machine virtuelle, y compris les lecteurs CD-ROM, est de 24

Il n'est pas possible de redimensionner les disques une fois créés. Pour étendre la capacité de stockage, il est nécessaire de créer un nouveau disque.

### Outils pour les machines virtuelles

Ces outils sont utilisés pour avoir un fonctionnement optimal des machines virtuelles. Lorsque vous souhaiterez effectuer une action et qu'un de ces outils est nécessaire, un message s'affichera sur la console Cloud Temple.
Pour installer ces outils, vous pouvez consulter les sites officiels de Xen Server afin d'obtenir une démarche précise selon votre OS.

#### Management Agent

Le Management Agent est un composant installé dans chaque machine virtuelle. Il permet à l'hyperviseur de mieux gérer la machine en ayant accés à plus d'informations et permet de réaliser certaines actions plus proprement.

#### PV Drivers (Paravirtualization Drivers)

Les PV Drivers sont des pilotes installés dans la machine virtuelle pour améliorer ses performances.
Sans ces pilotes, la machine fonctionne, mais plus lentement. De plus, ils permettent certaines actions avancées.
Les PV Drivers sont installés nativement sur la majorité des noyaux Linux actuels.

#### Tools

Les Tools sont un ensemble de composants logiciels qui améliorent l'intégration de la machine virtuelle avec l'infrastructure de virtualisation.

## Catalogues

Le catalogue permet de gérer trois types d'éléments essentiels:

- Les images disque (ISO)
- Les templates de configuration
- Les templates préinstallés de machines virtuelles

Dans la vue détaillée d'un template de machine virtuelle, vous pouvez consulter des informations cruciales telles que la localisation, le nombre de disques ou encore le nombre d'adaptateurs réseau.

Lorsque le nombre de disques virtuels est indiqué comme étant 0, cela signifie qu'il s'agit d'un template de configuration sans système d'exploitation préinstallé, vous permettant ainsi de déployer votre propre environnement personnalisé.

## Réplication de machines virtuelles

La __réplication de machines virtuelles__ de Cloud Temple garantit la protection et la continuité de vos données critiques grâce à une copie automatisée de vos environnements vers une zone de disponibilité distincte. Cette fonctionnalité, intégrée nativement à le produit IaaS Open Source, répond aux exigences les plus strictes de continuité d'activité et de reprise après sinistre.

### Une protection automatisée et sécurisée

La réplication Cloud Temple s'appuie sur une infrastructure __qualifiée SecNumCloud__, garantissant :

- __Réplication asynchrone__ : Copie continue de vos machines virtuelles sans impact sur les performances de production
- __Séparation géographique__ : Stockage des réplicas dans une zone de disponibilité différente de la source
- __Automatisation complète__ : Processus entièrement automatisé via la [Console Cloud Temple](../console/console.md)
- __Conformité réglementaire__ : Respect des exigences de sauvegarde et de continuité d'activité

### Avantages de la réplication

| Avantage                | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuité d'activité   | Protection de vos services critiques en cas d'incident majeur sur le site principal.                                                          |
| Protection géographique | Réplication vers une zone de disponibilité distincte, protégeant contre les sinistres localisés.                                             |
| Flexibilité temporelle  | Choix de l'intervalle de réplication selon vos besoins : de 1 minute à 24 heures.                                                            |
| Simplicité de gestion   | Configuration et surveillance entièrement intégrées à la Console Cloud Temple.                                                                |
| Conformité SecNumCloud  | Infrastructure qualifiée garantissant le plus haut niveau de sécurité pour vos données sensibles.                                             |

### Configuration de la réplication

#### Politiques de réplication

La création d'une politique de réplication définit les paramètres de protection de vos machines virtuelles :

- __Destination__ : Sélection du stockage cible dans la zone de disponibilité de réplication
- __Fréquence__ : Intervalle de réplication adapté à vos besoins de récupération (RPO)
- __Rétention__ : Nombre de points de récupération conservés

#### Intervalles disponibles

| Intervalle              | Usage recommandé                           | RPO (Perte de données max) |
|-------------------------|--------------------------------------------|-----------------------------|
| __1 à 59 minutes__      | Applications critiques temps réel         | < 1 heure                   |
| __1 à 24 heures__       | Applications métier et environnements standard | < 24 heures               |

#### Association des machines virtuelles

Une fois la politique créée, vous pouvez associer vos machines virtuelles à protéger :

- __Sélection simple__ : Choix des VMs depuis l'interface de la Console
- __Validation automatique__ : Vérification de la compatibilité et des prérequis
- __Activation immédiate__ : Démarrage automatique de la réplication après configuration

### Gestion des réplicas

#### Vue des politiques

La Console Cloud Temple offre une vue centralisée de vos politiques de réplication avec :

- Nom et fréquence de chaque politique
- Zone de disponibilité de destination
- Pool et stockage associés
- Actions de gestion disponibles

#### Vue des réplicas

Le tableau des réplicas vous permet de visualiser :

- Nom des machines virtuelles répliquées
- Emplacement source et cible
- Politique de réplication associée
- Export des données au format CSV

### Bonnes pratiques

#### Recommandations par type de charge

- __Applications critiques__ : Réplication toutes les 1-30 minutes pour minimiser la perte de données
- __Applications métier__ : Réplication horaire ou bi-horaire selon les besoins
- __Environnements de développement__ : Réplication quotidienne généralement suffisante

#### Planification des politiques

- Créez des politiques distinctes selon les criticités de vos applications
- Nommez clairement vos politiques pour faciliter la gestion
- Vérifiez régulièrement l'état de vos réplicas depuis la console
- Documentez votre stratégie de réplication pour vos équipes

__Remarque importante :__

*La réplication ne remplace pas une stratégie de sauvegarde complète. Elle constitue un complément essentiel pour assurer la continuité d'activité en cas d'incident majeur sur votre site principal.*

## Haute disponibilité

La haute disponibilité permet d'assurer la continuité de service des machines virtuelles (VM) en cas de défaillance d'un host physique au sein d'un pool OpenIaaS.
Avec la haute disponibilité (HA), chaque host dans le pool envoie régulièrement des signaux de vie à ses pairs via le stockage partagé (Block Storage Heartbeat). En cas d'absence prolongée de réponse, l'host est considéré comme défaillant.

Un Block Storage désigné comme heartbeat signifie qu'il servira de base pour authentifier les hosts qui ne répondraient plus.

Pour que la haute disponibilité soit correctement configurée dans un pool OpenIaaS, il est indispensable de disposer __d'au moins deux hosts__ connectés.

Chaque VM doit être configurée avec un niveau de priorité de redémarrage en haute disponibilité :

#### Disabled

  La haute disponibilité n'est pas configurée. En cas de défaillance de l'hôte, la machine virtuelle ne sera pas redémarrée.

#### Restart

  En cas de défaillance de l'hôte, la machine virtuelle sera automatiquement redémarrée dès que des ressources seront disponibles dans le pool. Les machines virtuelles configurées en mode "restart" sont traitées en priorité, avant celles configurées en mode "best-effort".

#### Best-Effort  

  En cas de défaillance de l'hôte, la machine virtuelle ne sera automatiquement redémarrée que si des ressources restent disponibles après le traitement de toutes les machines virtuelles configurées en mode "restart". Le mode "Best-effort" ne fait qu'une seule tentative, donc si les ressources sont insuffisantes, la machine virtuelle ne sera pas redémarrée.
