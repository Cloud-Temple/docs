---
title: Getting Started Guide
---
import shivaBareMetalMenu from './images/shiva_bare-metal_menu.png'
import shivaBareMetalList from './images/shiva_bare-metal_list.png'
import shivaBareMetalDetails from './images/shiva_bare-metal_details.png'
import shivaBareMetalStoragelist from './images/shiva_bare-metal_storagelist.png'

# QuickStart for the Bare Metal Offering

This page guides you through the initial steps to use the **Bare Metal** offering from the Cloud Temple console. Follow these instructions to explore the available menus and features.

## Prerequisites

Before you begin, ensure the following points:

1. **Active subscription**: Your organization must have subscribed to the Bare Metal offering.
2. **User permissions**: Your user account must have the necessary permissions to access and manage Bare Metal resources.

## Access to the Bare Metal Interface

Once the subscription is activated and permissions are configured, a new menu titled **Bare Metal** appears in the Cloud Temple console. This menu contains two main submenus: **Bare Metal** and **Volumes**.

<img src={shivaBareMetalMenu} />

### 1. Submenu **Bare Metal**

The **Bare Metal** submenu displays a table listing all available Bare Metal instances. This table includes the main information for each instance:

- **Bare Metal Name**
- **Status**
- **Hardware Configuration**
- **IP Address**

<img src={shivaBareMetalList} />

#### Key Features

- **Action Button**: Allows direct access to the Bare Metal administration console.
- **Clickable Name**: Clicking on the name of a Bare Metal instance opens a new page with **complete instance details**:
  - Hardware information (RAM, CPU, GPU, etc.).
  - Network configuration (associated IP addresses).
  - Connectivity information for management.

<img src={shivaBareMetalDetails} />

### 2. Submenu **Volumes**

The **Volumes** submenu displays a table listing all storage volumes associated with your Bare Metal subscription. For each volume, the following information is available:

- **Volume Name**
- **Capacity**
- **Performance Class** (IOPS per To)
- **Status** (Available, Deploying, etc.)

<img src={shivaBareMetalStoragelist} />

:::info BFS Volume (Boot from SAN)
**Volume 1** is the **BFS (Boot from SAN)** volume and must be used to install the operating system.

**Important:** This volume cannot be shared with other Bare Metal servers in the same availability zone (AZ).
:::

:::tip Best Practice
Prefer installing the OS on the **BFS** volume, and store your data on an additional **LUN** volume. This separation simplifies maintenance, backups, and system reinstallation when needed.
:::

#### Key Features

- **Volume Management**: From this table, you can map volumes to your Bare Metal instances.