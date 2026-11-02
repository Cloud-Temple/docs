---
title: Questions fréquentes
---
import shivaOnboard_001 from '@site/docs/console/iam/images/shiva_onboard_001.png'

# FAQ IAM

Les questions courantes sur les comptes, les droits et l'accès à la Console. Les procédures pas à pas sont dans [Onboarding](../onboarding.md) ; la référence complète est dans les [concepts IAM](concepts.md).

<a id="tenant"></a>
<a id="création-dun-tenant"></a>
<a id="selection-dun-tenant"></a>

## Comment créer ou choisir un tenant ?

La création d'un tenant se fait __en self-service__ depuis la Console, sans demande de service préalable : __'Administration > Tenants'__, bouton __'Nouveau tenant'__. Le tenant de travail se choisit depuis le sélecteur __'Mes tenants'__ du bandeau.

Voir [Choisir ou créer un environnement](../onboarding.md#étape-3-choisir-ou-créer-un-environnement).

*__Nota :__ Les ressources d'un tenant lui sont propres et ne sont pas partagées avec les autres tenants.*

<a id="comptes-daccès-à-la-console"></a>
<a id="création-dun-compte-utilisateur-dans-votre-organisation"></a>

## Comment ajouter un utilisateur ?

Par invitation, depuis __'Administration > Utilisateurs'__, bouton __'Nouvel utilisateur'__. Les informations d'identification sont globales à votre [organisation](concepts.md#organisations), quel que soit le référentiel d'authentification.

*__Nota__ : Pour ajouter un utilisateur, vous devez posséder le droit __'iam_write'__.*

Voir [Inviter vos collaborateurs](../onboarding.md#étape-4-inviter-vos-collaborateurs) et la [référence](concepts.md#création-dun-compte-utilisateur-dans-votre-organisation).

<a id="affectation-des-permissions-à-un-utilisateur"></a>

## Comment ajouter une permission ?

Par défaut, un utilisateur n'a aucun droit. Depuis la page des utilisateurs, ouvrez le menu __'Actions'__ de l'utilisateur et choisissez __'Modifier'__. Les permissions se donnent __tenant par tenant__ : il n'existe pas d'attribution globale au niveau de l'organisation.

Voir l'[affectation des permissions dans un tenant](concepts.md#affectation-des-permissions-dans-un-tenant).

## Pourquoi je ne peux pas ajouter une permission ?

Pour ajouter une permission, vous avez besoin de posséder la permission __'iam_write'__ ainsi que la __permission que vous souhaitez ajouter__.

<a id="permissions"></a>

## Quelles sont les permissions disponibles pour les comptes utilisateur de la Console ?

Voir la liste des [permissions disponibles](concepts.md#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation) et leur définition.

## Comment auditer les accès/permissions des utilisateurs ?

Allez sur la page __'Utilisateurs'__ et cliquez sur le bouton __'Exporter CSV'__ : vous obtenez la liste des utilisateurs et de leurs accès.

## Comment supprimer un utilisateur ?

Dans le menu __'Administration'__ sur le bandeau vert à gauche de l'écran, dans le sous menu __'Utilisateurs'__, cliquez sur l'icône __'Actions'__ de l'utilisateur cible et choisissez __'Supprimer'__.

*__Nota__ :*

- *Vous ne pouvez pas vous supprimer vous-même, ni supprimer un utilisateur __'Propriétaire'__.*
- *S'il s'agit d'un utilisateur fédéré, __assurez-vous que l'utilisateur a été supprimé également depuis le référentiel d'identité__.*

## Pourquoi certains utilisateurs sont grisés ?

Les utilisateurs grisés sont ceux n'ayant pas validé leur compte. Lors de la création du compte, l'utilisateur a reçu un mail de vérification.

<img src={shivaOnboard_001} />

Le compte est grisé tant que la vérification n'a pas été finalisée. Si le lien a expiré, utilisez l'action __'Réinscription'__ : voir la [réinscription d'un utilisateur](concepts.md#réinscription-dun-utilisateur).

## Comment réinitialiser son mot de passe ?

Il est possible de réinitialiser son mot de passe depuis la page de connexion de la Console en cliquant sur __'Mot de passe oublié ?'__.

## Qu'est-ce que le MFA et est-il obligatoire ?

Le MFA (multi-factor authentication) est un concept de vérification de l'identité d'un utilisateur en deux étapes, appelée __authentification à double facteur__.

L'utilisateur doit fournir deux preuves d'identité distinctes. Dans le cas de la Console, l'authentification à double facteur est obligatoire et requiert de rentrer un code à usage unique une fois que l'utilisateur a entré le mot de passe de son compte.

## Qu'est-ce qu'un Personal Access Token (PAT) ?

La génération d'une clé API, aussi appelée __Personal Access Token (PAT)__, est une manière sécurisée de se connecter aux API Console sans passer par une interface graphique. Voir la [documentation de l'API](../api.md).

<a id="gestion-des-accès-et-authentification"></a>
<a id="autorisation-daccès-à-la-console--ip-autorisées"></a>

## Comment autoriser une nouvelle adresse IP à accéder à la Console ?

La Console étant hébergée sur une infrastructure qualifiée SecNumCloud, son accès est limité aux adresses IP publiques autorisées. La liste est celle de l'__organisation__ : elle se consulte et s'enrichit depuis __'Administration > Accès'__, avec les droits `console_public_access_read` et `console_public_access_write`. La suppression d'une adresse se fait par une demande de support dans la Console.

Voir [Ajouter une adresse IP](../onboarding.md#ajouter-une-adresse-ip).

## Comment fédérer l'authentification avec notre annuaire ?

La fédération d'identité se paramètre au niveau de l'organisation : voir les [mécanismes d'authentification](concepts.md#mécanismes-dauthentification) et les [tutoriels de fédération d'identité](/console/iam/tutorials).

<a id="changer-la-langue-dun-utilisateur"></a>

## Comment changer la langue d'un utilisateur ?

Dans son __'Profil'__, en haut à droite de l'écran, dans les __'Paramètres utilisateur'__. Voir [Changer la langue d'un utilisateur](concepts.md#changer-la-langue-dun-utilisateur).

<a id="abonnement-aux-notifications-thématiques"></a>

## Comment recevoir les notifications par courriel ?

Dans le profil utilisateur, onglet __'Mes abonnements'__, activez les thématiques souhaitées. Voir l'[abonnement aux notifications thématiques](concepts.md#abonnement-aux-notifications-thématiques).
