---
title: Beispiel für Identitätsföderation mit JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.jpg';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.jpg';

Dieses Tutorial führt Sie durch die Einrichtung von Single Sign-On (SSO) zwischen JumpCloud und der Cloud Temple-Konsole unter Verwendung des OpenID Connect (OIDC)-Protokolls.

Für detailliertere Informationen direkt von JumpCloud, besuchen Sie deren offizielle Dokumentation zu OIDC SSO: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie die notwendigen Informationen von Cloud Temple erhalten haben, insbesondere die Redirect-URI, die spezifisch für Ihre Keycloak-Instanz ist.

## Konfiguration in JumpCloud

Folgen Sie diesen Schritten, um eine neue OIDC-Anwendung in Ihrer JumpCloud-Administrationskonsole zu konfigurieren:

1.  **Neue Anwendung erstellen:**
    *   Navigieren Sie zum Anwendungsbereich in JumpCloud.
    *   Klicken Sie auf "Hinzufügen" oder "Neue Anwendung erstellen".
    *   Wählen Sie die Option für eine "Benutzerdefinierte Anwendungsintegration" (Custom Application Integration).

2.  **SSO OIDC konfigurieren:**
    *   Wählen Sie "Single Sign-On (SSO) verwalten".
    *   Wählen Sie "SSO mit OIDC konfigurieren".

    <img src={ssoJumpcloud001} alt="JumpCloud OIDC SSO-Konfiguration" />

3.  **Redirect-URIs eingeben:**
    *   Geben Sie im entsprechenden Feld (oft als "Redirect URIs" oder "Callback URLs" bezeichnet) die von Cloud Temple bereitgestellte URI ein. Sie folgt in der Regel diesem Format:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<unternehmensspezifisch>/broker/<unternehmensspezifisch>/endpoint
        ```
        *Ersetzen Sie `<unternehmensspezifisch>` durch die für Ihr Unternehmen spezifischen Kennungen, die von Cloud Temple bereitgestellt wurden.*

4.  **Client-Authentifizierungstyp auswählen:**
    *   Wählen Sie `Client Secret Post` als "Client Authentication Type".

5.  **Login-URL eingeben:**
    *   Geben Sie im Feld "Login URL" die URL ein, die Sie für den Zugriff auf Ihre Cloud Temple-Konsole verwenden. Zum Beispiel:
        ```
        https://<eindeutige-kennung>.shiva.cloud-temple.com
        ```
        *Ersetzen Sie `<eindeutige-kennung>` durch die eindeutige Kennung Ihrer Cloud Temple-Instanz.*

6.  **Attributzuordnung konfigurieren:**
    *   Stellen Sie im Bereich "Attributzuordnung" (oder Äquivalent) sicher, dass die folgenden Attribute ausgewählt sind, um an Cloud Temple gesendet zu werden:
        *   `Email`
        *   `Profile` (kann Name, Vorname usw. enthalten)

    <img src={ssoJumpcloud002} alt="JumpCloud Attributzuordnung" />

7.  **Gruppen zuweisen:**
    *   Weisen Sie die JumpCloud-Benutzergruppen zu, die über diese SSO-Anwendung Zugriff auf die Cloud Temple-Konsole haben sollen.

8.  **Anwendung aktivieren:**
    *   Klicken Sie auf "Aktivieren" oder "Speichern", um die Anwendungskonfiguration abzuschließen.

9.  **Anmeldeinformationen an Cloud Temple übermitteln:**
    *   Nach der Aktivierung stellt JumpCloud Ihnen eine **Client ID** und ein **Client Secret** zur Verfügung.
    *   Übermitteln Sie diese beiden Informationen sicher an Ihren Cloud Temple-Kontakt, um die Föderationskonfiguration auf der Keycloak-Seite abzuschließen.

Sobald Cloud Temple die Föderation mit den bereitgestellten Anmeldeinformationen konfiguriert hat, können sich Ihre zugewiesenen Benutzer mit ihren JumpCloud-Anmeldeinformationen bei der Cloud Temple-Konsole anmelden.
