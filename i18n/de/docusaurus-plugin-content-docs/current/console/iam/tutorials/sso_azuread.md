

---
title: Beispiel der Identitätsfederierung mit Microsoft EntraID
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from './images/sso_entra_001.png'
import ssoEntra_002 from './images/sso_entra_002.png'
import ssoAad_004 from './images/sso_aad_004.png'
import ssoAad_005 from './images/sso_aad_005.png'
import ssoAad_006 from './images/sso_aad_006.png'
import ssoAad_007 from './images/sso_aad_007.png'
import ssoAad_008 from './images/sso_aad_008.png'
import ssoAad_009 from './images/sso_aad_009.png'
import ssoAad_010 from './images/sso_aad_010.png'
import ssoAad_011 from './images/sso_aad_011.png'
import ssoAad_012 from './images/sso_aad_012.png'
import ssoAad_013 from './images/sso_aad_013.png'
import ssoAad_014 from './images/sso_aad_014.png'
import ssoAad_015 from './images/sso_aad_015.png'
import ssoAad_016 from './images/sso_aad_016.png'
import ssoAad_017 from './images/sso_aad_017.png'
import ssoAad_018 from './images/sso_aad_018.png'

Hier ist ein Beispiel für die Konfiguration des Authentifizierungsrepositorys einer Cloud Temple-Organisation mit __Microsoft EntraID__ (Azure Active Directory).

Die Konfiguration Ihres Microsoft-Repositorys auf Ebene einer Cloud Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer auf der Shiva-Konsole. Dies vermeidet die Multiplikation der Authentifizierungsfaktoren und verringert die Angriffsfläche.

Wenn Ihre Benutzer über ihre Microsoft-Konten authentifiziert werden, ist die Authentifizierung für die Dienste der Shiva-Konsole transparent.

Hier sind die verschiedenen Schritte zur Durchführung dieser Konfiguration:



## Schritt 1: Konfiguration des SSO auf Microsoft Azure



### Registrierung einer neuen Azure-Anwendung (Azure-Portal)

Für die __Anwendungsregistrierung__ müssen Sie sich im Microsoft Azure-Portal begeben und dann in Microsoft EntraID auf __"Hinzufügen > Anwendung registrieren"__ klicken.

Auf der Seite "Anwendung registrieren" geben Sie bitte folgende Informationen an:

```
- __Name__: Geben Sie "__SHIVA__" an
- __Unterstützte Kontotypen__: __Nur Konten in diesem Organisationsverzeichnis__ (__<Ihr Azure-Mandant>__ nur - Einzelmandant)
- __Umleitungs-URL__: Nicht in der ersten Zeit konfigurieren. Die URL wird vom Cloud Temple-Support bereitgestellt und später in dieses Feld eingefügt.
```

<img src={ssoEntra_001} />

Die Informationen zur __Anwendungs-(Client-)ID__ und __Verzeichnis-(Mandanten-)ID__ sind die Informationen, die Sie bei der Supportanfrage an das Cloud Temple-Team zur Aktivierung der Microsoft EntraID-Authentifizierung in Ihrem Unternehmen bereitstellen müssen.

<img src={ssoEntra_002} />



### Definition eines Geheimnisses

Im Tab "Zertifikate & Geheimnisse" ein neues Geheimnis erstellen.

*Hinweis: Das Ablaufdatum des Geheimnisses darf nicht länger als 24 Monate betragen, auch bei einem benutzerdefinierten Ablaufdatum.*

<img src={ssoAad_004} />

Das generierte Geheimnis muss in der Supportanfrage angegeben werden:

<img src={ssoAad_005} />



### Definition des EntraID-Tokens

Der EntraID-Token ist für die Konfiguration der Authentifizierung erforderlich.

Im Menü __"Token Configuration"__ klicken Sie auf __"Add optional claim"__. Sie müssen „ID“ als Token-Typ auswählen und „E-Mail“ aktivieren.

<img src={ssoAad_006} />

Die Azure-Oberfläche fragt Sie, ob Sie eine Berechtigung hinzufügen möchten, die es Ihnen ermöglichen wird, die E-Mail eines Benutzers zu lesen (Microsoft Graph E-Mail), aktivieren Sie das Kontrollkästchen und bestätigen Sie.

