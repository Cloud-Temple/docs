---
title: Automatisation avec Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from './images/status_cloud_init.png';
import cloudInitOutput from './images/cloud-init-output.png';

Este guía te permitirá desplegar en menos de 5 minutos tus primeras instancias en la Nube de Confianza.

## __Prerrequisitos__

1. Haber suscrito a la oferta Cloud Temple (suscripción a la oferta IaaS).
2. Tener los permisos activados para el controlador de objetos __'IaaS'__

## Desplegar una máquina virtual vía Terraform

En esta sección, veremos cómo desplegar en unos minutos una máquina virtual en la Nube de Confianza a través del proveedor Terraform Cloud Temple.
Si aún no has utilizado el proveedor Cloud Temple, sigue las instrucciones que figuran en la siguiente dirección para instalarlo y autenticarte en tu tenant:

```
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs
```

Empezaremos creando un archivo .tf que describe la instancia que deseamos desplegar.
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

- datacenter_id (obligatorio): centro de datos en el que se despliega la máquina virtual
- host_cluster_id (obligatorio): clúster en el que se despliega la máquina virtual
- name (obligatorio): nombre de la máquina
- memory: RAM asignada a la máquina al inicio
- cpu: número de vCPU asignados a la máquina al inicio
- num_cores_per_socket: número de núcleos por socket
- datastore_cluster_id: datastore al cual está conectada la máquina
- guest_operating_system_moref: sistema operativo de la máquina

Otros parámetros pueden ser aplicados a una máquina virtual durante su despliegue. Puedes encontrar todos estos parámetros en la siguiente página de la documentación de Terraform:

```
https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine
```

Una vez creado y guardado el archivo .tf, ejecuta el siguiente comando para verificar tu código:

```
terraform validate
```

Luego, planifica el despliegue y verifica que el plan corresponda a lo que deseas realizar:

```
terraform plan
```

Finalmente, despliega la máquina virtual ejecutando el siguiente comando:

```
terraform apply
```

## Usar cloud-init para configurar una máquina virtual desplegada desde el proveedor Terraform

La herramienta __'cloud-init'__ permite personalizar una máquina virtual, o una instancia en la nube, durante su primer arranque. Es un estándar muy ampliamente difundido.
Para más información, consulta la documentación: ```https://cloudinit.readthedocs.io/en/latest/```

### Compatibilidad

Para poder configurar vía cloud-init una máquina virtual desplegada desde el proveedor Terraform Cloud Temple, el __OVF__ utilizado para desplegar esta última debe ser __compatible__ con __cloud-init__.

Para verificar la compatibilidad de tu máquina virtual con cloud-init, introduce el siguiente comando:

`systemctl status cloud-init.service`

Si cloud-init está correctamente instalado en la máquina, deberías ver una respuesta como esta. (Ver captura de pantalla abajo)

<img src={statusCloudInit}/>

Si es necesario, puedes encontrar imágenes compatibles con cloud-init en internet (por ejemplo [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) o instalarlo tú mismo en tu máquina antes de convertirla en OVF.

### Despliegue

Ahora que estás seguro de que el OVF desplegado es compatible con cloud-init, aquí tienes un ejemplo de archivo terraform (.tf) que puedes utilizar para configurar tu máquina virtual.
NB: Todos los ejemplos mostrados aquí se pueden encontrar en la carpeta de ejemplos del repositorio del proveedor Terraform Cloud Temple aquí: ```https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples```

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

El elemento interesante aquí es la presencia de la propiedad cloud-init. Puedes observar que está compuesto por dos sub-propiedades: __network-config__, y __user-data__.

Estas últimas forman parte de un conjunto de 7 propiedades que puedes usar para configurar tu máquina virtual con cloud-init.

* __user-data__: Este valor debe ser codificado en base64 y contiene principalmente información de configuración para las cuentas de usuario de la máquina virtual. También puedes agregar scripts para instalar o actualizar paquetes.
* __network-config__: Este valor debe ser codificado en base64 y contiene principalmente información de configuración de red de la máquina virtual.
* __public-keys__: Indica que la instancia debe llenar las 'authorized_keys' del usuario predeterminado con este valor.
* __instance-id__: Permite definir un identificador único de instancia para cloud-init.
* __password__: Si está definido, la contraseña del usuario predeterminado se establecerá en este valor para permitir una conexión basada en contraseña. La contraseña será válida solo para una sesión. Si el valor es 'RANDOM', se generará una contraseña aleatoria y se mostrará en la consola.
* __hostname__: Especifica un nombre de host para la instancia desplegada.
* __seedfrom__: Permite definir una URL desde la cual cloud-init buscará los archivos de configuración que debe usar.
Para más información sobre el funcionamiento de cloud-init, por favor consulta la documentación oficial. ```https://cloudinit.readthedocs.io/en/latest/```

### Ejecución

Para verificar la correcta ejecución de cloud-init, deberías poder conectarte con el usuario que has configurado en el archivo user-data.yml o cambiar el nombre de host para que se defina como lo has puesto en ‘hostname’.

En caso de problemas, puedes verificar los logs de cloud-init usando el siguiente comando:

`sudo cat /var/log/cloud-init-output.log`

Deberías ver diversa información sobre la ejecución de cloud-init. En la captura de pantalla que sigue, podemos ver que la configuración de red se ha realizado correctamente.

<img src={cloudInitOutput} />