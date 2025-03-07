---
title: Beispiel für eine Identitätsföderation mit Microsoft ADFS
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

Die Konfiguration Ihres Microsoft-Verzeichnisses auf der Ebene einer Cloud Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer auf der Shiva-Konsole.
Dies verhindert eine Vervielfachung der Authentifizierungsfaktoren und reduziert die Angriffsfläche.
Wenn Ihre Benutzer bei ihrem Microsoft-Konto authentifiziert sind, wird die Authentifizierung bei den Diensten der Shiva-Konsole transparent sein.

Hier sind die verschiedenen Schritte zur Durchführung dieser Konfiguration:


## Voraussetzungen
Ihr Microsoft ADFS-Server muss auf die folgende Cloud Temple-URL zugreifen können: https://keycloak-shiva.cloud-temple.com/auth/.

Der ADFS muss aus den Netzwerken von Cloud Temple erreichbar sein und __ein TLS-Zertifikat von einer öffentlichen CA ausstellen__.

Die Benutzer, die sich auf dem Portal anmelden möchten, müssen ihre E-Mail, ihren Vor- und Nachnamen im Active Directory hinterlegt haben.

## Schritt 2: Anfordern der Konfiguration von SSO (Single Sign-On) für Ihre Organisation

Dieser Teil der Konfiguration wird auf Organisationsebene vom Cloud Temple-Team durchgeführt.

Führen Sie dazu __eine Support-Anfrage__ in der Konsole durch und geben Sie an, dass Sie Ihr Microsoft ADFS-Authentifizierungsverzeichnis konfigurieren möchten.

Bitte geben Sie in der Support-Anfrage die folgenden Informationen an:
```
    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit E-Mail und Telefonnummer zur abschließenden Konfiguration
    Öffentliche URL der Metadaten der ADFS-Föderation (<Domänenname des ADFS>/FederationMetadata/2007-06/FederationMetadata.xml)
    (Beispiel : https://adfs.test.local/FederationMetadata/2007-06/FederationMetadata.xml)
```
Sobald die Konfiguration auf der Shiva-Konsole abgeschlossen ist, wird der angegebene Kontakt informiert.

Das Cloud Temple Support-Team stellt Ihnen eine URL zur Verfügung, die in etwa so aussieht: https://keycloak-shiva.cloud-temple.com/auth/realms/companytest/broker/adfs_test/endpoint/descriptor

*Sie können die URL in einen Browser einfügen, um sie zu testen. Wenn sie korrekt funktioniert, sollten Sie ein XML sehen.*

## Schritt 3: Durchführung der ADFS-Konfiguration
### Konfiguration der Authentifizierungsföderation

#### Hinzufügen einer Vertrauensstellung

Gehen Sie auf Ihrem ADFS-Server auf __"Vertrauensstellung einer vertrauenden Partei hinzufügen"__.

<img src={ssoAdfs_001} />

### Konfigurieren der "Claims"
Die Claims liefern Informationen an das Token, das an die Cloud Temple-Konsole übermittelt wird.

Sie übermitteln Informationen des angemeldeten Benutzers, die für das ordnungsgemäße Funktionieren der verschiedenen Dienste erforderlich sind, wie z.B. seine E-Mail, seinen Vor- und Nachnamen.

<img src={ssoAdfs_002} />

Wählen Sie "Importieren von Daten über die vertrauende Partei, die online oder im lokalen Netzwerk veröffentlicht sind" und geben Sie die vom Cloud Temple Support bereitgestellte URL ein.

<img src={ssoAdfs_003} />

Sie können einen Namen und eine Beschreibung für die vertrauende Partei angeben, dieser Teil ist optional.

<img src={ssoAdfs_004} />

Standardmäßig erlauben wir jedem den Zugriff, aber es ist möglich, __"Eine bestimmte Gruppe zulassen"__ auszuwählen, um die Gruppen zu wählen, die über das ADFS auf die Dienste der Shiva-Konsole zugreifen dürfen.

<img src={ssoAdfs_005} />

Nachdem Sie alle diese Schritte durchgeführt haben, haben Sie die Konfiguration der vertrauenden Partei abgeschlossen.

<img src={ssoAdfs_006} />

Anschließend müssen Sie die Anspruchsausstellungsrichtlinie dieser neuen vertrauenden Partei bearbeiten.

<img src={ssoAdfs_007} />

Klicken Sie auf "Regel hinzufügen" und geben Sie das Modell "Eingehenden Anspruch transformieren" an.

<img src={ssoAdfs_008} />

Sie müssen nur die Informationen wie im Screenshot unten angegeben eingeben.

<img src={ssoAdfs_009} />

### Claims hinzufügen
Fügen Sie eine zweite Regel hinzu, dieses Mal mit dem Modell "LDAP-Attribute als Claims senden".

<img src={ssoAdfs_010} />

Wählen Sie den Attributspeicher und fügen Sie die Attribute "E-Mail-Adressen, Vorname, Nachname und SAM-Account-Name" wie im Screenshot unten angegeben hinzu.

<img src={ssoAdfs_011} />

Sie brauchen nur noch die Änderungen anzuwenden.

## Schritt 3: Abschluss

Sie können nun testen, indem Sie sich auf der Shiva-Konsole anmelden und auf die Schaltfläche für die clientseitige ADFS-Authentifizierung klicken; in diesem Beispiel ist es __"ADFS Test"__

<img src={ssoAdfs_012} />