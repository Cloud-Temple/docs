---
title: Blockspeicher
---

Der **Blockspeicher** von Cloud Temple stellt die persistenten Volumes der Compute-Angebote bereit: Datastores von IaaS VMware, Storage Repositories von IaaS OpenSource, Volumes von Bare Metal sowie Festplatten und Volumes von VM Instances. Er wird nicht einzeln gebucht: Sie wählen ihn zusammen mit dem Compute-Angebot, in der Leistungsklasse, die zu jeder Arbeitslast passt. Die Container-Plattformen PaaS OpenShift und Managed Kubernetes nutzen ihn ebenfalls für ihre persistenten Volumes.

Diese Seite beschreibt, was allen Angeboten gemeinsam ist. Die Seite Konzepte jedes Angebots gibt an, welche Klassen es anbietet und welche Besonderheiten es hat.

## Betroffene Angebote

| Angebot | Nutzung des Blockspeichers | Verfügbare Klassen |
|---|---|---|
| [IaaS VMware](../../iaas_vmware/concepts.md) | Datastores | Fünf Flash-Klassen und Mass Storage |
| [IaaS OpenSource](../../iaas_opensource/concepts.md) | Storage Repositories | Fünf Flash-Klassen und Mass Storage |
| [Bare Metal](../../iaas_bare-metal/concepts.md) | Volumes der Server | Fünf Flash-Klassen und Mass Storage |
| [VM Instances](../../public_cloud/vm_instances/concepts.md) | Systemfestplatte und zusätzliche Volumes | Standard und Enterprise, für zusätzliche Volumes |

## Speicherklassen

| Klasse | IOPS/TB | IOPS-Obergrenze / Volume | Max. Bandbreite / Volume | Abrechnungseinheit | Hauptverwendung |
|---|---|---|---|---|---|
| **FLASH - Essentiel** | 500 | 10.000 IOPS | 512 MB/s | 1 GiB | Leichte Arbeitslasten |
| **FLASH - Standard** | 1.500 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Standard-Arbeitslasten |
| **FLASH - Premium** | 3.000 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Intensive Arbeitslasten |
| **FLASH - Enterprise** | 7.500 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Kritische Arbeitslasten |
| **FLASH - Ultra** | 15.000 | 30.000 IOPS | 1.024 MB/s | 1 GiB | Sehr intensive Arbeitslasten |
| **MASS STORAGE** | Nicht garantiert | Nicht garantiert | Nicht garantiert | 1 TiB | Sicherung und Archivierung |

### Leistungsregeln

- Die effektive Leistung eines Volumes steigt linear mit der zugewiesenen Kapazität, gemäß dem IOPS/TB-Verhältnis seiner Klasse, **innerhalb der oben angegebenen Obergrenze**. Ein Volume von 0,5 TB in der Klasse Standard erhält zum Beispiel 750 IOPS; ein Volume von 10 TB in der Klasse Ultra (theoretisch 150.000 IOPS) ist auf 30.000 IOPS und 1.024 MB/s begrenzt.
- Die Grenzen gelten auf Ebene des Speichervolumes. Es gibt weder Beschränkungen noch Kontingente für Lese- oder Schreibvorgänge.
- Es gibt keine Abrechnung pro IOPS.
- Die Klasse Mass Storage auf mechanischen Festplatten hat keine Leistungszusage.
- Es wird weder Komprimierung noch Deduplizierung angewendet: Die reservierte Kapazität ist physisch zugewiesen.

## Architektur

- **Technologie**: 100 % Flash-NVMe-Speicher auf [IBM FlashSystem](https://www.ibm.com/flashsystem/), virtualisiert durch [IBM SVC](https://www.ibm.com/products/san-volume-controller), mit Festplatten in Distributed RAID 6. Die Klasse Mass Storage verwendet mechanische Festplatten.
- **Speicher lokal in jeder Verfügbarkeitszone**: Jedes Volume wird in einer einzigen Verfügbarkeitszone bereitgestellt, der Zone der Compute-Ressourcen, für eine Latenz unter einer Millisekunde.
- **Isolation**: Die Speichervolumes sind der Umgebung des Kunden vorbehalten.

## Regionen und Verfügbarkeitszonen

Der Blockspeicher ist in der Region FR1 verfügbar, in jeder ihrer Verfügbarkeitszonen.

## Sicherheit und Compliance

- **Verschlüsselung**: Die Daten werden im Ruhezustand direkt auf den Festplatten mit dem Algorithmus XTS-AES 256 verschlüsselt, konform zur Norm FIPS 140-2. Die Verschlüsselung gilt nicht während der Replikationsübertragungen zwischen Verfügbarkeitszonen, die über dedizierte und gesicherte Kanäle laufen.
- **Zertifizierungen**: Der Blockspeicher ist nach HDS und ISO 27001 zertifiziert und auf SecNumCloud-qualifizierten und C5-konformen Diensten verfügbar.

## Sicherung und Kontinuität

- **Replikation zwischen Verfügbarkeitszonen**: Die asynchrone Replikation (Global Mirror) kopiert die Volumes in eine andere Verfügbarkeitszone der Region, für Notfallwiederherstellungspläne. Sie wird mit den Funktionen des IaaS-Angebots umgesetzt, zum Beispiel in [IaaS VMware](../../iaas_vmware/concepts.md). Sie zielt auf einen RPO von 15 Minuten und einen RTO unter 4 Stunden, ist mit den Klassen Essentiel, Standard und Premium kompatibel und verringert die IOPS des replizierten Volumes um etwa 10 %. Die Leistung muss in beiden Zonen identisch sein. Eine synchrone Replikation wird nicht angeboten.
- **Dauerhaftigkeit**: Die redundante Architektur (RAID, Controller, Stromversorgung) ist für eine Datendauerhaftigkeit von 99,9999999 % (9 Neunen) ausgelegt.

## Dienstverfügbarkeit

Das Verfügbarkeitsziel des Blockspeichers beträgt 99,99 %, gemessen über einen Monat.

## Reversibilität

| Vorgang | Mittel | Frist | Kosten |
|---|---|---|---|
| Datenexport | Snapshots, Festplatten-Images | 30 Tage | Kostenlos |
| Sichere Löschung | Vernichtungszertifikat | — | Inbegriffen |

## Preise

Die Preise des Blockspeichers sind auf der Produktseite der Cloud-Temple-Website veröffentlicht:
[Blockspeicher — Preise](https://www.cloud-temple.com/produits/stockage-bloc/).
