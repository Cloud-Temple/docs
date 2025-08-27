---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple ist darauf ausgelegt, kritischen Anforderungen an Kontinuität und Wiederherstellung zu entsprechen, mit besonderem Fokus auf anspruchsvolle Sektoren wie Industrie, Banken und Versicherungen. Auf führenden Technologien basierend, gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige technologische Plattform

Die IaaS-Plattform von Cloud Temple basiert auf international renommierten Technologiepartnern:

- Berechnung: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Blockspeicher und __DELL ECS__ für Objektspeicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __Open-Source-Stack__, der eine zuverlässige und bewährte Basis für die Verwaltung Ihrer Cloud-Umgebungen bietet.

Diese Architektur basiert auf dem Modell __VersaStack__, einer Allianz zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den führenden Softwareherstellern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig automatisiert durch APIs und einen Terraform-Provider, bietet die IaaS-Offerte von Cloud Temple eine einzigartige Infrastruktur:

- __Dedizierte Ressourcen__: Compute-Blades, Speichervolumina und Software-Stacks (Virtualisierung, Backup, Firewalling, usw.) werden nie zwischen den Kunden geteilt.
- __Maximale Vorhersagbarkeit__: Sie kontrollieren die Virtualisierungsrate, die IOPS-Last auf dem Speicher und profitieren von einer klaren Abrechnung, nach monatlichem Verbrauch.

Die Plattform ist __SecNumCloud__-zertifiziert durch die [ANSSI](https://www.ssi.gouv.fr/), was einen hohen Automatisierungs- und Sicherheitsstandard garantiert.

## Hauptfunktionen

- Dedizierte und nachfragebasierte Rechenressourcen (CPU, RAM).
- Nachfragebasiertes Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreisbackup mit konfigurierbarer Aufbewahrungszeit.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Shiva-Konsole](../console/console.md) oder im Infrastructure-as-Code-Modus über APIs und den Terraform-Anbieter.

## Vorteile

| Vorteil             | Beschreibung                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Datenhosting in Frankreich und Einhaltung der DSGVO.                                                                                          |
| Sicherheit          | Sehr sichere Plattform, zertifiziert __SecNumCloud__, __HDS__ (Hébergement des Données de Santé), __ISO 27001__ und __ISAE 3402 Type II__. |
| Hohe Verfügbarkeit  | Verfügbarsatz der Plattform von 99,99 %, monatlich gemessen, Wartungsfenster eingeschlossen.                                        |
| Resilienz           | Einrichtung von Kontinuitäts- oder Wiederherstellungsplänen nach Bedarf.                                                               |
| Automatisierung     | Vollständig automatisierte Plattform, die für die Integration in ein Digitalisierungsprogramm konzipiert ist.                                        |
| On Demand           | Ressourcen auf Anfrage verfügbar.                                                                                                          |

## Regionen und Verfügbarkeitszonen

Das Produkt OpenIaaS wird in einer Verfügbarkeitszone bereitgestellt.
Eine Verfügbarkeitszone ist Teil einer Region.

Dieses Deployment-Modell ermöglicht die Auswahl der Standorte der Cluster und deren Verteilung auf verschiedene Verfügbarkeitszonen (AZ). 
Es bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Disaster Recovery Plans (DRP) im Falle eines Vorfalls.

## Server-Blade-Klassen

Die verfügbaren Bare-Metal-Blades bieten eine Reihe von Leistungsmerkmalen, um verschiedene Anforderungen zu erfüllen:

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl Kerne / Threads | Verbindung __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder Äquivalent)  | 20 / 40 Threads           | 2 x 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder Äquivalent)  | 32 / 64 Threads           | 2 x 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder Äquivalent)    | 48 / 96 Threads           | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder Äquivalent) | 16 / 32 Threads           | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder Äquivalent)    | 36 / 72 Threads           | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder Äquivalent)    | 56 / 112 Threads          | 2 x 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder Äquivalent)  | 32 / 64 Threads           | 2 x 25 Gbit/s        | 2 x NVIDIA L40S 48 GB |

### Hinweise

