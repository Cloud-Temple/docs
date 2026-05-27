---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__-Angebot von Cloud Temple wurde entwickelt, um kritische Anforderungen an die Geschäftskontinuität und Notfallwiederherstellung zu erfüllen, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungen. Auf Basis modernster Technologien garantiert diese Infrastruktur eine maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple stützt sich auf international renommierte Technologiepartner:

- Rechenleistung: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Blockspeicher und __DELL ECS__ für Objektspeicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __OpenStack__, das eine zuverlässige und erprobte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen bietet.

Diese Architektur basiert auf dem __VersaStack__-Modell, einer Allianz zwischen Cisco und IBM, die eine breite Kompatibilität mit führenden Softwareherstellern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl vollständig automatisiert dank APIs und einem Terraform-Provider, bietet das IaaS-Produkt von Cloud Temple eine einzigartige Infrastruktur:

- __Dedizierte Ressourcen__ : Die Compute-Blades, Speichervolumes und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen Kunden gemeinsam genutzt.
- __Maximale Vorhersehbarkeit__ : Sie behalten die Virtualisierungsquoten, die IOPS-Belastung auf dem Speicher im Blick und profitieren von einer transparenten, monatlichen Verbrauchsabrechnung.

Die Plattform ist von der [ANSSI](https://www.ssi.gouv.fr/) als __SecNumCloud__ zertifiziert, was ein hohes Maß an Automatisierung und Sicherheit garantiert.

## Hauptfunktionen

- Dedizierte und bedarfsgerechte Rechenressourcen (CPU, RAM).
- Bedarfsgerechter Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Cross-Region-Backups mit konfigurierbarer Aufbewahrungsfrist.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Console](../console/console.md) oder im Infrastructure-as-Code-Modus dank APIs und dem Terraform-Provider.

## Vorteile

| Vorteil             | Beschreibung                                                                                                                                   |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitales Vertrauen | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                              |
| Sicherheit          | Hochsichere Plattform, zertifiziert nach __SecNumCloud__, __HDS__ (Hébergement des Données de Santé), __ISO 27001__ und __ISAE 3402 Type II__. |
| Hohe Verfügbarkeit  | Plattformverfügbarkeit von 99,99 %, monatlich gemessen, einschließlich Wartungsfenster.                                                        |
| Resilienz           | Implementierung von Betriebskontinuitäts- oder Disaster-Recovery-Plänen nach Bedarf.                                                           |
| Automatisierung     | Vollständig automatisierte Plattform, konzipiert zur Integration in ein Digitalisierungsprogramm.                                               |
| On-Demand           | Ressourcen bedarfsgerecht verfügbar.                                                                                                           |

## Regionen und Verfügbarkeitszonen

Das Produkt OpenIaaS wird in einer Verfügbarkeitszone bereitgestellt.
Eine Verfügbarkeitszone ist Teil einer Region.

Diese Bereitstellungsart ermöglicht die Auswahl des Cluster-Standorts und deren Verteilung auf verschiedene Verfügbarkeitszonen (AZ).
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Implementierung eines Notfallwiederherstellungsplans (DRP) im Störungsfall.

---

## Compute-Blade-Klassen

Die für das Bare-Metal-Angebot verfügbaren Compute Blades bieten eine Reihe von Leistungsvarianten, um verschiedenen Anforderungen gerecht zu werden:

| Referenz             | RAM  __(1)__ | Taktfrequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder äquivalent)  | 20 / 40 Threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder äquivalent)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder äquivalent)    | 48 / 96 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y oder äquivalent) | 16 / 32 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 oder äquivalent)    | 36 / 72 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder äquivalent)    | 56 / 112 Threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder äquivalent)  | 32 / 64 Threads           | 2 X NVIDIA L40S 48 GB |

### Hinweise

- __(1)__ Die Speichermenge entspricht dem physisch auf den Blades verfügbaren Speicher und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbofrequenz.
- __(3)__ Die physische Konnektivität wird für den Netzwerkzugriff und den Blockspeicherzugriff über eine konvergierte Cisco-UCS-Architektur gemeinsam genutzt.
- __(4)__ Die verfügbaren GPUs entwickeln sich entsprechend den neuesten Technologien weiter. Zum 1. Mai 2024 umfasst das Produkt NVIDIA LOVELACE L40S-GPUs.
- __(5)__ Die hohe Verfügbarkeit in einem Cluster ist erst ab 2 Knoten verfügbar.

