

---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple ist darauf ausgelegt, die kritischen Anforderungen an Kontinuität und Wiederherstellung zu erfüllen, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Auf modernster Technologie basierend garantiert diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.



## Eine vertrauenswürdige technologische Plattform

Die IaaS-Plattform von Cloud Temple basiert auf international anerkannten technologischen Partnern:

- Berechnung: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für den Blockspeicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __VMware__, bietet eine zuverlässige und bewährte Basis zur Verwaltung Ihrer Cloud-Umgebungen.
- Datensicherung: __IBM Spectrum Protect Plus__, für die Orchestrierung und Speicherung von Sicherungen.

Diese Architektur basiert auf dem Modell __VersaStack__, einer Allianz zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den führenden Softwareherstellern gewährleistet.



## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig automatisiert durch APIs und einen Terraform-Provider, bietet die IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- __Dedizierte Ressourcen__: Die Rechenblöcke, Speichervolumina und Software-Stacks (Virtualisierung, Backup, Firewalling, usw.) werden nie zwischen Kunden geteilt.
- __Maximale Vorhersagbarkeit__: Sie beherrschen die Virtualisierungsrate, die IOPS-Last auf dem Speicher und profitieren von einer klaren Abrechnung, nach monatlichem Verbrauch.

Die Plattform ist __SecNumCloud__-zertifiziert durch die [ANSSI](https://www.ssi.gouv.fr/), was einen hohen Automatisierungs- und Sicherheitsstandard gewährleistet.



## Hauptfunktionen

- Dedizierte und nachfragebasierte Rechenressourcen (CPU, RAM).
- Nachfragebasiertes Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuzsicherungen mit konfigurierbarer Aufbewahrungszeit.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Console Shiva](../console/console.md) oder im Infrastruktur als Code-Modus durch APIs und den Terraform-Anbieter.



## Vorteile

| Vorteil             | Beschreibung                                                                                                                                    |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Datenhosting in Frankreich und Konformität mit der DSGVO.                                                                                          |
| Sicherheit          | Hochsichere Plattform, zertifiziert __SecNumCloud__, __HDS__ (Gesundheitsdatenhosting), __ISO 27001__ und __ISAE 3402 Typ II__. |  
| Hohe Verfügbarkeit  | Plattformverfügbarkeit von 99,99 %, monatlich gemessen, Wartungsfenster eingeschlossen.                                                        |
| Resilienz           | Einrichtung von Kontinuitäts- oder Wiederherstellungsplänen nach Bedarf.                                                                        |
| Automatisierung     | Vollständig automatisierte Plattform, entwickelt, um sich in ein Digitalisierungsprogramm zu integrieren.                                        |
| Nach Bedarf         | Ressourcen auf Anfrage verfügbar.                                                                                                          |



## Regionen und Verfügbarkeitszonen

Das VMware IaaS-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Dieses Deployment-Modell ermöglicht die Auswahl der Standorte der Cluster und deren Verteilung auf verschiedene Verfügbarkeitszonen (AZ).
Es bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Disaster Recovery Plans (DRP) im Falle eines Vorfalls.



## Berechnung

Die von Cloud Temple bereitgestellten Lames sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware, Betriebssystemversion, ...), über die Cloud Temple-Konsole.

Es sind mehrere Kategorien von Berechnungslames im Katalog verfügbar, um Ihre Workloads zu unterstützen (Virtualisierung, Containerisierung, ...). Diese weisen unterschiedliche Merkmale und Leistungen auf, um Ihren Anforderungen bestmöglich zu entsprechen. Der Katalog der Berechnungslames wird regelmäßig aktualisiert.

Im Rahmen der Nutzung mit einer Virtualisierungsangebot ist ein Hypervisor-Cluster ausschließlich aus Lames des gleichen Typs zusammengesetzt (es ist nicht möglich, Lames unterschiedlicher Typen in einem Cluster zu kombinieren).

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                         | Anzahl der Kerne / Threads | Netzwerkverbindung __(3)__ | GPU __(4)__          | SKU für das VMware-Angebot         |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | ------------------------ | -------------------- | --------------------------------- |
| Lame ECO v3           | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder Äquivalent)  | 20 / 40 Threads            | 2 X 10 Gbit/s           |                      | csp:fr1:iaas:vmware:eco:v3        |
| Lame STANDARD v3      | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder Äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:standard:v3   |
| Lame ADVANCE v3       | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder Äquivalent)    | 48 / 96 Threads            | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:advance:v3    |
| Lame PERFORMANCE 1 v3 | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder Äquivalent) | 16 / 32 Threads            | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:perf1:v3      |
| Lame PERFORMANCE 2 v3 | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder Äquivalent)    | 36 / 72 Threads            | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:perf2:v3      |
| Lame PERFORMANCE 3 v3 | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder Äquivalent)    | 56 / 112 Threads           | 2 X 25 Gbit/s           |                      | csp:fr1:iaas:vmware:perf3:v3      |
| Lame PERFORMANCE 4 v3 | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder Äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s           | 2 x NVIDIA L40S 48Go | csp:fr1:iaas:vmware:perf4:v3      |

__Hinweise__ :

