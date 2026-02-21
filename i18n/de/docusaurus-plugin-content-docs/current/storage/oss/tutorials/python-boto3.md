---
title: Verwendung des Python SDK (Boto3)
---

Boto3 ist das AWS Software Development Kit (SDK) für Python. Es ermöglicht Ihnen das Erstellen, Konfigurieren und Verwalten von S3-kompatiblen Diensten, wie dem Cloud Temple Objektspeicher, direkt aus Ihren Python-Anwendungen heraus.

## Installation

Die Installation der Bibliothek erfolgt einfach über pip, den Python-Paketmanager:

```bash
pip install boto3
```

## Boto3 Client-Konfiguration

Um mit dem Dienst zu interagieren, müssen Sie zunächst einen Boto3-Client initialisieren, indem Sie ihm Ihre Anmeldedaten und den spezifischen Cloud Temple Endpunkt bereitstellen.

```python
import boto3
from botocore.config import Config

# Ihre Anmeldedaten
access_key = 'IHR_ACCESS_KEY'
secret_key = 'IHR_SECRET_KEY'
endpoint_url = 'https://IHR_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'fr1'

# Name des Buckets für die Beispiele
bucket_name = 'mein-test-bucket'
```

:::info Region
Die für den Cloud Temple Objektspeicher zu verwendende Region ist **`fr1`**. Stellen Sie sicher, dass Sie diesen Wert im Parameter `region_name` korrekt konfigurieren.
:::

### Signaturbesonderheiten (SigV2 / SigV4)

Der auf **Dell ECS** basierende Cloud Temple Objektspeicher unterstützt zwei Versionen der AWS-Signatur:

- **SigV4** (`signature_version='s3v4'`): empfohlen für **Metadaten-Operationen** (LIST, HEAD)
- **SigV2** (`signature_version='s3'`): empfohlen für **Datenoperationen** (PUT, GET, DELETE)

:::caution Empfohlener hybrider Ansatz
Für eine optimale Kompatibilität wird empfohlen, **zwei Boto3-Clients** mit unterschiedlichen Signaturkonfigurationen je nach Operationstyp zu verwenden. Dies vermeidet `XAmzContentSHA256Mismatch`-Fehler, die bei SigV4 während Schreibvorgängen auftreten können.
:::

```python
import boto3
from botocore.config import Config

# SigV2-Client für Datenoperationen (PUT/GET/DELETE)
config_v2 = Config(
    region_name='fr1',
    signature_version='s3',       # SigV2 (Legacy)
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

# SigV4-Client für Metadaten-Operationen (HEAD/LIST)
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

:::tip Vereinfachte Konfiguration
Wenn Sie nur einen einzigen Client verwenden möchten, bevorzugen Sie **SigV2** (`signature_version='s3'`) mit Path-Style Addressing, was für die meisten Operationen funktioniert:

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

## 1. Dateien in einem S3-Bucket auflisten

Um alle Objekte eines Buckets aufzulisten, können Sie einen `paginator` verwenden. Dies ist die robusteste Methode, um eine große Anzahl von Objekten zu durchlaufen, ohne API-Antwortlimits zu riskieren.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisierung des S3-Clients (SigV4 für LIST empfohlen)
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
        print(f"{obj['Key']} - {obj['Size']} Bytes")
```

## 2. Ein Objekt hochladen (Upload)

Die Methode `put_object` ermöglicht das Hochladen von Daten in einen Bucket. Sie ist besonders nützlich, wenn die Daten im Speicher generiert oder verarbeitet werden.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# S3-Konfiguration (SigV2 für PUT empfohlen)
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

# Konvertierung in JSON-String, dann in Bytes
json_str = json.dumps(json_file, indent=2)
body_bytes = json_str.encode("utf-8")

result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json"
)
print(f"Upload erfolgreich: {result['ResponseMetadata']['HTTPStatusCode']}")
```

### Berechtigungen (ACL) beim Hochladen festlegen

Sie können Zugriffsberechtigungen (ACL) direkt beim Aufruf von `put_object` angeben:

```python
result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json",
    ACL="public-read"  # Das Objekt öffentlich lesbar machen
)
```

## 3. Ein Objekt lesen (Download)

Um den Inhalt eines Objekts abzurufen, verwenden Sie die Methode `get_object`. Sie gibt ein Objekt vom Typ `StreamingBody` zurück, das Sie lesen können, um die Rohdaten zu erhalten.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisierung des S3-Clients (SigV2 für GET empfohlen)
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

## 4. Ein Objekt löschen

Die Methode `delete_object` ermöglicht das dauerhafte Löschen eines Objekts aus einem Bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisierung des S3-Clients (SigV2 für DELETE empfohlen)
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
print(f"Löschung: {result['ResponseMetadata']['HTTPStatusCode']}")
```

## 5. Ein Objekt öffentlich machen (Read All)

Wenn ein Objekt bereits existiert, können Sie seine Berechtigungen ändern, um es mit der Methode `put_object_acl` öffentlich lesbar zu machen.

:::danger Achtung
Ein Objekt öffentlich zu machen bedeutet, dass jeder mit der URL darauf zugreifen kann. Verwenden Sie diese Option mit Vorsicht und gemäß Ihrer Sicherheitsrichtlinie.
:::

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# S3-Konfiguration
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
print("Öffentliche URL:", public_url)
```

## Fehlerbehebung

### Fehler `XAmzContentSHA256Mismatch`

Wenn dieser Fehler bei `PUT`-Operationen auftritt:

```
An error occurred (XAmzContentSHA256Mismatch) when calling the PutObject operation
```

**Ursache**: Die Cloud Temple Objektspeicher-Infrastruktur (Dell ECS) kann Inkompatibilitäten mit der von SigV4 verwendeten SHA-256-Hash-Berechnung bei Schreibvorgängen aufweisen.

**Lösung**: Wechseln Sie für Datenoperationen zur SigV2-Signatur:

```python
config = Config(
    region_name='fr1',
    signature_version='s3',       # SigV2 anstelle von s3v4 verwenden
    s3={'addressing_style': 'path'}
)
```

### Fehler `SignatureDoesNotMatch`

Wenn dieser Fehler auftritt, prüfen Sie Folgendes:

1. Dass Ihre Zugriffsschlüssel (`access_key_id` und `secret_access_key`) korrekt sind
2. Dass die Region ordnungsgemäß auf `fr1` eingestellt ist
3. Dass Sie den richtigen Endpunkt verwenden (Format: `https://IHR_NAMESPACE.s3.fr1.cloud-temple.com`)

### Bucket nicht gefunden

Stellen Sie sicher, dass Sie **Path-Style Addressing** (`s3={'addressing_style': 'path'}`) in der Konfiguration verwenden. Virtual-Hosted Style wird erst ab Q2 2026 unterstützt.
