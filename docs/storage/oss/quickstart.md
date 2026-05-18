---
title: Guide de démarrage
---
import S3ListBucket from '@site/docs/storage/oss/images/S3_list_bucket.png'
import S3Accounts from '@site/docs/storage/oss/images/S3_accounts.png'
import S3CreateAccount from '@site/docs/storage/oss/images/S3_create_account.png'
import S3StorageKeys from '@site/docs/storage/oss/images/S3_storage_keys.png'
import S3Keyregen from '@site/docs/storage/oss/images/S3_keyregen.png'
import S3Create from '@site/docs/storage/oss/images/S3_create.png'
import S3CreatePopup_001 from '@site/docs/storage/oss/images/S3_create_popup_001.png'
import S3AccountAssign from '@site/docs/storage/oss/images/S3_account_assign.png'
import S3AccountAccess from '@site/docs/storage/oss/images/S3_account_access.png'
import S3Files from '@site/docs/storage/oss/images/S3_files.png'
import S3Params from '@site/docs/storage/oss/images/S3_params.png'
import S3Lifecycle from '@site/docs/storage/oss/images/S3_lifecycle.png'
import S3CreatePopup_002 from '@site/docs/storage/oss/images/S3_create_popup_002.png'
import S3Delete from '@site/docs/storage/oss/images/S3_delete.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le Stockage Objet Cloud Temple est un service de stockage d'objets hautement sécurisé et qualifié SecNumCloud, basé sur le protocole Amazon S3. Il vous permet de stocker tous types de données, y compris les plus sensibles, en conformité avec les plus hautes exigences de sécurité. Vous pouvez gérer votre stockage directement depuis la console Cloud Temple et intégrer de nombreuses bibliothèques existantes ou clients CLI pour un usage programmatique.

