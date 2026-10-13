---
title: Onboarding
description: "Create your organization, open your environments, and activate your products. Getting started on the Cloud Temple platform, from registration to first deployment."
tags: [onboarding]
---
import shivaLogin from '@site/docs/console/images/shiva_login.png'
import shivaHome from '@site/docs/console/images/shiva_home.png'
import tenantNew from '@site/docs/console/images/shiva_org_tenant_new.png'
import orgAccess from '@site/docs/console/images/shiva_org_access.png'
import supportSelectProduct from '@site/docs/console/images/console_support_new_ticket_select_product.png'
import tenantProductsEdit from '@site/docs/console/images/shiva_org_tenant_products_edit.png'

# Onboarding

At Cloud Temple, you don't wait for your cloud: you create it.

You create your organization from an online form, in just a few minutes. Your environments are then created with a single click from the Console. You can enable and disable products with full autonomy, billed on a pay-as-you-go basis. All on a sovereign infrastructure, operated in France. The Console indicates, tenant by tenant and product by product, what falls under the **SecNumCloud** qualification.

<div class="cert-row cert-row--doc">
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">SecNumCloud 3.2</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISO 27001</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">HDS</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">ISAE 3402</a>
  <a class="cert-chip" href="https://www.cloud-temple.com/demarches-conformite/" target="_blank" rel="noopener noreferrer">C5</a>
</div>

## What you get when you sign up

- **No waiting** : a single form is all it takes. Your organization is created automatically, in a few minutes, without any intervention from our teams.
- **No volume commitment** : self-service products are billed on a pay-as-you-go basis.
- **No amendment** : open new environments under your existing contract, under the terms it provides.
- **Sovereign by design** : infrastructure operated in France, and a **SecNumCloud** qualification scope identified in the Console.

## The three workflows

This page describes this setup, end to end.

<div class="card-grid">
  <div class="card">
    <h3>Create your organization</h3>
    <p>The online registration form, and what gets triggered behind the scenes.</p>
    <a href="#parcours-1-créer-votre-organisation" class="card-link">Get started &rarr;</a>
  </div>
  <div class="card">
    <h3>Add an environment</h3>
    <p>A new tenant from the Console, in a few minutes and autonomously.</p>
    <a href="#parcours-2-ajouter-un-environnement" class="card-link">See how &rarr;</a>
  </div>
  <div class="card">
    <h3>Evolve an environment</h3>
    <p>Enable a product, open an access, delegate management to a third party.</p>
    <a href="#parcours-3-faire-évoluer-un-environnement" class="card-link">Explore &rarr;</a>
  </div>
</div>

## The vocabulary, in two words

The entire platform is built on two levels.

**Your organization** is you: your company. It holds your contract and your billing.

**A tenant** is a working environment within your organization. You can have several, isolated from one another.

```
Votre organisation
├── Tenant « production »
├── Tenant « recette »
└── Tenant « lab »
```

In practice: you sign **one** contract, and you open your environments under the terms it provides, without ever mixing your data between them. Isolating a staging environment, separating a subsidiary, or setting up a lab requires no contract amendment.

Two roles receive access:

- the **organization owner** has access to everything and invites other users
- the **tenant owner** has access to that environment

This can be the same person.

---

## Path 1. Create your organization

This is your entry point to the platform. It happens only once, and it is done online.

### The registration form

Your setup begins with an **online registration form**, to which your Cloud Temple contact will provide you with access.

It is short and completed in one go. It asks for four things.

**Who you are.** Your organization's name, its legal form, its country of establishment, and its SIREN number.

**Who will manage the platform.** The last name, first name, and professional email address of the person who will be the **organization owner**. This person will receive the access credentials and will then invite their colleagues.

**What you will put in it.** Your industry sector, and the nature of the data your project handles: health data, personal data, financial data, sensitive data.

**Where you will connect from.** The public IP addresses authorized to access your Console.

:::caution[IP addresses are not optional]
Only the addresses you declare will be able to access the Console.

Make sure to include **all** your sites and VPN exits. An oversight is not permanent: the list can be expanded later from the Console, independently.
:::

