---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__ Angebot von Cloud Temple wurde entwickelt, um kritische Anforderungen an Geschäftskontinuität und Wiederherstellung zu erfüllen, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Basierend auf modernsten Technologien garantiert diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Rechenleistung: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Blockspeicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __VMware__, das eine zuverlässige und bewährte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen bietet.
- Backup: __IBM Spectrum Protect Plus__, für Backup-Orchestrierung und -Speicherung.

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

Das VMware IaaS-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Art der Bereitstellung ermöglicht es Ihnen, den Standort von Clustern zu wählen und sie auf verschiedene Verfügbarkeitszonen (AZ) zu verteilen.
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Implementierung eines Disaster Recovery Plans (DRP) im Falle eines Vorfalls.

---

## Berechnung

Die von Cloud Temple bereitgestellten Blades sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware, Betriebssystemversion usw.) über die Cloud Temple-Konsole.

Mehrere Kategorien von Rechenblades sind im Katalog verfügbar, um Ihre Workloads zu unterstützen (Virtualisierung, Containerisierung usw.).
Diese haben unterschiedliche Eigenschaften und Leistungsmerkmale, um Ihren Anforderungen bestmöglich gerecht zu werden. Der Katalog der Rechenblades entwickelt sich regelmäßig weiter.

Bei Verwendung mit einem Virtualisierungsangebot besteht ein Hypervisor-Cluster nur aus Rechenblades desselben Typs (es ist nicht möglich, Blades verschiedener Typen im selben Cluster zu mischen).

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          | SKU für VMware-Angebot         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| ECO v3 Blade          | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder äquivalent)  | 20 / 40 Threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD v3 Blade     | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE v3 Blade      | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder äquivalent)    | 48 / 96 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1 v3 Blade| 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder äquivalent) | 16 / 32 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2 v3 Blade| 768 GB       | 3,00/3,6 GHz (Gold 6354 oder äquivalent)    | 36 / 72 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3 v3 Blade| 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder äquivalent)    | 56 / 112 Threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4 v3 Blade| 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Hinweise__:

- __(1)__ Die gelieferte Speichermenge ist die, die physisch auf den Blades verfügbar ist. Es ist nicht möglich, die physische Speichermenge eines Blades zu ändern.

- __(2)__ Die minimale Basisfrequenz / Turbo-Frequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren auf maximale Leistung auf BIOS-Ebene konfiguriert.

- __(3)__ Die physische Konnektivität wird für Netzwerkzugriff und Blockspeicherzugriff gemeinsam genutzt, da die CISCO-Plattform konvergent ist.

- __(4)__ Das tatsächliche GPU-Angebot entwickelt sich kontinuierlich weiter. Ab dem 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das PERF4-Blade mit 2 L40S-Karten mit 48 GB RAM geliefert. Kontaktieren Sie bei Bedarf den Support für weitere Details.

Die Verfügbarkeit des Rechenangebots beträgt 99,99%, monatlich berechnet, einschließlich Wartungsfenstern. Die Berechtigung im Falle der Nichteinhaltung des SLA unterliegt
der Erstellung eines Incident-Tickets. Sie müssen außerdem mindestens zwei Hosts pro Cluster haben und die Funktion __High Availability__ (HA) aktivieren.
Diese Funktion ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf dem zweiten Hypervisor neu zu starten.
Falls eine Verfügbarkeitszone nur einen Hypervisor enthält, ist ein automatischer Neustart nicht möglich.

## Netzwerk

Der Netzwerkdienst auf der IaaS-Plattform von Cloud Temple basiert auf einer Netzwerkinfrastruktur, die die VPLS-Technologie nutzt und eine flexible und leistungsstarke Segmentierung bietet, um die Bedürfnisse der Kunden in Bezug auf Konnektivität und Netzwerkisolierung zu erfüllen.

### VLANs der Ebene 2

Die im IaaS-Angebot bereitgestellten VLANs sind vom Typ __Ebene 2__ und bieten eine vollständige Netzwerkisolierung und eine anpassbare Konfiguration je nach Bedarf.

#### Hauptkonzepte

