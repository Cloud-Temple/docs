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
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'

## Calculation

### Virtual Machine Management

The interface for managing your virtual machines is available in the Shiva console under the __'OpenIaaS'__ menu, located on the green bar on the left side of the screen.

### List of Virtual Machines

In the __'Virtual Machines'__ section, you have access to the list of your virtual machines hosted on your trusted Cloud.

<img src={openIaasVirtualMachinesList} />

For each virtual machine, you can access the following information:

- Its name.
- Its status (off, on).
- Its availability zone (AZ).
- Its operating system.
- The number of virtual CPUs (vCPU).
- The amount of virtual memory (vRAM).

### Virtual Machine Actions

The following actions are available from this interface:

- Refresh the list of virtual machines.
- Filter the list.
- Search for a virtual machine by name.
- Create a new virtual machine.

<img src={openIaasVirtualMachinesListActions} />

When you click the green dropdown arrow on the right side of the list for a virtual machine, you access all information related to that machine.

<img src={openIaasVirtualMachineOverview} />

A quick action bar allows you to perform the following actions:

<img src={openIaasVirtualMachineActions} />

- Power on the virtual machine.
- Power off the virtual machine.
- Restart the virtual machine.
- Open the console.
- Mount an ISO.
- Unmount an ISO.
- Convert the virtual machine into a template.
- Move the virtual machine.
- Rename the virtual machine.
- Delete the virtual machine.

In the **General** tab, you find detailed information about your virtual machine, such as its physical location (AZ, Pool, Host), RAM, CPU, IP addresses, and other details.

<img src={openIaasVirtualMachineOverviewInformations} />

The **Advanced** tab allows you to view more specific information:

- Virtual machine UUID
- Guest tools
- Guest OS
- DVD drive

As well as modify certain settings such as:

- Boot order
- Secure Boot
- Automatic startup (not possible if no backup policy is associated with the VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Virtual Machine Console

The console of a virtual machine is accessible from the list of virtual machines by clicking the __'Console'__ icon:

<img src={openIaasVmConsoleBtn} />

A new browser tab opens, displaying the console of your machine, based on a VNC client:

<img src={openIaasVmConsoleOpen} />

Within the VNC menu, you can:
- request the transmission of specific key presses,
- force a keyboard mapping (in cases where your virtual machine uses a different keyboard layout than your web browser),
- open a text field that can be sent to the machine. This method replaces the previous non-functional clipboard,
- switch to full-screen mode,
- change the window size (scaling).

#### Keyboard Layout Support

Input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled or not.

Here is a summary of the possible scenarios:

| Physical Machine Keyboard Language (input) | Virtual Machine Keyboard Language | 'Enforce Keyboard' Option Selected | Result (output)        |
|--------------------------------------------|-----------------------------------|------------------------------------|------------------------|
| French                                     | French                            | No                                 | ✅                       |
| French                                     | French                            | Yes                                | Not recommended        |
| French                                     | English                           | No                                 | English                |
| French                                     | English                           | Yes                                | ✅                       |
| English                                    | French                            | No                                 | French                 |
| English                                    | French                            | Yes                                | ✅                       |
| English                                    | English                           | No                                 | ✅                       |
| English                                    | English                           | Yes                                | Not recommended        |

__Note__:
- If certain characters do not appear during manual input, you may try using the clipboard instead.

#### Clipboard Functionality
This feature allows you to send an entire string of characters to your virtual machine. It is important to note that the "enforce keyboard" option affects how this string of characters is transmitted to your virtual machine. If you notice during console input that the "enforce keyboard" option is required, make sure to enable it before using the clipboard.  
This functionality can be used to send a password, a command, or the content of a configuration file, for example:

<img src={openIaasVmConsoleClipboard} />

Upon clicking the "Paste" button, the content of your text field is sent to your virtual machine.

## Replication

### Access to Replication Management

The replication management interface is available in the Shiva console under the __'OpenIaaS'__ > __'Replication'__ menu, located on the green bar on the left side of the screen.

<img src={openIaasReplicationMenu} />

### Creating a Replication Policy

In the __'Replication'__ section, you can create policies defining the protection settings for your virtual machines.

<img src={openIaasReplicationPoliciesView} />

To create a new policy, click the __'Add Policy'__ button. A form opens with the following steps:

#### Step 1: General Information

- __Name__ : Provide an explicit name for your policy
- __Frequency__ : Select the replication interval (1-59 minutes or 1-24 hours)

<img src={openIaasReplicationPolicyForm1} />

#### Step 2: Storage Selection

- __Availability Zone__: Select the destination zone  
- __Pool__: Choose the resource pool  
- __Block Storage__: Select the destination storage  

<img src={openIaasReplicationPolicyForm2} />

#### Step 3: Validation

Verify the settings and click __'Add'__ to create the policy.

### Associating a VM with Replication

To protect a virtual machine, go to the details of your VM from the list of virtual machines.

In the VM's detailed view, you will find a __'Replication'__ section:

<img src={openIaasVmReplicationSection} />

Steps to associate a VM with replication:

1. Click on __'Configure a policy'__
2. Select the desired replication policy from the dropdown list
3. Confirm your selection

Replication will start automatically after confirmation.

### Policy and Replica Management

#### Policies View

The __'Policies'__ tab allows you to view all your replication policies:

<img src={openIaasReplicationPoliciesTable} />

For each policy, you have access to the following information:

- Its name  
- Its replication frequency  
- The destination availability zone  
- The associated pool  
- The block storage used  

Available actions include:

- View details for each policy  
- Modify parameters  
- Delete an unused policy

#### Replica View

The __'Replicas'__ tab displays all virtual machines currently being replicated:

<img src={openIaasReplicationReplicasTable} />

You can view:

- The names of replicated virtual machines  
- Source and target locations  
- Associated replication policy  

Available actions include:

- Export data in CSV format  
- View replication details  
- Manage replicas by policy