- __(1)__ Die Menge an RAM ist die physisch verfügbare auf den Blades und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der Mindestbasisfrequenz und der Turbo-Frequenz.
- __(3)__ Die physische Verbindung wird für den Netzwerk- und Blockspeicherzugriff gemeinsam genutzt, dank der konvergenten Cisco UCS-Architektur.
- __(4)__ Die verfügbaren GPUs entwickeln sich entsprechend der neuesten Technologien. Bis zum 1. Mai 2024 umfasst das Angebot NVIDIA LOVELACE L40S-GPUs.
- __(5)__ Die hohe Verfügbarkeit in einem Cluster ist nur ab 2 Knoten verfügbar.

Die Verfügbarkheit der Infrastruktur ist mit 99,9 % garantiert, monatlich gemessen, Wartungszeiträume eingeschlossen. Alle SLA-bezogenen Anfragen müssen über ein Incident-Ticket gemeldet werden.

## Blockspeicher-Klassen

Der verteilte Blockspeicher, basierend auf __IBM Spectrum Virtualize__, bietet eine Reihe von Leistungsmerkmalen, die sich an verschiedene Anwendungsfälle anpassen:

| Referenz                          | IOPS/To                 | Hauptanwendung                         |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Grundlegend__           | 500                     | Leichte Workloads                      |
| __FLASH - Standard__              | 1500                    | Standard-Workloads                     |
| __FLASH - Premium__               | 3000                    | Intensive Workloads                    |
| __FLASH - Enterprise__            | 7500                    | Kritische Workloads                    |
| __FLASH - Ultra__                 | 15000                   | Ultra-intensive Workloads              |
| __MASS STORAGE - Archivierung__   | Nicht anwendbar         | Wirtschaftlicher Speicher für Archivierung |

### Eigenschaften

- __Technologie__ : Flash NVMe mit __verteiltem RAID 6__ für erhöhte Resilienz.
- __Verfügbarkeit__ : 99,99 %, monatlich gemessen.
- __Einschränkungen__ : Keine Begrenzung für Lese- oder Schreibvorgänge. Keine automatische Komprimierung oder Deduplizierung, die die volle Nutzung der reservierten Volumes sicherstellt.

## Netzwerke

Das Produkt OpenIaaS ist kompatibel mit [private Netzwerke](../network/private_network) und [Internet-Zugang](../network/internet).

Zwei Arten von Netzwerken sind aus der Konfiguration einer virtuellen Maschine verfügbar.

### VLAN-Netzwerke

VLAN-Netzwerke sollten pro Netzwerkkarte ein VLAN eingerichtet werden. Wenn Sie mehrere Netzwerke verwenden möchten, reicht es aus, mehrere Netzwerkkarten zu erstellen.

Eine Einschränkung besteht bei der maximalen Anzahl von Karten, die auf einer VM erstellt werden können, und beträgt 7.

### Der VLAN TRUNK

Wenn Sie mehr als 7 VLANs verbreiten müssen, müssen Sie den VLAN Trunk verwenden.
Der VLAN Trunk lässt alle Ihre VLANs über eine einzige Karte durch. Die Konfiguration der VLAN-IDs ist über virtuelle VLAN-Schnittstellen von der VM-OS durchzuführen. Die VLAN-IDs sind die gleichen wie diejenigen, die in der Konsole vorhanden und sichtbar sind.

## Virtuelle Maschinen-Backups

Cloud Temple bietet eine __nativ und unverzichtbare verteilte Backup-Architektur__, ein zwingender Bestandteil der französischen SecNumCloud-Zertifizierung.

Die Backups werden auf der [qualifizierten SecNumCloud-Objektspeicherlösung](../storage/oss) gespeichert, was eine optimale Schutzgarantie bei einem schweren Ausfall des Produktionsrechenzentrums gewährleistet. Dieser Ansatz ermöglicht die Wiederherstellung Ihrer Daten in einem sekundären Rechenzentrum, selbst bei kritischen Zwischenfällen wie einem Brand.

Diese umfassende Lösung umfasst:

- Der **Hot Backup** aller Festplatten aus der Ferne
- Eine Wiederherstellungsflexibilität, die die Wahl des Wiederherstellungspunkts und der Standortwahl ermöglicht

Die Backup-Infrastruktur basiert auf einer opensource-Technologie mit agentenloser Architektur, die die Benutzerfreundlichkeit und die Automatisierung der Prozesse verbindet. Diese Lösung optimiert die Speicherauslastung und gewährleistet gleichzeitig hohe Leistungen.

