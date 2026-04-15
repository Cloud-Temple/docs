---
title: Konzepte
---

Der **VMaaS**-Dienst von Cloud Temple ist ein gemeinsam genutztes Compute-Angebot, das die bedarfsgerechte Bereitstellung virtueller Maschinen ohne Verwaltung der zugrundeliegenden Infrastruktur ermöglicht. Diese Seite stellt die grundlegenden Konzepte des Dienstes vor.

## Technische Architektur

Der Dienst basiert auf einer gemeinsam genutzten Infrastruktur, bestehend aus:

- **Hypervisor**: Infrastruktur vollständig von Cloud Temple verwaltet (keine Hypervisor-Auswahl durch den Kunden).
- **Compute-Hardware**: Cisco UCS Blades.
- **Speicher**: Hochleistungs-Shared-Block-Storage.

Die Infrastruktur wird in Frankreich gehostet.

## Regionen und Verfügbarkeitszonen

Der VMaaS-Dienst wird in der Region **FR1** bereitgestellt. Bei der Erstellung einer virtuellen Maschine können Sie die **Verfügbarkeitszone (AZ)** auswählen, in der sie gehostet werden soll.

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

Jede virtuelle Maschine ist mit **einer Netzwerkkarte** ausgestattet.

Der Dienst ist nativ kompatibel mit dem **VPC (Virtual Private Cloud)**-Dienst von Cloud Temple, der die Netzwerkisolierung und Segmentierung Ihrer Umgebungen ermöglicht.

## Bereitstellung und Images

Virtuelle Maschinen werden **ausschließlich aus offiziellen Cloud Temple Marketplace-Templates** bereitgestellt. Die Verwendung benutzerdefinierter Images von Drittanbietern ist nicht möglich.

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

## Sicherheit und Compliance

| Zertifizierung |
|----------------|
| ISO 27001:2022 |
| ISAE 3402 |

:::info SecNumCloud-Qualifizierung
Dieser Dienst wird von der ANSSI mit SecNumCloud qualifiziert.
:::

Daten werden in **Frankreich** gehostet, in einer gemeinsam genutzten Umgebung mit **strikter logischer Isolation** zwischen den Kunden.

## Automatisierung

Der Dienst ist vollständig verwaltbar über:

- **Cloud Temple-Konsole**: grafische Oberfläche für das tägliche Management
- **Cloud Temple REST API**: programmatische Steuerung des VM-Lebenszyklus
- **Cloud Temple Terraform-Provider**: Infrastructure as Code

## Voraussetzungen

Um den VMaaS-Dienst zu nutzen, müssen Sie folgendes haben:

- Ein aktives **Cloud Temple-Tenant**
- Ein Mindest-Abonnement für den **Standard-Support** ([siehe Support-Dokumentation](https://docs.cloud-temple.com))
