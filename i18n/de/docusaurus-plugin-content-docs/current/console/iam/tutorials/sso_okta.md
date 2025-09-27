

---
title: Beispiel der Identitätsfederierung mit Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Dieses Tutorial führt Sie durch die Konfiguration der Identitätsfederierung mit Okta für Ihre Cloud Temple-Organisation.



## Voraussetzungen

- Administratorenzugriff auf Ihre Okta-Instanz
- Besitzerechte für Ihre Cloud Temple-Organisation
- Zugriff auf die Cloud Temple-Konsole



## Konfiguration

Die Konfiguration der Identitätsfederierung mit Okta ermöglicht die Integration Ihres Okta-Verzeichnisses mit der Cloud Temple-Konsole für eine zentrale Authentifizierung.



### Schritt 1: Konfiguration auf der Okta-Seite

1. Melden Sie sich bei Ihrer Okta-Verwaltungsconsole an  
2. Gehen Sie zu **Anwendungen** > **Anwendungen**  
3. Klicken Sie auf **Neue App-Integration erstellen**  
4. Wählen Sie **SAML 2.0** als Authentifizierungsmethode aus  
5. Konfigurieren Sie die SAML-Einstellungen für Cloud Temple



### Schritt 2: Konfiguration der SAML-Parameter

Konfigurieren Sie die folgenden Parameter in Okta:

- **Single sign on URL** : Bereitgestellt durch das Cloud Temple-Team
- **Audience URI (SP Entity ID)** : Bereitgestellt durch das Cloud Temple-Team
- **Attribute Statements** : Konfigurieren Sie die erforderlichen Benutzerattribute



### Schritt 3: Cloud Temple-Konfigurationsanfrage

Um die Federation mit Okta zu konfigurieren, erstellen Sie bitte eine Supportanfrage in der Cloud Temple-Konsole und geben Sie folgende Informationen an:

- Der Name Ihrer Organisation
- Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer
- Die SAML-Metadaten-URL Ihrer Okta-Anwendung
- Das SAML-Signaturzertifikat
- Die konfigurierten Benutzerattribute



### Schritt 4: Test und Validierung

Nach Abschluss der Konfiguration:

1. Testen Sie die Authentifizierung mit einem Testbenutzer
2. Überprüfen Sie, ob die Benutzerattribute korrekt gemappt sind
3. Validieren Sie den Zugriff auf die Cloud-Temple-Ressourcen



## Gute Praktiken

- Konfigurieren Sie Okta-Gruppen, um Berechtigungen pro Tenant zu verwalten
- Aktivieren Sie die Mehrfaktor-Authentifizierung (MFA) in Okta
- Überwachen Sie die Authentifizierungsprotokolle, um Anomalien zu erkennen



## Support

Für alle Unterstützung bei der Konfiguration von Okta wenden Sie sich an den Cloud Temple Support über die Konsole.