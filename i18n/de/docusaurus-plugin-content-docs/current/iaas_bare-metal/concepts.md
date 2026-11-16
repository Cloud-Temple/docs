---
title: Konzepte
---

<a id="une-infrastructure-matérielle-et-flexible"></a>

## Vorstellung

Das Angebot **Bare Metal** stellt dedizierte physische Server ohne Ressourcen-Sharing bereit, ergänzt um einen verteilten Block-Speicher. Es bietet eine vollständige Anpassungsfähigkeit für Kunden, die ihre eigene Softwareumgebung verwalten möchten, sei es die Installation eines Linux-, Windows- oder Hypervisor-Systems.

### Zielgruppen und Anwendungsfälle

- **Öffentlicher Sektor und Behörden**: sensible Anwendungen, die der Doktrin „Cloud im Zentrum" entsprechen.
- **Regalbereiche**: Umgebungen, die eine physische Isolation erfordern.
- **Gesundheitswesen**: Verarbeitung von Gesundheitsdaten auf einer HDS-zertifizierten Infrastruktur.
- **Künstliche Intelligenz**: dedizierte GPUs für das Training und die Inferenz von Modellen.
- **Private Cloud**: vollständige Anpassung des Software-Stacks, beispielsweise für eine Hypervisor-Farm.
- **Softwarelizenzen**: präzise Kontrolle der Ressourcen zur Optimierung hardwaregebundener Lizenzen.

## Vorteile

| Vorteil                     | Beschreibung                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| Volle Kontrolle               | Sie installieren frei die Softwareumgebung (OS, Hypervisor) und greifen direkt auf die Server zu. |
| Physische Isolation           | Jeder Server ist Ihnen dediziert, ohne Ressourcen-Sharing.                                    |
| Flexible Architektur        | Compute und Storage sind getrennt: Jeder wird unabhängig dimensioniert.                       |
| Multi-Zone-Bereitstellung      | Die Server können auf mehrere Verfügbarkeitszonen verteilt werden.                            |
| Hochleistungs-Hardware   | Acht Blade-Klassen, davon zwei mit NVIDIA-GPUs.                                            |

## Funktionen

| Funktion          | Beschreibung                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Dedizierte Server         | Acht Blade-Klassen, von ECO bis PERFORMANCE 5, ab einem Server und ohne Obergrenze.            |
| NVIDIA-GPU              | NVIDIA L40S 48 Go (PERFORMANCE 4) und NVIDIA H100 80 Go (PERFORMANCE 5).                         |
| Verteilter Block-Speicher | Sechs Speicher-Klassen, mit Distributed RAID 6.                                               |
| Netzwerkkonfiguration    | Einfacher Modus (automatische Redundanz) oder erweiterter Modus (vier virtuelle Netzwerkkarten).               |
| KVM-Konsole             | Direkter Zugriff auf die Server über die Cloud Temple-Konsole.                                       |
| Multi-Zonen             | Bereitstellung in verschiedenen Verfügbarkeitszonen.                                             |
| VLAN und Aggregation      | Layer-2-VLANs und Aggregation der Netzwerkschnittstellen.                                           |

<a id="accès-console-bare-metal"></a>

### Zugriff auf die Bare-Metal-Konsole

Der Zugriff auf die Bare-Metal-Server erfolgt direkt über die **Cloud Temple-Konsole**. Diese Funktion bietet eine vollständige Kontrolle über den Lebenszyklus der Server, einschließlich:

- **KVM-Zugriff**: eine direkte Schnittstelle zur Verwaltung der Server, als wären Sie physisch vor Ort.
- **Verwaltung der Routineoperationen**: Verwaltung der Stromversorgung, Neustarts oder **ISO-Mapping** zur Installation eines Betriebssystems.
- **Verwaltung der Volumes**: Mapping und Konfiguration der Speicher-Volumes über die Schnittstelle.

