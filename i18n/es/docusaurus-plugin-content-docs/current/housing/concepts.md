---
title: Conceptos
---

<a id="deux-options-sont-possibles"></a>

## Presentación

El Housing de Cloud Temple aloja sus equipos físicos (servidores, appliances de red, equipos de operador) en centros de datos seguros. Hay dos opciones posibles:

- **alojamiento compartido por 'U'**, en un rack compartido entre varios clientes;
- **alojamiento dedicado por rack**, de un mínimo de 42 'U', reservado a su organización.

La oferta incluye la conectividad de red hacia sus equipos y servicios de asistencia en el centro de datos.

:::info
El Housing está alojado en una zona no SecNumCloud.
:::

### Destinatarios y casos de uso

- **Equipos físicos legacy**: alojamiento de servidores que no pueden virtualizarse.
- **Appliances de red y de seguridad**: firewalls y equipos de red cerca de sus recursos cloud.
- **Conexión de operador**: recepción de un enlace de operador en la Meet Me Room.
- **Transición hacia el cloud**: alojamiento temporal durante una migración progresiva.
- **Restricciones regulatorias**: equipos que deben permanecer físicamente separados.
- **Recuperación de actividad**: sitio de respaldo para equipos críticos.

## Ventajas

| Ventaja                  | Descripción                                                                                                       |
|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| Seguridad física         | Los equipos se alojan en centros de datos vigilados 24/7, con un control de acceso estricto.                      |
| Libertad de configuración | Usted elige y configura el hardware según sus necesidades.                                                       |
| Espacio dedicado         | El rack dedicado ofrece un espacio privado, sin cohabitación con otros clientes.                                  |
| Acompañamiento in situ   | Los técnicos del centro de datos intervienen en su nombre, sin que usted tenga que desplazarse.                   |
| Proximidad al cloud      | Los equipos alojados pueden conectarse a los demás productos Cloud Temple.                                        |

## Funcionalidades

| Funcionalidad                    | Descripción                                                                         |
|----------------------------------|-------------------------------------------------------------------------------------|
| Alojamiento compartido           | A partir de 1 'U' y 150 W, para appliances o servidores.                            |
| Rack dedicado                    | Rack de 42 'U' con 3 kW de energía, ampliable por tramos de 2 kW.                   |
| Alimentación redundante          | Dos cadenas eléctricas independientes.                                              |
| Conectividad de red              | Puertos de cobre o fibra, hasta 10 Gbps.                                            |
| Meet Me Room                     | Recepción de un enlace privado de operador a 1 Gbps o 10 Gbps.                      |
| Servicios Hands & Eyes           | Intervenciones puntuales de los técnicos del centro de datos.                       |
| Servicios de ingeniero de centro de datos | Instalación en rack, cableado y gestión de las conexiones (patch management). |

### Pedidos y solicitudes

Los pedidos de Housing admitidos están disponibles en el módulo __Pedidos (Order)__ de la consola Cloud Temple: reserva de espacio, instalación y retirada de rack, asistencia técnica, smart hands y cableado/descableado. Para las operaciones no admitidas por la consola, contacte con el soporte. La solicitud debe especificar, en particular:

- el nombre de su organización;
- el nombre de un contacto, con su dirección de correo electrónico y su número de teléfono, para finalizar la configuración;
- el nombre del tenant;
- el tipo de alojamiento deseado (compartido por 'U' o dedicado por rack);
- la cantidad deseada;
- el tipo de equipo y sus características (dimensiones, peso, consumo energético, disipación térmica, etc.).

El equipo de soporte se pondrá entonces en contacto con usted para finalizar la solicitud.

<a id="services-hands--eyes"></a>

### Servicios Hands & Eyes

Los técnicos del centro de datos pueden intervenir en su nombre, en particular para:

- acompañar a un interviniente externo previamente identificado;
- comprobar el estado de un equipo (estado de los LED, estado de funcionamiento, etc.);
- tomar fotos de un equipo previamente identificado;
- pulsar un interruptor o reiniciar un equipo;
- conectar un terminal de acceso para una toma de control remota;
- sustituir un conector sin modificar el cableado.

### Servicios de ingeniero de centro de datos

Un ingeniero de centro de datos puede encargarse de:

- la instalación en rack, con los equipos de protección y de elevación adecuados;
- el cableado, según el plan de cableado entregado previamente;
- la modificación del cableado o el traslado de un equipo existente;
- la asistencia en la conectividad de red del operador.

Cualquier intervención en el cableado físico (red, alimentación, fibra óptica) la realizan exclusivamente los ingenieros del centro de datos. La configuración de software de sus equipos permanece bajo su control.

| Servicio                              | Franja horaria                                 | Plazo de intervención | Plazo en caso de urgencia |
|---------------------------------------|------------------------------------------------|----------------------|------------------|
| Hands & Eyes                          | Horario laboral (8:00 – 19:00, de lunes a viernes) | 2 horas          | 30 minutos       |
| Hands & Eyes                          | Fuera del horario laboral (noche, fin de semana, festivos) | 2 días   | 2 horas          |
| Ingeniero de centro de datos          | Horario laboral (8:00 – 19:00, de lunes a viernes) | 2 días           | 4 horas          |

