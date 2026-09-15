---
title: Konzepte
---

Der Dienst **VM Instances** von Cloud Temple ist ein mit **SecNumCloud** qualifiziertes Shared-Compute-Produkt, das die on-demand Bereitstellung virtueller Maschinen ermöglicht, ohne die zugrunde liegende Infrastruktur verwalten zu müssen. Diese Seite stellt die grundlegenden Konzepte des Dienstes vor.

## Regionen und Verfügbarkeitszonen

Der Dienst für VM-Instanzen ist in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet werden soll.

Weitere Informationen zu Verfügbarkeitszonen und Cloud Temple-Regionen finden Sie unter:

- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
- [Konzepte der Regionen](../../additional_content/concepts_regional.md)

## Serviceklassen

Der Dienst bietet drei Serviceklassen, die an verschiedene Arten von Workloads angepasst sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Development** | Kostenoptimiert, für Test-, Integrations- und Staging-Umgebungen. Geeignet für nicht kritische Workloads mit variabler Auslastung. | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads (Webanwendungen, Microservices, Datenbanken mittlerer Größe). | Geteilt |
| **Performance** | Entwickelt für rechenintensive Workloads, die hohe CPU-Leistung erfordern. **Die vCPUs sind dediziert**, um konstante Leistung zu gewährleisten. | Dedizierte vCPUs |

## Flavors (Instanztypen)

Für jede Serviceklasse werden vordefinierte Flavors angeboten. Es ist ebenfalls möglich, **benutzerdefinierte Flavors** zu erstellen, indem Sie die Anzahl der vCPU und die RAM-Menge frei festlegen.

### Entwicklung

Optimiert für Test-, Integrations- und Staging-Umgebungen mit kontrollierten Kosten.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------------|
| dev.small | 1 | 2 GB | Unit-Tests, leichte CI |
| dev.medium | 2 | 4 GB | Integration, interne Tools |
| dev.large | 4 | 8 GB | Staging-Umgebung |

### General Purpose

Geeignet für Webanwendungen, Microservices und Datenbanken mittlerer Größe.

| Flavor | vCPU | RAM | Einsatzgebiet |
|--------|------|-----|---------------|
| gp.small | 1 | 4 GB | Microservice, Funktionstest |
| gp.medium | 2 | 8 GB | Webserver, leichte Anwendung |
| gp.large | 4 | 16 GB | Standardanwendung |
| gp.xlarge | 8 | 32 GB | Datenbank mittlerer Größe |
| gp.2xlarge | 16 | 64 GB | Kritische Anwendung |

### Leistung

Die **vCPUs sind dediziert**, um konstante Leistung auch unter hoher Last zu gewährleisten.

| Flavor | vCPU | RAM | Einsatzgebiet |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Leichte Berechnungen, CI/CD |
| perf.large | 4 | 8 GB | Batch-Verarbeitung, Encoding |
| perf.xlarge | 8 | 16 GB | Rechenintensive Aufgaben |
| perf.2xlarge | 16 | 32 GB | Simulation, Analytics |

### Benutzerdefinierte Vorlagen

Es ist möglich, eine benutzerdefinierte Vorlage zu erstellen, indem Sie folgende Parameter frei festlegen:

- Die Anzahl der vCPUs
- Die RAM-Menge

Diese Flexibilität ermöglicht eine präzise Anpassung der Dimensionierung an die Anwendungsanforderungen bei gleichzeitiger Kostenoptimierung.

:::note
Die Spezifikationen der Vorlagen können sich ändern. Bitte konsultieren Sie die Cloud Temple-Konsole für die aktuelle Liste.
:::

## Speicher

Alle Volumes des VM-Instanzen-Dienstes sind **persistente, netzwerkangehängte Flash-Volumes** (*network-attached*). Es gibt keinen ephemeren lokalen Speicher: Ihre Daten bleiben unabhängig vom Status der virtuellen Maschine erhalten.

### Systemdisk

Jede virtuelle Maschine verfügt über eine **standardmäßig enthaltene Flash-Systemdisk**, deren Größe vom gewählten Betriebssystem abhängt:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem Betriebssystem.

