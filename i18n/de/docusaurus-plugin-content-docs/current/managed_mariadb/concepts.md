---
title: Konzepte
sidebar_position: 1
---

# Wichtige Konzepte von MariaDB Managed

Dieser Abschnitt stellt die grundlegenden Konzepte unseres **MariaDB Managed**-Dienstes vor. Das Verständnis dieser Prinzipien hilft Ihnen, das Beste aus Ihrer verwalteten Datenbank herauszuholen, indem Sie deren Fähigkeiten mit Ihren Anwendungsanforderungen und Sicherheitsanforderungen in Einklang bringen.

## Souveränität und SecNumCloud-Konformität

Im Kern unseres Produkts steht die **digitale Souveränität**. Der MariaDB Managed Service wird vollständig auf der Cloud-Temple-Infrastruktur gehostet, die von der ANSSI als **SecNumCloud 3.2** qualifiziert ist.

- **100% Hosting in Frankreich** : Ihre Daten verbleiben auf dem nationalen Territorium und sind vor extraterritorialen Gesetzen geschützt.
- **Native Konformität** : Die Lösung wurde entwickelt, um den strengsten regulatorischen Anforderungen (RGPD, HDS, LPM, NIS2, PCI-DSS) zu entsprechen.
- **Open Source und Reversibilität** : Durch die Nutzung offener Standards wie MariaDB Community Server und Galera garantieren wir eine Vermeidung technologischer Abhängigkeiten (*vendor lock-in*) und eine vollständige Portabilität Ihrer Daten.

## Hochverfügbare Architektur: Galera Cluster + MaxScale

Für verteilte Umgebungen basiert unser Produkt auf **Galera Cluster**, um eine hohe Verfügbarkeit ohne Datenverlust zu gewährleisten.

- **Synchrones Replizieren** : Im Gegensatz zur traditionellen asynchronen Replikation wird jede Transaktion auf allen Clusterknoten *vor* der Bestätigung validiert. Dies garantiert ein **Wiederherstellungspunktziel (RPO) von 0**: Bei einem Ausfall gehen keine bestätigten Daten verloren.
- **Multi-AZ-Verteilung** : Der Cluster ist auf drei separate Verfügbarkeitszonen (AZ) verteilt. Der Ausfall eines gesamten Rechenzentrums führt zu keiner Dienstunterbrechung oder Datenverlust.
- **Automatisches Failover** : Bei einem Vorfall auf einem Knoten wird der Datenverkehr automatisch auf die intakten Knoten umgeleitet, was ein **minimales Wiederherstellungszeitziel (RTO)** gewährleistet.
- **MaxScale-Proxy** : MaxScale ist ein fortschrittlicher Proxy, Router und Load Balancer für MariaDB. Er verwaltet das automatische Failover bei der Replikation, lastet Anfragen aus (Writes zum Primary, Reads zu Replikaten über ReadWriteSplit) und bietet Filter für Cache, Audit (QLAfilter) oder Sicherheit (RegexFilter).

## Bereitstellungsmodelle

Wir bieten zwei Modelle an, die sich an die Kritikalität Ihrer Workloads anpassen.

### 1. StandAlone

Dieses Modell stellt eine einzelne Instanz der MariaDB-Engine bereit.

- **Einsatzszenario** : Dieses Bereitstellungsmodell eignet sich ideal für einfache Anwendungen wie CMS, die nur einen einzelnen Endpunkt zur Verbindung mit Datenbanken verwenden.
- **Resilienz** : Obwohl es sich um eine einzelne Instanz handelt, wird der zugrunde liegende Speicher auf 3 AZ repliziert, was einen automatischen Neustart auf einer anderen AZ im Falle eines Hardwareausfalls ermöglicht.
- **SLA** : 99,9 % (außerhalb von Wartungsfenstern).

### 2. MultiAZ

Dieses Bereitstellungsmodell setzt einen **Galera-Cluster mit 3 Instanzen** des MariaDB-Engines ein, ergänzt um einen **MaxScale**-Proxy.

