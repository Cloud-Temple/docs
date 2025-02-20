---
title: Concepts
---

## Dos opciones son posibles: 

- __alojamiento físico en 'U'__ en rack compartido y espacio compartido,
- __alojamiento dedicado por rack__ de al menos 42 'U' en espacio compartido.

La solicitud de alojamiento físico se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo y n.º de teléfono para finalizar la configuración
    El nombre del tenant
    el tipo de alojamiento deseado (compartido en 'U' o dedicado en rack)
    La cantidad deseada
    El tipo de equipo y sus características (tamaño, peso, consumo energético, disipación térmica, ...)

El equipo de soporte de Cloud Temple se pondrá en contacto con usted para finalizar la solicitud.

## Alojamiento compartido

### Alojamiento de appliances (red, firewall, ...)

El alojamiento compartido se realiza en un rack compartido entre diferentes clientes de Cloud Temple. [La segmentación](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se hace en 'U' (unidad de rack).
Una unidad de rack mide 1,75 pulgadas (es decir, 44,45 mm) de alto. Los racks de alojamiento compartidos disponen de dos cadenas eléctricas distintas.

La masa máxima del equipo para cada unidad de 'U' es de 25Kg. Más allá de este peso, es necesario solicitar el número de 'U' que permita soportar la masa total de su equipo.

Por ejemplo, para un equipo de 34 Kg, es necesario suscribir 2 unidades de rack.

Es posible para cada unidad de rack solicitar una o dos tomas eléctricas tipo C13 según sus necesidades.

Cada toma eléctrica está limitada a 150W bajo 220v para cada 'U'. 

Si desea que su equipo tenga una potencia de 1500W, en dos alimentaciones, es necesario solicitar 

1500 W / 150 W = 10 'U', es decir, 5 'U' (o 750 W) por cadena eléctrica.

La conectividad de red debe suscribirse en paralelo según el tipo de puerto esperado y el ancho de banda deseado. Aquí están las opciones posibles por puerto de red:

- Cobre 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps a través de un módulo SFP proporcionado para la conectividad del lado de Cloud Temple.

Para estas unidades de obra, la refrigeración se realiza necesariamente desde la parte frontal del rack hacia la parte trasera, y **el appliance toma su conectividad de red desde la parte frontal del rack.**

__*Nota:*__ *el compromiso mínimo es de 12 meses.*

| Referencia                                         | Unidad | SKU                                    | Compromiso |
| -------------------------------------------------- | ------ | -------------------------------------- | ---------- |
| ALOJAMIENTO EN RACK - 1 U Compartido - 150W (1 C13) | 1 U    | csp:(region):hosting:shared:basic:v1   | 12 meses   |
| ALOJAMIENTO EN RACK - 1 U Compartido - 300W (2 C13) | 1 U    | csp:(region):hosting:shared:premium:v1 | 12 meses   |

### Alojamiento de servidores

Las unidades de obra **'Servidores'** están diseñadas para adaptarse a la disipación de calor de los servidores y **proporcionar conectividad de red en la parte trasera**, simplificando las operaciones de mantenimiento y optimizando así la refrigeración del rack. 

**Son obligatorias para los servidores.**

| Referencia                                                     | Unidad | SKU                                        | Compromiso |
| -------------------------------------------------------------- | ------ | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN RACK - 1 U Compartido - Servidor - 400 W (2 C19) | 2 U    | csp:(region):hosting:shared:srv:basic:v1   | 12 meses   |
| ALOJAMIENTO EN RACK - 1 U Compartido - Servidor - 800 W (2 C19) | 2 U    | csp:(region):hosting:shared:srv:premium:v1 | 12 meses   |


## Alojamiento dedicado

El alojamiento en rack dedicado se realiza en una zona de alojamiento compartido fuera de secnumcloud. El rack de alojamiento dedicado tiene unas dimensiones de al menos 42 'U' o 42 unidades de rack.
La profundidad es de 1200 milímetros de los cuales 1000 milímetros son utilizables por los equipos. El ancho es de 600 milímetros.

Se entrega con la refrigeración necesaria, puertas seguras delanteras y traseras y 3 Kw de energía en 2 cadenas eléctricas de 16 amperios cada una.

Es posible pedir niveles adicionales de energía por 2Kw. __La masa máxima de los equipos integrables en el rack dedicado es de 1000kg__.

El rack está equipado con 'PDU' (unidad de distribución de energía) adaptados a la potencia suscrita y monitorizados. Hay un 'PDU' por cadena eléctrica.

| Referencia                                                     | Unidad      | SKU                                        | Compromiso |
| -------------------------------------------------------------- | ----------- | ------------------------------------------ | ---------- |
| ALOJAMIENTO EN RACK - Rack 42 U Dedicado incluyendo 3Kw de energía | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 meses   |
| ENERGÍA - 2 Kw complementarios                                 | 2 Kw        | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 meses   |

### Conectividad de red para el alojamiento físico

La conectividad de red debe suscribirse además del alojamiento físico según el tipo de puerto esperado y el ancho de banda deseado. Aquí están las opciones posibles por puerto de red:

- Cobre 1Gbps,
- Fibra 1Gbps/10Gbps a través de un módulo SFP proporcionado para la conectividad del lado de Cloud Temple.

También es posible solicitar una conectividad en la zona meet me room de los diferentes centros de datos para recibir su conectividad de operador.
Esta conectividad debe ser necesariamente en fibra óptica con velocidades de 1Gbps o 10GBps.

| Referencia                                                               | Unidad     | SKU                                    | Compromiso |
| ------------------------------------------------------------------------ | ---------- | -------------------------------------- | ---------- |
| RED - 1 puerto - 1 Gbps - fibra o cobre                                  | 1 puerto   | csp:(region):hosting:shared:port1g:v1  | 36 meses   |
| RED - 1 puerto - 10 Gbps - fibra                                         | 1 puerto   | csp:(region):hosting:shared:port10g:v1 | 36 meses   |
| RED - Conexión enlace privado en meet me room de una AZ - 1 puerto 1Gbps | 1 paquete  | csp:(region):hosting:mmr:v1:1g         | 36 meses   |
| RED - Conexión enlace privado en meet me room de una AZ - 1 puerto 10Gbps | 1 paquete  | csp:(region):hosting:mmr:v1:10g        | 36 meses   |

### Servicios 'Hands & Eyes'

Además de los servicios de alojamiento físico y conectividad de red, es posible solicitar servicios profesionales de asistencia para su alojamiento físico.

Son operados por los técnicos del centro de datos o por los ingenieros especializados en centros de datos de Cloud Temple.

Aquí están las principales unidades de obra 'Hands & Eyes' disponibles. Están destinadas a tratar los siguientes temas:

- Acompañamiento de un interventor externo previamente identificado,
- Verificar el estado de un equipo (estado de los LEDS, estado de funcionamiento, ...),
- Tomar fotos de un equipo del cliente previamente identificado,
- Presionar un contacto,
- Reiniciar el equipo,
- Conectar un terminal de acceso para control remoto,
- Reemplazar una conexión sin modificar el cableado.

| Referencia                                                                               | Unidad   | SKU                              | TMG        |
| --------------------------------------------------------------------------------------- | -------- | -------------------------------- | ---------- |
| Hand's & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes)                  | 1 hora   | csp:(region):hosting:ho:std:v1   | 2 horas    |
| Hand's & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE        | 1 hora   | csp:(region):hosting:ho:fast:v1  | 30 minutos |
| Hand's & Eyes datacenter - Horas no laborables (noche, fin de semana y días festivos)    | 1 hora   | csp:(region):hosting:hno:std:v1  | 2 días     |
| Hand's & Eyes datacenter - Horas no laborables (noche, fin de semana y días festivos) - URGENTE | 1 hora   | csp:(region):hosting:hno:fast:v1 | 2 horas    |

También puede solicitar un ingeniero de centro de datos de Cloud Temple para tratar los siguientes temas:

- Montaje en rack (con los equipos de protección y elevación adecuados),
- Cableado (según el plan de cableado previamente entregado),
- Modificación de cableado o desplazamiento de un equipo existente,
- Asistencia con la conectividad de red del operador.

| Referencia                                                                    | Unidad  | SKU                             | TMG      |
| ----------------------------------------------------------------------------- | ------- | ------------------------------- | -------- |
| Ingeniero de Centro de Datos - Horas laborables (8h - 19h; Lunes a viernes)   | 1 acto  | csp:(region):hosting:ho:std:v1  | 2 días   |
| Ingeniero de Centro de Datos - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE  | 1 acto  | csp:(region):hosting:ho:fast:v1 | 4 horas  |

__Nota:__

- *Toda solicitud debe hacerse mediante la apertura de un expediente de intervención en la consola de Cloud Temple*,
- *En caso de solicitud urgente, llame al servicio de guardia después de abrir el expediente de intervención en la consola de Cloud Temple*,
- *Toda hora iniciada se debe pagar.*