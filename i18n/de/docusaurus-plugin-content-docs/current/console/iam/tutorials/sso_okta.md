---
title: Beispiel für Identitätsföderation mit Okta
tags:
  - iam
  - tutorials
  - onboarding
---

Dieses Tutorial führt Sie durch die Konfiguration der Identitätsföderation mit Okta für Ihre Cloud Temple-Organisation.

## Voraussetzungen

- Administratorzugriff auf Ihre Okta-Instanz
- Eigentümerrechte auf Ihrer Cloud Temple-Organisation
- Zugriff auf die Cloud Temple-Konsole

## Konfiguration

Die Konfiguration der Identitätsföderation mit Okta ermöglicht die Integration Ihres Okta-Verzeichnisses mit der Cloud Temple-Konsole für eine zentrale Authentifizierung.

### Schritt 1: Konfiguration auf der Okta-Seite

1. Melden Sie sich in Ihrer Okta-Verwaltungskonsole an
2. Navigieren Sie zu **Applications** > **Applications**
3. Klicken Sie auf **Create App Integration**
4. Wählen Sie **SAML 2.0** als Authentifizierungsmethode
5. Konfigurieren Sie die SAML-Parameter für Cloud Temple

### Schritt 2: Konfiguration der SAML-Parameter

Konfigurieren Sie die folgenden Parameter in Okta:

- **Single sign on URL** : Von dem Cloud Temple-Team bereitgestellt
- **Audience URI (SP Entity ID)** : Von dem Cloud Temple-Team bereitgestellt
- **Attribute Statements** : Konfigurieren Sie die erforderlichen Benutzerattribute

### Schritt 3: Anfrage zur Cloud Temple-Konfiguration

Um die Föderation mit Okta zu konfigurieren, erstellen Sie bitte eine Supportanfrage in der Cloud Temple-Konsole mit folgenden Angaben:

- Der Name Ihrer Organisation
- Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer
- Die SAML-Metadaten-URL Ihrer Okta-Anwendung
- Das SAML-Signaturzertifikat
- Die konfigurierten Benutzerattribute

### Schritt 4: Test und Validierung

Sobald die Konfiguration abgeschlossen ist:

1. Testen Sie die Authentifizierung mit einem Testbenutzer
2. Stellen Sie sicher, dass die Benutzerattribute korrekt gemappt sind
3. Validieren Sie den Zugriff auf die Cloud Temple-Ressourcen

## Best Practices

- Konfigurieren Sie Okta-Gruppen, um Berechtigungen pro Tenant zu verwalten
- Aktivieren Sie die Mehrfaktor-Authentifizierung (MFA) in Okta
- Überwachen Sie die Authentifizierungs-Logs, um Anomalien zu erkennen

## Support

Für Unterstützung bei der Okta-Konfiguration wenden Sie sich bitte an den Cloud Temple-Support über die Konsole.
