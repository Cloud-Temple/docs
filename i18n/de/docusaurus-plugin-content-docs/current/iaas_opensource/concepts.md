---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__ Angebot von Cloud Temple wurde entwickelt, um kritische Anforderungen an Geschäftskontinuität und Wiederherstellung zu erfüllen, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Basierend auf modernsten Technologien garantiert diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Rechenleistung: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Blockspeicher und __DELL ECS__ für Objektspeicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __Opensource Stack__, der eine zuverlässige und bewährte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen bietet.

Diese Architektur basiert auf dem __VersaStack__-Modell, einer Allianz zwischen Cisco und IBM, die eine umfassende Kompatibilität mit führenden Softwareanbietern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig über APIs und einen Terraform-Provider automatisiert, bietet das IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- __Dedizierte Ressourcen__: Rechenblades, Speichervolumen und Software-Stacks (Virtualisierung, Backup, Firewall usw.) werden niemals zwischen Kunden geteilt.
- __Maximale Vorhersehbarkeit__: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf den Speicher und profitieren von einer klaren Abrechnung auf monatlicher Verbrauchsbasis.

Die Plattform ist __SecNumCloud__-qualifiziert durch die [ANSSI](https://www.ssi.gouv.fr/) und garantiert ein hohes Maß an Automatisierung und Sicherheit.

## Hauptmerkmale

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- Bedarfsgerechter Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Cross-Backups mit konfigurierbarer Aufbewahrung.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Verwaltung über die [Shiva-Konsole](../console/console.md) oder im Infrastructure-as-Code-Modus mit APIs und dem Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                  |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Digitales Vertrauen  | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                             |
| Sicherheit           | Hochsichere Plattform, qualifiziert nach __SecNumCloud__, __HDS__ (Gesundheitsdaten-Hosting), __ISO 27001__ und __ISAE 3402 Typ II__.         |
| Hohe Verfügbarkeit   | Plattformverfügbarkeitsrate von 99,99%, monatlich gemessen, einschließlich Wartungsfenstern.                                                  |
| Resilienz            | Implementierung von Geschäftskontinuitäts- oder Notfallwiederherstellungsplänen je nach Bedarf.                                               |
| Automatisierung      | Vollständig automatisierte Plattform, konzipiert für die Integration in ein digitales Transformationsprogramm.                                 |
| On Demand            | Ressourcen auf Abruf verfügbar.                                                                                                               |

## Regionen und Verfügbarkeitszonen

Das OpenIaaS-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine Verfügbarkeitszone ist Teil einer Region.

Diese Art der Bereitstellung ermöglicht es Ihnen, den Standort von Clustern zu wählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Implementierung eines Disaster Recovery Plans (DRP) im Falle eines Vorfalls.

---

## Rechenblades-Klassen

Die für das Bare Metal-Angebot verfügbaren Rechenblades bieten eine Reihe von Leistungsmerkmalen, um verschiedene Anforderungen zu erfüllen:

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder äquivalent)  | 20 / 40 Threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder äquivalent)    | 48 / 96 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder äquivalent) | 16 / 32 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder äquivalent)    | 36 / 72 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder äquivalent)    | 56 / 112 Threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB |

### Hinweise

- __(1)__ Die Speichermenge ist die physisch auf den Blades verfügbare und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbo-Frequenz.
- __(3)__ Die physische Konnektivität wird für Netzwerkzugriff und Blockspeicherzugriff gemeinsam genutzt, dank einer konvergenten Cisco UCS-Architektur.
- __(4)__ Verfügbare GPUs entwickeln sich entsprechend den neuesten Technologien. Ab dem 1. Mai 2024 umfasst das Angebot NVIDIA LOVELACE L40S GPUs.
- __(5)__ Die Hochverfügbarkeit auf einem Cluster ist nur ab 2 Knoten verfügbar.

Die Verfügbarkeit der Infrastruktur wird mit 99,9% garantiert, monatlich gemessen, einschließlich Wartungsfenstern. Jede Anfrage im Zusammenhang mit dem SLA muss über ein Incident-Ticket gemeldet werden.

---

## Blockspeicherklassen

Verteilter Blockspeicher, basierend auf __IBM Spectrum Virtualize__, bietet eine Reihe von Leistungsmerkmalen, die an verschiedene Anwendungsfälle angepasst sind:

| Referenz                         | IOPS/TB                 | Hauptverwendung                       |
|-----------------------------------|-------------------------|---------------------------------------|
| __FLASH - Essentiel__             | 500                     | Leichte Workloads                     |
| __FLASH - Standard__              | 1500                    | Standard-Workloads                    |
| __FLASH - Premium__               | 3000                    | Intensive Workloads                   |
| __FLASH - Enterprise__            | 7500                    | Kritische Workloads                   |
| __FLASH - Ultra__                 | 15000                   | Ultra-intensive Workloads             |
| __MASS STORAGE - Archivierung__   | Nicht anwendbar         | Wirtschaftlicher Speicher für Archivierung |

