---
title: Concepts
---

## Présentation de RedHat Openshift

**Red Hat OpenShift** est une plateforme de conteneurs d'entreprise qui automatise le déploiement, la gestion et l'échelle des applications conteneurisées. C'est une plateforme construite autour de Docker, un système de conteneurisation qui permet de packager une application et ses dépendances dans un conteneur virtuel, et de Kubernetes, un système d'orchestration de conteneurs, qui gère l'exécution et la coordination des conteneurs sur un cluster de serveurs.

### Fonctionnalités principales de Red Hat OpenShift :

- **Déploiement et gestion automatisés :** OpenShift simplifie le processus de déploiement des applications en automatisant les routines de gestion comme le scaling, la santé et la durée de vie des conteneurs. Il fournit un environnement intégré pour le développement, le test et la production des applications.

- **Support de plusieurs langages et services :** La plateforme supporte une large variété de langages de programmation (comme Java, Node.js, Python, Ruby, et PHP) et offre des services intégrés tels que la messagerie, le caching, et les bases de données, permettant ainsi aux développeurs de se concentrer sur le code plutôt que sur l'infrastructure.

- **Intégration continue (CI) et déploiement continu (CD) :** OpenShift intègre des outils de CI/CD qui automatisent le pipeline de développement des logiciels, depuis le commit initial jusqu'au déploiement en production, favorisant ainsi les pratiques DevOps.

- **Gestion des opérations :** OpenShift fournit des outils pour la surveillance, la gestion des performances et le diagnostic des applications et des infrastructures, aidant les opérateurs à maintenir la santé et la performance des systèmes.

- **Sécurité renforcée :** La plateforme est conçue avec une sécurité intégrée, offrant des contrôles d'accès basés sur les rôles, la séparation des tâches et la gestion automatisée des secrets pour protéger les applications et les données.

### Avantages de Red Hat OpenShift :

- **Flexibilité :** Les développeurs peuvent travailler avec les outils, langages et frameworks de leur choix.
- **Efficacité opérationnelle :** OpenShift optimise l'utilisation des ressources, réduit le temps de mise sur le marché et améliore la productivité des développeurs.
- **Évolutivité :** La plateforme gère automatiquement le scaling des applications pour répondre aux variations de la demande.
- **Sécurité et conformité :** Avec ses politiques de sécurité intégrées, OpenShift aide à maintenir les standards de sécurité et de conformité.

Red Hat OpenShift est une solution complète pour le développement, le déploiement, et la gestion d'applications conteneurisées, offrant une plateforme robuste, sécurisée et flexible pour les entreprises qui adoptent des approches modernes de développement de logiciels.

### RedHat Openshift Data Foundation

Red Hat OpenShift Data Foundation (ODF) est une solution intégrée de stockage et de gestion des données conçue pour fonctionner de manière transparente avec l'écosystème OpenShift. Elle offre une infrastructure de données persistante, sécurisée et hautement disponible pour les applications conteneurisées, soutenant ainsi les environnements de développement modernes axés sur les conteneurs et les microservices. ODF est conçu pour simplifier et automatiser la gestion des données dans des environnements cloud hybrides et multicloud, fournissant une fondation solide pour les applications d'entreprise critiques.

#### Fonctionnalités Clés d'OpenShift Data Foundation :

- **Stockage Persistant :** ODF fournit une couche de stockage persistant pour les conteneurs, essentielle pour les applications d'entreprise comme les bases de données, les systèmes de gestion de contenu, et les applications nécessitant un état persistant.

- **Multicloud et Hybride :** Conçu pour le cloud hybride et multicloud, ODF permet une expérience de gestion des données cohérente à travers différents environnements cloud, facilitant la mobilité des applications et des données.

- **Automatisation et Orchestration :** L'intégration profonde avec Kubernetes et OpenShift permet à ODF d'automatiser le provisionnement, le scaling et la gestion du cycle de vie du stockage en fonction des besoins des applications.

- **Haute Disponibilité et Résilience :** ODF utilise la réplication et le snapshotting des données pour assurer la haute disponibilité et la durabilité des données, essentielles pour la continuité des opérations d'entreprise.

- **Sécurité des Données :** La solution intègre des fonctionnalités de sécurité avancées, telles que le chiffrement des données en repos et en transit, ainsi que des politiques de sécurité et de conformité personnalisables.

