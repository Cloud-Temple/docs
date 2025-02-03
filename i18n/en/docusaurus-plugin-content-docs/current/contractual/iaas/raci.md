---
title: IaaS Responsibility Matrix
---

Here is the **RACI** model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's IaaS infrastructure.

## Definition of different roles

We recall the different roles of the RACI:

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realize  | __R__ealizes the process                                                              |
| (A) Approves | __A__pproves the completion of the process                                            |
| (C) Consult  | __C__onsulted during the process                                                      |
| (I) Informed | __I__nformed of the process results (via tools, portal, or messaging)                 |

## Defining your need

| Activity                                                                                        | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                                  | **RA**      | **CI**            |
| Define the number of tenants and the number of availability zones for each tenant              | **RA**      | **CI**            |
| Define your overall disaster recovery or business continuity strategy                          | **RA**      | **CI**            |
| Properly size your Cloud Temple platform (compute, storage, network, backup,...)               | **RA**      | **CI**            |
| Subscribe to services with the necessary information                                           | **RA**      | **I**             |

## Initial implementation of your Cloud Temple tenants

| Activity                                                                                                      | Client Role | Cloud Temple Role |
|---------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical datacenters**                                                         |             | **RA**            |
| Ensure the implementation of **compute** infrastructure                                                       | **I**       | **RA**            |
| Ensure the implementation of **storage** infrastructure                                                       | **I**       | **RA**            |
| Ensure the implementation of **backbone network (1)** connectivity                                            | **I**       | **RA**            |
| Acquire and maintain essential software licenses for the operation of the Cloud Temple platform               |             | **RA**            |
| Implement the basic configuration of your Cloud Temple tenants                                                | **CI**      | **RA**            |
| Implement the initial configuration for the backup service                                                    | **CI**      | **RA**            |
| *If subscribed:* implement the initial network configuration for Internet and Firewall services               | **CI**      | **RA**            |
| Provide the necessary assistance for onboarding your Cloud Temple environments                                | **I**       | **RA**            |
| Make the final configuration adjustments of the service after delivery                                        | **RA**      | **C**             |
| Configure an external authentication repository for the Cloud Temple console                                  | **RA**      | **C**             |
| Create the users of each tenant in the Cloud Temple console and assign rights                                 | **RA**      |                   |
| Validate the compliance of the delivered platform with the SecNumCloud repository                             | **I**       | **RA**            |
| Validate the compliance of the delivered platform with the required specifications                            | **RA**      | **CI**            |

*(1) The backbone network constitutes the central infrastructure of Cloud Temple, providing a backbone on which
specific client networks rely, which are integrated and supported by this main infrastructure.*

## Integrating your information system into your Cloud Temple environments

| Activity                                                                                                                       | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, update your virtual machines                                                                                 | **RA**      |                   |
| Install and configure software and middleware on your virtual machines                                                        | **RA**      |                   |
| Purchase and hold licenses and usage rights <br/>for the operating systems of your virtual machines                           | **RA**      |                   |
| Configure the network for each of your virtual machines                                                                       | **RA**      |                   |
| Ensure that each virtual machine is associated with a consistent backup plan                                                  | **RA**      | **C**             |
| Ensure that each virtual machine is associated with a <br/>disaster recovery or business continuity plan                      | **RA**      | **C**             |
| Implement a virus protection strategy on your virtual machines                                                                | **RA**      |                   |
| Implement a metrology and monitoring solution on your virtual machines                                                        | **RA**      |                   |
| Define the TAG policy for your virtual machines                                                                               | **RA**      |                   |

## Recurring operations

### Access and identity management

| Activity                                                                                                                            | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the accessibility of the Cloud Temple Console service and the associated API                                                 |             | **RA**            |
| Ensure the accessibility of the information system deployed on your virtual machines                                                | **RA**      |                   |
| Manage the physical and logical accesses of the Cloud Temple teams to SecNumCloud infrastructures                                   |             | **RA**            |
| Administer the access and associated security policy related to the Cloud Temple console interface and its API                      | **RA**      |                   |
| Administer the access and associated security policy for the information system <br/>hosted within your Cloud Temple tenants        | **RA**      |                   |

### Maintaining operational and security conditions

