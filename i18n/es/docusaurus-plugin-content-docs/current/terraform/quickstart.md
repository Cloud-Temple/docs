---
title: Guía de inicio
---

# Guía de inicio rápido

Esta guía le acompaña paso a paso para desplegar su primera infraestructura Cloud Temple con Terraform.

## Requisitos previos

Antes de comenzar, asegúrese de tener:

- Una cuenta Cloud Temple activa
- Acceso a la [Consola Cloud Temple](https://shiva.cloud-temple.com)
- Clave API (Client ID y Secret ID)
- Terraform instalado en su máquina (versión 1.0 o superior)

## Paso 1: Instalar Terraform

### Linux (Ubuntu/Debian)

```bash
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
```

### macOS

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

### Windows

Descargue el ejecutable desde [terraform.io](https://www.terraform.io/downloads) o utilice Chocolatey:

```powershell
choco install terraform
```

### Verificación de la instalación

```bash
terraform version
```

Debería ver una salida similar a:

```
Terraform v1.6.0
```

## Paso 2: Obtener su clave API

### Generación de una clave API en la consola

Estas credenciales pueden generarse desde la Consola Cloud Temple siguiendo [este procedimiento](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

:::warning Seguridad
    Guarde estas credenciales en un lugar seguro. El Secret ID solo se mostrará una vez.
:::

### Configuración de variables de entorno

Exporte sus credenciales como variables de entorno:

**Linux/macOS:**

```bash
export CLOUDTEMPLE_CLIENT_ID="12345678-1234-1234-1234-123456789abc"
export CLOUDTEMPLE_SECRET_ID="87654321-4321-4321-4321-cba987654321"
```

**Windows (PowerShell):**

```powershell
$env:CLOUDTEMPLE_CLIENT_ID="12345678-1234-1234-1234-123456789abc"
$env:CLOUDTEMPLE_SECRET_ID="87654321-4321-4321-4321-cba987654321"
```

## Paso 3: Crear su proyecto Terraform

### Crear el directorio del proyecto

```bash
mkdir terraform-cloudtemple-quickstart
cd terraform-cloudtemple-quickstart
```

### Crear el archivo de configuración del proveedor

Cree un archivo `versions.tf`:

```hcl
terraform {
  required_version = ">= 1.0"
  
  required_providers {
    cloudtemple = {
      source  = "Cloud-Temple/cloudtemple"
      version = "~> 1.0"
    }
  }
}

provider "cloudtemple" {
  # Las credenciales se recuperan automáticamente de las variables de entorno
  # CLOUDTEMPLE_CLIENT_ID y CLOUDTEMPLE_SECRET_ID
}
```

## Paso 4: Inicializar Terraform

Inicialice su proyecto Terraform para descargar el proveedor:

```bash
terraform init
```

Debería ver:

```
Initializing the backend...

Initializing provider plugins...
- Finding Cloud-Temple/cloudtemple versions matching "~> 1.0"...
- Installing Cloud-Temple/cloudtemple v1.x.x...
- Installed Cloud-Temple/cloudtemple v1.x.x (signed by HashiCorp)

Terraform has been successfully initialized!
```

## Paso 5: Crear su primer recurso

### Ejemplo simple: Máquina virtual VMware

Cree un archivo `main.tf` con una configuración mínima:

```hcl
# Recuperación de recursos existentes necesarios
data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # Adapte con el nombre de su vCenter
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # Adapte con el nombre de su datacenter
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # Adapte con el nombre de su clúster
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # Adapte con el nombre de su clúster de datastore
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Política de backup
}

# Creación de una máquina virtual
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Configuración hardware
  memory                 = 4 * 1024 * 1024 * 1024  # 4 GB en bytes
  cpu                    = 2
  num_cores_per_socket   = 1
  
  # Opciones de flexibilidad
  cpu_hot_add_enabled    = true
  memory_hot_add_enabled = true
  
  # Ubicación
  datacenter_id        = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id      = data.cloudtemple_compute_host_cluster.cluster.id
  datastore_cluster_id = data.cloudtemple_compute_datastore_cluster.datastore.id
  
  # Sistema operativo
  guest_operating_system_moref = "ubuntu64Guest"
  
  # Política de backup
  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.daily.id
  ]
  
  # Tags
  tags = {
    environment = "demo"
    managed_by  = "terraform"
    owner       = "quickstart"
  }
}

# Output para mostrar el ID de la VM
output "vm_id" {
  description = "ID de la máquina virtual creada"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.id
}

output "vm_moref" {
  description = "Managed Object Reference de la VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note Adaptación de nombres
    Los nombres de los datacenters, clústeres y datastores deben coincidir con los disponibles en su entorno Cloud Temple. Consulte la consola para identificar los recursos disponibles.
:::

## Paso 6: Planificar los cambios

Antes de aplicar los cambios, visualice lo que se creará:

```bash
terraform plan
```

Terraform muestra un plan detallado:

```
Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be created
  + resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      + cpu                    = 2
      + datacenter_id          = "xxxx-xxxx-xxxx"
      + guest_operating_system = "ubuntu64Guest"
      + id                     = (known after apply)
      + memory                 = 4294967296
      + name                   = "terraform-vm-01"
      + moref                  = (known after apply)
      ...
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

## Paso 7: Aplicar la configuración

Despliegue su infraestructura:

```bash
terraform apply
```

Terraform solicita confirmación:

```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: 
```

Escriba `yes` y presione Enter.

Terraform crea los recursos:

```
cloudtemple_compute_virtual_machine.my_first_vm: Creating...
cloudtemple_compute_virtual_machine.my_first_vm: Still creating... [10s elapsed]
cloudtemple_compute_virtual_machine.my_first_vm: Still creating... [20s elapsed]
cloudtemple_compute_virtual_machine.my_first_vm: Creation complete after 25s [id=12345678-1234-1234-1234-123456789abc]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

vm_id = "12345678-1234-1234-1234-123456789abc"
vm_moref = "vm-123"
```

:::success ¡Felicitaciones!
    ¡Acaba de crear su primera máquina virtual Cloud Temple con Terraform!
:::

## Paso 8: Verificar la creación

### En la consola Cloud Temple

1. Inicie sesión en la [Consola Cloud Temple](https://shiva.cloud-temple.com)
2. Navegue a **IaaS VMWare** > **Máquinas virtuales**
3. Debería ver su Máquina Virtual `terraform-vm-01`

### Con Terraform

Mostrar el estado actual:

```bash
terraform show
```

Listar recursos gestionados:

```bash
terraform state list
```

Mostrar outputs:

```bash
terraform output
```

## Paso 9: Modificar su infraestructura

Modifique el archivo `main.tf` para aumentar la memoria a 8 GB:

```hcl
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  memory = 8 * 1024 * 1024 * 1024  # 8 GB en lugar de 4 GB
  cpu    = 2
  # ... resto de la configuración
}
```

Planifique y aplique los cambios:

```bash
terraform plan
terraform apply
```

Terraform detecta la modificación y actualiza la VM:

```
cloudtemple_compute_virtual_machine.my_first_vm: Refreshing state... [id=xxx]

Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be updated in-place
  ~ resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      ~ memory = 4294967296 -> 8589934592
        # (otros atributos sin cambios)
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

## Paso 10: Destruir recursos

Cuando haya terminado sus pruebas, elimine los recursos creados:

```bash
terraform destroy
```

Terraform muestra lo que se eliminará y solicita confirmación:

```
cloudtemple_compute_virtual_machine.my_first_vm: Refreshing state... [id=xxx]

Terraform will perform the following actions:

  # cloudtemple_compute_virtual_machine.my_first_vm will be destroyed
  - resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      - cpu    = 2
      - memory = 8589934592
      - name   = "terraform-vm-01"
      ...
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure.
  Only 'yes' will be accepted to confirm.

  Enter a value:
```

Escriba `yes` para confirmar la eliminación.

## Estructura de proyecto recomendada

Para proyectos más complejos, organice sus archivos así:

```
terraform-cloudtemple/
├── main.tf              # Recursos principales
├── versions.tf          # Configuración del proveedor
├── variables.tf         # Declaraciones de variables
├── outputs.tf           # Declaraciones de outputs
├── terraform.tfvars     # Valores de variables (no versionar)
├── .gitignore          # Exclusiones Git
└── README.md           # Documentación del proyecto
```

### Ejemplo de .gitignore

```gitignore
# Archivos Terraform
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
.terraform.lock.hcl

# Archivos de crash
crash.log
crash.*.log

# Archivos de variables sensibles
*.auto.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json
```

## Comandos Terraform esenciales

| Comando | Descripción |
|---------|-------------|
| `terraform init` | Inicializar el directorio de trabajo |
| `terraform validate` | Validar la sintaxis de configuración |
| `terraform fmt` | Formatear archivos automáticamente |
| `terraform plan` | Mostrar plan de ejecución |
| `terraform apply` | Aplicar cambios |
| `terraform destroy` | Destruir todos los recursos |
| `terraform show` | Mostrar estado actual |
| `terraform output` | Mostrar valores de outputs |
| `terraform state list` | Listar recursos gestionados |

## Buenas prácticas

### 1. Usar variables

```hcl
# variables.tf
variable "environment" {
  description = "Entorno de despliegue"
  type        = string
  default     = "dev"
}

# main.tf
resource "cloudtemple_compute_virtual_machine" "vm" {
  name = "${var.environment}-vm-01"
  # ...
  
  tags = {
    environment = var.environment
  }
}
```

### 2. Organizar con módulos

```hcl
# modules/vm/main.tf
resource "cloudtemple_compute_virtual_machine" "vm" {
  name   = var.name
  memory = var.memory
  cpu    = var.cpu
  # ...
}

# main.tf
module "web_vm" {
  source = "./modules/vm"
  
  name   = "web-01"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
}
```

### 3. Usar un backend remoto

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-cloudtemple"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

### 4. Comentar su código

```hcl
# Máquina virtual para servidor web de producción
# CPU y memoria dimensionados para gestionar 1000 req/s
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Configuración hardware basada en benchmarks internos
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}
```

### 5. Usar datasources

No recree lo que ya existe. Use datasources para referenciar recursos existentes:

```hcl
# Referenciar una red existente
data "cloudtemple_compute_network" "prod_network" {
  name = "PROD-VLAN-100"
}

resource "cloudtemple_compute_network_adapter" "nic" {
  network_id = data.cloudtemple_compute_network.prod_network.id
  # ...
}
```

## Solución de problemas

### Error: "Error: Failed to query available provider packages"

**Causa**: Problema de conexión al Terraform Registry.

**Solución**: Verifique su conexión a Internet y reintente `terraform init`.

### Error: "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Causa**: Credenciales inválidas o caducadas.

**Solución**: 
1. Verifique sus variables de entorno
2. Genere una nueva clave API en la consola
3. Verifique los permisos de su clave API

### Error: "Error: resource not found"

```
Error: failed to find datastore named "ds002-t0001-r-stw1-data13-th3s"
```

**Causa**: El recurso referenciado (datacenter, clúster, etc.) no existe o no tiene acceso a él.

**Solución**: 
1. Verifique el nombre exacto (o uuid) en la consola Cloud Temple
2. Verifique sus derechos de acceso a este recurso

## Próximos pasos

Ahora que domina los fundamentos, explore tutoriales avanzados:

- [Tutoriales IaaS VMware](tutorials.md#iaas-vmware): Despliegue avanzado de VMs, gestión de discos, configuración de red
- [Tutoriales IaaS OpenSource](tutorials.md#iaas-opensource): Máquinas virtuales XCP-ng, replicación, alta disponibilidad
- [Tutoriales Object Storage](tutorials.md#object-storage): Creación de buckets, gestión de ACL, integración S3

## Recursos adicionales

- [Terraform Registry - Proveedor Cloud Temple](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Consola Cloud Temple](https://shiva.cloud-temple.com)
- [Conceptos Terraform Cloud Temple](concepts.md)
