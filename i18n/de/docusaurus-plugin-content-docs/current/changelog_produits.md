---
title: Produktneuheiten
sidebar_position: 999
---

# Produktneuheiten & Weiterentwicklungen

> Dieses Changelog listet die neuen Funktionen und wesentlichen Weiterentwicklungen der Plattform Cloud Temple.
> Bugfixes sind ab Version 4.50.0 enthalten.

## v5.0.0 — 2026-10-15

### [Console](/console)
- Neue Konsole: vollständiges Redesign der Oberfläche mit neuem Design und dunklem Theme
- Auswahl des hellen oder dunklen Themas über das Profil, mit Vorschau
- Führung durch die neue Konsole bei der ersten Anmeldung
- Rückkehr zur vorherigen Version der Konsole über das Fenster „Neuigkeiten", solange diese verfügbar ist
- Navigation: Die Produkte sind in einer einzigen Sektion zusammengefasst, der Marketplace ist unter dem Kostenmanager platziert und „Public Cloud" wird zu „VM Instances"
- SecNumCloud-Hinweis im Kopf der Seiten qualifizierter Produkte
- Mehrschrittige Formulare schließen sich nicht mehr durch einen Klick außerhalb des Fensters
- Korrektur des Schließverhaltens von Fenstern, die ein Geheimnis nur einmal während seiner Erstellung anzeigen
- Neue Detailseite für virtuelle Maschinen von VMware, OpenIaaS und VM Instances, die Informationen, Verbrauch und letzte Aktivitäten zusammenfasst
- Aktionsmenü auf jeder Zeile der Liste der virtuellen Maschinen

### [VM Instances](/public_cloud/vm_instances)
- Die Informationen einer virtuellen Maschine bleiben während einer laufenden Operation einsehbar

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Überarbeitete Seiten Compute und Storage: Cluster-Kopf mit dessen Verbrauch und neue Host- und Datastore-Karten
- Korrektur der doppelten Ladung beim Klick auf einen Cluster und der geänderten URL bei der Rückkehr zu „Alle"

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Überarbeitete Seiten Compute und Storage: Pool-Kopf mit dessen Verbrauch und neue Host-, Block-Storage- und Verfügbarkeitszonen-Karten

### [Object Storage](/storage/oss)
- Überarbeiteter Dateibrowser: Baumstruktur, Detailpanel, Drag & Drop und Überwachung der Übertragungen in der Liste
- Anzeige und Wiederherstellung gelöschter Dateien in versionierten Buckets

### [Commandes](/console/orders)
- Neue Darstellung der Detailansicht einer Bestellung

### [Gestionnaire des coûts](/console/billing/concepts)
- Klickbare Kreisdiagramme in der Vorschau für den direkten Zugriff auf die Verbrauchsdetails

### [Console — Organisation](/console/iam/concepts)
- Korrektur des Ladeindikators des Kostenmanagers auf dem Organisations-Dashboard

### [Console — Activités](/console)
- Aktivitätsdetails angereichert mit den betroffenen Ressourcen im Verlauf ihres Fortschritts

### [Bastion](/bastion)
- Button „Alles kopieren" für das Deployment-YAML in der Detailansicht einer Appliance

### [Marketplace](/marketplace)
- Karte eines Marketplace-Elements: Inhaltsverzeichnis und rechte Spalte bleiben beim Scrollen sichtbar

### [Métriques](/console/metrics/concepts)
- Korrektur eines Tooltip, der nach dem Entfernen der Nadel auf den Diagrammen weiterhin angezeigt wurde

## v4.53.1 — 2026-10-15

### [Console](/console)
- Kleinere technische Verbesserungen

## v4.53.0 — 2026-10-14

### [VM Instances](/public_cloud/vm_instances)
- Anzeige von Beta-Badges auf den betroffenen Instanzfamilien und Speicherklassen
- Anzeige von Verfügbarkeits- und niedrigen-Bestands-Indikatoren je nach ausgewählter Familie, Zone und Speicherung, mit Deaktivierung der nicht verfügbaren Optionen
- Import eines VHD- oder VMDK-Datenträgers aus dem Object Storage des Tenants, mit Dateiauswahl und Fortschrittsanzeige
- Begrenzung auf 8 Netzwerkkarten pro virtuelle Maschine, mit Hinweis auf das Limit bei der Erstellung und beim Hinzufügen einer Karte
- Anzeige des Speicherpreises und der geschätzten Kosten beim Hinzufügen einer Festplatte sowie der Kosten nach Erweiterung
- Kennzeichnung virtueller Maschinen im Fehlerzustand durch einen dedizierten Status und Hinzufügen des entsprechenden Filters
- Erstellung, Wiederherstellung und Änderung der Backup-Richtlinie einer virtuellen Maschine: Es werden nur Richtlinien vorgeschlagen, die mit der Instanzfamilie kompatibel sind
- Korrektur der Aufbewahrungszeit-Einheit der Backup-Richtlinien, ausgedrückt in Anzahl der Backups und nicht mehr in Tagen
- Wiederherstellung eines Backups: Es werden nur Instanzfamilien vorgeschlagen, auf die das Backup wiederhergestellt werden kann

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Möglichkeit, den Neustart eines ESX-Hosts aus der Host-Liste anzufordern

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Möglichkeit, den Neustart eines XCP-Hosts aus der Host-Liste anzufordern, mit einer Warnung zur Pool-Verfügbarkeit, wenn der letzte aktive Host betroffen ist

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Deployment per Template oder aus dem Marketplace: Korrektur der Verfälschung von cloud-init-Konfigurationen mit Sonderzeichen, beim Lesen und beim Senden

### [Marketplace](/marketplace)
- Korrektur des Deployments eines Images auf OpenIaaS, wenn nur die cloud-init-Netzwerkkonfiguration ausgefüllt ist

### [Console — Organisation](/console/iam/concepts)
- Löschung eines Tenants: Die Bestätigungsanweisung wird nun über dem Eingabefeld angezeigt

### [Console](/console)
- Schutz laufender Dateiübertragungen bei Ablauf der Sitzung: Unterbrechung der automatischen Umleitung, Anzeige des Fortschritts und Möglichkeit, sich in einem neuen Tab erneut anzumelden
- Korrektur der Umleitungen alter Links zu Support-Tickets und VMware- und OpenIaaS-Hosts

## v4.52.2 — 2026-10-09

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Möglichkeit, den letzten Storage-Cluster von einem Hypervisor-Cluster zu trennen

## v4.52.1 — 2026-10-07

### [Commandes](/console/orders)
- Korrektur der Bestellung zur Vergrößerung der Größe eines Datastores

### [LLMaaS](/llmaas)
- Korrektur der Gesamtkosten des LLMaaS-Verbrauchs, die höher als die Summe des Diagramms waren (Verbräuche werden nun pro UTC-Tag angezeigt)

## v4.52.0 — 2026-10-06

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Wiederherstellung einer virtuellen Maschine, deren Festplatten auf mehrere Datastores verteilt sind: Auswahl eines Ziel-Datastores für jeden Quell-Datastore

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Tab Snapshots: Identifikation des Typs jedes Snapshots (manuell, Backup, Replikation, verwaist)
- Neuplatzierung einer virtuellen Maschine: Möglichkeit, den ursprünglichen Host beizubehalten und nur den Storage zu migrieren, nun auch auf einem Single-Host-Pool verfügbar
- Korrektur des Häkchens „cloud-init-Konfiguration nach dem Start löschen", das beim Deployment einer virtuellen Maschine per Template keine Wirkung hatte

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Master-Host: Entfernung der Wartungsaktionen und Angabe des Weges zu dessen Löschung (Löschung des zugehörigen Pools)
- Storage: Wartungsmodus aktivieren und beenden für einen Block Storage aus der Konsole

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Backup-Reports: Die Ausführungen einer Richtlinie sind nach Startdatum sortiert, von der neuesten zur ältesten
- Backup-Reports: Verschiedene Korrekturen auf dem Bildschirm (Aktualisierung, Sortierung und Paginierung der Ausführungen)

### [Marketplace](/marketplace)
- Deployment eines Images: Voraufüllung der cloud-init-Konfiguration (user-data und Netzwerkkonfiguration), die vom Image bereitgestellt wird, vor dem Deployment änderbar

## v4.51.0 — 2026-09-18

### [Console — Organisation](/console/iam/concepts)
- Hinzufügen einer Spalte „Typ" (SecNumCloud / Legacy) in der Tenant-Liste
- Der Favorit eines Tenants wird nun durch ein Badge „Favorit" in der Tenant-Liste angezeigt

### [Identité & Accès (IAM)](/console/iam)
- Klärung der Auswirkungen der Neuregistrierung eines Benutzers: Das Bestätigungsdialogfenster gibt an, dass eine neue Registrierungs-E-Mail gesendet wird

### [Support](/console)
- Wiederanzeige des Support-Informationen-Blocks im Organisationsmodus

### [Métriques](/console/metrics/concepts)
- Korrektur der Legenden der Metrik-Diagramme der virtuellen Maschinen

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Korrektur des vMotion-Wizards: Die Schaltfläche „Weiter" blieb nach einem Host-Kompatibilitätsfehler blockiert, wenn zu einem vorherigen Schritt zurückgegangen wurde
- Weiterleitung der System-Tastenkürzel (Alt+Tab, ⌘, Esc…) an die Konsole der virtuellen Maschine im Vollbildmodus (Keyboard Lock API, Chromium-Browser)
- Korrektur der VMware-Konsole (WMKS): Alt+Tab ließ die Alt-Taste auf der virtuellen Maschine als gedrückt gelten

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Klärung der Warnung bei der Verschiebung einer virtuellen Festplatte: Die zugehörigen virtuellen Maschinen werden nicht mehr als ausgesetzt angekündigt, nur bestimmte Aktionen sind vorübergehend nicht verfügbar

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Detailansicht eines Pools: Anzeige und Verwaltung von Block Storage aus Compute und von Hosts aus Storage (kreuzweise Tabs)

