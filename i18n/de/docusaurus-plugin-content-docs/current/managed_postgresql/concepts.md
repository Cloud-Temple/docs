---
title: Konzepte
sidebar_position: 1
---

# Kernkonzepte von Managed PostgreSQL

Dieser Abschnitt stellt die grundlegenden Konzepte unseres **Managed PostgreSQL**-Diensts vor. Das Verständnis dieser Prinzipien hilft Ihnen, das Beste aus Ihrer verwalteten Datenbank herauszuholen, indem Sie deren Funktionen optimal an Ihre Anwendungs- und Sicherheitsanforderungen anpassen.

## Souveränität und SecNumCloud-Konformität

Im Kern unseres Produkts steht die **digitale Souveränität**. Der Managed-PostgreSQL-Dienst wird vollständig auf der Cloud-Temple-Infrastruktur gehostet, die von der ANSSI als **SecNumCloud 3.2** zertifiziert ist.

- **Hosting zu 100 % in Frankreich** : Ihre Daten verbleiben auf dem französischen Staatsgebiet und sind vor extraterritorialen Gesetzen geschützt.
- **Native Konformität** : Die Lösung wurde entwickelt, um den strengsten regulatorischen Anforderungen (RGPD, HDS, LPM, NIS2, PCI-DSS) zu entsprechen.
- **Open Source und Reversibilität** : Auf Basis des Open-Source-Kubernetes-Operators **CloudNative-PG (CNPG)** und **Barman** garantieren wir die Vermeidung technologischer Abhängigkeiten (*vendor lock-in*) sowie die vollständige Portabilität Ihrer Daten und Konfigurationen.

## CloudNative-PG-Operator (CNPG)

Die Verwaltung des Lebenszyklus von PostgreSQL-Datenbanken in unserer Kubernetes-Infrastruktur basiert auf **CloudNative-PG (CNPG)**.

- **Deklarative Bereitstellung** : Die Konfiguration Ihrer Datenbank erfolgt über Kubernetes Custom Resource Definitions (CRD), was einen Infrastructure-as-Code (IaC)-Ansatz über Terraform oder Helm ermöglicht.
- **Integrierte Hochverfügbarkeit** : CNPG verwaltet automatisch die Wahl des Primärknotens und das Failover (*failover*) nahtlos.
- **Natives Monitoring** : Detaillierte Metriken werden nativ an Prometheus exportiert, was die Erstellung von Grafana-Dashboards erleichtert.

## Bereitstellungsmodelle

Wir bieten drei Modelle an, die auf die Kritikalität Ihrer Workloads abgestimmt sind:

### 1. StandAlone

Dieses Modell bereitstellt eine **einzige Instanz** der PostgreSQL-Engine.

- **Einsatzszenario** : Entwicklung, Test oder Anwendungen, die keine hohe Verfügbarkeit erfordern.
- **Resilienz** : Da der zugrunde liegende Speicher persistent ist und von Kubernetes verwaltet wird, kann der Pod bei einem Hardwareausfall des Hosts automatisch auf einem anderen Knoten neu gestartet werden.

### 2. Replika

Dieses Modell bereitstellt einen **Cluster mit 3 PostgreSQL-Instanzen** (eine Primärinstanz, zwei Replikas).

- **Asynchrone Replikation** : Die Daten werden über kontinuierliches Streaming (asynchron) repliziert. Dies bietet hervorragende Leistung und gewährleistet gleichzeitig eine Datenkopie auf den Replikas mit minimaler Verzögerung.
- **Automatisches Failover** : Im Falle eines Ausfalls der Primärinstanz fördert CNPG automatisch die aktuellste Replika zum Primärknoten, um die Dienstkontinuität zu gewährleisten.

### 3. Enterprise

Dieses Modell bereitstellt einen **Cluster mit 3 Instanzen** PostgreSQL, der für **kritische Hochverfügbarkeit** optimiert ist.

- **Synchrone Replikation** : Die Replikation ist synchron auf mindestens 2 Knoten (`any 2`) mit Garantie der Dauerhaftigkeit (`dataDurability: preferred`) konfiguriert. 
- **Dauerhaftigkeit** : Ein `COMMIT` wird der Anwendung nur bestätigt, wenn die Daten erfolgreich auf dem Primärknoten UND auf einem Replikat geschrieben wurden. Dies gewährleistet, dass keine bestätigte Transaktion bei einem Hardwareausfall verloren geht, ohne die Datenbank jedoch zu blockieren, falls ein Knoten vorübergehend nicht verfügbar ist.

