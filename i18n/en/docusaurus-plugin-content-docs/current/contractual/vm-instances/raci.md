---
title: Shared Responsibility Model — VM instances
slug: /contractual/vm-instances/raci
---

# Shared Responsibility Model — VM instances

Here is the **RACI** model defining the allocation of responsibilities between the client and Cloud Temple for the use of the **VM instances** service (shared virtual machines).

> **VM instances offering specifics**  
> Unlike the dedicated IaaS offering, the VM instances service relies on a computing infrastructure that is **shared and fully managed by Cloud Temple**. Cloud Temple handles the complete management of the hypervisor, system images, and the infrastructure layer. The client retains full responsibility for what runs inside their instances: guest operating system, applications, data, and application security.

---

## Role Definitions

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Executes | __E__xecutes the process                                                              |
| (A) Approves | __A__pproves the execution of the process                                             |
| (C) Consulted| __C__onsulted during the process                                                      |
| (I) Informed | __I__nformed of the process results (via tooling, the portal, or messaging)           |

---

## Physical Infrastructure & Hypervisor

Cloud Temple is fully responsible for the infrastructure and hypervisor layers. The client has no access to this layer.

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure the implementation and maintenance of **physical datacenters**                                 |        | **RA**       |
| Ensure the implementation and maintenance of **shared compute infrastructure**                        | **I**  | **RA**       |
| Ensure the implementation and maintenance of **storage infrastructure**                               | **I**  | **RA**       |
| Ensure the implementation and maintenance of **backbone network connectivity**                        | **I**  | **RA**       |
| Manage, update, and maintain in a secure state the **hypervisors** *(1)*                              | **I**  | **RA**       |
| Ensure **high availability** of the hypervisor platform                                               | **I**  | **RA**       |
| Manage incidents, issues, and capacity for the infrastructure and hypervisor layers                   | **I**  | **RA**       |
| Acquire and maintain the **licenses** essential for platform operation                                |        | **RA**       |

*(1) Hypervisors and the virtualization layer are entirely under the responsibility of Cloud Temple. The client has no access to the hypervisor or the underlying management layer.*

---

## Images, templates & catalog

| Activity                                                                                                       | Client | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|--------|--------------|
| Build, publish, and maintain the **official images** of the catalog *(2)*                                | **I**  | **RA**       |
| Apply security patches and updates to the **catalog images**                      |        | **RA**       |
| Validate the compliance and security of images published in the catalog                                    |        | **RA**       |
| **Derive** an official catalog image to create a custom image *(3)*                        | **RA** | **I**        |
| Ensure compliance, licenses, and security of any derived custom image               | **RA** |              |
| Maintain and update derived custom images (OS patches, built-in tools)                | **RA** |              |

*(2) The official catalog images (Linux distributions, Windows Server, etc.) are built, maintained, and updated by Cloud Temple. Their initial security level is the responsibility of Cloud Temple.*  
*(3) The client can derive an official catalog image to create a custom image. From that point on, **full responsibility** for this image lies with them: compliance, licenses, security updates, presence and updating of tools, and hardening. Cloud Temple does not support the maintenance of these derived images.*

---

## Instance Provisioning & Lifecycle

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Create, start, stop, and delete **VM instances**                                            | **RA** | **I**        |
| Choose the instance flavor and base image                                        | **RA** |              |
| Resize an instance (flavor change) *(4)*                                             | **RA** | **I**        |
| Manage **metadata and tags** associated with instances                                               | **RA** |              |
| Manage the **lifecycle** of instances (creation, modification, decommissioning)                   | **RA** |              |
| Make the decision to add or reduce resources.                              | **RA** |            |

*(4) Resizing may require an instance restart. The availability of the hosted application during this operation is the client's responsibility.

---

## Guest Operating System (Guest OS) & tools

The client has full control and full responsibility for the operating system inside their instances.

:::warning[SLA Validity Condition — Required Tools]
The **VM instance tools** (hypervisor management agents) are **pre-installed by Cloud Temple** when deploying the instance from the catalog. These agents are essential for the proper functioning of the platform and for measuring availability.

