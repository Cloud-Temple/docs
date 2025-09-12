---
title: Konzepte
---

## Elastic Cloud Storage (ECS): Eine Referenzlösung

Das Objektspeicherangebot von Cloud Temple basiert auf der __Elastic Cloud Storage (ECS)__-Technologie von Dell, die für ihre hohe Leistung und die Einhaltung von Industriestandards bekannt ist. Mit einer Kompatibilität von __97% mit dem AWS S3-Protokoll__ gewährleistet diese Lösung:

- Eine einfache und standardisierte Integration;
- Erhöhte Flexibilität für die Benutzer;
- Einen reibungslosen Übergang zu einer modernen Speicherinfrastruktur.

---

## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich, die Datensicherheit durch anerkannte Zertifizierungen zu gewährleisten:

- __SecNumCloud__: Eine von der ANSSI ausgestellte Qualifikation, die die Souveränität und Sicherheit der Daten in einem französischen und europäischen Rahmen sicherstellt.
- __HDS (Hosting von Gesundheitsdaten)__: Einhaltung der strengen Anforderungen für sensible medizinische Daten.
- __ISO 27001__: Einhaltung der besten Praktiken im Bereich der Informationssicherheit.

## Erweiterte Verschlüsselung für optimalen Schutz

Die Datenverschlüsselung wird systematisch angewendet, um ihre Sicherheit in jeder Phase zu gewährleisten:

- __Während der Übertragung__: Schutz durch das __TLS 1.3__-Protokoll.
- __Im Ruhezustand__: Drei Optionen, die auf die Bedürfnisse der Benutzer zugeschnitten sind:
  - __SSE-ECS__: Schlüssel, die von Cloud Temple für eine vereinfachte Verwaltung verwaltet werden.
  - __SSE-C__: Vom Kunden bereitgestellte Schlüssel für eine erhöhte Kontrolle.
  - __CSE__: Vom Kunden durchgeführte Verschlüsselung für maximale Sicherheit.

| Verschlüsselungsmodell | Vorteile | Nachteile |
|---|---|---|
| __SSE-ECS__ | Vereinfachte und transparente Verwaltung | Weniger Kontrolle über die Schlüssel |
| __SSE-C__ | Vollständige Kontrolle über die Schlüssel | Schlüsselverwaltung erforderlich |
| __CSE__ | Maximale Sicherheit | Komplexität und Leistungseinbußen |

---

## Architektur und Bereitstellung

### Bereitstellung vom Typ Region

Der S3-Speicher von Cloud Temple speichert die Daten nativ in [__drei verschiedenen Verfügbarkeitszonen__](../../../../additional_content/concepts_az.md) innerhalb derselben Cloud Temple [Region](../../../../additional_content/concepts_regional.md). Diese Architektur ist darauf ausgelegt, eine hohe Verfügbarkeit und maximale Ausfallsicherheit gegenüber Hardware- oder Softwareausfällen zu bieten:

- Erasure Coding (EC): Standardmäßig verwenden wir ein EC-Schema von 12+4, das die Daten in 12 Datensegmente und 4 Paritätssegmente aufteilt. Diese Technik ermöglicht die Wiederherstellung der Daten auch bei Verlust mehrerer Segmente.
- Datenverteilung: Die EC-Segmente werden auf verschiedene Knoten und Racks verteilt, um einen Schutz vor Ausfällen von Festplatten, Knoten und sogar ganzen Racks zu gewährleisten.
- Geografische Replikation: Für zusätzlichen Schutz werden die Daten auf 3 Verfügbarkeitszonen repliziert, was eine Ausfallsicherheit gegenüber lokalen Katastrophen bietet.

Diese Replikation stellt sicher, dass die Daten auch bei Ausfall einer Zone zugänglich und intakt bleiben, was zu einer hochgradig widerstandsfähigen Speicherinfrastruktur beiträgt.

---

