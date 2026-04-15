---
title: Konzepte
---

Der **VM instances**-Dienst von Cloud Temple ist ein gemeinsam genutztes Compute-Angebot, das die bedarfsgerechte Bereitstellung virtueller Maschinen ohne Verwaltung der zugrundeliegenden Infrastruktur ermöglicht. Diese Seite stellt die grundlegenden Konzepte des Dienstes vor.

## Regionen und Verfügbarkeitszonen

Der VM instances-Dienst wird in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet werden soll.

Weitere Informationen zu Verfügbarkeitszonen und Cloud Temple-Regionen finden Sie unter:

- [Konzepte der Verfügbarkeitszonen](../additional_content/concepts_az.md)
- [Regionale Konzepte](../additional_content/concepts_regional.md)

## Service-Klassen

Der Dienst bietet drei Service-Klassen, die für verschiedene Arten von Workloads geeignet sind:

| Klasse | Beschreibung | Ressourcen |
|--------|-------------|------------|
| **Development** | Kostenoptimiert, für Test-, Integrations- und Staging-Umgebungen. Geeignet für nicht-kritische Workloads mit variablem Einsatz. | Geteilt |
| **General Purpose** | Optimales vCPU/RAM-Verhältnis für Standard-Workloads (Webanwendungen, Mikro-Services, mittelgroße Datenbanken). | Geteilt |
| **Performance** | Konzipiert für intensive Workloads, die hohe CPU-Leistung erfordern. **vCPUs sind dediziert**, um konstante Leistung zu gewährleisten. | Dedizierte vCPUs |

## Flavors (Instanzgrößen)

Für jede Service-Klasse werden vordefinierte Flavors angeboten. Es ist auch möglich, **Custom-Flavors** zu erstellen, indem die Anzahl der vCPUs und die RAM-Menge frei gewählt werden.

### Development

Optimiert für Test-, Integrations- und Staging-Umgebungen mit kontrollierten Kosten.

| Flavor | vCPU | RAM | Typischer Einsatz |
|--------|------|-----|-------------------|
| dev.small | 1 | 2 GB | Unit-Tests, leichte CI |
| dev.medium | 2 | 4 GB | Integration, interne Tools |
| dev.large | 4 | 8 GB | Staging-Umgebung |

### General Purpose

Geeignet für Webanwendungen, Mikro-Services und mittelgroße Datenbanken.

| Flavor | vCPU | RAM | Typischer Einsatz |
|--------|------|-----|-------------------|
| gp.small | 1 | 4 GB | Mikro-Service, Funktionstests |
| gp.medium | 2 | 8 GB | Webserver, leichte Anwendung |
| gp.large | 4 | 16 GB | Standardanwendung |
| gp.xlarge | 8 | 32 GB | Mittlere Datenbank |
| gp.2xlarge | 16 | 64 GB | Kritische Anwendung |

### Performance

**vCPUs sind dediziert**, um konstante Leistung auch unter hoher Last zu gewährleisten.

| Flavor | vCPU | RAM | Typischer Einsatz |
|--------|------|-----|-------------------|
| perf.medium | 2 | 4 GB | Leichtes Computing, CI/CD |
| perf.large | 4 | 8 GB | Batch-Verarbeitung, Encoding |
| perf.xlarge | 8 | 16 GB | Intensives Computing |
| perf.2xlarge | 16 | 32 GB | Simulation, Analytics |

### Custom Flavors

Es ist möglich, einen benutzerdefinierten Flavor zu erstellen, indem Sie frei auswählen:

- Die Anzahl der vCPUs
- Die RAM-Menge

Diese Flexibilität ermöglicht es, die Dimensionierung genau an die Anforderungen der Anwendung anzupassen und gleichzeitig die Kosten zu optimieren.

:::note
Flavor-Spezifikationen können sich ändern. Prüfen Sie die Cloud Temple-Konsole für die aktuelle Liste.
:::

## Speicher

Alle Volumes des VM instances-Dienstes sind **persistente Flash-Volumes, die über das Netzwerk eingebunden sind** (*network-attached*). Es gibt keinen flüchtigen lokalen Speicher: Ihre Daten bleiben unabhängig vom Zustand der virtuellen Maschine erhalten.

### Systemfestplatte

Jede virtuelle Maschine verfügt standardmäßig über eine **inklusive Flash-Systemfestplatte**, deren Größe vom gewählten Betriebssystem abhängt:

- Größe: zwischen **15 und 100 GB** je nach ausgewähltem OS.

### Zusätzliche Volumes

Es ist möglich, jeder virtuellen Maschine zusätzliche Speicher-Volumes hinzuzufügen:

- **Maximale Größe**: 2 TB pro Volume
- **Maximale Anzahl**: 16 Volumes pro VM
- **Granularität**: GB-Zuteilung
- **Abrechnung**: pro zugeteiltem GB, mit Wahl der Speicherklasse

## Netzwerk

### Netzwerkschnittstelle

Jede VM instance verfügt über **eine einzige Netzwerkschnittstelle**.

### Netzwerkkompatibilität

Diese Schnittstelle kann mit zwei Arten von Cloud Temple-Netzwerken verbunden werden:

- **Privates Backbone-Netzwerk**: gemeinsam genutztes privates Netzwerk mit strikter logischer Isolation zwischen den Tenants. Ideal für die Vernetzung Ihrer Cloud Temple-Ressourcen in einer kontrollierten Umgebung. [Mehr erfahren](../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: vollständig verwaltetes privates Netzwerk für erweiterte Segmentierung und detaillierte Netzwerkkonfiguration Ihrer Umgebungen. [Mehr erfahren](../network/vpc/vpc.md)

### Floating IP

In einem **VPC**-Netzwerk ist es möglich, einer VM instance eine **Floating IP** zuzuordnen. Eine Floating IP ist eine öffentliche IP-Adresse, die Sie unabhängig vom Lebenszyklus der Instanz frei an- und abkoppeln können.

## Bereitstellung und Images

VM instances werden von den **offiziellen Images des Cloud Temple Marketplace** bereitgestellt. Dieser kuratierte Image-Katalog garantiert getestete, gepflegte und einsatzbereite Umgebungen für jedes unterstützte Betriebssystem.

Der Dienst unterstützt **Cloud-init** für die automatische Vorkonfiguration von Instanzen beim Start (SSH-Schlüssel-Injektion, Netzwerkkonfiguration, Initialisierungsskripte usw.).

## Datenschutz

### Backup (Optional)

Eine Backup-Option ist mit konfigurierbarer Aufbewahrung verfügbar. Diese Option wird **zusätzlich berechnet**.

:::info
VM-Replikation ist standardmäßig nicht enthalten. Ihre Untersuchung ist für das zweite Halbjahr 2026 geplant.
:::

## SLA und Verfügbarkeit

| Verpflichtung | Wert |
|---------------|------|
| Infrastrukturverfügbarkeit | 99,9% (monatlich gemessen) |
| Ressourcengarantie | Gemäß der gewählten Service-Klasse |

## Automatisierung

Der Dienst ist vollständig verwaltbar über:

- **Cloud Temple-Konsole**: grafische Oberfläche für das tägliche Management
- **Cloud Temple REST API**: programmatische Steuerung des VM-Lebenszyklus
- **Cloud Temple Terraform-Provider**: Infrastructure as Code
