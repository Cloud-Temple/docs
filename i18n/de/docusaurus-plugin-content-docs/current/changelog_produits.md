---
title: Produktneuheiten
sidebar_position: 999
---

# Produktneuheiten & Entwicklungen

> Dieses Changelog listet die neuen Funktionen und signifikanten Entwicklungen der Cloud Temple-Plattform auf.
> Bugfixes sind ab Version 4.50.0 enthalten.

## v4.52.0 — 2026-10-06

### [IaaS VMware — Sicherung](/iaas_vmware)
- Wiederherstellung einer virtuellen Maschine, deren Festplatten auf mehrere Datastores verteilt sind: Auswahl eines Ziel-Datastores für jeden Quell-Datastore

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Reiter Snapshots: Identifizierung des Typs jedes Snapshots (manuell, Sicherung, Replikation, verwaist)
- Neupositionierung einer virtuellen Maschine: Möglichkeit, den ursprünglichen Host beizubehalten, um nur den Speicher zu migrieren; nun auch in einem Single-Host-Pool verwendbar
- Korrektur des Kontrollkästchens „Cloud-init-Konfiguration nach dem Start zerstören“, das bei der Bereitstellung einer VM aus einem Template keine Wirkung zeigte

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Master-Host: Entfernung der Wartungsaktionen und Hinweis auf den Weg zur Löschung (Löschung des Pools)
- Speicher: Wartungsmodus und Beendigung des Wartungsmodus für einen Block Storage über die Konsole

### [IaaS OpenSource — Sicherung](/iaas_opensource)
- Sicherungsberichte: Ausführungen einer Richtlinie werden nach Startdatum sortiert, von der neuesten zur ältesten
- Sicherungsberichte: Verschiedene Korrekturen am Bildschirm (Aktualisierung, Sortierung und Paginierung der Ausführungen)

### [Marketplace](/marketplace)
- Bereitstellung eines Images: Vorbelegung der Cloud-init-Konfiguration (user-data und Netzwerkkonfiguration), die vom Image bereitgestellt wird, vor der Bereitstellung änderbar

## v4.51.0 — 2026-09-18

### [Konsole — Organisation](/console/iam/concepts)
- Hinzufügen einer Spalte „Typ“ (SecNumCloud / Legacy) in der Liste der Tenants
- Die Kennzeichnung eines Tenants als Favorit wird nun durch ein Badge „Favorit“ in der Tenant-Liste angezeigt

### [Identität & Zugriff (IAM)](/console/iam)
- Klarstellung der Auswirkungen der erneuten Registrierung eines Benutzers: Das Bestätigungsdialogfeld gibt an, dass eine neue Registrierungs-E-Mail gesendet wird

### [Support](/console)
- Wiederanzeige des Support-Info-Blocks im Organisationsmodus

### [Metriken](/console/metrics/concepts)
- Korrektur der Legenden der Metrikdiagramme für virtuelle Maschinen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Korrektur des vMotion-Assistenten: Die Schaltfläche „Weiter“ blieb nach einem Host-Kompatibilitätsfehler blockiert, wenn man zu einem vorherigen Schritt zurückkehrte
- Senden von System-Tastenkombinationen (Alt+Tab, ⌘, Esc…) an die Vollbild-Konsole der virtuellen Maschine (API Keyboard Lock, Chromium-Browser)
- Korrektur der VMware-Konsole (WMKS): Ein Alt+Tab ließ die Alt-Taste auf der Seite der virtuellen Maschine als gedrückt gelten

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Klarstellung der Warnung beim Verschieben einer virtuellen Festplatte: Assoziierte virtuelle Maschinen werden nicht mehr als „angehalten“ gekennzeichnet, sondern nur bestimmte Aktionen sind vorübergehend nicht verfügbar

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Detailansicht eines Pools: Anzeige und Verwaltung von Block Storage über Compute und von Hosts über Storage (kreuzverknüpfte Reiter)

## v4.50.0 — 2026-09-10

### [Konsole](/console)
- Aktualisierung der angezeigten Quota-Einheiten (GiB)

### [Konsole — Organisation](/console/iam/concepts)
- Anzeige des Vorbereitungsstatus eines Tenants bei dessen Erstellung

### [Bestellungen](/console/orders)
- Hinzufügen des Befehls zur Löschung einer öffentlichen VPC-IP
- Hinzufügen des Befehls zur Löschung einer Private Backbone-IP

### [VPC](/network/vpc)
- Anzeige des Konfigurationsstatus und Auswahl einer statischen IP bei VM-Operationen
- Möglichkeit, ein VPC-Netzwerk auszuwählen und darin eine statische IP zu konfigurieren in allen Formularen, die eine Netzwerkkonfiguration für eine VM erfordern (Erstellung, Bereitstellung, Migration, Wiederherstellung, Export)

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen der Spalte „Fabric“ im Netzwerkreiter eines Bare-Metal-Servers

## v4.49.1 — 2026-09-03

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Aktion „Öffentliche IP zuweisen“ im Reiter „Netzwerkkarten“ ist ausgegraut, wenn die VPC-Gateway nicht aktiviert ist

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Aktion „Öffentliche IP zuweisen“ im Reiter „Netzwerkkarten“ ist ausgegraut, wenn die VPC-Gateway nicht aktiviert ist

### [VM Instances](/public_cloud/vm_instances)
- Die Aktion „Öffentliche IP zuweisen“ im Reiter „Netzwerkkarten“ ist ausgegraut, wenn die VPC-Gateway nicht aktiviert ist

## v4.49.0 — 2026-08-31

### [Konsole](/console)
- Automatischer Start des Willkommens-Tutorials beim ersten Login eines Benutzers
- Entfernung von Fehlerbenachrichtigungen beim Laden des Dashboards, wenn die Umgebungen nicht bereitgestellt sind

### [Konsole — Organisation](/console/iam/concepts)
- Anzeige des Aktivierungspreises eines Tenants im Erstellungsdialogfeld im Organisationsmodus

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Zuweisung und Trennung einer öffentlichen IP über den Reiter „Netzwerkkarten“ einer an ein VPC angeschlossenen VM

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeige des Bladentyps anstelle der Beschreibung in der „Klasse“ der Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Anzahl der vCPUs, die beim Ändern der Größe einer VM angeboten wird, ist nun durch ihre maximale Kapazität begrenzt
- Zuweisung und Trennung einer öffentlichen IP über den Reiter „Netzwerkkarten“ einer an ein VPC angeschlossenen VM

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Anzeige des Bladentyps anstelle der Beschreibung in der „Klasse“ der Pools

### [IaaS OpenSource — Sicherung](/iaas_opensource)
- Hinweis bei der Wiederherstellung, der präzisiert, dass die ursprüngliche VM nicht ersetzt wird: Es wird eine neue, datierte VM erstellt

### [VM Instances](/public_cloud/vm_instances)
- Ausblenden der Felder und explizite Meldung, wenn kein Speicher verfügbar ist, beim Hinzufügen und Erweitern einer Festplatte
- Zuweisung und Trennung einer öffentlichen IP über den Reiter „Netzwerkkarten“ einer an ein VPC angeschlossenen VM
- Möglichkeit, ein benutzerdefiniertes Template (freie vCPUs und RAM, innerhalb der Grenzen der Instanzfamilie) bei der Erstellung, Wiederherstellung und Größenänderung einer VM Instance auszuwählen

### [Bare Metal](/iaas_bare-metal)
- Anzeige des Bladentyps anstelle der Beschreibung in der „Klasse“ der Bare-Metal-Server

### [Netzwerk](/network/network_overview)
- Interco-IP-Reservierung: Blockierung von Netzwerk- und Broadcast-Adressen sowie Indikator „Reserviert“ für reservierte IPs

### [VPC](/network/vpc)
- Die Schaltfläche „Neuer VPC“ in der Liste ist nun ausgegraut, wenn das VPC-Limit erreicht ist

## v4.48.0 — 2026-08-13

### [Konsole](/console)
- Verbesserung der Persistenz der Sprachauswahl, nun an das Benutzerprofil gebunden

### [Konsole — Organisation](/console/iam/concepts)
- Die Produkte eines Tenants werden nun danach gruppiert, ob sie änderbar, nicht deaktivierbar oder nicht verfügbar sind, mit Angabe des Sperrgrunds

### [Kostenmanager](/console/billing/concepts)
- Der Abschnitt Kostenmanager wird im Organisations-Dashboard nicht mehr angezeigt, wenn die Organisation dafür nicht berechtigt ist
- Anzeige einer Fehlerkarte anstelle einer Null-Kostenanzeige, wenn die Erfassung der Verbrauchswerte im Organisations-Dashboard fehlschlägt
- Support-Plan-Zeilen werden nun unter „Support“ in den Kosten pro Tenant zusammengefasst, anstelle eines Tenants „Unbekannt“

### [Bestellungen](/console/orders)
- Explizite Meldung, wenn nicht mehr genug Speicherplatz für einen Speichertyp verfügbar ist, bei der Bestellung einer Verfügbarkeitszone oder eines Pools

