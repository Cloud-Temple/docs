---
title: Häufig gestellte Fragen zur Sicherung
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

### Wie füge ich eine Sicherungspolitik einer virtuellen Maschine hinzu?

Gehen Sie auf der Seite __'Virtuelle Maschinen'__ im Bereich __'OpenIaaS'__ im grünen Menüband auf der linken Seite des Bildschirms.

Wählen Sie eine virtuelle Maschine aus und wechseln Sie zum Tab __'Sicherungspolitiken'__ dieser Maschine:

<img src={backupPolicyOpenIaas_001} />

Fügen Sie die gewünschte Sicherungspolitik hinzu:

<img src={backupPolicyOpenIaas_002} />

### How to remove a backup policy from a virtual machine?

Go to the __'Virtual Machines'__ page, select a virtual machine, then the __'Backup Policies'__ tab for that machine.

Delete the desired backup policy and confirm the deletion:

<img src={backupPolicyOpenIaas_003} />

__*Note:*__ *Warning! __SecNumCloud requires that at least one backup policy is assigned__ to each virtual machine.*

### How to check whether a backup has been successfully executed?

Go to the __'Reports'__ page in the __'Backup'__ menu in the navigation menu on the left side of your screen. Select the policy of your choice and click on it.

<img src={backupPolicyOpenIaas_004} />

Once a policy is selected, you can view the backups sorted by __Start Date__.

<img src={backupPolicyOpenIaas_005} />

For complete details about each backup, use the __View__ action.

<img src={backupPolicyOpenIaas_006} />

### Wie starte ich eine Wiederherstellung?

Gehen Sie auf die Seite __'Virtuelle Maschinen'__, wählen Sie eine virtuelle Maschine aus und wechseln Sie zum Tab __'Sicherungen'__ dieser Maschine. Um die Wiederherstellung zu starten, wählen Sie die Sicherung aus, die wiederhergestellt werden soll.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />