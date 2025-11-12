---
title: Guide de démarrage
---
import openIaasVirtualMachinesList from './images/open_iaas_virtual_machines_list.png'
import openIaasVirtualMachinesListActions from './images/open_iaas_virtual_machines_list_actions.png'
import openIaasVirtualMachineOverview from './images/open_iaas_virtual_machine_overview.png'
import openIaasVirtualMachineActions from './images/open_iaas_virtual_machine_actions.png'
import openIaasVirtualMachineOverviewInformations from './images/open_iaas_virtual_machine_overview_informations.png'
import openIaasVirtualMachineAdvancedOverview from './images/open_iaas_virtual_machine_advanced_overview.png'
import openIaasReplicationMenu from './images/open_iaas_replication_menu.png'
import openIaasReplicationPoliciesView from './images/open_iaas_replication_policies_view.png'
import openIaasReplicationPolicyForm1 from './images/open_iaas_replication_policy_form1.png'
import openIaasReplicationPolicyForm2 from './images/open_iaas_replication_policy_form2.png'
import openIaasVmReplicationSection from './images/open_iaas_vm_replication_section.png'
import openIaasReplicationPoliciesTable from './images/open_iaas_replication_policies_table.png'
import openIaasReplicationReplicasTable from './images/open_iaas_replication_replicas_table.png'
import openIaasVmConsoleBtn from './images/open_iaas_vm_console_btn.png'
import openIaasVmConsoleOpen from './images/open_iaas_vm_console_open.png'
import openIaasVmConsoleClipboard from './images/open_iaas_vm_console_clipboard.png'

## Calcul

### Pilotage des Machines virtuelles

L’interface de gestion de vos machines virtuelles est disponible dans la console Shiva dans le menu __'OpenIaaS'__ situé sur le bandeau vert à gauche de l'écran.

### Liste des machines virtuelles

Dans la section __'Machines virtuelles'__, vous avez accès à la liste de vos machines virtuelles hébergées sur votre Cloud de confiance.

<img src={openIaasVirtualMachinesList} />

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

<img src={openIaasVirtualMachinesListActions} />

Lorsque vous cliquez sur la flèche déroulante verte sur la droite de la liste pour une machine virtuelle, vous accédez à toutes les informations concernant celle-ci.

<img src={openIaasVirtualMachineOverview} />

Un bandeau rapide permet de réaliser les actions suivantes :

<img src={openIaasVirtualMachineActions} />

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

Dans l'onglet d'information '__Générales__', vous trouvez des informations détaillées relatives à votre machine virtuelle, telles que son emplacement physique (AZ, Pool, Host), la RAM, le CPU, les adresses IP, et autres.

<img src={openIaasVirtualMachineOverviewInformations} />

Un onglet '__Avancé__' permet de consulter des informations plus spécifiques :

- UUID de la machine virtuelle
- Guest tools
- OS invité
- Lecteur DVD

Ainsi que modifier certaines options telles que :

