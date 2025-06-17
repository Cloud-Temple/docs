---
title: IaaS Responsibility Matrix - S3 Object Storage
---

Here is the RACI of the responsibility sharing between the client and Cloud Temple for the use of the Cloud Temple S3 Object Storage platform.

## Definition of the different roles

Here are the different roles of the RACI:

| Role         | Description                              |
|--------------|------------------------------------------|
| (R) Responsible | __R__ealises the process                 |
| (A) Approves  | __A__pproves the realization of the process |
| (C) Consulted | __C__onsulted during the process        |
| (I) Informed  | __I__nformed of the process results     |

## Define your needs

| Activity                                                                            | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validate that the S3 Object Storage product is compliant with the application's needs | __RA__      | __CI__            |
| Subscribe to the service with the necessary information                           | __RA__      | __I__             |

## Implement the service

| Activity                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the S3 Object Storage platform              | __I__       | __RA__            |
| Ensure the security maintenance of the S3 Object Storage platform                 | __I__       | __RA__            |
| Create objects                                                                    | __RA__      |                   |
| Create access keys and assign associated rights                                   | __RA__      |                   |

## Recurring operations

| Activity                                                                           | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure the operational maintenance of the S3 Object Storage platform              | __I__       | __RA__            |
| Ensure the security maintenance of the S3 Object Storage platform                 | __I__       | __RA__            |
| Ensure the availability of the S3 Object Storage service                          | __I__       | __RA__            |
| Keep and make available the logs of the S3 Object Storage platform                |             | __RA__            |
| Monitor the proper functioning of the S3 Object Storage platform                  | __I__       | __RA__            |
| Track the lifecycle of objects                                                    | __RA__      |                   |
| Track the lifecycle of rights on objects                                          | __RA__      |                   |
| Manage the logical security of objects                                            | __RA__      |                   |
| Handle incidents on the S3 Object Storage service                                 | __I__       | __RA__            |
| Handle problems on the S3 Object Storage service                                  | __I__       | __RA__            |
| Manage capacity on the S3 Object Storage service                                  | __I__       | __RA__            |
| Manage evolutions on the S3 Object Storage service                                | __I__       | __RA__            |

## Encryption management

| Activity                                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage data encryption before deployment on the S3 Object Storage service                | __RA__      |                   |
| Manage encryption on the storage space allocated by the S3 Object Storage service        | __A__       | __R__             |

## Business continuity

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure business continuity of the S3 Object Storage service                               | __I__       | __RA__            |
| Ensure data backup                                                                        | __RA__      |                   |
| Perform periodic data restoration tests                                                   | __RA__      |                   |
| Maintain the business continuity and recovery plan for applications                       | __RA__      |                   |

## Reversibility

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implement the reversibility project (planning, tools, methods, targets, etc.)            | __RA__      |                   |
| Export data from the S3 Object Storage service                                            | __RA__      |                   |
| Delete data from the S3 Object Storage service                                            | __RA__      |                   |
| Destroy storage media at the end of life or in case of failure                            |             | __RA__            |