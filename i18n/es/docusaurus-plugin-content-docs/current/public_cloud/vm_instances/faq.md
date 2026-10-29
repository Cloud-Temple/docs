---
title: Preguntas frecuentes
sidebar_position: 4
---

# FAQ Instancias VM

## ¿Qué son las cuotas de Instancias VM?

Las **cuotas** definen la cantidad máxima de recursos que su tenant
puede utilizar para sus Instancias VM. Se establecen tres límites:

| Cuota | Recurso contabilizado |
|---|---|
| **vCPU** | Número total de procesadores virtuales asignados a las instancias del tenant. |
| **RAM** | Cantidad total de memoria asignada a las instancias del tenant. |
| **Almacenamiento** | Capacidad total aprovisionada para los discos de sistema y los discos adicionales. |

Estos límites se comparten entre las instancias del tenant. Se refieren a los
recursos configurados: una VM con **4 vCPU** cuenta como 4 vCPU en el
cálculo, incluso si sus aplicaciones utilizan poco procesador. El almacenamiento
se contabiliza según la capacidad aprovisionada de los discos, independientemente
del espacio realmente ocupado por los archivos.

Cada cuota es independiente: disponer de vCPU disponibles no permite
superar el límite de RAM o de almacenamiento.

Por ejemplo, con una cuota de **20 vCPU**, si sus instancias ya contabilizan
**16**, puede solicitar **4 vCPU adicionales**, sujeto a las
cuotas de memoria y almacenamiento y a la capacidad disponible.

Cuando una operación provocaría el excedente de una cuota, se deniega.
Esto ocurre, en particular, durante la creación de una VM, el aumento de sus
recursos o la adición de almacenamiento.

Puede consultar sus límites y su utilización en la **Consola
Cloud Temple**. Una cuota autoriza un consumo máximo; no constituye
una reserva de capacidad física. Para una instancia no reservada, la
creación o el reinicio sigue sujeto a la capacidad disponible.

## ¿Cómo aumentar sus cuotas?

Para aumentar sus cuotas de Instancias VM, abra una **solicitud de soporte
Cloud Temple** especificando el tenant concernido, los nuevos límites deseados
en vCPU, RAM y almacenamiento, así como su necesidad.

## ¿Cuál es la relación entre cuotas y facturación?

Las cuotas definen sus **límites autorizados**. La facturación depende de los
recursos utilizados y de los servicios contratados: el límite de cuota no
corresponde a la cantidad de recursos facturados.

Para una VM por uso, las **vCPU y la RAM configuradas se facturan cuando la
VM está encendida**, independientemente de la carga real de sus aplicaciones. La
facturación del compute es por hora, **siendo debida toda hora iniciada**.

| Recurso | VM encendida | VM apagada |
|---|---|---|
| **vCPU y RAM configuradas** | Facturadas por hora. | Facturación suspendida. |
| **Disco de sistema y discos adicionales** | Facturados por Go asignado. | Siempre facturados mientras se conserven. |
| **Almacenamiento de copia de seguridad** | Facturado según el almacenamiento consumido. | Sigue siendo facturado si las copias de seguridad se conservan. |
| **Red, tenant y soporte** | Según los servicios y suscripciones contratadas. | Según los servicios y suscripciones contratadas. |

Las **instancias reservadas** se rigen por las condiciones de su reserva.

## ¿Qué sigue siendo facturado cuando la VM está apagada?

El apagado de la VM **suspende la facturación de las vCPU y de la RAM**. No
elimina ni la VM ni sus volúmenes persistentes: el SO, los software y los
datos almacenados en estos volúmenes se conservan.

Los otros recursos y suscripciones conservados siguen siendo facturados según sus
reglas: en particular el disco de sistema, los volúmenes adicionales, el almacenamiento
de copia de seguridad conservado, los servicios de red contratados, el tenant y el soporte.
La suspensión de la facturación del compute no describe el mecanismo técnico
de liberación o reserva de los recursos físicos.

## ¿Está garantizada la capacidad al reiniciar o al crear?

Para una instancia **no reservada**, el reinicio después de un apagado y la creación
de una nueva VM están sujetos a la capacidad disponible. No hay
compromiso de recuperar un tamaño dado, incluso si ese tamaño había sido
utilizado en una campaña anterior. Destruir y luego recrear la VM no
constituye una reserva de capacidad.

Para obtener un compromiso de capacidad, es necesario suscribirse a una **instancia
reservada**, dentro del alcance y según las condiciones de la reserva.
La tarifa horaria y el carácter dedicado de las vCPU Performance no
constituyen, por sí solos, una reserva.

## ¿Es necesario suscribirse a una activación de zona de disponibilidad para VMI?

No. La suscripción a una activación AZ facturada corresponde a la oferta **IaaS**;
no es necesaria para utilizar **Instancias VM**. Sin embargo, elige
la AZ de alojamiento durante el despliegue de la VM.

El tenant es una suscripción recurrente. La activación AZ de la oferta IaaS es
también recurrente; la elección de una AZ para una VMI no desencadena esta
suscripción IaaS.

