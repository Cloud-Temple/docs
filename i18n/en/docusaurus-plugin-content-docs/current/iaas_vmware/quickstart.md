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

## Compute

### Virtual Machine Management

The interface for managing your virtual machines is available in the Shiva console under the __'IaaS'__ menu located on the green bar on the left side of the screen.

### List of Virtual Machines

In the __'Virtual Machines'__ section, you can access the list of your virtual machines hosted on your trusted Cloud.

<img src={shivaVmHome} />

You can access the following information for each virtual machine:

- its name,
- the tags assigned to it,
- its status (off, on, in progress, host disconnected, or invalid),
- its manager (in a VMware environment, the associated Vcenter),
- its operating system,
- the number of virtual CPUs (vCPU),
- the amount of virtual memory (vRAM).

### Actions on Virtual Machines

The following actions are possible from this interface:

- Refresh the list of virtual machines;
- Export the list in CSV format;
- Filter the list;
- Search for a virtual machine by name;
- Create a new virtual machine.

<img src={shivaVmHomeDesc} />

__An alert banner may appear at the top of the list__: it indicates that critical alarms have been triggered on one or more of your virtual machines.
The __'View'__ button allows you to view the virtual machines affected by this notification.

<img src={shivaVmHomeAlarme} />

When you click the green dropdown arrow on the right side of the list for a virtual machine:

<img src={shivaVmActions} />

You access all the information related to that virtual machine:

<img src={shivaVmInformations} />

A quick banner allows you to perform the following actions:

<img src={shivaVmBandeauRapide} />

- Turn on the virtual machine;
- Turn it off;
- Restart it;
- Modify the guest OS power options;
- Open the console;
- Mount an ISO;
- Unmount an ISO;
- Clone the virtual machine;
- Move it (vMotion);
- Rename it;
- Delete it.

A quick view provides a visualization of the __storage__, __CPU__, and __RAM__ of the virtual machine.

<img src={shivaVmVueRapide} />

In the __'General Information'__ tab, you find detailed information related to your virtual machine, such as its OS, physical location (datacenter, datastore, etc.), RAM, CPU, IP addresses, logs, and more.

<img src={shivaVmInfosGenerales} />

From this view, you can perform the following actions:

- Modify the operating system (the virtual machine must be off),
- Update the hardware version (the virtual machine must be off),
- Modify the RAM or CPU.

An __'Advanced'__ tab allows you to view more specific information such as "VMware tools" info, hardware version, manager, etc...

<img src={shivaVmInfosAvancees} />

### Editing RAM or CPU of a Virtual Machine

Go to the __'Virtual Machines'__ tab, display the details of a virtual machine, select the __'General Information'__ tab, and click the edit button for the variable to modify:

<img src={shivaEditCpuRam} />

### Disk Modes

You can add different disk modes:

- __Persistent__: Changes are immediately and permanently written to the virtual disk. __This is the recommended mode.__
- __Non-persistent independent__: Changes made to the virtual disk are recorded in a new log and deleted on shutdown. Not affected by snapshots. __Not supported by backup.__
- __Persistent independent__: Changes are immediately and permanently written to the virtual disk. Not affected by snapshots. __Not supported by backup.__

### Virtual Machine Controller Management

You can modify the type of disk controller for your virtual machine.

<img src={shivaVmDiskctrl_001} />

Virtual machines can be equipped with SCSI and NVME controllers, with a limit of 4 controllers of each type. Each controller can manage up to 15 disks.

A SCSI controller can be configured with different subtypes: Para Virtual, Bus Logic, LSI Logic, or LSI Logic SAS.

The Para Virtual controller stands out for its extended capabilities. It can support up to 64 disks when the virtual machine's hardware version is compatible with ESXi version 6.7 or higher.

> __Important__: If you want to modify the type of a Para Virtual controller that has more than 15 disks, you must first detach the disks from the relevant slots.

### Virtual Machine Console

The virtual machine console is accessible from the list of virtual machines by clicking the __'Console'__ icon:

<img src={shivaCpool_010} />

A new tab in your browser opens and displays your console, based on a VNC client:

<img src={shivaCpool_011} />

In the VNC menu, you can:

- request the sending of specific keys,
- perform copy/paste from your OS clipboard,
- switch to full screen mode,
- change the window size (scaling).

Keyboard management, with the virtual machine console, works perfectly in a fully *English* environment.

The input performed in the console depends on the keyboard language of your physical machine, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option is selected to the left of the screen.
Here is a summary of possible situations with the French language:

