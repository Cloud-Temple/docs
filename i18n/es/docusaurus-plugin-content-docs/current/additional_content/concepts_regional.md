---
title: Regiones y zonas de disponibilidad
---

import iaasAz001 from '@site/docs/additional_content/images/iaas_az_001.png';

La infraestructura Cloud Temple está diseñada para garantizar la continuidad operativa de sus aplicaciones y plataformas. Está organizada en regiones, cada una compuesta por varias zonas de disponibilidad.

## Regiones

Dentro de una región, dispone de una continuidad de red de nivel 2. Por lo tanto, es posible definir, dentro de una misma región, una arquitectura técnica repartida en tres sitios físicos para implementar una plataforma de alta disponibilidad con quórum.

Cloud Temple dispone de la región **FR1** (París).

### Región FR1

La región FR1 se basa en tres sitios físicos en la región de París:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Cada sitio se encuentra a más de 30 km en línea recta de los demás; en promedio, hay 80 km de distancia óptica entre dos sitios. El objetivo de latencia de red entre zonas de disponibilidad de una misma región es inferior a 5 ms.

## Zonas de disponibilidad

Cada sitio físico de una región dispone de una o varias salas privadas para nuestras infraestructuras. Estas salas son de uso exclusivo de Cloud Temple.

__Cada sala física corresponde a una zona de disponibilidad (AZ, *Availability Zone*)__, totalmente autónoma en electricidad, refrigeración, cómputo, almacenamiento y red. Elegir una zona de disponibilidad implica, por tanto, elegir un sitio físico y una región.

La Consola le propone automáticamente zonas de disponibilidad en sitios físicos distintos, para repartir su infraestructura en el mayor número posible de sitios físicos.

Si necesita una configuración particular (varias AZ en el mismo sitio físico), realice una solicitud de soporte.
