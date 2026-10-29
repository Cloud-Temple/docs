---
title: Konzepte
---

<a id="une-infrastructure-dédiée-et-automatisée"></a>

## Einführung

Das Angebot __IaaS OpenSource__ ist eine dedizierte Virtualisierungsinfrastruktur, die entwickelt wurde, um die kritischen Anforderungen an Geschäftskontinuität und Wiederherstellung zu erfüllen, insbesondere in anspruchsvollen Branchen wie Industrie, Bankwesen und Versicherung. Es basiert auf einem Open-Source-Virtualisierungsstack und gewährleistet eine hohe Verfügbarkeit sowie eine vorhersehbare Leistung für Ihre kritischen Workloads.

Obwohl vollständig automatisiert durch APIs und einen Terraform-Provider, bietet das Angebot eine dedizierte Infrastruktur:

- __Dedizierte Ressourcen__ : Die Compute-Blades, Storage-Volumes und Software-Stacks (Virtualisierung, Sicherung, Firewalling usw.) werden niemals zwischen Kunden gemeinsam genutzt.
- __Maximale Vorhersehbarkeit__ : Sie kontrollieren die Virtualisierungsquoten, den IOPS-Druck auf den Storage und profitieren von einer klaren Abrechnung nach monatlichem Verbrauch.

## Vorteile

| Vorteil             | Beschreibung                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitales Vertrauen | Hosting der Daten in Frankreich und DSGVO-Konformität.                                                                                          |
| Sicherheit          | Hochsichere Plattform, __SecNumCloud__-qualifiziert, nach __HDS__ (Hosting von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__ zertifiziert. |
| Hohe Verfügbarkeit  | Verfügbarkeitsrate der Plattform von 99,99 %, monatlich gemessen, einschließlich Wartungsfenster.                                              |
| Resilienz           | Einführung von Kontinuitäts- oder Wiederherstellungsplänen je nach Bedarf.                                                                     |
| Automatisierung     | Vollautomatisierte Plattform, konzipiert zur Integration in ein digitales Transformationsprogramm.                                             |
| On demand           | Ressourcen auf Anfrage verfügbar.                                                                                                              |

<a id="principales-fonctionnalités"></a>

## Funktionen

- Dedizierte und bedarfsgesteuerte Compute-Ressourcen (CPU, RAM).
- Bedarfsgesteuerter Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuzgespeicherte Backups mit konfigurierbarer Aufbewahrungsdauer.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Metrologie: Prometheus-APIs zur Anzeige aller Metriken des Produkts.
- Steuerung über die [Konsole](../console/console.md) oder im Infrastructure-as-Code-Modus dank APIs und Terraform-Provider.

### Kataloge

Der Katalog ermöglicht die Verwaltung von drei wesentlichen Elementtypen:

- Die Disk-Images (ISO)
- Die Konfigurationsvorlagen
- Die vorinstallierten Vorlagen virtueller Maschinen

In der Detailansicht einer Vorlage einer virtuellen Maschine können Sie wichtige Informationen wie den Speicherort, die Anzahl der Disks oder die Anzahl der Netzwerkadapter einsehen.

Wenn die Anzahl der virtuellen Disks als 0 angegeben ist, bedeutet dies, dass es sich um eine Konfigurationsvorlage ohne vorinstalliertes Betriebssystem handelt, sodass Sie Ihre eigene benutzerdefinierte Umgebung bereitstellen können.

## Architektur

### Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf technologische Partner von internationalem Ruf:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Block-Speicher und __DELL ECS__ für Objekt-Speicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __Stack Opensource__, die eine zuverlässige und erprobte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen bietet.

Diese Architektur basiert auf dem Modell __VersaStack__, einem Bündnis zwischen Cisco und IBM, das eine erweiterte Kompatibilität mit den wichtigsten Softwareherstellern gewährleistet.

Die Architektur trennt die Rechenleistung (dedizierte Blades) vom Speicher (verteilter Block-Speicher). Netzwerke, Sicherung und Replikation stützen sich auf separate Infrastrukturen, die in den folgenden Abschnitten beschrieben werden.

## Regionen und Verfügbarkeitszonen

Das Produkt OpenIaaS wird in einer Verfügbarkeitszone bereitgestellt.
Eine Verfügbarkeitszone ist Teil einer Region.

Dieser Typ der Bereitstellung ermöglicht es, den Standort der Cluster zu wählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Disaster-Recovery-Plans (DRP) im Falle eines Vorfalls.

## Technische Spezifikationen

### Klassen der Rechenblades

Die für das Angebot IaaS OpenSource verfügbaren Rechenblades bieten ein Leistungsspektrum, um verschiedene Anforderungen zu erfüllen:

| Referenz             | RAM  __(1)__ | Taktfrequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder äquivalent)  | 20 / 40 Threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder äquivalent)    | 48 / 96 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Gold 5315Y oder äquivalent) | 16 / 32 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 oder äquivalent)    | 36 / 72 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder äquivalent)    | 56 / 112 Threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

