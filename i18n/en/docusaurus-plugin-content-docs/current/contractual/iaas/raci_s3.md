---
title: IaaS Responsibility Matrix - S3 Object Storage
slug: /contractual/storage/raci
displayed_sidebar: docSidebar
---


Here is the RACI matrix for the shared responsibility model between the client and Cloud Temple for using the Cloud Temple S3 Object Storage platform.

## Definition of the different roles

Here is a reminder of the different RACI roles:

| Role         | Description                              |
|--------------|------------------------------------------|
| (R) Executes  | __R__uns the process                 |
| (A) Approves  | __A__pproves the process execution |
| (C) Consults  | __C__onsulted during the process        |
| (I) Informed  | __I__nformed of the process results   |

## Define your requirements

| Activity                                                                            | Client Role | Cloud Temple Role |
|----------------------------------------------------------------------------------|-------------|-------------------|
| Validate that the S3 Object Storage product meets the application's requirements | __RA__      | __CI__            |
| Subscribe to the service with the necessary information                          | __RA__      | __I__             |

## Implement the Service

| Activity                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Maintain operational readiness of the S3 Object Storage platform | __I__       | __RA__            |
| Maintain security readiness of the S3 Object Storage platform    | __I__       | __RA__            |
| Create objects                                                                   | __RA__      |                   |
| Create access keys and assign associated permissions                            | __RA__      |                   |

## Recurring Operations

| Activity                                                                           | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------|-------------|-------------------|
| Ensure operational maintenance of the S3 Object Storage platform | __I__       | __RA__            |
| Ensure security maintenance of the S3 Object Storage platform    | __I__       | __RA__            |
| Ensure accessibility of the S3 Object Storage service                               | __I__       | __RA__            |
| Retain and make available the logs of the S3 Object Storage platform  |             | __RA__            |
| Monitor the proper functioning of the S3 Object Storage platform                | __I__       | __RA__            |
| Track the lifecycle of objects                                                  | __RA__      |                   |
| Track the lifecycle of object permissions                                   | __RA__      |                   |
| Manage logical security of objects                                               | __RA__      |                   |
| Manage incidents on the S3 Object Storage service                              | __I__       | __RA__            |
| Manage problems on the S3 Object Storage service                              | __I__       | __RA__            |
| Manage capacity for the S3 Object Storage service                                | __I__       | __RA__            |
| Manage changes for the S3 Object Storage service                             | __I__       | __RA__            |

## Encryption Management

| Activity                                                                                 | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------|-------------|-------------------|
| Manage data encryption before deployment to the S3 Object Storage service                | __RA__      |                   |
| Manage encryption on the storage space allocated by the S3 Object Storage service        | __A__       | __R__             |

## Business Continuity

| Activity | Client Role | Cloud Temple Role |
|---|---|---|
| Ensure business continuity of the S3 object storage service | __I__ | __RA__ |
| Ensure data backup | __RA__ | |
| Perform periodic data restoration tests | __RA__ | |
| Maintain the business continuity and disaster recovery plan for applications | __RA__ | |

## Reversibility

| Activity                                                                                  | Client Role | Cloud Temple Role |
|-------------------------------------------------------------------------------------------|-------------|-------------------|
| Implement the reversibility project (planning, tools, methods, targets,...)               | __RA__      |                   |
| Export data from the S3 Object Storage service                                            | __RA__      |                   |
| Delete data on the S3 Object Storage service                                              | __RA__      |                   |
| Destroy storage media at end of life or in case of error                                  |             | __RA__            |