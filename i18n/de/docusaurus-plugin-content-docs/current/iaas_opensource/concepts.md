---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple ist darauf ausgerichtet, kritische Anforderungen an Geschäftskontinuität und Wiederherstellung zu erfüllen, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Basierend auf fortschrittlichen Technologien garantiert diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf weltweit renommierte Technologiepartner:

- Berechnung: **CISCO UCS**.
- Speicherung: **IBM Spectrum Virtualize**, **IBM FlashSystem** für Blockspeicherung und **DELL ECS** für Objektspeicherung.
- Netzwerk: **JUNIPER**.
- Virtualisierung: **Open-Source Stack**, bietet eine zuverlässige und bewährte Basis zur Verwaltung Ihrer Cloud-Umgebungen.

Diese Architektur basiert auf dem Modell **VersaStack**, einer Allianz zwischen Cisco und IBM, die eine erweiterte Kompatibilität mit den wichtigsten Softwareanbietern garantiert.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig automatisiert durch APIs und einen Terraform-Provider, bietet die IaaS-Lösung von Cloud Temple eine einzigartige Infrastruktur:

- **Dedizierte Ressourcen**: Die Berechnungsblades, Speicher-Volumes und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden nie zwischen Kunden gemeinsam genutzt.
- **Maximale Vorhersehbarkeit**: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf die Speicherung und profitieren von einer klaren, monatlichen Verbrauchsabrechnung.

Die Plattform ist von der [ANSSI](https://www.ssi.gouv.fr/) als **SecNumCloud** qualifiziert und garantiert ein hohes Maß an Automatisierung und Sicherheit.

## Wichtige Funktionen

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- Bedarfsgerechte Speicherung (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Gekreuzte Backups mit konfigurierbarer Aufbewahrungsdauer.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Shiva-Konsole](../console/console.md) oder als Infrastructure as Code über APIs und den Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Datenhosting in Frankreich und GDPR-Konformität.                                                                                        |
| Sicherheit           | Hochsichere Plattform, qualifiziert **SecNumCloud**, **HDS** (Hosting von Gesundheitsdaten), **ISO 27001** und **ISAE 3402 Typ II**.       |
| Hohe Verfügbarkeit   | Verfügbarkeitsrate der Plattform von 99,99%, monatlich gemessen, inklusive Wartungsfenster.                                                    |
| Resilienz            | Einrichtung von Kontinuitäts- oder Wiederherstellungsplänen nach Bedarf.                                                                      |
| Automatisierung      | Vollständig automatisierte Plattform, die für die Integration in ein digitales Transformationsprogramm ausgelegt ist.                          |
| On demand            | Ressourcen auf Abruf verfügbar.                                                                                                             |

## Regionen und Verfügbarkeitszonen

Das OpenIaaS-Produkt ist in einer Verfügbarkeitszone bereitgestellt.
Eine Verfügbarkeitszone ist Teil einer Region.

Diese Art der Bereitstellung ermöglicht es, den Standort der Cluster zu wählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Implementierung eines Wiederherstellungsplans im Falle eines Vorfalls (DRP).

---

## Klassen von Berechnungsblades

Die für das Bare-Metal-Angebot verfügbaren Berechnungsblades bieten eine Reihe von Leistungen, um verschiedenen Anforderungen gerecht zu werden:

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          |
|----------------------|--------------|------------------------------------------|----------------------------|-----------------------|----------------------|
| **ECO**              | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder Äquivalent) | 20 / 40 Threads           | 2 X 10 Gbit/s         | -                    |
| **STANDARD**         | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder Äquivalent) | 32 / 64 Threads           | 2 X 25 Gbit/s         | -                    |
| **ADVANCE**          | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder Äquivalent)   | 48 / 96 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 1**    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder Äquivalent) | 16 / 32 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 2**    | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder Äquivalent)   | 36 / 72 Threads           | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 3**    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder Äquivalent)   | 56 / 112 Threads          | 2 X 25 Gbit/s         | -                    |
| **PERFORMANCE 4**    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder Äquivalent) | 32 / 64 Threads           | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48GB |

