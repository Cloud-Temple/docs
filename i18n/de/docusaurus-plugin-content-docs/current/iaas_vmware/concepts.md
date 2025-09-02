---
Titel: Konzepte
---

Die Cloud-Angebot __IaaS (Infrastructure as a Service)__ von Cloud Temple ist konzipiert, um kritische Anforderungen an die Kontinuität und Wiederbelebung zu erfüllen, mit einem besonderen Fokus auf Branchen, die hohe Anforderungen stellen wie Industrie, Finanzwesen und Versicherung. Auf Basis von Hochleistungs-Technologien garantiert diese Infrastruktur eine maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Lasten.

## Eine vertrauenswürdige technologische Plattform

Die IaaS-Plattform von Cloud Temple stützt sich auf renommierte internationale Technologiepartner:

- Berechnung: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Block-Speicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __VMware__, bietet eine zuverlässige und bewährte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen.
- Backup: __IBM Spectrum Protect Plus__, für die Orchestrierung und Speicherung von Backups.

Diese Architektur basiert auf dem __VersaStack__-Modell, einer Allianz zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den wichtigsten Software-Herstellern gewährleistet.

## Eine automatisierte, spezialisierte Infrastruktur

Obwohl die Cloud-Infrastruktur von Cloud Temple vollständig automatisiert wird durch APIs und Terraform, bietet sie eine einzigartige Lösung IaaS:

- **Dedizierte Ressourcen**: Die Rechenzentrumsrechner, Speichermedien und Softwarestacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen den Kunden verteilt.
- **Maximale Vorhersehbarkeit**: Sie haben die Virtualisierungsrate, die IOPS auf dem Speicher und profitieren von einer klar strukturierten Rechnung nach monatlicher Nutzung.

Die Plattform erfüllt die Anforderungen an **SecNumCloud** durch die [ANSSI](https://www.ssi.gouv.fr/), was einen hohen Automatisierungs- und Sicherheitsstandard garantiert.

## Hauptfunktionen

- Dedizierte und auf Anforderung bereitgestellte Rechenressourcen (CPU, RAM).
- Speicher auf Anforderung (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuzspeicherung mit konfigurierbarer Rettungsstelle.
- Asynchrone Replikation für Speicher oder virtuellen Server.
- Steuerung über die [Shiva-Konsole](../console/console.md) oder durch Infrastructure as Code via APIs und Terraform-Provider.

## Vorteile

| Vorteil            | Beschreibung                                                                                                                                   |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Vertrauen digitaler | Speicherung von Daten in Frankreich und Einhaltung der RGPD.                                                                                       |
| Sicherheit          | Plattform hochgesichert, zertifiziert __SecNumCloud__, __HDS__ (Speicherung von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__. |  
| Hohe Verfügbarkeit | Messwert der Plattformverfügbarkeit von 99,99% (monatlich), einschließlich Wartungszeiten.                                                        |
| Widerstandsfähigkeit | Implementierung von Notfallplänen nach Bedarf.                                                                                                      |
| Automatisierung      | Plattform vollständig automatisiert und konzipiert für die Integration in einen Digitalisierungs-Programm.                                       |
| Nach Bedarf verfügbar | Ressourcen zur Verfügung gestellt, sobald sie benötigt werden.                                                                                  |

## Regionen und Verfügbarkeitszonen

Das IaaS-Produkt VMware wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Art des Deployment ermöglicht es, die Lokalisierung der Cluster auszuwählen und diese auf verschiedenen Verfügbarkeitszonen (AZ) zu verteilen.
Dadurch wird eine bessere Lastverteilung erreicht, maximiert die Redundanz und vereinfacht die Einrichtung eines Notfall-Wiederherstellungsplans (DRP) im Falle eines Störungsfalls.

---

## Berechnung

Die von Cloud Temple bereitgestellten Blades sind entweder vom Typ __CISCO UCS B200__ oder vom Typ __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware-Updates, Betriebssystemversionen usw.) über die Cloud Temple-Konsole.

Mehrere Kategorien von Rechenblades sind im Katalog verfügbar, um Ihren Arbeitslastenanforderungen gerecht zu werden (Virtualisierung, Containerisierung usw.). Jede weist unterschiedliche Eigenschaften und Leistungen auf. Der Katalog der Rechenblades entwickelt sich regelmäßig weiter.

Im Kontext eines Virtualisierungsangebots besteht ein Hypervisor-Cluster ausschließlich aus Rechenblades desselben Typs (es ist nicht möglich, Blades verschiedener Typen in demselben Cluster zu mischen).

| Referenz              | RAM  __(1)__ | Frequenz __(2)__                          | Anzahl Kerne / Threads     | Konnektivität __(3)__ | GPU __(4)__          | SKU für VMware-Angebot          |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Blade ECO v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder äquivalent) | 20 / 40 Threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Blade STANDARD v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder äquivalent) | 32 / 64 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Blade ADVANCE v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder äquivalent)   | 48 / 96 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Blade PERFORMANCE 1 v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y oder äquivalent)| 16 / 32 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Blade PERFORMANCE 2 v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 oder äquivalent)   | 36 / 72 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Blade PERFORMANCE 3 v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder äquivalent)   | 56 / 112 Threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Blade PERFORMANCE 4 v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder äquivalent) | 32 / 64 Threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Anmerkungen__:

