---
title: Product Updates
sidebar_position: 999
---

# Product Updates & Enhancements

> This changelog lists only new features and significant enhancements to the Cloud Temple platform.
> Bug fixes are intentionally excluded.

## v4.49.3 — 2026-09-09

### [Bare Metal](/iaas_bare-metal)
- Added the « Fabric » column to the network tab of a Bare Metal server

## v4.49.0 — 2026-08-31

### [Console](/console)
- Automatic launch of the welcome tutorial on a user's first login
- Removal of error notifications on dashboard load when environments are not provisioned

### [Console — Organisation](/console/iam/concepts)
- Display tenant activation price in the creation modal, in Organization mode

### [VM Instances](/public_cloud/vm_instances)
- Hiding fields and displaying an explicit message when no storage is available when adding or extending a disk
- Associating and disassociating a public IP from the "Network interfaces" tab of a virtual machine connected to a VPC
- Ability to select a custom configuration (custom vCPU and RAM, within the limits of the instance family) when creating, restoring, or resizing a VM Instance

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- The number of vCPUs available for virtual machine resizing is now limited to its maximum capacity
- Association and dissociation of a public IP from the "Network cards" tab of a virtual machine connected to a VPC

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Display blade type instead of its description in the pool 'Class'

### [IaaS OpenSource — Backup](/iaas_opensource)
- Note on restoration specifying that the original virtual machine is not replaced: a new dated virtual machine is created

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Associating and disassociating a public IP from the "Network cards" tab of a virtual machine connected to a VPC

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display blade type instead of its description in the cluster "Class"

### [Réseau](/network/network_overview)
- Interconnection IP reservation: blocking of network and broadcast addresses, and 'Reserved' indicator on reserved IPs

### [VPC](/network/vpc)
- The "New VPC" button in the list is now grayed out when the VPC limit is reached.

### [Bare Metal](/iaas_bare-metal)
- Display the blade type instead of its description in the "Class" of Bare Metal servers

## v4.48.0 — 2026-08-13

### [Console](/console)
- Improved persistence of language selection, now linked to the user profile

### [VM Instances](/public_cloud/vm_instances)
- The estimated cost displayed when creating a VM Instance is now monthly, based on 730 hours per month.

### [Marketplace](/marketplace)
- Only availability zones compatible with the selected image are now offered during deployment from the Marketplace
- The price of a Marketplace product deployed as a VM Instance now indicates that it is calculated based on CPU, RAM, and storage

### [Commandes](/console/orders)
- Clear message when there is no longer enough available space for a storage type, when ordering an availability zone or a pool

### [VPC](/network/vpc)
- The VPC name is now displayed before the network name in network selectors
- The VPC name now precedes the network name in the Network Adapters tab of virtual machines
- VPC type label colors (shared, dedicated) are now aligned with network colors
- The VM Instances option is now available from the static IP association form
- Network adapters already associated with a static IP are now grayed out in the association form

### [Object Storage](/storage/oss)
- Choice of addressing style (path-style or virtual-hosted) when generating a file sharing link
- Warning for buckets with non-DNS-compatible names: only path-style access is possible

### [Cost Manager](/console/billing/concepts)
- The Cost Manager section no longer appears on the Organization dashboard when the organization is not eligible
- Displays an error card, instead of a €0 cost, when consumption retrieval fails on the Organization dashboard
- Support plan lines are now grouped under "Support" in the cost per tenant, instead of an "Unknown" tenant

### [Console — Organization](/console/iam/concepts)
- Tenant products are now grouped based on whether they are editable, cannot be disabled, or unavailable, along with the lock reason.

### [Support](/console)
- Incident descriptions and post-incident reports are now formatted (markdown) on the Incidents page
- Global support messages are now displayed in Organization mode

### [Hosting (Colocation)](/housing)
- Added 1000BASE-SX and 10GBASE-SR interface types to colocation space reservation

## v4.47.0 — 2026-07-30

### [Console](/console)
- The Swagger documentation for the Commands module is now available

### [IaaS VMware — Virtual machines](/iaas_vmware)
- When deploying a virtual machine, only deployable catalog items (OVF and virtual machine templates) are now available.

### [VM Instances](/public_cloud/vm_instances)
- The estimated cost (hourly) is now displayed when creating an instance, with a breakdown by component (vCPU, RAM, disks)

### [VPC](/network/vpc)
- When ordering a new VPC, you can now choose to deploy on a dedicated environment (your OpenIaaS infrastructure) or on a shared environment (subject to a subscription to the VM Instances product)

### [Object Storage](/storage/oss)
- Uppercase letters are now rejected in bucket names, in accordance with naming conventions.

### [Marketplace](/marketplace)
- You can now deploy a VM Instance (Public Cloud) directly from a Marketplace product page

## 2026-07-27 — Managed databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- The Distributed deployment model is renamed to MultiAZ
- Instance sizes now go up to 6X-Large (32 vCPU and 128 GiB of memory) and online-expandable storage up to 512 GiB
- Publication of sizing recommendations explaining engine parameter tuning, with a warning about enabling `performance_schema` below the X-Large size
- Point-in-time recovery is no longer offered: backups now rely on daily physical backups and logical exports, without continuous transaction log archiving

