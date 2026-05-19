---
title: IaaS Responsibility Matrix
displayed_sidebar: docSidebar
---


Here is the **RACI** model defining the allocation of responsibilities between the client and Cloud Temple for the use of Cloud Temple's IaaS infrastructure.

## Definition of the different roles

Here we recall the different RACI roles:

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Responsible  | __R__esponsible for executing the process                                              |
| (A) Accountable | __A__ccountable for approving the process execution                                      |
| (C) Consulted  | __C__onsulted during the process                                                       |
| (I) Informed   | __I__nformed of the process results (via tooling, the portal, or messaging)              |

## Define your requirements

| Activity                                                                                       | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                                  | **RA**      | **CI**            |
| Define the number of tenants and the number of availability zones for each tenant              | **RA**      | **CI**            |
| Define your overall disaster recovery or business continuity strategy                          | **RA**      | **CI**            |
| Properly size your Cloud Temple platform (compute, storage, network, backup,...)               | **RA**      | **CI**            |
| Subscribe to services with the necessary information                                           | **RA**      | **I**             |

## Initial Implementation of Your Cloud Temple Tenants

| Activity                                                                                                     | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical data centers**                                                       |             | **RA**            |
| Ensure the implementation of **compute** infrastructure                                                      | **I**       | **RA**            |
| Ensure the implementation of **storage** infrastructure                                                      | **I**       | **RA**            |
| Ensure connectivity to the **backbone network(1)**                                                           | **I**       | **RA**            |
| Acquire and maintain essential software licenses for the operation of the Cloud Temple platform              |             | **RA**            |
| Implement the base configuration of your Cloud Temple tenants                                                | **CI**      | **RA**            |
| Implement the initial configuration for the backup service                                                   | **CI**      | **RA**            |
| *If subscribed:* implement the initial network configuration for Internet and Firewall services              | **CI**      | **RA**            |
| Provide the required assistance for the onboarding of your Cloud Temple environments                         | **I**       | **RA**            |
| Perform final configuration adjustments of the service after delivery                                        | **RA**      | **C**             |
| Configure an external authentication repository for the Cloud Temple console                                 | **RA**      | **C**             |
| Create users for each tenant in the Cloud Temple console and assign permissions                              | **RA**      |                   |
| Validate the delivered platform's compliance with the SecNumCloud reference framework                        | **I**       | **RA**            |
| Validate the delivered platform's compliance with the required specifications                                | **RA**      | **CI**            |

*(1) The backbone network constitutes Cloud Temple's central infrastructure, providing a backbone on which
specific client networks are built, and which are integrated and supported by this primary infrastructure.*

## Integrate your information system into your Cloud Temple environments

| Activity                                                                                                                      | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, and update your virtual machines                                                                       | **RA**      |                   |
| Install and configure software and middleware on your virtual machines                                              | **RA**      |                   |
| Purchase and hold licenses and usage rights for the operating systems of your virtual machines  | **RA**      |                   |
| Configure the network for each of your virtual machines                                                                     | **RA**      |                   |
| Ensure each virtual machine is associated with a consistent backup plan                                          | **RA**      | **C**             |
| Ensure each virtual machine is associated with a consistent disaster recovery or business continuity plan | **RA**      | **C**             |
| Implement an antivirus protection strategy on your virtual machines                                                | **RA**      |                   |
| Deploy a telemetry and monitoring solution on your virtual machines                                     | **RA**      |                   |
| Define the TAG policy for your virtual machines                                                                        | **RA**      |                   |

## Recurring Operations

### Access and Identity Management

| Activity                                                                                                                             | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure accessibility of the Cloud Temple Console service and its associated API                                                         |             | **RA**            |
| Ensure accessibility of the information system deployed on your virtual machines                                                 | **RA**      |                   |
| Manage physical and logical access permissions for Cloud Temple teams to SecNumCloud infrastructures.                              |             | **RA**            |
| Administer access and the associated security policy for the Cloud Temple console interface and its API                | **RA**      |                   |
| Administer access and the associated security policy for the information system hosted within your Cloud Temple tenants | **RA**      |                   |

### Operational and Security Readiness Maintenance

Activities aimed at maintaining the operational and security readiness of the infrastructure and services
provided by Cloud Temple, as part of its IaaS offering, are performed to ensure compliance with the SecNumCloud qualification.

