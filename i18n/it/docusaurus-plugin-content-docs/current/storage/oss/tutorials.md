---
title: Tutorial
---
import S3Cloudberry_001 from './images/S3_cloudberry_001.png'
import S3Cloudberry_002 from './images/S3_cloudberry_002.png'
import S3Cloudberry_003 from './images/S3_cloudberry_003.png'
import S3Winscp_001 from './images/S3_winscp_001.png'
import S3Winscp_002 from './images/S3_winscp_002.png'

## Utilizzare MINIO

Potete utilizzare il [client minio](https://min.io/docs/minio/linux/reference/minio-mc.html):

Per esempio:

```
    mc alias set <alias_name> https://reks2ee2b1.s3.fr1.cloud-temple.com <access_key> <secret_key>
```

Caricare un file:

```
    mc cp test.txt <alias_name>/<bucket_name>
```

Recuperare un file:

```
    mc ls <alias_name>/<bucket_name>
```

## Cloud Berry Explorer

Potete anche utilizzare [Cloud Berry Explorer](https://www.msp360.com/explorer/).

1. Connettetevi utilizzando il vostro endpoint e la vostra chiave:

<img src={S3Cloudberry_001} />

2. Una volta connessi, inserite il nome del bucket nella barra di navigazione:

<img src={S3Cloudberry_002} />

3. Potrete quindi utilizzare il bucket normalmente:

<img src={S3Cloudberry_003} />

## Utilizzare WINSCP 6.3.x

Potete utilizzare [Winscp](https://winscp.net/eng/download.php):

1. Connettetevi utilizzando il vostro endpoint, la chiave di accesso e la chiave segreta:

<img src={S3Winscp_001} />

2. Una volta connessi, utilizzate WINSCP normalmente come un sito FTP o SCP:

<img src={S3Winscp_002} />

## Aggiungere l'HASH di un file durante il caricamento di un oggetto

In generale, l'HASH dei file è supportato sul nostro storage di oggetti tramite i metadati. Alcuni client permettono di calcolare un HASH al volo e di aggiungerlo come metadato (minio-mc con md5 per esempio), per altri, è necessario specificare i dati direttamente nei metadati.

1. Caso dell'aggiunta di un HASH con il client minio-mc: questo client supporta il calcolo al volo di un hash MD5 e la memorizzazione nei metadati

            ╰─➤  cat test.txt
            Questo è un test
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

2. Esempio di aggiunta di un sha256 "manualmente": per farlo, utilizziamo gli attributi S3 del file.

            ╰─➤  cat test.txt
            Questo è un test
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
