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

### Wie klone ich eine virtuelle Maschine?

Sie können eine virtuelle Maschine exportieren, indem Sie auf das Symbol __'Exportieren'__ klicken:

<img src={backupCloneOpenIaas_001} />
<img src={backupCloneOpenIaas_002} />

---

### Wie füge ich einer virtuellen Maschine eine Sicherungsrichtlinie hinzu?

Gehen Sie zur Seite __'Virtuelle Maschinen'__ im Abschnitt __'OpenIaaS'__ des grünen Menübanners auf der linken Seite des Bildschirms.

Wählen Sie eine virtuelle Maschine und dann die Registerkarte __'Sicherungsrichtlinien'__ dieser Maschine aus:

<img src={backupPolicyOpenIaas_001} />

Fügen Sie die gewünschte Sicherungsrichtlinie hinzu:

<img src={backupPolicyOpenIaas_002} />

---

### Wie entferne ich eine Sicherungsrichtlinie von einer virtuellen Maschine?

Gehen Sie zur Seite __'Virtuelle Maschinen'__, wählen Sie eine virtuelle Maschine und dann die Registerkarte __'Sicherungsrichtlinien'__ dieser Maschine aus.

Löschen Sie die gewünschte Sicherungsrichtlinie und bestätigen Sie die Löschung:

<img src={backupPolicyOpenIaas_003} />

__*Hinweis:*__ *Achtung! __SecNumCloud verlangt, dass für jede virtuelle Maschine mindestens eine Backup-Richtlinie zugewiesen ist__.*

---

### Wie kann ich wissen, ob eine Sicherung erfolgreich ausgeführt wurde?

Gehen Sie zur Seite __'Berichte'__ des Menüs __'Sicherung'__ im Navigationsmenü auf der linken Seite Ihres Bildschirms. Wählen Sie die Richtlinie Ihrer Wahl aus und wählen Sie sie aus.

<img src={backupPolicyOpenIaas_004} />

Sobald eine Richtlinie ausgewählt ist, haben Sie Zugriff auf die Sicherungen, sortiert nach __Startdatum__.

<img src={backupPolicyOpenIaas_005} />

Sie haben die vollständigen Details jeder Sicherung über die Aktion __Anzeigen__ zur Verfügung.

<img src={backupPolicyOpenIaas_006} />

---

### Wie starte ich eine Wiederherstellung?

Gehen Sie zur Seite __'Virtuelle Maschinen'__, wählen Sie eine virtuelle Maschine und dann die Registerkarte __'Sicherungen'__ dieser Maschine aus. Um die Wiederherstellung zu starten, wählen Sie die wiederherzustellende Sicherung aus.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />

---
