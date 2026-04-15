---
title: Konzepte
sidebar_position: 1
---

# Schlüsselkonzepte von Managed MariaDB

Dieser Abschnitt stellt die grundlegenden Konzepte unseres **Managed MariaDB**-Dienstes vor. Das Verständnis dieser Prinzipien hilft Ihnen, das Beste aus Ihrer verwalteten Datenbank herauszuholen und deren Fähigkeiten mit Ihren Anwendungsanforderungen und Sicherheitsanforderungen in Einklang zu bringen.

## Souveränität und SecNumCloud-Konformität

Im Kern unseres Angebots steht die **digitale Souveränität**. Der Managed MariaDB-Dienst wird vollständig auf der Cloud Temple-Infrastruktur gehostet, die von der ANSSI mit **SecNumCloud 3.2** qualifiziert ist.

- **100% Hosting in Frankreich**: Ihre Daten verbleiben auf nationalem Territorium, geschützt vor extraterritorialen Gesetzen.
- **Native Konformität**: Die Lösung ist darauf ausgelegt, die strengsten regulatorischen Anforderungen zu erfüllen (DSGVO, HDS, LPM, NIS2, PCI-DSS).
- **Open Source und Reversibilität**: Durch den Einsatz offener Standards wie MariaDB Community Server und Galera garantieren wir die Abwesenheit technologischer Abhängigkeiten (*Vendor Lock-in*) und eine vollständige Portabilität Ihrer Daten.

## Hochverfügbarkeitsarchitektur: Galera Cluster + MaxScale

Für verteilte Umgebungen basiert unser Dienst auf **Galera Cluster**, um Hochverfügbarkeit ohne Datenverlust zu bieten.

- **Synchrone Replikation**: Im Gegensatz zur traditionellen asynchronen Replikation wird jede Transaktion auf allen Knoten des Clusters validiert, *bevor* sie bestätigt wird. Dies garantiert ein **Recovery Point Objective (RPO) von null**: Keine validierte Transaktion kann bei einem Ausfall verloren gehen.
- **Multi-AZ-Verteilung**: Der Cluster ist auf drei verschiedene Verfügbarkeitszonen (AZ) verteilt. Der Ausfall eines gesamten Rechenzentrums führt zu keiner Dienstunterbrechung oder Datenverlust.
- **Automatisches Failover**: Bei einem Vorfall auf einem Knoten wird der Datenverkehr automatisch auf die gesunden Knoten umgeleitet, was ein **minimales Recovery Time Objective (RTO)** gewährleistet.
- **MaxScale Proxy**: MaxScale ist ein fortschrittlicher Proxy, Router und Load Balancer für MariaDB. Er verwaltet automatisches Failover bei der Replikation, verteilt Anfragen (Schreibvorgänge zum Primary, Lesevorgänge zu Replicas über ReadWriteSplit) und bietet Filter für Cache, Audit (QLAfilter) oder Sicherheit (RegexFilter).

## Deployment-Modelle

Wir bieten zwei Modelle an, um sich der Kritikalität Ihrer Workloads anzupassen.

### 1. StandAlone

Dieses Modell stellt eine einzelne Instanz der MariaDB-Engine bereit.

- **Anwendungsfall**: Dieses Deployment-Modell eignet sich perfekt für einfache Anwendungen wie CMS, die nur einen einzigen Endpoint für die Datenbankverbindung verwenden.
- **Resilienz**: Obwohl es sich um eine einzelne Instanz handelt, ist der zugrundeliegende Speicher auf 3 AZ repliziert, was einen automatischen Neustart in einer anderen AZ bei einem Hardwarefehler ermöglicht.
- **SLA**: 99,9 % (außerhalb der Wartungsfenster).

### 2. Distributed

Dieses Modell stellt einen **Galera Cluster aus 3 Instanzen** der MariaDB-Engine bereit, ergänzt durch einen **MaxScale**-Proxy.

- **Anwendungsfall**: Dieses Deployment-Modell eignet sich perfekt für Anwendungen mit verteilten Zugriffen, wie Data- oder Business-Intelligence-Anwendungen, die von reinen Lesezugriffen ohne Auswirkungen auf die Datenaufnahme profitieren.
- **Komponenten**:
  - **3 MariaDB-Knoten**: Ein primärer Lese-Schreib-Knoten (RW) und zwei sekundäre Nur-Lese-Knoten (RO).
  - **MaxScale Proxy**: Ein intelligenter Router, der Anfragen verteilt. Er sendet Schreibvorgänge an den primären Knoten und verteilt Lesevorgänge auf alle Knoten (`ReadWriteSplit`), um die Leistung zu optimieren.
