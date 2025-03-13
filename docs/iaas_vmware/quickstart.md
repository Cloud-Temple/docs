---
title: Guide de démarrage
---
import shivaVmHome from './images/shiva_vm_home.png'
import shivaVmHomeDesc from './images/shiva_vm_home_desc.png'
import shivaVmHomeAlarme from './images/shiva_vm_home_alarme.png'
import shivaVmActions from './images/shiva_vm_actions.png'
import shivaVmInformations from './images/shiva_vm_informations.png'
import shivaVmBandeauRapide from './images/shiva_vm_bandeau_rapide.png'
import shivaVmVueRapide from './images/shiva_vm_vue_rapide.png'
import shivaVmInfosGenerales from './images/shiva_vm_infos_generales.png'
import shivaVmInfosAvancees from './images/shiva_vm_infos_avancees.png'
import shivaEditCpuRam from './images/shiva_edit_cpu_ram.png'
import shivaVmDiskctrl_001 from './images/shiva_vm_diskctrl_001.png'
import shivaCpool_010 from './images/shiva_cpool_010.png'
import shivaCpool_011 from './images/shiva_cpool_011.jpg'
import shivaCatalogs from './images/shiva_catalogs.png'
import shivaCatalogs_002 from './images/shiva_catalogs_002.png'
import shivaVmTemplate_002 from './images/shiva_vm_template_002.png'
import shivaVmTemplate_001 from './images/shiva_vm_template_001.png'
import shivaVmAdv_001 from './images/shiva_vm_adv_001.png'
import shivaVmAdv_002 from './images/shiva_vm_adv_002.png'
import shivaVmAdv_003 from './images/shiva_vm_adv_003.png'
import shivaVmAdv_004 from './images/shiva_vm_adv_004.png'
import shivaCpool_001 from './images/shiva_cpool_001.png'
import shivaEsx_001 from './images/shiva_esx_001.png'
import shivaEsx_002 from './images/shiva_esx_002.png'
import shivaCpool_003 from './images/shiva_cpool_003.png'
import shivaCpool_004 from './images/shiva_cpool_004.png'
import shivaCpool_005 from './images/shiva_cpool_005.png'
import shivaCpool_009 from './images/shiva_cpool_009.png'
import shivaCpool_007 from './images/shiva_cpool_007.jpg'
import shivaCpool_008Build from './images/shiva_cpool_008_build.jpg'
import shivaCpool_008Firm from './images/shiva_cpool_008_firm.png'
import shivaCpool_006 from './images/shiva_cpool_006.png'
import shivaSupport from '../console/images/shiva_support.png'
import shivaVmPolitiquesBackupAssignMandatory from './images/shiva_vm_politiques_backup_assign_mandatory.png'
import shivaVmPolitiquesBackup from './images/shiva_vm_politiques_backup.png'
import shivaVmDisquesVirtuelsPolitiques from './images/shiva_vm_disques_virtuels_politiques.png'
import shivaVmPolitiquesBackupExecute from './images/shiva_vm_politiques_backup_execute.png'
import shivaVmPolitiquesBackupExecute2 from './images/shiva_vm_politiques_backup_execute2.png'
import shivaVmPolitiquesBackupRetirer from './images/shiva_vm_politiques_backup_retirer.png'
import shivaVmPolitiquesBackupRetirerImpossible from './images/shiva_vm_politiques_backup_retirer_impossible.png'
import shivaBackupHeld_001 from './images/shiva_backup_held_001.png'
import shivaBackupHeld_002 from './images/shiva_backup_held_002.png'
import shivaVmBackupRestaurer from './images/shiva_vm_backup_restaurer.png'
import shivaVmBackupTest from './images/shiva_vm_backup_test.png'
import shivaVmBackup_2prod from './images/shiva_vm_backup_2prod.png'

## Calcul

### Pilotage des Machines virtuelles

L’interface de gestion de vos machines virtuelles est disponible dans la console Shiva dans le menu __'IaaS'__ situé sur le bandeau vert à gauche de l'écran.

### Liste des machines virtuelles

Dans la section __'Machines virtuelles'__, vous avez accès à la liste de vos machines virtuelles hébergées sur votre Cloud de confiance.

