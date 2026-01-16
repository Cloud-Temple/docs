---
title: Schnellstartanleitung
---
import S3ListBucket from './images/S3_list_bucket.png'
import S3Accounts from './images/S3_accounts.png'
import S3CreateAccount from './images/S3_create_account.png'
import S3StorageKeys from './images/S3_storage_keys.png'
import S3Keyregen from './images/S3_keyregen.png'
import S3Create from './images/S3_create.png'
import S3CreatePopup_001 from './images/S3_create_popup_001.png'
import S3AccountAssign from './images/S3_account_assign.png'
import S3AccountAccess from './images/S3_account_access.png'
import S3Files from './images/S3_files.png'
import S3Params from './images/S3_params.png'
import S3Lifecycle from './images/S3_lifecycle.png'
import S3CreatePopup_002 from './images/S3_create_popup_002.png'
import S3Delete from './images/S3_delete.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Der Cloud Object Storage Temple ist ein hochsicherer und SecNumCloud-zertifizierter Objektspeicherdienst, der auf dem Amazon-S3-Protokoll basiert. Er ermöglicht Ihnen die Speicherung aller Datentypen, einschließlich sensibler Daten, in Übereinstimmung mit den höchsten Sicherheitsanforderungen. Sie können Ihren Speicher direkt über die Cloud Temple-Konsole verwalten und zahlreiche bestehende Bibliotheken oder CLI-Clients integrieren, um den Dienst programmgesteuert zu nutzen.

## Vor Beginn

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Um die unten beschriebenen Aktionen durchzuführen, benötigen Sie:

    *   Ein Cloud Temple-Konto, das mit der Konsole verbunden ist
    *   Den Status „Owner“ oder IAM-Berechtigungen, die Sie berechtigen, Aktionen im Tenant der betreffenden Organisation durchzuführen.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Added `cloudtemple-fr1` successfully.
    ```
    - Ersetzen Sie `VOTRE_NAMESPACE` durch Ihren Namespace. Dieser Wert ist in der Cloud Temple-Konsole im Detail eines Buckets verfügbar.
    - Ersetzen Sie `VOTRE_CLE_ACCES` und `VOTRE_CLE_SECRETE` durch die Zugriffsschlüssel Ihres Speicherkontos.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    Der AWS-Client wird über den Befehl `aws configure` konfiguriert. Sie müssen Ihre Zugriffsschlüssel und die Standardregion angeben.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    Im Gegensatz zu `mc` speichert der AWS-Client den Endpunkt (endpoint) nicht. Sie müssen ihn bei jeder Anweisung mit der Option `--endpoint-url` angeben.

    Der Endpunkt Ihres Dienstes lautet: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Tipp:** Um den Endpunkt jedes Mal eingeben zu müssen, können Sie ihn in der AWS-Konfigurationsdatei (`~/.aws/config`) festlegen, indem Sie ein eigenes Profil erstellen:
    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    Anschließend können Sie dieses Profil mit der Option `--profile cloudtemple` bei jedem Befehl verwenden.

  </TabItem>
</Tabs>

## List all S3 buckets in your tenant

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    You can access all your buckets via the '__Object Storage__' menu in the Cloud Temple console:
    <img src={S3ListBucket} />
    You can see all accounts created on your tenant and authorized to access the S3 service via the '__Storage Accounts__' tab.
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

## Durchlaufen eines S3-Buckets

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Wenn Sie auf den Namen eines Buckets klicken, gelangen Sie zunächst zum Tab '__Dateien__', um dessen Inhalt anzuzeigen:
    <img src={S3Files} />
    Im Tab '__Einstellungen__' können Sie die detaillierten Informationen Ihres S3-Buckets einsehen:
    <img src={S3Params} />

    **Wichtiger Hinweis**: Der Begriff '__Löschschutz__' bezieht sich auf die Schutzdauer der Daten und nicht auf eine geplante Löschung. Die Daten bleiben während der gesamten konfigurierten Periode zugänglich. Um eine automatische Löschung der Daten nach Ablauf der Aufbewahrungsfrist zu ermöglichen, ist die Definition einer Lebenszyklusrichtlinie (lifecycle) erforderlich.

    **Beispiel für eine Lebenszyklusrichtlinie** (`lifecycle.json`):

    **Voraussetzungen**:

    - Das Speicherkonto '__globale Zugriffsschlüssel__' muss verwendet werden, da es die Berechtigungen '__s3:PutLifecycleConfiguration__' und '__s3:GetLifecycleConfiguration__' für den Bucket benötigt.

    ```json
    {
      "Rules": [
        {
          "ID": "DeleteOldObjects",
          "Prefix": "",  // "" = gesamter Bucket, ansonsten spezifischen Präfix angeben
          "Status": "Enabled",
          "Expiration": {
            "Days": 30  // löscht nach 30 Tagen
          },
          "NoncurrentVersionExpiration": {
            "NoncurrentDays": 7  // löscht alte Versionen 7 Tage nach Erstellung einer neuen Version
          }
        }
      ]
    }
    ```

    Wenn Sie die AWS CLI verwenden:

    ```bash
    aws --endpoint-url https://<ecs-endpoint> \
    s3api put-bucket-lifecycle-configuration \
    --bucket <bucket-name> \
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

