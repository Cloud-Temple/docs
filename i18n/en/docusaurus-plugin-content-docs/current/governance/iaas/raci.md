---
title: Responsibility Matrix IaaS
---


Below is the **RACI** model defining the distribution of responsibilities between the client and Cloud Temple for the use of Cloud Temple's IaaS infrastructures.

## Definition of different roles

We recall here the different roles of the RACI:

| Role         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Responsible  | __R__esponsible for the process                                                              |
| (A) Accountable | __A__ccountable for the execution of the process                                              |
| (C) Consulted | __C__onsulted during the process                                                     |
| (I) Informed  | __I__nformed of the results of the process (via the tool, portal or messaging) |

## Defining your needs

| Activity                                                                                       | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Define the overall architecture of your Cloud Temple platform                                | __RA__      | __CI__            |
| Define the number of tenants and the number of availability zones for each tenant          | __RA__      | __CI__            |
| Define your global disaster recovery or business continuity strategy                         | __RA__      | __CI__            |
| Properly size your Cloud Temple platform (compute, storage, network, backup,...) | __RA__      | __CI__            |
| Subscribe to services with the necessary information                                       | __RA__      | __I__             |

## Initial implementation of your Cloud Temple tenants

| Activity                                                                                                     | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the implementation of **physical data centers**                                                      |             | __RA__            |
| Ensure the implementation of **compute** infrastructures                                                     | __I__       | __RA__            |
| Ensure the implementation of **storage** infrastructures                                                   | __I__       | __RA__            |
| Ensure connectivity to the **backbone(1) network**                                       | __I__       | __RA__            |
| Acquire and maintain essential software licenses for the functioning of the Cloud Temple platform |             | __RA__            |
| Implement the basic configuration of your Cloud Temple tenants                                             | __CI__      | __RA__            |
| Implement initial configuration for backup service                                          | __CI__      | __RA__            |
| *If subscribed:* implement initial network configuration for Internet and Firewall services  | __CI__      | __RA__            |
| Provide the necessary support for the understanding of your Cloud Temple environments                         | __I__       | __RA__            |
| Carry out final service configuration adjustments after delivery                              | __RA__      | __C__             |
| Configure an external authentication repository for the Cloud Temple console                            | __RA__      | __C__             |
| Create users for each tenant in the Cloud Temple console and assign rights                  | __RA__      |                   |
| Validate the compliance of the delivered platform with the SecNumCloud reference                                | __I__       | __RA__            |
| Validate the compliance of the delivered platform with the required specifications                               | __RA__      | __CI__            |

*(1) The backbone network constitutes the central infrastructure of Cloud Temple, providing a backbone on which
specific client networks rely, which are integrated and supported by this main infrastructure.*

## Integrate your information system into your Cloud Temple environments

| Activity                                                                                                                      | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Create, install, update your virtual machines                                                                       | __RA__      |                   |
| Install and configure software and middleware on your virtual machines                                              | __RA__      |                   |
| Buy and hold licenses and rights of use <br/>for the operating systems of your virtual machines  | __RA__      |                   |
| Configure the network for each of your virtual machines                                                                     | __RA__      |                   |
| Ensure that each virtual machine is associated with a consistent backup plan                                          | __RA__      | __C__             |
| Ensure that each virtual machine is associated with a <br/>disaster recovery or business continuity plan | __RA__      | __C__             |
| Implement an antiviral protection strategy on your virtual machines                                                | __RA__      |                   |
| Implement a metrology and monitoring solution on your virtual machines                                     | __RA__      |                   |
| Define the TAG policy for your virtual machines                                                                        | __RA__      |                   |

## Recurring operations

### Access and identity management

| Activity                                                                                                                             | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the availability of the Cloud Temple Console service and the associated API                                                         |             | __RA__            |
| Ensure the availability of the information system deployed on your virtual machines                                                 | __RA__      |                   |
| Manage physical and logical permissions of Cloud Temple teams to SecNumCloud infrastructures                              |             | __RA__            |
| Administer access and associated security policy related to Cloud Temple console interface and its API                | __RA__      |                   |
| Administer access and associated security policy for information system<br/> hosted within your Cloud Temple tenants | __RA__      |                   |

### Operational and security maintenance

Activities aimed at maintaining operational and security condition for the infrastructures and services
offered by Cloud Temple, within the framework of its IaaS offering, are carried out for the purpose of compliance with SecNumCloud qualification.

