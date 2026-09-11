---
title: Produktneuheiten
sidebar_position: 999
---

# Produktneuheiten & Weiterentwicklungen

> Dieses Changelog listet ausschließlich neue Funktionen und wesentliche Weiterentwicklungen der Cloud Temple-Plattform auf.
> Bugfixes sind bewusst nicht enthalten.

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen der Spalte „Fabric“ in der Registerkarte Netzwerk eines Bare-Metal-Servers

## v4.49.0 — 2026-08-31

### [Console](/console)
- Automatischer Start des Willkommens-Tutorials bei der ersten Anmeldung eines Benutzers
- Entfernen der Fehlerbenachrichtigungen beim Laden des Dashboards, wenn die Umgebungen nicht bereitgestellt sind

### [Console — Organisation](/console/iam/concepts)
- Anzeige des Aktivierungspreises eines Tenants im Erstellungsmodal im Organisationsmodus

### [VM Instances](/public_cloud/vm_instances)
- Ausblenden von Feldern und explizite Meldung, wenn kein Speicher verfügbar ist, beim Hinzufügen und Erweitern eines Datenträgers
- Zuweisen und Entfernen einer öffentlichen IP-Adresse über den Tab „Netzwerkkarten“ einer an ein VPC angeschlossenen virtuellen Maschine
- Möglichkeit, eine benutzerdefinierte Konfiguration (vCPU und RAM frei wählbar, innerhalb der Grenzen der Instanzfamilie) bei der Erstellung, Wiederherstellung und Größenänderung einer VM-Instanz auszuwählen

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Die beim Ändern der Größe einer virtuellen Maschine angebotene Anzahl an vCPUs ist nun auf ihre maximale Kapazität begrenzt
- Zuweisen und Entfernen einer öffentlichen IP-Adresse über den Tab „Netzwerkkarten“ einer mit einem VPC verbundenen virtuellen Maschine

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Anzeige des Blade-Typs anstelle der Beschreibung in der « Klasse » der Pools

### [IaaS OpenSource — Sicherung](/iaas_opensource)
- Hinweis bei der Wiederherstellung, dass die ursprüngliche virtuelle Maschine nicht ersetzt wird: Es wird eine neue, mit Datum versehene virtuelle Maschine erstellt

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Verknüpfung und Trennung einer öffentlichen IP-Adresse im Tab „Netzwerkkarten“ einer virtuellen Maschine, die mit einem VPC verbunden ist

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Anzeige des Blade-Typs anstelle seiner Beschreibung in der „Klasse" der Cluster

### [Réseau](/network/network_overview)
- IP-Reservierung für Interconnect: Sperren von Netzwerk- und Broadcast-Adressen sowie Kennzeichnung „Reserviert“ für reservierte IP-Adressen

### [VPC](/network/vpc)
- Die Schaltfläche „Neuer VPC“ in der Liste ist nun ausgegraut, wenn das VPC-Limit erreicht ist.

### [Bare Metal](/iaas_bare-metal)
- Anzeige des Blade-Typs anstelle der Beschreibung in der « Klasse » der Bare-Metal-Server

## v4.48.0 — 2026-08-13

### [Console](/console)
- Verbesserung der Persistenz der Sprachauswahl, die nun mit dem Benutzerprofil verknüpft ist

### [VM Instances](/public_cloud/vm_instances)
- Die bei der Erstellung einer VM-Instanz angezeigten geschätzten Kosten sind nun monatlich, auf Basis von 730 h/Monat.

### [Marketplace](/marketplace)
- Nur die mit dem ausgewählten Image kompatiblen Verfügbarkeitszonen werden nun bei der Bereitstellung aus dem Marketplace angeboten.
- Der Preis eines Marketplace-Produkts, das als VM-Instanz bereitgestellt wird, gibt nun an, dass er basierend auf CPU, RAM und Speicher berechnet wird.

### [Bestellungen](/console/orders)
- Klare Meldung, wenn bei der Bestellung einer Verfügbarkeitszone oder eines Pools nicht mehr genügend Speicherplatz für einen Speichertyp verfügbar ist.

### [VPC](/network/vpc)
- Der VPC-Name wird nun vor dem Netzwerknamen in der Netzwerkauswahl angezeigt
- Der VPC-Name steht nun vor dem Netzwerknamen in der Registerkarte Netzwerkadapter der virtuellen Maschinen
- Angleichung der Farben der VPC-Typ-Labels (geteilt, dediziert) an die der Netzwerke
- Die Option VM-Instanzen ist nun über das Formular zur Zuweisung einer statischen IP verfügbar
- Netzwerkadapter, die bereits einer statischen IP zugeordnet sind, werden im Zuweisungsformular nun ausgegraut

### [Objektspeicher](/storage/oss)
- Auswahl des Adressierungsstils (path-style oder virtual-hosted) bei der Generierung eines Freigabelinks für eine Datei
- Warnung für Buckets, deren Name nicht DNS-kompatibel ist: Nur der path-style-Zugriff ist möglich

### [Gestionnaire des coûts](/console/billing/concepts)
- Der Abschnitt Kostenmanager wird auf dem Organisations-Dashboard nicht mehr angezeigt, wenn die Organisation dafür nicht berechtigt ist.
- Anzeige einer Fehlerkarte anstelle von Kosten von 0 €, wenn der Abruf der Verbrauchskosten auf dem Organisations-Dashboard fehlschlägt.
- Die Zeilen für Supportpläne werden nun unter « Support » in den Kosten pro Tenant zusammengefasst, anstatt unter einem Tenant « Unbekannt ».

### [Console — Organisation](/console/iam/concepts)
- Die Produkte eines Tenants werden nun gruppiert, je nachdem, ob sie bearbeitbar, nicht deaktivierbar oder nicht verfügbar sind, jeweils mit Angabe des Sperrgrunds.

### [Support](/console)
- Beschreibungen und Post-Incident-Berichte werden auf der Seite Incidents nun formatiert (markdown)
- Globale Support-Nachrichten werden nun im Organisationsmodus angezeigt

### [Housing (Colocation)](/housing)
- Hinzufügen der Schnittstellentypen 1000BASE-SX und 10GBASE-SR zur Colocation-Platzbuchung

## v4.47.0 — 2026-07-30

### [Console](/console)
- Die Swagger-Dokumentation des Moduls Commandes ist jetzt verfügbar

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Beim Bereitstellen einer virtuellen Maschine werden nunmehr nur noch die bereitstellbaren Katalogelemente (OVF und VM-Vorlagen) angeboten

### [VM Instances](/public_cloud/vm_instances)
- Die geschätzten Kosten (stündlich) werden nun bei der Instanzerstellung angezeigt, mit einer Aufschlüsselung nach Komponente (vCPU, RAM, Festplatten)

### [VPC](/network/vpc)
- Bei der Bestellung eines neuen VPC können Sie nun zwischen einer Bereitstellung in einer dedizierten Umgebung (Ihre OpenIaaS-Infrastruktur) oder in einer geteilten Umgebung (unter Vorbehalt eines Abonnements für das Produkt VM Instances) wählen.

### [Objektspeicher](/storage/oss)
- Großbuchstaben werden im Bucket-Namen nun nicht mehr akzeptiert, gemäß den Namenskonventionen.

### [Marketplace](/marketplace)
- Sie können nun eine VM-Instanz (Public Cloud) direkt von der Produktdetailseite eines Marketplace-Produkts bereitstellen.

## 2026-07-27 — Verwaltete Datenbanken (Preview)

### [MariaDB Managé](/managed_mariadb)
- Das Bereitstellungsmodell Distributed wurde in MultiAZ umbenannt
- Die Instanzgrößen reichen nun bis zu 6X-Large (32 vCPU und 128 GiB Arbeitsspeicher) und der online-erweiterbare Speicher bis zu 512 GiB
- Veröffentlichung von Empfehlungen zur Dimensionierung, die die Einstellung der Engine-Parameter erläutern, mit einer Warnung zur Aktivierung von `performance_schema` unterhalb der X-Large-Größe
- Die Point-in-Time-Wiederherstellung wird nicht mehr angeboten: Die Sicherungen basieren nun auf täglichen physischen Backups und logischen Exports, ohne kontinuierliche Archivierung der Transaktionsprotokolle

