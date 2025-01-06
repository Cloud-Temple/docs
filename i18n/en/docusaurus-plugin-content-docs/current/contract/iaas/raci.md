---
title: IaaS Responsibility Matrix
---

Here is the **RACI** model defining the division of responsibilities between the client and Cloud Temple for using Cloud Temple's IaaS infrastructures.

## Definition of Different Roles

We recall here the different roles of the RACI:

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Responsible  | __R__esponsible for executing the process                                           |
| (A) Accountable  | __A__pproves the completion of the process                                          |
| (C) Consulted    | __C__onsulted during the process                                                    |
| (I) Informed     | __I__nformed of the process results (via tools, portal, or messaging)               |

## Define Your Needs


| Activity                                                                                        | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                                  | __RA__      | __CI__            | 
| Define the number of tenants and the number of availability zones for each tenant              | __RA__      | __CI__            | 
| Define your overall disaster recovery or business continuity strategy                          | __RA__      | __CI__            | 
| Properly size your Cloud Temple platform (compute, storage, network, backup, etc.)             | __RA__      | __CI__            | 
| Subscribe to services with the necessary information                                           | __RA__      | __I__             | 

## Initial implementation of your Cloud Temple tenants
| Activity                                                                                                    | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical datacenters**                                                        |             | __RA__            | 
| Ensure the implementation of **compute** infrastructures                                                     | __I__       | __RA__            | 
| Ensure the implementation of **storage** infrastructures                                                     | __I__       | __RA__            | 
| Ensure the implementation of connectivity to the **backbone network(1)**                                     | __I__       | __RA__            | 
| Acquire and maintain essential software licenses for the operation of the Cloud Temple platform |             | __RA__            | 
| Implement the basic configuration of your Cloud Temple tenants                                     | __CI__      | __RA__            | 
| Implement the initial configuration for the backup service                                         | __CI__      | __RA__            |
| *If subscribed:* implement the initial network configuration for Internet and Firewall services     | __CI__      | __RA__            |
| Provide the required assistance for the onboarding of your Cloud Temple environments                | __I__       | __RA__            | 
| Make the final configuration adjustments to the service after its delivery                         | __RA__      | __C__             | 

| Configure an external authentication repository for the Cloud Temple console                                | __RA__      | __C__             |
| Create users for each tenant in the Cloud Temple console and assign permissions                              | __RA__      |                   |
| Validate the compliance of the delivered platform with the SecNumCloud repository                            | __I__       | __RA__            |
| Validate the compliance of the delivered platform with the required specifications                           | __RA__      | __CI__            |

*(1) The backbone network constitutes the central infrastructure of Cloud Temple, providing a backbone on which
specific client networks rest, which are integrated and supported by this main infrastructure.*

## Integrate your information system into your Cloud Temple environments
| Activity                                                                                                                      | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Create, install, update your virtual machines                                                                                 | __RA__      |                    | 
| Install and configure software and middleware on your virtual machines                                                        | __RA__      |                    | 
| Purchase and hold licenses and usage rights <br/>for the operating systems of your virtual machines                            | __RA__      |                    | 
| Configure the network for each of your virtual machines                                                                       | __RA__      |                    |
| Ensure that each virtual machine is associated with a coherent backup plan                                                     | __RA__      | __C__             | 
| Ensure that each virtual machine is associated with a <br/>coherent disaster recovery or business continuity plan             | __RA__      | __C__             | 
| Implement an antivirus protection strategy on your virtual machines                                                           | __RA__      |                   | 
| Implement a metrology and monitoring solution on your virtual machines                                                        | __RA__      |                   | 
| Define the TAG policy for your virtual machines                                                                               | __RA__      |                   | 

## Recurring Operations

### Access and Identity Management
| Activity                                                                                                                             | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure accessibility of the Cloud Temple Console service and the associated API                                                      |             | __RA__            |
| Ensure accessibility of the information system deployed on your virtual machines                                                     | __RA__      |                   |
| Manage physical and logical authorizations for Cloud Temple teams on SecNumCloud infrastructures.                                    |             | __RA__            |
| Administrer les accès et la politique de sécurité associée liés à l'interface de la console Cloud Temple et à son API                | __RA__      |                   |
| Administrer les accès et la politique de sécurité associée au système d'information<br/> hébergé au sein de vos tenants Cloud Temple | __RA__      |                   |

### operational and security maintenance

Activities aimed at maintaining operational and secure conditions for the infrastructures and services 
offered by Cloud Temple, as part of its IaaS offering, are carried out with the objective of compliance with SecNumCloud qualification.

