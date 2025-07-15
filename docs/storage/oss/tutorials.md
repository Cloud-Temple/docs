---
title: Tutoriels
---
import S3Cloudberry_001 from './images/S3_cloudberry_001.png'
import S3Cloudberry_002 from './images/S3_cloudberry_002.png'
import S3Cloudberry_003 from './images/S3_cloudberry_003.png'
import S3Winscp_001 from './images/S3_winscp_001.png'
import S3Winscp_002 from './images/S3_winscp_002.png'

## Utiliser MINIO

Vous pouvez utiliser le [client minio](https://min.io/docs/minio/linux/reference/minio-mc.html) :

Par exemple :

```
    mc alias set <alias_name> https://reks2ee2b1.s3.fr1.cloud-temple.com <access_key> <secret_key>
```

Pousser un fichier :

```
    mc cp test.txt <alias_name>/<bucket_name>
```

Récupérer un fichier :

```
    mc ls <alias_name>/<bucket_name>
```

## Cloud Berry Explorer

vous pouvez aussi utiliser [Cloud Berry Explorer](https://www.msp360.com/explorer/).

1. Connectez vous en utilisant votre endpoint et votre clef :

<img src={S3Cloudberry_001} />

2. Une fois connecté, saisissez le nom du bucket dans la barre de navigation:

<img src={S3Cloudberry_002} />

3. Vous pourrez alors utiliser le bucket normalement :

<img src={S3Cloudberry_003} />

## Utiliser WINSCP 6.3.x

Vous pouvez utiliser [Winscp](https://winscp.net/eng/download.php) :

1. Connectez vous en utilisant votre endpoint, votre clef d'accès et votre clef secrete :

<img src={S3Winscp_001} />

2. Une fois connecté, utilisez WINSCP normalement comme un site FTP ou SCP :

<img src={S3Winscp_002} />

## Ajouter le HASH d'un fichier lors de l'upload d'un objet

Globalement, le HASH des fichiers est supporté sur notre stockage objet via les metadatas. Certains clients permettent de calculer à la volée un HASH et de l'ajouter en metadata (minio-mc avec md5 par exemple), pour d'autre, il faut préciser la donnée en metadata directement.

1. Cas de l'ajout d'un HASH avec le client minio-mc : ce client supporte le calcul à la volée d'un hash MD5 et le stockage dans les metadatas

            ╰─➤  cat test.txt
            Ceci est un test
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

2. Exemple d'ajout un sha256 "manuellement" : pour ce faire on utilise les attributs S3 du fichier.

            ╰─➤  cat test.txt
            Ceci est un test
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

## Synchroniser un dossier local avec mc

La commande `mc mirror` est un outil puissant pour synchroniser le contenu d'un dossier local vers un bucket S3. Elle peut téléverser les fichiers nouveaux ou modifiés, et optionnellement supprimer les fichiers du bucket qui n'existent plus localement. C'est une méthode efficace pour maintenir une sauvegarde ou déployer un site statique.

**Exemple :**

Pour synchroniser le contenu du dossier local `./mon-site` vers le bucket `demo-app` :

```bash
❯ mc mirror ./mon-site/ cloudtemple-fr1/demo-app/
```

**Options utiles :**

*   `--overwrite` : Force le remplacement des fichiers existants même s'ils sont plus récents sur le bucket.
*   `--remove` : Supprime les fichiers du bucket qui n'existent plus dans le dossier local source. À utiliser avec prudence.

```bash
# Synchronisation complète avec suppression des fichiers distants obsolètes
❯ mc mirror --remove ./mon-site/ cloudtemple-fr1/demo-app/
```

## Synchroniser un dossier local avec AWS CLI

De manière similaire à `mc`, l'AWS CLI fournit la commande `aws s3 sync` pour synchroniser des répertoires. Cette commande compare le contenu du dossier source et du bucket de destination pour ne transférer que les fichiers nouveaux ou modifiés.

N'oubliez pas de configurer votre [client AWS comme indiqué dans le guide de démarrage](./quickstart.md#configurer-votre-client-aws-aws) et d'utiliser le paramètre `--endpoint-url`.

**Exemple :**

Pour synchroniser le contenu du dossier local `./mon-site` vers le bucket `s3://demo-app` :

```bash
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
```

**Options utiles :**

*   `--delete` : Supprime les fichiers du bucket qui n'existent plus dans le dossier local. C'est l'équivalent de l'option `--remove` de `mc mirror`.
*   `--exact-timestamps` : Lors de la synchronisation, ne copie le fichier que si l'horodatage de modification est différent.
*   `--dryrun` : Affiche les opérations qui seraient effectuées sans réellement les exécuter. Très utile pour vérifier une commande avant de la lancer.

```bash
# Simulation d'une synchronisation avec suppression
❯ aws s3 sync ./mon-site/ s3://demo-app/ --endpoint-url https://... --delete --dryrun
(dryrun) delete: s3://demo-app/old-file.html
(dryrun) upload: mon-site/new-file.css to s3://demo-app/new-file.css
