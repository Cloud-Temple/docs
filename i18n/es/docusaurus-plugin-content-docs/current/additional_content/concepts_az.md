---
title: Conceptos - Zonas de disponibilidad
---

## Zonas de disponibilidad

Cada sitio físico dentro de una región dispone de una o varias salas privadas para nuestras infraestructuras. Estas salas son de uso exclusivo de Cloud Temple.

__Cada sala física corresponde a una zona de disponibilidad (AZ / Availability Zone)__ y es totalmente autónoma en términos de electricidad, refrigeración, cómputo, almacenamiento y red.
La elección de una zona de disponibilidad implica por tanto la elección de un sitio físico y de una región.

La Consola le propone automáticamente zonas de disponibilidad en sitios físicos distintos con el fin de distribuir su infraestructura en el máximo número de sitios físicos.

*__Nota: Si desea una configuración específica para un contexto particular (plusieurs AZ sur le même site physique), es necesario realizar una solicitud de soporte.__*

| Referencia de pedido                                         | Unidad          | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 AZ por tenant | csp:*(REGION)*:iaas:az:v1 |