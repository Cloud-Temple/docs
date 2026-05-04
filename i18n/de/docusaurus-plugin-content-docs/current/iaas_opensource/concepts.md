---
title: Concepts
---

The __IaaS (Infrastructure as a Service)__ offering from Cloud Temple is designed to meet the critical requirements for business continuity and disaster recovery, with a particular focus on demanding sectors such as industry, banking, and insurance. Built on cutting-edge technologies, this infrastructure ensures maximum availability and optimal performance for your critical workloads.

## A trusted technology platform

The Cloud Temple IaaS platform is built on internationally recognized technology partners:

- Compute: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage, and __DELL ECS__ for object storage.
- Networking: __JUNIPER__.
- Virtualization: __Open source stack__, providing a reliable and proven foundation for managing your cloud environments.

This architecture is based on the __VersaStack__ model, a collaboration between Cisco and IBM, ensuring broad compatibility with major software vendors.

## A dedicated and automated infrastructure

Although fully automated via APIs and a Terraform provider, Cloud Temple's IaaS offering provides a unique infrastructure:

- __Dedicated resources__: Compute blades, storage volumes, and software stacks (virtualization, backup, firewalling, etc.) are never shared among clients.
- __Maximum predictability__: You have full control over virtualization rates, storage IOPS load, and benefit from clear, consumption-based monthly billing.

