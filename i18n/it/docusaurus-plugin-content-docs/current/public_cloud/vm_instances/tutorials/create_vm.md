---
title: Creare la propria prima istanza VM
---

Questo tutorial vi guida passo dopo passo nella creazione di una VM Debian 13 con un disco dati aggiuntivo, una configurazione Cloud Init e una connessione alla rete Backbone privata.

## Obiettivo

Creare una VM Linux (Debian 13) nella zona `fr1-az01`, preconfigurata con una chiave SSH, con un disco aggiuntivo da 50 Go.

## Prerequisiti

- Un tenant Cloud Temple attivo con accesso al servizio VM Instances
- Una chiave SSH pubblica disponibile
- Una rete Backbone privata o VPC configurata nel vostro tenant

## Passo 1 — Accedere alla console e aprire il wizard

Dalla Console Cloud Temple, navigate verso **VM Instances**.

![Lista delle VM Instances](@site/docs/public_cloud/vm_instances/images/vm_instances_liste.png)

Cliccate su **+ Nuova macchina virtuale** per avviare il wizard di creazione.

## Passo 2 — Selezionare la famiglia di istanza

![Passaggio 1: Famiglia di istanza](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape1_famille.png)

Per questo esempio, selezionate **Development** — ideale per gli ambienti di sviluppo e test con un costo controllato.

Cliccate su **Avanti**.

## Passo 3 — Scegliere la zona di disponibilità

![Passaggio 2: Zona di disponibilità](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape2_az.png)

Selezionate **fr1-az01**. Questa zona è disponibile nella regione FR1 (Francia).

:::tip
Per massimizzare la resilienza, è possibile distribuire più VM in zone di disponibilità diverse (fr1-az01 e fr1-az02).
:::

Cliccate su **Avanti**.

## Passo 4 — Scegliere un'immagine

![Passaggio 3: Scegliere un'immagine](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape3_template.png)

Nella scheda **OS**, selezionate **Debian** e scegliete la versione **13 (Trixie)** dal menu a tendina.

Cliccate su **Avanti**.

## Passo 5 — Configurare il template

![Passaggio 4: Flavor](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape4_gabarit.png)

Per questo tutorial, selezionate il template **dev-2** (2 vCPU / 8 Go RAM).

Se il vostro bisogno è diverso, utilizzate l'opzione **Custom** per inserire liberamente il numero di vCPU e la quantità di RAM.

Cliccate su **Avanti**.

## Passo 6 — Nominare la VM e configurare il backup

![Passaggio 5: Nome e politica di backup](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape5_nom_sauvegarde.png)

Inserite un nome esplicito per la vostra VM, ad esempio: `web-server-01`.

Per la politica di backup, lasciate **No Backup** per questo tutorial (potrete attivarla in seguito dalla scheda Informazioni).

Cliccate su **Avanti**.

## Passo 7 — Configurare Cloud Init

![Passaggio 6: Cloud Init](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape6_cloudinit.png)

Cloud Init consente di preconfigurare la vostra VM al primo avvio. Inserite la configurazione seguente nell'editor **Cloud Config**:

```yaml
#cloud-config
hostname: web-server-01
users:
  - name: admin
    groups: sudo
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-rsa AAAA...votre_cle_publique_ssh
package_update: true
packages:
  - curl
  - vim
  - htop
```

Lasciate il campo **Network Config** vuoto se utilizzate DHCP. Per una configurazione IP statica, compilatelo nel formato Netplan:

```yaml
version: 2
ethernets:
  ens3:
    dhcp4: false
    addresses:
      - 192.168.1.10/24
    routes:
      - to: default
        via: 192.168.1.1
    nameservers:
      addresses:
        - 8.8.8.8
        - 1.1.1.1
```

Spuntate la casella **Eliminare il disco di configurazione Cloud Init dopo il primo avvio** per migliorare la sicurezza.

Cliccate su **Avanti**.

## Passo 8 — Configurare i dischi

![Passaggio 7: Dischi](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape7_disques.png)

Si osserva che **Disco 1** (il disco di sistema `system-disk-1`) è stato creato automaticamente con la dimensione corrispondente all'OS Debian 13.

Per aggiungere un disco dati, configurate un secondo disco nel wizard:
- **Nome**: `data-disk-1`
- **Capacità**: `50` Go
- **Tipo di storage**: Standard (~1 500 IOPS/To)

Cliccate su **Avanti**.

## Passo 9 — Configurare la rete

![Passaggio 8: Adattatori di rete](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape8_reseau.png)

Dal menu a tendina **Rete**, selezionate la vostra rete. In questo esempio, la rete **PACKFR** (Backbone privato) è disponibile.

:::info
Se utilizzate un **VPC**, potrete associare un'**IP flottante** (IP pubblica) alla vostra VM dopo la sua creazione.
:::

Cliccate su **Avanti**.

## Passo 10 — Verificare il riepilogo e creare

![Passaggio 9: Riepilogo](@site/docs/public_cloud/vm_instances/images/vm_instances_creation_etape9_sommaire.png)

Verificate attentamente il riepilogo:

| Parametro | Valore |
|-----------|--------|
| Famiglia di istanza | Development |
| Zona di disponibilità | fr1-az01 |
| Modello | Debian 13 |
| Template | 2 vCPU / 8 Go RAM |
| Politica di backup | No Backup |
| Dischi | system-disk-1 + data-disk-1 (50 Go) |
| Rete | PACKFR (Backbone privato) |

Se tutto è corretto, cliccate su **Crea**. Il deployment richiede alcuni minuti. La vostra VM apparirà successivamente nell'elenco con lo stato **Accesa**.