<img src={shivaVmHome} />

Vous avez accès aux informations suivantes, pour chaque machine virtuelle :

- son nom,
- les tags qui lui sont assignés,
- son statut (éteinte, allumée, en traitement, host déconnecté ou invalid),
- son manager (en environnement VMware, le Vcenter associé),
- son système d’exploitation,
- La quantité de CPU virtuels (vCPU),
- La quantité de mémoire virtuelle (vRAM).

### Actions sur les machines virtuelles

Les actions suivantes sont possibles à partir de cette interface :

- Rafraîchir la liste des machines virtuelles ;
- Exporter la liste dans le format CSV ;
- Filtrer la liste ;
- Rechercher une machine virtuelle par son nom ;
- Créer une nouvelle machine virtuelle.

<img src={shivaVmHomeDesc} />

__Un bandeau d'alertes peut être présent en haut de la liste__ : il indique que des alarmes critiques ont été déclenchées sur une ou plusieurs de vos machines virtuelles.
Le bouton __'Voir'__ permet de consulter les machines virtuelles qui sont concernées par cette notification.

<img src={shivaVmHomeAlarme} />

Lorsque vous cliquez sur la flèche déroulante verte sur la droite de la liste pour une machine virtuelle :

<img src={shivaVmActions} />

Vous accédez à toutes les informations concernant celle-ci :

<img src={shivaVmInformations} />

Un bandeau rapide permet de réaliser les actions suivantes :

<img src={shivaVmBandeauRapide} />

- Allumer la machine virtuelle ;
- L'éteindre ;
- La redémarrer ;
- Modifier les options d'alimentation du SE invité ;
- Ouvrir la console ;
- Monter un ISO ;
- Démonter un ISO ;
- Cloner la machine virtuelle ;
- La déplacer (vMotion) ;
- La renommer ;
- La supprimer.

Une vue rapide offre une visualisation du __stockage__, du __CPU__ et de la __RAM__ de la machine virtuelle.

<img src={shivaVmVueRapide} />

Dans l'onglet __'Informations générales'__, vous trouvez des informations détaillées relatives à votre machine virtuelle, telles que son OS, son emplacement physique (datacenter, datastore, etc.), la RAM, le CPU, les adresses IP, les logs, et autres.

<img src={shivaVmInfosGenerales} />

Depuis cette vue, vous pouvez effectuer les actions suivantes :

- Modifier le système d'exploitation (la machine virtuelle devant être éteinte),
- Mettre à jour la version du matériel (la machine virtuelle devant être éteinte),
- Modifier la RAM ou le CPU.

Un onglet __'Avancé'__ permet de consulter des informations plus spécifiques comme les infos "VMware tools", la version hardware, le manager, etc...

<img src={shivaVmInfosAvancees} />

### Édition de la RAM ou le CPU d'une machine virtuelle

Allez dans l'onglet __'Machines Virtuelles'__, affichez les détails d'une machine virtuelle,
sélectionnez l'onglet __'Infos générales'__ et cliquez sur le bouton d'édition de la variable à modifier :

<img src={shivaEditCpuRam} />

### Les modes de disques

Vous pouvez ajouter différents modes de disques:

- __Persistant__ : Les modifications sont immédiatement et définitivement écrites sur le disque virtuel. __C'est le mode recommandé.__
- __Indépendant non-persistant__ : Les modifications apportées au disque virtuel sont consignées dans un nouveau log et supprimées à la mise hors tension. Non affecté par les snapshots. __Il n'est pas pris en charge par la sauvegarde.__
- __Indépendant persistant__ : Les modifications sont immédiatement et définitivement écrites sur le disque virtuel. Non affecté par les snapshots. __Il n'est pas pris en charge par la sauvegarde.__

### Gestion des contrôleurs de machine virtuelle

Vous pouvez modifier le type de contrôleur de disque pour votre machine virtuelle.

<img src={shivaVmDiskctrl_001} />

Les machines virtuelles peuvent être équipées de contrôleurs SCSI et NVME, avec une limite de 4 contrôleurs de chaque type. Chaque contrôleur peut gérer jusqu'à 15 disques.

Un contrôleur SCSI peut être configuré avec différents sous-types : Para Virtual, Bus Logic, LSI Logic ou LSI Logic SAS.