<img src={ssoAad_007} />

Danach gehen Sie zu „API-Berechtigungen“ und klicken Sie auf __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />



### Zusätzliche Sicherheitskonfigurationen (optional, aber empfohlen)

Standardmäßig gewährt Microsoft EntraID, wie konfiguriert, jedem Benutzer Ihres Azure-Mandanten die Möglichkeit, sich bei Ihrer Cloud Temple-Organisation anzumelden.
Es ist möglich, den Zugriff auf der Ebene von __"App Registration"__ zu beschränken, um nur eine Liste von Benutzern oder Gruppen zu autorisieren, sich bei Ihrer Cloud Temple-Organisation anzumelden.

Hier ist die Vorgehensweise:



#### Zugriff auf zusätzliche Einstellungen "App Registration"



##### Option 1

Gehen Sie zu dem Tab "Overview" und klicken Sie auf den Namen der Anwendung (der Link direkt nach "Managed application").

<img src={ssoAad_009} />



##### Option 2

Gehen Sie zu "Enterprise-Anwendungen" und suchen Sie mit dem Namen der zuvor erstellten Anwendung.

<img src={ssoAad_010} />



#### Authentifizierungsbeschränkung für benannte Benutzer der Anwendung

Hier die Notwendigkeit angeben, dass ein Benutzer der Anwendung zugewiesen werden muss, um die Authentifizierung zu ermöglichen:

<img src={ssoAad_011} />



#### Zuweisung von Benutzern und Gruppen zur Anwendung

Nur die zugewiesenen Gruppen und Benutzer können sich über die Anwendungsregistrierung bei Ihrer Cloud Temple-Organisation anmelden.

<img src={ssoAad_012} />

Schließlich müssen Sie nur noch die Zuweisung anwenden, indem Sie auf „Zuweisen“ klicken.

<img src={ssoAad_013} />

Ab jetzt können die zugewiesenen Benutzer sich über die erstellte Anwendung bei Ihrer Cloud Temple-Organisation anmelden.



## Schritt 2: Anfrage zur SSO-Konfiguration Ihrer Organisation

Diese Konfigurationsphase erfolgt auf Ebene der Organisation durch das Cloud temple-Team.

Dazu senden Sie __eine Supportanfrage__ in der Konsole, in der Sie Ihr Interesse an der Einrichtung einer Microsoft EntraID-SSO angeben.

Geben Sie bei der Supportanfrage folgende Informationen an:
    Der Name Ihrer Organisation
    Der Name einer Kontaktperson mit ihrer E-Mail-Adresse und Telefonnummer, um die Konfiguration abzuschließen
    Anwendungs-ID (eindeutiger Bezeichner der zuvor erstellten Anwendung)
    Verzeichnis-ID (entspricht der Azure AD-Tenant-ID des Azure-Verzeichnisses)
    Geheimnis (dem Anwendungsobjekt zugeordnetes Geheimnis)

Sobald die Konfiguration auf der Shiva-Konsole durchgeführt wurde, wird die angegebene Kontaktperson benachrichtigt.



## Schritt 3: Abschluss der Konfiguration

Auf der Startseite der App-Registrierung im Übersichtsmenü klicken Sie auf "Redirect-URL hinzufügen".

<img src={ssoAad_014} />

Gehen Sie anschließend zu "Plattform hinzufügen" und fügen Sie eine Plattform des Typs Web hinzu.

<img src={ssoAad_015} />

Geben Sie einfach die von der Produktions-Team Applications bereitgestellte "Redirect-URL" ein.

<img src={ssoAad_016} />

Sie sollten das folgende Ergebnis erhalten, nachdem die "Redirect-URL" hinzugefügt wurde.

<img src={ssoAad_017} />

Die Konfiguration der "Redirect-URL" kann einige Minuten dauern, bis sie wirksam wird.
Nach Abschluss aller Schritte können Sie sich bei Ihrer Cloud Temple-Organisation über Ihr SSO authentifizieren.

<img src={ssoAad_018} />