---
title: MCO/MCS PaaS OpenShift
slug: /contractual/paas/mco-mcs
displayed_sidebar: docSidebar
---


**Richtlinie zur Aufrechterhaltung der Betriebsbereitschaft (MCO) und zur Aufrechterhaltung der Sicherheitsstandards (MCS) auf der PaaS OpenShift SNC **Cloud Temple****

## Vorwort

Diese Richtlinie beschreibt detailliert die Verantwortlichkeiten und Empfehlungen für die Betriebserhaltung (MCO) und die Aufrechterhaltung der Sicherheit (MCS) Ihrer Umgebungen auf der PaaS OpenShift SNC **Cloud Temple**.

---

## Betriebserhaltung (MCO)

### Cluster-Verwaltung und -Aktualisierung

**Verantwortung **Cloud Temple** :**

- Vollständige Verwaltung der zugrunde liegenden Infrastruktur, einschließlich der Master-Knoten, OpenShift-Version-Updates und der Resilienz kritischer Dienste, die von **Cloud Temple** bereitgestellt werden.
- Automatische Minor-Updates/Patches ohne Unterbrechung für gehostete Workloads, sofern nicht anders mitgeteilt.
- Einschränkung von Rechten und Funktionen gemäß den SecNumCloud-Anforderungen.
- Kommunikation bevorstehender Updates und von Updates mit Breaking Changes für die nächsten drei Monate über die [**Cloud-Temple-Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)

**Verantwortung des Nutzers:**

- Verwaltung der bereitgestellten Workloads (Anwendungen, CI/CD-Tools) und deren Konfigurationen.
- Tests von Workload-Updates in einer Staging-Umgebung vor der Bereitstellung in der Produktion.
- Sicherstellung der Kompatibilität der Workloads mit den Cluster-Komponenten.

**Empfehlung:**

