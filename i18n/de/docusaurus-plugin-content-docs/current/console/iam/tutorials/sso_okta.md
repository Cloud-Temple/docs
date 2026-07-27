---
title: Beispiel für die Identitätsföderation mit Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Dieses Tutorial führt Sie durch die Konfiguration der Identitätsföderation mit Okta für Ihre Cloud Temple-Organisation.

## Voraussetzungen

- Administratorzugriff auf Ihre Okta-Instanz
- Eigentümerrechte für Ihre Cloud Temple-Organisation
- Zugriff auf die Cloud Temple-Konsole

## Configuration

Die Konfiguration der Identitätsföderation mit Okta ermöglicht die Integration Ihres Okta-Verzeichnisses mit der Cloud Temple-Konsole für eine zentrale Authentifizierung.

### Schritt 1 : Konfiguration auf der Okta-Seite

1. Melden Sie sich in Ihrer Okta-Administrationskonsole an
2. Navigieren Sie zu **Applications** > **Applications**
3. Klicken Sie auf **Create App Integration**
4. Wählen Sie **SAML 2.0** als Authentifizierungsmethode aus
5. Konfigurieren Sie die SAML-Einstellungen für Cloud Temple

### Schritt 2: Konfiguration der SAML-Parameter

Konfigurieren Sie die folgenden Parameter in Okta:

- **Single sign on URL** : Wird vom Cloud Temple-Team bereitgestellt
- **Audience URI (SP Entity ID)** : Wird vom Cloud Temple-Team bereitgestellt
- **Attribute Statements** : Konfigurieren Sie die erforderlichen Benutzerattribute

### Schritt 3: Anfrage zur Cloud Temple-Konfiguration

Um die Federation mit Okta zu konfigurieren, erstellen Sie bitte einen Supportantrag in der Cloud Temple-Konsole und geben Sie Folgendes an:

- Der Name Ihrer Organisation
- Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer
- Die SAML-Metadaten-URL Ihrer Okta-Anwendung
- Das SAML-Signaturzertifikat
- Die konfigurierten Benutzerattribute

### Schritt 4: Test und Validierung

Sobald die Konfiguration abgeschlossen ist:

1. Testen Sie die Authentifizierung mit einem Testbenutzer
2. Überprüfen Sie, ob die Benutzerattribute korrekt zugeordnet sind
3. Validieren Sie den Zugriff auf die Cloud Temple-Ressourcen

## Best Practices

- Richten Sie Okta-Gruppen ein, um Berechtigungen pro Tenant zu verwalten
- Aktivieren Sie die Mehrfaktorauthentifizierung (MFA) in Okta
- Überwachen Sie die Authentifizierungsprotokolle, um Anomalien zu erkennen

## Support

Für Unterstützung bei der Konfiguration von Okta kontaktieren Sie den Cloud Temple Support über die Konsole.