---
title: Übersicht
---

import stack from '@site/docs/managed_mariadb/images/stack.png'
import StandAlone from '@site/docs/managed_mariadb/images/StandAlone.png'
import Distributed from '@site/docs/managed_mariadb/images/Distributed.png'
import maxscale from '@site/docs/managed_mariadb/images/maxscale.png'

# Verwaltete MariaDB <span class="title-preview-badge">Vorschau</span>


<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Erfahren Sie die Grundlagen und wesentlichen Prinzipien zur sicheren Nutzung unserer Infrastruktur.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell mit klaren und einfachen Anweisungen.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
</div>

---

### Überblick
>
> Dieses Produkt befindet sich in einer Vorabversion, und die Dokumentation kann Fehler oder Ungenauigkeiten enthalten.

**MariaDB Managé (on Kubernetes) by Cloud Temple** ist eine verwaltete Lösung für die MariaDB-Datenbank-Engine, die auf Kubernetes gehostet wird. Sie ergänzt die Angebote für verwaltete Datenbank-Engines auf virtuellen Maschinen (hier bezeichnet als **MariaDB Managé (on IaaS)**)

Dieses Produkt ist für Kunden geeignet, die Kubernetes-Workloads mit MariaDB/MySQL-Datenbanken betreiben, oder für Kunden, die zahlreiche MariaDB/PostgreSQL-Datenbank-Engines auf einem einzigen Kubernetes-Cluster zusammenfassen möchten (mutualisation). Es eignet sich besonders gut für Datenbanken kleiner und mittlerer Größe, die kein Tuning oder spezifische Funktionen erfordern. Für große Datenbanken oder solche, die ein spezielles Tuning erfordern, ist es ratsam, sich für das Produkt **MariaDB Managé (on IaaS)** zu entscheiden, das mehr Anpassungsmöglichkeiten durch unsere DBA-Experten-Teams bietet.

Die MariaDB-Engines können in der Version 11.4 LTS oder 11.8 LTS ausgewählt werden.

Alle Sicherungen verwenden den Cloud-Temple-S3-Speicher (qualifié SNC) mit Verschlüsselung im Ruhezustand (at-rest).

![Stack-Architektur](@site/docs/managed_mariadb/images/stack.png)

### Hauptvorteile

- **Souveränität und Reversibilität** : Die Lösung stützt sich ausschließlich auf Open-Source-Standards, um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **Einfachheit und Delegation** : Die Lösung ermöglicht die Delegation der Verwaltung der Datenbank-Engines an Cloud-Temple, insbesondere: Updates und Backups.

## Bereitstellungsmodelle

Wir bieten zwei Bereitstellungsmodelle an, um Ihre Anforderungen zu erfüllen:  ***StandAlone*** oder ***Distributed***.

### StandAlone

Das ***StandAlone***-Modell stellt eine einzelne Instanz der MariaDB-Engine in einer Multi-AZ-Infrastruktur bereit.

Der von dieser Instanz genutzte Speicher wird über 3 AZ repliziert und ermöglicht im Fehlerfall einen automatischen Neustart der MariaDB-Instanz in einer anderen AZ.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich hervorragend für einfache Anwendungen wie CMS, die nur einen einzigen Endpoint zur Verbindung mit Datenbanken verwenden.
- **Schlüsselmerkmale**:
  - 1 Datenbank-Engine-Instanz
  - über 3 AZ verteilter Speicher für automatisches Failover im Fehlerfall
  - physische (`mariabackup`) und logische (`mysqldump`) Backups
  - SLA 99.9 % (außerhalb von Wartungsfenstern)

![Architecture StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### Distributed

Das ***Distributed***-Modell stellt einen Cluster aus 3 MariaDB-Engine-Instanzen bereit, mit Galera im "Single Primary"-Modus und MaxScale:

- Ein MaxScale-Endpoint ermöglicht das Routing zu den verschiedenen Instanzen basierend auf dem Abfragetyp (Read oder Write).
![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)

- Die Lese-Schreib-Instanz (RW) ist über einen spezifischen Endpoint erreichbar.
- Die 2 schreibgeschützten Instanzen (RO) sind über einen anderen spezifischen Endpoint erreichbar.

Auf diese Weise können Anwendungen wahlweise RW- oder RO-Verbindungen nutzen oder MaxScale das automatische Routing zu den am besten geeigneten Endpoints überlassen.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich hervorragend für Anwendungen mit verteiltem Zugriff, wie Data- oder Business-Intelligence-Anwendungen, die von schreibgeschütztem Zugriff profitieren, ohne die Datenaufnahme zu beeinträchtigen.
- **Kernpunkte**:
  - 3 Datenbank-Engine-Instanzen mit Galera im "Single Primary"-Modus
  - MaxScale-Proxy für ein effizientes Abfrage-Routing.
  - Aufteilung des Speichers auf 3 AZs für automatische Wiederherstellung im Fehlerfall
  - PiTR- und logische Backups
  - SLA 99,9 % (außerhalb von Wartungsfenstern)

![Architecture Distributed](@site/docs/managed_mariadb/images/Distributed.png)