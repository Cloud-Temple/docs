---
title: Konzepte
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Einführung

Das **Bare Metal**-Angebot stellt dedizierte physische Server ohne gemeinsame Ressourcennutzung bereit, kombiniert mit verteiltem Blockspeicher. Es bietet Kunden, die ihre eigene Softwareumgebung verwalten möchten, vollständige Anpassbarkeit – sei es zur Installation eines Linux- oder Windows-Systems oder eines Hypervisors.

### Zielgruppen und Anwendungsfälle

- **Öffentlicher Sektor und Verwaltungen**: sensible Anwendungen, die der Doktrin „cloud au centre“ entsprechen.
- **Hoheitliche Sektoren**: Umgebungen, die eine physische Isolation erfordern.
- **Gesundheitswesen**: Verarbeitung von Gesundheitsdaten auf einer nach HDS zertifizierten Infrastruktur.
- **Künstliche Intelligenz**: dedizierte GPUs für das Training und die Inferenz von Modellen.
- **Private Cloud**: vollständige Anpassung des Software-Stacks, zum Beispiel für eine Hypervisor-Farm.
- **Softwarelizenzen**: präzise Kontrolle der Ressourcen zur Optimierung hardwaregebundener Lizenzen.

## Vorteile

| Vorteil                      | Beschreibung                                                                                        |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Volle Kontrolle              | Sie installieren die Softwareumgebung (Betriebssystem, Hypervisor) frei und greifen direkt auf die Server zu. |
| Physische Isolation          | Jeder Server ist Ihnen dediziert, ohne gemeinsame Ressourcennutzung.                                |
| Flexible Architektur         | Rechenleistung und Speicher sind getrennt: Beide werden unabhängig voneinander dimensioniert.       |
| Bereitstellung über mehrere Zonen | Die Server können auf mehrere Verfügbarkeitszonen verteilt werden.                             |
| Hochleistungs-Hardware       | Acht Blade-Klassen, davon zwei mit NVIDIA-GPUs ausgestattet.                                        |

## Funktionen

| Funktion                | Beschreibung                                                                                    |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Dedizierte Server       | Acht Blade-Klassen, von ECO bis PERFORMANCE 5, ab einem Server und ohne Obergrenze.             |
| NVIDIA-GPUs             | NVIDIA L40S 48 GB (PERFORMANCE 4) und NVIDIA H100 80 GB (PERFORMANCE 5).                        |
| Verteilter Blockspeicher | Sechs Speicherklassen, mit Distributed RAID 6.                                                 |
| Netzwerkkonfiguration   | Einfacher Modus (automatische Redundanz) oder erweiterter Modus (vier virtuelle Netzwerkkarten). |
| KVM-Konsole             | Direkter Zugriff auf die Server über die Cloud Temple-Konsole.                                  |
| Mehrere Zonen           | Bereitstellung in verschiedenen Verfügbarkeitszonen.                                            |
| VLAN und Aggregation    | Layer-2-VLANs und Aggregation der Netzwerkschnittstellen.                                       |

<a id="accès-console-bare-metal"></a>

### Zugriff über die Bare Metal-Konsole

Der Zugriff auf die Bare Metal-Server erfolgt direkt über die **Cloud Temple-Konsole**. Diese Funktion bietet volle Kontrolle über den Lebenszyklus der Server, einschließlich:

- **KVM-Zugriff**: eine direkte Schnittstelle zur Verwaltung der Server, als wären Sie physisch vor Ort.
- **Verwaltung von Routinevorgängen**: Stromverwaltung, Zurücksetzen oder **ISO-Mapping** für die Installation eines Betriebssystems.
- **Verwaltung von Volumes**: Mapping und Konfiguration von Speicher-Volumes über die Oberfläche.

Der Dienst lässt sich auch über eine REST-API steuern, die mit OpenAPI kompatibel ist.

## Architektur

### Hauptkomponenten

- **Cisco UCS-Server**: Diese Compute-Blades bilden die Grundlage des Angebots.
- **IBM Spectrum Virtualize-Speicher**: ein verteilter Blockspeicher, der Ausfallsicherheit und hohe Leistung bietet.

### Architektur

