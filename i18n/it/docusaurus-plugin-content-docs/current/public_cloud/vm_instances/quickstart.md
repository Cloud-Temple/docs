---
title: Guida introduttiva
---

## Prerequisiti

Prima di iniziare, assicurarsi di disporre di quanto segue:

- Un **Tenant Cloud Temple** attivo
- Un abbonamento minimo al **Supporto Standard**
- Le autorizzazioni necessarie nella propria organizzazione Cloud Temple

## Accedere al servizio VM Instances

Accedere alla **Console Cloud Temple** e navigare su **Cloud Public > VM Instances** dal menu principale.

![Dashboard della Console Cloud Temple](@site/docs/public_cloud/vm_instances/images/vm_instances_dashboard_overview.png)

Il dashboard mostra una panoramica delle risorse VM Instances consumate (storage, CPU, RAM) e il numero di macchine virtuali attive.

Fare clic su **Cloud Public** nella barra laterale sinistra per espandere il sottomenu, quindi selezionare **VM Instances**.

![Navigazione verso VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_navigation_cloud_public.png)

Si accede alla lista delle VM Instances:

![Lista delle VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

La tabella mostra per ogni VM: nome, stato (Accesa / Spenta), zona di disponibilità, famiglia di istanza, modello e risorse allocate (CPU, RAM, dimensione disco).

## Distribuire una macchina virtuale

Fare clic sul pulsante **+ Nuova macchina virtuale** in alto a destra per aprire la procedura guidata di creazione. Questa procedura si articola in **9 passaggi**.

### Passaggio 1 — Famiglia di istanza

![Passaggio 1: Famiglia di istanza](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Scegliere la **famiglia di istanza** adatta al proprio carico di lavoro:

| Famiglia | Descrizione | CPU |
|----------|-------------|-----|
| **Development** | Costo ottimizzato, per ambienti di test | Condivise |
| **General Purpose** | Bilanciamento ottimale vCPU/RAM per carichi standard | Condivise |

:::info
La famiglia **Performance** (vCPU dedicate) è disponibile tramite il flavor personalizzato.
:::

### Passaggio 2 — Zona di disponibilità

![Passaggio 2: Zona di disponibilità](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Selezionare la **zona di disponibilità (AZ)** in cui sarà ospitata la VM (es.: `fr1-az01`).

### Passaggio 3 — Scegliere un template

![Passaggio 3: Scegliere un template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Sfogliare il catalogo delle immagini disponibili nelle schede **OS** e **Appliances**.

### Passaggio 4 — Flavor

![Passaggio 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Scegliere un **flavor predefinito** o creare un **flavor personalizzato** (vCPU + RAM).

### Passaggio 5 — Nome e politica di backup

![Passaggio 5: Nome e politica di backup](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Inserire il **Nome** univoco e la **Politica di backup** (`No Backup` per impostazione predefinita).

### Passaggio 6 — Cloud Init

![Passaggio 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Passaggio opzionale. Pre-configurare la VM tramite **Cloud Config** (chiavi SSH, pacchetti) e **Network Config** (Netplan).

### Passaggio 7 — Dischi

![Passaggio 7: Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Il disco di sistema viene creato automaticamente. Aggiungere volumi aggiuntivi (Standard ~1.500 IOPS/TB o Enterprise ~7.500 IOPS/TB).

### Passaggio 8 — Adattatori di rete

![Passaggio 8: Adattatori di rete](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Selezionare la rete: **Backbone privato** o **VPC**.

### Passaggio 9 — Riepilogo

![Passaggio 9: Riepilogo](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verificare il riepilogo e fare clic su **Crea**.

## Gestire le macchine virtuali

Fare clic su una VM per accedere alle 4 schede:

### Scheda Informazioni
![Dettaglio VM - Informazioni](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_informations.png)

### Scheda Dischi
![Dettaglio VM - Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_disques.png)

### Scheda Adattatori di rete
![Dettaglio VM - Rete](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_reseau.png)

### Scheda Snapshot
![Dettaglio VM - Snapshot](@site/docs/public_cloud/vm_instances/images/vm_instances_detail_snapshots.png)