Activities aimed at maintaining operational and security conditions for the infrastructure and services
offered by Cloud Temple, within the framework of its IaaS offering, are carried out with the aim of compliance with the SecNumCloud qualification.

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of **physical datacenters** infrastructure                                         | **I**       | **RA**            |
| Ensure the security maintenance of **physical datacenters** infrastructure                                            | **I**       | **RA**            |
| Ensure the operational maintenance of **compute** infrastructure                                                      | **I**       | **RA**            |
| Ensure the security maintenance of **compute** infrastructure (2)                                                     | **RA**      | **CI**            |
| Ensure the operational maintenance of **storage** infrastructure                                                      | **I**       | **RA**            |
| Ensure the security maintenance of **storage** infrastructure                                                         | **I**       | **RA**            |
| Ensure the operational maintenance of **backbone network** infrastructure                                             | **I**       | **RA**            |
| Ensure the security maintenance of **backbone network** infrastructure                                                | **I**       | **RA**            |
| Ensure the operational maintenance of virtual machines deployed in client tenants **(3)**                             | **RA**      |                   |
| Ensure the security maintenance of virtual machines deployed in client tenants **(3)**                                | **RA**      |                   |
| Ensure the operational maintenance of middlewares deployed in client tenants                                          | **RA**      |                   |

| Ensure the maintenance of security conditions for the middleware deployed in the client tenants                   | **RA**      |                   |

*(2) Cloud Temple regularly provides the latest versions of the operating system for your hypervisors.
However, since Cloud Temple is not informed of the specifics of your production environments and the requirements
related to your workloads, **the decision to update your hypervisors' operating system, thus causing a restart, is yours**.
This operation can be performed through the Cloud Temple console or via the API.
Professional services are available if you wish Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers license packs for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and
works collaboratively with your teams for initial configuration during the implementation phase. However,
the responsibility for maintaining operational and security conditions rests with you during the current operational phase.
Professional services are available if you wish Cloud Temple to handle certain operations.*

### Change, incident, problem and capacity management

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage incidents on **physical datacenter** infrastructures                                                           | **I**       | **RA**            |
| Manage problems on **physical datacenter** infrastructures                                                            |             | **RA**            |
| Manage capacity on **physical datacenter** infrastructures                                                            |             | **RA**            |
| Manage incidents on **compute** infrastructures                                                                       | **I**       | **RA**            |
| Manage problems on **compute** infrastructures                                                                        |             | **RA**            |
| Manage capacity on **compute** infrastructures                                                                        | **RA**      | **CI**            |
| Manage incidents on **storage** infrastructures                                                                       | **I**       | **RA**            |
| Manage problems on **storage** infrastructures                                                                        |             | **RA**            |
| Manage capacity on **storage** infrastructures                                                                        | **RA**      | **CI**            |
| Manage incidents on **backbone network** infrastructures                                                              | **I**       | **RA**            |
| Manage problems on **backbone network** infrastructures                                                              |             | **RA**            |
| Manage capacity on **backbone network** infrastructures                                                              |             | **RA**            |
| Provision a new virtual machine or create a new application environment within a client tenant                       | **RA**      |                   |
| Modify the configuration of deployed virtual machines                                                                | **RA**      |                   |
| Remove a deployed virtual machine                                                                                    | **RA**      |                   |
| Decide to add, modify, or remove resources on the Cloud Temple platform                                              | **RA**      | **CI**            |
| Execute the decision to modify resources on the Cloud Temple platform                                                | **I**       | **RA**            |
| Apply tags to virtual machines in accordance with the defined policy                                                 | **RA**      |                   |

### Performance management

| Activity                                                                                                                                              | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the monitoring of the proper functioning and reliability of all equipment involved in the SecNumCloud qualified service                        | **I**       | **RA**            |
| Ensure the monitoring of the performance of physical compute, storage and network resources allocated to your tenants **(4)**                        | **RI**      | **A**             |
| Monitor the performance of virtual machines supporting your environments                                                                              | **RA**      | **I**             |

*(4) The Cloud Temple platform adopts a philosophy centered on **providing dedicated infrastructure** for **compute** needs (with physical blades), **storage** (via dedicated LUNs on SANs),
and **network** (including firewalls and load balancers). These dedicated resources are made available to the client, with their use and resultant load depending directly on the client's usage.
It is therefore up to the client to establish and manage the necessary monitoring and metrology systems to ensure the optimal functioning of their information system.*