### Eigenschaften

- __Technologie__: NVMe Flash mit __Distributed RAID 6__ für erhöhte Resilienz.
- __Verfügbarkeit__: 99,99%, monatlich gemessen.
- __Einschränkungen__: Keine Begrenzung bei Lese- oder Schreibvorgängen. Keine automatische Komprimierung oder Deduplizierung, was die vollständige Nutzung der reservierten Volumes gewährleistet.

---

## Netzwerke

Das OpenIaaS-Produkt ist kompatibel mit [privaten Netzwerken](../network/private_network) und [Internetzugang](../network/internet).

Zwei Arten von Netzwerken sind über die Konfiguration einer virtuellen Maschine verfügbar.

### VLAN-Typ-Netzwerke

VLAN-Typ-Netzwerke werden mit einem VLAN pro Netzwerkkarte propagiert. Wenn Sie mehrere Netzwerke verwenden möchten, erstellen Sie einfach mehrere Netzwerkkarten.

Es gibt eine Begrenzung der maximalen Anzahl von Karten, die auf einer VM erstellt werden können, nämlich 7.

### VLAN TRUNK

Falls Sie mehr als 7 VLANs propagieren müssen, müssen Sie den VLAN Trunk verwenden.
Der VLAN Trunk ermöglicht es, alle Ihre VLANs über eine einzige Karte zu leiten. Die Konfiguration der VLAN-IDs erfolgt über virtuelle Schnittstellen vom Typ VLAN aus dem Betriebssystem der VM. Die VLAN-IDs sind dieselben wie die, die in der Konsole sichtbar sind.

## Backup virtueller Maschinen

Cloud Temple bietet __eine native und nicht abschaltbare verteilte Backup-Architektur__, ein obligatorisches Element im Rahmen der französischen SecNumCloud-Qualifikation.

Backups werden auf der [SecNumCloud-qualifizierten Objektspeicherlösung](../storage/oss) gespeichert, was optimalen Schutz bei einem größeren Ausfall des Produktionsdatencenters gewährleistet. Dieser Ansatz ermöglicht es Ihnen, Ihre Daten auf ein sekundäres Rechenzentrum wiederherzustellen, selbst im Falle eines kritischen Vorfalls wie eines Brandes.

Diese umfassende Lösung umfasst:

- Hot Off-Site-Backup aller Festplatten
- Wiederherstellungsflexibilität, die es Ihnen ermöglicht, den Wiederherstellungspunkt und -ort zu wählen

Die Backup-Infrastruktur basiert auf einer agentenlosen Opensource-Technologie, die Benutzerfreundlichkeit und Prozessautomatisierung kombiniert. Diese Lösung optimiert die Nutzung des Speicherplatzes bei gleichzeitiger Aufrechterhaltung hoher Leistung.

Die Backup- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab. Die Backup-Richtlinie ist für jede virtuelle Maschine vollständig über [die Cloud Temple-Konsole](../console/console.md) konfigurierbar.

__Wichtiger Hinweis:__

*Einige virtuelle Maschinen sind nicht mit dieser Backup-Technologie kompatibel*, die die Snapshot-Mechanismen des Hypervisors nutzt. Dies sind typischerweise Maschinen, deren Festplattenschreiblasten konstant sind. In diesen Fällen kann der Hypervisor den Snapshot nicht abschließen, was ein Einfrieren der virtuellen Maschine erfordert, um den Vorgang abzuschließen. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht unterbrechbar.

Die empfohlene Lösung besteht darin, die von permanenten Schreibvorgängen betroffene Festplatte auszuschließen und die Daten mit einer alternativen Methode zu sichern.

| Referenz                                    | Einheit | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| BACKUP - Servicezugang                      | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Erstellen einer Backup-Richtlinie

Um eine neue Backup-Richtlinie hinzuzufügen, muss eine Anfrage an den Support gestellt werden, der über das Rettungsring-Symbol oben rechts in der Benutzeroberfläche zugänglich ist.

Die Erstellung einer neuen Backup-Richtlinie erfolgt durch __eine Serviceanfrage__, die Folgendes angibt:

- Den Namen Ihrer Organisation
- Kontaktdaten (E-Mail und Telefon) zur Fertigstellung der Konfiguration
- Den Tenant-Namen
- Den Namen der Backup-Richtlinie
- Die gewünschten Eigenschaften (x Tage, y Wochen, z Monate, ...)

## Virtuelle Maschinen

### vCPU-Ressourcenverwaltung

