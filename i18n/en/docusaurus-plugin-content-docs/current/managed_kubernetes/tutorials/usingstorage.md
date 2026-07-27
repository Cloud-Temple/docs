---
title: Storage Management
---

## Objectives

In this tutorial, you will learn how to manage persistent storage in your **Managed Kubernetes** cluster. Kubernetes uses the `StorageClass` concept to define the different types of available storage.

By the end of this guide, you will be able to:

- Understand the different `StorageClasses` available.
- Create a `PersistentVolumeClaim` (PVC) to request storage.
- Mount this storage in your Pods.

## Available StorageClasses

Cloud Temple offers several storage classes (StorageClasses) to meet your various performance and use case requirements:

1. **`ceph-block` (default)**

   - **Access Mode** : Block (`ReadWriteOnce`).
   - **Replication Factor** : X3 (high availability).
   - **Use Case** : This is the default class, ideal for databases and applications requiring exclusive and high-performance disk access, with strong resilience.
2. **`ceph-filesystem`**

   - **Access Mode** : Filesystem (`ReadWriteMany`).
   - **Use Case** : Useful when multiple Pods (distributed across different nodes) need to read and write simultaneously to the same volume (e.g., file sharing, CMS, static assets).
3. **`ceph-block-norepl`**

   - **Access Mode** : Block (`ReadWriteOnce`).
   - **Replication Factor** : X1 (no additional replication).
   - **Use Case** : Intended for data where replication is already handled at the application level or that does not require high storage-level resilience (caches, ephemeral data).
4. **`topolvm-ssd` (optional)**

   - **Access Mode** : Local (`ReadWriteOnce`).
   - **Use Case** : Node-local storage offering very high performance (low latency). Note that this storage is tied to the physical node. If the node is deleted, the data is deleted as well.

---

## Step 1: Create a PersistentVolumeClaim (PVC)

A PVC is a storage request. Here is how to create a PVC for each storage type.

### Example 1: `ceph-block` Volume (Default)

If you do not specify a `storageClassName`, the `ceph-block` class will be used by default.

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

### Example 2: Shared Volume `ceph-filesystem`

For a volume that can be mounted by multiple Pods simultaneously, use `ceph-filesystem` with the `ReadWriteMany` access mode.

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

### Example 3: Volume `ceph-block-norepl`

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

### Example 4: Local volume with `topolvm`

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

Apply your chosen manifest using the following command:

```bash
kubectl apply -f mon-pvc.yaml
```

You can check the status of your PVC:

```bash
kubectl get pvc
```

The status will change to `Bound` once the volume is allocated.

---

## Step 2: Using Storage in a Pod

Once the PVC is created, you can mount it in a Pod by adding it to the `volumes` and `volumeMounts` sections.

Here is an example of a Pod using the `pvc-ceph-block` PVC created previously:

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

Apply the manifest:

```bash
kubectl apply -f pod.yaml
```

Verify that the Pod is running:

```bash
kubectl get pods
```

---

## Cleanup

To free up storage resources, first delete the Pod, then the PVC:

```bash
kubectl delete pod app-storage-demo
kubectl delete pvc pvc-ceph-block
```

> **Warning** : Deleting the PVC will by default delete the underlying volume and the data it contains (according to the `ReclaimPolicy` of the StorageClass, which is usually `Delete`).