---
title: Guide de démarrage
---
import oshiftMenu_001 from './images/oshift_menu_001.png'
import oshiftSubMenu_001 from './images/oshift_sub_menu_001.png'
import oshiftClusterDetail_001 from './images/oshift_cluster_detail_001.png'
import oshiftMenu_002 from './images/oshift_menu_002.png'
import oshiftMenu_003 from './images/oshift_menu_003.png'
import oshiftOrder_001 from './images/oshift_order_001.png'

# QuickStart pour l'offre OpenShift

Cette page vous guide à travers les étapes initiales pour utiliser l'offre **OpenShift** depuis la console Cloud Temple. Suivez ces instructions pour découvrir les menus et fonctionnalités disponibles.

---

## Prérequis

Avant de commencer, assurez-vous des points suivants :

1. **Souscription activée** : Votre organisation doit avoir souscrit à l'offre OpenShift.
2. **Permissions utilisateur** : Votre compte utilisateur doit disposer des droits nécessaires pour accéder et gérer les ressources OpenShift.

---

## Premier accès et commande

Lors de votre premier accès à l'offre OpenShift, après activation de la souscription et configuration des permissions, un écran d'accueil s'affiche :

<img src={oshiftOrder_001} />

Cet écran indique que vous n'avez pas encore de clusters OpenShift SecNumCloud déployés.

**Pour commander votre premier cluster OpenShift SecNumCloud, veuillez contacter le support Cloud Temple.**

Une fois votre commande traitée par le support et votre cluster déployé, vous pourrez accéder au menu OpenShift.

---

## Accès à l'interface OpenShift

Une fois votre premier cluster déployé, un nouveau menu intitulé **OpenShift** apparaît dans la console Cloud Temple. Ce menu contient un sous-menu principal : **Clusters**.

<img src={oshiftMenu_001} />

---

### 1. Liste des clusters

Le sous-menu **Clusters** vous présente un tableau listant tous les clusters OpenShift disponibles, déployés au sein de votre tenant. Ce tableau inclut les informations principales pour chaque cluster :

- **Nom du cluster**
- **URL d'accès**
- **URL API**
- **Version**
- **Statut**
- **Dernière mise à jour**

<img src={oshiftSubMenu_001} />

💡 **Pour accéder aux détails complets d'un cluster, cliquez sur son nom dans le tableau.**

---

### 2. Détail d'un cluster

Lorsque vous cliquez sur le **nom d'un cluster** dans la liste, une page détaillée s'affiche avec les informations complètes du cluster :

**Informations de connectivité :**

- **URL d'accès** : Interface web du cluster
- **URL d'API** : Point d'entrée API pour les opérations CLI

**Informations générales :**

- **Statut** : État actuel du cluster
- **Dernière mise à jour** : Date de la dernière modification
- **Version** : Version d'OpenShift déployée

**Nœuds du cluster :**

Un tableau détaille chaque nœud avec les informations suivantes :

- **Nom du noeud**
- **Type**
- **AZ** (Availability Zone)
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

- **URL Console Tenant** :
  [https://**votre-id-locataire**.shiva.cloud-temple.com/](https://**votre-id-locataire**.shiva.cloud-temple.com/)

- **OpenShift UI** :
  [https://ui-ocp01-**votre-id**.paas.cloud-temple.com/](https://ui-ocp01-**votre-id**.paas.cloud-temple.com/)

- **API externe** :
  [https://api-ocp01-**votre-id**.paas.cloud-temple.com](https://api-ocp01-**votre-id**.paas.cloud-temple.com)

- **GitOps (ARGOCD)** :
  [https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/applications](https://gitops-ocp01-**votre-id**.paas.cloud-temple.com/applications)

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

La plateforme propose des options flexibles pour le **roulage des flux** et l’**équilibrage de charge** :

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

- **Réseau d’interconnexion** : 100.67.0.0/28
- **VIP du load balancer privé** : 100.67.0.3

Vérifiez que votre pare-feu dispose d’une interface dédiée et autorise le trafic entre les réseaux spécifiés.
