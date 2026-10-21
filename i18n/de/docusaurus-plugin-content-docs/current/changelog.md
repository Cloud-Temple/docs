---
title: Änderungsverlauf
sidebar_position: 2
---

# Änderungsverlauf

### 21. Oktober 2026: Neue Cloud Temple Konsole (v5.0.0)

- **Konsole**: Die [Produktversionshinweise](./changelog_produits.md) präsentieren die Versionen 4.52.1 bis 5.0.0, darunter die neue Konsole: vollständiges Redesign der Oberfläche mit dunklem Theme, vereinfachte Navigation, neue Detailseite für virtuelle Maschinen, überarbeitete Seiten für Compute und Storage sowie ein Object Storage Dateimanager. Die alte Version der Konsole bleibt bis Ende November 2026 über das Fenster „Neuigkeiten" zugänglich.

### 12. Oktober 2026: Versionshinweise der Konsole bis v4.52.0

- **Konsole**: Die [Produktversionshinweise](./changelog_produits.md) präsentieren die Neuheiten und Fehlerbehebungen der Versionen 4.50.0, 4.51.0 und 4.52.0, insbesondere die Weiterentwicklungen des VPC-Netzwerks, des cloud-init-Deployments und der Wiederherstellung virtueller Maschinen.

### 10. September 2026: Aktualisierte LLMaaS-Dokumentation

- **Modelle auswählen und verfolgen**: Direktzugriff auf den [Katalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle) zur Einsicht der verfügbaren Modelle, der Support-Fristen und der empfohlenen Migrationen.
- **Service in Betrieb nehmen**: Aktualisierte Einstiegsguides und Integrationsbeispiele zur Erleichterung der ersten Nutzung und der Integration in Ihre Anwendungen.
- **Nutzung und Abrechnung verstehen**: Klarere Dokumentation zu Batch-Verarbeitungen, Dokumentensuche und den Abrechnungsmodalitäten des Rerankings.

### 20. August 2026: Harmonisierung der Reifegrad-Bezeichnungen für verwaltete Datenbanken

- **Navigation — Databases**: Entfernung des Badges **Beta** von den Einträgen **MariaDB Managé** und **PostgreSQL Managé** im Seitenmenü und auf den Karten der Databases-Seite. Beide Dienste wiesen gleichzeitig zwei widersprüchliche Reifegrad-Bezeichnungen auf: *Beta* in der Navigation, *Preview* im Titel ihrer Produktseiten. Nur das Badge **Preview** wird beibehalten, als einzige Quelle der Wahrheit für den Reifegrad dieser Dienste. Übersetzungen verfügbar EN/DE/ES/IT.

### 17. August 2026: Aktualisierung der Sicherheitswarnungen

- **Sicherheit**: Neue [Sicherheitsmeldungen](./console/security/security_alarms.md) sind für die Umgebungen VMware, OpenShift, XCP-ng und Dell verfügbar, um Ihnen bei der Identifizierung der betroffenen Produkte und der empfohlenen Maßnahmen zu helfen.

### 14. August 2026: Klarstellung der Zugriffsteuerung

- **Konsole — Zugriffsteuerung**: Der [Guide für Identitäten und Berechtigungen](./console/iam/concepts.md) unterscheidet die auf Organisationsebene und auf Ebene jedes Tenants durchzuführenden Aktionen, um die Zugriffsvergabe und die Verwaltung der Eigentümer zu erleichtern.

### 7. August 2026: Guide zur Organisationsansicht

- **Konsole — Organisation**: Der [Einstiegs-Guide](./console/console_quickstart.md) präsentiert die Organisationsansicht und die Tenant-Verwaltung. Die Dokumentation präzisiert ebenfalls die Rolle der Eigentümer und die Schritte zur Anpassung ihrer Zugriffe.

### 15. Juli 2026: Präzisierung zur Verschlüsselung von Object Storage

- **Object Storage (Sicherheit)**: Der Abschnitt zur Verschlüsselung von Daten im Ruhezustand (D@RE) präzisiert nun, dass der Service eine AES-256-Bit-Verschlüsselung mit FIPS 140-3-Zertifizierung verwendet, über die Softwarebibliothek RSA BSAFE Crypto-J in Version 7.x.