| Activity                                                                                                          | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational maintenance of **physical data centers** infrastructures                     | __I__       | __RA__            |
| Ensure security maintenance of **physical data centers** infrastructures                        | __I__       | __RA__            |
| Ensure operational maintenance of **compute** infrastructures                                    | __I__       | __RA__            |
| Ensure security maintenance of **compute (2)** infrastructures                                   | __RA__      | __CI__            |
| Ensure operational maintenance of **storage** infrastructures                                  | __I__       | __RA__            |
| Ensure security maintenance of **storage** infrastructures                                     | __I__       | __RA__            |
| Ensure operational maintenance of **backbone networks** infrastructures                          | __I__       | __RA__            |
| Ensure security maintenance of **backbone networks** infrastructures                             | __I__       | __RA__            |
| Ensure operational maintenance of virtual machines deployed in client tenants **(3)** | __RA__      |                   |
| Ensure security maintenance of virtual machines deployed in client tenants **(3)**    | __RA__      |                   |
| Ensure operational maintenance of middleware deployed in client tenants                | __RA__      |                   |

| Ensuring the maintenance of the security conditions of the middleware deployed in the client tenants                  | __RA__      |                   |

*(2) Cloud Temple regularly provides the most recent versions of the operating system for your hypervisors.
Nevertheless, since Cloud Temple is not informed about the specifics of your production environments and the requirements
related to your workloads, __the decision to update the operating system of your hypervisors, thus causing a reboot, is up to you__.
This operation can be done through the Cloud Temple console or via the API. Professional services are available if you want Cloud Temple to handle certain operations.*

*(3) Cloud Temple offers license packs for firewalls (Fortinet, Stormshield) and load balancers (HAProxy), and works in collaboration with your teams for initial configuration during the implementation phase. However,
the responsibility for maintaining operational and security conditions lies with you during the current operational phase. Professional services are available if you want Cloud Temple to handle certain operations.*

### Change, Incident, Problem, and Capacity Management

| Activity                                                                                                              | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage incidents on **physical datacenter** infrastructures                                                           | __I__       | __RA__            |
| Manage problems on **physical datacenter** infrastructures                                                            |             | __RA__            |
| Manage capacities on **physical datacenter** infrastructures                                                          |             | __RA__            |
| Manage incidents on **compute** infrastructures                                                                       | __I__       | __RA__            |
| Manage problems on **compute** infrastructures                                                                        |             | __RA__            |
| Manage capacities on **compute** infrastructures                                                                      | __RA__      | __CI__            |
| Manage incidents on **storage** infrastructures                                                                       | __I__       | __RA__            |
| Manage problems on **storage** infrastructures                                                                        |             | __RA__            |
| Manage capacities on **storage** infrastructures                                                                      | __RA__      | __CI__            |
| Manage incidents on **backbone network** infrastructures                                                              | __I__       | __RA__            |
| Manage problems on **backbone network** infrastructures                                                               |             | __RA__            |
| Manage capacities on **backbone network** infrastructures                                                             |             | __RA__            |
| Deploy a new virtual machine or create a new application environment within a client tenant                           | __RA__      |                   |
| Modify the configuration of deployed virtual machines                                                                 | __RA__      |                   |
| Delete a deployed virtual machine                                                                                     | __RA__      |                   |
| Decide to add, modify, or remove resources on the Cloud Temple platform                                               | __RA__      | __CI__            |
| Execute the resource modification decision on the Cloud Temple platform                                               | __I__       | __RA__            |
| Apply tags to virtual machines in accordance with the defined policy                                                  | __RA__      |                   |

### Performance Management

| Activity                                                                                                                                              | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure monitoring of the proper functioning and reliability of all equipment involved in the SecNumCloud-qualified service provision                  | __I__       | __RA__            |
| Track the performance of the physical compute, storage, and network resources made available to your tenants __(4)__                                   | __RI__      | __A__             |
| Monitor the performance of the virtual machines supporting your environments                                                                           | __RA__      | __I__             |

*(4) The Cloud Temple platform adopts a philosophy focused on __providing dedicated infrastructures__ for the needs of __compute__ (with physical blades), __storage__ (via dedicated LUNs on SANs),
and __network__ (including firewalls and load balancers). These dedicated resources are made available to the client, whose use and resulting load depend directly on their usage. Therefore, it is the client's responsibility to implement and manage the necessary monitoring
and metrology systems to ensure the optimal functioning of their information system.*

### Backup and Disaster Recovery Management on Integrated Backup

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of **backup** infrastructures integrated into the Cloud Temple platform **(5)**                        |             | __RA__            |
| Ensure the security maintenance of **backup** infrastructures integrated into the Cloud Temple platform                                   | __I__       | __RA__            |
| Manage incidents on the **backup** infrastructures integrated into the Cloud Temple platform                                              | __I__       | __RA__            |
| Manage problems on the **backup** infrastructures integrated into the Cloud Temple platform                                               |             | __RA__            |
| Manage capacities on the **backup** infrastructures integrated into the Cloud Temple platform                                             | __AI__      | __RC__            |
| Ensure the operational maintenance of the backup solution chosen within their tenants by the client **(6)**                              | __RA__      |                   |
| Ensure the security maintenance of the backup solution chosen within their tenants by the client                                          | __RA__      |                   |
| Manage incidents on the backup solution chosen within their tenants by the client                                                         | __RA__      |                   |
| Manage problems on the backup solution chosen within their tenants by the client                                                          | __RA__      |                   |
| Manage capacities on the backup solution chosen within their tenants by the client                                                        | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                                                   | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                                        | __RA__      |                   |
| Ensure that business continuity and disaster recovery plans are consistent with the data lifecycle                                        | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the backup strategy                                                               | __RA__      |                   |
| Perform periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy                             | __RA__      | __CI__            |