| Keyboard language of the physical machine (input) | Keyboard language of the virtual machine | 'Enforce keyboard' option selected | Result (output)                                   |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| French                                            | French                                    | No                                     | Not recommended (issues with special characters)   |
| French                                            | French                                    | Yes                                    | < and > do not work                              |
| French                                            | English                                   | No                                     | Not recommended (issues with special characters)   |
| French                                            | English                                   | Yes                                    | English                                             |
| English                                           | French                                    | No                                     | < and > do not work                      |
| English                                           | French                                    | Yes                                    | < and > do not work                      |
| English                                           | English                                   | No                                     | English                                             |
| English                                           | English                                   | Yes                                    | English                                             |

__Note__ :

- If the combination __'AltGr'__ and __'@'__ on the keyboard does not work, enable the __'enforce key'__ button in the __'VNC'__ menu of the console and try again.
- If this still does not work and the physical machine's OS is __Windows, set the physical machine's keyboard to English
and try entering the @ key in the classic way__ *(azerty layout: AltGr + 0 key or qwerty layout: 2 key)*.

### Cloud Temple Virtual Machine Catalogs

Cloud Temple provides you with a catalog of `Templates` regularly enriched and updated by our teams.
It currently includes several dozen `Templates` and images that can be mounted on your virtual machines.

<img src={shivaCatalogs} />

To publish an ISO/OVF, go to the __'Catalogue'__ view and click the __'publish files'__ button at the top of the page:

<img src={shivaCatalogs_002} />

It is possible to transform a VM into a model and export it to the catalog. To do this, select a virtual machine and use the __'clone'__ action button:

<img src={shivaVmTemplate_002} />

Select __'Export as vm-template'__:

<img src={shivaVmTemplate_001} />

Then fill in the necessary information. It will then be possible to deploy a new VM from the model using the __'New virtual machine'__ button or from the __'Catalogues'__ page. It is also possible to export the VM in OVF format.

__Tip__: It is possible to convert an OVA file to OVF and vice versa.
The most common method used is Vmware converter but there is also a simple method using ```tar```

Extracting the ova file:

```
tar -xvf vmName.ova
```

Creating an OVA from an OVF file:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Advanced Configuration of Virtual Machines: Extra Config

Extra Config provides a flexible way to include key=value pairs in the configuration of a virtual machine. The keys and values are interpreted by the system when the virtual machine is deployed.

Now, you can yourself modify the properties of type __Extra Config__ in the advanced options of a virtual machine:

<img src={shivaVmAdv_001} />

You can add a property from a list of keys. Additionally, you can modify the value of a key that you have added yourself. Existing key=value pairs are not editable.

Please contact support for any request to add new keys.

<img src={shivaVmAdv_002} />