Le contrôleur Para Virtual se distingue par sa capacité étendue. Il peut supporter jusqu'à 64 disques lorsque la version hardware de la machine virtuelle est compatible avec un ESXi en version 6.7 ou supérieure.

> __Important__ : Si vous souhaitez modifier le type d'un contrôleur Para Virtual qui possède plus de 15 disques, vous devrez d'abord détacher les disques sur les slots concernés.

### Console d'une machine virtuelle

La console d'une machine virtuelle est accessible depuis la liste des machines virtuelles en cliquant sur l'icône __'Console'__ :

<img src={shivaCpool_010} />

Un nouvel onglet de votre navigateur s'ouvre et s'affiche alors la console de votre machine, basée sur un client VNC :

<img src={shivaCpool_011} />

Il est possible dans le menu VNC :

- de demander l'envoi de touche particulière,
- de réaliser des copier/coller depuis le presse-papier de votre OS,
- de passer en mode plein écran,
- de changer la taille de la fenêtre (scaling).

La gestion du clavier, avec la console des machines virtuelles, fonctionne parfaite dans un environnement entièrement *anglais*.

La saisie effectuée dans la console dépend du langage du clavier de votre machine physique, du langage du clavier
de la machine virtuelle et de l'activation ou non de l'option 'enforce keyboard' à gauche de l'écran.
Voici une synthèse des situations possibles avec la langue française :

| Langue du clavier de la machine physique (entrée) | Langue du clavier de la machine virtuelle | Option 'enforce keyboard' sélectionnée | Resultat (sortie)                                   |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| Français                                          | Français                                  | Non                                    | Déconseillé (problème avec les caractères spéciaux) |
| Français                                          | Français                                  | Oui                                    | < et > ne fonctionnent pas                      |
| Français                                          | Anglais                                   | Non                                    | Déconseillé (problème avec les caractères spéciaux) |
| Français                                          | Anglais                                   | Oui                                    | Anglais                                             |
| Anglais                                           | Français                                  | Non                                    | < et > ne fonctionnent pas                      |
| Anglais                                           | Français                                  | Oui                                    | < et > ne fonctionnent pas                      |
| Anglais                                           | Anglais                                   | Non                                    | Anglais                                             |
| Anglais                                           | Anglais                                   | Oui                                    | Anglais                                             |

__Note__ :

- Si la combinaison __'AltGr'__ et __'@'__ sur le clavier ne fonctionne pas, activez le bouton __'enforce key'__ dans le menu __'VNC'__ de la console et réessayez.
- Si cela ne fonctionne toujours pas et que l'OS de la machine physique est __Windows, mettez le clavier de la machine physique en anglais
et essayez d'entrer le @ de manière classique__ *(sortie azerty : AltGr + touche du 0 ou sortie qwerty : touche du 2)*.

### Catalogues de machines virtuelles Cloud Temple

Cloud Temple met à votre disposition un catalogue de `Templates` régulièrement enrichi et mis à jour par nos équipes.
Il comprend à ce jour plusieurs dizaines de `Templates` et images à monter sur vos machines virtuelles.

<img src={shivaCatalogs} />

Pour publier un ISO/OVF, il faut aller dans la vue __'Catalogue'__ et cliquer sur le bouton __'publier des fichiers'__ en haut de la page :

<img src={shivaCatalogs_002} />

Il est possible de transformer une VM en modèle et de l'exporter dans le catalogue. Pour ce faire, sélectionnez une machine virtuelle et utilisez le bouton d'action __'clone'__ :

<img src={shivaVmTemplate_002} />

Sélectionnez __'Exporter en vm-template'__ :

<img src={shivaVmTemplate_001} />

Renseignez ensuite les informations nécessaires. Il sera alors possible de déployer une nouvelle VM à partir du modèle depuis le bouton __'Nouvelle machine virtuelle'__ ou depuis la page __'Catalogues'__. Il est aussi possible d'exporter la VM au format OVF.

__Bon à savoir__: il est possible de convertir un fichier OVA vers OVF et inversement.
La méthode la plus courante utilisée est Vmware convertor mais il existe aussi une méthode simple en utilisant ```tar```

Extraction du fichier ova:

