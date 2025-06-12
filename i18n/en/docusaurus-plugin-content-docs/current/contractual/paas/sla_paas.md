---
title: SecNumCloud PaaS Service Agreement
---

**Table of Contents**

-   [1. Framework](#X09af6387e1d2792b8edc09fc15abd136a837db5)
-   [2. Acronyms](#Xc79d173393c04b42ba8cdf223cca3c0202f4dee)
-   [3. Glossary](#X0c9d1d82fdc5fcc3d01a320dd2dd3715a6900b4)
-   [4. Purpose of the Provider's PaaS Service
    Agreement](#X23ec3c3767539f9e69acc7cbf5af8aa8c1b6ad7)
-   [5. Evolution of the PaaS Service
    Agreement](#Xa7161677dcf9a35d02c20807040326b39d55881)
-   [6. Audit](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Service
    Description](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
-   [8. Service
    Implementation](#Xc98fb6da582d483e300add6a80df6e3eb76498a)
    -   [8.1. Description of Technical
        Components](#Xa61c340e3fdf14082cef411d3a913fc4bdeeb4c)
        -   [8.1.1. REDHAT OpenShift Service
            Platform](#Xf81d22ed0abca8eab163c160107fa228901d82c)
        -   [8.1.2. Management Software Infrastructure of the Redhat
            Openshift Platform](#Xf11ec2e6a431ae11852fe3129245b4d0fd0747b)
        -   [8.1.3. Associated Backup
            Infrastructure](#X77b1112fa2c2a53eb0cf09b416962164b77b437)
        -   [8.1.4. Implementation of Disaster Recovery or Business
            Continuity
            Solutions](#Xae1394210f1c9bee4293a93160d2d11cc70ebdd)
-   [9. Commitments and Service
    Levels](#Xad2b4ae071a52a99b502c4e84cbba3f15ac78f8)
    -   [9.1. Availability Commitments of the RedHat OpenShift
        Platform](#X273341276df81e9f6fad2000ac84216560e59fa)
-   [10. Applicable Shared Responsibility
    Model](#Xa90d4e180ca2ae1d92e4e4cf00f20aca5061eac)
    -   [10.1. Provider's Responsibilities and
        Obligations](#Xe5cf73850ea2189ab60f41560bf52e97d3019f9)
    -   [10.2. Limitation of the Provider's
        Liability](#X8856c8f606130116944398b24484722823c023c)
    -   [10.3. Access
        Limitation](#X902763258f1242326933ce46892d3f549e73e30)
-   [11. Data Deletion at End of
    Contract](#Xbe642a80027ce4ad88cc932e98b8661c2a0d3a6)
-   [12. Applicable Law](#Xa219184d62eb90dfeec612801fd05c5d816c331)

## 1. Framework

  --------------------- -------------------------------------------------
  Reference             CT.AM.JUR.ANX.PAAS 2.1

  Date                  January 21, 2025
  --------------------- -------------------------------------------------

## 2. Acronyms

  ------------------------------------------------------------------------------
  Acronym      Description
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Change Advisory Committee

  CMDB          Configuration Management Database -- Configuration Management
                Database

  COPIL         Steering Committee

  COSTRAT       Strategic Committee

  DB            Database

  DRP           Disaster Recovery Plan

  GTI           Intervention Time Guarantee

  GTR           Resolution Time Guarantee

  GTE           Escalation Time Guarantee

  HYPERVISEUR   Operating system enabling the execution of VMs on a compute blade

  ITIL          Information Technology Infrastructure Library -- Best practices
                for information systems management

  IAAS          Infrastructure as a Service

  MCO           Operational Readiness Maintenance

  MOA           Project Owner

  MOE           Project Manager

  OS            Operating system

  PAQ           Quality Assurance Plan

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change

  RGPD          General Data Protection Regulation

  RPO           Recovery Point Objective -- Data freshness in case of disaster

  RTO           Recovery Time Objective -- Service restoration time in case of
                disaster

  SLA           Service Level Agreement

  UO            Work Unit

  VABF          Functionality Readiness Validation

  VABE          Operability Readiness Validation

  VM            Virtual Machine

  VSR           Regular Service Validation

  SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glossary

The terms used in this document shall be interpreted in accordance with
the definitions provided below:

  --------------------------------------------------------------------------------------------
  Term                             Definition
  -------------------------------- -----------------------------------------------------------
  "Secure Temple"                  Refers to the SecNumCloud qualified IaaS service, offered
                                   by Cloud Temple, as defined in the certificate available
                                   on the ANSSI website and provided in the appendix of this
                                   Service Agreement.

  Region                           A "region" in the context of cloud computing refers to a
                                   geographically bounded set of cloud availability
                                   zones, providing network, computing, and storage services
                                   to optimize latency, performance, and local regulatory
                                   compliance.

  Availability Zone (AZ)           A specific and isolated section of the cloud computing
                                   infrastructure designed to ensure high availability and
                                   resilience of services through a geographical distribution
                                   of resources.

  Tenant                           An isolated instance reserved for a user or group of users,
                                   sharing a common infrastructure while maintaining data and
                                   application independence and security.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Term             Definition
  --------------- ---------------------------------------------------------
  Incident         An "incident" refers to any unexpected event that
                   disrupts the normal functioning of a system or
                   compromises data security.

  Problem          A "problem" is the root cause of one or more incidents,
                   identified or suspected, requiring analysis and
                   resolution to prevent recurrence.

  Change           A "change" refers to any addition, modification, or
                   deletion impacting the Service, which has been
                   authorized, planned, or undertaken.

  Standard Change  A "standard change" is a change subject to a procedure
                   whose implementation modalities and impacts (including
                   financial) are known and accepted in advance by both
                   Parties. It is then incorporated into the standard
                   changes catalog, and may have a GTI and a GTR as
                   applicable.

  Deployment       Administration action(s) for implementing the change
                   when it is approved (the change, in the ITIL sense,
                   concerns only change management and not its
                   implementation).

  Service Request  Evolution request subject to a procedure, whose
                   implementation: i) does not modify the CMDB, ii) its
                   operating mode, costs, and risks are known and accepted
                   in advance and do not require specific rollback
                   procedures iii) its implementation is subject to a
                   service level agreement and included in the contract fee
                   when performed during business hours and business days.

  Configuration    A "configuration item" is an identifiable component of
  Item             the information system, such as software, hardware, or
                   document, subject to management within the IT services
                   management framework.

  Service          A "service" refers to the SecNumCloud qualified service,
                   delivered to the SPONSOR by the Provider, as described in
                   the "Service Description" section of this Service
                   Agreement.

  Event            An "event" is any detectable or identifiable occurrence
                   that may have importance for Service management.

  Disaster         A "disaster" refers to a serious event of natural or
                   man-made origin, accidental or intentional, causing
                   significant loss and damage to the affected Party.

  Service          This document, established within a specific contract
  Agreement        or the General Terms of Sale and Use (GTCU), in accordance
                   with the requirements of the SecNumCloud Reference
                   Framework.

  Availability     Ability to ensure the availability and maintenance of
                   optimal service performance, in accordance with the
                   defined criteria and commitments in the Service Level

                  Service Level Agreement (SLA)

  Supervision     Monitoring an Information System or a Service,
                  involving the collection of various data such as
                  measurements and alarms. This activity is limited to
                  observation and tracking, without directly intervening
                  on the monitored elements, which is a prerogative that
                  belongs to Administration operations.
  -------------------------------------------------------------------------

## 4. Purpose of the Provider's PaaS service agreement

This Service Agreement establishes the terms and conditions under which
the Provider commits to delivering to the CLIENT an infrastructure that
meets the specifications of the "Platform as a Service -- PaaS" offer,
duly qualified as SecNumCloud.

Purpose of the Service Agreement:

1.  Specify the performance requirements expected by the CLIENT in terms
    of the functionality and reliability of the infrastructure.
2.  State the Provider's obligations to meet the agreed service levels.
3.  Identify the regulatory standards specifically applicable to the
    proposed infrastructure.
4.  Ensure uniformity and integrity in assessing the quality of services
    rendered.
5.  Guarantee the excellence of provided services, evaluated using
    quantitative performance indicators.

It is stipulated that if the Provider loses its SecNumCloud qualification,
this Agreement may be terminated automatically, without penalties, by the
CLIENT. In such a scenario, the Provider commits to informing the CLIENT of
this disqualification by sending an official notification through registered
letter with acknowledgment of receipt.

It should be noted that a modification or adjustment of the SecNumCloud
qualification will not be interpreted as a revocation of the initial qualification.

## 5. Evolution of the PaaS service agreement

Changes or additions to this service agreement result exclusively from requests
made by the governance bodies designated for this purpose. These change
proposals will be reviewed within the strategic committee, the only body
authorized to determine the aspects requiring formalization in writing.

It is agreed that any evolution of the agreement, after validation,
that alters the initially established financial conditions, will require
the establishment and signing of an addendum to the current contract.

Factors that could lead to a revision of this agreement include, but
are not limited to:

-   Adaptation of the PaaS platform orchestrated by the Provider.
-   Adjustments made to services deployed by the Provider.
-   Variations in commitments made and applicable penalties.
-   Organizational reconfigurations within the CLIENT or the Provider.
-   Expansion or reduction of the scope of services subscribed by the CLIENT.

Version and revision management of the agreement is recorded in the preamble
of the document for easier tracking.

## 6. Audit

The Provider commits to allowing the CLIENT, or any third-party auditor nominated
by the latter, to review all necessary documents to certify full compliance with
the obligations related to the conformity with Article 28 of the General Data
Protection Regulation (GDPR), thus facilitating audits.

**The Provider specifically commits to making available to the CLIENT the list
of all third parties who may access the data and informing of any changes in subcontractors.**

By accepting this service agreement, the CLIENT explicitly authorizes:

1.  **The National Agency for Information System Security (ANSSI)** as well as
    the competent qualification entity to verify the compliance of the Service
    and its Information System with the standards defined by the SecNumCloud
    Reference Document.
2.  **An information system security audit provider**, duly qualified and explicitly
    designated by the Provider, to carry out security audits on the Service delivered
    by the Provider.

## 7. Service description

The services offered by the Provider are characterized by the provision of the following
benefits, which align with the principle of shared responsibility detailed in the standards
established by the SecNumCloud reference document:

-   Provisioning of a Redhat Openshift container management platform managed by the Provider.

It is understood that the Provider will leverage its expertise to perform the Services according
to the best professional practices, in accordance with their Specifications, and complying with
the standards of its ISO/IEC 27001 certification as well as the guidelines of the SecNumCloud
Reference Document.

## 8. Service implementation

It is specified that all operations and physical components involved in the provision of the
qualified service, which is the subject of this agreement, are located within the European Union.
This includes notably support, operational monitoring, and security monitoring (SOC).

### 8.1. Description of technical components

PaaS services (Platform as a Service) encompass all components and services required for optimal
operation in compliance with the SecNumCloud qualification.

In this regard, their performance and reliability are intrinsically linked to the technical components
and services of the Provider's **IaaS infrastructure**, as specified in the document [IaaS Service Agreement](../iaas/sla_iaas.md) of the Provider.

#### 8.1.1. REDHAT OpenShift service platform

The service includes the provisioning within a region, across 3 availability zones,

#### 8.1.2. Control software infrastructure for the Redhat Openshift platform

The Provider supplies the CLIENT with the administration console and the API necessary for operating
its RedHat OpenShift PaaS environments. The Provider also commits to maintaining them in optimal
operational condition and continuously ensuring their security.

Specifically, the Provider makes available to the CLIENT all interfaces and APIs of the RedHat OpenShift
platform within the selected tenant. It is up to the CLIENT to establish appropriate security measures,
such as firewalls, Web Application Firewalls (WAF), and other protective measures, as well as define
associated filtering rules to secure access to its platform in accordance with its security policy.

The Provider alerts the CLIENT that abnormal use of its administration console, especially in case of API
command overload (hammering), may trigger automatic security measures resulting in blocked access to command
APIs or certain Provider services. It is emphasized that this situation does not constitute a service unavailability
but an action to protect the Provider's Infrastructure; consequently, the CLIENT cannot consider it as unavailability
in its calculations.

Furthermore, the Provider informs the CLIENT that perfectly identical requests (duplicates) sent to its APIs are
limited to one per second (Throttling). If the CLIENT submits identical requests at a higher frequency, their
rejection should not be interpreted as a service unavailability.

#### 8.1.3. Associated backup infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup platform for protecting the
data of its RedHat Openshift environments. The Provider ensures the operational and security maintenance of this
integrated backup platform. Regardless of the number of availability zones subscribed by the CLIENT, the Provider
guarantees that the CLIENT's backup platform will be located outside the availability zone of the workload backups.

The backup service is limited to the backup of virtual machines and topology configurations of the CLIENT's SecNumCloud
IaaS tenant environments. The creation and implementation of an adequate backup policy by the CLIENT depend on the
subscription to specific work units. Therefore, it falls on the CLIENT to ensure the availability of the necessary
technical resources with the Provider to implement its backup policy or adjust it based on available resources.

The Provider commits to notifying the CLIENT in case of capacity constraints and providing advisory assistance for
resource optimization. The Provider's obligations will be limited to implementing the CLIENT's expressed needs in terms
of backup policy, within the subscribed resources' framework.

#### 8.1.4. Implementation of disaster recovery or business continuity solutions

The Provider offers the CLIENT all necessary technical solutions to ensure an optimal distribution of its resources
across various availability zones. The responsibility falls on the CLIENT to efficiently manage this resource distribution,
for which it may utilize the tools provided by the Provider.
du Provider available for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider in order to benefit from associated disaster recovery or business continuity solutions.

## 9. Commitments and Service Levels

The Provider commits to ensuring continuous monitoring of the performance and security integrity of its platforms and services, ensuring their optimal operation.

The unavailability of a service, subject to a performance indicator, is recognized as soon as it is identified by the Provider's monitoring system, or following a notification by a user of the CLIENT. The start of the unavailability is set at the earliest time between these two events, to ensure an accurate and fair count of the downtime.

The end of the unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and an accurate measure of the downtime.

### 9.1. RedHat OpenShift Platform Availability Commitments

The Provider commits to maintaining a level of availability and performance in line with the standards defined for each specified period. The service level agreements (SLAs) apply provided that the CLIENT implements its systems across at least two of the availability zones present in the concerned region.

If the CLIENT does not comply with these conditions, it will be unable to claim the application of the relevant SLAs, which are specifically identified by an asterisk (*). Access to SLAs is through the CLIENT interface. **The measures are calculated monthly**:

-   **SLA 1 (*) : IC-PAAS_SNC-01** -- Availability of the RedHat OpenShift platform: guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

***Remarks***:

-   *In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of this attack and safeguard its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may use the blackholing technique via the BGP community to block all traffic to the targeted IP address upstream with its providers, in order to protect the CLIENT's resources as well as those of other CLIENTs and the Provider's infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as the use of available web application firewall software, and to carefully configure its security groups via the command API.*

-   *The Provider stresses the necessity for the CLIENT to minimize open flows, by avoiding making **SSH** administration ports (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## 10. Applicable Shared Responsibility Model

### 10.1. Responsibilities and Obligations of the Provider

The Provider commits to providing the CLIENT with user interfaces in both French and English, thus facilitating access to and management of the provided services. For its part, the CLIENT commits to complying with the legal and regulatory constraints in force concerning the data it entrusts to the Provider for processing.

In case of transmitting data subject to specific legal requirements, the Provider will collaborate with the CLIENT to identify and implement the necessary security measures, in accordance with the Provider's obligations and within the framework of the provided services.

The Provider also commits to examining and considering the specific needs related to the CLIENT's business sectors, within the limits of its responsibility, to ensure an appropriate level of security for the processed information.

If a project is likely to impact the security of the offered Service or the availability of said Service or to cause a loss of functionality, the Provider commits to informing the CLIENT through the console or by email and within a reasonable timeframe of the potential impacts, the envisaged corrective measures, and the residual risks that concern it, ensuring total transparency.

The Provider commits to not using the CLIENT's production data for testing, except with prior explicit authorization from the CLIENT, in which case the Provider commits to anonymize this data and ensure its confidentiality during anonymization.

In case of a change of subcontractor for hosting, the Provider will inform the CLIENT in advance, ensuring that this transition does not negatively affect the provided service.

At the CLIENT's request, the Provider will provide access to its internal regulations, its code of ethics, the sanctions applicable in case of non-compliance with its security policy, the events concerning it, the service-related procedures, and specific security requirements.

The Provider commits to informing the CLIENT of any upcoming changes regarding software elements under Cloud Temple's responsibility as soon as complete compatibility cannot be ensured.

### 10.2. Limitation of the Provider's Liability

The shared responsibility structure effectively reduces the scope of the Provider's intervention to aspects related to providing a functional RedHat OpenShift platform, including:

- The management of the IaaS infrastructure that supports the RedHat OpenShift platform and its provisioning,
- The management of systems necessary for the proper functioning of the platform,
- Maintaining security conditions,
- Updating the RedHat OpenShift platform,
- Backing up essential configuration data for this platform, except for the CLIENT's data and applications which remain their responsibility.

It specifically excludes, but is not limited to:

- Updating operating systems and software installed by the CLIENT on its OpenShift environments in its rental spaces,
- The security of programs, software, and applications installed in the OpenShift environment by the CLIENT,
- Backing up data at the application level,
- Configuring backup policies.

### 10.3. Access Limitation

Under this service agreement, the Provider is formally prohibited from accessing the CLIENT's tenants without prior authorization. It is the CLIENT's responsibility to provide the necessary access to the Provider's staff, according to the specific needs of hosting and, where applicable, professional support services if this option has been chosen by the CLIENT.

The CLIENT acknowledges that these accesses are granted exclusively for needs related to the agreed service provision, thus ensuring secure management in accordance with the terms of the agreement.

Third-party remote access involved in the Provider's service provision is strictly prohibited. In the event that a specific technical requirement necessitates such access, it can only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining written consent.

This measure ensures the CLIENT's data control and security, ensuring that any exception to the rule is duly authorized and documented.

## 11. Data Erasure at Contract End

At the end of the contract, whether it expires or is terminated for any reason, the Provider commits to securely erasing all the CLIENT's data, including technical data. The Provider will ensure to communicate a formal notice to the CLIENT, respecting a notice period of twenty-one (21) calendar days. The CLIENT's data will then be deleted within a maximum period of thirty (30) days following this notification.

To attest to this deletion, the Provider will provide the CLIENT with a certificate confirming the data erasure.

## 12. Applicable Law

The applicable law for this service agreement is French law.

In the event that the Provider, in the context of services provided to the CLIENT, resorts to a third-party company, including a subcontractor, headquartered, with central administration, or principal establishment located in a non-European Union state, or owned or controlled by a third-party domiciled outside the European Union, the Provider commits to guaranteeing that the said third-party company will have no access to the data processed by the Provider's service.

It should be noted that the targeted data includes those entrusted to the Provider by the CLIENT, as well as all technical data such as the identities of the beneficiaries and of the
administrators of the technical infrastructure, the data handled
by the networks, the logs of the technical infrastructure,
the directory, the certificates, the configuration of access, etc.,
containing information about the SPONSOR.

For clarification, the notion of control is defined in accordance with II of
Article L233-3 of the Commercial Code.
