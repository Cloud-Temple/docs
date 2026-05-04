
const majs = {
  1.0: {
    options: {
      date: new Date('2019-02-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Première version' : 'First version',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Première version' : 'First version',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Première version' : 'First version',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Première version' : 'First version',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Première version' : 'First version',
        tag: 'ACT'
      }
    ]
  },
  1.1: {
    options: {
      date: new Date('2019-05-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour contacter le support' : 'Add button to contact support',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout des informations de version' : 'A version informations',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage sur la redirection du login' : 'Changing the display on the login redirection',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la compatibilité des librairies avec internet explorer 11' : 'Fixed the compatibility of libraries with internet explorer 11',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la compatibilité de rendu avec internet explorer 11' : 'Fixed rendering compatibility with internet explorer 11',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un message de confirmation sur le redémarrage d\'une machine virtuelle' : 'Adding a confirmation message on restarting a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'La réduction de la RAM est désormais autorisée' : 'RAM reduction is now allowed',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une limite sur le nombre d\'adaptateurs réseaux sur une machine virtuelle' : 'Adding a limit on the number of network adapters on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une limite sur le nombre de disques sur une machine virtuelle' : 'Adding a limit on the number of disks on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction des requêtes multiples sur le chargement des détails d\'une machine virtuelle' : 'Fix multiple queries on loading the details of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction des icones de chargement sans animation' : 'Fixed loading icons without animation',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Intégration du module' : 'Integration of the module',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Edition des paramètres d\'une politique de sauvegarder' : 'Editing the parameters of a backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la gestion des politiques de sauvegardes' : 'Adding backup policy management',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'assignation des politiques sur une machine virtuelle' : 'Adding policy assignment on a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'assignation des politiques sur un disque' : 'Adding policy assignment on a disk',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout des sauvegardes sur une machine virtuelle' : 'Adding backups to a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'execution d\'une backup sur une machine virtuelle' : 'Adding the execution of a backup to a virtual machine',
        tag: 'BACK'
      }
    ]
  },
  '1.1.1': {
    options: {
      date: new Date('2019-05-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bugfix',
        tag: 'GEN'
      }
    ]
  },
  1.2: {
    options: {
      date: new Date('2019-07-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Intégration de compatibilités Internet Explorer 11' : 'Integration of Internet Explorer 11 compatibilities',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre par datacenter' : 'Adding a filter by datacenter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise en forme des politiques sous forme de tableau' : 'Formatting policies in table form',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ouverture de la console dans une nouvelle page' : 'Open the console in a new page',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Intégration d\'une vue pour les rapports de sauvegardes' : 'Integrate a view for backup reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Intégration d\'une vue pour les jobs' : 'Integrate a view for logs',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'options sur la restoration d\'une vm' : 'Add options on the restoration of a vm',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Modififcation de la modal sur les politiques' : 'Edition of the modal on policies',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction sur l\'assignation des politiques de sauvegardes' : 'Fix on the assignment of backup policies',
        tag: 'BACK'
      }
    ]
  },
  '1.2.1': {
    options: {
      date: new Date('2019-08-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bugfix',
        tag: 'GEN'
      }
    ]
  },
  '1.2.2': {
    options: {
      date: new Date('2019-09-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'options à la restauration d\'une vm' : 'Add options on the restoration of a vm',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité de voir les vm par politiques de sauvegarde' : 'Added the ability to view vm by backup policies',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des activités reçues en WebSocket' : 'Update of received activities in WebSocket',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la validation pour un renommage qui n\'acceptait pas les - : ; _' : 'Fixed the validation for a rename that did not accept the -:; _',
        tag: 'CMP'
      }
    ]
  },
  '1.2.3': {
    options: {
      date: new Date('2019-09-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du status d\'un job' : 'Add the status of a job',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre par status pour les jobs' : 'Add a filter by status for jobs',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour rafraichir les jobs' : 'Add a button to refresh the jobs',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'auteur d\'une action dans les logs' : 'Add the author of an action in the logs',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Mise à jour du style des rapports de sauvegarde' : 'Update the style of backup reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Mise à jour du style des jobs' : 'Update job render',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la modal sur la modification d\'une politique de sauvegarde' : 'Modal updated on the edition of a backup policy',
        tag: 'BACK'
      }
    ]
  },
  '1.2.4': {
    options: {
      date: new Date('2019-09-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du chargement infini des sites lors d\'une restauration' : 'Fixed infinite loading of sites during a restore',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction de la pagination pour les machines virtuelles d\'une politique de sauvegarde' : 'Fix pagination for virtual machines of a backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la page des rapports de sauvegardes' : 'Updating the backup reports page',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre par intervalles sur les rapports de sauvegardes' : 'Adding an interval filter on backup reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une modal lorsque plusieurs rapports de sauvegardes se trouve dans le même intervalle' : 'Add a modal when multiple backup reports are in same interval',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Amélioration du traitement de données concernant les rapports de sauvegardes' : 'Improved data processing for backups reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de traductions' : 'Add translations',
        tag: 'GEN'
      }
    ]
  },
  '1.2.5': {
    options: {
      date: new Date('2019-10-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la possibilité d\'éxecuter un job sur la vue politiques de sauvegardes' : 'Add the ability to run a job on the backup policies view',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité d\'éxecuter un job sur la vue rapport' : 'Add the ability to run a job on the report view',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité d\'éxecuter un job sur la vue job' : 'Add the ability to run a job on the job view',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'exportation des rapports de sauvegardes d\'une politique au format pdf' : 'Add the export of backup reports of a policy in pdf format',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'exportation des rapports de sauvegardes d\'une politique au format csv' : 'Adding the export of backup reports of a policy in csv format',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'espace total et occupé des datastores lors d\'une restauration' : 'Add total space and busy datastores during a restore',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Mise à jour du rendu des rapports' : 'Update report render',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'espace total d\'un datastore lors de l\'ajout d\'un disque' : 'Adding the total space of a datastore when adding a disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un message de validation lors de l\'arret d\'une machine virtuelle' : 'Adding a validation message when stopping a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier la taille d\'un disque lorsque la machine virtuelle est allumée' : 'Ability to change the size of a disk when the virtual machine is turned on',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de statistiques concernant backup sur le dashboard' : 'Adding statistics about backup on the dashboard',
        tag: 'GEN'
      }
    ]
  },
  '1.2.6': {
    options: {
      date: new Date('2019-10-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Editer CPU et RAM lorsque la machine virtuelle est allumée' : 'Edit CPU and RAM when the virtual machine is turned on',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Editer un disque lorsque la machine virtuelle est allumée' : 'Edit disk when the virtual machine is turned on',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mettre à jour l\'unité utilisée pour les datastores' : 'Update the unit used for datastores',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajouter les logs d\'une session de travail' : 'Add logs of a job session',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page FAQ' : 'Add FAQ page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Refonte du tableau de bord' : 'Update render of the dashboard',
        tag: 'GEN'
      }
    ]
  },
  '1.2.7': {
    options: {
      date: new Date('2019-10-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Traduction des FAQ et des notes de mises à jours' : 'Translations of FAQ and release notes',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout du bouton pour supprimer un utilisateur' : 'Add button to delete user',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Afficher l\'état des vmWare tools' : 'Display status of vmWare tools',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option pour mettre à jour les vmWare tools' : 'Add option to update the vmWare tools',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option pour monter ou démonter l\'image disque des vmWare tools' : 'Add option to mount or unmount disk image of vmWare tools',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de question IAM dans la FAQ' : 'Add IAM question into FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout du fonctionnement du clavier de la console dans la FAQ' : 'Add console keyboard operation in the FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout du support activité d\'IAM' : 'Add activity support for IAM',
        tag: 'IAM'
      }
    ]
  },
  '1.2.8': {
    options: {
      date: new Date('2019-10-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bugfix',
        tag: 'GEN'
      }
    ]
  },
  '1.2.9': {
    options: {
      date: new Date('2019-11-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Afficher l\'uuid de l\'auteur dans les logs lorsqu\'il a été supprimé' : 'Display the author\'s uuid in the logs when it was deleted',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Afficher une colone des roles des utilisateurs sur la page dédiée' : 'Display a column of user roles on the dedicated page',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Retirer le mode test lors d\'une restauration' : 'Remove the test mode when restoring',
        tag: 'BACK'
      }
    ]
  },
  1.3: {
    options: {
      date: new Date('2019-11-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du nom du vcenter d\'une vm' : 'Added the name of the vcenter of a vm',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la fonctionnalité pour créer une machine virtuelle vide' : 'Add feature to create an empty virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la vue bibliothèque de contenu (vcenter 6.7 seulement)' : 'Add view content libraries (vcenter 6.7 only)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la fonctionnalité pour envoyer un modèle dans une bibliothèque (vcenter 6.7 seulement)' : 'Add feature to upload model on library (vcenter 6.7 only)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la fonctionnalité pour déployer un modèle en tant que machine virtuelle (vcenter 6.7 seulement)' : 'Add feature to deploy model as virtual machine (vcenter 6.7 only)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la FAQ' : 'Update of the FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'ancre permettant d\'accéder à une FAQ en particulier, ajout de ces ancres dans l\'url au clique sur une question' : 'Add an anchor to access a particular FAQ, adding these anchors in the url when you click on a question',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Suppresion de l\'utilisation de cookies' : 'Remove use of cookies',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug lorsqu\'une politique de sauvegarde a un planning désactivé' : 'Fixed a bug when a backup policy has a schedule disabled',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour raffraichir la liste des utilisateurs' : 'Add button to refresh list of users',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout des raisons d\'échec dans les logs' : 'Add failure reasons on logs',
        tag: 'ACT'
      }
    ]
  },
  '1.3.1': {
    options: {
      date: new Date('2019-12-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un problème d\'affcihage lorsque l\'utilisateur n\'avait aucun droit' : 'Fix a display problem when the user had no rights',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option pour créer une bibliothéque de contenu' : 'Add option to create content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option pour supprimer une bibliothéque de contenu' : 'Add option to delete content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option pour monter un ISO sur une machine virtuelle' : 'Add option to mount ISO on virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option pour démonter un ISO sur une machine virtuelle' : 'Add option to unmount ISO on virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Nouvel affichage pour le déploiement d\'une machine virtuelle à partir d\'un fichier ovf' : 'New display for the deployment of a virtual machine from an ovf',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la pagination dans les sous tableau des politiques de sauvegarde' : 'Fix pagination on the subtables of backup policies',
        tag: 'BACK'
      }
    ]
  },
  '1.3.2': {
    options: {
      date: new Date('2019-12-13')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la colonne de description des éléments d\'une bibliothèque' : 'Add the column for describing the items of a library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des champs pour configurer les options d\'une image ovf lors du déploiement d\'une vm' : 'Add fields to configure the options of an ovf image when deploying a vm',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un rôle pour accéder à l\'url de la Vstack d\'un vcenter' : 'Add a role to access the Vstack url of a vcenter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du lien des Vstacks, accessible depuis les machine virtuelles lorsque l\'utilisateur possède le droit adequat' : 'Add Vstacks link, accessible from virtual machines when the user has the appropriate permission',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la FAQ' : 'Update of the FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout du nouveau logo' : 'Add new logo',
        tag: 'GEN'
      }
    ]
  },
  '1.3.3': {
    options: {
      date: new Date('2019-12-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bugfix',
        tag: 'GEN'
      }
    ]
  },
  '1.3.4': {
    options: {
      date: new Date('2020-01-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Intégration du module Infrastructure dans la sidebar' : 'Integration of the Infrastructure module in the sidebar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Changement du logo lorsque la sidebar est réduite' : 'Changing the logo when the sidebar is collapsed',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option pour filtrer par vcenter lors de la création ou dépoliement d\'une machine virtuelle ou lors de la création d\'une bibliothèque' : 'Add option to filter by vcenter on create or deploy virtual machine or on create library',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Affichage de la liste des vcenters dans la sidebar' : 'Displaying the list of vcenters in the sidebar',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Affichage de la liste des datacenter d\'un vcenter dans la sidebar' : 'Displaying a vcenter\'s datacenter list in the sidebar',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Affichage de la liste des hostCluster d\'un datacenter dans la sidebar' : 'Displaying a datacenter\'s hostCluster list in the sidebar',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue pour consulter les consommations des datastores d\'un datacenter' : 'Add a view to consult the consumptions of the datastores of a datacenter',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue pour consulter les consommations des hosts et resources pools d\'un hostCluster' : 'Add a view to consult the consumptions of a hostCluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue pour consulter les consommations d\'un hostCluster' : 'Add a view to view a hostCluster\'s consumptions',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Retrait des boutons permettant de créer et supprimer une politique de sauvegarde' : 'Remove buttons allowing to create and delete backup policies',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Fix d\'un bug lorsqu\'une politique SLA contient une politique \'Offload\'' : 'Fix a bug where an SLA policy contains an "offload" policy',
        tag: 'BACK'
      }
    ]
  },
  '1.3.5': {
    options: {
      date: new Date('2020-01-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une vue pour consulter les détails d\'un vcenter' : 'Add a view to view a vcenter\'s details',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue pour consulter les détails d\'un datacenter' : 'Adding a view to view a datacenter\'s details',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Changement de la couleur du status de maintenance' : 'Update the color of the maintenance status',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage de la capacité de stockage restante au lieu de celle utilisée' : 'Update the display of the remaining storage capacity instead of that used',
        tag: 'INF'
      }
    ]
  },
  '1.3.6': {
    options: {
      date: new Date('2020-02-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une page FAQ sur l\'inventaire du module de sauvegardes' : 'Add a FAQ page about the Backup Module Inventory',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page FAQ sur une erreur de snapshot lors d\'une sauvegarde' : 'Add a FAQ page about a snapshot error during a backup',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page FAQ sur la connexion/déconnexion d\'une carte réseau' : 'Add a FAQ page on how to connect/disconnect a network card.',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un graphique sur le tableau de bord avec les status des jobs executé sur une plage horraire' : 'Add a graph to the dashboard with the status of jobs running on a given time range',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Résolution de bugs sur les graphiques du tableau de bord avec le navigateur Google Chrome' : 'Fix of dashboard graphics bugs with the Google Chrome browser',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Résolution de bugs de traduction' : 'Fix of translation bugs',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option de trier les machines virtuelles par VLAN' : 'Add option to sort virtual machines by VLAN',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option de connecter/déconnecter une carte réseau sur une machine virtuelle en version 6.7' : 'Add the option to connect/disconnect a network card to a virtual machine in version 6.7',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'information du nombre de cores par socket sur une machine virtuelle' : 'Add the number of cores per socket on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Suppression de l\'action pour executer le job d\'une politque depuis la vue rapport de sauvegarde et la vue politiques' : 'Remove the action to execute the policy job from the backup report view and the policy view',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option d\'annuler un job sur la vue des jobs' : 'Add the option to cancel a job on the job view',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de couleurs sur certains status de sessions d\'un job' : 'Add colors to some job session statuses',
        tag: 'BACK'
      }
    ]
  },
  '1.3.7': {
    options: {
      date: new Date('2020-02-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du filtrage des guest operation system par vcenter lors de la création d\'une vm' : 'Add guest operation system filtering by vcenter when creating a new vm',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug lors de la récupération des adaptateurs réseau' : 'Fix a bug when getting network adapters',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la FAQ lorsqu\'un filtre est renseigné' : 'Fix a FAQ bug when a filter is set',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de dépendances et de la version de docker' : 'Update dependencies and Docker version',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une colonne status sur l\'export csv des rapports de sauvegardes' : 'Add a status column on the csv export of backup reports',
        tag: 'BACK'
      }
    ]
  },
  '1.3.8': {
    options: {
      date: new Date('2020-02-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une vue infrastructure pour la partie Sauvegardes' : 'Add an infrastructure view for the Backup module',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'La connexion est désormais automatiquement actualisée lorsqu\'une console est ouverte' : 'The connection is now automatically refreshed when a console is opened',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction des bugs sur les filtres de certains tableaux' : 'Fix bugs on the filters of some tables',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de selection d\'un sujet lors du clique sur le bouton de support Shiva' : 'Add selection of a subject when clicking on the Shiva support button',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Tri par ordre alphabetique des rôles dans la vue des utilisateurs' : 'Alphabetical sorting of roles in the user view',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Correction des bugs la vue des utilisateurs' : 'Fix bugs in the user view',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout dans la FAQ de l\'utilisation de l\'arobase dans la console' : 'Add to the FAQ on using the arobase in the console',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le vue rapport de sauvegardes' : 'Fix a bug in the backup report view',
        tag: 'BACK'
      }
    ]
  },
  '1.3.9': {
    options: {
      date: new Date('2020-02-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bug sur les boutons pour dérouler un élément' : 'Fix bug on buttons to open an item',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de bug sur les champs de recherche avec \'(\' \')\'' : '',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout dans la FAQ des versions de navigateurs supportées' : 'Add to the FAQ supported browser versions',
        tag: 'GEN'
      }
    ]
  },
  '1.3.10': {
    options: {
      date: new Date('2020-03-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout des emails sur la liste des utilisateurs' : 'Add emails to the user list',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout des SDRS dans la partie infrastructure' : 'Add SDRS in the infrastructure part',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue infrastructure pour les SDRS' : 'Add an infrastructure view for the SDRS.',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton explicit pour voir les logs concernant un job' : 'Add an explicit button to view job logs',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout des activités pour toutes les actions concernant backup' : 'Add activities for all actions concerning backup',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité de modifier les options de sauvegarde d\'une machine virtuelle (Quiescing)' : 'Add the possibility to modify the backup options of a virtual machine (Quiescing)',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction du bug sur la barre de recherche des logs' : 'Fix bug on the log search bar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des librairies utilisées pour l\'interface web' : 'Update the libraries used for the web interface',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug au premier chargement de la page après la connexion' : 'Fix a bug in the first page loading after connection',
        tag: 'GEN'
      }
    ]
  },
  '1.3.11': {
    options: {
      date: new Date('2020-03-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une recherche par uuid dans la vue machine virtuelles' : 'Add uuid search in the virtual machine view',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'édition des cores par socket' : 'Add cores per socket edition',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Uniformisation des boutons pour enrouler/dérouler les informations dépliables' : 'Uniformity of buttons for winding/unwinding unfoldable informations',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une tooltip et d\'une question dans la FAQ concernant le quiescing' : 'Add a tooltip and a question to the FAQ about quiescing',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Nouvelle apparence du bouton de feedback se trouvant désormais dans la barre de navigation' : 'New look of the feedback button now in the navigation bar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Nouvelle architecture pour la partie infrastructure' : 'New architecture for the infrastructure part',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de traductions' : 'Add translations',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout dans la FAQ du temps de conservation des logs' : 'Add in the FAQ the log retention time',
        tag: 'GEN'
      }
    ]
  },
  1.4: {
    options: {
      date: new Date('2020-04-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Les modules sont désormais affichés en fonction des droits de l\'utilisateur' : 'Modules are now displayed according to user rights',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction du champ hyperviseur sur les informations d\'une machine virtuelle' : 'Fix the hypervisor field on a virtual machine\'s information',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du logout automatique lorsqu\'une console est ouverte' : 'Fix automatic logout when a console is open',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Affichage du mode SPP de la vm (test/clone/production)' : 'VM SPP mode is now displayed (test/clone/production)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité de restaurer une machine virtuelle en mode test' : 'Add the ability to restore a virtual machine in test mode',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité de passer une machine virtuelle en mode test vers le mode production' : 'Add the ability to switch a virtual machine from test mode to production mode',
        tag: 'BACK'
      }
    ]
  },
  '1.4.1': {
    options: {
      date: new Date('2020-04-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bug fixes',
        tag: 'GEN'
      }
    ]
  },
  '1.4.2': {
    options: {
      date: new Date('2020-04-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bug fixes',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une suppression spécifique pour une machine virtuelle en mode test' : 'Add a specific deletion for a virtual machine in test mode.',
        tag: 'CMP'
      }
    ]
  },
  '1.4.3': {
    options: {
      date: new Date('2020-04-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bug fixes',
        tag: 'GEN'
      }
    ]
  },
  '1.4.4': {
    options: {
      date: new Date('2020-04-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs' : 'Bug fixes',
        tag: 'GEN'
      }
    ]
  },
  '1.4.5': {
    options: {
      date: new Date('2020-05-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la possibilité de passer une machine virtuelle en mode test vers le mode clone' : 'Add the ability to switch a virtual machine from test mode to clone mode',
        tag: 'BACK'
      }
    ]
  },
  '1.4.6': {
    options: {
      date: new Date('2020-05-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs lors de la restauration d\'une machine virtuelle' : 'Bug fixes restoring virtual machine',
        tag: 'BACK'
      }
    ]
  },
  1.5: {
    options: {
      date: new Date('2020-05-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un message supplémentaire à la suppression d\'un disque' : 'Add an additional message when deleting a disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une barre de recherche sur le contenu d\'une bibliothèque' : 'Add a search bar to the contents of a library content',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre sur le mode SPP d\'une machine virtuelle' : 'Add a filter to a virtual machine\'s SPP mode',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la pagination d\'un tableau lors de l\'actualisation d\'une donnée' : 'Fix a bug in the pagination of a table when updating data',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'ouverture de la modal de support' : 'Fix a bug in the opening of the support modal',
        tag: 'GEN'
      }
    ]
  },
  1.6: {
    options: {
      date: new Date('2020-06-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Réorganisation de la sidebar' : 'Reorganization of the sidebar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Mise en place de lazy loading sur le tableau de bord' : 'Lazy loading on the dashboard',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue sur les machines virtuelles supprimées qui peuvent etre réstaurées' : 'Add a view of deleted virtual machines that can be restored',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue pour voir la liste des projets object storage' : 'Add a view to see the list of object storage projects',
        tag: 'OS'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue pour voir la liste des buckets d\'un projet' : 'Add a view to see the list of buckets on a project',
        tag: 'OS'
      }
    ]
  },
  1.7: {
    options: {
      date: new Date('2020-06-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise en place du système d\'inventaire' : 'Setup inventory system',
        tag: 'INV'
      }
    ]
  },
  '1.7.1': {
    options: {
      date: new Date('2020-07-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage en fonction des droits de l\'utilisateur' : 'Fix the display depending on user rights',
        tag: 'INV'
      }
    ]
  },
  '1.7.2': {
    options: {
      date: new Date('2020-07-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage en fonction des droits de l\'utilisateur' : 'Fix the display depending on user rights',
        tag: 'INV'
      }
    ]
  },
  '1.7.3': {
    options: {
      date: new Date('2020-07-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la mise à jour d\'un item depuis une machine virtuelle' : 'Fix updating an item from a virtual machine',
        tag: 'INV'
      }
    ]
  },
  '1.7.4': {
    options: {
      date: new Date('2020-07-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour du système de pagination et de filtre' : 'Pagination and filters system update',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Corrections sur le traitement des données' : 'Fixes on data processing',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction sur la récupération des datastores lors de l\'ajout d\'un disque' : 'Fix on getting datastores when adding a disk',
        tag: 'CMP'
      }
    ]
  },
  '1.7.5': {
    options: {
      date: new Date('2020-07-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la mise à jour d\'un item depuis une machine virtuelle' : 'Fix updating an item from a virtual machine',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction sur la reception des réponses d\'activités' : 'Fix getting activity responses',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction sur la valeur du stockage libre d\'un datastore' : 'Fix on the value of free storage in a datastore.',
        tag: 'INF'
      }
    ]
  },
  1.8: {
    options: {
      date: new Date('2020-07-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajustement de styles sur l\'ensemble de l\'application' : 'Style adjustments across the entire application',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout du choix du nombre de lignes affichées d\'un tableau sur l\'ensemble de l\'application' : 'Add choice of the number of lines displayed in a table across the entire application',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Affichage dynamique des vues inventaire disponibles' : 'Dynamic display of available inventory views',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton sur la partie infrastructure d\'un vcenter permettant d\'inventorier toutes les VMs de ce vcenter' : 'Add a button to the infrastructure section of a vcenter that allows you to inventory all the VMs in that vcenter',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter un nouvel élément à un inventaire si le type d\'inventaire est autre que celui des VMs' : 'Ability to add a new item to an inventory if the inventory is other than the VMs type inventory',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Possibilité de voir les items liés à une relation' : 'Ability to view items related to a relation',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Amélioration sur la récupération des relations d\'un item' : 'Improvement on getting an item\'s relation',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'effectuer une suppression sur plusieurs éléments à la fois' : 'Ability to delete multiple items at once',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'effectuer une edition sur plusieurs éléments à la fois' : 'Ability to edit multiple items at once',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Modification de la modal d\'édition' : 'Edit the editing modal',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Gestion des paramètres \'Lecture seule\', \'Obligatoire\', \'Unique\'... sur les différents champs' : 'Management of the parameters \'Read only\', \'Mandatory\', \'Unique\'... on the different fields',
        tag: 'INV'
      }
    ]
  },
  1.9: {
    options: {
      date: new Date('2020-07-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'AJout d\'un filtre par date sur les sauvegardes d\'une machine virtuelle' : 'Add a date filter to virtual machine backups',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir les colonnes à afficher' : 'Ability to choose the columns to be displayed',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Ajout de validation sur la création d\'un bucket' : 'Add validation on the creation of a bucket',
        tag: 'OS'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'url publique des fichiers dans un bucket' : 'Add the public url of the files in a bucket',
        tag: 'OS'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'importer un fichier dans une bilbiothèque de contenu depuis object-storage' : 'Ability to import a file into a content library from object-storage',
        tag: 'CMP'
      }
    ]
  },
  '1.10': {
    options: {
      date: new Date('2020-07-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Sur la vue \'Utilisateurs\', possibilité de chercher par email, \'Admin\', \'Sans roles\'' : 'On the \'User\' view, add ability to search by email, \'Admin\', \'No Roles\'',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une notification lorsqu\'un ou plusieurs items ont été ajoutés depuis la dernière actualisation des données' : 'Add notification when one or more items have been added since the last refresh',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Nouveau design pour la FAQ' : 'New design for the FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction sur la suppression de tout les éléments d\'une relation' : 'Fix on deleting all elements of a relationship',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Affichage du nombre de machines virtuelles par vcenter' : 'Display of the number of virtual machines per vcenter',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Optimisation du listage des machines virtuelles' : 'Optimization of the listing of virtual machines',
        tag: 'CMP'
      }
    ]
  },
  '1.10.1': {
    options: {
      date: new Date('2020-07-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une entrée FAQ sur \'Comment monter un ISO\'' : 'Add a FAQ entry on \'How to mount an ISO\'',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction concernant la deconnexion automatique lorsqu\'une console est ouverte' : 'Fix on auto-disconnect when console is open',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une colonne \'Date d\'expiration\' sur les sauvegardes d\'une machine virtuelle' : 'Add an "Expiration date" column to the backups of a virtual machine',
        tag: 'BACK'
      }
    ]
  },
  '1.10.2': {
    options: {
      date: new Date('2020-07-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de problèmes d\'affichage' : 'Fix display bugs',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction sur le bouton de reconnexion d\'une console' : 'Fix on the console reconnect button',
        tag: 'CMP'
      }
    ]
  },
  '1.10.3': {
    options: {
      date: new Date('2020-07-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la validation de la modal permettant d\'executer une sauvegarde' : 'Correction to modal validation for running a backup',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'upload des fichiers \'.ova\', \'.ovf\' et \'.iso\' dans une bibliothèque de contenu depuis une url publique' : 'Ability to upload ova, ovf, and iso files to a content library from a public url',
        tag: 'CMP'
      }
    ]
  },
  1.11: {
    options: {
      date: new Date('2020-08-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de personaliser le Tableau de bord à sa guise' : 'Possibility to customize the Dashboard as you wish',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un nouvel onglet \'Archives\' dans la vue des logs' : 'Add a new tab called \'Archives\' to the log view',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un badge du nombre de version ajoutées depuis la dernière ouverture de la modal des mises à jour' : 'Add a badge of the number of versions added since the last opening of the update modal',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de supprimer un job de type \'recovery\' se trouvant en statut \'veille\'' : 'Ability to delete a \'recovery\' job that\'s in \'standby\' status',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de restorer un vmdk précis à partir d\'une sauvegarde' : 'Ability to restore a specific vmdk from a backup',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une colonne \'Date d\'activation\' sur les politiques de sauvegarde' : 'Add an \'Activate date\' column to the backup policies',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une colonne \'Spp mode\' sur les disques virtuels' : 'Add a \'Spp mode\' column to the virtual drives',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de passer un disque du mode \'Instant Access\' au mode \'Production\'' : 'Ability to switch a drive from \'Instant Access\' mode to \'Production\' mode',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de déployer un type \'vm-template\' depuis une bibliothèque de contenu' : 'Ability to deploy a vm-template type from a content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'exporter une machine virtuelle en template vers une bibliothèque de contenu' : 'Ability to export a virtual machine as a template to a content library',
        tag: 'CMP'
      }
    ]
  },
  '1.11.1': {
    options: {
      date: new Date('2020-08-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'edition d\'un item lorsqu\'il contient une relation de type enfant' : 'Fix the edition of an item when it contains a child-type relation',
        tag: 'INV'
      }
    ]
  },
  1.12: {
    options: {
      date: new Date('2020-09-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'entrées FAQ sur \'L\'expiration d\'une session\' et \'Comment transformer une machine virtuelle en modèle\'' : 'Add FAQ entries on \'Session expiration\' and \'How to turn a virtual machine into a template\'',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de déplacer les colonnes' : 'Ability to move the columns',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Affichage graphique des relations' : 'Graphical display of relations',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Ajout de conversion sur les colonnes unitaires' : 'Add conversion on unit columns',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction des tooltips concernant les adaptateurs réseaux' : 'Fix tooltips for network adapters',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la version matériel d\'une machine virtuelle' : 'Add hardware version of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de selectionner l\'option \'auto-connecter\' sur les adaptateurs réseaux' : 'Ability to select \'auto-connect\' option on network adapters',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de mettre à niveau la version matériel d\'une machine virtuelle' : 'Ability to upgrade the hardware version of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de cloner vers une nouvelle machine virtuelle depuis les actions de la machine virtuelle' : 'Ability to clone to a new virtual machine from virtual machine actions',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un sous-menu \'réseau\' listant les switchs virtuels dans la partie infrastruscture' : 'Add a sub-menu \'network\' listing the virtual switches in the infrastructure section',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue des réseaux par switch virtuel' : 'Add a view of the networks by virtual switch',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la version des hosts sur la vue cluster dans la partie infrastructure' : 'Add the version of the hosts on the cluster view in the infrastructure section',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir la durée de sa session parmis une liste d\'options' : 'Ability to choose the duration of your session from a list of options',
        tag: 'IAM'
      }
    ]
  },
  1.13: {
    options: {
      date: new Date('2020-09-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'entrées FAQ concernant IAM et \'Comment cloner une machine virtuelle\'' : 'Add FAQ entries about IAM and \'How to clone a virtual machine\'',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de style sur la sidebar' : 'Fix style on the sidebar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction des conversions des valeurs unitaire sur l\'affichage graphique d\'une relation' : 'Fix unit value conversions on the graphical display of a relation',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Différenciation des éléments par des formes sur l\'affichage graphique d\'une relation' : 'Differentiation of elements by shapes on the graphical display of a relation',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Affichage des détails d\'un élément sous forme de tooltip sur l\'affichage graphique d\'une relation' : 'Display of the details of an element as a tooltip on the graphical display of a relation',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Ajout du nombre de machines virtuelles sur les hosts et les datastores' : 'Add the number of virtual machines on hosts and datastores',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité de filtrer les machines virtuelles par hosts' : 'Ability to filter virtual machines by hosts',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Filtre affiné sur la récupération des datastores pour la création d\'un disque virtuel' : 'Refined filter on the recovery of datastores for the creation of a virtual disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de reinitialiser son mot de passe une fois connecté' : 'Ability to reset your password once logged in',
        tag: 'IAM'
      }
    ]
  },
  '1.13.1': {
    options: {
      date: new Date('2020-09-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug général lorsque le droit \'compute_iaas_vmware_management_url\' n\'est pas assigné' : 'Fix global bug when right \'compute_iaas_vmware_management_url\' is not assigned',
        tag: 'GEN'
      }
    ]
  },
  1.14: {
    options: {
      date: new Date('2020-09-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'options sur la création d\'une machine virtuelle (ajout de disques, contrôleurs et adaptateurs réseaux)' : 'Add options on how to create a virtual machine (add disks, controllers and network adapters)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'onglet \'disques virtuelles\' en onglet \'périphériques\' avec la possibilité de gérer les contrôleurs' : 'Update the \'virtual disks\' tab to \'devices\' tab with the ability to manage controllers',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du champ \'Type\' sur les adaptateurs réseaux pour les versions 6.7' : 'Add \'Type\' field on network adapters for version 6.7',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Désactivation des actions sur une machine virtuelle lorsque l\'ESX est déconnecté' : 'Disable actions on a virtual machine when the ESX is disconnected',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la pagination sur les logs archivés' : 'Fix pagination on archived logs',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Tooltip concernant les informations d\'une sla lors de l\'assignation d\'une sla à une machine virtuelle' : 'Tooltip about sla information when assigning sla to a virtual machine',
        tag: 'BACK'
      }
    ]
  },
  1.15: {
    options: {
      date: new Date('2020-09-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de l\'export d\'un item d\'une bibliothèque de contenu vers un bucket object-storage' : 'Add export item from content library to object-storage',
        tag: 'CMP'
      }
    ]
  },
  '1.15.1': {
    options: {
      date: new Date('2020-10-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du bouton \'démonter vmware tools\' qui était activé meme lorsque les vmware tools étaient déjà démontés' : 'Fix the button \'unmount vmware tools\' that was activated even when vmware tools were already unmounted',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la mise à jour des informations d\'une machine virtuelle sur inventory qui ne prenait pas en compte le nom de la machine virtuelle' : 'Fix the update of the information of a virtual machine on inventory that did not take into account the name of the virtual machine',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction sur le chargement des snapshots qui n\'était pas toujours pris en compte' : 'Fix on snapshots loading which was not always taken into consideration',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction sur les bannières \'Ajout de [...]\' sur une machine virtuelle, ces bannières restaient actives meme lorsque l\'ajout était terminé' : 'Fix on banners : \'Adding [...]\' on a virtual machine, these banners were still active even when the addition was finished',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour recharger les bibliothèques sur la vue \'bibliothèque de contenu\'' : 'Adds a button to reload libraries on the content library view',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des consommations CPU et RAM d\'une machine virtuelle' : 'Fix the display of CPU and RAM consumption of a virtual machine.',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du changement du nombre d\'éléments par page qui provoquait une erreur sur la vue des logs récents' : 'Fix the change in the number of items per page that caused an error on the view of recent logs',
        tag: 'ACT'
      }
    ]
  },
  1.16: {
    options: {
      date: new Date('2020-10-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de monter un disque virtuel existant (à partir de son VMDK)' : 'Ability to mount an existing virtual disk (from its VMDK)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de démonter un disque virtuel sans supprimer les données sur le datastore' : 'Ability to unmount a virtual disk without deleting the data on the datastore',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du mode, du chemin et du type de provisionnement d\'un disque' : 'Add the mode, the path and the type of provisioning of a disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de configurer le mode et le type de provisionnement d\'un nouveau disque' : 'Ability to configure the mode and type of provisioning of a new disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier le mode d\'un disque' : 'Ability to change the mode of a disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter un disque existant à la création d\'une machine virtuelle' : 'Ability to add an existing disk when creating a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Affichage d\'une erreur de configuration lorsqu\'un réseau est invalide ou introuvable sur un adaptateur réseaux' : 'Displays a configuration error when a network is invalid or cannot be found on a network adapter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de déplacer une machine virtuelle (vMotion)' : 'Ability to move a virtual machine (vMotion)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'informations concernant la configuration drs d\'un hostcluster' : 'Add information about the drs configuration of a hostcluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la mémoire réservée d\'un hostcluster' : 'Add reserved memory of a hostcluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout du nombre d\'ESX et leurs noms sur les datastores' : 'Add the number of ESX and their names on the datastores',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout du nombre d\'ESX et leurs noms sur les réseaux' : 'Add the number of ESX and their names on the networks',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une entrée FAQ sur les modes de disques' : 'Add FAQ entry on disk modes',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une entrée FAQ sur la mémoire réservée d\'un hostcluster' : 'Add FAQ about reserved memory on hostcluster',
        tag: 'GEN'
      }
    ]
  },
  '1.16.1': {
    options: {
      date: new Date('2020-10-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une image d\'exemple dans la FAQ sur la mémoire réservée d\'un hostcluster' : 'Add example image on FAQ about reserved memory on hostcluster',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de traductions' : 'Fix some translations',
        tag: 'GEN'
      }
    ]
  },
  '1.16.2': {
    options: {
      date: new Date('2020-10-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Modification de la valeur par défaut des capacités mémoire et stockage lors de création et édition à travers toute l\'application (désormais GB)' : 'Update the default value for memory and storage capacity when creating and editing throughout the application (now GB)',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de spécifications techniques en fonction de l\'OS sélectionné (ex: mémoire maximum, cpu maximum, nombre de disques maximum...)' : 'Add technical specifications according to the selected OS (ex: maximum memory, maximum cpu, maximum number of disks...)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de filtrer les machines virtuelles par \'Template\'' : 'Ability to filter virtual machines by \'Template\'',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la console qui n\'était pas centrée' : 'Fix the display of the console which was not centered',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la mémoire sur les details d\'une relation' : 'Fix the memory display on the details of a relationship',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des sauvegardes d\'une machine virtuelle sur la vue \'Récupération\'' : 'Fix the display of virtual machine backups in the \'Recovery\' view',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage de la mémoire du cpu et du stockage d\'un datacenter' : 'Update the display of the cpu memory and the storage of a datacenter',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage du stockage d\'un datastore cluster' : 'Update the display of a datastore cluster storage',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage de la mémoire du cpu et du stockage d\'un hostCluster' : 'Update the display of the cpu memory and storage of a hostCluster',
        tag: 'INF'
      }
    ]
  },
  1.17: {
    options: {
      date: new Date('2020-11-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'annulation d\'un job' : 'Fix job cancelation',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'affichage des sauvegardes d\'une machine virtuelle' : 'Fix virtual machine backups display bug',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la conversion sur l\'affichage de l\'utilisation du cpu' : 'Fix cpu conversion display',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la validation sur l\'édition de la mémoire d\'une machine virtuelle' : 'Fix validation of memory edit on virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'interface pour la création d\'un contrôleur CD/DVD' : 'Add interface to create CD/DVD controller',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Desactivation des datastores lors de leur mise en maintenance' : 'Deactivation of datastores when they are put under maintenance',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une entrée FAQ sur la suppression d\'un disque restauré' : 'Add FAQ entry on how to delete a restored disk',
        tag: 'GEN'
      }
    ]
  },
  1.18: {
    options: {
      date: new Date('2020-11-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Cliquer sur un élément du menu permet l\'ouverture de la page et des sous-menu à la fois' : 'Clicking on a menu item opens the page and sub-menu at the same time',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Apparition d\'une scroll-bar lorsqu\'un élément du menu est trop long' : 'Add a scroll-bar when a menu item is too long',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout des informations sur les nouveaux droits compute_iaas_vmware_management dans la FAQ' : 'Add information about the new compute_iaas_vmware_management roles in the FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la différence d\'affichage du nom d\'un tenant' : 'Fix a bug on the difference in the display of the tenant name',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Le rôle compute_vmware_management_url est remplacé par compute_iaas_vmware_management_read et permet en plus l\'exploration de l\'infrastructure VMware' : 'The compute_vmware_management_url role is replaced by compute_iaas_vmware_management_read and allows exploration of the VMware infrastructure',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Suppression de la vue sur les ressource pools dans la partie infrastructure' : 'Remove the resources pool view in the infrastructure part',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Alignement de la légende sur les graphiques de la partie infrastructure et ajout d\'un total' : 'Alignment of the legend on the graphs in the infrastructure part and add a total value',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'affichage du statut de maintenance d\'un host' : 'Fix a bug in the display of the host maintenance status',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage sur la vérification de la mémoire d\'une machine virtuelle' : 'Fix a display bug on virtual machine memory check',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de diminuer la mémoire d\'une machine virtuelle' : 'Ability to reduce the memory of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre automatique par Datacenter lors de la récuperation de fichiers iso sur un datastore ou une bibliothèque de contenu' : 'Add an automatic filter by Datacenter when retrieving iso files from a datastore or content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'ID des controllers SCSI sur la liste des disques d\'une machine virtuelle' : 'Add SCSI controller IDs to the virtual machine disk list',
        tag: 'CMP'
      }
    ]
  },
  1.19: {
    options: {
      date: new Date('2020-12-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Création d\'une vue permettant le listing des tickets' : 'Creation of a view for tickets listing',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Lors de la création d\'une machine virtuelle, il est désormais possible de ne séléctionner uniquement les clusters de calcul et de stockage afin de profiter du DRS' : 'When creating a virtual machine, it is now possible to select only computing and storage clusters to take advantage of the DRS',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une confirmation lorsque la combinaison \'ctrl + alt + suppr\' est effectuée sur la console' : 'Add confirmation when the combination of \'ctrl + alt + suppr\' is performed on the console',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un explorateur de datastore pour la récupération de disque virtuel existant' : 'Add a datastore browser to retreive existing virtual disks',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'envoi des propriétés ovf lors du deploiement d\'une machine virtuelle' : 'Fix a bug on the sending of ovf properties when deploying a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des informations Vsphere DRS sur l\'onglet \'Stockage\' dans la partie infrastructure' : 'Add Vsphere DRS informations on the "Storage" tab in the infrastructure part',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Lorqu\'un job échoue, il est désormais possible de le relancer pour les machines concernées à l\'aide d\'un nouveau bouton prévu à cet effet' : 'When a job fails, it is now possible to restart it for the concerned machines using a new button provided for this purpose',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un graphique indiquant le nombre de machines virtuelles associées à au moins une politique de sauvegarde' : 'Add a graph showing the virtual machines rate with at least one associated backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la création de token S3 avec object-storage' : 'Add S3 token creation with object-storage',
        tag: 'OS'
      },
      {
        text: lang === 'fr' ? 'Ajout de la liste des tokens S3 par projet' : 'Add S3 tokens listing by project',
        tag: 'OS'
      }
    ]
  },
  '1.19.1': {
    options: {
      date: new Date('2020-12-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Le graph sur le nombre de machines concernées par une politique de sauvegarde ne fonctionne pas avec SPP 10.1.5' : 'The graph on the number of machines affected by a backup policy does not work with SPP 10.1.5',
        tag: 'BACK'
      }
    ]
  },
  '1.20': {
    options: {
      date: new Date('2021-01-08')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du typage sur les variables de déploiement pour les templates de bibliothèques' : 'Add type on deployment variables for library templates',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Lors de la migration d\'une machine virtuelle, il est desormais possible de choisir un nouveau réseau pour chaque adaptateur réseau' : 'When migrating a virtual machine, it is now possible to choose a new network for each network adapter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage sur le filtre VLAN lors de la récupération des machines' : 'Fix a display bug on VLAN filter when getting virtual machines',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Le montage d\'une image ISO a été modifié afin de rendre transparent la création d\'un lecteur CDROM' : 'ISO image mounting has been modified in order to make the creation of a CDROM drive transparent',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage sur l\'upload d\'un fichier dans un bucket' : 'Fix a display bug on the upload of a file in a bucket',
        tag: 'OS'
      },
      {
        text: lang === 'fr' ? 'Possibilité de mettre en maintenace un datastore' : 'Ability to maintain a datastore',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue supervision listant les équipements' : 'Add a monitoring view for the equipment listing',
        tag: 'MNT'
      }
    ]
  },
  1.21: {
    options: {
      date: new Date('2021-01-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la documentation API SHIVA' : 'Add Shiva API documentation',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Le filtre avec la liste des vlans est maintenant trié par ordre alphabétique' : 'The filter with the list of vlans is now sorted in alphabetical order',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la sidebar' : 'Update of the sidebar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de mettre en maintenace un host' : 'Ability to maintain a host',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre par rôle sur la vue utilisateurs' : 'Add a filter by role on the user view',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Possibilité de trier les utilisateurs par nombre de rôles' : 'Ability to sort users by number of roles',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des rôles Ticketing et Supervision' : 'Update Ticketing and Monitoring rights',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Les listes déroulantes sont désormais remplacées par un message lorsqu\'elles sont vides' : 'Drop-down lists are now replaced by a message when they are empty',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une tooltip redirigeant vers la FAQ lors du choix du type de restauration' : 'Add a tooltip redirecting to the FAQ when choosing the restoration type',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'L\'édition d\'une politique de sauvegarde est momentanément désactivé' : 'Editing a backup policy is temporarily disabled',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de trier par colonne sur la vue Tickets' : 'Ability to sort by column in the Tickets view',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de trier par colonne sur la vue Équipements' : 'Ability to sort by column in the Equipments view',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de déployer un template directement depuis la vue machines virtuelles' : 'Ability to deploy a template directly from the virtual machine view',
        tag: 'CMP'
      }
    ]
  },
  '1.21.1': {
    options: {
      date: new Date('2021-01-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le tri des tickets' : 'Fix bug on tickets sorting',
        tag: 'TICKET'
      }
    ]
  },
  '1.21.2': {
    options: {
      date: new Date('2021-01-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le bouton pour copier l\'ID d\'un utilisateur' : 'Fix a bug on the copy user ID button',
        tag: 'IAM'
      }
    ]
  },
  1.22: {
    options: {
      date: new Date('2021-01-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'options sur la création de snapshots' : 'Add options on the snapshot creation',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Lors de l\'ajout d\'un disque, il est désormais possible de choisir entre un datastore et un cluster' : 'When adding a disk, it is now possible to choose between a datastore and a cluster',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'affichage de la description et des options appliquées d\'un snapshot' : 'Add description and applied options display on the snapshot',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'explorateur de fichiers qui ne prennait pas en compte les extensions écrites en majuscule' : 'Fix a bug in the file explorer that did not accept extensions written in uppercase',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des catalogues sur les tickets' : 'Add catalogs on tickets',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur les dates d\'ouverture dans la liste des tickets' : 'Fix a bug on the opening dates in the ticket list.',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de la liste des appliances' : 'Add an appliance list',
        tag: 'MNT'
      }
    ]
  },
  '1.22.1': {
    options: {
      date: new Date('2021-01-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du système d\'ajout de rôles' : 'Correction of the adding roles system',
        tag: 'IAM'
      }
    ]
  },
  '1.22.2': {
    options: {
      date: new Date('2021-01-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la création de snapshot' : 'Fix snapshot creation bug',
        tag: 'CMP'
      }
    ]
  },
  '1.22.3': {
    options: {
      date: new Date('2021-02-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage sur l\'édition d\'un disque virtuel' : 'Fix a display bug on virtual disk edition',
        tag: 'CMP'
      }
    ]
  },
  '1.22.4': {
    options: {
      date: new Date('2021-02-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du déploiement d\'une machine virtuelle pour certains types d\'item de librairie de contenu' : 'Fix a bug on virtual machine deployment for some types of content library items',
        tag: 'CMP'
      }
    ]
  },
  1.23: {
    options: {
      date: new Date('2021-02-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de migrer plusieurs machines virtuelle d\'un host à l\'autre sur la vue infrastructure d\'un hostcluster' : 'Ability to migrate multiple virtual machines from one host to another on the infrastructure view of a hostcluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout du nom de la machine virtuelle dans l\'url lors de l\'ouverture de la console' : 'Add the name of the virtual machine in the url when opening the console',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des fichiers liés sur l\'édition d\'un ticket' : 'Add linked files on the edition of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de lier des fichiers à l\'édition d\'un ticket' : 'Ability to link files to the edition of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de créer un nouveau ticket' : 'Ability to create a new ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tri alphabétique dans l\'arborescence d\'un datastore' : 'Add an alphabetical sorting in the datastore treeview',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de filtres sur les tickets' : 'Add filters on tickets',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des status des hosts sur la vue infrastructure d\'un hostcluster' : 'Update of the display of host status on the infrastructure view of a hostcluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Renforcement de la sécurité sur l\'interprétation de nouveaux champs' : 'Reinforcement of security during interpretation of new fields',
        tag: 'GEN'
      }
    ]
  },
  '1.23.1': {
    options: {
      date: new Date('2021-02-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une notification lors d\'un problème sur la récupération des catalogues de services' : 'Add notification for service catalog retrieval problem',
        tag: 'TICKET'
      }
    ]
  },
  '1.23.2': {
    options: {
      date: new Date('2021-02-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Modification de l\'appel API pour la création de ticket' : 'Modification of the API call for ticket creation',
        tag: 'TICKET'
      }
    ]
  },
  '1.23.3': {
    options: {
      date: new Date('2021-02-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug de validation sur les extensions de fichiers' : 'Fix a validation bug on file extensions',
        tag: 'CMP'
      }
    ]
  },
  1.24: {
    options: {
      date: new Date('2021-02-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de choisir un cluster de stockage ou de calcul lors de la migration d\'une machine virtuelle' : 'Ability to choose a datastore or host cluster when migrating a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Désactivation du redimensionnement d\'un disque lorsque la machine possede au moins un snapshot' : 'Disable disk resizing when the machine has at least one snapshot',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vérification de compatibilité en fonction de cluster lors d\'un vmotion' : 'Add cluster compatibility check during a vmotion',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajouter un bouton vmotion d\'un datastore à l\'autre sur la partie infrastructure' : 'Add a vmotion button from datastore to datastore on the infrastructure part',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Les champs catalogues sont désormais affichés selon les éléments précédemment sélectionnés' : 'Catalog fields are now displayed according to previously selected items',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'édition d\'un commentaire' : 'Add comment edition',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de la création d\'un commentaire' : 'Add comment creation',
        tag: 'TICKET'
      }
    ]
  },
  '1.24.1': {
    options: {
      date: new Date('2021-02-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la durée d\'un commentaire' : 'Fix comment duration',
        tag: 'TICKET'
      }
    ]
  },
  '1.24.2': {
    options: {
      date: new Date('2021-02-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la durée d\'un commentaire' : 'Fix comment duration',
        tag: 'TICKET'
      }
    ]
  },
  1.25: {
    options: {
      date: new Date('2021-02-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une redirection au clique sur un job sur le graphique du tableau de bord' : 'Add a redirection when clicking on a job on the dashboard chart',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir entre host et hostCluster pour un deploy template' : 'Ability to choose between host and hostCluster for a deploy template',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de configurer en dur une adresse mac sur une machine virtuelle' : 'Ability to hard-configure a mac address on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de stopper ou redémarrer le SE invité sur une machine virtuelle' : 'Ability to stop or reboot the guest OS on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un affichage particulier pour les machines virtuelles en échec lors d\'une migration' : 'Add a special display for failed virtual machines during migration',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du nombre de services et le statut de la disponibilité sur la vue équipement' : 'Add the number of services and availability status on the equipment view',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page des services pour un équipement' : 'Add a services page for an equipment',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage entre un commentaire humain et automatique sur un ticket' : 'Modification of the display between a human and an automatic comment on a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir d\'afficher 50 ou 100 éléments sur une vue inventaire' : 'Ability to choose to display 50 or 100 items on an inventory view',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des pannes sur la configuration DRS d\'un datastore' : 'Fix the display of failures on the DRS configuration of a datastore',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage sur les logs lorsque le role iam_read n\'était pas attribué' : 'Fix a display bug on the logs when the role iam_read was not assigned',
        tag: 'ACT'
      }
    ]
  },
  '1.25.1': {
    options: {
      date: new Date('2021-02-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des conditions pour utiliser les options d\'alimentation du SE invité' : 'Fix conditions for using the power options of the guest OS',
        tag: 'CMP'
      }
    ]
  },
  '1.25.2': {
    options: {
      date: new Date('2021-03-08')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la date de modification d\'un service' : 'fix the display of the edited date of a service',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du statut d\'un équipement' : 'Fix the display of equipment status',
        tag: 'MNT'
      }
    ]
  },
  '1.25.3': {
    options: {
      date: new Date('2021-03-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du tri des colonnes de la vue équipement' : 'Fix the sort of the column on the equipment view',
        tag: 'MNT'
      }
    ]
  },
  1.26: {
    options: {
      date: new Date('2021-03-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la consolidation d\'une machine virtuelle' : 'Add virtual machine consolidation',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'upload de fichiers sur la bibliothèque de contenu et desactivation d\'object-storage' : 'Add file upload to the content library and disable object-storage',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la modification d\'un SE invité' : 'Add guest OS modification',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la création d\'un lecteur CD/DVD' : 'Add CD/DVD driver creation',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du choix du lecteur CD/DVD lors du montage d\'un ISO' : 'Add CD/DVD driver choice on ISO mounting',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage lors de la confirmation de sortie de maintenance' : 'Fix a display bug when exiting maintenance mode',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtrage par host lors de la récupération des SE invité' : 'Add host filtering when getting guest OS',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Affichage de la version de la plateforme SPP dans la partie infrastructure' : 'Display SPP platform version in infrastructure part',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajouter le choix du nombre de pages sur la liste des hosts dans la vue infrastructure' : 'Add the choice of the pages number on the list of hosts in the infrastructure part',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout du filtrage des tickets avec plusieurs statuts' : 'Add tickets filtering with multiple status',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de la modification d\'un ticket' : 'Add ticket modification',
        tag: 'TICKET'
      }
    ]
  },
  '1.26.1': {
    options: {
      date: new Date('2021-03-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug empechant le déploiement d\'un item de bibliothèque de contenu' : 'Fix a bug that prevented the deployment of a content library item',
        tag: 'CMP'
      }
    ]
  },
  '1.26.2': {
    options: {
      date: new Date('2021-03-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'UI sur la vue edition d\'un ticket' : 'Fix UI on ticket edition view',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'UI sur la vue services' : 'Fix UI on services view',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout du filtre par host lors de la récupération des bibliothèques de contenu' : 'Add filter by host when retrieving content libraries',
        tag: 'CMP'
      }
    ]
  },
  '1.26.3': {
    options: {
      date: new Date('2021-03-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la suppression des filtres sur le rafraichissement des données' : 'Fix filter deletion on data refresh',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la disponibilité sur la vue équipement' : 'Fix display fo availability on equipment view',
        tag: 'MNT'
      }
    ]
  },
  '1.26.4': {
    options: {
      date: new Date('2021-03-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug provoquant une erreur de droit lors du déploiement d\'un template' : 'Fix a bug that caused a permission error when deploying a template',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de champs manquants lors du déploiement d\'un template OVF' : 'Fix missing fields when deploying an OVF template',
        tag: 'CMP'
      }
    ]
  },
  1.27: {
    options: {
      date: new Date('2021-04-08')
    },
    data: [
      {
        text: lang === 'fr' ? 'Modifications pour adapter le responsive de l\'application' : 'Modifications to adapt the responsive of the application',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug de validation sur l\'édition des cartes réseaux' : 'Fix a validation bug on the edition of network adapters',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'ensemble des IPs d\'une machine virtuelle' : 'Add all the IPs of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier la configuration SDRS' : 'Ability to change the SDRS configuration',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier la configuration HostCluster DRS' : 'Ability to modify HostCluster DRS configuration',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de filtres sur les vues équipements et services' : 'Add filters on the equipment and services views',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout de la date de mise à jour du status pour un service' : 'Add the date of the status update for a service',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout des colonnes GTR et GTI' : 'Add columns GTR and GTI',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir le type de déplacement d\'une machine virtuelle (calcul seulement, stockage seulement ou les 2)' : 'Ability to choose the type of motion of a virtual machine ( compute only, storage only or both)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des infos de l\'emplacement actuel d\'une machine virtuelle lors de son déplacement' : 'Add the information of the current location of a virtual machine when moving it',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir les recommendations à appliquer lors d\'une mise en maintenance' : 'Ability to choose the recommendations to be applied during maintenance',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'appliquer les recommendations d\'un SDRS' : 'Ability to apply the recommendations of an SDRS',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de la modal de restauration qui restait bloquée dans certaines situations' : 'Fix the restore modal that was stuck in some situations',
        tag: 'BACK'
      }
    ]
  },
  '1.27.1': {
    options: {
      date: new Date('2021-04-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du tri par GTI sur la vue des tickets' : 'Fix sort by GTI on tickets view',
        tag: 'TICKET'
      }
    ]
  },
  1.28: {
    options: {
      date: new Date('2021-04-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du nombre de tickets et de la répartition des tickets non fermés sur le tableau de bord' : 'Add the number of tickets and the distribution of unclosed tickets on the dashboard',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage sur le tableau de bord' : 'Fix a display bug on the dashboard',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction du nombre d\'items par page à afficher sur les archives' : 'Fix the number of items per page to be displayed on the archives',
        tag: 'ACT'
      }
    ]
  },
  '1.28.1': {
    options: {
      date: new Date('2021-04-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur les dates erronées de mise à jour des services' : 'Fix on the wrong dates of update of the services',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction du badge des gti' : 'Fix gti badge',
        tag: 'TICKET'
      }
    ]
  },
  1.29: {
    options: {
      date: new Date('2021-04-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de choisir l\'ordre des colonnes lorsqu\'elles sont filtrables' : 'Ability to choose the order of the columns when they are filtered',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de la vue suivi des tâches VmWare' : 'Add the VmWare task tracking view',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de validation sur les MAC adresses' : 'Add validation on MAC addresses',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de filtrer par la nature du ticket' : 'Ability to filter by ticket nature',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de la colonne information sur la vue des services' : 'Add information column to the service view',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout du nombre de tickets par statut sur la vue des tickets' : 'Add the number of tickets per status on the ticket view',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout du nom du switch virtuel sur le filtre des vlans dans la vue machines virtuelles' : 'Add the name of the virtual switch on the vlan filter in the virtual machine view',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la mise en maintenance d\'un host' : 'Fix host maintenance',
        tag: 'INF'
      }
    ]
  },
  '1.29.1': {
    options: {
      date: new Date('2021-04-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de cloner une machine virtuelle lorsqu\'elle est allumée' : 'Ability to clone a virtual machine when it is turned on',
        tag: 'CMP'
      }
    ]
  },
  '1.30': {
    options: {
      date: new Date('2021-04-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Suppression d\'une tooltip erronée sur le bouton pour clone une machine virtuelle' : 'Remove a wrong tooltip on the button to clone a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Modification du message de bienvenue pour la première connexion d\'un utilisateur' : 'Edit the welcome message for a user\'s first login',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Mise en place de IAM V2' : 'Implementation of IAM V2',
        tag: 'IAM'
      }
    ]
  },
  '1.30.1': {
    options: {
      date: new Date('2021-04-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'invitation d\'un utilisateur' : 'Fix a bug on user invite',
        tag: 'IAM'
      }
    ]
  },
  1.31: {
    options: {
      date: new Date('2021-05-05')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de filtrer les logs par utilisateurs' : 'Ability to filter logs by user',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Ajout de redirections au clique sur les graphiques du tableau de bord' : 'Add redirects when clicking on the dashboard graphics',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue de gestion des tags' : 'Add a management view of tags',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter un tag à un équipement' : 'Ability to add a tag to an equipment',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Afficher les tags associés à un équipement' : 'Display the tags associated with an equipment',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre par tags sur la liste des équipements' : 'Add a tag filter to the equipment list',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la colonne information dans la vue services' : 'Fix the display of the information column in the services view',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction des boutons sur les filtres par date' : 'Fix buttons on filters by date',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction du rafraichissement des filtres sur la modal de Vmotion d\'une machine virtuelle' : 'Fix filters refresh on Vmotion modal of a virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '1.31.1': {
    options: {
      date: new Date('2021-05-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur le chargement des données dans la modal pour déplacer une machine virtuelle' : 'Fix on data loading in the modal to move a virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '1.40': {
    options: {
      date: new Date('2021-05-05')
    },
    data: [
      {
        text: lang === 'fr' ? 'Activation d\'IAM V2' : 'IAM V2 activation',
        tag: 'IAM'
      }
    ]
  },
  1.41: {
    options: {
      date: new Date('2021-05-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour du système d\'authentification suite aux changements IAM V2' : 'Update of the authentication system following the IAM V2 changes',
        tag: 'IAM'
      }
    ]
  },
  '1.42.3': {
    options: {
      date: new Date('2021-06-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des activités qui ne reçoivent pas de réponses suite à un changement de tenant' : 'Fix the activities that are not answered due to a change of tenant',
        tag: 'ACT'
      }
    ]
  },
  1.43: {
    options: {
      date: new Date('2021-06-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la possibilité de pré-selectionner les rôles possédés lors de l\'affectation de rôles' : 'Add the ability to pre-select owned roles during roles assignment',
        tag: 'IAM'
      }
    ]
  },
  1.44: {
    options: {
      date: new Date('2021-06-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une vue tableau de bord pour la partie supervision' : 'Add a dashboard view for the monitoring part',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vue listant l\'ensemble des services' : 'Add a view listing all the services',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un graphique des statuts de services sur la vue details d\'un équipement' : 'Add a service status graph to the equipment details view',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tag sur la liste des tickets indiquant le nombre de tickets "non assigné" avec la possibilité de cliquer pour filtrer' : 'Add a tag to the ticket list indicating the number of "unassigned" tickets with the ability to click on the tag to filter the tickets. click to filter',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tag sur la liste des tickets indiquant le nombre de tickets "en escalade" avec la possibilité de cliquer pour filtrer' : 'Add a tag to the ticket list indicating the number of tickets "in escalation" with the ability to click to filter',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Suppression des restrictions concernant le démontage et la suppresion d\'un disque virtuel lorsque la machine est allumée' : 'Removes restrictions on unmounting and deleting a virtual disk while the machine is powered on',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de filtrer les équipements "monitorés" et avec les "notifications activées"' : 'Ability to filter "monitored" and "notification enabled" equipments',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout de la colonne "Nature" sur la liste des tickets' : 'Add column "Nature" on the tickets list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de récupérer l\'état de santé d\'une appliance' : 'Ability to get the health status of an appliance',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de filtrer et trier les statuts des équipements' : 'Ability to filter and sort the status of the equipments',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage du statut d\'un équipement' : 'Change the status display of an equipment',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Modification des champs gtr et gti sur la liste des tickets' : 'Change of the gtr and gti fields on the ticket list',
        tag: 'MNT'
      }
    ]
  },
  1.45: {
    options: {
      date: new Date('2021-06-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des "0" affichés sur certains graphiques' : 'Fix "0" displayed on some graphs',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage trop petit des graphiques sur certains navigateurs' : 'Fixed small graphics display on some browsers',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de la colonne "Equipe" sur la liste des tickets' : 'Add column "Team" on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage de la colonne "Information" des services' : 'Change in the display of the "Information" column of the services',
        tag: 'MNT'
      }
    ]
  },
  1.47: {
    options: {
      date: new Date('2021-06-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un graphique sur le nombre de machines concernées par une politique de sauvegarde' : 'Add a graph on the number of machines concerned by a backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage des details d\'un ticket' : 'Edit the display of a ticket\'s details',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage de la sidebar' : 'Fix a bug in the display of the sidebar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de pagination sur la récupération des sauvegardes d\'une machine virtuelle' : 'Add paging to the retrieve of virtual machine backups',
        tag: 'BACK'
      }
    ]
  },
  1.48: {
    options: {
      date: new Date('2021-06-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de graphiques sur la vue de l\'ensemble des services' : 'Add graphics on the view of all the services',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre sur les échéances Gti sur la liste des tickets' : 'Add a filter on Gti deadlines on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tag sur le nombre d\'échéances Gti expirées ou bientôt expirées sur la liste des tickets' : 'Add a tag on the number of expired or soon to be expired Gti deadlines on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre sur les échéances Gtr sur la liste des tickets' : 'Add a filter on the Gtr expiries on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tag sur le nombre d\'échéances Gtr expirées ou bientôt expirées sur la liste des tickets' : 'Add a tag on the number of expired or soon to be expired Gtr deadlines on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre sur les catalogues non renseignés sur la liste des tickets' : 'Add a filter on the catalogs not filled in on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tag sur le nombre de catalogues "Origine" non renseignés sur la liste des tickets' : 'Add a tag on the number of catalogs "Origin" not filled on the list of tickets',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tag sur le nombre de catalogues "Nature" non renseignés sur la liste des tickets' : 'Add a tag on the number of catalogs "Nature" not informed on the list of tickets',
        tag: 'TICKET'
      }
    ]
  },
  1.49: {
    options: {
      date: new Date('2021-06-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton sur les comptes locaux pour réinitialiser son mot de passe une fois connecté' : 'Add a button on local accounts to reset your password once you are logged in',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton sur les comptes locaux pour réinitialiser son MFA une fois connecté' : 'Add a button on local accounts to reset your MFA once you are logged in',
        tag: 'GEN'
      }
    ]
  },
  '1.50': {
    options: {
      date: new Date('2021-06-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité d\'ouvrir plusieurs tenant d\'une même entreprise à la fois' : 'Possibility of opening several tenants of the same company at the same time',
        tag: 'GEN'
      }
    ]
  },
  1.51: {
    options: {
      date: new Date('2021-06-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du module documentation' : 'Add module documentation',
        tag: 'DOC'
      }
    ]
  },
  1.52: {
    options: {
      date: new Date('2021-06-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du choix des recommandations au démarrage d\'une machine virtuelle' : 'Add the choice of recommendations at the power on of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug de validation sur la modal de migration d\'une machine virtuelle' : 'Fix a validation bug on the migration mode of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des équipements sans notifications sur les chiffres des graphiques de supervision' : 'Add equipment without notifications on the numbers of the supervision graphs',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de bug sur des chargements infinis' : 'Fix bug on infinite loadings',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de télécharger les fichiers attachés à un ticket' : 'Ability to download files attached to a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton sur les filtres par interval de date pour retirer l\'interval' : 'Add a button on the date range filters to remove the range',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout des retours à la ligne sur l\'aperçu de la description d\'un ticket ou d\'un commentaire' : 'Add line breaks on the preview of the description or comment of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de ralentissements sur les formulaires zone de texte' : 'Fix slowdowns on text area forms',
        tag: 'TICKET'
      }
    ]
  },
  '1.52.3': {
    options: {
      date: new Date('2021-07-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la page d\'accueil' : 'Add home page',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Correction du fil d\'ariane sur les pages enfants' : 'Fix breadcrumb on children pages',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de certaines images' : 'Fix display of some images',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'intégration des liens' : 'Fix of the links integration',
        tag: 'DOC'
      }
    ]
  },
  1.53: {
    options: {
      date: new Date('2021-07-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout des événements liés à une tâche vmware' : 'Add the events associated with a vmware task',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité, lors de la création de machine virtuelle, de choisir entre une nouvelle machine ou une machine depuis un template dans une bibliothèque de contenu' : 'Ability, when creating a virtual machine, to choose between a new machine or a machine from a template in a content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Modification de la structure de la barre de navigation' : 'Edit the structure of the navigation bar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'éditer ses propres commentaires sur un ticket' : 'Ability to edit your own comments on a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Modification des filtres appliqués lors du clique sur un tag de la vue tickets' : 'Edit the filters applied when clicking on a tag in the tickets view',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de traductions sur la vue tickets' : 'Add translation on the ticket view',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout du rôle iam_manage_permissions' : 'Add the role iam_manage_permissions',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage et de la gestion des GTI/GTR' : 'Edit the display and management of GTI/GTR',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de rendu de la page d\'accueil' : 'Fix the rendering of the home page',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Modification du graphique concernant le nombre de machines ayant au moins 1 sauvegarde' : 'Edit the graph concerning the number of machines with at least 1 backup',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une vérification sur le nom du fichier avant son chargement dans une bibliothèque de contenu' : 'Add a check on the file name before uploading it into a content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une entrée FAQ concernant la visibilité d\'une bibliothèque de contenu notamment lors du montage d\'un iso' : 'Add a FAQ entry about the visibility of a content library, especially when mounting an iso',
        tag: 'CMP'
      }
    ]
  },
  1.54: {
    options: {
      date: new Date('2021-07-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre permettant de filtrer les machines virtuelles possédant ou ne possédant pas de snapshot' : 'Add a filter to filter the virtual machines that have or do not have a snapshot',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Url mise à jour en fonction des filtres appliqués sur la page Ticket' : 'Url updated according to the filters applied on the Ticket page',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de sauvegarder les filtres appliqués en tant que vue sur la pages Ticket' : 'Ability to save applied filters as a view on the Ticket page',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'appliquer les filtres d\'une vue préalablement enregistrée sur la pages Ticket' : 'Ability to apply filters from a previously saved view on the Ticket page',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Url mise à jour en fonction des filtres appliqués sur la page Équipement' : 'Url updated according to the filters applied on the Equipment page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de sauvegarder les filtres appliqués en tant que vue sur la pages Équipement' : 'Ability to save applied filters as a view on the Equipment page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'appliquer les filtres d\'une vue préalablement enregistrée sur la pages Équipement' : 'Ability to apply filters from a previously saved view on the Equipment page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Url mise à jour en fonction des filtres appliqués sur la page Service' : 'Url updated according to the filters applied on the Service page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de sauvegarder les filtres appliqués en tant que vue sur la pages Service' : 'Ability to save applied filters as a view on the Service page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'appliquer les filtres d\'une vue préalablement enregistrée sur la pages Service' : 'Ability to apply filters from a previously saved view on the Service page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de nettoyer les ressources actives liées à un job' : 'Ability to clean up the active resources linked to a job',
        tag: 'BACK'
      }
    ]
  },
  '1.54.1': {
    options: {
      date: new Date('2021-07-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des tags OK/KO concernant les gti/gtr' : 'Fix the display of OK/KO tags for gti/gtr',
        tag: 'TICKET'
      }
    ]
  },
  '1.54.2': {
    options: {
      date: new Date('2021-07-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des notes de mise à jour concernant les PAT' : 'Fix the release notes for the PATs',
        tag: 'GEN'
      }
    ]
  },
  '1.54.3': {
    options: {
      date: new Date('2021-07-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'erreurs sur la liste des tickets lorsqu\'un ticket ne possède pas de sla' : 'Fix errors on the ticket list when a ticket does not have a sla',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction sur le filtre nature' : 'Fix on the nature filter',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction des filtres notifications et supervisions sur les équipements' : 'Fix notification and monitored filters on equipment',
        tag: 'MNT'
      }
    ]
  },
  1.55: {
    options: {
      date: new Date('2021-07-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité d\'activer ou désactiver le changement à chaud de la RAM' : 'Ability to enable or disable RAM hotplug',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'activer ou désactiver le changement à chaud du CPU' : 'Ability to enable or disable CPU hotplug',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Pré-autorisation sur la documentation Api' : 'Pre-authorization on Api documentation',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout des paramètres avancés sur une machine virtuelle' : 'Add advanced settings to a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'éditer les paramètres avancés d\'une machine virtuelle' : 'Ability to edit the advanced settings of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page listant les vues de filtrage de la partie supervision' : 'Add a page listing the filtering views of the monitoring part',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de créer des Access Tokens personnels (PAT)' : 'Ability to create Personal Access Tokens (PAT)',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page avec la liste des machines virtuelles répliquées' : 'Add a page with the list of replicated virtual machines',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Lors de l\'annulation d\'un job, possibilité de conserver les données déjà sauvegardées' : 'When a job is cancelled, it is possible to keep the data already saved',
        tag: 'BACK'
      }
    ]
  },
  '1.55.1': {
    options: {
      date: new Date('2021-07-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur les popovers qui sont superposés concernant les requêtes sur les pages vues' : 'Fix on the popovers which are superimposed concerning the queries on the page views',
        tag: 'MNT'
      }
    ]
  },
  '1.55.2': {
    options: {
      date: new Date('2021-08-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'erreurs mineures pour la création d\'access tokens personnels' : 'Fix minor bugs for the creation of personal access tokens',
        tag: 'IAM'
      }
    ]
  },
  '1.55.3': {
    options: {
      date: new Date('2021-08-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la barre de recherche sur la page des réseaux' : 'Fix search bar on the networks page',
        tag: 'INF'
      }
    ]
  },
  '1.55.4': {
    options: {
      date: new Date('2021-08-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des filtres sur le tableau des machines virtuelles' : 'Fix filters on the virtual machine table',
        tag: 'CMP'
      }
    ]
  },
  1.56: {
    options: {
      date: new Date('2021-08-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la liste des machines n\'ayant pas de politique de sauvegarde sur la page des politiques' : 'Add list of virtual machines without backup policy on the backup policy page',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction du champ nature sur la liste des tickets' : 'Fix nature field on the tickets list',
        tag: 'TICKET'
      }
    ]
  },
  '1.56.1': {
    options: {
      date: new Date('2021-08-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Les filtres ne sont pas mis à jour lors du rafraichissement des machines virtuelles sans SLA' : 'Filters are not updated when refreshing virtual machines without SLA',
        tag: 'BACK'
      }
    ]
  },
  '1.56.2': {
    options: {
      date: new Date('2021-08-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de la traduction des types de services et des statuts de tickets' : 'Update translation of services types and tickets status',
        tag: 'GEN'
      }
    ]
  },
  '1.56.3': {
    options: {
      date: new Date('2021-08-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de la traduction des types de services et des statuts de tickets' : 'Update translation of services types and tickets status',
        tag: 'GEN'
      }
    ]
  },
  1.57: {
    options: {
      date: new Date('2021-09-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Lors de la création d\'un disque virtuel, il est possible de selectionner manuellement le contrôleur SCSI' : 'When creating a virtual disk, it is possible to manually select the SCSI controller',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Lors d\'une migration de stockage, il est désormais possible de choisir un stockage de destination pour chaque disque' : 'During a storage migration, it is now possible to choose a destination storage for each disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton sur la liste des machines virtuelles par politique permettant un export de la liste en format CSV' : 'Add a button on the list of virtual machine by policy allowing an export of the list in CSV format',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout du facteur d\'offloading TSM sur la page du SPP dans la partie infra' : 'Add the TSM offloading factor on the SPP page in the infrastructure section',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout du champs titre lors de la création d\'un ticket' : 'Add a title field for ticket creation',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de nouvelles traductions' : 'Add new translations',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction du nombre de services monitorés sur le dashboard monitoring' : 'Correction of the monitored services number on the monitoring dashboard',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Changement du format de la date et heure dans la partie monitoring et ticket lorsque la langue est en anglais' : 'Change the date and time format in the monitoring and ticket section when the language is set to english',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton dans la page des vues permettant la redirection vers la vue choisie' : 'Add a button in the views page allowing the redirection to the chosen view',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton permettant l\'ajout de tags sur la liste des équipements' : 'Add a button allowing the addition of tags on the list of equipment',
        tag: 'MNT'
      }
    ]
  },
  1.58: {
    options: {
      date: new Date('2021-09-13')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de déclarer un incident de sécurité' : 'Ability to report an incident issue',
        tag: 'GEN'
      }
    ]
  },
  '1.58.1': {
    options: {
      date: new Date('2021-09-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des fichiers qui ne sont pas sous forme de lien' : 'Fix display of files which are not as link',
        tag: 'DOC'
      }
    ]
  },
  1.59: {
    options: {
      date: new Date('2021-09-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton sur la liste des utilisateurs permettant un export de la liste en format CSV' : 'Add a button on the list of users allowing an export of the list in CSV format',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout des taches sur les details d\'une machine virtuelle' : 'Add tasks on virtual machine details',
        tag: 'CMP'
      }
    ]
  },
  '1.59.1': {
    options: {
      date: new Date('2021-09-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d’affichage quand le nom de la pièce jointe est trop long dans un ticket' : 'Fix a display bug when the name of the attachment is too long in a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'application des filtres qui renvoient en haut de la page' : 'Fix a bug on the application of filters that return to the top of the page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction sur les ovf properties de type boolean ne fonctionnent pas lors du déploiement d\'un ovf' : 'Fix the ovf properties of type boolean do not work when deploying an ovf',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction sur certaines page confluence qui ne s\'affichent pas' : 'Fix on some confluence pages that don\'t display',
        tag: 'DOC'
      }
    ]
  },
  '1.59.2': {
    options: {
      date: new Date('2021-09-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des propriétés ovf de type booléen ne fonctionnant pas' : 'Fix ovf properties of boolean type not working',
        tag: 'CMP'
      }
    ]
  },
  '1.59.3': {
    options: {
      date: new Date('2021-09-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Suppression des modifications liées aux fichiers' : 'Delete changes related to files',
        tag: 'DOC'
      }
    ]
  },
  '1.59.4': {
    options: {
      date: new Date('2021-09-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des rôles lors de l\'édition des droits d\'un utilisateur' : 'Correction of the display of the roles when editing the rights of a user',
        tag: 'IAM'
      }
    ]
  },
  '1.60': {
    options: {
      date: new Date('2021-09-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du stockage total utilisé sur le detail d\'une machine virtuelle' : 'Add the total storage used on the detail of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Remplissage des catalogues avec l\'item par défaut à la création d\'un ticket' : 'Filling the catalogs with the default item at the creation of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Les champs catalogues ne sont plus requis pour créer un ticket' : 'Catalog fields are no longer required to create a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout des observateurs sur le detail d\'un ticket' : 'Add viewers to the details of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier les observateurs d\'un ticket' : 'Ability to edit the viewers of a ticket',
        tag: 'TICKET'
      }
    ]
  },
  '1.60.1': {
    options: {
      date: new Date('2021-09-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur l\'affichage des adresses IP d\'une machine virtuelle' : 'Fix a display bug of the IP addresses of a virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '1.60.2': {
    options: {
      date: new Date('2021-09-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la pagination sur la page services' : 'Fix paginate on services page',
        tag: 'MNT'
      }
    ]
  },
  '1.60.3': {
    options: {
      date: new Date('2021-09-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur la création de tickets' : 'Fix create tickets',
        tag: 'TICKET'
      }
    ]
  },
  '1.60.4': {
    options: {
      date: new Date('2021-09-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des catalogues' : 'Fix the display of the catalogs',
        tag: 'TICKET'
      }
    ]
  },
  '1.60.5': {
    options: {
      date: new Date('2021-09-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des catalogues' : 'Fix the display of the catalogs',
        tag: 'TICKET'
      }
    ]
  },
  '1.60.6': {
    options: {
      date: new Date('2021-09-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des catalogues sur l\'edition d\'un ticket' : 'Fix the display of the catalogs on ticket edition',
        tag: 'TICKET'
      }
    ]
  },
  '1.60.7': {
    options: {
      date: new Date('2021-09-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Remplacer \'Administrateur\' par \'Tous les rôles\' dans la FAQ' : 'Replace \'Administrator\' with \'All roles\' in the FAQ',
        tag: 'GEN'
      }
    ]
  },
  '1.60.8': {
    options: {
      date: new Date('2021-10-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout des dernières versions manquantes dans les notes de mise à jour' : 'Add the latest missing versions in the release notes',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une précision dans la FAQ concernant la suppression d\'un utilisateur' : 'Add a clarification in the FAQ regarding the deletion of a user',
        tag: 'GEN'
      }
    ]
  },
  '1.60.9': {
    options: {
      date: new Date('2021-10-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage feature-flipping associé au module sauvegarde' : 'Fix feature-flipping display associated with backup',
        tag: 'BACK'
      }
    ]
  },
  '1.60.10': {
    options: {
      date: new Date('2021-10-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction hyperlien vcenter' : 'Fix vcenter hyperlink',
        tag: 'CMP'
      }
    ]
  },
  '1.60.11': {
    options: {
      date: new Date('2021-10-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour exporter les activités récentes en csv' : 'Add button to export recent activities to csv',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour exporter les activités archivées en csv' : 'Add button to export archived activities to csv',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une entrée FAQ concernant l\'emplacement des activités' : 'Add a FAQ entry regarding the location of activities',
        tag: 'GEN'
      }
    ]
  },
  '1.60.12': {
    options: {
      date: new Date('2021-10-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage feature-flipping associé au module sauvegarde' : 'Fix feature-flipping display associated with backup',
        tag: 'BACK'
      }
    ]
  },
  1.61: {
    options: {
      date: new Date('2021-10-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage dans la barre latérale lorsque les noms sont trop longs' : 'Fix the display in the sidebar when names are too long',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des tooltip \'Informations\' sur la page des services' : 'Fix the display of tooltips \'Informations\' on the services page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Affichage du nombre d\'éléments au total au pied des tableaux' : 'Display of the total number of elements at the foot of the tables',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Actualisation des données affichées suite à la désassignation d\'une politique de sauvegarde' : 'Update of the data displayed following the unassignment of a backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation lors du démontage d\'un disque virtual' : 'Add a validation when unmounting a virtual disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage complet des Ids SCSI sur les disques virtuels' : 'Update of the full display of SCSI Ids on virtual disks',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'erreurs sur la récupération des services' : 'Fix errors in getting the services',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un champ de recherche par Id sur la liste des tickets renvoyant vers les details du ticket' : 'Add a search field by Id on the ticket list that links to the ticket details',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton actualisation des données sur les details d\'un ticket' : 'Add a refresh button on the ticket details',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bandeau d\'information à la création d\'un ticket avec un lien renvoyant vers ce ticket' : 'Add a banner when a ticket is created with a link to the ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité connecter et déconnecter un lecteur CDROM' : 'Ability to connect and disconnect a CDROM drive',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de trier alphabétiquement sur la liste des éléments d\'un catalogue' : 'Ability to sort alphabetically on the list of items in a catalog',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option cluster de stockage sur le déploiement d\'un template depuis la page machines virtuelles' : 'Add the storage cluster option to the deployment of a template from the virtual machines page',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de supprimer un paramètre de configuration avancé sur une machine virtuelle' : 'Ability to remove an advanced configuration setting on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la sélection, par utilisateur, d\'une vue par défaut pour chacun des chemins existants depuis la page \'Vues\'' : 'Add the selection, by user, of a default view for each of the existing paths from the "Views" page',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de mettre à jour la vue par défaut sur les pages supportant la fonctionnalité' : 'Ability to update the default view on pages that support the feature',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage sur la durée de résolution d\'un ticket' : 'Fix the display of the duration of a ticket\'s resolution',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Un utilisateur n\'ayant pas vérifié son email est désormais grisé sur la liste des utilisateurs et ses droits ne peuvent être modifiés' : 'A user who has not verified his email is now grayed out on the list of users and his rights cannot be edited',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier l\'appelant d\'un ticket' : 'Ability to modify the requester of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de filtrer par l\'appelant la liste des tickets' : 'Ability to filter the list of tickets by requester',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'écraser les filtres d\'une vue lors du clique sur \'Sauvegarder\'' : 'Ability to overwrite the filters of a view when clicking on \'Save\'',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction des redirection sur les graphiques de supervision' : 'Fix redirection on supervision graphs',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction des redirection sur les graphiques de tickets' : 'Fix redirection on ticket graphics',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une date d\'expiration lors de la création d\'un PAT' : 'Add an expiration date when creating a PAT',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Correction des filtres persistants lors du changement de vues' : 'Fix persistent filters when changing views',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Amélioration des graphiques sur les machines couvertes par une politique de sauvegarde' : 'Improved graphics on machines covered by a backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de trier les disques virtuels par nom' : 'Ability to sort virtual disks by name',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Traduction des statuts de tickets' : 'Translation of ticket status',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout des filtres de supervision et notifications sur la liste des services' : 'Add monitoring and notifications filters on the services list',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Les fichiers en duplicat ne s\'affichent pas correctement sur une page documentation' : 'Duplicate files are not displayed correctly on a documentation page',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Désactivation temporaire du bouton santé des appliances' : 'Temporary disable of the appliance health button',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de la date des fichiers attachés à un ticket' : 'Fix the date of the files attached to a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour exporter les infos de sauvegarde des machines virtuelles depuis la page Spectrum Protect Plus dans la partie infrastructure' : 'Add a button to export virtual machine backup info from the Spectrum Protect Plus page in the infrastructure part',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton pour exporter les infos des machines virtuelles depuis la page des machines virtuelles' : 'Add a button to export virtual machine info from virtual machine page',
        tag: 'CMP'
      }
    ]
  },
  '1.61.1': {
    options: {
      date: new Date('2021-10-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la création d\'un access token personnel' : 'Fix personal access token creation',
        tag: 'IAM'
      }
    ]
  },
  1.62: {
    options: {
      date: new Date('2021-10-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter des fichiers à la création d\'un ticket' : 'Ability to add files to the ticket creation',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout du mode "Avancé" sur la création d\'un ticket avec les champs "Appelant" et "Référence client"' : 'Add "Advanced" mode on the creation of a ticket with the fields "Requester" and "Customer reference"',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Amélioration et correction du suivi de publication d\'un fichier dans une bibliothèque de contenu' : 'Improve and fix the upload tracking of a file in a content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir le type de suppression d\'une machine virtuelle' : 'Ability to choose the type of deletion of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page par host dans la partie infrastructure' : 'Add a page per host in the infrastructure section',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la date d\'expiration sur la liste des PAT' : 'Add the expiration date to the list of PAT',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout de la mécanique de redirection une fois l\'utilisateur connecté lors du partage d\'un lien SHIVA' : 'Add redirect mechanics once the user is logged in when sharing a SHIVA link',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Intégration de l\'outil de suivi d\'erreurs "Sentry" au projet' : 'Integration of the "Sentry" error tracking tool into the project',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Activation de la lecture seule sur l\'édition des champs "Centre de competence", "Appelant", "Propriétaire" et "Contact" d\'un ticket' : 'Enable read-only editing of the "Competence center", "Requester", "Owner" and "Contact" fields of a ticket',
        tag: 'TICKET'
      },
    ]
  },
  '1.62.1': {
    options: {
      date: new Date('2021-10-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la redirection à la connexion' : 'Fix redirect at the login',
        tag: 'GEN'
      }
    ]
  },
  '1.62.2': {
    options: {
      date: new Date('2021-11-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Entrées dans la FAQ "Comment utiliser les APIs Shiva pour automatiser des taches?" et "Pourquoi certains utilisateurs sont grisés?"' : 'Entries in the FAQ "How do I use Shiva APIs to automate tasks?" and "Why are some users grayed out?"',
        tag: 'GEN'
      }
    ]
  },
  1.63: {
    options: {
      date: new Date('2021-11-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de parcourir un datastore pour inventorier une machine virtuelle à partir d\'un fichier vmx' : 'Ability to browse a datastore to inventory a virtual machine from a vmx file',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de la récupération des équipements et services sur les details d\'un ticket' : 'Fix of the get of equipment and services on the details of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'edition du centre de compétence et du propriétaire sur les détails d\'un ticket' : 'Update the competence center and owner\'s edition on the details of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de la liste des tickets liés à un équipement' : 'Add the list of tickets related to an equipment',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Sur la création d\'un ticket ajout de l\'appelant par défaut et proposer l\'édition contact en mode avancé' : 'When creating a ticket, add the default requester and ask for the contact in advanced mode',
        tag: 'TICKET'
      }
    ]
  },
  '1.63.1': {
    options: {
      date: new Date('2021-11-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la récupération des utilisateurs d\'un centre de compétence' : 'Fix of the get of users from a competence center',
        tag: 'TICKET'
      },
    ]
  },
  '2.0': {
    options: {
      date: new Date('2021-11-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Refonte du moteur graphique' : 'Redesign of the graphic engine',
        tag: 'GEN'
      },
    ]
  },
  '2.0.1': {
    options: {
      date: new Date('2021-11-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs suite à la refonte du moteur graphiques' : 'Fixes bugs after the redesign of the graphics engine',
        tag: 'GEN'
      },
    ]
  },
  '2.1': {
    options: {
      date: new Date('2021-12-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du champ synthèse sur les details d\'un ticket' : 'Add a summary field on the details of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Amélioration de la modal de migration de machine virtuelle' : 'Improved virtual machine migration modal',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de bugs suite à la refonte du moteur graphiques' : 'Fixes bugs after the redesign of the graphics engine',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de la consommation lors de la selection des hosts et datastores sur toutes les modals' : 'Add consumption when selecting hosts and datastores on all modals',
        tag: 'CMP'
      }
    ]
  },
  '2.2': {
    options: {
      date: new Date('2021-12-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de bugs suite à la refonte du moteur graphiques' : 'Fixes bugs after the redesign of the graphics engine',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de la page hébergement / racks' : 'Add the hosting / racks page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la page hébergement / IP publiques' : 'Add the hosting / public IP page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la page hébergement / équipements' : 'Add the hosting / devices page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la page hébergement / circuits telecom' : 'Add the hosting / telecom circuits page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la page réseaux' : 'Add the networks page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter, supprimer et éditer un réseau' : 'Ability to add, delete and edit a network',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'informations liées aux hosts sur les pages d\'hosts et host clusters' : 'Add information related to hosts on the hosts and hosts clusters pages',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre par date sur les sauvegardes d\'une machine virtuelle' : 'Add a filter by date on the backup of virtual machine',
        tag: 'BACK'
      }
    ]
  },
  '2.2.1': {
    options: {
      date: new Date('2021-12-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la récupération des données d\'hébergement' : 'Fix getting hosting data',
        tag: 'INF'
      }
    ]
  },
  '2.3': {
    options: {
      date: new Date('2021-12-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des graphiques sur le tableau de bord' : 'Fix the display of the graphs on the dashboard',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Lors de l\'assignation de droits, les rôles non possédés et donc non assignables par l\'utilisateur, sont désactivés' : 'When assigning rights, roles not owned and therefore not assignable by the user are disabled',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de graphiques sur la page infrastructure/SPP' : 'Fix graphics display on infrastructure/SPP page',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout du choix de la destination lors du clonage d\'une machine virtuelle' : 'Add destination choice when cloning a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre sur la liste des utilisateurs pour filtrer par utilisateurs externes ou internes' : 'Add a filter on the list of users to filter by external or internal users',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une étape pour configurer le réseau, lors du déploiement d\'un template' : 'Add a step to configure the network, when deploying a template',
        tag: 'CMP'
      }
    ]
  },
  '2.3.1': {
    options: {
      date: new Date('2021-12-13')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la création d\'un ticket' : 'Fix create of ticket',
        tag: 'TICKET'
      }
    ]
  },
  '2.3.2': {
    options: {
      date: new Date('2021-12-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des options sur une machine virtuelle en mode "Test"' : 'Fix the display of options on a virtual machine in "Test" mode',
        tag: 'CMP'
      }
    ]
  },
  '2.4': {
    options: {
      date: new Date('2021-12-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une étape pour configurer le réseau, lors du déploiement d\'un template' : 'Add a step to configure the network, when deploying a template',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la version de VMware tools sur les informations d\'une machine virtuelle' : 'Add the version of VMware tools on the information of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'edition de la RAM sur une machine virtuelle' : 'Fix RAM edition on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Suppression du bouton pour exécuter une sauvegarde sur le tableau des politiques de sauvegarde d\'un disque' : 'Removes the button to run a backup on the backup policy table of a disk',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des tableaux de rapport de sauvegarde' : 'Fix display of backup report tables',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Supprimer temporairement l\'edition d\'un réseau sur la page Réseaux' : 'Temporarily remove the network\'s edition on the Networks page',
        tag: 'NET'
      }
    ]
  },
  '2.4.1': {
    options: {
      date: new Date('2021-12-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug concernant la migration inter-datacenters' : 'Fix a bug about inter-datacenter migration',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'exploration d\'un datastore qui limitait les fichiers affichés à 10' : 'Fix datastore exploration that limited the files displayed to 10',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'édition d\'un adaptateur réseau qui ne fonctionnait pas dans certains cas' : 'Fix a network adapter that did not work in some cases',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de chercher sur certaines listes dynamiques (exemples: choix de réseaux sur la création ou migration de machine virtuelle, choix d\'une vue sur la partie supervision...)' : 'Ability to search on some dynamic lists (examples: choice of networks on the creation or migration of virtual machine, choice of a view on the supervision part...)',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de guillemets sur les noms d\'objets dans les notifications (exemples: noms de machines virtuelles, nom de ticket...)' : 'Add quotes to object names in notifications (examples: virtual machine names, ticket names...)',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la pagination sur la liste des machines virtuelles par politique de sauvegarde' : 'Fix paging on virtual machines list by backup policy',
        tag: 'BACK'
      },
    ]
  },
  '2.4.2': {
    options: {
      date: new Date('2021-12-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des rapports de sauvegarde' : 'Fix backup report display',
        tag: 'BACK'
      }
    ]
  },
  '2.4.3': {
    options: {
      date: new Date('2021-12-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug lié à l\'édition d\'un ticket' : 'Fix a bug related to the edition of a ticket',
        tag: 'TICKET'
      }
    ]
  },
  '2.4.4': {
    options: {
      date: new Date('2021-12-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la fréquence sur les rapports de sauvegarde' : 'Fix frequency display on backup reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug lié à l\'actualisation d\'une page contenant un tableau dépliable' : 'Fix a bug related to the refresh of a page containing a collapsible table',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un overlay au chargement d\'un élément de tableau déplié' : 'Add an overlay when loading an oppened array element',
        tag: 'GEN'
      }
    ]
  },
  '2.4.5': {
    options: {
      date: new Date('2021-12-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration de la vitesse de chargement de la page SPP dans la partie infrastructure' : 'Improvement of the loading speed of the SPP page in the infrastructure part',
        tag: 'INF'
      }
    ]
  },
  '2.4.6': {
    options: {
      date: new Date('2021-12-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Lors de l\'actualisation des données d\'une machine virtuelle, ne pas changer d\'onglet sur la machine virtuelle' : 'When refreshing the data of a virtual machine, do not change the tab on the virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le VMotion en mode "stockage uniquement"' : 'Fix a bug on VMotion in "storage only" mode',
        tag: 'CMP'
      }
    ]
  },
  '2.4.7': {
    options: {
      date: new Date('2021-12-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug permettant d\'éditer les roles d\'un utilisateur avant que l\'email de ce dernier ne soit vérifié' : 'Fixed a bug that allowed editing a user\'s roles before the user\'s email was verified',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la redirection vers un lien faq n\'ouvre pas directement le sujet selectionné' : 'Fix a bug on the redirection to a faq link that does not open directly the selected topic',
        tag: 'GEN'
      }
    ]
  },
  '2.4.8': {
    options: {
      date: new Date('2021-12-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Suppression de l\'édition des paramètres avancés' : 'Remove advanced settings edition',
        tag: 'CMP'
      }
    ]
  },
  '2.5': {
    options: {
      date: new Date('2022-01-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'ajout d\'observateurs sur un ticket' : 'Fix a bug on the addition of watchers on a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de validation sur le titre d\'un ticket lors de son édition' : 'Add validation on the title of a ticket when editing it',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction des redirections sur les références dans la FAQ' : 'Fix redirections on references in the FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de l\'option "Hotplug" sur la RAM et le CPU d\'une machine virtuelle' : 'Fix the display of the "Hotplug" option on the RAM and CPU of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la pagination sur les bibliothèques de contenu' : 'Fix pagination on content libraries',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction sur les filtres GTI et GTR sur la liste des tickets' : 'Fix GTI and GTR filters on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage des informations de sauvegarde sur le tableau de bord' : 'Edit the display of backup information on the dashboard',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de précision sur la fréquence des politiques de sauvegarde' : 'Add precision on the frequency of backup policies',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre pour les utilisateurs vérifiés ou non' : 'Add a filter for verified and unverified users',
        tag: 'IAM'
      }
    ]
  },
  '2.5.1': {
    options: {
      date: new Date('2022-01-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'ordre d\'affichage des colonnes dans les rapports de sauvegarde' : 'Fix a bug in the order in which columns were displayed in backup reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d’affichage dans la partie sauvegarde des dates dans les logs d\'une session de job' : 'Fix a display bug in the save dates part of the job session logs',
        tag: 'BACK'
      }
    ]
  },
  '2.6': {
    options: {
      date: new Date('2022-01-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de l\'outil controlant la console d\'une machine virtuelle' : 'Update of the tool controlling the console of a virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '2.7': {
    options: {
      date: new Date('2022-01-05')
    },
    data: [
      {
        text: lang === 'fr' ? 'Suivi de l\'activité et synchronisation de l\'affichage lors de la suppression d\'un utilisateur' : 'Activity tracking and display synchronization when a user is deleted',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajouter le nombre de machines virtuelles concernées sur un rapport de sauvegardes' : 'Add the number of virtual machines on a backup report',
        tag: 'BACK'
      }
    ]
  },
  '2.7.1': {
    options: {
      date: new Date('2022-01-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'utilisation de la console' : 'Fix use of console',
        tag: 'CMP'
      }
    ]
  },
  '2.7.2': {
    options: {
      date: new Date('2022-01-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur le clavier de la console' : 'Fix keyboard of console',
        tag: 'CMP'
      }
    ]
  },
  '2.7.3': {
    options: {
      date: new Date('2022-01-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du téléchargement des fichiers documentation' : 'Fix download of documentation files',
        tag: 'DOC'
      }
    ]
  },
  '2.8': {
    options: {
      date: new Date('2022-01-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Refonte de la composition des urls Shiva' : 'Redesign of the composition of Shiva urls',
        tag: 'GEN'
      }
    ]
  },
  '2.8.1': {
    options: {
      date: new Date('2022-01-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la redirection dans le cas où l\'url est incorrecte' : 'Fix the redirection in case the url is incorrect',
        tag: 'GEN'
      }
    ]
  },
  '2.8.2': {
    options: {
      date: new Date('2022-01-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'utilisation de la console' : 'Fix use of console',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du téléchargement des fichiers documentation' : 'Fix download of documentation files',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Correction sur le clavier de la console' : 'Fix keyboard of console',
        tag: 'CMP'
      }
    ]
  },
  '2.9': {
    options: {
      date: new Date('2022-01-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une alerte sur les machines virtuelles en statut "invalid"' : 'Add an alert on virtual machines in "invalid" status',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'alertes (consolidation requise, esx indisponible, machine virtuelle en statut "invalid") au dessus du tableau des machines virtuelles' : 'Add alerts (consolidation required, esx unavailable, virtual machine in "invalid" status) above the virtual machine table',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le champ statut d\'un ticket qui disparait lorsque le statut passe à "ouvert en cours"' : 'Fix a bug in the status field of a ticket that disappeared when the status changed to "open in progress"',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de la traduction anglaise sur la validation des champs requis' : 'Fix English translation on validation of required fields',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une barre de recherche sur la liste des machines virtuelles d\'une politique de sauvegarde' : 'Add a search bar to the list of virtual machines in a backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug pour relancer une session de job en statut partial' : 'Fix a bug to retry a job session in partial status',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la fréquence d\'une politique de sauvegarde pouvant afficher "undefined"' : 'Fix the display of the frequency of a backup policy that could show "undefined"',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des observateurs sur le detail d\'un ticket' : 'Fix the display of watchers on the detail of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la réduction à froid de la RAM d\'une machine virtuelle' : 'Fix a bug on the cold reduction of the RAM of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'option pour mettre à jour le materiel' : 'Fix the option to update the hardware',
        tag: 'CMP'
      }
    ]
  },
  '2.9.1': {
    options: {
      date: new Date('2022-01-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des graphiques sur les details d\'un équipement' : 'Fix the display of graphics on the details of an equipment',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction du déploiement d\'un template depuis la page des machines virtuelles en cliquant sur "nouvelle machine virtuelle"' : 'Fix template deployment from the virtual machine page when clicking on "new virtual machine"',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'ajout de nouveaux items sur inventory' : 'Fix adding new items to the inventory',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction sur la validation du champ status lors du passage en "ouvert en cours"' : 'Fix on the validation of the status field when switching to "open in progress".',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage et application des recommendations d\'un datastore cluster au niveau DRS et mise en maintenance' : 'Fix the display and apply the recommendations of datstore cluster for DRS and maintenance options',
        tag: 'INF'
      }
    ]
  },
  '2.10': {
    options: {
      date: new Date('2022-01-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration de l\'experience SSO' : 'Improvement of the SSO experience',
        tag: 'IAM'
      }
    ]
  },
  '2.11': {
    options: {
      date: new Date('2022-01-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du module Bastion' : 'Add Bastion module',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Ajout des swaggers Bastion et Scup' : 'Add Bastion and Scup swaggers',
        tag: 'GEN'
      }
    ]
  },
  '2.12': {
    options: {
      date: new Date('2022-01-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour des informations de sauvegarde sur le tableau de bord' : 'Update backup information on the dashboard',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout de la liste des derniéres sauvegardes de machine virtuelle en échec sur la page des rapports de sauvegardes' : 'Add list of last failed virtual machine backups on the backup reports page',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir un host cluster ou un nouveau datacenter lors de l\'export d\'une machine virtuelle en tant que template' : 'Ability to choose a host cluster or a new datacenter when exporting a virtual machine as a template',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre centre de compétence sur la liste des tickets' : 'Add a competence center filter to the tickets list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une colonne appelant sur la liste des tickets' : 'Add a requester column to the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout de la réinitialisation d\'adresse mail pour un utilisateur local' : 'Add mail address reset for a local user',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir un contrôleur IDE lors de la création d\'un disque virtuel' : 'Ability to choose an IDE controller when creating a virtual disk',
        tag: 'CMP'
      }

    ]
  },

  '2.13': {
    options: {
      date: new Date('2022-02-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajouter le nom des dvswitch sur la liste des vlans proposés' : 'Add the name of the dvswitch on the list of proposed vlans',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de faire une recherche de page sur la partie Documentation' : 'Ability to search for a page on the Documentation part',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des libéllés pour entrer et sortir un ESX de maintenance' : 'Update of labels to enter and exit a maintenance ESX',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de la validation sur la capacité maximum lors de l\'édition d\'un disque virtuel' : 'Fix of the validation on the maximum capacity when editing a virtual disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du tri par rôles sur la liste des utilisateurs' : 'Fix of the sorting by roles on the list of users',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un champ de recherche sur l\'exploration d\'un datastore' : 'Add a search field on datastore exploration',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de voir les activités Shiva liées depuis la machine virtuelle' : 'Ability to see the Shiva activities linked from the virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '2.14': {
    options: {
      date: new Date('2022-02-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour du fonctionnement du module IAM' : 'Update of the IAM module',
        tag: 'IAM'
      },
    ]
  },
  '2.14.1': {
    options: {
      date: new Date('2022-02-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Désactivation temporaire de l\'affichage des mises à jour disponibles pour un ESX' : 'Temporarily disable the display of available updates for an ESX',
        tag: 'INF'
      },
    ]
  },
  '2.15': {
    options: {
      date: new Date('2022-02-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mettre en chargement une machine virtuelle lors de la prise d\'une snapshot' : 'Load a virtual machine when taking a snapshot',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de faire un clic droit sur les boutons de redirection pour ouvrir la page dans un nouvel onglet' : 'Ability to right-click on the redirect buttons to open the page in a new tab',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Modification de la migration Vmotion lors de la selection "Migrer uniquement les ressources de calcul"' : 'Edit the Vmotion migration when selecting "Migrate only compute resources"',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Modification de la colonne "Manager" sur la liste des machines virtuelles' : 'Edit the "Manager" column on the list of virtual machines',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'informations lors d\'une restauration de sauvegarde' : 'Add information when restoring a backup',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout du choix ssh/rdp' : 'Add ssh/rdp choice',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Correction du tooltip sur la recherche de pages confluence' : 'Fix tooltip on confluence page search',
        tag: 'DOC'
      }
    ]
  },
  '2.16': {
    options: {
      date: new Date('2022-02-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité d\'éditer la description d\'une appliance bastion' : 'Ability to edit the description of a bastion appliance',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Amélioration sur le detail d\'un ticket en permettant l\'édition meme si des données mettent du temps à charger' : 'Improvement on the detail of a ticket by allowing the edition even if data takes time to load',
        tag: 'TICKET'
      }
    ]
  },
  '2.17': {
    options: {
      date: new Date('2022-03-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de supprimer un fichier sur un ticket' : 'Ability to delete a file on a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Amélioration de la modal d\'édition d\'un disque' : 'Improvement of the editing mode of a disc',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de traduction et modification d\'interface sur la partie Bastion' : 'Add translation and interface modification on the Bastion part',
        tag: 'BST'
      }
    ]
  },
  '2.17.1': {
    options: {
      date: new Date('2022-03-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la récupération des ressources de calcul lors de l\'inventaire d\'un fichier vmx depuis un datastore' : 'Fix get of compute resources when inventorying a vmx file from a datastore',
        tag: 'INF'
      }
    ]
  },
  '2.17.2': {
    options: {
      date: new Date('2022-03-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Désactivation de l\'edition du statut SDRS provoquant des erreurs VMware' : 'Disable SDRS status edition causing VMware errors',
        tag: 'INF'
      }
    ]
  },
  '2.17.3': {
    options: {
      date: new Date('2022-03-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Désactivation de l\'edition du statut Host DRS provoquant des erreurs VMware' : 'Disable Host DRS status edition causing VMware errors',
        tag: 'INF'
      }
    ]
  },
  '2.18': {
    options: {
      date: new Date('2022-03-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mises à jour des routes pour télécharger et importer des fichiers sur des tickets' : 'Route updates for downloading and importing files on tickets',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de l\'alerte concernant la consolidation d\'une machine virtuelle' : 'Fix the display of the alert concerning the consolidation of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction lors de la prise de snapshot pour désactiver aussitôt l\'édition des disques' : 'Fix when taking snapshot to disable disk editing immediately',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la création d\'une machine virtuelle lors du déploiement d\'un template depuis la liste des machines virtuelles' : 'Fix the creation of a virtual machine when deploying a template from the list of virtual machines',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ré-intégration des appels API Scup concernant les informations de mises à jour des ESXs' : 'Re-integration of Scup API calls regarding ESXs update informations',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout du module TAG' : 'Add the TAG module',
        tag: 'TAG'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter et supprimer des tags sur plusieurs machines virtuelles à la fois' : 'Ability to add and remove tags on multiple virtual machines at once',
        tag: 'TAG'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'afficher et supprimer des tags sur une machines virtuelle' : 'Ability to display and delete tags on a virtual machine',
        tag: 'TAG'
      },
      {
        text: lang === 'fr' ? 'Possibilité de filtrer les machines virtuelles en fonction des tags' : 'Ability to filter virtual machines based on tags',
        tag: 'TAG'
      }
    ]
  },
  '2.18.1': {
    options: {
      date: new Date('2022-03-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur l\'affichage des tags' : 'Fix displaying tags',
        tag: 'TAG'
      },
    ]
  },
  '2.18.2': {
    options: {
      date: new Date('2022-03-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des alertes de consolidation d\'une machine virtuelle' : 'Fix on the display of the consolidation alerts of a virtual machine',
        tag: 'CMP'
      },
    ]
  },
  '2.19': {
    options: {
      date: new Date('2022-03-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une option pour afficher la description et les commentaires en texte brut sans interpréation HTML' : 'Add an option to display the description and comments in plain text without HTML interpretation',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de changer le type d\'assignation d\'une adresse MAC d\'un adaptateur réseaux' : 'Ability to change the type of MAC address assignment of a network adapter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de passer un ticket en attente client vers ouvert planifié à la création d\'un commentaire' : 'Ability to switch a ticket from customer validation to open planned when a comment is created',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la modal pour la mise en maintenance des datastores' : 'Fix the display of the modal for the maintenance of datastores',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de sessions de connexion bastion' : 'Add bastion connection session',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Correction d\'affichage sur les graphiques des travaux par politiques de sauvegarde' : 'Fix display on graphs of jobs by backup policies',
        tag: 'BACKUP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'affichage des fréquences sur les politiques de sauvegarde lorsque la fréquence est Mensuel avec "Dernier jour du mois" selectionné' : 'Fix frequency display on backup policies when frequency is Monthly with "Last day of month" selected',
        tag: 'BACKUP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'afficher les graphiques des travaux par politiques de sauvegarde sur 7 jours et 30 jours en plus de 24h et 48h' : 'Ability to display graphs of jobs by backup policies over 7 days and 30 days in addition to 24 and 48 hours',
        tag: 'BACKUP'
      }
    ]
  },
  '2.20': {
    options: {
      date: new Date('2022-03-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de supprimer une session' : 'Ability to delete a session',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Possibilité de consulter les activités liées à une session' : 'Ability to view activities related to a session',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Correction sur le bouton permettant de sortir un datastore de maintenance' : 'Fix on the button to stop a maintenance datastore',
        tag: 'INF'
      }
    ]
  },
  '2.21': {
    options: {
      date: new Date('2022-04-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout des notifications liées à un service' : 'Add notifications related to a service',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter des observateurs à la création avancée d\'un ticket' : 'Ability to add watchers to the advanced creation of a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des rôles dans la FAQ' : 'Update of roles in the FAQ',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des VMware tools en fonction de leur provenance' : 'Update of the display of VMware tools according to their origin',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de réinscrire un utilisateur' : 'Ability to reenroll a user',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des observateurs sur un ticket' : 'Fix of the display of watchers on a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des choix réseaux sur la migration d\'une machine virtuelle' : 'Fix of the display of the network choices on the migration of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des vm-template et des options pour les déployer' : 'Update the display of vm-templates and options for deploying them',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la réinitialisation des formulaires à l\'ouverture d\'une modal' : 'Update form reset when opening a modal',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de forcer l\'accès au BIOS au démarrage d\'une machine virtuelle' : 'Ability to force BIOS access at virtual machine boot',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Optimisation de la récupération des rapports de sauvegarde' : 'Optimization of getting backup reports',
        tag: 'BACK'
      }
    ]
  },
  '2.21.1': {
    options: {
      date: new Date('2022-04-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des étapes de création de machine virtuelle depuis un modèle' : 'Fix steps to create virtual machines from template',
        tag: 'CMP'
      }
    ]
  },
  '2.21.2': {
    options: {
      date: new Date('2022-04-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'une erreur lors de la prise de snapshot' : 'Fix error when taking a snapshot',
        tag: 'CMP'
      }
    ]
  },
  '2.21.3': {
    options: {
      date: new Date('2022-04-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la liste des tickets' : 'Fix display of tickets list',
        tag: 'TICKET'
      }
    ]
  },
  '2.22': {
    options: {
      date: new Date('2022-04-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Optimisation de la récupération des réseaux' : 'Optimize networks retrieve',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du filtre par OS sur la liste des machines virtuelles' : 'Add OS filter on virtual machines list',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un champ de recherche sur les arborescences contenant beaucoup de données' : 'Add a search field on trees containing a lot of data',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la date à laquelle les données on été récupérées concernant les erreurs sur les dernières sauvegardes ' : 'Add the date when the data was retrieved about the errors on the last backups',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Affichage des informations de la machine virtuelle lors de la restauration d\'un disque ou d\'une machine virtuelle' : 'Display virtual machine informations when restoring a disk or a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Optimisation de la récupération des travaux par politiques de sauvegardes sur le tableau de bord' : 'Optimize jobs by policy retrieve on dashboard',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une confirmation pour annuler la création d\'un ticket' : 'Add confirm to cancel ticket creation',
        tag: 'TICKET'
      }
    ]
  },
  '2.22.1': {
    options: {
      date: new Date('2022-04-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'une erreur à la redirection vers la FAQ ou les APIs' : 'Fix error on redirect to FAQ or APIs',
        tag: 'GEN'
      }
    ]
  },
  '2.23': {
    options: {
      date: new Date('2022-04-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un champ de recherche sur les filtres OS et vlans sur la liste des machines virtuelles' : 'Add search field on filters by OS or vlans on virtual machine list',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Optimisation de la récupération des réseaux' : 'Optimize networks retrieve',
        tag: 'CMP'
      }
    ]
  },
  '2.23.1': {
    options: {
      date: new Date('2022-04-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la liste des tickets' : 'Fix display of tickets list',
        tag: 'TICKET'
      }
    ]
  },
  '2.23.2': {
    options: {
      date: new Date('2022-05-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la modal pour annuler la création d\'un ticket' : 'Fix modal to cancel ticket creation',
        tag: 'TICKET'
      }
    ]
  },
  '2.24': {
    options: {
      date: new Date('2022-05-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Affichage d\'indicateur d\'alarmes de type danger et critique sur la liste des machines virtuelles' : 'Display of danger and critical alarm indicators on the list of virtual machines',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des versions de mises à jour' : 'Update releases notes display',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'information lors du déploiement d\'une machine virtuelle depuis un modèle' : 'Add information when deploying a virtual machine from a template',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Afficher la liste et les details des alertes sur une machine virtuelle' : 'Display the list and details of alerts on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des details d\'un ticket ne possédant pas de sla' : 'Fix the display of details for a ticket without a sla',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Mise à jour du filtre des OS pour ne proposer que les OS utilisés' : 'OS filter updated to show only used OS',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage de la mémoire d\'un hostCluster et ajout d\'une alerte sur la mémoire gonflée' : 'Update the memory display of a HostCluster and add an alert on ballooned memory',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Affichage des changements API sur les notes de mises à jour' : 'Display of breaking changes on release notes',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de graphiques de performance sur certains services monitorés' : 'Add performance graphs on some monitored services',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Lors de l\'assignation d\'une politique de sauvegarde, ne pas afficher les politiques désactivées' : 'When assigning a backup policy, don\'t display disabled policies',
        tag: 'BACK'
      }
    ],
    breakingChanges: {
      Compute: {
        description: null,
        path: [
          {
            path: '/v1/vcenters/virtual_machines/power ',
            method: 'PATCH',
            changes: [
              lang === 'fr' ? 'Ajout obligatoire du paramètre datacenterId lorsque powerAction est égal à \'on\'' : 'Parameter datacenterId is now mandatory when powerAction is equal to \'on\'',
            ]
          },
        ]
      }
    }
  },
  '2.24.1': {
    options: {
      date: new Date('2022-05-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction, pour inventorier une machine virtuelles, de l\'affichage des dossiers comportant certains caractères' : 'Fix, for inventorying a virtual machine, the display of folders with some characters',
        tag: 'INF'
      },
    ]
  },
  '2.25': {
    options: {
      date: new Date('2022-06-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de copier les paramètres avancés d\'une machine virtuelle dans le presse-papier' : 'Ability to copy a virtual machine\'s extra config to the clipboard',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du tri des colonnes utilisation cpu et utilisation ram sur la liste des ESX dans la page hostCluster' : 'Fix sorting of cpu usage and ram usage columns on the ESX list in the hostCluster page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de la mise à jour de l\'url lors de l\'application des filtres tags, nom et nom d\'équipement su la liste des services' : 'Fix url update when applying tags, name and equipment name filters to the list of services',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter et consulter les arrêts planifiés de supervision depuis la liste des services' : 'Ability to add and view time period stop of supervision from the service list',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page listant les arrêts planifiés de supervision' : 'Add a page listing time periods stops of supervision',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter la somme de la taille des disques dans l\'export csv des machines virtuelles' : 'Ability to add the sum of disk sizes in the csv export of virtual machines',
        tag: 'CMP'
      },
    ]
  },
  '2.25.1': {
    options: {
      date: new Date('2022-06-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de contraintes pour un tenant SNC' : 'Add constraints for an SNC tenant',
        tag: 'GEN'
      }
    ]
  },
  '2.25.2': {
    options: {
      date: new Date('2022-06-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du traitement des données à l\'ouverture d\'une session bastion' : 'Fix data processing when opening a bastion session',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'ajout d\'une politique de sauvegarde sur une machine virtuelle pour un tenant non SNC' : 'Fix the added backup policy on a virtual machine for a non-SNC tenant',
        tag: 'BACK'
      }
    ]
  },
  '2.26': {
    options: {
      date: new Date('2022-06-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Intégration de la nouvelle API Inventory' : 'Integration of the new Inventory API',
        tag: 'INV'
      },
      {
        text: lang === 'fr' ? 'Correction de la liste des iso lorsque l\'extension est en majuscule' : 'Fix the iso list when the extension is capitalized',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'affichage des changements d\'API dans les informations de mises à jour' : 'Update information displaying API changes',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la recherche sur l\'exploration d\'un datastore' : 'Fix the search on the exploration of a datastore',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la suppression d\'un arrêt planifié' : 'Fix the deletion of a planned shutdown',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de la pop-up d\'erreur lors du passage en mode edition sur un ticket' : 'Fix error pop-up when switching to edit mode on a ticket',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des details d\'un arrêt planifié' : 'Update of the display of the details of a planned stop',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout du champ référence sur la page des circuits telecom' : 'Add reference field on the telecom circuits page',
        tag: 'HOUSING'
      },
      {
        text: lang === 'fr' ? 'Possibilité de déclarer des règles d\'affinité et anti-affinité entre des machines virtuelles depuis un hostCLuster' : 'Ability to declare affinity and anti-affinity rules between virtual machines from a hostCLuster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Optimisation du temps de récupération des tags sur la liste des machines virtuelles' : 'Optimization of the retrieval time of tags on the list of virtual machines',
        tag: 'TAG'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un logo SecNumCloud devant les tenant SecNumCloud dans la barre latérale' : 'Add a SecNumCloud logo in front of the SecNumCloud holders in the sidebar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Les données dynamiques de la partie infrastructure dans la barre latérale sont désormais triés par ordre alphabétique' : 'The dynamic data of the infrastructure part in the sidebar are now sorted alphabetically',
        tag: 'GEN'
      },
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'Migration des appels API inventory de compute vers un nouveau module dédié' : 'Migration of compute inventory API calls to a new dedicated module',
        path: [
          {
            path: '/v1/inventories/items/{id}',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Ajout d\'un paramètre typeId dans l\'URL, la route devient /v1/inventories/types/{typeId}/items/{id}' : 'Add a typeId parameter in the URL, the path becomes /v1/inventories/types/{typeId}/items/{id}',
            ]
          },
          {
            path: '/v1/inventories/batch/items',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/inventories/items' : 'The path is replaced by /v1/inventories/items',
              lang === 'fr' ? 'La route prend en paramètre un tableau d\'items et leur type Id' : 'The path takes in parameter an array of items and their type Id',
            ]
          },
          {
            path: '/v1/inventories/items',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'La route prend en paramètre un tableau d\'items et leur type Id' : 'The path takes in parameter an array of items and their type Id',
            ]
          },
          {
            path: '/v1/inventories/batch/items',
            method: 'PATCH',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/inventories/items' : 'The path is replaced by /v1/inventories/items',
              lang === 'fr' ? 'La route prend en paramètre un tableau d\'items et leur type Id' : 'The path takes in parameter an array of items and their type Id',
            ]
          },
          {
            path: '/v1/inventories/items',
            method: 'PATCH',
            changes: [
              lang === 'fr' ? 'La route prend en paramètre un tableau d\'items et leur type Id' : 'The path takes in parameter an array of items and their type Id',
            ]
          },
          {
            path: '/v1/inventories/batch/items',
            method: 'DELETE',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/inventories/items' : 'The path is replaced by /v1/inventories/items',
              lang === 'fr' ? 'La route prend en paramètre un tableau d\'uuid des items à supprimer et leur type Id' : 'The path takes in parameter an array of items to delete and their type Id',
            ]
          },
          {
            path: '/v1/inventories/batch/items/{id}',
            method: 'DELETE',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/inventories/items' : 'The path is replaced by /v1/inventories/items',
              lang === 'fr' ? 'La route prend en paramètre un tableau d\'uuid des items à supprimer et leur type Id' : 'The path takes in parameter an array of items to delete and their type Id',
            ]
          },
        ]
      }
    }
  },
  '2.26.1': {
    options: {
      date: new Date('2022-06-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour des graphiques de performance sur certains services monitorés' : 'Update performance graphs on some monitored services',
        tag: 'MNT'
      }
    ]
  },
  '2.26.2': {
    options: {
      date: new Date('2022-06-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la validation des emails empechant d\'entrer des mails se terminant en .group' : 'Update performance graphs on some monitored services',
        tag: 'GEN'
      }
    ]
  },
  '2.26.3': {
    options: {
      date: new Date('2022-06-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur l\'ajout et l\'édition d\'une application suite à la migration du nouveau module' : 'Fix on the creation and edition of an application because of the migration of the new module',
        tag: 'INV'
      }
    ]
  },
  '2.26.4': {
    options: {
      date: new Date('2022-07-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la taille des graphiques de supervision avec certains navigateurs' : 'Fix the size of monitoring graphics with some browsers',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du tableau des services lorsque certains noms d\'équipement sont trop longs' : 'Fix the display of services table when some equipment names are too long',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Lors du choix de l\'intervalle de date personnalisé sur les graphiques de supervision, l\'heure est à 00:00 par défaut' : 'When choosing a custom date range on monitoring graphics, the default hour is 00:00',
        tag: 'MNT'
      }
    ]
  },
  '2.27': {
    options: {
      date: new Date('2022-07-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de l\'interface pour suivre les transferts de fichiers' : 'Update of the interface to track file uploads',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de n\'exporter que les machines virtuelles filtrées lors de l\'export CSV' : 'Ability to export only the virtual machines filtered during the CSV export',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un tableau listant les fichiers ISO' : 'Add a table listing the ISO files',
        tag: 'CMP'
      }
    ]
  },
  '2.27.1': {
    options: {
      date: new Date('2022-07-11')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un problème d\'affichage sur la modal d\'upload de fichiers ISO' : 'Fix a display bug in the ISO file upload modal',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un problème lors de la migration de resource de calcul' : 'Fix a bug when migrating compute resources',
        tag: 'CMP'
      }
    ]
  },
  '2.27.2': {
    options: {
      date: new Date('2022-07-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des SDRS et datastores après un premier upload ISO' : 'Fix a display on SDRS and datastores after first ISO upload',
        tag: 'CMP'
      }
    ]
  },
  '2.28': {
    options: {
      date: new Date('2022-07-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une alerte sur les informations d\'une machine virtuelle lorsque la mémoire est gonflée' : 'Add an alert to a virtual machine\'s information when memory is ballooned',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Informations sur la taille restante necessaire sur le datastore lors de l\'upload d\'un ISO' : 'Information on the remaining size needed on the datastore for the upload of an ISO',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du bouton pour ouvrir une console directement dans la colonne actions d\'une machine virtuelle' : 'Add a button to open a console directly in the actions column of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la version des VMware tools sur les details d\'un ESX' : 'Add the version of VMware tools on the details of an ESX',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Refonte de la partie demande de support' : 'Rework of the support request section',
        tag: 'GEN'
      }
    ]
  },
  '2.28.1': {
    options: {
      date: new Date('2022-08-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Désactivation temporaire de la fonctionnalité de mise à jour d\'une adresse email' : 'Temporarily disabled email update feature',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Retrait des details techniques du champs description dans la partie demande de support' : 'Removal of the technical details of the description field in the support module',
        tag: 'GEN'
      }
    ]
  },
  '2.29': {
    options: {
      date: new Date('2022-08-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration de l\'affichage pour une demande de support' : 'Improved display for a help request',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre \'En escalade\' sur la liste des tickets' : 'Add a filter \'On delegation\' on the list of tickets',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir la règle de filtrage \'ET\' ou \'OU\' à appliquer entre les différents filtres sur la liste des tickets' : 'Ability to choose the filter rule \'AND\' or \'OR\' to apply between the different filters on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Suppression de l\'option pour modifier un ticket lorsque celui-ci est fermé' : 'Delete the option to edit a ticket when it is closed',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'options avancées au démarrage d\'une machine virtuelle' : 'Add advanced options to power on a virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '2.29.1': {
    options: {
      date: new Date('2022-08-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du bouton sauvegarder qui disparaissait lors de l\'édition d\'un ticket vers le statut "Fermé"' : 'Fix the save button that disappeared when editing a ticket to "Closed" status',
        tag: 'TICKET'
      }
    ]
  },
  '2.29.2': {
    options: {
      date: new Date('2022-08-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la recherche d\'un ISO dans les modal d\'exploration de datastore' : 'Fix ISO search in datastore browse modal',
        tag: 'CMP'
      }
    ]
  },
  '2.29.3': {
    options: {
      date: new Date('2022-08-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'upload d\'un fichier pour un tenant SNC' : 'Fix file upload for SNC tenant',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Amélioration de la sécurité concernant l\'ouverture d\'une session Bastion' : 'Improve security opening Bastion session',
        tag: 'BST'
      }
    ]
  },
  '2.30': {
    options: {
      date: new Date('2022-08-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Optimisation des performances en annulant les appels API en cours lors du changement de page' : 'Optimize performance by aborting ongoing API calls when changing pages',
        tag: 'GEN'
      }
    ]
  },
  '2.30.1': {
    options: {
      date: new Date('2022-08-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'appel pour exécuter un job suite à l\'optimisation des performances' : 'Fix bug on call to execute a job after performance optimization',
        tag: 'BACK'
      }
    ]
  },
  '2.31': {
    options: {
      date: new Date('2022-08-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la restauration d\'une machine virtuelle' : 'Fix a bug on the restoration of a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'activer la mise à jour des VMware tools au prochain redémarrage de la machine virtuelle' : 'Ability to enable VMware tools update on next virtual machine reboot',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des règles affinité et anti-affinité sur les details d\'une machine virtuelle' : 'Add affinity and anti-affinity rules on virtual machine details',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des fréquences pour une politique de sauvegarde de type Weekly' : 'Fix frequency display for Weekly backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation sur la création d\'un Personal Access Token limitant l\'expiration à maximum 1 an' : 'Add a validation on the creation of a Personal Access Token limiting the expiration to a maximum of 1 year',
        tag: 'GEN'
      }
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'Mise à jour des appels API pour déployer un modèle de VM' : 'Update API calls to deploy a VM template',
        path: [
          {
            path: '/v1/vcenters/virtual_machines/deploy',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Suppression des paramètres resourcePoolId et folderId' : 'Delete parameters resourcePoolId and folderId',
              lang === 'fr' ? 'Ajout du paramètre datacenterId' : 'Add datacenterId parameter',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}/items ',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Suppression des paramètres resourcePoolId et folderId' : 'Delete parameters resourcePoolId and folderId',
              lang === 'fr' ? 'Ajout du paramètre datacenterId' : 'Add datacenterId parameter',
            ]
          },
        ]
      }
    }
  },
  '2.32': {
    options: {
      date: new Date('2022-08-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une fonctionnalité permettant de demander une mise à jour d\'un ESX.' : 'Add a feature to request the update of an ESX.',
        tag: 'INF'
      }
    ]
  },
  '2.32.1': {
    options: {
      date: new Date('2022-08-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug concernant la récupération des mises à jour d\'ESX' : 'Fix a bug related to the ESX update request feature.',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de la mise en maintenance des datastores' : 'Fix datastore maintenance mode update.',
        tag: 'INF'
      },
    ]
  },
  '2.32.2': {
    options: {
      date: new Date('2022-09-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la mise en maintenance des datastores' : 'Fix datastore maintenance mode update.',
        tag: 'INF'
      }
    ]
  },
  '2.32.3': {
    options: {
      date: new Date('2022-09-01')
    },
    data: [
      {
        text: lang === 'fr' ? 'Bug d\'affichage sur la configuration des adaptateurs réseaux d\'une machine virtuelle' : 'Fix display bug on configuration of network adapters on virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '2.32.4': {
    options: {
      date: new Date('2022-09-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la mise en maintenance d\'un ESX sur la page de l\'ESX' : 'Fix ESX maintenance on ESX page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des graphiques de consommation sur la page d\'un ESX' : 'Fix display of graphs of use on ESX page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de la récupération des datastores lors du déplacement d\'une machine virtuelle' : 'Fix get datastores on relocate virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la création d\'une machine virtuelle' : 'Fix virtual machine creation',
        tag: 'CMP'
      }
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'Mise à jour de l\'appel API pour créer une VM' : 'Update API call to create a VM',
        path: [
          {
            path: '/v1/vcenters/virtual_machines',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Suppression des paramètres resourcePoolId et folderId' : 'Delete parameters resourcePoolId and folderId',
              lang === 'fr' ? 'Ajout du paramètre hostClusterId' : 'Add hostClusterId parameter',
            ]
          },
        ]
      }
    }
  },
  '2.32.5': {
    options: {
      date: new Date('2022-09-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la récupération des machines virtuelles d\'un host lors de la restauration d\'un VMDK' : 'Fix getting virtual machine from host when restoring VMDK',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du datacenter actuel lors de la restauration d\'une machine virtuelle' : 'Fix displaying actual datacenter when restoring virtual machine',
        tag: 'BACK'
      }
    ]
  },
  '2.32.6': {
    options: {
      date: new Date('2022-09-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la récupération des OVF properties lors du déploiement d\'un item de la bibliothèque de contenu' : 'Fix OVF properties when deploying a content library item',
        tag: 'CMP'
      },
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'Mise à jour de l\'appel API pour récupérer un item de la bibliothèque de contenu' : 'Update API call to get content library item',
        path: [
          {
            path: '/v1/vcenters/67/content_libraries/{contentLibraryId}/items/{itemId}',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Suppression du paramètre resourcePoolId' : 'Delete resourcePoolId parameter',
              lang === 'fr' ? 'Ajout du paramètre hostClusterId' : 'Add hostClusterId parameter',
            ]
          }
        ]
      }
    }
  },
  '2.33': {
    options: {
      date: new Date('2022-09-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la récupération des ressources de stockage lors du clonage d\'une machine virtuelle' : 'Fix get storage resources when cloning a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de synchroniser un élément d\'une content librairie \'Subscribed\'' : 'Ability to synchronize an item from a content library',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage d\'une mise à jour disponible sur un ESX' : 'Fix the display of an update available on an ESX',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Mise à jour du fonctionnement des demandes de support' : 'Update of the support request process',
        tag: 'GEN'
      }
    ]
  },
  '2.33.1': {
    options: {
      date: new Date('2022-10-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des actions cloner et déplacer d\'une machine virtuelle sur un tenant SecNumCloud' : 'Fix clone and move actions of a virtual machine on SecNumCloud tenant',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des actions de sauvegardes disponibles depuis un tenant SecNumCloud' : 'Update available actions on SecNumCloud tenant',
        tag: 'BACK'
      }
    ]
  },
  '2.34': {
    options: {
      date: new Date('2022-10-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Les politiques de sauvegardes désactivées ne sont plus assignable à un machine virtuelle excépté la politique \'nobackup\'' : 'Disabled backup policies are no longer assignable to virtual machine except for the \'nobackup\' policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Refonte de la page Bibliothèque de contenu qui devient la page Catalogues' : 'Redesign of the Content Library page to become the Catalogs page',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de publier un ISO ou les fichiers d\'un OVF dans "Mon catalogue"' : 'Ability to publish an ISO or the files of an FVO in "My Catalog',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de cloner vers "Mon catalogue" un modèle depuis un "Catalogue publique"' : 'Ability to clone a model from a "Public Catalog" to "My Catalog"',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de lister, ajouter et supprimer une bibliothèque de contenu depuis la page d\'un vcenter dans la partie Infrastructure' : 'Ability to list, add and delete a content library from a vcenter page in the Infrastructure section',
        tag: 'INF'
      }
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'Avec la version 7 des vcenters, les appels API concernant les bibliothèques de contenu ne sont plus dépréciés et sont désormais mis à jour' : '',
        path: [
          {
            path: '/v1/vcenters/67/content_libraries',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries' : 'The path is replaced by /v1/vcenters/content_libraries',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries' : 'The path is replaced by /v1/vcenters/content_libraries',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/sync',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/sync' : 'The path is replaced by /v1/vcenters/content_libraries/sync',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/{id}' : 'The path is replaced by /v1/vcenters/content_libraries/{id}',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}',
            method: 'DELETE',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/{id}' : 'The path is replaced by /v1/vcenters/content_libraries/{id}',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}/items',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/{id}/items' : 'The path is replaced by /v1/vcenters/content_libraries/{id}/items',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}/items',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/{id}/items' : 'The path is replaced by /v1/vcenters/content_libraries/{id}/items',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}/items',
            method: 'PUT',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/{id}/items' : 'The path is replaced by /v1/vcenters/content_libraries/{id}/items',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}/items/{itemId}',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/{id}/items/{itemId}' : 'The path is replaced by /v1/vcenters/content_libraries/{id}/items/{itemId}',
            ]
          },
          {
            path: '/v1/vcenters/67/content_libraries/{id}/items/{itemId}',
            method: 'DELETE',
            changes: [
              lang === 'fr' ? 'La route est remplacée par /v1/vcenters/content_libraries/{id}/items/{itemId}' : 'The path is replaced by /v1/vcenters/content_libraries/{id}/items/{itemId}',
            ]
          },
        ]
      }
    }
  },
  '2.35': {
    options: {
      date: new Date('2022-10-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Lors de la selection d\'une ressource de calcul ou de stockage, les ressources indisponibles ne peuvent pas etre séléctionnées' : 'When selecting a compute or storage resource, unavailable resources cannot be selected',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter des arrêts planifiés depuis la liste des équipements' : 'Ability to add time period stop from the equipment list',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option \'Streaming\' lors d\'une restauration de sauvegarde pour améliorer le temps d\'execution' : 'Adding the \'Streaming\' option during a backup restore to improve execution time',
        tag: 'BACK'
      },
    ],
  },
  '2.35.2': {
    options: {
      date: new Date('2022-10-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la documentation dans la barre latérale' : 'Fix display of documentation in sidebar',
        tag: 'DOC'
      }
    ],
  },
  '2.36': {
    options: {
      date: new Date('2022-11-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de notifications lorsqu\'une seule partie des vcenters ne répondent' : 'Add notifications when only some of the vcenters are responding',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation sur le nom lors de la publication d\'un fichier dans un catalogue' : 'Add name validation when uploading a file in a catalog',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug empechant l\'édition d\'une carte réseaux après l\'ajout d\'une carte réseaux' : 'Fix a bug preventing the editing of a network adapter after adding a network adapter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un problème d\'affichage de titre à l\'ouverture de la modal d\'un job de sauvegarde' : 'Fix a title display bug when opening the modal of a backup job',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de consulter les demandes de support' : 'Ability to see support requests',
        tag: 'GEN'
      },
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'Les réponses et paramètres virtualDatacenterId, folderId et resourcePoolId sont désormais dépréciés' : 'The responses and parameters virtualDatacenterId, folderId and resourcePoolId are now deprecated',
        path: [
          {
            path: '/v1/vcenters/virtual_machines/clone',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Le paramètre folderId est désormais déprécié' : 'FolderId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer folderid' : 'DatacenterId parameter is used to replace folderId',
              lang === 'fr' ? 'Le paramètre resourcePoolId est désormais déprécié' : 'ResourcePoolId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre hostClusterId ou hostId sont utilisés pour remplacer resourcePoolId' : 'HostClusterid or HostId parameters are used to replace resourcePoolId',
            ]
          },
          {
            path: '/v1/vcenters/virtual_machines/relocate',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Le paramètre folderId est désormais déprécié' : 'FolderId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer folderid' : 'DatacenterId parameter is used to replace folderId',
              lang === 'fr' ? 'Le paramètre resourcePoolId est désormais déprécié' : 'ResourcePoolId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre hostClusterId ou hostId sont utilisés pour remplacer resourcePoolId' : 'HostClusterid or HostId parameters are used to replace resourcePoolId',
            ]
          },
          {
            path: '/v1/vcenters/virtual_machines/{id}/export',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Le paramètre folderId est désormais déprécié' : 'FolderId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer folderid' : 'DatacenterId parameter is used to replace folderId',
              lang === 'fr' ? 'Le paramètre resourcePoolId est désormais déprécié' : 'ResourcePoolId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre hostClusterId ou hostId sont utilisés pour remplacer resourcePoolId' : 'HostClusterid or HostId parameters are used to replace resourcePoolId',
            ]
          },
          {
            path: '/v1/vcenters/virtual_machines/register',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Le paramètre folderId est désormais déprécié' : 'FolderId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer folderid' : 'DatacenterId parameter is used to replace folderId',
              lang === 'fr' ? 'Le paramètre resourcePoolId est désormais déprécié' : 'ResourcePoolId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre hostClusterId ou hostId sont utilisés pour remplacer resourcePoolId' : 'HostClusterid or HostId parameters are used to replace resourcePoolId',
            ]
          },
          {
            path: '/v1/vcenters/virtual_machines',
            method: 'POST',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/virtual_machines/power',
            method: 'PATCH',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/datastore_clusters',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/datastores',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/folders',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/host_clusters',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/hosts',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/networks',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/resource_pools',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/virtual_machines/power/recommendations',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/virtual_switchs',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le paramètre virtualDatacenterId est désormais déprécié' : 'VirtualDatacenterId parameter is now deprecated',
              lang === 'fr' ? 'Le paramètre datacenterId est utilisé pour remplacer virtualDatacenterId' : 'DatacenterId parameter is used to replace virtualDatacenterId',
            ]
          },
          {
            path: '/v1/vcenters/virtual_machines',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La réponse virtualDatacenterId est désormais dépréciée' : 'VirtualDatacenterId response is now deprecated',
              lang === 'fr' ? 'La réponse datacenterId est utilisée pour remplacer virtualDatacenterId' : 'DatacenterId response is used to replace virtualDatacenterId',
            ]
          },
        ]
      }
    }
  },
  '2.36.1': {
    options: {
      date: new Date('2022-11-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des mises à jour des Websockets' : 'Fix updates of Websockets',
        tag: 'GEN'
      }
    ],
  },
  '2.37': {
    options: {
      date: new Date('2022-11-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour des graphiques de performances sur les services supervisés' : 'Update performance graphs on monitored services',
        tag: 'MNT'
      }
    ],
  },
  '2.38': {
    options: {
      date: new Date('2022-12-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Intégration des appels API VRM (Virtual Machine Replication) sur la page réplication et les details d\'une machine virtuelle' : 'Integration of VRM (Virtual Machine Replication) API calls on the replication page and virtual machine details',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'La FAQ est désormais redirigée vers la nouvelle documentation' : 'The FAQ is now redirected to the new documentation',
        tag: 'GEN'
      }
    ],
  },
  '2.38.1': {
    options: {
      date: new Date('2022-12-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la liste des machines virtuelles lorsque le rôle tag_read n\'est pas attribué' : 'Fix display of virtual machines list when tag_read role is not assigned',
        tag: 'CMP'
      }
    ],
  },
  '2.38.2': {
    options: {
      date: new Date('2022-12-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du bug empêchant l\'ajout de pièce-jointes sur une demande de support ouverte.' : 'Fixed bug disabling attachment of files to an open support request.',
        tag: 'GEN'
      }
    ],
  },

  '3.0': {
    options: {
      date: new Date('2022-12-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Refonte du style et de l\'ergonomie globale de l\'interface' : 'Redesign of the style and global ergonomics of the interface',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Refonte de la page d’accueil de l\'application' : 'Redesign of the application\'s home page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Nouveau fonctionnement et affichage des filtres' : 'New way of working and display of filters',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Nouveau fonctionnement et affichage des vues enregistrées sur les services supervisés et les tickets' : 'New way of working and display of the views recorded on the supervised services and tickets',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre "non assigné" sur la liste des tickets' : 'Add of a filter "not assigned" on the list of tickets',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Nouveau fonctionnement du suivi des activités en cours' : 'New way of working of the follow-up of the current activities',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Séparation en onglets du tableau de bord' : 'Split in tabs of the dashboard',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Affichage des APIs et PAT dans une page dédiée' : 'Display of APIs and PAT in a dedicated page',
        tag: 'GEN'
      },
    ]
  },
  '3.1': {
    options: {
      date: new Date('2022-12-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un nouvel onglet dans le dashboard pour la consommation électrique et l\'émission de CO2 des ESX' : 'Add new tab in the dashboard for the power consumption and CO2 emission of ESX',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un graphique de consommation électrique sur les détails d\'un ESX sur une période donnée' : 'Add graph of power consumption on the details of an ESX over a given period',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'émission de carbone d\'un ESX sur une période donnée' : 'Add carbon emission of an ESX on a given period',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Correction de bugs et améliorations UI/UX suite à la refonte' : 'Fix bug and improve UI/UX following redesign',
        tag: 'GEN'
      }
    ]
  },
  '3.2': {
    options: {
      date: new Date('2023-01-05')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour des statuts des ESXs et Datastores' : 'Update ESXs and datastores status',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de bugs et améliorations UI/UX suite à la refonte' : 'Fix bug and improve UI/UX following redesign',
        tag: 'GEN'
      }
    ]
  },
  '3.2.1': {
    options: {
      date: new Date('2023-01-11')
    },
    data: [
      {
        text: lang === 'fr' ? 'Optimisation de la récupération des informations sur la liste des services' : 'Optimize getting information on services list',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de bugs et améliorations UI/UX suite à la refonte' : 'Fix bug and improve UI/UX following redesign',
        tag: 'GEN'
      }
    ]
  },
  '3.2.2': {
    options: {
      date: new Date('2023-01-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction UI/UX des activités dans la sidebar' : 'Fix UI/UX of activities in sidebar',
        tag: 'GEN'
      }
    ]
  },
  '3.3': {
    options: {
      date: new Date('2023-01-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Refonte de l\'affichage des notifications' : 'Rework display of notifications',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la redirection sur le graphique des équipements' : 'Fix redirect on equipment graphic',
        tag: 'MNT'
      }
    ]
  },
  '3.3.1': {
    options: {
      date: new Date('2023-01-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Affichage d\'un avertissement lors de l\'ajout d\'une politique désactivée à une machine virtuelle' : 'Display a warning when adding a disabled policy to a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction du filtre par nom sur la liste des services' : 'Fix filter by name on services list',
        tag: 'MNT'
      }
    ]
  },
  '3.4': {
    options: {
      date: new Date('2023-01-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Les fonctionnalités nécessitant un rôle non possédé ne sont plus affichées' : 'Features requiring a role not owned are no longer displayed',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un champ de recherche par nom sur la liste des équipements' : 'Add a search field by name on the list of equipments',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de la validation sur la création d\'un ticket avancé' : 'Fix validation on the creation of an advanced ticket',
        tag: 'TICKET'
      }
    ]
  },
  '3.4.1': {
    options: {
      date: new Date('2023-01-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la validation des fichiers manquants lors de la publication d\'un ovf' : 'Fix missing files validation when uploading ovf',
        tag: 'CMP'
      }
    ]
  },
  '3.4.2': {
    options: {
      date: new Date('2023-02-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la taille d\'affichage d\'une session bastion' : 'Fix display size of bastion session',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'La récupération des activités en cours au rechargement de la page est temporairement désactivée' : 'Get of running activities is temporary disabled reloading the page',
        tag: 'ACT'
      }
    ]
  },
  '3.4.3': {
    options: {
      date: new Date('2023-02-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration du temps d\'affichage d\'une session bastion' : 'Improving the display time of a bastion session',
        tag: 'BST'
      }
    ]
  },
  '3.5': {
    options: {
      date: new Date('2023-02-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la colonne référence client sur la liste des tickets' : 'Add client reference column to the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction d\'une erreur lors de la récupération des équipements sur l\'édition d\'un ticket' : 'Fix an error while getting equipments for the edition of a ticket ',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un onglet dans la page de rapport de sauvegarde de la liste non groupée des rapports' : 'Add a tab in the backup report page of the ungrouped list of reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de mettre à jour son profil utilisateur d\'un compte local' : 'Ability to update user profile of your local account',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des mises à jour disponibles sur les ESXs lorsqu\'une demande est en cours' : 'Fix of the display of available updates on ESXs when a request is in progress',
        tag: 'INF'
      }
    ]
  },
  '3.5.1': {
    options: {
      date: new Date('2023-02-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la taille d\'affichage d\'une session bastion' : 'Fix display size of bastion session',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'La récupération des activités en cours au rechargement de la page est temporairement désactivée' : 'Get of running activities is temporary disabled reloading the page',
        tag: 'ACT'
      }
    ]
  },
  '3.5.2': {
    options: {
      date: new Date('2023-02-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration du temps d\'affichage d\'une session bastion' : 'Improving the display time of a bastion session',
        tag: 'BST'
      }
    ]
  },
  '3.5.3': {
    options: {
      date: new Date('2023-02-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage des tickets support dans l\'onglet "Toutes les demandes" dans certains cas spécifiques' : 'Fix bug on support tickets display in "All requests" tab in some specific cases',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug faisant disparatitre une colone sur la liste des tickets support lors du clique sur le bouton refresh' : 'Fix bug that made a column disappear in the support ticket list when clicking on the refresh button',
        tag: 'GEN'
      }
    ]
  },
  '3.6': {
    options: {
      date: new Date('2023-02-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage lors de l\'interraction dans une popup qui faisait défiler la page en arrière plan' : 'Fix a display bug when interracting in a popup that caused the page to scroll in the background',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Lorsque l\'utilisateur ne possède pas le droit \'iam_manage_permissions\' ne pas bloquer l\'ouverture de la pop-up mais uniquement l\'édition' : 'When the user does not have the right \'iam_manage_permissions\' do not block the opening of the popup but only the editing',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage des barres de défilement sur l\'affichage des tâches vmware d\'une machine virtuelle' : 'Fix a display bug with scrollbars on the vmware tasks display of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la possibilité de cliquer à répétition sur le bouton \'Contacter le support\' lorsque l\'appel API prend du temps' : 'Fix the ability to repeatedly click on the \'Contact Support\' button when the API call is taking time',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage lors du refresh d\'une machine virtuelle depuis l\'onglet \'contrôleurs\' de la machine' : 'Fix a display bug when refreshing a virtual machine from the \'contrôleurs\' tab of the machine',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug lorsqu\'un utilisateur fait une nouvelle demande de support en etant sur la page d\'edition d\'un ticket, l\'ajout d\'un fichier se fait sur la page d\'edition et non sur la nouvelle demande' : 'Fix a bug when a user makes a new support request while on the ticket edit page, adding a file is done on the edit page and not on the new request',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la pagination sur les tableaux de support' : 'Fix pagination on support tables',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction des retours à la ligne dans la description des tickets de support' : 'Fix line breaks in support ticket description',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Lors de l\'upload, possibilité d\'ajouter des fichiers avec des extensions en majuscule' : 'When uploading, possibility to add files with capitalized extensions',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Remplacement du titre d\'un onglet de session bastion par le nom de la session' : 'Replace the title of a bastion session tab with the session name',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug de validation rendant la RAM obligatoire à la création d\'une machine virtuelle' : 'Fixed a validation bug making RAM mandatory when creating a virtual machine',
        tag: 'CMP'
      },
    ]
  },
  '3.6.1': {
    options: {
      date: new Date('2023-03-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du déploiment d\'un template depuis la page catalogues' : 'Fix template deployment from the catalogs page',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du filtre par interval de dates qui n\'incluait pas les extrémités' : 'Fix the filter by date range that didn\'t include the extremities',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des graphiques sur la page d\'un équipement pour certaines résolutions' : 'Fix the display of graphics on the equipment page for some resolutions',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de la colonne nature vide sur la liste des tickets' : 'Fix the empty nature column on the ticket list',
        tag: 'TICKET'
      },
      {
        text: lang === 'fr' ? 'Correction du tri des colonnes sur la page des demandes de support' : 'Fix column sorting on support request page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction des filtres par tag sur la liste des équipements' : 'Fix filters by tag on the equipment list',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction du chargement des disques lors d\'un VMotion du stockage par disque' : 'Fix disk loading during VMotion of disk storage',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage d\'un lien sur la liste des tickets infogérance lors de la création d\'un ticket support' : 'Fix the display of a link on the list of management tickets when creating a support ticket',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction des retours à la ligne dans les commentaires d\'un ticket support' : 'Fix line breaks in comments of support ticket',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des activités liées à une session bastion' : 'Fix the display of activities linked to bastion session',
        tag: 'BST'
      }
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'La fonctionnalité est dépréciée' : 'Feature is now deprecated',
        path: [
          {
            path: 'v1/vcenters/datastores/file',
            method: 'DELETE',
            changes: [
              lang === 'fr' ? 'La fonctionnalité est dépréciée' : 'Feature is now deprecated',
            ]
          },
        ]
      }
    }
  },
  '3.6.2': {
    options: {
      date: new Date('2023-03-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Optimisation de la configuration du projet' : 'Optimization of the project configuration',
        tag: 'GEN'
      }
    ]
  },
  '3.6.3': {
    options: {
      date: new Date('2023-03-08')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage des barres de défilement sur l\'affichage des tâches vmware d\'une machine virtuelle' : 'Fix a display bug with scrollbars on the vmware tasks display of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des activités liées à une session bastion après avoir fermé les activités d\'une autre session en étant sur l\'onglet "Archivés"' : 'Fix the display of activities related to a bastion session after closing the activities of another session while on the "Archived" tab',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Affichage des tickets modifiés les plus récemment par défaut sur les demandes de support' : 'Display most recently modified tickets by default on support requests',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des dates depuis l\'onglet "Machines virtuelles" sur les rapports de sauvegardes' : 'Fix date display from "Virtual Machines" tab on backup reports',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage d\'une pop-up vide à l\'ouverture d\'une session bastion' : 'Fix displaying an empty pop-up when opening a bastion session',
        tag: 'BST'
      },
    ]
  },
  '3.7': {
    options: {
      date: new Date('2023-03-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'un fil d\'arianne sur les pages de la partie documentation' : 'Add a breadcrumb to the pages of the documentation part',
        tag: 'DOC'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug lorsque sur les filtres plusieurs options ont le même nom la recherche sur les options ne fonctionne pas' : 'Fix a bug when on filters several options have the same name, the search on the options does not work',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option secure boot dans les options avancées du démarrage d\'une machine virtuelle' : 'Add the secure boot option in the advanced options to power on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Amélioration de l\'ajout de disques sur une machine virtuelle en permettant l\'ajout multiple en une seule action' : 'Improvement of the addition of disks on a virtual machine by allowing the multiple addition in only one action',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une étape supplémentaire pour le choix d\'un OS lors de la création d\'une machine virtuelle' : 'Add an extra step for the choice of an OS when creating a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre par hostCluster sur la liste des machines virtuelles' : 'Add a filter by hostCluster on the list of virtual machines',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une colonne indiquant les types d\'une politique de sauvegardes' : 'Add a column indicating the types of a backup policy',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Amélioration des messages affichés à l\'utilisateur sur les actions concernant les politiques de sauvegarde d\'une machine virtuelle' : 'Improvement of the messages displayed to the user on the actions concerning the backup policies of a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage des barres de défilement sur l\'affichage des tâches vmware d\'une machine virtuelle' : 'Fix a display bug with scrollbars on the vmware tasks display of a virtual machine',
        tag: 'CMP'
      }
    ],
    breakingChanges: {
      Compute: {
        description: lang === 'fr' ? 'Modification des filtres' : 'Update filters',
        path: [
          {
            path: 'v1/vcenters/networks',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'Le filtre "allOptions" est déprécié' : 'Filter "allOptions" is now deprecated',
              lang === 'fr' ? 'Il n\'est pas possible de passer le filtre type "Network" en combinaison avec les filtres "switchId" et "folderId"' : 'Impossible to use filter "Network" with filters "switchId" and "folderId"',
            ]
          },
        ]
      }
    }
  },
  '3.8': {
    options: {
      date: new Date('2023-04-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du filtre par défaut sur la page des logs archivés' : 'Fix default filter on archived logs page',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Amélioration de l\'affichage des thématique lors de la création d\'un ticket support' : 'Improved display of themes when creating a support ticket',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de filtres sur la page des tickets support' : 'Add filters on the support ticket page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Optimisation de l\'utilisation des retours websockets' : 'Optimization of the use of websockets responses',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Amélioration de la récupération des fonts et icônes' : 'Improved font and icon retrieve',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'étape de configuration du réseaux lors du déploiement d\'une machine virtuelle depuis un modèle de VM ou un OVF' : 'Add network configuration step when deploying a virtual machine from a VM template or an OVF',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de filtres sur la page "Catalogues"' : 'Add filters on the "Catalogs" page',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Modification de la mise à jour de la version materiel d\'une machine virtuelle' : 'Edit update of the hardware version of a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page "Santé" pour les machines virtuelles' : 'Add a "Health" page for virtual machines',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Ajout de la consommation électrique globale des ESX sur le tableau de bord' : 'Add the global power consumption of ESX on the dashboard',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Correction du tri des colonnes pour les politiques de sauvegarde et rapports de sauvegarde' : 'Fix column sorting for backup policies and backup reports',
        tag: 'BACK'
      },
    ],
    breakingChanges: {
      Metric: {
        description: lang === 'fr' ? 'Modification des routes pour un fonctionnement plus générique' : 'Update of the routes for a more generic use',
        path: [
          {
            path: 'v1/metrics/hosts/carbon_emission',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/hosts avec la valeur "carbon_emission" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/hosts with the value "carbon_emission" for the "metric" parameter',
            ]
          },
          {
            path: 'v1/metrics/hosts/power_consumption',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/hosts avec la valeur "power_consumption" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/hosts with the value "power_consumption" for the "metric" parameter',
            ]
          },
          {
            path: 'v1/metrics/hosts/{id}/carbon_emission',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/hosts/{id} avec la valeur "carbon_emission" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/hosts/{id} with the value "carbon_emission" for the "metric" parameter',
            ]
          },
          {
            path: 'v1/metrics/hosts/{id}/power_consumption',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/hosts/{id} avec la valeur "power_consumption" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/hosts/{id} with the value "power_consumption" for the "metric" parameter',
            ]
          },
          {
            path: 'v1/metrics/virtual_machines/carbon_emission',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/virtual_machines avec la valeur "carbon_emission" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/virtual_machines with the value "carbon_emission" for the "metric" parameter',
            ]
          },
          {
            path: 'v1/metrics/virtual_machines/power_consumption',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/virtual_machines avec la valeur "power_consumption" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/virtual_machines with the value "power_consumption" for the "metric" parameter',
            ]
          },
          {
            path: 'v1/metrics/virtual_machines/{id}/carbon_emission',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/virtual_machines/{id} avec la valeur "carbon_emission" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/virtual_machines/{id} with the value "carbon_emission" for the "metric" parameter',
            ]
          },
          {
            path: 'v1/metrics/virtual_machines/{id}/power_consumption',
            method: 'GET',
            changes: [
              lang === 'fr' ? 'La route est dépréciée et remplacée par /v1/metrics/virtual_machines/{id} avec la valeur "power_consumption" pour le paramètre "metric"' : 'The route is deprecated and replaced by v1/metrics/virtual_machines/{id} with the value "power_consumption" for the "metric" parameter',
            ]
          },
        ]
      }
    }
  },
  '3.8.1': {
    options: {
      date: new Date('2023-04-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la consommation électrique sur le tableau de bord lorsqu\'aucune donnée n\'est disponible' : 'Fix power consumption display on dashboard when no data is available',
        tag: 'METRIC'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la colonne actions sur la page des replications' : 'Fix the display of the actions column on the replications page',
        tag: 'CMP'
      }
    ]
  },
  '3.8.2': {
    options: {
      date: new Date('2023-04-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'execution manuelle d\'une politique de sauvegarde possédant un type OFFLOAD sur une machine virtuelle' : 'Fix manual execution of a backup policy whith OFFLOAD type on a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction des retours à la ligne sur les commentaires d\'un ticket' : 'Fix line breaks on ticket comments',
        tag: 'TICKET'
      }
    ]
  },
  '3.8.3': {
    options: {
      date: new Date('2023-05-11')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction sur les thématiques support affichées pour un tenant sans le module Observability d\'activé' : 'Correction on the support themes displayed for a scope without the Observability module activated',
        tag: 'GEN'
      }
    ]
  },
  '3.9': {
    options: {
      date: new Date('2023-05-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de visualiser les graphiques d\'un service depuis la page d\'un équipement' : 'Ability to view the graphics of a service from the page of an equipment',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Amélioration de l\'affichage des graphiques d\'un service' : 'Improvement of the display of the graphics of a service',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Possibilité de parcourir les fichiers d\'un datastore' : 'Ability to browse files in a datastore',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité de fermer un ticket support' : 'Ability to close a support ticket',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Amélioration du chargement de la page d\'un ESX' : 'Improvement of the loading of the page of an ESX',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Optimisation du projet' : 'Optimize project',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des informations d\'une machine virtuelle lorsque le SE invité n\'est pas reconnu' : 'Fix display of virtual machine information when guest OS is not recognized',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'ouverture d\'une session bastion lorsque plusieurs onglets sont ouverts sur la page de sessions, faire en sorte d\'ouvrir qu\'un seul onglet' : 'Fix bastion login when multiple tabs are open on the sessions page, make it open only one tab',
        tag: 'BST'
      },
    ]
  },
  '3.10': {
    options: {
      date: new Date('2023-06-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Intégration des fonctionnalités pour piloter un Esxi Standalone' : 'Integration of features to control an Esxi Standalone',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du bouton rafraîchir sur la page des tâches d\'une vstack' : 'Fix refresh button on vstack task page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug affichant un datastore en maintenance comme étant connecté.' : 'Fix a bug showing a datastore as connected while in maintenance mode.',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Amélioration de l\'affichage des demandes de support' : 'Improve display of support requests',
        tag: 'GEN'
      },
    ]
  },
  '3.10.1': {
    options: {
      date: new Date('2023-06-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la création de règles affinité/anti-affinité' : 'Fixed creation of affinity/anti-affinity rules',
        tag: 'INF'
      }
    ]
  },
  '3.11': {
    options: {
      date: new Date('2023-06-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter des observateurs supplémentaires à la création d\'un ticket support' : 'Ability to add additional observers when creating a support ticket',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'historique des données de santé d\'une machine virtuelle' : 'Add health data history to a virtual machine',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Ajout du nom du vcenter devant les clusters lors de la restauration d\'une machine virtuelle' : 'Add vcenter name in front of clusters when restoring a virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bandeau d\'alerte sur une machine virtuelle lorsqu\'elle n\'est pas inventoriée sur SPP' : 'Add a warning banner on a virtual machine when it is not inventoried on SPP',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité de lancer l\'inventaire SPP depuis les onglets politique et sauvegardes d\'une machine virtuelle qui n\'est pas encore inventoriée' : 'Ability to launch the SPP inventory from the policy and backup tabs for a virtual machine not yet inventoried',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une légende sur les colonnes de la page santé des machines virtuelles' : 'Add a legend to the columns of the virtual machine health page',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de démarrer une machine virtuelle en sppMode test' : 'Ability to start a virtual machine in sppMode test',
        tag: 'CMP'
      }
    ]
  },
  '3.11.1': {
    options: {
      date: new Date('2023-06-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug causant l\'utilisation de mauvaises typologies lors de la création d\'une demande de support.' : 'Fixed a bug causing wrong typology to be used on support ticket creation.',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la santé des machines virtuelles lors de la selection d\'une date' : 'Fix display oh virtual machine health when selecting a date',
        tag: 'MET'
      },
    ]
  },
  '3.11.2': {
    options: {
      date: new Date('2023-06-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des sauvegardes d\'une machine virtuelle depuis le menu de récupération' : 'Fix display bug of virtual machine backups from recovery view',
        tag: 'BACK'
      }
    ]
  },
  '3.11.3': {
    options: {
      date: new Date('2023-06-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Affichage d\'un message d\'erreur lorsqu\'un fichier dépassant la limite autorisée est ajouté lors de la publication dans un catalogue' : 'Display of an error message when a file exceeding the authorized limit is added during upload in a catalog',
        tag: 'CMP'
      }
    ]
  },
  '3.12': {
    options: {
      date: new Date('2023-06-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de l\'affichage des interventions en cours, planifiées et terminées' : 'Display of an error message when a file exceeding the authorized limit is added during upload in a catalog',
        tag: 'GEN'
      }
    ]
  },
  '3.12.1': {
    options: {
      date: new Date('2023-06-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration de l\'affichage des interventions' : 'Improvement of the display of interventions',
        tag: 'GEN'
      }
    ]
  },
  '3.12.2': {
    options: {
      date: new Date('2023-06-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des titres des interventions' : 'Fix title of interventions display',
        tag: 'GEN'
      }
    ]
  },
  '3.13': {
    options: {
      date: new Date('2023-07-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la taille des fichiers présents dans le catalogue local' : 'Add file size in local catalog',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'La liste des demandes de support est désormais accessible depuis la bouée située dans la navbar' : 'The list of support requests is now available from the buoy in the navbar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Les notes de mises à jour par modules sont désormais disponible depuis la page des swaggers' : 'Release notes by module are now available from the swaggers page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Le filtre date de la page santé des machines virtuelles prend désormais en compte les heures et minutes' : 'Date filter on virtual machine health page now takes hours and minutes',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Il est désormais possibe de lister les logs en lecture, le filtre par défaut n\'affiche que les logs ecriture' : 'It is now possible to list read logs, the default filter only displays write logs',
        tag: 'ACT'
      }
    ]
  },
  '3.13.1': {
    options: {
      date: new Date('2023-08-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des noms de machine virtuelle sur la page santé des machine virtuelles' : 'Fix display of virtual machines name on virtual machine health page',
        tag: 'MET'
      }
    ]
  },
  '3.14': {
    options: {
      date: new Date('2023-08-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Tri par défaut de la liste des hosts et datastores par ordre alphabétique' : 'Default sorting of hosts and datastores in alphabetical order',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Appuyer sur "Entrée" au niveau d\'un formulaire ne lance plus le rechargement de la page' : 'Pressing "Enter" on a form no longer reloads the page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Amélioration des modals à étapes multiples' : 'Improve multi-step modals',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Amélioration de l\'affichage du résumé à la création de disques' : 'Improve summary display at disc creation',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du choix des adaptateurs réseau lors du clone d\'une machine virtuelle' : 'Add choice of network adapters when cloning a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Lors de la création d\'une machine virtuelle, les champs ne se mettent plus en erreur par défaut après avoir ajouté un disque, un contrôleur ou un adaptateur réseaux' : 'When creating a virtual machine, fields no longer default to error after adding a disk, controller or network adapter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Modification du champ CPU à la création d\'une machine virtuelle n\'étant pas exploitable lorsqu\'un trop gros nombre de valeurs étaient disponibles' : 'Update of the CPU field at the creation of a virtual machine was not usable when too many values were available',
        tag: 'CMP'
      }
    ]
  },
  '3.14.1': {
    options: {
      date: new Date('2023-08-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du tri des colonnes de santé des machines virtuelles' : 'Fix sorting of virtual machine health columns',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Correction de la migration multiple de machines virtuelles depuis un datastore cluster' : 'Fix multiple migration of virtual machines from a datastore cluster',
        tag: 'INF'
      }
    ]
  },
  '3.14.2': {
    options: {
      date: new Date('2023-08-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la validation lors du renommage d\'une machine virtuelle' : 'Fix validation when renaming a virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '3.15': {
    options: {
      date: new Date('2023-08-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de la liste des proprétés vApp d\'une machine virtuelle depuis les options avancées' : 'Add a list of vApp properties to a virtual machine from advanced options',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un suivi des activités liées aux jobs de sauvegarde' : 'Add monitoring of backup job activities',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Optimisation de la création d\'un disque en remplissant les champs par défaut' : 'Optimize disk creation by filling in default fields',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Optimisation de la création d\'une machine virtuelle en remplissant certains champs par défaut' : 'Optimize virtual machine creation by filling in default some fields',
        tag: 'CMP'
      }
    ]
  },
  '3.15.1': {
    options: {
      date: new Date('2023-09-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la validation du champ RAM lors de la création d\'une machine virtuelle' : 'Fix validation on RAM field when creating virtual machine',
        tag: 'CMP'
      }
    ]
  },
  '3.15.2': {
    options: {
      date: new Date('2023-09-05')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des réseaux depuis la page d\'un dvswitch dans le cas d\'un VLAN de type trunk' : 'Fix network display from a dvswitch page in the case of VLAN type is trunk',
        tag: 'INF'
      }
    ]
  },
  '3.16': {
    options: {
      date: new Date('2023-09-11')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour du menu latéral' : 'Update sidebar menu',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page profil utilisateur' : 'Add user profil page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une documentation concernant la confidentialité' : 'Add documentation about privacy',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction du nombre de machines virtuelles d\'un host affiché depuis la page d\'un hostCLuster' : 'Fix virtual machine number on a host from hostCluster page',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Intégration de la nouvelle version du module Bastion' : 'Integration of the new version of the Bastion module',
        tag: 'BST'
      }
    ]
  },
  '3.16.1': {
    options: {
      date: new Date('2023-09-11')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du tri sur le nombre d\'équipements d\'une appliance' : 'Fix sort on number of devices in an appliance',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'La description est maintenant optionnelle sur un équipement' : 'Description is now optional on a device',
        tag: 'BST'
      }
    ]
  },
  '3.16.2': {
    options: {
      date: new Date('2023-09-11')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mises à jour de certains menus dans la barre latérale' : 'Update some menus on sidebar',
        tag: 'GEN'
      }
    ]
  },
  '3.16.3': {
    options: {
      date: new Date('2023-09-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la redirection lors de la recherche de page documentation' : 'Fix redirection when searching for documentation page',
        tag: 'DOC'
      }
    ]
  },
  '3.16.4': {
    options: {
      date: new Date('2023-10-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la possibilité de choisir un datastore en maintenance lors d\'un Vmotion avec configuration par disque' : 'Fix ability to select a datastore for maintenance when using Vmotion with per-disk configuration',
        tag: 'INF'
      }
    ]
  },
  '3.16.5': {
    options: {
      date: new Date('2023-10-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la recherche et l\'édition d\'équipements Bastion ne fonctionnant pas dans des cas spécifiques' : 'Fix Bastion equipment search and editing not working in specific cases',
        tag: 'BST'
      }
    ]
  },
  '3.16.6': {
    options: {
      date: new Date('2023-10-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug lors de la restauration d\'une machine virtuelle sur un vCenter différent en permettant de décocher l\'option "Ecraser la machine virtuelle"' : 'Fix a bug when restoring a virtual machine on a different vCenter by unchecking the option "Overwrite virtual machine"',
        tag: 'BACK'
      }
    ]
  },
  '3.17.0': {
    options: {
      date: new Date('2023-10-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de l\'option "auto-connexion" à la création d\'un adaptateur réseau' : 'Add "auto-connect" option when creating a network adapter',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un problème d\'affichage de la FAQ sur les modes de disques lors de la création de plusieurs disques' : 'Fix problem displaying FAQ on disk modes when creating multiple disks',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la page de santé des machines virtuelles' : 'Update virtual machine health page',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Les interventions terminées sont désormais triées par défaut du plus récent au plus vieux' : 'Completed interventions are now sorted by default from most recent to oldest',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page concernant les réseaux virtuels et la possibilité de les partager entre tenants de l\'organisation' : 'Add a page about virtual networks and the possibility of sharing them to tenants of the company',
        tag: 'NET'
      },
    ]
  },
  '3.17.1': {
    options: {
      date: new Date('2023-10-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug lors de la restauration d\'une machine virtuelle sur un vCenter différent en permettant de décocher l\'option "Ecraser la machine virtuelle"' : 'Fix a bug when restoring a virtual machine on a different vCenter by unchecking the option "Overwrite virtual machine"',
        tag: 'BACK'
      }
    ]
  },
  '3.17.2': {
    options: {
      date: new Date('2023-10-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout du nom du vCenter dans la route pour la santé d\'une machine virtuelle' : 'Add vCenter name to virtual machine health route',
        tag: 'MET'
      }
    ]
  },
  '3.17.3': {
    options: {
      date: new Date('2023-11-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du statut d\'un datastore depuis la page infrastructure du cluster lié' : 'Fix datastore status display from linked cluster infrastructure page',
        tag: 'INF'
      }
    ]
  },
  '3.17.4': {
    options: {
      date: new Date('2023-11-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du téléchargement CSV des travaux par politique de sauvegarde avec un intervalle autre que 24h' : 'Fix CSV download of jobs by backup policy with interval other than 24h',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'informations dans la popup de confirmation de suppression d\'un disque' : 'Add information to disk deletion confirmation popup',
        tag: 'CMP'
      }
    ]
  },
  '3.17.5': {
    options: {
      date: new Date('2023-11-09')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la création d\'un réseau depuis la page des réseaux virtuels' : 'Fix network creation from virtual networks page',
        tag: 'NET'
      }
    ]
  },
  '3.17.6': {
    options: {
      date: new Date('2023-11-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la suppression d\'un réseau depuis la page des réseaux virtuels' : 'Fix network deletion from virtual networks page',
        tag: 'NET'
      }
    ]
  },
  '3.17.7': {
    options: {
      date: new Date('2023-11-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des details de santé d\'une machine virtuelle ou d\'un Host' : 'Fix display of virtual machine and host health details',
        tag: 'MET'
      }
    ]
  },
  '3.18.0': {
    options: {
      date: new Date('2023-12-15')
    },
    data: [
      {
        text: lang === 'fr' ? `Mise à jour des noms de certaines permissions et création de nouvelles permissions` : `Update the names of certain permissions and creating new ones`,
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? `Regroupement de l\'affichage des permissions par produits` : `Grouping of permissions display by products`,
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? `Mise à jour des appels API Hosting vers la nouvelles API Colocation` : `Update Hosting API calls to the new Housing API"`,
        tag: 'HOUSING'
      },
      {
        text: lang === 'fr' ? `Mise à jour des appels API Hosting vers la nouvelles API Réseaux` : `Update Hosting API calls to the new Network API`,
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? `Ajout d'une page listant les commandes` : `Add a page listing orders`,
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? `Possibilité de commander de l'ajout de mémoire sur un host cluster` : `Ability to order additional memory on a host cluster`,
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? `Possibilité de commander un nouvel host sur un host cluster` : `Ability to order a new host on a host cluster`,
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? `Possibilité de commander l'ajout de capacité de stockage sur un datastore` : `Ability to order the addition of storage capacity on a datastore`,
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? `Possibilité de commander un nouveau datastore sur un datastore cluster` : `Ability to order a new datastore on a cluster datastore`,
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? `Possibilité de commander le déprovisionnement d'un datastore` : `Ability to order the deprovisioning of a datastore`,
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? `Ajout d'un filtre par statut sur les sessions d'un job` : `Add a status filter to job sessions`,
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Les interventions terminées sont désormais triées par défaut du plus récent au plus vieux' : 'Completed interventions are now sorted by default from most recent to oldest',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir son tenant favoris qui sera utilisé par défaut lors de la connexion à l\'application sans direct URL' : 'Ability to choose a favorite perimeter which will be used by default when connecting to the application without a direct URL',
        tag: 'GEN'
      },
    ],
    breakingChanges: {
      Hosting: {
        description: lang === 'fr' ? 'Cette API est dépréciée. Les différentes routes ont été découpées en 2 nouvelles API: Colocation et Réseaux.' : 'This API is deprecated. The various routes have been split into 2 new APIs: Housing and Network.',
      }
    }
  },
  '3.18.1': {
    options: {
      date: new Date('2023-12-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Le tri par défaut sur la page des commandes a été remplacé par la date de la dernière mise à jour' : 'Default sorting on orders page changed to date of last update',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une limitation sur la taille minimum lors d\'une demande d\'augmentation de datastore' : 'Add a limitation on the minimum size when requesting a datastore increase',
        tag: 'ORDER'
      }
    ]
  },
  '3.18.2': {
    options: {
      date: new Date('2023-12-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du status de maintenance d\'un datastore pour certaines configurations' : 'Fix display of datastore maintenance status for some configurations',
        tag: 'INF'
      }
    ]
  },
  '3.18.3': {
    options: {
      date: new Date('2024-01-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'action de mise à jour d\'une version d\'un esx' : 'Fix action button when order an esx update version',
        tag: 'INF'
      }
    ]
  },
  '3.19.0': {
    options: {
      date: new Date('2024-01-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Les datastores et hosts en cours de provisionnement sont désormais bloqués lors des différentes sélections' : 'Datastores and hosts currently being provisioned are now blocked during various selections',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'options lors de l\'exportation csv' : 'Add options for csv export',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un filtre auteur sur la page des logs' : 'Add author filter to log page',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page pour les détails d\'une commande' : 'Add a page for order details',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de visualiser et ajouter des commentaires lorsqu\'un ticket est lié à une commande' : 'Ability to view and add comments when a ticket is linked to an order',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de visualiser la propagation d\'un réseau actif de type VLAN' : 'Ability to view the propagation of an active VLAN network',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de propager un réseau actif de type VLAN' : 'Ability to propagate an active VLAN network',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de propager un réseau dès sa création' : 'Ability to propagate a network as soon as it is created',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Suppression de la page infrastructure dvswitch remplacée par un tableau de réseaux dans la page d\'un hostCluster' : 'Remove of the dvswitch infrastructure page replaced by an array of networks in the hostCluster page',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option virtualisation matérielle et possibilité de le modifier' : 'Hardware virtualization option added and editable',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Affichage des alarmes pour les hosts et vcenters' : 'Alarms displayed for hosts and vcenters',
        tag: 'INF'
      }
    ]
  },
  '3.19.1': {
    options: {
      date: new Date('2024-01-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des datastores affichés comme étant en maintenance alors que ce n\'est pas le cas lors des différentes sélections' : 'Fix the display of datastores shown as being under maintenance when this is not the case during the various selections',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction du bouton propager un network qui n\'était pas bloqué même lorsqu\'aucune cible valide n\'était sélectionnée' : 'Fix network propagate button that was not blocked even when no valid target was selected',
        tag: 'NET'
      }
    ]
  },
  '3.20.0': {
    options: {
      date: new Date('2024-01-31')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'envoie d\'un commentaire sur une commande lorsque le mode aperçu est activé' : 'Fix send comment on order when preview mode is enabled',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Depuis la page des logs, l\'affichage des activités est désormais mis à jour en direct' : 'From the logs page, the activity display is now updated live',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Depuis la page des logs, la barre de progression est désormais affichée sur les activités en cours' : 'From the logs page, the progress bar is now displayed on activities in progress',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'exporter une machine virtuelle au format OVF vers un catalogue local' : 'Ability to export a virtual machine in OVF format to a local catalog',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de réserver de la RAM sur une machine virtuelle' : 'Ability to reserve RAM on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de bugs pour l\'export CSV sur certaines informations manquantes concernant les logs et utilisateurs' : 'Fix CSV export bugs on missing log and user information',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le déplacement vers un datacenter différent d\'une machine virtuelle n\'ayant pas d\'adaptateur réseaux configuré' : 'Fix bug on moving a virtual machine with no network adapter configured to a different datacenter',
        tag: 'CMP'
      }
    ]
  },
  '3.21.0': {
    options: {
      date: new Date('2024-02-05')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration des messages d\'erreurs pas assez explicites' : 'Improvement of error messages not explicit enough',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de choisir un stockage différent par disque lors de l\'ajout de plusieurs disques à la fois' : 'Ability to choose a different storage per disk when adding several disks at once',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Gestion de l\'affichage des actions pour réaliser des commandes disponibles uniquement en environnement SNC' : 'Manage display of actions for orders available only in SNC environment',
        tag: 'ORDER'
      }
    ]
  },
  '3.22.0': {
    options: {
      date: new Date('2024-02-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Optimisation de la récupération des activités avec une pagination sur les appels API' : 'Optimize activity retrieval by paging API calls',
        tag: 'ACT'
      }
    ]
  },
  '3.23.0': {
    options: {
      date: new Date('2024-02-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout des menus Stockage et Stockage Object' : '',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page listant et permettant des actions sur les buckets et comptes de stockage' : '',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page sur les details d\'un bucket listant la configuration et les comptes de stockage associés' : '',
        tag: 'STORAGE'
      }
    ]
  },
  '3.23.1': {
    options: {
      date: new Date('2024-02-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du swagger' : 'Fix swagger display',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des logs pour les utilisateurs n\'ayant pas la permission "iam_read"' : 'Fix log display for users without "iam_read" permission',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Correction du bouton de reconnexion à une console de machine virtuelle' : 'Fix virtual machine console reconnect button',
        tag: 'CMP'
      },
    ]
  },
  '3.23.2': {
    options: {
      date: new Date('2024-02-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la selection d\'un datastore lors de la création d\'une bibliothèque de contenu' : 'Fix datastore choice when creating content library',
        tag: 'INF'
      }
    ]
  },
  '3.24.0': {
    options: {
      date: new Date('2024-03-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Lors de certaines actions sur certaines ressource, il est désormais possible d\'accéder cette ressource depuis la notification de succés' : 'When performing certain actions on certain resources, it is now possible to access this resource from the success notification',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Les tokens utilisés sur les swaggers sont désormais automatiquement renouvelés, il n\'est plus necessaire de raffraichir la page' : 'Tokens used on swaggers are now automatically renewed, no need to refresh the page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de filtres sur la page de rapport des sauvegardes' : 'Fixed filters on backup report page',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter des contrôleurs NVME sur une machine virtuelle' : 'Ability to add NVME controllers to a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de faire une mise à jour de configuration sur un ESX (mise à jour n\'ayant pas d\'impact sur la version du build)' : 'Ability to perform a configuration update on an ESX (update has no impact on build version)',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité de demander la suppression d\'une propagation d\'un réseau virtuel' : 'Ability to request deletion of a virtual network propagation',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de supprimer une politique de sauvegarde sur une machine virtuelle eteinte, même lorsque cette politique est la dernière assignée' : 'Ability to delete a backup policy on a switched-off virtual machine, even when this policy is the last one assigned',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'explorer et télécharger des fichiers dans un bucket' : 'Ability to browse and download files in a bucket',
        tag: 'STORAGE'
      },
    ]
  },
  '3.25.0': {
    options: {
      date: new Date('2024-03-05')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des modes de disques disponibles lors de la création' : 'Update display of disc modes available at time of creation',
        tag: 'CMP'
      }
    ]
  },
  '3.26.0': {
    options: {
      date: new Date('2024-03-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Nouveau module supportant le produit Openshift' : 'New module to support Openshift product',
        tag: 'OPENSHIFT'
      }
    ]
  },
  '3.27.0': {
    options: {
      date: new Date('2024-03-08')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'alertes concernant les modes de disques non pris en compte lors de la sauvegarde' : 'Add alerts about disk modes not supported during backup',
        tag: 'CMP'
      }
    ]
  },
  '3.27.1': {
    options: {
      date: new Date('2024-03-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug concernant la demande de déprovisionnement d\'un datastore' : 'Fix bug with datastore deprovisioning request',
        tag: 'ORDER'
      }
    ]
  },
  '3.28.0': {
    options: {
      date: new Date('2024-03-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de choisir un contrôleur NVME lors de la création d\'un disque' : 'Ability to choose NVME controller when creating a disk',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'activer ou désactiver les options vApp depuis les options avancées d\'une machine virtuelle' : 'Ability to enable or disable vApp options from a virtual machine\'s advanced options',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des types de disques disponibles lors de la création' : 'Update display of disc types available at time of creation',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Refonte du menu IPs publiques en un menu Internet' : 'Redesign of the Public IPs menu as an Internet menu',
        tag: 'NET'
      }
    ]
  },
  '3.29.0': {
    options: {
      date: new Date('2024-03-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour du formulaire pour la demande d\'ajout de datastore et l\'augmentation de la taille d\'un datastore' : 'Update form for datastore request and datastore size increase',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Affichage du nombre d\'adresses disponnibles pour chaque préfix depuis la page Internet' : 'Display the number of addresses available for each prefix from the web page',
        tag: 'NETWORK'
      },
      {
        text: lang === 'fr' ? 'Mise à jour et explication du fonctionnement des règles affinité/anti-affinité sur un cluster de calcul' : 'Update and explanation of how affinity/anti-affinity rules work on a compute cluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des options par défaut lors de la prise de snapshot sur une machine virtuelle' : 'Update of default options when taking snapshots on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Suppression de la recherche provoquant des erreurs et ralentissements lors de l\'exploration d\'un datastore' : 'Remove search causing errors and slowdowns when exploring a datastore',
        tag: 'CMP'
      }
    ]
  },
  '3.30.0': {
    options: {
      date: new Date('2024-04-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de l\'affichage des incidents ouverts depuis la barre de navigation' : 'Add display of open incidents from navigation bar',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page de tous les incidents ouverts et terminées' : 'Add a page of all open and completed incidents',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation sur les caractères autorisés dans le nom des fichiers envoyés lors de l\'upload dans un catalogue' : 'Add a validation on characters allowed in file names when uploading to a catalog',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Désactivation temporaire de la possibilité d\'upload dans un bucket depuis l\'application' : 'Temporary disable upload to bucket from application',
        tag: 'STORAGE'
      },
    ]
  },
  '3.31.0': {
    options: {
      date: new Date('2024-04-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout des incidents avec le statut "investigation" ou "identifié" à la liste des incidents ouverts' : 'Add incidents with the status "investigation" or "identified" to the list of open incidents',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'édtition des options liées à la ram d\'une machine virtuelle sans modifier la quantité de ram' : 'Fix editing of virtual machine ram options without modifying ram quantity',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'option "provisionnement fin" lors d\'une migration de stockage d\'une machine virtuelle' : 'Add "thin provisioning" option for virtual machine storage migration',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du menu lié à l\'avatar dans la barre de navigation lorsqu\'un utilisateur n\'a pas un nom et un prénom' : 'Fix display of avatar menu in navigation bar when a user doesn\'t have a first and last name',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Initialisation du nouveau module notification' : 'Initialization of new notification module',
        tag: 'NOTIF'
      },
      {
        text: lang === 'fr' ? 'Possibilité de lister et s\'abonner à des sujets depuis la page profil' : 'Ability to list and subscribe to topics from profile page',
        tag: 'NOTIF'
      },
      {
        text: lang === 'fr' ? 'Ajout du type d\'accès lors de la création d\'un bucket' : 'Access type added when creating a bucket',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier l\'accès d\'un bucket depuis les paramètres du bucket' : 'Ability to modify bucket access from bucket parameters',
        tag: 'STORAGE'
      },
    ]
  },
  '3.32.0': {
    options: {
      date: new Date('2024-05-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de commander le provisionnement d\'une nouvelle AZ' : 'Ability to order the provisioning of a new AZ',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation sur le nom lors de la création d\'un nouveau réseau virtuel' : 'Add name validation when creating a new virtual network',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une limitation à 20 réseaux maximum par propagation' : 'Add limitation to 20 maximum networks per propagation',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter une clé extra config "disk.EnableUUID" depuis les options avancées d\'une machine virtuelle' : 'Ability to add an extra config key "disk.EnableUUID" from a virtual machine\'s advanced options',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier un contrôleur SCSI sur une machine virtuelle éteinte' : 'Ability to modify a edit a controller on a powered off virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de renommer un élément du catalogue de modèle local' : 'Ability to rename an item in the local model catalog',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Gestion de l\'affichage des pages VMware lorsqu\'aucun environnement n\'est provisionné' : 'VMware page display management when no environment is provisioned',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une redirection sur les bulles d\'informations indiquant qu\'une commande est deja en cours' : 'Add redirection on information bubbles indicating that an order is already in progress',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Affichage des intervalles d\'IPs autorisés sur un bucket en accès privé ou personnalisé' : 'Display of IP ranges authorized on a bucket in private or personalized access',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'Possibilité de synchroniser les intervalles d\'IPs autorisés sur un bucket avec les intervalles d\'IPs internet publiques du tenant' : 'Ability to synchronize the IP ranges allowed on a bucket with the public internet IP ranges of the tenant',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier le contrôleur d\'un disque virtuel' : 'Ability to edit the controller of a virtual disk',
        tag: 'CMP'
      },
    ]
  },
  '3.32.1': {
    options: {
      date: new Date('2024-05-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la création d\'un réseau virtuel' : 'Fix creating a new virtual network',
        tag: 'NET'
      },
    ]
  },
  '3.33.0': {
    options: {
      date: new Date('2024-06-06')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter et supprimer des vApp properties depuis les options avancées d\'une machine virtuelle' : 'Ability to add and remove vApp properties from a virtual machine\'s advanced options',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'La recherche sur les tasks Vmware est maintenant également appliquée à la colonne "cible"' : 'Search on Vmware tasks is now also applied to the “target” column',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de générer une URL afin de partager un fichier depuis la page d\'un bucket' : 'Ability to generate a URL to share a file from a bucket page',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'La page des incidents terminés affiche désormais les incidents les plus récents en premier' : 'Ended incidents page now displays most recent incidents first',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de colonnes dernière execution et prochaine execution sur les jobs de sauvegardes' : 'Last execution and next execution columns added to backup jobs',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation empechant l\'assignation de politique en statut HELD' : 'Added validation to prevent policy assignment in HELD status',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'attribuer un nouveau nom à la restauration d\'une sauvegarde de machine virtuelle' : 'Ability to rename the restore of a virtual machine backup',
        tag: 'BACK'
      },
    ]
  },
  '3.33.1': {
    options: {
      date: new Date('2024-06-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'ajout d\'une propriété vApp de type booléen avec la valeur activée' : 'Fix boolean vApp property with value set to enabled',
        tag: 'CMP'
      },
    ]
  },
  '3.33.2': {
    options: {
      date: new Date('2024-06-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'assignation de la politique nobackup dû au statut de la politique' : 'Fix nobackup policy assignment due to policy status',
        tag: 'BACK'
      }
    ]
  },
  '3.33.3': {
    options: {
      date: new Date('2024-06-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'ouverture de la modal pour déplacer une machine virtuelle' : 'Fix opening modal to move a virtual machine',
        tag: 'CMP'
      },
    ]
  },
  '3.34.0': {
    options: {
      date: new Date('2024-06-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de la récupération et affichage des incidents généralisés ou liés au tenant' : 'Update getting and displaying generalized or tenant incidents',
        tag: 'GEN'
      },
    ]
  },
  '3.34.1': {
    options: {
      date: new Date('2024-06-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'assignation de la politique nobackup dû au statut de la politique (correction de la version 3.33.2 appliquée à la version 3.34.0)' : 'Fix nobackup policy assignment due to policy status  (fix of version 3.33.2 apply to version 3.34.0)',
        tag: 'BACK'
      },
    ]
  },
  '3.34.2': {
    options: {
      date: new Date('2024-06-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'assignation d\'une politique de sauvegarde sur un disque spécifique' : 'Fixed assignment of a backup policy to a specific disk',
        tag: 'BACK'
      },
    ]
  },
  '3.34.3': {
    options: {
      date: new Date('2024-06-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'ouverture de la modal pour déplacer une machine virtuelle (correction de la version 3.33.3 appliquée à la version 3.34.2)' : 'Fix opening modal to move a virtual machine (fix of version 3.33.3 apply to version 3.34.2)',
        tag: 'CMP'
      }
    ]
  },
  '3.34.4': {
    options: {
      date: new Date('2024-06-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage des politiques de sauvegardes d\'une machine virtuelle' : 'Fix bug displaying virtual machine backup policies',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug empechant dans certains cas le démarrage d\'une machine virtuelle en environnement non SNC' : 'Fix a bug preventing virtual machine startup in non-SNC environments in some cases',
        tag: 'BACK'
      },
    ]
  },
  '3.35.0': {
    options: {
      date: new Date('2024-07-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Nouvelle page permettant d\'afficher le rapport des consommations Cloud sur des intervalles de dates données' : 'New page for displaying Cloud usage reports for specific date ranges',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une permission spécifique pour l\'accès à la console d\'une appliance' : 'Add a specific permission for access to the console of an appliance',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des types de networks autorisés à être propagés' : 'Update network types authorized to be propagated',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'éditer la description d\'une snapshot' : 'Ability to edit the description of a snapshot',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de passer plusieurs networks sur la même actions de création de réseaux' : 'Ability to send multiple networks on the same create network action',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Les 2 datastores par défaut ne peuvent pas être de type MASS à la création d\'une AZ' : 'The 2 default datastores cannot be of type MASS when creating an AZ',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un champ pour les fichiers de configuration lors du déplacement d\'une machine virtuelle' : 'Add a field for configuration files when moving a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une colonne indiquant la propagation d\'un réseau' : 'Add a column indicating network propagation',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Ajout des commandes de calcul sur le formulaire de la page listant les commandes' : 'Add compute orders to the form on the page listing commands',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de réactiver un réseaux supprimé' : 'Ability to reactivate a deleted network',
        tag: 'NET'
      }
    ]
  },
  '3.35.1': {
    options: {
      date: new Date('2024-07-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la récupération des réseaux lors de la commande d\'une nouvelle zone de disponibilité' : 'Fix network recovery when ordering a new availability zone',
        tag: 'ORDER'
      }
    ]
  },
  '3.35.2': {
    options: {
      date: new Date('2024-07-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de vérifications et messages lors de la restauration d\'une sauvegarde' : 'Add checks and messages when restoring a backup',
        tag: 'BACK'
      }
    ]
  },
  '3.36.0': {
    options: {
      date: new Date('2024-07-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de commander le provisionnement d\'un cluster d\'hyperviseur' : 'Ability to order the provisioning of an hypervisor cluster',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de commander la suppression d\'un cluster d\'hyperviseur' : 'Ability to order the deletion of an hypervisor cluster',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de commander le provisionnement d\'un cluster de stockage' : 'Ability to order the provisioning of a storage cluster',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de commander la suppression d\'un cluster de stockage' : 'Ability to order the deletion of a storage cluster',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page listant les IPs publiques et les subnets autorisés à accéder à la console (nouvelle permission nécessaire)' : 'Add a page listing public IPs and subnets authorized to access the console (new permission required)',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter une IPs à la liste autorisée à accéder à la console (nouvelle permission nécessaire)' : 'Ability to add an IPs to the list authorized to access the console (new permission required)',
        tag: 'GEN'
      },
    ]
  },
  '3.36.1': {
    options: {
      date: new Date('2024-07-29')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la restauration d\'une VM lors d\'une restauration complete avec un cluster aternatif dans un cas spécifique' : 'Fixed vm restoration when restoring entire virtual machine with an alternate ESX Host or Cluster in a specific case',
        tag: 'BACK'
      },
    ]
  },
  '3.36.2': {
    options: {
      date: new Date('2024-08-08')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la création d\'une machine virtuelle à partir d\'un template de machine virtuelle' : 'Fixed vm creation from vm template',
        tag: 'CMP'
      },
    ]
  },
  '3.37.0': {
    options: {
      date: new Date('2024-09-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Possibilité de commander des IPs publiques depuis la page internet du menu réseau' : 'Public IPs can be ordered from the web page in the network menu',
        tag: 'NETWORK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un avertissement lors de la mise en maintenance d\'un datastore s\'il contient des bibliothèques de contenu' : 'Add a warning when a datastore is put into maintenance if it contains content libraries',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Affichage des propriétaire d\'un tenant' : 'Tenant owner\'s display',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Possibilité pour un propriétaire de déclarer un utilisateur comme également propriétaire du tenant' : 'Ability for an owner to declare a user as also being the owner of the tenant',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un avertissement lors de la suppression d\'un iso d\'une bibliothèque de contenu  lorsqu\'il est monté dans une machine virtuelle' : 'Add warning when deleting a content library iso when mounted in a virtual machine',
        tag: 'CMP'
      },

    ]
  },
  '3.37.1': {
    options: {
      date: new Date('2024-09-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du warning concernant les libraries de contenu lors de la suppression d\'un datastore' : 'Corrected warning about content libraries when deleting a datastore',
        tag: 'INF'
      },
    ]
  },
  '3.37.2': {
    options: {
      date: new Date('2024-09-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration des messages concernant le fonctionnement des propriétaires d\'un tenant' : 'Improved messages about how unit owners work',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une redirection de la route /support vers /administration/support afin de corriger les redirections des tickets support depuis un mail' : 'Add a redirection from the /support route to /administration/support to correct redirections of support tickets from email',
        tag: 'GEN'
      },
    ]
  },
  '3.37.3': {
    options: {
      date: new Date('2024-09-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de topics dans le menu "Mes abonnements" depuis le profil utilisateur, en fonction des permissions necessaires pour chaque topic' : 'Fix the display of topics in the “My subscriptions” menu from the user profile, depending on the permissions required for each topic',
        tag: 'NOTIF'
      }
    ]
  },
  '3.37.4': {
    options: {
      date: new Date('2024-09-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du bouton "Synchroniser" pour la réplication d\'une machine virtuelle qui doit être désactivé lorsque la réplication n\'est pas active' : 'Fix “Synchronize” button for virtual machine replication to be disabled when replication is not active',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de confirmation par nom lors de la demande de suppression de ressources infrastructure' : 'Add confirmation by name when requesting deletion of infrastructure resources',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Les modifications des permissions d\'un propriétaire du tenant est désactivé' : 'Permission changes of a tenant owner are disabled',
        tag: 'IAM'
      }
    ]
  },
  '3.37.5': {
    options: {
      date: new Date('2024-10-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Modification du message d\'avertissement lors de la demande de suppression d\'un cluster' : 'Modification of the warning message when ordering the deletion of a cluster',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Suppression des boutons "Selectionner mes permissions" et "Tout déselectionner" lors de l\'édition d\'un propriétaire du tenant' : 'Remove "Select my permissions" and "Unselect all" buttons when editing a tenant owner',
        tag: 'IAM'
      }
    ]
  },
  '3.38.0': {
    options: {
      date: new Date('2024-10-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Intégration du module OpenIaaS désormais disponible dans la console. Cette fonctionnalité permet la création, la configuration et la sauvegarde des machines virtuelles, offrant ainsi une alternative à notre solution VMware.' : 'Integration of the OpenIaaS module now available in the console. This feature enables the creation, configuration and backup of virtual machines, offering an alternative to our VMware solution.',
        tag: 'OpenIaasCMP'
      },
    ]
  },
  '3.38.1': {
    options: {
      date: new Date('2024-10-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage du mode des disques depuis une machine virtuelle' : 'Fix disk mode display on a virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Sur une politique désactivée, le bouton pour executer la politique est désactivé' : 'On a disabled policy, the button to execute the policy is disabled',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.0.0': {
    options: {
      date: new Date('2024-10-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Nouveau design de la Console' : 'New Console design',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Refonte des pages infrastructure et sauvegarde' : 'Redesign of infrastructure and backup pages',
        tag: 'GEN'
      }
    ]
  },
  '4.0.1': {
    options: {
      date: new Date('2024-10-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Améliorations et correctifs liés au nouveau design' : 'Improvements and fixes about the new design',
        tag: 'GEN'
      },
    ]
  },
  '4.0.2': {
    options: {
      date: new Date('2024-10-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Améliorations et correctifs liés au nouveau design' : 'Improvements and fixes about the new design',
        tag: 'GEN'
      },
    ]
  },
  '4.0.3': {
    options: {
      date: new Date('2024-11-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Améliorations et correctifs liés au nouveau design' : 'Improvements and fixes about the new design',
        tag: 'GEN'
      },
    ]
  },
  '4.1.0': {
    options: {
      date: new Date('2024-11-13')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout des activités de snapshots dans l\'onglet snapshot d\'une VM' : 'Add snapshot activities in the snapshot tab of a VM',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Affichage de la taille réelle des machines virtuelles dans l\'export CSV' : 'Display actual virtual machine size in CSV export',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la redirection du tableau de bord sur les dernières sauvegardes en erreur' : 'Fix dashboard redirection on last backup errors',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation sur la précense de politiques de sauvegarde sur l\'option de démarrage automatique' : 'Add validation of the backup policy precense on the auto power on option',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une option pour forcer l\'arrêt/redémarrage des machines virtuelles sans guest-tools installés' : 'Add option to force shutdown/restart for virtual machines without guest tools installed',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Désactivation de la possibilité de supprimer un propriétaire' : 'Disable the ability to delete an owner',
        tag: 'IAM'
      },
      {
        text: lang === 'fr' ? 'Amélioration du message d\'exécution d\'une politique OpenIaas sur une machine virtuelle spécifique' : 'Improve execution message of an OpenIaas policy on a specific VM',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la commande d\'IP depuis la page des commandes' : 'Fix a bug in the IP command from the orders page',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la mise en maintenance dans la liste des hôtes, onglet "tous"' : 'Fix bug with maintenance status in hosts list, "all" tab',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de la gestion d\'ajout, de suppression et d\'édition d\'un datastore depuis la page des commandes' : 'Add management for adding, deleting, and editing a datastore from the orders page',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'envoyer un fichier lors d\'un feedback' : 'Ability to send a file in feedback',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité de supprimer un Host' : 'Add ability to delete Host',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une validation sur le champ Host d\'un équipement' : 'Add validation to the Host field of a device',
        tag: 'BST'
      },
      {
        text: lang === 'fr' ? 'Sur les pages calcul et stockage, le filtre sur les zones de disponibilités s\'applique également aux onglets de cluster' : 'On the compute and storage pages, the filter on availability zones is also applies to the cluster tabs',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage et de l\'edition de la RAM d\'une machine virtuelle lorsque la valeur n\'est pas un entier' : 'Fix of the display and editing of the RAM of a virtual machine when the value is not an integer',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Affichage des pourcentages d\'utilisation sur les barres de consommations (CPU / RAM / Stockage)' : 'Display of usage percentages on consumption bars (CPU / RAM / Storage)',
        tag: 'INF'
      }
    ]
  },
  '4.1.1': {
    options: {
      date: new Date('2024-11-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration de l\'édition de la mémoire, la conversion est effectuée vers l\'unité avec la dernière valeur entière' : 'Improved memory editing, the conversion is made to the unit with the last integer value.',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Lors d\'une snapshot, le bouton pour sauvegarder la RAM est désactivé lorsque la machine virtuelle est éteinte' : 'When a snapshot is taken, the button for saving RAM is disabled when the virtual machine is switched off.',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur OpenIaas autopowerOn lors de sa désactivation' : 'Fix a bug on OpenIaas autopowerOn when disabling it',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Lorsque plusieurs machines virtuelles sont déroulées, la liste des disques ne s\'affiche pas aussitôt' : 'When several virtual machines are unrolled, the list of disks is not displayed immediately',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du bouton d\'export CSV dans l\'onglet machines virtuelles de la page de rapports de sauvegarde' : 'Add back the CSV export button in the virtual machines tab of the backup reports page',
        tag: 'BACK'
      }
    ]
  },
  '4.1.2': {
    options: {
      date: new Date('2024-11-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des services qui ne prenait pas en compte le nombre d\'éléments par page sélectionnée' : 'Fix the display of services which did not take into account the number of elements per page selected',
        tag: 'MNT'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des catégories dans le menu lorsqu\'aucune page de la catégorie n\'est disponible et modification de l\'agencement des menus pour un tenant non SecNumCloud' : 'Fix the display of categories in the menu when no category page is available and modified the menu layout for a non-SecNumCloud tenant',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de certains messages d\'erreurs incomplets sur les tasks VMware (disponibles depuis la page d\'un vCenter ou depuis une machine virtuelle)' : 'Fix the display of some incomplete error messages on VMware tasks (available from a vCenter page or from a virtual machine)',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la suppression d\'une machine virtuelle en mode "test"' : 'Fix deletion of a virtual machine in "test" mode',
        tag: 'BACK'
      },
    ]
  },
  '4.2.0': {
    options: {
      date: new Date('2024-12-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Modification des informations affichées depuis la page périphériques' : 'Modification of the information displayed on the peripherals page',
        tag: 'HOUSING'
      },
      {
        text: lang === 'fr' ? 'Les éléments déjà présents dans \'Mon catalogue\' restent désormais affichés dans \'Catalogue publique\'' : 'Items already present in "My catalog" now remain visible in "Public catalog"',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajouter de redirections sur les composants cités dans un item du catalogue VMware' : 'Add redirections to components mentioned in an VMware catalog item',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage de la RAM sur un cluster d\'hyperviseurs' : 'Update the RAM display on a hypervisor cluster',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Suppression de l\'option de répliquer automatiquement les nouveaux disques entraînant des erreurs' : 'Remove the option to automatically replicate new disks causing errors',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de validations sur la réplication d\'une machine virtuelle' : 'Add validations for virtual machine replication',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de nouvelles extra config PCIPassthru depuis la configuration avancée d\'une machine virtuelle pour la gestion GPU' : 'Add new PCI Passthru configurations in the advanced settings of a virtual machine for GPU management',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Retirer plusieurs options Backup non fonctionnelles sur des machines virtuelles en mode test' : 'Remove several non-functional backup options for virtual machines in test mode',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Corriger les problèmes de redirection sur les graphiques du tableau de bord Backup' : 'Fix redirection issues on Backup dashboard graphs',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page sauvegarde pour la partie sauvegardes OpenIaas listant les erreurs, les politiques, les rapports des sauvegardes et permettant la récupération de machines virtuelles supprimées' : 'Add a backup page for OpenIaas, listing errors, policies, backup reports, and enabling recovery of deleted virtual machines',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Affichage des recommandations et pannes DRS depuis un cluster d\'hyperviseurs' : 'Display DRS recommendations and failures from a hypervisor cluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Nouveau statut sur les hyperviseurs et datastores lorsqu\'une demande de mise en maintenance est en cours' : 'New status for hypervisors and datastores during a maintenance request',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page pour lister les zones de disponibilité OpenIaas' : 'Add a page to list OpenIaas availability zones',
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr' ? 'Correction des filtres pour récupérer la liste des machines virtuelles et ajout de validations lors de la création d\'une règle affinité/anti-affinité' : 'Fix filters to retrieve the list of virtual machines and add validations when creating affinity/anti-affinity rules',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajouter de redirections vers la status page' : 'Add redirections to the status page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajouter une page stockage pour la partie OpenIaas' : 'Add a storage page for OpenIaas',
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr' ? 'Ajout des informations sur le GPU d\'un hyperviseur' : 'Add GPU information for a hypervisor',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter un contrôleur PCI sur les machines virtuelles' : 'Ability to add a PCI controller to virtual machines',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page calcul pour la partie OpenIaas' : 'Add a compute page for OpenIaas',
        tag: 'OpenIaasINF'
      }
    ]
  },
  '4.3.0': {
    options: {
      date: new Date('2024-12-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction des filtres appliqués sur les onglets des erreurs de la page sauvegardes XOA' : 'Fix filters applied on the error tabs of the XOA backup page',
        tag: 'OpenIaasBACK'
      },
      {
        text: lang === 'fr' ? 'Ajout des VM-templates XOA depuis la page catalogues' : 'Add XOA VM-templates from the catalog page',
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr' ? 'Ajout des liens "accéder à la ressource" sur les activités liées à XOA et Object-Storage' : 'Add "access the resource" links on activities related to XOA and Object-Storage',
        tag: 'ACT'
      },
      {
        text: lang === 'fr' ? 'Pouvoir créer et réinitialiser la clé d\'accès global depuis les comptes de stockage' : 'Be able to create and reset the global access key from storage accounts',
        tag: 'OS'
      },
      {
        text: lang === 'fr' ? 'Proposer d\'exporter uniquement les éléments filtrés sur l\'export CSV des rapports de sauvegarde dans le sous-onglet machines virtuelles' : 'Offer to export only filtered items in the CSV export of backup reports under the virtual machines sub-tab',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Ajout des tags et l\'IP de la machine virtuelle à l\'export CSV des machines virtuelles' : 'Add virtual machine tags and IP to CSV export of virtual machines',
        tag: 'CMP'
      }
    ]
  },
  '4.3.1': {
    options: {
      date: new Date('2024-12-23')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug lors de la suppression d\'une politique de sauvegarde sur une machine virtuelle' : 'Fix bug when deleting a backup policy on a virtual machine',
        tag: 'OpenIaasBACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le filtre de recherche des comptes de stockage' : 'Fix bug in storage account search filter',
        tag: 'OS'
      },
    ]
  },
  '4.4.0': {
    options: {
      date: new Date('2024-01-13')
    },
    data: [
      {
        text: lang === 'fr' ? 'Modifications techniques apportées lors du processus d\'authentification' : 'Technical changes to the authentication process',
        tag: 'GEN'
      }
    ]
  },
  '4.5.0': {
    options: {
      date: new Date('2025-01-17')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une commande nouvelle Zone de Disponibilité OpenIaaS' : 'Add a new Availability Zone order for OpenIaaS',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'upload ISO sur les catalogues OpenIaaS' : 'Add ISO upload feature to OpenIaaS catalogs',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une commande pour le Bare Metal' : 'Add an order option for Bare Metal',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page listant les Bare Metal' : 'Add a page listing Bare Metals',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page listant les volumes Bare Metal' : 'Add a page listing Bare Metal volumes',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une page avec les détails d\'un Bare Metal' : 'Add a page displaying details of a Bare Metal',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Ajout de la possibilité d\'ouvrir une console Bare Metal' : 'Add the ability to open a Bare Metal console',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Ajout de la description à la création et l\'affichage des whitelists' : 'Add description during the creation and display of whitelists',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité de modifier la description d\'une whitelist' : 'Enable updating the description of a whitelist',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Ajout du déplacement des machines virtuelles OpenIaaS' : 'Add virtual machine migration for OpenIaaS',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Afficher la taille restante entre parenthèses dans les arbres de selection de stockage' : 'Display the remaining size in parentheses in the storage selection trees',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Pouvoir choisir les disques et réseaux à la création d\'une machine virtuelle OpenIaaS' : 'Enable disk and network selection during the creation of an OpenIaaS virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout du pire cas d\'allocation mémoire sur un hostCluster VMware' : 'Display the worst-case memory allocation on an VMware host cluster',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Lier un cluster d\'hyperviseur à un cluster de stockage' : 'Link a hypervisor cluster to a storage cluster',
        tag: 'ORDER'
      }
    ]
  },
  '4.5.1': {
    options: {
      date: new Date('2025-01-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Corrections UI mineures' : 'Minor UI fixes',
        tag: 'GEN'
      },
    ]
  },
  '4.5.2': {
    options: {
      date: new Date('2025-01-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Corrections UI mineures' : 'Minor UI fixes',
        tag: 'GEN'
      },
    ]
  },
  '4.5.3': {
    options: {
      date: new Date('2025-01-28')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'ouverture de la console OpenIaaS lorsque les fonctionnalités VMware sont désactivées' : 'Fix OpenIaaS console opening when VMware features are disabled',
        tag: 'OpenIaasCMP'
      },
    ]
  },
  '4.6.0': {
    options: {
      date: new Date('2025-01-30')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug empêchant la modification de la configuration DRS des clusters de datastore' : 'Fix a bug preventing the modification of DRS configuration on datastore clusters',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'export en modèle d\'une machine virtuelle' : 'Add export to virtual machine template',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajouter la possibilité de chiffrer une machine virtuelle' : 'Add the ability to encrypt a VMware virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Retirer les caractères affichés lors de l\'auto-complétion sur l\'ajout d\'observateurs à la création d\'un ticket support' : 'Remove displayed characters during auto-completion when adding observers in support ticket creation',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur l\'ouverture de la modal d\'ajout à la réplication d\'une machine virtuelle lorsque les disques ne sont pas chargés' : 'Fix a bug on the opening of the replication modal when disks are not loaded',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichages des abonnements aux notification depuis la page profil' : 'Update notification subscription displays from profile page',
        tag: 'NOTIF'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage du menu et des pages disponibles pour les offres VMware et OpenIaaS sur un nouvel environnement sans zones de disponibilité provisionnée' : 'Update of the menu display and available pages for VMware and OpenIaaS offers on a new environment without provisioned availability zones',
        tag: 'GEN'
      }
    ]
  },
  '4.7.0': {
    options: {
      date: new Date('2025-02-03')
    },
    data: [
      {
        text: lang === 'fr' ? 'Amélioration de l\'affichage des propagations des réseaux lorsque des demandes de suppression de propagations sont en cours' : 'Improved display of network propagations when propagation deletion requests are in progress',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'L\'export en OVF est bloqué quand la machine virtuelle est chiffrée' : 'OVF export is blocked when the virtual machine is encrypted',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le déploiement de template VMware lors de la selection de la zone de disponibilité' : 'Fix bug on VMware template deployment when selecting availability zone',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Modification de l\'option de démarrage après restauration pour un environnement SecNumCloud lors de la restauration en mode clone ou prodution sur un host ou cluster alternatif' : 'Modification of the post-restore boot option for a SecNumCloud environment when restoring in clone or prodution mode on an alternative host or cluster',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Afficher les relations datastores clusters et host clusters dans les pages Calcul et Stockage' : 'Display datastore cluster and host cluster relationships in the Compute and Storage pages',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Ajouter les boutons monter et démonter un ISO OpenIaaS dans la barre d\'actions d\'une machine virtuelle' : 'Add the mount and unmount OpenIaaS ISO buttons to the virtual machine action bar',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.8.0': {
    options: {
      date: new Date('2025-02-14')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de la visualisation des propagations d\'un réseau et ajout de propagations OpenIaaS' : 'Update network propagation visualization and add OpenIaaS propagations',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter des options Cloud Init à la création d\'une machine virtuelle OpenIaaS' : 'Ability to add Cloud Init options when creating an OpenIaaS virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la commande de propagation d\'un réseau sur des Pools OpenIaaS' : 'Add network propagation order for OpenIaaS pools',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout des commandes de propagation réseau dans la page de toutes les commandes' : 'Add network propagation orders to the global orders page',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Affichage des disques sur la page d\'un Block Storage' : 'Display disks on a Block Storage page',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la création d\'un réseau et possibilité de propager le réseau sur l\'infrastructure OpenIaaS dès sa création' : 'Update network creation and add propagation on OpenIaaS infrastructure at creation',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Possibilité de mettre à jour la configuration du boot firmware d\'une machine virtuelle OpenIaaS' : 'Ability to update boot firmware configuration of an OpenIaaS virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Affichage du nombre de disques affectés et disponibles par contrôleur sur une machine virtuelle' : 'Display the number of allocated and available disks per controller on a virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des conditions sur le nombre de disques possibles à ajouter sur des controleurs SCSI Para Virtual en fonction de la version hardware de la machine virtuelle' : 'Updated conditions on the number of disks that can be added to Para Virtual SCSI controllers depending on the hardware version of the virtual machine.',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Pouvoir cloner une machine virtuelle OpenIaaS' : 'Ability to clone an OpenIaaS virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le tri des fonctionnalités obsolètes par version' : 'Fix bug in sorting deprecated features by version',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le tri des interventions terminées et des incidents sans date de démarrage' : 'Fix sorting issue for completed interventions and incidents without start dates',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction de la commande de suppression d\'un datastore depuis la page de toutes les commandes' : 'Fix datastore delete command from all commands page',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Correction d\'erreurs sur la documentation API lors de l\'utilisation de certains GET n\'affichant pas le résultat' : 'Fix errors in API documentation when using some GETs that did not display the result.',
        tag: 'GEN'
      }
    ]
  },
  '4.8.1': {
    options: {
      date: new Date('2025-02-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug suite à la mise à jour des recommendations envoyées au démarrage d\'une machine virtuelle' : 'Bug fixed following update of recommendations sent at virtual machine power on',
        tag: 'CMP'
      },
    ]
  },
  '4.9.0': {
    options: {
      date: new Date('2025-02-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Bloquer la création d\'une machine virtuelle si la place sur les Block Storage sélectionnés n\'est pas suffisante' : 'Block virtual machine creation if the selected Block Storages do not have enough space',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Corriger le dimensionnement horizontal des blocs Cloud Init lors de la création d\'une machine virtuelle' : 'Fix horizontal sizing of Cloud Init blocks when creating a virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Pouvoir copier dans le presse-papier un point de terminaison S3' : 'Enable copying an S3 endpoint to the clipboard',
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? 'Rendre cliquables les noms dans les tableaux lorsqu\'une page liée existe' : 'Make table names clickable when a related page exists',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Améliorer l\'ouverture des consoles pour éviter l\'ouverture de plusieurs onglets si plusieurs fenêtres sont ouvertes sur la même page' : 'Improve console handling to prevent multiple tabs from opening when several windows are open on the same page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Afficher une erreur lors de l\'ouverture d\'une console si le navigateur n\'autorise pas les redirections sur l\'application' : 'Display an error when opening a console if the browser does not allow redirections in the application',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Afficher l\'unité de la RAM sur la page santé des machines virtuelles' : 'Display RAM units on the virtual machine health page',
        tag: 'MET'
      },
      {
        text: lang === 'fr' ? 'Vider les adresses MAC par défaut lors de la création d\'une machine virtuelle OpenIaaS' : 'Clear the default MAC address when creating an OpenIaaS virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'ouverture des details d\'une erreur de sauvegarde depuis l\'onglet rapport par machine virtuelles' : 'Fix opening of backup error details from the report by virtual machine tab.',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction lors de l\'upload d\'un fichier, lorsqu\'un fichier avait deja été selectionné il ne pouvait pas etre selectionné à nouveau sans rafraichir la page' : 'Correction when uploading a file, when a file had already been selected it could not be selected again without refreshing the page.',
        tag: 'GEN'
      }
    ]
  },
  '4.9.1': {
    options: {
      date: new Date('2025-02-27')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout de restrictions sur les caractères autorisés dans les noms des machines virtuelles OpenIaaS' : 'Add of restrictions on characters allowed in OpenIaaS virtual machine names',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la validation de la taille restante sur un Block Storage lors d\'ajout de disque sur le formulaire d\'une nouvelle machine virtuelle' : 'Fix validation of remaining size on Block Storage when adding disks to a new virtual machine form.',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Correction sur le montage d\'un ISO sur une machine virtuelle en passant par un catalogue' : 'Fix for mounting an ISO on a virtual machine via a catalog',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'éditer un adaptateur réseau sur une machine virtuelle allumée' : 'Ability to edit a network adapter on a powered on virtual machine',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Correction de la commande d\'IPs publiques depuis le menu de toutes les commandes' : 'Fix of the public IPs command in the menu of all orders',
        tag: 'ORDER'
      }
    ]
  },
  '4.10.0': {
    options: {
      date: new Date("2025-03-04")
    },
    data: [
      {
        text: lang === 'fr' ? "Ajout d’une alerte pour informer les utilisateurs en cas de doublon d’adresses MAC sur la liste des machines virtuelles et lors de la création ou modification d'adaptateurs réseaux" : "Added an alert to notify users in case of duplicate MAC addresses on the virtual machine list and during the creation or modification of network adapters",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout d’une option pour forcer l'arrêt ou le redémarrage d'une machine virtuelle" : "Added an option to force shutdown or restart a virtual machine",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "La mémoire ne sera plus incluse par défaut lors d'un snapshot si la machine virtuelle n’est pas allumée" : "Memory will no longer be included by default during a snapshot if the virtual machine is not powered on",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Correction de la gestion des erreurs au chargement d'un hosts" : "Fixed error handling when loading an host",
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? "Possibilité de renommer et redimensionner un disque" : "Ability to rename and resize a disk",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout de la suppression des ISO et modèles depuis la page catalogue" : "Added the ability to delete ISOs and templates from the catalog page",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout de la possibilité de supprimer le disque de configuration 'Cloud Init' lors du déploiement d’une machine virtuelle" : "Added the ability to remove the 'Cloud Init' configuration disk during virtual machine deployment",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Mise à jour des liens vers la nouvelle documentation publique" : "Updated links to the new public documentation",
        tag: 'GEN'
      }
    ]
  },
  '4.11.0': {
    options: {
      date: new Date('2025-03-10')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du bug sur l’actualisation automatique lors de la suppression d’un élément dans la page catalogue' : 'Fix for automatic refresh bug when deleting an element from the catalog page',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Permettre le déploiement d’une machine virtuelle via import XVA pour OpenIaaS' : 'Enable virtual machine deployment via XVA import for OpenIaaS',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la gestion des labels sur les pools OpenIaaS' : 'Add label management for OpenIaaS pools',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout de la gestion des labels sur les datastore cluster et host cluster VMware' : 'Add label management for datastore clusters and VMware host clusters',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des types de réseaux autorisés lors de la création d’une AZ' : 'Update allowed network types during AZ creation',
        tag: 'Order'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des informations CPU des hôtes et pools OpenIaaS' : 'Update CPU information for OpenIaaS hosts and pools',
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr' ? 'Ajout des IOPS/TO sur les volumes baremetal' : 'Add IOPS/TO metrics for baremetal volumes',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Affichage du nom de la machine virtuelle dans l’onglet de la console pour VMware' : 'Display the virtual machine name in the console tab for VMware',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Affichage du nom de la machine virtuelle dans l’onglet de la console pour OpenIaaS' : 'Display the virtual machine name in the console tab for OpenIaaS',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des ressources minimum à provisionner lors de la commande d\'une nouvelle zone de disponibilité' : 'Update the minimum resources to be provisioned when ordering a new availability zone',
        tag: 'ORDER'
      }
    ]
  },
  '4.11.1': {
    options: {
      date: new Date('2025-03-12')
    },
    data: [
      {
        text: lang === 'fr' ? 'Lorsque le champ label des hostCluster et datastoreCluster est modifié à vide, le nom technique sera appliqué par défaut' : 'When the label field of hostCluster and datastoreCluster is cleared, the technical name will be applied by default',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Lorsque le champ label des pools est modifié à vide, le nom technique sera appliqué par défaut' : 'When the label field of pools is cleared, the technical name will be applied by default',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des noms des zones de disponibilités lors d\'une commande' : 'Update availability zone names when placing an order',
        tag: 'Order'
      },
      {
        text: lang === 'fr' ? 'Correction du bug sur le nom affiché dans l’onglet console OpenIaaS' : 'Fixed bug where the name was incorrectly displayed in the OpenIaaS console tab',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Modification du minimum de datastore lors de la commande d\'un datastoreCluster' : 'Update the minimum datastore value when ordering a datastoreCluster',
        tag: 'Order'
      },
      {
        text: lang === 'fr' ? 'Correction du bug où le BIOS reste marqué "undefined" lors de la commande d’un nouveau baremetal' : 'Fixed bug where the BIOS remained marked as "undefined" when ordering a new baremetal server',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une bulle informative sur la page catalogue et lors de l\'import ISO pour indiquer que le XVA est pris en charge lors de la création d’une machine virtuelle' : 'Added an informational tooltip on the catalog page and during ISO import to indicate that XVA is supported when creating a virtual machine',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.11.2': {
    options: {
      date: new Date('2025-03-19')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la visualisation des propagations affichant plusieurs fois un même pool' : 'Fix of a bug in the visualization of propagations displaying the same pool several times',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage de la maintenance d\'un Block Storage' : 'Fix Block Storage maintenance display',
        tag: 'OpenIaasINF'
      }
    ]
  },
  '4.11.3': {
    options: {
      date: new Date('2025-03-21')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour du message d\'erreur lors de l\'accès aux fichiers d\'un bucket Object Storage' : 'Update error message when accessing files in an Object Storage bucket',
        tag: 'OS'
      }
    ]
  },
  '4.12.0': {
    options: {
      date: new Date('2025-03-25')
    },
    data: [
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des disques d\'un Block Storage OpenIaaS' : 'OpenIaaS Block Storage disk display update',
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr' ? 'Ajout des tags sur les machines virtuelles OpenIaaS' : 'Add tags to OpenIaaS virtual machines',
        tag: 'TAG'
      },
      {
        text: lang === 'fr' ? 'Afficher l\'importation d\'un XVA OpenIaaS sur la liste des téléchargements' : 'Display OpenIaaS XVA import in the uploads list',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'attacher un disque existant à une machine virtuelle' : 'Ability to attach an existing disk to a virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de détacher un disque xistant d\'une machine virtuelle' : 'Ability to detach an existing disk from a virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la récupération des recommandations API sur les règles affinité/anti-affinité d\'un HostCluster' : 'Update API recommendations retrieval for HostCluster affinity/anti-affinity rules',
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? 'Possibilité de supprimer une IP whitelist depuis la page accès' : 'Ability to delete an IP whitelist from the access page',
        tag: 'GEN'
      }
    ]
  },
  '4.12.1': {
    options: {
      date: new Date('2025-03-26')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug dupliquant les affichages des machines virtuelles pour les règles d\'affinité/anti-affinité' : 'Fixed bug duplicating virtual machine displays for affinity/anti-affinity rules',
        tag: 'INF'
      }
    ]
  },
  '4.12.2': {
    options: {
      date: new Date('2025-03-31')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la validation lors de la propagation d\'un réseaux déjà propagé sur un des clusters selectionné' : 'Fix of validation when propagating a network already propagated on one of the selected clusters',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Correction de la limite d\'adaptateurs réseaux possible sur une machine virtuelle (7)' : 'Fix network adapter limit on a virtual machine (7)',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.12.3': {
    options: {
      date: new Date('2025-04-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des réseaux lors de la création d\'une machine virtuelle OpenIaaS' : 'Fix display of networks when creating an OpenIaaS virtual machine',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.12.4': {
    options: {
      date: new Date('2025-04-02')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de la validation lors de la propagation d\'un réseaux déjà propagé sur OpenIaaS' : 'Fix of validation when propagating a network already propagated on OpenIaaS',
        tag: 'NET'
      }
    ]
  },
  '4.12.5': {
    options: {
      date: new Date('2025-04-07')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction UI mineur sur le formulaire de propagation d\'un réseau virtuel' : 'Minor UI fix on virtual network propagation form',
        tag: 'NET'
      }
    ]
  },
  '4.13.0': {
    options: {
      date: new Date('2025-04-08')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des Block Storage lors de la restauration d\'une sauvegarde' : 'Fix display of Block Storage during backup restore',
        tag: 'OpenIaasBACK'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton copier UUID sur les réseaux et catalogues VMware' : 'Add an UUID copy button on VMware networks and catalogs',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton copier UUID sur les réseaux et catalogues OpenIaaS' : 'Add an UUID copy button on VMware networks and catalogs',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un bouton copier UUID sur un Bare Metal' : 'Add an UUID copy button on a Bare Metal',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Refonte de l\'affichage des détails d\'une commande' : 'Redesign of the order details display',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Refonte de l\'affichage des choix de commandes' : 'Redesign of the order options display',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage pour commander le premier baremetal lorsqu’il n’y en a aucun' : 'Update display to allow ordering the first baremetal if none exists',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de la commande d\'un Bare Metal avec la selection de la propagation des réseaux sur les interfaces du Bare Metal' : 'Update Bare Metal provisioning by allowing selection of network propagation on its interfaces',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de propagager un VLAN sur un Bare Metal' : 'Ability to propagate VLAN to a Bare Metal',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter un volume à un baremetal' : 'Ability to add a volume to a Bare Metal',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de déprovisionner un volume d\'un Bare Metal' : 'Ability to deprovision a Bare Metal volume',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de déprovisionner un Bare Metal' : 'Ability to deprovision a Bare Metal',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de visualiser les propagations sur un Bare Metal d\'un réseau' : 'Add ability to view propagation of a network on a Bare Metal',
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? 'Ajout de l\'affichage des interfaces réseau et les réseaux qui y sont propagés sur un baremetal' : 'Add display of network interfaces and propagated networks on a Bare Metal',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Ajouter les actions allumer, redémarrer et éteindre un baremetal' : 'Add power on, reboot, and power off actions on a Bare Metal',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Ajout de statistiques et informations de contact sur la page Support' : 'Add statistics and contact information to the Support page',
        tag: 'GEN'
      }
    ]
  },
  '4.13.1': {
    options: {
      date: new Date('2025-04-16')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des VLAN sur la liste des réseaux d\'un Bare Metal' : 'Fix display of VLAN IDs on a Bare Metal network list',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Correction de la propagation d\'un réseau sur un Bare Metal après avoir déjà propagé un réseau sans rafraichir' : 'Fix network propagation on Bare Metal after having already propagated a network without refreshing',
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? 'Correction de la propagation d\'un réseau sur un Bare Metal ayant une configuration réseau de type Bond' : 'Fix of network propagation on a Bare Metal with a Bond network configuration',
        tag: 'BM'
      }
    ]
  },
  '4.13.2': {
    options: {
      date: new Date('2025-04-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du paramètre permettant de générer une nouvelle adresse MAC lors de la restauration d\'une machine virtuelle' : 'Fix of the parameter used to generate a new MAC address when restoring a virtual machine',
        tag: 'OpenIaasBACK'
      }
    ]
  },
  '4.13.3': {
    options: {
      date: new Date('2025-04-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage des tags lors du chargement d\'une machine virtuelle.' : 'Fixed a bug displaying tags when loading a virtual machine.',
        tag: 'TAG'
      }
    ]
  },
  '4.14.0': {
    options: {
      date: new Date('2025-04-28')
    },
    data: [
      {
        text: lang === 'fr' ? "Possibilité de commander la suppression d'un Block Storage OpenIaaS" : "Ability to order the removal of a Block Storage in OpenIaaS",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? "Possibilité de commander l'ajout d'un Block Storage à un Pool OpenIaaS" : "Ability to order the addition of a Block Storage to an OpenIaaS pool",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? "Possibilité de commander la suppression d'un Host OpenIaaS" : "Ability to order the removal of a Host in OpenIaaS",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? "Possibilité de mettre un Host en maintenance" : "Ability to put a Host into maintenance mode",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Possibilité d’éditer la description d’un modèle" : "Ability to edit a template description",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout de l'information du produit concerné sur la liste des commandes" : "Add product information to the order list",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? "Possibilité de choisir un Host au démarrage d’une machine virtuelle" : "Ability to choose a Host at the startup of a virtual machine",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Possibilité d’épingler des pages dans le menu" : "Ability to pin pages in the menu",
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? "Mise à jour du rendu des documentations API" : "Update API documentation rendering",
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? "Possibilité de commander l’ajout d’un Host à un pool OpenIaaS" : "Ability to order the addition of a Host to an OpenIaaS pool",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? "Ajout d’une règle d’unicité sur le nom des machines virtuelles OpenIaaS" : "Add uniqueness rule on the naming of OpenIaaS virtual machines",
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.14.1': {
    options: {
      date: new Date('2025-05-05')
    },
    data: [
      {
        text: lang === 'fr' ? "Correction de la migration multiple de machines virtuelles depuis la page stockage" : "Fix multiple migration of virtual machines from storage page",
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? "Correction d\'une erreur lors de la création d'un réseau lorsque le produit OpenIaaS n'est pas activé" : "Fixed an error when creating a network when the OpenIaaS product is not activated",
        tag: 'NET'
      },
    ]
  },
  '4.15.0': {
    options: {
      date: new Date('2025-05-13')
    },
    data: [
      {
        text: lang === 'fr' ? "Possibilité de déplacer un disque OpenIaaS" : "Ability to relocate an OpenIaaS disk",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Possibilité de connecter et déconnecter un disque OpenIaaS" : "Ability to connect and disconnect an OpenIaaS disk",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Affichage du statut connecté/déconnecté d'un disque" : "Display of connected/disconnected status for disks",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout d'actions disponibles sur un disque depuis un Block Storage" : "Add actions available on a disk from a Block Storage",
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr' ? "Correction du tri sur l'espace de stockage des datastores depuis la page stockage" : "Fix sort on datastore storage space from storage page",
        tag: 'INF'
      },
      {
        text: lang === 'fr' ? "Possibilité de copier l'UUID d'un disque, réseau virtuel ou snapshot" : "Ability to copy UUID of a disk, virtual network, or snapshot",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Correction d'un bug sur les étapes de création d'une machine virtuelle lorsque l'utilisateur pouvait sélectionner une étape supérieur à celle actuelle" : "Fix a bug in virtual machine creation steps where the user could select a step higher than the current one",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Correction d'un bug laissant les sous onglet en chargement lors du rafraichissement d'une machine virtuelle" : "Fix a bug leaving sub-tabs loading when refreshing a virtual machine",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout des adresses MAC sur la table des interfaces d'un Bare Metal" : "Add MAC addresses to the interface table of a Bare Metal",
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? "Ajout d'une page sur les détails d'un volume Bare Metal" : "Add Bare Metal volume details page",
        tag: 'BM'
      },
      {
        text: lang === 'fr' ? "Correction du tri la taille des buckets" : "Fix sort on size of buckets",
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr' ? "Ajustement des unités affichées sur les ressources infrastructures: GiB (Gibibyte) au lieu de GB (Gigabyte)" : "Adjustment of units displayed on infrastructure resources: GiB (Gibibyte) instead of GB (Gigabyte)",
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? "Possibilité de choisir le nom d'une machine virtuelle lors d'un déploiement de fichier XVA" : "Ability to choose the name of a virtual machine when deploying an XVA file",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout de la possibilité d'assigner une politique de sauvegarde au moment de démarrer une machine virtuelle si elle n'en a aucune." : "Added the ability to assign a backup policy at startup if a virtual machine has no backup policy.",
        tag: 'OpenIaasCMP'
      },
    ]
  },
  '4.15.1': {
    options: {
      date: new Date('2025-05-27')
    },
    data: [
      {
        text: lang === 'fr' ? "Affichage d'une erreur lorsqu'un réseau est mal configuré sur un adaptateur réseau d'une machine virtuelle, empechant également le démarrage de la machine virtuelle" : "Display of an error when a network is misconfigured on a virtual machine's network adapter, preventing the virtual machine from powering on",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Correction de la propagation d'un réseau sur des pools OpenIaaS dès la création du réseau" : "Fix network propagation on OpenIaaS pools as soon as the network is created",
        tag: 'NET'
      },
    ]
  },
  '4.15.2': {
    options: {
      date: new Date('2025-05-27')
    },
    data: [
      {
        text: lang === 'fr' ? "Correction de l'affichage des selections de Block Storage et Host lorsque l'utilisateur ne possède pas la permission order_read" : "Fix display of Block Storage and Host selections when user does not have order_read permission",
        tag: 'OpenIaasINF'
      }
    ]
  },
  '4.16.0': {
    options: {
      date: new Date('2025-06-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Refonte de la création d\'un ticket support' : 'Redesign of support ticket creation',
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr' ? 'Interprétation du markdown sur un ticket support et mise à jour de l\'ordre d\'affichage des commentaires' : 'Interpret markdown in support ticket and update comment display order',
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un feedback lors de la fermeture d\'un ticket support' : 'Add feedback when closing a support ticket',
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr' ? 'Correction de l\'affichage des boutons de commandes selon la permission order_write' : 'Fix display of order buttons based on order_write permission',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un message de warning en cas de manque d\'espace disque sur un Block Storage (90% utilisé) et avertissement lors des commandes' : 'Add warning if Block Storage disk space is low (90% used) and alert during orders',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de commander l\'augmentation de taille d\'un volume bare metal' : 'Ability to order a resize of a bare metal volume',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de commander l\'augmentation de taille d\'un Block Storage OpenIaaS' : 'Ability to order a resize of an OpenIaaS Block Storage',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout de la description des rôles S3 lors de l\'assignation sur un bucket' : 'Add S3 role description during bucket assignment',
        tag: 'OS'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'une option pour conserver la configuration d\'une machine virtuelle lors d\'une restauration en Production sur le cluster d\'origine' : 'Add option to preserve a virtual machine\'s configuration during restore in Production on the original cluster',
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? 'Ajout des traductions anglaises sur la page des rapports de consommation du menu commande' : 'Add English translations on the consumption reports page in the orders menu',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage des pictogrammes selon l\'impact d\'un incident global' : 'Update pictogram display based on global incident impact',
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur la différence de pourcentages entre la liste des datastores et les détails d\'un datastore' : 'Correction of a bug on the difference in percentages between the datastore list and the datastore details',
        tag: 'INF'
      }
    ]
  },
  '4.16.1': {
    options: {
      date: new Date('2025-06-11')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug sur le maximum disponible lors d\'une commande d\'augmentation d\'un volume Bare Metal ou d\'un Block Storage OpenIaaS' : 'Fix a bug on the maximum available when increasing a Bare Metal volume or an OpenIaaS Block Storage.',
        tag: 'ORDER'
      },
    ]
  },
  '4.16.2': {
    options: {
      date: new Date('2025-06-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug et amélioration de l\'affichage des VLANs trunk depuis la page d\'un HostCluster VMware' : 'Fix bug and improved display of trunk VLANs from VMware HostCluster page',
        tag: 'CMP'
      },
    ]
  },
  '4.17.0': {
    options: {
      date: new Date('2025-06-20')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug d\'affichage sur les noms des pools lors des sélections de Block Storage ou Hosts sur les formulaires' : 'Fix display issue on pool names when selecting Block Storage or Hosts in forms',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de commander un Pool OpenIaaS' : 'Ability to order an OpenIaaS Pool',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de commander l\'association d\'un volume existant à un Bare Metal existant depuis la page d\'un Bare Metal, depuis la page d\'un volume et depuis la page des commandes' : 'Ability to order the association of an existing volume to an existing Bare Metal from the Bare Metal page, from the Volume page and from the Orders page.',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Possibilité de supprimer un fichier sur un ticket support' : 'Ability to delete a file on a support ticket',
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr' ? 'La description sur la satisfaction à la fermeture d\'un ticket est maintenant optionnelle' : 'Description of satisfaction on ticket closure is now optional',
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr' ? 'Correction du bug de redirection des politiques de sauvegarde dans une machine virtuelle VMware' : 'Fix for backup policy redirection bug in a VMware virtual machine',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction du bug retournant des valeurs vides dans l\'export CSV des machines virtuelles lors de l\'application de certains filtres' : 'Fix for empty values returned in virtual machines CSV export when applying certain filters',
        tag: 'CMP'
      }
    ]
  },
  '4.17.1': {
    options: {
      date: new Date('2025-07-04')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug lors du déplacement d\'une machine virtuelle lorsque le Block Storage doit être obligatoire.' : 'Fixed a bug when moving a virtual machine when Block Storage is mandatory.',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Correction du filtre listant les ISOs au moment d\'en monter un en fonction du pool ou du host de la machine virtuelle.' : 'Fixed filter listing ISOs when mounting one based on virtual machine pool or host.',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.17.2': {
    options: {
      date: new Date('2025-07-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du paramètre envoyé pour conserver la configuration de la machine virtuelle lors d\'une restauration en mode production' : 'Fix parameter sent to retain virtual machine configuration when restoring to production mode',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un problème d\'affichage pour modifier un disque depuis une machine virtuelle' : 'Fix display problem when editing a disk from a virtual machine',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.18.0': {
    options: {
      date: new Date('2025-07-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Ajout d\'une page Réplication OpenIaaS avec la liste des réplicas et les politiques de réplication' : 'Add an OpenIaaS replication page with a list of replicas and replication policies',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'ajouter et de supprimer une configuration de réplication à une machine virtuelle OpenIaaS' : 'Ability to add and remove a replication configuration on an OpenIaaS virtual machine',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de créer et supprimer une politique de réplication' : 'Ability to create and delete a replication policy',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Possibilité de restaurer un réplica' : 'Ability to recover a replica',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Mise à jour des étapes internet lors de la commande d\'une nouvelle zone de disponibilité ou d\'un nouveau pool' : 'Update of internet steps when ordering a new availability zone or pool',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un service sécurité pour chaque produit lors de la création d\'un ticket support' : 'Add a security service for each product when creating a support ticket',
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr' ? 'Mise à jour de l\'affichage lorsqu\'aucune donnée n\'est créée/provisionnée ou lorsqu\'une erreur se produit lors de l\'obtention d\'informations.' : 'Update display when no data is created/provisioned or when an error occurs while obtaining information.',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Correction du tri de certaines colonnes dans différentes pages infrastructure VMware et OpenIaaS' : 'Fix sort of some columns in different VMware and OpenIaaS infrastructure pages',
        tag: 'GEN'
      },
      {
        text: lang === 'fr' ? 'Possibilité d\'exporter les machines virtuelles au format CSV.' : 'Ability to export virtual machines in CSV format.',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? 'Ajout d\'un lien d\'un ISO monté sur un controleur vers l\'élément correspondant dans le catalogue' : 'Add a link from an ISO mounted on a controller to the corresponding item in the catalog',
        tag: 'CMP'
      },
    ]
  },
  '4.18.1': {
    options: {
      date: new Date('2025-07-15')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du paramètre envoyé pour conserver la configuration de la machine virtuelle lors d\'une restauration en mode production' : 'Fix parameter sent to retain virtual machine configuration when restoring to production mode',
        tag: 'BACK'
      },
      {
        text: lang === 'fr' ? 'Correction d\'un problème d\'affichage pour modifier un disque depuis une machine virtuelle' : 'Fix display problem when editing a disk from a virtual machine',
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.18.2': {
    options: {
      date: new Date('2025-07-18')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du formulaire lors de la restauration d\'un réplica ne possédant aucun adaptateur réseau' : 'Fix form when recovering a replica without network adapter',
        tag: 'OpenIaasCMP'
      },
    ]
  },
  '4.18.3': {
    options: {
      date: new Date('2025-07-22')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction du formulaire lors de la commande d\'un premier environnement' : 'Correction of the form when ordering a first environment',
        tag: 'OpenIaasINF'
      },
    ]
  },
  '4.18.4': {
    options: {
      date: new Date('2025-07-24')
    },
    data: [
      {
        text: lang === 'fr' ? 'Correction d\'un bug empêchant la création du premier PAT' : 'Correction of a bug preventing the creation of the first PAT',
        tag: 'IAM'
      },
    ]
  },
  '4.19.0': {
    options: {
      date: new Date('2025-07-24')
    },
    data: [
      {
        text: lang === 'fr'
          ? 'Ajout d’un filtre réplication sur la liste des machines virtuelles'
          : 'Added replication filter on the virtual machine list',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? 'Ajout d’un filtre réplication sur la liste des machines virtuelles'
          : 'Added replication filter on the virtual machine list',
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? 'Correction de la mac address qui doit être optionnelle lors de la restauration d’un réplica'
          : 'Fix: MAC address should be optional when restoring a replica',
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? 'Mise à jour de la page Internet avec l’ajout de la gestion des IPv6'
          : 'Updated Internet page with IPv6 support',
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? 'Mise à jour de la commande d’IPs publiques avec la possibilité de commander un préfixe IPv6'
          : 'Updated public IP order to allow IPv6 prefix requests',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? 'Mise à jour de l’affichage des commandes disponibles lorsqu’aucun environnement n’est provisionné'
          : 'Updated order modal to only show new deployment option when no environment is provisioned',
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? 'Mise à jour de la modale de création d’une machine virtuelle'
          : 'Updated virtual machine creation modal',
        tag: 'CMP'
      }
    ]
  },
  '4.20.0': {
    options: { date: new Date('2025-07-29') },
    data: [
      {
        text: lang === 'fr' ? "Retrait des informations de dernière exécution des politiques de réplication provoquant des lenteurs" : "Removal of last execution information from replication policies causing slowdowns",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout d'une option VMware Tools pour synchroniser l'heure avec l’hôte" : "Add VMware Tools option to sync time with host",
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? "Gestion du TX checksumming pour les adaptateurs réseau" : "TX checksumming management for network adapters",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Mise à jour des conditions sur le chiffrement d'une machine virtuelle" : "Virtual machine encryption conditions updated",
        tag: 'CMP'
      },
      {
        text: lang === 'fr' ? "Ajout d'informations concernant les stocks limités et en rupture concernant les ressources de calcul lors de la commande d'une nouvelle zone de disponibilité" : "Add informations about limited and out-of-stock compute resources when ordering a new availability zone",
        tag: 'Order'
      },
      {
        text: lang === 'fr' ? "Ajout d'un avertissement sur la réplication OpenIaaS si le nombre d'AZ est inférieur à 2" : "Add warning on OpenIaaS replication if number of AZ is less than 2",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Ajout de la haute disponibilité (HA) pour les pools et machines virtuelles" : "High availability (HA) added for pools and virtual machines",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr' ? "Corriger la redirection lors d'un commentaire sur une commande" : "Fix redirection when commenting on an order",
        tag: 'Order'
      }
    ]
  },
  '4.20.1': {
    options: { date: new Date('2025-07-31') },
    data: [
      {
        text: lang === 'fr' ? "Correction d'un bug d'affichage sur les IPs publiques" : "Fixed display bug on public IPs",
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? "Correction de bugs d'affichage lorsque l'host est éteint" : "Fixed display bugs when host is switched off",
        tag: 'OpenIaasINF'
      }
    ]
  },
  '4.20.2': {
    options: { date: new Date('2025-08-14') },
    data: [
      {
        text: lang === 'fr' ? "Correction d'un bug mineur empêchant l'attribution de droits dans un cas spécifique." : "Fixed a minor bug that prevented rights from being assigned in a specific case.",
        tag: 'IAM'
      },
    ]
  },
  '4.20.3': {
    options: { date: new Date('2025-08-22') },
    data: [
      {
        text: lang === 'fr' ? "Correction d'un bug concernant la possiblité de consulter et supprimer une propagation effectuée sur un réseau partagé d'un autre tenant." : "Correction of a bug concerning the ability to consult and delete a propagation carried out on another tenant's shared network.",
        tag: 'NET'
      },
      {
        text: lang === 'fr' ? "Correction d'un bug concernant le déprovisionnement d'un host-cluster ou d'un datastore-cluster." : "Correction of a bug concerning the deprovisioning of a host-cluster or datastore-cluster.",
        tag: 'INF'
      },
    ]
  },
  '4.21.0': {
    options: { date: new Date('2025-08-22') },
    data: [
      {
        text: lang === 'fr'
          ? "Fix d'un bug empêchant l'utilisation de caractères spéciaux autorisés dans le nom lors de la création d'un catalogue"
          : "Fix a bug preventing the use of allowed special characters in the catalog name",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Bug sur la mise en maintenance d’un hôte ESX"
          : "Bug when putting an ESX host into maintenance",
        tag: 'INF'
      },
      {
        text: lang === 'fr'
          ? 'Mise à jour de l\'affichage lorsqu\'aucune donnée n\'est créée/provisionnée ou lorsqu\'une erreur se produit lors de l\'obtention d\'informations.'
          : 'Update display when no data is created/provisioned or when an error occurs while obtaining information.',
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité d’exporter en CSV la liste des réplicas VMware"
          : "Add CSV export for VMware replicas",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité d’exporter en CSV la liste des réplicas OpenIaaS et des politiques associées"
          : "Add CSV export for OpenIaaS replicas and associated policies",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de précisions sur les outils utilisés par les machines virtuelles (pvDrivers, managementAgent et tools)"
          : "Added details about the tools used by virtual machines (pvDrivers, managementAgent, and tools)",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la gestion du calendrier en français"
          : "Fix calendar handling in French",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Blocage de la suppression d’un cluster non vide ou avec des hôtes/datastores non en maintenance"
          : "Block deletion of non-empty clusters or those with hosts/datastores not in maintenance",
        tag: 'INF'
      },
      {
        text: lang === 'fr'
          ? "Amélioration du slider de sélection de la RAM sur certaines commandes"
          : "Improve RAM selection slider on specific orders",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Modification de la sélection d'une adresse IPv4 avec une liste disponible"
          : "Changing the selection of an IPv4 address with an available list",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Correction de l’affichage multiple des menus sur l'explication du checksumming"
          : "Correction of multiple menu displays on the explanation of checksumming",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ouverture des modales de support avec le service associé pré-sélectionné"
          : "Open support modals with the associated service preselected",
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr'
          ? "Ajout de vérifications pour la haute disponibilité (HA)"
          : "Add high availability (HA) checks",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la gestion des options Static differed and immediate pour le vMotion"
          : "Added support for Static deferred and immediate options for vMotion",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un badge dans le menu et la navbar lorsqu'un ticket de support nécessite une réponse"
          : "Addition of a badge in the menu and navbar when a support ticket requires a response",
        tag: 'SUPPORT'
      },
    ]
  },
  '4.21.1': {
    options: { date: new Date('2025-09-04') },
    data: [
      {
        text: lang === 'fr' ? "Fix d'un bug empêchant l'actualisation des machines virtuelles lors de la modification de certains filtres." : "Fixed a bug that prevented virtual machines from refreshing when certain filters were modified.",
        tag: 'CMP'
      },
    ]
  },
  '4.21.2': {
    options: { date: new Date('2025-09-05') },
    data: [
      {
        text: lang === 'fr' ? "Correction d'un bug empêchant l'affichage de BareMetal dans la liste de sélection lors de l'ajout/attache d'un volume." : "Fixed a bug preventing BareMetal from being displayed for selection when adding/attaching a volume.",
        tag: 'BM'
      },
    ]
  },
  '4.22.0': {
    options: { date: new Date('2025-09-02') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'affichage de tous les calendriers et filtres de date en fonction de la langue sélectionnée"
          : "Fix display of all calendars and date filters based on selected language",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction mineure de l'affichage des statuts d'upload de fichier"
          : "Minor correction to file upload status display",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction de la commande de mémoire sur un HostCluster en permettant la diminution de la mémoire lorsque les capacités du cluster sont au maximum"
          : "Fix memory order on a HostCluster allowing RAM decrease when cluster capacity is reached",
        tag: 'Order'
      },
      {
        text: lang === 'fr'
          ? "Mise à jour des conditions sur le changement du format de disque lors du déplacement d'une machine virtuelle et ajout d'informations sur le format du disque actuel lors d'une configuration par disque"
          : "Update conditions on disk format change during VM vMotion and display current disk format when configuring per disk",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction du tri sur les colonnes AZ et statut dans la page listant les Hosts"
          : "Fix sorting on AZ and status columns in Hosts list page",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la commande d'une suppression de propagation de réseau depuis la page de toutes les commandes, l'ensemble des commandes disponibles sont désormais accessibles depuis cette page"
          : "Addition of a command to delete network propagation from the all commands page. All available commands can now be accessed from this page.",
        tag: 'Order'
      },
      {
        text: lang === 'fr'
          ? "Correction de la consultation des détails de sauvegarde pour certains cas"
          : "Correction of the consultation of backup details in certain cases",
        tag: 'OpenIaasBACK'
      }
    ]
  },
  '4.22.1': {
    options: { date: new Date('2025-09-10') },
    data: [
      {
        text: lang === 'fr'
          ? "Modification des alertes concernant la configuration de format de disque choisie, lors d'un VMotion incluant le storage"
          : "Modification of alerts concerning the chosen disk format configuration, during a VMotion including storage",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction mineure du filtre par date dans la liste des erreurs de sauvegarde"
          : "Minor correction to the date filter in the list of backup errors",
        tag: 'BACK'
      },
      {
        text: lang === 'fr'
          ? "Correction mineure du filtre par date dans la liste des erreurs de sauvegarde"
          : "Minor correction to the date filter in the list of backup errors",
        tag: 'OpenIaasBACK'
      },
    ]
  },
  '4.23.0': {
    options: { date: new Date('2025-09-12') },
    data: [
      {
        text: lang === 'fr'
          ? "Ajout du produit LLMaaS"
          : "Add LLMaaS product",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la liste des modèles disponibles"
          : "Add list of available models",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la liste des clés API avec possibilité d’en créer"
          : "Add list of API keys with ability to create new ones",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la consommation par modèles et par clés"
          : "Add consumption tracking by model and by API key",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Ajout des détails d’un modèle"
          : "Add model details view",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de tester un modèle"
          : "Add ability to test a model",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Ajout du support de 4 nouvelles valeurs extra-configs"
          : "Add support for 4 new extra-config values",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ne pas afficher l’alerte HA sur les VMs concernées lorsque l’ISO local n’est pas monté"
          : "Do not display HA alert on VMs when the local ISO is not mounted",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction d’une confusion entre réplicas et VMs configurées pour être répliquées"
          : "Fix confusion between replicas and VMs configured for replication",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Lors de l’ajout ou du redimensionnement d’un disque, indiquer si le SR en lien est utilisé pour une configuration de réplication"
          : "Indicate whether the related SR is used for a replication setup when adding or resizing a VM disk",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout du nom de l’AZ sur le rapport de sauvegarde"
          : "Add AZ name to backup report",
        tag: 'OpenIaasBACK'
      },
      {
        text: lang === 'fr'
          ? "Correction du bouton de réservation d’IP qui ne se réactivait pas lorsqu’un emplacement était de nouveau disponible"
          : "Fixed the IP reservation button not reactivating when a location became available again",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Correction d’un bug d’affichage de la carte de première commande lorsque des filtres ne correspondent à aucune ressource"
          : "Fix display bug of first-order card when filters matched no resource",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
            ? "Mise à jour des informations concernant le cycle de vie d'un bucket"
            : "Update bucket lifecycle information",
          tag: 'OS'
      }
    ]
  },
  '4.24.0': {
    options: { date: new Date('2025-09-24') },
    data: [
      {
        text: lang === 'fr'
          ? "Ajout du produit Marketplace"
          : "Add Marketplace product",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une page listant les solutions disponibles dans le catalogue"
          : "Add a page listing available solutions in the catalog",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une page pour consulter les détails d'une solution"
          : "Add a page to view solution details",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de déployer une image de machine virtuelle sur un environnement OpenIaaS ou VMware depuis les détails d'une solution"
          : "Allow deployment of a virtual machine image on OpenIaaS or VMware from solution details",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de contacter un partenaire pour une solution de services managés"
          : "Allow contacting a partner for a managed services solution",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles"
          : "Allow deployment of a virtual machine image from the virtual machines list",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de déployer une image de machine virtuelle depuis la liste des machines virtuelles"
          : "Allow deployment of a virtual machine image from the virtual machines list",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction sur l'utilisation de certains paramètres lors du test d'un modèle"
          : "Fix handling of certain parameters when testing a model",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une validation pour bloquer la suppression du partage d'un réseau si le réseau est propagé dans un autre Tenant"
          : "Add validation to prevent deletion of a shared network if it is propagated in another Tenant",
        tag: 'NET'
      }
    ]
  },
  '4.24.1': {
    options: { date: new Date('2025-09-29') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction d'un bug lors du contact d'un partenaire"
          : "Fixed bug when contacting a partner",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la récupération des réseaux VMware disponibles lorsqu'un hôte spécifique est sélectionné pour déployer une image"
          : "Fix recovery of available VMware networks when a specific host is selected to deploy an image",
        tag: 'MP'
      },
    ]
  },
  '4.24.2': {
    options: { date: new Date('2025-09-29') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction UI mineure"
          : "Minor UI correction",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un bug d'affichage lors du déploiement d'une machine virtuelle"
          : "Fixed a display bug when deploying a virtual machine",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un bug à l'étape de la configuration HA lors de la création d'une machine virtuelle"
          : "Fixed bug at HA configuration stage when creating a virtual machine",
        tag: 'OpenIaasCMP'
      },
    ]
  },
  '4.24.3': {
    options: { date: new Date('2025-10-03') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction d'un bug lors de la commande d\'un nouveau pool OpenIaaS avec une capacité de stockage différente de celle par défaut"
          : "Fixed a bug when ordering a new pool OpenIaaS with a storage capacity different from the default",
        tag: 'ORDER'
      },
    ]
  },
  '4.24.4': {
    options: { date: new Date('2025-10-08') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction d'un bug mineur lors de la commande d\'un nouveau datastore VMware"
          : "Correction of a minor bug when ordering a new VMware datastore",
        tag: 'ORDER'
      },
    ]
  },
  '4.25.0': {
    options: { date: new Date('2025-10-16') },
    data: [
      {
        text: lang === 'fr'
          ? "Mise à jour de l'utilisation de la configuration avancée et des propriétés OVF lors du déploiement d'une machine virtuelle VMware"
          : "Updated use of advanced configuration and OVF properties when deploying a VMware virtual machine",
        tag: 'MP'
      }
    ]
  },
  '4.26.0': {
    options: { date: new Date('2025-10-22') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du style d'ajout de propriété vApp sur une machine virtuelle"
          : "Fix vApp property style when adding it to a virtual machine",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout des nouvelles clés extra_config (guestinfo.metadata, guestinfo.metadata.encoding, guestinfo.userdata, guestinfo.userdata.encoding)"
          : "Add new extra_config keys",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un bouton pour copier l'UUID du périmètre actuel depuis le profil utilisateur"
          : "Add copy button for current perimeter in user profile",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité d'exécuter une sauvegarde depuis l'onglet sauvegardes d'une machine virtuelle OpenIaaS"
          : "Add ability to execute backup from the backups tab of an OpenIaaS VM",
        tag: 'OpenIaasBACK'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des étapes de déploiement depuis un catalogue OpenIaaS"
          : "Fix step display issue during deployment from OpenIaaS catalog",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Optimisation de la récupération des fichiers d'un bucket"
          : "Optimizing bucket file retrieval",
        tag: 'OS'
      },
      {
        text: lang === 'fr'
          ? "Correction d’un bug d’affichage lorsqu'aucun catalogue ou fichier n’existe dans VMware/catalogs"
          : "Fix display bug when no catalog or file exists in vmware/catalogs",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Suppression de la contrainte empêchant la sélection de plusieurs types de réseaux sur la page des réseaux virtuels"
          : "Remove constraint preventing selection of multiple network types in virtual network page",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un cas spécifique, depuis la page catalogue, sur le bouton de la modal d’upload de fichier qui restait désactivé"
          : "Correction of a specific case, from the catalog page, on the file upload modal button that remained disabled",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Blocage de la sélection d’un hostcluster sans host actif"
          : "Prevent selecting hostclusters with no active hosts",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une page listant les clusters OpenShift"
          : "Add page listing OpenShift clusters",
        tag: 'OPENSHIFT'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une page details d'un cluster OpenShift"
          : "Add a details page for an OpenShift cluster",
        tag: 'OPENSHIFT'
      },
      {
        text: lang === 'fr'
          ? "Refonte complète du Tableau de bord"
          : "Complete rework of the Dashboard",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une reconnexion automatique au suivi activités lorsque la connexion est interrompue"
          : "Add automatic reconnection to activity tracking when connection is interrupted",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Lors de la création d\'une machine virtuelle VMware le choix du Vcenter se fait désormais en fonction de la zone de disponibilité sélectionnée"
          : "When creating a VMware virtual machine, the Vcenter is now chosen according to the selected availability zone",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Refonte de la récupération des métriques VMware, l'URL de la page est désormais /iaas/metrics"
          : "VMware metrics retrieval reworked, page URL is now /iaas/metrics",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un onglet métriques d'infrastructure VMware sur le Calcul"
          : "VMware infrastructure metrics tab added to Calcul",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un onglet métriques d'infrastructure VMware sur le Stockage"
          : "VMware infrastructure metrics tab added to Storage",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une page métrique pour OpenIaaS"
          : "Add a metrics page for OpenIaaS",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Calcul"
          : "OpenIaaS infrastructure metrics tab added to Calcul",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un onglet métriques d'infrastructure OpenIaaS sur le Stockage"
          : "OpenIaaS infrastructure metrics tab added to Storage",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Correction de la commande de suppression d’un mapping VLAN d’un Cpool"
          : "Fix order to remove VLAN mapping from a Cpool",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout d’un filtre par UUID et possibilité de copier l’UUID d’un item"
          : "Add UUID filter and copy option for items",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Lors de l’ajout d’un disque OpenIaaS, les stockages n'appartenant pas au Pool de la machine virtuelle sont désormais filtrés"
          : "When adding an OpenIaaS disk, storage not belonging to the Virtual Machine Pool is now filtered",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de l’adresse email de la personne ayant clôturé le ticket dans la notation du ticket support"
          : "Add email of the person who closed a ticket in support ticket ratings",
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr'
          ? "Lors d'un snapshot, l'option pour prendre la mémoire est désormais décochée par défaut"
          : "When taking a snapshot, the option to take memory is now unchecked by default",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de limites sur les noms et descriptions lors de l’upload d'un fichier sur VMware"
          : "Add limits on names and descriptions uploading file on VMware",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Mise à jour des formulaires de commande pour les ajouter aux différentes pages concernées (exemple nouveau Datastore depuis la page Stockage)"
          : "Update order forms to add them to the various pages concerned (for example new Datastore from the Storage page)",
        tag: 'ORDER'
      }
    ]
  },
  '4.26.1': {
    options: { date: new Date('2025-10-28') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des unités au survol d'une barre sur les graphiques de consommation"
          : "Fix display of units when hovering over a bar on consumption graphs",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Correction du tri par statut sur la liste des politiques de sauvegarde"
          : "Fix sorting by status in the list of backup policies",
        tag: 'OpenIaasBACK'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage sur la page des clusters lorsqu'aucun cluster OpenShift n'est disponible"
          : "Fix display on cluster page when no OpenShift cluster is available",
        tag: 'OPENSHIFT'
      }
    ]
  },
  '4.26.2': {
    options: { date: new Date('2025-10-29') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la récupération et de l'affichage des métriques concernant les VMs IaaS"
          : "Corrected retrieval and display of metrics for IaaS VMs",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des mois sur l'axis des graphs, pour certaines tranches de dates recherchées"
          : "Correction of the display of months on the graph axis, for certain date ranges searched for",
        tag: 'MET'
      },
    ]
  },
  '4.26.3': {
    options: { date: new Date('2025-10-31') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'application des filtres liés aux alertes ballooning et adresses MAC dupliquées"
          : "Fix application of filters for ballooning alerts and duplicate MAC addresses",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction du listing des datastores dans les graphiques des IOPS VMware et de la capacité utilisée"
          : "Correction of datastore listing in VMware IOPS and capacity used graphs",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Modification du nom des exports de métriques présentées dans les graphiques"
          : "Modification of the name of metric exports presented in graphs",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage de certains boutons support dépendants de la permission d'écriture"
          : "Fixed display of certain support buttons dependent on write permission",
        tag: 'SUPPORT'
      }
    ]
  },
  '4.26.4': {
    options: { date: new Date('2025-11-03') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction et amélioration de l'affichage des logos, images et details d'un produit de la marketplace"
          : "Fix and improvement of the display of logos, images and details of a product of the marketplace",
        tag: 'MP'
      }
    ]
  },
  '4.26.5': {
    options: { date: new Date('2025-11-04') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du nombre d'IPs publiques affiché sur le tableau de bord principal"
          : "Fix of the number of public IPs displayed on the main dashboard",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Amélioration de la taille des graphiques du tableau de bord lors du redimensionnement de la fenêtre"
          : "Improve graphics size of dashboard when resizing the window",
        tag: 'GEN'
      }
    ]
  },
  '4.26.6': {
    options: { date: new Date('2025-11-19') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'option de configuration par disque restant en chargement lors du vMotion d'une machine virtuelle"
          : "Fix per-disk configuration option remaining on load when vMotioning a virtual machine",
        tag: 'CMP'
      },
    ]
  },
  '4.27.0': {
    options: { date: new Date('2025-11-12') },
    data: [
      {
        text: lang === 'fr'
          ? "Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier"
          : "Improvements to the virtual machine console. Better keyboard management, and addition of a clipboard",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Amélioration de la console des machines virtuelles. Meilleure gestion clavier, et ajout d'un presse-papier"
          : "Improvements to the virtual machine console. Better keyboard management, and addition of a clipboard",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des différents statuts openshift possibles"
          : "Correction of the display of the various possible openshift statuses",
        tag: 'OPENSHIFT'
      },
      {
        text: lang === 'fr'
          ? "Correction mineure de la recherche de rapports de sauvegarde"
          : "Minor correction to the search for backup reports",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une vérification concernant le stock disponible lors de la commande de ressources"
          : "Addition of a check on available stock when ordering resources",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un filtre par type de commande et par produit sur la liste des commandes"
          : "Add an order type and product filter to the order list",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une alerte sur le dashboard pour les VSnap de sauvegarde SPP ayant une occupation trop élevée"
          : "Addition of an alert on the dashboard for SPP backup vsnaps with too high an occupancy level",
        tag: 'BACK'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité d'afficher les details techniques d'une image"
          : "Added the option of displaying the technical details of an image",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un affichage vide lors du changement d'onglet sur les vues Métriques IaaS et OpenIaaS"
          : "Fixed blank display when changing tabs in IaaS and OpenIaaS metrics views",
        tag: 'MET'
      },
    ]
  },
  '4.27.1': {
    options: { date: new Date('2025-11-19') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'option de configuration par disque restant en chargement lors du vMotion d'une machine virtuelle"
          : "Fix per-disk configuration option remaining on load when vMotioning a virtual machine",
        tag: 'CMP'
      },
    ]
  },
  '4.27.2': {
    options: { date: new Date('2025-12-02') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'envoie de la touche AltGraph sur une console VMWare"
          : "Fix AltGraph key sending on a VMWare console",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage de l'icone depuis les details d'un produit de la marketplace"
          : "Fix icon display from marketplace product details",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction des statistiques relatives aux Tokens LLMaaS dans la page 'Rapport de consommation'"
          : "Correction of LLMaaS Tokens statistics in the 'Consumption Report' page",
        tag: 'ORDER'
      }
    ]
  },
  '4.28.0': {
    options: { date: new Date('2025-11-21') },
    data: [
      {
        text: lang === 'fr'
          ? "Possibilité de commander un ajout de crédit LLMaaS pour le tenant"
          : "Ability to order an LLMaaS credit add-on for the tenant",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'un onglet Facturation sur la page LLMaaS pour les tenants avec le prépaiement activé"
          : "Added a Billing tab on the LLMaaS page for tenants with prepayment enabled",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Affichage du crédit restant pour les tenants en mode prépaiement, sur le tableau de bord et depuis l’onglet Facturation"
          : "Display of remaining credit for tenants in prepayment mode, on the dashboard and from the Billing tab",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Correction sur la métrique de consommation instantanée sur la page Calcul des métriques VMware"
          : "Fix on the instantaneous consumption metric on the VMware Metrics Calculation page",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité d'afficher des messages d'information globaux visibles sur l’ensemble de l’application"
          : "Added the ability to display global information messages visible throughout the application",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Intégration du produit VPC"
          : "Integration of the VPC product",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une page listant les VPC"
          : "Added a page listing VPCs",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Ajout d'une page Détails d'un VPC"
          : "Added a VPC details page",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de gérer les réseaux privés, les IP publiques et la gateway d'un VPC"
          : "Ability to manage private networks, public IPs and the gateway of a VPC",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Possibilité d'associer une IP statique d'un réseau privé VPC à un adaptateur réseau VMware ou OpenIaaS"
          : "Ability to associate a static IP from a VPC private network with a VMware or OpenIaaS network adapter",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Possibilité d'associer une IP statique avec une IP publique d'un VPC"
          : "Ability to associate a static IP with a public IP in a VPC",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de commander un VPC"
          : "Ability to order a VPC",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de commander un réseau privé dans un VPC"
          : "Ability to order a private network in a VPC",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de commander une IP publique pour le produit VPC"
          : "Ability to order a public IP for the VPC product",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Possibilité d'activer la gateway pour un VPC"
          : "Ability to activate the gateway for a VPC",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Regroupement des pages Réseaux et Internet sous un produit unique : Backbone privé"
          : "Grouping of the Network and Internet pages under a single product: Private Backbone",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Amélioration de l'affichage des tooltips sur les graphiques de métriques : il est désormais possible de cliquer sur un point pour figer la tooltip et consulter l'ensemble des données"
          : "Improved tooltip display on metrics graphs: you can now click a point to freeze the tooltip and view all data",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la gestion de l'enregistrement PTR lors de la modification d’une IP publique"
          : "Added PTR record management when editing a public IP",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité de commander la suppression d’un tenant"
          : "Added the ability to order tenant deletion",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Blocage du partage pour certains types de réseaux"
          : "Blocked sharing for certain network types",
        tag: 'NET'
      }
    ]
  },
  '4.28.1': {
    options: { date: new Date('2025-12-02') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'envoie de la touche AltGraph sur une console VMWare"
          : "Fix AltGraph key sending on a VMWare console",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage de l'icone depuis les details d'un produit de la marketplace"
          : "Fix icon display from marketplace product details",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction des statistiques relatives aux Tokens LLMaaS dans la page 'Rapport de consommation'"
          : "Correction of LLMaaS Tokens statistics in the 'Consumption Report' page",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Correction lors de la commande d'une IP publique VPC"
          : "fix ordering a VPC public IP",
        tag: 'ORDER'
      }
    ]
  },
  '4.29.0': {
  options: { date: new Date('2025-12-09') },
  data: [
      {
        text: lang === 'fr'
          ? "Correction de la recherche dans la page Utilisateurs lorsqu’un utilisateur ne possède pas d’adresse email"
          : "Fix search on Users page when a user has no email",
        tag: 'IAM'
      },
      {
        text: lang === 'fr'
          ? "Corrections et améliorations du mapping clavier dans la console d'une machine virtuelle"
          : "Fixes and improvements to keyboard mapping in a virtual machine console",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la vérification du maximum lors de la création d’un Block Storage"
          : "Fix max value validation when provisioning a Block Storage",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Amélioration de la synchronisation des actions sur les pages VPCs"
          : "Improved synchronization of actions on VPC pages",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Ajout de l’association d’une IP statique à une IP publique depuis la liste des IPs statiques"
          : "Add ability to associate static IPs with public IPs from static IPs list",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Correction du fallback sur le type de clavier utilisé sur la console d'une machine virtuelle"
          : "Fix fallback on keyboard type used on virtual machine console",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout des MPU incomplets depuis la page d'un bucket"
          : "Add incomplete MPU display from bucket page",
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de supprimer un MPU incomplet"
          : "Ability to delete an incomplete MPU",
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr'
          ? "Correction d’un problème sur la modal de Support lorsque la catégorie du ticket est pré-selectionné sans être réinitialisé"
          : "Fix bug in Support modal when ticket category is pre-selected without being reset",
        tag: 'SUPPORT'
      }
    ]
  },
  '4.29.1': {
    options: { date: new Date('2025-12-10') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'ouverture du formulaire de propagation d'un réseau"
          : "Fix opening of the network propagation form",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage d'une date de fermeture d'un ticket ouvert pour les tickets de type incident"
          : "Fix display of an open ticket closure date for incident type tickets",
        tag: 'SUPPORT'
      },
    ]
  },
  '4.30.0': {
    options: { date: new Date('2025-12-12') },
    data: [
      {
        text: lang === 'fr'
          ? "Possibilité d'associer une IP statique à une adresse MAC personnalisée"
          : "Ability of associating a static IP with a custom MAC address",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Correction du nom de l'onglet du navigateur sur la page d'une console de machine virtuelle"
          : "Fix browser tab name on virtual machine console page",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Sur les métriques de consommation, filtrage des séries ayant des valeurs à 0"
          : "On consumption metrics, filtering of series with values at 0",
        tag: 'AI'
      }
    ]
  },
  '4.30.1': {
    options: { date: new Date('2025-12-16') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la commande d'un hyperviseur sur un cluster"
          : "Fix hypervisor order on a cluster",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la valdiation d'overlap lors de la commande d'un réseaux privé"
          : "Fix of overlap valdiation when ordering a private network",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Correction de la réinitialisation de l'étape réseau lors de la commande d'un Bare Metal"
          : "Fix network step reset when ordering Bare Metal",
        tag: 'BM'
      },
      {
        text: lang === 'fr'
          ? "Amélioration de l'affichage d'erreurs vide en affichant par défaut le status HTTP remonté"
          : "Improve empty error display by defaulting the HTTP status raised",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage de chargement des machines virtuelles depuis l'onglet récupération"
          : "Fix virtual machine loading display in recovery tab",
        tag: 'BACK'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'ordre d'affichage des interventions planifiées"
          : "Fix display order of planned interventions",
        tag: 'SUPPORT'
      }
    ]
  },
  '4.30.2': {
    options: { date: new Date('2025-12-16') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction technique mineure"
          : "Minor technical fix",
        tag: 'GEN'
      },
    ]
  },
  '4.30.3': {
    options: { date: new Date('2025-12-17') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'ouverture de la modale de création d'un nouveau réseau"
          : "Correction of the opening of the modal for creating a new network",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Correction des propagations de réseau VMWare & OpenIaaS"
          : "Correction of VMWare & OpenIaaS network propagations",
        tag: 'NET'
      },
    ]
  },
  '4.30.4': {
    options: { date: new Date('2025-12-19') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la gestion des touches Fn sur les consoles VMWare"
          : "Correction of Fn key management on VMWare consoles",
        tag: 'CMP'
      },
    ]
  },
  '4.30.5': {
    options: { date: new Date('2025-12-30') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la gestion des touches F10, F11 et F12 sur les consoles VMWare"
          : "Correction of F10, F11 and F12 key management on VMWare consoles",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction du calcul de la jauge indiquant le pourcentage d'espace utilisé pour l'ensemble des Datastores VMWare"
          : "Corrected calculation of the gauge indicating the percentage of space used for all VMWare datastores",
        tag: 'MET'
      },
    ]
  },
  '4.31.0': {
    options: { date: new Date('2026-01-07') },
    data: [
      {
        text: lang === 'fr'
          ? "Les snapshots liées aux politiques de sauvegardes sont désormais visibles"
          : "Snapshots linked to backup policies are now visible",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Affichage de l'Host lié à l'emplacement de stockage d'un ISO lors de l'upload et depuis la page catalogue"
          : "Display of Host linked to ISO storage location during upload and from catalog page",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la commande pour supprimer une propagation qui permettait la selection de plusieurs réseaux depuis la page de toutes les commandes"
          : "Fix command to remove propagation that allowed multiple networks to be selected from the all commands page",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Affichage d'une card explicative depuis l'onglet MPU incomplets lorsque l'IP de la Console n'est pas autorisée empechant l'affichage de l'onglet"
          : "Display of an explanatory card from the incomplete MPU tab when the Console IP is not authorized, preventing the tab from being displayed",
        tag: 'OS'
      },
      {
        text: lang === 'fr'
          ? "Affichage de la card erreur lors de l'accès à une page de la marketplace n'existant pas"
          : "Display card error when accessing a non-existent marketplace page",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'export CSV des rapports de sauvegarde"
          : "Fixed CSV export of backup reports",
        tag: 'OpenIaasBACK'
      },
      {
        text: lang === 'fr'
          ? "Mise à jour des explications info-bulle sur les options disponibles lors de la restauration d'une machine virtuelle"
          : "Updated tooltip explanations of options available when restoring a virtual machine",
        tag: 'BACK'
      },
      {
        text: lang === 'fr'
          ? "Correction des filtres appliqués qui disparaissaient au rafraîchissement de la page des logs"
          : "Fixed filters that disappeared when the log page was refreshed",
        tag: 'GEN'
      },
    ]
  },
  '4.31.1': {
    options: { date: new Date('2026-01-12') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction d'un bug impactant le chargement des catalogues, lors de la création d'un ticket"
          : "Fixed a bug affecting catalogue loading when creating a ticket.",
        tag: 'TICKET'
      }
    ]
  },
  '4.31.2': {
    options: { date: new Date('2026-01-13') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la validation bloquant la commande d'un nouveau VPC sur la modale de toute les commandes"
          : "Correction of validation blocking the order of a new VPC on the modal of all orders",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des propriétés OVF venant de l'image qui n'étaient pas récupérées lors du déploiement d'un item de la marketplace"
          : "Fixed display of OVF properties coming from the image that were not retrieved when deploying a marketplace item",
        tag: 'MP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la modale de support qui ne se fermait pas à la création d'un ticket"
          : "Fix support modal not closing on ticket creation",
        tag: 'SUPPORT'
      }
    ]
  },
  '4.32.0': {
    options: { date: new Date('2026-01-14') },
    data: [
      {
        text: lang === 'fr'
          ? "Mise à jour de la modale de fermeture d'un ticket support"
          : "Update support ticket closure modal",
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr'
          ? "La suppression d'un volume BFS sur un Bare Metal est désormais bloquée, le volume sera supprimé à la suppresion du Bare Metal"
          : "Deleting a BFS volume on a Bare Metal is now blocked, the volume will be deleted when the Bare Metal is deleted",
        tag: 'BM'
      },
      {
        text: lang === 'fr'
          ? "Lors de la commande d'un Bare Metal, le premier volume est maintenant renommé 'volume BFS'"
          : "When ordering a Bare Metal, the first volume is now renamed 'BFS volume'",
        tag: 'BM'
      },
      {
        text: lang === 'fr'
          ? "Correction lors de la commande d'une IP publique VPC, le champ type d'IP n'était pas réinitialisé lors de la seconde ouverture"
          : "Correction: when ordering a VPC public IP, the IP type field was not reset the second time it was opened",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Lors de l'assignation d'une politique de sauvegarde sur un disque, il est maintenant proposé d'inventorier le disque s'il n'est pas reconnu par la solution de sauvegarde"
          : "When assigning a backup policy to a disk, it is now proposed to inventory the disk if it is not recognized by the backup solution",
        tag: 'BACK'
      }
    ]
  },
  '4.32.1': {
    options: { date: new Date('2026-01-20') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la commande de suppression d'un host OpenIaaS"
          : "Correction to the command for deleting an OpenIaaS host",
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'actualisation d'une VM, lorsque les périphériques sont affichés"
          : "Corrected VM refresh when peripherals are displayed",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction du chargement des politiques de sauvegarde utilisables, lors du démarrage d'une VM sans politique de sauvegarde assignée"
          : "Fixed the loading of usable backup policies when starting a VM without an assigned backup policy",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction du chargement de la liste des réseaux partagés"
          : "Fixed loading of shared network list",
        tag: 'NET'
      }
    ]
  },
  '4.33.0': {
    options: { date: new Date('2026-01-21') },
    data: [
      {
        text: lang === 'fr'
          ? "Ajout de la commande de suppression d'une propagation réseau sur OpenIaaS"
          : "Add a command to delete a network propagation on OpenIaaS",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Correction de la commande pour associer un volume existant à un Bare Metal, la liste des volumes nétait pas filtrée par Zone de Disponibilité du Bare Metal"
          : "Fix the order to associate an existing volume with a Bare Metal where the list of volumes was not filtered by Availability Zone",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout de filtres pour les pages de métriques VMWare et OpenIaaS"
          : "Added filters for VMWare and OpenIaaS metrics pages",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la page de métriques 'Machines Virtuelles'"
          : "Added the 'Virtual Machines' metrics page",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la page des détails des métriques pour chaque VM"
          : "Added metrics details page for each VM",
        tag: 'OpenIaasCMP'
      },
    ]
  },
  '4.34.0': {
    options: { date: new Date('2026-02-18') },
    data: [
      {
        text: lang === 'fr'
          ? "Mise à jour majeure du moteur d'affichage de l'application"
          : "Major update to the application's display engine",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Les menus VMware et OpenIaaS ne sont pas affichés lorsque seulement le module métrique est activé"
          : "VMware and OpenIaaS menus are not displayed when only the metric module is activated",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un bug lors de la commande d'un Block Storage depuis la page stockage OpenIaaS"
          : "Fix a bug when ordering a Block Storage from the OpenIaaS storage page",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Correction des unités dans l'affichage: Bytes au lieu de Bibytes"
          : "Fix units in display: Bytes instead of Bibytes",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Lors d'un déplacement de machine virtuelle il n'est pas possible de sélectionner le même hôte de destination que l'hôte actuel de la machine virtuelle"
          : "When moving a virtual machine, it is not possible to select the same destination host as the virtual machine's current host",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Possibilité d'exporter en CSV depuis les pages Métriques VMware et OpenIaaS"
          : "Ability to export to CSV from VMware and OpenIaaS Metrics pages",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Correction de la confirmation du reset de la clé d'accès globale"
          : "Fix confirmation of global access key reset",
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr'
          ? "Correction du bouton pour renommer les fichiers dans les catalogues"
          : "Fix button to rename files in catalogs",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout du bouton 'Nouveau catalogue' sur la page Catalogue VMware"
          : "Add 'New catalog' button on the VMware Catalog page",
        tag: 'CMP'
      }
    ]
  },
  '4.34.1': {
    options: { date: new Date('2026-02-24') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la mise à jour d'un adaptateur réseau sur une machine virtuelle OpenIaaS lors du clic sur la ligne"
          : "Fix updating of a network adapter on an OpenIaaS virtual machine when clicking on the line",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'assignation des tags"
          : "Fix tag assignment",
        tag: 'TAG'
      },
      {
        text: lang === 'fr'
          ? "Correction du bouton de déconnexion"
          : "Fix disconnect button",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage du fil d'Ariane sur certaines pages enfants"
          : "Fix breadcrumb display on some child pages",
        tag: 'GEN'
      }
    ]
  },
  '4.34.2': {
    options: { date: new Date('2026-02-24') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du bouton de déconnexion"
          : "Fix disconnect button",
        tag: 'GEN'
      }
    ]
  },
  '4.34.3': {
    options: { date: new Date('2026-02-24') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du processus de deconnexion"
          : "Fix of the disconnection process",
        tag: 'GEN'
      }
    ]
  },
  '4.34.4': {
    options: { date: new Date('2026-02-26') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du chargement sur le tableau de bord lorsque seulement une des fonctionnalité OpenIaaS ou VMware n'est activée"
          : "Fix loading on dashboard when only one of the OpenIaaS or VMware features is activated",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage sur le tableau de bord du nombre de compte de stockage même lorsque la permission ne le permet pas ou que l'appel échoue"
          : "Fix display on dashboard of number of storage accounts even when permission does not allow it or call fails",
        tag: 'OS'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage de l'unité (€) de crédits disponible"
          : "Fix of the display of the unit (€) of available credits",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'ouverture de la console, liée au cache"
          : "Fixing console opening issue related to cache",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction lors de l'édition, sur une machine virtuelle, d'une carte réseau avec un réseau VPC lorsqu'une ip statique du réseau privé concerné est réservée sans être associée à une machine virtuelle (association directe avec une adresse MAC)"
          : "Fix when editing, on a virtual machine, a network card with a VPC network when a static ip of the private network concerned is reserved without being associated with a virtual machine (direct association with a MAC address)",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la traduction du bouton 'Envoyer' et du pluriel ou singulier des alertes affichées sur le tableau de bord"
          : "Fix of the translation of the 'Send' button and of the plural or singular of the alerts displayed on the dashboard",
        tag: 'GEN'
      }
    ]
  },
  '4.34.5': {
    options: { date: new Date('2026-02-27') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du rafraîchissement de l'onglet paramètres du bucket"
          : "Fix of bucket parameters tab refresh",
        tag: 'OS'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des catalogues à la création d'un ticket"
          : "Fix of catalog display when creating a ticket",
        tag: 'TICKET'
      }
    ]
  },
  '4.34.6': {
    options: { date: new Date('2026-03-02') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction d'un bug masquant le bouton d'enforce keyboard pour les consoles de VM"
          : "Fixed a bug that hid the enforce keyboard button for VM consoles",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un bug empêchant la recherche dans la liste des réseaux d'un pool OpenIaaS"
          : "Fixed a bug preventing searching in the list of networks in an OpenIaaS pool.",
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.34.7': {
    options: { date: new Date('2026-03-03') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'assignation d'une politique de sauvegarde à un disque"
          : "Fix assignment of a backup policy to a disk",
        tag: 'BACK'
      }
    ]
  },
  '4.34.8': {
    options: { date: new Date('2026-03-03') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la gestion du mapping clavier des consoles VMs sur Firefox"
          : "Correction to keyboard mapping management for VM consoles on Firefox",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de la gestion du mapping clavier des consoles VMs sur Firefox"
          : "Correction to keyboard mapping management for VM consoles on Firefox",
        tag: 'OpenIaasCMP'
      }
    ]
  },
  '4.34.9': {
    options: { date: new Date('2026-03-05') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction d'un bug empêchant la suppression d'une politique de sauvegarde, assignée à un disque de VM"
          : "Fixed a bug that prevented the deletion of a backup policy assigned to a VM disk",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un bug empêchant l'exécution d'une politique de sauvegarde, depuis l'onglet 'Sauvegardes' d'une VM"
          : "Fixed a bug that prevented a backup policy from being executed from the 'Backups' tab of a VM",
        tag: 'CMP'
      }
    ]
  },
  '4.35.0': {
    options: { date: new Date('2026-03-11') },
    data: [
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité de mettre à jour un hôte"
          : "Add ability to update an host",
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des graphiques de consommation"
          : "Fix display of consumption graphs",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Affichage de la consommation groupé par type de tokens"
          : "Display of consumption grouped by token type",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Affichage de l'information des mises à jour d'un hôte"
          : "Display host update information",
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr'
          ? "Correction de requêtes de métrique sur de grands intervals"
          : "Fix of metric queries on large intervals",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Correction des entrées dupliquées pour les métriques de santé des VMs"
          : "Fix duplicate entries for VM health metrics",
        tag: 'MET'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage incorrect du Block Storage lors du déploiement d'une machine virtuelle depuis un modèle"
          : "Fix incorrect Block Storage display when deploying a virtual machine from template",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la commande de suppression d'un mapping cpool/spool"
          : "Add command to delete cpool/spool mapping",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Désactivation du bouton de suppression de propagation réseau lorsqu'aucune propagation n'est livrée"
          : "Disable network propagation deletion button when no propagation is delivered",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Correction de la connexion automatique de la console VNC/WMKS lors de l'ouverture"
          : "Fix VNC/WMKS console auto connection on open",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la commande de déprovision de réseau privé VPC"
          : "Add VPC private network deprovision command",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Modifications sur la commande de déprovisionnement d'un volume Bare Metal, il est possible de commander la suppression depuis la liste des volumes"
          : "Modifications to Bare Metal volume deprovision command, it is now possible to order the deletion from the volume list",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la commande de suppression de mapping volume Bare Metal"
          : "Added Bare Metal volume mapping deletion command",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la commande de déprovision de VPC"
          : "Add VPC deprovision command",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Blocage de la déprovision d'un datastore s'il est le dernier d'un datastore cluster"
          : "Block deprovisioning of a datastore if it is the last in a datastore cluster",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Mise à jour du multi vmotion VMware pour permettre de déplacer les VMs d'un cluster à un autre"
          : "Update VMware multi vmotion to allow moving VMs from one cluster to another",
        tag: 'INF'
      },
      {
        text: lang === 'fr'
          ? "Possibilité d'ajouter une limite de RAM sur une machine virtuelle"
          : "Ability of adding a RAM limit to a virtual machine",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage des IOPS de datastore, lorsqu'un filtre est actif"
          : "Correction of datastore IOPS display when a filter is active",
        tag: 'MET'
      }
    ]
  },
  '4.35.1': {
    options: { date: new Date('2026-03-12') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction des requêtes de métriques pouvant causer des temps de latence trop importants, lorsque des grandes périodes sont sélectionnées"
          : "Correction of metric queries that could cause excessive latency when large time periods are selected.",
        tag: 'MET'
      }
    ]
  },
  '4.35.2': {
    options: { date: new Date('2026-03-13') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'édition de la RAM d'une machine virtuelle lorsqu'aucune option avancée n'est configurée"
          : "fixed virtual machine RAM editing when no advanced option is configured",
        tag: 'CMP'
      }
    ]
  },
  '4.35.3': {
    options: { date: new Date('2026-03-17') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la gestion des filtres, dans la vue des Logs"
          : "Fixes to filter management in the Logs view",
        tag: 'ACT'
      },
      {
        text: lang === 'fr'
          ? "Correction de la validation de l'étape des disques, lors du déploiement d'une machine virtuelle depuis un modèle"
          : "Fix for the disk validation step when deploying a virtual machine from a template",
        tag: 'OpenIaasCMP'
      },
      {
        text: lang === 'fr'
          ? "Mise à jour de la récupération des disques lors du chargement des réplicas depuis l'onglet Réplication"
          : "Update disk recovery when loading replicas from the Replication tab",
        tag: 'CMP'
      },
    ]
  },
  '4.35.4': {
    options: { date: new Date('2026-03-18') },
    data: [
      {
        text: lang === 'fr'
          ? "Ajout d'une solution de secours pour la création d'un ticket de support lorsque les websockets sont déconnectées"
          : "Add fallback creating a support ticket when websocket are disconnected",
        tag: 'SUPPORT'
      },
      {
        text: lang === 'fr'
          ? "Amélioration de la reconnexion aux websockets"
          : "Improved reconnection to websockets",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction du bouton pour déplier les details d'un job de sauvegarde"
          : "Fix button to expand backup job details",
        tag: 'BACK'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'activation des propriétés vapp d'une machine virtuelle"
          : "Fix activation of virtual machine vapp properties",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction du bouton de rafraîchissement de la liste des tickets"
          : "Fix refresh button on ticket list",
        tag: 'SUPPORT'
      },
    ]
  },
  '4.35.5': {
    options: { date: new Date('2026-03-24') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du bouton pour prendre un snapshot d'une machine virtuelle"
          : "Fix button for taking a snapshot of a virtual machine",
        tag: 'OpenIaasCMP'
      },
    ]
  },
  '4.35.6': {
    options: { date: new Date('2026-03-25') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de la gestion des activités pour certaines pages"
          : "Fixes to activity management for certain pages",
        tag: 'ACT'
      },
    ]
  },
  '4.36.0': {
    options: { date: new Date('2026-03-27') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction des filtres par défaut sur la liste des réseaux virtuels"
          : "Fix default filters on the list of virtual networks",
        tag: 'NET'
      },
      {
        text: lang === 'fr'
          ? "Ajout de filtres et tris sur la liste des disques depuis les détails d'un Block Storage"
          : "Add filters and sorts to the list of disks from Block Storage details",
        tag: 'OpenIaasINF'
      },
      {
        text: lang === 'fr'
          ? "Blocage de la déprovision d'un cluster d'hyperviseurs lorsqu'un cluster de stockage est attaché"
          : "Hypervisor cluster deprovisioning blocked when a storage cluster is attached",
        tag: 'ORDER'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la page gestionnaire des coûts"
          : "Add cost-manager page",
        tag: 'CM'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de visualiser les coûts du mois en cours"
          : "Ability to view costs for the current month",
        tag: 'CM'
      },
      {
        text: lang === 'fr'
          ? "Possibilité de visualiser les coûts sur un interval de dates et de comparer les tendances"
          : "Ability to view costs over a range of dates and compare trends",
        tag: 'CM'
      },
      {
        text: lang === 'fr'
          ? "Amélioration de l'interface sur le chargement des données dans les formulaires"
          : "UI improvement on data loading in VPC forms",
        tag: 'VPC'
      },
      {
        text: lang === 'fr'
          ? "Mise à jour des graphiques de métriques et consommation"
          : "Update metrics and consumption graphs",
        tag: 'GEN'
      },
      {
        text: lang === 'fr'
          ? "Correction d'un bug d'affichage des disque lors de la configuration de la replication depuis une machine virtuelle"
          : "Disk display bug fixed when configuring replication from a virtual machine",
        tag: 'CMP'
      }
    ]
  },
  '4.37.0': {
    options: { date: new Date('2026-04-02') },
    data: [
      {
        text: lang === 'fr'
          ? "Ajout du montant prévisionnel sur la page de consommation pour le graphique et la tendance"
          : "Add forecast amount to consumption page for graph and trend display",
        tag: 'CM'
      },
      {
        text: lang === 'fr'
          ? "Amélioration visuelle lorsqu'il y a une erreur ou trop peu de données sur la consommation du mois en cours"
          : "Visual improvement when there is an error or too little data on consumption in the current month",
        tag: 'CM'
      },
      {
        text: lang === 'fr'
          ? "Correction sur le tableau des MPU incomplets necessitant un double clique pour supprimer un élément"
          : "Fix on the table of incomplete MPUs requiring a double-click to delete an element",
        tag: 'STORAGE'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage du bouton pour créer un catalogue lorsqu'aucun catalogue n'est disponible"
          : "Fix of the display of the button to create a catalog when no catalog is available",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Amélioration du formulaire pour déployer une machine virtuelle depuis un item du catalogue"
          : "Improved form for deploying a virtual machine from a catalog item",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Ajout de la possibilité de changer le type de visualisation (grille ou tableau) depuis la page catalogue"
          : "Add the ability to change the display type (grid or table) from the catalog page",
        tag: 'CMP'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage de la page Commandes lorsqu'aucune commande n'est en cours"
          : "Fix display of Orders page when no order is in progress",
        tag: 'ORDER'
      },
    ]
  },
  '4.37.1': {
    options: { date: new Date('2026-04-07') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du montant prévisionnel sur le tableau de la tendance depuis l'onglet consommation"
          : "Fix of the forecast amount on the trend table from the consumption tab",
        tag: 'CM'
      }
    ]
  },
  '4.37.2': {
    options: { date: new Date('2026-04-08') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'affichage du titre des tooltips, sur les métriques de consommation"
          : "Fixed the display of tooltip titles for consumption metrics",
        tag: 'CM'
      },
      {
        text: lang === 'fr'
          ? "Correction de l'affichage du titre des tooltips, sur les métriques de consommation"
          : "Fixed the display of tooltip titles for consumption metrics",
        tag: 'AI'
      },
      {
        text: lang === 'fr'
          ? "Correction du bouton pour déplier les details dans les onglets de sauvegarde"
          : "Fixed the button for expanding details in the backup tabs",
        tag: 'BACK'
      },
    ]
  },
  '4.37.3': {
    options: { date: new Date('2026-04-13') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction du choix de la ressource de calcul, lors du déploiement d'un template"
          : "Correction to the selection of the compute resource when deploying a template",
        tag: 'CMP'
      },
    ]
  },
  '4.37.4': {
    options: { date: new Date('2026-04-16') },
    data: [
      {
        text: lang === 'fr'
          ? "Correction de l'ajout d'un nouveau disque pour une VM, lorsque l'on choisit manuellement le controlleur"
          : "Fixed an issue with adding a new disk to a VM when manually selecting the controller",
        tag: 'CMP'
      },
    ]
  }
}