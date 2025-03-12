---
title: Automatización con Terraform
tags:
  - iaas_vmware
  - tutorials
---
import statusCloudInit from './images/status_cloud_init.png';
import cloudInitOutput from './images/cloud-init-output.png';

Esta guía le permitirá desplegar sus primeras instancias en la Cloud de Confianza en menos de 5 minutos.

## __Requisitos previos__

1. Haber suscrito a la oferta de Cloud Temple (suscripción a la oferta IaaS).
2. Tener los permisos activados para el controlador de objetos __'IaaS'__

## Desplegar una máquina virtual a través de Terraform

En esta sección, veremos cómo desplegar en pocos minutos una máquina virtual en la Cloud de Confianza a través del proveedor Terraform de Cloud Temple.
Si aún no ha utilizado el proveedor Cloud Temple, siga las instrucciones que figuran en [esta dirección](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs) para instalarlo y autenticarse en su tenant.

Comenzaremos creando un archivo .tf que describe la instancia que deseamos desplegar.
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

- datacenter_id (obligatorio): datacenter en el que se despliega la máquina virtual
- host_cluster_id (obligatorio): cluster en el que se despliega la máquina virtual
- name (obligatorio): nombre de la máquina
- memory: RAM asignada a la máquina al inicio
- cpu: número de vCPU asignadas a la máquina al inicio
- num_cores_per_socket: número de núcleos por socket
- datastore_cluster_id: datastore al que está conectada la máquina
- guest_operating_system_moref: sistema operativo de la máquina

Se pueden aplicar otros parámetros a una máquina virtual durante su despliegue. Puede encontrar todos estos parámetros en la siguiente página de la [documentación de Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs/resources/compute_virtual_machine)

Una vez creado y guardado el archivo .tf, ejecute el siguiente comando para verificar su código:

```
terraform validate
```

Luego, planifique el despliegue y verifique que el plan corresponde a lo que desea realizar:

```
terraform plan
```

Finalmente, despliegue la máquina virtual ejecutando el siguiente comando:

```
terraform apply
```

## Utilizar cloud-init para configurar una máquina virtual desplegada desde el proveedor Terraform

La herramienta __'cloud-init'__ permite personalizar una máquina virtual, o una instancia cloud, durante su primer arranque. Se trata de un estándar muy ampliamente utilizado.
Para más información, consulte la [documentación](https://cloudinit.readthedocs.io/en/latest/)

### Compatibilidad

Para poder configurar mediante cloud-init una máquina virtual desplegada desde el proveedor Terraform Cloud Temple, el __OVF__ utilizado para desplegarla debe ser __compatible__ con __cloud-init__.

Para verificar la compatibilidad de su máquina virtual con cloud-init, introduzca el siguiente comando:

`systemctl status cloud-init.service`

Si cloud-init está correctamente instalado en la máquina, debería ver una respuesta como esta. (Ver captura de pantalla a continuación)

<img src={statusCloudInit}/>

Si es necesario, puede encontrar imágenes compatibles con cloud-init en internet (por ejemplo [Ubuntu Cloud Image](https://cloud-images.ubuntu.com/)) o instalarlo usted mismo en su máquina antes de transformarla en OVF.

### Despliegue

Ahora que está seguro de que el OVF desplegado es compatible con cloud-init, aquí tiene un ejemplo de archivo terraform (.tf) que puede utilizar para configurar su máquina virtual.
Nota: Todos los ejemplos mostrados aquí se pueden encontrar en la carpeta examples del repositorio del proveedor Terraform Cloud Temple aquí: [Ejemplos](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/tree/main/examples)

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

El elemento interesante aquí es la presencia de la propiedad cloud-init, que como puede ver está compuesta por dos sub-propiedades: __network-config__ y __user-data__.

Estas forman parte de un conjunto de 7 propiedades que puede utilizar para configurar su máquina virtual con cloud-init.

- __user-data__: Este valor debe estar codificado en base64 y contiene información de configuración para las cuentas de usuario de la máquina virtual. También puede añadir scripts para instalar o actualizar paquetes.
- __network-config__: Este valor debe estar codificado en base64 y contiene información de configuración de red de la máquina virtual.
- __public-keys__: Indica que la instancia debe rellenar los 'authorized_keys' del usuario por defecto con este valor.
- __instance-id__: Permite definir un identificador único de instancia para cloud-init.
- __password__: Si está definido, la contraseña del usuario por defecto se establecerá en este valor para permitir una conexión basada en contraseña. La contraseña solo será válida para una única conexión. Si el valor es 'RANDOM', se generará una contraseña aleatoria y se mostrará en la consola.
- __hostname__: Especifica un nombre de host para la instancia desplegada.
- __seedfrom__: Permite definir una URL desde la cual cloud-init buscará los archivos de configuración que debe utilizar.
Para más información sobre el funcionamiento de cloud-init, consulte la [documentación oficial](https://cloudinit.readthedocs.io/en/latest/)

### Ejecución

Para verificar la correcta ejecución de cloud-init, debería poder conectarse con el usuario que configuró en el archivo user-data.yml o ver que el nombre de host cambia al que estableció en 'hostname'.

En caso de problemas, puede verificar los logs de cloud-init utilizando el siguiente comando:

`sudo cat /var/log/cloud-init-output.log`

Debería ver diversa información sobre la ejecución de cloud-init. En la captura de pantalla que sigue, podemos constatar que la configuración de la red se ha realizado correctamente.

<img src={cloudInitOutput} />