## ¿Qué soporte se necesita para un cliente directo o acompañado por un partner?

Un **cliente directo** debe suscribirse al **Soporte Standard como mínimo**,
aunque administre él mismo el SO y las aplicaciones.

El **Soporte Basic** está destinado a los clientes acompañados por un **partner
formado**. No constituye una alternativa al Soporte Standard para un
cliente directo. El alcance del partner y las condiciones del soporte son
a definir en la suscripción.

## ¿Se puede administrar una instancia en SSH sin Bastion?

Sí. Una instancia expuesta en una **IP pública** puede ser alcanzada en SSH si
el servicio SSH está configurado en el SO y si las reglas de red autorizan
el flujo. El cliente es responsable del filtrado, en particular de la restricción
a las IP de origen autorizadas, y de la configuración del acceso SSH.

El Bastion no es un requisito previo sistemático de Instancias VM. Proporciona
otra vía de administración desde la consola, sin exposición directa
de la VM a Internet. Ver los [conceptos de red](./concepts#red) y los
[conceptos Bastion](../../bastion/concepts).

## ¿Cómo realizar una prueba antes de elegir la configuración?

Puede probar una configuración de Instancias VM en **autoservicio**, sobre
sus propios software y conjuntos de datos, antes de elegir su dimensionamiento.

El **compute se factura por hora, sin compromiso mensual**. Esta
flexibilidad facilita las pruebas cortas: para una prueba de unas pocas horas, la
parte compute se calcula sobre esas horas, al tarifario habitual del servicio. Toda hora de compute iniciada es debida. A
configuración idéntica, adapta así el presupuesto de cálculo a la duración de
su prueba, de unas pocas horas a varios días.

Los otros recursos y suscripciones necesarios para la prueba, en particular el almacenamiento,
la red, el tenant y el soporte, siguen sujetos a sus propias condiciones
tarifarias. El coste total de la prueba no se limita, por tanto, al compute.

Compare el tiempo de cálculo y el pico de RAM sobre su conjunto de datos, luego
apague la VM al final de la prueba para suspender la facturación CPU/RAM. Los
volúmenes persistentes permiten conservar su entorno para el futuro.

## ¿Una lámina PERF3 suscrita al mes es una VMI?

No. Una lámina PERF3 dedicada de la oferta **IaaS Open Source** corresponde a una
suscripción IaaS distinta de Instancias VM. El compromiso de un mes de esta
referencia no debe confundirse con el consumo horario de VMI.
Consulte los [conceptos IaaS Open Source](../../iaas_opensource/concepts)
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
operativo o la appliance. El **flavor** corresponde a los recursos asignados
a la VM, en particular el número de vCPU y la cantidad de RAM.

Durante el despliegue, el template y el flavor se seleccionan por separado.

## ¿Se pueden modificar los recursos de una VM existente?

La documentación confirma que los parámetros **CPU** y **RAM** pueden ser
modificados cuando la VM está apagada.

Las condiciones exactas aplicables al paso de un flavor predefinido a un flavor
custom, así como al cambio de familia de instancia, deben ser verificadas
en la Consola Cloud Temple antes de cualquier compromiso.

Ver la [guía de inicio](./quickstart).

## ¿Se puede migrar una VM con un SO que no está disponible en la Marketplace?

Sí, una migración puede ser estudiada mediante restauración **Veeam en modo Bare Metal Recovery**. Este procedimiento permite, en particular, tratar un SO que no está propuesto en el catálogo estándar.

Para una VM restaurada desde un entorno de cliente, el soporte se refiere a la infraestructura VM. El buen funcionamiento del SO invitado, de las aplicaciones y de los agentes necesarios no está garantizado si estos no están instalados o configurados correctamente. El soporte del SO invitado es entonces limitado.

Un segundo método, mediante importación de discos **VHD/VMDK**, está en desarrollo y dirigido al **cuarto trimestre de 2026**. Permitirá crear una VM a partir de una imagen existente, pero aún no está disponible.

## ¿El disco de sistema está incluido gratuitamente?

No. Un disco de sistema se crea automáticamente con cada VM para alojar el SO, pero se trata de un recurso de almacenamiento facturado por **Go** según el [catálogo tarifario oficial Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Los recursos vCPU, RAM y almacenamiento se facturan por separado. Los volúmenes adicionales y las copias de seguridad activadas también se facturan según el catálogo aplicable.

## ¿Stormshield y FortiVM son compatibles con Instancias VM?

Sí, las appliances virtuales Stormshield y FortiVM son compatibles con la **familia Enterprise**, sujeto al cumplimiento de los requisitos técnicos y del alcance de soporte aplicable.

## ¿La replicación automática de una VM entre zonas de disponibilidad está incluida?

No. La replicación de VM no está incluida por defecto en Instancias VM. Su
estudio está previsto para el segundo semestre de 2026.

La elección de una zona de disponibilidad durante el despliegue no constituye, por tanto, una
replicación automática de la VM.