## Leistung und Servicelevel

### Garantierte Servicelevel

Cloud Temple bietet eine hochzuverlässige Infrastruktur mit klaren Verpflichtungen:

| Verpflichtung | Ziel |
|---|---|
| Verfügbarkeit | 99,99% (einschließlich Wartung) |
| Datendurabilität | 99,999999999% |
| Garantierte Netzwerkbandbreite | 1 Gbit/s |

### Einschränkungen des Objektspeichers

Cloud Temple bietet eine Objektspeicherlösung mit den folgenden technischen Merkmalen:

• __Maximale Anzahl von Buckets pro Mandant__: Die maximale Anzahl von Buckets pro Mandant beträgt 999.

• __Größenbeschränkung pro Bucket__: Die maximale Größe eines Objekts beträgt 5 TB.

• __Anzahl gleichzeitiger Verbindungen__: Keine spezifische Begrenzung.

• __Leistung__:

- Bis zu 1 Gbit/s Eingang
- Bis zu 1 Gbit/s Ausgang

---

## Speicherkonzepte und -organisation

### Das Speicherkonto

Ein __Speicherkonto__ ist eine logische Einheit, die einen __Zugriffsschlüssel__ und einen __geheimen Schlüssel__ besitzt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden.
Auf diesem Konto werden die Rollen und Berechtigungen für die __Buckets__ festgelegt, um den Zugriff und die zulässigen Aktionen für jeden Benutzer oder Dienst genau zu steuern.

### Arten von Speicherkonten

Die Cloud Temple Object Storage-Plattform unterscheidet zwei Arten von Speicherkonten, jede mit einer spezifischen Rolle und Berechtigungsstufe:

#### 1. Klassisches Speicherkonto

Dies ist der Standardkontotyp, den Sie für die meisten Ihrer Anwendungsfälle erstellen werden.

*   **Schlüsselverwaltung**: Für jedes klassische Konto können Sie ein Paar Zugriffsschlüssel (`Zugriffsschlüssel` und `geheimer Schlüssel`) generieren.
*   **Granulare Berechtigungen**: Die Zugriffsrechte dieses Kontos werden auf Bucket-Ebene über Zugriffskontrolllisten (ACLs) definiert. Sie müssen ihm explizit Berechtigungen (Lesen, Schreiben usw.) für die Buckets erteilen, auf die er zugreifen soll.

#### 2. Globales (Root) Speicherkonto

Jeder *Namespace* (Mandant) verfügt über ein einziges globales Speicherkonto, das manchmal als "Root-Konto" bezeichnet wird. Dieses Konto verfügt über erweiterte administrative Berechtigungen.

*   **Vollständiger Zugriff**: Das globale Konto hat vollen Zugriff auf alle Buckets innerhalb des Namespace, ohne dass ihm spezifische Berechtigungen zugewiesen werden müssen. Es kann alle möglichen Operationen im gesamten Speicherdienst ausführen.
*   **Administrative Verwendung**: Es ist hauptsächlich für globale Konfigurations- und Verwaltungsaufgaben vorgesehen.
*   **Schlüsselzurücksetzung**: Aufgrund seiner Bedeutung können Sie, wenn der Zugriffsschlüssel und der geheime Schlüssel dieses Kontos verloren gehen, diese auf der Plattform zurücksetzen, um neue zu generieren.

### Der "Bucket" im Ökosystem des Objektspeichers

Ein S3-Bucket, populär gemacht durch den Amazon Simple Storage Service (Amazon S3), ist ein __öffentlicher Cloud-Speichercontainer__, der dazu dient, eine unbegrenzte Menge an Daten sicher, zuverlässig und hochverfügbar zu speichern. Jeder S3-Bucket kann Dateien (in S3 als "Objekte" bezeichnet) speichern, die von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien reichen. Buckets werden verwendet, um den Speicherplatz innerhalb des Cloud Temple-Objektspeichers logisch zu organisieren, und jeder Bucket wird durch einen eindeutigen, vom Benutzer bereitgestellten Namen identifiziert. S3-Buckets bieten erweiterte Funktionen wie Versionierung, Datensicherheit durch Zugriffskontrollrichtlinien und die Möglichkeit der Unveränderlichkeit.

