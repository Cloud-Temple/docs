---
title: Concepts
---

## Elastic Cloud Storage (ECS) : eine Referenzlösung

Das Objektspeicherangebot von Cloud Temple basiert auf der Technologie __Elastic Cloud Storage (ECS)__ von Dell, die für ihre hohe Leistung und Einhaltung industrieller Standards anerkannt ist. Mit einer **97%igen Kompatibilität mit dem AWS S3-Protokoll** gewährleistet diese Lösung :

- Eine einfache und standardisierte Integration ;
- Erhöhte Flexibilität für die Nutzer ;
- Einen reibungslosen Übergang zu einer modernen Speicherinfrastruktur.

---

## Sicherheitsverpflichtungen und Zertifizierungen

Cloud Temple verpflichtet sich zur Gewährleistung der Datensicherheit durch anerkannte Zertifizierungen :

- **SecNumCloud** : Von der ANSSI vergebene Qualifikation, die die Souveränität und Sicherheit der Daten im französischen und europäischen Rahmen gewährleistet.
- **HDS (Hébergement de Données de Santé)** : Erfüllung der strengen Anforderungen für sensible medizinische Daten.
- **ISO 27001** : Einhaltung der besten Praktiken im Bereich der Informationssicherheit.

---

## Fortschrittliche Verschlüsselung für optimalen Schutz

Die Datenverschlüsselung wird systematisch angewendet, um ihre Sicherheit in jeder Phase zu gewährleisten :

- **In Transit** : Schutz durch das Protokoll __TLS 1.3__.
- **Im Speicher** : Drei Optionen, die den Bedürfnissen der Nutzer entsprechen :
  - **SSE-ECS** : Von Cloud Temple verwaltete Schlüssel für eine vereinfachte Verwaltung.
  - **SSE-C** : Vom Kunden bereitgestellte Schlüssel für erhöhte Kontrolle.
  - **CSE** : Vom Kunden vorgenommene Verschlüsselung für maximale Sicherheit.

| Verschlüsselungsmodell          | Vorteile                            | Nachteile                          |
| ----------------------------- | ----------------------------------- | --------------------------------- |
| **SSE-ECS**                  | Vereinfachte und transparente Verwaltung | Weniger Kontrolle über die Schlüssel |
| **SSE-C**                    | Totale Kontrolle über die Schlüssel | Erforderliche Schlüsselverwaltung   |
| **CSE**                      | Maximale Sicherheit                  | Komplexität und Auswirkungen auf die Leistung |

---

## Garantierte Service Level

Cloud Temple bietet eine hochzuverlässige Infrastruktur mit klaren Verpflichtungen :

| Verpflichtung                    | Ziel                             |
| ------------------------------- | -------------------------------- |
| Verfügbarkeit                   | 99.99% (einschließlich Wartung)  |
| Datenhaltbarkeit                | 99,99999999%                     |
| Garantierte Netzbandbreite      | 1 Gbit/Sekunde                   |

## Das Speicherkonto

Ein **Storage Account** ist eine logische Einheit, die einen **Access Key** und einen **Secret Key** besitzt, die zur Authentifizierung und Sicherung der Interaktionen mit einem Bucket verwendet werden.
Auf diesem Konto basieren die Rollen und Berechtigungen, die den **Buckets** zugewiesen werden, um den Zugriff und die autorisierten Aktionen für jeden Benutzer oder Dienst präzise zu steuern.


## Der "Bucket" im Objektspeicher-Ökosystem

Ein S3-Bucket, populär gemacht durch den Amazon Simple Storage Service (Amazon S3), ist **ein öffentlicher Speichercontainer** in der Cloud, der dazu dient, unbegrenzte Datenmengen sicher, zuverlässig und hochverfügbar aufzubewahren. Jeder S3-Bucket kann Dateien speichern (im S3 als "Objekte" bezeichnet), von Dokumenten und Bildern bis hin zu großen Datenbanken oder Videodateien. Die Buckets werden verwendet, um den Speicherplatz logisch innerhalb des Objektspeichers von Cloud Temple zu organisieren, und jeder Bucket wird durch einen vom Benutzer bereitgestellten, eindeutigen Namen identifiziert. S3-Buckets bieten erweiterte Funktionen wie Versionsmanagement, Datensicherung durch Zugriffskontrollrichtlinien und die Möglichkeit der Unveränderlichkeit.


## Regionale Bereitstellung

Der S3-Speicher von Cloud Temple speichert Daten nativ auf __drei verschiedenen Verfügbarkeitszonen__ innerhalb einer einzigen Cloud Temple-Region. Diese Architektur ist darauf ausgelegt, eine hohe Verfügbarkeit und maximale Ausfallsicherheit bei Hardware- oder Softwareausfällen zu bieten:
- Erasure Coding (EC): Standardmäßig verwenden wir ein EC-12+4-Schema, das die Daten in 12 Datensegmente und 4 Paritätssegmente aufteilt. Diese Technik ermöglicht die Wiederherstellung der Daten auch bei Verlust mehrerer Segmente.
- Datenverteilung: Die EC-Segmente werden auf verschiedene Knoten und Racks verteilt, um Schutz vor Festplatten-, Knoten- und sogar Rackausfällen zu gewährleisten.
- Geografische Replikation: Für zusätzlichen Schutz werden die Daten auf drei Verfügbarkeitszonen repliziert, um Resilienz gegenüber lokalen Ausfällen zu bieten.

Diese Replikation gewährleistet, dass selbst bei einem Ausfall einer Zone die Daten zugänglich und intakt bleiben und so zu einer hochresilienten Speicherinfrastruktur beitragen.


## Maximale Dateigröße, die mit der Web-Konsole gehandhabt werden kann

Das Limit im Web beträgt 40 MB pro Datei. Darüber hinaus muss ein nativer S3-Client mit der API verwendet werden.


## Verwendet das S3 Cloud Temple-Angebot die 'PathStyle'-Methode?

Aufgrund der Anforderungen der SecNumCloud-Qualifikation ist das Angebot momentan darauf ausgelegt, die '**PathStyle**'-Methode zu verwenden. Wir arbeiten daran, dass die '**UrlStyle**'-Methode im 1. Quartal 2025 verfügbar ist.

## Maximale Anzahl von Buckets pro Tenant

Die maximale Anzahl von Buckets pro Tenant beträgt 999.