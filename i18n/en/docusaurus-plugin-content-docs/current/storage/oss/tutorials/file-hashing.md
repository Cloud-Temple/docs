---
title: Add the File HASH (Checksum)
---

The Cloud Temple Object Storage service supports file integrity verification through metadata (checksums). Some clients, such as `mc`, can automatically calculate and attach this hash, while for others, it must be specified manually.

### 1. Automatic MD5 calculation with `mc`

The MinIO client (`mc`) can compute an MD5 hash on-the-fly and attach it to the object during upload. The hash is then visible in the `ETag` field of the object's metadata.

```bash
```

# Local MD5 calculation for verification
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# File upload with MD5 calculation
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Verify object metadata
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
The `ETag` matches the MD5 hash of the local file.

### 2. Manual addition of a SHA-256 hash

You can also manually add a hash (for example, SHA-256) as an S3 attribute during upload.

```bash
```

# Local SHA-256 Calculation
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Upload file by passing the hash as an attribute
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

### 3. Resolve `XAmzContentSHA256Mismatch` Errors with AWS CLI or Terraform

#### Problem Origin

Errors of type `XAmzContentSHA256Mismatch` can occur following a change in the default behavior of the AWS SDK regarding checksum calculation. This SDK is used by both AWS CLI and Terraform.

#### Affected Versions

- **AWS CLI**: Version 2.23.0 and later
- **Terraform**: Version 1.11.2 and later

These versions include an AWS SDK that automatically includes the `x-amz-checksum-mode` header and computes CRC32 checksums for uploads, which may conflict with object storage server configurations.

#### Solution 1: Environment Variable (Recommended)

The simplest solution is to disable this new behavior using an environment variable.

For **AWS CLI**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED aws s3 cp fichier.txt s3://mon-bucket/
```

For **Terraform**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED terraform apply
```

To make this setting permanent in your shell session:
```bash
export AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED
```

#### Solution 2: Configuration in the AWS Profile (for AWS CLI)

You can configure this setting permanently within your AWS CLI profile.

1.  Open your AWS configuration file: `~/.aws/config`
2.  Add the following parameter to your profile:

```ini
[default]
request_checksum_calculation = WHEN_REQUIRED
```

This solution is ideal if you regularly use the AWS CLI.

#### Solution 3: Downgrade (Not Recommended)

As a last resort, you can revert to an earlier version of the tools.

For **AWS CLI**, revert to version 2.22.35:
```bash
pip install awscli==2.22.35
```

For **Terraform**, revert to version 1.11.1.

#### Verification

To confirm that your solution works, run a simple command:

```bash
aws s3 ls
```

# or
terraform plan
```

If the commands run without checksum errors, the issue is resolved.