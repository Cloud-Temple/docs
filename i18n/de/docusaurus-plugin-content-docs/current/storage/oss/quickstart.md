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

## Auflisten aller S3-Buckets in Ihrem Tenant

Sie können auf alle Ihre Buckets über das Menü '__Objektspeicher__' in der Cloud Temple-Konsole zugreifen:

<img src={S3ListBucket} />

Sie können alle auf Ihrem Tenant erstellten und für den Zugriff auf den S3-Dienst autorisierten Konten über den Tab '__Speicherkonten__' einsehen.

<img src={S3Accounts} />

## Erstellen eines neuen Speicherkontos

Um ein Speicherkonto auf Ihrem Tenant zu erstellen, klicken Sie auf die Schaltfläche '__Neues Speicherkonto__' in der oberen rechten Ecke des Tabs '__Speicherkonten__':

<img src={S3CreateAccount} />

Die Plattform stellt Ihnen dann den Zugriffsschlüssel und den geheimen Schlüssel für Ihren Bucket zur Verfügung:

<img src={S3StorageKeys} />

__ACHTUNG:__ Die geheimen und Zugriffsschlüssel werden nur einmal angezeigt. Nach dieser ersten Anzeige ist es nicht mehr möglich, den geheimen Schlüssel erneut einzusehen. Es ist daher wichtig, diese Informationen sofort zu notieren; andernfalls müssen Sie ein neues Schlüsselpaar generieren.

Die Schlüsselregenerierung erfolgt in den Schlüsseloptionen durch Auswahl von "Zugriffsschlüssel zurücksetzen".

<img src={S3Keyregen} />

## Erstellen eines S3-Buckets

Um einen neuen Bucket zu erstellen, klicken Sie auf die Schaltfläche '__Neuer Bucket__' oben rechts auf dem Bildschirm:

<img src={S3Create} />

Es erscheint ein Fenster, in dem Sie Folgendes angeben müssen:

1. Die __Region__, in der Ihr Bucket erstellt werden soll,
2. Der __Typ__ des Buckets: Leistung oder Archivierung,
3. Der __Name__ Ihres Buckets (er muss eindeutig sein).

<img src={S3CreatePopup_001} />

Stand 3. April 2024 ist die verfügbare Region __FR1__ (Paris) und nur der Leistungstyp ist verfügbar.

Sie müssen auch wählen, wer auf Ihren Bucket zugreifen kann:

- __Privater__ Zugriff: Standardmäßig ist der Zugriff auf bestimmte Cloud Temple-IP-Adressen beschränkt.
- __Öffentlicher__ Zugriff: Der Zugriff ist für alle Internetadressen offen (insbesondere über die Regel 0.0.0.0/0). Eine Authentifizierung ist jedoch weiterhin erforderlich. Wir empfehlen diese Konfiguration aufgrund ihrer Sicherheitsimplikationen nicht.
- __Benutzerdefinierter__ Zugriff: Diese Option ermöglicht es Ihnen, die IPv4-Adressen oder Subnetz-Bereiche anzugeben, die Sie autorisieren möchten.

## Zuordnen eines Speicherkontos zu einem Bucket

Kontozuordnungen zu Buckets werden im Tab '__Richtlinien__' vorgenommen

<img src={S3AccountAssign} />

Diese Zuordnung gibt dem Speicherkonto Zugriff auf den Bucket. Es gibt vier Rollen:

1. __Betreuer__: Lese-, Schreib-, Rechteverwaltungs- und Richtlinienverwaltungsberechtigungen

Die S3-Berechtigungen hinter dieser Rolle:

```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. __Schreiber und Leser__: Lesen und Bearbeiten, Ändern, Löschen von Dateien in Buckets.

Die S3-Berechtigungen hinter dieser Rolle:

```json
{
    "name": "read_write",
    "permissions": [
        "s3:Get*"
        "s3:List*"
        "s3:*Object"
    ]
}
```

3. __Schreiber__: Lesen und Bearbeiten, Ändern, Löschen von Dateien in Buckets.

Die S3-Berechtigungen hinter dieser Rolle:

```json
{
    "name": "write_only",
    "permissions": [
        "s3:List*"
        "s3:*Object"
    ]
}
```

4. __Leser__: Lesen von Dateien in Buckets und Herunterladen.

Die S3-Berechtigungen hinter dieser Rolle:

```json
{
    "name": "read_only",
    "permissions": [
        "s3:Get*"
        "s3:List*"
    ]
}
```

<img src={S3AccountAccess} />

## Durchsuchen eines S3-Buckets

Wenn Sie auf einen Bucket-Namen klicken, greifen Sie zuerst auf den Tab '__Dateien__' zu, um seinen Inhalt zu sehen:

<img src={S3Files} />

Im Tab '__Einstellungen__' können Sie die Details Ihres S3-Buckets sehen:

<img src={S3Params} />

Sie sehen:

1. Den Namen des S3-Buckets,
2. Seine Region
3. Die Anzahl der enthaltenen Objekte und die Größe des Buckets in Bytes,
4. Seinen Endpunkt,
5. Die Lebenszykluseinstellungen, die das Ablaufdatum der Objekte im Bucket definieren. '__0__' entspricht einer unbegrenzten Aufbewahrung.

Sie können den Aufbewahrungsparameter über die Schaltfläche '__Bearbeiten__' im Lebenszyklusbereich ändern:

<img src={S3Lifecycle} />

Schließlich können Sie seine Zugriffstypologie ändern.

## Einschränken des Zugriffs auf Ihre S3-Buckets

Es ist sehr einfach, Zugriffsbeschränkungen für Ihre S3-Buckets zu konfigurieren. Bei der Erstellung eines Buckets haben Sie die Wahl zwischen drei Zugriffskonfigurationen:

<img src={S3CreatePopup_001} />

- __Privater__ Zugriff: Standardmäßig ist der Zugriff auf bestimmte Cloud Temple-IP-Adressen beschränkt.
- __Öffentlicher__ Zugriff: Der Zugriff ist für alle Internetadressen offen (insbesondere über die Regel 0.0.0.0/0). Wir empfehlen diese Konfiguration aufgrund ihrer Sicherheitsimplikationen nicht.
- __Benutzerdefinierter__ Zugriff: Diese Option ermöglicht es Ihnen, die IPv4-Adressen oder Subnetz-Bereiche anzugeben, die Sie autorisieren möchten:

<img src={S3CreatePopup_002} />

*IPv6-Unterstützung ist für die erste Hälfte des Jahres 2025 geplant.*

## Löschen eines S3-Buckets

Um einen Bucket zu löschen, verwenden Sie die mit dem Bucket verbundenen Aktionen, indem Sie die Option '__Löschen__' auswählen.

<img src={S3Delete} />

***ACHTUNG: Das Löschen ist endgültig und es gibt keine Möglichkeit, die Daten wiederherzustellen.***

## Wie wird das S3-Angebot von Cloud Temple abgerechnet?

Der Preis ist ein monatlicher Preis, pro GiB Speicher, der monatlich abgerechnet wird. Die Plattform zählt jedoch die Nutzung stündlich und rechnet auf einer monatlichen Basis von 720 Stunden ab.

Wenn Sie beispielsweise im Monat 30 GiB für 1 Stunde verbrauchen, dann nichts, und dann einige Tage später 30 GiB für 2 Stunden, beträgt die monatliche Rechnung *( Preis (1 x 30GiB) + 2 x Preis (30GiB) ) / 720* für den betreffenden Monat. Die Abrechnung erfolgt nachträglich.