### [PostgreSQL Managé](/managed_postgresql)
- New architecture based on the CloudNative-PG Kubernetes operator and the Barman Cloud backup plugin
- Three deployment models: StandAlone as a single instance, Replica with three asynchronously replicated instances featuring automatic failover, and Enterprise with three synchronously replicated instances across at least two nodes, ensuring durability without blocking in the event of a node failure
- Declarative deployment via Kubernetes custom resources, usable via Terraform or Helm, with native metrics export to Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organization](/console/iam/concepts)
- You can now create a tenant directly from the Tenants page by selecting the associated products

### [Console — Activity](/console)
- Activity logs can now be filtered by module

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- The public IP address is now displayed in the network interface list of a virtual machine attached to a VPC
- A "Health" tab is now available in the virtual machine details, accessible from the list

### [IaaS VMware — Infrastructure](/iaas_vmware)
- You can now order VMware replication between availability zones

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- The list of network interfaces for a virtual machine connected to a VPC now displays the public IP address
- A "Health" tab is now available in the details of a virtual machine opened from the list

### [VM Instances](/public_cloud/vm_instances)
- The public IP address is now displayed in the network adapter list for an instance connected to a VPC
- A "Health" tab is now available in the instance details, accessible from the list

### [Housing (Colocation)](/housing)
- Colocation orders are now available: rack space reservation, equipment installation, and racking
- Colocation intervention orders are now available: technical support and smart hands
- Colocation cabling and decabling (CPE) orders are now available
- Colocation orders not supported by the console are now clearly indicated, with a prompt to contact support

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- Instance creation now relies on selecting a system image, which replaces templates.

## v4.45.4 — 2026-07-22

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- When configuring cores per socket for an OpenIaaS virtual machine, the processor topology (number of sockets and cores per socket) is now explicitly displayed.

### [LLMaaS](/llmaas)
- The minimum LLMaaS credit amount is reduced to €100

## v4.45.3 — 2026-07-21

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- When deploying a virtual machine, a "No available templates" message now appears when the catalog is empty

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- When deploying a virtual machine, a "No templates available" message is now displayed when the catalog is empty

## v4.45.2 — 2026-07-17

### [Console](/console)
- Minor technical improvements

## v4.45.0 — 2026-07-10

### [IaaS VMware — Virtual machines](/iaas_vmware)
- During a blocking operation, virtual machines now display an explicit status: backup, snapshot, or restoration in progress
- CPU editing now adapts to the CPU hot add option and the virtual machine state

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- During a blocking operation, virtual machines now display an explicit status (backup, snapshot, or restoration in progress)
- Virtual machine details now display a usage summary (CPU, RAM, storage)

### [VM Instances](/public_cloud/vm_instances)
- Instances now display an explicit status (sauvegarde, snapshot ou restauration en cours) during a blocking operation
- Instant usage metrics (CPU, RAM, stockage) are now displayed for each instance
- Name uniqueness is now enforced during both instance creation and restoration

### [Network](/network/network_overview)
- For an order containing a propagation step, new networks are created only upon final order validation.

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- The network type (private backbone) is now displayed on instance network adapters, including without the VPC feature

## v4.44.1 — 2026-07-02

### [Console](/console)
- Minor technical improvements

## v4.44.0 — 2026-07-02

### [Orders](/console/orders)
- Infrastructure provisioning actions now take business roles (compute, network, VPC, bare metal…) into account, in addition to ordering permissions.

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Upload tracking for ISO and OVF files has been improved, and it is now possible to cancel an ongoing upload

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Upload tracking for ISO and XVA files has been improved, and it is now possible to cancel an ongoing upload.

### [VM Instances](/public_cloud/vm_instances)
- Disk sizes no longer accept decimal values, when creating an instance, as well as when adding or extending a disk.
- Processing indicators for instances and their resources are now correctly restored after a page refresh.

### [VPC](/network/vpc)
- From the network interface of a virtual machine attached to a VPC network, you can now directly access the associated VPC (VMware, OpenIaaS and VM Instances)
- Certain VPC commands can now be executed in parallel: adding a gateway during the creation of a private network (and vice versa), and simultaneously deleting multiple private networks

## 2026-06-30 — API Metrics

### [Metrics](/console/metrics/concepts)
- An access token can now verify the availability of the metrics service via the API endpoint `HEAD /v1/configuration`

## v4.43.0 — 2026-06-30

### [Console](/console)
- Network selectors now visually distinguish VPC and Private Backbone networks
- An interactive tutorial is now available on the Users page

### [Console — Activities](/console)
- You can now view the details of an activity by expanding its row in the Recent and Archived lists
- Each activity now has a dedicated details page, accessible via a direct link
- Activity details are now accessible from success and failure notifications
- You can now view the full JSON of an activity, copy it, or download it
- The list of archived activities can now be sorted by creation date

### [Commandes](/console/orders)
- The order progress display has been redesigned

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Virtual machine details are now displayed in a new view
- During hot modification, consistency between CPU and cores per socket is validated: warnings are displayed and invalid values are not accepted

### [VMware IaaS — Infrastructure](/iaas_vmware)
- You can now request the deletion of an IaaS environment

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- A new detail view is available for virtual machines
- You can now filter the list of virtual machines by availability zone (AZ)

### [Open Source IaaS — Infrastructure](/iaas_opensource)
- The Storage Repository page now displays the snapshot creation date for a disk

