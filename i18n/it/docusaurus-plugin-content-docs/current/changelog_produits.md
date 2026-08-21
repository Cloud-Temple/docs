---
title: Novità del prodotto
sidebar_position: 999
---

# Novità del prodotto & Evoluzioni

> Questo changelog elenca solo le nuove funzionalità e le evoluzioni significative della piattaforma Cloud Temple.
> Le correzioni di bug sono intenzionalmente escluse.

## v4.47.0 — 2026-07-30

### [Console](/console)
- The Swagger documentation for the Orders module is now available

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- When deploying a virtual machine, only deployable catalog items (OVF files and virtual machine templates) are now offered

### [VM Instances](/public_cloud/vm_instances)
- The estimated (hourly) cost is now displayed when creating an instance, with a breakdown by item (vCPU, RAM, disks)

### [VPC](/network/vpc)
- When ordering a new VPC, you can now choose to deploy it in a dedicated environment (your own OpenIaaS infrastructure) or in a shared environment (subject to a VM Instances subscription)

### [Object Storage](/storage/oss)
- Uppercase letters are now rejected in a bucket name, in line with naming rules

### [Marketplace](/marketplace)
- You can now deploy a VM Instance (Public Cloud) directly from a Marketplace product page

## 2026-07-27 — Database gestiti (Preview)

### [MariaDB gestito](/managed_mariadb)
- The Distributed deployment model is renamed MultiAZ
- Instance sizes now go up to 6X-Large (32 vCPU and 128 GiB of memory) and hot-extendable storage up to 512 GiB
- Publication of the sizing recommendations explaining how the engine parameters are calibrated, with a warning about enabling `performance_schema` below the X-Large size
- Point-in-time recovery is no longer offered: backups now rely on daily physical backups and logical exports, without continuous transaction log archiving

### [PostgreSQL gestito](/managed_postgresql)
- New architecture based on the CloudNative-PG Kubernetes operator and the Barman Cloud backup plugin
- Three deployment models: StandAlone as a single instance, Replica as three asynchronously replicated instances with automatic failover, and Entreprise as three synchronously replicated instances across at least two nodes, durability being guaranteed without blocking if a node becomes unavailable
- Declarative deployment through Kubernetes custom resources, usable via Terraform or Helm, and native metrics export to Prometheus

## v4.46.0 — 2026-07-24

### [Console — Organizzazione](/console/iam/concepts)
- You can now create a tenant directly from the Tenants page, selecting the associated products

### [Console — Attività](/console)
- Activity logs can now be filtered by module

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- The public IP address is now displayed in the network interface list of a virtual machine connected to a VPC
- A "Health" tab is now available in the virtual machine details, accessible from the list

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- You can now order VMware replication between availability zones

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- The network interface list of a virtual machine connected to a VPC now displays the public IP address
- A "Health" tab is now available in the virtual machine details opened from the list

### [VM Instances](/public_cloud/vm_instances)
- The public IP address is now displayed in the network adapter list of an instance connected to a VPC
- A « Health » tab is now available in the instance details, accessible from the list

### [Housing (Colocation)](/housing)
- Colocation orders are now available: space reservation, device installation and de-racking
- Colocation intervention orders are now available: technical assistance and smart hands
- Colocation cabling and uncabling orders (CPE) are now available
- Colocation orders not supported by the console are now clearly flagged, with an invitation to contact support

## v4.45.5 — 2026-07-23

### [VM Instances](/public_cloud/vm_instances)
- Creating an instance is now based on selecting a system image, which replaces templates

## v4.45.4 — 2026-07-22

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- When configuring the cores per socket of an OpenIaaS virtual machine, the CPU topology (number of sockets and cores per socket) is now displayed explicitly

### [LLMaaS](/llmaas)
- The minimum LLMaaS credit amount is lowered to €100

## v4.45.3 — 2026-07-21

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- When deploying a virtual machine, a "No template available" message is now displayed when the catalog is empty

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- When deploying a virtual machine, a "No template available" message is now displayed when the catalog is empty

## v4.45.2 — 2026-07-17

### [Console](/console)
- Minor technical improvements

## v4.45.0 — 2026-07-10

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- During a blocking operation, virtual machines now display an explicit status: backup, snapshot or restore in progress
- CPU editing now adapts to the CPU hot add option and to the virtual machine state

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- During a blocking operation, virtual machines now display an explicit status (backup, snapshot or restore in progress)
- The virtual machine details now include a usage summary (CPU, RAM, storage)

### [VM Instances](/public_cloud/vm_instances)
- Instances now show an explicit status (backup, snapshot or restore in progress) during a blocking operation
- Instant usage metrics (CPU, RAM, storage) are now displayed for each instance
- Name uniqueness is now checked when creating and when restoring an instance

### [Rete](/network/network_overview)
- In an order that includes a propagation step, new networks are created only upon final confirmation of the order

## v4.44.2 — 2026-07-03