### Backup and disaster recovery management on integrated backup

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of integrated **backup** infrastructure on the Cloud Temple platform **(5)**                           |             | **RA**            |
| Ensure the security maintenance of integrated **backup** infrastructure on the Cloud Temple platform                                      | **I**       | **RA**            |
| Manage incidents on integrated **backup** infrastructure on the Cloud Temple platform                                                     | **I**       | **RA**            |
| Manage problems on integrated **backup** infrastructure on the Cloud Temple platform                                                      |             | **RA**            |
| Manage capacity on integrated **backup** infrastructure on the Cloud Temple platform                                                      | **AI**      | **RC**            |
| Ensure the operational maintenance of the backup solution chosen within its tenants by the client **(6)**                                 | **RA**      |                   |
| Ensure the security maintenance of the backup solution chosen within its tenants by the client                                            | **RA**      |                   |
| Manage incidents on the backup solution chosen within its tenants by the client                                                           | **RA**      |                   |
| Manage problems on the backup solution chosen within its tenants by the client                                                            | **RA**      |                   |
| Manage capacity on the backup solution chosen within its tenants by the client                                                            | **RA**      | **CI**            |
| Manage the lifecycle of backup policies                                                                                                   | **RA**      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                        | **RA**      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                                         | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                               | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy                             | **RA**      | **CI**            |

*(5) As of January 1, 2024, the integrated backup solution on the Cloud Temple platform is IBM Spectrum Protect Plus.
This solution is fully automated and can be managed via the Cloud Temple console or Cloud Temple API.*

### Backup and disaster recovery management for third-party platforms within a client tenant

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational condition maintenance on the chosen backup solution within the client's tenants **(6)**       | **RA**      |                   |
| Ensure the security condition maintenance on the chosen backup solution within the client's tenants                  | **RA**      |                   |
| Manage incidents on the chosen backup solution within the client's tenants                                            | **RA**      |                   |
| Manage problems on the chosen backup solution within the client's tenants                                            | **RA**      |                   |
| Manage capacities on the chosen backup solution within the client's tenants                                            | **RA**      | **CI**            |
| Manage the lifecycle of backup policies                                                                                      | **RA**      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                              | **RA**      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                   | **RA**      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy          | **RA**      | **CI**            |

*(6) This concerns any additional backup solution implemented in the client's environments and managed by the client.
Cloud Temple offers professional services for those who wish to delegate some operations to Cloud Temple.*

### Documentation and Contract Management

| Activity                                                                                                                                                    | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Ensure the commercial and contractual management of the client, including quotes establishment, order processing, and billing management                    | **I**       | **RA**             |
| Ensure the contractual monitoring of the service, including validation of quotes, delivery tracking, and billing surveillance                               | **RA**      | **I**              |
| Ensure the maintenance and availability of the inventory of resources provided by Cloud Temple regarding the SecNumCloud offer                               | **I**       | **RA**             |
| Ensure the maintenance and provision of technical documentation related to the SecNumCloud offer                                                             | **I**       | **RA**             |
| Track the lifecycle of virtual machines deployed in your Cloud Temple environments<br/> via your CMDB (Configuration Management Database) | **RA**      |                    |
| Keep the access policy to the Cloud Temple console interface or Cloud Temple API up to date                                                                 | **RA**      |                    |

### Log Management

| Activity                                                                                                                 | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Keep and provide access to the logs of the Cloud Temple IaaS platform **(7)**                                             |             | **RA**             |
| Keep and provide access to the information system logs<br/> hosted within your Cloud Temple tenants                       | **RA**      |                    |

*(7) As of January 1, 2024, the retention period for platform logs is one year.*

## Client Network Connectivity (mpls, dedicated fiber, ipsec, ...)

| Activity                                                                             | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------|-------------|--------------------|
| Subscribe to an operator network connectivity to access a Cloud Temple physical data center (8) | **RA**      | **CI**             |
| Manage the IP addressing plan                                                                        | **RA**      | **I**              |
| Manage incidents on client operator network links                                                    | **RA**      |                    |
| Manage problems on client operator network links                                                     | **RA**      | **CI**             |
| Manage capacities on client operator network links                                                   | **RA**      | **CI**             |

*(8) Cloud Temple assumes responsibility for the network concerning its backbone infrastructure, collection points, as well as data center interconnection points, thus ensuring connectivity between these points and its backbone network.
In the physical bay hosting offer, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly known as "top of rack".*

## Reversibility

| Activity                                                                                                                                                         | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Plan the reversibility project and choose the target infrastructures                                                                                             | **RA**      | **I**              |
| Implement transition operations, whether they involve manual extraction, API usage <br/>or any other third-party method compatible with the Cloud Temple platform. | **RA**      | **I**              |
| Transfer data while controlling the migration's impact on the quality of service provided <br/>by the client's information system.                                  | **RA**      |                    |
| Proceed with the dismantling of Private Cloud configurations and associated options for the client, <br/>after contract termination.                               | **I**       | **RA**             |
| Ensure the secure erasure of data on storage media and provide certification                                                                                      | **I**       | **RA**             |