## v4.50.0 — 2026-09-10

### [Console](/console)
- Aktualisierung der angezeigten Quoten-Einheiten (GiB)

### [Console — Organisation](/console/iam/concepts)
- Anzeige des Vorbereitungsfortschritts eines Tenants bei dessen Erstellung

### [Commandes](/console/orders)
- Hinzufügen der Bestellung zur Löschung einer öffentlichen VPC-IP
- Hinzufügen der Bestellung zur Löschung einer Private-Backbone-IP

### [VPC](/network/vpc)
- Anzeige des Konfigurationsstatus und Auswahl einer statischen IP bei Operationen an virtuellen Maschinen
- Möglichkeit, ein VPC-Netzwerk auszuwählen und darin eine statische IP zu konfigurieren, in allen Formularen, die eine Netzwerkkonfiguration an einer virtuellen Maschine erfordern (Erstellung, Deployment, Migration, Wiederherstellung, Export)

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen der Spalte „Fabric" im Netzwerk-Tab eines Bare-Metal-Servers

## v4.49.1 — 2026-09-03

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Die Aktion „Öffentliche IP zuordnen" im Tab „Netzwerkkarten" ist ausgegraut, wenn das Gateway des VPC nicht aktiviert ist

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Die Aktion „Öffentliche IP zuordnen" im Tab „Netzwerkkarten" ist ausgegraut, wenn das Gateway des VPC nicht aktiviert ist

### [VM Instances](/public_cloud/vm_instances)
- Die Aktion „Öffentliche IP zuordnen" im Tab „Netzwerkkarten" ist ausgegraut, wenn das Gateway des VPC nicht aktiviert ist

## v4.49.0 — 2026-08-31

### [Console](/console)
- Automatischer Start des Willkommens-Tutorials bei der ersten Anmeldung eines Benutzers
- Entfernung der Fehlerbenachrichtigungen beim Laden des Dashboards, wenn die Umgebungen nicht provisioniert sind

### [Console — Organisation](/console/iam/concepts)
- Anzeige des Aktivierungspreises eines Tenants im Erstellungsdialog, im Organisationsmodus

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Zuordnung und Entzug einer öffentlichen IP aus dem Tab „Netzwerkkarten" einer an ein VPC angeschlossenen virtuellen Maschine

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Anzeige des Blade-Typs statt dessen Beschreibung in der „Klasse" der Cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Die Anzahl der beim Resize einer virtuellen Maschine vorgeschlagenen vCPUs ist nun durch deren maximale Kapazität begrenzt
- Zuordnung und Entzug einer öffentlichen IP aus dem Tab „Netzwerkkarten" einer an ein VPC angeschlossenen virtuellen Maschine

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Anzeige des Blade-Typs statt dessen Beschreibung in der „Klasse" der Pools

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Hinweis bei der Wiederherstellung, dass die ursprüngliche virtuelle Maschine nicht ersetzt wird: Eine neue, datierte virtuelle Maschine wird erstellt

### [VM Instances](/public_cloud/vm_instances)
- Ausblenden der Felder und explizite Meldung, wenn kein Speicher verfügbar ist, beim Hinzufügen und bei der Erweiterung einer Festplatte
- Zuordnung und Entzug einer öffentlichen IP aus dem Tab „Netzwerkkarten" einer an ein VPC angeschlossenen virtuellen Maschine
- Möglichkeit, ein benutzerdefiniertes Template auszuwählen (freie vCPU und RAM, innerhalb der Grenzen der Instanzfamilie) bei der Erstellung, Wiederherstellung und beim Resize einer VM Instance

### [Bare Metal](/iaas_bare-metal)
- Anzeige des Blade-Typs statt dessen Beschreibung in der „Klasse" der Bare-Metal-Server

### [Réseau](/network/network_overview)
- Reservierung von Interco-IPs: Blockierung der Netzwerk- und Broadcast-Adressen und Indikator „Reserviert" auf reservierten IPs

### [VPC](/network/vpc)
- Die Schaltfläche „Neues VPC" in der Liste ist nun ausgegraut, wenn das VPC-Limit erreicht ist

## v4.48.0 — 2026-08-13

### [Console](/console)
- Verbesserung der Persistenz der Sprachauswahl, nun an das Benutzerprofil gebunden

### [Console — Organisation](/console/iam/concepts)
- Die Produkte eines Tenants werden nun danach gruppiert, ob sie modifizierbar, nicht deaktivierbar oder nicht verfügbar sind, mit dem Grund der Sperrung

### [Gestionnaire des coûts](/console/billing/concepts)
- Die Sektion Kostenmanager wird nicht mehr auf dem Organisations-Dashboard angezeigt, wenn die Organisation nicht berechtigt ist
- Anzeige einer Fehlerkarte statt eines Nullwerts, wenn die Abrufung der Verbräuche auf dem Organisations-Dashboard fehlschlägt
- Die Zeilen des Support-Plans werden nun unter „Support" in den Kosten pro Tenant zusammengefasst, statt unter einem Tenant „Unbekannt"

### [Commandes](/console/orders)
- Explizite Meldung, wenn nicht genügend Speicherplatz für einen Speichertyp verfügbar ist, bei der Bestellung einer Verfügbarkeitszone oder eines Pools

### [Support](/console)
- Die Beschreibungen und die Post-Incident-Reports werden nun formatiert (Markdown) auf der Seite Incidents
- Die globalen Support-Meldungen werden nun im Organisationsmodus angezeigt

### [VM Instances](/public_cloud/vm_instances)
- Die geschätzten Kosten, die bei der Erstellung einer VM Instance angezeigt werden, sind nun monatlich, auf Basis von 730 h/Monat

### [VPC](/network/vpc)
- Der Name des VPC wird nun vor dem Namen des Netzwerks in den Netzwerk-Auswahlfeldern angezeigt
- Der Name des VPC steht nun vor dem Namen des Netzwerks im Tab Netzwerkkarten der virtuellen Maschinen
- Harmonisierung der Farben der VPC-Typ-Labels (gemeinsam genutzt, dediziert) mit denen der Netzwerke
- Die Option VM Instances ist nun im Formular zur Zuordnung einer statischen IP verfügbar
- Netzwerkadapter, die bereits einer statischen IP zugeordnet sind, werden nun im Zuordnungsformular ausgegraut

### [Object Storage](/storage/oss)
- Auswahl des Adressierungsstils (path-style oder virtual-hosted) bei der Generierung eines Freigabelinks für eine Datei
- Warnung für Buckets, deren Name nicht DNS-kompatibel ist: Nur der path-style-Zugriff ist möglich

### [Marketplace](/marketplace)
- Nur die mit dem ausgewählten Image kompatiblen Verfügbarkeitszonen werden nun beim Deployment aus dem Marketplace vorgeschlagen
- Der Preis eines Marketplace-Produkts, das als VM Instance deployed wird, gibt nun an, dass er nach CPU, RAM und Speicher berechnet wird

### [Housing (Colocation)](/housing)
- Hinzufügen der Interface-Typen 1000BASE-SX und 10GBASE-SR zur Platzreservierung in der Colocation

## v4.47.0 — 2026-07-30

### [Console](/console)
- Die Swagger-Dokumentation des Moduls Bestellungen ist nun verfügbar

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Beim Deployment einer virtuellen Maschine werden nun nur die deploybaren Elemente des Katalogs (OVF und virtuelle Maschinen-Templates) vorgeschlagen

### [VM Instances](/public_cloud/vm_instances)
- Die geschätzten Kosten (stündlich) werden nun bei der Erstellung einer Instanz angezeigt, mit der Aufschlüsselung nach Position (vCPU, RAM, Festplatten)

### [VPC](/network/vpc)
- Bei der Bestellung eines neuen VPC können Sie nun zwischen einer Bereitstellung in einer dedizierten Umgebung (Ihre OpenIaaS-Infrastruktur) oder in einer geteilten Umgebung wählen (vorausgesetzt, dass das Produkt VM Instances abonniert wurde)

### [Object Storage](/storage/oss)
- Großbuchstaben werden nun in Bucket-Namen abgelehnt, gemäß den Benennungsregeln

### [Marketplace](/marketplace)
- Sie können nun eine VM Instance (Public Cloud) direkt aus dem Produktkatalog eines Marketplace-Produkts bereitstellen

## 2026-07-27 — Verwaltete Datenbanken (Preview)

### [Verwaltete MariaDB](/managed_mariadb)
- Das Bereitstellungsmodell Distributed wurde in MultiAZ umbenannt
- Die Instanzvorlagen reichen nun bis 6X-Large (32 vCPU und 128 Gio Speicher) und der Speicher ist online erweiterbar bis 512 Gio
- Veröffentlichung der Dimensionierungsempfehlungen, die die Kalibrierung der Engine-Parameter erläutern, mit einer Warnung zur Aktivierung von `performance_schema` unterhalb der Vorlage X-Large
- Die Wiederherstellung zu einem bestimmten Zeitpunkt wird nicht mehr angeboten: Die Sicherungen basieren nun auf täglichen physischen Sicherungen und logischen Exporten, ohne kontinuierliche Archivierung der Transaktionsprotokolle

### [Verwaltetes PostgreSQL](/managed_postgresql)
- Neue Architektur auf Basis des Kubernetes-Operators CloudNative-PG und des Backup-Plugins Barman Cloud
- Drei Bereitstellungsmodelle: StandAlone als Einzelinstanz, Replica als drei asynchron replizierte Instanzen mit automatischem Failover, und Enterprise als drei synchron replizierte Instanzen auf mindestens zwei Knoten, wobei die Ausdauer ohne Blockade bei Knotenverfügbarkeit gewährleistet ist
- Deklarative Bereitstellung über Kubernetes-Custom Resources, nutzbar über Terraform oder Helm, und nativer Export der Metriken nach Prometheus

## v4.46.0 — 2026-07-24

