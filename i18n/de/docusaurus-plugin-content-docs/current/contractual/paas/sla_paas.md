---
title: Service Agreement for SecNumCloud PaaS
---

## Framework

| Reference | CT.AM.JUR.ANX.PAAS 2.1 |
| :--- | :--- |
| **Date** | 21 January 2025 |

## Acronyms

| Acronym | Description |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Change Advisory Board |
| **CMDB** | Configuration Management Database -- Configuration Management Database |
| **COPIL** | Steering Committee |
| **COSTRAT** | Strategic Committee |
| **DB** | Database (database) |
| **DRP** | Disaster Recovery Plan (Disaster Recovery Plan) |
| **GTI** | Guaranteed Time to Intervention |
| **GTR** | Guaranteed Time to Resolution |
| **GTE** | Guaranteed Time to Escalation |
| **HYPERVISEUR** | Operating system enabling the execution of VMs on a compute blade |
| **ITIL** | Information Technology Infrastructure Library - Best practices for information systems management |
| **IAAS** | Infrastructure as a Service |
| **MCO** | Maintenance in Operational Condition |
| **MOA** | Client (Project Owner) |
| **MOE** | Contractor (Project Executor) |
| **OS** | Operating system |
| **PAQ** | Quality Assurance Plan |
| **PAAS** | Platform as a Service |
| **SDM** | Service Delivery Manager |
| **RFC** | Request For Change -- Request for Change |
| **RGPD** | General Data Protection Regulation (personal data) |
| **RPO** | Recovery Point Objective -- Data freshness upon restoration after an incident |
| **RTO** | Recovery Time Objective -- Service restoration time after an incident |
| **SLA** | Service Level Agreement -- Agreement on service levels |
| **UO** | Work Unit |
| **VABF** | Validation of Operational Suitability |
| **VABE** | Validation of Operational Exploitability |
| **VM** | Virtual Machine (virtual machine) |
| **VSR** | Regular Service Validation |
| **SNC** | SecNumCloud |

## Glossar

Die im vorliegenden Dokument verwendeten Ausdrücke werden gemäß den nachfolgend definierten Bedeutungen verstanden:

| Ausdruck | Definition |
| :--- | :--- |
| **\"Secure Temple\"** | Bezeichnet den IaaS-Service SecNumCloud, der von der Gesellschaft Cloud Temple angeboten wird und wie in der auf der Website der ANSSI einsehbaren Bescheinigung und in Anhang der vorliegenden Servicevereinbarung definiert ist. |
| **Region** | Eine „Region“ im Kontext des Cloud-Computings bezeichnet einen geografisch abgegrenzten Bereich aus Verfügbarkeitszonen, der Netzwerk-, Rechen- und Speicherdienste bereitstellt, um Latenz, Leistung und die Einhaltung lokaler regulatorischer Anforderungen zu optimieren. |
| **Verfügbarkeitszone (AZ) (Availability zone)** | Ein spezifischer, isolierter Bereich der Cloud-Infrastruktur, der darauf ausgelegt ist, die hohe Verfügbarkeit und Resilienz von Diensten durch eine geografische Verteilung der Ressourcen zu gewährleisten. |
| **Tenant** | Eine isolierte Instanz, die einem Benutzer oder einer Benutzergruppe vorbehalten ist, die gemeinsam eine Infrastruktur nutzt, dabei aber die Unabhängigkeit und Sicherheit von Daten und Anwendungen gewährleistet. |

| Ausdruck | Definition |
| :--- | :--- |
| **Vorfalle** | Ein „Vorfall“ bezeichnet jedes unvorhergesehene Ereignis, das den normalen Betrieb eines Systems stört oder die Sicherheit von Daten gefährdet. |
| **Problem** | Ein „Problem“ ist eine zugrundeliegende Ursache für einen oder mehrere Vorfälle, die identifiziert oder vermutet wird und einer Analyse sowie einer Lösung bedarf, um eine erneute Auftretens zu verhindern. |
| **Änderung** | Eine „Änderung“ bezeichnet jede Hinzufügung, Änderung oder Löschung, die den Service beeinflusst, die autorisiert, geplant oder unterstützt wurde. |
| **Standardänderung** | Eine „Standardänderung“ ist eine Änderung, die einer festgelegten Prozedur unterliegt, deren Produktionsmodalitäten und Auswirkungen (einschließlich finanzieller) im Voraus von den Parteien bekannt und akzeptiert sind. Sie wird dann in den Katalog der Standardänderungen aufgenommen und kann je nach Fall eine GTI und eine GTR aufweisen. |
| **Produktionsfreigabe** | Aktion(en) der Administration zur Umsetzung der Änderung, nach deren Genehmigung (die Änderung im Sinne von ITIL bezieht sich ausschließlich auf die Änderungssteuerung und nicht auf deren Umsetzung/Realisierung). |
| **Serviceanfrage** | Eine Anforderung zur Änderung, die einer Prozedur unterliegt, deren Umsetzung: i) die CMDB nicht verändert, ii) der Arbeitsablauf, die Kosten und die Risiken im Voraus bekannt und akzeptiert sind und keine spezifischen Rückgängigmachungsmaßnahmen erfordern, iii) die Umsetzung einem Service-Level-Agreement unterliegt und bei Umsetzung in Geschäftsstunden und an Werktagen in die Vergütung des Vertrags einfließt. |
| **Konfigurationselement** | Ein „Konfigurationselement“ ist ein identifizierbarer Bestandteil des Informationssystems, wie z. B. Software, Hardware oder Dokumente, der im Rahmen der IT-Service-Management-Prozesse verwaltet wird. |
| **Service** | Ein „Service“ bezeichnet den SecNumCloud-Service, der dem Auftraggeber durch den Dienstleister gemäß der „Beschreibung des Services“ in dieser Servicevereinbarung bereitgestellt wird. |
| **Ereignis** | Ein „Ereignis“ ist jede erkennbare oder identifizierbare Vorkommnis, das für die Service-Verwaltung von Bedeutung sein kann. |
| **Schaden** | Ein „Schaden“ bezeichnet ein schwerwiegendes Ereignis, das durch natürliche oder menschliche Ursachen, versehentlich oder vorsätzlich verursacht wurde und erhebliche Verluste und Schäden für die betroffene Partei verursacht. |
| **Servicevereinbarung** | Dieses Dokument, das im Rahmen eines spezifischen Vertrags oder der Allgemeinen Geschäftsbedingungen für Verkauf und Nutzung (AGB) erstellt wurde und gemäß den Anforderungen des SecNumCloud-Referenzrahmens erstellt wurde. |
| **Verfügbarkeit** | Fähigkeit, die Verfügbarkeit und Aufrechterhaltung optimaler Leistungen eines Dienstes gemäß den in den Service-Level-Agreements (SLA) festgelegten Kriterien und Verpflichtungen sicherzustellen. |
| **Überwachung** | Überwachung eines Informationssystems oder eines Dienstes, die die Erfassung verschiedener Daten wie Messwerte und Alarme beinhaltet. Diese Tätigkeit beschränkt sich auf Beobachtung und Monitoring, ohne direkt in die überwachten Elemente eingreifen zu können – eine Befugnis, die den Administrationsaufgaben vorbehalten ist. |

## Purpose of the PaaS Service Agreement by the Provider

This Service Agreement establishes the terms and conditions under which the Provider undertakes to deliver to the CLIENT an infrastructure compliant with the specifications of the offer "Platform as a Service -- PaaS," duly certified SecNumCloud.

Purpose of the Service Agreement:

1. Specify the performance requirements expected by the CLIENT in terms of functionality and reliability of the infrastructure.
2. State the Provider's obligations to meet the agreed service levels.
3. Identify the regulatory standards specifically applicable to the proposed infrastructure.
4. Ensure consistency and integrity in the evaluation of the quality of services delivered.
5. Guarantee the excellence of the services provided, assessed through quantitative performance indicators.

