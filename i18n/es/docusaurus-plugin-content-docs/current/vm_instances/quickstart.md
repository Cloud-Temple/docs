---
title: Guía de inicio
---

## Requisitos previos

Antes de comenzar, asegúrese de disponer de lo siguiente:

- Un **Tenant Cloud Temple** activo
- Una suscripción mínima al **Soporte Estándar**
- Los permisos necesarios en su organización Cloud Temple

## Desplegar una máquina virtual

### 1. Acceder al servicio

Inicie sesión en la **Consola Cloud Temple** y navegue a la sección **VM Instances** desde el menú principal.

### 2. Seleccionar el tenant y la zona de disponibilidad

- Elija el **tenant** en el que desea desplegar la máquina virtual.
- Seleccione la **zona de disponibilidad (AZ)** de destino entre las disponibles en la región FR1.

### 3. Elegir una imagen desde el Marketplace

Las máquinas virtuales se despliegan exclusivamente desde las **imágenes oficiales del Marketplace de Cloud Temple**.

- Explore el catálogo de imágenes disponibles.
- Seleccione el sistema operativo y la versión deseados.

### 4. Configurar la máquina virtual

Complete los parámetros de su instancia:

| Parámetro | Descripción |
|-----------|-------------|
| **Clase de servicio** | Development, General Purpose o Performance |
| **Flavor** | Elija entre flavors predefinidos o cree un flavor personalizado (vCPU + RAM) |
| **Discos adicionales** | Añada volúmenes adicionales si es necesario (hasta 16 volúmenes, máximo 2 TB por volumen) |
| **Red (VPC)** | Asocie la VM a su red VPC |
| **Cloud-init** | Opcional: inyecte un script de preconfiguración en el arranque (claves SSH, configuración de red, etc.) |

:::info Disco del sistema
El disco del sistema (Flash) se incluye automáticamente. Su tamaño (entre 15 y 100 GB) depende del sistema operativo elegido.
:::

### 5. Lanzar el despliegue

Valide la configuración y lance el aprovisionamiento. El despliegue es **automatizado e inmediato** (pocos minutos).

## Gestionar sus máquinas virtuales

Desde la consola, puede realizar las siguientes acciones en sus máquinas virtuales:

- **Iniciar / Detener / Reiniciar** la máquina virtual
- **Abrir la consola** para acceder directamente al sistema
- **Modificar la configuración** (vCPU, RAM) — requiere detener la VM
- **Añadir discos** adicionales
- **Consultar las métricas de rendimiento** (CPU, RAM, Disco)
- **Configurar la copia de seguridad** (opción de pago) con retención configurable

## Automatización e Infrastructure as Code

El servicio VM Instances es totalmente automatizable:

### A través de la API REST

La API REST de Cloud Temple permite el control programático completo del ciclo de vida de las máquinas virtuales.

Referencia de API: [https://shiva.cloud-temple.com/api/](https://shiva.cloud-temple.com/api/)

### A través de Terraform

El proveedor Terraform de Cloud Temple permite gestionar sus VM Instances como Infrastructure as Code.

```hcl
# Ejemplo de recurso VM Instances con Terraform
# Consulte la documentación del proveedor para los atributos disponibles
resource "cloudtemple_compute_vm_instance" "example" {
  # ...
}
```

Consulte la [documentación de Terraform](../terraform/terraform.md) para la instalación y configuración del proveedor.

## Recursos útiles

- [Documentación pública de Cloud Temple](https://docs.cloud-temple.com/home)
- [Referencia de API](https://shiva.cloud-temple.com/api/)
- [Documentación de Terraform](../terraform/terraform.md)
- [Conceptos de zonas de disponibilidad](../additional_content/concepts_az.md)
