---
title: Tutorials
---
import S3Cloudberry_001 from './images/S3_cloudberry_001.png'
import S3Cloudberry_002 from './images/S3_cloudberry_002.png'
import S3Cloudberry_003 from './images/S3_cloudberry_003.png'
import S3Winscp_001 from './images/S3_winscp_001.png'
import S3Winscp_002 from './images/S3_winscp_002.png'


## MINIO verwenden

Sie können zum Beispiel den Minio-Client verwenden:

https://min.io/docs/minio/linux/reference/minio-mc.html

Zum Beispiel:
```
    mc alias set <alias_name> https://reks2ee2b1.s3.fr1.cloud-temple.com <access_key> <secret_key>
```
Eine Datei hochladen:
```
    mc cp test.txt <alias_name>/<bucket_name>
```
Eine Datei abrufen:
```
    mc ls <alias_name>/<bucket_name>
```
## Cloud Berry Explorer

Sie können auch [Cloud Berry Explorer](https://www.msp360.com/explorer/) verwenden.

1. Melden Sie sich mit Ihrem Endpunkt und Ihrem Schlüssel an:

<img src={S3Cloudberry_001} />

2. Nach der Anmeldung geben Sie den Bucket-Namen in der Navigationsleiste ein:

<img src={S3Cloudberry_002} />

3. Sie können dann den Bucket normal verwenden:

<img src={S3Cloudberry_003} />

## WINSCP 6.3.x verwenden

Sie können [Winscp](https://winscp.net/eng/download.php) verwenden:

1. Melden Sie sich mit Ihrem Endpunkt, Zugriffsschlüssel und geheimen Schlüssel an:

<img src={S3Winscp_001} />

2. Nach der Anmeldung verwenden Sie WINSCP normal wie eine FTP- oder SCP-Site:

<img src={S3Winscp_002} />


## Hinzufügen des HASH einer Datei beim Hochladen eines Objekts

Generell wird der Datei-HASH in unserem Objektspeicher über Metadaten unterstützt. Einige Clients können einen HASH im Flug berechnen und als Metadaten hinzufügen (minio-mc mit md5 zum Beispiel), während bei anderen die Daten direkt in den Metadaten angegeben werden müssen.

1. Hinzufügen eines HASH mit dem minio-mc-Client: Dieser Client unterstützt die Berechnung eines MD5-Hashs im Flug und die Speicherung in Metadaten


            ╰─➤  cat test.txt
            Dies ist ein Test
            ╰─➤  md5 test.txt
            MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  111 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt
            Name      : test.txt
            Date      : 2024-06-08 10:21:31 CEST
            Size      : 18 B
            ETag      : 8b34b2754802a46e3475998dfcf76f83
            Type      : file
            Encryption: SSE-S3
            Metadata  :
                Content-Type: text/plain

2. Beispiel für das "manuelle" Hinzufügen eines sha256: Hierfür verwenden wir die S3-Attribute der Datei.

            ╰─➤  cat test.txt
            Dies ist ein Test
            ╰─➤  shasum -a 256 test.txt
            2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB -attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  141 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt
            Name      : test.txt
            Date      : 2024-06-08 10:41:17 CEST
            Size      : 18 B
            ETag      : 8b34b2754802a46e3475998dfcf76f83
            Type      : file
            Encryption: SSE-S3
            Metadata  :
                X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682
                Content-Type              : text/plain
