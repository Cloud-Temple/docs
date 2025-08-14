---
title: Leitfaden zum Start
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


Der Cloud Temple Object Storage ist ein hochsicherer und zertifizierter SecNumCloud-Service, der auf dem Amazon S3-Protokoll basiert. Er ermöglicht Ihnen, alle Arten von Daten, einschließlich der sensibelsten, gemäß den höchsten Sicherheitsanforderungen zu speichern. Sie können Ihren Speicher direkt über die Cloud Temple-Konsole verwalten und viele vorhandene Bibliotheken oder CLI-Clients integrieren, um sie programmatisch zu verwenden.

## Vor dem Beginnen


<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>

    Um die unten beschriebenen Aktionen durchzuführen, benötigen Sie:

    *   Ein Cloud Temple-Konto, das mit der Konsole verbunden ist
    *   Den Status "Owner" oder IAM-Berechtigungen, die Sie berechtigen, Aktionen auf dem Tenant der betreffenden Organisation durchzuführen.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    Added `cloudtemple-fr1` successfully.           
    ```
    - Ersetzen Sie `VOTRE_NAMESPACE` durch Ihren Namespace. Dieser Parameter ist in der Cloud Temple-Konsole im Detail eines Buckets verfügbar.
    - Ersetzen Sie `VOTRE_CLE_ACCES` und `VOTRE_CLE_SECRETE` durch die Ihrer Speicherkonto.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    Der AWS-Client wird über den Befehl `aws configure` konfiguriert. Sie müssen Ihre Zugangsschlüssel und die Standardregion angeben.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    Im Gegensatz zu `mc` speichert der AWS-Client nicht den Endpunkt (Endpoint). Sie müssen ihn bei jedem Befehl mit der Option `--endpoint-url` angeben.

    Der Endpunkt Ihres Dienstes ist: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Tipp:** Um das Eintippen des Endpoints jedes Mal zu vermeiden, können Sie ihn in der AWS-Konfigurationsdatei (`~/.aws/config`) über einen dedizierten Profil festlegen:
    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    Sie können dieses Profil dann mit der Option `--profile cloudtemple` bei jedem Befehl verwenden.


  </TabItem>

</Tabs>

## Alle S3-Buckets Ihres Mandanten auflisten
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Sie können alle Ihre Buckets über das Menü '__Objektstorage__' der Cloud Temple-Konsole zugreifen:
    <img src={S3ListBucket} />
    Sie können alle Konten sehen, die auf Ihrem Mandanten erstellt wurden und Zugriff auf den S3-Dienst haben, über den Tab '__Speicherkonten__'.
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

## Ein S3-Bucket durchsuchen
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Wenn Sie auf den Namen eines Buckets klicken, gelangen Sie zunächst zum Tab '__Dateien__', um dessen Inhalt anzuzeigen:
    <img src={S3Files} />
    Im Tab '__Einstellungen__' können Sie die Details Ihrer S3-Bucket-Informationen einsehen:
    <img src={S3Params} />
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

## Eine Datei in einen Bucket schreiben (Hochladen)
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

## Eine Datei aus einem Bucket herunterladen
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

## Löschen einer Datei aus einem Bucket
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

## Erstellung eines neuen Speicherkontos
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Die Erstellung eines Speicherkontos für Ihren Mandanten erfolgt, indem Sie auf den Button '__Neues Speicherkonto__' in der oberen rechten Ecke im Tab '__Speicherkonten__' klicken:
    <img src={S3CreateAccount} />
    Die Plattform gibt Ihnen anschließend den Zugriffsschlüssel und den Geheimnis-Schlüssel Ihres Buckets:
    <img src={S3StorageKeys} />
    __ACHTUNG:__ Zugriffsschlüssel und Geheimnis-Schlüssel werden nur einmal angezeigt. Nach dieser ersten Anzeige ist es nicht mehr möglich, den Geheimnis-Schlüssel erneut anzuzeigen. Es ist daher unbedingt erforderlich, diese Informationen sofort zu notieren; andernfalls müssen Sie eine neue Schlüsselpaar generieren.
    Die Neugenerierung erfolgt über die Schlüssel-Optionen, indem Sie die Option "Zugriffsschlüssel zurücksetzen" wählen.
    <img src={S3Keyregen} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Die Erstellung von Speicherkonten ist eine spezifische Operation der Cloud Temple-Plattform und muss über die Konsole durchgeführt werden, wie im ersten Tab beschrieben.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Die Erstellung von Speicherkonten ist eine spezifische Operation der Cloud Temple-Plattform und muss über die Konsole durchgeführt werden.
  </TabItem>
</Tabs>

## Erstellung eines S3-Buckets
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Die Erstellung eines neuen Buckets erfolgt, indem Sie auf den Button '__Neuer Bucket__' oben rechts auf dem Bildschirm klicken:
    <img src={S3Create} />
    Es öffnet sich ein Fenster, in dem Sie folgende Angaben machen müssen:
    1. Die **Region** für die Erstellung Ihres Buckets,
    2. Der **Typ** des Buckets: Hochleistung oder Archivierung,
    3. Der **Name** Ihres Buckets (er muss eindeutig sein).
    <img src={S3CreatePopup_001} />
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 mb s3://neuer-bucket --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    make_bucket: neuer-bucket
    ```
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc mb cloudtemple-fr1/neuer-bucket
    Bucket `cloudtemple-fr1/neuer-bucket` erfolgreich erstellt.
    ```
  </TabItem>
</Tabs>

## Löschung eines S3-Buckets
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Die Löschung eines Buckets erfolgt in den zugehörigen Aktionen des Buckets, indem Sie die Option __'Löschen'__ auswählen.
    <img src={S3Delete} />
    _**WARNUNG: Die Löschung ist endgültig und es gibt keinen Weg, die Daten wiederherzustellen.**_
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

## Zugriffsrichtlinienverwaltung
<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Die Zuordnung von Konten zu Buckets und die Konfiguration von Zugriffsbeschränkungen erfolgen im '__Politiken__'-Tab des Buckets.
    <img src={S3AccountAssign} />
    Diese Oberfläche ermöglicht es Ihnen, den Zugriff des Speicherkontos auf den Bucket anhand von vier vordefinierten Rollen (Mainteneur, Schreiber und Leser, Schreiber, Leser) zu gewähren.
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Die feine Zugriffsrichtlinienverwaltung über den AWS-Client (`put-bucket-policy`) ist eine erweiterte Funktion. Für die meisten Anwendungsfälle empfehlen wir die Verwendung der Cloud Temple-Konsole für eine vereinfachte und sichere Konfiguration.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Die feine Zugriffsrichtlinienverwaltung über den `mc`-Client (`policy`-Befehle) ist eine erweiterte Funktion. Für die meisten Anwendungsfälle empfehlen wir die Verwendung der Cloud Temple-Konsole für eine vereinfachte und sichere Konfiguration.
  </TabItem>
</Tabs>