### [Support](/console)
- Beschreibungen und Post-Incident-Berichte werden auf der Seite „Vorfälle“ nun formatiert (Markdown) dargestellt
- Globale Support-Nachrichten werden nun im Organisationsmodus angezeigt

### [VM Instances](/public_cloud/vm_instances)
- Der bei der Erstellung einer VM Instance angezeigte geschätzte Kostenbetrag ist nun monatlich, basierend auf 730 h/Monat

### [VPC](/network/vpc)
- Der VPC-Name wird nun vor dem Netzwerknamen in den Netzwerkauswahlfeldern angezeigt
- Der VPC-Name geht dem Netzwerknamen im Reiter „Netzwerkadapter“ der virtuellen Maschinen voraus
- Harmonisierung der Farben der VPC-Typ-Labels (gemeinsam genutzt, dediziert) mit denen der Netzwerke
- Die Option VM Instances ist nun im Formular zur Zuweisung einer statischen IP verfügbar
- Netzwerkkarten, die bereits einer statischen IP zugeordnet sind, sind im Zuweisungsformular ausgegraut

### [Object Storage](/storage/oss)
- Auswahl des Adressierungsstils (path-style oder virtual-hosted) bei der Generierung eines Freigabelinks für eine Datei
- Warnung bei Buckets, deren Name nicht DNS-kompatibel ist: Nur der path-style-Zugriff ist möglich

### [Marketplace](/marketplace)
- Bei der Bereitstellung über den Marketplace werden nun nur noch Verfügbarkeitszonen angeboten, die mit dem ausgewählten Image kompatibel sind
- Der Preis eines als VM Instance bereitgestellten Marketplace-Produkts gibt nun an, dass er basierend auf CPU, RAM und Speicher berechnet wird

### [Housing (Colocation)](/housing)
- Hinzufügen der Schnittstellentypen 1000BASE-SX und 10GBASE-SR zur Reservierung von Colocation-Plätzen

## v4.47.0 — 2026-07-30

### [Konsole](/console)
- Die Swagger-Dokumentation des Moduls Bestellungen ist nun verfügbar

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei der Bereitstellung einer VM werden nun nur noch deploybare Elemente des Katalogs (OVF und VM-Templates) angeboten

### [VM Instances](/public_cloud/vm_instances)
- Der geschätzte (stündliche) Kostenbetrag wird nun bei der Erstellung einer Instanz angezeigt, mit Aufschlüsselung nach Komponenten (vCPU, RAM, Festplatten)

### [VPC](/network/vpc)
- Bei der Bestellung eines neuen VPC können Sie nun eine Bereitstellung in einer dedizierten Umgebung (Ihre OpenIaaS-Infrastruktur) oder in einer gemeinsam genutzten Umgebung (unter Vorbehalt eines Abonnements für das Produkt VM Instances) wählen

### [Object Storage](/storage/oss)
- Großbuchstaben werden im Bucket-Namen nun abgelehnt, gemäß den Namensrichtlinien

### [Marketplace](/marketplace)
- Sie können nun eine VM Instance (Public Cloud) direkt aus der Produktseite eines Marketplace-Produkts bereitstellen

## 2026-07-27 — Managed Databases (Preview)

### [MariaDB Managé](/managed_mariadb)
- Das Bereitstellungsmodell Distributed wurde in MultiAZ umbenannt
- Instanz-Templates reichen nun bis 6X-Large (32 vCPUs und 128 GiB Speicher) und der Speicher ist auf bis zu 512 GiB hot-erweiterbar
- Veröffentlichung von Dimensionierungsempfehlungen, die die Kalibrierung der Engine-Parameter erklären, mit einer Warnung zur Aktivierung von `performance_schema` unterhalb des X-Large-Templates
- Die Wiederherstellung zu einem bestimmten Zeitpunkt wird nicht mehr angeboten: Sicherungen basieren nun auf täglichen physischen Sicherungen und logischen Exports, ohne kontinuierliche Archivierung der Transaktions-Logs

### [PostgreSQL Managen](/managed_postgresql)
- Neue Architektur basierend auf dem Kubernetes-Operator CloudNative-PG und dem Backup-Plugin Barman Cloud
- Drei Bereitstellungsmodelle: StandAlone als einzelne Instanz, Replica als drei asynchron replizierte Instanzen mit automatischem Failover, und Enterprise als drei synchron replizierte Instanzen auf mindestens zwei Knoten, wobei die Dauerhaftigkeit ohne Blockierung bei Ausfall eines Knotens gewährleistet ist
- Deklarative Bereitstellung über Kubernetes Custom Resources, nutzbar über Terraform oder Helm, und native Exportierung von Metriken an Prometheus

## v4.46.0 — 2026-07-24

### [Konsole — Organisation](/console/iam/concepts)
- Sie können nun direkt auf der Seite „Tenants“ einen Tenant erstellen, indem Sie die zugehörigen Produkte auswählen

### [Konsole — Aktivitäten](/console)
- Aktivitätsprotokolle können nun nach Modul gefiltert werden

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkschnittstellen einer an ein VPC angeschlossenen virtuellen Maschine angezeigt
- Im Detail einer virtuellen Maschine ist nun ein Tab „Gesundheit“ verfügbar, der über die Liste erreichbar ist

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun eine VMware-Replikation zwischen Verfügbarkeitszonen bestellen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Liste der Netzwerkschnittstellen einer an ein VPC angeschlossenen virtuellen Maschine zeigt nun die öffentliche IP-Adresse an
- Im Detail einer virtuellen Maschine, das über die Liste geöffnet wurde, ist nun ein Tab „Gesundheit“ verfügbar

### [VM-Instanzen](/public_cloud/vm_instances)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkadapter einer an ein VPC angeschlossenen Instanz angezeigt
- Im Detail einer Instanz ist nun ein Tab „Gesundheit“ verfügbar, der über die Liste erreichbar ist

### [Housing (Colocation)](/housing)
- Colocation-Bestellungen sind nun verfügbar: Platzreservierung, Installation und Auspacken von Geräten
- Colocation-Einsatzbestellungen sind nun verfügbar: technische Betreuung und Smart Hands
- Colocation-Kabel- und Entkabelungsbefehle (CPE) sind nun verfügbar
- Bestellungen, die von der Konsole nicht unterstützt werden, werden nun klar gekennzeichnet, mit der Aufforderung, den Support zu kontaktieren

## v4.45.5 — 2026-07-23

### [VM-Instanzen](/public_cloud/vm_instances)
- Die Erstellung einer Instanz basiert nun auf der Auswahl eines System-Images, das die Vorlagen ersetzt

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bei der Konfiguration der Kerne pro Socket einer OpenIaaS-Virtual Machine wird die Prozessor-Topologie (Anzahl der Sockets und Kerne pro Socket) nun explizit angezeigt

