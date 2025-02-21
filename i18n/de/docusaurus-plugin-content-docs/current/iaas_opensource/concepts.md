---
title: Concepts
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple ist darauf ausgelegt, den kritischen Bedürfnissen der Betriebsfortführung und -wiederherstellung gerecht zu werden, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherung. Basierend auf Spitzentechnologien gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Compute: **CISCO UCS**.
- Storage: **IBM Spectrum Virtualize**, **IBM FlashSystem** für Blockstorage und **DELL ECS** für Objektspeicher.
- Netzwerk: **JUNIPER**.
- Virtualisierung: **Stack Opensource**, bietet eine zuverlässige und bewährte Basis zur Verwaltung Ihrer Cloud-Umgebungen.

Diese Architektur basiert auf dem Modell **VersaStack**, einer Allianz zwischen Cisco und IBM, die eine weitreichende Kompatibilität mit führenden Softwareanbietern garantiert.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig durch APIs und einen Terraform-Provider automatisiert, bietet das IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- **Dedizierte Ressourcen**: Recheneinheiten, Speicher-Volumes und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen Kunden geteilt.
- **Maximale Vorhersehbarkeit**: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf dem Speicher und profitieren von einer klaren monatlichen Verbrauchsabrechnung.

Die Plattform ist durch die [ANSSI](https://www.ssi.gouv.fr/) als **SecNumCloud** zertifiziert und garantiert ein hohes Maß an Automatisierung und Sicherheit.

## Hauptfunktionen

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- Bedarfsgerechter Speicher (verschiedene Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuz-Backups mit konfigurierbarer Aufbewahrung.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Console Shiva](../console/console.md) oder im Infrastructure as Code-Modus dank APIs und Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                    |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                                          |
| Sicherheit           | Hochgradig sichere Plattform, zertifiziert als **SecNumCloud**, **HDS** (Hosting von Gesundheitsdaten), **ISO 27001** und **ISAE 3402 Typ II**.|
| Hohe Verfügbarkeit   | Plattformverfügbarkeit von 99,99%, monatlich gemessen, inklusive Wartungsfenstern.                                                              |
| Resilienz            | Implementierung von Kontinuitäts- oder Wiederherstellungsplänen nach Bedarf.                                                                     |
| Automatisierung      | Vollständig automatisierte Plattform, die für die Integration in ein digitales Transformationsprogramm konzipiert ist.                           |
| On demand            | Ressourcen verfügbar auf Abruf.                                                                                                                |

## Klassen von Recheneinheiten

Die verfügbaren Recheneinheiten für das Bare Metal-Angebot bieten eine Reihe von Leistungen, um verschiedenen Bedürfnissen gerecht zu werden:

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          |
|----------------------|--------------|------------------------------------------|---------------------------|-----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder äquivalent)| 20 / 40 Threads           | 2 X 10 Gbit/s         | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder äquivalent)| 32 / 64 Threads           | 2 X 25 Gbit/s         | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder äquivalent) | 48 / 96 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y oder äquivalent)| 16 / 32 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 oder äquivalent) | 36 / 72 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder äquivalent) | 56 / 112 Threads          | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder äquivalent)| 32 / 64 Threads           | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48GB |

### Anmerkungen:
- __(1)__ Die Menge des Speichers ist physisch auf den Blades verfügbar und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbo-Frequenz.
- __(3)__ Die physische Konnektivität ist für den Netzwerkzugang und den Block Storage Zugriff aufgrund einer konvergenten Cisco UCS-Architektur geteilt.
- __(4)__ Die verfügbaren GPUs entwickeln sich entsprechend den neuesten Technologien. Ab dem 1. Mai 2024 umfasst das Angebot GPUs NVIDIA LOVELACE L40S.

Die Verfügbarkeit der Infrastruktur ist mit 99.9% garantiert, monatlich gemessen, inklusive Wartungsfenstern. Alle Anfragen im Zusammenhang mit dem SLA müssen über ein Störungsticket gemeldet werden.

---

## Klassen von Block Storage

Der verteilte Block Storage, basierend auf **IBM Spectrum Virtualize**, bietet eine Reihe von Leistungen, die an verschiedene Anwendungsfälle angepasst sind:

| Referenz                         | IOPS/TB                 | Hauptverwendung                     |
|----------------------------------|-------------------------|-------------------------------------|
| **FLASH - Essentiel**            | 500                     | Leichte Workloads                   |
| **FLASH - Standard**             | 1500                    | Standard-Workloads                  |
| **FLASH - Premium**              | 3000                    | Intensive Workloads                 |
| **FLASH - Enterprise**           | 7500                    | Kritische Workloads                  |
| **FLASH - Ultra**                | 15000                   | Ultra-intensive Workloads           |
| **MASS STORAGE - Archivierung**  | Nicht anwendbar         | Wirtschaftliche Archivspeicherung   |

### Eigenschaften:
- **Technologie**: NVMe-Flash mit **Distributed RAID 6** für erhöhte Ausfallsicherheit.
- **Verfügbarkeit**: 99.99%, monatlich gemessen.
- **Einschränkungen**: Keine Einschränkungen bei Lese- oder Schreibvorgängen. Keine automatische Kompression oder Deduplizierung, wodurch die vollständige Nutzung der reservierten Volumen gewährleistet ist.

---