## Avant de commencer

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Pour réaliser les actions présentées ci-dessous, vous devez disposer de :

    *   Un compte Cloud Temple connecté à la console
    *   Le statut de 'Owner' ou des permissions IAM vous autorisant à effectuer des actions sur le tenant de l'organisation concernée.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Added `cloudtemple-fr1` successfully.
    ```
    - Remplacez `VOTRE_NAMESPACE` par votre namespace. Ce paramètre est disponible dans la console Cloud Temple, dans le détail d'un bucket.
    - Remplacez `VOTRE_CLE_ACCES` et `VOTRE_CLE_SECRETE` par celles de votre compte de stockage.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    Le client AWS se configure via la commande `aws configure`. Vous devrez renseigner vos clés d'accès et la région par défaut.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```

    Le stockage objet Cloud Temple repose sur Dell EMC ECS, une implémentation S3-compatible qui ne prend pas en charge certaines extensions récentes d'AWS CLI v2, notamment le mode de transfert chunked avec checksum `CRC64NVME` activé par défaut depuis la version 2.x. Sans configuration spécifique, les uploads échouent avec l'erreur `XAmzContentSHA256Mismatch`.

    Il est nécessaire d'ajouter le paramètre suivant pour désactiver ce comportement :

    ```bash
    ❯ aws configure set request_checksum_calculation when_required
    ```

    **Astuce :** Pour éviter de taper le endpoint à chaque fois, vous pouvez le définir dans le fichier de configuration AWS (`~/.aws/config`) en créant un profil dédié qui intègre également ce paramètre :

    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    request_checksum_calculation = when_required
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```

    Vous pourrez ensuite utiliser ce profil avec l'option `--profile cloudtemple` sur chaque commande.

  </TabItem>

</Tabs>

## Lister l'ensemble des buckets S3 de votre tenant

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Vous pouvez accéder à l'ensemble de vos buckets via le menu '__Stockage Objet__' de la console Cloud Temple :
    <img src={S3ListBucket} />
    Vous pouvez voir tous les comptes créés sur votre tenant et autorisé à accéder au service S3 via l'onglet '__Comptes de stockage__'.
    <img src={S3Accounts} />
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1
    [2025-05-06 15:12:57 CEST]     13B demo01/
    [2025-06-30 15:29:56 CEST]      0B demo03/
    [2025-01-29 14:40:40 CET]      0B test/
    ```
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2025-05-06 15:12:57 demo01
    2025-06-30 15:29:56 demo03
    2025-01-29 14:40:40 test
    ```
  </TabItem>

</Tabs>

## Parcourir un bucket S3

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Lorsque vous cliquez sur le nom d'un bucket, vous avez accès en premier à l'onglet '__Fichiers__' pour voir son contenu :
    <img src={S3Files} />
    Dans l'onglet '__Paramètres__' vous pouvez voir le détail des informations de votre bucket S3 :
    <img src={S3Params} />

    **Note importante** : La notion de '__Protection de suppression__' correspond à la durée de protection de la donnée, et non à une suppression programmée. Les données restent accessibles pendant toute la période de configurée. Pour provoquer une suppression automatique des données à l'issue de la période de rétention, il est nécessaire de définir une politique de cycle de vie (lifecycle).

    **Exemple de politique de cycle de vie** (`lifecycle.json`):

    **Prérequis**:

    - le compte de stockage '__clé d'accès global__' doit être utilisé car il doit avoir les droits '__s3:PutLifecycleConfiguration__' et '__s3:GetLifecycleConfiguration__' sur le bucket.

    ```json
    {
      "Rules": [
        {
          "ID": "DeleteOldObjects",
          "Prefix": "",  // "" = tout le bucket, sinon mettre un préfixe spécifique
          "Status": "Enabled",
          "Expiration": {
            "Days": 30  // supprime après 30 jours
          },
          "NoncurrentVersionExpiration": {
            "NoncurrentDays": 7  // supprime les anciennes versions 7 jours après création d'une nouvelle
          }
        }
      ]
    }
    ```

    Si vous utilisez AWS CLI :

    ```bash
    aws --endpoint-url https://<ecs-endpoint> \
    s3api put-bucket-lifecycle-configuration \
    --bucket <nom-du-bucket> \
    --lifecycle-configuration file://lifecycle.json
    ```

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc ls cloudtemple-fr1/demo-app/
    [2024-05-23 09:41:58 CEST] 8.9KiB README.md
    [2024-05-22 09:56:04 CEST]     0B helloworld.txt
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2024-05-23 09:41:58      8923 README.md
    2024-05-22 09:56:04         0 helloworld.txt
    ```
  </TabItem>

</Tabs>

## Écrire un fichier dans un bucket (upload)

<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc cp ./version.txt cloudtemple-fr1/demo-app/
    `./version.txt` -> `cloudtemple-fr1/demo-app/version.txt`
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 cp ./version.txt s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    upload: ./version.txt to s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Télécharger un fichier depuis un bucket

<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc cp cloudtemple-fr1/demo-app/app.tar.gz .
    `cloudtemple-fr1/demo-app/app.tar.gz` -> `./app.tar.gz`
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 cp s3://demo-app/app.tar.gz . --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    download: s3://demo-app/app.tar.gz to ./app.tar.gz
    ```
  </TabItem>

</Tabs>

## Supprimer un fichier d'un bucket

<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Removed `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    delete: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Création d'un nouveau compte de stockage

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La création d'un compte de stockage sur votre tenant se fait en appuyant sur le bouton '__Nouveau compte de stockage__' en haut à droite, dans l'onglet '__Comptes de stockage__' :
    <img src={S3CreateAccount} />
    La plateforme vous donne alors la clef d'accès et la clef secrète de votre bucket :
    <img src={S3StorageKeys} />
    __ATTENTION :__ Les clés secrète et d'accès sont présentées une seule fois. Après cette première apparition, il devient impossible de consulter à nouveau la clé secrète. Il est donc essentiel de noter ces informations immédiatement ; faute de quoi, il vous sera nécessaire de générer une nouvelle paire de clés.
    La regénération se fait au niveau des options de la clef en choisissant l'option "Réinitialiser clé d'accès".
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La création de comptes de stockage est une opération spécifique à la plateforme Cloud Temple et doit être effectuée via la console, comme décrit dans le premier onglet.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La création de comptes de stockage est une opération spécifique à la plateforme Cloud Temple et doit être effectuée via la console.
  </TabItem>
