---
title: Konzepte
---

<a id="une-infrastructure-dédiée-et-automatisée"></a>

## Einführung

Das Angebot __IaaS VMware__ ist eine dedizierte VMware-Virtualisierungsinfrastruktur, die entwickelt wurde, um kritische Anforderungen an Geschäftskontinuität und Disaster Recovery zu erfüllen, insbesondere in anspruchsvollen Branchen wie Industrie, Banken und Versicherungen. Sie gewährleistet eine hohe Verfügbarkeit und eine vorhersehbare Leistung für Ihre kritischen Workloads.

Obwohl das Angebot über APIs und einen Terraform-Provider vollständig automatisiert ist, bietet es eine dedizierte Infrastruktur:

- __Dedizierte Ressourcen__: Compute-Blades, Speichervolumes und Software-Stacks (Virtualisierung, Sicherung, Firewalling usw.) werden niemals zwischen Kunden geteilt.
- __Maximale Planbarkeit__: Sie kontrollieren die Virtualisierungsraten und die IOPS-Last auf dem Speicher und profitieren von einer klaren, monatlichen verbrauchsabhängigen Abrechnung.

## Vorteile

| Vorteil             | Beschreibung                                                                                                                                   |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitales Vertrauen | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                              |
| Sicherheit          | Hochsichere Plattform, __SecNumCloud__-qualifiziert, nach __HDS__ (Hosting von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__ zertifiziert.     |  
| Hochverfügbarkeit   | Verfügbarkeitsrate der Plattform von 99,99 %, monatlich gemessen, inklusive Wartungsfenster.                                                   |
| Resilienz           | Umsetzung von Plänen zur Geschäftskontinuität oder zur Notfallwiederherstellung je nach Bedarf.                                                |
| Automatisierung     | Vollständig automatisierte Plattform, konzipiert für die Integration in ein Programm zur digitalen Transformation.                              |
| On demand           | Ressourcen bedarfsgerecht verfügbar.                                                                                                           |

<a id="principales-fonctionnalités"></a>

## Funktionen

- Dedizierte Rechenressourcen (CPU, RAM) nach Bedarf.
- Speicher nach Bedarf (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Cross-Backups mit konfigurierbarer Aufbewahrungsdauer.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Konsole](../console/console.md) oder im Infrastructure-as-Code-Modus über die APIs und den Terraform-Provider.

### Kataloge virtueller Maschinen von Cloud Temple

Cloud Temple stellt Ihnen einen Katalog mit `Templates` zur Verfügung, der von unseren Teams regelmäßig erweitert und aktualisiert wird.
Er umfasst derzeit mehrere Dutzend `Templates` und Images, die in Ihre virtuellen Maschinen eingebunden werden können.

### Verwaltung der Affinität Ihrer virtuellen Maschinen

Mit __Affinitäts- und Anti-Affinitätsregeln__ können Sie die Platzierung virtueller Maschinen auf Ihren Hypervisoren steuern.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu verwalten.
Beispielsweise können sie helfen, die Arbeitslast zwischen den Servern auszugleichen oder ressourcenintensive Workloads zu isolieren.
In einem VMware-__'Cpool'__ werden diese Regeln häufig verwendet, um das Verhalten virtueller Maschinen in Verbindung mit vMotion zu steuern.
vMotion ermöglicht das Verschieben virtueller Maschinen von einem Host auf einen anderen ohne Dienstunterbrechung.

Über die Regelverwaltung können Sie Folgendes konfigurieren:

- __Affinitätsregeln__: Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden zur Leistungsverbesserung eingesetzt, indem häufig miteinander kommunizierende virtuelle Maschinen
gemeinsam auf demselben Server gehalten werden, um die Netzwerklatenz zu verringern. Affinitätsregeln sind in Szenarien nützlich,
in denen die Leistung kritisch ist, etwa bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern erfordern.

- __Anti-Affinitätsregeln__: Umgekehrt stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht
auf demselben physischen Host ausgeführt werden. Sie sind wichtig für Verfügbarkeit und Resilienz, beispielsweise
um zu verhindern, dass kritische Maschinen beim Ausfall eines einzelnen Servers alle betroffen sind.
Anti-Affinitätsregeln sind entscheidend für Anwendungen, die eine hohe Verfügbarkeit erfordern,
etwa in Produktionsumgebungen, in denen Ausfalltoleranz Priorität hat.
Beispielsweise möchten Sie nicht, dass sich Ihre beiden Active-Directory-Server auf demselben Hypervisor befinden.

Beim Erstellen einer Regel legen Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel,
ihren Aktivierungszustand (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters fest.

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln betreffen virtuelle Maschinen untereinander (keine Regeln zwischen Hypervisoren und virtuellen Maschinen).*

## Architektur

### Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Compute: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Blockspeicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __VMware__, eine zuverlässige und bewährte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen.
- Sicherung: __IBM Spectrum Protect Plus__, für die Orchestrierung und Speicherung der Sicherungen.

Diese Architektur basiert auf dem Modell __VersaStack__, einer Allianz zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den wichtigsten Softwareherstellern gewährleistet.

### VMware-Virtualisierung

Das SecNumCloud-qualifizierte VMware-Virtualisierungsangebot von Cloud Temple basiert auf der Technologie __VMware Vsphere__.

Die Plattform wird von Cloud Temple automatisiert verwaltet (Aufrechterhaltung der Sicherheit, Aufrechterhaltung des Betriebs, ...).
Sie kann über die grafische Oberfläche der Konsole oder über die zugehörigen APIs gesteuert werden.

*__Hinweis__*: *Aus Sicherheitsgründen im Zusammenhang mit der SecNumCloud-Qualifizierung
__kann der Auftraggeber nicht direkt auf die VMware-Virtualisierungsplattform zugreifen__ (insbesondere kein direkter Zugriff auf den vCenter).
Die SecNumCloud-Qualifizierung schreibt nämlich __eine vollständige Trennung__ zwischen den Verwaltungsschnittstellen der technischen Assets und der Schnittstelle des Auftraggebers (der Konsole) vor.*

- Die eingesetzten Produkte sind VMware ESXi, VMware Vcenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots verwendet nicht die Technologie VMware NSX, sondern wird hardwareseitig über die Juniper-Technologie und das VPLS-Protokoll gesteuert.*
- *Der Speicher verwendet nicht die Technologie VMware vSan, sondern ausschließlich IBM-SANs über 32G Fibre Channel.*
- *Es wird keinerlei versteckte Optimierung eingesetzt (Komprimierung, Deduplizierung, ...).*

#### Definition eines Compute-Blade-Clusters ('Cpool')

Der __'Cpool'__ ist eine Gruppierung von VMware-ESXi-Hypervisoren, auch bekannt als *'ESX-Cluster'*.

Die Hosts eines __'Cpool'__ gehören alle __zum selben Tenant und zur selben Verfügbarkeitszone__ (AZ). Sie müssen zwingend derselben Klasse angehören:
__es ist nicht möglich, verschiedene Compute-Blade-Modelle innerhalb desselben Clusters zu mischen__.

Da alle Compute-Blades mit dem physischen Maximum an Arbeitsspeicher ausgeliefert werden, wird auf Clusterebene softwareseitig eine Begrenzung der RAM-Nutzung angewendet, um sicherzustellen, dass sie dem abgerechneten RAM entspricht.

Standardmäßig verfügt jedes Blade über 128 GB aktivierten Arbeitsspeicher innerhalb des __'Cpool'__.

Ein __'Cpool'__ kann maximal 32 Hypervisoren enthalten. Über diese Grenze hinaus muss ein zweiter Cluster erstellt werden.

Der Speicher kann zwischen __'Cpools'__ geteilt werden.

#### Arbeitsspeicherzuweisung für einen 'Cpool'

Die RAM-Reservierung ist pro Cluster konfigurierbar. Sie können die RAM-Menge verringern oder erhöhen, damit sie Ihren Anforderungen auf Clusterebene entspricht.

__Achten Sie darauf, einen durchschnittlichen Arbeitsspeicherverbrauch von 85 % pro Compute-Blade nicht zu überschreiten__.
Die VMware-Technologie verwendet sonst eine Optimierungsmethode vom Typ Komprimierung, welche die Leistung Ihrer Workloads stark beeinträchtigen und die Diagnose erschweren kann.
Ebenso zwingt ein zu hoher Speicherdruck auf Ihren Compute-Blades den Hypervisor, einen Teil seines Arbeitsspeichers auf die Festplatte auszulagern, um den Bedarf der virtuellen Maschinen zu decken.

Dieser als __'Ballooning'__ bezeichnete Fall beeinträchtigt die Gesamtleistung der virtuellen Maschinen auf dem betroffenen Speicher (Datastore) sehr stark.
__Die Diagnose ist in diesem Kontext schwierig__, da Ihr Monitoring Auswirkungen auf CPU-Ebene und nicht auf Arbeitsspeicher- oder Speicherebene feststellen wird.
Beachten Sie außerdem, dass der Hypervisor beim Start einer virtuellen Maschine als Erstes __eine Arbeitsspeicher-Swap-Datei__ (.vswap) auf
der Festplatte erstellt, in der Größe des Arbeitsspeichers der betreffenden virtuellen Maschine. Dies müssen Sie __bei der Dimensionierung Ihres Speichers berücksichtigen__.

Jedes Compute-Blade wird mit 128GB softwareseitig aktiviertem Arbeitsspeicher auf Ebene des __'Cpool'__ ausgeliefert, verfügt physisch jedoch über den gesamten zuweisbaren Arbeitsspeicher.

Beispielsweise beträgt bei einem Cluster aus drei Hosts vom Typ ```vmware:standard:v2``` die RAM-Reservierung bei Aktivierung des _*'Cpool'* 3 x 128GB = 384 GB RAM.
Sie können sie auf maximal 3 x 384GB = 1152GB Arbeitsspeicher erweitern.

    Minimaler Arbeitsspeicher eines 'Cpool' = Anzahl der Hosts X 128GB Arbeitsspeicher
    Maximaler Arbeitsspeicher eines 'Cpool' = Anzahl der Hosts X physische Arbeitsspeichermenge des Compute-Blades

#### Aktualisierung der Hypervisoren

Cloud Temple stellt regelmäßig Builds für die Hypervisoren bereit, um die Anwendung von Sicherheitspatches sicherzustellen.
Die Aktualisierung der Hypervisoren bleibt jedoch in Ihrer Verantwortung, da wir keinen Einblick in Ihre geschäftlichen Rahmenbedingungen haben.

Der Aktualisierungsprozess ist vollständig automatisiert. Um die Dienstkontinuität zu gewährleisten, sind während der Aktualisierung mindestens zwei Hypervisoren pro Cluster erforderlich. Stellen Sie sicher, dass Sie über die erforderlichen Berechtigungen verfügen, um diese Aktionen durchzuführen.

## Regionen und Verfügbarkeitszonen

Das Produkt IaaS VMware wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Art der Bereitstellung ermöglicht es, den Standort der Cluster zu wählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Disaster-Recovery-Plans (DRP) im Falle eines Vorfalls.


## Technische Spezifikationen

### Compute

Die von Cloud Temple bereitgestellten Blades sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware, Betriebssystemversion, ...), und zwar über die Cloud Temple-Konsole.

Im Katalog sind mehrere Kategorien von Compute-Blades verfügbar, um Ihre Workloads zu unterstützen (Virtualisierung, Containerisierung, ...).
Diese weisen unterschiedliche Eigenschaften und Leistungen auf, um Ihren Anforderungen bestmöglich gerecht zu werden. Der Katalog der Compute-Blades wird regelmäßig weiterentwickelt.

Bei der Nutzung mit einem Virtualisierungsangebot besteht ein Hypervisor-Cluster ausschließlich aus Compute-Blades desselben Typs (es ist nicht möglich, Blades unterschiedlicher Typen im selben Cluster zu mischen).

| Referenz               | RAM  __(1)__ | Taktfrequenz __(2)__                        | Anzahl Kerne / Threads     | Konnektivität __(3)__ | GPU __(4)__          |
| ---------------------- | ------------ | ------------------------------------------- | -------------------------- | --------------------- | -------------------- |
| Blade ECO v3           | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder gleichwertig) | 20 / 40 Threads            | 2 X 10 Gbit/s         | |
| Blade STANDARD v3      | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder gleichwertig) | 32 / 64 Threads            | 2 X 25 Gbit/s         | |
| Blade ADVANCE v3       | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder gleichwertig)   | 48 / 96 Threads            | 2 X 25 Gbit/s         | |
| Blade PERFORMANCE 1 v3 | 384 GB       | 3.20/3.6 GHz (Gold 5315Y oder gleichwertig)  | 16 / 32 Threads            | 2 X 25 Gbit/s         | |
| Blade PERFORMANCE 2 v3 | 768 GB       | 3.00/3.6 GHz (Gold 6354 oder gleichwertig)   | 36 / 72 Threads            | 2 X 25 Gbit/s         | |
| Blade PERFORMANCE 3 v3 | 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder gleichwertig)   | 56 / 112 Threads           | 2 X 25 Gbit/s         | |
| Blade PERFORMANCE 4 v3 | 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder gleichwertig) | 32 / 64 Threads            | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48GB |

