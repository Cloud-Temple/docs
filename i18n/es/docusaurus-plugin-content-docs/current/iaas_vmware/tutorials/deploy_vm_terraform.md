---
title: Automatización con Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from './images/status_cloud_init.png';
import cloudInitOutput from './images/cloud-init-output.png';

Este guía le permitirá desplegar sus primeras instancias en menos de 5 minutos en el Cloud de Confianza.

## __Requisitos__

1. Tener suscrito a la oferta Cloud Temple (suscrito a la oferta IaaS).
2. Tener activadas las permisos para el piloto de objetos __'IaaS'__

## Desplegar una máquina virtual mediante Terraform

En esta sección, veremos cómo desplegar una máquina virtual en el Cloud de Confianza mediante el proveedor Terraform Cloud Temple.
Si aún no ha utilizado el proveedor Cloud Temple, siga las instrucciones que figuran en [esta dirección](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs) para instalarlo y autenticarse en su inquilino.

Comenzaremos creando un archivo .tf que describa la instancia que desea desplegar.
El siguiente script permite desplegar una máquina virtual desde cero.

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

Los parámetros utilizados en este script son los siguientes:

- datacenter_id (obligatorio): datacenter en el que se desplegará la máquina virtual
- host_cluster_id (obligatorio): cluster en el que se desplegará la máquina virtual
- name (obligatorio): nombre de la máquina
- memory: RAM asignada a la máquina al inicio
- cpu: número de vCPU asignadas a la máquina al inicio
- num_cores_per_socket: número de núcleos por socket
- datastore_cluster_id: datastore al que se conecta la máquina
- guest_operating_system_moref: sistema operativo de la máquina

Otros parámetros pueden aplicarse a una máquina virtual durante su despliegue. Puede encontrar todos estos parámetros en la siguiente página de la [documentación Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine).

Una vez creado y guardado el archivo .tf, ejecute el siguiente comando para verificar su código:

```
terraform validate
```

Luego, planifique el despliegue y verifique que el plan coincida con lo que desea realizar:

```
terraform plan
```

Finalmente, despliegue la máquina virtual ejecutando el siguiente comando:

```
terraform apply
```

## Usar cloud-init para configurar una máquina virtual desplegada desde el proveedor Terraform

La herramienta __'cloud-init'__ permite personalizar una máquina virtual, o una instancia en la nube, durante su primer arranque. Se trata de un estándar muy ampliamente utilizado.
Para más información, consulte la [documentación](https://cloudinit.readthedocs.io/en/latest/)

### Compatibilidad

Para poder configurar una máquina virtual desplegada desde el proveedor Terraform Cloud Temple mediante cloud-init, el __OVF__ utilizado para desplegarla debe ser __compatible__ con __cloud-init__.

Para verificar la compatibilidad de su máquina virtual con cloud-init, ejecute el siguiente comando:

`systemctl status cloud-init.service`

Si cloud-init está correctamente instalado en la máquina, debería obtener una respuesta como esta. (Vea la captura de pantalla a continuación)

<img src={statusCloudInit}/>

Si es necesario, puede encontrar imágenes compatibles con cloud-init en Internet (por ejemplo [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) o instalarlo usted mismo en su máquina antes de convertirla en OVF.

### Despliegue

Ahora que está seguro de que el OVF desplegado es compatible con cloud-init, aquí hay un ejemplo de archivo terraform (.tf) que puede usar para configurar su máquina virtual.
Nota: Todos los ejemplos mostrados aquí se pueden encontrar en el directorio ejemplos del repositorio del proveedor Terraform Cloud Temple aquí: [Ejemplos](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)

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

El elemento interesante aquí es la presencia de la propiedad cloud-init, puede observar que está compuesta por dos subpropiedades: __network-config__ y __user-data__.

Estas últimas forman parte de un conjunto de 7 propiedades que puede usar para configurar su máquina virtual con cloud-init.

- __user-data__: Este valor debe codificarse en base64 y contiene información de configuración para los usuarios de la máquina virtual. También puede agregar scripts para instalar o actualizar paquetes.
- __network-config__: Este valor debe codificarse en base64 y contiene información de configuración de red de la máquina virtual.
- __public-keys__: Indica que la instancia debe rellenar los 'authorized_keys' del usuario predeterminado con este valor.
- __instance-id__: Permite definir un identificador único de instancia ante cloud-init.
- __password__: Si se define, la contraseña del usuario predeterminado se establecerá en este valor para permitir una conexión basada en contraseña. La contraseña solo será válida para una conexión. Si el valor es 'RANDOM', se generará y mostrará una contraseña aleatoria en la consola.
- __hostname__: Especifica un nombre de host para la instancia desplegada.
- __seedfrom__: Permite definir una URL desde la que cloud-init buscará los archivos de configuración que debe usar.
Para más información sobre el funcionamiento de cloud-init, consulte la [documentación oficial](https://cloudinit.readthedocs.io/en/latest/)

### Ejecución

Para verificar la correcta ejecución de cloud-init, debería poder conectarse con el usuario que configuró en el archivo user-data.yml o el nombre de host cambiará para estar definido con el que colocó en 'hostname'.

En caso de problemas, puede verificar los registros de cloud-init utilizando el siguiente comando:

`sudo cat /var/log/cloud-init-output.log`

Debería ver diversas informaciones sobre la ejecución de cloud-init. En la captura de pantalla que sigue, se puede constatar que la configuración de red se realizó correctamente.

<img src={cloudInitOutput} />