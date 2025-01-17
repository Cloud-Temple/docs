---
title: IaaS Responsibility Matrix
---

Here is the **RACI** model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's IaaS infrastructure.

## Definition of Different Roles

We recall here the different roles of the RACI:

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realize  | __R__ealizes the process                                                              |
| (A) Approve  | __A__pproves the realization of the process                                           |
| (C) Consult  | __C__onsulted during the process                                                      |
| (I) Inform   | __I__nformed of the process results (via tooling, portal, or messaging)               |

## Defining Your Needs

| Activity                                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                            | __RA__      | __CI__            | 
| Define the number of tenants and the number of availability zones for each tenant        | __RA__      | __CI__            | 
| Define your overall disaster recovery or business continuity strategy                    | __RA__      | __CI__            | 
| Properly size your Cloud Temple platform (compute, storage, network, backup,...)         | __RA__      | __CI__            | 
| Subscribe to services with necessary information                                         | __RA__      | __I__             | 

## Initial Implementation of Your Cloud Temple Tenants

| Activity                                                                                                     | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical data centers**                                                      |             | __RA__            | 
| Ensure the implementation of **compute** infrastructures                                                    | __I__       | __RA__            | 
| Ensure the implementation of **storage** infrastructures                                                    | __I__       | __RA__            | 
| Ensure connectivity implementation to the **backbone network (1)**                                           | __I__       | __RA__            | 
| Acquire and maintain essential software licenses for the operation of the Cloud Temple platform             |             | __RA__            | 
| Implement the basic configuration of your Cloud Temple tenants                                               | __CI__      | __RA__            | 
| Implement the initial configuration for the backup service                                                   | __CI__      | __RA__            |
| *If subscribed:* implement initial network configuration for Internet and Firewall services                  | __CI__      | __RA__            |
| Provide the required assistance for the onboarding of your Cloud Temple environments                         | __I__       | __RA__            | 
| Make final configuration adjustments to the service after delivery                                            | __RA__      | __C__             | 
| Configure an external authentication repository for the Cloud Temple console                                  | __RA__      | __C__             | 
| Create users for each tenant in the Cloud Temple console and assign rights                                    | __RA__      |                   | 
| Validate the compliance of the delivered platform with the SecNumCloud repository                             | __I__       | __RA__            |
| Validate the compliance of the delivered platform with required specifications                                | __RA__      | __CI__            |

*(1) The backbone network constitutes Cloud Temple's central infrastructure, providing the backbone on which 
specific client networks rely, which are integrated and supported by this main infrastructure.*

## Integrate Your Information System into Your Cloud Temple Environments

| Activity                                                                                                                      | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, update your virtual machines                                                                                 | __RA__      |                   | 
| Install and configure software and middleware on your virtual machines                                                        | __RA__      |                   | 
| Purchase and hold licenses and rights for operating systems of your virtual machines                                          | __RA__      |                   | 
| Configure the network for each of your virtual machines                                                                       | __RA__      |                   |
| Ensure that each virtual machine is associated with a consistent backup plan                                                  | __RA__      | __C__             | 
| Ensure that each virtual machine is associated with a consistent disaster recovery or business continuity plan                | __RA__      | __C__             | 
| Implement an antivirus protection strategy on your virtual machines                                                           | __RA__      |                   | 
| Set up a measurement and monitoring solution on your virtual machines                                                         | __RA__      |                   | 
| Define the TAG policy for your virtual machines                                                                               | __RA__      |                   | 

## Recurring Operations

### Access and Identity Management

| Activity                                                                                                                             | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the accessibility of the Cloud Temple Console service and the associated API                                                  |             | __RA__            |
| Ensure the accessibility of the information system deployed on your virtual machines                                                 | __RA__      |                   |
| Manage the physical and logical authorization of Cloud Temple teams to SecNumCloud infrastructures                                   |             | __RA__            |
| Administer access and the associated security policy related to the Cloud Temple console interface and its API                       | __RA__      |                   |
| Administer access and the associated security policy to the information system hosted within your Cloud Temple tenants               | __RA__      |                   |

### Maintaining Operational and Security Conditions

The activities aimed at maintaining operational and security conditions for the infrastructures and services 
offered by Cloud Temple, within its IaaS offering, are carried out with the objective of compliance with the SecNumCloud qualification.

