---
title: Concepts
---

Das __IaaS (Infrastructure As A Service)__ Angebot von Cloud Temple ist darauf ausgelegt, den kritischen Bedarf an Kontinuität und Disaster Recovery zu decken, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Basierend auf modernsten Technologien gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige technologische Plattform

Die IaaS-Plattform von Cloud Temple stützt sich auf weltweit anerkannte Technologiepartner:

- Rechenleistung: **CISCO UCS**.
- Speicherung: **IBM Spectrum Virtualize**, **IBM FlashSystem** für Blockspeicher.
- Netzwerk: **JUNIPER**.
- Virtualisierung: **VMware**, bietet eine zuverlässige und bewährte Basis zur Verwaltung Ihrer Cloud-Umgebungen.
- Backup: **IBM Spectrum Protect Plus**, für die Orchestrierung und Speicherung der Backups.

Diese Architektur basiert auf dem Modell **VersaStack**, einer Allianz zwischen Cisco und IBM, die eine weitreichende Kompatibilität mit den wichtigsten Softwareanbietern sicherstellt.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig automatisiert durch APIs und einem Terraform Provider, bietet das IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- **Dedizierte Ressourcen**: Die Rechenlames, Speicher-Volumes und Softwarestacks (Virtualisierung, Backup, Firewalling, etc.) werden niemals zwischen den Kunden geteilt.
- **Maximale Vorhersagbarkeit**: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf den Speicher und profitieren von einer klaren monatlichen Verbrauchsabrechnung.

Die Plattform ist **SecNumCloud**-zertifiziert von der [ANSSI](https://www.ssi.gouv.fr/), was ein hohes Maß an Automatisierung und Sicherheit gewährleistet.

## Hauptfunktionen

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- Speicher auf Abruf (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Gekreuzte Backups mit konfigurierbarer Aufbewahrung.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Console Shiva](../console/console.md) oder im Modus Infrastructure as Code dank APIs und dem Terraform Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                          |   
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauense | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                     |   
| Sicherheit           | Hochsichere Plattform, zertifiziert durch **SecNumCloud**, **HDS** (Hosting von Gesundheitsdaten), **ISO 27001** und **ISAE 3402 Type II**. |  
| Hohe Verfügbarkeit   | Plattform-Verfügbarkeitsrate von 99,99%, monatlich gemessen, inklusive Wartungsfenstern.                                               |   
| Resilienz            | Implementierung von Kontinuitäts- oder Disaster-Recovery-Plänen nach Bedarf.                                                          |
| Automatisierung      | Vollständig automatisierte Plattform, die darauf ausgelegt ist, sich in ein digitales Transformationsprogramm zu integrieren.            |
| Bedarfsgerecht       | Ressourcen sind bedarfsgerecht verfügbar.                                                                                             |













## Rechenleistung

Die von Cloud Temple bereitgestellten Lames sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware, OS-Version, ...) über die Cloud Temple-Konsole.

Mehrere Kategorien von Rechenlames stehen im Katalog zur Verfügung, um Ihre Workloads (Virtualisierung, Containerisierung, ...) zu unterstützen. Diese weisen unterschiedliche Eigenschaften und Leistungen auf, um Ihren Anforderungen bestmöglich gerecht zu werden. Der Katalog der Rechenlames wird regelmäßig aktualisiert.

Im Rahmen der Verwendung mit einem Virtualisierungsangebot besteht ein Hypervisor-Cluster ausschließlich aus Rechenlames desselben Typs (es ist nicht möglich, Lames unterschiedlicher Typen in einem einzigen Cluster zu mischen).

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                           | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU **(4)**          | SKU für das VMware-Angebot      |
| ---------------------| ------------ | -------------------------------------------| --------------------------| ----------------------| ---------------------| ------------------------------- |
| Lame ECO v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder Äquivalent)  | 20 / 40 Threads            | 2 X 10 Gbit/s         |                       | csp:fr1:iaas:vmware:eco:v3      |
| Lame STANDARD v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder Äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:standard:v3 |
| Lame ADVANCE v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder Äquivalent)    | 48 / 96 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:advance:v3  |
| Lame PERFORMANCE 1 v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y oder Äquivalent) | 16 / 32 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf1:v3    |
| Lame PERFORMANCE 2 v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 oder Äquivalent)    | 36 / 72 Threads            | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf2:v3    |
| Lame PERFORMANCE 3 v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder Äquivalent)    | 56 / 112 Threads           | 2 X 25 Gbit/s         |                       | csp:fr1:iaas:vmware:perf3:v3    |
| Lame PERFORMANCE 4 v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder Äquivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Anmerkungen__ :