### [Konsole — Organisation](/console/iam/concepts)
- Sie können nun einen Tenant direkt von der Seite Tenants aus erstellen, indem Sie die zugehörigen Produkte auswählen

### [Konsole — Aktivitäten](/console)
- Die Aktivitätsprotokolle können nun nach Modul gefiltert werden

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkschnittstellen einer an einen VPC angeschlossenen virtuellen Maschine angezeigt
- Ein Tab „Status" ist nun in den Details einer virtuellen Maschine verfügbar, erreichbar aus der Liste

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun eine VMware-Replikation zwischen Verfügbarkeitszonen bestellen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Liste der Netzwerkschnittstellen einer an einen VPC angeschlossenen virtuellen Maschine zeigt nun die öffentliche IP-Adresse an
- Ein Tab „Status" ist nun in den Details einer virtuellen Maschine verfügbar, die aus der Liste geöffnet wurde

### [VM Instances](/public_cloud/vm_instances)
- Die öffentliche IP-Adresse wird nun in der Liste der Netzwerkadapter einer an einen VPC angeschlossenen Instanz angezeigt
- Ein Tab „Status" ist nun in den Details einer Instanz verfügbar, erreichbar aus der Liste

### [Housing (Colocation)](/housing)
- Die Colocation-Bestellungen sind nun verfügbar: Platzreservierung, Installation und Demontage von Geräten
- Die Colocation-Eingriffsbestellungen sind nun verfügbar: technische Begleitung und Smart Hands
- Die Colocation-Bestellungen für Verkabelung und Entkabelung (CPE) sind nun verfügbar
- Colocation-Bestellungen, die nicht über die Konsole unterstützt werden, werden nun klar gekennzeichnet, mit einer Aufforderung, den Support zu kontaktieren

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- Die Erstellung einer Instanz basiert nun auf der Auswahl eines Systemimages, das die Vorlagen ersetzt

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bei der Konfiguration der Kerne pro Socket einer OpenIaaS-virtuellen Maschine wird die Prozessor-Topologie (Anzahl der Sockets und Kerne pro Socket) nun explizit angezeigt

