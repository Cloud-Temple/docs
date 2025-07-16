---
title: Ajouter le HASH d'un fichier (Checksum)
---

Le service de Stockage Objet de Cloud Temple supporte la vérification de l'intégrité des fichiers via les métadonnées (checksums). Certains clients, comme `mc`, peuvent calculer et attacher ce hash automatiquement, tandis que pour d'autres, il faut le spécifier manuellement.

### 1. Calcul automatique du MD5 avec `mc`

Le client MinIO (`mc`) peut calculer à la volée un hash MD5 et l'attacher à l'objet lors du téléversement. Le hash est ensuite visible dans le champ `ETag` des métadonnées de l'objet.

```bash
# Calcul du MD5 local pour vérification
❯ md5 test.txt
MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83

# Upload du fichier avec calcul du MD5
❯ mc cp --md5 test.txt cloudtemple-fr1/demo-app/
...test.txt: 18 B / 18 B [================] 100.00% 111 B/s 0s

# Vérification des métadonnées de l'objet
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
L'`ETag` correspond bien au hash MD5 du fichier local.

### 2. Ajout manuel d'un hash SHA-256

Vous pouvez également ajouter manuellement un hash (par exemple, SHA-256) en tant qu'attribut S3 lors du téléversement.

```bash
# Calcul du SHA-256 local
❯ shasum -a 256 test.txt
2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt

# Upload du fichier en passant le hash comme attribut
❯ mc cp test.txt cloudtemple-fr1/demo-app/ --attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
...test.txt: 18 B / 18 B [================] 100.00% 141 B/s 0s

# Vérification des métadonnées
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
Le hash SHA-256 est maintenant présent dans les métadonnées personnalisées de l'objet.
