---
title: Novedades del producto
sidebar_position: 999
---

# Novedades del producto & Evoluciones

> Este changelog lista únicamente las nuevas funcionalidades y evoluciones significativas de la plataforma Cloud Temple.
> Las correcciones de errores están excluidas intencionalmente.

## v4.37.0 — 2026-04-02

### [Gestionnaire des coûts](/console/billing/concepts)
- Add forecast amount to consumption page for graph and trend display
- Visual improvement when there is an error or too little data on consumption in the current month

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Improved form for deploying a virtual machine from a catalog item
- Add the ability to change the display type (grid or table) from the catalog page

## v4.36.0 — 2026-03-27

### [Commandes](/console/orders)
- Add filters and sorts to the list of disks from Block Storage details

### [Gestionnaire des coûts](/console/billing/concepts)
- Add cost-manager page
- Ability to view costs for the current month
- Ability to view costs over a range of dates and compare trends

### [VPC](/network/vpc/vpc)
- UI improvement on data loading in VPC forms

### [Console](/console/console)
- Update metrics and consumption graphs

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Disk display bug fixed when configuring replication from a virtual machine

## v4.35.4 — 2026-03-18

### [Support](/console/console)
- Add fallback creating a support ticket when websocket are disconnected

### [Console](/console/console)
- Improved reconnection to websockets

## v4.35.0 — 2026-03-11

### [LLMaaS](/llmaas/llmaas)
- Add ability to update an host
- Display of consumption grouped by token type

### [Métriques](/console/metrics/concepts)
- Display host update information

### [Réseau](/network/network_overview)
- Disable network propagation deletion button when no propagation is delivered

### [Commandes](/console/orders)
- Add VPC private network deprovision command
- Modifications to Bare Metal volume deprovision command, it is now possible to order the deletion from the volume list
- Added Bare Metal volume mapping deletion command
- Add VPC deprovision command
- Block deprovisioning of a datastore if it is the last in a datastore cluster

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Update VMware multi vmotion to allow moving VMs from one cluster to another

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability of adding a RAM limit to a virtual machine

## v4.34.0 — 2026-02-18

### [Console](/console/console)
- Major update to the application's display engine
- VMware and OpenIaaS menus are not displayed when only the metric module is activated

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- When moving a virtual machine, it is not possible to select the same destination host as the virtual machine's current host
- Add 'New catalog' button on the VMware Catalog page

### [Métriques](/console/metrics/concepts)
- Ability to export to CSV from VMware and OpenIaaS Metrics pages

## v4.33.0 — 2026-01-21

### [Commandes](/console/orders)
- Add a command to delete a network propagation on OpenIaaS

### [Métriques](/console/metrics/concepts)
- Added filters for VMWare and OpenIaaS metrics pages

## v4.32.0 — 2026-01-14

### [Support](/console/console)
- Update support ticket closure modal

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Deleting a BFS volume on a Bare Metal is now blocked, the volume will be deleted when the Bare Metal is deleted
- When ordering a Bare Metal, the first volume is now renamed 'BFS volume'

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- When assigning a backup policy to a disk, it is now proposed to inventory the disk if it is not recognized by the backup solution

## v4.31.0 — 2026-01-07

### [Commandes](/console/orders)
- Snapshots linked to backup policies are now visible

### [Object Storage S3](/storage/oss/oss)
- Display of an explanatory card from the incomplete MPU tab when the Console IP is not authorized, preventing the tab from being displayed

### [Marketplace](/marketplace/marketplace)
- Display card error when accessing a non-existent marketplace page

## v4.30.5 — 2025-12-30

### [Métriques](/console/metrics/concepts)
- Corrected calculation of the gauge indicating the percentage of space used for all VMWare datastores

## v4.30.2 — 2025-12-16

### [Console](/console/console)
- Minor technical fix

## v4.30.1 — 2025-12-16

### [Console](/console/console)
- Improve empty error display by defaulting the HTTP status raised

## v4.30.0 — 2025-12-12

### [VPC](/network/vpc/vpc)
- Ability of associating a static IP with a custom MAC address

### [LLMaaS](/llmaas/llmaas)
- On consumption metrics, filtering of series with values at 0

## v4.29.0 — 2025-12-09

### [VPC](/network/vpc/vpc)
- Add ability to associate static IPs with public IPs from static IPs list

### [Stockage](/storage/oss/oss)
- Add incomplete MPU display from bucket page
- Ability to delete an incomplete MPU

## v4.28.0 — 2025-11-21

### [Commandes](/console/orders)
- Ability to order an LLMaaS credit add-on for the tenant
- Ability to order a VPC
- Ability to order a private network in a VPC
- Ability to order a public IP for the VPC product
- Ability to activate the gateway for a VPC
- Added the ability to order tenant deletion

### [LLMaaS](/llmaas/llmaas)
- Added a Billing tab on the LLMaaS page for tenants with prepayment enabled
- Display of remaining credit for tenants in prepayment mode, on the dashboard and from the Billing tab

### [Console](/console/console)
- Added the ability to display global information messages visible throughout the application

### [VPC](/network/vpc/vpc)
- Integration of the VPC product
- Added a page listing VPCs
- Added a VPC details page
- Ability to manage private networks, public IPs and the gateway of a VPC
- Ability to associate a static IP from a VPC private network with a VMware or OpenIaaS network adapter
- Ability to associate a static IP with a public IP in a VPC

### [Réseau](/network/network_overview)
- Grouping of the Network and Internet pages under a single product: Private Backbone
- Added PTR record management when editing a public IP
- Blocked sharing for certain network types

### [Métriques](/console/metrics/concepts)
- Improved tooltip display on metrics graphs: you can now click a point to freeze the tooltip and view all data

## v4.27.0 — 2025-11-12

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Improvements to the virtual machine console. Better keyboard management, and addition of a clipboard

### [PaaS OpenShift](/paas_openshift/paas_openshift)
- Improvements to the virtual machine console. Better keyboard management, and addition of a clipboard

### [Commandes](/console/orders)
- Minor correction to the search for backup reports
- Add an order type and product filter to the order list

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Addition of an alert on the dashboard for SPP backup vsnaps with too high an occupancy level

### [Marketplace](/marketplace/marketplace)
- Added the option of displaying the technical details of an image

## v4.26.5 — 2025-11-04

### [Console](/console/console)
- Improve graphics size of dashboard when resizing the window

## v4.26.3 — 2025-10-31

### [Métriques](/console/metrics/concepts)
- Modification of the name of metric exports presented in graphs

## v4.26.2 — 2025-10-29

### [Métriques](/console/metrics/concepts)
- Corrected retrieval and display of metrics for IaaS VMs

## v4.26.0 — 2025-10-22

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add new extra_config keys
- Prevent selecting hostclusters with no active hosts
- When creating a VMware virtual machine, the Vcenter is now chosen according to the selected availability zone
- When taking a snapshot, the option to take memory is now unchecked by default

### [Console](/console/console)
- Add copy button for current perimeter in user profile
- Complete rework of the Dashboard
- Add automatic reconnection to activity tracking when connection is interrupted

### [Object Storage S3](/storage/oss/oss)
- Add ability to execute backup from the backups tab of an OpenIaaS VM

### [Réseau](/network/network_overview)
- Remove constraint preventing selection of multiple network types in virtual network page

### [PaaS OpenShift](/paas_openshift/paas_openshift)
- Add page listing OpenShift clusters
- Add a details page for an OpenShift cluster

### [Métriques](/console/metrics/concepts)
- VMware metrics retrieval reworked, page URL is now /iaas/metrics
- VMware infrastructure metrics tab added to Calcul
- VMware infrastructure metrics tab added to Storage
- Add a metrics page for OpenIaaS
- OpenIaaS infrastructure metrics tab added to Calcul
- OpenIaaS infrastructure metrics tab added to Storage

### [Marketplace](/marketplace/marketplace)
- Add UUID filter and copy option for items

### [Support](/console/console)
- When adding an OpenIaaS disk, storage not belonging to the Virtual Machine Pool is now filtered

### [Commandes](/console/orders)
- Update order forms to add them to the various pages concerned (for example new Datastore from the Storage page)

## v4.25.0 — 2025-10-16

### [Marketplace](/marketplace/marketplace)
- Updated use of advanced configuration and OVF properties when deploying a VMware virtual machine

## v4.24.2 — 2025-09-29

### [Marketplace](/marketplace/marketplace)
- Minor UI correction

## v4.24.0 — 2025-09-24

### [Marketplace](/marketplace/marketplace)
- Add Marketplace product
- Add a page listing available solutions in the catalog
- Add a page to view solution details
- Allow deployment of a virtual machine image on OpenIaaS or VMware from solution details
- Allow contacting a partner for a managed services solution

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Allow deployment of a virtual machine image from the virtual machines list

### [LLMaaS](/llmaas/llmaas)
- Allow deployment of a virtual machine image from the virtual machines list

### [Réseau](/network/network_overview)
- Add validation to prevent deletion of a shared network if it is propagated in another Tenant

## v4.23.0 — 2025-09-12

### [LLMaaS](/llmaas/llmaas)
- Add LLMaaS product
- Add list of available models
- Add list of API keys with ability to create new ones
- Add consumption tracking by model and by API key
- Add model details view
- Add ability to test a model

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add support for 4 new extra-config values
- Do not display HA alert on VMs when the local ISO is not mounted

### [Réseau](/network/network_overview)
- Indicate whether the related SR is used for a replication setup when adding or resizing a VM disk

### [Object Storage S3](/storage/oss/oss)
- Update bucket lifecycle information

## v4.22.1 — 2025-09-10

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Modification of alerts concerning the chosen disk format configuration, during a VMotion including storage

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Minor correction to the date filter in the list of backup errors

## v4.22.0 — 2025-09-02

### [Console](/console/console)
- Minor correction to file upload status display

## v4.21.0 — 2025-08-22

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Bug when putting an ESX host into maintenance
- Block deletion of non-empty clusters or those with hosts/datastores not in maintenance

