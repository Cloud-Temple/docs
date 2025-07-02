---
title: Getting Started Guide
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# QuickStart for the Bare Metal Offer

This page guides you through the initial steps to use the **Bare Metal** offer from the Cloud Temple console. Follow these instructions to discover the available menus and features.

---

## Prerequisites

Before starting, ensure the following points:

1. **Active Subscription**: Your organization must have subscribed to the Bare Metal offer.
2. **User Permissions**: Your user account must have the necessary rights to access and manage Bare Metal resources.

---

## Accessing the Bare Metal Interface

Once the subscription is active and permissions are configured, a new menu titled **Bare Metal** appears in the Cloud Temple console. This menu contains two main submenus: **Bare Metal** and **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. Submenu **Bare Metal**

The **Bare Metal** submenu displays a table listing all available Bare Metal instances. This table includes key information for each instance:

- **Bare Metal Name**
- **Status**
- **Hardware Configuration**
- **IP Address**

<img src={shivaBareMetalList} />

#### Key Features

- **Action Button**: Allows direct access to the Bare Metal administration console.
- **Clickable Name**: Clicking on a Bare Metal instance name opens a new page with the **complete details** of the instance:
  - Hardware information (RAM, CPU, GPU, etc.).
  - Network configuration (associated IP addresses).
  - Connectivity information for management.

<img src={shivaBareMetalDetails} />

---

### 2. Submenu **Volumes**

The **Volumes** submenu displays a table listing all storage volumes associated with your Bare Metal subscription. For each volume, the following information is available:

- **Volume Name**
- **Capacity**
- **Performance Class** (IOPS per To)
- **Status** (Available, In Deployment, etc.)

<img src={shivaBareMetalStoragelist} />

#### Key Features

- Volume Management: From this table, you can map volumes to your Bare Metal instances.