---
Titel: Konzepte
---

Die Cloud-Angebot __IaaS (Infrastructure as a Service)__ von Cloud Temple ist konzipiert, um kritische Anforderungen an die Kontinuität und Wiederbelebung zu erfüllen, mit einem besonderen Fokus auf Branchen, die hohe Anforderungen stellen wie Industrie, Finanzwesen und Versicherung. Auf Basis von Hochleistungs-Technologien garantiert diese Infrastruktur eine maximale Verfügbarkeit und optimale Leistung für Ihre kritischen Lasten.

## A trustworthy technological platform

The Cloud Temple IaaS platform leverages renowned international technology partners:

- Computing: __CISCO UCS__.
- Storage: __IBM Spectrum Virtualize__, __IBM FlashSystem__ for block storage.
- Networking: __JUNIPER__.
- Virtualization: __VMware__, providing a reliable and proven foundation for managing cloud environments.
- Backup: __IBM Spectrum Protect Plus__, for orchestrating and storing backup data.

This architecture is built on the __VersaStack__ model, an alliance between Cisco and IBM, ensuring broad compatibility with major software vendors.

## Eine automatisierte, spezialisierte Infrastruktur

Obwohl die Cloud-Infrastruktur von Cloud Temple vollständig automatisiert wird durch APIs und Terraform, bietet sie eine einzigartige Lösung IaaS:

- **Dedizierte Ressourcen**: Die Rechenzentrumsrechner, Speichermedien und Softwarestacks (Virtualisierung, Backup, Firewalling usw.) werden niemals zwischen den Kunden verteilt.
- **Maximale Vorhersehbarkeit**: Sie haben die Virtualisierungsrate, die IOPS auf dem Speicher und profitieren von einer klar strukturierten Rechnung nach monatlicher Nutzung.

