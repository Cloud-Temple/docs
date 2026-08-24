---
title: Produktneuheiten
sidebar_position: 999
---

# Produktneuheiten & Weiterentwicklungen

> Dieses Changelog enthält ausschließlich neue Funktionen und wesentliche Weiterentwicklungen der Cloud Temple Plattform.
> Fehlerbeseitigungen sind bewusst ausgeschlossen.

## v4.47.0 — 2026-07-30

### [Console](/console)
- Die Swagger-Dokumentation des Moduls Befehle ist nun verfügbar.

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Beim Bereitstellen einer virtuellen Maschine werden nunmehr nur noch die bereitstellbaren Katalogelemente (OVF und virtuelle Maschinen-Vorlagen) angeboten

### [VM Instances](/public_cloud/vm_instances)
- Die geschätzten Kosten (stündlich) werden nun bei der Erstellung einer Instanz angezeigt, mit einer Aufschlüsselung nach Position (vCPU, RAM, Festplatten)

### [VPC](/network/vpc)
- Bei der Bestellung eines neuen VPC können Sie nun eine Bereitstellung in einer dedizierten Umgebung (votre infrastructure OpenIaaS) oder in einer Shared-Umgebung (sous réserve d'une souscription au produit VM Instances) wählen.

### [Object Storage](/storage/oss)
- Großbuchstaben werden im Bucket-Namen nun nicht mehr akzeptiert, gemäß den Benennungsregeln.

### [Marketplace](/marketplace)
- Sie können nun eine VM-Instanz (Public Cloud) direkt von der Produktseite des Marketplaces aus bereitstellen.

## 2026-07-27 — Managed Datenbanken (Preview)

### [Managed MariaDB](/managed_mariadb)
- Das Bereitstellungsmodell Distributed wird in MultiAZ umbenannt
- Die Instanzgrößen reichen nun bis zu 6X-Large (32 vCPU und 128 GiB Arbeitsspeicher) und der online erweiterbare Speicher bis zu 512 GiB
- Veröffentlichung von Empfehlungen zur Dimensionierung, die die Einstellung der Engine-Parameter erläutern, mit einem Warnhinweis zur Aktivierung von `performance_schema` unterhalb der Instanzgröße X-Large
- Die Point-in-Time-Wiederherstellung wird nicht mehr angeboten: Die Backups basieren nun auf täglichen physischen Sicherungen und logischen Exports, ohne kontinuierliche Archivierung der Transaktionsprotokolle

### [Managed PostgreSQL](/managed_postgresql)
- Neue Architektur basierend auf dem Kubernetes-Operator CloudNative-PG und dem Backup-Plugin Barman Cloud
- Drei Bereitstellungsmodelle: StandAlone als Einzelinstanz, Replica mit drei asynchron replizierten Instanzen und automatischem Failover, sowie Entreprise mit drei synchron replizierten Instanzen auf mindestens zwei Knoten, wobei die Datenbeständigkeit ohne Blockierung bei Ausfall eines Knotens garantiert ist
- Deklarative Bereitstellung über benutzerdefinierte Kubernetes-Ressourcen, nutzbar über Terraform oder Helm, sowie nativer Metrik-Export nach Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organisation](/console/iam/concepts)
- Sie können nun einen Tenant direkt über die Seite Tenants erstellen, indem Sie die zugehörigen Produkte auswählen

### [Console — Aktivitäten](/console)
- Aktivitätsprotokolle können nun nach Modul gefiltert werden

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkschnittstellen einer mit einem VPC verbundenen virtuellen Maschine angezeigt.
- Ein Tab „Gesundheit“ ist nun im Detail einer virtuellen Maschine verfügbar, der über die Liste aufgerufen werden kann.

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun eine VMware-Replikation zwischen Verfügbarkeitszonen bestellen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Liste der Netzwerkschnittstellen einer an ein VPC angeschlossenen virtuellen Maschine zeigt nun die öffentliche IP-Adresse an
- Ein Tab „Gesundheit“ ist nun in den Details einer virtuellen Maschine verfügbar, die aus der Liste geöffnet wurde

### [VM Instances](/public_cloud/vm_instances)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkadapter einer mit einem VPC verbundenen Instanz angezeigt.
- Ein Tab « Gesundheit » ist nun im Detail einer Instanz verfügbar, der über die Liste aufgerufen werden kann.

### [Housing (Colocation)](/housing)
- Colocation-Bestellungen sind jetzt verfügbar: Platzreservierung, Installation und Rackmontage von Geräten
- Colocation-Bestellungen für technische Eingriffe sind jetzt verfügbar: technische Unterstützung und Smart Hands
- Colocation-Bestellungen für Verkabelung und Entkabelung (CPE) sind jetzt verfügbar
- Colocation-Bestellungen, die nicht über die Konsole unterstützt werden, werden jetzt klar gekennzeichnet, mit einer Aufforderung, den Support zu kontaktieren

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- Die Erstellung einer Instanz basiert nun auf der Auswahl eines Systemimages, das die Vorlagen ersetzt.

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bei der Konfiguration der Kerne pro Socket einer OpenIaaS-Virtuellen Maschine wird die Prozessor-Topologie (Anzahl der Sockets und Kerne pro Socket) nun explizit angezeigt.

### [LLMaaS](/llmaas)
- Der Mindestbetrag für ein LLMaaS-Guthaben wird auf 100 € gesenkt.

## v4.45.3 — 2026-07-21

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Beim Bereitstellen einer virtuellen Maschine wird nun die Meldung „Kein Modell verfügbar“ angezeigt, wenn der Katalog leer ist.

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Bereitstellen einer virtuellen Maschine wird nun die Meldung „Kein Modell verfügbar“ angezeigt, wenn der Katalog leer ist.

## v4.45.2 — 2026-07-17

### [Console](/console)
- Geringfügige technische Verbesserungen

## v4.45.0 — 2026-07-10

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Während einer blockierenden Operation zeigen virtuelle Maschinen nun einen expliziten Status an: Sicherung, Snapshot oder Wiederherstellung im Gange
- Die CPU-Bearbeitung passt sich nun der Option für das Hinzufügen von CPUs im laufenden Betrieb (CPU hot add) und dem Status der virtuellen Maschine an

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Während eines blockierenden Vorgangs zeigen virtuelle Maschinen nun einen klaren Status an (Sicherung, Snapshot oder Wiederherstellung läuft)
- Die Details einer virtuellen Maschine zeigen nun eine Nutzungsübersicht (CPU, RAM, Speicher)

### [VM Instances](/public_cloud/vm_instances)
- Die Instanzen zeigen nun einen expliziten Status (Sicherung, Snapshot oder Wiederherstellung im Gange) während einer blockierenden Operation an
- Die Echtzeit-Nutzungsmetriken (CPU, RAM, Speicher) werden nun für jede Instanz angezeigt
- Die Eindeutigkeit des Namens wird nun sowohl bei der Erstellung als auch bei der Wiederherstellung einer Instanz geprüft

### [Netzwerk](/network/network_overview)
- Bei einer Bestellung mit einem Propagationschritt werden neue Netzwerke erst bei der endgültigen Bestätigung der Bestellung erstellt.

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- Der Netzwerktyp (privates Backbone) wird nun auf den Netzwerkadaptern einer Instanz angezeigt, auch ohne die VPC-Funktion

## v4.44.1 — 2026-07-02

### [Console](/console)
- Geringfügige technische Verbesserungen

## v4.44.0 — 2026-07-02

