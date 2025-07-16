---
title: Utilizzare il SDK Python (Boto3)
---

Boto3 è il kit di sviluppo software (SDK) AWS per Python. Vi consente di creare, configurare e gestire i servizi AWS, inclusi i servizi di archiviazione compatibili con S3 come quello di Cloud Temple, direttamente dalle vostre applicazioni Python.

### Installazione

L'installazione della libreria avviene semplicemente tramite pip, il gestore di pacchetti Python :

```bash
pip install boto3
```

### Configurazione del client Boto3

Per interagire con il servizio, è necessario inizializzare prima un client Boto3 fornendo le proprie credenziali e l'endpoint specifico per Cloud Temple. Ecco un esempio di configurazione :

```python
```

# Le tue credenziali
access_key = 'LA_TUA_CLEF_ACCESSO'
secret_key = 'LA_TUA_CLEF_SEGRETA'
endpoint_url = 'https://IL_TUO_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'eu-west-1' # Valore predefinito, può essere adattato

# Nome del bucket per gli esempi
bucket_name = 'mon-bucket-test'

### 1. Elencare i file di un bucket S3

Per elencare tutti gli oggetti di un bucket, è possibile utilizzare un `paginator`. È il metodo più robusto per esplorare un gran numero di oggetti senza rischiare di superare i limiti di risposta dell'API.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inizializzazione del client S3
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

### 2. Caricare un oggetto (Upload)

La méthode `put_object` è un modo flessibile per caricare dati in un bucket. È particolarmente utile quando i dati non provengono direttamente da un file, ma vengono generati o manipolati in memoria, come in questo esempio in cui un oggetto JSON viene caricato.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# Configurazione S3
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

# Conversione in stringa JSON poi in byte
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

#### Definire le autorizzazioni (ACL) durante l'upload

È possibile specificare le autorizzazioni di accesso (ACL) direttamente durante la chiamata a `put_object` per rendere, ad esempio, un oggetto immediatamente leggibile pubblicamente.

```python
put_object_result = s3.put_object(
        Bucket=bucket_name,
        Key=key,
        Body=body_bytes,
        ContentType="application/json",
        ACL="public-read"  # Rendere l'oggetto leggibile pubblicamente
    )
```

### 3. Leggere un oggetto (Download)

Per recuperare il contenuto di un oggetto, utilizza il metodo `get_object`. Esso restituisce un oggetto di tipo `StreamingBody` che puoi quindi leggere per ottenere i dati grezzi in byte.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inizializzazione del client S3
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

### 4. Eliminare un oggetto

Il metodo `delete_object` consente di eliminare definitivamente un oggetto da un bucket.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inizializzare il client S3
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

### 5. Rendere un oggetto pubblico (Read All)

Se un oggetto esiste già, è possibile modificare le sue autorizzazioni per renderlo accessibile pubblicamente utilizzando il metodo `put_object_acl`.

**Attenzione:** Rendere un oggetto pubblico significa che chiunque disponga dell'URL può accedervi. Utilizzare questa opzione con prudenza.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
import os
from botocore.config import Config

# Configurazione S3
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