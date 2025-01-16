---
title: Concepts
---

L'offre __IaaS (Infrastructure As A Service)__ de Cloud Temple est conçue pour répondre aux besoins critiques de continuité et reprise d'activité, avec un accent particulier sur les secteurs exigeants comme l'industrie, la banque et l'assurance. Basée sur des technologies de pointe, cette infrastructure garantit une disponibilité maximale et une performance optimale pour vos charges de travail critiques.

## Une plateforme technologique de confiance

La plateforme IaaS de Cloud Temple s'appuie sur des partenaires technologiques de renommée internationale :

- Calcul : **CISCO UCS**.
- Stockage : **IBM Spectrum Virtualize**, **IBM FlashSystem** pour le stockage bloc.
- Réseau : **JUNIPER**.
- Virtualisation : **VMware**, offrant une base fiable et éprouvée pour gérer vos environnements cloud.
- Sauvegarde: **IBM Spectrum Protect Plus**, pour l'orchestration et le stockage des sauvegarde.

Cette architecture repose sur le modèle **VersaStack**, une alliance entre Cisco et IBM, garantissant une compatibilité étendue avec les principaux éditeurs logiciels.

## Une infrastructure dédiée et automatisée

Bien qu'entièrement automatisée grâce à des APIs et un provider Terraform, l'offre IaaS de Cloud Temple propose une infrastructure unique :

- **Ressources dédiées** : Les lames de calcul, volumes de stockage, et stacks logicielles (virtualisation, sauvegarde, firewalling, etc.) ne sont jamais mutualisées entre les clients.
- **Prédictibilité maximale** : Vous maîtrisez les taux de virtualisation, la pression en IOPS sur le stockage et bénéficiez d’une facturation claire, à la consommation mensuelle.

La plateforme est qualifiée **SecNumCloud** par l'[ANSSI](https://www.ssi.gouv.fr/), garantissant un haut niveau d'automatisation et de sécurité.

## Principales fonctionnalités

- Ressources de calcul (CPU, RAM) dédiées et à la demande.
- Stockage à la demande (plusieurs classes disponibles).
- Ressources réseau (Internet, réseaux privés).
- Sauvegardes croisées avec rétention configurable.
- Réplication asynchrone pour le stockage ou les machines virtuelles.
- Pilotage via la [Console Shiva](../console/console.md) ou en mode Infrastructure as Code grâce aux APIs et au provider Terraform.

## Avantages

| Avantage            | Description                                                                                                                                    |   
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confiance numérique | Hébergement des données en France et conformité RGPD.                                                                                          |   
| Sécurité            | Plateforme hautement sécurisée, qualifiée **SecNumCloud**, **HDS** (Hébergement des Données de Santé), **ISO 27001** et **ISAE 3402 type II**. |  
| Haute disponibilité | Taux de disponibilité de la plateforme de 99,99%, mesuré mensuellement, plages de maintenance incluses.                                        |   
| Résilience          | Mise en place de plans de continuité ou de reprise d'activité selon les besoins.                                                               |
| Automatisation      | Plateforme entièrement automatisée pensée pour s'intégrer dans un programme de transformation numérique.                                        |
| On demand           | Ressources disponibles à la demande.                                                                                                          |













## Calcul

