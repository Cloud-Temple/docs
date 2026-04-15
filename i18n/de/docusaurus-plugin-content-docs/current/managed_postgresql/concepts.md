---
title: Konzepte
sidebar_position: 1
---

# Schlüsselkonzepte von Managed PostgreSQL

Dieser Abschnitt stellt die grundlegenden Konzepte unseres **Managed PostgreSQL**-Dienstes vor. Das Verständnis dieser Prinzipien hilft Ihnen, das Beste aus Ihrer verwalteten Datenbank herauszuholen und ihre Fähigkeiten mit Ihren Anwendungsanforderungen und Sicherheitsanforderungen in Einklang zu bringen.

## Souveränität und SecNumCloud-Konformität

Im Mittelpunkt unseres Angebots steht die **digitale Souveränität**. Der Managed PostgreSQL-Dienst wird vollständig auf der Cloud Temple-Infrastruktur gehostet, die von der ANSSI mit **SecNumCloud 3.2** qualifiziert wurde.

- **100% Hosting in Frankreich**: Ihre Daten verbleiben auf dem nationalen Territorium, geschützt vor extraterritorialen Gesetzen.
- **Native Compliance**: Die Lösung ist so konzipiert, dass sie die strengsten regulatorischen Anforderungen erfüllt (DSGVO, HDS, LPM, NIS2, PCI-DSS).
- **Open Source und Reversibilität**: Durch die Verwendung offener Standards wie PostgreSQL Community Server und Patroni garantieren wir die Abwesenheit von technologischer Abhängigkeit (*Vendor Lock-in*) und vollständige Datenportabilität.

## Hochverfügbarkeitsarchitektur: Patroni Cluster

Für verteilte Umgebungen basiert unser Dienst auf **Patroni Cluster**, um Hochverfügbarkeit ohne Datenverlust zu bieten.

- **Synchrone Replikation**: Im Gegensatz zur herkömmlichen asynchronen Replikation wird jede Transaktion auf allen Clusterknoten validiert, *bevor* sie bestätigt wird. Dies garantiert ein **Recovery Point Objective (RPO) von null**: Keine validierten Daten können bei einem Ausfall verloren gehen.
- **Multi-AZ-Verteilung**: Der Cluster ist auf drei verschiedene Verfügbarkeitszonen (AZ) verteilt. Der Ausfall eines ganzen Rechenzentrums verursacht keine Dienstunterbrechung oder Datenverlust.
- **Automatisches Failover**: Bei einem Vorfall auf einem Knoten wird der Datenverkehr automatisch auf gesunde Knoten umgeleitet, was ein **minimales Recovery Time Objective (RTO)** gewährleistet.

## Bereitstellungsmodelle

Wir bieten zwei Modelle an, um sich der Kritikalität Ihrer Workloads anzupassen.

### 1. StandAlone

Dieses Modell stellt eine einzelne Instanz des PostgreSQL-Engines bereit.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich perfekt für einfache Anwendungen wie CMS, die nur einen einzigen Endpunkt für die Datenbankverbindung verwenden.
- **Resilienz**: Obwohl es sich um eine einzelne Instanz handelt, wird der zugrunde liegende Speicher auf 3 AZs repliziert, was einen automatischen Neustart in einer anderen AZ bei einem Hardware-Ausfall ermöglicht.
- **SLA**: 99,9% (außerhalb der Wartungsfenster).

### 2. Distributed

Dieses Modell stellt einen **Patroni-Cluster aus 3 Instanzen** des PostgreSQL-Engines bereit, ergänzt durch einen **PgBouncer**-Proxy.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich perfekt für Anwendungen mit verteiltem Zugriff, wie Daten- oder Business-Intelligence-Anwendungen, die von schreibgeschütztem Zugriff ohne Auswirkungen auf die Datenaufnahme profitieren.
- **Komponenten**:
  - **3 PostgreSQL-Knoten**: Ein primärer Lese-Schreib-Knoten (RW) und zwei sekundäre schreibgeschützte Knoten (RO).
  - **PgBouncer-Proxy**: Ein intelligenter Router, der Anfragen verteilt. Er sendet Schreibvorgänge an den primären Knoten und verteilt Lesevorgänge auf die sekundären Knoten (*Read/Write Splitting*), was die Leistung optimiert.
- **SLA**: 99,9% (außerhalb der Wartungsfenster).

> **Wichtiger Hinweis**: Es ist nicht möglich, das Bereitstellungsmodell eines vorhandenen Clusters zu ändern (z. B. von *StandAlone* zu *Distributed*). Dieser Vorgang erfordert die Erstellung eines neuen Clusters im gewünschten Modell über eine PiTR-Wiederherstellung.

## Backup und Wiederherstellung (PITR)

Der Schutz Ihrer Daten wird durch eine doppelte Backup-Strategie gewährleistet.

