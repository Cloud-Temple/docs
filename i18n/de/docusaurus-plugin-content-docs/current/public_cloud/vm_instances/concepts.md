---
title: Konzepte
---

Der **VM Instances**-Dienst von Cloud Temple ist ein qualifiziertes **SecNumCloud**-Produkt für geteilte Compute-Ressourcen, das es ermöglicht, virtuelle Maschinen bedarfsgerecht bereitzustellen, ohne die zugrunde liegende Infrastruktur verwalten zu müssen. Diese Seite stellt die grundlegenden Konzepte des Dienstes vor.

## Regionen und Verfügbarkeitszonen

Der VM Instances-Dienst ist in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet wird.

Weitere Informationen zu Verfügbarkeitszonen und Cloud Temple-Regionen finden Sie unter:

- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
- [Konzepte der Regionen](../../additional_content/concepts_regional.md)

## Service-Klassen

Der Dienst bietet drei Service-Klassen, die auf verschiedene Arten von Arbeitslasten zugeschnitten sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Development** | Kostenoptimiert, für Test-, Integrations- und Abnahmeumgebungen. Geeignet für nicht-kritische Arbeitslasten mit variabler Nutzung. | Geteilt |
| **General Purpose** | Optimales Gleichgewicht zwischen vCPU und RAM für Standardarbeitslasten (Webanwendungen, Microservices, mittelgroße Datenbanken). | Geteilt |
| **Performance** | Entwickelt für ressourcenintensive Arbeitslasten, die hohe CPU-Leistung erfordern. **Die vCPUs sind dediziert**, um konstante Leistung zu gewährleisten. | Dedizierte vCPUs |

## Flavors (Gabarits)

Für jede Service-Klasse werden vordefinierte Flavors angeboten. Es ist auch möglich, **benutzerdefinierte Flavors** zu erstellen, indem die Anzahl der vCPUs und die RAM-Menge frei gewählt werden.

### Development

Optimiert für Test-, Integrations- und Abnahmeumgebungen mit kontrollierten Kosten.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Unit-Tests, leichtes CI |
| dev.medium | 2 | 4 GB | Integration, interne Tools |
| dev.large | 4 | 8 GB | Abnahmeumgebung |

### General Purpose

Geeignet für Webanwendungen, Microservices und mittelgroße Datenbanken.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservice, Funktionstests |
| gp.medium | 2 | 8 GB | Webserver, leichte Anwendung |
| gp.large | 4 | 16 GB | Standardanwendung |
| gp.xlarge | 8 | 32 GB | Mittlere Datenbank |
| gp.2xlarge | 16 | 64 GB | Kritische Anwendung |

### Performance

Die **vCPUs sind dediziert**, um konstante Leistung auch unter hoher Last zu gewährleisten.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Leichte Berechnungen, CI/CD |
| perf.large | 4 | 8 GB | Batch-Verarbeitung, Codierung |
| perf.xlarge | 8 | 16 GB | Intensive Berechnungen |
| perf.2xlarge | 16 | 32 GB | Simulation, Analytics |

### Benutzerdefinierte Flavors

Es ist möglich, einen benutzerdefinierten Flavor zu erstellen, indem frei ausgewählt wird:

- Die Anzahl der vCPUs
- Die Menge des RAMs

Diese Flexibilität ermöglicht eine präzise Anpassung der Dimensionierung an die Anwendungsanforderungen bei gleichzeitiger Optimierung der Kosten.

:::note
Die Spezifikationen der Flavors können sich ändern. Konsultieren Sie die Cloud Temple-Konsole für die aktuelle Liste.
:::

## Speicher

Alle Volumes des VM Instances-Dienstes sind **persistente Flash-Volumes, die über das Netzwerk angebunden sind** (*network-attached*). Es gibt keinen lokalen flüchtigen Speicher: Ihre Daten bleiben unabhängig vom Status der virtuellen Maschine erhalten.

### Systemlaufwerk

Jede virtuelle Maschine verfügt automatisch über ein **Flash-Systemlaufwerk** zur Hosting des Betriebssystems. Dieses Laufwerk ist eine Speicherressource des Dienstes und nicht kostenlos; seine Größe hängt vom gewählten Betriebssystem ab:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem Betriebssystem.