- __(1)__ Die gelieferte Speichermenge ist die physisch verfügbare Menge auf den Lames. Es ist nicht möglich, die physische Speichermenge einer Lampe zu ändern.

- __(2)__ Die Mindestbasisfrequenz / Turbo-Frequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren so konfiguriert, dass sie maximale Leistung im BIOS erreichen.

- __(3)__ Die physische Netzwerkverbindung ist für den Netzwerk- und Speicherzugriff gemeinsam genutzt, da die Cisco-Plattform konvergiert ist.

- __(4)__ Das verfügbare GPU-Angebot ändert sich ständig. Stand 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S-GPUs. Standardmäßig wird die Lame PERF4 mit 2 Karten L40S mit 48 GB RAM geliefert. Kontaktieren Sie den Support, falls weitere Details erforderlich sind.

Die Verfügbareit des Berechnungsangebots beträgt 99,99 %, monatlich berechnet, einschließlich Wartungsfenster. Die Eignung bei Nichterfüllung des SLA ist abhängig von der Erstellung eines Incident-Tickets. Sie müssen außerdem mindestens zwei Hosts pro Cluster besitzen und die Funktion __High Availability__ (HA) aktivieren. Diese Funktion ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf dem zweiten Hypervisor neu zu starten. Falls eine Verfügbarkeitszone nur einen Hypervisor enthält, ist ein automatischer Neustart nicht möglich.



## Netzwerk

Der Netzwerkdienst auf der IaaS-Plattform von Cloud Temple basiert auf einer Netzwerkinfrastruktur, die die VPLS-Technologie verwendet, und bietet eine flexible und leistungsstarke Segmentierung, um die Anforderungen der Kunden an Netzwerkverbindung und -isolation zu erfüllen.



### VLANs der Schicht 2

Die in der IaaS-Angebot verfügbaren VLANs sind vom Typ __Schicht 2__, bieten eine vollständige Netzwerkisolierung und eine anpassbare Konfiguration nach Bedarf.



#### Hauptkonzepte

- __Freigabe zwischen Clustern und Verfügbarkeitszonen (AZ)__ :
  - VLANs können zwischen verschiedenen AZ und verschiedenen Clustern, die demselben Tenant angehören, geteilt werden.
- __Inter-Tenant-Propagation__ :
  - VLANs können zwischen mehreren Mietern einer Organisation weitergeleitet werden, was interne Kommunikation erleichtert.

---



### Netzwerkleistung

Die Netzwerkinfrastruktur gewährleistet eine geringe Latenz für optimale Leistungen:

- __Intra-AZ-Latenz__: Unter __3 ms__.
- __Inter-AZ-Latenz__: Unter __5 ms__.

---



### Schlüsselpunkte

1. __Flexibilität__ : VLANs können konfiguriert werden, um sich an Multi-Cluster- und Multi-Tenant-Umgebungen anzupassen.
2. __Hohe Leistung__ : Minimale Latenz gewährleistet eine schnelle und effiziente Kommunikation zwischen Verfügbarkeitszonen.
3. __Isolation und Sicherheit__ : Layer-2-VLANs bieten eine strenge Netzwerksegmentierung, um Daten und Datenflüsse zu schützen.



## Blockspeicher

