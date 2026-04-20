---
title: Übersicht
---


# Managed MariaDB (Vorschau)

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien zur Beherrschung unserer Infrastruktur.</p>
    <a href="./managed_mariadb/concepts" class="card-link">Konzepte erkunden &rarr;</a>
  </div>
  <div class="card">
    <h3>Erste Schritte</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anweisungen folgen.</p>
    <a href="./managed_mariadb/quickstart" class="card-link">Quickstart starten &rarr;</a>
  </div>
</div>

---

### Übersicht
>
> Dieses Produkt befindet sich in der Vorschauversion, und seine Dokumentation kann Fehler oder Ungenauigkeiten enthalten.

**Managed MariaDB (on Kubernetes) by Cloud Temple** ist eine verwaltete MariaDB-Datenbankmotorlösung, die auf Kubernetes gehostet wird. Sie ergänzt die Angebote für verwaltete Datenbankmotoren auf virtuellen Maschinen (hier **Managed MariaDB (on IaaS)** genannt).

Dieses Angebot ist für Kunden geeignet, die Kubernetes-Workloads mit MariaDB/MySQL-Datenbanken haben, oder für Kunden, die viele MariaDB/PostgreSQL-Datenbankmotoren auf einem einzigen Kubernetes-Cluster zusammenfassen möchten (Konsolidierung). Es eignet sich besonders gut für kleine und mittelgroße Datenbanken, die kein Tuning oder keine spezifischen Funktionen benötigen. Für große Datenbanken oder solche, die ein besonderes Tuning erfordern, ist es vorzuziehen, das **Managed MariaDB (on IaaS)**-Angebot zu wählen, das mehr Anpassungen durch unsere DBA-Expertenteams ermöglicht.

MariaDB-Engines können in Version 11.4 LTS oder 11.8 LTS gewählt werden.

Alle Backups verwenden Cloud-Temple S3-Speicher (SNC-qualifiziert) mit Verschlüsselung im Ruhezustand.

![Stack-Architektur](@site/docs/managed_mariadb/images/stack.png)

### Hauptvorteile

- **Souveränität und Reversibilität**: Die Lösung basiert ausschließlich auf Open-Source-Standards, um jegliche technologische Abhängigkeit zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **Einfachheit und Delegation**: Die Lösung ermöglicht es, Cloud-Temple die Verwaltung der Datenbankmotoren zu übertragen, insbesondere: Updates und Backups.

## Bereitstellungsmodelle

Wir bieten zwei Bereitstellungsmodelle an, um Ihre Anforderungen zu erfüllen: ***StandAlone*** oder ***Distributed***.

### StandAlone

Das ***StandAlone***-Modell stellt eine einzelne Instanz des MariaDB-Engines in einer Multi-AZ-Infrastruktur bereit.

Der von dieser Instanz verwendete Speicher wird auf 3 AZs repliziert und ermöglicht einen automatischen Neustart der MariaDB-Instanz in einer anderen AZ bei einem Ausfall.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich perfekt für einfache Anwendungen wie CMS, die nur einen einzigen Endpunkt für die Datenbankverbindung verwenden.
- **Hauptpunkte**:
  - 1 Datenbankmotorinstanz
  - Speicher auf 3 AZs verteilt für automatische Wiederherstellung bei einem Ausfall
  - Physische (`mariabackup`) und logische (`mysqldump`) Backups
  - SLA 99,9 % (außerhalb der Wartungsfenster)

![StandAlone-Architektur](@site/docs/managed_mariadb/images/StandAlone.png)

### Distributed

Das ***Distributed***-Modell stellt einen Cluster mit 3 MariaDB-Engine-Instanzen bereit, mit Galera im "Single Primary"-Modus und MaxScale:

- Ein MaxScale-Endpunkt ermöglicht das Routing zu den verschiedenen Instanzen je nach Anfragetyp (Lesen oder Schreiben).
![MaxScale](@site/docs/managed_mariadb/images/maxscale.png)
- Die Lese-Schreib-Instanz (RW) ist über einen spezifischen Endpunkt zugänglich.
- Die 2 schreibgeschützten Instanzen (RO) sind über einen anderen spezifischen Endpunkt zugänglich.

Anwendungen können somit RW- oder RO-Verbindungen verwenden oder MaxScale selbst zu den am besten geeigneten Endpunkten weiterleiten lassen.

- **Anwendungsfall**: Dieses Bereitstellungsmodell eignet sich perfekt für Anwendungen mit verteiltem Zugriff, wie Daten- oder Business-Intelligence-Anwendungen, die von schreibgeschütztem Zugriff ohne Auswirkungen auf die Datenaufnahme profitieren.
- **Hauptpunkte**:
  - 3 Datenbankmotorinstanzen mit Galera im "Single Primary"-Modus
  - MaxScale-Proxy für effizientes Query-Routing.
  - Speicher auf 3 AZs verteilt für automatische Wiederherstellung bei einem Ausfall
  - PiTR und logische Backups
  - SLA 99,9 % (außerhalb der Wartungsfenster)

![Distributed-Architektur](@site/docs/managed_mariadb/images/Distributed.png)
