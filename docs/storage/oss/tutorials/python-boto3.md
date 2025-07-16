---
title: Utiliser le SDK Python (Boto3)
---

Boto3 est le kit de développement logiciel (SDK) AWS pour Python. Il vous permet de créer, configurer et gérer les services AWS, y compris les services de stockage compatibles S3 comme celui de Cloud Temple, directement depuis vos applications Python.

### Installation

L'installation de la bibliothèque se fait simplement via pip, le gestionnaire de paquets Python :

```bash
pip install boto3
```

### Configuration du client Boto3

Pour interagir avec le service, vous devez d'abord initialiser un client Boto3 en lui fournissant vos informations d'identification et le point de terminaison (endpoint) spécifique à Cloud Temple. Voici un exemple de configuration :

```python
# Vos informations d'identification
access_key = 'VOTRE_CLE_ACCES'
secret_key = 'VOTRE_CLE_SECRETE'
endpoint_url = 'https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'eu-west-1' # Valeur par défaut, peut être adaptée

# Nom du bucket pour les exemples
bucket_name = 'mon-bucket-test'
```

### 1. Lister les fichiers d'un bucket S3

Pour lister tous les objets d'un bucket, vous pouvez utiliser un `paginator`. C'est la méthode la plus robuste pour parcourir un grand nombre d'objets sans risquer de dépasser les limites de réponse de l'API.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisation du client S3
s3_client = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    region_name=region,
    config=Config(signature_version='s3v4')
)

paginator = s3_client.get_paginator('list_objects_v2')
operation_parameters = {'Bucket': bucket_name}
all_files = []

for page in paginator.paginate(**operation_parameters):
    for obj in page.get('Contents', []):
        print(obj['Key'])
```

### 2. Téléverser un objet (Upload)

La méthode `put_object` est une manière flexible de téléverser des données vers un bucket. Elle est particulièrement utile lorsque les données ne proviennent pas directement d'un fichier, mais sont générées ou manipulées en mémoire, comme dans cet exemple où un objet JSON est téléversé.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# Configuration S3
s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    region_name=region,
    config=Config(signature_version='s3')
)

json_file = {
    "id": 12345,
    "nom": "Dupont",
    "prenom": "Claire",
    "email": "claire.dupont@example.com",
    "actif": True,
    "date_creation": "2024-10-15T08:30:00Z"
}

key = f"users/dupond_claire.json"

# Conversion en chaîne JSON puis en bytes
json_str = json.dumps(json_file, indent=2)
body_bytes = json_str.encode("utf-8")

put_object_result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json"
)
print(put_object_result)
```

#### Définir les permissions (ACL) lors du téléversement

Vous pouvez spécifier les permissions d'accès (ACL) directement lors de l'appel à `put_object` pour, par exemple, rendre un objet immédiatement lisible publiquement.

```python
put_object_result = s3.put_object(
        Bucket=bucket_name,
        Key=key,
        Body=body_bytes,
        ContentType="application/json",
        ACL="public-read"  # Rendre l'objet lisible publiquement
    )
```

### 3. Lire un objet (Download)

Pour récupérer le contenu d'un objet, utilisez la méthode `get_object`. Elle retourne un objet de type `StreamingBody` que vous pouvez ensuite lire pour obtenir les données brutes en bytes.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisation du client S3
s3_client = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    region_name=region,
    config=Config(signature_version='s3v4')
)

response = s3_client.get_object(Bucket=bucket_name, Key='kb_data/agents/cisco-ucs-specialist.json')
content = response['Body'].read().decode('utf-8')
print(content)
```

### 4. Supprimer un objet

La méthode `delete_object` permet de supprimer définitivement un objet d'un bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialiser le client S3
s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    region_name=region,
    config=Config(signature_version='s3')
)

key = f"users/dupond_claire.json"
delete_object_result = s3.delete_object(Bucket=bucket_name, Key=key)
print(f"action result : {delete_object_result}")
``` 

### 5. Rendre un objet public (Read All)

Si un objet existe déjà, vous pouvez modifier ses permissions pour le rendre publiquement lisible en utilisant la méthode `put_object_acl`.

**Attention :** Rendre un objet public signifie que n'importe qui disposant de l'URL peut y accéder. Utilisez cette option avec prudence.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import os
from botocore.config import Config

# Configuration S3
s3 = boto3.client(
    's3',
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_key,
    endpoint_url=endpoint_url,
    region_name=region,
    config=Config(signature_version='s3')
)
key = f"users/dupond_claire.json"
put_object_acl_result = s3.put_object_acl(Bucket=bucket_name, Key=key, ACL="public-read")

public_url = f"{os.getenv('S3_ENDPOINT_URL').rstrip('/')}/{bucket_name}/{key}"
print("URL publique :", public_url)
```
