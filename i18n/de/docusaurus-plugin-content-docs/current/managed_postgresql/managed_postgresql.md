---
title: Übersicht
---

# Verwaltetes PostgreSQL <span class="title-preview-badge">Vorschau</span>

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Erfahren Sie die Grundlagen und wichtigsten Prinzipien, um unsere Infrastruktur zu meistern.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell mit klaren und einfachen Anweisungen.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
</div>

---

### Übersicht
>
> Dieses Produkt befindet sich in einer Vorabversion, und die Dokumentation kann Fehler oder Ungenauigkeiten enthalten.

**PostgreSQL Managé (on Kubernetes) by Cloud Temple** ist eine verwaltete Lösung für die PostgreSQL-Datenbank-Engine, die auf Kubernetes gehostet wird. Sie ergänzt die Angebote für verwaltete Datenbank-Engines auf virtuellen Maschinen (nommées ici **PostgreSQL Managé (on IaaS)**)

Dieses Produkt eignet sich für Kunden mit Kubernetes-Workloads, die PostgreSQL-Datenbanken benötigen, oder für Kunden, die viele PostgreSQL-Datenbank-Engines auf einem einzigen Kubernetes-Cluster (mutualisation) konsolidieren möchten. Es eignet sich besonders gut für Datenbanken kleiner und mittlerer Größe, die kein Tuning oder spezifische Funktionen erfordern. Für Datenbanken großer Größe oder solche, die ein spezifisches Tuning erfordern, ist es besser, sich für das Produkt **PostgreSQL Managé (on IaaS)** zu entscheiden, das mehr Anpassungen durch unsere DBA-Experten-Teams ermöglicht.

### Hauptvorteile

- **Souveränität und Reversibilität** : Die Lösung stützt sich ausschließlich auf Open-Source-Standards, um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **Einfachheit und Delegation** : Die Lösung ermöglicht die Delegation der Verwaltung der Datenbank-Engines an Cloud-Temple, insbesondere: Updates und Backups.

## Bereitstellungsmodelle

Wir bieten zwei Bereitstellungsmodelle an, um Ihre Anforderungen zu erfüllen:  ***StandAlone*** oder ***Distributed***.

### StandAlone

Das ***StandAlone***-Modell stellt eine einzelne Instanz der PostgreSQL-Engine in einer Multi-AZ-Infrastruktur bereit.

Der von dieser Instanz genutzte Speicher wird über 3 AZ repliziert und ermöglicht einen automatischen Neustart der PostgreSQL-Instanz in einer anderen AZ im Fehlerfall.

- **Anwendungsfall** : Dieses Bereitstellungsmodell eignet sich hervorragend für einfache Anwendungen wie CMS, die nur einen einzigen Endpoint zur Verbindung mit den Datenbanken nutzen.
- **Kernpunkte** :
  - 1 Instanz der Datenbank-Engine
  - Speicher, der über 3 AZ verteilt ist, für einen automatischen Failover im Fehlerfall
  - Physische und logische Backups
  - SLA 99,9 % (außerhalb der Wartungsfenster)

### Distributed

Das ***Distributed***-Modell stellt einen Cluster aus 3 Instanzen der PostgreSQL-Engine bereit, mit Patroni im "single primary"-Modus und PgBouncer:

- Ein PgBouncer-Endpoint ermöglicht das Routing zu den verschiedenen Instanzen basierend auf dem Abfragetyp (read oder write).
- Die Lese-Schreib-Instanz (RW) ist über einen spezifischen Endpoint erreichbar.
- Die Nur-Lese-Instanzen (RO) sind über einen weiteren spezifischen Endpoint erreichbar.

Dementsprechend können Anwendungen wahlweise RW- oder RO-Verbindungen nutzen oder PgBouncer das automatische Routing zu den am besten geeigneten Endpoints überlassen.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich hervorragend für Anwendungen mit verteiltem Zugriff, wie Data- oder Business-Intelligence-Anwendungen, die von Nur-Lese-Zugriffen profitieren, ohne die Datenaufnahme zu beeinträchtigen.
- **Kernpunkte**:
  - 3 Datenbank-Engine-Instanzen mit Patroni im "single primary"-Modus
  - PgBouncer-Proxy für ein effizientes Routing von Abfragen.
  - Auf 3 AZs verteilter Speicher für die automatische Wiederherstellung im Fehlerfall
  - PiTR- und logische Sicherungen
  - SLA 99,9 % (außerhalb von Wartungsfenstern)

### Gemeinsame Funktionen

#### Versionen

Die PostgreSQL-Engines können aus allen unterstützten Versionen ausgewählt werden (derzeit 14 bis 18) [Siehe „Versioning Policy“ auf der offiziellen PostgreSQL-Website](https://www.postgresql.org/support/versioning/)

#### Sicherung

Zwei Sicherungstypen werden eingesetzt:

- Point-in-Time-Restore (PiTR) : tägliche physische Sicherung der gesamten Engine und ihrer Transaktionsprotokolle (WAL), die eine Wiederherstellung des gesamten Servers auf ein exaktes vorheriges Datum ohne Transaktionsverlust ermöglicht.
- Logische Sicherung (pg_dump) : logische Exporte der Datenbanken für eine individuelle Wiederherstellung oder einen individuellen Export pro Datenbank.

Alle Sicherungen nutzen den S3-Speicher Cloud-Temple (SNC-zertifiziert) mit at-rest-Verschlüsselung.