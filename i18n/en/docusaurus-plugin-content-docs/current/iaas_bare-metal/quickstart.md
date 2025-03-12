---
title: Quickstart Guide
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# QuickStart for the Bare Metal offering

This page guides you through the initial steps to use the **Bare Metal** offering from the Cloud Temple console. Follow these instructions to discover the available menus and features.

---

## Prerequisites

Before starting, ensure the following:

1. **Active subscription**: Your organization must have subscribed to the Bare Metal offering.
2. **User permissions**: Your user account must have the necessary rights to access and manage Bare Metal resources.

---

## Accessing the Bare Metal interface

Once the subscription is activated and permissions are configured, a new menu titled **Bare Metal** appears in the Cloud Temple console. This menu contains two main sub-menus: **Bare Metal** and **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. **Bare Metal** sub-menu

The **Bare Metal** sub-menu presents a table listing all available Bare Metal instances. This table includes the main information for each instance:

- **Bare Metal name**
- **Status**
- **Hardware configuration**
- **IP address**

<img src={shivaBareMetalList} />

#### Main features

- **Action button**: Allows direct access to the Bare Metal administration console.
- **Clickable name**: By clicking on the name of a Bare Metal instance, a new page displays the **complete details** of the instance:
  - Hardware information (RAM, CPU, GPU, etc.).
  - Network configuration (associated IP addresses).
  - Connectivity information for management.

<img src={shivaBareMetalDetails} />

---

### 2. **Volumes** sub-menu

The **Volumes** sub-menu displays a table listing all storage volumes associated with your Bare Metal subscription. For each volume, the following information is available:

- **Volume name**
- **Capacity**
- **Performance class** (IOPS per TB)
- **Status** (Available, Deploying, etc.)

<img src={shivaBareMetalStoragelist} />

#### Main features

- Volume management: From this table, you can map volumes to your Bare Metal instances.

---
