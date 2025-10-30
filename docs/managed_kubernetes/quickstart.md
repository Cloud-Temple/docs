---
title: Guide de démarrage
---

Bienvenue sur le guide de démarrage de **Managed Kubernetes** Cloud Temple.

L'objectif de cette section est de vous orienter vers les ressources nécessaires pour prendre en main votre cluster.

---

## Avant de commencer

Pour interagir avec votre cluster, plusieurs éléments sont indispensables :

1.  **Le fichier `kubeconfig`** : Ce fichier, qui vous est fourni par les équipes Cloud Temple à la livraison du service, contient toutes les informations pour vous connecter de manière sécurisée.
2.  **L'outil `kubectl`** : Il s'agit de l'interface en ligne de commande standard pour piloter un cluster Kubernetes.
3.  **L'outil `kubelogin`** (si OIDC est utilisé) : Si votre cluster est configuré pour s'authentifier via un fournisseur d'identité OIDC (comme Entra ID/Azure AD), vous devez installer l'outil `kubelogin` pour gérer le flux d'authentification. Suivez le [guide d'installation de kubelogin](https://github.com/int128/kubelogin).

Outils graphiques recommandés: Pour une expérience plus visuelle et une gestion simplifiée de vos ressources, nous vous recommandons l'utilisation de **Lens**. C'est un outil puissant pour Kubernetes qui vous permet d'explorer votre cluster, de gérer vos applications et de visualiser leur état de manière graphique.
Certains de nos tutoriels utiliseront Lens pour illustrer les manipulations. Vous pouvez le télécharger ici : [https://k8slens.dev/](https://k8slens.dev/).

---

## Accéder à votre cluster Kubernetes Managé

Votre cluster de production est identifié par un code à 5 lettres (6 lettres en Dev/Test). Ce code est utilisé pour construire les url des différentes interfaces. Dans les tutoriaux, nous utiliserons **"ctodev"**.

Les urls sont:

- API kubernetes (utilisée dans kubeconfig):
  - **identifiant**.mk.ms-cloud-temple.com:6443  (donc dans notre exemple: [https://ctodev.mk.ms-cloud-temple.com:6443](https://ctodev.mk.ms-cloud-temple.com:6443) )

- url publiques : 
  - k10.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - grafana.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - harbor.external-secured.**identifiant**.mk.ms-cloud-temple.com
  - kubecost.external-secured.**identifiant**.mk.ms-cloud-temple.com

*Les url ci dessus ne sont accessible que depuis des IP publiques connues, configurées dans le firewall de la solution. Si vous souhaitez ajouter une IP publique, il faut faire une demande de support.*

- url internes :
  - ceph.internal.**identifiant**.mk.ms-cloud-temple.com
  - argocd.internal.**identifiant**.mk.ms-cloud-temple.com
  - hubble.internal.**identifiant**.mk.ms-cloud-temple.com

*Les url ci dessus ne sont pas exposées sur Internet. Elles ne sont accessibles que sur le réseau Interne Kubernetes Managé.*

---

## Vos permissions

Pour les clusters Kubernetes Managé **"Dev/Test"**, le compte de service qui vous a été fourni dispose de toutes les permissions sur l'ensemble du cluster (ClusterAdmin)

Sur les cluster **"Production"**, vos permissions sont limitées. Vous disposez d"un droit **"Viewer Etendu"** sur les ressources du cluster. Ce droit accorde un accès en lecture seule à des ressources clés, à la fois au niveau du cluster et pour le diagnostic :

- Namespaces : autorisent les locataires à lister les espaces de noms pour les outils et tableaux de bord.
- Pods, deployments,  replicaset... : autorisent les locataires à lister les ressources déployées sur le cluster.
- Nodes : offrent une visibilité sur la capacité, les taints et les labels des nœuds afin de comprendre le comportement du planificateur.
- StorageClasses, PVs, PVCs, VolumeAttachments et CSIDrivers : permettent aux locataires d’identifier les classes de stockage disponibles et de résoudre les problèmes de liaison entre PVC et PV ou les erreurs liées aux pilotes CSI.
- IngressClasses : informent les utilisateurs sur les contrôleurs d’ingress disponibles pour le routage des applications.
- NetworkPolicies, ResourceQuotas, LimitRanges et Events : essentiels pour diagnostiquer les restrictions réseau, les échecs de planification ou les violations de quotas de ressources.

Le compte de service qui vous a été confié a aussi été rendu **propriétaire d'un premier *tenant* Capsule**.
Vous pouvez créer des Namespaces, qui seront rattachés à votre tenant Capsule.
Les comptes externes (OIDC) sont des membres de ce même tenant Capsule, ce qui leur permet d'interagir librement à l'intérieur des **namespaces** qui sont associés au tenant. (Voir le tutoriel "Gérer les permissions avec Capsule")

Certaines actions ne sont pas permises : 

  - lister / créer des tenant Capsule
  - créer des CRD: Si vous devez déployer une application avec des CRD (helm chart d'un opérateur par exemple), vous devrez interagir avec le support pour que ces CRD soient importées (via extraction des yaml depuis le chart helm). Vous pourrez ensuite déployer votre chart helm avec l'option --skip-crds. Voir : [Documentation Helm 3](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)

---
 
<div class="row">
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutoriel : Déployer votre première application</h3>
      </div>
      <div className="card__body">
        <p>
          Suivez un guide détaillé pour vous connecter, déployer une application "Hello World", et l'exposer sur Internet.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/firstdeploy" className="button button--primary button--block">Commencer le tutoriel &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutoriel : Comprendre le réseau</h3>
      </div>
      <div className="card__body">
        <p>
          Découvrez le plan d'adressage, les Ingress Controllers et comment exposer vos services de manière sécurisée.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/networking" className="button button--primary button--block">Voir le tutoriel réseau &rarr;</a>
      </div>
    </div>
  </div>
  <div class="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Tutoriel : Gérer les permissions avec Capsule</h3>
      </div>
      <div className="card__body">
        <p>
          Apprenez à utiliser Capsule pour créer des tenants et déléguer des permissions à vos équipes.
        </p>
      </div>
      <div className="card__footer">
        <a href="./tutorials/usingcapsule" className="button button--primary button--block">Découvrir Capsule &rarr;</a>
      </div>
    </div>
  </div>
</div>
