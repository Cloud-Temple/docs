---
title: Getting Started Guide
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'

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