Der Dienst ist auch über eine REST-API steuerbar, kompatibel mit OpenAPI.

## Architektur

### Hauptkomponenten

- **Cisco UCS-Server**: Diese Compute-Blades bilden die Grundlage des Angebots.
- **IBM Spectrum Virtualize Storage**: ein verteilter Block-Speicher, der Resilienz und hohe Leistung bietet.

### Architektur

Das verteilte Speichermodell trennt Compute (Bare-Metal-Server) von Storage (verteilter Block), was Folgendes ermöglicht:

- das Mappen von Speicher-Volumes auf mehrere Bare-Metal-Server je nach Bedarf;
- die Anpassung der Compute- und Storage-Konfigurationen;
- die Steigerung der Resilienz durch **Distributed RAID 6**.

## Regionen und Verfügbarkeitszonen

Das Bare-Metal-Produkt wird in der Region FR1 in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_regional.md#verfügbarkeitszonen) ist Teil einer [Region](../additional_content/concepts_regional.md).

Sie wählen die Standorte der Bare-Metal-Server und können sie auf verschiedene Verfügbarkeitszonen (AZ) verteilen. Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Business-Continuity-Plans im Störungsfall.

## Technische Merkmale

### Compute-Blade-Klassen

Die für das Bare-Metal-Angebot verfügbaren Compute-Blades bieten ein Leistungsspektrum zur Erfüllung verschiedener Anforderungen:

