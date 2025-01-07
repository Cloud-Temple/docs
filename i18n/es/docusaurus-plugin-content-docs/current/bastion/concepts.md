---
title: Concepts
---
## ¿Qué es el Bastion Cloud Temple?

El Bastion Cloud Temple es un servicio gestionado que proporciona conectividad RDP o SSH segura desde la consola 
Cloud Temple hacia sus infraestructuras físicas y virtuales, ya sea que estén ubicadas en la nube de confianza, en una 
nube pública o on premise. La solución Bastion permite administrar sus equipos sin exponerlos a Internet.

![](images/bastion.svg)

## Ventajas
| Ventaja                |                                                                              Descripción                                                                               |   
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Gestión centralizada   |                                               El Bastion Cloud Temple es accesible directamente desde el portal Shiva.                                                 |   
| Seguridad              | Los equipos administrados a través del Bastion no están expuestos a Internet, lo que los protege especialmente del análisis de sus puertos por usuarios malintencionados.|  
| Infrastructure as Code |        Las API permiten gestionar el Bastion Cloud Temple completamente "as Code" (creación de sesión, conexión, modificación y eliminación de sesión).                |   

## Referencias (SKU)
| Referencia                          |   Unidad  |           SKU           |  
|-------------------------------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP  | 1 Sesión  | cmp:bastion:session:std | 


### El Appliance Bastion

El Appliance Bastion es una máquina virtual desplegada en proximidad a sus equipos. Este Appliance permite hacer pasar un flujo seguro y directo desde la plataforma Shiva hacia los equipos a administrar que están situados en la misma red virtual.

El flujo está cifrado y encapsulado en un túnel VPN. La solución no requiere la apertura de un flujo desde Internet hacia sus infraestructuras. Solo es necesario que el Appliance tenga acceso a la IP pública del módulo Shiva Bastion en el puerto 443.

Un Appliance puede ser utilizado para efectuar una conexión rápida hacia un equipo. En cada conexión, el protocolo deseado, la dirección IP de la máquina y sus credenciales deben ser especificados. Para evitar llenar esta información en cada conexión, es posible crear sesiones asociadas a equipos que se administran regularmente.

### Las Sesiones

Una sesión es una configuración de conexión a un equipo a través de un Bastion. Consiste en definir un equipo a administrar y el Appliance a utilizar para hacer transitar el flujo, y permite así conectarse más rápidamente a ese equipo.

Esta solución es adecuada en el caso de una conexión regular a un equipo a administrar. La información esencial se conserva, solo se requieren sus credenciales durante la conexión.