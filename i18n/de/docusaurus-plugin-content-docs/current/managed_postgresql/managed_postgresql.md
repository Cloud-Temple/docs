---
title: Übersicht
---

# Managed PostgreSQL (Vorschau)

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien zur Beherrschung unserer Infrastruktur.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anweisungen folgen.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
</div>

---

### Übersicht
>
> Dieses Produkt befindet sich in der Vorschauversion, und seine Dokumentation kann Fehler oder Ungenauigkeiten enthalten.

**Managed PostgreSQL (on Kubernetes) by Cloud Temple** ist eine verwaltete PostgreSQL-Datenbankmotorlösung, die auf Kubernetes gehostet wird. Sie ergänzt die Angebote für verwaltete Datenbankmotoren auf virtuellen Maschinen (hier **Managed PostgreSQL (on IaaS)** genannt).

Dieses Angebot ist für Kunden geeignet, die Kubernetes-Workloads mit PostgreSQL-Datenbanken haben, oder für Kunden, die viele PostgreSQL-Datenbankmotoren auf einem einzigen Kubernetes-Cluster zusammenfassen möchten (Konsolidierung). Es eignet sich besonders gut für kleine und mittelgroße Datenbanken, die kein Tuning oder keine spezifischen Funktionen benötigen. Für große Datenbanken oder solche, die ein besonderes Tuning erfordern, ist es vorzuziehen, das **Managed PostgreSQL (on IaaS)**-Angebot zu wählen, das mehr Anpassungen durch unsere DBA-Expertenteams ermöglicht.

### Hauptvorteile

- **Souveränität und Reversibilität**: Die Lösung basiert ausschließlich auf Open-Source-Standards, um jegliche technologische Abhängigkeit zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **Einfachheit und Delegation**: Die Lösung ermöglicht es, Cloud-Temple die Verwaltung der Datenbankmotoren zu übertragen, insbesondere: Updates und Backups.

## Bereitstellungsmodelle

Wir bieten zwei Bereitstellungsmodelle an, um Ihre Anforderungen zu erfüllen: ***StandAlone*** oder ***Distributed***.

### StandAlone

Das ***StandAlone***-Modell stellt eine einzelne Instanz des PostgreSQL-Engines in einer Multi-AZ-Infrastruktur bereit.

Der von dieser Instanz verwendete Speicher wird auf 3 AZs repliziert und ermöglicht einen automatischen Neustart der PostgreSQL-Instanz in einer anderen AZ bei einem Ausfall.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich perfekt für einfache Anwendungen wie CMS, die nur einen einzigen Endpunkt für die Datenbankverbindung verwenden.
- **Hauptpunkte**:
  - 1 Datenbankmotorinstanz
  - Speicher auf 3 AZs verteilt für automatische Wiederherstellung bei einem Ausfall
  - Physische und logische Backups
  - SLA 99,9 % (außerhalb der Wartungsfenster)

### Distributed

Das ***Distributed***-Modell stellt einen Cluster mit 3 PostgreSQL-Engine-Instanzen bereit, mit Patroni im "Single Primary"-Modus und PgBouncer:

- Ein PgBouncer-Endpunkt ermöglicht das Routing zu den verschiedenen Instanzen je nach Anfragetyp (Lesen oder Schreiben).
- Die Lese-Schreib-Instanz (RW) ist über einen spezifischen Endpunkt zugänglich.
- Schreibgeschützte Instanzen (RO) sind über einen anderen spezifischen Endpunkt zugänglich.

Anwendungen können somit RW- oder RO-Verbindungen verwenden oder PgBouncer selbst zu den am besten geeigneten Endpunkten weiterleiten lassen.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich perfekt für Anwendungen mit verteiltem Zugriff, wie Daten- oder Business-Intelligence-Anwendungen, die von schreibgeschütztem Zugriff ohne Auswirkungen auf die Datenaufnahme profitieren.
- **Hauptpunkte**:
  - 3 Datenbankmotorinstanzen mit Patroni im "Single Primary"-Modus
  - PgBouncer-Proxy für effizientes Query-Routing.
  - Speicher auf 3 AZs verteilt für automatische Wiederherstellung bei einem Ausfall
  - PiTR und logische Backups
  - SLA 99,9 % (außerhalb der Wartungsfenster)

### Gemeinsame Funktionen

#### Versionen

PostgreSQL-Engines können aus allen unterstützten Versionen ausgewählt werden (derzeit 14 bis 18) [Siehe "Versioning Policy" auf der offiziellen PostgreSQL-Website](https://www.postgresql.org/support/versioning/)

#### Backup

Es werden 2 Arten von Backups implementiert:

- Point in Time Restoration (PiTR): tägliches physisches Backup des gesamten Engines und seiner Transaktionsprotokolle (WAL), das die Wiederherstellung des gesamten Servers zu einem genauen früheren Zeitpunkt ohne Datenverlust ermöglicht.
- Logisches Backup (pg_dump): logische Datenbankexporte für individuelle Wiederherstellung/Export je Datenbank.

Alle Backups verwenden Cloud-Temple S3-Speicher (SNC-qualifiziert) mit Verschlüsselung im Ruhezustand.