**If the client disables or removes these tools, the SLA is immediately void.** Cloud Temple can no longer guarantee or measure the instance's availability without these agents. The presence and proper functioning of the tools are under the client's sole responsibility during operation.
:::

| Activity                                                                                                        | Client | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Pre-install the tools** (hypervisor agents, PV drivers) during deployment from the catalog *(5)*     |        | **RA**       |
| Ensure that the **tools remain installed, enabled, and up-to-date** throughout the instance's lifecycle *(6)*       | **RA** |              |
| Apply **security patches and updates** to the guest operating system                      | **RA** |              |
| **Harden** the operating system configuration (CIS, ANSSI recommendations, etc.)                       | **RA** |              |
| Manage **user accounts, passwords, and SSH keys** inside the instance *(7)*                | **RA** |              |
| Install and configure **monitoring agents** (OS metrics, system logs)                              | **RA** |              |
| Maintain **regulatory compliance** applicable to OS and hosted data                            | **RA** |              |

*(5) Cloud Temple provides an initial image at catalog release state with tools pre-installed. The responsibility for configuration, hardening, and subsequent operating system updates rests entirely with the client from the first connection to the instance.*  
*(6) The removal or disabling of tools by the client results in the immediate suspension of service level commitments (SLA) for the affected instance. Cloud Temple cannot be held responsible for malfunctions related to the absence of these agents.*  
*(7) The security of access to the instance (password strength, SSH key management, principle of least privilege) is under the client's sole responsibility. Cloud Temple cannot be held responsible for a compromise resulting from an insufficiently secure access configuration.*

---

## Instance Security & Internet Exposure

:::danger[Customer Security Responsibility]
Cloud Temple only ensures **inter-tenant isolation** at the platform level. The protection of each instance against network threats (Internet, internal traffic) is **entirely the customer's responsibility**. An instance connected to the Internet without adequate filtering or with weak credentials exposes the customer to compromise risks for which Cloud Temple cannot be held liable.
:::

| Activity                                                                                                              | Customer | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure **inter-tenant network isolation** at the platform level                                                      |          | **RA**       |
| **Protect instances exposed to the Internet** (filtering rules, security groups, firewalls) *(A)*                     | **RA**   |              |
| Ensure no service is exposed to the Internet without an **explicit filtering rule**                                  | **RA**   |              |
| Implement and maintain an **application firewall** (WAF, IDS/IPS) if required by the criticality level                | **RA**   |              |
| Configure **strong passwords and secure SSH keys** on all instances *(B)*                                             | **RA**   |              |
| Apply the **principle of least privilege** to OS accounts and remote access (SSH, RDP)                               | **RA**   |              |
| Implement an **incident detection and response** solution (EDR, SIEM) if required                                    | **RA**   |              |
| Perform **configuration hardening** for instance network and OS (disabling unnecessary services)                      | **RA**   |              |
| Notify Cloud Temple in case of **suspected compromise** affecting the shared platform                                | **RA**   | **C**        |

*(A) Any instance connected to the Internet via a public IP or NAT rule without adequate filtering is the sole responsibility of the customer. Cloud Temple does not inspect or filter tenant inbound or outbound traffic.*  
*(B) The use of weak passwords, compromised SSH keys, or unrestricted root access constitutes a breach of security best practices. Cloud Temple cannot be held liable for a compromise resulting from insufficiently secure access configuration by the customer.*

---

## Applications & Middleware

| Activity | Client | Cloud Temple |
|---|---|---|
| Install, configure, and maintain **applications** and **middleware** in instances | **RA** | |
| Apply **security patches** for applications and middleware | **RA** | |
| Acquire and hold **software licenses** for hosted applications | **RA** | |
| Implement an **antivirus strategy** on instances | **RA** | |
| Manage **application continuity** (load balancing, réplication, clustering) | **RA** | |