### [Bestellungen](/console/orders)
- Die Aktionen zur Infrastrukturbereitstellung berücksichtigen nun die fachlichen Rollen (Compute, Netzwerk, VPC, Bare Metal…) zusätzlich zu den Bestellberechtigungen.

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Verfolgung des Uploads von ISO- und OVF-Dateien wurde verbessert und es ist nun möglich, einen laufenden Upload abzubrechen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Überwachung des Uploads von ISO- und XVA-Dateien wurde verbessert und es ist nun möglich, einen laufenden Upload abzubrechen.

### [VM Instances](/public_cloud/vm_instances)
- Datenträgergrößen akzeptieren beim Erstellen einer Instanz sowie beim Hinzufügen oder Erweitern eines Datenträgers keine Dezimalwerte mehr
- Die Verarbeitungsindikatoren für Instanzen und deren Ressourcen werden nach einem Neuladen der Seite nun korrekt wiederhergestellt

### [VPC](/network/vpc)
- Über die Netzwerkkarte einer an ein VPC-Netzwerk angebundenen virtuellen Maschine können Sie nun direkt auf das betreffende VPC zugreifen (VMware, OpenIaaS und VM-Instanzen)
- Bestimmte VPC-Befehle können nun parallel ausgeführt werden: Hinzufügen eines Gateways während der Erstellung eines privaten Netzwerks (und umgekehrt) sowie das gleichzeitige Löschen mehrerer privater Netzwerke

## 2026-06-30 — Metriken-API

### [Metriken](/console/metrics/concepts)
- Ein Zugriffstoken kann nun die Verfügbarkeit des Metriken-Dienstes über den API-Endpunkt `HEAD /v1/configuration` überprüfen

## v4.43.0 — 2026-06-30

### [Console](/console)
- Die Netzwerkauswahl unterscheidet nun visuell zwischen VPC- und privaten Backbone-Netzwerken
- Ein interaktives Tutorial ist nun auf der Seite Benutzer verfügbar

### [Console — Aktivitäten](/console)
- Sie können nun die Details einer Aktivität anzeigen, indem Sie die entsprechende Zeile in den Listen „Kürzlich“ und „Archiviert“ aufklappen
- Jede Aktivität verfügt nun über eine eigene Detailseite, die über einen direkten Link erreichbar ist
- Die Details einer Aktivität sind nun auch über die Erfolgs- und Fehlerbenachrichtigungen zugänglich
- Sie können nun das vollständige JSON einer Aktivität anzeigen, kopieren oder herunterladen
- Die Liste der archivierten Aktivitäten kann nun nach Erstellungsdatum sortiert werden

### [Bestellungen](/console/orders)
- Die Anzeige des Bestellfortschritts wurde überarbeitet

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Details einer virtuellen Maschine werden nun in einer neuen Ansicht angezeigt
- Bei der Änderung im laufenden Betrieb wird die Konsistenz zwischen CPUs und Kernen pro Socket überprüft: Es werden Warnungen angezeigt und ungültige Werte werden nicht akzeptiert

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun die Löschung einer IaaS-Umgebung anfordern.

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Eine neue Detailansicht ist für virtuelle Maschinen verfügbar
- Sie können die Liste der virtuellen Maschinen nun nach Verfügbarkeitszone (AZ) filtern

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Die Seite eines Storage Repositorys zeigt nun das Erstellungsdatum des Snapshots eines Datenträgers an.

### [VM Instances](/public_cloud/vm_instances)
- Die Details einer Instanz werden in einer neuen Ansicht angezeigt.
- Die Schaltfläche „Jetzt Sicherung starten" ist nun deaktiviert, wenn keine Sicherung verfügbar ist.

### [VPC](/network/vpc)
- Die Beschreibung der öffentlichen IP-Adresse wird nun bei der Zuordnung zu einem privaten Netzwerk angezeigt.

### [Object Storage](/storage/oss)
- Sie können nun eine Beschreibung für die erlaubten IP-Adressen (whitelist) eines Buckets hinzufügen

## v4.42.0 — 2026-06-22

### [Console](/console)
- Der Abschnitt „Datenschutz“ wurde aktualisiert

### [Object Storage](/storage/oss)
- Die Verfügbarkeit des TLS-Wildcard-Zertifikats für den S3-Zugriff im host-style wird nun angezeigt
- Sie können nun eine Datei über eine vorab signierte URL auf S3 hochladen
- Sie können nun die Versionierung für einen Bucket aktivieren
- Sie können nun die Versionen einer Datei verwalten

## v4.41.1 — 2026-06-11

### [Bestellungen](/console/orders)
- Das verfügbare Maximum bei der Bestellung eines Block Storage wurde aktualisiert.

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Die Bestandsmeldungen sind nun präziser bei der Bestellung von Hypervisoren oder der RAM-Erweiterung eines Clusters

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Hinzufügen einer vorhandenen Festplatte zu einer virtuellen Maschine wird die UUID der Festplatte nun angezeigt, wenn mehrere Festplatten denselben Namen tragen.

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Eine Warnung wird nun angezeigt, wenn die Aktualisierung des Master-Hosts eines Pools angefordert wird.

### [VPC](/network/vpc)
- Die Bestellung eines VPCs erfordert nun, dass eine OpenIaaS-Verfügbarkeitszone bereitgestellt ist.

## 2026-06-06 — MCP-Server der Console

- Authentifizierungs-Hilferessource, die die Erstellung eines persönlichen Zugriffstokens und das erwartete Header-Format beschreibt; Authentifizierungsfehler geben nun die Ursache und die weiteren Schritte an
- Konfigurationsänderung mit Auswirkung: Die in der Serverkonfiguration angegebene API-URL muss nun das Segment `/api` enthalten. Diese muss vor dem Deployment dieser Version aktualisiert werden, um 404-Fehler zu vermeiden. Die URL wird beim Start überprüft und die Infrastruktur für öffentliche und private Schlüssel wird unterstützt

## 2026-06-05 — MCP-Server der Console

- Abfrage des Namens und der Version des bereitgestellten Servers

## v4.40.0 — 2026-06-02

### [Console](/console)
- Ein interaktiver Onboarding-Pfad ist jetzt verfügbar

### [Console — Organisation](/console/iam/concepts)
- Die Kostenverwaltung ist nun in der Organisationsansicht verfügbar
- Die Organisationsansicht verfügt nun über eine dedizierte Ansicht

### [Bestellungen](/console/orders)
- Der Netzwerkschritt wird in den Bestellungen nicht mehr angezeigt, wenn nur das VPC-Produkt aktiviert ist.

### [Support](/console)
- Die Supportpläne und Support-Kontakte wurden aktualisiert

### [Support-Tickets](/console)
- Die Managed-Service-Funktionen wurden aus den Support-Tickets entfernt

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Funktionen der öffentlichen Inhaltsbibliothek wurden entfernt

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Der Standardwert des CloudInit-Schritts wurde für OpenIaaS-Bereitstellungen aus dem Marketplace aktualisiert
- Das Senden spezieller Zeichen aus der Zwischenablage der Konsole einer virtuellen Maschine wurde verbessert

### [Netzwerk](/network/network_overview)
- Sie können nun die Beschreibung einer IP-Adresse löschen
- Sie können nun das Feld `description` bei der Erstellung eines virtuellen Netzwerks ausfüllen
- Sie können nun das Feld `description` bei der Bearbeitung eines virtuellen Netzwerks ausfüllen

### [VPC](/network/vpc)
- Die Beschreibung einer VPC Floating-IP wird nun angezeigt
- Sie können nun die Beschreibung einer VPC Floating-IP bearbeiten

## 2026-05-25 — MCP-Server der Console

