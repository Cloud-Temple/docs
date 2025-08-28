---
Tabelle der Verantwortlichkeit IaaS
---

Hier ist das RACI-Modell, das die Aufgabenverteilung zwischen dem Kunden und Cloud Temple für die Nutzung der IaaS-Infrastrukturen von Cloud Temple definiert.

## Definition of Different Roles

Here we recap the different roles according to RACI:

| Role         | Description                                                                     |
|--------------|---------------------------------------------------------------------------------|
| (R) Realizes  | __R__ realizes the process                                                              |
| (A) Approves   | __A__ approves the execution of the process                                              |
| (C) Consults  | __C__ is consulted during the process                                                     |
| (I) Informs    | __I__ is informed about the results of the process (via tooling, portal or messaging)|

## Definieren Ihrer Anforderungen

| Aktivität                                                                                       | Rolle Kunde | Rolle Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Die globale Architektur der Plattform Cloud Temple definieren                               | **RA**      | **CI**            |
| Definieren des Anzahlens von Tenannten und der Anzahl der Verfügbarkeitszonen für jeden Tenant | **RA**      | **CI**            |
| Definieren Ihrer globalen Strategie zur Wiederbelebung oder Kontinuität der Geschäftsfunktionen | **RA**      | **CI**            |
| Korrekt dimensionieren Sie Ihre Plattform Cloud Temple (Rechenleistung, Speicher, Netzwerk, Backup usw.) | **RA**      | **CI**            |
| Abonnement an Dienstleistungen unter Verwendung der erforderlichen Informationen                | **RA**      | **I**             |

## Initial Deployment of Your Cloud Temple Tenants

| Activity                                                                                                     | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure implementation of **physical data centers**                                                      |             | RA                |
| Ensure implementation of computing infrastructure                                                     | I          | RA                |
| Ensure implementation of storage infrastructure                                                   | I          | RA                |
| Ensure implementation of backbone network connectivity (1)                                       | I          | RA                |
| Acquire and maintain essential software licenses for Cloud Temple platform operation                  |             | RA                |
| Implement basic configuration of your Cloud Temple tenants                                             | CI         | RA                |
| Implement initial configuration for backup service                                                      | CI         | RA                |
| *If applicable:* implement initial network configuration for Internet and Firewall services            | CI         | RA                |
| Provide necessary assistance for tenant environment takeover                                         | I          | RA                |
| Perform final configuration adjustments of the service post-delivery                                  | RA         | C                 |
| Configure an external authentication repository for Cloud Temple console                          | RA         | C                 |
| Create users for each tenant in the Cloud Temple console and assign permissions                  | RA         |                   |
| Validate delivery platform compliance with SecNumCloud reference registry                           | I          | RA                |
| Validate delivery platform compliance with required specifications                               | RA         | CI                |

*(1) The backbone network serves as the central infrastructure of Cloud Temple, providing a spinal cord for client-specific networks that are integrated and supported by this primary infrastructure.*

## Integration of Your Information System into Cloud Temple Environments

| Activity                                                                                                      | Role Client | Role Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, update virtual machines                                                                       | **RA**      |                   |
| Install and configure software and middleware on your virtual machines                                              | **RA**      |                   |
| Purchase and maintain licenses/usage rights for operating systems of your virtual machines                     | **RA**      |                   |
| Configure network settings for each of your virtual machines                                                  | **RA**      |                   |
| Ensure each virtual machine is linked to a consistent disaster recovery plan                                         | **RA**      | **C**             |
| Ensure each virtual machine is associated with a consistent business continuity or disaster recovery plan     | **RA**      | **C**             |
| Implement an antivirus protection strategy on your virtual machines                                                | **RA**      |                   |
| Set up monitoring and logging solution on your virtual machines                                                  | **RA**      |                   |
| Define your virtual machine tagging policy                                                                   | **RA**      |                   |

### Häufige Operationen

### Zugrichtlinigen und Identitätsverwaltung