</Tabs>

## Création d'un bucket S3

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La création de nouveau bucket se fait en cliquant sur le bouton '__Nouveau bucket__' en haut à droite de l'écran :
    <img src={S3Create} />
    Une fenêtre s'affiche alors et vous devez renseigner :
    1. La **région** de création de votre bucket,
    2. Le **type** de bucket : performant ou archivage,
    3. Le **nom** de votre bucket (il doit être unique).
    <img src={S3CreatePopup_001} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 mb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    make_bucket: nouveau-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc mb cloudtemple-fr1/nouveau-bucket
    Bucket `cloudtemple-fr1/nouveau-bucket` created successfully.
    ```
  </TabItem>
</Tabs>

## Suppression d'un bucket S3

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    La suppression d'un bucket se fait dans les actions associées au bucket en choisissant l'option __'Supprimer'__.
    <img src={S3Delete} />
    _**ATTENTION : La suppression est définitive et il n'existe aucun moyen de récupérer les données.**_
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rb s3://nouveau-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    remove_bucket: nouveau-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc rb cloudtemple-fr1/nouveau-bucket
    Removed `cloudtemple-fr1/nouveau-bucket` successfully.
    ```
  </TabItem>
</Tabs>

## Gestion des politiques d'accès

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Les associations de compte aux buckets et la configuration des restrictions d'accès sont réalisées dans l'onglet '__Politiques__' du bucket.
    <img src={S3AccountAssign} />
    Cette interface vous permet de donner l'accès du compte de stockage au bucket selon quatre rôles prédéfinis (read_only, read_write, write_only, maintainer).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    La gestion fine des politiques d'accès via le client AWS (`put-bucket-policy`) est une opération avancée. Pour la majorité des cas d'usage, nous recommandons de passer par la console Cloud Temple pour une configuration simplifiée et sécurisée.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    La gestion fine des politiques d'accès via le client `mc` (`policy` commands) est une opération avancée. Pour la majorité des cas d'usage, nous recommandons de passer par la console Cloud Temple pour une configuration simplifiée et sécurisée.
  </TabItem>
</Tabs>

## Protection de suppression

La **Protection de suppression** est un paramètre configurable au niveau du bucket, accessible dans l'onglet '__Paramètres__'. Elle permet de définir une durée pendant laquelle les objets stockés dans le bucket sont protégés contre toute modification ou suppression.

<img src={S3Params} />

### Comportement

Lorsque la Protection de suppression est activée sur un bucket :

- **Aucun objet ne peut être supprimé** dans le bucket pendant toute la durée configurée, y compris par le propriétaire du bucket.
- **Aucun objet ne peut être modifié** (écrasement d'un objet existant interdit).
- La protection s'applique à **tous les objets** présents dans le bucket au moment de l'activation, ainsi qu'à ceux ajoutés ultérieurement.
- À l'expiration de la durée configurée, les objets redeviennent modifiables et supprimables normalement.

:::warning
La Protection de suppression ne déclenche **pas** de suppression automatique des données à son terme. Pour supprimer automatiquement des objets après une période donnée, il est nécessaire de configurer une politique de cycle de vie (lifecycle), décrite dans la section [Parcourir un bucket S3](#parcourir-un-bucket-s3).
:::

### Cas d'usage

Ce mécanisme est particulièrement adapté aux contextes imposant une **immuabilité des données** sur une durée définie :

- Conformité réglementaire (secteurs santé, finance, défense)
- Protection contre les suppressions accidentelles ou malveillantes
- Respect d'obligations d'archivage (ex. : durée légale de conservation des logs)
