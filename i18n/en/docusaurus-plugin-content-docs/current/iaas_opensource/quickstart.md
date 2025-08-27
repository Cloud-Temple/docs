---
title: Getting Started Guide
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationPolicies from './images/open_iaas_replication_policies.png'
import openIaasReplicationPolicyCreate from './images/open_iaas_replication_policy_create.png'
import openIaasReplicationPolicyDetails from './images/open_iaas_replication_policy_details.png'
import openIaasReplicationVmAssociate from './images/open_iaas_replication_vm_associate.png'
import openIaasReplicationVmList from './images/open_iaas_replication_vm_list.png'
import openIaasReplicationReplicas from './images/open_iaas_replication_replicas.png'
import openIaasReplicationStatus from './images/open_iaas_replication_status.png'

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

Virtual machine replication allows you to create and maintain synchronized copies of your VMs across different availability zones, ensuring business continuity and facilitating disaster recovery plan implementation.

### Managing Replication Policies

Replication policies define how and when your virtual machines will be replicated. Access replication management via the __'Replication'__ menu in the OpenIaaS section.

<img src={openIaasReplicationPolicies} />

#### Creating a Replication Policy

To create a new replication policy:

1. Click the __'Create Policy'__ button
2. Fill in the required information:
   - **Policy name**: Choose a descriptive name
   - **Target storage**: Select the storage repository (type `lvmohba`)
   - **Replication interval**: Choose between 1-59 minutes or 1-24 hours
   - **Target availability zone**: Select the destination zone

<img src={openIaasReplicationPolicyCreate} />

#### Policy Details and Management

Once created, you can view policy details including:
- Configuration parameters
- Associated virtual machines
- Replication status and history

<img src={openIaasReplicationPolicyDetails} />

### Associating Virtual Machines

#### Adding VMs to a Policy

To associate a virtual machine with a replication policy:

1. Select the target policy
2. Click __'Associate VM'__
3. Choose the virtual machines to replicate
4. Confirm the association

<img src={openIaasReplicationVmAssociate} />

**Important**: Virtual machines must be located in a different availability zone than the target zone.

#### Managing Associated VMs

View and manage all virtual machines associated with your replication policies:

<img src={openIaasReplicationVmList} />

For each VM, you can:
- View replication status
- Modify associations
- Monitor replication history

### Monitoring Replicas

#### Replica Overview

Access the complete list of your replicas and their status:

<img src={openIaasReplicationReplicas} />

Each replica displays:
- Source virtual machine information
- Target location
- Last replication timestamp
- Current status

#### Replication Status

Monitor the real-time status of all your replications:

<img src={openIaasReplicationStatus} />

The interface provides:
- **Execution history** with detailed timestamps
- **Success/failure status** for each replication
- **Performance metrics** and statistics
- **Alert notifications** for any issues

### Best Practices

- **Plan your intervals**: Choose replication frequency based on your application criticality
- **Monitor storage space**: Ensure sufficient space in target zones
- **Test regularly**: Verify replica integrity periodically
- **Document policies**: Maintain clear documentation of your replication strategy

This replication solution integrates seamlessly with Cloud Temple's SecNumCloud qualified infrastructure, providing maximum security and compliance for your critical data.
