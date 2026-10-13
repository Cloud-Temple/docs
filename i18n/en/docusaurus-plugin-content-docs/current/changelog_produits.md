---
title: Product Updates
sidebar_position: 999
---

# Product Updates & Enhancements

> This changelog lists new features and significant platform enhancements for Cloud Temple.
> Bug fixes are included starting from version 4.50.0.

## v4.52.0 — 2026-10-06

### [IaaS VMware — Backup](/iaas_vmware)
- Restoration of a virtual machine whose disks are distributed across multiple datastores: ability to select a destination datastore for each source datastore

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Snapshots tab: identification of each snapshot type (manual, backup, replication, orphan)
- Relocation of a virtual machine: option to retain the original host to migrate only storage, now usable on a single-host pool
- Fix for the "Destroy cloud-init configuration after startup" checkbox, which had no effect when deploying a virtual machine from a template

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Master host: removal of maintenance actions and indication of the procedure for its deletion (deletion of its pool)
- Storage: placing a Block Storage in maintenance and taking it out of maintenance from the console

### [IaaS OpenSource — Backup](/iaas_opensource)
- Backup reports: policy executions are sorted by start date, from most recent to oldest
- Backup reports: various fixes on the screen (refresh, sorting, and pagination of executions)

### [Marketplace](/marketplace)
- Image deployment: pre-filling of cloud-init configuration (user-data and network configuration) provided by the image, modifiable before deployment

## v4.51.0 — 2026-09-18

### [Console — Organization](/console/iam/concepts)
- Addition of a "Type" (SecNumCloud / Legacy) column in the tenants list
- A tenant's favorite status is now indicated by a "Favorite" badge in the tenants list

### [Identity & Access Management (IAM)](/console/iam)
- Clarification of the impact of user re-registration: the confirmation modal specifies that a new registration email will be sent to the user

### [Support](/console)
- Re-display of the support information block in Organization mode

### [Metrics](/console/metrics/concepts)
- Fix for virtual machine metrics chart legends

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- vMotion wizard fix: the "Next" button remained stuck after a host compatibility error when returning to a previous step
- Sending system keyboard shortcuts (Alt+Tab, ⌘, Esc…) to the full-screen virtual machine console (Keyboard Lock API, Chromium browser)
- VMware console (WMKS) fix: an Alt+Tab left the Alt key considered pressed on the virtual machine side

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Clarification of the warning when moving a virtual disk: associated virtual machines are no longer reported as suspended, only certain actions are temporarily unavailable

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Pool details: display and management of Block Storage from Compute, and hosts from Storage (cross-tabs)

## v4.50.0 — 2026-09-10

### [Console](/console)
- Update of displayed quota units (GiB)

### [Console — Organization](/console/iam/concepts)
- Display of tenant onboarding progress upon creation

### [Orders](/console/orders)
- Addition of the command to delete a VPC public IP
- Addition of the command to delete a Private Backbone IP

### [VPC](/network/vpc)
- Display of configuration status and static IP selection on virtual machine operations
- Ability to select a VPC network and configure a static IP in all forms requiring network configuration on a virtual machine (creation, deployment, migration, restoration, export)

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Addition of the "Fabric" column in the network tab of a Bare Metal server

## v4.49.1 — 2026-09-03

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- The "Associate Public IP" action in the "Network Cards" tab is grayed out when the VPC gateway is not enabled

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- The "Associate Public IP" action in the "Network Cards" tab is grayed out when the VPC gateway is not enabled

### [VM Instances](/public_cloud/vm_instances)
- The "Associate Public IP" action in the "Network Cards" tab is grayed out when the VPC gateway is not enabled

## v4.49.0 — 2026-08-31

### [Console](/console)
- Automatic launch of the welcome tutorial upon a user's first login
- Removal of error notifications on dashboard load when environments are not provisioned

### [Console — Organization](/console/iam/concepts)
- Display of the tenant activation price in the creation modal, in Organization mode

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Association and disassociation of a public IP from the "Network Cards" tab of a virtual machine connected to a VPC

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display of blade type rather than its description in the "Class" of clusters

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- The number of vCPUs offered for virtual machine resizing is now capped by its maximum capacity
- Association and disassociation of a public IP from the "Network Cards" tab of a virtual machine connected to a VPC

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Display of blade type rather than its description in the "Class" of pools

### [IaaS OpenSource — Backup](/iaas_opensource)
- Restoration notice specifying that the original virtual machine is not replaced: a new dated virtual machine is created

### [VM Instances](/public_cloud/vm_instances)
- Hiding of fields and explicit message when no storage is available, when adding or extending a disk
- Association and disassociation of a public IP from the "Network Cards" tab of a virtual machine connected to a VPC
- Ability to choose a custom template (free vCPU and RAM, within instance family limits) during VM Instance creation, restoration, and resizing

### [Bare Metal](/iaas_bare-metal)
- Display of blade type rather than its description in the "Class" of Bare Metal servers

### [Network](/network/network_overview)
- Interco IP reservation: blocking of network and broadcast addresses, and "Reserved" indicator on reserved IPs

### [VPC](/network/vpc)
- The "New VPC" button in the list is now grayed out when the VPC limit is reached

## v4.48.0 — 2026-08-13

### [Console](/console)
- Improvement of language choice persistence, now linked to the user profile

### [Console — Organization](/console/iam/concepts)
- Tenant products are now grouped by whether they are modifiable, non-disablable, or unavailable, with the lock reason

### [Cost Manager](/console/billing/concepts)
- The Cost Manager section no longer appears on the Organization dashboard when the organization is not eligible
- Display of an error card, instead of a zero cost, when consumption retrieval fails on the Organization dashboard
- Support plan lines are now grouped under "Support" in the cost per tenant, instead of an "Unknown" tenant

