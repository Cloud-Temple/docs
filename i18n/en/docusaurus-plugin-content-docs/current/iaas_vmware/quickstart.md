---
title: Getting Started Guide
---
import shivaVmHome from './images/shiva_vm_home.png'
import shivaVmHomeDesc from './images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from './images/shiva_vm_home_alarme.png'
import shivaVmActions from './images/shiva_vm_actions.png'
import shivaVmInformations from './images/shiva_vm_informations.png'
import shivaVmBandeauRapide from './images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from './images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from './images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from './images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from './images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from './images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from './images/shiva_cpool_010.png'
import shivaCpool_011 from './images/shiva_cpool_011.png'
import shivaCpool_012 from './images/shiva_cpool_012.png'
import shivaCatalogs from './images/shiva_catalogs.png'
import shivaCatalogs_002 from './images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from './images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from './images/shiva_vm_template_001.png'
import shivaVmAdv_001 from './images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from './images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from './images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from './images/shiva_vm_adv_004.png'
import shivaCpool_001 from './images/shiva_cpool_001.png'
import shivaEsx_001 from './images/shiva_esx_001.png'
import shivaEsx_002 from './images/shiva_esx_002.png'
import shivaCpool_003 from './images/shiva_cpool_003.png'
import shivaCpool_004 from './images/shiva_cpool_004.png'
import shivaCpool_005 from './images/shiva_cpool_005.png'
import shivaCpool_009 from './images/shiva_cpool_009.png'
import shivaCpool_007 from './images/shiva_cpool_007.png'
import shivaCpool_008Build from './images/shiva_cpool_008_build.png'
import shivaCpool_008Firm from './images/shiva_cpool_008_firm.png'
import shivaCpool_006 from './images/shiva_cpool_006.png'
import shivaSupport from '../console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from './images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from './images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from './images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from './images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from './images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from './images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from './images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from './images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from './images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from './images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from './images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from './images/shiva_vm_backup_2prod.png'

## Calculation

### Virtual Machine Management

The interface for managing your virtual machines is available in the Console under the __'IaaS'__ menu located on the green bar on the left side of the screen.

### List of Virtual Machines

In the __'Virtual Machines'__ section, you have access to the list of your virtual machines hosted on your trusted Cloud.

<img src={shivaVmHome} />

For each virtual machine, you can access the following information:

- its name,
- the tags assigned to it,
- its status (off, on, in progress, host disconnected, or invalid),
- its manager (in a VMware environment, the associated vCenter),
- its operating system,
- the number of virtual CPUs (vCPU),
- the amount of virtual memory (vRAM).

### Virtual Machine Actions

The following actions are available from this interface:

- Refresh the list of virtual machines;
- Export the list in CSV format;
- Filter the list;
- Search for a virtual machine by name;
- Create a new virtual machine.

<img src={shivaVmHomeDesc} />

__An alert banner may appear at the top of the list__: it indicates that critical alarms have been triggered on one or more of your virtual machines.  
The __'View'__ button allows you to check the virtual machines affected by this notification.

<img src={shivaVmHomeAlarme} />

When you click the green dropdown arrow on the right side of the list for a virtual machine:

<img src={shivaVmActions} />

You access all information related to that machine:

<img src={shivaVmInformations} />

A quick action bar enables you to perform the following actions:

<img src={shivaVmBandeauRapide} />

- Power on the virtual machine;
- Power off the virtual machine;
- Restart the virtual machine;
- Modify guest OS power settings;
- Open the console;
- Mount an ISO;
- Unmount an ISO;
- Clone the virtual machine;
- Move the virtual machine (vMotion);
- Rename the virtual machine;
- Delete the virtual machine.

A quick view provides a visualization of the virtual machine’s __storage__, __CPU__, and __RAM__.

<img src={shivaVmVueRapide} />

In the __'General Information'__ tab, you find detailed information about your virtual machine, such as its OS, physical location (datacenter, datastore, etc.), RAM, CPU, IP addresses, logs, and more.

<img src={shivaVmInfosGenerales} />

From this view, you can perform the following actions:

- Change the operating system (the virtual machine must be powered off),
- Update the hardware version (the virtual machine must be powered off),
- Modify RAM or CPU settings.

An __'Advanced'__ tab allows you to view more specific information, such as "VMware Tools" details, hardware version, manager, and so on.

<img src={shivaVmInfosAvancees} />

### Editing the RAM or CPU of a virtual machine

Go to the __'Virtual Machines'__ tab, display the details of a virtual machine, select the __'General Info'__ tab, and click the edit button for the variable you want to modify:

<img src={shivaEditCpuRam} />

### Disk Modes

You can add different disk modes:

