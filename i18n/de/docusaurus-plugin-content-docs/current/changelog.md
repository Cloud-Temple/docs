---
title: Änderungsverfolgung
sidebar_position: 2
---

# Änderungsverfolgung

### 21. Oktober 2026 : Neue Cloud Temple Konsole (v5.0.0)

- **Konsole** : Die [notes de version produits](./changelog_produits.md) präsentieren die Versionen 4.52.1 bis 5.0.0, darunter die neue Konsole : vollständiges Redesign der Oberfläche mit dunklem Theme, vereinfachte Navigation, neue Detailseite für virtuelle Maschinen, überarbeitete Seiten für Compute und Storage sowie ein Dateibrowser für Object Storage. Die alte Version der Konsole bleibt bis Anfang Dezember 2026 über das Fenster « Nouveautés » zugänglich.

### 12. Oktober 2026 : Versionshinweise der Konsole bis v4.52.0

- **Konsole** : Die [notes de version produits](./changelog_produits.md) präsentieren die Neuheiten und Korrekturen der Versionen 4.50.0, 4.51.0 und 4.52.0, insbesondere die Weiterentwicklungen des VPC-Netzwerks, des cloud-init-Deployments und der Wiederherstellung virtueller Maschinen.

### 10. September 2026 : Aktualisierte LLMaaS-Dokumentation

- **Choisir et suivre ses modèles** : Direkter Zugriff auf den [catalogue et cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) zur Einsicht in verfügbare Modelle, Support-Fristen und empfohlene Migrationen.
- **Prendre en main le service** : Aktualisierte Einstiegsguides und Integrationsbeispiele zur Erleichterung der ersten Nutzung und der Integration in Ihre Anwendungen.
- **Comprendre les usages et la facturation** : Klarere Dokumentation zu Batch-Verarbeitungen, Dokumentensuche und den Abrechnungsmodalitäten des Rerankings.

### 20. August 2026 : Harmonisierung des Reifegrad-Labels für verwaltete Datenbanken

- **Navigation — Databases** : Entfernung des Badges **Beta** von den Einträgen **MariaDB Managé** und **PostgreSQL Managé** im Seitenmenü und auf den Karten der Databases-Seite. Beide Dienste zeigten gleichzeitig zwei widersprüchliche Reifegrad-Labels : *Beta* in der Navigation, *Preview* im Titel ihrer Produktseiten. Nur das Badge **Preview** wird beibehalten, als einzige Quelle der Wahrheit für den Reifegrad dieser Dienste. Übersetzungen verfügbar EN/DE/ES/IT.

### 17. August 2026 : Aktualisierung der Sicherheitswarnungen

- **Sicherheit** : Neue [avis de sécurité](./console/security/security_alarms.md) sind für die Umgebungen VMware, OpenShift, XCP-ng und Dell verfügbar, um Ihnen bei der Identifizierung der betroffenen Produkte und der empfohlenen Maßnahmen zu helfen.

### 14. August 2026 : Klarstellung der Zugriffsverwaltung

- **Konsole — Zugriffsverwaltung** : Der [guide des identités et permissions](./console/iam/concepts.md) unterscheidet die auf Organisationsebene und auf Ebene jedes Tenants durchzuführenden Aktionen, um die Zugriffsvergabe und die Verwaltung der Eigentümer zu erleichtern.

### 7. August 2026 : Guide zur Organisationsansicht

- **Konsole — Organisation** : Der [guide de démarrage](./console/console_quickstart.md) stellt die Organisationsansicht und die Tenant-Verwaltung vor. Die Dokumentation präzisiert ebenfalls die Rolle der Eigentümer und die Schritte zur Anpassung ihrer Zugriffe.

### 15. Juli 2026 : Präzisierung zur Verschlüsselung von Object Storage

- **Object Storage (Sécurité)** : Der Abschnitt zur Verschlüsselung von Daten im Ruhezustand (D@RE) präzisiert nun, dass der Dienst eine AES-256-Bit-Verschlüsselung mit FIPS 140-3-Zertifizierung verwendet, über die Softwarebibliothek RSA BSAFE Crypto-J in Version 7.x.

