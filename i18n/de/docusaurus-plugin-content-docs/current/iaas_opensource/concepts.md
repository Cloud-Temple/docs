---
title: Konzepte
---

Das __IaaS (Infrastructure As A Service)__ von Cloud Temple wurde entwickelt, um den kritischen Anforderungen an Geschäftskontinuität und Disaster Recovery gerecht zu werden, mit besonderem Fokus auf anspruchsvolle Branchen wie Industrie, Banken und Versicherungswesen. Basierend auf modernsten Technologien gewährleistet diese Infrastruktur maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Workloads.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple basiert auf international renommierten Technologiepartnern:

- Computing : __CISCO UCS__.
- Storage : __IBM Spectrum Virtualize__, __IBM FlashSystem__ für den Blockspeicher und __DELL ECS__ für den Objektspeicher.
- Netzwerk : __JUNIPER__.
- Virtualisierung : __Stack Opensource__, das eine zuverlässige und bewährte Grundlage für die Verwaltung Ihrer Cloud-Umgebungen bietet.

Diese Architektur basiert auf dem __VersaStack__-Modell, einer Partnerschaft zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den führenden Softwareherstellern gewährleistet.

## Eine dedizierte und automatisierte Infrastruktur

Obwohl sie vollständig durch APIs und einen Terraform-Provider automatisiert ist, bietet das IaaS-Produkt von Cloud Temple eine einzigartige Infrastruktur:

- __Dedizierte Ressourcen__: Compute-Blades, Speichervolumes und Software-Stacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen Kunden gemeinsam genutzt.
- __Maximale Vorhersagbarkeit__: Sie haben die Kontrolle über die Virtualisierungsraten, die IOPS-Belastung des Speichers und profitieren von einer klaren, monatlichen verbrauchsabhängigen Abrechnung.