Das Systemlaufwerk wird nach **GB** gemäß dem [offiziellen Cloud Temple-Preisverzeichnis](https://www.cloud-temple.com/nos-tarifs-publics/) berechnet. Die automatische Erstellung zusammen mit der VM bedeutet, dass es für die Bereitstellung des Betriebssystems erforderlich ist, nicht jedoch, dass es kostenlos enthalten ist.

### Zusätzliche Volumes

Es ist möglich, jeder virtuellen Maschine zusätzliche Speicher-Volumes hinzuzufügen:

- **Größe**: von **1 bis 2 048 GB** pro Volume
- **Maximale Anzahl**: 16 Volumes pro VM
- **Limit pro Familie**: **2 TB pro VM** in Development und General Purpose; **16 TB pro VM** in Enterprise
- **Granularität**: Zuweisung in GB-Schritten
- **Abrechnung**: nach zugewiesenem GB, mit Wahl der Speicherklassse

### Speicherklassen

Für zusätzliche Volumes stehen zwei Blockspeicherklassen zur Verfügung:

| Klasse | Verwendung | Leistung | Minimale Größe | Maximale Größe |
| --- | --- | --- | --- | --- |
| **Enterprise** | Hochleistungs-Blockspeicher für latenzsensitive Arbeitslasten. | **7 500 IOPS/TB** | **1 GB** | **2 048 GB** |
| **Standard** | Standard-Blockspeicher, geeignet für die meisten Arbeitslasten. | **1 500 IOPS/TB** | **1 GB** | **2 048 GB** |

## Netzwerk

### Netzwerkschnittstelle

Jede VM-Instanz kann über **1 bis 7 Netzwerkkarten** verfügen. Jede Netzwerkkarte ist mit **einem einzigen Netzwerk** verbunden.

### Netzwerkkompatibilität

Diese Schnittstelle kann an zwei Arten von Cloud Temple-Netzwerken angeschlossen werden:

- **Backbone-Privatnetzwerk**: Ein geteiltes Privatnetzwerk mit strikter logischer Isolation zwischen Mandanten. Ideal zur Interkonnektivität Ihrer Cloud Temple-Ressourcen in einer kontrollierten Umgebung. [Mehr erfahren](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: Ein vollständig verwaltetes Privatnetzwerk, das eine erweiterte Segmentierung und eine feine Netzwerkkonfiguration Ihrer Umgebungen ermöglicht. [Mehr erfahren](../../network/vpc/vpc.md)

### Floating IP

In einem **VPC**-Netzwerk kann einer VM-Instanz eine **Floating IP** zugeordnet werden. Eine Floating IP ist eine öffentliche IP-Adresse, die Sie frei an eine Instanz anhängen oder von ihr trennen können, unabhängig von deren Lebenszyklus.

### Virtuelle Appliances

Die virtuellen Appliances **Stormshield** und **FortiVM** sind mit der **Enterprise-Familie** kompatibel, vorbehaltlich der Einhaltung der technischen Voraussetzungen und des geltenden Supportumfangs.

## Bereitstellung und Images

VM Instances werden aus den **offiziellen Images des Cloud Temple Marketplaces** bereitgestellt. Die verfügbaren Templates stammen aus dem [für OpenIaaS gefilterten Marketplace](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Dieser Katalog ausgewählter Images garantiert getestete, gewartete und einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** für die automatische Vorkonfiguration von Instanzen beim Start (Einschleusen von SSH-Schlüsseln, Netzwerkkonfiguration, Initialisierungsskripte usw.).

### Migration eines Betriebssystems außerhalb des Marketplaces

Ein Betriebssystem, das nicht im Marketplace verfügbar ist, kann unter Voraussetzung einer technischen Validierung durch eine **Veeam-Bare-Metal-Recovery-Restaurierung** migriert werden. Cloud Temple garantiert dann die Funktionsfähigkeit der VM-Infrastruktur, garantiert jedoch nicht die einwandfreie Funktion des Gast-Betriebssystems, seiner Anwendungen oder der erforderlichen Agenten, wenn diese nicht korrekt installiert oder konfiguriert sind. Der Support für das Gast-Betriebssystem ist dann eingeschränkt.

Eine zweite Methode ist für den Import von **VHD/VMDK-Datenträgern** vorgesehen, um eine VM aus einem vorhandenen Image zu erstellen. Diese Funktion befindet sich in der Entwicklung und ist für das **vierte Quartal 2026** geplant; sie ist im aktuellen Dienst nicht verfügbar.

## Datenschutz

### Sicherung (optional)

Zwei Sicherungsrichtlinien sind verfügbar: **`No Backup`** und **`Backup 30 snapshots`**. Bei `Backup 30 snapshots` wird jeden Abend zwischen **20:00 und 22:00 Uhr** automatisch ein Snapshot erstellt. Wenn der Kunde tagsüber eine zusätzliche Sicherung auslöst, werden an diesem Tag zwei Snapshots erstellt: Die aktive Aufbewahrungsfrist beträgt dann **29 Tage** statt 30. Diese Option wird **zusätzlich berechnet**.

:::info
Die Replikation von VMs ist standardmäßig nicht enthalten. Ihre Untersuchung ist für das zweite Halbjahr 2026 geplant.
:::

## SLA und Verfügbarkeit

| Verpflichtung | Wert |
|------------|--------|
| Verfügbarkeit der Infrastruktur | 99,95 % (monatlich gemessen) |
| Ressourcen-Garantie | Je nach gewählter Service-Klasse |

## Automatisierung

Der Dienst ist vollständig steuerbar über:

- **Cloud Temple-Konsole**: grafische Benutzeroberfläche für das tägliche Management
- **Cloud Temple REST API**: programmgesteuerte Steuerung des VM-Lebenszyklus
- **Cloud Temple Terraform Provider**: Infrastructure as Code