#### Hinweise

- __(1)__ Die Speichermenge entspricht dem physisch auf den Blades verfügbaren Speicher und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basistaktrate und der Turbo-Taktrate.
- __(3)__ Die physische Konnektivität wird für den Netzwerkzugriff und den Blockspeicherzugriff gemeinsam genutzt, basierend auf einer konvergierten Cisco-UCS-Architektur.
- __(4)__ Die verfügbaren GPUs ändern sich in Abhängigkeit von den neuesten Technologien. Das Produkt bietet NVIDIA-L40S-GPUs.
- __(5)__ Die Hochverfügbarkeit auf einem Cluster ist erst ab 2 Knoten verfügbar.


### Block-Speicherklassen

Der verteilte Block-Speicher, basierend auf __IBM Spectrum Virtualize__, bietet ein Leistungsspektrum, das an verschiedene Anwendungsfälle angepasst ist:

| Referenz                          | IOPS/TB         | Max. IOPS-Grenze / Volume | Max. Durchsatz / Volume     | Hauptanwendung                          |
|-----------------------------------|-----------------|---------------------------|-----------------------------|-----------------------------------------|
| **FLASH - Essential**             | 500             | 10 000 IOPS               | 512 MB/s                    | Leichte Workloads                       |
| **FLASH - Standard**              | 1500            | 30 000 IOPS               | 1024 MB/s                   | Standard-Workloads                      |
| **FLASH - Premium**               | 3000            | 30 000 IOPS               | 1024 MB/s                   | Intensive Workloads                     |
| **FLASH - Enterprise**            | 7500            | 30 000 IOPS               | 1024 MB/s                   | Kritische Workloads                     |
| **FLASH - Ultra**                 | 15000           | 30 000 IOPS               | 1024 MB/s                   | Ultra-intensive Workloads               |
| **MASS STORAGE - Archivierung**   | Nicht anwendbar | Nicht garantiert          | Nicht garantiert            | Günstiger Speicher für die Archivierung |

#### Eigenschaften

- **Leistung** : Die effektive Leistung steigt linear mit dem zugewiesenen Volumen (gemäß dem IOPS/TB-Verhältnis), **innerhalb der oben definierten absoluten Hardware-Obergrenze**. (Zum Beispiel wird ein 10-TB-Volume in der Ultra-Klasse physisch auf 30.000 IOPS und 1024 MB/s begrenzt).
- __Technologie__ : NVMe-Flash mit __Distributed RAID 6__ für erhöhte Resilienz.
- __Einschränkungen__ : Keine Einschränkung bei Lese- oder Schreibvorgängen. Keine automatische Komprimierung oder Deduplizierung, was die vollständige Nutzung der reservierten Volumes gewährleistet.

### Die Netzwerke

Das Produkt OpenIaaS ist kompatibel mit [privaten Netzwerken](../network/private_network) und [dem Internetzugang](../network/internet).

Zwei Arten von Netzwerken sind über die Konfiguration einer virtuellen Maschine verfügbar.

#### VLAN-Netzwerke

VLAN-Netzwerke sind mit einem VLAN pro Netzwerkkarte zu propagieren. Wenn Sie mehrere Netzwerke verwenden möchten, genügt es, mehrere Netzwerkkarten zu erstellen.

Es besteht eine Beschränkung für die maximale Anzahl von Netzwerkkarten, die auf einer VM erstellt werden kann, und zwar 7.

#### Der VLAN TRUNK

Falls Sie mehr als 7 VLANs propagieren müssen, müssen Sie den VLAN Trunk verwenden.
Der VLAN Trunk lässt alle Ihre VLANs über eine einzige Karte durch. Die Konfiguration der VLAN-IDs erfolgt über virtuelle VLAN-Interfaces aus dem Betriebssystem der VM. Die VLAN-IDs sind dieselben wie die, die in der Konsole vorhanden und sichtbar sind.

### Die virtuellen Maschinen

#### Verwaltung der vCPU-Ressourcen

Änderungen der vCPU-Ressourcen werden im kalten Zustand (ausgeschaltete Maschine) vorgenommen. Die Plattform unterstützt bis zu 254 vCPUs pro virtueller Maschine (theoretische Grenze), mit erfolgreichen Tests auf Linux-VMs mit 128 vCPUs.

Es ist wichtig zu beachten, dass die Unterstützung des Gast-Betriebssystems ein entscheidender Faktor bei der Ressourcenzuweisung ist. Eine Zuweisung, die die vom Betriebssystem unterstützten Grenzen überschreitet, kann zu erheblichen Leistungsproblemen führen.

#### Verwaltung der Speicherressourcen

Speicheränderungen werden ebenfalls im kalten Zustand durchgeführt. Die Grenzen sind wie folgt:

- 1,5 TiB mit Unterstützung für Speichersnapshots
- 8 TiB ohne Unterstützung für Speichersnapshots
- 16 TiB (theoretische Grenze ohne Sicherheitsunterstützung, abzüglich des Xen und dem Kontrollbereich zugewiesenen RAM)

