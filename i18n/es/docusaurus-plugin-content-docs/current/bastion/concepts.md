---
title: Conceptos
---
import bastion from './images/bastion.svg'

## ¿Qué es el Bastion Cloud Temple?

El Bastion Cloud Temple es un servicio gestionado que proporciona conectividad segura RDP o SSH desde la consola Cloud Temple hacia sus infraestructuras físicas y virtuales, ya sea que estén ubicadas en la Nube de confianza, en una Nube pública o en sus instalaciones. La solución Bastion permite administrar sus equipos sin exponerlos a Internet.

<img src={bastion} />

## Las ventajas

| Ventaja                |                                                                              Descripción                                                                              |
|------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestión centralizada   |                                             El Bastion Cloud Temple es accesible directamente desde el portal Shiva.                                                   |
| Seguridad              | Los equipos administrados a través del Bastion no están expuestos a Internet, lo que los protege especialmente del análisis de puertos por usuarios malintencionados. |
| Infrastructure as Code |          Las APIs permiten gestionar el Bastion Cloud Temple completamente "as Code" (creación de sesión, conexión, modificación y eliminación de sesión).           |

## Referencias (SKU)

| Referencia                         |   Unidad   |           SKU           |
|------------------------------------|:----------:|:-----------------------:|
| ADMINISTRACIÓN - Bastion SSH & RDP | 1 Sesión   | cmp:bastion:session:std |

### El Appliance Bastion

El Appliance Bastion es una máquina virtual desplegada cerca de sus equipos. Este Appliance permite establecer un flujo seguro y directo desde la plataforma Shiva hacia los equipos a administrar que se encuentran en la misma red virtual.

El flujo está cifrado y encapsulado en un túnel VPN. La solución no requiere la apertura de un flujo desde Internet hacia sus infraestructuras. Solo es necesario que el Appliance tenga acceso a la IP pública del módulo Shiva Bastion en el puerto 443.

Un Appliance puede utilizarse para realizar una conexión rápida a un equipo. En cada conexión, se debe especificar el protocolo deseado, la dirección IP de la máquina y sus credenciales. Para evitar introducir esta información en cada conexión, es posible crear sesiones asociadas a equipos que se administran regularmente.

### Las Sesiones

Una sesión es una configuración de conexión a un equipo a través de un Bastion. Consiste en definir un equipo a administrar y el Appliance a utilizar para hacer transitar el flujo, permitiendo así conectarse más rápidamente a ese equipo.

Esta solución es adecuada para conexiones regulares a un equipo que se administra. La información esencial se conserva, solo se requieren sus credenciales durante la conexión.
