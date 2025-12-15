---
title: Guía de inicio
---

# Guía de inicio rápido

Esta guía le acompaña paso a paso para implementar su primera infraestructura Cloud Temple con Terraform.

## Requis previos

Antes de comenzar, asegúrese de contar con:

- Una cuenta activa de Cloud Temple
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

Descargue el ejecutable desde [terraform.io](https://www.terraform.io/downloads) o utiliza Chocolatey:

```powershell
choco install terraform
```

### Verificación de la instalación

```bash
terraform version
```

Deberías ver una salida similar a:

```
Terraform v1.6.0
```

## Paso 2: Obtenga su clave API

### Generación de una clave API en la Consola

Estas credenciales se pueden generar desde la Consola Cloud Temple siguiendo [este procedimiento](https://docs.cloud-temple.com/console/api#claves-api).

:::warning Seguridad
    Guarde estas credenciales en un lugar seguro. El Secret ID solo se mostrará una vez.
:::

### Configuración de las variables de entorno

Exporte tus credenciales como variables de entorno:

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

## Paso 3: Crear su proyecto de Terraform

### Crear el directorio del proyecto

```bash
mkdir terraform-cloudtemple-quickstart
cd terraform-cloudtemple-quickstart
```

### Crear el archivo de configuración del provider

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
  # Las credenciales se recuperan automáticamente desde las variables de entorno
  # CLOUDTEMPLE_CLIENT_ID y CLOUDTEMPLE_SECRET_ID
}
```

## Paso 4: Inicializar Terraform

Inicialice su proyecto de Terraform para descargar el proveedor:

```bash
terraform init
```

Debería ver lo siguiente:

```
Inicializando el backend...

Inicializando los plugins del proveedor...
- Buscando versiones de Cloud-Temple/cloudtemple que coincidan con "~> 1.0"...
- Instalando Cloud-Temple/cloudtemple v1.x.x...
- Instalado Cloud-Temple/cloudtemple v1.x.x (firmado por HashiCorp)

¡Terraform se ha inicializado correctamente!
```

## Paso 5: Cree su primera recurso

### Ejemplo sencillo: Máquina virtual VMware

Cree un archivo `main.tf` con una configuración mínima:

```hcl
# Recuperación de los recursos existentes necesarios
data "cloudtemple_compute_machine_manager" "vc-vstack-01" {
  name = "vc-vstack-001-t0001" # Ajuste con el nombre de su vCenter
}

data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"  # Ajuste con el nombre de su datacenter
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu001-ucs01"  # Ajuste con el nombre de su cluster
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_compute_datastore_cluster" "datastore" {
  name = "sdrs001-LIVE"  # Ajuste con el nombre de su cluster de datastore
  machine_manager_id = data.cloudtemple_compute_machine_manager.vc-vstack-01.id
}

data "cloudtemple_backup_sla_policy" "daily" {
  name = "sla001-daily-par7s"  # Política de copia de seguridad
}

# Creación de una máquina virtual
resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
  name = "terraform-vm-01"
  
  # Configuración de hardware
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
  
  # Política de copia de seguridad
  backup_sla_policies = [
    data.cloudtemple_backup_sla_policy.daily.id
  ]
  
  # Etiquetas
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
  description = "Referencia de objeto administrado de la VM"
  value       = cloudtemple_compute_virtual_machine.my_first_vm.moref
}
```

:::note Adaptación de los nombres
    Los nombres de los datacenters, clusters y datastores deben coincidir con los disponibles en su entorno Cloud Temple. Consulte la consola para identificar las recursos disponibles.
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

Terraform le solicita confirmación:

```
¿Desea realizar estas acciones?
  Terraform realizará las acciones descritas anteriormente.
  Solo se aceptará 'yes' para aprobar.

  Introduzca un valor: 
```

Escriba `yes` y presione Intro.

Terraform crea los recursos:

```
cloudtemple_compute_virtual_machine.my_first_vm: Creando...
cloudtemple_compute_virtual_machine.my_first_vm: Aún creando... [10s transcurridos]
cloudtemple_compute_virtual_machine.my_first_vm: Aún creando... [20s transcurridos]
cloudtemple_compute_virtual_machine.my_first_vm: Creación completada tras 25s [id=12345678-1234-1234-1234-123456789abc]

Aplicación completa. Recursos: 1 añadidos, 0 modificados, 0 destruidos.

Salidas:

vm_id = "12345678-1234-1234-1234-123456789abc"
vm_moref = "vm-123"
```

:::success ¡Felicidades!
    ¡Acaba de crear su primera máquina virtual Cloud Temple con Terraform!
:::

## Paso 8: Verificar la creación

### En la consola Cloud Temple

1. Inicie sesión en la [Consola Cloud Temple](https://shiva.cloud-temple.com)
2. Navegue hasta **IaaS VMWare** > **Máquinas virtuales**
3. Debería ver su Máquina Virtual `terraform-vm-01`

### Con Terraform

Muestre el estado actual:

```bash
terraform show
```

Liste los recursos gestionados:

```bash
terraform state list
```

Muestre las salidas:

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
cloudtemple_compute_virtual_machine.my_first_vm: Actualizando estado... [id=xxx]

Terraform realizará las siguientes acciones:

  # cloudtemple_compute_virtual_machine.my_first_vm se actualizará in situ
  ~ resource "cloudtemple_compute_virtual_machine" "my_first_vm" {
      ~ memory = 4294967296 -> 8589934592
        # (otros atributos sin cambios)
    }

Plan: 0 para añadir, 1 para modificar, 0 para destruir.
```

