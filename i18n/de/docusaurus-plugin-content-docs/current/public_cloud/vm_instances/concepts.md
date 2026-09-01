---
title: Konzepte
---

Der Dienst **VM Instances** von Cloud Temple ist ein Produkt für virtualisierte Rechenleistung, das das Bereitstellen virtueller Maschinen nach Bedarf ermöglicht, ohne Verwaltung der zugrunde liegenden Infrastruktur. Diese Seite stellt die grundlegenden Konzepte des Dienstes vor.

## Regionen und Verfügbarkeitszonen

Der Dienst VM-Instanzen ist in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet werden soll.

Weitere Informationen zu Verfügbarkeitszonen und Regionen von Cloud Temple finden Sie unter:

- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
- [Konzepte der Regionen](../../additional_content/concepts_regional.md)

## Serviceklassen

Der Dienst bietet drei Serviceklassen an, die an verschiedene Arten von Workloads angepasst sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Entwicklung** | Kostenoptimiert, für Test-, Integrations- und Staging-Umgebungen. Geeignet für nicht kritische Workloads mit variabler Auslastung. | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads (Webanwendungen, Microservices, Datenbanken mittlerer Größe). | Geteilt |
| **Performance** | Entwickelt für rechenintensive Workloads, die hohe CPU-Leistung erfordern. **Die vCPUs sind dediziert**, um konstante Leistung zu gewährleisten. | Dedizierte vCPUs |

## Instanztypen (Flavors)

Für jede Serviceklasse werden vordefinierte Instanztypen angeboten. Es ist ebenfalls möglich, **benutzerdefinierte Flavors** zu erstellen, indem Sie die Anzahl der vCPU und die RAM-Menge frei festlegen.

### Entwicklung

Optimiert für Test-, Integrations- und Abnahmeumgebungen mit kontrollierten Kosten.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------------|
| dev.small | 1 | 2 GB | Unitests, leichte CI |
| dev.medium | 2 | 4 GB | Integration, interne Tools |
| dev.large | 4 | 8 GB | Abnahmeumgebung |

### Allzweck

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

Diese Flexibilität ermöglicht es, die Dimensionierung genau an die Anwendungsanforderungen anzupassen und gleichzeitig die Kosten zu optimieren.

:::note
Die Spezifikationen der Vorlagen können sich ändern. Rufen Sie die Cloud Temple-Konsole auf, um die aktuelle Liste einzusehen.
:::

## Speicher

Alle Volumes des Diensts VM-Instanzen sind **persistente, netzwerkgebundene Flash-Volumes** (*network-attached*). Es gibt keinen ephemeren lokalen Speicher: Ihre Daten bleiben unabhängig vom Status der virtuellen Maschine erhalten.

### Systemdisk

Jede virtuelle Maschine verfügt über eine **standardmäßig enthaltene Flash-Systemdisk**, deren Größe vom gewählten Betriebssystem abhängt:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem Betriebssystem.

### Zusätzliche Volumes

Es ist möglich, jeder virtuellen Maschine zusätzliche Speichervolumes hinzuzufügen:

- **Maximale Größe** : 2 TB pro Volume
- **Maximale Anzahl** : 16 Volumes pro VM
- **Granularität** : Zuweisung in GB
- **Abrechnung** : pro zugewiesenem GB, mit Wahl der Speicherkategorie

## Netzwerk

### Netzwerkschnittstelle

Jede VM-Instanz kann über **1 bis 7 Netzwerkkarten** verfügen. Jede Netzwerkkarte ist **einem einzigen Netzwerk** zugeordnet.

### Netzwerkkompatibilität

Diese Schnittstelle kann mit zwei Arten von Cloud Temple-Netzwerken verbunden werden:

- **Privates Backbone-Netzwerk** : gemeinsam genutztes privates Netzwerk mit strikter logischer Isolierung zwischen den Tenants. Ideal zum Vernetzen Ihrer Cloud Temple-Ressourcen in einer kontrollierten Umgebung. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : vollständig verwaltetes privates Netzwerk, das eine erweiterte Segmentierung und eine feingranulare Netzwerkkonfiguration Ihrer Umgebungen ermöglicht. [En savoir plus](../../network/vpc/vpc.md)

### Fließende IP-Adresse (Floating IP)

In einem **VPC**-Netzwerk ist es möglich, einer **VM-Instanz** eine **Floating IP** zuzuordnen. Eine Floating IP ist eine öffentliche IP-Adresse, die Sie unabhängig von ihrem Lebenszyklus frei einer Instanz zuweisen oder entfernen können.

## Bereitstellung und Images

Die VM-Instanzen werden aus den **offiziellen Images der Marketplace Cloud Temple** bereitgestellt. Die verfügbaren Vorlagen stammen aus der [Marketplace filtrée pour OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Dieser Katalog ausgewählter Images gewährleistet getestete, gepflegte und einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** zur automatischen Vorabkonfiguration der Instanzen beim Start (injection de clés SSH, configuration réseau, scripts d'initialisation, etc.).

## Datenschutz

### Sicherung (optional)

Zwei Sicherungsrichtlinien stehen zur Verfügung: **`No Backup`** und **`Backup 30 snapshots`**. Bei `Backup 30 snapshots` wird jeden Abend automatisch zwischen **20 und 22 Uhr** ein Snapshot erstellt. Wenn der Kunde tagsüber ein zusätzliches Backup auslöst, werden am selben Tag zwei Snapshots erstellt: Die aktive Retention deckt dann **29 Tage** anstelle von 30 ab. Diese Option wird **zusätzlich berechnet**.

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
- **API REST Cloud Temple** : programmatische Steuerung des Lebenszyklus der VMs
- **Provider Terraform Cloud Temple** : Infrastruktur als Code