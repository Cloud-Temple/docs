---
title: Visión general del Proveedor de Terraform
---

El proveedor Terraform Cloud Temple le permite gestionar la infraestructura de su cuenta Cloud Temple utilizando el enfoque Infrastructure as Code (IaC). Ofrece una integración completa con los servicios de infraestructura de Cloud Temple, lo que permite aprovisionar, configurar y gestionar sus recursos cloud de forma declarativa y reproducible.

## Funcionalidades principales

- **Infrastructure as Code** : Defina su infraestructura en archivos de configuración versionables
- **Gestión declarativa** : Describa el estado deseado de su infraestructura, Terraform se encarga del resto
- **Automatización completa** : Automatice el aprovisionamiento y la gestión de sus recursos
- **Reproducibilidad** : Despliegue entornos idénticos de forma fiable
- **Gestión de dependencias** : Terraform gestiona automáticamente el orden de creación de los recursos

## Productos cubiertos

El proveedor Terraform Cloud Temple admite los siguientes servicios:

### IaaS VMware

Gestione sus máquinas virtuales VMware con todas las funcionalidades avanzadas de virtualización:

- **Máquinas virtuales** : Creación y configuración de máquinas virtuales
- **Discos virtuales** : Creación y configuración de los discos virtuales
- **Adaptadores de red** : Gestión de los adaptadores de red de las máquinas virtuales
- **Controladores virtuales** : Gestión de los controladores de disco y otros periféricos
- **Cloud-Init** : Configuración automatizada en el arranque
- **Copia de seguridad** : Integración con las políticas de copia de seguridad de Cloud Temple

### IaaS OpenSource

Aprovisione y gestione máquinas virtuales en la infraestructura OpenSource basada en XCP-ng:

- **Máquinas virtuales** : Creación y gestión de máquinas virtuales
- **Discos virtuales** : Creación y configuración de los discos virtuales
- **Adaptadores de red** : Creación y configuración de los adaptadores de red de las máquinas virtuales
- **Replicación** : Políticas de replicación de los datos
- **Alta disponibilidad** : Configuración HA (disabled, restart, best-effort)
- **Cloud-Init** : Configuración automatizada compatible con NoCloud
- **Copia de seguridad** : Integración con las políticas de copia de seguridad de Cloud Temple

### Almacenamiento de objetos

Gestione sus espacios de almacenamiento de objetos compatibles con S3:

- **Buckets** : Creación y configuración de buckets
- **Cuentas de almacenamiento** : Gestión de las identidades y credenciales S3
- **ACL** : Control de acceso granular a los buckets
- **Versioning** : Gestión de las versiones de objetos

## Requisitos previos

Antes de utilizar el proveedor Terraform Cloud Temple, asegúrese de disponer de:

### Acceso a la Consola Cloud Temple

Debe tener acceso a la [Consola Cloud Temple](https://shiva.cloud-temple.com) con los derechos adecuados en el tenant en el que desea trabajar.

### Clave API

El proveedor requiere identificadores API de Cloud Temple:

- **Client ID** : Identificador de cliente para la autenticación
- **Secret ID** : Secreto asociado al client ID

Estas credenciales pueden generarse desde la Consola Cloud Temple siguiendo [este procedimiento](https://docs.cloud-temple.com/console/api#cl%C3%A9s-api).

### Derechos y permisos

Según los recursos que desee gestionar, debe disponer de los roles adecuados:

#### Para IaaS VMware

- `compute_iaas_vmware_infrastructure_read`
- `compute_iaas_vmware_infrastructure_write`
- `compute_iaas_vmware_management`
- `compute_iaas_vmware_read`
- `compute_iaas_vmware_virtual_machine_power`
- `backup_iaas_spp_read` y `backup_iaas_spp_write` (para la copia de seguridad)

#### Para IaaS OpenSource

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

## Compatibilidad con Terraform

El proveedor Cloud Temple es compatible con:

- **Terraform** : Versión 1.0 y superiores
- **OpenTofu** : Compatible con las versiones recientes

## Logging y depuración

Para activar el logging detallado del proveedor:

```bash
# Logging niveau DEBUG
export TF_LOG=DEBUG
terraform apply

# Logging au format JSON
export TF_LOG=JSON
terraform apply

# Enregistrer les logs dans un fichier
export TF_LOG_PATH=./terraform.log
terraform apply
```

## Soporte y recursos

- **Documentación oficial** : [Terraform Registry](https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest/docs)
- **Código fuente** : [GitHub](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)
- **Issues** : [GitHub Issues](https://github.com/Cloud-Temple/terraform-provider-cloudtemple/issues)

## Manténgase informado

Para recibir notificaciones automáticas de las nuevas releases del proveedor Terraform Cloud Temple, puede suscribirse a las notificaciones desde el repositorio de GitHub.

### Suscribirse a las notificaciones de release

1. Acceda al [repositorio GitHub del proveedor](https://github.com/Cloud-Temple/terraform-provider-cloudtemple)

2. Haga clic en el botón **Watch** en la parte superior derecha del repositorio

![Botón Watch de GitHub](@site/docs/terraform/images/provider_terraform_notify.png)

1. Seleccione **Custom** y luego marque **Releases**

![Configuración de las notificaciones](@site/docs/terraform/images/provider_terraform_subscribe.png)

A partir de ahora recibirá una notificación por correo electrónico con cada nueva release del proveedor.

## Próximos pasos

- [Conceptos](concepts.md) : Comprender los conceptos clave del proveedor
- [Guía de inicio](quickstart.md) : Crear su primera infraestructura
- [Tutoriales](tutorials.md) : Ejemplos prácticos y casos de uso
