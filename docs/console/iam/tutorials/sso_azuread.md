---
title: Exemple de fédération d'identité avec Microsoft EntraID (Azure AD)
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from '@site/docs/console/iam/tutorials/images/sso_entra_001.png'
import ssoEntra_002 from '@site/docs/console/iam/tutorials/images/sso_entra_002.png'
import ssoAad_004 from '@site/docs/console/iam/tutorials/images/sso_aad_004.png'
import ssoAad_005 from '@site/docs/console/iam/tutorials/images/sso_aad_005.png'
import ssoAad_006 from '@site/docs/console/iam/tutorials/images/sso_aad_006.png'
import ssoAad_007 from '@site/docs/console/iam/tutorials/images/sso_aad_007.png'
import ssoAad_008 from '@site/docs/console/iam/tutorials/images/sso_aad_008.png'
import ssoAad_009 from '@site/docs/console/iam/tutorials/images/sso_aad_009.png'
import ssoAad_010 from '@site/docs/console/iam/tutorials/images/sso_aad_010.png'
import ssoAad_011 from '@site/docs/console/iam/tutorials/images/sso_aad_011.png'
import ssoAad_012 from '@site/docs/console/iam/tutorials/images/sso_aad_012.png'
import ssoAad_013 from '@site/docs/console/iam/tutorials/images/sso_aad_013.png'
import ssoAad_014 from '@site/docs/console/iam/tutorials/images/sso_aad_014.png'
import ssoAad_015 from '@site/docs/console/iam/tutorials/images/sso_aad_015.png'
import ssoAad_016 from '@site/docs/console/iam/tutorials/images/sso_aad_016.png'
import ssoAad_017 from '@site/docs/console/iam/tutorials/images/sso_aad_017.png'
import ssoAad_018 from '@site/docs/console/iam/tutorials/images/sso_aad_018.png'

Voici un exemple de configuration du référentiel d'authentification d'une organisation Cloud Temple avec __Microsoft EntraID__.

La configuration de votre référentiel Microsoft au niveau d'une organisation Cloud Temple facilite l'authentification de vos utilisateurs sur la Console. Cela permet d'éviter la multiplication des facteurs d'authentification et de diminuer la surface d'attaque. Si vos utilisateurs sont authentifiés à leur compte Microsoft, l'authentification aux services de la Console sera transparente.

:::info[Azure AD et Microsoft EntraID]
Microsoft EntraID est le nouveau nom d'Azure Active Directory (Azure AD) depuis 2023. Il s'agit du même produit : ce tutoriel s'applique indifféremment aux deux appellations.
:::

:::info[Protocole utilisé]
La fédération avec EntraID est réalisée en __OpenID Connect (OIDC)__. Aucune configuration SAML n'est nécessaire de votre côté.
:::

## Les informations échangées

La mise en place repose sur un échange dans les deux sens. En voici le détail d'emblée, pour vous permettre de tout préparer en une seule passe.

### Ce que vous devez nous transmettre

| Information | Nom dans le portail Azure | À quoi elle sert |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifie l'application auprès d'EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Détermine les points de terminaison OpenID Connect de votre annuaire |
| __Secret client__ | *Client secret* → colonne __Value__ | Authentifie la Console auprès d'EntraID |

Les deux identifiants figurent dans l'onglet __"Overview"__ de votre inscription d'application ; le secret se crée dans l'onglet __"Certificates & secrets"__.

