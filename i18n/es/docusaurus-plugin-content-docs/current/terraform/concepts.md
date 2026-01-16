---
title: Conceptos
---

# Conceptos de Terraform dans el proveedor Cloud Temple

Esta página presenta los conceptos fundamentales necesarios para comprender y utilizar eficazmente el proveedor Terraform Cloud Temple.

## Infrastructure as Code (IaC)

Infrastructure as Code es un enfoque que consiste en gestionar y aprovisionar la infraestructura informática mediante archivos de configuración legibles por humanos, en lugar de una configuración manual o herramientas interactivas.

### Ventajas de IaC con Terraform

- **Control de versiones**: La infraestructura se define en archivos que pueden ser controlados con Git
- **Colaboración**: Los equipos pueden trabajar juntos sobre la misma infraestructura
- **Automatización**: Reducción de errores humanos y ahorro de tiempo
- **Documentación**: El código describe explícitamente la infraestructura
- **Reproducibilidad**: Despliegue de entornos idénticos en unos pocos minutos

## Terraform Provider

A Terraform provider is a plugin that enables Terraform to interact with a specific API. The Cloud Temple provider acts as an abstraction layer between your Terraform configuration files and the Cloud Temple APIs.

### Declaración del provider

El provider debe declararse dentro de un bloque `terraform` con `required_providers`:

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

El proveedor se autentica ante las APIs de Cloud Temple utilizando:

1. **Client ID**: Identificador único de su aplicación
2. **Secret ID**: Clave secreta asociada al Client ID

Estos identificadores se generan desde la Consola de Cloud Temple y permiten al proveedor realizar operaciones en su nombre.

:::info Buenas prácticas
    Almacene sus credenciales en variables de entorno o en un gestor de secretos, nunca directamente en el código.
:::

## Recursos

Un recurso representa un componente de infraestructura que puede crearse, leerse, actualizarse o eliminarse (operaciones CRUD).

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

### Types de recursos Cloud Temple

#### IaaS VMware

- `cloudtemple_compute_virtual_machine` : Máquina virtual
- `cloudtemple_compute_virtual_disk` : Disco virtual
- `cloudtemple_compute_network_adapter` : Adaptador de red
- `cloudtemple_compute_virtual_controller` : Controlador de dispositivo

#### IaaS OpenSource

- `cloudtemple_compute_iaas_opensource_virtual_machine` : Máquina virtual
- `cloudtemple_compute_iaas_opensource_virtual_disk` : Disco virtual
- `cloudtemple_compute_iaas_opensource_network_adapter` : Adaptador de red
- `cloudtemple_compute_iaas_opensource_replication_policy` : Política de replicación

#### Almacenamiento de objetos

- `cloudtemple_object_storage_bucket` : Bucket S3
- `cloudtemple_object_storage_storage_account` : Cuenta de almacenamiento
- `cloudtemple_object_storage_acl_entry` : ACL de un bucket
- `cloudtemple_object_storage_global_access_key`: Clave de acceso global al namespace

### Atributos y argumentos

Cada recurso posee:

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