Das Modell des verteilten Speichers trennt die Rechenleistung (Bare Metal-Server) vom Speicher (verteilter Blockspeicher). Dies ermöglicht es:

- Speicher-Volumes je nach Bedarf auf mehrere Bare Metal-Server zu mappen;
- die Rechen- und Speicherkonfigurationen individuell anzupassen;
- die Ausfallsicherheit dank **Distributed RAID 6** zu erhöhen.

## Regionen und Verfügbarkeitszonen

Das Produkt Bare Metal wird in der Region FR1 in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Sie wählen den Standort der Bare Metal-Server und können sie auf verschiedene Verfügbarkeitszonen (AZ) verteilen. Dies ermöglicht eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Umsetzung eines Notfallwiederherstellungsplans im Falle eines Vorfalls.

## Technische Spezifikationen

### Klassen der Compute-Blades

Die für das Bare Metal-Angebot verfügbaren Compute-Blades bieten eine Bandbreite an Leistungsstufen für unterschiedliche Anforderungen:

| Referenz              | RAM  **(1)** | Frequenz **(2)**                          | Anzahl Kerne / Threads    | Konnektivität **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder gleichwertig)  | 20 / 40 Threads       | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder gleichwertig)  | 32 / 64 Threads       | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder gleichwertig)    | 48 / 96 Threads       | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y oder gleichwertig)   | 16 / 32 Threads       | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3.00/3.6 GHz (Gold 6354 oder gleichwertig)    | 36 / 72 Threads       | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder gleichwertig)    | 56 / 112 Threads      | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder gleichwertig)  | 32 / 64 Threads       | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |
| **PERFORMANCE 5**    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder gleichwertig)  | 32 / 64 Threads       | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80GB |

#### Hinweise

- **(1)** Die Speichermenge entspricht dem physisch auf den Blades verfügbaren Arbeitsspeicher und kann nicht geändert werden.
- **(2)** Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbofrequenz.
- **(3)** Die physische Konnektivität wird dank einer konvergenten Cisco UCS-Architektur gemeinsam für den Netzwerkzugriff und den Zugriff auf den Blockspeicher genutzt.
- **(4)** Die verfügbaren GPUs entwickeln sich mit den neuesten Technologien weiter. Das Produkt bietet NVIDIA L40S- und NVIDIA H100-GPUs.

### Klassen des Blockspeichers

Der verteilte Blockspeicher bietet eine Bandbreite an Leistungsstufen für verschiedene Anwendungsfälle:

| Referenz                          | IOPS/TB        | Max. IOPS-Obergrenze / Volume | Max. Bandbreite / Volume | Hauptverwendung                        |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essentiel**             | 500            | 10 000 IOPS               | 512 MB/s                    | Leichte Workloads                      |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Standard-Workloads                     |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Intensive Workloads                    |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Kritische Workloads                    |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Ultra-intensive Workloads              |
| **MASS STORAGE - Archivage**      | Nicht zutreffend | Nicht garantiert        | Nicht garantiert            | Kostengünstiger Speicher für die Archivierung |

#### Merkmale

- **Leistung**: Die effektive Leistung steigt linear mit dem zugewiesenen Speichervolumen (gemäß dem Verhältnis IOPS/TB), **bis zur oben definierten absoluten Hardware-Obergrenze**. Beispielsweise ist ein Volume von 10 TB in der Klasse Ultra physisch auf 30 000 IOPS und 1024 MB/s begrenzt.
- **Technologie**: NVMe-Flash mit **Distributed RAID 6** für erhöhte Ausfallsicherheit.
- **Einschränkungen**: keine Begrenzung bei Lese- oder Schreibvorgängen. Keine automatische Komprimierung oder Deduplizierung, was die vollständige Nutzung der reservierten Volumes garantiert.

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Netzwerkkonnektivität

Die Bare Metal-Server verfügen über erweiterte Netzwerkfunktionen.

#### Konfigurationsmodi