| Activity                                                                                                          | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of **physical data center** infrastructures                                    | __I__       | __RA__            | 
| Ensure the security maintenance of **physical data center** infrastructures                                       | __I__       | __RA__            | 
| Ensure the operational maintenance of **compute** infrastructures                                                 | __I__       | __RA__            | 
| Ensure the security maintenance of **compute** infrastructures (2)                                                | __RA__      | __CI__            | 
| Ensure the operational maintenance of **storage** infrastructures                                                 | __I__       | __RA__            | 
| Ensure the security maintenance of **storage** infrastructures                                                    | __I__       | __RA__            | 
| Ensure the operational maintenance of **backbone network** infrastructures                                        | __I__       | __RA__            | 
| Ensure the security maintenance of **backbone network** infrastructures                                           | __I__       | __RA__            |
| Ensure the operational maintenance of virtual machines deployed in client tenants **(3)**                         | __RA__      |                   |
| Ensure the security maintenance of virtual machines deployed in client tenants **(3)**                            | __RA__      |                   |

| Ensure the operational maintenance of the middleware deployed in client tenants                | __RA__      |                   |
| Ensure the security maintenance of the middleware deployed in client tenants                   | __RA__      |                   |

*(2) Cloud Temple regularly provides the latest versions of the operating system for your hypervisors. 
Nevertheless, since Cloud Temple is not aware of the specifics of your production environments and the requirements 
related to your workloads, __the decision to update the operating system of your hypervisors, which will result in a reboot, is yours__. 
This operation can be carried out through the Cloud Temple console or via the API.
Professional services are available if you would like Cloud Temple to take care of certain operations.*

*(3) Cloud Temple offers license packs for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and 
works in collaboration with your teams for the initial configuration during the implementation phase. However, 
the responsibility for operational and security maintenance rests with you during the regular operational phase. 
Professional services are available if you would like Cloud Temple to take care of certain operations.*

### Change, Incident, Problem, and Capacity Management

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage incidents on **physical datacenters** infrastructures                                                 | __I__       | __RA__            |
| Manage problems on **physical datacenters** infrastructures                                                 |             | __RA__            |
| Manage capacities on **physical datacenters** infrastructures                                                 |             | __RA__            |
| Manage incidents on **compute** infrastructures                                                                | __I__       | __RA__            |
| Manage problems on **compute** infrastructures                                                                |             | __RA__            |
| Manage capacities on **compute** infrastructures                                                                | __RA__      | __CI__            |
| Manage incidents on **storage** infrastructures                                                              | __I__       | __RA__            |
| Manage problems on **storage** infrastructures                                                              |             | __RA__            |
| Manage capacities on **storage** infrastructures                                                              | __RA__      | __CI__            |
| Manage incidents on **network backbone** infrastructures                                                       | __I__       | __RA__            |
| Manage problems on **network backbone** infrastructures                                                       |             | __RA__            |
| Manage capacities on **network backbone** infrastructures                                                       |             | __RA__            |
| Deploy a new virtual machine or create a new application environment within a client tenant | __RA__      |                   |
| Modify the configuration of deployed virtual machines                                                           | __RA__      |                   |
| Delete a deployed virtual machine                                                                              | __RA__      |                   |
| Make the decision to add, modify, or remove resources on the Cloud Temple platform                | __RA__      | __CI__            |
| Execute the decision to modify resources on the Cloud Temple platform                                    | __I__       | __RA__            |
| Apply tags to virtual machines in accordance with the defined policy                                        | __RA__      |                   |

### Performance Management

| Activity                                                                                                                                              | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the monitoring of the proper functioning and reliability of all equipment involved in the SecNumCloud qualified service                        | __I__       | __RA__            |
| Ensure the performance monitoring of the physical compute, storage, and network resources made available to your tenants __(4)__                      | __RI__      | __A__             |
| Monitor the performance of the virtual machines supporting your environments                                                                      | __RA__      | __I__             |

*(4) The Cloud Temple platform adopts a philosophy centered around __providing dedicated infrastructures__ for the needs of __compute__ (with physical blades), __storage__ (via dedicated LUNs on SANs) 
and __network__ (including firewalls and load balancers). These dedicated resources are made available to the client, whose use 
and resulting load depend directly on how they are used. It is therefore incumbent upon the client to implement and manage the necessary monitoring 
and metrology systems to ensure the optimal operation of their information system.*

