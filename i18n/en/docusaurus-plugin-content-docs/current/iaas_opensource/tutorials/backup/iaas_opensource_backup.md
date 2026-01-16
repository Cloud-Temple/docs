---
title: Frequently Asked Questions about Backup
tags:
  - iaas_opensource
  - tutorials
  - iaas_opensource_backup
---

import backupCloneOpenIaas_001 from './images/backup_clone_iaas_opensource_001.png'
import backupCloneOpenIaas_002 from './images/backup_clone_iaas_opensource_002.png'
import backupPolicyOpenIaas_001 from './images/backup_policy_iaas_opensource_001.png'
import backupPolicyOpenIaas_002 from './images/backup_policy_iaas_opensource_002.png'
import backupPolicyOpenIaas_003 from './images/backup_policy_iaas_opensource_003.png'
import backupPolicyOpenIaas_004 from './images/backup_policy_iaas_opensource_004.png'
import backupPolicyOpenIaas_005 from './images/backup_policy_iaas_opensource_005.png'
import backupPolicyOpenIaas_006 from './images/backup_policy_iaas_opensource_006.png'
import backupRestorationOpenIaas_001 from './images/backup_restoration_iaas_opensource_001.png'
import backupRestorationOpenIaas_002 from './images/backup_restoration_iaas_opensource_002.png'

---

### How to clone a virtual machine?

You can export a virtual machine by clicking the __'Export'__ icon:

<img src={backupCloneOpenIaas_001} />
<img src={backupCloneOpenIaas_002} />

### How to Add a Backup Policy to a Virtual Machine?

Go to the __'Virtual Machines'__ page in the __'OpenIaaS'__ section of the green sidebar menu on the left side of the screen.

Select a virtual machine, then choose the __'Backup Policies'__ tab for that machine:

<img src={backupPolicyOpenIaas_001} />

Add the desired backup policy:

<img src={backupPolicyOpenIaas_002} />

### How to remove a backup policy from a virtual machine?

Go to the __'Virtual Machines'__ page, select a virtual machine, then navigate to the __'Backup Policies'__ tab for that machine.

Remove the desired backup policy and confirm the deletion:

<img src={backupPolicyOpenIaas_003} />

__*Note:*__ *Warning! __SecNumCloud requires that at least one backup policy be assigned__ to each virtual machine.*

### How to check if a backup has executed successfully?

Go to the __'Reports'__ page in the __'Backup'__ menu from the navigation menu on the left side of your screen. Select the policy of your choice and choose it.

<img src={backupPolicyOpenIaas_004} />

Once a policy is selected, you can access backups sorted by __Start Date__.

<img src={backupPolicyOpenIaas_005} />

You can view the complete details of each backup by using the __View__ action.

<img src={backupPolicyOpenIaas_006} />

### How to initiate a restoration?

Go to the __'Virtual Machines'__ page, select a virtual machine, then the __'Backups'__ tab for that machine. To start the restoration, select the backup you want to restore.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />