---
title: Preguntas frecuentes
sidebar_position: 4
---

# FAQ de instancias de VM

## ¿Qué sigue facturándose cuando la VM está apagada?

La detención de la VM **suspende la facturación de las vCPU y de la RAM**. No
elimina ni la VM ni sus volúmenes persistentes: el SO, el software y los
datos almacenados en estos volúmenes se conservan.

Los demás recursos y suscripciones conservados siguen facturándose según sus
reglas: en particular, el disco del sistema, los volúmenes adicionales, el
almacenamiento de copia de seguridad conservado, los servicios de red contratados, el tenant y el soporte.
La suspensión de la facturación del compute no describe el mecanismo técnico
de liberación o reserva de los recursos físicos.

## ¿Se garantiza la capacidad al reiniciar o al crear?

Para una instancia **no reservada**, el reinicio tras una detención y la creación
de una nueva VM están sujetos a la capacidad disponible. No hay
compromiso de recuperar un tamaño determinado, incluso si ese tamaño había sido
utilizado en una campaña anterior. Destruir y volver a crear la VM no
constituye una reserva de capacidad.

Para obtener un compromiso de capacidad, es necesario suscribirse a una **instancia
reservada**, dentro del ámbito y según las condiciones de la reserva.
La tarifa por hora y el carácter dedicado de las vCPU Performance no
constituyen, por sí solos, una reserva.

## ¿Es necesario suscribirse a una activación de zona de disponibilidad para VMI?

No. La suscripción a una activación de AZ facturada se refiere a la oferta **IaaS**;
no es necesaria para utilizar **VM Instances**. No obstante, usted elige
la AZ de alojamiento durante el despliegue de la VM.

El tenant es una suscripción recurrente. La activación de AZ de la oferta IaaS es
también recurrente; la elección de una AZ para una VMI no desencadena esta
suscripción IaaS.

## ¿Qué soporte se necesita para un cliente directo o acompañado por un partner?

Un **cliente directo** debe suscribirse al **Soporte Estándar como mínimo**,
incluso si administra él mismo el SO y las aplicaciones.

El **Soporte Básico** está destinado a los clientes acompañados por un **partner
formado**. No constituye una alternativa al Soporte Estándar para un
cliente directo. El ámbito del partner y las condiciones del soporte deben
definirse en la suscripción.

## ¿Se puede administrar una instancia por SSH sin Bastion?

Sí. Una instancia expuesta en una **IP pública** puede conectarse por SSH si
el servicio SSH está configurado en el SO y si las reglas de red permiten
el flujo. El cliente es responsable del filtrado, en particular de la restricción
a las IP de origen autorizadas, y de la configuración del acceso SSH.

El Bastion no es un requisito sistemático de VM Instances. Proporciona
otra vía de administración desde la consola, sin exposición directa
de la VM a Internet. Consulte los [conceptos de red](./concepts#red) y los
[conceptos de Bastion](../../bastion/concepts).

## ¿Cómo realizar una prueba antes de elegir la configuración?

Puede probar una configuración de VM Instances en **autoservicio**, con
sus propios softwares y conjuntos de datos, antes de elegir su dimensionamiento.

El **compute se factura por hora, sin compromiso mensual**. Esta
flexibilidad facilita las pruebas cortas: para una prueba de unas pocas horas, la
parte de compute se calcula sobre estas horas, a la tarifa habitual del servicio. Cualquier hora de compute iniciada es debida. Con
una configuración idéntica, adapta así el presupuesto de cálculo a la duración de
su prueba, de unas pocas horas a varios días.

Los demás recursos y suscripciones necesarios para la prueba, en particular el almacenamiento,
la red, el tenant y el soporte, siguen sujetos a sus propias condiciones
tarifarias. Por lo tanto, el coste total de la prueba no se limita al compute.

Compare el tiempo de cálculo y el pico de RAM en su conjunto de datos, y
detenga la VM al final de la prueba para suspender la facturación de CPU/RAM. Los
volúmenes persistentes permiten conservar su entorno para lo siguiente.

## ¿Es una lámina PERF3 suscrita al mes una VMI?

No. Una lámina PERF3 dedicada de la oferta **IaaS Open Source** pertenece a una
suscripción IaaS distinta de VM Instances. El compromiso de un mes de esta
referencia no debe confundirse con el consumo por hora de VMI.
Consulte los [conceptos de IaaS Open Source](../../iaas_opensource/concepts)
y el catálogo tarifario aplicable antes de comparar las ofertas.

## ¿Qué es un flavor custom?

Un **flavor custom** es una plantilla de recursos personalizada para una VM. Permite
definir el número de **vCPU** y la cantidad de **RAM** según las
necesidades de la carga de trabajo.

Los límites y combinaciones realmente disponibles son los expuestos en
la Consola Cloud Temple.

Para más detalles, consulte la página [Conceptos](./concepts).

## ¿Cuál es la diferencia entre un template y un flavor?

El **template** corresponde a la imagen utilizada para desplegar el sistema
operativo o el appliance. El **flavor** corresponde a los recursos asignados
a la VM, en particular el número de vCPU y la cantidad de RAM.

Durante el despliegue, el template y el flavor se seleccionan por separado.

## ¿Se pueden modificar los recursos de una VM existente?

La documentación confirma que los parámetros **CPU** y **RAM** pueden ser
modificados cuando la VM está apagada.

Las condiciones exactas aplicables al paso de un flavor predefinido a un flavor
custom, así como al cambio de familia de instancia, deben verificarse
en la Consola Cloud Temple antes de cualquier compromiso.

Consulte la [guía de inicio rápido](./quickstart).

## ¿Se puede migrar una VM con un SO que no está disponible en el Marketplace?

Sí, una migración puede estudiarse mediante restauración **Veeam en modo Bare Metal Recovery**. Este procedimiento permite, entre otras cosas, tratar un SO que no se ofrece en el catálogo estándar.

Para una VM restaurada desde un entorno cliente, el soporte se centra en la infraestructura VM. El correcto funcionamiento del SO invitado, de las aplicaciones y de los agentes necesarios no está garantizado si estos no están instalados o configurados correctamente. El soporte del SO invitado se limita entonces.

Un segundo método, mediante importación de discos **VHD/VMDK**, está en desarrollo y está previsto para el **cuarto trimestre de 2026**. Permitirá crear una VM a partir de una imagen existente, pero aún no está disponible.

## ¿El disco del sistema está incluido gratuitamente?

No. Se crea automáticamente un disco del sistema con cada VM para alojar el SO, pero se trata de un recurso de almacenamiento facturado por **GB** según el [catálogo tarifario oficial de Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Los recursos de vCPU, RAM y almacenamiento se facturan por separado. Los volúmenes adicionales y las copias de seguridad activadas también se facturan según el catálogo aplicable.

## ¿Son compatibles Stormshield y FortiVM con VM Instances?

Sí, los appliances virtuales Stormshield y FortiVM son compatibles con la **familia Enterprise**, sujeto al cumplimiento de los requisitos técnicos y del ámbito de soporte aplicable.

## ¿Está incluida la replicación automática de una VM entre zonas de disponibilidad?

No. La replicación de VM no está incluida por defecto en VM Instances. Su
estudio está previsto para el segundo semestre de 2026.

Por lo tanto, la elección de una zona de disponibilidad durante el despliegue no constituye una
replicación automática de la VM.
