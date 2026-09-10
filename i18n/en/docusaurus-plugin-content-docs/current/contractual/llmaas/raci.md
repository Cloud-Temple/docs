---
title: Responsibility Matrix - LLMaaS
displayed_sidebar: docSidebar
---


Here is the RACI for the shared responsibility between the client and Cloud Temple for the use of the LLM as a Service (LLMaaS) platform.

## Definition of the different roles

We remind you here of the different RACI roles:

| Role         | Description                              |
| ------------ | ---------------------------------------- |
| (R) Responsible | __R__esponsible for the process          |
| (A) Approves | __A__pproves the process execution       |
| (C) Consulted | __C__onsulted during the process         |
| (I) Informed  | __I__nformed of the process results      |

## Define your requirements

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Validate that the LLMaaS service meets the application requirements   | __RA__      | __CI__            |
| Subscribe to the service and select a billing tier                    | __RA__      | __I__             |

## Implement the Service

| Activity                                                                           | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------------------------- | ----------- | ----------------- |
| Ensure operational readiness of the LLMaaS platform (API, GPU)                     | __I__       | __RA__            |
| Ensure security readiness of the LLMaaS platform                                   | __I__       | __RA__            |
| Manage API access keys (creation, rotation, revocation)                            | __RA__      |                   |
| Develop and maintain the client application code                                   | __RA__      |                   |

## Recurring Operations

| Activity                                                         | Client Role | Cloud Temple Role |
| ---------------------------------------------------------------- | ----------- | ----------------- |
| Ensure LLMaaS API availability                                   | __I__       | __RA__            |
| Monitor platform and model operation                             | __I__       | __RA__            |
| Manage LLMaaS platform incidents                                 | __I__       | __RA__            |
| Manage LLMaaS platform problems                                  | __I__       | __RA__            |
| Manage GPU infrastructure capacity                               | __I__       | __RA__            |
| Manage model updates (additions, deprecations)                   | __C, I__    | __RA__            |
| Track consumption and billing                                    | __RA__      | __I__             |

## Security Management

| Activity                                                                    | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Secure physical infrastructure and LLMaaS platform                          | __I__       | __RA__            |
| Manage access and permissions for application end users                     | __RA__      |                   |
| Secure data and prompts sent to the API                                     | __RA__      | __C__             |
| Ensure confidentiality of data processed by models                          | __R__       | __A__             |
| Manage compliance of the final application (GDPR, etc.)                     | __RA__      | __I__             |

## Business Continuity

| Activity                                                              | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------- | ----------- | ----------------- |
| Ensure business continuity of the LLMaaS platform              | __I__       | __RA__            |
| Ensure backup of client application data            | __RA__      |                   |
| Maintain the business continuity plan for the client application | __RA__      |                   |

## Reversibility

| Activity                                                                    | Client Role | Cloud Temple Role |
| --------------------------------------------------------------------------- | ----------- | ----------------- |
| Implement the reversibility project (planning, tools, targets)              | __RA__      | __C__             |
| Export the client application's data and code                               | __RA__      |                   |
| Delete API keys and service access                                          | __RA__      |                   |