### Anmerkungen:
- __(1)__ Die verfügbare Speicherkapazität ist physisch auf den Blades verfügbar und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbo-Frequenz.
- __(3)__ Die physische Konnektivität ist für den Netzwerkzugang und den Blockspeicherzugang aufgrund einer konvergenten Cisco UCS-Architektur gemeinsam genutzt.
- __(4)__ Die verfügbaren GPUs entwickeln sich je nach den neuesten Technologien. Ab dem 1. Mai 2024 beinhaltet das Angebot NVIDIA LOVELACE L40S GPUs.
- __(5)__ HA auf einem Cluster ist nur ab 3 Knoten verfügbar.

Die Verfügbarkeit der Infrastruktur wird zu 99,9% garantiert, monatlich gemessen, inklusive Wartungsfenster. Jede Anfrage im Zusammenhang mit dem SLA muss über ein Incident-Ticket gemeldet werden.

---

## Klassen von Blockspeichern

Der verteilte Blockspeicher, basierend auf **IBM Spectrum Virtualize**, bietet eine Reihe von Leistungsoptionen, die auf verschiedene Anwendungsfälle abgestimmt sind:

| Referenz                         | IOPS/TB                  | Hauptverwendung                          |
|----------------------------------|--------------------------|------------------------------------------|
| **FLASH - Essentiell**           | 500                      | Leichte Arbeitslasten                    |
| **FLASH - Standard**             | 1500                     | Standard-Arbeitslasten                   |
| **FLASH - Premium**              | 3000                     | Intensive Arbeitslasten                  |
| **FLASH - Enterprise**           | 7500                     | Kritische Arbeitslasten                  |
| **FLASH - Ultra**                | 15000                    | Ultra-intensive Arbeitslasten            |
| **MASS STORAGE - Archivierung**  | Nicht anwendbar          | Wirtschaftlicher Speicher für Archivierung|

### Eigenschaften:
- **Technologie**: NVMe-Flash mit **Distributed RAID 6** für erhöhte Resilienz.
- **Verfügbarkeit**: 99,99%, monatlich gemessen.
- **Einschränkungen**: Keine Beschränkungen für Lese- oder Schreibvorgänge. Keine automatische Komprimierung oder Deduplikation, was die volle Nutzung der reservierten Volumes gewährleistet.

---

## Die Netzwerke
Das OpenIaaS-Produkt ist kompatibel mit [privaten Netzwerken](../network/private_network) und [Internetzugang](../network/internet).

Zwei Netztypen sind von der Konfiguration einer virtuellen Maschine aus verfügbar.

### VLAN-Netzwerke
VLAN-Netzwerke sind so zu propagieren, dass jedes VLAN einer Netzwerkkarte zugeordnet ist. Wenn Sie mehrere Netzwerke verwenden möchten, müssen Sie mehrere Netzwerkkarten erstellen.

Es gibt eine Begrenzung für die maximale Anzahl von Karten, die man auf einer VM erstellen kann, die liegt bei 7.

### Der VLAN-TRUNK
Wenn Sie mehr als 7 VLANs propagieren müssen, müssen Sie den VLAN-Trunk verwenden.
Der VLAN-Trunk lässt alle Ihre VLANs über eine Karte durch. Die Konfiguration der VLAN-IDs erfolgt über virtuelle VLAN-Schnittstellen im VM-Betriebssystem. Die VLAN-IDs sind dieselben wie die, die in der Konsole sichtbar sind.

## Backup von virtuellen Maschinen

Cloud Temple bietet **eine native und nicht deaktivierbare verteilte Backup-Architektur**, ein obligatorisches Element im Rahmen der französischen SecNumCloud-Qualifikation.

Die Backups werden auf der [SecNumCloud-qualifizierten Objektspeicherlösung](../storage/oss) gespeichert und garantieren optimalen Schutz im Falle eines schwerwiegenden Ausfalls des Produktionsdatacenters. Dieser Ansatz ermöglicht es, Ihre Daten in einem sekundären Datencenter wiederherzustellen, selbst im Falle eines kritischen Vorfalls wie eines Brandes.

Diese Komplettlösung umfasst:
- Offsite-Backup von allen Laufwerken im laufenden Betrieb
- Flexibilität bei der Wiederherstellung, die es ermöglicht, den Wiederherstellungspunkt und den Standort auszuwählen

Die Backup-Infrastruktur basiert auf einer agentenlosen Open-Source-Technologie, die Benutzerfreundlichkeit und Prozessautomatisierung kombiniert. Diese Lösung optimiert die Nutzung des Speicherplatzes bei gleichbleibend hoher Leistung.