### [Orders](/console/orders)
- Explicit message when there is insufficient space available for a storage type, when ordering an availability zone or pool

### [Support](/console)
- Descriptions and post-incident reports are now formatted (markdown) on the Incidents page
- Global support messages are now displayed in Organization mode

### [VM Instances](/public_cloud/vm_instances)
- The estimated cost displayed during VM Instance creation is now monthly, based on 730 h/month

### [VPC](/network/vpc)
- The VPC name is now displayed before the network name in network selectors
- The VPC name now precedes the network name in the Virtual Machines "Network Adapters" tab
- Harmonization of VPC type label colors (shared, dedicated) with those of networks
- The VM Instances option is now available from the static IP association form
- Network adapters already associated with a static IP are now grayed out in the association form

### [Object Storage](/storage/oss)
- Choice of addressing style (path-style or virtual-hosted) when generating a file sharing link
- Warning for buckets whose name is not DNS-compatible: only path-style access is possible

### [Marketplace](/marketplace)
- Only availability zones compatible with the selected image are now offered during deployment from the Marketplace
- The price of a Marketplace product deployed as a VM Instance now indicates that it is calculated based on CPU, RAM, and storage

### [Housing (Colocation)](/housing)
- Addition of 1000BASE-SX and 10GBASE-SR interface types to colocation space reservation

## v4.47.0 — 2026-07-30

### [Console](/console)
- The Swagger documentation for the Orders module is now available

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- During virtual machine deployment, only deployable catalog items (OVF and virtual machine templates) are now offered

### [VM Instances](/public_cloud/vm_instances)
- The estimated (hourly) cost is now displayed during instance creation, with details per component (vCPU, RAM, disks)

### [VPC](/network/vpc)
- When ordering a new VPC, you can now choose deployment on a dedicated environment (your OpenIaaS infrastructure) or on a shared environment (subject to subscription to the VM Instances product)

### [Object Storage](/storage/oss)
- Uppercase letters are now rejected in bucket names, in accordance with naming rules

### [Marketplace](/marketplace)
- You can now deploy a VM Instance (Public Cloud) directly from a Marketplace product page

## 2026-07-27 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- The Distributed deployment model is renamed MultiAZ
- Instance templates now go up to 6X-Large (32 vCPU and 128 GiB of memory) and storage is hot-expandable up to 512 GiB
- Publication of sizing recommendations explaining the calibration of engine parameters, with a warning about enabling `performance_schema` below the X-Large template
- Point-in-time restoration is no longer offered: backups now rely on daily physical backups and logical exports, without continuous transaction log archiving

### [Managed PostgreSQL](/managed_postgresql)
- New architecture based on the CloudNative-PG Kubernetes operator and the Barman Cloud backup plugin
- Three deployment models: StandAlone as a single instance, Replica with three asynchronously replicated instances and automatic failover, and Enterprise with three synchronously replicated instances on at least two nodes, ensuring durability without blocking in case of node unavailability
- Declarative deployment via Kubernetes custom resources, usable via Terraform or Helm, and native export of metrics to Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organization](/console/iam/concepts)
- You can now create a tenant directly from the Tenants page by selecting the associated products

### [Console — Activities](/console)
- Activity logs can now be filtered by module

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- The public IP address is now displayed in the list of network interfaces of a virtual machine connected to a VPC
- A "Health" tab is now available in the virtual machine details, accessible from the list

### [VMware IaaS — Infrastructure](/iaas_vmware)
- You can now order VMware replication between availability zones

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- The list of network interfaces of a virtual machine connected to a VPC now displays the public IP address
- A "Health" tab is now available in the virtual machine details opened from the list

### [VM Instances](/public_cloud/vm_instances)
- The public IP address is now displayed in the list of network adapters of an instance connected to a VPC
- A "Health" tab is now available in the instance details, accessible from the list

### [Housing (Colocation)](/housing)
- Colocation orders are now available: space reservation, equipment installation, and equipment unpacking
- Colocation intervention orders are now available: technical assistance and smart hands
- Colocation cabling and de-cabling (CPE) orders are now available
- Colocation orders not supported by the console are now clearly flagged, with a prompt to contact support

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- Instance creation is now based on selecting a system image, which replaces templates

## v4.45.4 — 2026-07-22

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- When configuring cores per socket for an OpenIaaS virtual machine, the processor topology (number of sockets and cores per socket) is now explicitly displayed