### 30. April 2026: Präzisierungen zu den Speicherleistungen

- **Storage (IaaS VMware, OpenSource, Bare Metal)**: Hinzufügung der absoluten Obergrenzen für IOPS und maximale Bandbreite für alle Speicherklassen. Diese Informationen ermöglichen eine bessere Dimensionierung der Umgebungen anhand der Leistungsanforderungen.

### 24. April 2026: Erweiterung der IaaS OpenSource Backup-Dokumentation

- **IaaS OpenSource (Backup)**: Erweiterung des Backup-Abschnitts mit Präzisierungen zur technischen Architektur (inkrementelles Backup, Auswirkung des Thick Provisioning auf den Speicher), zur Sicherheit (AES-256-Verschlüsselung, Netzwerkisolation), zum Monitoring und zu den Planungsbeschränkungen. Übersetzungen verfügbar EN/DE/ES/IT.

### 20. April 2026: Aktualisierung der Dimensionierung Managed Database

- **Managed MariaDB & PostgreSQL**: Aktualisierung der maximal verfügbaren Dimensionierungsvorlagen für die verwalteten Datenbankdienste.

### 17. April 2026: VM Instances — illustrierte Dokumentation, Tutorials und Übersetzungen

- **VM Instances — Dokumentarerweiterung**: Vollständiges Redesign und Illustration der VM-Instances-Dokumentation. Der Einstiegs-Guide (`quickstart.md`) deckt nun den gesamten illustrierten Benutzerablauf ab: Zugriff auf den Abschnitt, VM-Liste, 9-Schritte-Erstellungs-Assistent (Instanzfamilie, Verfügbarkeitszone, OS-Template, Vorlage, Name/Backup, Cloud Init, Disks, Netzwerk, Zusammenfassung) und Verwaltung der 4 Tabs (Informationen, Disks, Netzwerk, Snapshots).
- **VM Instances — Tutorials**: Erstellung von 3 dedizierten Tutorials in einem Ordner `tutorials/`: (1) **Erste VM erstellen** (vollständiger illustrierter Assistent + Cloud Init + zusätzliche Disk), (2) **Disks verwalten** (Hinzufügen über die Konsole + Linux-Partitionierung), (3) **Snapshots erstellen und verwalten** (Erstellung, Wiederherstellung, Löschung + Best Practices und Vergleich Snapshot/Backup). Die Seitennavigation wird mit 3 individuellen Einträgen in der Kategorie Tutorials aktualisiert.

### 17. April 2026: Vertragsdokumente, Übersetzungen und terminologische Harmonisierung

- **Vertragsdokumente — Umstrukturierung**: Die Seite `contracts.md` wird mit der Hierarchie der Vertragsdokumente am Seitenanfang neu organisiert, einschließlich der Prioritätsliste der 6 Dokumente (AGB, SecNumCloud-Vereinbarung, spezifische Vereinbarung ¹, PAS ², CPU, DPA) und einem Kasten mit vertraglichen Präzisierungen.

### 16. April 2026: Redesign der Navigation, Vertragsdokumente und Aktualisierungen

