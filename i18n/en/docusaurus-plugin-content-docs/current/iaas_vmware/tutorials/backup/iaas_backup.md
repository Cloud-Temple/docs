---
title: Frequently Asked Questions about Backup
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

- The second solution consists of cloning the virtual machine using __a backup__ of the virtual machine and then using __the clone restore mode__ of a backup.
Go to the __'Backup'__ section of your virtual machine and choose the __'Restore'__ action:

<img src={backupRestoIaas_001} />

Then select the __'Clone'__ restore option:

<img src={backupCloneIaas_004} />

#### Why when I go to the "Backup Policies" page and select a policy, I don't see the same virtual machines as when I go to "Backup Reports" and select the same policy?

This means that the missing virtual machines had the relevant policy assigned for a period of time (explaining their presence in the backup reports) but __this is no longer the case at present__.

#### How to add a backup policy to a virtual machine?

Go to the page __'Virtual Machines'__ in the __'IaaS'__ section of the vertical menu on the left side of the screen.

Select a virtual machine then the __'Backup Policies'__ tab of this machine:

<img src={backupPolicyIaas_001} />

Add the desired backup policy:

<img src={backupPolicyIaas_002} />

### How to remove a backup policy from a virtual machine?

Go to the page __'Virtual Machines'__, select a virtual machine then the __'Backup Policies'__ tab of this machine.

Remove the desired backup policy and confirm the deletion:

<img src={backupPolicyIaas_003} />

__*Note:*__ *Attention! __Secnumcloud requires that there is at least one backup policy__ for each virtual machine.*

### How to know if a backup has been successfully executed?

There are 2 possible solutions:

1. Go to the __'Jobs'__ page of the __'Backup'__ menu in the vertical menu on the left side of your screen. Choose the job corresponding to the backup and select it.
Then find the *jobsession* corresponding to your backup, select it using the __'Actions'__ menu.

<img src={backupPolicyIaas_006} />

These actions allow you to get detailed logs of the backup execution. You can search in the backup logs:

<img src={backupPolicyIaas_005} />

2. Go to the __'Backup Reports'__ page and select the policy that interests you:

<img src={backupPolicyIaas_004} />

You can then filter by date, download the report in __PDF__ or __CSV__ format to use it in third-party tools.

### How to launch a restore?

Go to the page __'Virtual Machines'__, select a virtual machine then the __'Backups'__ tab of this machine. To launch the restore, select the backup to restore.

<img src={backupCloneIaas_003} />

### What is the quiescing option?

Quiescing is a process consisting of notifying the system to put it in an appropriate state before the snapshot begins.
By default, __quiescing is enabled__. It can be manually disabled in cases where the system handles the snapshot poorly or if the hypervisor agent is not installed on the virtual machine.

To do this, in the __'Backups'__ section of your virtual machine, click on __'Modify options'__ and disable quiescing:

<img src={backupPolicyIaas_007} />

### What are the restore options for a virtual machine?

3 main options to restore a VM, on its original target or on a different target:

- __'CLONE'__: Restores the virtual machine by renaming it, without replacing the original virtual machine.

<img src={backupRestoreIaas_001} />

- __'PRODUCTION'__: Restores and __replaces__ the production virtual machine (the currently running virtual machine is __deleted__).

<img src={backupRestoreIaas_003} />

- __'TEST'__: Restores the production virtual machine __without overwriting__ it.

<img src={backupRestoreIaas_002} />

### How to restore and replace the production virtual machine without keeping the currently running virtual machine?

Choose the __'PRODUCTION'__ restore mode. The 'overwrite the virtual machine' option is enabled by default.

<img src={backupRestoreIaas_003} />

### Why is the number of virtual machines different between the backup and compute modules?

The difference in virtual machines may come from the fact that the backup module has not retrieved the latest created machines.

To update the backup module, you need to request the backup software layer to re-inventory the virtual machines.
To do this, in the __'Infrastructure'__ menu of the vertical menu on the left side of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button of the inventory:

<img src={backupInvIaas_001} />

Note that you have the date of the last inventory indicated.

If a difference in virtual machines persists, it may come from the virtual machines hosting the system allowing backups. Indeed, these do not count themselves in the calculation of the number of machines on the backup module.

### How to inventory the virtual machines on the backup module?

To launch an inventory of the virtual machines on the backup module, in the __'Infrastructure'__ menu of the vertical menu on the left side of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button of the inventory:

<img src={backupInvIaas_001} />

Note that you have the date of the last inventory indicated.

### Why does the backup of my virtual machine fail indicating a snapshot problem?

This error means that it is the first time your machine is trying to be backed up.

__During the first backup of a virtual machine, no snapshot should be present on the machine.__

### How to restore and replace the production virtual machine, while keeping and renaming the production virtual machine?

Here's how to proceed:

- Choose the __'CLONE'__ mode (the clone mode causes a change in the virtual machine's MAC address and UUID),
- Rename the restored virtual machine with the final name (of the production VM),
- Rename the old production virtual machine (with _OLD).

### How to restore a virtual machine without replacing the original machine?

Here's how to proceed:

- Choose the __'CLONE'__ mode (the clone mode causes a change in the virtual machine's MAC address and UUID)
- Define the name of the clone (_REST or others)

### Why can't I delete a disk in instant access mode on my virtual machine?

Run the backup inventory: in the __'Infrastructure'__ menu of the vertical menu on the left side of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button of the inventory:

<img src={backupInvIaas_001} />

Perform the disk deletion once the inventory is complete. Refresh the virtual machine to verify that the disk has been removed.

### Why can't I start a virtual machine with a policy in Held status (suspended policy)?

A policy in "Held" status is a feature that allows temporarily suspending retention and data deletion actions, ensuring that data remains intact and available beyond their standard retention period for specific reasons such as compliance or legal needs.

Suppose a company has a 30-day backup retention policy for certain production data. Due to a legal investigation, they receive a request to preserve all relevant backups indefinitely. You can suspend the associated backup policy via the "Held" status to prevent automatic deletion of these backups after 30 days, ensuring the data remains available for the duration of the investigation.
A suspended backup policy (in Held status) will not execute the backups of the assigned schedule, the virtual machine cannot then be considered protected, which does not comply with SecNumCloud standards.

Do not hesitate to ask our support team for advice on this subject.