1. **Physisches Backup (Point-in-Time Recovery - PITR)**:
    - Wir führen täglich vollständige physische Backups mit `pg_basebackup` durch (ohne Dienstunterbrechung).
    - Transaktionsprotokolle (*WAL*) werden kontinuierlich archiviert.
    - Diese Kombination ermöglicht eine Wiederherstellung "auf die Sekunde genau" bis zum Zeitpunkt kurz vor einem Vorfall.

2. **Logisches Backup (`pg_dump`)**:
    - Logische Exporte von Datenbanken werden ebenfalls durchgeführt.
    - Sie bieten eine feine Granularität zum Wiederherstellen oder Exportieren einer einzelnen Datenbank.

Alle Backups sind im Ruhezustand verschlüsselt und auf unserem S3 Object Storage gespeichert, der selbst SecNumCloud-qualifiziert ist.

## Mehrstufige Sicherheit

Sicherheit ist in jede Schicht des Dienstes integriert.

- **Netzwerkisolierung**: Datenbankinstanzen sind **niemals im Internet exponiert**. Der Zugriff erfolgt ausschließlich über das private Netzwerk des Kunden.
- **End-to-End-Verschlüsselung**:
  - **Im Transit**: Alle Verbindungen (Client zu Datenbank und zwischen Clusterknoten) sind mit TLS 1.3 verschlüsselt.
  - **Im Ruhezustand**: Daten auf Disk und Backups sind mit AES-256 verschlüsselt.
- **Zugriffsverwaltung**: Die Authentifizierung ist sicher und die Rechte werden nach dem Prinzip der minimalen Berechtigung verwaltet.

## Managed Service ("Zero Ops")

Das Ziel von Managed PostgreSQL ist es, Sie von der operationellen Komplexität zu entlasten. Unsere Teams sorgen für:

- Provisionierung und Erstkonfiguration.
- Vollständiges Lebenszyklusmanagement: kleine Updates, Anwendung von Sicherheits-Patches.
- 24/7-Überwachung der Infrastruktur und des Dienstes.
- Verwaltung und Überprüfung der Backups.

Dies ermöglicht es Ihren Teams, sich auf die Anwendungsentwicklung und die Nutzung Ihrer Daten zu konzentrieren.

## Versionsrichtlinie & Lebenszyklus

Die PostgreSQL-Community veröffentlicht Versionen mit Langzeitunterstützung (LTS), was Stabilität und Vorhersehbarkeit garantiert. Unser Dienst basiert auf diesen Versionen, um die Langlebigkeit Ihrer Infrastruktur zu gewährleisten.

| Version | Typ | Unterstützt bis |
| :--- | :--- | :--- |
| **PostgreSQL 15** | LTS | Nov 2027 |
| **PostgreSQL 16** | LTS | Nov 2028 |

- **Kleine Updates**: Sicherheits-Patches und Bug-Fixes werden von unseren Teams in *Rolling Update* (Knoten für Knoten) angewendet, um keine Dienstunterbrechung zu verursachen.
- **Große Updates**: Große Versionsupgrades werden in Zusammenarbeit mit Ihnen geplant, um sich an Ihren Zeitplan anzupassen.
- **Supportende**: Wir benachrichtigen Sie mindestens 180 Tage vor dem Supportende einer LTS-Version, um die Migration zur nächsten Version zu planen.

## Instanzgrößen

***StandAlone***- und ***Distributed***-Instanzen sind in vordefinierten Größen verfügbar:

| Größe | vCPU/Knoten | RAM/Knoten | Max Verb. | Working Set Max | DB Gesamt Max |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Micro** | 1 | **2.00 Gi** | **40** | **1-2 GiB** | **2-8 GiB** |
| **Small** | 1 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Medium** | 2 | **4.00 Gi** | **80** | **2-5 GiB** | **8-16 GiB** |
| **Med-Large**| 2 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **Large** | 4 | **8.00 Gi** | **150** | **4-10 GiB** | **16-32 GiB** |
| **X-Large** | 4 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **2X-Large**| 8 | **16.00 Gi** | **250** | **8-20 GiB** | **32-64 GiB** |
| **3X-Large**| 8 | **32.00 Gi** | **500** | **16-40 GiB** | **64-128 GiB** |
| **4X-Large**| 16 | **32.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **5X-Large**| 16 | **64.00 Gi** | **500** | **32-80 GiB** | **128-256 GiB** |
| **6X-Large**| 32 | **128.00 Gi**| **500** | **64-160 GiB** | **256-512 GiB** |

> **Hinweis**: Der Speicher wird separat provisioniert und kann im laufenden Betrieb erhöht werden (von 2Gi auf 512Gi) (aber nicht reduziert, außer durch Neuerstellen einer neuen Instanz).