| Activity                                                                                                          | Customer Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Ensure the operational maintenance of **physical datacenter** infrastructures                       | __I__       | __RA__            | 
| Ensure the security maintenance of **physical datacenter** infrastructures                          | __I__       | __RA__            | 
| Ensure the operational maintenance of **compute** infrastructures                                   | __I__       | __RA__            | 
| Ensure the security maintenance of **compute (2)** infrastructures                                  | __RA__      | __CI__            | 
| Ensure the operational maintenance of **storage** infrastructures                                   | __I__       | __RA__            | 
| Ensure the security maintenance of **storage** infrastructures                                      | __I__       | __RA__            |
| Ensure the operational maintenance of **backbone network** infrastructures                                        | __I__       | __RA__            | 
| Ensure the security maintenance of **backbone network** infrastructures                                           | __I__       | __RA__            |
| Ensure the operational maintenance of virtual machines deployed in client tenants **(3)**                         | __RA__      |                   |
| Ensure the security maintenance of virtual machines deployed in client tenants **(3)**                            | __RA__      |                   |
| Ensure the operational maintenance of middleware deployed in client tenants                                        | __RA__      |                   |
| Ensure the security maintenance of middleware deployed in client tenants                                           | __RA__      |                   |

*(2) Cloud Temple regularly provides the latest versions of the operating system for your hypervisors. 
However, since Cloud Temple is not aware of the specifics of your production environments and the requirements related to your workloads, __the decision to update the operating system of your hypervisors, thus resulting in a restart, is up to you__. This operation can be performed via the Cloud Temple console or through the API. Professional services are available if you wish Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers license packages for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and works in collaboration with your teams for the initial configuration during the implementation phase. However, the responsibility for maintaining operational and security conditions rests with you during the operational phase.*

courante. Des services professionnels sont disponibles si vous souhaitez que Cloud Temple prenne en charge certaines opérations.*

### Change, Incident, Problem, and Capacity Management

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Manage incidents on **physical datacenter** infrastructures                                                          | __I__       | __RA__             |
| Manage problems on **physical datacenter** infrastructures                                                           |             | __RA__             |
| Manage capacities on **physical datacenter** infrastructures                                                         |             | __RA__             |
| Manage incidents on **compute** infrastructures                                                                      | __I__       | __RA__            |
| Manage problems on **compute** infrastructures                                                                      |             | __RA__            |
| Manage capacities on **compute** infrastructures                                                                    | __RA__      | __CI__            |
| Manage incidents on **storage** infrastructures                                                                     | __I__       | __RA__            |
| Manage problems on **storage** infrastructures                                                                      |             | __RA__            |
| Manage capacities on **storage** infrastructures                                                                    | __RA__      | __CI__            |
| Managing incidents on **backbone network** infrastructures                                                             | __I__       | __RA__            |
| Managing issues on **backbone network** infrastructures                                                                |             | __RA__            |
| Managing capacities on **backbone network** infrastructures                                                            |             | __RA__            |
| Setting up a new virtual machine or creating a new application environment within a client tenant                     | __RA__      |                   |
| Modifying the configuration of deployed virtual machines                                                              | __RA__      |                   |
| Deleting a deployed virtual machine                                                                                   | __RA__      |                   |
| Prendre la décision d'ajouter, de modifier ou de retirer des ressources sur la plateforme Cloud Temple                | __RA__      | __CI__            |
| Exécuter la décision de modification des ressources sur la plateforme Cloud Temple                                    | __I__       | __RA__            |
| Appliquer les tags aux machines virtuelles conformément à la politique définie                                        | __RA__      |                   |

### Performance Management

| Activity                                                                                                                                              | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the monitoring of the proper functioning and reliability of all equipment involved in the provision of the qualified SecNumCloud service | __I__       | __RA__            |
| Monitor the performance of the physical resources for computing, storage, and network provided to your tenants __(4)__                         | __RI__      | __A__             |
| Supervise the performance of virtual machines supporting your environments                                                                       | __RA__      | __I__             |

*(4) The Cloud Temple platform adopts a philosophy focused on __providing dedicated infrastructure__ for __computing__ needs (with physical blades), __storage__ (via dedicated LUNs on SANs),
and __network__ (including firewalls and load balancers). These dedicated resources are made available to the client, whose use
et la charge résultante dépendent directement de l'usage qu'il en fait. Il incombe donc au client de mettre en place et de gérer les systèmes de supervision 
et de métrologie nécessaires pour assurer le suivi du fonctionnement optimal de son système d'information.*