- __Gemeinsame Nutzung zwischen Clustern und Verfügbarkeitszonen (AZ)__:
  - VLANs können zwischen verschiedenen AZs und verschiedenen Clustern, die zum selben Tenant gehören, geteilt werden.
- __Tenant-übergreifende Ausbreitung__:
  - VLANs können zwischen mehreren Tenants, die zur selben Organisation gehören, verbreitet werden, was die interne Kommunikation erleichtert.

---

### Netzwerkleistung

Die Netzwerkinfrastruktur garantiert eine geringe Latenz für optimale Leistung:

- __Intra-AZ-Latenz__: Weniger als __3 ms__.
- __Inter-AZ-Latenz__: Weniger als __5 ms__.

---

### Schlüsselpunkte

1. __Flexibilität__: VLANs können konfiguriert werden, um sich an Multi-Cluster- und Multi-Tenant-Umgebungen anzupassen.
2. __Hohe Leistung__: Minimale Latenz sorgt für eine schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. __Isolierung und Sicherheit__: VLANs der Ebene 2 bieten eine strikte Netzwerksegmentierung zum Schutz von Daten und Datenströmen.

---

## Blockspeicher

Cloud Temple bietet mehrere Speicherklassen basierend auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/)
und [IBM SVC](https://www.ibm.com/products/san-volume-controller).

Die __IBM SVC__-Technologie ermöglicht es, das erforderliche Leistungsniveau für die Umgebungen unserer Kunden zu liefern, dank der großen
Menge an Cache-Speicher, der in den Controllern eingebettet ist, und der Möglichkeit, alle IOPS
eines Servers auf mehrere SANs zu verteilen.

Sie wird auch verwendet, um die Replikation Ihrer Blockspeicher-LUNs zwischen
Verfügbarkeitszonen zu ermöglichen oder Eingriffe an Speicherarrays zu erleichtern.

Der Speicher ist hauptsächlich FLASH NVME-Speicher, der für professionelle Workloads bestimmt ist.
Die Festplatten werden von den Speicherarrays in der Konfiguration [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.

Die Klasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungsbedürfnisse
im Kontext wirtschaftlicher Effizienz. Mehrere Leistungsstufen sind verfügbar:

| Referenz                         | Einheit | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/TB   | 1 GB | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/TB   | 1 GB | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/TB    | 1 GB | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/TB | 1 GB | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/TB     | 1 GB | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivierung       | 1 TB | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__ :*

- *Die effektive Leistung für eine Speicherklasse ist mit dem tatsächlich bestellten Volumen verbunden, gemäß dem Begriff "IOPS/TB", was "IOPS-Limit pro zugewiesenem Tera" bedeutet,*

> *So hat ein 0,5TB-Volume in der 'Standard'-Leistungsklasse eine IOPS-Begrenzung von maximal 750 IOPS,*
> *Ebenso hat ein 10TB-Volume in der 'Ultra'-Leistungsklasse eine IOPS-Begrenzung von bis zu 150.000 IOPS,*

- *Die IOPS-Begrenzung wird auf das Volume angewendet, daher auf den Datastore-Begriff für eine VMware-Umgebung,*
- *Die Speicherverfügbarkeit beträgt 99,99%, monatlich gemessen, einschließlich Wartungsfenstern,*
- *Es gibt keine Einschränkungen oder Quoten für Lesen oder Schreiben,*
- *Es gibt keine Abrechnung pro IOPS,*
- *Es gibt keine Leistungszusage für die Klasse __'Mass Storage'__,*
- *Die Mindestgröße einer Speicher-LUN beträgt 500GB,*
- *Bei Verwendung eines Speicherreplikationsmechanismus müssen die Leistungen in beiden Verfügbarkeitszonen identisch sein,*
- *Es wird kein "intelligenter" Optimierungsmechanismus wie Komprimierung oder Deduplizierung implementiert: Wenn Sie 10TB Speicher reservieren, haben Sie physisch 10TB nutzbaren Speicher auf IBM-Maschinen implementiert.*
- *Speicher-LUNs sind der Kundenumgebung gewidmet.*

### Verwendung im Rahmen des VMware-Rechenangebots

Bei der Verwendung von Blockspeicher als Datastore im VMware-Rechenangebot von Cloud Temple __müssen Sie mehrere wichtige Überlegungen berücksichtigen__:

1. __Auslagerungsdatei (.VSWP) beim Starten virtueller Maschinen__: Wenn eine virtuelle Maschine startet, erstellt sie eine .VSWP-Datei in der Größe ihres Speichers auf der Festplatte. Um Ihre virtuellen Maschinen starten zu können, müssen Sie daher immer freien Speicherplatz in Ihrem Datastore haben, der der Summe der Speichergrößen Ihrer virtuellen Maschinen entspricht. Wenn Ihr Datastore beispielsweise 1 TB Blockspeicher hat und Sie 10 virtuelle Maschinen mit jeweils 64 GB Speicher starten möchten, werden 640 GB Festplattenspeicher benötigt. Ohne diesen Platz wird der Maschinenstart durch die verfügbare Kapazität zum Erstellen von Auslagerungsdateien begrenzt.

2. __Freier Speicherplatz für Backup-Snapshots__: Der Backup-Dienst verwendet Snapshots. Sie müssen daher immer genügend freien Speicherplatz haben, um die Erstellung eines Snapshots während der Sicherung einer virtuellen Maschine zu ermöglichen. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und der Zeit ab, die für die Durchführung der Sicherung benötigt wird. Als allgemeine Regel wird empfohlen, mindestens 10% freien Speicherplatz für diesen Vorgang zu behalten.

3. __Verwaltung dynamischer Festplatten__: Seien Sie vorsichtig bei der Verwendung dynamischer Festplatten. Wenn Sie ihr Wachstum nicht kontrollieren, kann ein Mangel an physischem Speicherplatz im besten Fall zum Einfrieren der virtuellen Maschine oder im schlimmsten Fall zum Absturz mit Beschädigung führen. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datastores sorgfältig zu überwachen, wenn Sie diese Art von Festplatte verwenden.

Eine proaktive Verwaltung des Festplattenspeichers ist unerlässlich, um die ordnungsgemäße Funktion Ihrer virtuellen Maschinen und die Zuverlässigkeit von Backups zu gewährleisten. Stellen Sie sicher, dass Sie immer den notwendigen Platz für Auslagerungsdateien, Snapshots und das Wachstum dynamischer Festplatten haben.

## Backup-Modus-Speicher

Speicher, der für die Sicherung Ihrer virtuellen Maschinen bestimmt ist, wird von der Plattform innerhalb der Grenze des bestellten Kontingents automatisch bereitgestellt.

| Referenz                | Einheit | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - Archivierung | 1 TB | csp:(region):iaas:storage:bloc:backup:v1 |

### Blockspeicherreplikation

#### Prinzipien

Um die Implementierung Ihrer Disaster-Recovery-Pläne zu ermöglichen, wenn es nicht möglich ist, in
einer Geschäftskontinuitätssituation mit Anwendungsmechanismen zu sein und wenn die Replikation virtueller Maschinen
nicht geeignet ist, bietet Cloud Temple __Blockspeicherreplikationsmechanismen zwischen Verfügbarkeitszonen einer Region__.

Diese Replikationsmechanismen werden auf die Speicher-LUNs Ihrer Umgebungen angewendet, zusätzlich zu Backups.
Die Wahl, einen Replikationsmechanismus in einer Umgebung zu verwenden, __hängt von vielen Faktoren ab, einschließlich ihrer Kritikalität, des tolerierten Datenverlusts oder der angestrebten Leistung__ für die Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen, die in einer aktiv/passiv-Konfiguration eingesetzt werden:

- __Asynchrone__ Replikation (oder __'Global Mirror'__): *Die Funktion __'Global Mirror'__ bietet einen asynchronen Kopierprozess.
Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung über den Abschluss des I/O empfangen, bevor der Schreibvorgang
für die Kopie auf dem sekundären Volume abgeschlossen ist. Wenn ein Failover-Vorgang eingeleitet wird, muss die Anwendung
alle Updates wiederherstellen und anwenden, die auf dem sekundären Volume nicht bestätigt wurden.
Wenn I/O-Operationen auf dem primären Volume für eine kurze Zeit pausiert werden,
kann das sekundäre Volume zu einer exakten Übereinstimmung mit dem primären Volume werden. Diese Funktion ist vergleichbar mit einem kontinuierlichen
Backup-Prozess, bei dem die neuesten Updates immer fehlen.
Bei der Verwendung von Global Mirror für Disaster-Recovery-Zwecke müssen Sie überlegen, wie Sie mit diesen fehlenden Updates umgehen möchten.*

- __Synchrone__ Replikation (oder __'Metro Mirror'__): *Die Funktion __'Metro Mirror'__ ist eine Art der Fernkopie, die eine synchrone Kopie
von Daten von einem primären Volume auf ein sekundäres Volume erstellt. Bei synchronen Kopien schreiben Host-Anwendungen auf das primäre Volume, erhalten aber keine Bestätigung,
dass der Schreibvorgang abgeschlossen ist, bis die Daten auf das sekundäre Volume geschrieben wurden. Dies stellt sicher, dass beide Volumes identische Daten enthalten, wenn
der Kopiervorgang abgeschlossen ist. Nach Abschluss des ersten Kopiervorgangs hält die Metro Mirror-Funktion
dauerhaft eine vollständig synchronisierte Kopie der Quelldaten am Zielort aufrecht. __Ab dem 1. Januar 2024 wird die Funktion 'Metro Mirror' nicht mehr vermarktet.__*

Es werden dann ein "aktiver" oder "primärer" Standort und ein "passiver" oder "Standby"-Standort definiert.
Der Disaster-Recovery-Plan wird im Falle einer Katastrophe oder im Rahmen einer DRP-Testanfrage aktiviert.
Der passive Standort übernimmt dann vom aktiven Standort.

#### Asynchrone Replikation

Wenn Ihre Workloads kurze Geschäftswiederherstellungszeiten erfordern und es nicht akzeptabel
oder geeignet ist, Mechanismen wie Anwendungsreplikationen / Replikation virtueller Maschinen zu verwenden,
ist es möglich, eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region zu replizieren.

Dieses Angebot ermöglicht ein __RPO von 15 Minuten__ und ein __RTO von weniger als 4 Stunden__. Es ermöglicht einen viel schnelleren Neustart als
die Implementierung einer Backup-Wiederherstellung.

In einem Speichervolume mit asynchroner Replikation (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller von
beiden Verfügbarkeitszonen zusammen, um Schreiboperationen auf beiden Standorten durchzuführen.
Der Master-Standort wartet nicht auf die Schreibbestätigung vom Slave-Standort.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volume__ durchführen: Er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, den Schreibvorgang durchzuführen,
3. Der lokale SAN-Controller wartet nicht auf die Bestätigung vom entfernten SAN und führt dann den Schreibvorgang lokal durch,
4. Er gibt __Bestätigung__ an den Hypervisor, der die Anfrage gestellt hat,
5. __Hypervisoren am entfernten Standort greifen nicht direkt auf die Global Mirror LUN zu__: Eine Serviceanfrage ist notwendig.

| SLA       | Beschreibung                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15min | Im Falle einer Katastrophe im primären Rechenzentrum entspricht die maximale Menge an verlorenen Daten höchstens den letzten 15 Minuten des Schreibens |
| RTO < 4H  | Im Falle einer Katastrophe im primären Rechenzentrum wird die Geschäftswiederherstellung innerhalb von 4 Stunden garantiert, abhängig von der Komplexität der Umgebungen |

Im Falle einer DRP-Aktivierung führt das Cloud Temple-Team eine Operation durch, um die __'Global Mirror'__-LUN den entfernten Hypervisoren zu präsentieren, damit sie auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher, dass Rechenressourcen und RAM am 'Standby'-Standort reserviert sind, um die Aktivität im Falle einer Katastrophe wieder aufzunehmen.

Die Verwendung dieser Technologie erfordert auch die Verdoppelung des Festplattenspeichers: Es ist notwendig, genau den gleichen Speicherplatz am entfernten Standort wie am lokalen Standort zu haben.

Die Verwendung dieses Mechanismus kann die Leistung der Anwendung um bis zu 10% beeinträchtigen. __Nur die Speicherklassen 500 Iops/TB, 1500 Iops/TB und 3000 Iops/TB sind kompatibel.__

| Referenz                          | Einheit  | SKU                                               |
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN   | 1 TB  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__* :

- *Da das Angebot asynchron ist, ist es möglich, dass während einer Katastrophe einige Festplattenoperationen nicht auf den entfernten Standort geschrieben wurden. Es kann daher ein Risiko für die Datenkonsistenz bestehen, das in der Risikoanalyse des Disaster-Recovery-Plans gemildert werden muss.*
- *Die Replikation des Blockspeichers erfolgt auf eine Weise, die für virtuelle Maschinen und Anwendungen verborgen ist,*
- *Als solches ist es wichtig, Anwendungsreplikationsszenarien oder möglicherweise die Replikation virtueller Maschinen zu priorisieren,*
- *Rechenleistung und Speicher am Wiederherstellungsstandort können reduziert werden, um Kosten zu optimieren, wenn eine beeinträchtigte Situation für das Geschäft während der Disaster-Recovery-Plan-Aktion akzeptabel ist.*

## VMware-Virtualisierung

Das SecNumCloud-qualifizierte VMware-Virtualisierungsangebot von Cloud Temple basiert auf der Technologie __VMware Vsphere__.

Die Plattform wird von Cloud Temple automatisch verwaltet (Aufrechterhaltung der Sicherheitsbedingungen, Betriebsbedingungen usw.).
Sie kann über die grafische Oberfläche der Shiva-Konsole oder über die zugehörigen APIs gesteuert werden.

*__Hinweis__* : *Aus Sicherheitsgründen im Zusammenhang mit der SecNumCloud-Qualifikation
__ist es für den Auftraggeber nicht möglich, direkt auf die VMware-Virtualisierungsplattform zuzugreifen__ (insbesondere kein direkter Zugriff auf vCenter).
Tatsächlich erfordert die SecNumCloud-Qualifikation __eine vollständige Trennung__ zwischen den technischen Asset-Steuerungsschnittstellen und der Auftraggeber-Schnittstelle (der Shiva-Konsole).*

- Die implementierten Produkte sind VMware ESXi, VMware Vcenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots verwendet nicht die VMware NSX-Technologie, sondern wird materiell durch Juniper-Technologie und das VPLS-Protokoll gesteuert.*
- *Der Speicher verwendet nicht die VMWare vSan-Technologie, sondern nur IBM SANs in 32G Fiber Channel.*
- *Es wird keine Form der versteckten Optimierung implementiert (Komprimierung, Deduplizierung, ...).*

### Definition eines Rechenblades-Clusters ('Cpool')

Der __'Cpool'__ ist eine Gruppierung von VMware ESXi-Hypervisoren, auch bekannt als *'ESX-Cluster'*.

Die Hosts in einem __'Cpool'__ gehören alle __zum selben Tenant und zur selben Verfügbarkeitszone__ (AZ). Sie müssen notwendigerweise dieselbe Klasse haben:
__Es ist nicht möglich, verschiedene Modelle von Rechenblades innerhalb desselben Clusters zu mischen__.

Da alle Rechenblades mit dem maximalen physischen Speicher geliefert werden, wird eine Begrenzung der Speichernutzung logisch auf Clusterebene angewendet, um sicherzustellen, dass sie dem abgerechneten RAM entspricht.

Standardmäßig verfügt jedes Blade über 128 GB aktivierten Speicher innerhalb des __'Cpool'__.

Ein __'Cpool'__ kann maximal 32 Hypervisoren enthalten. Über diese Grenze hinaus wird es notwendig sein, einen zweiten Cluster zu erstellen.

Der Speicher kann zwischen __'Cpools'__ geteilt werden.

### Speicherzuweisung für einen 'Cpool'

Die RAM-Reservierung ist pro Cluster konfigurierbar. Sie können die RAM-
