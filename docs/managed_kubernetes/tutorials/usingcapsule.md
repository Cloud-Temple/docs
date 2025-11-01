---
title: Gérer les permissions avec Capsule
---

## Objectifs

Ce tutoriel vous guidera dans l'utilisation de **Capsule**, l'outil de multi-tenancy intégré à votre cluster **Managed Kubernetes**. À la fin de ce guide, vous saurez :

- Ce qu'est un **Tenant Capsule** et comment il organise vos permissions.
- Comment **créer et gérer des Namespaces** au sein de votre Tenant.
- Comment les **politiques de sécurité et les quotas** sont appliqués à vos projets.

## Qu'est-ce que Capsule ?

Capsule est un contrôleur Kubernetes qui introduit le concept de **Tenant** pour regrouper plusieurs Namespaces. Dans l'offre Managed Kubernetes de Cloud Temple, Capsule est utilisé pour vous déléguer la gestion de vos propres Namespaces en toute autonomie, sans avoir besoin de l'intervention d'un administrateur cluster.

À la livraison de votre cluster, les équipes Cloud Temple ont créé un premier Tenant pour vous et vous en ont désigné comme **propriétaire (Tenant Owner)**.

*Note : Par défaut, votre premier Tenant s'appelle `default` et le compte de service propriétaire est `defaultapp`.*

Pour en savoir plus sur le projet, vous pouvez consulter le [site web officiel de Capsule](https://projectcapsule.dev/).

## Étape 1 : Connaître le nom de votre Tenant

En tant que `Tenant Owner`, vous n'avez pas les permissions pour lister la ressource `Tenant` directement. Le nom de votre Tenant vous est communiqué par les équipes Cloud Temple lors de la livraison du service.

Si vous avez oublié le nom de votre Tenant, vous pouvez le retrouver en inspectant les labels des Namespaces auxquels vous avez accès. La commande suivante liste tous les namespaces qui sont accrochés a un tenant Capsule et affiche leurs labels :

```bash
kubectl get ns -l capsule.clastix.io/tenant --show-labels
```

Cherchez le label `capsule.clastix.io/tenant`. La valeur de ce label est le nom de votre Tenant. Vous pouvez ensuite utiliser ce nom pour filtrer et ne voir que les Namespaces de votre Tenant :

```bash
# Une fois que vous connaissez le nom de votre tenant, par exemple "my-tenant"
kubectl get ns -l capsule.clastix.io/tenant=my-tenant
```

## Étape 2 : Créer un nouveau Namespace

Votre principal avantage en tant que `Tenant Owner` est de pouvoir créer des Namespaces vous-même. Vous pouvez le faire directement avec une seule commande `kubectl`.

Exécutez la commande suivante pour créer un namespace nommé `mon-projet-dev` :

```bash
kubectl create namespace mon-projet-dev
```

Capsule interceptera cette requête. Comme vous êtes propriétaire d'un Tenant, il autorisera la création du Namespace et l'associera automatiquement à votre Tenant.

## Étape 3 : Vérifier l'association du Namespace

Une fois le Namespace créé, vous pouvez vérifier qu'il a bien été rattaché à votre Tenant.

```bash
kubectl get ns mon-projet-dev --show-labels
```

Vous remarquerez que Capsule a ajouté un label à votre Namespace, indiquant à quel Tenant il appartient. C'est ce mécanisme qui garantit l'isolation entre les différents Tenants du cluster.

```
NAME             STATUS   AGE   LABELS
mon-projet-dev   Active   1m    capsule.clastix.io/tenant=votre-tenant
```

## Étape 4 : Comprendre l'héritage des politiques

L'un des plus grands avantages de Capsule est que toutes les politiques de sécurité, les quotas de ressources (`ResourceQuota`) et les plages de ressources (`LimitRange`) définis au niveau du Tenant par les administrateurs sont **automatiquement hérités** par tous les Namespaces que vous créez.

Cela garantit que vos projets respectent les limites de consommation (CPU, mémoire, stockage) et les règles de sécurité (politiques réseau) définies pour votre environnement, sans que vous ayez à les reconfigurer pour chaque Namespace.

## Conclusion

Grâce à Capsule, vous disposez d'une autonomie complète pour gérer les Namespaces de vos équipes tout en bénéficiant d'un cadre sécurisé et préconfiguré par les administrateurs du cluster. Vous pouvez créer, modifier et supprimer des Namespaces à volonté, sachant que les garde-fous nécessaires sont automatiquement appliqués.

Si vous avez besoin de créer un nouveau Tenant pour isoler un autre ensemble de projets ou d'équipes, vous pouvez en faire la demande auprès du support Cloud Temple.