__Hinweise__:

- __(1)__ Die gelieferte Arbeitsspeichermenge ist die physisch auf den Blades verfügbare Menge. Die physische Arbeitsspeichermenge eines Blades kann nicht geändert werden.

- __(2)__ Minimaler Basistakt / Turbotakt, angegeben in GHz. Standardmäßig sind die Prozessoren im BIOS auf maximale Leistung konfiguriert.

- __(3)__ Die physische Konnektivität wird für den Netzwerkzugriff und den Blockspeicherzugriff gemeinsam genutzt, da die CISCO-Plattform konvergent ist.

- __(4)__ Das verfügbare GPU-Angebot entwickelt sich ständig weiter. Es basiert auf NVIDIA-L40S-GPUs. Standardmäßig wird das Blade PERF4 mit 2 L40S-Karten mit je 48 GB RAM ausgeliefert. Wenden Sie sich bei Bedarf für weitere Details an den Support.

### Netzwerk

Der Netzwerkdienst auf der IaaS-Plattform von Cloud Temple beruht auf einer Netzwerkinfrastruktur auf Basis der VPLS-Technologie, die eine flexible und leistungsstarke Segmentierung bietet, um die Anforderungen der Kunden an Konnektivität und Netzwerkisolation zu erfüllen.

#### Layer-2-VLANs

