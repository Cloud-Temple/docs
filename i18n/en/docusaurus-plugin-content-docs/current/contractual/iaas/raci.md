---
title: IaaS Responsibility Matrix
---

Here is the **RACI** model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's IaaS infrastructure.

## Definition of the different roles

We recall here the different roles of the RACI:

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realise  | __R__ealises the process                                                              |
| (A) Approve  | __A__pproves the execution of the process                                              |
| (C) Consult  | __C__onsulted during the process                                                     |
| (I) Informed | __I__nformed of the results of the process (via the tooling, the portal or messaging) |

## Definition of your needs

| Activity                                                                                       | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                                | **RA**      | **CI**            |
| Define the number of tenants and the number of availability zones for each tenant          | **RA**      | **CI**            |
| Define your overall disaster recovery or business continuity strategy                         | **RA**      | **CI**            |
| Properly size your Cloud Temple platform (compute, storage, network, backup, etc.)          | **RA**      | **CI**            |
| Subscribe to services with the necessary information                                       | **RA**      | **I**             |

## Initial implementation of your Cloud Temple tenants

| Activity                                                                                                     | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical datacenters**                                                      |             | **RA**            |
| Ensure the implementation of **compute** infrastructure                                                     | **I**       | **RA**            |
| Ensure the implementation of **storage** infrastructure                                                   | **I**       | **RA**            |
| Ensure the implementation of connectivity to the **backbone network(1)**                                       | **I**       | **RA**            |
| Acquire and maintain essential software licenses for the operation of the Cloud Temple platform |             | **RA**            |
| Implement the base configuration of your Cloud Temple tenants                                             | **CI**      | **RA**            |
| Implement the initial configuration for the backup service                                          | **CI**      | **RA**            |
| *If subscribed:* implement the initial network configuration for Internet and Firewall services  | **CI**      | **RA**            |
| Provide the required assistance for the onboarding of your Cloud Temple environments                         | **I**       | **RA**            |
| Perform final configuration adjustments after service delivery                              | **RA**      | **C**             |
| Configure an external authentication repository for the Cloud Temple console                            | **RA**      | **C**             |
| Create users for each tenant in the Cloud Temple console and assign permissions                  | **RA**      |                   |
| Validate the compliance of the delivered platform with the SecNumCloud repository                                | **I**       | **RA**            |
| Validate the compliance of the delivered platform with the required specifications                               | **RA**      | **CI**            |

*(1) The backbone network is the central infrastructure of Cloud Temple, providing a backbone on which client-specific networks are integrated and supported by this main infrastructure.*

## Integrating your information system into your Cloud Temple environments

| Activity                                                                                                                      | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, and update your virtual machines                                                                       | **RA**      |                   |
| Install and configure software and middleware on your virtual machines                                              | **RA**      |                   |
| Purchase and maintain licenses and usage rights <br/>for the operating systems of your virtual machines  | **RA**      |                   |
| Configure the network for each of your virtual machines                                                                     | **RA**      |                   |
| Ensure each virtual machine is associated with a coherent backup plan                                          | **RA**      | **C**             |
| Ensure each virtual machine is associated with a <br/>coherent disaster recovery or business continuity plan | **RA**      | **C**             |
| Implement an anti-virus protection strategy on your virtual machines                                                | **RA**      |                   |
| Implement a metering and monitoring solution on your virtual machines                                     | **RA**      |                   |
| Define the TAG policy for your virtual machines                                                                        | **RA**      |                   |

## Recurring operations

### Access and Identity Management

| Activity                                                                                                                             | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the availability of the Cloud Temple Console service and its associated API                                                         |             | **RA**            |
| Ensure the availability of the information system deployed on your virtual machines                                                 | **RA**      |                   |
| Manage the physical and logical authorizations of Cloud Temple teams on SecNumCloud infrastructures.                              |             | **RA**            |
| Administer access and security policies related to the Cloud Temple console interface and its API                | **RA**      |                   |
| Administer access and security policies related to the information system<br/> hosted within your Cloud Temple tenants | **RA**      |                   |

### Ongoing operational and security maintenance

The activities aimed at maintaining operational and secure conditions for the infrastructures and services
offered by Cloud Temple within its IaaS offering are carried out with the objective of compliance with the SecNumCloud qualification.

