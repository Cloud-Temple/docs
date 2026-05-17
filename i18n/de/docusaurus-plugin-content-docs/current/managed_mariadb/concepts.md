---
title: Konzepte
sidebar_position: 1
---

# Schlüsselkonzepte von MariaDB Managed

Dieser Abschnitt stellt die grundlegenden Konzepte unseres **MariaDB Managed**-Diensts vor. Das Verständnis dieser Prinzipien hilft Ihnen, das Beste aus Ihrer verwalteten Datenbank herauszuholen, indem deren Funktionen optimal an Ihre Anwendungsanforderungen und Sicherheitsanforderungen angepasst werden.

## Souveränität und SecNumCloud-Konformität

Im Kern unseres Produkts steht die **digitale Souveränität**. Der Managed MariaDB-Dienst ist vollständig in der Cloud-Infrastruktur von Temple gehostet, die von der ANSSI als **SecNumCloud 3.2** qualifiziert wurde.

- **100 % Hosting in Frankreich** : Ihre Daten verbleiben auf nationalem Boden und sind vor extraterritorialen Gesetzen geschützt.
- **Native Compliance** : Die Lösung wurde entwickelt, um den strengsten regulatorischen Anforderungen zu entsprechen (DSGVO, HDS, LPM, NIS2, PCI-DSS).
- **Open Source und Reversibilität** : Durch die Nutzung offener Standards wie MariaDB Community Server und Galera gewährleisten wir eine vollständige Unabhängigkeit von Anbietern (*Vendor-Lock-in*) und eine totale Portierbarkeit Ihrer Daten.

## Hochverfügbarkeitsarchitektur: Galera Cluster + MaxScale

Für verteilte Umgebungen setzt unser Produkt auf **Galera Cluster**, um eine hochverfügbare Lösung ohne Datenverlust zu bieten.

- **Synchrone Replikation** : Im Gegensatz zur herkömmlichen asynchronen Replikation wird jede Transaktion auf allen Cluster-Knoten *vor* der Bestätigung validiert. Dies gewährleistet ein **Ziel für den Wiederherstellungspunkt (RPO) von null** : keine bestätigten Daten können im Fehlerfall verloren gehen.
- **Multi-AZ-Verteilung** : Der Cluster ist auf drei separate Verfügbarkeitszonen (AZ) verteilt. Der Ausfall eines gesamten Rechenzentrums führt weder zu Dienstunterbrechungen noch zu Datenverlust.
- **Automatisches Failover** : Im Falle eines Knotenausfalls wird der Datenverkehr automatisch auf die intakten Knoten umgeleitet, wodurch ein **minimales Ziel für die Wiederherstellungszeit (RTO)** sichergestellt wird.
- **MaxScale-Proxy** : MaxScale ist ein fortschrittlicher Proxy, Router und Load Balancer für MariaDB. Er verwaltet das automatische Failover bei der Replikation, verteilt die Anfragen (writes vers primary, reads vers replicas via ReadWriteSplit) und bietet Filter für Cache, Audit (QLAfilter) oder Sicherheit (RegexFilter).

## Bereitstellungsmodelle

Wir bieten zwei Modelle an, die sich an die Kritikalität Ihrer Workloads anpassen.

### 1. StandAlone

Dieses Modell stellt eine einzelne Instanz der MariaDB-Engine bereit.

- **Anwendungsfall** : Dieses Bereitstellungsmodell eignet sich hervorragend für einfache Anwendungen wie CMS, die nur einen einzigen Endpoint zur Verbindung mit Datenbanken nutzen.
- **Resilienz** : Obwohl es sich um eine einzelne Instanz handelt, wird der zugrunde liegende Speicher in 3 AZ repliziert, was einen automatischen Neustart auf einer anderen AZ im Falle eines Hardwareausfalls ermöglicht.
- **SLA** : 99,9 % (außerhalb von Wartungsfenstern).

### 2. Distributed

Dieses Modell stellt einen **Galera-Cluster mit 3 Instanzen** der MariaDB-Engine bereit, ergänzt durch einen **MaxScale**-Proxy.

- **Anwendungsfall** : Dieses Bereitstellungsmodell eignet sich hervorragend für Anwendungen mit verteiltem Zugriff, wie Data- oder Business-Intelligence-Anwendungen, die von einem schreibgeschützten Zugriff profitieren, ohne die Datenaufnahme zu beeinträchtigen.
- **Komponenten** :
  - **3 MariaDB-Knoten** : Ein primärer Knoten für Lese-/Schreibzugriff (RW) und zwei sekundäre Knoten für schreibgeschützten Zugriff (RO).
  - **MaxScale-Proxy** : Ein intelligenter Router, der Anfragen verteilt. Er leitet Schreibvorgänge an den primären Knoten weiter und verteilt Lesevorgänge auf alle Knoten (`ReadWriteSplit`), wodurch die Leistung optimiert wird.
