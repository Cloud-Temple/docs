---
title: Automazione con Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from './images/status_cloud_init.png';
import cloudInitOutput from './images/cloud-init-output.png';

Questa guida ti permetterà di distribuire in meno di 5 minuti le tue prime istanze sul Cloud di Fiducia.

## __Prerequisiti__

1. Avere sottoscritto l'offerta Cloud Temple (sottoscrizione all'offerta IaaS).
2. Avere le autorizzazioni abilitate per il driver degli oggetti __'IaaS'__

## Distribuire una macchina virtuale via Terraform

In questa sezione, vedremo come distribuire in pochi minuti una macchina virtuale sul Cloud di Fiducia tramite il provider Terraform Cloud Temple.
Se non hai ancora utilizzato il provider Cloud Temple, segui le istruzioni presenti al seguente indirizzo per installarlo e autenticarti al tuo tenant:

```
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs
```

Inizieremo creando un file .tf che descrive l'istanza che desideriamo distribuire.
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

I parametri utilizzati in questo script sono i seguenti:

- datacenter_id (obbligatorio) : datacenter in cui è distribuita la macchina virtuale
- host_cluster_id (obbligatorio) : cluster in cui è distribuita la macchina virtuale
- name (obbligatorio) : nome della macchina
- memory : RAM assegnata inizialmente alla macchina
- cpu : numero di vCPU assegnati inizialmente alla macchina
- num_cores_per_socket : numero di core per socket
- datastore_cluster_id : datastore a cui è collegata la macchina
- guest_operating_system_moref : sistema operativo della macchina

Altri parametri possono essere applicati a una macchina virtuale durante la distribuzione. Puoi trovare tutti questi parametri nella pagina seguente della documentazione di Terraform:

```
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine
```

Una volta creato e salvato il file .tf, esegui il seguente comando per verificare il tuo codice:

```
terraform validate
```

Poi, pianifica la distribuzione e verifica che il piano corrisponda a ciò che desideri realizzare:

```
terraform plan
```

Infine, distribuisci la macchina virtuale eseguendo il seguente comando:

```
terraform apply
```

## Utilizzare cloud-init per configurare una macchina virtuale distribuita dal provider Terraform

Lo strumento __'cloud-init'__ consente di personalizzare una macchina virtuale, o un'istanza cloud, durante il suo primo avvio. È uno standard molto diffuso.
Per ulteriori informazioni, fare riferimento alla documentazione: ```https://cloudinit.readthedocs.io/en/latest/```

### Compatibilità

Per poter configurare tramite cloud-init una macchina virtuale distribuita dal provider Terraform Cloud Temple, l'__OVF__ utilizzato per distribuire quest'ultima deve essere __compatibile__ con __cloud-init__.

Per verificare la compatibilità della tua macchina virtuale con cloud-init, inserisci il seguente comando:

`systemctl status cloud-init.service`

Se cloud-init è installato correttamente sulla macchina, dovresti vedere una risposta come questa. (Vedi screenshot qui sotto)

<img src={statusCloudInit}/>

Se necessario, puoi trovare immagini compatibili con cloud-init su Internet (ad esempio [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) o installarlo tu stesso sulla tua macchina prima di trasformarla in OVF.

### Distribuzione

Ora che sei sicuro che l'OVF distribuito è compatibile con cloud-init, ecco un esempio di file terraform (.tf) che puoi utilizzare per configurare la tua macchina virtuale.
NB: Tutti gli esempi mostrati qui possono essere trovati nella cartella degli esempi del repository del provider Terraform Cloud Temple qui: ```https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples```

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

L'elemento interessante qui, è la presenza della proprietà cloud-init, puoi notare che è composta da due sotto-proprietà: __network-config__, e __user-data__.

Queste ultime fanno parte di un insieme di 7 proprietà che puoi utilizzare per configurare la tua macchina virtuale con cloud-init.

* __user-data__ : Questo valore deve essere codificato in base64 e contiene informazioni di configurazione per gli account utente della macchina virtuale. Puoi anche aggiungere script per installare o aggiornare pacchetti.
* __network-config__ : Questo valore deve essere codificato in base64 e contiene informazioni di configurazione della rete per la macchina virtuale.
* __public-keys__ : Indica che l'istanza deve compilare le 'authorized_keys' dell'utente predefinito con questo valore.
* __instance-id__ : Consente di definire un identificativo univoco dell'istanza per cloud-init.
* __password__ : Se definito, la password dell'utente predefinito sarà impostata su questo valore per consentire un accesso basato su password. La password sarà valida solo per un accesso. Se il valore è 'RANDOM', verrà generata una password casuale e mostrata sulla console.
* __hostname__ : Specifica un nome host per l'istanza distribuita.
* __seedfrom__ : Consente di definire un URL da cui cloud-init cercherà i file di configurazione da utilizzare.
Per maggiori informazioni sul funzionamento di cloud-init, fai riferimento alla documentazione ufficiale. ```https://cloudinit.readthedocs.io/en/latest/```

### Esecuzione

Per verificare il corretto funzionamento di cloud-init, dovresti essere in grado di connetterti con l'utente che hai configurato nel file user-data.yml o il nome host cambiato per essere impostato su quello che hai messo in 'hostname'.

In caso di problemi, puoi controllare i log di cloud-init utilizzando il seguente comando:

`sudo cat /var/log/cloud-init-output.log`

Dovresti vedere varie informazioni sull'esecuzione di cloud-init. Nello screenshot che segue, possiamo vedere che la configurazione della rete è avvenuta correttamente.

<img src={cloudInitOutput} />