- __Persistent__: Changes are immediately and permanently written to the virtual disk. __This is the recommended mode.__
- __Non-persistent independent__: Changes made to the virtual disk are recorded in a new log file and deleted upon shutdown. Not affected by snapshots. __Not supported by backup.__
- __Persistent independent__: Changes are immediately and permanently written to the virtual disk. Not affected by snapshots. __Not supported by backup.__

### Virtual Machine Controller Management

You can modify the disk controller type for your virtual machine.

<img src={shivaVmDiskctrl_001} />

Virtual machines can be equipped with SCSI and NVMe controllers, with a limit of 4 controllers of each type. Each controller can manage up to 15 disks.

A SCSI controller can be configured with different subtypes: Para Virtual, Bus Logic, LSI Logic, or LSI Logic SAS.

The Para Virtual controller stands out due to its enhanced capabilities. It can support up to 64 disks when the virtual machine's hardware version is compatible with ESXi 6.7 or later.

> __Important__: If you want to change the type of a Para Virtual controller that has more than 15 disks, you must first detach the disks from the affected slots.

### Virtual Machine Console

The console of a virtual machine is accessible from the list of virtual machines by clicking the __'Console'__ icon:

<img src={shivaCpool_010} />

A new tab opens in your browser, displaying the console of your machine, based on a **VNC** client:

<img src={shivaCpool_011} />

In the **VNC** menu, you can:
- request the transmission of specific keys,
- force a keyboard mapping (in case we were unable to correctly identify your keyboard),
- open a text field that can be sent to the machine. This method replaces the previous non-functional clipboard,
- switch to full-screen mode.

__Note__:
Window scaling is automatic.

#### Keyboard Layout Support

The input entered in the console depends on the keyboard language of your web browser, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option on the left side of the screen is enabled. Below is a summary of the possible scenarios:

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
- If certain characters do not appear during manual input, you may try using the clipboard.

#### Clipboard Functionality
This feature allows you to send an entire string of characters to your virtual machine. It is important to note that the "enforce keyboard" option affects how this string of characters is transmitted to your virtual machine. If you notice during console input that the "enforce keyboard" option is required, make sure to enable it before using the clipboard.  
This functionality can be used to send a password, a command, or the content of a configuration file, for example:

<img src={shivaCpool_012} />

