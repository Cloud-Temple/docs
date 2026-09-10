---
title: Änderungsverfolgung
sidebar_position: 2
---

# Änderungsverlauf

### 20. August 2026: Harmonisierung der Reifegradbezeichnung für verwaltete Datenbanken

- **Navigation — Databases** : Entfernung des **Beta**-Badges bei den Einträgen **MariaDB Managé** und **PostgreSQL Managé** in der Seitenleiste sowie auf den Karten der Databases-Seite. Beide Dienste zeigten gleichzeitig widersprüchliche Reifegradbezeichnungen: *Beta* in der Navigation, *Preview* im Titel ihrer Produktseiten. Nur das **Preview**-Badge bleibt als einzige verbindliche Quelle für den Reifegrad dieser Dienste erhalten. Übersetzungen verfügbar: EN/DE/ES/IT.

### 15. Juli 2026 : Präzisierung zur Object Storage-Verschlüsselung

- **Object Storage (Sicherheit)** : Der Abschnitt zur Verschlüsselung ruhender Daten (D@RE) präzisiert nun, dass der Dienst eine FIPS 140-3-zertifizierte AES-256-Bit-Verschlüsselung über die Softwarebibliothek RSA BSAFE Crypto-J in Version 7.x verwendet.

### 30. April 2026 : Details zu den Speicherleistungen

- **Speicher (IaaS VMware, OpenSource, Bare Metal)** : Hinzufügen der absoluten Limits für IOPS und maximale Bandbreite für alle Speicherklassen. Diese Informationen ermöglichen eine präzisere Dimensionierung der Umgebungen entsprechend den Leistungsanforderungen.

### 24. April 2026 : Erweiterung der IaaS OpenSource-Dokumentation zur Sicherung

- **IaaS OpenSource (Sicherung)** : Erweiterung des Sicherungsabschnitts mit Details zur technischen Architektur (inkrementelle Sicherung, Auswirkungen von Thick Provisioning auf den Speicher), Sicherheit (AES-256-Verschlüsselung, Netzwerkisolation), Monitoring und Planungsbeschränkungen. Übersetzungen verfügbar in EN/DE/ES/IT.

### 20. April 2026 : Aktualisierung der Dimensionierung für Managed Database

- **Managed MariaDB & PostgreSQL** : Aktualisierung der maximal verfügbaren Dimensionierungsvorlagen für die verwalteten Datenbankdienste.

### 17. April 2026 : VM-Instanzen — illustrierte Dokumentation, Tutorials und Übersetzungen

- **VM-Instanzen — Erweiterung der Dokumentation** : Vollständige Überarbeitung und Illustration der Dokumentation für VM-Instanzen. Der Schnellstart-Leitfaden (`quickstart.md`) deckt nun den gesamten illustrierten Benutzerpfad ab : Zugriff auf den Bereich, Liste der VMs, 9-Schritte-Erstellungsassistent (Instanzfamilie, Verfügbarkeitszone, Betriebssystemvorlage, Schema, Name/Sicherung, Cloud-Init, Datenträger, Netzwerk, Zusammenfassung) und Verwaltung der 4 Registerkarten (Informationen, Datenträger, Netzwerk, Snapshots).
- **VM-Instanzen — Tutorials** : Erstellung von 3 dedizierten Tutorials in einem Ordner `tutorials/` : (1) **Erste VM erstellen** (vollständiger illustrierter Assistent + Cloud-Init + zusätzlicher Datenträger), (2) **Datenträger verwalten** (Hinzufügen über die Konsole + Linux-Partitionierung), (3) **Snapshots erstellen und verwalten** (Erstellung, Wiederherstellung, Löschung + Best Practices und Vergleich Snapshot/Sicherung). Die Seitenleiste wurde mit 3 einzelnen Einträgen in der Kategorie Tutorials aktualisiert.

### 17. April 2026 : Vertragliche Dokumente, Übersetzungen und terminologische Harmonisierung

- **Vertragsdokumente — Neustrukturierung** : Die Seite `contracts.md` wurde neu organisiert, mit der Hierarchie der Vertragsdokumente am Seitenanfang, einschließlich der Prioritätsliste der 6 Dokumente (CGVU, Convention SecNumCloud, Convention spécifique ¹, PAS ², CPU, DPA) und einem Hinweiskasten mit vertraglichen Präzisierungen.

### 16. April 2026 : Überarbeitung der Navigation, Vertragsdokumente und Aktualisierungen

