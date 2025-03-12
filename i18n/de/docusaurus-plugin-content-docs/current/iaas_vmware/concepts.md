---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple ist darauf ausgelegt, kritische Anforderungen an Kontinuität und Notfallwiederherstellung zu erfüllen, mit einem besonderen Schwerpunkt auf anspruchsvolle Branchen wie Industrie, Bankwesen und Versicherungen. Basierend auf modernster Technologie gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige technologische Plattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Computing: **CISCO UCS**.
- Speicher: **IBM Spectrum Virtualize**, **IBM FlashSystem** für Blockspeicher.
- Netzwerk: **JUNIPER**.
- Virtualisierung: **VMware**, bietet eine zuverlässige und erprobte Basis zur Verwaltung Ihrer Cloud-Umgebungen.
- Backup: **IBM Spectrum Protect Plus**, zur Orchestrierung und Speicherung von Backups.

Diese Architektur basiert auf dem **VersaStack**-Modell, einer Allianz zwischen Cisco und IBM, die eine breite Kompatibilität mit den wichtigsten Softwareanbietern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig über APIs und einen Terraform-Provider automatisiert, bietet das IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- **Dedizierte Ressourcen**: Computing-Blades, Speicher-Volumes und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen Kunden geteilt.
- **Maximale Vorhersehbarkeit**: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf den Speicher und profitieren von klarer, monatlich berechneter Verbrauchsabrechnung.

Die Plattform ist von der [ANSSI](https://www.ssi.gouv.fr/) als **SecNumCloud** zertifiziert und garantiert ein hohes Maß an Automatisierung und Sicherheit.

## Hauptfunktionen

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- Bedarfsgerechter Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Gekreuzte Backups mit konfigurierbarer Aufbewahrungsdauer.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Verwaltung über die [Shiva-Konsole](../console/console.md) oder im Modus Infrastruktur als Code über APIs und den Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                    |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Datenhosting in Frankreich und Konformität mit der DSGVO.                                                                                        |
| Sicherheit           | Hochsichere Plattform, zertifiziert nach **SecNumCloud**, **HDS** (Hosting von Gesundheitsdaten), **ISO 27001** und **ISAE 3402 Typ II**.         |
| Hohe Verfügbarkeit   | Plattformverfügbarkeit von 99,99%, monatlich gemessen, einschließlich Wartungsfenster.                                                           |
| Resilienz            | Implementierung von Kontinuitäts- oder Notfallwiederherstellungsplänen je nach Bedarf.                                                             |
| Automatisierung      | Vollständig automatisierte Plattform, konzipiert für die Integration in ein Digitalisierungsprogramm.                                              |
| On-Demand            | Ressourcen sind auf Abruf verfügbar.                                                                                                             |

## Regionen und Verfügbarkeitszonen

Das VMware IaaS-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) gehört zu einer [Region](../additional_content/concepts_regional.md).

Dieser Bereitstellungstyp ermöglicht die Wahl des Standorts der Cluster und deren Verteilung über verschiedene Verfügbarkeitszonen (AZ).
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Implementierung eines Notfallwiederherstellungsplans (DRP) im Falle eines Vorfalls.

---

## Computing

Die von Cloud Temple bereitgestellten Blades sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware, Betriebssystemversion usw.) über die Cloud Temple-Konsole.

Mehrere Kategorien von Compute-Blades sind im Katalog verfügbar, um Ihre Workloads (Virtualisierung, Containerisierung usw.) zu unterstützen.
Diese haben unterschiedliche Eigenschaften und Leistungen, um Ihre Bedürfnisse optimal zu erfüllen. Der Katalog der Compute-Blades wird regelmäßig aktualisiert.

Im Rahmen der Nutzung eines Virtualisierungsangebots besteht ein Hypervisor-Cluster nur aus Compute-Blades desselben Typs (es ist nicht möglich, Blades verschiedener Typen in einem einzigen Cluster zu mischen).

