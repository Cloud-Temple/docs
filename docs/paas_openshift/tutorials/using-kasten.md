---
title: Configurer des Sauvegardes avec Kasten sur le S3 SNC Cloud Temple
---

---

## Objectifs

L'objectif principal de ce guide est de vous montrer comment configurer un stockage **S3 SNC (SecNumCloud)** dans Kasten pour effectuer et gérer vos sauvegardes sur l’infrastructure cloud Cloud Temple. Ce guide couvre les étapes nécessaires pour configurer cette intégration dans un environnement OpenShift.

---

## Limitations connues

Dans le cadre de cette configuration :

- **Accès à le produit S3 Cloud Temple** : Vous devez disposer de le produit S3 fourni par Cloud Temple (clé d'accès et clé secrète).  
  
---

## Points forts

- **Sécurisé et certifié** : Cloud Temple offre un stockage S3 conforme aux standards **SecNumCloud**, certifié et sécurisé.  
- **Simplicité d’intégration avec Kasten** : L’interface intuitive de Kasten permet une configuration rapide et directe.  
- **Adapté aux environnements modernes** : Cette solution est conçue pour s’intégrer facilement aux clusters Kubernetes fonctionnant avec OpenShift.  

---

## Versions des logiciels

Assurez-vous que les versions suivantes de logiciels et outils sont installées pour garantir une compatibilité optimale :  

- **Kasten K10** : v5.5.10 ou supérieur  
- **OpenShift CLI** : v4.15.6 ou supérieur  
- **Kubernetes** : v1.24 ou supérieur (via OpenShift)  

---

## Prérequis

Pour suivre ce guide, assurez-vous d’avoir les éléments suivants :

1. **Accès à l’interface Kasten** : Vous devez pouvoir accéder au tableau de bord de Kasten déployé dans votre cluster OpenShift.  
2. **Clés S3 fournies par Cloud Temple** :
   - Clé d'accès (Access Key)
   - Clé secrète (Secret Key)  
3. **Bucket préconfiguré** : Un Bucket dans S3 Cloud Temple, exemple : `demobackup`.
4. **Autorisations Kubernetes** : Vous devez disposer des permissions administratives au sein du namespace Kasten (`kasten-io`) pour effectuer des configurations.  

---

## Plan de démonstration

### Vue d’ensemble des étapes

1. Préparation de l’environnement Kasten et OpenShift.  
2. Configuration d’un profil S3 dans l’interface Kasten.  
3. Création et validation de tâches de sauvegarde pointant vers l’emplacement S3 configuré.  

---

## Fichiers nécessaires

Aucun fichier spécifique n’est nécessaire pour cette configuration, mais vous aurez besoin des informations suivantes provenant de Cloud Temple :  

- **Clé d'accès S3**  
- **Clé secrète S3**  
- **URL de l’endpoint S3 SNC** : Par exemple, `xxxxx.s3.fr1.cloud-temple.com`.  
- **Nom de votre Bucket** : Exemple, `demobackup`.

---

## Déroulement du déploiement

### 1. Accéder à Kasten via OpenShift

Accédez à l’interface graphique de votre cluster OpenShift :  

1. Connectez-vous à la console OpenShift et accédez au namespace où Kasten est déployé (par défaut `kasten-io`).  
2. Allez dans l’onglet **Applications** et cliquez sur le lien de redirection vers le tableau de bord Kasten.  
3. Une fois dans Kasten, assurez-vous que les dépendances sont fonctionnelles (connectivité aux nodes, ressources disponibles).  

---

### 2. Créer un profil S3 dans Kasten

1. Une fois sur le tableau de bord Kasten, allez dans la section **"Locations"** (Emplacements).  
2. Cliquez sur le bouton **"Add New Location"** (Ajouter un nouvel emplacement).  
3. Choisissez le type de stockage **"S3 Compatible Storage"**.  
4. Renseignez les paramètres suivants :  

   - **Type** : S3 Compatible Storage  
   - **Région** : `FR1`  
   - **Nom du Bucket** : `demobackup`  
   - **Endpoint (URL)** : `xxxxx.s3.fr1.cloud-temple.com`  
   - **Clé d'accès (Access Key)** : Renseignez la clé d'accès fournie par Cloud Temple.  
   - **Clé secrète (Secret Key)** : Renseignez la clé secrète associée.  

5. Testez la connectivité via l’interface pour vérifier que la connexion au Bucket est réussie.  
6. Sauvegardez la configuration.  

---

### 3. Configurer et valider une tâche de sauvegarde

1. Dans Kasten, créez une politique (Policy) pour gérer vos sauvegardes :  
   - Allez dans la section **Policies** (Politiques).  
   - Cliquez sur **Create Policy** (Créer une politique).  
   - Sélectionnez **Backup** comme type de tâche.  
   - Choisissez les namespaces ou workloads à inclure dans la sauvegarde (par exemple, une application critique déployée dans OpenShift).  

2. Sous **Location** (Emplacement), sélectionnez la location S3 que vous avez configurée précédemment (`demobackup`).  

3. Planifiez la fréquence des sauvegardes :  
   - Exemple : Sauvegarde quotidienne à 23h00.  

4. Enregistrez la politique, puis lancez un test manuel pour vérifier le bon fonctionnement de vos sauvegardes.  

---

### 4. Vérifier l’état des sauvegardes

1. Allez dans la section **Activities** (Activités) de Kasten.  
2. Consultez les sauvegardes terminées et vérifiez que les données ont bien été envoyées à votre Bucket S3 Cloud Temple.  
3. Connectez-vous à l’interface S3 de Cloud Temple pour vérifier la présence des fichiers de sauvegarde dans le Bucket.  

---

## Critères de validation

Pour confirmer que la sauvegarde est correctement configurée :

1. Les tests de connectivité avec le Bucket S3 (endpoint, access key, secret key) sont réussis.  
2. Les sauvegardes s’exécutent sans erreur et s’affichent dans la section **Activities** de Kasten.  
3. Les fichiers de sauvegarde apparaissent dans le Bucket S3 (vérifiez via l’interface Cloud Temple).  
4. Les workloads sauvegardés peuvent être restaurés avec succès via Kasten.  

---

## Conclusion

En suivant ce guide, vous avez configuré avec succès un emplacement de sauvegarde S3 compatible SecNumCloud dans Kasten avec l’infrastructure Cloud Temple. Ce workflow permet de gérer efficacement vos sauvegardes, tout en tirant parti d’un stockage certifié et sécurisé.  

Pour aller plus loin, vous pouvez :  

- Ajouter d'autres workloads à sauvegarder.  
- Configurer des politiques de rétention avancées dans Kasten.  
- Automatiser les tests de restauration pour valider vos données.  

Vous disposez maintenant d’une solution robuste et conforme pour sécuriser vos données critiques ! 🚀
