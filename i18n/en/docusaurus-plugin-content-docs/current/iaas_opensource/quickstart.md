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

### Managing Virtual Machines

The interface for managing your virtual machines is available in the Shiva console in the __'OpenIaaS'__ menu located on the green banner to the left of the screen.

### Virtual Machine List

In the __'Virtual Machines'__ section, you have access to the list of your virtual machines hosted on your trusted Cloud.

<img src={openIaasVirtualMachinesList} />

You have access to the following information for each virtual machine:

- Its name.
- Its status (off, on).
- Its availability zone (AZ).
- Its operating system.
- The amount of virtual CPUs (vCPU).
- The amount of virtual memory (vRAM).

### Virtual Machine Actions

The following actions are possible from this interface:

- Refresh the virtual machines list.
- Filter the list.
- Search for a virtual machine by name.
- Create a new virtual machine.

<img src={openIaasVirtualMachinesListActions} />

When you click on the green dropdown arrow on the right side of the list for a virtual machine, you get access to all the information about that machine.

<img src={openIaasVirtualMachineOverview} />

A quick banner allows you to perform the following actions:

<img src={openIaasVirtualMachineActions} />

- Power on the virtual machine.
- Power it off.
- Restart it.
- Open the console.
- Mount an ISO.
- Unmount an ISO.
- Convert the virtual machine to a template.
- Move it.
- Rename it.
- Delete it.

In the '**General**' information tab, you can find detailed information related to your virtual machine, such as its physical location (AZ, Pool, Host), RAM, CPU, IP addresses, and more.

<img src={openIaasVirtualMachineOverviewInformations} />

An '**Advanced**' tab allows you to view more specific information:

- UUID of the virtual machine
- Guest tools
- Guest OS
- DVD drive

As well as modify some options such as:
- Boot order
- Secure boot
- Automatic startup (impossible if no backup policy is associated with the VM)

<img src={openIaasVirtualMachineAdvancedOverview} />