#### Avantages d'OpenShift Data Foundation :

- **Flexibilité Opérationnelle :** ODF permet aux entreprises de gérer efficacement leurs données dans des environnements distribués, offrant la flexibilité nécessaire pour répondre aux exigences changeantes des applications modernes.

- **Simplification de la Gestion des Données :** En automatisant de nombreuses tâches de gestion des données, ODF réduit la complexité et libère les ressources IT pour se concentrer sur des initiatives à plus grande valeur ajoutée.

- **Optimisation des Coûts :** La capacité d'ODF à s'adapter dynamiquement aux besoins de stockage aide à optimiser les coûts en évitant le surprovisionnement et en utilisant plus efficacement les ressources disponibles.

- **Amélioration des Performances :** ODF est conçu pour fournir des performances élevées pour les applications d'entreprise, avec des capacités d'optimisation pour différents types de charge de travail.

Red Hat OpenShift Data Foundation est une solution de stockage de données avancée qui renforce l'efficacité, la résilience et la sécurité des applications d'entreprise déployées sur OpenShift. En offrant un stockage persistant, automatisé et sécurisé, ODF joue un rôle crucial dans l'habilitation des entreprises à exploiter pleinement le potentiel des technologies de conteneurs et de cloud hybride.

## Architecture générale de la plateforme 

### Généralités

La plateforme Red Hat OpenShift de Cloud Temple est conçue comme une offre régionale, déployée nativement sur **trois zones de disponibilité distinctes** au sein d'une même région de Cloud Temple. Cette architecture tri-zonale augmente significativement la disponibilité et la résilience des données.

La plateforme se compose d'un plan de contrôle et de noeuds de travail, tous gérés par l'infrastructure Cloud Temple. Le plan de contrôle est réparti équitablement sur les trois zones de disponibilité, assurant une gestion centralisée et sécurisée. Les noeuds de travail, quant à eux, sont représentés par des lames de calcul, disposées de manière à ce que chaque zone de disponibilité en contienne une.

Pour les noeuds de travail, plusieurs types de lames de calcul sont disponibles, permettant ainsi une adaptation flexible à divers besoins opérationnels :

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - On Demand - 1 month                                                | Unité                   | SKU                                   |
| :--------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan de contrôle - 3 nœuds - Région FR1                                                                          | 1 plan dédié            | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - WORKER NODES - TINY - 3 x ( 10 cores / 20 threads - 64 Go de ram - 512 Gio FLASH 1500 iops)                      | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - WORKER NODES - SMALL  - 3 x ( 20 cores / 40 threads - 128 Go de ram - 512 Gio FLASH 1500 iops)                   | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - WORKER NODES - STANDARD  - 3 x ( 32 cores / 64 threads - 384 Go de ram - 512 Gio FLASH 1500 iops)                | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x ( 48 cores / 96 threads - 768 Go de ram - 512 Gio FLASH 1500 iops)                 | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - WORKER NODES - PERF - 3 x ( 56 cores / 112 threads - 1.5 To de ram - 512 Gio FLASH 1500 iops)                    | 3 workers dédiés        | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - WORKER NODES - GPU - 3 x ( 32 cores / 64 threads - 512 Go de ram - 512 Gio FLASH 1500 iops - 2xNVIDIA L40S 48GO) | 3 workers dédiés + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Les produits Red Hat OpenShift Cloud Temple sont disponibles en paiement à l'usage ou en réservation 12 mois.

**Notes** : 

1. *Le maintien en condition opérationnelle et en condition de sécurité du plan de contrôle est de la responsabilité de Cloud Temple au titre d'un service PaaS.*
   
2. *Au 15 juin 2024, la version 1 de la plateforme est volontairement limitée logiciellement pour un plan de contrôle à 30 workers nodes (quelque soit le type de worker) et à un stockage persistant global de 50 Tio. Si ces limites sont bloquantes pour votre projet, veuillez prendre contact avec le support.*

3. *Chaque worker node est livré avec 512Gio de stockage flash Bloc, ce qui fait 1.5 Tio pour chaque unité d'oeuvre (1 worker par AZ).*

4. *L'offre PaaS Openshift inclut nativement l'accès aux 3 zones de disponibilités, sans qu'il soit nécessaire d'y souscrire en plus.*

