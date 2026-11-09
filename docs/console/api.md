---
title: Documentation de l'API de la Console
---
import ShivaProfil001 from '@site/docs/console/images/shiva_profil_001.png'
import ShivaProfil002 from '@site/docs/console/images/shiva_profil_002.png'
import ShivaProfil003 from '@site/docs/console/images/shiva_profil_003.png'
import ShivaProfil004 from '@site/docs/console/images/shiva_profil_004.png'
import ShivaProfil005 from '@site/docs/console/images/shiva_profil_005.png'
import ShivaApi001 from '@site/docs/console/images/shiva_api_001.png'
import ShivaApi002 from '@site/docs/console/images/shiva_api_002.png'
import ShivaApi003 from '@site/docs/console/images/shiva_api_003.png'
import ShivaApi004 from '@site/docs/console/images/shiva_api_004.png'

## Introduction

L'API Cloud Temple vous permet de créer et gérer de manière programmatique les ressources des produits intégrés à la Console. Tout ce que vous pouvez faire via la console Cloud Temple peut également être réalisé via l'API, de la création de machines virtuelles à la configuration de la gestion des identités et des accès.

Cette documentation vous guide dans l'utilisation de l'API Cloud Temple, de l'authentification aux bonnes pratiques en passant par la gestion du cycle de vie des endpoints.

## Quickstart : Votre première requête API

:::info[En résumé - 3 étapes pour démarrer]
1. 🔑 **Générer votre PAT** depuis la console
2. 🔄 **Échanger son ID et son secret contre un JWT**
3. 🚀 **Appeler l'API avec ce JWT** dans l'en-tête `Authorization`
:::

### Prérequis

Avant de commencer, vérifiez les points suivants :