- Jede Berechtigungsverweigerung gibt nun das betroffene Produkt und den exakten Namen der Berechtigung an, die im persönlichen Zugriffstoken aktiviert werden muss.

## 2026-05-24 — MCP-Server der Console

- Supportverwaltung über einen Agenten: Liste und Details der Tickets, Erstellung, Kommentierung, Schließung, Einsehen geplanter Wartungen und ihrer Kategorien, Tenant-Vorfälle und Plattformvorfälle
- Option zur Löschung nach dem Start bei Bereitstellungen aus dem Marketplace
- Geführter Bereitstellungsprozess für eine Linux-VM
- Direkt einsehbare Ressourcen: Glossar der IaaS-OpenSource-Begriffe, Topologie eines Pools, der Hosts, Speicherdepots, Netzwerke und Metriken auf einen Blick zusammenfasst, sowie Marketplace-Katalog, gefiltert nach IaaS OpenSource

## 2026-05-23 — MCP-Server der Console

- Durchsuchen des Marketplace-Katalogs mit Filtern, sowie technische Datenblätter für IaaS OpenSource (XVA) und VMware (OVF), die Prozessoren, Arbeitsspeicher, Festplatten und exakte Namen der Netzwerkschnittstellen detailliert auflisten
- Bereitstellung einer IaaS OpenSource-VM aus einem Katalogelement, idempotent nach Name
- Steuerung des Stromzustands von IaaS OpenSource-VMs — Einschalten, Ausschalten, Neustart, Pause, Suspendieren und Fortsetzen — idempotent nach Zustand
- Verfolgung langer Operationen über Aktivitäten

## 2026-05-22 — MCP-Server der Console

- Erweiterte Abfrage des Open-Source-IaaS: Pools, Hosts, virtuelle Maschinen, Snapshots, Netzwerkadapter mit Erkennung doppelter MAC-Adressen, virtuelle Festplatten und Replikationsstatus, wobei alle diese Operationen schreibgeschützt sind
- Serverseitig anwendbare Filter für alle diese Listen

## v4.39.2 — 2026-05-22

### [Netzwerk](/network/network_overview)
- Sie können nun den PTR-Eintrag einer öffentlichen IP-Adresse oder einer Interconnect-IP-Adresse löschen.

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Benennungsregeln für VM-Snapshots wurden geändert

### [Bare Metal](/iaas_bare-metal)
- Sie können nun die Beschreibung eines Blades ändern

### [Netzwerk](/network/network_overview)
- Sie können nun den PTR-Eintrag einer Interconnect-IP-Adresse ändern

## v4.39.0 — 2026-04-23

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bestehende Festplatten werden nun beim Hinzufügen einer neuen Festplatte angezeigt
- Beim Verschieben (vMotion) einer virtuellen Maschine im Modus „Nur Rechenressource“ kann nun ein Cluster ausgewählt werden

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bestehende Datenträger werden nun beim Hinzufügen eines neuen Datenträgers angezeigt.

### [VM Instances](/public_cloud/vm_instances)
- Die Liste der VM-Instanzen kann nun im CSV-Format exportiert werden
- Die Anzeige der Häufigkeit einer Backup-Richtlinie wurde überarbeitet

### [Bare Metal](/iaas_bare-metal)
- Die Auswahl der Netzwerke ist nun bei der Netzwerkverteilung auf einem Bare-Metal-System obligatorisch.

## 2026-04-20 — Managed Datenbanken (Preview)

### [Managed MariaDB](/managed_mariadb)
- Veröffentlichung der mit jeder Instanzvorlage verknüpften Engine-Parameter: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` und `table_open_cache`
- Überarbeitung der Instanzvorlagen: Die Obergrenze wird auf 3X-Large (8 vCPU und 32 Gio Speicher) gesenkt und die maximal online erweiterbare Speicherkapazität wird von 512 Gio auf 128 Gio reduziert

### [Managed PostgreSQL](/managed_postgresql)
- Veröffentlichung der Engine-Parameter für jeden Instanztyp: `shared_buffers`, `effective_cache_size`, `work_mem` und `max_connections`
- Überarbeitung der Instanztypen: Die Obergrenze wird auf 3X-Large (8 vCPU et 32 Gio de mémoire) gesenkt und die maximale dynamisch erweiterbare Speicherkapazität wird von 512 Gio auf 128 Gio reduziert

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Die angebotenen Netzwerke werden nun sowohl bei der Erstellung einer Instanz als auch bei der Änderung eines Netzwerkadapters gefiltert.

## v4.38.0 — 2026-04-17

### [Identität & Zugriff (IAM)](/console/iam)
- Sechs neue Berechtigungen sind verfügbar: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` und `public_cloud_vm_instances_console_access`
- Der Name des betreffenden Produkts wird nun am Anfang der Beschreibung jeder Berechtigung angezeigt.

### [Kostenmanager](/console/billing/concepts)
- Die Benutzeroberfläche des Kostenmanagers wurde verbessert
- Die in den Verbrauchsgrafiken angezeigte Einheit wurde aktualisiert

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei der Bereitstellung einer virtuellen Maschine wurde der Schritt zur Auswahl eines Images aus dem Marketplace überarbeitet

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Sie können die Anzeige der Katalogseite nun zwischen Kachel- und Tabellenansicht umschalten
- Der Schritt zur Auswahl eines Marketplace-Images beim Bereitstellen einer virtuellen Maschine wurde aktualisiert

### [VM Instances](/public_cloud/vm_instances)
- Das Dashboard zeigt nun die Nutzung der VM-Instanz-Quoten an
- Eine neue Seite zeigt die Liste der VM-Instanzen an
- Sie können nun eine neue Instanz erstellen
- Sie können nun die Festplatten, Netzwerkadapter und Snapshots einer Instanz einsehen und verwalten
- Sie können nun die Kapazitäten einer Instanz aktualisieren und ihren Status ändern
- Sie können nun auf die Konsole einer Instanz zugreifen

### [LLMaaS](/llmaas)
- Die Preisanzeige in der Verbrauchsansicht und das Formular zur Guthabenaufladung wurden aktualisiert.

## 2026-04-15 — Managed Datenbanken (Preview)

### [Managed MariaDB](/managed_mariadb)
- Preview-Start von MariaDB Managed: StandAlone- und Distributed-Modelle als Drei-Knoten-Cluster hinter einem Proxy, replizierter Speicher über drei Verfügbarkeitszonen und eine Verfügbarkeitsgarantie von 99,9 %

### [Managed PostgreSQL](/managed_postgresql)
- Verfügbarkeit in der Vorschau für Managed PostgreSQL : StandAlone- und Distributed-Modelle als Cluster mit drei Knoten hinter einem Proxy, synchrone Multi-Zonen-Replikation ohne Datenverlust und Point-in-Time-Wiederherstellung

## v4.37.0 — 2026-04-02

### [Kostenmanager](/console/billing/concepts)
- Hinzufügen des Prognosebetrags auf der Verbrauchsseite für das Diagramm und den Trend
- Visuelle Optimierung bei Fehlern oder unzureichenden Daten zum Verbrauch des aktuellen Monats

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung des Formulars zum Bereitstellen einer virtuellen Maschine aus einem Katalogeintrag
- Hinzufügen der Möglichkeit, den Darstellungstyp (Raster oder Tabelle) auf der Katalogseite zu ändern

## v4.36.0 — 2026-03-27

### [Console](/console)
- Aktualisierung der Metriken-Graphen und des Verbrauchs

### [Kostenmanager](/console/billing/concepts)
- Hinzufügen der Kostenmanager-Seite
- Möglichkeit zur Anzeige der Kosten des aktuellen Monats
- Möglichkeit zur Anzeige der Kosten über einen Datumsbereich und zum Vergleich von Trends

