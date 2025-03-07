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
import shivaCpool_011 from './images/shiva_cpool_011.jpg'
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
import shivaCpool_007 from './images/shiva_cpool_007.jpg'
import shivaCpool_008Build from './images/shiva_cpool_008_build.jpg'
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

### Managing Virtual Machines

The management interface for your virtual machines is available in the Shiva console in the __'IaaS'__ menu located on the green banner on the left side of the screen.

### List of Virtual Machines

In the __'Virtual Machines'__ section, you have access to the list of your virtual machines hosted on your trusted Cloud.

<img src={shivaVmHome} />

You have access to the following information for each virtual machine:
- its name,
- the tags assigned to it,
- its status (off, on, processing, host disconnected, or invalid),
- its manager (in a VMware environment, the associated Vcenter),
- its operating system,
- The amount of virtual CPUs (vCPU),
- The amount of virtual memory (vRAM).

### Actions on Virtual Machines

The following actions are possible from this interface:

- Refresh the list of virtual machines;
- Export the list in CSV format;
- Filter the list;
- Search for a virtual machine by its name;
- Create a new virtual machine.

<img src={shivaVmHomeDesc} />

__An alert banner may be present at the top of the list__: it indicates that critical alarms have been triggered on one or more of your virtual machines.
The __'See'__ button allows you to view the virtual machines concerned by this notification.

<img src={shivaVmHomeAlarme} />

When you click on the green dropdown arrow on the right of the list for a virtual machine:

<img src={shivaVmActions} />

You access all the information concerning it:

<img src={shivaVmInformations} />

A quick banner allows you to perform the following actions:

<img src={shivaVmBandeauRapide} />

- Turn on the virtual machine;
- Turn it off;
- Restart it;
- Change the guest OS power options;
- Open the console;
- Mount an ISO;
- Unmount an ISO;
- Clone the virtual machine;
- Move it (vMotion);
- Rename it;
- Delete it.

A quick view offers a visualization of the virtual machine's __storage__, __CPU__, and __RAM__.

<img src={shivaVmVueRapide} />

In the __'General Information'__ tab, you will find detailed information related to your virtual machine, such as its OS, physical location (datacenter, datastore, etc.), RAM, CPU, IP addresses, logs, and others.

<img src={shivaVmInfosGenerales} />

From this view, you can perform the following actions:

- Change the operating system (the virtual machine must be off),
- Update the hardware version (the virtual machine must be off),
- Modify the RAM or CPU.

An __'Advanced'__ tab allows you to view more specific information such as "VMware tools" info, hardware version, manager, etc.

<img src={shivaVmInfosAvancees} />

### Editing RAM or CPU of a Virtual Machine

Go to the __'Virtual Machines'__ tab, display the details of a virtual machine,
select the __'General Information'__ tab and click on the edit button of the variable to be modified:

<img src={shivaEditCpuRam} />

### Disk Modes

You can add different disk modes:
  - __Persistent__: Changes are immediately and permanently written to the virtual disk. **This is the recommended mode.**
  - __Independent non-persistent__: Changes made to the virtual disk are logged in a new log and deleted upon power off. Not affected by snapshots. **It is not supported by the backup.**
  - __Independent persistent__: Changes are immediately and permanently written to the virtual disk. Not affected by snapshots. **It is not supported by the backup.**

### Managing Virtual Machine Controllers

You can change the type of disk controller for your virtual machine.

<img src={shivaVmDiskctrl_001} />

Virtual machines can be equipped with SCSI and NVME controllers, with a limit of 4 controllers of each type. Each controller can manage up to 15 disks.

A SCSI controller can be configured with different sub-types: Para Virtual, Bus Logic, LSI Logic, or LSI Logic SAS.

The Para Virtual controller stands out for its extended capacity. It can support up to 64 disks when the virtual machine's hardware version is compatible with ESXi version 6.7 or higher.

> **Important**: If you wish to change the type of a Para Virtual controller that has more than 15 disks, you must first detach the disks on the concerned slots.

### Virtual Machine Console

The console of a virtual machine is accessible from the list of virtual machines by clicking on the __'Console'__ icon:

<img src={shivaCpool_010} />

A new tab in your browser will open, displaying your machine's console, based on a VNC client:

<img src={shivaCpool_011} />

It is possible in the VNC menu to:

- request the sending of special keys,
- perform copy/paste from your OS clipboard,
- switch to full-screen mode,
- resize the window (scaling).

Keyboard management, with the virtual machine consoles, works perfectly in an entirely *English* environment.

