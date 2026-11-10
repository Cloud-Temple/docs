---
title: Beispiel für eine Identitätsföderation mit Microsoft EntraID
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoEntra_001 from '@site/docs/console/iam/tutorials/images/sso_entra_001.png'
import ssoEntra_002 from '@site/docs/console/iam/tutorials/images/sso_entra_002.png'
import ssoAad_004 from '@site/docs/console/iam/tutorials/images/sso_aad_004.png'
import ssoAad_005 from '@site/docs/console/iam/tutorials/images/sso_aad_005.png'
import ssoAad_006 from '@site/docs/console/iam/tutorials/images/sso_aad_006.png'
import ssoAad_007 from '@site/docs/console/iam/tutorials/images/sso_aad_007.png'
import ssoAad_008 from '@site/docs/console/iam/tutorials/images/sso_aad_008.png'
import ssoAad_009 from '@site/docs/console/iam/tutorials/images/sso_aad_009.png'
import ssoAad_010 from '@site/docs/console/iam/tutorials/images/sso_aad_010.png'
import ssoAad_011 from '@site/docs/console/iam/tutorials/images/sso_aad_011.png'
import ssoAad_012 from '@site/docs/console/iam/tutorials/images/sso_aad_012.png'
import ssoAad_013 from '@site/docs/console/iam/tutorials/images/sso_aad_013.png'
import ssoAad_014 from '@site/docs/console/iam/tutorials/images/sso_aad_014.png'
import ssoAad_015 from '@site/docs/console/iam/tutorials/images/sso_aad_015.png'
import ssoAad_016 from '@site/docs/console/iam/tutorials/images/sso_aad_016.png'
import ssoAad_017 from '@site/docs/console/iam/tutorials/images/sso_aad_017.png'
import ssoAad_018 from '@site/docs/console/iam/tutorials/images/sso_aad_018.png'

Hier ist ein Beispiel für die Konfiguration des Authentifizierungsverzeichnisses einer Cloud Temple-Organisation mit __Microsoft EntraID__ (Azure Active Directory).

Die Konfiguration Ihres Microsoft-Verzeichnisses auf Ebene einer Cloud Temple-Organisation erleichtert die Authentifizierung Ihrer Benutzer in der Konsole. Dadurch wird eine Vervielfachung der Authentifizierungsfaktoren vermieden und die Angriffsfläche verringert.

Wenn Ihre Benutzer bei ihrem Microsoft-Konto angemeldet sind, erfolgt die Authentifizierung bei den Diensten der Konsole transparent.

Nachfolgend die einzelnen Schritte zur Durchführung dieser Konfiguration:

## Schritt 1: Konfiguration des SSO auf Seiten von Microsoft Azure

### Registrierung einer neuen Azure-Anwendung (Azure-Portal)

Um die __App Registration__ zu erstellen, öffnen Sie das Microsoft Azure-Portal, anschließend Microsoft EntraID und dann __"ADD > App Registration"__.

Geben Sie auf der Seite „Register an application“ Folgendes an:

```
- __Name__ : "__SHIVA__" eingeben
- __Supported account types__ : __Accounts in this organizational directory only__ (__<Ihr Azure-Tenant>__ only - Single tenant)
- __Redirect URL__ : Zunächst nicht konfigurieren. Die URL wird vom Cloud Temple-Support bereitgestellt und muss später in dieses Feld eingetragen werden.
```

<img src={ssoEntra_001} />

Die Angaben __Application (client) ID__ und __Directory (tenant) ID__ sind die Informationen, die Sie in der Supportanfrage an das Cloud Temple-Team angeben müssen, um die Microsoft EntraID-Authentifizierung für Ihre Organisation zu aktivieren.

<img src={ssoEntra_002} />

### Definition eines Secrets

Erstellen Sie im Tab „Certificates & secrets“ ein neues Secret.

*Hinweis: Das Ablaufdatum des Secrets darf 24 Monate nicht überschreiten, auch nicht bei einem benutzerdefinierten Ablaufdatum.*

<img src={ssoAad_004} />

Das generierte Secret muss in der Supportanfrage angegeben werden:

<img src={ssoAad_005} />

### Definition des EntraID-Tokens

Der EntraID-Token ist für die Konfiguration der Authentifizierung erforderlich.

Klicken Sie im Menü __"Token Configuration"__ auf __"Add optional claim"__. Wählen Sie als Token-Typ "ID" aus und aktivieren Sie die Option "email".