### [Console](/console/console)
- Update display when no data is created/provisioned or when an error occurs while obtaining information.
- Add CSV export for OpenIaaS replicas and associated policies

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add CSV export for VMware replicas
- Improve RAM selection slider on specific orders
- Add high availability (HA) checks

### [Réseau](/network/network_overview)
- Changing the selection of an IPv4 address with an available list

### [Support](/console/console)
- Addition of a badge in the menu and navbar when a support ticket requires a response

## v4.20.0 — 2025-07-29

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Removal of last execution information from replication policies causing slowdowns
- TX checksumming management for network adapters

## v4.19.0 — 2025-07-24

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Added replication filter on the virtual machine list
- Updated virtual machine creation modal

### [Commandes](/console/orders)
- Updated public IP order to allow IPv6 prefix requests
- Updated order modal to only show new deployment option when no environment is provisioned

## v4.18.0 — 2025-07-15

### [Commandes](/console/orders)
- Add an OpenIaaS replication page with a list of replicas and replication policies

### [Support](/console/console)
- Add a security service for each product when creating a support ticket

### [Console](/console/console)
- Update display when no data is created/provisioned or when an error occurs while obtaining information.

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to export virtual machines in CSV format.

## v4.17.0 — 2025-06-20

### [Commandes](/console/orders)
- Ability to order the association of an existing volume to an existing Bare Metal from the Bare Metal page, from the Volume page and from the Orders page.

### [Support](/console/console)
- Ability to delete a file on a support ticket
- Description of satisfaction on ticket closure is now optional

## v4.16.0 — 2025-06-04

### [Support](/console/console)
- Redesign of support ticket creation
- Interpret markdown in support ticket and update comment display order
- Add feedback when closing a support ticket
- Update pictogram display based on global incident impact

### [Commandes](/console/orders)
- Add warning if Block Storage disk space is low (90% used) and alert during orders
- Ability to order a resize of an OpenIaaS Block Storage

### [Object Storage S3](/storage/oss/oss)
- Add S3 role description during bucket assignment

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add option to preserve a virtual machine's configuration during restore in Production on the original cluster

### [Console](/console/console)
- Add English translations on the consumption reports page in the orders menu

## v4.15.1 — 2025-05-27

### [Réseau](/network/network_overview)
- Display of an error when a network is misconfigured on a virtual machine's network adapter, preventing the virtual machine from powering on

## v4.15.0 — 2025-05-13

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to relocate an OpenIaaS disk

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Ability to copy UUID of a disk, virtual network, or snapshot
- Add Bare Metal volume details page

### [Console](/console/console)
- Adjustment of units displayed on infrastructure resources: GiB (Gibibyte) instead of GB (Gigabyte)

## v4.14.0 — 2025-04-28

### [Commandes](/console/orders)
- Ability to order the removal of a Block Storage in OpenIaaS
- Ability to order the addition of a Block Storage to an OpenIaaS pool
- Ability to order the removal of a Host in OpenIaaS
- Ability to put a Host into maintenance mode
- Ability to order the addition of a Host to an OpenIaaS pool

### [Console](/console/console)
- Ability to choose a Host at the startup of a virtual machine
- Update API documentation rendering

## v4.13.0 — 2025-04-08

### [Commandes](/console/orders)
- Add an UUID copy button on VMware networks and catalogs
- Redesign of the order options display
- Update display to allow ordering the first baremetal if none exists
- Update Bare Metal provisioning by allowing selection of network propagation on its interfaces
- Ability to propagate VLAN to a Bare Metal
- Ability to add a volume to a Bare Metal
- Ability to deprovision a Bare Metal volume
- Ability to deprovision a Bare Metal

### [Réseau](/network/network_overview)
- Add ability to view propagation of a network on a Bare Metal

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Add display of network interfaces and propagated networks on a Bare Metal
- Add power on, reboot, and power off actions on a Bare Metal

### [Console](/console/console)
- Add statistics and contact information to the Support page

## v4.12.5 — 2025-04-07

### [Réseau](/network/network_overview)
- Minor UI fix on virtual network propagation form

## v4.12.0 — 2025-03-25

### Étiquettes
- OpenIaaS Block Storage disk display update

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Display OpenIaaS XVA import in the uploads list

### [Console](/console/console)
- Ability to delete an IP whitelist from the access page

## v4.11.3 — 2025-03-21

### [Object Storage S3](/storage/oss/oss)
- Update error message when accessing files in an Object Storage bucket

## v4.11.1 — 2025-03-12

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- When the label field of hostCluster and datastoreCluster is cleared, the technical name will be applied by default

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- When the label field of pools is cleared, the technical name will be applied by default

## v4.11.0 — 2025-03-10

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Enable virtual machine deployment via XVA import for OpenIaaS

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Update allowed network types during AZ creation

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Display the virtual machine name in the console tab for VMware

### [Commandes](/console/orders)
- Display the virtual machine name in the console tab for OpenIaaS

## v4.10.0 — 2025-03-04

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Added an alert to notify users in case of duplicate MAC addresses on the virtual machine list and during the creation or modification of network adapters

### [Console](/console/console)
- Ability to rename and resize a disk

## v4.9.1 — 2025-02-27

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add of restrictions on characters allowed in OpenIaaS virtual machine names
- Ability to edit a network adapter on a powered on virtual machine

## v4.9.0 — 2025-02-21

### [Stockage](/storage/oss/oss)
- Block virtual machine creation if the selected Block Storages do not have enough space

### [Console](/console/console)
- Make table names clickable when a related page exists
- Improve console handling to prevent multiple tabs from opening when several windows are open on the same page
- Display an error when opening a console if the browser does not allow redirections in the application

### [Métriques](/console/metrics/concepts)
- Display RAM units on the virtual machine health page

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Clear the default MAC address when creating an OpenIaaS virtual machine

## v4.8.1 — 2025-02-18

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Bug fixed following update of recommendations sent at virtual machine power on

## v4.8.0 — 2025-02-14

### [Réseau](/network/network_overview)
- Update network propagation visualization and add OpenIaaS propagations
- Display disks on a Block Storage page

### [Commandes](/console/orders)
- Ability to add Cloud Init options when creating an OpenIaaS virtual machine
- Add network propagation orders to the global orders page

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to update boot firmware configuration of an OpenIaaS virtual machine
- Updated conditions on the number of disks that can be added to Para Virtual SCSI controllers depending on the hardware version of the virtual machine.

### [Console](/console/console)
- Ability to clone an OpenIaaS virtual machine

## v4.7.0 — 2025-02-03

### [Réseau](/network/network_overview)
- Improved display of network propagations when propagation deletion requests are in progress

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- OVF export is blocked when the virtual machine is encrypted

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Modification of the post-restore boot option for a SecNumCloud environment when restoring in clone or prodution mode on an alternative host or cluster

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Display datastore cluster and host cluster relationships in the Compute and Storage pages

## v4.6.0 — 2025-01-30

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add export to virtual machine template

### [Console](/console/console)
- Remove displayed characters during auto-completion when adding observers in support ticket creation
- Update of the menu display and available pages for VMware and OpenIaaS offers on a new environment without provisioned availability zones

### [Console — Notifications](/console/console)
- Update notification subscription displays from profile page

## v4.5.2 — 2025-01-22

### [Console](/console/console)
- Minor UI fixes

## v4.5.1 — 2025-01-21

### [Console](/console/console)
- Minor UI fixes

## v4.5.0 — 2025-01-17

### [Commandes](/console/orders)
- Add a new Availability Zone order for OpenIaaS
- Add ISO upload feature to OpenIaaS catalogs
- Link a hypervisor cluster to a storage cluster

### [Bare Metal](/iaas_bare-metal/iaas_bare-metal)
- Add a page listing Bare Metals
- Add a page listing Bare Metal volumes
- Add a page displaying details of a Bare Metal
- Add the ability to open a Bare Metal console

### [Console](/console/console)
- Add description during the creation and display of whitelists
- Enable updating the description of a whitelist

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add virtual machine migration for OpenIaaS

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Enable disk and network selection during the creation of an OpenIaaS virtual machine

## v4.4.0 — 2024-01-13

### [Console](/console/console)
- Technical changes to the authentication process

## v4.3.0 — 2024-12-19

### [Object Storage S3](/storage/oss/oss)
- Be able to create and reset the global access key from storage accounts

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Offer to export only filtered items in the CSV export of backup reports under the virtual machines sub-tab

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add virtual machine tags and IP to CSV export of virtual machines

## v4.2.0 — 2024-12-10

### [Hébergement physique (Housing)](/housing/housing)
- Modification of the information displayed on the peripherals page

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Items already present in "My catalog" now remain visible in "Public catalog"
- Add redirections to components mentioned in an VMware catalog item
- Update the RAM display on a hypervisor cluster
- Remove the option to automatically replicate new disks causing errors
- Add validations for virtual machine replication
- Add new PCI Passthru configurations in the advanced settings of a virtual machine for GPU management
- Ability to add a PCI controller to virtual machines

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Remove several non-functional backup options for virtual machines in test mode

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add a backup page for OpenIaas, listing errors, policies, backup reports, and enabling recovery of deleted virtual machines
- New status for hypervisors and datastores during a maintenance request
- Add a page to list OpenIaas availability zones
- Add a storage page for OpenIaas

### [Console](/console/console)
- Add redirections to the status page

## v4.1.1 — 2024-11-18

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Improved memory editing, the conversion is made to the unit with the last integer value.
- When a snapshot is taken, the button for saving RAM is disabled when the virtual machine is switched off.

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add back the CSV export button in the virtual machines tab of the backup reports page

## v4.1.0 — 2024-11-13

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add snapshot activities in the snapshot tab of a VM
- Display actual virtual machine size in CSV export

### [Identité & Accès (IAM)](/console/iam/iam)
- Add validation of the backup policy precense on the auto power on option

