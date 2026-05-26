---
title: Änderungsverfolgung
sidebar_position: 2
---

# Änderungsverlauf

### 26 Mai 2026 : Verbesserung des Übersetzungs-Workflows

- **Übersetzung (Tooling)** : Hinzufügen der Optionen `--token`, `--url` und `--model` zum Python-Skript `scripts/translate_py/translate.py`. Das API-Token kann nun direkt über die Befehlszeile angegeben werden, ohne eine `.env`-Datei neu erstellen zu müssen. CLI-Optionen haben Vorrang vor Umgebungsvariablen.
- **Übersetzung (Konfiguration)** : Aktualisierung des Standard-Übersetzungsmodells auf `qwen3.6:27b`, wobei der Standard-Endpoint für Cloud Temple LLMaaS `https://api.ai.cloud-temple.com/v1/chat/completions` beibehalten wird.
- **Übersetzung (Dry-Run)** : Der Simulations-Workflow bleibt auch ohne API-Token nutzbar, um die zu übersetzenden Dateien vor der tatsächlichen Ausführung zu überprüfen.

### 4. Mai 2026: Sicherheitspatches — Docker-Image (Alpine CVEs)

- **Sicherheit (Docker)**: Hinzufügen von `apk upgrade --no-cache` in die finale Stage `nginx:stable-alpine` der Produktions-Dockerfiles (`Dockerfile` und `Dockerfile.prebuilt`). Dieses Update behebt alle von Harbor/Trivy im Image `3.24.3` erkannten Critical- und High-CVEs, die mit den eingefrorenen Alpine-Paketen zusammenhängen: `libcrypto3`, `libssl3`, `libxml2`, `libxslt`, `libexpat`, `libpng`, `zlib`, `c-ares`, `musl`, `xz-libs`, `busybox`, `curl`. Der nächste Build wird ein Image mit allen diesen Paketen in ihrer jeweils neuesten gepatchten Version erzeugen.

### 30. April 2026 : Details zu den Speicherleistungen

- **Speicher (IaaS VMware, OpenSource, Bare Metal)** : Hinzufügen der absoluten IOPS- und maximalen Bandbreitengrenzen für alle Speicherklassen. Diese Informationen ermöglichen eine bessere Dimensionierung der Umgebungen entsprechend den Leistungsanforderungen.

### 24. April 2026: Erweiterung der IaaS OpenSource-Dokumentation zur Sicherung

- **IaaS OpenSource (Sicherung)** : Ergänzung des Sicherungsabschnitts um Details zur technischen Architektur (inkrementelle Sicherung, Auswirkungen von Thick Provisioning auf den Speicher), Sicherheit (AES-256-Verschlüsselung, Netzwerkisolation), Monitoring und Zeitplanbeschränkungen. Übersetzungen verfügbar: EN/DE/ES/IT.

### 20. April 2026 : Aktualisierung der Dimensionierung für Managed Database

- **Managed MariaDB & PostgreSQL** : Aktualisierung der maximal verfügbaren Dimensionierungsvorlagen für die verwalteten Datenbankdienste.

### 17. April 2026: VM-Instanzen — illustrierte Dokumentation, Tutorials und Übersetzungen

- **VM-Instanzen — Dokumentationserweiterung** : Vollständige Überarbeitung und Illustration der VM-Instanzen-Dokumentation. Der Schnellstart-Leitfaden (`quickstart.md`) deckt nun den gesamten illustrierten Benutzerpfad ab: Zugriff auf den Bereich, VM-Liste, 9-Schritte-Erstellungs-Assistent (Instanzfamilie, Verfügbarkeitszone, OS-Vorlage, Schema, Name/Sicherung, Cloud-Init, Datenträger, Netzwerk, Zusammenfassung) und Verwaltung der 4 Registerkarten (Informationen, Datenträger, Netzwerk, Snapshots).
- **VM-Instanzen — Tutorials** : Erstellung von 3 dedizierten Tutorials in einem `tutorials/`-Verzeichnis: (1) **Erste VM erstellen** (vollständiger illustrierter Assistent + Cloud-Init + zusätzlicher Datenträger), (2) **Datenträger verwalten** (Hinzufügen über die Konsole + Linux-Partitionierung), (3) **Snapshots erstellen und verwalten** (Erstellung, Wiederherstellung, Löschung + Best Practices und Vergleich Snapshot/Sicherung). Die Seitennavigation wurde mit 3 einzelnen Einträgen in der Kategorie Tutorials aktualisiert.

### 17. April 2026 : Vertragsdokumente, Übersetzungen und terminologische Harmonisierung

