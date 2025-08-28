---
Title: RACI Matrix for IaaS Responsibility
---

Here is the RACI matrix outlining the responsibility distribution between the client and Cloud Temple regarding Cloud Temple's Infrastructure as a Service (IaaS):

## Definition of Different Roles

Here we recap the different roles defined by RACI:

| Role         | Description                                                                     |
|--------------|---------------------------------------------------------------------------------|
| (R) Realizes  | __R__ performs the process                                                              |
| (A) Approves   | __A__ approves the execution of the process                                              |
| (C) Consults  | __C__ is consulted during the process                                                    |
| (I) Informs    | __I__ is informed about the results of the process (via tooling, portal, or messaging) |

## Define Your Requirement

| Activity                                                                                       | Role Client | Role Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Establish the overall architecture of your Cloud Temple platform                             | **RA**      | **CI**            |
| Determine the number of tenants and the number of availability zones for each tenant        | **RA**      | **CI**            |
| Define your global disaster recovery or business continuity strategy                         | **RA**      | **CI**            |
| Properly scale your Cloud Temple platform (computing, storage, networking, backup, etc.)  | **RA**      | **CI**            |
| Subscribe to services with necessary information                                             | **RA**      | **I**             |

## Initial Deployment of Your Cloud Temple Tenants

| Activity                                                                                                  | Client Role | Cloud Temple Role |
|---------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure implementation of **physical data centers**                                                      |             | RA               |
| Ensure implementation of computing infrastructure                                                       | I          | RA               |
| Ensure implementation of storage infrastructure                                                         | I          | RA               |
| Ensure implementation of backbone network connectivity (1)                                         | I          | RA               |
| Acquire and maintain essential software licenses for Cloud Temple platform operation                  |             | RA               |
| Implement basic configuration for your Cloud Temple tenants                                             | CI         | RA               |
| Implement initial configuration for backup service                                                        | CI         | RA               |
| *If applicable:* implement initial network configuration for Internet and Firewall services            | CI         | RA               |
| Provide necessary assistance for tenant environment takeover                                         | I          | RA               |
| Perform final configuration adjustments post-delivery of the service                                    | RA         | C                |
| Configure an external authentication repository for Cloud Temple console                          | RA         | C                |
| Create users for each tenant in the Cloud Temple console and assign permissions                   | RA         |                  |
| Validate delivery platform compliance with SecNumCloud reference registry                             | I          | RA               |
| Validate delivery platform compliance with required specifications                                   | RA         | CI              |

*(1) The backbone network serves as the central infrastructure of Cloud Temple, providing a spinal cord for client-specific networks that are integrated and supported by this primary infrastructure.*

## Integrating Your Information System with Cloud Temple Environments

| Activity                                                                                                      | Role Client | Role Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, deploy, and update virtual machines                                                                       | **RA**      |                   |
| Install and configure software and middleware on your virtual machines                                              | **RA**      |                   |
| Purchase and maintain licenses and usage rights for operating systems on your virtual machines                  | **RA**      |                   |
| Configure network settings for each of your virtual machines                                                    | **RA**      |                   |
| Ensure each virtual machine is linked to a consistent disaster recovery plan                                         | **RA**      | **C**             |
| Ensure each virtual machine is associated with a consistent business continuity or disaster recovery plan         | **RA**      | **C**             |
| Implement an antivirus protection strategy on your virtual machines                                                | **RA**      |                   |
| Set up monitoring and logging solutions on your virtual machines                                                  | **RA**      |                   |
| Define your virtual machine tagging policy                                                                     | **RA**      |                   |

### Frequent Operations

### Access Management and Identity Management

| Activity                                                                                                      | Role Client | Role Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure accessibility of the Console Cloud Temple service and its associated API                               |             | **Role Administrator (RA)** |
| Ensure accessibility of the information system deployed on your virtual machines                                   | **RA**      |                   |
| Manage physical and logical permissions for Cloud Temple teams accessing SecNumCloud infrastructures.              |             | **RA**            |
| Administer access and security policy related to the Console Cloud Temple interface and its API                  | **RA**      |                   |
| Administer access and security policy related to the information system hosted within your Cloud Temple tenants  | **RA**      |                   |

### Maintenance in Operational and Security Condition

The activities aimed at maintaining the operational and security condition of infrastructures and services offered by Cloud Temple, within its IaaS offering, are conducted with the objective of adhering to SecNumCloud qualification.

