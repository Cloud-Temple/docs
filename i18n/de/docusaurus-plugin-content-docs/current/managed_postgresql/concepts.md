---
title: Konzepte
sidebar_position: 1
---

# Schlüsselkonzepte von Managed PostgreSQL

Dieser Abschnitt erläutert die grundlegenden Konzepte unseres **Managed PostgreSQL**-Diensts. Das Verständnis dieser Prinzipien hilft Ihnen, das Beste aus Ihrer verwalteten Datenbank herauszuholen, indem Sie ihre Fähigkeiten an Ihre Anwendungsanforderungen und Sicherheitsrichtlinien anpassen.

## Souveränität und SecNumCloud-Konformität

Im Kern unseres Produkts steht die **digitale Souveränität**. Der PostgreSQL-Managed-Service wird vollständig auf der Cloud-Temple-Infrastruktur gehostet, die von der ANSSI als **SecNumCloud 3.2** qualifiziert wurde.

- **100 % Hosting in Frankreich** : Ihre Daten verbleiben auf nationalem Territorium und sind vor extraterritorialen Gesetzen geschützt.
- **Native Konformität** : Die Lösung wurde entwickelt, um den strengsten regulatorischen Anforderungen zu entsprechen (RGPD, HDS, LPM, NIS2, PCI-DSS).
- **Open Source und Reversibilität** : Durch die Nutzung offener Standards wie PostgreSQL Community Server und Patroni gewährleisten wir eine technologische Unabhängigkeit (*Vendor Lock-in*) und eine vollständige Portabilität Ihrer Daten.

## Hochverfügbarkeitsarchitektur: Patroni Cluster

Für verteilte Umgebungen stützt sich unser Produkt auf **Patroni Cluster**, um Hochverfügbarkeit ohne Datenverlust zu gewährleisten.

- **Synchrone Replikation** : Im Gegensatz zur traditionellen asynchronen Replikation wird jede Transaktion auf allen Clusterknoten *vor* der Bestätigung validiert. Dies gewährleistet ein **Wiederherstellungszielpunkt (RPO) von null** : keine bestätigten Daten gehen im Fehlerfall verloren.
- **Multi-AZ-Verteilung** : Der Cluster ist auf drei separate Verfügbarkeitszonen (AZ) verteilt. Der Ausfall eines gesamten Rechenzentrums führt weder zu Dienstunterbrechungen noch zu Datenverlust.
- **Automatisches Failover** : Im Falle eines Vorfalls auf einem Knoten wird der Verkehr automatisch auf die gesunden Knoten umgeleitet, wodurch ein **minimales Wiederherstellungszeitziel (RTO)** sichergestellt wird.

## Bereitstellungsmodelle

Wir bieten zwei Modelle an, die sich an die Kritikalität Ihrer Workloads anpassen.

### 1. StandAlone

Dieses Modell stellt eine einzelne Instanz der PostgreSQL-Engine bereit.

- **Anwendungsfall** : Dieses Bereitstellungsmodell eignet sich hervorragend für einfache Anwendungen wie CMS, die nur einen einzigen Endpoint zur Verbindung mit Datenbanken verwenden.
- **Resilienz** : Obwohl es sich um eine einzelne Instanz handelt, wird der zugrunde liegende Speicher in 3 AZ repliziert, was einen automatischen Neustart in einer anderen AZ bei einem Hardwareausfall ermöglicht.
- **SLA** : 99.9% (außerhalb der Wartungsfenster).

### 2. Verteilt

Dieses Modell stellt einen **Patroni-Cluster mit 3 Instanzen** der PostgreSQL-Engine bereit, ergänzt durch einen **PgBouncer**-Proxy.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich hervorragend für Anwendungen mit verteiltem Zugriff, wie Data- oder Business-Intelligence-Anwendungen, die von schreibgeschütztem Zugriff profitieren, ohne die Datenaufnahme zu beeinträchtigen.
- **Komponenten**:
  - **3 PostgreSQL-Knoten**: Ein primärer Knoten für Lese-/Schreibzugriff (RW) und zwei sekundäre Knoten für Lesezugriff (RO).
  - **PgBouncer-Proxy**: Ein intelligenter Router, der Anfragen verteilt. Er leitet Schreibvorgänge an den primären Knoten weiter und verteilt Lesevorgänge auf die sekundären Knoten (*read/write splitting*), wodurch die Leistung optimiert wird.