- **SLA**: 99,9 % (außerhalb der Wartungsfenster).

> **Wichtiger Hinweis**: Es ist nicht möglich, das Deployment-Modell eines bestehenden Clusters zu ändern (z. B. von *StandAlone* zu *Distributed*). Dieser Vorgang erfordert die Erstellung eines neuen Clusters im gewünschten Modell durch eine Wiederherstellung.

## Sicherung und Wiederherstellung (PITR)

Der Schutz Ihrer Daten wird durch eine doppelte Sicherungsstrategie gewährleistet.

1. **Physische Sicherung und Point-in-Time Recovery**:
    - Wir führen täglich vollständige physische Sicherungen durch (`mariabackup`) (ohne Dienstunterbrechung).
    - Mit der **distributed**-Version werden Transaktionsprotokolle (*binary logs*) kontinuierlich archiviert. Diese Kombination ermöglicht eine PiTR-Wiederherstellung bis zum Zeitpunkt kurz vor einem Vorfall.

2. **Logische Sicherung (`mysqldump`)**:
    - Logische Exporte der Datenbanken werden ebenfalls durchgeführt.
    - Sie bieten eine feine Granularität zum Wiederherstellen oder Exportieren einer einzelnen Datenbank.

Alle Sicherungen werden im Ruhezustand verschlüsselt und in unserem Object Storage S3 gespeichert, der selbst SecNumCloud-qualifiziert ist.

## Mehrstufige Sicherheit

Sicherheit ist in jede Schicht des Dienstes integriert.

- **Netzwerkisolation**: Datenbankinstanzen sind **niemals dem Internet ausgesetzt**. Der Zugriff erfolgt ausschließlich über das private Netzwerk des Kunden.
- **Ende-zu-Ende-Verschlüsselung**:
  - **Im Transit**: Alle Verbindungen (Client zur Datenbank und zwischen den Cluster-Knoten) sind mit TLS 1.3 verschlüsselt.
  - **Im Ruhezustand**: Daten auf der Festplatte (InnoDB-Tablespaces) und Sicherungen sind mit AES-256 verschlüsselt.
- **Zugriffsverwaltung**: Die Authentifizierung ist gesichert (Plugins `ed25519` oder `sha256_password`), und Rechte werden nach dem Prinzip der minimalen Berechtigungen verwaltet.

## Managed Service ("Zero Ops")

Das Ziel von Managed MariaDB ist es, Sie von der operativen Komplexität zu entlasten. Unsere Teams stellen sicher:

- Bereitstellung und Erstkonfiguration.
- Vollständiges Lebenszyklusmanagement: Minor-Updates, Anwendung von Sicherheitspatches.
- 24/7-Überwachung der Infrastruktur und des Dienstes.
- Verwaltung und Überprüfung der Sicherungen.

Dies ermöglicht es Ihren Teams, sich auf die Anwendungsentwicklung und die Nutzung ihrer Daten zu konzentrieren.

## Versionsrichtlinie & Lebenszyklus

Die MariaDB Foundation veröffentlicht Versionen mit Langzeit-Support (LTS), was Stabilität und Vorhersehbarkeit garantiert. Unser Dienst basiert auf diesen Versionen, um die Langlebigkeit Ihrer Infrastruktur zu gewährleisten.

| Version | Typ | Unterstützt bis |
| :--- | :--- | :--- |
| **MariaDB 11.4** | LTS | Mai 2029 |
| **MariaDB 11.8** | LTS | Juni 2028 |

- **Minor-Updates**: Sicherheitspatches und Bugfixes werden von unseren Teams in einem *Rolling Update* (Knoten für Knoten) angewendet, um keine Dienstunterbrechung zu verursachen.
- **Major-Updates**: Größere Versionsupgrades werden in Zusammenarbeit mit Ihnen geplant, um sich an Ihren Zeitplan anzupassen.
- **End-of-Support**: Wir benachrichtigen Sie mindestens 180 Tage vor dem End-of-Support einer LTS-Version, um die Migration zur nächsten Version zu planen.

## Instanzgrößen

Die ***StandAlone***- und ***Distributed***-Instanzen sind in vordefinierten Größen verfügbar:

| Größe | vCPU/Knoten | RAM/Knoten | Max Conn | Working Set Max | DB Total Max |
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

> **Hinweis**: Der Speicher wird separat bereitgestellt und kann live erhöht werden (von 2 Gi auf 512 Gi) (aber nicht reduziert, außer durch Erstellung einer neuen Instanz).