## Datei in einem Bucket schreiben (Upload)
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

## Datei aus einem Bucket herunterladen
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

## Datei aus einem Bucket löschen
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Entfernt: `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    gelöscht: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Erstellung eines neuen Speicherkontos
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Die Erstellung eines Speicherkontos für Ihren Mandanten erfolgt, indem Sie auf die Schaltfläche „__Neues Speicherkonto__“ in der oberen rechten Ecke im Tab „__Speicherkonten__“ klicken:
    <img src={S3CreateAccount} />
    Die Plattform gibt Ihnen anschließend den Zugriffsschlüssel und den geheimen Schlüssel Ihres Buckets aus:
    <img src={S3StorageKeys} />
    __ACHTUNG:__ Zugriffsschlüssel und geheimer Schlüssel werden nur einmal angezeigt. Nach dieser ersten Anzeige ist es nicht mehr möglich, den geheimen Schlüssel erneut einzusehen. Es ist daher unbedingt erforderlich, diese Informationen sofort zu notieren; andernfalls müssen Sie eine neue Schlüsselpaar generieren.
    Die Neuerstellung erfolgt über die Schlüsseloptionen, indem Sie die Option „Zugriffsschlüssel zurücksetzen“ wählen:
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Die Erstellung von Speicherkonten ist eine Plattform-spezifische Aktion von Cloud Temple und muss über die Konsole durchgeführt werden, wie im ersten Tab beschrieben.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Die Erstellung von Speicherkonten ist eine Plattform-spezifische Aktion von Cloud Temple und muss über die Konsole durchgeführt werden.
  </TabItem>
</Tabs>

## Erstellung eines S3-Buckets
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Die Erstellung eines neuen Buckets erfolgt durch Klicken auf die Schaltfläche '__Neuer Bucket__' in der oberen rechten Ecke des Bildschirms:
    <img src={S3Create} />
    Es öffnet sich ein Fenster, in dem Sie folgende Angaben machen müssen:
    1. Die **Region** für die Erstellung Ihres Buckets,
    2. Der **Typ** des Buckets: Leistungsstark oder Archivierung,
    3. Der **Name** Ihres Buckets (er muss eindeutig sein).
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

## Löschen eines S3-Buckets
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Das Löschen eines Buckets erfolgt über die zugehörigen Aktionen des Buckets, indem die Option __'Löschen'__ ausgewählt wird.
    <img src={S3Delete} />
    _**ACHTUNG: Die Löschung ist endgültig und es gibt keinen Weg, die Daten wiederherzustellen.**_
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

## Access Policy Management
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Account associations with buckets and access restriction configurations are performed in the '__Policies__' tab of the bucket.
    <img src={S3AccountAssign} />
    This interface allows you to grant storage account access to the bucket according to four predefined roles (read_only, read_write, write_only, maintainer).
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Fine-grained access policy management via the AWS client (`put-bucket-policy`) is an advanced operation. For most use cases, we recommend using the Cloud Temple console for a simplified and secure configuration.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Fine-grained access policy management via the `mc` client (`policy` commands) is an advanced operation. For most use cases, we recommend using the Cloud Temple console for a simplified and secure configuration.
  </TabItem>
</Tabs>