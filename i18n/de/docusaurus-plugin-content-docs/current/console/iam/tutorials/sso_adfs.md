---
title: Beispiel für Identitätsföderation mit Microsoft ADFS
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoAdfs_001 from './images/sso_adfs_001.png'
import ssoAdfs_002 from './images/sso_adfs_002.png'
import ssoAdfs_003 from './images/sso_adfs_003.png'
import ssoAdfs_004 from './images/sso_adfs_004.png'
import ssoAdfs_005 from './images/sso_adfs_005.png'
import ssoAdfs_006 from './images/sso_adfs_006.png'
import ssoAdfs_007 from './images/sso_adfs_007.png'
import ssoAdfs_008 from './images/sso_adfs_008.png'
import ssoAdfs_009 from './images/sso_adfs_009.png'
import ssoAdfs_010 from './images/sso_adfs_010.png'
import ssoAdfs_011 from './images/sso_adfs_011.png'
import ssoAdfs_012 from './images/sso_adfs_012.png'

Hier ist ein Beispiel für die Konfiguration des Authentifizierungsverzeichnisses einer Cloud Temple-Organisation mit __Microsoft ADFS__.

Die Konfiguration Ihres Microsoft-Verzeichnisses auf der Ebene einer Cloud Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer an der Shiva-Konsole.
Dies hilft, die Vervielfachung von Authentifizierungsfaktoren zu vermeiden und die Angriffsfläche zu reduzieren.
Wenn Ihre Benutzer bei ihrem Microsoft-Konto authentifiziert sind, wird die Authentifizierung bei den Diensten der Shiva-Konsole transparent sein.

Hier sind die verschiedenen Schritte zur Durchführung dieser Konfiguration:

## Voraussetzungen

Ihr Microsoft ADFS-Server muss auf [die Cloud Temple-URL](https://keycloak-shiva.cloud-temple.com/auth/) zugreifen können.

Der ADFS muss von den Cloud Temple-Netzwerken aus erreichbar sein und __ein TLS-Zertifikat einer öffentlichen Zertifizierungsstelle bereitstellen__.

Benutzer, die sich am Portal anmelden möchten, müssen ihre E-Mail-Adresse, Vor- und Nachnamen im Active Directory hinterlegt haben.

## Schritt 2: Anforderung der SSO-Konfiguration (Single Sign-On) für Ihre Organisation

Dieser Teil der Konfiguration wird auf Organisationsebene vom Cloud Temple-Team durchgeführt.

Stellen Sie dazu eine __Support-Anfrage__ in der Konsole, in der Sie Ihren Wunsch nach Konfiguration Ihres Microsoft ADFS-Authentifizierungsverzeichnisses angeben.

Bitte geben Sie die folgenden Informationen in der Support-Anfrage an:

```
    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Öffentliche URL der ADFS-Föderationsmetadaten (<adfs-Domänenname>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Beispiel: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Sobald die Konfiguration auf der Seite der Shiva-Konsole abgeschlossen ist, wird der angegebene Kontakt informiert.

Das Cloud Temple-Support-Team wird Ihnen eine URL zur Verfügung stellen, die wie folgt aussieht: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*Sie können die URL in einen Browser einfügen, um sie zu testen. Wenn sie korrekt funktioniert, sollte ein XML angezeigt werden*

## Schritt 3: Durchführung der ADFS-Konfiguration

### Konfiguration der Authentifizierungsföderation

#### Hinzufügen einer Vertrauensstellung für die vertrauende Seite

Gehen Sie auf Ihrem ADFS-Server zu __"Vertrauensstellung für die vertrauende Seite hinzufügen"__.

<img src={ssoAdfs_001} />

### Konfigurieren der "Claims"

Claims stellen Informationen für das Token bereit, das an die Cloud Temple-Konsole übermittelt wird.

Sie übertragen die Informationen des angemeldeten Benutzers, die für das ordnungsgemäße Funktionieren der verschiedenen Dienste erforderlich sind, wie z.B. seine E-Mail, seinen Vor- und Nachnamen.

<img src={ssoAdfs_002} />

Wählen Sie "Daten über die vertrauende Seite importieren, die online oder in einem lokalen Netzwerk veröffentlicht wurden" und geben Sie die vom Cloud Temple-Support bereitgestellte URL ein.

<img src={ssoAdfs_003} />

Sie können einen Namen und eine Beschreibung für die vertrauende Seite eingeben; dieser Teil ist optional.

<img src={ssoAdfs_004} />

Standardmäßig erlauben wir allen Zugriff, aber es ist möglich, __"Eine bestimmte Gruppe zulassen"__ zu wählen, um die Gruppe(n) auszuwählen, die über ADFS auf die Dienste der Shiva-Konsole zugreifen dürfen.

<img src={ssoAdfs_005} />

Sobald alle diese Schritte abgeschlossen sind, haben Sie die Konfiguration der vertrauenden Seite beendet.

<img src={ssoAdfs_006} />

Sie müssen dann die Richtlinie für die Ausgabe von Ansprüchen für diese neue vertrauende Seite bearbeiten.

<img src={ssoAdfs_007} />

Klicken Sie auf "Regel hinzufügen" und geben Sie die Vorlage an, die "Einen eingehenden Anspruch transformieren" ist.

<img src={ssoAdfs_008} />

Sie müssen nur die Informationen eingeben, wie im Screenshot unten gezeigt.

<img src={ssoAdfs_009} />

### Hinzufügen der Claims

Fügen Sie eine zweite Regel mit der Vorlage "LDAP-Attribute als Ansprüche senden" hinzu.

<img src={ssoAdfs_010} />

Wählen Sie den Attributspeicher aus und fügen Sie die Attribute "E-Mail-Adressen, Vorname, Nachname und SAM-Kontoname" hinzu, wie im Screenshot unten gezeigt.

<img src={ssoAdfs_011} />

Sie müssen nur die Änderungen anwenden.

## Schritt 3: Finalisierung

Sie können nun testen, indem Sie zur Shiva-Konsole gehen und auf die Schaltfläche klicken, die der ADFS-Client-Authentifizierung entspricht; in diesem Beispiel ist es __"ADFS Test"__

<img src={ssoAdfs_012} />