### [VM Instances](/public_cloud/vm_instances)
- The network type (private backbone) is now shown on an instance's network adapters, including without the VPC feature

## v4.44.1 — 2026-07-02

### [Console](/console)
- Minor technical improvements

## v4.44.0 — 2026-07-02

### [Ordini](/console/orders)
- Infrastructure provisioning actions now take business roles (compute, network, VPC, bare metal…) into account in addition to order permissions

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Tracking of ISO and OVF file uploads has been improved, and an ongoing upload can now be cancelled

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Tracking of ISO and XVA file uploads has been improved, and it is now possible to cancel an upload in progress

### [VM Instances](/public_cloud/vm_instances)
- Disk sizes no longer accept decimal values, when creating an instance as well as when adding or extending a disk
- The processing indicators for instances and their resources are now correctly restored after a page refresh

### [VPC](/network/vpc)
- From the network adapter of a virtual machine attached to a VPC network, you now go directly to the related VPC (VMware, OpenIaaS and VM Instances)
- Some VPC orders can now be placed in parallel: adding a gateway while a private network is being created (and vice versa), and several simultaneous private network deletions

## 2026-06-30 — API Metriche

### [Metriche](/console/metrics/concepts)
- An access token can now check the availability of the metrics service through the `HEAD /v1/configuration` API endpoint

## v4.43.0 — 2026-06-30

### [Console](/console)
- Network selectors now visually distinguish VPC and Private Backbone networks
- An interactive tutorial is now available on the Users page

### [Console — Attività](/console)
- You can now view the details of an activity by expanding its row in the Recent and Archived lists
- Each activity now has a dedicated details page, accessible via a direct link
- Activity details are now accessible from success and failure notifications
- You can now view the full JSON of an activity, copy it or download it
- The archived activities list can now be sorted by creation date

### [Ordini](/console/orders)
- The display of an order's progress has been redesigned

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Virtual machine details are now shown in a new view
- During a hot edit, consistency between CPU and cores per socket is checked: warnings are displayed and invalid values are not accepted

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- You can now request the deletion of an IaaS environment

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- A new details view is available for virtual machines
- You can now filter the virtual machines list by availability zone (AZ)

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- The Storage Repository page now displays the date a disk snapshot was taken

### [VM Instances](/public_cloud/vm_instances)
- Instance details are now shown in a new view
- The « Run backup now » button is now disabled when the backup is unavailable

### [VPC](/network/vpc)
- The description of the public IP address is now displayed when associating it with a private network

### [Object Storage](/storage/oss)
- You can now add a description to a bucket's allowed IP addresses (whitelist)

## v4.42.0 — 2026-06-22

### [Console](/console)
- The "Privacy" section has been updated

### [Object Storage](/storage/oss)
- The availability of the wildcard TLS certificate for host-style S3 access is now indicated
- You can now upload a file to S3 from a pre-signed URL
- You can now enable versioning on a bucket
- You can now manage the versions of a file

## v4.41.1 — 2026-06-11

### [Ordini](/console/orders)
- The available maximum when ordering a Block Storage has been updated

## v4.41.0 — 2026-06-08

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Stock-related messages are now more precise when ordering hypervisors or increasing a cluster's RAM

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- When adding an existing disk to a virtual machine, the disk UUID is now displayed when several disks share the same name

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- A warning is now displayed when requesting an update of a pool's master host

### [VPC](/network/vpc)
- Ordering a VPC now requires an OpenIaaS availability zone to be deployed

## 2026-06-06 — Server MCP della Console

- Authentication help resource describing how to obtain a personal access token and the expected header format; authentication errors now state the cause and the steps to follow
- Breaking configuration change: the API URL set in the server configuration must now include the `/api` segment, and must be updated before deploying this version to avoid 404 errors. The URL is checked at startup and the private public-key infrastructure is supported

## 2026-06-05 — Server MCP della Console

- The name and version of the deployed server can be queried

## v4.40.0 — 2026-06-02

### [Console](/console)
- An interactive welcome tour is now available

### [Console — Organizzazione](/console/iam/concepts)
- The cost manager is now available in the organization view
- The organization view now has a dedicated display

### [Ordini](/console/orders)
- The network step no longer appears in orders when only the VPC product is enabled

### [Supporto](/console)
- Support plans and contacts have been updated

### [Ticket di supporto](/console)
- Managed services features have been removed from support tickets

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- The public content library features have been removed

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- The default value of the CloudInit step has been updated for OpenIaaS deployments from the Marketplace
- Sending special characters from the clipboard of a virtual machine console has been improved

### [Rete](/network/network_overview)
- You can now delete the description of an IP address
- You can now fill in the `description` field when creating a virtual network
- You can now fill in the `description` field when modifying a virtual network

### [VPC](/network/vpc)
- The description of a VPC floating IP is now displayed
- You can now edit the description of a VPC floating IP

## 2026-05-25 — Server MCP della Console

