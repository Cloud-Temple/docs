---
title: Gestion du stockage
---
## Objectifs

Dans ce tutoriel, vous allez découvrir comment gérer le stockage persistant dans votre cluster **Managed Kubernetes**. Kubernetes utilise le concept de `StorageClass` pour définir les différents types de stockage disponibles.

À la fin de ce guide, vous serez capable de :

- Comprendre les différentes `StorageClasses` proposées.
- Créer un `PersistentVolumeClaim` (PVC) pour demander du stockage.
- Monter ce stockage dans vos Pods.

## Les StorageClasses disponibles

Cloud Temple propose plusieurs classes de stockage (StorageClasses) pour répondre à vos différents besoins en termes de performances et de cas d'usage :

1. **`ceph-block` (par défaut)**

   - **Type d'accès** : Bloc (`ReadWriteOnce`).
   - **Facteur de réplication** : X3 (haute disponibilité).
   - **Cas d'usage** : C'est la classe par défaut, idéale pour les bases de données et les applications nécessitant un accès exclusif et performant au disque, avec une forte résilience.
2. **`ceph-filesystem`**

   - **Type d'accès** : Système de fichiers (`ReadWriteMany`).
   - **Cas d'usage** : Utile lorsque plusieurs Pods (répartis sur différents nœuds) ont besoin de lire et d'écrire simultanément sur le même volume (ex: partage de fichiers, CMS, assets statiques).
3. **`ceph-block-norepl`**

   - **Type d'accès** : Bloc (`ReadWriteOnce`).
   - **Facteur de réplication** : X1 (sans réplication supplémentaire).
   - **Cas d'usage** : Destiné aux données pour lesquelles la réplication est déjà gérée au niveau applicatif ou qui ne nécessitent pas de résilience élevée au niveau du stockage (caches, données éphémères).
4. **`topolvm-ssd` (optionnel)**

   - **Type d'accès** : Local (`ReadWriteOnce`).
   - **Cas d'usage** : Stockage local au nœud offrant de très hautes performances (faible latence). Attention, ce stockage est lié au nœud physique. Si le nœud est supprimé, les données le sont également.

---

## Étape 1 : Créer un PersistentVolumeClaim (PVC)

Un PVC est une requête de stockage. Voici comment créer un PVC pour chaque type de stockage.

### Exemple 1 : Volume `ceph-block` (Par défaut)

Si vous ne spécifiez pas de `storageClassName`, la classe `ceph-block` sera utilisée par défaut.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-ceph-block
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: ceph-block
```

### Exemple 2 : Volume partagé `ceph-filesystem`

Pour un volume pouvant être monté par plusieurs Pods en même temps, utilisez `ceph-filesystem` avec le mode d'accès `ReadWriteMany`.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-ceph-fs
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 20Gi
  storageClassName: ceph-filesystem
```

### Exemple 3 : Volume `ceph-block-norepl`

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-ceph-block-norepl
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: ceph-block-norepl
```

### Exemple 4 : Volume local avec `topolvm`

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-topolvm
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: topolvm-ssd
```

Appliquez le manifeste de votre choix avec la commande suivante :

```bash
kubectl apply -f mon-pvc.yaml
```

Vous pouvez vérifier le statut de votre PVC :

```bash
kubectl get pvc
```

Le statut passera à `Bound` une fois le volume alloué.

---

## Étape 2 : Utiliser le stockage dans un Pod

Une fois le PVC créé, vous pouvez le monter dans un Pod en l'ajoutant dans la section `volumes` et `volumeMounts`.

Voici un exemple de Pod utilisant le PVC `pvc-ceph-block` créé précédemment :

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: app-storage-demo
spec:
  containers:
  - name: nginx
    image: nginx
    volumeMounts:
    - mountPath: "/usr/share/nginx/html/data"
      name: my-storage
  volumes:
  - name: my-storage
    persistentVolumeClaim:
      claimName: pvc-ceph-block
```

Appliquez le manifeste :

```bash
kubectl apply -f pod.yaml
```

Vérifiez que le Pod est en cours d'exécution :

```bash
kubectl get pods
```

---

## Nettoyage

Pour libérer les ressources de stockage, supprimez d'abord le Pod, puis le PVC :

```bash
kubectl delete pod app-storage-demo
kubectl delete pvc pvc-ceph-block
```

> **Attention** : La suppression du PVC entraîne par défaut la suppression du volume sous-jacent et des données qu'il contient (selon la `ReclaimPolicy` de la StorageClass, qui est généralement `Delete`).
