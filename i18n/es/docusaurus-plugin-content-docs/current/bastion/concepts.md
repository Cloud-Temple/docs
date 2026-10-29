---
title: Conceptos
---
import bastion from '@site/docs/bastion/images/bastion.png'

<a id="cest-quoi-le-bastion-cloud-temple-"></a>

## Presentación

El Bastion de Cloud Temple es un servicio gestionado que proporciona una conectividad RDP o SSH segura desde la consola Cloud Temple hacia sus infraestructuras físicas y virtuales, tanto si se encuentran en el Cloud de confianza, en una nube pública u on-premise. Constituye el punto de entrada único de sus accesos de administración: sus equipos se administran sin estar expuestos a Internet, y todas las acciones se trazan para las necesidades de auditoría y cumplimiento.

<img src={bastion} />

### Destinatarios y casos de uso

El Bastion está dirigido a los administradores de sistemas, a los equipos DevOps, a las organizaciones sujetas a requisitos reglamentarios y al sector público. Casos de uso típicos:

- **Acceso de administración remoto**: pasarela segura hacia infraestructuras sensibles.
- **Reducción de la superficie de ataque**: ningún equipo administrado está expuesto directamente a Internet.
- **Acceso de socios y proveedores**: accesos temporales y controlados a los equipos.
- **Cumplimiento normativo**: trazabilidad de las acciones para las auditorías.
- **Administración multientorno**: acceso unificado a los recursos cloud y on-premise.

<a id="les-avantages"></a>

## Ventajas

| Ventaja                | Descripción                                                                                                                                                             |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gestión centralizada   | El Bastion es accesible directamente desde la consola: todos los accesos de administración se gestionan en un mismo lugar.                                              |
| Seguridad              | Los equipos administrados a través del Bastion no están expuestos a Internet, lo que los protege, en particular, del análisis de sus puertos por parte de usuarios malintencionados. |
| Trazabilidad           | Todas las acciones de administración quedan registradas.                                                                                                                |
| Flexibilidad de acceso | Un mismo servicio administra equipos situados en el Cloud de confianza, en una nube pública u on-premise.                                                              |
| Infrastructure as Code | Una API REST permite gestionar los equipos íntegramente «as Code».                                                                                                      |

## Funcionalidades

| Funcionalidad           | Descripción                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------|
| Acceso RDP y SSH        | Conexión segura a los equipos que se deben administrar.                                                     |
| Conexión rápida         | Conexión puntual a un equipo indicando el protocolo, su dirección IP y sus credenciales.                    |
| Equipos registrados     | Configuración de conexión reutilizable: solo se le solicitan sus credenciales en cada conexión.             |
| Etiquetas y búsqueda    | Clasificación de los equipos por etiquetas, búsqueda por nombre.                                            |
| Flujos cifrados         | Todas las comunicaciones entre la consola, la Appliance y los equipos están cifradas.                       |
| Registro                | Trazabilidad de todas las acciones de administración.                                                       |
| API REST                | Creación, modificación y eliminación de los equipos mediante API.                                           |

## Arquitectura

### La Appliance Bastion

La Appliance Bastion es una máquina virtual desplegada cerca de sus equipos. Hace pasar un flujo seguro y directo desde la consola hacia los equipos que se deben administrar situados en la misma red virtual.

El flujo está cifrado y encapsulado en un túnel VPN. La solución no requiere la apertura de un flujo desde Internet hacia sus infraestructuras. Basta con que la Appliance tenga acceso a la IP pública del módulo Consola Bastion en el puerto 443.

Una Appliance puede utilizarse para realizar una conexión rápida a un equipo. En cada conexión, deben indicarse el protocolo deseado, la dirección IP de la máquina y sus credenciales. Para evitar introducir esta información en cada conexión, puede registrar los equipos que administra con regularidad.

<a id="les-sessions"></a>

### Los equipos

Un equipo es una configuración de conexión registrada en el Bastion. Asocia una máquina que se debe administrar (nombre, dirección IP, protocolo SSH o RDP, configuración del teclado) con la Appliance por la que transita el flujo.

Esta configuración está adaptada a una conexión regular a un equipo. La información esencial se conserva: solo se le solicitan sus credenciales al conectarse.

### Integraciones

- **consola Cloud Temple**: gestión de las Appliances y de los equipos desde el menú «Bastion».
- **API REST**: automatización de la gestión de los equipos.

## Regiones y zonas de disponibilidad

El servicio Bastion se opera desde la región FR1, y sus registros se alojan en Francia. La Appliance se despliega lo más cerca posible de sus equipos: en el Cloud de confianza, en una nube pública u on-premise.

## Especificaciones técnicas

| Parámetro            | Valor                                     |
|----------------------|-------------------------------------------|
| Protocolos           | RDP, SSH                                  |
| Equipos gestionados  | Hasta 50 por Appliance                    |
| Cifrado              | Obligatorio, en todos los flujos          |
| API                  | REST                                      |
| Registro             | Todas las acciones de administración      |

### Límites

- Una Appliance administra como máximo 50 equipos. Por encima de esa cifra, despliegue una Appliance adicional.
- Los equipos que se deben administrar deben ser accesibles desde la red donde está desplegada la Appliance.

## Seguridad y cumplimiento

El Bastion está certificado HDS e ISO 27001. Está incluido en los servicios cualificados SecNumCloud y conformes con C5.

- **Cifrado**: todos los flujos están cifrados.
- **Aislamiento**: las Appliances funcionan en un entorno dedicado, con un aislamiento lógico estricto de las máquinas virtuales de administración.
- **Control de acceso**: control de acceso granular y aplicación de las políticas de contraseñas.
- **Trazabilidad**: todas las acciones de administración quedan registradas.

## Disponibilidad del servicio

El objetivo de disponibilidad del servicio Bastion es del 99,9 %, medido sobre un mes.

## Reversibilidad

Al finalizar el servicio, puede recuperar los siguientes elementos, sin coste:

| Elemento exportado      | Entregable                    | Plazo de puesta a disposición |
|-------------------------|-------------------------------|-------------------------------|
| Registros de auditoría  | Archivos de auditoría         | 30 días                       |
| Configuración           | Parámetros de la Appliance    | 15 días                       |

## Precios

El Bastion se factura mensualmente, por Appliance. Los precios se publican en la página del producto en el sitio web de Cloud Temple:
[Bastion — precios](https://www.cloud-temple.com/produits/bastion/).