- **Vertragsdokumente — Umstrukturierung** : Die Seite `contracts.md` wurde mit der Hierarchie der Vertragsdokumente am Seitenanfang neu organisiert, einschließlich der Prioritätsliste der 6 Dokumente (CGVU, Convention SecNumCloud, Convention spécifique ¹, PAS ², CPU, DPA) und einem Hinweiskasten mit vertraglichen Präzisierungen.

### 16. April 2026 : Überarbeitung der Navigation, Vertragsdokumente und Updates

- **Navigation — Compute** : Zusammenfassung von VM-Instanzen (Vorschau), IaaS OpenSource und IaaS VMware unter einer einzigen Kategorie **Compute** in der Navigation (PR #277).
- **Navigation — Netzwerk** : Zusammenfassung von VPC (Vorschau) und Private Backbone unter einer einzigen Kategorie **Netzwerk** in der Navigation.
- **Vertragsdokumente** : Vollständige Neustrukturierung der Vertragsdokumentation — Erstellung einer Hub-Seite `/contracts` (Allgemeine Geschäftsbedingungen, besondere Bedingungen, SecNumCloud-Servicevereinbarungen, SLA für VM-Instanzen) und einer Hub-Seite `/shared-responsibility` (RACI-Matrizen pro Dienst: IaaS, S3, PaaS, Kubernetes, LLMaaS, Netzwerk). Das vertragliche Seitenmenü wird durch eine dedizierte Spalte **Verträge** im Footer ersetzt. Übersetzungen verfügbar in EN/DE/ES/IT.
- **VM-Instanzen** : Aktualisierung der Service-Level-Vereinbarung (SLA) von 99,9 % auf 99,95 %.
- **IaaS OpenSource** : Hinzufügen eines Hinweises zur maximalen Aufbewahrungsdauer von Backups (maximal 24 Monate, Migration zu Glacier geplant für Q1 2027).

### 15. April 2026: Neue Dokumentation für VM-Instanzen (Cloud Public)

- **VM-Instanzen**: Veröffentlichung der ersten Dokumentation für den Dienst VM-Instanzen (in der Vorschau), ein neues Angebot für gemeinsam genutzte virtuelle Maschinen von Cloud Temple. Die Dokumentation umfasst einen Überblick über den Dienst, technische Konzepte (Serviceklassen Development/General Purpose/Performance, vordefinierte und benutzerdefinierte Vorlagen, Speicher, VPC-Netzwerk, Sicherung) sowie einen vollständigen Einstiegsleitfaden. Der Dienst ist in der Navigation unter einer neuen Kategorie **Cloud Public** organisiert.

### 15. April 2026: Verbesserung der IaaS VMware-Dokumentation — Cluster-Metriken

- **IaaS VMware**: Hinzufügen einer detaillierten Dokumentation zu den Metriken, die in der Ansicht eines VMware-Clusters über die Cloud Temple-Konsole angezeigt werden. Umfasst die drei Speicherdiagramme des Clusters: **Zugewiesener Speicher** (Gesamtmenge, die den VMs zugewiesen ist), **Verbrauchter Speicher** (physischer Speicher, der tatsächlich von den VMs genutzt wird) und **Worst-Case-Zuweisung** (Projektion des maximalen gleichzeitigen Verbrauchs), mit einer präzisen Beschreibung der Bedeutung jedes Indikators zur vorausschauenden Planung des Ressourcenbedarfs.

### 15. April 2026 : Dokumentation Managed MariaDB, Managed PostgreSQL und mehrsprachige Korrekturen

- **Managed MariaDB** : Veröffentlichung der Erstdokumentation für den Managed MariaDB-Dienst (in der Vorschau): Vorstellung des Dienstes, technische Konzepte (StandAlone- und Distributed-Architekturen), Schnellstart-Anleitung. 
- **Managed PostgreSQL** : Veröffentlichung der Erstdokumentation für den Managed PostgreSQL-Dienst (in der Vorschau): Vorstellung des Dienstes, technische Konzepte, Schnellstart-Anleitung.
- **Mehrsprachige Korrekturen (Bilder)** : Korrektur der Bildreferenzen in den Übersetzungen der Abschnitte Managed Kubernetes und Managed MariaDB für alle Sprachen (EN, DE, ES, IT) — Konvertierung relativer Pfade `./images/` in absolute Pfade `@site/docs/...` zur Sicherstellung einer korrekten Darstellung in allen Sprachen.
- **Korrekturen defekter Links** : Behebung mehrerer defekter Links in der Dokumentation: Verweise auf LLMaaS-Lizenzen, Link zur Konsole im rclone-Tutorial (OSS), IAM-Link in der Netzwerkdokumentation (EN), relative Links im Terraform-Abschnitt (EN).

### 15. April 2026 : Neuer Kostenmanager-Modul

- **Konsole (Kostenmanager)** : Hinzufügen der vollständigen Dokumentation des neuen Verbrauchsüberwachungsmoduls, das über die Cloud Temple-Konsole zugänglich ist. Umfasst das Dashboard, den Gesamtverbrauch (mit Monatsendprognose), die Aufschlüsselung nach Produkt und Service, die zeilenweisen Abrechnungsdetails und den Preiskatalog.

### 26. März 2026 : Aktualisierung der Liste der Auftragsverarbeiter (DPA)

- **Vertraglich** : Aktualisierung der vertraglichen Anlage zum Schutz personenbezogener Daten (DPA) - Überarbeitung der Liste der Auftragsverarbeiter (Entfernung von Microsoft Azure und Amazon Web Services, Änderung der Tätigkeit für Iron Mountain) und Hinzufügung des Genehmigungsdatums.

### 19. März 2026 : Verbesserungen der IaaS- und Terraform-Dokumentation

- **IaaS OpenSource** : Hinzufügen eines umfassenden Leitfadens zur Erstellung einer virtuellen Maschine. Das Tutorial deckt die drei verfügbaren Bereitstellungsmethoden ab (Vorlage, XVA-Import, Marketplace) mit Schritt-für-Schritt-Anweisungen und Empfehlungen für bewährte Verfahren.
- **IaaS VMware** : Hinzufügen einer Seite, die alle verfügbaren Tutorials zusammenfasst, um die Navigation und das Auffinden der Leitfäden zu erleichtern.
- **Terraform** : Neuer Abschnitt, der erklärt, wie man automatisch Benachrichtigungen über neue Versionen des Terraform-Providers über GitHub erhält.

### 19. März 2026 : Aktualisierung der DPA und HDS-Konformität

- **Vertraglich** : Aktualisierung der Vertraglichen Anlage zu personenbezogenen Daten (DPA) auf Version 1.0. Integration der neuesten Anforderungen der HDS-Zertifizierung (Hébergeur de Données de Santé) und Aktualisierung der Liste der autorisierten Unterauftragnehmer. Vollständige Übersetzung ins Englische, Deutsche, Spanische und Italienische.

### 21. Februar 2026 : Verbesserung der Suchmaschinenoptimierung (SEO)

- **SEO** : Korrektur der Produktions-URL (`https://docs.cloud-temple.com`) und des Basispfads (`/`) in der Docusaurus-Konfiguration, um korrekte kanonische URLs für die Google-Indizierung zu gewährleisten.
- **Sitemap** : Aktivierung der automatischen Sitemap-Generierung (`/sitemap.xml`) zur Verbesserung des Crawlings und der Indizierung durch Suchmaschinen.
- **Robots.txt** : Hinzufügen einer `robots.txt`-Datei, die das vollständige Crawling der Website erlaubt und auf die Sitemap verweist.

### 21. Februar 2026 : Erweiterte Netzwerkkonzepte und mehrsprachige Verbesserungen

- **Netzwerk (Internet)** : Neue Seite zu **erweiterten Konzepten**, die BGP-Communities und die Steuerung der Local Preference im Internet-Backbone von Cloud Temple (AS33930) dokumentiert. Enthält einen Konfigurationsleitfaden mit einem Bird-Beispiel.
- **LLMaaS** : Aktualisierung des Modellkatalogs und Einführung des Modell-Lebenszyklus. Hinzufügen von LTS-Modellen (Long Term Support).
- **Konsole (Sicherheit)** : Verbesserung der Übersetzungsqualität für Sicherheitswarnungen (Englisch, Deutsch, Spanisch, Italienisch).
- **Mehrsprachigkeit** : Übersetzung der neuen Seite zu erweiterten Netzwerkkonzepten in die 4 Sprachen (en, de, es, it) und allgemeine Verbesserung der Qualität bestehender Übersetzungen.
- **IaaS Bare Metal** : Präzisierungen zum BFS-Volumen (Boot from SAN) im Startleitfaden hinzugefügt: Volume 1 ist der OS-Installation vorbehalten, nicht innerhalb derselben AZ teilbar, mit der Empfehlung, Daten auf einem zusätzlichen LUN-Volumen zu speichern.
- **Objektspeicher (OSS)** : Hinzufügen einer **FAQ**-Seite, die S3-Zugriff, IP-Whitelists, vorab signierte Links und empfohlene Anwendungsszenarien abdeckt.

### 10. Februar 2026: Aktualisierung der LLMaaS-Preise

- **LLMaaS** : Umfassende Aktualisierung der API-Preise (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) in der gesamten technischen und kommerziellen Dokumentation.

### 5. Februar 2026: Präzisierungen zu den Service-Level-Vereinbarungen (SLA)

- **Managed Kubernetes**: Vollständige Aktualisierung und Finalisierung der Service-Level-Vereinbarungen (SLA) für das Managed Kubernetes-Angebot.

### 21. Januar 2026 : Sicherheitsverbesserungen und -übersetzungen

- **Console Management** : Aktualisierung der internationalen Übersetzungen (anglais, allemand, espagnol, italien) für die Sicherheitswarnungen in der Management-Konsole.

### 19. Januar 2026 : Erweiterung Managed Kubernetes und VPC

- **Managed Kubernetes** : Hinzufügen der Unterstützung für **Bare-Metal**-Knoten und **GPUs** (NVIDIA).
- **Managed Kubernetes** : Neues Tutorial zur Verwendung von GPUs in einem Kubernetes-Cluster.
- **Managed Kubernetes** : Ersatz von KubeCost durch einen aktuelleren Leitfaden zu **OpenCost**.
- **Network (VPC)** : Vollständige Dokumentation des Virtual Private Cloud (VPC)-Diensts, einschließlich der Konzepte für hohe Verfügbarkeit (HA), Einstiegsleitfäden und Tutorials.
- **Multilingue** : Vollständige Übersetzung des VPC-Diensts und der neuen Kubernetes-Inhalte ins Englische, Deutsche, Spanische und Italienische.

### 15. Dezember 2025 : Stabilisierung und mehrsprachige Korrekturen

- **Mehrsprachigkeit (Terraform, LLMaaS, Harbor)** : Umfassende Korrektur der Übersetzungen ins Spanische, Italienische und Deutsche. Behebung von MDX-Syntaxproblemen (blocs de code vides, balises non échappées), die die Generierung der Website verhinderten.
- **Mehrsprachigkeit (Images)** : Wiederherstellung der korrekten Bildpfade in den italienischen und deutschen Versionen für die Abschnitte Bastion und IaaS VMware.
- **Build** : Validierung der Bereitstellung für alle 5 unterstützten Sprachen.

### 11. Dezember 2025 : Neuigkeiten zu Managed Kubernetes

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zur Verwendung von **Gateway API** für das erweiterte Traffic-Management.
- **Managed Kubernetes** : Aktualisierung der Dokumentation zur Quotaverwaltung (Ceph) und Optimierung der Kostenmanagement-Tools (OpenCost).

### 22. November 2025: LLMaaS-Neuigkeiten und allgemeine Verbesserungen

- **LLMaaS (OCR)**: Hinzufügen einer vollständigen Dokumentation für **DeepSeek-OCR**, unser neues Modell, das auf die Dokumentenanalyse (PDF, Bilder) spezialisiert ist und strukturierten Text, Tabellen sowie mathematische Formeln extrahieren kann.
- **Mehrsprachigkeit**: Behebung von Zugänglichkeitsproblemen in den italienischen und deutschen Versionen der Dokumentation.
- **Qualität**: Korrektur der Codeblock-Darstellung in den LLMaaS-Tutorials und Wiederherstellung der fehlenden Bilder im IaaS-VMware-Einstiegshandbuch (italienische Version).

### 20. November 2025: Wichtige PaaS OpenShift-Aktualisierung

- **PaaS OpenShift (PR #194)** : Vollständige Überarbeitung und Aktualisierung der OpenShift-Dokumentation, einschließlich neuer Screenshots und einer vollständigen Übersetzung ins Englische, Spanische, Deutsche und Italienische zur Unterstützung unserer internationalen Expansion.

### 3. November 2025: Verbesserung der Kubernetes-Tutorials

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zur kontinuierlichen Bereitstellung mit **ArgoCD** und dem GitOps-Ansatz.
- **Managed Kubernetes** : Überarbeitung und Verbesserung der bestehenden Tutorials. Die Anleitungen zur Bereitstellung, zum Netzwerk, zur Berechtigungsverwaltung (Capsule) und zur Sicherung (Kasten) wurden erweitert, um Fragen zu Sicherheit, Governance und Kosten besser zu adressieren, als Reaktion auf die Erwartungen der Profile IT-Sicherheitsverantwortlicher (CISO) und Einkäufer.

### 28. Oktober 2025 : Neue Managed Kubernetes-Dokumentation und weitere Verbesserungen

- **Managed Kubernetes (PR #193 & Verbesserungen)**: Hinzufügen einer umfassenden Dokumentation für den neuen Managed Kubernetes-Dienst. Der Abschnitt enthält eine Vorstellung des Dienstes, technische Konzepte, einen Einstiegsleitfaden, ein erstes Tutorial sowie die Verantwortlichkeitsmatrix (RACI). Der Inhalt wurde erweitert, um den Anforderungen verschiedener Nutzerprofile besser gerecht zu werden.
- **Objektspeicher (PR #190, #189)**: Hinzufügen von zwei neuen Tutorials für den Objektspeicher: eines zur Verwaltung des Zugriffs auf S3-Buckets und eines zur Nutzung von Restic für Backups.
- **Vertragliches (PR #191)**: Korrektur und Aktualisierung des Dokuments "Data Processing Agreement" (DPA).

### 18. Oktober 2025: Wartung und neue Dokumentationen

- **LLMaaS** : Hinzufügen einer neuen Frage zur FAQ zur Vorstellung der öffentlichen Statusseite ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), um die Verfügbarkeit und Leistung jedes Modells in Echtzeit zu verfolgen.
- **Vertraglich** : Wesentliche Aktualisierung des Data Processing Agreement (DPA v2), um die neuesten gesetzlichen und Compliance-Anforderungen widerzuspiegeln.
- **Konsole** : Verbesserung und Klarstellung der Dokumentation zur Bestellverwaltung.
- **Marketplace** : Hinzufügen eines detaillierten Tutorials zur Anpassung von virtuellen Maschinen-Images (VM) zur Erstellung wiederverwendbarer Vorlagen.
- **LLMaaS** : Hinzufügen eines Leitfadens zur Konfiguration der VSCode-Erweiterung CLINE, um die Sprachmodelle von Cloud Temple direkt aus dem Editor heraus zu nutzen.
- **Objektspeicher (OSS)** : Hinzufügen von Präzisierungen zur Lebenszyklusrichtlinie (Lifecycle) für die Datenlöschung.
- **Objektspeicher (OSS)** : Hinzufügen einer Fehlerbehebungsanleitung für Checksummenfehler (`XAmzContentSHA256Mismatch`) mit AWS CLI und Terraform.
- **LLMaaS** : Aktualisierung der Liste der verfügbaren Modelle und Übersetzung von über 50 Dokumenten, um die Konsistenz zu gewährleisten.

### 14. August 2025 : Verbesserungen und Korrekturen

- **LLMaaS** : Aktualisierung und Präzisierung der FAQ-Antworten, um technische und strategische Fragen besser zu beantworten. Hinzufügen der FAQ zur Navigation.
- **Allgemein** : Korrektur mehrerer interner Navigationslinks in der gesamten Dokumentation für ein reibungsloseres Nutzererlebnis.

### Juli 2025: Neuigkeiten und wichtige Updates

- **Objektspeicher (OSS)** :
  - Vollständige Überarbeitung des Tutorial-Bereichs mit dedizierten Anleitungen für beliebte Tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python-SDK Boto3.
  - Hinzufügen von Details zu den Konzepten von Speicherkonten und der Objektsperrung (Object Lock).
- **Open-Source-IaaS** :
  - Hinzufügen einer detaillierten Dokumentation zur Verwaltung der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole** :
  - Aktualisierung der Seite für Sicherheitswarnungen mit den neuesten Schwachstellen.
- **Netzwerk** :
  - Hinzufügen neuer Screenshots zur Veranschaulichung der Konfiguration der IPv6-Konnektivität.

### 29. Juni 2025: Finalisierung der LLMaaS-Dokumentation

- Validierung der vollständigen Testsuite.
- Korrektur und Validierung der RAG-Pipelines mit FAISS und Qdrant.
- Erweiterung der Tutorials um detailliertere technische Erklärungen.
- Hinzufügen eines Abschnitts zur Prompt-Sicherheit und zum Lebenszyklus der Modelle in den Konzepten.
- Verbesserung der RAG-Erklärungsseite mit Diagrammen und Details zu Embedding-Modellen.
- Aktualisierung der API-Dokumentation, des Startguides und der Service-Präsentation.
- Hinzufügen der Preisgestaltung für das Audio-Transkriptions-Endpoint.
- Hinzufügen des vorausschauenden Zeitplans für den Lebenszyklus der Modelle.
- Hinzufügen der Verantwortlichkeitsmatrix für das LLMaaS-Angebot.