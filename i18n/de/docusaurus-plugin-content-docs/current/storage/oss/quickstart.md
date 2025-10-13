---
title: Einstiegsführer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Das Cloud Storage Temple ist ein hochgesicherter und qualitativ hochwertiger Cloud-Speicherservice, der auf dem Protokoll Amazon S3 von SecNumCloud basiert. Er ermöglicht es Ihnen, alle Arten von Daten zu speichern, einschließlich sensibler Daten, in Übereinstimmung mit den höchsten Sicherheitsanforderungen. Sie können Ihren Speicher direkt aus der Cloud Temple-Konsole verwalten und viele bestehende Bibliotheken oder CLI-Clients integrieren, um ein programmatisches Einsatz zu ermöglichen.

## Vor dem Starten

<Tabs>
  <TabItem value="Cloud Temple Console" label="Cloud Temple Console">

    Um die nachstehenden Aktionen auszuführen, benötigen Sie:

    *   Ein Cloud Temple-Konto mit Zugang zur Konsole
    *   Der Status 'Owner' oder Berechtigungen IAM, die Ihnen ermöglichen, Aktionen auf dem Tenant der betreffenden Organisation durchzuführen.

  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    ```bash
    ❯ mc alias set cloudtemple-fr1 https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com VOTRE_CLE_ACCES VOTRE_CLE_SECRETE
    `cloudtemple-fr1` erfolgreich hinzugefügt.
    ```
    - Ersetzen Sie `VOTRE_NAMESPACE` durch Ihren Namespace. Dieses Parameter ist in der Cloud Temple-Konsole unter den Details eines Buckets verfügbar.
    - Ersetzen Sie `VOTRE_CLE_ACCES` und `VOTRE_CLE_SECRETE` durch die Ihres Speicherkontos.

  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">

    Der AWS-Klient wird über die Befehlszeile `aws configure` konfiguriert. Sie müssen Ihre Zugriffskennzeichen und die Standardregion angeben.
    ```bash
    ❯ aws configure
    AWS Access Key ID [None]: VOTRE_CLE_ACCES
    AWS Secret Access Key [None]: VOTRE_CLE_SECRETE
    Default region name [None]: fr1
    Default output format [None]: json
    ```
    Im Gegensatz zu `mc`, speichert der AWS-Klient den Endpunkt nicht. Sie müssen ihn für jede Befehlsanweisung mit der Option `--endpoint-url` angeben.

    Der Endpunkt Ihres Dienstes ist: `https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com`

    **Tipp:** Um das Eingeben des Endpunkts bei jeder Befehlsanweisung zu vermeiden, können Sie ihn im AWS-Konfigurationsdatei (`~/.aws/config`) unter einem Profil festlegen:
    ```ini
    [profile cloudtemple]
    region = fr1
    output = json
    s3 =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    s3api =
      endpoint_url = https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    ```
    Sie können dann dieses Profil mit der Option `--profile cloudtemple` auf jeder Befehlsanweisung verwenden.


  </TabItem>

</Tabs>

## Liste des buckets S3 de votre tenant

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Vous pouvez accéder à l'ensemble de vos buckets via le menu '__Stockage Objet__' de la console Cloud Temple :
    ![S3 List Buckets](./images/S3_list_bucket.png)
    Vous pouvez voir tous les comptes créés sur votre tenant et autorisé à accéder au service S3 via l'onglet '__Comptes de stockage__'.
    ![S3 Accounts](./images/S3_accounts.png)
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

## Exploring an S3 Bucket

