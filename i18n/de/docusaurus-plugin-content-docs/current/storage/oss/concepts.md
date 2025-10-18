

---
title: Konzepte
---



## Elastic Cloud Storage (ECS): Eine Referenzlösung

Das Objektspeicherangebot Cloud Temple basiert auf der Technologie __Elastic Cloud Storage (ECS)__ von Dell, die für ihre hohe Leistungsfähigkeit und Einhaltung industrieller Standards bekannt ist. Mit einer Kompatibilität von __97 % mit dem AWS S3-Protokoll__ bietet diese Lösung:

- Eine einfache und standardisierte Integration;
- Erhöhte Flexibilität für die Benutzer;
- Eine nahtlose Überleitung zu einer modernen Speicherinfrastruktur.

---



## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich, die Sicherheit der Daten durch anerkannte Zertifizierungen zu gewährleisten:

- __SecNumCloud__ : Zertifizierung, die von der ANSSI ausgestellt wird, die Souveränität und Sicherheit der Daten in einem französischen und europäischen Rahmen gewährleistet.
- __HDS (Datenhosting für Gesundheitsdaten)__ : Konformität mit strengen Anforderungen für sensible Gesundheitsdaten.
- __ISO 27001__ : Einhaltung der besten Praktiken im Bereich der Informationssicherheit.



## Forte Verschlüsselung für optimale Sicherheit

Die Datenverschlüsselung wird systematisch angewendet und gewährleistet ihre Sicherheit in jedem Schritt:

- __Im Transits__: Schutz über das Protokoll __TLS 1.3__.
- __Im Speicher__: Drei Optionen, die den Anforderungen der Benutzer entsprechen:
  - __SSE-ECS__: Schlüssel, die von Cloud Temple verwaltet werden, für eine vereinfachte Verwaltung.
  - __SSE-C__: Schlüssel, die vom Kunden bereitgestellt werden, für einen erhöhten Kontrolle.
  - __CSE__: Verschlüsselung, die vom Kunden durchgeführt wird, für maximale Sicherheit.

| Verschlüsselungsmodell         | Vorteile                              | Nachteile                     |
| ----------------------------- | -------------------------------------- | ----------------------------- |
| __SSE-ECS__                  | Einfache und transparente Verwaltung     | Weniger Kontrolle über die Schlüssel   |
| __SSE-C__                    | Vollständige Kontrolle über die Schlüssel            | Schlüsselverwaltung erforderlich       |
| __CSE__                      | Maximale Sicherheit                      | Komplexität und Leistungseinbußen |



## Architektur und Bereitstellung



### Regionale Bereitstellung

Der Cloud Temple S3-Speicher speichert Daten native in [__drei unterschiedlichen Availability Zones__](../../additional_content/concepts_az.md) innerhalb derselben [Region](../../additional_content/concepts_regional.md) von Cloud Temple. Diese Architektur ist darauf ausgelegt, eine hohe Verfügbarkeit und maximale Resilienz gegenüber Hardware- oder Softwareausfällen zu bieten:

- Erasure Coding (EC): Wir verwenden standardmäßig ein EC-12+4-Schema, das die Daten in 12 Datenblöcke und 4 Paritätsblöcke aufteilt. Diese Technik ermöglicht die Wiederherstellung der Daten, auch wenn mehrere Blöcke verloren gehen.
- Datenverteilung: Die EC-Blöcke werden auf verschiedenen Knoten und Racks verteilt, was Schutz gegen Festplatten-, Knoten- und sogar Rackausfälle gewährleistet.
- Geografische Replikation: Um zusätzlichen Schutz zu gewährleisten, werden die Daten auf drei Availability Zones repliziert, was Resilienz gegenüber lokalen Katastrophen bietet.

Diese Replikation stellt sicher, dass selbst bei einem Ausfall einer Zone die Daten weiterhin zugänglich und intakt bleiben, was zu einer hochverfügbaren Speicherinfrastruktur beiträgt.