Die Plattform erfüllt die Anforderungen an **SecNumCloud** durch die [ANSSI](https://www.ssi.gouv.fr/), was einen hohen Automatisierungs- und Sicherheitsstandard garantiert.

## Hauptfunktionen

- Dedizierte und auf Anforderung bereitgestellte Rechenressourcen (CPU, RAM).
- Speicher auf Anforderung (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuzspeicherung mit konfigurierbarer Rettungsstelle.
- Asynchrone Replikation für Speicher oder virtuellen Server.
- Steuerung über die [Shiva-Konsole](../console/console.md) oder durch Infrastructure as Code via APIs und Terraform-Provider.

## Vorteile

| Vorteil            | Beschreibung                                                                                                                                   |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Vertrauen digitaler | Speicherung von Daten in Frankreich und Einhaltung der RGPD.                                                                                       |
| Sicherheit          | Plattform hochgesichert, zertifiziert __SecNumCloud__, __HDS__ (Speicherung von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__. |  
| Hohe Verfügbarkeit | Messwert der Plattformverfügbarkeit von 99,99% (monatlich), einschließlich Wartungszeiten.                                                        |
| Widerstandsfähigkeit | Implementierung von Notfallplänen nach Bedarf.                                                                                                      |
| Automatisierung      | Plattform vollständig automatisiert und konzipiert für die Integration in einen Digitalisierungs-Programm.                                       |
| Nach Bedarf verfügbar | Ressourcen zur Verfügung gestellt, sobald sie benötigt werden.                                                                                  |

## Régions und Zoneen der Verfügbarkeit

Das IaaS-Produkt VMware wird in einer Verfügbarkeitszone bereitgestellt.
Eine [Verfügbarkeitszone](https://.../additional_content/concepts_az.md) ist Teil einer [Region](https://.../additional_content/concepts_regional.md).

Diese Art des Deployment ermöglicht es, die Lokalisierung der Cluster auszuwählen und diese auf verschiedenen Verfügbarkeitszonen (AZ) zu verteilen.
Dadurch wird eine bessere Lastverteilung erreicht, maximiert die Redundanz und vereinfacht die Einrichtung eines Notfall-Wiederherstellungsplans (DRP) im Falle eines Störungsfalls.

---

## Berechnung

Die von Cloud Temple bereitgestellten Blades sind entweder vom Typ __CISCO UCS B200__ oder vom Typ __CISCO UCS X210c__. Sie werden vollständig von Cloud Temple verwaltet (Firmware-Updates, Betriebssystemversionen usw.) über die Cloud Temple-Konsole.

Mehrere Kategorien von Rechenblades sind im Katalog verfügbar, um Ihren Arbeitslastenanforderungen gerecht zu werden (Virtualisierung, Containerisierung usw.). Jede weist unterschiedliche Eigenschaften und Leistungen auf. Der Katalog der Rechenblades entwickelt sich regelmäßig weiter.

Im Kontext eines Virtualisierungsangebots besteht ein Hypervisor-Cluster ausschließlich aus Rechenblades desselben Typs (es ist nicht möglich, Blades verschiedener Typen in demselben Cluster zu mischen).

| Referenz              | RAM  __(1)__ | Frequenz __(2)__                          | Anzahl Kerne / Threads     | Konnektivität __(3)__ | GPU __(4)__          | SKU für VMware-Angebot          |
| --------------------- | ------------ | ----------------------------------------- | -------------------------- | -------------------- | -------------------- | ------------------------------- |
| Blade ECO v3          | 384 GB       | 2.20/3.0 GHz (Silver 4114 oder äquivalent) | 20 / 40 Threads            | 2 X 10 Gbit/s        |                      | csp:fr1:iaas:vmware:eco:v3      |
| Blade STANDARD v3     | 384 GB       | 2.40/3.4 GHz (Silver 4314 oder äquivalent) | 32 / 64 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:standard:v3 |
| Blade ADVANCE v3      | 768 GB       | 2.80/3.5 GHz (Gold 6342 oder äquivalent)   | 48 / 96 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:advance:v3  |
| Blade PERFORMANCE 1 v3| 384 GB       | 3.20/3.6 GHz (Xeon E-53I5Y oder äquivalent)| 16 / 32 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf1:v3    |
| Blade PERFORMANCE 2 v3| 768 GB       | 3.00/3.6 GHz (Gold 6354 oder äquivalent)   | 36 / 72 Threads            | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf2:v3    |
| Blade PERFORMANCE 3 v3| 1536 GB      | 2.60/3.5 GHz (Gold 6348 oder äquivalent)   | 56 / 112 Threads           | 2 X 25 Gbit/s        |                      | csp:fr1:iaas:vmware:perf3:v3    |
| Blade PERFORMANCE 4 v3| 512 GB       | 2.50/4.1 GHz (Intel 6426Y oder äquivalent) | 32 / 64 Threads            | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48GB | csp:fr1:iaas:vmware:perf4:v3    |

__Anmerkungen__:

- __(1)__ Die gelieferte Speichermenge entspricht der physisch verfügbaren Menge auf den Blades. Es ist nicht möglich, die physische Speichermenge eines Blades zu ändern.

- __(2)__ Basis-Mindestfrequenz / Turbo-Frequenz, ausgedrückt in GHz. Standardmäßig sind die Prozessoren für maximale Leistung auf BIOS-Ebene konfiguriert.

- __(3)__ Die physische Konnektivität wird für Netzwerk- und Block-Storage-Zugriff geteilt, da die CISCO-Plattform konvergiert ist.

- __(4)__ Das tatsächlich verfügbare GPU-Angebot entwickelt sich ständig weiter. Zum 1. Mai 2024 basiert das Angebot auf NVIDIA LOVELACE L40S GPUs. Standardmäßig wird das PERF4-Blade mit 2 L40S-Karten mit 48 GB RAM geliefert. Kontaktieren Sie den Support für weitere Details, falls erforderlich.

Die Verfügbarkeit des Rechenangebots beträgt 99,99%, monatlich berechnet, einschließlich Wartungsfenster. Die Berechtigung bei Nichteinhaltung des SLA (Service Level Agreement) ist an die Erstellung eines Incident-Tickets gebunden. Sie müssen außerdem mindestens zwei Hosts pro Cluster besitzen und die __High Availability__ (HA)-Funktionalität aktivieren. Diese Funktionalität ermöglicht es Ihrer Architektur, Ihre virtuellen Maschinen automatisch auf dem zweiten Hypervisor neu zu starten. Falls eine Verfügbarkeitszone nur einen einzigen Hypervisor enthält, ist der automatische Neustart nicht möglich.

## Netzwerk

Das Netzwerkspeicherdienstleistungsangebot von Cloud Temple basiert auf einer Netzwerkinfrastruktur, die auf der Technologie VPLS (Virtual Private LAN Service) basiert. Diese Infrastruktur ermöglicht eine flexible und leistungsstarke Segmentierung des Netzes, um den spezifischen Anforderungen der Kunden in Bezug auf Verbindung und Isolierung des Netzes gerecht zu werden.

### VLANs von Level 2

Die bereitgestellten VLANs im IaaS-Angebot sind vom Typ **Level 2**, sie bieten eine vollständige Netzwerkisolation sowie eine anpassbare Konfiguration nach Bedarf.

#### Hauptkonzepte

- **Verteilung zwischen Clusters und Availability Zones (AZ)**:
  - VLANs können zwischen verschiedenen AZ und Clustern einesselben Tenants geteilt werden.
- **Inter-Tenant-Verbreitung**:
  - VLANs können zwischen mehreren Tenanten innerhalb derselben Organisation verteilt werden, was interne Kommunikation erleichtert.

### Netzwerkleistung

Die Netzwerkinfrastuktur stellt eine niedrige Latenzzeit für optimale Leistung sicher:

- __Latenz innerhalb eines Availability Zones (AZ)__: Unter __3 ms__.
- __Latenz zwischen AZ__: Unter __5 ms__.

---

### Hauptpunkte


1. **Flexibilität**: Die VLANs können für Umgebungen mit mehreren Clustern und -tenanten angepasst werden.
2. **Hohe Leistung**: Eine geringe Latenzzeit gewährleistet eine schnelle und effiziente Kommunikation zwischen den Verfügbarkeitszonen.
3. **Isolation und Sicherheit**: Die VLANs auf Niveau 2 bieten eine strenge Netzwerksegmentierung, um Daten und Flussdaten zu schützen.

## Storage Block

Cloud Temple bietet mehrere Speicherklassen basierend auf der Technologie [IBM FlashSystem](https://www.ibm.com/flashsystem/) und [IBM SVC](https://www.ibm.com/products/san-volume-controller).

Die Technologie __IBM SVC__ liefert den erforderlichen Leistungsniveau für die Umgebungen unserer Kunden durch die große Menge an eingebauter Cache-Speicher in den Kontrollen und die Möglichkeit, die gesamten IOPS eines Servers auf mehrere SAN zu verteilen.

Sie wird auch genutzt, um die Replikation von LUNs des Speichers im Blockmodus zwischen den Verfügbarkeitszonen oder die Durchführung von Wartungsarbeiten an den Speicherbays zu ermöglichen.

Der Speicher besteht hauptsächlich aus FLASH NVME-Speicher für professionelle Lasten. Die Festplatten werden von den Speicherbays in [Distributed RAID 6](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties) verwendet.

Die Speicherklasse __'Mass Storage'__ bietet mechanische Festplatten für Archivierungszwecke mit hoher Effizienz. Mehrere Leistungsstufen sind verfügbar:

| Referenz                         | Einheit | SKU                                          |
|-----------------------------------|-------|----------------------------------------------|
| FLASH - Essentiel - 500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:live:v1       |
| FLASH - Standard - 1500 IOPS/To   | 1 Gio | csp:(region):iaas:storage:bloc:medium:v1     |
| FLASH - Premium - 3000 IOPS/To    | 1 Gio | csp:(region):iaas:storage:bloc:premium:v1    |
| FLASH - Enterprise - 7500 IOPS/To | 1 Gio | csp:(region):iaas:storage:bloc:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To     | 1 Gio | csp:(region):iaas:storage:bloc:ultra:v1      |
| MASS STORAGE - Archivage          | 1 Tio | csp:(region):iaas:storage:bloc:mass:v1       |

*__Hinweis__:*

- Die tatsächliche Leistung einer Speicherklasse hängt von der tatsächlich bestellten Volumeneinheit ab, basierend auf der Definition "IOPS/To", die als "Limitierung von IOPS pro Tera alloué" bedeutet.
> Daher hat ein Volume von 0,5To in der Speicherklasse 'Standard' eine maximale Leistung von 750 IOPS (Plafond), während ein Volume von 10To in der Klasse 'Ultra' eine maximale Leistung von 150.000 IOPS erreicht.
- Die Leistungsbegrenzung gilt für das Volume, also für die Datastore-Konzept in VMware-Umgebungen.
- Die Verfügbarkeit des Speichers beträgt 99,99% monatlich (inklusive der Wartungszeit), gemessen im Monat.
- Es gibt keine Einschränkung oder Quota für Lesen oder Schreiben,
- Es gibt keine Abrechnung nach IOPS,
- Es gibt keinen Anspruch auf Leistung in der Speicherklasse __'Mass Storage'__,
- Die Mindestgröße einer LUN des Speichers beträgt 500Gio,
- Bei der Verwendung eines Speicherspeichermechanismus zur Replikation muss die Leistung auf beiden Verfügbarkeitszonen identisch sein,
- Es werden keine intelligente Optimierungsmechanismen wie Kompression oder Deduplizierung implementiert: Wenn Sie 10Tio Speicher reservieren, haben Sie physiklich 10Tio verfügbaren Speicher auf den IBM-Maschinen.
- Die LUNs des Speichers sind für das Kundenumfeld vorgesehen.

### Verwendung im Rahmen der VMware-Rechenanlage

Bei der Nutzung von Speicher in Form von Datastore als Teil der VMware-Rechenanlage Cloud Temple müssen Sie folgende wichtigen Aspekte berücksichtigen:

1. **Fichier de swap (.VSWP) beim Start virtueller Maschinen**: Bei jedem Start einer virtuellen Maschine wird ein .VSWP-File der Größe der physischen Speicher entsprechend auf dem Platten angelegt. Daher müssen Sie immer genügend freien Speicherplatz in Ihrem Datastore haben, um die Summe der Speichermenge aller virtuellen Maschinen zu decken. Zum Beispiel benötigen Sie bei einem Datastore mit 1 TiB Speicher und 10 virtuellen Maschinen jeweils 64 GiB Speicherplatz, insgesamt 640 GiB Platz frei zu haben. Andernfalls wird der Start der Maschinen durch die verfügbare Speicheroberfläche für das Erstellen von Swap-Dateien begrenzt.

2. **Speicherplatz für Backups**: Der Backupdienst nutzt Snapshots (Instantanzen). Daher müssen Sie immer ausreichend freien Speicherplatz zur Verfügung haben, um einen Snapshot zu erstellen, wenn eine virtuelle Maschine gesichert wird. Die Größe des Snapshots hängt von der Menge an geschriebenen Daten und dem Zeitaufwand für die Sicherung ab. In der Regel sollten Sie mindestens 10 % Speicherplatz als Reserve für diese Operationen behalten.

3. **Verwaltung dynamischer Festplatten**: Seien Sie vorsichtig bei der Verwendung von dynamischen Festplattensystemen. Ohne eine ordnungsgemäße Überwachung des Speicherbedarfs kann ein Mangel an physischem Speicher zu einem Stillstand (Freeze) der virtuellen Maschine führen, am besten gefallen, oder sogar einen Ausfall mit Datenverlust im schlimmsten Fall. Es ist entscheidend, den verfügbaren Speicherplatz auf Ihren Datastores bei der Verwendung dieser Art von Festplatte genau zu überwachen.

Eine proaktive Speicherplanung ist entscheidend für die ordnungsgemäße Funktion Ihrer virtuellen Maschinen und die Zuverlässigkeit der Backups. Stellen Sie sicher, dass Sie immer den erforderlichen Speicherplatz für Swap-Dateien, Snapshots und das Wachstum dynamischer Festplatten zur Verfügung haben.

## Backup Storage Allocation

Backup storage for your virtual machines is automatically provisioned by the platform, within the allocated quota.

| Reference                | Unité | SKU                                      |
|--------------------------|-------|------------------------------------------|
| MASS STORAGE - BACKUP    | 1 TiB | csp:(region):iaas:storage:block:backup:v1 |

### Block Storage Replication

#### Principes

Pour faciliter la mise en œuvre de vos plans de reprise après sinistre, lorsque des mécanismes applicatifs de continuité d'activité ne sont pas possibles et que la réplication des machines virtuelles n'est pas adaptée, Cloud Temple propose des **mécanismes de réplication du stockage en mode bloc entre les zones de disponibilité d'une région**.

Ces mécanismes de réplication sont appliqués sur les LUNs (Volumes Logiques Uniformes) de stockage de vos environnements, en complément des sauvegardes. Le choix de l'utilisation d'un mécanisme de réplication sur un environnement **dépend de nombreux facteurs**, tels que la criticité du système, la tolérance aux pertes de données autorisée ou encore les performances souhaitées pour l'application.

Cloud Temple propose deux types de mécanismes déployés dans une configuration actif/passif :

- La réplication **asynchrone** (ou __'Global Mirror'__): *La fonction __'Global Mirror'__ fournit un processus de copie asynchrone. Lorsqu'un hôte écrit sur le volume primaire, la confirmation de l'achèvement de l'E/S est reçue avant que l'opération d'écriture ne se termine pour le volume secondaire. Si une opération de basculement est initiée, l'application doit récupérer et appliquer toutes les mises à jour qui n'ont pas été confirmées sur le volume secondaire. Si les opérations d'E/S sur le volume primaire sont temporairement suspendues, le volume secondaire peut devenir une correspondance exacte du volume primaire. Cette fonction est comparable à un processus de sauvegarde continue dans lequel les dernières mises à jour sont toujours manquantes.*

- La réplication **synchrone** (ou __'Metro Mirror'__): *La fonction __'Metro Mirror'__ est un type de copie à distance qui crée une copie synchrone des données d'un volume primaire vers un volume secondaire. Avec des copies synchrones, les applications hôtes écrivent sur le volume primaire, mais ne reçoivent pas de confirmation que l'opération d'écriture est terminée tant que les données ne sont pas écrites sur le volume secondaire. Cela garantit que les deux volumes contiennent des données identiques lorsque l'opération de copie est terminée. Après que l'opération de copie initiale est terminée, la fonction Metro Mirror maintient en permanence une copie entièrement synchronisée des données source sur le site cible. Depuis le 1° janvier 2024, la fonction 'Metro Mirror' n'est plus commercialisée.*

On définit alors un site dit "actif" ou "principal" et un site "passif" ou "standby". Le plan de reprise après sinistre est activé en cas de sinistre ou dans le cadre d'une demande de test du PRA (Planification des Récupérations Après Sinistre). Le site passif prend ensuite le relais du site actif.

#### Asynchronous Replication

When your workloads require short downtime windows and using application-level replication or virtual machine replication is not feasible or appropriate, it's possible to replicate a SAN storage LUN between two availability zones within the same region.

This offering provides a __RPO of 15 minutes__ and an __RTO below 4 hours__. It allows for a much faster recovery compared to traditional backup restoration processes.

In a synchronous replication setup (__Global Mirror__), controllers of virtualization SAN in both availability zones collaborate to perform write operations on both sites simultaneously. The primary site does not wait for the remote site's write confirmation.

The steps for a write operation are as follows:

1. A hypervisor intends to perform a __write operation on a Global-Mirror volume__: It sends the request to the SAN controller in its availability zone,
2. The local SAN controller requests the remote SAN controller to perform the write operation,
3. The local SAN controller does not wait for the remote site's confirmation and performs the write locally,
4. It gives __acknowledgement__ to the hypervisor that initiated the request,
5. __Hypervisors on the distant site do not directly access the Global Mirror LUN__: A service request is necessary.

| SLA       | Description                                                                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | In case of a disaster at the primary data center, the maximum amount of lost data corresponds to the maximum of 15 minutes of writing. |
| RTO < 4H  | In case of a disaster at the primary data center, recovery is guaranteed within 4 hours, depending on the complexity of the environment.          |

In case of PRA activation, Cloud Temple's team performs an operation to present the 'Global Mirror' LUN to distant hypervisors, enabling them to access the data. Implementing this solution requires reserving computing and RAM resources on the standby site for failover in case of a disaster.

Using this technology also necessitates doubling storage space: it's essential to have exactly the same amount of space on the distant site as on the local site.

This mechanism can impact application performance by 10%. Only storage classes with 500 IOPS/TB, 1500 IOPS/TB, and 3000 IOPS/TB are compatible.

| Reference                          | Unité  | SKU                                               |  
|------------------------------------|--------|---------------------------------------------------|
| STORAGE - Global Replication SAN    | 1 Tio  | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Note__:

- Since the offering is asynchronous, there's a possibility during a disaster that some disk operations aren't written to the distant site. This could lead to data inconsistency, mitigated through risk assessment in the disaster recovery plan.*
- Block storage replication is performed transparently for virtual machines and applications,
- Consequently, it's crucial to favor application-level or potentially VM replication scenarios,
- Computing and memory resources on the recovery site can be reduced to optimize costs if a degraded state is acceptable during the disaster recovery process.*

## Virtualisierung VMware durch Cloud Temple SecNumCloud

Die Angebotsvorstellung der virtuellenisierung durch VMware Cloud Temple qualifiziert von SecNumCloud basiert auf der Technologie __VMware vSphere__.

Die Plattform wird von Cloud Temple automatisch verwaltet (Wartung der Sicherheitslage, Betriebssicherheit usw.). Sie kann über die grafische Oberfläche der Console Shiva oder über die damit verbundenen APIs gesteuert werden.

*Hinweis:* Aufgrund von Sicherheitsaspekten im Zusammenhang mit der Qualifikation SecNumCloud ist es für den Auftragnehmer nicht möglich, direkt auf die Plattform der virtuellenisierung durch VMware zuzugreifen (kein direkter Zugriff auf vCenter beispielsweise). Diese Sicherheitsanforderung erfordert eine vollständige Trennung zwischen den Steuerungs-Interfaces für technische Systeme und dem Interface des Auftraggebers (die Console Shiva).

- Die implementierten Produkte sind VMware ESXi, VMware vCenter und VMware Replication.
- Das Netzwerk der virtuellenisierungsoffensive nutzt keine Technologie von VMware NSX, sondern wird durch die Technologie Juniper und das Protokoll VPLS materiell gesteuert.
- Der Speicher verwendet keine Technologie von VMware vSan, sondern ausschließlich SANs IBM in Fiber Channel 32G.
- Es werden keine versteckten Optimierungen wie Kompression oder Deduplikation implementiert.

### Definition of a Compute Pool ('Cpool')

The `__Cpool__` is a grouping of VMware ESXi hypervisors, also known as a *cluster ESX*.

All hosts within an `__Cpool__` belong to the same tenant and availability zone (AZ). It's mandatory that they share the same hardware class:
__It's not possible to mix different types of compute nodes within the same cluster__.

Since all compute nodes come with the maximum physical memory, a software RAM usage limit is applied at the cluster level to ensure it matches the physically purchased RAM.

By default, each node has 128 GB of activated memory within the `__Cpool__`.

A `__Cpool__` can accommodate up to 32 hypervisors by default. Beyond this limit, a second cluster would need to be created.

Storage can be shared between the `__Cpool__`.

### Allocation of Memory for a 'Cpool'

The allocation of RAM is configurable at the cluster level. You can adjust the amount of RAM to match your needs according to the scale of the cluster.

**Please note not to exceed an average memory usage of 85% per compute node.**
Indeed, VMware's optimization method, which involves compression, can significantly impact the performance of your workloads and complicate diagnostics. Similarly, excessive memory pressure on compute nodes will force the hypervisor to offload some memory onto disk to accommodate virtual machine needs.

This scenario, known as __'Ballooning'__, has a substantial impact on the overall performance of virtual machines located on the affected datastore. Diagnostics become complex in this context because your monitoring tools will detect impacts at the CPU level rather than memory or storage.

Also remember that upon the startup of a virtual machine, the hypervisor automatically creates __a swap memory file__ (.vswap) on the disk, equal to the size of the compute node's memory. This should be considered when determining your storage dimensioning.

Each compute node comes with 128GB of software-activated memory in the __'Cpool'__, but it physically has access to the entire allocable memory.

For instance, for a cluster of three VMware hosts of type ```vmware:standard:v2```, the RAM allocation for activating the _*'Cpool'* will be 3 x 128GB = 384GB. You can extend this up to 3 x 384GB = 1152GB.

    Minimum memory of a 'Cpool' = number of hosts x 128GB
    Maximum memory of a 'Cpool' = number of hosts x the physical memory capacity of the compute node

### Cloud Temple - Katalogus virtueller Maschinen

Cloud Temple stellt Ihnen ein regelmäßig aktualisiertes und erweitertes Katalog von `Templates` zur Verfügung, das von unseren Teams kontinuierlich erweitert wird.

Dieser Katalog enthält derzeit mehrere Dutzende von `Templates` und Bildern, die Sie auf Ihre virtuellen Maschinen montieren können.

### Hypervisor Updates

Cloud Temple regularly provides updates for hypervisors to ensure the application of security patches. However, the update process of hypervisors remains your responsibility as we do not have insight into your business constraints.

The update process is fully automated. To maintain service continuity, a minimum of two hyperviseurs per cluster must be available during the update. Please ensure you have the necessary permissions to carry out these actions.

### Management of Virtual Machine Affinity

The __affinity and anti-affinity rules__ allow you to control the placement of your virtual machines on your hypervisors. They can be used to manage your __'Cpool'__.

For instance, they help balance workload distribution between servers or isolate resource-intensive workloads. In a VMware 'Cpool', these rules are frequently employed for managing the behavior of virtual machines with vMotion.

vMotion enables moving virtual machines from one host to another without service interruption.

You can configure using affinity/anti-affinity rule management:

- __Affinity Rules__: These ensure certain virtual machines run on the same physical host. They enhance performance by keeping frequently communicating VMs on the same server, reducing network latency. Affinity rules are beneficial in scenarios where high performance is critical, such as with databases or applications requiring rapid communication between servers.

- __Anti-Affinity Rules__: Conversely, these ensure certain virtual machines do not run on the same physical host. They are crucial for availability and resilience, preventing all critical VMs from being affected by a single server failure. Anti-affinity rules are vital for applications demanding high availability, like production environments where fault tolerance is paramount. For example, you wouldn't want both your Active Directory instances on the same hypervisor.

When creating a rule, you define its type (affinity/anti-affinity), name, activation status (__'Status'__), and the affected virtual machines in your hypervisor cluster.

*Note: The affinity/anti-affinity rules provided in the console pertain to VMs among themselves (not between hypervisors and VMs).*

### Asynchronous Replication of Virtual Machines in VMware Environment

Asynchronous replication of your virtual machines involves pushing write operations from the source hypervisor to the standby site at regular intervals.

Following an initial hot copy of all active storage on the standby site, only writes are pushed to the standby machine at regular intervals (ranging from hourly to every 24 hours, depending on the volume of writes).

This virtual machine replication leverages the instant cloning mechanism provided by the hypervisor. Consequently, this solution faces similar limitations, particularly in terms of sensitivity to the volume of writes by the virtual machine, as the instant clone process is a recursive mechanism for closing the instant clone.

An example of a machine that typically does not support virtual machine replication is an FTP server receiving real-time video feeds from surveillance cameras. Such a machine spends most of its time writing and would be unable to complete an instant clone without pausing the operating system for a significant period (several tens of minutes). If the hypervisor cannot close the instant clone, it will do so automatically, potentially corrupting the virtual machine unless intervention is possible.

| SLA             | Description                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 1H to 24H    | In case of a disaster at the primary data center, the maximum amount of lost data is that of the last write pushed to the standby site. |
| RTO < 15mn      | Operation to restart the virtual machine stopped on the distant site                                                                                |

In case of need or in case of failure on a machine at the primary site, the mirrored machine on the standby site is activated. Recovery requires having reserved computing and memory resources on the standby site as well as identical storage capacity on the passive site as on the active site.

| Reference                         | Unité | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replication VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Note__: The minimum RPO must be defined based on the change rate of the virtual machine.*

## Virtual Machine Backup

Cloud Temple offers an **integrated, non-detachable cross-platform backup solution** (it's mandatory for secnumcloud French qualification).

Backups are stored in a high availability zone and on a physically separate datacenter from the one hosting the virtual machine.

This setup safeguards against major failures at the production datacenter and allows restoration onto a secondary datacenter (e.g., due to fire).

This solution encompasses:

- **Hot, site-level backup of all disks**,
- **Instantaneous presentation and startup of a virtual machine from mass storage infrastructure and hot reload on production SANs**,
- **Partial file restoration from the backup**,
- **Limited retention based solely on mass storage allocation**.

This backup infrastructure is built upon IBM Spectrum Protect Plus, an agentless architecture solution that's user-friendly and enables automated backup processes along with space optimization on mass storage.

Backup speeds and restoration times depend on the data change rate in environments. The backup policy can be configured via [Cloud Temple Console](../console/console.md) for each virtual machine.

*__Note:__*

* Some virtual machines may not be compatible with this technology, which relies on hypervisor instantaneous snapshot mechanisms. These are typically VMs with constant disk write operations. Since the hypervisor cannot freeze these snapshots, it necessitates freezing the VM to complete the close operation, potentially lasting several hours and being unstoppable.

In such cases, the solution involves excluding the target persistent disk for writes and backing up data through an alternative method.*

| Reference                                               | Unité | SKU                            |
| ------------------------------------------------------- | ----- | ------------------------------ |
| BACKUP - Access to IBM Spectrum Protect Plus service     | 1 VM   | csp:(region):iaas:backup:vm:v1 |

#### Erstellen einer Backup-Politik erstellen

Um eine neue Backup-Politik zu erstellen, müssen Sie eine Anfrage beim Support aufgeben. Der Support ist über die Schnellstart-Schale (Boule) in der rechten oberen Ecke des Fensters zugänglich.

Die Erstellung einer neuen Backup-Politik erfolgt durch:

    Eine Anfrage für einen Service, die folgenden Informationen enthält:
        Name Ihrer Organisation
        Name eines Kontaktpersonals mit seinem Mailadresse und Telefonnummer zur Endgültigen Konfiguration
        Name des Benutzers
        Name der Backup-Politik
        Merkmale (x Tage, y Wochen, z Monate usw.)

## Fortified Data Protection (HSM/KMS)

Cloud Temple offers an advanced virtual machine encryption solution based on hardware security modules (HSMs) and a key management service (KMS). This feature strengthens the protection of sensitive data through centralized and secure key management, directly integrated into the SecNumCloud environment.

### Technische Architektur

Die Lösung basiert auf einer robusten Sicherheitsinfrastruktur, bestehend aus:

- **HSM (Hardware Security Module)** : Modulare Sicherheitssysteme von __Thales Luna S790__ zertifiziert nach FIPS 140-3 Niveau 3
- **KMS (Key Management System)** : __Thales CipherTrust Manager__ für die zentrale Verwaltung der Schlüssel
- **Integration VMware** : Kommunikation über den Protokoll __KMIP (Key Management Interoperability Protocol)__

#### Hohe Verfügbarkeit

Die HSM-Infrastruktur wird auf drei Verfügungszonen der Region FR1 (FR1) ausgeführt:

- PAR7S
- TH3S
- AZ07

Diese Aufteilung stellt eine hohe Verfügbarkeit und maximale Resilienz des Verschlüsselungsservices gewährleisten.

### Funktionsumfang und Hierarchie der Schlüssel

Das System nutzt eine **Schlüsselhierarchie** für die Verschlüsselung, um die Daten zu sichern:

| Ebene | Typ des Schlüssels | Beschreibung | Standort |
|--------|---------------|-----------------|----------|
| 1     | __Root of Trust (RoT)__ | Hauptschlüssel durch KMS | HSM Luna |
| 2     | __Domain Key (DK)__ | Domänenschlüssel des Kunden (Mehrbahn-Isolation) | HSM Luna |
| 3     | __Key Encryption Key (KEK)__ | Verschlüsselungsschlüssel der VM | CipherTrust Manager |
| 4     | __Data Encryption Key (DEK)__ | Datenverschlüsselungsschlüssel der VM | VMware ESXi |

#### Verschlüsselungsprozess

1. **Erzeugung**: VMware ESXi erzeugt eine einzigartige DEK für jede virtuelle Maschine
2. **Schutz**: Die DEK wird mit der gespeicherten KEK im CipherTrust Manager verschlüsselt
3. **Sicherstellung**: Die KEK wird durch die Schlüsselverwaltungshierarchie HSM geschützt
4. **Speicherung**: Die verschlüsselte DEK sowie die Konfigurationsdateien der VM werden gespeichert

### Sicherheit und Konformität

#### Zertifizierungen

- **FIPS 140-3 Level 3**: Highest certification for HSMs
- **Common Criteria EAL4+**: Advanced security evaluation
- **SecNumCloud**: ANSSI-integrated qualification in the cloud environment

### Mehrzugleitungsisolation

- **Verschlüsselungsteilung**: Jedes Kunden erhält ein isoliertes KMS (Key Management System)
- **Zugehörige Schlüssel**: Eine spezifische Domänenschlüssel pro Kunde
- **Überwachung und Nachverfolgbarkeit**: Vollständiges Journalieren aller Aktionen im jeweiligen Domäne

### Aktivierung und Nutzung

Die Verschlüsselung von virtuellen Maschinen wird mit einem einzigen Klick ausgelöst, indem Sie auf die [Console Shiva](../console/console.md) klicken.

Für eine detaillierte Anleitung mit Bildern beziehen Sie sich zum [Tutorial zur Verschlüsselung von virtuellen Maschinen](tutorials/vm_encryption.md).

#### Vorraufsätze

- __Zugelassener Schlüssel bereitgestellt__ : Ein HSM/KMS muss auf der vStack aktiviert sein
- __Virtuelle Maschine ausgeschaltet__ : Die VM muss vor dem Verschlüsseln geräumt werden
- __Keine aktive Replikation__ : Die VM darf nicht repliziert werden (unfreundlich für Global Mirror)
- __Kein Snapshot__ : Keine Instantane Snapshots dürfen vorhanden sein
- __Abonnement am Service__ : Das Schutzdienstleistungsabonnement muss abonniert sein

*__Hinweis__: Für detaillierte Informationen zu den Voraussetzungen und der vollständigen Prozedur, beziehen Sie sich bitte zum [Dokument zur VM-Verschlüsselung](tutorials/vm_encryption.md).*

### Einschränkungen und Überlegungen

Dieser Abschnitt enthält wichtige Hinweise zu den Grenzen und Überlegungen des Projekts, die für ein verantwortungsvolles und effektives Cloud Computing, IT-Systemen und Softwareentwicklung unerlässlich sind. Diese Informationen sollten sorgfältig betrachtet werden, um potenzielle Herausforderungen zu identifizieren und entsprechende Strategien zu entwickeln.

1. **Skalierbarkeit**:
   - Beachten Sie die Skalierbarkeit der Anwendungen und Systeme, die Sie implementieren oder verwalten. Die Cloud-Infrastruktur muss in der Lage sein, sich flexibel an wachsende Anforderungen anzupassen.

2. **Sicherheit**:
   - Sicherheit ist eine Priorität. Implementieren Sie robuste Sicherheitsmaßnahmen, um sensible Daten zu schützen und potenzielle Bedrohungen abzuwehren. Überprüfen Sie regelmäßig die Systemkonfigurationen und aktualisieren Sie Ihre Software auf die neuesten Sicherheitspatches.

3. **Kompatibilität**:
   - Stellen Sie sicher, dass alle verwendeten Technologien und Systeme kompatibel sind oder können nahtlos in bestehende Infrastrukturen integriert werden. Dies ist besonders wichtig bei der Verwendung von Open-Source-Tools und kleineren Unternehmenslösungen.

4. **Leistung**:
   - Optimieren Sie die Leistung Ihrer Anwendungen, indem Sie effiziente Algorithmen und Datenbankverwaltungstechniken verwenden. Überwachen Sie kontinuierlich die Systemleistung und identifizieren Sie Bereiche für Verbesserungen.

5. **Kosten**:
   - Beachten Sie die Kosten, die mit der Verwaltung von Cloud-Ressourcen verbunden sind. Wählen Sie kosteneffiziente Lösungen und nutzen Sie automatische Skalierungsoptionen, um unnötige Ausgaben zu vermeiden.

6. **Compliance**:
   - Stellen Sie sicher, dass Ihre Systeme den relevanten regulatorischen Anforderungen entsprechen (z.B. GDPR, HIPAA). Dies ist besonders wichtig für Branchen mit strengen Datenschutzvorschriften.

7. **Redundanz und Wiederherstellung**:
   - Implementieren Sie Redundanzstrategien, um Ausfallzeiten zu minimieren und die Verfügbarkeit Ihrer Anwendungen zu gewährleisten. Entwickeln Sie robuste Wiederherstellungsstrategien, um auf unvorhergesehene Störungen reagieren zu können.

8. **Integration**:
   - Planen Sie die Integration neuer Technologien sorgfältig, um eine nahtlose Zusammenarbeit zwischen verschiedenen Systemen und Plattformen zu gewährleisten.

9. **Wartung und Support**:
   - Berücksichtigen Sie die langfristige Wartung und den Support für Ihre Systeme, einschließlich der Verfügbarkeit von Experten für die jeweiligen Technologien sowie der Kosten für Updates und Reparaturen.

10. **Bildung und Schulung**:
    - Investieren Sie in die Bildung und Schulung Ihrer Teams, um sicherzustellen, dass sie die neuesten Technologien und Best Practices verstehen und anwenden können.

Diese Überlegungen sind entscheidend für den Erfolg von Cloud-Computing-Projekten und IT-Systemen im Allgemeinen. Sie sollten in jedem Entwicklungsprozess berücksichtigt werden, um sicherzustellen, dass die gewählten Lösungen nicht nur technisch zulässig sind, sondern auch langfristig nachhaltig und kosteneffizient.

#### Kompatibilität

- __Globale Replikation__: Verschlüsselte VMs sind nicht mit der Global Replikation kompatibel
- __Wiederherstellung__: Verschlüsselte Systempartitionen behalten ihre kryptografische Sicherheit
- __Export__: Der Export verschlüsselter VMs erfordert spezielle Prozeduren

### Leistung

- **Minimaler Auswirkungen**: Der Hardware-Verschlüsselung sorgt für optimale Leistung
- **Transparenz**: Keine Beeinträchtigung der Anwendungsfunktionalität

### Empfohlene Anwendungsbeispiele

Diese fortschrittliche Lösung ist besonders geeignet für:

- __Sensible Daten__ : Persönliche Informationen, Finanzdaten, Industriegeheimnisse
- __Regulatorische Konformität__ : Anforderungen RGPD, HIPAA, PCI-DSS, ISO 27001, PDIS
- __Kritische Branchen__ : Bankwesen, Versicherungswesen, Gesundheitswesen, Verteidigung
- __Digitale Souveränität__ : Schutz vor unbefugtem Zugriff, auch bei Compromisserkennung

| Referenz | Einheit | SKU |
|-----------|---------|-----|
| **Schutz fortschrittlich** - Verschlüsselung von VMs über HSM/KMS | 1 VM | csp:(region):iaas:vmware:encryption:hsm:v1 |

*__Hinweis__: *

- Das Service erfordert eine spezifische Abonnement und ist nicht in der Standard-IaaS-Angebote enthalten.
- Die Verwaltung der Schlüssel bleibt vollständig im Besitz von Cloud Temple innerhalb des SecNumCloud-Umfelds.
- Die VerschlüsselungsSchlüssel verlassen nie die französische und souveräne Infrastruktur.
