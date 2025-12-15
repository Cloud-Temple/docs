---
title: Conceptos - Zonas de disponibilidad
---

## Zonas de disponibilidad

Cada sitio físico dentro de una región dispone de una o varias salas privadas para nuestras infraestructuras. Estas salas están exclusivamente reservadas para Cloud Temple.

__Cada sala física corresponde a una zona de disponibilidad (AZ / Availability Zone)__ y es completamente autónoma desde el punto de vista de electricidad, refrigeración, cálculo, almacenamiento y red.  
Por lo tanto, elegir una zona de disponibilidad implica elegir un sitio físico y una región.

La consola selecciona automáticamente zonas de disponibilidad en sitios físicos distintos para distribuir su infraestructura en el mayor número posible de sitios físicos.

*__Nota: Si desea una configuración específica para un contexto particular (varias AZ en el mismo sitio físico), es necesario solicitar soporte.__*

| Referencia de comando                                        | Unidad           | SKU                       |  
|--------------------------------------------------------------|------------------|---------------------------|
| TENANT - *(REGIÓN)* - Activación de una zona de disponibilidad | 1 AZ por tenant | csp:*(REGIÓN)*:iaas:az:v1 |