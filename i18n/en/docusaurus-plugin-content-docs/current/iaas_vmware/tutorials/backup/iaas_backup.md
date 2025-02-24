---
title: Frequently Asked Questions on Backup
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---

#### How to clone a virtual machine?

There are 2 ways to clone a virtual machine:

- The first option allows you to clone a virtual machine directly from the __'Clone'__ icon of your virtual machine:

![](images/backup_clone_iaas_001.png)
![](images/backup_clone_iaas_002.png)

- The second solution is to clone the virtual machine using __a backup__ of the virtual machine and then using __clone mode restoration__ of a backup.
Go to the __'Backup'__ section of your virtual machine and choose the __'Restore'__ action:

![](images/backup_resto_iaas_001.png)

Then choose the __'Clone'__ restore option:

![](images/backup_clone_iaas_004.png)

#### Why when I go to the "backup policies" page and select a policy, I don't see the same virtual machines as when I go to the "backup reports" and select the same policy?

This means that the missing virtual machines had the said policy assigned to them for a while (explaining their presence in the backup reports) but that is __no longer the case now__.

#### How to add a backup policy to a virtual machine?

Go to the __'Virtual Machines'__ page in the __'IaaS'__ section of the green menu bar on the left side of the screen.

Select a virtual machine then the __'Backup Policies'__ tab of that machine:

![](images/backup_policy_iaas_001.png)

Add the desired backup policy:

![](images/backup_policy_iaas_002.png)

### How to remove a backup policy from a virtual machine?

Go to the __'Virtual Machines'__ page, select a virtual machine then the __'Backup Policies'__ tab of that machine.

Remove the desired backup policy and confirm the removal:

![](images/backup_policy_iaas_003.png)

__*Note:*__ *Caution! __Secnumcloud requires at least one backup policy__ for each virtual machine.*

### How to know if a backup was successfully executed?

There are 2 possible solutions:

1. Go to the __'Jobs'__ page in the __'Backup'__ menu on the green bar on the left of your screen. Choose the job corresponding to the backup and select it.
Then find the *jobsession* corresponding to your backup, select it using the __'Actions'__ menu.

![](images/backup_policy_iaas_006.png)

These actions allow you to get detailed logs of the backup execution. You can search in the backup logs:

![](images/backup_policy_iaas_005.png)

2. Go to the __'Backup Reports'__ page and select the policy you are interested in:

![](images/backup_policy_iaas_004.png)

You can then filter by date, download the report in __PDF__ or __CSV__ format for use in third-party tools.

### How to start a restoration?

Go to the __'Virtual Machines'__ page, select a virtual machine then the __'Backups'__ tab of that machine. To start the restoration, select the backup to restore.

![](images/backup_clone_iaas_003.png)

### What is the quiescing option?

__Quiescing__ is a process of notifying the system to put itself in an appropriate state before the snapshot starts.
By default, __quiescing is enabled__. It can be manually disabled in cases where the system does not handle the snapshot well or if the hypervisor agent is not installed on the virtual machine.

To do this, in the __'Backups'__ section of your virtual machine, click on __'Modify options'__ and disable __quiescing__:

![](images/backup_policy_iaas_007.png)

### What are the restoration options for a virtual machine?

3 main options to restore a VM, either to its original target or to a different target:

- __'CLONE'__: Restores the virtual machine by renaming it, without replacing the original virtual machine.

![](images/backup_restore_iaas_001.png)

- __'PRODUCTION'__: Restores and __replaces__ the production virtual machine (the currently production virtual machine is __destroyed__)

![](images/backup_restore_iaas_003.png)

- __'TEST'__: Restores the production virtual machine __without overwriting__ it.

![](images/backup_restore_iaas_002.png)

### How to restore and replace the production virtual machine without keeping the currently production virtual machine?

Choose the __'Production'__ restoration mode. The option to 'overwrite the virtual machine' is enabled by default.

![](images/backup_restore_iaas_003.png)

### Why is the number of virtual machines different between the backup and compute modules?

The difference in virtual machines may be due to the backup module not retrieving the latest created machines.

To update the backup module, you need to ask the backup software layer to re-inventory the virtual machines.
To do this, in the __'Infrastructure'__ menu on the green bar to the left of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button of the inventory:

![](images/backup_inv_iaas_001.png)

Note that you have the date of the last inventory indicated.

If a virtual machine difference persists, it may be due to virtual machines hosting the backup system. Indeed, these do not count themselves in the number of machines in the backup module.

### How to inventory virtual machines on the backup module?

To launch an inventory of virtual machines on the backup module, in the __'Infrastructure'__ menu on the green bar to the left of the screen, navigate to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button of the inventory:

![](images/backup_inv_iaas_001.png)

Note that you have the date of the last inventory indicated.

### Why does my virtual machine backup fail indicating a snapshot problem?

This error means it's the first time your machine is trying to be backed up.

__During the first backup of a virtual machine, no snapshot must be present on the machine.__

### How to restore and replace the production virtual machine, keeping and renaming the current production virtual machine?

Here is how to proceed:

- Choose the __'CLONE'__ mode (the clone mode causes a change of MAC address and UUID of the virtual machine),
- Rename the restored virtual machine to the final name (of the production VM),
- Rename the old production virtual machine (to _OLD).

### How to restore a virtual machine without replacing the original virtual machine?

Here is how to proceed:

- Choose the __'CLONE'__ mode (the clone mode causes a change of MAC address and UUID of the virtual machine)
- Define the name of the clone (_REST or others)

### Why can't I delete a disk in instant access mode on my virtual machine?

Run the backup inventory: in the __'Infrastructure'__ menu on the green bar to the left of the screen, navigate
to the __'Spectrum Protect Plus'__ submenu and use the __'Action'__ button of the inventory:

![](images/backup_inv_iaas_001.png)

Perform the disk deletion once the inventory is finished. Refresh the virtual machine to verify that the disk has been deleted.

### Why can't I start a virtual machine with a policy in Held status (suspended policy)?

A policy in "Held" status is a feature that temporarily suspends retention and data deletion actions, thereby ensuring that data remains intact and available beyond its standard retention period for specific reasons such as compliance or legal needs.

Suppose a company has a 30-day backup retention policy for certain production data. Due to a legal investigation, they receive a request to preserve all relevant backups for an indefinite period. You have the option to suspend the associated backup policy via the "Held" status to prevent the automatic deletion of these backups after 30 days, ensuring that the data remains available for the investigation's duration.

A suspended backup policy (in Held status) will not execute the scheduled backups assigned to it, so the virtual machine cannot be considered protected, which does not comply with SecNumCloud standards.

Feel free to ask our support team for advice on this subject.