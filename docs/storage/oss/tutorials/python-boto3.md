---
title: Utiliser le SDK Python (Boto3)
---

Boto3 est le kit de développement logiciel (SDK) AWS pour Python. Il vous permet de créer, configurer et gérer les services compatibles S3, comme le stockage objet Cloud Temple, directement depuis vos applications Python.

## Installation

L'installation de la bibliothèque se fait simplement via pip, le gestionnaire de paquets Python :

```bash
pip install boto3
```

## Configuration du client Boto3

Pour interagir avec le service, vous devez initialiser un client Boto3 en lui fournissant vos informations d'identification et le point de terminaison (endpoint) spécifique à Cloud Temple.

```python
import boto3
from botocore.config import Config

# Vos informations d'identification
access_key = 'VOTRE_CLE_ACCES'
secret_key = 'VOTRE_CLE_SECRETE'
endpoint_url = 'https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'fr1'

# Nom du bucket pour les exemples
bucket_name = 'mon-bucket-test'
```

:::info Région
La région à utiliser pour le stockage objet Cloud Temple est **`fr1`**. Assurez-vous de bien configurer cette valeur dans le paramètre `region_name`.
:::

### Spécificités de signature (SigV2 / SigV4)

Le stockage objet Cloud Temple, basé sur **Dell ECS**, supporte deux versions de signature AWS :

- **SigV4** (`signature_version='s3v4'`) : recommandé pour les opérations de **métadonnées** (LIST, HEAD)
- **SigV2** (`signature_version='s3'`) : recommandé pour les opérations de **données** (PUT, GET, DELETE)

:::caution Approche hybride recommandée
Pour une compatibilité optimale, il est recommandé d'utiliser **deux clients Boto3** avec des configurations de signature différentes selon le type d'opération. Cela évite les erreurs `XAmzContentSHA256Mismatch` qui peuvent survenir avec SigV4 lors des opérations d'écriture.
:::

```python
import boto3
from botocore.config import Config

# Client SigV2 pour opérations sur données (PUT/GET/DELETE)
config_v2 = Config(
    region_name='fr1',
    signature_version='s3',       # SigV2 (legacy)
    s3={'addressing_style': 'path'},
    retries={'max_attempts': 3, 'mode': 'adaptive'}
)

client_data = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=config_v2
)

# Client SigV4 pour opérations métadonnées (HEAD/LIST)
config_v4 = Config(
    region_name='fr1',
    signature_version='s3v4',
    s3={'addressing_style': 'path', 'payload_signing_enabled': False},
    retries={'max_attempts': 3, 'mode': 'adaptive'}
)

client_metadata = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=config_v4
)
```

:::tip Configuration simplifiée
Si vous souhaitez utiliser un seul client, privilégiez **SigV2** (`signature_version='s3'`) avec le path-style addressing, qui fonctionne pour la majorité des opérations :

```python
config = Config(
    region_name='fr1',
    signature_version='s3',
    s3={'addressing_style': 'path'}
)

s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=config
)
```
:::

## 1. Lister les fichiers d'un bucket S3

Pour lister tous les objets d'un bucket, vous pouvez utiliser un `paginator`. C'est la méthode la plus robuste pour parcourir un grand nombre d'objets sans risquer de dépasser les limites de réponse de l'API.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisation du client S3 (SigV4 recommandé pour LIST)
s3_client = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=Config(
        region_name='fr1',
        signature_version='s3v4',
        s3={'addressing_style': 'path'}
    )
)

paginator = s3_client.get_paginator('list_objects_v2')
operation_parameters = {'Bucket': bucket_name}

for page in paginator.paginate(**operation_parameters):
    for obj in page.get('Contents', []):
        print(f"{obj['Key']} - {obj['Size']} octets")