Änderungen an vCPU-Ressourcen werden kalt durchgeführt (Maschine ausgeschaltet). Die Plattform unterstützt bis zu 254 vCPUs pro virtueller Maschine (theoretisches Limit), mit schlüssigen Tests, die auf Linux-VMs mit 128 vCPUs durchgeführt wurden.

Es ist wichtig zu beachten, dass die Unterstützung des Gastbetriebssystems ein entscheidender Faktor bei der Zuweisung von Ressourcen ist. Eine Zuweisung, die die vom Betriebssystem unterstützten Grenzen überschreitet, kann zu erheblichen Leistungsproblemen führen.

### Speicherressourcenverwaltung

Speicheränderungen werden ebenfalls kalt durchgeführt. Die Grenzen sind wie folgt:

- 1,5 TiB mit Unterstützung für Speicher-Snapshots
- 8 TiB ohne Unterstützung für Speicher-Snapshots
- 16 TiB (theoretisches Limit ohne Sicherheitsunterstützung, abzüglich des RAM, der Xen und der Kontrolldomäne zugewiesen ist)

Der tatsächlich nutzbare Speicher kann durch das Gastbetriebssystem begrenzt sein. Das Überschreiten der vom Gast-Betriebssystem unterstützten Grenzen kann zu Leistungseinbußen führen.

### Festplattenverwaltung

- Die maximale Größe einer Festplatte beträgt 2 TB
- Festplatten verwenden das Standard-VHD-Format
- Die maximale Anzahl virtueller Festplatten pro virtueller Maschine, einschließlich CD-ROM-Laufwerken, beträgt 24

Es ist nicht möglich, Festplatten nach der Erstellung zu vergrößern. Um die Speicherkapazität zu erweitern, ist es notwendig, eine neue Festplatte zu erstellen.

## Kataloge

Der Katalog ermöglicht die Verwaltung von drei Arten wesentlicher Elemente:

- Festplattenimages (ISO)
- Konfigurationsvorlagen
- Vorinstallierte Vorlagen für virtuelle Maschinen

In der Detailansicht einer Vorlage für virtuelle Maschinen können Sie wichtige Informationen wie Standort, Anzahl der Festplatten oder Anzahl der Netzwerkadapter einsehen.

Wenn die Anzahl der virtuellen Festplatten mit 0 angegeben ist, bedeutet dies, dass es sich um eine Konfigurationsvorlage ohne vorinstalliertes Betriebssystem handelt, die es Ihnen ermöglicht, Ihre eigene angepasste Umgebung zu implementieren.

## Hochverfügbarkeit

Die Hochverfügbarkeit ermöglicht es, die Servicekontinuität der virtuellen Maschinen (VMs) bei einem Ausfall eines physischen Hosts innerhalb eines OpenIaaS-Pools zu gewährleisten.
Mit der Hochverfügbarkeit (HA) sendet jeder Host im Pool regelmäßig Lebenszeichen an seine Peers über den gemeinsam genutzten Speicher (Block Storage Heartbeat). Bei längerer Abwesenheit einer Antwort wird der Host als ausgefallen betrachtet.

Ein als Heartbeat bezeichneter Block Storage bedeutet, dass er als Basis für die Authentifizierung von Hosts dient, die nicht mehr antworten.

Damit die Hochverfügbarkeit in einem OpenIaaS-Pool ordnungsgemäß konfiguriert ist, ist es unerlässlich, **mindestens zwei verbundene Hosts** zu haben.

Jede VM muss mit einer Prioritätsstufe für den Neustart bei Hochverfügbarkeit konfiguriert werden:

#### Disabled
  Wenn eine ungeschützte VM oder ihr Host gestoppt wird, wird die Hochverfügbarkeit **nicht versuchen, die VM neu zu starten**.

#### Restart
  Wenn eine geschützte VM nicht sofort nach einem Serverausfall neu gestartet werden kann, wird die Hochverfügbarkeit **versuchen, sie später neu zu starten**, wenn zusätzliche Kapazität im Pool verfügbar wird. Es gibt jedoch **keine Garantie, dass dieser Versuch erfolgreich sein wird**.

#### Best-Effort  
  Für VMs, die im *Best-Effort*-Modus konfiguriert sind, wird die Hochverfügbarkeit **versuchen, sie auf einem anderen Host neu zu starten**, wenn ihr ursprünglicher Host ausfällt.  
  Dieser Versuch **erfolgt nur nach dem erfolgreichen Neustart aller VMs, die im "Restart"-Modus konfiguriert sind**.  
  Die Hochverfügbarkeit **macht nur einen Neustart-Versuch** für eine VM im *Best-Effort*-Modus; wenn er fehlschlägt, **wird kein weiterer Versuch unternommen**.