## Paso 10: Eliminar los recursos

Cuando haya terminado sus pruebas, elimine los recursos creados:

```bash
terraform destroy
```

Terraform mostrará qué se va a eliminar y pedirá confirmación:

```
cloudtemple_compute_virtual_machine.my_first_vm: Actualizando estado... [id=xxx]

Terraform realizará las siguientes acciones:

  # cloudtemple_compute_virtual_machine.my_first_vm será destruido
  - recurso "cloudtemple_compute_virtual_machine" "my_first_vm" {
      - cpu    = 2
      - memory = 8589934592
      - name   = "terraform-vm-01"
      ...
    }

Plan: 0 para añadir, 0 para cambiar, 1 para destruir.

¿Realmente desea destruir todos los recursos?
  Terraform destruirá toda su infraestructura gestionada.
  Solo se aceptará 'yes' para confirmar.

  Introduzca un valor:
```

Escriba `yes` para confirmar la eliminación.

## Estructura de proyecto recomendada

Para proyectos más complejos, organiza tus archivos de la siguiente manera:

```
terraform-cloudtemple/
├── main.tf              # Recursos principales
├── versions.tf          # Configuración del provider
├── variables.tf         # Declaraciones de variables
├── outputs.tf           # Declaraciones de outputs
├── terraform.tfvars     # Valores de las variables (no versionar)
├── .gitignore          # Exclusiones de Git
└── README.md           # Documentación del proyecto
```

### Ejemplo de .gitignore

```gitignore
# Terraform Files
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
.terraform.lock.hcl

# Crash files
crash.log
crash.*.log

# Sensitive variable files
*.auto.tfvars
override.tf
override.tf.json
*_override.tf
*_override.tf.json
```

## Comandos esenciales de Terraform

| Comando | Descripción |
|---------|-------------|
| `terraform init` | Inicializa el directorio de trabajo |
| `terraform validate` | Valida la sintaxis de la configuración |
| `terraform fmt` | Formatea automáticamente los archivos |
| `terraform plan` | Muestra el plan de ejecución |
| `terraform apply` | Aplica los cambios |
| `terraform destroy` | Destruye todas las recursos |
| `terraform show` | Muestra el estado actual |
| `terraform output` | Muestra los valores de las salidas |
| `terraform state list` | Lista los recursos gestionados |

## Buenas prácticas

### 1. Use variables

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

### 2. Organize with modules

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

### 3. Use a remote backend

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state-cloudtemple"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

### 4. Comente su código

```hcl
# Virtual machine for the production web server

# CPU and memory sized to handle 1000 req/s
resource "cloudtemple_compute_virtual_machine" "web_prod" {
  name = "web-prod-01"
  
  # Hardware configuration based on internal benchmarks
  memory = 16 * 1024 * 1024 * 1024  # 16 GB
  cpu    = 8
  # ...
}
```

### 5. Use data sources

Do not recreate what already exists. Use data sources to reference existing resources:

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

**Cause**: Connection issue with the Terraform Registry.

**Solution**: Check your internet connection and retry `terraform init`.

### Error: "Error: failed to login"

```
Error: failed to login: Unexpected response code: 401
```

**Cause**: Credenciales inválidas o caducadas.

**Solution**:
1. Verifique sus variables de entorno
2. Genere una nueva clave API en la consola
3. Verifique los permisos de su clave API

### Error: "Error: resource not found"

```
Error: failed to find datastore named "ds002-t0001-r-stw1-data13-th3s"
```

**Cause**: The referenced resource (datacenter, cluster, etc.) does not exist or you do not have access to it.

**Solution**:
1. Verify the exact name (or UUID) in the Cloud Temple console
2. Check your access rights to this resource

## Próximos pasos

Ahora que dominas los conceptos básicos, explora los tutoriales avanzados:

- [Tutoriales IaaS VMware](tutorials.md#iaas-vmware) : Despliegue avanzado de máquinas virtuales, gestión de discos, configuración de red
- [Tutoriales IaaS Open Source](tutorials.md#iaas-opensource) : Máquinas virtuales XCP-ng, replicación, alta disponibilidad
- [Tutoriales Almacenamiento de Objetos](tutorials.md#object-storage) : Creación de buckets, gestión de ACL, integración S3

## Recursos complementarios

- [Terraform Registry - Provider Cloud Temple](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple)
- [Consola Cloud Temple](https://shiva.cloud-temple.com)
- [Conceptos de Terraform Cloud Temple](concepts.md)