- Each permission denial now states the product concerned and the exact name of the permission to enable on the personal access token

## 2026-05-24 — Server MCP della Console

- Support handling from an agent: ticket list and details, creation, comment, closing, scheduled maintenance and their categories, tenant incidents and platform incidents
- Destroy-after-start option on Marketplace deployment
- Guided workflow for deploying a Linux virtual machine
- Directly readable resources: IaaS OpenSource glossary, pool topology gathering hosts, storage repositories, networks and indicators in a single read, and the Marketplace catalog filtered on IaaS OpenSource

## 2026-05-23 — Server MCP della Console

- Marketplace catalog browsing with filters, plus IaaS OpenSource (XVA) and VMware (OVF) technical sheets detailing processors, memory, disks and the exact network interface names
- Deployment of an IaaS OpenSource virtual machine from a catalog item, idempotent by name
- Power control of IaaS OpenSource virtual machines — power on, power off, restart, pause, suspend and resume — idempotent by state
- Long-running operations can be tracked through activities

## 2026-05-22 — Server MCP della Console

- Extended IaaS OpenSource querying: pools, hosts, virtual machines, snapshots, network adapters with duplicate MAC address detection, virtual disks and replication status, all of these operations being read-only
- Server-side filters available on all of these lists

## v4.39.2 — 2026-05-22

### [Rete](/network/network_overview)
- You can now delete the PTR record of a public IP address or an interconnection IP address

## v4.39.1 — 2026-05-20

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- The naming rules for virtual machine snapshots have been changed

### [Bare Metal](/iaas_bare-metal)
- You can now edit a blade's description

### [Rete](/network/network_overview)
- You can now edit the PTR record of an interconnection IP address

## v4.39.0 — 2026-04-23

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Existing disks are now displayed when adding a new disk
- When moving (vMotion) a virtual machine in "compute resource only" mode, it is now possible to choose a cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Existing disks are now displayed when adding a new disk

### [VM Instances](/public_cloud/vm_instances)
- The VM Instances list can now be exported in CSV format
- The display of a backup policy frequency has been revised

### [Bare Metal](/iaas_bare-metal)
- Network selection is now mandatory when propagating a network on a Bare Metal

## 2026-04-20 — Database gestiti (Preview)

### [MariaDB gestito](/managed_mariadb)
- Publication of the engine parameters associated with each instance size: `innodb_buffer_pool_size`, `innodb_buffer_pool_instances`, `max_allowed_packet` and `table_open_cache`
- Instance sizes revised: the ceiling is lowered to 3X-Large (8 vCPU and 32 GiB of memory) and the maximum hot-extendable storage goes from 512 GiB to 128 GiB

### [PostgreSQL gestito](/managed_postgresql)
- Publication of the engine parameters associated with each instance size: `shared_buffers`, `effective_cache_size`, `work_mem` and `max_connections`
- Instance sizes revised: the ceiling is lowered to 3X-Large (8 vCPU and 32 GiB of memory) and the maximum hot-extendable storage goes from 512 GiB to 128 GiB

## v4.38.1 — 2026-04-18

### [VM Instances](/public_cloud/vm_instances)
- The networks offered are now filtered when creating an instance and when editing a network adapter

## v4.38.0 — 2026-04-17

### [Identità e accessi (IAM)](/console/iam)
- Six new permissions are available: `billing_read`, `vpc_read`, `vpc_write`, `public_cloud_vm_instances_read`, `public_cloud_vm_instances_management` and `public_cloud_vm_instances_console_access`
- The name of the relevant product now appears at the start of each permission description

### [Gestione dei costi](/console/billing/concepts)
- The cost manager interface has been improved
- The unit displayed in consumption graphs has been updated

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- When deploying a virtual machine, the Marketplace image selection step has been revised

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- You can now switch the catalog page display between grid and table
- The Marketplace image selection step when deploying a virtual machine has been updated

### [VM Instances](/public_cloud/vm_instances)
- The dashboard now displays VM Instances quota usage
- A new page presents the list of VM Instances
- You can now create a new instance
- You can now view and manage the disks, network adapters and snapshots of an instance
- You can now update an instance's capacity and change its status
- You can now access an instance's console

### [LLMaaS](/llmaas)
- The price display in the consumption view and the credit top-up form have been updated

## 2026-04-15 — Database gestiti (Preview)

### [MariaDB gestito](/managed_mariadb)
- MariaDB Managé opens in Preview: StandAlone and Distributed models as a three-node cluster behind a proxy, storage replicated across three availability zones and a 99.9% availability commitment

### [PostgreSQL gestito](/managed_postgresql)
- PostgreSQL Managé opens in Preview: StandAlone and Distributed models as a three-node cluster behind a proxy, multi-zone synchronous replication with no data loss and point-in-time recovery

## v4.37.0 — 2026-04-02

