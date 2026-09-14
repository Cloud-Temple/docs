---
title: Onboarding
description: "Create your organization, open your environments, and activate your products. The setup on the Cloud Temple platform, from registration to first deployment."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'

# Onboarding

At Cloud Temple, you don't wait for your cloud: you build it.

You create your organization through an online form in just a few minutes. Your environments are then provisioned with a single click from the Console. You can enable and disable products with full autonomy, billed on a pay-as-you-go basis. All of this runs on a sovereign infrastructure, operated in France. The Console indicates, on a per-tenant and per-product basis, what falls under the **SecNumCloud** qualification.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## What you get when you sign up

- **No delay** : a single form is enough. Your organization is created automatically within minutes, without intervention from our teams.
- **No volume commitment** : self-service products are billed on a pay-as-you-go basis.
- **No contract amendment** : provision new environments under your existing contract, under its current terms.
- **Sovereign by design** : infrastructure operated in France, with a **SecNumCloud** qualified scope identified in the Console.

## The three workflows

This page describes this setup, end-to-end.

<div class="card-grid">
  <div class="card">
    <h3>Create your organization</h3>
    <p>The online registration form, and what happens behind the scenes.</p>
    <a href="#path-1-create-your-organization" class="card-link">Start &rarr;</a>
  </div>
  <div class="card">
    <h3>Add an environment</h3>
    <p>A new tenant from the Console, in just a few minutes and independently.</p>
    <a href="#path-2-add-an-environment" class="card-link">See how &rarr;</a>
  </div>
  <div class="card">
    <h3>Evolve an environment</h3>
    <p>Activate a product, grant access, delegate management to a third party.</p>
    <a href="#path-3-evolving-an-environment" class="card-link">Explore &rarr;</a>
  </div>
</div>

## The vocabulary, in two words

The entire platform is built on two levels.

**Your organization** is you: your company. It holds your contract and billing.

**A tenant** is a working environment within your organization. You can have multiple tenants, isolated from each other.

```
Your organization
├── Tenant "production"
├── Tenant "staging"
└── Tenant "lab"
```

In practice: you sign **one** contract, and you provision your environments under the terms it specifies, without ever mixing your data between them. Isolating a staging environment, separating a subsidiary, or setting up a lab does not require an addendum.

Two roles are granted access:

- the **organization owner** has access to everything and invites other users
- the **tenant owner** has access to that environment

This can be the same person.

---

## Path 1. Create your organization

This is your entry point to the platform. It occurs only once and is completed online.

### The Registration Form

Your setup begins with an **online registration form**, to which your Cloud Temple contact will provide access.

It is short and can be completed in one go. It asks for four pieces of information.

**Who you are.** Your organization's name, legal form, country of establishment, and SIREN number.

**Who will manage the platform.** The first name, last name, and professional email address of the person who will be the **organization owner**. This person will receive the access credentials and subsequently invite their team members.

**What you will store in it.** Your industry sector, and the nature of the data your project handles: health data, personal data, financial data, sensitive data.

**Where you will connect from.** The public IP addresses authorized to access your Console.

:::caution[IP addresses are not optional]
Only the addresses you declare will be able to access the Console.

Remember to include **all** your sites and VPN exit nodes. An oversight is not permanent: the list can be updated later from the Console, independently.
:::

You finish by certifying that you are authorized to bind your organization, and by accepting the **[general terms](/contracts)**.

### What happens next

Everything is automatic. Your organization is created from the information you entered, and your workspace is built within the following minutes: your identity directory, your first environment, your access.

You don't need to take any action during this time.

:::tip[This first environment starts empty]
The environment created by your registration has **no products activated**: it is provisioned by our automation, without a form, so no selection is possible. This is intentional: nothing starts being billed until you activate a product yourself.