| Activity                                                                                          | Client Role (I) | Cloud Temple Role (RA) |
|-----------------------------------------------------------------------------------------------|----------------|------------------|
| Ensure operational readiness of physical data centers                                         | **I**           | **RA**            |
| Ensure security readiness of physical data centers                                           | **I**           | **RA**            |
| Ensure operational readiness of computing infrastructure                                      | **I**           | **RA**            |
| Ensure security readiness of computing infrastructure (2)                                        | **RA**          | **CI**            |
| Ensure operational readiness of storage infrastructure                                          | **I**           | **RA**            |
| Ensure security readiness of storage infrastructure                                         | **I**           | **RA**            |
| Ensure operational readiness of backbone networking                                            | **I**           | **RA**            |
| Ensure security readiness of backbone networking                                           | **I**           | **RA**            |
| Ensure operational readiness of virtual machines deployed within client tenants (3)             | **RA**          |                  |
| Ensure security readiness of virtual machines deployed within client tenants (3)                | **RA**          |                  |
| Ensure operational readiness of middlewares deployed within client tenants                    | **RA**          |                  |
| Ensure security readiness of middlewares deployed within client tenants                       | **RA**          |                  |

*(2) Cloud Temple regularly provides the latest operating system versions for your hypervisors. However, due to Cloud Temple's lack of knowledge about your production environments and workload requirements, the decision to update the hypervisor OS, leading to a reboot, falls on you. This operation can be performed through Cloud Temple's console or via API. Professional services are available if you wish Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers firewall (Fortinet, Stormshield) and load balancer (HAProxy) license packs, collaborating with your teams for initial configuration during the deployment phase. Nevertheless, maintaining operational readiness and security falls on you during ongoing operation. Professional services are available if you wish Cloud Temple to handle certain operations.*

### Change Management, Incident Handling, Capacity Management, and Resource Allocation

| Activity                                                                                          | Client Role I | Cloud Temple Role RA |
|-------------------------------------------------------------------------------------------------------|-----------------|-------------------|
| Manage incidents on physical datacenter infrastructure                                          | **I**          | **RA**            |
| Address issues on physical datacenter infrastructure                                          |               | **RA**            |
| Manage capacity on physical datacenter infrastructure                                          |               | **RA**            |
| Manage incidents on computing infrastructure                                                   | **I**          | **RA**            |
| Address problems on computing infrastructure                                                    |               | **RA**            |
| Manage capacity on computing infrastructure                                                    | **RA**         | **CI**            |
| Manage incidents on storage infrastructure                                                      | **I**          | **RA**            |
| Address issues on storage infrastructure                                                      |               | **RA**            |
| Manage capacity on storage infrastructure                                                      | **RA**         | **CI**            |
| Manage incidents on backbone network infrastructure                                         | **I**          | **RA**            |
| Address problems on backbone network infrastructure                                         |               | **RA**            |
| Manage capacity on backbone network infrastructure                                         |               | **RA**            |
| Deploy a new virtual machine or create a new application environment within a client tenant     | **RA**         |                  |
| Modify the configuration of deployed virtual machines                                               | **RA**         |                  |
| Delete a deployed virtual machine                                                           | **RA**         |                  |
| Decide to add, modify, or remove resources on the Cloud Temple platform                     | **RA**         | **CI**            |
| Execute the decision to modify resources on the Cloud Temple platform                       | **I**          | **RA**            |
| Apply tags to virtual machines according to the defined policy                               | **RA**         |                  |

### Performance Management

| Activity                                                                 | Client Role I | Cloud Temple Role A |
|-------------------------------------------------------------------------|---------------|---------------------|
| Ensure the monitoring and reliability of all equipment involved in delivering a qualified SecNumCloud service | **I**       | **RA**            |
| Track the performance of physical computing, storage, and network resources allocated to your tenants (4)                  | **RI**      | **A**             |
| Supervise the performance of virtual machines supporting your environments                                                                   | **RA**      | **I**             |

*(4) Cloud Temple's platform adheres to a philosophy centered on providing dedicated infrastructures for computing (with physical servers), storage (via dedicated LUNs on SANs), and networking (including firewalls and load balancers). These dedicated resources are made available to the client, whose usage and resulting load directly impact system performance. Consequently, it is the client's responsibility to establish and manage monitoring and metering systems to ensure optimal operation of their information infrastructure.*

### Management of Backup and Disaster Recovery on Integrated Backup Services