### [Gestione dei costi](/console/billing/concepts)
- Add forecast amount to consumption page for graph and trend display
- Visual improvement when there is an error or too little data on consumption in the current month

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Improved form for deploying a virtual machine from a catalog item
- Add the ability to change the display type (grid or table) from the catalog page

## v4.36.0 — 2026-03-27

### [Console](/console)
- Update metrics and consumption graphs

### [Gestione dei costi](/console/billing/concepts)
- Add cost-manager page
- Ability to view costs for the current month
- Ability to view costs over a range of dates and compare trends

### [Ordini](/console/orders)
- Hypervisor cluster deprovisioning blocked when a storage cluster is attached

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Add filters and sorts to the list of disks from Block Storage details

### [VPC](/network/vpc)
- UI improvement on data loading in VPC forms

## v4.35.4 — 2026-03-18

### [Console](/console)
- Improved reconnection to websockets

### [Supporto](/console)
- Add fallback creating a support ticket when websocket are disconnected

## v4.35.3 — 2026-03-17

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Update disk recovery when loading replicas from the Replication tab

## v4.35.0 — 2026-03-11

### [Ordini](/console/orders)
- Add command to delete cpool/spool mapping
- Add VPC private network deprovision command
- Modifications to Bare Metal volume deprovision command, it is now possible to order the deletion from the volume list
- Added Bare Metal volume mapping deletion command
- Add VPC deprovision command
- Block deprovisioning of a datastore if it is the last in a datastore cluster

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Ability of adding a RAM limit to a virtual machine

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Update VMware multi vmotion to allow moving VMs from one cluster to another

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Add ability to update an host
- Display host update information

### [Rete](/network/network_overview)
- Disable network propagation deletion button when no propagation is delivered

### [LLMaaS](/llmaas)
- Display of consumption grouped by token type

## v4.34.0 — 2026-02-18

### [Console](/console)
- Major update to the application's display engine
- VMware and OpenIaaS menus are not displayed when only the metric module is activated

### [Metriche](/console/metrics/concepts)
- Ability to export to CSV from VMware and OpenIaaS Metrics pages

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- When moving a virtual machine, it is not possible to select the same destination host as the virtual machine's current host
- Add 'New catalog' button on the VMware Catalog page

## 2026-02-04 — Server MCP della Console

- IaaS OpenSource virtual machine templates, networks, hosts and storage repositories can be queried

## 2026-02-03 — Server MCP della Console

- Availability of the Console MCP (Model Context Protocol) server, authenticated with a personal access token
- VMware virtual machines can be queried and operated from an agent: list, details, virtual datacenters, power on and power off

## v4.33.0 — 2026-01-21

### [Ordini](/console/orders)
- Add a command to delete a network propagation on OpenIaaS

### [Metriche](/console/metrics/concepts)
- Added filters for VMWare and OpenIaaS metrics pages

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Added the 'Virtual Machines' metrics page
- Added metrics details page for each VM

## v4.32.0 — 2026-01-14

### [Supporto](/console)
- Update support ticket closure modal

### [IaaS VMware — Backup](/iaas_vmware)
- When assigning a backup policy to a disk, it is now proposed to inventory the disk if it is not recognized by the backup solution

### [Bare Metal](/iaas_bare-metal)
- Deleting a BFS volume on a Bare Metal is now blocked, the volume will be deleted when the Bare Metal is deleted
- When ordering a Bare Metal, the first volume is now renamed 'BFS volume'

## v4.31.0 — 2026-01-07

### [IaaS VMware — Backup](/iaas_vmware)
- Updated tooltip explanations of options available when restoring a virtual machine

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Snapshots linked to backup policies are now visible
- Display of Host linked to ISO storage location during upload and from catalog page

### [Object Storage](/storage/oss)
- Display of an explanatory card from the incomplete MPU tab when the Console IP is not authorized, preventing the tab from being displayed

### [Marketplace](/marketplace)
- Display card error when accessing a non-existent marketplace page

## v4.30.1 — 2025-12-16

### [Console](/console)
- Improve empty error display by defaulting the HTTP status raised

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc)
- Ability of associating a static IP with a custom MAC address

### [LLMaaS](/llmaas)
- On consumption metrics, filtering of series with values at 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc)
- Improved synchronization of actions on VPC pages
- Add ability to associate static IPs with public IPs from static IPs list

### [Archiviazione](/storage/oss)
- Add incomplete MPU display from bucket page
- Ability to delete an incomplete MPU

## v4.28.0 — 2025-11-21

### [Console](/console)
- Added the ability to display global information messages visible throughout the application

### [Ordini](/console/orders)
- Ability to order an LLMaaS credit add-on for the tenant
- Ability to order a VPC
- Ability to order a private network in a VPC
- Ability to order a public IP for the VPC product
- Ability to activate the gateway for a VPC
- Added the ability to order tenant deletion

### [Metriche](/console/metrics/concepts)
- Improved tooltip display on metrics graphs: you can now click a point to freeze the tooltip and view all data

