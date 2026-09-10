---
title: Übersicht
---

# Managed MariaDB <span class="title-preview-badge">Preview</span>

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Lernen Sie die Grundlagen und wesentlichen Prinzipien kennen, um unsere Infrastruktur zu beherrschen.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Konzepte erkunden →</a>
  </div>
  <div class="card">
    <h3>Schnellstart</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anweisungen folgen.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Quickstart starten →</a>
  </div>
</div>

---

### Übersicht

**MariaDB Managé (on Kubernetes) by Cloud Temple** ist eine verwaltete Lösung für die MariaDB-Datenbank-Engine, die auf Kubernetes betrieben wird. Sie ergänzt die Angebote für verwaltete Datenbank-Engines auf virtuellen Maschinen (nommées ici **MariaDB Managé (on IaaS)**)

Dieses Produkt eignet sich für Kunden, die Kubernetes-Workloads mit MariaDB/MySQL-Datenbanken betreiben, oder für Kunden, die mehrere MariaDB-Datenbank-Engines auf einem einzigen Kubernetes-Cluster zusammenfassen (mutualisation) möchten. Es ist besonders gut für kleine und mittlere Datenbanken geeignet, die kein spezifisches Tuning oder spezielle Funktionen erfordern. Für große Datenbanken oder solche, die ein spezielles Tuning benötigen, ist es ratsamer, das Produkt **MariaDB Managé (on IaaS)** zu wählen, das durch unsere DBA-Expertenteams mehr Anpassungsmöglichkeiten bietet.

Die MariaDB-Engines können in der Version 11.4 LTS oder 11.8 LTS gewählt werden.

Alle Backups nutzen den Cloud-Temple S3-Speicher (qualifié SNC) mit at-rest-Verschlüsselung.

![Architecture stack](@site/docs/managed_mariadb/images/stack.png)

### Kernvorteile

- **Souveränität und Reversibilität** : Die Lösung basiert ausschließlich auf Open-Source-Standards, um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **Einfachheit und Delegation** : Die Lösung ermöglicht es, die Verwaltung der Datenbank-Engines an Cloud-Temple zu delegieren, insbesondere: Updates und Backups.

## Bereitungsmodelle

Wir bieten zwei Bereitungsmodelle an, um Ihren Anforderungen gerecht zu werden:  ***StandAlone*** oder ***MultiAZ***.

### StandAlone

Das ***StandAlone***-Modell stellt eine einzelne Instanz des MariaDB-Engines in einer Multi-AZ-Infrastruktur bereit.

Der von dieser Instanz verwendete Speicher wird auf 3 AZ repliziert und ermöglicht einen automatischen Neustart der MariaDB-Instanz auf einer anderen AZ im Fehlerfall.

- **Einsatzszenario** : Dieses Bereitstellungsmodell eignet sich hervorragend für einfache Anwendungen wie CMS, die nur einen einzelnen Endpunkt zur Verbindung mit den Datenbanken verwenden.
- **Kernmerkmale** :
  - 1 Datenbank-Engine-Instanz
  - auf 3 AZ verteilter Speicher für automatische Wiederherstellung im Fehlerfall
  - physische (`mariabackup`) und logische (`mysqldump`) Backups
  - SLA von 99,9 % (außerhalb von Wartungsfenstern)

![Architecture StandAlone](@site/docs/managed_mariadb/images/StandAlone.png)

### MultiAZ

Das ***MultiAZ***-Modell bereitstellt einen Cluster aus 3 Instanzen des MariaDB-Engines, mit Galera im "single primary"-Modus und MaxScale:

- Ein MaxScale-Endpunkt ermöglicht das Routing zu den verschiedenen Instanzen basierend auf dem Abfragetyp (read oder write).
  ![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)
- Die Lese-/Schreib-Instanz (RW) ist über einen spezifischen Endpunkt zugänglich.
- Die 2 schreibgeschützten Instanzen (RO) sind über einen weiteren spezifischen Endpunkt zugänglich.

Daher können Anwendungen entweder RW- oder RO-Verbindungen verwenden oder MaxScale das automatische Routing zu den am besten geeigneten Endpunkten überlassen.

- **Einsatzszenario** : Dieses Bereitstellungsmodell eignet sich hervorragend für Anwendungen mit verteiltem Zugriff, wie Daten- oder Business-Intelligence-Anwendungen, die von schreibgeschütztem Zugriff profitieren, ohne den Datenimport zu beeinträchtigen.
- **Kernmerkmale** :
  - 3 Datenbank-Engine-Instanzen mit Galera im "single primary"-Modus
  - MaxScale-Proxy für ein effizientes Abfrage-Routing.
  - Verteilte Speicherung über 3 AZ für automatische Failover-Wiederherstellung bei Ausfall
  - Physische (`mariabackup`) und logische (`mysqldump`) Backups
  - SLA von 99,9 % (außerhalb von Wartungsfenstern)

![Architecture MultiAZ](@site/docs/managed_mariadb/images/Distributed.png)