5. *Il est possible d'ajouter ultérieurement du stockage bloc au cluster Openshift.*
   
6. *Les nœuds sont déployés de manière équilibrée entre les 3 zones de disponibilité (1 nœud par zone). Il n'est pas possible de déséquilibrer un cluster en attribuant un plus grand nombre de nœuds à une seule zone.*

### Offre RedHat déployée dans le cadre de la plateforme Openshift Cloud Temple

La plateforme est une Redhat Openshift 4 basée sur [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) et inclut [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet). 

![](images/oshift_offert.jpg)

## Stratégie de sauvegarde de votre plateforme PaaS Openshift

La sauvegarde et la restauration de la plateforme PaaS Openshift est de la responsabilité de Cloud Temple pour la partie **ETCD** au titre du management de la plateforme. **La sauvegarde et la restauration pour la partie déploiement et données applicatives est de la responsabilité du Commanditaire**. 

RedHat Openshift Plateform Plus inclut l'**API Openshift Data Protection (OADP)** et met nativement à disposition **Velero**. Vous trouverez ici la documentation complète sur le sujet (en anglais) : [Backing up and restoring your OpenShift Container Platform cluster](https://docs.redhat.com/fr/documentation/openshift_container_platform/4.8/html/backup_and_restore/index). *(1)*

Cloud Temple met à disposition en option pour ses clients l’offre **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), plateforme spécialisée dans la gestion des données pour les environnements Kubernetes. Conçue pour répondre aux besoins en matière de protection des données, elle offre des fonctionnalités robustes pour la sauvegarde, la restauration, la migration et la reprise après sinistre. Kasten K10 s’intègre de manière native aux environnements Kubernetes, qu'ils soient gérés sur des clusters cloud ou sur site, et peut s’adapter à différents cas d’usage, notamment la migration de clusters entre différentes distributions Kubernetes telles que Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine et Red Hat OpenShift. 

L’un des cas d’utilisation majeurs de Kasten K10 est **la migration de clusters entre différentes plateformes Kubernetes**. Que ce soit pour une transition vers une infrastructure plus robuste ou pour consolider les environnements existants, Kasten K10 offre des outils simples et efficaces pour gérer ces migrations :

 - **Sauvegarde et protection des données** : lors de la migration d'un cluster Kubernetes Vanilla ou VMware Tanzu vers Red Hat Kubernetes Engine ou OpenShift, la première étape est de sauvegarder les données des applications et leurs états. Kasten K10 s'intègre facilement avec les API Kubernetes pour identifier les applications, leurs dépendances, ainsi que les volumes de données associés. Cela inclut la sauvegarde des volumes persistants (Persistent Volumes - PV), des bases de données, des configurations et des secrets. Kasten K10 prend en charge une large variété de fournisseurs de stockage (S3, Google Cloud Storage, Azure Blob Storage, etc.), ce qui permet de créer des instantanés des applications à migrer. Ces sauvegardes sont ensuite stockées de manière sécurisée avec des options de chiffrement et de contrôle d'accès granulaires, garantissant la sécurité des données tout au long du processus. 

 - **Portabilité et migration** : la migration entre des distributions Kubernetes comme Vanilla ou Tanzu et des solutions Red Hat comme OpenShift ou Kubernetes Engine peut être complexe en raison des différences d’architectures et des configurations spécifiques de chaque plateforme. Kasten K10 simplifie ce processus en fournissant une couche d’abstraction pour la portabilité des applications. Lors de la migration, Kasten K10 réplique les configurations et les données d’un cluster source vers un cluster cible, tout en tenant compte des spécificités de chaque environnement. Par exemple, les objets Kubernetes comme les ConfigMaps, les Secrets, les PV, ainsi que les CRDs (Custom Resource Definitions) peuvent être migrés en tenant compte des contraintes propres à chaque distribution Kubernetes, qu’il s’agisse d’un cluster Red Hat OpenShift ou Kubernetes Engine. Le processus est automatisé, ce qui réduit considérablement le risque d’erreurs manuelles. De plus, Kasten K10 permet une migration progressive ou complète, en fonction des besoins, et offre une visibilité en temps réel sur l’état de la migration, facilitant ainsi la gestion et la surveillance de la transition. 
   
 - **Compatibilité multi-cloud et multi-distribution** : Kasten K10 est conçu pour fonctionner dans des environnements hybrides et multi-clouds, ce qui en fait un outil idéal pour les organisations cherchant à migrer des applications de clusters Tanzu ou Vanilla vers des environnements Red Hat dans le cloud (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) ou sur des infrastructures sur site. Cela garantit une flexibilité maximale et permet aux équipes DevOps de choisir le meilleur environnement en fonction des besoins métier ou des stratégies de modernisation d'infrastructure. 
   
 - **Gestion simplifiée et automatisation**: Kasten K10 offre une interface utilisateur intuitive qui permet aux administrateurs de gérer facilement les opérations de migration et de sauvegarde sans nécessiter une expertise approfondie de chaque plateforme Kubernetes. La solution est également équipée de fonctionnalités d’automatisation qui permettent de définir des politiques de migration et de sauvegarde récurrentes, s’intégrant aux pipelines CI/CD pour des opérations continues. Les utilisateurs peuvent planifier des migrations ou des restaurations en fonction de fenêtres de maintenance, effectuer des tests de validation après migration et automatiser les processus de basculement en cas de problème sur le cluster source.
   
 - **Sécurité et conformité**: dans le cadre de migrations vers des environnements critiques comme Red Hat OpenShift ou Kubernetes Engine, la sécurité des données et la conformité aux normes (ISO, SOC, GDPR, etc.) sont des aspects essentiels. Kasten K10 assure le chiffrement des données en transit et au repos, tout en offrant des options d'audit et de traçabilité des opérations de sauvegarde et de restauration. Ces capacités sont essentielles pour garantir la sécurité des données migrées, que ce soit dans des environnements de production ou de test. Kasten K10 est une solution incontournable pour les entreprises qui souhaitent migrer efficacement et en toute sécurité des clusters Kubernetes Vanilla ou VMware Tanzu vers Red Hat Kubernetes Engine ou OpenShift. 

 La facturation se fait au nombre de worker node.