- L'ordre de lancement
- Le secure boot
- Le démarrage automatique (impossible si aucune politique de sauvegarde n'est associée à la VM)

<img src={openIaasVirtualMachineAdvancedOverview} />

### Console d'une machine virtuelle

La console d'une machine virtuelle est accessible depuis la liste des machines virtuelles en cliquant sur l'icône __'Console'__ :

<img src={openIaasVmConsoleBtn} />

Un nouvel onglet de votre navigateur s'ouvre et s'affiche alors la console de votre machine, basée sur un client VNC :

<img src={openIaasVmConsoleOpen} />

Il est possible dans le menu VNC :
- de demander l'envoi de touches particulières,
- de forcer un mapping de clavier (dans le cas où votre machine virtuelle n'a pas la même disposition clavier que votre navigateur web),
- d'ouvrir un champs texte transmissible à la machine. Cette méthode remplace l'ancien presse-papier non fonctionnel,
- de passer en mode plein écran,
- de changer la taille de la fenêtre (scaling).

#### Support dispositions clavier
La saisie effectuée dans la console dépend du langage du clavier de votre navigateur web, du langage du clavier
de la machine virtuelle et de l'activation ou non de l'option 'enforce keyboard' à gauche de l'écran.
Voici une synthèse des situations possibles avec la langue française :

| Langue du clavier de la machine physique (entrée) | Langue du clavier de la machine virtuelle | Option 'enforce keyboard' sélectionnée | Resultat (sortie)        |
| ------------------------------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------ |
| Français                                          | Français                                  | Non                                    | ✅                       |
| Français                                          | Français                                  | Oui                                    | Non conseillé            |
| Français                                          | Anglais                                   | Non                                    | Anglais                  |
| Français                                          | Anglais                                   | Oui                                    | ✅                       |
| Anglais                                           | Français                                  | Non                                    | Français                 |
| Anglais                                           | Français                                  | Oui                                    | ✅                       |
| Anglais                                           | Anglais                                   | Non                                    | ✅                       |
| Anglais                                           | Anglais                                   | Oui                                    | Non conseillé            |

__Note__ :
- Si certains caractères ne passent pas à la saisie manuelle, vous pouvez essayer via le clipboard.

#### Fonctionnement du presse-papier
Cette fonctionnalité vous permet d'envoyer toute une chaine de caractères vers votre machine virtuelle. Il est important de noter que la touche "enforce keyboard" influe sur la façon dont cette chaine de caractères
sera transmise à votre machine virtuelle. Si vous constatez lors de la saisie dans la console que l'option "enforce keyboard" est nécessaire, pensez à l'activer avant d'utiliser le presse-papier.  
Cette fonctionnalité peut être utilisée pour l'envoie d'un mot de passe, d'une commande, ou d'un contenu de fichier de configuration par exemple :

<img src={openIaasVmConsoleClipboard} />

Au clic sur le bouton "Paste", le contenu de votre champs texte est envoyé à votre machine virtuelle.

## Réplication

### Accès à la gestion de la réplication

L'interface de gestion de la réplication est disponible dans la console Shiva dans le menu __'OpenIaaS'__ > __'Réplication'__ situé sur le bandeau vert à gauche de l'écran.

<img src={openIaasReplicationMenu} />

### Création d'une politique de réplication

Dans la section __'Réplication'__, vous pouvez créer des politiques définissant les paramètres de protection de vos machines virtuelles.

<img src={openIaasReplicationPoliciesView} />

Pour créer une nouvelle politique, cliquez sur le bouton __'Ajouter une politique'__. Un formulaire s'ouvre avec les étapes suivantes :

#### Étape 1 : Informations générales

- __Nom__ : Donnez un nom explicite à votre politique
- __Fréquence__ : Choisissez l'intervalle de réplication (1-59 minutes ou 1-24 heures)

<img src={openIaasReplicationPolicyForm1} />

#### Étape 2 : Sélection du stockage

- __Zone de disponibilité__ : Sélectionnez la zone de destination
- __Pool__ : Choisissez le pool de ressources
- __Block Storage__ : Sélectionnez le stockage de destination

<img src={openIaasReplicationPolicyForm2} />

#### Étape 3 : Validation

Vérifiez les paramètres et cliquez sur __'Ajouter'__ pour créer la politique.

### Association d'une VM à la réplication

Pour protéger une machine virtuelle, accédez aux détails de votre VM depuis la liste des machines virtuelles.

Dans la vue détaillée de la VM, vous trouverez une section __'Réplication'__ :

<img src={openIaasVmReplicationSection} />

Les étapes pour associer une VM à la réplication :

1. Cliquez sur __'Configurer une politique'__
2. Sélectionnez la politique de réplication souhaitée dans la liste déroulante
3. Validez votre choix

La réplication démarre automatiquement après validation.

### Gestion des politiques et réplicas

#### Vue des politiques

L'onglet __'Politiques'__ vous permet de visualiser toutes vos politiques de réplication :

<img src={openIaasReplicationPoliciesTable} />

Vous avez accès aux informations suivantes pour chaque politique :

- Son nom
- Sa fréquence de réplication
- La zone de disponibilité de destination
- Le pool associé
- Le block storage utilisé

Les actions disponibles incluent :

- Consulter les détails de chaque politique
- Modifier les paramètres
- Supprimer une politique non utilisée

#### Vue des réplicas

L'onglet __'Réplicas'__ affiche toutes les machines virtuelles en cours de réplication :

<img src={openIaasReplicationReplicasTable} />

Vous pouvez visualiser :

- Le nom des machines virtuelles répliquées
- L'emplacement source et cible
- La politique de réplication associée

Les actions disponibles incluent :

- Export des données au format CSV
- Consultation des détails de réplication
- Gestion des réplicas par politique
