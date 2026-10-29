---
title: Konzepte
---

## Einführung

Der Dienst **VM Instances** ist ein geteiltes Compute-Produkt, mit dem Sie virtuelle Maschinen bedarfsgerecht bereitstellen können, ohne die zugrunde liegende Infrastruktur verwalten zu müssen. Er bietet mehrere Service-Klassen – von der kostengünstigen Entwicklung bis zur kritischen Produktion – und ist nativ in die Cloud Temple-Netzwerke integriert. Sie können mit einer einzigen VM beginnen und Ihre Nutzung ohne Mindestmenge weiterentwickeln.

### Zielgruppen und Anwendungsfälle

- **Entwicklungsteams**: Test- und Abnahmeumgebungen mit kontrollierten Kosten.
- **Web- und Anwendungsproduktion**: Hosting von Geschäftsanwendungen und Websites.
- **Datenintensive Anwendungen**: Datenbanken, Datenverarbeitung.
- **Unternehmen und öffentlicher Sektor**: Hosting von Daten in einer souveränen Umgebung.

## Vorteile

| Vorteil                | Beschreibung                                                                                        |
|------------------------|-----------------------------------------------------------------------------------------------------|
| Flexibilität und Auswahl | Mehrere Service-Klassen und Flavors, um die Kosten an jede Nutzung anzupassen.                    |
| Einfache Verwaltung    | Die Infrastruktur wird vollständig verwaltet; die VMs werden in wenigen Minuten aus dem Marketplace bereitgestellt. |
| Souveränität           | Daten in Frankreich gehostet, auf einem SecNumCloud-qualifizierten Dienst.                          |
| Vollständige Integration | Kompatibel mit VPC und Private Backbone, steuerbar per API und Terraform.                         |
| Skalierbarkeit         | Keine Mindestmenge: Sie beginnen mit einer einzigen VM.                                             |

## Funktionen

| Funktion                   | Beschreibung                                                                                      |
|----------------------------|---------------------------------------------------------------------------------------------------|
| Service-Klassen            | Development, General Purpose und Performance (dedizierte vCPUs).                                  |
| Vordefinierte und benutzerdefinierte Flavors | Sofort einsatzbereite Flavors oder frei gewählte Anzahl von vCPUs und RAM-Menge. |
| Bereitstellung aus dem Marketplace | Erstellung von VMs aus den offiziellen Images des Cloud Temple Marketplaces.              |
| Cloud-init                 | Automatische Vorkonfiguration der Instanzen beim Start.                                           |
| Wahl der Zone              | Auswahl der Verfügbarkeitszone bei der Bereitstellung.                                            |
| Snapshots                  | Erstellung und Verwaltung von Snapshots über die Konsole.                                         |
| Persistenter Speicher      | Flash-Systemlaufwerk und zusätzliche Flash-Volumes, in der Klasse Standard oder Enterprise.       |
| Netzwerk                   | Bis zu 7 Netzwerkkarten, VPC mit Floating IP, Private Backbone.                                   |
| Sicherung (optional)       | Richtlinie `Backup 30 snapshots` mit einem täglichen Snapshot.                                    |

### Bereitstellung und Images

