---
title: Using the Python SDK (Boto3)
---

Boto3 is the AWS Software Development Kit (SDK) for Python. It allows you to create, configure, and manage AWS services, including S3-compatible storage services such as that of Cloud Temple, directly from your Python applications.

### Installation

The installation of the library is done simply via pip, the Python package manager :

```bash
pip install boto3
```

### Boto3 Client Configuration

To interact with the service, you must first initialize a Boto3 client by providing your credentials and the endpoint specific to Cloud Temple. Here is an example configuration:

```python
```

# Your credentials
access_key = 'YOUR_ACCESS_KEY'
secret_key = 'YOUR_SECRET_KEY'
endpoint_url = 'https://YOUR_NAMESPACE.s3.fr1.cloud-temple.com'
region = 'eu-west-1' # Default value, can be adjusted

# Bucket name for examples
bucket_name = 'mon-bucket-test'

### 1. List the files of an S3 bucket

To list all objects in a bucket, you can use a `paginator`. This is the most robust method to browse a large number of objects without risking API response limits.

```python
#!/usr/bin/env python3
```

```python
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config
```

# Initializing the S3 client
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

### 2. Upload an object (Upload)

The `put_object` method is a flexible way to upload data to a bucket. It is particularly useful when the data does not come directly from a file, but is generated or manipulated in memory, such as in this example where a JSON object is uploaded.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
import json
from botocore.config import Config

# S3 Configuration
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
    "name": "Dupont",
    "first_name": "Claire",
    "email": "claire.dupont@example.com",
    "active": True,
    "creation_date": "2024-10-15T08:30:00Z"
}

key = f"users/dupond_claire.json"

# Convert JSON string to bytes
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

#### Define permissions (ACL) during uploading

You can specify access permissions (ACL) directly when calling `put_object` to, for example, make an object immediately publicly readable.

```python
put_object_result = s3.put_object(
        Bucket=bucket_name,
        Key=key,
        Body=body_bytes,
        ContentType="application/json",
        ACL="public-read"  # Make the object publicly readable
    )
```

### 3. Read an object (Download)

To retrieve the content of an object, use the `get_object` method. It returns an object of type `StreamingBody` which you can then read to obtain the raw data in bytes.

```python
#!/usr/bin/env python3
```

```python
# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config
```

# Initialization of the S3 client
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

### 4. Delete an object

The method `delete_object` allows you to permanently delete an object from a bucket.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
from botocore.config import Config

# Initialize the S3 client
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

### 5. Make an object public (Read All)

If an object already exists, you can modify its permissions to make it publicly readable using the `put_object_acl` method.

**Warning:** Making an object public means that anyone with the URL can access it. Use this option with caution.

```python
#!/usr/bin/env python3
```

# -*- coding: utf-8 -*-
import boto3
import os
from botocore.config import Config

# S3 Configuration
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