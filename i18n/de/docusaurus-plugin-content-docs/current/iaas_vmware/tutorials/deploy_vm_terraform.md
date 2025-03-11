---
title: Automatisierung mit Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from './images/status_cloud_init.png';
import cloudInitOutput from './images/cloud-init-output.png';

Dieser Leitfaden ermöglicht es Ihnen, in weniger als 5 Minuten Ihre ersten Instanzen in der Cloud of Trust zu deployen.

## __Voraussetzungen__

1. Ein Abonnement des Cloud Temple Angebots (IaaS-Angebot).
2. Aktivierte Berechtigungen für die Steuerung von __'IaaS'__-Objekten.

## Bereitstellen einer virtuellen Maschine über Terraform

In diesem Abschnitt werden wir sehen, wie man in wenigen Minuten eine virtuelle Maschine in der Cloud of Trust über den Terraform Cloud Temple Provider bereitstellt.
Wenn Sie den Cloud Temple Provider noch nicht verwendet haben, folgen Sie den Anweisungen unter der folgenden Adresse, um ihn zu installieren und sich bei Ihrem Tenant zu authentifizieren:

```
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs
```

Wir beginnen mit der Erstellung einer .tf-Datei, die die Instanz beschreibt, die wir bereitstellen möchten.
Das folgende Skript ermöglicht die Bereitstellung einer virtuellen Maschine von Grund auf.

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

- datacenter_id (erforderlich): Datacenter, in dem die virtuelle Maschine bereitgestellt wird
- host_cluster_id (erforderlich): Cluster, in dem die virtuelle Maschine bereitgestellt wird
- name (erforderlich): Name der Maschine
- memory: RAM, das der Maschine zu Beginn zugewiesen wird
- cpu: Anzahl der vCPUs, die der Maschine zu Beginn zugewiesen werden
- num_cores_per_socket: Anzahl der Kerne pro Socket
- datastore_cluster_id: Datastore, an den die Maschine angeschlossen ist
- guest_operating_system_moref: Betriebssystem der Maschine

Weitere Parameter können bei der Bereitstellung auf eine virtuelle Maschine angewendet werden. Sie finden alle diese Parameter auf der folgenden Seite der Terraform-Dokumentation:

```
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine
```

Sobald die .tf-Datei erstellt und gespeichert ist, führen Sie den folgenden Befehl aus, um Ihren Code zu überprüfen:

```
terraform validate
```

Planen Sie dann die Bereitstellung und überprüfen Sie, ob der Plan dem entspricht, was Sie erreichen möchten:

```
terraform plan
```

Stellen Sie schließlich die virtuelle Maschine bereit, indem Sie den folgenden Befehl ausführen:

```
terraform apply
```

## Verwendung von cloud-init zur Konfiguration einer vom Terraform-Provider bereitgestellten virtuellen Maschine

Das Tool __'cloud-init'__ ermöglicht die Anpassung einer virtuellen Maschine oder einer Cloud-Instanz bei ihrem ersten Start. Es handelt sich um einen weit verbreiteten Standard.
Weitere Informationen finden Sie in der Dokumentation: ```https://cloudinit.readthedocs.io/en/latest/```

### Kompatibilität

Um eine vom Terraform Cloud Temple Provider bereitgestellte virtuelle Maschine über cloud-init konfigurieren zu können, muss die für die Bereitstellung verwendete __OVF__ mit __cloud-init__ __kompatibel__ sein.

Um die Kompatibilität Ihrer virtuellen Maschine mit cloud-init zu überprüfen, geben Sie den folgenden Befehl ein:

`systemctl status cloud-init.service`

Wenn cloud-init korrekt auf der Maschine installiert ist, sollten Sie eine Antwort wie diese sehen. (Siehe Screenshot unten)

<img src={statusCloudInit}/>

Bei Bedarf können Sie cloud-init-kompatible Images im Internet finden (zum Beispiel [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) oder es selbst auf Ihrer Maschine installieren, bevor Sie sie in OVF umwandeln.

### Bereitstellung

Nachdem Sie sichergestellt haben, dass die bereitgestellte OVF mit cloud-init kompatibel ist, finden Sie hier ein Beispiel für eine Terraform-Datei (.tf), die Sie zur Konfiguration Ihrer virtuellen Maschine verwenden können.
Hinweis: Alle hier gezeigten Beispiele finden Sie im Beispielordner des Terraform Cloud Temple Provider-Repositories hier: ```https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples```

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

Das Interessante hier ist das Vorhandensein der cloud-init-Eigenschaft. Sie können sehen, dass sie aus zwei Untereigenschaften besteht: __network-config__ und __user-data__.

Diese gehören zu einer Gruppe von 7 Eigenschaften, die Sie zur Konfiguration Ihrer virtuellen Maschine mit cloud-init verwenden können.

* __user-data__: Dieser Wert muss base64-kodiert sein und enthält insbesondere Konfigurationsinformationen für die Benutzerkonten der virtuellen Maschine. Sie können auch Skripte hinzufügen, um Pakete zu installieren oder zu aktualisieren.
* __network-config__: Dieser Wert muss base64-kodiert sein und enthält insbesondere Netzwerkkonfigurationsinformationen der virtuellen Maschine.
* __public-keys__: Gibt an, dass die Instanz die 'authorized_keys' des Standardbenutzers mit diesem Wert füllen soll.
* __instance-id__: Ermöglicht die Definition einer eindeutigen Instanz-ID für cloud-init.
* __password__: Wenn definiert, wird das Passwort des Standardbenutzers auf diesen Wert gesetzt, um eine passwortbasierte Anmeldung zu ermöglichen. Das Passwort ist nur für eine einzige Anmeldung gültig. Wenn der Wert 'RANDOM' ist, wird ein zufälliges Passwort generiert und auf der Konsole angezeigt.
* __hostname__: Gibt einen Hostnamen für die bereitgestellte Instanz an.
* __seedfrom__: Ermöglicht die Definition einer URL, von der cloud-init die zu verwendenden Konfigurationsdateien abruft.
Für weitere Informationen zur Funktionsweise von cloud-init, beziehen Sie sich bitte auf die offizielle Dokumentation. ```https://cloudinit.readthedocs.io/en/latest/```

### Ausführung

Um die korrekte Ausführung von cloud-init zu überprüfen, sollten Sie sich mit dem Benutzer anmelden können, den Sie in der user-data.yml-Datei konfiguriert haben, oder der Hostname sollte auf den Wert geändert worden sein, den Sie in 'hostname' angegeben haben.

Bei Problemen können Sie die cloud-init-Logs mit dem folgenden Befehl überprüfen:

`sudo cat /var/log/cloud-init-output.log`

Sie sollten verschiedene Informationen über die Ausführung von cloud-init sehen. Auf dem folgenden Screenshot können Sie sehen, dass die Netzwerkkonfiguration erfolgreich durchgeführt wurde.

<img src={cloudInitOutput} />
