---
title: Usar el SDK de Python (Boto3)
---

Boto3 es el kit de desarrollo de software (SDK) de AWS para Python. Le permite crear, configurar y gestionar servicios compatibles con S3, como el almacenamiento objeto Cloud Temple, directamente desde sus aplicaciones de Python.

## Instalación

La instalación de la biblioteca se realiza de forma sencilla mediante pip, el gestor de paquetes de Python:

```bash
pip install boto3
```

## Configuración del cliente Boto3

Para interactuar con el servicio, debe inicializar un cliente Boto3 proporcionándole sus credenciales y el punto de terminación (endpoint) específico de Cloud Temple.

```python
import boto3
from botocore.config import Config

# Sus credenciales
access_key = 'SU_CLAVE_DE_ACCESO'
secret_key = 'SU_CLAVE_SECRETA'
endpoint_url = 'https://SU_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'fr1'

# Nombre del bucket para los ejemplos
bucket_name = 'mi-bucket-test'
```

:::info Región
La región que debe utilizarse para el almacenamiento objeto Cloud Temple es **`fr1`**. Asegúrese de configurar correctamente este valor en el parámetro `region_name`.
:::

### Especificidades de firma (SigV2 / SigV4)

El almacenamiento objeto Cloud Temple, basado en **Dell ECS**, admite dos versiones de firma de AWS:

- **SigV4** (`signature_version='s3v4'`): recomendado para operaciones de **metadatos** (LIST, HEAD)
- **SigV2** (`signature_version='s3'`): recomendado para operaciones de **datos** (PUT, GET, DELETE)

:::caution Enfoque híbrido recomendado
Para una compatibilidad óptima, se recomienda utilizar **dos clientes Boto3** con configuraciones de firma diferentes según el tipo de operación. Esto evita errores `XAmzContentSHA256Mismatch` que pueden ocurrir con SigV4 durante operaciones de escritura.
:::

```python
import boto3
from botocore.config import Config

# Cliente SigV2 para operaciones sobre datos (PUT/GET/DELETE)
config_v2 = Config(
    region_name='fr1',
    signature_version='s3',       # SigV2 (obsoleto)
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

# Cliente SigV4 para operaciones de metadatos (HEAD/LIST)
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

:::tip Configuración simplificada
Si desea utilizar un solo cliente, prefiera **SigV2** (`signature_version='s3'`) con el direccionamiento estilo path, que funciona para la mayoría de las operaciones:

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

## 1. Listar los archivos de un bucket S3

Para listar todos los objetos de un bucket, puede utilizar un `paginator`. Este es el método más robusto para recorrer un gran número de objetos sin correr el riesgo de exceder los límites de respuesta de la API.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inicialización del cliente S3 (SigV4 recomendado para LIST)
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
        print(f"{obj['Key']} - {obj['Size']} bytes")
```

## 2. Subir un objeto (Upload)

El método `put_object` permite subir datos a un bucket. Es especialmente útil cuando los datos se generan o manipulan en memoria.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# Configuración S3 (Se recomienda SigV2 para PUT)
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

# Convertir a cadena JSON y luego a bytes
json_str = json.dumps(json_file, indent=2)
body_bytes = json_str.encode("utf-8")

result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json"
)
print(f"Subida exitosa: {result['ResponseMetadata']['HTTPStatusCode']}")
```

### Definir los permisos (ACL) durante la carga

Puede especificar los permisos de acceso (ACL) directamente durante la llamada a `put_object`:

```python
result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json",
    ACL="public-read"  # Hacer que el objeto sea legible públicamente
)
```

## 3. Leer un objeto (Descargar)

Para recuperar el contenido de un objeto, utilice el método `get_object`. Este devuelve un objeto del tipo `StreamingBody` que puede leerse para obtener los datos sin procesar.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inicialización del cliente S3 (SigV2 recomendado para GET)
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

## 4. Eliminar un objeto

El método `delete_object` permite eliminar permanentemente un objeto de un bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inicializar el cliente S3 (SigV2 recomendado para DELETE)
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
print(f"Eliminación: {result['ResponseMetadata']['HTTPStatusCode']}")
```

## 5. Hacer un objeto público (Leer todo)

Si un objeto ya existe, puede modificar sus permisos para que sea legible públicamente mediante el método `put_object_acl`.

:::danger Atención
Hacer público un objeto significa que cualquier persona con la URL puede acceder a él. Use esta opción con precaución y de acuerdo con su política de seguridad.
:::

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Configuración S3
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
print("URL pública :", public_url)
```

## Solución de problemas

### Error `XAmzContentSHA256Mismatch`

Si encuentra este error durante las operaciones `PUT`:

```
An error occurred (XAmzContentSHA256Mismatch) when calling the PutObject operation
```

**Causa**: La infraestructura de almacenamiento objeto de Cloud Temple (Dell ECS) puede experimentar incompatibilidades con el cálculo de hash SHA-256 utilizado por SigV4 para las operaciones de escritura.

**Solución**: Utilice la firma SigV2 para las operaciones de datos:

```python
config = Config(
    region_name='fr1',
    signature_version='s3',       # Usar SigV2 en lugar de s3v4
    s3={'addressing_style': 'path'}
)
```

### Error `SignatureDoesNotMatch`

Si recibe este error, compruebe lo siguiente:

1. Que sus claves de acceso (`access_key_id` y `secret_access_key`) sean correctas  
2. Que la región esté configurada correctamente en `fr1`  
3. Que esté utilizando el endpoint correcto (formato: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`)

### El bucket no se encuentra

Asegúrese de utilizar el **path-style addressing** (`s3={'addressing_style': 'path'}`) en la configuración. El estilo virtual-hosted será compatible a partir del segundo semestre de 2026.