- **Navigation — Compute**: Zusammenführung von VM Instances (Preview), IaaS OpenSource und IaaS VMware unter einer einzigen Kategorie **Compute** in der Navigation (PR #277).
- **Navigation — Network**: Zusammenführung von VPC (Preview) und Private Backbone unter einer einzigen Kategorie **Network** in der Navigation.
- **Vertragsdokumente**: Vollständige Umstrukturierung der Vertragsdokumentation — Erstellung einer Hub-Seite `/contracts` (Allgemeine Geschäftsbedingungen, Besondere Bedingungen, SecNumCloud-Servicevereinbarungen, SLA VM Instances) und einer Hub-Seite `/shared-responsibility` (RACI-Matrizen pro Service: IaaS, S3, PaaS, Kubernetes, LLMaaS, Netzwerk). Das vertragliche Seitenmenü wird durch eine dedizierte Spalte **Vertraglich** im Footer ersetzt. Übersetzungen verfügbar EN/DE/ES/IT.
- **VM Instances**: Aktualisierung des Service-Level-Engagements (SLA) von 99,9 % auf 99,95 %.
- **IaaS OpenSource**: Hinzufügung eines Hinweises zur maximalen Aufbewahrungsdauer der Backups (maximal 24 Monate, Migration zu Glacier im T1 2027 geplant).

### 15. April 2026: Neue Dokumentation VM Instances (Cloud Public)

- **VM Instances**: Veröffentlichung der initialen Dokumentation des VM-Instances-Dienstes (in Preview), neues Angebot an gemeinsam genutzten virtuellen Maschinen von Cloud Temple. Die Dokumentation umfasst den Gesamtüberblick des Dienstes, die technischen Konzepte (Service-Klassen Development/General Purpose/Performance, vordefinierte und benutzerdefinierte Vorlagen, Storage, VPC-Netzwerk, Backup) sowie einen vollständigen Einstiegs-Guide. Der Service ist unter einer neuen Kategorie **Cloud Public** in der Navigation organisiert.

### 15. April 2026: Verbesserung der IaaS VMware-Dokumentation — Cluster-Metriken

- **IaaS VMware**: Hinzufügung einer detaillierten Dokumentation zu den in der Cluster-Ansicht von VMware in der Cloud Temple Konsole angezeigten Metriken. Deckt die drei Speicherdiagramme des Clusters ab: **Zugewiesener Speicher** (Gesamtmenge, die den VMs zugewiesen ist), **Verbrauchter Speicher** (physischer Speicher, der tatsächlich von den VMs genutzt wird) und **Zuweisung im Worst Case** (Projektion der maximalen gleichzeitigen Verbrauchsmenge), mit der genauen Beschreibung dessen, was jeder Indikator für die Antizipation der Ressourcenbedarfe darstellt.

### 15. April 2026: Dokumentation Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB**: Veröffentlichung der initialen Dokumentation des Managed-MariaDB-Dienstes (in Preview): Vorstellung des Dienstes, technische Konzepte (Architekturen StandAlone und Distributed), Einstiegs-Guide.
- **Managed PostgreSQL**: Veröffentlichung der initialen Dokumentation des Managed-PostgreSQL-Dienstes (in Preview): Vorstellung des Dienstes, technische Konzepte, Einstiegs-Guide.

### 15. April 2026: Neues Modul Kostenmanager

- **Konsole (Kostenmanager)**: Hinzufügung der vollständigen Dokumentation des neuen Verbrauchsverfolgungsmoduls, das über die Cloud Temple Konsole zugänglich ist. Umfasst das Dashboard, den Gesamtverbrauch (mit Monatsendeprojektion), die Aufschlüsselung nach Produkt und nach Service, die zeilenweisen Abrechnungsdetails und den Preis-Katalog.

### 26. März 2026: Aktualisierung der Auftragsverarbeiterliste (DPA)

- **Vertraglich**: Aktualisierung der Vertraglichen Anlage zu den Personendaten (DPA) – Überarbeitung der Auftragsverarbeiterliste (Entfernung von Microsoft Azure und Amazon Web Services, Änderung der Tätigkeit für Iron Mountain) und Hinzufügung des Genehmigungsdatums.

### 19. März 2026: Verbesserungen der IaaS- und Terraform-Dokumentation

- **IaaS OpenSource**: Hinzufügung eines vollständigen Guides zur Erstellung einer virtuellen Maschine. Das Tutorial deckt die drei verfügbaren Deployment-Methoden ab (Modell, XVA-Import, Marketplace) mit Schritt-für-Schritt-Anweisungen und Empfehlungen zu Best Practices.
- **IaaS VMware**: Hinzufügung einer Seite, die alle verfügbaren Tutorials zusammenfasst, um die Navigation und Entdeckung der Guides zu erleichtern.
- **Terraform**: Neuer Abschnitt, der erklärt, wie man automatisch Benachrichtigungen über neue Versionen des Terraform Providers über GitHub erhält.

### 19. März 2026: DPA-Aktualisierung und HDS-Konformität

- **Vertraglich**: Aktualisierung der Vertraglichen Anlage zu den Personendaten (DPA) auf Version 1.0. Integration der letzten Anforderungen der HDS-Zertifizierung (Hébergeur de Données de Santé) und Aktualisierung der Liste der genehmigten Auftragsverarbeiter. Vollständige Übersetzung in Englisch, Deutsch, Spanisch und Italienisch.

### 21. Februar 2026: Erweiterte Netzwerk-Konzepte

- **Netzwerk (Internet)**: Neue Seite zu **erweiterten Konzepten**, die BGP-Communities und die Steuerung der Local Preference auf dem Cloud Temple Internet-Backbone (AS33930) dokumentiert. Enthält einen Konfigurationsguide mit Bird-Beispiel.
- **LLMaaS**: Aktualisierung des Modellkatalogs und Hinzufügung des Modell-Lebenszyklus. Hinzufügung der LTS-Modelle (Long Term Support).
- **IaaS Bare Metal**: Hinzufügung von Präzisierungen zum BFS-Volumen (Boot from SAN) im Einstiegs-Guide: Volume 1 ist der OS-Installation vorbehalten, nicht innerhalb derselben AZ teilbar, mit Empfehlung, Daten auf einem zusätzlichen LUN-Volumen zu speichern.
- **Object Storage (OSS)**: Hinzufügung einer **FAQ**-Seite, die S3-Zugriff, IP-Whitelists, vor-signierte Links und empfohlene Nutzungsszenarien abdeckt.

### 10. Februar 2026: Aktualisierung der LLMaaS-Tarife

- **LLMaaS**: Aktualisierung der Tarifbedingungen der API. Die geltenden Tarife sind im [offiziellen Tarifkatalog von Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/) verfügbar.

### 5. Februar 2026: Präzisierungen zu den Service-Level-Engagements (SLA)

- **Managed Kubernetes**: Vollständige Aktualisierung und Finalisierung der Service-Level-Engagements (SLA) für das Managed-Kubernetes-Angebot.

### 19. Januar 2026: Erweiterung Managed Kubernetes und VPC

- **Managed Kubernetes**: Hinzufügung der Unterstützung für **Bare Metal**-Knoten und **GPUs** (NVIDIA).
- **Managed Kubernetes**: Neues Tutorial zur Nutzung von GPUs in einem Kubernetes-Cluster.
- **Managed Kubernetes**: Ersetzung von KubeCost durch einen aktuelleren Guide zu **OpenCost**.
- **Network (VPC)**: Vollständige Dokumentation des Virtual Private Cloud (VPC)-Dienstes, einschließlich der Hochverfügbarkeits-Konzepte (HA), der Einstiegs-Guides und der Tutorials.

### 11. Dezember 2025: Neuheiten Managed Kubernetes

- **Managed Kubernetes**: Hinzufügung eines neuen Tutorials zur Nutzung der **Gateway API** für die erweiterte Verkehrssteuerung.
- **Managed Kubernetes**: Aktualisierung der Dokumentation zur Quotenverwaltung (Ceph) und Optimierung der Kostenmanagement-Tools (OpenCost).

### 22. November 2025: Neuheiten LLMaaS und globale Verbesserungen

- **LLMaaS (OCR)**: Hinzufügung einer vollständigen Dokumentation für **DeepSeek-OCR**, unser neues Modell, das auf Dokumentenanalyse (PDF, Bilder) spezialisiert ist und in der Lage ist, strukturierten Text, Tabellen und mathematische Formeln zu extrahieren.

### 20. November 2025: Major-Update PaaS OpenShift

- **PaaS OpenShift (PR #194)**: Redesign und vollständige Aktualisierung der OpenShift-Dokumentation, einschließlich neuer Screenshots und einer vollständigen Übersetzung in Englisch, Spanisch, Deutsch und Italienisch zur Unterstützung unserer internationalen Expansion.

### 3. November 2025: Verbesserung der Kubernetes-Tutorials

- **Managed Kubernetes**: Hinzufügung eines neuen Tutorials zum Continuous Deployment mit **ArgoCD** und dem GitOps-Ansatz.
- **Managed Kubernetes**: Überprüfung und Verbesserung der bestehenden Tutorials. Die Guides zu Deployment, Netzwerk, Berechtigungsverwaltung (Capsule) und Backup (Kasten) wurden erweitert, um die Fragen der Sicherheit, Governance und Kosten besser zu adressieren, als Antwort auf die Erwartungen der Profile RSSI und Einkäufer.

### 28. Oktober 2025: Neue Dokumentation Managed Kubernetes und verschiedene Verbesserungen

- **Managed Kubernetes (PR #193 & Verbesserungen)**: Hinzufügung einer vollständigen Dokumentation für den neuen Managed-Kubernetes-Service. Der Abschnitt umfasst eine Vorstellung des Dienstes, die technischen Konzepte, einen Einstiegs-Guide, ein erstes Tutorial und die Verantwortlichkeitsmatrix (RACI). Der Inhalt wurde erweitert, um den Erwartungen der verschiedenen Nutzerprofile besser gerecht zu werden.
- **Object Storage (PR #190, #189)**: Hinzufügung von zwei neuen Tutorials für den Object-Storage-Dienst: eines zur Zugriffsteuerung auf S3-Buckets und eines zur Nutzung von Restic für Backups.
- **Vertraglich (PR #191)**: Korrektur und Aktualisierung des Dokuments „Data Processing Agreement" (DPA).

### 18. Oktober 2025: Wartung und neue Dokumentationen

- **LLMaaS**: Hinzufügung einer neuen Frage zur FAQ zur Vorstellung der öffentlichen Statusseite ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), die es ermöglicht, die Verfügbarkeit und die Leistung jedes Modells in Echtzeit zu verfolgen.
- **Vertraglich**: Major-Aktualisierung des Data Processing Agreement (DPA v2), um die letzten gesetzlichen und konformen Anforderungen widerzuspiegeln.
- **Konsole**: Verbesserung und Klarstellung der Dokumentation zur Bestellverwaltung.
- **Marketplace**: Hinzufügung eines detaillierten Tutorials zur Anpassung von virtuellen Maschinen-Images (VM) zur Erstellung wiederverwendbarer Templates.
- **LLMaaS**: Hinzufügung eines Guides zur Konfiguration der VSCode-Erweiterung CLINE, um die Sprachmodelle von Cloud Temple direkt aus dem Editor zu nutzen.
- **Object Storage (OSS)**: Hinzufügung von Präzisierungen zur Lifecycle-Politik für die Datenlöschung.
- **Object Storage (OSS)**: Hinzufügung eines Fehlersuchguides für Checksum-Fehler (`XAmzContentSHA256Mismatch`) mit AWS CLI und Terraform.
- **LLMaaS**: Aktualisierung der Liste der verfügbaren Modelle und Neuübersetzung von mehr als 50 Dokumenten zur Sicherstellung der Kohärenz.

### 14. August 2025: Verbesserungen und Korrekturen

- **LLMaaS**: Aktualisierung und Klarstellung der FAQ-Antworten, um die technischen und strategischen Fragen besser zu adressieren. Hinzufügung der FAQ zur Navigation.

### Juli 2025: Neuigkeiten und wichtige Updates

- **Objektspeicher (OSS)** :
  - Vollständige Überarbeitung des Tutorial-Bereichs mit dedizierten Anleitungen für beliebte Tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python-SDK Boto3.
  - Hinzufügung von Details zu den Konzepten von Speicherkonten und der Objektverriegelung (Object Lock).
- **IaaS OpenSource** :
  - Hinzufügung einer detaillierten Dokumentation zur Verwaltung der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole** :
  - Aktualisierung der Seite zu Sicherheitswarnungen mit den neuesten Schwachstellen.
- **Netzwerk** :
  - Hinzufügung neuer Screenshots zur Veranschaulichung der Konfiguration der IPv6-Konnektivität.

### 29. Juni 2025: Abschluss der LLMaaS-Dokumentation

- Validierung der vollständigen Testsuite.
- Korrektur und Validierung der RAG-Pipelines mit FAISS und Qdrant.
- Anreicherung der Tutorials mit detaillierteren technischen Erklärungen.
- Hinzufügung eines Abschnitts zur Prompt-Sicherheit und zum Lebenszyklus der Modelle in den Konzepten.
- Verbesserung der RAG-Erklärungsseite mit Schemata und Details zu Embedding-Modellen.
- Aktualisierung der API-Dokumentation, des Schnellstartguides und der Service-Präsentation.
- Hinzufügung der Preiskalkulation für den Endpoint Transcription Audio.
- Hinzufügung des vorausschauenden Planungszeitplans für den Lebenszyklus der Modelle.
- Hinzufügung der Verantwortlichkeitsmatrix für das LLMaaS-Angebot.