- **Einsatzszenario** : Dieses Bereitstellungsmodell eignet sich hervorragend für Anwendungen mit verteiltem Zugriff, wie Data- oder Business-Intelligence-Anwendungen, die von schreibgeschütztem Zugriff profitieren, ohne die Datenaufnahme zu beeinträchtigen.
- **Komponenten** :
  - **3 MariaDB-Knoten** : Ein primärer Lese-/Schreibknoten (RW) und zwei sekundäre schreibgeschützte Knoten (RO).
  - **MaxScale-Proxy** : Ein intelligenter Router, der die Abfragen verteilt. Er leitet Schreibvorgänge an den primären Knoten weiter und verteilt Lesevorgänge auf alle Knoten (`ReadWriteSplit`), wodurch die Leistung optimiert wird.
- **SLA** : 99,9 % (außerhalb von Wartungsfenstern).

> **Wichtiger Hinweis** : Es ist nicht möglich, das Bereitstellungsmodell eines bestehenden Clusters zu ändern (par exemple, de passer de *StandAlone* à *MultiAZ*). Dies erfordert die Erstellung eines neuen Clusters im gewünschten Modell über eine Wiederherstellung.

## Sicherung und Wiederherstellung

Der Schutz Ihrer Daten wird durch eine doppelte Sicherungsstrategie gewährleistet.

1. **Physische Sicherung** :
    - Wir führen täglich vollständige physische Sicherungen durch (`mariabackup`) (ohne Dienstunterbrechung).

2. **Logische Sicherung (`mysqldump`)** :
    - Es werden ebenfalls logische Datenbank-Exports durchgeführt.
    - Sie bieten eine feine Granularität zum Wiederherstellen oder Exportieren einer einzelnen Datenbank.

Alle Sicherungen werden ruhend verschlüsselt und in unserem Object Storage S3 gespeichert, der selbst SecNumCloud-zertifiziert ist.

## Mehrstufige Sicherheit

Die Sicherheit ist in jede Ebene des Dienstes integriert.

- **Netzwerkisolation** : Datenbankinstanzen werden **niemals im Internet exponiert**. Der Zugriff erfolgt ausschließlich über das private Netzwerk des Kunden.
- **End-to-End-Verschlüsselung** :
  - **Während der Übertragung** : Alle Verbindungen (Client zur Datenbank und zwischen den Clusterknoten) sind mit TLS 1.3 verschlüsselt.
  - **Im Ruhezustand** : Daten auf der Festplatte (InnoDB-Tablespaces) und Backups sind mit AES-256 verschlüsselt.
- **Zugriffsverwaltung** : Die Authentifizierung ist gesichert (Plugins `ed25519` oder `sha256_password`), und die Berechtigungen werden nach dem Prinzip des geringsten Privilegs verwaltet.

## Managed Service ("Zéro Ops")

Das Ziel von MariaDB Managed ist es, Sie von der operativen Komplexität zu entlasten. Unsere Teams übernehmen:

- Die Provisionierung und die Erstkonfiguration.
- Die vollständige Lebenszyklusverwaltung: Minor-Updates, Anwendung von Sicherheitspatches.
- Die 24/7-Überwachung der Infrastruktur und des Dienstes.
- Die Verwaltung und Überprüfung der Backups.

Dies ermöglicht es Ihren Teams, sich auf die Anwendungsentwicklung und die Nutzung ihrer Daten zu konzentrieren.

## Versionspolitik & Lebenszyklus

Die MariaDB Foundation veröffentlicht Versionen mit langfristiger Unterstützung (LTS), was Stabilität und Vorhersehbarkeit gewährleistet. Unser Service stützt sich auf diese Versionen, um die Langlebigkeit Ihrer Infrastruktur zu sichern.

| Version | Typ | Unterstützt bis |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Mai 2029 |
| **MariaDB 11.8** | LTS | Juni 2028 |