The input made in the console depends on the keyboard language of your physical machine, the keyboard language of the virtual machine, and whether the 'enforce keyboard' option is enabled on the left side of the screen.
Here is a summary of possible situations with the French language:

| Keyboard language of the physical machine (input) | Keyboard language of the virtual machine  | 'Enforce keyboard' option selected     | Result (output)                                   |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| French                                            | French                                    | No                                     | Not recommended (issue with special characters)    |
| French                                            | French                                    | Yes                                    | < and > do not work                                 |
| French                                            | English                                   | No                                     | Not recommended (issue with special characters)    |
| French                                            | English                                   | Yes                                    | English                                             |

| English                                           | French                                   | No                                     | < et > do not work                                  |
| English                                           | French                                   | Yes                                    | < et > do not work                                  |
| English                                           | English                                  | No                                     | English                                             |
| English                                           | English                                  | Yes                                    | English                                             |

__Note__ :

- If the combination __'AltGr'__ and __'@'__ on the keyboard does not work, activate the __'enforce key'__ button in the __'VNC'__ menu of the console and try again.
- If this still does not work and the physical machine's OS is __Windows, set the physical machine's keyboard to English and try to enter the @ in the usual way__ *(azerty output: AltGr + 0 key or qwerty output: 2 key)*.

### Cloud Temple Virtual Machines Catalogs

Cloud Temple provides you with a catalog of `Templates` that is regularly enriched and updated by our teams. As of today, it includes several dozen `Templates` and images to install on your virtual machines.

<img src={shivaCatalogs} />

To publish an ISO/OVF, go to the __'Catalog'__ view and click on the __'publish files'__ button at the top of the page:

<img src={shivaCatalogs_002} />

It is possible to transform a VM into a model and export it to the catalog. To do this, select a virtual machine and use the __'clone'__ action button:

<img src={shivaVmTemplate_002} />

Select __'Export to vm-template'__:

<img src={shivaVmTemplate_001} />

Then enter the necessary information. It will then be possible to deploy a new VM from the model using the __'New virtual machine'__ button or from the __'Catalogs'__ page. It is also possible to export the VM in OVF format.

**Good to know**: it is possible to convert an OVA file to OVF and vice versa. The most common method used is VMware converter, but there is also a simple method using ```tar```

Extract the ova file:
```
$ tar -xvf vmName.ova
```