- **SLA**: 99,9 % (außerhalb von Wartungsfenstern).

> **Wichtiger Hinweis**: Das Bereitstellungsmodell eines bestehenden Clusters kann nicht geändert werden (z. B. von *StandAlone* auf *Distributed*). Für diese Änderung muss ein neuer Cluster im gewünschten Modell erstellt werden, wobei eine PiTR-Wiederherstellung erforderlich ist.

## Sicherung und Wiederherstellung (PITR)

Der Schutz Ihrer Daten wird durch eine zweistufige Sicherungsstrategie gewährleistet.

1. **Physische Sicherung (Point-in-Time Recovery - PITR)** :
    - Wir führen täglich vollständige physische Sicherungen mit `pg_basebackup` durch (ohne Dienstunterbrechung).
    - Transaktionsprotokolle (*WAL*) werden kontinuierlich archiviert.
    - Diese Kombination ermöglicht eine Wiederherstellung „bis zur Sekunde genau“ bis zum Zeitpunkt unmittelbar vor einem Vorfall.

2. **Logische Sicherung (`pg_dump`)** :
    - Es werden zudem logische Exporte der Datenbanken erstellt.
    - Sie bieten eine hohe Granularität, um einzelne Datenbanken wiederherzustellen oder zu exportieren.

Alle Sicherungen sind bei der Speicherung verschlüsselt und werden in unserem Object Storage S3 abgelegt, der zudem SecNumCloud-zertifiziert ist.

## Mehrstufige Sicherheit

Die Sicherheit ist in jede Schicht des Dienstes integriert.

- **Netzwerkisolation** : Datenbankinstanzen werden **niemals im Internet freigegeben**. Der Zugriff erfolgt ausschließlich über das private Netzwerk des Kunden.
- **End-to-End-Verschlüsselung** :
  - **Bei der Übertragung** : Alle Verbindungen (Client zur Datenbank und zwischen den Clusterknoten) werden mit TLS 1.3 verschlüsselt.
  - **Im Ruhezustand** : Daten auf der Festplatte und Backups werden mit AES-256 verschlüsselt.
- **Zugriffsverwaltung** : Die Authentifizierung ist sicher und Berechtigungen werden nach dem Prinzip des geringsten Privilegs verwaltet.

## Managed Service ("Zéro Ops")

Das Ziel von PostgreSQL Managed ist es, Sie von der operativen Komplexität zu entlasten. Unsere Teams übernehmen:

- Das Provisioning und die initiale Konfiguration.
- Das vollständige Lifecycle-Management: Minor-Updates, Anwendung von Sicherheits-Patches.
- Die 24/7-Überwachung der Infrastruktur und des Dienstes.
- Das Management und die Prüfung von Backups.

Dies ermöglicht es Ihren Teams, sich auf die Anwendungsentwicklung und die Nutzung ihrer Daten zu konzentrieren.

## Versionsrichtlinie & Lebenszyklus

Die PostgreSQL-Community veröffentlicht Versionen mit Langzeitunterstützung (LTS), was Stabilität und Planbarkeit gewährleistet. Unser Service basiert auf diesen Versionen, um die langfristige Funktionsfähigkeit Ihrer Infrastruktur zu sichern.

| Version | Typ | Unterstützt bis |
| :--- | :--- | :--- |
| **PostgreSQL 15** | LTS | Nov 2027 |
| **PostgreSQL 16** | LTS | Nov 2028 |

- **Kleinere Updates**: Sicherheits-Patches und Bugfixes werden von unseren Teams im *Rolling-Update*-Verfahren (Knoten für Knoten) eingespielt, um keine Dienstunterbrechungen zu verursachen.
- **Größere Updates**: Major-Upgrade werden in Abstimmung mit Ihnen geplant, um sich an Ihren Zeitplan anzupassen.
- **Ende der Unterstützung**: Wir informieren Sie mindestens 180 Tage vor dem Auslauf einer LTS-Version, um die Migration zur nächsten Version zu planen.

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

> **Hinweis** : Der Speicher wird separat bereitgestellt und kann online erweitert werden (von 2Gi bis 128Gi) (jedoch nicht verkleinert, außer durch das Erstellen einer neuen Instanz.).