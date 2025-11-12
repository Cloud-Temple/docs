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

### Calculation

This term refers to the process of performing mathematical operations such as addition, subtraction, multiplication, division, and more complex calculations involving algebraic expressions, functions, or equations. In a technical context, it often pertains to computations performed by computers or software systems, including algorithms for numerical analysis, data processing, and scientific simulations.

### Management of Virtual Machines

The management interface for your virtual machines is accessible in the Shiva console, under the 'IaaS' menu located on the top left toolbar of the screen.

### List of Virtual Machines

In the 'Virtual Machines' section, you have access to a list of your virtual machines hosted on your trusted Cloud provider.

<img src={shivaVmHome} />

For each virtual machine, you can find:

- Its name,
- The tags assigned to it,
- Its status (powered off, powered on, in use, host disconnected or invalid),
- Its manager (in VMware environments, the associated Vcenter),
- Its operating system,
- The number of virtual CPUs (vCPU),
- The amount of virtual memory (vRAM).

### Actions sur les machines virtuelles

The following actions can be performed from this interface:

- Refresh the list of virtual machines;
- Export the list in CSV format;
- Filter the list;
- Search for a virtual machine by its name;
- Create a new virtual machine.

<img src={shivaVmHomeDesc} />

__A warning banner may appear at the top of the list__: it indicates critical alarms have been triggered on one or more of your virtual machines. The 'View' button allows you to check the affected virtual machines.

<img src={shivaVmHomeAlarme} />

Upon clicking the right-hand dropdown arrow next to a virtual machine:

<img src={shivaVmActions} />

You gain access to all relevant information about that machine:

<img src={shivaVmInformations} />

A quick toolbar enables you to perform the following actions:

<img src={shivaVmBandeauRapide} />

- Power on the virtual machine;
- Power off;
- Restart;
- Modify power settings of the guest OS;
- Open console;
- Mount ISO;
- Dismount ISO;
- Clone the virtual machine;
- Move (vMotion);
- Rename;
- Delete.

A quick view provides a visual representation of:

<img src={shivaVmVueRapide} />

Storage, CPU, and RAM usage of the virtual machine.

In the 'General Information' tab, you find detailed information about your virtual machine, including OS, physical location (datacenter, datastore, etc.), RAM, CPU, IP addresses, logs, and other details. From this view, you can:

- Change the operating system (the machine must be shut down);
- Update hardware firmware (the machine must be shut down);
- Adjust RAM or CPU.

An 'Advanced' tab offers more specific information such as VMware tools details, hardware version, and management software.

<img src={shivaVmInfosAvancees} />

### Editing Virtual Machine RAM or CPU

Navigate to the 'Virtual Machines' tab, view the details of a virtual machine, select the 'General Information' tab, and click on the edit button for the variable you wish to modify:

<img src={shivaEditCpuRam} />

### Disk Modes

You can add different disk modes:

- **Persistent**: Modifications are immediately and definitively written to the virtual disk. This is the recommended mode.
- **Independent Non-persistent**: Modifications made to the virtual disk are recorded in a new log and discarded upon power off. Not affected by snapshots. __Not supported for backup__.
- **Independent Persistent**: Modifications are immediately and definitively written to the virtual disk. Not affected by snapshots. __Not supported for backup__.

### Management of Virtual Machine Disk Controllers

You can change the type of disk controller for your virtual machine.

<img src={shivaVmDiskctrl_001} />

Virtual machines can be equipped with SCSI and NVME controllers, each limited to 4 controllers in total (regardless of type). Each controller can manage up to 15 disks.

SCSI controllers can be configured with various subtypes: Para Virtual, Bus Logic, LSI Logic, or LSI Logic SAS.

Para Virtual controllers stand out due to their extensive capabilities. They can support up to 64 disks when the underlying hardware of the virtual machine is compatible with ESXi version 6.7 or higher.

> **Important**: If you intend to change the type of a Para Virtual controller managing more than 15 disks, you must first detach the disks from the affected slots.

### Virtual Machine Console

The virtual machine console can be accessed from the list of virtual machines by clicking on the 'Console' icon:

<img src={shivaCpool_010} />

A new tab opens in your browser, displaying the console of your virtual machine, based on a **VNC** client:

<img src={shivaCpool_011} />

Within the **VNC** menu, you can:
- Request sending specific keys,
- Force keyboard mapping (in case we cannot correctly identify your keyboard),
- Open a text field that can be transmitted to the machine. This method replaces the old non-functional clipboard,
- Switch to full-screen mode.