| Unités d'œuvre Redhat Openshift 4 with Data Foundations - Worker Node Backup Solution | Unité     | SKU                         |
| :------------------------------------------------------------------------------------ | :-------- | :-------------------------- |
| VEEAM - KASTEN K10 - Kubernetes data protection and application mobility              | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |
   
**Note** : *Attention, la volumétrie disque nécessaire au bon fonctionnement de votre backup est à prévoir sur l'environnement de réception de votre backup, généralement en stockage S3. Elle n'est pas incluse dans les unités d'oeuvre Openshift ou Kasten.*

**(1)** _OADP n'est pas installé nativement dans le cluster. Seul Kasten est activé pour la gestion des migrations, des sauvegardes et de la restauration_

## Droits et Permissions 

Voici les permissions principales misent en oeuvre :

|       Groupe       |         d'API          |                                                                                       Ressources Permissions                                                                                       |
|--------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |       ("")/Apps        |ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Create, Get, List, Watch, Update, Patch, Delete |
|        Core        |          ("")          |                                                                                           Secrets Create                                                                                           |
|config.kio.kasten.io|        Profiles        |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|config.kio.kasten.io|     PolicyPresets,     |                                                TransformSets, BlueprintBindings, StorageSecurityContexts, StorageSecurityContextBindings Get, List                                                 |
|config.kio.kasten.io|         Toutes         |                                                                                    les ressources (*) Get, List                                                                                    |
|       Batch        |       CronJobs,        |                                                                        Jobs Create, Get, List, Watch, Update, Patch, Delete                                                                        |
|    Autoscaling     |HorizontalPodAutoscalers|                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|     Networking     |       Ingresses,       |                                                                  NetworkPolicies Create, Get, List, Watch, Update, Patch, Delete                                                                   |
|       Policy       |  PodDisruptionBudgets  |                                                                          Create, Get, List, Watch, Update, Patch, Delete                                                                           |
|       Route        |      (OpenShift)       |                                                                       Routes Create, Get, List, Watch, Update, Patch, Delete                                                                       |
|       Build        |      (OpenShift)       |                                                          BuildConfigs, Builds, BuildLogs Create, Get, List, Watch, Update, Patch, Delete                                                           |
|       Image        |      (OpenShift)       |                                                           ImageStreams, ImageStreamTags Create, Get, List, Watch, Update, Patch, Delete                                                            |
|        Apps        |      (OpenShift)       |                                                                 DeploymentConfigs Create, Get, List, Watch, Update, Patch, Delete                                                                  |
|      Template      |      (OpenShift)       |                                                            Templates, TemplateInstances Create, Get, List, Watch, Update, Patch, Delete                                                            |
|   Authorization    |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        RBAC        |         Roles,         |                                                                    RoleBindings Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|      Project       |      (OpenShift)       |                                                                                Projects Get, Delete, Update, Patch                                                                                 |
|     Operators      |     Subscriptions,     |                                        ClusterServiceVersions, CatalogSources, InstallPlans, OperatorGroups Create, Get, List, Watch, Update, Patch, Delete                                        |
|    Cert-Manager    |     Certificates,      |                                                    CertificateRequests, Issuers, ClusterIssuers Create, Get, List, Watch, Update, Patch, Delete                                                    |
|      Logging       |      (OpenShift)       |                                                       ClusterLogForwarders, ClusterLoggings Create, Get, List, Watch, Update, Patch, Delete                                                        |
|      Storage       |    VolumeSnapshots     |                                                                          Get, List, Watch, Create, Update, Patch, Delete                                                                           |
|        Ceph        |         (Rook)         |                                          CephClusters, CephBlockPools, CephFilesystems, CephObjectStores Create, Get, List, Watch, Update, Patch, Delete                                           |
|       NooBaa       |     BackingStores,     |                                                           BucketClasses, NooBaaAccounts Create, Get, List, Watch, Update, Patch, Delete                                                            |
|    ObjectBucket    |  ObjectBucketClaims,   |                                                                   ObjectBuckets Create, Get, List, Watch, Update, Patch, Delete                                                                    |
|        OCS         |      (OpenShift)       |                                                         StorageClusters, StorageConsumers Create, Get, List, Watch, Update, Patch, Delete                                                          |
|       Local        |        Storage         |                                                        LocalVolumes, LocalVolumeDiscoveries Create, Get, List, Watch, Update, Patch, Delete                                                        |
|        CSI         |         Addons         |                                                           CSIAddonsNodes, NetworkFences Create, Get, List, Watch, Update, Patch, Delete                                                            |
|      Metrics       |         Pods,          |                                                                                             Nodes Get                                                                                              |
|      Security      |PodSecurityPolicyReviews|                                                                                               Create                                                                                               |
|       Custom       |       Resources        |                                       Diverses ressources personnalisées liées à Kasten K10, Keycloak, etc. Create, Get, List, Watch, Update, Patch, Delete                                        |