## Sicherung und Wiederherstellung (PITR)

Der Schutz Ihrer Daten wird durch das Plugin **Barman Cloud** gewährleistet, das vollständig in den Operator integriert ist.

1. **Kontinuierliche WAL-Archivierung** :
    - Jedes Segment des Transaktionsprotokolls (*WAL*) wird in Echtzeit in einen SecNumCloud-zertifizierten S3-Object-Storage archiviert.
    - Die Kompression ist optimiert (z. B. `lz4` oder `gzip`), um das Datenvolumen zu reduzieren und gleichzeitig hohe Performance zu gewährleisten.

2. **Geplante Sicherungen (`ScheduledBackup`)** :
    - Vollständige physische Sicherungen werden nach Zeitplan ausgelöst (z. B. täglich um 02:00 Uhr).
    - Eine initiale Sicherung wird unmittelbar bei der Clustererstellung durchgeführt.

Diese kombinierten Mechanismen ermöglichen die **Point-in-Time Recovery (PITR)**: die Fähigkeit, den gesamten Server auf ein bestimmtes Datum und eine bestimmte Uhrzeit wiederherzustellen und so vor menschlichen Fehlern oder Datenkorruptionen zu schützen.

## Sicherheit auf mehreren Ebenen

- **Netzwerkisolation** : Datenbankinstanzen werden in dedizierten Namespaces bereitgestellt und im privaten Kundennetzwerk isoliert.
- **Verschlüsselung** :
  - **In Transit** : TLS-verschlüsselte Verbindungen.
  - **Im Ruhezustand** : Speicherdaten sowie Backups auf S3 sind verschlüsselt.
- **Kubernetes-Secrets** : Superuser- und Anwendungsanmeldeinformationen werden sicher generiert und als Kubernetes-Secrets gespeichert, wobei der Zugriff strengen Regeln unterliegt.

## Instanzgrößen (T-Shirt-Größen)

Datenbanken unterliegen strengen Limits (CPU und RAM), die der gewählten Größe entsprechen.
Die internen PostgreSQL-Parameter (`shared_buffers`, `effective_cache_size`, `work_mem` usw.) sind für jede Größe **vorab kalibriert**, um die Leistung zu optimieren und sicherzustellen, dass der Container niemals sein RAM-Limit erreicht (wodurch ein OOMKill durch Kubernetes vermieden wird, der den Service abrupt beenden würde).

| Größe | CPU | Speicher | shared_buffers | effective_cache_size | work_mem | maintenance_work_mem | max_connections | pgbouncer_default_pool_size | pgbouncer_max_client_conn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1 Core | 4 Gb | 1024MB | 3072MB | 16MB | 128MB | 80 | 8 | 200 |
| **S** | 1 Core | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **M** | 2 Cores | 8 Gb | 2048MB | 6144MB | 32MB | 256MB | 150 | 10 | 250 |
| **L** | 2 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XL** | 4 Cores | 16 Gb | 4096MB | 12288MB | 64MB | 512MB | 250 | 15 | 300 |
| **XXL** | 4 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **3XL** | 8 Cores | 32 Gb | 8192MB | 24576MB | 128MB | 1024MB | 500 | 20 | 500 |
| **4XL** | 8 Cores | 64 Gb | 16384MB | 49152MB | 256MB | 2048MB | 500 | 25 | 500 |

> **Hinweis**: Die *requests*-Ressourcen (CPU und RAM) werden mit 50% der oben konfigurierten *limits* zugewiesen.

## Unterstützte PostgreSQL-Versionen

Wir unterstützen alle aktuellen Hauptversionen, sodass Sie basierend auf der Kompatibilität Ihrer Anwendungen wählen können:

- **PostgreSQL 13, 14, 15, 16, 17 und 18**.

Der CNPG-Operator verwaltet Minor-Updates nahtlos durch Anwendung einer schrittweisen Update-Strategie (*rolling update*).