---
title: Using the Python SDK (Boto3)
---

Boto3 is the AWS software development kit (SDK) for Python. It enables you to create, configure, and manage S3-compatible services, such as Cloud Temple object storage, directly from your Python applications.

## Installation

The library installation is straightforward using pip, the Python package manager:

```bash
pip install boto3
```

## Boto3 Client Configuration

To interact with the service, you must initialize a Boto3 client by providing your credentials and the specific endpoint for Cloud Temple.

```python
import boto3
from botocore.config import Config

# Your credentials
access_key = 'YOUR_ACCESS_KEY'
secret_key = 'YOUR_SECRET_KEY'
endpoint_url = 'https://YOUR_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'fr1'

# Bucket name for examples
bucket_name = 'mon-bucket-test'
```

:::info Region
The region to use for Cloud Temple object storage is **`fr1`**. Make sure to properly set this value in the `region_name` parameter.
:::

### Signature specifics (SigV2 / SigV4)

Cloud Temple Object Storage, based on **Dell ECS**, supports two versions of AWS signing:

- **SigV4** (`signature_version='s3v4'`): recommended for **metadata** operations (LIST, HEAD)
- **SigV2** (`signature_version='s3'`): recommended for **data** operations (PUT, GET, DELETE)

:::caution Recommended hybrid approach
For optimal compatibility, it is recommended to use **two Boto3 clients** with different signing configurations depending on the operation type. This avoids `XAmzContentSHA256Mismatch` errors that can occur with SigV4 during write operations.
:::

```python
import boto3
from botocore.config import Config

# Client SigV2 for Data Operations (PUT/GET/DELETE)
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

# Client SigV4 for Metadata Operations (HEAD/LIST)
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

:::tip Simplified Configuration
If you want to use a single client, prefer **SigV2** (`signature_version='s3'`) with path-style addressing, which works for most operations:

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

## 1. List files in an S3 bucket

To list all objects in a bucket, you can use a `paginator`. This is the most robust method for traversing a large number of objects without risking API response limits.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialize S3 client (SigV4 recommended for LIST)
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

## 2. Upload an object (Upload)

The `put_object` method allows you to upload data to a bucket. It is particularly useful when the data is generated or manipulated in memory.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# S3 Configuration (SigV2 recommended for PUT)
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

# Convert to JSON string then to bytes
json_str = json.dumps(json_file, indent=2)
body_bytes = json_str.encode("utf-8")

result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json"
)
print(f"Upload successful : {result['ResponseMetadata']['HTTPStatusCode']}")
```

### Define permissions (ACL) during upload

You can specify access permissions (ACL) directly when calling `put_object`:

```python
result = s3.put_object(
    Bucket=bucket_name,
    Key=key,
    Body=body_bytes,
    ContentType="application/json",
    ACL="public-read"  # Make the object publicly readable
)
```

## 3. Read an object (Download)

To retrieve the content of an object, use the `get_object` method. It returns an object of type `StreamingBody` that you can read to obtain the raw data.

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

## 4. Delete an object

The `delete_object` method allows you to permanently delete an object from a bucket.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialize the S3 client (SigV2 recommended for DELETE)
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
print(f"Deletion: {result['ResponseMetadata']['HTTPStatusCode']}")
```

## 5. Make an object public (Read All)

If an object already exists, you can modify its permissions to make it publicly readable using the `put_object_acl` method.

:::danger Attention
Making an object public means that anyone with the URL can access it. Use this option with caution and in accordance with your security policy.
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
print("Public URL:", public_url)
```

## Troubleshooting

### Error `XAmzContentSHA256Mismatch`

If you encounter this error during `PUT` operations:

```
An error occurred (XAmzContentSHA256Mismatch) when calling the PutObject operation
```

**Cause**: The Cloud Temple object storage infrastructure (Dell ECS) may have compatibility issues with the SHA-256 hash calculation used by SigV4 for write operations.

**Solution**: Use SigV2 signature for data operations:

```python
config = Config(
    region_name='fr1',
    signature_version='s3',       # Use SigV2 instead of s3v4
    s3={'addressing_style': 'path'}
)
```

### Error `SignatureDoesNotMatch`

If you receive this error, check the following:

1. That your access keys (`access_key_id` and `secret_access_key`) are correct  
2. That the region is properly set to `fr1`  
3. That you are using the correct endpoint (format: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`)

### Bucket not found

Make sure to use **path-style addressing** (`s3={'addressing_style': 'path'}`) in the configuration. Virtual-hosted style will be supported in S2 2026.