The four self-service products are **available** in your Console right from the start. Available does not mean activated: you activate them when you decide to, see [Les produits](#products).
:::

### What you receive

An **account creation** email, addressed to the designated owner. You will set your password and enable your second authentication factor.

Details: [The emails you receive](#the-emails-you-receive).

### You are logged in

You access the Console at [shiva.cloud-temple.com](https://shiva.cloud-temple.com). You can then invite your team members and assign them permissions: see [Identities and Access](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[What about the contractual side?]
It does not block you. Administrative and billing information: billing details, payment method, purchase order reference are completed in parallel with your Cloud Temple contact. You do not need to wait for them to be finalized to start using the platform.
:::

---

## Path 2. Add an environment

You already have an organization and want a new environment, for staging, a new project, or a subsidiary.

**You handle everything from the Console, under your contract terms. No action from us is required.**

### The steps

1. From the Console, create a **new tenant** from the **Tenants** tab.
2. Give it a meaningful **name**: *production*, *staging*, the name of a project.
3. The tenant creator becomes the default owner. They can add other administrators later, via the **Users** tab, once logged into the tenant.
4. Select the **products** to enable.

<img src={tenantNew} />

### What happens next

Your environment is automatically provisioned within a few minutes. You don't need to do anything.

If the tenant owner does not yet have an account, they will receive an account creation email. If they already have one, they can access the new environment without a new invitation.

:::tip[Nothing is enabled by default]
You select the tenant products **from the creation form** (step 4 above), and can adjust this scope at any time. No product is activated unless you explicitly select it: you only pay for what you consume.
:::

---

## Path 3. Evolving an Environment

Your needs change. Here's how to evolve an existing environment.

### Enable a product

If the product is part of your catalog, it appears in the Console: **enable it independently** on the relevant tenant. Allow a few minutes before it becomes ready to use.

From your tenant list, the **« Edit products »** action opens the catalog. Check the ones you want to enable, uncheck the ones you want to disable, then **Save**.

If it does not appear, it is not yet in your catalog: see [Demander un produit supplémentaire](#request-an-additional-product).

<img src={tenantProductsEdit} />

### Disable a product

You can disable a product you no longer use, and billing will stop along with it.

A check is performed beforehand: if resources are still being consumed, the deactivation will be rejected and the Console will indicate what is preventing it. Delete these resources, then try again.

This is a safeguard: it prevents shutting down a service that is still in use and losing its data.

### Add an IP address

**Adding** is done from the Console, under **Administration > Access**. The page lists the allowed public addresses; the **« Add an IP »** button registers a new one, in CIDR notation, with a description.

You need the `console_public_access_read` permission to view the list, and `console_public_access_write` to add to it.

Allow about **ten minutes** for the new address to take effect.

:::caution[This list belongs to your organization]
There is only one list for the entire organization. The page is accessible from a tenant, but **an address added there grants Console access for the entire organization**, not just for that tenant.
:::

**Deleting** an address, on the other hand, requires a **support request** from the Console. This is intentional: removing access is an irreversible operation for those connecting behind it.

<img src={orgAccess} />

### Change a manager

The organization owner manages users and their permissions directly from the Console: see [Identities and Access](/console/iam).

They can also **delegate** their permissions to an external partner or a Cloud Temple project manager: useful if you outsource operations to a third party.

---

## The emails you receive

Only one email requires action on your part.

### Account Creation Email

| | |
| --- | --- |
| **Sender** | `shiva.support@cloud-temple.com` |
| **Recipient** | The organization owner, then any tenant owner who does not yet have an account |
| **Contents** | A link to set your password and enable your second factor (OTP) |
| **When** | A few minutes after creation |
| **Validity** | **96 hours** |

:::warning[Link expired?]
After 96 hours, the link will no longer work. This is a security measure, not a system failure.

Email **`shiva.support@cloud-temple.com`**: we will send you a new one.

This is the only available channel at this stage: without access to the Console, you cannot yet submit a request there.
:::

:::note[Nothing received?]
Check your spam/junk folder: the message is sometimes filtered. It is sent from **`shiva.support@cloud-temple.com`**: allow this address in your email client. If you haven't received anything within the following hour, contact us at the same address.
:::

---

## Products

### What you activate yourself

No product is activated by default, neither upon creating your organization nor when creating a tenant. However, four products are **available** in your Console right from the start: you activate them yourself, on the tenant of your choice. They are **billed on a pay-as-you-go basis**, with no volume commitment and no pricing tiers to negotiate: you only pay for what you consume.

| Product | What it's for | Learn more |
| --- | --- | --- |
| **VM Instances** | On-demand virtual machines | [Documentation](/public_cloud/vm_instances) |
| **VPC** | A virtual private network | [Documentation](/network/vpc) |
| **LLMaaS** | Sovereign AI models | [Documentation](/llmaas) |
| **Object Storage** | S3-compatible storage | [Documentation](/storage/oss) |

### The rest of the catalog

These products are made available under your contract, in coordination with your sales representative:

- [IaaS VMware](/iaas_vmware) and [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) and [Managed Kubernetes](/managed_kubernetes)
- Managed databases: [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Private backbone](/network/private_backbone) and [Internet](/network/internet)
- [Marketplace](/marketplace)

Overview: [our products](/managedproducts_overview).

---

## Request an additional product

The product you want does not appear in your Console? It is not yet in your catalog.

1. From the Console, create a **support request**
2. Specify the **product** in question, and the expected volume if you know it
3. We will get back to you regarding the terms
4. Once approved, the product will appear in your Console
5. You can enable it on one or more tenants

<img src={supportSelectProduct} />

### Change support level

Three levels are available, presented on [our website](https://www.cloud-temple.com/produits/niveaux-de-support).

You can upgrade or downgrade your level: submit a request via support from the Console, or contact your sales representative.

---

## Frequently Asked Questions

**How long does environment creation take?**
A few minutes, in all three cases. Creation is automatic, whether for your first access or for a new environment.

**How many tenants can I create?**
As many as needed, within the terms of your contract.

**My project involves health data or sensitive data. Can I register online?**
Yes. Mention this in the form: your organization will be created as usual, and our teams will assist you with enabling the relevant services.

**Can I delegate management to a service provider?**
Yes. The organization owner can delegate their rights to an external partner or a Cloud Temple project manager.

**I forgot an IP address and can no longer connect.**
If a colleague in your organization still has access to the Console, they can add the address from **Administration > Access**. If no one can access it anymore, email **`shiva.support@cloud-temple.com`**: this is the fallback channel when the Console is unreachable.

**I just activated a product, but I don't see it yet.**
Please wait a few minutes. If it still doesn't appear, contact support.

---

## Go Further

<div class="card-grid">
  <div class="card">
    <h3>Getting Started with the Console</h3>
    <p>A complete tour of the interface: tenants, users, access, costs.</p>
    <a href="./console_quickstart" class="card-link">Launch Quickstart &rarr;</a>
  </div>
  <div class="card">
    <h3>Identities and Access</h3>
    <p>Invite your team members and assign their permissions, tenant by tenant.</p>
    <a href="./iam" class="card-link">Explore IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Order Resources</h3>
    <p>Deploy your first resources and track their provisioning.</p>
    <a href="./orders" class="card-link">View Orders &rarr;</a>
  </div>
  <div class="card">
    <h3>Billing</h3>
    <p>Track your consumption by tenant and product throughout the month.</p>
    <a href="./billing/concepts" class="card-link">Access the Module &rarr;</a>
  </div>
  <div class="card">
    <h3>Shared Responsibilities</h3>
    <p>What Cloud Temple manages, and what remains your responsibility.</p>
    <a href="../shared-responsibility" class="card-link">Read the Model &rarr;</a>
  </div>
  <div class="card">
    <h3>Commitments and SLA</h3>
    <p>Service levels, availability, and contractual terms.</p>
    <a href="../contracts" class="card-link">View Commitments &rarr;</a>
  </div>
</div>