### [PostgreSQL Managé](/managed_postgresql)
- Neue Architektur basierend auf dem Kubernetes-Operator CloudNative-PG und dem Sicherungs-Plugin Barman Cloud
- Drei Bereitstellungsmodelle: StandAlone mit einer einzelnen Instanz, Replica mit drei asynchron replizierten Instanzen mit automatischem Failover und Enterprise mit drei synchron replizierten Instanzen auf mindestens zwei Knoten, wobei die Persistenz ohne Blockierung bei Ausfall eines Knotens garantiert ist
- Deklaratives Deployment über benutzerdefinierte Kubernetes-Ressourcen, nutzbar über Terraform oder Helm, sowie nativer Export von Metriken an Prometheus

## v4.46.0 — 2026-07-24

### [Konsole — Organisation](/console/iam/concepts)
- Sie können nun einen Tenant direkt auf der Seite Tenants erstellen, indem Sie die zugehörigen Produkte auswählen.

### [Console — Aktivitäten](/console)
- Die Aktivitätsprotokolle können nun nach Modul gefiltert werden

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkschnittstellen einer mit einem VPC verbundenen virtuellen Maschine angezeigt.
- Ein Tab „Gesundheitszustand“ ist nun im Detail einer virtuellen Maschine verfügbar, der über die Liste aufgerufen werden kann.

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun eine VMware-Replikation zwischen Verfügbarkeitszonen bestellen

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Die Liste der Netzwerkschnittstellen einer an ein VPC angeschlossenen virtuellen Maschine zeigt nun die öffentliche IP-Adresse an
- Ein Tab „Gesundheit“ ist nun im Detail einer virtuellen Maschine verfügbar, die aus der Liste geöffnet wurde

### [VM-Instanzen](/public_cloud/vm_instances)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkadapter einer mit einem VPC verbundenen Instanz angezeigt
- Ein Tab „Gesundheit“ ist nun im Instanzdetail verfügbar, der über die Liste zugänglich ist

### [Housing (Colocation)](/housing)
- Colocation-Bestellungen sind jetzt verfügbar: Platzreservierung, Installation und Demontage von Geräten
- Colocation-Serviceaufträge sind jetzt verfügbar: technische Unterstützung und Smart Hands
- Colocation-Bestellungen für Verkabelung und Dekabelung (CPE) sind jetzt verfügbar
- Colocation-Bestellungen, die nicht über die Konsole unterstützt werden, sind jetzt klar gekennzeichnet, mit der Aufforderung, den Support zu kontaktieren

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- Die Erstellung einer Instanz basiert nun auf der Auswahl eines Systemimages, das die Templates ersetzt.

## v4.45.4 — 2026-07-22

### [Open-Source-IaaS — Virtuelle Maschinen](/iaas_opensource)
- Bei der Konfiguration der Kerne pro Socket einer OpenIaaS-Virtuellen Maschine wird die CPU-Topologie (Anzahl der Sockets und Kerne pro Socket) nun explizit angezeigt.

### [LLMaaS](/llmaas)
- Der Mindestbetrag eines LLMaaS-Guthabens wird auf 100 € gesenkt.

## v4.45.3 — 2026-07-21

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Beim Bereitstellen einer virtuellen Maschine wird nun die Meldung „Kein Modell verfügbar“ angezeigt, wenn der Katalog leer ist.

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Bei der Bereitstellung einer virtuellen Maschine wird nun die Meldung „Kein Modell verfügbar“ angezeigt, wenn der Katalog leer ist.

## v4.45.2 — 2026-07-17

### [Console](/console)
- Geringfügige technische Verbesserungen

## v4.45.0 — 2026-07-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Während einer blockierenden Operation zeigen virtuelle Maschinen nun einen expliziten Status an: Sicherung, Snapshot oder laufende Wiederherstellung
- Die Bearbeitung der CPU-Einstellungen passt sich nun an die Option für das Hinzufügen von CPUs im laufenden Betrieb (CPU hot add) und an den Status der virtuellen Maschine an

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Während eines blockierenden Vorgangs zeigen virtuelle Maschinen nun einen eindeutigen Status an (laufende Sicherung, Snapshot oder Wiederherstellung)
- Die Detailansicht einer virtuellen Maschine enthält nun eine Übersicht zur Ressourcennutzung (CPU, RAM, Speicher)

### [VM-Instanzen](/public_cloud/vm_instances)
- Instanzen zeigen während einer blockierenden Operation nun einen expliziten Status an (Sicherung, Snapshot oder Wiederherstellung läuft)
- Echtzeit-Nutzungsmetriken (CPU, RAM, Speicher) werden nun für jede Instanz angezeigt
- Die Eindeutigkeit des Namens wird nun sowohl bei der Erstellung als auch bei der Wiederherstellung einer Instanz geprüft

### [Netzwerk](/network/network_overview)
- Bei einer Bestellung, die einen Propagierungsschritt enthält, werden neue Netzwerke erst bei der endgültigen Bestätigung der Bestellung erstellt.

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- Der Netzwerktyp (privates Backbone) wird nun auf den Netzwerkadaptern einer Instanz angezeigt, auch ohne die VPC-Funktion.

## v4.44.1 — 2026-07-02

### [Console](/console)
- Geringfügige technische Verbesserungen

## v4.44.0 — 2026-07-02

### [Bestellungen](/console/orders)
- Die Infrastrukturbereitstellungsaktionen berücksichtigen nun die fachlichen Rollen (Compute, Netzwerk, VPC, Bare Metal…) ergänzend zu den Bestellberechtigungen.

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Das Tracking der Übertragung von ISO- und OVF-Dateien wurde verbessert und es ist nun möglich, eine laufende Übertragung abzubrechen.

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Überwachung des Uploads von ISO- und XVA-Dateien wurde verbessert und es ist nun möglich, einen laufenden Upload abzubrechen

### [VM Instances](/public_cloud/vm_instances)
- Datenträgergrößen akzeptieren keine Dezimalwerte mehr, weder bei der Erstellung einer Instanz noch beim Hinzufügen oder Erweitern eines Datenträgers.
- Die Verarbeitungsindikatoren für Instanzen und deren Ressourcen werden nach einem Neuladen der Seite nun korrekt wiederhergestellt.

### [VPC](/network/vpc)
- Über die Netzwerkkarte einer an ein VPC-Netzwerk angebundenen virtuellen Maschine können Sie nun direkt auf das zugehörige VPC zugreifen (VMware, OpenIaaS und VM-Instanzen)
- Bestimmte VPC-Operationen können nun parallel ausgeführt werden: Hinzufügen eines Gateways während der Erstellung eines privaten Netzwerks (und umgekehrt), sowie das gleichzeitige Löschen mehrerer privater Netzwerke

## 2026-06-30 — API Metriken

### [Metriken](/console/metrics/concepts)
- Ein Zugriffstoken kann nun die Verfügbarkeit des Metriken-Dienstes über den API-Endpunkt `HEAD /v1/configuration` überprüfen

## v4.43.0 — 2026-06-30

### [Konsole](/console)
- Die Netzwerkauswahl unterscheidet nun visuell zwischen VPC- und privaten Backbone-Netzwerken
- Ein interaktives Tutorial ist nun auf der Benutzerseite verfügbar

### [Console — Activités](/console)
- Sie können nun die Details einer Aktivität anzeigen, indem Sie deren Zeile in den Listen „Kürzlich“ und „Archiviert“ aufklappen
- Jede Aktivität verfügt nun über eine dedizierte Detailseite, die über einen direkten Link zugänglich ist
- Die Details einer Aktivität sind nun über die Erfolgs- und Fehlerbenachrichtigungen aufrufbar
- Sie können nun das vollständige JSON einer Aktivität anzeigen, kopieren oder herunterladen
- Die Liste der archivierten Aktivitäten kann nun nach Erstellungsdatum sortiert werden

### [Bestellungen](/console/orders)
- Die Anzeige des Bestellfortschritts wurde überarbeitet

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Die Details einer virtuellen Maschine werden nun in einer neuen Ansicht angezeigt
- Bei Änderungen zur Laufzeit wird die Konsistenz zwischen CPUs und Kernen pro Socket geprüft: Es werden Warnungen angezeigt und ungültige Werte werden nicht akzeptiert

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun die Löschung einer IaaS-Umgebung beantragen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Eine neue Detailansicht ist für virtuelle Maschinen verfügbar
- Sie können die Liste der virtuellen Maschinen nun nach Verfügbarkeitszone (AZ) filtern

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Die Seite eines Storage Repositorys zeigt nun das Erstellungsdatum des Snapshots eines Datenträgers an.

### [VM-Instanzen](/public_cloud/vm_instances)
- Die Details einer Instanz werden in einer neuen Ansicht angezeigt
- Die Schaltfläche „Jetzt Sicherung starten“ ist nun deaktiviert, wenn die Sicherung nicht verfügbar ist

