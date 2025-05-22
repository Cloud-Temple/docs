---
title: Bonnes pratiques
---

*Dernière mise à jour : 22/05/2025*

## Recommandations pour l’utilisation sécurisée des services Cloud Temple

Les services Cloud Temple vous offrent une infrastructure cloud hautement sécurisée par conception. Cependant, certaines bonnes pratiques sécurité relèvent de votre responsabilité en tant qu'utilisateur de ces services. Ce guide vous aide à renforcer la sécurité de votre environnement cloud en tirant parti des fonctionnalités proposées dans la Console.

Vous y trouverez des recommandations concrètes pour :

- Protéger l’accès à la Console cloud ;
- Gérer les accès et les permissions de manière maîtrisée ;
- Sécuriser les ressources déployées via nos services cloud.

## Accès à la Console

L’accès à la Console est la porte d’entrée vers l’ensemble de vos services Cloud Temple. Il est donc essentiel de la protéger efficacement.  

### Restreindre l'accès à la Console par filtrage IP

L'accès à la console de gestion cloud est limité aux adresses IP préalablement autorisées. Cette restriction permet d’autoriser l'accès uniquement aux utilisateurs provenant des plages d'IP spécifiées, minimisant ainsi les risques d'accès non autorisés.

Vous pouvez configurer ces restrictions IP dans les paramètres de votre organisation. Pour savoir comment configurer le filtrage IP, consultez la [Gestion des accès et authentification | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#gestion-des-acc%C3%A8s-et-authentification).

Pour maximiser l'efficacité de ce mécanisme, veillez à :

- **Limiter le nombre d'adresses IP autorisées** au strict nécessaire ;
- Eviter les plages trop larges ou génériques ;
- Ajouter **uniquement des IP provenant d’environnements maîtrisés** (ex : IP de sortie votre réseau d’entreprise) ;
- Proscrire, ou limiter au maximum, les adresses IP individuelles (ex : IP publique du domicile de votre personnel IT) ;
- Proscrire, ou limiter, les adresses IP d’un tiers (ex : prestataire de service) ;
- Maintenir cette liste à jour en cas d’évolution de votre infrastructure réseau.

Pour les accès à distance (télétravail, prestataires…), privilégiez un passage par votre réseau d’entreprise via VPN plutôt qu’une autorisation directe d’adresses IP individuelles. Cela réduit la surface d’exposition de la Console et centralise la gestion des accès au sein de votre organisation.

### Utiliser la fédération d’identité

La fédération d’identité permet d’intégrer la Console Cloud Temple à votre fournisseur d’identité (IdP), en activant le SSO. Cette approche centralise l’authentification et offre plusieurs bénéfices :

- Gestion unifiée des comptes : création, modification et suppression via votre annuaire ;
- Réduction de la surface d’attaque : les comptes locaux deviennent inutiles ou limités ;
- Traçabilité accrue : les accès sont journalisés par votre IdP ;
- Intégration renforcée : MFA, alerting, politiques de sécurité contextuelle… ;
- Conformité facilitée : cohérence avec vos pratiques internes.

Pour ces raisons, **la fédération d’identités est recommandée**, en particulier pour les environnements à large effectif ou à exigences de sécurité élevées.

Suivez nos guides pas à pas pour intégrer votre fournisseur d'identité :
- [Configurer la fédération avec Azure AD | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Configurer la fédération avec ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Activer l’authentification multifacteur (MFA)

L’authentification multifacteur (MFA) renforce significativement la sécurité d’accès à la Console Cloud Temple. Elle ajoute une étape d’authentification en demandant un code temporaire généré par une application dédiée, en complément du mot de passe. Cette mesure limite fortement les risques d’accès non autorisé, même en cas de vol d’identifiants.

Pour les comptes gérés localement par la Console (sans fédération), le MFA est activé par défaut et ne peut être désactivé.

**Pour les comptes fédérés, il est fortement recommandé d’exiger le MFA côté fournisseur d’identité**, en particulier pour les administrateurs ayant accès à la Console.

Pour en savoir plus :  

- [Qu’est-ce que le MFA et est-il obligatoire ? | Documentation Cloud Temple](../../console/iam/quickstart?_highlight=*facteur#quest-ce-que-le-mfa-et-est-il-obligatoire-)
- [Tutoriel : Fédération d'identité avec Microsoft EntraID | Documentation Cloud Temple](../../console/iam/tutorials/sso_aad)
- [Tutoriel : Fédération d'identité avec Microsoft ADFS | Documentation Cloud Temple](../../console/iam/tutorials/sso_adfs)

### Accéder à la Console depuis des équipements sécurisés

Le poste et l’environnement depuis lesquels vous accédez à la Console sont important pour sécuriser l’administration de vos services cloud. Si vous évoluez dans un environnement à exigences de sécurité élevées, vous pouvez appliquer les recommandations suivantes :

- Pour l'administration par vos propres équipes, appliquer tout ou partie des [Recommandations relatives à l'administration sécurisée des SI | ANSSI](https://cyber.gouv.fr/publications/recommandations-relatives-ladministration-securisee-des-si) ;
- En cas d’administration par un tiers, étudier l'opportunité de faire appel à un [Prestataires d’administration et de maintenance sécurisées (PAMS) | ANSSI](https://cyber.gouv.fr/prestataires-dadministration-et-de-maintenance-securisees-pams), selon la sensibilité des ressources hébergées et votre contexte légal et réglementaire.

### Sensibiliser les administrateurs au risque de phishing

Les accès à la Console Cloud Temple doivent faire l’objet d’une vigilance renforcée, en particulier face aux tentatives de phishing visant à dérober identifiants ou codes MFA. Il est crucial que les utilisateurs habilités soient régulièrement sensibilisés à ces risques : vérification systématique de l’URL, prudence face aux messages inattendus, et signalement immédiat de toute activité suspecte.

Pour limiter ces risques, nous recommandons de ne jamais accéder à la Console via un lien reçu par e-mail, mais toujours en saisissant manuellement l’URL habituelle.

Ces bonnes pratiques relèvent de votre responsabilité en tant que client et sont essentielles pour prévenir les attaques de phishing. En cas de doute, le support Cloud Temple reste à votre disposition.

## Gestion des services cloud

Vos ressources Cloud sont gérées depuis la Console. Ce chapitre vous présente des recommandations essentielles pour contrôler l’exploitation des services cloud.

### Identifier les propriétaires de tenant

Le propriétaire de tenant détient toutes les permissions liées aux produits activés et reçoit les notifications officielles. Il est crucial de s'assurer que les propriétaires de votre tenant sont les interlocuteurs adaptés au sein de votre organisation.

Pour une gestion sécurisée et efficace :

- **Identifiez un propriétaire responsable**, de préférence une personne directement impliquée dans la gestion de l’environnement.
- **Vérifiez l’adresse e-mail de contact** du propriétaire afin de vous assurer qu’elle est valide et régulièrement consultée.
- **Assurez un contrôle direct**, en ajoutant un propriétaire membre de votre organisation, même si vous confiez la gestion de votre service cloud, afin de pouvoir superviser les notifications et décisions importantes.
- **Limitez le nombre de propriétaires** à 3 pour réduire la surface d’exposition et faciliter l’audit des actions critiques.

Pour en savoir plus sur la gestion des propriétaires de tenant, consultez le [Guide des popriétaires sur un tenant | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#gestion-des-propri%C3%A9taires-sur-un-tenant).

### Gérer les permissions sur vos services cloud

La Console Cloud Temple permet une gestion granulaire des accès en attribuant à chaque utilisateur un ou plusieurs niveaux de permission, qui déterminent précisément les actions autorisées. Consultez la documentation des permissions ([Permissions disponibles pour les utilisateurs de votre organisation | Documentation Cloud Temple](../../console/iam/concepts?_highlight=*propri%C3%A9taire#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation)) pour comprendre en détail les différentes permissions et les attribuer de manière appropriée.

Pour une gestion efficace et sécurisée des permissions, nous vous recommandons de suivre ces meilleures pratiques :

- **Appliquer le principe du moindre privilège :** accordez aux utilisateurs uniquement uniquement les permissions nécessaires à ses missions. Cela réduit les risques en limitant l'accès à des fonctionnalités non nécessaires.
- **Limitez les permissions sensibles :** Attribuez les permissions sensibles uniquement aux utilisateurs responsables de ces fonctions. Les permissions sensibles concernent notamment la gestion des accès (console\_public\_access\_write, \*\_console\_access, object - storage\_write), la gestion des permissions (iam\_write, iam\_offline\_access), et la gestion des sauvegardes (backup\_iaas\_opensource\_write, backup\_iaas\_spp\_write).**
- **Privilégiez l'accès en lecture seule :** En cas de doute, donnez un accès en lecture seule (\*\_read) pour minimiser les risques tout en permettant l’accès aux informations nécessaires.
- **Effectuez des revues régulières des droits :** Vérifiez régulièrement les permissions des utilisateurs pour retirer celles obsolètes. L’export des permissions au format CSV facilite cette gestion.**

Une attribution maîtrisée des permissions limite les risques d’erreur ou d’action malveillante, tout en renforçant votre posture de sécurité.

### Mettre à jour régulièrement les hyperviseurs

Cloud Temple fournit régulièrement des builds pour les hyperviseurs afin d’assurer l’application des correctifs de sécurité. Cependant, la mise à jour des hyperviseurs reste sous votre responsabilité, car nous n’avons pas de visibilité sur vos contraintes métier.  

Par conséquent, nous vous recommandons de :

- Contrôler régulièrement dans la Console la disponibilité de nouveaux builds pour vos hyperviseurs ;  
- **Déployer régulièrement les nouveaux builds sur l’ensemble de vos hyperviseurs**, en particulier s’ils corrigent des failles de sécurité ;
- Déployer régulièrement sur vos machines virtuelles les nouvelles versions des vmtools.

**Une page d’alertes sécurité est disponible** pour vous informer des vulnérabilités connues et recommandations associées : [Alertes de sécurité | Cloud Temple](https://docs.cloud-temple.com/console/security/security_alarms).  

### Suivre l’activité sur les services cloud

Pour assurer une surveillance efficace de votre environnement cloud et réagir rapidement en cas d’anomalie, il est essentiel de mettre en place une stratégie de veille active. Nous vous recommandons notamment de :

- **Surveiller la disponibilité des services** via la [Status page | Cloud Temple](https://status.cloud-temple.com/), afin d’être alerté en cas d’incidents ou de pannes globales ;
- **Activer les notifications thématiques** pertinentes pour votre usage depuis la Console, afin de recevoir en temps réel les alertes importantes (voir [Abonnement aux notifications thématiques | Documentation Cloud Temple](../../console/iam/concepts#abonnement-aux-notifications-th%C3%A9matiques)) ;
- **Exploiter les journaux d’activité Cloud** pour identifier les actions sensibles ou suspectes sur vos ressources (voir section « Journalisation - Suivi des Activités » du [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart)). La collecte et l’analyse des journaux d’activité peut être automatisée via les API Console, afin d’intégrer les événements à vos outils de supervision ou de détection d’incidents.

## Sécuriser les ressources hébergées

Dans un modèle Cloud, la sécurité des ressources déployées relève de la responsabilité de l'utilisateur. Cloud Temple fournit une infrastructure sécurisée, mais il vous appartient de protéger vos systèmes d’exploitation, vos données et vos configurations.

Vous trouverez ci-dessous les bonnes pratiques essentielles pour renforcer la sécurité de vos VM : configuration de politiques de sauvegarde, chiffrement des ressources critiques, et durcissement des systèmes d’exploitation. Ces mesures contribuent à limiter les risques de compromission, à garantir l’intégrité des données, et à assurer une continuité d’activité en cas d’incident.

### Configurer les sauvegardes

Pour assurer la sécurité et la résilience de vos données, il est essentiel de définir et d’appliquer correctement vos politiques de sauvegarde. L’assignation d’une politique de sauvegarde à chaque machine virtuelle avant son démarrage est obligatoire. La documentation est disponible dans la section "Sauvegarde" du [Guide de démarrage | Documentation Cloud Temple](../../iaas_vmware/quickstart).

Voici les recommandations en matière de gestion des politiques de sauvegardes de vos ressources Cloud Temple :

- **Définissez vos politiques de sauvegarde :** Demandez au support la création des politiques de sauvegarde adaptées aux besoins de notre organisation en matière de sécurité.  
- **Évitez les politiques suspendues :** Ne laissez aucune VM associée à une politique de sauvegarde suspendue pour éviter de compromettre la sécurité des données.
- **Effectuez des tests de restauration :** Testez régulièrement la restauration de vos sauvegardes afin de contrôler l’efficacité de vos procédures de restauration.

### Chiffrer les VM sensibles

En complément du chiffrement des données au niveau des disques, natifs pour toutes les ressources cloud, **le chiffrement des VM peut être activé pour protéger vos ressources les plus sensibles**. Pour cela, consultez [Chiffrer une machine virtuelle VMware | Documentation Cloud Temple](../../iaas_vmware/tutorials/vm_encryption?_highlight=*chiff).

Voici quelques bonnes pratiques en cas d’utilisation du chiffrement des VM :

- Activer le chiffrement sur les VM sensibles : Appliquez-le dès la création de la machine ou lors d’une mise à jour planifiée. L’opération nécessite l’arrêt temporaire de la VM ;
- Vérifier l’état de chiffrement : Contrôlez depuis la console que la VM affiche bien le statut "chiffré" ;
- Sauvegarder avant chiffrement : Assurez-vous que la VM est correctement sauvegardée avant toute modification.

### Restreindre l’exposition de vos ressources

Pour limiter la surface d'attaque de vos machines virtuelles, il est fortement recommandé de restreindre au strict nécessaire les services exposés. En particulier, veillez à configurer vos ressources de manière à **ne pas exposer publiquement les interfaces d’administration et consoles** des systèmes et applications déployés.

Si vous utilisez les services Stockage Objet de Cloud Temple, il est également conseillé de **ne pas configurer vos buckets en accès public**, sauf dans les cas où cela est strictement nécessaire (voir [Limitation des accès à vos buckets S3 | Documentation Cloud Temple](../../storage/oss/quickstart?_highlight=*bucket#limitations-des-acc%C3%A8s-%C3%A0-vos-bucket-s3)).

### Durcir les machines virtuelles (services IaaS)

L’hébergement d’une machine virtuelle sur un cloud sécurisé ne garantit pas, à lui seul, la sécurité du système d’exploitation, des services ou des applications qu’elle exécute. Le durcissement des VM, qu’elles soient déployées par vos soins ou issues du catalogue, relève de votre responsabilité.

Nous vous recommandons d’**appliquer les mesures de sécurité de base**

- Maintenir les systèmes à jour avec les correctifs de sécurité ;
- Limiter les services exposés ;
- Désactiver les composants inutiles ;  
- Restreindre les droits d’accès au strict nécessaire ;
- Activer la journalisation des accès ;
- Configurer des sauvegardes régulières.

Pour vous guider dans ces actions, appuyez-vous sur :

- Les guides de durcissement des éditeurs des logiciels que vous utilisez ;
- [Guides essentiels et bonnes pratiques de cybersécurité | ANSSI (FR)](https://cyber.gouv.fr/guides-essentiels-et-bonnes-pratiques-de-cybersecurite-par-ou-commencer) ;
- [Guides sécurité CIS Benchmarks® | CIS (EN)](https://www.cisecurity.org/cis-benchmarks).

Ces bonnes pratiques constituent la première ligne de défense pour sécuriser vos systèmes dans le cloud.

### Durcir les container (services PaaS)

Pour assurer la sécurité de vos containers dans le cadre du service PaaS OpenShift, nous vous recommandons de mettre en œuvre les mesures suivantes pour renforcer leur durcissement :

- **Source des images** : Assurez-vous que toutes les images proviennent de sources fiables, telles que des registres internes ou le Red Hat Container Catalog, et évitez l’utilisation d'images communautaires non vérifiées, comme celles disponibles sur Docker Hub public.
- **Restriction des privilèges** : Limitez les privilèges des conteneurs en utilisant les fonctionnalités d'OpenShift, notamment les *Security Context Constraints* (SCC), afin de restreindre les permissions au strict nécessaire.
- **Configuration des SCC** : Créez des SCC personnalisés pour chaque application ou groupe d'applications. Cela inclut la restriction des appels système autorisés (par exemple, via *seccomp profiles*), avec des configurations spécifiques comme l’interdiction de *ptrace* ou *mount* pour réduire les risques d’évasion des conteneurs.
- **Isolation des charges de travail** : Utilisez les *Namespaces* et les *Network Policies* pour isoler les applications et limiter les interactions non nécessaires entre les conteneurs.
- **Journalisation complète** : Activez la journalisation via l’opérateur OpenShift Logging pour capter les événements associés aux conteneurs et systèmes hébergés, afin de mieux détecter et analyser toute activité suspecte.

## Pour aller plus loin

Si vous souhaitez bénéficier de services sécurité complémentaires ou d’un accompagnement renforcé sur des aspects de sécurité (audit, durcissement, conformité, conseil, etc.), nos **Professional Services** peuvent être sollicités. Pour en savoir plus, rapprochez-vous de votre interlocuteur Cloud Temple.