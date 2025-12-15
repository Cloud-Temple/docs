---
title: Conceptos
---
import bastion from './images/bastion.svg'

## ¿Qué es el Bastion Cloud Temple?

El Bastion Cloud Temple es un servicio gestionado que le proporciona una conexión RDP o SSH segura desde la consola Cloud Temple hacia sus infraestructuras físicas y virtuales, ya sean ubicadas en la nube de confianza, en una nube pública o en entornos on-premise. La solución Bastion permite administrar sus equipos sin exponerlos directamente a Internet.

<img src={bastion} />

## Ventajas

| Ventaja                |                                                                                                                                                                        |
|------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestión centralizada   | El Bastión Cloud Temple es accesible directamente desde la Consola.                                                                                                                                                                   |
| Seguridad              | Los equipos administrados a través del Bastión no están expuestos a Internet, lo que los protege especialmente frente al análisis de sus puertos por parte de usuarios maliciosos.                                                                 |
| Infraestructura como Código | Las APIs permiten gestionar completamente el Bastión Cloud Temple "como código" (creación de sesión, conexión, modificación y eliminación de sesión).                                                                                             |

## References (SKU)

| Reference                          |   Unit   |           SKU           |
|------------------------------------|:--------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std |

### Bastion Appliance

The Bastion Appliance is a virtual machine deployed close to your equipment. This appliance enables a secure, direct flow from the Console platform to the equipment being managed, which resides in the same virtual network.

The traffic is encrypted and encapsulated within a VPN tunnel. The solution does not require opening a connection from the Internet to your infrastructure. It is sufficient for the appliance to have access to the public IP address of the Bastion Console module on port 443.

A single appliance can be used to quickly connect to a piece of equipment. For each connection, the desired protocol, the machine's IP address, and your credentials must be specified. To avoid entering these details for every connection, it is possible to create sessions associated with equipment that is regularly managed.

### Sesiones

Una sesión es una configuración de conexión a un equipo a través de un Bastión. Consiste en definir el equipo a administrar y la Appliance que se utilizará para hacer pasar el flujo, permitiendo así conectarse más rápidamente a dicho equipo.

Esta solución es adecuada en el caso de una conexión regular a un equipo que se debe administrar. Se conservan la información esencial, y únicamente se requieren sus credenciales al momento de conectarse.