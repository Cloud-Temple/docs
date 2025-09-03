---
Titel: Konzepte
---

Die Cloud-Angebote von Cloud Temple im Bereich IaaS (Infrastructure as a Service) sind speziell auf die Erfüllung kritischer Anforderungen an Kontinuität und Wiederbelebung konzipiert, insbesondere für Branchen mit hohen Anforderungen wie Industrie, Finanzen und Versicherungen. Auf Basis von Hochleistungs-Technologien stellt Cloud Temple eine maximale Verfügbarkeit und optimale Leistung sicher, um Ihre kritischen Workloads zu unterstützen.

## Eine vertrauenswürdige Technologieplattform

Die IaaS-Plattform von Cloud Temple basiert auf renommierten internationalen Technologiepartnern:

- Rechenleistung: __CISCO UCS__.
- Speicher: __IBM Spectrum Virtualize__, __IBM FlashSystem__ für Blockspeicher und __DELL ECS__ für Object-Speicher.
- Netzwerk: __JUNIPER__.
- Virtualisierung: __Stack Opensource__, bietet eine zuverlässige und getestete Basis für die Verwaltung Ihrer Cloud-Umgebungen.

Diese Architektur basiert auf dem Modell __VersaStack__, einer Partnerschaft zwischen Cisco und IBM, die eine umfassende Kompatibilität mit den führenden Softwareanbietern gewährleistet.

## Eine automatisierte, spezifische Infrastruktur

Obwohl die Cloud-Infrastruktur von Cloud Temple vollständig automatisiert wird durch APIs und Terraform, bietet sie eine einzigartige Infrastruktur IaaS:

- **Dedizierte Ressourcen**: Die Rechenzentrumsrechner, Speichermedien und Softwarestacks (Virtualisierung, Backups, Firewalling usw.) werden niemals zwischen den Kunden verteilt.
- **Maximale Vorhersehbarkeit**: Sie haben die Virtualisierungsrate, die IOPS auf dem Speicher und profitieren von einer klar strukturierten Rechnung nach Monatsverbrauch.

