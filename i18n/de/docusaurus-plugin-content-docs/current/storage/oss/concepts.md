---
title: Konzepte
---

## Elastic Cloud Storage (ECS): Eine Referenzlösung

Das Objektspeicherangebot Cloud Temple basiert auf der Technologie __Elastic Cloud Storage (ECS)__ von Dell, die für ihre hohe Leistungsfähigkeit und Einhaltung industrieller Standards bekannt ist. Mit einer Kompatibilität von __97 % mit dem AWS S3-Protokoll__ bietet diese Lösung:

- Eine einfache und standardisierte Integration;
- Erhöhte Flexibilität für die Benutzer;
- Eine nahtlose Transition zu einer modernen Speicherinfrastruktur.

---

## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich, die Sicherheit der Daten durch anerkannte Zertifizierungen zu gewährleisten:

- __SecNumCloud__ : Zertifizierung, die von der ANSSI erteilt wird, die Souveränität und Sicherheit der Daten im französischen und europäischen Rahmen gewährleistet.
- __HDS (Hébergement de Données de Santé)__ : Konformität mit strengen Anforderungen für sensible Gesundheitsdaten.
- __ISO 27001__ : Anschluss an die besten Praktiken im Bereich Informationssicherheit.

## Fortgeschrittene Verschlüsselung für optimalen Schutz

Die Datenverschlüsselung wird systematisch angewendet, um ihre Sicherheit in jedem Schritt zu gewährleisten:

- __Im Transit__ : Schutz über das Protokoll __TLS 1.3__.
- __Im Speicher__ : Drei Optionen, die den Bedürfnissen der Benutzer entsprechen:
  - __SSE-ECS__ : Schlüssel, die von Cloud Temple verwaltet werden, für eine vereinfachte Verwaltung.
  - __SSE-C__ : Schlüssel, die vom Kunden bereitgestellt werden, für eine erhöhte Kontrolle.
  - __CSE__ : Verschlüsselung, die vom Kunden durchgeführt wird, für maximale Sicherheit.

| Verschlüsselungsmodell         | Vorteile                              | Nachteile                     |
| ----------------------------- | -------------------------------------- | ----------------------------- |
| __SSE-ECS__                  | Einfache und transparente Verwaltung     | Geringerer Kontrolle über die Schlüssel   |
| __SSE-C__                    | Vollständige Kontrolle über die Schlüssel            | Notwendigkeit der Schlüsselverwaltung       |
| __CSE__                      | Maximale Sicherheit                      | Komplexität und Leistungseinbußen |

## Architektur und Bereitstellung

### Regionstyp-Deployment

Der Cloud Temple S3-Speicher speichert Daten native in [__drei unterschiedlichen Availability Zones__](../../additional_content/concepts_az.md) innerhalb derselben [Region](../../additional_content/concepts_regional.md) von Cloud Temple. Diese Architektur ist darauf ausgelegt, eine hohe Verfügbarkeit und maximale Resilienz gegenüber Hardware- oder Softwareausfällen zu bieten:

- Erasure Coding (EC): Wir verwenden standardmäßig ein EC-12+4-Schema, das die Daten in 12 Datenblöcke und 4 Paritätsblöcke aufteilt. Diese Technik ermöglicht die Wiederherstellung der Daten, auch wenn mehrere Blöcke verloren gehen.
- Datenverteilung: Die EC-Segmente werden auf verschiedenen Knoten und Racks verteilt, wodurch Schutz gegen Festplatten-, Knoten- und sogar gesamte Rackausfälle gewährleistet wird.
- Geografische Replikation: Zur zusätzlichen Sicherheit werden die Daten auf drei Availability Zones repliziert, wodurch Resilienz gegenüber lokalen Katastrophen gewährleistet wird.

Diese Replikation stellt sicher, dass selbst bei einem Ausfall einer Zone die Daten weiterhin zugänglich und intakt bleiben, und trägt somit zu einer hochverfügbaren Speicherinfrastruktur bei.

