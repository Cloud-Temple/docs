---
title: Conceptos - Zonas de disponibilidad
---

## Zonas de disponibilidad 

Cada sitio físico dentro de una región dispone de una o más salas privadas para nuestras infraestructuras. Estas salas son exclusivas de Cloud Temple.

__Cada sala física corresponde a una zona de disponibilidad (AZ / Zona de Disponibilidad)__ y es completamente autónoma desde el punto de vista eléctrico, refrigeración, cálculo, almacenamiento y red.
La elección de una zona de disponibilidad implica por lo tanto la elección de un sitio físico y una región.

La consola Shiva le propone automáticamente zonas de disponibilidad en sitios físicos distintos para distribuir su infraestructura en el máximo número de sitios físicos.

*__Nota: Si desea una configuración específica para un contexto particular (varias AZ en el mismo sitio físico), es necesario realizar una solicitud de soporte.__*


| Referencia de pedido                                        | Unidad           | SKU                       |  
|--------------------------------------------------------------|-----------------|---------------------------|
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 AZ por tenant | csp:*(REGION)*:iaas:az:v1 |