| Activity                                                                                                          | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of **physical datacenters** infrastructure                                     | **I**       | **RA**            |
| Ensure the security maintenance of **physical datacenters** infrastructure                                        | **I**       | **RA**            |
| Ensure the operational maintenance of **compute** infrastructure                                    | **I**       | **RA**            |
| Ensure the security maintenance of **compute** infrastructure (2)                                   | **RA**      | **CI**            |
| Ensure the operational maintenance of **storage** infrastructure                                  | **I**       | **RA**            |
| Ensure the security maintenance of **storage** infrastructure                                     | **I**       | **RA**            |
| Ensure the operational maintenance of **backbone networks**                                     | **I**       | **RA**            |
| Ensure the security maintenance of **backbone networks**                             | **I**       | **RA**            |
| Ensure the operational maintenance of virtual machines deployed in client tenants **(3)** | **RA**      |                   |
| Ensure the security maintenance of virtual machines deployed in client tenants **(3)**    | **RA**      |                   |
| Ensure the operational maintenance of middleware deployed in client tenants                | **RA**      |                   |
| Ensure the maintenance of security conditions for middleware deployed in client tenants                   | **RA**      |                   |

*(2) Cloud Temple regularly provides the latest versions of the operating system for your hypervisors.
Nevertheless, since Cloud Temple is not informed of the specifics of your production environments and the requirements
related to your workloads, **the decision to proceed with the operating system update of your hypervisors,
resulting in a reboot, is your responsibility**. This operation can be performed through the Cloud Temple console or via the API.
Professional services are available if you wish Cloud Temple to take charge of certain operations.*

*(3) Cloud Temple offers license packages for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and
collaborates with your teams for the initial configuration during the implementation phase. However,
the responsibility for maintaining operational and secure conditions lies with you during the ongoing operational phase.
Professional services are available if you wish Cloud Temple to take charge of certain operations.*

### Change, Incident, Problem, and Capacity Management

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage incidents on **physical datacenter** infrastructures                                                 | **I**       | **RA**            |
| Manage problems on **physical datacenter** infrastructures                                                 |             | **RA**            |
| Manage capacities on **physical datacenter** infrastructures                                                 |             | **RA**            |
| Manage incidents on **compute** infrastructures                                                                | **I**       | **RA**            |
| Manage problems on **compute** infrastructures                                                                |             | **RA**            |
| Manage capacities on **compute** infrastructures                                                                | **RA**      | **CI**            |
| Manage incidents on **storage** infrastructures                                                              | **I**       | **RA**            |
| Manage problems on **storage** infrastructures                                                              |             | **RA**            |
| Manage capacities on **storage** infrastructures                                                              | **RA**      | **CI**            |
| Manage incidents on **backbone network** infrastructures                                                       | **I**       | **RA**            |
| Manage problems on **backbone network** infrastructures                                                       |             | **RA**            |
| Manage capacities on **backbone network** infrastructures                                                       |             | **RA**            |
| Deploy a new virtual machine or create a new application environment within a client tenant | **RA**      |                   |
| Modify the configuration of deployed virtual machines                                                           | **RA**      |                   |
| Delete a deployed virtual machine                                                                              | **RA**      |                   |
| Decide to add, modify, or remove resources on the Cloud Temple platform                | **RA**      | **CI**            |
| Execute the decision to modify resources on the Cloud Temple platform                                    | **I**       | **RA**            |
| Apply tags to virtual machines according to the defined policy                                        | **RA**      |                   |

### Performance Management

| Activity                                                                                                                                              | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the monitoring of the proper functioning and reliability of all equipment involved in the SecNumCloud qualified service | **I**       | **RA**            |
| Ensure the tracking of the performance of physical compute, storage, and network resources provided to your tenants **(4)**                  | **RI**      | **A**             |
| Monitor the performance of virtual machines supporting your environments                                                                      | **RA**      | **I**             |

*(4) The Cloud Temple platform adopts a philosophy centered on **the provision of dedicated infrastructures** for **compute** (with physical blades), **storage** (via dedicated LUNs on SANs)
and **network** (including firewalls and load balancers). These dedicated resources are made available to the client, whose usage
and resulting load directly depend on how they are used. It is therefore the client's responsibility to implement and manage the monitoring
and metering systems necessary to ensure the optimal operation of their information system.*

