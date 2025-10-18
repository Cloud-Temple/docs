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

---

### 3. Résoudre les erreurs `XAmzContentSHA256Mismatch` avec AWS CLI ou Terraform

#### Origine du problème

Des erreurs de type `XAmzContentSHA256Mismatch` peuvent survenir suite à une modification du comportement par défaut du SDK AWS concernant le calcul des checksums. Ce SDK est utilisé à la fois par AWS CLI et Terraform.

#### Versions concernées

- **AWS CLI**: Version 2.23.0 et ultérieures
- **Terraform**: Version 1.11.2 et ultérieures

Ces versions intègrent un SDK AWS qui inclut automatiquement l'en-tête `x-amz-checksum-mode` et calcule des checksums CRC32 pour les uploads, ce qui peut entrer en conflit avec la configuration du serveur de stockage objet.

#### Solution 1: Variable d'environnement (Recommandée)

La solution la plus simple est de désactiver ce nouveau comportement via une variable d'environnement.

Pour **AWS CLI**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED aws s3 cp fichier.txt s3://mon-bucket/
```

Pour **Terraform**:
```bash
AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED terraform apply
```

Pour rendre ce paramètre permanent dans votre session shell :
```bash
export AWS_REQUEST_CHECKSUM_CALCULATION=WHEN_REQUIRED
```

#### Solution 2: Configuration dans le profil AWS (pour AWS CLI)

Vous pouvez configurer ce paramètre de façon permanente dans votre profil AWS CLI.

1.  Ouvrez votre fichier de configuration AWS : `~/.aws/config`
2.  Ajoutez le paramètre suivant dans votre profil :

```ini
[default]
request_checksum_calculation = WHEN_REQUIRED
```

Cette solution est idéale si vous utilisez régulièrement AWS CLI.

#### Solution 3: Downgrade (Non recommandé)

En dernier recours, vous pouvez revenir à une version antérieure des outils.

Pour **AWS CLI**, revenir à la version 2.22.35 :
```bash
pip install awscli==2.22.35
```

Pour **Terraform**, revenir à la version 1.11.1.

#### Vérification

Pour confirmer que votre solution fonctionne, exécutez une commande simple :

```bash
aws s3 ls
# ou
terraform plan
```

Si les commandes s'exécutent sans erreur de checksum, le problème est résolu.
