---
title: Preguntas frecuentes
sidebar_position: 4
---

# FAQ de instancias de VM

## ¿Qué es un flavor personalizado?

Un **flavor personalizado** es una plantilla de recursos personalizada para una VM. Permite
definir el número de **vCPU** y la cantidad de **RAM** según las
necesidades de la carga de trabajo.

Los límites y combinaciones realmente disponibles son los expuestos en
la Consola Cloud Temple.

Para más detalles, consulte la página [Conceptos](./concepts).

## ¿Cuál es la diferencia entre una plantilla y un sabor?

La **plantilla** corresponde a la imagen utilizada para desplegar el sistema
operativo o la appliance. El **sabor** corresponde a los recursos asignados
a la VM, en particular el número de vCPU y la cantidad de RAM.

Durante el despliegue, la plantilla y el sabor se seleccionan por separado.

## ¿Se pueden modificar los recursos de una VM existente?

La documentación confirma que los parámetros **CPU** y **RAM** pueden ser
modificados cuando la VM está apagada.

Las condiciones exactas aplicables al cambio de un flavor predeterminado a un flavor
personalizado, así como al cambio de familia de instancia, deben verificarse
en la Consola Cloud Temple antes de cualquier compromiso.

Consulte el [guide de démarrage](./quickstart).

## ¿Está incluida la replicación automática de una VM entre zonas de disponibilidad?

No. La replicación de VM no está incluida de forma predeterminada en VM Instances. Su
estudio está previsto para el segundo semestre de 2026.

La elección de una zona de disponibilidad durante el despliegue no constituye, por lo tanto, una
replicación automática de la VM.