Upon clicking the "Paste" button, the content of your text field is sent to your virtual machine.

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` that is regularly enriched and updated by our teams.  
To date, the catalog includes dozens of `Templates` and images ready to be deployed on your virtual machines.

<img src={shivaCatalogs} />

To publish an ISO/OVF, navigate to the __'Catalogue'__ view and click the __'Publish Files'__ button at the top of the page:

<img src={shivaCatalogs_002} />

You can also convert a virtual machine into a template and export it to the catalog. To do so, select a virtual machine and use the __'Clone'__ action button:

<img src={shivaVmTemplate_002} />

Select __'Export as vm-template'__:

<img src={shivaVmTemplate_001} />

Then fill in the required information. Once completed, you’ll be able to deploy a new VM from the template using the __'New Virtual Machine'__ button or from the __'Catalogues'__ page. It is also possible to export the VM in OVF format.

__Pro tip__: It is possible to convert between OVA and OVF formats.  
The most common method uses VMware Converter, but a simple alternative exists using the ```tar``` command:

Extracting an OVA file:

```
tar -xvf vmName.ova
```

Creating an OVA file from an OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Advanced Virtual Machine Configuration: Extra Config

Extra Config provides a flexible way to include key=value pairs in a virtual machine's configuration. The keys and values are interpreted by the system when the virtual machine is deployed.

You can now directly modify __Extra Config__ properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_001} />

You can add a property from a predefined list of keys. Additionally, you can modify the value of a key you have added yourself. Pre-existing key=value pairs cannot be modified.

Please contact support for any requests to add new keys.

<img src={shivaVmAdv_002} />

__Note__: *To enable GPU usage by the virtual machine, it is mandatory to enable the key 'pciPassthru.use64bitMMIO' and allocate the required MMIO (Memory-mapped I/O) space via 'pciPassthru.64bitMMIOSizeGB'. It is strongly recommended to refer to the [official NVIDIA documentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Advanced Virtual Machine Configuration: vAPP

You can also modify __vAPP__ type properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_003} />

You can add a property, modify an existing one, or remove it. Four property types are available: String, Number, Boolean, and Password:

<img src={shivaVmAdv_004} />

__Note__: *The virtual machine must be stopped to modify its vAPP properties.*

### Management of __'hypervisors'__ and __'Cpool'__ (hypervisor clusters)

Your hypervisor management is performed in the __'Compute'__ submenu under the __'IaaS'__ menu, located in the green bar on the left side of your screen.

<img src={shivaCpool_001} />

In this submenu, you have visibility on:

- The hypervisor software stack, their AZs, and their resources,
- The backup software stack.

As of January 2024, the available hypervisor offering on the Cloud Temple-qualified infrastructure is based on VMware. The backup software used is IBM Spectrum Protect Plus.

### Managing VMware Clusters

To access VMware cluster management, click on the __'Compute'__ submenu under the __'IaaS'__ menu:

By default, the first tab lists all hypervisors (across all clusters):

<img src={shivaEsx_001} />

You can view detailed information about a hypervisor by clicking its name:

<img src={shivaEsx_002} />

There is one tab per hypervisor cluster to review the details of each:

<img src={shivaCpool_003} />

When you click on a cluster, you see a summary of its composition:

- Total computing power expressed in GHz,
- Total available memory and usage ratio,
- Total storage space (all types combined) and percentage used,
- Automation mechanisms for handling compute host failures (__'vSphere DRS'_),
- Number of virtual machines,
- Number of hypervisors.

<!-- TODO: Add missing page. -->
<!-- When viewing a cluster's page, several tabs are available. The __'Rules'_ tab allows you to define [affinity / anti-affinity rules](compute.md#managing-affinity-of-your-virtual-machines) -->

<img src={shivaCpool_004} />

In the __'Hosts'_ tab, you see the following information for each hypervisor:

- CPU and Memory usage,
- Number of assigned virtual machines,
- Availability of a new OS build for the hypervisor, if applicable,
- Hypervisor status (connected in production, in maintenance, powered off, etc.),
- Action menu.

<img src={shivaCpool_005} />

Several actions are available from the __'Hosts'_ tab:

- Request new hypervisors using the __'Add Host'_ button:

<img src={shivaCpool_009} />

- View detailed information about a hypervisor:

<img src={shivaCpool_007} />

- Put a hypervisor into or take it out of __maintenance mode__,
- __Update__ the hypervisor if needed; to do so, __it must be in maintenance mode__. There are two types of updates:

1. VMware builds (new hypervisor versions):

<img src={shivaCpool_008Build} />

2. Firmware update for your compute node (BIOS and daughter card firmware):

<img src={shivaCpool_008Firm} />

*__Note__*:

- Cloud Temple provides hypervisor builds at regular intervals.
It is important to keep your hypervisors regularly updated, especially to apply security patches.
However, __we do not automatically update your hypervisors__. Cloud Temple does not have visibility into your workload availability commitments.
Therefore, we leave it to you to manage your change process and apply new builds at the most appropriate time.
- The update process is fully automated. You must have at least two hypervisors in your cluster to ensure uninterrupted service during updates.

<!-- TODO: Add missing page. -->
<!-- - *You must have the appropriate [permissions](../console/permissions.md) to perform these actions.* -->

You can also view all affinity/anti-affinity rules for your hypervisor cluster in the __'Rules'_ section.

### Managing VM Affinity

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines across your hypervisors.  
They can be used to manage resource utilization within your __'Cpool'__.  
For example, they can help balance workloads across servers or isolate resource-intensive workloads.  
In a VMware __'Cpool'__, these rules are often used to manage the behavior of virtual machines during vMotion.  
vMotion enables moving virtual machines from one host to another without service interruption.

You can configure rules using the following options:

- __Affinity Rules__: These rules ensure that certain virtual machines run on the same physical host.  
  They are used to improve performance by keeping virtual machines that frequently communicate together on the same server, thus reducing network latency. Affinity rules are particularly useful in scenarios where performance is critical, such as databases or applications requiring fast inter-server communication.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines do not run on the same physical host.  
  They are essential for availability and resilience—for example, to prevent all critical machines from being affected in the event of a single server failure. Anti-affinity rules are crucial for high-availability applications, such as in production environments where fault tolerance is a priority.  
  For instance, you would not want both of your Active Directory servers located on the same hypervisor.

When creating a rule, you define the rule type (affinity / anti-affinity), the rule name, its activation status (__'Status'__), and the virtual machines involved within your hypervisor cluster.

<img src={shivaCpool_006} />

*Note: The affinity/anti-affinity rules available in the console are rules between virtual machines (not between hypervisors and virtual machines).*

## Backup

### Create a Backup Policy

To create a new backup policy, you must submit a request to support. Support is accessible via the buoy icon in the top-right corner of the window.

Creating a new backup policy is done through a __service request__ specifying:

    Your Organization's name
    A contact name, email address, and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The retention characteristics (x days, y weeks, z months, ...)

<img src={shivaSupport} />

### Assign a Backup Policy to a Virtual Machine

When an SLA is assigned to a virtual machine (VM), all disks associated with that VM automatically inherit the same SLA. Subsequently, you can manually trigger a backup execution via the **Backup Policies** tab. If no manual launch is performed, the backup will run automatically according to the schedule defined by the SLA.

SecNumCloud requires that a backup policy be assigned to a virtual machine before it is started. Otherwise, you will receive the following notification:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Click on the **Backup Policies** tab in your virtual machine's menu. You can view the backup policy or policies assigned to this VM here.

To assign a new backup policy to the virtual machine, click the **Add Policy** button and select the desired backup policy.

<img src={shivaVmPolitiquesBackup} />

### Assign a backup policy to a virtual disk

It is also possible to assign an SLA directly to a specific virtual disk of a machine. In this case, the virtual machine does not inherit this SLA applied individually to the disk. However, it is not possible to manually trigger backup execution at the disk level, as this functionality is not supported in Spectrum Protect Plus.

On the other hand, it is possible to exclude specific disks from one or more backup policies (SLAs) of the VM, thereby allowing the removal of one or more SLAs on a per-disk basis. This approach provides the flexibility to manually initiate backup execution for a specific SLA without affecting all disks of the virtual machine, enabling more granular backup management.

Click on the action bar of the disk to which you want to assign a backup policy. Then, click on __'Policies'__ and select the desired backup policy.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Note*: The policy to be added must reside in a different availability zone than the virtual machine.

### Run a backup policy

In the __'Backup Policies'__ menu of your virtual machine, click the __'Run'__ button in the __'Actions'__ column for the backup policy you wish to execute.

<img src={shivaVmPolitiquesBackupExecute} />

You can also run a backup policy from the __'Backups'__ section in your virtual machine's menu. Click the __'Run Backup'__ button, then select the backup you want to execute from the dropdown list.

<img src={shivaVmPolitiquesBackupExecute2} />

### Remove a backup policy

In the __'Backup Policies'__ menu of your virtual machine, click the __'Remove'__ button in the __'Actions'__ column for the backup policy you wish to remove.

<img src={shivaVmPolitiquesBackupRetirer} />

__Warning: It is not possible to remove the last SLA on an active virtual machine:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Deleting a backup policy: case of a suspended backup policy ("held")

When the last resource is disassociated from an SLA policy, the system automatically detects this situation. As a result, all jobs associated with this SLA policy are automatically moved to the "Held" ("Suspended") state. It is important to note that direct deletion of the SLA policy is not possible at this stage due to the presence of dependent jobs. To proceed with the deletion of the policy, a specific sequence of steps must be followed.

First, verify that the affected jobs are indeed in the "Held" state. Once confirmed, these jobs can be deleted. Only after removing these dependent jobs can the SLA policy be permanently erased from the system.

A special case requires particular attention: adding a new resource to an SLA policy whose dependent jobs have not yet been deleted. In this scenario, the job identifiers will be preserved. However, it is crucial to note that jobs in the "Held" state will not resume automatically. Manual intervention will be required to reactivate them and allow their execution.

> **Note:** For any clarification regarding this situation, please contact Cloud Temple support.

The Cloud Temple console prevents assigning a virtual machine to a suspended policy:

<img src={shivaBackupHeld_001} />

Similarly, it is not possible to start a virtual machine associated with a suspended backup policy:

<img src={shivaBackupHeld_002} />

### Restore a Backup

The __'Backups'__ tab in your virtual machines menu allows you to access the list of backups for that machine.  
To restore a backup, click the __'Restore'__ button on the row corresponding to the backup you wish to restore.

<img src={shivaVmBackupRestaurer} />

1. __Production Mode__: Production mode enables disaster recovery at the local site using either the primary storage or a remote disaster recovery site, replacing the original machine images with recovery images. All configurations are transferred during recovery, including names and identifiers, and all data copy jobs associated with the virtual machine continue to run. During a production restore, you can choose to replace the virtual machine's storage with a virtual disk from a previous virtual machine backup.

2. __Test Mode__: Test mode creates temporary virtual machines for development, testing, snapshot verification, and disaster recovery validation based on a repeatable schedule, without impacting production environments. Test machines run as long as needed for testing and verification, then are automatically cleaned up. Using isolated networking, you can establish a secure environment to test your work without interfering with production virtual machines. Virtual machines created in test mode have unique names and identifiers to prevent conflicts in your production environment.

3. __Clone Mode__: Clone mode creates permanent or long-running copies of virtual machines for use cases requiring persistent duplicates, such as data exploration or duplicating a test environment on an isolated network. Virtual machines created in clone mode have unique names and identifiers to avoid conflicts in your production environment. In clone mode, be mindful of resource consumption, as this mode creates permanent or long-term virtual machines.

__Restore is set to 'TEST' mode by default to protect production__, and you can choose the name of the restored VM:

<img src={shivaVmBackupTest} />

Note that if testing is successful, you can promote a virtual machine from test mode to production mode:

<img src={shivaVmBackup_2prod} />