---
title: Console overview
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

The Cloud Temple Console is the management interface of your cloud platform. You use it to create your environments, manage your teams' access, activate your products, order resources and track your consumption. Everything you do in the Console is also available through its [API](./api.md), and the [Terraform provider](../terraform/terraform.md) lets you manage your platform *as code*.

<div class="card-grid">
  <div class="card">
    <h3>Concepts</h3>
    <p>Discover the fundamentals and core principles to understand and master our infrastructure.</p>
    <a href="./console/concepts" class="card-link">Explore concepts &rarr;</a>
  </div>
  <div class="card">
    <h3>Getting started</h3>
    <p>Get started quickly with our resources by following clear and straightforward instructions.</p>
    <a href="./console/onboarding" class="card-link">Open the getting started guide &rarr;</a>
  </div>
  <div class="card">
    <h3>Tutorials</h3>
    <p>Learn step-by-step how to configure and use our services with detailed guides.</p>
    <a href="./console/tutorials" class="card-link">Discover tutorials &rarr;</a>
  </div>
  <div class="card">
    <h3>Frequently asked questions</h3>
    <p>Find answers to the most common questions about this product.</p>
    <a href="./console/faq" class="card-link">Read the FAQ &rarr;</a>
  </div>
</div>

## Where the Console sits

<ConsoleMap />

Two paths should be kept apart:

- **Management.** Your teams connect to the Console from a browser, at [shiva.cloud-temple.com](https://shiva.cloud-temple.com). Access is restricted to the [public IP addresses you have allowed](./onboarding.md#add-an-ip-address) and [two-factor authentication](./onboarding.md#two-factor-authentication-is-mandatory) is mandatory. Your scripts and Terraform go through the API, authenticated with an API key (*Personal Access Token*).
- **Usage.** The users of your applications reach your machines and services through the [Network](../network/network_overview.md) offerings, such as Internet or Private Network. This traffic does not go through the Console: the Console manages your infrastructure, it does not serve it.

Your resources are organised in **tenants**, isolated environments within your organisation, and deployed in [regions and availability zones](../additional_content/concepts_regional.md). The [concepts](./concepts.md) page describes this model.

## What you do there

- **[Set up your environments](./console/onboarding)**: Create your organisation and your tenants, then activate your products.
- **[Manage access](./console/iam)**: Users, per-tenant permissions and identity federation.
- **[Track your costs](./console/billing/concepts)**: Consumption by product, by service and by tenant.
- **[Monitor your resources](./console/metrics/concepts)**: Metrics in Prometheus format, available in the Console or in your own tooling.
- **[Follow operations and incidents](./console/status)**: Scheduled interventions on the platform and ongoing incidents.
- **[Contact support](./console/console_quickstart#access-to-technical-support)**: Advice, account assistance, incidents or professional services: all your requests to support.
- **[Order resources](./console/orders)**: Availability zones, clusters, storage and networks, with order tracking.
- **[Automate](./console/api)**: Every Console function through the API, and your infrastructure as code with Terraform.

## Where to start

- **You are new to Cloud Temple**: follow the [getting started guide](./onboarding.md), from creating your organisation to activating your products.
- **You want to understand the model** of organisation, tenants and permissions: read the [concepts](./concepts.md).
- **You are looking for a function in the interface**: take the [Console tour](./console_quickstart.md).
