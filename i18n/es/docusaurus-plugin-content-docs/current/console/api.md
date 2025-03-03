---
title: Documentation API
---


## Clés API

La __clé API__ permet de s'authentifier lorsque vous souhaitez faire des requêtes sur l'API. La génération d'une clé API, aussi appelée __Personal Access Token (PAT)__,
est une manière sécurisée de se connecter aux API Shiva sans passer par une interface graphique. Chacun de ces tokens est lié à un tenant et à l'utilisateur qui l'a créé.

La création de ce token se fait depuis votre compte. Il est possible de générer plusieurs clés et de configurer pour chacune les autorisations dans la limite de vos droits.

Pour créer une clef API, il suffit de __cliquer sur votre profil__ :

![](images/shiva_profil_001.png)

Dans le menu du profil, cliquer sur __'Jeton d'accès personnel'__

![](images/shiva_profil_003.png)

Vous avez alors à l'écran l'ensemble des clés API qui ont été créées pour cet utilisateur dans ce tenant. Cliquer sur __'Nuevo access token personal'__

![](images/shiva_profil_002.png)

Vous devez alors :

- Indiquer le nom de ce nuevo jeton,
- Indiquer une fecha de caducidad (máximo 12 meses de validez),
- Elegir los permisos asociados al jeton.

Les détails concernant votre jeton sont alors affichés. __Attention, il n'est plus possible d'y accéder a posteriori.__

Si vous ne notez pas ces informations, vous devrez détruire et recréer le jeton.

![](images/shiva_profil_004.png)

Pour una cuestión de seguridad, il est recommandé de créer plusieurs tokens ayant chacun une utilité spécifique (un token pour chaque aplicación ou chaque proceso empresarial) plutôt que de créer 1 token con todos los derechos.

Vous voyez ensuite le nuevo jeton créé et sa future fecha de caducidad.

![](images/shiva_profil_005.png)

## Acceso al portal API

La documentation OpenAPI 3.0 (Swagger) des APIs de la consola Cloud Temple est disponible directement dans l'application :

![](images/shiva_api_001.png)

L'accès aux APIs nécessite d'être authentifié. Une fois authentifié todas las operaciones doivent avoir el encabezado
__'Authorization'__ con el bearer access token obtenu lors de la phase d'authentification.

