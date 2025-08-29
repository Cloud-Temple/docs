---
title: Tabelle der Verantwortlichkeit - Standard OpenShift
---

Hier ist das RACI-Modell, das die Aufgabenverteilung zwischen dem Kunden und Cloud Temple für die Nutzung der Angebot **Standard OpenShift** definiert.

### Definition of Different Roles

Here we recap the different roles according to RACI:

| Role         | Description                                                                     |
| ------------ | ---------------------------------------------------------------------------------|
| (R) Realizes  | __R__alise le processus                                                                 |
| (A) Approves   | __A__pprouve la réalisation du processus                                             |
| (C) Consults  | __C__onsulté pendant le processus                                                      |
| (I) Informs    | __I__nformé des résultats du processus (via l'outillage, le portail ou la messagerie)|

### Initial Setup

| Activity                                                                                 | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------------------------------- | ----------- | ----------------- |
| Define the overall architecture of the OpenShift service                                      | C           | RA                |
| Scale the OpenShift service (number of nodes, resources)                                  | C           | RA                |
| Install OpenShift with default configuration                                                  | I           | RA                |
| Configure OpenShift service                                                              | RA          | C                 |
| Set up the base network infrastructure for OpenShift                                        | I           | RA                |
| Deploy initial identity and access configuration for OpenShift                           | C           | RA                |
| Define scaling and high availability strategy on the infrastructure                       | C           | RA                |

### Projektverwaltung und -anwendung

| Aktivität                                          | Kunde-Rolle  | Cloud Temple Rolle |
| ------------------------------------------------- | ----------- | ----------------- |
| Erstellen und Verwalten von OpenShift-Projekten   | RA          | C                 |
| Bereitstellen und Verwalten von Anwendungen in OpenShift | RA          | C                 |
| Konfigurieren der CI/CD-Pipelines                | RA          | C                 |
| Verwaltung von Container-Bildern und Registries | RA          | C                 |

### Wartung und Updates

| Aktivität                                         | Kundenrolle     | Cloud Temple Rolle |
| ------------------------------------------------ | ----------------- | --------------------- |
| OpenShift-Dienst aktualisieren                    | RA              | I                     |
| Sicherheitslücken in OpenShift schließen         | RA              | I                     |
| Anwendungen, die auf OpenShift bereitgestellt sind, aktualisieren | RA              | I                     |
| Updates der Container-Bildbilder verwalten      | RA              | I                     |

### Überwachung und Leistung

| Aktivität                                               | Kundenrolle | Cloud Temple Rolle |
| ----------------------------------------------------- | ----------- | ----------------- |
| Die Leistung des Dienstes OpenShift überwachen      | RA          | I                 |
| Die Leistung der Anwendungen überwachen            | RA          | I                 |
| Die Wartung von Benachrichtigungen für den Dienst OpenShift | RA          | I                 |
| Die Wartung von Benachrichtigungen für die Anwendungen | RA          | I                 |

### Sicherheit

| Aktivität                                                                   | Rolle des Kunden | Rolle von Cloud Temple |
|-------------------------------------------------------------------------------|-------------------|------------------------|
| Sicherstellung der Sicherheitsverwaltung für den Service OpenShift     | RA               | C                     |
| Konfiguration und Verwaltung der Sicherheitsrichtlinien für Pods      | RA               | I                     |
| Verwaltung der SSL/TLS-Zertifikate für den Service OpenShift        | RA               | C                     |
| Verwaltung der SSL/TLS-Zertifikate für Anwendungen                | RA               | I                     |
| Implementierung und Verwaltung des Rollenbasierten Zugriffs (RBAC)  | RA               | I                     |

### Disaster Recovery and Failover

| Activity                                                                   | Client Role (RA) | Cloud Temple Role (CI) |
|-------------------------------------------------------------------------------|-------------------|-------------------------|
| Define the backup strategy for the OpenShift service                      | RA               | CI                     |
| Implement and manage backups of the OpenShift service                    | RA               | CI                     |
| Define the backup strategy for applications                               | RA               | CI                     |
| Implement and manage backups of applications                            | RA               | CI                     |
| Test disaster recovery procedures for the service                       | RA               | CI                     |
| Test disaster recovery procedures for applications                      | RA               | CI                     |

### Support und Problemlösung

| Aktivität                                                                   | Kunde-Rolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------|-------------|-------------------|
| Bereitstellung von Level-1-Support für die Infrastruktur             | I          | RA                |
| Bereitstellung von Level-2- und 3-Support für die Infrastruktur    | I          | RA                |
| Beheben von Problemen im Zusammenhang mit OpenShift               | RA         | C                 |
| Beheben von Problemen in den Anwendungen                          | RA         | C                 |

### Fähigkeitenverwaltung und Skalierung

| Aktivität                                                                   | Kundenrolle                  | Cloud Temple Rolle              |
|-----------------------------------------------------------------------|-------------------------------|---------------------------------|
| Ressourcenverbrauch des Dienstes OpenShift überwachen                | RA                          | C                             |
| Fähigkeitsentwicklung der Dienstfähigkeiten entwickeln               | RA                          | C                             |
| Änderungen der Fähigkeiten implementieren                           | I                            | RA                               |
| Verwaltung von Anwendungsentwicklung und ihren Ressourcen verwalten | RA                          | C                             |

### Dokumentation und Konformität

| Aktivität                                                                   | Kunde-Rolle | Cloud Temple Rolle |
|-------------------------------------------------------------------------------|--------------|--------------------|
| Wartung der Dokumentation des Dienstes OpenShift                     | I           | RA                |
| Wartung der Dokumentation von Anwendungen                           | RA          | I                 |
| Gewährleistung der Konformität des Dienstes OpenShift mit Sicherheitsstandards | RA          | C                 |
| Gewährleistung der Konformität von Anwendungen mit Sicherheitsstandards | RA          | C                 |
| Durchführung von Audits für den Dienst OpenShift                    | RA          | C                 |
| Durchführung von Audits für Anwendungen                            | RA          | C                 |

### Management of OpenShift Operators

The **OpenShift Operators** are extensions of the service that automate the management of complex applications or services on Kubernetes/OpenShift.

Within the **OpenShift Standard** environment, no restrictions apply to operators. The provision of the OperatorHub functionality is handled by **Cloud Temple**. Operators are made available through Red Hat's marketplace catalog. Installation, monitoring, and updating these operators are managed by the **Client**.

The **Client** is responsible for utilizing these operators to manage its workloads.

| Activity                                                                 | Client Role       | Cloud Temple Role        |
|-------------------------------------------------------------------------|--------------------|-----------------------|
| Providing default Operator catalog                                         | CI                 | RA                     |
| Updating Operators                                                         | RA                 | CI                     |
| Monitoring the state of Operators                                        | RA                 | CI                     |
| Resolving issues related to Operators                                   | RA                 | CI                     |
| Managing permissions for Operators                                       | RA                 | CI                     |
| Managing resources of Operators (addition/removal)                      | RA                 | CI                     |
| Backing up data of Operator resources                                    | RA                 | CI                     |
| Supervising and monitoring Operator resources                          | RA                 | CI                     |
| Restoring data from Operator resources                                  | RA                 | CI                     |
| Security audit of Operators                                             | RA                 | CI                     |
| Support for Operators                                                      | RA                 | CI                     |
| Managing licenses and specific support contracts on operators           | RA                 | I                     |
| Managing tailored support plans for operators                          | RA                 | I                     |

**Important Note:**

- Any damage resulting from the installation of an operator or due to client operations is the responsibility of the **Client**.
- The management of licenses and specific support contracts on operators is not the responsibility of **Cloud Temple**.

### Klarstellung zur Anwendungserweiterung

**Anwendungserweiterung (zusätzliche Dienstleistung):**

Die Anwendungserweiterung im Zusammenhang mit der Entwicklung, Konfiguration, Verwaltung und Wartung von Anwendungen **fällt nicht in die Verantwortung von Cloud Temple**. Unsere Hauptverantwortung liegt bei der Verwaltung des unterliegenden Infrastruktur-Stacks für OpenShift. Die Unterstützung von Workloads, Cluster-Management bis hin zu Betriebssystemen sowie Pipelines CI/CD gehören in diese Kategorie.

| Aktivität                                           | Rolle Kunde | Rolle Cloud Temple |
| -------------------------------------------------- | ----------- | ----------------- |
| Anwendungserweiterung (zusätzliche Dienstleistung) | RA          | C                 |