### [Rete](/network/network_overview)
- Grouping of the Network and Internet pages under a single product: Private Backbone
- Added PTR record management when editing a public IP
- Blocked sharing for certain network types

### [VPC](/network/vpc)
- Integration of the VPC product
- Added a page listing VPCs
- Added a VPC details page
- Ability to manage private networks, public IPs and the gateway of a VPC
- Ability to associate a static IP from a VPC private network with a VMware or OpenIaaS network adapter
- Ability to associate a static IP with a public IP in a VPC

### [LLMaaS](/llmaas)
- Added a Billing tab on the LLMaaS page for tenants with prepayment enabled
- Display of remaining credit for tenants in prepayment mode, on the dashboard and from the Billing tab

## v4.27.0 — 2025-11-12

### [Ordini](/console/orders)
- Addition of a check on available stock when ordering resources
- Add an order type and product filter to the order list

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Improvements to the virtual machine console. Better keyboard management, and addition of a clipboard

### [IaaS VMware — Backup](/iaas_vmware)
- Addition of an alert on the dashboard for SPP backup vsnaps with too high an occupancy level

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Improvements to the virtual machine console. Better keyboard management, and addition of a clipboard

### [Marketplace](/marketplace)
- Added the option of displaying the technical details of an image

## v4.26.5 — 2025-11-04

### [Console](/console)
- Improve graphics size of dashboard when resizing the window

## v4.26.3 — 2025-10-31

### [Metriche](/console/metrics/concepts)
- Modification of the name of metric exports presented in graphs

## v4.26.0 — 2025-10-22

### [Console](/console)
- Add copy button for current perimeter in user profile
- Complete rework of the Dashboard
- Add automatic reconnection to activity tracking when connection is interrupted

### [Ordini](/console/orders)
- Update order forms to add them to the various pages concerned (for example new Datastore from the Storage page)

### [Supporto](/console)
- Add email of the person who closed a ticket in support ticket ratings

### [Metriche](/console/metrics/concepts)
- VMware metrics retrieval reworked, page URL is now /iaas/metrics
- VMware infrastructure metrics tab added to Calcul
- VMware infrastructure metrics tab added to Storage
- Add a metrics page for OpenIaaS
- OpenIaaS infrastructure metrics tab added to Calcul
- OpenIaaS infrastructure metrics tab added to Storage

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add new extra_config keys
- Prevent selecting hostclusters with no active hosts
- When creating a VMware virtual machine, the Vcenter is now chosen according to the selected availability zone
- Add limits on names and descriptions uploading file on VMware

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- When adding an OpenIaaS disk, storage not belonging to the Virtual Machine Pool is now filtered
- When taking a snapshot, the option to take memory is now unchecked by default

### [IaaS OpenSource — Backup](/iaas_opensource)
- Add ability to execute backup from the backups tab of an OpenIaaS VM

### [Rete](/network/network_overview)
- Remove constraint preventing selection of multiple network types in virtual network page

### [Object Storage](/storage/oss)
- Optimizing bucket file retrieval

### [PaaS OpenShift](/paas_openshift)
- Add page listing OpenShift clusters
- Add a details page for an OpenShift cluster

### [Marketplace](/marketplace)
- Add UUID filter and copy option for items

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace)
- Updated use of advanced configuration and OVF properties when deploying a VMware virtual machine

## v4.24.0 — 2025-09-24

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Allow deployment of a virtual machine image from the virtual machines list

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Allow deployment of a virtual machine image from the virtual machines list

### [Rete](/network/network_overview)
- Add validation to prevent deletion of a shared network if it is propagated in another Tenant

### [Marketplace](/marketplace)
- Add Marketplace product
- Add a page listing available solutions in the catalog
- Add a page to view solution details
- Allow deployment of a virtual machine image on OpenIaaS or VMware from solution details
- Allow contacting a partner for a managed services solution

## v4.23.0 — 2025-09-12

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add support for 4 new extra-config values

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Do not display HA alert on VMs when the local ISO is not mounted
- Indicate whether the related SR is used for a replication setup when adding or resizing a VM disk

### [IaaS OpenSource — Backup](/iaas_opensource)
- Add AZ name to backup report

### [Object Storage](/storage/oss)
- Update bucket lifecycle information

### [LLMaaS](/llmaas)
- Add LLMaaS product
- Add list of available models
- Add list of API keys with ability to create new ones
- Add consumption tracking by model and by API key
- Add model details view
- Add ability to test a model

## v4.22.1 — 2025-09-10

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Modification of alerts concerning the chosen disk format configuration, during a VMotion including storage

## v4.22.0 — 2025-09-02

### [Ordini](/console/orders)
- Addition of a command to delete network propagation from the all commands page. All available commands can now be accessed from this page.

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Update conditions on disk format change during VM vMotion and display current disk format when configuring per disk

## v4.21.0 — 2025-08-22

### [Console](/console)
- Update display when no data is created/provisioned or when an error occurs while obtaining information.

