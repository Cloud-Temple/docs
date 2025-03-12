---
title: Automazione con Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from './images/status_cloud_init.png';
import cloudInitOutput from './images/cloud-init-output.png';

Questa guida vi permetterà di distribuire le vostre prime istanze sul Cloud di Fiducia in meno di 5 minuti.

## __Prerequisiti__

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione all'offerta IaaS).
2. Avere i permessi attivati per il driver degli oggetti __'IaaS'__

## Distribuire una macchina virtuale tramite Terraform

In questa sezione, vedremo come distribuire in pochi minuti una macchina virtuale sul Cloud di Fiducia tramite il provider Terraform Cloud Temple.
Se non avete ancora utilizzato il provider Cloud Temple, seguite le istruzioni che si trovano a [questo indirizzo](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs) per installarlo e autenticarvi al vostro tenant.

Inizieremo creando un file .tf che descrive l'istanza che vogliamo distribuire.
Il seguente script permette di distribuire una macchina virtuale da zero.

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

- datacenter_id (obbligatorio): datacenter in cui viene distribuita la macchina virtuale
- host_cluster_id (obbligatorio): cluster in cui viene distribuita la macchina virtuale
- name (obbligatorio): nome della macchina
- memory: RAM allocata alla macchina all'inizio
- cpu: numero di vCPU allocate alla macchina all'inizio
- num_cores_per_socket: numero di core per socket
- datastore_cluster_id: datastore a cui è collegata la macchina
- guest_operating_system_moref: sistema operativo della macchina

Altri parametri possono essere applicati a una macchina virtuale durante la sua distribuzione. Potete trovare tutti questi parametri alla pagina seguente della [documentazione Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine)

Una volta creato e salvato il file .tf, eseguite il seguente comando per verificare il vostro codice:

```
terraform validate
```

Poi, pianificate la distribuzione e verificate che il piano corrisponda a ciò che volete realizzare:

```
terraform plan
```

Infine, distribuite la macchina virtuale eseguendo il seguente comando:

```
terraform apply
```

## Utilizzare cloud-init per configurare una macchina virtuale distribuita dal provider Terraform

Lo strumento __'cloud-init'__ permette di personalizzare una macchina virtuale, o un'istanza cloud, durante il suo primo avvio. Si tratta di uno standard molto diffuso.
Per maggiori informazioni, fate riferimento alla [documentazione](https://cloudinit.readthedocs.io/en/latest/)

### Compatibilità

Per poter configurare tramite cloud-init una macchina virtuale distribuita dal provider Terraform Cloud Temple, l'__OVF__ utilizzato per distribuirla deve essere __compatibile__ con __cloud-init__.

Per verificare la compatibilità della vostra macchina virtuale con cloud-init, inserite il seguente comando:

`systemctl status cloud-init.service`

Se cloud-init è correttamente installato sulla macchina, dovreste vedere una risposta come questa. (Vedere screenshot qui sotto)

<img src={statusCloudInit}/>

Se necessario, potete trovare immagini compatibili con cloud-init su internet (ad esempio [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) o installarlo voi stessi sulla vostra macchina prima di trasformarla in OVF.

### Distribuzione

Ora che siete certi che l'OVF distribuito è compatibile con cloud-init, ecco un esempio di file terraform (.tf) che potete utilizzare per configurare la vostra macchina virtuale.
NB: Tutti gli esempi mostrati qui possono essere trovati nella cartella examples del repository del provider Terraform Cloud Temple qui: [Esempi](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)

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

L'elemento interessante qui è la presenza della proprietà cloud-init, che come potete vedere è composta da due sotto-proprietà: __network-config__ e __user-data__.

Queste fanno parte di un insieme di 7 proprietà che potete utilizzare per configurare la vostra macchina virtuale con cloud-init.

- __user-data__: Questo valore deve essere codificato in base64 e contiene informazioni di configurazione per gli account utente della macchina virtuale. Potete anche aggiungere script per installare o aggiornare pacchetti.
- __network-config__: Questo valore deve essere codificato in base64 e contiene informazioni di configurazione di rete della macchina virtuale.
- __public-keys__: Indica che l'istanza deve riempire gli 'authorized_keys' dell'utente predefinito con questo valore.
- __instance-id__: Permette di definire un identificatore unico di istanza per cloud-init.
- __password__: Se definito, la password dell'utente predefinito sarà impostata a questo valore per permettere un login basato su password. La password sarà valida solo per un singolo login. Se il valore è 'RANDOM', verrà generata una password casuale e visualizzata sulla console.
- __hostname__: Specifica un nome host per l'istanza distribuita.
- __seedfrom__: Permette di definire un URL su cui cloud-init andrà a cercare i file di configurazione che deve utilizzare.
Per maggiori informazioni sul funzionamento di cloud-init, fate riferimento alla [documentazione ufficiale](https://cloudinit.readthedocs.io/en/latest/)

### Esecuzione

Per verificare la corretta esecuzione di cloud-init, dovreste potervi connettere con l'utente che avete configurato nel file user-data.yml o vedere il nome host cambiare in quello che avete impostato in 'hostname'.

In caso di problemi, potete verificare i log di cloud-init utilizzando il seguente comando:

`sudo cat /var/log/cloud-init-output.log`

Dovreste vedere varie informazioni sull'esecuzione di cloud-init. Nella schermata che segue, possiamo constatare che la configurazione della rete è stata completata correttamente.

<img src={cloudInitOutput} />
