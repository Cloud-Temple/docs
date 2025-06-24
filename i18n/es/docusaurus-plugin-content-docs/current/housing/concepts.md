---
title: Conceptos
---

## Dos opciones son posibles

- __hospedaje físico en 'U'__ en baía compartida y espacio compartido,
- __hospedaje dedicado por rack__ de al menos 42 'U' en espacio compartido.

La solicitud de hospedaje físico se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    el tipo de hospedaje deseado (compartido en 'U' o dedicado en rack)
    la cantidad deseada
    el tipo de equipo y sus características (tamaño, peso, consumo energético, disipación térmica, ...)

El equipo de soporte Cloud Temple se pondrá en contacto con usted para finalizar la solicitud.

## Hospedaje compartido

### Hospedaje de appliances (red, firewall, ...)

El hospedaje compartido se realiza en un rack compartido entre diferentes clientes Cloud Temple. [La segmentación](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se hace en 'U' (unidad de rack).
Una unidad de rack mide 1,75 pulgadas (es decir, 44,45 mm) de alto. Los racks de hospedaje compartido disponen de dos cadenas eléctricas distintas.

La masa máxima de los equipos por unidad de 'U' es de 25Kg. Por encima de este límite, es necesario solicitar el número de 'U' que permita soportar la masa total de su equipo.

Por ejemplo, para un equipo de 34 Kg, es necesario suscribirse a 2 unidades de rack.

Es posible solicitar, para cada unidad de rack, una o dos tomas eléctricas tipo C13 según sus necesidades.

Cada toma eléctrica está limitada a 150W a 220v por 'U'.

Si desea que su equipo disponga de una potencia de 1500W, en dos fuentes de alimentación, es necesario solicitar

1500 W / 150 W = 10 'U', es decir, 5 'U' (o 750 W) por cadena eléctrica.

La conectividad de red se debe suscribir en paralelo por tipo de puerto esperado y ancho de banda deseado, aquí están las opciones posibles por puerto de red:

- Cobre 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps mediante un módulo SFP proporcionado para la conectividad del lado de Cloud Temple.

Para estas unidades de obra, el enfriamiento se realiza necesariamente desde la cara delantera de la baía, hacia la cara trasera, y __el appliance obtiene su conectividad de red por la cara delantera de la baía.__

__*Nota:*__ *el compromiso mínimo es de 12 meses.*

| Referencia                                          | Unidad | SKU                                    | Compromiso |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| HOSPEDAJE EN BAÍA - 1 U Compartido - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 meses    |
| HOSPEDAJE EN BAÍA - 1 U Compartido - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 meses    |

### Hospedaje de servidores

Las unidades de obra __'Servidores'__ están previstas para adaptarse a la disipación térmica de los servidores y __proporcionan conectividad de red por la cara trasera__, simplificando las operaciones de mantenimiento y optimizando así el enfriamiento de la baía.

__Son obligatorias para los servidores.__

| Referencia                                                    | Unidad | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| HOSPEDAJE EN BAÍA - 1 U Compartido - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 meses    |
| HOSPEDAJE EN BAÍA - 1 U Compartido - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 meses    |

## Hospedaje dedicado

El hospedaje en rack dedicado se realiza en zona de hospedaje compartida fuera de secnumcloud. El rack de hospedaje dedicado tiene una dimensión mínima de 42 'U' o 42 unidades de rack.
La profundidad es de 1200 milímetros, de los cuales 1000 milímetros son utilizables por los equipos. El ancho es de 600 milímetros.

Viene con el enfriamiento necesario, puertas seguras delantera y trasera y 3 Kw de energía en 2 cadenas eléctricas de 16 amperios cada una.

Es posible solicitar niveles adicionales de energía por 2Kw. __La masa máxima de los equipos integrables en el rack dedicado es de 1000kg__.

La baía está equipada con 'PDU' (unidad de distribución de energía) adaptados a la potencia suscrita y monitorizados. Hay un 'PDU' por cadena eléctrica.

| Referencia                                                    | Unidad      | SKU                                        | Compromiso |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| HOSPEDAJE EN BAÍA - Rack 42 U Dedicado incluyendo 3Kw de energía | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 meses    |
| ENERGÍA - 2 Kw adicional                                     | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 meses    |

### Conectividad de red para el hospedaje físico

La conectividad de red se debe suscribir en complemento del hospedaje físico por tipo de puerto esperado y ancho de banda deseado, aquí están las opciones posibles por puerto de red:

- Cobre 1Gbps,
- Fibra 1Gbps/10Gbps mediante un módulo SFP proporcionado para la conectividad del lado de Cloud Temple.

También es posible solicitar una conectividad en la zona meet me room de los diferentes datacenters para recibir su conectividad operador.
Esta conectividad es necesariamente en fibra óptica en velocidades de 1Gbps o 10GBps.

| Referencia                                                              | Unidad     | SKU                                    | Compromiso |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| RED - 1 puerto - 1 Gbps - fibra o cobre                             | 1 puerto    | csp:(region):hosting:shared:port1g:v1  | 36 meses    |
| RED - 1 puerto - 10 Gbps - fibra                                      | 1 puerto    | csp:(region):hosting:shared:port10g:v1 | 36 meses    |
| RED - Conexión enlace privado en meet me room de una AZ - 1 puerto 1Gbps  | 1 paquete | csp:(region):hosting:mmr:v1:1g         | 36 meses    |
| RED - Conexión enlace privado en meet me room de una AZ - 1 puerto 10Gbps | 1 paquete | csp:(region):hosting:mmr:v1:10g        | 36 meses    |

### Servicios 'Hands & Eyes'

Como complemento a los servicios de hospedaje físico y conectividad de red, es posible solicitar servicios profesionales de asistencia para su hospedaje físico.

Estos servicios son operados por los técnicos del datacenter o por los ingenieros especializados en datacenter de Cloud Temple.

Aquí están las principales unidades de obra 'Hands & Eyes' disponibles. Estas buscan abordar los siguientes temas:

- Asistencia de un tercero identificado previamente,
- Verificación de un estado en un equipo (estado de las luces LED, estado de funcionamiento, ...),
- Tomar fotos de un equipo del cliente identificado previamente,
- Presionar un interruptor,
- Reiniciar el equipo,
- Conectar un terminal de acceso para control remoto,
- Reemplazar una conexión sin modificar el cableado.

| Referencia                                                                               | Unidad   | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hands & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes)                 | 1 hora | csp:(region):hosting:ho:std:v1   | 2 horas   |
| Hands & Eyes datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE        | 1 hora | csp:(region):hosting:ho:fast:v1  | 30 minutos |
| Hands & Eyes datacenter - Horas no laborables (noche, fin de semana y días festivos)          | 1 hora | csp:(region):hosting:hno:std:v1  | 2 días    |
| Hands & Eyes datacenter - Horas no laborables (noche, fin de semana y días festivos) - URGENTE | 1 hora | csp:(region):hosting:hno:fast:v1 | 2 horas   |

También puede beneficiarse de un ingeniero del datacenter de Cloud Temple para abordar los siguientes temas:

- Racking (con los equipos de protección y elevación adecuados),
- Cableado (según el plan de cableado previamente proporcionado),
- Modificación del cableado o desplazamiento de un equipo existente,
- Asistencia para la conectividad de red del operador.

| Referencia                                                                    | Unidad  | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Ingeniero Datacenter - Horas laborables (8h - 19h; Lunes a viernes)          | 1 acto | csp:(region):hosting:ho:std:v1  | 2 días  |
| Ingeniero Datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE | 1 acto | csp:(region):hosting:ho:fast:v1 | 4 horas |

__Nota:__

- *Toda solicitud debe pasar por la apertura de un caso de intervención en la consola Cloud Temple*,
- *En caso de solicitud urgente, llamar al servicio de guardia después de abrir el caso de intervención en la consola Cloud temple*,
- *Toda hora iniciada es debida.*