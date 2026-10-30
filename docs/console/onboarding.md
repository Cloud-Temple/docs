---
title: Onboarding
description: "Créez votre organisation, sécurisez vos accès, ouvrez vos environnements, invitez vos équipes et activez vos produits. La mise en place sur la plateforme Cloud Temple, de l'inscription au premier déploiement."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import imgSelector from '@site/docs/console/images/shiva_org_selector.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import shivaOnboard_004 from '@site/docs/console/iam/images/shiva_onboard_004.png'
import shivaOnboard_005 from '@site/docs/console/iam/images/shiva_onboard_005.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'
import shivaOnboard_008 from '@site/docs/console/images/shiva_onboard_008.png'

# Onboarding

Chez Cloud Temple, vous n'attendez pas votre cloud : vous le créez.

Vous créez votre organisation depuis un formulaire en ligne, en quelques minutes. Vos environnements se créent ensuite d'un clic depuis la Console. Vous pouvez activer et désactiver des produits en complète autonomie, facturés à l'usage. Le tout sur une infrastructure souveraine, opérée en France. La Console signale, tenant par tenant et produit par produit, ce qui relève de la qualification **SecNumCloud**.


## Ce que vous obtenez en vous inscrivant

- **Sans délai** : un formulaire suffit. Votre organisation est créée automatiquement, en quelques minutes, sans intervention de nos équipes.
- **Sans engagement de volume** : les produits en libre-service sont facturés à l'usage.
- **Sans avenant** : ouvrez de nouveaux environnements sous votre contrat existant, dans les conditions qu'il prévoit.
- **Souverain par construction** : infrastructure opérée en France, et un périmètre de qualification **SecNumCloud** identifié dans la Console.

<a id="les-trois-parcours"></a>

## Les étapes de votre mise en place

Cette page décrit votre mise en place de bout en bout, dans l'ordre où vous la vivez. Chaque étape est courte et renvoie vers la documentation de référence pour le détail.

