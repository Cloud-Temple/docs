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


## Auflisten aller S3-Buckets Ihres Tenants

Sie können auf alle Ihre Buckets über das Menü '__Objektspeicher__' der Cloud Temple-Konsole zugreifen:

<img src={S3ListBucket} />

Sie können alle auf Ihrem Tenant erstellten Konten, die zum Zugriff auf den S3-Service berechtigt sind, über die Registerkarte '__Speicherkonten__' einsehen.

<img src={S3Accounts} />

## Erstellen eines neuen Speicherkontos

Die Erstellung eines Speicherkontos auf Ihrem Tenant erfolgt, indem Sie auf die Schaltfläche '__Neues Speicherkonto__' oben rechts in der Registerkarte '__Speicherkonten__' klicken:

<img src={S3CreateAccount} />

Die Plattform gibt Ihnen dann den Zugriffsschlüssel und den geheimen Schlüssel für Ihren Bucket:

<img src={S3StorageKeys} />

__ACHTUNG:__ Die geheimen und Zugriffsschlüssel werden nur einmal angezeigt. Nach diesem ersten Erscheinen ist es unmöglich, den geheimen Schlüssel erneut einzusehen. Es ist daher wichtig, diese Informationen sofort zu notieren; andernfalls müssen Sie ein neues Schlüsselpaar generieren.

Die Neugenerierung erfolgt über die Optionen des Schlüssels, indem Sie die Option "Zugriffsschlüssel zurücksetzen" wählen.

<img src={S3Keyregen} />


## Erstellen eines S3-Buckets

Das Erstellen eines neuen Buckets erfolgt durch Klicken auf die Schaltfläche '__Neuer Bucket__' oben rechts auf dem Bildschirm:

<img src={S3Create} />

Es erscheint ein Fenster, in dem Sie folgendes angeben müssen:

1. Die **Region**, in der Ihr Bucket erstellt werden soll,
2. Der **Typ** des Buckets: Leistungsfähig oder Archivierung,
3. Der **Name** Ihres Buckets (muss eindeutig sein).

<img src={S3CreatePopup_001} />

Ab dem 3. April 2024 ist die verfügbare Region **FR1** (Paris) und nur der leistungsfähige Typ ist verfügbar.

Sie müssen auch festlegen, wer auf Ihren Bucket zugreifen kann:

- **Privater** Zugriff: Standardmäßig ist der Zugriff auf spezifische IP-Adressen von Cloud Temple beschränkt.
- **Öffentlicher** Zugriff: Der Zugriff ist für alle Internetadressen geöffnet (insbesondere durch die Regel 0.0.0.0/0). Eine Authentifizierung ist jedoch weiterhin erforderlich. Wir raten aufgrund der Sicherheitsimplikationen von dieser Konfiguration ab.
- **Benutzerdefinierter** Zugriff: Mit dieser Option können Sie die IPv4-Adressen oder die Netzwerksubnetzbereiche angeben, die Sie zulassen möchten.

## Zuordnung eines Speicherkontos zu einem Bucket

Die Kontozuweisungen zu Buckets werden in der Registerkarte '__Richtlinien__' vorgenommen

<img src={S3AccountAssign} />

Diese Zuordnung ermöglicht es, dem Speicherkonto den Zugriff auf den Bucket zu gewähren. Es gibt vier Rollen:

1. **Verwalter**: Lese-, Schreib-, Rechteverwaltungs- und Richtlinienverwaltungsrechte

Die S3-Berechtigungen hinter dieser Rolle:
```json
{
    "name": "maintainer",
    "permissions": [
        "s3:*"
    ]
}
```

2. **Schreiber und Leser**: Lesen und Bearbeiten, Ändern, Löschen von Dateien in den Buckets.

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

3. **Schreiber**: Lesen und Bearbeiten, Ändern, Löschen von Dateien in den Buckets.

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

4. **Leser**: Lesen und Herunterladen von Dateien in den Buckets.

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

Wenn Sie auf den Namen eines Buckets klicken, haben Sie zunächst Zugriff auf die Registerkarte '__Dateien__', um deren Inhalt zu sehen:

<img src={S3Files} />

In der Registerkarte '__Einstellungen__' können Sie die Detailinformationen Ihres S3-Buckets sehen:

<img src={S3Params} />

Sie haben dann:

1. Den Namen des S3-Buckets,
2. Seine Region
3. Die Anzahl der darin enthaltenen Objekte und die Größe des Buckets in Byte,
4. Seinen Endpunkt,
5. Die Lebenszykluseinstellungen, die insbesondere das Verfallsdatum der Bucket-Objekte definieren. '__0__' entspricht einer unbegrenzten Aufbewahrung.

Sie können den Aufbewahrungsparameter über die Schaltfläche '__Bearbeiten__' des Lebenszyklus ändern:

<img src={S3Lifecycle} />

Schließlich können Sie dessen Zugriffstypologie ändern.

## Beschränkungen des Zugriffs auf Ihre S3-Buckets

Es ist sehr einfach, die Zugriffsbeschränkungen auf Ihre S3-Buckets zu konfigurieren. Beim Erstellen eines Buckets haben Sie die Wahl zwischen drei Zugriffskonfigurationen:

<img src={S3CreatePopup_001} />

- **Privater** Zugriff: Standardmäßig ist der Zugriff auf spezifische IP-Adressen von Cloud Temple beschränkt.
- **Öffentlicher** Zugriff: Der Zugriff ist für alle Internetadressen geöffnet (insbesondere durch die Regel 0.0.0.0/0). Wir raten aufgrund der Sicherheitsimplikationen von dieser Konfiguration ab.
- **Benutzerdefinierter** Zugriff: Mit dieser Option können Sie die IPv4-Adressen oder die Netzwerksubnetzbereiche angeben, die Sie zulassen möchten:

<img src={S3CreatePopup_002} />

*Die IPv6-Unterstützung ist für das erste Halbjahr 2025 geplant.*

## Löschen eines S3-Buckets

Das Löschen eines Buckets erfolgt in den mit dem Bucket verknüpften Aktionen, indem Sie die Option '__Löschen__' wählen.

<img src={S3Delete} />

_**ACHTUNG: Das Löschen ist endgültig und es besteht keine Möglichkeit, die Daten wiederherzustellen.**_


## Wie wird das S3-Angebot von Cloud Temple abgerechnet?

Der Preis ist ein monatlicher Preis, pro gespeichertes GiB, monatlich abgerechnet. Die Plattform zählt jedoch die Nutzung stundenweise und berechnet die Abrechnung auf einer monatlichen Basis von 720 Stunden.

Zum Beispiel, wenn Sie im Monat 30 GiB für 1 Stunde und dann nichts, und ein paar Tage später 30 GiB für 2 Stunden nutzen, wird die monatliche Rechnung *(Preis (1 x 30 GiB) + 2 x Preis (30 GiB)) / 720* für den betreffenden Monat betragen. Die Abrechnung erfolgt nachträglich.
