---
title: Concepts
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple wurde entwickelt, um den kritischen Anforderungen an Kontinuität und Disaster Recovery gerecht zu werden, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Basierend auf modernster Technologie garantiert diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Arbeitslasten.

## Eine vertrauenswürdige technologische Plattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international anerkannte Technologiepartner:

- Berechnung: **CISCO UCS**.
- Speicherung: **IBM Spectrum Virtualize**, **IBM FlashSystem** für Blockspeicherung.
- Netzwerk: **JUNIPER**.
- Virtualisierung: **VMware**, bietet eine zuverlässige und erprobte Basis zur Verwaltung Ihrer Cloud-Umgebungen.
- Sicherung: **IBM Spectrum Protect Plus**, für die Orchestrierung und Speicherung von Backups.

Diese Architektur basiert auf dem **VersaStack**-Modell, einer Allianz zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den wichtigsten Softwareentwicklern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl sie vollständig automatisiert durch APIs und einen Terraform-Provider ist, bietet das IaaS-Angebot von Cloud Temple eine einzigartige Infrastruktur:

- **Dedizierte Ressourcen**: Rechenblades, Speicher-Volumes und Software-Stacks (Virtualisierung, Sicherung, Firewalling usw.) werden niemals zwischen den Kunden geteilt.
- **Maximale Vorhersehbarkeit**: Sie kontrollieren die Virtualisierungsraten, den IOPS-Druck auf dem Speicher und genießen eine klare, monatliche Verbrauchsabrechnung.

Die Plattform ist vom [ANSSI](https://www.ssi.gouv.fr/) als **SecNumCloud** zertifiziert und gewährleistet ein hohes Maß an Automatisierung und Sicherheit.

## Hauptfunktionen

- Dedicated, on-demand Rechenressourcen (CPU, RAM).
- On-demand Speicher (verschiedene Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Übergreifende Backups mit konfigurierbarer Aufbewahrung.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Shiva-Konsole](../console/console.md) oder im Infrastructure-as-Code-Modus dank APIs und dem Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                |   
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                   |   
| Sicherheit           | Hochsichere Plattform, zertifiziert nach **SecNumCloud**, **HDS** (Hosting von Gesundheitsdaten), **ISO 27001** und **ISAE 3402 Typ II**.   |  
| Hohe Verfügbarkeit   | Plattformverfügbarkeit von 99,99 %, monatlich gemessen, Wartungsfenster eingeschlossen.                                                     |   
| Widerstandsfähigkeit | Implementierung von Business Continuity- oder Disaster-Recovery-Plänen nach Bedarf.                                                         |
| Automatisierung      | Vollständig automatisierte Plattform, die darauf ausgelegt ist, sich in ein digitales Transformationsprogramm zu integrieren.                |
| Auf Abruf            | Ressourcen auf Abruf verfügbar.                                                                                                            |













## Berechnung

Die von Cloud Temple bereitgestellten Blades sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware, OS-Version etc.) über die Cloud Temple-Konsole.

Mehrere Kategorien von Rechenblades sind im Katalog verfügbar, um Ihre Arbeitslasten zu unterstützen (Virtualisierung, Containerisierung usw.).
Diese weisen unterschiedliche Eigenschaften und Leistungen auf, um Ihren Bedürfnissen bestmöglich gerecht zu werden. Der Katalog der Rechenblades wird regelmäßig aktualisiert.

Im Rahmen der Nutzung mit einem Virtualisierungsangebot besteht ein Hypervisor-Cluster ausschließlich aus Rechenblades desselben Typs (es ist nicht möglich, Blades verschiedener Typen in einem Cluster zu mischen).

