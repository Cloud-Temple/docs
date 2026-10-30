---
title: Product News
sidebar_position: 999
---

# Product News & Updates

> This changelog lists the new features and significant updates of the Cloud Temple platform.
> Bug fixes are included starting from version 4.50.0.

## v5.0.0 — 2026-10-15

### [Console](/console)
- New console: complete interface redesign, with a new design and a dark theme
- Choice of light or dark theme from the profile, with previews
- Guided tour of the new console on first login
- Ability to return to the previous console version from the "What's New" window, as long as it remains available
- Navigation: products are grouped in a single section, the Marketplace is placed under the Cost Manager and "Public Cloud" becomes "VM Instances"
- SecNumCloud mention in the header of qualified product pages
- Multi-step forms no longer close when clicking outside the window
- Fix for the closing of windows displaying a secret only once during its creation
- New detail page for VMware, OpenIaaS and VM Instances virtual machines, bringing together information, consumption and recent activities
- Actions menu on each row of the virtual machines list

### [VM Instances](/public_cloud/vm_instances)
- Virtual machine information remains viewable during an ongoing operation

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Redesigned Compute and Storage pages: cluster header with its consumption and new host and datastore cards
- Fix for duplicate loading when clicking on a cluster and the modified URL when returning to "All"

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Redesigned Compute and Storage pages: pool header with its consumption and new host, block storage and availability zone cards

### [Object Storage](/storage/oss)
- Redesigned file explorer: tree view, detail panel, drag and drop and upload tracking in the list
- Display and restore of deleted files on versioned buckets

### [Orders](/console/orders)
- New presentation of order details

### [Cost Manager](/console/billing/concepts)
- Clickable pie charts in the overview to access consumption details directly

### [Console — Organization](/console/iam/concepts)
- Fix for the Cost Manager loading indicator on the organization dashboard

### [Console — Activities](/console)
- Activity details enriched with related resources as they progress

### [Bastion](/bastion)
- "Copy All" button for the deployment YAML in the appliance details

### [Marketplace](/marketplace)
- Marketplace item card: table of contents and right column visible during scrolling

### [Metrics](/console/metrics/concepts)
- Fix for a tooltip remaining displayed on charts after unpinning

## v4.53.1 — 2026-10-15

### [Console](/console)
- Minor technical improvements

## v4.53.0 — 2026-10-14

### [VM Instances](/public_cloud/vm_instances)
- Display of beta badges on the relevant instance families and storage classes
- Display of availability and low stock indicators based on the selected family, zone and storage, with disabling of unavailable options
- Import of a VHD or VMDK data disk from the tenant's Object Storage, with file selection and progress tracking
- Limitation to 8 network cards per virtual machine, with limit indication during creation and card addition
- Display of storage price and estimated cost when adding a disk, as well as the cost after extension
- Identification of virtual machines in error by a dedicated status and addition of the corresponding filter
- Creation, restore and change of a virtual machine's backup policy: only policies compatible with the instance family are offered
- Fix for the backup policy retention unit, expressed as a number of backups and no longer in days
- Restore of a backup: only the instance families to which the backup can be restored are offered

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Ability to request the restart of an ESX host from the host list

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Ability to request the restart of an XCP host from the host list, with a pool unavailability warning when the last active host is affected

### [IaaS OpenSource — Virtual machines](/iaas_opensource)
- Template or Marketplace deployment: fix for the corruption of cloud-init configurations containing special characters, on read and on send

### [Marketplace](/marketplace)
- Fix for the deployment of an image on OpenIaaS when only the cloud-init network configuration is provided

### [Console — Organization](/console/iam/concepts)
- Tenant deletion: the confirmation prompt is now displayed above the input field

### [Console](/console)
- Protection of ongoing file transfers upon session expiration: interruption of the automatic redirect, display of progress and ability to reconnect in a new tab
- Fix for redirects of old links to support tickets and VMware and OpenIaaS hosts

## v4.52.2 — 2026-10-09

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Ability to detach the last storage cluster from a hypervisor cluster

## v4.52.1 — 2026-10-07

### [Orders](/console/orders)
- Fix for the datastore size increase order

### [LLMaaS](/llmaas)
- Fix for the total cost of LLMaaS consumption, which was higher than the chart total (consumptions now displayed per UTC day)

## v4.52.0 — 2026-10-06

### [IaaS VMware — Backup](/iaas_vmware)
- Restore of a virtual machine whose disks are spread across multiple datastores: choice of a destination datastore for each source datastore

### [IaaS OpenSource — Virtual machines](/iaas_opensource)
- Snapshots tab: identification of the type of each snapshot (manual, backup, replication, orphaned)
- Relocation of a virtual machine: ability to keep the original host to migrate only storage, now usable on a single-host pool
- Fix for the "Destroy cloud-init configuration after boot" checkbox, which had no effect when deploying a virtual machine by template

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Master host: removal of maintenance actions and indication of the path to follow for its deletion (deletion of its pool)
- Storage: entering and exiting maintenance of a Block Storage from the console

### [IaaS OpenSource — Backup](/iaas_opensource)
- Backup reports: policy executions are sorted by start date, from most recent to oldest
- Backup reports: various fixes on the screen (refresh, sorting and pagination of executions)

### [Marketplace](/marketplace)
- Image deployment: pre-filling of the cloud-init configuration (user-data and network configuration) provided by the image, modifiable before deployment

## v4.51.0 — 2026-09-18

### [Console — Organization](/console/iam/concepts)
- Addition of a "Type" column (SecNumCloud / Legacy) in the tenant list
- A tenant's favorite is now indicated by a "Favorite" badge in the tenant list

### [Identity & Access (IAM)](/console/iam)
- Clarification of the impact of a user's re-registration: the confirmation modal specifies that a new registration email will be sent to them

### [Support](/console)
- Re-display of the support information block in Organization mode

### [Metrics](/console/metrics/concepts)
- Fix for the legends of virtual machine metrics charts

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Fix for the vMotion wizard: the "Next" button remained stuck after a host compatibility error when returning to a previous step
- Sending of system keyboard shortcuts (Alt+Tab, ⌘, Esc…) to the virtual machine console in full screen (Keyboard Lock API, Chromium browser)
- Fix for the VMware console (WMKS): an Alt+Tab left the Alt key considered as pressed on the virtual machine side