### [Bestellungen](/console/orders)
- Verhinderung des Deprovisionings eines Hypervisor-Clusters, wenn ein Storage-Cluster angehängt ist

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen von Filter- und Sortieroptionen für die Festplattenliste über die Details eines Block-Speichers

### [VPC](/network/vpc)
- Verbesserung der Benutzeroberfläche beim Laden von Daten in Formularen

## v4.35.4 — 2026-03-18

### [Console](/console)
- Verbesserung der Wiederverbindung zu WebSockets

### [Support](/console)
- Hinzufügen einer Fallback-Lösung zur Erstellung eines Support-Tickets bei unterbrochener WebSocket-Verbindung

## v4.35.3 — 2026-03-17

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Aktualisierung der Festplattenwiederherstellung beim Laden der Replikate aus dem Replikations-Tab

## v4.35.0 — 2026-03-11

### [Bestellungen](/console/orders)
- Hinzufügen des Löschbefehls für ein cpool/spool-Mapping
- Hinzufügen des De-Provisioning-Befehls für ein privates VPC-Netzwerk
- Änderungen am De-Provisioning-Befehl für ein Bare-Metal-Volumen: Die Löschung kann nun direkt aus der Volumenliste angefordert werden
- Hinzufügen des Löschbefehls für ein Bare-Metal-Volumen-Mapping
- Hinzufügen des De-Provisioning-Befehls für VPC
- Blockierung des De-Provisionings eines Datastores, sofern er der letzte in einem Datastore-Cluster ist

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, eine RAM-Begrenzung für eine virtuelle Maschine hinzuzufügen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Aktualisierung von VMware Multi vMotion, um das Verschieben von VMs von einem Cluster zu einem anderen zu ermöglichen

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen der Möglichkeit, einen Host zu aktualisieren
- Anzeige der Update-Informationen eines Hosts

### [Netzwerk](/network/network_overview)
- Deaktivierung der Löschschaltfläche für die Netzwerkweitergabe, wenn keine Weitergabe bereitgestellt ist

### [LLMaaS](/llmaas)
- Anzeige des Verbrauchs, gruppiert nach Token-Typ

## v4.34.0 — 2026-02-18

### [Console](/console)
- Wichtiges Update der Rendering-Engine der Anwendung
- Die VMware- und OpenIaaS-Menüs werden nicht angezeigt, wenn nur das Metrikenmodul aktiviert ist.

### [Metriken](/console/metrics/concepts)
- Möglichkeit zum CSV-Export von den VMware- und OpenIaaS-Metriken-Seiten

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Beim Verschieben einer virtuellen Maschine ist es nicht möglich, denselben Zielhost wie den aktuellen Host der virtuellen Maschine auszuwählen
- Hinzufügen der Schaltfläche 'Neuer Katalog' auf der Seite VMware-Katalog

## 2026-02-04 — MCP-Server der Console

- Abfrage der VM-Vorlagen, Netzwerke, Hosts und Open-Source-IaaS-Speicherdepots

## 2026-02-03 — MCP-Server der Console

- Bereitstellung des MCP-Servers (Model Context Protocol) der Konsole, authentifiziert über ein persönliches Zugriffstoken
- Abfrage und Steuerung von VMware-VMs über einen Agenten: Liste, Details, virtuelle Rechenzentren, Einschalten und Ausschalten

## v4.33.0 — 2026-01-21

### [Bestellungen](/console/orders)
- Hinzufügen des Löschbefehls für eine Netzwerkpropagation auf OpenIaaS

### [Metriken](/console/metrics/concepts)
- Hinzufügen von Filtern für die Metriken-Seiten von VMWare und OpenIaaS

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Metriken-Seite 'Virtuelle Maschinen'
- Hinzufügen der Metriken-Detailsseite für jede VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Aktualisierung des Modals zum Schließen eines Supporttickets

### [IaaS VMware — Backup](/iaas_vmware)
- Beim Zuweisen einer Sicherungsrichtlinie auf einem Datenträger wird nun vorgeschlagen, den Datenträger zu inventarisieren, falls er von der Sicherungslösung nicht erkannt wird.

### [Bare Metal](/iaas_bare-metal)
- Die Löschung eines BFS-Volumes auf einem Bare Metal ist nun blockiert, das Volume wird beim Löschen des Bare Metals gelöscht
- Bei der Bestellung eines Bare Metals wird das erste Volume nun in 'volume BFS' umbenannt

## v4.31.0 — 2026-01-07

### [IaaS VMware — Backup](/iaas_vmware)
- Aktualisierung der Tooltip-Erklärungen zu den verfügbaren Optionen bei der Wiederherstellung einer virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Snapshots, die mit Backup-Richtlinien verknüpft sind, sind nun sichtbar
- Anzeige des mit dem ISO-Speicherort verknüpften Hosts beim Upload und auf der Katalogseite

### [Object Storage](/storage/oss)
- Anzeige einer Informationskarte im Tab „Unvollständige MPU“, wenn die IP-Adresse der Konsole nicht autorisiert ist, wodurch die Anzeige des Tabs verhindert wird

### [Marketplace](/marketplace)
- Anzeige der Fehlerkarte beim Zugriff auf eine nicht vorhandene Marketplace-Seite

## v4.30.1 — 2025-12-16

### [Console](/console)
- Verbesserung der Anzeige bei leeren Fehlermeldungen durch standardmäßige Anzeige des zurückgemeldeten HTTP-Status

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Möglichkeit, eine statische IP-Adresse einer benutzerdefinierten MAC-Adresse zuzuordnen

### [LLMaaS](/llmaas)
- Bei den Verbrauchsmetriken: Filterung der Zeitreihen mit Nullwerten

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Verbesserung der Synchronisation der Aktionen auf den VPC-Seiten
- Hinzufügen der Zuordnung einer statischen IP zu einer öffentlichen IP aus der Liste der statischen IPs

### [Speicher](/storage/oss)
- Hinzufügen unvollständiger MPUs von der Bucket-Seite
- Möglichkeit, einen unvollständigen MPU zu löschen

## v4.28.0 — 2025-11-21

### [Console](/console)
- Hinzufügen der Möglichkeit, globale Informationsmeldungen anzuzeigen, die in der gesamten Anwendung sichtbar sind.

### [Bestellungen](/console/orders)
- Möglichkeit, eine LLMaaS-Kreditaufladung für den Tenant zu bestellen
- Möglichkeit, einen VPC zu bestellen
- Möglichkeit, ein privates Netzwerk in einem VPC zu bestellen
- Möglichkeit, eine öffentliche IP-Adresse für das VPC-Produkt zu bestellen
- Möglichkeit, das Gateway für einen VPC zu aktivieren
- Hinzufügung der Möglichkeit, die Löschung eines Tenants zu bestellen

### [Metriken](/console/metrics/concepts)
- Verbesserung der Tooltips-Anzeige auf Metriken-Graphen: Sie können nun auf einen Punkt klicken, um den Tooltip einzufrieren und alle Daten einsehen

### [Netzwerk](/network/network_overview)
- Zusammenführung der Seiten Netzwerke und Internet unter einem einzigen Produkt: Privates Backbone
- Hinzufügung der Verwaltung von PTR-Einträgen bei der Änderung einer öffentlichen IP-Adresse
- Blockierung der Freigabe für bestimmte Netzwerktypen

