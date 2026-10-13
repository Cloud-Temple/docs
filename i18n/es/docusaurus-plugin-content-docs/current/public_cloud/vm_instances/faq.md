---
title: Preguntas frecuentes
sidebar_position: 4
---

# FAQ Instancias VM

## ¿Qué es un flavor custom ?

Un **flavor custom** es una plantilla de recursos personalizada para una VM. Permite
definir el número de **vCPU** y la cantidad de **RAM** según las
necesidades de la carga de trabajo.

Los límites y combinaciones realmente disponibles son los expuestos en
la Consola Cloud Temple.

Para más detalles, consulte la página [Concepts](./concepts).

## ¿Cuál es la diferencia entre un template y un flavor ?

El **template** corresponde a la imagen utilizada para desplegar el sistema
operativo o la appliance. El **flavor** corresponde a los recursos asignados
a la VM, en particular el número de vCPU y la cantidad de RAM.

Durante el despliegue, el template y el flavor se seleccionan por separado.

## ¿Se pueden modificar los recursos de una VM existente?

La documentación confirma que los parámetros **CPU** y **RAM** pueden modificarse cuando la VM está apagada.

Las condiciones exactas aplicables al paso de un flavor predefinido a un flavor custom, así como al cambio de familia de instancia, deben verificarse en la Console Cloud Temple antes de cualquier compromiso.

Ver la [guía de inicio](./quickstart).

## ¿Se puede migrar una VM con un SO que no está disponible en la Marketplace?

Sí, una migración puede ser estudiada mediante restauración **Veeam en modo Bare Metal Recovery**. Este procedimiento permite en particular tratar un SO que no se ofrece en el catálogo estándar.

Para una VM restaurada desde un entorno de cliente, el soporte se limita a la infraestructura de la VM. El correcto funcionamiento del SO invitado, de las aplicaciones y de los agentes necesarios no está garantizado si estos no están instalados o configurados correctamente. El soporte del SO invitado es entonces limitado.

Un segundo método, mediante importación de discos **VHD/VMDK**, está en desarrollo y está previsto para el **cuarto trimestre de 2026**. Permitirá crear una VM a partir de una imagen existente, pero aún no está disponible.

## ¿El disco del sistema está incluido gratis?

No. Un disco del sistema se crea automáticamente con cada VM para alojar el SO, pero se trata de un recurso de almacenamiento facturado por **Go** según el catálogo tarifario de VM Instances. Los recursos vCPU, RAM y almacenamiento se facturan por separado. Los volúmenes adicionales y las copias de seguridad activadas también se facturan según el catálogo aplicable.

## ¿Stormshield y FortiVM son compatibles con VM Instances?

Sí, las apliancias virtuales Stormshield y FortiVM son compatibles con la **familia Enterprise**, sujeto al cumplimiento de los prerrequisitos técnicos y del alcance de soporte aplicable.

## ¿Está incluida la replicación automática de una VM entre zonas de disponibilidad?

No. La replicación de VM no está incluida por defecto en VM Instances. Su
estudio está previsto para el segundo semestre de 2026.

La elección de una zona de disponibilidad en el despliegue no constituye, por lo
tanto, una replicación automática de la VM.