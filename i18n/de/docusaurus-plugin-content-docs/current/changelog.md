---
title: Änderungsverfolgung
sidebar_position: 2
---

# Änderungsverfolgung

### 12. Oktober 2026: Versionshinweise der Konsole bis v4.52.0

- **Konsole**: Die [Produktversionshinweise](./changelog_produits.md) stellen die Neuerungen und Korrekturen der Versionen 4.50.0, 4.51.0 und 4.52.0 vor, einschließlich der Entwicklungen im VPC-Netzwerk, dem cloud-init-Deployment und der Wiederherstellung virtueller Maschinen.

### 10. September 2026: Aktualisierte LLMaaS-Dokumentation

- **Modelle auswählen und verfolgen**: Direkter Zugriff auf den [Katalog und Lebenszyklus](https://llmaas.status.cloud-temple.app/lifecycle), um verfügbare Modelle, Support-Fristen und empfohlene Migrationen einzusehen.
- **Erste Schritte mit dem Dienst**: Aktualisierte Startanleitungen und Integrationsbeispiele, um die ersten Nutzungen und die Integration in Ihre Anwendungen zu erleichtern.
- **Nutzung und Abrechnung verstehen**: Klarere Dokumentation zu Batch-Verarbeitungen, Dokumentensuche und den Abrechnungsmodalitäten für das Reranking.

### 20. August 2026: Harmonisierung der Bezeichnung für die Reifegrade verwalteter Datenbanken

- **Navigation — Datenbanken**: Entfernung des **Beta**-Bades für die Einträge **Verwaltete MariaDB** und **Verwaltete PostgreSQL** in der Seitenleiste und auf den Karten der Seite Datenbanken. Die beiden Dienste zeigten gleichzeitig zwei widersprüchliche Reifegradbezeichnungen: *Beta* in der Navigation, *Preview* im Titel ihrer Produktseiten. Nur das **Preview**-Badge wird als einzige Wahrheitsquelle für den Reifegrad dieser Dienste beibehalten. Übersetzungen verfügbar in EN/DE/ES/IT.

### 17. August 2026: Aktualisierung der Sicherheitswarnungen

- **Sicherheit**: Neue [Sicherheitsmitteilungen](./console/security/security_alarms.md) sind für die VMware-, OpenShift-, XCP-ng- und Dell-Umgebungen verfügbar, um Ihnen bei der Identifizierung betroffener Produkte und empfohlener Maßnahmen zu helfen.

### 14. August 2026: Klarstellung des Zugriffsmanagements

- **Konsole — Zugriffsverwaltung**: Der [Leitfaden für Identitäten und Berechtigungen](./console/iam/concepts.md) unterscheidet die Aktionen, die auf Organisationsebene und auf jeder Mandantenebene durchzuführen sind, um die Zuweisung von Zugriffen und die Verwaltung der Eigentümer zu erleichtern.

### 7. August 2026: Leitfaden zur Organisationsansicht

- **Konsole — Organisation**: Der [Startleitfaden](./console/console_quickstart.md) stellt die Organisationsansicht und das Mandantenmanagement vor. Die Dokumentation präzisiert zudem die Rolle der Eigentümer und die Schritte zur Erweiterung ihrer Zugriffsrechte.

### 15. Juli 2026: Präzisierung zur Object Storage-Verschlüsselung

- **Object Storage (Sicherheit)**: Der Abschnitt zur Verschlüsselung ruhender Daten (D@RE) präzisiert nun, dass der Dienst eine FIPS 140-3-zertifizierte AES-256-Bit-Verschlüsselung über die Softwarebibliothek RSA BSAFE Crypto-J in Version 7.x verwendet.

### 30. April 2026: Präzisierungen zu den Speicherleistungsdaten

- **Speicher (IaaS VMware, OpenSource, Bare Metal)**: Hinzufügung der absoluten Obergrenzen für IOPS und maximale Bandbreite für alle Speicherklassen. Diese Informationen ermöglichen eine bessere Dimensionierung der Umgebungen basierend auf den Leistungsanforderungen.

### 24. April 2026: Erweiterung der IaaS OpenSource-Sicherungsdokumentation

- **IaaS OpenSource (Sicherung)**: Erweiterung des Sicherungsabschnitts mit Präzisierungen zur technischen Architektur (inkrementelle Sicherung, Auswirkungen von Thick Provisioning auf den Speicher), Sicherheit (AES-256-Verschlüsselung, Netzwerkisolation), Monitoring und Planungsbeschränkungen. Übersetzungen verfügbar in EN/DE/ES/IT.

### 20. April 2026: Aktualisierung der Dimensionierung für Managed Database

- **Verwaltete MariaDB & PostgreSQL**: Aktualisierung der verfügbaren maximalen Dimensionierungsvorlagen für die Dienste verwalteter Datenbanken.

### 17. April 2026: VM Instances — illustrierte Dokumentation, Tutorials und Übersetzungen

- **VM Instances — Dokumentationsanreicherung**: Vollständige Überarbeitung und Illustration der VM Instances-Dokumentation. Der Startleitfaden (`quickstart.md`) deckt nun den gesamten illustrierten Benutzerpfad ab: Zugriff auf den Bereich, VM-Liste, Erstellungsassistent in 9 Schritten (Instanzfamilie, Verfügbarkeitszone, OS-Vorlage, Template, Name/Sicherung, Cloud Init, Festplatten, Netzwerk, Zusammenfassung) und Verwaltung der 4 Registerkarten (Informationen, Festplatten, Netzwerk, Snapshots).
- **VM Instances — Tutorials**: Erstellung von 3 dedizierten Tutorials in einem `tutorials/`-Ordner: (1) **Erstellen Ihrer ersten VM** (vollständiger illustrierter Assistent + Cloud Init + zusätzliche Festplatte), (2) **Verwalten von Festplatten** (Hinzufügen über die Konsole + Linux-Partitionierung), (3) **Erstellen und Verwalten von Snapshots** (Erstellung, Wiederherstellung, Löschung + Best Practices und Vergleich Snapshot/Sicherung). Die Seitenleiste wird aktualisiert, um 3 einzelne Einträge in der Kategorie Tutorials aufzunehmen.

### 17. April 2026: Vertragsdokumente, Übersetzungen und begriffliche Harmonisierung

- **Vertragsdokumente — Neustrukturierung**: Die Seite `contracts.md` wurde neu organisiert, mit der Hierarchie der Vertragsdokumente oben auf der Seite, einschließlich der Prioritätsliste der 6 Dokumente (AGB, SecNumCloud-Übereinkommen, spezifisches Übereinkommen ¹, PAS ², CPU, DPA) und einem Kasten mit vertragsrechtlichen Präzisierungen.

### 16. April 2026: Überarbeitung der Navigation, Vertragsdokumente und Updates

- **Navigation — Compute**: Zusammenfassung von VM Instances (Preview), IaaS OpenSource und IaaS VMware unter einer einzigen Kategorie **Compute** in der Navigation (PR #277).
- **Navigation — Network**: Zusammenfassung von VPC (Preview) und Private Backbone unter einer einzigen Kategorie **Network** in der Navigation.
- **Vertragsdokumente**: Vollständige Neustrukturierung der vertragsrechtlichen Dokumentation — Erstellung einer Hub-Seite `/contracts` (Allgemeine Geschäftsbedingungen, Besondere Bedingungen, SecNumCloud-Service-Übereinkommen, SLA VM Instances) und einer Hub-Seite `/shared-responsibility` (RACI-Matrizen pro Dienst: IaaS, S3, PaaS, Kubernetes, LLMaaS, Netzwerk). Das seitliche Vertragsmenü wird durch eine dedizierte Spalte **Vertraglich** im Footer ersetzt. Übersetzungen verfügbar in EN/DE/ES/IT.
- **VM Instances**: Aktualisierung des Service-Level-Agreements (SLA) von 99,9 % auf 99,95 %.
- **IaaS OpenSource**: Hinzufügung eines Hinweises zur maximalen Aufbewahrungsdauer von Sicherungen (maximal 24 Monate, Migration zu Glacier im T1 2027 geplant).

### 15. April 2026: Neue VM Instances-Dokumentation (Cloud Public)

- **VM Instances**: Veröffentlichung der ersten Dokumentation des VM Instances-Dienstes (in Preview), des neuen Angebots für gemeinsam genutzte virtuelle Maschinen von Cloud Temple. Die Dokumentation deckt die Gesamtübersicht des Dienstes, technische Konzepte (Serviceklassen Development/General Purpose/Performance, vordefinierte und benutzerdefinierte Vorlagen, Speicher, VPC-Netzwerk, Sicherung) sowie einen vollständigen Startleitfaden ab. Der Dienst ist in der Navigation unter einer neuen Kategorie **Cloud Public** organisiert.

### 15. April 2026: Verbesserung der IaaS VMware-Dokumentation — Cluster-Metriken

- **IaaS VMware**: Hinzufügung einer detaillierten Dokumentation zu den Metriken, die in der Ansicht eines VMware-Clusters über die Cloud Temple-Konsole angezeigt werden. Deckt die drei Speichergrafiken des Clusters ab: **Zugewiesener Speicher** (Gesamtmenge, die VMs zugewiesen wurde), **Verbrauchter Speicher** (physischer Speicher, der tatsächlich von VMs verwendet wird) und **Zuweisung im schlimmsten Fall** (Projektion des maximalen gleichzeitigen Verbrauchs), mit einer genauen Beschreibung dessen, was jeder Indikator darstellt, um Ressourcenbedarfe vorherzusehen.

### 15. April 2026: Dokumentation für Verwaltete MariaDB, Verwaltete PostgreSQL

- **Verwaltete MariaDB**: Veröffentlichung der ersten Dokumentation des Dienstes Verwaltete MariaDB (in Preview): Vorstellung des Dienstes, technische Konzepte (Architekturen StandAlone und Distributed), Startleitfaden.
- **Verwaltete PostgreSQL**: Veröffentlichung der ersten Dokumentation des Dienstes Verwaltete PostgreSQL (in Preview): Vorstellung des Dienstes, technische Konzepte, Startleitfaden.

### 15. April 2026: Neues Modul Kostenmanager

- **Konsole (Kostenmanager)**: Hinzufügung der vollständigen Dokumentation des neuen Moduls zur Verbrauchsverfolgung, das über die Cloud Temple-Konsole zugänglich ist. Deckt das Dashboard, den Gesamtverbrauch (mit Monatsend-Prognose), die Aufschlüsselung nach Produkt und Dienst, die Details der Abrechnung zeilenweise und den Preiskatalog ab.

### 26. März 2026: Aktualisierung der Liste der Unterauftragnehmer (DPA)

- **Vertraglich**: Aktualisierung der Vertragsanhangs zu den personenbezogenen Daten (DPA) — Überarbeitung der Liste der Unterauftragnehmer (Entfernung von Microsoft Azure und Amazon Web Services, Änderung der Tätigkeit für Iron Mountain) und Hinzufügung des Genehmigungsdatums.

### 19. März 2026: Verbesserungen der IaaS- und Terraform-Dokumentation

- **IaaS OpenSource**: Hinzufügung eines vollständigen Leitfadens zum Erstellen einer virtuellen Maschine. Das Tutorial deckt die drei verfügbaren Bereitstellungsmethoden ab (Modell, XVA-Import, Marketplace) mit schrittweisen Anweisungen und Empfehlungen für Best Practices.
- **IaaS VMware**: Hinzufügung einer Seite, die alle verfügbaren Tutorials zusammenfasst, um die Navigation und das Entdecken der Leitfäden zu erleichtern.
- **Terraform**: Neuer Abschnitt, der erklärt, wie man automatisch Benachrichtigungen über neue Versionen des Terraform-Providers über GitHub erhält.

### 19. März 2026: Aktualisierung DPA und HDS-Konformität

- **Vertraglich**: Aktualisierung der Vertragsanhangs zu den personenbezogenen Daten (DPA) auf Version 1.0. Integration der neuesten Anforderungen der HDS-Zertifizierung (Hébergeur de Données de Santé) und Aktualisierung der Liste der autorisierten Unterauftragnehmer. Vollständige Übersetzung ins Englische, Deutsche, Spanische und Italienische.

### 21. Februar 2026: Erweiterte Netzwerkkonzepte

- **Netzwerk (Internet)**: Neue Seite mit **erweiterten Konzepten**, die BGP-Gemeinschaften und die Steuerung der Local Preference auf dem Cloud Temple Internet-Backbone (AS33930) dokumentiert. Inklusive eines Konfigurationsleitfadens mit Bird-Beispiel.
- **LLMaaS**: Aktualisierung des Modellkatalogs und Hinzufügung des Modell-Lebenszyklus. Hinzufügung der LTS-Modelle (Long Term Support).
- **IaaS Bare Metal**: Hinzufügung von Präzisierungen zum BFS-Volumen (Boot from SAN) im Startleitfaden: Volume 1 ist der Installation des BS gewidmet und kann innerhalb derselben AZ nicht geteilt werden; Empfehlung, Daten auf einem zusätzlichen LUN-Volumen zu speichern.
- **Objektspeicher (OSS)**: Hinzufügung einer **FAQ**-Seite, die den S3-Zugriff, IP-Whitelists, vor-signierte Links und empfohlene Anwendungsszenarien abdeckt.

### 10. Februar 2026: Aktualisierung der LLMaaS-Preise

- **LLMaaS**: Aktualisierung der Preisbedingungen der API. Die geltenden Preise sind im [offiziellen Cloud Temple-Preiskatalog](https://www.cloud-temple.com/nos-tarifs-publics/) verfügbar.

### 5. Februar 2026: Präzisierungen zu den Service-Verpflichtungen (SLA)

- **Verwaltetes Kubernetes**: Vollständige Aktualisierung und Fertigstellung der Service-Level-Agreements (SLA) für das Managed Kubernetes-Angebot.

### 19. Januar 2026: Erweiterung Verwaltetes Kubernetes und VPC

- **Verwaltetes Kubernetes**: Hinzufügung der Unterstützung für **Bare Metal**-Knoten und **GPUs** (NVIDIA).
- **Verwaltetes Kubernetes**: Neues Tutorial zur Verwendung von GPUs in einem Kubernetes-Cluster.
- **Verwaltetes Kubernetes**: Ersatz von KubeCost durch einen neueren Leitfaden zu **OpenCost**.
- **Netzwerk (VPC)**: Vollständige Dokumentation des Virtual Private Cloud (VPC)-Dienstes, einschließlich der Konzepte der hohen Verfügbarkeit (HA), der Startleitfäden und der Tutorials.

### 11. Dezember 2025: Neues im Managed Kubernetes

- **Managed Kubernetes**: Hinzufügen eines neuen Tutorials zur Verwendung der **Gateway API** für das erweiterte Traffic-Management.
- **Managed Kubernetes**: Aktualisierung der Dokumentation zur Quota-Verwaltung (Ceph) und Optimierung der Kostenmanagement-Tools (OpenCost).

### 22. November 2025: Neue Funktionen im LLMaaS und globale Verbesserungen

- **LLMaaS (OCR)**: Hinzufügen einer vollständigen Dokumentation für **DeepSeek-OCR**, unser neues Modell, das auf die Analyse von Dokumenten (PDF, Bilder) spezialisiert ist und strukturierten Text, Tabellen und mathematische Formeln extrahieren kann.

### 20. November 2025: Großes Update für PaaS OpenShift

- **PaaS OpenShift (PR #194)**: Überarbeitung und vollständige Aktualisierung der OpenShift-Dokumentation, einschließlich neuer Screenshots und einer vollständigen Übersetzung ins Englische, Spanische, Deutsche und Italienische, um unsere internationale Expansion zu unterstützen.

### 3. November 2025: Verbesserung der Kubernetes-Tutorials

- **Managed Kubernetes**: Hinzufügen eines neuen Tutorials zum Continuous Deployment mit **ArgoCD** und dem GitOps-Ansatz.
- **Managed Kubernetes**: Überarbeitung und Verbesserung der bestehenden Tutorials. Die Anleitungen zu Deployment, Netzwerk, Berechtigungsverwaltung (Capsule) und Sicherung (Kasten) wurden erweitert, um den Fragen zu Sicherheit, Governance und Kosten besser gerecht zu werden, als Reaktion auf die Erwartungen von CISOs und Einkäufern.

### 28. Oktober 2025: Neue Managed-Kubernetes-Dokumentation und diverse Verbesserungen

- **Managed Kubernetes (PR #193 & Verbesserungen)**: Hinzufügen einer vollständigen Dokumentation für den neuen Managed-Kubernetes-Dienst. Der Abschnitt enthält eine Präsentation des Dienstes, technische Konzepte, eine Schnellstartanleitung, ein erstes Tutorial und die Verantwortlichkeitsmatrix (RACI). Der Inhalt wurde erweitert, um den Erwartungen der verschiedenen Benutzerprofile besser gerecht zu werden.
- **Objektspeicher (PR #190, #189)**: Hinzufügen von zwei neuen Tutorials für den Objektspeicherdienst: eines zur Verwaltung des Zugriffs auf S3-Buckets und eines zur Verwendung von Restic für Sicherungen.
- **Vertragsdokumente (PR #191)**: Korrektur und Aktualisierung des Dokuments „Data Processing Agreement“ (DPA).

### 18. Oktober 2025: Wartung und neue Dokumentationen

- **LLMaaS**: Hinzufügen einer neuen Frage zur FAQ, um die öffentliche Statusseite ([llmaas.status.cloud-temple.app](https://llmaas.status.cloud-temple.app/)) vorzustellen, die es ermöglicht, die Verfügbarkeit und Leistung jedes Modells in Echtzeit zu verfolgen.
- **Vertragsdokumente**: Großes Update des Data Processing Agreement (DPA v2), um die neuesten gesetzlichen und Compliance-Anforderungen widerzuspiegeln.
- **Konsole**: Verbesserung und Klarstellung der Dokumentation zur Bestellverwaltung.
- **Marketplace**: Hinzufügen eines detaillierten Tutorials zur Anpassung von Virtual-Machine-Images (VM), um wiederverwendbare Vorlagen zu erstellen.
- **LLMaaS**: Hinzufügen einer Anleitung zur Konfiguration der VSCode-Erweiterung CLINE, um die Sprachmodelle von Cloud Temple direkt aus dem Editor heraus zu nutzen.
- **Objektspeicher (OSS)**: Hinzufügen von Präzisierungen zur Lifecycle-Richtlinie (Lifecycle) für die Datenlöschung.
- **Objektspeicher (OSS)**: Hinzufügen einer Fehlerbehebungsanleitung für Checksummenfehler (`XAmzContentSHA256Mismatch`) mit AWS CLI und Terraform.
- **LLMaaS**: Aktualisierung der Liste der verfügbaren Modelle und Neuübersetzung von über 50 Dokumenten, um die Konsistenz sicherzustellen.

### 14. August 2025: Verbesserungen und Korrekturen

- **LLMaaS**: Aktualisierung und Klarstellung der FAQ-Antworten, um technischen und strategischen Fragen besser gerecht zu werden. Hinzufügen der FAQ zur Navigation.

### Juli 2025: Neue Funktionen und große Updates

- **Objektspeicher (OSS)**:
  - Vollständige Überarbeitung des Tutorial-Bereichs mit dedizierten Anleitungen für beliebte Tools: AWS CLI, Minio Client (`mc mirror`), Cloudberry Explorer und das Python-SDK Boto3.
  - Hinzufügen von Präzisierungen zu den Konzepten von Speicherkonten und Object Lock.
- **IaaS OpenSource**:
  - Hinzufügen einer detaillierten Dokumentation zur Verwaltung der Hochverfügbarkeit (HA) für Ressourcenpools und virtuelle Maschinen.
- **Konsole**:
  - Aktualisierung der Seite für Sicherheitswarnungen mit den neuesten Schwachstellen.
- **Netzwerk**:
  - Hinzufügen neuer Screenshots zur Veranschaulichung der Konfiguration der IPv6-Konnektivität.

### 29. Juni 2025: Abschluss der LLMaaS-Dokumentation

- Validierung des vollständigen Testsuites.
- Korrektur und Validierung der RAG-Pipelines mit FAISS und Qdrant.
- Erweiterung der Tutorials um detailliertere technische Erklärungen.
- Hinzufügen eines Abschnitts zur Prompt-Sicherheit und zum Modell-Lebenszyklus in den Konzepten.
- Verbesserung der Seite zur RAG-Erklärung mit Diagrammen und Details zu den Embedding-Modellen.
- Aktualisierung der API-Dokumentation, der Schnellstartanleitung und der Dienstpräsentation.
- Hinzufügen der Preisgestaltung für den Audio-Transkriptions-Endpoint.
- Hinzufügen des geplanten Lebenszyklusplans der Modelle.
- Hinzufügen der Verantwortlichkeitsmatrix für das LLMaaS-Angebot.
