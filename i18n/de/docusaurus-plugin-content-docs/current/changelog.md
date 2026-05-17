---
title: Änderungsverfolgung
sidebar_position: 2
---

# Änderungsverfolgung

### 4 Mai 2026 : Sicherheitsupdates — Docker-Image (CVE Alpine)

- **Sicherheit (Docker)** : Aufnahme von `apk upgrade --no-cache` in die finale Stage `nginx:stable-alpine` der Produktions-Dockerfiles (`Dockerfile` und `Dockerfile.prebuilt`). Dieses Update behebt sämtliche von Harbor/Trivy auf dem Image `3.24.3` erkannten CVEs der Schweregrade Critical und High, die mit den eingefrorenen Alpine-Paketen zusammenhängen: `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. Der nächste Build erstellt ein Image, das alle diese Pakete in ihrer jeweils neuesten, gepatchten Version enthält.

### 30. April 2026 : Präzisierungen zur Speicherperformance

- **Speicher (IaaS VMware, OpenSource, Bare Metal)** : Hinzufügen der absoluten Obergrenzen für IOPS und maximale Bandbreite für alle Speicherklassen. Diese Informationen ermöglichen eine bessere Dimensionierung der Umgebungen entsprechend den Leistungsanforderungen.

### 24. April 2026: Erweiterung der IaaS OpenSource-Sicherungsdokumentation

- **IaaS OpenSource (Sauvegarde)** : Erweiterung des Sicherungsabschnitts mit Details zur technischen Architektur (sauvegarde incrémentale, impact du Thick provisioning sur le stockage), Sicherheit (chiffrement AES-256, isolation réseau), Monitoring und Zeitplanung. Übersetzungen verfügbar in EN/DE/ES/IT.

### 20. April 2026: Aktualisierung der Dimensionierung für Managed Database

- **Managed MariaDB & PostgreSQL** : Aktualisierung der verfügbaren maximalen Dimensionierungsprofile für verwaltete Datenbankdienste.

### 17. April 2026: VM-Instanzen — illustrierte Dokumentation, Tutorials und Übersetzungen

- **VM-Instanzen — Dokumentationserweiterung**: Vollständige Überarbeitung und Illustration der VM-Instanzen-Dokumentation. Der Schnellstartleitfaden (`quickstart.md`) deckt nun den gesamten illustrierten Benutzerpfad ab: Zugriff auf den Bereich, VM-Liste, 9-Schritte-Erstellungsassistent (Instanzfamilie, Verfügbarkeitszone, OS-Vorlage, Layout, Name/Sicherung, Cloud Init, Festplatten, Netzwerk, Übersicht) und Verwaltung der 4 Registerkarten (Informationen, Festplatten, Netzwerk, Snapshots).
- **VM-Instanzen — Tutorials**: Erstellung von 3 dedizierten Tutorials in einem `tutorials/`-Ordner: (1) **Erstellen Ihrer ersten VM** (vollständiger illustrierter Assistent + Cloud Init + zusätzliche Festplatte), (2) **Verwalten von Festplatten** (Hinzufügen über die Konsole + Linux-Partitionierung), (3) **Erstellen und Verwalten von Snapshots** (Erstellung, Wiederherstellung, Löschung + Best Practices und Snapshot/Sicherungs-Vergleich). Die Seitennavigation wird um 3 einzelne Einträge in der Kategorie Tutorials aktualisiert.

### 17. April 2026: Vertragsdokumente, Übersetzungen und terminologische Harmonisierung

- **Vertragsdokumente — Neustrukturierung** : Die Seite `contracts.md` wurde neu strukturiert, wobei die Hierarchie der Vertragsdokumente an den Seitenanfang gestellt wurde. Dies umfasst die Prioritätsliste der 6 Dokumente (CGVU, Convention SecNumCloud, spezifisches Übereinkommen ¹, PAS ², CPU, DPA) sowie eine Hinweisbox mit vertragsrechtlichen Präzisierungen.

### 16. April 2026 : Neugestaltung der Navigation, Vertragsdokumente und Updates

- **Navigation — Compute** : Zusammenfassung von VM-Instanzen (Vorschau), IaaS OpenSource und IaaS VMware unter einer einzigen Kategorie **Compute** in der Navigation (PR #277).
- **Navigation — Network** : Zusammenfassung von VPC (Vorschau) und Private Backbone unter einer einzigen Kategorie **Network** in der Navigation.
- **Vertragsdokumente** : Vollständige Neustrukturierung der Vertragsdokumentation – Erstellung einer Hub-Seite `/contracts` (Allgemeine Geschäftsbedingungen, Besondere Bedingungen, SecNumCloud-Servicevereinbarungen, SLA VM-Instanzen) und einer Hub-Seite `/shared-responsibility` (RACI-Matrizen pro Dienst: IaaS, S3, PaaS, Kubernetes, LLMaaS, Netzwerk). Das seitliche Vertragsmenü wird durch eine dedizierte Spalte **Vertraglich** im Footer ersetzt. Übersetzungen verfügbar EN/DE/ES/IT.
- **VM-Instanzen** : Aktualisierung des Service-Level-Agreements (SLA) von 99,9 % auf 99,95 %.
- **IaaS OpenSource** : Hinzufügung eines Hinweises zur maximalen Aufbewahrungsdauer von Backups (maximal 24 Monate, Migration zu Glacier im T1 2027 geplant).

### 15. April 2026: Neue Dokumentation zu VM-Instanzen (Cloud Public)

- **VM-Instanzen**: Veröffentlichung der Erstdokumentation zum Dienst VM-Instanzen (en preview), das neue Angebot für geteilte virtuelle Maschinen von Cloud Temple. Die Dokumentation umfasst einen Überblick über den Dienst, technische Konzepte (Service-Klassen Development/General Purpose/Performance, vordefinierte und benutzerdefinierte Vorlagen, Speicher, VPC-Netzwerk, Sicherung) sowie einen vollständigen Schnellstartleitfaden. Der Dienst ist in der Navigation unter der neuen Kategorie **Cloud Public** eingeordnet.

### 15. April 2026: Verbesserung der IaaS VMware-Dokumentation — Cluster-Metriken

- **IaaS VMware** : Hinzufügen einer detaillierten Dokumentation zu den Metriken, die in der Ansicht eines VMware-Clusters über die Cloud Temple Console angezeigt werden. Deckt die drei Speicherdiagramme des Clusters ab: **Allozierter Speicher** (quantité totale allouée aux VMs), **Verbrauchter Speicher** (mémoire physique réellement utilisée par les VMs) und **Zuweisung im Worst-Case** (projection de consommation maximale simultanée), mit einer genauen Beschreibung der Bedeutung jedes Indikators zur Vorausplanung des Ressourcenbedarfs.

### 15. April 2026 : Dokumentation zu Managed MariaDB, Managed PostgreSQL und mehrsprachige Korrekturen

- **Managed MariaDB** : Veröffentlichung der ersten Dokumentation für den Managed MariaDB-Service (Preview) : Service-Übersicht, technische Konzepte (StandAlone- und Distributed-Architekturen), Schnellstartanleitung. 
- **Managed PostgreSQL** : Veröffentlichung der ersten Dokumentation für den Managed PostgreSQL-Service (Preview) : Service-Übersicht, technische Konzepte, Schnellstartanleitung.
- **Mehrsprachige Korrekturen (Bilder)** : Korrektur der Bildreferenzen in den Übersetzungen der Abschnitte Managed Kubernetes und Managed MariaDB für alle Sprachen (EN, DE, ES, IT) — Umstellung von relativen Pfaden `./images/` auf absolute Pfade `@site/docs/...`, um eine korrekte Darstellung in allen Sprachen zu gewährleisten.
- **Korrekturen defekter Links** : Behebung mehrerer defekter Links in der Dokumentation: Verweise auf LLMaaS-Lizenzen, Link zur Konsole im rclone-Tutorial (OSS), IAM-Link in der Netzwerkdokumentation (EN), relative Links im Terraform-Abschnitt (EN).

### 15. April 2026 : Neues Modul Kostenmanager

- **Konsole (Kostenmanager)** : Hinzufügen der vollständigen Dokumentation des neuen Verbrauchsverfolgungsmoduls, das über die Cloud Temple-Konsole zugänglich ist. Deckt das Dashboard, den Gesamtverbrauch (mit Monatsendprognose), die Aufschlüsselung nach Produkt und Dienstleistung, die zeilenweisen Abrechnungsdetails sowie den Preiskatalog ab.

### 26. März 2026 : Aktualisierung der Liste der Unterauftragnehmer (DPA)

- **Vertraglich** : Aktualisierung der Vertragsanlage zu personenbezogenen Daten (DPA) - Überarbeitung der Liste der Unterauftragnehmer (Streichung von Microsoft Azure und Amazon Web Services, Änderung der Tätigkeit für Iron Mountain) und Ergänzung des Genehmigungsdatums.

### 19. März 2026: Verbesserungen der IaaS- und Terraform-Dokumentation

- **IaaS OpenSource** : Neuer vollständiger Leitfaden zum Erstellen einer virtuellen Maschine. Das Tutorial deckt die drei verfügbaren Bereitstellungsmethoden (Vorlage, XVA-Import, Marketplace) mit schrittweisen Anleitungen und Empfehlungen für Best Practices ab.
- **IaaS VMware** : Neue Seite, die alle verfügbaren Tutorials zusammenfasst, um die Navigation und das Auffinden der Leitfäden zu erleichtern.
- **Terraform** : Neuer Abschnitt, der erklärt, wie automatisch Benachrichtigungen über neue Versionen des Terraform-Providers über GitHub empfangen werden.

### 19. März 2026: DPA-Aktualisierung und HDS-Konformität

- **Vertraglich** : Aktualisierung des Vertragsanhangs für personenbezogene Daten (DPA) auf Version 1.0. Integration der neuesten Anforderungen der HDS-Zertifizierung (Hébergeur de Données de Santé) und Aktualisierung der Liste der zugelassenen Subunternehmer. Vollständige Übersetzung ins Englische, Deutsche, Spanische und Italienische.

### 21. Februar 2026 : SEO-Optimierung

- **SEO** : Korrektur der Produktions-URL (`https://docs.cloud-temple.com`) und des Basispfads (`/`) in der Docusaurus-Konfiguration, um korrekte kanonische URLs für die Google-Indexierung zu gewährleisten.
- **Sitemap** : Aktivierung der automatischen Generierung der Sitemap (`/sitemap.xml`), um das Crawling und die Indexierung durch Suchmaschinen zu verbessern.
- **Robots.txt** : Hinzufügen einer `robots.txt`-Datei, die das vollständige Crawling der Website erlaubt und auf die Sitemap verweist.