- __(1)__ Die gelieferte Speichermenge entspricht der physisch auf den Lames verfügbaren. Es ist nicht möglich, die physische Speichermenge eines Lames zu ändern.

- __(2)__ Minimale Basistaktfrequenz / Turbo-Frequenz, ausgedrückt in Ghz. Standardmäßig sind die Prozessoren im BIOS auf maximale Leistung konfiguriert.

- __(3)__ Die physische Konnektivität ist für den Netzwerk- und Blockspeicherzugang gemeinsam genutzt, da die Cisco-Plattform konvergiert ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot entwickelt sich ständig weiter. Ab dem 1. Mai 2024 basiert das Angebot auf den NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das Perf4-Lame mit 2 L40S-Karten mit 48 GB RAM geliefert. Wenden Sie sich bei Bedarf an den Support für genauere Informationen.

Die Verfügbarkeit des Rechenangebots beträgt 99.99%, berechnet monatlich, inklusive Wartungsfenster. Die Berechtigung im Falle der Nichteinhaltung des SLA unterliegt der Erstellung eines Incident-Tickets. Sie müssen auch mindestens zwei Hosts pro Cluster haben und die __High Availability__ (HA)-Funktion aktivieren. Diese Funktion ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen auf dem zweiten Hypervisor automatisch neu zu starten. Für den Fall, dass eine Verfügbarkeitszone nur einen Hypervisor enthält, ist ein automatischer Neustart nicht möglich.













## Netzwerk

Der Netzwerkdienst auf der IaaS-Plattform von Cloud Temple basiert auf einer Netzwerkstruktur mit VPLS-Technologie, die eine flexible und leistungsstarke Segmentierung bietet, um die Anforderungen der Kunden hinsichtlich Konnektivität und Netzwerktrennung zu erfüllen.

### VLANs der Ebene 2

Die in dem IaaS-Angebot bereitgestellten VLANs sind vom Typ **Ebene 2** und bieten eine vollständige Netzwerktrennung und eine anpassbare Konfiguration je nach Bedarf.

#### Hauptkonzepte:
- **Teilen zwischen Clustern und Verfügbarkeitszonen (AZ)**: 
  - Die VLANs können zwischen den verschiedenen AZs und Clustern, die zum selben Tenant gehören, geteilt werden.
- **Propagation zwischen Tenants**: 
  - Die VLANs können zwischen mehreren Tenants derselben Organisation propagiert werden, um die interne Kommunikation zu erleichtern.

---

### Netzwerkausführung

Die Netzwerkstruktur gewährleistet eine geringe Latenz für optimale Leistung:
- **Latenz innerhalb der AZ**: Weniger als **3 ms**.
- **Latenz zwischen den AZ**: Weniger als **5 ms**.

---

### Wichtige Punkte

1. **Flexibilität**: Die VLANs können konfiguriert werden, um sich an Multi-Cluster- und Multi-Tenant-Umgebungen anzupassen.
2. **Hohe Leistung**: Eine minimale Latenz sorgt für eine schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. **Trennung und Sicherheit**: Die VLANs der Ebene 2 bieten eine strenge Netzwerktrennung zum Schutz der Daten und Datenströme.

---













## Blockspeicher

