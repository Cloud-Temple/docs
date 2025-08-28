---
Titel: Beispiel für Identitätsfusion mit JumpCloud
Tags:
  - iam
  - Tutorials
  - Onboarding
---
import ssoJumpcloud001 from './images/sso_jumpcloud_001.png';
import ssoJumpcloud002 from './images/sso_jumpcloud_002.png';

Dieses Tutorial führt Sie durch die Konfiguration der einheitlichen Authentifizierung (SSO) zwischen JumpCloud und der Cloud-Tempel-Konsole unter Verwendung des Protokolls OpenID Connect (OIDC).

Für detaillierte Informationen direkt aus dem offiziellen JumpCloud-Dokumentation zum SSO OIDC: [SSO mit OIDC](https://jumpcloud.com/support/sso-with-oidc).

## Vorbereitungen

Bevor Sie mit der Arbeit beginnen, stellen Sie sicher, dass Sie von Cloud Temple die spezifische URI für Ihre Redirektions-Instance Keycloak erhalten haben.

## Konfiguration in JumpCloud

Befolgen Sie diesen Schritten, um eine neue Anwendung für OpenID Connect (OIDC) in Ihrer JumpCloud-Admin-Konsole zu konfigurieren:

1. **Erstellung einer neuen Anwendung:**
    * Navigieren Sie zur Anwendungsliste in JumpCloud.
    * Klicken Sie auf "Hinzufügen" oder "Neue Anwendung erstellen".
    * Wählen Sie die Option für eine benutzerdefinierte Anwendungseintegration ("Custom Application Integration").

2. **Konfiguration des SSO OIDC:**
    * Wählen Sie "Single Sign-On (SSO) verwalten".
    * Wählen Sie "SSO mit OIDC konfigurieren".

    <img src={ssoJumpcloud001} alt="SSO OIDC Konfiguration JumpCloud" />

3. **Eingabe der Redirection URIs:**
    * Im entsprechenden Feld (meist als "Redirektur-URI" oder "Callback URL") geben Sie die URI ein, die von Cloud Temple bereitgestellt wird. Diese folgt normalerweise dem folgenden Muster:
        ```
        https://keycloak-shiva.cloud-temple.com/auth/realms/<company specific>/broker/<company specific>/endpoint
        ```
        * Ersetzen Sie `<company specific>` durch die spezifischen Identifikatoren Ihrer Firma, die von Cloud Temple bereitgestellt werden.

4. **Wahl des Authentifizierungsverfahrens für den Klient:**
    * Wählen Sie `Client Secret Post` als "Klientauthentifizierungstyp".

5. **Eingabe der Login-URL:**
    * Im Feld "Login-URL" geben Sie die URL ein, die Sie verwenden, um auf Ihre JumpCloud-Konsole zuzugreifen. Beispielsweise:
        ```
        https://<unique-identifier>.shiva.cloud-temple.com
        ```
        * Ersetzen Sie `<unique-identifier>` durch den eindeutigen Identifikator Ihrer Cloud Temple-Instanz.

6. **Konfiguration des Attribute-Mappings:**
    * In der Abschnitt "Attribute Mapping" (oder Ähnliches) stellen Sie sicher, dass die folgenden Attribute ausgewählt werden, um an Cloud Temple weitergeleitet werden:
        * `Email`
        * `Profile` (kann den Namen, Vorname usw. enthalten)

    <img src={ssoJumpcloud002} alt="Attribute Mapping JumpCloud" />

7. **Zuweisung von Gruppen:**
    * Zuweisen Sie die Gruppen von JumpCloud-Benutzern, die über diese OIDC-Anwendung auf Ihre Cloud Temple-Konsole zugreifen sollen.

8. **Aktivierung der Anwendung:**
    * Klicken Sie auf "Aktivieren" oder "Speichern", um die Konfiguration abzuschließen.

9. **Übermittlung der Identifikatoren an Cloud Temple:**
    * Nach der Aktivierung erhält JumpCloud Ihnen einen Client ID und ein Client Secret.
    * Übermitteln Sie diese Informationen sicher an Ihre Kontaktperson bei Cloud Temple, um die Konfiguration der Federierung auf Seiten Keycloak abzuschließen.

Sobald Cloud-Temple die Federierung mit den bereitgestellten Identifikatoren konfiguriert hat, können die von Ihnen zugewiesenen Benutzer sich über JumpCloud an Ihre Cloud Temple-Konsole anmelden und ihre Authentifizierungskennzeichen verwenden.