---
title: Beispiel für Identitätsföderation mit JumpCloud
tags:
  - iam
  - tutorials
  - onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.png';

Dieses Tutorial führt Sie durch die Einrichtung der Einmalanmeldung (SSO) zwischen JumpCloud und der Cloud Temple Konsole unter Verwendung des OpenID Connect (OIDC)-Protokolls.

Für ausführlichere Informationen direkt von JumpCloud konsultieren Sie bitte deren offizielle Dokumentation zu SSO OIDC: [SSO with OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie die erforderlichen Informationen von Cloud Temple erhalten haben, insbesondere die Weiterleitungs-URI, die spezifisch für Ihre Keycloak-Instanz ist.

## Konfiguration in JumpCloud

Folgen Sie diesen Schritten, um eine neue OIDC-Anwendung in Ihrer JumpCloud-Administrationskonsole zu konfigurieren:

1.  **Eine neue Anwendung erstellen:**
    *   Navigieren Sie zum Bereich „Anwendungen“ in JumpCloud.
    *   Klicken Sie auf „Hinzufügen“ oder „Neue Anwendung erstellen“.
    *   Wählen Sie die Option für eine benutzerdefinierte Anwendungsintegration („Custom Application Integration“).

2.  **SSO OIDC konfigurieren:**
    *   Wählen Sie „Manage Single Sign-On (SSO)“.
    *   Wählen Sie „Configure SSO with OIDC“.

    <img src={ssoJumpcloud001} alt="Configuration SSO OIDC JumpCloud" />

3.  **Redirect-URIs eingeben:**
    *   Geben Sie im entsprechenden Feld (oft „Redirect URIs“ oder „Callback URLs“ genannt) die von Cloud Temple bereitgestellte URI ein. Diese hat in der Regel folgendes Format:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        *Ersetzen Sie `<company specific>` durch die unternehmensspezifischen Kennungen, die Ihnen von Cloud Temple zur Verfügung gestellt wurden.*

4.  **Authentifizierungstyp für den Client wählen:**
    *   Wählen Sie `Client Secret Post` als „Client Authentication Type“.

5.  **Anmelde-URL eingeben:**
    *   Geben Sie im Feld „Login URL“ die URL ein, mit der Sie auf Ihre Cloud Temple Konsole zugreifen. Zum Beispiel:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        *Ersetzen Sie `<unique-identifier>` durch die eindeutige Kennung Ihrer Cloud Temple Instanz.*

6.  **Attributs-Mapping konfigurieren:**
    *   Stellen Sie im Abschnitt „Attribute Mapping“ (oder entsprechend benannt) sicher, dass die folgenden Attribute zur Übermittlung an Cloud Temple ausgewählt sind:
        *   `Email`
        *   `Profile` (kann Name, Vorname usw. enthalten)

    <img src={ssoJumpcloud002} alt="Mappage Attributs JumpCloud" />

7.  **Gruppen zuweisen:**
    *   Weisen Sie die JumpCloud-Benutzergruppen zu, die über diese SSO-Anwendung Zugriff auf die Cloud Temple Konsole erhalten sollen.

8.  **Anwendung aktivieren:**
    *   Klicken Sie auf „Activate“ oder „Save“, um die Konfiguration der Anwendung abzuschließen.

9.  **Zugangsdaten an Cloud Temple übermitteln:**
    *   Nach der Aktivierung stellt JumpCloud Ihnen eine **Client ID** und ein **Client Secret** zur Verfügung.
    *   Übermitteln Sie diese beiden Informationen auf sicherem Wege an Ihren Cloud-Temple-Kontakt, damit die Konfiguration der Föderation auf Keycloak-Seite abgeschlossen werden kann.

Sobald Cloud Temple die Föderation mit den bereitgestellten Zugangsdaten konfiguriert hat, können Ihre zugewiesenen Benutzer sich mit ihren JumpCloud-Zugangsdaten bei der Cloud Temple Konsole anmelden.