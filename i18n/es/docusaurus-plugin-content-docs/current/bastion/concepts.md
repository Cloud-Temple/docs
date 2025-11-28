---
title: Conceptos
---
import bastion from './images/bastion.svg'

## ¿Qué es el Bastion Cloud Temple?

El Bastion Cloud Temple es un servicio gestionado que le proporciona una conectividad RDP o SSH segura desde la consola Cloud Temple hacia sus infraestructuras físicas y virtuales, ya sean ubicadas en el Cloud de confianza, en un Cloud público o onpremise. La solución Bastion permite administrar sus equipos sin exponerlos a Internet.

<img src={bastion} />

## Ventajas

| Ventaja               |                                                                              Descripción                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestión centralizada    |                                              El Bastion Cloud Temple es accesible directamente desde el portal Console.                                               |
| Seguridad               | Los equipos administrados a través del Bastion no están expuestos a Internet, lo que los protege especialmente del análisis de sus puertos por usuarios malintencionados. |
| Infraestructura as Code |          Las APIs permiten gestionar el Bastion Cloud Temple completamente "as Code" (creación de sesión, conexión, modificación y eliminación de sesión).          |

## Referencias (SKU)

| Referencia                          |   Unidad   |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Sesión | cmp:bastion:session:std |

### La Appliance Bastion

La Appliance Bastion es una máquina virtual desplegada cerca de sus equipos. Esta Appliance permite pasar un flujo seguro y directo desde la plataforma Console hacia los equipos a administrar que se encuentran en la misma red virtual.

El flujo está cifrado y encapsulado en un túnel VPN. La solución no requiere la apertura de un flujo desde Internet hacia sus infraestructuras. Basta con que la Appliance tenga acceso a la dirección IP pública del módulo Console Bastion en el puerto 443.

Una Appliance puede utilizarse para realizar una conexión rápida hacia un equipo. En cada conexión, se deben especificar el protocolo deseado, la dirección IP de la máquina y sus credenciales. Para evitar ingresar estos datos en cada conexión, es posible crear sesiones asociadas a equipos que se administren con regularidad.

### Las Sesiones

Una sesión es una configuración de conexión a un equipo a través de un Bastion. Consiste en definir un equipo a administrar y la Appliance a utilizar para transmitir el flujo, permitiendo así conectarse más rápidamente a dicho equipo.

Esta solución es adecuada en el caso de una conexión regular a un equipo a administrar. Se conservan las informaciones esenciales, solo se requieren sus credenciales al momento de la conexión.