### [Commandes](/console/orders)
- Improve execution message of an OpenIaas policy on a specific VM
- Add management for adding, deleting, and editing a datastore from the orders page
- Add ability to delete Host

### [Console](/console/console)
- Ability to send a file in feedback

### [Bastion](/bastion/bastion)
- Add validation to the Host field of a device

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- On the compute and storage pages, the filter on availability zones is also applies to the cluster tabs
- Display of usage percentages on consumption bars (CPU / RAM / Storage)

## v4.0.3 — 2024-11-04

### [Console](/console/console)
- Improvements and fixes about the new design

## v4.0.2 — 2024-10-30

### [Console](/console/console)
- Improvements and fixes about the new design

## v4.0.1 — 2024-10-25

### [Console](/console/console)
- Improvements and fixes about the new design

## v4.0.0 — 2024-10-18

### [Console](/console/console)
- New Console design
- Redesign of infrastructure and backup pages

## v3.37.5 — 2024-10-02

### [Commandes](/console/orders)
- Modification of the warning message when ordering the deletion of a cluster

### [Identité & Accès (IAM)](/console/iam/iam)
- Remove "Select my permissions" and "Unselect all" buttons when editing a tenant owner

## v3.37.4 — 2024-09-30

### [Commandes](/console/orders)
- Add confirmation by name when requesting deletion of infrastructure resources

### [Identité & Accès (IAM)](/console/iam/iam)
- Permission changes of a tenant owner are disabled

## v3.37.2 — 2024-09-16

### [Identité & Accès (IAM)](/console/iam/iam)
- Improved messages about how unit owners work

### [Console](/console/console)
- Add a redirection from the /support route to /administration/support to correct redirections of support tickets from email

## v3.37.1 — 2024-09-10

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Corrected warning about content libraries when deleting a datastore

## v3.37.0 — 2024-09-02

### [Réseau](/network/network_overview)
- Public IPs can be ordered from the web page in the network menu

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add a warning when a datastore is put into maintenance if it contains content libraries

### [Identité & Accès (IAM)](/console/iam/iam)
- Tenant owner's display
- Ability for an owner to declare a user as also being the owner of the tenant

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add warning when deleting a content library iso when mounted in a virtual machine

## v3.36.0 — 2024-07-24

### [Commandes](/console/orders)
- Ability to order the provisioning of an hypervisor cluster
- Ability to order the deletion of an hypervisor cluster
- Ability to order the provisioning of a storage cluster
- Ability to order the deletion of a storage cluster

### [Console](/console/console)
- Add a page listing public IPs and subnets authorized to access the console (new permission required)
- Ability to add an IPs to the list authorized to access the console (new permission required)

## v3.35.2 — 2024-07-23

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add checks and messages when restoring a backup

## v3.35.0 — 2024-07-15

### [Commandes](/console/orders)
- New page for displaying Cloud usage reports for specific date ranges
- The 2 default datastores cannot be of type MASS when creating an AZ
- Add compute orders to the form on the page listing commands

### [Bastion](/bastion/bastion)
- Add a specific permission for access to the console of an appliance

### [Réseau](/network/network_overview)
- Update network types authorized to be propagated
- Ability to send multiple networks on the same create network action
- Add a column indicating network propagation
- Ability to reactivate a deleted network

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to edit the description of a snapshot
- Add a field for configuration files when moving a virtual machine

## v3.34.0 — 2024-06-25

### [Console](/console/console)
- Update getting and displaying generalized or tenant incidents

## v3.33.0 — 2024-06-06

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to add and remove vApp properties from a virtual machine's advanced options
- Search on Vmware tasks is now also applied to the “target” column

### [Stockage](/storage/oss/oss)
- Ability to generate a URL to share a file from a bucket page

### [Console](/console/console)
- Ended incidents page now displays most recent incidents first

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Last execution and next execution columns added to backup jobs
- Added validation to prevent policy assignment in HELD status
- Ability to rename the restore of a virtual machine backup

## v3.32.0 — 2024-05-24

### [Commandes](/console/orders)
- Ability to order the provisioning of a new AZ
- Add limitation to 20 maximum networks per propagation
- Add redirection on information bubbles indicating that an order is already in progress

### [Réseau](/network/network_overview)
- Add name validation when creating a new virtual network

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to add an extra config key "disk.EnableUUID" from a virtual machine's advanced options
- Ability to modify a edit a controller on a powered off virtual machine
- Ability to rename an item in the local model catalog
- Ability to edit the controller of a virtual disk

### [Console](/console/console)
- VMware page display management when no environment is provisioned

### [Stockage](/storage/oss/oss)
- Display of IP ranges authorized on a bucket in private or personalized access
- Ability to synchronize the IP ranges allowed on a bucket with the public internet IP ranges of the tenant

## v3.31.0 — 2024-04-16

### [Console](/console/console)
- Add incidents with the status "investigation" or "identified" to the list of open incidents

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add "thin provisioning" option for virtual machine storage migration

### [Console — Notifications](/console/console)
- Initialization of new notification module
- Ability to list and subscribe to topics from profile page

### [Stockage](/storage/oss/oss)
- Access type added when creating a bucket
- Ability to modify bucket access from bucket parameters

## v3.30.0 — 2024-04-04

### [Console](/console/console)
- Add display of open incidents from navigation bar
- Add a page of all open and completed incidents

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add a validation on characters allowed in file names when uploading to a catalog

### [Stockage](/storage/oss/oss)
- Temporary disable upload to bucket from application

## v3.29.0 — 2024-03-27

### [Commandes](/console/orders)
- Update form for datastore request and datastore size increase

### [Réseau](/network/network_overview)
- Display the number of addresses available for each prefix from the web page

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Update and explanation of how affinity/anti-affinity rules work on a compute cluster

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Update of default options when taking snapshots on a virtual machine
- Remove search causing errors and slowdowns when exploring a datastore

## v3.28.0 — 2024-03-21

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to choose NVME controller when creating a disk
- Ability to enable or disable vApp options from a virtual machine's advanced options
- Update display of disc types available at time of creation

### [Réseau](/network/network_overview)
- Redesign of the Public IPs menu as an Internet menu

## v3.27.0 — 2024-03-08

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add alerts about disk modes not supported during backup

## v3.26.0 — 2024-03-06

### [PaaS OpenShift](/paas_openshift/paas_openshift)
- New module to support Openshift product

## v3.25.0 — 2024-03-05

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Update display of disc modes available at time of creation

## v3.24.0 — 2024-03-04

### [Console](/console/console)
- When performing certain actions on certain resources, it is now possible to access this resource from the success notification
- Tokens used on swaggers are now automatically renewed, no need to refresh the page

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to add NVME controllers to a virtual machine

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to perform a configuration update on an ESX (update has no impact on build version)

### [Réseau](/network/network_overview)
- Ability to request deletion of a virtual network propagation

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Ability to delete a backup policy on a switched-off virtual machine, even when this policy is the last one assigned

### [Stockage](/storage/oss/oss)
- Ability to browse and download files in a bucket

## v3.23.0 — 2024-02-15

### [Stockage](/storage/oss/oss)
- Ajout des menus Stockage et Stockage Object
- Ajout d'une page listant et permettant des actions sur les buckets et comptes de stockage
- Ajout d'une page sur les details d'un bucket listant la configuration et les comptes de stockage associés

## v3.22.0 — 2024-02-14

### [Console — Activités](/console/console)
- Optimize activity retrieval by paging API calls

## v3.21.0 — 2024-02-05

### [Console](/console/console)
- Improvement of error messages not explicit enough

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to choose a different storage per disk when adding several disks at once

### [Commandes](/console/orders)
- Manage display of actions for orders available only in SNC environment

## v3.20.0 — 2024-01-31

### [Console — Activités](/console/console)
- From the logs page, the activity display is now updated live
- From the logs page, the progress bar is now displayed on activities in progress

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to export a virtual machine in OVF format to a local catalog
- Ability to reserve RAM on a virtual machine

## v3.19.0 — 2024-01-10

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Datastores and hosts currently being provisioned are now blocked during various selections
- Hardware virtualization option added and editable

### [Console](/console/console)
- Add options for csv export

### [Console — Activités](/console/console)
- Add author filter to log page

### [Commandes](/console/orders)
- Add a page for order details
- Ability to view and add comments when a ticket is linked to an order
- Ability to view the propagation of an active VLAN network
- Ability to propagate an active VLAN network
- Ability to propagate a network as soon as it is created

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Remove of the dvswitch infrastructure page replaced by an array of networks in the hostCluster page
- Alarms displayed for hosts and vcenters

## v3.18.1 — 2023-12-15

### [Commandes](/console/orders)
- Default sorting on orders page changed to date of last update
- Add a limitation on the minimum size when requesting a datastore increase

## v3.18.0 — 2023-12-15

### [Identité & Accès (IAM)](/console/iam/iam)
- Update the names of certain permissions and creating new ones
- Grouping of permissions display by products

### [Hébergement physique (Housing)](/housing/housing)
- Update Hosting API calls to the new Housing API"

### [Réseau](/network/network_overview)
- Update Hosting API calls to the new Network API

### [Commandes](/console/orders)
- Add a page listing orders
- Ability to order additional memory on a host cluster
- Ability to order a new host on a host cluster
- Ability to order the addition of storage capacity on a datastore
- Ability to order a new datastore on a cluster datastore
- Ability to order the deprovisioning of a datastore

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a status filter to job sessions

### [Console](/console/console)
- Completed interventions are now sorted by default from most recent to oldest
- Ability to choose a favorite perimeter which will be used by default when connecting to the application without a direct URL

## v3.17.4 — 2023-11-07

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add information to disk deletion confirmation popup

## v3.17.2 — 2023-10-16

### [Métriques](/console/metrics/concepts)
- Add vCenter name to virtual machine health route

## v3.17.0 — 2023-10-10

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add "auto-connect" option when creating a network adapter

### [Métriques](/console/metrics/concepts)
- Update virtual machine health page