| Aktivität                                                                                                | Rolle Kunde | Rolle Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Stellen Sie sicher, dass der Service Console Cloud Temple sowie die damit verbundene API zugänglich sind. |             | **Zugriffsrolle** |
| Stellen Sie sicher, dass das auf Ihren virtuellen Maschinen bereitgestellte Informationsystem zugänglich ist. | **Zugriffsrolle** |                   |
| Verwalten Sie physische und logische Berechtigungen für die Teams Cloud Temple an den Infrastrukturen SecNumCloud. |             | **Zugriffsrolle** |
| Administrieren Sie Zugriffe und Sicherheitsrichtlinien im Zusammenhang mit der Konsole Console Cloud Temple und ihrer API. | **Zugriffsrolle** |                   |
| Administrieren Sie Zugriffe und Sicherheitsrichtlinien im Zusammenhang mit dem auf Ihren Cloud-Tenants hingebungigen Informationsystem. | **Zugriffsrolle** |                   |

### Maintenance in Operational and Security Condition

The activities aimed at maintaining the operational and security condition of infrastructures and services offered by Cloud Temple, within its IaaS offering, are carried out with the objective of adhering to SecNumCloud qualification.

| Activity                                                                                          | Client Role I                               | Cloud Temple Role                     |
|-----------------------------------------------------------------------------------------------|---------------------------------------------|-------------------------------------|
| Ensure operational readiness of physical data centers                                         | **I**                                   | **RA**                                |
| Ensure security readiness of physical data centers                                           | **I**                                   | **RA**                                |
| Ensure operational readiness of computing infrastructure                                      | **I**                                   | **RA**                                |
| Ensure security readiness of computing infrastructure (2)                                    | **RA**                                  | **CI**                                |
| Ensure operational readiness of storage infrastructure                                         | **I**                                   | **RA**                                |
| Ensure security readiness of storage infrastructure                                        | **I**                                   | **RA**                                |
| Ensure operational readiness of backbone networking                                            | **I**                                   | **RA**                                |
| Ensure security readiness of backbone networking                                           | **I**                                   | **RA**                                |
| Ensure operational readiness of virtual machines deployed in client tenants (3)                | **RA**                                  |                                 |
| Ensure security readiness of virtual machines deployed in client tenants (3)                   | **RA**                                  |                                 |
| Ensure operational readiness of middlewares deployed in client tenants                        | **RA**                                  |                                 |
| Ensure security readiness of middlewares deployed in client tenants                           | **RA**                                  |                                 |

*(2) Cloud Temple regularly provides the latest operating system versions for your hypervisors. However, due to Cloud Temple's lack of information regarding your production environments' specifics and workload requirements, the decision to update the hypervisor's operating system (resulting in a reboot), falls on you during the ongoing operational phase. This operation can be performed through Cloud Temple's console or API. Professional services are available if you wish for Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers firewall packs (Fortinet, Stormshield) and load balancers (HAProxy) as bundles, collaborating with your teams during the implementation phase for initial configuration. Nevertheless, maintaining operational readiness and security falls solely on you in the current operational phase. Professional services are available if you wish Cloud Temple to handle certain operations.*

### Verwaltung von Änderungen, Incidenten, Problemen und Kapazitäten