You finish by attesting that you are authorized to bind your organization, and by accepting the **[general terms and conditions](https://www.cloud-temple.com/contracts)**.

### What happens next

Everything is automatic. Your organization is created from the information you provided, and your workspace is built within the following minutes: your identity directory, your first environment, your access credentials.

You have nothing to do during this time.

:::tip[This first environment arrives empty]
The environment created by your registration has **no product activated**: it is provisioned by our automation, without a form, so no selection is possible. This is deliberate: nothing starts being billed until you have activated a product yourself.

The four self-service products are **available** in your Console from the moment it opens. Available does not mean activated: you activate them when you decide to, see [Les produits](#les-produits).
:::

### What you receive

An **account creation** email, addressed to the designated owner. You set your password and enable your second authentication factor.

Details: [Les courriels que vous recevez](#les-courriels-que-vous-recevez).

### You are logged in

You arrive on the Console, at [shiva.cloud-temple.com](https://shiva.cloud-temple.com). You can now invite your collaborators and assign them permissions: see [Identités et accès](/console/iam).

<img src={shivaLogin} />

<img src={shivaHome} />

:::tip[Et la partie contractuelle ?]
It does not block you. Administrative and billing information: billing details, payment method, purchase order reference are completed in parallel, with your Cloud Temple contact. You do not wait for them to be finalized to get started with the platform.
:::

---

## Path 2. Adding an environment

You already have an organization and you want a new environment, for staging, a new project, or a subsidiary.

**You do everything from the Console, under the terms of your contract. No action on our side is required.**

### The steps

1. From the Console, create a **new tenant** from the **Tenants** tab.
2. Give it a meaningful **name**: *production*, *staging*, the name of a project.
3. The tenant creator becomes the default owner. They can add other managers later, via the **Users** tab, once connected to the tenant.
4. Choose the **products** to activate in it.

<img src={tenantNew} />

### What happens next

Your environment builds itself automatically in a few minutes. You have nothing to do.

If the tenant owner does not yet have an account, they receive their account creation email. If they already have one, they access the new environment without a new invitation.

:::tip[Nothing is enabled by default]
You choose the tenant's products **from the creation form** (step 4 above), and you can expand this scope at any time. No product is opened unless you have checked it: you only pay for what you consume.
:::

---

## Path 3. Evolving an environment

Your needs change. Here is how to evolve an existing environment.

### Enable a product

If the product is part of your catalog, it appears in the Console: **enable it in full autonomy** on the relevant tenant. Allow a few minutes before it becomes available.

From the list of your tenants, the action **"Modify products"** opens the catalog. Check the ones you want to enable, uncheck the ones you want to stop, then **Save**.

If it does not appear, it is not yet in your catalog: see [Demander un produit supplémentaire](#demander-un-produit-supplémentaire).

<img src={tenantProductsEdit} />

### Stopping a product

You can disable a product you no longer use, and billing stops with it.

A check is performed beforehand: if resources are still being consumed, the deactivation is refused and the Console indicates what is blocking it. Delete these resources, then try again.

This is a safeguard: it prevents cutting off a service that is still in use and losing its data.

### Adding an IP Address

**Adding** is done from the Console, under **Administration > Access**. The page lists the authorized public addresses; the **"Add an IP"** button declares a new one, in CIDR notation, with a description.

You need the `console_public_access_read` permission to view the list, and `console_public_access_write` to add to it.

Allow approximately **ten minutes** before the new address becomes effective.

:::caution[This list is for your organization]
There is only one list for the entire organization. The page is accessible from a tenant, but **an address added there grants Console access for the entire organization**, not just for that tenant.
:::

**Deleting** an address, on the other hand, requires a **support request** from the Console. This is deliberate: removing access is an irreversible operation for those connecting behind it.

<img src={orgAccess} />

### Change a manager

The organization owner manages users and their permissions directly from the Console: see [Identity and Access Management](/console/iam).

They can also **delegate** their permissions to an external partner or a Cloud Temple project manager: useful if you outsource operations to a third party.

---

## The emails you receive {/* #les-courriels-que-vous-recevez */}

Only one email requires action on your part.

### Account creation email

| | |
| --- | --- |
| **Sender** | `shiva.support@cloud-temple.com` |
| **Who receives it** | The organization owner, then any tenant owner who does not yet have an account |
| **What it contains** | A link to choose your password and enable your second factor (OTP) |
| **When** | A few minutes after creation |
| **Validity** | **96 hours** |

:::warning[Lien expiré ?]
After 96 hours, the link no longer works. This is a security measure, not a failure.

Write to **`shiva.support@cloud-temple.com`**: we will send you a new one.

This is the only channel available at this stage: without access to the Console, you cannot yet open a request there.
:::

:::note[Rien reçu ?]
Check your spam folder: the message is sometimes filtered. It is sent from **`shiva.support@cloud-temple.com`**: allow this address in your email client. If you have not received anything within the following hour, contact us at the same address.
:::

---

## Products {/* #les-produits */}

### What you enable yourself

No product is enabled by default, neither at the creation of your organization nor at the creation of a tenant. Four products are, however, **available** in your Console from the start: you enable them yourself, on the tenant of your choice. They are **billed on a pay-as-you-go basis**, with no volume commitment or tier to negotiate: you only pay for what you consume.

| Product | What it's for | Learn more |
| --- | --- | --- |
| **VM Instances** | On-demand virtual machines | [Documentation](/public_cloud/vm_instances) |
| **VPC** | A virtual private network | [Documentation](/network/vpc) |
| **LLMaaS** | Sovereign AI models | [Documentation](/llmaas) |
| **Object Storage** | S3-compatible storage | [Documentation](/storage/oss) |

### The rest of the catalog

These products are opened within the scope of your contract, with your commercial contact:

- [IaaS VMware](/iaas_vmware) and [IaaS OpenSource](/iaas_opensource)
- [Bare metal](/iaas_bare-metal)
- [PaaS OpenShift](/paas_openshift) and [Kubernetes managé](/managed_kubernetes)
- Managed databases: [PostgreSQL](/managed_postgresql), [MariaDB](/managed_mariadb)
- [Bastion](/bastion)
- [Housing](/housing)
- [Backbone privé](/network/private_backbone) and [Internet](/network/internet)
- [Marketplace](/marketplace)

Overview: [nos produits](/managedproducts_overview).

---

## Request an additional product {/* #demander-un-produit-supplémentaire */}

The product you want doesn't appear in your Console? It's not yet in your catalog.

1. From the Console, create a **support request**
2. Specify the **product** concerned, and the expected volume if you know it
3. We will get back to you with the terms
4. Once approved, the product appears in your Console
5. You can enable it on one or more tenants

<img src={supportSelectProduct} />

### Change support level

Three levels exist, presented on [notre site](https://www.cloud-temple.com/produits/niveaux-de-support).

You can upgrade or downgrade your level: make the request through support from the Console, or to your commercial contact.

---

## Frequently Asked Questions

**How long does it take to create an environment?**
A few minutes, in all three cases. Creation is automatic, whether it's your first arrival or a new environment.

**How many tenants can I create?**
As many as needed, within the terms of your contract.

**My project involves health data or sensitive data. Can I sign up online?**
Yes. Mention it in the form: your organization is created normally, and our teams will assist you with enabling the relevant services.

**Can I delegate management to a third-party provider?**
Yes. The organization owner can delegate their rights to an external partner or a Cloud Temple project manager.

**I forgot an IP address and can no longer log in.**
If a colleague in your organization still has access to the Console, they can add the address from **Administration > Access**. If no one can access it anymore, write to **`shiva.support@cloud-temple.com`**: this is the fallback channel when the Console is unreachable.

**I just activated a product but I don't see it yet.**
Please wait a few minutes. If it still doesn't appear, contact support.

---

## Going further

<div class="card-grid">
  <div class="card">
    <h3>Console Quickstart</h3>
    <p>A full tour of the interface: tenants, users, access, costs.</p>
    <a href="./console_quickstart" class="card-link">Launch the Quickstart &rarr;</a>
  </div>
  <div class="card">
    <h3>Identities and Access</h3>
    <p>Invite your collaborators and assign their permissions, tenant by tenant.</p>
    <a href="./iam" class="card-link">Explore IAM &rarr;</a>
  </div>
  <div class="card">
    <h3>Order resources</h3>
    <p>Deploy your first resources and track their availability.</p>
    <a href="./orders" class="card-link">View orders &rarr;</a>
  </div>
  <div class="card">
    <h3>Billing</h3>
    <p>Track your consumption by tenant and by product, throughout the month.</p>
    <a href="./billing/concepts" class="card-link">Access the module &rarr;</a>
  </div>
  <div class="card">
    <h3>Shared responsibilities</h3>
    <p>What Cloud Temple operates, what remains your responsibility.</p>
    <a href="../shared-responsibility" class="card-link">Read the model &rarr;</a>
  </div>
  <div class="card">
    <h3>Commitments and SLA</h3>
    <p>Service levels, availability, and contractual terms.</p>
    <a href="https://www.cloud-temple.com/contracts" class="card-link">View commitments &rarr;</a>
  </div>
</div>