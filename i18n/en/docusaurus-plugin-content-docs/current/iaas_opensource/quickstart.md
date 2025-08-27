---
title: Getting Started Guide
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'

## Compute

### Virtual Machine Management

The management interface for your virtual machines is available in the Shiva console under the __'OpenIaaS'__ menu located on the green bar on the left side of the screen.

### List of Virtual Machines

In the __'Virtual Machines'__ section, you have access to the list of your virtual machines hosted on your trusted Cloud.

<img src={openIaasVirtualMachinesList} />

You have access to the following information for each virtual machine:

- Its name.
- Its status (off, on).
- Its availability zone (AZ).
- Its operating system.
- The number of virtual CPUs (vCPU).
- The amount of virtual memory (vRAM).

### Actions on Virtual Machines

The following actions are possible from this interface:

- Refresh the list of virtual machines.
- Filter the list.
- Search for a virtual machine by its name.
- Create a new virtual machine.

<img src={openIaasVirtualMachinesListActions} />

When you click on the green dropdown arrow on the right side of the list for a virtual machine, you access all the information related to it.

<img src={openIaasVirtualMachineOverview} />

A quick bar allows you to perform the following actions:

<img src={openIaasVirtualMachineActions} />

- Power on the virtual machine.
- Shut it down.
- Restart it.
- Open the console.
- Mount an ISO.
- Unmount an ISO.
- Convert the virtual machine into a template.
- Move it.
- Rename it.
- Delete it.

In the '__General__' information tab, you find detailed information related to your virtual machine, such as its physical location (AZ, Pool, Host), RAM, CPU, IP addresses, and others.

<img src={openIaasVirtualMachineOverviewInformations} />

An '__Advanced__' tab allows you to view more specific information:

- Virtual Machine UUID
- Guest tools
- Guest OS
- DVD drive

As well as modify certain options such as:

- Boot order
- Secure boot
- Automatic startup (not possible if no backup policy is associated with the VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

## Replication

### Accessing Replication Management

The replication management interface is available in the Shiva console under the __'OpenIaaS'__ > __'Replication'__ menu located on the green bar on the left side of the screen.

<img src={openIaasReplicationMenu} />

### Creating a Replication Policy

In the __'Replication'__ section, you can create policies that define the protection parameters for your virtual machines.

<img src={openIaasReplicationPoliciesView} />

To create a new policy, click the __'Add Policy'__ button. A form opens with the following steps:

#### Step 1: General Information

- __Name__: Give an explicit name to your policy
- __Frequency__: Choose the replication interval (1-59 minutes or 1-24 hours)

<img src={openIaasReplicationPolicyForm1} />

#### Step 2: Storage Selection

- __Availability Zone__: Select the destination zone
- __Pool__: Choose the resource pool
- __Block Storage__: Select the destination storage

<img src={openIaasReplicationPolicyForm2} />

#### Step 3: Validation

Review the parameters and click __'Add'__ to create the policy.

### Associating a VM with Replication

To protect a virtual machine, access your VM details from the virtual machines list.

In the detailed VM view, you will find a __'Replication'__ section:

<img src={openIaasVmReplicationSection} />

Steps to associate a VM with replication:

1. Click __'Configure a policy'__
2. Select the desired replication policy from the dropdown list
3. Validate your choice

Replication starts automatically after validation.

### Managing Policies and Replicas

#### Policy View

The __'Policies'__ tab allows you to view all your replication policies:

<img src={openIaasReplicationPoliciesTable} />

You have access to the following information for each policy:

- Its name
- Its replication frequency
- The destination availability zone
- The associated pool
- The block storage used

Available actions include:

- View details of each policy
- Modify parameters
- Delete an unused policy

#### Replica View

The __'Replicas'__ tab displays all virtual machines currently being replicated:

<img src={openIaasReplicationReplicasTable} />

You can view:

- The name of replicated virtual machines
- Source and target location
- The associated replication policy

Available actions include:

- Export data in CSV format
- View replication details
- Manage replicas by policy