```

## 2. Téléverser un objet (Upload)

La méthode `put_object` permet de téléverser des données vers un bucket. Elle est particulièrement utile lorsque les données sont générées ou manipulées en mémoire.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# Configuration S3 (SigV2 recommandé pour PUT)
s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=Config(
        region_name='fr1',
        signature_version='s3',
        s3={'addressing_style': 'path'}
    )
)

json_file = {
    "id": 12345,
    "nom": "Dupont",
    "prenom": "Claire",
    "email": "claire.dupont@example.com",
    "actif": True,
    "date_creation": "2024-10-15T08:30:00Z"
}

key = "users/dupont_claire.json"

# Conversion en chaîne JSON puis en bytes
json_str = json.dumps(json_file, indent=2)
body_bytes = json_str.encode("utf-8")

result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json"
)
print(f"Upload réussi : {result['ResponseMetadata']['HTTPStatusCode']}")
```

### Définir les permissions (ACL) lors du téléversement

Vous pouvez spécifier les permissions d'accès (ACL) directement lors de l'appel à `put_object` :

```python
result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json",
    ACL="public-read"  # Rendre l'objet lisible publiquement
)
```

## 3. Lire un objet (Download)

Pour récupérer le contenu d'un objet, utilisez la méthode `get_object`. Elle retourne un objet de type `StreamingBody` que vous pouvez lire pour obtenir les données brutes.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisation du client S3 (SigV2 recommandé pour GET)
s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=Config(
        region_name='fr1',
        signature_version='s3',
        s3={'addressing_style': 'path'}
    )
)

response = s3.get_object(Bucket=bucket_name, Key='users/dupont_claire.json')
content = response['Body'].read().decode('utf-8')
print(content)
```

## 4. Supprimer un objet

La méthode `delete_object` permet de supprimer définitivement un objet d'un bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialiser le client S3 (SigV2 recommandé pour DELETE)
s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=Config(
        region_name='fr1',
        signature_version='s3',
        s3={'addressing_style': 'path'}
    )
)

key = "users/dupont_claire.json"
result = s3.delete_object(Bucket=bucket_name, Key=key)
print(f"Suppression : {result['ResponseMetadata']['HTTPStatusCode']}")
```

## 5. Rendre un objet public (Read All)

Si un objet existe déjà, vous pouvez modifier ses permissions pour le rendre publiquement lisible en utilisant la méthode `put_object_acl`.

:::danger Attention
Rendre un objet public signifie que n'importe qui disposant de l'URL peut y accéder. Utilisez cette option avec prudence et conformément à votre politique de sécurité.
:::

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Configuration S3
s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    config=Config(
        region_name='fr1',
        signature_version='s3',
        s3={'addressing_style': 'path'}
    )
)

key = "users/dupont_claire.json"
s3.put_object_acl(Bucket=bucket_name, Key=key, ACL="public-read")

public_url = f"{endpoint_url.rstrip('/')}/{bucket_name}/{key}"
print("URL publique :", public_url)
```

## Dépannage

### Erreur `XAmzContentSHA256Mismatch`

Si vous rencontrez cette erreur lors d'opérations `PUT` :

```
An error occurred (XAmzContentSHA256Mismatch) when calling the PutObject operation
```

**Cause** : L'infrastructure de stockage objet Cloud Temple (Dell ECS) peut rencontrer des incompatibilités avec le calcul de hash SHA-256 utilisé par SigV4 pour les opérations d'écriture.

**Solution** : Passez en signature SigV2 pour les opérations de données :

```python
config = Config(
    region_name='fr1',
    signature_version='s3',       # Utiliser SigV2 au lieu de s3v4
    s3={'addressing_style': 'path'}
)
```

### Erreur `SignatureDoesNotMatch`

Si vous obtenez cette erreur, vérifiez :

1. Que vos clés d'accès (`access_key_id` et `secret_access_key`) sont correctes
2. Que la région est bien configurée sur `fr1`
3. Que vous utilisez le bon endpoint (format : `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`)

### Le bucket n'est pas trouvé

Assurez-vous d'utiliser le **path-style addressing** (`s3={'addressing_style': 'path'}`) dans la configuration. Le virtual-hosted style sera supporté S2 2026.