VM Instances werden aus den **offiziellen Images des Cloud Temple Marketplaces** bereitgestellt. Die verfügbaren Templates stammen aus dem [für OpenIaaS gefilterten Marketplace](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Dieser Katalog ausgewählter Images garantiert getestete, gewartete und einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** für die automatische Vorkonfiguration von Instanzen beim Start (Einschleusen von SSH-Schlüsseln, Netzwerkkonfiguration, Initialisierungsskripte usw.).

### Migration eines Betriebssystems außerhalb des Marketplaces

Ein Betriebssystem, das nicht im Marketplace verfügbar ist, kann vorbehaltlich einer technischen Validierung durch eine **Veeam-Wiederherstellung im Bare-Metal-Recovery-Modus** migriert werden. Die Funktionsfähigkeit der VM-Infrastruktur ist dann garantiert, nicht jedoch die des Gast-Betriebssystems, seiner Anwendungen oder der erforderlichen Agenten, wenn diese nicht korrekt installiert oder konfiguriert sind. Der Support für das Gast-Betriebssystem ist dann eingeschränkt.

### Automatisierung

Der Dienst ist vollständig steuerbar über:

- **Cloud Temple-Konsole**: grafische Benutzeroberfläche für das tägliche Management und die Visualisierung der Metriken (CPU, RAM, Festplatte);
- **Cloud Temple REST API**: programmgesteuerte Steuerung des VM-Lebenszyklus;
- **Cloud Temple Terraform Provider**: Infrastructure as Code.

## Architektur

VM Instances laufen auf einer geteilten Infrastruktur mit strikter logischer Isolation zwischen den Kunden. Alle Volumes sind **persistente Flash-Volumes, die über das Netzwerk angebunden sind** (*network-attached*): Es gibt keinen lokalen flüchtigen Speicher, und Ihre Daten bleiben unabhängig vom Status der virtuellen Maschine erhalten.

Jede VM wird über ihre Netzwerkkarten mit dem **VPC** oder dem **Private Backbone** verbunden und kann aus dem Marketplace in der Verfügbarkeitszone Ihrer Wahl bereitgestellt werden.

## Regionen und Verfügbarkeitszonen

Der VM Instances-Dienst ist in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet wird. Diese Wahl erfordert keine Aktivierung von Verfügbarkeitszonen im IaaS-Angebot.

Weitere Informationen zu Verfügbarkeitszonen und Cloud Temple-Regionen finden Sie unter:

- [Konzepte der Verfügbarkeitszonen](../../additional_content/concepts_az.md)
- [Konzepte der Regionen](../../additional_content/concepts_regional.md)

## Technische Spezifikationen

### Service-Klassen

Der Dienst bietet drei Service-Klassen, die auf verschiedene Arten von Arbeitslasten zugeschnitten sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Development** | Kostenoptimiert, für Test-, Integrations- und Abnahmeumgebungen. Geeignet für nicht-kritische Arbeitslasten mit variabler Nutzung. | Geteilt |
| **General Purpose** | Optimales Gleichgewicht zwischen vCPU und RAM für Standardarbeitslasten (Webanwendungen, Microservices, mittelgroße Datenbanken). | Geteilt |
| **Performance** | Entwickelt für ressourcenintensive Arbeitslasten, die hohe CPU-Leistung erfordern. **Die vCPUs sind dediziert**, um konstante Leistung zu gewährleisten. | Dedizierte vCPUs |

### Flavors (Gabarits)

Für jede Service-Klasse werden vordefinierte Flavors angeboten. Es ist auch möglich, **benutzerdefinierte Flavors** zu erstellen, indem die Anzahl der vCPUs und die RAM-Menge frei gewählt werden.

#### Development

Optimiert für Test-, Integrations- und Abnahmeumgebungen mit kontrollierten Kosten.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Unit-Tests, leichtes CI |
| dev.medium | 2 | 4 GB | Integration, interne Tools |
| dev.large | 4 | 8 GB | Abnahmeumgebung |

#### General Purpose

Geeignet für Webanwendungen, Microservices und mittelgroße Datenbanken.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservice, Funktionstests |
| gp.medium | 2 | 8 GB | Webserver, leichte Anwendung |
| gp.large | 4 | 16 GB | Standardanwendung |
| gp.xlarge | 8 | 32 GB | Mittlere Datenbank |
| gp.2xlarge | 16 | 64 GB | Kritische Anwendung |

#### Performance

Die **vCPUs sind dediziert**, um konstante Leistung auch unter hoher Last zu gewährleisten.

| Flavor | vCPU | RAM | Verwendungszweck |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Leichte Berechnungen, CI/CD |
| perf.large | 4 | 8 GB | Batch-Verarbeitung, Codierung |
| perf.xlarge | 8 | 16 GB | Intensive Berechnungen |
| perf.2xlarge | 16 | 32 GB | Simulation, Analytics |

#### Benutzerdefinierte Flavors

Es ist möglich, einen benutzerdefinierten Flavor zu erstellen, indem frei ausgewählt wird:

- Die Anzahl der vCPUs
- Die Menge des RAMs

Diese Flexibilität ermöglicht eine präzise Anpassung der Dimensionierung an die Anwendungsanforderungen bei gleichzeitiger Optimierung der Kosten.

:::note
Die Spezifikationen der Flavors können sich ändern. Konsultieren Sie die Cloud Temple-Konsole für die aktuelle Liste.
:::

### Speicher

Alle Volumes des VM Instances-Dienstes sind **persistente Flash-Volumes, die über das Netzwerk angebunden sind** (*network-attached*). Es gibt keinen lokalen flüchtigen Speicher: Ihre Daten bleiben unabhängig vom Status der virtuellen Maschine erhalten.

#### Systemlaufwerk

Jede virtuelle Maschine verfügt automatisch über ein **Flash-Systemlaufwerk** zum Hosten des Betriebssystems. Dieses Laufwerk ist eine Speicherressource des Dienstes und nicht kostenlos; seine Größe hängt vom gewählten Betriebssystem ab:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem Betriebssystem.

Das Systemlaufwerk wird pro **GB** abgerechnet. Die automatische Erstellung zusammen mit der VM bedeutet, dass es für die Bereitstellung des Betriebssystems erforderlich ist, nicht jedoch, dass es kostenlos enthalten ist.

#### Zusätzliche Volumes

Es ist möglich, jeder virtuellen Maschine zusätzliche Speicher-Volumes hinzuzufügen:

- **Größe**: von **1 bis 2 048 GB** pro Volume
- **Maximale Anzahl**: 16 Volumes pro VM
- **Limit pro Familie**: **2 TB pro VM** in Development und General Purpose; **16 TB pro VM** in Enterprise
- **Granularität**: Zuweisung in GB-Schritten
- **Abrechnung**: nach zugewiesenem GB, mit Wahl der Speicherklasse

#### Speicherklassen

Für zusätzliche Volumes stehen zwei Blockspeicherklassen zur Verfügung:

| Klasse | Verwendung | Leistung | Minimale Größe | Maximale Größe |
| --- | --- | --- | --- | --- |
| **Enterprise** | Hochleistungs-Blockspeicher für latenzsensitive Arbeitslasten. | **7 500 IOPS/TB** | **1 GB** | **2 048 GB** |
| **Standard** | Standard-Blockspeicher, geeignet für die meisten Arbeitslasten. | **1 500 IOPS/TB** | **1 GB** | **2 048 GB** |

### Netzwerk

#### Netzwerkschnittstelle

Jede VM-Instanz kann über **1 bis 7 Netzwerkkarten** verfügen. Jede Netzwerkkarte ist mit **einem einzigen Netzwerk** verbunden.

#### Netzwerkkompatibilität

Diese Schnittstelle kann an zwei Arten von Cloud Temple-Netzwerken angeschlossen werden:

- **Backbone-Privatnetzwerk**: Ein geteiltes Privatnetzwerk mit strikter logischer Isolation zwischen Mandanten. Ideal zur Verbindung Ihrer Cloud Temple-Ressourcen in einer kontrollierten Umgebung. [Mehr erfahren](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: Ein vollständig verwaltetes Privatnetzwerk, das eine erweiterte Segmentierung und eine feine Netzwerkkonfiguration Ihrer Umgebungen ermöglicht. [Mehr erfahren](../../network/vpc/vpc.md)

#### Floating IP

In einem **VPC**-Netzwerk kann einer VM-Instanz eine **Floating IP** zugeordnet werden. Eine Floating IP ist eine öffentliche IP-Adresse, die Sie frei an eine Instanz anhängen oder von ihr trennen können, unabhängig von deren Lebenszyklus.

#### Virtuelle Appliances

Die virtuellen Appliances **Stormshield** und **FortiVM** sind mit der **Enterprise-Familie** kompatibel, vorbehaltlich der Einhaltung der technischen Voraussetzungen und des geltenden Supportumfangs.

### Grenzen

- **Volumes**: 16 zusätzliche Volumes pro VM, jeweils von 1 bis 2 048 GB.
- **Netzwerkkarten**: 7 pro VM, mit einem einzigen Netzwerk pro Karte.
- **Nicht reservierte Kapazität**: Die Erstellung und der Neustart einer VM unterliegen der verfügbaren Kapazität. Nur eine reservierte Instanz garantiert die Kapazität, im Rahmen ihrer Reservierung.

## Sicherheit und Compliance

VM Instances ist nach HDS und ISO 27001 zertifiziert und SecNumCloud-qualifiziert.

- **Isolation**: geteilte Umgebung mit strikter logischer Isolation zwischen den Kunden.
- **Verschlüsselung**: Die Verschlüsselung ruhender Daten der zugrunde liegenden Speicherinfrastruktur wird durch den Dienst gewährleistet. Die anwendungsseitige Verschlüsselung der Daten (Dateisystem, Datenbank) liegt in Ihrer Verantwortung.
- **Datenresidenz**: Daten in Frankreich gehostet.

<a id="protection-des-données"></a>

## Sicherung und Kontinuität

### Sicherung (optional)

Zwei Sicherungsrichtlinien sind verfügbar: **`No Backup`** und **`Backup 30 snapshots`**. Bei `Backup 30 snapshots` wird jeden Abend zwischen **20:00 und 22:00 Uhr** automatisch ein Snapshot erstellt. Wenn der Kunde tagsüber eine zusätzliche Sicherung auslöst, werden an diesem Tag zwei Snapshots erstellt: Die aktive Aufbewahrungsfrist beträgt dann **29 Tage** statt 30. Diese Option wird **zusätzlich berechnet**.

:::info
Die Replikation von VMs ist nicht enthalten.
:::

<a id="sla-et-disponibilité"></a>

## Dienstverfügbarkeit

Das Verfügbarkeitsziel beträgt **99,95 % pro VM Instance**, gemessen über einen Monat. Es umfasst die Rechenressourcen (CPU, RAM); für die Netzwerkkonnektivität und den persistenten Speicher gelten eigene Verpflichtungen. Die Ressourcengarantie hängt von der gewählten Service-Klasse ab.

Die VM-Tools, die auf den Images des Marketplaces vorinstalliert sind, sind für die Messung der Verfügbarkeit erforderlich: Es wird empfohlen, sie weder zu deaktivieren noch zu entfernen.

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [Verantwortlichkeitsmatrix (RACI) VM Instances](../../contractual/vm-instances/raci.md) beschrieben.

Der Zugang zum Dienst erfordert für einen **Direktkunden** mindestens den **Standard-Support**, auch wenn der Kunde das Betriebssystem und die Anwendungen selbst verwaltet. Der **Basic-Support** ist für Kunden bestimmt, die von einem geschulten Partner begleitet werden.

## Reversibilität

| Vorgang                   | Ergebnis                              | Frist       | Kosten     |
|---------------------------|---------------------------------------|-------------|------------|
| Datenexport               | Festplatten-Images in Standardformaten | 30 Tage    | Kostenlos  |
| Migrationsunterstützung   | Technischer Support                   | Auf Anfrage | Nach Angebot |
| Sichere Löschung          | Vernichtungszertifikat                | 7 Tage      | Inbegriffen |

## Preise

Compute wird stündlich abgerechnet, ohne monatliche Bindung; jede angefangene Stunde wird berechnet. Das Anhalten einer VM unterbricht die Abrechnung der vCPUs und des RAMs, nicht jedoch die des Speichers. Die Abrechnungsregeln und Kontingente sind in den [FAQ zu VM Instances](./faq.md) ausführlich beschrieben. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[VM Instances — Preise](https://www.cloud-temple.com/produits/vm-instances/).