### [Supporto](/console)
- Open support modals with the associated service preselected
- Addition of a badge in the menu and navbar when a support ticket requires a response

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add CSV export for VMware replicas
- Improve RAM selection slider on specific orders
- Added support for Static deferred and immediate options for vMotion

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Block deletion of non-empty clusters or those with hosts/datastores not in maintenance

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add CSV export for OpenIaaS replicas and associated policies
- Added details about the tools used by virtual machines (pvDrivers, managementAgent, and tools)
- Add high availability (HA) checks

### [Rete](/network/network_overview)
- Changing the selection of an IPv4 address with an available list

## v4.20.0 — 2025-07-29

### [Ordini](/console/orders)
- Add informations about limited and out-of-stock compute resources when ordering a new availability zone

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add VMware Tools option to sync time with host
- Virtual machine encryption conditions updated

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Removal of last execution information from replication policies causing slowdowns
- TX checksumming management for network adapters
- Add warning on OpenIaaS replication if number of AZ is less than 2
- High availability (HA) added for pools and virtual machines

## v4.19.0 — 2025-07-24

### [Ordini](/console/orders)
- Updated public IP order to allow IPv6 prefix requests
- Updated order modal to only show new deployment option when no environment is provisioned

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Added replication filter on the virtual machine list
- Updated virtual machine creation modal

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Added replication filter on the virtual machine list

### [Rete](/network/network_overview)
- Updated Internet page with IPv6 support

## v4.18.0 — 2025-07-15

### [Console](/console)
- Update display when no data is created/provisioned or when an error occurs while obtaining information.

### [Ordini](/console/orders)
- Update of internet steps when ordering a new availability zone or pool

### [Supporto](/console)
- Add a security service for each product when creating a support ticket

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add a link from an ISO mounted on a controller to the corresponding item in the catalog

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add an OpenIaaS replication page with a list of replicas and replication policies
- Ability to add and remove a replication configuration on an OpenIaaS virtual machine
- Ability to create and delete a replication policy
- Ability to recover a replica
- Ability to export virtual machines in CSV format.

## v4.17.0 — 2025-06-20

### [Ordini](/console/orders)
- Ability to order an OpenIaaS Pool
- Ability to order the association of an existing volume to an existing Bare Metal from the Bare Metal page, from the Volume page and from the Orders page.

### [Supporto](/console)
- Ability to delete a file on a support ticket
- Description of satisfaction on ticket closure is now optional

## v4.16.0 — 2025-06-04

### [Console](/console)
- Add English translations on the consumption reports page in the orders menu

### [Ordini](/console/orders)
- Ability to order a resize of a bare metal volume
- Ability to order a resize of an OpenIaaS Block Storage

### [Supporto](/console)
- Redesign of support ticket creation
- Interpret markdown in support ticket and update comment display order
- Add feedback when closing a support ticket
- Update pictogram display based on global incident impact

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add option to preserve a virtual machine's configuration during restore in Production on the original cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add warning if Block Storage disk space is low (90% used) and alert during orders

### [Object Storage](/storage/oss)
- Add S3 role description during bucket assignment

## v4.15.1 — 2025-05-27

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Display of an error when a network is misconfigured on a virtual machine's network adapter, preventing the virtual machine from powering on

## v4.15.0 — 2025-05-13

### [Console](/console)
- Adjustment of units displayed on infrastructure resources: GiB (Gibibyte) instead of GB (Gigabyte)

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Ability to relocate an OpenIaaS disk
- Ability to connect and disconnect an OpenIaaS disk
- Display of connected/disconnected status for disks
- Ability to copy UUID of a disk, virtual network, or snapshot
- Ability to choose the name of a virtual machine when deploying an XVA file
- Added the ability to assign a backup policy at startup if a virtual machine has no backup policy.

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Add actions available on a disk from a Block Storage

### [Bare Metal](/iaas_bare-metal)
- Add MAC addresses to the interface table of a Bare Metal
- Add Bare Metal volume details page

## v4.14.0 — 2025-04-28

### [Console](/console)
- Ability to pin pages in the menu
- Update API documentation rendering

### [Ordini](/console/orders)
- Ability to order the removal of a Block Storage in OpenIaaS
- Ability to order the addition of a Block Storage to an OpenIaaS pool
- Ability to order the removal of a Host in OpenIaaS
- Add product information to the order list
- Ability to order the addition of a Host to an OpenIaaS pool

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Ability to put a Host into maintenance mode
- Ability to edit a template description
- Ability to choose a Host at the startup of a virtual machine
- Add uniqueness rule on the naming of OpenIaaS virtual machines

## v4.13.0 — 2025-04-08

### [Console](/console)
- Add statistics and contact information to the Support page

