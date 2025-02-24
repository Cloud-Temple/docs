---
title: Questions fréquentes concernant la sauvegarde
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---

#### Comment cloner une machine virtuelle ?

Il existe 2 façons de cloner une machine virtuelle :

- La première option permet de cloner une machine virtuelle directement depuis l'icône __'Clone'__ de votre machine virtuelle :

![](images/backup_clone_iaas_001.png)
![](images/backup_clone_iaas_002.png)

- La seconde solution consiste à cloner la machine virtuelle en utilisant __une sauvegarde__ de la machine virtuelle puis en utilisant __la restauration en mode clone__ d'une sauvegarde.
Aller dans la partie __'Sauvegarde'__ de votre machine virtuelle et choisissez l'action __'Restaurer'__ :

![](images/backup_resto_iaas_001.png)

Choisissez ensuite l'option __'Clone'__ de restauration :

![](images/backup_clone_iaas_004.png)

#### Pourquoi lorsque je vais sur la page "politiques de sauvegarde" et que je sélectionne une politique, je ne vois pas les mêmes machines virtuelles que lorsque je vais sur "rapport de sauvegardes" et que je sélectionne la même politique ?

Cela signifie que les machines virtuelles manquantes ont eu la politique en question qui leur a été affectée pendant
un temps (expliquant leur présence sur les rapports de sauvegardes) mais que __ce n'est plus le cas à l'heure actuelle__.

#### Comment ajouter une politique de sauvegarde à une machine virtuelle ?

Allez sur la page __'Machines Virtuelles'__ dans la section __'IaaS'__ du bandeau de menu vert sur le côté gauche de l'écran.

Sélectionnez une machine virtuelle puis l'onglet __'Politiques de sauvegardes'__ de cette machine :

![](images/backup_policy_iaas_001.png)

Ajoutez la politique de sauvegarde voulue :

![](images/backup_policy_iaas_002.png)

### Comment supprimer une politique de sauvegarde d'une machine virtuelle ?

Allez sur la page __'Machines Virtuelles'__, sélectionnez une machine virtuelle puis l'onglet __'Politiques de sauvegardes'__ de cette machine.

Supprimez la politique de sauvegarde voulue et confirmez la suppression :

![](images/backup_policy_iaas_003.png)

__*Remarque :*__ *Attention ! __Secnumcloud impose qu'il y est au minimum une politique de sauvegarde__ pour chaque machine virtuelle.*

### Comment savoir si une sauvegarde s'est bien exécutée ?

Il y a 2 solutions possibles :

1. Allez sur la page __'Jobs'__ du menu __'Sauvegarde'__ dans le bandeau vert à gauche de votre écran. Choisissez le job correspondant à la sauvegarde et sélectionnez-le.
Ensuite, retrouvez le *jobsession* correspondant à votre sauvegarde, sélectionnez-le grâce au menu __'Actions'__.

![](images/backup_policy_iaas_006.png)

Ces actions permettent d'avoir les logs détaillés de l'exécution de la sauvegarde. Vous pouvez rechercher dans les journaux de sauvegarde :

![](images/backup_policy_iaas_005.png)

2. Allez sur la page __'Rapports de sauvegarde'__ et sélectionnez la politique qui vous intéresse :

![](images/backup_policy_iaas_004.png)

Vous pouvez alors filtrer sur une date, télécharger le rapport au format __PDF__ ou __CSV__ pour l'exploiter dans des outils tiers.

### Comment lancer une restauration ?

Allez sur la page __'Machines Virtuelles'__, sélectionnez une machine virtuelle puis l'onglet __'Sauvegardes'__ de cette machine. Pour lancer la restauration, sélectionnez la sauvegarde à restaurer.

![](images/backup_clone_iaas_003.png)

### Qu'est-ce que l'option de quiescing ?

Le __quiescing__ est un processus consistant à prévenir le système pour qu'il se mette dans un état approprié avant le début du snapshot.
Par défaut, le __quiescing est activé__. Il peut être désactivé manuellement dans le cas où le système gère mal le snapshot où si l'agent de l'hyperviseur n'est pas installé sur la machine virtuelle.

Pour ce faire, dans la partie __'Sauvegardes'__ de votre machine, virtuelle, cliquez sur __'Modifier les options'__ et désactiver le __quiescing__ :

![](images/backup_policy_iaas_007.png)

### Quelles sont les options de restaurations d'une machine virtuelle ?

3 options principales pour restaurer une vm, sur sa cible initiale ou sur une cible différente :

- __'CLONE'__ : Restaure la machine virtuelle en la renommant, sans remplacer la machine virtuelle d'origine.

![](images/backup_restore_iaas_001.png)

- __'PRODUCTION'__ : Restaure et __remplace__ la machine virtuelle de production (la machine virtuelle actuellement en production est __détruite__)

