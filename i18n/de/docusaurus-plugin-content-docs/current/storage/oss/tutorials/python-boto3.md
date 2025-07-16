---
title: Boto3 verwenden
---

Boto3 ist das AWS-Software-Entwicklungspaket (SDK) für Python. Es ermöglicht Ihnen, AWS-Dienste zu erstellen, zu konfigurieren und zu verwalten, einschließlich kompatibler S3-Speicherdienste wie der von Cloud Temple, direkt aus Ihren Python-Anwendungen.

### Installation

Die Installation der Bibliothek erfolgt einfach über pip, den Python-Paket-Manager:

```bash
pip install boto3
```

### Konfiguration des Boto3-Clients

Um mit dem Dienst zu interagieren, müssen Sie zunächst einen Boto3-Client initialisieren, indem Sie Ihre Anmeldeinformationen und den spezifischen Endpunkt (Endpoint) von Cloud Temple bereitstellen. Hier ist ein Beispiel für eine Konfiguration:

```python
# Ihre Anmeldeinformationen
access_key = 'IHR_ZUGANGSSCHLÜSSEL'
secret_key = 'IHR_GEHEIMES_SCHLÜSSEL'
endpoint_url = 'https://IHR_NAMENSRAUM.s3.fr1.cloud-temple.com'
region = 'eu-west-1' # Standardwert, kann angepasst werden

# Name des Buckets für Beispiele
bucket_name = 'mon-bucket-test'
```

### 1. Dateien eines S3-Buckets auflisten

Um alle Objekte eines Buckets aufzulisten, können Sie einen `paginator` verwenden. Das ist die zuverlässigste Methode, um eine große Anzahl von Objekten durchzulaufen, ohne das Risiko einzugehen, die Antwortgrenzen der API zu überschreiten.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisierung des S3-Clients
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

### 2. Objekt hochladen (Upload)

Die Methode `put_object` ist eine flexible Methode, um Daten in einen Bucket hochzuladen. Sie ist besonders nützlich, wenn die Daten nicht direkt aus einer Datei stammen, sondern in Speicher generiert oder manipuliert werden, wie in diesem Beispiel, in dem ein JSON-Objekt hochgeladen wird.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# S3-Konfiguration
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

# Konvertierung in eine JSON-Zeichenkette und dann in Bytes
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

#### Berechtigungen (ACL) bei der Übertragung definieren

Sie können die Zugriffsberechtigungen (ACL) direkt beim Aufruf von `put_object` angeben, um beispielsweise ein Objekt sofort öffentlich lesbar zu machen.

```python
put_object_result = s3.put_object(
        Bucket=bucket_name,
        Key=key,
        Body=body_bytes,
        ContentType="application/json",
        ACL="public-read"  # Objekt öffentlich lesbar machen
    )
```

### 3. Objekt lesen (Download)

Um den Inhalt eines Objekts zu erhalten, verwenden Sie die Methode `get_object`. Sie gibt ein Objekt des Typs `StreamingBody` zurück, das Sie dann lesen können, um die rohen Daten in Bytes zu erhalten.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialisierung des S3-Clients
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

### 4. Objekt löschen

Die Methode `delete_object` ermöglicht das dauerhafte Löschen eines Objekts aus einem Bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Client S3 initialisieren
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

### 5. Objekt öffentlich machen (Alle lesen)

Wenn ein Objekt bereits existiert, können Sie dessen Berechtigungen ändern, um es öffentlich lesbar zu machen, indem Sie die Methode `put_object_acl` verwenden.

**Achtung:** Ein Objekt öffentlich zu machen bedeutet, dass jeder mit der URL darauf zugreifen kann. Nutzen Sie diese Option mit Vorsicht.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import os
from botocore.config import Config

# S3-Konfiguration
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
print("Öffentliche URL:", public_url)