```
tar -xvf vmName.ova
```

Créer un fichier OVA depuis un fichier OVF:

```
tar -cvf vmName-NEW.ova vmName.ovf vmName-disk1.vmdk vmName.mf
```

### Paramétrage avancé des machines virtuelles : Extra Config

Les Extra Config fournissent un moyen flexible d'inclure des paires clé=valeur dans la configuration d'une machine virtuelle. Les clés et les valeurs sont interprétées par le système lorsque la machine virtuelle est déployée.

Désormais, vous pouvez, vous même, modifier les propriétés de type __Extra Config__ dans les options avancées d'une machine virtuelle :

<img src={shivaVmAdv_001} />

Vous pouvez ajouter une propriété parmi une liste de clés. De plus, vous pouvez modifier la valeur d'une clé que vous avez vous-même ajouté. Les paires clé=valeur déjà existantes ne sont pas modifiables.

Veuillez contacter le support pour toute demande d'ajout de nouvelles clés.

<img src={shivaVmAdv_002} />

__Note__ : *Pour l'utilisation de GPU par la machine virtuelle, il est obligatoire d'activer la clé 'pciPassthru.use64bitMMIO' et d'allouer la quantité d'espace MMIO (Memory-mapped I/O) nécessaire via 'pciPassthru.64bitMMIOSizeGB'. Il est fortement recommandé de vous référerer à la [documentation officielle Nvidia](https://docs.nvidia.com/vgpu/17.0/grid-vgpu-release-notes-vmware-vsphere/index.html#tesla-p40-large-memory-vms).*

### Paramétrage avancé des machines virtuelles : vAPP

Vous pouvez, également, modifier les propriétés de type __vAPP__ dans les options avancées d'une machine virtuelle :

<img src={shivaVmAdv_003} />

Vous pouvez ajouter une propriété, la modifier ou la supprimer. Quatre types de propriétés sont proposées, String, Nombre, Booléen, Mot de passe:

<img src={shivaVmAdv_004} />

__Note__ : *La machine virtuelle doit être stoppée pour modifier ses propriétés vAPP.*

### Pilotage des __'hyperviseurs'__ et __'Cpool'__ (clusters d'hyperviseurs)

Le pilotage de vos hyperviseurs se fait dans le sous menu __'Calcul'__ du menu __'IaaS'__, situé dans le bandeau vert à gauche de votre écran.

<img src={shivaCpool_001} />

Dans ce sous menu, vous disposez d'une vue sur :

- La stack logicielle d'hyperviseurs, leur AZ et leurs ressources,
- La stack logicielle de sauvegarde.

En janvier 2024, l'offre d'hyperviseur disponible sur l'infrastructure qualifiée Cloud Temple est basée sur VMware. Le logiciel de sauvegarde utilisé est IBM Spectrum Protect Plus.

### Pilotage des clusters VMware

Pour accéder au pilotage des clusters VMware, cliquez dans le sous menu __'Calcul'__ du menu __'IaaS'__ :

Par défaut, le premier onglet liste tous les hyperviseurs (tous cluster confondus):

<img src={shivaEsx_001} />

Il est possible de visualiser les détails d'un hyperviseur en cliquant sur son nom:

<img src={shivaEsx_002} />

Il existe un onglet par cluster d'hyperviseur pour consulter les détails de chacun:

<img src={shivaCpool_003} />

Si vous cliquez sur un cluster, vous voyez la synthèse de sa composition :

- Le total de la puissance de calcul exprimé en Ghz,
- Le total de la mémoire disponible et le ratio utilisé,
- Le total de l'espace de stockage (tous types confondus) ainsi que la cote part utilisée,
- Les mécanismes d'automatisation sur indisponibilité d'une lame de calcul (__'Vsphere DRS'__),
- Le nombre de machines virtuelles,
- Le nombre d'hyperviseurs.

<!-- TODO: Add missing page. -->
<!-- En consultant la page d'un cluster, plusieurs onglets sont disponibles. L'onglet __'Règles'__ vous permet de définir les [règles d'affinité / anti-affinité](compute.md#gestion-de-laffinité-de-vos-machines-virtuelles) -->

<img src={shivaCpool_004} />

Vous voyez apparaitre pour chaque hyperviseur dans l'onglet __'Hosts'__ :

- L'usage __CPU__ et __Mémoire__,
- Le nombre de machines virtuelles affectées,
- La disponibilité d'un nouveau build pour le système d'exploitation de l'hyperviseur le cas échéant,
- Le statut de l'hyperviseur (connecté en production, en maintenance, éteint, ...),
- Un menu action.

<img src={shivaCpool_005} />

Plusieurs actions sont possibles depsuis l'onglet __'Hosts'__ :

- commander de nouveaux hyperviseurs via le bouton __'Ajouter un host'__ :

<img src={shivaCpool_009} />

- possibilité de consulter __le détail d'un hyperviseur__ :

<img src={shivaCpool_007} />

- de rentrer ou de sortir de l'__état de maintenance__ un hyperviseur,
- de __mettre à jour__ le cas échéant cet hyperviseur ; pour ce faire, __il doit impérativement être en maintenance__. Il existe deux types de mises à jours :

1. Les builds VMware (les nouvelles versions de l'hyperviseur):

<img src={shivaCpool_008Build} />

2. La mise à jour du firmware de votre lame de calcul (bios et firmware cartes filles):

<img src={shivaCpool_008Firm} />

*__Remarque__* :

- *Cloud Temple met à disposition les builds pour les hyperviseurs à intervalles réguliers.
Il est important de mettre régulièrement à jour vos hyperviseurs, notamment pour permettre l'application des correctifs de sécurité.
Cependant, __nous ne mettons pas de nous même à jour vos hyperviseurs__. Cloud Temple n'a pas de visibilité sur les engagements de disponibilité de vos workloads.
Nous vous laissons donc mettre en œuvre votre gestion du changement et appliquer au meilleur moment les nouveaux builds.*
- *Le processus de mise à jour est entièrement automatisé. Vous devez disposer d'au moins deux hyperviseurs dans votre cluster pour permettre une mise à jour sans interruption de service.*

<!-- TODO: Add missing page. -->
<!-- - *Il est nécessaire d'avoir [les permissions adéquates](../console/permissions.md) pour effectuer les différentes actions.* -->

Vous voyez aussi l'ensemble des règles d'affinité/anti-affinité pour votre cluster d'hyperviseurs dans la partie __'Règles'__.

### Gestion de l'affinité de vos machines virtuelles

Les __règles d'affinité et d'anti-affinité__ permettent de contrôler l'emplacement des machines virtuelles sur vos hyperviseurs.
Elles peuvent être utilisées pour gérer l'utilisation des ressources de votre __'Cpool'__.
Par exemple, elles peuvent aider à équilibrer la charge de travail entre les serveurs ou à isoler les charges de travail gourmandes en ressources.
Dans un __'Cpool'__ VMware, ces règles sont souvent utilisées pour gérer le comportement des machines virtuelles avec vMotion.
vMotion permet de déplacer des machines virtuelles d'un hôte à un autre sans interruption de service.

Vous pouvez configurer grâce à la gestion des règles :

- __Règles d'Affinité__ : Ces règles assurent que certaines machines virtuelles soient exécutées sur le même hôte physique.
Elles sont utilisées pour améliorer les performances en maintenant les machines virtuelles qui communiquent fréquemment
ensemble sur le même serveur pour réduire la latence réseau. Les règles d'affinité sont utiles dans des scénarios
où la performance est critique, comme dans le cas de bases de données ou d'applications qui nécessitent une communication rapide entre les serveurs.

- __Règles d'Anti-affinité__ : À l'inverse, ces règles garantissent que certaines machines virtuelles ne soient pas exécutées
sur le même hôte physique. Elles sont importantes pour la disponibilité et la résilience, par exemple,
pour éviter que des machines critiques ne soient toutes affectées en cas de défaillance d'un serveur unique.
Les règles d'anti-affinité sont cruciales pour les applications nécessitant une haute disponibilité,
comme dans les environnements de production où la tolérance aux pannes est une priorité.
Par exemple, vous ne souhaitez pas que vos deux Actives Directory soient sur le même hyperviseur.

Lors de la création d'une règle, vous définissez le type de règle (affinité / anti-affinité), le nom de la règle,
son état d'activation (__'Statut'__) et les machines concernées de votre cluster d'hyperviseurs.

<img src={shivaCpool_006} />

*Remarque : les règles affinité/aint-affinité proposées dans la console sont des règles concernant les machines virtuelles entre elles (pas de règles entre hyperviseurs et machines virtuelles).*

## Sauvegarde

### Créer une politique de sauvegarde

Pour ajouter une nouvelle politique de sauvegarde, il faut faire une demande auprès du support. Le support est accessible depuis l'icône de bouée en haut à droite de la fenêtre.

La création d'une nouvelle politique de sauvegarde est réalisée par __une demande de service__ indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenant
    Le nom de la politique de sauvegarde
    Les caractéristiques (x jours, y semaines, z mois, ...)

<img src={shivaSupport} />

### Assigner une politique de sauvegarde à une machine virtuelle

Lorsqu'une SLA est assignée à une machine virtuelle (VM), tous les disques associés à cette VM héritent automatiquement de la même SLA. Par la suite, il est possible de lancer manuellement l'exécution de la sauvegarde via l'onglet "Politiques de sauvegarde". À défaut d'un lancement manuel, la sauvegarde s'exécutera automatiquement selon le planning configuré par la SLA.

SecNumCloud rend obligatoire l'assignation d'une politique de sauvegarde à une machine virtuelle avant son démarrage. Dans le cas contraire, vous aurez la notification suivante :

<img src={shivaVmPolitiquesBackupAssignMandatory} />

Cliquez sur l’onglet __'Politiques de sauvegarde'__ du menu de votre machine virtuelle. Vous pouvez y visualiser la ou les politiques de sauvegardes assignée(s) à celle-ci.

Pour assigner une nouvelle politique de sauvegarde à la machine virtuelle, cliquez sur le bouton __'Ajouter une politique'__ et sélectionnez la politique de sauvegarde voulue.

<img src={shivaVmPolitiquesBackup} />

### Assigner une politique de sauvegarde à un disque virtuel

Il est également possible d'assigner une SLA directement à un disque virtuel spécifique d'une machine. Dans ce cas, la machine virtuelle ne hérite pas de cette SLA appliquée individuellement au disque. Cependant, il n'est pas possible de lancer manuellement l'exécution de la sauvegarde au niveau des disques, car cette fonctionnalité n'est pas prise en charge dans Spectrum Protect Plus.

En revanche, il est possible d'exclure certains disques d'une ou plusieurs politiques de sauvegarde (SLA) de la VM, ce qui permet de désassigner une ou plusieurs SLA(s) sur une base disque par disque. Cette approche offre la flexibilité de lancer manuellement l'exécution de la sauvegarde d'une SLA sans affecter tous les disques de la machine virtuelle, permettant ainsi une gestion plus fine des sauvegardes.

Cliquez sur la barre d'actions du disque auquel vous souhaitez assigner une politique de sauvegarde. Puis, cliquez sur __'Politiques'__ et sélectionnez la politique de sauvegarde souhaitée.

<img src={shivaVmDisquesVirtuelsPolitiques} />

*Nota* : La politique à ajouter doit se trouver sur une zone de disponibilité différente de la machine virtuelle.

### Exécuter une politique de sauvegarde

Dans le menu __'Politiques de sauvegarde'__ de votre machine virtuelle, cliquez sur le bouton __'Exécuter'__ de la colonne __'Actions'__ de la politique de sauvegarde que vous souhaitez exécuter.

<img src={shivaVmPolitiquesBackupExecute} />

Pour exécuter une politique de sauvegarde, vous pouvez également partir de la section __'Sauvegardes'__ dans le menu de
votre machine virtuelle. Cliquez sur le bouton __'Exécuter la sauvegarde'__, puis sélectionnez la sauvegarde que vous souhaitez exécuter dans la liste déroulante.

<img src={shivaVmPolitiquesBackupExecute2} />

### Retirer une politique de sauvegarde

Dans le menu __'Politiques de sauvegarde'__ de votre machine virtuelle, cliquez sur le bouton __'Retirer'__ de la colonne __'Actions'__ de la politique de sauvegarde que vous souhaitez retirer.

<img src={shivaVmPolitiquesBackupRetirer} />

__Attention, il n'est pas possible de retirer la dernière SLA sur une machine virtuelle allumée :__

<img src={shivaVmPolitiquesBackupRetirerImpossible} />

### Suppression d'une politique de sauvegarde : cas d'une politique de sauvegarde suspendue ("held")

Lorsque la dernière ressource est dissociée d'une politique SLA, le système détecte automatiquement cette situation. En conséquence, tous les travaux liés à cette politique SLA basculent automatiquement vers l'état "Suspendu" ("Held"). Il est important de noter qu'à ce stade, la suppression directe de la politique SLA n'est pas possible en raison de l'existence de travaux dépendants. Pour procéder à la suppression de la politique, une série d'étapes doit être suivie.

Il faut vérifier que les travaux concernés sont effectivement à l'état "Suspendu". Une fois cette vérification effectuée, ces travaux peuvent être supprimés. Ce n'est qu'après avoir supprimé ces travaux dépendants que la politique SLA pourra être définitivement effacée du système.

Un cas particulier mérite une attention spécifique : l'ajout d'une nouvelle ressource à une politique SLA dont les travaux dépendants n'ont pas été supprimés. Dans cette situation, les identifiants des travaux seront conservés. Cependant, il est crucial de noter que les travaux en état "Suspendu" ne reprendront pas automatiquement. Une intervention manuelle sera nécessaire pour les réactiver et permettre leur exécution.

note : Pour toute précision sur cette situation, contactez le support Cloud Temple.

La console Cloud Temple empêche l'affectation d'une machine virtuelle à une politique suspendue :

<img src={shivaBackupHeld_001} />

De même, il n'est pas possible de démarrer une machine virtuelle qui est associée à une politique de sauvegarde suspendue :

<img src={shivaBackupHeld_002} />

### Restaurer une sauvegarde

L’onglet __'Sauvegardes'__ du menu de vos machines virtuelles vous permet d’accéder à la liste des sauvegardes de celle-ci.
Pour restaurer une sauvegarde, cliquez sur le bouton __'Restaurer'__ sur la ligne correspondant à la sauvegarde que vous souhaitez restaurer.

<img src={shivaVmBackupRestaurer} />

1. __Mode production__ : Le mode production permet la reprise après incident sur le site local depuis le stockage primaire ou un site de reprise après incident distant, en remplaçant les images de machine originales par les images de récupération. Toutes les configurations sont transférées dans le cadre de la reprise, notamment les noms et les identificateurs, et tous les travaux de copie des données associés à la machine virtuelle continuent de s'exécuter. Dans le cadre d'une restauration en mode production, vous pouvez choisir de remplacer le stockage dans la machine virtuelle par un disque virtuel provenant d'une sauvegarde de machine virtuelle précédente.

2. __Mode test__ : Le mode test crée des machines virtuelles temporaires pour le développement, le test, la vérification d'instantané et la vérification de reprise après incident en fonction d'un planning réitérable, sans impact sur les environnements de production. Les machines de test s'exécutent aussi longtemps que nécessaire pour effectuer le test et la vérification, puis elles sont nettoyées. Via la mise en réseau isolé, vous pouvez établir un environnement sûr afin de tester vos travaux sans interférer avec les machines virtuelles utilisées pour la production. Les machines virtuelles qui sont créées en mode test possèdent des noms et des identificateurs uniques pour éviter tout conflit dans votre environnement de production.

3. __Mode clone__ : Le mode Clone crée des copies des machines virtuelles pour les cas d'utilisation requérant des copies permanentes ou à exécution longue pour l'exploration de données ou la duplication d'un environnement de test sur un réseau isolé. Les machines virtuelles créées en mode clone possèdent des noms et des identificateurs uniques pour éviter tout conflit dans votre environnement de production. En mode clone, vous devez être attentif à la consommation des ressources car le mode clone crée des machines permanentes ou à long terme.

__La restauration est par défaut en mode "TEST" pour préserver la production__ et il vous est possible de choisir le nom de la vm restaurée :

<img src={shivaVmBackupTest} />

Notez que si les tests sont satisfaisant, il est possible de passer une machine virtuelle du mode test au mode production :

<img src={shivaVmBackup_2prod} />
