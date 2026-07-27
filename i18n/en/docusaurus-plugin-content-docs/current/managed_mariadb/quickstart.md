---
title: Getting Started Guide
---

Welcome to the **Managed MariaDB** Getting Started Guide for Cloud Temple.

The goal of this section is to direct you to the resources needed to get started with your product.

## Before you begin

Ensure you have the access provided by Cloud-Temple.

Ensure that network traffic is open to the IPs provided to you.

> **Deployment prerequisites** : This deployment requires a fully installed managed Kubernetes cluster, with the Prometheus and Grafana stack configured to enable full telemetry and the associated Grafana dashboard.

Each cluster or server is deployed in isolation by the MariaDB operator in a dedicated Kubernetes namespace.

## Accessing Your Managed MariaDB Cluster

Depending on the chosen deployment model, you have one or more endpoints.

**StandAlone** : 1 endpoint (1 IP), accessible on port 3306.

**MultiAZ** :

- 1 MaxScale endpoint, accessible on port 3306, capable of routing your queries to the most appropriate instances (this is the endpoint to prioritize).
- 1 R/W endpoint, accessible on port 3306, pointing to the primary instance, for read-write.
- 1 R/O endpoint, accessible on port 3306, pointing to all instances, for read-only.

## Your permissions

You do not have any permissions at the database engine level (neither `SUPER` nor `ALL_PRIVILEGE`).

You cannot reconfigure the engine or its options, nor install the `performance_schema`. (Reminder: it is also discouraged to enable it on instances smaller than X-Large due to RAM resource constraints).

Requests to add databases, users, or grants should be submitted to the Cloud-Temple teams.