- __(1)__ Die gelieferte Speichermenge entspricht der physisch verfügbaren Menge auf den Blades. Es ist nicht möglich, die physische Speichermenge eines Blades zu ändern.

- __(2)__ Basis-Mindestfrequenz / Turbo-Frequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren für maximale Leistung auf BIOS-Ebene konfiguriert.

- __(3)__ Die physische Konnektivität wird für Netzwerk- und Block-Storage-Zugriff geteilt, da die CISCO-Plattform konvergiert ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot entwickelt sich ständig weiter. Zum 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das PERF4-Blade mit 2 L40S-Karten mit 48 GB RAM geliefert. Kontaktieren Sie den Support für weitere Details, falls erforderlich.

Die Verfügbarkeit des Rechenangebots beträgt 99,99%, monatlich berechnet, einschließlich Wartungsfenster. Die Berechtigung bei Nichteinhaltung des SLA (Service Level Agreement) ist an die Erstellung eines Incident-Tickets gebunden. Sie müssen außerdem mindestens zwei Hosts pro Cluster besitzen und die __High Availability__ (HA)-Funktionalität aktivieren. Diese Funktionalität ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf dem zweiten Hypervisor neu zu starten. Falls eine Verfügbarkeitszone nur einen einzigen Hypervisor enthält, ist der automatische Neustart nicht möglich.

## Netzwerk

Das Netzwerkspeicherdienstleistungsangebot von Cloud Temple basiert auf einer Netzwerkinfrastruktur, die auf der Technologie VPLS (Virtual Private LAN Service) basiert. Diese Infrastruktur ermöglicht eine flexible und leistungsstarke Segmentierung des Netzes, um den spezifischen Anforderungen der Kunden in Bezug auf Verbindung und Isolierung des Netzes gerecht zu werden.

### VLANs von Level 2

Die bereitgestellten VLANs im IaaS-Angebot sind vom Typ **Level 2**, sie bieten eine vollständige Netzwerkisolation sowie eine anpassbare Konfiguration nach Bedarf.

#### Hauptkonzepte

- **Verteilung zwischen Clusters und Availability Zones (AZ)**:
  - VLANs können zwischen verschiedenen AZ und Clustern einesselben Tenants geteilt werden.
- **Inter-Tenant-Verbreitung**:
  - VLANs können zwischen mehreren Tenanten innerhalb derselben Organisation verteilt werden, was interne Kommunikation erleichtert.

### Netzwerkleistung

Die Netzwerkinfrastuktur stellt eine niedrige Latenzzeit für optimale Leistung sicher:

- __Latenz innerhalb eines Availability Zones (AZ)__: Unter __3 ms__.
- __Latenz zwischen AZ__: Unter __5 ms__.

---

### Hauptpunkte


1. **Flexibilität**: Die VLANs können für Umgebungen mit mehreren Clustern und -tenanten angepasst werden.
2. **Hohe Leistung**: Eine geringe Latenzzeit gewährleistet eine schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. **Isolation und Sicherheit**: Die VLANs auf Niveau 2 bieten eine strenge Netzwerksegmentierung, um Daten und Flussdaten zu schützen.

## Storage Block

