---
title: Konzepte
---

Der **VM Instances**-Dienst von Cloud Temple ist ein als **SecNumCloud** zertifiziertes Shared-Compute-Produkt, das die bedarfsgerechte Bereitstellung virtueller Maschinen ohne Verwaltung der zugrunde liegenden Infrastruktur ermöglicht. Diese Seite stellt die grundlegenden Konzepte des Dienstes vor.

## Regionen und Verfügbarkeitszonen

Der Dienst VM Instances ist in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet werden soll.

Weitere Informationen zu Verfügbarkeitszonen und Cloud Temple-Regionen finden Sie unter:

- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
- [Konzepte der Regionen](../../additional_content/concepts_regional.md)

## Serviceklassen

Der Dienst bietet drei Serviceklassen an, die auf verschiedene Arten von Workloads abgestimmt sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Development** | Kostenoptimiert, für Test-, Integrations- und Staging-Umgebungen. Geeignet für nicht kritische Workloads mit variabler Auslastung. | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads (Webanwendungen, Microservices, Datenbanken mittlerer Größe). | Geteilt |
| **Performance** | Entwickelt für rechenintensive Workloads, die hohe CPU-Leistung erfordern. **Die vCPUs sind dediziert**, um konstante Leistung zu gewährleisten. | Dedizierte vCPUs |

## Flavors (Flavors)

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

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------------|
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
| perf.large | 4 | 8 GB | Batchverarbeitung, Encoding |
| perf.xlarge | 8 | 16 GB | Rechenintensive Aufgaben |
| perf.2xlarge | 16 | 32 GB | Simulation, Analytics |

### Benutzerdefinierte Vorlagen

Es ist möglich, eine benutzerdefinierte Vorlage zu erstellen, indem Sie frei auswählen:

- Die Anzahl der vCPU
- Die RAM-Kapazität

Diese Flexibilität ermöglicht es, die Dimensionierung genau an die Anwendungsanforderungen anzupassen und gleichzeitig die Kosten zu optimieren.

:::note
Die Spezifikationen der Vorlagen können sich ändern. Rufen Sie die Cloud Temple-Konsole auf, um die aktuelle Liste einzusehen.
:::

## Speicher

Alle Volumes des VM-Instanzen-Dienstes sind **netzwerkangehängte persistente Flash-Volumes** (*network-attached*). Es gibt keinen ephemeren lokalen Speicher: Ihre Daten werden unabhängig vom Status der virtuellen Maschine beibehalten.

### Systemdisk

Jede virtuelle Maschine verfügt über eine **standardmäßig enthaltene Flash-Systemdisk**, deren Größe vom gewählten Betriebssystem abhängt:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem Betriebssystem.

### Zusätzliche Volumes

Es ist möglich, jeder virtuellen Maschine zusätzliche Speichervolumes hinzuzufügen:

- **Maximale Größe** : 2 TB pro Volume
- **Maximale Anzahl** : 16 Volumes pro VM
- **Granularität** : Zuweisung in GB-Schritten
- **Abrechnung** : pro zugewiesenem GB, mit Wahl der Speicherklasse

## Netzwerk

### Netzwerkschnittstelle

Jede VM-Instanz kann über **1 bis 7 Netzwerkkarten** verfügen. Jede Netzwerkkarte ist **genau einem Netzwerk** zugeordnet.

### Netzwerkkompatibilität

Diese Schnittstelle kann mit zwei Arten von Cloud Temple-Netzwerken verbunden werden:

- **Privates Backbone-Netzwerk** : gemeinsam genutztes privates Netzwerk mit strikter logischer Isolierung zwischen den Tenants. Ideal, um Ihre Cloud Temple-Ressourcen in einer kontrollierten Umgebung zu vernetzen. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : vollständig verwaltetes privates Netzwerk, das eine erweiterte Segmentierung und eine präzise Netzwerkkonfiguration Ihrer Umgebungen ermöglicht. [En savoir plus](../../network/vpc/vpc.md)

### Floating IP (Floating IP)

In einem **VPC**-Netzwerk kann einer VM-Instanz eine **Floating IP** zugeordnet werden. Eine Floating IP ist eine öffentliche IP-Adresse, die Sie unabhängig vom Lebenszyklus einer Instanz beliebig zuweisen oder entfernen können.

## Bereitstellung und Images

Die VM-Instanzen werden aus den **offiziellen Images der Marketplace Cloud Temple** bereitgestellt. Die verfügbaren Vorlagen stammen aus der [Marketplace filtrée pour OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Dieser Katalog ausgewählter Images gewährleistet getestete, gepflegte und sofort einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** zur automatischen Vorabkonfiguration der Instanzen beim Start (Injektion von SSH-Schlüsseln, Netzwerkkonfiguration, Initialisierungsskripte usw.).

## Datenschutz

### Sicherung (optional)

Zwei Sicherungsrichtlinien stehen zur Verfügung: **`No Backup`** und **`Backup 30 snapshots`**. Bei `Backup 30 snapshots` wird jeden Abend automatisch zwischen **20 und 22 Uhr** ein Snapshot erstellt. Wenn der Kunde tagsüber ein zusätzliches Backup auslöst, werden am selben Tag zwei Snapshots erstellt: Die aktive Aufbewahrungsdauer deckt dann **29 Tage** anstelle von 30 ab. Diese Option wird **zusätzlich berechnet**.

:::info
Die VM-Replikation ist standardmäßig nicht enthalten. Die Evaluierung ist für das zweite Halbjahr 2026 geplant.
:::

## SLA und Verfügbarkeit

| Verpflichtung | Wert |
|------------|--------|
| Infrastrukturverfügbarkeit | 99,95 % (monatlich gemessen) |
| Ressourcengarantie | Je nach gewählter Serviceklasse |

## Automatisierung

Der Service ist vollständig steuerbar über :

- **Console Cloud Temple** : grafische Oberfläche für die tägliche Verwaltung
- **API REST Cloud Temple** : programmatische Steuerung des Lebenszyklus der VMs
- **Provider Terraform Cloud Temple** : Infrastructure as Code