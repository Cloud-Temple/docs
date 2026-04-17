---
title: Documentation API
---
import ShivaProfil001 from './images/shiva_profil_001.png'
import ShivaProfil002 from './images/shiva_profil_002.png'
import ShivaProfil003 from './images/shiva_profil_003.png'
import ShivaProfil004 from './images/shiva_profil_004.png'
import ShivaProfil005 from './images/shiva_profil_005.png'
import ShivaApi001 from './images/shiva_api_001.png'
import ShivaApi002 from './images/shiva_api_002.png'
import ShivaApi003 from './images/shiva_api_003.png'
import ShivaApi004 from './images/shiva_api_004.png'

## Introduction

L'API Cloud Temple vous permet de créer et gérer l'ensemble de vos ressources cloud de manière programmatique. Tout ce que vous pouvez faire via la console Cloud Temple peut également être réalisé via l'API, de la création de machines virtuelles à la configuration de la gestion des identités et des accès.

Cette documentation vous guide dans l'utilisation de l'API Cloud Temple, de l'authentification aux bonnes pratiques en passant par la gestion du cycle de vie des endpoints.

## Quickstart : Votre première requête API

### Prérequis

Avant de commencer, vous devez disposer d'un compte Cloud Temple avec les permissions appropriées pour générer des clés API.

### Étapes

1. **Générer votre clé API** : Connectez-vous à la [console Cloud Temple](https://shiva.cloud-temple.com/login) et générez votre Personal Access Token (voir section [Clés API](#clés-api-personal-access-token) ci-dessous).

2. **Tester votre première requête** : Exécutez la commande curl suivante en remplaçant `<votre-personal-access-token>` par votre token :

```bash
curl -X GET \
  -H "Authorization: Bearer <votre-personal-access-token>" \
  -H "Content-Type: application/json" \
  "https://shiva.cloud-temple.com/api/iam/v2/roles"
```

3. **Analyser la réponse** : Vous recevrez la liste des rôles IAM disponibles dans votre tenant, ce qui vous permet de comprendre les permissions existantes.

## Authentification

### Clés API (Personal Access Token)

La __clé API__ permet de s'authentifier lorsque vous souhaitez faire des requêtes sur l'API. La génération d'une clé API, aussi appelée __Personal Access Token (PAT)__, est une manière sécurisée de se connecter aux API Console sans passer par une interface graphique. Chacun de ces tokens est lié à un tenant et à l'utilisateur qui l'a créé.

La création de ce token se fait depuis votre compte. Il est possible de générer plusieurs clés et de configurer pour chacune les autorisations dans la limite de vos droits.

#### Créer une clé API

Pour créer une clef API, il suffit de __cliquer sur votre profil__ :

<img src={ShivaProfil001} />

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

<img src={ShivaProfil004} />

Pour une question de sécurité, il est recommandé de créer plusieurs tokens ayant chacun une utilité spécifique (un token pour chaque application ou chaque processus métier) plutôt que de créer 1 token avec l'ensemble des droits.

Vous voyez ensuite le nouveau jeton créé et sa future date d'expiration.

<img src={ShivaProfil005} />

:::info[Cycle de vie du token d'authentification]
Lorsque vous utilisez votre __Personal Access Token (PAT)__ pour vous authentifier auprès de l'API, vous recevez en retour un token d'accès. Il est important de noter que ce token d'accès est un __JSON Web Token (JWT)__ avec une durée de vie limitée.

- __Durée de vie__ : Chaque token JWT est valide pour une durée de __5 minutes__.
- __Vérification__ : Vous pouvez vérifier la date d'émission (`iat`) et la date d'expiration (`exp`) de votre token en le décodant. Des outils en ligne comme [jwt.io](https://jwt.io) vous permettent de le faire facilement.

Une fois le token expiré, vous devrez vous ré-authentifier avec votre PAT pour en obtenir un nouveau. Il est donc recommandé de gérer ce cycle de vie dans vos scripts et applications en prévoyant un renouvellement automatique du token.
:::

## Accès au portail API

La documentation OpenAPI 3.0 (Swagger) des APIs de la console Cloud Temple est disponible directement dans l'application :

<img src={ShivaApi001} />

L'accès aux APIs nécessite d'être authentifié. Une fois authentifié toutes les opérations doivent avoir le header __'Authorization'__ avec le bearer access token obtenu lors de la phase d'authentification.

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

1. **Surveillez les fonctionnalités dépréciées** : Consultez régulièrement les fonctionnalités dépréciée dans la console pour être informé des dépréciations à venir.

2. **Planifiez vos migrations** : Dès qu'une dépréciation est annoncée, planifiez la migration de votre code vers le nouvel endpoint dans les 3 mois.

3. **Testez les nouveaux endpoints** : Testez les nouveaux endpoints dès leur disponibilité, même pendant la période de transition.

4. **Documentez vos dépendances** : Maintenez une liste des endpoints que votre application utilise pour faciliter les migrations futures.

## Bonnes pratiques

### Sécurité des tokens

- Ne jamais exposer vos tokens dans du code versionné (Git, etc.)
- Utiliser des variables d'environnement pour stocker les tokens
- Créer des tokens avec des permissions minimales (principe du moindre privilège)
- Renouveler régulièrement vos tokens (maximum 12 mois)
- Révoquer immédiatement tout token compromis

### Gestion des erreurs

Toujours gérer les erreurs HTTP dans votre code :

```python
import requests

try:
    response = requests.get(
        'https://shiva.cloud-temple.com/api/compute/v1/virtual-machines',
        headers={'Authorization': 'Bearer {token}'}
    )
    response.raise_for_status()  # Lève une exception pour les codes 4xx/5xx
    data = response.json()
except requests.exceptions.HTTPError as e:
    if e.response.status_code == 429:
        # Gérer le rate limiting
        print("Trop de requêtes, attendre avant de réessayer")
    elif e.response.status_code == 401:
        # Token expiré ou invalide
        print("Authentification requise")
    else:
        print(f"Erreur HTTP: {e}")
except requests.exceptions.RequestException as e:
    print(f"Erreur de connexion: {e}")
```

### Optimisation des appels API

- Utiliser la pagination pour les listes volumineuses
- Mettre en cache les données qui changent rarement
- Utiliser les filtres pour limiter les données retournées
- Grouper les opérations quand c'est possible
- Suivre l'état des activités asynchrones au lieu de faire du polling intensif

### Retry avec backoff exponentiel

Implémentez une stratégie de retry avec backoff exponentiel pour gérer les erreurs temporaires :

```python
import time
import random

def api_call_with_retry(url, headers, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = requests.get(url, headers=headers)
            
            if response.status_code == 429:
                # Calculer le délai avec backoff exponentiel
                wait_time = (2 ** attempt) + random.uniform(0, 1)
                print(f"Rate limit atteint, attente de {wait_time:.2f}s")
                time.sleep(wait_time)
                continue
            
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.RequestException as e:
            if attempt == max_retries - 1:
                raise
            wait_time = (2 ** attempt) + random.uniform(0, 1)
            time.sleep(wait_time)
```