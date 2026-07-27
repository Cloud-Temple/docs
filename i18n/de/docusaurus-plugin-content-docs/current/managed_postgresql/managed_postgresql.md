---
title: Übersicht
---

# Managed PostgreSQL <span class="title-preview-badge">Vorschau</span>

<div class="card-grid">
  <div class="card">
    <h3>Konzepte</h3>
    <p>Entdecken Sie die Grundlagen und wesentlichen Prinzipien, um unsere Infrastruktur zu beherrschen.</p>
    <a href="./managed_postgresql/concepts" class="card-link">Konzepte erkunden →</a>
  </div>
  <div class="card">
    <h3>Schnellstart</h3>
    <p>Starten Sie schnell, indem Sie klaren und einfachen Anweisungen folgen.</p>
    <a href="./managed_postgresql/quickstart" class="card-link">Schnellstart starten →</a>
  </div>
</div>

---

### Übersicht

**PostgreSQL Managé (on Kubernetes) by Cloud Temple** ist eine verwaltete Lösung für PostgreSQL-Datenbank-Engines, die auf Kubernetes gehostet und auf dem Operator **CloudNative-PG (CNPG)** basiert. Sie ergänzt die Angebote für verwaltete Datenbank-Engines auf virtuellen Maschinen (hier bezeichnet als **PostgreSQL Managé (on IaaS)**).

Dieses Produkt eignet sich für Kunden, die Kubernetes-Workloads betreiben, die PostgreSQL-Datenbanken erfordern, oder für Kunden, die zahlreiche PostgreSQL-Datenbank-Engines auf einem einzigen Kubernetes-Cluster konsolidieren möchten. Es ist besonders gut für Datenbanken geeignet, die kein hochspezifisches System-Tuning erfordern. Für sehr große Datenbanken, die spezielle Betriebssystem-Konfigurationen erfordern, ist es ratsam, das Produkt **PostgreSQL Managé (on IaaS)** zu wählen.

### Kernvorteile

- **Souveränität und Reversibilität** : Die Lösung basiert ausschließlich auf Open-Source-Standards (CNPG, Barman), um technologische Abhängigkeiten zu vermeiden und die Portabilität Ihrer Anwendungen zu gewährleisten.
- **Einfachheit und Delegation** : Die Lösung ermöglicht es, das Lifecycle-Management der Datenbank-Engines an Cloud Temple zu delegieren: Bereitstellung, Updates und kontinuierliche Sicherungen.

## Bereitstellungsmodelle

Wir bieten drei Bereitstellungsmodelle an, um Ihren Anforderungen gerecht zu werden, von Entwicklungstests bis hin zu kritischer Hochverfügbarkeit:

### StandAlone

Das ***StandAlone***-Modell bereitstellt eine einzelne Instanz der PostgreSQL-Engine.

- **Einsatzszenario** : Dieses Modell eignet sich hervorragend für die Entwicklung, Staging-Umgebungen oder einfache Anwendungen, die keine hohe Verfügbarkeit erfordern.
- **Kernmerkmale** :
  - Eine einzige Datenbankinstanz.
  - Keine hohe Verfügbarkeit auf Engine-Ebene (obwohl Kubernetes den Pod bei einem Knotenausfall neu starten kann).
  - Kontinuierliche Backups (Barman Cloud).

### Replica

Das Modell ***Replica*** bereitstellt einen Cluster mit 3 Instanzen des PostgreSQL-Engines mit Streaming-Replikation (asynchron).

- **Einsatzszenarien** : Dieses Modell bietet eine standardmäßige hohe Verfügbarkeit für die meisten Produktionsanwendungen, bei denen eine geringe Verzögerung (einige Millisekunden) zwischen dem Primärknoten und den Replikaten akzeptabel ist.
- **Kernpunkte** :
  - 3 Datenbankinstanzen.
  - Asynchrone Replikation (hohe Verfügbarkeit).
  - Automatischer Failover, verwaltet vom CNPG-Operator.

### Unternehmen

Das Modell ***Unternehmen*** bereitstellt einen Cluster aus 3 Instanzen der PostgreSQL-Engine mit **synchroner Replikation** und garantierter Datenhaltbarkeit.

- **Einsatzszenario** : Entwickelt für kritische Workloads, bei denen im Falle eines Hardwareausfalls kein Datenverlust toleriert wird.
- **Schlüsselmerkmale** :
  - 3 Datenbankinstanzen.
  - Synchronreplikation ist so konfiguriert, dass sichergestellt wird, dass mindestens 2 Replikate die Daten dauerhaft gespeichert haben, bevor ein `COMMIT` bestätigt wird (Modus *preferred*, um Blockierungen zu vermeiden, falls ein Replikat nicht verfügbar ist).
  - Maximale Garantie für Konsistenz und Dauerhaftigkeit.

## Verfügbare Datenbank-Engines

Die Lösung ermöglicht das Bereitstellen verschiedener PostgreSQL-Instanztypen entsprechend Ihren Anforderungen:

- **PostgreSQL standard** : Die klassische relationale Datenbank-Engine.
- **TimescaleDB** : PostgreSQL mit der TimescaleDB-Erweiterung für die optimierte Verwaltung von Zeitreihendaten (Time-Series).
- **PostGIS** : PostgreSQL mit der räumlichen PostGIS-Erweiterung für geografische Daten.

## Gemeinsame Funktionen

#### Versionen

Die PostgreSQL-Datenbanken sind in allen unterstützten Hauptversionen verfügbar (derzeit von Version **13 bis 18**).
Erweiterungen wie `pg-crash`, `pgaudit`, `pgvector` und `postgis` sind in den Images verfügbar.

#### Sicherung

Die Sicherungen werden nativ durch das in den Operator integrierte Plugin **Barman Cloud** verwaltet:

- **Kontinuierliche WAL-Archivierung** : Jedes Segment des Transaktionsprotokolls (WAL) wird in Echtzeit in unseren SecNumCloud-zertifizierten S3-Speicher archiviert.
- **Geplante Sicherungen** : Vollständige Sicherungen (Point-in-Time Recovery) werden periodisch gemäß Ihren Aufbewahrungsanforderungen durchgeführt.
- **Sicherheit** : Alle Sicherungsdaten werden komprimiert und auf unserer gesicherten S3-Infrastruktur mit Verschlüsselung gespeichert.