| Activity                                                                                                          | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational readiness of **physical datacenter** infrastructure                                            | **I**       | **RA**            |
| Ensure security readiness of **physical datacenter** infrastructure                                               | **I**       | **RA**            |
| Ensure operational readiness of **compute** infrastructure                                                        | **I**       | **RA**            |
| Ensure security readiness of **compute** infrastructure (2)                                                     | **RA**      | **CI**            |
| Ensure operational readiness of **storage** infrastructure                                                        | **I**       | **RA**            |
| Ensure security readiness of **storage** infrastructure                                                           | **I**       | **RA**            |
| Ensure operational readiness of **backbone network** infrastructure                                               | **I**       | **RA**            |
| Ensure security readiness of **backbone network** infrastructure                                                  | **I**       | **RA**            |
| Ensure operational readiness of virtual machines deployed in client tenants (3)                                   | **RA**      |                   |
| Ensure security readiness of virtual machines deployed in client tenants (3)                                      | **RA**      |                   |
| Ensure operational readiness of middleware deployed in client tenants                                             | **RA**      |                   |
| Ensure security readiness of middleware deployed in client tenants                                                | **RA**      |                   |

*(2) Cloud Temple regularly provides the latest operating system versions for your hypervisors.
However, as Cloud Temple is not aware of the specifics of your production environments and the requirements
associated with your workloads, **the decision to proceed with updating your hypervisors' operating systems,
thereby triggering a restart, rests with you**. This operation can be performed via the Cloud Temple console or through the API.
Professional services are available if you would like Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers license packs for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and
collaborates with your teams on the initial configuration during the implementation phase. However,
the responsibility for maintaining operational and security readiness rests with you during the routine operational
phase. Professional services are available if you would like Cloud Temple to handle certain operations.*

### Change, Incident, Problem, and Capacity Management

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage incidents on **physical datacenter** infrastructure                                                            | **I**       | **RA**            |
| Manage problems on **physical datacenter** infrastructure                                                             |             | **RA**            |
| Manage capacity on **physical datacenter** infrastructure                                                             |             | **RA**            |
| Manage incidents on **compute** infrastructure                                                                          | **I**       | **RA**            |
| Manage problems on **compute** infrastructure                                                                           |             | **RA**            |
| Manage capacity on **compute** infrastructure                                                                           | **RA**      | **CI**            |
| Manage incidents on **storage** infrastructure                                                                          | **I**       | **RA**            |
| Manage problems on **storage** infrastructure                                                                           |             | **RA**            |
| Manage capacity on **storage** infrastructure                                                                           | **RA**      | **CI**            |
| Manage incidents on **backbone network** infrastructure                                                                 | **I**       | **RA**            |
| Manage problems on **backbone network** infrastructure                                                                  |             | **RA**            |
| Manage capacity on **backbone network** infrastructure                                                                  |             | **RA**            |
| Provision a new virtual machine or create a new application environment within a client tenant                        | **RA**      |                   |
| Modify the configuration of deployed virtual machines                                                                   | **RA**      |                   |
| Delete a deployed virtual machine                                                                                       | **RA**      |                   |
| Decide to add, modify, or remove resources on the Cloud Temple platform                                               | **RA**      | **CI**            |
| Execute the decision to modify resources on the Cloud Temple platform                                                 | **I**       | **RA**            |
| Apply tags to virtual machines in accordance with the defined policy                                                  | **RA**      |                   |

### Performance Management

| Activity                                                                                                                                              | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure monitoring of the proper functioning and reliability of all equipment involved in delivering the SecNumCloud qualified service | **I**       | **RA**            |
| Monitor the performance of physical compute, storage, and network resources made available to your tenants **(4)**                  | **RI**      | **A**             |
| Supervise the performance of virtual machines supporting your environments                                                                      | **RA**      | **I**             |

*(4) The Cloud Temple platform adopts a philosophy centered on **providing dedicated infrastructures** for **compute** needs (with physical blades), **storage** (via dedicated LUNs on SANs), and **network** (including firewalls and load balancers). These dedicated resources are made available to the client, and their usage and resulting load depend directly on how they are utilized. It is therefore the client's responsibility to implement and manage the necessary monitoring and metrics systems to ensure optimal operation of their information system.*

### Backup and Disaster Recovery Management on Integrated Backup

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational readiness for the **backup** infrastructure integrated into the Cloud Temple platform **(5)** |             | **RA**            |
| Ensure security readiness for the **backup** infrastructure integrated into the Cloud Temple platform                | **I**       | **RA**            |
| Manage incidents for the **backup** infrastructure integrated into the Cloud Temple platform                                         | **I**       | **RA**            |
| Manage problems for the **backup** infrastructure integrated into the Cloud Temple platform                                         |             | **RA**            |
| Manage capacity for the **backup** infrastructure integrated into the Cloud Temple platform                                         | **AI**      | **RC**            |
| Ensure operational readiness for the backup solution selected by the client within its tenants **(6)**       | **RA**      |                   |
| Ensure security readiness for the backup solution selected by the client within its tenants                  | **RA**      |                   |
| Manage incidents for the backup solution selected by the client within its tenants                                            | **RA**      |                   |
| Manage problems for the backup solution selected by the client within its tenants                                            | **RA**      |                   |
| Manage capacity for the backup solution selected by the client within its tenants                                            | **RA**      | **CI**            |
| Manage the lifecycle of backup policies                                                                                      | **RA**      |                   |
| Ensure backup policies are consistent with the data lifecycle                                              | **RA**      |                   |
| Ensure business continuity or disaster recovery plans are consistent with the data lifecycle                | **RA**      |                   |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy                                                   | **RA**      |                   |
| Conduct periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy          | **RA**      | **CI**            |

