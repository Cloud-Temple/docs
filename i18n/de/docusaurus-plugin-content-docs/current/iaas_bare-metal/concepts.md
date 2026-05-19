---
title: Konzepte
---


Das **Bare Metal**-Angebot von Cloud Temple bietet dedizierte physische Server in Kombination mit einem verteilten Block-Speicher.
Diese Lösung bietet vollständige Anpassungsmöglichkeiten für Kunden, die ihre eigenen Softwareumgebungen verwalten möchten, sei es zur Installation eines Linux- oder Windows-Betriebssystems oder eines Hypervisors.

---

## Eine physische und flexible Infrastruktur

Das Bare-Metal-Angebot basiert auf einer Architektur, die für die Anforderungen kritischer Workloads konzipiert ist.

### Hauptkomponenten

- **Cisco UCS-Server** : Leistungsstark und zuverlässig bilden diese Compute-Blades die Grundlage des Angebots.
- **IBM Spectrum Virtualize Storage** : Ein verteilter Block-Speicher, der hohe Resilienz und Leistung bietet.

### Architektur

Das verteilte Speichermodell bietet eine Trennung zwischen Compute (Bare-Metal-Servern) und Storage (verteilter Blockspeicher), was Folgendes ermöglicht:

- Flexibilität zum Zuordnen von Storage-Volumes auf mehrere Bare-Metal-Server je nach Bedarf.
- Optimale Anpassung der Compute- und Storage-Konfigurationen.
- Erhöhte Resilienz durch den Einsatz von **Distributed RAID 6**.

---

## Regionen und Verfügbarkeitszonen

Das Produkt Bare Metal wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Bereitstellungsart ermöglicht die Auswahl des Standorts der Bare-Metal-Server und deren Verteilung auf verschiedene Verfügbarkeitszonen (AZ).
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Disaster-Recovery-Plans (DRP) im Störungsfall.

---

## Compute-Blade-Klassen

Die für das Bare-Metal-Angebot verfügbaren Rechenklingen bieten ein Leistungsspektrum, das auf verschiedene Anforderungen zugeschnitten ist:

| Referenz             | RAM  **(1)** | Taktfrequenz **(2)**                         | Anzahl der Kerne / Threads | Konnektivität **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Hinweise

- **(1)** Die Speichermenge entspricht der physisch auf den Blades verfügbaren Kapazität und kann nicht geändert werden.
- **(2)** Die angegebenen Frequenzen entsprechen der minimalen Basistaktung und der Turbo-Taktfrequenz.
- **(3)** Die physische Konnektivität wird für den Netzwerk- und Blockspeicherzugriff gemeinsam genutzt, ermöglicht durch eine konvergierte Cisco UCS-Architektur.
- **(4)** Die verfügbaren GPUs richten sich nach dem neuesten Technologiefortschritt. Stand 1. Mai 2024 umfasst das Produkt NVIDIA LOVELACE L40S-GPUs.

Die Verfügbarkeit der Infrastruktur ist mit 99.9% garantiert, monatlich gemessen, inklusive Wartungsfenster. Alle SLA-bezogenen Anfragen müssen über ein Incident-Ticket gemeldet werden.

---

## Block-Speicherklassen

Der verteilte Block-Speicher, basierend auf **IBM Spectrum Virtualize**, bietet eine Palette von Leistungswerten, die auf verschiedene Anwendungsfälle zugeschnitten sind:

| Referenz                          | IOPS/To        | Max. IOPS / Volume        | Max. Durchsatz / Volume     | Hauptanwendung                         |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essential**             | 500            | 10 000 IOPS               | 512 Mo/s                    | Leichte Workloads                      |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 Mo/s                   | Standard-Workloads                     |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 Mo/s                   | Intensive Workloads                    |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 Mo/s                   | Kritische Workloads                    |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 Mo/s                   | Ultra-intensive Workloads              |
| **MASS STORAGE - Archivierung**   | Nicht zutreffend | Nicht garantiert        | Nicht garantiert            | Kostengünstiger Speicher für die Archivierung |