| Referenz              | RAM  __(1)__ | Frequenz __(2)__                          | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU **(4)**           | SKU für das VMware-Angebot     |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | --------------------- | --------------------- | ------------------------------ |
| ECO Blade v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder Äquivalent) | 20 / 40 Threads            | 2 X 10 Gbit/s         |                       | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD Blade v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder Äquivalent) | 32 / 64 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE Blade v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder Äquivalent)   | 48 / 96 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 Blade v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y oder Äquivalent)| 16 / 32 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 Blade v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 oder Äquivalent)   | 36 / 72 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 Blade v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder Äquivalent)   | 56 / 112 Threads           | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 Blade v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder Äquivalent) | 32 / 64 Threads            | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48GB  | csp:fr1:iaas:vmware:perf4:v3    |

__Anmerkungen__ :

- __(1)__ Die gelieferte Speichermenge ist die physisch auf den Blades verfügbare. Es ist nicht möglich, die physische Speichermenge eines Blades zu ändern.

- __(2)__ Minimale Basisfrequenz / Turbofrequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren im BIOS auf maximale Leistung konfiguriert.

- __(3)__ Die physische Konnektivität ist für den Netzwerk- und Blockspeicherzugriff konsolidiert, da die CISCO-Plattform konvergiert ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot entwickelt sich ständig weiter. Am 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das PERF4-Blade mit 2 L40S-Karten mit 48 GB RAM geliefert. Kontaktieren Sie den Support bei Bedarf für weitere Informationen.

Die Verfügbarkeit des Compute-Angebots liegt bei 99,99%, monatlich berechnet, einschließlich Wartungsfenster. Die Berechtigung bei Nichteinhaltung des SLA erfordert die Erstellung eines Incidents-Tickets. Sie müssen auch mindestens zwei Hosts pro Cluster besitzen und die Funktion __High Availability__ (HA) aktivieren.
Diese Funktion ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf dem zweiten Hypervisor neu zu starten.
Falls eine Verfügbarkeitszone nur einen Hypervisor enthält, ist ein automatischer Neustart nicht möglich.

## Netzwerk

Der Netzwerkdienst auf der IaaS-Plattform von Cloud Temple basiert auf einer VPLS-Technologie-Infrastruktur und bietet eine flexible und leistungsstarke Segmentierung, um die Anforderungen der Kunden an Konnektivität und Netzwerksicherheit zu erfüllen.

### VLANs der Stufe 2

Die in der IaaS-Angebot verfügbaren VLANs sind vom Typ **Stufe 2** und bieten eine vollständige Netzwerksicherheit und eine anpassbare Konfiguration entsprechend den Anforderungen.

#### Hauptkonzepte:
- **Gemeinsame Nutzung zwischen Clustern und Verfügbarkeitszonen (AZ)**:
   - Die VLANs können zwischen den verschiedenen AZs und Clustern desselben Tenants geteilt werden.
- **Propagation zwischen Tenants**:
   - Die VLANs können zwischen mehreren Tenants derselben Organisation propagiert werden, um die interne Kommunikation zu erleichtern.

---

### Netzwerkleistung

Die Netzwerkinfrastruktur gewährleistet eine niedrige Latenz für optimale Leistung:
- **Intra-AZ-Latenz**: Weniger als **3 ms**.
- **Inter-AZ-Latenz**: Weniger als **5 ms**.

---

### Wichtige Punkte

1. **Flexibilität**: Die VLANs können so konfiguriert werden, dass sie in Multi-Cluster- und Multi-Tenant-Umgebungen passen.
2. **Hohe Leistung**: Minimale Latenz sorgt für eine schnelle und effektive Kommunikation zwischen den Verfügbarkeitszonen.
3. **Isolation und Sicherheit**: VLANs der Stufe 2 bieten eine strikte Netzwerksicherheit, um Daten und Datenverkehr zu schützen.

---

## Blockspeicher