### [LLMaaS](/llmaas)
- Der Mindestbetrag für LLMaaS-Guthaben ändert sich; siehe den [offiziellen Cloud Temple-Preisliste](https://www.cloud-temple.com/nos-tarifs-publics/).

## v4.45.3 — 2026-07-21

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei der Bereitstellung einer virtuellen Maschine wird nun die Meldung „Keine Vorlage verfügbar“ angezeigt, wenn der Katalog leer ist

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bei der Bereitstellung einer virtuellen Maschine wird nun die Meldung „Keine Vorlage verfügbar“ angezeigt, wenn der Katalog leer ist

## v4.45.2 — 2026-07-17

### [Konsole](/console)
- Geringfügige technische Verbesserungen

## v4.45.0 — 2026-07-10

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Während einer blockierenden Operation zeigen virtuelle Maschinen nun einen expliziten Status an: Sicherung, Snapshot oder Wiederherstellung läuft
- Die CPU-Bearbeitung passt sich nun der Option zum Hinzufügen von CPUs im laufenden Betrieb (CPU Hot Add) und dem Status der virtuellen Maschine an

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Während einer blockierenden Operation zeigen virtuelle Maschinen nun einen expliziten Status an (Sicherung, Snapshot oder Wiederherstellung läuft)
- Das Detail einer virtuellen Maschine zeigt nun eine Zusammenfassung der Nutzung (CPU, RAM, Speicher)

### [VM-Instanzen](/public_cloud/vm_instances)
- Instanzen zeigen während einer blockierenden Operation nun einen expliziten Status an (Sicherung, Snapshot oder Wiederherstellung läuft)
- Sofortige Nutzungsmetriken (CPU, RAM, Speicher) werden nun für jede Instanz angezeigt
- Die Einzigartigkeit des Namens wird nun bei der Erstellung und Wiederherstellung einer Instanz überprüft

### [Netzwerk](/network/network_overview)
- Bei einer Bestellung mit einem Propagationsschritt werden neue Netzwerke erst bei der endgültigen Bestätigung der Bestellung erstellt

## v4.44.2 — 2026-07-03

### [VM-Instanzen](/public_cloud/vm_instances)
- Der Netzwerktyp (privater Backbone) wird nun auf den Netzwerkadaptern einer Instanz angezeigt, auch ohne VPC-Funktion

## v4.44.1 — 2026-07-02

### [Konsole](/console)
- Geringfügige technische Verbesserungen

## v4.44.0 — 2026-07-02

### [Bestellungen](/console/orders)
- Infrastruktur-Bereitstellungsaktionen berücksichtigen nun Geschäftsrollen (Berechnung, Netzwerk, VPC, Bare Metal…) zusätzlich zu den Bestellrechten

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Verfolgung des ISO- und OVF-Datei-Uploads wurde verbessert, und es ist nun möglich, einen laufenden Upload abzubrechen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Verfolgung des ISO- und XVA-Datei-Uploads wurde verbessert, und es ist nun möglich, einen laufenden Upload abzubrechen

### [VM-Instanzen](/public_cloud/vm_instances)
- Die Festplattengrößen akzeptieren keine Dezimalwerte mehr, weder bei der Erstellung einer Instanz noch beim Hinzufügen oder Erweitern einer Festplatte
- Die Indikatoren für die Verarbeitung von Instanzen und ihren Ressourcen werden nach einem Seiten-Refresh nun korrekt wiederhergestellt

### [VPC](/network/vpc)
- Über das Netzwerk einer an ein VPC-Netzwerk angeschlossenen virtuellen Maschine können Sie nun direkt auf das betreffende VPC zugreifen (VMware, OpenIaaS und VM-Instanzen)
- Bestimmte VPC-Bestellungen können nun parallel ausgeführt werden: Hinzufügen eines Gateways während der Erstellung eines privaten Netzwerks (und umgekehrt) sowie mehrere gleichzeitige Löschungen privater Netzwerke

## 2026-06-30 — Metriken-API

### [Metriken](/console/metrics/concepts)
- Ein Zugriffstoken kann nun die Verfügbarkeit des Metrikdiensts über den API-Endpunkt `HEAD /v1/configuration` überprüfen

## v4.43.0 — 2026-06-30

### [Konsole](/console)
- Netzwerkauswähler unterscheiden nun visuell zwischen VPC- und privatem Backbone-Netzwerken
- Auf der Seite „Benutzer“ ist nun ein interaktives Tutorial verfügbar

### [Konsole — Aktivitäten](/console)
- Sie können nun die Details einer Aktivität einsehen, indem Sie ihre Zeile in den Listen „Aktuell“ und „Archiviert“ aufklappen
- Jede Aktivität verfügt nun über eine dedizierte Detailseite, die über einen direkten Link erreichbar ist
- Die Details einer Aktivität sind nun über Erfolgs- und Fehlerbenachrichtigungen erreichbar
- Sie können nun das vollständige JSON einer Aktivität einsehen, kopieren oder herunterladen
- Die Liste der archivierten Aktivitäten kann nun nach Erstellungsdatum sortiert werden

### [Bestellungen](/console/orders)
- Die Anzeige des Fortschritts einer Bestellung wurde überarbeitet

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Das Detail einer virtuellen Maschine wird nun in einer neuen Ansicht angezeigt
- Bei der Hot-Änderung wird die Konsistenz zwischen CPU und Kernen pro Socket überprüft: Warnungen werden angezeigt, und ungültige Werte werden nicht akzeptiert

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun die Löschung einer IaaS-Umgebung anfordern

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Für virtuelle Maschinen ist eine neue Detailansicht verfügbar
- Sie können nun die Liste der virtuellen Maschinen nach Verfügbarkeitszone (AZ) filtern

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Die Seite eines Storage Repository zeigt nun das Datum der Erstellung eines Festplattensnapshots an

### [VM-Instanzen](/public_cloud/vm_instances)
- Das Detail einer Instanz wird in einer neuen Ansicht angezeigt
- Die Schaltfläche „Jetzt eine Sicherung starten“ ist nun deaktiviert, wenn die Sicherung nicht verfügbar ist

### [VPC](/network/vpc)
- Die Beschreibung der öffentlichen IP-Adresse wird nun bei ihrer Zuordnung zu einem privaten Netzwerk angezeigt

### [Object Storage](/storage/oss)
- Sie können nun eine Beschreibung zu den erlaubten IP-Adressen (Whitelist) eines Buckets hinzufügen

## v4.42.0 — 2026-06-22

### [Konsole](/console)
- Der Abschnitt „Datenschutz“ wurde aktualisiert

### [Object Storage](/storage/oss)
- Die Verfügbarkeit des Wildcard-TLS-Zertifikats für den hostbasierten S3-Zugang wird nun angezeigt
- Sie können nun eine Datei über eine vor-signierte URL auf S3 hochladen
- Sie können nun die Versionsverwaltung für einen Bucket aktivieren
- Sie können nun die Versionen einer Datei verwalten

## v4.41.1 — 2026-06-11

### [Bestellungen](/console/orders)
- Das verfügbare Maximum bei der Bestellung eines Block Storage wurde aktualisiert

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Die Meldungen zu Lagerbeständen sind nun präziser bei der Bestellung von Hypervisoren oder der RAM-Erhöhung eines Clusters

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Hinzufügen einer vorhandenen Festplatte zu einer virtuellen Maschine wird die UUID der Festplatte nun angezeigt, wenn mehrere Festplatten denselben Namen tragen

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Bei der Anforderung der Aktualisierung des Master-Hosts eines Pools wird nun eine Warnung angezeigt

### [VPC](/network/vpc)
- Die Bestellung eines VPC erfordert nun, dass eine OpenIaaS-Verfügbarkeitszone bereitgestellt ist

## 2026-06-06 — Konsole MCP-Server

- Hilfsressource zur Authentifizierung, die die Erlangung eines persönlichen Zugriffstokens und das erwartete Header-Format beschreibt; Authentifizierungsfehler geben nun die Ursache und die nächsten Schritte an
- Konfigurationsänderung mit Auswirkungen: Die in der Serverkonfiguration angegebene API-URL muss nun den Segment `/api` enthalten, was vor der Bereitstellung dieser Version aktualisiert werden muss, um 404-Fehler zu vermeiden. Die URL wird beim Start überprüft, und die Infrastruktur der privaten öffentlichen Schlüssel wird unterstützt

## 2026-06-05 — Konsole MCP-Server

- Anzeige des Namens und der Version des bereitgestellten Servers

## v4.40.0 — 2026-06-02

### [Konsole](/console)
- Ein interaktiver Willkommenspfad ist nun verfügbar

### [Konsole — Organisation](/console/iam/concepts)
- Der Kostenmanager ist nun in der Organisationsansicht verfügbar
- Die Organisationsansicht verfügt nun über eine dedizierte Anzeige

### [Bestellungen](/console/orders)
- Der Netzwerkschritt erscheint nicht mehr in Bestellungen, wenn nur das VPC-Produkt aktiviert ist

### [Support](/console)
- Die Supportpläne und -kontakte wurden aktualisiert

### [Support-Tickets](/console)
- Die Managed-Services-Funktionen wurden aus den Support-Tickets entfernt

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Funktionen der öffentlichen Inhaltsbibliothek wurden entfernt

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Der Standardwert des CloudInit-Schritts wurde für OpenIaaS-Bereitstellungen über den Marktplatz aktualisiert
- Das Senden von Sonderzeichen aus der Zwischenablage der Konsole einer virtuellen Maschine wurde verbessert

### [Netzwerk](/network/network_overview)
- Sie können nun die Beschreibung einer IP-Adresse löschen
- Sie können nun das Feld `description` bei der Erstellung eines virtuellen Netzwerks ausfüllen
- Sie können nun das Feld `description` bei der Änderung eines virtuellen Netzwerks ausfüllen

### [VPC](/network/vpc)
- Die Beschreibung einer VPC-Float-IP wird nun angezeigt
- Sie können die Beschreibung einer VPC-Float-IP nun ändern

## 2026-05-25 — Console MCP-Server

- Jede Berechtigungsablehnung zeigt nun das betroffene Produkt und den genauen Namen der Berechtigung an, die im persönlichen Zugriffstoken aktiviert werden muss

## 2026-05-24 — Console MCP-Server

- Support-Verwaltung über einen Agenten: Liste und Details der Tickets, Erstellung, Kommentar, Schließung, Anzeige geplanter Wartungen und ihrer Kategorien, Tenant-Vorfälle und Plattform-Vorfälle
- Option zur Zerstörung nach dem Start bei der Bereitstellung über den Marketplace
- Geführter Bereitstellungsprozess für eine Linux-VM
- Direkt einsehbare Ressourcen: Glossar der IaaS-OpenSource-Begriffe, Topologie eines Pools, der Hosts, Speicherdepots, Netzwerke und Indikatoren in einer einzigen Leseoperation zusammenfasst, sowie auf IaaS OpenSource gefilterter Marketplace-Katalog

## 2026-05-23 — Console MCP-Server

- Durchsuchen des Marketplace-Katalogs mit Filtern sowie detaillierte technische Datenblätter für IaaS OpenSource (XVA) und VMware (OVF), die Prozessoren, Speicher, Festplatten und die genauen Namen der Netzwerkschnittstellen auflisten
- Bereitstellung einer IaaS OpenSource-VM aus einem Katalogelement, idempotent nach Name
- Steuerung der Stromversorgung von IaaS OpenSource-VMs — Einschalten, Ausschalten, Neustart, Pause, Suspendierung und Fortsetzung — idempotent nach Zustand
- Verfolgung langer Operationen über die Aktivitäten

## 2026-05-22 — Console MCP-Server

- Erweiterte Ansicht der IaaS OpenSource: Pools, Hosts, VMs, Snapshots, Netzwerkanpassungen mit Erkennung doppelter MAC-Adressen, virtuelle Festplatten und Replikationsstatus, wobei alle diese Operationen schreibgeschützt sind
- Serverseitig anwendbare Filter auf all diese Listen

## v4.39.2 — 2026-05-22

### [Netzwerk](/network/network_overview)
- Sie können den PTR-Eintrag einer öffentlichen IP-Adresse oder einer Interconnect-IP-Adresse nun löschen

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Namensregeln für VM-Snapshots wurden geändert

### [Bare Metal](/iaas_bare-metal)
- Sie können die Beschreibung eines Bare-Metal-Server-Moduls nun ändern

### [Netzwerk](/network/network_overview)
- Sie können den PTR-Eintrag einer Interconnect-IP-Adresse nun ändern

## v4.39.0 — 2026-04-23

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bestehende Festplatten werden nun beim Hinzufügen einer neuen Festplatte angezeigt
- Beim Verschieben (vMotion) einer VM im Modus „Nur Compute-Ressource“ kann nun ein Cluster ausgewählt werden

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bestehende Festplatten werden nun beim Hinzufügen einer neuen Festplatte angezeigt

### [VM-Instanzen](/public_cloud/vm_instances)
- Die Liste der VM-Instanzen kann nun im CSV-Format exportiert werden
- Die Anzeige der Häufigkeit einer Sicherungsrichtlinie wurde überarbeitet

### [Bare Metal](/iaas_bare-metal)
- Die Auswahl der Netzwerke ist nun obligatorisch bei der Propagierung eines Netzwerks auf ein Bare-Metal-System

## 2026-04-20 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- Veröffentlichung der motorbezogenen Parameter für jeden Instanz-Typ: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` und `table_open_cache`
- Überarbeitung der Instanz-Typen: Das Maximum wurde auf 3X-Large (8 vCPU und 32 GiB Speicher) reduziert, und der maximal erweiterbare Hot-Storage wurde von 512 GiB auf 128 GiB geändert

### [Managed PostgreSQL](/managed_postgresql)
- Veröffentlichung der motorbezogenen Parameter für jeden Instanz-Typ: `shared_buffers`, `effective_cache_size`, `work_mem` und `max_connections`
- Überarbeitung der Instanz-Typen: Das Maximum wurde auf 3X-Large (8 vCPU und 32 GiB Speicher) reduziert, und der maximal erweiterbare Hot-Storage wurde von 512 GiB auf 128 GiB geändert

## v4.38.1 — 2026-04-18

### [VM-Instanzen](/public_cloud/vm_instances)
- Die angebotenen Netzwerke werden nun bei der Erstellung einer Instanz sowie bei der Änderung eines Netzwerkanpassers gefiltert

## v4.38.0 — 2026-04-17

### [Identität & Zugriff (IAM)](/console/iam)
- Sechs neue Berechtigungen sind verfügbar: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` und `public_cloud_vm_instances_console_access`
- Der Name des betroffenen Produkts wird nun an erster Stelle der Beschreibung jeder Berechtigung angezeigt

### [Kostenmanager](/console/billing/concepts)
- Die Benutzeroberfläche des Kostenmanagers wurde verbessert
- Die in den Verbrauchsdiagrammen angezeigte Einheit wurde aktualisiert

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei der Bereitstellung einer VM wurde der Schritt zur Auswahl eines Marketplace-Images überarbeitet

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Sie können die Anzeige der Katalogseite nun zwischen Raster- und Tabellenansicht umschalten
- Der Schritt zur Auswahl eines Marketplace-Images bei der Bereitstellung einer VM wurde aktualisiert

### [VM-Instanzen](/public_cloud/vm_instances)
- Das Dashboard zeigt nun die VM-Instanz-Quota-Nutzung an
- Eine neue Seite zeigt die Liste der VM-Instanzen
- Sie können nun eine neue Instanz erstellen
- Sie können nun die Festplatten, Netzwerkanpassungen und Snapshots einer Instanz einsehen und verwalten
- Sie können nun die Kapazitäten einer Instanz aktualisieren und ihren Status ändern
- Sie können nun auf die Konsole einer Instanz zugreifen

### [LLMaaS](/llmaas)
- Die Preisanzeige in der Verbrauchsansicht und im Formular zur Gutschrift-Auffüllung wurde aktualisiert

## 2026-04-15 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- Preview-Veröffentlichung von Managed MariaDB: StandAlone- und Distributed-Modelle in einem Drei-Knoten-Cluster hinter einem Proxy, replizierter Speicher über drei Verfügbarkeitszonen und Verfügbarkeitszusicherung von 99,9 %

### [Managed PostgreSQL](/managed_postgresql)
- Preview-Veröffentlichung von Managed PostgreSQL: StandAlone- und Distributed-Modelle in einem Drei-Knoten-Cluster hinter einem Proxy, synchrone Multi-Zonen-Replikation ohne Datenverlust und Point-in-Time-Wiederherstellung

## v4.37.0 — 2026-04-02

### [Kostenmanager](/console/billing/concepts)
- Hinzufügen des prognostizierten Betrags auf der Verbrauchsseite für das Diagramm und den Trend
- Visuelle Verbesserung bei Fehlern oder zu wenigen Daten zum aktuellen Monatsverbrauch

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung des Formulars zur Bereitstellung einer VM aus einem Katalogelement
- Hinzufügen der Möglichkeit, den Visualisierungstyp (Raster oder Tabelle) auf der Katalogseite zu ändern

## v4.36.0 — 2026-03-27

### [Konsole](/console)
- Aktualisierung der Metrik- und Verbrauchsdiagramme

### [Kostenmanager](/console/billing/concepts)
- Hinzufügen der Kostenmanager-Seite
- Möglichkeit, die Kosten des aktuellen Monats anzuzeigen
- Möglichkeit, die Kosten über ein Datumsintervall anzuzeigen und Trends zu vergleichen

### [Bestellungen](/console/orders)
- Blockierung der Deprovisionierung eines Hypervisor-Clusters, wenn ein Speichercluster angehängt ist

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen von Filtern und Sortierungen für die Festplattenliste auf den Details einer Block Storage

### [VPC](/network/vpc)
- Verbesserung der Benutzeroberfläche beim Laden von Daten in Formularen

## v4.35.4 — 2026-03-18

### [Konsole](/console)
- Verbesserung der WebSocket-Wiederverbindung

### [Support](/console)
- Hinzufügen einer Fallback-Lösung zur Erstellung eines Support-Tickets, wenn Websockets getrennt sind

## v4.35.3 — 2026-03-17

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Aktualisierung der Festplattenerfassung beim Laden der Replikate über den Replikations-Tab

## v4.35.0 — 2026-03-11

### [Bestellungen](/console/orders)
- Hinzufügen des Befehls zum Löschen eines cpool/spool-Mappings
- Hinzufügen des Befehls zur Deprovisionierung eines privaten VPC-Netzwerks
- Änderungen am Befehl zur Deprovisionierung eines Bare-Metal-Volumes: Die Löschung kann nun aus der Volumenliste befohlen werden
- Hinzufügen des Befehls zum Löschen eines Bare-Metal-Volumen-Mappings
- Hinzufügen des Befehls zur Deprovisionierung eines VPC
- Blockierung der Deprovisionierung eines Datastores, wenn er der letzte eines Datastore-Clusters ist

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, ein RAM-Limit für eine VM festzulegen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Aktualisierung des VMware Multi-vMotion, um VMs von einem Cluster in einen anderen zu verschieben

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen der Möglichkeit, einen Host zu aktualisieren
- Anzeige der Update-Informationen eines Hosts

### [Netzwerk](/network/network_overview)
- Deaktivierung der Schaltfläche zum Löschen der Netzwerkpropagierung, wenn keine Propagierung bereitgestellt wurde

### [LLMaaS](/llmaas)
- Anzeige des Verbrauchs gruppiert nach Token-Typ

## v4.34.0 — 2026-02-18

### [Konsole](/console)
- Großes Update der Anwendungs-Rendering-Engine
- Die VMware- und OpenIaaS-Menüs werden nicht angezeigt, wenn nur das Metrikmodul aktiviert ist

### [Metriken](/console/metrics/concepts)
- Möglichkeit, von den VMware- und OpenIaaS-Metriken-Seiten als CSV zu exportieren

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei einer VM-Verschiebung kann nicht derselbe Ziel-Host wie der aktuelle Host der VM ausgewählt werden
- Hinzufügen der Schaltfläche „Neuer Katalog“ auf der VMware-Katalogseite

## 2026-02-04 — Console MCP-Server

- Anzeige der VM-Vorlagen, Netzwerke, Hosts und Speicherdepots der IaaS OpenSource

## 2026-02-03 — Console MCP-Server

- Bereitstellung des Console MCP-Servers (Model Context Protocol), authentifiziert durch persönliches Zugriffstoken
- Anzeige und Steuerung von VMware-VMs über einen Agenten: Liste, Details, virtuelle Datacenters, Einschalten und Ausschalten

## v4.33.0 — 2026-01-21

### [Bestellungen](/console/orders)
- Hinzufügen des Befehls zum Löschen einer OpenIaaS-Netzwerkpropagierung

### [Metriken](/console/metrics/concepts)
- Hinzufügen von Filtern für die VMware- und OpenIaaS-Metriken-Seiten

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Metriken-Seite „Virtuelle Maschinen“
- Hinzufügen der Detailseite der Metriken für jede VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Aktualisierung des Modals zum Schließen eines Support-Tickets

### [IaaS VMware — Sicherung](/iaas_vmware)
- Bei der Zuweisung einer Sicherungsrichtlinie zu einer Festplatte wird nun angeboten, die Festplatte zu inventarisieren, wenn sie von der Sicherungslösung nicht erkannt wird

### [Bare Metal](/iaas_bare-metal)
- Die Löschung eines BFS-Volumes auf einem Bare-Metal-System ist nun blockiert; das Volume wird bei der Löschung des Bare-Metal-Systems gelöscht
- Bei der Bestellung eines Bare-Metal-Systems wird das erste Volume nun in „BFS-Volume“ umbenannt

## v4.31.0 — 2026-01-07

### [IaaS VMware — Sicherung](/iaas_vmware)
- Aktualisierung der Tooltip-Erklärungen zu den verfügbaren Optionen bei der Wiederherstellung einer VM

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Snapshots, die mit Sicherungsrichtlinien verknüpft sind, sind nun sichtbar
- Anzeige des Hosts, der mit dem Speicherort einer ISO-Datei beim Upload und auf der Katalogseite verknüpft ist

### [Object Storage](/storage/oss)
- Anzeige einer erklärenden Karte über den Tab „Unvollständige MPU“, wenn die IP der Konsole nicht autorisiert ist und die Anzeige des Tabs verhindert

### [Marketplace](/marketplace)
- Anzeige der Fehlerkarte beim Zugriff auf eine nicht existierende Marketplace-Seite

## v4.30.1 — 2025-12-16

### [Console](/console)
- Verbesserung der Anzeige leerer Fehlermeldungen durch standardmäßige Anzeige des zurückgegebenen HTTP-Status

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Möglichkeit, eine statische IP-Adresse einer benutzerdefinierten MAC-Adresse zuzuordnen

### [LLMaaS](/llmaas)
- Bei den Verbrauchsmetriken: Filtern der Zeitreihen mit Werten von 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Verbesserung der Synchronisierung von Aktionen auf den VPC-Seiten
- Hinzufügen der Zuordnung einer statischen IP-Adresse zu einer öffentlichen IP-Adresse aus der Liste der statischen IPs

### [Storage](/storage/oss)
- Hinzufügen unvollständiger MPUs von der Bucket-Seite aus
- Möglichkeit, eine unvollständige MPU zu löschen

## v4.28.0 — 2025-11-21

### [Console](/console)
- Hinzufügen der Möglichkeit, globale Informationsmeldungen anzuzeigen, die in der gesamten Anwendung sichtbar sind

### [Orders](/console/orders)
- Möglichkeit, einen LLMaaS-Guthaben-Zuschlag für den Tenant zu bestellen
- Möglichkeit, einen VPC zu bestellen
- Möglichkeit, ein privates Netzwerk in einem VPC zu bestellen
- Möglichkeit, eine öffentliche IP-Adresse für das VPC-Produkt zu bestellen
- Möglichkeit, das Gateway für einen VPC zu aktivieren
- Hinzufügen der Möglichkeit, die Löschung eines Tenants zu bestellen

### [Metrics](/console/metrics/concepts)
- Verbesserung der Anzeige von Tooltips auf Metrikg diagrams: Es ist nun möglich, auf einen Punkt zu klicken, um den Tooltip einzufrieren und alle Daten einzusehen

### [Network](/network/network_overview)
- Zusammenfassung der Seiten Netzwerke und Internet unter einem einzigen Produkt: Privates Backbone
- Hinzufügen der Verwaltung der PTR-Eintragung bei der Änderung einer öffentlichen IP-Adresse
- Blockieren der Freigabe für bestimmte Netzwerktypen

### [VPC](/network/vpc)
- Integration des VPC-Produkts
- Hinzufügen einer Seite zur Auflistung der VPCs
- Hinzufügen einer Detailseite für einen VPC
- Möglichkeit, die privaten Netzwerke, öffentlichen IP-Adressen und das Gateway eines VPCs zu verwalten
- Möglichkeit, eine statische IP-Adresse eines privaten VPC-Netzwerks einem VMware- oder OpenIaaS-Netzwerkadapter zuzuordnen
- Möglichkeit, eine statische IP-Adresse mit einer öffentlichen IP-Adresse eines VPCs zu verknüpfen

### [LLMaaS](/llmaas)
- Hinzufügen einer Registerkarte „Abrechnung“ auf der LLMaaS-Seite für Tenants mit aktivierter Vorauszahlung
- Anzeige des verbleibenden Guthabens für Tenants im Vorauszahlungsmodus auf dem Dashboard und über die Registerkarte „Abrechnung“

## v4.27.0 — 2025-11-12

### [Orders](/console/orders)
- Hinzufügen einer Überprüfung der verfügbaren Lagerbestände bei der Bestellung von Ressourcen
- Hinzufügen eines Filters nach Bestelltyp und Produkt in der Bestellliste

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Verbesserung der VM-Konsole. Bessere Tastaturverwaltung und Hinzufügen einer Zwischenablage

### [IaaS VMware — Backup](/iaas_vmware)
- Hinzufügen einer Warnung auf dem Dashboard für SPP-Sicherungs-VSnap mit zu hoher Auslastung

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Verbesserung der VM-Konsole. Bessere Tastaturverwaltung und Hinzufügen einer Zwischenablage

### [Marketplace](/marketplace)
- Hinzufügen der Möglichkeit, technische Details eines Images anzuzeigen

## v4.26.5 — 2025-11-04

### [Console](/console)
- Verbesserung der Größe der Diagramme im Dashboard beim Ändern der Fenstergröße

## v4.26.3 — 2025-10-31

### [Metrics](/console/metrics/concepts)
- Änderung des Namens der in den Diagrammen angezeigten Metrik-Exports

## v4.26.0 — 2025-10-22

### [Console](/console)
- Hinzufügen einer Schaltfläche zum Kopieren der UUID des aktuellen Bereichs aus dem Benutzerprofil
- Komplettüberarbeitung des Dashboards
- Hinzufügen einer automatischen Wiederherstellung der Verbindung zur Aktivitätsverfolgung, wenn die Verbindung unterbrochen wird

### [Orders](/console/orders)
- Aktualisierung der Bestellformulare, um sie auf den entsprechenden Seiten hinzuzufügen (z. B. neuer Datastore von der Speicherseite aus)

### [Support](/console)
- Hinzufügen der E-Mail-Adresse der Person, die das Ticket geschlossen hat, zur Ticketbewertung im Support

### [Metrics](/console/metrics/concepts)
- Überarbeitung der VMware-Metrikerfassung, die URL der Seite ist nun /iaas/metrics
- Hinzufügen einer Registerkarte für VMware-Infrastrukturmetriken auf der Berechnungsseite
- Hinzufügen einer Registerkarte für VMware-Infrastrukturmetriken auf der Speicherseite
- Hinzufügen einer Metrikseite für OpenIaaS
- Hinzufügen einer Registerkarte für OpenIaaS-Infrastrukturmetriken auf der Berechnungsseite
- Hinzufügen einer Registerkarte für OpenIaaS-Infrastrukturmetriken auf der Speicherseite

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Hinzufügen der neuen extra_config-Schlüssel (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blockieren der Auswahl eines Hostclusters ohne aktiven Host
- Bei der Erstellung einer VMware-VM erfolgt die Auswahl des Vcenters nun basierend auf der ausgewählten Verfügbarkeitszone
- Hinzufügen von Begrenzungen für Namen und Beschreibungen beim Hochladen einer Datei auf VMware

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Beim Hinzufügen einer OpenIaaS-Festplatte werden nun Speichermedien, die nicht zum Pool der virtuellen Maschine gehören, gefiltert
- Bei einem Snapshot ist die Option zur Erfassung des Arbeitsspeichers nun standardmäßig deaktiviert

### [IaaS OpenSource — Backup](/iaas_opensource)
- Hinzufügen der Möglichkeit, ein Backup über die Registerkarte „Backups“ einer OpenIaaS-VM auszuführen

### [Network](/network/network_overview)
- Entfernen der Einschränkung, die die Auswahl mehrerer Netzwerktypen auf der Seite für virtuelle Netzwerke verhinderte

### [Object Storage](/storage/oss)
- Optimierung der Dateiabholung aus einem Bucket

### [PaaS OpenShift](/paas_openshift)
- Hinzufügen einer Seite zur Auflistung der OpenShift-Cluster
- Hinzufügen einer Detailseite für einen OpenShift-Cluster

### [Marketplace](/marketplace)
- Hinzufügen eines Filters nach UUID und Möglichkeit, die UUID eines Elements zu kopieren

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Aktualisierung der Verwendung der erweiterten Konfiguration und der OVF-Eigenschaften beim Bereitstellen einer VMware-VM

## v4.24.0 — 2025-09-24

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Möglichkeit, ein VM-Image aus der Liste der virtuellen Maschinen bereitzustellen

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Möglichkeit, ein VM-Image aus der Liste der virtuellen Maschinen bereitzustellen

### [Network](/network/network_overview)
- Hinzufügen einer Validierung, um die Löschung der Netzwerkfreigabe zu blockieren, wenn das Netzwerk in einem anderen Tenant propagiert wird

### [Marketplace](/marketplace)
- Hinzufügen des Marketplace-Produkts
- Hinzufügen einer Seite zur Auflistung der im Katalog verfügbaren Lösungen
- Hinzufügen einer Seite zur Anzeige der Details einer Lösung
- Möglichkeit, ein VM-Image auf einer OpenIaaS- oder VMware-Umgebung aus den Details einer Lösung bereitzustellen
- Möglichkeit, einen Partner für eine Managed-Service-Lösung zu kontaktieren

## v4.23.0 — 2025-09-12

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Hinzufügen der Unterstützung für 4 neue extra-config-Werte

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Die HA-Warnung nicht für betroffene VMs anzeigen, wenn das lokale ISO nicht gemountet ist
- Beim Hinzufügen oder Ändern der Größe einer Festplatte angeben, ob das verknüpfte SR für eine Replikationskonfiguration verwendet wird

### [IaaS OpenSource — Backup](/iaas_opensource)
- Hinzufügen des AZ-Namens auf dem Backup-Bericht

### [Object Storage](/storage/oss)
- Aktualisierung der Informationen zum Bucket-Lebenszyklus

### [LLMaaS](/llmaas)
- Hinzufügen des LLMaaS-Produkts
- Hinzufügen der Liste der verfügbaren Modelle
- Hinzufügen der Liste der API-Schlüssel mit der Möglichkeit, neue zu erstellen
- Hinzufügen des Verbrauchs nach Modellen und nach Schlüsseln
- Hinzufügen der Details eines Modells
- Möglichkeit, ein Modell zu testen

## v4.22.1 — 2025-09-10

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Änderung der Warnungen bezüglich der gewählten Festplattenformatkonfiguration bei einem VMotion, der Storage einschließt

## v4.22.0 — 2025-09-02

### [Orders](/console/orders)
- Hinzufügen des Befehls zur Löschung einer Netzwerkpropagierung von der Seite aller Bestellungen aus, alle verfügbaren Bestellungen sind nun von dieser Seite aus zugänglich

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Aktualisierung der Bedingungen für die Änderung des Festplattenformats beim Verschieben einer virtuellen Maschine und Hinzufügen von Informationen zum aktuellen Festplattenformat bei der konfigurationsbasierten Einstellung

## v4.21.0 — 2025-08-22

### [Console](/console)
- Aktualisierung der Anzeige, wenn keine Daten erstellt/bereitgestellt wurden oder wenn ein Fehler beim Abrufen von Informationen auftritt.

### [Support](/console)
- Öffnen der Support-Modals mit dem vorab ausgewählten zugehörigen Service
- Hinzufügen eines Badges im Menü und in der Navigationsleiste, wenn ein Support-Ticket eine Antwort erfordert

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Hinzufügen der Möglichkeit, die Liste der VMware-Replikate als CSV zu exportieren
- Verbesserung des RAM-Auswahlschiebereglers bei bestimmten Befehlen
- Hinzufügen der Verwaltung der Optionen „Static differed“ und „immediate“ für vMotion

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Blockieren der Löschung eines nicht leeren Clusters oder eines Clusters mit Hosts/Datastores, die nicht im Wartungsmodus sind

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Hinzufügen der Möglichkeit, die Liste der OpenIaaS-Replikate und die zugehörigen Richtlinien als CSV zu exportieren
- Hinzufügen von Präzisierungen zu den von den virtuellen Maschinen verwendeten Tools (pvDrivers, managementAgent und tools)
- Hinzufügen von Überprüfungen für die Hochverfügbarkeit (HA)

### [Network](/network/network_overview)
- Änderung der Auswahl einer IPv4-Adresse durch eine verfügbare Liste

## v4.20.0 — 2025-07-29

### [Orders](/console/orders)
- Hinzufügen von Informationen zu begrenzten und ausverkauften Lagerbeständen bei der Bestellung von Compute-Ressourcen für eine neue Verfügbarkeitszone

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Hinzufügen einer VMware-Tools-Option zur Synchronisierung der Uhrzeit mit dem Host
- Aktualisierung der Bedingungen für die Verschlüsselung einer virtuellen Maschine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Entfernen der Informationen zur letzten Ausführung der Replikationsrichtlinien, die zu Verzögerungen führen
- Verwaltung der TX-Checksummenbildung für Netzwerkadapter
- Hinzufügen einer Warnung zur OpenIaaS-Replikation, wenn die Anzahl der AZs weniger als 2 beträgt
- Hinzufügen der Hochverfügbarkeit (HA) für Pools und virtuelle Maschinen

## v4.19.0 — 2025-07-24

### [Orders](/console/orders)
- Aktualisierung der Bestellung öffentlicher IP-Adressen mit der Möglichkeit, ein IPv6-Präfix zu bestellen
- Aktualisierung der Anzeige der verfügbaren Bestellungen, wenn keine Umgebung bereitgestellt wurde

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Hinzufügen eines Replikationsfilters in der Liste der virtuellen Maschinen
- Aktualisierung des Modals zur Erstellung einer virtuellen Maschine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Hinzufügen eines Replikationsfilters in der Liste der virtuellen Maschinen

### [Network](/network/network_overview)
- Aktualisierung der Internetseite mit der Hinzufügung der IPv6-Verwaltung

## v4.18.0 — 2025-07-15

### [Console](/console)
- Aktualisierung der Anzeige, wenn keine Daten erstellt/bereitgestellt wurden oder wenn ein Fehler beim Abrufen von Informationen auftritt.

### [Orders](/console/orders)
- Aktualisierung der Internet-Schritte bei der Bestellung einer neuen Verfügbarkeitszone oder eines neuen Pools

### [Support](/console)
- Hinzufügen eines Sicherheits-Services für jedes Produkt bei der Erstellung eines Support-Tickets

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen eines Links zu einer auf einem Controller eingehängten ISO-Datei zum entsprechenden Element im Katalog

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Seite zur OpenIaaS-Replikation mit der Liste der Replikate und der Replikationsrichtlinien
- Möglichkeit, eine Replikationskonfiguration zu einer OpenIaaS-Virtual Machine hinzuzufügen oder zu löschen
- Möglichkeit, eine Replikationsrichtlinie zu erstellen und zu löschen
- Möglichkeit, ein Replikat wiederherzustellen
- Möglichkeit, virtuelle Maschinen im CSV-Format zu exportieren.

## v4.17.0 — 2025-06-20

### [Befehle](/console/orders)
- Möglichkeit, einen OpenIaaS-Pool zu bestellen
- Möglichkeit, die Zuordnung eines vorhandenen Volumes zu einem vorhandenen Bare-Metal-Server über die Seite eines Bare-Metal-Servers, die Seite eines Volumes und die Seite der Bestellungen zu bestellen

### [Support](/console)
- Möglichkeit, eine Datei auf einem Support-Ticket zu löschen
- Die Beschreibung zur Zufriedenheitsbewertung bei Schließung eines Tickets ist nun optional

## v4.16.0 — 2025-06-04

### [Konsole](/console)
- Hinzufügen der englischen Übersetzungen auf der Seite der Verbrauchsberichte im Menü Bestellungen

### [Befehle](/console/orders)
- Möglichkeit, die Vergrößerung der Größe eines Bare-Metal-Volumes zu bestellen
- Möglichkeit, die Vergrößerung der Größe eines OpenIaaS-Block Storage zu bestellen

### [Support](/console)
- Überarbeitung der Erstellung eines Support-Tickets
- Interpretation von Markdown auf einem Support-Ticket und Aktualisierung der Anzeigereihenfolge der Kommentare
- Hinzufügen eines Feedbacks bei der Schließung eines Support-Tickets
- Aktualisierung der Anzeige der Symbole basierend auf der Auswirkung eines globalen Vorfalls

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer Option zum Beibehalten der Konfiguration einer virtuellen Maschine bei einer Wiederherstellung in der Produktion auf dem ursprünglichen Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Warnmeldung bei Platzmangel auf einem Block Storage (90 % belegt) und Warnung bei Bestellungen

### [Object Storage](/storage/oss)
- Hinzufügen der Beschreibung der S3-Rollen bei der Zuweisung an einen Bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Anzeige eines Fehlers, wenn ein Netzwerk auf einem Netzwerkadapter einer virtuellen Maschine falsch konfiguriert ist, was auch den Start der virtuellen Maschine verhindert

## v4.15.0 — 2025-05-13

### [Konsole](/console)
- Anpassung der angezeigten Einheiten für Infrastrukturressourcen: GiB (Gibibyte) statt GB (Gigabyte)

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, eine OpenIaaS-Festplatte zu verschieben
- Möglichkeit, eine OpenIaaS-Festplatte anzuschließen und zu trennen
- Anzeige des Status „angeschlossen/getrennt“ einer Festplatte
- Möglichkeit, die UUID einer Festplatte, eines virtuellen Netzwerks oder eines Snapshots zu kopieren
- Möglichkeit, den Namen einer virtuellen Maschine bei der Bereitstellung einer XVA-Datei auszuwählen
- Hinzufügen der Möglichkeit, einer virtuellen Maschine zum Zeitpunkt des Starts eine Sicherungsrichtlinie zuzuweisen, wenn sie keine hat.

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen von Aktionen, die auf einer Festplatte von einem Block Storage aus verfügbar sind

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen der MAC-Adressen in der Tabelle der Schnittstellen eines Bare-Metal-Servers
- Hinzufügen einer Seite mit Details zu einem Bare-Metal-Volume

## v4.14.0 — 2025-04-28

### [Konsole](/console)
- Möglichkeit, Seiten im Menü anzuheften
- Aktualisierung der Darstellung der API-Dokumentationen

### [Befehle](/console/orders)
- Möglichkeit, die Löschung eines OpenIaaS-Block Storage zu bestellen
- Möglichkeit, die Hinzufügung eines Block Storage zu einem OpenIaaS-Pool zu bestellen
- Möglichkeit, die Löschung eines OpenIaaS-Hosts zu bestellen
- Hinzufügen der Information zum betroffenen Produkt auf der Bestellliste
- Möglichkeit, die Hinzufügung eines Hosts zu einem OpenIaaS-Pool zu bestellen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, einen Host in den Wartungsmodus zu versetzen
- Möglichkeit, die Beschreibung eines Modells zu bearbeiten
- Möglichkeit, einen Host beim Start einer virtuellen Maschine auszuwählen
- Hinzufügen einer Eindeutigkeitsregel für die Namen von OpenIaaS-Virtual Machines

## v4.13.0 — 2025-04-08

### [Konsole](/console)
- Hinzufügen von Statistiken und Kontaktinformationen auf der Support-Seite

### [Befehle](/console/orders)
- Überarbeitung der Anzeige der Bestelldetails
- Überarbeitung der Anzeige der Bestellmöglichkeiten
- Aktualisierung der Anzeige zur Bestellung des ersten Bare-Metal-Servers, wenn keiner vorhanden ist
- Aktualisierung der Bestellung eines Bare-Metal-Servers mit der Auswahl der Netzwerkpropagierung auf den Schnittstellen des Bare-Metal-Servers
- Möglichkeit, ein VLAN auf einem Bare-Metal-Server zu propagieren
- Möglichkeit, ein Volume zu einem Bare-Metal-Server hinzuzufügen
- Möglichkeit, ein Volume von einem Bare-Metal-Server zu deprovisionieren
- Möglichkeit, einen Bare-Metal-Server zu deprovisionieren

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer Schaltfläche „UUID kopieren“ auf VMware-Netzwerken und -Katalogen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Schaltfläche „UUID kopieren“ auf OpenIaaS-Netzwerken und -Katalogen
- Hinzufügen einer Schaltfläche „UUID kopieren“ auf einem Bare-Metal-Server

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen der Anzeige der Netzwerkschnittstellen und der darauf propagierten Netzwerke auf einem Bare-Metal-Server
- Hinzufügen der Aktionen Einschalten, Neustarten und Ausschalten eines Bare-Metal-Servers

### [Netzwerk](/network/network_overview)
- Möglichkeit, die Propagierungen eines Netzwerks auf einem Bare-Metal-Server anzuzeigen

## v4.12.0 — 2025-03-25

### [Konsole](/console)
- Möglichkeit, eine IP-Whitelist von der Zugriffsseite zu löschen

### Tags
- Hinzufügen von Tags zu OpenIaaS-Virtual Machines

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Aktualisierung der Abrufung von API-Empfehlungen zu Affinitäts-/Anti-Affinitätsregeln eines HostClusters

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Anzeige des Imports einer OpenIaaS-XVA-Datei in der Liste der Downloads
- Möglichkeit, eine vorhandene Festplatte an eine virtuelle Maschine anzuhängen
- Möglichkeit, eine vorhandene Festplatte von einer virtuellen Maschine zu trennen

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Aktualisierung der Anzeige der Festplatten eines OpenIaaS-Block Storage

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Aktualisierung der Fehlermeldung beim Zugriff auf Dateien eines Object Storage-Buckets

## v4.11.1 — 2025-03-12

### [Befehle](/console/orders)
- Aktualisierung der Namen der Verfügbarkeitszonen bei einer Bestellung
- Änderung des Mindestwerts für Datastores bei der Bestellung eines DatastoreClusters

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Wenn das Feld „Label“ für HostClusters und DatastoreClusters auf leer geändert wird, wird standardmäßig der technische Name angewendet

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Wenn das Feld „Label“ für Pools auf leer geändert wird, wird standardmäßig der technische Name angewendet
- Hinzufügen einer Informationsblase auf der Katalogseite und beim ISO-Import, um anzugeben, dass XVA bei der Erstellung einer virtuellen Maschine unterstützt wird

## v4.11.0 — 2025-03-10

### [Befehle](/console/orders)
- Aktualisierung der bei der Erstellung einer AZ zulässigen Netzwerktypen
- Aktualisierung der Mindestressourcen, die bei der Bestellung einer neuen Verfügbarkeitszone bereitgestellt werden müssen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Anzeige des Namens der virtuellen Maschine im Konsolen-Tab für VMware

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Hinzufügen der Verwaltung von Labels auf VMware-Datastore-Clustern und Host-Clustern

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Ermöglichen der Bereitstellung einer virtuellen Maschine über XVA-Import für OpenIaaS
- Hinzufügen der Verwaltung von Labels auf OpenIaaS-Pools
- Anzeige des Namens der virtuellen Maschine im Konsolen-Tab für OpenIaaS

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Aktualisierung der CPU-Informationen von Hosts und Pools von OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen von IOPS/TO auf Bare-Metal-Volumes

## v4.10.0 — 2025-03-04

### [Konsole](/console)
- Aktualisierung der Links zur neuen öffentlichen Dokumentation

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Warnung, um Benutzer im Falle von doppelten MAC-Adressen in der Liste der virtuellen Maschinen und bei der Erstellung oder Änderung von Netzwerkadaptern zu informieren
- Hinzufügen einer Option zum Erzwingen des Stoppens oder Neustartens einer virtuellen Maschine
- Der Arbeitsspeicher wird standardmäßig nicht mehr in einen Snapshot einbezogen, wenn die virtuelle Maschine nicht eingeschaltet ist
- Möglichkeit, eine Festplatte umzubenennen und in der Größe zu ändern
- Hinzufügen der Löschung von ISOs und Modellen von der Katalogseite
- Hinzufügen der Möglichkeit, die Konfigurationsfestplatte „Cloud Init“ bei der Bereitstellung einer virtuellen Maschine zu löschen

## v4.9.1 — 2025-02-27

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, einen Netzwerkadapter auf einer eingeschalteten virtuellen Maschine zu bearbeiten

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen von Einschränkungen für die in den Namen von OpenIaaS-Virtual Machines zulässigen Zeichen

## v4.9.0 — 2025-02-21

### [Konsole](/console)
- Machen der Namen in Tabellen klickbar, wenn eine verknüpfte Seite existiert
- Verbesserung des Öffnens von Konsolen, um zu vermeiden, dass mehrere Tabs geöffnet werden, wenn mehrere Fenster auf derselben Seite geöffnet sind
- Anzeige eines Fehlers beim Öffnen einer Konsole, wenn der Browser keine Weiterleitungen in der Anwendung zulässt

### [Metriken](/console/metrics/concepts)
- Anzeige der RAM-Einheit auf der Seite zur Gesundheit der virtuellen Maschinen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Blockieren der Erstellung einer virtuellen Maschine, wenn der Platz auf den ausgewählten Block Storage-Systemen nicht ausreicht
- Löschen der Standard-MAC-Adressen bei der Erstellung einer OpenIaaS-Virtual Machine

### [Speicher](/storage/oss)
- Möglichkeit, einen S3-Endpunkt in die Zwischenablage zu kopieren

## v4.8.0 — 2025-02-14

### [Befehle](/console/orders)
- Hinzufügen der Bestellung der Netzwerkpropagierung auf OpenIaaS-Pools
- Hinzufügen der Befehle zur Netzwerkpropagierung auf der Seite aller Bestellungen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Anzeige der Anzahl der pro Controller zugewiesenen und verfügbaren Festplatten auf einer virtuellen Maschine
- Aktualisierung der Bedingungen für die Anzahl der Festplatten, die auf SCSI Para Virtual-Controllern hinzugefügt werden können, basierend auf der Hardwareversion der virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, Cloud Init-Optionen bei der Erstellung einer OpenIaaS-Virtual Machine hinzuzufügen
- Anzeige der Festplatten auf der Seite eines Block Storage
- Möglichkeit, die Boot-Firmware-Konfiguration einer OpenIaaS-Virtual Machine zu aktualisieren
- Möglichkeit, eine OpenIaaS-Virtual Machine zu klonen

### [Netzwerk](/network/network_overview)
- Aktualisierung der Visualisierung der Propagierungen eines Netzwerks und Hinzufügen von OpenIaaS-Propagierungen
- Aktualisierung der Erstellung eines Netzwerks und Möglichkeit, das Netzwerk bei seiner Erstellung auf die OpenIaaS-Infrastruktur zu propagieren

## v4.7.0 — 2025-02-03

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Der OVF-Export ist blockiert, wenn die virtuelle Maschine verschlüsselt ist

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeige der Beziehungen zwischen Datastore-Clustern und Host-Clustern auf den Seiten Berechnung und Speicher

### [IaaS VMware — Sicherung](/iaas_vmware)
- Änderung der Startoption nach der Wiederherstellung für eine SecNumCloud-Umgebung bei der Wiederherstellung im Klon- oder Produktionsmodus auf einem alternativen Host oder Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Schaltflächen zum Einhängen und Aushängen einer OpenIaaS-ISO in die Aktionsleiste einer virtuellen Maschine

### [Netzwerk](/network/network_overview)
- Verbesserung der Anzeige von Netzwerk-Propagationen, wenn Löschanfragen für Propagationen ausstehen

## v4.6.0 — 2025-01-30

### [Konsole](/console)
- Entfernen der angezeigten Zeichen bei der Autovervollständigung beim Hinzufügen von Beobachtern zur Erstellung eines Support-Tickets
- Aktualisierung der Anzeige des Menüs und der verfügbaren Seiten für VMware- und OpenIaaS-Angebote in einer neuen Umgebung ohne provisionierte Verfügbarkeitszonen

### [Konsole — Benachrichtigungen](/console)
- Aktualisierung der Anzeige der Benachrichtigungsabonnements auf der Profilseite

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Möglichkeit, eine virtuelle Maschine zu verschlüsseln

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des Exports einer virtuellen Maschine als Vorlage

## v4.5.0 — 2025-01-17

### [Konsole](/console)
- Hinzufügen der Beschreibung bei der Erstellung und Anzeige von Whitelists
- Möglichkeit, die Beschreibung einer Whitelist zu ändern

### [Bestellungen](/console/orders)
- Hinzufügen eines Auftrags für eine neue OpenIaaS-Verfügbarkeitszone
- Hinzufügen eines Auftrags für Bare Metal
- Verknüpfen eines Hypervisor-Clusters mit einem Speicherspeichercluster

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Anzeigen der verbleibenden Größe in Klammern in den Speicher-Auswahlbäumen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Hinzufügen der Worst-Case-Speicherzuweisung auf einem VMware-HostCluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des ISO-Uploads in die OpenIaaS-Kataloge
- Hinzufügen der Verschiebung von OpenIaaS-Virtual-Machines
- Möglichkeit, bei der Erstellung einer OpenIaaS-Virtual-Machine Festplatten und Netzwerke auszuwählen

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen einer Seite zur Auflistung von Bare-Metal-Systemen
- Hinzufügen einer Seite zur Auflistung von Bare-Metal-Volumes
- Hinzufügen einer Seite mit den Details eines Bare-Metal-Systems
- Hinzufügen der Möglichkeit, eine Bare-Metal-Konsole zu öffnen

## v4.4.0 — 2025-01-13

### [Konsole](/console)
- Technische Änderungen während des Authentifizierungsprozesses

## v4.3.0 — 2024-12-19

### [Konsole — Aktivitäten](/console)
- Hinzufügen der Links „Zur Ressource wechseln“ zu Aktivitäten, die sich auf XOA und Object-Storage beziehen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Tags und der IP-Adresse der virtuellen Maschine zum CSV-Export der virtuellen Maschinen

### [IaaS VMware — Sicherung](/iaas_vmware)
- Vorschlag, nur die gefilterten Elemente beim CSV-Export der Sicherungsberichte im Unterreiter „Virtuelle Maschinen“ zu exportieren

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen der XOA-VM-Vorlagen ab der Katalogseite

### [Object Storage](/storage/oss)
- Möglichkeit, den globalen Zugriffsschlüssel aus den Speicherkonten zu erstellen und zurückzusetzen

## v4.2.0 — 2024-12-10

### [Konsole](/console)
- Hinzufügen von Weiterleitungen zur Statusseite

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Elemente, die sich bereits in „Mein Katalog“ befinden, werden nun auch im „Öffentlichen Katalog“ angezeigt
- Hinzufügen von Weiterleitungen zu den Komponenten, die in einem VMware-Katalogelement erwähnt werden
- Aktualisierung der RAM-Anzeige auf einem Hypervisor-Cluster
- Entfernen der Option zur automatischen Replikation neuer Festplatten, die Fehler verursachte
- Hinzufügen von Validierungen zur Replikation einer virtuellen Maschine
- Hinzufügen neuer extra config PCIPassthru aus der erweiterten Konfiguration einer virtuellen Maschine für das GPU-Management
- Möglichkeit, einen PCI-Controller zu virtuellen Maschinen hinzuzufügen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeige von DRS-Empfehlungen und -Störungen ab einem Hypervisor-Cluster
- Neuer Status für Hypervisor und Datastores, wenn eine Wartungsanfrage aussteht
- Hinzufügen von Informationen zur GPU eines Hypervisors

### [IaaS VMware — Sicherung](/iaas_vmware)
- Entfernen mehrerer nicht funktionsfähiger Backup-Optionen für virtuelle Maschinen im Testmodus

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Sicherungsseite für den OpenIaaS-Teil, die Fehler, Richtlinien, Sicherungsberichte auflistet und die Wiederherstellung gelöschter virtueller Maschinen ermöglicht

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen einer Seite zur Auflistung der OpenIaaS-Verfügbarkeitszonen
- Hinzufügen einer Speicherseite für den OpenIaaS-Teil
- Hinzufügen einer Berechnungsseite für den OpenIaaS-Teil

### [Housing (Colocation)](/housing)
- Änderung der auf der Geräteseite angezeigten Informationen

## v4.1.1 — 2024-11-18

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung der Bearbeitung des Speichers; die Konversion erfolgt in die Einheit mit dem letzten ganzzahligen Wert
- Bei einer Snapshot ist die Schaltfläche zum Sichern des RAMs deaktiviert, wenn die virtuelle Maschine ausgeschaltet ist
- Wenn mehrere virtuelle Maschinen aufgeklappt sind, wird die Festplattenliste nicht sofort angezeigt

### [IaaS VMware — Sicherung](/iaas_vmware)
- Hinzufügen der CSV-Export-Schaltfläche im Reiter „Virtuelle Maschinen“ der Sicherungsberichtsseite

## v4.1.0 — 2024-11-13

### [Konsole](/console)
- Möglichkeit, eine Datei während eines Feedbacks zu senden

### [Identität & Zugriff (IAM)](/console/iam)
- Deaktivierung der Möglichkeit, einen Eigentümer zu löschen

### [Bestellungen](/console/orders)
- Hinzufügen des Managements zum Hinzufügen, Löschen und Bearbeiten eines Datastores ab der Bestellseite
- Hinzufügen der Möglichkeit, einen Host zu löschen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Snapshot-Aktivitäten zum Snapshot-Reiter einer VM
- Anzeige der tatsächlichen Größe der virtuellen Maschinen im CSV-Export

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Auf den Berechnungs- und Speicherseiten gilt der Filter für Verfügbarkeitszonen auch für die Cluster-Reiter
- Anzeige der Nutzungsprozente auf den Verbrauchsbalken (CPU / RAM / Speicher)

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Validierung zur Anwesenheit von Sicherungspolitiken bei der Option für den automatischen Start
- Hinzufügen einer Option zum Erzwingen des Stopp/Neustarts von virtuellen Maschinen ohne installierte Guest-Tools
- Verbesserung der Meldung zur Ausführung einer OpenIaaS-Richtlinie auf einer bestimmten virtuellen Maschine

### [Bastion](/bastion)
- Hinzufügen einer Validierung für das Host-Feld eines Geräts

## v4.0.3 — 2024-11-04

### [Konsole](/console)
- Verbesserungen und Korrekturen im Zusammenhang mit dem neuen Design

## v4.0.2 — 2024-10-30

### [Konsole](/console)
- Verbesserungen und Korrekturen im Zusammenhang mit dem neuen Design

## v4.0.1 — 2024-10-25

### [Konsole](/console)
- Verbesserungen und Korrekturen im Zusammenhang mit dem neuen Design

## v4.0.0 — 2024-10-18

### [Konsole](/console)
- Neues Design der Konsole
- Überarbeitung der Infrastruktur- und Sicherungsseiten

---

:::info[Vorherige Historie]

Die vollständige Historie der Versionen vor v4.0 (v1.0 bis v3.38.1, von Februar 2019 bis Oktober 2024) ist im [Git-Verlauf](https://github.com/Cloud-Temple/docs) des Projekts verfügbar.

:::