| Aktivität                                                                                          | Rolle Kunde | Rolle Cloud Temple |
|-------------------------------------------------------------------------------------------------------|----------------|-------------------|
| Bearbeiten von Incidenten in physikalischen Datenkentern                                           | **I**       | **RA**            |
| Beheben von Problemen in physikalischen Datenkentern                                           |             | **RA**            |
| Überwachen der Kapazitäten in physikalischen Datenkentern                                           |             | **RA**            |
| Bearbeiten von Incidenten im Bereich des Rechenbereichs                                               | **I**       | **RA**            |
| Beheben von Problemen im Bereich des Rechenbereichs                                               |             | **RA**            |
| Überwachen der Kapazitäten im Bereich des Rechenbereichs                                           | **RA**      | **CI**            |
| Bearbeiten von Incidenten im Bereich des Speicherbereichs                                             | **I**       | **RA**            |
| Beheben von Problemen im Bereich des Speicherbereichs                                             |             | **RA**            |
| Überwachen der Kapazitäten im Bereich des Speicherbereichs                                           | **RA**      | **CI**            |
| Bearbeiten von Incidenten im Bereich des Backbone-Netzwerks                                         | **I**       | **RA**            |
| Beheben von Problemen im Bereich des Backbone-Netzwerks                                         |             | **RA**            |
| Überwachen der Kapazitäten im Bereich des Backbone-Netzwerks                                         |             | **RA**            |
| Erstellung einer neuen virtuellen Maschine oder Einrichtung eines neuen Anwendungsumgebungsbereichs innerhalb eines Tenant-Kunden | **RA**      |                   |
| Ändern der Konfiguration von virtuellen Maschinen, die bereits ausgeführt wurden                  | **RA**      |                   |
| Entfernen einer ausgeführten virtuellen Maschine                                                  | **RA**      |                   |
| Entscheiden, ob man Ressourcen auf der Cloud Temple hinzufügen, ändern oder entfernen soll       | **RA**      | **CI**            |
| Ausführen der Entscheidung zur Änderung von Ressourcen auf der Cloud Temple                     | **I**       | **RA**            |
| Anwenden von Tags auf virtuelle Maschinen gemäß der definierten Politik                          | **RA**      |                   |

### Performance Management

| Activity                                                                 | Client Role I | Cloud Temple Role A |
|-------------------------------------------------------------------------|---------------|---------------------|
| Ensure the monitoring and reliability of all equipment involved in providing a qualified SecNumCloud service | **I**       | **RA**            |
| Track the performance of physical computing, storage, and network resources allocated to your tenants (4)                  | **RI**      | **A**             |
| Supervise the performance of virtual machines supporting your environments                                                                  | **RA**      | **I**             |

*(4) Cloud Temple's platform adheres to a philosophy of providing dedicated infrastructures for computing (with physical servers), storage (via dedicated LUNs on SANs), and networking (including firewalls and load balancers). These dedicated resources are made available to the client, whose usage and resulting load directly impact system performance. It is therefore the client's responsibility to establish and manage monitoring and metering systems to ensure optimal operation of their information infrastructure.*

### Management of Backup and Disaster Recovery on Integrated Backup Solution

| Activity                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------|------------|------------------|
| Ensure operational readiness on integrated backup infrastructures within the Cloud Temple platform (5) |           | RA               |
| Ensure security readiness on integrated backup infrastructures within the Cloud Temple platform | I         | RA               |
| Manage incidents on integrated backup infrastructures within the Cloud Temple platform | I         | RA               |
| Manage issues on integrated backup infrastructures within the Cloud Temple platform |           | RA               |
| Manage capabilities on integrated backup infrastructures within the Cloud Temple platform | AI       | RC               |
| Ensure operational readiness of chosen backup solution within client's tenants (6) | RA        |                 |
| Ensure security readiness of chosen backup solution within client's tenants | RA        |                 |
| Manage incidents on chosen backup solution within client's tenants | RA        |                 |
| Manage issues on chosen backup solution within client's tenants | RA        |                 |
| Manage capabilities on chosen backup solution within client's tenants | RA        | CI              |
| Manage the lifecycle of backup policies                                                                                       | RA        |                 |
| Ensure backup policies align with data lifecycle cycle                                              | RA        |                 |
| Ensure business continuity or disaster recovery plans align with data lifecycle cycle                          | RA        |                 |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy                               | RA        |                 |
| Conduct periodic tests to evaluate the effectiveness of business continuity or disaster recovery strategies | RA        | CI              |

*(5) As of January 1, 2024, IBM Spectrum Protect Plus is the integrated backup solution on the Cloud Temple platform. This solution is fully automated and can be managed via the Cloud Temple console or API.*

### Management of Backup and Disaster Recovery for Third-Party Platforms within Client's Tenant

