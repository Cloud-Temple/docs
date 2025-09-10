---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple wurde entwickelt, um kritische Anforderungen an Geschäftskontinuität und Notfallwiederherstellung zu erfüllen, mit einem besonderen Fokus auf anspruchsvolle Sektoren wie Industrie, Banken und Versicherungen. Basierend auf modernsten Technologien gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international anerkannte Technologiepartner:

- Compute: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Blockspeicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __VMware__, das eine zuverlässige und bewährte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen bietet.
- Backup: __IBM Spectrum Protect Plus__, zur Orchestrierung und Speicherung von Backups.

Diese Architektur basiert auf dem __VersaStack__-Modell, einer Allianz zwischen Cisco und IBM, die eine breite Kompatibilität mit den wichtigsten Softwareanbietern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig durch APIs und einen Terraform-Provider automatisiert, bietet das IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- __Dedizierte Ressourcen__: Compute-Blades, Speichervolumes und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen Kunden geteilt.
- __Maximale Vorhersehbarkeit__: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf den Speicher und profitieren von einer klaren, monatlichen verbrauchsabhängigen Abrechnung.

Die Plattform ist von der [ANSSI](https://www.ssi.gouv.fr/) __SecNumCloud__-zertifiziert, was ein hohes Maß an Automatisierung und Sicherheit garantiert.

## Hauptmerkmale

- On-Demand, dedizierte Rechenressourcen (CPU, RAM).
- On-Demand-Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Cross-Site-Backups mit konfigurierbarer Aufbewahrung.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Verwaltung über die [Shiva Console](../console/console.md) oder im Infrastructure as Code-Modus über APIs und den Terraform-Provider.

## Vorteile

| Vorteil             | Beschreibung                                                                                                                                  |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Digitales Vertrauen | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                             |
| Sicherheit          | Hochsichere Plattform, zertifiziert nach __SecNumCloud__, __HDS__ (Hosting von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__.      |
| Hochverfügbarkeit   | 99,99 % Plattformverfügbarkeit, monatlich gemessen, einschließlich Wartungsfenstern.                                                          |
| Resilienz           | Implementierung von Geschäftskontinuitäts- oder Notfallwiederherstellungsplänen nach Bedarf.                                                  |
| Automatisierung     | Vollständig automatisierte Plattform, die für die Integration in ein digitales Transformationsprogramm konzipiert ist.                          |
| On-Demand           | Ressourcen bei Bedarf verfügbar.                                                                                                              |

## Regionen und Verfügbarkeitszonen

Das IaaS VMware-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Art der Bereitstellung ermöglicht es Ihnen, den Standort der Cluster zu wählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies sorgt für eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Implementierung eines Notfallwiederherstellungsplans (DRP) im Falle eines Vorfalls.

---

## Compute

Die von Cloud Temple bereitgestellten Blades sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple (Firmware, Betriebssystemversion usw.) über die Cloud Temple-Konsole verwaltet.

Im Katalog sind mehrere Kategorien von Compute-Blades verfügbar, um Ihre Workloads (Virtualisierung, Containerisierung, ...) zu unterstützen.
Diese haben unterschiedliche Eigenschaften und Leistungen, um Ihren Anforderungen am besten gerecht zu werden. Der Katalog der Compute-Blades wird regelmäßig aktualisiert.

Bei Verwendung mit einem Virtualisierungsangebot besteht ein Hypervisor-Cluster ausschließlich aus Compute-Blades des gleichen Typs (es ist nicht möglich, verschiedene Blade-Typen im selben Cluster zu mischen).

| Referenz              | RAM  __(1)__ | Frequenz __(2)__                          | Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          | SKU für VMware-Angebot      |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO Blade v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder äquivalent)  | 20 / 40 Threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD Blade v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE Blade v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder äquivalent)    | 48 / 96 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 Blade v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y oder äquivalent) | 16 / 32 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 Blade v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 oder äquivalent)    | 36 / 72 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 Blade v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder äquivalent)    | 56 / 112 Threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 Blade v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Hinweise__:

- __(1)__ Die gelieferte Speichermenge ist die physisch auf den Blades verfügbare Menge. Es ist nicht möglich, die physische Speichermenge eines Blades zu ändern.

- __(2)__ Die minimale Basisfrequenz / Turbofrequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren auf maximale Leistung auf BIOS-Ebene konfiguriert.

- __(3)__ Die physische Konnektivität wird für den Netzwerkzugriff und den Blockspeicherzugriff gemeinsam genutzt, da die CISCO-Plattform konvergiert ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot entwickelt sich ständig weiter. Ab dem 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das PERF4-Blade mit 2 L40S-Karten mit 48 GB RAM geliefert. Kontaktieren Sie bei Bedarf den Support für weitere Details.

