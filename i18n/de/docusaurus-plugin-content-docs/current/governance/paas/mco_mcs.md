---
title: MCO/MCS
---

**Politique de Maintien en Conditions Opérationnelles (MCO) et de Maintien en Conditions de Sécurité (MCS) sur le PaaS OpenShift SNC **Cloud Temple****

## Préambule

Cette politique détaille les responsabilités et les recommandations pour le Maintien en Conditions Opérationnelles (MCO) et le Maintien en Conditions de Sécurité (MCS) de vos environnements sur le PaaS OpenShift SNC **Cloud Temple**.

---

## 1. Maintien en Conditions Opérationnelles (MCO)

### 1.1. Gestion et mise à jour des clusters

**Verantwortung **Cloud Temple** :**

- Vollständige Verwaltung der zugrunde liegenden Infrastruktur, einschließlich der Master-Knoten, OpenShift-Versionsaktualisierungen und der Widerstandsfähigkeit der von **Cloud Temple** bereitgestellten kritischen Dienste.
- Automatische kleinere Updates/Patches ohne Unterbrechung der gehosteten Workloads, es sei denn, anders benachrichtigt.
- Einschränkung der Rechte und Funktionen gemäß den SecNumCloud-Vorgaben.
- Kommunikation zu kommenden Updates und Versionsbrüchen für die nächsten drei Monate über die [**Roadmap Cloud Temple**](https://github.com/orgs/Cloud-Temple/projects/2)

**Verantwortung des Benutzers:**

- Verwaltung der bereitgestellten Workloads (Anwendungen, CI/CD-Tools) und ihrer Konfigurationen.
- Tests der Workload-Updates in einer Staging-Umgebung, bevor sie in die Produktion überführt werden.
- Gewährleistung der Kompatibilität der Workloads mit den Cluster-Komponenten.

**Empfehlung:**

- Planen Sie die Anwendungseinführungen außerhalb der Wartungsfenster, um Konflikte mit den automatischen Cluster-Updates zu vermeiden.
- Folgen Sie den **Cloud Temple**-Kommunikationen zu wichtigen Updates, um notwendige Anpassungen zu planen.
- Verfolgen Sie die kommenden Updates über die [**Produkt-Roadmap**](https://github.com/orgs/Cloud-Temple/projects/2)
- Abonnieren Sie die Benachrichtigungen zu [**Störungen**](/console/status.md#gestion-des-notifications)

---

### 1.2. Überwachung und Monitoring

**Verantwortung **Cloud Temple** :**

- Überwachung und Monitoring der Infrastruktur und der von **Cloud Temple** bereitgestellten zugrunde liegenden Dienste.

**Verantwortung des Benutzers:**

- Überwachung und Monitoring der eigenen Workloads.

**Empfehlung:**

Verwenden Sie die **bereitgestellten nativen Tools:**

- Analyse der Leistungsprotokolle und Ereignisse über die OpenShift-Konsole.
- Konfiguration benutzerdefinierter Warnungen basierend auf den Metriken des Clusters und der Pods über die Benutzeroberfläche.

Konfigurieren Sie kritische Warnschwellen:

- **CPU/Arbeitsspeicher** der Pods: ≥ 80 %.
- **Festplattenspeicher auf den persistenten Volumes**: ≥ 85 %.
- **Fehlgeschlagene Starts der Pods**: mehr als X Vorkommnisse in 10 Minuten.

Automatisieren Sie die Eskalation der Warnungen an Ihre Verwaltungstools für eine schnelle Reaktion.

---

### 1.3. Backups und Wiederherstellung

Die kritischen Komponenten des Clusters werden automatisch von **Cloud Temple** gesichert. Die Workloads und Daten der Benutzer erfordern eine eigene Verwaltung.

**Verantwortung **Cloud Temple** :**

- Mechanismen zur automatischen Redundanz innerhalb der Infrastruktur.
- Automatische Backups der Cluster-Konfigurationen.

**Verantwortung des Benutzers:**

- Sichern Sie die kritischen Daten der Workloads mit Lösungen wie dem **Kasten**-Angebot im **Cloud Temple**-Katalog.

**Empfehlung:**

- Richten Sie regelmäßige Backup-Strategien ein:
  - Automatische Backups der PVs mit Kasten.
  - Tägliche Backup der Kubernetes-Konfigurationen, Secrets und YAML-Deployments.
- Testen Sie regelmäßig die Wiederherstellung zur Validierung der RPO.

---

## 2. Maintien en Conditions de Sécurité (MCS)

### 2.1. Verwaltung von Secrets und Konfigurationen

Utilisation des secrets OpenShift/Kubernetes et recommandation d'intégrer des systèmes de gestion centralisée des secrets.

**Verantwortung **Cloud Temple** :**

- Die Verwaltung der Secrets und der Konfigurationen der Infrastruktur und der zugrunde liegenden Dienste ist die Verantwortung von **Cloud Temple**.

**Verantwortung des Benutzers:**

- Die Verwaltung der Secrets und der Konfigurationen der Workloads des **Kunden** ist die Verantwortung des **Kunden**.

**Empfehlung:**

- Speichern Sie keine Geheimnisse im Klartext in den YAML-Dateien.
- Verwenden Sie Tools zur Verschlüsselung sensibler Informationen.

### 2.2. Zugangskontrolle (IAM)

Die Überprüfung der Zugänge erfolgt über die Shiva-Konsole und das Modul "User Management" der OpenShift-Konsole.

Pour plus de détails sur cette fonctionnalité, se référer à notre [**guide**](/console/iam/iam) et à la [**documentation**](https://docs.redhat.com/en/documentation/openshift_container_platform/) de l'éditeur.

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist für die Verwaltung der Dienst- und Administrationskonten verantwortlich.
- **Cloud Temple** ist verantwortlich für die Integration in das **Cloud Temple**-Identitätssystem zur Verwaltung der Zugriffe.
- **Cloud Temple** ist verantwortlich für die standardmäßige Konfiguration von **RBAC** und die Einschränkung der anfänglichen Benutzerrechte.
- **Cloud Temple** ist verantwortlich für die Bereitstellung des **Zwei-Faktor-Authentifizierungs-**systems und dessen Aufrechterhaltung zur Verstärkung der Zugriffe.

**Verantwortung des Benutzers:**

- Der **Kunde** muss regelmäßig die Zugriffe seiner Benutzer überprüfen.
- Der **Kunde** ist verantwortlich für die Erteilung der Zugriffsrechte an seine Benutzer und deren Onboarding im Tenant.
- Der **Kunde** muss seine Benutzer gemäß den vom **Cloud Temple**-System auferlegten Einschränkungen verwalten.

### 2.3. Verwaltung von Schwachstellen

Schwachstellen in der Infrastruktur und den zugrunde liegenden Diensten des Angebots werden im Vorfall-Modul kommuniziert.

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist verantwortlich für die Kommunikation über Schwachstellen in der Infrastruktur und den zugrunde liegenden Diensten des Angebots sofort nach deren Erkennung über das Modul [**Vorfall**](/console/status.md) der SHIVA-Konsole.
- **Cloud Temple** ist verantwortlich für die Anwendung der Patches in diesem Bereich.
- **Cloud Temple** ist verantwortlich für die Bereitstellung von Tools zur Analyse von Schwachstellen in Docker-Images. Standardmäßig bietet **Cloud Temple** **[Quay]** für den automatischen Scan von Docker-Images an.

**Verantwortung des Benutzers:**

- Der **Kunde** ist verantwortlich für die Erkennung und Behebung von Schwachstellen in seinen Workloads.
- Der **Kunde** ist verantwortlich für die Aktualisierung seiner Workloads, um die Anwendung der Sicherheitsupdates so schnell wie möglich zu ermöglichen.

**Empfehlung:**

- Verwenden Sie das vom Cluster bereitgestellte **[Quay]**-Benachrichtigungssystem, um Schwachstellen zu analysieren und anomales Verhalten in den vom **Kunden** verwendeten Images zu erkennen.
- Abonnieren Sie die Benachrichtigungen zu [**Störungen**](/console/status.md#gestion-des-notifications).

### 2.4. Verschlüsselung

Garantie d'un chiffrement natif sur l'infrastructure **Cloud Temple**, avec recommandations pour les charges de travail.

**Verantwortung **Cloud Temple** :**

- Mechanismen zur Redundanz innerhalb der Infrastruktur.
- Automatische Backups der Cluster-Konfigurationen.

**Verantwortung des Benutzers:**

- Sichern Sie die kritischen Daten der Workloads mit Lösungen wie dem **Kasten**-Angebot im **Cloud Temple**-Katalog.
- Stellen Sie sicher, dass die Workloads die Mechanismen zur Ausfallsicherheit nutzen und passen Sie die Bereitstellungen an, um sie umzusetzen.

**Empfehlung:**

- Aktivieren Sie die **TLS-Verschlüsselung** für alle Pod-zu-Pod-Kommunikationen.
- Aktivieren Sie die **TLS-Verschlüsselung** für alle Kommunikationen zwischen den PaaS- und IaaS-Angeboten **Cloud Temple**.
- Stellen Sie sicher, dass ruhende Daten über die **Cloud Temple**-Speicherlösungen verschlüsselt sind.

### 2.5. Protokollierung und Audit

Automatische Aufzeichnung kritischer Ereignisse des Clusters.

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist verantwortlich für die Protokollierung und das Audit der Infrastruktur und der zugrunde liegenden Dienste des Angebots.

**Verantwortung des Benutzers:**

- Der **Kunde** ist verantwortlich für die Protokollierung und das Audit seiner Workloads.

**Empfehlung:**

- Konfigurieren Sie Pipelines zur Zentralisierung und Analyse der Logs Ihrer Workloads:
  - Verwenden Sie Kollektoren zur Protokollaggregation mit einem Visualisierungstool.
  - Integrieren Sie die Logs in Ihr **SIEM** (empfohlen).

---

## 3. Störfall- und DRP-Management (Disaster Recovery Plan)

**Verantwortung **Cloud Temple** :**

- **Cloud Temple** ist verantwortlich für die Mechanismen zur Redundanz innerhalb der Infrastruktur.
- **Cloud Temple** ist verantwortlich für die automatischen Backups der Cluster-Konfigurationen.
- **Cloud Temple** ist verantwortlich für die Wiederherstellung der Aktivität nach Vorfällen in der Infrastruktur oder den zugrunde liegenden Diensten des Angebots.

**Verantwortung des Benutzers:**

- Der **Kunde** ist verantwortlich für die Sicherung der kritischen Daten der Workloads mit Lösungen wie dem **Kasten**-Angebot im **Cloud Temple**-Katalog.
- Der **Kunde** muss sicherstellen, dass die Workloads die Mechanismen zur Ausfallsicherheit nutzen und muss seine Bereitstellungen anpassen, um diese zu implementieren.
- Der **Kunde** ist verantwortlich für den DRP/BCP seiner Workloads.

**Disaster Recovery-Prozedur**

- Im Falle eines vollständigen Verlustes des Zugangs zu einem Cluster muss der **Kunde** einen Vorfall beim **Cloud Temple**-Support über das Support-Modul der Konsole melden.
Voir la [**procédure de demande de support technique**](/console/console_quickstart.md#accès-au-support-technique).

---

## Allgemeine Empfehlungen


1. **Ressourcen planen**: Sicherstellen, dass ausreichende Clusterkapazität für Spitzenlasten vorhanden ist.
2. **Konfigurationen validieren**: Anwendungen in Staging-Umgebungen testen, bevor sie in die Produktion gehen.
3. **Regelmäßig überwachen**: Eingebaute Tools verwenden, um die Ressourcennutzung zu verfolgen und Probleme frühzeitig zu erkennen.
4. **Informiert bleiben**: Die Roadmap und Leitfäden verfolgen, um veraltete Funktionen zu vermeiden.
5. **Support kontaktieren**: Bei ungelösten Problemen den Support über die [**Verfahren zur Anforderung technischer Unterstützung**](/console/console_quickstart.md#accès-au-support-technique) oder per E-Mail an [**contact**](mailto:contact@cloud-temple.com) kontaktieren.

Für detaillierte Verantwortlichkeiten, bitte unsere [**Verantwortlichkeitsmatrix**](/governance/paas/raci.md) einsehen.