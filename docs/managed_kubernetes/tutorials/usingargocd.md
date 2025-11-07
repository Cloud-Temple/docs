---
title: Utiliser ArgoCD pour vos déploiements GitOps
---

import argocdguestbook from './images/argocdguestbook.png'

## Objectifs

Ce tutoriel vous explique comment utiliser **ArgoCD**, l'outil de déploiement continu GitOps intégré à votre cluster **Managed Kubernetes**. À la fin de ce guide, vous saurez :
- Ce qu'est l'approche GitOps.
- Comment accéder à l'interface d'ArgoCD.
- Comment déployer une application en utilisant ArgoCD pour synchroniser un dépôt Git.

## Le principe du GitOps avec ArgoCD

Le **GitOps** est une pratique qui consiste à utiliser un dépôt Git comme unique source de vérité pour déclarer l'état souhaité de votre infrastructure et de vos applications.

**ArgoCD** est l'outil qui met en œuvre ce principe. Il surveille en permanence un dépôt Git et compare l'état qui y est défini (via des manifestes Kubernetes) avec l'état réel de votre cluster. S'il détecte une différence, il applique automatiquement les changements pour que le cluster corresponde à ce qui est déclaré dans Git.

Les avantages sont nombreux :
- **Déploiements fiables et reproductibles.**
- **Traçabilité complète** de tous les changements via l'historique Git.
- **Récupération rapide** après incident en revenant à un commit précédent.
- **Sécurité améliorée** en limitant les accès directs au cluster.

## Accéder à l'interface ArgoCD

L'interface web d'ArgoCD est exposée sur une URL interne de votre cluster. Pour y accéder, vous devez être connecté au réseau interne du cluster (par exemple, via un bastion ou un VPN).

L'URL à utiliser est la suivante, en remplaçant `<votre-identifiant-de-cluster>` :

`http://argocd.internal.<votre-identifiant-de-cluster>.mk.ms-cloud-temple.com`

Vous pouvez obtenir l'adresse IP interne de l'Ingress ArgoCD avec la commande suivante :
```bash
kubectl get ingress argocd-server -n argocd
```

:::info
Le mot de passe pour le compte `admin` vous est fourni par les équipes Cloud Temple lors de la livraison de votre cluster.
:::

## Déployer une application avec ArgoCD

Nous allons maintenant déployer une application de test en utilisant l'approche GitOps.

### 1. Le dépôt Git

ArgoCD a besoin d'un dépôt Git contenant les manifestes Kubernetes de l'application à déployer. Pour ce tutoriel, nous utiliserons le dépôt d'exemples d'ArgoCD : `https://github.com/argoproj/argocd-example-apps`. Nous déploierons l'application `guestbook` qui se trouve dans ce dépôt.

### 2. Préparer le Namespace de destination

Pour que l'application puisse être déployée dans un namespace géré par Capsule, nous devons d'abord créer ce namespace et lui appliquer le label de tenant approprié.

Exécutez la commandes suivantes :

```bash
# Crée le namespace
kubectl create namespace guestbook

# Applique le label pour l'associer au tenant "default" de Capsule (si besoin, car le namespace a surement déjà été associé avec votre tenant lors de sa création)
kubectl label namespace guestbook capsule.clastix.io/tenant=default
```

### 3. Créer l'application dans ArgoCD

Maintenant que le namespace est prêt, nous pouvons déclarer l'application à ArgoCD.

1.  Créez un fichier nommé `app-guestbook.yaml` avec le contenu suivant :

    ```yaml
    apiVersion: argoproj.io/v1alpha1
    kind: Application
    metadata:
      name: guestbook
      namespace: argocd
    spec:
      project: default
      source:
        repoURL: https://github.com/argoproj/argocd-example-apps.git
        targetRevision: HEAD
        path: guestbook
      destination:
        server: https://kubernetes.default.svc
        namespace: guestbook
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
    ```
    Ce manifeste demande à ArgoCD de :
    - Créer une application nommée `guestbook`.
    - Surveiller le dépôt `argocd-example-apps`.
    - Se concentrer sur le dossier `guestbook` de ce dépôt.
    - Déployer les manifestes trouvés dans le namespace `guestbook` du cluster local.
    - Maintenir la synchronisation automatiquement (`automated`).

