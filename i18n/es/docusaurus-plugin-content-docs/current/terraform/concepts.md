---
title: Conceptos
---

# Conceptos de Terraform en el proveedor Cloud Temple

Esta página presenta los conceptos fundamentales necesarios para comprender y utilizar eficazmente el proveedor Terraform Cloud Temple.

## Infraestructura como Código (IaC)

La Infraestructura como Código es un enfoque que consiste en gestionar y aprovisionar la infraestructura informática a través de archivos de configuración legibles por humanos, en lugar de mediante configuración manual o herramientas interactivas.

### Ventajas de IaC con Terraform

- **Versionado**: La infraestructura se define en archivos que pueden ser versionados (Git)
- **Colaboración**: Los equipos pueden trabajar juntos en la misma infraestructura
- **Automatización**: Reducción de errores humanos y ahorro de tiempo
- **Documentación**: El código describe explícitamente la infraestructura
- **Reproducibilidad**: Despliegue de entornos idénticos en pocos minutos

## Proveedor Terraform

Un proveedor Terraform es un plugin que permite a Terraform interactuar con una API específica. El proveedor Cloud Temple actúa como una capa de abstracción entre sus archivos de configuración Terraform y las APIs Cloud Temple.

### Declaración del proveedor

El proveedor debe declararse en un bloque `terraform` con `required_providers`:

```hcl
terraform {
  required_providers {
    cloudtemple = {
      source  = "Cloud-Temple/cloudtemple"
      version = "~> 1.0"
    }
  }
}

provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}
```

### Autenticación

El proveedor se autentica con las APIs Cloud Temple utilizando:

1. **Client ID**: Identificador único de su aplicación
2. **Secret ID**: Clave secreta asociada con el Client ID

Estas credenciales se generan desde la Consola Cloud Temple y permiten al proveedor realizar operaciones en su nombre.

:::info Buenas prácticas
    Almacene sus credenciales en variables de entorno o un gestor de secretos, nunca directamente en el código.
:::

## Recursos

Un recurso representa un componente de infraestructura que puede ser creado, leído, actualizado o eliminado (operaciones CRUD).

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name                         = "web-server-01"
  memory                       = 8 * 1024 * 1024 * 1024
  cpu                          = 4
  datacenter_id                = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id              = data.cloudtemple_compute_host_cluster.cluster.id
  guest_operating_system_moref = "ubuntu64Guest"
}
```

### Tipos de recursos Cloud Temple

#### IaaS VMware

- `cloudtemple_compute_virtual_machine`: Máquina virtual
- `cloudtemple_compute_virtual_disk`: Disco virtual
- `cloudtemple_compute_network_adapter`: Interfaz de red
- `cloudtemple_compute_virtual_controller`: Controlador de dispositivo

#### IaaS OpenSource

- `cloudtemple_compute_iaas_opensource_virtual_machine`: Máquina virtual
- `cloudtemple_compute_iaas_opensource_virtual_disk`: Disco
- `cloudtemple_compute_iaas_opensource_network_adapter`: Interfaz de red
- `cloudtemple_compute_iaas_opensource_replication_policy`: Política de replicación

#### Object Storage

- `cloudtemple_object_storage_bucket`: Bucket S3
- `cloudtemple_object_storage_storage_account`: Cuenta de almacenamiento
- `cloudtemple_object_storage_acl_entry`: ACL de un bucket
- `cloudtemple_object_storage_global_access_key`: Clave de acceso global al namespace

### Atributos y argumentos

Cada recurso tiene:

- **Argumentos**: Valores que usted configura (entradas)
- **Atributos**: Valores devueltos por el recurso (salidas)

```hcl
resource "cloudtemple_compute_virtual_machine" "example" {
  # Argumentos (configuración)
  name   = "my-vm"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
  
  # Atributos (calculados automáticamente)
  # id, moref, machine_manager_id, etc.
}

# Referencia a un atributo
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Datasources