| Referenz             | RAM  **(1)** | Frequenz **(2)**                         | Anzahl Kerne / Threads | Konnektivität **(3)** | GPU **(4)**          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| **ECO**              | 384 Go       | 2,20/3,0 GHz (Silver 4114 oder äquivalent)  | 20 / 40 Threads           | 2 X 10 Gbit/s        | -                    |
| **STANDARD**         | 384 Go       | 2,40/3,4 GHz (Silver 4314 oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | -                    |
| **ADVANCE**          | 768 Go       | 2,80/3,5 GHz (Gold 6342 oder äquivalent)    | 48 / 96 Threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 1**    | 384 Go       | 3,20/3,6 GHz (Gold 5315Y oder äquivalent) | 16 / 32 Threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 2**    | 768 Go       | 3,00/3,6 GHz (Gold 6354 oder äquivalent)    | 36 / 72 Threads           | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 3**    | 1536 Go      | 2,60/3,5 GHz (Gold 6348 oder äquivalent)    | 56 / 112 Threads          | 2 X 25 Gbit/s        | -                    |
| **PERFORMANCE 4**    | 512 Go       | 2,50/4,1 GHz (Intel 6426Y oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |
| **PERFORMANCE 5**    | 512 Go       | 2,50/4,1 GHz (Intel 6426Y oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | 2 x NVIDIA H100 80Go |

#### Hinweise

- **(1)** Die Mengenangabe des Speichers ist die physisch auf den Blades verfügbare Menge und kann nicht geändert werden.
- **(2)** Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbo-Frequenz.
- **(3)** Die physische Konnektivität wird für den Netzwerkzugriff und den Block-Speicherzugriff gemeinsam genutzt, dank einer konvergenten Cisco-UCS-Architektur.
- **(4)** Die verfügbaren GPUs ändern sich je nach neuesten Technologien. Das Produkt bietet NVIDIA L40S- und NVIDIA H100-GPUs.

### GPU

Zwei Blade-Klassen enthalten jeweils zwei dedizierte NVIDIA-Karten für Ihre Verwendung: PERFORMANCE 4 (2 × NVIDIA L40S 48 Go) und PERFORMANCE 5 (2 × NVIDIA H100 80 Go). Sie dienen dem Training und der Inferenz von KI-Modellen, der Computer Vision, der Simulation und der wissenschaftlichen Berechnung. CUDA, cuDNN und die wichtigsten KI-Frameworks (TensorFlow, PyTorch usw.) sind ohne Anpassung einsetzbar.

| Parameter               | NVIDIA L40S  | NVIDIA H100  |
|-------------------------|--------------|--------------|
| GPU-Speicher             | 48 Go        | 80 Go        |
| FP32                    | 91,6 TFlops  | 51 TFlops    |
| TF32 (Tensor Core) *    | 366 TFlops   | 756 TFlops   |
| FP16 (Tensor Core) *    | 733 TFlops   | 1 513 TFlops |
| FP8 (Tensor Core) *     | 1 466 TFlops | 3 026 TFlops |
| Maximale Leistungsaufnahme   | 350 W        | 350 W        |

\* Herstellerangaben von NVIDIA mit strukturiertem Sparsity. Ohne Sparsity sind diese Werte durch zwei zu teilen.

Die Multi-Instance-GPU-Technologie (MIG) partitioniert eine H100-Karte in maximal 7 Instanzen. Jede Instanz verfügt über eigenen Speicher und eigene Recheneinheiten, die von den anderen Instanzen isoliert sind. Mehrere Workloads teilen sich somit eine Karte, ohne sich gegenseitig zu beeinträchtigen. Die L40S-Karten unterstützen Multi-Instance GPU nicht.

- Die Anzahl und das Modell der Karten sind durch die Blade-Klasse festgelegt: Die GPU-Konfiguration eines Blades kann nicht geändert werden.
- Die mit GPUs ausgestatteten Bare-Metal-Blades können als Worker-Knoten für Managed Kubernetes dienen: siehe [GPU auf Managed Kubernetes verwenden](../managed_kubernetes/tutorials/usinggpu.md).

### Speicher-Klassen im Block-Modus

<a id="caractéristiques"></a>

Der verteilte Block-Speicher bietet fünf Flash-Klassen, von 500 bis 15 000 IOPS/To, sowie die Mass-Storage-Klasse für die Archivierung. Die Klassen, ihre Leistungsgrenzen und ihre Merkmale sind auf der Seite [Block-Speicher](../storage/block/block_storage.md) beschrieben.

<a id="connectivité-réseau-des-serveurs-bare-metal"></a>

### Netzwerkkonnektivität

Jeder Bare-Metal-Server verfügt über **zwei physische Netzwerkschnittstellen**. Ihre Anzahl ist fest: Es ist nicht möglich, zusätzliche physische Netzwerkkarten hinzuzufügen.

#### Konfigurationsmodi

Sie wählen den Netzwerkkonfigurationsmodus bei der Bestellung der Ressource in der Cloud Temple-Konsole:

- **Einfache Konfiguration**: Redundanz und Hochverfügbarkeit werden automatisch von der Infrastruktur verwaltet, ohne manuelle Konfiguration in Ihrem Betriebssystem.
- **Erweiterte Konfiguration**: Für Anforderungen wie die Bereitstellung von Hypervisoren werden die beiden physischen Schnittstellen in **vier virtuelle Netzwerkkarten** aufgeteilt. Die Verwaltung von Teaming und Hochverfügbarkeit wird dann Ihrem Betriebssystem im Active/Passive-Modus übertragen.

Der Netzwerkkonfigurationsmodus kann bei einem bestehenden Dienst nicht geändert werden. Um einen anderen Modus zu verwenden, müssen Sie einen neuen Server mit dem gewünschten Modus bestellen und dann Ihre Workloads dorthin migrieren. Diese Migration wird von Ihnen durchgeführt; eine Unterstützung durch die Professional Services kann geprüft werden.

#### Layer-2-VLANs

Es ist möglich, **Layer-2-VLANs** auf den Netzwerkschnittstellen der Bare-Metal-Server zu konfigurieren. Sie können:

- **VLAN-Tagging aktivieren**, um ein oder mehrere VLANs derselben Schnittstelle zuzuordnen;
- **VLANs propagieren** direkt auf den Netzwerkschnittstellen der Server.

#### Aggregation der Netzwerkschnittstellen

Die Netzwerkschnittstellen können unabhängig voneinander oder kombiniert (Bonding, Teaming) verwendet werden. Nur der Modus **Active/Passive** wird unterstützt: Er gewährleistet Redundanz, ohne die verfügbare Bandbreite zu erhöhen. **LACP (802.3ad) wird nicht unterstützt**.

#### Netzwerkperformance

Die Performance der Netzwerkschnittstellen hängt von der gewählten Blade-Klasse ab:

- die Blades **ECO** bieten eine Konnektivität von 2 x 10 Gbit/s;
- die Blades **STANDARD** und höher verfügen über eine Konnektivität von 2 x 25 Gbit/s.

Die GPU-Blades **PERFORMANCE 4 (L40S)** und **PERFORMANCE 5 (H100)** verfügen somit über zwei physische Schnittstellen mit jeweils 25 Gbit/s. Diese physische Konnektivität wird zwischen Netzwerkzugriff und Block-Speicher geteilt.

### Grenzen

- Die Speichermenge eines Blades kann nicht geändert werden.
- Ein Speicher-Volume ist auf 30 000 IOPS und 1024 Mo/s begrenzt (10 000 IOPS und 512 Mo/s in der Klasse Essentiel), unabhängig von seiner Größe.

## Sicherheit und Konformität

Bare Metal ist HDS- und ISO 27001-zertifiziert, mit Gaia-X-Level 3 ausgezeichnet, CISPE- und C5-konform und als SecNumCloud qualifiziert.

### Sicherheit und Verschlüsselung des Block-Speichers

Um die Vertraulichkeit Ihrer Daten im Ruhezustand zu gewährleisten, integriert die gesamte Block-Speicher-Infrastruktur eine Hardware-Verschlüsselung.

- **Verschlüsselungstyp**: Die Daten werden direkt auf den Datenträgern (`Data At Rest`) mit dem Algorithmus **XTS-AES 256** verschlüsselt.
- **Konformität**: Diese Verschlüsselungsmethode entspricht der Norm **FIPS 140-2**.
- **Funktionsweise**: Die Verschlüsselung wird beim Schreiben der Daten auf den physischen Speicherträger angewendet.

:::warning[Hinweis zur Replikation]
Diese Verschlüsselung schützt die auf den Datenträgern gespeicherten Daten. Sie ist nicht „on-the-fly" aktiv: Die Daten werden während der Speicherreplikationsoperationen zwischen den Verfügbarkeitszonen nicht verschlüsselt. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

## Dienstverfügbarkeit

| Element         | Verfügbarkeitsziel, gemessen über einen Monat |
|-----------------|-----------------------------------------------|
| Infrastruktur  | 99,9 %, einschließlich Wartungsfenster        |
| Block-Speicher   | 99,99 %                                       |

Jede Anfrage im Zusammenhang mit der Verfügbarkeit muss über einen Incident-Ticket gemeldet werden.

## Reversibilität

| Operation                 | Deliverable                     | Frist       | Kosten       |
|---------------------------|------------------------------|-------------|------------|
| Datenexport        | Daten, in Standardformaten | 30 Tage   | Kostenlos |
| Migrationsunterstützung | Technischer Support            | Auf Anfrage | Auf Angebot  |
| Sichere Löschung           | Zertifikat über die Vernichtung    | 7 Tage     | Inklusive     |

## Preisgestaltung

Der Dienst wird monatlich pro physischem Server abgerechnet. Die Mindestvertragslaufzeit beträgt für die meisten Konfigurationen einen Monat; bestimmte Blades erfordern je nach Hardware-Konfiguration eine längere Bindungsdauer. Die Preise und Bindungsdauern werden auf der Produktseite der Cloud-Temple-Website veröffentlicht:
[Bare Metal — Preise](https://www.cloud-temple.com/produits/bare-metal/).
