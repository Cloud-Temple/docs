---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__ von Cloud Temple wurde entwickelt, um den kritischen Anforderungen an Geschäftskontinuität und Disaster Recovery gerecht zu werden, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungswesen. Basierend auf modernsten Technologien gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Compute : __CISCO UCS__.
- Storage : __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Block-Speicher.
- Netzwerk : __JUNIPER__.
- Virtualisierung : __VMware__, bietet eine zuverlässige und bewährte Grundlage zur Verwaltung Ihrer Cloud-Umgebungen.
- Backup: __IBM Spectrum Protect Plus__, für die Orchestrierung und Speicherung von Backups.

Diese Architektur basiert auf dem __VersaStack__-Modell, einer Partnerschaft zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den führenden Softwareanbietern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl sie vollständig durch APIs und einen Terraform-Provider automatisiert ist, bietet das IaaS-Produkt von Cloud Temple eine einzigartige Infrastruktur:

- __Dedizierte Ressourcen__ : Compute-Blades, Speichervolumes und Software-Stacks (Virtualisierung, Sicherung, Firewalling usw.) werden niemals zwischen Kunden geteilt.
- __Maximale Planbarkeit__ : Sie haben die Kontrolle über die Virtualisierungsraten, die IOPS-Belastung des Speichers und profitieren von einer klaren, monatlichen verbrauchsabhängigen Abrechnung.

Die Plattform ist von der [ANSSI](https://www.ssi.gouv.fr/) als __SecNumCloud__ zertifiziert, was ein hohes Maß an Automatisierung und Sicherheit garantiert.

## Hauptfunktionen

- Dedizierte und On-Demand-Rechenressourcen (CPU, RAM).
- On-Demand-Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Cross-Backups mit konfigurierbarer Aufbewahrungsfrist.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Console](../console/console.md) oder im Infrastructure-as-Code-Modell über APIs und den Terraform-Provider.

## Vorteile

| Vorteil             | Beschreibung                                                                                                                                   |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                          |
| Sicherheit          | Hochsichere Plattform, qualifiziert nach __SecNumCloud__, __HDS__ (Hosting von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__. |  
| Hohe Verfügbarkeit  | Verfügbarkeitsgrad der Plattform von 99,99 %, monatlich gemessen, inklusive Wartungsfenster.                                                |
| Resilienz           | Umsetzung von Plänen zur Geschäftskontinuität oder zum Business Continuity Management entsprechend den Anforderungen.                       |
| Automatisierung     | Vollständig automatisierte Plattform, konzipiert für die Integration in ein Programm zur digitalen Transformation.                           |
| On demand           | Ressourcen bedarfsgerecht verfügbar.                                                                                                          |

## Regionen und Verfügbarkeitszonen

Das VMware IaaS-Produkt wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](../additional_content/concepts_az.md) ist Teil einer [Region](../additional_content/concepts_regional.md).

Diese Bereitstellungsart ermöglicht die Auswahl des Standorts der Cluster und deren Aufteilung auf verschiedene Verfügbarkeitszonen (AZ).
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Disaster-Recovery-Plans (DRP) im Falle eines Vorfalls.

---

## Compute