### [IaaS OpenSource — Virtual machines](/iaas_opensource)
- Clarification of the warning when moving a virtual disk: associated virtual machines are no longer announced as suspended, only certain actions are temporarily unavailable

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Pool detail: display and management of Block Storage from Compute, and hosts from Storage (crossed tabs)

## v4.50.0 — 2026-09-10

### [Console](/console)
- Update of displayed quota units (GiB)

### [Console — Organization](/console/iam/concepts)
- Display of a tenant's provisioning progress upon its creation

### [Orders](/console/orders)
- Addition of the order for deletion of a VPC public IP
- Addition of the order for deletion of a Private Backbone IP

### [VPC](/network/vpc)
- Display of configuration status and choice of static IP on virtual machine operations
- Ability to choose a VPC network and configure a static IP in all forms requiring network configuration on a virtual machine (creation, deployment, migration, restore, export)

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Addition of the "Fabric" column in the network tab of a Bare Metal server

## v4.49.1 — 2026-09-03

### [IaaS VMware — Virtual machines](/iaas_vmware)
- The "Associate a public IP" action in the "Network cards" tab is grayed out when the VPC gateway is not enabled

### [IaaS OpenSource — Virtual machines](/iaas_opensource)
- The "Associate a public IP" action in the "Network cards" tab is grayed out when the VPC gateway is not enabled

### [VM Instances](/public_cloud/vm_instances)
- The "Associate a public IP" action in the "Network cards" tab is grayed out when the VPC gateway is not enabled

## v4.49.0 — 2026-08-31

### [Console](/console)
- Automatic launch of the welcome tutorial on a user's first login
- Removal of error notifications when loading the dashboard when environments are not provisioned

### [Console — Organization](/console/iam/concepts)
- Display of a tenant's activation price in the creation modal, in Organization mode

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Association and dissociation of a public IP from the "Network cards" tab of a virtual machine connected to a VPC

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display of the blade type rather than its description in the "Class" of clusters

### [IaaS OpenSource — Virtual machines](/iaas_opensource)
- The number of vCPUs offered when resizing a virtual machine is now bounded by its maximum capacity
- Association and dissociation of a public IP from the "Network cards" tab of a virtual machine connected to a VPC

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Display of the blade type rather than its description in the "Class" of pools

### [IaaS OpenSource — Backup](/iaas_opensource)
- Note on restore specifying that the original virtual machine is not replaced: a new dated virtual machine is created

### [VM Instances](/public_cloud/vm_instances)
- Hiding of fields and explicit message when no storage is available, when adding and extending a disk
- Association and dissociation of a public IP from the "Network cards" tab of a virtual machine connected to a VPC
- Ability to choose a custom template (free vCPU and RAM, within the limits of the instance family) at creation, restore and resizing of a VM Instance

### [Bare Metal](/iaas_bare-metal)
- Display of the blade type rather than its description in the "Class" of Bare Metal servers

### [Network](/network/network_overview)
- Interconnect IP reservation: blocking of network and broadcast addresses, and "Reserved" indicator on reserved IPs

### [VPC](/network/vpc)
- The "New VPC" button in the list is now grayed out when the VPC limit is reached

## v4.48.0 — 2026-08-13

### [Console](/console)
- Improvement of language selection persistence, now linked to the user profile

### [Console — Organization](/console/iam/concepts)
- A tenant's products are now grouped according to whether they are modifiable, non-deactivatable or unavailable, with the locking reason

### [Cost Manager](/console/billing/concepts)
- The Cost Manager section no longer appears on the Organization dashboard when the organization is not eligible
- Display of an error card, instead of a zero cost, when consumption retrieval fails on the Organization dashboard
- Support plan lines are now grouped under "Support" in the cost per tenant, instead of an "Unknown" tenant

### [Orders](/console/orders)
- Explicit message when there is no longer enough available space for a storage type, when ordering an availability zone or a pool

### [Support](/console)
- Descriptions and post-incident reports are now formatted (markdown) on the Incidents page
- Global support messages are now displayed in Organization mode

### [VM Instances](/public_cloud/vm_instances)
- The estimated cost displayed when creating a VM Instance is now monthly, on a 730 h/month basis

### [VPC](/network/vpc)
- The VPC name is now displayed before the network name in network selectors
- The VPC name now precedes the network name in the Network adapters tab of virtual machines
- Color harmonization of VPC type labels (shared, dedicated) with those of networks
- The VM Instances option is now available from the static IP association form
- Network adapters already associated with a static IP are now grayed out in the association form

### [Object Storage](/storage/oss)
- Choice of addressing style (path-style or virtual-hosted) when generating a file sharing link
- Warning on buckets whose name is not DNS-compatible: only path-style access is possible

### [Marketplace](/marketplace)
- Only availability zones compatible with the selected image are now offered during deployment from the Marketplace
- The price of a Marketplace product deployed as a VM Instance now indicates that it is calculated based on CPU, RAM and storage

### [Housing (Colocation)](/housing)
- Addition of 1000BASE-SX and 10GBASE-SR interface types to colocation space reservation

## v4.47.0 — 2026-07-30

### [Console](/console)
- The Swagger documentation of the Orders module is now available

### [IaaS VMware — Virtual machines](/iaas_vmware)
- When deploying a virtual machine, only the deployable items from the catalog (OVF and virtual machine templates) are now offered

### [VM Instances](/public_cloud/vm_instances)
- The estimated cost (hourly) is now displayed when creating an instance, with a breakdown by item (vCPU, RAM, disks)

### [VPC](/network/vpc)
- When ordering a new VPC, you can now choose a deployment on a dedicated environment (your OpenIaaS infrastructure) or on a shared environment (subject to a subscription to the VM Instances product)

### [Object Storage](/storage/oss)
- Uppercase letters are now rejected in bucket names, in accordance with naming rules

### [Marketplace](/marketplace)
- You can now deploy a VM Instance (Public Cloud) directly from a Marketplace product page