- **Einfache Konfiguration (Standard)**: Jeder Server ist mit **zwei physischen Netzwerkschnittstellen** ausgestattet. Redundanz und Hochverfügbarkeit werden automatisch von der Infrastruktur verwaltet, ohne manuelle Konfiguration.
- **Erweiterte Konfiguration**: Für Anforderungen wie die Bereitstellung von Hypervisoren können die beiden physischen Schnittstellen in **vier virtuelle Netzwerkkarten** aufgeteilt werden. Load Balancing, Teaming und Hochverfügbarkeit werden dann an Ihr Betriebssystem delegiert, um beispielsweise Management-, Daten-, Speicher- und Replikationsverkehr zu trennen.

#### Layer-2-VLAN

Auf den Netzwerkschnittstellen der Bare Metal-Server können **Layer-2-VLANs** konfiguriert werden. Sie können:

- **VLAN-Tagging aktivieren**, um ein oder mehrere VLANs einer einzigen Schnittstelle zuzuordnen;
- **VLANs** direkt auf die Netzwerkschnittstellen der Server **weitergeben**.

#### Aggregation der Netzwerkschnittstellen

Die Netzwerkschnittstellen können unabhängig voneinander genutzt oder kombiniert werden (Bonding, Teaming), um eine bessere Leistung und eine bessere Redundanz zu erzielen.

#### Netzwerkleistung

Die Leistung der Netzwerkschnittstellen hängt von der gewählten Blade-Klasse ab:

- Die **ECO**-Blades bieten eine Konnektivität von 2 x 10 Gbit/s;
- die Blades ab **STANDARD** verfügen über eine Konnektivität von 2 x 25 Gbit/s.

### Grenzen

- Die Speichermenge eines Blades kann nicht geändert werden.
- Ein Speicher-Volume ist unabhängig von seiner Größe auf 30 000 IOPS und 1024 MB/s begrenzt (10 000 IOPS und 512 MB/s in der Klasse Essentiel).

## Sicherheit und Compliance

Bare Metal ist nach HDS und ISO 27001 zertifiziert, trägt das Gaia-X-Label Stufe 3, ist CISPE- und C5-konform und SecNumCloud-qualifiziert.

### Sicherheit und Verschlüsselung des Blockspeichers

Um die Vertraulichkeit Ihrer ruhenden Daten zu gewährleisten, integriert die gesamte Blockspeicher-Infrastruktur eine Hardwareverschlüsselung.

- **Verschlüsselungsart**: Die Daten werden direkt auf den Festplatten verschlüsselt (`Data At Rest`), mit dem Algorithmus **XTS-AES 256**.
- **Konformität**: Diese Verschlüsselungsmethode entspricht der Norm **FIPS 140-2**.
- **Funktionsweise**: Die Verschlüsselung wird beim Schreiben der Daten auf das physische Speichermedium angewendet.

:::warning[Hinweis zur Replikation]
Diese Verschlüsselung schützt die auf den Festplatten gespeicherten Daten. Sie ist nicht „on-the-fly“ aktiv: Die Daten werden während der Speicherreplikationsvorgänge zwischen den Verfügbarkeitszonen nicht verschlüsselt. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

## Dienstverfügbarkeit

| Element         | Verfügbarkeitsziel, gemessen über einen Monat |
|-----------------|-----------------------------------------------|
| Infrastruktur   | 99,9 %, einschließlich Wartungsfenstern       |
| Blockspeicher   | 99,99 %                                       |

Jede Anfrage im Zusammenhang mit der Verfügbarkeit muss über ein Incident-Ticket gemeldet werden.

## Reversibilität

| Vorgang                   | Ergebnis                     | Frist       | Kosten     |
|---------------------------|------------------------------|-------------|------------|
| Datenexport               | Daten in Standardformaten    | 30 Tage     | Kostenlos  |
| Unterstützung bei der Migration | Technischer Support    | Auf Anfrage | Auf Angebot |
| Sichere Löschung          | Vernichtungszertifikat       | 7 Tage      | Inbegriffen |

## Preise

Der Dienst wird monatlich pro physischem Server abgerechnet. Die Mindestlaufzeit beträgt für die meisten Konfigurationen einen Monat; einige Blades erfordern je nach Hardwarekonfiguration eine längere Laufzeit. Die Preise und Laufzeiten sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[Bare Metal — Preise](https://www.cloud-temple.com/produits/bare-metal/).