Die Verfügbarkeit der Infrastruktur wird mit 99,9 % garantiert, monatlich gemessen, inklusive Wartungsfenster. Alle SLA-bezogenen Anfragen müssen über ein Incident-Ticket gemeldet werden.

---

## Blockspeicherklassen

Der verteilte Blockspeicher, basierend auf __IBM Spectrum Virtualize__, bietet ein Leistungsspektrum, das an verschiedene Anwendungsfälle angepasst ist:

| Bezeichnung                         | IOPS/To        | Max. IOPS pro Volume | Maximale Bandbreite pro Volume | Hauptanwendungsbereich                        |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essential**             | 500            | 10 000 IOPS               | 512 MB/s                    | Leichte Workloads             |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Standard-Workloads            |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Intensive Workloads                     |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Kritische Workloads                      |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Ultra-intensive Workloads               |
| **MASS STORAGE - Archivierung**      | Nicht anwendbar | Nicht garantiert               | Nicht garantiert                 | Kostengünstiger Speicher für die Archivierung   |

### Merkmale

- **Leistung** : Die effektive Leistung steigt linear mit der zugewiesenen Kapazität (gemäß dem IOPS/To-Verhältnis), **bis zur absoluten Hardware-Obergrenze, die oben definiert ist**. (Beispielsweise ist ein 10-To-Volumen in der Ultra-Klasse physisch auf 30 000 IOPS und 1024 MB/s begrenzt).
- __Technologie__ : NVMe-Flash mit __Distributed RAID 6__ für erhöhte Resilienz.
- __Verfügbarkeit__ : 99.99 %, monatlich gemessen.
- __Einschränkungen__ : Keine Begrenzung für Lese- oder Schreibvorgänge. Keine automatische Komprimierung oder Deduplizierung, was die vollständige Nutzung der reservierten Volumes garantiert.

### Sicherheit und Verschlüsselung des Block-Speichers

Um die Vertraulichkeit Ihrer Daten im Ruhezustand zu gewährleisten, integriert unsere gesamte Block-Speicher-Infrastruktur eine robuste Hardwareverschlüsselung.

- __Verschlüsselungstyp__ : Die Daten werden direkt auf den Festplatten verschlüsselt (`Data At Rest`) unter Verwendung des Algorithmus __XTS-AES 256__.
- __Konformität__ : Diese Verschlüsselungsmethode entspricht dem Standard __FIPS 1-40-2__ und gewährleistet ein validiertes hohes Sicherheitsniveau.
- __Funktionsweise__ : Die Verschlüsselung wird beim Schreiben der Daten auf das physische Speichermedium angewendet.

:::warning[Hinweis zur Replikation]
Es ist wichtig zu beachten, dass diese Verschlüsselung die auf den Festplatten gespeicherten Daten schützt. Sie ist nicht "on-the-fly" aktiv, was bedeutet, dass die Daten während der Speicherreplikationsvorgänge zwischen den Verfügbarkeitszonen nicht verschlüsselt werden. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

---

## Netzwerke

Das Produkt OpenIaaS ist kompatibel mit [privaten Netzwerken](../network/private_network) und [Internetzugriff](../network/internet).

Zwei Netzwerktypen sind über die Konfiguration einer virtuellen Maschine verfügbar.

### VLAN-Netzwerke

VLAN-Netzwerke werden mit einem VLAN pro Netzwerkkarte bereitgestellt. Wenn Sie mehrere Netzwerke verwenden möchten, erstellen Sie einfach mehrere Netzwerkkarten.

Es gibt eine Begrenzung für die maximale Anzahl von Netzwerkkarten, die auf einer VM erstellt werden können; diese beträgt 7.

### Der VLAN-Trunk

Falls Sie mehr als 7 VLANs weiterleiten müssen, müssen Sie den VLAN-Trunk verwenden.
Der VLAN-Trunk transportiert alle Ihre VLANs über eine einzige Netzwerkkarte. Die Konfiguration der VLAN-IDs erfolgt über virtuelle VLAN-Schnittstellen im Betriebssystem der VM. Die VLAN-IDs entsprechen denen, die in der Konsole vorhanden und sichtbar sind.

## Sicherung virtueller Maschinen

Das OpenIaaS-Angebot integriert __eine native, verteilte und nicht deaktivierbare Sicherungsarchitektur__, ein obligatorisches Element im Rahmen der französischen SecNumCloud-Qualifikation.

Die Sicherungen werden im [Stockage Objet qualifié SecNumCloud](../storage/oss) gespeichert, was einen optimalen Schutz im Falle eines schwerwiegenden Ausfalls des Produktionsrechenzentrums gewährleistet. Dieser Ansatz ermöglicht die Wiederherstellung Ihrer Daten in einem sekundären Rechenzentrum, selbst bei kritischen Vorfällen wie einem Brand.