## 2026-07-27 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- The Distributed deployment model has been renamed MultiAZ
- Instance templates now go up to 6X-Large (32 vCPU and 128 GiB of memory) and hot-expandable storage up to 512 GiB
- Publication of sizing recommendations explaining the calibration of engine parameters, with a warning about enabling `performance_schema` below the X-Large template
- Point-in-time restore is no longer offered: backups now rely on daily physical backups and logical exports, without continuous archiving of transaction logs

### [Managed PostgreSQL](/managed_postgresql)
- New architecture based on the CloudNative-PG Kubernetes operator and the Barman Cloud backup plugin
- Three deployment models: StandAlone as a single instance, Replica as three asynchronously replicated instances with automatic failover, and Enterprise as three synchronously replicated instances on at least two nodes, with durability guaranteed without blocking in case of node unavailability
- Declarative deployment via Kubernetes custom resources, usable via Terraform or Helm, and native export of metrics to Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organization](/console/iam/concepts)
- You can now create a tenant directly from the Tenants page, by selecting the associated products

### [Console — Activities](/console)
- Activity logs can now be filtered by module

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- The public IP address is now displayed in the list of network interfaces of a virtual machine connected to a VPC
- A "Health" tab is now available in the details of a virtual machine, accessible from the list

### [IaaS VMware — Infrastructure](/iaas_vmware)
- You can now order VMware replication between availability zones

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- The list of network interfaces of a virtual machine connected to a VPC now displays the public IP address
- A "Health" tab is now available in the details of a virtual machine opened from the list

### [VM Instances](/public_cloud/vm_instances)
- The public IP address is now displayed in the list of network adapters of an instance connected to a VPC
- A "Health" tab is now available in the details of an instance, accessible from the list

### [Housing (Colocation)](/housing)
- Colocation orders are now available: space reservation, equipment installation and decommissioning
- Colocation intervention orders are now available: technical assistance and smart hands
- Colocation cabling and uncabling (CPE) orders are now available
- Colocation orders not supported by the console are now clearly indicated, with an invitation to contact support

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- Instance creation now relies on the selection of a system image, which replaces templates

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- When configuring cores per socket of an OpenIaaS virtual machine, the processor topology (number of sockets and cores per socket) is now explicitly displayed