### 30. April 2026 : Präzisierungen zu den Speicherleistungen

- **Storage (IaaS VMware, OpenSource, Bare Metal)** : Hinzufügen der absoluten Obergrenzen für IOPS und maximale Bandbreite für alle Speicherklassen. Diese Informationen ermöglichen eine bessere Dimensionierung der Umgebungen anhand der Leistungsanforderungen.

### 24. April 2026 : Erweiterung der IaaS OpenSource Backup-Dokumentation

- **IaaS OpenSource (Sauvegarde)** : Erweiterung des Backup-Abschnitts mit Präzisierungen zur technischen Architektur (inkrementelle Sicherung, Auswirkung des Thick Provisioning auf den Speicher), Sicherheit (AES-256-Verschlüsselung, Netzwerkisolation), Monitoring und Planungsbeschränkungen. Übersetzungen verfügbar EN/DE/ES/IT.

### 20. April 2026 : Aktualisierung der Dimensionierung Managed Database

- **Managed MariaDB & PostgreSQL** : Aktualisierung der maximal verfügbaren Dimensionierungsvorlagen für die verwalteten Datenbankdienste.

### 17. April 2026 : VM Instances — illustrierte Dokumentation, Tutorials und Übersetzungen

- **VM Instances — Enrichissement documentaire** : Vollständiges Redesign und Illustration der VM-Instances-Dokumentation. Der Einstiegsguide (`quickstart.md`) deckt nun den gesamten illustrierten Benutzerpfad ab : Zugriff auf den Abschnitt, VM-Liste, 9-Schritte-Erstellungsassistent (Instanzfamilie, Verfügbarkeitszone, OS-Template, Vorlage, Name/Backup, Cloud Init, Disks, Netzwerk, Zusammenfassung) und Verwaltung der 4 Tabs (Informations, Disks, Netzwerk, Snapshots).
- **VM Instances — Tutoriels** : Erstellung von 3 dedizierten Tutorials in einem Ordner `tutorials/` : (1) **Créer sa première VM** (vollständiger illustrierter Assistent + Cloud Init + zusätzliche Disk), (2) **Gérer les disques** (Hinzufügen über die Konsole + Linux-Partitionierung), (3) **Prendre et gérer les snapshots** (Erstellung, Wiederherstellung, Löschung + Best Practices und Vergleich Snapshot/Backup). Die Seitennavigation wird mit 3 individuellen Einträgen in der Kategorie Tutoriels aktualisiert.

### 17. April 2026 : Vertragliche Dokumente, Übersetzungen und terminologische Harmonisierung

- **Documents contractuels — Restructuration** : Die Seite `contracts.md` wird mit der Hierarchie der vertraglichen Dokumente am Seitenanfang neu organisiert, einschließlich der Prioritätsliste der 6 Dokumente (CGVU, Convention SecNumCloud, Convention spécifique ¹, PAS ², CPU, DPA) und einem Kasten mit vertraglichen Präzisierungen.

### 16. April 2026 : Redesign der Navigation, vertragliche Dokumente und Aktualisierungen

