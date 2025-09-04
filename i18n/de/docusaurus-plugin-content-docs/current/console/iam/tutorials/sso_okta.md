---
title: SSO-Konfiguration mit Okta
---

# Single Sign-On (SSO) Konfiguration mit Okta

Diese Anleitung führt Sie durch die Konfiguration der Single Sign-On (SSO) Authentifizierung mit Okta als Identity Provider für den Zugang zur Cloud Temple Konsole.

## Überblick

Okta ist eine führende Identity-as-a-Service (IDaaS) Plattform, die umfassende Identity- und Access-Management-Funktionen bietet. Die Integration mit Cloud Temple ermöglicht:

- **Zentrale Identitätsverwaltung** : Einheitliche Benutzerverwaltung über alle Anwendungen
- **Erweiterte Sicherheitsrichtlinien** : Multi-Faktor-Authentifizierung und adaptive Authentifizierung
- **Nahtlose Benutzererfahrung** : Single Sign-On für alle Unternehmensanwendungen
- **Umfassende Audit-Funktionen** : Detaillierte Protokollierung und Berichterstattung

## Voraussetzungen

Bevor Sie mit der Konfiguration beginnen, stellen Sie sicher, dass Sie über Folgendes verfügen:

- Ein Okta Administrator-Konto mit Berechtigungen zum Erstellen von Anwendungen
- Zugang zur Cloud Temple Konsole mit IAM-Administratorrechten
- Von Cloud Temple bereitgestellte Konfigurationsinformationen
- Okta-Lizenz, die SAML-Anwendungen unterstützt

## Konfiguration in Okta

### Schritt 1: SAML-Anwendung erstellen

1. **Zugang zur Okta Admin-Konsole**
   - Melden Sie sich bei Ihrem Okta-Tenant als Administrator an
   - Navigieren Sie zu **Applications** > **Applications**

2. **Neue Anwendung erstellen**
   - Klicken Sie auf **Create App Integration**
   - Wählen Sie **SAML 2.0** als Sign-in-Methode
   - Klicken Sie auf **Next**

3. **Allgemeine Konfiguration**
   - **App name**: `Cloud Temple Console`
   - **App logo**: (Optional) Laden Sie das Cloud Temple Logo hoch
   - **App visibility**: Konfigurieren Sie nach Ihren Anforderungen
   - Klicken Sie auf **Next**

### Schritt 2: SAML-Konfiguration

1. **SAML-Einstellungen**
   Konfigurieren Sie die folgenden SAML-Parameter:

   | Feld | Wert |
   |------|------|
   | **Single sign on URL** | `https://console.cloud-temple.com/api/iam/v1/saml/acs` |
   | **Audience URI (SP Entity ID)** | `https://console.cloud-temple.com` |
   | **Default RelayState** | (Leer lassen) |
   | **Name ID format** | `EmailAddress` |
   | **Application username** | `Email` |

2. **Attribut-Statements**
   Konfigurieren Sie die folgenden Attribute:

   | Name | Name format | Value |
   |------|-------------|-------|
   | `email` | Basic | `user.email` |
   | `firstName` | Basic | `user.firstName` |
   | `lastName` | Basic | `user.lastName` |
   | `groups` | Basic | `user.groups` |

3. **Gruppen-Attribute (Optional)**
   Falls Sie Gruppen-basierte Autorisierung verwenden:
   - **Group Attribute Statements**:
     - Name: `groups`
     - Name format: `Basic`
     - Filter: `Matches regex` mit `.*` (für alle Gruppen)

4. **Abschluss der SAML-Konfiguration**
   - Klicken Sie auf **Next**
   - Wählen Sie **I'm an Okta customer adding an internal app**
   - Klicken Sie auf **Finish**

### Schritt 3: Metadaten abrufen

1. **SAML-Metadaten zugreifen**
   - Gehen Sie in der erstellten Anwendung zur Registerkarte **Sign On**
   - Im Abschnitt **SAML 2.0** klicken Sie auf **View Setup Instructions**
   - Kopieren Sie die Metadaten-URL oder laden Sie die XML-Metadatendatei herunter

2. **Wichtige Informationen notieren**
   - **Identity Provider SSO URL**
   - **Identity Provider Issuer**
   - **X.509 Certificate**

## Konfiguration in der Cloud Temple Konsole

### Schritt 1: Zugang zur IAM-Konfiguration