:::note
- Toda solicitud requiere la apertura de un expediente de intervención en la consola.
- En caso de urgencia, llame a la guardia tras la apertura del expediente.
- Toda hora iniciada se factura.
:::

## Arquitectura

- **Infraestructura**: alimentación redundante (dos acometidas eléctricas independientes), refrigeración y climatización controladas, seguridad física multicapa.
- **Integraciones**: conexión directa con los productos Cloud Temple y Meet Me Room para las conexiones de operador.

## Regiones y zonas de disponibilidad

El Housing está disponible en la región FR1, en tres zonas de disponibilidad. Los racks se encuentran exclusivamente en Francia.

## Especificaciones técnicas

### Alojamiento compartido

El alojamiento compartido se realiza en un rack compartido entre diferentes clientes. [La segmentación](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se hace por 'U' (unidad de rack). Una unidad de rack mide 1,75 pulgadas (es decir, 44,45 mm) de alto. Los racks de alojamiento compartido disponen de dos cadenas eléctricas distintas.

La masa máxima de los equipos es de 25 kg por 'U'. Por encima de ese valor, es necesario contratar el número de 'U' que permita soportar la masa total del equipo: por ejemplo, 2 'U' para un equipo de 34 kg.

<a id="hébergement-dappliances-réseau-firewall-"></a>

#### Appliances (red, firewall…)

Cada unidad de rack puede disponer de una o dos tomas eléctricas de tipo C13, según sus necesidades. Cada toma está limitada a 150 W a 220 V. Así, para un equipo de 1500 W con dos fuentes de alimentación, se necesitan 1500 W / 150 W = 10 'U', es decir, 5 'U' (750 W) por cadena eléctrica.

La refrigeración se realiza desde la parte frontal hacia la parte trasera del rack, y __la appliance toma su conectividad de red en la parte frontal del rack.__

#### Alojamiento de servidores

Las unidades dedicadas a servidores (2 'U', 400 W u 800 W en dos tomas C19) están adaptadas a la disipación térmica de los servidores y __proporcionan la conectividad de red en la parte trasera__, lo que simplifica el mantenimiento y optimiza la refrigeración del rack. __Son obligatorias para los servidores.__

### Alojamiento dedicado

El rack dedicado se instala en una zona de alojamiento compartido fuera de SecNumCloud.

| Parámetro            | Valor                                                                   |
|----------------------|-------------------------------------------------------------------------|
| Dimensiones          | 42 'U' como mínimo; profundidad de 1200 mm, de los cuales 1000 mm útiles; anchura de 600 mm |
| Energía              | 3 kW incluidos en dos cadenas eléctricas de 16 A, ampliable por tramos de 2 kW |
| Masa máxima          | 1000 kg por rack                                                        |
| Distribución         | Una PDU (unidad de distribución de energía) monitorizada por cadena eléctrica |
| Equipamiento         | Refrigeración y puertas seguras en la parte frontal y trasera           |

<a id="connectivité-réseau-pour-lhébergement-physique"></a>

### Conectividad de red

La conectividad de red se contrata como complemento del alojamiento, según el tipo de puerto y el ancho de banda deseado:

- cobre 100 Mbps o 1 Gbps;
- fibra 1 Gbps o 10 Gbps, mediante un módulo SFP suministrado para la conectividad del lado de Cloud Temple.

Una conectividad en la Meet Me Room permite además recibir su enlace de operador. Es necesariamente de fibra óptica, a 1 Gbps o 10 Gbps.

### Límites

- Masa máxima de 25 kg por 'U' en alojamiento compartido, y de 1000 kg por rack dedicado.
- Potencia de 150 W por toma en alojamiento compartido de appliances.
- Profundidad útil de 1000 mm en un rack dedicado.

## Seguridad y cumplimiento

El Housing está certificado HDS e ISO 27001. Está alojado en una zona no SecNumCloud.

- **Control de acceso físico**: acceso estricto, vigilancia 24/7 y trazabilidad completa de las intervenciones.
- **Acceso acompañado**: toda visita in situ se realiza con cita previa, acompañada por un técnico del centro de datos.
- **Cifrado**: el cifrado de los equipos alojados es responsabilidad suya. El servicio garantiza la seguridad física de las instalaciones.

## Disponibilidad del servicio

| Elemento                | Objetivo de disponibilidad, medido en un mes  |
|-------------------------|-----------------------------------------------|
| Alimentación eléctrica  | 100 %                                         |
| Refrigeración           | 100 %                                         |

## Reversibilidad

Al finalizar el servicio, se le devuelven sus equipos:

| Operación                 | Entregable         | Plazo     | Coste     |
|---------------------------|--------------------|-----------|-----------|
| Recuperación del hardware | Hardware del cliente | 15 días | Sin coste |
| Asistencia en la mudanza  | Soporte logístico  | Bajo demanda | Según presupuesto |

## Precios

El alojamiento se contrata con un compromiso mínimo de 12 meses. Los precios y las duraciones de compromiso de cada opción se publican en la página del producto en el sitio web de Cloud Temple:
[Housing — precios](https://www.cloud-temple.com/produits/housing-espace-dedie/).
