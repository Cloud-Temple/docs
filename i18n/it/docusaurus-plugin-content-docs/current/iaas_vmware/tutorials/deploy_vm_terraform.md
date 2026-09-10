---
title: Automazione con Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from '@site/docs/iaas_vmware/tutorials/images/status_cloud_init.png';
import cloudInitOutput from '@site/docs/iaas_vmware/tutorials/images/cloud-init-output.png';

Questa guida ti consentirà di distribuire le tue prime istanze sul Cloud di Fiducia in meno di 5 minuti.

## __Prerequisiti__

1. Avere sottoscritto il prodotto Cloud Temple (sottoscrizione al prodotto IaaS).
2. Avere le autorizzazioni abilitate per il driver degli oggetti __'IaaS'__

## Distribuire una macchina virtuale tramite Terraform

In questa sezione, vedremo come distribuire in pochi minuti una macchina virtuale sul Cloud de Confiance tramite il provider Terraform Cloud Temple.
Se non hai ancora utilizzato il provider Cloud Temple, segui le istruzioni riportate [al seguente indirizzo](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs) per installarlo e autenticarti nel tuo tenant.

Inizieremo creando un file .tf che descriva l'istanza che si desidera distribuire.
Lo script seguente consente di distribuire una macchina virtuale da zero.

```hcl
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

data "cloudtemple_compute_host_cluster" "flo" {
  name = "clu002-ucs01_FLO"
}

data "cloudtemple_compute_datastore_cluster" "koukou" {
  name = "sdrs001-LIVE_KOUKOU"
}

resource "cloudtemple_compute_virtual_machine" "scratch" {
  name = "from-scratch"

  memory                 = 8 * 1024 * 1024 * 1024
  cpu                    = 2
  num_cores_per_socket   = 1
  cpu_hot_add_enabled    = true
  cpu_hot_remove_enabled = true
  memory_hot_add_enabled = true

  datacenter_id                = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id              = data.cloudtemple_compute_host_cluster.flo.id
  datastore_cluster_id         = data.cloudtemple_compute_datastore_cluster.koukou.id
  guest_operating_system_moref = "amazonlinux2_64Guest"

  tags = {
    created_by = "Terraform"
  }
}
```

I parametri utilizzati in questo script sono i seguenti :

- datacenter_id (obbligatorio) : datacenter in cui viene distribuita la macchina virtuale
- host_cluster_id (obbligatorio) : cluster in cui viene distribuita la macchina virtuale
- name (obbligatorio) : nome della macchina
- memory : RAM assegnata alla macchina all'avvio
- cpu : numero di vCPU assegnati alla macchina all'avvio
- num_cores_per_socket : numero di core per socket
- datastore_cluster_id : datastore a cui è associata la macchina
- guest_operating_system_moref : sistema operativo della macchina

Altri parametri possono essere applicati a una macchina virtuale durante la distribuzione. È possibile trovare l'elenco completo di questi parametri nella pagina seguente della [documentazione Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine)

Una volta creato e salvato il file .tf, esegui il comando seguente per verificare il codice :

```
terraform validate
```

Successivamente, pianifica la distribuzione e verifica che il piano corrisponda a quanto desideri realizzare :

```
terraform plan
```

Infine, distribuisci la macchina virtuale eseguendo il comando seguente :

```
terraform apply
```

## Utilizzare cloud-init per configurare una macchina virtuale distribuita tramite il provider Terraform

