---
title: Konzepte
---

Der Service **VM Instances** von Cloud Temple ist ein Produkt für geteilte Compute-Ressourcen mit der Zertifizierung **SecNumCloud**, das es ermöglicht, virtuelle Maschinen auf Abruf bereitzustellen, ohne dass die zugrunde liegende Infrastruktur verwaltet werden muss. Diese Seite stellt die grundlegenden Konzepte des Dienstes vor.

## Regionen und Verfügbarkeitszonen

Der Dienst VM Instances ist in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet wird.

Weitere Informationen zu Verfügbarkeitszonen und Cloud Temple-Regionen finden Sie unter:

- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)
- [Concepts des régions](../../additional_content/concepts_regional.md)

## Serviceklassen

Der Service bietet drei Serviceklassen, die an verschiedene Arten von Workloads angepasst sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Development** | Kostenoptimiert, für Test-, Integrations- und Abnahmetestumgebungen. Geeignet für nicht kritische Workloads mit variabler Auslastung. | Gemeinsam genutzte |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads (Webanwendungen, Microservices, Datenbanken mittlerer Größe). | Gemeinsam genutzte |
| **Performance** | Entwickelt für rechenintensive Workloads, die hohe CPU-Leistungen erfordern. **Die vCPUs sind dediziert**, um konstante Leistungen zu gewährleisten. | Dedizierte vCPUs |

## Vorlagen (Flavors)

Für jede Serviceklasse werden vordefinierte Vorlagen angeboten. Es ist auch möglich, **eigene Vorlagen** zu erstellen, indem man die Anzahl der vCPU und die Menge an RAM frei wählt.

### Entwicklung

Optimiert für Test-, Integrations- und Abnahmetestumgebungen mit kontrollierten Kosten.

| Flavor | vCPU | RAM | Nutzungstyp |
|--------|------|-----|------------|
| dev.small | 1 | 2 Go | Unitätests, leichte CI |
| dev.medium | 2 | 4 Go | Integration, interne Tools |
| dev.large | 4 | 8 Go | Abnahmetestumgebung |

### General Purpose

Geeignet für Webanwendungen, Micro-Services und Datenbanken mittlerer Größe.

| Flavor | vCPU | RAM | Usage type |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Micro-Service, Funktionstest |
| gp.medium | 2 | 8 GB | Webserver, leichte Anwendung |
| gp.large | 4 | 16 GB | Standardanwendung |
| gp.xlarge | 8 | 32 GB | Mittlere Datenbank |
| gp.2xlarge | 16 | 64 GB | Kritische Anwendung |

### Leistung

Die **vCPU sind dediziert**, um konstante Leistung auch unter hoher Last zu gewährleisten.

| Flavor | vCPU | RAM | Nutzungsart |
|--------|------|-----|-------------|
| perf.medium | 2 | 4 GB | Leichte Berechnungen, CI/CD |
| perf.large | 4 | 8 GB | Batch-Verarbeitung, Encoding |
| perf.xlarge | 8 | 16 GB | Intensive Berechnungen |
| perf.2xlarge | 16 | 32 GB | Simulation, Analytics |

### Custom-Vorlagen

Es ist möglich, eine benutzerdefinierte Vorlage zu erstellen, indem frei ausgewählt wird:

- Die Anzahl der vCPU
- Die Menge an RAM

Diese Flexibilität ermöglicht es, die Dimensionierung präzise an die Anwendungserfordernisse anzupassen und gleichzeitig die Kosten zu optimieren.

:::note
Die Spezifikationen der Vorlagen können sich ändern. Bitte konsultieren Sie die Cloud Temple-Konsole für die aktuelle Liste.
:::

## Speicher

Alle Volumes des Dienstes VM Instances sind **persistenten Flash-Volumes, die über das Netzwerk angebunden sind** (*network-attached*). Es gibt keinen lokalen ephemeren Speicher: Ihre Daten werden unabhängig vom Zustand der virtuellen Maschine aufbewahrt.

### Systemdisk

Jede virtuelle Maschine verfügt automatisch über eine **Flash-Systemdisk** zum Beherbergen des Betriebssystems. Diese Festplatte ist eine Speicherressource des Dienstes und ist nicht kostenlos; ihre Größe hängt vom gewählten Betriebssystem ab:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem Betriebssystem.

Die Systemdisk wird pro **GB** gemäß dem Preisverzeichnis VM Instances abgerechnet. Ihre automatische Erstellung mit der VM bedeutet, dass sie für die Bereitstellung des Betriebssystems erforderlich ist, und nicht, dass sie kostenlos enthalten ist.

### Zusätzliche Volumes

Es ist möglich, zusätzliche Speicher-Volumes zu jeder virtuellen Maschine hinzuzufügen:

- **Größe** : von **1 bis 2.048 GB** pro Volume
- **Maximale Anzahl** : 16 Volumes pro VM
- **Obergrenze pro Familie** : **2 TB pro VM** in Development und General Purpose ; **16 TB pro VM** in Enterprise
- **Granularität** : Zuweisung in GB-Schritten
- **Abrechnung** : nach zugewiesenem GB, mit Wahl der Speicherklasse