1. [Créer votre organisation](#étape-1-créer-votre-organisation) : le formulaire d'inscription, et ce qui se déclenche derrière.
2. [Vous connecter et sécuriser vos accès](#étape-2-vous-connecter-et-sécuriser-vos-accès) : la connexion, le double facteur et les adresses IP autorisées.
3. [Choisir ou créer un environnement](#étape-3-choisir-ou-créer-un-environnement) : un tenant par usage, créé en quelques minutes et en autonomie.
4. [Inviter vos collaborateurs](#étape-4-inviter-vos-collaborateurs) : leurs comptes et leurs droits, tenant par tenant.
5. [Activer vos produits](#étape-5-activer-vos-produits) : ouvrir, arrêter ou demander un produit.
6. [Automatiser](#étape-6-automatiser) : l'API de la Console et le provider Terraform.

Une fois en place, la [visite de la Console](./console_quickstart) vous présente le reste de l'interface : tableau de bord, coûts, journalisation, support.

## Le vocabulaire, en deux mots

Toute la plateforme repose sur deux niveaux.

**Votre organisation**, c'est vous : votre entreprise. Elle porte votre contrat et votre facturation.

**Un tenant**, c'est un environnement de travail à l'intérieur de votre organisation. Vous pouvez en avoir plusieurs, étanches les uns aux autres.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

Concrètement : vous signez **un** contrat, et vous ouvrez vos environnements dans les conditions qu'il prévoit, sans jamais mélanger vos données entre eux. Cloisonner une recette, isoler une filiale ou monter un lab ne demande pas d'avenant.

Deux rôles reçoivent des accès :

- le **propriétaire de l'organisation** accède à tout et invite les autres utilisateurs
- le **propriétaire d'un tenant** accède à cet environnement

Cela peut être la même personne.

---

<a id="parcours-1-créer-votre-organisation"></a>

## Étape 1. Créer votre organisation

C'est votre point d'entrée sur la plateforme. Il n'arrive qu'une fois, et il se fait en ligne.

### Le formulaire d'inscription

Votre mise en place démarre par un **formulaire d'inscription en ligne**, dont votre interlocuteur Cloud Temple vous communique l'accès.

Il est court et se remplit en une seule fois. Il vous demande quatre choses.

**Qui vous êtes.** Le nom de votre organisation, sa forme juridique, son pays d'établissement et son numéro SIREN.

**Qui pilotera la plateforme.** Le nom, le prénom et l'adresse électronique professionnelle de la personne qui sera **propriétaire de l'organisation**. C'est elle qui recevra les accès et qui invitera ensuite ses collaborateurs.

**Ce que vous allez y mettre.** Votre secteur d'activité, et la nature des données que votre projet manipule : données de santé, données personnelles, données financières, données sensibles.

**D'où vous vous connecterez.** Les adresses IP publiques autorisées à joindre votre Console.

:::caution[Les adresses IP ne sont pas optionnelles]
Seules les adresses que vous déclarez pourront accéder à la Console.

Pensez à inclure **tous** vos sites et vos sorties VPN. Un oubli n'est pas définitif : la liste s'enrichit ensuite depuis la Console, en autonomie (voir [Ajouter une adresse IP](#ajouter-une-adresse-ip)).
:::

Vous terminez en attestant que vous êtes habilité à engager votre organisation, et en acceptant les **[conditions générales](https://www.cloud-temple.com/contracts)**.

### Ce qui se passe ensuite

Tout est automatique. Votre organisation est créée à partir des informations que vous avez saisies, et votre espace se construit dans les minutes qui suivent : votre annuaire d'identités, votre premier environnement, vos accès.

Vous n'avez aucune démarche à faire pendant ce temps.

:::tip[Ce premier environnement arrive vide]
L'environnement créé par votre inscription n'a **aucun produit activé** : il est monté par notre automate, sans formulaire, donc sans sélection possible. C'est délibéré : rien ne commence à être facturé tant que vous n'avez pas activé un produit vous-même.

Les quatre produits en libre-service sont **disponibles** dans votre Console dès l'ouverture. Disponible ne veut pas dire activé : vous les activez quand vous le décidez, voir [Les produits](#les-produits).
:::

### Ce que vous recevez

Un courriel de **création de compte**, adressé au propriétaire désigné. Vous y définissez votre mot de passe et activez votre second facteur d'authentification.

Détails : [Les courriels que vous recevez](#les-courriels-que-vous-recevez).

:::tip[Et la partie contractuelle ?]
Elle ne vous bloque pas. Les informations administratives et de facturation : coordonnées de facturation, mode de règlement, référence de bon de commande se complètent en parallèle, avec votre interlocuteur Cloud Temple. Vous n'attendez pas qu'elles soient finalisées pour prendre la plateforme en main.
:::

---

<a id="connexion-à-votre-tenant-cloud-temple"></a>

## Étape 2. Vous connecter et sécuriser vos accès

<a id="vous-êtes-connecté"></a>

### Vous connecter

La Console est accessible à l'adresse [shiva.cloud-temple.com](https://shiva.cloud-temple.com), ou depuis l'adresse directe qui vous a été communiquée par courriel.

1. Sur la première page, indiquez l'[organisation](./iam/concepts.md#organisations) dans laquelle votre compte a été créé, puis cliquez sur **Se connecter**.
2. Authentifiez-vous avec votre mot de passe, puis avec le code à usage unique de votre second facteur.

<img src={shivaLogin} />

Vous arrivez sur la page d'accueil de la Console.

<img src={shivaHome} />

### Le double facteur est obligatoire

L'authentification à double facteur (MFA) est **obligatoire** pour tous les comptes de la Console : après le mot de passe, la Console demande un code à usage unique. Vous l'activez depuis le courriel de création de compte. Si votre organisation est fédérée à votre propre annuaire, voir les [mécanismes d'authentification](./iam/concepts.md#mécanismes-dauthentification).

### Ajouter une adresse IP

La Console étant hébergée sur une infrastructure qualifiée SecNumCloud, son accès est limité aux adresses IP publiques que vous avez autorisées.

L'**ajout** se fait depuis la Console, dans **Administration > Accès**. La page liste les adresses publiques autorisées ; le bouton **« Ajouter une IP »** en déclare une nouvelle, en notation CIDR, avec une description.

Il vous faut le droit `console_public_access_read` pour consulter la liste, et `console_public_access_write` pour l'enrichir.

Comptez une **dizaine de minutes** avant que la nouvelle adresse soit effective.

:::caution[Cette liste est celle de votre organisation]
Il n'y a qu'une liste pour toute l'organisation. La page est atteignable depuis un tenant, mais **une adresse ajoutée là autorise l'accès à la Console pour toute l'organisation**, pas seulement pour ce tenant.
:::

La **suppression** d'une adresse, elle, passe par une **demande de support** depuis la Console. C'est délibéré : retirer un accès est une opération irréversible pour ceux qui se connectent derrière.

<img src={orgAccess} />

Pour aller plus loin : les [recommandations de sécurité](./security/security_recommendations.md) pour l'accès à la Console.

---

<a id="parcours-2-ajouter-un-environnement"></a>

## Étape 3. Choisir ou créer un environnement

### Choisir votre tenant de travail

Les ressources techniques (calcul, stockage, réseau…) sont **propres à chaque tenant** et ne sont pas partagées entre tenants. Avant d'agir, choisissez le tenant dans lequel vous travaillez :

- depuis le bandeau en haut de la Console, ouvrez le sélecteur **« Mes tenants »** et cliquez sur le tenant voulu ;
- ou depuis **Administration > Tenants**, utilisez l'action **« Se connecter au tenant »** d'une ligne.

Le sélecteur signale par un badge **SecNumCloud** les tenants qualifiés.

<img src={imgSelector} />

### Créer un nouvel environnement

Vous avez déjà une organisation et vous voulez un nouvel environnement, pour une recette, un nouveau projet ou une filiale.

**Vous faites tout depuis la Console, dans les conditions de votre contrat. Aucune démarche auprès de nous n'est nécessaire.**

### Les étapes

1. Depuis **Administration > Tenants**, cliquez sur **« Nouveau tenant »**.
2. Donnez-lui un **nom** parlant : *production*, *recette*, le nom d'un projet. Le nom est contrôlé en direct ; une description est possible.
3. Le créateur du tenant en devient le propriétaire par défaut. Il pourra ajouter d'autres responsables ensuite, via l'onglet **Utilisateurs**, une fois connecté au tenant.
4. Choisissez les **produits** à y activer, puis validez avec **« Créer »**.

<img src={tenantNew} />

### Ce qui se passe ensuite

Votre environnement se construit tout seul, en quelques minutes. Vous n'avez rien à faire.

Si le propriétaire du tenant n'a pas encore de compte, il reçoit son courriel de création de compte. S'il en a déjà un, il accède au nouvel environnement sans nouvelle invitation.

:::tip[Rien n'est activé d'office]
Vous choisissez les produits du tenant **dès le formulaire de création** (l'étape 4 ci-dessus), et vous faites évoluer ce périmètre à tout moment. Aucun produit ne s'ouvre sans que vous l'ayez coché : vous ne payez que ce que vous consommez.
:::

---

## Étape 4. Inviter vos collaborateurs

Les comptes sont **globaux à l'organisation** ; les droits, eux, se donnent **tenant par tenant**.

1. **Invitez le collaborateur.** Depuis **Administration > Utilisateurs**, le bouton **« Nouvel utilisateur »** demande son adresse électronique. Il reçoit un courriel de vérification ; son compte apparaît grisé tant qu'il ne l'a pas validé.
2. **Donnez-lui ses droits.** Un compte nouvellement créé n'a **aucun droit**. Dans le menu **Actions** de l'utilisateur, choisissez **« Modifier »**, puis cochez les permissions nécessaires, dans chaque tenant où il doit intervenir.

<img src={shivaOnboard_004} />

<img src={shivaOnboard_005} />

Pour inviter un utilisateur ou lui donner une permission, il vous faut le droit `iam_write`, et vous ne pouvez donner qu'une permission que vous possédez vous-même.

Le détail des procédures (réinscription, suppression, propriétaires de tenant) et la liste des permissions sont dans la [référence IAM](./iam/concepts.md). Si votre organisation utilise son propre annuaire d'identités, voir les [tutoriels de fédération d'identité](/console/iam/tutorials).

### Changer un responsable

Le propriétaire de l'organisation gère les utilisateurs et leurs droits directement depuis la Console : voir [Identités et accès](/console/iam).

Il peut aussi **déléguer** ses droits à un partenaire externe ou à un chef de projet Cloud Temple : utile si vous confiez l'exploitation à un tiers.

---

<a id="parcours-3-faire-évoluer-un-environnement"></a>

## Étape 5. Activer vos produits

Vos besoins changent. Voici comment faire évoluer le périmètre d'un environnement existant.

### Activer un produit

Si le produit fait partie de votre catalogue, il apparaît dans la Console : **activez-le en complète autonomie** sur le tenant concerné. Comptez quelques minutes avant qu'il soit utilisable.

Depuis la liste de vos tenants, l'action **« Modifier les produits »** ouvre le catalogue. Cochez ceux que vous voulez ouvrir, décochez ceux que vous voulez arrêter, puis **Sauvegarder**.

S'il n'apparaît pas, c'est qu'il n'est pas encore à votre catalogue : voir [Demander un produit supplémentaire](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Arrêter un produit

Vous pouvez désactiver un produit dont vous ne vous servez plus, et la facturation s'arrête avec lui.

Une vérification a lieu avant : si des ressources sont encore consommées, la désactivation est refusée et la Console vous indique ce qui bloque. Supprimez ces ressources, puis recommencez.

C'est une protection : elle évite de couper un service encore utilisé et d'en perdre les données.

### Les produits {/* #les-produits */}

#### Ce que vous activez vous-même

Aucun produit n'est activé d'office, ni à la création de votre organisation, ni à celle d'un tenant. Quatre produits sont en revanche **disponibles** dans votre Console dès l'ouverture : vous les activez vous-même, sur le tenant de votre choix. Ils sont **facturés à l'usage**, sans engagement de volume ni palier à négocier : vous ne payez que ce que vous consommez.

| Produit | À quoi ça sert | En savoir plus |
| --- | --- | --- |
| **VM Instances** | Des machines virtuelles à la demande | [Documentation](/public_cloud/vm_instances) |
| **VPC** | Un réseau privé virtuel | [Documentation](/network/vpc) |
| **LLMaaS** | Des modèles d'IA souverains | [Documentation](/llmaas) |
| **Object Storage** | Du stockage compatible S3 | [Documentation](/storage/oss) |

#### Le reste du catalogue

Ces produits s'ouvrent dans le cadre de votre contrat, avec votre interlocuteur commercial :

- [IaaS VMware](/iaas_vmware) et [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) et [Kubernetes managé](/managed_kubernetes)
- Bases de données managées : [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) et [Internet](/network/internet)
- [Marketplace](/marketplace)

Vue d'ensemble : [nos produits](/managedproducts_overview).

### Demander un produit supplémentaire {/* #demander-un-produit-supplémentaire */}

Le produit que vous voulez n'apparaît pas dans votre Console ? Il n'est pas encore à votre catalogue.

1. Depuis la Console, créez une **demande de support**
2. Indiquez le **produit** concerné, et le volume envisagé si vous le connaissez
3. Nous revenons vers vous sur les conditions
4. Une fois validé, le produit apparaît dans votre Console
5. Vous pouvez l'activer sur un ou plusieurs tenants

<img src={supportSelectProduct} />

#### Changer de niveau de support

Trois niveaux existent, présentés sur [notre site](https://www.cloud-temple.com/produits/niveaux-de-support).

Vous pouvez monter ou descendre de niveau : faites-en la demande par le support depuis la Console, ou auprès de votre interlocuteur commercial.

---

## Étape 6. Automatiser

Tout ce que vous faites dans la Console est aussi possible par programme.

- **L'API de la Console** donne accès à l'ensemble de ses fonctionnalités. Vous vous y authentifiez avec une clé API, ou *Personal Access Token* (PAT), liée à un tenant et à l'utilisateur qui l'a créée. Le détail des appels est consultable depuis **Profil > APIs**. Voir la [documentation de l'API](./api.md).
- **Le provider Terraform** pilote votre plateforme *as code*. Voir [Terraform Provider](/terraform).

<img src={shivaOnboard_008} />

---

## Les courriels que vous recevez {/* #les-courriels-que-vous-recevez */}

Un seul courriel demande une action de votre part.

### Le courriel de création de compte

| | |
| --- | --- |
| **Expéditeur** | `shiva.support@cloud-temple.com` |
| **Qui le reçoit** | Le propriétaire de l'organisation, puis tout propriétaire de tenant qui n'a pas encore de compte |
| **Ce qu'il contient** | Un lien pour choisir votre mot de passe et activer votre second facteur (OTP) |
| **Quand** | Quelques minutes après la création |
| **Validité** | **96 heures** |

:::warning[Lien expiré ?]
Au-delà de 96 heures, le lien ne fonctionne plus. C'est une mesure de sécurité, pas une panne.

Écrivez à **`shiva.support@cloud-temple.com`** : nous vous en renvoyons un.

C'est le seul canal utilisable à ce stade : sans accès à la Console, vous ne pouvez pas encore y ouvrir de demande.
:::

:::note[Rien reçu ?]
Regardez vos courriers indésirables : le message est parfois filtré. Il est expédié par **`shiva.support@cloud-temple.com`** : autorisez cette adresse dans votre messagerie. Si vous n'avez rien reçu dans l'heure qui suit, contactez-nous à cette même adresse.
:::

---

## Questions fréquentes

**Combien de temps prend la création d'un environnement ?**
Quelques minutes. La création est automatique, que ce soit pour votre première arrivée ou pour un nouvel environnement.

**Combien de tenants puis-je créer ?**
Autant que nécessaire, dans les conditions de votre contrat.

**Mon projet porte des données de santé ou des données sensibles. Puis-je m'inscrire en ligne ?**
Oui. Signalez-le dans le formulaire : votre organisation est créée normalement, et nos équipes vous accompagnent sur l'ouverture des services concernés.

**Puis-je confier la gestion à un prestataire ?**
Oui. Le propriétaire de l'organisation peut déléguer ses droits à un partenaire externe ou à un chef de projet Cloud Temple.

**J'ai oublié une adresse IP, je ne peux plus me connecter.**
Si un collègue de votre organisation a encore accès à la Console, il ajoute l'adresse depuis **Administration > Accès**. Si personne n'y accède plus, écrivez à **`shiva.support@cloud-temple.com`** : c'est le canal de secours quand la Console est hors d'atteinte.

**Je viens d'activer un produit, je ne le vois pas encore.**
Patientez quelques minutes. S'il n'apparaît toujours pas, contactez le support.

D'autres questions sur les comptes et les droits : voir les [questions fréquentes IAM](./iam/quickstart.md).

---

## Aller plus loin

<div class="card-grid">
  <div class="card">
    <h3>Visite de la Console</h3>
    <p>Le reste de l'interface : tableau de bord, coûts, journalisation, support.</p>
    <a href="./console_quickstart" class="card-link">Faire la visite &rarr;</a>
  </div>
  <div class="card">
    <h3>Identités et accès</h3>
    <p>La référence des comptes, des propriétaires et des permissions, tenant par tenant.</p>
    <a href="./iam" class="card-link">Explorer l'IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Commander des ressources</h3>
    <p>Déployez vos premières ressources et suivez leur mise à disposition.</p>
    <a href="./orders" class="card-link">Voir les commandes &rarr;</a>
  </div>
  <div class="card">
    <h3>Facturation</h3>
    <p>Suivez votre consommation par tenant et par produit, au fil du mois.</p>
    <a href="./billing/concepts" class="card-link">Accéder au module &rarr;</a>
  </div>
  <div class="card">
    <h3>Responsabilités partagées</h3>
    <p>Ce que Cloud Temple opère, ce qui reste à votre charge.</p>
    <a href="../shared-responsibility" class="card-link">Lire le modèle &rarr;</a>
  </div>
  <div class="card">
    <h3>Engagements et SLA</h3>
    <p>Niveaux de service, disponibilité et conditions contractuelles.</p>
    <a href="https://www.cloud-temple.com/contracts" class="card-link">Consulter les engagements &rarr;</a>
  </div>
</div>
