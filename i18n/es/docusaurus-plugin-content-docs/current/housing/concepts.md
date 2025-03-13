---
title: Conceptos
---

## Hay dos opciones disponibles

- __alojamiento físico por 'U'__ en rack compartido y espacio compartido,
- __alojamiento dedicado por rack__ de un mínimo de 42 'U' en espacio compartido.

La solicitud de alojamiento físico se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El tipo de alojamiento deseado (compartido por 'U' o dedicado por rack)
    La cantidad deseada
    El tipo de equipo y sus características (tamaño, peso, consumo energético, disipación térmica, ...)

El equipo de soporte de Cloud Temple se pondrá en contacto con usted para finalizar la solicitud.

## Alojamiento compartido

### Alojamiento de appliances (red, firewall, ...)

El alojamiento compartido se realiza en un rack compartido entre diferentes clientes de Cloud Temple. [La segmentación](https://es.wikipedia.org/wiki/Unidad_de_rack) se hace por 'U' (unidad de rack).
Una unidad de rack mide 1,75 pulgadas (o 44,45 mm) de altura. Los racks de alojamiento compartido disponen de dos cadenas eléctricas distintas.

El peso máximo de los equipos para cada unidad de 'U' es de 25 kg. Por encima de este peso, es necesario solicitar el número de 'U' que permita soportar el peso total de su equipo.

Por ejemplo, para un equipo de 34 kg, es necesario suscribirse a 2 unidades de rack.

Para cada unidad de rack, es posible solicitar una o dos tomas eléctricas tipo C13 según sus necesidades.

Cada toma eléctrica está limitada a 150W a 220v para cada 'U'.

Si desea que su equipo disponga de una potencia de 1500W, en dos fuentes de alimentación, es necesario solicitar:

1500 W / 150 W = 10 'U', o 5 'U' (o 750 W) por cadena eléctrica.

La conectividad de red debe suscribirse por separado según el tipo de puerto requerido y el ancho de banda deseado. Estas son las opciones posibles por puerto de red:

- Cobre 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps a través de un módulo SFP proporcionado para la conectividad del lado de Cloud Temple.

Para estas unidades de trabajo, la refrigeración se realiza necesariamente desde la parte frontal del rack hacia la parte trasera, y __el appliance toma su conectividad de red desde la parte frontal del rack.__

__*Nota:*__ *el compromiso mínimo es de 12 meses.*

| Referencia                                          | Unidad | SKU                                    | Compromiso |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| ALOJAMIENTO EN RACK - 1 U Compartido - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 meses    |
| ALOJAMIENTO EN RACK - 1 U Compartido - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 meses    |

### Alojamiento de servidores

Las unidades de trabajo __'Servidores'__ están diseñadas para adaptarse a la disipación térmica de los servidores y __proporcionan conectividad de red en la parte trasera__, simplificando las operaciones de mantenimiento y optimizando así la refrigeración del rack.

__Son obligatorias para los servidores.__

| Referencia                                                    | Unidad | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN RACK - 1 U Compartido - Servidor - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 meses    |
| ALOJAMIENTO EN RACK - 1 U Compartido - Servidor - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 meses    |

## Alojamiento dedicado

El alojamiento en rack dedicado se realiza en una zona de alojamiento compartido fuera de secnumcloud. El rack de alojamiento dedicado tiene una dimensión mínima de 42 'U' o 42 unidades de rack.
La profundidad es de 1200 milímetros, de los cuales 1000 milímetros son utilizables por los equipos. El ancho es de 600 milímetros.

Se entrega con la refrigeración necesaria, puertas seguras delanteras y traseras, y 3 kW de energía en 2 cadenas eléctricas de 16 amperios cada una.

Es posible solicitar niveles de energía adicionales en incrementos de 2 kW. __El peso máximo de los equipos que se pueden integrar en el rack dedicado es de 1000 kg__.

El rack está equipado con 'PDU' (unidades de distribución de energía) adaptadas a la potencia suscrita y monitorizadas. Hay una 'PDU' por cadena eléctrica.

| Referencia                                                    | Unidad      | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN RACK - Rack 42 U Dedicado incluyendo 3 kW de energía | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 meses    |
| ENERGÍA - 2 kW adicionales                                | 2 kW       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 meses    |

### Conectividad de red para alojamiento físico

La conectividad de red debe suscribirse además del alojamiento físico según el tipo de puerto requerido y el ancho de banda deseado. Estas son las opciones posibles por puerto de red:

- Cobre 1Gbps,
- Fibra 1Gbps/10Gbps a través de un módulo SFP proporcionado para la conectividad del lado de Cloud Temple.

También es posible solicitar conectividad en la zona de meet-me room de los diferentes centros de datos para recibir su conectividad de operador.
Esta conectividad es necesariamente en fibra óptica a velocidades de 1 Gbps o 10 Gbps.

| Referencia                                                              | Unidad     | SKU                                    | Compromiso |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RED - 1 puerto - 1 Gbps - fibra o cobre                             | 1 puerto    | csp:(region):hosting:shared:port1g:v1  | 36 meses    |
| RED - 1 puerto - 10 Gbps - fibra                                      | 1 puerto    | csp:(region):hosting:shared:port10g:v1 | 36 meses    |
| RED - Conexión de enlace privado en meet-me room de una AZ - 1 puerto 1Gbps  | 1 paquete | csp:(region):hosting:mmr:v1:1g         | 36 meses    |
| RED - Conexión de enlace privado en meet-me room de una AZ - 1 puerto 10Gbps | 1 paquete | csp:(region):hosting:mmr:v1:10g        | 36 meses    |

### Servicios 'Hands & Eyes'

Además de los servicios de alojamiento físico y conectividad de red, es posible solicitar servicios profesionales de asistencia para su alojamiento físico.

Son operados por técnicos de centro de datos o por ingenieros de Cloud Temple especializados en centros de datos.

Aquí están las principales unidades de trabajo 'Hands & Eyes' disponibles. Tienen como objetivo abordar los siguientes temas:

- Acompañamiento de un interventor externo previamente identificado,
- Verificación del estado de un equipo (estado de los LEDs, estado de funcionamiento, ...),
- Toma de fotos de un equipo de cliente previamente identificado,
- Presionar un interruptor,
- Reiniciar el equipo,
- Conectar un terminal de acceso para control remoto,
- Reemplazar conectores sin modificar el cableado.

| Referencia                                                                               | Unidad   | SKU                              | Tiempo de respuesta |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hand's & Eyes centro de datos - Horario laboral (8h - 19h; Lunes a viernes)                 | 1 hora | csp:(region):hosting:ho:std:v1   | 2 horas   |
| Hand's & Eyes centro de datos - Horario laboral (8h - 19h; Lunes a viernes) - URGENTE        | 1 hora | csp:(region):hosting:ho:fast:v1  | 30 minutos |
| Hand's & Eyes centro de datos - Horario no laboral (noche, fin de semana y días festivos)          | 1 hora | csp:(region):hosting:hno:std:v1  | 2 días    |
| Hand's & Eyes centro de datos - Horario no laboral (noche, fin de semana y días festivos) - URGENTE | 1 hora | csp:(region):hosting:hno:fast:v1 | 2 horas   |

También puede beneficiarse de un ingeniero de centro de datos de Cloud Temple para abordar los siguientes temas:

- Montaje en rack (con los equipos de protección y elevación adecuados),
- Cableado (según el plan de cableado previamente entregado),
- Modificación de cableado o reubicación de un equipo existente,
- Asistencia con la conectividad de red del operador.

| Referencia                                                                    | Unidad  | SKU                             | Tiempo de respuesta |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingeniero de Centro de Datos - Horario laboral (8h - 19h; Lunes a viernes)          | 1 acto | csp:(region):hosting:ho:std:v1  | 2 días  |
| Ingeniero de Centro de Datos - Horario laboral (8h - 19h; Lunes a viernes) - URGENTE | 1 acto | csp:(region):hosting:ho:fast:v1 | 4 horas |

__Nota:__

- *Toda solicitud debe pasar por la apertura de un expediente de intervención en la consola Cloud Temple*,
- *En caso de solicitud urgente, llamar al servicio de guardia después de abrir el expediente de intervención en la consola Cloud Temple*,
- *Toda hora comenzada se factura.*