# Reference to an attribute
output "vm_id" {
  value = cloudtemple_compute_virtual_machine.example.id
}
```

## Datasources

Las datasources permiten recuperar información sobre recursos existentes sin gestionarlos. Son de **solo lectura**.

### Uso de los datasources

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

### Principales fuentes de datos

Puede encontrar la lista completa de las fuentes de datos disponibles en el proveedor Terraform Cloud Temple en la [documentación de Terraform](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)

#### Infraestructura Compute

| Datasource | Descripción |
|------------|-------------|
| `cloudtemple_compute_virtual_datacenter` | Centro de datos virtual |
| `cloudtemple_compute_host_cluster` | Cluster de hosts |
| `cloudtemple_compute_datastore_cluster` | Cluster de datastores |
| `cloudtemple_compute_datastore` | Datastore individual |
| `cloudtemple_compute_network` | Red (VLAN, VXLAN) |
| `cloudtemple_compute_machine_manager` | Machine Manager (vCenter) |

#### Plantillas y Marketplace

| Datasource | Descripción |
|------------|-------------|
| `cloudtemple_compute_content_library` | Biblioteca de contenido |
| `cloudtemple_compute_content_library_item` | Elemento de la biblioteca |
| `cloudtemple_marketplace_item` | Elemento del Marketplace Cloud Temple |
| `cloudtemple_compute_iaas_opensource_template` | Plantilla en el catálogo del IaaS OpenSource |

#### Backup

| Datasource | Description |
|------------|-------------|
| `cloudtemple_backup_sla_policy` | VMware backup SLA policy |
| `cloudtemple_backup_iaas_opensource_policy` | OpenSource backup policy |

#### Almacenamiento de objetos

| Origen de datos | Descripción |
|-----------------|-------------|
| `cloudtemple_object_storage_role` | Roles disponibles para las ACL |
| `cloudtemple_object_storage_bucket_files` | Archivos en un bucket |
| `cloudtemple_object_storage_storage_account` | Cuenta de almacenamiento existente |

## Estado de Terraform (State)

El estado de Terraform es un archivo que mantiene la correspondencia entre su configuración y los recursos reales en la nube.

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

Para un trabajo en equipo, almacena el estado en un backend remoto:

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
    El archivo `terraform.tfstate` contiene información sensible. Nunca lo commits en Git y utiliza un backend seguro para su almacenamiento.
:::

:::info
    OpenTofu ofrece cifrado del estado por defecto ([OpenTofu - State and Plan Encryption](https://opentofu.org/docs/language/state/encryption/))
:::

## Ciclo de vida de Terraform

### 1. Inicialización (terraform init)

Inicializa el directorio de trabajo y descarga el provider Cloud Temple:

```bash
terraform init
```

Este comando:
- Descarga el provider desde el Terraform Registry
- Inicializa el backend (si está configurado)
- Crea el directorio `.terraform/`

### 2. Planificación (terraform plan)

Genera un plan de ejecución que muestra los cambios que se aplicarán:

```bash
terraform plan
```

El plan indica:
- **Recursos que se crearán** (`+`)
- **Recursos que se modificarán** (`~`)
- **Recursos que se destruirán** (`-`)
- **Recursos que se recrearán** (`-/+`)

### 3. Aplicación (terraform apply)

Aplica los cambios para alcanzar el estado deseado:

```bash
terraform apply
```

Terraform:
1. Genera un plan
2. Solicita confirmación (excepto con `--auto-approve`)
3. Aplica los cambios
4. Actualiza el estado

### 4. Destrucción (terraform destroy)

Elimina todas las recursos gestionados:

```bash
terraform destroy
```

:::danger Atención
  Este comando elimina definitivamente todos los recursos. Úsalo con precaución.
:::

### 5. Otras órdenes útiles

```bash
# Mostrar el estado actual
terraform show

# Listar los recursos
terraform state list

# Verificar la configuración
terraform validate

# Formate los archivos
terraform fmt

# Mostrar las salidas
terraform output
```

## Dependencias y orden de ejecución

Terraform analiza automáticamente las dependencias entre recursos.

### Dependencias implícitas

Terraform detecta las referencias entre recursos:

```hcl
# La datasource se evalúa en primer lugar
data "cloudtemple_compute_virtual_datacenter" "dc" {
  name = "DC-EQX6"
}

# Then the VM is created (implicit dependency via datacenter_id)
resource "cloudtemple_compute_virtual_machine" "web" {
  name          = "web-server"
  datacenter_id = data.cloudtemple_compute_virtual_datacenter.dc.id
  # ...
}

# Finally, the disk is attached (dependency via virtual_machine_id)
resource "cloudtemple_compute_virtual_disk" "data" {
  name               = "data-disk"
  virtual_machine_id = cloudtemple_compute_virtual_machine.web.id
  capacity           = 100 * 1024 * 1024 * 1024
}
```

### Dependencias explícitas

Para forzar un orden específico, utilice `depends_on`:

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

Haga que su configuración sea reutilizable:

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

Expose information after the application:

```hcl
output "vm_id" {
  description = "ID of the virtual machine"
  value       = cloudtemple_compute_virtual_machine.example.id
}

output "vm_moref" {
  description = "VMware Managed Object Reference"
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
├── versions.tf          # Versiones de Terraform y providers
├── terraform.tfvars     # Valores de las variables (no commitear)
└── modules/             # Módulos reutilizables
    └── vm/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Gestión de secretos

```hcl
# ❌ To avoid
provider "cloudtemple" {
  client_id = "12345678-1234-1234-1234-123456789abc"
  secret_id = "secret-en-clair"
}

# ✅ Recomendado
provider "cloudtemple" {
  client_id = var.cloudtemple_client_id
  secret_id = var.cloudtemple_secret_id
}
```

### Uso de etiquetas

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

- [Guía de inicio](quickstart.md) : Cree su primera infraestructura con Terraform
- [Tutoriales](tutorials.md) : Ejemplos prácticos para cada servicio