Die im IaaS-Produkt bereitgestellten VLANs sind __Layer-2__-VLANs und bieten eine vollständige Netzwerkisolation sowie eine bedarfsgerecht anpassbare Konfiguration.

##### Hauptkonzepte

- __Gemeinsame Nutzung zwischen Clustern und Verfügbarkeitszonen (AZ)__:
  - Die VLANs können zwischen den verschiedenen AZs und den verschiedenen Clustern desselben Tenants geteilt werden.
- __Tenant-übergreifende Weitergabe__:
  - Die VLANs können zwischen mehreren Tenants derselben Organisation weitergegeben werden, was die interne Kommunikation erleichtert.

---

#### Netzwerkleistung

Die Netzwerkinfrastruktur garantiert eine niedrige Latenz für optimale Leistung:

- __Latenz innerhalb einer AZ__: Unter __3 ms__.
- __Latenz zwischen AZs__: Unter __5 ms__.

---

#### Wichtige Punkte

1. __Flexibilität__: Die VLANs können so konfiguriert werden, dass sie sich an Multi-Cluster- und Multi-Tenant-Umgebungen anpassen.
2. __Hohe Leistung__: Eine minimale Latenz sorgt für eine schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. __Isolation und Sicherheit__: Layer-2-VLANs bieten eine strikte Netzwerksegmentierung zum Schutz von Daten und Datenflüssen.

---

### Blockspeicher

