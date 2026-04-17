---
title: Shared Responsibility Model — VM Instances
slug: /contractual/vm-instances/raci
---

# Shared Responsibility Model — VM Instances

This **RACI** model defines the distribution of responsibilities between the customer and Cloud Temple for the **VM Instances** service (shared virtual machines).

> **VM Instances service specifics**  
> Unlike the dedicated IaaS offering, the VM Instances service relies on a **shared and fully managed compute infrastructure by Cloud Temple**. Cloud Temple is responsible for the complete management of the hypervisor, system images, and infrastructure layer. The customer retains full responsibility for everything running inside their instances: guest operating system, applications, data, and application security.

---

## Role Definitions

| Role          | Description                                                                                  |
|---------------|----------------------------------------------------------------------------------------------|
| (R) Responsible | __R__esponsible for performing the process                                                 |
| (A) Accountable | __A__ccountable for the successful completion of the process                               |
| (C) Consulted   | __C__onsulted during the process                                                           |
| (I) Informed    | __I__nformed of the results of the process (via tooling, portal, or messaging)             |

---

## Physical Infrastructure & Hypervisor

Cloud Temple is fully responsible for the infrastructure and hypervisor layer. The customer has no access to this layer.

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure implementation and maintenance of **physical datacenters**                                |          | **RA**       |
| Ensure implementation and maintenance of **shared compute** infrastructure                       | **I**    | **RA**       |
| Ensure implementation and maintenance of **storage** infrastructure                              | **I**    | **RA**       |
| Ensure implementation and maintenance of **backbone network** connectivity                       | **I**    | **RA**       |
| Manage, update, and maintain security of **hypervisors** *(1)*                                   | **I**    | **RA**       |
| Ensure **high availability** of the hypervisor platform                                          | **I**    | **RA**       |
| Manage incidents, problems, and capacity of infrastructure and hypervisor layers                 | **I**    | **RA**       |
| Acquire and maintain **licenses** essential to platform operation                                |          | **RA**       |

*(1) Hypervisors and the virtualization layer are entirely under Cloud Temple's responsibility. The customer has no access to the hypervisor or the underlying management layer.*

---

## Images, Templates & Catalogue

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Build, publish and maintain **official catalogue images** *(2)*                                  | **I**    | **RA**       |
| Apply security patches and updates to **catalogue images**                                       |          | **RA**       |
| Validate compliance and security of published catalogue images                                   |          | **RA**       |
| **Derive** an official catalogue image to create a custom image *(3)*                            | **RA**   | **I**        |
| Ensure compliance, licensing and security of any derived custom image                            | **RA**   |              |
| Maintain and update derived custom images (OS patches, integrated tools)                        | **RA**   |              |

*(2) Official catalogue images (Linux distributions, Windows Server, etc.) are built, maintained, and updated by Cloud Temple. Their initial security level is Cloud Temple's responsibility.*  
*(3) The customer may derive an official catalogue image to create a custom image. From that point on, **full responsibility** for that image belongs to the customer: compliance, licensing, security updates, presence and update of tools, and hardening. Cloud Temple does not maintain derived images.*

---

## Provisioning & Instance Lifecycle

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Create, start, stop, and delete **VM instances**                                                 | **RA**   | **I**        |
| Choose the flavor and starting image for the instance                                            | **RA**   |              |
| Resize an instance (flavor change) *(4)*                                                         | **RA**   | **I**        |
| Manage **metadata and tags** associated with instances                                           | **RA**   |              |
| Manage the **lifecycle** of instances (creation, modification, decommissioning)                  | **RA**   |              |
| Decide to add or reduce resources                                                                | **RA**   |              |

*(4) Resizing may require an instance restart. The availability of the hosted application during this operation is the customer's responsibility.*

---

## Guest Operating System & Tools

The customer has full control and full responsibility for the operating system inside their instances.