### Verfügbare Datensicherungsdienste

| Dienst | Beschreibung |
|---|---|
| **Inkrementelle Sicherung (Agentless)** | Agentlose Sicherung über die nativen Mechanismen des Hypervisors in ein entferntes S3-Repository. |
| **Sicherung von Metadaten** | Schutz der Konfigurationen des Virtualisierungspools und des Sicherungsorchestrators — unverzichtbar für das Disaster Recovery. |
| **Granulare Wiederherstellung** | Wiederherstellung auf Ebene der vollständigen VM, einzelner virtueller Festplatten oder einzelner Dateien möglich. |
| **S3 Multi-AZ Offloading** | Auslagerung in den replizierten S3-Objektspeicher von Cloud Temple über Verfügbarkeitszonen hinweg. |

Die Sicherungs- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab. Die Sicherungsrichtlinie ist über [la Console Cloud Temple](../console/console.md) für jede virtuelle Maschine vollständig konfigurierbar.

| Referenz                                    | Einheit | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SICHERUNG - Servicezugang                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Technische Architektur der Datensicherung

#### Gesamtübersicht

Die Architektur basiert auf einer strikten Trennung zwischen der **Steuerungsebene** und der **Datenebene**: Der Sicherungsorchestrator wird im Management-Cluster von Cloud Temple gehostet (vom Kunden getrennt und für diesen nicht zugänglich), während die Sicherungsdaten in einem entfernten S3-Bucket gespeichert werden, der physisch von der Produktionsinfrastruktur getrennt ist. Die Daten werden zwischen den beiden Komponenten verschlüsselt übertragen.

#### Sicherungs-Orchestrator

Der Orchestrator ist im Management-Cluster von Cloud Temple bereitgestellt, **für den Kunden nicht direkt zugänglich**. Er orchestriert alle Sicherungsjobs und verwaltet die Verschlüsselung.

- **Standardrichtlinien** : Sicherungsrichtlinien werden standardmäßig für jeden Tenant angewendet.
- **Benutzerdefinierte Richtlinien** : Der Kunde kann über ein Support-Ticket in der Cloud Temple-Konsole spezifische Intervalle oder Aufbewahrungsfristen anfordern.

#### Remotespeicher S3

Die Sicherungen werden an den [SecNumCloud-qualifizierten Objektspeicher](../storage/oss) von Cloud Temple gesendet, mit Multi-AZ-Replikation, um die Resilienz gegenüber dem Ausfall eines gesamten physischen Standorts zu gewährleisten.

---

### Sicherungsmechanismus: Incremental Backup

Der Dienst verwendet einen **inkrementellen** Sicherungsmodus. Dieser Modus zielt auf ein **Backup Repository** (den entfernten S3-Speicher) ab und exportiert nach der ersten Sicherung niemals eine vollständige Sicherung: Nur die **geänderten Datenblöcke** werden in jedem Zyklus übertragen.