Create an OVA file from an OVF file:
```
$ tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Advanced Configuration of Virtual Machines: Extra Config

Extra Config provides a flexible way to include key=value pairs in a virtual machine's configuration. Keys and values are interpreted by the system when the virtual machine is deployed.

Now, you can modify the __Extra Config__ properties in the advanced options of a virtual machine yourself:

<img src={shivaVmAdv_001} />

You can add a property from a list of keys. Moreover, you can modify the value of a key you added yourself. Key=value pairs that already exist cannot be modified.

Please contact support for any request to add new keys.

<img src={shivaVmAdv_002} />

__Note__ : *For GPU usage by the virtual machine, you must enable the 'pciPassthru.use64bitMMIO' key and allocate the required amount of MMIO (Memory-mapped I/O) space via 'pciPassthru.64bitMMIOSizeGB'. It is highly recommended to refer to the [official Nvidia documentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Advanced Configuration of Virtual Machines: vAPP

You can also modify the __vAPP__ properties in the advanced options of a virtual machine:

<img src={shivaVmAdv_003} />

You can add a property, modify it, or delete it. Four types of properties are available: String, Number, Boolean, Password:

<img src={shivaVmAdv_004} />

__Note__ : *The virtual machine must be stopped to modify its vAPP properties.*

### Management of __'hypervisors'__ and __'Cpool'__ (hypervisor clusters)

Management of your hypervisors is done in the __'Compute'__ submenu of the __'IaaS'__ menu, located in the green banner on the left side of your screen.

<img src={shivaCpool_001} />

In this submenu, you have a view of:

- The hypervisor software stack, their AZ, and their resources,
- The backup software stack.

As of January 2024, the available hypervisor offering on the qualified Cloud Temple infrastructure is based on VMware. The backup software used is IBM Spectrum Protect Plus.

### Management of VMware clusters

To access VMware cluster management, click in the __'Compute'__ submenu of the __'IaaS'__ menu:

By default, the first tab lists all hypervisors (across all clusters):

<img src={shivaEsx_001} />

It is possible to view the details of a hypervisor by clicking on its name:

<img src={shivaEsx_002} />

There is a tab for each hypervisor cluster to view the details of each:

<img src={shivaCpool_003} />

If you click on a cluster, you will see a summary of its composition:

- The total computing power expressed in GHz,
- The total available memory and the used ratio,
- The total storage space (all types combined) and the used share,
- The automation mechanisms upon unavailability of a compute blade (__'Vsphere DRS'__),
- The number of virtual machines,
- The number of hypervisors.

<!-- TODO: Add missing page. -->
<!-- By consulting a cluster page, several tabs are available. The __'Rules'__ tab allows you to define [affinity/anti-affinity rules](compute.md#management-of-the-affinity-of-your-virtual-machines) -->

<img src={shivaCpool_004} />

In the __'Hosts'__ tab, you can see for each hypervisor:

- The __CPU__ and __Memory__ usage,
- The number of assigned virtual machines,
- The availability of a new build for the hypervisor's operating system if applicable,
- The hypervisor's status (connected in production, in maintenance, powered off, ...),
- An action menu.

<img src={shivaCpool_005} />

Several actions are possible from the __'Hosts'__ tab:

- Order new hypervisors via the __'Add a host'__ button:

<img src={shivaCpool_009} />

- View the __details of a hypervisor__:

<img src={shivaCpool_007} />

- Enter or exit the maintenance state of a hypervisor,
- __Update__ the hypervisor if necessary; to do so, __it must be in maintenance__. There are two types of updates:

1. VMware builds (new versions of the hypervisor):

<img src={shivaCpool_008Build} />

2. Firmware update for your compute blade (bios and daughter card firmware):

<img src={shivaCpool_008Firm} />

*__Note__* :

- *Cloud Temple provides builds for hypervisors at regular intervals.
It is important to regularly update your hypervisors, especially to apply security patches.
However, __we do not update your hypervisors ourselves__. Cloud Temple does not have visibility on your workload availability commitments.
We therefore let you implement your change management and apply the new builds at the best time.*
- *The update process is fully automated. You must have at least two hypervisors in your cluster to allow for an update without service interruption.*

<!-- TODO: Add missing page. -->
<!-- - *You need to have [adequate permissions](../console/permissions.md) to perform the different actions.* -->

You can also see all the affinity/anti-affinity rules for your hypervisor cluster in the __'Rules'__ section.

### Management of Virtual Machine Affinity

__Affinity and anti-affinity rules__ allow you to control the placement of virtual machines on your hypervisors.
They can be used to manage the resource usage of your __'Cpool'__.
For example, they can help balance the workload across servers or isolate resource-intensive workloads.
In a VMware __'Cpool'__, these rules are often used to manage virtual machine behavior with vMotion.
vMotion allows moving virtual machines from one host to another without service interruption.

You can configure rules management as follows:

- __Affinity rules__: These rules ensure that certain virtual machines run on the same physical host.
They are used to improve performance by keeping virtual machines that frequently communicate with each other on the same server to reduce network latency.
Affinity rules are useful in scenarios where performance is critical, such as databases or applications requiring fast communication between servers.

- __Anti-affinity rules__: Conversely, these rules ensure that certain virtual machines are not run on the same physical host.
They are important for availability and resilience, for example, to prevent critical machines from being affected by a single server failure.
Anti-affinity rules are crucial for applications needing high availability, such as in production environments where fault tolerance is a priority.

Par exemple, vous ne souhaitez pas que vos deux Actives Directory soient sur le même hyperviseur.

Lors de la création d'une règle, vous définissez le type de règle (affinity/anti-affinity), le nom de la règle,
son état d'activation (__'Status'__) et les machines concernées de votre cluster d'hyperviseurs.

<img src={shivaCpool_006} />

*Note: The affinity/anti-affinity rules offered in the console are rules concerning the virtual machines among themselves (no rules between hypervisors and virtual machines).*

## Backup

### Create a backup policy

To add a new backup policy, you need to make a request to support. Support is accessible from the lifebuoy icon at the top right of the window.

Creating a new backup policy is done through __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The name of the backup policy
    The characteristics (x days, y weeks, z months, ...)

<img src={shivaSupport} />

### Assign a backup policy to a virtual machine

When an SLA is assigned to a virtual machine (VM), all disks associated with that VM automatically inherit the same SLA. Subsequently, it is possible to manually start the backup execution through the "Backup policies" tab. If not manually started, the backup will automatically execute according to the schedule configured by the SLA.

SecNumCloud mandates the assignment of a backup policy to a virtual machine before it starts. Otherwise, you will receive the following notification:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Click on the __'Backup policies'__ tab in your virtual machine’s menu. You can view the assigned backup policies there.

To assign a new backup policy to the virtual machine, click on the __'Add a policy'__ button and select the desired backup policy.

<img src={shivaVmPolitiquesBackup} />

### Assign a backup policy to a virtual disk

It is also possible to assign an SLA directly to a specific virtual disk of a machine. In this case, the virtual machine does not inherit this SLA applied individually to the disk. However, it is not possible to manually initiate the backup execution at the disk level, as this feature is not supported in Spectrum Protect Plus.

On the other hand, it is possible to exclude certain disks from one or more VM backup policies (SLA), allowing for the deactivation of one or more SLAs on a disk-by-disk basis. This approach provides the flexibility to manually start the SLA backup without affecting all the disks of the virtual machine, allowing for finer backup management.

Click on the action bar of the disk to which you want to assign a backup policy. Then, click __'Policies'__ and select the desired backup policy.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Note*: The policy to be added must be in a different availability zone from the virtual machine.

### Execute a backup policy

In the __'Backup policies'__ menu of your virtual machine, click the __'Execute'__ button in the __'Actions'__ column of the backup policy you wish to execute.

<img src={shivaVmPolitiquesBackupExecute} />

To execute a backup policy, you can also go to the __'Backups'__ section in your virtual machine’s menu. Click on the __'Execute backup'__ button, then select the backup you wish to execute from the dropdown list.

<img src={shivaVmPolitiquesBackupExecute2} />

### Remove a backup policy

In the __'Backup policies'__ menu of your virtual machine, click the __'Remove'__ button in the __'Actions'__ column of the backup policy you wish to remove.

<img src={shivaVmPolitiquesBackupRetirer} />

__Note that it is not possible to remove the last SLA on a powered-on virtual machine:__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Deletion of a backup policy: case of a suspended backup policy ("held")

When the last resource is dissociated from an SLA policy, the system automatically detects this situation. Consequently, all jobs related to this SLA policy automatically switch to the "Suspended" state ("Held"). It is important to note that at this stage, the direct deletion of the SLA policy is not possible due to the existence of dependent jobs. To proceed with the policy deletion, a series of steps must be followed.

It is necessary to check that the concerned jobs are indeed in the "Suspended" state. Once this verification is completed, these jobs can be deleted. Only after deleting these dependent jobs can the SLA policy be permanently removed from the system.

A particular case requires specific attention: adding a new resource to an SLA policy whose dependent jobs have not been deleted. In this situation, the job identifiers will be retained. However, it is crucial to note that jobs in the "Suspended" state will not resume automatically. A manual intervention will be necessary to reactivate them and allow their execution.

note: For any clarification on this situation, contact Cloud Temple support.

The Cloud Temple console prevents the assignment of a virtual machine to a suspended policy:

<img src={shivaBackupHeld_001} />

Similarly, it is not possible to start a virtual machine associated with a suspended backup policy:

<img src={shivaBackupHeld_002} />

### Restore a backup

The __'Backups'__ tab in your virtual machines menu allows you to access the list of backups for it. To restore a backup, click the __'Restore'__ button on the line corresponding to the backup you wish to restore.

<img src={shivaVmBackupRestaurer} />

1. __Production mode__: Production mode allows for disaster recovery on the local site from primary storage or a remote disaster recovery site by replacing the original machine images with recovery images. All configurations are transferred during the recovery, including names and identifiers, and all data copy jobs associated with the virtual machine continue to run. In the context of a production mode restoration, you can choose to replace the storage in the virtual machine with a virtual disk from a previous virtual machine backup.

2. __Test mode__: Test mode creates temporary virtual machines for development, testing, snapshot verification, and disaster recovery verification according to a repeatable schedule, without impacting production environments. Test machines run as long as needed to perform the test and verification, then they are cleaned up. Through isolated networking, you can establish a safe environment to test your jobs without interfering with the virtual machines used for production. Virtual machines created in test mode have unique names and identifiers to avoid any conflict in your production environment.

3. __Clone mode__: Clone mode creates copies of virtual machines for use cases requiring permanent or long-running copies for data exploration or duplicating a test environment on an isolated network. Virtual machines created in clone mode have unique names and identifiers to avoid any conflict in your production environment. In clone mode, you must be mindful of resource consumption as clone mode creates permanent or long-term machines.

__Restoration is by default in "TEST" mode to preserve production__, and you can choose the name of the restored VM:

<img src={shivaVmBackupTest} />

Note that if the tests are satisfactory, it is possible to switch a virtual machine from test mode to production mode:

<img src={shivaVmBackup_2prod} />