<img src={ssoAad_006} />

Die Azure-Oberfläche fragt Sie daraufhin, ob Sie eine Berechtigung hinzufügen möchten, die Ihnen das Lesen der E-Mail-Adresse eines Benutzers (Microsoft Graph email) ermöglicht. Aktivieren Sie das Kontrollkästchen und bestätigen Sie.

<img src={ssoAad_007} />

Wechseln Sie anschließend zu "API permissions" und klicken Sie auf __"Grant admin consent for Cloud Temple"__.

<img src={ssoAad_008} />

### Zusätzliche Sicherheitskonfigurationen (optional, aber empfohlen)

Standardmäßig ermöglicht Microsoft EntraID in dieser Konfiguration jedem Benutzer Ihres Azure-Tenants, sich bei Ihrer Cloud Temple-Organisation anzumelden.  
Sie können den Zugriff auf Ebene der __"App Registration"__ einschränken, sodass sich nur eine Liste bestimmter Benutzer oder Gruppen bei Ihrer Cloud Temple-Organisation anmelden kann.

Gehen Sie dazu wie folgt vor:

#### Zugriff auf die zusätzlichen Einstellungen der „App Registration“

##### Option 1

Gehen Sie zum Tab „Overview“ und klicken Sie auf den Namen der Anwendung (den Link hinter „Managed application“).

<img src={ssoAad_009} />

##### Option 2

Öffnen Sie die „Enterprise applications“ und suchen Sie nach dem Namen der zuvor erstellten Anwendung.

<img src={ssoAad_010} />

#### Beschränkung der Authentifizierung auf die der Anwendung zugewiesenen Benutzer

Legen Sie hier fest, dass ein Benutzer der Anwendung zugewiesen sein muss, damit seine Authentifizierung zugelassen wird:

<img src={ssoAad_011} />

#### Zuweisung von Benutzern und Gruppen zur Anwendung

Nur die der Anwendung zugewiesenen Gruppen und Benutzer können sich über die App Registration bei Ihrer Cloud Temple-Organisation anmelden.

<img src={ssoAad_012} />

Abschließend müssen Sie die Zuweisung nur noch mit einem Klick auf „Assign“ übernehmen.

<img src={ssoAad_013} />

Ab sofort können sich die der Anwendung zugewiesenen Benutzer über die erstellte Anwendung bei Ihrer Cloud Temple-Organisation anmelden.

## Schritt 2: Konfiguration des SSO (Single Sign-On) für Ihre Organisation anfordern

Dieser Teil der Konfiguration wird vom Cloud Temple-Team auf Ebene der Organisation durchgeführt.

Stellen Sie dazu in der Konsole __eine Supportanfrage__, in der Sie angeben, dass Sie ein Microsoft EntraID-SSO konfigurieren möchten.

Bitte geben Sie in der Supportanfrage die folgenden Informationen an:

- Name Ihrer Organisation
- Name eines Ansprechpartners mit E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
- Application ID (eindeutige Kennung der zuvor erstellten Anwendung)
- Directory ID (entspricht der Azure AD-Kennung des Azure-Tenants)
- Secret (der zuvor erstellten Anwendung zugeordnetes Secret)

Sobald die Konfiguration auf Seiten der Konsole abgeschlossen ist, wird der angegebene Ansprechpartner informiert.

## Schritt 3: Abschluss der Konfiguration

Klicken Sie auf der Startseite der App Registration im Menü „Overview“ auf „Add a Redirect URL“.

<img src={ssoAad_014} />

Wechseln Sie anschließend zum Abschnitt „Add a platform“ und fügen Sie eine Plattform des Typs „Web“ hinzu.

<img src={ssoAad_015} />

Geben Sie einfach die vom Produktteam Applications bereitgestellte „Redirect URL“ ein.

<img src={ssoAad_016} />

Nachdem die „Redirect-URL“ hinzugefügt wurde, sollte das folgende Ergebnis angezeigt werden.

<img src={ssoAad_017} />

Die Konfiguration der „Redirect-URL“ kann einige Minuten in Anspruch nehmen, bis sie wirksam ist.  
Nach Abschluss aller Schritte können Sie sich über Ihren SSO bei Ihrer Cloud Temple-Organisation authentifizieren.

<img src={ssoAad_018} />