It is stipulated that, in the event the Provider loses its SecNumCloud certification, this Contract may be terminated immediately and without penalty by the CLIENT. In such a case, the Provider undertakes to notify the CLIENT of this loss of certification by sending an official notice via registered letter with acknowledgment of receipt.

It should be noted that any modification or adjustment to the SecNumCloud certification shall not be interpreted as a revocation of the initial certification.

## Evolution of the PaaS Service Agreement

Any modifications or additions to this Service Agreement shall result exclusively from requests submitted by the designated governance bodies. Proposed changes will be reviewed within the Strategic Committee, the sole body authorized to determine which aspects require formal written documentation.

It is agreed that any evolution of the agreement, after validation, which alters the initially established financial conditions, will require the preparation and signing of an amendment to the current contract.

Factors that may trigger a revision of this agreement include, but are not limited to:

- The adaptation of the PaaS platform orchestrated by the Provider.
- Adjustments made to the services deployed by the Provider.
- Changes in commitments and applicable penalties.
- Organizational reconfigurations within the CLIENT or the Provider.
- Expansion or reduction of the scope of services subscribed to by the CLIENT.

Version and revision management of the agreement is documented in the preamble of the document to facilitate tracking.

## Audit

The Provider undertakes to allow the CLIENT, or any third-party auditor designated by the CLIENT, to access all documents necessary to verify full compliance with the obligations arising from the provisions of Article 28 of the General Data Protection Regulation (GDPR), thereby facilitating the conduct of audits.

**The Provider specifically undertakes to make available to the CLIENT a list of all third parties who may access the data, and to inform the CLIENT of any changes to subcontractors.**

By accepting this Service Agreement, the CLIENT grants explicit authorization to:

1. **The National Agency for the Security of Information Systems (ANSSI)**, as well as the competent qualification body, to carry out verification of the compliance of the Service and its Information System with the standards defined by the SecNumCloud Reference Framework.
2. **A qualified information systems security auditor**, duly qualified and expressly designated by the Provider, to conduct security audits on the Service delivered by the Provider.

## Service Description

The service offering provided by the Contractor is characterized by the delivery of the following services, which align with the shared responsibility principle detailed in the standards established by the SecNumCloud reference framework:

- Provision of a Red Hat OpenShift container management platform, operated by the Contractor.

It is understood that the Contractor will leverage its expertise to deliver the Services in accordance with professional best practices, in compliance with the specified requirements and in alignment with the ISO/IEC 27001 certification standards as well as the guidelines of the SecNumCloud Reference Framework.

## Implementation of the Service

It is specified that all operations and physical components involved in providing the qualified service, the subject of this agreement, are located within the European Union. This includes, in particular, support, operational monitoring, and security monitoring (SOC).

### Technical Components Description

The PaaS (Platform as a Service) services encompass all components and services required for their optimal operation, in compliance with the SecNumCloud certification.

In this regard, their performance and reliability are intrinsically linked to the technical components and services of the **IaaS infrastructure** provided by the Supplier, as specified in the Supplier's [IaaS Service Agreement](../iaas/sla_iaas.md).

#### Red Hat OpenShift Service Platform

The service includes provisioning within a region, across 3 availability zones,

#### Software Infrastructure for Managing the Red Hat OpenShift Platform

The Supplier provides the COMMANDITARY with the administration console and the necessary APIs for operating its Red Hat OpenShift PaaS environments. The Supplier further commits to maintaining these components in optimal operational condition and ensuring their continuous security.

Within the scope of the service provided, the Supplier makes available to the COMMANDITARY all interfaces and APIs of the Red Hat OpenShift platform within the selected tenant. It is the responsibility of the COMMANDITARY to implement appropriate security measures, such as firewalls (firewall), web application firewalls (WAF), and other protective measures, as well as to define the associated filtering rules to secure access to its platform in accordance with its security policy.

