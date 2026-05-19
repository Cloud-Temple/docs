---
title: Frequently Asked Questions about Backup
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---
import backupCloneIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_001.png'
import backupCloneIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_002.png'
import backupRestoIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_resto_iaas_001.png'
import backupCloneIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_004.png'
import backupPolicyIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_001.png'
import backupPolicyIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_002.png'
import backupPolicyIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_003.png'
import backupPolicyIaas_006 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_006.png'
import backupPolicyIaas_005 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_005.png'
import backupPolicyIaas_004 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_004.png'
import backupCloneIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_clone_iaas_003.png'
import backupPolicyIaas_007 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_policy_iaas_007.png'
import backupRestoreIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_001.png'
import backupRestoreIaas_003 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_003.png'
import backupRestoreIaas_002 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_restore_iaas_002.png'
import backupInvIaas_001 from '@site/docs/iaas_vmware/tutorials/backup/images/backup_inv_iaas_001.png'

#### How to clone a virtual machine?

There are 2 ways to clone a virtual machine:

- The first option allows you to clone a virtual machine directly from the __'Clone'__ icon of your virtual machine:

<img src={backupCloneIaas_001} />
<img src={backupCloneIaas_002} />

- The second method involves cloning the virtual machine by using __a backup__ of the virtual machine, then using __restore in clone mode__ on a backup.
Navigate to the __'Backup'__ section of your virtual machine and select the __'Restore'__ action:

<img src={backupRestoIaas_001} />

Then select the __'Clone'__ restore option:

<img src={backupCloneIaas_004} />

#### Why, when I go to the "backup policies" page and select a policy, do I not see the same virtual machines as when I go to "backup reports" and select the same policy?

This means that the missing virtual machines had the policy in question assigned to them for a period of time (explaining their presence in the backup reports) but that __this is no longer the case currently__.

#### How to add a backup policy to a virtual machine?

Navigate to the __'Virtual Machines'__ page in the __'IaaS'__ section of the green menu bar on the left side of the screen.

Select a virtual machine and then the __'Backup Policies'__ tab for that machine:

<img src={backupPolicyIaas_001} />

Add the desired backup policy:

<img src={backupPolicyIaas_002} />

### How to delete a backup policy from a virtual machine?

Go to the __'Virtual Machines'__ page, select a virtual machine, and then the __'Backup Policies'__ tab for that machine.

Delete the desired backup policy and confirm the deletion:

<img src={backupPolicyIaas_003} />

__*Note:*__ *Caution! __Secnumcloud requires at least one backup policy__ for each virtual machine.*

### How to verify if a backup was executed successfully?

There are 2 possible solutions:

1. Go to the __'Jobs'__ page under the __'Backup'__ menu in the green banner on the left side of your screen. Choose the job corresponding to the backup and select it.
Then, find the *job session* corresponding to your backup, and select it using the __'Actions'__ menu.

<img src={backupPolicyIaas_006} />

These actions allow you to view the detailed logs of the backup execution. You can search within the backup logs:

<img src={backupPolicyIaas_005} />

1. Go to the __'Backup Reports'__ page and select the policy you are interested in:

<img src={backupPolicyIaas_004} />

You can then filter by date, download the report in __PDF__ or __CSV__ format to process it in third-party tools.

### How to perform a restore?

Navigate to the __'Virtual Machines'__ page, select a virtual machine, then the __'Backups'__ tab for that machine. To start the restore, select the backup to restore.

<img src={backupCloneIaas_003} />

### What is the quiescing option?

__quiescing__ is a process that prepares the system to enter an appropriate state before the snapshot begins.
By default, __quiescing is enabled__. It can be manually disabled if the system handles the snapshot poorly or if the hypervisor agent is not installed on the virtual machine.

To do this, in the __'Backups'__ section of your virtual machine, click __'Edit options'__ and disable __quiescing__ :

<img src={backupPolicyIaas_007} />

### What are the restoration options for a virtual machine?

3 main options to restore a VM, either to its original target or to a different target:

- __'CLONE'__ : Restores the virtual machine by renaming it, without replacing the original virtual machine.

<img src={backupRestoreIaas_001} />

- __'PRODUCTION'__ : Restores and __replaces__ the production virtual machine (the currently running production virtual machine is __destroyed__)

<img src={backupRestoreIaas_003} />

- __'TEST'__ : Restores the production virtual machine __without overwriting it__. 

<img src={backupRestoreIaas_002} />

### How to restore and replace the production virtual machine, without keeping the currently running production virtual machine?

Select the __'Production'__ restore mode. The 'overwrite virtual machine' option is selected by default.

<img src={backupRestoreIaas_003} />

### Why is the number of virtual machines different between the backup and compute modules?

The difference in the number of virtual machines may be due to the backup module not having discovered the most recently created machines.

To update the backup module, you must request the backup software layer to re-inventory the virtual machines.
To do this, in the __'Infrastructure'__ menu of the green banner on the left side of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button for the inventory:

<img src={backupInvIaas_001} />

Note that the date of the last inventory is displayed.

If a virtual machine discrepancy persists, it may be due to the virtual machines hosting the backup system.
Indeed, they do not count themselves toward the machine count on the backup module.

### How to inventory virtual machines on the backup module?

To launch an inventory of virtual machines on the backup module, in the __'Infrastructure'__ menu of the green banner on the left side of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button for the inventory:

<img src={backupInvIaas_001} />

Note that the date of the last inventory is displayed.

### Why does my virtual machine backup fail with a snapshot issue?

This error indicates that this is the first time your machine is attempting to be backed up.

__When performing the first backup of a virtual machine, no snapshots should be present on the machine.__

### How to restore and replace the production virtual machine, while retaining and renaming the original production virtual machine?

Here is how to proceed:

- Select the __'CLONE'__ mode (clone mode changes the virtual machine's MAC address and UUID),
- Rename the restored virtual machine with its final name (the production VM name),
- Rename the old production virtual machine (to _OLD).

### How to restore a virtual machine without replacing the original virtual machine?

Here is how to proceed:

- Select the __'CLONE'__ mode (clone mode changes the virtual machine's MAC address and UUID)
- Set the clone name (_REST or other)

### Why can't I delete a disk in instant access mode on my virtual machine?

Run the backup inventory: in the __'Infrastructure'__ menu of the green banner on the left side of the screen, navigate
to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button of the inventory:

<img src={backupInvIaas_001} />

Perform the disk deletion once the inventory is complete. Refresh the virtual machine to verify that the disk has been successfully deleted.

### Why can't I start a virtual machine with a policy in Held status (suspended policy)?

A policy in "Held" status is a feature that allows temporarily suspending data retention and deletion actions, ensuring that data remains intact and available beyond its standard retention period for specific reasons such as compliance or legal requirements.

Assume a company has a 30-day backup retention policy for certain production data. Due to a legal investigation, they receive a request to preserve all relevant backups for an indefinite period. You have the option to suspend the associated backup policy via the "Held" status to prevent the automatic deletion of these backups after 30 days, ensuring that the data remains available throughout the duration of the investigation.

A suspended backup policy (in Held status) will not execute the backups from its assigned schedule, meaning the virtual machine can no longer be considered protected, which does not comply with SecNumCloud standards.

Do not hesitate to ask our support team for advice on this matter.