:::warning[Ne transmettez jamais le secret dans le corps d'une demande]
La valeur du secret client est un identifiant d'authentification. Ne la déposez pas dans le corps d'une demande d'assistance, ni dans un commentaire, ni dans une pièce jointe non chiffrée : elle y resterait consultable de façon durable.

Indiquez dans votre demande que vous disposez du secret, et transmettez-le par le canal sécurisé que votre contact Cloud Temple vous indiquera. Les deux identifiants (Application ID et Directory ID) ne sont pas sensibles et peuvent, eux, figurer dans la demande.
:::

### Ce que Cloud Temple vous transmet

La __"Redirect URL"__, propre à votre organisation. Elle est à déclarer dans votre inscription d'application EntraID (étape 3).

:::tip[Demandez-la dès l'ouverture de votre demande]
Cette URL dépend de votre organisation et ne peut pas être devinée. En la demandant dès l'ouverture de votre demande d'assistance, vous pourrez réaliser toute la configuration Azure en une seule fois, sans avoir à y revenir.
:::

## Étape 1 : Configuration du SSO côté Microsoft EntraID

### Enregistrement d'une nouvelle application Azure (portail Azure)

Pour la création de l'__app registration__, rendez-vous sur le portail Microsoft Azure, puis dans Microsoft EntraID, __"ADD > App Registration"__.

Dans la page "Register an application", veuillez indiquer :

```
- Name : indiquer "SHIVA"
- Supported account types : Accounts in this organizational directory only (<Votre Tenant Azure> only - Single tenant)
- Redirect URL : renseigner l'URL fournie par Cloud Temple. Si vous ne l'avez pas encore, laissez le champ vide et reportez-vous à l'étape 3.
```

<img src={ssoEntra_001} />

Les informations __Application (client) ID__ et __Directory (tenant) ID__ sont affichées sur l'onglet "Overview". Relevez-les : ce sont deux des trois informations à fournir dans votre demande d'assistance.

<img src={ssoEntra_002} />

### Définition d'un secret

Dans l'onglet "Certificates & secrets", créez un nouveau secret.

<img src={ssoAad_004} />

:::warning[Copiez la valeur immédiatement]
La valeur du secret n'est affichée qu'une seule fois, juste après sa création. Copiez le contenu de la colonne __"Value"__, et non celui de la colonne __"Secret ID"__. Si vous perdez cette valeur, vous devrez générer un nouveau secret.
:::

<img src={ssoAad_005} />

:::caution[Durée de validité limitée à 24 mois]
La date d'expiration du secret ne peut être supérieure à 24 mois, y compris avec une date d'expiration personnalisée. __Notez dès maintenant cette date__ : à son échéance, la connexion SSO cessera de fonctionner pour l'ensemble de vos utilisateurs. Voir la section [Renouvellement du secret](#renouvellement-du-secret).
:::

### Autorisation des informations utilisées par la Console

La Console identifie vos utilisateurs à partir des informations transportées par le jeton d'identité. Une seule action est nécessaire de votre part : __exposer l'adresse e-mail__.

Dans le menu __"Token Configuration"__, cliquez sur __"Add optional claim"__. Sélectionnez "ID" en tant que type de token et cochez "email".

<img src={ssoAad_006} />

L'interface Azure vous demande si vous souhaitez ajouter une permission permettant de lire l'email d'un utilisateur (Microsoft Graph email). Cochez la case et validez.

<img src={ssoAad_007} />

Rendez-vous ensuite sur "API permissions" et cliquez sur __"Grant admin consent for &lt;votre organisation&gt;"__.

<img src={ssoAad_008} />

Pour information, voici l'ensemble des informations consommées par la Console :

| Information | Usage | Action de votre part |
|---|---|---|
| `email` | Adresse de connexion de l'utilisateur | __Oui__ — à déclarer en claim optionnel (ci-dessus) |
| `oid` | Rattachement stable du compte Console à l'identité de votre annuaire, y compris si l'adresse e-mail change | Aucune — émis nativement par EntraID |
| `given_name`, `family_name` | Prénom et nom affichés dans la Console | Aucune — inclus dans le périmètre `profile` |

### Configurations de sécurité supplémentaires (optionnel mais recommandé)

Par défaut, Microsoft EntraID tel que configuré donnera à n'importe quel utilisateur de votre tenant Azure la possibilité de se connecter à votre organisation Cloud Temple. Il est possible de restreindre au niveau de l'__"App Registration"__ les accès pour n'autoriser qu'une liste d'utilisateurs ou de groupes.

Voici la procédure à suivre.

#### Accéder aux paramètres supplémentaires "App Registration"

##### Option 1

Allez sur l'onglet "Overview" puis cliquez sur le nom de l'application (le lien situé à la suite de "Managed application").

<img src={ssoAad_009} />

##### Option 2

Rendez-vous dans les "Enterprise applications" et cherchez en utilisant le nom de l'application créée précédemment.

<img src={ssoAad_010} />

#### Restriction de l'authentification aux utilisateurs assignés à l'application

Indiquez ici la nécessité d'un assignement de l'utilisateur à l'application pour autoriser son authentification :

<img src={ssoAad_011} />

#### Assignation des utilisateurs et groupes à l'application

Seuls les groupes et utilisateurs assignés à l'application pourront se connecter à votre organisation Cloud Temple via l'app registration.

<img src={ssoAad_012} />

Enfin, appliquez l'assignation en cliquant sur "Assign".

<img src={ssoAad_013} />

Désormais, les utilisateurs assignés à l'application pourront se connecter à votre organisation Cloud Temple via l'application créée.

## Étape 2 : Demander la configuration du SSO de votre organisation

Cette partie de la configuration se fait au niveau de l'organisation par l'équipe Cloud Temple.

Pour ce faire, faites __une demande d'assistance__ dans la Console indiquant votre souhait de configurer une fédération Microsoft EntraID, en précisant :

- le nom de votre organisation ;
- le nom d'un contact, avec son adresse e-mail et son numéro de téléphone, pour finaliser la configuration ;
- l'__Application (client) ID__ relevé à l'étape 1 ;
- le __Directory (tenant) ID__ relevé à l'étape 1.

Transmettez le __secret client__ par le canal sécurisé indiqué par votre contact, et non dans le corps de la demande.

Dès que la configuration est réalisée côté Console, le contact indiqué en sera informé et recevra la __"Redirect URL"__ à déclarer.

## Étape 3 : Déclaration de la "Redirect URL"

Si vous n'avez pas renseigné la "Redirect URL" lors de la création de l'application, ajoutez-la maintenant.

Sur la page d'accueil de l'App Registration, dans le menu "Overview", cliquez sur "Add a Redirect URL".

<img src={ssoAad_014} />

Dirigez-vous ensuite vers "Add a platform" et ajoutez-en une de type Web.

<img src={ssoAad_015} />

Renseignez la "Redirect URL" fournie par Cloud Temple.

<img src={ssoAad_016} />

Vous devriez obtenir ce résultat une fois la "Redirect URL" ajoutée.

<img src={ssoAad_017} />

La configuration de la "Redirect URL" peut mettre quelques minutes à être effective.

## Étape 4 : Vérification

Une fois toutes les étapes réalisées, vous pouvez vous authentifier à votre organisation Cloud Temple via votre SSO.

<img src={ssoAad_018} />

:::info[Droits des nouveaux utilisateurs]
La fédération d'identité gère __l'authentification__, pas les __autorisations__. Un utilisateur qui se connecte pour la première fois via le SSO ne dispose d'aucun droit tant qu'un propriétaire de l'organisation ne lui en a pas attribué depuis la Console.
:::

## Renouvellement du secret

Le secret client expire au plus tard 24 mois après sa création. À son échéance, la connexion SSO cesse de fonctionner pour l'ensemble de vos utilisateurs. Anticipez son renouvellement :

1. dans "Certificates & secrets", créez un __nouveau__ secret sans supprimer l'ancien ;
2. transmettez sa valeur à Cloud Temple par le canal sécurisé, en ouvrant une demande d'assistance ;
3. une fois la bascule confirmée par nos équipes, supprimez l'ancien secret depuis le portail Azure.

Conserver les deux secrets le temps de la bascule évite toute interruption de service.

## Bonnes pratiques

- __Pilotez l'accès par groupes__ plutôt que par utilisateurs : l'arrivée ou le départ d'un collaborateur se traite alors dans votre annuaire, sans intervention sur la Console.
- __Activez l'authentification multifacteur__ sur l'application dans vos stratégies d'accès conditionnel EntraID : elle s'applique alors à l'accès à la Console.
- __Programmez une alerte__ à l'approche de la date d'expiration du secret.
- __Conservez au moins un compte propriétaire local__ sur votre organisation Cloud Temple, non fédéré, afin de garder un accès en cas d'indisponibilité de votre annuaire.

## Dépannage

| Symptôme | Cause probable |
|---|---|
| `AADSTS50011` : l'URL de redirection ne correspond pas | La "Redirect URL" déclarée dans Azure diffère de celle fournie par Cloud Temple. Vérifiez-la caractère par caractère, y compris l'absence de `/` final. |
| `AADSTS7000215` : secret invalide | Le secret a expiré, ou la valeur transmise était le "Secret ID" au lieu de la "Value". |
| `AADSTS50105` : utilisateur non assigné | L'option "Assignment required" est active et l'utilisateur n'est pas assigné à l'application. |
| Le bouton de connexion n'apparaît pas sur la page | La configuration n'est pas encore active côté Cloud Temple. |
| L'utilisateur est authentifié mais la Console refuse l'accès | Le claim `email` est absent du jeton, ou aucun droit n'a été attribué à l'utilisateur. |

## Support

Pour toute question sur cette procédure, ouvrez une demande d'assistance depuis votre Console. Précisez le nom de votre organisation ainsi que l'horodatage d'une tentative de connexion en échec : cela permet de retrouver la trace correspondante.