2.  Vous avez deux options pour créer l'application dans ArgoCD :

    **Option A : Via `kubectl` (Approche GitOps)**

    Appliquez ce manifeste directement à votre cluster. C'est la méthode recommandée car elle suit le principe GitOps de gestion déclarative.
    ```bash
    kubectl apply -f app-guestbook.yaml
    ```

    **Option B : Via l'interface web d'ArgoCD**

    Vous pouvez également créer l'application directement depuis l'interface graphique :
    - Dans l'UI d'ArgoCD, cliquez sur **"+ NEW APP"**.
    - En haut à droite de l'écran de création, cliquez sur **"EDIT AS YAML"**.
    - Collez le contenu de votre fichier `app-guestbook.yaml` dans l'éditeur.
    - Cliquez sur **"CREATE"**.

### 4. Vérifier la synchronisation

Dès que vous appliquez le manifeste, ArgoCD détecte cette nouvelle ressource `Application` et commence son travail.

1.  **Via l'interface web :**
    - Connectez-vous à l'interface d'ArgoCD.
    - Vous devriez voir une nouvelle carte pour l'application `guestbook`.
    - Après quelques instants, son statut devrait passer à `Healthy` et `Synced`.
    - En cliquant sur la carte, vous pouvez visualiser toutes les ressources Kubernetes (Deployment, Service, etc.) qui ont été créées.

<img src={argocdguestbook} />

2.  **Via la ligne de commande :**
    - Vérifiez que le namespace `guestbook` a été créé :
      ```bash
      kubectl get ns guestbook
      ```
    - Vérifiez que les ressources de l'application sont bien déployées dans ce namespace :
      ```bash
      kubectl get all -n guestbook
      NAME                                READY   STATUS    RESTARTS   AGE
      pod/guestbook-ui-85db984648-br6r2   1/1     Running   0          19m

      NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
      service/guestbook-ui   ClusterIP   10.111.160.90   <none>        80/TCP    19m

      NAME                           READY   UP-TO-DATE   AVAILABLE   AGE
      deployment.apps/guestbook-ui   1/1     1            1           19m

      NAME                                      DESIRED   CURRENT   READY   AGE
      replicaset.apps/guestbook-ui-85db984648   1         1         1       19m
      ```

### 5. Le cycle GitOps

Maintenant, si vous modifiez un manifeste dans le dépôt Git, ArgoCD détectera le changement et mettra automatiquement à jour l'application dans le cluster. C'est la magie du GitOps !

## Nettoyage

Pour supprimer l'application et toutes les ressources associées, vous pouvez simplement supprimer la ressource `Application` d'ArgoCD.

1.  **Via l'interface web :**
    - Dans l'UI d'ArgoCD, trouvez l'application `guestbook`.
    - Cliquez sur les trois points (...) pour ouvrir le menu et sélectionnez **"Delete"**.
    - Cochez l'option **"Foreground"** pour vous assurer que toutes les ressources managées (pods, services, etc.) sont également supprimées en cascade.
2.  **Via `kubectl` :**
    - Supprimez le fichier `app-guestbook.yaml` que vous avez créé :
      ```bash
      kubectl delete -f app-guestbook.yaml
      ```

ArgoCD va maintenant supprimer tous les composants de l'application `guestbook`. Une fois la synchronisation de suppression terminée, le namespace `guestbook` sera vide. Vous pouvez alors le supprimer avec la commande suivante :

```bash
kubectl delete namespace guestbook
```

:::info Pour aller plus loin : la gestion des secrets
Ce tutoriel utilise un dépôt public sans données sensibles. Pour vos applications en production, il est crucial de ne jamais stocker de secrets (mots de passe, clés d'API) en clair dans votre dépôt Git. Des solutions comme **Sealed Secrets** ou **HashiCorp Vault** s'intègrent avec ArgoCD pour gérer vos secrets de manière sécurisée. Un futur tutoriel détaillera cette approche.
:::

## Conclusion

Vous avez déployé votre première application avec ArgoCD en suivant les principes GitOps. Cette approche puissante vous permet de gérer vos déploiements de manière déclarative, fiable et sécurisée. Nous vous encourageons à l'adopter pour l'ensemble de vos applications sur Managed Kubernetes.