### [Console](/console/console)
- Completed interventions are now sorted by default from most recent to oldest

### [Réseau](/network/network_overview)
- Add a page about virtual networks and the possibility of sharing them to tenants of the company

## v3.16.2 — 2023-09-11

### [Console](/console/console)
- Update some menus on sidebar

## v3.16.1 — 2023-09-11

### [Bastion](/bastion/bastion)
- Description is now optional on a device

## v3.16 — 2023-09-11

### [Console](/console/console)
- Update sidebar menu
- Add user profil page
- Add documentation about privacy

### [Bastion](/bastion/bastion)
- Integration of the new version of the Bastion module

## v3.15 — 2023-08-30

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add a list of vApp properties to a virtual machine from advanced options
- Optimize disk creation by filling in default fields
- Optimize virtual machine creation by filling in default some fields

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add monitoring of backup job activities

## v3.14 — 2023-08-02

### [Console](/console/console)
- Default sorting of hosts and datastores in alphabetical order
- Pressing "Enter" on a form no longer reloads the page
- Improve multi-step modals

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Improve summary display at disc creation
- Add choice of network adapters when cloning a virtual machine
- When creating a virtual machine, fields no longer default to error after adding a disk, controller or network adapter
- Update of the CPU field at the creation of a virtual machine was not usable when too many values were available

## v3.13 — 2023-07-18

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add file size in local catalog

### [Console](/console/console)
- The list of support requests is now available from the buoy in the navbar
- Release notes by module are now available from the swaggers page

### [Métriques](/console/metrics/concepts)
- Date filter on virtual machine health page now takes hours and minutes

### [Console — Activités](/console/console)
- It is now possible to list read logs, the default filter only displays write logs

## v3.12.1 — 2023-06-23

### [Console](/console/console)
- Improvement of the display of interventions

## v3.12 — 2023-06-21

### [Console](/console/console)
- Display of an error message when a file exceeding the authorized limit is added during upload in a catalog

## v3.11.3 — 2023-06-19

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Display of an error message when a file exceeding the authorized limit is added during upload in a catalog

## v3.11 — 2023-06-12

### [Console](/console/console)
- Ability to add additional observers when creating a support ticket

### [Métriques](/console/metrics/concepts)
- Add health data history to a virtual machine
- Add a legend to the columns of the virtual machine health page

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add vcenter name in front of clusters when restoring a virtual machine
- Add a warning banner on a virtual machine when it is not inventoried on SPP
- Ability to launch the SPP inventory from the policy and backup tabs for a virtual machine not yet inventoried

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to start a virtual machine in sppMode test

## v3.10 — 2023-06-06

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Integration of features to control an Esxi Standalone

### [Console](/console/console)
- Improve display of support requests

## v3.9 — 2023-05-23

### Maintenance & Opérations
- Ability to view the graphics of a service from the page of an equipment
- Improvement of the display of the graphics of a service

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to browse files in a datastore
- Improvement of the loading of the page of an ESX

### [Console](/console/console)
- Ability to close a support ticket
- Optimize project

## v3.8 — 2023-04-04

### [Console](/console/console)
- Improved display of themes when creating a support ticket
- Add filters on the support ticket page
- Optimization of the use of websockets responses
- Improved font and icon retrieve

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add network configuration step when deploying a virtual machine from a VM template or an OVF
- Add filters on the "Catalogs" page
- Edit update of the hardware version of a virtual machine

### [Métriques](/console/metrics/concepts)
- Add a "Health" page for virtual machines
- Add the global power consumption of ESX on the dashboard

## v3.7 — 2023-03-16

### Documentation
- Add a breadcrumb to the pages of the documentation part

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add the secure boot option in the advanced options to power on a virtual machine
- Improvement of the addition of disks on a virtual machine by allowing the multiple addition in only one action
- Add an extra step for the choice of an OS when creating a virtual machine
- Add a filter by hostCluster on the list of virtual machines

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a column indicating the types of a backup policy
- Improvement of the messages displayed to the user on the actions concerning the backup policies of a virtual machine

## v3.6.3 — 2023-03-08

### [Console](/console/console)
- Display most recently modified tickets by default on support requests

## v3.6.2 — 2023-03-07

### [Console](/console/console)
- Optimization of the project configuration

## v3.6 — 2023-02-27

### [Identité & Accès (IAM)](/console/iam/iam)
- When the user does not have the right 'iam_manage_permissions' do not block the opening of the popup but only the editing

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- When uploading, possibility to add files with capitalized extensions

### [Bastion](/bastion/bastion)
- Replace the title of a bastion session tab with the session name

## v3.5.2 — 2023-02-07

### [Bastion](/bastion/bastion)
- Improving the display time of a bastion session

## v3.5.1 — 2023-02-07

### [Console — Activités](/console/console)
- Get of running activities is temporary disabled reloading the page

## v3.5 — 2023-02-03

### [Tickets de support](/console/console)
- Add client reference column to the ticket list

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a tab in the backup report page of the ungrouped list of reports

### [Identité & Accès (IAM)](/console/iam/iam)
- Ability to update user profile of your local account

## v3.4.3 — 2023-02-07

### [Bastion](/bastion/bastion)
- Improving the display time of a bastion session

## v3.4.2 — 2023-02-07

### [Console — Activités](/console/console)
- Get of running activities is temporary disabled reloading the page

## v3.4 — 2023-01-30

### [Console](/console/console)
- Features requiring a role not owned are no longer displayed

### Maintenance & Opérations
- Add a search field by name on the list of equipments

## v3.3.1 — 2023-01-19

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Display a warning when adding a disabled policy to a virtual machine

## v3.3 — 2023-01-18

### [Console](/console/console)
- Rework display of notifications

## v3.2.1 — 2023-01-11

### Maintenance & Opérations
- Optimize getting information on services list

## v3.2 — 2023-01-05

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Update ESXs and datastores status

## v3.1 — 2022-12-21

### [Métriques](/console/metrics/concepts)
- Add new tab in the dashboard for the power consumption and CO2 emission of ESX
- Add graph of power consumption on the details of an ESX over a given period
- Add carbon emission of an ESX on a given period

## v3.0 — 2022-12-14

### [Console](/console/console)
- Redesign of the style and global ergonomics of the interface
- Redesign of the application's home page
- New way of working and display of filters
- New way of working and display of the views recorded on the supervised services and tickets
- Add of a filter "not assigned" on the list of tickets
- New way of working of the follow-up of the current activities
- Split in tabs of the dashboard
- Display of APIs and PAT in a dedicated page

## v2.38 — 2022-12-06

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Integration of VRM (Virtual Machine Replication) API calls on the replication page and virtual machine details

### [Console](/console/console)
- The FAQ is now redirected to the new documentation

## v2.37 — 2022-11-24

### Maintenance & Opérations
- Update performance graphs on monitored services

## v2.36 — 2022-11-02

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add notifications when only some of the vcenters are responding
- Add name validation when uploading a file in a catalog

### [Console](/console/console)
- Ability to see support requests

## v2.35 — 2022-10-18

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- When selecting a compute or storage resource, unavailable resources cannot be selected

### Maintenance & Opérations
- Ability to add time period stop from the equipment list

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Adding the 'Streaming' option during a backup restore to improve execution time

## v2.34 — 2022-10-12

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Disabled backup policies are no longer assignable to virtual machine except for the 'nobackup' policy

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Redesign of the Content Library page to become the Catalogs page
- Ability to publish an ISO or the files of an FVO in "My Catalog
- Ability to clone a model from a "Public Catalog" to "My Catalog"

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to list, add and delete a content library from a vcenter page in the Infrastructure section

## v2.33.1 — 2022-10-12

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Update available actions on SecNumCloud tenant

## v2.33 — 2022-09-23

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to synchronize an item from a content library

### [Console](/console/console)
- Update of the support request process

## v2.32 — 2022-08-30

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add a feature to request the update of an ESX.

## v2.31 — 2022-08-29

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to enable VMware tools update on next virtual machine reboot
- Add affinity and anti-affinity rules on virtual machine details

### [Console](/console/console)
- Add a validation on the creation of a Personal Access Token limiting the expiration to a maximum of 1 year

## v2.30 — 2022-08-23

### [Console](/console/console)
- Optimize performance by aborting ongoing API calls when changing pages

## v2.29.3 — 2022-08-23

### [Bastion](/bastion/bastion)
- Improve security opening Bastion session

## v2.29 — 2022-08-04

### [Console](/console/console)
- Improved display for a help request

### [Tickets de support](/console/console)
- Add a filter 'On delegation' on the list of tickets
- Ability to choose the filter rule 'AND' or 'OR' to apply between the different filters on the ticket list
- Delete the option to edit a ticket when it is closed

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add advanced options to power on a virtual machine

## v2.28.1 — 2022-08-01

### [Identité & Accès (IAM)](/console/iam/iam)
- Temporarily disabled email update feature

### [Console](/console/console)
- Removal of the technical details of the description field in the support module

## v2.28 — 2022-07-22

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add an alert to a virtual machine's information when memory is ballooned
- Information on the remaining size needed on the datastore for the upload of an ISO
- Add a button to open a console directly in the actions column of a virtual machine

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add the version of VMware tools on the details of an ESX

### [Console](/console/console)
- Rework of the support request section

## v2.27 — 2022-07-06

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Update of the interface to track file uploads
- Ability to export only the virtual machines filtered during the CSV export
- Add a table listing the ISO files

## v2.26.4 — 2022-07-04

### Maintenance & Opérations
- When choosing a custom date range on monitoring graphics, the default hour is 00:00

## v2.26.2 — 2022-06-29

### [Console](/console/console)
- Update performance graphs on some monitored services

## v2.26.1 — 2022-06-27

### Maintenance & Opérations
- Update performance graphs on some monitored services

## v2.26 — 2022-06-23

### Inventaire
- Integration of the new Inventory API

