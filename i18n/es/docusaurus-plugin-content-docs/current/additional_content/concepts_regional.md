

---
title: Conceptos - Regiones
---

import iaasAz001 from './images/iaas_az_001.png';



## Regiones

La infraestructura Cloud Temple está prevista para permitir la continuidad de actividad de sus aplicaciones y plataformas. 
Dentro de una región, usted disfruta de una continuidad de red de nivel 2.

Así, es posible definir una arquitectura técnica en la región de París, utilizando 3 sitios físicos para permitir la implementación de una plataforma de alta disponibilidad con cuórum.

En enero de 2024, la plataforma IaaS Cloud Temple dispone de las siguientes regiones:

- Región FR1 (París)



### Región FR1

La región FR1 está basada en tres sitios físicos en la región parisina:

- FR1 - AZ05 (PAR7S)
- FR1 - AZ06 (TH3S)
- FR1 - AZ07 (DATA4)

<img src={iaasAz001} />

Cada sitio está a más de 30 km en línea recta de los demás. En promedio, se deben considerar 80 km de distancia óptica entre cada sitio. La latencia garantizada entre los sitios es inferior a 4 ms.



### Extensiones regionales

La apertura de nuevas regiones está principalmente asociada a las oportunidades de mercado. En enero de 2024, la apertura de una región en el sur de Europa y una región en el norte de Europa están en estudio.