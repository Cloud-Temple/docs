---
title: Onboarding
description: Créer votre organisation, ajouter un environnement, modifier vos produits — les trois parcours de mise en place sur la plateforme Cloud Temple.
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import ipAccess from '@site/docs/console/images/shiva_ip_access_management_01.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'

# Onboarding

Cette page décrit ce qui se passe, étape par étape, quand vous arrivez chez Cloud Temple et quand vous faites évoluer votre environnement.

Elle couvre trois parcours :

1. **[Créer votre organisation](#parcours-1--créer-votre-organisation)** — votre première arrivée sur la plateforme
2. **[Ajouter un environnement](#parcours-2--ajouter-un-environnement)** — créer un nouveau tenant depuis la Console
3. **[Modifier un environnement](#parcours-3--modifier-un-environnement)** — ajouter un produit, changer vos accès

## D'abord, deux mots de vocabulaire

Toute la plateforme repose sur deux niveaux. Ils reviennent partout, autant les fixer tout de suite.

**Votre organisation**, c'est vous : votre entreprise. Elle porte votre contrat et votre facturation.

**Un tenant**, c'est un environnement de travail à l'intérieur de votre organisation. Vous pouvez en avoir plusieurs, complètement séparés les uns des autres.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

Concrètement : vous signez **un** contrat, et vous créez **autant d'environnements** que vous le souhaitez, sans mélanger vos données entre eux.

Deux personnes reçoivent des accès :

- le **responsable de l'organisation** — il accède à tout et invite les autres utilisateurs
- le **responsable d'un tenant** — il accède à cet environnement

Ce peut être la même personne.

---

## Parcours 1 — Créer votre organisation

C'est votre point d'entrée sur la plateforme. Il n'arrive qu'une fois.

### Ce que vous faites

Vous remplissez le formulaire d'inscription du site Cloud Temple. Votre interlocuteur commercial vous en communique l'accès.

On vous y demande :

- le **nom de votre entreprise**
- vos **coordonnées** et celles de la personne qui gérera les accès
- les **adresses IP publiques** depuis lesquelles vous vous connecterez

:::caution Les adresses IP ne sont pas optionnelles
Seules les adresses que vous déclarez pourront accéder à la Console. C'est une exigence de notre qualification SecNumCloud.

Pensez à inclure **tous** vos sites, et vos sorties VPN. Si vous en oubliez une, la connexion sera refusée depuis ce réseau — vous pourrez la faire ajouter ensuite.
:::

### Ce qui se passe ensuite

Tout est automatique. Votre organisation est créée à partir des informations que vous avez saisies. Votre espace se construit dans les minutes qui suivent.

### Ce que vous recevez

Un mail de **création de compte**, adressé au responsable désigné. Vous y définissez votre mot de passe et activez votre second facteur d'authentification.

Détails : [Les courriels que vous recevez](#les-courriels-que-vous-recevez).


### Vous êtes connecté

Vous arrivez sur la Console. Vous pouvez alors inviter vos collaborateurs et leur donner des droits : voir [Identités et accès](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

---

## Parcours 2 — Ajouter un environnement

Vous avez déjà une organisation et vous voulez un nouvel environnement — pour une recette, un nouveau projet, une filiale.

**Vous faites tout depuis la Console. Aucune démarche auprès de nous n'est nécessaire.**

### Les étapes

1. Depuis la Console, créez un **nouveau tenant** depuis l'onglet **tenants**.
2. Donnez-lui un **nom** parlant — *production*, *recette*, le nom d'un projet.
3. Le créateur du tenant sera par défaut son propriétaire. Il pourra ajouter d'autres responsables par la suite via l'onglet **Utilisateurs** en se connectant au tenant.
4. Choisissez les **produits** que vous voulez y activer?

<img src={tenantNew} />

### Ce qui se passe ensuite

Votre environnement se construit tout seul, en quelques minutes. Vous n'avez rien à faire.

Si le responsable du tenant n'a pas encore de compte, il reçoit son courriel de création de compte.

:::tip Votre tenant est créé vide
Aucun produit n'est activé automatiquement. C'est voulu : vous n'ouvrez que ce dont vous avez besoin, et vous ne payez que ce que vous consommez.
:::

---

## Parcours 3 — Modifier un environnement

Vos besoins changent. Voici comment faire évoluer un environnement existant.

### Activer un produit

Si le produit fait partie de votre catalogue, il apparaît dans la Console : **activez-le en complète autonomie** sur le tenant concerné. Comptez quelques minutes avant qu'il soit utilisable.

Depuis la liste de vos tenants, l'action **« Modifier les produits »** ouvre la liste complète. Un compteur vous indique combien de produits sont activés sur ce tenant. Cochez ceux que vous voulez ouvrir, décochez ceux que vous voulez arrêter, puis **Sauvegarder**.

S'il n'apparaît pas, c'est qu'il n'est pas encore à votre catalogue : voir [Demander un produit supplémentaire](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Arrêter un produit

Vous pouvez désactiver un produit dont vous ne vous servez plus.

Une vérification a lieu avant : si des ressources sont encore consommées, la désactivation est refusée et la Console vous indique ce qui bloque. Supprimez ces ressources, puis recommencez.

C'est une protection : elle évite de couper un service encore utilisé et d'en perdre les données.

### Ajouter ou retirer une adresse IP

Adressez une **demande de support** depuis la Console en précisant les adresses à ajouter ou à retirer. La mise à jour est appliquée automatiquement après traitement.

<img src={ipAccess} />

### Changer un responsable

Le responsable de l'organisation peut gérer les utilisateurs et leurs droits directement depuis la Console : voir [Identités et accès](/console/iam).

Il peut aussi **déléguer** ses droits à un partenaire externe ou à un chef de projet Cloud Temple.

---

## Les courriels que vous recevez

Un seul courriel demande une action de votre part.

### Le courriel de création de compte

| | |
| --- | --- |
| **Expéditeur** | `shiva.support@cloud-temple.com` |
| **Qui le reçoit** | Le responsable de l'organisation, et chaque responsable de tenant |
| **Ce qu'il contient** | Un lien pour choisir votre mot de passe et activer votre second facteur (OTP) |
| **Quand** | Quelques minutes après la création |
| **Validité** | **96 heures** |

:::warning Lien expiré ?
Au-delà de 96 heures, le lien ne fonctionne plus. C'est une mesure de sécurité, pas une panne.

Écrivez à **`shiva.support@cloud-temple.com`** : nous vous en renvoyons un.

C'est le seul canal utilisable à ce stade — sans accès à la Console, vous ne pouvez pas encore y ouvrir de demande.
:::

:::note Rien reçu ?
Regardez vos courriers indésirables : le message est parfois filtré. Il est expédié par **`shiva.support@cloud-temple.com`** — autorisez cette adresse dans votre messagerie. Sans nouvelle au bout d'une dizaine de minutes, écrivez-nous à cette même adresse.
:::


---

## Les produits

### Ce que vous pouvez activer vous-même

Quatre produits sont disponibles par défaut, peuvent s'activer directement depuis la Console et sont **facturés à l'usage** : vous ne payez que ce que vous consommez.

| Produit | À quoi ça sert | En savoir plus |
| --- | --- | --- |
| **VM Instances** | Des machines virtuelles à la demande | [Documentation](/public_cloud/vm_instances) |
| **VPC** | Un réseau privé virtuel | [Documentation](/network/vpc) |
| **LLMaaS** | Des modèles d'IA souverains | [Documentation](/llmaas) |
| **Object Storage** | Du stockage compatible S3 | [Documentation](/storage/oss) |

### Le reste du catalogue

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

---

## Demander un produit supplémentaire

Le produit que vous voulez n'apparaît pas dans votre Console ? Il n'est pas encore à votre catalogue.

1. Depuis la Console, créez une **demande de support**
2. Indiquez le **produit**, le **tenant** concerné, et le volume envisagé si vous le connaissez
3. Nous revenons vers vous sur les conditions
4. Une fois validé, le produit apparaît dans votre Console
5. Vous l'activez sur le tenant de votre choix

<img src={supportSelectProduct} />

### Changer de niveau de support

Trois niveaux existent, présentés sur [notre site](https://www.cloud-temple.com/produits/niveaux-de-support).

Vous pouvez monter ou descendre de niveau : faites-en la demande par le support depuis la Console, ou auprès de votre interlocuteur commercial.

---

## Questions fréquentes

**Combien de temps prend la création d'un environnement ?**
Quelques minutes, dans les trois cas. La création est automatique, que ce soit pour votre première arrivée ou pour un nouvel environnement.

**Combien de tenants puis-je créer ?**
Autant que nécessaire, dans les conditions de votre contrat.

**Puis-je confier la gestion à un prestataire ?**
Oui. Le responsable de l'organisation peut déléguer ses droits à un partenaire externe ou à un chef de projet Cloud Temple.

**J'ai oublié une adresse IP, je ne peux plus me connecter.**
Faites une demande de support pour la faire ajouter. La connexion redevient possible aussitôt après.

**Je viens d'activer un produit, je ne le vois pas encore.**
Patientez quelques minutes. S'il n'apparaît toujours pas, contactez le support.

---

## Aller plus loin

- [Prise en main de la Console](/console/console_quickstart)
- [Identités et accès](/console/iam)
- [Commander des ressources](/console/orders)
- [Facturation](/console/billing/concepts)
- [Responsabilités partagées](/shared-responsibility)
- [Engagements et SLA](/contracts)