## Leistung und Servicelevel

### Garantierte Dienstleistungslevel

Cloud Temple bietet eine hochverlässliche Infrastruktur mit klaren Verpflichtungen:

| Verpflichtung                      | Ziel                         |
| ---------------------------------- | ----------------------------- |
| Verfügbarekeit                     | 99,99% (einschließlich Wartung)|
| Datenintegrität                    | 99,99999999%                  |
| Garantierte Netzwerkbandbreite     | 1 Gbp/Sekunde                |

### Einschränkungen des Objektspeichers

Cloud Temple bietet eine Objektspeicherlösung mit folgenden technischen Merkmalen an:

• __Maximale Anzahl von Buckets pro Mandant__ : Die maximale Anzahl von Buckets pro Mandant beträgt 999.

• __Größenbegrenzung pro Bucket__ : Die maximale Größe eines Objekts beträgt 5 To.

• __Anzahl gleichzeitiger Verbindungen__ : Keine spezifische Begrenzung.

• __Leistung beim Hochladen__ :

- Bis zu 100 Gb/s eingehend
- Bis zu 100 Gb/s ausgehend

---

## Konzepte und Organisation der Speicherung

### Das Speicherkonto

Ein __Storage Account__ ist eine logische Einheit, die einen __Zugangsschlüssel__ und einen __Geheimnis-Schlüssel__ besitzt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden.  
Auf diesem Konto werden die Rollen und Berechtigungen, die mit __Buckets__ verbunden sind, zugewiesen, um den Zugriff präzise zu kontrollieren und die für jeden Benutzer oder Dienst autorisierten Aktionen zu bestimmen.

### Typen von Speicherkonten

Die Cloud Object Storage-Plattform Temple unterscheidet zwei Arten von Speicherkonten, jeder mit einer spezifischen Rolle und einem spezifischen Berechtigungsniveau:

#### 1. Klassisches Speicherkonto

Dies ist der Standard-Konto-Typ, den Sie für die meisten Anwendungsfälle erstellen werden.

*   **Schlüsselverwaltung** : Für jedes klassische Konto können Sie ein Schlüsselpaar (Access Key und Secret Key) generieren.
*   **Granulare Berechtigungen** : Die Zugriffsrechte dieses Kontos werden auf Ebene jedes Buckets über Zugriffssteuerungslisten (ACL) definiert. Sie müssen diesem Konto explizit Berechtigungen (Lesen, Schreiben usw.) für die Buckets erteilen, auf die es zugreifen muss.

#### 2. Globales Speicherkonto (Root)

Jeder *namespace* (Tenant) verfügt über ein einziges globales Speicherkonto, das manchmal auch als „Root-Konto“ bezeichnet wird. Dieses Konto verfügt über erweiterte Administratorrechte.

*   **Vollzugriff**: Das globale Konto hat vollen Zugriff auf alle Buckets innerhalb des Namespaces, ohne dass spezifische Berechtigungen erteilt werden müssen. Es kann alle möglichen Operationen auf dem gesamten Speicherdienst durchführen.
*   **Administrative Nutzung**: Es ist hauptsächlich für Konfigurations- und globale Verwaltungsaufgaben vorgesehen.
*   **Kennwort-Reset**: Aufgrund seiner Bedeutung ermöglicht die Plattform Ihnen, die Zugriffs- und Geheimnis-Schlüssel dieses Kontos zurückzusetzen, um neue zu generieren.

### Der "Bucket" im Ökosystem des Objektspeichers