| Activity                                                                 | Client Role (RA) | Cloud Temple Role |
|------------------------------------------------------------------------|---------------|-------------------|
| Ensure operational readiness of the chosen backup solution within client's tenants **(6)** | RA            |                   |
| Ensure security compliance of the chosen backup solution within client's tenants                  | RA            |                   |
| Manage incidents related to the chosen backup solution within client's tenants          | RA            |                   |
| Manage issues related to the chosen backup solution within client's tenants          | RA            |                   |
| Manage capacity of the chosen backup solution within client's tenants              | RA            | CI               |
| Manage the lifecycle of backup policies                                                                   | RA            |                   |
| Ensure backup policies align with data lifecycle cycle                                               | RA            |                   |
| Ensure business continuity or disaster recovery plans are aligned with data lifecycle cycle | RA            |                   |
| Conduct periodic tests to assess the effectiveness of the backup strategy             | RA            |                   |
| Conduct periodic tests to assess the effectiveness of disaster recovery or business continuity strategies | RA            | CI               |

*(6) This pertains to any additional backup solution implemented within client's environments and managed by them. Cloud Temple offers professional services for those wishing to delegate certain operations to Cloud Temple.*

### Verwaltung von Dokumentation und Vertrag

| Aktivität                                                                                                                                                        | Kundenrollen  | Cloud Temple Rollen |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Sicherstellen der Geschäftsführung und Vertragsverwaltung des Kunden, einschließlich Erstellung von Angeboten, Bearbeitung von Bestellungen und Rechnungsstellung | **I**       | **RA**            |
| Aufrechterhaltung der vertraglichen Abwicklung der Leistung, einschließlich Validierung von Angeboten, Überwachung von Lieferungen und Beaufsichtigung der Rechnungsstellung                   | **RA**      | **I**             |
| Aufrechterhaltung der Wartung und Verfügbarkeit des Inventars der Ressourcen, die Cloud Temple für die Angebot SecNumCloud bereitstellt                          | **I**       | **RA**            |
| Aufrechterhaltung der Wartung und Bereitstellung technischer Dokumentation im Zusammenhang mit dem Angebot SecNumCloud                                         | **I**       | **RA**            |
| Überwachen des Lebenszyklus virtueller Maschinen, die in den Umgebungen von Cloud Temple bereitgestellt wurden, über Ihre CMDB (Configuration Management Database) | **RA**      |                   |
| Aufrechterhaltung der Zugangspolitik zur Benutzeroberfläche oder API von Cloud Temple                                                                                 | **RA**      |                   |

### Log-Management

| Aktivität                                                                                                | Kundenrolle | Cloud Temple Rolle |
|---------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Speichern und Bereitstellen der Logs der IaaS-Plattform Cloud Temple **(7)**                           |             | RA                |
| Speichern und Bereitstellen der Logs des von Ihnen gehosteten Informationssystems innerhalb Ihrer Cloud Temple Tenant | RA          |                   |

*(7) Ab Januar 2024 wird die Lagerung der Plattform-Logs eine Dauer von einem Jahr betragen.*

## Network Connectivity to Client (MPLS, Fiber Dedicated, IPSec, ...)

| Activity                                                                                             | Role Client | Role Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to operator's network connectivity for access to a physical datacenter Cloud Temple (8) | **RA**      | **CI**            |
| Manage IP addressing plan                                                                         | **RA**      | **I**             |
| Handle incidents on client operator networks                                                                  | **RA**      |                   |
| Handle problems on client operator networks                                                                  | **RA**      | **CI**            |
| Manage capabilities on client operator networks                                                                  | **RA**      | **CI**            |

*(8) Cloud Temple assumes responsibility for the network concerning its infrastructure backbone, collection points, and datacenter interconnection points, ensuring connectivity between these points and its backbone network. In our physical data center hosting offering, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly referred to as "top of rack".*

## Reversibilität

| Aktivität                                                                                                                                                                                       | Rolle Kunde | Rolle Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------????--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------