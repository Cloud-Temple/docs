---
title: Conceptos
---
import bastion from '@site/docs/bastion/images/bastion.png'

## ¿Qué es el Bastion Cloud Temple?

El Bastion Cloud Temple es un servicio gestionado que le proporciona conectividad RDP o SSH segura desde la consola
Cloud Temple hacia sus infraestructuras físicas y virtuales, ya estén ubicadas en el Cloud de confianza, en un
Cloud público o on-premise. La solución Bastion permite administrar sus equipos sin exponerlos a Internet.

<img src={bastion} />

## Las ventajas

| Ventaja               |                                                                              Descripción                                                                               |
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestión centralizada    |                                              El Bastion Cloud Temple es accesible directamente desde la Consola.                                               |
| Seguridad               | Los equipos administrados a través del Bastion no están expuestos a Internet, lo que los protege en particular del escaneo de sus puertos por parte de usuarios malintencionados. |
| Infrastructure as Code |          Las APIs permiten gestionar el Bastion Cloud Temple completamente "as Code" (creación de sesión, conexión, modificación y eliminación de sesión).          |

## Referencias (SKU)

| Referencia                          |   Unidad   |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRACIÓN - Bastión SSH & RDP | 1 Sesión | cmp:bastion:session:std |

### La Appliance Bastion

La Appliance Bastion es una máquina virtual desplegada cerca de sus equipos. Esta Appliance permite el tránsito de un flujo seguro y directo desde la plataforma Console hacia los equipos a administrar, que se encuentran en la misma red virtual.

El flujo está cifrado y encapsulado en un túnel VPN. La solución no requiere abrir un flujo desde Internet hacia sus infraestructuras. Basta con que la Appliance tenga acceso a la IP pública del módulo Console Bastion en el puerto 443.

Una Appliance puede utilizarse para establecer una conexión rápida hacia un equipo. En cada conexión, deben especificarse el protocolo deseado, la dirección IP de la máquina y sus credenciales. Para evitar tener que completar esta información en cada conexión, es posible crear sesiones asociadas a equipos que se administran con regularidad.

### Las Sesiones

Una sesión es una configuración de conexión a un equipo a través de un Bastion. Consiste en definir un equipo a administrar y el Appliance a utilizar para hacer transitar el tráfico, lo que permite así conectarse más rápidamente a dicho equipo.

Esta solución es adecuada en el caso de una conexión regular a un equipo a administrar. Se conserva la información esencial, solo se requieren sus credenciales al momento de la conexión.