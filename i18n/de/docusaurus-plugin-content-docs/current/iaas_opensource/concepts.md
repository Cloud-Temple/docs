---
title: Concepts
---

Das __IaaS (Infrastructure As A Service)__ Angebot von Cloud Temple ist darauf ausgelegt, kritischen Anforderungen an Kontinuität und Notfallwiederherstellung gerecht zu werden, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Bankwesen und Versicherungen. Basierend auf modernster Technologie gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Arbeitslasten.

## Eine vertrauenswürdige technologische Plattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Rechenleistung: **CISCO UCS**.
- Speicher: **IBM Spectrum Virtualize**, **IBM FlashSystem** für Blockspeicher und **DELL ECS** für Objektspeicher.
- Netzwerk: **JUNIPER**.
- Virtualisierung: **Stack Opensource**, das eine zuverlässige und erprobte Grundlage für das Management Ihrer Cloud-Umgebungen bietet.

Diese Architektur basiert auf dem **VersaStack**-Modell, einer Allianz zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den wichtigsten Softwareherstellern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig automatisiert durch APIs und einen Terraform-Provider, bietet das IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- **Dedizierte Ressourcen**: Die Rechenklingen, Speichervolumen und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen den Kunden geteilt.
- **Maximale Vorhersagbarkeit**: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf den Speicher und profitieren von einer klaren, auf monatlicher Nutzung basierenden Abrechnung.

Die Plattform ist durch die [ANSSI](https://www.ssi.gouv.fr/) als **SecNumCloud** qualifiziert und garantiert ein hohes Maß an Automatisierung und Sicherheit.

## Hauptfunktionen

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- Speicher auf Abruf (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Cross-Backups mit konfigurierbarer Retention.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Verwaltung über die [Console Shiva](../console/console.md) oder im Infrastructure as Code-Modus über API und Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                    |   
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vernetzung  | Datenhosting in Frankreich und Konformität mit der DSGVO.                                                                                      |   
| Sicherheit           | Hochsichere Plattform, qualifiziert als **SecNumCloud**, **HDS** (Hosting von Gesundheitsdaten), **ISO 27001** und **ISAE 3402 Typ II**.        |  
| Hohe Verfügbarkeit   | 99,99% Plattformverfügbarkeit, monatlich gemessen, inklusive Wartungsfenstern.                                                                |   
| Resilienz            | Einrichtung von Kontinuitäts- oder Notfallwiederherstellungsplänen nach Bedarf.                                                                |
| Automatisierung      | Vollständig automatisierte Plattform, die für die Integration in ein digitales Transformationsprogramm konzipiert ist.                           |
| On Demand            | Ressourcen sind auf Abruf verfügbar.                                                                                                           |

## Klassen der Rechenklingen

Die für das Bare-Metal-Angebot verfügbaren Rechenklingen bieten eine Reihe von Leistungsstufen, um unterschiedlichen Anforderungen gerecht zu werden:

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          | 
|----------------------|--------------|-------------------------------------------|---------------------------|-----------------------|----------------------|
| **ECO**              | 384 Go       | 2,20/3,0 GHz (Silver 4114 oder gleichwertig)  | 20 / 40 Threads           | 2 X 10 Gbit/s         | -                    |
| **STANDARD**         | 384 Go       | 2,40/3,4 GHz (Silver 4314 oder gleichwertig)  | 32 / 64 Threads           | 2 X 25 Gbit/s         | -                    |
| **ADVANCE**          | 768 Go       | 2,80/3,5 GHz (Gold 6342 oder gleichwertig)    | 48 / 96 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3,20/3,6 GHz (Xeon E-53I5Y oder gleichwertig) | 16 / 32 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3,00/3,6 GHz (Gold 6354 oder gleichwertig)    | 36 / 72 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2,60/3,5 GHz (Gold 6348 oder gleichwertig)    | 56 / 112 Threads          | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2,50/4,1 GHz (Intel 6426Y oder gleichwertig)  | 32 / 64 Threads           | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48Go |

### Hinweise:
- __(1)__ Die verfügbare Speichermenge ist physisch auf den Klingen vorhanden und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basistaktung und dem Turbo-Boost-Takt.
- __(3)__ Die physische Konnektivität wird für den Netzwerkzugang und den Blockspeicherzugang dank einer konvergenten Cisco UCS-Architektur gemeinsam genutzt.
- __(4)__ Die verfügbaren GPUs entwickeln sich mit den neuesten Technologien weiter. Ab dem 1. Mai 2024 umfasst das Angebot NVIDIA LOVELACE L40S GPUs.

Die Verfügbarkeit der Infrastruktur ist zu 99,9% garantiert, monatlich gemessen, inklusive Wartungsfenstern. Jegliche Anfragen im Zusammenhang mit dem SLA müssen über ein Incident-Ticket gemeldet werden.

---

## Klassen von Blockspeicher

Der verteilte Blockspeicher, der auf **IBM Spectrum Virtualize** basiert, bietet eine Reihe von Leistungsstufen, die für verschiedene Anwendungsfälle geeignet sind:

| Referenz                         | IOPS/To                 | Hauptverwendung                        | 
|----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essentiel**            | 500                     | Leichte Arbeitslasten                  |
| **FLASH - Standard**             | 1500                    | Standard-Arbeitslasten                 |
| **FLASH - Premium**              | 3000                    | Intensive Arbeitslasten                |
| **FLASH - Enterprise**           | 7500                    | Kritische Arbeitslasten                |
| **FLASH - Ultra**                | 15000                   | Ultra-intensive Arbeitslasten          |
| **MASS STORAGE - Archivage**     | Nicht zutreffend        | Kostengünstiger Speicher für Archivierung   |

### Merkmale:
- **Technologie**: Flash NVMe mit **Distributed RAID 6** für erhöhte Ausfallsicherheit.
- **Verfügbarkeit**: 99.99%, monatlich gemessen.
- **Einschränkungen**: Keine Begrenzung der Lese- oder Schreibvorgänge. Keine automatische Kompression oder Deduplizierung, wodurch die vollständige Nutzung der reservierten Volumen gewährleistet wird.

---