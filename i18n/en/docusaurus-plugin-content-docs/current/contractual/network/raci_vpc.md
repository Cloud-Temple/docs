---
title: Shared Responsibility Model — VPC
slug: /contractual/network/raci-vpc
---

# Shared Responsibility Model — VPC (Virtual Private Cloud)

Here is the **RACI** model defining the allocation of responsibilities between the client and Cloud Temple for the use of the **VPC (Virtual Private Cloud)** service.

> **VPC Offering Specifics**  
> The VPC is a network service **fully managed by Cloud Temple**, providing a cloud-native experience: automatic routing, built-in high availability, and native IPAM/DHCP management. Cloud Temple guarantees the operation and availability of the underlying network infrastructure (VPC routers, inter-AZ backbone, external gateway). The client is responsible for the design, configuration, and security of their network space: subnets, addressing, filtering policies, and interconnections.

---

## Role Definitions

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Executes | __E__xecutes the process                                                              |
| (A) Approves | __A__pproves the execution of the process                                             |
| (C) Consulted| __C__onsulted during the process                                                      |
| (I) Informed | __I__nformed of the process results (via tooling, the portal, or messaging)           |

---

## Physical network infrastructure & backbone

Cloud Temple is fully responsible for the physical infrastructure and network backbone on which the VPC relies.

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure the implementation and maintenance of **physical network infrastructures** (switches, backbone routers) |        | **RA**       |
| Ensure **inter-datacenter / inter-AZ** connectivity for the Cloud Temple backbone                            | **I**  | **RA**       |
| Ensure operational maintenance of the Cloud Temple **network backbone**                                     | **I**  | **RA**       |
| Ensure security maintenance of the Cloud Temple **network backbone**                                        | **I**  | **RA**       |
| Manage network backbone incidents, issues, and capacity                                                     | **I**  | **RA**       |
| Acquire and maintain licenses essential for network infrastructure operation                                |        | **RA**       |

---

## VPC Infrastructure (router, gateway & IPAM)

Cloud Temple ensures the operation of the core VPC components. The client configures its network space within this infrastructure.

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure the operational readiness of the **VPC router** *(1)*                                               | **I**  | **RA**       |
| Ensure **high availability** of the VPC router                                                              | **I**  | **RA**       |
| Ensure the operational readiness of the **External Gateway** *(1)*                                         | **I**  | **RA**       |
| Ensure **high availability** of the External Gateway                                                        | **I**  | **RA**       |
| Ensure the operation of the underlying **IPAM & DHCP** service                                              | **I**  | **RA**       |
| Manage incidents and issues on core VPC components                                                        | **I**  | **RA**       |
| Update and maintain security compliance of core VPC components                                             | **I**  | **RA**       |

*(1) The VPC router and the External Gateway are fully managed components by Cloud Temple. Their availability is guaranteed by Cloud Temple as part of the VPC service SLA.*

---

## VPC Provisioning & Configuration

The client is responsible for creating and configuring their VPC as well as the network resources that compose it.

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Create, modify, and delete a **VPC**                                                                        | **RA** | **I**        |
| Define the VPC network architecture (number of subnets, topology)                                           | **RA** |              |
| Create, modify, and delete **private networks (Private Networks / VLANs)** in the VPC                       | **RA** | **I**        |
| Define the **IP addressing plan** (CIDR ranges) for private networks                                        | **RA** | **I**        |
| Configure **DHCP pools** (dynamic ranges, DNS, gateway)                                                     | **RA** | **C**        |
| Enable and configure the **External Gateway** (Internet access, NAT, DNAT) *(2)*                            | **RA** | **C**        |
| Manage **static routes** within the VPC                                                                     | **RA** |              |

*(2) Enabling the External Gateway opens Internet access for the VPC. The client is responsible for the associated filtering rules and traffic control.*

---

## Public IPs & Internet Exposure

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Allocate the **public IP pool** available on the platform                                          | **I**  | **RA**       |
| Order and associate **public IPs (floating IPs)** with its VPC                                     | **RA** | **I**        |
| Configure **NAT / DNAT** rules for service exposure                                          | **RA** |              |
| Manage the lifecycle of public IPs (association, release, relocation)                              | **RA** | **I**        |
| Ensure that services exposed to the Internet comply with applicable security policies           | **RA** |              |

---

