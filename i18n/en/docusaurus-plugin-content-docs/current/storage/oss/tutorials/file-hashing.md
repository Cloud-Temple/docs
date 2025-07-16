---
title: Add a File's HASH (Checksum)
---

The Object Storage service of Cloud Temple supports file integrity verification via metadata (checksums). Some clients, such as `mc`, can automatically calculate and attach this hash, while for others, it must be specified manually.

### 1. Automatic MD5 Calculation with `mc`

The MinIO client (`mc`) can compute an MD5 hash on the fly and attach it to the object during upload. The hash is then visible in the `ETag` field of the object's metadata.

```bash
```

# Local MD5 calculation for verification
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# File Upload with MD5 Calculation
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Checking object metadata
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Date      : 2024-06-08 10:21:31 CEST
Size      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Type      : file
Encryption: SSE-S3
Metadata  :
    Content-Type: text/plain
```
The `ETag` corresponds to the MD5 hash of the local file.

### 2. Manual addition of a SHA-256 hash

You can also manually add a hash (e.g., SHA-256) as an S3 attribute during upload.

```bash
```

# Local SHA-256 Calculation
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# File upload by passing the hash as an attribute
❯ mc cp test.txt cloudtemple-fr1/demo-app/ --attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
...test.txt: 18 B / 18 B [================] 100.00% 141 B/s 0s

# Metadata Verification
❯ mc stat cloudtemple-fr1/demo-app/test.txt
Name      : test.txt
Date      : 2024-06-08 10:41:17 CEST
Size      : 18 B
ETag      : 8b34b2754802a46e3475998dfcf76f83
Type      : file
Encryption: SSE-S3
Metadata  :
    X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682
    Content-Type              : text/plain
```
The SHA-256 hash is now present in the object's custom metadata.