---
title: Visión general
---

El proveedor Terraform Cloud Temple le permite gestionar la infraestructura de su cuenta Cloud Temple utilizando el enfoque Infrastructure as Code (IaC). Ofrece una integración completa con los servicios de infraestructura de Cloud Temple, permitiendo aprovisionar, configurar y gestionar sus recursos en la nube de forma declarativa y reproducible.

## Características principales

- **Infraestructura como código**: Defina su infraestructura en archivos de configuración versionables
- **Gestión declarativa**: Describa el estado deseado de su infraestructura, Terraform se encarga del resto
- **Automatización completa**: Automatice el aprovisionamiento y gestión de sus recursos
- **Reproducibilidad**: Despliegue entornos idénticos de forma fiable
- **Gestión de dependencias**: Terraform gestiona automáticamente el orden de creación de los recursos

## Products covered

The Terraform Cloud Temple provider supports the following services:

### IaaS VMware

Manage your VMware virtual machines with all advanced virtualization features:

- **Virtual Machines**: Creation and configuration of virtual machines  
- **Virtual Disks**: Creation and configuration of virtual disks  
- **Network Adapters**: Management of network adapters for virtual machines  
- **Virtual Controllers**: Management of disk controllers and other devices  
- **Cloud-Init**: Automated configuration at boot  
- **Backup**: Integration with Cloud Temple backup policies

### IaaS OpenSource

Provision and manage virtual machines on the OpenSource infrastructure based on XCP-ng:

- **Virtual Machines**: Creation and management of virtual machines
- **Virtual Disks**: Creation and configuration of virtual disks
- **Network Adapters**: Creation and configuration of network adapters for virtual machines
- **Replication**: Data replication policies
- **High Availability**: HA configuration (disabled, restart, best-effort)
- **Cloud-Init**: Automated configuration compatible with NoCloud
- **Backup**: Integration with Cloud Temple backup policies

### Almacenamiento objeto

Administre sus espacios de almacenamiento objeto compatibles con S3:

- **Buckets**: Creación y configuración de buckets
- **Cuentas de almacenamiento**: Gestión de identidades y credenciales S3
- **ACL**: Control de acceso granular a los buckets
- **Versionado**: Gestión de versiones de objetos

## Requis previos

Antes de utilizar el proveedor Terraform Cloud Temple, asegúrese de contar con:

### Acceso a la Consola Cloud Temple

Debe tener acceso a la [Consola Cloud Temple](https://shiva.cloud-temple.com) con los permisos adecuados en el inquilino en el que desea trabajar.

### API Key

The provider requires Cloud Temple API credentials:

- **Client ID**: Client identifier for authentication
- **Secret ID**: Secret associated with the Client ID

These credentials can be generated via the Cloud Temple Console by following [this procedure](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Rights and permissions

Depending on the resources you want to manage, you must have the appropriate roles:

#### Para IaaS VMware

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` y `backup_iaas_spp_write` (para la copia de seguridad)

#### Para IaaS de código abierto

- `compute_iaas_opensource_management`
- `compute_iaas_opensource_read`
- `compute_iaas_opensource_virtual_machine_power`
- `backup_iaas_opensource_read` y `backup_iaas_opensource_write` (para la copia de seguridad)

#### Para Object Storage

- `object-storage_write`
- `object-storage_read`
- `object-storage_iam_management`

#### Derechos comunes

- `activity_read`
- `tag_read` y `tag_write`

## Terraform Compatibility

The Cloud Temple provider is compatible with:

- **Terraform**: Version 1.0 and above
- **OpenTofu**: Compatible with recent versions

## Registro y depuración

Para activar el registro detallado del proveedor:

```bash
# Registro nivel DEBUG
export TF_LOG=DEBUG
terraform apply

# Registro en formato JSON
export TF_LOG=JSON
terraform apply

# Guardar los registros en un archivo
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Soporte y recursos

- **Documentación oficial** : [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Código fuente** : [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Problemas** : [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Próximos pasos

- [Conceptos](concepts.md) : Comprender los conceptos clave del proveedor
- [Guía de inicio](quickstart.md) : Crear su primera infraestructura
- [Tutoriales](tutorials.md) : Ejemplos prácticos y casos de uso