Die Verfügbarkeit des Compute-Angebots beträgt 99,99 %, monatlich berechnet, einschließlich Wartungsfenstern. Die Berechtigung im Falle der Nichteinhaltung des SLA unterliegt
der Erstellung eines Incident-Tickets. Sie müssen außerdem mindestens zwei Hosts pro Cluster haben und die Funktion __High Availability__ (HA) aktivieren.
Diese Funktion ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf dem zweiten Hypervisor neu zu starten.
Wenn eine Verfügbarkeitszone nur einen Hypervisor enthält, ist ein automatischer Neustart nicht möglich.

## Netzwerk

Der Netzwerkdienst auf der Cloud Temple IaaS-Plattform basiert auf einer Netzwerkinfrastruktur mit VPLS-Technologie, die eine flexible und leistungsstarke Segmentierung bietet, um die Kundenanforderungen an Konnektivität und Netzwerkisolation zu erfüllen.

### Layer-2-VLANs

Die im IaaS-Angebot bereitgestellten VLANs sind vom Typ __Layer 2__ und bieten eine vollständige Netzwerkisolation und eine anpassbare Konfiguration je nach Bedarf.

#### Schlüsselkonzepte

- __Gemeinsame Nutzung zwischen Clustern und Verfügbarkeitszonen (AZ)__:
  - VLANs können zwischen verschiedenen AZs und verschiedenen Clustern desselben Mandanten gemeinsam genutzt werden.
- __Mandantenübergreifende Weitergabe__:
  - VLANs können zwischen mehreren Mandanten derselben Organisation weitergegeben werden, was die interne Kommunikation erleichtert.

---

### Netzwerkleistung

Die Netzwerkinfrastruktur gewährleistet eine geringe Latenz für optimale Leistung:

- __Intra-AZ-Latenz__: Weniger als __3 ms__.
- __Inter-AZ-Latenz__: Weniger als __5 ms__.

---

### Kernpunkte

1. __Flexibilität__: VLANs können so konfiguriert werden, dass sie sich an Multi-Cluster- und Multi-Tenant-Umgebungen anpassen.
2. __Hohe Leistung__: Minimale Latenz gewährleistet eine schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. __Isolation und Sicherheit__: Layer-2-VLANs bieten eine strikte Netzwerksegmentierung zum Schutz von Daten und Datenverkehr.

---

## Blockspeicher