*(5) As of January 1, 2024, the integrated backup solution on the Cloud Temple platform is IBM Spectrum Protect Plus.
This solution is fully automated and can be managed via the Cloud Temple console or the Cloud Temple API.*

### Backup and Disaster Recovery Management for Third-party Platforms within a Client Tenant

| Activity                                                                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational condition maintenance on the chosen backup solution within the client's tenants **(6)**          | __RA__      |                   |
| Ensure security condition maintenance on the chosen backup solution within the client's tenants                     | __RA__      |                   |
| Manage incidents on the chosen backup solution within the client's tenants                                          | __RA__      |                   |
| Manage problems on the chosen backup solution within the client's tenants                                           | __RA__      |                   |
| Manage capacities on the chosen backup solution within the client's tenants                                         | __RA__      | __CI__            |
| Manage the lifecycle of backup policies                                                                             | __RA__      |                   |
| Ensure that backup policies are consistent with the data lifecycle                                                  | __RA__      |                   |
| Ensure that business continuity or disaster recovery plans are consistent with the data lifecycle                   | __RA__      |                   |
| Conduct periodic tests to evaluate the effectiveness of the backup strategy                                         | __RA__      |                   |
| Conduct periodic tests to evaluate the effectiveness of the disaster recovery or business continuity strategy       | __RA__      | __CI__            |

*(6) This concerns any additional backup solution implemented within the client's environments and managed by the client.
Cloud Temple offers professional services for those who wish to delegate certain operations to Cloud Temple.*

### Documentation and Contract Management

| Activity                                                                                                                                                   | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Ensure commercial and contractual management of the client, including the preparation of quotes, order processing, and billing management                  | __I__       | __RA__             |
| Ensure contractual follow-up of the service, including the validation of quotes, delivery tracking, and billing monitoring                                  | __RA__      | __I__              |
| Ensure the maintenance and availability of the inventory of resources provided by Cloud Temple related to the SecNumCloud offer                            | __I__       | __RA__             |
| Ensure the maintenance and availability of technical documentation related to the SecNumCloud offer                                                        | __I__       | __RA__             |
| Ensure the lifecycle management of virtual machines deployed in your Cloud Temple environments via your CMDB (Configuration Management Database)            | __RA__      |                    |
| Keep the access policy to the Cloud Temple console interface or the Cloud Temple API up to date                                                             | __RA__      |                    |

### Log Management

| Activity                                                                                                       | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Preserve and make available the logs of the Cloud Temple IaaS platform **(7)**                                 |             | __RA__             |
| Preserve and make available the logs of the information system hosted within your Cloud Temple tenants         | __RA__      |                    |

*(7) As of January 1, 2024, the retention period for platform logs is one year.*

## Client Network Connectivity (mpls, dedicated fiber, ipsec, ...)

| Activity                                                                                                         | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Subscribe to an operator network connectivity to access a Cloud Temple physical datacenter (8)                   | __RA__      | __CI__             |
| Manage the IP addressing plan                                                                                     | __RA__      | __I__              |
| Manage incidents on client operator network links                                                                 | __RA__      |                    |
| Manage problems on client operator network links                                                                  | __RA__      | __CI__             |
| Manage capacities on client operator network links                                                                | __RA__      | __CI__             |

*(8) Cloud Temple assumes network responsibility regarding its backbone infrastructure, collection points, and
datacenter interconnection points, thus ensuring connectivity between these points and its backbone network.
In the physical bay hosting offer, Cloud Temple assumes responsibility from the equipment located at the top of the rack, commonly called "top of rack."*

## Reversibility

| Activity                                                                                                                                     | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Plan the reversibility project and choose target infrastructures                                                                             | __RA__      | __I__              |
| Implement transition operations, whether they involve manual extraction, API use, or any other compatible third-party method with the Cloud Temple platform | __RA__      | __I__              |
| Transfer data while controlling the impact of migration on the quality of the service provided by the client's information system              | __RA__      |                    |
| Dismantle the configurations of the Private Cloud and associated options to the client, following contract termination                        | __I__       | __RA__             |
| Perform secure data wiping on storage media and provide a certificate                                                                         | __I__       | __RA__             |