## Network Security

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure **inter-tenant network isolation** at the platform level *(3)*                                      |        | **RA**       |
| Define and configure **micro-segmentation policies** (security groups) *(4)*                               | **RA** |              |
| Implement **traffic filtering** for inbound/outbound (application firewall, IDS/IPS) *(5)*                 | **RA** |              |
| Manage **TLS certificates** and SSL termination for exposed services                                       | **RA** |              |
| Conduct **penetration tests** on resources hosted in the VPC *(6)*                                         | **RA** | **C**        |
| Monitor **anomalous behavior** on tenant network traffic                                                   | **RA** |              |

*(3) Cloud Temple guarantees strict isolation between VPCs belonging to different tenants. No traffic can cross this barrier without explicit action from the client.*  
*(4) Micro-segmentation (security groups) will be available in S1 2026. Filtering policies applicable prior to this availability must be implemented by the client using dedicated security equipment.*  
*(5) Application-level traffic filtering within the VPC is the client's responsibility. Cloud Temple does not perform content inspection of tenant traffic.*  
*(6) Penetration tests must be declared in advance to Cloud Temple, in accordance with the terms of service.*

---

## Interconnection with external networks

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Define the **interconnection** strategy with on-premise environments or other clouds                      | **RA** | **C**        |
| Subscribe to and configure **site-to-site VPN** access *(available H2 2026)*                                | **RA** | **C**        |
| Subscribe to and configure **Cloud Connect** access (dedicated link) *(available H2 2026)*                     | **RA** | **C**        |
| Manage **BGP / routes** associated with operator interconnections                                          | **RA** | **CI**       |
| Ensure **traffic security** across interconnections                                         | **RA** |              |

---

## Connecting resources to the VPC

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Attach **VM instances** to a VPC private network                                                            | **RA** | **I**        |
| Attach **IaaS resources** (VMware VMs, OpenIaaS) to VPC private networks                                    | **RA** | **C**        |
| Configure the **network interfaces** of resources connected to the VPC                                      | **RA** |              |
| Ensure that connected resources apply **consistent network configurations** (gateway, DNS)                  | **RA** |              |

---

## Network Monitoring & Observability

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Monitor the operation of **core VPC components** (router, gateway)                                         | **I**  | **RA**       |
| Monitor the **performance of the Cloud Temple network backbone**                                            | **I**  | **RA**       |
| Collect and analyze VPC **network flow logs** (flow logs) *(available H1 2026)*                            | **RA** | **I**        |
| Implement **application flow monitoring** within the VPC                                                    | **RA** |              |
| Monitor the **latency and bandwidth** of traffic within the VPC                                             | **RA** | **I**        |

---

## Change & Capacity Management

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Make the decision to add, modify, or remove network resources in the VPC                                    | **RA** | **CI**       |
| Manage capacity and scalability of the backbone network infrastructure                                      |        | **RA**       |
| Plan and manage IP address space growth in the VPC                                                          | **RA** | **C**        |

---

## Access & Identity Management

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Ensure accessibility of the **Cloud Temple Console** and the network API                                  |        | **RA**       |
| Manage Cloud Temple teams' permissions for the network infrastructure                                       |        | **RA**       |
| Administer VPC access rights in the Cloud Temple Console (IAM)                                              | **RA** |              |

---

## Logs (logs)

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Retain and make available the **VPC platform logs** *(7)*                              |        | **RA**       |
| Collect and retain **flow logs** and tenant application logs                               | **RA** |              |

*(7) The retention period for VPC platform logs is specified in the corresponding service agreement.*

---

## Documentation & Contractual Management

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Manage commercial and contractual aspects (quotes, orders, invoicing)                                       | **I**  | **RA**       |
| Ensure contractual monitoring of the service                                                                | **RA** | **I**        |
| Maintain and ensure the availability of the VPC service technical documentation                             | **I**  | **RA**       |
| Document the network architecture deployed in its tenant (diagrams, CMDB)                                   | **RA** |              |

## Reversibility

| Activity                                                                                                    | Client | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|--------|--------------|
| Plan the network reversibility project and select target architectures                                      | **RA** | **I**        |
| Export VPC and network resource configuration via API or provided tools                                     | **RA** | **I**        |
| Proceed with decommissioning VPC configurations following termination                                       | **I**  | **RA**       |

---

> *Professional services are available if you wish to delegate all or part of the responsibilities listed as the client's responsibility. Contact your Cloud Temple sales representative.*