### [Console](/console/console)
- Update information displaying API changes
- Add a SecNumCloud logo in front of the SecNumCloud holders in the sidebar
- The dynamic data of the infrastructure part in the sidebar are now sorted alphabetically

### Maintenance & Opérations
- Update of the display of the details of a planned stop

### [Hébergement physique (Housing)](/housing/housing)
- Add reference field on the telecom circuits page

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to declare affinity and anti-affinity rules between virtual machines from a hostCLuster

### Étiquettes
- Optimization of the retrieval time of tags on the list of virtual machines

## v2.25.1 — 2022-06-10

### [Console](/console/console)
- Add constraints for an SNC tenant

## v2.25 — 2022-06-07

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to copy a virtual machine's extra config to the clipboard
- Ability to add the sum of disk sizes in the csv export of virtual machines

### Maintenance & Opérations
- Ability to add and view time period stop of supervision from the service list
- Add a page listing time periods stops of supervision

## v2.24 — 2022-05-10

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Display of danger and critical alarm indicators on the list of virtual machines
- Add information when deploying a virtual machine from a template
- Display the list and details of alerts on a virtual machine
- OS filter updated to show only used OS

### [Console](/console/console)
- Update releases notes display
- Display of breaking changes on release notes

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Update the memory display of a HostCluster and add an alert on ballooned memory

### Maintenance & Opérations
- Add performance graphs on some monitored services

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- When assigning a backup policy, don't display disabled policies

## v2.23 — 2022-04-28

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add search field on filters by OS or vlans on virtual machine list
- Optimize networks retrieve

## v2.22 — 2022-04-26

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Optimize networks retrieve
- Add OS filter on virtual machines list
- Add a search field on trees containing a lot of data

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add the date when the data was retrieved about the errors on the last backups
- Display virtual machine informations when restoring a disk or a virtual machine
- Optimize jobs by policy retrieve on dashboard

### [Tickets de support](/console/console)
- Add confirm to cancel ticket creation

## v2.21 — 2022-04-12

### Maintenance & Opérations
- Add notifications related to a service

### [Tickets de support](/console/console)
- Ability to add watchers to the advanced creation of a ticket

### [Console](/console/console)
- Update of roles in the FAQ
- Update form reset when opening a modal

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Update of the display of VMware tools according to their origin
- Update the display of vm-templates and options for deploying them
- Ability to force BIOS access at virtual machine boot

### [Identité & Accès (IAM)](/console/iam/iam)
- Ability to reenroll a user

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Optimization of getting backup reports

## v2.20 — 2022-03-30

### [Bastion](/bastion/bastion)
- Ability to delete a session
- Ability to view activities related to a session

## v2.19 — 2022-03-29

### [Tickets de support](/console/console)
- Add an option to display the description and comments in plain text without HTML interpretation
- Ability to switch a ticket from customer validation to open planned when a comment is created

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to change the type of MAC address assignment of a network adapter

### [Bastion](/bastion/bastion)
- Add bastion connection session

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Ability to display graphs of jobs by backup policies over 7 days and 30 days in addition to 24 and 48 hours

## v2.18 — 2022-03-21

### [Tickets de support](/console/console)
- Route updates for downloading and importing files on tickets

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Re-integration of Scup API calls regarding ESXs update informations

### Étiquettes
- Add the TAG module
- Ability to add and remove tags on multiple virtual machines at once
- Ability to display and delete tags on a virtual machine
- Ability to filter virtual machines based on tags

## v2.17.3 — 2022-03-16

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Disable Host DRS status edition causing VMware errors

## v2.17.2 — 2022-03-15

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Disable SDRS status edition causing VMware errors

## v2.17 — 2022-03-03

### [Tickets de support](/console/console)
- Ability to delete a file on a ticket

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Improvement of the editing mode of a disc

### [Bastion](/bastion/bastion)
- Add translation and interface modification on the Bastion part

## v2.16 — 2022-02-28

### [Bastion](/bastion/bastion)
- Ability to edit the description of a bastion appliance

### [Tickets de support](/console/console)
- Improvement on the detail of a ticket by allowing the edition even if data takes time to load

## v2.15 — 2022-02-17

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Load a virtual machine when taking a snapshot
- Edit the Vmotion migration when selecting "Migrate only compute resources"
- Edit the "Manager" column on the list of virtual machines

### [Console](/console/console)
- Ability to right-click on the redirect buttons to open the page in a new tab

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add information when restoring a backup

### [Bastion](/bastion/bastion)
- Add ssh/rdp choice

## v2.14.1 — 2022-02-10

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Temporarily disable the display of available updates for an ESX

## v2.14 — 2022-02-03

### [Identité & Accès (IAM)](/console/iam/iam)
- Update of the IAM module

## v2.13 — 2022-02-01

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add the name of the dvswitch on the list of proposed vlans
- Add a search field on datastore exploration
- Ability to see the Shiva activities linked from the virtual machine

### Documentation
- Ability to search for a page on the Documentation part

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Update of labels to enter and exit a maintenance ESX

## v2.12 — 2022-01-26

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Update backup information on the dashboard
- Add list of last failed virtual machine backups on the backup reports page

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to choose a host cluster or a new datacenter when exporting a virtual machine as a template
- Ability to choose an IDE controller when creating a virtual disk

### [Tickets de support](/console/console)
- Add a competence center filter to the tickets list
- Add a requester column to the ticket list

### [Identité & Accès (IAM)](/console/iam/iam)
- Add mail address reset for a local user

## v2.11 — 2022-01-21

### [Bastion](/bastion/bastion)
- Add Bastion module

### [Console](/console/console)
- Add Bastion and Scup swaggers

## v2.10 — 2022-01-20

### [Identité & Accès (IAM)](/console/iam/iam)
- Improvement of the SSO experience

## v2.9 — 2022-01-17

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add an alert on virtual machines in "invalid" status
- Add alerts (consolidation required, esx unavailable, virtual machine in "invalid" status) above the virtual machine table

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a search bar to the list of virtual machines in a backup policy

## v2.8 — 2022-01-06

### [Console](/console/console)
- Redesign of the composition of Shiva urls

## v2.7 — 2022-01-05

### [Identité & Accès (IAM)](/console/iam/iam)
- Activity tracking and display synchronization when a user is deleted

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add the number of virtual machines on a backup report

## v2.6 — 2022-01-04

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Update of the tool controlling the console of a virtual machine

## v2.5 — 2022-01-03

### [Tickets de support](/console/console)
- Add validation on the title of a ticket when editing it

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Edit the display of backup information on the dashboard
- Add precision on the frequency of backup policies

### [Identité & Accès (IAM)](/console/iam/iam)
- Add a filter for verified and unverified users

## v2.4.8 — 2021-12-24

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Remove advanced settings edition

## v2.4.6 — 2021-12-21

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- When refreshing the data of a virtual machine, do not change the tab on the virtual machine

## v2.4.5 — 2021-12-17

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Improvement of the loading speed of the SPP page in the infrastructure part

## v2.4.4 — 2021-12-17

### [Console](/console/console)
- Add an overlay when loading an oppened array element

## v2.4.1 — 2021-12-16

### [Console](/console/console)
- Ability to search on some dynamic lists (examples: choice of networks on the creation or migration of virtual machine, choice of a view on the supervision part...)
- Add quotes to object names in notifications (examples: virtual machine names, ticket names...)

## v2.4 — 2021-12-15

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add a step to configure the network, when deploying a template
- Add the version of VMware tools on the information of a virtual machine

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Removes the button to run a backup on the backup policy table of a disk

### [Réseau](/network/network_overview)
- Temporarily remove the network's edition on the Networks page

## v2.3 — 2021-12-10

### [Identité & Accès (IAM)](/console/iam/iam)
- When assigning rights, roles not owned and therefore not assignable by the user are disabled

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add destination choice when cloning a virtual machine
- Add a filter on the list of users to filter by external or internal users
- Add a step to configure the network, when deploying a template

## v2.2 — 2021-12-06

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add the hosting / racks page
- Add the hosting / public IP page
- Add the hosting / devices page
- Add the hosting / telecom circuits page
- Add the networks page
- Ability to add, delete and edit a network
- Add information related to hosts on the hosts and hosts clusters pages

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a filter by date on the backup of virtual machine

## v2.1 — 2021-12-02

### [Tickets de support](/console/console)
- Add a summary field on the details of a ticket

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Improved virtual machine migration modal
- Add consumption when selecting hosts and datastores on all modals

## v2.0 — 2021-11-29

### [Console](/console/console)
- Redesign of the graphic engine

## v1.63 — 2021-11-17

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to browse a datastore to inventory a virtual machine from a vmx file

### [Tickets de support](/console/console)
- Update the competence center and owner's edition on the details of a ticket
- When creating a ticket, add the default requester and ask for the contact in advanced mode

### Maintenance & Opérations
- Add the list of tickets related to an equipment

## v1.62.2 — 2021-11-03

### [Console](/console/console)
- Entries in the FAQ "How do I use Shiva APIs to automate tasks?" and "Why are some users grayed out?"

## v1.62 — 2021-10-19

### [Tickets de support](/console/console)
- Ability to add files to the ticket creation
- Add "Advanced" mode on the creation of a ticket with the fields "Requester" and "Customer reference"
- Enable read-only editing of the "Competence center", "Requester", "Owner" and "Contact" fields of a ticket

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Improve and fix the upload tracking of a file in a content library
- Ability to choose the type of deletion of a virtual machine

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add a page per host in the infrastructure section

### [Identité & Accès (IAM)](/console/iam/iam)
- Add the expiration date to the list of PAT

### [Console](/console/console)
- Add redirect mechanics once the user is logged in when sharing a SHIVA link
- Integration of the "Sentry" error tracking tool into the project

## v1.61 — 2021-10-12