Die Plattform ist von der [ANSSI](https://www.ssi.gouv.fr/) mit dem __SecNumCloud__-Label zertifiziert, was ein hohes Maß an Automatisierung und Sicherheit garantiert.

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
| Digitales Vertrauen | Datenhosting in Frankreich und DSGVO-Konformität.                                                                                              |
| Sicherheit          | Hochsichere Plattform, qualifiziert nach __SecNumCloud__, __HDS__ (Hosting von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__.      |
| Hohe Verfügbarkeit  | Verfügbarkeitsrate der Plattform von 99,99 %, monatlich gemessen, inklusive Wartungsfenster.                                                   |
| Resilienz           | Umsetzung von Plänen zur Geschäftskontinuität oder zum Business Continuity Management je nach Bedarf.                                          |
| Automatisierung     | Vollständig automatisierte Plattform, konzipiert für die Integration in ein Programm zur digitalen Transformation.                             |
| On-Demand           | Ressourcen bei Bedarf verfügbar.                                                                                                               |

## Regionen und Verfügbarkeitszonen

Das Produkt OpenIaaS wird in einer Verfügbarkeitszone bereitgestellt.
Eine Verfügbarkeitszone ist Teil einer Region.

Diese Bereitstellungsart ermöglicht die Auswahl des Standorts der Cluster und deren Verteilung auf verschiedene Verfügbarkeitszonen (AZ).
Dies bietet eine bessere Lastverteilung, maximiert die Redundanz und erleichtert die Einrichtung eines Disaster-Recovery-Plans (DRP) im Falle eines Vorfalls.

---

## Compute-Blade-Klassen

Die für das Bare-Metal-Angebot verfügbaren Compute-Blades bieten ein Leistungsspektrum, um unterschiedliche Anforderungen zu erfüllen:

| Referenz             | RAM  __(1)__ | Taktfrequenz __(2)__                         | Anzahl der Kerne / Threads | Konnektivität __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2,20/3,0 GHz (Silver 4114 oder gleichwertig)  | 20 / 40 Threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2,40/3,4 GHz (Silver 4314 oder gleichwertig)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2,80/3,5 GHz (Gold 6342 oder gleichwertig)    | 48 / 96 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3,20/3,6 GHz (Xeon E-53I5Y oder gleichwertig) | 16 / 32 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3,00/3,6 GHz (Gold 6354 oder gleichwertig)    | 36 / 72 Threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2,60/3,5 GHz (Gold 6348 oder gleichwertig)    | 56 / 112 Threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2,50/4,1 GHz (Intel 6426Y oder gleichwertig)  | 32 / 64 Threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48 GB |

### Hinweise

- __(1)__ Die Speicherkapazität entspricht dem physisch auf den Blades verfügbaren Speicher und kann nicht geändert werden.
- __(2)__ Die angegebenen Frequenzen entsprechen der minimalen Basisfrequenz und der Turbofrequenz.
- __(3)__ Die physische Konnektivität wird für den Netzwerkzugriff und den Block-Speicherzugriff gemeinsam genutzt, dank einer konvergierten Cisco UCS-Architektur.
- __(4)__ Die verfügbaren GPUs richten sich nach den neuesten Technologien. Stand 1. Mai 2024 umfasst das Produkt NVIDIA LOVELACE L40S-GPUs.
- __(5)__ Hohe Verfügbarkeit in einem Cluster ist erst ab 2 Knoten verfügbar.

Die Verfügbarkeit der Infrastruktur ist mit 99,9 % garantiert, monatlich gemessen, inklusive Wartungsfenster. Alle SLA-bezogenen Anfragen müssen über ein Incident-Ticket gemeldet werden.

---

## Speicherklassen im Blockmodus

Der verteilte Blockspeicher, basierend auf __IBM Spectrum Virtualize__, bietet ein Leistungsangebot, das auf verschiedene Anwendungsfälle zugeschnitten ist:

| Referenz                          | IOPS/To        | Max. IOPS / Volume        | Max. Durchsatz / Volume     | Hauptanwendung                         |
|-----------------------------------|----------------|---------------------------|-----------------------------|----------------------------------------|
| **FLASH - Essential**             | 500            | 10 000 IOPS               | 512 MB/s                    | Leichte Workloads                      |
| **FLASH - Standard**              | 1500           | 30 000 IOPS               | 1024 MB/s                   | Standard-Workloads                     |
| **FLASH - Premium**               | 3000           | 30 000 IOPS               | 1024 MB/s                   | Intensive Workloads                    |
| **FLASH - Enterprise**            | 7500           | 30 000 IOPS               | 1024 MB/s                   | Kritische Workloads                    |
| **FLASH - Ultra**                 | 15000          | 30 000 IOPS               | 1024 MB/s                   | Ultra-intensive Workloads              |
| **MASS STORAGE - Archivierung**   | Nicht zutreffend | Nicht garantiert          | Nicht garantiert            | Kostengünstiger Speicher für die Archivierung |

### Eigenschaften

- **Performance** : Die effektive Performance steigt linear mit dem zugewiesenen Volumen (gemäß dem IOPS/TB-Verhältnis), **bis zur oben definierten absoluten Hardware-Obergrenze**. (Beispielsweise ist ein 10-TB-Volumen der Ultra-Klasse physisch auf 30.000 IOPS und 1024 MB/s begrenzt).
- __Technologie__ : NVMe-Flash mit __Distributed RAID 6__ für eine erhöhte Resilienz.
- __Verfügbarkeit__ : 99,99 %, monatlich gemessen.
- __Einschränkungen__ : Keine Begrenzung bei Lese- oder Schreibvorgängen. Keine automatische Komprimierung oder Deduplizierung, um die vollständige Nutzung der reservierten Volumes zu gewährleisten.

### Sicherheit und Verschlüsselung des Blockspeichers

Um die Vertraulichkeit Ihrer Daten im Ruhezustand zu gewährleisten, ist unsere gesamte Blockspeicher-Infrastruktur mit einer robusten Hardware-Verschlüsselung ausgestattet.

- __Verschlüsselungstyp__: Die Daten werden direkt auf den Festplatten (`Data At Rest`) unter Verwendung des __XTS-AES 256__-Algorithmus verschlüsselt.
- __Konformität__: Diese Verschlüsselungsmethode entspricht dem __FIPS 1-40-2__-Standard und gewährleistet ein hohes, validiertes Sicherheitsniveau.
- __Funktionsweise__: Die Verschlüsselung wird zum Zeitpunkt des Schreibens der Daten auf das physische Speichermedium angewendet.

:::warning[Hinweis zur Replikation]
Es ist wichtig zu beachten, dass diese Verschlüsselung die auf den Festplatten gespeicherten Daten schützt. Sie ist nicht "on-the-fly" aktiv, was bedeutet, dass die Daten während der Speicherreplikationsvorgänge zwischen Verfügbarkeitszonen nicht verschlüsselt werden. Die Sicherheit der Übertragungen wird durch dedizierte und gesicherte Kommunikationskanäle gewährleistet.
:::

---

## Netzwerke

Das OpenIaaS-Produkt ist kompatibel mit [privaten Netzwerken](../network/private_network) und [Internetzugriff](../network/internet).

Zwei Netzwerktypen stehen bei der Konfiguration einer virtuellen Maschine zur Verfügung.

### VLAN-Netzwerke

VLAN-Netzwerke werden im Verhältnis von einem VLAN pro Netzwerkkarte bereitgestellt. Wenn Sie mehrere Netzwerke verwenden möchten, genügt es, mehrere Netzwerkkarten zu erstellen.

Die maximale Anzahl von Netzwerkkarten, die auf einer VM erstellt werden können, ist auf 7 beschränkt.

### Der VLAN-Trunk

Falls Sie mehr als 7 VLANs durchreichen müssen, müssen Sie den VLAN-Trunk verwenden.
Der VLAN-Trunk überträgt alle Ihre VLANs über eine einzelne Karte. Die Konfiguration der VLAN-IDs erfolgt über virtuelle VLAN-Schnittstellen im Betriebssystem der VM. Die VLAN-IDs sind dieselben, die in der Konsole angezeigt werden.

## Sicherung virtueller Maschinen

Das OpenIaaS-Angebot integriert __eine native, nicht deaktivierbare verteilte Backup-Architektur__, die im Rahmen der französischen SecNumCloud-Qualifikation zwingend erforderlich ist.

Die Backups werden im [SecNumCloud-zertifizierten Objektspeicher](../storage/oss) gespeichert, was einen optimalen Schutz bei einem schwerwiegenden Ausfall des Produktionsrechenzentrums gewährleistet. Dieser Ansatz ermöglicht die Wiederherstellung Ihrer Daten in einem sekundären Rechenzentrum, selbst bei einem kritischen Vorfall wie einem Brand.

### Verfügbare Datensicherungsdienste

| Dienst | Beschreibung |
|---|---|
| **Inkrementelle Sicherung (Agentless)** | Agentenlose Sicherung über die nativen Mechanismen des Hypervisors in ein entferntes S3-Repository. |
| **Metadatensicherung** | Schutz der Konfigurationen des Virtualisierungspools und des Sicherungsorchestrators — unverzichtbar für das Disaster Recovery. |
| **Granulare Wiederherstellung** | Wiederherstellung auf Ebene der vollständigen VM, einzelner virtueller Festplatten oder einzelner Dateien möglich. |
| **S3 Multi-AZ-Offloading** | Auslagerung in das Cloud Temple S3-Objektspeicher, der zwischen Verfügbarkeitszonen repliziert wird. |

Die Sicherungs- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab. Die Sicherungsrichtlinie ist für jede virtuelle Maschine vollständig über [die Cloud Temple-Konsole](../console/console.md) konfigurierbar.

| Référence                                    | Unité | SKU                            |
| ---------------------------------------------| ----- | ------------------------------ |
| SICHERUNG - Dienstzugriff                | 1 VM  | csp:(region):openiaas:backup:vm:v1 |

---

### Technische Architektur des Backups

#### Gesamtübersicht

Die Architektur basiert auf einer strikten Trennung zwischen der **Kontrollplane** und der **Datenebene**: Der Backup-Orchestrator wird im Management-Cluster von Cloud Temple gehostet (getrennt und für den Kunden nicht zugänglich), während die Sicherungsdaten in einem entfernten S3-Repository gespeichert werden, das physisch von der Produktionsinfrastruktur getrennt ist. Die Daten werden verschlüsselt zwischen den beiden Komponenten übertragen.

#### Backup-Orchestrator

Der Orchestrator wird im Management-Cluster von Cloud Temple bereitgestellt, **der für den Kunden nicht direkt zugänglich ist**. Er orchestriert alle Backup-Jobs und verwaltet die Verschlüsselung.

- **Standardrichtlinien** : Auf jeden Tenant werden standardmäßig Backup-Richtlinien angewendet.
- **Benutzerdefinierte Richtlinien** : Der Kunde kann über ein Support-Ticket in der Cloud Temple-Konsole spezifische Frequenzen oder Aufbewahrungsfristen anfordern.

#### S3-Fernspeicher

Sicherungen werden an den [Qualifizierten SecNumCloud-Objektspeicher](../storage/oss) von Cloud Temple gesendet, mit Multi-AZ-Replikation, um die Resilienz gegenüber dem Verlust eines gesamten physischen Standorts zu gewährleisten.

---

### Sicherungsmechanismus: Inkrementelles Backup

Der Dienst verwendet einen **inkrementellen** Sicherungsmodus. Dieser Modus zielt auf ein **Backup-Repository** (le stockage S3 distant) ab und exportiert nach dem ersten Durchlauf niemals ein vollständiges Backup: Es werden bei jedem Zyklus ausschließlich die **geänderten Datenblöcke** übertragen.

:::info[Sauvegarde incrémentale vs Réplication]
Die **inkrementelle Sicherung** zielt auf ein entferntes S3-Repository ab und ist für den **langfristigen Schutz** optimiert. Sie darf nicht mit der **Replikation** (Disaster Recovery à chaud) verwechselt werden, die ein lokales Storage-Repository anvisiert — dieser Modus wird durch die Funktion der [réplication de machines virtuelles](#réplication-de-machines-virtuelles) abgedeckt.
:::

#### Technischer Lebenszyklus einer inkrementellen Sicherung

Dies sind die aufeinanderfolgenden Schritte, die bei jeder Ausführung eines Sicherungsjobs ausgelöst werden:

**1. Erstellung des lokalen Snapshots (Quelle)**

Bei Start des Jobs fordert der Orchestrator den Hypervisor auf, einen Snapshot der VM zu erstellen. Dieser Snapshot dient als Vergleichspunkt, um das Delta im Verhältnis zum vorherigen Referenz-Snapshot zu berechnen.

**2. Differenzieller Export über Changed Block Tracking (CBT)**

Der Orchestrator vergleicht den neuen Snapshot mit dem vorherigen Referenz-Snapshot über die CBT-Metadaten. Es werden nur die Datenblöcke extrahiert, die sich seit der letzten Sicherung geändert haben — nicht die gesamte Festplatte.

**3. Verschlüsselung und Übertragung zu S3**

Die geänderten Blöcke werden **on-the-fly vom Orchestrator verschlüsselt** und anschließend über HTTPS/TLS 1.3 an das entfernte S3-Bucket gesendet.

**4. Rotation der Snapshots (Coalesce)**

Nach erfolgreicher Bestätigung des Transfers wird der alte Referenz-Snapshot gelöscht, und der neue Snapshot wird zur Referenz für den nächsten Zyklus. Der Hypervisor löst daraufhin einen **Coalesce**-Prozess (Verschmelzung) aus, um die Daten des alten Deltas wieder in die Kette der virtuellen Festplatten zu integrieren.

:::warning[I/O-Auswirkung des Coalesce]
Der Coalesce-Vorgang ist **I/O-intensiv** auf dem Produktionsspeicher. Er wird automatisch nach jeder erfolgreichen Sicherung ausgelöst. Es wird empfohlen, die Sicherungsfenster in Zeiten geringer Anwendungsbelastung zu planen.
:::

**5. Verwaltung der Aufbewahrung auf S3 (Merge) und Key Backup Interval**

Auf dem S3-Speicher verwaltet der Orchestrator die Rotation der Sicherungen durch **Verschmelzung** (*Merge*) der alten Deltas in die älteste aufbewahrte Vollsicherung gemäß der Aufbewahrungsrichtlinie.

Um die Integrität der Sicherungskette zu gewährleisten, wird regelmäßig eine **Vollsicherung erzwungen** (typischerweise alle 20 Inkrementalsicherungen — *Key Backup Interval*). Dies erstellt einen neuen sauberen Ausgangspunkt und begrenzt die Auswirkungen einer möglichen Beschädigung eines Glieds der Kette.

---

### Auswirkung auf die Dimensionierung des Produktionsspeichers

:::warning[Kritischer Hinweis — Blockspeicher (Thick Provisioning)]
Das OpenIaaS-Angebot basiert auf hochleistungsfähigem Blockspeicher (Fibre Channel / LVM). Die für die inkrementelle Sicherung verwendeten Snapshots werden im **Thick**-Modus bereitgestellt: Jeder Snapshot verbraucht auf dem Storage Repository (SR) die **vollständige Nenngröße der VM-Festplatte** und nicht nur das tatsächliche Delta.

**Beispiel für den Verbrauch bei einer VM mit einer 50-GB-Festplatte:**

| Komponente | Verbrauch auf dem SR |
|---|---|
| Aktive VM-Festplatte | 50 GB |
| Dauerhafter Referenz-Snapshot (für die Delta-Berechnung) | 50 GB |
| Während des Exports erstellter temporärer Snapshot | 50 GB |
| **Gesamtbedarf während des Sicherungsfensters** | **bis zu 150 GB** |

**Empfohlene Dimensionierungsregel**: Auf dem Produktionsspeicher sollte im Verhältnis zum Gesamtvolumen der gesicherten VMs **mindestens 50 % freier Speicherplatz** vorgesehen sein, um diese inhärente Mehrbelastung durch den hochleistungsfähigen Blockspeicher zu bewältigen.
:::

---

### Sicherheit und Verschlüsselung der Sicherungen

#### Transportverschlüsselung

Alle Kommunikationen zwischen dem Backup-Orchestrator und dem S3-Speicher werden über **HTTPS / TLS 1.3** verschlüsselt.

#### Verschlüsselung in Ruhe (At Rest) und Schlüsselverwaltung

Die Verschlüsselung wird vom Backup-Orchestrator **vor** dem Senden der Daten an S3 angewendet.

| Parameter | Wert |
|---|---|
| **Algorithmus** | AES-256 oder ChaCha20-Poly1305 |
| **Schlüsselgenerierung** | Automatisch bei der Bereitstellung des Backup-Orchestrators |
| **Schlüsselspeicherung** | Zentrales Cloud Temple Vault (nicht in der Client-Oberfläche sichtbar) |
| **Resilienz** | Bei Verlust des Orchestrators wird der Schlüssel aus dem Vault zurückgespielt, um den Dienst wiederherzustellen |

#### Netzwerkisolation (SecNumCloud-Architektur)

Die Backup-Infrastruktur ist so konzipiert, dass sie **strikt abgekapselt** gegenüber den Client-Umgebungen ist :

- **Physische Trennung** : Die Netzwerke *Client*, *Administration* und *Backup* basieren auf separaten physischen Backbones und getrennten Routing-Kontexten (VRF).
- **Unmöglichkeit einer lateralen Infektion** : Eine kompromittierte VM kann weder auf den S3-Speicher noch auf den Backup-Orchestrator zugreifen — es existiert kein Netzwerkpfad zwischen ihnen. Der S3 wird niemals in der VM « gemountet ».

#### Sichere Administration

Die Administration der Backup-Plattform ist **den Backup-Teams von Cloud Temple vorbehalten** und unterliegt den SecNumCloud-Anforderungen:

| Kontrolle | Maßnahme |
|---|---|
| **Zugangsbastion** | Zwingender Zugriff über eine gehärtete interne Verwaltungsbastion (Ubuntu Hardened) |
| **Workstation** | Zugang ausschließlich von dedizierten und gesicherten Admin-Laptops |
| **Authentifizierung** | Erforderliche MFA über ein dediziertes Admin-LDAP-Verzeichnis (getrennt vom Büro-LDAP) |

---

### Monitoring und Audit

- **Backup-Protokolle** : für den Kunden direkt in der Cloud Temple Console sichtbar — Status (succès/échec), Datenvolumen, Zeitstempel.
- **Administrator-Zugriffsprotokolle** : Zugriffe auf die Backup-Infrastrukturen (orchestrateur, S3) werden protokolliert und **monatlich auditiert**, um Anomalien zu erkennen.
- **Penetrationstests (Pentests PASSI)** : Die Infrastruktur wird regelmäßig von qualifizierten PASSI-Dienstleistern Penetrationstests unterzogen, um die SecNumCloud-Zertifizierung aufrechtzuerhalten.
- **Physische Sicherheit** : Alle Geräte befinden sich in den SecNumCloud-Zonen (cages physiques dédiées avec contrôle d'accès biométrique) der Cloud Temple Rechenzentren.

---

### Kompatibilität und Sonderfälle

:::warning[VMs mit kontinuierlichen Festplattenschreibzugriffen]
Bestimmte virtuelle Maschinen sind mit dieser Sicherungstechnologie nicht kompatibel, wenn ihre **Festplattenschreiblast konstant ist** (aktive Datenbanken, Transaktionsprotokolle usw.). Der Hypervisor kann den Snapshot dann nicht abschließen, ohne die VM einzufrieren, was mehrere Stunden dauern kann.

Für diese Workloads empfehlen wir, die **Hypervisor-Sicherung durch eine Anwendungssicherung zu ergänzen oder zu ersetzen**: Datenbank-Dumps (pg_dump, mysqldump…), agentenbasierte Sicherungen oder nativer Anwendungsexport.
:::

---

### Erstellen einer Sicherungsrichtlinie

Das Erstellen einer Sicherungsrichtlinie ist eine Verwaltungsaufgabe, die **ausschließlich über eine Supportanfrage** durchgeführt wird, die über das Rettungsring-Symbol oben rechts in der Benutzeroberfläche aufgerufen werden kann.

Die Anfrage muss folgende Angaben enthalten:

- Der Name Ihrer Organisation
- Kontaktdaten einer Ansprechperson (E-Mail und Telefonnummer) zur Fertigstellung der Konfiguration
- Der Name des Tenants
- Der Name der Sicherungsrichtlinie
- Gewünschte Eigenschaften: Häufigkeit, Aufbewahrungsfrist (x Tage, y Wochen, z Monate…)

#### Planungsbeschränkungen

| Beschränkung | Wert |
|---|---|
| **Mindestintervall zwischen zwei Ausführungen** | 24 Stunden |
| **Maximale Aufbewahrungsdauer** | 24 Monate |
| **Gleichzeitige Ausführungen pro Richtlinie** | 1 gleichzeitig |

:::warning[Eine Richtlinie kann nur einmal gleichzeitig ausgeführt werden]
Jede Backup-Richtlinie ist **mono-instanzig** : Es kann nur eine Ausführung gleichzeitig aktiv sein.

**Praktische Konsequenz** : Wenn Sie viele virtuelle Maschinen zu einer bestehenden Richtlinie hinzufügen und das Backup vom Vortag zum geplanten Auslösezeitpunkt noch nicht abgeschlossen ist, **wird der neue Zyklus nicht gestartet** — er wird bis zum nächsten Auslösezeitpunkt ignoriert.

Um dies zu vermeiden:
- überprüfen Sie die **Ausführungsdauern** Ihrer Jobs in den Protokollen der Cloud Temple Console,
- passen Sie die **Häufigkeit** oder den **Umfang der Richtlinie** an, wenn Sicherungen regelmäßig in das nächste Zeitfenster überlaufen,
- erwägen Sie, **VMs auf mehrere Richtlinien** mit versetzten Zeitplänen aufzuteilen, um große Umfänge zu bewältigen.
:::

:::info[Langzeit-Aufbewahrung — zukünftige Verfügbarkeit]
**Die maximale Aufbewahrungsdauer beträgt derzeit 24 Monate.** Eine Langzeit-Aufbewahrung (bis zu 10 Jahre) wird mit dem Launch unseres Produkts **Glacier** eingeführt, der für das **erste Quartal 2027** geplant ist, als Zusatzabonnement.

Bei derart langen Aufbewahrungsdauern empfehlen wir, **ausschließlich flache Dateien** (Rohdateien, statische Dokumente) sowie **Datenbank-Dumps** zu sichern. Die Wiederherstellung eines vollständigen Servers nach 10 Jahren ist mit erheblichen Risiken verbunden: Viele Dienste oder Abhängigkeiten könnten veraltet oder mit der aktuellen Umgebung inkompatibel sein.

**Sofort verfügbare Alternative** : der Dienst der **agentgestützten Sicherung**, ebenfalls als Zusatzabonnement verfügbar. Wenden Sie sich für weitere Informationen an den Support.
:::

## virtuelle Maschinen

### Verwaltung von vCPU-Ressourcen

Änderungen an den vCPU-Ressourcen erfolgen im kalten Zustand (Maschine ausgeschaltet). Die Plattform unterstützt bis zu 254 vCPUs pro virtuelle Maschine (theoretisches Limit), wobei erfolgreiche Tests mit Linux-VMs mit 128 vCPUs durchgeführt wurden.

Wichtig ist zu beachten, dass die Unterstützung des Gast-Betriebssystems ein entscheidender Faktor bei der Ressourcenallokation darstellt. Eine Allokation, die die vom Betriebssystem unterstützten Grenzen überschreitet, kann zu erheblichen Performance-Problemen führen.

### Verwaltung der Speicherressourcen

Speicheranpassungen erfolgen ebenfalls offline. Die folgenden Grenzen gelten:

- 1,5 TiB mit Unterstützung von Speicher-Snapshots
- 8 TiB ohne Unterstützung von Speicher-Snapshots
- 16 TiB (theoretisches Limit ohne Sicherheitsunterstützung, abzüglich des Xen und der Kontrolldomäne zugewiesenen RAM)

Der tatsächlich nutzbare Speicher kann durch das Gastbetriebssystem begrenzt sein. Das Überschreiten der vom Gast-Betriebssystem unterstützten Grenzen kann zu Performanceeinbußen führen.

### Datenträgerverwaltung

- Die maximale Größe eines Datenträgers beträgt 2 TB
- Datenträger verwenden das Standard-VHD-Format
- Die maximale Anzahl virtueller Datenträger pro virtueller Maschine, einschließlich CD-ROM-Laufwerken, beträgt 24

Datenträger können nach der Erstellung nicht vergrößert werden. Um die Speicherkapazität zu erweitern, muss ein neuer Datenträger erstellt werden.

### Tools für virtuelle Maschinen

Diese Tools werden verwendet, um einen optimalen Betrieb der virtuellen Maschinen zu gewährleisten. Wenn Sie eine Aktion durchführen möchten und eines dieser Tools erforderlich ist, wird auf der Cloud Temple-Konsole eine Meldung angezeigt.

Um diese Tools zu installieren, können Sie die offiziellen Xen Server-Websites konsultieren, um eine genaue Vorgehensweise für Ihr Betriebssystem zu erhalten.

#### Management Agent

Der Management Agent ist eine Komponente, die in jeder virtuellen Maschine installiert wird. Er ermöglicht dem Hypervisor eine effizientere Verwaltung der Maschine durch den Zugriff auf mehr Informationen und erlaubt die sauberere Ausführung bestimmter Aktionen.

#### PV-Treiber (Paravirtualisierungstreiber)

PV-Treiber sind Treiber, die in der virtuellen Maschine installiert werden, um deren Leistung zu verbessern.
Ohne diese Treiber funktioniert die Maschine, jedoch langsamer. Darüber hinaus ermöglichen sie bestimmte erweiterte Funktionen.
PV-Treiber sind nativ in den meisten aktuellen Linux-Kernels installiert.

#### Tools

Die Tools sind eine Reihe von Softwarekomponenten, die die Integration der virtuellen Maschine in die Virtualisierungsinfrastruktur verbessern.

## Kataloge

Der Katalog ermöglicht die Verwaltung von drei wesentlichen Elementtypen:

- Festplatten-Images (ISO)
- Konfigurationsvorlagen
- Vorinstallierte Vorlagen für virtuelle Maschinen

In der Detailansicht einer Vorlage für virtuelle Maschinen können Sie wichtige Informationen wie den Speicherort, die Anzahl der Festplatten oder die Anzahl der Netzwerkadapter einsehen.

Wenn die Anzahl der virtuellen Festplatten als 0 angegeben ist, handelt es sich um eine Konfigurationsvorlage ohne vorinstalliertes Betriebssystem, sodass Sie Ihre eigene benutzerdefinierte Umgebung bereitstellen können.

## Replikation virtueller Maschinen

Die __Replikation virtueller Maschinen__ von Cloud Temple gewährleistet den Schutz und die Kontinuität Ihrer kritischen Daten durch eine automatisierte Kopie Ihrer Umgebungen in eine separate Verfügbarkeitszone. Diese Funktion, die nativ in das IaaS Open Source Produkt integriert ist, erfüllt die strengsten Anforderungen an Geschäftskontinuität und Disaster Recovery.

### Automatisierter und sicherer Schutz

Die Cloud-Temple-Replikation basiert auf einer __SecNumCloud-zertifizierten Infrastruktur__, die folgende Aspekte gewährleistet:

- __Asynchrone Replikation__: Kontinuierliche Kopie Ihrer virtuellen Maschinen ohne Beeinträchtigung der Produktionsleistung
- __Geografische Trennung__: Speicherung der Replikate in einer anderen Verfügbarkeitszone als der Quelle
- __Vollständige Automatisierung__: Vollständig automatisierter Prozess über die [Cloud-Temple-Konsole](../console/console.md)
- __Regulatorische Konformität__: Einhaltung der Anforderungen an Datensicherung und Geschäftskontinuität

### Vorteile der Replikation

| Vorteil                 | Beschreibung                                                                                                                                   |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Geschäftskontinuität    | Schutz Ihrer kritischen Dienste bei einem schwerwiegenden Vorfall auf dem primären Standort.                                                   |
| Geografischer Schutz    | Replikation in eine separate Verfügbarkeitszone zum Schutz vor lokalen Katastrophen.                                                          |
| Zeitliche Flexibilität  | Wahl des Replikationsintervalls nach Ihren Anforderungen: von 1 Minute bis zu 24 Stunden.                                                      |
| Einfache Verwaltung     | Konfiguration und Überwachung vollständig in die Cloud Temple Console integriert.                                                              |
| SecNumCloud-Konformität | Qualifizierte Infrastruktur, die das höchste Sicherheitsniveau für Ihre sensiblen Daten gewährleistet.                                         |

### Konfiguration der Replikation

#### Replikationsrichtlinien

Die Erstellung einer Replikationsrichtlinie definiert die Schutzeinstellungen für Ihre virtuellen Maschinen:

- __Ziel__ : Auswahl des Zielspeichers in der Verfügbarkeitszone für die Replikation
- __Häufigkeit__ : Replikationsintervall, angepasst an Ihre Wiederherstellungsanforderungen (RPO)
- __Aufbewahrung__ : Anzahl der aufbewahrten Wiederherstellungspunkte

#### Verfügbare Intervalle

| Intervall              | Empfohlene Verwendung                           | RPO (Maximaler Datenverlust) |
|-------------------------|--------------------------------------------|-----------------------------|
| __1 bis 59 Minuten__      | Kritische Echtzeitanwendungen         | < 1 Stunde                   |
| __1 bis 24 Stunden__       | Geschäftsanwendungen und Standardumgebungen | < 24 Stunden               |

#### Zuordnung der virtuellen Maschinen

Sobald die Richtlinie erstellt wurde, können Sie Ihre zu schützenden virtuellen Maschinen zuordnen:

- __Einfache Auswahl__ : Auswahl der VMs über die Konsole
- __Automatische Validierung__ : Überprüfung der Kompatibilität und Voraussetzungen
- __Sofortige Aktivierung__ : Automatischer Start der Replikation nach der Konfiguration

### Replikmanagement

#### Richtlinienübersicht

Die Cloud Temple-Konsole bietet eine zentralisierte Übersicht Ihrer Replikationsrichtlinien mit:

- Name und Häufigkeit jeder Richtlinie
- Ziel-Verfügbarkeitszone
- Zugehöriger Pool und Speicher
- Verfügbare Verwaltungsaktionen

#### Replikatsansicht

Die Replikattabelle ermöglicht es Ihnen, Folgendes anzuzeigen:

- Name der replizierten virtuellen Maschinen
- Quell- und Zielstandort
- Zugehörige Replikationsrichtlinie
- Export der Daten im CSV-Format

### Best Practices

#### Empfehlungen nach Workload-Typ

- __Kritische Anwendungen__ : Replikation alle 1-30 Minuten, um Datenverlust zu minimieren
- __Geschäftsanwendungen__ : Stündliche oder zweistündliche Replikation je nach Bedarf
- __Entwicklungsumgebungen__ : Tägliche Replikation ist in der Regel ausreichend

#### Richtlinienplanung

- Erstellen Sie separate Richtlinien basierend auf der Kritikalität Ihrer Anwendungen
- Benennen Sie Ihre Richtlinien klar, um das Management zu erleichtern
- Überprüfen Sie regelmäßig den Status Ihrer Replikate über die Konsole
- Dokumentieren Sie Ihre Replikationsstrategie für Ihre Teams

__Wichtiger Hinweis:__

*Die Replikation ersetzt keine vollständige Backup-Strategie. Sie ist eine wesentliche Ergänzung, um die Geschäftskontinuität im Falle eines schwerwiegenden Vorfalls auf Ihrem primären Standort sicherzustellen.*

## Hohe Verfügbarkeit

Die hohe Verfügbarkeit gewährleistet die Betriebskontinuität virtueller Maschinen (VMs) im Falle eines Ausfalls eines physischen Hosts innerhalb eines OpenIaaS-Pools.
Bei hoher Verfügbarkeit (HA) sendet jeder Host im Pool regelmäßig Lebenssignale an seine Peer-Hosts über den gemeinsamen Speicher (Block Storage Heartbeat). Bei ausbleibenden Antworten über einen längeren Zeitraum gilt der Host als ausgefallen.

Ein als Heartbeat konfiguriertes Block Storage dient als Grundlage zur Überprüfung von Hosts, die nicht mehr antworten.

Für eine korrekte Konfiguration der hohen Verfügbarkeit in einem OpenIaaS-Pool ist zwingend erforderlich, dass __mindestens zwei Hosts__ verbunden sind.

Jede VM muss mit einer Prioritätsstufe für den Neustart im Rahmen der hohen Verfügbarkeit konfiguriert werden:

#### Disabled

  Die Hochverfügbarkeit ist nicht konfiguriert. Bei einem Ausfall des Hosts wird die virtuelle Maschine nicht neu gestartet.

#### Restart

  Bei einem Host-Ausfall wird die virtuelle Maschine automatisch neu gestartet, sobald im Pool Ressourcen verfügbar sind. Virtuelle Maschinen, die im Modus "restart" konfiguriert sind, werden vorrangig behandelt, vor denen, die im Modus "best-effort" konfiguriert sind.

#### Best-Effort  

  Im Falle eines Host-Ausfalls wird die virtuelle Maschine nur dann automatisch neu gestartet, wenn nach der Verarbeitung aller im Modus "restart" konfigurierten virtuellen Maschinen noch Ressourcen verfügbar sind. Der Modus "Best-Effort" unternimmt nur einen Versuch, daher wird die virtuelle Maschine nicht neu gestartet, wenn die Ressourcen nicht ausreichen.