*(5) As of January 1, 2024, the backup solution integrated into the Cloud Temple platform is IBM Spectrum Protect Plus.
This solution is fully automated and can be managed via the Cloud Temple console or the Cloud Temple API.*

### Backup and Disaster Recovery Management for Third-Party Platforms within a Client Tenant

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational readiness for the backup solution selected within the client's tenants **(6)**       | **RA**      |                   |
| Ensure security readiness for the backup solution selected within the client's tenants                  | **RA**      |                   |
| Manage incidents for the backup solution selected within the client's tenants                                            | **RA**      |                   |
| Manage problems for the backup solution selected within the client's tenants                                            | **RA**      |                   |
| Manage capacity for the backup solution selected within the client's tenants                                            | **RA**      | **CI**            |
| Manage the backup policy lifecycle                                                                                      | **RA**      |                   |
| Ensure backup policies are consistent with the data lifecycle                                              | **RA**      |                   |
| Ensure business continuity or disaster recovery plans are consistent with the data lifecycle                | **RA**      |                   |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy                                                   | **RA**      |                   |
| Conduct periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy          | **RA**      | **CI**            |

*(6) This applies to any additional backup solution deployed in the client's environments and managed by the client.
Cloud Temple offers professional services for those who wish to delegate certain operations to Cloud Temple.*

### Documentation and Contract Management

| Activity                                                                                                                                                        | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage the client's commercial and contractual relationship, including preparing quotes, processing orders, and managing billing       | **I**       | **RA**            |
| Monitor the contractual follow-up of the service, including validating quotes, tracking deliveries, and monitoring billing                   | **RA**      | **I**             |
| Maintain and ensure the availability of the inventory of resources provided by Cloud Temple for the SecNumCloud offering                              | **I**       | **RA**            |
| Maintain and provide access to the technical documentation for the SecNumCloud offering                                                    | **I**       | **RA**            |
| Monitor the lifecycle of virtual machines deployed in your Cloud Temple environments via your CMDB (Configuration Management Database) | **RA**      |                   |
| Keep the access policy for the Cloud Temple console interface or the Cloud Temple API up to date                                                          | **RA**      |                   |

### Log Management

| Activity                                                                                                                 | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Retain and make available the logs of the Cloud Temple IaaS platform **(7)**                                             |             | **RA**            |
| Retain and make available the logs of the information system hosted within your Cloud Temple tenants                     | **RA**      |                   |

*(7) As of January 1, 2024, the log retention period for the platform is one year.*

## Client network connectivity (mpls, dedicated fiber, ipsec, ...)

| Activity                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to operator network connectivity to access a Cloud Temple physical datacenter (8) | **RA**      | **CI**            |
| Manage the IP addressing plan                                                                        | **RA**      | **I**             |
| Manage incidents on client operator network links                                                    | **RA**      |                   |
| Manage issues on client operator network links                                                       | **RA**      | **CI**            |
| Manage capacity on client operator network links                                                     | **RA**      | **CI**            |

*(8) Cloud Temple assumes responsibility for the network regarding its backbone infrastructure, its aggregation points as well as
the datacenter interconnection points, thereby ensuring connectivity between these points and its backbone network.
In the physical rack hosting offering, Cloud Temple assumes responsibility starting from the equipment located at the top of the rack, commonly referred to as "top of rack".*

## Reversibility

| Activity                                                                                                                                                                                       | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Plan the reversibility project and select target infrastructures                                                                                                                     | **RA**      | **I**             |
| Implement transition operations, whether involving manual extraction, API usage, or any other third-party method compatible with the Cloud Temple platform. | **RA**      | **I**             |
| Transfer data while monitoring the impact of the migration on the service quality provided by the client's information system.                                      | **RA**      |                   |
| Proceed with dismantling Private Cloud configurations and client-associated options following contract termination.                                                  | **I**       | **RA**            |
| Perform secure data erasure on storage media and provide an attestation                                                                                             | **I**       | **RA**            |