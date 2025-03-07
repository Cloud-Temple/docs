---
title: Frequently Asked Questions About Backup
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from './images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from './images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from './images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from './images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from './images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from './images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from './images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from './images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from './images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from './images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from './images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from './images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from './images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from './images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from './images/backup_restore_iaas_002.png'
import backupInvIaas_001 from './images/backup_inv_iaas_001.png'

#### How to clone a virtual machine?

There are 2 ways to clone a virtual machine:

- The first option allows you to clone a virtual machine directly from the __'Clone'__ icon of your virtual machine:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- The second solution is to clone the virtual machine using __a backup__ of the virtual machine and then using the __clone mode restore__ from a backup.
Go to the __'Backup'__ section of your virtual machine and choose the __'Restore'__ action:

<img src={backupRestoIaas_001} />

Then choose the __'Clone'__ restore option:

<img src={backupCloneIaas_004} />

#### Why when I go to the "backup policies" page and select a policy, do I not see the same virtual machines as when I go to "backup reports" and select the same policy?

This means that the missing virtual machines had the policy in question assigned to them for some time
(explaining their presence on the backup reports) but __that is no longer the case currently__.

#### How to add a backup policy to a virtual machine?

Go to the __'Virtual Machines'__ page in the __'IaaS'__ section of the green menu bar on the left side of the screen.

Select a virtual machine and then the __'Backup policies'__ tab of that machine:

<img src={backupPolicyIaas_001} />

Add the desired backup policy:

<img src={backupPolicyIaas_002} />

### How to delete a backup policy from a virtual machine?

Go to the __'Virtual Machines'__ page, select a virtual machine, and then the __'Backup policies'__ tab of that machine.

Delete the desired backup policy and confirm the deletion:

<img src={backupPolicyIaas_003} />

__*Note:*__ *Be careful! __Secnumcloud requires that there is at least one backup policy__ for each virtual machine.*

### How to know if a backup was successfully executed?

There are 2 possible solutions:

1. Go to the __'Jobs'__ page of the __'Backup'__ menu in the green bar on the left side of your screen. Choose the job corresponding to the backup and select it.
Then find the *jobsession* corresponding to your backup, select it through the __'Actions'__ menu.

<img src={backupPolicyIaas_006} />

These actions allow you to have detailed logs of the backup execution. You can search in the backup logs:

<img src={backupPolicyIaas_005} />

2. Go to the __'Backup reports'__ page and select the policy you are interested in:

<img src={backupPolicyIaas_004} />

You can then filter by date, download the report in __PDF__ or __CSV__ format to use in third-party tools.

### How to start a restore?

Go to the __'Virtual Machines'__ page, select a virtual machine, and then the __'Backups'__ tab of that machine. To start the restore, select the backup to restore.

<img src={backupCloneIaas_003} />

### What is the quiescing option?

__Quiescing__ is a process of notifying the system to put it in an appropriate state before starting the snapshot.
By default, __quiescing is enabled__. It can be manually disabled if the system poorly manages the snapshot or if the hypervisor agent is not installed on the virtual machine.

To do this, in the __'Backups'__ section of your virtual machine, click on __'Edit options'__ and disable __quiescing__:

<img src={backupPolicyIaas_007} />

### What are the recovery options for a virtual machine?

3 main options to restore a VM, to its initial target or a different target:

- __'CLONE'__: Restores the virtual machine by renaming it, without replacing the original virtual machine.

<img src={backupRestoreIaas_001} />

- __'PRODUCTION'__: Restores and __replaces__ the production virtual machine (the currently running virtual machine is __destroyed__)

<img src={backupRestoreIaas_003} />

- __'TEST'__: Restores the production virtual machine __without overwriting__ it.

<img src={backupRestoreIaas_002} />

### How to restore and replace the production virtual machine, without keeping the currently running virtual machine?

Choose the __'Production'__ restore mode. The 'overwrite the virtual machine' option is the default.

<img src={backupRestoreIaas_003} />

### Why is the number of virtual machines different between the backup and compute modules?

The difference in virtual machines may be because the backup module has not retrieved the latest created machines.

To update the backup module, you need to ask the backup software layer to re-inventory the virtual machines.
To do this, in the __'Infrastructure'__ menu in the green bar on the left side of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button for the inventory:

<img src={backupInvIaas_001} />

Note that the date of the last inventory is indicated.

If a virtual machine discrepancy persists, it may come from the virtual machines hosting the backup system. Indeed, these do not count themselves in the calculation of the number of machines in the backup module.

### How to inventory virtual machines on the backup module?

To launch an inventory of virtual machines on the backup module, in the __'Infrastructure'__ menu in the green bar on the left side of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button for the inventory:

<img src={backupInvIaas_001} />

Note that the date of the last inventory is indicated.

### Why does the backup of my virtual machine fail indicating a snapshot issue?

This error means that it is the first time your machine is trying to be backed up.

__During the first backup of a virtual machine, no snapshot should be present on the machine.__

### How to restore and replace the production virtual machine, while keeping and renaming the currently running virtual machine?

Here's how to proceed:

- Choose the __'CLONE'__ mode (the clone mode changes the MAC address and UUID of the virtual machine),
- Rename the restored virtual machine with the final name (of the production VM),
- Rename the old production virtual machine (to _OLD).

### How to restore a virtual machine, without replacing the original virtual machine?

Here's how to proceed:

- Choose the __'CLONE'__ mode (the clone mode changes the MAC address and UUID of the virtual machine)
- Define the name of the clone (_REST or others)

### Why can't I delete a disk in instant access mode on my virtual machine?

Perform the backup inventory: in the __'Infrastructure'__ menu in the green bar on the left side of the screen, navigate
to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button for the inventory:

<img src={backupInvIaas_001} />

Perform the disk deletion once the inventory is finished. Refresh the virtual machine to confirm that the disk has been deleted.

### Why can't I start a virtual machine with a policy in Held status (suspended policy)?

A policy in "Held" status is a feature that allows temporarily suspending retention and deletion actions of the data, ensuring that the data remain intact and available beyond their standard retention period for specific reasons such as compliance or legal needs.

Suppose a company has a 30-day backup retention policy for some production data. Due to a legal investigation, they receive a request to preserve all relevant backups for an indefinite period. You have the option to suspend the associated backup policy via the "Held" status to prevent the automatic deletion of these backups after 30 days, thus ensuring that the data remain available for the entire duration of the investigation.

A suspended backup policy (in Held status) will not execute backups according to its assigned schedule, meaning the virtual machine cannot be considered protected, which does not comply with SecNumCloud standards.

Feel free to ask our support team for advice on this topic.