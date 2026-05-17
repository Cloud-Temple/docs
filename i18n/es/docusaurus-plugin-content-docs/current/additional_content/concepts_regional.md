---
title: Conceptos - Regiones
---

import iaasAz001 from '@site/docs/additional_content/images/iaas_az_001.png';

## Regiones

La infraestructura Cloud Temple está diseñada para garantizar la continuidad operativa de sus aplicaciones y plataformas.
Dentro de una región, dispone de una continuidad de red de nivel 2.

Por lo tanto, es posible definir una arquitectura técnica en la región de París, utilizando 3 sitios físicos para permitir la implementación de una plataforma de alta disponibilidad con quórum.

En enero de 2024, la plataforma IaaS Cloud Temple dispone de las siguientes regiones:

- Región FR1 (París)

### Región FR1

La región FR1 está basada en tres sitios físicos en la región de París:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Cada sitio se encuentra a más de 30 km en línea recta de los demás. En promedio, se debe considerar una distancia óptica de 80 km entre cada sitio. La latencia garantizada entre los sitios es inferior a 4 ms.

### Extensiones regionales

La apertura de nuevas regiones está principalmente asociada a las oportunidades de mercado. En enero de 2024, la apertura de una región en el sur de Europa y una región en el norte de Europa están en estudio.