Cloud Temple bietet mehrere Speicherklassen an, die auf der [IBM FlashSystem](https://www.ibm.com/flashsystem/)-
und [IBM SVC](https://www.ibm.com/products/san-volume-controller)-Technologie basieren.

Die __IBM SVC__-Technologie liefert das für die Umgebungen unserer Kunden erforderliche Leistungsniveau dank der großen
Menge an Cache-Speicher, der in die Controller integriert ist, und der Möglichkeit, alle IOPS
eines Servers auf mehrere SANs zu verteilen.

Sie wird auch verwendet, um die Replikation Ihrer Blockspeicher-LUNs zwischen
Verfügbarkeitszonen zu ermöglichen oder Eingriffe an Speicher-Arrays zu erleichtern.

Der Speicher ist hauptsächlich vom Typ FLASH NVME, der für professionelle Workloads vorgesehen ist.
Die Festplatten werden von den Speicher-Arrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.

Die Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungszwecke
im Kontext der Wirtschaftlichkeit. Es stehen mehrere Leistungsstufen zur Verfügung:

| Referenz                          | Einheit | SKU                                          |
|-----------------------------------|---------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GiB   | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GiB   | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GiB   | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GiB   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GiB   | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archiving          | 1 TiB   | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__:*

- *Die effektive Leistung für eine Speicherklasse hängt vom tatsächlich bestellten Volumen ab, gemäß dem Begriff "IOPS/TB", was "IOPS-Grenze pro zugewiesenem Tera" bedeutet,*

> *So hat ein 0,5-TB-Volumen in der Leistungsklasse 'Standard' eine IOPS-Grenze von 750 IOPS,*
> *Ebenso hat ein 10-TB-Volumen in der Leistungsklasse 'Ultra' eine IOPS-Grenze von 150.000 IOPS,*

- *Die IOPS-Grenze wird auf das Volumen angewendet, also auf das Datastore-Konzept für eine VMware-Umgebung,*
- *Die Speicherverfügbarkeit beträgt 99,99 %, monatlich gemessen, einschließlich Wartungsfenstern,*
- *Es gibt keine Einschränkungen oder Quoten für das Lesen oder Schreiben,*
- *Es gibt keine Abrechnung pro IOPS,*
- *Es gibt keine Leistungszusage für die Klasse __'Mass Storage'__,*
- *Die Mindestgröße einer Speicher-LUN beträgt 500 GiB,*
- *Bei Verwendung eines Speicherreplikationsmechanismus muss die Leistung in beiden Verfügbarkeitszonen identisch sein,*
- *Es wird kein "intelligenter" Optimierungsmechanismus wie Komprimierung oder Deduplizierung implementiert: Wenn Sie 10 TiB Speicher reservieren, haben Sie physisch 10 TiB nutzbaren Speicher auf den IBM-Maschinen implementiert.*
- *Speicher-LUNs sind der Kundenumgebung gewidmet.*

### Verwendung im Rahmen des VMware-Compute-Angebots

Bei der Verwendung von Blockspeicher als Datastore im VMware-Compute-Angebot von Cloud Temple müssen Sie __mehrere wichtige Überlegungen berücksichtigen__:

1. __Swap-Datei (.VSWP) beim Starten von virtuellen Maschinen__: Wenn eine virtuelle Maschine startet, erstellt sie eine .VSWP-Datei in der Größe ihres Speichers auf der Festplatte. Um Ihre virtuellen Maschinen starten zu können, müssen Sie daher immer über freien Speicherplatz in Ihrem Datastore verfügen, der der Summe der Speichergrößen Ihrer virtuellen Maschinen entspricht. Wenn Ihr Datastore beispielsweise 1 TiB Blockspeicher hat und Sie 10 virtuelle Maschinen mit jeweils 64 GiB Speicher starten möchten, werden 640 GiB Festplattenspeicher benötigt. Ohne diesen Speicherplatz wird der Start der Maschinen durch die verfügbare Kapazität zur Erstellung der Swap-Dateien begrenzt.

2. __Freier Speicherplatz für Backup-Snapshots__: Der Backup-Dienst verwendet Snapshots. Sie müssen daher immer über genügend freien Speicherplatz verfügen, um die Erstellung eines Snapshots beim Sichern einer virtuellen Maschine zu ermöglichen. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und der für die Sicherung erforderlichen Zeit ab. In der Regel wird empfohlen, für diesen Vorgang mindestens 10 % freien Speicherplatz zu lassen.

3. __Verwaltung dynamischer Festplatten__: Seien Sie vorsichtig bei der Verwendung dynamischer Festplatten. Wenn Sie deren Wachstum nicht kontrollieren, kann ein Mangel an physischem Speicherplatz im besten Fall zum Einfrieren der virtuellen Maschine oder im schlimmsten Fall zu einem Absturz mit Datenkorruption führen. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datastores bei der Verwendung dieses Festplattentyps sorgfältig zu überwachen.

Eine proaktive Verwaltung des Festplattenspeichers ist unerlässlich, um den ordnungsgemäßen Betrieb Ihrer virtuellen Maschinen und die Zuverlässigkeit der Backups zu gewährleisten. Stellen Sie sicher, dass Sie immer über den erforderlichen Speicherplatz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten verfügen.

## Backup-Speichermodus

Der für die Sicherung Ihrer virtuellen Maschinen vorgesehene Speicher wird von der Plattform bis zum bestellten Kontingent automatisch bereitgestellt.

| Referenz                | Einheit | SKU                                      |
|--------------------------|---------|------------------------------------------|
| MASS STORAGE - Archiving | 1 TiB   | csp:(region):iaas:storage:bloc:backup:v1 |

### Blockspeicherreplikation

#### Prinzipien

Um die Implementierung Ihrer Notfallwiederherstellungspläne zu ermöglichen, wenn es nicht möglich ist, in
einer Geschäftskontinuitätssituation mit Anwendungsmechanismen zu sein und wenn die Replikation virtueller Maschinen
nicht geeignet ist, bietet Cloud Temple __Blockspeicherreplikationsmechanismen zwischen Verfügbarkeitszonen einer Region__ an.

Diese Replikationsmechanismen werden zusätzlich zu den Backups auf die Speicher-LUNs Ihrer Umgebungen angewendet.
Die Entscheidung für die Verwendung eines Replikationsmechanismus in einer Umgebung __hängt von vielen Faktoren ab, einschließlich ihrer Kritikalität, des tolerierten Datenverlusts oder der angestrebten Leistung__ für die Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen an, die in einer Aktiv/Passiv-Konfiguration bereitgestellt werden:

- __Asynchrone__ Replikation (oder __'Global Mirror'__): *Die Funktion __'Global Mirror'__ bietet einen asynchronen Kopiervorgang.
Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des E/A-Abschlusses empfangen, bevor der
Schreibvorgang für die Kopie auf dem sekundären Volume abgeschlossen ist. Wenn ein Failover-Vorgang eingeleitet wird, muss die Anwendung
alle Aktualisierungen wiederherstellen und anwenden, die auf dem sekundären Volume nicht bestätigt wurden.
Wenn E/A-Vorgänge auf dem primären Volume für einen kurzen Zeitraum angehalten werden,
kann das sekundäre Volume eine exakte Übereinstimmung des primären Volumes werden. Diese Funktion ist mit einem kontinuierlichen
Sicherungsprozess vergleichbar, bei dem die neuesten Aktualisierungen immer fehlen.
Wenn Sie Global Mirror für Notfallwiederherstellungszwecke verwenden, sollten Sie überlegen, wie Sie mit diesen fehlenden Aktualisierungen umgehen möchten.*

- __Synchrone__ Replikation (oder __'Metro Mirror'__): *Die Funktion __'Metro Mirror'__ ist eine Art von Remote-Kopie, die eine synchrone Kopie
der Daten von einem primären Volume auf ein sekundäres Volume erstellt. Bei synchronen Kopien schreiben Host-Anwendungen auf das primäre Volume, erhalten aber keine Bestätigung,
dass der Schreibvorgang abgeschlossen ist, bis die Daten auf das sekundäre Volume geschrieben sind. Dies stellt sicher, dass beide Volumes identische Daten enthalten, wenn
der Kopiervorgang abgeschlossen ist. Nachdem der anfängliche Kopiervorgang abgeschlossen ist, unterhält die Metro Mirror-Funktion
permanent eine vollständig synchronisierte Kopie der Quelldaten am Zielstandort. __Seit dem 1. Januar 2024 wird die Funktion 'Metro Mirror' nicht mehr vermarktet.__*

Wir definieren dann einen "aktiven" oder "primären" Standort und einen "passiven" oder "Standby"-Standort.
Der Notfallwiederherstellungsplan wird im Falle einer Katastrophe oder im Rahmen einer DRP-Testanforderung aktiviert.
Der passive Standort übernimmt dann vom aktiven Standort.

#### Asynchrone Replikation

Wenn Ihre Workloads kurze Wiederherstellungszeiten erfordern und es nicht akzeptabel
oder angemessen ist, Mechanismen wie Anwendungsreplikation / Replikation virtueller Maschinen zu verwenden,
ist es möglich, eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region zu replizieren.

Dieses Angebot bietet einen __RPO von 15 Minuten__ und einen __RTO von weniger als 4 Stunden__. Es ermöglicht eine viel schnellere Wiederherstellung als
die Implementierung einer Backup-Wiederherstellung.

In einem Speichervolumen mit asynchroner Replikation (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller der
beiden Verfügbarkeitszonen zusammen, um Schreibvorgänge an beiden Standorten durchzuführen.
Der Master-Standort wartet nicht auf die Schreibbestätigung des Slave-Standorts.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volume durchführen__: Er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, den Schreibvorgang durchzuführen,
3. Der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN und führt dann den Schreibvorgang lokal durch,
4. Er gibt dem Hypervisor, der die Anfrage gestellt hat, eine __Bestätigung__,
5. __Die Hypervisoren des entfernten Standorts greifen nicht direkt auf die Global Mirror LUN zu__: Eine Serviceanfrage ist erforderlich.

| SLA          | Beschreibung                                                                                                                                      |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min    | Im Falle einer Katastrophe im Hauptrechenzentrum entspricht die maximale Menge an verlorenen Daten maximal den letzten 15 Minuten des Schreibens.   |
| RTO < 4H     | Im Falle einer Katastrophe im Hauptrechenzentrum ist die Geschäftswiederherstellung je nach Komplexität der Umgebungen innerhalb von 4 Stunden garantiert. |

Im Falle einer DRP-Aktivierung führt das Cloud Temple-Team einen Vorgang durch, um die __'Global Mirror'__ LUN den entfernten Hypervisoren zu präsentieren, damit diese auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher, dass auf der 'Standby'-Seite Rechen- und RAM-Ressourcen reserviert wurden, um die Aktivität im Falle einer Katastrophe wieder aufzunehmen.

Die Verwendung dieser Technologie erfordert auch eine Verdoppelung des Festplattenspeichers: Es ist notwendig, auf der entfernten Seite genau den gleichen Speicherplatz wie auf der lokalen Seite zu haben.

Die Verwendung dieses Mechanismus kann die Anwendungsleistung um bis zu 10 % beeinträchtigen. __Nur die Speicherklassen 500 IOPS/TB, 1500 IOPS/TB und 3000 IOPS/TB sind kompatibel.__

| Referenz                          | Einheit | SKU                                               |  
|-----------------------------------|---------|---------------------------------------------------|
| STORAGE - Global SAN Replication  | 1 TiB   | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__*:

- *Da das Angebot asynchron ist, ist es möglich, dass bei einer Katastrophe einige Festplattenoperationen nicht auf die entfernte Seite geschrieben wurden. Es kann daher ein Risiko für die Datenkonsistenz bestehen, das in der Risikoanalyse des Notfallwiederherstellungsplans gemindert werden muss.*
- *Die Blockspeicherreplikation erfolgt für virtuelle Maschinen und Anwendungen transparent,*
- *Daher ist es wichtig, Anwendungsreplikationsszenarien oder möglicherweise die Replikation virtueller Maschinen zu bevorzugen,*
- *Rechenleistung und Speicher am Wiederherstellungsstandort können reduziert werden, um die Kosten zu optimieren, wenn eine verschlechterte Situation für das Unternehmen bei Aktivierung des Notfallwiederherstellungsplans akzeptabel ist.*

## VMware-Virtualisierung

Das SecNumCloud-zertifizierte VMware-Virtualisierungsangebot von Cloud Temple basiert auf der __VMware vSphere__-Technologie.

Die Plattform wird von Cloud Temple automatisch verwaltet (Aufrechterhaltung der Sicherheitsbedingungen, betriebliche Wartung, ...).
Sie kann über die grafische Oberfläche der Shiva-Konsole oder über die zugehörigen APIs gesteuert werden.

*__Hinweis__*: *Aus Sicherheitsgründen im Zusammenhang mit der SecNumCloud-Zertifizierung
__ist es für den Kunden nicht möglich, direkt auf die VMware-Virtualisierungsplattform zuzugreifen__ (insbesondere kein direkter Zugriff auf vCenter).
Tatsächlich schreibt die SecNumCloud-Zertifizierung eine __vollständige Trennung__ zwischen den Verwaltungsschnittstellen der technischen Assets und der Schnittstelle des Kunden (der Shiva-Konsole) vor.*

- Die implementierten Produkte sind VMware ESXi, VMware vCenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots verwendet keine VMware NSX-Technologie, sondern wird hardwaregesteuert durch Juniper-Technologie und das VPLS-Protokoll.*
- *Der Speicher verwendet keine VMware vSAN-Technologie, sondern nur IBM SANs mit 32G Fibre Channel.*
- *Es wird keine versteckte Optimierung implementiert (Komprimierung, Deduplizierung, ...).*

### Definition eines Compute-Blade-Clusters ('Cpool')

Ein __'Cpool'__ ist eine Gruppe von VMware ESXi-Hypervisoren, auch bekannt als *'ESX-Cluster'*.

Die Hosts in einem __'Cpool'__ gehören alle __zum selben Mandanten und zur selben Verfügbarkeitszone__ (AZ). Sie müssen notwendigerweise dieselbe Klasse haben:
__es ist nicht möglich, verschiedene Modelle von Compute-Blades innerhalb desselben Clusters zu mischen__.

Da alle Compute-Blades mit dem maximalen physischen Speicher geliefert werden, wird auf Softwareebene des Clusters eine RAM-Nutzungsbeschränkung angewendet, um sicherzustellen, dass sie dem in Rechnung gestellten RAM entspricht.

Standardmäßig hat jedes Blade 128 GB Speicher, der innerhalb des __'Cpool'__ aktiviert ist.

Ein __'Cpool'__ kann maximal 32 Hypervisoren enthalten. Über diese Grenze hinaus muss ein zweiter Cluster erstellt werden.

Der Speicher kann zwischen __'Cpools'__ geteilt werden.

### Speicherzuweisung für einen 'Cpool'

Die RAM-Reservierung ist pro Cluster konfigurierbar. Sie können die RAM-Menge reduzieren oder erhöhen, um sie an Ihre Bedürfnisse auf Clusterebene anzupassen.

__Achten Sie darauf, einen durchschnittlichen Speicherverbrauch von 85 % pro Compute-Blade nicht zu überschreiten__.
Tatsächlich wird die VMware-Technologie eine Optimierungsmethode vom Typ Komprimierung verwenden, die die Leistung Ihrer Workloads stark beeinträchtigen und die Diagnose erschweren kann.
Ebenso zwingt ein zu hoher Speicherdruck auf Ihre Compute-Blades den Hypervisor, einen Teil seines Speichers auf die Festplatte auszulagern, um die Anforderungen der virtuellen Maschinen zu erfüllen.

Dieser Fall, genannt __'Ballooning'__, beeinträchtigt die Gesamtleistung der virtuellen Maschinen, die sich auf dem betreffenden Speicher (Datastore) befinden, sehr stark.
__Die Diagnose ist in diesem Zusammenhang kompliziert__, da Ihre Metriken Auswirkungen auf CPU-Ebene und nicht auf Speicher oder Storage zeigen.
Denken Sie auch daran, dass das erste, was der Hypervisor beim Starten einer virtuellen Maschine tut, das Erstellen __einer Speicher-Swap-Datei__ (.vswap) auf
der Festplatte ist, in der Größe des Speichers der betreffenden virtuellen Maschine. Sie müssen __dies bei der Dimensionierung Ihres Speichers berücksichtigen__.

Jedes Compute-Blade wird mit 128 GB Speicher geliefert, der auf Softwareebene des __'Cpool'__ aktiviert ist, verfügt aber physisch über den gesamten zuweisbaren Speicher.

Zum Beispiel beträgt die RAM-Reservierung bei Aktivierung des *'Cpool'* für einen Cluster aus drei Hosts vom Typ ```vmware:standard:v2``` 3 x 128 GB = 384 GB RAM.
Sie können sie auf maximal 3 x 384 GB = 1152 GB Speicher erweitern.

    Mindestspeicher eines 'Cpool' = Anzahl der Hosts X 128 GB Speicher
    Maximalspeicher eines 'Cpool' = Anzahl der Hosts X die physische Speichermenge des Compute-Blades

### Cloud Temple Kataloge für virtuelle Maschinen

Cloud Temple stellt Ihnen einen Katalog von `Templates` zur Verfügung, der von unseren Teams regelmäßig erweitert und aktualisiert wird.
Er umfasst derzeit mehrere Dutzend `Templates` und Images, die Sie auf Ihren virtuellen Maschinen bereitstellen können.

### Hypervisor-Updates

Cloud Temple stellt regelmäßig Builds für Hypervisoren zur Verfügung, um die Anwendung von Sicherheitspatches zu gewährleisten.
Die Aktualisierung der Hypervisoren liegt jedoch in Ihrer Verantwortung, da wir keinen Einblick in Ihre Geschäftsanforderungen haben.

Der Aktualisierungsprozess ist vollständig automatisiert. Um die Dienstkontinuität zu gewährleisten, sind während des Updates mindestens zwei Hypervisoren pro Cluster erforderlich. Stellen Sie sicher, dass Sie über die erforderlichen Berechtigungen verfügen, um diese Aktionen durchzuführen.

### Verwaltung der Affinität Ihrer virtuellen Maschinen

__Affinitäts- und Anti-Affinitätsregeln__ ermöglichen es Ihnen, die Platzierung von virtuellen Maschinen auf Ihren Hypervisoren zu steuern.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu verwalten.
Zum Beispiel können sie helfen, die Arbeitslast zwischen den Servern auszugleichen oder ressourcenintensive Arbeitslasten zu isolieren.
In einem VMware __'Cpool'__ werden diese Regeln oft verwendet, um das Verhalten von virtuellen Maschinen mit vMotion zu verwalten.
vMotion ermöglicht es Ihnen, virtuelle Maschinen ohne Dienstunterbrechung von einem Host auf einen anderen zu verschieben.

Sie können durch die Regelverwaltung konfigurieren:

- __Affinitätsregeln__: Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden verwendet, um die Leistung zu verbessern, indem virtuelle Maschinen, die häufig miteinander kommunizieren,
auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind in Szenarien nützlich,
in denen die Leistung kritisch ist, wie z. B. bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern erfordern.

- __Anti-Affinitätsregeln__: Umgekehrt stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht
auf demselben physischen Host ausgeführt werden. Sie sind wichtig für die Verfügbarkeit und Ausfallsicherheit, zum Beispiel,
um zu verhindern, dass kritische Maschinen alle bei einem Ausfall eines einzelnen Servers betroffen sind.
Anti-Affinitätsregeln sind für Anwendungen, die eine hohe Verfügbarkeit erfordern, von entscheidender Bedeutung,
wie z. B. in Produktionsumgebungen, in denen Fehlertoleranz eine Priorität ist.
Zum Beispiel möchten Sie nicht, dass Ihre beiden Active Directory-Server auf demselben Hypervisor laufen.

Beim Erstellen einer Regel definieren Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel,
ihren Aktivierungsstatus (__'Status'__) und die betroffenen Maschinen in Ihrem Hypervisor-Cluster.

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln sind Regeln, die virtuelle Maschinen untereinander betreffen (keine Regeln zwischen Hypervisoren und virtuellen Maschinen).*

### Asynchrone Replikation Ihrer virtuellen Maschinen in einer VMware-Umgebung

Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, der darin besteht, Schreibvorgänge vom Quell-Hypervisor in regelmäßigen Zeitabständen an den Standby-Standort zu senden.

Nach einer anfänglichen Hot-Kopie des gesamten aktiven Speichers auf den Standby-Standort werden nur die Schreibvorgänge in regelmäßigen Abständen an den ruhenden Standort gesendet.
Dieses Intervall hängt vom Schreibvolumen ab (von stündlich bis alle 24 Stunden).

Die Replikation virtueller Maschinen stützt sich auf den Snapshot-Mechanismus des Hypervisors. Daher
hat diese Lösung die gleichen Nachteile, insbesondere die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine,
da der Snapshot-Prozess ein rekursiver Mechanismus zum Schließen des Snapshots ist.

Das typische Beispiel für eine Maschine, die den Replikationsmechanismus für virtuelle Maschinen nicht unterstützt, ist ein
FTP-Server, der Echtzeit-Streams von Überwachungskameras empfängt. __Die Maschine verbringt ihre Zeit mit Schreiben und wird nicht
in der Lage sein, einen Snapshot zu schließen, ohne das Betriebssystem für einen erheblichen Zeitraum
(mehrere zehn Minuten) anzuhalten__. Wenn der Hypervisor den Snapshot nicht schließen kann, wird er genau das tun,
ohne die Möglichkeit einzugreifen, außer die virtuelle Maschine zu beschädigen.

| SLA             | Beschreibung                                                                                                                                              |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1H bis 24H | Im Falle einer Katastrophe im Hauptrechenzentrum ist die maximale Menge an verlorenen Daten die des letzten Schreibvorgangs auf den Standby-Standort.   |
| RTO < 15min     | Vorgang zum Starten der angehaltenen virtuellen Maschine am entfernten Standort.                                                                          |

Bei Bedarf oder im Falle eines Fehlers an einer Maschine am primären Standort wird die Spiegelmaschine am Standby-Standort aktiviert.
Die Geschäftswiederherstellung erfordert, dass am Standby-Standort Rechenleistung und RAM im Standby-Modus reserviert wurden. Es
ist notwendig, auf der passiven Seite den gleichen Speicherplatz wie auf der aktiven Seite zu haben.

| Referenz                          | Einheit | SKU                                             |  
|-----------------------------------|---------|-------------------------------------------------|
| DRP - VMware inter-AZ replication | 1 vm    | csp:(region):iaas:vmware:licence:replication:v1 |

*__Hinweis__: Die Berechnung des minimalen RPO muss entsprechend der Änderungsrate auf der virtuellen Maschine definiert werden.*

## Sicherung virtueller Maschinen

Cloud Temple bietet __eine native und nicht deaktivierbare Cross-Backup-Architektur__ (sie ist in der französischen SecNumCloud-Qualifikation obligatorisch).

Backups werden in einer anderen Verfügbarkeitszone und einem anderen physischen Rechenzentrum als dem, das die virtuelle Maschine hostet, gespeichert. Sie werden mit einem symmetrischen 256-Bit-AES-Schlüsselalgorithmus (Cipher-Modus `xts-plain64`) verschlüsselt, um die Vertraulichkeit der Daten zu gewährleisten.

Dies ermöglicht den Schutz im Falle eines größeren Ausfalls im Produktionsrechenzentrum und die Wiederherstellung in einem sekundären Rechenzentrum (z. B. im Brandfall).

Diese Lösung umfasst:

- Off-Site-Hot-Backup aller Festplatten,
- Sofortige Präsentation und Start einer virtuellen Maschine aus der Massenspeicherinfrastruktur und Hot-Reloading auf die Produktions-SANs,
- Teilweise Wiederherstellung von Dateien aus dem Backup,
- Aufbewahrung, die nur durch die Zuweisung von Massenspeicherplatz begrenzt ist.

Diese Backup-Infrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, einer agentenlosen Architekturlösung,
die einfach zu bedienen ist und die Automatisierung von Backup-Prozessen sowie die Optimierung des Massenspeicherplatzes ermöglicht.

Die Backup- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab.
Die Backup-Richtlinie ist für jede virtuelle Maschine über die [Cloud Temple Console](../console/console.md) konfigurierbar.

*__Hinweis:__*

*__Einige virtuelle Maschinen sind nicht mit dieser Backup-Technologie kompatibel__, die die Snapshot-Mechanismen des Hypervisors verwendet.
Dies sind typischerweise Maschinen, deren Festplattenschreiblasten konstant sind. Es ist für den Hypervisor nicht möglich, den Snapshot zu schließen, was
das Einfrieren der virtuellen Maschine erzwingt, um den Schließvorgang abzuschließen. Dieses Einfrieren kann mehrere Stunden dauern und kann nicht gestoppt werden.*

*Die Lösung besteht dann darin, die Festplatte, die das Ziel permanenter Schreibvorgänge ist, auszuschließen und die Daten mit einer anderen Methode zu sichern.*

| Referenz                                                | Einheit | SKU                            |
| ------------------------------------------------------- | ------- | ------------------------------ |
| BACKUP - Zugriff auf den IBM Spectrum Protect Plus-Dienst | 1 VM    | csp:(region):iaas:backup:vm:v1 |

#### Erstellen einer Backup-Richtlinie

Um eine neue Backup-Richtlinie hinzuzufügen, muss eine Anfrage an den Support gestellt werden. Der Support ist über das Bojen-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Backup-Richtlinie erfolgt durch __eine Serviceanfrage__, die Folgendes angibt:

    Name Ihrer Organisation
    Name eines Kontakts mit E-Mail und Telefonnummer zur endgültigen Konfiguration
    Der Mandantenname
    Der Name der Backup-Richtlinie
    Die Eigenschaften (x Tage, y Wochen, z Monate, ...)

## Erweiterter Datenschutz (HSM/KMS)

Cloud Temple bietet eine __erweiterte Verschlüsselungslösung für virtuelle Maschinen__ an, die auf Hardware-Sicherheitsmodulen (HSM) und einem Schlüsselverwaltungsdienst (KMS) basiert. Diese Funktion verbessert den Schutz sensibler Daten durch eine zentralisierte und sichere Verwaltung von Verschlüsselungsschlüsseln, die direkt in die SecNumCloud-Umgebung integriert ist.

### Technische Architektur

Die Lösung basiert auf einer robusten Sicherheitsinfrastruktur, die sich zusammensetzt aus:

- __HSM (Hardware Security Module)__: __Thales Luna S790__-Module, zertifiziert nach __FIPS 140-3 Level 3__
- __KMS (Key Management System)__: __Thales CipherTrust Manager__ für die zentralisierte Schlüsselverwaltung
- __VMware-Integration__: Kommunikation über das __KMIP__ (Key Management Interoperability Protocol) Protokoll

#### Hochverfügbarkeitsbereitstellung

Die HSM-Infrastruktur ist über __drei Verfügbarkeitszonen__ in der Region FR1 verteilt:

- PAR7S
- TH3S  
- AZ07

Diese Verteilung gewährleistet __Hochverfügbarkeit__ und __maximale Ausfallsicherheit__ des Verschlüsselungsdienstes.

### Funktionsweise und Schlüsselhierarchie

Das System verwendet eine __Hierarchie kryptografischer Schlüssel__, um die Datensicherheit zu gewährleisten:

| Ebene | Schlüsseltyp | Beschreibung | Ort |
|-------|--------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Hauptschlüssel pro KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domänenschlüssel pro Kunde (Multi-Tenant-Isolation) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Verschlüsselungsschlüssel pro VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Datenschlüssel pro VM | VMware ESXi |

#### Verschlüsselungsprozess

1. __Erzeugung__: VMware ESXi erzeugt einen eindeutigen DEK für jede virtuelle Maschine
2. __Schutz__: Der DEK wird durch den im CipherTrust Manager gespeicherten KEK verschlüsselt
3. __Sicherung__: Der KEK selbst wird durch die HSM-Schlüsselhierarchie geschützt
4. __Speicherung__: Der verschlüsselte DEK wird mit den Konfigurationsdateien der VM gespeichert

### Sicherheit und Compliance

#### Zertifizierungen

- __FIPS 140-3 Level 3__: Höchste Zertifizierungsstufe für HSMs
- __Common Criteria EAL4+__: Erweiterte Sicherheitsbewertung
- __SecNumCloud__: ANSSI-Qualifikation, integriert in die Cloud Temple-Umgebung

#### Multi-Tenant-Isolation

- __Kryptografische Trennung__: Jeder Kunde hat eine isolierte KMS-Domäne
- __Dedizierte Schlüssel__: Ein spezifischer Domänenschlüssel pro Kunde
- __Audit und Nachverfolgbarkeit__: Vollständige Protokollierung der Aktionen pro Domäne

### Aktivierung und Nutzung

Die Verschlüsselung virtueller Maschinen wird __mit einem einzigen Klick__ über die [Shiva Console](../console/console.md) aktiviert.

Eine detaillierte Anleitung mit Screenshots finden Sie im [Tutorial zur Verschlüsselung virtueller Maschinen](tutorials/vm_encryption.md).

#### Voraussetzungen

- __Schlüsselanbieter konfiguriert__: Ein HSM/KMS-Anbieter muss auf dem vStack aktiviert sein
- __Virtuelle Maschine ausgeschaltet__: Die VM muss vor der Verschlüsselung heruntergefahren werden
- __Keine aktive Replikation__: Die VM darf nicht repliziert werden (inkompatibel mit Global Mirror)
- __Kein Snapshot__: Es darf kein Snapshot vorhanden sein
- __Dienstabonnement__: Der erweiterte Schutzdienst muss abonniert sein

*__Hinweis__: Weitere Details zu den Voraussetzungen und dem vollständigen Verfahren finden Sie im [VM-Verschlüsselungsleitfaden](tutorials/vm_encryption.md).*

### Einschränkungen und Überlegungen

#### Kompatibilität

- __Global Mirror__: Verschlüsselte virtuelle Maschinen sind __nicht kompatibel__ mit der Global Mirror-Replikation
- __Wiederherstellung__: Backups von verschlüsselten VMs behalten ihren kryptografischen Schutz
- __Export__: Der Export verschlüsselter VMs erfordert spezielle Verfahren

#### Leistung

- __Minimale Auswirkungen__: Hardware-Verschlüsselung gewährleistet optimale Leistung
- __Transparenz__: Keine Auswirkungen auf den Anwendungsbetrieb

### Empfohlene Anwendungsfälle

Diese erweiterte Schutzlösung eignet sich besonders für:

- __Sensible Daten__: Persönliche Informationen, Finanzdaten, Geschäftsgeheimnisse
- __Regulatorische Compliance__: Anforderungen von DSGVO, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Kritische Sektoren__: Banken, Versicherungen, Gesundheitswesen, Verteidigung
- __Digitale Souveränität__: Schutz vor unbefugtem Zugriff, auch im Falle einer Kompromittierung

| Referenz | Einheit | SKU |
|-----------|---------|-----|
| ADVANCED PROTECTION - VM-Verschlüsselung über HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Hinweis__:*

- *Der Dienst erfordert ein spezielles Abonnement und ist nicht im Standard-IaaS-Angebot enthalten*
- *Die Schlüsselverwaltung verbleibt vollständig unter der Kontrolle von Cloud Temple in der SecNumCloud-Umgebung*
- *Verschlüsselungsschlüssel verlassen niemals die französische und souveräne Infrastruktur*