### [Ordini](/console/orders)
- Redesign of the order details display
- Redesign of the order options display
- Update display to allow ordering the first baremetal if none exists
- Update Bare Metal provisioning by allowing selection of network propagation on its interfaces
- Ability to propagate VLAN to a Bare Metal
- Ability to add a volume to a Bare Metal
- Ability to deprovision a Bare Metal volume
- Ability to deprovision a Bare Metal

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add an UUID copy button on VMware networks and catalogs

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add an UUID copy button on VMware networks and catalogs
- Add an UUID copy button on a Bare Metal

### [Bare Metal](/iaas_bare-metal)
- Add display of network interfaces and propagated networks on a Bare Metal
- Add power on, reboot, and power off actions on a Bare Metal

### [Rete](/network/network_overview)
- Add ability to view propagation of a network on a Bare Metal

## v4.12.0 — 2025-03-25

### [Console](/console)
- Ability to delete an IP whitelist from the access page

### Etichette
- Add tags to OpenIaaS virtual machines

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Update API recommendations retrieval for HostCluster affinity/anti-affinity rules

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Display OpenIaaS XVA import in the uploads list
- Ability to attach an existing disk to a virtual machine
- Ability to detach an existing disk from a virtual machine

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- OpenIaaS Block Storage disk display update

## v4.11.3 — 2025-03-21

### [Object Storage](/storage/oss)
- Update error message when accessing files in an Object Storage bucket

## v4.11.1 — 2025-03-12

### [Ordini](/console/orders)
- Update availability zone names when placing an order
- Update the minimum datastore value when ordering a datastoreCluster

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- When the label field of hostCluster and datastoreCluster is cleared, the technical name will be applied by default

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- When the label field of pools is cleared, the technical name will be applied by default
- Added an informational tooltip on the catalog page and during ISO import to indicate that XVA is supported when creating a virtual machine

## v4.11.0 — 2025-03-10

### [Ordini](/console/orders)
- Update allowed network types during AZ creation
- Update the minimum resources to be provisioned when ordering a new availability zone

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Display the virtual machine name in the console tab for VMware

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Add label management for datastore clusters and VMware host clusters

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Enable virtual machine deployment via XVA import for OpenIaaS
- Add label management for OpenIaaS pools
- Display the virtual machine name in the console tab for OpenIaaS

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Update CPU information for OpenIaaS hosts and pools

### [Bare Metal](/iaas_bare-metal)
- Add IOPS/TO metrics for baremetal volumes

## v4.10.0 — 2025-03-04

### [Console](/console)
- Updated links to the new public documentation

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Added an alert to notify users in case of duplicate MAC addresses on the virtual machine list and during the creation or modification of network adapters
- Added an option to force shutdown or restart a virtual machine
- Memory will no longer be included by default during a snapshot if the virtual machine is not powered on
- Ability to rename and resize a disk
- Added the ability to delete ISOs and templates from the catalog page
- Added the ability to remove the 'Cloud Init' configuration disk during virtual machine deployment

## v4.9.1 — 2025-02-27

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Ability to edit a network adapter on a powered on virtual machine

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add of restrictions on characters allowed in OpenIaaS virtual machine names

## v4.9.0 — 2025-02-21

### [Console](/console)
- Make table names clickable when a related page exists
- Improve console handling to prevent multiple tabs from opening when several windows are open on the same page
- Display an error when opening a console if the browser does not allow redirections in the application

### [Metriche](/console/metrics/concepts)
- Display RAM units on the virtual machine health page

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Block virtual machine creation if the selected Block Storages do not have enough space
- Clear the default MAC address when creating an OpenIaaS virtual machine

### [Archiviazione](/storage/oss)
- Enable copying an S3 endpoint to the clipboard

## v4.8.0 — 2025-02-14

### [Ordini](/console/orders)
- Add network propagation order for OpenIaaS pools
- Add network propagation orders to the global orders page

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Display the number of allocated and available disks per controller on a virtual machine
- Updated conditions on the number of disks that can be added to Para Virtual SCSI controllers depending on the hardware version of the virtual machine.

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Ability to add Cloud Init options when creating an OpenIaaS virtual machine
- Display disks on a Block Storage page
- Ability to update boot firmware configuration of an OpenIaaS virtual machine
- Ability to clone an OpenIaaS virtual machine

### [Rete](/network/network_overview)
- Update network propagation visualization and add OpenIaaS propagations
- Update network creation and add propagation on OpenIaaS infrastructure at creation

## v4.7.0 — 2025-02-03

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- OVF export is blocked when the virtual machine is encrypted

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Display datastore cluster and host cluster relationships in the Compute and Storage pages

### [IaaS VMware — Backup](/iaas_vmware)
- Modification of the post-restore boot option for a SecNumCloud environment when restoring in clone or prodution mode on an alternative host or cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add the mount and unmount OpenIaaS ISO buttons to the virtual machine action bar

### [Rete](/network/network_overview)
- Improved display of network propagations when propagation deletion requests are in progress

## v4.6.0 — 2025-01-30

### [Console](/console)
- Remove displayed characters during auto-completion when adding observers in support ticket creation
- Update of the menu display and available pages for VMware and OpenIaaS offers on a new environment without provisioned availability zones

