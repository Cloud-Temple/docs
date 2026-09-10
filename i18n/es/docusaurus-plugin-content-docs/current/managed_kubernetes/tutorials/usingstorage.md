---
title: Gestión del almacenamiento
---

## Objetivos

En este tutorial, aprenderá a gestionar el almacenamiento persistente en su clúster **Managed Kubernetes**. Kubernetes utiliza el concepto de `StorageClass` para definir los diferentes tipos de almacenamiento disponibles.

Al finalizar esta guía, será capaz de:

- Comprender las diferentes `StorageClasses` disponibles.
- Crear un `PersistentVolumeClaim` (PVC) para solicitar almacenamiento.
- Montar este almacenamiento en sus Pods.

## Las StorageClasses disponibles

Cloud Temple ofrece varias clases de almacenamiento (StorageClasses) para satisfacer sus diferentes necesidades en términos de rendimiento y casos de uso :

1. **`ceph-block` (par défaut)**

   - **Tipo de acceso** : Bloque (`ReadWriteOnce`).
   - **Factor de replicación** : X3 (haute disponibilité).
   - **Caso de uso** : Es la clase predeterminada, ideal para bases de datos y aplicaciones que requieren un acceso exclusivo y de alto rendimiento al disco, con una alta resiliencia.
2. **`ceph-filesystem`**

   - **Tipo de acceso** : Sistema de archivos (`ReadWriteMany`).
   - **Caso de uso** : Útil cuando varios Pods (répartis sur différents nœuds) necesitan leer y escribir simultáneamente en el mismo volumen (ex: partage de fichiers, CMS, assets statiques).
3. **`ceph-block-norepl`**

   - **Tipo de acceso** : Bloque (`ReadWriteOnce`).
   - **Factor de replicación** : X1 (sans réplication supplémentaire).
   - **Caso de uso** : Destinado a datos para los cuales la replicación ya está gestionada a nivel de aplicación o que no requieren una alta resiliencia a nivel de almacenamiento (caches, données éphémères).
4. **`topolvm-ssd` (optionnel)**

   - **Tipo de acceso** : Local (`ReadWriteOnce`).
   - **Caso de uso** : Almacenamiento local en el nodo que ofrece un rendimiento muy alto (faible latence). Atención, este almacenamiento está vinculado al nodo físico. Si el nodo se elimina, los datos también.

---

## Paso 1: Crear un PersistentVolumeClaim (PVC)

Un PVC es una solicitud de almacenamiento. A continuación se explica cómo crear un PVC para cada tipo de almacenamiento.

### Ejemplo 1 : Volumen `ceph-block` (Por defecto)

Si no especifica `storageClassName`, la clase `ceph-block` se utilizará por defecto.

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

### Ejemplo 2 : Volumen compartido `ceph-filesystem`

Para un volumen que pueda ser montado por varios Pods al mismo tiempo, utilice `ceph-filesystem` con el modo de acceso `ReadWriteMany`.

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

### Ejemplo 3: Volumen `ceph-block-norepl`

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

### Ejemplo 4: Volumen local con `topolvm`

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

Aplica el manifiesto de tu elección con el siguiente comando :

```bash
kubectl apply -f mon-pvc.yaml
```

Puedes verificar el estado de tu PVC :

```bash
kubectl get pvc
```

El estado cambiará a `Bound` una vez asignado el volumen.

---

## Paso 2: Utilizar el almacenamiento en un Pod

Una vez creado el PVC, puede montarlo en un Pod agregándolo en la sección `volumes` y `volumeMounts`.

A continuación se muestra un ejemplo de Pod que utiliza el PVC `pvc-ceph-block` creado anteriormente:

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

Aplique el manifiesto:

```bash
kubectl apply -f pod.yaml
```

Verifique que el Pod se esté ejecutando:

```bash
kubectl get pods
```

---

## Limpieza

Para liberar los recursos de almacenamiento, elimine primero el Pod y luego el PVC:

```bash
kubectl delete pod app-storage-demo
kubectl delete pvc pvc-ceph-block
```

> **Atención** : La eliminación del PVC provoca por defecto la eliminación del volumen subyacente y de los datos que contiene (según la `ReclaimPolicy` de la StorageClass, que suele ser `Delete`).