### [VPC](/network/vpc)
- Integration des VPC-Produkts
- Hinzufügen einer Seite zur Auflistung der VPCs
- Hinzufügen einer Detailseite für eine VPC
- Möglichkeit zur Verwaltung privater Netzwerke, öffentlicher IPs und des Gateways einer VPC
- Möglichkeit, eine statische IP eines privaten VPC-Netzwerks einem VMware- oder OpenIaaS-Netzwerkadapter zuzuordnen
- Möglichkeit, eine statische IP mit einer öffentlichen IP einer VPC zu verknüpfen

### [LLMaaS](/llmaas)
- Hinzufügen eines „Abrechnung“-Tabs auf der LLMaaS-Seite für Tenants mit aktiviertem Prepaid-Modus
- Anzeige des verbleibenden Guthabens für Tenants im Prepaid-Modus auf dem Dashboard und im „Abrechnung“-Tab

## v4.27.0 — 2025-11-12

### [Bestellungen](/console/orders)
- Hinzufügen einer Überprüfung des verfügbaren Bestands bei der Bestellung von Ressourcen
- Hinzufügen eines Filters nach Bestelltyp und Produkt auf der Bestellliste

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung der virtuellen Maschinenkonsole. Verbesserte Tastatursteuerung und Hinzufügen einer Zwischenablage

### [IaaS VMware — Backup](/iaas_vmware)
- Hinzufügen einer Warnung im Dashboard für SPP-Sicherungs-VSnaps mit zu hoher Auslastung

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Verbesserung der Konsole für virtuelle Maschinen. Bessere Tastatursteuerung und Hinzufügen einer Zwischenablage

### [Marketplace](/marketplace)
- Hinzufügen der Möglichkeit, technische Details eines Images anzuzeigen

## v4.26.5 — 2025-11-04

### [Console](/console)
- Verbesserung der Größe der Dashboard-Graphiken beim Ändern der Fenstergröße

## v4.26.3 — 2025-10-31

### [Metriken](/console/metrics/concepts)
- Umbenennung der in Diagrammen angezeigten Metrik-Exports

## v4.26.0 — 2025-10-22

### [Console](/console)
- Hinzufügen einer Schaltfläche zum Kopieren der UUID des aktuellen Scopes aus dem Benutzerprofil
- Vollständige Überarbeitung des Dashboards
- Hinzufügen einer automatischen Wiederverbindung zur Aktivitätsverfolgung bei Verbindungsunterbrechung

### [Bestellungen](/console/orders)
- Aktualisierung der Bestellformulare, um sie den entsprechenden Seiten hinzuzufügen (exemple nouveau Datastore depuis la page Stockage)

### [Support](/console)
- Hinzufügen der E-Mail-Adresse der Person, die das Ticket geschlossen hat, zur Bewertung des Support-Tickets