Cloud Temple bietet mehrere Speicherklassen basierend auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/) und [IBM SVC](https://www.ibm.com/products/san-volume-controller).

Die Technologie __IBM SVC__ liefert den erforderlichen Leistungsniveau für die Umgebungen unserer Kunden durch die große Menge an eingebauter Cache-Speicher in den Kontrollen und die Möglichkeit, die gesamten IOPS eines Servers auf mehrere SAN zu verteilen.

Sie wird auch genutzt, um die Replikation von LUNs des Speichers im Blockmodus zwischen den Verfügbarkeitszonen oder die Durchführung von Wartungsarbeiten an den Speicherbays zu ermöglichen.

Der Speicher besteht hauptsächlich aus FLASH NVME-Speicher für professionelle Lasten. Die Festplatten werden von den Speicherbays in [Distributed RAID 6](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.

Die Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungszwecke mit hoher Effizienz. Mehrere Leistungsstufen sind verfügbar:

| Referenz                         | Einheit | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__:*

- Die tatsächliche Leistung einer Speicherklasse hängt von der tatsächlich bestellten Volumeneinheit ab, basierend auf der Definition "IOPS/To", die als "Limitierung von IOPS pro Tera alloué" bedeutet.
> Daher hat ein Volume von 0,5To in der Speicherklasse 'Standard' eine maximale Leistung von 750 IOPS (Plafond), während ein Volume von 10To in der Klasse 'Ultra' eine maximale Leistung von 150.000 IOPS erreicht.
- Die Leistungsbegrenzung gilt für das Volume, also für die Datastore-Konzept in VMware-Umgebungen.
- Die Verfügbarkeit des Speichers beträgt 99,99% monatlich (inklusive der Wartungszeit), gemessen im Monat.
- Es gibt keine Einschränkung oder Quota für Lesen oder Schreiben,
- Es gibt keine Abrechnung nach IOPS,
- Es gibt keinen Anspruch auf Leistung in der Speicherklasse __'Mass Storage'__,
- Die Mindestgröße einer LUN des Speichers beträgt 500Gio,
- Bei der Verwendung eines Speicherspeichermechanismus zur Replikation muss die Leistung auf beiden Verfügbarkeitszonen identisch sein,
- Es werden keine intelligente Optimierungsmechanismen wie Kompression oder Deduplizierung implementiert: Wenn Sie 10Tio Speicher reservieren, haben Sie physiklich 10Tio verfügbaren Speicher auf den IBM-Maschinen.
- Die LUNs des Speichers sind für das Kundenumfeld vorgesehen.

### Verwendung im Rahmen der VMware-Rechenanlage

Bei der Nutzung von Speicher in Form von Datastore als Teil der VMware-Rechenanlage Cloud Temple müssen Sie folgende wichtigen Aspekte berücksichtigen:

1. **Fichier de swap (.VSWP) beim Start virtueller Maschinen**: Bei jedem Start einer virtuellen Maschine wird ein .VSWP-File der Größe der physischen Speicher entsprechend auf dem Platten angelegt. Daher müssen Sie immer genügend freien Speicherplatz in Ihrem Datastore haben, um die Summe der Speichermenge aller virtuellen Maschinen zu decken. Zum Beispiel benötigen Sie bei einem Datastore mit 1 TiB Speicher und 10 virtuellen Maschinen jeweils 64 GiB Speicherplatz, insgesamt 640 GiB Platz frei zu haben. Andernfalls wird der Start der Maschinen durch die verfügbare Speicheroberfläche für das Erstellen von Swap-Dateien begrenzt.

2. **Speicherplatz für Backups**: Der Backupdienst nutzt Snapshots (Instantanzen). Daher müssen Sie immer ausreichend freien Speicherplatz zur Verfügung haben, um einen Snapshot zu erstellen, wenn eine virtuelle Maschine gesichert wird. Die Größe des Snapshots hängt von der Menge an geschriebenen Daten und dem Zeitaufwand für die Sicherung ab. In der Regel sollten Sie mindestens 10 % Speicherplatz als Reserve für diese Operationen behalten.

3. **Verwaltung dynamischer Festplatten**: Seien Sie vorsichtig bei der Verwendung von dynamischen Festplattensystemen. Ohne eine ordnungsgemäße Überwachung des Speicherbedarfs kann ein Mangel an physischem Speicher zu einem Stillstand (Freeze) der virtuellen Maschine führen, am besten gefallen, oder sogar einen Ausfall mit Datenverlust im schlimmsten Fall. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datastores bei der Verwendung dieser Art von Festplatte genau zu überwachen.

Eine proaktive Speicherplanung ist entscheidend für die ordnungsgemäße Funktion Ihrer virtuellen Maschinen und die Zuverlässigkeit der Backups. Stellen Sie sicher, dass Sie immer den erforderlichen Speicherplatz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten zur Verfügung haben.

## Backup-Speicher-Zuteilung

Der Backup-Speicher für Ihre virtuellen Maschinen wird automatisch von der Plattform innerhalb des zugewiesenen Kontingents bereitgestellt.

| Referenz                | Einheit | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Backup    | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Block-Speicher-Replikation

#### Grundsätze

Um die Umsetzung Ihrer Disaster-Recovery-Pläne zu erleichtern, wenn Anwendungsebenen-Kontinuitätsmechanismen nicht möglich sind und die Replikation virtueller Maschinen nicht geeignet ist, bietet Cloud Temple __Mechanismen zur Block-Speicher-Replikation zwischen den Verfügbarkeitszonen einer Region__.

Diese Replikationsmechanismen werden auf die LUNs (Logical Unit Numbers) Ihrer Umgebungen angewendet, zusätzlich zu den Backups. Die Wahl der Verwendung eines Replikationsmechanismus in einer Umgebung __hängt von vielen Faktoren ab__, wie der Kritikalität des Systems, der tolerierten Datenverluste oder den gewünschten Leistungen für die Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen, die in einer Aktiv/Passiv-Konfiguration bereitgestellt werden:

- Die __asynchrone__ Replikation (oder __'Global Mirror'__): *Die __'Global Mirror'__-Funktion bietet einen asynchronen Kopierprozess. Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des I/O-Abschlusses empfangen, bevor der Schreibvorgang für das sekundäre Volume abgeschlossen ist. Wenn ein Failover eingeleitet wird, muss die Anwendung alle Updates abrufen und anwenden, die auf dem sekundären Volume nicht bestätigt wurden. Wenn I/O-Operationen auf dem primären Volume kurzzeitig pausiert werden, kann das sekundäre Volume zu einer exakten Entsprechung des primären Volumes werden. Diese Funktion ist vergleichbar mit einem kontinuierlichen Backup-Prozess, bei dem die neuesten Updates immer fehlen.*

- Die __synchrone__ Replikation (oder __'Metro Mirror'__): *Die __'Metro Mirror'__-Funktion ist eine Art Remote-Kopie, die eine synchrone Kopie der Daten von einem primären Volume zu einem sekundären Volume erstellt. Bei synchronen Kopien schreiben Host-Anwendungen auf das primäre Volume, erhalten aber keine Bestätigung, dass der Schreibvorgang abgeschlossen ist, bis die Daten auf das sekundäre Volume geschrieben wurden. Dies gewährleistet, dass beide Volumes identische Daten enthalten, wenn der Kopiervorgang abgeschlossen ist. Nach Abschluss des ersten Kopiervorgangs hält Metro Mirror dauerhaft eine vollständig synchronisierte Kopie der Quelldaten am Zielstandort aufrecht. __Seit dem 1. Januar 2024 wird die 'Metro Mirror'-Funktion nicht mehr vermarktet.__*

Es wird dann ein "aktiver" oder "primärer" Standort und ein "passiver" oder "Standby"-Standort definiert. Der Disaster-Recovery-Plan wird im Falle eines Notfalls oder im Rahmen einer PRA-Testanfrage aktiviert. Der passive Standort übernimmt dann die Rolle des aktiven Standorts.

#### Asynchrone Replikation

Wenn Ihre Arbeitslasten kurze Ausfallzeiten erfordern und die Verwendung von Anwendungsebenen- oder VM-Replikationsmechanismen nicht machbar oder geeignet ist, ist es möglich, eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen innerhalb derselben Region zu replizieren.

Dieses Angebot bietet ein __RPO von 15 Minuten__ und ein __RTO unter 4 Stunden__. Es ermöglicht eine viel schnellere Wiederherstellung im Vergleich zu herkömmlichen Backup-Wiederherstellungsprozessen.

In einem asynchronen Replikations-Setup (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller in beiden Verfügbarkeitszonen zusammen, um Schreibvorgänge auf beiden Standorten gleichzeitig durchzuführen. Der primäre Standort wartet nicht auf die Schreibbestätigung des entfernten Standorts.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volume__ durchführen: Er sendet die Anfrage an den SAN-Controller in seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den entfernten SAN-Controller auf, den Schreibvorgang durchzuführen,
3. Der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten Standorts und führt den Schreibvorgang lokal durch,
4. Er gibt __Bestätigung__ an den Hypervisor, der die Anfrage gestellt hat,
5. __Hypervisors am entfernten Standort greifen nicht direkt auf die Global Mirror LUN zu__: Eine Serviceanfrage ist erforderlich.

| SLA       | Beschreibung                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | Im Falle eines Notfalls im primären Rechenzentrum entspricht die maximale Menge verlorener Daten maximal 15 Minuten Schreibzeit |
| RTO < 4H  | Im Falle eines Notfalls im primären Rechenzentrum ist die Wiederherstellung innerhalb von 4 Stunden garantiert, je nach Komplexität der Umgebung.          |

Im Falle einer PRA-Aktivierung führt das Cloud Temple-Team eine Operation durch, um die 'Global Mirror' LUN den entfernten Hypervisors zu präsentieren, damit sie auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert die Reservierung von Rechen- und RAM-Ressourcen am Standby-Standort für den Failover im Falle eines Notfalls.

Die Verwendung dieser Technologie erfordert auch die Verdopplung des Speicherplatzes: Es ist wesentlich, genau die gleiche Menge an Speicherplatz am entfernten Standort wie am lokalen Standort zu haben.

Dieser Mechanismus kann die Anwendungsleistung um 10% beeinträchtigen. Nur Speicherklassen mit 500 IOPS/TB, 1500 IOPS/TB und 3000 IOPS/TB sind kompatibel.

| Referenz                          | Einheit  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| SPEICHER - Global Replication SAN    | 1 TiB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__:

- Da das Angebot asynchron ist, besteht die Möglichkeit, dass bei einem Notfall einige Festplattenvorgänge nicht auf den entfernten Standort geschrieben werden. Dies könnte zu Dateninkonsistenz führen, die durch Risikobewertung im Disaster-Recovery-Plan gemildert wird.*
- Die Block-Speicher-Replikation wird transparent für virtuelle Maschinen und Anwendungen durchgeführt,
- Folglich ist es wichtig, Anwendungsebenen- oder möglicherweise VM-Replikationsszenarien zu bevorzugen,
- Rechen- und Speicherressourcen am Wiederherstellungsstandort können reduziert werden, um Kosten zu optimieren, wenn ein degradierter Zustand während des Disaster-Recovery-Prozesses akzeptabel ist.*

## Virtualisierung VMware durch Cloud Temple SecNumCloud

Die Angebotsvorstellung der virtuellenisierung durch VMware Cloud Temple qualifiziert von SecNumCloud basiert auf der Technologie __VMware vSphere__.

Die Plattform wird von Cloud Temple automatisch verwaltet (Wartung der Sicherheitslage, Betriebssicherheit usw.). Sie kann über die grafische Oberfläche der Console Shiva oder über die damit verbundenen APIs gesteuert werden.

*Hinweis:* Aufgrund von Sicherheitsaspekten im Zusammenhang mit der Qualifikation SecNumCloud ist es für den Auftragnehmer nicht möglich, direkt auf die Plattform der virtuellenisierung durch VMware zuzugreifen (kein direkter Zugriff auf vCenter beispielsweise). Diese Sicherheitsanforderung erfordert eine vollständige Trennung zwischen den Steuerungs-Interfaces für technische Systeme und dem Interface des Auftraggebers (die Console Shiva).

- Die implementierten Produkte sind VMware ESXi, VMware vCenter und VMware Replication.
- Das Netzwerk der virtuellenisierungsoffensive nutzt keine Technologie von VMware NSX, sondern wird durch die Technologie Juniper und das Protokoll VPLS materiell gesteuert.
- Der Speicher verwendet keine Technologie von VMware vSan, sondern ausschließlich SANs IBM in Fiber Channel 32G.
- Es werden keine versteckten Optimierungen wie Kompression oder Deduplikation implementiert.

### Definition eines Rechenpool ('Cpool')

Der __'Cpool'__ ist eine Gruppierung von VMware ESXi-Hypervisors, auch bekannt als *'cluster ESX'*.

Alle Hosts innerhalb eines __'Cpool'__ gehören zum selben Tenant und zur selben Verfügbarkeitszone (AZ). Sie müssen zwingend dieselbe Klasse haben:
__Es ist nicht möglich, verschiedene Modelle von Rechenblades innerhalb desselben Clusters zu mischen__.

Da alle Rechenblades mit dem physischen Maximum an Speicher geliefert werden, wird eine softwarebasierte RAM-Nutzungsbegrenzung auf Cluster-Ebene angewendet, um sicherzustellen, dass sie dem abgerechneten RAM entspricht.

Standardmäßig verfügt jede Blade über 128 GB aktivierten Speicher innerhalb des __'Cpool'__.

Ein __'Cpool'__ kann maximal 32 Hypervisors enthalten. Über diese Grenze hinaus muss ein zweiter Cluster erstellt werden.

Der Speicher kann zwischen den __'Cpool'__ geteilt werden.

### Speicherzuteilung für einen 'Cpool'

Die RAM-Reservierung ist pro Cluster konfigurierbar. Sie können die RAM-Menge reduzieren oder erhöhen, damit sie Ihren Anforderungen auf Cluster-Ebene entspricht.

__Achten Sie darauf, nicht mehr als durchschnittlich 85% Speicherverbrauch pro Rechenblades zu überschreiten__.
Die VMware-Technologie wird eine Optimierungsmethode vom Typ Kompression verwenden, die die Leistung Ihrer Arbeitslasten stark beeinträchtigen und die Diagnose erschweren kann.
Ebenso wird ein zu hoher Speicherdruck auf Ihren Rechenblades den Hypervisor zwingen, einen Teil seines Speichers auf die Festplatte auszulagern, um den Bedürfnissen der virtuellen Maschinen gerecht zu werden.

Dieser Fall, genannt __'Ballooning'__, beeinträchtigt sehr stark die Gesamtleistung der virtuellen Maschinen, die sich auf dem betroffenen Speicher (Datastore) befinden.
__Die Diagnose ist in diesem Kontext kompliziert__, da Ihre Metrologie Auswirkungen auf CPU-Ebene und nicht auf Speicher- oder Storage-Ebene feststellen wird.
Bedenken Sie auch, dass das erste, was der Hypervisor beim Start einer virtuellen Maschine tut, die Erstellung __einer Swap-Speicherdatei__ (.vswap) auf der Festplatte ist, in der Größe des Speichers der betreffenden virtuellen Maschine. Sie müssen __dies bei der Dimensionierung Ihres Speichers berücksichtigen__.

Jede Rechenblades wird mit 128GB softwareaktiviertem Speicher auf Ebene des __'Cpool'__ geliefert, verfügt aber physisch über die gesamte zuweisbare Speichermenge.

Zum Beispiel beträgt für einen Cluster von drei Hosts vom Typ ```vmware:standard:v2``` die RAM-Reservierung bei der Aktivierung des _*'Cpool'* 3 x 128GB = 384 GB RAM.
Sie können dies maximal auf 3 x 384GB = 1152GB Speicher erweitern.

    Minimum-Speicher eines 'Cpool' = Anzahl der Hosts X 128GB Speicher
    Maximum-Speicher eines 'Cpool' = Anzahl der Hosts X die physische Speichermenge der Rechenblades

### Cloud Temple - Katalogus virtueller Maschinen

Cloud Temple stellt Ihnen ein regelmäßig aktualisiertes und erweitertes Katalog von `Templates` zur Verfügung, das von unseren Teams kontinuierlich erweitert wird.

Dieser Katalog enthält derzeit mehrere Dutzende von `Templates` und Bildern, die Sie auf Ihre virtuellen Maschinen montieren können.

### Hypervisor-Updates

Cloud Temple stellt regelmäßig Builds für die Hypervisors zur Verfügung, um die Anwendung von Sicherheitspatches zu gewährleisten.
Die Aktualisierung der Hypervisors bleibt jedoch in Ihrer Verantwortung, da wir keine Einsicht in Ihre geschäftlichen Einschränkungen haben.

Der Update-Prozess ist vollständig automatisiert. Um die Servicekontinuität zu gewährleisten, sind mindestens zwei Hypervisors pro Cluster während des Updates erforderlich. Stellen Sie sicher, dass Sie über die notwendigen Berechtigungen verfügen, um diese Aktionen durchzuführen.

### Verwaltung der Affinität Ihrer virtuellen Maschinen

Die __Affinitäts- und Anti-Affinitätsregeln__ ermöglichen es, die Platzierung der virtuellen Maschinen auf Ihren Hypervisors zu kontrollieren.
Sie können zur Verwaltung der Ressourcennutzung Ihres __'Cpool'__ verwendet werden.
Zum Beispiel können sie helfen, die Arbeitslast zwischen den Servern auszugleichen oder ressourcenintensive Arbeitslasten zu isolieren.
In einem VMware __'Cpool'__ werden diese Regeln oft zur Verwaltung des Verhaltens virtueller Maschinen mit vMotion verwendet.
vMotion ermöglicht es, virtuelle Maschinen von einem Host zu einem anderen ohne Serviceunterbrechung zu verschieben.

Sie können über die Regelverwaltung konfigurieren:

- __Affinitätsregeln__: Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden verwendet, um die Leistung zu verbessern, indem virtuelle Maschinen, die häufig miteinander kommunizieren,
auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind nützlich in Szenarien,
in denen die Leistung kritisch ist, wie bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen Servern erfordern.

- __Anti-Affinitätsregeln__: Umgekehrt gewährleisten diese Regeln, dass bestimmte virtuelle Maschinen nicht auf demselben physischen Host ausgeführt werden. Sie sind wichtig für Verfügbarkeit und Resilienz, zum Beispiel,
um zu vermeiden, dass kritische Maschinen alle von einem einzigen Serverausfall betroffen sind.
Anti-Affinitätsregeln sind entscheidend für Anwendungen, die hohe Verfügbarkeit erfordern,
wie in Produktionsumgebungen, wo Fehlertoleranz eine Priorität ist.
Zum Beispiel möchten Sie nicht, dass Ihre beiden Active Directory-Instanzen auf demselben Hypervisor sind.

Bei der Erstellung einer Regel definieren Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel,
ihren Aktivierungsstatus (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln sind Regeln bezüglich der virtuellen Maschinen untereinander (keine Regeln zwischen Hypervisors und virtuellen Maschinen).*

### Asynchrone Replikation virtueller Maschinen in VMware-Umgebung

Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, der darin besteht, auf Hypervisor-Ebene die Schreibvorgänge in regelmäßigen Zeitabständen auf den Standby-Standort zu übertragen.

Nach einer anfänglichen Hot-Kopie des gesamten aktiven Speichers auf den Standby-Standort werden nur noch die Schreibvorgänge in regelmäßigen Abständen auf den ruhenden Standort übertragen. Dieses Intervall hängt vom Schreibvolumen ab (von stündlich bis alle 24 Stunden).

Die Replikation virtueller Maschinen stützt sich auf den Mechanismus der Momentaufnahmen des Hypervisors. Aus diesem Grund hat diese Lösung die gleichen Nachteile, insbesondere die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine, da der Momentaufnahme-Prozess ein rekursiver Mechanismus zum Schließen der Momentaufnahme ist.

Das typische Beispiel einer Maschine, die den Mechanismus der Replikation virtueller Maschinen nicht unterstützt, ist ein FTP-Server, der Echtzeit-Streams von Überwachungskameras empfängt. __Die Maschine verbringt ihre Zeit mit Schreiben und wird nicht in der Lage sein, eine Momentaufnahme zu schließen, ohne das Betriebssystem für einen erheblichen Zeitraum (mehrere Dutzend Minuten) zu pausieren__. Wenn der Hypervisor die Momentaufnahme nicht schließen kann, wird er genau das tun, ohne Eingriffsmöglichkeit, außer die virtuelle Maschine zu korrumpieren.

| SLA             | Beschreibung                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 1H bis 24H  | Im Falle eines Notfalls im primären Rechenzentrum entspricht die maximale Menge verlorener Daten der letzten Übertragung der Schreibvorgänge auf den Standby-Standort. |
| RTO < 15mn      | Vorgang zum Starten der auf dem entfernten Standort gestoppten virtuellen Maschine                                                                                |

Im Bedarfsfall oder bei einem Defekt an einer Maschine des primären Standorts wird die Spiegelmaschine auf dem Standby-Standort aktiviert. Die Wiederaufnahme der Aktivität erfordert, dass auf dem Standby-Standort Rechen- und RAM-Ressourcen im Standby-Modus reserviert wurden. Es ist notwendig, den gleichen Speicherplatz auf dem passiven Standort wie auf dem aktiven Standort zu haben.

| Referenz                          | Einheit | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - VMware Replikation inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Hinweis__: Die Berechnung des minimalen RPO muss basierend auf der Änderungsrate der virtuellen Maschine definiert werden.*

## Virtual Machine Backup

Cloud Temple offers an **integrated, non-detachable cross-platform backup solution** (it's mandatory for secnumcloud French qualification).

Backups are stored in a high availability zone and on a physically separate datacenter from the one hosting the virtual machine.

This setup safeguards against major failures at the production datacenter and allows restoration onto a secondary datacenter (e.g., due to fire).

This solution encompasses:

- **Hot, site-level backup of all disks**,
- **Instantaneous presentation and startup of a virtual machine from mass storage infrastructure and hot reload on production SANs**,
- **Partial file restoration from the backup**,
- **Limited retention based solely on mass storage allocation**.

This backup infrastructure is built upon IBM Spectrum Protect Plus, an agentless architecture solution that's user-friendly and enables automated backup processes along with space optimization on mass storage.

Die Geschwindigkeit von Backups und Wiederherstellungen hängt von der Änderungsrate der Daten in den Umgebungen ab. Die Backup-Richtlinie kann über die [Cloud Temple Console](../console/console.md) für jede virtuelle Maschine konfiguriert werden.

*__Note:__*

* Some virtual machines may not be compatible with this technology, which relies on hypervisor instantaneous snapshot mechanisms. These are typically VMs with constant disk write operations. Since the hypervisor cannot freeze these snapshots, it necessitates freezing the VM to complete the close operation, potentially lasting several hours and being unstoppable.

In such cases, the solution involves excluding the target persistent disk for writes and backing up data through an alternative method.*

| Reference                                               | Unité | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service     | 1 VM   | csp:(region):iaas:backup:vm:v1 |

#### Erstellen einer Backup-Politik erstellen

Um eine neue Backup-Politik zu erstellen, müssen Sie eine Anfrage beim Support aufgeben. Der Support ist über die Schnellstart-Schale (Boule) in der rechten oberen Ecke des Fensters zugänglich.

Die Erstellung einer neuen Backup-Politik erfolgt durch:

    Eine Anfrage für einen Service, die folgenden Informationen enthält:
        Name Ihrer Organisation
        Name eines Kontaktpersonals mit seinem Mailadresse und Telefonnummer zur Endgültigen Konfiguration
        Name des Benutzers
        Name der Backup-Politik
        Merkmale (x Tage, y Wochen, z Monate usw.)

## Fortified Data Protection (HSM/KMS)

Cloud Temple offers an advanced virtual machine encryption solution based on hardware security modules (HSMs) and a key management service (KMS). This feature strengthens the protection of sensitive data through centralized and secure key management, directly integrated into the SecNumCloud environment.

### Technische Architektur

Die Lösung basiert auf einer robusten Sicherheitsinfrastruktur, bestehend aus:

- **HSM (Hardware Security Module)** : Modulare Sicherheitssysteme von __Thales Luna S790__ zertifiziert nach FIPS 140-3 Niveau 3
- **KMS (Key Management System)** : __Thales CipherTrust Manager__ für die zentrale Verwaltung der Schlüssel
- **Integration VMware** : Kommunikation über den Protokoll __KMIP (Key Management Interoperability Protocol)__

#### Hohe Verfügbarkeit

Die HSM-Infrastruktur wird auf drei Verfügungszonen der Region FR1 (FR1) ausgeführt:

- PAR7S
- TH3S
- AZ07

Diese Aufteilung stellt eine hohe Verfügbarkeit und maximale Resilienz des Verschlüsselungsservices gewährleisten.

### Funktionsumfang und Hierarchie der Schlüssel

Das System nutzt eine **Schlüsselhierarchie** für die Verschlüsselung, um die Daten zu sichern:

| Ebene | Typ des Schlüssels | Beschreibung | Standort |
|--------|---------------|-----------------|----------|
| 1     | __Root of Trust (RoT)__ | Hauptschlüssel durch KMS | HSM Luna |
| 2     | __Domain Key (DK)__ | Domänenschlüssel des Kunden (Mehrbahn-Isolation) | HSM Luna |
| 3     | __Key Encryption Key (KEK)__ | Verschlüsselungsschlüssel der VM | CipherTrust Manager |
| 4     | __Data Encryption Key (DEK)__ | Datenverschlüsselungsschlüssel der VM | VMware ESXi |

#### Verschlüsselungsprozess

1. **Erzeugung**: VMware ESXi erzeugt eine einzigartige DEK für jede virtuelle Maschine
2. **Schutz**: Die DEK wird mit der gespeicherten KEK im CipherTrust Manager verschlüsselt
3. **Sicherstellung**: Die KEK wird durch die Schlüsselverwaltungshierarchie HSM geschützt
4. **Speicherung**: Die verschlüsselte DEK sowie die Konfigurationsdateien der VM werden gespeichert

### Sicherheit und Konformität

#### Zertifizierungen

- **FIPS 140-3 Level 3**: Highest certification for HSMs
- **Common Criteria EAL4+**: Advanced security evaluation
- **SecNumCloud**: ANSSI-integrated qualification in the cloud environment

### Mehrzugleitungsisolation

- **Verschlüsselungsteilung**: Jedes Kunden erhält ein isoliertes KMS (Key Management System)
- **Zugehörige Schlüssel**: Eine spezifische Domänenschlüssel pro Kunde
- **Überwachung und Nachverfolgbarkeit**: Vollständiges Journalieren aller Aktionen im jeweiligen Domäne

### Aktivierung und Nutzung

Die Verschlüsselung von virtuellen Maschinen wird mit einem einzigen Klick ausgelöst, indem Sie auf die [Console Shiva](../console/console.md) klicken.

Für eine detaillierte Anleitung mit Bildern beziehen Sie sich zum [Tutorial zur Verschlüsselung von virtuellen Maschinen](tutorials/vm_encryption.md).

#### Vorraufsätze

- __Zugelassener Schlüssel bereitgestellt__ : Ein HSM/KMS muss auf der vStack aktiviert sein
- __Virtuelle Maschine ausgeschaltet__ : Die VM muss vor dem Verschlüsseln geräumt werden
- __Keine aktive Replikation__ : Die VM darf nicht repliziert werden (unfreundlich für Global Mirror)
- __Kein Snapshot__ : Keine Instantane Snapshots dürfen vorhanden sein
- __Abonnement am Service__ : Das Schutzdienstleistungsabonnement muss abonniert sein

*__Hinweis__: Für detaillierte Informationen zu den Voraussetzungen und der vollständigen Prozedur, beziehen Sie sich bitte zum [Dokument zur VM-Verschlüsselung](tutorials/vm_encryption.md).*

### Einschränkungen und Überlegungen

Dieser Abschnitt enthält wichtige Hinweise zu den Grenzen und Überlegungen des Projekts, die für ein verantwortungsvolles und effektives Cloud Computing, IT-Systemen und Softwareentwicklung unerlässlich sind. Diese Informationen sollten sorgfältig betrachtet werden, um potenzielle Herausforderungen zu identifizieren und entsprechende Strategien zu entwickeln.

1. **Skalierbarkeit**:
   - Beachten Sie die Skalierbarkeit der Anwendungen und Systeme, die Sie implementieren oder verwalten. Die Cloud-Infrastruktur muss in der Lage sein, sich flexibel an wachsende Anforderungen anzupassen.

2. **Sicherheit**:
   - Sicherheit ist eine Priorität. Implementieren Sie robuste Sicherheitsmaßnahmen, um sensible Daten zu schützen und potenzielle Bedrohungen abzuwehren. Überprüfen Sie regelmäßig die Systemkonfigurationen und aktualisieren Sie Ihre Software auf die neuesten Sicherheitspatches.

3. **Kompatibilität**:
   - Stellen Sie sicher, dass alle verwendeten Technologien und Systeme kompatibel sind oder können nahtlos in bestehende Infrastrukturen integriert werden. Dies ist besonders wichtig bei der Verwendung von Open-Source-Tools und kleineren Unternehmenslösungen.

4. **Leistung**:
   - Optimieren Sie die Leistung Ihrer Anwendungen, indem Sie effiziente Algorithmen und Datenbankverwaltungstechniken verwenden. Überwachen Sie kontinuierlich die Systemleistung und identifizieren Sie Bereiche für Verbesserungen.

5. **Kosten**:
   - Beachten Sie die Kosten, die mit der Verwaltung von Cloud-Ressourcen verbunden sind. Wählen Sie kosteneffiziente Lösungen und nutzen Sie automatische Skalierungsoptionen, um unnötige Ausgaben zu vermeiden.

6. **Compliance**:
   - Stellen Sie sicher, dass Ihre Systeme den relevanten regulatorischen Anforderungen entsprechen (z.B. GDPR, HIPAA). Dies ist besonders wichtig für Branchen mit strengen Datenschutzvorschriften.

7. **Redundanz und Wiederherstellung**:
   - Implementieren Sie Redundanzstrategien, um Ausfallzeiten zu minimieren und die Verfügbarkeit Ihrer Anwendungen zu gewährleisten. Entwickeln Sie robuste Wiederherstellungsstrategien, um auf unvorhergesehene Störungen reagieren zu können.

8. **Integration**:
   - Planen Sie die Integration neuer Technologien sorgfältig, um eine nahtlose Zusammenarbeit zwischen verschiedenen Systemen und Plattformen zu gewährleisten.

9. **Wartung und Support**:
   - Berücksichtigen Sie die langfristige Wartung und den Support für Ihre Systeme, einschließlich der Verfügbarkeit von Experten für die jeweiligen Technologien sowie der Kosten für Updates und Reparaturen.

10. **Bildung und Schulung**:
    - Investieren Sie in die Bildung und Schulung Ihrer Teams, um sicherzustellen, dass sie die neuesten Technologien und Best Practices verstehen und anwenden können.

Diese Überlegungen sind entscheidend für den Erfolg von Cloud-Computing-Projekten und IT-Systemen im Allgemeinen. Sie sollten in jedem Entwicklungsprozess berücksichtigt werden, um sicherzustellen, dass die gewählten Lösungen nicht nur technisch zulässig sind, sondern auch langfristig nachhaltig und kosteneffizient.

#### Kompatibilität

- __Globale Replikation__: Verschlüsselte VMs sind nicht mit der Global Replikation kompatibel
- __Wiederherstellung__: Verschlüsselte Systempartitionen behalten ihre kryptografische Sicherheit
- __Export__: Der Export verschlüsselter VMs erfordert spezielle Prozeduren

### Leistung

- **Minimaler Auswirkungen**: Der Hardware-Verschlüsselung sorgt für optimale Leistung
- **Transparenz**: Keine Beeinträchtigung der Anwendungsfunktionalität

### Empfohlene Anwendungsbeispiele

Diese fortschrittliche Lösung ist besonders geeignet für:

- __Sensible Daten__ : Persönliche Informationen, Finanzdaten, Industriegeheimnisse
- __Regulatorische Konformität__ : Anforderungen RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Kritische Branchen__ : Bankwesen, Versicherungswesen, Gesundheitswesen, Verteidigung
- __Digitale Souveränität__ : Schutz vor unbefugtem Zugriff, auch bei Compromisserkennung

| Referenz | Einheit | SKU |
|-----------|---------|-----|
| **Schutz fortschrittlich** - Verschlüsselung von VMs über HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Hinweis__: *

- Das Service erfordert eine spezifische Abonnement und ist nicht in der Standard-IaaS-Angebote enthalten.
- Die Verwaltung der Schlüssel bleibt vollständig im Besitz von Cloud Temple innerhalb des SecNumCloud-Umfelds.
- Die VerschlüsselungsSchlüssel verlassen nie die französische und souveräne Infrastruktur.