Cloud Temple bietet mehrere Speicherklassen an, die auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/) und [IBM SVC](https://www.ibm.com/products/san-volume-controller) basieren.

Die __IBM SVC__-Technologie ermöglicht es, das erforderliche Leistungsniveau für die Umgebungen unserer Kunden zu liefern, dank der großen Menge an eingebettetem Cache-Speicher in den Controllern und der Möglichkeit, die gesamten IOPS eines Servers auf mehrere SANs zu verteilen.

Sie wird auch verwendet, um die Replikation Ihrer Blockspeicher-LUNs zwischen den Verfügbarkeitszonen zu ermöglichen oder Eingriffe in die Speicherpools zu erleichtern.

Der Speicher ist hauptsächlich FLASH NVME-Speicher, der für professionelle Workloads bereitgestellt wird. Die verwendeten Laufwerke in den Speicher-Arrays sind in [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) konfiguriert.

Der Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungsanforderungen in einem wirtschaftlich effizienten Umfeld an. Es sind mehrere Leistungsstufen verfügbar:

| Referenz                         | Einheit | SKU                                          | 
|----------------------------------|---------|----------------------------------------------|
| FLASH - Essentiell - 500 IOPS/To | 1 Gio   | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To  | 1 Gio   | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To   | 1 Gio   | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To| 1 Gio   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To    | 1 Gio   | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivierung      | 1 Tio   | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__ :*

- *Die Verfügbarkeit des Speichers beträgt 99,99 % monatlich gemessen, einschließlich Wartungsfenster,*
- *Es gibt keine Einschränkungen oder Quoten für das Lesen oder Schreiben,*
- *Es gibt keine Abrechnung nach IOPS,*
- *Es gibt keine Leistungszusagen für die Klasse __'Mass Storage'__,*
- *Die minimale Größe eines Speicher-LUN beträgt 500Gio,*
- *Bei der Verwendung eines Speicherreplikationsmechanismus müssen die Leistungen in beiden Verfügbarkeitszonen identisch sein,*
- *Es wird keine "intelligente" Optimierung wie Kompression oder Deduplizierung eingesetzt: Wenn Sie 10Tio Speicherplatz reservieren, haben Sie physisch 10Tio nutzbaren Speicherplatz auf den IBM-Maschinen.*
- *Die Speicher-LUNs sind der Kundenumgebung vorbehalten.*

### Nutzung im Rahmen des VMware-Rechenangebots

Im Rahmen der Nutzung des Blockspeichers als Datenspeicher im VMware-Rechenangebot von Cloud Temple, **müssen Sie mehrere wichtige Überlegungen beachten**:

1. **Swap-Datei (.VSWP) beim Starten der virtuellen Maschinen**: Beim Starten einer virtuellen Maschine wird eine .VSWP-Datei in der Größe des Speichers auf der Festplatte erstellt. Daher müssen Sie in Ihrem Datenspeicher immer genügend freien Speicherplatz haben, um das Starten Ihrer virtuellen Maschinen zu ermöglichen. Wenn Ihr Datenspeicher beispielsweise 1 Tio Blockspeicher umfasst und Sie 10 virtuelle Maschinen mit jeweils 64 Gio Speicher starten möchten, sind 640 Gio Festplattenspeicher erforderlich. Ohne diesen Platz wird das Starten der Maschinen durch die verfügbare Kapazität zum Erstellen der Swap-Dateien begrenzt.

2. **Freispeicherplatz für Sicherungssnapshots**: Der Sicherungsdienst verwendet Snapshots. Daher müssen Sie immer genügend freien Speicherplatz für die Erstellung eines Snapshots während der Sicherung einer virtuellen Maschine haben. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und der Zeit ab, die für die Sicherung benötigt wird. Es wird allgemein empfohlen, mindestens 10 % freien Speicherplatz für diesen Vorgang zu bereithalten.

3. **Verwaltung von dynamischen Festplatten**: Seien Sie vorsichtig beim Einsatz von dynamischen Festplatten. Wenn Sie deren Wachstum nicht beherrschen, kann ein Mangel an physischem Speicherplatz im besten Fall ein Einfrieren (Freeze) der virtuellen Maschine verursachen oder im schlimmsten Fall einen Absturz mit Beschädigung. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datenspeichern genau zu überwachen, wenn Sie diesen Festplattentyp verwenden.

Eine proaktive Verwaltung des Speicherplatzes ist wesentlich, um das reibungslose Funktionieren Ihrer virtuellen Maschinen und die Zuverlässigkeit der Sicherungen zu gewährleisten. Stellen Sie sicher, dass immer genügend Platz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten vorhanden ist.

## Speicher im Backup-Modus

Der für die Sicherung Ihrer virtuellen Maschinen dedizierte Speicher wird von der Plattform [IBM Spectrum Protect Plus](backup.md) innerhalb der bestellten Quote automatisch bereitgestellt. 

| Referenz                | Einheit | SKU                                      | 
|-------------------------|---------|------------------------------------------|
| MASS STORAGE - Archivierung | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Blockspeicher-Replikation

#### Grundsätze

Zur Ermöglichung der Durchführung Ihrer Wiederherstellungspläne, wenn es nicht möglich ist, eine betriebliche Kontinuität mit Applikationsmechanismen aufrechtzuerhalten und die Replikation der virtuellen Maschinen nicht geeignet ist, bietet Cloud Temple __Blockspeicher-Replikationsmechanismen zwischen Verfügbarkeitszonen einer Region__ an.

Diese Replikationsmechanismen werden in Ergänzung zu den Sicherungen auf die Speichervolumes Ihrer Umgebungen angewendet. Die Entscheidung für den Einsatz eines Replikationsmechanismus in einer Umgebung __hängt von vielen Faktoren ab, einschließlich deren Kritikalität, der tolerierten Datenverluste oder der angestrebten Leistung__ für die Anwendung.

Cloud Temple bietet zwei Typen von Mechanismen in einer aktiv/passiv Konfiguration:

- Die __asynchrone__ Replikation (oder __'Global Mirror'__): *Die Funktion __'Global Mirror'__ bietet einen asynchronen Kopiervorgang. Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des Abschlusses der I/O vor dem Abschluss des Kopiervorgangs auf das sekundäre Volume empfangen. Falls ein Umschaltvorgang initiiert wird, muss die Anwendung alle Aktualisierungen abrufen und anwenden, die auf dem sekundären Volume nicht bestätigt wurden. Wenn die I/O-Vorgänge auf dem primären Volume für eine kurze Zeit pausiert werden, kann das sekundäre Volume eine exakte Übereinstimmung des primären Volumes werden. Diese Funktion ist vergleichbar mit einem kontinuierlichen Backup-Prozess, bei dem die letzten Updates immer fehlen. Wenn Sie Global Mirror für Disaster Recovery verwenden, sollten Sie überlegen, wie Sie mit diesen fehlenden Updates umgehen möchten.*

- Die __synchrone__ Replikation (oder __'Metro Mirror'__): *Die Funktion __'Metro Mirror'__ ist eine Fernkopieart, die eine synchrone Kopie der Daten von einem primären Volume auf ein sekundäres Volume erstellt. Bei synchronen Kopien schreiben die Host-Anwendungen auf das primäre Volume, erhalten jedoch keine Bestätigung, dass der Schreibvorgang abgeschlossen ist, bis die Daten auf das sekundäre Volume geschrieben wurden. Dies stellt sicher, dass beide Volumes identische Daten enthalten, wenn der Kopiervorgang abgeschlossen ist. Nachdem der anfängliche Kopiervorgang abgeschlossen ist, stellt die Metro Mirror-Funktion sicher, dass die Quelldaten fortlaufend synchron auf dem Zielort beibehalten werden. __Ab dem 1. Januar 2024 wird die Metro Mirror-Funktion nicht mehr vermarktet.__*


Es wird dann eine sogenannte "aktive" oder "primäre" Site und eine "passive" oder "standby" Site definiert. Der Wiederherstellungsplan tritt im Katastrophenfall oder im Rahmen einer Testanforderung für den Disaster Recovery Plan in Kraft. Die passive Site übernimmt dann die aktive Site.

#### Asynchrone Replikation 

Wenn Ihre Workloads kurze Wiederherstellungszeiten erfordern und es nicht akzeptabel oder angemessen ist, Applikationsreplikationsmechanismen / Replikation von virtuellen Maschinen zu verwenden, ist es möglich, ein SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region zu replizieren.

Dieses Angebot ermöglicht ein __RPO von 15 Minuten__ und ein __RTO von weniger als 4 Stunden__. Es ermöglicht eine viel schnellere Rückkehr zum Betrieb als die Umsetzung einer Sicherungswiederherstellung.

In einem asynchron replizierten Speichervolumen (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller der beiden Verfügbarkeitszonen zusammen, um die Schreibvorgänge auf beiden Sites durchzuführen. Die Hauptsite wartet nicht auf die Schreibbestätigung der Sekundärsite.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volume__ ausführen: Er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, den Schreibvorgang auszuführen,
3. der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN und führt dann den Schreibvorgang lokal aus,
4. Er gibt __Bestätigung__ an den anfragenden Hypervisor,
5. __Die Hypervisoren der entfernten Site haben keinen direkten Zugriff auf das Global Mirror LUN__: Ein Serviceauftrag ist erforderlich.


| SLA       | Beschreibung                                                                                                                                         |   
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | Im Falle eines Ausfalls des primären Rechenzentrums entspricht die maximale Datenverlustmenge den letzten 15 Minuten Schreibvorgängen.                |
| RTO < 4H  | Im Falle eines Ausfalls des primären Rechenzentrums ist die Wiederherstellung innerhalb von 4 Stunden je nach Komplexität der Umgebungen garantiert. |

Im Falle der Aktivierung des Disaster Recovery Plans führt das Team von Cloud Temple eine Präsentation des __'Global Mirror'__ LUN an die entfernten Hypervisoren durch, damit sie auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher, dass auf der 'standby' Site Rechen- und RAM-Ressourcen reserviert sind, um im Falle eines Ausfalls den Betrieb wieder aufzunehmen.

Die Nutzung dieser Technologie erfordert auch eine Verdopplung des Speicherplatzes: Es ist notwendig, dass derselbe Speicherplatz auf der entfernten Site wie auf der lokalen Site vorhanden ist.
L'usage de ce mécanisme peut impacter la performance de l'application à hauteur de 10 %. __Seules les classes de stockage 500 Iops/To, 1500 Iops/To et 3000 Iops/TO sont compatibles.__


| Référence                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STOCKAGE - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__* : 

- *L'offre étant asynchrone, il est possible lors d'un sinistre que certaines opérations disques n'est pas été écrite sur le site distant. Il peut donc y avoir un risque sur la cohérence des données, a mitigé dans l'analyse de risque du plan de reprise d'activité.*
- *La réplication du stockage en mode bloc se fait de façon masquée pour les machines virtuelles et les applications,*
- *À ce titre, il est important de privilégier les scénarios de réplication applicative ou éventuellement de réplication de machine virtuelle,*
- *Le calcul et la mémoire, sur le site de reprise, peuvent être diminués pour optimiser les coûts si une situation dégradée est acceptable pour le métier lors de l'action du plan de reprise d'activité.*














## Virtualisation VMware

L'offre de virtualisation VMware Cloud Temple qualifiée SecNumCloud est basée sur la technologie __VMware Vsphere__.

Die Plattform wird von Cloud Temple automatisch verwaltet (Sicherheitsbedingungen aufrechterhalten, betriebsfähig halten, ...).
Sie kann über die grafische Benutzeroberfläche der Shiva-Konsole oder über die zugehörigen APIs gesteuert werden.

*__Remarque__* : *Aus Sicherheitsgründen im Zusammenhang mit der SecNumCloud-Qualifikation
__ist es für den Auftraggeber nicht möglich, direkt auf die VMware-Virtualisierungsplattform zuzugreifen__ (insbesondere kein direkter Zugriff auf das vCenter).
In der Tat, die SecNumCloud-Qualifikation erfordert __eine totale Trennung__ zwischen den Steuerungsschnittstellen der technischen Assets und der Auftraggeberschnittstelle (der Shiva-Konsole).*

- Die eingesetzten Produkte sind VMware ESXi, VMware Vcenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots verwendet nicht die VMware NSX-Technologie, sondern wird hardwareseitig durch die Juniper-Technologie und das VPLS-Protokoll gesteuert.*
- *Das Speichern verwendet nicht die VMware vSan-Technologie, sondern nur IBM-SANs im 32G Fiber Channel.*
- *Es wird keine Form von versteckter Optimierung implementiert (Komprimierung, Deduplizierung, ...).*

### Definition eines Rechenblades-Clusters ('Cpool')

Der __'Cpool'__ ist eine Gruppe von VMware ESXi-Hypervisors, auch bekannt als *'ESX-Cluster'*.

Die in einem __'Cpool'__ enthaltenen Hosts gehören alle __zum selben Mandanten und zur selben Verfügbarkeitszone__ (AZ). Sie müssen zwingend derselben Klasse angehören:
__es ist nicht möglich, verschiedene Modelle von Rechenblades innerhalb desselben Clusters zu mischen__.

Alle Rechenblades werden mit dem physischen Maximum an Speicher geliefert, eine Softwareeinschränkung der RAM-Nutzung wird auf Clusterebene angewendet, um sicherzustellen, dass sie der fakturierten RAM entspricht.

Standardmäßig verfügt jede Klinge innerhalb des __'Cpool'__ über 128 GB aktivierten Speicher.

Ein __'Cpool'__ kann maximal 32 Hypervisors enthalten. Darüber hinaus ist es erforderlich, einen zweiten Cluster zu erstellen.

Der Speicher kann zwischen den __'Cpool'__ geteilt werden.

### Speicherzuweisung für einen 'Cpool'

Die RAM-Reservierung ist pro Cluster konfigurierbar. Sie können die Menge der RAM reduzieren oder erhöhen, um sie Ihren Anforderungen auf Clusterebene anzupassen.

__Achten Sie darauf, 85 % durchschnittlicher Speichernutzung pro Rechenblade nicht zu überschreiten__.
Die VMware-Technologie verwendet nämlich eine Komprimierungsoptimierungsmethode, die die Leistung Ihrer Arbeitslasten stark beeinträchtigen und die Diagnose erschweren kann.
Ebenso wird bei einer zu hohen Speicherbelastung Ihre Rechenblades der Hypervisor gezwungen, einen Teil seines Speichers auf die Festplatte auszulagern, um den Anforderungen der virtuellen Maschinen gerecht zu werden.

Dieser Fall, genannt __'Ballooning'__, beeinträchtigt die Gesamtleistung der auf dem betroffenen Speicher (Datenspeicher) befindlichen virtuellen Maschinen erheblich.
__Die Diagnose ist in diesem Kontext schwierig__, da Ihre Metriken Auswirkungen auf die CPU und nicht auf den Speicher oder Speicherplatz feststellen werden.
Behalten Sie auch im Hinterkopf, dass die erste Aktion des Hypervisors beim Start einer virtuellen Maschine darin besteht, __eine Auslagerungsdatei__ (.vswap) auf
der Festplatte zu erstellen, die der Größe des Speichers der betreffenden virtuellen Maschine entspricht. Sie müssen dies __bei der Dimensionierung Ihres Speichers berücksichtigen__.

Jedes Rechenblade wird mit 128 GB Speicher geliefert, der softwareseitig auf Clusterebene innerhalb des __'Cpool'__ aktiviert ist, verfügt jedoch physisch über den gesamten zuweisbaren Speicher.

Zum Beispiel, bei einem Cluster von drei Hosts des Typs ```vmware:standard:v2```, wird die RAM-Reservierung bei Aktivierung des __'Cpool'__ bei 3 x 128 GB = 384 GB RAM liegen.
Sie können es bis maximal 3 x 384 GB = 1152 GB Speicher erweitern.

    Minimum RAM für einen 'Cpool' = Anzahl der Hosts X 128 GB Speicher
    Maximum RAM für einen 'Cpool' = Anzahl der Hosts X die Menge des physischen Speichers des Rechenblades

### Kataloge für virtuelle Maschinen von Cloud Temple

Cloud Temple stellt Ihnen einen regelmäßig erweiterten und aktualisierten Katalog von `Templates` zur Verfügung, 
der bis heute mehrere Dutzend `Templates` und Images umfasst, die Sie auf Ihren virtuellen Maschinen installieren können.

### Updates der Hypervisors
Cloud Temple liefert regelmäßig Builds für die Hypervisors, um die Anwendung von Sicherheitsupdates sicherzustellen. 
Allerdings bleibt das Update der Hypervisors in Ihrer Verantwortung, da wir keine Sicht auf Ihre geschäftlichen Anforderungen haben.

Der Aktualisierungsprozess ist vollständig automatisiert. Um einen kontinuierlichen Service zu gewährleisten, werden pro Cluster mindestens zwei Hypervisors während der Aktualisierung benötigt. Stellen Sie sicher, dass Sie über die erforderlichen Berechtigungen verfügen, um diese Aktionen durchzuführen.


### Verwaltung der Affinität Ihrer virtuellen Maschinen

Die __Regeln für Affinität und Anti-Affinität__ ermöglichen es, den Standort der virtuellen Maschinen auf Ihren Hypervisors zu steuern.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu verwalten.
Zum Beispiel können sie helfen, die Arbeitslast zwischen den Servern auszugleichen oder ressourcenintensive Arbeitslasten zu isolieren.
In einem __'Cpool'__ VMware werden diese Regeln oft verwendet, um das Verhalten von virtuellen Maschinen mit vMotion zu verwalten.
vMotion ermöglicht das Verschieben virtueller Maschinen von einem Host zu einem anderen ohne Serviceunterbrechung.

Dank der Regelverwaltung können Sie Folgendes konfigurieren:

- __Affinitätsregeln__ : Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden verwendet, um die Leistung zu verbessern, indem die häufig miteinander kommunizierenden virtuellen Maschinen auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind nützlich in Szenarien, in denen die Leistung kritisch ist, z. B. im Fall von Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern erfordern.

- __Anti-Affinitätsregeln__ : Im Gegensatz dazu stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht auf demselben physischen Host ausgeführt werden.
Sie sind wichtig für die Verfügbarkeit und die Ausfallsicherheit, z. B. um zu verhindern, dass kritische Maschinen alle von einem einzelnen Serverausfall betroffen sind.
Anti-Affinitätsregeln sind wesentlich für Anwendungen, die eine hohe Verfügbarkeit erfordern, z. B. in Produktionsumgebungen, in denen Fehlertoleranz Priorität hat.
Zum Beispiel möchten Sie nicht, dass Ihre beiden Active Directories auf demselben Hypervisor liegen.

Bei der Erstellung einer Regel definieren Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel,
den Aktivierungsstatus ( __'Statut'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

*Remarque : Die Affinitäts-/Anti-Affinitätsregeln, die in der Konsole angeboten werden, betreffen nur die virtuellen Maschinen untereinander (keine Regeln zwischen Hypervisors und virtuellen Maschinen).*

### Asynchrone Replikation Ihrer virtuellen Maschinen in einer VMware-Umgebung

Die asynchrone Replikation Ihrer virtuellen Maschinen besteht darin, Schreiboperationen in regelmäßigen Abständen vom Quell-Hypervisor auf den Standby-Standort zu übertragen.

Nach einer anfänglichen Live-Kopie des gesamten aktiven Speichers auf den Standby-Standort werden nur die Schreibvorgänge in regelmäßigen Abständen auf den Standby-Standort übertragen.
Dieses Intervall hängt vom Schreibvolumen ab (von stündlich bis zu alle 24 Stunden).

Die Replikation der virtuellen Maschinen basiert auf dem Snapshot-Mechanismus des Hypervisors. In dieser Hinsicht hat hier diese Lösung die gleichen Nachteile,
besonders die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine, da der Snapshot-Prozess ein rekursives Verfahren für den Abschluss des Snapshots ist.

Ein typisches Beispiel für eine Maschine, die den Replikationsmechanismus für virtuelle Maschinen nicht unterstützt, ist ein
FTP-Server, der Echtzeitdatenströme von Überwachungskameras empfängt. __Die Maschine verbringt ihre Zeit mit Schreiben und wird 
nicht in der Lage sein, einen Snapshot abzuschließen, ohne das Betriebssystem für eine signifikante Zeitspanne
(mehrere zehn Minuten) anzuhalten__. Wenn der Hypervisor den Snapshot nicht abschließen kann, wird er genau das tun,
ohne Eingriffsmöglichkeit außer zur Korruption der virtuellen Maschine.
| SLA             | Beschreibung                                                                                                                                             |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1H bis 24H | Im Falle eines Ausfalls des primären Rechenzentrums ist die maximale Datenmenge, die verloren gehen kann, die der letzten Schreibvorgänge auf dem Standby-Site. |
| RTO  < 15 Minuten  | Betriebsstart der angehaltenen virtuellen Maschine auf dem Fernstandort                                                                                |


Im Bedarfsfall oder bei einem Fehler an einer Maschine des primären Standorts wird die Spiegelmaschine am Standby-Standort aktiviert. 
Für die Wiederaufnahme des Betriebs ist es notwendig, auf dem Standby-Standort Rechenleistung und RAM im Standby-Modus reserviert zu haben. Es 
ist erforderlich, dass am passiven Standort derselbe Speicherplatz vorhanden ist wie am aktiven Standort.


| Referenz                          | Einheit | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Hinweis__ : Die Berechnung des minimalen RPO muss in Abhängigkeit von der Änderungsrate auf der virtuellen Maschine definiert werden.*













## Backup von virtuellen Maschinen
Cloud Temple bietet __eine native und nicht deaktivierbare, kreuzweise Sicherungsarchitektur__ (sie ist im französischen Secnumcloud-Qualifikationsverfahren obligatorisch).

Die Backups werden in einer Verfügbarkeitszone und in einem physischen Rechenzentrum gespeichert, das sich von dem unterscheidet, das die virtuelle Maschine hostet.

Dies ermöglicht den Schutz im Falle eines größeren Ausfalls des Produktionsrechenzentrums und die Wiederherstellung auf einem sekundären Rechenzentrum (z.B. Brand).

Diese Lösung umfasst:

- Das Offsite-Hot-Backup aller Festplatten,
- Die Präsentation und der sofortige Start einer virtuellen Maschine aus der Massenspeicherinfrastruktur und das Hot-Reload auf den Produktiv-SANs,
- Die teilweise Wiederherstellung von Dateien aus dem Backup,
- Eine auf die Zuweisung des Massenspeichers begrenzte Retention.

Diese Backup-Infrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, einer agentenlosen Architektur, die einfach zu bedienen ist und die Automatisierung der Backup-Prozesse sowie eine Optimierung des Massenspeichers ermöglicht.

Die Backup- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab.
Die Backup-Richtlinie ist über die [Cloud Temple Console](../console/console.md) für jede virtuelle Maschine konfigurierbar.

*__Hinweis :__*

*__Einige virtuelle Maschinen sind mit dieser Sicherungstechnologie__ , die die Snapshot-Mechanismen des Hypervisors verwendet, __nicht kompatibel__. Dies sind typischerweise Maschinen, deren Schreiblast auf Festplatten konstant ist. Es ist dem Hypervisor nicht möglich, den Snapshot zu schließen, was das Einfrieren der virtuellen Maschine erfordert, um den Abschlussvorgang durchzuführen. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht zu stoppen.*

*Die Lösung besteht dann darin, die Festplatte, die Ziel permanenter Schreibvorgänge ist, auszuschließen und die Daten mit einer anderen Methode zu sichern.*

| Referenz                                               | Einheit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Zugriff auf den IBM Spectrum Protect Plus Service | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Erstellen einer Backup-Richtlinie
Um eine neue Backup-Richtlinie hinzuzufügen, muss eine Anfrage an den Support gestellt werden. Der Support ist über das Rettungsring-Symbol oben rechts im Fenster erreichbar.

Die Erstellung einer neuen Backup-Richtlinie erfolgt durch __eine Serviceanforderung__, die folgendes angibt:

    Der Name Ihrer Organisation
    Der Name eines Ansprechpartners mit seiner Mail und Telefonnummer zur abschließenden Konfiguration
    Der Name des Tenants
    Der Name der Backup-Richtlinie
    Die Merkmale (x Tage, y Wochen, z Monate, ...)