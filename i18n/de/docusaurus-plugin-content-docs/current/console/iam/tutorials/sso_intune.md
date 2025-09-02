---
title: SSO-Konfiguration mit Microsoft Intune
---

# Single Sign-On (SSO) Konfiguration mit Microsoft Intune

Diese Anleitung führt Sie durch die Konfiguration der Single Sign-On (SSO) Authentifizierung mit Microsoft Intune als Identity Provider für den Zugang zur Cloud Temple Konsole.

## Überblick

Microsoft Intune ist eine cloudbasierte Endpoint-Management-Lösung, die auch als Identity Provider für SSO-Authentifizierung fungieren kann. Die Integration mit Cloud Temple ermöglicht:

- **Zentrale Benutzerverwaltung** : Verwaltung der Benutzeridentitäten über Azure Active Directory
- **Bedingte Zugriffskontrolle** : Erweiterte Sicherheitsrichtlinien basierend auf Gerätestatus
- **Nahtlose Authentifizierung** : Single Sign-On Erfahrung für Benutzer
- **Compliance-Management** : Durchsetzung von Sicherheitsrichtlinien auf verwalteten Geräten

## Voraussetzungen

Bevor Sie mit der Konfiguration beginnen, stellen Sie sicher, dass Sie über Folgendes verfügen:

- Ein Microsoft Intune Administrator-Konto mit entsprechenden Berechtigungen
- Zugang zur Cloud Temple Konsole mit IAM-Administratorrechten
- Azure Active Directory Premium Lizenz (für erweiterte Funktionen)
- Von Cloud Temple bereitgestellte Konfigurationsinformationen

## Konfiguration in Microsoft Intune

### Schritt 1: Anwendungsregistrierung in Azure AD

