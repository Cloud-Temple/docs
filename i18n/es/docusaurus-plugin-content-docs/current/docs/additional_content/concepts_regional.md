---
title: Conceptos - Regiones
---

import iaasAz001 from './images/iaas_az_001.png';

## Regiones

La infraestructura de Cloud Temple está diseñada para garantizar la continuidad del negocio de sus aplicaciones y plataformas.
Dentro de una región, se beneficia de la continuidad de la red de Nivel 2.

Por lo tanto, es posible definir una arquitectura técnica para la región de París, utilizando 3 sitios físicos para implementar una plataforma de alta disponibilidad con quórum.

A enero de 2024, la plataforma IaaS de Cloud Temple cuenta con las siguientes regiones:

- Región FR1 (París)

### Región FR1

La región FR1 se basa en tres sitios físicos en el área de París:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Cada sitio está a más de 30 km de distancia de los demás en línea recta. En promedio, hay una distancia óptica de 80 km entre cada sitio. La latencia garantizada entre los sitios es inferior a 4 ms.

### Expansiones Regionales

La apertura de nuevas regiones está asociada principalmente con las oportunidades del mercado. A enero de 2024, se está considerando la apertura de una región en el sur de Europa y una región en el norte de Europa.
