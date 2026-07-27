---
title: Conceptos
---

## Dos opciones son posibles

- __alojamiento físico por 'U'__ en bahía compartida y espacio compartido,
- __alojamiento dedicado por rack__ de al menos 42 'U' en espacio compartido.

La solicitud de alojamiento físico se realiza mediante __una solicitud de servicio__ que indique:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    el tipo de alojamiento deseado (compartido por 'U' o dedicado por rack)
    La cantidad deseada
    El tipo de equipo y sus características (tamaño, peso, consumo energético, disipación térmica, ...)

El equipo de soporte de Cloud Temple se pondrá en contacto con usted para finalizar la solicitud.

## Alojamiento compartido

### Alojamiento de appliances (red, firewall, ...)

El alojamiento compartido se realiza en un rack compartido entre diferentes clientes de Cloud Temple. [La segmentación](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se realiza por 'U' (unidad de rack).
Una unidad de rack mide 1,75 pulgadas (es decir, 44,45 mm) de alto. Los racks de alojamiento compartido cuentan con dos circuitos eléctricos distintos.

La masa máxima de los equipos para cada unidad de 'U' es de 25 kg. Más allá de esto, es necesario solicitar el número de 'U' que permita soportar la masa total de su equipo.

Por ejemplo, para un equipo de 34 kg, es necesario suscribirse a 2 unidades de rack.

Es posible solicitar para cada unidad de rack una o dos tomas eléctricas tipo C13 según sus necesidades.

Cada toma eléctrica está limitada a 150W a 220v por cada 'U'.

Si desea que su equipo cuente con una potencia de 1500W, en dos fuentes de alimentación, es necesario solicitar

1500 W / 150 W = 10 'U', es decir, 5 'U' (o 750 W) por circuito eléctrico.

La conectividad de red debe suscribirse en paralelo según el tipo de puerto esperado y el ancho de banda deseado, estas son las opciones posibles por puerto de red:

- Cobre 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps a través de un módulo SFP proporcionado para la conectividad en el lado de Cloud Temple.

Para estas unidades de obra, la refrigeración se realiza necesariamente desde la parte frontal del rack hacia la parte trasera, y __el dispositivo obtiene su conectividad de red en la parte frontal del rack.__

__*Nota:*__ *el compromiso mínimo es de 12 meses.*

| Referencia                                          | Unidad | SKU                                    | Compromiso |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| ALOJAMIENTO EN RACK - 1 U Compartido - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 meses    |
| ALOJAMIENTO EN RACK - 1 U Compartido - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 meses    |

### Alojamiento de servidores

Las unidades de obra __'Servidores'__ están diseñadas para adaptarse a la disipación térmica de los servidores y __proporcionan conectividad de red en la parte trasera__, simplificando las operaciones de mantenimiento y optimizando así el enfriamiento del rack.

__Son obligatorias para los servidores.__

| Referencia                                                    | Unidad | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ------ | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN RACK - 1 U Compartido - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 meses    |
| ALOJAMIENTO EN RACK - 1 U Compartido - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 meses    |

## Alojamiento dedicado

El alojamiento en rack dedicado se realiza en una zona de alojamiento compartido fuera de secnumcloud. El rack de alojamiento dedicado tiene una dimensión de al menos 42 'U' o 42 unidades de rack.
La profundidad es de 1200 milímetros, de los cuales 1000 milímetros son utilizables por los equipos. El ancho es de 600 milímetros.

Se entrega con la refrigeración necesaria, puertas de seguridad delanteras y traseras y 3 kW de energía en 2 circuitos eléctricos de 16 amperios cada uno.

Es posible solicitar incrementos adicionales de energía de 2 kW. __La masa máxima de los equipos que se pueden integrar en el rack dedicado es de 1000 kg__.

La bahía está equipada con 'PDU' (unité de distribution d'énergie) adaptados a la potencia contratada y monitorizados. Hay un 'PDU' por circuito eléctrico.

| Referencia                                                    | Unidad      | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN BAHÍA - Rack 42 U Dedicado que incluye 3 kW de energía | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 meses    |
| ENERGÍA - 2 kW complementarios                                | 2 kW       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 meses    |

### Conectividad de red para alojamiento físico

La conectividad de red debe suscribirse como complemento del alojamiento físico según el tipo de puerto esperado y el ancho de banda deseado. A continuación, se presentan las opciones posibles por puerto de red:

- Cobre 1 Gbps,
- Fibra 1 Gbps/10 Gbps a través de un módulo SFP proporcionado para la conectividad en el lado de Cloud Temple.

También es posible solicitar conectividad en la zona meet me room de los diferentes centros de datos para recibir su conectividad de operador.
Esta conectividad debe ser necesariamente de fibra óptica con velocidades de 1 Gbps o 10 Gbps.

| Referencia                                                              | Unidad    | SKU                                    | Compromiso |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RED - 1 puerto - 1 Gbps - fibra o cobre                             | 1 puerto    | csp:(region):hosting:shared:port1g:v1  | 36 meses    |
| RED - 1 puerto - 10 Gbps - fibra                                      | 1 puerto    | csp:(region):hosting:shared:port10g:v1 | 36 meses    |
| RED - Conexión de enlace privado en meet me room de una AZ - 1 puerto 1 Gbps  | 1 paquete | csp:(region):hosting:mmr:v1:1g         | 36 meses    |
| RED - Conexión de enlace privado en meet me room de una AZ - 1 puerto 10 Gbps | 1 paquete | csp:(region):hosting:mmr:v1:10g        | 36 meses    |

### Servicios 'Hands & Eyes'

Como complemento a los servicios de alojamiento físico y conectividad de red, es posible solicitar servicios profesionales de asistencia para su alojamiento físico.

Son realizados por técnicos de centro de datos o por ingenieros de Cloud Temple especializados en centros de datos.

A continuación se presentan las principales unidades de obra 'Hands & Eyes' disponibles. Están destinadas a abordar los siguientes temas:

- Acompañamiento de un interventor externo previamente identificado,
- Verificar el estado de un equipo (estado de los LED, estado de funcionamiento, ...),
- Tomar fotografías de un equipo del cliente previamente identificado,
- Presionar un contactor,
- Reiniciar el equipo,
- Conectar un terminal de acceso para el control remoto,
- Reemplazar conectores sin modificar el cableado.

| Referencia                                                                               | Unidad   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | -------- | -------------------------------- | ---------- |
| Hands & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes)                 | 1 hora | csp:(region):hosting:ho:std:v1   | 2 horas   |
| Hands & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE        | 1 hora | csp:(region):hosting:ho:fast:v1  | 30 minutos |
| Hands & Eyes datacenter - Horas no laborables (noche, fines de semana y días festivos)          | 1 hora | csp:(region):hosting:hno:std:v1  | 2 días    |
| Hands & Eyes datacenter - Horas no laborables (noche, fines de semana y días festivos) - URGENTE | 1 hora | csp:(region):hosting:hno:fast:v1 | 2 horas   |

También puede contar con un ingeniero de centro de datos de Cloud Temple para abordar los siguientes temas:

- Instalación en rack (con los equipos de protección y elevación adecuados),
- Cableado (según el plano de cableado previamente entregado),
- Modificación de cableado o desplazamiento de un equipo existente,
- Asistencia en la conectividad de red del operador.

| Referencia                                                                    | Unidad  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingeniero de Centro de Datos - Horas laborables (8h - 19h; Lunes a viernes)          | 1 acto | csp:(region):hosting:ho:std:v1  | 2 días  |
| Ingeniero de Centro de Datos - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE | 1 acto | csp:(region):hosting:ho:fast:v1 | 4 horas |

__Nota:__

- *Toda solicitud debe realizarse mediante la apertura de un ticket de intervención en la consola de Cloud Temple*,
- *En caso de solicitud urgente, llamar al servicio de guardia después de abrir el ticket de intervención en la consola de Cloud Temple*,
- *Se cobra cualquier hora iniciada.*