Die Backup- und Wiederherstellungsgeschwindigkeiten hängen vom Änderungsgrad in den Umgebungen ab. Die Backup-Politik ist vollständig konfigurierbar über [die Cloud Temple Console](../console/console.md) für jede virtuelle Maschine.

__Wichtiger Hinweis:__

*Einige virtuelle Maschinen sind nicht mit dieser Backup-Technologie kompatibel*, die die Schnappschuss-Mechanismen des Hypervisors verwendet. Dies betrifft typischerweise Maschinen mit konstanten Schreiblasten auf der Festplatte. In diesen Fällen kann der Hypervisor den Schnappschuss nicht abschließen, was das Einfrieren der virtuellen Maschine erfordert, um den Vorgang abzuschließen. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht unterbrechbar.

Die empfohlene Lösung besteht darin, die Festplatte, die durch dauerhafte Schreibvorgänge betroffen ist, auszuschließen und die Daten mit einer alternativen Methode zu sichern.

| Referenz                                    | Einheit | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SAUVEGARDE - Zugriff auf den Dienst                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

### Erstellung einer Backup-Politik

Um eine neue Backup-Politik hinzuzufügen, muss eine Anfrage an den Support gesendet werden, über das Support-Icon in der oberen rechten Ecke der Oberfläche zugänglich.

Die Erstellung einer neuen Backup-Politik erfolgt über __eine Serviceanfrage__ mit folgenden Angaben:

- Der Name Ihrer Organisation
- Die Kontaktdaten eines Kontakts (E-Mail und Telefon) zur Abschlusskonfiguration
- Der Name des Mandanten
- Der Name der Backup-Politik
- Die gewünschten Merkmale (x Tage, y Wochen, z Monate, ...)

## Virtuelle Maschinen

### Verwaltung der vCPU-Ressourcen

Die Änderungen der vCPU-Ressourcen erfolgen kalt (Maschine aus). Die Plattform unterstützt bis zu 254 vCPUs pro virtueller Maschine (theoretische Grenze), wobei erfolgreiche Tests auf Linux-VMs mit 128 vCPUs durchgeführt wurden.

Es ist wichtig zu beachten, dass die Unterstützung des Gast-Betriebssystems ein entscheidender Faktor bei der Ressourcenbereitstellung ist. Eine Zuweisung, die die von dem Betriebssystem unterstützten Grenzen überschreitet, kann zu erheblichen Leistungsproblemen führen.

### Speichermanagement

Die Speicheränderungen erfolgen ebenfalls bei kühler Temperatur. Die Grenzen sind wie folgt:

- 1,5 TiB mit Unterstützung von Speicher-Snapshots
- 8 TiB ohne Unterstützung von Speicher-Snapshots
- 16 TiB (theoretische Obergrenze ohne Sicherheitsunterstützung, abzüglich des RAM, der Xen und dem Kontrolldomäne zugewiesen ist)

Die tatsächlich verwendbare Speicher kann durch das Gast-Betriebssystem eingeschränkt sein. Die Überschreitung der vom Gast-OS unterstützten Grenzen kann zu Leistungsabfällen führen.

### Datenträgerverwaltung

- Die maximale Größe eines Datenträgers beträgt 2 TB
- Die Datenträger verwenden das Standard-VHD-Format
- Die maximale Anzahl virtueller Datenträger pro virtueller Maschine, einschließlich CD-ROM-Laufwerke, beträgt 24

Es ist nicht möglich, die Datenträger nach ihrer Erstellung zu vergrößern. Um die Speicherkapazität zu erweitern, ist es erforderlich, einen neuen Datenträger zu erstellen.

### Tools für virtuelle Maschinen
Diese Tools werden verwendet, um einen optimalen Betrieb der virtuellen Maschinen zu gewährleisten. Wenn Sie eine Aktion durchführen möchten und eines dieser Tools erforderlich ist, wird eine Nachricht auf der Cloud Temple-Konsole angezeigt.
Um diese Tools zu installieren, können Sie die offiziellen Xen Server-Websites konsultieren, um ein präzises Verfahren entsprechend Ihrem Betriebssystem zu erhalten.

#### Management Agent
Der Management Agent ist eine Komponente, die in jeder virtuellen Maschine installiert wird. Er ermöglicht es dem Hypervisor, die Maschine besser zu verwalten, indem er Zugang zu mehr Informationen hat und bestimmte Aktionen sauberer durchführen kann.