### [LLMaaS](/llmaas)
- The minimum LLMaaS credit amount has changed; see the [Cloud Temple official price list](https://www.cloud-temple.com/en/our-public-rates/).

## v4.45.3 — 2026-07-21

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- When deploying a virtual machine, an "No templates available" message is now displayed when the catalog is empty

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- When deploying a virtual machine, an "No templates available" message is now displayed when the catalog is empty

## v4.45.2 — 2026-07-17

### [Console](/console)
- Minor technical improvements

## v4.45.0 — 2026-07-10

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- During a blocking operation, virtual machines now display an explicit status: backup, snapshot, or restore in progress
- CPU editing now adapts to the CPU hot add option and the virtual machine state

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- During a blocking operation, virtual machines now display an explicit status (backup, snapshot, or restore in progress)
- Virtual machine details now show a usage summary (CPU, RAM, storage)

### [VM Instances](/public_cloud/vm_instances)
- Instances now display an explicit status (backup, snapshot, or restore in progress) during a blocking operation
- Instant usage metrics (CPU, RAM, storage) are now displayed for each instance
- Name uniqueness is now enforced at both instance creation and restore

### [Network](/network/network_overview)
- For orders involving a propagation step, new networks are only created upon final validation of the order

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- The network type (private backbone) is now displayed on instance network adapters, even without the VPC feature

## v4.44.1 — 2026-07-02

### [Console](/console)
- Minor technical improvements

## v4.44.0 — 2026-07-02

### [Orders](/console/orders)
- Infrastructure provisioning actions now take into account business roles (compute, network, VPC, bare metal…) in addition to order permissions

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Tracking of ISO and OVF file uploads has been improved, and it is now possible to cancel an ongoing upload

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Tracking of ISO and XVA file uploads has been improved, and it is now possible to cancel an ongoing upload

### [VM Instances](/public_cloud/vm_instances)
- Disk sizes no longer accept decimal values, both when creating an instance and when adding or extending a disk
- Instance and resource processing indicators are now correctly restored after a page refresh

### [VPC](/network/vpc)
- From the network card of a virtual machine attached to a VPC network, you can now directly access the relevant VPC (VMware, OpenIaaS, and VM Instances)
- Some VPC orders can now be processed in parallel: adding a gateway during private network creation (and vice versa), and multiple simultaneous private network deletions

## 2026-06-30 — Metrics API

### [Metrics](/console/metrics/concepts)
- An access token can now verify the availability of the metrics service via the `HEAD /v1/configuration` API endpoint

## v4.43.0 — 2026-06-30

### [Console](/console)
- Network selectors now visually distinguish between VPC and Private Backbone networks
- An interactive tutorial is now available on the Users page

### [Console — Activities](/console)
- You can now view the details of an activity by expanding its row in the Recent and Archived lists
- Each activity now has a dedicated detail page, accessible via direct link
- Activity details are now accessible from success and failure notifications
- You can now view, copy, or download the full JSON of an activity
- The list of archived activities can now be sorted by creation date

### [Orders](/console/orders)
- The order progress display has been redesigned

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Virtual machine details are now displayed in a new view
- During hot modification, consistency between CPU and cores per socket is checked: warnings are displayed, and invalid values are not accepted

### [VMware IaaS — Infrastructure](/iaas_vmware)
- You can now request the deletion of an IaaS environment

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- A new detail view is available for virtual machines
- You can now filter the list of virtual machines by availability zone (AZ)

### [OpenSource IaaS — Infrastructure](/iaas_opensource)
- The Storage Repository page now displays the snapshot date of a disk

### [VM Instances](/public_cloud/vm_instances)
- Instance details are now displayed in a new view
- The "Run backup now" button is now disabled when backup is not available

### [VPC](/network/vpc)
- The public IP address description is now displayed when associating it with a private network

### [Object Storage](/storage/oss)
- You can now add a description to the allowed IP addresses (whitelist) of a bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- The "Privacy" section has been updated

### [Object Storage](/storage/oss)
- The availability of the wildcard TLS certificate for host-style S3 access is now indicated
- You can now upload a file to S3 from a pre-signed URL
- You can now enable versioning on a bucket
- You can now manage file versions

## v4.41.1 — 2026-06-11

### [Orders](/console/orders)
- The maximum available when ordering Block Storage has been updated

## v4.41.0 — 2026-06-08

### [VMware IaaS — Infrastructure](/iaas_vmware)
- Stock-related messages are now more precise when ordering hypervisors or increasing cluster RAM

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- When adding an existing disk to a virtual machine, the disk UUID is now displayed when multiple disks have the same name

### [OpenSource IaaS — Infrastructure](/iaas_opensource)
- A warning is now displayed when requesting an update to the master host of a pool

### [VPC](/network/vpc)
- Ordering a VPC now requires an OpenIaaS availability zone to be deployed

## 2026-06-06 — Console MCP Server

- Authentication helper resource describing how to obtain a personal access token and the expected header format; authentication errors now indicate the cause and next steps
- Breaking configuration change: the API URL specified in the server configuration must now include the `/api` segment; update this before deploying this version to avoid 404 errors. The URL is validated at startup, and private key infrastructure is supported

## 2026-06-05 — Console MCP Server

- View the name and version of the deployed server

## v4.40.0 — 2026-06-02

### [Console](/console)
- An interactive welcome tour is now available

### [Console — Organization](/console/iam/concepts)
- The cost manager is now available in the organization view
- The organization view now has a dedicated display

### [Orders](/console/orders)
- The network step no longer appears in orders when only the VPC product is enabled

### [Support](/console)
- Support plans and contacts have been updated

### [Support Tickets](/console)
- Managed services features have been removed from support tickets

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Public content library features have been removed

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- The default value for the CloudInit step has been updated for OpenIaaS deployments from the Marketplace
- Sending special characters from the clipboard of a virtual machine console has been improved

### [Network](/network/network_overview)
- You can now delete the description of an IP address
- You can now fill in the `description` field when creating a virtual network
- You can now fill in the `description` field when modifying a virtual network

### [VPC](/network/vpc)
- The description of a VPC floating IP is now displayed
- You can now edit the description of a VPC floating IP

## 2026-05-25 — Console MCP Server

- Each permission denial now indicates the relevant product and the exact name of the permission to enable on the personal access token

## 2026-05-24 — Console MCP Server

- Support management from an agent: list and details of tickets, creation, comments, closure, viewing planned maintenance and their categories, tenant incidents, and platform incidents
- Destroy-on-start option for deployments from the Marketplace
- Guided deployment path for a Linux virtual machine
- Directly viewable resources: OpenSource IaaS terminology glossary, topology of a pool combining hosts, storage repositories, networks, and indicators in a single read, and Marketplace catalog filtered for OpenSource IaaS

## 2026-05-23 — Console MCP Server

- Marketplace catalog browsing with filters, and detailed technical sheets for OpenSource IaaS (XVA) and VMware (OVF) detailing processors, memory, disks, and exact names of network interfaces
- Deployment of an OpenSource IaaS virtual machine from a catalog item, idempotent by name
- Control of OpenSource IaaS virtual machine power states — power on, power off, reboot, pause, suspend, and resume — idempotent by state
- Tracking of long-running operations via activities

## 2026-05-22 — Console MCP Server

- Extended read-only view of OpenSource IaaS: pools, hosts, virtual machines, snapshots, network adapters with duplicate MAC address detection, virtual disks, and replication status
- Server-side filters applicable to all these lists

## v4.39.2 — 2026-05-22

### [Network](/network/network_overview)
- You can now delete the PTR record of a public IP address or an interconnection IP address

## v4.39.1 — 2026-05-20

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Virtual machine snapshot naming rules have been updated

### [Bare Metal](/iaas_bare-metal)
- You can now edit the description of a blade

### [Network](/network/network_overview)
- You can now edit the PTR record of an interconnection IP address

## v4.39.0 — 2026-04-23

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Existing disks are now displayed when adding a new disk
- When moving (vMotion) a virtual machine in "compute resource only" mode, it is now possible to select a cluster

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Existing disks are now displayed when adding a new disk

### [VM Instances](/public_cloud/vm_instances)
- The VM Instances list can now be exported in CSV format
- The display of a backup policy frequency has been revised

### [Bare Metal](/iaas_bare-metal)
- Network selection is now mandatory when propagating a network to a Bare Metal server

## 2026-04-20 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- Publication of engine parameters associated with each instance template: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet`, and `table_open_cache`
- Revision of instance templates: the ceiling is reduced to 3X-Large (8 vCPUs and 32 GiB of memory), and the maximum hot-extensible storage is reduced from 512 GiB to 128 GiB

### [Managed PostgreSQL](/managed_postgresql)
- Publication of engine parameters associated with each instance template: `shared_buffers`, `effective_cache_size`, `work_mem`, and `max_connections`
- Revision of instance templates: the ceiling is reduced to 3X-Large (8 vCPUs and 32 GiB of memory), and the maximum hot-extensible storage is reduced from 512 GiB to 128 GiB

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- Available networks are now filtered when creating an instance or modifying a network adapter

## v4.38.0 — 2026-04-17

### [Identity & Access (IAM)](/console/iam)
- Six new permissions are available: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management`, and `public_cloud_vm_instances_console_access`
- The name of the relevant product now appears at the top of each permission's description

### [Cost Manager](/console/billing/concepts)
- The Cost Manager interface has been improved
- The unit displayed in consumption charts has been updated

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- The step for selecting a Marketplace image during virtual machine deployment has been revised

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- You can now toggle the catalog page display between grid and table views
- The Marketplace image selection step during virtual machine deployment has been updated

### [VM Instances](/public_cloud/vm_instances)
- The dashboard now displays VM Instances quota usage
- A new page presents the list of VM Instances
- You can now create a new instance
- You can now view and manage the disks, network adapters, and snapshots of an instance
- You can now update an instance's capabilities and change its status
- You can now access an instance's console

### [LLMaaS](/llmaas)
- The price display in the consumption view and the credit recharge form have been updated

## 2026-04-15 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- MariaDB Managed opens in Preview: StandAlone and Distributed models in a three-node cluster behind a proxy, storage replicated across three availability zones, and 99.9% availability commitment

### [Managed PostgreSQL](/managed_postgresql)
- PostgreSQL Managed opens in Preview: StandAlone and Distributed models in a three-node cluster behind a proxy, synchronous multi-zone replication with no data loss, and point-in-time recovery

## v4.37.0 — 2026-04-02

### [Cost Manager](/console/billing/concepts)
- Added estimated amount on the consumption page for the chart and trend
- Visual improvement when there is an error or too little data on the current month's consumption

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Improved form to deploy a virtual machine from a catalog item
- Added the ability to change the view type (grid or table) from the catalog page

## v4.36.0 — 2026-03-27

### [Console](/console)
- Updated metrics and consumption charts

### [Cost Manager](/console/billing/concepts)
- Added the Cost Manager page
- Ability to view current month costs
- Ability to view costs over a date range and compare trends

### [Orders](/console/orders)
- Blocking the deprovisioning of a hypervisor cluster when a storage cluster is attached

### [OpenSource IaaS — Infrastructure](/iaas_opensource)
- Added filters and sorting on the disk list from Block Storage details

### [VPC](/network/vpc)
- Improved interface on data loading in forms

## v4.35.4 — 2026-03-18

### [Console](/console)
- Improved reconnection to websockets

### [Support](/console)
- Added a fallback solution for creating a support ticket when websockets are disconnected

## v4.35.3 — 2026-03-17

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Updated disk retrieval when loading replicas from the Replication tab

## v4.35.0 — 2026-03-11

### [Orders](/console/orders)
- Added command to delete a cpool/spool mapping
- Added command to deprovision a VPC private network
- Modifications to the Bare Metal volume deprovisioning command; it is now possible to order deletion from the volumes list
- Added command to delete a Bare Metal volume mapping
- Added command to deprovision a VPC
- Blocking the deprovisioning of a datastore if it is the last one in a datastore cluster

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Ability to add a RAM limit on a virtual machine

### [VMware IaaS — Infrastructure](/iaas_vmware)
- Updated VMware multi-vMotion to allow moving VMs from one cluster to another

### [OpenSource IaaS — Infrastructure](/iaas_opensource)
- Added the ability to update a host
- Display of host update information

### [Network](/network/network_overview)
- Disabled the network propagation deletion button when no propagation is delivered

### [LLMaaS](/llmaas)
- Display of consumption grouped by token type

## v4.34.0 — 2026-02-18

### [Console](/console)
- Major update of the application's display engine
- VMware and OpenIaaS menus are not displayed when only the metrics module is enabled

### [Metrics](/console/metrics/concepts)
- Ability to export to CSV from VMware and OpenIaaS Metrics pages

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- When moving a virtual machine, it is not possible to select the same destination host as the VM's current host
- Added 'New Catalog' button on the VMware Catalog page

## 2026-02-04 — Console MCP Server

- Viewing OpenSource IaaS virtual machine models, networks, hosts, and storage repositories

## 2026-02-03 — Console MCP Server

- Console MCP (Model Context Protocol) server made available, authenticated via personal access token
- Viewing and controlling VMware virtual machines from an agent: list, details, virtual datacenters, power on, and power off

## v4.33.0 — 2026-01-21

### [Orders](/console/orders)
- Added command to delete a network propagation on OpenIaaS

### [Metrics](/console/metrics/concepts)
- Added filters for VMWare and OpenIaaS metrics pages

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Added 'Virtual Machines' metrics page
- Added metrics details page for each VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Updated support ticket closure modal

### [VMware IaaS — Backup](/iaas_vmware)
- When assigning a backup policy to a disk, the disk is now proposed for inventory if it is not recognized by the backup solution

### [Bare Metal](/iaas_bare-metal)
- Deletion of a BFS volume on a Bare Metal server is now blocked; the volume will be deleted upon Bare Metal server deletion
- When ordering a Bare Metal server, the first volume is now renamed 'BFS volume'

## v4.31.0 — 2026-01-07

### [VMware IaaS — Backup](/iaas_vmware)
- Updated tooltip explanations for options available during virtual machine restoration

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Snapshots related to backup policies are now visible
- Display of the Host linked to the storage location of an ISO during upload and from the catalog page

### [Object Storage](/storage/oss)
- Display of an explanatory card from the incomplete MPU tab when the Console IP is not authorized, preventing the tab from displaying

### [Marketplace](/marketplace)
- Display of error card when accessing a non-existent marketplace page

## v4.30.1 — 2025-12-16

### [Console](/console)
- Improvement of empty error display by showing the returned HTTP status by default

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Ability to associate a static IP with a custom MAC address

### [LLMaaS](/llmaas)
- On consumption metrics, filtering of series with values of 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Improvement of action synchronization on VPC pages
- Addition of associating a static IP with a public IP from the static IPs list

### [Storage](/storage/oss)
- Addition of incomplete MPUs from the bucket page
- Ability to delete an incomplete MPU

## v4.28.0 — 2025-11-21

### [Console](/console)
- Addition of the ability to display global informational messages visible across the entire application

### [Orders](/console/orders)
- Ability to order an LLMaaS credit top-up for the tenant
- Ability to order a VPC
- Ability to order a private network within a VPC
- Ability to order a public IP for the VPC product
- Ability to enable the gateway for a VPC
- Addition of the ability to order the deletion of a tenant

### [Metrics](/console/metrics/concepts)
- Improvement of tooltip display on metric charts: it is now possible to click on a point to freeze the tooltip and view all data

### [Network](/network/network_overview)
- Grouping of Networks and Internet pages under a single product: Private Backbone
- Addition of PTR record management when modifying a public IP
- Blocking of sharing for certain network types

### [VPC](/network/vpc)
- Integration of the VPC product
- Addition of a page listing VPCs
- Addition of a VPC Details page
- Ability to manage private networks, public IPs, and the gateway of a VPC
- Ability to associate a static IP from a VPC private network with a VMware or OpenIaaS network adapter
- Ability to associate a static IP with a public IP from a VPC

### [LLMaaS](/llmaas)
- Addition of a Billing tab on the LLMaaS page for tenants with prepaid mode enabled
- Display of remaining credit for prepaid tenants, on the dashboard and from the Billing tab

## v4.27.0 — 2025-11-12

### [Orders](/console/orders)
- Addition of a check for available stock when ordering resources
- Addition of a filter by order type and product on the orders list

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Improvement of the virtual machines console. Better keyboard management, and addition of a clipboard

### [VMware IaaS — Backup](/iaas_vmware)
- Addition of an alert on the dashboard for SPP backup VSnap with too high occupancy

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Improvement of the virtual machines console. Better keyboard management, and addition of a clipboard

### [Marketplace](/marketplace)
- Addition of the ability to display the technical details of an image

## v4.26.5 — 2025-11-04

### [Console](/console)
- Improvement of dashboard chart sizes when resizing the window

## v4.26.3 — 2025-10-31

### [Metrics](/console/metrics/concepts)
- Modification of the name of metric exports presented in charts

## v4.26.0 — 2025-10-22

### [Console](/console)
- Addition of a button to copy the UUID of the current scope from the user profile
- Complete redesign of the Dashboard
- Addition of automatic reconnection to activity tracking when the connection is interrupted

### [Orders](/console/orders)
- Update of order forms to add them to the relevant pages (e.g., new Datastore from the Storage page)

### [Support](/console)
- Addition of the email address of the person who closed the ticket in the support ticket rating

### [Metrics](/console/metrics/concepts)
- Redesign of VMware metric retrieval, the page URL is now /iaas/metrics
- Addition of a VMware infrastructure metrics tab on Compute
- Addition of a VMware infrastructure metrics tab on Storage
- Addition of a metric page for OpenIaaS
- Addition of an OpenIaaS infrastructure metrics tab on Compute
- Addition of an OpenIaaS infrastructure metrics tab on Storage

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Addition of new extra_config keys (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocking of the selection of a hostcluster without an active host
- When creating a VMware virtual machine, the Vcenter choice is now based on the selected availability zone
- Addition of limits on names and descriptions when uploading a file on VMware

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- When adding an OpenIaaS disk, storages not belonging to the virtual machine's Pool are now filtered
- When taking a snapshot, the option to take memory is now unchecked by default

### [OpenSource IaaS — Backup](/iaas_opensource)
- Addition of the ability to run a backup from the backups tab of an OpenIaaS virtual machine

### [Network](/network/network_overview)
- Removal of the constraint preventing the selection of multiple network types on the virtual networks page

### [Object Storage](/storage/oss)
- Optimization of file retrieval from a bucket

### [OpenShift PaaS](/paas_openshift)
- Addition of a page listing OpenShift clusters
- Addition of a page detailing an OpenShift cluster

### [Marketplace](/marketplace)
- Addition of a filter by UUID and ability to copy the UUID of an item

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Update of the use of advanced configuration and OVF properties when deploying a VMware virtual machine

## v4.24.0 — 2025-09-24

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Ability to deploy a virtual machine image from the virtual machines list

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Ability to deploy a virtual machine image from the virtual machines list

### [Network](/network/network_overview)
- Addition of a validation to block the deletion of network sharing if the network is propagated in another Tenant

### [Marketplace](/marketplace)
- Addition of the Marketplace product
- Addition of a page listing available solutions in the catalog
- Addition of a page to view the details of a solution
- Ability to deploy a virtual machine image on an OpenIaaS or VMware environment from the details of a solution
- Ability to contact a partner for a managed services solution

## v4.23.0 — 2025-09-12

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Addition of support for 4 new extra-config values

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Do not display the HA alert on affected VMs when the local ISO is not mounted
- When adding or resizing a disk, indicate if the linked SR is used for a replication configuration

### [OpenSource IaaS — Backup](/iaas_opensource)
- Addition of the AZ name on the backup report

### [Object Storage](/storage/oss)
- Update of information regarding the lifecycle of a bucket

### [LLMaaS](/llmaas)
- Addition of the LLMaaS product
- Addition of the list of available models
- Addition of the list of API keys with the ability to create them
- Addition of consumption by model and by key
- Addition of model details
- Ability to test a model

## v4.22.1 — 2025-09-10

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Modification of alerts regarding the chosen disk format configuration, during a VMotion including storage

## v4.22.0 — 2025-09-02

### [Orders](/console/orders)
- Addition of the order for deleting a network propagation from the all orders page, all available orders are now accessible from this page

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Update of conditions on changing the disk format when moving a virtual machine and addition of information on the current disk format during disk-by-disk configuration

## v4.21.0 — 2025-08-22

### [Console](/console)
- Update of the display when no data is created/provisioned or when an error occurs while retrieving information.

### [Support](/console)
- Opening of support modals with the associated service pre-selected
- Addition of a badge in the menu and navbar when a support ticket requires a response

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Addition of the ability to export the list of VMware replicas in CSV
- Improvement of the RAM selection slider on certain commands
- Addition of management of Static differed and immediate options for vMotion

### [VMware IaaS — Infrastructure](/iaas_vmware)
- Blocking of the deletion of a non-empty cluster or with hosts/datastores not in maintenance

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Addition of the ability to export the list of OpenIaaS replicas and associated policies in CSV
- Addition of details on the tools used by virtual machines (pvDrivers, managementAgent, and tools)
- Addition of checks for high availability (HA)

### [Network](/network/network_overview)
- Modification of IPv4 address selection with an available list

## v4.20.0 — 2025-07-29

### [Orders](/console/orders)
- Addition of information regarding limited and out-of-stock computing resources when ordering a new availability zone

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Addition of a VMware Tools option to synchronize time with the host
- Update of conditions on encrypting a virtual machine

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Removal of last execution information from replication policies causing slowness
- Management of TX checksumming for network adapters
- Addition of a warning on OpenIaaS replication if the number of AZs is less than 2
- Addition of high availability (HA) for pools and virtual machines

## v4.19.0 — 2025-07-24

### [Orders](/console/orders)
- Update of public IP ordering with the ability to order an IPv6 prefix
- Update of the display of available orders when no environment is provisioned

### [VMware IaaS — Virtual Machines](/iaas_vmware)
- Addition of a replication filter on the virtual machines list
- Update of the virtual machine creation modal

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Addition of a replication filter on the virtual machines list

### [Network](/network/network_overview)
- Update of the Internet page with the addition of IPv6 management

## v4.18.0 — 2025-07-15

### [Console](/console)
- Update of the display when no data is created/provisioned or when an error occurs while retrieving information.

### [Orders](/console/orders)
- Update of internet steps when ordering a new availability zone or a new pool

### [Support](/console)
- Addition of a security service for each product when creating a support ticket

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added a link from an ISO mounted on a controller to the corresponding item in the catalog

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added an OpenIaaS Replication page with the list of replicas and replication policies
- Ability to add and remove a replication configuration from an OpenIaaS virtual machine
- Ability to create and delete a replication policy
- Ability to restore a replica
- Ability to export virtual machines in CSV format.

## v4.17.0 — 2025-06-20

### [Commands](/console/orders)
- Ability to order an OpenIaaS Pool
- Ability to order the association of an existing volume to an existing Bare Metal from the Bare Metal page, the volume page, and the orders page

### [Support](/console)
- Ability to delete a file from a support ticket
- The description for satisfaction upon ticket closure is now optional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Added English translations on the consumption reports page in the orders menu

### [Commands](/console/orders)
- Ability to order a bare metal volume size increase
- Ability to order an OpenIaaS Block Storage size increase

### [Support](/console)
- Redesign of support ticket creation
- Markdown interpretation on a support ticket and update of the comment display order
- Added feedback when closing a support ticket
- Updated icon display based on the impact of a global incident

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added an option to preserve the configuration of a virtual machine during restoration to Production on the original cluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added a warning message in case of low disk space on a Block Storage (90% used) and warnings during orders

### [Object Storage](/storage/oss)
- Added S3 role descriptions when assigning them to a bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Display of an error when a network is misconfigured on a virtual machine's network adapter, also preventing the virtual machine from starting

## v4.15.0 — 2025-05-13

### [Console](/console)
- Adjustment of displayed units for infrastructure resources: GiB (Gibibyte) instead of GB (Gigabyte)

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Ability to move an OpenIaaS disk
- Ability to connect and disconnect an OpenIaaS disk
- Display of the connected/disconnected status of a disk
- Ability to copy the UUID of a disk, virtual network, or snapshot
- Ability to choose the name of a virtual machine during an XVA file deployment
- Added the ability to assign a backup policy when starting a virtual machine if it has none.

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added actions available on a disk from a Block Storage

### [Bare Metal](/iaas_bare-metal)
- Added MAC addresses to the Bare Metal interfaces table
- Added a page for Bare Metal volume details

## v4.14.0 — 2025-04-28

### [Console](/console)
- Ability to pin pages in the menu
- Updated rendering of API documentation

### [Commands](/console/orders)
- Ability to order the deletion of an OpenIaaS Block Storage
- Ability to order the addition of a Block Storage to an OpenIaaS Pool
- Ability to order the deletion of an OpenIaaS Host
- Added product information on the orders list
- Ability to order the addition of a Host to an OpenIaaS pool

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Ability to put a Host into maintenance
- Ability to edit the description of a template
- Ability to choose a Host when starting a virtual machine
- Added a uniqueness rule on the names of OpenIaaS virtual machines

## v4.13.0 — 2025-04-08

### [Console](/console)
- Added statistics and contact information on the Support page

### [Commands](/console/orders)
- Redesign of the order details display
- Redesign of the order choices display
- Updated display to order the first bare metal when none exist
- Updated Bare Metal order with the selection of network propagation on Bare Metal interfaces
- Ability to propagate a VLAN on a Bare Metal
- Ability to add a volume to a bare metal
- Ability to deprovision a volume from a Bare Metal
- Ability to deprovision a Bare Metal

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added a copy UUID button on VMware networks and catalogs

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added a copy UUID button on OpenIaaS networks and catalogs
- Added a copy UUID button on a Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Added display of network interfaces and the networks propagated to them on a bare metal
- Added actions to power on, restart, and power off a bare metal

### [Network](/network/network_overview)
- Ability to view propagations on a Bare Metal for a network

## v4.12.0 — 2025-03-25

### [Console](/console)
- Ability to delete a whitelisted IP from the access page

### Tags
- Added tags to OpenIaaS virtual machines

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Updated retrieval of API recommendations on affinity/anti-affinity rules of a HostCluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Display the import of an OpenIaaS XVA on the downloads list
- Ability to attach an existing disk to a virtual machine
- Ability to detach an existing disk from a virtual machine

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Updated display of disks on an OpenIaaS Block Storage

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Updated error message when accessing files in an Object Storage bucket

## v4.11.1 — 2025-03-12

### [Commands](/console/orders)
- Updated availability zone names during an order
- Modified the minimum datastore requirement when ordering a datastoreCluster

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- When the label field for hostCluster and datastoreCluster is set to empty, the technical name will be applied by default

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- When the label field for pools is set to empty, the technical name will be applied by default
- Added an info bubble on the catalog page and during ISO import to indicate that XVA is supported when creating a virtual machine

## v4.11.0 — 2025-03-10

### [Commands](/console/orders)
- Updated allowed network types when creating an AZ
- Updated minimum resources to provision when ordering a new availability zone

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Display of the virtual machine name in the console tab for VMware

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Added label management on VMware datastore clusters and host clusters

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Allow deployment of a virtual machine via XVA import for OpenIaaS
- Added label management on OpenIaaS pools
- Display of the virtual machine name in the console tab for OpenIaaS

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Updated CPU information for OpenIaaS hosts and pools

### [Bare Metal](/iaas_bare-metal)
- Added IOPS/TO on bare metal volumes

## v4.10.0 — 2025-03-04

### [Console](/console)
- Updated links to the new public documentation

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added an alert to inform users in case of duplicate MAC addresses on the virtual machines list and during the creation or modification of network adapters
- Added an option to force shutdown or restart of a virtual machine
- Memory will no longer be included by default during a snapshot if the virtual machine is not running
- Ability to rename and resize a disk
- Added deletion of ISOs and templates from the catalog page
- Added the ability to delete the 'Cloud Init' configuration disk when deploying a virtual machine

## v4.9.1 — 2025-02-27

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Ability to edit a network adapter on a running virtual machine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added restrictions on allowed characters in OpenIaaS virtual machine names

## v4.9.0 — 2025-02-21

### [Console](/console)
- Make names clickable in tables when a linked page exists
- Improve console opening to avoid opening multiple tabs if multiple windows are open on the same page
- Display an error when opening a console if the browser does not allow redirects on the application

### [Metrics](/console/metrics/concepts)
- Display the RAM unit on the virtual machines health page

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Block the creation of a virtual machine if the space on the selected Block Storages is insufficient
- Clear default MAC addresses when creating an OpenIaaS virtual machine

### [Storage](/storage/oss)
- Ability to copy an S3 endpoint to the clipboard

## v4.8.0 — 2025-02-14

### [Commands](/console/orders)
- Added the order to propagate a network to OpenIaaS Pools
- Added network propagation orders on the all orders page

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Display of the number of disks assigned and available per controller on a virtual machine
- Updated conditions on the number of disks that can be added to Para Virtual SCSI controllers based on the virtual machine's hardware version

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Ability to add Cloud Init options when creating an OpenIaaS virtual machine
- Display of disks on the Block Storage page
- Ability to update the boot firmware configuration of an OpenIaaS virtual machine
- Ability to clone an OpenIaaS virtual machine

### [Network](/network/network_overview)
- Updated visualization of network propagations and added OpenIaaS propagations
- Updated network creation and ability to propagate the network to the OpenIaaS infrastructure upon creation

## v4.7.0 — 2025-02-03

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- OVF export is blocked when the virtual machine is encrypted

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display datastore cluster and host cluster relationships on Compute and Storage pages

### [IaaS VMware — Backup](/iaas_vmware)
- Modified boot option after restoration for a SecNumCloud environment when restoring in clone or production mode on an alternative host or cluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added mount and unmount buttons for an OpenIaaS ISO in the virtual machine action bar

### [Network](/network/network_overview)
- Improved display of network propagations when propagation deletion requests are in progress

## v4.6.0 — 2025-01-30

### [Console](/console)
- Remove displayed characters during auto-completion when adding observers to a support ticket creation
- Updated display of the menu and available pages for VMware and OpenIaaS offerings on a new environment without provisioned availability zones

### [Console — Notifications](/console)
- Updated display of notification subscriptions from the profile page

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added the ability to encrypt a virtual machine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added export of a virtual machine as a template

## v4.5.0 — 2025-01-17

### [Console](/console)
- Added description field during creation and display of whitelists
- Ability to modify the description of a whitelist

### [Orders](/console/orders)
- Added an order for a new OpenIaaS Availability Zone
- Added an order for Bare Metal
- Link a hypervisor cluster to a storage cluster

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Display remaining size in parentheses in storage selection trees

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Added worst-case memory allocation display on a VMware hostCluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added ISO upload to OpenIaaS catalogs
- Added the ability to move OpenIaaS virtual machines
- Ability to select disks and networks when creating an OpenIaaS virtual machine

### [Bare Metal](/iaas_bare-metal)
- Added a page listing Bare Metal servers
- Added a page listing Bare Metal volumes
- Added a page with details for a Bare Metal server
- Added the ability to open a Bare Metal console

## v4.4.0 — 2025-01-13

### [Console](/console)
- Technical modifications made during the authentication process

## v4.3.0 — 2024-12-19

### [Console — Activities](/console)
- Added "access resource" links on activities related to XOA and Object-Storage

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added virtual machine tags and IP address to the CSV export of virtual machines

### [IaaS VMware — Backup](/iaas_vmware)
- Offer to export only filtered items in the CSV export of backup reports in the virtual machines sub-tab

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added XOA VM-templates from the catalogs page

### [Object Storage](/storage/oss)
- Ability to create and reset the global access key from storage accounts

## v4.2.0 — 2024-12-10

### [Console](/console)
- Added redirects to the status page

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Items already present in 'My Catalog' now remain displayed in 'Public Catalog'
- Added redirects on components mentioned in a VMware catalog item
- Updated RAM display on a hypervisor cluster
- Removed the option to automatically replicate new disks causing errors
- Added validations on virtual machine replication
- Added new PCIPassthru extra config options from the advanced configuration of a virtual machine for GPU management
- Ability to add a PCI controller to virtual machines

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display of DRS recommendations and failures from a hypervisor cluster
- New status on hypervisors and datastores when a maintenance request is in progress
- Added information on the GPU of a hypervisor

### [IaaS VMware — Backup](/iaas_vmware)
- Removed several non-functional Backup options on virtual machines in test mode

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added a backup page for the OpenIaas backup section listing errors, policies, backup reports, and allowing recovery of deleted virtual machines

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added a page to list OpenIaas availability zones
- Added a storage page for the OpenIaas section
- Added a compute page for the OpenIaas section

### [Housing (Colocation)](/housing)
- Modified information displayed from the devices page

## v4.1.1 — 2024-11-18

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Improved memory editing; conversion is performed to the unit with the last integer value
- During a snapshot, the button to save RAM is disabled when the virtual machine is powered off
- When multiple virtual machines are expanded, the disk list does not display immediately

### [IaaS VMware — Backup](/iaas_vmware)
- Added the CSV export button in the virtual machines tab of the backup reports page

## v4.1.0 — 2024-11-13

### [Console](/console)
- Ability to send a file during feedback

### [Identity & Access (IAM)](/console/iam)
- Disabled the ability to delete an owner

### [Orders](/console/orders)
- Added management for adding, deleting, and editing a datastore from the orders page
- Added the ability to delete a Host

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added snapshot activities in the snapshot tab of a VM
- Display of the actual size of virtual machines in the CSV export

### [IaaS VMware — Infrastructure](/iaas_vmware)
- On the compute and storage pages, the filter on availability zones also applies to cluster tabs
- Display of usage percentages on consumption bars (CPU / RAM / Storage)

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added validation on the presence of backup policies on the automatic startup option
- Added an option to force shutdown/restart of virtual machines without guest tools installed
- Improved message when running an OpenIaas policy on a specific virtual machine

### [Bastion](/bastion)
- Added validation on the Host field of a device

## v4.0.3 — 2024-11-04

### [Console](/console)
- Improvements and fixes related to the new design

## v4.0.2 — 2024-10-30

### [Console](/console)
- Improvements and fixes related to the new design

## v4.0.1 — 2024-10-25

### [Console](/console)
- Improvements and fixes related to the new design

## v4.0.0 — 2024-10-18

### [Console](/console)
- New Console design
- Redesign of infrastructure and backup pages

---

:::info[Previous History]

The complete history of versions prior to v4.0 (v1.0 to v3.38.1, from February 2019 to October 2024) is available in the project's [Git history](https://github.com/Cloud-Temple/docs).

:::