- **Minor-Updates** : Sicherheitspatches und Fehlerbehebungen werden von unseren Teams als *rolling update* (Knoten für Knoten) angewendet, um keine Dienstunterbrechung zu verursachen.
- **Major-Updates** : Major-Updates werden in Zusammenarbeit mit Ihnen geplant, um sich an Ihrem Zeitplan auszurichten.
- **Ende der Unterstützung** : Wir benachrichtigen Sie mindestens 180 Tage vor dem Ende der Unterstützung einer LTS-Version, um die Migration auf die nächste Version zu planen.

## Instanzgrößen

Die Instanzen ***StandAlone*** und ***MultiAZ*** sind mit vordefinierten Größen verfügbar:

| Größe | vCPU | Arbeitsspeicher | innodb_buffer_pool_size | innodb_buffer_pool_instances | max_allowed_packet | table_open_cache |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Micro** | 1 | 2 GB | 1200M | 1 | 128M | 400 |
| **Small** | 1 | 4 GB | 2458M | 2 | 256M | 800 |
| **Medium** | 2 | 4 GB | 2458M | 2 | 256M | 800 |
| **Med-Large** | 2 | 8 GB | 4915M | 4 | 512M | 1600 |
| **Large** | 4 | 8 GB | 4915M | 4 | 512M | 1600 |
| **X-Large** | 4 | 16 GB | 9830M | 8 | 1G | 3200 |
| **2X-Large** | 8 | 16 GB | 9830M | 8 | 1G | 3200 |
| **3X-Large** | 8 | 32 GB | 19660M | 16 | 1G | 6400 |
| **4X-Large** | 16 | 32 GB | 19660M | 16 | 1G | 10000 |
| **5X-Large** | 16 | 64 GB | 39320M | 16 | 1G | 10000 |
| **6X-Large** | 32 | 128 GB | 78640M | 16 | 1G | 10000 |


> **Hinweis** : Der Speicher wird separat bereitgestellt und kann online erweitert werden (empfohlenes Minimum von 2Gi, bis zu einem Maximum von 512Gi) (kann jedoch nicht reduziert werden, außer durch das Erstellen einer neuen Instanz).

### Erklärung der Dimensionierungsparameter

MariaDB-Instanzen unterliegen strengen Grenzen für CPU und RAM (OOMKill), die von Kubernetes verwaltet werden. Wenn eine Instanz ihr RAM-Limit erreicht, wird sie neu gestartet, was zu einer Dienstunterbrechung führen und die Replikation eines Clusters potenziell unterbrechen kann. Aus diesem Grund werden die Parameter basierend auf der Instanzgröße festgelegt, um eine vollständige RAM-Auslastung zu vermeiden:

- **innodb_buffer_pool_size** : Dieser Puffer enthält Datenseiten und Indizes im Speicher. Es wird empfohlen, im RAM zu arbeiten, um bessere Leistung zu erzielen (Reduzierung der I/O-Last). Er ist hier auf etwa 60% der RAM-Größe der Instanz festgelegt.
- **innodb_buffer_pool_instances** : Teilt den Buffer Pool in mehrere "Instanzen" auf, um die interne Sperrenkontention zu reduzieren (bei vielen CPU-Threads).
- **max_allowed_packet** : Maximale Größe eines Pakets oder Ergebnisses, das in einer Abfrage gesendet/empfangen werden kann. Das Limit wird je nach Instanzgröße angepasst, um den Speicher zu schützen.
- **table_open_cache** : Anzahl der Tabellen, die MariaDB gleichzeitig offen halten kann. Wird an die Anzahl der Verbindungen angepasst.
> **Wichtiger Hinweis** : Es wird dringend davon abgeraten, das `performance_schema` von MariaDB auf kleinen Instanzen (Größen unter **X-Large**) zu aktivieren oder zu verwenden. Dieses verbraucht erhebliche Ressourcen, insbesondere kritischen RAM.