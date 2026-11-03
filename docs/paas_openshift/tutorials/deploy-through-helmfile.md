---
title: Déployer avec Helmfile
---

# Déployer avec Helmfile

---

## Objectifs

L’objectif principal de ce tutoriel est de montrer comment déployer des applications sur notre PaaS OpenShift à l’aide de **Helmfile** en orchestrant plusieurs Helm charts ensemble.

Exposez le service front-end via HTTP/HTTPS.

## Limitations connues

Le contexte de cette démonstration est le suivant :

- Respecte les contraintes OpenShift **(SCC restricted-V2)**.
- Déploiement uniquement de **conteneurs sans privilèges** (UID > 30000).
- Aucun recours aux **CRD personnalisés**.
- Pas d’accès au rôle de la plateforme en tant que **cluster-admin**.
- Pas de déploiement au niveau du cluster (**installation cluster-wide**).
- Pas de **création de namespaces** via Helmfile (pour éviter des conflits de permissions).

## Points forts

- Démonstration du déploiement d’un front-end (Nginx) et d’un back-end (PostgreSQL) à l’aide de Helmfile.

## Versions des logiciels

- OpenShift CLI : 4.17.6  
- Helm : v3.16.3  
- Helmfile : v0.169.2  
- OpenShift : v4.15  
- PostgreSQL : v17.2.0-debian-12-r5  
- Nginx : v1.27.3  

---

## Prérequis

Avant de commencer cette démonstration, assurez-vous d’avoir les outils et ressources suivants :

