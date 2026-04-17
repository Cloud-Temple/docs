---
title: Shared Responsibility Model — VPC
slug: /contractual/network/raci-vpc
---

# Shared Responsibility Model — VPC (Virtual Private Cloud)

This **RACI** model defines the distribution of responsibilities between the customer and Cloud Temple for the **VPC (Virtual Private Cloud)** service.

> **VPC service specifics**  
> The VPC is a **fully managed network service by Cloud Temple**, offering a cloud-native experience: automatic routing, built-in high availability, and native IPAM/DHCP management. Cloud Temple guarantees the operation and availability of the underlying network infrastructure (VPC routers, inter-AZ backbone, external gateway). The customer is responsible for the design, configuration, and security of their network space: subnets, addressing, filtering policies, and interconnections.

---

## Role Definitions

| Role          | Description                                                                                  |
|---------------|----------------------------------------------------------------------------------------------|
| (R) Responsible | __R__esponsible for performing the process                                                 |
| (A) Accountable | __A__ccountable for the successful completion of the process                               |
| (C) Consulted   | __C__onsulted during the process                                                           |
| (I) Informed    | __I__nformed of the results of the process (via tooling, portal, or messaging)             |

---

## Physical Network Infrastructure & Backbone

Cloud Temple is fully responsible for the physical infrastructure and network backbone on which the VPC is based.

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure implementation and maintenance of **physical network infrastructure** (switches, backbone routers)  |          | **RA**       |
| Ensure **inter-datacenter / inter-AZ** backbone connectivity of Cloud Temple                               | **I**    | **RA**       |
| Ensure the **backbone network** is maintained in operational condition                                      | **I**    | **RA**       |
| Ensure the **backbone network** is maintained in secure condition                                           | **I**    | **RA**       |
| Manage incidents, problems, and backbone network capacity                                                   | **I**    | **RA**       |
| Acquire and maintain licenses essential for network infrastructure operation                                |          | **RA**       |

---

## VPC Infrastructure (Router, Gateway & IPAM)

Cloud Temple ensures the operation of the VPC core components. The customer configures their network space within this infrastructure.

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure the **VPC Router** is maintained in operational condition *(1)*                                     | **I**    | **RA**       |
| Ensure **high availability** of the VPC Router                                                              | **I**    | **RA**       |
| Ensure the **External Gateway** is maintained in operational condition *(1)*                               | **I**    | **RA**       |
| Ensure **high availability** of the External Gateway                                                        | **I**    | **RA**       |
| Ensure the underlying **IPAM & DHCP** service is operational                                               | **I**    | **RA**       |
| Manage incidents and problems on VPC core components                                                        | **I**    | **RA**       |
| Update and maintain VPC core components in secure condition                                                 | **I**    | **RA**       |

*(1) The VPC Router and External Gateway are fully managed components by Cloud Temple. Their availability is guaranteed by Cloud Temple under the VPC service SLA.*

---

## VPC Provisioning & Configuration

The customer is responsible for creating and configuring their VPC and the network resources it contains.

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Create, modify, and delete a **VPC**                                                                        | **RA**   | **I**        |
| Define the VPC network architecture (number of subnets, topology)                                          | **RA**   |              |
| Create, modify, and delete **private networks (Private Networks / VLANs)** in the VPC                     | **RA**   | **I**        |
| Define the **IP addressing plan** (CIDR ranges) of private networks                                        | **RA**   | **I**        |
| Configure **DHCP pools** (dynamic ranges, DNS, gateway)                                                    | **RA**   | **C**        |
| Activate and configure the **External Gateway** (Internet access, NAT, DNAT) *(2)*                        | **RA**   | **C**        |
| Manage **static routes** within the VPC                                                                     | **RA**   |              |

*(2) Activating the External Gateway opens Internet access for the VPC. The customer is responsible for the associated filtering rules and traffic control.*

---

## Public IPs & Internet Exposure

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Allocate the **pool of public IPs** available on the platform                                              | **I**    | **RA**       |
| Order and associate **public IPs (floating IPs)** with their VPC                                           | **RA**   | **I**        |
| Configure **NAT / DNAT** rules for service exposure                                                         | **RA**   |              |
| Manage the lifecycle of public IPs (association, release, move)                                            | **RA**   | **I**        |
| Ensure that services exposed on the Internet comply with applicable security policies                       | **RA**   |              |

---