Die Plattform erfüllt den Qualifikationsstandard SecNumCloud durch die [ANSSI](https://www.ssi.gouv.fr/), was einen hohen Automatisierungs- und Sicherheitsniveau garantiert.

## Hauptfunktionen

- Dedizierte und auf Anforderung bereitgestellte Rechenressourcen (CPU, RAM).
- Speicher auf Anforderung (mehrere Klassen verfügbar).
- Netzwerkressourcen (Internet, private Netzwerke).
- Kreuzverwachsung mit konfigurierbarer Speicherung.
- Asynchrone Replikation für Speicher oder virtuellen Server.
- Steuerung über die [Shiva-Konsole](../console/console.md) oder in Infrastructure as Code-Modus via APIs und Terraform-Provider.

## Vorteile

| Vorteil            | Beschreibung                                                                                                                                   |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Vertrauen digitaler | Speicherung von Daten in Frankreich und Einhaltung der RGPD.                                                                                 |
| Sicherheit          | Plattform hochgesichert, zertifiziert __SecNumCloud__, __HDS__ (Speicherung von Gesundheitsdaten), __ISO 27001__ und __ISAE 3402 Typ II__. |
| Hohe Verfügbarkeit | Messwert der Plattformverfügbarkeit von 99,99% (monatlich), einschließlich Wartungszeiten.                                                      |
| Widerstandsfähigkeit | Implementierung von Notfallplänen nach Bedarf.                                                                                                      |
| Automatisierung      | Plattform vollständig automatisiert, für die Integration in ein Digitalisierungs-Programm konzipiert.                                         |
| Nach Bedarf verfügbar | Ressourcen zur Verfügung gestellt werden können.                                                                                                |

## Räume und Verfügbarkeitszonen

Das Produkt OpenIaaS wird in einer Verfügbarkeitszone bereitgestellt.
Eine Verfügbarkeitszone ist Teil einer Region.

Diese Art des Bereitstellens ermöglicht es, die Lokalisierung der Clusters auszuwählen und diese auf verschiedenen Verfügbarkeitszonen (AZ) zu verteilen.
Dadurch wird eine bessere Lastverteilung, maximale Redundanz und die Erstellung eines Notfallwiederbelebungsplans (DRP) bei einem Vorfall erleichtert.

---

## Classes de lames de calcul

Les lames de calcul disponibles pour l'offre Bare Metal offrent une gamme de performances pour répondre à divers besoins :

| Référence             | RAM  __(1)__ | Fréquence __(2)__                         | Nombre de cœurs / threads | Connectivité __(3)__ | GPU __(4)__          |
|-----------------------|--------------|-------------------------------------------|---------------------------|----------------------|----------------------|
| __ECO__              | 384 Go       | 2.20/3.0 GHz (Silver 4114 ou équivalent)  | 20 / 40 threads           | 2 X 10 Gbit/s        | -                    |
| __STANDARD__         | 384 Go       | 2.40/3.4 GHz (Silver 4314 ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | -                    |
| __ADVANCE__          | 768 Go       | 2.80/3.5 GHz (Gold 6342 ou équivalent)    | 48 / 96 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 1__    | 384 Go       | 3.20/3.6 GHz (Xeon E-53I5Y ou équivalent) | 16 / 32 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 2__    | 768 Go       | 3.00/3.6 GHz (Gold 6354 ou équivalent)    | 36 / 72 threads           | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 3__    | 1536 Go      | 2.60/3.5 GHz (Gold 6348 ou équivalent)    | 56 / 112 threads          | 2 X 25 Gbit/s        | -                    |
| __PERFORMANCE 4__    | 512 Go       | 2.50/4.1 GHz (Intel 6426Y ou équivalent)  | 32 / 64 threads           | 2 X 25 Gbit/s        | 2 x NVIDIA L40S 48Go |

### Notes :
- Les noms de variables, fonctions et classes Python ne sont pas traduits.
- Les chaînes à l'intérieur du code Python ne sont pas traduites.
- Les docstrings (texte entre triple quotes) ne sont pas traduits.
- Seuls les commentaires qui commencent par # s'ils sont des lignes de commentaires autonomes sont traduits.
- La syntaxe, les noms de variables, appels de fonction et chaînes à l'intérieur du code Python sont préservés.

### Anmerkungen

- **__(1)__ Die verfügbare Speichermenge entspricht der physikalisch verfügbaren Speicherkapazität auf den Lamellen und kann nicht geändert werden.
- **__(2)__ Die angegebenen Frequenzen beziehen sich auf die Mindestfrequenz und die Turbo-Frequenz.
- **__(3)__ Die physische Verbindung ist durch eine konvergente Architektur Cisco UCS für das Netzwerk- und Speicherzugriffskonnektivität gemeinschaftlich genutzt.
- **__(4)__ Die verfügbaren GPUs entwickeln sich ständig auf Basis der neuesten Technologien. Ab dem 1. Mai 2024 umfasst die Offerte GPUs von NVIDIA LOVELACE L40S.
- **__(5)__ Eine Hochverfügbarkeit auf Cluster-Ebene ist nur ab 2 Nodes verfügbar.

Die Verfügbarkeit der Infrastruktur wird durch einen SLA von 99,9% garantiert, gemessen monatlich und einschließlich Wartungszeiten. Alle Anfragen im Zusammenhang mit dem SLA müssen über ein Incident-Ticket gestellt werden.

## Block Storage Classes

The distributed block storage, based on **IBM Spectrum Virtualize**, provides a range of performance levels suitable for various use cases:

| Reference                     | IOPS/TB                 | Main Usage                       |
|------------------------------|-------------------------|---------------------------------|
| __FLASH - Essential__         | 500                     | Light workload tasks              |
| __FLASH - Standard__          | 1500                    | Standard workload tasks           |
| __FLASH - Premium__           | 3000                    | Intensive workload tasks         |
| __FLASH - Enterprise__        | 7500                    | Critical workload tasks         |
| __FLASH - Ultra__             | 15000                   | Extremely intensive workload tasks |
| __MASS STORAGE - Archiving__   | Not applicable          | Economical storage for archiving   |

### Merkmale

- __Technologie__: Flash NVMe mit Distributed RAID 6 für erhöhte Redundanz.
- __Verfügbarkeit__: 99,99%, gemessen monatlich.
- __Einschränkungen__: Keine Begrenzung bei Lesen oder Schreiben. Keine automatische Kompression oder Deduplizierung, um die volle Nutzung der reservierten Volumina sicherzustellen.

## Die Netzwerke

Das Produkt OpenIaaS ist mit [privaten Netzwerken](../network/private_network) und [Internetzugang](../network/internet) kompatibel.

Zwei Arten von Netzwerken stehen seit der Konfiguration einer virtuellen Maschine zur Verfügung.

### VLAN-basierten Netzwerke

VLAN-basierte Netzwerke werden aufgrund der Einschränkung eines VLANs pro Netzwerkadapter eingeführt. Um mehrere Netzwerke zu verwenden, ist es ausreichend, mehrere Netzwerkadapter zu erstellen.

Es besteht eine Begrenzung bei der Anzahl der Netzwerkadapter, die auf einer VM erstellt werden können, nämlich 7 VLANs pro Adapter.

### Die VLAN-Turm

Wenn Sie mehr als 7 VLANs verteilen müssen, ist ein VLAN-Turm erforderlich. Ein VLAN-Turm ermöglicht die Übertragung aller VLANs über eine einzige Karte. Die Konfiguration der VLAN-IDs erfolgt über virtuelle Netzwerkinterfaces von Typ VLAN aus dem Betriebssystem der VM. Die VLAN-IDs sind den gleichen wie diejenigen, die vom Console sichtbar und vorhanden sind.

## Virtual Machine Backups

Cloud Temple offers an **native, non-detachable distributed backup architecture**, which is a mandatory requirement for SecNumCloud French qualification.

Backups are stored on the [Qualified Object Storage SecNumCloud](../storage/oss), ensuring optimal protection in case of major production datacenter failure. This approach allows restoring data onto a secondary datacenter even during critical incidents such as fires.

This comprehensive solution encompasses:

- Hot, site-level backup of all disks
- Flexibility in restoration, enabling selection of the recovery point and location

The backup infrastructure leverages an open-source technology with agentless architecture, combining ease of use with automated processes. This solution optimizes storage space utilization while maintaining high performance.

Backup speeds and restore times depend on the environment's change rate. The backup policy can be fully configured via [Cloud Temple Console](../console/console.md) for each virtual machine.

**Important Note:**

* Some virtual machines may not be compatible with this backup technology, which relies on hypervisor instantaneous snapshot mechanisms.* This typically applies to VMs with constant disk write operations. In such cases, the hypervisor cannot finalize the snapshot, necessitating VM freeze to complete the operation—a process that can last several hours and is non-interruptible.

The recommended solution involves excluding the targeted disk from persistent writes and employing an alternative backup method for those data.

| Reference                                   | Unité   | SKU                                         |
| ------------------------------------------- | ------- | -------------------------------------------- |
| BACKUP - Access to service                   | 1 VM    | csp:(region):openiaas:backup:vm:v1          |

### Erstellung einer Backup-Politik

Um eine neue Backup-Politik zu erstellen, müssen Sie eine Anfrage beim Support stellen. Diese Anfrage ist über die Schnellzugriffs-Schiffchen am rechten oberen Rand des Benutzeroberflächen zugänglich.

Die Erstellung einer neuen Backup-Politik erfolgt durch:

- Ein spezifisches Serviceanfrage, die folgende Informationen enthält:
  - Den Namen Ihrer Organisation
  - Die Kontaktdaten eines Ansprechpartners (E-Mail und Telefon) zur Endgültigen Konfiguration
  - Der Name des Benutzers
  - Den Namen der Backup-Politik
  - Die gewünschten Merkmale (x Tage, y Wochen, z Monate usw.)

### Virtuelle Maschinen

### Verwaltung von vCPU-Ressourcen

Die Anpassung der vCPU-Ressourcen erfolgt kalt (Maschine ausgeschaltet). Die Plattform unterstützt bis zu 254 vCPUs pro virtueller Maschine (theoretisches Limit), wobei Tests erfolgreich durchgeführt wurden auf Linux-VMs mit 128 vCPUs.

Es ist wichtig zu beachten, dass die Unterstützung des eingebunden Systembetriebssystems eine entscheidende Rolle bei der Allokation von Ressourcen spielt. Eine Allokation, die über die vom Betriebssystem unterstützten Grenzen hinausgeht, kann zu erheblichen Leistungsproblemen führen.

### Speicherverwaltung

Die Änderungen der Speichermenge erfolgen ebenfalls kalt. Die Grenzen sind wie folgt:

- 1,5 TiB mit Unterstützung von Snapshots des Arbeitsspeichers
- 8 TiB ohne Unterstützung von Snapshots des Arbeitsspeichers
- 16 TiB (theoretisches Limit ohne Sicherheitsfunktionen, abzüglich der RAM für Xen und den Kontrolldomänen)

Die tatsächlich verwendete Speichermenge kann durch das Betriebssystem des Gastes ebenfalls begrenzt sein. Das Übersteigen der vom Gastbetriebssystem unterstützten Grenzen kann zu Leistungsausfällen führen.

### Datenspeicherung

- Die maximale Größe eines Disks beträgt 2 TB
- Die Disks verwenden den Standardformat VHD
- Das Maximum an virtuellen Festplatten pro virtueller Maschine, einschließlich CD-ROM-Laufwerken, beträgt 24

Es ist nicht möglich, nach der Erstellung einen Disk zu vergrößern. Um die Speicherkapazität zu erhöhen, muss ein neuer Disk erstellt werden.

### Tools for Virtual Machines

Ces outils sont utilisés pour assurer un fonctionnement optimal des machines virtuelles. Lorsque vous souhaitez effectuer une action et qu'un de ces outils est nécessaire, un message s'affichera sur la console Cloud Temple.

Pour installer ces outils, consultez les sites officiels de Xen Server pour obtenir des instructions détaillées selon votre système d'exploitation (OS).

#### Management-Agent
Der Management-Agent befindet sich in jeder virtuellen Maschine und ermöglicht es dem Hypervisor, die Maschine besser zu verwalten, indem er Zugang zu zusätzlichen Informationen erhält und bestimmte Aktionen präziser durchführen kann.

#### PV-Driver (Paravirtualisierungs-Treiber)
Die PV-Treiber werden in der virtuellen Maschine installiert, um deren Leistung zu verbessern.
Ohne diese Treiber funktioniert die Maschine, funktioniert jedoch langsamer. Darüber hinaus ermöglichen sie auch fortgeschrittene Aktionen.
Die PV-Treiber werden auf den meisten aktuellen Linux-Kernels native installiert.

### Werkzeuge
Die Werkzeuge sind ein Sammelbegriff für Software-Komponenten, die die Integration der virtuellen Maschine mit der Virtualisierungsinfrastruktur verbessern.

## Catalogues

Der Katalog ermöglicht die Verwaltung von drei wichtigen Elementen:

- Bildmediane (ISO)
- Konfigurationsvorlagen
- Vorlagen für vorgeführte virtuellen Maschinen

In der detaillierten Ansicht einer Vorlage für eine virtuelle Maschine können Sie wichtige Informationen wie Standort, Anzahl der Festplatten oder auch die Anzahl der Netzwerkkarten einsehen.

Wenn die Anzahl der virtuellen Festplatten auf 0 steht, bedeutet dies, dass es sich um eine Konfigurationsvorlage ohne vorinstallierter Betriebssystem handelt, sodass Sie Ihr eigenes personalisiertes Umgebungssetup bereitstellen können.

## Virtual Machine Replication

Die __Virtual Machine Replication__ von Cloud Temple stellt die Sicherung und Kontinuität Ihrer kritischen Daten sicher, indem sie automatisch eine Kopie Ihres virtuellen Umgebungen in eine separaten Verfügbarkeitszone überträgt. Diese Funktion, die als Standard-Funktion im Open Source IaaS bereitgestellt wird, erfüllt die strengsten Anforderungen an die Wiederherstellung der Betriebsabläufe und des Notfallmanagements.

### Automated and Secure Protection

The Cloud Temple replication leverages a **qualified SecNumCloud** infrastructure, ensuring:

- **Asynchronous Replication**: Continuous copying of your virtual machines without impacting production performance
- **Geographical Separation**: Storage of replicas in a different availability zone compared to the source
- **Complete Automation**: Fully automated process via [Cloud Temple Console](../console/console.md)
- **Regulatory Compliance**: Adherence to backup and continuity of operations requirements

### Vorteile der Replikation

| Vorteil                | Beschreibung                                                                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Kontinuität des Betriebs | Schutz kritischer Dienste bei einem großen Ausfall im Hauptstandort.                                                                  |
| Geografische Absicherung | Replikation in eine andere Verfügbarkeitszone, um vor lokalen Unfällen zu schützen.                                             |
| Flexibilität zeitlich   | Auswahl des Replzierungsintervalls nach Bedarf: von 1 Minute bis zu 24 Stunden.                                                      |
| Einfache Verwaltung    | Ganz integrierte Konfiguration und Überwachung in der Cloud Temple-Konsole.                                                       |
| Conformité SecNumCloud | Qualifizierte Infrastruktur, die den höchsten Sicherheitsstandard für sensible Daten gewährleistet.                             |

### Replikationskonfiguration

#### Replikationsrichtlinien

Die Erstellung einer Replikationsrichtlinie definiert die Parameter der Schutzmaßnahmen für Ihre virtuellen Maschinen:

- __Ziel__ : Auswahl des Zielspeichers in der Verfügbarkeitszone der Replikation
- __Frequenz__ : Intervall der Replikation, angepasst an Ihre Bedürfnisse zur Wiederherstellung (RPO)
- __Aufbewahrung__ : Anzahl der Wiederherstellungsstellen, die gespeichert werden

#### Verfügbare Intervall

| Intervalle              | Empfohlene Verwendung                           | Max. Datenverlust (RPO) |
|-------------------------|-----------------------------------------------|-----------------------------|
| __1 bis 59 Minuten__     | Kritische Anwendungen mit Echtzeitbedarf    | < 1 Stunde                   |
| __1 bis 24 Stunden__     | Geschäftliche Anwendungen und Standardumgebungen | < 24 Stunden               |

#### Zuordnung von virtuellen Maschinen

Nachdem Sie die Politik erstellt haben, können Sie Ihre virtuellen Maschinen zur Schutz verknüpfen:

- __Einfache Auswahl__ : Auswahl der VMs aus der Konsole
- __Automatische Validierung__ : Überprüfung der Kompatibilität und Vorraussetzungen
- __Sofortige Aktivierung__ : Automatisches Start der Replikation nach der Konfiguration

## Replikatverwaltung

#### Politikoversicht

Die Cloud Console von Temple bietet eine zentrale Übersicht über Ihre Replikationsrichtlinien:

- Name und Frequenz jeder Richtlinie
- Zielverfügbarkeitszone
- Assoziierte Speicherpool und -speicher
- Verfügbare Management-Aktionen

#### Replikationsansicht

Das Tabellenverzeichnis ermöglicht Ihnen, die folgenden Informationen zu sehen:

- Den Namen der virtuellen Maschinen, die repliziert werden
- Den Ort der Quelle und Ziel
- Die mit der Replikation verbundene Politik
- Die Ausgabe der Daten im Format CSV

---

# Best Practices

---

---

### Empfehlungen nach Lastart

- **Kritische Anwendungen**: Replikation alle 1-30 Minuten, um die Datenverluste zu minimieren
- **Geschäftsanwendungen**: Repetition täglich oder zweimal täglich je nach Bedarf
- **Entwicklungsumgebungen**: Repetition tägliche in der Regel ausreicht

#### Policy Planning

- Develop distinct policies based on application criticality
- Name your policies clearly for easy management
- Regularly check the status of replicas from the console
- Document your replication strategy for your team

**Important Note:**

*Replication does not replace a comprehensive backup strategy. It is an essential complement to ensure business continuity in case of a major incident on your primary site.*

## Hohe Verfügbarkeit

Die Hohe Verfügbarkeit ermöglicht die Kontinuität des Dienstes virtueller Maschinen (VM) in Fällen von Ausfall eines physischen Hosts innerhalb eines Pools OpenIaaS.
Durch die Hohe Verfügbarkeit (HA) sendet jeder Host im Pool regelmäßig Signale der Aktivität an seine Mitstreiter über den gemeinsamen Speicher (Block Storage Heartbeat). Bei längerer Abwesenheit einer Antwort wird der Host als defekt angesehen.

Ein Block Storage, das als Heartbeat bezeichnet wird, dient zur Authentifizierung von Hosts, die nicht mehr reagieren.

Um die Hohe Verfügbarkeit korrekt in einem Pool OpenIaaS zu konfigurieren, ist es unerlässlich **mindestens zwei Hosts** zu verbinden.

Jede VM muss mit einem Prioritätsniveau für Wiederbelebung in der Hohe Verfügbarkeit konfiguriert werden:

#### Geschlossen
Die Hochverfügbarkeit ist nicht konfiguriert. Bei einem Hostausfall wird die virtuelle Maschine nicht automatisch neu gestartet.

#### Wiederaufrüstung
In Fällen von Hostfehlern wird die virtuelle Maschine automatisch neu gestartet, sobald Ressourcen im Pool verfügbar sind. Virtuelle Maschinen konfiguriert auf "Wiederaufrüstung" werden vorrangig behandelt, bevor solche konfiguriert auf "Best-Effort" gestartet werden.

#### Best-Effort  
  In Falle eines Hostausfalls wird die virtuelle Maschine automatisch neu gestartet, wenn nach dem Bearbeiten aller virtuellen Maschinen im "Wiederholungsmodus" noch Ressourcen verfügbar sind. Bei der Einstellung "Best-Effort" wird nur einmal versucht, daher wird die virtuelle Maschine nicht neu gestartet, falls die Ressourcen nicht ausreichen.