1. **Outils CLI**  
   - **OpenShift CLI (`oc`)** : [Documentation](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
   - **Helm** : [Documentation](https://helm.sh/docs/)  
   - **Helmfile** : [Documentation](https://helmfile.readthedocs.io/en/latest/)

2. **Environnement OpenShift**

   - Un cluster OpenShift fonctionnel géré par Cloud Temple.  

3. **Accès et permissions**  
   - Rôle de client admin pour créer des projets et déployer des ressources.
  
---

## Plan de démonstration

### Vue d’ensemble des étapes

1. Préparer l’environnement et les outils.  
2. Déployer des applications à l’aide de Helmfile :  
   - **nginx** : Un serveur web simple.  
   - **PostgreSQL** : Un serveur de base de données.  
3. Vérifier le déploiement :  
   - Confirmer que les configurations rootless sont appliquées.  
   - Tester la fonctionnalité des applications.  
4. Explorer les cas d’usage avancés et extensions.  

---

## Fichiers nécessaires

Pour commencer, vous aurez besoin de notre **Repository de démonstration**

- Récupérez le [ici](https://github.com/Cloud-Temple/product-openshift-how-to/tree/main) dans le répertoire `/examples/deploy-through-helmfile/`.

Vous y trouverez trois fichiers :

- `Helmfile.yaml` : Manifeste de déploiement permettant à Helmfile de définir et orchestrer le déploiement des charts Helm.  
- `nginx-values.yaml` : Spécifie la configuration et le comportement de Nginx.  
- `postgres-values.yaml` : Spécifie la configuration et le comportement de PostgreSQL.  

---

### `Helmfile.yaml`

Le fichier principal de configuration Helmfile.  
Il définit les repositories, les charts Helm et les valeurs personnalisées pour chaque application.

#### Analyse ligne par ligne

---

#### `helmDefaults`

```yaml
helmDefaults:
  createNamespace: false
```

- **Description** : Définit le comportement par défaut des commandes Helm exécutées via Helmfile.
- **Détail** :
  - `createNamespace: false` : Évite que Helm tente de créer des namespaces pendant le déploiement.  
- **Impact** :
  - Assure que le namespace doit exister avant de lancer le déploiement des charts.  
  - Réduit les erreurs dans les environnements avec des permissions limitées.  

---

#### `repositories`

```yaml
repositories:
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
```

- **Description** : Définit les repositories Helm contenant les charts nécessaires.  
- **Détail** :  
  - `name` : Alias du repository Helm.  
  - `url` : URL du repository Bitnami, qui contient des charts couramment utilisés, compatibles avec OpenShift.  

---

#### `releases`

```yaml
  - name: nginx
    namespace: poc-helmfile
    chart: bitnami/nginx
    values:
      - nginx-values.yaml
```

- **Description** : Définit une application Helm nommée **nginx**.  
- **Détail** :  
  - `name` : Nom de la release Helm.  
  - `namespace` : Namespace Kubernetes dans lequel cette application sera déployée.  
  - `chart` : Chart Helm utilisé, ici `bitnami/nginx`, récupéré depuis le repository Bitnami.  
  - `values` : Fichier YAML contenant des configurations spécifiques pour le déploiement, ici `nginx-values.yaml`.  

---

### `nginx-values.yaml`

Fichier de configuration pour le déploiement de **Nginx**.  

---

### `postgres-values.yaml`

Fournit la configuration pour le déploiement de **PostgreSQL**.

---

## Déroulement du déploiement

### 1. Installer les prérequis

Assurez-vous que tous les outils mentionnés dans la section sur les logiciels sont installés.  
Suivez les guides suivants si besoin :  

- [OCP CLI Guide](https://docs.openshift.com/container-platform/4.15/cli_reference/openshift_cli/getting-started-cli.html)  
- [Helmfile Guide](https://helmfile.readthedocs.io/en/latest/)

---

### 2. Connexion au cluster OpenShift

Authentifiez-vous auprès de votre cluster OpenShift avec la commande suivante :

```bash
oc login --server=https://api.openshift.example.com:6443 --web
```

> **Attention** :  
> Modifiez `--server=url` avec l'url de votre instance Cloud Temple PaaS.

---

### 3. Créer un namespace dédié

Ce namespace isolera les ressources de démonstration :

```bash
oc new-project poc-helmfile
```

---

### 4. Déployer les applications avec Helmfile

Utilisez la commande suivante :

```bash
helmfile sync
```

---

### 5. Vérification du déploiement

- **Vérifiez les pods** :  

```bash
oc get pods -n poc-helmfile
```

---

### 6. Tester les services

Exposez les services déployés pour tester leur accessibilité et leur bon fonctionnement.

#### 1. Création de routes

Exposez le service Nginx en configurant des routes HTTP ou HTTPS :

- **Pour HTTPS** :

```bash
oc create route edge nginx-tls --service=nginx -n poc-helmfile --port=8080
```

- **Pour HTTP** :

```bash
oc create route edge nginx --service=nginx -n poc-helmfile --port=8080
```

#### 2. Ajouter une étiquette pour une exposition publique

Ajoutez un label spécifique au routeur pour que votre service soit accessible publiquement :

- Pour la route HTTPS :

```bash
oc label route nginx-tls ct-router-type=public -n poc-helmfile
```

- Pour la route HTTP :

```bash
oc label route nginx ct-router-type=public -n poc-helmfile
```

Ces étapes garantissent que vos routes sont exposées correctement.

---

### 7. Vérifier les routes et accéder aux applications

#### 1. Liste des routes disponibles

Vérifiez que les routes ont été correctement créées :

```bash
oc get routes -n poc-helmfile
```

Exemple de sortie :

| Nom         | Hôte/Port                                                                        | Service  | Port  | Résolution TLS | Étiquette                                  |
|-------------|----------------------------------------------------------------------------------|----------|-------|----------------|-------------------------------------------|
| nginx       | nginx-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com             | nginx    | 8080  | Aucun          | `ct-router-type=public`                   |
| nginx-tls   | nginx-tls-poc-helmfile.apps-ocp**number**-**cluster**.paas.cloud-temple.com         | nginx    | 8080  | Edge (TLS)     | `ct-router-type=public`                   |

#### 2. Accédez aux applications

Utilisez les URL listées dans la colonne « Hôte/Port » pour accéder aux applications. Voici un exemple :

- Pour HTTP : `http://nginx-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`
- Pour HTTPS : `https://nginx-tls-poc-helmfile.apps-ocp{number}-{cluster}.paas.cloud-temple.com`

> Vous devriez voir une réponse de type serveur web à partir du **front-end Nginx** déployé.

---

## Critères de validation

Pour garantir le succès de cette démonstration, vérifiez les éléments suivants :

1. **Les deux applications s’exécutent sans erreur**.  
2. Les pods utilisent des UID > 30000, conformément aux contraintes des conteneurs rootless.  
3. Aucun CRD personnalisé n’a été déployé.  
4. Les services déployés sont accessibles via leurs routes définies (vérifiez Nginx sur HTTP et HTTPS).  

---

## Conclusion

Vous avez maintenant un exemple complet de déploiement d’applications front-end et back-end sur OpenShift avec Helmfile. Cette méthode offre une gestion modulaire et robuste des environnements complexes.

Vous maîtrisez maintenant le déploiement via **Helmfile** sur OpenShift dans un environnement géré par Cloud Temple. 🚀