### Merkmale

- **Performance** : Die effektive Leistung steigt linear mit dem zugewiesenen Volumen (selon le ratio IOPS/To), **bis zur oben definierten absoluten Hardware-Obergrenze**. (Par exemple, un volume de 10 To en classe Ultra sera physiquement limité à 30 000 IOPS et 1024 Mo/s).
- **Technologie** : NVMe-Flash mit **Distributed RAID 6** für eine erhöhte Resilienz.
- **Verfügbarkeit** : 99,99 %, monatlich gemessen.
- **Einschränkungen** : Keine Begrenzung für Lese- oder Schreibvorgänge. Keine automatische Komprimierung oder Deduplizierung, um die vollständige Auslastung der reservierten Volumes zu gewährleisten.

### Sicherheit und Verschlüsselung des Blockspeichers

Um die Vertraulichkeit Ihrer Daten im Ruhezustand zu gewährleisten, integriert unsere gesamte Blockspeicher-Infrastruktur eine robuste Hardware-Verschlüsselung.

- **Verschlüsselungstyp** : Die Daten werden direkt auf den Festplatten (`Data At Rest`) unter Verwendung des **XTS-AES 256**-Algorithmus verschlüsselt.
- **Konformität** : Diese Verschlüsselungsmethode entspricht dem **FIPS 140-2**-Standard und gewährleistet ein hohes, validiertes Sicherheitsniveau.
- **Funktionsweise** : Die Verschlüsselung wird zum Zeitpunkt des Schreibens der Daten auf das physische Speichermedium angewendet.

:::warning[Hinweis zur Replikation]
Es ist wichtig zu beachten, dass diese Verschlüsselung die auf den Festplatten gespeicherten Daten schützt. Sie ist nicht "on-the-fly" aktiv, was bedeutet, dass die Daten während der Speicherreplikationsvorgänge zwischen Verfügbarkeitszonen nicht verschlüsselt werden. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

---

## Bare-Metal-Konsolenzugriff

Der Zugriff auf Bare-Metal-Server erfolgt direkt über die **Cloud Temple-Konsole**. Diese Funktion bietet vollständige Kontrolle über den Lebenszyklus der Server, einschließlich:

- **KVM-Zugriff** : Eine direkte Schnittstelle zur Verwaltung der Server, als wären Sie physisch vor Ort.
- **Verwaltung gängiger Operationen** : Möglichkeit, Aktionen wie Stromversorgungsmanagement, Neustarts oder das **ISO-Mounting** zur Installation eines Betriebssystems durchzuführen.

Diese Zugriffsebene gewährleistet maximale Flexibilität unter Einhaltung der Sicherheitsrichtlinien.

---

## Netzwerkkonnektivität der Bare-Metal-Server

Bare-Metal-Server verfügen über erweiterte Netzwerkfunktionen.

### VLAN der Ebene 2

Es ist möglich, **VLANs der Ebene 2** auf den Netzwerkschnittstellen von Bare-Metal-Servern zu konfigurieren.
Benutzer können:

- **VLAN-Tagging aktivieren**, um einen oder mehrere VLANs einer einzelnen Schnittstelle zuzuordnen.
- **VLANs direkt auf die Netzwerkschnittstellen der Server propagieren**.

### Aggregation von Netzwerkschnittstellen

Jeder Server ist mit **zwei Netzwerkschnittstellen** ausgestattet. Diese Schnittstellen können unabhängig voneinander oder kombiniert für eine höhere Leistung und Redundanz verwendet werden:

### Netzwerkleistung

Die Leistung der Netzwerkschnittstellen hängt direkt von der gewählten Blade-Klasse ab. Beispiel:

- Die **ECO**-Blades bieten eine Konnektivität von 2 x 10 Gbit/s.
- **STANDARD**-Blades und höhere Klassen verfügen über eine Konnektivität von 2 x 25 Gbit/s.

Diese Netzwerkoptionen gewährleisten eine zuverlässige, flexible Konnektivität, die sich für eine Vielzahl professioneller Workloads eignet.

---