### [LLMaaS](/llmaas)
- The minimum LLMaaS credit amount has changed; see the [official Cloud Temple pricing catalog](https://www.cloud-temple.com/en/our-public-rates/).

## v4.45.3 — 2026-07-21

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- When deploying a virtual machine, a "No template available" message is now displayed when the catalog is empty

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- When deploying a virtual machine, a "No template available" message is now displayed when the catalog is empty

## v4.45.2 — 2026-07-17

### [Console](/console)
- Minor technical improvements

## v4.45.0 — 2026-07-10

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- During a blocking operation, virtual machines now display an explicit status: backup, snapshot, or restore in progress
- CPU editing now adapts to the CPU hot add option and the state of the virtual machine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- During a blocking operation, virtual machines now display an explicit status (backup, snapshot, or restore in progress)
- The details of a virtual machine now present a usage summary (CPU, RAM, storage)

### [VM Instances](/public_cloud/vm_instances)
- Instances now display an explicit status (backup, snapshot, or restore in progress) during a blocking operation
- Instantaneous usage metrics (CPU, RAM, storage) are now displayed for each instance
- Name uniqueness is now enforced both at instance creation and at restore

### [Network](/network/network_overview)
- When an order includes a propagation step, new networks are only created upon final validation of the order

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- The network type (private backbone) is now displayed on the network adapters of an instance, including without the VPC feature

## v4.44.1 — 2026-07-02

### [Console](/console)
- Minor technical improvements

## v4.44.0 — 2026-07-02

### [Orders](/console/orders)
- Infrastructure provisioning actions now take into account business roles (compute, network, VPC, bare metal…) in addition to ordering rights

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Tracking of ISO and OVF file transfers has been improved and it is now possible to cancel an in-progress transfer

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Tracking of ISO and XVA file transfers has been improved and it is now possible to cancel an in-progress transfer

### [VM Instances](/public_cloud/vm_instances)
- Disk sizes no longer accept decimal values, whether at instance creation or at disk addition or extension
- Instance and resource processing indicators are now correctly restored after a page refresh

### [VPC](/network/vpc)
- From the network card of a virtual machine attached to a VPC network, you can now directly access the relevant VPC (VMware, OpenIaaS, and VM Instances)
- Some VPC orders can now be placed in parallel: adding a gateway during the creation of a private network (and vice versa), and multiple simultaneous deletions of private networks

## 2026-06-30 — Metrics API

### [Metrics](/console/metrics/concepts)
- An access token can now check the availability of the metrics service via the `HEAD /v1/configuration` API endpoint

## v4.43.0 — 2026-06-30

### [Console](/console)
- Network selectors now visually distinguish VPC networks and private Backbone networks
- An interactive tutorial is now available on the Users page

### [Console — Activities](/console)
- You can now view the details of an activity by expanding its row in the Recent and Archived lists
- Each activity now has a dedicated detail page, accessible by direct link
- The details of an activity are now accessible from success and failure notifications
- You can now view the full JSON of an activity, copy it, or download it
- The list of archived activities can now be sorted by creation date

### [Orders](/console/orders)
- The display of order progress has been redesigned

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- The details of a virtual machine are now displayed in a new view
- During hot modification, consistency between CPU and cores per socket is enforced: warnings are displayed and invalid values are not accepted

### [IaaS VMware — Infrastructure](/iaas_vmware)
- You can now request the deletion of an IaaS environment

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- A new detail view is available for virtual machines
- You can now filter the list of virtual machines by availability zone (AZ)

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- The Storage Repository page now displays the date of the disk snapshot

### [VM Instances](/public_cloud/vm_instances)
- The details of an instance are displayed in a new view
- The "Run a backup now" button is now disabled when backup is not available

### [VPC](/network/vpc)
- The description of the public IP address is now displayed when it is associated with a private network

### [Object Storage](/storage/oss)
- You can now add a description to the allowed IP addresses (whitelist) of a bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- The "Privacy" section has been updated

### [Object Storage](/storage/oss)
- The availability of the TLS wildcard certificate for host-style S3 access is now indicated
- You can now upload a file to S3 from a pre-signed URL
- You can now enable versioning on a bucket
- You can now manage file versions

## v4.41.1 — 2026-06-11

### [Orders](/console/orders)
- The maximum available when ordering a Block Storage has been updated

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Messages related to stock are now more precise when ordering hypervisors or increasing the RAM of a cluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- When adding an existing disk to a virtual machine, the disk UUID is now displayed when multiple disks share the same name

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- A warning is now displayed when requesting an update of the master host of a pool

### [VPC](/network/vpc)
- Ordering a VPC now requires that an OpenIaaS availability zone be deployed

## 2026-06-06 — Console MCP Server

- Authentication help resource describing how to obtain a personal access token and the expected header format; authentication errors now indicate the cause and the steps to follow
- Impactful configuration change: the API URL specified in the server configuration must now include the `/api` segment, to be updated before deploying this version to avoid 404 errors. The URL is validated at startup and the private public key infrastructure is supported

## 2026-06-05 — Console MCP Server

- Query of the deployed server name and version

## v4.40.0 — 2026-06-02

### [Console](/console)
- An interactive onboarding tour is now available

### [Console — Organization](/console/iam/concepts)
- The cost manager is now available in the organization view
- The organization view now benefits from a dedicated display

### [Orders](/console/orders)
- The network step no longer appears in orders when only the VPC product is enabled

### [Support](/console)
- Support plans and contacts have been updated

### [Support Tickets](/console)
- Managed service features have been removed from support tickets

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Public content library features have been removed

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- The default value of the CloudInit step has been updated for OpenIaaS deployments from the Marketplace
- Sending special characters from the clipboard of a virtual machine console has been improved

### [Network](/network/network_overview)
- You can now delete the description of an IP address
- You can now fill in the `description` field when creating a virtual network
- You can now fill in the `description` field when modifying a virtual network

### [VPC](/network/vpc)
- The description of a VPC floating IP is now displayed
- You can now modify the description of a VPC floating IP

## 2026-05-25 — Console MCP Server

- Each permission denial now indicates the relevant product and the exact name of the permission to enable on the personal access token

## 2026-05-24 — Console MCP Server

- Support management from an agent: ticket list and details, creation, comment, closure, consultation of planned maintenance and their categories, tenant incidents and platform incidents
- Destroy after start option on deployment from the Marketplace
- Guided walkthrough for deploying a Linux virtual machine
- Directly queryable resources: IaaS OpenSource glossary, pool topology bringing together hosts, storage repositories, networks and indicators in a single read, and Marketplace catalog filtered on IaaS OpenSource

## 2026-05-23 — Console MCP Server

- Marketplace catalog browsing with filters, and IaaS OpenSource (XVA) and VMware (OVF) technical sheets detailing processors, memory, disks and exact network interface names
- Deployment of an IaaS OpenSource virtual machine from a catalog item, idempotent by name
- Control of IaaS OpenSource virtual machine power — power on, power off, restart, pause, suspend and resume — idempotent by state
- Tracking of long-running operations via activities

## 2026-05-22 — Console MCP Server

- Extended IaaS OpenSource query: pools, hosts, virtual machines, snapshots, network adapters with duplicate MAC address detection, virtual disks and replication status, all these operations being read-only
- Server-side filters applicable to all of these lists

## v4.39.2 — 2026-05-22

### [Network](/network/network_overview)
- You can now delete the PTR record of a public IP address or an interconnection IP address

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- The naming rules for virtual machine snapshots have been changed

### [Bare Metal](/iaas_bare-metal)
- You can now modify the description of a blade

### [Network](/network/network_overview)
- You can now modify the PTR record of an interconnection IP address

## v4.39.0 — 2026-04-23

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Existing disks are now displayed when adding a new disk
- When moving (vMotion) a virtual machine in "compute resource only" mode, it is now possible to choose a cluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Existing disks are now displayed when adding a new disk

### [VM Instances](/public_cloud/vm_instances)
- The VM Instances list can now be exported in CSV format
- The display of a backup policy frequency has been revised

### [Bare Metal](/iaas_bare-metal)
- Network selection is now mandatory when propagating a network to a Bare Metal

## 2026-04-20 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- Publication of engine parameters associated with each instance template: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` and `table_open_cache`
- Revision of instance templates: the ceiling is reduced to 3X-Large (8 vCPU and 32 Gio of memory) and the maximum hot-expandable storage is reduced from 512 Gio to 128 Gio

### [Managed PostgreSQL](/managed_postgresql)
- Publication of engine parameters associated with each instance template: `shared_buffers`, `effective_cache_size`, `work_mem` and `max_connections`
- Revision of instance templates: the ceiling is reduced to 3X-Large (8 vCPU and 32 Gio of memory) and the maximum hot-expandable storage is reduced from 512 Gio to 128 Gio

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- The proposed networks are now filtered both when creating an instance and when modifying a network adapter

## v4.38.0 — 2026-04-17

### [Identity & Access (IAM)](/console/iam)
- Six new permissions are available: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` and `public_cloud_vm_instances_console_access`
- The name of the relevant product now appears at the top of each permission description

### [Cost Manager](/console/billing/concepts)
- The cost manager interface has been improved
- The unit displayed in consumption charts has been updated

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- When deploying a virtual machine, the Marketplace image selection step has been revised

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- You can now toggle the catalog page display between grid and table
- The Marketplace image selection step when deploying a virtual machine has been updated

### [VM Instances](/public_cloud/vm_instances)
- The dashboard now displays VM Instances quota usage
- A new page presents the VM Instances list
- You can now create a new instance
- You can now view and manage the disks, network adapters, and snapshots of an instance
- You can now update the capabilities of an instance and modify its status
- You can now access the console of an instance

### [LLMaaS](/llmaas)
- The price display in the consumption view and the credit top-up form have been updated

## 2026-04-15 — Managed Databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- Preview release of Managed MariaDB: StandAlone and Distributed models in a three-node cluster behind a proxy, storage replicated across three availability zones and 99.9% availability commitment

### [Managed PostgreSQL](/managed_postgresql)
- Preview release of Managed PostgreSQL: StandAlone and Distributed models in a three-node cluster behind a proxy, synchronous multi-zone replication with no data loss and point-in-time recovery

## v4.37.0 — 2026-04-02

### [Cost Manager](/console/billing/concepts)
- Added forecasted amount on the consumption page for the chart and trend
- Visual improvement when there is an error or insufficient data on the current month's consumption

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Improved the form to deploy a virtual machine from a catalog item
- Added the ability to change the display type (grid or table) from the catalog page

## v4.36.0 — 2026-03-27

### [Console](/console)
- Updated metrics and consumption charts

### [Cost Manager](/console/billing/concepts)
- Added the cost manager page
- Ability to view current month costs
- Ability to view costs over a date range and compare trends

### [Orders](/console/orders)
- Blocking the deprovisioning of a hypervisor cluster when a storage cluster is attached

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added filters and sorting on the disk list from Block Storage details

### [VPC](/network/vpc)
- Improved the interface for data loading in forms

## v4.35.4 — 2026-03-18

### [Console](/console)
- Improved websocket reconnection

### [Support](/console)
- Added a fallback solution for creating a support ticket when websockets are disconnected

## v4.35.3 — 2026-03-17

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Updated disk retrieval when loading replicas from the Replication tab

## v4.35.0 — 2026-03-11

### [Orders](/console/orders)
- Added the command to delete a cpool/spool mapping
- Added the command to deprovision a VPC private network
- Changes to the Bare Metal volume deprovisioning command, it is now possible to order deletion from the volume list
- Added the command to delete a Bare Metal volume mapping
- Added the command to deprovision a VPC
- Blocking the deprovisioning of a datastore if it is the last one in a datastore cluster

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Ability to add a RAM limit on a virtual machine

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Updated VMware multi vMotion to allow moving VMs from one cluster to another

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added the ability to update a host
- Display of host update information

### [Network](/network/network_overview)
- Disabling the network propagation deletion button when no propagation is delivered

### [LLMaaS](/llmaas)
- Display of consumption grouped by token type

## v4.34.0 — 2026-02-18

### [Console](/console)
- Major update of the application display engine
- The VMware and OpenIaaS menus are not displayed when only the metrics module is enabled

### [Metrics](/console/metrics/concepts)
- Ability to export to CSV from the VMware and OpenIaaS Metrics pages

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- When moving a virtual machine, it is not possible to select the same destination host as the current host of the virtual machine
- Added the 'New catalog' button on the VMware Catalog page

## 2026-02-04 — Console MCP Server

- Viewing IaaS OpenSource virtual machine templates, networks, hosts, and storage repositories

## 2026-02-03 — Console MCP Server

- Availability of the Console MCP (Model Context Protocol) server, authenticated by personal access token
- Viewing and managing VMware virtual machines from an agent: list, detail, virtual datacenters, power on and power off

## v4.33.0 — 2026-01-21

### [Orders](/console/orders)
- Added the command to delete a network propagation on OpenIaaS

### [Metrics](/console/metrics/concepts)
- Added filters for the VMware and OpenIaaS metrics pages

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added the 'Virtual Machines' metrics page
- Added the metrics details page for each VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Updated the support ticket closure modal

### [IaaS VMware — Backup](/iaas_vmware)
- When assigning a backup policy to a disk, it is now suggested to inventory the disk if it is not recognized by the backup solution

### [Bare Metal](/iaas_bare-metal)
- The deletion of a BFS volume on a Bare Metal is now blocked, the volume will be deleted upon deletion of the Bare Metal
- When ordering a Bare Metal, the first volume is now renamed 'BFS volume'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Backup](/iaas_vmware)
- Updated the tooltip explanations on the options available when restoring a virtual machine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Snapshots linked to backup policies are now visible
- Display of the Host linked to the storage location of an ISO during upload and from the catalog page

### [Object Storage](/storage/oss)
- Display of an explanatory card from the incomplete MPU tab when the Console IP is not authorized, preventing the tab from being displayed

### [Marketplace](/marketplace)
- Display of the error card when accessing a non-existent marketplace page

## v4.30.1 — 2025-12-16

### [Console](/console)
- Improved empty error display by showing the returned HTTP status by default

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Ability to associate a static IP with a custom MAC address

### [LLMaaS](/llmaas)
- On consumption metrics, filtering out series with values of 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Improved action synchronization on VPC pages
- Added the association of a static IP to a public IP from the static IPs list

### [Storage](/storage/oss)
- Added incomplete MPUs from a bucket page
- Ability to delete an incomplete MPU

## v4.28.0 — 2025-11-21

### [Console](/console)
- Added the ability to display global information messages visible across the entire application

### [Orders](/console/orders)
- Ability to order an LLMaaS credit top-up for the tenant
- Ability to order a VPC
- Ability to order a private network in a VPC
- Ability to order a public IP for the VPC product
- Ability to enable the gateway for a VPC
- Added the ability to order the deletion of a tenant

### [Metrics](/console/metrics/concepts)
- Improved tooltip display on metrics charts: it is now possible to click on a point to freeze the tooltip and view all data

### [Network](/network/network_overview)
- Grouping of the Networks and Internet pages under a single product: Private Backbone
- Added PTR record management when modifying a public IP
- Blocking sharing for certain network types

### [VPC](/network/vpc)
- Integration of the VPC product
- Added a page listing VPCs
- Added a VPC Details page
- Ability to manage private networks, public IPs, and the gateway of a VPC
- Ability to associate a static IP from a VPC private network to a VMware or OpenIaaS network adapter
- Ability to associate a static IP with a public IP of a VPC

### [LLMaaS](/llmaas)
- Added a Billing tab on the LLMaaS page for tenants with prepayment enabled
- Display of remaining credit for tenants in prepayment mode, on the dashboard and from the Billing tab

## v4.27.0 — 2025-11-12

### [Orders](/console/orders)
- Added a check regarding available stock when ordering resources
- Added a filter by order type and by product on the orders list

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Improved the virtual machines console. Better keyboard handling, and added a clipboard

### [IaaS VMware — Backup](/iaas_vmware)
- Added an alert on the dashboard for SPP backup VSnap with too high occupancy

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Improved the virtual machines console. Better keyboard handling, and added a clipboard

### [Marketplace](/marketplace)
- Added the ability to display the technical details of an image

## v4.26.5 — 2025-11-04

### [Console](/console)
- Improved the size of dashboard charts when resizing the window

## v4.26.3 — 2025-10-31

### [Metrics](/console/metrics/concepts)
- Modified the name of metrics exports displayed in the charts

## v4.26.0 — 2025-10-22

### [Console](/console)
- Added a button to copy the UUID of the current scope from the user profile
- Complete redesign of the Dashboard
- Added automatic reconnection to activity tracking when the connection is interrupted

### [Orders](/console/orders)
- Updated order forms to add them to the relevant pages (e.g., new Datastore from the Storage page)

### [Support](/console)
- Added the email address of the person who closed the ticket in the support ticket rating

### [Metrics](/console/metrics/concepts)
- Redesigned VMware metrics retrieval, the page URL is now /iaas/metrics
- Added a VMware infrastructure metrics tab on Compute
- Added a VMware infrastructure metrics tab on Storage
- Added a metrics page for OpenIaaS
- Added an OpenIaaS infrastructure metrics tab on Compute
- Added an OpenIaaS infrastructure metrics tab on Storage

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added new extra_config keys (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocking the selection of a hostcluster without an active host
- When creating a VMware virtual machine, the Vcenter selection is now based on the selected availability zone
- Added limits on names and descriptions when uploading a file on VMware

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- When adding an OpenIaaS disk, storages not belonging to the virtual machine's Pool are now filtered
- When taking a snapshot, the option to capture memory is now unchecked by default

### [IaaS OpenSource — Backup](/iaas_opensource)
- Added the ability to run a backup from the backups tab of an OpenIaaS virtual machine

### [Network](/network/network_overview)
- Removed the constraint preventing the selection of multiple network types on the virtual networks page

### [Object Storage](/storage/oss)
- Optimized file retrieval from a bucket

### [PaaS OpenShift](/paas_openshift)
- Added a page listing OpenShift clusters
- Added an OpenShift cluster details page

### [Marketplace](/marketplace)
- Added a filter by UUID and the ability to copy the UUID of an item

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Updated the use of advanced configuration and OVF properties when deploying a VMware virtual machine

## v4.24.0 — 2025-09-24

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Ability to deploy a virtual machine image from the virtual machines list

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Ability to deploy a virtual machine image from the virtual machines list

### [Network](/network/network_overview)
- Added a validation to block the deletion of a network sharing if the network is propagated in another Tenant

### [Marketplace](/marketplace)
- Addition of the Marketplace product
- Addition of a page listing the solutions available in the catalog
- Addition of a page to view the details of a solution
- Ability to deploy a virtual machine image on an OpenIaaS or VMware environment from the details of a solution
- Ability to contact a partner for a managed services solution

## v4.23.0 — 2025-09-12

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Addition of support for 4 new extra-configs values

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Do not display the HA alert on the affected VMs when the local ISO is not mounted
- When adding or resizing a disk, indicate if the related SR is used for a replication configuration

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Addition of the AZ name on the backup report

### [Object Storage](/storage/oss)
- Update of the information regarding the lifecycle of a bucket

### [LLMaaS](/llmaas)
- Addition of the LLMaaS product
- Addition of the list of available models
- Addition of the list of API keys with the ability to create them
- Addition of consumption by models and by keys
- Addition of model details
- Ability to test a model

## v4.22.1 — 2025-09-10

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Modification of the alerts regarding the chosen disk format configuration, during a VMotion including storage

## v4.22.0 — 2025-09-02

### [Commandes](/console/orders)
- Addition of the order for a network propagation deletion from the all orders page, all available orders are now accessible from this page

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Update of the conditions on the disk format change during the movement of a virtual machine and addition of information on the current disk format during a per-disk configuration

## v4.21.0 — 2025-08-22

### [Console](/console)
- Update of the display when no data is created/provisioned or when an error occurs when retrieving information.

### [Support](/console)
- Opening of support modals with the associated service pre-selected
- Addition of a badge in the menu and the navbar when a support ticket requires a response

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Addition of the ability to export the list of VMware replicas in CSV
- Improvement of the RAM selection slider on certain orders
- Addition of the management of Static differed and immediate options for vMotion

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Blocking of the deletion of a non-empty cluster or with hosts/datastores not in maintenance

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Addition of the ability to export the list of OpenIaaS replicas and associated policies in CSV
- Addition of details on the tools used by virtual machines (pvDrivers, managementAgent and tools)
- Addition of checks for high availability (HA)

### [Réseau](/network/network_overview)
- Modification of the IPv4 address selection with an available list

## v4.20.0 — 2025-07-29

### [Commandes](/console/orders)
- Addition of information regarding limited and out-of-stock compute resources when ordering a new availability zone

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Addition of a VMware Tools option to synchronize the time with the host
- Update of the conditions on the encryption of a virtual machine

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Removal of the last execution information of replication policies causing slowness
- Management of TX checksumming for network adapters
- Addition of a warning on OpenIaaS replication if the number of AZs is less than 2
- Addition of high availability (HA) for pools and virtual machines

## v4.19.0 — 2025-07-24

### [Commandes](/console/orders)
- Update of the public IPs order with the ability to order an IPv6 prefix
- Update of the display of available orders when no environment is provisioned

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Addition of a replication filter on the list of virtual machines
- Update of the virtual machine creation modal

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Addition of a replication filter on the list of virtual machines

### [Réseau](/network/network_overview)
- Update of the Internet page with the addition of IPv6 management

## v4.18.0 — 2025-07-15

### [Console](/console)
- Update of the display when no data is created/provisioned or when an error occurs when retrieving information.

### [Commandes](/console/orders)
- Update of the internet steps when ordering a new availability zone or a new pool

### [Support](/console)
- Addition of a security service for each product when creating a support ticket

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Addition of a link from a mounted ISO on a controller to the corresponding item in the catalog

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Addition of an OpenIaaS Replication page with the list of replicas and replication policies
- Ability to add and remove a replication configuration to an OpenIaaS virtual machine
- Ability to create and delete a replication policy
- Ability to restore a replica
- Ability to export virtual machines in CSV format.

## v4.17.0 — 2025-06-20

### [Commandes](/console/orders)
- Ability to order an OpenIaaS Pool
- Ability to order the association of an existing volume to an existing Bare Metal from the Bare Metal page, from the volume page and from the orders page

### [Support](/console)
- Ability to delete a file on a support ticket
- The description on satisfaction at the closure of a ticket is now optional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Addition of English translations on the consumption reports page of the order menu

### [Commandes](/console/orders)
- Ability to order the size increase of a bare metal volume
- Ability to order the size increase of an OpenIaaS Block Storage

### [Support](/console)
- Redesign of the support ticket creation
- Interpretation of markdown on a support ticket and update of the display order of comments
- Addition of a feedback when closing a support ticket
- Update of the display of pictograms according to the impact of a global incident

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Addition of an option to keep the configuration of a virtual machine during a restore to Production on the original cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Addition of a warning message in case of insufficient disk space on a Block Storage (90% used) and warning during orders

### [Object Storage](/storage/oss)
- Addition of the description of S3 roles when assigning on a bucket

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Display of an error when a network is misconfigured on a network adapter of a virtual machine, also preventing the startup of the virtual machine

## v4.15.0 — 2025-05-13

### [Console](/console)
- Adjustment of the units displayed on infrastructure resources: GiB (Gibibyte) instead of GB (Gigabyte)

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ability to move an OpenIaaS disk
- Ability to connect and disconnect an OpenIaaS disk
- Display of the connected/disconnected status of a disk
- Ability to copy the UUID of a disk, virtual network or snapshot
- Ability to choose the name of a virtual machine during an XVA file deployment
- Addition of the ability to assign a backup policy when starting a virtual machine if it has none.

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Addition of available actions on a disk from a Block Storage

### [Bare Metal](/iaas_bare-metal)
- Addition of MAC addresses on the interfaces table of a Bare Metal
- Addition of a page on the details of a Bare Metal volume

## v4.14.0 — 2025-04-28

### [Console](/console)
- Ability to pin pages in the menu
- Update of the rendering of API documentation

### [Commandes](/console/orders)
- Ability to order the deletion of an OpenIaaS Block Storage
- Ability to order the addition of a Block Storage to an OpenIaaS Pool
- Ability to order the deletion of an OpenIaaS Host
- Addition of the information of the concerned product on the list of orders
- Ability to order the addition of a Host to an OpenIaaS pool

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ability to put a Host in maintenance
- Ability to edit the description of a model
- Ability to choose a Host at the startup of a virtual machine
- Addition of a uniqueness rule on the name of OpenIaaS virtual machines

## v4.13.0 — 2025-04-08

### [Console](/console)
- Addition of statistics and contact information on the Support page

### [Commandes](/console/orders)
- Redesign of the display of order details
- Redesign of the display of order choices
- Update of the display to order the first baremetal when there is none
- Update of the Bare Metal order with the selection of network propagation on the Bare Metal interfaces
- Ability to propagate a VLAN on a Bare Metal
- Ability to add a volume to a baremetal
- Ability to deprovision a volume from a Bare Metal
- Ability to deprovision a Bare Metal

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Addition of a copy UUID button on VMware networks and catalogs

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Addition of a copy UUID button on OpenIaaS networks and catalogs
- Addition of a copy UUID button on a Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Addition of the display of network interfaces and the networks propagated on a baremetal
- Add the actions to power on, restart and power off a baremetal

### [Réseau](/network/network_overview)
- Ability to view the propagations on a Bare Metal of a network

## v4.12.0 — 2025-03-25

### [Console](/console)
- Ability to delete a whitelist IP from the access page

### Étiquettes
- Addition of tags on OpenIaaS virtual machines

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Update of the retrieval of API recommendations on affinity/anti-affinity rules of a HostCluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Display the import of an OpenIaaS XVA on the list of downloads
- Ability to attach an existing disk to a virtual machine
- Ability to detach an existing disk from a virtual machine

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Update of the display of disks of an OpenIaaS Block Storage

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Update of the error message when accessing the files of an Object Storage bucket

## v4.11.1 — 2025-03-12

### [Commandes](/console/orders)
- Update of the availability zone names during an order
- Modification of the minimum datastore when ordering a datastoreCluster

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- When the label field of hostCluster and datastoreCluster is modified to empty, the technical name will be applied by default

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- When the label field of pools is modified to empty, the technical name will be applied by default
- Addition of an informative bubble on the catalog page and during ISO import to indicate that XVA is supported when creating a virtual machine

## v4.11.0 — 2025-03-10

### [Commandes](/console/orders)
- Update of the authorized network types when creating an AZ
- Update of the minimum resources to provision when ordering a new availability zone

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Display of the virtual machine name in the console tab for VMware

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Addition of the management of labels on VMware datastore cluster and host cluster

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Allow the deployment of a virtual machine via XVA import for OpenIaaS
- Addition of the management of labels on OpenIaaS pools
- Display of the virtual machine name in the console tab for OpenIaaS

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Update of the CPU information of OpenIaaS hosts and pools

### [Bare Metal](/iaas_bare-metal)
- Addition of IOPS/TO on baremetal volumes

## v4.10.0 — 2025-03-04

### [Console](/console)
- Update of the links to the new public documentation

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Addition of an alert to inform users in case of duplicate MAC addresses on the list of virtual machines and during the creation or modification of network adapters
- Addition of an option to force the shutdown or restart of a virtual machine
- Memory will no longer be included by default during a snapshot if the virtual machine is not powered on
- Ability to rename and resize a disk
- Addition of the deletion of ISOs and models from the catalog page
- Addition of the ability to delete the 'Cloud Init' configuration disk during the deployment of a virtual machine

## v4.9.1 — 2025-02-27

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ability to edit a network adapter on a powered-on virtual machine

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Addition of restrictions on the characters allowed in the names of OpenIaaS virtual machines

## v4.9.0 — 2025-02-21

### [Console](/console)
- Make names clickable in tables when a related page exists
- Improve the opening of consoles to avoid opening multiple tabs if multiple windows are open on the same page
- Display an error when opening a console if the browser does not allow redirects on the application

### [Métriques](/console/metrics/concepts)
- Display the unit of RAM on the health page of virtual machines

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Block the creation of a virtual machine if the space on the selected Block Storage is not sufficient
- Clear the default MAC addresses when creating an OpenIaaS virtual machine

### [Stockage](/storage/oss)
- Ability to copy an S3 endpoint to the clipboard

## v4.8.0 — 2025-02-14

### [Commandes](/console/orders)
- Addition of the order for network propagation on OpenIaaS Pools
- Addition of network propagation orders in the all orders page

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Display of the number of assigned and available disks per controller on a virtual machine
- Update of the conditions on the number of disks that can be added on Para Virtual SCSI controllers based on the hardware version of the virtual machine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Ability to add Cloud Init options when creating an OpenIaaS virtual machine
- Display of disks on a Block Storage page
- Ability to update the boot firmware configuration of an OpenIaaS virtual machine
- Ability to clone an OpenIaaS virtual machine

### [Network](/network/network_overview)
- Update of the network propagation visualization and addition of OpenIaaS propagations
- Update of network creation and ability to propagate the network on the OpenIaaS infrastructure upon creation

## v4.7.0 — 2025-02-03

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- OVF export is blocked when the virtual machine is encrypted

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display datastore-cluster and host-cluster relationships on the Compute and Storage pages

### [IaaS VMware — Backup](/iaas_vmware)
- Modification of the startup option after restore for a SecNumCloud environment when restoring in clone or production mode on an alternative host or cluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Add mount and unmount buttons for an OpenIaaS ISO in the action bar of a virtual machine

### [Network](/network/network_overview)
- Improvement of the network propagation display when propagation deletion requests are in progress

## v4.6.0 — 2025-01-30

### [Console](/console)
- Remove characters displayed during auto-completion when adding observers to the creation of a support ticket
- Update of the menu and available pages display for VMware and OpenIaaS offers on a new environment without provisioned availability zones

### [Console — Notifications](/console)
- Update of the notification subscriptions display from the profile page

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Add the ability to encrypt a virtual machine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Addition of the export as template for a virtual machine

## v4.5.0 — 2025-01-17

### [Console](/console)
- Addition of the description to the creation and display of whitelists
- Ability to modify the description of a whitelist

### [Orders](/console/orders)
- Addition of a new OpenIaaS Availability Zone order
- Addition of an order for Bare Metal
- Link a hypervisor cluster to a storage cluster

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Display the remaining size in parentheses in the storage selection trees

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Addition of the worst case memory allocation on a VMware hostCluster

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Addition of ISO upload on OpenIaaS catalogs
- Addition of OpenIaaS virtual machine migration
- Ability to choose disks and networks when creating an OpenIaaS virtual machine

### [Bare Metal](/iaas_bare-metal)
- Addition of a page listing Bare Metal
- Addition of a page listing Bare Metal volumes
- Addition of a page with Bare Metal details
- Addition of the ability to open a Bare Metal console

## v4.4.0 — 2025-01-13

### [Console](/console)
- Technical changes made during the authentication process

## v4.3.0 — 2024-12-19

### [Console — Activities](/console)
- Addition of "access the resource" links on activities related to XOA and Object-Storage

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Addition of tags and the IP of the virtual machine to the CSV export of virtual machines

### [IaaS VMware — Backup](/iaas_vmware)
- Offer to export only the filtered items on the CSV export of backup reports in the virtual machines sub-tab

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Addition of XOA VM-templates from the catalogs page

### [Object Storage](/storage/oss)
- Ability to create and reset the global access key from storage accounts

## v4.2.0 — 2024-12-10

### [Console](/console)
- Add redirects to the status page

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Items already present in 'My catalog' are now still displayed in 'Public catalog'
- Add redirects on the components referenced in a VMware catalog item
- Update of the RAM display on a hypervisor cluster
- Removal of the option to automatically replicate new disks causing errors
- Addition of validations on the replication of a virtual machine
- Addition of new extra config PCIPassthru from the advanced configuration of a virtual machine for GPU management
- Ability to add a PCI controller on virtual machines

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display of DRS recommendations and failures from a hypervisor cluster
- New status on hypervisors and datastores when a maintenance request is in progress
- Addition of GPU information on a hypervisor

### [IaaS VMware — Backup](/iaas_vmware)
- Remove several non-functional Backup options on virtual machines in test mode

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Addition of a backup page for the OpenIaas backup section listing errors, policies, backup reports and allowing the recovery of deleted virtual machines

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Addition of a page to list OpenIaas availability zones
- Add a storage page for the OpenIaas section
- Addition of a compute page for the OpenIaas section

### [Housing (Colocation)](/housing)
- Modification of the information displayed from the devices page

## v4.1.1 — 2024-11-18

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Improvement of the memory editing, the conversion is performed to the unit with the last whole value
- During a snapshot, the button to save RAM is disabled when the virtual machine is powered off
- When multiple virtual machines are expanded, the disk list does not display immediately

### [IaaS VMware — Backup](/iaas_vmware)
- Addition of the CSV export button in the virtual machines tab of the backup reports page

## v4.1.0 — 2024-11-13

### [Console](/console)
- Ability to send a file during a feedback

### [Identity & Access (IAM)](/console/iam)
- Disabling of the ability to delete an owner

### [Orders](/console/orders)
- Addition of the management of adding, deleting and editing a datastore from the orders page
- Addition of the ability to delete a Host

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Addition of snapshot activities in the snapshot tab of a VM
- Display of the actual size of virtual machines in the CSV export

### [IaaS VMware — Infrastructure](/iaas_vmware)
- On the compute and storage pages, the filter on availability zones also applies to the cluster tabs
- Display of usage percentages on the consumption bars (CPU / RAM / Storage)

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Addition of a validation on the presence of backup policies on the automatic startup option
- Addition of an option to force shutdown/restart of virtual machines without guest-tools installed
- Improvement of the execution message of an OpenIaas policy on a specific virtual machine

### [Bastion](/bastion)
- Addition of a validation on the Host field of a device

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
- Redesign of the infrastructure and backup pages

---

:::info[Previous history]

The complete history of versions prior to v4.0 (v1.0 to v3.38.1, from February 2019 to October 2024) is available in the [Git history](https://github.com/Cloud-Temple/docs) of the project.

:::