L'URL des points d'accès est directement donnée dans __Swagger__ (dans l'objet "Servers" de chaque page APIs).

## Les activités

Le suivi des requêtes de type écriture (POST, PUT, PATCH, DELETE) est assuré via la gestion des activités. Chaque requête de ce type génère automatiquement une activité associée. Un code de statut HTTP 201 confirme la création réussie de l'activité. L'identifiant unique de cette activité est renvoyé dans les en-têtes de la réponse, sous la clé 'Location'.

![](images/shiva_api_002.png)

Une fois l'identifiant récupéré, il est possible d'accéder aux détails de l'activité en utilisant l'API du module Activity :

![](images/shiva_api_003.png)

Le contenu de l'activité inclut todas las informations essentielles pour identifier l'opération, sa fecha de ejecución, ainsi que son estado d'avancement. Voici le modèle d'une actividad :

```
    {
    "tenantId": "UUIDV4",
    "description": "STRING",
    "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
    "tags": "STRING[]",
    "initiator": "UUIDV4",
    "concernedItems": [
        {
        "type": "string",
        "id": "string"
        }
    ],
    "id": "UUIDV4",
    "creationDate": "DATE",
    "operationType": "read" | "write",
    "state": "CompletedState | RunningState | WaitingState | FailedState"
}
```

L'objet **state** peut prendre différentes formes selon l'état de l'activité, à savoir :

**waiting**, estado avant que l'opération n'ait commencé :
```
    waiting: {}
```
**running**, estado lorsque l'opération est en cours :
```
    running: {
    status: string;
    startDate: Date;
    progression: number;
    };
```
**failed**, estado si l'opération a échoué :
```
    failed: {
    startDate: Date;
    stopDate: Date;
    reason: string;
    };
```
**completed**, estado si l'opération est terminée :
```
    completed: {
    startDate: Date;
    stopDate: Date;
    result: string;
    };
```

**Nota: l'Identifiant (UUIDv4) de la ressource créée est disponible dans le résultat de l'activité une fois celle-ci complétée.**

## Límites API

### ¿Por qué límites?

La consola Cloud Temple définit __des plafonds sur le volume de requêtes__ qu'un usuario puede adresser
à l'API sur una durée déterminée. L'instauration de ces plafonds de fréquence est una mesure courante dans la gestión des API, adoptée pour plusieurs motifs essentiels :

- **Prevenir abusos** : Ces limites contribuent à la sauvegarde de l'intégrité de l'API en prévenant los usos
abusifs ou maladroits susceptibles de compromettre son fonctionnement.
- **Asegurar la calidad de servicio** : En régulant l'acceso à l'API, nous veillons à una distribution équitable
des ressources, permettant ainsi à todos les utilisateurs de bénéficier d'une expérience stable et performante.

Prenons l'exemple d'un script mal conçu ou ineficaz qui tente des appels répétitifs à l'API,
risquant de saturar les ressources et de dégrader les performances. En établissant des seuils de requêtes,
nous prévenons ces situations et assurons le maintien d'__un service fluide et sans interruption__ pour l'ensemble de notre clientèle.

### ¿Cuáles son los límites de tasa para el API de la consola Cloud Temple?

Nous appliquons des restrictions quantitatives sur les interactions des utilisateurs avec la consola
pour chaque produit.

Les limites sont définies en __requêtes par secondes (r/s) et par IP source__. Au-delà du seuil limite, le système répondra
par un code d'erreur HTTP 429, signalant que la limite de requêtes autorisées a été dépassée.

Voici los límites définis :

| Producto               | Umbral límite |
|----------------------|--------------|
| Consola Cloud Temple | 60 r/s       |
| Identidad (IAM)      | 60 r/s       |
| IaaS - Cálculo       | 60 r/s       |
| IaaS - Almacenamiento| 20 r/s       |
| IaaS - Respaldo      | 60 r/s       |
| PaaS - S3            | 60 r/s       |
| PaaS - Openshift     | 60 r/s       |
| Red                  | 60 r/s       |
| Alojamiento          | 60 r/s       |

### ¿Cómo funcionan los límites de tasa?

Si el número de requêtes envoyées à un point d'API excède la limite autorisée, le point d'API réagira en retournant
__un code de réponse HTTP 429__. Ce code indique que l'utilisateur a dépassé le nombre de requêtes permises.
Cuando esto se produce, el punto de API también proporcionará un objeto JSON como respuesta,
el cual contendrá información detallada sobre la limitación appliquée :
```
    {
        "error": {
            "status": "429 Too Many Requests",
            "message": "Too Many Requests"
        }
    }
```
### ¿Cómo evitar realizar demasiadas solicitudes?

Il est recommandé de limiter le nombre d'appels d'API efectuados por votre automatización afin de rester en deçà
de la limite de taux fixée pour el terminal.

Esta situación survient souvent lorsque plusieurs requêtes son ejecutadas en paralelo,
à l'aide de plusieurs procesos ou threads.

Existen varias formas de mejorar la eficiencia de su automatización, en particulier mediante el uso de mecanismos
de __cache__ y implementando __un sistema de reintento con atenuación progresiva__. Esta metodología consiste
en realizar una breve pausa cuando se encuentra un error de límite de tasa, y luego volver a intentar la solicitud.
Si la solicitud falla nuevamente, la duración de la pausa se incrementa progresivamente hasta que la solicitud tenga éxito
o hasta que se alcance un número máximo de reintentos.

Este enfoque tiene muchos benefícios :

- __La atenuación progresiva__ garantiza que los primeros intentos se realicen rápidamente, mientras se prevén demoras más largas en caso de fallos repetidos.
- La adición de __una variación aleatoria__ a la pausa ayuda a evitar que todos los intentos se realicen simultáneamente.

Es importante señalar que __las solicitudes fallidas no afectan su límite de tasa__.
Sin embargo, reciclar continuamente una solicitud podría no ser una solución viable a largo plazo,
car ce comportement pourrait être modifié à l'avenir. Nous vous recommandons donc de ne pas dépendre exclusivement de ce mécanisme.

Las bibliotecas __[Backoff](https://pypi.org/project/backoff/)__ et __[Tenacity](https://pypi.org/project/tenacity/)__ en Python
son buenos puntos de partida para implementar estrategias de atenuación.

## Ciclo de vida de un endpoint API

Les informations d'évolution des endpoint de l'API est disponible dans les notes de mises à jour :

![](images/shiva_api_004.jpg)

Vous trouverez la liste des endpoints qui sont dépréciés actividad par actividad.

Par ailleurs, les endpoints qui sont dépréciés apparaitrons de telle manière sur nos API :
__~~this/is/an/endpoint~~__ ainsi qu'une fecha de suppressión définitive en description.