### [VPC](/network/vpc)
- Die Beschreibung der öffentlichen IP-Adresse wird nun bei der Zuordnung zu einem privaten Netzwerk angezeigt.

### [Object Storage](/storage/oss)
- Sie können nun eine Beschreibung zu den erlaubten IP-Adressen (whitelist) eines Buckets hinzufügen

## v4.42.0 — 2026-06-22

### [Console](/console)
- Der Abschnitt „Datenschutz“ wurde aktualisiert

### [Object Storage](/storage/oss)
- Die Verfügbarkeit des TLS-Wildcard-Zertifikats für den S3-Zugriff im host-style wird nun angezeigt
- Sie können nun Dateien über eine präsignierte URL auf S3 hochladen
- Sie können nun die Versionierung für einen Bucket aktivieren
- Sie können nun die Versionen einer Datei verwalten

## v4.41.1 — 2026-06-11

### [Commandes](/console/orders)
- Das bei der Bestellung eines Block Storage verfügbare Maximum wurde aktualisiert.

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Die Meldungen zu den Lagerbeständen sind nun präziser bei der Bestellung von Hypervisoren oder bei der Erhöhung des RAM-Speichers eines Clusters.

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Hinzufügen eines vorhandenen Datenträgers zu einer virtuellen Maschine wird die UUID des Datenträgers nun angezeigt, wenn mehrere Datenträger denselben Namen tragen.

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Eine Warnung wird nun bei der Anforderung eines Updates für den Master-Host eines Pools angezeigt.

### [VPC](/network/vpc)
- Die Anforderung eines VPC erfordert nun, dass eine OpenIaaS-Verfügbarkeitszone bereitgestellt ist.

## 2026-06-06 — MCP-Server der Konsole

- Hilferessource zur Authentifizierung, die die Erstellung eines persönlichen Zugriffstokens und das erwartete Header-Format beschreibt; Authentifizierungsfehler geben nun die Ursache und die entsprechenden Lösungsschritte an
- Konfigurationsänderung mit Auswirkung: Die in der Serverkonfiguration hinterlegte API-URL muss nun das Segment `/api` enthalten. Diese muss vor dem Deployment dieser Version aktualisiert werden, um 404-Fehler zu vermeiden. Die URL wird beim Start überprüft und die Public-Key-Infrastruktur (PKI) wird unterstützt.

## 2026-06-05 — MCP-Server der Konsole

- Abfrage des Namens und der Version des bereitgestellten Servers

## v4.40.0 — 2026-06-02

### [Console](/console)
- Ein interaktiver Onboarding-Workflow ist jetzt verfügbar

### [Console — Organisation](/console/iam/concepts)
- Der Kostenmanager ist nun in der Organisationsansicht verfügbar
- Die Organisationsansicht verfügt nun über eine dedizierte Ansicht

### [Commandes](/console/orders)
- Der Netzwerkschritt wird in den Bestellungen nicht mehr angezeigt, wenn nur das VPC-Produkt aktiviert ist.

### [Support](/console)
- Die Support-Pläne und Support-Kontakte wurden aktualisiert

### [Supporttickets](/console)
- Die Managed-Service-Funktionen wurden aus den Supporttickets entfernt.

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Funktionen der öffentlichen Inhaltsbibliothek wurden entfernt

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Der Standardwert des CloudInit-Schritts wurde für OpenIaaS-Bereitstellungen aus dem Marketplace aktualisiert.
- Das Senden von Sonderzeichen aus der Zwischenablage der Konsole einer virtuellen Maschine wurde verbessert.

### [Netzwerk](/network/network_overview)
- Sie können nun die Beschreibung einer IP-Adresse löschen
- Sie können nun das Feld `description` bei der Erstellung eines virtuellen Netzwerks ausfüllen
- Sie können nun das Feld `description` bei der Änderung eines virtuellen Netzwerks ausfüllen

### [VPC](/network/vpc)
- Die Beschreibung einer VPC-Floating-IP wird nun angezeigt
- Sie können nun die Beschreibung einer VPC-Floating-IP bearbeiten

## 2026-05-25 — MCP-Server der Konsole

- Jede Berechtigungsverweigerung gibt nun das betroffene Produkt und den genauen Namen der Berechtigung an, die im persönlichen Zugriffstoken aktiviert werden muss.

## 2026-05-24 — MCP-Konsolenserver

- Supportverwaltung über einen Agenten: Liste und Details der Tickets, Erstellung, Kommentierung, Schließung, Einsehen geplanter Wartungen und ihrer Kategorien, Tenant-Störungen und Plattformstörungen
- Option zur Löschung nach dem Start bei der Bereitstellung aus dem Marketplace
- Geführter Bereitstellungsablauf für eine Linux-VM
- Direkt einsehbare Ressourcen: Glossar für OpenSource-IaaS-Begriffe, Pool-Topologie, die Hosts, Speicherdepots, Netzwerke und Metriken auf einen Blick zusammenfasst, sowie Marketplace-Katalog, gefiltert auf OpenSource-IaaS

## 2026-05-23 — MCP-Server der Konsole

- Durchsuchen des Marketplace-Katalogs mit Filtern sowie technische Datenblätter für IaaS OpenSource (XVA) und VMware (OVF) mit Details zu Prozessoren, Arbeitsspeicher, Festplatten und exakten Namen der Netzwerkschnittstellen
- Bereitstellung einer IaaS OpenSource-virtuellen Maschine aus einem Katalogelement, idempotent nach Name
- Power-Management von IaaS OpenSource-virtuellen Maschinen — Einschalten, Ausschalten, Neustart, Pause, Aussetzen und Fortsetzen — idempotent nach Status
- Verfolgung langer Operationen über Aktivitäten

## 2026-05-22 — MCP-Server der Konsole

- Erweiterte Abfrage des Open-Source-IaaS: Pools, Hosts, virtuelle Maschinen, Snapshots, Netzwerkadapter mit Erkennung doppelter MAC-Adressen, virtuelle Festplatten und Replikationsstatus, wobei alle diese Operationen schreibgeschützt sind
- Serverseitig anwendbare Filter auf alle diese Listen

## v4.39.2 — 2026-05-22

### [Netzwerk](/network/network_overview)
- Sie können nun den PTR-Eintrag einer öffentlichen IP-Adresse oder einer Interconnect-IP-Adresse löschen.

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Benennungsregeln für Snapshots virtueller Maschinen wurden geändert

### [Bare Metal](/iaas_bare-metal)
- Sie können nun die Beschreibung eines Bare-Metal-Servers bearbeiten

### [Netzwerk](/network/network_overview)
- Sie können nun den PTR-Eintrag einer Interconnect-IP-Adresse ändern

## v4.39.0 — 2026-04-23

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bestehende Festplatten werden nun beim Hinzufügen einer neuen Festplatte angezeigt
- Beim Verschieben (vMotion) einer virtuellen Maschine im Modus „Nur Rechenressource“ kann nun ein Cluster ausgewählt werden

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bestehende Festplatten werden nun beim Hinzufügen einer neuen Festplatte angezeigt.

### [VM Instances](/public_cloud/vm_instances)
- Die Liste der VM-Instanzen kann nun im CSV-Format exportiert werden
- Die Anzeige der Häufigkeit einer Sicherungsrichtlinie wurde überarbeitet

### [Bare Metal](/iaas_bare-metal)
- Die Auswahl der Netzwerke ist nun obligatorisch bei der Propagation eines Netzwerks auf einem Bare Metal

## 2026-04-20 — Verwaltete Datenbanken (Vorschau)

### [MariaDB Managé](/managed_mariadb)
- Veröffentlichung der Engine-Parameter, die jedem Instanztyp zugeordnet sind: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` und `table_open_cache`
- Überarbeitung der Instanztypen: Die Obergrenze wird auf 3X-Large gesenkt (8 vCPU et 32 Gio de mémoire) und der maximal online erweiterbare Speicher wird von 512 Gio auf 128 Gio reduziert

### [Verwaltetes PostgreSQL](/managed_postgresql)
- Veröffentlichung der Engine-Parameter für jede Instanzvorlage: `shared_buffers`, `effective_cache_size`, `work_mem` und `max_connections`
- Überarbeitung der Instanzvorlagen: Die Obergrenze wird auf 3X-Large (8 vCPU und 32 Gio Arbeitsspeicher) gesenkt und die maximal online erweiterbare Speicherkapazität wird von 512 Gio auf 128 Gio reduziert.

## v4.38.1 — 2026-04-18

### [VM-Instanzen](/public_cloud/vm_instances)
- Die angebotenen Netzwerke werden nun sowohl bei der Erstellung einer Instanz als auch bei der Änderung eines Netzwerkadapters gefiltert.

## v4.38.0 — 2026-04-17

### [Identität & Zugriff (IAM)](/console/iam)
- Sechs neue Berechtigungen sind verfügbar: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` und `public_cloud_vm_instances_console_access`
- Der Name des betreffenden Produkts wird nun am Anfang der Beschreibung jeder Berechtigung angezeigt.