__Note__:
Window scaling is automatic.

#### Keyboard Layout Support
Input typed in the console depends on the language of your web browser's keyboard, the virtual machine's keyboard language, and whether the 'enforce keyboard' option on the left side of the screen is enabled or not. Here's a summary of possible scenarios with French language:

| Physical machine keyboard language (input) | Virtual machine keyboard language | 'Enforce keyboard' option selected | Result (output)        |
| ------------------------------------------ | --------------------------------- | ---------------------------------- | ---------------------- |
| French                                     | French                            | No                                 | ✅                     |
| French                                     | French                            | Yes                                | Not recommended        |
| French                                     | English                           | No                                 | English                |
| French                                     | English                           | Yes                                | ✅                     |
| English                                    | French                            | No                                 | French                 |
| English                                    | French                            | Yes                                | ✅                     |
| English                                    | English                           | No                                 | ✅                     |
| English                                    | English                           | Yes                                | Not recommended        |

__Note__:
- If certain characters don't work with manual input, you can try using the clipboard.

#### Clipboard Functionality
This feature allows you to send an entire string of characters to your virtual machine. It's important to note that the "enforce keyboard" key affects how this string of characters is transmitted to your virtual machine. If you notice during console input that the "enforce keyboard" option is necessary, remember to enable it before using the clipboard.  
This feature can be used to send a password, a command, or the contents of a configuration file, for example:

<img src={shivaCpool_012} />

Upon clicking the "Paste" button, the content of your text field is sent to your virtual machine.

### Cloud Temple Virtual Machine Catalogs

Cloud Temple offers you a regularly updated and enriched `Templates` catalog, currently containing several dozens of `Templates` and images to deploy on your virtual machines.

<img src={shivaCatalogs} />

To publish an ISO/OVF, navigate to the 'Catalog' view and click the 'Publish Files' button at the top of the page:

<img src={shivaCatalogs_002} />

You can transform a VM into a template and export it into the catalog. To do this, select a virtual machine and use the 'Clone' action:

<img src={shivaVmTemplate_002} />

Choose 'Export as vm-template':

<img src={shivaVmTemplate_001} />

Fill in the necessary details. You can then deploy a new VM from the template via the 'New Virtual Machine' button or directly from the 'Catalogs' page. It's also possible to export the VM in OVF format.

**Note**: It's possible to convert an OVA file into an OVF and vice versa. The most common method is VMware Converter, but a simpler approach exists using `tar`:

Extracting an OVA file:

```
tar -xvf vmName.ova
```

Creating an OVA file from an OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Advanced Configuration of Virtual Machines: Extra Config

Extra Config offers a flexible way to include key-value pairs in the configuration of a virtual machine. These keys and values are interpreted by the system when the virtual machine is deployed.

Now, you can modify properties of type __Extra Config__ directly within the advanced options of a virtual machine:

<img src={shivaVmAdv_001} />

You can add a property from a list of keys. Additionally, you can modify the value of a key you have already added. Existing key-value pairs are not modifiable.

Please contact support for any requests to add new keys.

<img src={shivaVmAdv_002} />