### Backup Management and Disaster Recovery on Integrated Backup

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational condition of the **backup** infrastructures integrated into the Cloud Temple platform **(5)**                       |             | __RA__            |
| Ensure the security maintenance of **backup** infrastructures integrated into the Cloud Temple platform                | __I__       | __RA__            |
| Manage incidents on **backup** infrastructures integrated into the Cloud Temple platform                                | __I__       | __RA__            |
| Manage problems on **backup** infrastructures integrated into the Cloud Temple platform                                 |             | __RA__            |
| Manage capacities on **backup** infrastructures integrated into the Cloud Temple platform                               | __AI__      | __RC__            |
| Ensure operational maintenance on the chosen backup solution within its tenants by the customer **(6)**                 | __RA__      |                   |
| Ensure the security maintenance on the chosen backup solution within the client's tenants           | __RA__      |                   |
| Manage incidents on the chosen backup solution within the client's tenants                           | __RA__      |                   |
| Manage problems on the chosen backup solution within the client's tenants                            | __RA__      |                   |
| Manage capacities on the chosen backup solution within the client's tenants                          | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                              | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                   | __RA__      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                                    | __RA__      |                   |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy                                                          | __RA__      |                   |
| Conduct periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy                         | __RA__      | __CI__            |

*(5) As of January 1, 2024, the backup solution integrated into the Cloud Temple platform is IBM Spectrum Protect Plus. 
This solution is fully automated and can be managed via the Cloud Temple console or the Cloud Temple API.*
### Backup and Disaster Recovery Management for Third-Party Platforms within a Client Tenant

| Activity                                                                                                                                | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational maintenance on the chosen backup solution within their tenants by the client **(6)**                                | __RA__      |                   |
| Ensure security maintenance on the chosen backup solution within their tenants by the client                                            | __RA__      |                   |
| Manage incidents on the chosen backup solution within their tenants by the client                                                       | __RA__      |                   |
| Manage issues on the selected backup solution within the client's tenants                                                              | __RA__      |                   |
| Manage capacities on the selected backup solution within the client's tenants                                                          | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                                                 | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                      | __RA__      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                                       | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                  | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy                | __RA__      | __CI__            |

*(6) This applies to any additional backup solution implemented in the client's environments and managed by the client. 
Cloud Temple offers professional services for those who wish to delegate certain operations to Cloud Temple.* 

### Documentation and Contract Management

| Activity                                                                                                                                                        | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the commercial and contractual management of the client, including the preparation of quotes, order processing, and billing management                  | __I__       | __RA__            |
| Ensure contractual follow-up of the service, including quote validation, delivery tracking, and billing monitoring                                             | __RA__      | __I__             |
| Ensure maintenance and availability of the inventory of resources provided by Cloud Temple related to the SecNumCloud offer                                    | __I__       | __RA__            |
| Ensure the maintenance and availability of technical documentation related to the SecNumCloud offer                                                              | __I__       | __RA__            |

| Track the lifecycle of virtual machines deployed in your Cloud Temple environments<br/> via your CMDB (Configuration Management Database) | __RA__      |                   | 
| Keep the access policy to the Cloud Temple console interface or Cloud Temple API up to date                                                            | __RA__      |                   |

### Log Management

| Activity                                                                                                                 | Client Role  | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------|--------------|-------------------|
| Preserve and provide access to the logs of the Cloud Temple IaaS platform **(7)**                                    |              | __RA__            |
| Retain and make available the logs of the information system<br/> hosted within your Cloud Temple tenants | __RA__      |                   |

*(7) As of January 1, 2024, the retention period for platform logs is one year.*

## Client network connectivity (mpls, dedicated fiber, ipsec, ...)

| Activity                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to operator network connectivity to access a physical Cloud Temple datacenter (8)         | __RA__      | __CI__            |
| Manage the IP addressing plan                                                                        | __RA__      | __I__             |
| Manage incidents on client operator network links                                                    | __RA__      |                   |
| Manage problems on client operator network links                                                     | __RA__      | __CI__            |
| Manage capacities on client operator network links                                                   | __RA__      | __CI__            |

*(8) Cloud Temple assumes responsibility for the network regarding its backbone infrastructure, its collection points as well as the datacenter interconnection points, thereby guaranteeing connectivity between these points and its backbone network. In the physical bay hosting offer, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly referred to as "top of rack".*

## Reversibility
| Activity                                                                                                                                                                                      | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Plan the reversibility project and choose the target infrastructures                                                                                                                           | __RA__      | __I__             |
| Implement transition operations, whether they involve manual extraction, the use of APIs <br/>or any other third-party method compatible with the Cloud Temple platform.                      | __RA__      | __I__             |
| Transfer data while controlling the impact of migration on the quality of service provided <br/>by the client's information system.                                      | __RA__      |                   | 
| Proceed with the dismantling of Private Cloud configurations and associated options for the client, <br/>following contract termination.                                                  | __I__       | __RA__            |
| Perform secure data deletion on storage media and provide certification                                                                                             | __I__       | __RA__            |