Die Backup- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab. Die Backup-Politik ist vollständig konfigurierbar über die [Cloud Temple-Konsole](../console/console.md) für jede virtuelle Maschine.

**Wichtiger Hinweis:**


*Einige virtuelle Maschinen sind mit dieser Sicherungstechnologie nicht kompatibel*, die die Snapshot-Mechanismen des Hypervisors nutzt. Dies betrifft typischerweise Maschinen, deren Festplattenschreiblasten konstant sind. In diesen Fällen kann der Hypervisor den Snapshot nicht abschließen, was das Einfrieren der virtuellen Maschine für den Abschluss des Vorgangs erfordert. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht unterbrechbar.

Die empfohlene Lösung besteht darin, die durch ständige Schreibvorgänge betroffene Festplatte auszuschließen und die Daten mit einer alternativen Methode zu sichern.

| Referenz                                      | Einheit | SKU                            |
| --------------------------------------------- | ------- | ------------------------------ |
| BACKUP - Zugriff auf den Dienst               | 1 VM    | csp:(region):openiaas:backup:vm:v1 |

### Erstellung einer Sicherungsrichtlinie

Um eine neue Sicherungsrichtlinie hinzuzufügen, muss eine Anfrage beim Support eingereicht werden, die über das Rettungsring-Symbol oben rechts in der Schnittstelle erreichbar ist.

Die Erstellung einer neuen Sicherungsrichtlinie erfolgt durch **eine Dienstanforderung**, die folgende Angaben enthält:
- Der Name Ihrer Organisation
- Kontaktdaten einer Ansprechperson (E-Mail und Telefon) zur Abschluss der Konfiguration
- Der Name des Tenants
- Der Name der Sicherungsrichtlinie
- Die gewünschten Eigenschaften (x Tage, y Wochen, z Monate, ...)


## Virtuelle Maschinen

### Verwaltung der vCPU-Ressourcen
Änderungen der vCPU-Ressourcen erfolgen im ausgeschalteten Zustand (Cold-Mode). Die Plattform unterstützt bis zu 254 vCPUs pro virtueller Maschine (theoretisches Limit), mit erfolgreichen Tests auf Linux-VMs mit 128 vCPUs.

Es ist wichtig zu beachten, dass die Unterstützung des Gastbetriebssystems ein entscheidender Faktor bei der Ressourcenallokation ist. Eine Zuweisung, die die unterstützten Limits des Betriebssystems überschreitet, kann zu erheblichen Leistungsproblemen führen.

### Verwaltung der Speicherressourcen
Auch Speicheränderungen erfolgen im ausgeschalteten Zustand. Die Limits sind wie folgt:
- 1,5 TiB mit Unterstützung für Speichersnapshots
- 8 TiB ohne Unterstützung für Speichersnapshots
- 16 TiB (theoretisches Limit ohne Sicherheitssupport, abzüglich des für Xen und das Steuerungsdomänen zugewiesenen RAM)

Der tatsächlich nutzbare Speicher kann durch das Gastbetriebssystem begrenzt sein. Das Überschreiten der vom Gastbetriebssystem unterstützten Limits kann zu Leistungseinbußen führen.

### Verwaltung der Festplatten
- Die maximale Größe einer Festplatte beträgt 2 TB
- Festplatten verwenden das Standard-VHD-Format
- Die maximale Anzahl virtueller Festplatten pro virtueller Maschine, einschließlich CD-ROM-Laufwerke, beträgt 24

Es ist nicht möglich, die Größe der Festplatten nach deren Erstellung zu ändern. Zur Erweiterung der Speicherkapazität muss eine neue Festplatte erstellt werden.


## Kataloge

Der Katalog ermöglicht die Verwaltung von drei wesentlichen Elementtypen:
- Festplatten-Images (ISO)
- Konfigurationsvorlagen
- Vorgefertigte Vorlagen virtueller Maschinen

In der Detailansicht einer Vorlage für virtuelle Maschinen können Sie wichtige Informationen wie den Standort, die Anzahl der Festplatten oder die Anzahl der Netzwerkadapter einsehen.

Wenn die Anzahl der virtuellen Festplatten mit 0 angegeben ist, bedeutet dies, dass es sich um eine Konfigurationsvorlage ohne vorinstalliertes Betriebssystem handelt, was Ihnen ermöglicht, Ihre eigene benutzerdefinierte Umgebung bereitzustellen.
