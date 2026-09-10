---
title: Automatisierung mit Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from '@site/docs/iaas_vmware/tutorials/images/status_cloud_init.png';
import cloudInitOutput from '@site/docs/iaas_vmware/tutorials/images/cloud-init-output.png';

Dieses Handbuch ermöglicht es Ihnen, Ihre ersten Instanzen in der Vertrauenswürdigen Cloud in weniger als 5 Minuten bereitzustellen.

## __Voraussetzungen__

1. Das Cloud Temple-Produkt abonniert haben (Abonnement des IaaS-Produkts).
2. Die Berechtigungen für den Objekt-Treiber __'IaaS'__ aktiviert haben.

## Bereitstellen einer virtuellen Maschine über Terraform

In diesem Abschnitt erfahren Sie, wie Sie in wenigen Minuten eine virtuelle Maschine im Cloud de Confiance über den Terraform-Provider Cloud Temple bereitstellen.
Falls Sie den Cloud Temple-Provider noch nicht verwendet haben, befolgen Sie die Anweisungen unter [folgender Adresse](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs), um ihn zu installieren und sich bei Ihrem Tenant anzumelden.

Wir beginnen mit der Erstellung einer .tf-Datei, die die Instanz beschreibt, die bereitgestellt werden soll.
Das folgende Skript ermöglicht das Bereitstellen einer virtuellen Maschine von Grund auf.

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

Die in diesem Skript verwendeten Parameter sind folgende:

- datacenter_id (erforderlich) : Rechenzentrum, in dem die virtuelle Maschine bereitgestellt wird
- host_cluster_id (erforderlich) : Cluster, in dem die virtuelle Maschine bereitgestellt wird
- name (erforderlich) : Name der Maschine
- memory : Zu Beginn der Maschine zugewiesener RAM
- cpu : Zu Beginn der Maschine zugewiesene Anzahl an vCPUs
- num_cores_per_socket : Anzahl der Kerne pro Socket
- datastore_cluster_id : Datastore, an den die Maschine angehängt ist
- guest_operating_system_moref : Betriebssystem der Maschine

Weitere Parameter können beim Bereitstellen einer virtuellen Maschine angewendet werden. Eine vollständige Übersicht dieser Parameter finden Sie auf der folgenden Seite der [Terraform-Dokumentation](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine)

Nachdem Sie die .tf-Datei erstellt und gespeichert haben, führen Sie den folgenden Befehl aus, um Ihren Code zu überprüfen:

```
terraform validate
```

Planen Sie anschließend die Bereitstellung und überprüfen Sie, ob der Plan Ihren Vorstellungen entspricht:

```
terraform plan
```

Führen Sie abschließend den folgenden Befehl aus, um die virtuelle Maschine bereitzustellen:

```
terraform apply
```

## cloud-init zur Konfiguration einer über den Terraform-Provider bereitgestellten virtuellen Maschine verwenden

Das Tool __'cloud-init'__ ermöglicht die Anpassung einer virtuellen Maschine oder einer Cloud-Instanz beim ersten Start. Es handelt sich um einen weit verbreiteten Standard.
Weitere Informationen finden Sie in der [Dokumentation](https://cloudinit.readthedocs.io/en/latest/)

### Kompatibilität

Um eine über den Terraform Cloud Temple-Provider bereitgestellte virtuelle Maschine über cloud-init konfigurieren zu können, muss das __OVF__, das für deren Bereitstellung verwendet wird, mit __cloud-init__ __kompatibel__ sein.

Um die Kompatibilität Ihrer virtuellen Maschine mit cloud-init zu überprüfen, geben Sie den folgenden Befehl ein:

`systemctl status cloud-init.service`

Wenn cloud-init korrekt auf der Maschine installiert ist, sollten Sie eine Ausgabe wie diese erhalten. (Siehe Screenshot unten)

<img src={statusCloudInit}/>

Falls erforderlich, können Sie cloud-init-kompatible Images im Internet finden (z. B. [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) oder sie selbst auf Ihrer Maschine installieren, bevor Sie sie in ein OVF konvertieren.

### Bereitstellung

Sobald Sie sichergestellt haben, dass das bereitgestellte OVF vollständig mit cloud-init kompatibel ist, finden Sie hier ein Beispiel für eine Terraform-Datei (.tf), die Sie zur Konfiguration Ihrer virtuellen Maschine verwenden können.
Hinweis: Alle hier gezeigten Beispiele finden Sie im Ordner „examples“ des Repositorys des Terraform Cloud Temple Providers hier: [Beispiele](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)

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

Das Interessante hier ist das Vorhandensein der cloud-init-Eigenschaft. Wie Sie erkennen können, besteht sie aus zwei Unter-Eigenschaften: __network-config__ und __user-data__.

Diese gehören zu einer Reihe von 7 Eigenschaften, die Sie verwenden können, um Ihre virtuelle Maschine mit cloud-init zu konfigurieren.

- __user-data__ : Dieser Wert muss base64-codiert sein und enthält unter anderem Konfigurationsinformationen für die Benutzerkonten der virtuellen Maschine. Sie können zudem Skripte hinzufügen, um Pakete zu installieren oder zu aktualisieren.
- __network-config__ : Dieser Wert muss base64-codiert sein und enthält unter anderem Netzwerkkonfigurationsinformationen der virtuellen Maschine.
- __public-keys__ : Gibt an, dass die Instanz die 'authorized_keys' des Standardbenutzers mit diesem Wert befüllen soll.
- __instance-id__ : Legt eine eindeutige Instanzkennung für cloud-init fest.
- __password__ : Falls festgelegt, wird das Passwort des Standardbenutzers auf diesen Wert gesetzt, um eine passwortbasierte Anmeldung zu ermöglichen. Das Passwort ist nur für eine einzige Anmeldung gültig. Ist der Wert 'RANDOM', wird ein zufälliges Passwort generiert und auf der Konsole angezeigt.
- __hostname__ : Legt einen Hostnamen für die bereitgestellte Instanz fest.
- __seedfrom__ : Legt eine URL fest, von der cloud-init die zu verwendenden Konfigurationsdateien bezieht.
Für weitere Informationen zur Funktionsweise von cloud-init verweisen wir auf die [offizielle Dokumentation](https://cloudinit.readthedocs.io/en/latest/)

### Ausführung

Um die erfolgreiche Ausführung von cloud-init zu überprüfen, sollten Sie sich mit dem in der Datei user-data.yml konfigurierten Benutzer anmelden können oder der Hostname sollte auf den in ‘hostname’ festgelegten Wert geändert worden sein.

Bei Problemen können Sie die cloud-init-Logs mit dem folgenden Befehl überprüfen:

`sudo cat /var/log/cloud-init-output.log`

Sie sollten verschiedene Informationen zur Ausführung von cloud-init sehen. Auf dem folgenden Screenshot ist zu erkennen, dass die Netzwerkkonfiguration erfolgreich durchgeführt wurde.

<img src={cloudInitOutput} />