### [Console — Notifiche](/console)
- Update notification subscription displays from profile page

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add the ability to encrypt a VMware virtual machine

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add export to virtual machine template

## v4.5.0 — 2025-01-17

### [Console](/console)
- Add description during the creation and display of whitelists
- Enable updating the description of a whitelist

### [Ordini](/console/orders)
- Add a new Availability Zone order for OpenIaaS
- Add an order option for Bare Metal
- Link a hypervisor cluster to a storage cluster

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Display the remaining size in parentheses in the storage selection trees

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Display the worst-case memory allocation on an VMware host cluster

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add ISO upload feature to OpenIaaS catalogs
- Add virtual machine migration for OpenIaaS
- Enable disk and network selection during the creation of an OpenIaaS virtual machine

### [Bare Metal](/iaas_bare-metal)
- Add a page listing Bare Metals
- Add a page listing Bare Metal volumes
- Add a page displaying details of a Bare Metal
- Add the ability to open a Bare Metal console

## v4.4.0 — 2025-01-13

### [Console](/console)
- Technical changes to the authentication process

## v4.3.0 — 2024-12-19

### [Console — Attività](/console)
- Add "access the resource" links on activities related to XOA and Object-Storage

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add virtual machine tags and IP to CSV export of virtual machines

### [IaaS VMware — Backup](/iaas_vmware)
- Offer to export only filtered items in the CSV export of backup reports under the virtual machines sub-tab

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Add XOA VM-templates from the catalog page

### [Object Storage](/storage/oss)
- Be able to create and reset the global access key from storage accounts

## v4.2.0 — 2024-12-10

### [Console](/console)
- Add redirections to the status page

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Items already present in "My catalog" now remain visible in "Public catalog"
- Add redirections to components mentioned in an VMware catalog item
- Update the RAM display on a hypervisor cluster
- Remove the option to automatically replicate new disks causing errors
- Add validations for virtual machine replication
- Add new PCI Passthru configurations in the advanced settings of a virtual machine for GPU management
- Ability to add a PCI controller to virtual machines

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- Display DRS recommendations and failures from a hypervisor cluster
- New status for hypervisors and datastores during a maintenance request
- Add GPU information for a hypervisor

### [IaaS VMware — Backup](/iaas_vmware)
- Remove several non-functional backup options for virtual machines in test mode

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add a backup page for OpenIaas, listing errors, policies, backup reports, and enabling recovery of deleted virtual machines

### [IaaS OpenSource — Infrastruttura](/iaas_opensource)
- Add a page to list OpenIaas availability zones
- Add a storage page for OpenIaas
- Add a compute page for OpenIaas

### [Housing (Colocation)](/housing)
- Modification of the information displayed on the peripherals page

## v4.1.1 — 2024-11-18

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Improved memory editing, the conversion is made to the unit with the last integer value.
- When a snapshot is taken, the button for saving RAM is disabled when the virtual machine is switched off.
- When several virtual machines are unrolled, the list of disks is not displayed immediately

### [IaaS VMware — Backup](/iaas_vmware)
- Add back the CSV export button in the virtual machines tab of the backup reports page

## v4.1.0 — 2024-11-13

### [Console](/console)
- Ability to send a file in feedback

### [Identità e accessi (IAM)](/console/iam)
- Disable the ability to delete an owner

### [Ordini](/console/orders)
- Add management for adding, deleting, and editing a datastore from the orders page
- Add ability to delete Host

### [IaaS VMware — Macchine virtuali](/iaas_vmware)
- Add snapshot activities in the snapshot tab of a VM
- Display actual virtual machine size in CSV export

### [IaaS VMware — Infrastruttura](/iaas_vmware)
- On the compute and storage pages, the filter on availability zones is also applies to the cluster tabs
- Display of usage percentages on consumption bars (CPU / RAM / Storage)

### [IaaS OpenSource — Macchine virtuali](/iaas_opensource)
- Add validation of the backup policy precense on the auto power on option
- Add option to force shutdown/restart for virtual machines without guest tools installed
- Improve execution message of an OpenIaas policy on a specific VM

### [Bastion](/bastion)
- Add validation to the Host field of a device

## v4.0.3 — 2024-11-04

### [Console](/console)
- Improvements and fixes about the new design

## v4.0.2 — 2024-10-30

### [Console](/console)
- Improvements and fixes about the new design

## v4.0.1 — 2024-10-25

### [Console](/console)
- Improvements and fixes about the new design

## v4.0.0 — 2024-10-18

### [Console](/console)
- New Console design
- Redesign of infrastructure and backup pages

---

:::info Cronologia precedente
La cronologia completa delle versioni precedenti alla v4.0 (da v1.0 a v3.38.1, da febbraio 2019 a ottobre 2024) è disponibile nella [cronologia Git](https://github.com/Cloud-Temple/docs) del progetto.
:::