### 21. Februar 2026 : Erweiterte Netzwerkkonzepte und mehrsprachige Verbesserungen

- **Netzwerk (Internet)** : Neue Seite zu **erweiterten Konzepten**, die BGP-Communities und die Steuerung der Local Preference im Internet-Backbone von Cloud Temple (AS33930) dokumentiert. Enthält eine Konfigurationsanleitung mit einem Bird-Beispiel.
- **LLMaaS** : Aktualisierung des Modellkatalogs und Hinzufügung des Modell-Lebenszyklus. Aufnahme von LTS-Modellen (Long Term Support).
- **Konsole (Sicherheit)** : Verbesserung der Übersetzungsqualität von Sicherheitswarnungen (anglais, allemand, espagnol, italien).
- **Mehrsprachigkeit** : Übersetzung der neuen Seite zu erweiterten Netzwerkkonzepten in die 4 Sprachen (en, de, es, it) sowie umfassende Verbesserung der Qualität bestehender Übersetzungen.
- **IaaS Bare Metal** : Präzisierungen zum BFS-Volume (Boot from SAN) im Quickstart-Leitfaden hinzugefügt: Volume 1 ist ausschließlich für die OS-Installation vorgesehen, nicht innerhalb derselben AZ teilbar; es wird empfohlen, Daten auf einem zusätzlichen LUN-Volume zu speichern.
- **Objektspeicher (OSS)** : Hinzufügung einer **FAQ**-Seite, die den S3-Zugriff, IP-Whitelists, signierte URLs und empfohlene Anwendungsszenarien abdeckt.