### [Kostenmanager](/console/billing/concepts)
- Die Oberfläche des Kostenmanagers wurde verbessert
- Die in den Verbrauchsdiagrammen angezeigte Einheit wurde aktualisiert

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Beim Bereitstellen einer virtuellen Maschine wurde der Schritt zur Auswahl eines Marketplace-Images überarbeitet.

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Sie können die Anzeige der Katalogseite nun zwischen Kachel- und Tabellenansicht umschalten
- Der Schritt zur Auswahl eines Marketplace-Images beim Bereitstellen einer virtuellen Maschine wurde aktualisiert

### [VM Instances](/public_cloud/vm_instances)
- Das Dashboard zeigt nun die Nutzung der VM-Instanz-Quoten an
- Eine neue Seite zeigt die Liste der VM-Instanzen an
- Sie können nun eine neue Instanz erstellen
- Sie können nun die Datenträger, Netzwerkadapter und Snapshots einer Instanz einsehen und verwalten
- Sie können nun die Ressourcen einer Instanz aktualisieren und ihren Status ändern
- Sie können nun auf die Konsole einer Instanz zugreifen

### [LLMaaS](/llmaas)
- Die Preisanzeige in der Verbrauchsansicht und das Formular zur Guthabenaufladung wurden aktualisiert

## 2026-04-15 — Verwaltete Datenbanken (Preview)

### [MariaDB Managé](/managed_mariadb)
- Start der Preview für MariaDB Managé: StandAlone- und Distributed-Modelle als Cluster mit drei Knoten hinter einem Proxy, replizierter Speicher über drei Verfügbarkeitszonen und eine Verfügbarkeitsgarantie von 99,9 %

### [Managed PostgreSQL](/managed_postgresql)
- Preview-Start von Managed PostgreSQL: StandAlone- und Distributed-Modelle als Drei-Knoten-Cluster hinter einem Proxy, synchrone Multi-Zonen-Replikation ohne Datenverlust und Point-in-Time-Wiederherstellung

## v4.37.0 — 2026-04-02

### [Kostenverwaltung](/console/billing/concepts)
- Hinzufügung des prognostizierten Betrags auf der Verbrauchsseite für das Diagramm und den Trend
- Visuelle Verbesserung bei Fehlern oder zu wenigen Daten zum Verbrauch des aktuellen Monats

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung des Formulars zum Bereitstellen einer virtuellen Maschine aus einem Katalogeintrag
- Hinzufügung der Möglichkeit, den Ansichtstyp (Raster oder Tabelle) auf der Katalogseite zu ändern

## v4.36.0 — 2026-03-27

### [Console](/console)
- Aktualisierung der Metriken- und Verbrauchsdiagramme

### [Gestionnaire des coûts](/console/billing/concepts)
- Hinzufügen der Seite „Kostenmanager“
- Möglichkeit zur Anzeige der Kosten des aktuellen Monats
- Möglichkeit zur Anzeige der Kosten über einen Datumsbereich hinweg und zum Vergleich von Trends

### [Commandes](/console/orders)
- Verhinderung der Deprovisionierung eines Hypervisor-Clusters, wenn ein Speichercluster angehängt ist

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Hinzufügen von Filter- und Sortieroptionen für die Festplattenliste über die Details eines Block Storages

### [VPC](/network/vpc)
- Verbesserung der Benutzeroberfläche beim Laden von Daten in Formularen

## v4.35.4 — 2026-03-18

### [Console](/console)
- Verbesserung der Wiederverbindung zu WebSockets

### [Support](/console)
- Hinzufügen einer Fallback-Lösung zur Erstellung eines Support-Tickets, wenn die WebSocket-Verbindung unterbrochen ist

## v4.35.3 — 2026-03-17

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Aktualisierung der Festplattenwiederherstellung beim Laden von Replikaten aus dem Replikations-Tab

## v4.35.0 — 2026-03-11

### [Commandes](/console/orders)
- Hinzufügen der Bestellung zur Löschung eines cpool/spool-Mappings
- Hinzufügen der Bestellung zum De-Provisioning des privaten VPC-Netzwerks
- Anpassungen an der Bestellung zum De-Provisioning eines Bare-Metal-Volumes: Die Löschung kann nun direkt aus der Volumenliste angefordert werden
- Hinzufügen der Bestellung zur Löschung des Bare-Metal-Volumen-Mappings
- Hinzufügen der Bestellung zum De-Provisioning von VPC
- Blockierung des De-Provisionings eines Datastores, sofern er der letzte in einem Datastore-Cluster ist

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, ein RAM-Limit für eine virtuelle Maschine festzulegen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Aktualisierung von VMware Multi vMotion, um das Verschieben von VMs von einem Cluster zu einem anderen zu ermöglichen

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Hinzufügen der Möglichkeit, einen Host zu aktualisieren
- Anzeige der Update-Informationen eines Hosts

### [Netzwerk](/network/network_overview)
- Deaktivierung des Löschbuttons für die Netzwerkpropagation, wenn keine Propagation bereitgestellt wird

### [LLMaaS](/llmaas)
- Anzeige des Verbrauchs, gruppiert nach Token-Typ

## v4.34.0 — 2026-02-18

### [Console](/console)
- Hauptupdate der Rendering-Engine der Anwendung
- Die VMware- und OpenIaaS-Menüs werden nicht angezeigt, wenn nur das Metrikenmodul aktiviert ist.

### [Metriken](/console/metrics/concepts)
- Möglichkeit, von den Metriken-Seiten für VMware und OpenIaaS in CSV zu exportieren

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei der Verschiebung einer virtuellen Maschine ist es nicht möglich, denselben Zielhost wie den aktuellen Host der virtuellen Maschine auszuwählen.
- Hinzufügen der Schaltfläche 'Neuer Katalog' auf der Seite VMware-Katalog

## 2026-02-04 — MCP-Server der Konsole

- Abfrage der virtuellen Maschinen-Modelle, der Netzwerke, der Hosts und der Open-Source-IaaS-Speicherdepots

## 2026-02-03 — MCP-Server der Konsole

- Bereitstellung des MCP-Servers (Model Context Protocol) der Konsole, authentifiziert mit einem persönlichen Zugriffstoken
- Abfrage und Steuerung von VMware-VMs über einen Agenten: Liste, Details, virtuelle Rechenzentren, Starten und Stoppen

## v4.33.0 — 2026-01-21

### [Commandes](/console/orders)
- Hinzufügen des Befehls zum Löschen einer Netzwerkpropagation auf OpenIaaS

### [Métriques](/console/metrics/concepts)
- Hinzufügen von Filtern für die Metriken-Seiten von VMWare und OpenIaaS

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Metriken-Seite 'Virtuelle Maschinen'
- Hinzufügen der Metrik-Detailsseite für jede VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Aktualisierung des Modals zum Schließen eines Support-Tickets

### [IaaS VMware — Sicherung](/iaas_vmware)
- Bei der Zuweisung einer Sicherungsrichtlinie an einen Datenträger wird nun vorgeschlagen, diesen zu inventarisieren, falls er von der Sicherungslösung nicht erkannt wird.

### [Bare Metal](/iaas_bare-metal)
- Die Löschung eines BFS-Volumes auf einem Bare Metal ist nun blockiert; das Volume wird bei der Löschung des Bare Metals entfernt.
- Bei der Bestellung eines Bare Metals wird das erste Volume nun in 'BFS-Volume' umbenannt.

## v4.31.0 — 2026-01-07

### [IaaS VMware — Sicherung](/iaas_vmware)
- Aktualisierung der Tooltip-Erklärungen zu den verfügbaren Optionen bei der Wiederherstellung einer virtuellen Maschine

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Die Snapshots im Zusammenhang mit Sicherungsrichtlinien sind nun sichtbar
- Anzeige des Hosts, der mit dem Speicherort einer ISO verknüpft ist, beim Upload und auf der Katalogseite

### [Object Storage](/storage/oss)
- Anzeige einer Informationskarte im Tab für unvollständige MPUs, wenn die IP-Adresse der Konsole nicht autorisiert ist und dadurch die Anzeige des Tabs verhindert wird.

