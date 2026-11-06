---
title: Network Responsibility Matrix
displayed_sidebar: docSidebar
---

This **RACI** matrix defines the allocation of responsibilities between the client and Cloud Temple for network connectivity.

## Definition of the different roles

Here we recall the different RACI roles:

| Role | Description |
|---|---|
| (R) Responsible | __R__esponsible for carrying out the process |
| (A) Accountable | __A__ccountable for approving the process execution |
| (C) Consulted   | __C__onsulted during the process |
| (I) Informed    | __I__nformed of the process results (via tooling, the portal, or messaging) |

## Client network connectivity

| Activity                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to an operator network connectivity to access a Cloud Temple physical datacenter (1) | __RA__      | __CI__            |
| Manage incidents on client operator network links                                          | __RA__      |                   |
| Manage issues on client operator network links                                          | __RA__      | __I__             |
| Manage capacity on client operator network links                                          | __RA__      | __CI__            |

*(1) Cloud Temple assumes responsibility for the network regarding its backbone infrastructure, its collection points, as well as
the datacenter interconnection points, thereby ensuring connectivity between these points and its backbone network.
In the physical rack hosting offer, Cloud Temple assumes responsibility starting from the equipment located at the top of the rack, commonly referred to as "top of rack".*