- Planen Sie Anwendungsbereitstellungen außerhalb der Wartungsfenster, um Konflikte mit automatischen Cluster-Updates zu vermeiden.
- Verfolgen Sie die Mitteilungen von **Cloud Temple** bezüglich Major-Updates, um erforderliche Anpassungen zu planen.
- Verfolgen Sie bevorstehende Updates über die [**Produkt-Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Abonnieren Sie [**Incident-Benachrichtigungen**](../../console/status.md#gestion-des-notifications)

---

### Überwachung und Monitoring

**Verantwortung **Cloud Temple** :**

- Überwachung und Monitoring der von **Cloud Temple** bereitgestellten Infrastruktur und der zugrunde liegenden Dienste.

**Verantwortung des Benutzers :**

- Überwachung und Monitoring seiner Workloads.

**Empfehlung :**

Verwenden Sie die **mitgelieferten nativen Tools :**

- Analyse von Performance-Logs und Ereignissen über die OpenShift-Konsole.
- Konfiguration benutzerdefinierter Warnungen basierend auf Cluster- und Pod-Metriken über die Benutzeroberfläche.  
  
Konfigurieren Sie kritische Warnschwellenwerte :

- **CPU/Speicher** der Pods : ≥ 80 %.
- **Festplattenspeicher auf persistenten Volumes** : ≥ 85 %.
- **Startfehler von Pods** : mehr als X Vorkommnisse in 10 Minuten.  
  
Automatisieren Sie die Eskalation von Warnungen an Ihre Management-Tools für eine schnelle Reaktion.  

---

### Sicherungen und Wiederherstellung

Die kritischen Clusterkomponenten werden automatisch von **Cloud Temple** gesichert. Workloads und Benutzerdaten erfordern ein dediziertes Management.

**Verantwortung von Cloud Temple :**

- Automatische Redundanzmechanismen innerhalb der Infrastruktur.
- Automatische Sicherungen der Clusterkonfigurationen.

**Verantwortung des Benutzers :**

- Kritische Workload-Daten mit Lösungen wie dem Angebot **Kasten** im Katalog **Cloud Temple** sichern.

**Empfehlung :**

- Regelmäßige Sicherungsrichtlinien implementieren :
  - Automatische Sicherung von PVs mit Kasten.
  - Tägliche Sicherung von Kubernetes-Konfigurationen, Secrets und YAML-Deployments.
- Wiederherstellungstests regelmäßig durchführen, um die RPOs zu validieren.

---

## Sicherheitswartung (MCS)

### Verwaltung von Secrets und Konfigurationen

Verwendung von OpenShift/Kubernetes-Secrets sowie Empfehlung zur Integration zentraler Secrets-Management-Systeme.

**Verantwortlichkeit **Cloud Temple** :**

- Die Verwaltung von Secrets und die Konfiguration der Infrastruktur und der der Angebots zugrunde liegenden Dienste liegen in der Verantwortung von **Cloud Temple**.

**Verantwortlichkeit des Benutzers :**

- Die Verwaltung von Secrets und die Konfiguration der Workloads des **Clients** liegen in der Verantwortung des **Clients**.
  
**Empfehlung :**

- Keine Secrets im Klartext in YAML-Dateien speichern.
- Tools zur Verschlüsselung sensibler Informationen verwenden.

### Zugriffskontrolle (IAM)

Die Zugriffsüberprüfung erfolgt über die Konsole und das Modul "User Management" der OpenShift-Konsole.

Weitere Details zu dieser Funktion finden Sie in unserem [**Leitfaden**](../../console/iam/iam.md) sowie in der [**Dokumentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) des Herstellers.

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist für die Verwaltung der Service- und Administratorkonten verantwortlich.
- **Cloud Temple** ist für die Integration in das **Cloud Temple**-Identitätssystem zur Zugriffverwaltung verantwortlich.
- **Cloud Temple** ist für die Standardkonfiguration von **RBAC** und die anfänglichen Einschränkungen der Benutzerrechte verantwortlich.
- **Cloud Temple** ist für die Bereitstellung und Wartung des Systems zur **Zwei-Faktor-Authentifizierung** zur Absicherung der Zugriffe verantwortlich.
  
**Verantwortung des Benutzers :**

- Der **Client** muss die Zugriffe seiner Benutzer regelmäßig überprüfen.
- Der **Client** ist für die Vergabe von Zugriffen an seine Benutzer sowie für deren Onboarding in der Tenant-Umgebung verantwortlich.
- Der **Client** muss seine Benutzer unter Einhaltung der vom **Cloud Temple**-System auferlegten Beschränkungen verwalten.

### Schwachstellenmanagement

Schwachstellen in der Infrastruktur und den der Angebotsleistung zugrunde liegenden Diensten werden im Incident-Modul gemeldet.

**Verantwortung von Cloud Temple :**

- **Cloud Temple** ist für die Meldung von Schwachstellen in der Infrastruktur und den der Angebotsleistung zugrunde liegenden Diensten ab deren Erkennung über das [**Incident**-Modul](../../console/status.md) der Konsole verantwortlich.
- **Cloud Temple** ist für die Anwendung von Patches in diesem Bereich verantwortlich.
- **Cloud Temple** ist für die Bereitstellung von Tools zur Analyse von Schwachstellen in Docker-Images verantwortlich. Standardmäßig setzt **Cloud Temple** **[Quay]** ein, um Docker-Images automatisch zu scannen.

**Verantwortung des Benutzers :**

- Der **Kunde** ist für die Erkennung und Behebung von Schwachstellen in seinen Workloads verantwortlich.
- Der **Kunde** ist dafür verantwortlich, seine Workloads zu aktualisieren, um die Anwendung von Sicherheitspatches so schnell wie möglich zu ermöglichen.

**Empfehlung :**

- Nutzen Sie das Alerting des Clusters, das von **[Quay]** bereitgestellt wird, um Schwachstellen zu analysieren und anomales Verhalten in den vom **Kunden** genutzten Images zu erkennen.
- Abonnieren Sie die Benachrichtigungen zu [**Incidents**](../../console/status.md#gestion-des-notifications).

### Verschlüsselung

Garantie einer nativen Verschlüsselung auf der **Cloud Temple**-Infrastruktur, mit Empfehlungen für Workloads.

**Verantwortung von **Cloud Temple** :**

- Redundanzmechanismen innerhalb der Infrastruktur.
- Automatische Sicherungen der Cluster-Konfigurationen.

**Verantwortung des Nutzers :**

- Kritische Daten der Workloads mit Lösungen wie dem Angebot **Kasten** im Katalog **Cloud Temple** sichern.
- Sicherstellen, dass Workloads die Resilienzmechanismen nutzen und Bereitstellungen entsprechend anpassen, um diese umzusetzen.

**Empfehlung :**

- **TLS-Verschlüsselung** für alle intra-Pod-Kommunikationen aktivieren.
- **TLS-Verschlüsselung** für alle Kommunikationen zwischen den PaaS- und IaaS-Angeboten von **Cloud Temple** aktivieren.
- Verschlüsselung von Daten im Ruhezustand über die **Cloud Temple**-Speicherlösungen sicherstellen.

### Protokollierung und Audit

Automatische Aufzeichnung kritischer Cluster-Ereignisse.

**Verantwortung von Cloud Temple:**

- **Cloud Temple** ist für die Protokollierung und das Audit der Infrastruktur und der dem Angebot zugrunde liegenden Dienste verantwortlich.

**Verantwortung des Nutzers:**

- Der **Kunde** ist für die Protokollierung und das Audit seiner Workloads verantwortlich.
  
**Empfehlung:**

- Konfigurieren Sie Pipelines zur Zentralisierung und Analyse der Logs Ihrer Workloads:
  - Verwenden Sie Collector zur Log-Aggregation in Kombination mit einem Visualisierungstool.
  - Integrieren Sie die Logs in Ihr **SIEM** (empfohlen).

---

## Incidentmanagement und Geschäftskontinuitätsplan (GKP)

**Verantwortlichkeit von **Cloud Temple** :**

- **Cloud Temple** ist für die Redundanzmechanismen innerhalb der Infrastruktur verantwortlich.
- **Cloud Temple** ist für die automatischen Sicherungen der Cluster-Konfigurationen verantwortlich.
- **Cloud Temple** ist für die Wiederherstellung des Betriebs nach einem Vorfall auf der Infrastruktur oder den der Dienstleistung zugrunde liegenden Diensten verantwortlich.

**Verantwortlichkeit des Nutzers :**

- Der **Kunde** ist dafür verantwortlich, kritische Daten der Workloads mit Lösungen wie dem Angebot **Kasten** zu sichern, das im Katalog von **Cloud Temple** verfügbar ist.
- Der **Kunde** muss sicherstellen, dass die Workloads die Resilienzmechanismen nutzen, und seine Bereitstellungen entsprechend anpassen, um diese umzusetzen.
- Der **Kunde** ist für den Wiederherstellungsplan/Geschäftskontinuitätsplan seiner Workloads verantwortlich.

**Verfahren „Wiederherstellung nach einem Ausfall“**

- Im Falle eines vollständigen Zugriffsverlusts auf einen Cluster muss der **Kunde** einen Vorfall über das Supportmodul der Konsole beim Support von **Cloud Temple** melden.
Siehe [**Verfahren zur Anfrage technischer Support**](../../console/console_quickstart.md#accès-au-support-technique)

---

## Allgemeine Empfehlungen

1. **Ressourcen planen** : Eine ausreichende Clusterkapazität für Spitzenlasten sicherstellen.
2. **Konfigurationen validieren** : Anwendungen in Staging-Umgebungen testen, bevor sie in der Produktion bereitgestellt werden.
3. **Regelmäßig überwachen** : Integrierte Tools zur Überwachung der Ressourcennutzung nutzen und Probleme so früh wie möglich erkennen.
4. **Auf dem Laufenden bleiben** : Die Roadmap und Leitfäden verfolgen, um veraltete Funktionen zu vermeiden.
5. **Support kontaktieren** : Bei ungelösten Problemen den Support über das [**Verfahren zur Beantragung technischen Supports**](../../console/console_quickstart.md#accès-au-support-technique) oder per E-Mail an die Adresse [**contact**](mailto:contact@cloud-temple.com) kontaktieren.

Um die Verantwortlichkeiten im Detail nachzuvollziehen, lesen Sie bitte unsere [**Verantwortlichkeitsmatrix**](../../contractual/paas/raci.md).