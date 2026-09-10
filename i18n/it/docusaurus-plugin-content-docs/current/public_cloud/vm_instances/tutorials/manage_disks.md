---
title: Gestire i dischi di una VM
---

Questo tutorial spiega come aggiungere un disco di archiviazione aggiuntivo a una VM già distribuita e prepararlo dal sistema operativo.

## Prerequisiti

- Un'istanza VM attiva nel vostro tenant

## Passo 1 — Accedere ai dischi della VM

Dall'elenco delle istanze VM, fare clic sulla riga della propria VM per aprire il pannello dei dettagli.

![Dettaglio VM - Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

Navigare alla scheda **Dischi** (icona disco nel pannello laterale sinistro del dettaglio). Viene visualizzato l'elenco dei dischi attualmente collegati alla VM, con il nome, le dimensioni e il tipo di archiviazione per ciascun disco.

## Passo 2 — Aprire il modulo di aggiunta

Fare clic sul pulsante **+ Aggiungi un disco** in alto a destra nella tabella dei dischi.

![Modale aggiunta disco](@site/docs/public_cloud/vm_instances/images/vm_instances_ajout_disque_modal.png)

Il modulo **Aggiungi un disco** si apre con i seguenti campi:

| Campo | Descrizione |
|-------|-------------|
| **Nome** | Identificatore del disco nella console |
| **Tipo di archiviazione** | Standard (~1 500 IOPS/TB) o Enterprise (~7 500 IOPS/TB) |

## Passo 3 — Configurare e aggiungere il disco

Inserisci i parametri :

1. **Nome** : inserisci un nome descrittivo, es : `data-postgresql`
2. **Tipo di archiviazione** :
   - Scegli **Standard** per dati generali (log, file, backup)
   - Scegli **Enterprise** per database o carichi di lavoro I/O intensivi

Clicca su **Aggiungi**. Il disco viene collegato alla VM in tempo reale, senza necessità di riavvio.

## Passo 4 — Partizionare e montare il disco (nella VM)

Dopo l'aggiunta dalla console, connettiti alla tua VM e inizializza il disco:

```bash
# Lister les disques disponibles
lsblk

# Créer une partition (remplacez /dev/vdb par le bon device)
sudo fdisk /dev/vdb
# Dans fdisk, tapez : n → p → 1 → Entrée → Entrée → w

# Formater la partition
sudo mkfs.ext4 /dev/vdb1

# Créer le point de montage
sudo mkdir -p /data

# Monter le disque
sudo mount /dev/vdb1 /data

# Vérifier le montage
df -h /data

# Rendre le montage persistant au redémarrage
echo '/dev/vdb1 /data ext4 defaults 0 2' | sudo tee -a /etc/fstab
```

:::caution
Adatta il nome del dispositivo (`/dev/vdb`, `/dev/vdc`, ecc.) in base al risultato del comando `lsblk`. Il primo disco aggiuntivo è generalmente `/dev/vdb`.
:::

## Approfondimenti

- Per un disco ad alte prestazioni, utilizzare il tipo **Enterprise** (~7 500 IOPS/TB) — ideale per PostgreSQL, MySQL o qualsiasi workload I/O intensivo.
- È possibile associare fino a **16 volumi** per VM, con una dimensione massima di **2 TB** per volume.
- La fatturazione è basata sul **GB allocato**, indipendentemente dall'utilizzo effettivo.