| Activity                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational readiness on integrated backup infrastructures within the Cloud Temple platform (5) |           | RA                |
| Ensure security readiness on integrated backup infrastructures within the Cloud Temple platform | I         | RA                |
| Manage incidents on integrated backup infrastructures within the Cloud Temple platform | I         | RA                |
| Manage issues on integrated backup infrastructures within the Cloud Temple platform |           | RA                |
| Manage capabilities on integrated backup infrastructures within the Cloud Temple platform | AI       | RC                |
| Ensure operational readiness of chosen backup solution within client's tenants (6) | RA        |                  |
| Ensure security readiness of chosen backup solution within client's tenants | RA        |                  |
| Manage incidents on chosen backup solution within client's tenants | RA        |                  |
| Manage issues on chosen backup solution within client's tenants | RA        |                  |
| Manage capabilities on chosen backup solution within client's tenants | RA        | CI                |
| Manage the lifecycle of backup policies                                                                                       | RA        |                  |
| Ensure backup policies align with data lifecycle cycle | RA        |                  |
| Ensure business continuity or disaster recovery plans align with data lifecycle cycle | RA        |                  |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy | RA        |                  |
| Conduct periodic tests to evaluate the effectiveness of business continuity or disaster recovery strategies | RA        | CI                |

*(5) As of January 1, 2024, IBM Spectrum Protect Plus is the integrated backup solution on the Cloud Temple platform. This solution is fully automated and can be managed via the Cloud Temple console or API.*

### Management of Backup and Disaster Recovery for Third-Party Platforms within Client's Tenant

| Activity                                                                 | Client Role (RA) | Cloud Temple Role |
|------------------------------------------------------------------------|---------------|-------------------|
| Ensure operational readiness of the chosen backup solution within client tenants **(6)**       | RA            |                   |
| Ensure security compliance of the chosen backup solution within client tenants                  | RA            |                   |
| Manage incidents related to the chosen backup solution within client tenants          | RA            |                   |
| Manage issues related to the chosen backup solution within client tenants          | RA            |                   |
| Manage capacity of the chosen backup solution within client tenants              | RA            | CI               |
| Manage the lifecycle of backup policies                                                                   | RA            |                   |
| Ensure backup policies align with data lifecycle cycle                           | RA            |                   |
| Ensure business continuity or disaster recovery plans are aligned with data lifecycle | RA            |                   |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy     | RA            |                   |
| Conduct periodic tests to evaluate the effectiveness of disaster recovery or business continuity strategies | RA            | CI               |

*(6) This pertains to any additional backup solution implemented within client environments and managed by them. Cloud Temple offers professional services for those wishing to delegate certain operations to Cloud Temple.*

### Service and Contract Management

| Activity                                                                                          | Client Role | Cloud Temple Role |
|---------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure commercial management and contractual obligations for the client, including quotation establishment, order processing, and billing management       | **I**       | **RA**            |
| Ensure contractual follow-through of service delivery, encompassing invoice validation, shipment tracking, and facturing oversight                           | **RA**      | **I**             |
| Maintain inventory management of resources provided by Cloud Temple relative to the SecNumCloud offering                                                  | **I**       | **RA**            |
| Maintain technical documentation pertaining to the SecNumCloud offering                                                    | **I**       | **RA**            |
| Track virtual machine lifecycle within your Cloud Temple environments via your CMDB (Configuration Management Database)                           | **RA**      |                   |
| Keep updated access policy for Cloud Temple console or Cloud Temple API                                                          | **RA**      |                   |

### Log Management

| Activity                                                                                          | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Store and make available the logs of the IaaS platform hosted by Cloud Temple **(7)**            |             | RA                |
| Store and make available the logs of the hosted information system within your tenants at Cloud Temple | RA          |                  |

*(7) As of January 1, 2024, the log retention period for the platform is one year.*

## Connectivity to Client Network (MPLS, Dedicated Fiber, IPSec, ...)

| Activity                                                                                             | Role Client | Role Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to operator's network connectivity for access to a physical datacenter Cloud Temple (8) | **RA**      | **CI**            |
| Manage IP addressing plan                                                                         | **RA**      | **I**             |
| Handle incidents on client operator networks                                                                  | **RA**      |                   |
| Handle problems on client operator networks                                                                  | **RA**      | **CI**            |
| Manage capabilities on client operator networks                                                              | **RA**      | **CI**            |

*(8) Cloud Temple assumes responsibility for the network concerning its infrastructure backbone, collection points, and datacenter interconnection points, ensuring connectivity between these points and its backbone network. In our physical data center hosting offering, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly referred to as "top of rack".*

## Reversibilité

| Activity                                                                                                                                                                                       | Client Role (RA) | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------????--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------