Cloud Temple bietet mehrere Speicherklassen auf Basis der Technologien [IBM FlashSystem](https://www.ibm.com/flashsystem/)
und [IBM SVC](https://www.ibm.com/products/san-volume-controller) an.

Die Technologie __IBM SVC__ ermöglicht es, das für die Umgebungen unserer Kunden erforderliche Leistungsniveau bereitzustellen – dank der großen
Menge an Speichercache in den Controllern und der Möglichkeit, sämtliche IOPS
eines Servers auf mehrere SANs zu verteilen.

Sie wird außerdem eingesetzt, um die Replikation Ihrer Blockspeicher-LUNs zwischen
den Verfügbarkeitszonen zu ermöglichen oder Eingriffe an den Speicher-Arrays zu erleichtern.

Der Speicher ist überwiegend NVME-FLASH-Speicher, der für professionelle Workloads bestimmt ist.
Die Festplatten werden von den Speicher-Arrays im [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) betrieben.


Die Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungsanforderungen
unter dem Gesichtspunkt der Wirtschaftlichkeit. Mehrere Leistungsstufen sind verfügbar:

| Referenz                          | Einheit | Maximale IOPS-Obergrenze / LUN | Maximale Bandbreite / LUN |
|-----------------------------------|---------|--------------------------------|---------------------------|
| FLASH - Essentiel - 500 IOPS/TB   | 1 GiB   | 10 000 IOPS                    | 512 MB/s |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB   | 30 000 IOPS                    | 1024 MB/s |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB   | 30 000 IOPS                    | 1024 MB/s |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB   | 30 000 IOPS                    | 1024 MB/s |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB   | 30 000 IOPS                    | 1024 MB/s |
| MASS STORAGE - Archivierung       | 1 TiB   | Nicht garantiert               | Nicht garantiert |

*__Hinweis__:*

- *Die effektive Leistung einer LUN (Datastore) steigt linear mit dem zugewiesenen Volumen (entsprechend ihrem IOPS/TB-Verhältnis), __bis zur oben definierten absoluten Hardware-Obergrenze__.*

> *Beispielsweise erhält ein Volume von 0,5 TB in der Klasse 'Standard' 750 IOPS.*
> *Ein Volume von 10 TB in der Klasse 'Ultra' (theoretisch 150 000 IOPS) wird hingegen durch die absolute physische Grenze gedrosselt und erreicht maximal 30 000 IOPS und 1024 MB/s.*

- *Diese Begrenzungen (IOPS und Bandbreite) gelten auf Ebene des Speichervolumes, also auf Ebene des Datastores in einer VMware-Umgebung,*
- *Es gibt keine Einschränkung und kein Kontingent für Lese- oder Schreibvorgänge,*
- *Es gibt keine Abrechnung nach IOPS,*
- *Für die Klasse __'Mass Storage'__ gibt es keine Leistungszusage,*
- *Die Mindestgröße einer Speicher-LUN beträgt 500GiB,*
- *Bei Verwendung eines Speicherreplikationsmechanismus muss die Leistung in beiden Verfügbarkeitszonen identisch sein,*
- *Es wird kein „intelligenter“ Optimierungsmechanismus wie Komprimierung oder Deduplizierung eingesetzt: Wenn Sie 10TiB Speicher reservieren, stehen Ihnen physisch 10TiB nutzbarer Speicher auf den IBM-Systemen zur Verfügung.*
- *Die Speicher-LUNs sind der Kundenumgebung vorbehalten.*

#### Nutzung im Rahmen des VMware-Compute-Angebots

Bei der Nutzung des Blockspeichers als Datastore im VMware-Compute-Angebot von Cloud Temple __müssen Sie mehrere wichtige Aspekte berücksichtigen__:

1. __Swap-Datei (.VSWP) beim Starten virtueller Maschinen__: Wenn eine virtuelle Maschine startet, erstellt sie auf der Festplatte eine .VSWP-Datei in der Größe ihres Arbeitsspeichers. Um Ihre virtuellen Maschinen starten zu können, müssen Sie daher in Ihrem Datastore stets über freien Speicherplatz verfügen, der der Summe der Arbeitsspeichergrößen Ihrer virtuellen Maschinen entspricht. Wenn Ihr Datastore beispielsweise über 1 TiB Blockspeicher verfügt und Sie 10 virtuelle Maschinen mit jeweils 64 GiB Arbeitsspeicher starten möchten, werden 640 GiB Festplattenspeicher benötigt. Ohne diesen Platz wird der Start der Maschinen durch die für die Erstellung der Swap-Dateien verfügbare Kapazität begrenzt.

2. __Freier Speicherplatz für Backup-Snapshots__: Der Sicherungsdienst verwendet Snapshots. Sie müssen daher stets über ausreichend freien Speicherplatz verfügen, damit bei der Sicherung einer virtuellen Maschine ein Snapshot erstellt werden kann. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und von der für die Sicherung benötigten Zeit ab. Als Faustregel wird empfohlen, für diesen Vorgang mindestens 10 % freien Speicherplatz vorzuhalten.

3. __Verwaltung dynamischer Festplatten__: Seien Sie bei der Verwendung dynamischer Festplatten vorsichtig. Wenn Sie ihr Wachstum nicht kontrollieren, kann ein Mangel an physischem Speicherplatz im besten Fall zum Einfrieren (Freeze) der virtuellen Maschine führen, im schlimmsten Fall zu einem Absturz mit Datenbeschädigung. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datastores genau zu überwachen, wenn Sie diese Art von Festplatte verwenden.

Eine proaktive Verwaltung des Festplattenspeichers ist unerlässlich, um den ordnungsgemäßen Betrieb Ihrer virtuellen Maschinen und die Zuverlässigkeit der Sicherungen zu gewährleisten. Stellen Sie sicher, dass Sie stets über den erforderlichen Platz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten verfügen.

### Grenzen

- Ein Hypervisor-Cluster ('Cpool') enthält maximal 32 Hypervisoren, alle derselben Blade-Klasse.
- Die Mindestgröße einer Speicher-LUN beträgt 500 GiB.
- Ein Speichervolume ist auf 30 000 IOPS und 1024 MB/s begrenzt (10 000 IOPS und 512 MB/s in der Klasse Essentiel).
- Die physische Arbeitsspeichermenge eines Blades kann nicht geändert werden.
- Der automatische Neustart virtueller Maschinen erfordert mindestens zwei Hypervisoren pro Cluster mit aktivierter High Availability.

## Sicherheit und Compliance

Die Plattform ist von der [ANSSI](https://www.ssi.gouv.fr/) __SecNumCloud__-qualifiziert, was ein hohes Maß an Automatisierung und Sicherheit gewährleistet.

### Sicherheit und Verschlüsselung des Blockspeichers

Um die Vertraulichkeit Ihrer ruhenden Daten zu gewährleisten, verfügt unsere gesamte Blockspeicher-Infrastruktur über eine robuste Hardware-Verschlüsselung.

- __Verschlüsselungstyp__: Die Daten werden direkt auf den Festplatten (`Data At Rest`) mit dem Algorithmus __XTS-AES 256__ verschlüsselt.
- __Konformität__: Diese Verschlüsselungsmethode entspricht der Norm __FIPS 140-2__ und gewährleistet ein validiertes hohes Sicherheitsniveau.
- __Funktionsweise__: Die Verschlüsselung erfolgt beim Schreiben der Daten auf das physische Speichermedium.

:::warning[Hinweis zur Replikation]
Es ist wichtig zu beachten, dass diese Verschlüsselung die auf den Festplatten gespeicherten Daten schützt. Sie ist nicht „on-the-fly“ aktiv, was bedeutet, dass die Daten während der Speicherreplikationsvorgänge zwischen den Verfügbarkeitszonen nicht verschlüsselt werden. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

### Erweiterter Datenschutz (HSM/KMS)

Cloud Temple bietet eine Lösung zur __erweiterten Verschlüsselung virtueller Maschinen__ auf Basis von Hardware-Sicherheitsmodulen (HSM) und einem Schlüsselverwaltungsdienst (KMS). Diese Funktion verstärkt den Schutz sensibler Daten durch eine zentrale und sichere Verwaltung der Verschlüsselungsschlüssel, die direkt in die SecNumCloud-Umgebung integriert ist.

#### Technische Architektur

Die Lösung stützt sich auf eine robuste Sicherheitsinfrastruktur, bestehend aus:

- __HSM (Hardware Security Module)__: Module __Thales Luna S790__, zertifiziert nach __FIPS 140-3 Level 3__
- __KMS (Key Management System)__: __Thales CipherTrust Manager__ für die zentrale Schlüsselverwaltung
- __VMware-Integration__: Kommunikation über das Protokoll __KMIP__ (Key Management Interoperability Protocol)

##### Hochverfügbare Bereitstellung

Die HSM-Infrastruktur ist auf __drei Verfügbarkeitszonen__ der Region FR1 bereitgestellt:

- PAR7S
- TH3S  
- AZ07

Diese Verteilung gewährleistet eine maximale __Hochverfügbarkeit__ und __Resilienz__ des Verschlüsselungsdienstes.

#### Funktionsweise und Schlüsselhierarchie

Das System verwendet eine __Hierarchie kryptografischer Schlüssel__, um die Sicherheit der Daten zu gewährleisten:

| Ebene | Schlüsseltyp | Beschreibung | Speicherort |
|--------|-------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Hauptschlüssel pro KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domänenschlüssel pro Kunde (Multi-Tenant-Isolation) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Verschlüsselungsschlüssel pro VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Datenschlüssel pro VM | VMware ESXi |

##### Verschlüsselungsprozess

1. __Generierung__: VMware ESXi generiert für jede virtuelle Maschine einen eindeutigen DEK
2. __Schutz__: Der DEK wird mit dem im CipherTrust Manager gespeicherten KEK verschlüsselt
3. __Absicherung__: Der KEK ist seinerseits durch die HSM-Schlüsselhierarchie geschützt
4. __Speicherung__: Der verschlüsselte DEK wird zusammen mit den Konfigurationsdateien der VM gespeichert

#### Sicherheit und Compliance

##### Zertifizierungen

- __FIPS 140-3 Level 3__: Zertifizierung der höchsten Stufe für HSMs
- __Common Criteria EAL4+__: Erweiterte Sicherheitsevaluierung
- __SecNumCloud__: In die Cloud Temple-Umgebung integrierte ANSSI-Qualifizierung

##### Multi-Tenant-Isolation

- __Kryptografische Trennung__: Jeder Kunde verfügt über eine isolierte KMS-Domäne
- __Dedizierte Schlüssel__: Ein spezifischer Domain Key pro Kunde
- __Audit und Nachverfolgbarkeit__: Vollständige Protokollierung der Aktionen pro Domäne

#### Aktivierung und Nutzung

Die Verschlüsselung virtueller Maschinen wird __mit einem einzigen Klick__ in der [Konsole](../console/console.md) aktiviert.

Ein detailliertes Vorgehen mit Screenshots finden Sie im [Tutorial zur Verschlüsselung virtueller Maschinen](tutorials/vm_encryption.md).

##### Voraussetzungen

- __Konfigurierter Schlüsselanbieter__: Ein HSM/KMS-Anbieter muss auf dem vStack aktiviert sein
- __Virtuelle Maschine ausgeschaltet__: Die VM muss vor der Verschlüsselung gestoppt werden
- __Keine aktive Replikation__: Die VM darf nicht repliziert werden (inkompatibel mit Global Mirror)
- __Kein Snapshot__: Es darf kein Snapshot vorhanden sein
- __Abonnement des Dienstes__: Der Dienst für erweiterten Schutz muss abonniert sein

*__Hinweis__: Weitere Details zu den Voraussetzungen und zum vollständigen Verfahren finden Sie im [Leitfaden zur VM-Verschlüsselung](tutorials/vm_encryption.md).*

#### Einschränkungen und Überlegungen

##### Kompatibilität

- __Global Mirror__: Verschlüsselte virtuelle Maschinen sind __nicht kompatibel__ mit der Global-Mirror-Replikation
- __Wiederherstellung__: Sicherungen verschlüsselter VMs behalten ihren kryptografischen Schutz
- __Export__: Der Export verschlüsselter VMs erfordert spezifische Verfahren

##### Leistung

- __Minimale Auswirkungen__: Die Hardware-Verschlüsselung gewährleistet eine optimale Leistung
- __Transparenz__: Keine Auswirkungen auf den Betrieb der Anwendungen

#### Empfohlene Anwendungsfälle

Diese Lösung für erweiterten Schutz eignet sich besonders für:

- __Sensible Daten__: Personenbezogene Informationen, Finanzdaten, Industriegeheimnisse
- __Einhaltung gesetzlicher Vorschriften__: Anforderungen an den Datenschutz (DSGVO) und die Informationssicherheit (ISO 27001)
- __Kritische Sektoren__: Banken, Versicherungen, Gesundheitswesen, Verteidigung
- __Digitale Souveränität__: Schutz vor unbefugtem Zugriff, selbst im Falle einer Kompromittierung


*__Hinweis__:*

- *Der Dienst erfordert ein spezifisches Abonnement und ist nicht im Standard-IaaS-Produkt enthalten*
- *Die Schlüsselverwaltung bleibt in der SecNumCloud-Umgebung vollständig unter der Kontrolle von Cloud Temple*
- *Die Verschlüsselungsschlüssel verlassen niemals die französische und souveräne Infrastruktur*

## Sicherung und Kontinuität

### Sicherung virtueller Maschinen

Cloud Temple bietet __eine native, nicht deaktivierbare Cross-Backup-Architektur__ (sie ist im Rahmen der französischen SecNumCloud-Qualifizierung verpflichtend).

Die Sicherungen werden in einer Verfügbarkeitszone und in einem physischen Rechenzentrum gespeichert, das sich von demjenigen unterscheidet, in dem die virtuelle Maschine gehostet wird. Sie werden mit einem symmetrischen AES-256-Bit-Schlüsselalgorithmus (Cipher-Modus `xts-plain64`) verschlüsselt, um die Vertraulichkeit der Daten zu gewährleisten.

Dies schützt bei einem schwerwiegenden Ausfall des Produktionsrechenzentrums und ermöglicht die Wiederherstellung in einem sekundären Rechenzentrum (beispielsweise bei einem Brand).

Diese Lösung umfasst:

- Die externe Online-Sicherung aller Festplatten,
- Die Bereitstellung und den sofortigen Start einer virtuellen Maschine aus der Massenspeicher-Infrastruktur sowie das Zurückladen im laufenden Betrieb auf die Produktions-SANs,
- Die teilweise Wiederherstellung von Dateien aus der Sicherung,
- Eine Aufbewahrungsdauer, die ausschließlich durch die Zuweisung von Massenspeicherplatz begrenzt ist.

Diese Sicherungsinfrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, einer Lösung mit agentenloser Architektur,
die einfach zu bedienen ist und neben einer Optimierung des Massenspeicherplatzes die Automatisierung der Sicherungsprozesse ermöglicht.

Die Geschwindigkeit von Sicherungen und Wiederherstellungen hängt von der Änderungsrate der Umgebungen ab.
Die Sicherungsrichtlinie kann für jede virtuelle Maschine über [die Cloud Temple-Konsole](../console/console.md) konfiguriert werden.

*__Hinweis:__*

*__Bestimmte virtuelle Maschinen sind mit dieser Sicherungstechnologie nicht kompatibel__, die die Snapshot-Mechanismen des Hypervisors verwendet.
Dies sind typischerweise Maschinen mit konstanter Schreiblast auf die Festplatte. Der Hypervisor kann den Snapshot dann nicht abschließen, was
ein Einfrieren der virtuellen Maschine erzwingt, um den Abschlussvorgang zu beenden. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht abbrechbar.*

*Die Lösung besteht dann darin, die Festplatte, die Ziel permanenter Schreibvorgänge ist, auszuschließen und die Daten mit einer anderen Methode zu sichern.*


#### Eine Sicherungsrichtlinie erstellen

Um eine neue Sicherungsrichtlinie hinzuzufügen, muss eine Anfrage an den Support gestellt werden. Der Support ist über das Rettungsring-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Sicherungsrichtlinie erfolgt über __eine Serviceanfrage__ mit folgenden Angaben:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Der Name der Sicherungsrichtlinie
    Die Eigenschaften (x Tage, y Wochen, z Monate, ...)

### Speicher für Sicherungen

Der für die Sicherung Ihrer virtuellen Maschinen bestimmte Speicher wird von der Plattform im Rahmen des bestellten Kontingents automatisch bereitgestellt.


### Replikation des Blockspeichers

#### Grundsätze

Um die Umsetzung Ihrer Disaster-Recovery-Pläne zu ermöglichen, wenn eine Geschäftskontinuität
mit Anwendungsmechanismen nicht möglich ist und die Replikation virtueller Maschinen
nicht geeignet ist, bietet Cloud Temple __Mechanismen zur Replikation des Blockspeichers zwischen den Verfügbarkeitszonen einer Region__ an.

Diese Replikationsmechanismen werden ergänzend zu den Sicherungen auf die Speicher-LUNs Ihrer Umgebungen angewendet.
Die Entscheidung für einen Replikationsmechanismus in einer Umgebung __hängt von zahlreichen Faktoren ab, darunter ihre Kritikalität, der tolerierte Datenverlust oder die angestrebte Leistung__ der Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen an, die in einer Aktiv/Passiv-Konfiguration bereitgestellt werden:

- Die __asynchrone__ Replikation (oder __'Global Mirror'__): *Die Funktion __'Global Mirror'__ stellt einen asynchronen Kopierprozess bereit.
Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des E/A-Abschlusses empfangen, bevor der Schreibvorgang
für die Kopie auf dem sekundären Volume abgeschlossen ist. Wird ein Failover eingeleitet, muss die Anwendung
alle Aktualisierungen wiederherstellen und anwenden, die auf dem sekundären Volume nicht bestätigt wurden.
Werden die E/A-Vorgänge auf dem primären Volume für kurze Zeit angehalten,
kann das sekundäre Volume zu einer exakten Entsprechung des primären Volumes werden. Diese Funktion ist mit einem Prozess
der kontinuierlichen Sicherung vergleichbar, bei dem die letzten Aktualisierungen stets fehlen.
Wenn Sie Global Mirror für die Notfallwiederherstellung verwenden, müssen Sie überlegen, wie Sie mit diesen fehlenden Aktualisierungen umgehen möchten.*

- Die __synchrone__ Replikation (oder __'Metro Mirror'__): *Die Funktion __'Metro Mirror'__ ist eine Art der Fernkopie, die eine synchrone Kopie
der Daten von einem primären Volume auf ein sekundäres Volume erstellt. Bei synchronen Kopien schreiben die Host-Anwendungen auf das primäre Volume, erhalten aber keine Bestätigung,
dass der Schreibvorgang abgeschlossen ist, solange die Daten nicht auf das sekundäre Volume geschrieben wurden. Dies gewährleistet, dass beide Volumes identische Daten enthalten, wenn
der Kopiervorgang abgeschlossen ist. Nach Abschluss des initialen Kopiervorgangs hält die Funktion Metro Mirror
dauerhaft eine vollständig synchronisierte Kopie der Quelldaten am Zielstandort vor. __Seit dem 1. Januar 2024 wird die Funktion 'Metro Mirror' nicht mehr vertrieben.__*

Anschließend wird ein sogenannter „aktiver“ oder „primärer“ Standort und ein „passiver“ oder „Standby“-Standort festgelegt.
Der Disaster-Recovery-Plan wird im Katastrophenfall oder im Rahmen einer Anfrage zum Test des DRP aktiviert.
Der passive Standort übernimmt dann die Aufgaben des aktiven Standorts.

#### Asynchrone Replikation

Wenn Ihre Workloads kurze Wiederanlaufzeiten erfordern und es nicht akzeptabel
oder geeignet ist, Mechanismen wie Anwendungsreplikation / Replikation virtueller Maschinen zu verwenden,
kann eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region repliziert werden.

Dieses Produkt ermöglicht einen __RPO von 15 Min.__ und einen __RTO von unter 4H__. Es ermöglicht einen deutlich schnelleren Wiederanlauf als
die Durchführung einer Wiederherstellung aus der Sicherung.

Bei einem Speichervolume mit asynchroner Replikation (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller der
beiden Verfügbarkeitszonen zusammen, um die Schreibvorgänge an beiden Standorten durchzuführen.
Der Master-Standort wartet nicht auf die Schreibbestätigung des Slave-Standorts.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volume__ durchführen: Er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, den Schreibvorgang durchzuführen,
3. der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN und führt den Schreibvorgang dann lokal aus,
4. Er sendet die __Bestätigung__ an den Hypervisor, der die Anfrage gestellt hat,
5. __Die Hypervisoren des entfernten Standorts greifen nicht direkt auf die Global-Mirror-LUN zu__: Eine Serviceanfrage ist erforderlich.

| Ziel        | Beschreibung                                                                                                                                      |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 Min.  | Bei einem Katastrophenfall im primären Rechenzentrum entspricht die maximal verlorene Datenmenge höchstens den Schreibvorgängen der letzten 15 Minuten |
| RTO < 4H  | Bei einem Katastrophenfall im primären Rechenzentrum ist der Wiederanlauf je nach Komplexität der Umgebungen innerhalb von 4 Stunden garantiert.          |

Bei Aktivierung des DRP stellt das Cloud Temple-Team die __'Global Mirror'__-LUN den entfernten Hypervisoren bereit, damit diese auf die Daten zugreifen können. Die Einrichtung dieser Lösung erfordert daher, dass am 'Standby'-Standort Rechenressourcen und RAM reserviert wurden, um den Betrieb im Katastrophenfall wieder aufzunehmen.

Die Nutzung dieser Technologie erfordert außerdem eine Verdopplung des Festplattenspeichers: Am entfernten Standort muss genau derselbe Speicherplatz vorhanden sein wie am lokalen Standort.

Die Nutzung dieses Mechanismus kann die Leistung der Anwendung um bis zu 10 % beeinträchtigen. __Nur die Speicherklassen 500 Iops/TB, 1500 Iops/TB und 3000 Iops/TB sind kompatibel.__


*__Hinweis__*:

- *Da das Angebot asynchron ist, kann es im Katastrophenfall vorkommen, dass bestimmte Festplattenoperationen nicht auf den entfernten Standort geschrieben wurden. Es kann daher ein Risiko für die Datenkonsistenz bestehen, das in der Risikoanalyse des Disaster-Recovery-Plans zu mindern ist.*
- *Die Replikation des Blockspeichers erfolgt für virtuelle Maschinen und Anwendungen transparent,*
- *Daher ist es wichtig, Szenarien mit Anwendungsreplikation oder gegebenenfalls mit Replikation virtueller Maschinen zu bevorzugen,*
- *Rechenleistung und Arbeitsspeicher am Wiederherstellungsstandort können zur Kostenoptimierung reduziert werden, wenn ein eingeschränkter Betrieb für die Fachbereiche während der Ausführung des Disaster-Recovery-Plans akzeptabel ist.*

### Asynchrone Replikation Ihrer virtuellen Maschinen in einer VMware-Umgebung

Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, bei dem die Schreibvorgänge auf Ebene des Quell-Hypervisors in regelmäßigen Zeitabständen an den Standby-Standort übertragen werden.

Nach einer initialen Online-Kopie des gesamten aktiven Speichers auf den Standby-Standort werden nur noch die Schreibvorgänge in regelmäßigen Abständen an den ruhenden Standort übertragen.
Dieses Intervall hängt vom Schreibvolumen ab (von stündlich bis alle 24 Stunden).

Die Replikation virtueller Maschinen stützt sich auf den Snapshot-Mechanismus des Hypervisors. Daher
weist diese Lösung dieselben Nachteile auf, insbesondere die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine,
da der Snapshot-Prozess ein rekursiver Mechanismus zum Abschließen des Snapshots ist.

Das typische Beispiel für eine Maschine, die den Mechanismus der Replikation virtueller Maschinen nicht unterstützt, ist ein
FTP-Server, der die Echtzeit-Streams von Überwachungskameras empfängt. __Die Maschine schreibt ununterbrochen und wird
nicht in der Lage sein, einen Snapshot abzuschließen, ohne das Betriebssystem für einen erheblichen Zeitraum anzuhalten
(mehrere Dutzend Minuten)__. Wenn der Hypervisor den Snapshot nicht abschließen kann, wird er genau das tun,
ohne dass ein Eingreifen möglich ist, außer um den Preis einer Beschädigung der virtuellen Maschine.

| Ziel            | Beschreibung                                                                                                                                              |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1H bis 24H | Bei einem Katastrophenfall im primären Rechenzentrum entspricht die maximal verlorene Datenmenge der letzten Übertragung der Schreibvorgänge an den Standby-Standort. |
| RTO  < 15 Min.  | Startvorgang der gestoppten virtuellen Maschine am entfernten Standort                                                                                |

Bei Bedarf oder bei einem Ausfall einer Maschine am primären Standort wird die gespiegelte Maschine am Standby-Standort aktiviert.
Der Wiederanlauf erfordert, dass am Standby-Standort Rechenleistung und RAM im Standby reserviert wurden. Am
passiven Standort muss derselbe Speicherplatz vorhanden sein wie am aktiven Standort.


*__Hinweis__: Der minimale RPO muss in Abhängigkeit von der Änderungsrate der virtuellen Maschine festgelegt werden.*

## Dienstverfügbarkeit

| Element        | Verfügbarkeitsziel, gemessen über einen Monat |
|----------------|-----------------------------------------------|
| Compute        | 99,99 %, inklusive Wartungsfenster            |
| Blockspeicher  | 99,99 %, inklusive Wartungsfenster            |

Das Verfügbarkeitsziel für Compute setzt mindestens zwei Hypervisoren pro Cluster mit aktivierter Funktion __High Availability__ (HA) voraus: Sie startet Ihre virtuellen Maschinen automatisch auf einem anderen Hypervisor neu. In einer Verfügbarkeitszone, die nur einen einzigen Hypervisor enthält, ist kein automatischer Neustart möglich. Jede Anfrage im Zusammenhang mit der Verfügbarkeit muss über ein Incident-Ticket gemeldet werden.

## Verantwortlichkeiten

Die Aufteilung der Verantwortlichkeiten zwischen dem Kunden und Cloud Temple ist in der [IaaS-Verantwortlichkeitsmatrix (RACI)](../contractual/iaas/raci.md) beschrieben.

## Reversibilität

| Vorgang                   | Lieferergebnis               | Frist       | Kosten       |
|---------------------------|------------------------------|-------------|--------------|
| Export der VMs            | VMware-Formate (OVF/VMDK)    | 30 Tage     | Kostenlos    |
| Migrationsunterstützung   | Technischer Support          | Auf Anfrage | Nach Angebot |
| Sichere Löschung          | Vernichtungszertifikat       | 7 Tage      | Inklusive    |

## Preise

Die Preise des Angebots IaaS VMware werden nicht veröffentlicht. Um die Preiskonditionen zu erfahren, wenden Sie sich an den Vertrieb von Cloud Temple:
[Kontakt aufnehmen](https://www.cloud-temple.com/contactez-nous/).
