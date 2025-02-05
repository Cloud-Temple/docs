---
title: Getting Started Guide
---

## Compute

### Managing Virtual Machines

The management interface for your virtual machines is available in the Shiva console under the __'OpenIaaS'__ menu located on the green banner at the left of the screen.

### List of Virtual Machines

In the __'Virtual Machines'__ section, you have access to the list of your virtual machines hosted on your trusted Cloud.

![](images/open_iaas_virtual_machines_list.png)

You have access to the following information for each virtual machine:

- Its name.
- Its status (powered off, powered on).
- Its availability zone (AZ).
- Its operating system.
- The amount of virtual CPUs (vCPU).
- The amount of virtual memory (vRAM).

### Actions on Virtual Machines

The following actions are possible from this interface:

- Refresh the list of virtual machines.
- Filter the list.
- Search for a virtual machine by its name.
- Create a new virtual machine.

![](images/open_iaas_virtual_machines_list_actions.png)

When you click the green drop-down arrow on the right of the list for a virtual machine, you get access to all the information about it.

![](images/open_iaas_virtual_machine_overview.png)

A quick banner allows the following actions:

![](images/open_iaas_virtual_machine_actions.png)

- Power on the virtual machine.
- Power it off.
- Restart it.
- Open the console.
- Mount an ISO.
- Unmount an ISO.
- Convert the virtual machine into a template.
- Move it.
- Rename it.
- Delete it.

In the '**General**' information tab, you find detailed information related to your virtual machine, such as its physical location (AZ, Pool, Host), RAM, CPU, IP addresses, and others.

![](images/open_iaas_virtual_machine_overview_informations.png)

An '**Advanced**' tab allows you to consult more specific information:

- UUID of the virtual machine
- Guest tools
- Guest OS
- DVD drive

As well as modify certain options such as:
- Boot order
- Secure boot
- Auto start (not possible if no backup policy is associated with the VM)

![](images/open_iaas_virtual_machine_advanced_overview.png)