---
title: Usare il SDK Python (Boto3)
---

Boto3 è il kit di sviluppo software (SDK) AWS per Python. Ti permette di creare, configurare e gestire i servizi compatibili con S3, come il storage oggetti Cloud Temple, direttamente dalle tue applicazioni Python.

## Installazione

L'installatione della libreria avviene semplicemente tramite pip, il gestore di pacchetti Python:

```bash
pip install boto3
```

## Configurazione del client Boto3

Per interagire con il servizio, è necessario inizializzare un client Boto3 fornendo le proprie credenziali e l'endpoint specifico per Cloud Temple.

```python
import boto3
from botocore.config import Config

# Le tue credenziali
access_key = 'LA_TUA_ACCESS_KEY'
secret_key = 'LA_TUA_SECRET_KEY'
endpoint_url = 'https://IL_TUO_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'fr1'

# Nome del bucket per gli esempi
bucket_name = 'il-mio-bucket-test'
```

:::info Regione
La regione da utilizzare per l'archiviazione oggetti Cloud Temple è **`fr1`**. Assicurati di impostare correttamente questo valore nel parametro `region_name`.
:::

### Specificità della firma (SigV2 / SigV4)

L'archiviazione oggetti Cloud Temple, basata su **Dell ECS**, supporta due versioni della firma AWS:

- **SigV4** (`signature_version='s3v4'`): raccomandato per le operazioni di **metadati** (LIST, HEAD)
- **SigV2** (`signature_version='s3'`): raccomandato per le operazioni di **dati** (PUT, GET, DELETE)

:::caution Approccio ibrido raccomandato
Per una compatibilità ottimale, si raccomanda di utilizzare **due client Boto3** con configurazioni di firma diverse in base al tipo di operazione. Ciò evita gli errori `XAmzContentSHA256Mismatch` che possono verificarsi con SigV4 durante le operazioni di scrittura.
:::

```python
import boto3
from botocore.config import Config

# Client SigV2 per operazioni sui dati (PUT/GET/DELETE)
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

# Client SigV4 per operazioni metadati (HEAD/LIST)
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

:::tip Configurazione semplificata
Se desideri utilizzare un solo client, preferisci **SigV2** (`signature_version='s3'`) con l'indirizzamento in stile path, che funziona per la maggior parte delle operazioni:

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

## 1. Elencare i file di un bucket S3

Per elencare tutti gli oggetti di un bucket, è possibile utilizzare un `paginator`. Questa è il metodo più robusto per scorrere un gran numero di oggetti senza rischiare di superare i limiti di risposta dell'API.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inizializzazione del client S3 (SigV4 consigliato per LIST)
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
        print(f"{obj['Key']} - {obj['Size']} byte")
```

## 2. Caricare un oggetto (Upload)

Il metodo `put_object` permette di caricare dati in un bucket. È particolarmente utile quando i dati vengono generati o manipolati in memoria.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# Configurazione S3 (SigV2 consigliato per PUT)
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
    "nome": "Dupont",
    "cognome": "Claire",
    "email": "claire.dupont@example.com",
    "attivo": True,
    "data_creazione": "2024-10-15T08:30:00Z"
}

key = "users/dupont_claire.json"

# Converti in stringa JSON e poi in byte
json_str = json.dumps(json_file, indent=2)
body_bytes = json_str.encode("utf-8")

result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json"
)
print(f"Upload riuscito : {result['ResponseMetadata']['HTTPStatusCode']}")
```

### Definire i permessi (ACL) durante l'upload

È possibile specificare i permessi di accesso (ACL) direttamente durante la chiamata a `put_object`:

```python
result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json",
    ACL="public-read"  # Rende l'oggetto leggibile pubblicamente
)
```

## 3. Leggere un oggetto (Download)

Per recuperare il contenuto di un oggetto, utilizza il metodo `get_object`. Esso restituisce un oggetto di tipo `StreamingBody` che puoi leggere per ottenere i dati grezzi.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inizializzazione del client S3 (SigV2 consigliato per GET)
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

## 4. Eliminare un oggetto

Il metodo `delete_object` consente di eliminare definitivamente un oggetto da un bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inizializzare il client S3 (SigV2 consigliato per DELETE)
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
print(f"Eliminazione: {result['ResponseMetadata']['HTTPStatusCode']}")
```

## 5. Rendere un oggetto pubblico (Read All)

Se un oggetto esiste già, puoi modificare i suoi permessi per renderlo accessibile in lettura da chiunque utilizzando il metodo `put_object_acl`.

:::danger Attenzione
Rendere un oggetto pubblico significa che chiunque disponga dell'URL potrà accedervi. Utilizza questa opzione con cautela e in conformità con la tua politica di sicurezza.
:::

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Configurazione S3
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
print("URL pubblica :", public_url)
```

## Risoluzione dei problemi

### Errore `XAmzContentSHA256Mismatch`

Se si verifica questo errore durante operazioni `PUT`:

```
An error occurred (XAmzContentSHA256Mismatch) when calling the PutObject operation
```

**Causa**: L'infrastruttura di archiviazione oggetti Cloud Temple (Dell ECS) può presentare incompatibilità con il calcolo dell'hash SHA-256 utilizzato da SigV4 per le operazioni di scrittura.

**Soluzione**: Utilizzare la firma SigV2 per le operazioni sui dati:

```python
config = Config(
    region_name='fr1',
    signature_version='s3',       # Utilizzare SigV2 invece di s3v4
    s3={'addressing_style': 'path'}
)
```

### Errore `SignatureDoesNotMatch`

Se ricevi questo errore, verifica:

1. Che le tue chiavi di accesso (`access_key_id` e `secret_access_key`) siano corrette
2. Che la regione sia correttamente impostata su `fr1`
3. Che tu stia utilizzando il giusto endpoint (formato: `https://IL_TUO_NAMESPACE.s3.fr1.cloud-temple.com`)

### Il bucket non trovato

Assicurati di utilizzare lo **stile di indirizzamento per percorso** (`s3={'addressing_style': 'path'}`) nella configurazione. Lo stile di indirizzamento con host virtuale sarà supportato a partire dal S2 2026.
