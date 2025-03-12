---
title: Beispiel für Identitätsföderation mit Microsoft EntraID
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

Hier ist ein Beispiel für die Konfiguration des Authentifizierungsverzeichnisses einer Cloud Temple-Organisation mit __Microsoft EntraID__ (Azure Active Directory).

Die Konfiguration Ihres Microsoft-Verzeichnisses auf der Ebene einer Cloud Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer an der Shiva-Konsole. Dies hilft, die Vervielfachung von Authentifizierungsfaktoren zu vermeiden und die Angriffsfläche zu reduzieren.

Wenn Ihre Benutzer bei ihrem Microsoft-Konto authentifiziert sind, wird die Authentifizierung bei den Diensten der Shiva-Konsole transparent sein.

Hier sind die verschiedenen Schritte zur Durchführung dieser Konfiguration:

## Schritt 1: SSO-Konfiguration auf der Microsoft Azure-Seite

### Registrierung einer neuen Azure-Anwendung (Azure-Portal)

Für die Erstellung der __App-Registrierung__ müssen Sie zum Microsoft Azure-Portal gehen, dann in Microsoft EntraID, __"ADD > App Registration"__

Auf der Seite "Register an application" geben Sie bitte Folgendes an:

```
- __Name__: Geben Sie "__SHIVA__" an
- __Supported account types__: __Accounts in this organizational directory only__ (__<Ihr Azure-Tenant>__ only - Single tenant)
- __Redirect URL__: Zunächst nicht konfigurieren. Die URL wird vom Cloud Temple-Support bereitgestellt und später in dieses Feld eingetragen.
```

<img src={ssoEntra_001} />

Die Informationen __Application (client) ID__ und __Directory (tenant) ID__ sind nützlich, um sie in der Support-Anfrage an das Cloud Temple-Team zu übermitteln, um die Microsoft EntraID-Authentifizierung auf der Ebene Ihrer Organisation zu aktivieren.

<img src={ssoEntra_002} />

### Definieren eines Geheimnisses

Erstellen Sie auf der Registerkarte "Certificates & secrets" ein neues Geheimnis.

*Hinweis: Das Ablaufdatum des Geheimnisses kann nicht mehr als 24 Monate betragen, auch nicht mit einem benutzerdefinierten Ablaufdatum.*

<img src={ssoAad_004} />

Das generierte Geheimnis muss in der Support-Anfrage angegeben werden:

<img src={ssoAad_005} />

### Definieren des EntraID-Tokens

Das EntraID-Token ist für die Authentifizierungskonfiguration notwendig.

Klicken Sie im Menü __"Token Configuration"__ auf __"Add optional claim"__. Sie müssen "ID" als Token-Typ auswählen und "email" ankreuzen.

<img src={ssoAad_006} />

Die Azure-Oberfläche wird Sie fragen, ob Sie eine Berechtigung hinzufügen möchten, die es Ihnen ermöglicht, die E-Mail eines Benutzers zu lesen (Microsoft Graph email), kreuzen Sie das Kästchen an und bestätigen Sie.

<img src={ssoAad_007} />

Gehen Sie dann zu "API permissions" und klicken Sie auf __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Zusätzliche Sicherheitskonfigurationen (optional, aber empfohlen)

Standardmäßig ermöglicht Microsoft EntraID in der konfigurierten Form jedem Benutzer in Ihrem Azure-Tenant, sich mit Ihrer Cloud Temple-Organisation zu verbinden.
Es ist möglich, den Zugriff auf der Ebene der __"App Registration"__ einzuschränken, um nur einer Liste von Benutzern oder Gruppen die Verbindung zu Ihrer Cloud Temple-Organisation zu erlauben.

Hier ist die zu befolgende Vorgehensweise:

#### Zugriff auf zusätzliche "App Registration"-Einstellungen

##### Option 1

Gehen Sie zur Registerkarte "Overview" und klicken Sie auf den Anwendungsnamen (den Link neben "Managed application").

<img src={ssoAad_009} />

##### Option 2

Navigieren Sie zu "Enterprise applications" und suchen Sie mit dem Namen der zuvor erstellten Anwendung.

<img src={ssoAad_010} />

#### Einschränkung der Authentifizierung auf Benutzer, die der Anwendung zugewiesen sind

Geben Sie hier die Notwendigkeit einer Benutzerzuweisung zur Anwendung an, um die Authentifizierung zu autorisieren:

<img src={ssoAad_011} />

#### Zuweisung von Benutzern und Gruppen zur Anwendung

Nur die Gruppen und Benutzer, die der Anwendung zugewiesen sind, können sich über die App-Registrierung mit Ihrer Cloud Temple-Organisation verbinden.

<img src={ssoAad_012} />

Schließlich müssen Sie nur noch die Zuweisung anwenden, indem Sie auf "Assign" klicken.

<img src={ssoAad_013} />

Jetzt können sich die der Anwendung zugewiesenen Benutzer über die erstellte Anwendung mit Ihrer Cloud Temple-Organisation verbinden.

## Schritt 2: Anforderung der SSO-Konfiguration (Single Sign-On) für Ihre Organisation

Dieser Teil der Konfiguration wird auf Organisationsebene vom Cloud Temple-Team durchgeführt.

Stellen Sie dazu eine __Support-Anfrage__ in der Konsole, in der Sie Ihren Wunsch nach Konfiguration von Microsoft EntraID SSO angeben.

Bitte geben Sie die folgenden Informationen in der Support-Anfrage an:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Application ID (eindeutige Kennung, die mit der zuvor erstellten Anwendung verknüpft ist)
    Directory ID (entspricht der Azure AD-ID des Azure-Tenants)
    Secret (Geheimnis, das mit der zuvor erstellten Anwendung verknüpft ist)

Sobald die Konfiguration auf der Seite der Shiva-Konsole abgeschlossen ist, wird der angegebene Kontakt informiert.

## Schritt 3: Abschluss der Konfiguration

Klicken Sie auf der Startseite der App-Registrierung im Übersichtsmenü auf "Add a Redirect URL".

<img src={ssoAad_014} />

Navigieren Sie dann zu "Add a platform" und fügen Sie eine vom Typ Web hinzu.

<img src={ssoAad_015} />

Geben Sie einfach die vom Product Applications Team bereitgestellte "Redirect URL" ein.

<img src={ssoAad_016} />

Sie sollten dieses Ergebnis erhalten, sobald die "Redirect URL" hinzugefügt wurde.

<img src={ssoAad_017} />

Die Konfiguration der "Redirect URL" kann einige Minuten dauern, bis sie wirksam wird.
Sobald alle Schritte abgeschlossen sind, können Sie sich über Ihr SSO bei Ihrer Cloud Temple-Organisation authentifizieren.

<img src={ssoAad_018} />