### [VM Instances](/public_cloud/vm_instances)
- Instance details are displayed in a new view
- The "Run backup now" button is now disabled when backup is not available

### [VPC](/network/vpc)
- The public IP address description is now displayed when associated with a private network

### [Object Storage](/storage/oss)
- You can now add a description to the allowed IP addresses (whitelist) for a bucket

## v4.42.0 — 2026-06-22

### [Console](/console)
- The "Privacy" section has been updated

### [Object Storage](/storage/oss)
- The availability of the TLS wildcard certificate for host-style S3 access is now indicated
- You can now upload a file to S3 from a pre-signed URL
- You can now enable versioning on a bucket
- You can now manage the versions of a file

## v4.41.1 — 2026-06-11

### [Orders](/console/orders)
- The maximum available when ordering a Block Storage has been updated

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Inventory messages are now more accurate when ordering hypervisors or increasing a cluster's RAM

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- When adding an existing disk to a virtual machine, the disk UUID is now displayed when multiple disks share the same name.

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- A warning is now displayed when requesting an update for a pool's master host

### [VPC](/network/vpc)
- Ordering a VPC now requires an OpenIaaS availability zone to be deployed

## 2026-06-06 — Console MCP Server

- Authentication help resource describing how to obtain a personal access token and the expected header format; authentication errors now indicate the cause and next steps
- Breaking configuration change: the API URL specified in the server configuration must now include the `/api` segment. It must be updated before deploying this version to avoid 404 errors. The URL is validated at startup, and public/private key infrastructure is supported.

## 2026-06-05 — MCP Console Server

- Checking the name and version of the deployed server

## v4.40.0 — 2026-06-02

### [Console](/console)
- An interactive onboarding tour is now available

### [Console — Organization](/console/iam/concepts)
- The cost manager is now available in the organization view
- The organization view now features a dedicated layout

### [Orders](/console/orders)
- The network step no longer appears in orders when only the VPC product is enabled

### [Support](/console)
- Support plans and contacts have been updated

### [Support tickets](/console)
- Managed services features have been removed from support tickets

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Public content library features have been removed

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- The default value for the CloudInit step has been updated for OpenIaaS deployments from the Marketplace
- Sending special characters from the virtual machine console clipboard has been improved

### [Network](/network/network_overview)
- You can now remove the description of an IP address
- You can now set the `description` field when creating a virtual network
- You can now set the `description` field when modifying a virtual network

### [VPC](/network/vpc)
- The description of a VPC floating IP is now displayed
- You can now edit the description of a VPC floating IP

## 2026-05-25 — Console MCP Server

- Each permission denial now indicates the affected product and the exact permission name to enable on the personal access token

## 2026-05-24 — Console MCP Server

- Support management via an agent: ticket list and details, creation, commenting, closure, viewing scheduled maintenance and their categories, tenant incidents, and platform incidents
- Destroy-after-start option for deployments from the Marketplace
- Guided deployment workflow for a Linux virtual machine
- Directly accessible resources: OpenSource IaaS terminology glossary, pool topology consolidating hosts, storage repositories, networks, and metrics in a single view, and Marketplace catalog filtered for OpenSource IaaS

## 2026-05-23 — Console MCP Server

- Browsing the Marketplace catalog with filters, and IaaS OpenSource (XVA) and VMware (OVF) technical specifications detailing processors, memory, disks, and exact network interface names
- Deployment of an IaaS OpenSource virtual machine from a catalog item, idempotent by name
- Power management of IaaS OpenSource virtual machines — power on, power off, reboot, pause, suspend, and resume — idempotent by state
- Tracking long-running operations via activities

## 2026-05-22 — Console MCP Server

- Extended querying of the OpenSource IaaS: pools, hosts, virtual machines, snapshots, network adapters with duplicate MAC address detection, virtual disks, and replication status, with all these operations being read-only
- Server-side filters applicable to all these lists

## v4.39.2 — 2026-05-22

### [Network](/network/network_overview)
- You can now delete the PTR record for a public IP address or an interconnection IP address

## v4.39.1 — 2026-05-20

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Virtual machine snapshot naming rules have been changed

### [Bare Metal](/iaas_bare-metal)
- You can now modify the description of a blade

### [Network](/network/network_overview)
- You can now modify the PTR record of an interconnection IP address

## v4.39.0 — 2026-04-23

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Existing disks are now displayed when adding a new disk
- When moving (vMotion) a virtual machine in "compute-only resource" mode, you can now select a cluster

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Existing disks are now displayed when adding a new disk

### [VM Instances](/public_cloud/vm_instances)
- The list of VM Instances can now be exported in CSV format
- The display of a backup policy's frequency has been updated

### [Bare Metal](/iaas_bare-metal)
- Network selection is now mandatory when propagating a network on a Bare Metal server

## 2026-04-20 — Managed databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- Release of engine parameters associated with each instance plan: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` and `table_open_cache`
- Revision of instance plans: the maximum tier is reduced to 3X-Large (8 vCPU and 32 GiB of memory) and the maximum hot-expandable storage is reduced from 512 GiB to 128 GiB