:::warning[SLA Validity Condition — Mandatory Tools]
**VM Instances tools** (hypervisor management agents) are **pre-installed by Cloud Temple** when deploying an instance from the catalogue. These agents are essential for platform operation and availability measurement.

**If the customer disables or removes these tools, the SLA is immediately void.** Cloud Temple can no longer guarantee or measure instance availability without these agents. The presence and proper functioning of the tools are the customer's sole responsibility throughout the instance's lifetime.
:::

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| **Pre-install tools** (hypervisor agents, PV drivers) upon deployment from catalogue *(5)*                  |          | **RA**       |
| Ensure **tools remain installed, enabled and up to date** throughout the instance's life *(6)*              | **RA**   |              |
| Apply **security patches and updates** to the guest operating system                                        | **RA**   |              |
| **Harden** the operating system configuration (CIS, ANSSI guidelines, etc.)                                 | **RA**   |              |
| Manage **user accounts, passwords, and SSH keys** inside the instance *(7)*                                 | **RA**   |              |
| Install and configure **monitoring agents** (OS metrics, system logs)                                       | **RA**   |              |
| Maintain **regulatory compliance** applicable to hosted OS and data                                         | **RA**   |              |

*(5) Cloud Temple provides an initial image from the catalogue with pre-installed tools. Responsibility for configuration, hardening, and subsequent OS updates belongs entirely to the customer from the first connection to the instance.*  
*(6) Removal or disabling of tools by the customer immediately suspends the service level commitments (SLA) for the affected instance. Cloud Temple cannot be held responsible for malfunctions related to the absence of these agents.*  
*(7) Access security to the instance (password strength, SSH key management, principle of least privilege) is entirely the customer's responsibility. Cloud Temple cannot be held responsible for a breach resulting from insufficiently secured access configuration.*

---

## Instance Security & Internet Exposure

:::danger[Customer Security Responsibility]
Cloud Temple only ensures **inter-tenant network isolation** at the platform level. Protecting each instance against network threats (Internet, internal flows) is **entirely the customer's responsibility**. An instance connected to the Internet without adequate filtering or with weak credentials exposes the customer to compromise risks for which Cloud Temple cannot be held responsible.
:::

| Activity                                                                                                          | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure **inter-tenant network isolation** at the platform level                                                  |          | **RA**       |
| **Protect Internet-exposed instances** (filtering rules, security groups, firewalls) *(A)*                       | **RA**   |              |
| Ensure no service is exposed to the Internet without an **explicit filtering rule**                              | **RA**   |              |
| Implement and maintain an **application firewall** (WAF, IDS/IPS) if required by criticality level              | **RA**   |              |
| Configure **strong passwords and secure SSH keys** on all instances *(B)*                                        | **RA**   |              |
| Apply the **principle of least privilege** on OS accounts and remote access (SSH, RDP)                           | **RA**   |              |
| Implement a **detection and incident response** solution (EDR, SIEM) if required                                 | **RA**   |              |
| Perform **configuration hardening** of network and OS on instances (disabling unnecessary services)              | **RA**   |              |
| Notify Cloud Temple in case of **suspected compromise** affecting the shared platform                            | **RA**   | **C**        |

*(A) Any instance connected to the Internet via a public IP or NAT rule without adequate filtering is done so solely under the customer's responsibility. Cloud Temple does not inspect or filter tenant outbound or inbound traffic.*  
*(B) The use of weak passwords, compromised SSH keys, or unrestricted root access constitutes a violation of security best practices. Cloud Temple cannot be held responsible for a breach resulting from insufficiently secured access configuration by the customer.*

---

## Applications & Middleware

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Install, configure, and maintain **applications** and **middleware** in instances                 | **RA**   |              |
| Apply **security patches** to applications and middleware                                        | **RA**   |              |
| Acquire and hold **software licenses** for hosted applications                                   | **RA**   |              |
| Implement an **antivirus strategy** on instances                                                 | **RA**   |              |
| Manage **application continuity** (load balancing, replication, clustering)                      | **RA**   |              |

---