:::info[Inkrementelle Sicherung vs. Replikation]
Die **inkrementelle Sicherung** zielt auf ein entferntes S3-Repository ab und ist für den **langfristigen Schutz** optimiert. Sie ist nicht mit der **Replikation** (Hot Disaster Recovery) zu verwechseln, die auf ein lokales Storage Repository abzielt — dieser Modus wird durch die Funktion [réplication de machines virtuelles](#réplication-de-machines-virtuelles) abgedeckt.
:::

#### Technischer Lebenszyklus eines inkrementellen Backups

Dies sind die aufeinanderfolgenden Schritte, die bei jeder Ausführung eines Backup-Jobs ausgelöst werden:

**1. Erstellung des lokalen Snapshots (Quelle)**

Beim Start des Jobs fordert der Orchestrator den Hypervisor auf, einen Snapshot der VM zu erstellen. Dieser Snapshot dient als Vergleichspunkt zur Berechnung des Deltas im Verhältnis zum vorherigen Referenz-Snapshot.

**2. Differenzieller Export über Changed Block Tracking (CBT)**

Der Orchestrator vergleicht den neuen Snapshot mit dem vorherigen Referenz-Snapshot über die CBT-Metadaten. Nur die Datenblöcke, die sich seit dem letzten Backup geändert haben, werden extrahiert — nicht die gesamte Festplatte.

**3. Verschlüsselung und Übertragung nach S3**

Die geänderten Blöcke werden **vom Orchestrator in Echtzeit verschlüsselt** und anschließend via HTTPS/TLS 1.3 an den entfernten S3-Bucket gesendet.

**4. Snapshot-Rotation (Coalesce)**

Sobald die Übertragung bestätigt ist, wird der alte Referenz-Snapshot gelöscht und der neue Snapshot wird zur Referenz für den nächsten Zyklus. Der Hypervisor löst dann einen **Coalesce**-Prozess (Zusammenführung) aus, um die Daten des alten Deltas wieder in die Kette der virtuellen Festplatten zu integrieren.

:::warning[I/O-Auswirkung von Coalesce]
Der Coalesce-Vorgang ist **I/O-intensiv** auf dem Produktions-Speicher. Er wird automatisch nach jedem erfolgreichen Backup ausgelöst. Es wird empfohlen, die Backup-Fenster während Zeiten geringer Anwendungslast zu planen.
:::

**5. Verwaltung der Aufbewahrung auf S3 (Merge) und Key Backup Interval**

Auf dem S3-Speicher verwaltet der Orchestrator die Backup-Rotation durch **Zusammenführung** (*merge*) der alten Deltas in das älteste gemäß der Aufbewahrungsrichtlinie beibehaltene Vollbackup.

Um die Integrität der Backup-Kette zu gewährleisten, wird ein Vollbackup **periodisch erzwungen** (typischerweise alle 20 Inkremente — *Key Backup Interval*). Dies erstellt einen neuen, sauberen Startpunkt und begrenzt die Auswirkungen einer möglichen Beschädigung eines Glieds in der Kette.

---

### Auswirkung auf die Dimensionierung des Produktions-Speichers

:::warning[Kritischer Hinweis — Block-Speicher (Thick Provisioning)]
Das OpenIaaS-Angebot basiert auf Hochleistungs-Block-Speicher (Fibre Channel / LVM). Die für die inkrementelle Sicherung verwendeten Snapshots werden im **Thick**-Modus provisioniert: Jeder Snapshot verbraucht im Storage Repository (SR) die **vollständige Nenngröße der VM-Festplatte** und nicht nur das tatsächliche Delta.

**Beispiel für den Verbrauch bei einer VM mit einer 50-GB-Festplatte:**

| Komponente | Verbrauch im SR |
|---|---|
| Aktive VM-Festplatte | 50 GB |
| Permanenter Referenz-Snapshot (zur Deltaberechnung) | 50 GB |
| Temporärer Snapshot, der während des Exports erstellt wird | 50 GB |
| **Während des Sicherungsfensters erforderlicher Gesamtbedarf** | **bis zu 150 GB** |

**Empfohlene Dimensionierungsregel**: Im Produktions-Speicher sollten **mindestens 50 % Freispeicher** im Verhältnis zum Gesamtvolumen der gesicherten VMs eingeplant werden, um diesen dem Hochleistungs-Block-Speicher inhärenten zusätzlichen Speicherbedarf zu decken.
:::

---

### Sicherheit und Verschlüsselung der Backups

#### Verschlüsselung während der Übertragung

Alle Kommunikationen zwischen dem Sicherungsorchestrator und dem S3-Speicher werden über **HTTPS / TLS 1.3** verschlüsselt.

#### Verschlüsselung im Ruhezustand (At Rest) und Schlüsselverwaltung

Die Verschlüsselung wird vom Sicherungsorchestrator **vor** dem Übertragen der Daten an S3 angewendet.

| Parameter | Wert |
|---|---|
| **Algorithmus** | AES-256 oder ChaCha20-Poly1305 |
| **Schlüsselerzeugung** | Automatisch bei der Bereitstellung des Sicherungsorchestrators |
| **Schlüsselspeicherung** | Zentrales Cloud Temple Vault (niemals in der Client-Oberfläche exponiert) |
| **Resilienz** | Im Falle eines Ausfalls des Orchestrators wird der Schlüssel aus dem Vault erneut injiziert, um den Dienst wiederherzustellen |

#### Netzwerkisolation (SecNumCloud-Architektur)

Die Backup-Infrastruktur ist so konzipiert, dass sie **strikt isoliert** gegenüber den Kundenumgebungen ist :

- **Physische Trennung** : Die Netzwerke *Client*, *Administration* und *Backup* basieren auf separaten physischen Backbones und getrennten Routing-Kontexten (VRF).
- **Unmöglichkeit einer lateralen Infektion** : Eine kompromittierte VM kann weder den S3-Speicher noch den Backup-Orchestrator erreichen — es existiert kein Netzwerkpfad zwischen ihnen. S3 wird niemals in der VM « gemountet ».

#### Sichere Administration

Die Administration der Backup-Plattform ist **ausschließlich den Backup-Teams von Cloud Temple vorbehalten** und unterliegt den SecNumCloud-Anforderungen:

| Kontrolle | Maßnahme |
|---|---|
| **Zugriffs-Bastion** | Obligatorischer Zugriff über einen gehärteten internen Administrations-Bastion-Host (Ubuntu Hardened) |
| **Arbeitsstation** | Zugriff ausschließlich über dedizierte und gesicherte Administrations-Laptops |
| **Authentifizierung** | Obligatorische MFA über ein dediziertes Administrations-LDAP-Verzeichnis (getrennt vom Office-LDAP) |

---

### Monitoring und Audit

- **Sicherungsprotokolle** : für den Kunden direkt in der Cloud Temple-Konsole einsehbar — Status (Erfolg/Fehler), Datenvolumen, Zeitstempel.
- **Administrator-Zugriffsprotokolle** : Zugriffe auf die Backup-Infrastrukturen (Orchestrator, S3) werden protokolliert und **monatlich auditiert**, um jegliche Anomalien zu erkennen.
- **Penetrationstests (Pentests PASSI)** : Die Infrastruktur unterliegt regelmäßigen Penetrationstests durch qualifizierte PASSI-Dienstleister im Rahmen der Aufrechterhaltung der SecNumCloud-Zertifizierung.
- **Physische Sicherheit** : Alle Geräte werden in den SecNumCloud-Zonen (dedizierte physische Käfige mit biometrischer Zugangskontrolle) der Cloud Temple-Rechenzentren beherbergt.

---

### Kompatibilität und Sonderfälle

:::warning[VMs à écritures disque continues]
Bestimmte virtuelle Maschinen sind mit dieser Backup-Technologie nicht kompatibel, wenn ihre **Festplattenschreiblasten konstant sind** (bases de données actives, journaux transactionnels, etc.). Der Hypervisor kann den Snapshot dann nicht abschließen, ohne die VM einzufrieren, was mehrere Stunden dauern kann.

Für diese Workloads empfehlen wir, das **Hypervisor-Backup durch ein anwendungsbasiertes Backup zu ergänzen oder zu ersetzen** : Datenbank-Dumps (pg_dump, mysqldump…), Agent-Backups oder native Anwendungsexporte.
:::

---

### Erstellen einer Sicherungsrichtlinie

Das Erstellen einer Sicherungsrichtlinie ist eine administrative Aufgabe, die **ausschließlich über einen Supportantrag** durchgeführt wird, der über das Rettungszeichen-Icon oben rechts in der Benutzeroberfläche zugänglich ist.

Die Anfrage muss folgende Angaben enthalten:

- Der Name Ihrer Organisation
- Die Kontaktdaten einer Ansprechperson (E-Mail und Telefon) zur Finalisierung der Konfiguration
- Der Name des Tenants
- Der Name der Sicherungsrichtlinie
- Die gewünschten Parameter: Häufigkeit, Retentionszeitraum (x Tage, y Wochen, z Monate…)

#### Planungsbeschränkungen

| Einschränkung | Wert |
|---|---|
| **Mindestintervall zwischen zwei Ausführungen** | 24 Stunden |
| **Maximale Aufbewahrungsfrist** | 24 Monate |
| **Gleichzeitige Ausführungen pro Richtlinie** | Nur 1 gleichzeitig |

:::warning[Eine Richtlinie kann nur einmal gleichzeitig ausgeführt werden]
Jede Sicherungsrichtlinie ist **mono-instanzfähig**: nur eine Ausführung kann gleichzeitig aktiv sein.

**Praktische Auswirkung**: Wenn Sie einer bestehenden Richtlinie viele virtuelle Maschinen hinzufügen und das Backup vom Vortag zum geplanten Startzeitpunkt noch nicht abgeschlossen ist, **startet der neue Zyklus nicht** — er wird bis zur nächsten geplanten Ausführung ignoriert.

Um dies zu vermeiden:
- überprüfen Sie die **Laufzeiten** Ihrer Jobs in den Protokollen der Cloud Temple-Konsole,
- passen Sie die **Häufigkeit** oder den **Umfang der Richtlinie** an, wenn die Backups regelmäßig in das nächste Zeitfenster überlaufen,
- erwägen Sie, **VMs auf mehrere Richtlinien zu verteilen** mit versetzten Zeitplänen für große Umfänge.
:::

:::info[Lange Aufbewahrungsfrist — künftige Verfügbarkeit]
**Die maximale Aufbewahrungsfrist beträgt derzeit 24 Monate.** Eine langfristige Aufbewahrung (bis zu 10 Jahre) wird mit der Einführung unseres Produkts **Glacier**, geplant für das **erste Quartal 2027**, als Zusatzabonnement integriert.

Für derart lange Aufbewahrungsfristen empfehlen wir, **ausschließlich flache Dateien** (Rohdateien, statische Dokumente) sowie **Datenbank-Dumps** zu sichern. Die Wiederherstellung eines vollständigen Servers nach 10 Jahren birgt nämlich erhebliche Risiken: Viele Dienste oder Abhängigkeiten können veraltet oder mit der aktuellen Umgebung inkompatibel geworden sein.

**Sofort verfügbare Alternative**: Der Dienst zur **Agent-basierten Sicherung**, verfügbar als Zusatzabonnement. Wenden Sie sich für weitere Informationen an den Support.
:::

## Virtuelle Maschinen

### Verwaltung der vCPU-Ressourcen

Änderungen an den vCPU-Ressourcen erfolgen im kalten Zustand (bei ausgeschalteter Maschine). Die Plattform unterstützt bis zu 254 vCPUs pro virtueller Maschine (theoretisches Limit), wobei erfolgreiche Tests mit Linux-VMs mit 128 vCPUs durchgeführt wurden.

Es ist wichtig zu beachten, dass die Unterstützung durch das Gastbetriebssystem ein entscheidender Faktor bei der Ressourcenallokation ist. Eine Zuweisung, die die vom Betriebssystem unterstützten Grenzen überschreitet, kann zu erheblichen Leistungsproblemen führen.

### Verwaltung der Speicherressourcen

Änderungen am Speicher erfolgen ebenfalls cold. Die Limits sind wie folgt:

- 1,5 TiB mit Unterstützung von Speichersnapshots
- 8 TiB ohne Unterstützung von Speichersnapshots
- 16 TiB (theoretisches Limit ohne Sicherheitsunterstützung, abzüglich des für Xen und die Control Domain zugewiesenen RAMs)

Der tatsächlich nutzbare Speicher kann durch das Gastbetriebssystem begrenzt sein. Das Überschreiten der vom Gast-OS unterstützten Grenzen kann zu Leistungseinbußen führen.

### Festplattenverwaltung

- Die maximale Größe einer Festplatte beträgt 2 TB
- Die Festplatten verwenden das Standard-VHD-Format
- Die maximale Anzahl virtueller Festplatten pro virtueller Maschine, einschließlich CD-ROM-Laufwerken, beträgt 24

Eine Größenänderung der Festplatten ist nach der Erstellung nicht möglich. Um die Speicherkapazität zu erweitern, muss eine neue Festplatte erstellt werden.

### Tools für virtuelle Maschinen

Diese Tools werden verwendet, um einen optimalen Betrieb der virtuellen Maschinen zu gewährleisten. Wenn Sie eine Aktion ausführen möchten und eines dieser Tools erforderlich ist, wird eine Meldung in der Cloud Temple-Konsole angezeigt.
Um diese Tools zu installieren, können Sie die offiziellen Websites von Xen Server konsultieren, um genaue Anweisungen für Ihr Betriebssystem zu erhalten.

#### Management Agent

Der Management-Agent ist eine Komponente, die auf jeder virtuellen Maschine installiert wird. Er ermöglicht dem Hypervisor eine bessere Verwaltung der Maschine durch Zugriff auf zusätzliche Informationen und erlaubt die sauberere Ausführung bestimmter Aktionen.

#### PV-Treiber (Paravirtualisierungstreiber)

PV-Treiber sind Treiber, die in der virtuellen Maschine installiert werden, um deren Leistung zu verbessern.
Ohne diese Treiber funktioniert die Maschine zwar, jedoch langsamer. Darüber hinaus ermöglichen sie bestimmte erweiterte Funktionen.
PV-Treiber sind standardmäßig in den meisten aktuellen Linux-Kerneln enthalten.

#### Tools

Tools sind eine Sammlung von Softwarekomponenten, die die Integration der virtuellen Maschine mit der Virtualisierungsinfrastruktur verbessern.

## Kataloge

Der Katalog ermöglicht die Verwaltung von drei wesentlichen Elementtypen:

- Festplattenimages (ISO)
- Konfigurationsvorlagen
- Vorinstallierte VM-Vorlagen

In der Detailansicht einer VM-Vorlage können Sie wichtige Informationen wie den Speicherort, die Anzahl der Festplatten oder die Anzahl der Netzwerkadapter einsehen.

Wenn die Anzahl der virtuellen Festplatten mit 0 angegeben ist, handelt es sich um eine Konfigurationsvorlage ohne vorinstalliertes Betriebssystem, sodass Sie Ihre eigene benutzerdefinierte Umgebung bereitstellen können.

## Replikation virtueller Maschinen

Die __Replikation virtueller Maschinen__ von Cloud Temple gewährleistet den Schutz und die Kontinuität Ihrer kritischen Daten durch eine automatisierte Kopie Ihrer Umgebungen in eine separate Verfügbarkeitszone. Diese Funktion, die nativ in das Open-Source-IaaS-Produkt integriert ist, erfüllt die strengsten Anforderungen an Geschäftskontinuität und Disaster Recovery.

### Automatischer und sicherer Schutz

Die Cloud Temple-Replikation basiert auf einer __SecNumCloud-zertifizierten__ Infrastruktur, die Folgendes garantiert :

- __Asynchrone Replikation__ : Kontinuierliche Kopie Ihrer virtuellen Maschinen ohne Beeinträchtigung der Produktionsleistung
- __Geografische Trennung__ : Speicherung der Replikate in einer anderen Verfügbarkeitszone als der Quelle
- __Vollständige Automatisierung__ : Vollständig automatisierter Prozess über die [Console Cloud Temple](../console/console.md)
- __Regulatorische Konformität__ : Einhaltung der Anforderungen an Datensicherung und Geschäftskontinuität

### Vorteile der Replikation

| Vorteil                | Beschreibung                                                                                                                                   |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Geschäftskontinuität   | Schutz Ihrer kritischen Dienste im Falle eines schwerwiegenden Vorfalls am Hauptsitz.                                                         |
| Geografischer Schutz   | Replikation in eine separate Verfügbarkeitszone, die vor lokalen Störungen schützt.                                                           |
| Zeitliche Flexibilität | Wahl des Replikationsintervalls nach Ihren Anforderungen: von 15 Minuten bis 24 Stunden.                                                      |
| Einfache Verwaltung    | Konfiguration und Überwachung sind vollständig in der Cloud Temple-Konsole integriert.                                                        |
| SecNumCloud-Konformität| Zertifizierte Infrastruktur, die das höchste Sicherheitsniveau für Ihre sensiblen Daten garantiert.                                            |

### Konfiguration der Replikation

#### Replikationsrichtlinien

Die Erstellung einer Replikationsrichtlinie definiert die Schutzparameter für Ihre virtuellen Maschinen:

- __Ziel__ : Auswahl des Ziel-Speichers in der Replikations-Verfügbarkeitszone
- __Häufigkeit__ : Replikationsintervall, das an Ihre Wiederherstellungsanforderungen (RPO) angepasst ist
- __Aufbewahrung__ : Anzahl der gespeicherten Wiederherstellungspunkte

#### Verfügbare Intervalle

| Intervall               | Empfohlene Verwendung                      | RPO (Perte de données max)  |
|-------------------------|--------------------------------------------|-----------------------------|
| __15 bis 59 Minuten__   | Kritische Echtzeitanwendungen              | < 1 Stunde                  |
| __1 bis 24 Stunden__    | Geschäftsanwendungen und Standardumgebungen | < 24 Stunden               |

:::warning[RPO : objectif non garanti contractuellement]
Das konfigurierte Replikationsintervall (par exemple 15 minutes) stellt ein **RPO-Ziel (Recovery Point Objective)** dar und keine vertragliche Verpflichtung.

Das tatsächlich erreichte RPO hängt direkt von der **Änderungsrate (change rate)** der Daten auf den replizierten virtuellen Maschinen ab. Wenn das Volumen der zwischen zwei Replikationszyklen geänderten Daten zu groß ist, kann die Übertragung innerhalb des konfigurierten Intervalls nicht abgeschlossen werden. In diesem Fall startet der nächste Zyklus erst nach Abschluss des vorherigen, was das tatsächliche RPO de facto verlängert.

**Zusammenfassend:**
- Das minimal konfigurierbare RPO beträgt **15 Minuten**.
- Dieses RPO ist nur erreichbar, wenn die Änderungsrate der Daten mit der verfügbaren Replikationsbandbreite kompatibel bleibt.
- **Dem RPO ist kein SLA zugeordnet**: Es handelt sich um ein „Best-Effort“-Ziel, dessen Einhaltung von den Eigenschaften der Arbeitslast abhängt.
- Für Workloads mit hoher Schreibrate (bases de données, journaux transactionnels, etc.) wird empfohlen, ein größeres Replikationsintervall vorzusehen und dies durch eine anwendungsspezifische Backup-Strategie zu ergänzen.
:::

#### Zuordnung virtueller Maschinen

Sobald die Richtlinie erstellt wurde, können Sie die zu schützenden virtuellen Maschinen zuordnen:

- __Einfache Auswahl__ : Auswahl der VMs über die Konsolenschnittstelle
- __Automatische Validierung__ : Überprüfung der Kompatibilität und der Voraussetzungen
- __Sofortige Aktivierung__ : Automatischer Start der Replikation nach der Konfiguration

### Verwaltung der Replikate

#### Ansicht der Richtlinien

Die Cloud Temple-Konsole bietet eine zentrale Ansicht Ihrer Replikationsrichtlinien mit:

- Name und Häufigkeit jeder Richtlinie
- Ziel-Verfügbarkeitszone
- Zugehöriger Pool und Speicher
- Verfügbare Verwaltungsaktionen

#### Ansicht der Replikate

Die Replikat-Tabelle ermöglicht es Ihnen, Folgendes anzuzeigen:

- Name der replizierten virtuellen Maschinen
- Quell- und Zielstandort
- Zugehörige Replikationsrichtlinie
- Datenexport im CSV-Format

### Best Practices

#### Empfehlungen nach Workload-Typ

- __Kritische Anwendungen__ : Replikation alle 15-30 Minuten zur Minimierung von Datenverlusten
- __Geschäftsanwendungen__ : Stündliche oder zweistündliche Replikation je nach Bedarf
- __Entwicklungsumgebungen__ : Tägliche Replikation ist in der Regel ausreichend

#### Planung der Richtlinien

- Erstellen Sie separate Richtlinien entsprechend der Kritikalität Ihrer Anwendungen
- Benennen Sie Ihre Richtlinien eindeutig, um die Verwaltung zu erleichtern
- Überprüfen Sie regelmäßig den Status Ihrer Replikate über die Konsole
- Dokumentieren Sie Ihre Replikationsstrategie für Ihre Teams

__Wichtiger Hinweis :__

*Replikation ersetzt keine umfassende Sicherungsstrategie. Sie stellt eine wesentliche Ergänzung dar, um die Geschäftskontinuität im Falle eines schwerwiegenden Vorfalls an Ihrem Hauptstandort sicherzustellen.*

## Hochverfügbarkeit

Die Hochverfügbarkeit gewährleistet die Servicekontinuität virtueller Maschinen (VM) im Falle eines Ausfalls eines physischen Hosts innerhalb eines OpenIaaS-Pools.
Mit der Hochverfügbarkeit (HA) sendet jeder Host im Pool regelmäßig Heartbeat-Signale an seine Peers über den gemeinsamen Speicher (Block Storage Heartbeat). Bei längerem Ausbleiben einer Antwort wird der Host als ausgefallen eingestuft.

Ein als Heartbeat ausgewiesener Block Storage dient als Grundlage zur Überprüfung der Hosts, die nicht mehr antworten.

Damit die Hochverfügbarkeit in einem OpenIaaS-Pool korrekt konfiguriert werden kann, ist es zwingend erforderlich, __mindestens zwei verbundene Hosts__ vorzuhalten.

Jede VM muss mit einer Neustart-Prioritätsstufe für die Hochverfügbarkeit konfiguriert werden:

#### Deaktiviert

  Die hohe Verfügbarkeit ist nicht konfiguriert. Im Falle eines Host-Ausfalls wird die virtuelle Maschine nicht neu gestartet.

#### Neustart

  Im Falle eines Host-Ausfalls wird die virtuelle Maschine automatisch neu gestartet, sobald Ressourcen im Pool verfügbar sind. Virtuelle Maschinen, die im Modus "restart" konfiguriert sind, werden vorrangig behandelt, bevor solche im Modus "best-effort" berücksichtigt werden.

#### Best-Effort  

  Im Falle eines Host-Ausfalls wird die virtuelle Maschine nur automatisch neu gestartet, wenn nach der Verarbeitung aller im Modus "restart" konfigurierten virtuellen Maschinen noch Ressourcen verfügbar sind. Der Modus "Best-effort" unternimmt nur einen einzigen Versuch, daher wird die virtuelle Maschine nicht neu gestartet, wenn die Ressourcen unzureichend sind.