### 10. Februar 2026 : Preisanpassung LLMaaS

- **LLMaaS** : Globale Aktualisierung der API-Preise (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) in der gesamten technischen und kommerziellen Dokumentation.

### 5. Februar 2026 : Klarstellungen zu den Service-Level-Agreements (SLA)

- **Managed Kubernetes** : Vollständige Aktualisierung und Abschluss der Service-Level-Agreements (SLA) für das Managed-Kubernetes-Angebot.

### 21. Januar 2026: Sicherheitsverbesserungen und Übersetzungen

- **Console Management** : Aktualisierung der internationalen Übersetzungen (Englisch, Deutsch, Spanisch, Italienisch) für Sicherheitswarnungen in der Management-Konsole.

### 19. Januar 2026 : Erweiterung Managed Kubernetes und VPC

- **Managed Kubernetes** : Unterstützung für Knoten **Bare Metal** und **GPUs** (NVIDIA) hinzugefügt.
- **Managed Kubernetes** : Neues Tutorial zur Verwendung von GPUs in einem Kubernetes-Cluster.
- **Managed Kubernetes** : KubeCost wurde durch einen aktuelleren Leitfaden zu **OpenCost** ersetzt.
- **Network (VPC)** : Vollständige Dokumentation des Virtual Private Cloud (VPC)-Diensts, einschließlich High-Availability-Konzepten (HA), Schnellstartanleitungen und Tutorials.
- **Mehrsprachig** : Vollständige Übersetzung des VPC-Diensts und der neuen Kubernetes-Inhalte ins Englische, Deutsche, Spanische und Italienische.