- **Compte et tenant** : votre compte dispose de la permission `iam_offline_access` dans le tenant où vous souhaitez **créer** le PAT.
- **Permissions du PAT** : sélectionnez uniquement les permissions nécessaires aux opérations que votre script réalisera. Il n'est pas nécessaire d'ajouter `iam_offline_access` aux permissions du PAT pour l'utiliser sur le point d'authentification.
- **Accès réseau** : l'IP publique de sortie utilisée par votre script doit être autorisée pour l'organisation. Consultez [l'ajout d'une adresse IP dans Administration > Accès](./onboarding.md#ajouter-une-adresse-ip). Prévoyez environ **10 minutes** pour la prise en compte d'un ajout. La consultation et la modification de cette liste nécessitent respectivement `console_public_access_read` et `console_public_access_write` ; ces permissions ne sont pas nécessaires au PAT pour s'authentifier.
- **Outils** : les exemples ci-dessous utilisent `curl` et un shell compatible Bash.

:::warning[Le navigateur et le script peuvent utiliser des IP différentes]
Une connexion réussie à la Console ne valide pas l'accès réseau de votre script. Un proxy, un VPN ou un runner CI peut utiliser une autre IP publique de sortie. L'adresse configurée pour joindre un proxy n'est pas nécessairement l'adresse publique avec laquelle il sort sur Internet. Faites confirmer cette dernière par votre équipe réseau et autorisez-la pour l'organisation concernée.
:::

### Étapes

1. **Générer votre PAT** : connectez-vous à la [console Cloud Temple](https://shiva.cloud-temple.com/login), sélectionnez le tenant concerné et créez un Personal Access Token (voir [Clés API](#clés-api-personal-access-token)). Conservez son **ID** et son **secret**. L'ID attendu est celui du PAT, pas celui du tenant, de l'organisation ou de l'utilisateur.

2. **Obtenir un token d'accès JWT** : remplacez les valeurs fictives `ID_DU_PAT` et `SECRET_DU_PAT` par celles du même PAT, non expiré et non révoqué. Envoyez une requête **POST**, avec un corps JSON valide et l'en-tête `Content-Type: application/json`, à l'URL complète ci-dessous, qui inclut **`/api/iam`**. Aucun Bearer token préalable n'est nécessaire sur ce point d'authentification.

```bash
ACCESS_TOKEN=$(curl --fail --silent --show-error \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"id":"ID_DU_PAT","secret":"SECRET_DU_PAT"}' \
  'https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token')
```

En cas de succès (HTTP 200), le corps de la réponse contient le JWT, conservé ici dans la variable `ACCESS_TOKEN`. Si la commande échoue, consultez le [dépannage](#dépanner-lauthentification-pat) avant de continuer.

3. **Appeler une API avec le JWT** : utilisez ce token d'accès dans `Authorization: Bearer`. L'exemple suivant interroge la liste des rôles IAM :

```bash
curl --fail --silent --show-error \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  'https://shiva.cloud-temple.com/api/iam/v2/roles'
```

Le Bearer attendu est le **JWT obtenu à l'étape 2**, ni l'ID ni le secret du PAT. Les opérations suivantes restent soumises aux permissions accordées au PAT.

:::caution[Protéger les identifiants]
Les valeurs de l'exemple sont fictives. Dans vos automatisations, fournissez le secret via votre gestionnaire de secrets et évitez de l'enregistrer dans le code, l'historique du shell ou les journaux. Ne partagez ni le secret du PAT ni le JWT obtenu.
:::

## Authentification

### Clés API (Personal Access Token)

La __clé API__ permet de s'authentifier lorsque vous souhaitez faire des requêtes sur l'API. La génération d'une clé API, aussi appelée __Personal Access Token (PAT)__, est une manière sécurisée de se connecter aux API Console sans passer par une interface graphique. Chacun de ces tokens est lié à un tenant et à l'utilisateur qui l'a créé.

La création de ce token se fait depuis votre compte et nécessite la permission `iam_offline_access`. Il est possible de générer plusieurs clés et de configurer pour chacune les autorisations dans la limite de vos droits. Cette permission de création est distincte des permissions métier du PAT : l'échange de son ID et de son secret contre un JWT ne nécessite pas qu'il porte lui-même `iam_offline_access`.

#### Créer une clé API

Pour créer une clef API, il suffit de __cliquer sur votre profil__ :

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

Dans le menu du profil, cliquer sur __'Jeton d'accès personnel'__

<img src={ShivaProfil003} />

Vous avez alors à l'écran l'ensemble des clés API qui ont été créées pour cet utilisateur dans ce tenant. Cliquer sur __'Nouveau access token personnel'__

<img src={ShivaProfil002} />

Vous devez alors :

- Indiquer le nom de ce nouveau jeton,
- Indiquer une date d'expiration (maximum 12 mois de validité),
- Choisir les permissions associées au jeton.

Les détails concernant votre jeton sont alors affichés. __Attention, il n'est plus possible d'y accéder a posteriori.__

Si vous ne notez pas ces informations, vous devrez détruire et recréer le jeton.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Pour une question de sécurité, il est recommandé de créer plusieurs tokens ayant chacun une utilité spécifique (un token pour chaque application ou chaque processus métier) plutôt que de créer 1 token avec l'ensemble des droits.

Vous voyez ensuite le nouveau jeton créé et sa future date d'expiration.

<img src={ShivaProfil005} />

:::info[Cycle de vie du token d'authentification]
Lorsque vous utilisez votre __Personal Access Token (PAT)__ pour vous authentifier auprès de l'API, vous recevez en retour un token d'accès. Il est important de noter que ce token d'accès est un __JSON Web Token (JWT)__ avec une durée de vie limitée.

- __Durée de vie__ : Chaque token JWT est valide pour une durée de __5 minutes__.
- __Vérification__ : Vous pouvez consulter la date d'émission (`iat`) et la date d'expiration (`exp`) en décodant le JWT localement. Ne transmettez pas un token actif à un service de décodage tiers. Le décodage seul ne vérifie pas sa signature.

Une fois le token expiré, vous devrez vous ré-authentifier avec votre PAT pour en obtenir un nouveau. Il est donc recommandé de gérer ce cycle de vie dans vos scripts et applications en prévoyant un renouvellement automatique du token.
:::

### Dépanner l'authentification PAT

Commencez par identifier la requête qui échoue : **l'échange ID/secret** ou **l'appel métier avec le JWT**. Les contrôles à effectuer ne sont pas les mêmes.

| Symptôme | Vérifications |
|---|---|
| Requête d'authentification rejetée | Vérifiez la méthode **POST**, l'URL complète `https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token`, le type `application/json` et un corps contenant les chaînes `id` et `secret`. Dans Postman, choisissez un corps **raw / JSON**. N'envoyez pas ce corps avec une méthode GET. |
| Échec d'authentification malgré une requête conforme | Vérifiez que l'ID et le secret correspondent au **même PAT**, dans le tenant attendu, et que ce PAT n'est ni expiré ni révoqué. N'utilisez pas l'ID du tenant à la place de l'ID du PAT. |
| **HTTP 403**, notamment avec une page HTML de refus | Ce statut ne prouve pas un manque de permissions IAM. Vérifiez l'IP publique de sortie effective et la liste d'accès de l'organisation, puis le proxy et la forme de la requête : un proxy ou un pare-feu applicatif (WAF) peut rejeter la requête avant qu'elle n'atteigne l'API. Un corps HTML peut aider à identifier ce refus, sans suffire à en déterminer la cause. |
| L'échange réussit, mais l'appel métier échoue | Vérifiez que l'en-tête Bearer contient le JWT obtenu, que celui-ci n'est pas expiré, et que le PAT possède les permissions requises par l'opération dans le bon tenant. Ajouter `iam_offline_access` au PAT ne résout pas à lui seul un refus sur une opération métier. |

Si le problème persiste, transmettez au support l'heure du test **avec le fuseau horaire**, la méthode et l'URL, le statut HTTP, l'IP publique de sortie confirmée, ainsi que la réponse et un éventuel identifiant de requête. Fournissez une commande ou une capture **expurgée** : masquez le secret, le JWT, les en-têtes `Authorization` et `Proxy-Authorization`, ainsi que les cookies. Le statut HTTP seul ne permet pas d'identifier avec certitude le composant qui a refusé la requête.

## Accès au portail API

La documentation OpenAPI 3.0 (Swagger) des APIs de la console Cloud Temple est disponible directement dans l'application :

<img src={ShivaApi001} />

Les opérations protégées des APIs nécessitent l'en-tête __`Authorization`__ avec le Bearer JWT obtenu lors de la phase d'authentification. L'échange initial de l'ID et du secret du PAT décrit ci-dessus ne nécessite pas cet en-tête.

L'URL des points d'accès est directement donnée dans __Swagger__ (dans l'objet "Servers" de chaque page APIs).

### Explorer la documentation interactive

Le portail API vous permet de :

- Consulter l'ensemble des endpoints disponibles par module
- Tester directement les requêtes depuis l'interface
- Voir les modèles de données (schémas) pour chaque ressource
- Consulter les codes de réponse possibles pour chaque endpoint

## Structure des endpoints

### Format des URLs

Les URLs de l'API Cloud Temple suivent une structure cohérente :

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{ressource}
```

Où :
- `{module}` : Le module concerné (compute, iam, network, backup, etc.)
- `{version}` : La version de l'API (v1, v2, etc.)
- `{ressource}` : La ressource à manipuler (virtual-machines, users, networks, etc.)

### Exemples d'endpoints

```
# Machines virtuelles (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identité et accès (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Réseaux
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Organisation par module

L'API Cloud Temple est organisée en modules fonctionnels :

| Module | Description | Base URL |
|--------|-------------|----------|
| Console Cloud Temple | Fonctionnalités générales | `/api/v1/` |
| Identité (IAM) | Gestion des utilisateurs et accès | `/iam/v1/` |
| IaaS VMware | Ressources de virtualisation VMware | `/compute/v1/` |
| OpenIaaS | Ressources Xen Orchestra | `/openiaas/v1/` |
| S3 | Stockage objet | `/s3/v1/` |
| OpenShift | Plateforme PaaS | `/openshift/v1/` |
| Bastion | Appliances bastion SSH/RDP | `/bastion/v1/` |
| Réseau | Gestion réseau niveau 2 et 3 | `/network/v1/` |
| Hébergement | Colocation et housing | `/housing/v1/` |
| Marketplace | Catalogue de solutions | `/marketplace/v1/` |
| Support | Tickets et assistance | `/support/v1/` |
| Notification | Système de notifications | `/notification/v1/` |
| LLMaaS | Intelligence artificielle | `/llmaas/v1/` |

## Les activités

Le suivi des requêtes de type écriture (POST, PUT, PATCH, DELETE) est assuré via la gestion des activités. Chaque requête de ce type génère automatiquement une activité associée. Un code de statut HTTP 201 confirme la création réussie de l'activité. L'identifiant unique de cette activité est renvoyé dans les en-têtes de la réponse, sous la clé 'Location'.

<img src={ShivaApi002} />

Une fois l'identifiant récupéré, il est possible d'accéder aux détails de l'activité en utilisant l'API du module Activity :

<img src={ShivaApi003} />

Le contenu de l'activité inclut toutes les informations essentielles pour identifier l'opération, sa date d'exécution, ainsi que son état d'avancement. Voici le modèle d'une activité :

```json
{
  "id": "UUIDV4",
  "tenantId": "UUIDV4",
  "description": "STRING",
  "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
  "tags": "STRING[]",
  "initiator": "UUIDV4",
  "creationDate": "DATE",
  "concernedItems": [
    {
      "type": "string",
      "id": "string"
    }
  ],
  "state": "CompletedState | RunningState | WaitingState | FailedState",
  "operationType": "read" | "write"
}
```

### États d'une activité

L'objet __state__ peut prendre différentes formes selon l'état de l'activité, à savoir :

#### waiting

État avant que l'opération n'ait commencé :

```json
waiting: {}
```

#### running

État lorsque l'opération est en cours :

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

État si l'opération a échoué :

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

État si l'opération est terminée :

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Identifiant de la ressource créée]
L'Identifiant (UUIDv4) de la ressource créée est disponible dans le résultat de l'activité une fois celle-ci complétée.
:::

## Limites API

### Pourquoi des limites ?

La console Cloud Temple définit __des plafonds sur le volume de requêtes__ qu'un utilisateur peut adresser à l'API sur une durée déterminée. L'instauration de ces plafonds de fréquence est une mesure courante dans la gestion des API, adoptée pour plusieurs motifs essentiels :

- __Prévention des abus__ : Ces limites contribuent à la sauvegarde de l'intégrité de l'API en prévenant les usages abusifs ou maladroits susceptibles de compromettre son fonctionnement.
- __Assurance de la qualité de service__ : En régulant l'accès à l'API, nous veillons à une distribution équitable des ressources, permettant ainsi à tous les utilisateurs de bénéficier d'une expérience stable et performante.

Prenons l'exemple d'un script mal conçu ou inefficace qui tente des appels répétitifs à l'API, risquant de saturer les ressources et de dégrader les performances. En établissant des seuils de requêtes, nous prévenons ces situations et assurons le maintien d'__un service fluide et sans interruption__ pour l'ensemble de notre clientèle.

### Quelles sont les limites de taux pour l'API de la console Cloud Temple ?

Nous appliquons des restrictions quantitatives sur les interactions des utilisateurs avec la console pour chaque produit.

Les limites sont définies en __requêtes par secondes (r/s) et par IP source__. Au-delà du seuil limite, le système répondra par un code d'erreur HTTP 429, signalant que la limite de requêtes autorisées a été dépassée.

Voici les limites définies :

| Produit | Seuil limite |
|---|---|
| Console Cloud Temple | 25 r/s |
| Identité (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Réseau | 25 r/s |
| Hébergement | 25 r/s |
| Marketplace | 25 r/s |
| Support | 25 r/s |
| Notification | 25 r/s |
| LLMaaS | 25 r/s |

### Routes spécifiques

Certains points d'API spécifiques, notamment ceux liés à l'authentification ou à des actions sensibles, ont des limites plus restrictives pour renforcer la sécurité et garantir la stabilité.

| Route | Seuil limite |
|---|---|
| Authentification (IAM) | 5 r/s |
| IaaS - Stockage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### Comment fonctionnent les limites de taux ?

Si le nombre de requêtes envoyées à un point d'API excède la limite autorisée, le point d'API réagira en retournant __un code de réponse HTTP 429__. Ce code indique que l'utilisateur a dépassé le nombre de requêtes permises. Lorsque cela se produit, le point d'API fournira également un objet JSON en guise de réponse, lequel contiendra des informations détaillées sur la limitation appliquée :

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### Comment éviter d'effectuer trop de requêtes ?

Il est recommandé de limiter le nombre d'appels d'API effectués par votre automatisation afin de rester en deçà de la limite de taux fixée pour le point de terminaison.

Cette situation survient souvent lorsque plusieurs requêtes sont exécutées en parallèle, à l'aide de plusieurs processus ou threads.

Il existe plusieurs moyens d'améliorer l'efficacité de votre automatisation, notamment en utilisant des mécanismes de __mise en cache__ et en mettant en place __un système de rejeu avec atténuation progressive__. Cette méthode consiste à effectuer une courte pause lorsqu'une erreur de limite de taux est rencontrée, puis à réessayer la requête. Si la requête échoue à nouveau, la durée de la pause est augmentée progressivement jusqu'à ce que la requête réussisse ou jusqu'à ce qu'un nombre maximum de réessais soit atteint.

Cette approche présente de nombreux avantages :

- __L'atténuation progressive__ garantit que les premières tentatives sont jouées rapidement, tout en prévoyant des délais plus longs en cas d'échec répété.
- L'ajout d'__une variation aléatoire__ à la pause contribue à éviter que toutes les tentatives ne se produisent simultanément.

Il est important de noter que __les requêtes infructueuses n'affectent pas votre limite de taux__. Cependant, renvoyer continuellement une requête pourrait ne pas être une solution viable à long terme, car ce comportement pourrait être modifié à l'avenir. Nous vous recommandons donc de ne pas dépendre exclusivement de ce mécanisme.

Les bibliothèques __[Backoff](https://pypi.org/project/backoff/)__ et __[Tenacity](https://pypi.org/project/tenacity/)__ en Python sont des bons points de départ pour implémenter des stratégies d'atténuation.

## Cycle de vie et dépréciation des endpoints

### Politique de dépréciation

Cloud Temple s'engage à maintenir la compatibilité de son API dans le temps. Cependant, lorsqu'il est nécessaire de faire évoluer l'API (nouvelles fonctionnalités, optimisations, corrections de sécurité), certains endpoints peuvent être dépréciés puis supprimés.

#### Règle des 3 mois minimum

Lorsqu'un endpoint est marqué comme déprécié :

1. **Annonce officielle** : La dépréciation est annoncée dans les notes de version de la console
2. **Période de transition** : L'endpoint reste **accessible et fonctionnel pendant au minimum 3 mois** après l'annonce
3. **Date de suppression** : Une date précise de suppression définitive est communiquée dès l'annonce
4. **Alternative documentée** : Le nouvel endpoint de remplacement est documenté et disponible

Cette règle des 3 mois vous laisse le temps nécessaire pour adapter votre code et migrer vers les nouveaux endpoints.

### Comment identifier un endpoint déprécié ?

#### Dans le portail API (Swagger)

Les endpoints dépréciés apparaissent barrés dans la documentation Swagger :


~~POST /v1/ancien/endpoint~~

La description de l'endpoint inclut :
- La date d'annonce de la dépréciation
- La date de suppression prévue
- L'endpoint de remplacement recommandé

<img src={ShivaApi004} />

### Bonnes pratiques pour gérer les dépréciations

1. **Surveillez les fonctionnalités dépréciées** : Consultez régulièrement les fonctionnalités dépréciées dans la console pour connaître les dépréciations annoncées et leur date de suppression prévue.

2. **Planifiez vos migrations** : Dès qu'une dépréciation est annoncée, planifiez la migration de votre code vers le nouvel endpoint dans les 3 mois.

3. **Testez les nouveaux endpoints** : Testez les nouveaux endpoints dès leur disponibilité, même pendant la période de transition.

4. **Documentez vos dépendances** : Maintenez une liste des endpoints que votre application utilise pour faciliter les migrations futures.

## Bonnes pratiques

### Sécurité des tokens

:::danger[Règles de sécurité essentielles]
- 🚫 Ne jamais exposer vos tokens dans du code versionné (Git, etc.)
- 🔐 Utiliser des variables d'environnement pour stocker les tokens
- 🎯 Créer des tokens avec des permissions minimales (principe du moindre privilège)
- 🔄 Renouveler régulièrement vos tokens (maximum 12 mois)
- ⚠️ Révoquer immédiatement tout token compromis
:::

### Gestion des erreurs

Toujours gérer les erreurs HTTP dans votre code. Portez une attention particulière aux codes suivants :

| Code | Description | Action recommandée |
|------|-------------|-------------------|
| **401** Unauthorized | Token expiré ou invalide | Ré-authentifier avec votre PAT |
| **403** Forbidden | Permissions insuffisantes | Vérifier les droits du token |
| **429** Too Many Requests | Limite de taux atteinte | Attendre avant de réessayer (backoff) |
| **500/503** Server Error | Erreur serveur temporaire | Réessayer plus tard |

### Optimisation des appels API

- Utiliser la pagination pour les listes volumineuses
- Mettre en cache les données qui changent rarement
- Utiliser les filtres pour limiter les données retournées
- Grouper les opérations quand c'est possible
- Suivre l'état des activités asynchrones au lieu de faire du polling intensif

### Retry avec backoff exponentiel

Pour gérer les erreurs temporaires ou le rate limiting (HTTP 429), implémentez une stratégie de retry avec backoff exponentiel :

:::tip[Stratégie de retry recommandée]
- ⏱️ **Attente progressive** : 1s, 2s, 4s, 8s...
- 🎲 **Variation aléatoire** : Évite que tous les clients ne réessayent simultanément
- 🔄 **Limite de tentatives** : Maximum 3-5 tentatives
- 📚 **Bibliothèques Python** : [Backoff](https://pypi.org/project/backoff/) ou [Tenacity](https://pypi.org/project/tenacity/)
:::