| Referenz             | RAM  __(1)__ | Frequenz __(2)__                        | Anzahl der Kerne / Threads  | Konnektivität __(3)__  | GPU **(4)**           | SKU für das VMware-Angebot      |
| -------------------- | ------------ | --------------------------------------- | -------------------------- | ---------------------- | --------------------- | ------------------------------- |
| ECO-Blade v3         | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder äquivalent) | 20 / 40 Threads             | 2 X 10 Gbit/s          |                       | csp:fr1:iaas:vmware:eco:v3      |
| STANDARD-Blade v3    | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder äquivalent) | 32 / 64 Threads             | 2 X 25 Gbit/s          |                       | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE-Blade v3     | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder äquivalent)   | 48 / 96 Threads             | 2 X 25 Gbit/s          |                       | csp:fr1:iaas:vmware:advance:v3  |
| PERFORMANCE 1-Blade v3 | 384 GB     | 3.20/3.6 GHz (Xeon E-53I5Y oder äquivalent) | 16 / 32 Threads             | 2 X 25 Gbit/s          |                       | csp:fr1:iaas:vmware:perf1:v3    |
| PERFORMANCE 2-Blade v3 | 768 GB     | 3.00/3.6 GHz (Gold 6354 oder äquivalent)   | 36 / 72 Threads             | 2 X 25 Gbit/s          |                       | csp:fr1:iaas:vmware:perf2:v3    |
| PERFORMANCE 3-Blade v3 | 1536 GB    | 2.60/3.5 GHz (Gold 6348 oder äquivalent)   | 56 / 112 Threads            | 2 X 25 Gbit/s          |                       | csp:fr1:iaas:vmware:perf3:v3    |
| PERFORMANCE 4-Blade v3 | 512 GB     | 2.50/4.1 GHz (Intel 6426Y oder äquivalent) | 32 / 64 Threads             | 2 X 25 Gbit/s          | 2 x NVIDIA L40S 48GB  | csp:fr1:iaas:vmware:perf4:v3    |

__Bemerkungen__ :

- __(1)__ Die gelieferte Speichermenge entspricht der physisch verfügbaren Menge auf den Blades. Es ist nicht möglich, die physische Speichermenge eines Blades zu ändern.

- __(2)__ Mindestbasisfrequenz / Turbo-Frequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren auf maximale Leistung im BIOS konfiguriert.

- __(3)__ Die physische Konnektivität ist für den Netzwerkspeicher- und Blockspeicherzugriff gemeinsam genutzt, da die CISCO-Plattform konvergiert ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot ändert sich ständig. Am 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das PERFORMANCE 4-Blade mit 2 L40S-Karten mit 48 GB RAM geliefert. Kontaktieren Sie den Support für weitere Details, falls erforderlich.

Die Verfügbarkeit des Rechenangebots liegt bei 99,99 %, monatlich berechnet, einschließlich Wartungsfenster. Die Anspruchsberechtigung bei Nichteinhaltung des SLA unterliegt der Erstellung eines Incident-Tickets. Sie müssen auch mindestens zwei Hosts pro Cluster besitzen und die __High Availability__ (HA)-Funktion aktivieren.
Diese Funktion ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf dem zweiten Hypervisor neu zu starten.
Für den Fall, dass eine Verfügbarkeitszone nur einen Hypervisor enthält, ist der automatische Neustart nicht möglich.













## Netzwerk
Der Netzwerkdienst auf der IaaS-Plattform von Cloud Temple basiert auf einer Netzwerk-Infrastruktur basierend auf der VPLS-Technologie, die eine flexible und leistungsstarke Segmentierung bietet, um den Kundenbedürfnissen in Bezug auf Konnektivität und Netzwerktrennung gerecht zu werden.

### VLANs der Stufe 2

Die in dem IaaS-Angebot bereitgestellten VLANs sind vom Typ **Stufe 2**, bieten vollständige Netzwerktrennung und eine anpassbare Konfiguration je nach Bedarf.

#### Hauptkonzepte:
- **Teilen zwischen Clustern und Verfügbarkeitszonen (AZ)**: 
  - Die VLANs können zwischen den verschiedenen AZs und den verschiedenen Clustern, die zum gleichen Mandanten gehören, geteilt werden.
- **Propagation zwischen Mandanten**: 
  - Die VLANs können zwischen mehreren Mandanten, die zu derselben Organisation gehören, verbreitet werden und erleichtern so die interne Kommunikation.

---

### Netzwerkleistung

Die Netzwerk-Infrastruktur garantiert geringe Latenz für optimale Leistung:
- **Intra-AZ Latenz**: Weniger als **3 ms**.
- **Inter-AZ Latenz**: Weniger als **5 ms**.

---

### Wichtige Punkte

1. **Flexibilität**: Die VLANs können konfiguriert werden, um sich an Multi-Cluster- und Multi-Mandanten-Umgebungen anzupassen.
2. **Hohe Leistung**: Minimale Latenz gewährleistet eine schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. **Trennung und Sicherheit**: Die VLANs der Stufe 2 bieten eine strikte Netzwerktrennung zum Schutz der Daten und Ströme.