Ein S3-Bucket, populär gemacht durch den Amazon Simple Storage Service (Amazon S3), ist __ein öffentlicher Speichercontainer__ in der Cloud, der dazu konzipiert ist, eine unbegrenzte Menge an Daten sicher, zuverlässig und hochverfügbar zu speichern. Jeder S3-Bucket kann Dateien (als "Objekte" in S3 bezeichnet) speichern, von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien. Die Buckets werden verwendet, um den Speicherplatz logisch innerhalb des Objektspeichers Cloud Temple zu organisieren, und jeder Bucket wird durch einen eindeutigen Namen identifiziert, den der Benutzer bereitstellt. S3-Buckets bieten fortgeschrittene Funktionen wie die Versionsverwaltung, die Sicherung von Daten über Zugriffssteuerungspolitiken und die Möglichkeit der Unveränderlichkeit.

### Verwendet das S3 Cloud Temple-Angebot die Methode 'PathStyle'?

Aufgrund der mit der SecNumCloud-Zertifizierung verbundenen Einschränkungen ist die Angebotsplanung derzeit darauf ausgerichtet, die Methode '__PathStyle__' zu verwenden. Wir arbeiten daran, dass die Methode '__UrlStyle__' bis Q2 2025 verfügbar ist.

### Requêtes pré-signées

Der Cloud Temple-Objektspeicher unterstützt die __vorsignierten URLs__, eine entscheidende Funktion, die es ermöglicht, temporäre URLs zu generieren, die Zugriff auf bestimmte Objekte für eine begrenzte Dauer gewähren. Diese Funktion ist besonders nützlich, um Dateien sicher mit externen Benutzern zu teilen, ohne ihnen dauerhafte Berechtigungen oder Zugangsidentifikationen für den Bucket zu gewähren. Vorsignierte URLs können mit einer genauen Gültigkeitsdauer konfiguriert werden, was einen präzisen Kontrollmechanismus für den Datenzugriff ermöglicht.

### Unveränderlichkeit der Objekte (Object Lock)

Der Objektspeicher von Cloud Temple, basierend auf Dell ECS, unterstützt die Unveränderlichkeitsfunktion über **Object Lock**, im Einklang mit dem S3-Standard. Diese Option ermöglicht die Konfiguration der Objekte im WORM-Modus (Write Once, Read Many), wodurch sie vor jeder Änderung oder Löschung während eines definierten Zeitraums geschützt werden. Es handelt sich um einen wesentlichen Schutz für die regulatorische Konformität und den Schutz vor Ransomware.

#### Funktionsweise

Die Unveränderlichkeit gilt für Objektversionen und kann auf zwei Arten konfiguriert werden:
*   **Festgelegte Aufbewahrungsfrist**: Das Objekt ist für eine bestimmte Dauer (in Tagen oder Jahren) gesperrt.
*   **Rechtliche Aufbewahrung (Legal Hold)**: Das Objekt ist unbegrenzt gesperrt, bis die Aufbewahrung explizit aufgehoben wird.

#### Implementierungsbedingungen

*   **Erforderliche Versionierung**: Um Object Lock zu aktivieren, muss die Versionierung im Bucket aktiviert sein. Sobald Object Lock aktiviert ist, kann die Versionierung nicht mehr deaktiviert werden.
*   **Aktivierung bei der Erstellung**: Die Unveränderlichkeit muss bei der Erstellung des Buckets über die S3-API aktiviert werden (z. B. mit dem Header `x-amz-bucket-object-lock-enabled: true`).
*   **Zwei Schutzmodi**:
    *   **Governance-Modus**: Benutzer mit speziellen Berechtigungen können die Aufbewahrungsparameter ändern oder löschen.
    *   **Compliance-Modus**: Niemand, nicht einmal der Root-Administrator, kann die Aufbewahrungsparameter ändern oder löschen. Dies ist der höchste Schutzlevel.

#### Hauptanwendungsfälle

*   **Ransomware-Schutz**: Geschützte Backups können weder verschlüsselt noch durch einen Angriff gelöscht werden und gewährleisten eine zuverlässige Wiederherstellung der Daten.
*   **Regulatorische Konformität**: Erfüllt strenge Anforderungen an die Datenarchivierung in Sektoren wie Finanzen (FINRA, SEC 17a-4) oder Gesundheitswesen.