__Note__ : *For the use of GPU by the virtual machine, it is mandatory to enable the key 'pciPassthru.use64bitMMIO' and allocate the necessary MMIO (Memory-mapped I/O) space via 'pciPassthru.64bitMMIOSizeGB'. It is strongly recommended to refer to the [official Nvidia documentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Advanced Configuration of Virtual Machines: vAPP

You can also modify the properties of type __vAPP__ in the advanced options of a virtual machine:

<img src={shivaVmAdv_003} />

You can add, modify, or delete a property. Four types of properties are proposed: String, Number, Boolean, Password:

<img src={shivaVmAdv_004} />

__Note__ : *The virtual machine must be stopped to modify its vAPP properties.*

### Management of __'hypervisors'__ and __'Cpool'__ (hypervisor clusters)

The management of your hypervisors is done in the sub-menu __'Compute'__ of the menu __'IaaS'__, located in the green bar on the left side of your screen.

<img src={shivaCpool_001} />

In this sub-menu, you have a view of:

- The hypervisor software stack, their AZ and their resources,
- The backup software stack.

In January 2024, the available hypervisor offering on the Cloud Temple infrastructure is based on VMware. The backup software used is IBM Spectrum Protect Plus.

### Management of VMware Clusters

To access the management of VMware clusters, click in the sub-menu __'Compute'__ of the menu __'IaaS'__ :

By default, the first tab lists all hypervisors (all clusters combined):

<img src={shivaEsx_001} />

It is possible to view the details of a hypervisor by clicking on its name:

<img src={shivaEsx_002} />

There is a tab per hypervisor cluster to view the details of each:

<img src={shivaCpool_003} />

If you click on a cluster, you see the summary of its composition:

- The total computing power expressed in Ghz,
- The total available memory and the used ratio,
- The total storage space (all types combined) as well as the used percentage,
- The automation mechanisms for unavailability of a compute blade (__'Vsphere DRS'__),
- The number of virtual machines,
- The number of hypervisors.

<!-- TODO: Add missing page. -->
<!-- When consulting a cluster page, several tabs are available. The __'Rules'__ tab allows you to define the [affinity / anti-affinity rules](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) -->

<img src={shivaCpool_004} />

You see for each hypervisor in the __'Hosts'__ tab:

- The usage of __CPU__ and __Memory__,
- The number of virtual machines assigned,
- The availability of a new build for the hypervisor's operating system if applicable,
- The status of the hypervisor (connected in production, in maintenance, off, ...),
- An action menu.

<img src={shivaCpool_005} />

Several actions are possible from the __'Hosts'__ tab:

- order new hypervisors via the __'Add a host'__ button:

<img src={shivaCpool_009} />

- possibility to view the details of a hypervisor:

<img src={shivaCpool_007} />

- to enter or exit the __'maintenance'__ state of a hypervisor,
- to __update__ the hypervisor if applicable; for this, __it must be in maintenance__. There are two types of updates:

1. VMware builds (new versions of the hypervisor):

<img src={shivaCpool_008Build} />

2. The firmware update of your compute blade (bios and daughter card firmware):

<img src={shivaCpool_008Firm} />

*__Note__* :

- *Cloud Temple provides hypervisor builds at regular intervals.
It is important to regularly update your hypervisors, especially to apply security patches.
However, __we do not update your hypervisors ourselves__. Cloud Temple has no visibility on your workload availability commitments.
We therefore leave you to implement your change management and apply the new builds at the best time.*
- *The update process is fully automated. You must have at least two hypervisors in your cluster to allow a service interruption-free update.*

<!-- TODO: Add missing page. -->
<!-- - *It is necessary to have [the appropriate permissions](../console/permissions.md) to perform the different actions.* -->

You also see all the affinity/anti-affinity rules for your hypervisor cluster in the __'Rules'__ section.

### Management of Affinity for Your Virtual Machines

The __affinity and anti-affinity rules__ allow you to control the location of virtual machines on your hypervisors.
They can be used to manage the use of resources in your __'Cpool'__.
For example, they can help balance the workload between servers or isolate resource-intensive workloads.
In a __'Cpool'__ VMware, these rules are often used to manage the behavior of virtual machines with vMotion.
vMotion allows moving virtual machines from one host to another without service interruption.

You can configure through the rule management:

- __Affinity Rules__: These rules ensure that certain virtual machines are executed on the same physical host.
They are used to improve performance by keeping virtual machines that communicate frequently
together on the same server to reduce network latency. Affinity rules are useful in scenarios
where performance is critical, such as in the case of databases or applications that require fast communication between servers.

- __Anti-Affinity Rules__: Conversely, these rules ensure that certain virtual machines are not executed
on the same physical host. They are important for availability and resilience, for example,
to avoid all critical machines being affected in case of a single server failure.
Anti-affinity rules are crucial for applications requiring high availability,
such as in production environments where fault tolerance is a priority.
For example, you do not want your two Active Directories to be on the same hypervisor.

When creating a rule, you define the rule type (affinity / anti-affinity), the rule name, its activation status (__'Status'__), and the machines involved in your hypervisor cluster.

<img src={shivaCpool_006} />

*Note: the affinity/anti-affinity rules proposed in the console are rules concerning virtual machines among themselves (not rules between hypervisors and virtual machines).*

## Backup

### Create a backup policy

To add a new backup policy, you need to submit a request to support. Support is accessible via the buoy icon in the top right corner of the window.

The creation of a new backup policy is performed via a __service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The tenant name
    The backup policy name
    The characteristics (x days, y weeks, z months, ...)

<img src={shivaSupport} />

### Assign a backup policy to a virtual machine

When a SLA is assigned to a virtual machine (VM), all disks associated with this VM automatically inherit the same SLA. Subsequently, it is possible to manually trigger the backup execution via the "Backup Policies" tab. If no manual launch is performed, the backup will automatically execute according to the schedule configured by the SLA.

SecNumCloud makes the assignment of a backup policy to a virtual machine mandatory before its startup. Otherwise, you will receive the following notification:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Click on the __'Backup Policies'__ tab of your virtual machine's menu. You can view the backup policy or policies assigned to it.

To assign a new backup policy to the virtual machine, click the __'Add a policy'__ button and select the desired backup policy.

<img src={shivaVmPolitiquesBackup} />

### Assign a backup policy to a virtual disk

It is also possible to assign a SLA directly to a specific virtual disk of a machine. In this case, the virtual machine does not inherit this SLA applied individually to the disk. However, it is not possible to manually trigger the backup execution at the disk level, as this functionality is not supported in Spectrum Protect Plus.

On the other hand, it is possible to exclude certain disks from one or more backup policies (SLA) of the VM, which allows unassigning one or more SLAs on a per-disk basis. This approach offers the flexibility to manually trigger the backup execution of an SLA without affecting all the disks of the virtual machine, thus enabling more granular backup management.

Click on the action bar of the disk to which you want to assign a backup policy. Then, click on __'Policies'__ and select the desired backup policy.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Note*: The policy to add must be located on a different availability zone than the virtual machine.

### Run a backup policy

In the __'Backup Policies'__ menu of your virtual machine, click the __'Run'__ button in the __'Actions'__ column of the backup policy you want to execute.

<img src={shivaVmPolitiquesBackupExecute} />

To run a backup policy, you can also go to the __'Backups'__ section in your virtual machine's menu. Click the __'Run backup'__ button, then select the backup you want to execute from the dropdown list.

<img src={shivaVmPolitiquesBackupExecute2} />

### Remove a backup policy

In the __'Backup Policies'__ menu of your virtual machine, click the __'Remove'__ button in the __'Actions'__ column of the backup policy you want to remove.

<img src={shivaVmPolitiquesBackupRetirer} />

__Warning, it is not possible to remove the last SLA on an active virtual machine:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Deletion of a backup policy: case of a suspended policy ("held")

When the last resource is dissociated from an SLA policy, the system automatically detects this situation. As a result, all tasks related to this SLA policy automatically switch to the "Held" state. It is important to note that at this stage, direct deletion of the SLA policy is not possible due to the existence of dependent tasks. A series of steps must be followed to proceed with the deletion of the policy.

You must verify that the relevant tasks are indeed in the "Held" state. Once this verification is complete, these tasks can be deleted. Only after deleting these dependent tasks can the SLA policy be permanently removed from the system.

A specific case requires particular attention: adding a new resource to an SLA policy whose dependent tasks have not been deleted. In this situation, the task identifiers will be retained. However, it is crucial to note that tasks in the "Held" state will not automatically resume. Manual intervention will be necessary to reactivate them and allow their execution.

note: For any clarification on this situation, contact Cloud Temple support.

The Cloud Temple console prevents assigning a virtual machine to a held policy:

<img src={shivaBackupHeld_001} />

Similarly, it is not possible to start a virtual machine that is associated with a held backup policy:

<img src={shivaBackupHeld_002} />

### Restore a backup

The __'Backups'__ tab of your virtual machine's menu allows you to access the list of backups for that machine.
To restore a backup, click the __'Restore'__ button on the line corresponding to the backup you want to restore.

<img src={shivaVmBackupRestaurer} />

1. __Production mode__: Production mode enables recovery from an incident on the local site from the primary storage or a remote disaster recovery site, replacing the original machine images with the recovery images. All configurations are transferred as part of the recovery, including names and identifiers, and all data copy tasks associated with the virtual machine continue to run. During a production restore, you can choose to replace the storage in the virtual machine with a virtual disk from a previous virtual machine backup.

2. __Test mode__: Test mode creates temporary virtual machines for development, testing, snapshot verification, and disaster recovery verification according to a repeatable schedule, without impacting production environments. Test machines can run as long as needed for testing and verification, then they are cleaned up. Through isolated networking, you can establish a secure environment to test your tasks without interfering with the virtual machines used for production. Virtual machines created in test mode have unique names and identifiers to avoid conflicts in your production environment.

3. __Clone mode__: Clone mode creates copies of virtual machines for use cases requiring permanent or long-running copies for data exploration or duplication of a test environment on an isolated network. Virtual machines created in clone mode have unique names and identifiers to avoid conflicts in your production environment. In clone mode, you must be mindful of resource consumption as clone mode creates permanent or long-term machines.

__Restoration is default in "TEST" mode to protect production__ and you can choose the name of the restored VM:

<img src={shivaVmBackupTest} />

Note that if the tests are successful, it is possible to move a virtual machine from test mode to production mode:

<img src={shivaVmBackup_2prod} />