les lames fournies par Cloud Temple sont de type __CISCO UCS B200__ ou des __CISCO UCS X210c__ . Elles sont entièrement managées par Cloud Temple (firmware, version d'os, ...) au travers de la console Cloud Temple.

Plusieurs catégories de lames de calcul sont disponibles au catalogue pour supporter vos charges de travail (Virtualisation, Conteneurisation, ...).
Celles-ci présentent des caractéristiques et performances différentes pour répondre au mieux à vos besoins. Le catalogue des lames de calcul évolue régulièrement.

Dans le cadre de l'usage avec une offre de virtualisation, un cluster d'hyperviseurs est uniquement composé de lame de calcul du même type (il n'est pas possible de mixer les lames de différents types dans un meme cluster).

| Référence             | RAM  __(1)__ | Fréquence __(2)__                         | Nombre de coeurs / threads | Connectivité __(3)__ | GPU **(4)**          | SKU pour l'offre Vmware         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Lame ECO v3           | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Lame STANDARD v3      | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Lame ADVANCE v3       | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Lame PERFORMANCE 1 v3 | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Lame PERFORMANCE 2 v3 | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Lame PERFORMANCE 3 v3 | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Lame PERFORMANCE 4 v3 | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou equivalent)  | 32 / 64 threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48go | csp:fr1:iaas:vmware:perf4:v3    |

__Remarques__ :

- __(1)__ La quantité de mémoire livrée est celle physiquement disponible sur les lames. Il n'est pas possible de changer la quantité physique de mémoire d'une lame.

- __(2)__ La fréquence de base minimum / fréquence turbo, exprimée en Ghz. Par défaut, les processeurs sont configurés pour une performance maximale au niveau du BIOS.

- __(3)__ La connectivité physique est mutualisée pour l'accès réseau et l'accès storage bloc, la plateforme CISCO étant convergée.

- __(4)__ L'offre de GPU disponible réellement évolue en permanence. Au 1° Mai 2024, l'offre est basée sur les GPU NVIDIA LOVELACE L40S. Par défaut, la lame PERF4 est livrée avec 2 cartes L40S de 48 Go de ram. Contactez le support pour plus de précision si nécessaire.

La disponibilité de l'offre de calcul est de 99.99%, calculée mensuellement, plage de maintenance incluse. L'éligibilité en cas de non-respect du SLA est soumise à
la création d'un ticket incident. Vous devez également posséder au moins deux hôtes par cluster et activer la fonctionnalité __High Availability__ (HA).
Cette fonctionnalité permet à votre architecture de redémarrer automatiquement vos machines virtuelles sur le deuxième hyperviseur.
Dans l'hypothèse où une zone de disponibilité ne contient qu'un seul hyperviseur, le redémarrage automatique n'est pas possible.













## Réseau
Le service réseau sur la plateforme IaaS de Cloud Temple repose sur une infrastructure réseau basée sur la technologie VPLS, offrant une segmentation flexible et performante pour répondre aux besoins des clients en matière de connectivité et d’isolation réseau.

### VLANs de niveau 2

Les VLANs mis à disposition dans l'offre IaaS sont de type **niveau 2**, offrant une isolation réseau complète et une configuration adaptable selon les besoins.

#### Principaux concepts :
- **Partage entre clusters et zones de disponibilité (AZ)** : 
  - Les VLANs peuvent être partagés entre les différentes AZ et les différents clusters appartenant au même tenant.
- **Propagation inter-tenants** : 
  - Les VLANs peuvent être propagés entre plusieurs tenants appartenant à une même organisation, facilitant les communications internes.

---

### Performance réseau

L'infrastructure réseau garantit une faible latence pour des performances optimales :
- **Latence intra-AZ** : Inférieure à **3 ms**.
- **Latence inter-AZ** : Inférieure à **5 ms**.

---

### Points clés

1. **Flexibilité** : Les VLANs peuvent être configurés pour s'adapter aux environnements multi-clusters et multi-tenants.
2. **Performance élevée** : Une latence minimale assure une communication rapide et efficace entre les zones de disponibilité.
3. **Isolation et sécurité** : Les VLANs de niveau 2 offrent une segmentation réseau stricte pour protéger les données et les flux.

---













## Stockage bloc

Cloud Temple propose plusieurs classes de stockage basées sur la technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
et [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La technologie __IBM SVC__ permet de délivrer le niveau de performance requis pour les environnements de nos clients grâce à la grande
quantité de cache mémoire embarquée dans les contrôleurs et à la possibilité de répartir l’ensemble des IOPS
d’un serveur sur plusieurs SAN.

Elle est aussi utilisée pour permettre la réplication de vos LUNs de stockage en mode bloc entre
les zones de disponibilité ou faciliter les interventions sur les baies de stockages.

Le stockage est principalement du stockage de type FLASH NVME dédié aux charges de travail professionnelles.
Les disques sont utilisés par les baies de stockage en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

Le classe de stockage __'Mass Storage'__ propose des disques mécaniques pour les besoins d'archivages
dans un contexte d'efficience économique. Plusieurs niveaux de performances sont disponibles :

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La disponibilité du stockage est de 99.99% mesuré mensuellement, plage de maintenance incluse,*
- *Il n'y a pas de restriction ou de quota sur la lecture ou l'écriture,*
- *Il n'y a pas de facturation à l'IOPS,*
- *Il n'y a pas d'engagement de performance sur la classe __'Mass Storage'__,*
- *La taille minimale d'une LUN de stockage est de 500Gio,*
- *Lors de l'usage d'un mécanisme de réplication de stockage, les performances doivent être identiques sur les deux zones de disponibilité,*
- *Aucun mécanisme d'optimisation "intelligent" de type compression ou déduplication n'est mis en œuvre : quand vous réservez 10Tio de stockage, vous avez physiquement 10Tio utile de stockage mis en œuvre sur les machines IBM.*
- *Les LUNs de stockage sont dédiés à l'environnement client.*

### Utilisation dans le cadre de l'offre de calcul vmware

Dans le cadre de l'utilisation du stockage en mode bloc sous forme de datastore dans l'offre de calcul VMware de Cloud Temple, **vous devez prendre en compte plusieurs considérations importantes** :

1. **Fichier de swap (.VSWP) lors du démarrage des machines virtuelles** : Lorsqu'une machine virtuelle démarre, elle crée un fichier .VSWP de la taille de sa mémoire sur le disque. Par conséquent, pour pouvoir démarrer vos machines virtuelles, vous devez toujours disposer dans votre datastore d'un espace libre équivalent à la somme des tailles mémoires de vos machines virtuelles. Par exemple, si votre datastore dispose de 1 Tio de stockage bloc et que vous souhaitez démarrer 10 machines virtuelles de 64 Gio de mémoire chacune, 640 Gio d'espace disque seront nécessaires. Sans cet espace, le démarrage des machines sera limité par la capacité disponible pour créer les fichiers de swap.

2. **Espace libre pour les snapshots de sauvegarde** : Le service de sauvegarde utilise des clichés instantanés (snapshots). Vous devez donc toujours avoir suffisamment d'espace libre pour permettre la création d'un instantané lors de la sauvegarde d'une machine virtuelle. La taille de l'instantané dépend du volume d'écriture de la machine virtuelle et du temps nécessaire pour effectuer la sauvegarde. En règle générale, il est recommandé de maintenir au moins 10 % d'espace libre pour cette opération.

3. **Gestion des disques dynamiques** : Soyez prudent avec l'utilisation des disques dynamiques. Si vous ne maîtrisez pas leur croissance, un manque d'espace physique peut entraîner un gel (freeze) de la machine virtuelle dans le meilleur des cas, ou un plantage avec corruption dans le pire des cas. Il est crucial de surveiller attentivement l'espace disponible sur vos datastores lorsque vous utilisez ce type de disque.

Une gestion proactive de l'espace disque est essentielle pour assurer le bon fonctionnement de vos machines virtuelles et la fiabilité des sauvegardes. Assurez-vous de toujours disposer de l'espace nécessaire pour les fichiers de swap, les snapshots et la croissance des disques dynamiques.

## Stockage en mode backup

Le stockage dédié à la sauvegarde de vos machines virtuelles est auto-provisionné par la plateforme [IBM Spectrum Protect Plus](backup.md) dans la limite du quota commandé. 

| Référence                | Unité | SKU                                      | 
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Réplication du stockage en mode bloc

#### Principes

Pour permettre la mise œuvre de vos plans de reprise d'activité, lorsqu'il n'est pas possible d'être en 
situation de continuité d'activité avec des mécanismes applicatifs et que la réplication des machines virtuelles 
n'est pas adaptée, Cloud Temple propose des __mécanismes de réplication du stockage en mode bloc entre les zones de disponibilité d'une région__.

Ces mécanismes de réplication sont appliqués sur les LUNs de stockage de vos environnements, en complément des sauvegardes. 
Le choix de l'utilisation d'un mécanisme de réplication sur un environnement __dépend de nombreux facteurs dont sa criticité, la perte de données tolérée ou encore la performance visée__ pour l'application. 

Cloud Temple propose deux types de mécanismes déployés dans une configuration actif/passif : 

- La réplication __asynchrone__ (ou __'Global Mirror'__) : *La fonction __'Global Mirror'__ fournit un processus de copie asynchrone. 
Lorsqu'un hôte écrit sur le volume primaire, la confirmation de l'achèvement de l'E/S est reçue avant que l'opération 
d'écriture ne se termine pour la copie sur le volume secondaire. Si une opération de basculement est initiée, l'application 
doit récupérer et appliquer toutes les mises à jour qui n'ont pas été confirmées sur le volume secondaire. 
Si les opérations d'E/S sur le volume primaire sont mises en pause pendant une courte période, 
le volume secondaire peut devenir une correspondance exacte du volume primaire. Cette fonction est comparable à un processus 
de sauvegarde continue dans lequel les dernières mises à jour sont toujours manquantes. 
Lorsque vous utilisez Global Mirror à des fins de reprise après sinistre, vous devez réfléchir à la manière dont vous souhaitez gérer ces mises à jour manquantes.*

- La réplication __synchrone__ (ou __'Metro Mirror'__) : *La fonction __'Metro Mirror'__ est un type de copie à distance qui crée une copie synchrone 
des données d'un volume primaire vers un volume secondaire. Avec des copies synchrones, les applications hôtes écrivent sur le volume primaire, mais ne reçoivent pas de confirmation 
que l'opération d'écriture est terminée tant que les données ne sont pas écrites sur le volume secondaire. Cela garantit que les deux volumes contiennent des données identiques lorsque 
l'opération de copie est terminée. Après que l'opération de copie initiale est terminée, la fonction Metro Mirror 
maintient en permanence une copie entièrement synchronisée des données source sur le site cible. __Depuis le 1° janvier 2024, la fonction 'Metro Mirror' n'est plus commercialisée.__*


On définit alors un site dit "actif" ou "principal" et un site "passif" ou "standby".
Le plan de reprise d'activité est activé en cas de sinistre ou dans le cadre d'une demande de test du PRA. 
Le site passif prend ensuite le relais du site actif.

#### Réplication asynchrone 

Lorsque vos charges de travail nécessitent des temps de reprise d'activité courts et qu'il n'est pas acceptable 
ou adapté d'utiliser des mécanismes de type réplications applicatives / réplication de machines virtuelles, 
il est possible de répliquer une LUN de stockage SAN entre deux zones de disponibilité d'une même région. 

Cette offre permet d'obtenir un __RPO de 15Mn__ et un __RTO inférieur à 4H__. Elle permet de repartir beaucoup plus rapidement que 
la mise en œuvre d'une restauration de sauvegarde.

Dans un volume de stockage en réplication asynchrone (__Global Mirror__), les contrôleurs de virtualisation SAN des 
deux zones de disponibilité travaillent de concert pour réaliser les opérations d'écritures sur les deux sites. 
Le site maitre n'attend pas l'acquittement d'écriture du site esclave.

Les étapes d'une opération d'écriture sont les suivantes :

1. Un hyperviseur souhaite réaliser __une opération d’écriture sur un volume Global-Mirror__ : il envoie sa requête au contrôleur SAN de sa zone de disponibilité, 
2. Le contrôleur SAN local demande au contrôleur SAN de la zone distante de réaliser l’opération d’écriture,
3. le contrôleur SAN local n'attend pas l'acquittement du SAN distant et réalise alors l’écriture localement,
4. Il donne __acquittement__ à l’hyperviseur ayant émis la requête,
5. __Les hyperviseurs du site distant n’accèdent pas directement à la LUN Global Mirror__ : Une demande de service est nécessaire.


| SLA       | Description                                                                                                                                       |   
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | En cas de sinistre sur le datacenter principal, la quantité de données maximales perdue correspond au maximum aux 15 dernières minutes d'écriture |
| RTO < 4H  | En cas de sinistre sur le datacenter principal, la reprise d'activité est garantie sous 4 heures selon la complexité des environnements.          |

En cas d’activation du PRA, l’équipe de Cloud Temple réalise une opération de présentation de la LUN __'Global Mirror'__ aux hyperviseurs distants pour qu’ils puissent accéder à la donnée. La mise en place de cette solution nécessite donc d'avoir réservé sur le site 'standby' de la ressource de calcul et de la RAM pour reprendre l'activité en cas de sinistre.

L'usage de cette technologie nécessite également le doublement de l'espace disque : il est nécessaire d'avoir exactement le même espace sur le site distant que sur le site local. 

L'usage de ce mécanisme peut impacter la performance de l'application à hauteur de 10 %. __Seules les classes de stockage 500 Iops/To, 1500 Iops/To et 3000 Iops/TO sont compatibles.__


| Référence                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STOCKAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *L'offre étant asynchrone, il est possible lors d'un sinistre que certaines opérations disques n'est pas été écrite sur le site distant. Il peut donc y avoir un risque sur la cohérence des données, a mitigé dans l'analyse de risque du plan de reprise d'activité.*
- *La réplication du stockage en mode bloc se fait de façon masquée pour les machines virtuelles et les applications,*
- *À ce titre, il est important de privilégier les scénarios de réplication applicative ou éventuellement de réplication de machine virtuelle,*
- *Le calcul et la mémoire, sur le site de reprise, peuvent être diminués pour optimiser les coûts si une situation dégradée est acceptable pour le métier lors de l'action du plan de reprise d'activité.*














## Virtualisation VMware

L'offre de virtualisation VMware Cloud Temple qualifiée SecNumCloud est basée sur la technologie __VMware Vsphere__.

La plateforme est managées par Cloud Temple de façon automatique (maintien de condition de sécurité, maintien en condition opérationnelle, ...).
Elle est pilotable via l'interface graphique de la console Shiva ou via les APIs associées.

*__Remarque__* : *Pour des raisons de sécurité liées à la qualification SecNumCloud,
__il n'est pas possible pour le commanditaire d'accéder directement à la plateforme de virtualisation VMware__ (aucun accès direct au vCenter notamment).
En effet, la qualification SecNumCloud impose __une totale ségrégation__ entre les interfaces de pilotage des actifs techniques et l'interface du commanditaire (la console Shiva).*

- Les produits misent en oeuvre sont VMware ESXi, VMware Vcenter et VMware Replication.
- *Le réseau de l'offre de virtualisation n'utilise pas la technologie VMware NSX, mais est piloté matériellement par la technologie Juniper et le protocole VPLS.*
- *Le stockage n'utilise pas la technologie VMWare vSan, mais uniquement des SANs IBM en fiber channel 32G.*
- *Aucune forme d'optimisation cachée n'est mise en œuvre (compression, deduplication, ...).*

### Définition d'un cluster de lame de calcul ('Cpool')

Le __'Cpool'__ est un regroupement d'hyperviseur VMware ESXi, également connu sous le nom de *'cluster ESX'*.

Les hôtes présents dans un __'Cpool'__ appartiennent tous __au même tenant et à la même zone de disponibilité__ (AZ). Ils doivent nécessairement avoir la même classe :
__il n'est pas possible de mixer des modèles différents de lame de calcul au sein d'un même cluster__.

Toutes les lames de calcul étant livrées avec le maximum physique de mémoire, une limitation d'utilisation de la RAM est appliquée logiciellement au niveau du cluster pour s'assurer qu'elle correspond à la RAM facturée.

Par défaut, chaque lame dispose de 128 Go de mémoire activée au sein du __'Cpool'__.

Un __'Cpool'__ peut contenir au maximum 32 hyperviseurs. Au-delà de cette limite, il sera nécessaire de créer un deuxième cluster.

Le stockage peut être partagé entre les __'Cpool'__.

### Allocation Mémoire pour un 'Cpool'

La réservation de la RAM est configurable par cluster. Vous pouvez réduire ou augmenter la quantité de la RAM pour qu'elle corresponde à vos besoins à l'échelle du cluster.

__Attention à ne pas dépasser une moyenne de 85 % de consommation mémoire par lame de calcul__.
En effet, la technologie VMware utilisera une méthode d'optimisation de type compression qui peut impacter fortement les performances de vos charges de travail et complexifier le diagnostic.
De même, une trop forte pression mémoire sur vos lames de calcul forcera l'hyperviseur à décharger une partie de sa mémoire sur disque pour répondre aux besoins des machines virtuelles.

Ce cas, appelé __'Ballooning'__ impacte très fortement l'ensemble des performances des machines virtuelles situées sur le stockage (datastore) concerné.
__Le diagnostic est compliqué dans ce contexte__, car votre métrologie constatera des impacts au niveau CPU et non de la mémoire ou du stockage.
Gardez aussi à l'esprit que la première chose que fait l'hyperviseur au démarrage d'une machine virtuelle est de créer __un fichier de swap mémoire__ (.vswap) sur
le disque, de la taille de la mémoire de la machine virtuelle concernée. Il vous faut __en tenir compte sur le dimensionnement de votre stockage__.

Chaque lame de calcul est livré avec 128Go de mémoire activée logiciellement au niveau du __'Cpool'__ mais dispose physiquement de la totalité de la mémoire allouable.

Par exemple, pour un cluster de trois hosts de type ```vmware:standard:v2```, la réservation de la RAM à l'activation du __'Cpool'_ sera de 3 x 128Go = 384 Go de RAM.
Vous pourrez l'étendre au maximum à 3 x 384Go = 1152Go de mémoire.

    Minimum de mémoire d'un 'Cpool' = nombre de host X 128Go de mémoire
    Maximum de mémoire d'un 'Cpool' = nombre de host X la quantitée de mémoire physique de la lame de calcul

### Catalogues de machines virtuelles Cloud Temple

Cloud Temple met à votre disposition un catalogue de `Templates` régulièrement enrichi et mis à jour par nos équipes.
Il comprend à ce jour plusieurs dizaines de `Templates` et images à monter sur vos machines virtuelles.

### Mise a jour des Hyperviseurs
Cloud Temple fournit régulièrement des builds pour les hyperviseurs afin d’assurer l’application des correctifs de sécurité. 
Cependant, la mise à jour des hyperviseurs reste sous votre responsabilité, car nous n’avons pas de visibilité sur vos contraintes métier.

Le processus de mise à jour est entièrement automatisé. Pour garantir une continuité de service, un minimum de deux hyperviseurs est requis par cluster pendant la mise à jour. Assurez-vous de disposer des permissions nécessaires pour effectuer ces actions.


### Gestion de l'affinité de vos machines virtuelles

Les __règles d'affinité et d'anti-affinité__ permettent de contrôler l'emplacement des machines virtuelles sur vos hyperviseurs.
Elles peuvent être utilisées pour gérer l'utilisation des ressources de votre __'Cpool'__.
Par exemple, elles peuvent aider à équilibrer la charge de travail entre les serveurs ou à isoler les charges de travail gourmandes en ressources.
Dans un __'Cpool'__ VMware, ces règles sont souvent utilisées pour gérer le comportement des machines virtuelles avec vMotion.
vMotion permet de déplacer des machines virtuelles d'un hôte à un autre sans interruption de service.

Vous pouvez configurer grâce à la gestion des règles :

- __Règles d'Affinité__ : Ces règles assurent que certaines machines virtuelles soient exécutées sur le même hôte physique.
Elles sont utilisées pour améliorer les performances en maintenant les machines virtuelles qui communiquent fréquemment
ensemble sur le même serveur pour réduire la latence réseau. Les règles d'affinité sont utiles dans des scénarios
où la performance est critique, comme dans le cas de bases de données ou d'applications qui nécessitent une communication rapide entre les serveurs.

- __Règles d'Anti-affinité__ : À l'inverse, ces règles garantissent que certaines machines virtuelles ne soient pas exécutées
sur le même hôte physique. Elles sont importantes pour la disponibilité et la résilience, par exemple,
pour éviter que des machines critiques ne soient toutes affectées en cas de défaillance d'un serveur unique.
Les règles d'anti-affinité sont cruciales pour les applications nécessitant une haute disponibilité,
comme dans les environnements de production où la tolérance aux pannes est une priorité.
Par exemple, vous ne souhaitez pas que vos deux Actives Directory soient sur le même hyperviseur.

Lors de la création d'une règle, vous définissez le type de règle (affinité / anti-affinité), le nom de la règle,
son état d'activation (__'Statut'__) et les machines concernées de votre cluster d'hyperviseurs.

*Remarque : les règles affinité/aint-affinité proposées dans la console sont des règles concernant les machines virtuelles entre elles (pas de règles entre hyperviseurs et machines virtuelles).*


### Réplication asynchrone de vos machines virtuelles en environnement VMware

La réplication asynchrone de vos machines virtuelles est un mécanisme qui consiste à pousser au niveau de l'hyperviseur source les opérations d'écriture sur le site standby à intervalle de temps régulier. 

Après une copie initiale à chaud de l'ensemble du stockage actif sur le site standby, seules les écritures sont poussées à intervalles réguliers sur le site en sommeil. 
Cet intervalle dépend du volume d'écriture (de toutes les heures à toutes les 24 heures).

La réplication des machines virtuelles s'appuie sur le mécanisme de clichés instantanés de l'hyperviseur. À ce titre, 
cette solution a les mêmes inconvénients, en particulier la sensibilité au volume d'écritures de la machine virtuelle, 
le processus de cliché instantané étant un mécanisme récursif pour la clôture du cliché instantané.

L'exemple typique de machine qui ne supporte pas le mécanisme de réplication des machines virtuelles est un 
serveur FTP qui reçoit les flux temps réels de caméras de surveillance. __La machine passe son temps à écrire et ne sera 
pas capable de clôturer un cliché instantané sans mise en pause du système d'exploitation pendant une période de temps significative
(plusieurs dizaines de minutes)__. Si l'hyperviseur n'arrive pas à clôturer le cliché instantané, c'est exactement ce qu'il fera,
sans possibilité d'intervenir sauf à corrompre la machine virtuelle.

| SLA             | Description                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H à 24H | En cas de sinistre sur le datacenter principal, la quantité de données maximale perdue est celle de la dernière poussée des écriture sur le site standby. |
| RTO  < 15mn     | Opération de démarrage de la machine virtuelle stoppée sur le site distant                                                                                |


En cas de besoin, ou en cas de défaut sur une machine du site principal, la machine miroir sur le site standby est activée. 
La reprise d'activité nécessite d'avoir réservé sur le site standby du calcul et de la RAM en standby. Il 
est nécessaire d'avoir le même espace de stockage sur le site passif que sur le site actif.


| Référence                         | Unité | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : Le calcul du RPO minimum doit être défini en fonction du taux de changement sur la machine virtuelle.*













## Sauvegarde de machines virtuelles
Cloud Temple propose __une architecture de sauvegarde croisée native et non débrayable__ (elle est obligatoire dans la qualification secnumcloud francaise).

Les sauvegardes sont stockées dans une zone de disponibilité et sur un datacenter physique différent de celui qui héberge la machine virtuelle.

Cela permet de se protéger en cas de défaut majeur sur le datacenter de production et de restaurer sur un datacenter secondaire (incendie par exemple).

Cette solution comprend :

- La sauvegarde hors site à chaud de l'ensemble des disques,
- La présentation et le démarrage instantané d'une machine virtuelle depuis l'infrastructure de mass storage et le rechargement à chaud sur les SAN de production,
- La restauration partielle de fichiers depuis la sauvegarde,
- Une rétention limitée uniquement par l'allocation d'espace de stockage de masse.

Cette infrastructure de sauvegarde est basée sur la solution *IBM Spectrum Protect Plus*, une solution à architecture sans agent, 
simple d'utilisation et qui permet l'automatisation des processus de sauvegarde en plus d'une optimisation de l'espace de mass storage.

Les vitesses de sauvegardes et de restaurations sont dépendantes du taux de changement sur les environnements.
La politique de sauvegarde est configurable depuis [la Console Cloud Temple](../console/console.md) pour chaque machine virtuelle.

*__Nota :__*

*__Certaines machines virtuelles ne sont pas compatibles avec cette technologie de sauvegarde__ qui utilise les mécanismes de clichés instantanés de l'hyperviseur.
Ce sont typiquement les machines dont les charges d'écriture sur disque sont constantes. Il n'est pas possible pour l'hyperviseur de clore le cliché instantané ce qui 
oblige au gel de la machine virtuelle pour pouvoir terminer l'opération de cloture. Ce gèl peut durer plusieurs heures et n'est pas stoppable.*

*La solution est alors d'exclure le disque qui est cible d'écritures permanentes et de sauvegarder les données par une autre méthode.*

| Référence                                               | Unité | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| SAUVEGARDE - Accès au service IBM Spectrum Protect Plus | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Créer une politique de sauvegarde
Pour ajouter une nouvelle politique de sauvegarde, il faut faire une demande auprès du support. Le support est accessible depuis l'icône de bouée en haut à droite de la fenêtre.

La création d'une nouvelle politique de sauvegarde est réalisée par __une demande de service__ indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenant
    Le nom de la politique de sauvegarde
    Les caractéristiques (x jours, y semaines, z mois, ...)

