---
title: Conceptos
---

## Dos opciones están disponibles

- __alojamiento físico por 'U'__ en rack compartido y espacio compartido,
- __alojamiento dedicado por rack__ de al menos 42 'U' en espacio compartido.

Los pedidos de Housing admitidos están disponibles en el módulo __Pedidos (Order)__ de la consola Cloud Temple: reserva de espacio, instalación y retirada de rack, asistencia técnica, smart hands y cableado/descableado. Para las operaciones no admitidas por la consola, contacte con el soporte. La solicitud debe especificar, entre otros aspectos:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y n.º de teléfono para finalizar la configuración
    El nombre del tenant
    el tipo de alojamiento deseado (mutualisé au 'U' ou dédié au rack)
    La cantidad deseada
    El tipo de equipo y sus características (taille, poid, consommation energetique, dégagement thermique, ...)

El equipo de soporte de Cloud Temple se pondrá en contacto con usted para finalizar la solicitud.

## Alojamiento compartido

### Alojamiento de appliances (red, firewall, ...)

El alojamiento compartido se realiza en un rack compartido entre diferentes clientes de Cloud Temple. [La segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se realiza al 'U' (unité de rack).
Una unidad de rack mide 1,75 pulgadas (es decir, 44,45 mm) de altura. Los racks de alojamiento compartido disponen de dos cadenas eléctricas distintas.

La masa máxima de los equipos para cada unidad de 'U' es de 25 kg. Más allá de este límite, es necesario solicitar el número de 'U' que permita soportar la masa total de su equipo.

Por ejemplo, para un equipo de 34 kg, es necesario suscribirse a 2 unidades de rack.

Es posible solicitar para cada unidad de rack una o dos tomas eléctricas tipo C13 en función de sus necesidades.

Cada toma eléctrica está limitada a 150 W a 220 V para cada 'U'.

Si desea que su equipo disponga de una potencia de 1500 W, en dos fuentes de alimentación, es necesario solicitar

1500 W / 150 W = 10 'U', es decir, 5 'U' (ou 750 W) por cadena eléctrica.

La conectividad de red debe suscribirse en paralelo según el tipo de puerto esperado y el ancho de banda deseado; a continuación, se presentan las opciones posibles por puerto de red:

- Cobre `100MBps/1Gbps`,
- Fibra 1Gbps/10Gbps mediante un módulo SFP proporcionado para la conectividad por parte de Cloud Temple.

Para estas unidades de obra, el enfriamiento se realiza necesariamente desde la parte frontal del gabinete hacia la parte trasera, y __el appliance recibe su conectividad de red por la parte frontal del gabinete.__

__*Nota:*__ *el compromiso mínimo es de 12 meses.*

| Referencia                                          | Unidad | SKU                                    | Plazo |
| -------------------------------------------------- | ------ | -------------------------------------- | ----- |
| ALOJAMIENTO EN GABINETE - 1 U Compartido - 150W (1 C13) | 1 U    | csp:(region):hosting:shared:basic:v1   | 12 meses |
| ALOJAMIENTO EN GABINETE - 1 U Compartido - 300W (2 C13) | 1 U    | csp:(region):hosting:shared:premium:v1 | 12 meses |

### Alojamiento de servidores

Las unidades de obra __'Servidores'__ están diseñadas para adaptarse a la disipación térmica de los servidores y __proporcionan conectividad de red en la parte trasera__, simplificando las operaciones de mantenimiento y optimizando así el enfriamiento de la bahía.

__Son obligatorias para los servidores.__

| Referencia                                                   | Unidad | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ------ | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN BAÍA - 1 U Compartido - Servidor - 400 W (2 C19) | 2 U    | csp:(region):hosting:shared:srv:basic:v1   | 12 meses   |
| ALOJAMIENTO EN BAÍA - 1 U Compartido - Servidor - 800 W (2 C19) | 2 U    | csp:(region):hosting:shared:srv:premium:v1 | 12 meses   |

## Alojamiento dedicado

El alojamiento en rack dedicado se realiza en una zona de alojamiento compartido fuera de secnumcloud. El rack de alojamiento dedicado tiene unas dimensiones de al menos 42 'U' o 42 unidades de rack.
La profundidad es de 1200 milímetros, de los cuales 1000 milímetros son utilizables por el equipo. El ancho es de 600 milímetros.

Se entrega con el sistema de refrigeración necesario, las puertas de seguridad delanteras y traseras, y 3 Kw de energía en 2 cadenas eléctricas de 16 amperios cada una.

Es posible solicitar incrementos adicionales de energía de 2Kw. __La masa máxima del equipo instalable en el rack dedicado es de 1000kg__.

El bastidor está equipado con 'PDU' (unité de distribution d'énergie) adaptados a la potencia contratada y monitorizados. Hay un 'PDU' por cada cadena eléctrica.

| Referencia                                                   | Unidad     | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN RACK - Rack 42 U Dedicado que incluye 3Kw de energía | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 meses   |
| ENERGÍA - 2 Kw complementarios                               | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 meses   |

### Conectividad de red para alojamiento físico

La conectividad de red debe suscribirse como complemento del alojamiento físico, en función del tipo de puerto esperado y del ancho de banda deseado; a continuación se detallan las opciones posibles por puerto de red:

- Cobre 1 Gbps,
- Fibra 1 Gbps/10 Gbps mediante un módulo SFP proporcionado para la conectividad por parte de Cloud Temple.

También es posible solicitar conectividad en la zona meet me room de los distintos centros de datos para recibir su conectividad de operador.
Esta conectividad debe ser necesariamente por fibra óptica con velocidades de 1 Gbps o 10 GBps.

| Referencia                                                              | Unidad     | SKU                                    | Compromiso |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RED - 1 puerto - 1 Gbps - fibra o cobre                             | 1 puerto    | csp:(region):hosting:shared:port1g:v1  | 36 meses    |
| RED - 1 puerto - 10 Gbps - fibra                                      | 1 puerto    | csp:(region):hosting:shared:port10g:v1 | 36 meses    |
| RED - Conexión de enlace privado en meet me room de una AZ - 1 puerto 1 Gbps  | 1 paquete | csp:(region):hosting:mmr:v1:1g         | 36 meses    |
| RED - Conexión de enlace privado en meet me room de una AZ - 1 puerto 10 Gbps | 1 paquete | csp:(region):hosting:mmr:v1:10g        | 36 meses    |

### Servicios 'Hands & Eyes'

Además de los servicios de alojamiento físico y conectividad de red, es posible solicitar servicios profesionales de asistencia para su alojamiento físico.

Son operados por los técnicos de datacenter o por los ingenieros de Cloud Temple especializados en datacenter.

A continuación se presentan las principales unidades de obra 'Hands & Eyes' disponibles. Están destinadas a tratar los siguientes temas:

- Acompañamiento de un técnico externo previamente identificado,
- Verificación del estado de un equipo (estado de los LEDs, estado de funcionamiento, ...),
- Toma de fotos de un equipo cliente previamente identificado,
- Pulsación de un interruptor,
- Reinicio del equipo,
- Conexión de un terminal de acceso para toma de control remoto,
- Reemplazo de un conector sin modificación del cableado.

| Referencia | Unidad | SKU | GTI |
| --- | --- | --- | --- |
| Hand's & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes) | 1 hora | csp:(region):hosting:ho:std:v1 | 2 horas |
| Hand's & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE | 1 hora | csp:(region):hosting:ho:fast:v1 | 30 minutos |
| Hand's & Eyes datacenter - Horas no laborables (noche, fines de semana y festivos) | 1 hora | csp:(region):hosting:hno:std:v1 | 2 días |
| Hand's & Eyes datacenter - Horas no laborables (noche, fines de semana y festivos) - URGENTE | 1 hora | csp:(region):hosting:hno:fast:v1 | 2 horas |

También puede contar con un ingeniero de datacenter de Cloud Temple para tratar los siguientes temas:

- Racking (con los equipos de protección y elevación adecuados),
- Cableado (según el plano de cableado previamente entregado),
- Modificación del cableado o desplazamiento de un equipo existente,
- Asistencia en la conectividad de red del operador.

| Referencia | Unidad | SKU | GTI |
| --- | --- | --- | --- |
| Ingeniero Datacenter - Horas laborables (8h - 19h; Lunes a viernes) | 1 acto | csp:(region):hosting:ho:std:v1 | 2 días |
| Ingeniero Datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE | 1 acto | csp:(region):hosting:ho:fast:v1 | 4 horas |

__Nota :__

- *Toda solicitud debe realizarse mediante la apertura de un expediente de intervención en la consola Cloud Temple*,
- *En caso de solicitud urgente, llamar al servicio de guardia después de abrir el expediente de intervención en la consola Cloud Temple*,
- *Toda hora iniciada se debe.*