The platform is certified __SecNumCloud__ by the [ANSSI](https://www.ssi.gouv.fr/), ensuring a high level of automation and security.

## Hauptfunktionen

- Dedicated und on-demand Rechenressourcen (CPU, RAM).
- On-demand Speicher (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuzsicherungen mit konfigurierbarer Aufbewahrungszeit.
- Asynchrone Replikation für Speicher oder virtuelle Maschinen.
- Steuerung über die [Console](../console/console.md) oder im Infrastructure-as-Code-Modus über APIs und den Terraform-Provider.

## Vorteile

| Vorteil              | Beschreibung                                                                                                                                    |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Digitale Vertrauenswürdigkeit | Speicherung von Daten in Frankreich und Einhaltung der DSGVO.                                                                                  |
| Sicherheit           | Hochsichere Plattform, zertifiziert __SecNumCloud__, __HDS__ (Hospizierung sensibler Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__. |
| Hohe Verfügbarkeit   | Plattformverfügbarkeit von 99,99 %, monatlich gemessen, inklusive Wartungszeiträume.                                                             |
| Resilienz            | Implementierung von Kontinuitäts- oder Wiederherstellungsplänen je nach Bedarf.                                                                   |
| Automatisierung      | Vollständig automatisierte Plattform, entwickelt für die Integration in ein digitales Transformationsprogramm.                                 |
| On-Demand            | Ressourcen sind nach Bedarf verfügbar.                                                                                                          |

## Regions and Availability Zones

The OpenIaaS product is deployed within an availability zone.  
An availability zone is part of a region.

This deployment model allows you to select the location of clusters and distribute them across different availability zones (AZ).  
This provides better load distribution, maximizes redundancy, and facilitates the implementation of a disaster recovery plan (DRP) in the event of an incident.

## Compute Blade Classes

The available compute blades for the Bare Metal offering provide a range of performance options to meet diverse requirements:

| Reference             | RAM  __(1)__ | Frequency __(2)__                         | Number of Cores / Threads | Connectivity __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 GB       | 2.20/3.0 GHz (Silver 4114 or equivalent)  | 20 / 40 threads           | 2 × 10 Gbit/s        | -                    |
| __STANDARD__         | 384 GB       | 2.40/3.4 GHz (Silver 4314 or equivalent)  | 32 / 64 threads           | 2 × 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 GB       | 2.80/3.5 GHz (Gold 6342 or equivalent)    | 48 / 96 threads           | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y or equivalent) | 16 / 32 threads           | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 GB       | 3.00/3.6 GHz (Gold 6354 or equivalent)    | 36 / 72 threads           | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 GB      | 2.60/3.5 GHz (Gold 6348 or equivalent)    | 56 / 112 threads          | 2 × 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 GB       | 2.50/4.1 GHz (Intel 6426Y or equivalent)  | 32 / 64 threads           | 2 × 25 Gbit/s        | 2 × NVIDIA L40S 48GB |

### Notes

- __(1)__ The amount of memory is the physically available memory on the blades and cannot be modified.
- __(2)__ The frequencies listed correspond to the minimum base frequency and the turbo frequency.
- __(3)__ Physical connectivity is shared for network access and block storage access, thanks to a converged Cisco UCS architecture.
- __(4)__ Available GPUs evolve with the latest technologies. As of May 1, 2024, the offering includes NVIDIA LOVELACE L40S GPUs.
- __(5)__ High availability on a cluster is available only with a minimum of 2 nodes.

Infrastructure availability is guaranteed at 99.9%, measured monthly, including maintenance windows. Any SLA-related request must be reported via an incident ticket.

## Block Storage Classes

Distributed block storage, based on __IBM Spectrum Virtualize__, offers a range of performance tiers suited for various use cases:

| Reference                         | IOPS/To                 | Primary Use Case                       |
|-----------------------------------|-------------------------|----------------------------------------|
| __FLASH - Essential__             | 500                     | Light workloads                        |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | 30 000 IOPS               | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | 30 000 IOPS               | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | 30 000 IOPS               | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | 30 000 IOPS               | 1024 Mo/s                   | csp:(region):iaas:storage:bloc:ultra:v1      |
| __MASS STORAGE - Archival__       | Not applicable          | Cost-effective storage for archival    |

### Features

- __Technology__: Flash NVMe with __Distributed RAID 6__ for enhanced resilience.
- __Availability__: 99.99%, measured monthly.
- __Restrictions__: No limits on reads or writes. No automatic compression or deduplication, ensuring full utilization of allocated volumes.

### Storage Block Security and Encryption

To ensure the confidentiality of your data at rest, our entire block storage infrastructure integrates a robust hardware-based encryption.

- __Encryption Type__: Data is encrypted directly on the disks (`Data At Rest`) using the __XTS-AES 256__ algorithm.
- __Compliance__: This encryption method complies with the __FIPS 140-2__ standard, ensuring a high level of validated security.
- __Operation__: Encryption is applied at the time data is written to the physical storage medium.

:::warning[Attention regarding replication]
It is important to note that this encryption protects data stored on disks. It is not active "on-the-fly," meaning data is not encrypted during storage replication operations between availability zones. Security of transfers is ensured through dedicated and secure communication channels.
:::

---

## Networks

The OpenIaaS product is compatible with [private networks](../network/private_network) and [internet access](../network/internet).

Two types of networks are available from the virtual machine configuration.

### VLAN networks

VLAN networks must be deployed at a rate of one VLAN per network interface card. If you want to use multiple networks, simply create multiple network interface cards.

A limitation exists regarding the maximum number of network cards that can be created on a VM, which is 7.

### VLAN Trunk

When you need to propagate more than 7 VLANs, you must use a VLAN Trunk.  
The VLAN Trunk allows all your VLANs to pass through a single network interface. VLAN ID configuration must be performed via virtual VLAN interfaces from the VM's operating system. The VLAN IDs are the same as those present and visible from the console.

## Sicherung von virtuellen Maschinen

Das OpenIaaS-Angebot umfasst eine __native, nicht abschaltbare verteilte Backup-Architektur__, ein obligatorisches Element im Rahmen der französischen SecNumCloud-Qualifizierung.

Sicherungen werden im [SecNumCloud-qualifizierten Objektspeicher](../storage/oss) gespeichert und gewährleisten optimalen Schutz bei einem schwerwiegenden Ausfall des Produktions-Rechenzentrums. Dieser Ansatz ermöglicht die Wiederherstellung Ihrer Daten in einem sekundären Rechenzentrum, selbst bei kritischen Vorfällen wie Bränden.

### Verfügbare Datenschutzdienste

| Dienst | Beschreibung |
|---|---|
| **Inkrementelles Backup (Agentless)** | Agentenloses Backup über native Hypervisor-Mechanismen, in ein entferntes S3-Repository. |
| **Metadaten-Backup** | Schutz der Konfigurationen des Virtualisierungspools und des Backup-Orchestrators — unverzichtbar für Disaster Recovery. |
| **Granulare Wiederherstellung** | Wiederherstellung auf Ebene einer vollständigen VM, einzelner virtueller Festplatte oder einzelner Datei. |
| **S3 Multi-AZ Offloading** | Auslagerung in den S3-Objektspeicher von Cloud Temple, repliziert über Verfügbarkeitszonen. |

Backup- und Wiederherstellungsgeschwindigkeiten hängen von der Änderungsrate in den Umgebungen ab. Die Backup-Richtlinie ist für jede virtuelle Maschine über die [Cloud Temple Konsole](../console/console.md) vollständig konfigurierbar.

| Referenz | Einheit | Max IOPS Limit / LUN | Max Bandbreite / LUN | SKU |
|---|---|---|
| BACKUP - Servicezugang | 1 VM | csp:(region):openiaas:backup:vm:v1 |

---

### Technische Backup-Architektur

#### Überblick

Die Architektur basiert auf einer strikten Trennung zwischen der **Steuerungsebene** (Backup-Orchestrator) und der **Datenebene** (entfernter S3-Speicher): Der Backup-Orchestrator wird im Management-Cluster von Cloud Temple gehostet (vom Client getrennt und nicht direkt zugänglich), während die Backup-Daten in einem entfernten S3-Repository gespeichert werden, das physisch von der Produktionsinfrastruktur getrennt ist. Daten werden verschlüsselt über HTTPS/TLS 1.3 übertragen.

#### Backup-Orchestrator

Der Orchestrator wird im Management-Cluster von Cloud Temple bereitgestellt und ist **für den Client nicht direkt zugänglich**. Er koordiniert alle Backup-Jobs und verwaltet die Verschlüsselung.

- **Standardrichtlinien**: Backup-Richtlinien werden standardmäßig auf jeden Mandanten angewendet.
- **Benutzerdefinierte Richtlinien**: Der Client kann spezifische Häufigkeiten oder Aufbewahrungszeiten über ein Support-Ticket in der Cloud Temple Konsole anfordern.

#### Entfernter S3-Speicher

Backups werden an den [SecNumCloud-qualifizierten Objektspeicher](../storage/oss) von Cloud Temple gesendet, mit Multi-AZ-Replikation für Resilienz beim Ausfall eines gesamten physischen Standorts.

---

### Backup-Mechanismus: Inkrementelles Backup

Der Dienst verwendet einen **inkrementellen** Backup-Modus. Dieser Modus zielt auf ein **Backup Repository** (den entfernten S3-Speicher) ab und exportiert nach dem ersten Mal nie ein vollständiges Backup: Es werden nur die **geänderten Datenblöcke** bei jedem Zyklus übertragen.

:::info[Inkrementelles Backup vs. Replikation]
Das **inkrementelle Backup** zielt auf ein entferntes S3-Repository ab und ist für den **Langzeitschutz** optimiert. Es sollte nicht mit der **Replikation** (Hot Disaster Recovery) verwechselt werden, die auf ein lokales Storage Repository abzielt — dieser Modus wird durch die Funktion [Replikation virtueller Maschinen](#replikation-von-virtuellen-maschinen) abgedeckt.
:::

#### Lebenszyklus eines inkrementellen Backups

**1. Erstellung des lokalen Snapshots (Quelle)**

Beim Start des Jobs fordert der Orchestrator den Hypervisor auf, einen VM-Snapshot zu erstellen. Dieser Snapshot dient als Vergleichspunkt zur Berechnung des Deltas gegenüber dem vorherigen Referenz-Snapshot.

**2. Differenzieller Export über Changed Block Tracking (CBT)**

Der Orchestrator vergleicht den neuen Snapshot mit dem vorherigen Referenz-Snapshot anhand von CBT-Metadaten. Es werden nur Datenblöcke extrahiert, die sich seit dem letzten Backup geändert haben.

**3. Verschlüsselung und Übertragung zu S3**

Geänderte Blöcke werden **vom Orchestrator on-the-fly verschlüsselt** und dann über HTTPS/TLS 1.3 an den entfernten S3-Bucket gesendet.

**4. Snapshot-Rotation (Coalesce)**

Nach der Übertragung wird der alte Referenz-Snapshot gelöscht, und der neue Snapshot wird zur Referenz für den nächsten Zyklus. Der Hypervisor löst dann einen **Coalesce**-Prozess (Zusammenführung) aus.

:::warning[I/O-Auswirkung des Coalesce]
Der Coalesce-Vorgang ist **I/O-intensiv** auf dem Produktionsspeicher. Er wird automatisch nach jedem erfolgreichen Backup ausgelöst. Es wird empfohlen, Backup-Fenster in Zeiten geringer Anwendungslast zu planen.
:::

**5. S3-Aufbewahrungsverwaltung (Merge) und Key Backup Interval**

Im S3-Speicher verwaltet der Orchestrator die Backup-Rotation durch das Zusammenführen alter Deltas. Ein vollständiges Backup wird **regelmäßig erzwungen** (typischerweise alle 20 Inkremente — *Key Backup Interval*).

---

### Auswirkungen auf die Dimensionierung des Produktionsspeichers

:::warning[Kritischer Hinweis — Block-Speicher (Thick Provisioning)]
Das OpenIaaS-Angebot basiert auf hochleistungsfähigem Block-Speicher (Fibre Channel / LVM). Snapshots werden im **Thick**-Modus bereitgestellt: Jeder Snapshot verbraucht auf dem Storage Repository (SR) die **vollständige Nominalgröße der VM-Festplatte**.

**Verbrauchsbeispiel für eine VM mit einer 50-GB-Festplatte:**

| Element | Verbrauch auf SR |
|---|---|
| Aktive VM-Festplatte | 50 GB |
| Permanenter Referenz-Snapshot | 50 GB |
| Temporärer Snapshot während des Exports | 50 GB |
| **Gesamt während Backup-Fenster** | **bis zu 150 GB** |

**Empfohlene Dimensionierungsregel**: mindestens **50% freien Speicherplatz** im Produktionsspeicher einplanen.
:::

---

### Backup-Sicherheit und Verschlüsselung

#### Verschlüsselung bei der Übertragung

Alle Kommunikationen zwischen dem Backup-Orchestrator und S3-Speicher werden über **HTTPS / TLS 1.3** verschlüsselt.

#### Verschlüsselung im Ruhezustand und Schlüsselverwaltung

| Parameter | Wert |
|---|---|
| **Algorithmus** | AES-256 oder ChaCha20-Poly1305 |
| **Schlüsselgenerierung** | Automatisch bei der Bereitstellung des Backup-Orchestrators |
| **Schlüsselspeicherung** | Zentralisierter Vault von Cloud Temple (nie in der Client-Oberfläche sichtbar) |
| **Resilienz** | Bei Verlust des Orchestrators wird der Schlüssel aus dem Vault neu eingespielt |

#### Netzwerkisolierung (SecNumCloud-Architektur)

- **Physische Trennung**: *Client*-, *Administrations*- und *Backup*-Netzwerke basieren auf separaten physischen Backbones und getrennten Routing-Kontexten (VRF).
- **Kein laterales Infektionsrisiko**: Eine kompromittierte VM kann weder den S3-Speicher noch den Backup-Orchestrator erreichen.

#### Sichere Administration

| Kontrolle | Maßnahme |
|---|---|
| **Zugriffsbastion** | Pflichtdurchgang über eine gehärtete interne Administrationsbastion (Ubuntu Hardened) |
| **Arbeitsstation** | Zugang nur von dedizierten und gesicherten Administrationslaptops |
| **Authentifizierung** | Pflicht-MFA über ein dediziertes LDAP-Administrationsverzeichnis |

---

### Monitoring und Audit

- **Backup-Protokolle**: für den Client direkt in der Cloud Temple Konsole sichtbar — Status (Erfolg/Fehler), Volumen, Zeitstempel.
- **Administratorzugriffsprotokolle**: Zugriffe auf Backup-Infrastruktur werden protokolliert und **monatlich geprüft**.
- **Penetrationstests (PASSI)**: regelmäßige Pentests durch PASSI-qualifizierte Anbieter.
- **Physische Sicherheit**: Alle Geräte in SecNumCloud-Zonen (dedizierte physische Käfige mit biometrischer Zugangskontrolle).

---

### Kompatibilität und Sonderfälle

:::warning[VMs mit kontinuierlichen Festplattenschreibvorgängen]
Einige virtuelle Maschinen sind mit dieser Backup-Technologie nicht kompatibel, wenn ihre **Festplattenschreiblasten konstant** sind (aktive Datenbanken, Transaktionsprotokolle usw.). Der Hypervisor kann dann den Snapshot nicht ohne Einfrieren der VM abschließen.

Für diese Workloads wird empfohlen, das Hypervisor-Backup durch ein **anwendungsbasiertes Backup zu ergänzen oder zu ersetzen**: Datenbank-Dump (pg_dump, mysqldump…), agentenbasiertes Backup oder nativer Anwendungsexport.
:::

---

### Erstellen einer Backup-Richtlinie

Das Erstellen einer Backup-Richtlinie ist ein Administrationsvorgang, der **ausschließlich über eine Support-Anfrage** durchgeführt wird, die über das Rettungsring-Symbol oben rechts in der Oberfläche zugänglich ist.

Die Anfrage muss folgendes angeben:

- Den Namen Ihrer Organisation
- Kontaktdaten (E-Mail und Telefon)
- Den Mandantennamen
- Den Namen der Backup-Richtlinie
- Gewünschte Eigenschaften: Häufigkeit, Aufbewahrung (x Tage, y Wochen, z Monate…)

#### Planungsbeschränkungen

| Einschränkung | Wert |
|---|---|
| **Mindestintervall zwischen zwei Ausführungen** | 24 Stunden |
| **Maximale Aufbewahrung** | 24 Monate |
| **Gleichzeitige Ausführungen pro Richtlinie** | 1 gleichzeitig |

:::warning[Eine Richtlinie kann nur einmal gleichzeitig ausgeführt werden]
Jede Backup-Richtlinie ist **Einzelinstanz**: Es kann nur eine Ausführung gleichzeitig aktiv sein.

**Praktische Konsequenz**: Wenn das Backup des Vortags beim nächsten geplanten Auslöser noch nicht abgeschlossen ist, **wird der neue Zyklus nicht gestartet** — er wird bis zum nächsten Vorkommen übersprungen.

Um dies zu vermeiden: Überprüfen Sie die Ausführungszeiten in den Konsolen-Protokollen, passen Sie die Häufigkeit oder Größe der Richtlinie an oder verteilen Sie VMs auf mehrere Richtlinien mit versetzten Zeitplänen.
:::

:::info[Langzeitaufbewahrung — zukünftige Verfügbarkeit]
**Die maximale Aufbewahrung beträgt derzeit 24 Monate.** Eine Langzeitaufbewahrung (bis zu 10 Jahre) wird mit dem Start unseres Produkts **Glacier** integriert, geplant für **Q1 2027**, als ergänzendes Abonnement.

**Jetzt verfügbare Alternative**: der **agentenbasierte Backup**-Dienst, als ergänzendes Abonnement verfügbar. Kontaktieren Sie den Support für weitere Informationen.
:::

## Virtual Machines

### vCPU Resource Management

vCPU resource modifications are performed while the machine is powered off (cold). The platform supports up to 254 vCPUs per virtual machine (theoretical limit), with successful tests conducted on Linux VMs equipped with 128 vCPUs.

It is important to note that guest operating system support is a determining factor when allocating resources. Allocating resources beyond the limits supported by the guest operating system may result in significant performance issues.

### Memory Resource Management

Memory modifications are also performed cold. The following limits apply:

- 1.5 TiB with memory snapshot support
- 8 TiB without memory snapshot support
- 16 TiB (theoretical maximum, without security support, minus RAM allocated to Xen and the control domain)

The actual usable memory may be limited by the guest operating system. Exceeding the limits supported by the guest OS can result in performance degradation.

### Disk Management

- The maximum size of a disk is 2 TB
- Disks use the standard VHD format
- The maximum number of virtual disks per virtual machine, including CD-ROM drives, is 24

It is not possible to resize disks after they have been created. To increase storage capacity, a new disk must be created.

### Tools for Virtual Machines

These tools are used to ensure optimal operation of virtual machines. When you wish to perform an action requiring one of these tools, a message will appear on the Cloud Temple console.

To install these tools, you can consult the official Xen Server websites to obtain precise instructions based on your OS.

#### Management Agent  

The Management Agent is a component installed on each virtual machine. It enables the hypervisor to better manage the machine by providing access to more information and allows certain actions to be performed more cleanly.

#### PV Treiber (Paravirtualisierungstreiber)

Die PV-Treiber sind Treiber, die in der virtuellen Maschine installiert werden, um deren Leistung zu verbessern.  
Ohne diese Treiber funktioniert die Maschine zwar, ist aber langsamer. Außerdem ermöglichen sie erweiterte Funktionen.  
Die PV-Treiber sind in der Regel nativ in den meisten aktuellen Linux-Kernen enthalten.

#### Tools  

Tools sind eine Reihe von Softwarekomponenten, die die Integration der virtuellen Maschine mit der Virtualisierungsinfrastruktur verbessern.

## Catalogs

The catalog allows you to manage three essential types of items:

- Disk images (ISO)
- Configuration templates
- Pre-installed virtual machine templates

In the detailed view of a virtual machine template, you can review crucial information such as location, number of disks, and number of network adapters.

When the number of virtual disks is listed as 0, this indicates a configuration template without a preinstalled operating system, allowing you to deploy your own customized environment.

## Virtual Machine Replication

The __Virtual Machine Replication__ feature of Cloud Temple ensures the protection and continuity of your critical data by automatically creating copies of your environments in a separate availability zone. This functionality, natively integrated into the Open Source IaaS offering, meets the most stringent requirements for business continuity and disaster recovery.

### Automated and Secure Protection

Cloud Temple replication is based on a __SecNumCloud-certified__ infrastructure, ensuring:

- __Asynchronous replication__: Continuous copying of your virtual machines without impacting production performance  
- __Geographic separation__: Replicas stored in a different availability zone than the source  
- __Full automation__: Fully automated process via the [Cloud Temple Console](../console/console.md)  
- __Regulatory compliance__: Adherence to backup and business continuity requirements

### Benefits of Replication

| Benefit                 | Description                                                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Business Continuity     | Protection of your critical services in the event of a major incident at the primary site.                                                    |
| Geographic Protection   | Replication to a distinct availability zone, safeguarding against localized disasters.                                                         |
| Temporal Flexibility    | Choice of replication interval according to your needs: from 1 minute to 24 hours.                                                            |
| Ease of Management      | Configuration and monitoring fully integrated into the Cloud Temple Console.                                                                  |
| SecNumCloud Compliance  | Qualified infrastructure ensuring the highest level of security for your sensitive data.                                                     |

### Replication configuration

#### Replication Policies

Creating a replication policy defines the protection settings for your virtual machines:

- __Destination__: Selection of the target storage within the replication availability zone  
- __Frequency__: Replication interval tailored to your recovery point objective (RPO) requirements  
- __Retention__: Number of recovery points to retain

#### Verfügbare Intervalle

| Intervall               | Empfehlung für den Einsatz                | RPO (maximale Datenverlustgrenze) |
|-------------------------|-------------------------------------------|------------------------------------|
| __1 bis 59 Minuten__    | Kritische Echtzeit-Anwendungen            | < 1 Stunde                         |
| __1 bis 24 Stunden__    | Geschäftsanwendungen und Standardumgebungen | < 24 Stunden                     |

#### Association of Virtual Machines

After creating the policy, you can associate your virtual machines to protect:

- __Single selection__: Select VMs from the Console interface  
- __Automatic validation__: Compatibility and prerequisites verification  
- __Immediate activation__: Automatic start of replication after configuration

### Replica Management

#### Policy Overview

The Cloud Temple Console provides a centralized view of your replication policies with:

- Name and frequency of each policy
- Destination availability zone
- Associated pool and storage
- Available management actions

#### Replica Overview

The replica table allows you to visualize:

- Names of replicated virtual machines  
- Source and target locations  
- Associated replication policy  
- Export of data in CSV format

### Best Practices

#### Recommendations by workload type

- __Critical applications__: Replication every 1–30 minutes to minimize data loss  
- __Business applications__: Hourly or bi-hourly replication depending on requirements  
- __Development environments__: Daily replication typically sufficient

#### Policy Planning

- Create distinct policies according to the criticality of your applications
- Clearly name your policies to facilitate management
- Regularly check the status of your replicas via the console
- Document your replication strategy for your teams

__Important Note:__

*Replication does not replace a full backup strategy. It serves as an essential complement to ensure business continuity in the event of a major incident at your primary site.*

## Hochverfügbarkeit

Die Hochverfügbarkeit stellt die kontinuierliche Dienstverfügbarkeit virtueller Maschinen (VMs) sicher, falls ein physischer Host innerhalb eines OpenIaaS-Pools ausfällt.  
Mit der Hochverfügbarkeit (HA) sendet jeder Host im Pool regelmäßig Lebenszeichen an seine Partner über den gemeinsam genutzten Speicher (Block Storage Heartbeat). Falls über einen längeren Zeitraum keine Antwort mehr erfolgt, wird der Host als ausgefallen betrachtet.

Ein als Heartbeat vorgesehener Block-Speicher bedeutet, dass er als Grundlage zur Authentifizierung von Hosts dient, die nicht mehr antworten.

Damit die Hochverfügbarkeit in einem OpenIaaS-Pool korrekt konfiguriert werden kann, ist es unbedingt erforderlich, über __mindestens zwei Hosts__ zu verfügen, die miteinander verbunden sind.

Jede VM muss mit einer Priorität für den Neustart im Rahmen der Hochverfügbarkeit konfiguriert werden:

#### Disabled  

High availability is not configured. In the event of host failure, the virtual machine will not be restarted.

#### Restart

In case of host failure, the virtual machine will be automatically restarted as soon as resources become available in the pool. Virtual machines configured in "restart" mode are prioritized over those configured in "best-effort" mode.

#### Best-Effort  

In the event of host failure, the virtual machine will be automatically restarted only if resources remain available after processing all virtual machines configured in "restart" mode. The "Best-effort" mode performs only a single attempt; therefore, if resources are insufficient, the virtual machine will not be restarted.
