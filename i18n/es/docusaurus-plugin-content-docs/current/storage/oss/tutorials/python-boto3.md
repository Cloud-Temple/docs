---
title: Usar el SDK de Python (Boto3)
---

Boto3 es el kit de desarrollo (SDK) de AWS para Python. Le permite crear, configurar y gestionar los servicios de AWS, incluidos los servicios de almacenamiento compatibles con S3 como el de Cloud Temple, directamente desde sus aplicaciones Python.

### Instalación

La instalación de la biblioteca se realiza simplemente mediante pip, el gestor de paquetes de Python:

```bash
pip install boto3
```

### Configuración del cliente Boto3

Para interactuar con el servicio, primero debe inicializar un cliente Boto3 proporcionándole sus credenciales y el punto de terminación (endpoint) específico de Cloud Temple. Aquí hay un ejemplo de configuración:

```python
# Tus credenciales
access_key = 'VOTRE_CLE_ACCES'
secret_key = 'VOTRE_CLE_SECRETE'
endpoint_url = 'https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'eu-west-1' # Valor predeterminado, puede adaptarse

# Nombre del bucket para los ejemplos
bucket_name = 'mon-bucket-test'
```

### 1. Listar los archivos de un bucket S3

Para listar todos los objetos de un bucket, puede usar un `paginator`. Es el método más robusto para recorrer un gran número de objetos sin correr el riesgo de exceder los límites de respuesta de la API.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inicialización del cliente S3
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

### 2. Subir un objeto (Upload)

El método `put_object` es una forma flexible de subir datos a un bucket. Es especialmente útil cuando los datos no provienen directamente de un archivo, sino que se generan o manipulan en memoria, como en este ejemplo donde un objeto JSON se sube.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# Configuración S3
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

# Conversión a cadena JSON y luego a bytes
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

#### Definir los permisos (ACL) durante la carga

Puede especificar los permisos de acceso (ACL) directamente al llamar a `put_object` para, por ejemplo, hacer que un objeto sea legible públicamente de inmediato.

```python
put_object_result = s3.put_object(
        Bucket=bucket_name,
        Key=key,
        Body=body_bytes,
        ContentType="application/json",
        ACL="public-read"  # Hacer que el objeto sea legible públicamente
    )
```

### 3. Leer un objeto (Descargar)

Para recuperar el contenido de un objeto, utilice el método `get_object`. Devuelve un objeto de tipo `StreamingBody` que luego puede leer para obtener los datos crudos en bytes.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inicialización del cliente S3
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

### 4. Eliminar un objeto

El método `delete_object` permite eliminar definitivamente un objeto de un bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Inicializar el cliente S3
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
print(f"resultado de la acción : {delete_object_result}")
```

### 5. Hacer un objeto público (Leer todo)

Si un objeto ya existe, puedes modificar sus permisos para hacerlo públicamente legible utilizando el método `put_object_acl`.

**Atención:** Hacer un objeto público significa que cualquiera que tenga la URL puede acceder a él. Use esta opción con precaución.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import os
from botocore.config import Config

# Configuración S3
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
print("URL pública :", public_url)
