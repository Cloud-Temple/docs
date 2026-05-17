---
title: Getting Started Guide
---

Welcome to the **Managed MariaDB** Cloud Temple Getting Started Guide.

The objective of this section is to guide you to the resources needed to get started with your product.

## Before you begin

Ensure you have the access credentials provided by Cloud-Temple.

Ensure that network traffic is open to the IPs provided to you.

## Access your Managed MariaDB cluster

Depending on the chosen deployment model, you have one or more endpoints.

**StandAlone** : 1 endpoint (1 IP), accessible on port 3306.

**Distributed** :

- 1 Maxscale Endpoint, accessible on port 3306, capable of distributing your queries to the most suitable instances (this is the preferred endpoint)
- 1 R/W Endpoint, accessible on port 3306, which points to the primary instance, for read-write access.
- 1 R/O Endpoint, accessible on port 3306, which points to all instances, for read-only access.

## Your permissions

You do not have any permissions at the database engine level (neither `SUPER` nor `ALL_PRIVILEGE`).

You cannot reconfigure the engine or its options, nor install the performance_schema.

Requests to add databases, users, or grants must be submitted to the Cloud-Temple teams.