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

## Choisir le protocole

La fédération avec EntraID peut être réalisée avec l'un ou l'autre des deux protocoles standards. Les deux offrent un niveau de sécurité équivalent ; ils diffèrent principalement par ce que vous avez à nous transmettre et par ce qu'il faudra entretenir dans la durée.

| | OpenID Connect | SAML 2.0 |
|---|---|---|
| Ce que vous nous transmettez | Deux identifiants et un secret | Une URL de métadonnées publique |
| Secret échangé | Oui, le secret client | Aucun |
| À entretenir dans le temps | Le secret client (24 mois maximum) | Le certificat de signature (3 ans par défaut) |

__En l'absence de contrainte particulière, nous recommandons OpenID Connect__ : c'est le protocole que nous déployons par défaut. Retenez SAML si votre politique interne l'impose, ou si votre annuaire est raccordé à un concentrateur de fédération qui ne parle que ce protocole.

Indiquez le protocole retenu dès l'ouverture de votre demande d'assistance.

## Les informations échangées

La mise en place repose sur un échange dans les deux sens. En voici le détail d'emblée, pour vous permettre de tout préparer en une seule passe.

### Ce que vous devez nous transmettre — en OpenID Connect

| Information | Nom dans le portail Azure | À quoi elle sert |
|---|---|---|
| __Application (client) ID__ | *Application (client) ID* | Identifie l'application auprès d'EntraID |
| __Directory (tenant) ID__ | *Directory (tenant) ID* | Détermine les points de terminaison OpenID Connect de votre annuaire |
| __Secret client__ | *Client secret* → colonne __Value__ | Authentifie la Console auprès d'EntraID |

Les deux identifiants figurent dans l'onglet __"Overview"__ de votre inscription d'application ; le secret se crée dans l'onglet __"Certificates & secrets"__.

### Ce que vous devez nous transmettre — en SAML 2.0

Une seule information suffit dans le cas courant :

| Information | Nom dans le portail Azure | À quoi elle sert |
|---|---|---|
| __URL des métadonnées de fédération__ | *App Federation Metadata Url* | Nous en dérivons l'identifiant de votre annuaire, ses points de terminaison et son certificat de signature |

Elle se présente sous cette forme :

```
https://login.microsoftonline.com/<directory-tenant-id>/federationmetadata/2007-06/federationmetadata.xml?appid=<application-id>
```

Vous la trouvez dans __"Enterprise applications"__ → votre application → __"Single sign-on"__, section *SAML Certificates*. Elle est publique et ne contient aucun secret : elle peut figurer dans le corps de votre demande.