### [Marketplace](/marketplace)
- Anzeige der Fehlerkarte beim Zugriff auf eine nicht vorhandene Marketplace-Seite

## v4.30.1 — 2025-12-16

### [Konsole](/console)
- Verbesserung der Anzeige bei leeren Fehlermeldungen durch standardmäßige Anzeige des zurückgegebenen HTTP-Status

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Möglichkeit, eine statische IP-Adresse einer benutzerdefinierten MAC-Adresse zuzuordnen

### [LLMaaS](/llmaas)
- Bei den Verbrauchsmetriken: Filterung der Serien mit Nullwerten

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Verbesserung der Synchronisierung von Aktionen auf den VPC-Seiten
- Hinzufügen der Zuordnung einer statischen IP zu einer öffentlichen IP aus der Liste der statischen IPs

### [Speicher](/storage/oss)
- Hinzufügen unvollständiger MPU von der Bucket-Seite aus
- Möglichkeit, einen unvollständigen MPU zu löschen

## v4.28.0 — 2025-11-21

### [Console](/console)
- Hinzufügen der Möglichkeit, globale Informationsmeldungen anzuzeigen, die in der gesamten Anwendung sichtbar sind

### [Bestellungen](/console/orders)
- Möglichkeit, eine LLMaaS-Kreditaufladung für den Tenant zu bestellen
- Möglichkeit, einen VPC zu bestellen
- Möglichkeit, ein privates Netzwerk in einem VPC zu bestellen
- Möglichkeit, eine öffentliche IP-Adresse für das VPC-Produkt zu bestellen
- Möglichkeit, das Gateway für einen VPC zu aktivieren
- Hinzufügung der Möglichkeit, die Löschung eines Tenants zu bestellen

### [Metriken](/console/metrics/concepts)
- Verbesserung der Tooltip-Anzeige auf Metriken-Diagrammen: Sie können nun auf einen Punkt klicken, um den Tooltip einzufrieren und alle Daten einzuzeigen

### [Netzwerk](/network/network_overview)
- Zusammenführung der Seiten Netzwerke und Internet unter einem einzigen Produkt: Privates Backbone
- Hinzufügen der Verwaltung von PTR-Einträgen bei der Änderung einer öffentlichen IP-Adresse
- Blockierung der Freigabe für bestimmte Netzwerktypen

### [VPC](/network/vpc)
- Integration des VPC-Produkts
- Hinzufügen einer Seite zur Auflistung der VPCs
- Hinzufügen einer Detailseite für eine VPC
- Möglichkeit zur Verwaltung privater Netzwerke, öffentlicher IPs und des Gateways einer VPC
- Möglichkeit, eine statische IP eines VPC-Privatnetzes einem VMware- oder OpenIaaS-Netzwerkadapter zuzuordnen
- Möglichkeit, eine statische IP mit einer öffentlichen IP einer VPC zu verknüpfen

### [LLMaaS](/llmaas)
- Hinzufügen eines Abrechnungstabs auf der LLMaaS-Seite für Tenants mit aktiviertem Prepaid-Modus
- Anzeige des verbleibenden Guthabens für Tenants im Prepaid-Modus auf dem Dashboard und im Abrechnungstab

## v4.27.0 — 2025-11-12

### [Bestellungen](/console/orders)
- Hinzufügen einer Prüfung des verfügbaren Bestands bei der Bestellung von Ressourcen
- Hinzufügen eines Filters nach Bestelltyp und Produkt in der Bestellungsliste

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung der Konsole für virtuelle Maschinen. Optimierte Tastatursteuerung und Hinzufügen einer Zwischenablage.

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Hinzufügen einer Warnung im Dashboard für SPP-Sicherungs-VSnaps mit zu hoher Auslastung

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Verbesserung der Konsole für virtuelle Maschinen. Verbesserte Tastatursteuerung und Hinzufügen einer Zwischenablage.

### [Marketplace](/marketplace)
- Hinzufügen der Möglichkeit, die technischen Details eines Images anzuzeigen

## v4.26.5 — 2025-11-04

### [Console](/console)
- Verbesserung der Größe der Dashboard-Diagramme beim Ändern der Fenstergröße

## v4.26.3 — 2025-10-31

### [Metriken](/console/metrics/concepts)
- Änderung des Namens der in den Diagrammen angezeigten Metrikexporte

## v4.26.0 — 2025-10-22

### [Console](/console)
- Hinzufügen eines Buttons zum Kopieren der UUID des aktuellen Bereichs aus dem Benutzerprofil
- Vollständige Neugestaltung des Dashboards
- Hinzufügen einer automatischen Wiederverbindung zum Activity-Tracking bei Verbindungsunterbrechung

### [Bestellungen](/console/orders)
- Aktualisierung der Bestellformulare, um sie auf den verschiedenen betroffenen Seiten hinzuzufügen (exemple nouveau Datastore depuis la page Stockage)

### [Support](/console)
- Hinzufügen der E-Mail-Adresse der Person, die das Ticket geschlossen hat, zur Bewertung des Support-Tickets

