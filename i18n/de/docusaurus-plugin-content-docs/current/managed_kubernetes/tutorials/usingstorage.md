---
title: Speicherverwaltung
---

## Lernziele

In diesem Tutorial erfahren Sie, wie Sie den persistenten Speicher in Ihrem **Managed Kubernetes**-Cluster verwalten. Kubernetes verwendet das Konzept der `StorageClass`, um die verschiedenen verfügbaren Speichertypen zu definieren.

Am Ende dieses Leitfadens werden Sie in der Lage sein:

- Die verschiedenen angebotenen `StorageClasses` verstehen.
- Einen `PersistentVolumeClaim` (PVC) erstellen, um Speicher anzufordern.
- Diesen Speicher in Ihren Pods mounten.

## Verfügbare StorageClasses

Cloud Temple bietet mehrere StorageClasses an, um Ihren unterschiedlichen Anforderungen in Bezug auf Leistung und Anwendungsfälle gerecht zu werden:

1. **`ceph-block` (Standard)**

   - **Zugriffstyp** : Block (`ReadWriteOnce`).
   - **Replikationsfaktor** : X3 (hohe Verfügbarkeit).
   - **Anwendungsfall** : Dies ist die Standardklasse, ideal für Datenbanken und Anwendungen, die einen exklusiven und leistungsstarken Festplattenzugriff mit hoher Ausfallsicherheit erfordern.
2. **`ceph-filesystem`**

   - **Zugriffstyp** : Dateisystem (`ReadWriteMany`).
   - **Anwendungsfall** : Nützlich, wenn mehrere Pods (verteilt auf verschiedenen Knoten) gleichzeitig auf denselben Volume lesen und schreiben müssen (z. B. Dateifreigabe, CMS, statische Assets).
3. **`ceph-block-norepl`**

   - **Zugriffstyp** : Block (`ReadWriteOnce`).
   - **Replikationsfaktor** : X1 (ohne zusätzliche Replikation).
   - **Anwendungsfall** : Geeignet für Daten, bei denen die Replikation bereits auf Anwendungsebene verwaltet wird oder die keine hohe Ausfallsicherheit auf Speicherebene erfordern (Caches, ephemere Daten).
4. **`topolvm-ssd` (optional)**

   - **Zugriffstyp** : Lokal (`ReadWriteOnce`).
   - **Anwendungsfall** : Lokaler Knotenspeicher mit sehr hoher Leistung (geringe Latenz). Achtung: Dieser Speicher ist an den physischen Knoten gebunden. Wird der Knoten gelöscht, gehen auch die Daten verloren.

---

## Schritt 1: Einen PersistentVolumeClaim (PVC) erstellen

Ein PVC ist eine Speicheranforderung. Hier erfahren Sie, wie Sie einen PVC für jeden Speichertyp erstellen.

### Beispiel 1: Volume `ceph-block` (Standard)

Wenn Sie keine `storageClassName` angeben, wird die Klasse `ceph-block` standardmäßig verwendet.

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

### Beispiel 2: Geteiltes Volume `ceph-filesystem`

Für ein Volume, das gleichzeitig von mehreren Pods gemountet werden kann, verwenden Sie `ceph-filesystem` mit dem Zugriffsmodus `ReadWriteMany`.

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

### Beispiel 3: Volume `ceph-block-norepl`

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

### Beispiel 4: Lokales Volume mit `topolvm`

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

Wenden Sie das Manifest Ihrer Wahl mit dem folgenden Befehl an:

```bash
kubectl apply -f mon-pvc.yaml
```

Sie können den Status Ihres PVC überprüfen:

```bash
kubectl get pvc
```

Der Status wechselt zu `Bound`, sobald das Volume bereitgestellt wurde.

---

## Schritt 2: Speicher in einem Pod verwenden

Sobald der PVC erstellt wurde, können Sie ihn in einem Pod mounten, indem Sie ihn in den Abschnitten `volumes` und `volumeMounts` hinzufügen.

Hier ist ein Beispiel für einen Pod, der den zuvor erstellten PVC `pvc-ceph-block` verwendet:

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

Wenden Sie das Manifest an:

```bash
kubectl apply -f pod.yaml
```

Überprüfen Sie, ob der Pod ausgeführt wird:

```bash
kubectl get pods
```

---

## Bereinigung

Um Speicherressourcen freizugeben, löschen Sie zuerst den Pod und dann den PVC:

```bash
kubectl delete pod app-storage-demo
kubectl delete pvc pvc-ceph-block
```

> **Achtung** : Das Löschen des PVC führt standardmäßig zum Löschen des zugrunde liegenden Volumes und der darin enthaltenen Daten (gemäß der `ReclaimPolicy` der StorageClass, die standardmäßig `Delete` ist).