Der tatsächlich nutzbare Speicher kann durch das Gastbetriebssystem begrenzt sein. Das Überschreiten der vom Gast-OS unterstützten Grenzen kann zu Leistungseinbußen führen.

#### Verwaltung der Datenträger

- Die maximale Größe eines Datenträgers beträgt 2 TB
- Die Datenträger verwenden das Standard-VHD-Format
- Die maximale Anzahl virtueller Datenträger pro virtueller Maschine, einschließlich CD-ROM-Laufwerke, beträgt 24

Es ist nicht möglich, Datenträger nach ihrer Erstellung zu vergrößern. Um die Speicherkapazität zu erweitern, muss ein neuer Datenträger erstellt werden.

#### Tools für virtuelle Maschinen

Diese Tools werden verwendet, um eine optimale Funktionsweise der virtuellen Maschinen zu gewährleisten. Wenn Sie eine Aktion ausführen möchten und eines dieser Tools erforderlich ist, wird eine Meldung in der Cloud Temple-Konsole angezeigt.
Um diese Tools zu installieren, können Sie die offiziellen Websites von Xen Server konsultieren, um eine genaue Vorgehensweise für Ihr Betriebssystem zu erhalten.

##### Management Agent

Der Management Agent ist eine Komponente, die in jeder virtuellen Maschine installiert ist. Er ermöglicht dem Hypervisor, die Maschine besser zu verwalten, indem er auf mehr Informationen zugreifen kann, und ermöglicht es, bestimmte Aktionen sauberer durchzuführen.

##### PV Drivers (Paravirtualization Drivers)

PV-Drivers sind Treiber, die in der virtuellen Maschine installiert werden, um deren Leistung zu verbessern.
Ohne diese Treiber funktioniert die Maschine, aber langsamer. Darüber hinaus ermöglichen sie bestimmte erweiterte Aktionen.
PV-Drivers sind nativ in den meisten aktuellen Linux-Kernels installiert.

##### Tools

Tools sind eine Sammlung von Softwarekomponenten, die die Integration der virtuellen Maschine in die Virtualisierungsinfrastruktur verbessern.

### Grenzen

- Eine virtuelle Maschine verfügt über maximal 7 Netzwerkkarten; bei mehr als 7 VLANs verwenden Sie den VLAN Trunk.
- Ein virtueller Datenträger ist maximal 2 TB groß und kann nicht vergrößert werden; maximal 24 virtuelle Datenträger pro virtueller Maschine.
- Änderungen an vCPU und Arbeitsspeicher erfolgen im kalten Zustand.
- Die Hochverfügbarkeit eines Clusters erfordert mindestens zwei Knoten.
- Ein Speichervolume ist auf 30.000 IOPS und 1024 MB/s begrenzt (10.000 IOPS und 512 MB/s in der Klasse Essential).

## Sicherheit und Compliance

