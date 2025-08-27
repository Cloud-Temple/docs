---
title: MCO/MCS
---

**Betriebsbedingungen-Unterhaltspolitik (MCO) und Sicherheitsbedingungen-Unterhaltspolitik (MCS) auf der PaaS OpenShift SNC **Cloud Temple** **

## Vorwort

Diese Richtlinie beschreibt die Verantwortlichkeiten und Empfehlungen für die Betriebserhaltung (MCO) und die Sicherheitserhaltung (MCS) Ihrer Umgebungen auf dem PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Wartung unter Betriebsbedingungen (MCO)

### 1.1. Verwaltung und Aktualisierung von Clustern

**Verantwortung von Cloud Temple:**

- Umfassende Verwaltung der zugrunde liegenden Infrastruktur, einschließlich der Master-Knoten, der OpenShift-Versionen-Updates und der Resilienz kritischer Dienste, die von **Cloud Temple** bereitgestellt werden.
- Automatische Minor/Patch-Updates ohne Unterbrechung für die gehosteten Workloads, es sei denn, eine andere Benachrichtigung liegt vor.
- Begrenzung der Rechte und Funktionen gemäß den Einschränkungen der SecNumCloud.
- Kommunikation der bevorstehenden Updates und der Updates zu Brüchen über die nächsten drei Monate über die [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Verantwortung des Benutzers:**

- Verwaltung der bereitgestellten Workloads (Anwendungen, CI/CD-Tools) und deren Konfigurationen.
- Testen der Workload-Updates in einer Staging-Umgebung vor der Bereitstellung in der Produktion.
- Sicherstellung der Kompatibilität der Workloads mit den Cluster-Komponenten.

**Empfehlung:**

- Anwendungsdeplouments außerhalb der Wartungsfenster planen, um Konflikte mit den automatischen Cluster-Updates zu vermeiden.
- Die Kommunikation von **Cloud Temple** zu Major-Updates verfolgen, um notwendige Anpassungen zu planen.
- Die bevorstehenden Updates über die [**Roadmap Produkt**](https://github.com/orgs/Cloud-Temple/projects/2) verfolgen.
- Benachrichtigungen [**von Incident**](/console/status.md#gestion-des-notifications) abonnieren.

---

### 1.2. Überwachung und Monitoring

**Verantwortung von Cloud Temple:**

- Überwachung und Monitoring der Infrastruktur und der unterliegenden Dienste, die von **Cloud Temple** bereitgestellt werden.

**Verantwortung des Benutzers:**

- Überwachung und Monitoring seiner Workloads.

**Empfehlung:**

Verwenden Sie die **nativen Tools, die bereitgestellt werden:**

- Analyse der Leistungsprotokolle und Ereignisse über die OpenShift-Konsole.
- Konfiguration benutzerdefinierter Benachrichtigungen anhand der Cluster- und Pod-Metriken über die Benutzeroberfläche.  
  
Kritische Schwellwerte für Benachrichtigungen konfigurieren:

- **CPU/Arbeitsspeicher der Pods**: ≥ 80 %.
- **Festplattenspeicher auf persistenten Volumes**: ≥ 85 %.
- **Startfehler der Pods**: mehr als X Vorkommnisse in 10 Minuten.  
  
Automatisieren Sie die Weiterleitung von Benachrichtigungen an Ihre Management-Tools für eine schnelle Reaktion.  

---

### 1.3. Backups und Wiederherstellung

Die kritischen Komponenten des Clusters werden automatisch von **Cloud Temple** gesichert. Arbeitslasten und Benutzerdaten erfordern eine spezielle Verwaltung.

**Verantwortung von **Cloud Temple** :**

- Automatische Redundanzmechanismen innerhalb der Infrastruktur.
- Automatische Backups der Cluster-Konfigurationen.

**Verantwortung des Benutzers:**

- Sicherung kritischer Daten der Arbeitslasten mit Lösungen wie dem **Kasten**-Angebot, das im **Cloud Temple**-Katalog verfügbar ist.

**Empfehlung:**

- Regelmäßige Backup-Politiken einrichten:
  - Automatische Backups der PV mit Kasten.
  - Tägliche Sicherung der Kubernetes-Konfigurationen, Secrets und YAML-Deployment-Dateien.
- Regelmäßige Wiederherstellungen testen, um die RPO zu validieren.

## 2. Aufrechterhaltung unter Sicherheitsbedingungen (MCS)

### 2.1. Geheimnisverwaltung und Konfigurationen

Verwendung von OpenShift/Kubernetes-Geheimnissen und Empfehlung, zentrale Geheimnisverwaltungssysteme zu integrieren.

**Verantwortung von Cloud Temple:**

- Die Verwaltung von Geheimnissen und Konfigurationen der Infrastruktur und der zugrunde liegenden Dienste der Angebots ist die Verantwortung von **Cloud Temple**.

**Verantwortung des Benutzers:**

- Die Verwaltung von Geheimnissen und Konfigurationen der Workloads des **Kunden** ist die Verantwortung des **Kunden**.

**Empfehlung:**

- Keine Geheimnisse im Klartext in YAML-Dateien speichern.
- Tools verwenden, um sensible Informationen zu verschlüsseln.

### 2.2. Zugriffssteuerung (IAM)

Die Zugriffsüberprüfung erfolgt über die Shiva-Konsole und das "User Management"-Modul der OpenShift-Konsole.

Weitere Informationen zu dieser Funktion finden Sie in unserem [**Leitfaden**](../../console/iam/iam.md) und in der [**Dokumentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) des Herstellers.

**Verantwortung von Cloud Temple:**

- **Cloud Temple** ist verantwortlich für die Verwaltung von Dienstkonten und Administratorkonten.
- **Cloud Temple** ist verantwortlich für die Integration in das Identitätssystem **Cloud Temple**, um den Zugriff zu verwalten.
- **Cloud Temple** ist verantwortlich für die Bereitstellung der Standardkonfiguration **RBAC** und der Anfangsberechtigungen der Benutzer.
- **Cloud Temple** ist verantwortlich für die Bereitstellung des **Zweifaktorauthentifizierungssystems** und dessen Wartung, um den Zugriff zu verstärken.

**Verantwortung des Benutzers:**

- Der **Kunde** muss die Zugriffe seiner Benutzer regelmäßig überwachen.
- Der **Kunde** ist verantwortlich für die Bereitstellung von Zugriffen für seine Benutzer und deren Onboarding im Tenant.
- Der **Kunde** muss seine Benutzer im Einklang mit den Einschränkungen des Systems **Cloud Temple** verwalten.

### 2.3. Schwachstellenverwaltung

Schwachstellen in der Infrastruktur und den zugrunde liegenden Diensten der Angebote werden im Incident-Modul kommuniziert.

**Verantwortung von Cloud Temple:**

- **Cloud Temple** ist verantwortlich für die Kommunikation von Schwachstellen in der Infrastruktur und den zugrunde liegenden Diensten der Angebote ab der Entdeckung über das [**incident**](/console/status.md)-Modul der SHIVA-Konsole.
- **Cloud Temple** ist verantwortlich für die Anwendung von Patches in diesem Bereich.
- **Cloud Temple** ist verantwortlich für die Bereitstellung von Tools zur Analyse von Schwachstellen in Docker-Images. Standardmäßig richtet **Cloud Temple** [Quay] ein, um die automatische Überprüfung von Docker-Images durchzuführen.

**Verantwortung des Benutzers:**

- Der **Kunde** ist verantwortlich für die Erkennung und Korrektur von Schwachstellen in seinen Workloads.
- Der **Kunde** ist verantwortlich dafür, seine Workloads zu aktualisieren, um die Anwendung von Sicherheitspatches so schnell wie möglich zu ermöglichen.

**Empfehlung:**

- Das Cluster-Alerting von [Quay] verwenden, um Schwachstellen zu analysieren und ungewöhnliches Verhalten in den von dem **Kunden** verwendeten Images zu erkennen.
- Sich für Benachrichtigungen zu [**Ereignissen**](/console/status.md#gestion-des-notifications) anmelden.

### 2.4. Verschlüsselung

Gewährleistung einer nativen Verschlüsselung auf der **Cloud Temple**-Infrastruktur mit Empfehlungen für Workloads.

**Verantwortung von Cloud Temple:**

- Redundanzmechanismen innerhalb der Infrastruktur.
- Automatische Backups der Cluster-Konfigurationen.

**Verantwortung des Benutzers:**

- Kritische Daten der Workloads mit Lösungen wie der **Kasten**-Angebot aus dem **Cloud Temple**-Katalog sichern.
- Sicherstellen, dass die Workloads die Resilienzmechanismen nutzen und die Bereitstellungen entsprechend anpassen.

**Empfehlung:**

- TLS-Verschlüsselung für alle Kommunikationen innerhalb der Pods aktivieren.
- TLS-Verschlüsselung für alle Kommunikationen zwischen den **Cloud Temple**-PaaS- und IaaS-Angeboten aktivieren.
- Datenruhe-Verschlüsselung über die **Cloud Temple**-Speicherlösungen sicherstellen.

### 2.5. Protokollierung und Audit

Automatische Aufzeichnung kritischer Ereignisse des Clusters.

**Verantwortung von Cloud Temple:**

- **Cloud Temple** ist verantwortlich für die Protokollierung und das Audit der Infrastruktur und der zugrunde liegenden Dienste der Angebots.

**Verantwortung des Benutzers:**

- Der **Kunde** ist verantwortlich für die Protokollierung und das Audit seiner Workloads.

**Empfehlung:**

- Einrichten von Pipelines zur Zentralisierung und Analyse der Logs Ihrer Workloads:
  - Verwenden Sie Sammler zur Log-Aggregation mit einem Visualisierungstool.
  - Integrieren Sie die Logs in Ihr **SIEM** (empfohlen).

## 3. Incident-Management und PCA (Betriebskontinuitätsplan)

**Verantwortung von Cloud Temple:**

- **Cloud Temple** ist verantwortlich für die Redundanzmechanismen innerhalb der Infrastruktur.
- **Cloud Temple** ist verantwortlich für die automatischen Backups der Cluster-Konfigurationen.
- **Cloud Temple** ist verantwortlich für die Wiederherstellung der Aktivitäten nach einem Incident auf der Infrastruktur oder auf den zugrunde liegenden Diensten der Angebote.

**Verantwortung des Nutzers:**

- Der **Kunde** ist verantwortlich dafür, kritische Daten der Workloads mit Lösungen wie der **Kasten**-Angebot aus dem **Cloud Temple**-Katalog zu sichern.
- Der **Kunde** muss sicherstellen, dass die Workloads die Resilienzmechanismen nutzen und seine Bereitstellungen entsprechend anpassen.
- Der **Kunde** ist verantwortlich für den PRA/PCA seiner Workloads.

**Prozedur „Wiederherstellung nach Schadensfall“**

- Bei vollständigem Verlust des Zugangs zu einem Cluster muss der **Kunde** einen Incident beim Support **Cloud Temple** über das Support-Modul der Konsole melden.
Siehe die [Technik-Support-Anfrage-Prozedur](/console/console_quickstart.md#accès-au-support-technique)

## Allgemeine Empfehlungen

1. **Ressourcen planen**: Sicherstellen, dass der Cluster ausreichende Kapazität hat, um Spitzenlasten zu bewältigen.
2. **Konfigurationen überprüfen**: Anwendungen in Staging-Umgebungen testen, bevor sie in die Produktion bereitgestellt werden.
3. **Regelmäßig überwachen**: Integrierte Tools verwenden, um die Ressourcennutzung zu überwachen und Probleme so früh wie möglich zu erkennen.
4. **Informiert bleiben**: Roadmap und Leitfäden verfolgen, um veraltete Funktionen zu vermeiden.
5. **Support kontaktieren**: Für ungelöste Probleme den Support über die [**Technik-Support-Anfrageprozedur**](/console/console_quickstart.md#accès-au-support-technique) oder per E-Mail an die Adresse [**contact**](mailto:contact@cloud-temple.com) kontaktieren.

Um die Verantwortlichkeiten detailliert zu erfahren, lesen Sie bitte unsere [**Verantwortungsmatrix**](/contractual/paas/raci.md).