### [Managed PostgreSQL](/managed_postgresql)
- Release of engine parameters associated with each instance template: `shared_buffers`, `effective_cache_size`, `work_mem`, and `max_connections`
- Revision of instance templates: the maximum is reduced to 3X-Large (8 vCPU and 32 GiB of memory) and the maximum hot-expandable storage is reduced from 512 GiB to 128 GiB

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- The available networks are now filtered when creating an instance, as well as when modifying a network adapter.

## v4.38.0 — 2026-04-17

### [Identity & Access (IAM)](/console/iam)
- Six new permissions are available: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` and `public_cloud_vm_instances_console_access`
- The relevant product name now appears at the top of each permission's description

### [Cost Manager](/console/billing/concepts)
- The cost manager interface has been improved
- The unit displayed in the consumption charts has been updated

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- When deploying a virtual machine, the step for selecting an image from the Marketplace has been updated

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- You can now switch the catalog page display between grid and table
- The step for selecting a Marketplace image when deploying a virtual machine has been updated

### [VM Instances](/public_cloud/vm_instances)
- The dashboard now displays VM Instances quota usage
- A new page displays the list of VM Instances
- You can now create a new instance
- You can now view and manage an instance's disks, network adapters, and snapshots
- You can now update an instance's capabilities and change its status
- You can now access an instance's console

### [LLMaaS](/llmaas)
- The price display in the consumption view and the credit top-up form have been updated

## 2026-04-15 — Managed databases (Preview)

### [Managed MariaDB](/managed_mariadb)
- Preview launch of Managed MariaDB: StandAlone and Distributed models in a three-node cluster behind a proxy, storage replicated across three availability zones, and a 99.9% availability commitment

### [Managed PostgreSQL](/managed_postgresql)
- Preview launch of Managed PostgreSQL: StandAlone and Distributed models in a three-node cluster behind a proxy, synchronous multi-zone replication with zero data loss, and point-in-time recovery

## v4.37.0 — 2026-04-02

### [Cost Manager](/console/billing/concepts)
- Added forecasted amount to the consumption page for the chart and trend
- Improved visual display when there is an error or insufficient data for the current month's consumption

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Improved the form to deploy a virtual machine from a catalog item
- Added the ability to change the view type (grid or table) from the catalog page

## v4.36.0 — 2026-03-27

### [Console](/console)
- Update of metrics charts and consumption

### [Cost Manager](/console/billing/concepts)
- Added the Cost Manager page
- Ability to view current month costs
- Ability to view costs over a date range and compare trends

### [Commandes](/console/orders)
- Blocking the deprovisioning of a hypervisor cluster when a storage cluster is attached

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added filters and sorting to the disk list from the Block Storage details

### [VPC](/network/vpc)
- Interface improvement for data loading in forms

## v4.35.4 — 2026-03-18

### [Console](/console)
- Improved websocket reconnection

### [Support](/console)
- Added a fallback solution for creating a support ticket when websockets are disconnected

## v4.35.3 — 2026-03-17

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Update to disk recovery when loading replicas from the Replication tab

## v4.35.0 — 2026-03-11

### [Commandes](/console/orders)
- Added command to delete a cpool/spool mapping
- Added command to deprovision a VPC private network
- Updated the Bare Metal volume deprovisioning command; deletion can now be ordered from the volume list
- Added command to delete a Bare Metal volume mapping
- Added command to deprovision a VPC
- Prevented deprovisioning of a datastore if it is the last one in a datastore cluster

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Ability to add a RAM limit to a virtual machine

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Update to VMware multi-VMotion to allow moving VMs from one cluster to another

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added the ability to update a host
- Display host update information

### [Network](/network/network_overview)
- Disabling the network propagation delete button when no propagation is delivered

### [LLMaaS](/llmaas)
- Display consumption grouped by token type

## v4.34.0 — 2026-02-18

### [Console](/console)
- Major update to the application rendering engine
- The VMware and OpenIaaS menus are not displayed when only the metrics module is enabled

### [Métriques](/console/metrics/concepts)
- Ability to export to CSV from the VMware and OpenIaaS Metrics pages

### [IaaS VMware — Virtual machines](/iaas_vmware)
- When moving a virtual machine, it is not possible to select the same destination host as the current host of the virtual machine
- Added the 'New catalog' button on the VMware Catalog page

## 2026-02-04 — Console MCP Server

- Viewing virtual machine templates, networks, hosts, and OpenSource IaaS storage repositories

## 2026-02-03 — Console MCP Server

- Availability of the Console MCP (Model Context Protocol) server, authenticated via personal access token
- Querying and managing VMware virtual machines from an agent: listing, details, virtual datacenters, power on and power off

## v4.33.0 — 2026-01-21

### [Orders](/console/orders)
- Added the command to remove a network propagation on OpenIaaS

### [Métriques](/console/metrics/concepts)
- Added filters for the VMWare and OpenIaaS metrics pages

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added the 'Virtual Machines' metrics page
- Added the metrics details page for each VM

## v4.32.0 — 2026-01-14

### [Support](/console)
- Updated the support ticket closure modal

### [IaaS VMware — Backup](/iaas_vmware)
- When assigning a backup policy to a disk, you can now inventory the disk if it is not recognized by the backup solution

### [Bare Metal](/iaas_bare-metal)
- Deletion of a BFS volume on a Bare Metal is now blocked; the volume will be deleted upon deletion of the Bare Metal
- When ordering a Bare Metal, the first volume is now renamed to 'BFS volume'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Backup](/iaas_vmware)
- Updated tooltip explanations for the options available during virtual machine restoration

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Snapshots associated with backup policies are now visible
- The Host linked to an ISO's storage location is now displayed during upload and on the catalog page

### [Object Storage](/storage/oss)
- Display an explanatory card on the Incomplete MPU tab when the Console IP is not authorized, preventing the tab from displaying

### [Marketplace](/marketplace)
- Display error card when accessing a non-existent marketplace page

## v4.30.1 — 2025-12-16

### [Console](/console)
- Improved empty error display by showing the returned HTTP status by default

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Ability to associate a static IP with a custom MAC address

### [LLMaaS](/llmaas)
- For consumption metrics, filtering out series with zero values

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Improved synchronization of actions on VPC pages
- Added the ability to associate a static IP with a public IP from the static IPs list

### [Storage](/storage/oss)
- Added incomplete MPUs from the bucket page
- Ability to delete an incomplete MPU

## v4.28.0 — 2025-11-21

### [Console](/console)
- Added the ability to display global informational messages visible across the entire application

### [Orders](/console/orders)
- Ability to order an LLMaaS credit top-up for the tenant
- Ability to order a VPC
- Ability to order a private network within a VPC
- Ability to order a public IP for the VPC product
- Ability to enable the gateway for a VPC
- Added ability to order tenant deletion

### [Metrics](/console/metrics/concepts)
- Improved tooltip display on metrics charts: you can now click on a point to pin the tooltip and view all the data

### [Network](/network/network_overview)
- Grouping of Networks and Internet pages under a single product: Private Backbone
- Addition of PTR record management when modifying a public IP
- Blocking sharing for certain types of networks

### [VPC](/network/vpc)
- VPC product integration
- Added a page listing VPCs
- Added a VPC Details page
- Ability to manage private networks, public IPs, and the gateway of a VPC
- Ability to associate a static IP from a VPC private network with a VMware or OpenIaaS network adapter
- Ability to associate a static IP with a public IP of a VPC

### [LLMaaS](/llmaas)
- Added a Billing tab on the LLMaaS page for tenants with prepayment enabled
- Displays remaining credit for tenants on prepayment, on the dashboard and from the Billing tab

## v4.27.0 — 2025-11-12

### [Commandes](/console/orders)
- Added stock availability verification when ordering resources
- Added filters by order type and product to the orders list

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Enhanced virtual machine console. Improved keyboard handling, and added clipboard support.

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Added a dashboard alert for SPP backup VSnap with high storage usage

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Improvement of the virtual machine console. Better keyboard handling, and addition of a clipboard

### [Marketplace](/marketplace)
- Added the ability to view technical details of an image

## v4.26.5 — 2025-11-04

### [Console](/console)
- Improved dashboard chart sizing when resizing the window

## v4.26.3 — 2025-10-31

### [Metrics](/console/metrics/concepts)
- Modification of the names of metric exports displayed in graphs

## v4.26.0 — 2025-10-22

### [Console](/console)
- Added a button to copy the current perimeter UUID from the user profile
- Complete redesign of the Dashboard
- Added automatic reconnection to activity tracking when the connection is interrupted

### [Orders](/console/orders)
- Update order forms to add them to the relevant pages (e.g., new Datastore from the Storage page)

### [Support](/console)
- Added the email address of the person who closed the ticket to the support ticket rating

### [Metrics](/console/metrics/concepts)
- Overhaul of VMware metrics collection, the page URL is now /iaas/metrics
- Added VMware infrastructure metrics tab on Compute
- Added VMware infrastructure metrics tab on Storage
- Added a metrics page for OpenIaaS
- Added OpenIaaS infrastructure metrics tab on Compute
- Added OpenIaaS infrastructure metrics tab on Storage

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Addition of new extra_config keys (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)
- Blocking the selection of a hostcluster without an active host
- When creating a VMware virtual machine, the vCenter selection is now based on the selected availability zone
- Addition of limits on names and descriptions when uploading a file to VMware

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- When adding an OpenIaaS disk, storage not belonging to the virtual machine's Pool is now filtered out
- When taking a snapshot, the option to capture memory is now unchecked by default

### [Open Source IaaS — Backup](/iaas_opensource)
- Added the ability to run a backup from the backups tab of an OpenIaaS virtual machine

### [Réseau](/network/network_overview)
- Removed the constraint preventing the selection of multiple network types on the virtual networks page

### [Object Storage](/storage/oss)
- Optimization of file retrieval from a bucket

### [PaaS OpenShift](/paas_openshift)
- Addition of a page listing OpenShift clusters
- Addition of a details page for an OpenShift cluster

### [Marketplace](/marketplace)
- Added UUID filter and ability to copy an item's UUID

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Updated usage of advanced configuration and OVF properties during VMware virtual machine deployment

## v4.24.0 — 2025-09-24

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Ability to deploy a virtual machine image from the virtual machine list

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ability to deploy a virtual machine image from the virtual machine list

### [Network](/network/network_overview)
- Added validation to prevent the deletion of network sharing if the network is propagated to another Tenant

### [Marketplace](/marketplace)
- Added the Marketplace product
- Added a page listing the solutions available in the catalog
- Added a page to view solution details
- Ability to deploy a virtual machine image to an OpenIaaS or VMware environment from the solution details
- Ability to contact a partner for a managed services solution

## v4.23.0 — 2025-09-12

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added support for 4 new extra-config values

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Do not display the HA alert on the affected VMs when the local ISO is not mounted
- When adding or resizing a disk, indicate whether the associated SR is used for a replication configuration

### [IaaS OpenSource — Sauvegarde](/iaas_opensource)
- Added the AZ name to the backup report

### [Object Storage](/storage/oss)
- Updated information regarding bucket lifecycle

### [LLMaaS](/llmaas)
- Added LLMaaS product
- Added list of available models
- Added API keys list with the ability to create new ones
- Added consumption breakdown by model and by key
- Added model details
- Ability to test a model

## v4.22.1 — 2025-09-10

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Modification of alerts regarding the selected disk format configuration during a VMotion involving storage

## v4.22.0 — 2025-09-02

### [Orders](/console/orders)
- Added the network propagation removal command from the All Orders page, all available orders are now accessible from this page.

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Updated conditions regarding disk format changes when moving a virtual machine, and added information about the current disk format during disk configuration

## v4.21.0 — 2025-08-22

### [Console](/console)
- Updated display when no data is created/provisioned or when an error occurs while retrieving information.

### [Support](/console)
- Opening support modals with the associated service pre-selected
- Adding a badge in the menu and navbar when a support ticket requires a response

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added the ability to export the list of VMware replicas to CSV
- Improved the RAM selection slider for certain orders
- Added support for the Static differed and immediate options for vMotion

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Prevents deletion of a non-empty cluster or with hosts/datastores not in maintenance mode

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Added the ability to export the list of OpenIaaS replicas and associated policies to CSV
- Added details on the tools used by virtual machines (pvDrivers, managementAgent, and tools)
- Added checks for high availability (HA)

### [Network](/network/network_overview)
- Modified IPv4 address selection with an available list

## v4.20.0 — 2025-07-29

### [Commandes](/console/orders)
- Added information regarding limited and out-of-stock inventory for compute resources when ordering a new availability zone

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Added a VMware Tools option to synchronize time with the host
- Updated conditions for virtual machine encryption

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Removal of last execution information from replication policies causing slowdowns
- Handling of TX checksumming for network adapters
- Addition of a warning for OpenIaaS replication if the number of AZs is less than 2
- Addition of high availability (HA) for pools and virtual machines

## v4.19.0 — 2025-07-24

### [Orders](/console/orders)
- Updated public IP ordering with the ability to order an IPv6 prefix
- Updated display of available orders when no environment is provisioned

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Added a replication filter to the virtual machine list
- Updated the virtual machine creation modal

### [OpenSource IaaS — Virtual Machines](/iaas_opensource)
- Added a replication filter to the virtual machines list

### [Réseau](/network/network_overview)
- Updated the Internet page with the addition of IPv6 management

## v4.18.0 — 2025-07-15

### [Console](/console)
- Updated display when no data is created/provisioned or when an error occurs while retrieving information.

### [Orders](/console/orders)
- Update internet steps when ordering a new availability zone or a new pool

### [Support](/console)
- Added a security service for each product when creating a support ticket

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added a link from an ISO mounted on a controller to the corresponding item in the catalog

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added an OpenIaaS Replication page with the list of replicas and replication policies
- Ability to add and remove a replication configuration to an OpenIaaS virtual machine
- Ability to create and delete a replication policy
- Ability to restore a replica
- Ability to export virtual machines in CSV format.

## v4.17.0 — 2025-06-20

### [Orders](/console/orders)
- Ability to order an OpenIaaS Pool
- Ability to order the association of an existing volume to an existing Bare Metal from the Bare Metal page, the volume page, and the orders page

### [Support](/console)
- Ability to delete a file on a support ticket
- The satisfaction description upon ticket closure is now optional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Added English translations to the consumption reports page in the order menu

### [Orders](/console/orders)
- Ability to order a bare metal volume resize
- Ability to order an OpenIaaS Block Storage resize

### [Support](/console)
- Overhaul of support ticket creation
- Markdown rendering on support tickets and updated comment display order
- Added feedback upon closing a support ticket
- Updated icon display based on the impact of a global incident

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Added an option to preserve a virtual machine's configuration during a Production restoration on the original cluster

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Added a warning message in case of low disk space on a Block Storage (90% used) and warnings during commands

### [Object Storage](/storage/oss)
- Added S3 role descriptions when assigning to a bucket

## v4.15.1 — 2025-05-27

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Displays an error when a network is misconfigured on a virtual machine's network adapter, also preventing the virtual machine from starting

## v4.15.0 — 2025-05-13

### [Console](/console)
- Adjustment of units displayed on infrastructure resources: GiB (Gibibyte) instead of GB (Gigabyte)

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Ability to move an OpenIaaS disk
- Ability to connect and disconnect an OpenIaaS disk
- Display of disk connected/disconnected status
- Ability to copy the UUID of a disk, virtual network, or snapshot
- Ability to choose a virtual machine name during XVA file deployment
- Added ability to assign a backup policy when starting a virtual machine if it does not have one.

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Added available actions on a disk from Block Storage

### [Bare Metal](/iaas_bare-metal)
- Added MAC addresses to the Bare Metal interface table
- Added a page for Bare Metal volume details

## v4.14.0 — 2025-04-28

### [Console](/console)
- Ability to pin pages to the menu
- Updated rendering of API documentation

### [Orders](/console/orders)
- Ability to order the deletion of an OpenIaaS Block Storage
- Ability to order the addition of a Block Storage to an OpenIaaS Pool
- Ability to order the deletion of an OpenIaaS Host
- Added affected product information to the orders list
- Ability to order the addition of a Host to an OpenIaaS pool

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Ability to place a Host in maintenance mode
- Ability to edit a model description
- Ability to select a Host when starting a virtual machine
- Added a uniqueness rule for OpenIaaS virtual machine names

## v4.13.0 — 2025-04-08

### [Console](/console)
- Added statistics and contact information to the Support page

### [Commandes](/console/orders)
- Redesign of the order details display
- Redesign of the order selection display
- Updated display for ordering the first baremetal when none exist
- Updated Bare Metal ordering with network propagation selection on Bare Metal interfaces
- Ability to propagate a VLAN to a Bare Metal
- Ability to add a volume to a baremetal
- Ability to deprovision a volume from a Bare Metal
- Ability to deprovision a Bare Metal

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Added a copy UUID button on VMware networks and catalogs

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Added a copy UUID button on OpenIaaS networks and catalogs
- Added a copy UUID button on Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Added display of network interfaces and the networks propagated to them on a bare metal
- Added power on, reboot, and power off actions for a bare metal

### [Réseau](/network/network_overview)
- Ability to visualize propagation on a Bare Metal server within a network

## v4.12.0 — 2025-03-25

### [Console](/console)
- Ability to remove a whitelisted IP from the access page

### Tags
- Adding tags to OpenIaaS virtual machines

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Update to the retrieval of API recommendations for HostCluster affinity/anti-affinity rules

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Display the import of an OpenIaaS XVA on the downloads list
- Ability to attach an existing disk to a virtual machine
- Ability to detach an existing disk from a virtual machine

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Update of the disk display for an OpenIaaS Block Storage

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Updated error message when accessing files in an Object Storage bucket

## v4.11.1 — 2025-03-12

### [Commandes](/console/orders)
- Update availability zone names during order placement
- Modify datastore minimum when ordering a datastoreCluster

### [IaaS VMware — Virtual machines](/iaas_vmware)
- When the label field for hostCluster and datastoreCluster is set to empty, the technical name will be applied by default.

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- When the pool label field is cleared, the technical name will be applied by default
- Added an info bubble on the catalog page and during ISO import to indicate that XVA is supported when creating a virtual machine

## v4.11.0 — 2025-03-10

### [Orders](/console/orders)
- Update of allowed network types during AZ creation
- Update of minimum resources to provision when ordering a new availability zone

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Display of the virtual machine name in the console tab for VMware

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Added label management for VMware datastore clusters and host clusters

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Enable virtual machine deployment via XVA import for OpenIaaS
- Add label management for OpenIaaS pools
- Display virtual machine name in the console tab for OpenIaaS

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Update of CPU information for OpenIaaS hosts and pools

### [Bare Metal](/iaas_bare-metal)
- Added IOPS/TO on bare metal volumes

## v4.10.0 — 2025-03-04

### [Console](/console)
- Update links to the new public documentation

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added an alert to notify users of duplicate MAC addresses on the virtual machine list and when creating or modifying network adapters
- Added an option to force shutdown or restart a virtual machine
- Memory will no longer be included by default in snapshots if the virtual machine is not powered on
- Ability to rename and resize a disk
- Added the ability to delete ISOs and templates from the catalog page
- Added the ability to remove the 'Cloud Init' configuration disk during virtual machine deployment

## v4.9.1 — 2025-02-27

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Ability to edit a network adapter on a powered-on virtual machine

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Added restrictions on allowed characters in OpenIaaS virtual machine names

## v4.9.0 — 2025-02-21

### [Console](/console)
- Make names in tables clickable when a linked page exists
- Improve console opening behavior to prevent multiple tabs from opening when multiple windows are open on the same page
- Display an error when opening a console if the browser does not allow redirects to the application

### [Metrics](/console/metrics/concepts)
- Display the RAM unit on the virtual machine health page

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Block the creation of a virtual machine if the space on the selected Block Storage is insufficient
- Clear default MAC addresses when creating an OpenIaaS virtual machine

### [Storage](/storage/oss)
- Ability to copy an S3 endpoint to the clipboard

## v4.8.0 — 2025-02-14

### [Orders](/console/orders)
- Added network propagation command to OpenIaaS Pools
- Added network propagation commands to the all orders page

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Display of the number of assigned and available disks per controller on a virtual machine
- Updated conditions for the number of disks that can be added to ParaVirtual SCSI controllers based on the virtual machine hardware version

### [IaaS OpenSource — Machines virtuelles](/iaas_opensource)
- Ability to add Cloud Init options when creating an OpenIaaS virtual machine
- Display of disks on a Block Storage page
- Ability to update the boot firmware configuration of an OpenIaaS virtual machine
- Ability to clone an OpenIaaS virtual machine

### [Network](/network/network_overview)
- Updated network propagation visualization and added OpenIaaS propagations
- Updated network creation process and added the ability to propagate the network to the OpenIaaS infrastructure upon creation

## v4.7.0 — 2025-02-03

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- OVF export is blocked when the virtual machine is encrypted

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Display the relationships between datastore clusters and host clusters in the Compute and Storage pages

### [IaaS VMware — Backup](/iaas_vmware)
- Modification of the startup option after restore for a SecNumCloud environment when restoring in clone or production mode to an alternative host or cluster

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Add mount and unmount buttons for an OpenIaaS ISO to the virtual machine action bar

### [Réseau](/network/network_overview)
- Improved display of network propagations when propagation deletion requests are in progress

## v4.6.0 — 2025-01-30

### [Console](/console)
- Remove the characters displayed during autocomplete when adding observers while creating a support ticket
- Update the display of the menu and available pages for VMware and OpenIaaS offerings on a new environment without provisioned availability zones

### [Console — Notifications](/console)
- Updated display of notification subscriptions from the profile page

### [IaaS VMware — Machines virtuelles](/iaas_vmware)
- Add the ability to encrypt a virtual machine

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added virtual machine template export

## v4.5.0 — 2025-01-17

### [Console](/console)
- Added description to whitelist creation and display
- Ability to modify a whitelist's description

### [Orders](/console/orders)
- Added order for new OpenIaaS Availability Zone
- Added order for Bare Metal
- Link a hypervisor cluster to a storage cluster

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Display the remaining size in parentheses in the storage selection trees

### [IaaS VMware — Infrastructure](/iaas_vmware)
- Added worst-case memory allocation on a VMware host cluster

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Added ISO upload to OpenIaaS catalogs
- Added migration of OpenIaaS virtual machines
- Ability to select disks and networks when creating an OpenIaaS virtual machine

### [Bare Metal](/iaas_bare-metal)
- Added a page listing Bare Metal
- Added a page listing Bare Metal volumes
- Added a page with Bare Metal details
- Added the ability to open a Bare Metal console

## v4.4.0 — 2025-01-13

### [Console](/console)
- Technical changes made during the authentication process

## v4.3.0 — 2024-12-19

### [Console — Activities](/console)
- Added "access resource" links to activities related to XOA and Object-Storage

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Added tags and virtual machine IP to the virtual machines CSV export

### [IaaS VMware — Backup](/iaas_vmware)
- Propose exporting only the filtered items in the CSV export of backup reports in the virtual machines sub-tab

### [Open Source IaaS — Infrastructure](/iaas_opensource)
- Added XOA VM templates from the catalogs page

### [Object Storage](/storage/oss)
- Create and reset the global access key from storage accounts

## v4.2.0 — 2024-12-10

### [Console](/console)
- Add redirects to the status page

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Items already present in 'My Catalog' now remain displayed in 'Public Catalog'
- Added redirects for components referenced in a VMware catalog item
- Updated RAM display on a hypervisor cluster
- Removed the option to automatically replicate new disks, which was causing errors
- Added validations for virtual machine replication
- Added new PCIPassthru extra config options from the advanced configuration of a virtual machine for GPU management
- Ability to add a PCI controller to virtual machines

### [VMware IaaS — Infrastructure](/iaas_vmware)
- Display DRS recommendations and failures from an hypervisor cluster
- New status on hypervisors and datastores when a maintenance request is in progress
- Added GPU information for an hypervisor

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Remove multiple non-functional backup options on virtual machines in test mode

### [Open Source IaaS — Virtual Machines](/iaas_opensource)
- Added a backup page for the OpenIaas backup section, listing errors, policies, backup reports, and enabling the recovery of deleted virtual machines

### [IaaS OpenSource — Infrastructure](/iaas_opensource)
- Add a page to list OpenIaas availability zones
- Add a storage page for the OpenIaas section
- Add a compute page for the OpenIaas section

### [Housing (Colocation)](/housing)
- Modification of displayed information from the peripherals page

## v4.1.1 — 2024-11-18

### [IaaS VMware — Virtual Machines](/iaas_vmware)
- Improved memory editing; conversion now rounds to the nearest whole unit
- When creating a snapshot, the button to save RAM is disabled when the virtual machine is powered off
- When multiple virtual machines are expanded, the disk list does not display immediately

### [IaaS VMware — Sauvegarde](/iaas_vmware)
- Added CSV export button in the virtual machines tab of the backup reports page

## v4.1.0 — 2024-11-13

### [Console](/console)
- Ability to send a file when submitting feedback

### [Identité & Accès (IAM)](/console/iam)
- Disabling the ability to delete an owner

### [Commandes](/console/orders)
- Added support for adding, deleting, and editing a datastore from the orders page
- Added the ability to delete a Host

### [IaaS VMware — Virtual machines](/iaas_vmware)
- Added snapshot activities to the snapshot tab of a VM
- Display of the actual size of virtual machines in the CSV export

### [IaaS VMware — Infrastructure](/iaas_vmware)
- On the compute and storage pages, the availability zone filter also applies to the cluster tabs
- Display of usage percentages on consumption bars (CPU / RAM / Storage)

### [IaaS OpenSource — Virtual Machines](/iaas_opensource)
- Added validation for the presence of backup policies on the auto-start option
- Added an option to force shutdown/restart of virtual machines without guest tools installed
- Improved the execution message for an OpenIaas policy on a specific virtual machine

### [Bastion](/bastion)
- Added validation on the Host field for a device

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