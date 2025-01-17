---
title: Concepts
---


Das **Bare Metal**-Angebot von Cloud Temple bietet dedizierte physische Server in Verbindung mit verteiltem Blockspeicher. Diese Lösung bietet vollständige Anpassung für Kunden, die ihre eigenen Softwareumgebungen verwalten möchten, sei es zur Installation eines Linux-Systems, Windows oder eines Hypervisors.

---

## Eine flexible Hardware-Infrastruktur

Das Bare Metal-Angebot basiert auf einer Architektur, die entwickelt wurde, um die Bedürfnisse kritischer Arbeitslasten zu erfüllen.

### Hauptkomponenten:
- **Cisco UCS-Server**: Leistungsstark und zuverlässig, bilden diese Rechenblades die Grundlage des Angebots.
- **IBM Spectrum Virtualize Storage**: Ein verteilter Blockspeicher, der hohe Resilienz und Leistung bietet.

### Architektur

Das verteilte Speichermodell bietet eine Trennung zwischen Rechenleistung (Bare Metal-Server) und Speicher (verteilter Block), was ermöglicht:
- Flexibilität bei der Zuordnung von Speicherbänden auf mehrere Bare Metal-Server je nach Bedarf.
- Optimale Anpassung der Rechen- und Speicherkonfigurationen.
- Erhöhte Ausfallsicherheit durch den Einsatz von **Distributed RAID 6**.

---

## Klassen von Rechenblades

Die für das Bare Metal-Angebot verfügbaren Rechenblades bieten eine Auswahl an Leistungen, um verschiedenen Anforderungen gerecht zu werden:

| Referenz              | RAM  __(1)__ | Frequenz __(2)__                          | Anzahl der Kerne / Threads| Konnektivität __(3)__ | GPU __(4)__          | 
|-----------------------|--------------|-------------------------------------------|---------------------------|-----------------------|----------------------|
| **ECO**               | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder äquivalent) | 20 / 40 Threads           | 2 X 10 Gbit/s          | -                    |
| **STANDARD**          | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder äquivalent) | 32 / 64 Threads           | 2 X 25 Gbit/s          | -                    |
| **ADVANCE**           | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder äquivalent)   | 48 / 96 Threads           | 2 X 25 Gbit/s          | -                    |
| **PERFORMANCE 1**     | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder äquivalent)| 16 / 32 Threads           | 2 X 25 Gbit/s          | -                    |
| **PERFORMANCE 2**     | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder äquivalent)   | 36 / 72 Threads           | 2 X 25 Gbit/s          | -                    |
| **PERFORMANCE 3**     | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder äquivalent)   | 56 / 112 Threads          | 2 X 25 Gbit/s          | -                    |
| **PERFORMANCE 4**     | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder äquivalent) | 32 / 64 Threads           | 2 X 25 Gbit/s          | 2 x NVIDIA L40S 48Go |

### Anmerkungen:
- __(1)__ Die Menge des Speichers ist physisch auf den Blades vorhanden und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der Mindestbasisfrequenz und der Turbofrequenz.
- __(3)__ Die physische Konnektivität wird für den Netzwerk- und den Blockspeicherzugang durch eine konvergente Cisco UCS-Architektur gemeinsam genutzt.
- __(4)__ Die verfügbaren GPUs entwickeln sich mit den neuesten Technologien. Ab dem 1. Mai 2024 beinhaltet das Angebot NVIDIA LOVELACE L40S-GPUs.

Die Verfügbarkeit der Infrastruktur wird mit 99,9% monatlich garantiert, einschließlich Wartungsfenster. Jede Anfrage im Zusammenhang mit dem SLA muss über ein Vorfallticket gemeldet werden.

---

## Klassen des Blockspeichers

Der verteilte Blockspeicher, basierend auf **IBM Spectrum Virtualize**, bietet eine Reihe von Leistungen, die für verschiedene Anwendungsfälle geeignet sind:

| Referenz                         | IOPS/To                  | Hauptnutzung                              | 
|----------------------------------|--------------------------|-------------------------------------------|
| **FLASH - Essentiel**            | 500                      | Leichte Arbeitslasten                       |
| **FLASH - Standard**             | 1500                     | Standard-Arbeitslasten                      |
| **FLASH - Premium**              | 3000                     | Intensive Arbeitslasten                     |
| **FLASH - Enterprise**           | 7500                     | Kritische Arbeitslasten                      |
| **FLASH - Ultra**                | 15000                    | Ultra-intensive Arbeitslasten               |
| **MASS STORAGE - Archivage**     | Nicht anwendbar          | Kostengünstiger Speicher für Archivierung   |

### Merkmale:
- **Technologie**: Flash NVMe mit **Distributed RAID 6** für größere Resilienz.
- **Verfügbarkeit**: 99,99%, monatlich gemessen.
- **Beschränkungen**: Keine Begrenzung für Lese- oder Schreibvorgänge. Keine automatische Komprimierung oder Deduplizierung, wodurch die vollständige Nutzung der reservierten Volumen gewährleistet wird.

---

## Bare Metal Konsolenzugang

Der Zugriff auf die Bare Metal-Server erfolgt direkt über die **Cloud Temple-Konsole**. Diese Funktion bietet eine vollständige Kontrolle über den Lebenszyklus der Server, einschließlich:
- **KVM-Zugang**: Eine direkte Schnittstelle zur Verwaltung der Server, als wären Sie physisch vor Ort.
- **Verwaltung der laufenden Vorgänge**: Möglichkeit, Aktionen wie Stromverwaltung, Neustarts oder das **Mapping von ISO** für die Installation eines Betriebssystems durchzuführen.

Dieses Zugriffslevel gewährleistet maximale Flexibilität unter Einhaltung von Sicherheitsvorgaben.

---

## Netzwerkverbindung der Bare Metal-Server

Die Bare Metal-Server verfügen über fortschrittliche Netzwerkfunktionen.

### VLAN der Ebene 2
Es ist möglich, **Level-2-VLANs** auf den Netzwerk-Schnittstellen der Bare Metal-Server zu konfigurieren. Benutzer können:
- **VLAN-Tagging aktivieren**, um ein oder mehrere VLANs auf eine einzelne Schnittstelle zuzuordnen.
- **VLANs direkt auf den Netzwerk-Schnittstellen der Server propagieren**.

### Aggregation der Netzwerk-Schnittstellen
Jeder Server ist mit **zwei Netzwerk-Schnittstellen** ausgestattet. Diese Schnittstellen können unabhängig oder kombiniert für höhere Leistung und Redundanz verwendet werden:

### Netzwerkleistung
Die Leistung der Netzwerk-Schnittstellen ist direkt mit der gewählten Rechenblade-Klasse verbunden. Beispiel:
- Die **ECO-Blades** bieten eine Konnektivität von 2 x 10 Gbit/s.
- Die **STANDARD- und höhere Blades** verfügen über eine Konnektivität von 2 x 25 Gbit/s.

Diese Netzwerkoptionen gewährleisten eine zuverlässige, flexible und für verschiedene berufliche Arbeitslasten geeignete Konnektivität.

---