The Supplier alerts the COMMANDITARY that abnormal use of its administration console—particularly in cases of API command overload (hammering)—may trigger automatic security measures resulting in the blocking of access to the command APIs or certain services provided by the Supplier. It should be emphasized that this situation does not constitute a service outage but rather a protective action taken to safeguard the Supplier’s infrastructure; therefore, the COMMANDITARY may not consider it an unavailability in its calculations.

Furthermore, the Supplier informs the COMMANDITARY that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITARY submits identical requests at a higher frequency, their rejection must not be interpreted as a service unavailability.

#### Associated Backup Infrastructure

The Provider makes available to the Client an integrated, dedicated, and managed backup platform designed to protect the data of the Client's RedHat OpenShift environments. The Provider ensures the operational readiness and security of this integrated backup platform. Regardless of the number of availability zones subscribed to by the Client, the Provider guarantees that the Client's backup platform will be located outside the availability zone of the workloads being backed up.

The backup service is limited to backing up virtual machines and topology configurations of the IaaS environments of the Client's SecNumCloud tenants. The development and implementation of an appropriate backup policy by the Client depend on the subscription to specific work units. Therefore, it is the Client's responsibility to ensure the availability of the necessary technical resources with the Provider to implement its backup policy or adjust it according to available resources.

The Provider undertakes to notify the Client in case of capacity constraints and to provide advisory support for resource optimization. The Provider's obligations are limited to implementing the backup policy requirements expressed by the Client, within the scope of the subscribed resources.

#### Implementation of Business Continuity or Disaster Recovery Solutions

The Provider supplies the CONTRACTOR with all necessary technical solutions to ensure optimal distribution of its resources across multiple availability zones. It is the CONTRACTOR's responsibility to effectively manage this resource distribution, for which it may utilize the tools provided by the Provider for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider in order to benefit from the associated business continuity or disaster recovery solutions.

## Service Level Agreements and Commitments

The Provider undertakes to ensure continuous monitoring of the performance and security integrity of its platforms and services, ensuring optimal operation.

Service unavailability, as defined by a performance indicator, is acknowledged as soon as it is detected by the Provider's monitoring system, or following notification from a user of the CLIENT. The start of unavailability is set at the earliest of these two events, ensuring accurate and fair calculation of downtime.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thereby ensuring a genuine resumption of operations and an accurate measurement of the interruption duration.

### Platform Availability Commitments for RedHat OpenShift

The Provider undertakes to maintain an availability and performance level compliant with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided that the CLIENT implements its systems across at least two of the availability zones present in the relevant region.

In the event that the CLIENT fails to meet these conditions, the CLIENT will be unable to claim the application of the corresponding SLAs, which are specifically identified by an asterisk (\*). SLA accessibility is provided via the CLIENT interface. **Measurements are calculated on a monthly basis**:

- \*\*SLA 1 (\*) : IC-PAAS_SNC-01\*\* -- RedHat OpenShift platform availability: guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

***Notes***:

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of the attack and protect its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may employ blackholing via the BGP community to block all traffic destined for the targeted IP address upstream with its providers, with the aim of protecting the CLIENT’s resources as well as those of other CLIENTs and the Provider’s infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as using commercially available web application firewalls, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the importance for the CLIENT to minimize open traffic flows, particularly by avoiding exposing administrative ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) to the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## Shared Responsibility Model Applicable

### Responsibility and Obligations of the Service Provider

The Service Provider undertakes to provide the CONTRACTOR with user interfaces in both French and English, thereby facilitating access to and management of the services delivered. In turn, the CONTRACTOR undertakes to comply with all applicable legal and regulatory requirements relating to the data entrusted to the Service Provider for processing.

In the event of data transmission subject to specific legal requirements, the Service Provider will collaborate with the CONTRACTOR to identify and implement the necessary security measures, in accordance with the Service Provider’s obligations and within the scope of the service provision.