### 15. Dezember 2025: Stabilisierung und mehrsprachige Korrekturen

- **Mehrsprachig (Terraform, LLMaaS, Harbor)** : Wesentliche Korrektur der spanischen, italienischen und deutschen Übersetzungen. Behebung von MDX-Syntaxproblemen (leere Codeblöcke, nicht maskierte Tags), die die Kompilierung der Website verhinderten.
- **Mehrsprachig (Bilder)** : Wiederherstellung der korrekten Bildpfade in der italienischen und deutschen Version für die Abschnitte Bastion und IaaS VMware.
- **Build** : Validierung des Deployments für alle 5 unterstützten Sprachen.

### 11. Dezember 2025: Neuerungen im Managed Kubernetes

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zur Verwendung der **Gateway API** für das fortgeschrittene Traffic-Management.
- **Managed Kubernetes** : Aktualisierung der Dokumentation zur Quota-Verwaltung (Ceph) und Optimierung der Tools zur Kostenverwaltung (OpenCost).

### 22. November 2025: Neue Funktionen in LLMaaS und globale Verbesserungen

- **LLMaaS (OCR)** : Hinzufügen einer vollständigen Dokumentation für **DeepSeek-OCR**, unser neues Modell, das auf die Dokumentenanalyse (PDF, Bilder) spezialisiert ist und strukturierten Text, Tabellen sowie mathematische Formeln extrahieren kann.
- **Mehrsprachig** : Behebung von Barrierefreiheitsproblemen in der italienischen und deutschen Version der Dokumentation.
- **Qualité** : Korrektur der Anzeige von Codeblöcken in den LLMaaS-Tutorials und Wiederherstellung der fehlenden Bilder in der Schnellstartanleitung für VMware IaaS (italienische Version).

### 20. November 2025: Großes PaaS OpenShift-Update