1. **Anmeldung bei der Konsole**
   - Gehen Sie zu [https://console.cloud-temple.com](https://console.cloud-temple.com)
   - Authentifizieren Sie sich mit einem Administratorkonto

2. **Navigation zu IAM**
   - Klicken Sie im Hauptmenü auf **Identity and Access Management**
   - Wählen Sie **Identity Providers**

### Schritt 2: Okta Provider hinzufügen

1. **Provider erstellen**
   - Klicken Sie auf **Add Identity Provider**
   - Wählen Sie **SAML 2.0** als Typ
   - Geben Sie einen beschreibenden Namen ein: `Okta SSO`

2. **SAML-Konfiguration**
   - **Metadata URL**: Fügen Sie die Okta Metadaten-URL ein
   - Oder laden Sie die XML-Metadatendatei hoch
   - **Entity ID**: Überprüfen Sie, dass sie mit der Okta Entity ID übereinstimmt
   - **SSO URL**: Überprüfen Sie, dass sie mit der Okta SSO URL übereinstimmt

3. **Attribut-Mapping**
   Konfigurieren Sie das Attribut-Mapping:

   | Cloud Temple Attribut | SAML Attribut | Erforderlich |
   |------------------------|---------------|--------------|
   | Email | `email` | Ja |
   | Vorname | `firstName` | Ja |
   | Nachname | `lastName` | Ja |
   | Gruppen | `groups` | Nein |

### Schritt 3: Gruppen- und Rollenkonfiguration

1. **Gruppen-Mapping**
   - Definieren Sie die Zuordnung zwischen Okta Gruppen und Cloud Temple Rollen
   - Beispiel:
     - Okta Gruppe `CloudTemple-Admins` → Rolle `Administrator`
     - Okta Gruppe `CloudTemple-Users` → Rolle `User`
     - Okta Gruppe `CloudTemple-Operators` → Rolle `Operator`

2. **Autorisierungsregeln**
   - Konfigurieren Sie Regeln zur Bestimmung des Zugriffs basierend auf Gruppen
   - Definieren Sie Berechtigungen für jede zugeordnete Rolle

## Benutzerzuweisung in Okta

### Schritt 1: Gruppen erstellen (Optional)

1. **Okta Gruppen erstellen**
   - Navigieren Sie zu **Directory** > **Groups**
   - Erstellen Sie Gruppen für verschiedene Cloud Temple Rollen:
     ```
     CloudTemple-Admins: Administratoren
     CloudTemple-Users: Standard-Benutzer
     CloudTemple-Operators: Operatoren
     CloudTemple-ReadOnly: Nur-Lese-Benutzer
     ```

2. **Gruppenmitgliedschaft verwalten**
   - Fügen Sie Benutzer zu den entsprechenden Gruppen hinzu
   - Konfigurieren Sie Gruppenregeln für automatische Zuweisungen

### Schritt 2: Anwendungszuweisung

1. **Individuelle Zuweisung**
   - Gehen Sie zur Cloud Temple Anwendung in Okta
   - Klicken Sie auf die Registerkarte **Assignments**
   - Klicken Sie auf **Assign** > **Assign to People**
   - Wählen Sie die zuzuweisenden Benutzer aus
   - Klicken Sie für jeden Benutzer auf **Assign**
   - Klicken Sie auf **Done**

2. **Gruppenzuweisung**
   - Klicken Sie auf **Assign** > **Assign to Groups**
   - Wählen Sie die entsprechenden Gruppen aus
   - Klicken Sie für jede Gruppe auf **Assign**
   - Klicken Sie auf **Done**

### Schritt 3: Erweiterte Zuweisungsoptionen

1. **Bedingte Zuweisungen**
   - Konfigurieren Sie Zuweisungsregeln basierend auf Benutzerattributen
   - Beispiel: Nur Benutzer aus bestimmten Abteilungen

2. **Zeitbasierte Zuweisungen**
   - Konfigurieren Sie temporäre Zugriffe
   - Automatische Entfernung nach Ablaufzeit

## Erweiterte Sicherheitskonfiguration

### Schritt 1: Multi-Faktor-Authentifizierung (MFA)

1. **MFA-Richtlinie erstellen**
   - Navigieren Sie zu **Security** > **Multifactor**
   - Erstellen Sie eine neue MFA-Richtlinie für Cloud Temple:
     ```
     Name: Cloud Temple MFA Policy
     Anwendungen: Cloud Temple Console
     Benutzer: [Spezifische Gruppen oder alle Benutzer]
     Faktoren: SMS, Voice, Okta Verify, Google Authenticator
     ```

2. **Adaptive Authentifizierung**
   - Konfigurieren Sie risikobasierte Authentifizierung
   - Beispiele:
     - MFA bei Zugriff von neuen Geräten
     - MFA bei Zugriff von unbekannten Standorten
     - Erhöhte Sicherheit für Administratoren

### Schritt 2: Session-Management

1. **Session-Richtlinien**
   - Navigieren Sie zu **Security** > **Authentication**
   - Konfigurieren Sie Session-Timeouts:
     ```
     Idle Timeout: 2 Stunden
     Max Session Lifetime: 8 Stunden
     Persistent Session: Deaktiviert für sensible Anwendungen
     ```

2. **Device Trust**
   - Aktivieren Sie Device Trust für bekannte Geräte
   - Konfigurieren Sie automatische Device-Registrierung

## Testen der Konfiguration

### Schritt 1: Verbindungstest

1. **Test von Okta**
   - Gehen Sie zur Cloud Temple Anwendung in Okta
   - Klicken Sie auf **View Setup Instructions**
   - Verwenden Sie den bereitgestellten Test-Link

2. **Test von Cloud Temple**
   - Melden Sie sich von der Cloud Temple Konsole ab
   - Klicken Sie auf **Sign in with SSO**
   - Geben Sie Ihre Okta-Domäne ein
   - Überprüfen Sie die Weiterleitung zu Okta

### Schritt 2: End-to-End-Test

1. **Authentifizierungsprozess**
   - Authentifizieren Sie sich mit Okta-Anmeldedaten
   - Überprüfen Sie die Weiterleitung zur Cloud Temple Konsole
   - Validieren Sie, dass Berechtigungen korrekt angewendet werden

2. **Attribut-Validierung**
   - Überprüfen Sie, dass Benutzerinformationen korrekt ausgefüllt sind
   - Validieren Sie Gruppenmitgliedschaft und zugewiesene Rollen
   - Testen Sie verschiedene Benutzerkonten mit unterschiedlichen Rollen

### Schritt 3: MFA-Test

1. **MFA-Herausforderung**
   - Testen Sie verschiedene MFA-Faktoren
   - Überprüfen Sie adaptive Authentifizierung
   - Validieren Sie Fallback-Optionen

2. **Session-Verhalten**
   - Testen Sie Session-Timeouts
   - Überprüfen Sie Concurrent Session Limits
   - Validieren Sie Single Logout (SLO)

## Überwachung und Protokollierung

### Schritt 1: Okta System Log

1. **Authentifizierungs-Events**
   - Navigieren Sie zu **Reports** > **System Log**
   - Filtern Sie nach Cloud Temple Anwendung
   - Überwachen Sie erfolgreiche und fehlgeschlagene Anmeldungen

2. **Wichtige Events überwachen**
   - `user.authentication.sso`
   - `user.session.start`
   - `user.session.end`
   - `application.user_membership.add`
   - `application.user_membership.remove`

### Schritt 2: Alerting konfigurieren

1. **Sicherheits-Alerts**
   - Konfigurieren Sie Alerts für verdächtige Aktivitäten
   - Beispiele:
     - Multiple fehlgeschlagene Anmeldeversuche
     - Anmeldungen von neuen Standorten
     - Ungewöhnliche Anmeldezeiten

2. **Operational Alerts**
   - Überwachen Sie Anwendungsverfügbarkeit
   - Konfigurieren Sie Alerts für Konfigurationsänderungen
   - Überwachen Sie Zertifikatsablaufzeiten

## Fehlerbehebung

### Häufige Probleme

1. **Weiterleitungsfehler**
   ```
   Fehler: Invalid redirect URI
   Lösung: Überprüfen Sie, dass die URLs korrekt konfiguriert sind und keine zusätzlichen Zeichen oder Leerzeichen enthalten
   ```

2. **Fehlende Attribute**
   ```
   Fehler: Required attributes not provided
   Lösung: Überprüfen Sie das Attribut-Mapping in Okta und stellen Sie sicher, dass erforderliche Attribute für den Benutzer ausgefüllt sind
   ```

3. **Autorisierungsprobleme**
   ```
   Fehler: User not authorized
   Lösung: Überprüfen Sie die Benutzerzuweisung zur Anwendung in Okta und das Gruppen-Mapping in Cloud Temple
   ```

### Diagnose-Tools

1. **Okta System Log**
   - Überprüfen Sie System-Logs in Okta auf SAML-Fehler
   - Analysieren Sie Anwendungs-spezifische Logs
   - Verwenden Sie Event Hooks für erweiterte Diagnose

2. **SAML-Tracer**
   - Verwenden Sie Browser-Erweiterungen wie SAML-tracer
   - Analysieren Sie SAML-Requests und Responses
   - Überprüfen Sie Attribut-Werte und Assertions

3. **Cloud Temple Logs**
   - Überprüfen Sie Authentifizierungs-Logs in der Cloud Temple Konsole
   - Kontaktieren Sie den Support für detaillierte Diagnose

## Sicherheit und Best Practices

### Sicherheitskonfiguration

1. **Zertifikat-Management**
   - Verwenden Sie gültige und aktuelle Zertifikate
   - Konfigurieren Sie automatische Zertifikatserneuerung wenn möglich
   - Überwachen Sie Zertifikatsablaufzeiten

2. **Session-Timeouts**
   - Konfigurieren Sie angemessene Session-Timeouts
   - Implementieren Sie Reauthentifizierungsrichtlinien für sensible Operationen
   - Verwenden Sie adaptive Session-Richtlinien

### Compliance und Audit

1. **Audit-Trail**
   - Aktivieren Sie umfassende Protokollierung von Authentifizierungen
   - Überwachen Sie ungewöhnliche oder nicht autorisierte Zugriffe
   - Exportieren Sie regelmäßig Audit-Logs für Compliance-Zwecke

2. **Regelmäßige Überprüfungen**
   - Überprüfen Sie regelmäßig Benutzerzuweisungen
   - Aktualisieren Sie Gruppen und Rollen nach Bedarf
   - Validieren Sie Sicherheitsrichtlinien und deren Durchsetzung

### Disaster Recovery

1. **Backup-Konfiguration**
   - Dokumentieren Sie alle Konfigurationseinstellungen
   - Exportieren Sie Anwendungskonfigurationen regelmäßig
   - Testen Sie Wiederherstellungsverfahren

2. **Failover-Planung**
   - Konfigurieren Sie alternative Authentifizierungsmethoden
   - Dokumentieren Sie Notfallverfahren
   - Testen Sie regelmäßig Failover-Szenarien

## Erweiterte Funktionen

### Schritt 1: API Access Management

1. **API-Token für Automatisierung**
   - Erstellen Sie API-Token für automatisierte Prozesse
   - Konfigurieren Sie Service-Accounts für Systemintegrationen
   - Implementieren Sie Token-Rotation

2. **Programmatische Benutzerverwaltung**
   - Verwenden Sie Okta APIs für Benutzerprovisionierung
   - Automatisieren Sie Gruppenzuweisungen
   - Integrieren Sie mit HR-Systemen

### Schritt 2: Advanced Reporting

1. **Custom Dashboards**
   - Erstellen Sie benutzerdefinierte Berichte
   - Konfigurieren Sie automatische Berichtserstellung
   - Integrieren Sie mit SIEM-Systemen

2. **Compliance Reporting**
   - Generieren Sie Compliance-Berichte
   - Konfigurieren Sie automatische Compliance-Checks
   - Dokumentieren Sie Audit-Trails

## Support und Ressourcen

Für Unterstützung bei der SSO-Konfiguration mit Okta:

- **Okta Dokumentation**: [https://developer.okta.com/docs/](https://developer.okta.com/docs/)
- **Okta Community**: [https://devforum.okta.com/](https://devforum.okta.com/)
- **Cloud Temple Support**: Öffnen Sie ein Ticket über die Konsole
- **Community**: Konsultieren Sie die Cloud Temple Community-Foren

### Nützliche Okta-Ressourcen

- **SAML Setup Guide**: Detaillierte SAML-Konfigurationsanleitung
- **Best Practices Guide**: Sicherheits- und Konfigurationsbest Practices
- **API Documentation**: Vollständige API-Referenz für Automatisierung
- **Troubleshooting Guide**: Häufige Probleme und Lösungen

---

*Diese Anleitung wurde aktualisiert, um die neuesten Versionen von Okta und der Cloud Temple Konsole zu berücksichtigen. Für spezifische Informationen zu Ihrer Konfiguration konsultieren Sie die neueste Dokumentation oder kontaktieren Sie den Support.*
