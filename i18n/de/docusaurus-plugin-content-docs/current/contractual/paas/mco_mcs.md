---
title: MCO/MCS
---

**Politik zur Aufrechterhaltung des Betriebes (MCO) und der Sicherheit (MCS) auf dem OpenShift SNC PaaS von **Cloud Temple****

## Präambel

Diese Richtlinie beschreibt die Verantwortlichkeiten und Empfehlungen für die Aufrechterhaltung des Betriebes (MCO) und der Sicherheit (MCS) Ihrer Umgebungen auf dem OpenShift SNC PaaS von **Cloud Temple**.

---

## 1. Aufrechterhaltung des Betriebes (MCO)

### 1.1. Verwaltung und Aktualisierung von Clustern

**Verantwortung **Cloud Temple** :**

- Vollständige Verwaltung der zugrundeliegenden Infrastruktur, einschließlich der Master-Knoten, OpenShift-Versionsaktualisierungen und der Resilienz der von **Cloud Temple** bereitgestellten kritischen Dienste.
- Automatische Durchführung von Minor-Updates/Patches ohne Unterbrechung der gehosteten Workloads, sofern nicht anders mitgeteilt.
- Einschränkung von Rechten und Funktionen gemäß der SecNumCloud-Vorgaben.
- Kommunikation kommender Updates und Breaking Changes für die nächsten drei Monate über die [**Cloud Temple Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**Verantwortung des Nutzers :**

- Verwaltung der bereitgestellten Workloads (Anwendungen, CI/CD-Tools) sowie deren Konfigurationen.
- Testen von Workload-Updates in einer Staging-Umgebung vor dem Einsatz in der Produktion.
- Sicherstellung der Kompatibilität der Workloads mit den Cluster-Komponenten.

**Empfehlung :**

- Anwendungsbereitstellungen außerhalb der Wartungsfenster planen, um Konflikte mit automatischen Cluster-Updates zu vermeiden.
- Den Kommunikation von **Cloud Temple** zu Major-Updates folgen, um erforderliche Anpassungen rechtzeitig planen zu können.
- Kommende Updates über die [**Produkt-Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2) verfolgen.
- Abonnieren Sie die [**Störungsmeldungen**](/console/status.md#gestion-des-notifications)

---

### 1.2. Überwachung und Monitoring

**Verantwortung **Cloud Temple** :**

- Überwachung und Monitoring der Infrastruktur und der von **Cloud Temple** bereitgestellten zugrundeliegenden Dienste.

**Verantwortung des Nutzers :**

- Überwachung und Monitoring der eigenen Workloads.

**Empfehlung :**

Verwendung der bereitgestellten **nativen Tools :**

- Analyse von Performance-Logs und Events über die OpenShift-Konsole.
- Konfiguration benutzerdefinierter Alarme auf Basis von Cluster- und Pod-Metriken über die Benutzeroberfläche.  
  
Kritische Alarm-Schwellenwerte konfigurieren :

- **CPU/Speicher** der Pods : ≥ 80 %.
- **Festplattenspeicher auf Persistent Volumes** : ≥ 85 %.
- **Fehlgeschlagene Pod-Starts** : mehr als X Vorkommnisse in 10 Minuten.  
  
Automatisieren Sie das Eskalieren von Alarmen an Ihre Management-Tools für eine schnelle Reaktion.  

---

### 1.3. Backup und Wiederherstellung

Kritische Cluster-Komponenten werden automatisch von **Cloud Temple** gesichert. Workloads und Nutzerdaten erfordern eine dedizierte Verwaltung.

**Verantwortung **Cloud Temple** :**

- Automatische Redundanzmechanismen innerhalb der Infrastruktur.
- Automatische Backups der Clusterkonfigurationen.

**Verantwortung des Nutzers :**

- Sicherung kritischer Workload-Daten mit Lösungen wie dem im **Cloud Temple**-Katalog verfügbaren Angebot **Kasten**.

**Empfehlung :**

- Regelmäßige Backup-Strategien implementieren :
  - Automatische Backups von PV mit Kasten.
  - Tägliche Sicherung der Kubernetes-Konfigurationen, Secrets und YAML-Deployments.
- Regelmäßige Tests der Wiederherstellung zur Validierung der RPOs durchführen.

---

## 2. Aufrechterhaltung der Sicherheit (MCS)

### 2.1. Geheimnis- und Konfigurationsmanagement

Nutzung von OpenShift/Kubernetes Secrets und Empfehlung zur Integration zentraler Geheimnisverwaltungs-Systeme.

**Verantwortung **Cloud Temple** :**

- Die Verwaltung von Secrets und der Konfiguration der Infrastruktur und zugrundeliegenden Dienste des Angebots liegt bei **Cloud Temple**.

**Verantwortung des Nutzers :**

- Die Verwaltung von Secrets und Konfiguration der Workloads des **Kunden** liegt beim **Kunden**.
  
**Empfehlung :**

- Keine Speicherung von Klartextsecrets in YAML-Dateien.
- Tools zur Verschlüsselung sensibler Daten verwenden.

### 2.2. Zugriffskontrolle (IAM)

Zugriffsprüfung erfolgt über die Shiva-Konsole und das "User Management"-Modul der OpenShift-Konsole.

Weitere Details zu dieser Funktionalität finden Sie in unserem [**Leitfaden**](/console/iam/iam) und in der [**Dokumentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) des Herstellers.

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist verantwortlich für die Verwaltung von Service- und Administrationskonten.
- **Cloud Temple** ist zuständig für die Integration mit dem **Cloud Temple**-Identity-System zur Zugriffskontrolle.
- **Cloud Temple** ist verantwortlich für die standardmäßige RBAC-Konfiguration und anfängliche Benutzerrechte-Beschränkungen.
- **Cloud Temple** ist verantwortlich für die Bereitstellung und Pflege des **Zwei-Faktor-Authentifizierungs**-Systems zur Absicherung der Zugänge.
  
**Verantwortung des Nutzers :**

- Der **Kunde** ist dafür verantwortlich, regelmäßig die Nutzerzugriffe zu prüfen.
- Der **Kunde** ist für die Vergabe von Zugriffsrechten und das Onboarding seiner Nutzer im Tenant verantwortlich.
- Der **Kunde** muss seine Nutzer unter Einhaltung der vom **Cloud Temple**-System auferlegten Beschränkungen verwalten.

### 2.3. Schwachstellenmanagement

Schwachstellen der Infrastruktur und zugrundeliegenden Dienste des Angebots werden im Incident-Modul gemeldet.

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist verantwortlich für die Meldung von Schwachstellen in der zugrundeliegenden Infrastruktur und Diensten des Angebots sobald sie entdeckt werden, über das Modul [**Incidents**](/console/status.md) der SHIVA-Konsole.
- **Cloud Temple** ist für die Behebung dieser Schwachstellen verantwortlich.
- **Cloud Temple** stellt Tools zur Verfügung, um Schwachstellen in Docker-Images zu analysieren. Standardmäßig kommt **[Quay]** zum Einsatz, um automatische Image-Scans durchzuführen.

**Verantwortung des Nutzers :**

- Der **Kunde** ist verantwortlich für die Erkennung und Behebung von Schwachstellen innerhalb seiner Workloads.
- Der **Kunde** ist dafür verantwortlich, seine Workloads zu aktualisieren, um die Anwendung von Sicherheitspatches schnellstmöglich zu ermöglichen.

**Empfehlung :**

- Nutzen Sie das Cluster-Alerting von **[Quay]**, um Schwachstellen zu analysieren und Anomalien in vom **Kunden** genutzten Images zu erkennen.
- Abonnieren Sie die [**Störungsmeldungen**](/console/status.md#gestion-des-notifications).

### 2.4. Verschlüsselung

Sicherstellung nativer Verschlüsselung auf der Infrastruktur von **Cloud Temple**, mit Empfehlungen für Workloads.

**Verantwortung **Cloud Temple** :**

- Redundanzmechanismen innerhalb der Infrastruktur.
- Automatische Backups der Clusterkonfigurationen.

**Verantwortung des Nutzers :**

- Sicherung kritischer Workload-Daten mit Lösungen wie dem im **Cloud Temple**-Katalog verfügbaren Angebot **Kasten**.
- Sicherstellen, dass Workloads die Resilienzmechanismen nutzen und Deployments entsprechend anpassen.

**Empfehlung :**

- Aktivierung von **TLS-Verschlüsselung** für alle Intra-Pod-Kommunikationen.
- Aktivierung von **TLS-Verschlüsselung** für alle Verbindungen zwischen dem Cloud Temple PaaS- und IaaS-Angebot.
- Sicherstellung von Datenverschlüsselung im Ruhezustand mit **Cloud Temple**-Speicherlösungen.

### 2.5. Protokollierung und Audit

Automatische Aufzeichnung kritischer Cluster-Ereignisse.

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist verantwortlich für die Protokollierung und Auditierung der Infrastruktur und zugrundeliegenden Dienste des Angebots.

**Verantwortung des Nutzers :**

- Der **Kunde** ist verantwortlich für die Protokollierung und das Audit seiner Workloads.
  
**Empfehlung :**

- Konfiguration von Pipelines zur Zentralisierung und Analyse Ihrer Workload-Logs :
  - Verwendung von Log-Collector-Tools mit Visualisierungs-Tools zur Log-Aggregation.
  - Integration der Logs in Ihr **SIEM** (empfohlen).

---

## 3. Incident Management & Business Continuity Plan (BCP)

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist verantwortlich für Redundanzmechanismen innerhalb der Infrastruktur.
- **Cloud Temple** ist verantwortlich für automatische Backups der Cluster-Konfigurationen.
- **Cloud Temple** ist verantwortlich für die Wiederherstellung des Betriebs nach Ausfällen in der Infrastruktur oder bei zugrundeliegenden Diensten.

**Verantwortung des Nutzers :**

- Der **Kunde** ist dafür verantwortlich, kritische Workload-Daten mit Lösungen wie dem im **Cloud Temple**-Katalog angebotenen **Kasten** zu sichern.
- Der **Kunde** muss sicherstellen, dass seine Workloads die Resilienzmechanismen nutzen und Deployments entsprechend anpassen.
- Der **Kunde** ist für den BCP/DRP seiner Workloads verantwortlich.

**Verfahren "Disaster Recovery"**

- Im Falle eines vollständigen Zugriffsverlusts auf einen Cluster muss der **Kunde** einen Incident beim **Cloud Temple**-Support über das Supportmodul der Konsole melden.
Siehe [**Verfahren zur technischen Supportanfrage**](/console/console_quickstart.md#accès-au-support-technique)

---

## Allgemeine Empfehlungen
1. **Ressourcen planen**: Für ausreichend Cluster-Kapazität bei Spitzenlasten sorgen.  
2. **Konfigurationen validieren**: Anwendungen in Staging-Umgebungen testen, bevor sie in Produktion gehen.  
3. **Regelmäßig überwachen**: Eingebaute Tools verwenden, um die Ressourcennutzung zu verfolgen und Probleme frühzeitig zu erkennen.  
4. **Informiert bleiben**: Der Roadmap und den Leitfäden folgen, um veraltete Funktionen zu vermeiden.  
5. **Support kontaktieren**: Bei ungelösten Problemen den Support über das [**Verfahren zur technischen Supportanfrage**](/console/console_quickstart.md#accès-au-support-technique) oder per E-Mail an [**contact**](mailto:contact@cloud-temple.com) kontaktieren.

Um die Verantwortlichkeiten im Detail nachzulesen, konsultieren Sie bitte unsere [**Verantwortlichkeitsmatrix**](/contractual/paas/raci.md).