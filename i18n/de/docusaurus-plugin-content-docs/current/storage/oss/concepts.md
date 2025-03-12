---
title: Concepts
---

## Elastic Cloud Storage (ECS): Eine Referenzlösung

Das Object Storage Angebot von Cloud Temple basiert auf der Technologie __Elastic Cloud Storage (ECS)__ von Dell, bekannt für seine hohe Leistung und Einhaltung industrieller Standards. Mit einer **97% Kompatibilität zum AWS S3 Protokoll** gewährleistet diese Lösung:

- Eine einfache und standardisierte Integration;
- Erhöhte Flexibilität für die Benutzer;
- Einen reibungslosen Übergang zu einer modernen Speicherinfrastruktur.

---

## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich zur Gewährleistung der Datensicherheit durch anerkannte Zertifizierungen:

- **SecNumCloud**: Von der ANSSI ausgestellte Qualifikation, die die Souveränität und Sicherheit der Daten im französischen und europäischen Rahmen sicherstellt.
- **HDS (Hébergement de Données de Santé)**: Konformität mit den strengen Anforderungen an sensible medizinische Daten.
- **ISO 27001**: Einhaltung der besten Praktiken im Bereich der Informationssicherheit.

## Fortschrittliche Verschlüsselung für optimalen Schutz

Die Datenverschlüsselung wird systematisch angewendet und gewährleistet deren Sicherheit in jeder Phase:

- **Während der Übertragung**: Schutz durch das Protokoll __TLS 1.3__.
- **Während der Speicherung**: Drei Optionen, die an die Bedürfnisse der Benutzer angepasst sind:
  - **SSE-ECS**: Schlüssel werden von Cloud Temple verwaltet für eine vereinfachte Verwaltung.
  - **SSE-C**: Schlüssel werden vom Kunden bereitgestellt für eine erhöhte Kontrolle.
  - **CSE**: Verschlüsselung erfolgt durch den Kunden für maximale Sicherheit.

| Verschlüsselungsmodell           | Vorteile                              | Nachteile                          |
| -------------------------------- | ------------------------------------- | ---------------------------------- |
| **SSE-ECS**                      | Vereinfachte und transparente Verwaltung | Weniger Kontrolle über die Schlüssel |
| **SSE-C**                        | Volle Kontrolle über die Schlüssel    | Schlüsselverwaltung erforderlich   |
| **CSE**                          | Maximale Sicherheit                   | Komplexität und Auswirkungen auf die Leistung |

---

## Architektur und Bereitstellung

### Regionale Bereitstellung

Die S3-Speicherung von Cloud Temple speichert die Daten nativ in [**drei unterschiedlichen Verfügbarkeitszonen**](../../additional_content/concepts_az.md) innerhalb einer [Region](../../additional_content/concepts_regional.md) von Cloud Temple. Diese Architektur ist darauf ausgelegt, hohe Verfügbarkeit und maximale Widerstandsfähigkeit gegenüber Hardware- oder Softwareausfällen zu bieten:
- Erasure Coding (EC): Standardmäßig verwenden wir ein EC 12+4 Schema, das die Daten in 12 Datensegmente und 4 Paritätssegmente aufteilt. Diese Technik ermöglicht es, die Daten auch beim Verlust mehrerer Segmente wiederherzustellen.
- Datenverteilung: Die EC-Segmente werden über verschiedene Knoten und Racks verteilt und bieten Schutz vor Festplatten-, Knoten- und sogar Rackausfällen.
- Geografische Replikation: Für zusätzlichen Schutz werden die Daten über 3 Verfügbarkeitszonen repliziert, was eine Widerstandsfähigkeit gegenüber lokalen Katastrophen bietet.

Diese Replikation stellt sicher, dass selbst bei einem Ausfall einer Zone die Daten zugänglich und intakt bleiben,
was zu einer hoch widerstandsfähigen Speicherinfrastruktur beiträgt.

---

## Leistung und Service Levels

### Garantierte Service Levels

Cloud Temple bietet eine hochzuverlässige Infrastruktur mit klaren Verpflichtungen:

| Verpflichtung                    | Ziel                                |
| -------------------------------- | ----------------------------------- |
| Verfügbarkeit                    | 99,99% (einschließlich Wartung)     |
| Datenbeständigkeit               | 99,99999999%                        |
| Garantierte Netzwerkbandbreite   | 1 Gbp/sekunde                       |

### Grenzen des Object Storage

Cloud Temple bietet eine Object Storage Lösung mit den folgenden technischen Merkmalen:

• **Maximale Anzahl von Buckets pro Tenant**: Die maximale Anzahl von Buckets pro Tenant beträgt 999.

• **Maximale Bucketgröße**: Die maximale Größe eines Objekts beträgt 5 TB.

• **Anzahl gleichzeitiger Verbindungen**: Keine spezifische Grenze.

• **Upload-Leistung**:
  - Bis zu 100Gb/s im Eingang
  - Bis zu 100Gb/s im Ausgang

---

## Konzepte und Organisation des Speicherplatzes

### Das Speicherkonto

Ein **Storage Account** ist eine logische Einheit, die über einen **Access Key** und einen **Secret Key** verfügt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden.
Auf diesem Konto werden die Rollen und Berechtigungen für die **Buckets** positioniert, um den Zugriff und die zulässigen Aktionen für jeden Benutzer oder Dienst genau zu steuern.

### Der "Bucket" im Objekt-Speicher-Ökosystem

Ein S3-Bucket, das durch den Amazon Simple Storage Service (Amazon S3) populär gemacht wurde, ist **ein öffentlicher Cloud-Speichercontainer**, der entwickelt wurde, um eine unbegrenzte Menge an Daten sicher, zuverlässig und hochverfügbar zu speichern. Jeder S3-Bucket kann Dateien (in S3 als "Objekte" bezeichnet) speichern, von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien. Buckets werden verwendet, um den Speicherplatz innerhalb des Cloud Temple Object Storage logisch zu organisieren, und jeder Bucket ist durch einen eindeutigen, vom Benutzer bereitgestellten Namen identifiziert. S3-Buckets bieten fortschrittliche Funktionen wie Versionsverwaltung, Datensicherung durch Zugriffskontrollrichtlinien und die Möglichkeit der Unveränderlichkeit.

### Nutzt das S3-Angebot von Cloud Temple die 'PathStyle'-Methode?

Aufgrund der mit der SecNumCloud-Qualifikation verbundenen Einschränkungen ist das Angebot derzeit so konzipiert, dass die '**PathStyle**'-Methode verwendet wird. Wir arbeiten daran, die '**UrlStyle**'-Methode ab dem ersten Halbjahr 2025 verfügbar zu machen.

### Vorab unterzeichnete Anfragen

Die Object Storage Lösung von Cloud Temple unterstützt **vorab unterzeichnete Anfragen**, eine wesentliche Funktion, die es ermöglicht, temporäre URLs zu erstellen, die für einen begrenzten Zeitraum Zugang zu bestimmten Objekten gewähren. Diese Funktion ist besonders nützlich, um Dateien sicher mit externen Benutzern zu teilen, ohne ihnen permanente Rechte oder Zugangskennungen für den Bucket zu geben. Die vorab unterzeichneten Anfragen können mit einer genauen Gültigkeitsdauer konfiguriert werden, was eine granulare Kontrolle über den Datenzugriff ermöglicht.