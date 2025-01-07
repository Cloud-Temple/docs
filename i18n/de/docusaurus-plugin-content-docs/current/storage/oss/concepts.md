---
title: Concepts
---

## Elastic Cloud Storage (ECS) : eine Referenzlösung

Das Objekt-Speicherangebot von Cloud Temple basiert auf der Technologie __Elastic Cloud Storage (ECS)__ von Dell, bekannt für seine hohe Leistung und die Einhaltung industrieller Standards. Mit einer **97% Kompatibilität mit dem AWS S3-Protokoll** gewährleistet diese Lösung:

- Eine einfache und standardisierte Integration;
- Eine erhöhte Flexibilität für die Benutzer;
- Einen nahtlosen Übergang zu einer modernen Speicherinfrastruktur.

---

## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich, die Datensicherheit durch anerkannte Zertifizierungen zu gewährleisten:

- **SecNumCloud**: Von der ANSSI verliehene Qualifikation, die Souveränität und Sicherheit der Daten im französischen und europäischen Rahmen gewährleistet.
- **HDS (Hébergement de Données de Santé)**: Einhaltung der strengen Anforderungen für sensible medizinische Daten.
- **ISO 27001**: Einhaltung der bewährten Verfahren in der Informationssicherheit.

---

## Fortschrittliche Verschlüsselung für optimalen Schutz

Die Datenverschlüsselung wird systematisch angewendet, um deren Sicherheit in jeder Phase zu gewährleisten:

- **Während der Übertragung**: Schutz durch das Protokoll __TLS 1.3__.
- **Bei der Speicherung**: Drei Optionen, die den Bedürfnissen der Benutzer entsprechen:
  - **SSE-ECS**: Schlüsselverwaltung durch Cloud Temple für eine vereinfachte Verwaltung.
  - **SSE-C**: Vom Kunden bereitgestellte Schlüssel für eine erhöhte Kontrolle.
  - **CSE**: Vom Kunden durchgeführte Verschlüsselung für maximale Sicherheit.

| Verschlüsselungsmodell         | Vorteile                            | Nachteile                      |
| ----------------------------- | ----------------------------------- | ----------------------------- |
| **SSE-ECS**                   | Vereinfachte und transparente Verwaltung | Weniger Kontrolle über die Schlüssel |
| **SSE-C**                     | Volle Kontrolle über die Schlüssel  | Schlüsselverwaltung erforderlich |
| **CSE**                       | Maximale Sicherheit                 | Komplexität und Auswirkung auf die Leistung |

---

## Garantierte Servicelevels

Cloud Temple bietet eine hochzuverlässige Infrastruktur mit klaren Verpflichtungen:

| Verpflichtung                  | Ziel                              |
| ------------------------------ | --------------------------------- |
| Verfügbarkeit                  | 99,99% (inklusive Wartung)        |
| Datenbeständigkeit             | 99,99999999%                       |
| Garantierte Netzwerkbandbreite | 1 Gbp/Sekunde                     |

## Das Speicherkonto

Ein **Storage Account** ist eine logische Einheit, die einen **Access Key** und einen **Secret Key** besitzt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden. 
Auf diesem Konto sind die Rollen und Berechtigungen für die **Buckets** eingerichtet, um den Zugriff und die autorisierten Aktionen für jeden Benutzer oder Dienst präzise zu steuern.

## Der "Bucket" im Objekt-Speicherökosystem

Ein S3-Bucket, bekannt durch den Amazon Simple Storage Service (Amazon S3), ist **ein öffentlicher Speichercontainer** in der Cloud, der speziell dafür entwickelt wurde, unbegrenzte Mengen an Daten sicher, zuverlässig und hochverfügbar zu speichern. Jeder S3-Bucket kann Dateien (in S3 als "Objekte" bezeichnet) enthalten, die von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien reichen. Buckets werden verwendet, um den Speicherplatz innerhalb des Cloud Temple Objekt-Speichers logisch zu organisieren, und jeder Bucket wird durch einen vom Benutzer vergebenen eindeutigen Namen identifiziert. S3-Buckets bieten fortschrittliche Funktionen wie Versionsverwaltung, Datensicherheit durch Zugriffskontrollrichtlinien und die Möglichkeit der Unveränderlichkeit.

## Regionaler Bereitstellungstyp

Der S3-Speicher von Cloud Temple speichert Daten nativ in __drei verschiedenen Verfügbarkeitszonen__ innerhalb einer Cloud Temple-Region. Diese Architektur ist darauf ausgelegt, hohe Verfügbarkeit und maximale Ausfallsicherheit bei Hardware- oder Softwarefehlern zu bieten:
- Erasure Coding (EC): Standardmäßig verwenden wir ein EC-12+4-Schema, das Daten in 12 Daten- und 4 Paritätssegmente aufteilt. Diese Technik ermöglicht die Wiederherstellung von Daten auch bei Verlust mehrerer Segmente.
- Datendistribution: EC-Segmente werden über verschiedene Nodes und Racks verteilt, um Schutz vor Festplatten-, Node- und sogar Rack-Ausfällen zu gewährleisten.
- Geografische Replikation: Für zusätzlichen Schutz werden die Daten auf 3 Verfügbarkeitszonen repliziert, was Resilienz gegenüber lokalen Katastrophen bietet.

Diese Replikation stellt sicher, dass selbst im Falle eines Ausfalls einer Zone die Daten weiterhin zugänglich und intakt bleiben, 
wodurch eine hochresiliente Speicherinfrastruktur geschaffen wird.

## Maximale Dateigröße, die mit der Webkonsole gehandhabt werden kann
Das Limit im Web beträgt 40 MB pro Datei. Darüber hinaus muss ein nativer S3-Client mit der API verwendet werden.

## Nutzt das S3-Angebot von Cloud Temple die Methode 'PathStyle'

Aufgrund der mit der SecNumCloud-Qualifikation verbundenen Anforderungen ist die Nutzung der Methode '**PathStyle**' derzeit vorgesehen. Wir arbeiten daran, die Methode '**UrlStyle**' bis Q1 2025 verfügbar zu machen.

## Maximale Anzahl von Buckets pro Tenant
Die maximale Anzahl von Buckets pro Tenant beträgt 999.