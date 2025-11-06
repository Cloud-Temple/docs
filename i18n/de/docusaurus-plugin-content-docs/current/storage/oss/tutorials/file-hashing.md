---
title: Add File HASH (Checksum)
---

The Cloud Temple Object Storage service supports file integrity verification via metadata (checksums). Some clients, such as `mc`, can automatically calculate and attach this hash, while for others, it must be specified manually.

### 1. Automatic calculation of MD5 with `mc`

The MinIO client (`mc`) can compute an MD5 hash on the fly and attach it to the object during upload. The hash is then visible in the `ETag` field of the object's metadata.

```bash


# Local MD5 calculation for verification
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# File upload with MD5 calculation
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Verification der Objekt-Metadaten
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
Der `ETag` entspricht tatsächlich dem MD5-Hash der lokalen Datei.

### 2. Manual addition of a SHA-256 hash

You can also manually add a hash (for example, SHA-256) as an S3 attribute during upload.

```bash
```

# Local calculation of SHA-256
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Upload file passing hash as attribute
❯ mc cp test.txt cloudtemple-fr1/demo-app/ --attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
...test.txt: 18 B / 18 B [================] 100.00% 141 B/s 0s

# Metadata verification
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

### 3. Resolve `XAmzContentSHA256Mismatch` Errors with AWS CLI or Terraform

#### Problemursache

Es können Fehler vom Typ `XAmzContentSHA256Mismatch` auftreten, nachdem sich das Standardverhalten des AWS SDK bezüglich der Prüfsummenberechnung geändert hat. Dieses SDK wird sowohl von AWS CLI als auch von Terraform verwendet.

#### Affected Versions

- **AWS CLI**: Version 2.23.0 and later
- **Terraform**: Version 1.11.2 and later

These versions include an AWS SDK that automatically adds the `x-amz-checksum-mode` header and computes CRC32 checksums for uploads, which may conflict with the object storage server's configuration.

#### Solution 1: Umgebungsvariable (Empfohlen)

Die einfachste Lösung besteht darin, dieses neue Verhalten über eine Umgebungsvariable zu deaktivieren.

Für **AWS CLI**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED aws s3 cp datei.txt s3://mein-bucket/
```

Für **Terraform**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED terraform apply
```

Um diesen Parameter dauerhaft in Ihrer Shell-Sitzung zu setzen:
```bash
export AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED
```

#### Solution 2: Configuration in Profil AWS (für AWS CLI)

Sie können diesen Parameter dauerhaft in Ihrem AWS CLI-Profil konfigurieren.

1.  Öffnen Sie Ihre AWS-Konfigurationsdatei: `~/.aws/config`
2.  Fügen Sie den folgenden Parameter in Ihr Profil ein:

```ini
[default]
request_checksum_calculation = WHEN_REQUIRED
```

Diese Lösung ist ideal, wenn Sie AWS CLI regelmäßig verwenden.

#### Solution 3: Rollback (Nicht empfohlen)

Als letzte Möglichkeit können Sie auf eine frühere Version der Tools zurückwechseln.

Für **AWS CLI** auf Version 2.22.35 zurückkehren:
```bash
pip install awscli==2.22.35
```

Für **Terraform** auf Version 1.11.1 zurückwechseln.

#### Überprüfung

Um sicherzustellen, dass Ihre Lösung funktioniert, führen Sie einen einfachen Befehl aus:

```bash
aws s3 ls
```

# or
terraform plan
```

If the commands run without checksum errors, the issue is resolved.