### [LLMaaS](/llmaas)
- Der Mindestbetrag für LLMaaS-Credits wurde geändert; siehe den [offiziellen Preisverzeichnis Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

## v4.45.3 — 2026-07-21

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei der Bereitstellung einer virtuellen Maschine wird nun die Meldung „Keine Vorlage verfügbar" angezeigt, wenn der Katalog leer ist

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bei der Bereitstellung einer virtuellen Maschine wird nun die Meldung „Keine Vorlage verfügbar" angezeigt, wenn der Katalog leer ist

## v4.45.2 — 2026-07-17

### [Konsole](/console)
- Kleinere technische Verbesserungen

## v4.45.0 — 2026-07-10

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Während einer blockierenden Operation zeigen virtuelle Maschinen nun einen expliziten Status an: Sicherung, Snapshot oder Wiederherstellung in Bearbeitung
- Die CPU-Bearbeitung passt sich nun an die Option für CPU-Hot-Add und den Zustand der virtuellen Maschine an

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Während einer blockierenden Operation zeigen virtuelle Maschinen nun einen expliziten Status an (Sicherung, Snapshot oder Wiederherstellung in Bearbeitung)
- Die Details einer virtuellen Maschine zeigen nun eine Nutzungsübersicht (CPU, RAM, Speicher)

### [VM Instances](/public_cloud/vm_instances)
- Instanzen zeigen nun während einer blockierenden Operation einen expliziten Status an (Sicherung, Snapshot oder Wiederherstellung in Bearbeitung)
- Die Sofortnutzungs-Metriken (CPU, RAM, Speicher) werden nun für jede Instanz angezeigt
- Die Eindeutigkeit des Namens wird nun sowohl bei der Erstellung als auch bei der Wiederherstellung einer Instanz geprüft

### [Netzwerk](/network/network_overview)
- Bei einer Bestellung mit einem Propagationsschritt werden neue Netzwerke erst bei der finalen Bestätigung der Bestellung erstellt

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- Der Netzwerktyp (privates Backbone) wird nun auf den Netzwerkadaptern einer Instanz angezeigt, auch ohne die VPC-Funktionalität

## v4.44.1 — 2026-07-02

### [Konsole](/console)
- Kleinere technische Verbesserungen

## v4.44.0 — 2026-07-02

### [Bestellungen](/console/orders)
- Die Infrastruktur-Bereitstellungsaktionen berücksichtigen nun die Geschäftsrollen (Compute, Netzwerk, VPC, Bare Metal …) ergänzend zu den Bestellrechten

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Das Tracking des Sendevorgangs von ISO- und OVF-Dateien wurde verbessert und es ist nun möglich, einen laufenden Versand abzubrechen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Das Tracking des Sendevorgangs von ISO- und XVA-Dateien wurde verbessert und es ist nun möglich, einen laufenden Versand abzubrechen

### [VM Instances](/public_cloud/vm_instances)
- Die Diskgrößen akzeptieren keine Dezimalwerte mehr, weder bei der Erstellung einer Instanz noch beim Hinzufügen oder Erweitern eines Datenträgers
- Die Verarbeitungsindikatoren für Instanzen und deren Ressourcen werden nun korrekt nach einem Seiten-Refresh wiederhergestellt

### [VPC](/network/vpc)
- Von der Netzwerkkarte einer an ein VPC-Netzwerk zugewiesenen virtuellen Maschine aus können Sie nun direkt auf den betreffenden VPC zugreifen (VMware, OpenIaaS und VM Instances)
- Bestimmte VPC-Bestellungen können nun parallel ausgeführt werden: Hinzufügen eines Gateways während der Erstellung eines privaten Netzwerks (und umgekehrt), sowie gleichzeitige Löschung mehrerer privater Netzwerke

## 2026-06-30 — Metriken-API

### [Metriken](/console/metrics/concepts)
- Ein Zugriffstoken kann nun die Verfügbarkeit des Metrikdienstes über den API-Endpunkt `HEAD /v1/configuration` überprüfen

## v4.43.0 — 2026-06-30

### [Konsole](/console)
- Die Netzwerkauswahlfelder unterscheiden nun visuell zwischen VPC-Netzwerken und privatem Backbone
- Ein interaktives Tutorial ist nun auf der Seite Benutzer verfügbar

### [Konsole — Aktivitäten](/console)
- Sie können nun die Details einer Aktivität einsehen, indem Sie deren Zeile in den Listen Recent und Archiviert aufklappen
- Jede Aktivität verfügt nun über eine eigene Detailseite, erreichbar über einen direkten Link
- Die Details einer Aktivität sind nun aus den Erfolgs- und Fehlerbenachrichtigungen erreichbar
- Sie können nun das vollständige JSON einer Aktivität einsehen, kopieren oder herunterladen
- Die Liste der archivierten Aktivitäten kann nun nach Erstellungsdatum sortiert werden

### [Bestellungen](/console/orders)
- Die Anzeige des Bestellfortschritts wurde überarbeitet

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Details einer virtuellen Maschine werden nun in einer neuen Ansicht angezeigt
- Bei der Online-Änderung wird die Konsistenz zwischen CPU und Kernen pro Socket geprüft: Warnungen werden angezeigt und ungültige Werte werden nicht akzeptiert

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Sie können nun die Löschung einer IaaS-Umgebung anfordern

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Eine neue Detailansicht ist für virtuelle Maschinen verfügbar
- Sie können nun die Liste der virtuellen Maschinen nach Verfügbarkeitszone (AZ) filtern

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Die Seite eines Storage Repository zeigt nun das Datum des Snapshot eines Datenträgers an

### [VM Instances](/public_cloud/vm_instances)
- Die Details einer Instanz werden in einer neuen Ansicht angezeigt
- Die Schaltfläche „Sicherung jetzt starten" ist nun deaktiviert, wenn die Sicherung nicht verfügbar ist

### [VPC](/network/vpc)
- Die Beschreibung der öffentlichen IP-Adresse wird nun bei ihrer Zuordnung zu einem privaten Netzwerk angezeigt

### [Object Storage](/storage/oss)
- Sie können nun eine Beschreibung zu den erlaubten IP-Adressen (Whitelist) eines Buckets hinzufügen

## v4.42.0 — 2026-06-22

### [Konsole](/console)
- Der Abschnitt „Datenschutz" wurde aktualisiert

### [Object Storage](/storage/oss)
- Die Verfügbarkeit des TLS-Wildcard-Zertifikats für den S3-Zugriff im Host-Style wird nun angezeigt
- Sie können nun eine Datei über S3 aus einer vorab signierten URL hochladen
- Sie können nun Versionierung auf einem Bucket aktivieren
- Sie können nun die Versionen einer Datei verwalten

## v4.41.1 — 2026-06-11

### [Bestellungen](/console/orders)
- Das verfügbare Maximum bei der Bestellung eines Block Storage wurde aktualisiert

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Die Meldungen zu den Beständen sind nun präziser bei der Bestellung von Hypervisoren oder der RAM-Erweiterung eines Clusters

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Hinzufügen eines vorhandenen Datenträgers zu einer virtuellen Maschine wird die UUID des Datenträgers nun angezeigt, wenn mehrere Datenträger denselben Namen tragen

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Eine Warnung wird nun bei der Anfrage zur Aktualisierung des Master-Hosts eines Pools angezeigt

### [VPC](/network/vpc)
- Die Bestellung eines VPC erfordert nun, dass eine OpenIaaS-Verfügbarkeitszone bereitgestellt wurde

## 2026-06-06 — MCP-Server der Konsole

- Authentifizierungshilferessource, die die Erlangung eines persönlichen Zugriffstokens und das erwartete Header-Format beschreibt; Authentifizierungsfehler geben nun die Ursache und das weitere Vorgehen an
- Konfigurationsänderung mit Auswirkung: Die in der Serverkonfiguration eingetragene API-URL muss nun das Segment `/api` enthalten, dies ist vor dem Deployment dieser Version zu aktualisieren, andernfalls treten 404-Fehler auf. Die URL wird beim Start geprüft und die private öffentliche Schlüssel-Infrastruktur wird unterstützt

## 2026-06-05 — MCP-Server der Konsole

- Abfrage des Namens und der Version des bereitgestellten Servers

## v4.40.0 — 2026-06-02

### [Konsole](/console)
- Ein interaktiver Onboarding-Pfad ist nun verfügbar

### [Konsole — Organisation](/console/iam/concepts)
- Der Kostenmanager ist nun in der Organisationsansicht verfügbar
- Die Organisationsansicht verfügt nun über eine dedizierte Darstellung

### [Bestellungen](/console/orders)
- Der Netzwerkschritt erscheint nicht mehr in Bestellungen, wenn nur das Produkt VPC aktiviert ist

### [Support](/console)
- Die Support-Pläne und -Kontakte wurden aktualisiert

### [Support-Tickets](/console)
- Die Managed-Service-Funktionalitäten wurden aus den Support-Tickets entfernt

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die Funktionalitäten der öffentlichen Inhaltsbibliothek wurden entfernt

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Der Standardwert des CloudInit-Schritts wurde für OpenIaaS-Bereitstellungen aus dem Marketplace aktualisiert
- Das Senden von Sonderzeichen aus der Zwischenablage der virtuellen Maschinen-Konsole wurde verbessert

### [Netzwerk](/network/network_overview)
- Sie können nun die Beschreibung einer IP-Adresse löschen
- Sie können nun das Feld `description` bei der Erstellung eines virtuellen Netzwerks ausfüllen
- Sie können nun das Feld `description` bei der Änderung eines virtuellen Netzwerks ausfüllen

### [VPC](/network/vpc)
- Die Beschreibung einer VPC-Floating-IP wird nun angezeigt
- Sie können nun die Beschreibung einer VPC-Floating-IP ändern

## 2026-05-25 — MCP-Server der Konsole

- Jede Berechtigungsverweigerung gibt nun das betreffende Produkt und den exakten Namen der zu aktivierenden Berechtigung auf dem persönlichen Zugriffstoken an

## 2026-05-24 — MCP-Server der Konsole

- Support-Verwaltung aus einem Agent: Ticketliste und -details, Erstellung, Kommentar, Schließung, Abfrage geplanter Wartungen und deren Kategorien, Tenant-Vorfälle und Plattform-Vorfälle
- Option zur Zerstörung nach dem Start bei der Bereitstellung aus dem Marketplace
- Geführter Pfad zur Bereitstellung einer Linux-virtuellen Maschine
- Direkt abrufbare Ressourcen: Glossar der IaaS-OpenSource-Begriffe, Topologie eines Pools mit Hosts, Storage-Repositories, Netzwerken und Indikatoren in einer einzigen Ansicht, und Marketplace-Katalog gefiltert auf IaaS OpenSource

## 2026-05-23 — MCP-Server der Konsole

- Durchsuchung des Marketplace-Katalogs mit Filtern, und technische Datenblätter IaaS OpenSource (XVA) und VMware (OVF) mit Details zu Prozessoren, Speicher, Datenträgern und exakten Namen der Netzwerkschnittstellen
- Bereitstellung einer IaaS-OpenSource-virtuellen Maschine aus einem Katalogelement, idempotent nach Name
- Steuerung der Stromversorgung von IaaS-OpenSource-virtuellen Maschinen — Einschalten, Ausschalten, Neustart, Pause, Suspendierung und Wiederaufnahme — idempotent nach Zustand
- Tracking langer Operationen über die Aktivitäten

## 2026-05-22 — MCP-Server der Konsole

- Erweiterte Abfrage der IaaS OpenSource: Pools, Hosts, virtuelle Maschinen, Snapshots, Netzwerkadapter mit Erkennung doppelter MAC-Adressen, virtuelle Datenträger und Replikationsstatus, all diese Operationen sind nur lesend
- Serverseitig anwendbare Filter auf all diesen Listen

## v4.39.2 — 2026-05-22

### [Netzwerk](/network/network_overview)
- Sie können nun den PTR-Eintrag einer öffentlichen IP-Adresse oder einer Interconnect-IP-Adresse löschen

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die Benennungsregeln für Snapshots virtueller Maschinen wurden geändert

### [Bare Metal](/iaas_bare-metal)
- Sie können nun die Beschreibung eines Blattes ändern

### [Netzwerk](/network/network_overview)
- Sie können nun den PTR-Eintrag einer Interconnect-IP-Adresse ändern

## v4.39.0 — 2026-04-23

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Vorhandene Datenträger werden nun beim Hinzufügen eines neuen Datenträgers angezeigt
- Beim Verschieben (vMotion) einer virtuellen Maschine im Modus „nur Compute-Ressource" ist es nun möglich, einen Cluster auszuwählen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Bestehende Datenträger werden nun beim Hinzufügen eines neuen Datenträgers angezeigt

### [VM-Instanzen](/public_cloud/vm_instances)
- Die Liste der VM-Instanzen kann nun im CSV-Format exportiert werden
- Die Darstellung der Häufigkeit einer Sicherungsrichtlinie wurde überarbeitet

### [Bare Metal](/iaas_bare-metal)
- Die Auswahl der Netzwerke ist nun bei der Propagation eines Netzwerks auf einem Bare Metal obligatorisch

## 2026-04-20 — Verwaltete Datenbanken (Preview)

### [Verwaltete MariaDB](/managed_mariadb)
- Veröffentlichung der Engine-Parameter, die mit jeder Instanzvorlage verknüpft sind: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` und `table_open_cache`
- Überarbeitung der Instanzvorlagen: das Limit wurde auf 3X-Large (8 vCPU und 32 Gio Speicher) reduziert und die maximale hot-expandierbare Speicherkapazität wurde von 512 Gio auf 128 Gio reduziert

### [Verwaltete PostgreSQL](/managed_postgresql)
- Veröffentlichung der Engine-Parameter, die mit jeder Instanzvorlage verknüpft sind: `shared_buffers`, `effective_cache_size`, `work_mem` und `max_connections`
- Überarbeitung der Instanzvorlagen: das Limit wurde auf 3X-Large (8 vCPU und 32 Gio Speicher) reduziert und die maximale hot-expandierbare Speicherkapazität wurde von 512 Gio auf 128 Gio reduziert

## v4.38.1 — 2026-04-18

### [VM-Instanzen](/public_cloud/vm_instances)
- Die vorgeschlagenen Netzwerke werden nun sowohl bei der Erstellung einer Instanz als auch bei der Änderung einer Netzwerkkarte gefiltert

## v4.38.0 — 2026-04-17

### [Identität & Zugriff (IAM)](/console/iam)
- Sechs neue Berechtigungen sind verfügbar: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` und `public_cloud_vm_instances_console_access`
- Der Name des betroffenen Produkts wird nun am Anfang der Beschreibung jeder Berechtigung angezeigt

### [Kostenmanager](/console/billing/concepts)
- Die Oberfläche des Kostenmanagers wurde verbessert
- Die in den Verbrauchsdiagrammen angezeigte Einheit wurde aktualisiert

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Beim Bereitstellen einer virtuellen Maschine wurde der Schritt zur Auswahl eines Marketplace-Images überarbeitet

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Sie können nun die Darstellung der Katalogseite zwischen Raster und Tabelle umschalten
- Der Schritt zur Auswahl eines Marketplace-Images beim Bereitstellen einer virtuellen Maschine wurde aktualisiert

### [VM-Instanzen](/public_cloud/vm_instances)
- Das Dashboard zeigt nun die Quotenverwendung der VM-Instanzen an
- Eine neue Seite zeigt die Liste der VM-Instanzen
- Sie können nun eine neue Instanz erstellen
- Sie können nun die Datenträger, Netzwerkkarten und Snapshots einer Instanz einsehen und verwalten
- Sie können nun die Kapazitäten einer Instanz aktualisieren und ihren Status ändern
- Sie können nun auf die Konsole einer Instanz zugreifen

### [LLMaaS](/llmaas)
- Die Preisdarstellung in der Verbrauchsansicht und das Formular für die Kreditaufladung wurden aktualisiert

## 2026-04-15 — Verwaltete Datenbanken (Preview)

### [Verwaltete MariaDB](/managed_mariadb)
- Preview-Einführung der verwalteten MariaDB: StandAlone- und Distributed-Modelle als Drei-Knoten-Cluster hinter einem Proxy, replizierter Speicher über drei Verfügbarkeitszonen und Verfügbarkeitsgarantie von 99,9 %

### [Verwaltete PostgreSQL](/managed_postgresql)
- Preview-Einführung der verwalteten PostgreSQL: StandAlone- und Distributed-Modelle als Drei-Knoten-Cluster hinter einem Proxy, synchrone Multi-Zone-Replikation ohne Datenverlust und Punkt-in-Time-Wiederherstellung

## v4.37.0 — 2026-04-02

### [Kostenmanager](/console/billing/concepts)
- Hinzufügen des voraussichtlichen Betrags auf der Verbrauchsseite für das Diagramm und den Trend
- Visuelle Verbesserung bei Fehlern oder zu wenig Daten zum Verbrauch des aktuellen Monats

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung des Formulars zum Bereitstellen einer virtuellen Maschine aus einem Katalogeintrag
- Hinzufügen der Möglichkeit, den Anzeigetyp (Raster oder Tabelle) von der Katalogseite aus zu ändern

## v4.36.0 — 2026-03-27

### [Konsole](/console)
- Aktualisierung der Diagramme für Metriken und Verbrauch

### [Kostenmanager](/console/billing/concepts)
- Hinzufügen der Seite Kostenmanager
- Möglichkeit, die Kosten des aktuellen Monats anzuzeigen
- Möglichkeit, die Kosten über einen Zeitraum anzuzeigen und die Trends zu vergleichen

### [Bestellungen](/console/orders)
- Blockierung der Deprovisionierung eines Hypervisor-Clusters, wenn ein Speichercluster angehängt ist

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen von Filtern und Sortierungen auf der Datenträgerliste aus den Details eines Block Storages

### [VPC](/network/vpc)
- Verbesserung der Oberfläche beim Laden von Daten in Formularen

## v4.35.4 — 2026-03-18

### [Konsole](/console)
- Verbesserung der Wiederverbindung zu WebSockets

### [Support](/console)
- Hinzufügen einer Fallback-Lösung für die Erstellung eines Support-Tickets, wenn die WebSockets getrennt sind

## v4.35.3 — 2026-03-17

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Aktualisierung der Datenträgerabholung beim Laden der Replikate aus dem Tab Replikation

## v4.35.0 — 2026-03-11

### [Bestellungen](/console/orders)
- Hinzufügen des Befehls zur Löschung eines cpool/spool-Mappings
- Hinzufügen des Befehls zur Deprovisionierung eines VPC-Privatnetzes
- Änderungen am Befehl zur Deprovisionierung eines Bare-Metal-Volumens, die Löschung kann nun aus der Volumenliste bestellt werden
- Hinzufügen des Befehls zur Löschung eines Bare-Metal-Volumen-Mappings
- Hinzufügen des Befehls zur Deprovisionierung eines VPC
- Blockierung der Deprovisionierung eines Datastores, wenn er der letzte in einem Datastore-Cluster ist

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, eine RAM-Begrenzung auf einer virtuellen Maschine hinzuzufügen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Aktualisierung des Multi-VMotion von VMware, um VMs von einem Cluster in einen anderen zu verschieben

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen der Möglichkeit, einen Host zu aktualisieren
- Anzeige der Update-Informationen eines Hosts

### [Netzwerk](/network/network_overview)
- Deaktivierung des Buttons zur Löschung der Netzwerkpropagation, wenn keine Propagation bereitgestellt wird

### [LLMaaS](/llmaas)
- Anzeige des Verbrauchs, gruppiert nach Token-Typ

## v4.34.0 — 2026-02-18

### [Konsole](/console)
- Wesentliche Aktualisierung der Rendering-Engine der Anwendung
- Die Menüs VMware und OpenIaaS werden nicht angezeigt, wenn nur das Metrik-Modul aktiviert ist

### [Metriken](/console/metrics/concepts)
- Möglichkeit, von den Seiten Metriken VMware und OpenIaaS im CSV-Format zu exportieren

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Bei einem Verschieben einer virtuellen Maschine ist es nicht möglich, denselben Ziel-Host wie den aktuellen Host der virtuellen Maschine auszuwählen
- Hinzufügen des Buttons 'Neuer Katalog' auf der Seite VMware-Katalog

## 2026-02-04 — MCP-Server der Konsole

- Abfrage der virtuellen Maschinenmodelle, Netzwerke, Hosts und IaaS-OpenSource-Speicherdepots

## 2026-02-03 — MCP-Server der Konsole

- Verfügbarstellung des MCP-Servers (Model Context Protocol) der Konsole, authentifiziert über ein persönliches Zugriffstoken
- Abfrage und Steuerung der VMware-virtuellen Maschinen von einem Agenten: Liste, Detail, virtuelle Datacenter, Einschalten und Ausschalten

## v4.33.0 — 2026-01-21

### [Bestellungen](/console/orders)
- Hinzufügen des Befehls zur Löschung einer Netzwerkpropagation auf OpenIaaS

### [Metriken](/console/metrics/concepts)
- Hinzufügen von Filtern für die Metrik-Seiten VMware und OpenIaaS

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Metrik-Seite 'Virtuelle Maschinen'
- Hinzufügen der Seite mit den Metrik-Details für jede VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Aktualisierung des Modals zum Schließen eines Support-Tickets

### [IaaS VMware — Sicherung](/iaas_vmware)
- Bei der Zuweisung einer Sicherungsrichtlinie auf einen Datenträger wird nun vorgeschlagen, den Datenträger zu inventarisieren, wenn er von der Sicherungslösung nicht erkannt wird

### [Bare Metal](/iaas_bare-metal)
- Die Löschung eines BFS-Volumens auf einem Bare Metal wird nun blockiert, das Volumen wird bei der Löschung des Bare Metals gelöscht
- Bei der Bestellung eines Bare Metals wird das erste Volumen nun in 'BFS-Volumen' umbenannt

## v4.31.0 — 2026-01-07

### [IaaS VMware — Sicherung](/iaas_vmware)
- Aktualisierung der Info-Bubble-Erklärungen zu den verfügbaren Optionen bei der Wiederherstellung einer virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Die mit Sicherungsrichtlinien verknüpften Snapshots sind nun sichtbar
- Anzeige des Hosts, der mit dem Speicherort eines ISO verknüpft ist, beim Upload und von der Katalogseite

### [Object Storage](/storage/oss)
- Anzeige einer erklärenden Karte aus dem Tab Unvollständige MPU, wenn die IP der Konsole nicht autorisiert ist und die Anzeige des Tabs verhindert

### [Marketplace](/marketplace)
- Anzeige der Fehlerkarte beim Zugriff auf eine nicht existierende Marketplace-Seite

## v4.30.1 — 2025-12-16

### [Konsole](/console)
- Verbesserung der Anzeige leerer Fehler durch die Standardanzeige des zurückgegebenen HTTP-Status

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Möglichkeit, eine statische IP an eine benutzerdefinierte MAC-Adresse zu binden

### [LLMaaS](/llmaas)
- Bei den Verbrauchsmetriken: Filterung der Serien mit Werten gleich 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Verbesserung der Synchronisierung der Aktionen auf den VPC-Seiten
- Hinzufügen der Zuordnung einer statischen IP an eine öffentliche IP aus der Liste der statischen IPs

### [Speicher](/storage/oss)
- Hinzufügen der unvollständigen MPU von der Bucket-Seite
- Möglichkeit, eine unvollständige MPU zu löschen

## v4.28.0 — 2025-11-21

### [Konsole](/console)
- Hinzufügen der Möglichkeit, globale Informationsmeldungen anzuzeigen, die in der gesamten Anwendung sichtbar sind

### [Bestellungen](/console/orders)
- Möglichkeit, eine LLMaaS-Kreditaufladung für den Tenant zu bestellen
- Möglichkeit, ein VPC zu bestellen
- Möglichkeit, ein Privatnetz in einem VPC zu bestellen
- Möglichkeit, eine öffentliche IP für das Produkt VPC zu bestellen
- Möglichkeit, das Gateway für ein VPC zu aktivieren
- Hinzufügen der Möglichkeit, die Löschung eines Tenants zu bestellen

### [Metriken](/console/metrics/concepts)
- Verbesserung der Tooltip-Anzeige auf den Metrikdiagrammen: Es ist nun möglich, auf einen Punkt zu klicken, um das Tooltip zu fixieren und alle Daten einzusehen

### [Netzwerk](/network/network_overview)
- Zusammenführung der Seiten Netzwerke und Internet unter einem einzigen Produkt: Privater Backbone
- Hinzufügen der Verwaltung des PTR-Eintrags bei der Änderung einer öffentlichen IP
- Blockierung des Teilens für bestimmte Netzwerktypen

### [VPC](/network/vpc)
- Integration des Produkts VPC
- Hinzufügen einer Seite, die die VPCs auflistet
- Hinzufügen einer Detailseite eines VPC
- Möglichkeit, die Privatnetze, öffentlichen IPs und das Gateway eines VPC zu verwalten
- Möglichkeit, eine statische IP eines VPC-Privatnetzes an eine Netzwerkkarte von VMware oder OpenIaaS zu binden
- Möglichkeit, eine statische IP mit einer öffentlichen IP eines VPC zu verknüpfen

### [LLMaaS](/llmaas)
- Hinzufügen eines Tabs Abrechnung auf der LLMaaS-Seite für Tenants mit aktivierter Vorauszahlung
- Anzeige des verbleibenden Credits für Tenants im Vorauszahlungsmodus, auf dem Dashboard und aus dem Tab Abrechnung

## v4.27.0 — 2025-11-12

### [Bestellungen](/console/orders)
- Hinzufügen einer Überprüfung des verfügbaren Bestands bei der Bestellung von Ressourcen
- Hinzufügen eines Filters nach Bestelltyp und Produkt auf der Bestellliste

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung der Konsole der virtuellen Maschinen. Bessere Tastatursteuerung und Hinzufügen einer Zwischenablage

### [IaaS VMware — Sicherung](/iaas_vmware)
- Hinzufügen einer Warnung auf dem Dashboard für SPP-Sicherungsvsnaps mit zu hoher Auslastung

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Verbesserung der Konsole der virtuellen Maschinen. Bessere Tastatursteuerung und Hinzufügen einer Zwischenablage

### [Marketplace](/marketplace)
- Hinzufügen der Möglichkeit, die technischen Details eines Images anzuzeigen

## v4.26.5 — 2025-11-04

### [Konsole](/console)
- Verbesserung der Größe der Dashboard-Diagramme beim Neugrößen der Fenster

## v4.26.3 — 2025-10-31

### [Metriken](/console/metrics/concepts)
- Änderung des Namens der in den Diagrammen dargestellten Metrik-Exports

## v4.26.0 — 2025-10-22

### [Konsole](/console)
- Hinzufügen eines Buttons zum Kopieren der UUID des aktuellen Bereichs aus dem Benutzerprofil
- Vollständige Überarbeitung des Dashboards
- Hinzufügen einer automatischen Wiederverbindung zur Aktivitätsverfolgung, wenn die Verbindung unterbrochen wird

### [Bestellungen](/console/orders)
- Aktualisierung der Bestellformulare, um sie auf den verschiedenen betroffenen Seiten hinzuzufügen (Beispiel: neuer Datastore von der Seite Speicher)

### [Support](/console)
- Hinzufügen der E-Mail-Adresse der Person, die das Ticket geschlossen hat, in die Bewertung des Support-Tickets

### [Metriken](/console/metrics/concepts)
- Überarbeitung der Metrikabholung für VMware, die URL der Seite ist nun /iaas/metrics
- Hinzufügen eines Tabs für VMware-Infrastrukturmetriken auf dem Bereich Compute
- Hinzufügen eines Tabs für VMware-Infrastrukturmetriken auf dem Bereich Speicher
- Hinzufügen einer Metrik-Seite für OpenIaaS
- Hinzufügen eines Tabs für OpenIaaS-Infrastrukturmetriken auf dem Bereich Compute
- Hinzufügen eines Tabs für OpenIaaS-Infrastrukturmetriken auf dem Bereich Speicher

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der neuen extra_config-Schlüssel (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blockierung der Auswahl eines Hostclusters ohne aktiven Host
- Bei der Erstellung einer VMware-virtuellen Maschine erfolgt die Auswahl des VCenters nun basierend auf der ausgewählten Verfügbarkeitszone
- Hinzufügen von Beschränkungen für Namen und Beschreibungen beim Upload einer Datei auf VMware

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Beim Hinzufügen eines OpenIaaS-Datenträgers werden Speicher, die nicht zum Pool der virtuellen Maschine gehören, nun gefiltert
- Bei einem Snapshot ist die Option zum Erfassen des Speichers nun standardmäßig deaktiviert

### [IaaS OpenSource — Sicherung](/iaas_opensource)
- Hinzufügen der Möglichkeit, eine Sicherung aus dem Tab Sicherungen einer OpenIaaS-virtuellen Maschine auszuführen

### [Netzwerk](/network/network_overview)
- Entfernung der Einschränkung, die die Auswahl mehrerer Netzwerktypen auf der Seite der virtuellen Netzwerke verhinderte

### [Object Storage](/storage/oss)
- Optimierung der Dateiabholung aus einem Bucket

### [PaaS OpenShift](/paas_openshift)
- Hinzufügen einer Seite, die die OpenShift-Cluster auflistet
- Hinzufügen einer Detailseite eines OpenShift-Clusters

### [Marketplace](/marketplace)
- Hinzufügen eines Filters nach UUID und Möglichkeit, die UUID eines Eintrags zu kopieren

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Aktualisierung der Verwendung der erweiterten Konfiguration und der OVF-Eigenschaften beim Bereitstellen einer VMware-virtuellen Maschine

## v4.24.0 — 2025-09-24

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Möglichkeit, ein virtuelles Maschinenimage aus der Liste der virtuellen Maschinen bereitzustellen

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, ein virtuelles Maschinenimage aus der Liste der virtuellen Maschinen bereitzustellen

### [Netzwerk](/network/network_overview)
- Hinzufügen einer Validierung zur Blockierung der Löschung des Netzwerkteilens, wenn das Netzwerk in einem anderen Tenant propagiert ist

### [Marketplace](/marketplace)
- Hinzufügung des Marketplace-Produkts
- Hinzufügung einer Seite, die die im Katalog verfügbaren Lösungen auflistet
- Hinzufügung einer Seite zur Anzeige der Details einer Lösung
- Möglichkeit, ein virtuelles Maschinen-Image in eine OpenIaaS- oder VMware-Umgebung aus den Details einer Lösung bereitzustellen
- Möglichkeit, einen Partner für eine Managed-Services-Lösung zu kontaktieren

## v4.23.0 — 2025-09-12

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügung der Unterstützung für 4 neue extra-configs-Werte

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- HA-Warnung auf den betroffenen VMs nicht anzeigen, wenn das lokale ISO nicht gemountet ist
- Bei der Hinzufügung oder Größenänderung eines Datenträgers angeben, ob das verknüpfte SR für eine Replikationskonfiguration verwendet wird

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Hinzufügung des AZ-Namens auf dem Backup-Bericht

### [Object Storage](/storage/oss)
- Aktualisierung der Informationen zum Lebenszyklus eines Buckets

### [LLMaaS](/llmaas)
- Hinzufügung des LLMaaS-Produkts
- Hinzufügung der Liste der verfügbaren Modelle
- Hinzufügung der Liste der API-Schlüssel mit der Möglichkeit, neue zu erstellen
- Hinzufügung des Verbrauchs nach Modellen und nach Schlüsseln
- Hinzufügung der Details eines Modells
- Möglichkeit, ein Modell zu testen

## v4.22.1 — 2025-09-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Änderung der Warnungen bezüglich der gewählten Datenträgerformat-Konfiguration bei einem VMotion, das den Storage einschließt

## v4.22.0 — 2025-09-02

### [Commandes](/console/orders)
- Hinzufügung der Bestellung zur Löschung einer Netzwerk-Propagation von der Seite aller Bestellungen aus, alle verfügbaren Bestellungen sind nun von dieser Seite aus zugänglich

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Aktualisierung der Bedingungen für die Änderung des Datenträgerformats beim Verschieben einer virtuellen Maschine und Hinzufügung von Informationen zum aktuellen Datenträgerformat bei einer Datenträger-Konfiguration

## v4.21.0 — 2025-08-22

### [Console](/console)
- Aktualisierung der Darstellung, wenn keine Daten erstellt/provisioniert wurden oder wenn ein Fehler bei der Abrufung von Informationen auftritt.

### [Support](/console)
- Öffnen der Support-Modale mit dem zugehörigen Service vorselektiert
- Hinzufügung eines Badges im Menü und in der Navbar, wenn ein Support-Ticket eine Antwort erfordert

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügung der Möglichkeit, die Liste der VMware-Replikate als CSV zu exportieren
- Verbesserung des RAM-Auswahl-Sliders bei bestimmten Bestellungen
- Hinzufügung der Verwaltung der Optionen Static differed and immediate für vMotion

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Blockierung der Löschung eines nicht leeren Clusters oder eines Clusters mit Hosts/Datastores, die sich nicht im Wartungsmodus befinden

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügung der Möglichkeit, die Liste der OpenIaaS-Replikate und der zugehörigen Richtlinien als CSV zu exportieren
- Hinzufügung von Präzisierungen zu den von den virtuellen Maschinen verwendeten Tools (pvDrivers, managementAgent und tools)
- Hinzufügung von Prüfungen für die High Availability (HA)

### [Réseau](/network/network_overview)
- Änderung der Auswahl einer IPv4-Adresse mit einer verfügbaren Liste

## v4.20.0 — 2025-07-29

### [Commandes](/console/orders)
- Hinzufügung von Informationen zu begrenzten Beständen und Nichtverfügbarkeit bezüglich der Compute-Ressourcen bei der Bestellung einer neuen Verfügbarkeitszone

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügung einer VMware-Tools-Option zur Synchronisierung der Uhrzeit mit dem Host
- Aktualisierung der Bedingungen für die Verschlüsselung einer virtuellen Maschine

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Entfernung der Informationen zur letzten Ausführung der Replikationsrichtlinien, die zu Verzögerungen führten
- Verwaltung des TX Checksumming für Netzwerkadapter
- Hinzufügung einer Warnung zur OpenIaaS-Replikation, wenn die Anzahl der AZ kleiner als 2 ist
- Hinzufügung der High Availability (HA) für Pools und virtuelle Maschinen

## v4.19.0 — 2025-07-24

### [Commandes](/console/orders)
- Aktualisierung der Bestellung öffentlicher IPs mit der Möglichkeit, ein IPv6-Präfix zu bestellen
- Aktualisierung der Darstellung der verfügbaren Bestellungen, wenn keine Umgebung provisioniert ist

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügung eines Replikationsfilters auf der Liste der virtuellen Maschinen
- Aktualisierung der Modale zur Erstellung einer virtuellen Maschine

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügung eines Replikationsfilters auf der Liste der virtuellen Maschinen

### [Réseau](/network/network_overview)
- Aktualisierung der Internet-Seite mit der Hinzufügung der IPv6-Verwaltung

## v4.18.0 — 2025-07-15

### [Console](/console)
- Aktualisierung der Darstellung, wenn keine Daten erstellt/provisioniert wurden oder wenn ein Fehler bei der Abrufung von Informationen auftritt.

### [Commandes](/console/orders)
- Aktualisierung der Internet-Schritte bei der Bestellung einer neuen Verfügbarkeitszone oder eines neuen Pools

### [Support](/console)
- Hinzufügung eines Sicherheits-Services für jedes Produkt bei der Erstellung eines Support-Tickets

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügung eines Links von einem auf einem Controller gemounteten ISO zum entsprechenden Element im Katalog

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügung einer OpenIaaS-Replikations-Seite mit der Liste der Replikate und der Replikationsrichtlinien
- Möglichkeit, eine Replikationskonfiguration zu einer OpenIaaS-virtuellen Maschine hinzuzufügen und zu entfernen
- Möglichkeit, eine Replikationsrichtlinie zu erstellen und zu löschen
- Möglichkeit, ein Replikat wiederherzustellen
- Möglichkeit, virtuelle Maschinen im CSV-Format zu exportieren.

## v4.17.0 — 2025-06-20

### [Commandes](/console/orders)
- Möglichkeit, einen OpenIaaS-Pool zu bestellen
- Möglichkeit, die Zuordnung eines bestehenden Volumes zu einem bestehenden Bare Metal von der Bare-Metal-Seite, von der Volume-Seite und von der Bestellungen-Seite aus zu bestellen

### [Support](/console)
- Möglichkeit, eine Datei auf einem Support-Ticket zu löschen
- Die Beschreibung zur Zufriedenheit bei der Schließung eines Tickets ist nun optional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Hinzufügung der englischen Übersetzungen auf der Verbrauchsbericht-Seite des Bestellmenüs

### [Commandes](/console/orders)
- Möglichkeit, die Größenvergrößerung eines Bare-Metal-Volumes zu bestellen
- Möglichkeit, die Größenvergrößerung eines OpenIaaS-Block-Storages zu bestellen

### [Support](/console)
- Überarbeitung der Erstellung eines Support-Tickets
- Darstellung des Markdown auf einem Support-Ticket und Aktualisierung der Anzeigereihenfolge der Kommentare
- Hinzufügung eines Feedbacks bei der Schließung eines Support-Tickets
- Aktualisierung der Darstellung der Piktogramme gemäß der Auswirkung eines globalen Vorfalls

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügung einer Option, um die Konfiguration einer virtuellen Maschine bei einer Wiederherstellung in Produktion auf dem ursprünglichen Cluster beizubehalten

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügung einer Warnmeldung bei unzureichendem Plattenspeicher auf einem Block Storage (90 % genutzt) und Warnung bei Bestellungen

### [Object Storage](/storage/oss)
- Hinzufügung der Beschreibung der S3-Rollen bei der Zuweisung auf einem Bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Anzeige eines Fehlers, wenn ein Netzwerk falsch auf einem Netzwerkadapter einer virtuellen Maschine konfiguriert ist, was auch den Start der virtuellen Maschine verhindert

## v4.15.0 — 2025-05-13

### [Console](/console)
- Anpassung der angezeigten Einheiten auf den Infrastruktur-Ressourcen: GiB (Gibibyte) statt GB (Gigabyte)

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Möglichkeit, einen OpenIaaS-Datenträger zu verschieben
- Möglichkeit, einen OpenIaaS-Datenträger zu verbinden und zu trennen
- Anzeige des verbundenen/getrennten Status eines Datenträgers
- Möglichkeit, die UUID eines Datenträgers, eines virtuellen Netzwerks oder eines Snapshots zu kopieren
- Möglichkeit, den Namen einer virtuellen Maschine bei einer Bereitstellung einer XVA-Datei zu wählen
- Hinzufügung der Möglichkeit, eine Backup-Richtlinie beim Start einer virtuellen Maschine zuzuweisen, wenn sie keine hat.

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Hinzufügung der verfügbaren Aktionen auf einem Datenträger von einem Block Storage

### [Bare Metal](/iaas_bare-metal)
- Hinzufügung der MAC-Adressen auf der Schnittstellen-Tabelle eines Bare Metals
- Hinzufügung einer Seite zu den Details eines Bare-Metal-Volumes

## v4.14.0 — 2025-04-28

### [Console](/console)
- Möglichkeit, Seiten im Menü anzuhften
- Aktualisierung der Darstellung der API-Dokumentationen

### [Commandes](/console/orders)
- Möglichkeit, die Löschung eines OpenIaaS-Block-Storages zu bestellen
- Möglichkeit, die Hinzufügung eines Block Storages zu einem OpenIaaS-Pool zu bestellen
- Möglichkeit, die Löschung eines OpenIaaS-Hosts zu bestellen
- Hinzufügung der Information zum betroffenen Produkt auf der Bestellliste
- Möglichkeit, die Hinzufügung eines Hosts zu einem OpenIaaS-Pool zu bestellen

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Möglichkeit, einen Host in den Wartungsmodus zu versetzen
- Möglichkeit, die Beschreibung eines Modells zu bearbeiten
- Möglichkeit, einen Host beim Start einer virtuellen Maschine auszuwählen
- Hinzufügung einer Eindeutigkeitsregel für die Namen der OpenIaaS-virtuellen Maschinen

## v4.13.0 — 2025-04-08

### [Console](/console)
- Hinzufügung von Statistiken und Kontaktdaten auf der Support-Seite

### [Commandes](/console/orders)
- Überarbeitung der Darstellung der Details einer Bestellung
- Überarbeitung der Darstellung der Bestellauswahl
- Aktualisierung der Darstellung für die Bestellung des ersten Bare Metals, wenn keines vorhanden ist
- Aktualisierung der Bestellung eines Bare Metals mit der Auswahl der Netzwerk-Propagation auf den Schnittstellen des Bare Metals
- Möglichkeit, ein VLAN auf einem Bare Metal zu propagieren
- Möglichkeit, ein Volume zu einem Bare Metal hinzuzufügen
- Möglichkeit, ein Volume von einem Bare Metal zu deprovisionieren
- Möglichkeit, ein Bare Metal zu deprovisionieren

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Hinzufügung eines UUID-kopieren-Buttons auf den VMware-Netzwerken und Katalogen

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügung eines UUID-kopieren-Buttons auf den OpenIaaS-Netzwerken und Katalogen
- Hinzufügung eines UUID-kopieren-Buttons auf einem Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Hinzufügung der Anzeige der Netzwerkschnittstellen und der darauf propagierten Netzwerke auf einem Bare Metal
- Hinzufügen der Aktionen Einschalten, Neustarten und Ausschalten eines Bare Metals

### [Réseau](/network/network_overview)
- Möglichkeit, die Propagations eines Netzwerks auf einem Bare Metal anzuzeigen

## v4.12.0 — 2025-03-25

### [Console](/console)
- Möglichkeit, eine IP-Whitelist von der Zugriffsseite aus zu löschen

### Étiquettes
- Hinzufügung der Tags auf den OpenIaaS-virtuellen Maschinen

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Aktualisierung der Abrufung der API-Empfehlungen zu den Affinitäts-/Anti-Affinitätsregeln eines HostClusters

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Anzeige des Imports eines OpenIaaS-XVA auf der Download-Liste
- Möglichkeit, einen bestehenden Datenträger an eine virtuelle Maschine anzuhängen
- Möglichkeit, einen bestehenden Datenträger von einer virtuellen Maschine zu lösen

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Aktualisierung der Darstellung der Datenträger eines OpenIaaS-Block-Storages

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Aktualisierung der Fehlermeldung beim Zugriff auf die Dateien eines Object-Storage-Buckets

## v4.11.1 — 2025-03-12

### [Commandes](/console/orders)
- Aktualisierung der Namen der Verfügbarkeitszonen bei einer Bestellung
- Änderung des Minimums an Datastores bei der Bestellung eines datastoreClusters

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Wenn das Label-Feld der hostCluster und datastoreCluster auf leer geändert wird, wird der technische Name standardmäßig angewendet

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Wenn das Label-Feld der Pools auf leer geändert wird, wird der technische Name standardmäßig angewendet
- Hinzufügung einer Informationsblase auf der Katalogseite und beim ISO-Import, um anzuzeigen, dass XVA bei der Erstellung einer virtuellen Maschine unterstützt wird

## v4.11.0 — 2025-03-10

### [Commandes](/console/orders)
- Aktualisierung der erlaubten Netzwerktypen bei der Erstellung einer AZ
- Aktualisierung der Mindestressourcen, die bei der Bestellung einer neuen Verfügbarkeitszone zu provisionieren sind

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Anzeige des Namens der virtuellen Maschine im Tab der Konsole für VMware

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Hinzufügung der Label-Verwaltung auf den VMware-Datastore-Clustern und Host-Clustern

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ermöglichen der Bereitstellung einer virtuellen Maschine per XVA-Import für OpenIaaS
- Hinzufügung der Label-Verwaltung auf den OpenIaaS-Pools
- Anzeige des Namens der virtuellen Maschine im Tab der Konsole für OpenIaaS

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Aktualisierung der CPU-Informationen der Hosts und Pools von OpenIaaS

### [Bare Metal](/iaas_bare-metal)
- Hinzufügung der IOPS/TO auf den Bare-Metal-Volumes

## v4.10.0 — 2025-03-04

### [Console](/console)
- Aktualisierung der Links zur neuen öffentlichen Dokumentation

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügung einer Warnung, um die Benutzer bei Duplikaten von MAC-Adressen auf der Liste der virtuellen Maschinen und bei der Erstellung oder Änderung von Netzwerkadaptern zu informieren
- Hinzufügung einer Option, um den Stopp oder Neustart einer virtuellen Maschine zu erzwingen
- Der Speicher wird nicht mehr standardmäßig bei einem Snapshot enthalten, wenn die virtuelle Maschine nicht eingeschaltet ist
- Möglichkeit, einen Datenträger umzubenennen und seine Größe zu ändern
- Hinzufügung der Löschung der ISOs und Modelle von der Katalogseite
- Hinzufügung der Möglichkeit, den Konfigurationsdatenträger „Cloud Init" bei der Bereitstellung einer virtuellen Maschine zu löschen

## v4.9.1 — 2025-02-27

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Möglichkeit, einen Netzwerkadapter auf einer eingeschalteten virtuellen Maschine zu bearbeiten

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Hinzufügung von Einschränkungen für die erlaubten Zeichen in den Namen der OpenIaaS-virtuellen Maschinen

## v4.9.0 — 2025-02-21

### [Console](/console)
- Namen in Tabellen klickbar machen, wenn eine verknüpfte Seite existiert
- Das Öffnen der Konsolen verbessern, um das Öffnen mehrerer Tabs zu vermeiden, wenn mehrere Fenster auf derselben Seite geöffnet sind
- Einen Fehler anzeigen beim Öffnen einer Konsole, wenn der Browser keine Umleitungen auf die Anwendung erlaubt

### [Métriques](/console/metrics/concepts)
- Anzeige der Einheit des RAMs auf der Health-Seite der virtuellen Maschinen

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Blockierung der Erstellung einer virtuellen Maschine, wenn der Platz auf den ausgewählten Block Storages nicht ausreicht
- Leeren der MAC-Adressen standardmäßig bei der Erstellung einer OpenIaaS-virtuellen Maschine

### [Stockage](/storage/oss)
- Möglichkeit, einen S3-Endpunkt in die Zwischenablage zu kopieren

## v4.8.0 — 2025-02-14

### [Commandes](/console/orders)
- Hinzufügung der Bestellung zur Propagation eines Netzwerks auf OpenIaaS-Pools
- Hinzufügung der Netzwerk-Propagation-Bestellungen auf der Seite aller Bestellungen

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Anzeige der Anzahl der zugewiesenen und verfügbaren Datenträger pro Controller auf einer virtuellen Maschine
- Aktualisierung der Bedingungen für die Anzahl der möglichen Datenträger, die auf SCSI-Para-Virtual-Controllern hinzugefügt werden können, abhängig von der Hardware-Version der virtuellen Maschine

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Möglichkeit, Cloud-Init-Optionen bei der Erstellung einer OpenIaaS-Virtuellen Maschine hinzuzufügen
- Anzeige der Laufwerke auf der Seite eines Block Storages
- Möglichkeit, die Boot-Firmware-Konfiguration einer OpenIaaS-Virtuellen Maschine zu aktualisieren
- Möglichkeit, eine OpenIaaS-Virtuelle Maschine zu klonen

### [Netzwerk](/network/network_overview)
- Aktualisierung der Visualisierung der Propagierungen eines Netzwerks und Hinzufügen von OpenIaaS-Propagierungen
- Aktualisierung der Erstellung eines Netzwerks und Möglichkeit, das Netzwerk auf der OpenIaaS-Infrastruktur bereits bei der Erstellung zu propagieren

## v4.7.0 — 2025-02-03

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Der OVF-Export wird blockiert, wenn die virtuelle Maschine verschlüsselt ist

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeige der Beziehungen Datastores-Cluster und Host-Cluster auf den Seiten Berechnung und Speicherung

### [IaaS VMware — Sicherung](/iaas_vmware)
- Änderung der Option für den Start nach der Wiederherstellung für eine SecNumCloud-Umgebung bei der Wiederherstellung im Modus Klon oder Produktion auf einem alternativen Host oder Cluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen der Schaltflächen zum Einhängen und Aushängen eines OpenIaaS-ISO in der Aktionsleiste einer virtuellen Maschine

### [Netzwerk](/network/network_overview)
- Verbesserung der Anzeige der Netzwerk-Propagierungen, wenn Löschanfragen für Propagierungen ausstehen

## v4.6.0 — 2025-01-30

### [Konsole](/console)
- Entfernung der Zeichen, die bei der Autovervollständigung beim Hinzufügen von Beobachtern zur Erstellung eines Support-Tickets angezeigt werden
- Aktualisierung der Anzeige des Menüs und der verfügbaren Seiten für die VMware- und OpenIaaS-Angebote in einer neuen Umgebung ohne provisionierte Verfügbarkeitszonen

### [Konsole — Benachrichtigungen](/console)
- Aktualisierung der Anzeige der Benachrichtigungsabonnements von der Profilseite

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Möglichkeit, eine virtuelle Maschine zu verschlüsseln

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des Exports als Vorlage einer virtuellen Maschine

## v4.5.0 — 2025-01-17

### [Konsole](/console)
- Hinzufügen der Beschreibung bei der Erstellung und Anzeige der Whitelists
- Möglichkeit, die Beschreibung einer Whitelist zu ändern

### [Bestellungen](/console/orders)
- Hinzufügen einer Bestellung für eine neue OpenIaaS-Verfügbarkeitszone
- Hinzufügen einer Bestellung für Bare Metal
- Verknüpfung eines Hypervisor-Clusters mit einem Speicher-Cluster

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Anzeige der verbleibenden Größe in Klammern in den Auswahlbäumen für die Speicherung

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Hinzufügen des Worst-Case-Speicherallokationswerts auf einem VMware-HostCluster

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen des ISO-Uploads auf den OpenIaaS-Katalogen
- Hinzufügen des Verschiebens von OpenIaaS-Virtuellen Maschinen
- Möglichkeit, die Laufwerke und Netzwerke bei der Erstellung einer OpenIaaS-Virtuellen Maschine auszuwählen

### [Bare Metal](/iaas_bare-metal)
- Hinzufügen einer Seite, die Bare-Metal-Instanzen auflistet
- Hinzufügen einer Seite, die Bare-Metal-Volumes auflistet
- Hinzufügen einer Seite mit den Details eines Bare Metals
- Hinzufügen der Möglichkeit, eine Bare-Metal-Konsole zu öffnen

## v4.4.0 — 2025-01-13

### [Konsole](/console)
- Technische Änderungen im Authentifizierungsprozess

## v4.3.0 — 2024-12-19

### [Konsole — Aktivitäten](/console)
- Hinzufügen der Links „Zur Ressource wechseln" auf den Aktivitäten, die mit XOA und Object-Storage verknüpft sind

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Tags und der IP der virtuellen Maschine zum CSV-Export der virtuellen Maschinen

### [IaaS VMware — Sicherung](/iaas_vmware)
- Vorschlag, nur die gefilterten Elemente beim CSV-Export der Sicherungsberichte im Unter-Tab Virtuelle Maschinen zu exportieren

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen der XOA-VM-Vorlagen von der Katalogseite

### [Object Storage](/storage/oss)
- Möglichkeit, den globalen Zugriffsschlüssel von den Speicherkonten aus zu erstellen und zurückzusetzen

## v4.2.0 — 2024-12-10

### [Konsole](/console)
- Hinzufügen von Weiterleitungen zur Statusseite

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Die bereits in „Mein Katalog" vorhandenen Elemente werden nun weiterhin in „Öffentlicher Katalog" angezeigt
- Hinzufügen von Weiterleitungen auf die in einem VMware-Katalogeintrag genannten Komponenten
- Aktualisierung der RAM-Anzeige auf einem Hypervisor-Cluster
- Entfernung der Option zur automatischen Replikation neuer Laufwerke, die zu Fehlern führte
- Hinzufügen von Validierungen bei der Replikation einer virtuellen Maschine
- Hinzufügen neuer PCIPassthru-Zusatzkonfigurationen aus der erweiterten Konfiguration einer virtuellen Maschine für die GPU-Verwaltung
- Möglichkeit, einen PCI-Controller auf virtuellen Maschinen hinzuzufügen

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Anzeige der DRS-Empfehlungen und DRS-Fehler von einem Hypervisor-Cluster
- Neuer Status auf Hypervisoren und Datastores, wenn eine Wartungsanfrage aussteht
- Hinzufügen der GPU-Informationen eines Hypervisors

### [IaaS VMware — Sicherung](/iaas_vmware)
- Entfernung mehrerer nicht funktionierender Backup-Optionen auf virtuellen Maschinen im Testmodus

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Sicherungsseite für den OpenIaaS-Sicherungsbereich, die Fehler, Richtlinien, Sicherungsberichte auflistet und die Wiederherstellung gelöschter virtueller Maschinen ermöglicht

### [IaaS OpenSource — Infrastruktur](/iaas_opensource)
- Hinzufügen einer Seite zur Auflistung der OpenIaaS-Verfügbarkeitszonen
- Hinzufügen einer Speicherseite für den OpenIaaS-Bereich
- Hinzufügen einer Berechnungsseite für den OpenIaaS-Bereich

### [Housing (Colocation)](/housing)
- Änderung der von der Geräteseite angezeigten Informationen

## v4.1.1 — 2024-11-18

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Verbesserung der Bearbeitung des Speichers, die Umrechnung erfolgt auf die Einheit mit dem letzten ganzzahligen Wert
- Bei einem Snapshot wird der Button zum Sichern des RAM deaktiviert, wenn die virtuelle Maschine ausgeschaltet ist
- Wenn mehrere virtuelle Maschinen aufgefaltet sind, wird die Laufwerksliste nicht sofort angezeigt

### [IaaS VMware — Sicherung](/iaas_vmware)
- Hinzufügen des CSV-Export-Buttons im Tab Virtuelle Maschinen der Sicherungsberichtseite

## v4.1.0 — 2024-11-13

### [Konsole](/console)
- Möglichkeit, eine Datei bei einem Feedback zu senden

### [Identität & Zugriff (IAM)](/console/iam)
- Deaktivierung der Möglichkeit, einen Eigentümer zu löschen

### [Bestellungen](/console/orders)
- Hinzufügen der Verwaltung zum Hinzufügen, Entfernen und Bearbeiten eines Datastores von der Bestellseite
- Hinzufügen der Möglichkeit, einen Host zu löschen

### [IaaS VMware — Virtuelle Maschinen](/iaas_vmware)
- Hinzufügen der Snapshot-Aktivitäten im Snapshot-Tab einer VM
- Anzeige der tatsächlichen Größe der virtuellen Maschinen im CSV-Export

### [IaaS VMware — Infrastruktur](/iaas_vmware)
- Auf den Seiten Berechnung und Speicherung wird der Filter für Verfügbarkeitszonen auch auf die Cluster-Tabs angewendet
- Anzeige der Nutzungsprozentsätze auf den Verbrauchsleisten (CPU / RAM / Speicherung)

### [IaaS OpenSource — Virtuelle Maschinen](/iaas_opensource)
- Hinzufügen einer Validierung zur Anwesenheit von Sicherungsrichtlinien bei der Option für den automatischen Start
- Hinzufügen einer Option zum Erzwingen des Herunterfahrens/Neustarts von virtuellen Maschinen ohne installierte Guest-Tools
- Verbesserung der Ausführungsnachricht einer OpenIaaS-Richtlinie auf einer bestimmten virtuellen Maschine

### [Bastion](/bastion)
- Hinzufügen einer Validierung auf dem Host-Feld eines Geräts

## v4.0.3 — 2024-11-04

### [Konsole](/console)
- Verbesserungen und Fehlerbehebungen im Zusammenhang mit dem neuen Design

## v4.0.2 — 2024-10-30

### [Konsole](/console)
- Verbesserungen und Fehlerbehebungen im Zusammenhang mit dem neuen Design

## v4.0.1 — 2024-10-25

### [Konsole](/console)
- Verbesserungen und Fehlerbehebungen im Zusammenhang mit dem neuen Design

## v4.0.0 — 2024-10-18

### [Konsole](/console)
- Neues Design der Konsole
- Neugestaltung der Infrastruktur- und Sicherungsseiten

---

:::info[Ältere Historie]

Die vollständige Historie der Versionen vor v4.0 (v1.0 bis v3.38.1, von Februar 2019 bis Oktober 2024) ist im [Git-Historic](https://github.com/Cloud-Temple/docs) des Projekts verfügbar.

:::