<Tabs>
  <TabItem value="Console Cloud Temple" label="Console Cloud Temple" default>
    Lorsque vous cliquez sur le nom d'un bucket, vous accédez en premier à l'onglet '__Fichiers__' pour voir son contenu :
    ![S3 Files](./images/S3_files.png)
    Dans l'onglet '__Paramètres__' vous pouvez voir le détail des informations de votre bucket S3 :
    ![S3 Parameters](./images/S3_params.png)

    **Wichtiger Hinweis zur Aufbewahrung**: Das Konzept der Aufbewahrung entspricht der Datenschutzdauer, nicht einer geplanten Löschung. Die Daten bleiben während der gesamten Aufbewahrungszeit zugänglich. Um eine automatische Datenlöschung am Ende der Aufbewahrungszeit auszulösen, ist es notwendig, eine Lifecycle-Richtlinie zu definieren.

    **Beispiel einer Lifecycle-Richtlinie** (`lifecycle.json`):

    **Voraussetzungen**:

    - Das Speicherkonto '__globaler Zugriffsschlüssel__' muss verwendet werden, da es die Rechte '__s3:PutLifecycleConfiguration__' und '__s3:GetLifecycleConfiguration__' auf dem Bucket haben muss.

    ```json
    {
      "Rules": [
        {
          "ID": "DeleteOldObjects",
          "Prefix": "",  // "" = gesamter Bucket, sonst spezifisches Präfix setzen
          "Status": "Enabled",
          "Expiration": {
            "Days": 30  // löscht nach 30 Tagen
          },
          "NoncurrentVersionExpiration": {
            "NoncurrentDays": 7  // löscht alte Versionen 7 Tage nach Erstellung einer neuen
          }
        }
      ]
    }
    ```

    Wenn Sie AWS CLI verwenden:

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
    [2024-05-22 09:56:04 CEST]      0B helloworld.txt
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 ls s3://demo-app/ --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    2024-05-23 09:41:58       8923 README.md
    2024-05-22 09:56:04          0 helloworld.txt
    ```
  </TabItem>

</Tabs>

### Datei hochladen (Upload)
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

## Download a file from a bucket
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

## Löschen eines Dateien aus einem Bucket
<Tabs>
  <TabItem value="MC CLI" label="MC CLI" default>
    ```bash
    ❯ mc rm cloudtemple-fr1/demo-app/version.txt
    Entfernt `cloudtemple-fr1/demo-app/version.txt`.
    ```
  </TabItem>

  <TabItem value="AWS CLI" label="AWS CLI">
    ```bash
    ❯ aws s3 rm s3://demo-app/version.txt --endpoint-url https://VOTRE_NAMESPACE.s3.fr1.cloud-temple.com
    Löschen: s3://demo-app/version.txt
    ```
  </TabItem>

</Tabs>

## Erstellung eines neuen Speicherkontos
<Tabs>
  <TabItem value="Cloud-Console" label="Cloud-Console" default>
    Die Erstellung eines Speicherkontos auf Ihrem Tenant erfolgt, indem Sie auf den Button "__Neues Speicherkonto__" oben rechts im Bereich "__Speicherkonten__" klicken:
    ![S3 Create Account](./images/S3_create_account.png)
    Die Plattform zeigt dann die Zugriffs- und Versteckeklönullen Ihres Buckets an:
    ![S3 Storage Keys](./images/S3_storage_keys.png)
    **WICHTIG:** Die Zugriffs- und Versteckeklönullen werden nur einmal angezeigt. Nach dieser ersten Anzeige ist es unmöglich, die Versteckeklösung erneut abzurufen. Es ist daher entscheidend, diese Informationen sofort zu notieren; andernfalls müssen Sie eine neue Paarungsnummer generieren.
    Die Wiederherstellung der Klönullen erfolgt über die Optionen für die Klösungen und wählt dabei "Klösungen neu generieren".
    ![S3 Key Regeneration](./images/S3_keyregen.png)
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Die Erstellung von Speicherkonten ist eine spezifische Operation der Plattform Cloud Temple und muss über die Konsole wie in der ersten Schicht durchgeführt werden, wie oben beschrieben.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Die Erstellung von Speicherkonten ist eine spezifische Operation der Plattform Cloud Temple und muss über die Konsole durchgeführt werden.
  </TabItem>
</Tabs>

## Erstellung eines S3-Buckets
<Tabs>
  <TabItem value="Cloud Temple Console" label="Cloud Temple Console" default>
    Die Erstellung eines neuen Buckets erfolgt, indem Sie auf den Button "__Neues Bucket__" oben rechts klicken:
    ![S3 Create](./images/S3_create.png)
    Anschließend öffnet sich eine Fenster und Sie müssen die folgenden Informationen eingeben:
    1. Die **Region** für die Erstellung Ihres Buckets,
    2. Der **Typ** des Buckets (leistungsstark oder Archiv),
    3. Den **Namen** Ihres Buckets (er muss einzigartig sein).
    ![S3 Create Popup](./images/S3_create_popup_001.png)
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
  <TabItem value="Konsole Cloud Temple" label="Konsole Cloud Temple" default>
    Die Löschung eines Buckets erfolgt durch die Auswahl der entsprechenden Aktionen für den Bucket und Wahl der Option __'Löschen__'.
    ![S3 Delete](./images/S3_delete.png)
    **WICHTIG: Die Löschung ist endgültig und keine Rückkehr möglich. Daten können nicht mehr wiederhergestellt werden.**
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

## Verwaltung von Zugriffsregeln
<Tabs>
  <TabItem value="Cloud-Cloud-S3-Konsole" label="Cloud-Cloud-S3-Konsole" default>
    Die Zusammenführung von Konten mit S3-Buckets und die Konfiguration der Zugriffsbeschränkungen erfolgt im Tab "__Regeln__" des Buckets.
    ![S3 Account Assign](./images/S3_account_assign.png)
    Diese Benutzeroberfläche ermöglicht es Ihnen, dem Speicherkonto Zugang zum Bucket gemäß vier vordefinierten Rollen (Wartung, Schreiben und Lesen, Schreiben) zu gewähren.
  </TabItem>
  <TabItem value="AWS CLI" label="AWS CLI">
    Die präzise Verwaltung von Zugriffsregeln über den AWS-Client (`put-bucket-policy`) ist eine fortgeschrittene Aufgabe. Für die meisten Anwendungsfälle empfehlen wir, die Konsole Cloud Temple zu nutzen, um eine einfachere und sichere Konfiguration durchzuführen.
  </TabItem>
  <TabItem value="MC CLI" label="MC CLI">
    Die präzise Verwaltung von Zugriffsregeln über den Client `mc` (`policy`-Befehle) ist eine fortgeschrittene Aufgabe. Für die meisten Anwendungsfälle empfehlen wir, die Konsole Cloud Temple zu nutzen, um eine einfachere und sichere Konfiguration durchzuführen.
  </TabItem>
</Tabs>
