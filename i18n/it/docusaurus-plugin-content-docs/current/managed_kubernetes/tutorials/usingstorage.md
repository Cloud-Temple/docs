---
title: Gestione dello storage
---

## Obiettivi

In questo tutorial, scoprirai come gestire lo storage persistente nel tuo cluster **Managed Kubernetes**. Kubernetes utilizza il concetto di `StorageClass` per definire i diversi tipi di storage disponibili.

Al termine di questa guida, sarai in grado di:

- Comprendere le diverse `StorageClass` offerte.
- Creare un `PersistentVolumeClaim` (PVC) per richiedere dello storage.
- Montare questo storage nei tuoi Pod.

## Le StorageClasses disponibili

Cloud Temple offre diverse classi di storage (StorageClasses) per soddisfare le vostre diverse esigenze in termini di prestazioni e casi d'uso:

1. **`ceph-block` (predefinito)**

   - **Tipo di accesso** : Blocco (`ReadWriteOnce`).
   - **Fattore di replicazione** : X3 (alta disponibilità).
   - **Caso d'uso** : È la classe predefinita, ideale per database e applicazioni che richiedono un accesso esclusivo e performante al disco, con elevata resilienza.
2. **`ceph-filesystem`**

   - **Tipo di accesso** : File system (`ReadWriteMany`).
   - **Caso d'uso** : Utile quando più Pod (distribuiti su nodi diversi) devono leggere e scrivere contemporaneamente sullo stesso volume (es: condivisione di file, CMS, asset statici).
3. **`ceph-block-norepl`**

   - **Tipo di accesso** : Blocco (`ReadWriteOnce`).
   - **Fattore di replicazione** : X1 (senza replicazione aggiuntiva).
   - **Caso d'uso** : Destinato a dati per i quali la replicazione è già gestita a livello applicativo o che non richiedono un'elevata resilienza a livello di storage (cache, dati effimeri).
4. **`topolvm-ssd` (opzionale)**

   - **Tipo di accesso** : Locale (`ReadWriteOnce`).
   - **Caso d'uso** : Storage locale al nodo che offre prestazioni molto elevate (bassa latenza). Attenzione, questo storage è legato al nodo fisico. Se il nodo viene rimosso, anche i dati vengono eliminati.

---

## Passaggio 1 : Creare un PersistentVolumeClaim (PVC)

Un PVC è una richiesta di archiviazione. Ecco come creare un PVC per ogni tipo di archiviazione.

### Esempio 1: Volume `ceph-block` (Predefinito)

Se non si specifica `storageClassName`, la classe `ceph-block` verrà utilizzata per impostazione predefinita.

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

### Esempio 2 : Volume condiviso `ceph-filesystem`

Per un volume che può essere montato da più Pod contemporaneamente, utilizzare `ceph-filesystem` con la modalità di accesso `ReadWriteMany`.

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

### Esempio 3 : Volume `ceph-block-norepl`

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

### Esempio 4: Volume locale con `topolvm`

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

Applica il manifesto di tua scelta con il seguente comando:

```bash
kubectl apply -f mon-pvc.yaml
```

È possibile verificare lo stato del PVC:

```bash
kubectl get pvc
```

Lo stato passerà a `Bound` una volta allocato il volume.

---

## Fase 2: Utilizzare l'archiviazione in un Pod

Una volta creato il PVC, è possibile montarlo in un Pod aggiungendolo nelle sezioni `volumes` e `volumeMounts`.

Ecco un esempio di Pod che utilizza il PVC `pvc-ceph-block` creato in precedenza:

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

Applica il manifesto:

```bash
kubectl apply -f pod.yaml
```

Verifica che il Pod sia in esecuzione:

```bash
kubectl get pods
```

---

## Pulizia

Per liberare le risorse di archiviazione, eliminare prima il Pod, quindi il PVC :

```bash
kubectl delete pod app-storage-demo
kubectl delete pvc pvc-ceph-block
```

> **Attenzione** : L'eliminazione del PVC comporta di default l'eliminazione del volume sottostante e dei dati in esso contenuti (secondo la `ReclaimPolicy` della StorageClass, che è generalmente `Delete`).