---













## Blockspeicherung

Cloud Temple bietet mehrere Speicherklassen basierend auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
und [IBM SVC](https://www.ibm.com/products/san-volume-controller).

Die __IBM SVC__-Technologie ermöglicht es, das erforderliche Leistungsniveau für die Umgebungen unserer Kunden zu liefern, dank der großen
Menge an Cache-Speicher, der in den Controllern eingebaut ist, und der Möglichkeit, die gesamten IOPS
eines Servers auf mehrere SANs zu verteilen.

Es wird auch verwendet, um die Replikation Ihrer blockbasierten Speicher-LUNs zwischen
Verfügbarkeitszonen zu ermöglichen oder Eingriffe auf den Speicherarrays zu erleichtern.

Der Speicher ist hauptsächlich FLASH NVME-Speicher und auf professionelle Arbeitslasten ausgelegt.
Die Festplatten werden von den Speicherarrays im [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) betrieben.


Le classe de stockage __'Mass Storage'__ propose des disques mécaniques pour les besoins d'archivages
dans un contexte d'efficience économique. Plusieurs niveaux de performances sont disponibles :

| Référence                         | Unité | SKU                                          | 
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      | 
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Nota__ :*

- *La disponibilité du stockage est de 99.99% mesuré mensuellement, plage de maintenance incluse,*
- *Il n'y a pas de restriction ou de quota sur la lecture ou l'écriture,*
- *Il n'y a pas de facturation à l'IOPS,*
- *Il n'y a pas d'engagement de performance sur la classe __'Mass Storage'__,*
- *La taille minimale d'une LUN de stockage est de 500Gio,*
- *Lors de l'usage d'un mécanisme de réplication de stockage, les performances doivent être identiques sur les deux zones de disponibilité,*
- *Aucun mécanisme d'optimisation "intelligent" de type compression ou déduplication n'est mis en œuvre : quand vous réservez 10Tio de stockage, vous avez physiquement 10Tio utile de stockage mis en œuvre sur les machines IBM.*
- *Les LUNs de stockage sont dédiés à l'environnement client.*

### Nutzung im Rahmen des VMware-Berechnungsangebots

Im Rahmen der Nutzung des Block-Speichers als Datastore im VMware-Berechnungsangebot von Cloud Temple **müssen Sie mehrere wichtige Überlegungen berücksichtigen**:

1. **Swap-Datei (.VSWP) beim Starten der virtuellen Maschinen**: Wenn eine virtuelle Maschine startet, erstellt sie eine .VSWP-Datei in der Größe ihres Speichers auf der Festplatte. Daher müssen Sie zum Starten Ihrer virtuellen Maschinen immer genügend freien Speicherplatz in Ihrem Datastore haben, der der Summe der Speichergrößen Ihrer virtuellen Maschinen entspricht. Zum Beispiel, wenn Ihr Datastore über 1 Tio Block-Speicher verfügt und Sie 10 virtuelle Maschinen mit jeweils 64 Gio Speicher starten möchten, benötigen Sie 640 Gio Festplattenspeicher. Ohne diesen Speicherplatz wird der Start der Maschinen durch die verfügbare Kapazität zum Erstellen der Swap-Dateien begrenzt.

2. **Freier Speicherplatz für Backup-Snapshots**: Der Backup-Dienst nutzt Schnappschüsse (Snapshots). Sie müssen daher immer genügend freien Speicherplatz haben, um die Erstellung eines Schnappschusses beim Backup einer virtuellen Maschine zu ermöglichen. Die Größe des Schnappschusses hängt vom Schreibvolumen der virtuellen Maschine und der Zeit ab, die für das Backup benötigt wird. Es wird im Allgemeinen empfohlen, mindestens 10 % freien Speicherplatz für diesen Vorgang zu halten.

3. **Verwaltung dynamischer Festplatten**: Seien Sie vorsichtig beim Einsatz dynamischer Festplatten. Wenn Sie deren Wachstum nicht kontrollieren, kann ein Mangel an physischem Speicherplatz zu einem Einfrieren (Freeze) der virtuellen Maschine im besten Fall oder zu einem Absturz mit Korruption im schlimmsten Fall führen. Es ist zwingend erforderlich, den verfügbaren Speicherplatz auf Ihren Datastores genau zu überwachen, wenn Sie diesen Festplattentyp verwenden.

Eine proaktive Verwaltung des Speicherplatzes ist entscheidend, um das einwandfreie Funktionieren Ihrer virtuellen Maschinen und die Zuverlässigkeit der Backups zu gewährleisten. Stellen Sie sicher, dass Sie stets über den notwendigen Speicherplatz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten verfügen.

## Speicher im Backup-Modus

Der für das Backup Ihrer virtuellen Maschinen vorgesehene Speicher wird von der Plattform innerhalb des bestellten Kontingents automatisch bereitgestellt. 

| Referenz                | Einheit | SKU                                      | 
|-------------------------|---------|------------------------------------------|
| MASS STORAGE - Archivage | 1 Tio | csp:(region):iaas:storage:bloc:backup:v1 |


### Replikation des Block-Speichers

#### Grundlagen

Um die Umsetzung Ihrer Notfallwiederherstellungspläne zu ermöglichen, wenn es nicht möglich ist, mit Anwendungskontinuitätsmechanismen in einer kontinuitätsgefährdenden Situation zu sein und die Replikation virtueller Maschinen nicht geeignet ist, bietet Cloud Temple __Block-Speicher-Replikationsmechanismen zwischen den Verfügbarkeitszonen einer Region__ an.

Diese Replikationsmechanismen werden ergänzend zu den Backups auf die Speicher-LUNs Ihrer Umgebungen angewendet. 
Die Entscheidung für die Verwendung eines Replikationsmechanismus in einer Umgebung __hängt von vielen Faktoren ab, einschließlich seiner Kritikalität, des tolerierten Datenverlusts oder der angestrebten Leistung__ für die Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen an, die in einer Aktiv/Passiv-Konfiguration bereitgestellt werden: 

- Die __asynchrone__ Replikation (oder __'Global Mirror'__): *Die __'Global Mirror'__-Funktion bietet einen asynchronen Kopiervorgang. 
Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des Abschlusses des E/A-Vorgangs empfangen, bevor der Schreibvorgang für die Kopie auf das sekundäre Volume abgeschlossen ist. Wenn ein Failover-Vorgang initiiert wird, muss die Anwendung alle Updates wiederherstellen und anwenden, die auf dem sekundären Volume nicht bestätigt wurden. 
Wenn die E/A-Vorgänge auf dem primären Volume für kurze Zeit angehalten werden, kann das sekundäre Volume ein exaktes Abbild des primären Volumes werden. Diese Funktion ähnelt einem kontinuierlichen Sicherungsprozess, bei dem die neuesten Updates immer fehlen. Wenn Sie Global Mirror für die Katastrophenwiederherstellung verwenden, sollten Sie darüber nachdenken, wie Sie diese fehlenden Updates verwalten möchten.*

- Die __synchrone__ Replikation (oder __'Metro Mirror'__): *Die __'Metro Mirror'__-Funktion ist eine Art der Fernkopie, die eine synchrone Kopie 
der Daten von einem primären Volume auf ein sekundäres Volume erstellt. Bei synchronen Kopien schreiben Host-Anwendungen auf das primäre Volume, erhalten jedoch keine Bestätigung, 
dass der Schreibvorgang abgeschlossen ist, bis die Daten auf das sekundäre Volume geschrieben wurden. Dies stellt sicher, dass beide Volumes identische Daten enthalten, wenn der Kopiervorgang abgeschlossen ist. Nachdem der anfängliche Kopiervorgang abgeschlossen ist, 
hält die Metro Mirror-Funktion eine ständig vollständig synchronisierte Kopie der Quelldaten auf dem Zielsystem aufrecht. __Seit dem 1. Januar 2024 ist die 'Metro Mirror'-Funktion nicht mehr im Handel erhältlich.__*

Man definiert dann einen sogenannten "aktiven" oder "primären" Standort und einen "passiven" oder "Standby"-Standort. 
Der Wiederherstellungsplan wird im Notfall oder im Rahmen einer Testanforderung des DR-Plans aktiviert.
Der passive Standort übernimmt dann die Rolle des aktiven Standorts.

#### Asynchrone Replikation 

Wenn Ihre Workloads kurze Wiederherstellungszeiten erfordern und es nicht akzeptabel oder geeignet ist,
Anwendungsreplikationsmechanismen / virtuelle Maschinen-Replikationen zu verwenden, 
ist es möglich, eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region zu replizieren.

Dieses Angebot ermöglicht ein __RPO von 15 Minuten__ und ein __RTO von weniger als 4 Stunden__. Es ermöglicht eine viel schnellere Wiederaufnahme der Arbeit als die Durchführung einer Backup-Wiederherstellung.

In einem asynchron replizierten Speichervolumen (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller der beiden Verfügbarkeitszonen zusammen, um die Schreibvorgänge auf beiden Standorten durchzuführen.
Der Master-Site wartet nicht auf die Schreibbestätigung der Slave-Site.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volume__ durchführen: Er sendet seine Anfrage an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der entfernten Zone auf, den Schreibvorgang durchzuführen,
3. der lokale SAN-Controller wartet nicht auf die Bestätigung des entfernten SAN und führt dann den Schreibvorgang lokal durch,
4. Er gibt __Bestätigung__ an den anfordernden Hypervisor,
5. __Die Hypervisoren des entfernten Standorts greifen nicht direkt auf die Global Mirror-LUN zu__: Dafür ist eine Serviceanfrage erforderlich.

| SLA       | Beschreibung                                                                                                                                       |   
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | Im Falle einer Katastrophe im Hauptzentrum entspricht die maximal verlorene Datenmenge den letzten 15 Minuten des Schreibvorgangs                  |
| RTO < 4H  | Im Falle einer Katastrophe im Hauptzentrum ist die Wiederherstellung innerhalb von 4 Stunden je nach Komplexität der Umgebungen garantiert          |

Im Falle der Aktivierung des DR-Plans führt das Cloud Temple-Team einen Vorgang zur Präsentation der __'Global Mirror'__-LUN an die entfernten Hypervisoren durch, damit diese auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher, dass auf dem 'Standby'-Standort Rechen- und RAM-Ressourcen reserviert werden, um den Betrieb im Katastrophenfall wieder aufzunehmen.

Die Nutzung dieser Technologie erfordert ebenfalls eine Verdopplung des Plattenspeichers: Es ist notwendig, exakt denselben Speicherplatz auf dem entfernten Standort wie auf dem lokalen Standort zu haben.


L'utilisation de ce mécanisme peut affecter les performances de l'application jusqu'à 10 %. __Nur die Storage-Klassen 500 Iops/To, 1500 Iops/To und 3000 Iops/TO sind kompatibel.__


| Referenz                          | Einheit  | SKU                                               |  
|-----------------------------------|----------|---------------------------------------------------|
| SPEICHER - Globale Replikation SAN| 1 Tio    | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__* : 

- *Da das Angebot asynchron ist, ist es möglich, dass bei einem Katastrophenfall einige Festplattenoperationen nicht auf die Remote-Site geschrieben wurden. Es kann daher ein Risiko für die Datenkonsistenz bestehen, das im Rahmen der Risikoanalyse des Notfallwiederherstellungsplans berücksichtigt werden sollte.*
- *Die Replikation des Speichers im Blockmodus erfolgt für virtuelle Maschinen und Anwendungen transparent,*
- *Es ist daher wichtig, Szenarien der anwendungsspezifischen Replikation oder gegebenenfalls der Replikation virtueller Maschinen zu bevorzugen,*
- *Rechen- und Speicherkapazität können auf der Wiederherstellungsseite reduziert werden, um Kosten zu optimieren, sofern eine verschlechterte Situation während der Ausführung des Notfallwiederherstellungsplans akzeptabel ist.*














## Virtualisierung VMware

Das VMware-Cloud-Temple-Virtualisierungsangebot, das SecNumCloud-zertifiziert ist, basiert auf der Technologie __VMware Vsphere__.

Die Plattform wird automatisch von Cloud Temple verwaltet (Sicherungsbetrieb, Betriebsführung etc.).
Sie kann über die grafische Benutzeroberfläche der Shiva-Konsole oder über die zugehörigen APIs gesteuert werden.

*__Hinweis__* : *Aus Sicherheitsgründen, die mit der SecNumCloud-Zertifizierung zusammenhängen,
__ist es dem Auftraggeber nicht möglich, direkt auf die VMware-Virtualisierungsplattform zuzugreifen__ (kein direkter Zugriff auf das vCenter insbesondere).
Tatsächlich erfordert die SecNumCloud-Zertifizierung __eine vollständige Trennung__ zwischen den Verwaltungsoberflächen der technischen Ressourcen und der Benutzeroberfläche des Auftraggebers (der Shiva-Konsole).*

- Die implementierten Produkte sind VMware ESXi, VMware Vcenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots nutzt nicht die VMware NSX-Technologie, sondern wird hardwaremäßig durch die Juniper-Technologie und das VPLS-Protokoll gesteuert.*
- *Der Speicher verwendet nicht die VMware vSan-Technologie, sondern ausschließlich 32G Fibre Channel IBM SANs.*
- *Es wird keine Form von versteckter Optimierung implementiert (Kompression, Deduplikation, ...).*

### Definition eines Clusters von Computing-Blades ('Cpool')

Der __'Cpool'__ ist eine Gruppe von VMware ESXi-Hypervisoren, auch bekannt als *'ESX-Cluster'*.

Die Hosts in einem __'Cpool'__ gehören alle __zum selben Mandanten und zur selben Verfügbarkeitszone__ (AZ). Sie müssen notwendigerweise derselben Klasse angehören:
__es ist nicht möglich, verschiedene Modelle von Computing-Blades innerhalb eines Clusters zu mischen__.

Alle Computing-Blades werden mit dem maximal verfügbaren physischen Speicher geliefert, eine RAM-Nutzungseinschränkung wird jedoch softwaremäßig auf Clusterebene angewendet, um sicherzustellen, dass sie der berechneten RAM-Menge entspricht.

Standardmäßig hat jedes Blade 128 GB aktivierten Speicher im __'Cpool'__.

Ein __'Cpool'__ kann maximal 32 Hypervisoren enthalten. Über diese Grenze hinaus muss ein zweiter Cluster erstellt werden.

Der Speicher kann zwischen den __'Cpool'__ geteilt werden.

### Speicherzuteilung für einen 'Cpool'

Die RAM-Reservierung ist clusterweise konfigurierbar. Sie können die RAM-Menge reduzieren oder erhöhen, um Ihren Bedürfnissen auf Clusterebene zu entsprechen.

__Achten Sie darauf, eine durchschnittliche Speichernutzung von 85 % pro Computing-Blade nicht zu überschreiten__.
Die VMware-Technologie verwendet eine Komprimierungsoptimierungsmethode, die Ihre Arbeitslasten stark beeinträchtigen und die Diagnose erschweren kann.
Ebenso zwingt ein zu hoher Speicherdruck auf Ihren Computing-Blades den Hypervisor, einen Teil seines Speichers auf die Festplatte auszulagern, um den Bedürfnissen virtueller Maschinen gerecht zu werden.

Dieser Fall, der als __'Ballooning'__ bezeichnet wird, beeinträchtigt die Gesamtleistung der virtuellen Maschinen im betroffenen Speicher (Datenspeicher) erheblich.
__Die Diagnose ist in diesem Kontext schwierig__, da Ihre Metrik Auswirkungen auf die CPU und nicht auf den Speicher oder den Speicherplatz feststellen wird.
Beachten Sie auch, dass der Hypervisor beim Start einer virtuellen Maschine als erstes __eine Speicherswapdatei__ (.vswap) auf
die Festplatte erstellt, die der Speichergröße der betreffenden virtuellen Maschine entspricht. Sie müssen dies __bei der Dimensionierung Ihres Speichers berücksichtigen__.

Jedes Computing-Blade wird softwaremäßig mit 128 GB aktiviertem Speicher im __'Cpool'__ geliefert, verfügt jedoch physisch über den gesamten zuweisbaren Speicher.

Zum Beispiel, für einen Cluster mit drei Hosts vom Typ ```vmware:standard:v2```, beträgt die RAM-Reservierung bei der Aktivierung des __'Cpool'__ 3 x 128 GB = 384 GB RAM.
Sie können sie maximal auf 3 x 384 GB = 1152 GB Speicher erweitern.

    Minimalspeicher eines 'Cpool' = Anzahl der Hosts X 128 GB Speicher
    Maximalspeicher eines 'Cpool' = Anzahl der Hosts X die physische Speichergröße des Computing-Blades

### Kataloge der virtuellen Maschinen von Cloud Temple

Cloud Temple bietet Ihnen einen Katalog von `Templates`, der regelmäßig von unseren Teams erweitert und aktualisiert wird.
Er umfasst derzeit mehrere Dutzend `Templates` und Bilder, die auf Ihren virtuellen Maschinen bereitgestellt werden können.

### Aktualisierung der Hypervisoren
Cloud Temple stellt regelmäßig Builds für die Hypervisoren zur Verfügung, um die Anwendung von Sicherheitspatches zu gewährleisten. 
Die Aktualisierung der Hypervisoren bleibt jedoch in Ihrer Verantwortung, da wir keine Sicht auf Ihre geschäftlichen Anforderungen haben.

Der Aktualisierungsprozess ist vollständig automatisiert. Um eine Kontinuität des Dienstes zu gewährleisten, sind mindestens zwei Hypervisoren pro Cluster während der Aktualisierung erforderlich. Stellen Sie sicher, dass Sie über die erforderlichen Berechtigungen verfügen, um diese Aktionen durchzuführen.


### Verwaltung der Affinität Ihrer virtuellen Maschinen

Die __Affinitäts- und Anti-Affinitätsregeln__ ermöglichen es Ihnen, den Standort der virtuellen Maschinen auf Ihren Hypervisoren zu kontrollieren.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu verwalten.
Beispielsweise können sie helfen, die Arbeitsbelastung zwischen den Servern auszugleichen oder ressourcenintensive Arbeitslasten zu isolieren.
In einem __'Cpool'__ von VMware werden diese Regeln häufig verwendet, um das Verhalten der virtuellen Maschinen mit vMotion zu verwalten.
vMotion ermöglicht es, virtuelle Maschinen ohne Dienstunterbrechung von einem Host auf einen anderen zu verschieben.

Sie können Regeln festlegen zur Verwaltung der Regeln:

- __Affinitätsregeln__ : Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden verwendet, um die Leistung zu verbessern, indem virtuelle Maschinen, die häufig miteinander kommunizieren,
auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind nützlich in Szenarien,
in denen die Leistung entscheidend ist, wie bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern erfordern.

- __Anti-Affinitätsregeln__ : Umgekehrt stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht auf demselben physischen Host ausgeführt werden.
Sie sind wichtig für die Verfügbarkeit und Resilienz, beispielsweise,
um zu verhindern, dass alle kritischen Maschinen bei einem Ausfall eines einzelnen Servers betroffen sind.
Anti-Affinitätsregeln sind entscheidend für Anwendungen, die eine hohe Verfügbarkeit benötigen,
wie in Produktionsumgebungen, in denen Ausfalltoleranz Priorität hat.
Beispielsweise möchten Sie nicht, dass Ihre beiden Active Directories auf demselben Hypervisor liegen.

Beim Erstellen einer Regel definieren Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel,
ihren Aktivierungsstatus (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln betreffen die virtuellen Maschinen untereinander (keine Regeln zwischen Hypervisoren und virtuellen Maschinen).*


### Asynchrone Replikation Ihrer virtuellen Maschinen in der VMware-Umgebung

Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, der die Schreibvorgänge in regelmäßigen Abständen vom Quell-Hypervisor auf die Standby-Site überträgt.

Nach einer anfänglichen Echtzeit-Kopie des gesamten aktiven Speichers auf die Standby-Site werden nur die Schreibvorgänge in regelmäßigen Abständen auf die schlafende Site übertragen.
Dieses Intervall hängt vom Schreibvolumen ab (stündlich bis täglich).

Die Replikation der virtuellen Maschinen basiert auf dem Snapshot-Mechanismus des Hypervisors. Aus diesem Grund
weist diese Lösung die gleichen Nachteile auf, insbesondere die Anfälligkeit für das Schreibvolumen der virtuellen Maschine,
da der Snapshot-Prozess ein rekursiver Mechanismus zum Abschluss des Snapshots ist.

Das typische Beispiel einer Maschine, die den Mechanismus der virtuellen Maschinenreplikation nicht unterstützt, ist ein 
FTP-Server, der Echtzeitstreams von Überwachungskameras empfängt. __Die Maschine schreibt ständig und wird nicht in der Lage sein,
einen Snapshot abzuschließen, ohne das Betriebssystem für eine signifikante Zeitperiode anzuhalten (mehrere Dutzend Minuten)__.
Wenn der Hypervisor nicht in der Lage ist, den Snapshot abzuschließen, wird genau dies geschehen,
ohne die Möglichkeit einzugreifen, außer die virtuelle Maschine zu beschädigen.
| SLA             | Description                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H à 24H | Im Falle eines Schadens am Primärrechenzentrum ist die maximal verlorene Datenmenge die der letzten Schreibvorgänge, die auf die Standby-Site übertragen wurden. |
| RTO  < 15mn     | Betrieb des virtuellen Geräts, das auf der entfernten Site gestoppt wurde                                                                                 |


Im Bedarfsfall oder bei einem Defekt auf einer Maschine der Hauptseite wird die Spiegelmaschine auf der Standby-Site aktiviert.
Die Wiederaufnahme der Aktivität erfordert, dass auf der Standby-Site Berechnungen und RAM im Standby-Modus reserviert werden. Es
ist notwendig, auf der passiven Site den gleichen Speicherplatz wie auf der aktiven Site zu haben.


| Referenz                         | Einheit | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Hinweis__ : Die Berechnung des minimalen RPO muss basierend auf der Änderungsrate der virtuellen Maschine definiert werden.*












## Sicherung von virtuellen Maschinen
Cloud Temple bietet __eine native und nicht deaktivierbare Kreuzsicherungsarchitektur__ (sie ist im französischen Secnumcloud-Qualifikationsverfahren obligatorisch).

Die Backups werden in einer Verfügbarkeitszone und in einem anderen physischen Rechenzentrum als das, das die virtuelle Maschine hostet, gespeichert.

Dies ermöglicht den Schutz im Falle eines größeren Defekts im Produktionsrechenzentrum und die Wiederherstellung in einem sekundären Rechenzentrum (z.B. bei einem Brand).

Diese Lösung umfasst:

- Das heiße Offsite-Backup aller Festplatten,
- Die Präsentation und das sofortige Starten einer virtuellen Maschine von der Massenspeicherinfrastruktur und das Wiederladen auf die Produktions-SANs,
- Die teilweise Wiederherstellung von Dateien aus dem Backup,
- Eine begrenzte Aufbewahrung, die nur durch die Zuweisung von Massenspeicherplatz begrenzt ist.

Diese Backup-Infrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, einer agentenlosen Architektur, die einfach zu bedienen ist und die Automatisierung von Backup-Prozessen sowie eine Optimierung des Massenspeicherraums ermöglicht.

Die Backup- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab.
Die Backup-Politik kann über [die Cloud Temple Console](../console/console.md) für jede virtuelle Maschine konfiguriert werden.

*__Hinweis :__*

*__Bestimmte virtuelle Maschinen sind nicht mit dieser Backup-Technologie kompatibel__, die die Snapshot-Mechanismen des Hypervisors verwendet.
Typischerweise sind dies Maschinen mit konstanten Schreibladen auf die Festplatte. Es ist dem Hypervisor nicht möglich, den Snapshot abzuschließen, was
dazu führt, dass die virtuelle Maschine eingefroren werden muss, um den Abschluss der Operation zu ermöglichen. Dieses Einfrieren kann mehrere Stunden dauern und kann nicht gestoppt werden.*

*Die Lösung besteht darin, die Festplatte, die permanenten Schreibvorgängen ausgesetzt ist, auszuschließen und die Daten mit einer anderen Methode zu sichern.*

| Referenz                                               | Einheit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Zugriff auf den IBM Spectrum Protect Plus-Dienst | 1 VM  | csp:(region):iaas:backup:vm:v1 |


#### Erstellen einer Backup-Richtlinie
Um eine neue Backup-Richtlinie hinzuzufügen, muss ein Antrag beim Support gestellt werden. Der Support ist über das Symbol der Rettungsboje oben rechts im Fenster zugänglich.

Die Erstellung einer neuen Backup-Richtlinie erfolgt durch __einen Serviceantrag__, der Folgendes anzeigt:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit seiner E-Mail-Adresse und Telefonnummer zur abschließenden Konfiguration
    Der Name des Mieters
    Der Name der Backup-Richtlinie
    Die Eigenschaften (x Tage, y Wochen, z Monate, ...)