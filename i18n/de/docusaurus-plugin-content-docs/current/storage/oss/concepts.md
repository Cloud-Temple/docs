---
title: Concepts
---

## Elastic Cloud Storage (ECS) : eine Referenzlösung

Das Objekt-Speicherangebot von Cloud Temple basiert auf der Technologie __Elastic Cloud Storage (ECS)__ von Dell, die für ihre hohe Leistung und Einhaltung industrieller Standards anerkannt ist. Mit einer **97%igen Kompatibilität zum AWS S3-Protokoll** bietet diese Lösung:

- Eine einfache und standardisierte Integration;
- Erhöhte Flexibilität für Benutzer;
- Einen reibungslosen Übergang zu einer modernen Speicherinfrastruktur.

---

## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich zur Gewährleistung der Datensicherheit durch anerkannte Zertifizierungen:

- **SecNumCloud** : Eine von der ANSSI verliehene Qualifikation, die Datenhoheit und -sicherheit im französischen und europäischen Rahmen gewährleistet.
- **HDS (Hébergement de Données de Santé)** : Einhaltung strenger Anforderungen an sensible medizinische Daten.
- **ISO 27001** : Einhaltung der besten Praktiken im Bereich der Informationssicherheit.

## Erweiterte Verschlüsselung für optimalen Schutz

Die Datenverschlüsselung wird systematisch angewendet und gewährleistet deren Sicherheit in jeder Phase:

- **In Transit** : Schutz durch das Protokoll __TLS 1.3__.
- **Im Speicher** : Drei Optionen, um den Bedürfnissen der Benutzer gerecht zu werden:
  - **SSE-ECS** : Schlüsselverwaltung durch Cloud Temple für eine vereinfachte Verwaltung.
  - **SSE-C** : Vom Kunden bereitgestellte Schlüssel für erhöhte Kontrolle.
  - **CSE** : Vom Kunden durchgeführte Verschlüsselung für maximale Sicherheit.

| Verschlüsselungsmodell         | Vorteile                             | Nachteile                          |
| ----------------------------- | ------------------------------------ | --------------------------------- |
| **SSE-ECS**                   | Vereinfachte und transparente Verwaltung | Weniger Kontrolle über die Schlüssel |
| **SSE-C**                     | Totale Kontrolle über die Schlüssel  | Schlüsselverwaltung erforderlich    |
| **CSE**                       | Maximale Sicherheit                   | Komplexität und Auswirkungen auf die Leistung |

---

## Architektur und Deployment

### Regionstyp-Deployment

Der S3-Speicher von Cloud Temple speichert Daten nativ in __drei verschiedenen Verfügbarkeitszonen__ innerhalb einer einzigen Cloud-Temple-Region. Diese Architektur ist darauf ausgelegt, hohe Verfügbarkeit und maximale Resilienz gegenüber Hardware- oder Softwareausfällen zu bieten:
- Erasure Coding (EC): Standardmäßig verwenden wir ein EC 12+4-Schema, das die Daten in 12 Datensegmente und 4 Paritätssegmente aufteilt. Diese Technik ermöglicht die Wiederherstellung der Daten auch bei Verlust mehrerer Segmente.
- Datenverteilung: Die EC-Segmente werden auf verschiedene Knoten und Racks verteilt, wodurch Schutz vor Festplattenausfällen, Knotenfehlern und sogar kompletten Rackausfällen gewährleistet wird.
- Geografische Replikation: Zur zusätzlichen Absicherung werden die Daten auf 3 Verfügbarkeitszonen repliziert, was eine Resilienz gegenüber lokalen Katastrophen bietet.

Diese Replikation stellt sicher, dass die Daten selbst bei Ausfall einer Zone zugänglich und intakt bleiben, was zu einer hochresilienten Speicherinfrastruktur beiträgt.

---

## Leistung und Service Level

### Garantierte Service Level

Cloud Temple bietet eine hochzuverlässige Infrastruktur mit klaren Verpflichtungen:

| Verpflichtung                  | Ziel                               |
| ------------------------------ | ---------------------------------- |
| Verfügbarkeit                  | 99.99% (einschließlich Wartung)    |
| Datenbeständigkeit             | 99,99999999%                       |
| Garantierte Netzwerkbandbreite | 1 Gbit/Sekunde                     |

### Einschränkungen des Objektspeichers

Cloud Temple bietet eine Objektspeicherlösung mit folgenden technischen Merkmalen:

• **Maximale Anzahl von Buckets pro Mandant**: Die maximale Anzahl von Buckets pro Mandant beträgt 999.

• **Maximale Größe pro Objekt**: Die maximale Größe eines Objekts beträgt 5 TB.

• **Anzahl gleichzeitiger Verbindungen**: Keine spezifische Begrenzung.

• **Leistung beim Hochladen**:
  - Bis zu 100 Gbit/s Eingangsleistung
  - Bis zu 100 Gbit/s Ausgangsleistung

---

## Konzepte und Speicherorganisation

### Das Speicherkonto

Ein **Storage Account** ist eine logische Entität, die über einen **Access Key** und einen **Secret Key** verfügt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden.
Auf diesem Konto basieren die Rollen und Berechtigungen, die mit **Buckets** verbunden sind, wodurch der Zugriff und die autorisierten Aktionen für jeden Benutzer oder Dienst präzise kontrolliert werden können.

### Der "Bucket" im Ökosystem des Objektspeichers

Ein S3-Bucket, popularisiert durch den Dienst Amazon Simple Storage Service (Amazon S3), ist **ein öffentlicher Cloud-Speichercontainer**, der für die sichere, zuverlässige und hochverfügbare Speicherung einer unbegrenzten Menge an Daten konzipiert ist. Jeder S3-Bucket kann Dateien speichern (in S3 als „Objekte“ bezeichnet), die von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien reichen. Buckets werden verwendet, um den Speicherplatz innerhalb des Objektspeichers von Cloud Temple logisch zu organisieren, und jeder Bucket wird durch einen vom Benutzer bereitgestellten eindeutigen Namen identifiziert. S3-Buckets bieten erweiterte Funktionen, wie die Verwaltung von Versionen, die Sicherung von Daten über Zugriffskontrollrichtlinien und die Möglichkeit zur Unveränderlichkeit.

### Nutzt das S3-Angebot von Cloud Temple die 'PathStyle'-Methode?

Aufgrund der mit der SecNumCloud-Qualifikation verbundenen Anforderungen ist das Angebot derzeit für die Nutzung der '**PathStyle**'-Methode vorgesehen. Wir arbeiten daran, dass die '**UrlStyle**'-Methode ab H1 2025 verfügbar ist.

### Vorab signierte Anforderungen

Der Objektspeicher von Cloud Temple unterstützt **vorab signierte Anforderungen**, eine wichtige Funktion, die es ermöglicht, temporäre URLs zu generieren, die für eine begrenzte Zeit Zugang zu bestimmten Objekten gewähren. Diese Funktion ist besonders nützlich, um Dateien sicher mit externen Benutzern zu teilen, ohne ihnen dauerhafte Rechte oder Zugriffsdaten für den Bucket zu gewähren. Vorab signierte Anforderungen können mit einer präzisen Gültigkeitsdauer konfiguriert werden, was eine granulare Kontrolle über den Datenzugriff bietet.