### [Console](/console/console)
- Display of the total number of elements at the foot of the tables
- A user who has not verified his email is now grayed out on the list of users and his rights cannot be edited

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Update of the data displayed following the unassignment of a backup policy
- Improved graphics on machines covered by a backup policy
- Add a button to export virtual machine backup info from the Spectrum Protect Plus page in the infrastructure part

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add a validation when unmounting a virtual disk
- Update of the full display of SCSI Ids on virtual disks
- Ability to connect and disconnect a CDROM drive
- Add the storage cluster option to the deployment of a template from the virtual machines page
- Ability to remove an advanced configuration setting on a virtual machine
- Ability to sort virtual disks by name
- Add a button to export virtual machine info from virtual machine page

### [Tickets de support](/console/console)
- Add a search field by Id on the ticket list that links to the ticket details
- Add a refresh button on the ticket details
- Add a banner when a ticket is created with a link to the ticket
- Ability to sort alphabetically on the list of items in a catalog
- Ability to modify the requester of a ticket
- Ability to filter the list of tickets by requester
- Translation of ticket status

### Maintenance & Opérations
- Add the selection, by user, of a default view for each of the existing paths from the "Views" page
- Ability to update the default view on pages that support the feature
- Ability to overwrite the filters of a view when clicking on 'Save'
- Add monitoring and notifications filters on the services list
- Temporary disable of the appliance health button

### [Identité & Accès (IAM)](/console/iam/iam)
- Add an expiration date when creating a PAT

### Documentation
- Duplicate files are not displayed correctly on a documentation page

## v1.60.11 — 2021-10-06

### [Console](/console/console)
- Add button to export recent activities to csv
- Add button to export archived activities to csv
- Add a FAQ entry regarding the location of activities

## v1.60.8 — 2021-10-04

### [Console](/console/console)
- Add the latest missing versions in the release notes
- Add a clarification in the FAQ regarding the deletion of a user

## v1.60.7 — 2021-09-30

### [Console](/console/console)
- Replace 'Administrator' with 'All roles' in the FAQ

## v1.60 — 2021-09-21

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add the total storage used on the detail of a virtual machine

### [Tickets de support](/console/console)
- Filling the catalogs with the default item at the creation of a ticket
- Catalog fields are no longer required to create a ticket
- Add viewers to the details of a ticket
- Ability to edit the viewers of a ticket

## v1.59.3 — 2021-09-20

### Documentation
- Delete changes related to files

## v1.59 — 2021-09-16

### [Identité & Accès (IAM)](/console/iam/iam)
- Add a button on the list of users allowing an export of the list in CSV format

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add tasks on virtual machine details

## v1.58 — 2021-09-13

### [Console](/console/console)
- Ability to report an incident issue

## v1.57 — 2021-09-03

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- When creating a virtual disk, it is possible to manually select the SCSI controller
- During a storage migration, it is now possible to choose a destination storage for each disk

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a button on the list of virtual machine by policy allowing an export of the list in CSV format

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add the TSM offloading factor on the SPP page in the infrastructure section

### [Tickets de support](/console/console)
- Add a title field for ticket creation
- Add new translations

### Maintenance & Opérations
- Change the date and time format in the monitoring and ticket section when the language is set to english
- Add a button in the views page allowing the redirection to the chosen view
- Add a button allowing the addition of tags on the list of equipment

## v1.56.3 — 2021-08-24

### [Console](/console/console)
- Update translation of services types and tickets status

## v1.56.2 — 2021-08-24

### [Console](/console/console)
- Update translation of services types and tickets status

## v1.56.1 — 2021-08-16

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Filters are not updated when refreshing virtual machines without SLA

## v1.56 — 2021-08-06

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add list of virtual machines without backup policy on the backup policy page

## v1.55 — 2021-07-30

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to enable or disable RAM hotplug
- Ability to enable or disable CPU hotplug
- Add advanced settings to a virtual machine
- Ability to edit the advanced settings of a virtual machine
- Add a page with the list of replicated virtual machines

### [Console](/console/console)
- Pre-authorization on Api documentation

### Maintenance & Opérations
- Add a page listing the filtering views of the monitoring part

### [Identité & Accès (IAM)](/console/iam/iam)
- Ability to create Personal Access Tokens (PAT)

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- When a job is cancelled, it is possible to keep the data already saved

## v1.54 — 2021-07-23

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add a filter to filter the virtual machines that have or do not have a snapshot

### [Tickets de support](/console/console)
- Url updated according to the filters applied on the Ticket page
- Ability to save applied filters as a view on the Ticket page
- Ability to apply filters from a previously saved view on the Ticket page

### Maintenance & Opérations
- Url updated according to the filters applied on the Equipment page
- Ability to save applied filters as a view on the Equipment page
- Ability to apply filters from a previously saved view on the Equipment page
- Url updated according to the filters applied on the Service page
- Ability to save applied filters as a view on the Service page
- Ability to apply filters from a previously saved view on the Service page

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Ability to clean up the active resources linked to a job

## v1.53 — 2021-07-16

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add the events associated with a vmware task

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability, when creating a virtual machine, to choose between a new machine or a machine from a template in a content library
- Add a check on the file name before uploading it into a content library
- Add a FAQ entry about the visibility of a content library, especially when mounting an iso

### [Console](/console/console)
- Edit the structure of the navigation bar

### [Tickets de support](/console/console)
- Ability to edit your own comments on a ticket
- Edit the filters applied when clicking on a tag in the tickets view
- Add translation on the ticket view
- Edit the display and management of GTI/GTR

### [Identité & Accès (IAM)](/console/iam/iam)
- Add the role iam_manage_permissions

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Edit the graph concerning the number of machines with at least 1 backup

## v1.52.3 — 2021-07-09

### Documentation
- Add home page

## v1.52 — 2021-06-29

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add the choice of recommendations at the power on of a virtual machine

### Maintenance & Opérations
- Add equipment without notifications on the numbers of the supervision graphs

### [Tickets de support](/console/console)
- Ability to download files attached to a ticket
- Add a button on the date range filters to remove the range
- Add line breaks on the preview of the description or comment of a ticket

## v1.51 — 2021-06-28

### Documentation
- Add module documentation

## v1.50 — 2021-06-28

### [Console](/console/console)
- Possibility of opening several tenants of the same company at the same time

## v1.49 — 2021-06-25

### [Console](/console/console)
- Add a button on local accounts to reset your password once you are logged in
- Add a button on local accounts to reset your MFA once you are logged in

## v1.48 — 2021-06-22

### Maintenance & Opérations
- Add graphics on the view of all the services

### [Tickets de support](/console/console)
- Add a filter on Gti deadlines on the ticket list
- Add a tag on the number of expired or soon to be expired Gti deadlines on the ticket list
- Add a filter on the Gtr expiries on the ticket list
- Add a tag on the number of expired or soon to be expired Gtr deadlines on the ticket list
- Add a filter on the catalogs not filled in on the ticket list
- Add a tag on the number of catalogs "Origin" not filled on the list of tickets
- Add a tag on the number of catalogs "Nature" not informed on the list of tickets

## v1.47 — 2021-06-15

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a graph on the number of machines concerned by a backup policy
- Add paging to the retrieve of virtual machine backups

### [Tickets de support](/console/console)
- Edit the display of a ticket's details

## v1.45 — 2021-06-09

### [Tickets de support](/console/console)
- Add column "Team" on the ticket list

### Maintenance & Opérations
- Change in the display of the "Information" column of the services

## v1.44 — 2021-06-02

### Maintenance & Opérations
- Add a dashboard view for the monitoring part
- Add a view listing all the services
- Add a service status graph to the equipment details view
- Ability to filter "monitored" and "notification enabled" equipments
- Ability to get the health status of an appliance
- Ability to filter and sort the status of the equipments
- Change the status display of an equipment
- Change of the gtr and gti fields on the ticket list

### [Tickets de support](/console/console)
- Add a tag to the ticket list indicating the number of "unassigned" tickets with the ability to click on the tag to filter the tickets. click to filter
- Add a tag to the ticket list indicating the number of tickets "in escalation" with the ability to click to filter
- Add column "Nature" on the tickets list

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Removes restrictions on unmounting and deleting a virtual disk while the machine is powered on

## v1.43 — 2021-06-01

### [Identité & Accès (IAM)](/console/iam/iam)
- Add the ability to pre-select owned roles during roles assignment

## v1.41 — 2021-05-18

### [Identité & Accès (IAM)](/console/iam/iam)
- Update of the authentication system following the IAM V2 changes

## v1.40 — 2021-05-05

### [Identité & Accès (IAM)](/console/iam/iam)
- IAM V2 activation

## v1.31 — 2021-05-05

### [Console — Activités](/console/console)
- Ability to filter logs by user

### [Console](/console/console)
- Add redirects when clicking on the dashboard graphics

### Maintenance & Opérations
- Add a management view of tags
- Ability to add a tag to an equipment
- Display the tags associated with an equipment
- Add a tag filter to the equipment list

## v1.30 — 2021-04-22

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Remove a wrong tooltip on the button to clone a virtual machine

### [Console](/console/console)
- Edit the welcome message for a user's first login

### [Identité & Accès (IAM)](/console/iam/iam)
- Implementation of IAM V2

## v1.29.1 — 2021-04-22

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to clone a virtual machine when it is turned on

## v1.29 — 2021-04-20

### [Console](/console/console)
- Ability to choose the order of the columns when they are filtered

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add the VmWare task tracking view

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add validation on MAC addresses
- Add the name of the virtual switch on the vlan filter in the virtual machine view

### [Tickets de support](/console/console)
- Ability to filter by ticket nature
- Add the number of tickets per status on the ticket view

### Maintenance & Opérations
- Add information column to the service view

## v1.28 — 2021-04-09

### [Console](/console/console)
- Add the number of tickets and the distribution of unclosed tickets on the dashboard

## v1.27 — 2021-04-08

### [Console](/console/console)
- Modifications to adapt the responsive of the application

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add all the IPs of a virtual machine
- Ability to choose the type of motion of a virtual machine ( compute only, storage only or both)
- Add the information of the current location of a virtual machine when moving it

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to change the SDRS configuration
- Ability to modify HostCluster DRS configuration
- Ability to choose the recommendations to be applied during maintenance
- Ability to apply the recommendations of an SDRS