### Speicherklassen

Zwei Blockspeicher-Klassen sind für zusätzliche Volumes verfügbar :

| Klasse | Verwendung | Leistung | Mindestgröße | Maximale Größe |
| --- | --- | --- | --- | --- |
| **Enterprise** | Hochleistungs-Blockspeicher für latenzsensitive Workloads. | **7 500 IOPS/To** | **1 Go** | **2 048 Go** |
| **Standard** | Standard-Blockspeicher, der für die meisten Workloads geeignet ist. | **1 500 IOPS/To** | **1 Go** | **2 048 Go** |

## Netzwerk

### Netzwerkschnittstelle

Jede VM-Instanz kann über **1 bis 7 Netzwerkkarten** verfügen. Jede Netzwerkkarte ist mit **einem einzigen Netzwerk** assoziiert.

### Netzwerkkompatibilität

Diese Schnittstelle kann mit zwei Arten von Cloud Temple-Netzwerken verbunden werden:

- **Privates Backbone-Netzwerk** : gemeinsam genutztes privates Netzwerk mit strikter logischer Isolation zwischen den Tenants. Ideal, um Ihre Cloud Temple-Ressourcen in einer kontrollierten Umgebung zu interconnecten. [Mehr erfahren](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : vollständig verwaltetes privates Netzwerk, das eine erweiterte Segmentierung und eine detaillierte Netzwerkkonfiguration Ihrer Umgebungen ermöglicht. [Mehr erfahren](../../network/vpc/vpc.md)

### Schwimmende IP (Floating IP)

In einem **VPC**-Netzwerk ist es möglich, einer VM-Instanz eine **schwimmende IP** zuzuweisen. Eine schwimmende IP ist eine öffentliche IP-Adresse, die Sie unabhängig vom Lebenszyklus einer Instanz frei an eine Instanz anbinden oder von ihr trennen können.

### Virtuelle Appliances

Die virtuellen Appliances **Stormshield** und **FortiVM** sind mit der **Enterprise-Familie** kompatibel, vorbehaltlich der Einhaltung der technischen Voraussetzungen und des anwendbaren Supportumfangs.

## Deployment und Images

Die VM-Instanzen werden aus den **offiziellen Images der Cloud Temple Marketplace** bereitgestellt. Die verfügbaren Templates sind diejenigen der [für OpenIaaS gefilterten Marketplace](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Dieser Katalog ausgewählter Images gewährleistet getestete, gewartete und einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** für die automatische Vorkonfiguration der Instanzen beim Start (Injektion von SSH-Schlüsseln, Netzwerkkonfiguration, Initialisierungsskripte usw.).

### Migration eines OS außerhalb der Marketplace

Ein Betriebssystem, das in der Marketplace nicht verfügbar ist, kann unter Vorbehalt einer technischen Validierung per **Veeam im Bare Metal Recovery-Modus** migriert werden. Cloud Temple gewährleistet in diesem Fall die Funktionsfähigkeit der VM-Infrastruktur, garantiert jedoch nicht die ordnungsgemäße Funktion des Gast-Betriebssystems, seiner Anwendungen oder der erforderlichen Agenten, wenn diese nicht korrekt installiert oder konfiguriert sind. Der Support für das Gast-Betriebssystem ist in diesem Fall eingeschränkt.

Eine zweite Methode ist mit dem Import von **VHD/VMDK**-Disks vorgesehen, um eine VM aus einem vorhandenen Image zu erstellen. Diese Funktion befindet sich in Entwicklung und ist für das **vierte Quartal 2026** geplant; sie ist im aktuellen Service nicht verfügbar.

## Datenschutz

### Backup (optional)

Zwei Backup-Richtlinien sind verfügbar: **`No Backup`** und **`Backup 30 snapshots`**. Mit `Backup 30 snapshots` wird automatisch jeden Abend zwischen **20 und 22 Uhr** ein Snapshot erstellt. Wenn der Kunde ein zusätzliches Backup am Tag auslöst, werden am selben Tag zwei Snapshots erstellt: Die aktive Aufbewahrungsdauer umfasst dann **29 Tage** statt 30. Diese Option wird **zusätzlich berechnet**.

:::info
Die VM-Replikation ist standardmäßig nicht enthalten. Die Ausarbeitung ist für das zweite Halbjahr 2026 geplant.
:::

## SLA und Verfügbarkeit

| Verpflichtung | Wert |
|------------|--------|
| Verfügbarkeit der Infrastruktur | 99,95% (monatlich gemessen) |
| Ressourcen-Garantie | Je nach gewählter Serviceklasse |

## Automatisierung

Der Service ist vollständig steuerbar über :

- **Console Cloud Temple** : Grafische Oberfläche für die tägliche Verwaltung
- **API REST Cloud Temple** : Programmatische Steuerung des Lebenszyklus der VMs
- **Provider Terraform Cloud Temple** : Infrastructure as Code