## Network & Connectivity

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Maintain the **backbone network** and shared network infrastructure                                    | **I**  | **RA**       |
| Configure the **network interfaces** of instances                                                      | **RA** |              |
| Manage the **IP addressing plan** within the tenant                                                    | **RA** | **I**        |
| Configure and manage **security groups** (security groups / filtering rules) *(6)*                     | **RA** |              |
| Subscribe to and configure **Internet access** (public IPs, NAT)                                       | **RA** |              |
| Manage incidents on **backbone** network links (Cloud Temple layer)                                    | **I**  | **RA**       |

*(6) The configuration of network filtering rules applicable to instances is the responsibility of the client. Cloud Temple ensures only inter-tenant isolation at the platform level.*

---

## Instance Storage

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure the operational availability of the shared **storage infrastructure**                           | **I**  | **RA**       |
| Ensure the security readiness of the storage infrastructure                                            | **I**  | **RA**       |
| Create, attach, and manage **additional storage volumes**                                              | **RA** | **I**        |
| Ensure **data consistency** of data stored in instances                                                | **RA** |              |
| Define and apply a **data encryption policy** within instances *(7)*                                   | **RA** |              |

*(7) Encryption at rest for the underlying storage infrastructure is provided by Cloud Temple. Application-level data encryption (at the file system or database level) is the client's responsibility.*

---

## Backup & Snapshots

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure the operational readiness of the **backup infrastructure**                                      | **I**  | **RA**       |
| **Enable and configure** the backup policy associated with an instance                                 | **RA** |              |
| **Trigger manual snapshots** of an instance                                                            | **RA** |              |
| Verify the **consistency and restorability** of performed backups                                      | **RA** |              |
| Perform periodic **restoration tests**                                                                 | **RA** |              |
| Manage **storage capacity** dedicated to backups                                                       |        | **RC**       |
| Define the **business continuity or disaster recovery strategy** for hosted applications               | **RA** |              |

---

## Monitoring & Performance

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Monitor the proper functioning of the **physical infrastructure and hypervisors**                      | **I**  | **RA**       |
| Monitor the **performance of shared resources** (compute, storage, network)                            | **I**  | **RA**       |
| Monitor **instance performance** (CPU, RAM, disk I/O, guest-level network)                             | **RA** |              |
| Implement a **metrics and alerting** solution for hosted applications                                  | **RA** |              |

---

## Access & Identity Management

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure accessibility of the **Cloud Temple Console** and the API                                       |        | **RA**       |
| Manage **permissions** for Cloud Temple teams accessing the SecNumCloud-qualified infrastructure       |        | **RA**       |
| Administer access to the **Cloud Temple Console** (utilisateurs, rôles, IAM)                           | **RA** |              |
| Manage access **within instances** (comptes OS, clés SSH, bastion)                                     | **RA** |              |
| Configure an **external authentication repository** (SSO, LDAP) for the Console                        | **RA** | **C**        |

---

## Logs

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Retain and make available **platform logs** for VM instances *(8)*                                     |        | **RA**       |
| Collect, retain, and analyze **system and application logs** for instances                             | **RA** |              |

*(8) The retention period for platform logs is specified in the VM instances service agreement.*

---

## Documentation & Contractual

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure commercial and contractual management (quotes, orders, invoicing)                               | **I**  | **RA**       |
| Ensure contractual tracking of the service (deliveries, invoicing)                                     | **RA** | **I**        |
| Ensure maintenance and availability of the service technical documentation                             | **I**  | **RA**       |
| Keep the **CMDB** up to date for instances deployed in its tenant                                      | **RA** |              |
| Keep the Console and API access policy up to date                                                      | **RA** |              |

---

## Reversibility

| Activity                                                                                               | Client | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|--------|--------------|
| Plan the reversibility project and select target infrastructures                                       | **RA** | **I**        |
| Export data and instance images via the API or provided tools                                          | **RA** | **I**        |
| Proceed with decommissioning configurations following contract termination                             | **I**  | **RA**       |
| Perform secure data erasure on storage media and provide an attestation                                | **I**  | **RA**       |

---

> *Professional services are available if you wish to delegate all or part of the responsibilities listed as being the client's responsibility. Contact your Cloud Temple sales representative.*