## Network & Connectivity

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Maintain the **backbone network** and shared network infrastructure                              | **I**    | **RA**       |
| Configure **network interfaces** of instances                                                    | **RA**   |              |
| Manage the **IP addressing plan** within the tenant                                              | **RA**   | **I**        |
| Configure and manage **security groups** (filtering rules)                                       | **RA**   |              |
| Subscribe to and configure **Internet access** (public IPs, NAT)                                | **RA**   |              |
| Manage incidents on **backbone** network links (Cloud Temple layer)                             | **I**    | **RA**       |

---

## Instance Storage

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Maintain the shared **storage infrastructure** in operational condition                          | **I**    | **RA**       |
| Maintain the storage infrastructure in secure condition                                         | **I**    | **RA**       |
| Create, attach, and manage **additional storage volumes**                                        | **RA**   | **I**        |
| Ensure **data consistency** stored in instances                                                  | **RA**   |              |
| Define and apply a **data encryption policy** inside instances                                   | **RA**   |              |

---

## Backup & Snapshots

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Maintain the **backup infrastructure** in operational condition                                  | **I**    | **RA**       |
| **Activate and configure** the backup policy associated with an instance                        | **RA**   |              |
| **Trigger point-in-time snapshots** of an instance                                              | **RA**   |              |
| Verify **consistency and restorability** of backups performed                                   | **RA**   |              |
| Perform **periodic restoration tests**                                                           | **RA**   |              |
| Manage **storage capacity** dedicated to backups                                                 |          | **RC**       |
| Define the **continuity or recovery strategy** for hosted applications                           | **RA**   |              |

---

## Monitoring & Performance

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Monitor the proper functioning of **physical infrastructure and hypervisors**                    | **I**    | **RA**       |
| Monitor performance of **shared resources** (compute, storage, network)                         | **I**    | **RA**       |
| Monitor **instance performance** (CPU, RAM, disk I/O, network at guest level)                   | **RA**   |              |
| Implement a **metrics and alerting solution** for hosted applications                            | **RA**   |              |

---

## Access & Identity Management

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure accessibility of **Cloud Temple Console** and API                                         |          | **RA**       |
| Manage **entitlements** of Cloud Temple teams to qualified SecNumCloud infrastructure            |          | **RA**       |
| Administer access to **Cloud Temple Console** (users, roles, IAM)                               | **RA**   |              |
| Manage access **within instances** (OS accounts, SSH keys, bastion)                             | **RA**   |              |
| Configure an **external authentication directory** (SSO, LDAP) for the Console                  | **RA**   | **C**        |

---

## Logs

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Retain and provide access to **VM Instances platform logs** *(8)*                               |          | **RA**       |
| Collect, retain, and analyze **system and application logs** from instances                     | **RA**   |              |

*(8) Platform log retention duration is specified in the VM Instances service agreement.*

---

## Documentation & Contractual

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Manage commercial and contractual matters (quotes, orders, billing)                             | **I**    | **RA**       |
| Monitor contractual service delivery (deliveries, billing)                                      | **RA**   | **I**        |
| Maintain and provide access to technical service documentation                                  | **I**    | **RA**       |
| Keep the **CMDB** up to date for instances deployed in the tenant                               | **RA**   |              |
| Keep access policy to Console and API up to date                                                | **RA**   |              |

---

## Reversibility

| Activity                                                                                          | Customer | Cloud Temple |
|---------------------------------------------------------------------------------------------------|----------|--------------|
| Plan the reversibility project and choose target infrastructures                                 | **RA**   | **I**        |
| Export data and instance images via API or provided tools                                        | **RA**   | **I**        |
| Proceed with configuration decommissioning following contract termination                        | **I**    | **RA**       |
| Perform secure data erasure on storage media and provide attestation                             | **I**    | **RA**       |

---

> *Professional services are available if you wish to delegate some or all of the responsibilities listed as the customer's to Cloud Temple. Contact your Cloud Temple account manager.*