#### PV Drivers (Paravirtualization Drivers)
PV Drivers sind Treiber, die in der virtuellen Maschine installiert werden, um ihre Leistung zu verbessern.
Ohne diese Treiber funktioniert die Maschine, aber langsamer. Außerdem ermöglichen sie bestimmte erweiterte Aktionen.
PV Drivers sind nativ auf der Mehrheit der aktuellen Linux-Kernel installiert.

#### Tools
Tools sind eine Sammlung von Softwarekomponenten, die die Integration der virtuellen Maschine mit der Virtualisierungsinfrastruktur verbessern.

## Kataloge

Der Katalog ermöglicht die Verwaltung von drei Arten von wesentlichen Elementen:

- Die Festplattenbilder (ISO)
- Die Konfigurationstemplate
- Die vorinstallierten virtuellen Maschinentemplates

In der detaillierten Ansicht eines virtuellen Maschinentemplates können Sie kritische Informationen wie die Position, die Anzahl der Festplatten oder die Anzahl der Netzwerkkarten einsehen.

Wenn die Anzahl der virtuellen Festplatten als 0 angegeben ist, handelt es sich um ein Konfigurationstemplate ohne vorinstalliertes Betriebssystem, wodurch Ihnen das Bereitstellen Ihrer eigenen benutzerdefinierten Umgebung ermöglicht wird.

## Replikation virtueller Maschinen

Die __Replikation virtueller Maschinen__ von Cloud Temple gewährleistet den Schutz und die Kontinuität Ihrer kritischen Daten durch eine automatisierte Kopie Ihrer Umgebungen in eine separate Verfügbarkeitszone. Diese Funktionalität, nativ in das IaaS Open Source-Angebot integriert, erfüllt die strengsten Anforderungen an Geschäftskontinuität und Disaster Recovery.

### Automatisierter und sicherer Schutz

Die Replikation von Cloud Temple basiert auf einer __SecNumCloud-zertifizierten__ Infrastruktur und gewährleistet:

- __Asynchrone Replikation__: Kontinuierliche Kopie Ihrer virtuellen Maschinen ohne Auswirkungen auf die Produktionsleistung
- __Geografische Trennung__: Speicherung der Replikas in einer anderen Verfügbarkeitszone als die Quelle
- __Vollständige Automatisierung__: Vollständig automatisierter Prozess über die [Cloud Temple Console](../console/console.md)
- __Regulatorische Compliance__: Einhaltung der Backup- und Geschäftskontinuitätsanforderungen

### Vorteile der Replikation

| Vorteil                 | Beschreibung                                                                                                                                   |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Geschäftskontinuität    | Schutz Ihrer kritischen Services bei einem schweren Vorfall am Hauptstandort.                                                                 |
| Geografischer Schutz    | Replikation in eine separate Verfügbarkeitszone, Schutz vor lokalisierten Katastrophen.                                                      |
| Zeitliche Flexibilität  | Wahl des Replikationsintervalls nach Ihren Bedürfnissen: von 1 Minute bis 24 Stunden.                                                        |
| Einfache Verwaltung     | Konfiguration und Überwachung vollständig in die Cloud Temple Console integriert.                                                             |
| SecNumCloud-Compliance  | Zertifizierte Infrastruktur, die das höchste Sicherheitsniveau für Ihre sensiblen Daten gewährleistet.                                       |

### Konfiguration der Replikation

#### Replikationsrichtlinien

Die Erstellung einer Replikationsrichtlinie definiert die Schutzparameter Ihrer virtuellen Maschinen:

- __Ziel__: Auswahl des Zielspeicher in der Replikations-Verfügbarkeitszone
- __Häufigkeit__: Replikationsintervall angepasst an Ihre Recovery-Bedürfnisse (RPO)
- __Aufbewahrung__: Anzahl der aufbewahrten Wiederherstellungspunkte

#### Verfügbare Intervalle

| Intervall               | Empfohlene Verwendung                      | RPO (Max. Datenverlust)     |
|-------------------------|--------------------------------------------|-----------------------------|
| __1 bis 59 Minuten__    | Kritische Echtzeitanwendungen             | < 1 Stunde                  |
| __1 bis 24 Stunden__    | Geschäftsanwendungen und Standardumgebungen | < 24 Stunden              |

