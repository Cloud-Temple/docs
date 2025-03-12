---
title: Konzepte
---


Das **Bare Metal**-Angebot von Cloud Temple bietet dedizierte physische Server in Verbindung mit verteiltem Block-Speicher.
Diese Lösung bietet vollständige Anpassungsmöglichkeiten für Kunden, die ihre eigenen Software-Umgebungen verwalten möchten, sei es für die Installation eines Linux-Systems, Windows oder eines Hypervisors.

---

## Eine Hardware- und flexible Infrastruktur

Das Bare Metal-Angebot basiert auf einer Architektur, die entwickelt wurde, um den Anforderungen kritischer Workloads gerecht zu werden.

### Hauptkomponenten

- **Cisco UCS Server**: Leistungsstark und zuverlässig, diese Rechenblades bilden die Grundlage des Angebots.
- **IBM Spectrum Virtualize Speicher**: Ein verteilter Block-Speicher, der Ausfallsicherheit und hohe Leistung bietet.

### Architektur

Das verteilte Speichermodell bietet eine Trennung zwischen Rechenleistung (Bare Metal-Server) und Speicher (verteilter Block), was ermöglicht:

- Flexibilität bei der Zuordnung von Speichervolumen zu mehreren Bare Metal-Servern je nach Bedarf.
- Optimale Anpassung der Rechen- und Speicherkonfigurationen.
- Erhöhte Ausfallsicherheit durch die Verwendung von **Distributed RAID 6**.

---

## Regionen und Verfügbarkeitszonen

Das Bare Metal-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Art der Bereitstellung ermöglicht es Ihnen, den Standort der Bare Metal-Server zu wählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Implementierung eines Disaster Recovery Plans (DRP) im Falle eines Vorfalls.

---

## Rechenblades-Klassen

Die für das Bare Metal-Angebot verfügbaren Rechenblades bieten eine Reihe von Leistungsmerkmalen, um verschiedenen Anforderungen gerecht zu werden:

| Referenz             | RAM  **(1)** | Frequenz **(2)**                         | Anzahl der Kerne / Threads | Konnektivität **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder gleichwertig)  | 20 / 40 Threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder gleichwertig)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder gleichwertig)    | 48 / 96 Threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder gleichwertig) | 16 / 32 Threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder gleichwertig)    | 36 / 72 Threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder gleichwertig)    | 56 / 112 Threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder gleichwertig)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Hinweise

- **(1)** Die Speichermenge ist die, die physisch auf den Blades verfügbar ist und nicht geändert werden kann.
- **(2)** Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbo-Frequenz.
- **(3)** Die physische Konnektivität wird für Netzwerkzugriff und Block-Speicherzugriff gemeinsam genutzt, dank einer konvergenten Cisco UCS-Architektur.
- **(4)** Verfügbare GPUs entwickeln sich entsprechend den neuesten Technologien. Stand 1. Mai 2024 umfasst das Angebot NVIDIA LOVELACE L40S GPUs.

Die Verfügbarkeit der Infrastruktur wird mit 99,9% garantiert, monatlich gemessen, einschließlich Wartungsfenstern. Jede Anfrage im Zusammenhang mit dem SLA muss über ein Incident-Ticket gemeldet werden.

---

## Block-Speicherklassen

Verteilter Block-Speicher, basierend auf **IBM Spectrum Virtualize**, bietet eine Reihe von Leistungsmerkmalen, die an verschiedene Anwendungsfälle angepasst sind:

| Referenz                         | IOPS/TB                 | Hauptanwendung                        |
|-----------------------------------|-------------------------|----------------------------------------|
| **FLASH - Essential**             | 500                     | Leichte Workloads                      |
| **FLASH - Standard**              | 1500                    | Standard-Workloads                     |
| **FLASH - Premium**               | 3000                    | Intensive Workloads                    |
| **FLASH - Enterprise**            | 7500                    | Kritische Workloads                    |
| **FLASH - Ultra**                 | 15000                   | Ultra-intensive Workloads              |
| **MASS STORAGE - Archivierung**   | Nicht anwendbar         | Wirtschaftlicher Speicher für Archivierung |

### Eigenschaften

- **Technologie**: NVMe Flash mit **Distributed RAID 6** für erhöhte Ausfallsicherheit.
- **Verfügbarkeit**: 99,99%, monatlich gemessen.
- **Einschränkungen**: Keine Begrenzung bei Lese- oder Schreibvorgängen. Keine automatische Komprimierung oder Deduplizierung, was die vollständige Nutzung der reservierten Volumes gewährleistet.

---

## Bare Metal Konsolenzugriff

Der Zugriff auf Bare Metal-Server erfolgt direkt über die **Cloud Temple-Konsole**. Diese Funktion bietet vollständige Kontrolle über den Server-Lebenszyklus, einschließlich:

- **KVM-Zugriff**: Eine direkte Schnittstelle zur Verwaltung von Servern, als ob Sie physisch vor Ort wären.
- **Verwaltung von Routineoperationen**: Möglichkeit, Aktionen wie Stromverwaltung, Neustarts oder **ISO-Mapping** für die Betriebssysteminstallation durchzuführen.

Diese Zugriffsebene gewährleistet maximale Flexibilität unter Berücksichtigung der Sicherheitsanforderungen.

---

## Netzwerkkonnektivität von Bare Metal-Servern

Bare Metal-Server verfügen über erweiterte Netzwerkfunktionen.

### Layer 2 VLAN

Es ist möglich, **VLANs vom Typ Layer 2** auf den Netzwerkschnittstellen von Bare Metal-Servern zu konfigurieren.
Benutzer können:

- **VLAN-Tagging aktivieren**, um ein oder mehrere VLANs mit derselben Schnittstelle zu verknüpfen.
- **VLANs direkt** auf die Netzwerkschnittstellen der Server übertragen.

### Aggregation von Netzwerkschnittstellen

Jeder Server ist mit **zwei Netzwerkschnittstellen** ausgestattet. Diese Schnittstellen können unabhängig voneinander oder kombiniert für bessere Leistung und Redundanz verwendet werden:

### Netzwerkleistung

Die Leistung der Netzwerkschnittstellen hängt direkt mit der gewählten Blade-Klasse zusammen. Beispiel:

- **ECO**-Blades bieten eine Konnektivität von 2 x 10 Gbit/s.
- **STANDARD**-Blades und höher verfügen über eine Konnektivität von 2 x 25 Gbit/s.

Diese Netzwerkoptionen gewährleisten eine zuverlässige, flexible Konnektivität, die an eine Vielzahl professioneller Workloads angepasst ist.

---
