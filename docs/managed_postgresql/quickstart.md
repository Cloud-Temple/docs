---
title: Guide de démarrage
---

Bienvenue sur le guide de démarrage de **PostgreSQL Managé** Cloud Temple.

Ce guide vous explique comment vous connecter à votre cluster PostgreSQL managé, récupérer vos identifiants de connexion et interagir avec l'opérateur CloudNative-PG (CNPG) via Kubernetes.

---

## 1. Comprendre les Services Exposés

Lorsqu'un cluster PostgreSQL est déployé via l'opérateur CNPG, plusieurs services Kubernetes sont automatiquement créés pour acheminer le trafic vers les bonnes instances.

| Service | Port | Rôle |
| :--- | :--- | :--- |
| `<cluster-name>-rw` | `5432` | **Primary (lecture/écriture)** : route le trafic uniquement vers l'instance primaire actuelle. À utiliser pour les applications qui ont besoin d'écrire des données. |
| `<cluster-name>-ro` | `5432` | **Replicas (lecture seule)** : répartit le trafic de lecture sur les réplicas disponibles. À utiliser pour la consultation et le reporting. |
| `<cluster-name>-r` | `5432` | **Read (n'importe quelle instance)** : route le trafic vers le primaire ou n'importe quel réplica disponible. |

Vous pouvez lister ces services dans votre namespace avec la commande suivante :

```bash
kubectl get services -n <votre-namespace>
```

---

## 2. Récupérer vos Identifiants (Secrets)

Pour des raisons de sécurité, les mots de passe sont générés aléatoirement et stockés de manière sécurisée sous forme de *Secrets* Kubernetes.

Deux secrets principaux sont créés :

- `<cluster-name>-superuser` : Identifiants de l'administrateur système (`postgres`).
- `<cluster-name>-app` : Identifiants de l'utilisateur applicatif (`app`).

Pour récupérer le mot de passe de l'utilisateur `postgres`, exécutez la commande suivante (en remplaçant par vos valeurs) :

```bash
kubectl get secret <cluster-name>-superuser \
  -n <votre-namespace> \
  -o jsonpath='{.data.password}' | base64 -d
```

---

## 3. Se Connecter à la Base de Données

Puisque les bases de données ne sont pas exposées sur Internet par défaut, vous pouvez y accéder depuis votre poste de travail en utilisant un tunnel sécurisé via `kubectl port-forward`.

### Étape 1 : Ouvrir le tunnel local

Dans un terminal, exécutez cette commande pour transférer le port 5432 du service primaire (`-rw`) vers votre machine locale :

```bash
kubectl port-forward svc/<cluster-name>-rw 5432:5432 -n <votre-namespace>
```

### Étape 2 : Lancer la connexion psql

Dans un autre terminal, connectez-vous avec le client `psql` :

```bash
psql -h localhost -U postgres
```

*(Il vous sera demandé de saisir le mot de passe récupéré à l'étape 2)*

---

## 4. Vérifier l'État du Cluster et des Sauvegardes

Vous pouvez interroger les Custom Resources de CNPG et Barman pour voir l'état de votre infrastructure.

**Voir l'état des instances PostgreSQL :**
```bash
kubectl get cluster -n <votre-namespace>
kubectl get pods -n <votre-namespace>
```

**Voir l'état des sauvegardes (Barman Cloud) :**
```bash
# Voir les politiques de sauvegarde planifiées
kubectl get scheduledbackup -n <votre-namespace>

# Voir l'historique des sauvegardes complétées
kubectl get backup -n <votre-namespace>