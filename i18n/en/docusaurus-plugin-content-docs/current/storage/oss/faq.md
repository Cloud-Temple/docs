---
title: FAQ
---

### What is the maximum file size that can be handled with the web console?

The web limit is 40MB per file. Beyond this, a native S3 client with the API must be used.

### Which S3 client can I use to manage my files?
The main S3 clients are compatible. Minio, aws cli, WINSCP, ...

### Does the S3 Cloud Temple offer use the 'PathStyle' or 'UrlStyle' method?

Due to constraints associated with SecNumCloud qualification, at this time, the offer is designed to use the '**PathStyle**' method. We are working to make the '**UrlStyle**' method available in H1 2025.

### What is the maximum number of buckets per tenant?

The maximum number of buckets per tenant is 999.

### How to add the HASH of a file when uploading an object?
Globalement, le HASH des fichiers est supporté sur notre stockage objet via les métadonnées. Certains clients permettent de calculer à la volée un HASH et de l'ajouter en métadonnée (minio-mc avec MD5 par exemple), pour d'autres, il faut renseigner la donnée en métadonnée directement.

1. Cas de l'ajout d'un HASH avec le client minio-mc : ce client supporte le calcul à la volée d'un hash MD5 et le stockage dans les métadonnées


            ╰─➤  cat test.txt                       
            Ceci est un test 
            ╰─➤  md5 test.txt                       
            MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  111 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt
            Name      : test.txt
            Date      : 2024-06-08 10:21:31 CEST 

            Size      : 18 B   
            ETag      : 8b34b2754802a46e3475998dfcf76f83 
            Type      : file 
            Encryption: SSE-S3
            Metadata  :
                Content-Type: text/plain 

2. Example of manually adding a sha256: to do this, we use the file's S3 attributes.

            ╰─➤  cat test.txt
            Ceci est un test
            ╰─➤  shasum -a 256 test.txt                            
            2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB -attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  141 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt                                                                     
            Name      : test.txt

```markdown
            Date      : 2024-06-08 10:41:17 CEST
            Size      : 18 B
            ETag      : 8b34b2754802a46e3475998dfcf76f83
            Type      : file
            Encryption: SSE-S3
            Metadata  :
                X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682
                Content-Type              : text/plain


### How is Cloud Temple's S3 offer billed?

The price is a monthly rate, per GiB of storage, billed monthly. However, the platform calculates usage by the hour and bills on a monthly basis of 720 hours.

For example, if you consume 30 GiB for 1 hour during the month and then nothing, and a few days later consume 30 GiB for 2 hours, the monthly bill will be *( Price (1 x 30GiB) + 2 x Price (30GiB) ) / 720* for the considered month. The billing is done at the end of the term.
```