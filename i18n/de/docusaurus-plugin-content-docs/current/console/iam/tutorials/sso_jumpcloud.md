---
title: Beispiel für Identitätsföderation mit JumpCloud
tags:
  - iam
  - Anleitungen
  - Onboarding
---
import ssoJumpcloud001 from '@site/docs/console/iam/tutorials/images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from '@site/docs/console/iam/tutorials/images/sso_jumpcloud_002.png';

Dieses Tutorial führt Sie durch die Konfiguration der Single Sign-On (SSO)-Authentifizierung zwischen JumpCloud und der Cloud Temple-Konsole unter Verwendung des OpenID Connect (OIDC)-Protokolls.

Für weitere detaillierte Informationen direkt von JumpCloud lesen Sie bitte ihre offizielle Dokumentation zu OIDC-SSO: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie die erforderlichen Informationen von Cloud Temple erhalten haben, insbesondere die spezifische Weiterleitungs-URI für Ihre Keycloak-Instanz.

## Konfiguration in JumpCloud

Führen Sie die folgenden Schritte aus, um eine neue OIDC-Anwendung in Ihrer JumpCloud-Administrationskonsole zu konfigurieren:

1. **Neue Anwendung erstellen:**
    * Navigieren Sie zum Abschnitt „Anwendungen“ in JumpCloud.
    * Klicken Sie auf „Hinzufügen“ oder „Neue Anwendung erstellen“.
    * Wählen Sie die Option für eine benutzerdefinierte Anwendungsintegration („Custom Application Integration“).

2. **OIDC-SSO konfigurieren:**
    * Wählen Sie „Single Sign-On (SSO) verwalten“.
    * Wählen Sie „SSO mit OIDC konfigurieren“.

    <img src={ssoJumpcloud001} alt="OIDC-SSO-Konfiguration in JumpCloud" />

3. **Weiterleitungs-URIs eingeben:**
    * Geben Sie im entsprechenden Feld (oft als „Redirect URIs“ oder „Callback URLs“ bezeichnet) die von Cloud Temple bereitgestellte URI ein. Sie folgt in der Regel diesem Format:

        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```

        *Ersetzen Sie `<company specific>` durch die von Cloud Temple bereitgestellten, unternehmensspezifischen Anmeldeinformationen.*

4. **Client-Authentifizierungstyp auswählen:**
    * Wählen Sie `Client Secret Post` als „Client-Authentifizierungstyp“.

5. **Anmelde-URL eingeben:**
    * Geben Sie im Feld „Login URL“ die URL ein, die Sie zum Zugriff auf Ihre Cloud Temple-Konsole verwenden. Beispiel:

        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```

        *Ersetzen Sie `<unique-identifier>` durch die eindeutige Kennung Ihrer Cloud Temple-Instanz.*

6. **Attributzuordnung konfigurieren:**
    * Stellen Sie im Bereich „Attribute Mapping“ (oder entsprechend) sicher, dass die folgenden Attribute an Cloud Temple gesendet werden:
        * `Email`
        * `Profile` (kann Vorname, Nachname usw. umfassen)

    <img src={ssoJumpcloud002} alt="Attributzuordnung in JumpCloud" />

7. **Gruppen zuweisen:**
    * Weisen Sie die JumpCloud-Benutzergruppen zu, die über diese SSO-Anwendung Zugriff auf die Cloud Temple-Konsole erhalten sollen.

8. **Anwendung aktivieren:**
    * Klicken Sie auf „Activate“ oder „Save“, um die Konfiguration der Anwendung abzuschließen.

9. **Anmeldeinformationen an Cloud Temple übermitteln:**
    * Nach der Aktivierung stellt Ihnen JumpCloud eine **Client ID** und ein **Client Secret** bereit.
    * Übermitteln Sie diese beiden Informationen sicher an Ihren Ansprechpartner bei Cloud Temple, um die Konfiguration der Federation auf Keycloak-Seite abzuschließen.

Sobald Cloud Temple die Federation mit den bereitgestellten Anmeldeinformationen konfiguriert hat, können Ihre zugewiesenen Benutzer mit ihren JumpCloud-Anmeldeinformationen auf die Cloud Temple-Konsole zugreifen.