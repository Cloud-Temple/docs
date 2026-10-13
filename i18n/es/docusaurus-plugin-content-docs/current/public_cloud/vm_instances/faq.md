---
title: Preguntas frecuentes
sidebar_position: 4
---

# FAQ Instancias VM

## ¿Qué sigue siendo facturado cuando la VM está apagada?

El apagado de la VM **suspende la facturación de las vCPU y de la RAM**. No
elimina ni la VM ni sus volúmenes persistentes: el SO, el software y los
datos almacenados en estos volúmenes se conservan.

Los demás recursos y suscripciones conservados siguen siendo facturados según
sus reglas: en particular, el disco de sistema, los volúmenes adicionales, el
almacenamiento de copia de seguridad conservado, los servicios de red
suscritos, el tenant y el soporte.
La suspensión de la facturación del compute no describe el mecanismo técnico
de liberación o de reserva de los recursos físicos.

## ¿Está garantizada la capacidad en el reinicio o en la creación?

Para una instancia **no reservada**, el reinicio tras un apagado y la creación
de una nueva VM están sujetos a la capacidad disponible. No existe
ningún compromiso de recuperar un tamaño determinado, incluso si dicho tamaño había sido
utilizado en una campaña anterior. Destruir y luego recrear la VM no
constituye una reserva de capacidad.

Para obtener un compromiso de capacidad, es necesario suscribir una **instancia
reservada**, dentro del alcance y según las condiciones de la reserva.
La tarifa horaria y el carácter dedicado de los vCPU Performance no
constituyen, por sí solos, una reserva.

## ¿Es necesario suscribir una activación de zona de disponibilidad para VMI?

No. La suscripción de una activación AZ facturada corresponde a la oferta **IaaS**;
no es necesaria para utilizar **VM Instances**. Sin embargo, usted elige
la AZ de alojamiento durante el despliegue de la VM.

El tenant es una suscripción recurrente. La activación AZ de la oferta IaaS es
también recurrente; la elección de una AZ para una VMI no desencadena esta
suscripción IaaS.

## ¿Qué soporte se requiere para un cliente directo o acompañado por un socio?

Un **cliente directo** debe suscribirse al **Soporte Standard como mínimo**,
incluso si administra él mismo el SO y las aplicaciones.

El **Soporte Basic** está destinado a los clientes acompañados por un **socio
formado**. No constituye una alternativa al Soporte Standard para un
cliente directo. El alcance del socio y las condiciones del soporte deben
definirse en la suscripción.

## ¿Se puede administrar una instancia por SSH sin Bastion?

Sí. Una instancia expuesta en una **IP pública** puede ser alcanzada por SSH si el servicio SSH está configurado en el SO y si las reglas de red permiten el flujo. El cliente es responsable del filtrado, en particular de la restricción a las IPs de origen autorizadas, y de la configuración del acceso SSH.

El Bastion no es un requisito previo sistemático de VM Instances. Proporciona otra vía de administración desde la consola, sin exposición directa de la VM a Internet. Ver los [concepts réseau](./concepts#red) y los [concepts Bastion](../../bastion/concepts).

## ¿Cómo realizar una prueba antes de elegir la configuración?

Puede probar una configuración de VM Instances en **libre-service**, con sus propios software y conjuntos de datos, antes de elegir su dimensionamiento.

El **compute se factura por hora, sin compromiso mensual**. Esta
flexibilidad facilita las pruebas cortas: para una prueba de unas pocas horas, la
parte de compute se calcula sobre esas horas, al tarifa habitual del servicio. Toda hora de compute iniciada se debe. Con
una configuración idéntica, así adapta el presupuesto de cálculo a la duración de
su prueba, de unas pocas horas a varios días.

Los demás recursos y suscripciones necesarios para la prueba, en particular el almacenamiento,
la red, el tenant y el soporte, siguen sujetos a sus propias condiciones
tarifarias. El costo total de la prueba no se limita, por lo tanto, al compute.

Compare el tiempo de cálculo y el pico de RAM en su conjunto de datos, y luego
detenga la VM al final de la prueba para suspender la facturación CPU/RAM. Los
volúmenes persistentes permiten conservar su entorno para lo que sigue.

## ¿Una lámina PERF3 suscrita al mes es una VMI?

No. Una lámina PERF3 dedicada de la oferta **IaaS Open Source** corresponde a una
suscripción IaaS distinta de VM Instances. El compromiso de un mes de esta
referencia no debe confundirse con el consumo horario de VMI.
Consulte los [concepts IaaS Open Source](../../iaas_opensource/concepts)
y el catálogo tarifario aplicable antes de comparar las ofertas.

## ¿Qué es un flavor custom?

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

Ver el [guide de démarrage](./quickstart).

## ¿Se puede migrar una VM con un SO que no está disponible en la Marketplace?

Sí, una migración puede ser estudiada mediante restauración **Veeam en modo Bare Metal Recovery**. Este procedimiento permite, entre otras cosas, tratar un SO que no se ofrece en el catálogo estándar.

Para una VM restaurada desde un entorno del cliente, el soporte se limita a la infraestructura de la VM. El correcto funcionamiento del SO invitado, de las aplicaciones y de los agentes necesarios no está garantizado si estos no están instalados o configurados correctamente. El soporte del SO invitado queda entonces limitado.

Un segundo método, mediante importación de discos **VHD/VMDK**, está en desarrollo y está previsto para el **cuarto trimestre de 2026**. Permitirá crear una VM a partir de una imagen existente, pero aún no está disponible.

## ¿Está incluido el disco del sistema de forma gratuita?

No. Se crea automáticamente un disco del sistema con cada VM para alojar el SO, pero se trata de un recurso de almacenamiento facturado por **Go** según el catálogo tarifario de VM Instances. Los recursos vCPU, RAM y almacenamiento se facturan por separado. Los volúmenes adicionales y las copias de seguridad activadas también se facturan según el catálogo aplicable.

## ¿Son compatibles Stormshield y FortiVM con VM Instances?

Sí, las appliances virtuales Stormshield y FortiVM son compatibles con la **familia Enterprise**, sujeto al cumplimiento de los prerrequisitos técnicos y del alcance de soporte aplicable.

## ¿Está incluida la replicación automática de una VM entre zonas de disponibilidad?

No. La replicación de VM no está incluida por defecto en VM Instances. Su
estudio está previsto para el segundo semestre de 2026.

La elección de una zona de disponibilidad en el despliegue no constituye, por lo tanto, una
replicación automática de la VM.