### [Metriken](/console/metrics/concepts)
- Überarbeitung der Erfassung der VMware-Metriken, die URL der Seite lautet nun /iaas/metrics
- Hinzufügen eines Tabs für VMware-Infrastrukturmetriken unter Compute
- Hinzufügen eines Tabs für VMware-Infrastrukturmetriken unter Storage
- Hinzufügen einer Metriken-Seite für OpenIaaS
- Hinzufügen eines Tabs für OpenIaaS-Infrastrukturmetriken unter Compute
- Hinzufügen eines Tabs für OpenIaaS-Infrastrukturmetriken unter Storage

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der neuen extra_config-Schlüssel (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blockierung der Auswahl eines Hostclusters ohne aktiven Host
- Bei der Erstellung einer VMware-Virtuellen Maschine wird das Vcenter nun basierend auf der ausgewählten Verfügbarkeitszone bestimmt
- Hinzufügen von Beschränkungen für Namen und Beschreibungen beim Hochladen einer Datei auf VMware

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Hinzufügen eines OpenIaaS-Laufwerks werden Speicher, die nicht zum Pool der virtuellen Maschine gehören, nun gefiltert.
- Bei einem Snapshot ist die Option zum Mitspeichern des Arbeitsspeichers standardmäßig nun abgewählt.

### [IaaS OpenSource — Backup](/iaas_opensource)
- Hinzufügen der Möglichkeit, ein Backup über den Backup-Tab einer OpenIaaS-VM auszuführen

### [Netzwerk](/network/network_overview)
- Entfernung der Einschränkung, die die Auswahl mehrerer Netzwerktypen auf der Seite für virtuelle Netzwerke verhinderte

### [Object Storage](/storage/oss)
- Optimierung des Dateiabrufs aus einem Bucket

### [PaaS OpenShift](/paas_openshift)
- Hinzufügen einer Seite zur Auflistung der OpenShift-Cluster
- Hinzufügen einer Detailseite für einen OpenShift-Cluster

### [Marketplace](/marketplace)
- Hinzufügen eines Filters nach UUID und Möglichkeit, die UUID eines Elements zu kopieren

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Aktualisierung der Verwendung der erweiterten Konfiguration und der OVF-Eigenschaften beim Bereitstellen einer VMware-VM

## v4.24.0 — 2025-09-24

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, ein virtuelles Maschinenimage aus der Liste der virtuellen Maschinen zu bereitstellen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, ein virtuelles Maschinenimage aus der Liste der virtuellen Maschinen bereitzustellen

### [Netzwerk](/network/network_overview)
- Hinzufügen einer Validierung, um das Löschen der Netzwerkfreigabe zu blockieren, wenn das Netzwerk in einem anderen Tenant propagiert ist

### [Marketplace](/marketplace)
- Hinzufügen des Marketplace-Produkts
- Hinzufügen einer Seite, die die im Katalog verfügbaren Lösungen auflistet
- Hinzufügen einer Seite zum Anzeigen der Details einer Lösung
- Möglichkeit, ein virtuelles Maschinen-Image aus den Lösungsdetails heraus in einer OpenIaaS- oder VMware-Umgebung bereitzustellen
- Möglichkeit, einen Partner für eine Managed-Services-Lösung zu kontaktieren

## v4.23.0 — 2025-09-12

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Unterstützung für 4 neue extra-configs-Werte hinzugefügt

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Den HA-Alarm für die betroffenen VMs nicht anzeigen, wenn das lokale ISO nicht eingehängt ist
- Beim Hinzufügen oder Ändern der Größe eines Datenträgers angeben, ob das zugehörige SR für eine Replikationskonfiguration verwendet wird

### [IaaS OpenSource — Backup](/iaas_opensource)
- Hinzufügen des AZ-Namens zum Sicherungsbericht

### [Object Storage](/storage/oss)
- Aktualisierung der Informationen zum Lebenszyklus eines Buckets

### [LLMaaS](/llmaas)
- Hinzufügen des Produkts LLMaaS
- Hinzufügen der Liste der verfügbaren Modelle
- Hinzufügen der Liste der API-Schlüssel mit der Möglichkeit, neue zu erstellen
- Hinzufügen des Verbrauchs nach Modellen und Schlüsseln
- Hinzufügen der Details eines Modells
- Möglichkeit, ein Modell zu testen

## v4.22.1 — 2025-09-10

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Änderung der Warnungen zur gewählten Datenträgerformatkonfiguration bei einem VMotion mit Storage-Migration

## v4.22.0 — 2025-09-02

### [Bestellungen](/console/orders)
- Hinzufügen der Bestellung zur Entfernung der Netzwerkpropagation von der Seite mit allen Bestellungen aus, alle verfügbaren Bestellungen sind nun von dieser Seite aus erreichbar.

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Aktualisierung der Bedingungen für die Änderung des Datenträgerformats beim Verschieben einer virtuellen Maschine sowie Hinzufügen von Informationen zum aktuellen Datenträgerformat bei einer diskbasierten Konfiguration

## v4.21.0 — 2025-08-22

### [Console](/console)
- Aktualisierung der Anzeige, wenn keine Daten erstellt/bereitgestellt werden oder ein Fehler beim Abrufen von Informationen auftritt.

### [Support](/console)
- Öffnen der Support-Modals mit dem zugehörigen, vorauselektierten Service
- Hinzufügen eines Badges im Menü und in der Navbar, wenn ein Support-Ticket eine Antwort erfordert

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Möglichkeit, die Liste der VMware-Replikate als CSV zu exportieren
- Verbesserung des Schiebereglers zur RAM-Auswahl bei bestimmten Bestellungen
- Hinzufügen der Verwaltung der Optionen Static differed and immediate für vMotion

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Blockierung der Löschung eines nicht leeren Clusters oder eines Clusters mit Hosts/Datastores, die sich nicht im Wartungsmodus befinden

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Möglichkeit, die Liste der OpenIaaS-Replikate und der zugehörigen Richtlinien als CSV zu exportieren
- Hinzufügen von Details zu den von virtuellen Maschinen verwendeten Tools (pvDrivers, managementAgent und tools)
- Hinzufügen von Überprüfungen für die hohe Verfügbarkeit (HA)

### [Netzwerk](/network/network_overview)
- Änderung der Auswahl einer IPv4-Adresse mit einer verfügbaren Liste

## v4.20.0 — 2025-07-29

### [Bestellungen](/console/orders)
- Hinzufügen von Informationen zu limitierten und ausgeschöpften Kapazitäten für Rechenressourcen bei der Bestellung einer neuen Verfügbarkeitszone

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer VMware Tools-Option zur Synchronisierung der Uhrzeit mit dem Host
- Aktualisierung der Bedingungen für die Verschlüsselung einer virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Entfernen der Informationen zur letzten Ausführung der Replikationsrichtlinien, die zu Verzögerungen führten
- Unterstützung für TX-Checksumming bei Netzwerkadaptern
- Hinzufügen einer Warnung für die OpenIaaS-Replikation, wenn die Anzahl der AZs unter 2 liegt
- Hinzufügen von High Availability (HA) für Pools und virtuelle Maschinen

## v4.19.0 — 2025-07-24

### [Bestellungen](/console/orders)
- Aktualisierung der Bestellung öffentlicher IPs mit der Möglichkeit, ein IPv6-Präfix zu bestellen
- Aktualisierung der Anzeige verfügbarer Bestellungen, wenn keine Umgebung bereitgestellt ist

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen eines Replikationsfilters zur Liste der virtuellen Maschinen
- Aktualisierung des Modals zur Erstellung einer virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen eines Replikationsfilters zur Liste der virtuellen Maschinen

### [Netzwerk](/network/network_overview)
- Aktualisierung der Internetseite durch Hinzufügen der IPv6-Verwaltung

## v4.18.0 — 2025-07-15

### [Console](/console)
- Aktualisierung der Anzeige, wenn keine Daten erstellt/bereitgestellt werden oder wenn beim Abrufen von Informationen ein Fehler auftritt.

### [Bestellungen](/console/orders)
- Aktualisierung der Internet-Schritte bei der Bestellung einer neuen Verfügbarkeitszone oder eines neuen Pools

### [Support](/console)
- Hinzufügen eines Sicherheitsdienstes für jedes Produkt bei der Erstellung eines Supporttickets

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen eines Links von einem auf einem Controller montierten ISO zum entsprechenden Element im Katalog

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer OpenIaaS-Replikationsseite mit der Liste der Replikate und der Replikationsrichtlinien
- Möglichkeit, eine Replikationskonfiguration für eine OpenIaaS-Virtuelle Maschine hinzuzufügen und zu entfernen
- Möglichkeit, eine Replikationsrichtlinie zu erstellen und zu löschen
- Möglichkeit, ein Replikat wiederherzustellen
- Möglichkeit, virtuelle Maschinen im CSV-Format zu exportieren.

## v4.17.0 — 2025-06-20

### [Bestellungen](/console/orders)
- Möglichkeit, einen OpenIaaS-Pool zu bestellen
- Möglichkeit, die Zuordnung eines vorhandenen Volumes zu einem vorhandenen Bare Metal über die Seite eines Bare Metal, die Seite eines Volumes oder die Seite der Bestellungen zu bestellen.

### [Support](/console)
- Möglichkeit, eine Datei in einem Support-Ticket zu löschen
- Die Beschreibung zur Zufriedenheit bei der Schließung eines Tickets ist jetzt optional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Hinzufügen der englischen Übersetzungen auf der Verbrauchsberichtsseite des Bestellmenüs

### [Bestellungen](/console/orders)
- Möglichkeit, die Größenerweiterung eines Bare-Metal-Volumes zu bestellen
- Möglichkeit, die Größenerweiterung eines Block Storage OpenIaaS zu bestellen

### [Support](/console)
- Überarbeitung der Support-Ticket-Erstellung
- Interpretation von Markdown in Support-Tickets und Aktualisierung der Anzeigereihenfolge der Kommentare
- Hinzufügen eines Feedbacks bei der Schließung eines Support-Tickets
- Aktualisierung der Symbolanzeige entsprechend der Auswirkung eines globalen Vorfalls

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer Option zur Beibehaltung der Konfiguration einer virtuellen Maschine bei einer Wiederherstellung in der Produktion auf dem ursprünglichen Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Warnmeldung bei zu wenig Speicherplatz auf einem Block Storage (90% utilisé) und Warnhinweis bei der Ausführung von Befehlen

### [Object Storage](/storage/oss)
- Hinzufügen der Beschreibung der S3-Rollen bei der Zuweisung zu einem Bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Anzeige einer Fehlermeldung, wenn ein Netzwerk an einem Netzwerkadapter einer virtuellen Maschine falsch konfiguriert ist, was ebenfalls den Start der virtuellen Maschine verhindert

## v4.15.0 — 2025-05-13

### [Console](/console)
- Anpassung der angezeigten Einheiten für Infrastrukturressourcen: GiB (Gibibyte) statt GB (Gigabyte)

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, eine OpenIaaS-Festplatte zu verschieben
- Möglichkeit, eine OpenIaaS-Festplatte zu verbinden und zu trennen
- Anzeige des Status verbunden/getrennt einer Festplatte
- Möglichkeit, die UUID einer Festplatte, eines virtuellen Netzwerks oder eines Snapshots zu kopieren
- Möglichkeit, den Namen einer virtuellen Maschine bei der Bereitstellung einer XVA-Datei festzulegen
- Hinzufügen der Möglichkeit, beim Start einer virtuellen Maschine eine Sicherungsrichtlinie zuzuweisen, falls keine vorhanden ist.

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen von Aktionen für Festplatten über Block Storage

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen von MAC-Adressen zur Schnittstellentabelle eines Bare-Metal-Servers
- Hinzufügen einer Seite mit den Details eines Bare-Metal-Volumes

## v4.14.0 — 2025-04-28

### [Console](/console)
- Möglichkeit, Seiten im Menü anzupinnen
- Aktualisierung der Darstellung der API-Dokumentationen

### [Bestellungen](/console/orders)
- Möglichkeit, die Löschung eines OpenIaaS-Block Storages anzufordern
- Möglichkeit, das Hinzufügen eines Block Storages zu einem OpenIaaS-Pool anzufordern
- Möglichkeit, die Löschung eines OpenIaaS-Hosts anzufordern
- Hinzufügen der Informationen zum betroffenen Produkt zur Bestellungsliste
- Möglichkeit, das Hinzufügen eines Hosts zu einem OpenIaaS-Pool anzufordern

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, einen Host in Wartung zu versetzen
- Möglichkeit, die Beschreibung eines Modells zu bearbeiten
- Möglichkeit, einen Host beim Start einer virtuellen Maschine auszuwählen
- Hinzufügung einer Eindeutigkeitsregel für den Namen der OpenIaaS virtuellen Maschinen

## v4.13.0 — 2025-04-08

### [Console](/console)
- Hinzufügen von Statistiken und Kontaktinformationen auf der Support-Seite

### [Bestellungen](/console/orders)
- Überarbeitung der Anzeige der Bestelldetails
- Überarbeitung der Anzeige der Bestelloptionen
- Aktualisierung der Anzeige zur Bestellung des ersten Bare Metal, wenn noch keines vorhanden ist
- Aktualisierung der Bestellung eines Bare Metal mit der Auswahl der Netzwerkpropagation auf den Bare-Metal-Schnittstellen
- Möglichkeit, ein VLAN auf ein Bare Metal zu propagieren
- Möglichkeit, einem Bare Metal ein Volume hinzuzufügen
- Möglichkeit, ein Volume von einem Bare Metal zu deprovisionieren
- Möglichkeit, ein Bare Metal zu deprovisionieren

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen einer Schaltfläche zum Kopieren der UUID für VMware-Netzwerke und -Kataloge

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Schaltfläche zum Kopieren der UUID für OpenIaaS-Netzwerke und -Kataloge
- Hinzufügen einer Schaltfläche zum Kopieren der UUID für Bare-Metal-Server

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen der Anzeige der Netzwerkschnittstellen und der darauf propagierten Netzwerke auf einem Bare-Metal-Server
- Hinzufügen der Aktionen zum Starten, Neustarten und Stoppen eines Bare-Metal-Servers

### [Netzwerk](/network/network_overview)
- Möglichkeit, die Ausbreitung auf einem Bare-Metal-Server eines Netzwerks zu visualisieren

## v4.12.0 — 2025-03-25

### [Console](/console)
- Möglichkeit, eine IP-Whitelist auf der Zugriffsseite zu löschen

### Tags
- Hinzufügen von Tags zu den virtuellen Maschinen von OpenIaaS

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Aktualisierung des Abrufs der API-Empfehlungen zu den Affinitäts-/Anti-Affinitätsregeln eines HostClusters

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Import eines OpenIaaS-XVA in der Downloadliste anzeigen
- Möglichkeit, eine vorhandene Festplatte an eine virtuelle Maschine anzuhängen
- Möglichkeit, eine vorhandene Festplatte von einer virtuellen Maschine abzutrennen

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Aktualisierung der Anzeige der Datenträger eines OpenIaaS-Block-Speichers

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Aktualisierung der Fehlermeldung beim Zugriff auf Dateien in einem Objektspeicher-Bucket

## v4.11.1 — 2025-03-12

### [Bestellungen](/console/orders)
- Aktualisierung der Namen der Verfügbarkeitszonen bei einer Bestellung
- Änderung des Datastore-Minimums bei der Bestellung eines datastoreCluster

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Wenn das Label-Feld für hostCluster und datastoreCluster auf leer gesetzt wird, wird standardmäßig der technische Name verwendet.

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Wenn das Label-Feld der Pools auf leer gesetzt wird, wird der technische Name standardmäßig angewendet.
- Hinzufügen einer Informationsblase auf der Katalogseite und beim ISO-Import, um darauf hinzuweisen, dass XVA bei der Erstellung einer virtuellen Maschine unterstützt wird.

## v4.11.0 — 2025-03-10

### [Bestellungen](/console/orders)
- Aktualisierung der zulässigen Netzwerktypen bei der Erstellung einer AZ
- Aktualisierung der minimalen zu provisionierenden Ressourcen bei der Bestellung einer neuen Verfügbarkeitszone

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Anzeige des Namens der virtuellen Maschine im Konsolen-Tab für VMware

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Hinzufügen der Labelverwaltung für VMware Datastore-Cluster und Host-Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Ermöglicht die Bereitstellung einer virtuellen Maschine über XVA-Import für OpenIaaS
- Hinzufügen der Label-Verwaltung für OpenIaaS-Pools
- Anzeige des Namens der virtuellen Maschine im Konsolen-Tab für OpenIaaS

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Aktualisierung der CPU-Informationen der OpenIaaS-Hosts und -Pools

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
- Hinzufügen der Möglichkeit, ISO-Dateien und Vorlagen über die Katalogseite zu löschen
- Hinzufügen der Möglichkeit, den Konfigurationsdatenträger 'Cloud Init' bei der Bereitstellung einer virtuellen Maschine zu löschen

## v4.9.1 — 2025-02-27

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, einen Netzwerkadapter auf einer eingeschalteten virtuellen Maschine zu bearbeiten

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen von Einschränkungen für zulässige Zeichen in den Namen der OpenIaaS-virtuellen Maschinen

## v4.9.0 — 2025-02-21

### [Console](/console)
- Namen in Tabellen klickbar machen, wenn eine verknüpfte Seite existiert
- Die Konsolenöffnung optimieren, um das Öffnen mehrerer Tabs zu vermeiden, wenn mehrere Fenster auf derselben Seite geöffnet sind
- Eine Fehlermeldung anzeigen, wenn beim Öffnen einer Konsole der Browser keine Weiterleitungen zur Anwendung zulässt

### [Metriken](/console/metrics/concepts)
- RAM-Einheit auf der Gesundheitsseite der virtuellen Maschinen anzeigen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Erstellung einer virtuellen Maschine blockieren, wenn der Speicherplatz auf den ausgewählten Block Storages nicht ausreicht
- Standard-MAC-Adressen bei der Erstellung einer virtuellen OpenIaaS-Maschine leeren

### [Speicher](/storage/oss)
- S3-Endpunkt in die Zwischenablage kopieren können

## v4.8.0 — 2025-02-14

### [Bestellungen](/console/orders)
- Hinzufügen des Auftrags zur Netzwerkausbreitung auf OpenIaaS-Pools
- Hinzufügen der Netzwerkausbreitungsaufträge auf der Seite aller Aufträge

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Anzeige der Anzahl der zugewiesenen und verfügbaren Festplatten pro Controller auf einer virtuellen Maschine
- Aktualisierung der Bedingungen für die Anzahl der auf Para-Virtual-SCSI-Controllern hinzuzufügenden Festplatten in Abhängigkeit von der Hardware-Version der virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, Cloud-Init-Optionen bei der Erstellung einer OpenIaaS-Virtuellen Maschine hinzuzufügen
- Anzeige der Festplatten auf der Seite eines Block Storage
- Möglichkeit, die Boot-Firmware-Konfiguration einer OpenIaaS-Virtuellen Maschine zu aktualisieren
- Möglichkeit, eine OpenIaaS-Virtuelle Maschine zu klonen

### [Netzwerk](/network/network_overview)
- Aktualisierung der Visualisierung der Propagationen eines Netzwerks und Hinzufügen von OpenIaaS-Propagationen
- Aktualisierung der Netzwerkerstellung und Möglichkeit, das Netzwerk bereits bei der Erstellung auf der OpenIaaS-Infrastruktur zu propagieren

## v4.7.0 — 2025-02-03

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Der OVF-Export ist blockiert, wenn die virtuelle Maschine verschlüsselt ist

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeigen der Beziehungen zwischen Datastore-Clustern und Host-Clustern auf den Seiten Compute und Storage

### [IaaS VMware — Backup](/iaas_vmware)
- Änderung der Startoption nach der Wiederherstellung für eine SecNumCloud-Umgebung bei der Wiederherstellung im Clone- oder Produktionsmodus auf einem alternativen Host oder Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Schaltflächen zum Ein- und Aushängen eines OpenIaaS-ISOs in der Aktionsleiste einer virtuellen Maschine hinzufügen

### [Netzwerk](/network/network_overview)
- Verbesserung der Anzeige von Netzwerkpropagierungen, wenn Löschanfragen für Propagierungen in Bearbeitung sind

## v4.6.0 — 2025-01-30

### [Console](/console)
- Entfernen der bei der Autovervollständigung angezeigten Zeichen beim Hinzufügen von Beobachtern bei der Erstellung eines Support-Tickets
- Aktualisierung der Menü- und Seitendarstellung für die VMware- und OpenIaaS-Angebote in einer neuen Umgebung ohne bereitgestellte Verfügbarkeitszonen

### [Console — Benachrichtigungen](/console)
- Aktualisierung der Anzeige der Benachrichtigungsabonnements auf der Profilseite

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit zum Verschlüsseln einer virtuellen Maschine hinzufügen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des Exports einer virtuellen Maschine als Modell

## v4.5.0 — 2025-01-17

### [Console](/console)
- Hinzufügen der Beschreibung bei der Erstellung und Anzeige von Whitelists
- Möglichkeit, die Beschreibung einer Whitelist zu bearbeiten

### [Bestellungen](/console/orders)
- Hinzufügen einer Bestellung für eine neue OpenIaaS-Verfügbarkeitszone
- Hinzufügen einer Bestellung für Bare Metal
- Verknüpfen eines Hypervisor-Clusters mit einem Speicher-Cluster

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbleibende Größe in Klammern in den Speicher-Auswahlbäumen anzeigen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Hinzufügen des Worst-Case-Szenarios für die Speicherzuweisung auf einem VMware-Hostcluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des ISO-Uploads zu den OpenIaaS-Katalogen
- Hinzufügen der Verschiebung von OpenIaaS-virtuellen Maschinen
- Möglichkeit zur Auswahl von Festplatten und Netzwerken bei der Erstellung einer OpenIaaS-virtuellen Maschine

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen einer Seite zur Auflistung von Bare-Metal-Servern
- Hinzufügen einer Seite zur Auflistung von Bare-Metal-Volumes
- Hinzufügen einer Seite mit den Details eines Bare-Metal-Servers
- Hinzufügen der Möglichkeit, eine Bare-Metal-Konsole zu öffnen

## v4.4.0 — 2025-01-13

### [Console](/console)
- Technische Änderungen während des Authentifizierungsprozesses

## v4.3.0 — 2024-12-19

### [Console — Aktivitäten](/console)
- Hinzufügen der Links "Auf die Ressource zugreifen" für Aktivitäten, die mit XOA und Object-Storage verknüpft sind

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Tags und der IP-Adresse der virtuellen Maschine zum CSV-Export der virtuellen Maschinen

### [IaaS VMware — Backup](/iaas_vmware)
- Vorschlag, nur die gefilterten Elemente im CSV-Export der Sicherungsberichte im Unter-Tab 'Virtuelle Maschinen' zu exportieren

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen von XOA-VM-Templates über die Kataloge-Seite

### [Object Storage](/storage/oss)
- Den globalen Zugriffschlüssel aus den Speicherkonten erstellen und zurücksetzen können

## v4.2.0 — 2024-12-10

### [Console](/console)
- Umleitungen zur Statusseite hinzufügen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Elemente, die bereits im 'Mein Katalog' vorhanden sind, werden nun weiterhin im 'Öffentlichen Katalog' angezeigt
- Hinzufügen von Weiterleitungen für die in einem VMware-Katalogeintrag genannten Komponenten
- Aktualisierung der RAM-Anzeige auf einem Hypervisor-Cluster
- Entfernen der Option zur automatischen Replikation neuer Festplatten, die zu Fehlern führte
- Hinzufügen von Validierungsprüfungen für die Replikation einer virtuellen Maschine
- Hinzufügen neuer PCIPassthru-Extra-Konfigurationen über die erweiterte Konfiguration einer virtuellen Maschine zur GPU-Verwaltung
- Möglichkeit zum Hinzufügen eines PCI-Controllers auf virtuellen Maschinen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeige von DRS-Empfehlungen und -Ausfällen von einem Hypervisor-Cluster
- Neuer Status für Hypervisoren und Datastores, wenn ein Wartungsmodus angefordert wird
- Hinzufügen von GPU-Informationen eines Hypervisors

### [IaaS VMware — Backup](/iaas_vmware)
- Entfernen mehrerer nicht funktionierender Backup-Optionen auf virtuellen Maschinen im Testmodus

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Backup-Seite für den OpenIaas-Backup-Bereich, die Fehler, Richtlinien und Backup-Berichte auflistet und die Wiederherstellung gelöschter virtueller Maschinen ermöglicht

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen einer Seite zum Auflisten der OpenIaas-Verfügbarkeitszonen
- Hinzufügen einer Speicherseite für den OpenIaas-Bereich
- Hinzufügen einer Rechenleistungsseite für den OpenIaas-Bereich

### [Housing (Colocation)](/housing)
- Änderung der angezeigten Informationen über die Geräte-Seite

## v4.1.1 — 2024-11-18

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung der Bearbeitung der Speicherkapazität, die Umrechnung erfolgt auf die Einheit mit dem nächsten ganzzahligen Wert
- Bei der Erstellung eines Snapshots ist die Schaltfläche zum Speichern des Arbeitsspeichers deaktiviert, wenn die virtuelle Maschine ausgeschaltet ist
- Wenn mehrere virtuelle Maschinen aufgeklappt werden, wird die Festplattenliste nicht sofort angezeigt

### [IaaS VMware — Backup](/iaas_vmware)
- Hinzufügen der CSV-Export-Schaltfläche im Tab „Virtuelle Maschinen“ auf der Seite für Sicherungsberichte

## v4.1.0 — 2024-11-13

### [Console](/console)
- Möglichkeit, eine Datei beim Feedback zu senden

### [Identität & Zugriff (IAM)](/console/iam)
- Deaktivierung der Möglichkeit, einen Besitzer zu löschen

### [Bestellungen](/console/orders)
- Hinzufügen der Verwaltungsfunktionen zum Erstellen, Löschen und Bearbeiten eines Datastores über die Seite "Bestellungen"
- Hinzufügen der Möglichkeit, einen Host zu löschen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen von Snapshot-Aktivitäten im Snapshot-Tab einer VM
- Anzeige der tatsächlichen Größe virtueller Maschinen im CSV-Export

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Auf den Seiten Rechenleistung und Speicher gilt der Filter für die Verfügbarkeitszonen ebenfalls für die Cluster-Registerkarten
- Anzeige der Auslastungsprozentsätze auf den Verbrauchsleisten (CPU / RAM / Stockage)

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Validierung zum Vorhandensein von Sicherungsrichtlinien für die Option zum automatischen Start
- Hinzufügen einer Option zum Erzwingen des Stopps/Neustarts virtueller Maschinen ohne installierte Guest-Tools
- Verbesserung der Ausführungsmeldung einer OpenIaas-Richtlinie auf einer spezifischen virtuellen Maschine

### [Bastion](/bastion)
- Hinzufügen einer Validierung für das Host-Feld eines Geräts

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

:::info Frühere Historie
Die vollständige Historie der Versionen vor v4.0 (v1.0 bis v3.38.1, von Februar 2019 bis Oktober 2024) ist in der [Git-Historie](https://github.com/Cloud-Temple/docs) des Projekts verfügbar.
:::