:::tip[Pourquoi cette URL plutôt qu'une liste de paramètres]
Elle regroupe en une seule valeur l'ensemble des paramètres de votre annuaire et simplifie le suivi du renouvellement de votre certificat de signature. Si cette URL n'est pas joignable depuis Internet, transmettez à la place l'*Identity provider entity ID*, la *Single Sign-On service URL*, la *Single Logout service URL* et le certificat de signature au format __Certificate (Base64)__.
:::

:::warning[Ne transmettez jamais le secret dans le corps d'une demande]
La valeur du secret client est un identifiant d'authentification. Ne la déposez pas dans le corps d'une demande d'assistance, ni dans un commentaire, ni dans une pièce jointe non chiffrée : elle y resterait consultable de façon durable.

Indiquez dans votre demande que vous disposez du secret, et transmettez-le par le canal sécurisé que votre contact Cloud Temple vous indiquera. Les deux identifiants (Application ID et Directory ID) ne sont pas sensibles et peuvent, eux, figurer dans la demande.
:::

### Ce que Cloud Temple vous transmet

Des valeurs propres à votre organisation, à déclarer dans votre application EntraID :

| Notre terme | Terme Microsoft | Protocole |
|---|---|---|
| URL de redirection | *Redirect URL* | OpenID Connect |
| URL de redirection | *Reply URL (Assertion Consumer Service URL)* | SAML 2.0 |
| Identifiant du fournisseur de service | *Identifier (Entity ID)* | SAML 2.0 |

:::tip[Demandez-les dès l'ouverture de votre demande]
Ces valeurs dépendent de votre organisation et ne peuvent pas être devinées. En les demandant dès l'ouverture de votre demande d'assistance, vous pourrez réaliser toute la configuration Azure en une seule fois, sans avoir à y revenir.
:::

## Étape 1 : Configuration du SSO côté Microsoft EntraID

Suivez la section correspondant au protocole retenu, puis la section « Configurations de sécurité supplémentaires », commune aux deux.

### Voie OpenID Connect

#### Enregistrement d'une nouvelle application Azure (portail Azure)

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

#### Définition d'un secret

Dans l'onglet "Certificates & secrets", créez un nouveau secret.

<img src={ssoAad_004} />

:::warning[Copiez la valeur immédiatement]
La valeur du secret n'est affichée qu'une seule fois, juste après sa création. Copiez le contenu de la colonne __"Value"__, et non celui de la colonne __"Secret ID"__. Si vous perdez cette valeur, vous devrez générer un nouveau secret.
:::

<img src={ssoAad_005} />

:::caution[Durée de validité limitée à 24 mois]
La date d'expiration du secret ne peut être supérieure à 24 mois, y compris avec une date d'expiration personnalisée. __Notez dès maintenant cette date__ : à son échéance, la connexion SSO cessera de fonctionner pour l'ensemble de vos utilisateurs. Voir la section [Maintien de la fédération dans le temps](#maintien-de-la-fédération-dans-le-temps).
:::

#### Autorisation des informations utilisées par la Console

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

### Voie SAML 2.0

#### Création de l'application d'entreprise

Dans __Microsoft EntraID__, rendez-vous dans __"Enterprise applications"__, puis __"New application"__. Choisissez __"Create your own application"__, nommez-la, et sélectionnez *Integrate any other application you don't find in the gallery (Non-gallery)*. Validez avec __"Create"__.

#### Configuration de l'authentification unique

Dans votre application, ouvrez __"Single sign-on"__ et choisissez __"SAML"__. Dans __"Basic SAML Configuration"__, cliquez sur __"Edit"__ et renseignez avec les valeurs fournies par Cloud Temple :

- __Identifier (Entity ID)__ ;
- __Reply URL (Assertion Consumer Service URL)__.

Enregistrez.

#### Attributs et revendications

EntraID émet par défaut les revendications attendues par la Console. Vérifiez leur présence dans __"Attributes & Claims"__ :

| Revendication | Usage | Action de votre part |
|---|---|---|
| `…/claims/emailaddress` | Adresse de connexion de l'utilisateur | Aucune — source `user.mail` |
| `http://schemas.microsoft.com/identity/claims/objectidentifier` | Rattachement stable du compte Console à l'identité de votre annuaire | Aucune |
| `…/claims/givenname`, `…/claims/surname` | Prénom et nom affichés dans la Console | Aucune |

:::warning[Identifiant de nom (NameID) : le point le plus souvent manqué]
Dans __"Attributes & Claims"__ → __"Unique User Identifier (Name ID)"__, positionnez la source sur __user.objectid__ et le format sur __Persistent__.

Par défaut, EntraID émet l'adresse e-mail comme NameID. Si un utilisateur change d'adresse, la Console le traiterait comme une personne différente et il perdrait ses droits. L'identifiant d'objet, lui, ne change jamais.
:::

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
- __le protocole retenu__ : OpenID Connect ou SAML 2.0 ;
- le nom d'un contact, avec son adresse e-mail et son numéro de téléphone, pour finaliser la configuration ;
- __en OpenID Connect__ : l'__Application (client) ID__ et le __Directory (tenant) ID__ relevés à l'étape 1 ;
- __en SAML 2.0__ : l'__URL des métadonnées de fédération__ de votre application.

En OpenID Connect, transmettez le __secret client__ par le canal sécurisé indiqué par votre contact, et non dans le corps de la demande. En SAML, aucun secret n'est échangé.

Dès que la configuration est réalisée côté Console, le contact indiqué en sera informé.

## Étape 3 : Déclaration de la "Redirect URL" (OpenID Connect)

Si vous n'avez pas renseigné la "Redirect URL" lors de la création de l'application, ajoutez-la maintenant.

En SAML 2.0, les URL équivalentes ont déjà été déclarées dans __"Basic SAML Configuration"__ à l'étape 1 : passez directement à l'étape 4.

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

## Maintien de la fédération dans le temps

C'est le principal point de vigilance : quel que soit le protocole, un élément expire, et son expiration interrompt le SSO __pour l'ensemble de vos utilisateurs__.

### En OpenID Connect : le secret client

Le secret client expire au plus tard 24 mois après sa création. Anticipez son renouvellement :

1. dans "Certificates & secrets", créez un __nouveau__ secret sans supprimer l'ancien ;
2. transmettez sa valeur à Cloud Temple par le canal sécurisé, en ouvrant une demande d'assistance ;
3. une fois la bascule confirmée par nos équipes, supprimez l'ancien secret depuis le portail Azure.

Conserver les deux secrets le temps de la bascule évite toute interruption de service.

### En SAML 2.0 : le certificat de signature

Le certificat de signature émis par EntraID a une durée de vie limitée, de trois ans par défaut.

__Prévenez-nous avant toute rotation de certificat__, via une demande d'assistance, en respectant la période de recouvrement proposée par Microsoft. Si vous nous avez transmis un certificat sous forme de fichier plutôt que l'URL de métadonnées, joignez le nouveau certificat à votre demande.

## Bonnes pratiques

- __Pilotez l'accès par groupes__ plutôt que par utilisateurs : l'arrivée ou le départ d'un collaborateur se traite alors dans votre annuaire, sans intervention sur la Console.
- __Activez l'authentification multifacteur__ sur l'application dans vos stratégies d'accès conditionnel EntraID : elle s'applique alors à l'accès à la Console.
- __Programmez une alerte__ à l'approche de la date d'expiration du secret client ou du certificat de signature, selon le protocole retenu.
- __Conservez au moins un compte propriétaire local__ sur votre organisation Cloud Temple, non fédéré, afin de garder un accès en cas d'indisponibilité de votre annuaire.

## Dépannage

| Symptôme | Protocole | Cause probable |
|---|---|---|
| `AADSTS50011` : l'URL de redirection ne correspond pas | Les deux | L'URL déclarée dans Azure diffère de celle fournie par Cloud Temple. Vérifiez-la caractère par caractère, y compris l'absence de `/` final. |
| `AADSTS700016` : application introuvable | SAML 2.0 | L'*Entity ID* déclaré ne correspond pas à celui fourni par Cloud Temple. |
| `AADSTS7000215` : secret invalide | OpenID Connect | Le secret a expiré, ou la valeur transmise était le "Secret ID" au lieu de la "Value". |
| `AADSTS50105` : utilisateur non assigné | Les deux | L'option "Assignment required" est active et l'utilisateur n'est pas assigné à l'application. |
| Le bouton de connexion n'apparaît pas sur la page | Les deux | La configuration n'est pas encore active côté Cloud Temple. |
| L'utilisateur est authentifié mais la Console refuse l'accès | Les deux | L'adresse e-mail est absente du jeton, ou aucun droit n'a été attribué à l'utilisateur. |
| L'utilisateur apparaît comme un nouveau compte à chaque connexion | SAML 2.0 | Le NameID n'est pas positionné sur `user.objectid`. |
| Erreur de signature à l'arrivée sur la Console | SAML 2.0 | Le certificat de signature a été renouvelé côté Azure sans que nous en soyons informés. |

## Support

Pour toute question sur cette procédure, ouvrez une demande d'assistance depuis votre Console. Précisez le nom de votre organisation ainsi que l'horodatage d'une tentative de connexion en échec : cela permet de retrouver la trace correspondante.