- **PaaS OpenShift (PR #194)**: Neugestaltung und vollständige Aktualisierung der OpenShift-Dokumentation, einschließlich neuer Screenshots sowie einer vollständigen Übersetzung ins Englische, Spanische, Deutsche und Italienische zur Unterstützung unserer internationalen Expansion.

### 3. November 2025: Verbesserung der Kubernetes-Tutorials

- **Managed Kubernetes** : Hinzufügung eines neuen Tutorials zum Continuous Deployment mit **ArgoCD** und dem GitOps-Ansatz.
- **Managed Kubernetes** : Überarbeitung und Verbesserung bestehender Tutorials. Die Anleitungen zu Bereitstellung, Netzwerk, Berechtigungsverwaltung (Capsule) und Sicherung (Kasten) wurden erweitert, um den Themen Sicherheit, Governance und Kosten besser gerecht zu werden, in Reaktion auf die Erwartungen von CISO- und Einkäuferprofilen.

### 28. Oktober 2025: Neue Managed-Kubernetes-Dokumentation und diverse Verbesserungen

- **Managed Kubernetes (PR #193 & Verbesserungen)**: Ergänzung um eine vollständige Dokumentation für den neuen Managed-Kubernetes-Dienst. Der Abschnitt umfasst eine Präsentation des Dienstes, die technischen Konzepte, eine Schnellstartanleitung, ein erstes Tutorial sowie die Verantwortlichkeitsmatrix (RACI). Der Inhalt wurde erweitert, um den Erwartungen verschiedener Nutzerprofile besser gerecht zu werden.
- **Objektspeicher (PR #190, #189)**: Zwei neue Tutorials für den Objektspeicherdienst wurden hinzugefügt: eines zur Verwaltung von S3-Bucket-Zugriffen und eines zur Nutzung von Restic für Backups.
- **Verträge (PR #191)**: Korrektur und Aktualisierung des Dokuments „Data Processing Agreement“ (DPA).

### 18. Oktober 2025 : Wartung und neue Dokumentationen

- **LLMaaS** : Hinzufügen einer neuen Frage zur FAQ zur Vorstellung der öffentlichen Statusseite ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), die eine Echtzeitüberwachung der Verfügbarkeit und Leistung jedes Modells ermöglicht.
- **Contractuel** : Wesentliche Aktualisierung des Data Processing Agreement (DPA v2), um den neuesten gesetzlichen und Compliance-Anforderungen zu entsprechen.
- **Console** : Verbesserung und Präzisierung der Dokumentation zur Auftragsverwaltung.
- **Marketplace** : Hinzufügen eines detaillierten Tutorials zur Anpassung von Virtual-Machine-Images (VM), um wiederverwendbare Templates zu erstellen.
- **LLMaaS** : Hinzufügen einer Anleitung zur Konfiguration der VSCode-CLINE-Erweiterung, um die Sprachmodelle von Cloud Temple direkt aus dem Editor heraus zu nutzen.
- **Objektspeicher (OSS)** : Hinzufügen von Erläuterungen zur Lifecycle-Richtlinie (Lifecycle) für die Datenlöschung.
- **Objektspeicher (OSS)** : Hinzufügen einer Fehlerbehebungsanleitung für Checksummenfehler (`XAmzContentSHA256Mismatch`) mit AWS CLI und Terraform.
- **LLMaaS** : Aktualisierung der Liste verfügbarer Modelle und Übersetzung von über 50 Dokumenten zur Sicherstellung der Konsistenz.

### 14. August 2025 : Verbesserungen und Korrekturen

- **LLMaaS** : Aktualisierung und Präzisierung der FAQ-Antworten, um technische und strategische Fragen besser zu beantworten. Integration der FAQ in die Navigation.
- **Allgemein** : Korrektur mehrerer interner Navigationslinks in der gesamten Dokumentation für eine flüssigere Nutzererfahrung.

### Juli 2025 : Wichtige Neuerungen und Updates

- **Objektspeicher (OSS)** :
  - Komplette Überarbeitung des Tutorial-Bereichs mit dedizierten Anleitungen für beliebte Tools : AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python Boto3 SDK.
  - Hinzufügen von Erläuterungen zu den Konzepten von Speicherkonten und Objektsperrung (Object Lock).
- **Open-Source-IaaS** :
  - Hinzufügen einer detaillierten Dokumentation zum Management der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole** :
  - Aktualisierung der Seite für Sicherheitswarnungen mit den neuesten Schwachstellen.
- **Netzwerk** :
  - Hinzufügen neuer Screenshots zur Veranschaulichung der Konfiguration der IPv6-Konnektivität.

### 29. Juni 2025: Finalisierung der LLMaaS-Dokumentation

- Validierung der vollständigen Testsuite.
- Korrektur und Validierung der RAG-Pipelines mit FAISS und Qdrant.
- Erweiterung der Tutorials um detailliertere technische Erklärungen.
- Hinzufügen eines Abschnitts zur Prompt-Sicherheit und zum Modelllebenszyklus in den Konzepten.
- Verbesserung der RAG-Erklärungsseite mit Diagrammen und Details zu den Embedding-Modellen.
- Aktualisierung der API-Dokumentation, der Schnellstartanleitung und der Servicepräsentation.
- Hinzufügen des Pricings für den Audio-Transkriptions-Endpoint.
- Hinzufügen des voraussichtlichen Zeitplans für den Modelllebenszyklus.
- Hinzufügen der Verantwortlichkeitsmatrix für das LLMaaS-Angebot.