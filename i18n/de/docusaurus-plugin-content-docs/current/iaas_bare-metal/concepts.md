---
title: Concepts
---


Das **Bare Metal**-Angebot von Cloud Temple bietet dedizierte physische Server in Verbindung mit verteiltem Blockspeicher.
Diese Lösung bietet vollständige Anpassungsmöglichkeiten für Kunden, die ihre eigenen Softwareumgebungen verwalten möchten, sei es für die Installation eines Linux- oder Windows-Systems oder eines Hypervisors.

---

## Eine Hardware-Infrastruktur mit Flexibilität

Das Bare-Metal-Angebot basiert auf einer Architektur, die entwickelt wurde, um den Anforderungen kritischer Workloads gerecht zu werden.

### Hauptkomponenten:
- **Cisco UCS-Server**: Leistungsstark und zuverlässig bilden diese Recheneinheiten die Grundlage des Angebots.
- **IBM Spectrum Virtualize Speicher**: Ein verteilter Blockspeicher, der hohe Resilienz und Leistung bietet.

### Architektur

Das verteilte Speichermodell bietet eine Trennung zwischen Rechenleistung (Bare-Metal-Server) und Speicher (verteilter Block), was ermöglicht:
- Eine Flexibilität, Speicher-Volumes je nach Bedarf auf mehrere Bare-Metal-Server zuzuordnen.
- Eine optimale Anpassung von Rechen- und Speicher-Konfigurationen.
- Eine erhöhte Resilienz dank der Nutzung von **Distributed RAID 6**.

---

## Regionen und Verfügbarkeitszonen

Das Bare-Metal-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Art der Bereitstellung ermöglicht es, den Standort der Bare-Metal-Server auszuwählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies bietet eine bessere Workload-Verteilung, maximiert die Redundanz und erleichtert die Implementierung eines Disaster Recovery Plans (DRP) im Falle eines Vorfalls.

---

## Klassen von Rechenblades

Die für das Bare-Metal-Angebot verfügbaren Rechenblades bieten eine Reihe von Leistungsstufen, um unterschiedlichen Anforderungen gerecht zu werden:

| Referenz              | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne/Threads  | Konnektivität __(3)__ | GPU __(4)__          |
|-----------------------|--------------|------------------------------------------|---------------------------|-----------------------|----------------------|
| **ECO**              | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder gleichwertig) | 20 / 40 Threads           | 2 X 10 Gbit/s         | -                    |
| **STANDARD**         | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder gleichwertig) | 32 / 64 Threads           | 2 X 25 Gbit/s         | -                    |
| **ADVANCE**          | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder gleichwertig)  | 48 / 96 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder gleichwertig) | 16 / 32 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder gleichwertig)  | 36 / 72 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder gleichwertig)  | 56 / 112 Threads          | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder gleichwertig) | 32 / 64 Threads           | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48GB |

### Hinweise:
- __(1)__ Der angegebene Arbeitsspeicher ist physisch verfügbar und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbofrequenz.
- __(3)__ Die physische Konnektivität wird dank einer konvergierten Cisco-UCS-Architektur für Netzwerkzugriff und Blockspeicherzugriff gemeinsam genutzt.
- __(4)__ Die verfügbaren GPUs entwickeln sich basierend auf den neuesten Technologien. Ab dem 1. Mai 2024 umfasst das Angebot NVIDIA LOVELACE L40S GPUs.

Die Verfügbarkeit der Infrastruktur wird mit 99,9% garantiert und monatlich gemessen, einschließlich Wartungsfenstern. Alle SLA-bezogenen Anfragen müssen über ein Vorfallticket gemeldet werden.

---

## Block-Speicherklassen

Der verteilte Blockspeicher, basierend auf **IBM Spectrum Virtualize**, bietet eine Reihe von Leistungsstufen, die sich für verschiedene Anwendungsfälle eignen:

| Referenz                         | IOPS/TB                 | Hauptnutzung                         |
|----------------------------------|-------------------------|--------------------------------------|
| **FLASH - Essentiel**            | 500                     | Leichte Workloads                    |
| **FLASH - Standard**             | 1500                    | Standard-Workloads                   |
| **FLASH - Premium**              | 3000                    | Intensive Workloads                  |
| **FLASH - Enterprise**           | 7500                    | Kritische Workloads                  |
| **FLASH - Ultra**                | 15000                   | Hochintensive Workloads              |
| **MASS STORAGE - Archivage**     | Nicht anwendbar         | Kostengünstiger Speicher für Archivierung |

### Eigenschaften:
- **Technologie**: NVMe-Flash mit **Distributed RAID 6** für erhöhte Resilienz.
- **Verfügbarkeit**: 99,99%, monatlich gemessen.
- **Einschränkungen**: Keine Begrenzung für Lese- oder Schreibvorgänge. Keine automatische Kompression oder Deduplikation, was die volle Nutzung der reservierten Volumes garantiert.

---

## Bare Metal Console Zugriff

Der Zugriff auf die Bare-Metal-Server erfolgt direkt über die **Cloud Temple-Konsole**. Diese Funktion bietet eine vollständige Kontrolle über den Lebenszyklus der Server, einschließlich:
- **KVM-Zugriff**: Eine direkte Schnittstelle zur Verwaltung der Server, als wären Sie physisch vor Ort.
- **Management der gängigen Vorgänge**: Möglichkeit zur Durchführung von Aktionen wie Stromverwaltungen, Resets oder **ISO-Mapping** zur Installation eines Betriebssystems.

Dieses Zugriffslevel gewährleistet maximale Flexibilität unter Einhaltung der Sicherheitsanforderungen.

---

## Netzwerk-Konnektivität der Bare-Metal-Server

Die Bare-Metal-Server verfügen über fortschrittliche Netzwerkfunktionen.

### VLAN der Ebene 2
Es ist möglich, **VLANs der Ebene 2** auf den Netzwerkschnittstellen der Bare-Metal-Server zu konfigurieren. Die Benutzer können:
- **VLAN-Tagging aktivieren**, um ein oder mehrere VLANs einer einzigen Schnittstelle zuzuweisen.
- **VLANs direkt auf den Netzwerkschnittstellen der Server propagieren**.

### Aggregation der Netzwerkschnittstellen
Jeder Server ist mit **zwei Netzwerkschnittstellen** ausgestattet. Diese Schnittstellen können unabhängig verwendet oder zur besseren Leistung und Redundanz kombiniert werden:

### Netzwerkleistung
Die Leistung der Netzwerkschnittstellen ist direkt mit der gewählten Rechenblade-Klasse verbunden. Beispiel:
- Die **ECO**-Blades bieten eine Konnektivität von 2 x 10 Gbit/s.
- Die **STANDARD**- und höheren Blades verfügen über eine Konnektivität von 2 x 25 Gbit/s.

Diese Netzwerkoptionen garantieren eine zuverlässige, flexible und für verschiedene professionelle Workloads geeignete Konnektivität.

---