IaaS OpenSource ist nach HDS, ISO 27001 und ISAE 3402 Typ II zertifiziert, trägt das Gaia-X-Label Stufe 3, ist CISPE-konform und C5-konform und von der [ANSSI](https://www.ssi.gouv.fr/) SecNumCloud-qualifiziert.

### Sicherheit und Verschlüsselung der Block-Speicherung

Um die Vertraulichkeit Ihrer Daten im Ruhezustand zu gewährleisten, integriert unsere gesamte Block-Speicher-Infrastruktur eine robuste Hardware-Verschlüsselung.

- __Verschlüsselungstyp__ : Die Daten werden direkt auf den Datenträgern (`Data At Rest`) verschlüsselt, wobei der Algorithmus __XTS-AES 256__ verwendet wird.
- __Konformität__ : Diese Verschlüsselungsmethode entspricht der Norm __FIPS 140-2__ und gewährleistet ein validiertes hohes Sicherheitsniveau.
- __Funktionsweise__ : Die Verschlüsselung wird zum Zeitpunkt des Schreibens der Daten auf den physischen Speicherträger angewendet.

:::warning[Hinweis zur Replikation]
Es ist wichtig zu beachten, dass diese Verschlüsselung die auf den Datenträgern gespeicherten Daten schützt. Sie ist nicht "on-the-fly" aktiv, was bedeutet, dass die Daten während der Speicherreplikation zwischen den Verfügbarkeitszonen nicht verschlüsselt werden. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

## Sicherung und Kontinuität

### Sicherung virtueller Maschinen

Das OpenIaaS-Angebot integriert __eine native und nicht deaktivierbare verteilte Sicherungsarchitektur__, ein verpflichtendes Element im Rahmen der französischen SecNumCloud-Qualifizierung.

Die Sicherungen werden auf dem [SecNumCloud-qualifizierten Objektspeicher](../storage/oss) gespeichert, was einen optimalen Schutz bei einem schwerwiegenden Ausfall des Produktions-Rechenzentrums gewährleistet. Dieser Ansatz ermöglicht die Wiederherstellung Ihrer Daten auf einem sekundären Rechenzentrum, selbst bei einem kritischen Vorfall wie einem Brand.

#### Verfügbare Datenschutzdienste

| Dienst | Beschreibung |
|---|---|
| **Inkrementelle Sicherung (Agentless)** | Agentlose Sicherung über die nativen Mechanismen des Hypervisors, in ein entferntes S3-Repository. |
| **Sicherung der Metadaten** | Schutz der Konfigurationen des Virtualisierungspools und des Sicherungs-Orchestrators — unverzichtbar für das Disaster Recovery. |
| **Granulare Wiederherstellung** | Wiederherstellung auf Ebene der gesamten VM, des einzelnen virtuellen Datenträgers oder der einzelnen Datei möglich. |
| **S3 Multi-AZ Offloading** | Externalisierung in den zwischen Verfügbarkeitszonen replizierten S3-Objektspeicher von Cloud Temple. |

Die Geschwindigkeiten der Sicherung und Wiederherstellung hängen von der Änderungsrate in den Umgebungen ab. Die Sicherungsrichtlinie ist über [die Cloud Temple-Konsole](../console/console.md) für jede virtuelle Maschine vollständig konfigurierbar.


---

#### Technische Sicherungsarchitektur

##### Gesamtübersicht

Die Architektur basiert auf einer strikten Trennung zwischen der **Steuerungsebene** und der **Datenebene**: Der Sicherungs-Orchestrator wird im Management-Cluster von Cloud Temple gehostet (getrennt und für den Kunden nicht zugänglich), während die Sicherungsdaten in einem entfernten S3-Repository gespeichert werden, das physisch von der Produktionsinfrastruktur getrennt ist. Die Daten werden zwischen den beiden Komponenten verschlüsselt übertragen.

##### Sicherungs-Orchestrator

Der Orchestrator wird im Management-Cluster von Cloud Temple bereitgestellt und ist **für den Kunden nicht direkt zugänglich**. Er orchestriert alle Sicherungsjobs und verwaltet die Verschlüsselung.

- **Standardrichtlinien**: Sicherungsrichtlinien werden standardmäßig für jeden Tenant angewendet.
- **Benutzerdefinierte Richtlinien**: Der Kunde kann spezifische Häufigkeiten oder Aufbewahrungsdauern über ein Support-Ticket in der Cloud Temple-Konsole anfordern.

##### S3-Fernspeicher

Die Sicherungen werden an den [SecNumCloud-qualifizierten Objektspeicher](../storage/oss) von Cloud Temple gesendet, mit Multi-AZ-Replikation, um die Resilienz gegenüber dem Verlust eines gesamten physischen Standorts zu gewährleisten.

---

#### Sicherungsmechanismus: Incremental Backup

Der Dienst verwendet einen **inkrementellen** Sicherungsmodus. Dieser Modus zielt auf ein **Backup Repository** (den entfernten S3-Speicher) und exportiert nach der ersten Sicherung niemals eine vollständige Sicherung: Nur die **geänderten Datenblöcke** werden in jedem Zyklus übertragen.

:::info[Inkrementelle Sicherung vs. Replikation]
Die **inkrementelle Sicherung** zielt auf ein entferntes S3-Repository und ist für den **langfristigen Schutz** optimiert. Sie sollte nicht mit der **Replikation** (Hot Disaster Recovery) verwechselt werden, die ein lokales Storage Repository als Ziel hat — dieser Modus wird durch die Funktion [Replikation virtueller Maschinen](#replikation-virtueller-maschinen) abgedeckt.
:::

##### Technischer Lebenszyklus einer inkrementellen Sicherung

Folgende aufeinanderfolgende Schritte werden bei jeder Ausführung eines Sicherungsjobs ausgelöst:

**1. Erstellung des lokalen Snapshots (Quelle)**

Beim Start des Jobs fordert der Orchestrator den Hypervisor auf, einen Snapshot der VM zu erstellen. Dieser Snapshot dient als Vergleichspunkt, um das Delta gegenüber dem vorherigen Referenz-Snapshot zu berechnen.

**2. Differenzieller Export über Changed Block Tracking (CBT)**

Der Orchestrator vergleicht den neuen Snapshot mit dem vorherigen Referenz-Snapshot über die CBT-Metadaten. Nur die Datenblöcke, die sich seit der letzten Sicherung geändert haben, werden extrahiert — nicht die gesamte Festplatte.

**3. Verschlüsselung und Übertragung nach S3**

Die geänderten Blöcke werden **vom Orchestrator on-the-fly verschlüsselt** und anschließend über HTTPS/TLS 1.3 an den entfernten S3-Bucket gesendet.

**4. Rotation der Snapshots (Coalesce)**

Sobald die Übertragung validiert wurde, wird der alte Referenz-Snapshot gelöscht und der neue Snapshot wird zur Referenz für den nächsten Zyklus. Der Hypervisor löst dann einen **Coalesce**-Prozess (Zusammenführung) aus, um die Daten des alten Deltas in die Kette der virtuellen Festplatten zurückzuführen.

:::warning[I/O-Auswirkung des Coalesce]
Die Coalesce-Operation ist **I/O-intensiv** auf dem Produktions-Speicher. Sie wird automatisch nach jeder erfolgreichen Sicherung ausgelöst. Es wird empfohlen, die Sicherungsfenster während der Zeiträume mit geringer Anwendungslast zu planen.
:::

**5. Verwaltung der Aufbewahrung auf S3 (Merge) und Key Backup Interval**

Auf dem S3-Speicher verwaltet der Orchestrator die Rotation der Sicherungen durch **Zusammenführung** (*merge*) der alten Deltas in die älteste gemäß der Aufbewahrungsrichtlinie beibehaltene Voll-Sicherung.

Um die Integrität der Sicherungskette zu gewährleisten, wird eine Voll-Sicherung **periodisch erzwungen** (typischerweise alle 20 Inkremente — *Key Backup Interval*). Dies erstellt einen neuen sauberen Startpunkt und begrenzt die Auswirkung einer möglichen Beschädigung eines Glieds in der Kette.

---

#### Auswirkung auf die Dimensionierung des Produktions-Speichers

:::warning[Kritischer Hinweis — Block-Speicher (Thick Provisioning)]
Das OpenIaaS-Angebot basiert auf hochperformantem Block-Speicher (Fibre Channel / LVM). Die für die inkrementelle Sicherung verwendeten Snapshots werden im Modus **Thick** provisioniert: Jeder Snapshot verbraucht im Storage Repository (SR) die **vollständige nominale Größe der VM-Festplatte** und nicht nur das tatsächliche Delta.

**Beispiel für den Verbrauch einer VM mit einer 50-GB-Festplatte:**

| Element | Verbrauch im SR |
|---|---|
| Aktive VM-Festplatte | 50 GB |
| Permanenter Referenz-Snapshot (für die Delta-Berechnung) | 50 GB |
| Temporärer Snapshot, der während des Exports erstellt wird | 50 GB |
| **Gesamtbedarf während des Sicherungsfensters** | **bis zu 150 GB** |

**Empfohlene Dimensionierungsregel**: Um den Produktions-Speicher bei Sicherungen oder manuellen Snapshots vorsichtig zu dimensionieren, sollte **das 2,5-fache der VM-Größe** eingeplant werden. Dieser Puffer berücksichtigt den nominalen Verbrauch der Snapshots; er stellt keinen allgemeinen Koeffizienten für Abrechnung oder Kapazität dar. Der Peak des Sicherungsfensters, wie im obigen Beispiel beschrieben, kann **das 3-fache der Festplattengröße** erreichen: Er muss durch die verfügbare Kapazität abgedeckt werden, selbst wenn die nominale Dimensionierung auf das 2,5-fache festgelegt ist.
:::

---

#### Sicherheit und Verschlüsselung der Sicherungen

##### Verschlüsselung während der Übertragung

Die gesamte Kommunikation zwischen dem Sicherungs-Orchestrator und dem S3-Speicher wird über **HTTPS / TLS 1.3** verschlüsselt.

##### Verschlüsselung im Ruhezustand (At Rest) und Schlüsselverwaltung

Die Verschlüsselung wird vom Sicherungs-Orchestrator **vor** dem Senden der Daten an S3 angewendet.

| Parameter | Wert |
|---|---|
| **Algorithmus** | AES-256 oder ChaCha20-Poly1305 |
| **Schlüsselerzeugung** | Automatisch bei der Bereitstellung des Sicherungs-Orchestrators |
| **Schlüsselverwahrung** | Zentralisierter Secrets-Tresor (niemals in der Kundenoberfläche offengelegt) |
| **Resilienz** | Im Falle eines Verlusts des Orchestrators wird der Schlüssel aus dem Secrets-Tresor erneut eingespielt, um den Dienst wiederherzustellen |

##### Netzwerkisolation (SecNumCloud-Architektur)

Die Sicherungsinfrastruktur ist so konzipiert, dass sie gegenüber den Kundenumgebungen **strikt abgeschottet** ist:

- **Physische Trennung**: Die Netzwerke *Client*, *Administration* und *Backup* basieren auf physisch getrennten Backbones und separaten Routing-Kontexten (VRF).
- **Keine laterale Infektion möglich**: Eine kompromittierte VM kann weder den S3-Speicher noch den Sicherungs-Orchestrator erreichen — es existiert kein Netzwerkpfad zwischen ihnen. S3 wird niemals in der VM „gemountet“.

##### Gesicherte Administration

Die Administration der Sicherungsplattform ist **den Backup-Teams von Cloud Temple vorbehalten** und unterliegt den Anforderungen von SecNumCloud:

| Kontrolle | Maßnahme |
|---|---|
| **Zugangsbastion** | Verpflichtender Zugang über eine gehärtete interne Administrationsbastion |
| **Arbeitsplatz** | Zugang ausschließlich über dedizierte und gesicherte Administrations-Laptops |
| **Authentifizierung** | Verpflichtende MFA über ein dediziertes Administrationsverzeichnis, getrennt vom Büroverzeichnis |

---

#### Monitoring und Audit

- **Sicherungsprotokolle**: direkt in der Cloud Temple-Konsole für den Kunden einsehbar — Status (Erfolg/Fehlschlag), Datenvolumen, Zeitstempel.
- **Administrator-Zugriffsprotokolle**: Zugriffe auf die Backup-Infrastrukturen (Orchestrator, S3) werden protokolliert und **monatlich auditiert**, um jede Anomalie zu erkennen.
- **Penetrationstests (PASSI-Pentests)**: Die Infrastruktur unterliegt regelmäßigen Pentests durch PASSI-qualifizierte Dienstleister im Rahmen der Aufrechterhaltung der SecNumCloud-Qualifizierung.
- **Physische Sicherheit**: Die gesamte Ausrüstung ist in den SecNumCloud-Zonen (dedizierte physische Käfige mit biometrischer Zugangskontrolle) der Cloud Temple-Rechenzentren untergebracht.

---

#### Kompatibilität und Sonderfälle

:::warning[VMs mit kontinuierlichen Datenträger-Schreibvorgängen]
Bestimmte virtuelle Maschinen sind mit dieser Sicherungstechnologie nicht kompatibel, wenn ihre **Datenträger-Schreiblasten konstant** sind (aktive Datenbanken, Transaktionsprotokolle usw.). Der Hypervisor kann in diesem Fall den Snapshot nicht abschließen, ohne die VM einzufrieren, was mehrere Stunden dauern kann.

Für diese Workloads empfehlen wir, die **Hypervisor-Sicherung durch eine Anwendungssicherung zu ergänzen oder zu ersetzen**: Datenbank-Dump (pg_dump, mysqldump…), agentenbasierte Sicherung oder nativer Export der Anwendung.
:::

---

#### Erstellung einer Sicherungsrichtlinie

Die Erstellung einer Sicherungsrichtlinie ist eine Verwaltungsoperation, die **ausschließlich über eine Supportanfrage** durchgeführt wird, die über das Rettungsring-Symbol oben rechts in der Oberfläche zugänglich ist.

Die Anfrage muss folgende Angaben enthalten:

- Der Name Ihrer Organisation
- Die Kontaktdaten einer Ansprechperson (E-Mail und Telefon) zum Abschluss der Konfiguration
- Der Name des Tenants
- Der Name der Sicherungsrichtlinie
- Die gewünschten Eigenschaften: Häufigkeit, Aufbewahrungsdauer (x Tage, y Wochen, z Monate…)

##### Planungsbeschränkungen

| Beschränkung | Wert |
|---|---|
| **Minimales Intervall zwischen zwei Ausführungen** | 24 Stunden |
| **Maximale Aufbewahrungsdauer** | 24 Monate |
| **Gleichzeitige Ausführungen pro Richtlinie** | Nur 1 gleichzeitig |

:::warning[Eine Richtlinie kann jeweils nur einmal ausgeführt werden]
Jede Sicherungsrichtlinie ist **Single-Instance**: Nur eine Ausführung kann gleichzeitig aktiv sein.

**Praktische Konsequenz**: Wenn Sie zahlreiche virtuelle Maschinen zu einer bestehenden Richtlinie hinzufügen und die Sicherung vom Vortag zum geplanten Auslösezeitpunkt noch nicht abgeschlossen ist, **wird der neue Zyklus nicht gestartet** — er wird bis zum nächsten Termin übersprungen.

Um diesen Fall zu vermeiden:
- prüfen Sie die **Ausführungsdauern** Ihrer Jobs über die Protokolle der Cloud Temple-Konsole,
- passen Sie die **Häufigkeit** oder die **Größe der Richtlinie** an, wenn die Sicherungen regelmäßig in das nächste Zeitfenster überlaufen,
- erwägen Sie, **die VMs auf mehrere Richtlinien zu verteilen** mit versetzten Zeitplänen für große Umfänge.
:::

:::info[Langzeitaufbewahrung]
**Die maximale Aufbewahrungsdauer beträgt 24 Monate.** Für einen längeren Aufbewahrungsbedarf ist der Dienst zur **agentenbasierten Sicherung** als Zusatzabonnement verfügbar. Kontaktieren Sie den Support für weitere Informationen.
:::

<a id="réplication-de-machines-virtuelles"></a>
<a id="virtual-machine-replication"></a>
<a id="replikation-virtueller-maschinen"></a>
<a id="réplication-de-máquinas-virtuales"></a>
<a id="replicazione-di-macchine-virtuali"></a>

<a id="vm-replication"></a>

### Replikation virtueller Maschinen

Die __Replikation virtueller Maschinen__ von Cloud Temple gewährleistet den Schutz und die Kontinuität Ihrer kritischen Daten durch eine automatisierte Kopie Ihrer Umgebungen in eine separate Verfügbarkeitszone. Diese Funktion, die nativ in das Produkt IaaS Open Source integriert ist, erfüllt die strengsten Anforderungen an Geschäftskontinuität und Disaster Recovery.

#### Ein automatisierter und sicherer Schutz

Die Cloud Temple-Replikation basiert auf einer __SecNumCloud-qualifizierten__ Infrastruktur, die Folgendes gewährleistet:

- __Asynchrone Replikation__ : Kontinuierliche Kopie Ihrer virtuellen Maschinen ohne Auswirkungen auf die Produktivleistung
- __Geografische Trennung__ : Speicherung der Replikate in einer anderen Verfügbarkeitszone als der Quelle
- __Vollständige Automatisierung__ : Vollständig automatisierter Prozess über die [Cloud Temple-Konsole](../console/console.md)
- __Regulatorische Konformität__ : Einhaltung der Anforderungen an Datensicherung und Geschäftskontinuität

#### Vorteile der Replikation

| Vorteil                 | Beschreibung                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Geschäftskontinuität    | Schutz Ihrer kritischen Dienste bei einem schwerwiegenden Vorfall am Hauptstandort.                                                           |
| Geografischer Schutz    | Replikation in eine separate Verfügbarkeitszone, Schutz vor lokalen Katastrophen.                                                             |
| Zeitliche Flexibilität  | Wahl des Replikationsintervalls nach Ihren Bedürfnissen: von 15 Minuten bis 24 Stunden.                                                       |
| Einfache Verwaltung     | Vollständig in die Cloud Temple-Konsole integrierte Konfiguration und Überwachung.                                                            |
| SecNumCloud-Konformität | Qualifizierte Infrastruktur, die das höchste Sicherheitsniveau für Ihre sensiblen Daten gewährleistet.                                        |

#### Replikationskonfiguration

##### Replikationsrichtlinien

Die Erstellung einer Replikationsrichtlinie definiert die Schutzparameter Ihrer virtuellen Maschinen:

- __Ziel__ : Auswahl des Zielspeichers in der Replikationsverfügbarkeitszone
- __Häufigkeit__ : Replikationsintervall, das an Ihre Wiederherstellungsanforderungen (RPO) angepasst ist
- __Aufbewahrung__ : Anzahl der aufbewahrten Wiederherstellungspunkte

##### Verfügbare Intervalle

| Intervall               | Empfohlene Verwendung                      | RPO (Maximaler Datenverlust) |
|-------------------------|--------------------------------------------|------------------------------|
| __15 bis 59 Minuten__   | Kritische Echtzeit-Anwendungen             | < 1 Stunde                   |
| __1 bis 24 Stunden__    | Geschäftsanwendungen und Standardumgebungen | < 24 Stunden                |

:::warning[RPO: kein vertraglich garantiertes Ziel]
Das konfigurierte Replikationsintervall (z. B. 15 Minuten) stellt ein **RPO-Ziel (Recovery Point Objective)** dar und keine vertragliche Verpflichtung.

Das tatsächlich erreichte RPO hängt direkt von der **Änderungsrate (Change Rate)** der Daten auf den replizierten virtuellen Maschinen ab. Wenn das Volumen der zwischen zwei Replikationszyklen geänderten Daten zu groß ist, kann die Übertragung möglicherweise nicht innerhalb des konfigurierten Intervalls abgeschlossen werden. In diesem Fall beginnt der nächste Zyklus erst nach Abschluss des vorherigen, was das tatsächliche RPO de facto verlängert.

**Zusammenfassung:**
- Das minimal konfigurierbare RPO beträgt **15 Minuten**.
- Dieses RPO ist nur erreichbar, wenn die Änderungsrate der Daten mit der verfügbaren Replikationsbandbreite kompatibel bleibt.
- **Dem RPO ist kein SLA zugeordnet**: Es handelt sich um ein „Best-Effort“-Ziel, dessen Einhaltung von den Eigenschaften der Workload abhängt.
- Für Workloads mit hoher Schreibrate (Datenbanken, Transaktionsprotokolle usw.) wird empfohlen, ein größeres Replikationsintervall vorzusehen und dies durch eine anwendungsbasierte Sicherungsstrategie zu ergänzen.
:::

##### Zuordnung virtueller Maschinen

Sobald die Richtlinie erstellt wurde, können Sie Ihre zu schützenden virtuellen Maschinen zuordnen:

- __Einfache Auswahl__ : Auswahl der VMs über die Oberfläche der Konsole
- __Automatische Validierung__ : Prüfung der Kompatibilität und der Voraussetzungen
- __Sofortige Aktivierung__ : Automatischer Start der Replikation nach der Konfiguration

#### Verwaltung der Replikate

##### Ansicht der Richtlinien

Die Cloud Temple-Konsole bietet eine zentrale Ansicht Ihrer Replikationsrichtlinien mit:

- Name und Häufigkeit jeder Richtlinie
- Ziel-Verfügbarkeitszone
- Zugehöriger Pool und Speicher
- Verfügbare Verwaltungsaktionen

##### Ansicht der Replikate

Die Tabelle der Replikate ermöglicht es Ihnen, folgende Informationen anzuzeigen:

- Name der replizierten virtuellen Maschinen
- Quell- und Zielort
- Zugehörige Replikationsrichtlinie
- Export der Daten im CSV-Format

#### Bewährte Verfahren

##### Empfehlungen nach Lasttyp

- __Kritische Anwendungen__ : Replikation alle 15-30 Minuten, um den Datenverlust zu minimieren
- __Geschäftsanwendungen__ : Stündliche oder zweistündliche Replikation je nach Bedarf
- __Entwicklungsumgebungen__ : Tägliche Replikation in der Regel ausreichend

##### Planung der Richtlinien

- Erstellen Sie separate Richtlinien basierend auf der Kritikalität Ihrer Anwendungen
- Benennen Sie Ihre Richtlinien eindeutig, um die Verwaltung zu erleichtern
- Prüfen Sie regelmäßig den Status Ihrer Replikate über die Konsole
- Dokumentieren Sie Ihre Replikationsstrategie für Ihre Teams

__Wichtiger Hinweis:__

*Die Replikation ersetzt keine vollständige Sicherungsstrategie. Sie ist eine wesentliche Ergänzung, um die Geschäftskontinuität im Falle eines schwerwiegenden Vorfalls an Ihrem Hauptstandort sicherzustellen.*

<a id="hochverfügbarkeit"></a>

### Hochverfügbarkeit

Die Hochverfügbarkeit stellt die Dienstkontinuität der virtuellen Maschinen (VM) bei einem Ausfall eines physischen Hosts innerhalb eines OpenIaaS-Pools sicher.
Mit der Hochverfügbarkeit (HA) sendet jeder Host im Pool regelmäßig Heartbeat-Signale an seine Peers über den gemeinsam genutzten Speicher (Block Storage Heartbeat). Bei längerem Ausbleiben einer Antwort wird der Host als ausgefallen betrachtet.

Ein als Heartbeat designierter Block Storage dient als Grundlage, um Hosts zu authentifizieren, die nicht mehr antworten.

Damit die Hochverfügbarkeit in einem OpenIaaS-Pool korrekt konfiguriert ist, ist es unerlässlich, über __mindestens zwei verbundene Hosts__ zu verfügen.

Jede VM muss mit einer Neustartpriorität für die Hochverfügbarkeit konfiguriert werden:

##### Disabled

  Die Hochverfügbarkeit ist nicht konfiguriert. Im Falle eines Host-Ausfalls wird die virtuelle Maschine nicht neu gestartet.

##### Restart

  Im Falle eines Host-Ausfalls wird die virtuelle Maschine automatisch neu gestartet, sobald Ressourcen im Pool verfügbar sind. Virtuelle Maschinen, die im Modus "restart" konfiguriert sind, werden vorrangig behandelt, vor denen, die im Modus "best-effort" konfiguriert sind.

##### Best-Effort

  Im Falle eines Host-Ausfalls wird die virtuelle Maschine nur automatisch neu gestartet, wenn nach der Verarbeitung aller virtuellen Maschinen, die im Modus "restart" konfiguriert sind, noch Ressourcen verfügbar bleiben. Der Modus "Best-effort" unternimmt nur einen einzigen Versuch, daher wird die virtuelle Maschine nicht neu gestartet, wenn die Ressourcen nicht ausreichen.

## Dienstverfügbarkeit

| Element         | Verfügbarkeitsziel, gemessen über einen Monat |
|-----------------|-----------------------------------------------|
| Plattform       | 99,99 %, einschließlich Wartungsfenster       |
| Block-Speicher  | 99,99 %                                       |

Jede Anfrage im Zusammenhang mit der Verfügbarkeit muss über ein Incident-Ticket gemeldet werden.

## Reversibilität

| Vorgang                   | Liefergegenstand                                                 | Frist       | Kosten       |
|---------------------------|------------------------------------------------------------------|-------------|--------------|
| Export der VMs            | Datenträger im Standard-VHD-Format, Export/Import im nativen XVA-Format | 30 Tage | Kostenlos    |
| Export der Konfiguration  | Terraform-Vorlagen                                               | 15 Tage     | Kostenlos    |
| Export der Sicherungen    | Abruf der Sicherungen aus dem S3-Speicher                        | 30 Tage     | Kostenlos    |
| Migrationsunterstützung   | Technischer Support                                              | Auf Anfrage | Nach Angebot |

## Preise

Der Dienst wird nach monatlichem Verbrauch abgerechnet. Die Preise sind auf der Produktseite auf der Cloud Temple-Website veröffentlicht:
[IaaS OpenSource — Preise](https://www.cloud-temple.com/produits/iaas-opensource/).
