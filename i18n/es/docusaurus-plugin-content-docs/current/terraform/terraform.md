---
title: Descripción general
---

El proveedor de Terraform Cloud Temple le permite gestionar la infraestructura de su cuenta Cloud Temple utilizando el enfoque de Infraestructura como Código (IaC). Ofrece una integración completa con los servicios de infraestructura Cloud Temple, permitiéndole aprovisionar, configurar y gestionar sus recursos en la nube de manera declarativa y reproducible.

## Características principales

- **Infraestructura como Código**: Defina su infraestructura en archivos de configuración versionables
- **Gestión declarativa**: Describa el estado deseado de su infraestructura, Terraform se encarga del resto
- **Automatización completa**: Automatice el aprovisionamiento y la gestión de sus recursos
- **Reproducibilidad**: Implemente entornos idénticos de manera fiable
- **Gestión de dependencias**: Terraform gestiona automáticamente el orden de creación de recursos

## Productos cubiertos

El proveedor de Terraform Cloud Temple admite los siguientes servicios:

### IaaS VMware

Gestione sus máquinas virtuales VMware con todas las características avanzadas de virtualización:

- **Máquinas virtuales**: Creación y configuración de máquinas virtuales
- **Discos virtuales**: Creación y configuración de discos virtuales
- **Adaptadores de red**: Gestión de adaptadores de red de máquinas virtuales
- **Controladores virtuales**: Gestión de controladores de disco y otros dispositivos
- **Cloud-Init**: Configuración automatizada al inicio
- **Copia de seguridad**: Integración con políticas de copia de seguridad de Cloud Temple

### IaaS OpenSource

Aprovisione y gestione máquinas virtuales en infraestructura OpenSource basada en XCP-ng:

- **Máquinas virtuales**: Creación y gestión de máquinas virtuales
- **Discos virtuales**: Creación y configuración de discos virtuales
- **Adaptadores de red**: Creación y configuración de adaptadores de red de máquinas virtuales
- **Replicación**: Políticas de replicación de datos
- **Alta disponibilidad**: Configuración HA (disabled, restart, best-effort)
- **Cloud-Init**: Configuración automatizada compatible con NoCloud
- **Copia de seguridad**: Integración con políticas de copia de seguridad de Cloud Temple

### Almacenamiento de objetos

Gestione sus espacios de almacenamiento de objetos compatibles con S3:

- **Buckets**: Creación y configuración de buckets
- **Cuentas de almacenamiento**: Gestión de identidades y credenciales S3
- **ACL**: Control de acceso granular a buckets
- **Control de versiones**: Gestión de versiones de objetos

## Requisitos previos

Antes de usar el proveedor de Terraform Cloud Temple, asegúrese de tener:

### Acceso a la consola Cloud Temple

Debe tener acceso a la [Consola Cloud Temple](https://shiva.cloud-temple.com) con los derechos apropiados en el tenant en el que desea trabajar.

### Clave API

El proveedor requiere credenciales de API de Cloud Temple:

- **Client ID**: Identificador de cliente para autenticación
- **Secret ID**: Secreto asociado con el Client ID

Estas credenciales se pueden generar desde la Consola Cloud Temple siguiendo [este procedimiento](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Derechos y permisos

Dependiendo de los recursos que desee gestionar, debe tener los roles apropiados:

#### Para IaaS VMware

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` y `backup_iaas_spp_write` (para copia de seguridad)

#### Para IaaS OpenSource

- `compute_iaas_opensource_management`
- `compute_iaas_opensource_read`
- `compute_iaas_opensource_virtual_machine_power`
- `backup_iaas_opensource_read` y `backup_iaas_opensource_write` (para copia de seguridad)

#### Para almacenamiento de objetos

- `object-storage_write`
- `object-storage_read`
- `object-storage_iam_management`

#### Derechos comunes

- `activity_read`
- `tag_read` y `tag_write`

## Compatibilidad con Terraform

El proveedor Cloud Temple es compatible con:

- **Terraform**: Versión 1.0 y superiores
- **OpenTofu**: Compatible con versiones recientes

## Registro y depuración

Para habilitar el registro detallado del proveedor:

```bash
# Registro nivel DEBUG
export TF_LOG=DEBUG
terraform apply

# Registro en formato JSON
export TF_LOG=JSON
terraform apply

# Guardar registros en un archivo
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Soporte y recursos

- **Documentación oficial**: [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Código fuente**: [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Issues**: [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Próximos pasos

- [Conceptos](concepts.md): Comprenda los conceptos clave del proveedor
- [Guía de inicio](quickstart.md): Cree su primera infraestructura
- [Tutoriales](tutorials.md): Ejemplos prácticos y casos de uso