### Verwendet das S3-Angebot von Cloud Temple die 'PathStyle'-Methode?

Aufgrund der mit der SecNumCloud-Qualifikation verbundenen Einschränkungen ist das Angebot derzeit für die Verwendung der '__PathStyle__'-Methode vorgesehen. Wir arbeiten daran, die '__UrlStyle__'-Methode im zweiten Halbjahr 2025 verfügbar zu machen.

### Vor-signierte Anfragen

Der Objektspeicher von Cloud Temple unterstützt __vor-signierte Anfragen__, eine wesentliche Funktion, die es ermöglicht, temporäre URLs zu generieren, die für eine begrenzte Zeit Zugriff auf bestimmte Objekte gewähren. Diese Funktion ist besonders nützlich, um Dateien sicher mit externen Benutzern zu teilen, ohne ihnen dauerhafte Rechte oder Zugangsdaten für den Bucket zu gewähren. Vor-signierte Anfragen können mit einer genauen Gültigkeitsdauer konfiguriert werden, was eine granulare Kontrolle über den Datenzugriff ermöglicht.

### Unveränderlichkeit von Objekten (Object Lock)

Der Objektspeicher von Cloud Temple, basierend auf Dell ECS, unterstützt die Unveränderlichkeitsfunktion über **Object Lock** in Übereinstimmung mit dem S3-Standard. Diese Option ermöglicht es, Objekte im **WORM (Write Once, Read Many)**-Modus zu konfigurieren, um sie für einen definierten Zeitraum vor jeglicher Änderung oder Löschung zu schützen. Dies ist ein wesentlicher Schutz für die Einhaltung gesetzlicher Vorschriften und die Abwehr von Ransomware.

#### Funktionsweise

Die Unveränderlichkeit gilt für Objektversionen und kann auf zwei Arten konfiguriert werden:
*   **Feste Aufbewahrungsfrist**: Das Objekt wird für eine bestimmte Dauer (in Tagen oder Jahren) gesperrt.
*   **Gesetzliche Aufbewahrung (Legal Hold)**: Das Objekt wird unbegrenzt gesperrt, bis die Aufbewahrung explizit aufgehoben wird.

#### Implementierungsbedingungen

*   **Versionierung erforderlich**: Um Object Lock zu aktivieren, muss die Versionierung für den Bucket aktiviert sein. Sobald Object Lock aktiv ist, kann die Versionierung nicht mehr deaktiviert werden.
*   **Aktivierung bei der Erstellung**: Die Unveränderlichkeit muss zum Zeitpunkt der Erstellung des Buckets über die S3-API aktiviert werden (z. B. mit dem Header `x-amz-bucket-object-lock-enabled: true`).
*   **Zwei Schutzmodi**:
    *   **Governance-Modus**: Benutzer mit spezifischen Berechtigungen können die Aufbewahrungseinstellungen ändern oder löschen.
    *   **Compliance-Modus**: Niemand, einschließlich des Root-Administrators, kann die Aufbewahrungseinstellungen ändern oder löschen. Dies ist die höchste Schutzstufe.

#### Hauptanwendungsfälle

*   **Schutz vor Ransomware**: Geschützte Backups können durch einen Angriff weder verschlüsselt noch gelöscht werden, was eine zuverlässige Datenwiederherstellung gewährleistet.
*   **Einhaltung gesetzlicher Vorschriften**: Erfüllt strenge Anforderungen an die Datenaufbewahrung in Sektoren wie dem Finanzwesen (FINRA, SEC 17a-4) oder dem Gesundheitswesen.