![](images/backup_restore_iaas_003.png)

- __'TEST'__ : Restaure la machine virtuelle de production __sans l'écraser__.

![](images/backup_restore_iaas_002.png)

### Comment restaurer et remplacer la machine virtuelle de production, sans conserver la machine virtuelle actuellement en production ?

Choisissez le mode de restauration __'Production'__. L'option 'écraser la machine virtuelle' est par défaut.

![](images/backup_restore_iaas_003.png)

### Pourquoi le nombre de machines virtuelles est-il différent entre les modules sauvegarde et compute ?

La différence de machines virtuelles peut venir du fait que le module de sauvegardes n'a pas récupéré les dernières machines créées.

Pour mettre à jour le module de sauvegardes, il faut demander à la couche logicielle de sauvegarde de réinventorier les machines virtuelles.
Pour ce faire, dans le menu __'Infrastructure'__ du bandeau vert à gauche de l'écran, naviguer vers le sous menu __'Spectrum Protect Plus'__ et utiliser le bouton __'Action'__ de l'inventaire :

![](images/backup_inv_iaas_001.png)

Notez que vous avez la date du dernier inventaire qui est indiquée.

Si une différence de machine virtuelle persiste, cela peut venir des machines virtuelles hébergeant le système permettant
les sauvegardes. En effet, celles-ci ne se comptabilisent pas elles-mêmes dans le calcul du nombre de machines sur le module de sauvegardes.

### Comment faire l'inventaire des machines virtuelles sur le module sauvegarde ?

Pour lancer un inventaire des machines virtuelles sur le module de sauvegardes, dans le menu __'Infrastructure'__ du bandeau vert à gauche de l'écran, naviguer vers le sous menu __'Spectrum Protect Plus'__ et utiliser le bouton __'Action'__ de l'inventaire :

![](images/backup_inv_iaas_001.png)

Notez que vous avez la date du dernier inventaire qui est indiquée.

### Pourquoi la sauvegarde de ma machine virtuelle échoue en indiquant un problème de snapshot ?

Cette erreur signifie que c'est la première fois que votre machine essaye d'être sauvegardée.

__Lors de la première sauvegarde d'une machine virtuelle, aucun snapshot ne doit être présent sur la machine.__

### Comment restaurer et remplacer la machine virtuelle de production, en conservant et renommant la machine virtuelle de production ?

Voici comment procéder :

- Choisissez le mode __'CLONE'__ (le mode clone entraîne un changement d’adresse MAC et d’UUID de la machine virtuelle),
- Renommez la machine virtuelle restaurée avec le nom définitif (de la vm de production),
- Renommez l'ancienne machine virtuelle de production (en _OLD).

### Comment restaurer une machine virtuelle, sans remplacer la machine virtuelle d'origine ?

Voici comment procéder :

- Choisissez le mode __'CLONE'__ (le mode clone entraîne un changement d’adresse MAC et d’UUID de la machine virtuelle)
- Définissez le nom du clone (_REST ou autres)

### Pourquoi je ne peux pas supprimer un disque en mode instant access sur ma machine virtuelle ?

Exécutez l'inventaire de la sauvegarde : dans le menu __'Infrastructure'__ du bandeau vert à gauche de l'écran, naviguer
vers le sous menu __'Spectrum Protect Plus'__ et utiliser le bouton __'Action'__ de l'inventaire :

![](images/backup_inv_iaas_001.png)

Effectuez la suppression du disque une fois l'inventaire fini. Actualisez la machine virtuelle afin de vérifier que le disque a bien été supprimé.

### Pourquoi je ne peux pas démarrer une machine virtuelle avec une politique en statut Held (politique suspendue) ?

Une politique en statut "Held"  est une fonctionnalité qui permet de suspendre temporairement les actions de rétention et de suppression des données, garantissant ainsi que les données restent intactes et disponibles au-delà de leur période de rétention standard pour des raisons spécifiques telles que la conformité ou les besoins juridiques.

Supposons qu'une entreprise a une politique de rétention de sauvegarde de 30 jours pour certaines données de production. En raison d'une enquête juridique, ils reçoivent une demande de préserver toutes les sauvegardes pertinentes pour une durée indéterminée. Vous avez la possibilité de suspendre la politique de sauvegarde associée via le statut "Held" pour empêcher la suppression automatique de ces sauvegardes après 30 jours, assurant ainsi que les données restent disponibles pour toute la durée de l'enquête.

Une politique de sauvegarde suspendue (en statut Held) n'exécutera pas les sauvegardes du planning qui lui est assigné, la machine virtuelle ne peut alors pas être considérée comme protégée ce qui ne respecte pas les normes SecNumCloud.

N'hésitez pas a demander conseille à notre équipe support sur ce sujet.