### Maintenance & Opérations
- Add filters on the equipment and services views
- Add the date of the status update for a service

### [Tickets de support](/console/console)
- Add columns GTR and GTI

## v1.26.2 — 2021-03-23

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add filter by host when retrieving content libraries

## v1.26 — 2021-03-18

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add virtual machine consolidation
- Add file upload to the content library and disable object-storage
- Add guest OS modification
- Add CD/DVD driver creation
- Add CD/DVD driver choice on ISO mounting
- Add host filtering when getting guest OS

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Display SPP platform version in infrastructure part

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add the choice of the pages number on the list of hosts in the infrastructure part

### [Tickets de support](/console/console)
- Add tickets filtering with multiple status
- Add ticket modification

## v1.25 — 2021-02-26

### [Console](/console/console)
- Add a redirection when clicking on a job on the dashboard chart

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to choose between host and hostCluster for a deploy template
- Ability to hard-configure a mac address on a virtual machine
- Ability to stop or reboot the guest OS on a virtual machine
- Add a special display for failed virtual machines during migration

### Maintenance & Opérations
- Add the number of services and availability status on the equipment view
- Add a services page for an equipment

### [Tickets de support](/console/console)
- Modification of the display between a human and an automatic comment on a ticket

### Inventaire
- Ability to choose to display 50 or 100 items on an inventory view

## v1.24 — 2021-02-17

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to choose a datastore or host cluster when migrating a virtual machine
- Disable disk resizing when the machine has at least one snapshot
- Add cluster compatibility check during a vmotion

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add a vmotion button from datastore to datastore on the infrastructure part

### [Tickets de support](/console/console)
- Catalog fields are now displayed according to previously selected items
- Add comment edition
- Add comment creation

## v1.23.2 — 2021-02-12

### [Tickets de support](/console/console)
- Modification of the API call for ticket creation

## v1.23.1 — 2021-02-10

### [Tickets de support](/console/console)
- Add notification for service catalog retrieval problem

## v1.23 — 2021-02-09

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to migrate multiple virtual machines from one host to another on the infrastructure view of a hostcluster
- Update of the display of host status on the infrastructure view of a hostcluster

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add the name of the virtual machine in the url when opening the console
- Add an alphabetical sorting in the datastore treeview

### [Tickets de support](/console/console)
- Add linked files on the edition of a ticket
- Ability to link files to the edition of a ticket
- Ability to create a new ticket
- Add filters on tickets

### [Console](/console/console)
- Reinforcement of security during interpretation of new fields

## v1.22 — 2021-01-20

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add options on the snapshot creation
- When adding a disk, it is now possible to choose between a datastore and a cluster
- Add description and applied options display on the snapshot

### [Tickets de support](/console/console)
- Add catalogs on tickets

### Maintenance & Opérations
- Add an appliance list

## v1.21 — 2021-01-12

### [Console](/console/console)
- Add Shiva API documentation
- Update of the sidebar
- Drop-down lists are now replaced by a message when they are empty

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- The filter with the list of vlans is now sorted in alphabetical order
- Ability to deploy a template directly from the virtual machine view

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to maintain a host

### [Identité & Accès (IAM)](/console/iam/iam)
- Add a filter by role on the user view
- Ability to sort users by number of roles
- Update Ticketing and Monitoring rights

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a tooltip redirecting to the FAQ when choosing the restoration type
- Editing a backup policy is temporarily disabled

### [Tickets de support](/console/console)
- Ability to sort by column in the Tickets view

### Maintenance & Opérations
- Ability to sort by column in the Equipments view

## v1.20 — 2021-01-08

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add type on deployment variables for library templates
- When migrating a virtual machine, it is now possible to choose a new network for each network adapter
- ISO image mounting has been modified in order to make the creation of a CDROM drive transparent

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Ability to maintain a datastore

### Maintenance & Opérations
- Add a monitoring view for the equipment listing

## v1.19.1 — 2020-12-22

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- The graph on the number of machines affected by a backup policy does not work with SPP 10.1.5

## v1.19 — 2020-12-16

### [Tickets de support](/console/console)
- Creation of a view for tickets listing

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- When creating a virtual machine, it is now possible to select only computing and storage clusters to take advantage of the DRS
- Add confirmation when the combination of 'ctrl + alt + suppr' is performed on the console
- Add a datastore browser to retreive existing virtual disks

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add Vsphere DRS informations on the "Storage" tab in the infrastructure part

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- When a job fails, it is now possible to restart it for the concerned machines using a new button provided for this purpose
- Add a graph showing the virtual machines rate with at least one associated backup policy

### [Object Storage S3](/storage/oss/oss)
- Add S3 token creation with object-storage
- Add S3 tokens listing by project

## v1.18 — 2020-11-27

### [Console](/console/console)
- Clicking on a menu item opens the page and sub-menu at the same time
- Add a scroll-bar when a menu item is too long
- Add information about the new compute_iaas_vmware_management roles in the FAQ
- The compute_vmware_management_url role is replaced by compute_iaas_vmware_management_read and allows exploration of the VMware infrastructure

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Remove the resources pool view in the infrastructure part
- Alignment of the legend on the graphs in the infrastructure part and add a total value

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to reduce the memory of a virtual machine
- Add an automatic filter by Datacenter when retrieving iso files from a datastore or content library
- Add SCSI controller IDs to the virtual machine disk list

## v1.17 — 2020-11-17

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add interface to create CD/DVD controller

### [Console](/console/console)
- Deactivation of datastores when they are put under maintenance
- Add FAQ entry on how to delete a restored disk

## v1.16.2 — 2020-10-22

### [Console](/console/console)
- Update the default value for memory and storage capacity when creating and editing throughout the application (now GB)

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add technical specifications according to the selected OS (ex: maximum memory, maximum cpu, maximum number of disks...)
- Ability to filter virtual machines by 'Template'

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Update the display of the cpu memory and the storage of a datacenter
- Update the display of a datastore cluster storage
- Update the display of the cpu memory and storage of a hostCluster

## v1.16.1 — 2020-10-20

### [Console](/console/console)
- Add example image on FAQ about reserved memory on hostcluster

## v1.16 — 2020-10-14

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to mount an existing virtual disk (from its VMDK)
- Ability to unmount a virtual disk without deleting the data on the datastore
- Add the mode, the path and the type of provisioning of a disk
- Ability to configure the mode and type of provisioning of a new disk
- Ability to change the mode of a disk
- Ability to add an existing disk when creating a virtual machine
- Displays a configuration error when a network is invalid or cannot be found on a network adapter
- Ability to move a virtual machine (vMotion)

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add information about the drs configuration of a hostcluster
- Add reserved memory of a hostcluster
- Add the number of ESX and their names on the datastores
- Add the number of ESX and their names on the networks

### [Console](/console/console)
- Add FAQ entry on disk modes
- Add FAQ about reserved memory on hostcluster

## v1.15.1 — 2020-10-01

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Adds a button to reload libraries on the content library view

## v1.15 — 2020-09-28

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add export item from content library to object-storage

## v1.14 — 2020-09-22

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add options on how to create a virtual machine (add disks, controllers and network adapters)
- Update the 'virtual disks' tab to 'devices' tab with the ability to manage controllers
- Add 'Type' field on network adapters for version 6.7
- Disable actions on a virtual machine when the ESX is disconnected

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Tooltip about sla information when assigning sla to a virtual machine

## v1.13 — 2020-09-10

### [Console](/console/console)
- Add FAQ entries about IAM and 'How to clone a virtual machine'

### Inventaire
- Differentiation of elements by shapes on the graphical display of a relation
- Display of the details of an element as a tooltip on the graphical display of a relation

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add the number of virtual machines on hosts and datastores

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to filter virtual machines by hosts
- Refined filter on the recovery of datastores for the creation of a virtual disk

### [Identité & Accès (IAM)](/console/iam/iam)
- Ability to reset your password once logged in

## v1.12 — 2020-09-01

### [Console](/console/console)
- Add FAQ entries on 'Session expiration' and 'How to turn a virtual machine into a template'

### Inventaire
- Ability to move the columns
- Graphical display of relations
- Add conversion on unit columns

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add hardware version of a virtual machine
- Ability to select 'auto-connect' option on network adapters
- Ability to upgrade the hardware version of a virtual machine
- Ability to clone to a new virtual machine from virtual machine actions

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add a sub-menu 'network' listing the virtual switches in the infrastructure section
- Add a view of the networks by virtual switch
- Add the version of the hosts on the cluster view in the infrastructure section

### [Identité & Accès (IAM)](/console/iam/iam)
- Ability to choose the duration of your session from a list of options

## v1.11 — 2020-08-04

### [Console](/console/console)
- Possibility to customize the Dashboard as you wish
- Add a new tab called 'Archives' to the log view
- Add a badge of the number of versions added since the last opening of the update modal

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Ability to delete a 'recovery' job that's in 'standby' status
- Ability to restore a specific vmdk from a backup
- Add an 'Activate date' column to the backup policies
- Add a 'Spp mode' column to the virtual drives
- Ability to switch a drive from 'Instant Access' mode to 'Production' mode

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to deploy a vm-template type from a content library
- Ability to export a virtual machine as a template to a content library

## v1.10.3 — 2020-07-27

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to upload ova, ovf, and iso files to a content library from a public url

## v1.10.1 — 2020-07-27

### [Console](/console/console)
- Add a FAQ entry on 'How to mount an ISO'

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add an "Expiration date" column to the backups of a virtual machine

## v1.10 — 2020-07-23

### [Identité & Accès (IAM)](/console/iam/iam)
- On the 'User' view, add ability to search by email, 'Admin', 'No Roles'

### Inventaire
- Add notification when one or more items have been added since the last refresh

### [Console](/console/console)
- New design for the FAQ

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Display of the number of virtual machines per vcenter

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Optimization of the listing of virtual machines