Los datasources permiten recuperar información sobre recursos existentes sin gestionarlos. Son de **solo lectura**.

### Uso de datasources

```hcl
# Recuperación de un datacenter existente
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Recuperación de un clúster
data "cloudtemple_compute_host_cluster" "cluster" {
  name = "clu002-ucs01"
}

# Uso en un recurso
resource "cloudtemple_compute_virtual_machine" "web" {
  name            = "web-server"
  datacenter_id   = data.cloudtemple_compute_virtual_datacenter.dc.id
  host_cluster_id = data.cloudtemple_compute_host_cluster.cluster.id
  # ...
}
```

### Datasources principales

Puede encontrar la lista completa de datasources disponibles en el proveedor Terraform Cloud Temple en [documentación Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Infraestructura Compute

| Datasource | Descripción |
|------------|-------------|
| `cloudtemple_compute_virtual_datacenter` | Datacenter virtual |
| `cloudtemple_compute_host_cluster` | Clúster de hosts |
| `cloudtemple_compute_datastore_cluster` | Clúster de datastores |
| `cloudtemple_compute_datastore` | Datastore individual |
| `cloudtemple_compute_network` | Red (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Templates y Marketplace

| Datasource | Descripción |
|------------|-------------|
| `cloudtemple_compute_content_library` | Biblioteca de contenido |
| `cloudtemple_compute_content_library_item` | Elemento de biblioteca |
| `cloudtemple_marketplace_item` | Elemento de Marketplace Cloud Temple |
| `cloudtemple_compute_iaas_opensource_template` | Template en el catálogo IaaS OpenSource |

#### Backup

| Datasource | Descripción |
|------------|-------------|
| `cloudtemple_backup_sla_policy` | Política SLA de backup VMware |
| `cloudtemple_backup_iaas_opensource_policy` | Política de backup OpenSource |

#### Object Storage

| Datasource | Descripción |
|------------|-------------|
| `cloudtemple_object_storage_role` | Roles disponibles para ACLs |
| `cloudtemple_object_storage_bucket_files` | Archivos en un bucket |
| `cloudtemple_object_storage_storage_account` | Cuenta de almacenamiento existente |

## Estado Terraform (State)

El state Terraform es un archivo que mantiene la correspondencia entre su configuración y los recursos reales en la nube.

### Archivo terraform.tfstate

```json
{
  "version": 4,
  "terraform_version": "1.5.0",
  "resources": [
    {
      "mode": "managed",
      "type": "cloudtemple_compute_virtual_machine",
      "name": "web",
      "provider": "provider[\"registry.terraform.io/Cloud-Temple/cloudtemple\"]",
      "instances": [...]
    }
  ]
}
```

### Backend remoto

Para trabajo en equipo, almacene el state en un backend remoto:

```hcl
terraform {
  backend "s3" {
    bucket = "terraform-state"
    key    = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}
```

:::warning
    El archivo `terraform.tfstate` contiene información sensible. Nunca lo haga commit en Git y utilice un backend seguro para el almacenamiento.
:::

:::info
    OpenTofu proporciona cifrado del state por defecto ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::

## Ciclo de vida Terraform

### 1. Inicialización (terraform init)

Inicializa el directorio de trabajo y descarga el proveedor Cloud Temple:

```bash
terraform init
```

Este comando:
- Descarga el proveedor desde Terraform Registry
- Inicializa el backend (si está configurado)
- Crea el directorio `.terraform/`

### 2. Planificación (terraform plan)

Genera un plan de ejecución mostrando los cambios que se aplicarán:

```bash
terraform plan
```

El plan indica:
- **Recursos a crear** (`+`)
- **Recursos a modificar** (`~`)
- **Recursos a destruir** (`-`)
- **Recursos a recrear** (`-/+`)

### 3. Aplicación (terraform apply)

Aplica los cambios para alcanzar el estado deseado:

```bash
terraform apply
```

Terraform:
1. Genera un plan
2. Solicita confirmación (excepto con `--auto-approve`)
3. Aplica los cambios
4. Actualiza el state

### 4. Destrucción (terraform destroy)

Destruye todos los recursos gestionados:

```bash
terraform destroy
```

:::danger Atención
  Este comando elimina permanentemente todos los recursos. Úselo con precaución.
:::

### 5. Otros comandos útiles

```bash
# Mostrar el estado actual
terraform show

# Listar recursos
terraform state list

# Verificar la configuración
terraform validate

# Formatear archivos
terraform fmt

# Mostrar outputs
terraform output
```

## Dependencias y orden de ejecución

Terraform analiza automáticamente las dependencias entre recursos.

### Dependencias implícitas

Terraform detecta referencias entre recursos:

```hcl
# El datasource se evalúa primero
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Luego se crea la VM (dependencia implícita vía datacenter_id)
resource "cloudtemple_compute_virtual_machine" "web" {
  name          = "web-server"
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  # ...
}

# Finalmente se adjunta el disco (dependencia vía virtual_machine_id)
resource "cloudtemple_compute_virtual_disk" "data" {
  name               = "data-disk"
  virtual_machine_id = cloudtemple_compute_virtual_machine.web.id
  capacity           = 100 * 1024 * 1024 * 1024
}
```

### Dependencias explícitas

Para forzar un orden específico, use `depends_on`:

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name = "web-server"
  # ...
  
  depends_on = [
    cloudtemple_compute_network_adapter.eth0
  ]
}
```

## Variables y outputs

### Variables de entrada

Hacen que su configuración sea reutilizable:

```hcl
variable "vm_name" {
  description = "Nombre de la máquina virtual"
  type        = string
  default     = "my-vm"
}

variable "vm_memory" {
  description = "Memoria en GB"
  type        = number
  default     = 8
}

resource "cloudtemple_compute_virtual_machine" "example" {
  name   = var.vm_name
  memory = var.vm_memory * 1024 * 1024 * 1024
  # ...
}
```

### Outputs

Exponen información después de la aplicación:

```hcl
output "vm_id" {
  description = "ID de la máquina virtual"
  value       = cloudtemple_compute_virtual_machine.example.id
}

output "vm_moref" {
  description = "Managed Object Reference VMware"
  value       = cloudtemple_compute_virtual_machine.example.moref
}
```

## Módulos

Los módulos permiten agrupar y reutilizar configuraciones:

```hcl
# modules/vm/main.tf
resource "cloudtemple_compute_virtual_machine" "vm" {
  name   = var.name
  memory = var.memory
  cpu    = var.cpu
  # ...
}

# main.tf
module "web_server" {
  source = "./modules/vm"
  
  name   = "web-01"
  memory = 8 * 1024 * 1024 * 1024
  cpu    = 4
}

module "db_server" {
  source = "./modules/vm"
  
  name   = "db-01"
  memory = 16 * 1024 * 1024 * 1024
  cpu    = 8
}
```

## Buenas prácticas

### Organización de archivos

```
.
├── main.tf              # Recursos principales
├── variables.tf         # Declaraciones de variables
├── outputs.tf           # Declaraciones de outputs
├── versions.tf          # Versiones Terraform y proveedores
├── terraform.tfvars     # Valores de variables (no hacer commit)
└── modules/             # Módulos reutilizables
    └── vm/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Gestión de secretos

```hcl
# ❌ A evitar
provider "cloudtemple" {
  client_id = "12345678-1234-1234-1234-123456789abc"
  secret_id = "secreto-en-claro"
}

# ✅ Recomendado
provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}
```

### Uso de tags

```hcl
resource "cloudtemple_compute_virtual_machine" "web" {
  name = "web-server"
  # ...
  
  tags = {
    environment = "production"
    managed_by  = "terraform"
    team        = "platform"
    cost_center = "engineering"
  }
}
```

## Próximos pasos

- [Guía de inicio](quickstart.md): Cree su primera infraestructura con Terraform
- [Tutoriales](tutorials.md): Ejemplos prácticos para cada servicio
