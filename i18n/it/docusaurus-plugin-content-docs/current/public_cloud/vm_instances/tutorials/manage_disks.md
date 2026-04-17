---
title: Gestire i dischi di una VM
---

Questo tutorial spiega come aggiungere un disco di archiviazione aggiuntivo a una VM già distribuita e prepararlo dal sistema operativo.

## Prerequisiti

- Una VM Instance attiva nel proprio tenant

## Passaggio 1 — Accedere ai dischi della VM

Dall'elenco delle VM Instances, fare clic sulla propria VM per aprire il pannello dei dettagli.

![Dettaglio VM - Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Navigare alla scheda **Dischi**.

## Passaggio 2 — Aprire il modulo di aggiunta

Fare clic su **+ Aggiungi un disco**.

![Modal aggiungi disco](@site/docs/public_cloud/vm_instances/images/vm_instances_ajout_disque_modal.png)

| Campo | Descrizione |
|-------|-------------|
| **Nome** | Identificatore del disco nella console |
| **Tipo di storage** | Standard (~1.500 IOPS/TB) o Enterprise (~7.500 IOPS/TB) |

## Passaggio 3 — Configurare e aggiungere il disco

1. **Nome**: inserire un nome descrittivo, es.: `data-postgresql`
2. **Tipo di storage**: Standard per dati generali, Enterprise per carichi I/O intensivi

Fare clic su **Aggiungi**. Il disco viene collegato in tempo reale, senza necessità di riavvio.

## Passaggio 4 — Partizionare e montare il disco (nella VM)

```bash
lsblk
sudo fdisk /dev/vdb
sudo mkfs.ext4 /dev/vdb1
sudo mkdir -p /data
sudo mount /dev/vdb1 /data
echo '/dev/vdb1 /data ext4 defaults 0 2' | sudo tee -a /etc/fstab
```

:::caution
Adattare il nome del dispositivo (`/dev/vdb`, `/dev/vdc`, ecc.) in base all'output del comando `lsblk`.
:::