## v1.9 — 2020-07-20

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a date filter to virtual machine backups

### Inventaire
- Ability to choose the columns to be displayed

### [Object Storage S3](/storage/oss/oss)
- Add validation on the creation of a bucket
- Add the public url of the files in a bucket

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Ability to import a file into a content library from object-storage

## v1.8 — 2020-07-17

### [Console](/console/console)
- Style adjustments across the entire application
- Add choice of the number of lines displayed in a table across the entire application

### Inventaire
- Dynamic display of available inventory views
- Add a button to the infrastructure section of a vcenter that allows you to inventory all the VMs in that vcenter
- Ability to add a new item to an inventory if the inventory is other than the VMs type inventory
- Ability to view items related to a relation
- Improvement on getting an item's relation
- Ability to delete multiple items at once
- Ability to edit multiple items at once
- Edit the editing modal
- Management of the parameters 'Read only', 'Mandatory', 'Unique'... on the different fields

## v1.7.4 — 2020-07-06

### Inventaire
- Pagination and filters system update

## v1.7 — 2020-06-30

### Inventaire
- Setup inventory system

## v1.6 — 2020-06-19

### [Console](/console/console)
- Reorganization of the sidebar
- Lazy loading on the dashboard

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a view of deleted virtual machines that can be restored

### [Object Storage S3](/storage/oss/oss)
- Add a view to see the list of object storage projects
- Add a view to see the list of buckets on a project

## v1.5 — 2020-05-29

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add an additional message when deleting a disk
- Add a search bar to the contents of a library content
- Add a filter to a virtual machine's SPP mode

## v1.4.6 — 2020-05-14

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Bug fixes restoring virtual machine

## v1.4.5 — 2020-05-07

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add the ability to switch a virtual machine from test mode to clone mode

## v1.4.4 — 2020-04-24

### [Console](/console/console)
- Bug fixes

## v1.4.3 — 2020-04-20

### [Console](/console/console)
- Bug fixes

## v1.4.2 — 2020-04-15

### [Console](/console/console)
- Bug fixes

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add a specific deletion for a virtual machine in test mode.

## v1.4.1 — 2020-04-14

### [Console](/console/console)
- Bug fixes

## v1.4 — 2020-04-09

### [Console](/console/console)
- Modules are now displayed according to user rights

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- VM SPP mode is now displayed (test/clone/production)

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add the ability to restore a virtual machine in test mode
- Add the ability to switch a virtual machine from test mode to production mode

## v1.3.11 — 2020-03-27

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add uuid search in the virtual machine view
- Add cores per socket edition

### [Console](/console/console)
- Uniformity of buttons for winding/unwinding unfoldable informations
- Add a tooltip and a question to the FAQ about quiescing
- New look of the feedback button now in the navigation bar
- Add translations
- Add in the FAQ the log retention time

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- New architecture for the infrastructure part

## v1.3.10 — 2020-03-19

### [Identité & Accès (IAM)](/console/iam/iam)
- Add emails to the user list

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add SDRS in the infrastructure part
- Add an infrastructure view for the SDRS.

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add an explicit button to view job logs
- Add activities for all actions concerning backup
- Add the possibility to modify the backup options of a virtual machine (Quiescing)

### [Console](/console/console)
- Update the libraries used for the web interface

## v1.3.9 — 2020-02-28

### [Console](/console/console)
- Add to the FAQ supported browser versions

## v1.3.8 — 2020-02-28

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add an infrastructure view for the Backup module

### [Console](/console/console)
- The connection is now automatically refreshed when a console is opened
- Add selection of a subject when clicking on the Shiva support button
- Add to the FAQ on using the arobase in the console

### [Identité & Accès (IAM)](/console/iam/iam)
- Alphabetical sorting of roles in the user view

## v1.3.7 — 2020-02-21

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add guest operation system filtering by vcenter when creating a new vm

### [Console](/console/console)
- Update dependencies and Docker version

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add a status column on the csv export of backup reports

## v1.3.6 — 2020-02-14

### [Console](/console/console)
- Add a FAQ page about the Backup Module Inventory
- Add a FAQ page about a snapshot error during a backup
- Add a FAQ page on how to connect/disconnect a network card.
- Add a graph to the dashboard with the status of jobs running on a given time range

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add option to sort virtual machines by VLAN
- Add the option to connect/disconnect a network card to a virtual machine in version 6.7
- Add the number of cores per socket on a virtual machine

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Remove the action to execute the policy job from the backup report view and the policy view
- Add the option to cancel a job on the job view
- Add colors to some job session statuses

## v1.3.5 — 2020-01-20

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Add a view to view a vcenter's details
- Adding a view to view a datacenter's details
- Update the color of the maintenance status
- Update the display of the remaining storage capacity instead of that used

## v1.3.4 — 2020-01-06

### [Console](/console/console)
- Integration of the Infrastructure module in the sidebar
- Changing the logo when the sidebar is collapsed
- Add option to filter by vcenter on create or deploy virtual machine or on create library

### [Infrastructure IaaS](/iaas_vmware/iaas_vmware)
- Displaying the list of vcenters in the sidebar
- Displaying a vcenter's datacenter list in the sidebar
- Displaying a datacenter's hostCluster list in the sidebar
- Add a view to consult the consumptions of the datastores of a datacenter
- Add a view to consult the consumptions of a hostCluster
- Add a view to view a hostCluster's consumptions

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Remove buttons allowing to create and delete backup policies

## v1.3.2 — 2019-12-13

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add the column for describing the items of a library
- Add fields to configure the options of an ovf image when deploying a vm
- Add a role to access the Vstack url of a vcenter
- Add Vstacks link, accessible from virtual machines when the user has the appropriate permission

### [Console](/console/console)
- Update of the FAQ
- Add new logo

## v1.3.1 — 2019-12-06

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Add option to create content library
- Add option to delete content library
- Add option to mount ISO on virtual machine
- Add option to unmount ISO on virtual machine
- New display for the deployment of a virtual machine from an ovf

## v1.3 — 2019-11-29

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Added the name of the vcenter of a vm
- Add feature to create an empty virtual machine
- Add view content libraries (vcenter 6.7 only)
- Add feature to upload model on library (vcenter 6.7 only)
- Add feature to deploy model as virtual machine (vcenter 6.7 only)

### [Console](/console/console)
- Update of the FAQ
- Add an anchor to access a particular FAQ, adding these anchors in the url when you click on a question
- Remove use of cookies

### [Identité & Accès (IAM)](/console/iam/iam)
- Add button to refresh list of users

### [Console — Activités](/console/console)
- Add failure reasons on logs

## v1.2.9 — 2019-11-07

### [Identité & Accès (IAM)](/console/iam/iam)
- Display the author's uuid in the logs when it was deleted
- Display a column of user roles on the dedicated page

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Remove the test mode when restoring

## v1.2.7 — 2019-10-24

### [Console](/console/console)
- Translations of FAQ and release notes
- Add IAM question into FAQ
- Add console keyboard operation in the FAQ

### [Identité & Accès (IAM)](/console/iam/iam)
- Add button to delete user
- Add activity support for IAM

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Display status of vmWare tools
- Add option to update the vmWare tools
- Add option to mount or unmount disk image of vmWare tools

## v1.2.6 — 2019-10-15

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Edit CPU and RAM when the virtual machine is turned on
- Edit disk when the virtual machine is turned on
- Update the unit used for datastores

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add logs of a job session

### [Console](/console/console)
- Add FAQ page
- Update render of the dashboard

## v1.2.5 — 2019-10-03

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add the ability to run a job on the backup policies view
- Add the ability to run a job on the report view
- Add the ability to run a job on the job view
- Add the export of backup reports of a policy in pdf format
- Adding the export of backup reports of a policy in csv format
- Add total space and busy datastores during a restore
- Update report render

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Adding the total space of a datastore when adding a disk
- Adding a validation message when stopping a virtual machine
- Ability to change the size of a disk when the virtual machine is turned on

### [Console](/console/console)
- Adding statistics about backup on the dashboard

## v1.2.4 — 2019-09-24

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Updating the backup reports page
- Adding an interval filter on backup reports
- Add a modal when multiple backup reports are in same interval
- Improved data processing for backups reports

### [Console](/console/console)
- Add translations

## v1.2.3 — 2019-09-10

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add the status of a job
- Add a filter by status for jobs
- Add a button to refresh the jobs
- Update the style of backup reports
- Update job render
- Modal updated on the edition of a backup policy

### [Console — Activités](/console/console)
- Add the author of an action in the logs

## v1.2.2 — 2019-09-03

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Add options on the restoration of a vm
- Added the ability to view vm by backup policies

### [Console](/console/console)
- Update of received activities in WebSocket

## v1.2 — 2019-07-10

### [Console](/console/console)
- Integration of Internet Explorer 11 compatibilities

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Adding a filter by datacenter
- Formatting policies in table form
- Open the console in a new page

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Integrate a view for backup reports
- Integrate a view for logs
- Add options on the restoration of a vm
- Edition of the modal on policies

## v1.1 — 2019-05-22

### [Console](/console/console)
- Add button to contact support
- A version informations
- Changing the display on the login redirection

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- Adding a confirmation message on restarting a virtual machine
- RAM reduction is now allowed
- Adding a limit on the number of network adapters on a virtual machine
- Adding a limit on the number of disks on a virtual machine

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- Integration of the module
- Editing the parameters of a backup policy
- Adding backup policy management
- Adding policy assignment on a virtual machine
- Adding policy assignment on a disk
- Adding backups to a virtual machine
- Adding the execution of a backup to a virtual machine

## v1.0 — 2019-02-07

### [Console](/console/console)
- First version

### [IaaS — Machines virtuelles](/iaas_vmware/iaas_vmware)
- First version

### [Sauvegarde](/iaas_vmware/iaas_vmware)
- First version

### [Identité & Accès (IAM)](/console/iam/iam)
- First version

### [Console — Activités](/console/console)
- First version