### Backup and Disaster Recovery Management on Integrated Backup

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of **backup** infrastructures integrated into the Cloud Temple platform **(5)**                        |             | __RA__            |
| Ensure the security maintenance of the **backup** infrastructures integrated into the Cloud Temple platform                               | __I__       | __RA__            |
| Manage incidents on **backup** infrastructures integrated into the Cloud Temple platform                                                 | __I__       | __RA__            |
| Manage problems on **backup** infrastructures integrated into the Cloud Temple platform                                                 |             | __RA__            |
| Manage capacities on **backup** infrastructures integrated into the Cloud Temple platform                                                 | __AI__      | __RC__            |
| Ensure the operational maintenance on the backup solution chosen within their tenants by the client **(6)**                              | __RA__      |                   |
| Ensure the security maintenance on the backup solution chosen within their tenants by the client                                         | __RA__      |                   |
| Manage incidents on the backup solution chosen within their tenants by the client                                                        | __RA__      |                   |
| Manage problems on the backup solution chosen within their tenants by the client                                                        | __RA__      |                   |
| Manage capacities on the backup solution chosen within their tenants by the client                                                        | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                                                  | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                       | __RA__      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                                       | __RA__      |                   |
| Conduct periodic tests to assess the effectiveness of the backup strategy                                                                | __RA__      |                   |
| Conduct periodic tests to assess the effectiveness of the disaster recovery or business continuity strategy                              | __RA__      | __CI__            |

*(5) As of January 1, 2024, the integrated backup solution on the Cloud Temple platform is IBM Spectrum Protect Plus. 
This solution is fully automated and can be managed via the Cloud Temple console or API.*

### Backup and Disaster Recovery Management for Third-Party Platforms within a Client Tenant

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational condition maintenance on the chosen backup solution within its tenants by the client **(6)**                           | __RA__      |                   |
| Ensure security condition maintenance on the chosen backup solution within its tenants by the client                                      | __RA__      |                   |
| Manage incidents on the chosen backup solution within its tenants by the client                                                           | __RA__      |                   |
| Manage problems on the chosen backup solution within its tenants by the client                                                            | __RA__      |                   |
| Manage capacities on the chosen backup solution within its tenants by the client                                                          | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                                                   | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                        | __RA__      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                                         | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                               | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy                             | __RA__      | __CI__            |

*(6) This concerns any additional backup solution implemented in the client's environments and managed by them. 
Cloud Temple offers professional services for those who wish to delegate certain operations to Cloud Temple.* 

### Documentation and Contract Management

| Activity                                                                                                                                                    | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure commercial and contractual management of the client, including the preparation of quotes, order processing and billing management                  | __I__       | __RA__            |
| Ensure contractual follow-up of the service, including quote validation, delivery follow-up and billing monitoring                                         | __RA__      | __I__             |
| Maintain and make available the inventory of resources provided by Cloud Temple related to the SecNumCloud offer                                           | __I__       | __RA__            |
| Maintain and make available the technical documentation related to the SecNumCloud offer                                                                  | __I__       | __RA__            |
| Track the lifecycle of virtual machines deployed in your Cloud Temple environments via your CMDB (Configuration Management Database)                     | __RA__      |                   | 
| Keep the access policy to the Cloud Temple console interface or Cloud Temple API up to date                                                                | __RA__      |                   |

### Log Management

| Activity                                                                                                          | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Retain and make available the logs of the Cloud Temple IaaS platform **(7)**                                      |             | __RA__            |
| Retain and make available the logs of the information system hosted within your Cloud Temple tenants             | __RA__      |                   |

*(7) As of January 1, 2024, the log retention period for the platform is one year.*

## Connectivity to the Client Network (mpls, dedicated fiber, ipsec, ...)

| Activity                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to an operator network connectivity to access a physical Cloud Temple datacenter (8)       | __RA__      | __CI__            |
| Manage the IP addressing plan                                                                         | __RA__      | __I__             |
| Manage incidents on the client's operator network links                                               | __RA__      |                   |
| Manage problems on the client's operator network links                                                | __RA__      | __CI__            |
| Manage capacities on the client's operator network links                                              | __RA__      | __CI__            |

*(8) Cloud Temple assumes the responsibility of network concerning its backbone infrastructure, its collection points as well as 
the datacenter interconnection points, thus ensuring connectivity between these points and its backbone network. 
In the physical bay hosting offer, Cloud Temple assumes the responsibility starting from the equipment located at the top of the rack, commonly referred to as "top of rack".*

## Reversibility

| Activity                                                                                                                                                          | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Plan the reversibility project and choose the target infrastructures                                                                                              | __RA__      | __I__             |
| Implement transition operations, whether they involve manual extraction, the use of APIs, or any other third-party method compatible with the Cloud Temple platform | __RA__      | __I__             |
| Transfer data while controlling the repercussions of the migration on the quality of service provided by the client's information system                           | __RA__      |                   | 
| Proceed with the dismantling of the Private Cloud configurations and associated options for the client following the contract termination                          | __I__       | __RA__            |
| Perform secure data wiping on storage media and provide a certificate                                                                                            | __I__       | __RA__            |