## Leistung und Servicelevel



### Garantierte Dienstleistungslevel

Cloud Temple bietet eine hochverlässliche Infrastruktur mit klaren Verpflichtungen:

| Verpflichtung                      | Ziel                         |
| ---------------------------------- | ---------------------------- |
| Verfügbarekeit                     | 99,99% (einschließlich Wartung)|
| Datenintegrität                    | 99,99999999%                 |
| Garantierte Netzwerkbandbreite     | 1 Gbps/Sekunde               |



### Einschränkungen des Objektspeichers

Cloud Temple bietet eine Objektspeicherlösung mit folgenden technischen Merkmalen:

• __Maximale Anzahl von Buckets pro Tenant__ : Die maximale Anzahl von Buckets pro Tenant beträgt 999.

• __Maximale Größe pro Bucket__ : Die maximale Größe eines Objekts beträgt 5 To.

• __Anzahl gleichzeitiger Verbindungen__ : Keine spezifische Begrenzung.

• __Leistung__ :

- Bis zu 1 Gb/s Eingabegeschwindigkeit
- Bis zu 1 Gb/s Ausgabegeschwindigkeit

---



## Konzepte und Organisation der Speicherung



### Das Speicherkonto

Ein __Storage Account__ ist eine logische Einheit, die einen __Zugriffsschlüssel__ und einen __Geheimnis-Schlüssel__ besitzt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden. Auf diesem Konto werden die Rollen und Berechtigungen, die mit __Buckets__ verbunden sind, definiert, um den Zugriff und die autorisierten Aktionen genau zu kontrollieren.



### Arten von Speicherkonten

Die Cloud Object Storage-Plattform Temple unterscheidet zwei Arten von Speicherkonten, jeder mit einer spezifischen Rolle und Berechtigungsebene:



#### 1. Klassisches Speicherkonto

Dies ist der Standard-Konto-Typ, den Sie für die meisten Anwendungsfälle erstellen werden.

*   **Schlüsselverwaltung**: Für jedes klassische Konto können Sie ein Schlüsselpaar für den Zugriff (`Access Key` und `Secret Key`) generieren.
*   **Granulare Berechtigungen**: Die Zugriffsrechte dieses Kontos werden über Zugriffssteuerungslisten (ACL) pro Bucket definiert. Sie müssen ihm explizit Berechtigungen (Lesen, Schreiben usw.) für die Buckets erteilen, auf die es zugreifen muss.



#### 2. Globales Speicherkonto (Root)

Jeder *namespace* (tenant) verfügt über ein einziges globales Speicherkonto, manchmal auch als „Root-Konto“ bezeichnet. Dieses Konto verfügt über erweiterte Administratorrechte.

*   **Vollzugriff**: Das globale Konto hat vollen Zugriff auf alle Buckets innerhalb des Namespace, ohne dass spezifische Berechtigungen zugewiesen werden müssen. Es kann alle möglichen Operationen auf dem gesamten Speicherdienst durchführen.
*   **Administrativer Gebrauch**: Es ist hauptsächlich für Konfigurations- und Verwaltungsaufgaben gedacht.
*   **Kennwort-Neustellung**: Aufgrund seiner Bedeutung ermöglicht die Plattform die Neustellung der Zugriffsschlüssel und des geheimen Schlüssels dieses Kontos, um neue zu generieren.



### Der "Bucket" im Ökosystem des Objektspeichers

Ein S3-Bucket, populär gemacht durch den Amazon Simple Storage Service (Amazon S3), ist __ein öffentlicher Speicherbehälter__ in der Cloud, der entwickelt wurde, um eine unbegrenzte Menge an Daten sicher, zuverlässig und hochverfügbar zu speichern. Jeder S3-Bucket kann Dateien (in S3 als "Objekte" bezeichnet) speichern, von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien. Buckets werden verwendet, um den Speicherplatz im Objektspeicher Cloud Temple logisch zu organisieren, und jeder Bucket wird durch einen eindeutigen Namen identifiziert, der vom Benutzer bereitgestellt wird. S3-Buckets bieten fortgeschrittene Funktionen wie Versionierung, Datenverschlüsselung durch Zugriffssteuerungspolitiken und die Möglichkeit der Unveränderlichkeit.



