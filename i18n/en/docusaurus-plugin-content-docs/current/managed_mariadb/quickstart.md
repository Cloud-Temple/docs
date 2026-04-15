---
title: Getting Started Guide
---

Welcome to the **Managed MariaDB** Cloud Temple getting started guide.

The goal of this section is to guide you towards the resources needed to get started with your product.

## Before you begin

Make sure you have the access credentials provided by Cloud-Temple.

Make sure that network flows are open to the IPs provided to you.

## Accessing your Managed MariaDB cluster

Depending on the deployment model chosen, you have one or more endpoints.

**StandAlone**: 1 endpoint only (1 IP only), accessible on port 3306.

**Distributed**:

- 1 MaxScale Endpoint, accessible on port 3306, capable of distributing your queries to the most appropriate instances (this is the preferred endpoint)
- 1 R/W Endpoint, accessible on port 3306, which points to the primary instance, in read-write mode.
- 1 R/O Endpoint, accessible on port 3306, which points to all instances, in read-only mode.

## Your permissions

You have no permissions at the database engine level (neither `SUPER`, nor `ALL_PRIVILEGE`)

You cannot reconfigure the engine or its options, nor install the performance_schema.

Requests to add databases, users or grants must be submitted to the Cloud-Temple teams.