__Note__: *For GPU utilization by the virtual machine, it is mandatory to enable the 'pciPassthru.use64bitMMIO' key and allocate the necessary MMIO (Memory-mapped I/O) space via 'pciPassthru.64bitMMIOSizeGB'. It is highly recommended to refer to the [official NVIDIA documentation](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Advanced VM Configuration: vAPP

You can also modify the properties of type __vAPP__ in the advanced settings of a virtual machine:

<img src={shivaVmAdv_003} />

You can add, change, or remove these properties. Four types are available: String, Number, Boolean, Password:

<img src={shivaVmAdv_004} />

**Note:** *The virtual machine must be stopped to modify its vAPP properties.*

### Management of __'Hypervisors__ and __'Cpool'__ (Hypervisor Clusters)

The management of your hypervisors is handled within the sub-menu labeled 'Compute' under the 'IaaS' menu, located in the top left navigation bar on your screen.

<img src={shivaCpool_001} />

Within this sub-menu, you have visibility into:

- The hypervisor software stack, their AZ (Availability Zone), and resources,
- The backup software stack.

As of January 2024, the hypervisor offering available on Cloud Temple's qualified infrastructure is based on VMware. The backup software utilized is IBM Spectrum Protect Plus.

### Managing VMware Clusters

To access management of VMware clusters, navigate to the "Compute" submenu under the "IaaS" menu:

By default, the first tab lists all hosts (all clusters consolidated):

<img src={shivaEsx_001} />

You can view detailed information about a host by clicking on its name:

<img src={shivaEsx_002} />

There is one tab per VMware cluster for viewing details of each:

<img src={shivaCpool_003} />

Clicking on a cluster displays a summary of its composition:

- Total processing power expressed in GHz,
- Total memory available and usage ratio,
- Total storage (all types combined) along with utilization rate,
- Automation mechanisms for unavailability of a compute node (__'Vsphere DRS'__),
- Number of virtual machines,
- Number of hosts.

<!-- TODO: Add missing page. -->
<!-- Consulting the cluster's page reveals several tabs. The 'Rules' tab allows you to define affinity/anti-affinity rules for your virtual machines (compute.md#managing-vm-affinity). -->

<img src={shivaCpool_004} />

You'll find details for each host in the 'Hosts' tab:

- CPU and memory usage,
- Number of virtual machines affected,
- Availability of a new OS build for the host (if applicable),
- Host status (production, maintenance, powered off, etc.),
- An action menu.

<img src={shivaCpool_005} />

Various actions are available from the 'Hosts' tab:

- Ordering new hosts via the "Add Host" button:

<img src={shivaCpool_009} />

- Viewing details of a host:

<img src={shivaCpool_007} />

- Entering or exiting maintenance mode for an host,
- Updating (if necessary) the host; this requires the host to be in maintenance mode. There are two types of updates:

 1. VMware hypervisor builds (new versions of the host):

<img src={shivaCpool_008Build} />

 2. Firmware update of your compute node (BIOS and firmware on child cards):

<img src={shivaCpool_008Firm} />

*Note*:

- *Cloud Temple provides VMware hypervisor builds at regular intervals. It's crucial to keep your hosts updated, especially for security patches. However, Cloud Temple does not automatically update your hosts. We do not have visibility into the availability commitments of your workloads.*
- *The update process is fully automated. You need at least two hosts in your cluster to perform an upgrade without service disruption.*

<!-- TODO: Add missing page. -->
<!-- - *You'll also find all affinity/anti-affinity rules for your VMware host cluster in the 'Rules' section.* -->

### Management of Virtual Machine Affinity

__Affinity and anti-affinity rules__ enable control over the placement of virtual machines on your hypervisors. They can be used to manage utilization of your __'Cpool'__. For instance, they can help balance workload distribution across servers or isolate resource-intensive tasks. In a VMware 'Cpool', these rules are frequently employed for managing the behavior of virtual machines with vMotion.

vMotion allows you to move virtual machines from one host to another without service interruption.

You can configure using affinity/anti-affinity rule management:

- __Affinity Rules__ ensure certain virtual machines run on the same physical host. They enhance performance by keeping frequently communicating VMs on the same server, reducing network latency. Affinity rules are beneficial in scenarios where high performance is critical, such as with databases or applications requiring rapid communication between servers.

- __Anti-affinity Rules__ ensure certain virtual machines do not run on the same physical host. They enhance availability and resilience by preventing all critical VMs from being affected if a single server fails. Anti-affinity rules are crucial for applications demanding high availability, like production environments where fault tolerance is paramount. For example, you wouldn't want both your Active Directory instances on the same hypervisor.

When creating a rule, you define its type (affinity/anti-affinity), name, activation status (__'Status'__), and the VMs involved in your cluster of hypervisors.

<img src={shivaCpool_006} />

*Note: The affinity/anti-affinity rules provided in the console pertain to virtual machines among themselves (not between hypervisors and virtual machines).*

## Backup

### Creating a Backup Policy

To establish a new backup policy, you need to submit a request to the support team. The support team can be reached via the anchor icon located at the top right corner of the window.

The creation of a new backup policy involves submitting a **service request** that includes:

    Name of your Organization
    Contact person's email and phone number for finalizing configuration
    Tenant name
    Backup policy name
    Policy characteristics (x days, y weeks, z months, etc.)

<img src={shivaSupport} />

### Assigning a Backup Policy to a Virtual Machine

When an SLA (Service Level Agreement) is assigned to a virtual machine (VM), all associated disks inherit the same SLA. Subsequently, you can manually initiate backup execution via the "Backup Policies" tab. If no manual initiation occurs, the backup will run automatically according to the scheduling defined by the SLA.

SecNumCloud mandates that a backup policy must be assigned to a virtual machine before it starts. Otherwise, you'll receive this notification:

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Click on the "Backup Policies" tab in your VM's menu. Here, you can view the assigned backup policy(ies).

To assign a new backup policy to the virtual machine, click the "Add Policy" button and select the desired policy:

<img src={shivaVmPolitiquesBackup} />

### Assigning a Backup Policy to a Virtual Disk

It's also possible to assign an SLA directly to a specific virtual disk of a machine. In this scenario, the virtual machine does not inherit this SLA applied individually to the disk. However, it's not feasible to manually initiate backup execution at the disk level since Spectrum Protect Plus doesn't support this feature.

Instead, you can exclude certain disks from one or more backup policies (SLA) of a VM, allowing for discretionary SLA assignment on a per-disk basis. This approach provides flexibility in initiating backup execution of an SLA manually without affecting all disks of the virtual machine, thus enabling finer grained backup management.

Click on the Actions bar of the disk you wish to assign a backup policy to. Then, click on __'Policies__' and select the desired backup policy.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Note*: The policy to be added must reside in a different availability zone than the virtual machine.

### Execute a Backup Policy

In the 'Backup Policies' menu of your virtual machine, click on the 'Execute' button in the 'Actions' column of the backup policy you wish to run.

<img src={shivaVmPolitiquesBackupExecute} />

You can also initiate a backup policy execution from the 'Backups' section in your virtual machine's menu. Click on 'Run Backup', then select the desired backup from the dropdown list.

<img src={shivaVmPolitiquesBackupExecute2} />

### Removing a Backup Policy

In the 'Backup Policies' menu of your virtual machine, click on the 'Remove' button in the 'Actions' column of the backup policy you wish to remove.

<img src={shivaVmPolitiquesBackupRetirer} />

**Note:** It is not possible to remove the last Service Level Agreement (SLA) from an active virtual machine:

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Deactivation of a Backup Policy: Case of a Suspended Backup Policy ("held")

When the last resource associated with an SLA policy is disassociated, the system automatically detects this situation. Consequently, all tasks related to this SLA policy transition seamlessly into the "Suspended" ("Held") state. It's crucial to note that at this juncture, directly deleting the SLA policy isn't feasible due to ongoing dependent tasks. To proceed with SLA policy deletion, a series of steps must be followed:

Firstly, confirm that the affected tasks are indeed in the "Suspended" state. Once verified, these tasks can be removed. It's only after these dependent tasks have been eliminated that the SLA policy will be definitively erased from the system.

A specific scenario warrants particular attention: adding a new resource to an SLA policy where dependent tasks haven't been deleted. In this case, task identifiers are retained. However, it's vital to understand that suspended tasks won’t resume automatically. Manual intervention will be required to reactivate and enable their execution.

**Note:** For any clarifications regarding this situation, please contact Cloud Temple Support.

The Cloud Temple console prevents attaching a virtual machine to a suspended policy:

<img src={shivaBackupHeld_001} />

Similarly, initiating a virtual machine associated with a suspended backup policy is prohibited:

<img src={shivaBackupHeld_002} />

### Restoring a Backup

The 'Backups' tab in your virtual machine's menu provides access to the list of backups for that machine. To restore a backup, click on the 'Restore' button next to the backup you wish to restore.

<img src={shivaVmBackupRestaurer} />

1. **Production Mode**: Production mode allows for disaster recovery at your local site from primary storage or a remote disaster recovery site by replacing original machine images with recovery images. All configurations, including names and identifiers, are transferred during the recovery process, along with ongoing data copy tasks associated with the virtual machine. In production restore mode, you can opt to replace the storage in the virtual machine with a virtual disk from a previous backup VM.

2. **Test Mode**: Test mode creates temporary virtual machines for development, testing, instant verification, and disaster recovery planning according to an iterative schedule without affecting production environments. These test VMs run until the testing and verification tasks are complete, after which they are cleaned up. Through isolated networking, you can establish a secure environment for testing your work without interfering with production VM resources. Test VMs in this mode have unique names and identifiers to prevent conflicts within your production environment.

3. **Clone Mode**: Clone mode creates copies of virtual machines for use cases requiring permanent or long-running copies for data exploration or duplicating a test environment on an isolated network. Cloned VMs also have unique names and identifiers to avoid conflicts in your production environment. In clone mode, be mindful of resource consumption as this mode generates persistent or long-term VMs.

**Restoration is set by default to 'TEST' mode to safeguard production**, allowing you to select the name for the restored VM:

<img src={shivaVmBackupTest} />

Keep in mind that if tests are successful, it's possible to transition a virtual machine from test mode to production mode:

<img src={shivaVmBackup_2prod} />