Cloud Temple bietet mehrere Speicherklassen an, die auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/) und [IBM SVC](https://www.ibm.com/products/san-volume-controller) basieren.

Die Technologie __IBM SVC__ ermöglicht es, das erforderliche Leistungsniveau für die Umgebungen unserer Kunden zu liefern, dank der großen Menge an eingebautem Cache-Memory in den Controllern und der Möglichkeit, die gesamten IOPS eines Servers auf mehrere SANs zu verteilen.

Sie wird auch verwendet, um die Replikation Ihrer Block-LUNs zwischen den Verfügbarkeitszonen zu ermöglichen oder Wartungsarbeiten an Speicherarrays zu erleichtern.

Der Speicher besteht hauptsächlich aus Flash-SSDs, die für professionelle Workloads geeignet sind. Die Festplatten werden von den Speicherarrays in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.

Die Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungszwecke in einem wirtschaftlichen Kontext. Mehrere Leistungsstufen sind verfügbar:

| Referenz                          | Einheit | SKU                                          |
|-----------------------------------|---------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 GiB   | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 GiB   | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 GiB   | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 GiB   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 GiB   | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivierung       | 1 TiB   | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__ :*

- *Die tatsächliche Leistung einer Speicherklasse hängt von der tatsächlich bestellten Volumetrie ab, gemäß dem Konzept "IOPS/To", wobei "IOPS pro Terabyte zugewiesen" verstanden wird,*
  
> *Ein Volumen von 0,5 TiB in der Leistungsklasse "Standard" hat eine IOPS-Grenze von 750 IOPS,*
> *Ebenso hat ein Volumen von 10 TiB in der Leistungsklasse "Ultra" eine IOPS-Grenze von 150.000 IOPS,*

- *Die IOPS-Grenze wird pro Volumen angewandt, also pro Datastore für eine VMware-Umgebung,*
- *Die Speicherverfügbarkeit beträgt 99,99 %, gemessen monatlich, einschließlich Wartungszeitraum,*
- *Es gibt keine Einschränkung oder Quota für Lese- oder Schreibvorgänge,*
- *Es gibt keine Abrechnung pro IOPS,*
- *Es gibt keine Leistungsverpflichtung für die Klasse __'Mass Storage'__,*
- *Die minimale Größe einer Block-LUN beträgt 500 GiB,*
- *Bei der Verwendung eines Speicher-Replikationsmechanismus müssen die Leistungen in beiden Verfügbarkeitszonen identisch sein,*
- *Es wird kein intelligenter Optimierungsmechanismus wie Komprimierung oder Deduplizierung eingesetzt: Wenn Sie 10 TiB Speicher reservieren, stehen Ihnen physisch 10 TiB Speicherplatz auf den IBM-Maschinen zur Verfügung.*
- *Die Block-LUNs sind für die Kundenumgebung reserviert.*



### Verwendung im Rahmen des VMware-Rechenangebots

Im Rahmen der Nutzung des Blockspeichers im Format der Datastore-Dateisysteme im VMware-Rechenangebot von Cloud Temple müssen Sie mehrere wichtige Aspekte berücksichtigen:

1. **Swap-Datei (.VSWP) beim Start der virtuellen Maschinen**: Wenn eine virtuelle Maschine gestartet wird, erstellt sie eine .VSWP-Datei mit der Größe ihres Arbeitsspeichers auf der Festplatte. Daher müssen Sie immer einen freien Speicherplatz auf Ihrem Datastore haben, der der Summe der Speichergrößen Ihrer virtuellen Maschinen entspricht. Zum Beispiel benötigen Sie bei einem Datastore mit 1 TiB Blockspeicher und 10 virtuellen Maschinen mit jeweils 64 GiB Arbeitsspeicher 640 GiB freier Speicherplatz. Ohne diesen Speicherplatz wird der Start der virtuellen Maschinen durch die verfügbare Kapazität zur Erstellung der Swap-Dateien eingeschränkt.

2. **Freier Speicherplatz für Backup-Snapshots**: Der Backup-Dienst verwendet Instantane (Snapshots). Sie müssen daher immer ausreichend freien Speicherplatz haben, um ein Snapshot während des Backups einer virtuellen Maschine zu erstellen. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und der Zeit ab, die für das Backup benötigt wird. Im Allgemeinen wird empfohlen, mindestens 10 % freien Speicherplatz für diese Operation zu reservieren.

3. **Verwaltung dynamischer Festplatten**: Seien Sie vorsichtig mit der Nutzung dynamischer Festplatten. Wenn Sie ihre Wachstumsfähigkeit nicht kontrollieren, kann ein Mangel an physischem Speicher zu einem Einfrieren (Freeze) der virtuellen Maschine führen, im besten Fall, oder zu einem Absturz mit Datenkorruption, im schlimmsten Fall. Es ist entscheidend, den verfügbaren Speicher auf Ihren Datastores sorgfältig zu überwachen, wenn Sie diesen Festplattentyp verwenden.

Eine proaktive Speicherverwaltung ist entscheidend, um den reibungslosen Betrieb Ihrer virtuellen Maschinen und die Zuverlässigkeit der Backups sicherzustellen. Stellen Sie sicher, dass immer ausreichend Speicherplatz für die Swap-Dateien, die Snapshots und das Wachstum der dynamischen Festplatten zur Verfügung steht.



## Backup-Speicher

Der dedizierte Speicher für die Sicherung Ihrer virtuellen Maschinen wird von der Plattform im Rahmen des bestellten Quotas automatisch bereitgestellt.

| Referenz                | Einheit | SKU                                      |
|--------------------------|---------|------------------------------------------|
| Massenspeicher - Archivierung | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |



### Replication des Speichers im Blockmodus



#### Prinzipien

Um die Umsetzung Ihrer Business Continuity-Pläne zu ermöglichen, wenn es nicht möglich ist, mit Anwendungsmechanismen in einer Business Continuity-Situation zu sein und die VM-Replikation nicht geeignet ist, bietet Cloud Temple __Speicher-Block-Replikationsmechanismen zwischen den Verfügbarkeitszonen einer Region__ an.

Diese Replikationsmechanismen werden auf den LUNs Ihres Speichers angewandt, ergänzend zu den Backups. Die Entscheidung, ob ein Replikationsmechanismus für ein Umfeld verwendet wird, hängt von vielen Faktoren ab, wie seine Kritikalität, die tolerierbaren Datenverluste oder die angestrebte Leistung für die Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen, die in einer aktiven/passiven Konfiguration bereitgestellt werden:

- Die __asynchrone__ Replikation (oder __'Global Mirror'__): *Die Funktion __'Global Mirror'__ bietet einen asynchronen Kopierprozess. Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des Abschlusses der E/A-Operation vor dem Abschluss der Schreiboperation auf dem sekundären Volume empfangen. Wenn eine Failover-Operation initiiert wird, muss die Anwendung alle Updates abrufen und anwenden, die auf dem sekundären Volume nicht bestätigt wurden. Wenn die E/A-Operationen auf dem primären Volume für eine kurze Zeit angehalten werden, kann das sekundäre Volume zu einer exakten Kopie des primären Volumes werden. Dieser Prozess ist vergleichbar mit einem kontinuierlichen Backup-Prozess, bei dem die letzten Updates immer fehlen. Wenn Sie 'Global Mirror' für Katastrophenwiederherstellungszwecke verwenden, müssen Sie darüber nachdenken, wie Sie diese fehlenden Updates verwalten möchten.*

- Die __synchrone__ Replikation (oder __'Metro Mirror'__): *Die Funktion __'Metro Mirror'__ ist ein Fernkopierprozess, der eine synchrone Kopie der Daten eines primären Volumes auf ein sekundäres Volume erstellt. Bei synchronen Kopien schreiben die Host-Anwendungen auf das primäre Volume, erhalten jedoch keine Bestätigung, dass die Schreiboperation abgeschlossen ist, bis die Daten auf dem sekundären Volume geschrieben wurden. Dies stellt sicher, dass beide Volumes bei Abschluss der Kopieroperation identische Daten enthalten. Nach Abschluss der initialen Kopieroperation hält die Funktion Metro Mirror stets eine vollständig synchronisierte Kopie der Quelldaten am Zielstandort auf. __Seit dem 1. Januar 2024 wird die Funktion 'Metro Mirror' nicht mehr vertrieben.__*

Es wird dann ein „aktiver“ oder „primärer“ Standort und ein „passiver“ oder „Standby“-Standort definiert. Der Business Continuity-Plan wird bei einem Schadensfall oder im Rahmen einer PRA-Testanfrage aktiviert. Der passivere Standort übernimmt dann den aktiven Standort.



#### Asynchrone Replikation

Wenn Ihre Workloads kurze Wiederherstellungszeiten erfordern und es nicht akzeptabel oder geeignet ist, Anwendungs- oder VM-Replikationsmechanismen zu verwenden, ist es möglich, eine SAN-LUN zwischen zwei Verfügbarkeitszonen derselben Region zu replizieren.

Diese Angebots ermöglicht ein __RPO von 15 Minuten__ und ein __RTO unter 4 Stunden__. Sie ermöglicht eine deutlich schnellere Wiederherstellung im Vergleich zur Implementierung einer Backup-Restoration.

In einem asynchron replizierten Speichervolumen (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller der beiden Verfügbarkeitszonen zusammen, um Schreibvorgänge auf beiden Standorten durchzuführen. Der Hauptstandort wartet nicht auf die Bestätigung der Schreiboperation des sekundären Standorts.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte eine __Schreiboperation auf einem Global-Mirror-Volumen__ durchführen: Er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller bittet den SAN-Controller der entfernten Zone, die Schreiboperation durchzuführen,
3. Der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN und führt die Schreiboperation lokal durch,
4. Er gibt __Bestätigung__ an den Hypervisor zurück, der die Anfrage gestellt hat,
5. __Die Hypervisoren des entfernten Standorts greifen nicht direkt auf die Global-Mirror-LUN zu__: Eine Dienstanfrage ist erforderlich.

| SLA       | Beschreibung                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 Minuten  | Bei einem Ausfall des Hauptrechenzentrums entspricht die maximale Datenmenge, die verloren geht, maximal den letzten 15 Minuten der Schreibvorgänge |
| RTO < 4 Stunden  | Bei einem Ausfall des Hauptrechenzentrums ist die Wiederherstellung innerhalb von 4 Stunden garantiert, abhängig von der Komplexität der Umgebungen.          |

Bei Aktivierung des PRA führt das Cloud Temple-Team eine __Präsentation der LUN 'Global Mirror'__ an die entfernten Hypervisoren durch, damit sie auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher, dass auf dem 'Standby'-Standort Ressourcen für Berechnung und RAM reserviert wurden, um die Aktivität im Falle eines Ausfalls wieder aufzunehmen.

Die Verwendung dieser Technologie erfordert zudem eine Verdopplung des Speicherplatzes: Es ist erforderlich, dass auf dem entfernten Standort genau der gleiche Speicherplatz wie auf dem lokalen Standort vorhanden ist.

Die Verwendung dieses Mechanismus kann die Leistung der Anwendung um bis zu 10 % beeinträchtigen. __Nur die Speicherklassen 500 IOPS/To, 1500 IOPS/To und 3000 IOPS/TO sind kompatibel.__

| Referenz                          | Einheit  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__* :

- *Da die Angebotsasynchron ist, ist es bei einem Ausfall möglich, dass einige Datenträgervorgänge nicht auf dem entfernten Standort geschrieben wurden. Es kann daher ein Risiko für die Datenkonsistenz bestehen, das in der Risikoanalyse des Wiederherstellungsplans gemindert wird.*
- *Die Block-Replication des Speichers erfolgt für virtuelle Maschinen und Anwendungen transparent,*
- *Daher ist es wichtig, Anwendungsreplikationsszenarien oder gegebenenfalls VM-Replikation zu bevorzugen,*
- *Berechnung und Speicher auf dem Wiederherstellungsstandort können reduziert werden, um die Kosten zu optimieren, wenn eine abgesenkte Situation für das Geschäft während der Durchführung des Wiederherstellungsplans akzeptabel ist.*



## VMware-Virtualisierung

Das VMware Cloud Temple-Angebot, das als SecNumCloud qualifiziert ist, basiert auf der Technologie __VMware Vsphere__.

Die Plattform wird von Cloud Temple automatisch verwaltet (Aufrechterhaltung der Sicherheitsbedingungen, Aufrechterhaltung des betriebsbereiten Zustands, ...). Sie lässt sich über die grafische Oberfläche der Shiva-Konsole oder über die zugehörigen APIs steuern.

*__Hinweis__* : *Aufgrund der Sicherheitsbedingungen der SecNumCloud-Qualifizierung ist es dem Auftraggeber nicht möglich, direkt auf die VMware-Virtualisierungsplattform zuzugreifen (kein direkter Zugriff auf den vCenter u. a.). Tatsächlich erfordert die SecNumCloud-Qualifizierung eine __vollständige Trennung__ zwischen den Steuerungsoberflächen der technischen Assets und der Oberfläche des Auftraggebers (der Shiva-Konsole).*

- Die eingesetzten Produkte sind VMware ESXi, VMware Vcenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots verwendet nicht die Technologie VMware NSX, sondern wird physisch über die Technologie Juniper und das Protokoll VPLS gesteuert.*
- *Der Speicher verwendet nicht die Technologie VMWare vSan, sondern ausschließlich IBM-SANs im Fiber Channel 32G.*
- *Es werden keine versteckten Optimierungen eingesetzt (Komprimierung, Deduplizierung, ...).*



### Definition eines Compute-Clusters ('Cpool')

Der __'Cpool'__ ist eine Gruppierung von VMware ESXi-Hypervisoren, auch bekannt als *'ESX-Cluster'*.

Die Hosts, die sich in einem __'Cpool'__ befinden, gehören alle __demselben Mandanten und der gleichen Verfügbarkeitszone__ (AZ). Sie müssen unbedingt die gleiche Klasse haben: __Es ist nicht möglich, unterschiedliche Modelle von Compute-Blöcken innerhalb eines Clusters zu mischen__.

Da alle Compute-Blöcke mit der maximalen physischen RAM ausgestattet sind, wird eine RAM-Nutzungslimitierung softwareseitig auf Cluster-Ebene angewandt, um sicherzustellen, dass sie der abgerechneten RAM entspricht.

Standardmäßig verfügt jeder Compute-Block über 128 GB aktivierter RAM innerhalb des __'Cpool'__.

Ein __'Cpool'__ kann maximal 32 Hypervisoren enthalten. Überschreitet man diese Grenze, ist es notwendig, einen zweiten Cluster zu erstellen.

Der Speicher kann zwischen den __'Cpool'__ geteilt werden.



### Speicherallokation für einen 'Cpool'

Die Speicherreservierung ist pro Cluster konfigurierbar. Sie können die Menge des RAM anpassen, um sie Ihren Anforderungen im Cluster-Verhältnis anzupassen.

__Achten Sie darauf, die durchschnittliche Speicherkonsum pro Rechenknoten nicht zu überschreiten__.
Tatsächlich wird die VMware-Technologie eine Komprimierungs-Optimierungsmethode verwenden, die die Leistung Ihrer Workloads stark beeinträchtigen und die Diagnose erschweren kann. Ebenso wird eine zu hohe Speicherbelastung auf Ihren Rechenknoten dazu führen, dass der Hypervisor einen Teil seines Speichers auf die Festplatte auslagert, um die Anforderungen der virtuellen Maschinen zu erfüllen.

Dieser Fall, als __'Ballooning'__ bezeichnet, beeinträchtigt stark die Leistung aller virtuellen Maschinen, die sich auf dem betroffenen Speicher (Datastore) befinden.
__Die Diagnose ist in diesem Kontext kompliziert__, da Ihre Metrik Einflüsse auf der CPU feststellen wird und nicht auf dem Speicher oder dem Speichermedium.
Behalten Sie auch im Auge, dass das erste, was der Hypervisor beim Start einer virtuellen Maschine tut, ist, __eine Swap-Datei__ (.vswap) auf der Festplatte mit der Größe des Speichers der betroffenen virtuellen Maschine zu erstellen. Sie müssen __dies bei der Dimensionierung Ihres Speichers berücksichtigen__.

Jeder Rechenknoten wird mit 128 GB Speicher ausgeliefert, der softwareseitig im __'Cpool'__ aktiviert ist, verfügt aber physisch über die gesamte verfügbare Speicherkapazität.

Zum Beispiel beträgt bei einem Cluster mit drei Hosts vom Typ ```vmware:standard:v2``` die Speicherreservierung bei der Aktivierung des _*'Cpool'*_ 3 x 128 GB = 384 GB RAM.
Sie können sie maximal auf 3 x 384 GB = 1152 GB Speicher erweitern.

    Mindestspeicher eines 'Cpool' = Anzahl der Hosts × 128 GB Speicher
    Maximaler Speicher eines 'Cpool' = Anzahl der Hosts × physische Speicherkapazität des Rechenknotens



### Cloud Temple Cloud-Maschinen-Vorlagenkataloge

Cloud Temple stellt Ihnen einen Vorlagenkatalog zur Verfügung, der regelmäßig von unseren Teams erweitert und aktualisiert wird. Der Katalog umfasst derzeit mehrere Dutzende von `Templates` und Bildern, die auf Ihren virtuellen Maschinen montiert werden können.



### Aktualisierung der Hypervisoren

Cloud Temple stellt regelmäßig Builds für die Hypervisoren bereit, um die Anwendung von Sicherheitspatches zu gewährleisten.  
Die Aktualisierung der Hypervisoren bleibt jedoch Ihre Verantwortung, da wir keinen Einblick in Ihre geschäftlichen Anforderungen haben.  

Der Aktualisierungsprozess ist vollständig automatisiert. Um die Dienstkontinuität zu gewährleisten, sind mindestens zwei Hypervisoren pro Cluster während der Aktualisierung erforderlich. Stellen Sie sicher, dass Sie die notwendigen Berechtigungen haben, um diese Aktionen durchzuführen.



### Verwaltung der Affinität Ihrer virtuellen Maschinen

Die __Affinitäts- und Anti-Affinitätsregeln__ ermöglichen die Steuerung der Standorte der virtuellen Maschinen auf Ihren Hypervisoren.  
Sie können verwendet werden, um die Nutzung der Ressourcen Ihres __'Cpool'__ zu verwalten.  
Zum Beispiel können sie dabei helfen, die Arbeitslast zwischen den Servern zu balancieren oder ressourcenintensive Arbeitslasten zu isolieren.  
In einem __'Cpool'__ von VMware werden diese Regeln häufig verwendet, um das Verhalten von virtuellen Maschinen mit vMotion zu verwalten.  
vMotion ermöglicht das Verschieben von virtuellen Maschinen von einem Host zu einem anderen ohne Dienstunterbrechung.

Sie können über die Regelnverwaltung folgende Einstellungen vornehmen:

- __Affinitätsregeln__: Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.  
  Sie werden eingesetzt, um die Leistung zu verbessern, indem virtuelle Maschinen, die häufig kommunizieren, gemeinsam auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind nützlich in Szenarien, in denen die Leistung kritisch ist, wie z. B. bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern erfordern.

- __Anti-Affinitätsregeln__: Im Gegensatz dazu stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht auf demselben physischen Host ausgeführt werden.  
  Sie sind wichtig für die Verfügbarkeit und Resilienz, z. B. um zu vermeiden, dass kritische Maschinen bei einem Ausfall eines einzelnen Servers alle betroffen sind. Anti-Affinitätsregeln sind entscheidend für Anwendungen mit hoher Verfügbarkeit, wie z. B. in Produktionsumgebungen, in denen Ausfallsicherheit eine Priorität ist.  
  Zum Beispiel möchten Sie nicht, dass Ihre beiden Active Directory-Instanzen auf demselben Hypervisor liegen.

Beim Erstellen einer Regel definieren Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel, ihren Aktivierungsstatus (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

*Hinweis: Die in der Konsole angebotenen Affinitäts- und Anti-Affinitätsregeln beziehen sich auf virtuelle Maschinen untereinander (nicht auf Regeln zwischen Hypervisoren und virtuellen Maschinen).*



### Asynchrone Replikation Ihrer virtuellen Maschinen in VMware-Umgebung

Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, bei dem Schreibvorgänge auf dem Quellhypervisor über regelgemäße Zeitintervalle auf den Standby-Standort übertragen werden.

Nach einer Initialkopie im Warmstart des gesamten aktiven Speichers auf den Standby-Standort werden nur Schreibvorgänge über regelgemäße Zeitintervalle auf den Standby-Standort übertragen. Dieses Intervall hängt vom Schreibvolumen ab (von jeder Stunde bis zu 24 Stunden).

Die Replikation der virtuellen Maschinen basiert auf dem Schnappschuss-Mechanismus des Hypervisors. Daher hat diese Lösung dieselben Nachteile, insbesondere die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine, da der Schnappschuss-Prozess ein rekursives Mechanismus für die Schließung des Schnappschusses ist.

Das typische Beispiel für eine Maschine, die das Replikationsmechanismus der virtuellen Maschinen nicht unterstützt, ist ein FTP-Server, der Echtzeit-Flüsse von Überwachungskameras empfängt. __Die Maschine verbringt ihre Zeit damit, zu schreiben und wird nicht in der Lage sein, einen Schnappschuss zu schließen, ohne den Betriebssystem für eine signifikante Zeitspanne (mehrere zehn Minuten) anzuhalten.__ Wenn der Hypervisor den Schnappschuss nicht schließen kann, wird er genau das tun, ohne Möglichkeit, einzugreifen, außer die virtuelle Maschine zu korruptieren.

| SLA             | Beschreibung                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1 Stunde bis 24 Stunden | Im Falle eines Notfalls im Hauptrechenzentrum beträgt die maximale Datenverlustmenge die der letzten Schreibvorgänge auf den Standby-Standort. |
| RTO < 15 Minuten     | Startvorgang der gestoppten virtuellen Maschine auf dem entfernten Standort                                                                                |

Bei Bedarf oder bei einem Ausfall einer Maschine im Hauptstandort wird die Spiegelmaschine auf dem Standby-Standort aktiviert. Die Wiederherstellung der Aktivität erfordert, dass Rechenleistung und RAM im Standby-Modus reserviert sind. Es ist notwendig, dass der passive Standort denselben Speicherplatz hat wie der aktive Standort.

| Referenz                         | Einheit | SKU                                             |  
|-----------------------------------|---------|-------------------------------------------------|
| PRA - VMware-Inter-AZ-Replikation | 1 VM    | csp:(region):iaas:vmware:licence:replication:v1 |

*__Hinweis__ : Die Berechnung des minimalen RPO muss anhand des Änderungstyps auf der virtuellen Maschine definiert werden.*



## Virtuelle Maschinen-Sicherung

Cloud Temple bietet eine __nativen, nicht entkoppelbaren Sicherungsarchitektur__ (sie ist in der secnumcloud-französischen Zertifizierung obligatorisch).

Die Sicherungen werden in einer Verfügbarkeitszone und auf einem physischen Rechenzentrum gespeichert, das sich von dem Rechenzentrum unterscheidet, das die virtuelle Maschine hostet. Sie werden mit einem symmetrischen AES-256-Bit-Algorithmus (Cipher-Modus `xts-plain64`) verschlüsselt, um die Vertraulichkeit der Daten zu gewährleisten.

Dadurch kann man sich vor schwerwiegenden Ausfällen im Produktionsrechenzentrum schützen und auf einem sekundären Rechenzentrum wiederherstellen (z. B. bei einem Brand).

Diese Lösung umfasst:

- Die Warm-Backup-Übertragung aller Festplatten außerhalb des Standorts,
- Die Präsentation und den sofortigen Start einer virtuellen Maschine aus der Massenspeicher-Infrastruktur und das erneute Laden auf die SAN-Produktions-Systeme,
- Die teilweise Wiederherstellung von Dateien aus der Sicherung,
- Eine begrenzte Aufbewahrungsdauer, die nur durch die Speicherkapazität begrenzt ist.

Diese Sicherungsinfrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, einer agentenlosen Architektur, die einfach zu verwenden ist und die Automatisierung der Sicherungsprozesse ermöglicht sowie die Optimierung des Massenspeichers.

Die Geschwindigkeiten von Sicherungen und Wiederherstellungen hängen vom Änderungsgrad in den Umgebungen ab. Die Sicherungspolitik ist in [der Cloud Temple Console](../console/console.md) für jede virtuelle Maschine konfigurierbar.

*__Hinweis:__*

*__Einige virtuelle Maschinen sind nicht mit dieser Sicherungstechnologie kompatibel__, die die Momentaufnahmemechanismen des Hypervisors verwendet. Dies sind typischerweise Maschinen mit konstanten Schreiblasten auf der Festplatte. Es ist dem Hypervisor nicht möglich, die Momentaufnahme zu schließen, was dazu führt, dass die virtuelle Maschine eingefroren wird, um den Abschlussvorgang abzuschließen. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht unterbrechbar.*

*Die Lösung besteht darin, die Festplatte, die dauerhaften Schreibvorgängen unterliegt, auszuschließen und die Daten auf andere Weise zu sichern.*

| Referenz                                               | Einheit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| SAUVEGARDE - Zugriff auf den IBM Spectrum Protect Plus-Service | 1 VM  | csp:(region):iaas:backup:vm:v1 |



#### Eine Backup-Politik erstellen

Um eine neue Backup-Politik hinzuzufügen, muss eine Anfrage an den Support gestellt werden. Der Support ist über das Schwimmring-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Backup-Politik erfolgt über __eine Serviceanfrage__, die folgende Angaben enthält:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail-Adresse und Telefonnummer, um die Konfiguration abzuschließen
    Der Name des Tenants
    Der Name der Backup-Politik
    Die Merkmale (x Tage, y Wochen, z Monate, ...)



## Erweiterte Datenverschlüsselung (HSM/KMS)

Cloud Temple bietet eine Lösung für die __fortgeschrittene Verschlüsselung virtueller Maschinen__ basierend auf Hardware-Sicherheitsmodulen (HSM) und einem Schlüsselverwaltungsdienst (KMS). Diese Funktion ermöglicht es, die Sicherheit sensibler Daten zu stärken, durch eine zentrale und sichere Schlüsselverwaltung, direkt in die SecNumCloud-Umgebung integriert.



### Technische Architektur

Die Lösung basiert auf einer robusten Sicherheitsinfrastruktur, bestehend aus:

- __HSM (Hardware Security Module)__ : Module __Thales Luna S790__ zertifiziert __FIPS 140-3 Niveau 3__
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ für die zentrale Schlüsselverwaltung
- __VMware-Integration__ : Kommunikation über das __KMIP__-Protokoll (Key Management Interoperability Protocol)



#### Hochverfügbare Bereitstellung

Die HSM-Infrastruktur wird in __drei Verfügbarkeitszonen__ der Region FR1 bereitgestellt:

- PAR7S
- TH3S  
- AZ07

Diese Verteilung gewährleistet eine __maximale Hochverfügbarkeit__ und __Resilienz__ des Verschlüsselungsdienstes.



### Funktion und Schlüsselhierarchie

Das System verwendet eine __kryptografische Schlüsselhierarchie__, um die Sicherheit der Daten zu gewährleisten:

| Ebene | Schlüsseltyp | Beschreibung | Lage |
|-------|--------------|--------------|------|
| 1 | __Root of Trust (RoT)__ | Hauptschlüssel durch KMS | HSM Luna |
| 2 | __Domänen-Schlüssel (DK)__ | Domänen-Schlüssel pro Kunde (Multi-Tenant-Isolierung) | HSM Luna |
| 3 | __Schlüsselverschlüsselungsschlüssel (KEK)__ | Schlüsselverschlüsselungsschlüssel pro VM | CipherTrust Manager |
| 4 | __Datenverschlüsselungsschlüssel (DEK)__ | Datenverschlüsselungsschlüssel pro VM | VMware ESXi |



#### Verschlüsselungsprozess

1. __Erzeugung__: VMware ESXi erzeugt eine eindeutige DEK für jede virtuelle Maschine  
2. __Schutz__: Die DEK wird durch die KEK verschlüsselt, die im CipherTrust Manager gespeichert ist  
3. __Sicherstellung__: Die KEK wird selbst durch die HSM-Schlüsselhierarchie geschützt  
4. __Speicherung__: Die verschlüsselte DEK wird mit den VM-Konfigurationsdateien gespeichert



### Sicherheit und Compliance



#### Zertifizierungen

- __FIPS 140-3 Level 3__ : Höchste Zertifizierung für HSMs
- __Common Criteria EAL4+__ : Erweiterte Sicherheitsbewertung
- __SecNumCloud__ : ANSSI-Zertifizierung, integriert in die Cloud Temple-Umgebung



#### Multi-Tenant-Isolation

- __Kryptografische Trennung__: Jeder Kunde verfügt über ein isoliertes KMS-Domäne
- __Dedizierte Schlüssel__: Ein spezifischer Domänen-Schlüssel pro Kunde
- __Audit und Nachverfolgbarkeit__: Vollständige Protokollierung der Aktionen pro Domäne



### Aktivierung und Verwendung

Die Verschlüsselung von virtuellen Maschinen wird __mit einem Klick__ über die [Shiva-Konsole](../console/console.md) aktiviert.

Für eine detaillierte Anleitung mit Screenshots besuchen Sie den [Tutorium zur Verschlüsselung von virtuellen Maschinen](tutorials/vm_encryption.md).



#### Voraussetzungen

- __Konfigurierter Schlüsselanbieter__: Ein HSM/KMS-Anbieter muss auf der vStack aktiviert sein
- __Gelöschte virtuelle Maschine__: Die VM muss vor der Verschlüsselung heruntergefahren werden
- __Keine aktive Replikation__: Die VM darf nicht repliziert werden (nicht kompatibel mit Global Mirror)
- __Kein Snapshot__: Es darf kein Momentaufnahme vorhanden sein
- __Abonnement des Dienstes__: Der erweiterte Schutzdienst muss abonniert sein

*__Hinweis__: Für weitere Details zu den Voraussetzungen und dem vollständigen Prozess konsultieren Sie den [Leitfaden zur VM-Verschlüsselung](tutorials/vm_encryption.md).*



### Einschränkungen und Überlegungen



#### Kompatibilität

- __Global Mirror__ : Verschlüsselte virtuelle Maschinen sind __nicht kompatibel__ mit der Global Mirror-Replikation
- __Wiederherstellung__ : Verschlüsselte VM-Sicherungen behalten ihre kryptografische Schutzfunktion
- __Export__ : Der Export von verschlüsselten VMs erfordert spezielle Verfahren



#### Leistung

- __Minimale Auswirkung__: Hardware-Verschlüsselung sorgt für optimale Leistungen
- __Transparenz__: Keine Auswirkung auf das Funktionieren der Anwendungen



### Empfohlene Anwendungsfälle

Diese erweiterte Schutzlösung ist besonders geeignet für:

- __Sensible Daten__: Persönliche Informationen, Finanzdaten, Industriegeheimnisse
- __Regulatorische Compliance__: GDPR-Anforderungen, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Kritische Branchen__: Banken, Versicherungen, Gesundheitswesen, Verteidigung
- __Digitale Souveränität__: Schutz vor unbefugtem Zugriff, auch bei Kompromittierung

| Referenz | Einheit | SKU |
|-----------|-------|-----|
| Erweiterte Schutz - VM-Verschlüsselung über HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Hinweis__ :*

- *Der Dienst erfordert eine spezielle Abonnementsvereinbarung und ist nicht Teil des Standard-IaaS-Angebots*
- *Die Schlüsselverwaltung bleibt vollständig unter Kontrolle von Cloud Temple im SecNumCloud-Umfeld*
- *Die Verschlüsselungsschlüssel verlassen niemals die französische und souveräne Infrastruktur*