- **Navigation — Compute** : Zusammenfassung von VM Instances (preview), IaaS OpenSource und IaaS VMware unter einer einzigen Kategorie **Compute** in der Navigation (PR #277).
- **Navigation — Network** : Zusammenfassung von VPC (preview) und Private Backbone unter einer einzigen Kategorie **Network** in der Navigation.
- **Vertragsdokumente** : Vollständige Neustrukturierung der Vertragsdokumentation — Erstellung einer Hub-Seite `/contracts` (conditions générales, conditions particulières, conventions de service SecNumCloud, SLA VM instances) und einer Hub-Seite `/shared-responsibility` (matrices RACI par service : IaaS, S3, PaaS, Kubernetes, LLMaaS, Réseau). Die vertragliche Seitenleiste wird durch eine dedizierte Spalte **Vertraglich** im Footer ersetzt. Übersetzungen verfügbar EN/DE/ES/IT.
- **VM Instances** : Aktualisierung des Service-Level-Engagements (SLA) von 99,9 % auf 99,95 %.
- **IaaS OpenSource** : Hinzufügen eines Hinweises zur maximalen Aufbewahrungsdauer der Backups (24 mois maximum, migration vers Glacier prévue au T1 2027).

### 15. April 2026: Neue Dokumentation für VM-Instanzen (Cloud Public)

- **VM-Instanzen** : Veröffentlichung der ersten Dokumentation für den Dienst VM-Instanzen (en preview), ein neues Angebot für geteilte virtuelle Maschinen von Cloud Temple. Die Dokumentation umfasst einen Überblick über den Dienst, technische Konzepte (Serviceklassen Development/General Purpose/Performance, vordefinierte und benutzerdefinierte Vorlagen, Speicher, VPC-Netzwerk, Sicherung) sowie einen umfassenden Schnellstart-Leitfaden. Der Dienst ist in der Navigation unter einer neuen Kategorie **Cloud Public** organisiert.

### 15. April 2026: Verbesserung der IaaS-VMware-Dokumentation — Clustermetriken

- **IaaS VMware**: Hinzufügen einer detaillierten Dokumentation zu den Metriken, die in der VMware-Clusteransicht über die Cloud Temple-Konsole angezeigt werden. Deckt die drei Speicherdiagramme des Clusters ab: **Zugewiesener Speicher** (Gesamtmenge, die den VMs zugewiesen ist), **Verbrauchter Speicher** (physischer Speicher, der tatsächlich von den VMs genutzt wird) und **Worst-Case-Zuweisung** (Projektion des maximalen gleichzeitigen Verbrauchs), mit einer genauen Beschreibung der Bedeutung jedes Indikators zur vorausschauenden Planung des Ressourcenbedarfs.

### 15. April 2026: Dokumentation Managed MariaDB, Managed PostgreSQL

- **Managed MariaDB**: Veröffentlichung der ersten Dokumentation für den Managed MariaDB-Dienst (Preview): Vorstellung des Dienstes, technische Konzepte (StandAlone- und Distributed-Architekturen), Schnellstartanleitung. 
- **Managed PostgreSQL**: Veröffentlichung der ersten Dokumentation für den Managed PostgreSQL-Dienst (Preview): Vorstellung des Dienstes, technische Konzepte, Schnellstartanleitung.

### 15. April 2026 : Neues Modul Kostenmanager

- **Konsole (Kostenmanager)** : Hinzufügen der vollständigen Dokumentation für das neue Verbrauchsüberwachungsmodul, das über die Cloud Temple-Konsole zugänglich ist. Umfasst das Dashboard, den Gesamtverbrauch (mit Prognose bis Monatsende), die Aufschlüsselung nach Produkt und Dienst, die zeilenweisen Abrechnungsdetails und den Preiskatalog.

### 26. März 2026: Aktualisierung der Liste der Auftragsverarbeiter (DPA)

- **Vertraglich** : Aktualisierung des Vertragsanhangs zur Verarbeitung personenbezogener Daten (DPA) - Überarbeitung der Liste der Auftragsverarbeiter (Entfernung von Microsoft Azure und Amazon Web Services, Änderung der Tätigkeit für Iron Mountain) und Hinzufügung des Genehmigungsdatums.

### 19. März 2026: Verbesserungen der IaaS- und Terraform-Dokumentation

- **IaaS OpenSource** : Hinzufügen eines umfassenden Leitfadens zur Erstellung einer virtuellen Maschine. Das Tutorial deckt die drei verfügbaren Bereitstellungsmethoden ab (Vorlage, XVA-Import, Marketplace) mit Schritt-für-Schritt-Anweisungen und Empfehlungen für bewährte Verfahren.
- **IaaS VMware** : Hinzufügen einer Seite, die alle verfügbaren Tutorials zusammenfasst, um die Navigation und das Auffinden der Leitfäden zu erleichtern.
- **Terraform** : Neuer Abschnitt, der erklärt, wie man automatisch Benachrichtigungen über neue Versionen des Terraform-Providers über GitHub erhält.

### 19. März 2026: DPA-Aktualisierung und HDS-Konformität

- **Vertraglich**: Aktualisierung der Vertraglichen Vereinbarung zu personenbezogenen Daten (DPA) auf Version 1.0. Integration der neuesten Anforderungen der HDS-Zertifizierung (Hébergeur de Données de Santé) und Aktualisierung der Liste der autorisierten Unterauftragnehmer. Vollständige Übersetzung ins Englische, Deutsche, Spanische und Italienische.

### 21. Februar 2026 : Erweiterte Netzwerkkonzepte

- **Netzwerk (Internet)** : Neue Seite zu **erweiterten Konzepten**, die BGP-Communities und die Steuerung der Local Preference im Internet-Backbone von Cloud Temple (AS33930) dokumentiert. Enthält einen Konfigurationsleitfaden mit einem Bird-Beispiel.
- **LLMaaS** : Aktualisierung des Modellkatalogs und Hinzufügung des Lebenszyklus der Modelle. Hinzufügung von LTS-Modellen (Long Term Support).
- **IaaS Bare Metal** : Ergänzende Informationen zum BFS-Volumen (Boot from SAN) in der Startanleitung : Volume 1 ist der Betriebssysteminstallation vorbehalten, kann innerhalb derselben AZ nicht geteilt werden, und es wird empfohlen, Daten auf einem zusätzlichen LUN-Volumen zu speichern.
- **Objektspeicher (OSS)** : Hinzufügung einer **FAQ**-Seite, die S3-Zugriff, IP-Whitelists, präsignierte Links und empfohlene Anwendungsszenarien abdeckt.

### 10. Februar 2026 : Aktualisierung der LLMaaS-Preise

- **LLMaaS** : Globale Aktualisierung der API-Preise (Input : 1,9€/M, Output : 8€/M, Raisonneur : 8€/M) in der gesamten technischen und kommerziellen Dokumentation.

### 5. Februar 2026 : Präzisierungen zu den Service-Level-Vereinbarungen (SLA)

- **Managed Kubernetes** : Vollständige Aktualisierung und Finalisierung der Service-Level-Vereinbarungen (SLA) für das Managed-Kubernetes-Angebot.

### 19. Januar 2026 : Erweiterung von Managed Kubernetes und VPC

- **Managed Kubernetes** : Unterstützung für **Bare Metal**-Knoten und **GPUs** (NVIDIA) hinzugefügt.
- **Managed Kubernetes** : Neues Tutorial zur Verwendung von GPUs in einem Kubernetes-Cluster.
- **Managed Kubernetes** : Ersetzung von KubeCost durch einen aktuelleren Leitfaden zu **OpenCost**.
- **Network (VPC)** : Vollständige Dokumentation des Virtual Private Cloud (VPC)-Diensts, einschließlich der Konzepte für Hochverfügbarkeit (HA), Einführungsanleitungen und Tutorials.

### 11. Dezember 2025: Neuerungen bei Managed Kubernetes

- **Managed Kubernetes**: Hinzufügen eines neuen Tutorials zur Verwendung von **Gateway API** für das erweiterte Traffic-Management.
- **Managed Kubernetes**: Aktualisierung der Dokumentation zur Quotenverwaltung (Ceph) und Optimierung der Kostenmanagement-Tools (OpenCost).

### 22. November 2025: LLMaaS-Neuigkeiten und allgemeine Verbesserungen

- **LLMaaS (OCR)**: Hinzufügen einer vollständigen Dokumentation für **DeepSeek-OCR**, unser neues Modell, das auf die Dokumentenanalyse (PDF, Bilder) spezialisiert ist und strukturierten Text, Tabellen sowie mathematische Formeln extrahieren kann.

### 20. November 2025: Wichtige PaaS OpenShift-Aktualisierung

- **PaaS OpenShift (PR #194)** : Umfassende Überarbeitung und Aktualisierung der OpenShift-Dokumentation, einschließlich neuer Screenshots und einer vollständigen Übersetzung ins Englische, Spanische, Deutsche und Italienische zur Unterstützung unserer internationalen Expansion.

### 3. November 2025 : Verbesserung der Kubernetes-Tutorials

- **Managed Kubernetes** : Hinzufügen eines neuen Tutorials zur kontinuierlichen Bereitstellung mit **ArgoCD** und dem GitOps-Ansatz.
- **Managed Kubernetes** : Überarbeitung und Verbesserung der bestehenden Tutorials. Die Anleitungen zu Deployment, Netzwerk, Berechtigungsverwaltung (Capsule) und Sicherung (Kasten) wurden erweitert, um Fragen zu Sicherheit, Governance und Kosten besser zu adressieren, als Reaktion auf die Erwartungen der Zielgruppen CIO und Einkäufer.

### 28. Oktober 2025: Neue Dokumentation Managed Kubernetes und verschiedene Verbesserungen

- **Managed Kubernetes (PR #193 & améliorations)**: Hinzufügen einer vollständigen Dokumentation für den neuen Managed Kubernetes-Dienst. Der Abschnitt enthält eine Vorstellung des Dienstes, technische Konzepte, einen Einstiegsleitfaden, ein erstes Tutorial und die Verantwortlichkeitsmatrix (RACI). Der Inhalt wurde erweitert, um den Erwartungen verschiedener Nutzerprofile besser gerecht zu werden.
- **Objektspeicher (PR #190, #189)**: Hinzufügen von zwei neuen Tutorials für den Objektspeicher: eines zur Verwaltung des Zugriffs auf S3-Buckets und eines zur Verwendung von Restic für Backups.
- **Vertragliches (PR #191)**: Korrektur und Aktualisierung des Dokuments "Data Processing Agreement" (DPA).

### 18. Oktober 2025: Wartung und neue Dokumentationen

- **LLMaaS** : Hinzufügen einer neuen Frage zur FAQ zur Vorstellung der öffentlichen Statusseite ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)), um die Verfügbarkeit und Leistung jedes Modells in Echtzeit zu verfolgen.
- **Vertragliches** : Wesentliche Aktualisierung der Datenverarbeitungsvereinbarung (DPA v2), um die neuesten gesetzlichen und Compliance-Anforderungen widerzuspiegeln.
- **Konsole** : Verbesserung und Klarstellung der Dokumentation zur Befehlsverwaltung.
- **Marketplace** : Hinzufügen eines detaillierten Tutorials zur Anpassung von virtuellen Maschinen-Images (VM), um wiederverwendbare Vorlagen zu erstellen.
- **LLMaaS** : Hinzufügen eines Leitfadens zur Konfiguration der VSCode-Erweiterung CLINE, um die Sprachmodelle von Cloud Temple direkt aus dem Editor heraus zu nutzen.
- **Objektspeicher (OSS)** : Hinzufügen von Ergänzungen zur Lebenszyklusrichtlinie (Lifecycle) für die Datenlöschung.
- **Objektspeicher (OSS)** : Hinzufügen eines Fehlerbehebungsleitfadens für Prüfsummenfehler (`XAmzContentSHA256Mismatch`) mit AWS CLI und Terraform.
- **LLMaaS** : Aktualisierung der Liste der verfügbaren Modelle und Neübersetzung von über 50 Dokumenten, um die Konsistenz zu gewährleisten.

### 14. August 2025 : Verbesserungen und Korrekturen

- **LLMaaS** : Aktualisierung und Klarstellung der FAQ-Antworten, um technische und strategische Fragen besser zu beantworten. Hinzufügen der FAQ zur Navigation.

### Juli 2025 : Neuigkeiten und wichtige Updates

- **Objektspeicher (OSS)** :
  - Vollständige Überarbeitung des Tutorials-Bereichs mit dedizierten Anleitungen für beliebte Tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python-SDK Boto3.
  - Hinzufügen von Erläuterungen zu den Konzepten von Speicherkonten und der Objektsperre (Object Lock).
- **IaaS OpenSource** :
  - Hinzufügen einer detaillierten Dokumentation zur Verwaltung der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole** :
  - Aktualisierung der Seite für Sicherheitswarnungen mit den neuesten Schwachstellen.
- **Netzwerk** :
  - Hinzufügen neuer Screenshots zur Veranschaulichung der Konfiguration der IPv6-Konnektivität.

### 29. Juni 2025 : Finalisierung der LLMaaS-Dokumentation

- Validierung der vollständigen Testsuite.
- Korrektur und Validierung der RAG-Pipelines mit FAISS und Qdrant.
- Erweiterung der Tutorials um detailliertere technische Erklärungen.
- Hinzufügen eines Abschnitts zur Prompt-Sicherheit und zum Lebenszyklus der Modelle im Konzeptionsteil.
- Optimierung der RAG-Erklärungsseite durch Diagramme und Details zu Embedding-Modellen.
- Aktualisierung der API-Dokumentation, des Quickstart-Leitfadens und der Service-Präsentation.
- Hinzufügen der Preisgestaltung für das Audio-Transkriptions-Endpoint.
- Hinzufügen des vorausschauenden Zeitplans für den Lebenszyklus der Modelle.
- Hinzufügen der Verantwortlichkeitsmatrix für das LLMaaS-Angebot.