### Integrated Backup and Disaster Recovery Management

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the **integrated backup** infrastructures on the Cloud Temple platform **(5)** |             | **RA**            |
| Ensure the security maintenance of the **integrated backup** infrastructures on the Cloud Temple platform                | **I**       | **RA**            |
| Manage incidents on the **integrated backup** infrastructures on the Cloud Temple platform                                         | **I**       | **RA**            |
| Manage problems on the **integrated backup** infrastructures on the Cloud Temple platform                                         |             | **RA**            |
| Manage capacities on the **integrated backup** infrastructures on the Cloud Temple platform                                         | **AI**      | **RC**            |
| Ensure the operational maintenance of the backup solution chosen by the client within its tenants **(6)**       | **RA**      |                   |
| Ensure the security maintenance of the backup solution chosen by the client within its tenants                  | **RA**      |                   |
| Manage incidents on the backup solution chosen by the client within its tenants                                            | **RA**      |                   |
| Manage problems on the backup solution chosen by the client within its tenants                                            | **RA**      |                   |
| Manage capacities on the backup solution chosen by the client within its tenants                                            | **RA**      | **CI**            |
| Manage the lifecycle of backup policies                                                                                      | **RA**      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                              | **RA**      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                   | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy          | **RA**      | **CI**            |

*(5) As of January 1, 2024, the integrated backup solution on the Cloud Temple platform is IBM Spectrum Protect Plus.
This solution is fully automated and can be managed via the Cloud Temple console or the Cloud Temple API.*

### Backup and Disaster Recovery Management for Third-Party Platforms within a Client Tenant

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational readiness of the chosen backup solution within its tenants by the client **(6)**       | **RA**      |                   |
| Ensure security conditions of the chosen backup solution within its tenants by the client                  | **RA**      |                   |
| Manage incidents on the chosen backup solution within its tenants by the client                                            | **RA**      |                   |
| Manage issues on the chosen backup solution within its tenants by the client                                            | **RA**      |                   |
| Manage capabilities on the chosen backup solution within its tenants by the client                                            | **RA**      | **CI**            |
| Manage the lifecycle of backup policies                                                                                      | **RA**      |                   |
| Ensure backup policies are consistent with the data lifecycle                                              | **RA**      |                   |
| Ensure business continuity or disaster recovery plans are consistent with the data lifecycle                | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                   | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy          | **RA**      | **CI**            |

*(6) This concerns any additional backup solution implemented in the client's environments and managed by the client.
Cloud Temple offers professional services for those who wish to outsource certain operations to Cloud Temple.*

### Documentation and Contract Management

| Activity                                                                                                                                                        | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure commercial and contractual management of the client, including the preparation of quotes, order processing, and billing management       | **I**       | **RA**            |
| Ensure contractual tracking of the service, including quote validation, delivery tracking, and billing monitoring                   | **RA**      | **I**             |
| Ensure maintenance and availability of the inventory of resources provided by Cloud Temple related to the SecNumCloud offer                              | **I**       | **RA**            |
| Ensure maintenance and availability of the technical documentation related to the SecNumCloud offer                                                    | **I**       | **RA**            |
| Ensure tracking of the lifecycle of virtual machines deployed in your Cloud Temple environments<br/> via your CMDB (Configuration Management Database) | **RA**      |                   |
| Maintain the access policy for the Cloud Temple console interface or Cloud Temple API                                                          | **RA**      |                   |

### Log Management

| Activity                                                                                                                 | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Maintain and provide access to the Cloud Temple IaaS platform logs **(7)**                                |             | **RA**            |
| Maintain and provide access to the logs of the information system<br/> hosted within your Cloud Temple tenants | **RA**      |                   |

*(7) As of January 1, 2024, the retention period for platform logs is one year.*

## Client Network Connectivity (mpls, dedicated fiber, ipsec, ...)

| Activity                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to operator network connectivity to access a Cloud Temple physical datacenter (8) | **RA**      | **CI**            |
| Manage IP address planning                                                                         | **RA**      | **I**             |
| Manage incidents on client operator network links                                          | **RA**      |                   |
| Manage issues on client operator network links                                          | **RA**      | **CI**            |
| Manage capacities on client operator network links                                          | **RA**      | **CI**            |

*(8) Cloud Temple is responsible for the network regarding its backbone infrastructure, its aggregation points, and the datacenter interconnection points, ensuring connectivity between these points and its backbone network.
In the physical bay hosting offer, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly called "top of rack".*

## Reversibility

| Activity                                                                                                                                                                                       | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Plan the reversibility project and select target infrastructures                                                                                                                     | **RA**      | **I**             |
| Implement transition operations, whether they involve manual extraction, the use of APIs <br/>or any other third-party method compatible with the Cloud Temple platform. | **RA**      | **I**             |
| Transfer data while controlling the impact of the migration on the quality of the service provided <br/>by the client's information system.                                      | **RA**      |                   |
| Proceed with the dismantling of the Private Cloud configurations and associated options for the client, <br/>following the termination of the contract.                                                  | **I**       | **RA**            |
| Perform secure erasure of data on storage media and provide an attestation                                                                                             | **I**       | **RA**            |