### [Métriques](/console/metrics/concepts)
- Überarbeitung der Erfassung der VMware-Metriken, die URL der Seite lautet nun /iaas/metrics
- Hinzufügen eines Tabs für VMware-Infrastrukturmetriken im Bereich Compute
- Hinzufügen eines Tabs für VMware-Infrastrukturmetriken im Bereich Storage
- Hinzufügen einer Metriken-Seite für OpenIaaS
- Hinzufügen eines Tabs für OpenIaaS-Infrastrukturmetriken im Bereich Compute
- Hinzufügen eines Tabs für OpenIaaS-Infrastrukturmetriken im Bereich Storage

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der neuen extra_config-Schlüssel (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blockierung der Auswahl eines Hostclusters ohne aktiven Host
- Bei der Erstellung einer virtuellen VMware-Maschine erfolgt die Auswahl des Vcenters nun basierend auf der ausgewählten Verfügbarkeitszone
- Hinzufügen von Beschränkungen für Namen und Beschreibungen beim Hochladen einer Datei auf VMware

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Hinzufügen eines OpenIaaS-Datenträgers werden Speicher, die nicht zum Pool der virtuellen Maschine gehören, nun ausgefiltert
- Beim Erstellen eines Snapshots ist die Option zum Mitspeichern des Arbeitsspeichers standardmäßig nun deaktiviert

### [IaaS OpenSource — Sicherung](/iaas_opensource)
- Hinzufügen der Möglichkeit, eine Sicherung über den Tab „Sicherungen“ einer OpenIaaS-VM zu starten

### [Netzwerk](/network/network_overview)
- Entfernung der Einschränkung, die die Auswahl mehrerer Netzwerktypen auf der Seite für virtuelle Netzwerke verhinderte

### [Object Storage](/storage/oss)
- Optimierung des Abrufs von Dateien aus einem Bucket

### [PaaS OpenShift](/paas_openshift)
- Hinzufügen einer Seite zur Auflistung der OpenShift-Cluster
- Hinzufügen einer Detailseite für einen OpenShift-Cluster

### [Marketplace](/marketplace)
- Hinzufügen eines Filters nach UUID und Möglichkeit, die UUID eines Elements zu kopieren

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Aktualisierung der Verwendung der erweiterten Konfiguration und der OVF-Eigenschaften bei der Bereitstellung einer VMware-Virtual Machine

## v4.24.0 — 2025-09-24

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Möglichkeit, ein virtuelles Maschinenimage aus der Liste der virtuellen Maschinen bereitzustellen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, ein Image einer virtuellen Maschine aus der Liste der virtuellen Maschinen bereitzustellen

### [Réseau](/network/network_overview)
- Hinzufügen einer Validierung, um das Löschen der Netzwerkfreigabe zu verhindern, wenn das Netzwerk in einem anderen Tenant propagiert ist

### [Marketplace](/marketplace)
- Hinzufügen des Marketplace-Produkts
- Hinzufügen einer Seite, die die im Katalog verfügbaren Lösungen auflistet
- Hinzufügen einer Seite zum Anzeigen der Details einer Lösung
- Möglichkeit, ein Image einer virtuellen Maschine in einer OpenIaaS- oder VMware-Umgebung von den Lösungsdetails aus zu bereitstellen
- Möglichkeit, einen Partner für eine Managed-Services-Lösung zu kontaktieren

## v4.23.0 — 2025-09-12

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Unterstützung für 4 neue extra-config-Werte hinzugefügt

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- HA-Alarm für betroffene VMs nicht anzeigen, wenn das lokale ISO nicht gemountet ist
- Bei der Hinzufügung oder Größenänderung einer Festplatte angeben, ob das zugehörige SR für eine Replikationskonfiguration verwendet wird

### [IaaS OpenSource — Sicherung](/iaas_opensource)
- Hinzufügen des AZ-Namens zum Sicherungsbericht

### [Objektspeicher](/storage/oss)
- Aktualisierung der Informationen zum Lebenszyklus eines Buckets

### [LLMaaS](/llmaas)
- Hinzufügen des Produkts LLMaaS
- Hinzufügen der Liste der verfügbaren Modelle
- Hinzufügen der Liste der API-Schlüssel mit der Möglichkeit, neue zu erstellen
- Hinzufügen des Verbrauchs nach Modellen und Schlüsseln
- Hinzufügen der Details eines Modells
- Möglichkeit, ein Modell zu testen

## v4.22.1 — 2025-09-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Änderung der Warnungen zur gewählten Datenträgerformatkonfiguration während eines VMotion mit Storage-Migration

## v4.22.0 — 2025-09-02

### [Commandes](/console/orders)
- Hinzufügen des Befehls zur Löschung der Netzwerkpropagation von der Seite mit allen Befehlen, alle verfügbaren Befehle sind nun von dieser Seite aus zugänglich.

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Aktualisierung der Bedingungen für die Änderung des Datenträgerformats beim Verschieben einer virtuellen Maschine und Hinzufügen von Informationen zum aktuellen Datenträgerformat bei einer diskbasierten Konfiguration

## v4.21.0 — 2025-08-22

### [Console](/console)
- Aktualisierung der Anzeige, wenn keine Daten erstellt/provisioniert werden oder beim Abrufen von Informationen ein Fehler auftritt.

### [Support](/console)
- Öffnen der Support-Modals mit dem zugehörigen vorauselektierten Service
- Hinzufügen eines Badges im Menü und in der Navbar, wenn ein Support-Ticket eine Antwort erfordert

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügen der Möglichkeit, die Liste der VMware-Replikate als CSV zu exportieren
- Verbesserung des Schiebereglers zur RAM-Auswahl bei bestimmten Bestellungen
- Hinzufügen der Verwaltung der Optionen Static differed and immediate für vMotion

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Blockierung der Löschung eines nicht leeren Clusters oder eines Clusters mit Hosts/Datastores, die sich nicht im Wartungsmodus befinden

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Möglichkeit, die Liste der OpenIaaS-Replikate und der zugehörigen Richtlinien als CSV zu exportieren
- Hinzufügen von Details zu den von virtuellen Maschinen verwendeten Tools (pvDrivers, managementAgent et tools)
- Hinzufügen von Überprüfungen für die hohe Verfügbarkeit (HA)

### [Netzwerk](/network/network_overview)
- Änderung der Auswahl einer IPv4-Adresse mit einer verfügbaren Liste

## v4.20.0 — 2025-07-29

### [Commandes](/console/orders)
- Hinzufügen von Informationen zu limitierten Kapazitäten und Ausverkauftem für Rechenressourcen bei der Bestellung einer neuen Verfügbarkeitszone

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer VMware Tools-Option zur Synchronisierung der Uhrzeit mit dem Host
- Aktualisierung der Bedingungen für die Verschlüsselung einer virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Entfernung der Informationen zur letzten Ausführung der Replikationsrichtlinien, die zu Verlangsamungen führten
- Verwaltung des TX-Checksumming für Netzwerkkarten
- Hinzufügen einer Warnung zur OpenIaaS-Replikation, wenn die Anzahl der AZ unter 2 liegt
- Hinzufügen der hohen Verfügbarkeit (HA) für Pools und virtuelle Maschinen

## v4.19.0 — 2025-07-24

### [Bestellungen](/console/orders)
- Aktualisierung der Bestellung öffentlicher IPs mit der Möglichkeit, ein IPv6-Präfix zu bestellen
- Aktualisierung der Anzeige der verfügbaren Bestellungen, wenn keine Umgebung bereitgestellt ist

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen eines Replikationsfilters zur Liste der virtuellen Maschinen
- Aktualisierung des Dialogs zur Erstellung einer virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen eines Replikationsfilters zur Liste der virtuellen Maschinen

### [Réseau](/network/network_overview)
- Aktualisierung der Internet-Seite mit der Hinzufügung der IPv6-Verwaltung

## v4.18.0 — 2025-07-15

### [Console](/console)
- Aktualisierung der Anzeige, wenn keine Daten erstellt/provisioniert werden oder beim Abrufen von Informationen ein Fehler auftritt.

### [Commandes](/console/orders)
- Aktualisierung der Internet-Schritte bei der Bestellung einer neuen Verfügbarkeitszone oder eines neuen Pools

### [Support](/console)
- Hinzufügen eines Sicherheitsservices für jedes Produkt bei der Erstellung eines Supporttickets

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen eines Links von einem auf einem Controller montierten ISO zum entsprechenden Element im Katalog

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer OpenIaaS-Replikationsseite mit der Liste der Replikate und Replikationsrichtlinien
- Möglichkeit, eine Replikationskonfiguration für eine virtuelle Maschine OpenIaaS hinzuzufügen und zu entfernen
- Möglichkeit, eine Replikationsrichtlinie zu erstellen und zu löschen
- Möglichkeit, ein Replikat wiederherzustellen
- Möglichkeit, virtuelle Maschinen im CSV-Format zu exportieren.

## v4.17.0 — 2025-06-20

### [Commandes](/console/orders)
- Möglichkeit, einen OpenIaaS-Pool zu bestellen
- Möglichkeit, die Zuordnung eines vorhandenen Volumes zu einem vorhandenen Bare-Metal-Server von der Bare-Metal-Seite, von der Volume-Seite und von der Bestellseite aus zu bestellen

### [Support](/console)
- Möglichkeit, eine Datei in einem Support-Ticket zu löschen
- Die Beschreibung zur Zufriedenheit bei der Schließung eines Tickets ist jetzt optional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Hinzufügen der englischen Übersetzungen auf der Verbrauchsberichtsseite des Bestellmenüs

### [Bestellungen](/console/orders)
- Möglichkeit zur Bestellung der Größenerweiterung eines Bare-Metal-Volumes
- Möglichkeit zur Bestellung der Größenerweiterung eines Block Storage OpenIaaS

### [Support](/console)
- Neugestaltung der Support-Ticket-Erstellung
- Markdown-Rendering in Support-Tickets und Aktualisierung der Anzeigereihenfolge der Kommentare
- Hinzufügen eines Feedbacks bei der Schließung eines Support-Tickets
- Aktualisierung der Symbolanzeige entsprechend der Auswirkung eines globalen Vorfalls

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer Option zur Beibehaltung der Konfiguration einer virtuellen Maschine bei einer Wiederherstellung in der Produktion auf dem ursprünglichen Cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügen einer Warnmeldung bei knappem Speicherplatz auf einem Block Storage (90 % belegt) und Warnhinweis bei der Ausführung von Befehlen

### [Objektspeicher](/storage/oss)
- Hinzufügen der Beschreibung der S3-Rollen bei der Zuweisung zu einem Bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Anzeige eines Fehlers, wenn ein Netzwerk auf einem Netzwerkadapter einer virtuellen Maschine falsch konfiguriert ist, was ebenfalls den Start der virtuellen Maschine verhindert

## v4.15.0 — 2025-05-13

### [Konsole](/console)
- Anpassung der angezeigten Einheiten für Infrastrukturressourcen: GiB (Gibibyte) anstelle von GB (Gigabyte)

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, einen OpenIaaS-Datenträger zu verschieben
- Möglichkeit, einen OpenIaaS-Datenträger zu verbinden und zu trennen
- Anzeige des Verbindungsstatus (verbunden/getrennt) eines Datenträgers
- Möglichkeit, die UUID eines Datenträgers, virtuellen Netzwerks oder Snapshots zu kopieren
- Möglichkeit, den Namen einer virtuellen Maschine bei der Bereitstellung einer XVA-Datei festzulegen
- Hinzufügung der Möglichkeit, beim Starten einer virtuellen Maschine eine Sicherungsrichtlinie zuzuweisen, falls keine vorhanden ist.

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen von Aktionen, die auf einer Festplatte über einen Block Storage verfügbar sind

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen von MAC-Adressen zur Schnittstellentabelle eines Bare Metal
- Hinzufügen einer Seite mit den Details eines Bare Metal-Volumes

## v4.14.0 — 2025-04-28

### [Console](/console)
- Möglichkeit, Seiten im Menü anzupinnen
- Aktualisierung der Darstellung der API-Dokumentationen

### [Bestellungen](/console/orders)
- Möglichkeit, die Löschung eines OpenIaaS Block Storages zu bestellen
- Möglichkeit, die Hinzufügung eines Block Storages zu einem OpenIaaS-Pool zu bestellen
- Möglichkeit, die Löschung eines OpenIaaS Hosts zu bestellen
- Hinzufügen der Informationen zum betroffenen Produkt zur Bestellungsliste
- Möglichkeit, die Hinzufügung eines Hosts zu einem OpenIaaS-Pool zu bestellen

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Möglichkeit, einen Host in den Wartungsmodus zu versetzen
- Möglichkeit, die Beschreibung eines Modells zu bearbeiten
- Möglichkeit, einen Host beim Start einer virtuellen Maschine auszuwählen
- Hinzufügen einer Eindeutigkeitsregel für die Namen der OpenIaaS-Virtual Machines

## v4.13.0 — 2025-04-08

### [Konsole](/console)
- Hinzufügen von Statistiken und Kontaktdaten auf der Support-Seite

### [Commandes](/console/orders)
- Überarbeitung der Anzeige der Bestelldetails
- Überarbeitung der Anzeige der Bestelloptionen
- Aktualisierung der Anzeige zur Bestellung des ersten Bare-Metal-Servers, wenn keiner vorhanden ist
- Aktualisierung der Bestellung eines Bare-Metal-Servers mit der Auswahl der Netzwerkzuweisung auf den Bare-Metal-Schnittstellen
- Möglichkeit, ein VLAN auf einem Bare-Metal-Server zu propagieren
- Möglichkeit, einem Bare-Metal-Server ein Volume hinzuzufügen
- Möglichkeit, ein Volume von einem Bare-Metal-Server zu deprovisionieren
- Möglichkeit, einen Bare-Metal-Server zu deprovisionieren

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer Schaltfläche zum Kopieren der UUID für VMware-Netzwerke und -Kataloge

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer UUID-Kopier-Schaltfläche für OpenIaaS-Netzwerke und -Kataloge
- Hinzufügen einer UUID-Kopier-Schaltfläche für Bare-Metal-Server

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen der Anzeige der Netzwerkschnittstellen und der darauf propagierten Netzwerke auf einem Bare-Metal-Server
- Hinzufügen der Aktionen zum Einschalten, Neustarten und Ausschalten eines Bare-Metal-Servers

### [Netzwerk](/network/network_overview)
- Möglichkeit, die Propagierungen auf einem Bare Metal eines Netzwerks zu visualisieren

## v4.12.0 — 2025-03-25

### [Console](/console)
- Möglichkeit, eine IP-Whitelist von der Zugriffsseite zu löschen

### Labels
- Hinzufügen von Tags zu virtuellen OpenIaaS-Maschinen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Aktualisierung des Abrufs der API-Empfehlungen für die Affinitäts-/Anti-Affinitätsregeln eines HostClusters

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Importierung eines XVA OpenIaaS in der Downloadliste anzeigen
- Möglichkeit, eine vorhandene Festplatte an eine virtuelle Maschine anzuhängen
- Möglichkeit, eine vorhandene Festplatte von einer virtuellen Maschine abzutrennen

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Aktualisierung der Anzeige der Datenträger eines Block Storage OpenIaaS

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Aktualisierung der Fehlermeldung beim Zugriff auf Dateien eines Object Storage-Buckets

## v4.11.1 — 2025-03-12

### [Bestellungen](/console/orders)
- Aktualisierung der Namen der Verfügbarkeitszonen bei einer Bestellung
- Änderung des Datastore-Minimums bei der Bestellung eines datastoreCluster

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Wenn das Feld „label“ für hostCluster und datastoreCluster auf leer gesetzt wird, wird der technische Name standardmäßig angewendet.

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Wenn das Label-Feld der Pools entleert wird, wird der technische Name standardmäßig angewendet
- Hinzufügen einer Informationsblase auf der Katalogseite und beim ISO-Import, um anzuzeigen, dass XVA bei der Erstellung einer virtuellen Maschine unterstützt wird

## v4.11.0 — 2025-03-10

### [Bestellungen](/console/orders)
- Aktualisierung der zulässigen Netzwerktypen bei der Erstellung einer AZ
- Aktualisierung der mindestens zu provisionierenden Ressourcen bei der Bestellung einer neuen Verfügbarkeitszone

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Anzeige des Namens der virtuellen Maschine im Konsolen-Tab für VMware

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Hinzufügung der Labelverwaltung für VMware Datastore-Cluster und Host-Cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ermöglicht die Bereitstellung einer virtuellen Maschine über XVA-Import für OpenIaaS
- Hinzufügen der Labelverwaltung für OpenIaaS-Pools
- Anzeige des Namens der virtuellen Maschine im Konsolen-Tab für OpenIaaS

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Aktualisierung der CPU-Informationen der Hosts und OpenIaaS-Pools

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen von IOPS/TO für Bare-Metal-Volumes

## v4.10.0 — 2025-03-04

### [Console](/console)
- Aktualisierung der Links zur neuen öffentlichen Dokumentation

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Warnung, um Benutzer bei doppelten MAC-Adressen in der Liste der virtuellen Maschinen sowie beim Erstellen oder Bearbeiten von Netzwerkadaptern zu informieren
- Hinzufügen einer Option zum Erzwingen des Herunterfahrens oder Neustarts einer virtuellen Maschine
- Der Arbeitsspeicher wird bei einem Snapshot standardmäßig nicht mehr aufgenommen, wenn die virtuelle Maschine nicht eingeschaltet ist
- Möglichkeit zum Umbenennen und Ändern der Größe einer Festplatte
- Hinzufügen der Möglichkeit, ISO-Images und Vorlagen über die Katalogseite zu löschen
- Hinzufügen der Möglichkeit, die 'Cloud Init'-Konfigurationsfestplatte bei der Bereitstellung einer virtuellen Maschine zu löschen

## v4.9.1 — 2025-02-27

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, einen Netzwerkadapter auf einer eingeschalteten virtuellen Maschine zu bearbeiten

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen von Einschränkungen für die zulässigen Zeichen in den Namen der OpenIaaS-Virtuellen Maschinen

## v4.9.0 — 2025-02-21

### [Konsole](/console)
- Namen in Tabellen klickbar machen, wenn eine verknüpfte Seite vorhanden ist
- Die Öffnung der Konsolen verbessern, um das Öffnen mehrerer Tabs zu vermeiden, wenn mehrere Fenster auf derselben Seite geöffnet sind
- Eine Fehlermeldung anzeigen, wenn eine Konsole geöffnet wird und der Browser keine Weiterleitungen zur Anwendung zulässt

### [Métriques](/console/metrics/concepts)
- RAM-Einheit auf der Statusseite der virtuellen Maschinen anzeigen

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Blockieren der Erstellung einer virtuellen Maschine, wenn auf den ausgewählten Block Storages nicht genügend Speicherplatz verfügbar ist
- Löschen der Standard-MAC-Adressen bei der Erstellung einer virtuellen OpenIaaS-Maschine

### [Speicher](/storage/oss)
- S3-Endpunkt in die Zwischenablage kopieren können

## v4.8.0 — 2025-02-14

### [Bestellungen](/console/orders)
- Hinzufügen der Bestellung zur Verteilung eines Netzwerks auf OpenIaaS-Pools
- Hinzufügen der Netzwerkverteilungsbestellungen auf der Seite aller Bestellungen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Anzeige der Anzahl der zugewiesenen und verfügbaren Festplatten pro Controller auf einer virtuellen Maschine
- Aktualisierung der Bedingungen für die Anzahl der auf Para-Virtualisierten SCSI-Controllern hinzuzufügenden Festplatten in Abhängigkeit von der Hardware-Version der virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, Cloud-Init-Optionen bei der Erstellung einer OpenIaaS-Virtuellen Maschine hinzuzufügen
- Anzeige der Datenträger auf der Seite eines Block Storage
- Möglichkeit, die Boot-Firmware-Konfiguration einer OpenIaaS-Virtuellen Maschine zu aktualisieren
- Möglichkeit, eine OpenIaaS-Virtuelle Maschine zu klonen

### [Netzwerk](/network/network_overview)
- Aktualisierung der Visualisierung der Netzwerkpropagationen und Hinzufügen von OpenIaaS-Propagationen
- Aktualisierung der Netzwerkerstellung und Möglichkeit, das Netzwerk bereits bei der Erstellung auf der OpenIaaS-Infrastruktur zu propagieren

## v4.7.0 — 2025-02-03

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Der OVF-Export ist blockiert, wenn die virtuelle Maschine verschlüsselt ist

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Anzeigen der Beziehungen zwischen Datastore-Clustern und Host-Clustern auf den Seiten Compute und Storage

### [IaaS VMware — Sicherung](/iaas_vmware)
- Änderung der Boot-Option nach der Wiederherstellung für eine SecNumCloud-Umgebung bei der Wiederherstellung im Clone- oder Produktionsmodus auf einem alternativen Host oder Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Schaltflächen zum Einbinden und Aushängen eines OpenIaaS-ISOs in der Aktionsleiste einer virtuellen Maschine hinzufügen

### [Netzwerk](/network/network_overview)
- Verbesserung der Anzeige von Netzwerkpropagationen bei ausstehenden Löschanträgen für Propagationen.

## v4.6.0 — 2025-01-30

### [Console](/console)
- Entfernen der bei der Autovervollständigung angezeigten Zeichen beim Hinzufügen von Beobachtern bei der Erstellung eines Support-Tickets
- Aktualisierung der Anzeige des Menüs und der verfügbaren Seiten für die VMware- und OpenIaaS-Angebote in einer neuen Umgebung ohne bereitgestellte Verfügbarkeitszonen

### [Konsole — Benachrichtigungen](/console)
- Aktualisierung der Anzeige der Benachrichtigungsabonnements auf der Profilseite

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit zur Verschlüsselung einer virtuellen Maschine hinzufügen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des Exports einer virtuellen Maschine als Modell

## v4.5.0 — 2025-01-17

### [Console](/console)
- Hinzufügen der Beschreibung bei der Erstellung und Anzeige von Whitelists
- Möglichkeit zur Änderung der Beschreibung einer Whitelist

### [Bestellungen](/console/orders)
- Hinzufügen einer Bestellung für eine neue OpenIaaS-Verfügbarkeitszone
- Hinzufügen einer Bestellung für Bare Metal
- Hypervisor-Cluster mit einem Storage-Cluster verknüpfen

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Verbleibende Größe in Klammern in den Speicherauswahlbäumen anzeigen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Hinzufügen des Worst-Case-Szenarios für die Speicherzuweisung auf einem VMware hostCluster

### [Open-Source-IaaS — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des ISO-Uploads zu den OpenIaaS-Katalogen
- Hinzufügen der Verschiebung von OpenIaaS-Virtuellen Maschinen
- Möglichkeit, Festplatten und Netzwerke bei der Erstellung einer OpenIaaS-Virtuellen Maschine auszuwählen

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen einer Seite zur Auflistung von Bare Metal
- Hinzufügen einer Seite zur Auflistung von Bare Metal-Volumes
- Hinzufügen einer Seite mit den Details eines Bare Metal
- Hinzufügen der Möglichkeit, eine Bare Metal-Konsole zu öffnen

## v4.4.0 — 2025-01-13

### [Console](/console)
- Technische Änderungen während des Authentifizierungsprozesses

## v4.3.0 — 2024-12-19

### [Konsole — Aktivitäten](/console)
- Hinzufügen von Links "Zur Ressource wechseln" für Aktivitäten, die mit XOA und Object-Storage verknüpft sind

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Tags und der IP-Adresse der virtuellen Maschine zum CSV-Export der virtuellen Maschinen

### [IaaS VMware — Sicherung](/iaas_vmware)
- Option hinzufügen, im CSV-Export der Sicherungsberichte im Unter-Tab Virtuelle Maschinen nur die gefilterten Elemente zu exportieren

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Hinzufügen von XOA-VM-Templates über die Katalogseite

### [Objektspeicher](/storage/oss)
- Globale Zugriffsschlüssel aus den Speicherkonten erstellen und zurücksetzen

## v4.2.0 — 2024-12-10

### [Console](/console)
- Weiterleitungen zur Statusseite hinzufügen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Elemente, die bereits in 'Mein Katalog' vorhanden sind, werden nun weiterhin im 'Öffentlichen Katalog' angezeigt
- Hinzufügen von Weiterleitungen für die in einem VMware-Katalogeintrag genannten Komponenten
- Aktualisierung der RAM-Anzeige auf einem Hypervisor-Cluster
- Entfernung der Option zur automatischen Replikation neuer Festplatten, die zu Fehlern führte
- Hinzufügen von Validierungen für die Replikation einer virtuellen Maschine
- Hinzufügen neuer extra config PCIPassthru über die erweiterte Konfiguration einer virtuellen Maschine zur GPU-Verwaltung
- Möglichkeit, einen PCI-Controller auf virtuellen Maschinen hinzuzufügen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeige der DRS-Empfehlungen und -Fehler für einen Hypervisor-Cluster
- Neuer Status für Hypervisoren und Datastores bei laufender Wartungsanforderung
- Hinzufügen von Informationen zur GPU eines Hypervisors

### [IaaS VMware — Sicherung](/iaas_vmware)
- Mehrere nicht funktionierende Backup-Optionen auf virtuellen Maschinen im Testmodus entfernen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Backup-Seite für den OpenIaas-Backup-Bereich, die Fehler, Richtlinien und Backup-Berichte auflistet und die Wiederherstellung gelöschter virtueller Maschinen ermöglicht.

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen einer Seite zum Auflisten der OpenIaas-Verfügbarkeitszonen
- Hinzufügen einer Speicherseite für den OpenIaas-Bereich
- Hinzufügen einer Compute-Seite für den OpenIaas-Bereich

### [Housing (Kolocation)](/housing)
- Änderung der auf der Geräte-Seite angezeigten Informationen

## v4.1.1 — 2024-11-18

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Verbesserung der Bearbeitung des Arbeitsspeichers, die Umrechnung erfolgt auf die nächstgelegene ganzzahlige Einheit
- Bei der Snapshot-Erstellung ist die Schaltfläche zum Speichern des Arbeitsspeichers deaktiviert, wenn die virtuelle Maschine ausgeschaltet ist
- Wenn mehrere virtuelle Maschinen aufgeklappt werden, wird die Liste der Festplatten nicht sofort angezeigt

### [IaaS VMware — Sicherung](/iaas_vmware)
- Hinzufügen der CSV-Export-Schaltfläche im Tab „Virtuelle Maschinen“ auf der Seite der Sicherungsberichte

## v4.1.0 — 2024-11-13

### [Console](/console)
- Möglichkeit, eine Datei beim Feedback zu senden

### [Identität & Zugriff (IAM)](/console/iam)
- Deaktivierung der Möglichkeit, einen Besitzer zu löschen

### [Bestellungen](/console/orders)
- Hinzufügen der Verwaltung zum Hinzufügen, Löschen und Bearbeiten eines Datastores von der Bestellseite aus
- Hinzufügen der Möglichkeit, einen Host zu löschen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen von Snapshot-Aktivitäten im Snapshot-Tab einer VM
- Anzeige der tatsächlichen Größe der virtuellen Maschinen im CSV-Export

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Auf den Seiten Rechenleistung und Speicher gilt der Filter für die Verfügbarkeitszonen ebenfalls für die Cluster-Registerkarten
- Anzeige der Auslastungsprozentsätze auf den Verbrauchsleisten (CPU / RAM / Stockage)

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Validierung zum Vorhandensein von Backup-Richtlinien für die automatische Startoption
- Hinzufügen einer Option zum Erzwingen des Stopps/Neustarts virtueller Maschinen ohne installierte Guest-Tools
- Verbesserung der Ausführungsmeldung einer OpenIaas-Richtlinie auf einer bestimmten virtuellen Maschine

### [Bastion](/bastion)
- Hinzufügung einer Validierung für das Host-Feld eines Geräts

## v4.0.3 — 2024-11-04

### [Console](/console)
- Verbesserungen und Fehlerbehebungen für das neue Design

## v4.0.2 — 2024-10-30

### [Console](/console)
- Verbesserungen und Fehlerbehebungen für das neue Design

## v4.0.1 — 2024-10-25

### [Console](/console)
- Verbesserungen und Fehlerbehebungen für das neue Design

## v4.0.0 — 2024-10-18

### [Console](/console)
- Neues Design der Konsole
- Überarbeitung der Infrastruktur- und Sicherungsseiten

---

:::info[Historique antérieur]

Die vollständige Historie der Versionen vor v4.0 (v1.0 bis v3.38.1, von Februar 2019 bis Oktober 2024) ist im [historique Git](https://github.com/Cloud-Temple/docs) des Projekts verfügbar.

:::