## Limites actuelles de l'offre Redhat Openshift en environnement SecNumCloud

Voici quelques limitations induites par la qualification SecNumCloud :

### Plan de contrôle dédié

Les charges de travail ne peuvent pas être exécutées sur le plan de contrôle en raison des restrictions inhérentes à la gestion des ressources et à la sécurité de la plateforme OpenShift sur SecNumCloud.

### Interdiction de déployer des images avec des privilèges élevés (rootless)

Pour se conformer aux exigences de sécurité du référentiel SecNumCloud, il est obligatoire d'utiliser des conteneurs sans privilèges (rootless). 

Cette approche renforce la sécurité globale en empêchant tout accès privilégié aux conteneurs. Les applications nécessitant des conteneurs avec privilèges devront être modifiées, car leur déploiement ne sera pas autorisé. 

Cette restriction s'étend également aux Helm Charts et aux opérateurs qui utilisent des images non rootless, rendant leur déploiement impossible au sein de l'infrastructure.

### Restrictions sur les droits des ClusterRole

Dans le cadre de notre offre OpenShift, nous mettons en place une gestion rigoureuse des droits d'accès au niveau du cluster, conformément aux exigences SecNumCloud. 

Cette approche implique une limitation des ClusterRoles pour nos clients, restreignant ainsi certains aspects de la gestion globale du cluster. Bien que cette mesure puisse initialement sembler contraignante, elle vise à renforcer la sécurité et la stabilité de l'infrastructure. 

Nous sommes conscients que cela peut engendrer des défis techniques, notamment dans la configuration de paramètres avancés, et potentiellement des implications liées à l'adaptation de vos applications ou à l'acquisition d'outils complémentaires. 

Notre équipe de support est disponible pour vous guider et vous conseiller sur ce sujet.

