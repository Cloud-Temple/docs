---
title: Beispiel zur Einrichtung der Identitätsföderation mit Microsoft EntraID
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


Hier ist ein Beispiel für die Konfiguration des Authentifizierungsverzeichnisses einer Cloud Temple Organisation mit __Microsoft EntraID__ (Azure Active Directory).

Die Konfiguration Ihres Microsoft-Verzeichnisses auf Organisationsebene von Cloud Temple erleichtert die Authentifizierung Ihrer Nutzer auf der Shiva-Konsole. Dies vermeidet die Vervielfachung von Authentifizierungsfaktoren und reduziert die Angriffsfläche.

Wenn Ihre Nutzer bei ihrem Microsoft-Konto authentifiziert sind, wird die Authentifizierung bei den Diensten der Shiva-Konsole transparent.

Hier sind die verschiedenen Schritte zur Durchführung dieser Konfiguration:

## Schritt 1: Konfiguration des SSO auf Seiten von Microsoft Azure

### Registrierung einer neuen Azure-Anwendung (Azure-Portal)

Um die __App Registration__ zu erstellen, gehen Sie auf das Microsoft Azure-Portal und dann auf Microsoft EntraID, __"ADD > App Registration"__

Auf der Seite "Register an application" geben Sie bitte ein:
```
- __Name__ : Geben Sie "__SHIVA__" ein
- __Supported account types__ :  __Accounts in this organizational directory only__ (__<Ihr Azure-Mandant>__ only - Single tenant)
- __Redirect URL__ : Zunächst nicht konfigurieren. Die URL wird vom Cloud Temple-Support bereitgestellt und später in dieses Feld eingetragen.
```

<img src={ssoEntra_001} />

Die Informationen **Application (client) ID** und **Directory (tenant) ID** sind die nützlichen Informationen, die im Supportantrag an das Cloud Temple-Team zur Aktivierung der Microsoft EntraID-Authentifizierung auf Organisationsebene angegeben werden müssen.

<img src={ssoEntra_002} />

### Definition eines Secrets
Im Reiter "Certificates & secrets" erstellen Sie ein neues Secret.

*Hinweis: Das Ablaufdatum des Secrets darf nicht länger als 24 Monate sein, einschließlich eines benutzerdefinierten Ablaufdatums.*

<img src={ssoAad_004} />

Das generierte Secret ist im Supportantrag anzugeben:

<img src={ssoAad_005} />

### Definition des EntraID-Tokens

Das EntraID-Token ist für die Konfiguration der Authentifizierung erforderlich.

Im Menü __"Token Configuration"__ klicken Sie auf __"Add optional claim"__. Sie müssen "ID" als Token-Typ auswählen und "email" ankreuzen.

<img src={ssoAad_006} />

Das Azure-Interface fragt, ob Sie eine Berechtigung hinzufügen möchten, die Ihnen das Lesen der E-Mail eines Benutzers ermöglicht (Microsoft Graph email), markieren Sie das Kästchen und bestätigen.

<img src={ssoAad_007} />

Gehen Sie dann zu "API permissions" und klicken Sie auf __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Zusätzliche Sicherheitskonfigurationen (optional, aber empfohlen)

Standardmäßig ermöglicht Microsoft EntraID, wie es konfiguriert ist, jedem Benutzer in Ihrem Azure-Mandanten, sich bei Ihrer Cloud Temple Organisation anzumelden.
Es ist möglich, auf der Ebene der __"App Registration"__ Zugriffe einzuschränken, um nur eine Liste von Benutzern oder Gruppen zuzulassen, sich bei Ihrer Cloud Temple Organisation anzumelden.

Hier ist die Vorgehensweise:

#### Zugriff auf die zusätzlichen Einstellungen "App Registration"
##### Option 1
Gehen Sie zum Reiter "Overview" und klicken Sie auf den Namen der Anwendung (den Link nach "Managed application").

<img src={ssoAad_009} />

##### Option 2
Gehen Sie zu den "Enterprise applications" und suchen Sie unter Verwendung des Namens der zuvor erstellten Anwendung.

<img src={ssoAad_010} />

#### Beschränkung der Authentifizierung auf Benutzer, die der Anwendung zugewiesen sind

Geben Sie hier die Notwendigkeit einer Benutzerzuweisung zur Anwendung an, um deren Authentifizierung zuzulassen:

<img src={ssoAad_011} />

#### Zuweisung von Benutzern und Gruppen zur Anwendung
Nur die Gruppen und Benutzer, die der Anwendung zugewiesen sind, können sich über die App Registration bei Ihrer Cloud Temple Organisation anmelden.

<img src={ssoAad_012} />

Schließlich müssen Sie die Zuweisung durch Klicken auf "Assign" übernehmen.

<img src={ssoAad_013} />

Nun können sich die der Anwendung zugewiesenen Benutzer über die erstellte Anwendung bei Ihrer Cloud Temple Organisation anmelden.

## Schritt 2: Anfordern der Konfiguration des SSO (Single Sign-On) Ihrer Organisation

Dieser Teil der Konfiguration wird auf Organisationsebene vom Cloud Temple-Team durchgeführt.

Dazu stellen Sie __einen Support-Antrag__ in der Konsole, in dem Sie Ihren Wunsch nach der Konfiguration eines Microsoft EntraID-SSO angeben.

Bitte geben Sie die folgenden Informationen im Supportantrag an:

    Den Namen Ihrer Organisation
    Den Namen eines Ansprechpartners mit seiner E-Mail und Telefonnummer zur Finalisierung der Konfiguration
    Application ID (die eindeutige ID der zuvor erstellten Anwendung)
    Directory ID (entspricht der Azure AD-ID des Azure-Mandanten)
    Secret (das der zuvor erstellten Anwendung zugeordnete Secret)

Sobald die Konfiguration auf der Shiva-Konsole durchgeführt wurde, wird der angegebene Kontakt informiert.

## Schritt 3: Finalisierung der Konfiguration

Auf der Startseite der App Registration im Menü "Overview" klicken Sie auf "Add a Redirect URL".

<img src={ssoAad_014} />

Gehen Sie dann zu "Add a platform" und fügen Sie eine vom Typ Web hinzu.

<img src={ssoAad_015} />

Geben Sie einfach die von der Team Produit Applications bereitgestellte "Redirect URL" ein.

<img src={ssoAad_016} />

Sie sollten dieses Ergebnis erhalten, sobald die "Redirect URL" hinzugefügt wurde.

<img src={ssoAad_017} />

Die Konfiguration der "Redirect URL" kann einige Minuten dauern, bis sie wirksam wird.
Sobald alle Schritte abgeschlossen sind, können Sie sich über Ihr SSO bei Ihrer Cloud Temple Organisation authentifizieren.

<img src={ssoAad_018} />