Lo strumento __'cloud-init'__ consente di personalizzare una macchina virtuale, o un'istanza cloud, al primo avvio. Si tratta di uno standard molto diffuso.
Per ulteriori informazioni, fare riferimento alla [documentazione](https://cloudinit.readthedocs.io/en/latest/)

### Compatibilità

Per poter configurare tramite cloud-init una macchina virtuale distribuita tramite il provider Terraform Cloud Temple, l’__OVF__ utilizzato per distribuire quest'ultima deve essere __compatibile__ con __cloud-init__.

Per verificare la compatibilità della tua macchina virtuale con cloud-init, esegui il comando seguente:

`systemctl status cloud-init.service`

Se cloud-init è installato correttamente sulla macchina, dovresti ottenere una risposta simile alla seguente. (Vedi screenshot di seguito)

<img src={statusCloudInit}/>

Se necessario, è possibile trovare immagini compatibili con cloud-init su Internet (ad esempio [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) o installarlo manualmente sulla propria macchina prima di convertirla in OVF.

### Distribuzione

Una volta accertato che l’OVF distribuito è effettivamente compatibile con cloud-init, di seguito è riportato un esempio di file Terraform (.tf) che puoi utilizzare per configurare la tua macchina virtuale.
NB : Tutti gli esempi mostrati qui possono essere trovati nella cartella esempi del repository del provider Terraform Cloud Temple qui: [Exemples](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)

#### `main.tf`

```HCL
resource "cloudtemple_compute_virtual_machine" "ubuntu-cloud-init" {
  name = "ubuntu-cloud-init"

  memory                 = 8 * 1024 * 1024 * 1024
  cpu                    = 2
  num_cores_per_socket   = 1
  cpu_hot_add_enabled    = true
  cpu_hot_remove_enabled = true
  memory_hot_add_enabled = true

  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.TH3S.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.CLU001.id
  datastore_id    = data.cloudtemple_compute_datastore.DS003.id

  content_library_id      = data.cloudtemple_compute_content_library.local.id
  content_library_item_id = data.cloudtemple_compute_content_library_item.ubuntu-cloudimg.id

  power_state = "on"

  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.sla001-daily-par7s.id,
    data.cloudtemple_backup_sla_policy.sla001-weekly-par7s.id,
  ]

  cloud_init = {
    network-config = filebase64("./cloud-init/network-config.yml")
    user-data      = filebase64("./cloud-init/user-data.yml")
  }
}
```

#### `network-config.yml`

```YAML
#cloud-config
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: false
      addresses:
        - 172.16.100.192/24
      gateway4: 172.16.100.1
      nameservers:
        addresses:
          - 172.16.11.4
```

#### `user-data.yml`

```YAML
#cloud-config
users:
  - default
  - name: terraform
    primary_group: users
    shell: /bin/bash
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: sudo
    lock_passwd: false
    plain_text_passwd: password
```

L'elemento interessante qui è la presenza della proprietà cloud-init, è possibile constatare che è composta da due sotto-proprietà: __network-config__ e __user-data__.

Queste ultime fanno parte di un insieme di 7 proprietà che è possibile utilizzare per configurare la propria macchina virtuale con cloud-init.

- __user-data__ : Questo valore deve essere codificato in base64 e contiene in particolare informazioni di configurazione per gli account utente della macchina virtuale. È inoltre possibile aggiungere script per installare o aggiornare i pacchetti.
- __network-config__ : Questo valore deve essere codificato in base64 e contiene in particolare informazioni di configurazione di rete della macchina virtuale.
- __public-keys__ : Indica che l'istanza deve popolare i 'authorized_keys' dell'utente predefinito con questo valore.
- __instance-id__ : Consente di definire un identificativo univoco per l'istanza presso cloud-init.
- __password__ : Se impostato, la password dell'utente predefinito verrà impostata su questo valore per consentire una connessione basata su password. La password sarà valida solo per una singola connessione. Se il valore è 'RANDOM', verrà generata una password casuale e visualizzata sulla console.
- __hostname__ : Specifica un nome host per l'istanza distribuita.
- __seedfrom__ : Consente di definire un URL da cui cloud-init recupererà i file di configurazione da utilizzare.
Per ulteriori informazioni sul funzionamento di cloud-init, fare riferimento alla [documentazione ufficiale](https://cloudinit.readthedocs.io/en/latest/)

### Esecuzione

Per verificare il corretto avvio di cloud-init, dovresti poter accedere con l'utente configurato nel file user-data.yml o verificare che il nome host sia stato impostato su quello specificato in 'hostname'.

In caso di problemi, puoi verificare i log di cloud-init utilizzando il comando seguente:

`sudo cat /var/log/cloud-init-output.log`

Dovresti visualizzare diverse informazioni relative all'esecuzione di cloud-init. Nella schermata seguente, si può constatare che la configurazione di rete è andata a buon fine.

<img src={cloudInitOutput} />