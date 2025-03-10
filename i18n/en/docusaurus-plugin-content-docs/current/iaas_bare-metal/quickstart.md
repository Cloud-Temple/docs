---
title: Quick Start Guide
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'


# QuickStart for Bare Metal Offer

This page guides you through the initial steps to use the **Bare Metal** offer from the Cloud Temple console. Follow these instructions to discover the available menus and features.

---

## Prerequisites
Before getting started, ensure the following:
1. **Activated Subscription**: Your organization must have subscribed to the Bare Metal offer.
2. **User Permissions**: Your user account must have the necessary rights to access and manage Bare Metal resources.

---

## Accessing the Bare Metal Interface

Once the subscription is activated and the permissions configured, a new menu entitled **Bare Metal** appears in the Cloud Temple console. This menu contains two main sub-menus: **Bare Metal** and **Volumes**.

<img src={shivaBareMetalMenu} />

---

### 1. **Bare Metal** Sub-menu

The **Bare Metal** sub-menu presents a table listing all available Bare Metal instances. This table includes the main information for each instance:
- **Bare Metal Name**
- **State**
- **Hardware Configuration**
- **IP Address**

<img src={shivaBareMetalList} />

#### Main Features
- **Action Button**: Allows direct access to the Bare Metal administration console.
- **Clickable Name**: By clicking on the name of a Bare Metal instance, a new page displays the **complete details** of the instance:
  - Hardware information (RAM, CPU, GPU, etc.).
  - Network configuration (associated IP addresses).
  - Connectivity information for management.

<img src={shivaBareMetalDetails} />


---

### 2. **Volumes** Sub-menu

The **Volumes** sub-menu displays a table listing all the storage volumes associated with your Bare Metal subscription. For each volume, the following information is available:
- **Volume Name**
- **Capacity**
- **Performance Class** (IOPS per TB)
- **State** (Available, Deploying, etc.)

<img src={shivaBareMetalStoragelist} />


#### Main Features
- Volume management: From this table, you can map volumes to your Bare Metal instances.

---