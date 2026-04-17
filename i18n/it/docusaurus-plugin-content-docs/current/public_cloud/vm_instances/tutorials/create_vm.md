---
title: Creare la prima VM Instance
---

Questo tutorial guida passo dopo passo nella creazione di una VM Debian 13 con un disco dati aggiuntivo, una configurazione Cloud Init e una connessione alla rete Backbone privata.

## Obiettivo

Creare una VM Linux (Debian 13) nella zona `fr1-az01`, preconfigurata con una chiave SSH e un disco aggiuntivo da 50 GB.

## Prerequisiti

- Un tenant Cloud Temple attivo con accesso al servizio VM Instances
- Una chiave SSH pubblica disponibile
- Una rete Backbone privata o VPC configurata nel proprio tenant

## Passaggio 1 — Aprire la procedura guidata di creazione

Dalla Console Cloud Temple, navigare su **Cloud Public > VM Instances**.

![Lista delle VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Fare clic su **+ Nuova macchina virtuale**.

## Passaggio 2 — Selezionare la famiglia di istanza

![Passaggio 1: Famiglia di istanza](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Selezionare **Development** per questo esempio. Fare clic su **Avanti**.

## Passaggio 3 — Scegliere la zona di disponibilità

![Passaggio 2: Zona di disponibilità](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Selezionare **fr1-az01**. Fare clic su **Avanti**.

## Passaggio 4 — Scegliere il template

![Passaggio 3: Scegliere un template](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Nella scheda **OS**, selezionare **Debian** e scegliere la versione **13 (Trixie)**. Fare clic su **Avanti**.

## Passaggio 5 — Configurare il flavor

![Passaggio 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Selezionare **dev-2** (2 vCPU / 8 GB RAM). Fare clic su **Avanti**.

## Passaggio 6 — Assegnare un nome alla VM

![Passaggio 5: Nome e politica di backup](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Inserire, ad esempio, `web-server-01`. Fare clic su **Avanti**.

## Passaggio 7 — Configurare Cloud Init

![Passaggio 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...la_vostra_chiave_ssh_pubblica
package_update: true
packages:
  - curl
  - vim
  - htop
```

## Passaggio 8 — Configurare i dischi

![Passaggio 7: Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Aggiungere un disco dati: nome `data-disk-1`, capacità `50` GB, tipo Standard.

## Passaggio 9 — Configurare la rete

![Passaggio 8: Adattatori di rete](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Selezionare la propria rete (es.: **PACKFR**). Fare clic su **Avanti**.

## Passaggio 10 — Verificare il riepilogo e creare

![Passaggio 9: Riepilogo](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verificare tutti i parametri e fare clic su **Crea**. La VM apparirà nell'elenco entro pochi minuti.