The Service Provider further undertakes to review and take into account the specific needs related to the CONTRACTOR’s industry sectors, while respecting the limits of its liability, to ensure an appropriate level of security for the processed information.

If a project is likely to impact the security of the Service provided, or its availability, or result in a loss of functionality, the Service Provider undertakes to inform the CONTRACTOR through the console or by email to the designated CONTRACTOR contact, within a reasonable timeframe, regarding potential impacts, planned corrective actions, and residual risks, ensuring full transparency.

The Service Provider undertakes not to use the CONTRACTOR’s production data for testing purposes, except with the CONTRACTOR’s prior explicit authorization. In such cases, the Service Provider undertakes to anonymize these data and ensure their confidentiality during the anonymization process.

In the event of a change in the subcontractor responsible for hosting, the Service Provider will notify the CONTRACTOR in advance, ensuring that this transition does not negatively affect the delivered service.

Upon request by the CONTRACTOR, the Service Provider will provide access to its internal regulations, code of ethics, applicable sanctions for non-compliance with its security policy, relevant events, service-related procedures, and specific security requirements.

The Service Provider undertakes to inform the CONTRACTOR of any upcoming changes to software components under Cloud Temple’s responsibility, provided that full compatibility cannot be guaranteed.

### Liability Limitation by the Provider

The shared responsibility model effectively limits the Provider's scope of intervention to aspects related to the provision of a functional RedHat OpenShift platform, including:

- Management of the IaaS infrastructure supporting the RedHat OpenShift platform and its provisioning,
- Management of systems necessary for the proper operation of the platform,
- Maintenance of security conditions,
- Updating the RedHat OpenShift platform,
- Backing up essential configuration data of the platform, excluding data and applications of the CLIENT, which remain the CLIENT's responsibility.

This excludes, among others but not limited to:

- Updating operating systems and software installed by the CLIENT on its OpenShift environments within its dedicated spaces,
- Security of programs, software, and applications installed within the OpenShift environment by the CLIENT,
- Application-level data backup,
- Configuration of backup policies.

### Access Restrictions

Within the scope of this service agreement, the Provider is formally prohibited from accessing any assets belonging to the CLIENT without prior authorization. It is the responsibility of the CLIENT to provide the necessary access to the Provider’s personnel, as required by the specific hosting needs and, where applicable, professional support services, if this option has been selected by the CLIENT.

The CLIENT acknowledges that such access is granted exclusively for the purposes related to the provision of the agreed services, thereby ensuring secure and compliant management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider’s service delivery is strictly prohibited. In the event that a specific technical requirement necessitates such access, it may only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining the CLIENT’s written consent.

This measure ensures control and security of the CLIENT’s data, guaranteeing that any exception to the rule is duly authorized and properly documented.

## Data Deletion at Contract End

Upon termination of the contract, whether by expiry or for any other reason, the Provider undertakes to securely erase all data belonging to the CLIENT, including technical data. The Provider will ensure to issue a formal notice to the CLIENT, respecting a notice period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To confirm deletion, the Provider will provide the CLIENT with a certificate verifying the erasure of the data.

## Applicable Law

The governing law for this Service Agreement is French law.

In the event that the Provider, in the course of providing services to the CLIENT, engages a third-party company—including a subcontractor—whose registered office, central administration, or principal establishment is located in a country that is not a member of the European Union, or which is owned or under the control of a third-party company domiciled outside the European Union, the Provider undertakes to ensure that such third party shall have no access to the data processed by the Provider’s service.

It should be noted that the data referred to includes data entrusted to the Provider by the CLIENT, as well as all technical data such as identities of beneficiaries and administrators of the technical infrastructure, data processed by the networks, logs of the technical infrastructure, directories, certificates, access configurations, etc., containing information about the CLIENT.

For clarification, the concept of "control" is defined in accordance with paragraph II of Article L233-3 of the French Commercial Code.