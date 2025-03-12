---
title: Konzepte
---

## Elastic Cloud Storage (ECS): eine Referenzlösung

Das Objektspeicherangebot von Cloud Temple basiert auf der __Elastic Cloud Storage (ECS)__ Technologie von Dell, die für ihre hohe Leistung und Einhaltung von Industriestandards bekannt ist. Mit einer __97%igen Kompatibilität mit dem AWS S3-Protokoll__ gewährleistet diese Lösung:

- Eine einfache und standardisierte Integration;
- Erhöhte Flexibilität für Benutzer;
- Einen reibungslosen Übergang zu einer modernen Speicherinfrastruktur.

---

## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich, die Datensicherheit durch anerkannte Zertifizierungen zu gewährleisten:

- __SecNumCloud__: Von der ANSSI ausgestellte Qualifikation, die Datensouveränität und Sicherheit im französischen und europäischen Rahmen gewährleistet.
- __HDS (Hébergement de Données de Santé)__: Einhaltung strenger Anforderungen für sensible medizinische Daten.
- __ISO 27001__: Einhaltung der Best Practices im Bereich der Informationssicherheit.

## Fortschrittliche Verschlüsselung für optimalen Schutz

Die Datenverschlüsselung wird systematisch angewendet und gewährleistet ihre Sicherheit in jeder Phase:

- __Während der Übertragung__: Schutz über das __TLS 1.3__-Protokoll.
- __Bei der Speicherung__: Drei Optionen, die an die Bedürfnisse der Benutzer angepasst sind:
  - __SSE-ECS__: Von Cloud Temple verwaltete Schlüssel für ein vereinfachtes Management.
  - __SSE-C__: Vom Kunden bereitgestellte Schlüssel für erhöhte Kontrolle.
  - __CSE__: Vom Kunden durchgeführte Verschlüsselung für maximale Sicherheit.

| Verschlüsselungsmodell         | Vorteile                              | Nachteile                     |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| __SSE-ECS__                  | Vereinfachtes und transparentes Management     | Weniger Kontrolle über die Schlüssel   |
| __SSE-C__                    | Vollständige Kontrolle über die Schlüssel            | Schlüsselverwaltung erforderlich       |
| __CSE__                      | Maximale Sicherheit                      | Komplexität und Auswirkungen auf die Leistung |

---

## Architektur und Bereitstellung

### Bereitstellung vom Typ Region

Der Cloud Temple S3-Speicher speichert Daten nativ auf [__drei verschiedenen Verfügbarkeitszonen__](../../additional_content/concepts_az.md) innerhalb derselben Cloud Temple [Region](../../additional_content/concepts_regional.md). Diese Architektur ist darauf ausgelegt, hohe Verfügbarkeit und maximale Widerstandsfähigkeit gegen Hardware- oder Softwarefehler zu bieten:

- Erasure Coding (EC): Standardmäßig verwenden wir ein 12+4 EC-Schema, das Daten in 12 Datensegmente und 4 Paritätssegmente aufteilt. Diese Technik ermöglicht die Rekonstruktion von Daten, selbst wenn mehrere Segmente verloren gehen.
- Datenverteilung: EC-Segmente werden auf verschiedene Knoten und Racks verteilt, was Schutz vor Ausfällen von Festplatten, Knoten und sogar ganzen Racks bietet.
- Geografische Replikation: Für zusätzlichen Schutz werden die Daten auf 3 Verfügbarkeitszonen repliziert, was Widerstandsfähigkeit gegen lokale Katastrophen bietet.

Diese Replikation stellt sicher, dass selbst bei einem Ausfall einer Zone die Daten zugänglich und intakt bleiben,
was zu einer hochgradig widerstandsfähigen Speicherinfrastruktur beiträgt.

---

## Leistung und Serviceniveaus

### Garantierte Serviceniveaus

Cloud Temple bietet eine hochzuverlässige Infrastruktur mit klaren Verpflichtungen:

| Verpflichtung                      | Ziel                         |
| ------------------------------- | ----------------------------- |
| Verfügbarkeit                   | 99,99% (einschließlich Wartung)|
| Datenhaltbarkeit          | 99,99999999%                  |
| Garantierte Netzwerkbandbreite  | 1 Gbp/Sekunde                 |

### Einschränkungen des Objektspeichers

Cloud Temple bietet eine Objektspeicherlösung mit folgenden technischen Eigenschaften:

• __Maximale Anzahl von Buckets pro Tenant__: Die maximale Anzahl von Buckets pro Tenant beträgt 999.

• __Größenbegrenzung pro Bucket__: Die maximale Größe eines Objekts beträgt 5 TB.

• __Anzahl gleichzeitiger Verbindungen__: Keine spezifische Begrenzung.

• __Upload-Leistung__:

- Bis zu 100 Gb/s Eingang
- Bis zu 100 Gb/s Ausgang

---

## Speicherkonzepte und -organisation

### Das Speicherkonto

Ein __Storage Account__ ist eine logische Einheit, die über einen __Access Key__ und einen __Secret Key__ verfügt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden.
Auf diesem Konto werden die Rollen und Berechtigungen positioniert, die mit __Buckets__ verbunden sind, was eine präzise Kontrolle des Zugriffs und der autorisierten Aktionen für jeden Benutzer oder Dienst ermöglicht.

### Der "Bucket" im Ökosystem des Objektspeichers

Ein S3-Bucket, der durch den Amazon Simple Storage Service (Amazon S3) populär wurde, ist __ein öffentlicher Speichercontainer__ in der Cloud, der darauf ausgelegt ist, eine unbegrenzte Menge an Daten sicher, zuverlässig und mit hoher Verfügbarkeit zu speichern. Jeder S3-Bucket kann Dateien (in S3 als "Objekte" bezeichnet) speichern, von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien. Buckets werden verwendet, um den Speicherplatz innerhalb des Cloud Temple Objektspeichers logisch zu organisieren, und jeder Bucket wird durch einen vom Benutzer bereitgestellten eindeutigen Namen identifiziert. S3-Buckets bieten fortschrittliche Funktionen wie Versionsverwaltung, Datensicherung über Zugriffssteuerungsrichtlinien und die Möglichkeit der Unveränderlichkeit.

### Verwendet das S3-Angebot von Cloud Temple die 'PathStyle'-Methode?

Aufgrund von Einschränkungen im Zusammenhang mit der SecNumCloud-Qualifikation ist das Angebot derzeit so konzipiert, dass es die '__PathStyle__'-Methode verwendet. Wir arbeiten daran, die '__UrlStyle__'-Methode im ersten Quartal 2025 verfügbar zu machen.

### Vorsignierte Anfragen

Der Objektspeicher von Cloud Temple unterstützt __vorsignierte Anfragen__, eine wesentliche Funktion, die es ermöglicht, temporäre URLs zu generieren, die für einen begrenzten Zeitraum Zugriff auf bestimmte Objekte gewähren. Diese Funktion ist besonders nützlich, um Dateien sicher mit externen Benutzern zu teilen, ohne ihnen dauerhafte Rechte oder Zugangsdaten für den Bucket zuzuweisen. Vorsignierte Anfragen können mit einer präzisen Gültigkeitsdauer konfiguriert werden, was eine granulare Kontrolle über den Datenzugriff bietet.