### Verwendet das S3 Cloud Temple-Angebot die Methode 'PathStyle'

Aufgrund der mit der SecNumCloud-Zertifizierung verbundenen Einschränkungen ist die Angebotsplanung derzeit auf die Verwendung der Methode '__PathStyle__' ausgerichtet. Wir arbeiten daran, die Methode '__UrlStyle__' bis S2 2025 verfügbar zu machen.



### Vorgesichtete Anfragen

Der Cloud Temple-Objektspeicher unterstützt __vorgesichtete Anfragen__, eine entscheidende Funktion, die die Erstellung temporärer URLs ermöglicht, die Zugriff auf bestimmte Objekte für eine begrenzte Dauer gewähren. Diese Funktion ist besonders nützlich, um Dateien sicher mit externen Benutzern zu teilen, ohne ihnen dauerhafte Berechtigungen oder Zugangsidentifikationen für den Bucket zu gewähren. Vorgesichtete Anfragen können mit einer genauen Gültigkeitsdauer konfiguriert werden, was einen präzisen Kontrollmechanismus für den Datenzugriff ermöglicht.



### Unveränderlichkeit der Objekte (Object Lock)

Der Objektspeicher von Cloud Temple, basierend auf Dell ECS, unterstützt die Unveränderlichkeitsfunktion über **Object Lock**, im Einklang mit dem S3-Standard. Diese Option ermöglicht die Konfiguration von Objekten im WORM-Modus (Write Once, Read Many), wodurch sie vor jeglicher Änderung oder Löschung für eine festgelegte Periode geschützt werden. Es handelt sich um eine entscheidende Schutzmaßnahme für die regulatorische Konformität und den Schutz vor Ransomware-Angriffen.



#### Funktion

Die Unveränderlichkeit gilt für Objektversionen und kann auf zwei Arten konfiguriert werden:
*   **Festgelegte Aufbewahrungsfrist**: Das Objekt ist für eine bestimmte Dauer (in Tagen oder Jahren) gesperrt.
*   **Rechtliche Aufbewahrung (Legal Hold)**: Das Objekt ist unbegrenzt gesperrt, bis die Aufbewahrung explizit aufgehoben wird.



#### Implementierungsbedingungen

*   **Erforderliche Versionierung** : Um Object Lock zu aktivieren, muss die Versionierung im Bucket aktiviert sein. Sobald Object Lock aktiviert ist, kann die Versionierung nicht mehr deaktiviert werden.
*   **Aktivierung bei der Erstellung** : Die Unveränderlichkeit muss bei der Erstellung des Buckets über die S3-API aktiviert werden (z. B. mit dem Header `x-amz-bucket-object-lock-enabled: true`).
*   **Zwei Schutzmodi** :
    *   **Gouvernance-Modus** : Benutzer mit spezifischen Berechtigungen können die Aufbewahrungsparameter ändern oder löschen.
    *   **Konformitätsmodus** : Niemand, nicht einmal der Root-Administrator, kann die Aufbewahrungsparameter ändern oder löschen. Dies ist das höchste Schutzniveau.



#### Hauptanwendungsfälle

*   **Anti-Ransomware-Schutz** : Geschützte Backups können weder verschlüsselt noch gelöscht werden, was eine zuverlässige Wiederherstellung der Daten gewährleistet.
*   **Regulierungscompliance** : Erfüllt strenge Datenhaltungsvorschriften in Sektoren wie Finanzen (FINRA, SEC 17a-4) oder Gesundheitswesen.