### Zusätzliche Volumes

Es ist möglich, jeder virtuellen Maschine zusätzliche SpeicherVolumes hinzuzufügen:

- **Größe** : von **1 bis 2.048 GB** pro Volume
- **Maximale Anzahl** : 16 Volumes pro VM
- **Granularität** : Zuweisung pro GB
- **Abrechnung** : pro zugewiesenem GB, mit Wahl der Speicherklasse

### Speicherklassen

Zwei Blockspeicherklassen sind für zusätzliche Volumes verfügbar:

| Klasse | Einsatzgebiet | Leistung | Mindestgröße | Maximalgröße |
| --- | --- | --- | --- | --- |
| **Enterprise** | Hochleistungs-Blockspeicher für latenzkritische Workloads. | **7 500 IOPS/To** | **1 GB** | **2 048 GB** |
| **Standard** | Standard-Blockspeicher, der für die meisten Workloads geeignet ist. | **1 500 IOPS/To** | **1 GB** | **2 048 GB** |

## Netzwerk

### Netzwerkschnittstelle

Jede VM-Instanz kann über **1 bis 7 Netzwerkkarten** verfügen. Jede Netzwerkkarte ist **einem einzigen Netzwerk** zugeordnet.

### Netzwerkkompatibilität

Diese Schnittstelle kann mit zwei Arten von Cloud Temple-Netzwerken verbunden werden:

- **Privates Backbone-Netzwerk** : gemeinsam genutztes privates Netzwerk mit strikter logischer Isolierung zwischen den Tenants. Ideal zum Vernetzen Ihrer Cloud Temple-Ressourcen in einer kontrollierten Umgebung. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : vollständig verwaltetes privates Netzwerk, das eine erweiterte Segmentierung und eine feingranulare Netzwerkkonfiguration Ihrer Umgebungen ermöglicht. [En savoir plus](../../network/vpc/vpc.md)

### Floating IP (Floating IP)

In einem **VPC**-Netzwerk kann einer VM-Instanz eine **Floating IP** zugeordnet werden. Eine Floating IP ist eine öffentliche IP-Adresse, die Sie unabhängig vom Lebenszyklus der Instanz frei zuweisen oder entfernen können.

## Bereitstellung und Images

Die VM-Instanzen werden aus den **offiziellen Images der Cloud Temple Marketplace** bereitgestellt. Die verfügbaren Vorlagen sind diejenigen der [für OpenIaaS gefilterten Marketplace](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Dieser Katalog ausgewählter Images garantiert getestete, gepflegte und einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** für die automatische Vorabkonfiguration der Instanzen beim Start (SSH-Schlüssel-Injektion, Netzwerkkonfiguration, Initialisierungsskripte usw.).

## Datenschutz

### Sicherung (optional)

Zwei Sicherungsrichtlinien stehen zur Verfügung: **`No Backup`** und **`Backup 30 snapshots`**. Bei `Backup 30 snapshots` wird jeden Abend zwischen **20 und 22 Uhr** automatisch ein Snapshot erstellt. Löst der Kunde tagsüber ein zusätzliches Backup aus, werden am selben Tag zwei Snapshots erstellt: Die aktive Aufbewahrungsdauer beträgt dann **29 Tage** anstelle von 30. Diese Option wird **gegen Aufpreis berechnet**.

:::info
Die VM-Replikation ist standardmäßig nicht enthalten. Die Evaluierung ist für das zweite Halbjahr 2026 geplant.
:::

## SLA und Verfügbarkeit

| Verpflichtung | Wert |
|------------|--------|
| Infrastrukturverfügbarkeit | 99,95% (monatlich gemessen) |
| Ressourcengarantie | Je nach gewählter Serviceklasse |

## Automatisierung

Der Dienst ist vollständig steuerbar über :

- **Console Cloud Temple** : grafische Oberfläche für die tägliche Verwaltung
- **API REST Cloud Temple** : programmatische Steuerung des Lebenszyklus von VMs
- **Provider Terraform Cloud Temple** : Infrastruktur als Code