- **Navigation — Compute** : Zusammenführung von VM Instances (preview), IaaS OpenSource und IaaS VMware unter einer einzigen Kategorie **Compute** in der Navigation (PR #277).
- **Navigation — Network** : Zusammenführung von VPC (preview) und Private Backbone unter einer einzigen Kategorie **Network** in der Navigation.
- **Documents contractuels** : Vollständige Neustrukturierung der Vertragsdokumentation — Erstellung einer Hub-Seite `/contracts` (Allgemeine Geschäftsbedingungen, Besondere Bedingungen, SecNumCloud-Servicevereinbarungen, SLA VM Instances) und einer Hub-Seite `/shared-responsibility` (RACI-Matrizen pro Dienst : IaaS, S3, PaaS, Kubernetes, LLMaaS, Netzwerk). Das vertragliche Seitenmenü wird durch eine dedizierte Spalte **Contractuel** im Footer ersetzt. Übersetzungen verfügbar EN/DE/ES/IT.
- **VM Instances** : Aktualisierung des Service-Level-Engagements (SLA) von 99,9 % auf 99,95 %.
- **IaaS OpenSource** : Hinzufügen eines Hinweises zur maximalen Aufbewahrungsdauer der Backups (maximal 24 Monate, Migration zu Glacier im T1 2027 geplant).

### 15. April 2026 : Neue VM-Instances-Dokumentation (Cloud Public)

- **VM instances** : Veröffentlichung der initialen Dokumentation des VM-Instances-Dienstes (in Preview), neues Angebot an gemeinsam genutzten virtuellen Maschinen von Cloud Temple. Die Dokumentation umfasst den Gesamtüberblick des Dienstes, die technischen Konzepte (Service-Klassen Development/General Purpose/Performance, vordefinierte und benutzerdefinierte Vorlagen, Storage, VPC-Netzwerk, Backup) sowie einen vollständigen Einstiegsguide. Der Dienst wird unter einer neuen Kategorie **Cloud Public** in der Navigation organisiert.

### 15. April 2026 : Verbesserung der IaaS VMware-Dokumentation — Cluster-Metriken

- **IaaS VMware** : Hinzufügen einer detaillierten Dokumentation zu den in der Cluster-Ansicht von VMware in der Cloud Temple Konsole angezeigten Metriken. Deckt die drei Speichergraphiken des Clusters ab : **Mémoire allouée** (gesamte den VMs zugewiesene Menge), **Mémoire consommée** (physisch tatsächlich von den VMs genutzter Speicher) und **Allocation dans le pire des cas** (Projektion der maximalen gleichzeitigen Auslastung), mit der genauen Beschreibung dessen, was jeder Indikator für die Ressourcenplanung darstellt.

### 15. April 2026 : Dokumentation Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB** : Veröffentlichung der initialen Dokumentation des Managed-MariaDB-Dienstes (in Preview) : Vorstellung des Dienstes, technische Konzepte (StandAlone- und Distributed-Architekturen), Einstiegsguide.
- **Managed PostgreSQL** : Veröffentlichung der initialen Dokumentation des Managed-PostgreSQL-Dienstes (in Preview) : Vorstellung des Dienstes, technische Konzepte, Einstiegsguide.

### 15. April 2026 : Neues Modul Kostenmanager

- **Konsole (Gestionnaire des coûts)** : Hinzufügen der vollständigen Dokumentation des neuen Verbrauchsverfolgungsmoduls, das über die Cloud Temple Konsole zugänglich ist. Umfasst das Dashboard, den Gesamtverbrauch (mit Monatsend-Projektion), die Aufteilung nach Produkt und nach Dienst, die zeilenweisen Abrechnungsdetails und den Preis-Katalog.

### 26. März 2026 : Aktualisierung der Auftragsverarbeiterliste (DPA)

- **Contractuel** : Aktualisierung der Vertraglichen Anlage zu Persönlichen Daten (DPA) - Überarbeitung der Auftragsverarbeiterliste (Entfernung von Microsoft Azure und Amazon Web Services, Änderung der Tätigkeit für Iron Mountain) und Hinzufügen des Genehmigungsdatums.

### 19. März 2026 : Verbesserungen der IaaS- und Terraform-Dokumentation

- **IaaS OpenSource** : Hinzufügen eines vollständigen Guides zur Erstellung einer virtuellen Maschine. Das Tutorial deckt die drei verfügbaren Deployment-Methoden ab (Modell, XVA-Import, Marketplace) mit Schritt-für-Schritt-Anweisungen und Best-Practice-Empfehlungen.
- **IaaS VMware** : Hinzufügen einer Seite, die alle verfügbaren Tutorials zusammenfasst, um die Navigation und Entdeckung der Guides zu erleichtern.
- **Terraform** : Neuer Abschnitt, der erklärt, wie man automatisch Benachrichtigungen über neue Versionen des Terraform-Providers über GitHub erhält.

### 19. März 2026 : DPA-Aktualisierung und HDS-Konformität

- **Contractuel** : Aktualisierung der Vertraglichen Anlage zu Persönlichen Daten (DPA) auf Version 1.0. Integration der letzten Anforderungen der HDS-Zertifizierung (Hébergeur de Données de Santé) und Aktualisierung der Liste der genehmigten Auftragsverarbeiter. Vollständige Übersetzung in Englisch, Deutsch, Spanisch und Italienisch.

### 21. Februar 2026 : Fortgeschrittene Netzwerk-Konzepte

- **Réseau (Internet)** : Neue Seite mit **concepts avancés**, die BGP-Communities und die Steuerung der Local Preference auf dem Cloud Temple Internet-Backbone (AS33930) dokumentiert. Enthält einen Konfigurationsguide mit Bird-Beispiel.
- **LLMaaS** : Aktualisierung des Modell-Katalogs und Hinzufügen des Modell-Lebenszyklus. Hinzufügen der LTS-Modelle (Long Term Support).
- **IaaS Bare Metal** : Hinzufügen von Präzisierungen zum BFS-Volumen (Boot from SAN) im Einstiegsguide : Volume 1 ist der OS-Installation gewidmet, nicht innerhalb derselben AZ teilbar, mit Empfehlung, Daten auf einem zusätzlichen LUN-Volumen zu speichern.
- **Stockage Objet (OSS)** : Hinzufügen einer **FAQ**-Seite, die S3-Zugriff, IP-Whitelists, vor-signierte Links und empfohlene Nutzungsszenarien abdeckt.

### 10. Februar 2026 : Aktualisierung der LLMaaS-Tarife

- **LLMaaS** : Aktualisierung der Tarifbedingungen der API. Die geltenden Tarife sind im [catalogue tarifaire officiel Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/) verfügbar.

### 5. Februar 2026 : Präzisierungen zu den Service-Level-Engagements (SLA)

- **Managed Kubernetes** : Vollständige Aktualisierung und Finalisierung der Service-Level-Engagements (SLA) für das Managed-Kubernetes-Angebot.

### 19. Januar 2026 : Erweiterung Managed Kubernetes und VPC

- **Managed Kubernetes** : Hinzufügen der Unterstützung für **Bare Metal**-Knoten und **GPUs** (NVIDIA).
- **Managed Kubernetes** : Neues Tutorial zur Nutzung von GPUs in einem Kubernetes-Cluster.
- **Managed Kubernetes** : Ersetzung von KubeCost durch einen aktuelleren Guide zu **OpenCost**.
- **Network (VPC)** : Vollständige Dokumentation des Virtual Private Cloud (VPC)-Dienstes, einschließlich der Hochverfügbarkeits-Konzepte (HA), der Einstiegsguides und der Tutorials.

### 11. Dezember 2025 : Neuheiten Managed Kubernetes

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zur Nutzung von **Gateway API** für die erweiterte Verkehrssteuerung.
- **Managed Kubernetes** : Aktualisierung der Dokumentation zur Quotenverwaltung (Ceph) und Optimierung der Kostenmanagement-Tools (OpenCost).

### 22. November 2025 : Neuheiten LLMaaS und globale Verbesserungen

- **LLMaaS (OCR)** : Hinzufügen einer vollständigen Dokumentation für **DeepSeek-OCR**, unser neues Modell, das auf Dokumentenanalyse spezialisiert ist (PDF, Bilder), in der Lage, strukturierten Text, Tabellen und mathematische Formeln zu extrahieren.

### 20. November 2025 : Major Update PaaS OpenShift

- **PaaS OpenShift (PR #194)** : Redesign und vollständige Aktualisierung der OpenShift-Dokumentation, einschließlich neuer Screenshots und einer vollständigen Übersetzung in Englisch, Spanisch, Deutsch und Italienisch zur Unterstützung unserer internationalen Expansion.

### 3. November 2025 : Verbesserung der Kubernetes-Tutorials

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zum Continuous Deployment mit **ArgoCD** und dem GitOps-Ansatz.
- **Managed Kubernetes** : Überprüfung und Verbesserung der bestehenden Tutorials. Die Guides zu Deployment, Netzwerk, Berechtigungsverwaltung (Capsule) und Backup (Kasten) wurden erweitert, um die Fragen der Sicherheit, Governance und Kosten besser zu adressieren, als Antwort auf die Erwartungen der Profile RSSI und Einkauf.

### 28. Oktober 2025 : Neue Managed-Kubernetes-Dokumentation und verschiedene Verbesserungen

- **Managed Kubernetes (PR #193 & améliorations)**: Hinzufügen einer vollständigen Dokumentation für den neuen Managed-Kubernetes-Dienst. Der Abschnitt umfasst eine presentazione del service, i concetti tecnici, un guide di démarrage, un primo tutoriel, e la matrice di responsabilités (RACI). Der Inhalt wurde erweitert, um den Erwartungen der verschiedenen Nutzerprofile besser zu entsprechen.
- **Stockage Objet (PR #190, #189)**: Hinzufügen von zwei neuen Tutorials für den Object-Storage-Dienst : eines zur Zugriffsverwaltung auf S3-Buckets und eines zur Nutzung von Restic für Backups.
- **Contractuel (PR #191)**: Korrektur und Aktualisierung des Dokuments "Data Processing Agreement" (DPA).

### 18. Oktober 2025 : Wartung und neue Dokumentationen

- **LLMaaS** : Hinzufügen einer neuen Frage zur FAQ zur Vorstellung der öffentlichen Statusseite ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), um die Verfügbarkeit und Leistung jedes Modells in Echtzeit zu verfolgen.
- **Contractuel** : Major Update des Data Processing Agreement (DPA v2), um die letzten gesetzlichen und Konformitätsanforderungen widerzuspiegeln.
- **Konsole** : Verbesserung und Klarstellung der Dokumentation zur Bestellverwaltung.
- **Marketplace** : Hinzufügen eines detaillierten Tutorials zur Anpassung von VM-Images zur Erstellung wiederverwendbarer Templates.
- **LLMaaS** : Hinzufügen eines Guides zur Konfiguration der VSCode-Erweiterung CLINE, um die Sprachmodelle von Cloud Temple direkt aus dem Editor zu nutzen.
- **Stockage Objet (OSS)** : Hinzufügen von Präzisierungen zur Lifecycle-Policy für die Datenlöschung.
- **Stockage Objet (OSS)** : Hinzufügen eines Fehlersuchguides für Checksum-Fehler (`XAmzContentSHA256Mismatch`) mit AWS CLI und Terraform.
- **LLMaaS** : Aktualisierung der Liste der verfügbaren Modelle und Neuübersetzung von über 50 Dokumenten zur Sicherstellung der Kohärenz.

### 14. August 2025 : Verbesserungen und Korrekturen

- **LLMaaS** : Aktualisierung und Klarstellung der FAQ-Antworten, um technische und strategische Fragen besser zu adressieren. Hinzufügen der FAQ zur Navigation.

### Juli 2025: Neuheiten und wichtige Updates

- **Objektspeicher (OSS)** :
  - Vollständige Überarbeitung der Tutorials-Sektion mit dedizierten Anleitungen für beliebte Tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python-SDK Boto3.
  - Hinzufügung von Details zu den Konzepten von Speicherkonten und der Objektverriegelung (Object Lock).
- **IaaS OpenSource** :
  - Hinzufügung einer detaillierten Dokumentation zur Verwaltung der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole** :
  - Aktualisierung der Seite für Sicherheitswarnungen mit den neuesten Schwachstellen.
- **Netzwerk** :
  - Hinzufügung neuer Screenshots zur Veranschaulichung der IPv6-Connectivity-Konfiguration.

### 29. Juni 2025: Abschluss der LLMaaS-Dokumentation

- Validierung der vollständigen Testsuite.
- Korrektur und Validierung der RAG-Pipelines mit FAISS und Qdrant.
- Anreicherung der Tutorials mit detaillierteren technischen Erklärungen.
- Hinzufügung eines Abschnitts zur Prompt-Sicherheit und zum Lebenszyklus der Modelle in den Konzepten.
- Verbesserung der RAG-Erklärungsseite mit Schemata und Details zu Embedding-Modellen.
- Aktualisierung der API-Dokumentation, des Schnellstartguides und der Service-Präsentation.
- Hinzufügung der Preisgestaltung für den Endpoint Transcription Audio.
- Hinzufügung des vorausschauenden Plans für den Lebenszyklus der Modelle.
- Hinzufügung der Verantwortlichkeitsmatrix für das LLMaaS-Angebot.
