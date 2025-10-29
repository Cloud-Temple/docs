---
title: Guide de démarrage
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'

# QuickStart pour l'offre OpenShift

Cette page vous guide à travers les étapes initiales pour utiliser l'offre **OpenShift** depuis la console Cloud Temple. Suivez ces instructions pour découvrir les menus et fonctionnalités disponibles.

---

## Prérequis

Avant de commencer, assurez-vous des points suivants :

1. **Souscription activée** : Votre organisation doit avoir souscrit à l'offre OpenShift.
2. **Permissions utilisateur** : Votre compte utilisateur doit disposer des droits nécessaires pour accéder et gérer les ressources OpenShift.

---

## Accès à l'interface OpenShift

Une fois la souscription activée et les permissions configurées, un nouveau menu intitulé **OpenShift** apparaît dans la console Cloud Temple. Ce menu contient un sous-menu principal : **Clusters**.

<img src={oshiftMenu_001} />

---

### 1. Sous-menu **Clusters**

Le sous-menu **Clusters** vous présente un tableau listant tous les clusters OpenShift disponibles, déployés au sein de votre tenant. Ce tableau inclut les informations principales pour chaque cluster :

- **Nom du cluster**
- **URL d'accès**
- **URL API**
- **Version**
- **Statut**
- **Dernière mise à jour**

<img src={oshiftSubMenu_001} />

#### Fonctionnalité principale

- **Nom cliquable** : En cliquant sur le nom d'un cluster OpenShift, une nouvelle page s'affiche avec les **détails complets** du cluster:
  - Informations de connectivité pour la gestion (**URL d'accès**, **URL d'API**).
  - Informations générales (**Statut**, **Dernière mise à jour**, **Version**)
  - Tableau des noeuds incluant les informations:
    - **Nom du noeud**
    - **Type**
    - **AZ**
    - **Statut**
    - **CPU**
    - **RAM**

<img src={oshiftClusterDetail_001} />

---

## Accès à l'interface d'administration OpenShift

Cliquez sur l'**URL d'accès** du cluster que vous souhaitez administrer. Vous accédez à l'environnement d'administration du cluster :

<img src={oshiftMenu_002} />

Après authentification, vous pouvez administrer votre cluster :

<img src={oshiftMenu_003} />

### Ressources de votre environnement

Voici les informations de connexion et de configuration propres à votre environnement OpenShift.

#### Détails de connexion

Pour accéder aux différents composants OpenShift, veillez à ce que votre locataire soit inscrit sur la liste blanche dans la console (consultez la documentation : [Cloud Temple Documentation](https://docs.cloud-temple.com/)).

- __URL Shiva Tenant__ :
  [https://__votre-id-locataire__.shiva.cloud-temple.com/](https://**votre-id-locataire**.shiva.cloud-temple.com/)

- __OpenShift UI__ :
  [https://ui-ocp01-__votre-id__.paas.cloud-temple.com/](https://ui-ocp01-**votre-id**.paas.cloud-temple.com/)

- __API externe__ :
  [https://api-ocp01-__votre-id__.paas.cloud-temple.com](https://api-ocp01-**votre-id**.paas.cloud-temple.com)

- __GitOps (ARGOCD)__ :
  [https://gitops-ocp01-__votre-id__.paas.cloud-temple.com/applications](https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/applications)

#### Connexion au cluster via CLI

Pour vous connecter via la ligne de commande (CLI), utilisez la commande suivante :

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com/ --web
```

#### Accès au registre

Pour accéder au registre, connectez-vous en utilisant les commandes suivantes :

```bash
oc login https://api-ocp01-{votre-id}.paas.cloud-temple.com --web
docker login -u {votre-utilisateur} -p $(oc whoami -t) registry-ocp01-{votre-id}.paas.cloud-temple.com
```

Ensuite, testez la construction et le téléversement d'une image Docker :

```bash
docker build -t <namespace>/temp:latest .
docker tag <namespace>/temp:latest registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
docker push registry-ocp01-{votre-id}.paas.cloud-temple.com/<namespace>/temp:latest
```

#### Configuration des routeurs et Load Balancers

La plateforme propose des options flexibles pour le __roulage des flux__ et l’__équilibrage de charge__ :

- Par défaut, des load balancers privés sont utilisés pour les routes et les ingresses.
- Domaines :
  - `*.apps-priv-ocp01-{votre-id}.paas.cloud-temple.com`
  - `*.apps-ocp01-{votre-id}.paas.cloud-temple.com`

Assurez-vous que vos routes ou ingresses sont configurés avec les étiquettes ou classes d’ingress appropriées pour garantir un routage correct.

Exemple :

```yaml
metadata:
  labels:
    ct-router-type: public
```

#### Interconnexion IaaS

Les configurations réseau jouent un rôle crucial pour sécuriser les communications avec OpenShift.

- __Réseau d’interconnexion__ : 100.67.0.0/28
- __VIP du load balancer privé__ : 100.67.0.3

Vérifiez que votre pare-feu dispose d’une interface dédiée et autorise le trafic entre les réseaux spécifiés.