1. **Zugang zum Azure Portal**
   - Melden Sie sich beim [Azure Portal](https://portal.azure.com) an
   - Navigieren Sie zu **Azure Active Directory** > **App-Registrierungen**

2. **Neue Anwendung registrieren**
   - Klicken Sie auf **Neue Registrierung**
   - Geben Sie folgende Informationen ein:
     ```
     Name: Cloud Temple Console
     Unterstützte Kontotypen: Nur Konten in diesem Organisationsverzeichnis
     Umleitungs-URI: https://console.cloud-temple.com/api/iam/v1/saml/acs
     ```

3. **Anwendung konfigurieren**
   - Notieren Sie sich die **Anwendungs-ID (Client-ID)**
   - Navigieren Sie zu **Authentifizierung**
   - Fügen Sie weitere Umleitungs-URIs hinzu falls erforderlich

### Schritt 2: SAML-Konfiguration

1. **Enterprise-Anwendung erstellen**
   - Gehen Sie zu **Azure Active Directory** > **Unternehmensanwendungen**
   - Klicken Sie auf **Neue Anwendung**
   - Wählen Sie **Eigene Anwendung erstellen**
   - Wählen Sie **Nicht-Katalog-Anwendung integrieren**

2. **SAML-Einstellungen konfigurieren**
   - Navigieren Sie zu **Single Sign-On**
   - Wählen Sie **SAML** als SSO-Methode
   - Konfigurieren Sie die grundlegenden SAML-Einstellungen:

   | Feld | Wert |
   |------|------|
   | **Bezeichner (Entity ID)** | `https://console.cloud-temple.com` |
   | **Antwort-URL (ACS-URL)** | `https://console.cloud-temple.com/api/iam/v1/saml/acs` |
   | **Anmelde-URL** | `https://console.cloud-temple.com` |
   | **Relay State** | (Leer lassen) |

3. **Benutzerattribute und Ansprüche**
   Konfigurieren Sie die folgenden Attribute:

   | Anspruchsname | Quelle | Quellattribut |
   |---------------|--------|---------------|
   | `email` | Attribut | user.mail |
   | `firstName` | Attribut | user.givenname |
   | `lastName` | Attribut | user.surname |
   | `groups` | Attribut | user.groups |

### Schritt 3: Intune-spezifische Konfiguration

1. **Geräte-Compliance-Richtlinien**
   - Navigieren Sie zu **Microsoft Endpoint Manager Admin Center**
   - Gehen Sie zu **Geräte** > **Compliance-Richtlinien**
   - Erstellen Sie eine neue Richtlinie für Cloud Temple Zugang:

   ```json
   {
     "name": "Cloud Temple Access Policy",
     "description": "Compliance policy for Cloud Temple console access",
     "platform": "All",
     "settings": {
       "deviceHealthAttestation": true,
       "bitLockerEnabled": true,
       "secureBootEnabled": true,
       "codeIntegrityEnabled": true,
       "minimumOSVersion": "10.0.19041"
     }
   }
   ```

2. **Bedingte Zugriffskontrolle**
   - Gehen Sie zu **Azure Active Directory** > **Sicherheit** > **Bedingter Zugriff**
   - Erstellen Sie eine neue Richtlinie:

   ```
   Name: Cloud Temple Console Access
   Benutzer und Gruppen: [Spezifische Gruppen auswählen]
   Cloud-Apps: Cloud Temple Console
   Bedingungen:
     - Geräteplattformen: Alle Plattformen
     - Standorte: Vertrauenswürdige Standorte
   Zugriffskontrollen:
     - Gewähren: Zugriff gewähren
     - Erfordern: Kompatibles Gerät
     - Erfordern: Hybrid Azure AD-Einbindung
   ```

## Konfiguration in der Cloud Temple Konsole

### Schritt 1: Zugang zur IAM-Konfiguration

1. **Anmeldung bei der Konsole**
   - Gehen Sie zu [https://console.cloud-temple.com](https://console.cloud-temple.com)
   - Authentifizieren Sie sich mit einem Administratorkonto

2. **Navigation zu IAM**
   - Klicken Sie im Hauptmenü auf **Identity and Access Management**
   - Wählen Sie **Identity Providers**

### Schritt 2: Intune Provider hinzufügen

1. **Provider erstellen**
   - Klicken Sie auf **Add Identity Provider**
   - Wählen Sie **SAML 2.0** als Typ
   - Geben Sie einen beschreibenden Namen ein: `Microsoft Intune SSO`

2. **SAML-Konfiguration**
   - **Metadata URL**: Fügen Sie die Azure AD Metadaten-URL ein
   - Oder laden Sie die XML-Metadatendatei hoch
   - **Entity ID**: Überprüfen Sie, dass sie mit der Azure AD Entity ID übereinstimmt
   - **SSO URL**: Überprüfen Sie, dass sie mit der Azure AD SSO URL übereinstimmt

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
   - Definieren Sie die Zuordnung zwischen Azure AD Gruppen und Cloud Temple Rollen
   - Beispiel:
     - Azure AD Gruppe `CloudTemple-Admins` → Rolle `Administrator`
     - Azure AD Gruppe `CloudTemple-Users` → Rolle `User`
     - Azure AD Gruppe `CloudTemple-Operators` → Rolle `Operator`

2. **Autorisierungsregeln**
   - Konfigurieren Sie Regeln zur Bestimmung des Zugriffs basierend auf Gruppen
   - Definieren Sie Berechtigungen für jede zugeordnete Rolle

## Benutzerzuweisung in Intune

### Schritt 1: Benutzergruppen erstellen

1. **Azure AD Gruppen**
   - Navigieren Sie zu **Azure Active Directory** > **Gruppen**
   - Erstellen Sie Sicherheitsgruppen für Cloud Temple Benutzer:
     ```
     CloudTemple-Admins: Administratoren
     CloudTemple-Users: Standard-Benutzer
     CloudTemple-Operators: Operatoren
     ```

2. **Gruppenmitgliedschaft**
   - Fügen Sie Benutzer zu den entsprechenden Gruppen hinzu
   - Konfigurieren Sie dynamische Gruppenmitgliedschaft falls gewünscht

### Schritt 2: Anwendungszuweisung

1. **Benutzer zuweisen**
   - Gehen Sie zur Cloud Temple Enterprise-Anwendung
   - Klicken Sie auf **Benutzer und Gruppen**
   - Klicken Sie auf **Benutzer/Gruppe hinzufügen**
   - Wählen Sie die entsprechenden Gruppen aus

2. **Rollenzuweisung**
   - Weisen Sie jeder Gruppe die entsprechende Rolle zu
   - Konfigurieren Sie spezifische Berechtigungen falls erforderlich

## Geräte-Management und Compliance

### Schritt 1: Geräteregistrierung

1. **Automatische Registrierung**
   - Konfigurieren Sie die automatische MDM-Registrierung
   - Gehen Sie zu **Azure Active Directory** > **Mobilität (MDM und MAM)**
   - Konfigurieren Sie Microsoft Intune:
     ```
     MDM-Benutzerbereich: Alle
     MDM-Nutzungsbedingungen-URL: [Intune URL]
     MDM-Erkennungs-URL: [Intune URL]
     MDM-Compliance-URL: [Intune URL]
     ```

2. **Geräterichtlinien**
   - Erstellen Sie Konfigurationsprofile für verwaltete Geräte
   - Definieren Sie Sicherheitsbaselines
   - Konfigurieren Sie App-Schutzrichtlinien

### Schritt 2: Compliance-Überwachung

1. **Compliance-Dashboard**
   - Überwachen Sie den Compliance-Status der Geräte
   - Konfigurieren Sie Benachrichtigungen für Non-Compliance
   - Erstellen Sie Berichte für Audit-Zwecke

2. **Automatische Aktionen**
   - Konfigurieren Sie automatische Aktionen bei Non-Compliance
   - Beispiele:
     - E-Mail-Benachrichtigung an Benutzer
     - Blockierung des Zugriffs nach X Tagen
     - Automatische Gerätewischung bei kritischen Verstößen

## Testen der Konfiguration

### Schritt 1: Verbindungstest

1. **Test von Azure AD**
   - Verwenden Sie das Azure AD Test-Tool
   - Überprüfen Sie die SAML-Antwort
   - Validieren Sie die Attribut-Zuordnung

2. **Test von Cloud Temple**
   - Melden Sie sich von der Cloud Temple Konsole ab
   - Klicken Sie auf **Sign in with SSO**
   - Geben Sie Ihre Organisationsdomäne ein
   - Überprüfen Sie die Weiterleitung zu Azure AD

### Schritt 2: End-to-End-Test

1. **Benutzerauthentifizierung**
   - Testen Sie mit verschiedenen Benutzerkonten
   - Überprüfen Sie die Rollenzuweisung
   - Validieren Sie die Berechtigungen

2. **Geräte-Compliance-Test**
   - Testen Sie mit kompatiblen und nicht-kompatiblen Geräten
   - Überprüfen Sie die bedingte Zugriffskontrolle
   - Validieren Sie die Blockierung bei Non-Compliance

## Fehlerbehebung

### Häufige Probleme

1. **Authentifizierungsfehler**
   ```
   Fehler: SAML-Antwort ungültig
   Lösung: Überprüfen Sie die Zertifikatskonfiguration und Gültigkeitsdauer
   ```

2. **Attribut-Mapping-Probleme**
   ```
   Fehler: Benutzerattribute nicht verfügbar
   Lösung: Überprüfen Sie die Anspruchskonfiguration in Azure AD
   ```

3. **Compliance-Probleme**
   ```
   Fehler: Gerät nicht konform
   Lösung: Überprüfen Sie die Compliance-Richtlinien und Gerätestatus
   ```

### Diagnose-Tools

1. **Azure AD Anmelde-Logs**
   - Überprüfen Sie die Anmelde-Logs in Azure AD
   - Analysieren Sie Fehlercodes und Details
   - Verwenden Sie die Diagnose- und Lösungstools

2. **Intune Diagnose**
   - Verwenden Sie das Intune Troubleshooting Portal
   - Überprüfen Sie Geräte-Compliance-Status
   - Analysieren Sie App-Schutzrichtlinien-Status

3. **Cloud Temple Logs**
   - Überprüfen Sie die Authentifizierungs-Logs in der Cloud Temple Konsole
   - Kontaktieren Sie den Support für detaillierte Diagnose

## Sicherheit und Best Practices

### Sicherheitskonfiguration

1. **Zertifikat-Management**
   - Verwenden Sie gültige und aktuelle Zertifikate
   - Konfigurieren Sie automatische Zertifikatserneuerung
   - Überwachen Sie Zertifikatsablaufzeiten

2. **Session-Timeouts**
   - Konfigurieren Sie angemessene Session-Timeouts
   - Implementieren Sie Reauthentifizierungsrichtlinien für sensible Operationen

### Überwachung und Compliance

1. **Audit-Trail**
   - Aktivieren Sie die Protokollierung von Authentifizierungen
   - Überwachen Sie ungewöhnliche oder nicht autorisierte Zugriffe
   - Erstellen Sie regelmäßige Compliance-Berichte

2. **Regelmäßige Überprüfungen**
   - Überprüfen Sie regelmäßig Benutzerzuweisungen
   - Aktualisieren Sie Gruppen und Rollen nach Bedarf
   - Validieren Sie Compliance-Richtlinien

### Disaster Recovery

1. **Backup-Authentifizierung**
   - Konfigurieren Sie alternative Authentifizierungsmethoden
   - Dokumentieren Sie Notfallverfahren
   - Testen Sie regelmäßig Failover-Szenarien

2. **Dokumentation**
   - Pflegen Sie aktuelle Konfigurationsdokumentation
   - Dokumentieren Sie alle Änderungen
   - Erstellen Sie Runbooks für häufige Aufgaben

## Support und Ressourcen

Für Unterstützung bei der SSO-Konfiguration mit Microsoft Intune:

- **Microsoft Dokumentation**: [https://docs.microsoft.com/intune/](https://docs.microsoft.com/intune/)
- **Azure AD Dokumentation**: [https://docs.microsoft.com/azure/active-directory/](https://docs.microsoft.com/azure/active-directory/)
- **Cloud Temple Support**: Öffnen Sie ein Ticket über die Konsole
- **Community**: Konsultieren Sie die Cloud Temple Community-Foren

---

*Diese Anleitung wurde aktualisiert, um die neuesten Versionen von Microsoft Intune und der Cloud Temple Konsole zu berücksichtigen. Für spezifische Informationen zu Ihrer Konfiguration konsultieren Sie die neueste Dokumentation oder kontaktieren Sie den Support.*
