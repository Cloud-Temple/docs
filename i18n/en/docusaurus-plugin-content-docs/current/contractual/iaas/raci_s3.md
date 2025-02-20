---
title: IaaS Responsibility Matrix - S3 Object Storage
---

Here is the RACI for the shared responsibility between the client and Cloud Temple for the use of the Cloud Temple S3 Object Storage platform.

## Definition of Different Roles

We remind you here of the different roles in the RACI:

| Role         | Description                              |
|--------------|------------------------------------------|
| (R) Responsible  | __R__esponsible for the process                 |
| (A) Accountable | __A__pproves the realization of the process |
| (C) Consulted | __C__onsulted during the process        |
| (I) Informed  | __I__nformed of the process results   |

## Define Your Need

| Activity                                                                            | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validate that the S3 Object Storage product meets the application’s needs | __RA__      | __CI__            | 
| Subscribe to the service with the necessary information                           | __RA__      | __I__             | 

## Implement the Service

| Activity                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational condition maintenance of the S3 Object Storage platform | __I__       | __RA__            | 
| Ensure security condition maintenance of the S3 Object Storage platform    | __I__       | __RA__            | 
| Create objects                                                                   | __RA__      |                   | 
| Create access keys and assign associated rights                            | __RA__      |                   |

## Recurring Operations

| Activity                                                                           | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational condition maintenance of the S3 Object Storage platform | __I__       | __RA__            | 
| Ensure security condition maintenance of the S3 Object Storage platform    | __I__       | __RA__            | 
| Ensure service accessibility of S3 Object Storage                               | __I__       | __RA__            |
| Retain and provide logs for the S3 Object Storage platform  |             | __RA__            |
| Monitor the proper functioning of the S3 Object Storage platform                | __I__       | __RA__            |
| Track the lifecycle of objects                                                  | __RA__      |                   | 
| Track the lifecycle of rights on objects                                   | __RA__      |                   |
| Manage the logical security of objects                                               | __RA__      |                   |
| Manage incidents on the S3 Object Storage service                              | __I__       | __RA__            |
| Manage problems on the S3 Object Storage service                              | __I__       | __RA__            |
| Manage capacity on the S3 Object Storage service                                | __I__       | __RA__            |
| Manage changes on the S3 Object Storage service                             | __I__       | __RA__            |

## Encryption Management

| Activity                                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage data encryption before deployment on the S3 Object Storage service      | __RA__      |                   |
| Manage encryption on the storage space allocated by the S3 Object Storage service    | __A__       | __R__             | 

## Business Continuity

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure business continuity of the S3 Object Storage service                         | __I__       | __RA__            |
| Ensure data backup                                                         | __RA__      |                   |
| Perform regular data restore tests                                | __RA__      |                   | 
| Maintain the business continuity and disaster recovery plan for applications | __RA__      |                   | 

## Reversibility

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implement the reversibility project (planning, tools, methods, targets,...) | __RA__      |                   |
| Export data from the S3 Object Storage service                              | __RA__      |                   |
| Delete data from the S3 Object Storage service                                | __RA__      |                   | 
| Destroy storage media at end of life or in case of error                              |             | __RA__            |