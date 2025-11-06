---
title: Frequently asked questions about backup
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

There is only one way to clone a virtual machine:

- Directly from the __'Export'__ icon of your virtual machine:

<img src={backupCloneOpenIaas_001} />
<img src={backupCloneOpenIaas_002} />

---

### How to add a backup policy to a virtual machine?

Go to the __'Virtual Machines'__ page in the __'OpenIaaS'__ section of the green menu banner on the left side of the screen.

Select a virtual machine then the __'Backup Policies'__ tab of this machine:

<img src={backupPolicyOpenIaas_001} />

Add the desired backup policy:

<img src={backupPolicyOpenIaas_002} />

---

### How to remove a backup policy from a virtual machine?

Go to the __'Virtual Machines'__ page, select a virtual machine then the __'Backup Policies'__ tab of this machine.

Delete the desired backup policy and confirm the deletion:

<img src={backupPolicyOpenIaas_003} />

__*Note:*__ *Warning! __SecNumCloud requires that there is at least one backup policy__ for each virtual machine.*

---

### How to know if a backup has been successfully executed?

Go to the __'Reports'__ page of the __'Backup'__ menu in the navigation menu on the left of your screen. Choose the policy of your choice and select it.

<img src={backupPolicyOpenIaas_004} />

Once a policy is selected, you have access to the backups sorted by __Start Date__.

<img src={backupPolicyOpenIaas_005} />

You have at your disposal the complete detail of each backup from the __View__ action.

<img src={backupPolicyOpenIaas_006} />

---

### How to start a restoration?

Go to the __'Virtual Machines'__ page, select a virtual machine then the __'Backups'__ tab of this machine. To start the restoration, select the backup to restore.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />

---