Die von Cloud Temple bereitgestellten Compute-Blades sind vom Typ __CISCO UCS B200__ oder __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple (firmware, version d'os, ...) über die Cloud-Temple-Konsole verwaltet.

Im Katalog sind mehrere Kategorien von Compute-Blades verfügbar, um Ihre Workloads zu unterstützen (Virtualisation, Conteneurisation, ...).
Diese weisen unterschiedliche Merkmale und Leistungswerte auf, um Ihren Anforderungen bestmöglich gerecht zu werden. Der Katalog der Compute-Blades wird regelmäßig aktualisiert.

Im Zusammenhang mit der Nutzung eines Virtualisierungsangebots besteht ein Hypervisor-Cluster ausschließlich aus Compute-Blades desselben Typs (il n'est pas possible de mixer les lames de différents types dans un meme cluster).

| Referenz            | RAM  __(1)__ | Taktfrequenz __(2)__                      | Anzahl Kerne / Threads     | Konnektivität __(3)__ | GPU __(4)__            | SKU für das VMware-Angebot  |
| ------------------- | ------------ | ----------------------------------------- | -------------------------- | --------------------- | ---------------------- | --------------------------- |
| ECO Compute-Blade v3| 384 GB       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 Threads            | 2 X 10 Gbit/s         |                        | csp:fr1:iaas:vmware:eco:v3  |
| STANDARD Compute-Blade v3 | 384 GB | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s         |                        | csp:fr1:iaas:vmware:standard:v3 |
| ADVANCE Compute-Blade v3 | 768 GB   | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 Threads            | 2 X 25 Gbit/s         |                        | csp:fr1:iaas:vmware:advance:v3 |
| PERFORMANCE 1 Compute-Blade v3 | 384 GB | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 Threads | 2 X 25 Gbit/s | | csp:fr1:iaas:vmware:perf1:v3 |
| PERFORMANCE 2 Compute-Blade v3 | 768 GB | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 Threads            | 2 X 25 Gbit/s         |                        | csp:fr1:iaas:vmware:perf2:v3 |
| PERFORMANCE 3 Compute-Blade v3 | 1536 GB | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 Threads           | 2 X 25 Gbit/s         |                        | csp:fr1:iaas:vmware:perf3:v3 |
| PERFORMANCE 4 Compute-Blade v3 | 512 GB | 2.50/4.1 GHz (Intel 6426Y ou equivalent)  | 32 / 64 Threads            | 2 X 25 Gbit/s         | 2 x NVIDIA L40S 48 GB  | csp:fr1:iaas:vmware:perf4:v3 |

__Hinweise__:

- __(1)__ Die gelieferte Speichermenge entspricht dem physisch auf den Blades verfügbaren Speicher. Die physische Speichermenge eines Blades kann nicht geändert werden.

- __(2)__ Mindest-Basistakt / Turbotakt, angegeben in GHz. Standardmäßig sind die Prozessoren auf maximale Leistung im BIOS konfiguriert.

- __(3)__ Die physische Konnektivität wird für den Netzwerk- und Block-Speicherzugriff gemeinsam genutzt, da die CISCO-Plattform konvergent ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot unterliegt ständigen Änderungen. Stand 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S-GPUs. Standardmäßig wird das PERF4-Blade mit 2 L40S-Karten à 48 GB RAM ausgeliefert. Kontaktieren Sie bei Bedarf den Support für weitere Details.

Die Verfügbarkeit des Compute-Angebots beträgt 99,99 %, monatlich berechnet, inkl. Wartungsfenster. Ein Anspruch bei SLA-Verletzungen setzt die Erstellung eines Incident-Tickets voraus. Sie müssen zudem mindestens zwei Hosts pro Cluster betreiben und die Funktion __High Availability__ (HA) aktivieren.
Diese Funktion ermöglicht es Ihrer Architektur, virtuelle Maschinen automatisch auf dem zweiten Hypervisor neu zu starten.
Sollte eine Verfügbarkeitszone nur einen Hypervisor enthalten, ist ein automatischer Neustart nicht möglich.

## Netzwerk

Der Netzwerkdienst auf der IaaS-Plattform von Cloud Temple basiert auf einer Netzwerkinfrastruktur auf Basis der VPLS-Technologie, die eine flexible und leistungsstarke Segmentierung bietet, um den Anforderungen der Kunden an Konnektivität und Netzwerktrennung gerecht zu werden.

### VLANs der Ebene 2

Die im IaaS-Produkt bereitgestellten VLANs sind vom Typ __Ebene 2__ und bieten eine vollständige Netzwerkisolation sowie eine anpassbare Konfiguration nach Bedarf.

#### Hauptkonzepte

- __Freigabe zwischen Clustern und Verfügbarkeitszonen (AZ)__ :
  - VLANs können zwischen den verschiedenen AZs und den verschiedenen Clustern desselben Tenants freigegeben werden.
- __Tenant-übergreifende Propagierung__ :
  - VLANs können zwischen mehreren Tenants derselben Organisation propagiert werden, um die interne Kommunikation zu erleichtern.

---

### Netzwerkleistung

Die Netzwerkinfrastruktur gewährleistet eine niedrige Latenz für optimale Leistung:

- __Intra-AZ-Latenz__ : Unter __3 ms__.
- __Inter-AZ-Latenz__ : Unter __5 ms__.

---

### Wichtige Punkte

1. __Flexibilität__ : VLANs können so konfiguriert werden, dass sie sich an Multi-Cluster- und Multi-Tenant-Umgebungen anpassen.
2. __Hohe Leistung__ : Eine minimale Latenz gewährleistet eine schnelle und effiziente Kommunikation zwischen Verfügbarkeitszonen.
3. __Isolation und Sicherheit__ : VLANs der Layer-2-Ebene bieten eine strenge Netzwerksegmentierung zum Schutz von Daten und Datenverkehr.

---

## Blockspeicher

Cloud Temple bietet mehrere Speicherklassen an, die auf der [IBM FlashSystem](https://www.ibm.com/flashsystem/)
und [IBM SVC](https://www.ibm.com/products/san-volume-controller)-Technologie basieren.

Die __IBM SVC__-Technologie ermöglicht die Bereitstellung des für die Umgebungen unserer Kunden erforderlichen Leistungsniveaus dank des großen
im Controller integrierten Speichercaches und der Möglichkeit, die gesamten IOPS
eines Servers auf mehrere SANs zu verteilen.

Sie wird zudem eingesetzt, um die Replikation Ihrer blockbasierten LUNs zwischen
den Verfügbarkeitszonen zu ermöglichen oder Wartungsarbeiten an den Storage-Arrays zu erleichtern.

Bei dem Speicher handelt es sich hauptsächlich um NVMe-Flash-Speicher, der für professionelle Workloads ausgelegt ist.
Die Festplatten werden von den Storage-Arrays im [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties)-Modus betrieben.

### Sicherheit und Verschlüsselung der Blockspeicherung

Um die Vertraulichkeit Ihrer Daten im Ruhezustand zu gewährleisten, integriert unsere gesamte Blockspeicher-Infrastruktur eine robuste Hardware-Verschlüsselung.

- __Verschlüsselungstyp__ : Die Daten werden direkt auf den Festplatten (`Data At Rest`) unter Verwendung des __XTS-AES 256__-Algorithmus verschlüsselt.
- __Konformität__ : Diese Verschlüsselungsmethode entspricht dem __FIPS 140-2__-Standard und gewährleistet ein hohes, validiertes Sicherheitsniveau.
- __Funktionsweise__ : Die Verschlüsselung erfolgt beim Schreiben der Daten auf das physische Speichermedium.

:::warning[Aufmerksamkeit bei der Replikation]
Es ist wichtig zu beachten, dass diese Verschlüsselung die auf den Festplatten gespeicherten Daten schützt. Sie ist nicht „on-the-fly“ aktiv, was bedeutet, dass die Daten während der Speicherreplikationsvorgänge zwischen den Verfügbarkeitszonen nicht verschlüsselt werden. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

Die Speicherkategorie __'Mass Storage'__ bietet mechanische Festplatten für Archivierungszwecke im Hinblick auf wirtschaftliche Effizienz. Mehrere Leistungsniveaus sind verfügbar :

| Referenz                          | Einheit | Maximales IOPS-Limit / LUN | Maximale Bandbreite / LUN | SKU                                          |
|-----------------------------------|---------|----------------------------|---------------------------|----------------------------------------------|
| FLASH - Essential - 500 IOPS/To   | 1 Gio   | 10 000 IOPS                | 512 Mo/s                  | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio   | 30 000 IOPS                | 1024 Mo/s                 | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio   | 30 000 IOPS                | 1024 Mo/s                 | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio   | 30 000 IOPS                | 1024 Mo/s                 | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio   | 30 000 IOPS                | 1024 Mo/s                 | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivierung       | 1 Tio   | Nicht garantiert           | Nicht garantiert          | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__ :*

- *Die tatsächliche Leistung einer LUN (Datastore) steigt linear in Abhängigkeit vom zugewiesenen Volumen (entsprechend ihrem IOPS/To-Verhältnis), __bis zum oben definierten absoluten Hardware-Limit__.*

> *Beispielsweise profitiert ein Volumen von 0,5 To in der Klasse 'Standard' von 750 IOPS.*
> *Ein Volumen von 10 Tio in der Klasse 'Ultra' (theoretisch 150 000 IOPS) wird hingegen durch die absolute physikalische Grenze begrenzt und auf 30 000 IOPS sowie 1024 Mo/s gedrosselt.*

- *Diese Einschränkungen (IOPS und Bandbreite) gelten auf Volumenebene, also auf Datastore-Ebene für eine VMware-Umgebung,*
- *Die Speicherverfügbarkeit beträgt 99,99 % (monatlich gemessen, inklusive Wartungsfenster),*
- *Es gibt keine Einschränkungen oder Quotas für Lese- oder Schreibvorgänge,*
- *Es erfolgt keine IOPS-basierte Abrechnung,*
- *Es gibt keine Leistungsvereinbarung für die Klasse __'Mass Storage'__,*
- *Die Mindestgröße einer Speich-LUN beträgt 500 Gio,*
- *Bei Verwendung eines Speicherreplikationsmechanismus müssen die Leistungen in beiden Verfügbarkeitszonen identisch sein,*
- *Es werden keine „intelligenten“ Optimierungsmechanismen wie Kompression oder Deduplizierung eingesetzt: Wenn Sie 10 Tio Speicher reservieren, steht Ihnen physisch 10 Tio nutzbarer Speicher auf den IBM-Maschinen zur Verfügung.*
- *Die Speich-LUNs sind der Client-Umgebung vorbehalten.*

### Verwendung im Rahmen des VMware-Compute-Angebots

Bei der Nutzung von Block Storage als Datastore im VMware-Compute-Angebot von Cloud Temple __müssen Sie mehrere wichtige Aspekte berücksichtigen__ :

1. __Swap-Datei (.VSWP) beim Starten virtueller Maschinen__ : Wenn eine virtuelle Maschine startet, erstellt sie auf der Festplatte eine .VSWP-Datei in der Größe ihres Arbeitsspeichers. Daher müssen Sie für den Start Ihrer virtuellen Maschinen stets freien Speicherplatz in Ihrem Datastore verfügbar haben, der der Summe der Arbeitsspeichergrößen Ihrer virtuellen Maschinen entspricht. Wenn Ihr Datastore beispielsweise über 1 TiB Block Storage verfügt und Sie 10 virtuelle Maschinen mit jeweils 64 GiB Arbeitsspeicher starten möchten, werden 640 GiB Festplattenspeicher benötigt. Ohne diesen Speicherplatz wird der Start der Maschinen durch die verfügbare Kapazität zur Erstellung der Swap-Dateien begrenzt.

2. __Freier Speicherplatz für Backup-Snapshots__ : Der Backup-Dienst verwendet Snapshots. Daher müssen Sie stets ausreichend freien Speicherplatz vorhalten, um die Erstellung eines Snapshots während der Sicherung einer virtuellen Maschine zu ermöglichen. Die Größe des Snapshots hängt vom Schreibvolumen der virtuellen Maschine und der für die Sicherung benötigten Zeit ab. In der Regel wird empfohlen, für diesen Vorgang mindestens 10 % freien Speicherplatz vorzuhalten.

3. __Verwaltung dynamischer Festplatten__ : Gehen Sie vorsichtig mit der Verwendung dynamischer Festplatten um. Wenn Sie ihr Wachstum nicht im Griff haben, kann ein Mangel an physischem Speicherplatz im besten Fall zum Einfrieren (Freeze) der virtuellen Maschine führen, im schlimmsten Fall jedoch zu einem Absturz mit Datenkorruption. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datastores genau zu überwachen, wenn Sie diese Art von Festplatten verwenden.

Ein proaktives Management des Festplattenspeichers ist unerlässlich, um den einwandfreien Betrieb Ihrer virtuellen Maschinen und die Zuverlässigkeit der Backups zu gewährleisten. Stellen Sie sicher, dass stets ausreichend Speicherplatz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten verfügbar ist.

## Backup-Speicher

Der für die Sicherung Ihrer virtuellen Maschinen vorgesehene Speicher wird von der Plattform innerhalb des bestellten Quotas automatisch bereitgestellt.

| Referenz                | Einheit | SKU                                      |
|-------------------------|---------|------------------------------------------|
| MASS STORAGE - Archivierung | 1 TiB | csp:(region):iaas:storage:bloc:backup:v1 |

### Replikation des Blockspeichers

#### Prinzipien

Um die Umsetzung Ihrer Wiederherstellungspläne zu ermöglichen, wenn eine Geschäftskontinuität mit Anwendungsmechanismen nicht möglich ist und die Replikation virtueller Maschinen
nicht geeignet ist, bietet Cloud Temple __Mechanismen zur blockweisen Speicherreplikation zwischen den Verfügbarkeitszonen einer Region an__.

Diese Replikationsmechanismen werden auf die Storage-LUNs Ihrer Umgebungen angewendet, als Ergänzung zu den Backups.
Die Entscheidung für die Verwendung eines Replikationsmechanismus in einer Umgebung __hängt von zahlreichen Faktoren ab, darunter deren Kritikalität, der tolerierbare Datenverlust sowie die angestrebte Leistung__ der Anwendung.

Cloud Temple bietet zwei Arten von Mechanismen an, die in einer aktiv/passiv-Konfiguration bereitgestellt werden:

- Die __asynchrone__ Replikation (ou __'Global Mirror'__): *Die Funktion __'Global Mirror'__ stellt einen asynchronen Kopierprozess bereit.
Wenn ein Host auf das primäre Volume schreibt, wird die Bestätigung des E/A-Abschlusses empfangen, bevor der Schreibvorgang
für die Kopie auf das sekundäre Volume abgeschlossen ist. Wenn ein Failover initiiert wird, muss die Anwendung
alle Aktualisierungen, die auf dem sekundären Volume noch nicht bestätigt wurden, wiederherstellen und anwenden.
Wenn die E/A-Vorgänge auf dem primären Volume für kurze Zeit pausiert werden,
kann das sekundäre Volume eine exakte Kopie des primären Volumes sein. Diese Funktion ist mit einem Prozess
der kontinuierlichen Sicherung vergleichbar, bei dem die neuesten Aktualisierungen stets fehlen.
Wenn Sie Global Mirror für Disaster-Recovery-Zwecke verwenden, müssen Sie überlegen, wie Sie mit diesen fehlenden Aktualisierungen umgehen möchten.*

- Die __synchrone__ Replikation (ou __'Metro Mirror'__): *Die Funktion __'Metro Mirror'__ ist eine Art der Fernkopie, die eine synchrone Kopie
der Daten von einem primären Volume auf ein sekundäres Volume erstellt. Bei synchronen Kopien schreiben Host-Anwendungen auf das primäre Volume, erhalten jedoch keine Bestätigung
dass der Schreibvorgang abgeschlossen ist, solange die Daten nicht auf das sekundäre Volume geschrieben wurden. Dies gewährleistet, dass beide Volumes identische Daten enthalten, wenn
der Kopiervorgang abgeschlossen ist. Nach Abschluss des initialen Kopiervorgangs hält die Funktion Metro Mirror
dauerhaft eine vollständig synchronisierte Kopie der Quelldaten auf dem Zielstandort aufrecht. __Seit dem 1. Januar 2024 wird die Funktion 'Metro Mirror' nicht mehr vertrieben.__*

Daraufhin wird ein sogenannter "aktiver" oder "primärer" Standort sowie ein "passiver" oder "Standby"-Standort definiert.
Der Wiederherstellungsplan wird im Katastrophenfall oder im Rahmen einer PRA-Testanforderung aktiviert.
Der passive Standort übernimmt anschließend die Aufgabe des aktiven Standorts.

#### Asynchrone Replikation

Wenn Ihre Workloads kurze Wiederherstellungszeiten erfordern und die Verwendung von Mechanismen wie Anwendungsreplikation oder Replikation virtueller Maschinen nicht akzeptabel oder geeignet ist,
kann eine SAN-Speicher-LUN zwischen zwei Verfügbarkeitszonen derselben Region repliziert werden.

Dieses Produkt ermöglicht ein __RPO von 15 Min.__ und ein __RTO unter 4 h__. Es ermöglicht einen deutlich schnelleren Neustart als
die Implementierung einer Sicherungswiederherstellung.

Bei einem Speicher-Volumen mit asynchroner Replikation (__Global Mirror__) arbeiten die SAN-Virtualisierungscontroller beider
Verfügbarkeitszonen zusammen, um Schreibvorgänge auf beiden Standorten durchzuführen.
Der Master-Standort wartet nicht auf die Schreibbestätigung des Slave-Standorts.

Die Schritte eines Schreibvorgangs sind wie folgt:

1. Ein Hypervisor möchte __einen Schreibvorgang auf einem Global-Mirror-Volumen__ durchführen: Er sendet seine Anforderung an den SAN-Controller seiner Verfügbarkeitszone,
2. Der lokale SAN-Controller fordert den SAN-Controller der Remote-Zone auf, den Schreibvorgang durchzuführen,
3. Der lokale SAN-Controller wartet nicht auf die Bestätigung des Remote-SAN und führt die Schreiboperation lokal aus,
4. Er gibt die __Bestätigung__ an den anfordernden Hypervisor zurück,
5. __Die Hypervisor des Remote-Standorts greifen nicht direkt auf die Global-Mirror-LUN zu__ : Eine Dienstanforderung ist erforderlich.

| SLA       | Beschreibung                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15 Min. | Im Falle eines Ausfalls des primären Rechenzentrums entspricht die maximal verlorene Datenmenge maximal den Schreibvorgängen der letzten 15 Minuten |
| RTO < 4 h | Im Falle eines Ausfalls des primären Rechenzentrums ist die Wiederaufnahme des Betriebs je nach Komplexität der Umgebungen innerhalb von 4 Stunden garantiert.          |

Im Falle der Aktivierung des DR-Plans führt das Cloud Temple-Team eine Präsentation der LUN __'Global Mirror'__ für die Remote-Hypervisor durch, damit diese auf die Daten zugreifen können. Die Implementierung dieser Lösung erfordert daher, dass auf dem 'Standby'-Standort Rechenressourcen und RAM für den Wiederaufnahmebetrieb im Schadensfall reserviert wurden.

Die Nutzung dieser Technologie erfordert ebenfalls eine Verdopplung des Speicherplatzes: Es muss exakt derselbe Speicherplatz auf dem Remote-Standort wie auf dem lokalen Standort verfügbar sein.

Die Nutzung dieses Mechanismus kann die Anwendungsleistung um bis zu 10 % beeinträchtigen. __Nur die Speicherklassen 500 Iops/To, 1500 Iops/To und 3000 Iops/To sind kompatibel.__

| Referenz                          | Einheit  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| SPEICHER - Global Replication SAN  | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Hinweis__* :

- *Da das Angebot asynchron ist, kann es im Schadensfall vorkommen, dass bestimmte Festplattenoperationen nicht auf den Remote-Standort geschrieben wurden. Dies kann daher ein Risiko für die Datenkonsistenz darstellen, das in der Risikoanalyse des DR-Plans berücksichtigt und gemindert wird.*
- *Die Replikation des Blockspeichers erfolgt für virtuelle Maschinen und Anwendungen transparent,*
- *In diesem Zusammenhang ist es wichtig, Szenarien mit Anwendungsreplikation oder gegebenenfalls Replikation virtueller Maschinen zu bevorzugen,*
- *Die Rechenleistung und der Arbeitsspeicher auf dem Wiederherstellungsstandort können reduziert werden, um die Kosten zu optimieren, wenn ein degradierter Betriebszustand für die Fachabteilung während der Aktivierung des DR-Plans akzeptabel ist.*

## VMware Virtualisierung

Das SecNumCloud-qualifizierte Virtualisierungsangebot von Cloud Temple basiert auf der __VMware vSphere__-Technologie.

Die Plattform wird von Cloud Temple automatisch verwaltet (maintien de condition de sécurité, maintien en condition opérationnelle, ...).
Sie kann über die grafische Benutzeroberfläche der Konsole oder über die zugehörigen APIs gesteuert werden.

*__Hinweis__* : *Aus Sicherheitsgründen im Zusammenhang mit der SecNumCloud-Qualifikation,
__kann der Auftraggeber nicht direkt auf die VMware-Virtualisierungsplattform zugreifen__ (aucun accès direct au vCenter notamment).
Die SecNumCloud-Qualifikation erfordert __eine vollständige Trennung__ zwischen den Steuerschnittstellen der technischen Assets und der Benutzeroberfläche des Auftraggebers (la Console).*

- Die eingesetzten Produkte sind VMware ESXi, VMware vCenter und VMware Replication.
- *Das Netzwerk des Virtualisierungsangebots verwendet nicht die VMware-NSX-Technologie, sondern wird hardwareseitig durch die Juniper-Technologie und das VPLS-Protokoll gesteuert.*
- *Der Speicher verwendet nicht die VMware-vSAN-Technologie, sondern ausschließlich IBM-SANs mit 32G Fiber Channel.*
- *Es wird keine Form von versteckter Optimierung implementiert (compression, deduplication, ...).*

### Definition eines Compute-Blade-Clusters ('Cpool')

Der __'Cpool'__ ist eine Gruppe von VMware ESXi-Hypervisoren, auch bekannt als *'ESX-Cluster'*.

Alle Hosts in einem __'Cpool'__ gehören __zum selben Tenant und zur selben Verfügbarkeitszone__ (AZ). Sie müssen zwingend dieselbe Klasse haben:
__es ist nicht möglich, verschiedene Compute-Blade-Modelle innerhalb desselben Clusters zu mischen__.

Da alle Compute-Blades mit dem physischen Maximum an Arbeitsspeicher ausgeliefert werden, wird softwareseitig auf Clusterebene eine RAM-Nutzungsbegrenzung angewendet, um sicherzustellen, dass sie dem abgerechneten RAM entspricht.

Standardmäßig verfügt jedes Blade über 128 GB aktivierten Arbeitsspeicher innerhalb des __'Cpool'__.

Ein __'Cpool'__ kann maximal 32 Hypervisor enthalten. Darüber hinaus muss ein zweiter Cluster erstellt werden.

Der Speicher kann zwischen den __'Cpool'__ geteilt werden.

### RAM-Zuweisung für ein 'Cpool'

Die RAM-Zuweisung ist clusterweise konfigurierbar. Sie können die RAM-Menge reduzieren oder erhöhen, um sie an Ihre Anforderungen auf Cluster-Ebene anzupassen.

__Achten Sie darauf, einen durchschnittlichen Speicherverbrauch von 85 % pro Compute-Node nicht zu überschreiten__.
Denn die VMware-Technologie verwendet eine komprimierungsähnliche Optimierungsmethode, die die Leistung Ihrer Workloads stark beeinträchtigen und die Fehlerbehebung erschweren kann.
Ebenso wird ein zu starker Speicherdruk auf Ihren Compute-Nodes den Hypervisor dazu zwingen, einen Teil des Speichers auf die Festplatte auszulagern, um den Bedarf der virtuellen Maschinen zu decken.

Dieser als __'Ballooning'__ bezeichnete Zustand beeinträchtigt die Leistung aller virtuellen Maschinen auf dem betreffenden Speicher (Datastore) erheblich.
__Die Fehlerbehebung ist in diesem Kontext erschwert__, da Ihre Monitoring-Metriken Auswirkungen auf der CPU-Ebene und nicht im Speicher- oder Speicherbereich aufzeigen werden.
Behalten Sie außerdem im Hinterkopf, dass der Hypervisor beim Starten einer virtuellen Maschine zunächst __eine Swap-Speicheldatei__ (.vswap) auf
der Festplatte in der Größe des Speichers der betreffenden virtuellen Maschine erstellt. Sie müssen dies __bei der Dimensionierung Ihres Speichers berücksichtigen__.

Jeder Compute-Node wird mit 128 GB Software-aktiviertem Speicher auf Ebene des __'Cpool'__ geliefert, verfügt jedoch physisch über den gesamten zuweisbaren Speicher.

Beispielsweise beträgt die RAM-Zuweisung bei Aktivierung des _*'Cpool'* für einen Cluster aus drei Hosts vom Typ ```vmware:standard:v2``` 3 x 128 GB = 384 GB RAM.
Dies kann maximal auf 3 x 384 GB = 1152 GB Speicher erweitert werden.

    Mindestspeicher eines 'Cpool' = Anzahl der Hosts x 128 GB Speicher
    Maximalspeicher eines 'Cpool' = Anzahl der Hosts x physische Speichermenge des Compute-Nodes

### Kataloge virtueller Maschinen von Cloud Temple

Cloud Temple stellt Ihnen einen Katalog mit `Templates` zur Verfügung, der regelmäßig von unseren Teams erweitert und aktualisiert wird.
Dieser umfasst derzeit mehrere Dutzend `Templates` und Images, die auf Ihren virtuellen Maschinen bereitgestellt werden können.

### Hypervisor-Updates

Cloud Temple stellt regelmäßig Builds für Hypervisor bereit, um die Anwendung von Sicherheitsupdates sicherzustellen.
Die Aktualisierung der Hypervisor bleibt jedoch in Ihrer Verantwortung, da wir keine Einblicke in Ihre betrieblichen Anforderungen haben.

Der Aktualisierungsprozess ist vollständig automatisiert. Um die Servicekontinuität zu gewährleisten, ist während der Aktualisierung ein Mindestbestand von zwei Hypervisor pro Cluster erforderlich. Stellen Sie sicher, dass Sie über die erforderlichen Berechtigungen verfügen, um diese Aktionen durchzuführen.

### Verwaltung der Affinität Ihrer virtuellen Maschinen

Mit __Affinitäts- und Anti-Affinitätsregeln__ können Sie den Standort Ihrer virtuellen Maschinen auf Ihren Hypervisoren steuern.
Sie können verwendet werden, um die Ressourcennutzung Ihres __'Cpool'__ zu verwalten.
Beispielsweise können sie dabei helfen, die Arbeitslast zwischen den Servern zu balancieren oder ressourcenintensive Arbeitslasten zu isolieren.
In einem __'Cpool'__ VMware werden diese Regeln häufig verwendet, um das Verhalten der virtuellen Maschinen im Zusammenhang mit vMotion zu steuern.
vMotion ermöglicht das Verschieben virtueller Maschinen von einem Host auf einen anderen ohne Dienstunterbrechung.

Über die Regelverwaltung können Sie Folgendes konfigurieren:

- __Affinitätsregeln__: Diese Regeln stellen sicher, dass bestimmte virtuelle Maschinen auf demselben physischen Host ausgeführt werden.
Sie werden zur Leistungsverbesserung eingesetzt, indem häufig kommunizierende virtuelle Maschinen auf demselben Server gehalten werden, um die Netzwerklatenz zu reduzieren. Affinitätsregeln sind in Szenarien nützlich, in denen die Leistung kritisch ist, wie beispielsweise bei Datenbanken oder Anwendungen, die eine schnelle Kommunikation zwischen den Servern erfordern.

- __Anti-Affinitätsregeln__: Im Gegensatz dazu stellen diese Regeln sicher, dass bestimmte virtuelle Maschinen nicht auf demselben physischen Host ausgeführt werden. Sie sind wichtig für Verfügbarkeit und Resilienz, beispielsweise um zu verhindern, dass kritische Maschinen im Falle eines einzelnen Serverausfalls alle betroffen sind.
Anti-Affinitätsregeln sind entscheidend für Anwendungen, die eine hohe Verfügbarkeit erfordern, wie in Produktionsumgebungen, in denen die Ausfalltoleranz Priorität hat.
Beispielsweise möchten Sie nicht, dass sich Ihre beiden Active Directory-Instanzen auf demselben Hypervisor befinden.

Bei der Erstellung einer Regel definieren Sie den Regeltyp (Affinität / Anti-Affinität), den Namen der Regel,
ihren Aktivierungszustand (__'Status'__) und die betroffenen Maschinen Ihres Hypervisor-Clusters.

*Hinweis: Die in der Konsole angebotenen Affinitäts-/Anti-Affinitätsregeln gelten für die virtuellen Maschinen untereinander (keine Regeln zwischen Hypervisoren und virtuellen Maschinen).*

### Asynchrone Replikation Ihrer virtuellen Maschinen in VMware-Umgebungen

Die asynchrone Replikation Ihrer virtuellen Maschinen ist ein Mechanismus, bei dem Schreiboperationen auf der Standby-Stelle im regelmäßigen Zeitabstand auf Ebene des Quell-Hypervisors übertragen werden.

Nach einer initialen Online-Kopie des gesamten aktiven Speichers auf die Standby-Stelle werden ausschließlich Schreiboperationen in regelmäßigen Abständen an die inaktive Stelle übertragen.
Dieses Intervall hängt vom Schreibvolumen ab (von stündlich bis alle 24 Stunden).

Die Replikation virtueller Maschinen stützt sich auf den Snapshot-Mechanismus des Hypervisors. In dieser Hinsicht,
weist diese Lösung dieselben Nachteile auf, insbesondere die Empfindlichkeit gegenüber dem Schreibvolumen der virtuellen Maschine,
da der Snapshot-Prozess ein rekursiver Mechanismus zum Abschluss eines Snapshots ist.

Das typische Beispiel für eine Maschine, die den Mechanismus der virtuellen Maschinenreplikation nicht unterstützt, ist ein
FTP-Server, der Echtzeit-Streams von Überwachungskameras empfängt. __Die Maschine schreibt ständig und wird
nicht in der Lage sein, einen Snapshot abzuschließen, ohne das Betriebssystem für einen erheblichen Zeitraum
(mehrere Dutzend Minuten)__. Wenn der Hypervisor den Snapshot nicht abschließen kann, wird er genau das tun,
ohne dass eine Intervention möglich wäre, außer durch eine Beschädigung der virtuellen Maschine.

| SLA             | Beschreibung                                                                                                                                              |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO von 1H bis 24H | Im Falle eines Ausfalls des primären Rechenzentrums entspricht die maximal verlorene Datenmenge der letzten Übertragung der Schreiboperationen auf die Standby-Stelle. |
| RTO  < 15 Min.  | Startvorgang der gestoppten virtuellen Maschine am entfernten Standort                                                                                |

Bei Bedarf oder bei einem Ausfall einer Maschine im primären Standort wird die gespiegelte Maschine auf der Standby-Stelle aktiviert.
Die Wiederaufnahme des Betriebs erfordert, dass auf der Standby-Stelle Rechenleistung und RAM im Standby vorgehalten werden. Es
muss auf dem passiven Standort derselbe Speicherplatz verfügbar sein wie auf dem aktiven Standort.

| Referenz                          | Einheit | SKU                                             |  
|-----------------------------------|---------|-------------------------------------------------|
| DRP - VMware-Replikation zwischen AZ | 1 VM  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Hinweis__ : Die Berechnung des minimalen RPO muss basierend auf der Änderungsrate der virtuellen Maschine festgelegt werden.*

## Sicherung von virtuellen Maschinen

Cloud Temple bietet __eine native und nicht deaktivierbare Cross-Sicherung-Architektur__ (diese ist für die französische secnumcloud-Zertifizierung verpflichtend).

Die Sicherungen werden in einer Verfügbarkeitszone und in einem physischen Rechenzentrum gespeichert, das sich von dem unterscheidet, das die virtuelle Maschine hostet. Sie werden mit einem symmetrischen AES-256-Bit-Schlüsselalgorithmus (Cipher-Modus `xts-plain64`) verschlüsselt, um die Vertraulichkeit der Daten zu gewährleisten.

Dies schützt vor schwerwiegenden Ausfällen im Produktionsrechenzentrum und ermöglicht die Wiederherstellung in einem sekundären Rechenzentrum (z. B. bei einem Brand).

Diese Lösung umfasst:

- Die Hot-Sicherung aller Datenträger an einem externen Standort,
- Die Bereitstellung und den sofortigen Start einer virtuellen Maschine aus der Massenspeicher-Infrastruktur sowie das Hot-Loading auf die SANs des Produktionsstandorts,
- Die partielle Wiederherstellung von Dateien aus der Sicherung,
- Eine Aufbewahrungsfrist, die ausschließlich durch die Zuweisung von Massenspeicherplatz begrenzt ist.

Diese Sicherungsinfrastruktur basiert auf der Lösung *IBM Spectrum Protect Plus*, einer agentenlosen Architektur-Lösung,
die einfach zu bedienen ist und die Automatisierung von Sicherungsprozessen sowie eine Optimierung des Massenspeicherplatzes ermöglicht.

Die Geschwindigkeiten von Sicherungen und Wiederherstellungen hängen vom Änderungsgrad der Umgebungen ab.
Die Sicherungsrichtlinie kann für jede virtuelle Maschine über [die Cloud Temple Konsole](../console/console.md) konfiguriert werden.

*__Hinweis:__*

*__Bestimmte virtuelle Maschinen sind mit dieser Sicherungstechnologie nicht kompatibel__*, die auf den Snapshot-Mechanismen des Hypervisors basiert.
Dies betrifft typischerweise Maschinen, bei denen die Schreiblast auf die Festplatte konstant ist. Der Hypervisor kann den Snapshot nicht schließen, was
ein Einfrieren der virtuellen Maschine erfordert, um den Schließvorgang abzuschließen. Dieses Einfrieren kann mehrere Stunden dauern und ist nicht abbrechbar.*

*Die Lösung besteht darin, die Festplatte, die Ziel permanenter Schreibvorgänge ist, auszuschließen und die Daten mit einer anderen Methode zu sichern.*

| Referenz                                                | Einheit | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| SICHERUNG - Zugriff auf den IBM Spectrum Protect Plus-Dienst | 1 VM  | csp:(region):iaas:backup:vm:v1 |

#### Eine Backup-Richtlinie erstellen

Um eine neue Backup-Richtlinie hinzuzufügen, muss eine Anfrage beim Support gestellt werden. Der Support ist über das Lifebuoy-Symbol in der oberen rechten Ecke des Fensters erreichbar.

Die Erstellung einer neuen Backup-Richtlinie erfolgt über __eine Serviceanfrage__, die folgende Angaben enthält:

    Der Name Ihrer Organisation
    Der Name eines Kontakts mit E-Mail-Adresse und Telefonnummer zur Fertigstellung der Konfiguration
    Der Name des Tenants
    Der Name der Backup-Richtlinie
    Die Eigenschaften (x Tage, y Wochen, z Monate, ...)

## Erweiterte Datensicherheit (HSM/KMS)

Cloud Temple bietet eine Lösung zur __erweiterten Verschlüsselung virtueller Maschinen__ auf Basis von Hardware-Sicherheitsmodulen (HSM) und einem Schlüsselverwaltungsdienst (KMS). Diese Funktion ermöglicht eine verstärkte Absicherung sensibler Daten durch ein zentrales und sicheres Management der Verschlüsselungsschlüssel, das direkt in die SecNumCloud-Umgebung integriert ist.

### Technische Architektur

Die Lösung basiert auf einer robusten Sicherheitsinfrastruktur, die aus folgenden Komponenten besteht:

- __HSM (Hardware Security Module)__ : __Thales Luna S790__-Module, die nach __FIPS 140-3 Level 3__ zertifiziert sind
- __KMS (Key Management System)__ : __Thales CipherTrust Manager__ für das zentrale Schlüsselmanagement
- __VMware-Integration__ : Kommunikation über das __KMIP__-Protokoll (Key Management Interoperability Protocol)

#### Hochverfügbarkeitsbereitstellung

Die HSM-Infrastruktur ist in __drei Verfügbarkeitszonen__ der Region FR1 bereitgestellt:

- PAR7S
- TH3S  
- AZ07

Diese Aufteilung gewährleistet eine __maximale Hochverfügbarkeit__ und __Resilienz__ des Verschlüsselungsdienstes.

### Funktionsweise und Schlüsselhierarchie

Das System verwendet eine __Hierarchie kryptografischer Schlüssel__, um die Datensicherheit zu gewährleisten:

| Ebene | Schlüsseltyp | Beschreibung | Speicherort |
|--------|-------------|-------------|--------------|
| 1 | __Root of Trust (RoT)__ | Master-Schlüssel pro KMS | HSM Luna |
| 2 | __Domain Key (DK)__ | Domänenschlüssel pro Kunde (Multi-Tenant-Isolierung) | HSM Luna |
| 3 | __Key Encryption Key (KEK)__ | Verschlüsselungsschlüssel pro VM | CipherTrust Manager |
| 4 | __Data Encryption Key (DEK)__ | Datenschlüssel pro VM | VMware ESXi |

#### Verschlüsselungsprozess

1. __Generierung__ : VMware ESXi generiert einen eindeutigen DEK für jede virtuelle Maschine
2. __Schutz__ : Der DEK wird durch die im CipherTrust Manager gespeicherte KEK verschlüsselt
3. __Absicherung__ : Die KEK wird selbst durch die HSM-Schlüsselhierarchie geschützt
4. __Speicherung__ : Der verschlüsselte DEK wird zusammen mit den Konfigurationsdateien der VM gespeichert

### Sicherheit und Compliance

#### Zertifizierungen
- __FIPS 140-3 niveau 3__ : Zertifizierung der höchsten Stufe für HSM
- __Common Criteria EAL4+__ : Erweiterte Sicherheitsbewertung
- __SecNumCloud__ : ANSSI-Qualifikation, integriert in die Cloud-Temple-Umgebung

#### Multi-Tenant-Isolation

- __Kryptographische Trennung__ : Jeder Kunde verfügt über eine isolierte KMS-Domäne
- __Dedizierte Schlüssel__ : Ein spezifischer Domain Key pro Kunde
- __Audit und Nachverfolgbarkeit__ : Vollständige Protokollierung der Aktionen pro Domäne

### Aktivierung und Nutzung

Die Verschlüsselung virtueller Maschinen wird __mit einem einzigen Klick__ in der [Konsole](../console/console.md) aktiviert.

Für ein detailliertes Vorgehen mit Screenshots lesen Sie das [Tutorial zur Verschlüsselung virtueller Maschinen](tutorials/vm_encryption.md).

#### Voraussetzungen

- __Konfigurierter Schlüsselanbieter__ : Ein HSM/KMS-Anbieter muss auf der vStack aktiviert sein
- __Virtuelle Maschine ausgeschaltet__ : Die VM muss vor der Verschlüsselung gestoppt sein
- __Keine aktive Replikation__ : Die VM darf nicht repliziert werden (inkompatibel mit Global Mirror)
- __Kein Snapshot__ : Es dürfen keine Snapshots vorhanden sein
- __Serviceabonnement__ : Der Dienst für erweiterten Schutz muss abonniert sein

*__Hinweis__ : Weitere Details zu den Voraussetzungen und dem vollständigen Verfahren finden Sie im [Leitfaden zur VM-Verschlüsselung](tutorials/vm_encryption.md).*

### Einschränkungen und Überlegungen

#### Kompatibilität

- __Global Mirror__ : Verschlüsselte virtuelle Maschinen sind __nicht kompatibel__ mit der Global Mirror-Replikation
- __Wiederherstellung__ : Backups verschlüsselter VMs behalten ihren kryptografischen Schutz bei
- __Export__ : Der Export verschlüsselter VMs erfordert spezifische Verfahren

#### Leistung

- __Minimale Auswirkungen__ : Hardwareverschlüsselung gewährleistet optimale Leistung
- __Transparenz__ : Keine Auswirkungen auf den Betrieb der Anwendungen

### Empfohlene Anwendungsfälle

Diese fortschrittliche Schutzlösung ist insbesondere geeignet für:

- __Sensible Daten__ : Persönliche Informationen, Finanzdaten, Geschäftsgeheimnisse
- __Einhaltung gesetzlicher Vorschriften__ : Anforderungen nach DSGVO, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Kritische Sektoren__ : Banken, Versicherungen, Gesundheitswesen, Verteidigung
- __Digitale Souveränität__ : Schutz vor unbefugtem Zugriff, auch im Falle einer Kompromittierung

| Referenz | Einheit | SKU |
|-----------|-------|-----|
| FORTGESCHRITTENER SCHUTZ - VM-Verschlüsselung über HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Hinweis__ :*

- *Der Dienst erfordert ein spezifisches Abonnement und ist nicht im Standard-IaaS-Produkt enthalten*
- *Das Schlüsselmanagement bleibt vollständig unter der Kontrolle von Cloud Temple in der SecNumCloud-Umgebung*
- *Die Verschlüsselungsschlüssel verlassen niemals die französische und souveräne Infrastruktur*