### Le contexte SCC ne peut pas être modifié dans l'environnement SecNumCloud

Les Security Context Constraints (SCC) sont soumises à des restrictions strictes et ne peuvent pas être modifiées par les utilisateurs. Cette limitation a des répercussions significatives sur le déploiement et l'exécution des conteneurs.

En pratique, cela signifie que les paramètres d'exécution des conteneurs, tels que les privilèges d'accès au système ou les capacités Linux, sont prédéfinis et non personnalisables.

Cette mesure, motivée par des exigences de sécurité, vise à empêcher tout accès non autorisé aux ressources critiques du cluster. Par conséquent, les applications nécessitant des contextes de sécurité spécifiques, notamment celles requérant des accès privilégiés, peuvent rencontrer des obstacles lors du déploiement.

D'un point de vue technique, cela peut impliquer une révision de l'architecture des applications et une adaptation des processus de déploiement afin de se conformer aux SCC prédéfinies. Sur le plan opérationnel, cette contrainte peut réduire la flexibilité des déploiements et augmenter la complexité de gestion de certaines applications dans l'environnement OpenShift, en particulier celles utilisant des Helm Charts ou des opérateurs qui ne respectent pas les SCC en vigueur.

### Limitations sur les Custom Resource Definitions (CRDs)

Pour se conformer à la qualification SecNumCloud, une restriction importante concerne l'utilisation des Custom Resource Definitions (CRDs) et des contrôleurs personnalisés. Cette mesure, liée aux droits sur le cluster, vise à prévenir le déploiement de ressources personnalisées potentiellement instables ou non autorisées.

Cette limitation s'applique également aux opérateurs et aux Helm Charts, avec un impact direct sur les droits RBAC, car les CRDs permettent d'étendre l'API Kubernetes. Par conséquent, les opérateurs et Helm Charts doivent passer par une chaîne de certification auprès de nos services pour garantir leur conformité et leur sécurité.

Les CRDs personnalisées, notamment celles répondant à des besoins métiers spécifiques, peuvent être refusées dans l'infrastructure en raison des risques qu'elles présentent pour la stabilité et la sécurité de la plateforme. Cette politique, conçue pour protéger l'intégrité et la fiabilité du cluster, n'autorise que les CRDs provenant d'opérateurs ou de Helm Charts officiellement certifiés.

Notre équipe de support est disponible pour vous guider et vous conseiller sur les bonnes pratiques à adopter dans ce cadre.

### Pas de support des IPs Dynamiques pour les runners

La plateforme OpenShift SecNumCloud exige que les runners soient configurés avec des adresses IP fixes. Cette exigence est motivée par le besoin d'autoriser les IPs administrant notre console Cloud Temple, nécessaire pour l'outil de gestion d'accès aux API. Les adresses IPs autorisées sont également utilisées pour accéder à l'API OpenShift ainsi qu'aux interfaces d'administration d'OpenShift et de Shiva. 

Par conséquent, l'utilisation d'adresses IP dynamiques n'est pas prise en charge pour ces composants, imposant la configuration d'IPs fixes afin de garantir la sécurité et l'accès aux API.

## Répartiteurs de charge

L'environnement SecNumCloud Openshift offre des options de Load Balancing à différents niveaux pour garantir une gestion sécurisée et efficace du trafic. L'API du Load Balancer est accessible via les ports 6443 et 443, avec un contrôle de sécurité assuré par une liste blanche gérée par la console Cloud Temple. Cette API utilise une adresse IP publique connectée à notre backbone, mais elle n’est pas accessible par défaut, renforçant ainsi la sécurité des accès.

Pour le Load Balancer privé, l’environnement utilise Ingress (nginx) comme solution par défaut, ce qui permet de gérer le trafic interne de manière efficace. De plus, un support TCP est disponible via l’infrastructure IaaS de Cloud Temple, offrant ainsi une flexibilité supplémentaire pour les applications nécessitant un équilibrage de charge à ce niveau.

Concernant le Load Balancer public, le support de niveau 4 est assuré via Ingress, bien que quelques limitations existent actuellement avec la commande "expose." Cela signifie que le système est capable de gérer des connexions TCP et UDP de manière fiable tout en continuant à évoluer pour offrir une plus grande compatibilité et flexibilité.
