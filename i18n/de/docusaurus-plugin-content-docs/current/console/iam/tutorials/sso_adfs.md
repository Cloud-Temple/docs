---
title: Beispiel für eine Identitätsföderation mit Microsoft ADFS
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoAdfs_001 from '@site/docs/console/iam/tutorials/images/sso_adfs_001.png'
import ssoAdfs_002 from '@site/docs/console/iam/tutorials/images/sso_adfs_002.png'
import ssoAdfs_003 from '@site/docs/console/iam/tutorials/images/sso_adfs_003.png'
import ssoAdfs_004 from '@site/docs/console/iam/tutorials/images/sso_adfs_004.png'
import ssoAdfs_005 from '@site/docs/console/iam/tutorials/images/sso_adfs_005.png'
import ssoAdfs_006 from '@site/docs/console/iam/tutorials/images/sso_adfs_006.png'
import ssoAdfs_007 from '@site/docs/console/iam/tutorials/images/sso_adfs_007.png'
import ssoAdfs_008 from '@site/docs/console/iam/tutorials/images/sso_adfs_008.png'
import ssoAdfs_009 from '@site/docs/console/iam/tutorials/images/sso_adfs_009.png'
import ssoAdfs_010 from '@site/docs/console/iam/tutorials/images/sso_adfs_010.png'
import ssoAdfs_011 from '@site/docs/console/iam/tutorials/images/sso_adfs_011.png'
import ssoAdfs_012 from '@site/docs/console/iam/tutorials/images/sso_adfs_012.png'

Hier ist ein Beispiel für die Konfiguration des Authentifizierungsverzeichnisses einer Cloud Temple-Organisation mit __Microsoft ADFS__.

Die Konfiguration Ihres Microsoft-Verzeichnisses auf Ebene einer Cloud Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer in der Konsole.  
Dadurch wird eine Vervielfachung der Authentifizierungsfaktoren vermieden und die Angriffsfläche verringert.  
Wenn Ihre Benutzer bei ihrem Microsoft-Konto angemeldet sind, erfolgt die Authentifizierung bei den Diensten der Konsole transparent.

Nachfolgend die einzelnen Schritte zur Durchführung dieser Konfiguration:

## Voraussetzungen

Ihr Microsoft ADFS-Server muss auf [die Cloud Temple-URL](https://keycloak-shiva.cloud-temple.com/auth/) zugreifen können.

ADFS muss von den Netzwerken von Cloud Temple aus erreichbar sein und __ein TLS-Zertifikat einer öffentlichen Zertifizierungsstelle bereitstellen__.

Die Benutzer, die sich auf dem Portal anmelden möchten, müssen ihre E-Mail-Adresse, ihren Namen und Vornamen in der Active Directory angegeben haben.

## Schritt 1: Konfiguration des SSO (Single Sign-On) für Ihre Organisation anfordern

Dieser Teil der Konfiguration wird vom Cloud Temple-Team auf Ebene der Organisation durchgeführt.

Stellen Sie dazu in der Konsole __eine Supportanfrage__, in der Sie angeben, dass Sie Ihr Microsoft ADFS-Authentifizierungsverzeichnis konfigurieren möchten.

Bitte geben Sie in der Supportanfrage die folgenden Informationen an:

```
    Name Ihrer Organisation
    Name eines Ansprechpartners mit E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
    Öffentliche URL der Föderationsmetadaten des ADFS (<Domänenname des ADFS>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Beispiel: https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```

Sobald die Konfiguration auf Seiten der Konsole abgeschlossen ist, wird der angegebene Ansprechpartner informiert.

Das Cloud Temple-Supportteam übermittelt Ihnen eine URL, die etwa wie folgt aussieht: [https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor](https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor)

*Sie können die URL zum Testen in einen Browser einfügen. Wenn sie korrekt funktioniert, sollte ein XML-Dokument angezeigt werden.*

## Schritt 2: Durchführung der ADFS-Konfiguration

### Konfiguration der Authentifizierungsföderation

#### Hinzufügen einer Vertrauensstellung der vertrauenden Seite

Öffnen Sie auf Ihrem ADFS-Server __„Vertrauensstellung der vertrauenden Seite hinzufügen“__.

<img src={ssoAdfs_001} />

### Konfigurieren der „Claims“

Claims ermöglichen die Bereitstellung von Informationen im Token, der an die Cloud Temple-Konsole übermittelt wird.

Sie übertragen die Benutzerinformationen des angemeldeten Benutzers, die für die ordnungsgemäße Funktionsweise der verschiedenen Dienste erforderlich sind, wie beispielsweise E-Mail-Adresse, Vor- und Nachname.

<img src={ssoAdfs_002} />

Wählen Sie „Daten importieren, die online oder im lokalen Netzwerk verfügbar sind, bezüglich der vertrauenswürdigen Partei“ aus und geben Sie die von Cloud Temple-Support bereitgestellte URL ein.

<img src={ssoAdfs_003} />

Sie können optional einen Namen und eine Beschreibung für die vertrauenswürdige Partei angeben.

<img src={ssoAdfs_004} />

Standardmäßig erlauben wir allen Zugriff, es ist jedoch möglich, __„Nur bestimmte Gruppen zulassen“__ auszuwählen, um die Gruppe(n) auszuwählen, die Zugriff auf die Dienste der Konsole über ADFS erhalten.

<img src={ssoAdfs_005} />

Nach Abschluss dieser Schritte ist die Konfiguration der vertrauenswürdigen Partei abgeschlossen.

<img src={ssoAdfs_006} />

Anschließend müssen Sie die Ausstellungsrichtlinie für die Claims dieser neuen vertrauenswürdigen Partei bearbeiten.

<img src={ssoAdfs_007} />

Klicken Sie auf „Regel hinzufügen“ und wählen Sie den Vorlagentyp „Eingehende Claim transformieren“ aus.

<img src={ssoAdfs_008} />

Geben Sie nun die Informationen wie in der folgenden Abbildung angegeben ein.

<img src={ssoAdfs_009} />

### Claims hinzufügen

Fügen Sie eine zweite Regel hinzu, diesmal mit der Vorlage „LDAP-Attribute als Ansprüche senden“.

<img src={ssoAdfs_010} />

Wählen Sie den Attributspeicher aus und fügen Sie die Attribute „E-Mail-Addresses, Given-Name, Surname und SAM-Account-Name“ hinzu, wie im folgenden Screenshot gezeigt.

<img src={ssoAdfs_011} />

Sie müssen die Änderungen nur noch übernehmen.

## Schritt 3: Abschluss

Sie können die Konfiguration nun testen, indem Sie die Konsole aufrufen und auf die Schaltfläche für die ADFS-Authentifizierung des Kunden klicken; in diesem Beispiel ist dies __„ADFS Test“__.

<img src={ssoAdfs_012} />
