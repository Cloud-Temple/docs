---
title: IaaS Responsibility Matrix - S3 Object Storage
---

Here is the RACI chart of the responsibility sharing between the client and Cloud Temple for the use of the Cloud Temple S3 Object Storage platform.

## Definition of Different Roles

We recall here the different roles of the RACI:

| Role          | Description                                |
|---------------|--------------------------------------------|
| (R) Responsible | __R__esponsible for executing the process             |
| (A) Accountable | __A__pproves the execution of the process |
| (C) Consulted  | __C__onsulted during the process           |
| (I) Informed   | __I__nformed of the results of the process  |

## Define Your Need

| Activity                                                                          | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------|-------------|--------------------|
| Validate that the Object Storage S3 product meets the application's needs         | __RA__      | __CI__            | 
| Subscribe to the service with the necessary information                           | __RA__      | __I__             | 

## Implement the service

| Activity                                                                          | Client Role | Cloud Temple Role |
|-----------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the Object Storage S3 platform              | __I__       | __RA__            | 
| Ensure the security maintenance of the Object Storage S3 platform                 | __I__       | __RA__            | 
| Create objects                                                                    | __RA__      |                   |
| Create access keys and assign associated rights                                     | __RA__      |                   |

## Recurring Operations

| Activity                                                                            | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the Object Storage S3 platform                | __I__       | __RA__            | 
| Ensure the security maintenance of the Object Storage S3 platform                   | __I__       | __RA__            | 
| Ensure the accessibility of the Object Storage S3 service                           | __I__       | __RA__            |
| Retain and provide access to the logs of the Object Storage S3 platform             |             | __RA__            |
| Monitor the proper functioning of the Object Storage S3 platform                    | __I__       | __RA__            |

| Track the lifecycle of objects                                                    | __RA__      |                   | 
| Track lifecycle of object rights                                                  | __RA__      |                   |
| Manage the logical security of objects                                             | __RA__      |                   |
| Manage incidents on the S3 Object Storage service                                  | __I__       | __RA__            |
| Manage problems on the S3 Object Storage service                                   | __I__       | __RA__            |
| Manage capacity on the S3 Object Storage service                                   | __I__       | __RA__            |
| Manage upgrades on the S3 Object Storage service                                   | __I__       | __RA__            |

## Encryption Management
| Activity                                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage data encryption before deploying on the Object Storage S3 service                 | __RA__      |                   |
| Manage encryption on the storage space allocated by the Object Storage S3 service        | __A__       | __R__             |

## Business Continuity

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the business continuity of the Object Storage S3 service                           | __I__       | __RA__            |
| Ensure data backup                                                                         | __RA__      |                   |
| Conduct periodic data restoration tests                                                    | __RA__      |                   | 
| Maintain the business continuity and disaster recovery plan for applications               | __RA__      |                   |

## Reversibility

| Activity                                                                                   | Client Role | Cloud Temple Role |
|--------------------------------------------------------------------------------------------|-------------|-------------------|
| Implement the reversibility project (planning, tools, methods, targets,...)                | __RA__      |                   |
| Export data from the S3 Object Storage service                                             | __RA__      |                   |
| Supprimer les données sur le service de Stockage Objets S3                                | __RA__      |                   | 
| Détruire les supports de stockage en fin de vie ou en erreur                              |             | __RA__            |