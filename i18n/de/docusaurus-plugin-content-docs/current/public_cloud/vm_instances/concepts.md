---
title: Konzepte
---

Der **VM Instances**-Service von Cloud Temple ist ein **SecNumCloud**-zertifiziertes Shared-Compute-Produkt, das die bedarfsgerechte Bereitstellung virtueller Maschinen ohne Verwaltung der zugrunde liegenden Infrastruktur ermöglicht. Diese Seite stellt die grundlegenden Konzepte des Services vor.

## Regionen und Verfügbarkeitszonen

Der Dienst VM-Instanzen ist in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet wird.

Weitere Informationen zu Verfügbarkeitszonen und Cloud Temple-Regionen finden Sie unter:

- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
- [Konzepte der Regionen](../../additional_content/concepts_regional.md)

## Serviceklassen

Der Dienst bietet drei Serviceklassen, die an verschiedene Workload-Typen angepasst sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Development** | Kostenoptimiert für Test-, Integrations- und Validierungsumgebungen. Geeignet für nicht kritische Workloads mit variabler Auslastung. | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads (Webanwendungen, Microservices, Datenbanken mittlerer Größe). | Geteilt |
| **Performance** | Entwickelt für rechenintensive Workloads, die hohe CPU-Leistung erfordern. **Die vCPUs sind dediziert**, um konstante Leistung zu gewährleisten. | Dedizierte vCPUs |

## Instanztypen (Flavors)

Für jede Serviceklasse werden vordefinierte Instanztypen angeboten. Es ist ebenfalls möglich, **benutzerdefinierte Instanztypen** zu erstellen, indem Sie frei die Anzahl der vCPU und die RAM-Menge festlegen.

### Entwicklung

Optimiert für Test-, Integrations- und Staging-Umgebungen mit kontrollierten Kosten.

| Flavor | vCPU | RAM | Einsatzgebiet |
|--------|------|-----|------------|
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

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------------|
| perf.medium | 2 | 4 GB | Leichte Berechnungen, CI/CD |
| perf.large | 4 | 8 GB | Batchverarbeitung, Encoding |
| perf.xlarge | 8 | 16 GB | Rechenintensive Aufgaben |
| perf.2xlarge | 16 | 32 GB | Simulation, Analytics |

### Benutzerdefinierte Vorlagen

Es ist möglich, eine benutzerdefinierte Vorlage zu erstellen, indem Sie frei auswählen:

- Die Anzahl der vCPU
- Die RAM-Menge

Diese Flexibilität ermöglicht es, die Dimensionierung präzise an die Anwendungsanforderungen anzupassen und gleichzeitig die Kosten zu optimieren.

:::note
Die Spezifikationen der Vorlagen können sich ändern. Rufen Sie die Cloud Temple-Konsole auf, um die aktuelle Liste einzusehen.
:::

## Speicher

Alle Volumes des Diensts für VM-Instanzen sind **persistente, netzwerkgebundene Flash-Volumes** (*network-attached*). Es gibt keinen ephemeren lokalen Speicher: Ihre Daten werden unabhängig vom Status der virtuellen Maschine gespeichert.

### Systemdisk

Jede virtuelle Maschine verfügt über eine **standardmäßig enthaltene Flash-Systemdisk**, deren Größe vom gewählten Betriebssystem abhängt:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem Betriebssystem.

### Zusätzliche Volumes

Es ist möglich, jedem virtuellen Computer zusätzliche Speichervolumes hinzuzufügen:

- **Maximale Größe** : 2 TB pro Volume
- **Maximale Anzahl** : 16 Volumes pro VM
- **Granularität** : Zuweisung in GB-Schritten
- **Abrechnung** : nach zugewiesenen GB, mit Auswahl der Speicherklassse

## Netzwerk

### Netzwerkschnittstelle

Jede VM-Instanz verfügt über **eine eindeutige Netzwerkschnittstelle**.

### Netzwerkkompatibilität

Diese Schnittstelle kann mit zwei Arten von Cloud Temple-Netzwerken verbunden werden:

- **Privates Backbone-Netzwerk** : gemeinsam genutztes privates Netzwerk mit strikter logischer Isolierung zwischen den Tenants. Ideal, um Ihre Cloud Temple-Ressourcen in einer kontrollierten Umgebung zu vernetzen. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : vollständig verwaltetes privates Netzwerk, das eine erweiterte Segmentierung und eine feingranulare Netzwerkkonfiguration Ihrer Umgebungen ermöglicht. [En savoir plus](../../network/vpc/vpc.md)

### Floating IP (Floating IP)

In einem **VPC**-Netzwerk kann einer VM-Instanz eine **Floating IP** zugeordnet werden. Eine Floating IP ist eine öffentliche IP-Adresse, die Sie unabhängig vom Lebenszyklus einer Instanz flexibel zuweisen oder entfernen können.

## Bereitstellung und Images

Die VM-Instanzen werden aus den **offiziellen Images der Cloud Temple Marketplace** bereitgestellt. Dieser Katalog ausgewählter Images gewährleistet getestete, gepflegte und sofort einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** zur automatischen Vorabkonfiguration der Instanzen beim Start (SSH-Schlüsselinjektion, Netzwerkkonfiguration, Initialisierungsskripte usw.).

## Datenschutz

### Backup (optional)

Eine Backup-Option mit konfigurierbarer Aufbewahrungsdauer ist verfügbar. Diese Option wird **separat berechnet**.

:::info
Die VM-Replikation ist standardmäßig nicht enthalten. Eine Evaluierung ist für das zweite Halbjahr 2026 geplant.
:::

## SLA und Verfügbarkeit

| Verpflichtung | Wert |
|------------|--------|
| Verfügbarkeit der Infrastruktur | 99,95% (monatlich gemessen) |
| Ressourcengarantie | Je nach gewählter Serviceklasse |

## Automatisierung

Der Dienst ist vollständig steuerbar über :

- **Cloud Temple-Konsole** : grafische Oberfläche für die tägliche Administration
- **Cloud Temple REST-API** : programmatische Steuerung des Lebenszyklus von VMs
- **Cloud Temple Terraform-Provider** : Infrastructure as Code