---
title: Responsibility Matrix - LLMaaS
---

Here is the RACI of the responsibility sharing between the client and Cloud Temple for the use of the LLM as a Service (LLMaaS) platform.

## Definition of different roles

We recall here the different RACI roles:

| Role         | Description                              |
| ------------ | ---------------------------------------- |
| (R) Responsible | __R__esponsible for the process         |
| (A) Approver  | __A__pproves the execution of the process |
| (C) Consulted | __C__onsulted during the process        |
| (I) Informed  | __I__nformed of the process results     |

## Define Your Need

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Validate that the LLMaaS service meets the application's needs         | __RA__      | __CI__            |
| Subscribe to the service and select a billing third party             | __RA__      | __I__             |

## Implement the service

| Activity                                                                           | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------------------------- | ----------- | ----------------- |
| Ensure the operational maintenance of the LLMaaS platform (API, GPU)              | __I__       | __RA__            |
| Ensure the security maintenance of the LLMaaS platform                             | __I__       | __RA__            |
| Manage API access keys (creation, rotation, revocation)                            | __RA__      |                   |
| Develop and maintain the client application code                                   | __RA__      |                   |

## Recurring Operations

| Activity                                                         | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Ensure the availability of the LLMaaS API                         | __I__       | __RA__            |
| Monitor the proper functioning of the platform and models       | __I__       | __RA__            |
| Handle incidents on the LLMaaS platform                           | __I__       | __RA__            |
| Handle issues on the LLMaaS platform                              | __I__       | __RA__            |
| Manage GPU infrastructure capacity                                | __I__       | __RA__            |
| Manage model updates (addition, deprecation)                     | __C, I__    | __RA__            |
| Track consumption and billing                                     | __RA__      | __I__             |

## Security Management

| Activity                                                                    | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Secure the physical infrastructure and the LLMaaS platform                 | __I__       | __RA__            |
| Manage access and permissions for end-users of the application             | __RA__      |                   |
| Secure the data and prompts sent to the API                                | __RA__      | __C__             |
| Ensure the confidentiality of data processed by the models                 | __R__       | __A__             |
| Manage the compliance of the final application (GDPR, etc.)                | __RA__      | __I__             |

## Business Continuity

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Ensure the business continuity of the LLMaaS platform              | __I__       | __RA__            |
| Ensure the backup of the customer application data            | __RA__      |                   |
| Maintain the business continuity plan for the customer application | __RA__      |                   |

## Reversibility

| Activity                                                                    | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Implement the reversibility project (planning, tools, targets)              | __RA__      | __C__             |
| Export the client application data and code                                 | __RA__      |                   |
| Delete API keys and service access                                          | __RA__      |                   |