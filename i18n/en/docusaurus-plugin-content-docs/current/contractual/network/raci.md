---
title: Network Responsibility Matrix
displayed_sidebar: docSidebar
---

### Client network connectivity

| Activity                                                                                             | Client Role | Cloud Temple Role |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Subscribe to an operator network connectivity to access a Cloud Temple physical datacenter (6) | __RA__      | __CI__            |
| Manage incidents on client operator network links                                          | __RA__      |                   |
| Manage issues on client operator network links                                          | __RA__      | __I__             |
| Manage capacity on client operator network links                                          | __RA__      | __CI__            |

*(6) Cloud Temple assumes responsibility for the network regarding its backbone infrastructure, its collection points, as well as
the datacenter interconnection points, thereby ensuring connectivity between these points and its backbone network.
In the physical rack hosting offer, Cloud Temple assumes responsibility starting from the equipment located at the top of the rack, commonly referred to as "top of rack".*