Cloud Temple bietet mehrere Speicherklassen basierend auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/)
und [IBM SVC](https://www.ibm.com/products/san-volume-controller).

Die Technologie __IBM SVC__ ermöglicht das Bereitstellen der erforderlichen Leistungsstufe
für die Umgebungen unserer Kunden dank der großen Menge an Cache-Speicher, die in den Controllern integriert ist,
und der Möglichkeit, alle IOPS eines Servers auf mehrere SANs zu verteilen.

Sie wird auch verwendet, um die Replikation Ihrer Blockspeicher-LUNs zwischen Verfügbarkeitszonen zu ermöglichen oder Eingriffe an den Speicherarrays zu erleichtern.

Der Speicher besteht hauptsächlich aus FLASH NVME-Speicher, der für professionelle Workloads ausgelegt ist.
Die Festplatten werden von den Speicherarrays im [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.

Die Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungsbedürfnisse in einem wirtschaftlich effizienten Kontext. Mehrere Leistungsstufen sind verfügbar:

| Referenz                          | Einheit | SKU                                          |
|-----------------------------------|---------|----------------------------------------------|
| FLASH - Essenziell - 500 IOPS/TB  | 1 GB    | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GB    | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GB    | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GB    | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GB    | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivierung       | 1 TB    | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__ :*

- *Die effektive Leistung für eine Speicherklasse ist mit dem tatsächlich bestellten Volumen verbunden, gemäß dem Konzept "IOPS/TB", was "IOPS-Limit pro zugewiesenem Terabyte" bedeutet,*
> *So hat beispielsweise ein 0,5-TB-Volume in der Leistungsklasse 'Standard' eine IOPS-Begrenzung von 750 IOPS,*
> *Ebenso hat ein 10-TB-Volume in der Leistungsklasse 'Ultra' eine IOPS-Begrenzung von 150.000 IOPS,*
- *Die IOPS-Begrenzung wird auf das Volume angewendet, also auf den Begriff des Datastores in einer VMware-Umgebung,*
- *Die Verfügbarkeit des Speichers beträgt 99,99%, monatlich gemessen, einschließlich Wartungsfenster,*
- *Es gibt keine Einschränkungen oder Quoten für Lese- oder Schreibvorgänge,*
- *Es gibt keine Abrechnung nach IOPS,*
- *Es gibt keine Leistungszusage für die Klasse __'Mass Storage'__,*
- *Die Mindestgröße einer Speicher-LUN beträgt 500 GB,*
- *Bei der Verwendung eines Speicherreplikationsmechanismus müssen die Leistungen in beiden Verfügbarkeitszonen identisch sein,*
- *Es werden keine "intelligenten" Optimierungsmechanismen wie Kompression oder Deduplizierung eingesetzt: Wenn Sie 10 TB Speicher reservieren, haben Sie physisch 10 TB nutzbaren Speicher auf den IBM-Maschinen.*
- *Die Speicher-LUNs sind der Kundenumgebung gewidmet.*

### Nutzung im Rahmen des VMware-Compute-Angebots

Im Rahmen der Nutzung von Blockspeicher in Form eines Datastores im Compute-Angebot von Cloud Temple sind **mehrere wichtige Überlegungen zu berücksichtigen**:

1. **Swap-Datei (.VSWP) beim Starten von virtuellen Maschinen**: Wenn eine virtuelle Maschine startet, erstellt sie eine .VSWP-Datei in der Größe ihres Speichers auf der Festplatte. Daher müssen Sie immer genügend freien Speicherplatz in Ihrem Datastore haben, der der Summe der Speichergrößen Ihrer virtuellen Maschinen entspricht, um sie starten zu können. Wenn Ihr Datastore beispielsweise 1 Tio Blockspeicher hat und Sie 10 virtuelle Maschinen mit jeweils 64 Gio Speicher starten möchten, sind 640 Gio Festplattenspeicher erforderlich. Ohne diesen Speicherplatz wird das Starten der Maschinen durch die verfügbare Kapazität zur Erstellung der Swap-Dateien eingeschränkt.

2. **Freier Speicherplatz für Sicherungssnapshots**: Der Sicherungsservice verwendet Snapshots. Daher müssen Sie immer genügend freien Speicherplatz haben, um einen Snapshot während der Sicherung einer virtuellen Maschine zu erstellen. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und der zum Abschluss der Sicherung erforderlichen Zeit ab. In der Regel wird empfohlen, mindestens 10 % freien Speicherplatz für diesen Vorgang beizubehalten.

3. **Verwaltung dynamischer Festplatten**: Seien Sie vorsichtig mit der Verwendung dynamischer Festplatten. Wenn Sie ihr Wachstum nicht kontrollieren, kann ein Mangel an physischem Speicherplatz im besten Fall zu einem Einfrieren (Freeze) der virtuellen Maschine führen oder im schlimmsten Fall zu einem Absturz mit Datenkorruption. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datastores genau zu überwachen, wenn Sie diesen Festplattentyp verwenden.

Eine proaktive Verwaltung des Speicherplatzes ist unerlässlich, um das ordnungsgemäße Funktionieren Ihrer virtuellen Maschinen und die Zuverlässigkeit der Sicherungen sicherzustellen. Stellen Sie sicher, dass immer genügend Speicherplatz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten vorhanden ist.

## Backup-Mode-Speicher

Der Speicher, der der Sicherung Ihrer virtuellen Maschinen gewidmet ist, wird von der Plattform innerhalb des bestellten Quotas automatisch bereitgestellt.

| Referenz               | Maßeinheit | SKU                                      |
|------------------------|------------|------------------------------------------|
| MASS STORAGE - Archiv  | 1 Tio      | csp:(region):iaas:storage:bloc:backup:v1 |


### Replikation von Blockspeicher

#### Grundsätze

Um die Umsetzung Ihrer Disaster-Recovery-Pläne zu ermöglichen, wenn eine Geschäftskontinuitätssituation mit Anwendungsmethoden nicht möglich ist und die Replikation virtueller Maschinen nicht geeignet ist, bietet Cloud Temple __Replikationsmechanismen für Blockspeicher zwischen den Verfügbarkeitszonen einer Region__ an.

Diese Replikationsmechanismen werden zusätzlich zu den Sicherungen auf den Speicher-LUNs Ihrer Umgebungen angewendet.
Die Entscheidung, ob ein Replikationsmechanismus in einer Umgebung verwendet wird, __hängt von vielen Faktoren ab, darunter deren Kritikalität, die zulässige Datenverlusttoleranz oder die angestrebte Leistung__ für die Anwendung.

Cloud Temple bietet zwei Typen von Mechanismen, die in einer aktiv/passiv-Konfiguration implementiert werden:

- Die __asynchrone__ Replikation (oder __'Global Mirror'__) : *Die Funktion __'Global Mirror'__ bietet einen asynchronen Kopiervorgang.
Wenn ein Host auf das Primärvolumen schreibt, wird die Bestätigung des Abschlusses der I/O empfangen, bevor der Schreibvorgang auf das Sekundärvolumen kopiert wird. Wenn ein Failover initiiert wird, muss die Anwendung alle Aktualisierungen wiederherstellen und anwenden, die nicht auf dem Sekundärvolumen bestätigt wurden. Wenn die I/O-Operationen auf dem Primärvolumen für eine kurze Zeit unterbrochen werden, kann das Sekundärvolumen eine exakte Übereinstimmung mit dem Primärvolumen werden. Diese Funktion ist mit einem kontinuierlichen Sicherungsprozess vergleichbar, bei dem immer die letzten Aktualisierungen fehlen. Wenn Sie Global Mirror für die Wiederherstellung nach einem Desaster verwenden, sollten Sie darüber nachdenken, wie Sie mit diesen fehlenden Aktualisierungen umgehen möchten.*

- Die __synchrone__ Replikation (oder __'Metro Mirror'__) : *Die Funktion __'Metro Mirror'__ ist eine Art Ferndatenkopie, die eine synchrone Kopie der Daten von einem Primärvolumen auf ein Sekundärvolumen erstellt. Bei synchronen Kopien schreiben Hostanwendungen auf das Primärvolumen, erhalten jedoch erst eine Bestätigung, dass der Schreibvorgang abgeschlossen ist, wenn die Daten auf das Sekundärvolumen geschrieben wurden. Dies stellt sicher, dass beide Volumen identische Daten enthalten, wenn der Kopiervorgang abgeschlossen ist. Nachdem der anfängliche Kopiervorgang abgeschlossen ist, hält die Funktion Metro Mirror fortlaufend eine vollständig synchronisierte Kopie der Quelldaten am Zielort. __Seit dem 1. Januar 2024 wird die 'Metro Mirror'-Funktion nicht mehr vermarktet.__*


Es wird dann ein Standort als "aktiv" oder "primär" und ein Standort als "passiv" oder "Standby" definiert.
Der Disaster-Recovery-Plan wird im Falle eines Desasters oder im Rahmen einer Testanforderung für den DR-Plan aktiviert.
Der passive Standort übernimmt dann die Rolle des aktiven Standorts.

#### Asynchrone Replikation

Wenn Ihre Workloads kurze Wiederherstellungszeiten erfordern und es nicht akzeptabel
oder angemessen ist, Anwendungsmethoden / virtuelle Maschinen-Replikationen zu verwenden,
kann eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region repliziert werden.

Dieses Angebot ermöglicht ein __RPO von 15Mn__ und ein __RTO von weniger als 4H__. Es ermöglicht eine viel schnellere Wiederaufnahme als
die Implementierung einer Sicherungswiederherstellung.

In einem asynchron replizierten Speicher-Volumen (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller der
beiden Verfügbarkeitszonen zusammen, um die Schreibvorgänge an beiden Standorten durchzuführen.
Der Master-Standort wartet nicht auf die Schreibbestätigung des Slave-Standorts.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __eine Schreibvorgang auf einem Global-Mirror-Volumen__ durchführen: Er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, den Schreibvorgang durchzuführen,
3. der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SANs und führt dann den Schreibvorgang lokal durch,
4. Er bestätigt dem Hypervisor, der die Anfrage gestellt hat,
5. __Die Hypervisoren des entfernten Standorts greifen nicht direkt auf die Global Mirror-LUN zu__: Eine Serviceanfrage ist erforderlich.


| SLA       | Beschreibung                                                                                                                                                |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | Im Falle eines Ausfalls des Hauptrechenzentrums entspricht die maximal verlorene Datenmenge maximal den letzten 15 Minuten der Schreibvorgänge      |
| RTO < 4H  | Im Falle eines Ausfalls des Hauptrechenzentrums ist die Wiederaufnahme des Betriebs je nach Komplexität der Umgebungen innerhalb von 4 Stunden garantiert|

Im Falle der Aktivierung des DR-Plans führt das Cloud Temple-Team eine Präsentationsoperation der LUN __'Global Mirror'__ an die entfernten Hypervisoren durch, damit diese auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher eine Reservierung von Rechenleistung und RAM im 'Standby'-Standort, um im Falle eines Notfalls den Betrieb wieder aufnehmen zu können.

Der Einsatz dieser Technologie erfordert auch eine Verdopplung des Speicherplatzes: Es ist notwendig, genau den gleichen Speicherplatz am entfernten Standort wie am lokalen Standort zu haben.

Die Verwendung dieses Mechanismus kann die Anwendungsleistung um bis zu 10 % beeinträchtigen. __Nur die Speicherkategorien 500 Iops/To, 1500 Iops/To und 3000 Iops/To sind kompatibel.__


| Referenz                           | Einheit | SKU                                               |
|------------------------------------|---------|---------------------------------------------------|
| STORAGE - Global Replication SAN   | 1 Tio   | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__* :

- *Da das Angebot asynchron ist, kann es bei einem Notfall vorkommen, dass einige Festplattenvorgänge nicht auf den entfernten Standort geschrieben wurden. Es kann daher ein Risiko für die Datenkonsistenz bestehen, das in der Risikobewertung des Wiederherstellungsplans berücksichtigt werden sollte.*
- *Die Blockspeicherreplikation erfolgt für virtuelle Maschinen und Anwendungen unsichtbar,*
- *Es ist daher wichtig, bevorzugt Anwendungsszenarien oder gegebenenfalls virtuelle Maschinen-Replikationen zu verwenden,*
- *Die Rechenleistung und der Speicherplatz am Wiederherstellungsstandort können reduziert werden, um Kosten zu optimieren, sofern eine verschlechterte Situation für das Geschäft im Rahmen des Wiederherstellungsplans akzeptabel ist.*














## Virtualisierung VMware

Das Cloud Temple Virtualisierungsangebot, das durch SecNumCloud qualifiziert ist, basiert auf der Technologie __VMware Vsphere__.

Die Plattform wird automatisch von Cloud Temple verwaltet (Aufrechterhaltung der Sicherheitsbedingungen, Betriebssicherheit usw.).
Sie ist über die grafische Oberfläche der Shiva-Konsole oder über die zugehörigen APIs steuerbar.

*__Hinweis__* : *Aus Sicherheitsgründen, die mit der SecNumCloud-Qualifikation zusammenhängen,
__ist es dem Auftraggeber nicht möglich, direkt auf die VMware-Virtualisierungsplattform zuzugreifen__ (insbesondere kein direkter Zugriff auf das vCenter).
In der Tat erfordert die SecNumCloud-Qualifikation __eine vollständige Trennung__ zwischen den Steuerungsschnittstellen der technischen Assets und der Auftraggeberschnittstelle (die Shiva-Konsole).*

- Eingesetzte Produkte sind VMware ESXi, VMware Vcenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots verwendet nicht die VMware NSX-Technologie, sondern wird hardwareseitig durch Juniper-Technologie und VPLS-Protokoll gesteuert.*
- *Der Speicher verwendet nicht die VMware vSan-Technologie, sondern ausschließlich IBM-SANs mit 32G-Fiber-Channel.*
- *Es werden keine versteckten Optimierungen (Kompression, Deduplikation usw.) durchgeführt.*

### Definition eines Recheneinheiten-Clusters ('Cpool')

Der __'Cpool'__ ist eine Gruppierung von VMware ESXi-Hypervisoren, auch bekannt als *'ESX-Cluster'*.

Die Hosts in einem __'Cpool'__ gehören alle __zum gleichen Tenant und zur gleichen Verfügbarkeitszone__ (AZ). Sie müssen notwendigerweise die gleiche Klasse haben:
__es ist nicht möglich, verschiedene Modelle von Recheneinheiten innerhalb eines Clusters zu mischen__.

Alle Recheneinheiten werden mit dem maximal physikalischen Speicher geliefert, eine softwareseitige Speichernutzungseinschränkung wird auf Clusterebene angewendet, um sicherzustellen, dass sie der abgerechneten RAM entspricht.

Standardmäßig hat jede Recheneinheit im __'Cpool'__ 128 GB aktivierten Speicher.

Ein __'Cpool'__ kann maximal 32 Hypervisoren enthalten. Überschreitet diese Zahl, muss ein zweiter Cluster erstellt werden.

Der Speicher kann zwischen den __'Cpool'__ geteilt werden.

### Speicherzuweisung für einen 'Cpool'

Die RAM-Reservierung ist pro Cluster konfigurierbar. Sie können die RAM-Menge verringern oder erhöhen, sodass sie auf Clusterebene Ihren Anforderungen entspricht.

__Achten Sie darauf, eine durchschnittliche Speicherauslastung von 85 % pro Recheneinheit nicht zu überschreiten__.
Tatsächlich verwendet die VMware-Technologie eine Kompressionsoptimierungsmethode, die Ihre Arbeitslastleistung stark beeinträchtigen und die Fehlerdiagnose erschweren kann.
Auch ein zu hoher Speicherdruck auf Ihren Recheneinheiten wird den Hypervisor zwingen, einen Teil seines Speichers auf die Festplatte auszulagern, um den Anforderungen der virtuellen Maschinen gerecht zu werden.

Dieser Fall, genannt __'Ballooning'__, beeinträchtigt die Gesamtleistung der virtuellen Maschinen auf dem betreffenden Speicher (Datastore) erheblich.
__Die Diagnose ist in diesem Kontext schwierig__, da Ihre Messmethode Auswirkungen auf die CPU und nicht auf den Speicher oder den Speicherplatz feststellen wird.
Beachten Sie auch, dass der Hypervisor beim Start einer virtuellen Maschine zuerst __eine Swap-Datei__ (.vswap) auf der Festplatte erstellt,
die der Speichergröße der betreffenden virtuellen Maschine entspricht. Dies muss __in der Speicherdimensionierung berücksichtigt werden__.

Jede Recheneinheit wird mit softwareseitig aktivierten 128 GB Speicher auf Clusterebene im __'Cpool'__ geliefert, verfügt jedoch physisch über den gesamten zuweisbaren Speicher.

Zum Beispiel für einen Cluster mit drei Hosts des Typs ```vmware:standard:v2```, die RAM-Reservierung bei der Aktivierung des __'Cpool'_ beträgt 3 x 128 GB = 384 GB RAM.
Sie können sie maximal auf 3 x 384 GB = 1152 GB Speicher erweitern.

    Minimale Speicher eines 'Cpool' = Anzahl der Hosts X 128 GB Speicher
    Maximale Speicher eines 'Cpool' = Anzahl der Hosts X die physikalische Speichermenge der Recheneinheit

### Kataloge von virtuellen Maschinen Cloud Temple

Cloud Temple stellt Ihnen regelmäßig von unseren Teams aktualisierte `Templates`-Kataloge zur Verfügung.
Es umfasst derzeit mehrere Dutzend `Templates` und Images, die Sie auf Ihre virtuellen Maschinen montieren können.

### Aktualisierung der Hypervisoren
Cloud Temple stellt regelmäßig Builds für die Hypervisoren zur Verfügung, um sicherzustellen, dass Sicherheitsupdates angewendet werden.
Die Aktualisierung der Hypervisoren bleibt jedoch in Ihrer Verantwortung, da wir keine Einsicht in Ihre geschäftlichen Anforderungen haben.

Der Aktualisierungsprozess ist vollständig automatisiert. Um die Servicekontinuität zu gewährleisten, sind während der Aktualisierung mindestens zwei Hypervisoren pro Cluster erforderlich. Stellen Sie sicher, dass Sie die erforderlichen Berechtigungen für diese Aktionen haben.


### Verwaltung der Affinität Ihrer virtuellen Maschinen

Die __Affinitäts- und Anti-Affinitätsregeln__ ermöglichen es, den Standort der virtuellen Maschinen auf Ihren Hypervisoren zu steuern.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu verwalten.
Zum Beispiel können sie dazu beitragen, die Arbeitslast zwischen Servern auszugleichen oder ressourcenintensive Arbeitslasten zu isolieren.
In einem VMware __'Cpool'__ werden diese Regeln häufig verwendet, um das Verhalten virtueller Maschinen mit vMotion zu verwalten.
vMotion ermöglicht das Verschieben virtueller Maschinen von einem Host zu einem anderen ohne Dienstunterbrechung.

Durch das Konfigurieren der Regeln können Sie:

- __Affinitätsregeln__ : Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf dem gleichen physischen Host ausgeführt werden.
Sie dienen zur Leistungssteigerung, indem sie virtuelle Maschinen, die häufig miteinander kommunizieren,
auf dem gleichen Server halten, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind nützlich in Szenarien,
bei denen die Leistung kritisch ist, wie bei Datenbanken oder Anwendungen, die schnelle Kommunikation zwischen Servern benötigen.

- __Anti-Affinitätsregeln__ : Im Gegensatz dazu stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen
nicht auf dem gleichen physischen Host ausgeführt werden. Sie sind wichtig für die Verfügbarkeit und Ausfallsicherheit, beispielsweise,
um zu vermeiden, dass kritische Maschinen im Falle eines einzelnen Serverausfalls alle betroffen sind.
Anti-Affinitätsregeln sind entscheidend für Anwendungen, die hohe Verfügbarkeit erfordern,
wie Produktionsumgebungen, bei denen Fehlertoleranz oberste Priorität hat.
Zum Beispiel möchten Sie nicht, dass Ihre beiden Active Directories auf demselben Hypervisor liegen.

Beim Erstellen einer Regel definieren Sie die Art der Regel (Affinität / Anti-Affinität), den Namen der Regel,
deren Aktivierungszustand (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln betreffen die virtuellen Maschinen untereinander (keine Regeln zwischen Hypervisoren und virtuellen Maschinen).*


### Asynchrone Replikation Ihrer virtuellen Maschinen in einer VMware-Umgebung

Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, bei dem die Schreibvorgänge am Quell-Hypervisor in regelmäßigen Abständen auf den Standby-Standort übertragen werden.

Nach einer initialen Hot-Kopie des gesamten aktiven Speichers auf den Standby-Standort werden nur die Schreibvorgänge in regelmäßigen Abständen auf den Standby-Standort übertragen.
Dieses Intervall hängt vom Schreibvolumen ab (von jeder Stunde bis zu allen 24 Stunden).
Die Replikation von virtuellen Maschinen basiert auf dem Snapshot-Mechanismus des Hypervisors. Daher weist diese Lösung dieselben Nachteile auf, insbesondere die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine, da der Snapshot-Prozess ein rekursiver Mechanismus zum Abschluss des Snapshots ist.

Das typische Beispiel einer Maschine, die den Replikationsmechanismus virtueller Maschinen nicht unterstützt, ist ein FTP-Server, der Echtzeitströme von Überwachungskameras empfängt. __Die Maschine verbringt ihre Zeit mit Schreiben und wird nicht in der Lage sein, einen Snapshot abzuschließen, ohne das Betriebssystem für einen signifikanten Zeitraum (einige Dutzend Minuten) anzuhalten__. Wenn der Hypervisor den Snapshot nicht abschließen kann, wird er genau das tun, ohne die Möglichkeit einzugreifen, außer die virtuelle Maschine zu beschädigen.

| SLA             | Beschreibung                                                                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1H bis 24H | Im Falle eines Notfalls im Hauptrechenzentrum ist die maximale verlorene Datenmenge die der letzten Schreiboperation auf dem Standby-Standort.                |
| RTO  < 15mn     | Startoperation der gestoppten virtuellen Maschine auf dem entfernten Standort                                                                                   |


Bei Bedarf oder bei einem Ausfall einer Maschine am Hauptstandort wird die Spiegelmaschine am Standby-Standort aktiviert. Die Wiederaufnahme des Betriebs erfordert reservierte Rechenleistung und RAM im Standby-Modus am Standby-Standort. Es ist notwendig, den gleichen Speicherplatz am passiven Standort wie am aktiven Standort zu haben.


| Referenz                          | Einheit | SKU                                            |
|-----------------------------------|---------|------------------------------------------------|
| PRA - Replikation VMware zwischen AZ | 1 vm   | csp:(region):iaas:vmware:lizenz:replikation:v1 |

*__Hinweis__ : Die Berechnung des minimalen RPO muss basierend auf der Änderungsrate der virtuellen Maschine definiert werden.*












## Sicherung virtueller Maschinen
Cloud Temple bietet __eine native und nicht deaktivierbare Kreuzsicherungsarchitektur__ an (sie ist im französischen Secnumcloud-Qualifikationsprozess obligatorisch).

Die Sicherungen werden in einer Verfügbarkeitszone und in einem anderen physischen Rechenzentrum gespeichert als dasjenige, das die virtuelle Maschine beherbergt.

Dies bietet Schutz im Falle eines größeren Fehlers im Produktionsrechenzentrum und ermöglicht die Wiederherstellung in einem sekundären Rechenzentrum (z. B. bei einem Brand).

Diese Lösung umfasst:

- Die Offsite-Sicherung aller Festplatten,
- Die Präsentation und den sofortigen Start einer virtuellen Maschine aus der Masseninfrastruktur und das Hot-Reloading auf die Produktions-SANs,
- Die teilweise Wiederherstellung von Dateien aus der Sicherung,
- Eine durch die Masseninfrastrukturspeicherzuweisung begrenzte Aufbewahrungsdauer.

Diese Sicherungsinfrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, eine agentenlose, benutzerfreundliche Lösung, die die Automatisierung der Sicherungsprozesse sowie eine Optimierung des Massenspeichers ermöglicht.

Die Sicherungs- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate der Umgebungen ab.
Die Sicherungsrichtlinie kann für jede virtuelle Maschine von der [Cloud Temple Konsole](../console/konsole.md) aus konfiguriert werden.

*__Hinweis :__*

*__Einige virtuelle Maschinen sind nicht mit dieser Sicherungstechnologie kompatibel,__ die die Snapshot-Mechanismen des Hypervisors verwendet. Dies sind typischerweise Maschinen mit konstanten Scheibenlasten. Der Hypervisor kann den Snapshot nicht abschließen, was dazu führt, dass die virtuelle Maschine eingefroren werden muss, um den Abschlussvorgang zu beenden. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht abbrechbar.*

*Die Lösung besteht darin, die Festplatte auszuschließen, die Ziel konstanter Schreibvorgänge ist, und die Daten auf andere Weise zu sichern.*

| Referenz                                                | Einheit | SKU                            |
| ------------------------------------------------------- | ------- | ------------------------------ |
| SICHERUNG - Zugang zum IBM Spectrum Protect Plus Service| 1 VM    | csp:(region):iaas:backup:vm:v1 |


#### Eine Sicherungsrichtlinie erstellen
Um eine neue Sicherungsrichtlinie hinzuzufügen, muss eine Anfrage beim Support gestellt werden. Der Support ist über das Symbol mit dem Rettungsring oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Sicherungsrichtlinie erfolgt durch __eine Dienstanforderung__, in der folgendes angegeben wird:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit E-Mail und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Der Name der Sicherungsrichtlinie
    Die Merkmale (x Tage, y Wochen, z Monate, ...)