#### Zuordnung virtueller Maschinen

Sobald die Richtlinie erstellt ist, können Sie Ihre zu schützenden virtuellen Maschinen zuordnen:

- __Einfache Auswahl__: Auswahl der VMs über die Console-Oberfläche
- __Automatische Validierung__: Überprüfung der Kompatibilität und Voraussetzungen
- __Sofortige Aktivierung__: Automatischer Start der Replikation nach Konfiguration

### Verwaltung der Replikas

#### Ansicht der Richtlinien

Die Cloud Temple Console bietet eine zentrale Ansicht Ihrer Replikationsrichtlinien mit:

- Name und Häufigkeit jeder Richtlinie
- Ziel-Verfügbarkeitszone
- Zugeordneter Pool und Speicher
- Verfügbare Verwaltungsaktionen

#### Ansicht der Replikas

Die Replikas-Tabelle ermöglicht Ihnen die Visualisierung:

- Name der replizierten virtuellen Maschinen
- Quell- und Zielstandort
- Zugeordnete Replikationsrichtlinie
- Export der Daten im CSV-Format

### Best Practices

#### Empfehlungen nach Workload-Typ

- __Kritische Anwendungen__: Replikation alle 1-30 Minuten zur Minimierung des Datenverlusts
- __Geschäftsanwendungen__: Stündliche oder zweistündliche Replikation je nach Bedarf
- __Entwicklungsumgebungen__: Tägliche Replikation in der Regel ausreichend

#### Richtlinienplanung

- Erstellen Sie separate Richtlinien entsprechend der Kritikalität Ihrer Anwendungen
- Benennen Sie Ihre Richtlinien klar zur Erleichterung der Verwaltung
- Überprüfen Sie regelmäßig den Status Ihrer Replikas über die Console
- Dokumentieren Sie Ihre Replikationsstrategie für Ihre Teams

__Wichtiger Hinweis:__

*Die Replikation ersetzt keine vollständige Backup-Strategie. Sie stellt eine wesentliche Ergänzung zur Gewährleistung der Geschäftskontinuität bei einem schweren Vorfall an Ihrem Hauptstandort dar.*

---

## Hochverfügbarkeit

Die Hochverfügbarkeit stellt sicher, dass die Dienstkontinuität der virtuellen Maschinen (VM) gewährleistet ist, falls ein physischer Host innerhalb eines OpenIaaS-Pools ausfällt.
Mit der Hochverfügbarkeit (HA) sendet jeder Host im Pool regelmäßig Lebenszeichen an seine Peers über den gemeinsam genutzten Speicher (Block Storage Heartbeat). Falls ein Host über einen längeren Zeitraum keine Antwort gibt, wird er als fehlerhaft betrachtet.

Ein als Heartbeat bezeichneter Block-Speicher bedeutet, dass er als Grundlage zur Authentifizierung von Hosts dienen wird, die nicht mehr antworten.

Damit die Hochverfügbarkeit in einem OpenIaaS-Pool korrekt konfiguriert ist, ist es unerlässlich, **mindestens zwei Hosts** verbunden zu haben.

Jede VM muss mit einem Wiederanlauf-Prioritätsniveau für die Hochverfügbarkeit konfiguriert sein:

#### Deaktiviert
Die Hochverfügbarkeit ist nicht konfiguriert. Bei einem Ausfall des Hosts wird die virtuelle Maschine nicht neu gestartet.

#### Restart
Bei einem Ausfall des Hosts wird die virtuelle Maschine automatisch neu gestartet, sobald Ressourcen im Pool verfügbar sind. Virtuelle Maschinen, die im "Restart"-Modus konfiguriert sind, werden priorisiert behandelt, vor denen, die im "Best-Effort"-Modus konfiguriert sind.

#### Best-Effort  
Bei einem Host-Down-Case wird die virtuelle Maschine nur automatisch neu gestartet, wenn nach der Verarbeitung aller im "Restart"-Modus konfigurierten virtuellen Maschinen noch Ressourcen verfügbar sind. Der "Best-Effort"-Modus führt nur einen Versuch durch, daher wird die virtuelle Maschine bei unzureichenden Ressourcen nicht neu gestartet.
