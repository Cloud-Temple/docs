---
title: Questions fréquentes concernant la sauvegarde
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

### Comment cloner une machine virtuelle ?

Il existe une seule façons de cloner une machine virtuelle :f

- Directement depuis l'icône __'Exporter'__ de votre machine virtuelle :

<img src={backupCloneOpenIaas_001} />
<img src={backupCloneOpenIaas_002} />

---

### Comment ajouter une politique de sauvegarde à une machine virtuelle ?

Allez sur la page __'Machines Virtuelles'__ dans la section __'OpenIaaS'__ du bandeau de menu vert sur le côté gauche de l'écran.

Sélectionnez une machine virtuelle puis l'onglet __'Politiques de sauvegardes'__ de cette machine :

<img src={backupPolicyOpenIaas_001} />

Ajoutez la politique de sauvegarde voulue :

<img src={backupPolicyOpenIaas_002} />

---

### Comment supprimer une politique de sauvegarde d'une machine virtuelle ?

Allez sur la page __'Machines Virtuelles'__, sélectionnez une machine virtuelle puis l'onglet __'Politiques de sauvegardes'__ de cette machine.

Supprimez la politique de sauvegarde voulue et confirmez la suppression :

<img src={backupPolicyOpenIaas_003} />

__*Remarque :*__ *Attention ! __Secnumcloud impose qu'il y est au minimum une politique de sauvegarde__ pour chaque machine virtuelle.*

---

### Comment savoir si une sauvegarde s'est bien exécutée ?

Allez sur la page __'Rapports'__ du menu __'Sauvegarde'__ dans le menu de navigation à gauche de votre écran. Choisissez la politique de votre choix et sélectionnez-la.

<img src={backupPolicyOpenIaas_004} />

Une fois une politique sélectionnée, vous avez accès aux sauvegardes triées par __Date de départ__.

<img src={backupPolicyOpenIaas_005} />

Vous avez à votre disposition le détail complet de chaque sauvegarde à partir de l'action __Visualiser__.

<img src={backupPolicyOpenIaas_006} />

---

### Comment lancer une restauration ?

Allez sur la page __'Machines Virtuelles'__, sélectionnez une machine virtuelle puis l'onglet __'Sauvegardes'__ de cette machine. Pour lancer la restauration, sélectionnez la sauvegarde à restaurer.

<img src={backupRestorationOpenIaas_001} />
<img src={backupRestorationOpenIaas_002} />

---