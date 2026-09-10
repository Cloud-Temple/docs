---
title: Änderungsverfolgung
sidebar_position: 2
---

# Änderungsverlauf

### 10. September 2026: Aktualisierte LLMaaS-Dokumentation

- **Modelle auswählen und verfolgen**: Direkter Zugriff auf den [Katalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle), um verfügbare Modelle, Support-Zeitpläne und empfohlene Migrationen einzusehen.
- **Einstieg in den Service**: Aktualisierte Schnellstart-Leitfäden und Integrationsbeispiele zur Erleichterung der ersten Nutzung und der Integration in Ihre Anwendungen.
- **Nutzung und Abrechnung verstehen**: Klarere Dokumentation zur Batch-Verarbeitung, Dokumentensuche und den Abrechnungsmodalitäten für Reranking.

### 20. August 2026 : Harmonisierung der Reifegradbezeichnungen für Managed-Datenbanken

- **Navigation — Databases** : Entfernung des **Beta**-Badges bei den Einträgen **Managed MariaDB** und **Managed PostgreSQL** in der Seitenleiste sowie auf den Karten der Databases-Seite. Beide Dienste zeigten gleichzeitig widersprüchliche Reifegradbezeichnungen : *Beta* in der Navigation, *Preview* im Titel ihrer Produktseiten. Nur das **Preview**-Badge bleibt als einzige verbindliche Quelle für den Reifegrad dieser Dienste erhalten. Übersetzungen verfügbar EN/DE/ES/IT.

### 17. August 2026: Aktualisierung der Sicherheitswarnungen

- **Sicherheit**: Neue [Sicherheitsmitteilungen](./console/security/security_alarms.md) stehen für die Umgebungen VMware, OpenShift, XCP-ng und Dell zur Verfügung, um Ihnen bei der Identifizierung der betroffenen Produkte und der empfohlenen Maßnahmen zu helfen.

### 14. August 2026: Klarstellung zur Zugriffsverwaltung

- **Konsole — Zugriffsverwaltung** : Der [Leitfaden für Identitäten und Berechtigungen](./console/iam/concepts.md) unterscheidet zwischen den auf Organisationsebene und auf Ebene jedes Tenants durchzuführenden Aktionen, um die Zugriffsvergabe und die Verwaltung der Eigentümer zu erleichtern.

### 7. August 2026 : Leitfaden für die Organisationsansicht

- **Konsole — Organisation** : Der [guide de démarrage](./console/console_quickstart.md) stellt die Organisationsansicht und die Tenant-Verwaltung vor. Die Dokumentation erläutert außerdem die Rolle der Eigentümer sowie die Vorgehensweise zur Anpassung ihrer Zugriffsrechte.

### 15. Juli 2026 : Präzisierung zur Verschlüsselung von Object Storage

- **Object Storage (Sicherheit)** : Der Abschnitt zur Verschlüsselung ruhender Daten (D@RE) präzisiert nun, dass der Dienst eine mit FIPS 140-3 zertifizierte AES-256-Bit-Verschlüsselung über die Softwarebibliothek RSA BSAFE Crypto-J in Version 7.x verwendet.

### 30. April 2026 : Details zur Speicherperformance

- **Speicher (IaaS VMware, OpenSource, Bare Metal)** : Hinzufügen der absoluten Obergrenzen für IOPS und maximale Bandbreite für alle Speicherklassen. Diese Informationen ermöglichen eine bessere Dimensionierung der Umgebungen entsprechend den Leistungsanforderungen.

### 24. April 2026 : Erweiterung der Dokumentation zur IaaS OpenSource-Sicherung

- **IaaS OpenSource (Sicherung)** : Erweiterung des Sicherungsabschnitts um technische Details zur Architektur (inkrementelle Sicherung, Auswirkungen von Thick Provisioning auf den Speicher), Sicherheit (AES-256-Verschlüsselung, Netzwerkisolation), Monitoring und Planungsbeschränkungen. Übersetzungen verfügbar: EN/DE/ES/IT.

### 20. April 2026 : Aktualisierung der Managed Database-Dimensionierung

- **Managed MariaDB & PostgreSQL** : Aktualisierung der maximal verfügbaren Dimensionierungsvorlagen für die verwalteten Datenbankdienste.

### 17. April 2026: VM-Instanzen — illustrierte Dokumentation, Tutorials und Übersetzungen

- **VM-Instanzen — Dokumentationserweiterung** : Vollständige Überarbeitung und Illustration der Dokumentation zu VM-Instanzen. Der Einstiegsguide (`quickstart.md`) deckt nun den gesamten illustrierten Benutzerpfad ab: Zugriff auf den Bereich, VM-Liste, 9-Schritte-Erstellungsassistent (famille d'instance, zone de disponibilité, template OS, gabarit, nom/sauvegarde, Cloud Init, disques, réseau, sommaire), und Verwaltung der 4 Registerkarten (Informations, Disques, Réseau, Snapshots).
- **VM-Instanzen — Tutorials** : Erstellung von 3 dedizierten Tutorials in einem `tutorials/`-Ordner: (1) **Erste VM erstellen** (wizard complet illustré + Cloud Init + disque additionnel), (2) **Festplatten verwalten** (ajout depuis la console + partitionnement Linux), (3) **Snapshots erstellen und verwalten** (création, restauration, suppression + bonnes pratiques et comparaison snapshot/sauvegarde). Die Seitennavigation wurde mit 3 einzelnen Einträgen in der Kategorie Tutorials aktualisiert.

### 17. April 2026 : Vertragsdokumente, Übersetzungen und terminologische Harmonisierung

- **Vertragsdokumente — Umstrukturierung** : Die Seite `contracts.md` wurde mit der Hierarchie der Vertragsdokumente am Seitenanfang neu organisiert, einschließlich der Prioritätsliste der 6 Dokumente (CGVU, SecNumCloud-Vereinbarung, Spezifische Vereinbarung ¹, PAS ², CPU, DPA) sowie einem Infofeld mit vertraglichen Präzisierungen.

### 16. April 2026: Überarbeitung der Navigation, Vertragsdokumente und Aktualisierungen

- **Navigation — Compute** : Bündelung von VM-Instanzen (Vorschau), IaaS OpenSource und IaaS VMware unter einer einzigen Kategorie **Compute** in der Navigation (PR #277).
- **Navigation — Network** : Bündelung von VPC (Vorschau) und Private Backbone unter einer einzigen Kategorie **Network** in der Navigation.
- **Vertragsdokumente** : Vollständige Neustrukturierung der Vertragsdokumentation — Erstellung einer Hub-Seite `/contracts` (Allgemeine Geschäftsbedingungen, besondere Bedingungen, SecNumCloud-Servicevereinbarungen, SLA für VM-Instanzen) und einer Hub-Seite `/shared-responsibility` (RACI-Matrizen pro Dienst: IaaS, S3, PaaS, Kubernetes, LLMaaS, Netzwerk). Das vertragliche Seitenmenü wird durch eine dedizierte Spalte **Vertraglich** im Footer ersetzt. Übersetzungen verfügbar in EN/DE/ES/IT.
- **VM-Instanzen** : Aktualisierung des Service-Level-Engagements (SLA) von 99,9 % auf 99,95 %.
- **IaaS OpenSource** : Hinzufügen eines Hinweises zur maximalen Aufbewahrungsdauer von Backups (maximal 24 Monate, Migration zu Glacier ist für das 1. Quartal 2027 geplant).

### 15. April 2026 : Neue Dokumentation zu VM-Instanzen (Cloud Public)

- **VM-Instanzen** : Veröffentlichung der ersten Dokumentation zum Dienst VM-Instanzen (en preview), einem neuen Angebot für geteilte virtuelle Maschinen von Cloud Temple. Die Dokumentation umfasst eine Übersicht des Dienstes, technische Konzepte (Serviceklassen Development/General Purpose/Performance, vordefinierte und benutzerdefinierte Vorlagen, Speicher, VPC-Netzwerk, Sicherung) sowie einen vollständigen Schnellstart-Leitfaden. Der Dienst ist in der Navigation unter einer neuen Kategorie **Cloud Public** organisiert.

### 15. April 2026: Verbesserung der IaaS VMware-Dokumentation — Clustermetriken

- **IaaS VMware**: Hinzufügen einer detaillierten Dokumentation zu den Metriken, die in der VMware-Clusteransicht über die Cloud Temple-Konsole angezeigt werden. Umfasst die drei Speicherdiagramme des Clusters: **Allocierter Speicher** (Gesamtmenge, die den VMs zugewiesen ist), **Verbrauchter Speicher** (tatsächlich von den VMs genutzter physischer Speicher) und **Worst-Case-Zuweisung** (Projektion des maximalen gleichzeitigen Verbrauchs), mit einer präzisen Beschreibung dessen, was jeder Indikator bedeutet, um den Ressourcenbedarf vorherzusehen.

### 15. April 2026 : Dokumentation Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB** : Veröffentlichung der ersten Dokumentation des Managed MariaDB-Dienstes (in der Vorschau) : Vorstellung des Dienstes, technische Konzepte (StandAlone- und Distributed-Architekturen), Schnellstartanleitung. 
- **Managed PostgreSQL** : Veröffentlichung der ersten Dokumentation des Managed PostgreSQL-Dienstes (in der Vorschau) : Vorstellung des Dienstes, technische Konzepte, Schnellstartanleitung.

### 15. April 2026: Neues Modul Kostenmanager

- **Konsole (Kostenmanager)** : Hinzufügen der vollständigen Dokumentation für das neue Modul zur Verbrauchsüberwachung, das über die Cloud Temple-Konsole zugänglich ist. Deckt das Dashboard, den Gesamtverbrauch (mit Monatsendprognose), die Aufschlüsselung nach Produkt und Dienstleistung, die Abrechnungsdetails auf Zeilenebene und den Preiskatalog ab.

### 26. März 2026 : Aktualisierung der Liste der Auftragsverarbeiter (DPA)

- **Vertraglich** : Aktualisierung des Vertragsanhangs zur Verarbeitung personenbezogener Daten (DPA) - Überarbeitung der Liste der Auftragsverarbeiter (Entfernung von Microsoft Azure und Amazon Web Services, Änderung der Tätigkeit für Iron Mountain) und Hinzufügung des Genehmigungsdatums.

### 19. März 2026: Verbesserungen der IaaS- und Terraform-Dokumentation

- **IaaS OpenSource**: Hinzufügen eines umfassenden Leitfadens zur Erstellung einer virtuellen Maschine. Das Tutorial behandelt die drei verfügbaren Bereitstellungsmethoden (Vorlage, XVA-Import, Marketplace) mit Schritt-für-Schritt-Anleitungen und Best-Practice-Empfehlungen.
- **IaaS VMware**: Hinzufügen einer Seite, die alle verfügbaren Tutorials zusammenfasst, um die Navigation und das Auffinden der Leitfäden zu erleichtern.
- **Terraform**: Neuer Abschnitt, der erklärt, wie man automatisch Benachrichtigungen über neue Versionen des Terraform-Providers über GitHub erhält.

### 19. März 2026: DPA-Aktualisierung und HDS-Konformität

- **Vertraglich**: Aktualisierung der Vertraglichen Anlage zu personenbezogenen Daten (DPA) auf Version 1.0. Integration der neuesten Anforderungen der HDS-Zertifizierung (Hébergeur de Données de Santé) und Aktualisierung der Liste der autorisierten Unterauftragnehmer. Vollständige Übersetzung ins Englische, Deutsche, Spanische und Italienische.

### 21. Februar 2026 : Erweiterte Netzwerkkonzepte

- **Netzwerk (Internet)** : Neue Seite zu **erweiterten Konzepten**, die BGP-Communities und die Steuerung der Local Preference im Internet-Backbone von Cloud Temple (AS33930) dokumentiert. Enthält eine Konfigurationsanleitung mit Bird-Beispiel.
- **LLMaaS** : Aktualisierung des Modellkatalogs und Hinzufügen des Modell-Lebenszyklus. Hinzufügen von LTS-Modellen (Long Term Support).
- **IaaS Bare Metal** : Ergänzende Informationen zum BFS-Volumen (Boot from SAN) in der Startanleitung : Volumen 1 ist der Betriebssysteminstallation vorbehalten, nicht innerhalb derselben AZ gemeinsam nutzbar, mit der Empfehlung, Daten auf einem zusätzlichen LUN-Volumen zu speichern.
- **Objektspeicher (OSS)** : Hinzufügen einer **FAQ**-Seite, die den S3-Zugriff, IP-Whitelists, vorab signierte Links und empfohlene Anwendungsszenarien abdeckt.

### 10. Februar 2026: Aktualisierung der LLMaaS-Preise

- **LLMaaS**: Globale Aktualisierung der API-Preise (Input: 1,9 €/M, Output: 8 €/M, Reasoning: 8 €/M) in der gesamten technischen und kommerziellen Dokumentation.

### 5. Februar 2026 : Details zu den Service-Level-Vereinbarungen (SLA)

- **Managed Kubernetes** : Vollständige Aktualisierung und Finalisierung der Service-Level-Vereinbarungen (SLA) für das Managed Kubernetes-Angebot.

### 19. Januar 2026 : Erweiterung Managed Kubernetes und VPC

- **Managed Kubernetes** : Hinzufügen der Unterstützung für **Bare Metal**-Knoten und **GPUs** (NVIDIA).
- **Managed Kubernetes** : Neues Tutorial zur Verwendung von GPUs in einem Kubernetes-Cluster.
- **Managed Kubernetes** : Ersetzung von KubeCost durch einen aktuelleren Leitfaden zu **OpenCost**.
- **Network (VPC)** : Umfassende Dokumentation des Virtual Private Cloud (VPC)-Diensts, einschließlich der Konzepte für hohe Verfügbarkeit (HA), Quickstart-Leitfäden und Tutorials.

### 11. Dezember 2025 : Neuerungen bei Managed Kubernetes

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zur Nutzung der **Gateway API** für das erweiterte Traffic-Management.
- **Managed Kubernetes** : Aktualisierung der Dokumentation zur Quotaverwaltung (Ceph) und Optimierung der Kostenmanagement-Tools (OpenCost).

### 22. November 2025: LLMaaS-Neuerungen und allgemeine Verbesserungen

- **LLMaaS (OCR)** : Hinzufügen einer vollständigen Dokumentation für **DeepSeek-OCR**, unserem neuen Modell, das auf die Analyse von Dokumenten (PDF, Bilder) spezialisiert ist und strukturierten Text, Tabellen sowie mathematische Formeln extrahieren kann.

### 20. November 2025 : Wichtige Aktualisierung PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Komplette Überarbeitung und Aktualisierung der OpenShift-Dokumentation, einschließlich neuer Screenshots und einer vollständigen Übersetzung ins Englische, Spanische, Deutsche und Italienische zur Unterstützung unserer internationalen Expansion.

### 3. November 2025: Verbesserung der Kubernetes-Tutorials

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zur kontinuierlichen Bereitstellung mit **ArgoCD** und dem GitOps-Ansatz.
- **Managed Kubernetes** : Überprüfung und Verbesserung der bestehenden Tutorials. Die Anleitungen zur Bereitstellung, zum Netzwerk, zur Berechtigungsverwaltung (Capsule) und zur Sicherung (Kasten) wurden erweitert, um Fragen zu Sicherheit, Governance und Kosten besser zu adressieren, entsprechend den Erwartungen der Profile CISO und Einkäufer.

### 28. Oktober 2025: Neue Dokumentation für Managed Kubernetes und verschiedene Verbesserungen

- **Managed Kubernetes (PR #193 & Verbesserungen)**: Hinzufügen einer vollständigen Dokumentation für den neuen Managed Kubernetes-Dienst. Der Abschnitt umfasst eine Vorstellung des Dienstes, technische Konzepte, einen Einstiegsleitfaden, ein erstes Tutorial und die Verantwortlichkeitsmatrix (RACI). Der Inhalt wurde erweitert, um den Erwartungen verschiedener Nutzerprofile besser gerecht zu werden.
- **Objektspeicher (PR #190, #189)**: Hinzufügen von zwei neuen Tutorials für den Objektspeicher: eines zur Verwaltung des Zugriffs auf S3-Buckets und eines zur Verwendung von Restic für Backups.
- **Vertragliches (PR #191)**: Korrektur und Aktualisierung des Dokuments „Data Processing Agreement“ (DPA).

### 18. Oktober 2025: Wartungsarbeiten und neue Dokumentationen

- **LLMaaS** : Hinzufügen einer neuen Frage zur FAQ zur Vorstellung der öffentlichen Statusseite ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), um die Verfügbarkeit und Leistung jedes Modells in Echtzeit zu verfolgen.
- **Contractuel** : Wesentliche Aktualisierung des Data Processing Agreement (DPA v2), um die neuesten gesetzlichen und Compliance-Anforderungen widerzuspiegeln.
- **Console** : Verbesserung und Klarstellung der Dokumentation zur Befehlsverwaltung.
- **Marketplace** : Hinzufügen eines detaillierten Tutorials zur Anpassung von virtuellen Maschinen-Images (VM) zur Erstellung wiederverwendbarer Vorlagen.
- **LLMaaS** : Hinzufügen eines Leitfadens zur Konfiguration der VSCode-Erweiterung CLINE, um die Sprachmodelle von Cloud Temple direkt aus dem Editor heraus zu nutzen.
- **Stockage Objet (OSS)** : Präzisierungen zur Lifecycle-Richtlinie (Lifecycle) für die Datenlöschung.
- **Stockage Objet (OSS)** : Hinzufügen einer Fehlerbehebungsanleitung für Checksummenfehler (`XAmzContentSHA256Mismatch`) mit AWS CLI und Terraform.
- **LLMaaS** : Aktualisierung der Liste der verfügbaren Modelle und Neuübersetzung von über 50 Dokumenten zur Sicherstellung der Konsistenz.

### 14. August 2025: Verbesserungen und Korrekturen

- **LLMaaS** : Aktualisierung und Präzisierung der FAQ-Antworten, um technische und strategische Fragen besser zu beantworten. Hinzufügen der FAQ zur Navigation.

### Juli 2025: Neuigkeiten und wichtige Aktualisierungen

- **Objektspeicher (OSS)** :
  - Vollständige Überarbeitung des Tutorial-Bereichs mit dedizierten Anleitungen für beliebte Tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python-SDK Boto3.
  - Hinzufügen von Details zu den Konzepten von Speicherkonten und Objektsperren (Object Lock).
- **IaaS OpenSource** :
  - Hinzufügen einer detaillierten Dokumentation zur Verwaltung der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole** :
  - Aktualisierung der Sicherheitswarnungsseite mit den neuesten Schwachstellen.
- **Netzwerk** :
  - Hinzufügen neuer Screenshots zur Veranschaulichung der Konfiguration der IPv6-Konnektivität.

### 29. Juni 2025: Abschluss der LLMaaS-Dokumentation

- Validierung der vollständigen Testsuite.
- Korrektur und Validierung der RAG-Pipelines mit FAISS und Qdrant.
- Erweiterung der Tutorials um detailliertere technische Erklärungen.
- Hinzufügen eines Abschnitts zur Prompt-Sicherheit und zum Lebenszyklus der Modelle in den Konzepten.
- Verbesserung der RAG-Erklärungsseite mit Diagrammen und Details zu Embedding-Modellen.
- Aktualisierung der API-Dokumentation, des Startguides und der Service-Präsentation.
- Hinzufügen der Preisgestaltung für das Endpoint für Audio-Transkription.
- Hinzufügen des voraussichtlichen Zeitplans für den Lebenszyklus der Modelle.
- Hinzufügen der Verantwortlichkeitsmatrix für das LLMaaS-Angebot.