## Network Security

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure **inter-tenant network isolation** at the platform level *(3)*                                      |          | **RA**       |
| Define and configure **micro-segmentation policies** (security groups) *(4)*                               | **RA**   |              |
| Implement **traffic filtering** inbound/outbound (application firewall, IDS/IPS) *(5)*                     | **RA**   |              |
| Manage **TLS certificates** and SSL termination of exposed services                                         | **RA**   |              |
| Conduct **penetration tests** on resources hosted in the VPC *(6)*                                         | **RA**   | **C**        |
| Monitor **abnormal behavior** on tenant network flows                                                       | **RA**   |              |

*(3) Cloud Temple guarantees strict isolation between VPCs belonging to different tenants. No traffic can cross this barrier without explicit customer action.*  
*(4) Micro-segmentation (security groups) will be available in H1 2026. Filtering policies applicable before this availability must be implemented by the customer via a dedicated security device.*  
*(5) Application traffic filtering within the VPC is the customer's responsibility. Cloud Temple does not perform content inspection of tenant traffic.*  
*(6) Penetration tests must be declared in advance to Cloud Temple, in accordance with the general terms of use.*

---

## Interconnection with External Networks

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Define the **interconnection strategy** with on-premise environments or other clouds                        | **RA**   | **C**        |
| Subscribe to and configure a **site-to-site VPN** access *(available H2 2026)*                            | **RA**   | **C**        |
| Subscribe to and configure **Cloud Connect** (dedicated link) access *(available H2 2026)*                 | **RA**   | **C**        |
| Manage **BGP / routes** associated with operator interconnections                                           | **RA**   | **CI**       |
| Ensure **security of flows** transiting over interconnections                                               | **RA**   |              |

---

## Connecting Resources to the VPC

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Attach **VM instances** to a VPC private network                                                            | **RA**   | **I**        |
| Attach **IaaS resources** (VMware VMs, OpenIaaS) to VPC private networks                                   | **RA**   | **C**        |
| Configure **network interfaces** of resources connected to the VPC                                          | **RA**   |              |
| Ensure connected resources apply **consistent network configurations** (gateway, DNS)                       | **RA**   |              |

---

## Network Monitoring & Observability

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Monitor the operation of **VPC core components** (router, gateway)                                         | **I**    | **RA**       |
| Monitor the **performance of the Cloud Temple** network backbone                                            | **I**    | **RA**       |
| Collect and analyze **network flow logs** (flow logs) of the VPC *(available H1 2026)*                    | **RA**   | **I**        |
| Implement **application flow monitoring** in the VPC                                                        | **RA**   |              |
| Monitor **latency and bandwidth** of flows within the VPC                                                   | **RA**   | **I**        |

---

## Change Management & Capacity

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Decide to add, modify, or remove network resources in their VPC                                             | **RA**   | **CI**       |
| Manage capacity and scalability of the backbone network infrastructure                                      |          | **RA**       |
| Plan and manage IP addressing plan growth in the VPC                                                        | **RA**   | **C**        |

---

## Access & Identity Management

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Ensure accessibility of **Cloud Temple Console** and network API                                           |          | **RA**       |
| Manage entitlements of Cloud Temple teams to network infrastructure                                         |          | **RA**       |
| Administer VPC access rights in Cloud Temple Console (IAM)                                                  | **RA**   |              |

---

## Logs

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Retain and provide access to **VPC platform logs** *(7)*                                                   |          | **RA**       |
| Collect and retain **flow logs** and tenant application logs                                                | **RA**   |              |

*(7) VPC platform log retention duration is specified in the corresponding service agreement.*

---

## Documentation & Contractual

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Manage commercial and contractual matters (quotes, orders, billing)                                         | **I**    | **RA**       |
| Monitor contractual service delivery                                                                        | **RA**   | **I**        |
| Maintain and provide access to VPC service technical documentation                                          | **I**    | **RA**       |
| Document the network architecture deployed in the tenant (diagrams, CMDB)                                   | **RA**   |              |

---

## Reversibility

| Activity                                                                                                    | Customer | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|----------|--------------|
| Plan the network reversibility project and choose target architectures                                      | **RA**   | **I**        |
| Export VPC configuration and network resources via API or provided tools                                    | **RA**   | **I**        |
| Proceed with VPC configuration decommissioning following contract termination                               | **I**    | **RA**       |

---

> *Professional services are available if you wish to delegate some or all of the responsibilities listed as the customer's to Cloud Temple. Contact your Cloud Temple account manager.*