- **SLA** : 99,9 % (außerhalb von Wartungsfenstern).

> **Wichtiger Hinweis** : Es ist nicht möglich, das Bereitstellungsmodell eines bestehenden Clusters zu ändern (z. B. von *StandAlone* auf *Distributed* zu wechseln). Dieser Vorgang erfordert die Erstellung eines neuen Clusters im gewünschten Modell über eine Wiederherstellung.

## Sicherung und Wiederherstellung (PITR)

Der Schutz Ihrer Daten wird durch eine doppelte Sicherungsstrategie gewährleistet.

1. **Physische Sicherung und Point-in-Time Recovery** :
    - Wir führen täglich vollständige physische Sicherungen durch (`mariabackup`) (ohne Dienstunterbrechung).
    - Bei der **distributed** Version werden Transaktionsprotokolle (*binary logs*) kontinuierlich archiviert. Diese Kombination ermöglicht eine PiTR-Wiederherstellung bis kurz vor einem Vorfall.

2. **Logische Sicherung (`mysqldump`)** :
    - Es werden auch logische Exporte der Datenbanken durchgeführt.
    - Sie bieten eine feine Granularität für die Wiederherstellung oder den Export einer einzelnen Datenbank.

Alle Sicherungen werden im Ruhezustand verschlüsselt und in unserem S3 Object Storage gespeichert, der selbst SecNumCloud-zertifiziert ist.

## Mehrstufige Sicherheit

Die Sicherheit ist in jede Schicht des Dienstes integriert.

- **Netzwerkisolation** : Datenbankinstanzen werden **niemals im Internet freigegeben**. Der Zugriff erfolgt ausschließlich über das private Netzwerk des Kunden.
- **End-to-End-Verschlüsselung** :
  - **Während der Übertragung** : Alle Verbindungen (Client zu Datenbank und zwischen den Clusterknoten) werden mit TLS 1.3 verschlüsselt.
  - **Im Ruhezustand** : Daten auf der Festplatte (InnoDB-Tablespaces) und Backups werden mit AES-256 verschlüsselt.
- **Zugriffsverwaltung** : Die Authentifizierung ist gesichert (Plugins `ed25519` oder `sha256_password`), und die Berechtigungen werden nach dem Prinzip der geringsten Rechte verwaltet.

## Managed Service ("Zéro Ops")

Das Ziel von MariaDB Managed ist es, Sie von der Betriebskomplexität zu entlasten. Unsere Teams übernehmen:

- Das Provisioning und die initiale Konfiguration.
- Das vollständige Lifecycle-Management: Minor-Updates, Anwendung von Sicherheits-Patches.
- Die 24/7-Überwachung der Infrastruktur und des Dienstes.
- Das Management und die Überprüfung von Backups.

Dies ermöglicht es Ihren Teams, sich auf die Anwendungsentwicklung und die Nutzung ihrer Daten zu konzentrieren.

## Versionsrichtlinie & Lebenszyklus

Die MariaDB Foundation veröffentlicht Versionen mit Langzeitunterstützung (LTS), was Stabilität und Vorhersehbarkeit gewährleistet. Unser Service basiert auf diesen Versionen, um die Langfristigkeit Ihrer Infrastruktur zu sichern.

| Version | Typ | Unterstützt bis |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Mai 2029 |
| **MariaDB 11.8** | LTS | Juni 2028 |

- **Kleinere Updates** : Sicherheits-Patches und Bugbehebungen werden von unseren Teams im *rolling update* (Knoten für Knoten) angewendet, um keine Dienstunterbrechungen zu verursachen.
- **Große Updates** : Major-Upgrades werden in Zusammenarbeit mit Ihnen geplant, um sich an Ihren Zeitplan anzupassen.
- **Ende der Unterstützung** : Wir informieren Sie mindestens 180 Tage vor dem Ende der Unterstützung einer LTS-Version, um die Migration zur nächsten Version zu planen.

## Instanzgrößen

Die Instanzen ***StandAlone*** und ***Distributed*** sind mit vordefinierten Größen verfügbar:

| Größe | vCPU | Arbeitsspeicher | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache | maxconn |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **XS** | 1000m | 4096Mi | 2458M | 2 | 256M | 800 | 80 |
| **S** | 1000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **M** | 2000m | 8192Mi | 4915M | 4 | 512M | 1600 | 150 |
| **L** | 2000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XL** | 4000m | 16384Mi | 9830M | 8 | 1G | 3200 | 250 |
| **XXL** | 4000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **3XL** | 8000m | 32768Mi | 19660M | 16 | 1G | 6400 | 500 |
| **4XL** | 8000m | 65536Mi | 39320M | 16 | 1G | 10000 | 500 |


> **Hinweis**: Der Speicher wird separat bereitgestellt und kann online erweitert werden (von 2Gi bis 128Gi) (jedoch nicht verkleinert, außer durch das Neuerstellen einer Instanz.).