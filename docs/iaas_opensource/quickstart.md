---
title: Guide de démarrage
---

## Calcul

### Pilotage des Machines virtuelles

L’interface de gestion de vos machines virtuelles est disponible dans la console Shiva dans le menu __'OpenIaaS'__ situé sur le bandeau vert à gauche de l'écran.

### Liste des machines virtuelles

Dans la section __'Machines virtuelles'__, vous avez accès à la liste de vos machines virtuelles hébergées sur votre Cloud de confiance.

![](images/open_iaas_virtual_machines_list.png)

Vous avez accès aux informations suivantes, pour chaque machine virtuelle :

- Son nom.
- Son statut (éteinte, allumée).
- Sa zone de disponibilité (AZ).
- Son système d’exploitation.
- La quantité de CPU virtuels (vCPU).
- La quantité de mémoire virtuelle (vRAM).

### Actions sur les machines virtuelles

Les actions suivantes sont possibles à partir de cette interface :

- Rafraîchir la liste des machines virtuelles.
- Filtrer la liste.
- Rechercher une machine virtuelle par son nom.
- Créer une nouvelle machine virtuelle.

![](images/open_iaas_virtual_machines_list_actions.png)

Lorsque vous cliquez sur la flèche déroulante verte sur la droite de la liste pour une machine virtuelle, vous accédez à toutes les informations concernant celle-ci.

![](images/open_iaas_virtual_machine_overview.png)

Un bandeau rapide permet de réaliser les actions suivantes :

![](images/open_iaas_virtual_machine_actions.png)

- Allumer la machine virtuelle.
- L'éteindre.
- La redémarrer.
- Ouvrir la console.
- Monter un ISO.
- Démonter un ISO.
- Convertir la machine virtuelle en template.
- La déplacer.
- La renommer.
- La supprimer.

Dans l'onglet d'information '**Générales**', vous trouvez des informations détaillées relatives à votre machine virtuelle, telles que son emplacement physique (AZ, Pool, Host), la RAM, le CPU, les adresses IP, et autres.

![](images/open_iaas_virtual_machine_overview_informations.png)

Un onglet '**Avancé**' permet de consulter des informations plus spécifiques :

- UUID de la machine virtuelle
- Guest tools
- OS invité
- Lecteur DVD

Ainsi que modifier certaines options telles que :
- L'ordre de lancement
- Le secure boot
- Le démarrage automatique (impossible si aucune politique de sauvegarde n'est associée à la VM)

![](images/open_iaas_virtual_machine_advanced_overview.png)