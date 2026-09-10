---
title: Modelo de responsabilidad compartida — VPC
slug: /contractual/network/raci-vpc
---

# Modelo de responsabilidad compartida — VPC (Virtual Private Cloud)

Este es el modelo **RACI** que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso del servicio **VPC (Virtual Private Cloud)**.

> **Particularidad de la oferta VPC**  
> El VPC es un servicio de red **totalmente gestionado por Cloud Temple**, que ofrece una experiencia cloud-native: enrutamiento automático, alta disponibilidad integrada y gestión nativa de IPAM/DHCP. Cloud Temple garantiza el funcionamiento y la disponibilidad de la infraestructura de red subyacente (enrutadores VPC, backbone inter-AZ, pasarela externa). El cliente es responsable del diseño, la configuración y la seguridad de su espacio de red: subredes, direccionamiento, políticas de filtrado e interconexiones.

---

## Definición de roles

| Rol          | Descripción                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Ejecuta  | __R__ealiza el proceso                                                                |
| (A) Aprueba  | __A__prueba la realización del proceso                                                 |
| (C) Consulta | __C__onsultado durante el proceso                                                     |
| (I) Informado| __I__nformado de los resultados del proceso (vía herramientas, el portal o la mensajería) |

---

## Infraestructura de red física y backbone

Cloud Temple es totalmente responsable de la infraestructura física y del backbone de red sobre el que se basa el VPC.

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la implementación y el mantenimiento de las infraestructuras de **red física** (switches, routers de backbone) |         | **RA**       |
| Garantizar la conectividad **inter-datacenter / inter-AZ** del backbone de Cloud Temple                     | **I**   | **RA**       |
| Garantizar el mantenimiento en condiciones operativas del **backbone de red** de Cloud Temple               | **I**   | **RA**       |
| Garantizar el mantenimiento en condiciones de seguridad del **backbone de red** de Cloud Temple             | **I**   | **RA**       |
| Gestionar incidentes, problemas y capacidades del backbone de red                                           | **I**   | **RA**       |
| Adquirir y mantener las licencias esenciales para el funcionamiento de la infraestructura de red            |         | **RA**       |

---

## Infraestructura VPC (router, gateway e IPAM)

Cloud Temple garantiza el funcionamiento de los componentes centrales del VPC. El cliente configura su espacio de red dentro de esta infraestructura.

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar el mantenimiento en condiciones operativas del **router VPC** *(1)*                               | **I**   | **RA**       |
| Garantizar la **alta disponibilidad** del router VPC                                                         | **I**   | **RA**       |
| Garantizar el mantenimiento en condiciones operativas de la **Pasarela Externa (External Gateway)** *(1)*    | **I**   | **RA**       |
| Garantizar la **alta disponibilidad** de la Pasarela Externa                                                 | **I**   | **RA**       |
| Garantizar el funcionamiento del servicio **IPAM & DHCP** subyacente                                         | **I**   | **RA**       |
| Gestionar incidentes y problemas en los componentes centrales del VPC                                        | **I**   | **RA**       |
| Actualizar y mantener en condiciones de seguridad los componentes centrales del VPC                          | **I**   | **RA**       |

*(1) El router VPC y la Pasarela Externa son componentes totalmente gestionados por Cloud Temple. Su disponibilidad está garantizada por Cloud Temple en el marco del SLA del servicio VPC.*

---

## Provisionamiento y configuración del VPC

El cliente es responsable de la creación y configuración de su VPC, así como de los recursos de red que lo componen.

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Crear, modificar y eliminar un **VPC**                                                                     | **RA**  | **I**        |
| Definir la arquitectura de red del VPC (nombre de sous-réseaux, topologie)                                   | **RA**  |              |
| Crear, modifier et supprimer des **réseaux privés (Private Networks / VLANs)** dans le VPC                 | **RA**  | **I**        |
| Definir el **plan de direccionamiento IP** (plages CIDR) des réseaux privés                                        | **RA**  | **I**        |
| Configurar los **pools DHCP** (plages dynamiques, DNS, gateway)                                             | **RA**  | **C**        |
| Activar y configurar la **Pasarela Externe** (accès Internet, NAT, DNAT) *(2)*                          | **RA**  | **C**        |
| Gestionar las **rutas estáticas** au sein du VPC                                                               | **RA**  |              |

*(2) La activación de la Pasarela Externe habilita el acceso a Internet para el VPC. El cliente es responsable de las reglas de filtrado y del control de los flujos asociados.*

---

## IPs públicas y exposición a Internet

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Asignar el **pool de IPs públicas** disponibles en la plataforma                                           | **I**   | **RA**       |
| Solicitar y asociar **IPs públicas (IPs flotantes)** a su VPC                                               | **RA**  | **I**        |
| Configurar las reglas **NAT / DNAT** para la exposición de servicios                                        | **RA**  |              |
| Gestionar el ciclo de vida de las IPs públicas (asociación, liberación, reasignación)                     | **RA**  | **I**        |
| Asegurarse de que los servicios expuestos en Internet cumplan con las políticas de seguridad aplicables    | **RA**  |              |

---

## Seguridad de red

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar el **aislamiento de red entre inquilinos** a nivel de la plataforma *(3)*                              |         | **RA**       |
| Definir y configurar las **políticas de microsegmentación** (security groups) *(4)*                     | **RA**  |              |
| Implementar un **filtrado de flujos** entrantes/salientes (pare-feu applicatif, IDS/IPS) *(5)*            | **RA**  |              |
| Gestionar los **certificados TLS** y la terminación SSL de los servicios expuestos                                    | **RA**  |              |
| Realizar **pruebas de intrusión** en los recursos alojados en el VPC *(6)*                          | **RA**  | **C**        |
| Supervisar los **comportamientos anómalos** en los flujos de red del inquilino                                     | **RA**  |              |

*(3) Cloud Temple garantiza el aislamiento estricto entre VPC pertenecientes a inquilinos diferentes. Ningún flujo puede atravesar esta barrera sin una acción explícita del cliente.*  
*(4) La microsegmentación (security groups) estará disponible en el S1 2026. Las políticas de filtrado que se apliquen antes de esta disponibilidad deberán implementarse por parte del cliente mediante un equipo de seguridad dedicado.*  
*(5) El filtrado de flujos a nivel de aplicación dentro del VPC es responsabilidad del cliente. Cloud Temple no realiza inspección de contenido de los flujos del inquilino.*  
*(6) Las pruebas de intrusión deben declararse previamente a Cloud Temple, de conformidad con las condiciones generales de uso.*

## Interconexión con redes externas

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Definir la estrategia de **interconexión** con entornos on-premise u otras nubes                             | **RA**  | **C**        |
| Suscribir y configurar un acceso **VPN de sitio a sitio** *(disponible S2 2026)*                             | **RA**  | **C**        |
| Suscribir y configurar un acceso **Cloud Connect** (enlace dedicado) *(disponible S2 2026)*                  | **RA**  | **C**        |
| Gestionar las **BGP / rutas** asociadas a las interconexiones del operador                                   | **RA**  | **CI**       |
| Garantizar la **seguridad del tráfico** que transita por las interconexiones                                 | **RA**  |              |

---

## Conexión de recursos al VPC

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Adjuntar **instancias VM** a una red privada del VPC                                                         | **RA**  | **I**        |
| Adjuntar **recursos IaaS** (VMs VMware, OpenIaaS) a las redes privadas del VPC                               | **RA**  | **C**        |
| Configurar las **interfaces de red** de los recursos conectados al VPC                                       | **RA**  |              |
| Asegurarse de que los recursos conectados apliquen **configuraciones de red coherentes** (gateway, DNS)     | **RA**  |              |

---

## Supervisión y observabilidad de red

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Supervisar el funcionamiento de los **componentes centrales del VPC** (routeur, gateway)                             | **I**  | **RA**       |
| Garantizar el seguimiento del **rendimiento del backbone** de red Cloud Temple                                      | **I**  | **RA**       |
| Recopilar y analizar los **registros de flujo de red** (flow logs) del VPC *(disponible S1 2026)*                | **RA** | **I**        |
| Implementar la **supervisión de flujos** de aplicaciones en el VPC                                        | **RA** |              |
| Monitorear la **latencia y el ancho de banda** de los flujos dentro del VPC                                       | **RA** | **I**        |

---

## Gestión de cambios & capacidades

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Tomar la decisión de agregar, modificar o retirar recursos de red en su VPC                                  | **RA**  | **CI**       |
| Gestionar las capacidades y la escalabilidad de la infraestructura de red backbone                         |         | **RA**       |
| Planificar y gestionar el crecimiento del plan de direccionamiento IP en el VPC                              | **RA**  | **C**        |

---

## Gestión de accesos e identidades

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la accesibilidad de la **Consola Cloud Temple** y de la API de red                                |         | **RA**       |
| Gestionar las habilitaciones de los equipos de Cloud Temple para la infraestructura de red                   |         | **RA**       |
| Administrar los derechos de acceso al VPC en la Consola Cloud Temple (IAM)                                   | **RA**  |              |

---

## Registros (logs)

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservar y poner a disposición los **registros de la plataforma VPC** *(7)*                              |         | **RA**       |
| Recopilar y conservar los **logs de flujo** y registros de aplicaciones del inquilino                       | **RA**  |              |

*(7) La duración de retención de los registros de la plataforma VPC se especifica en el acuerdo de servicio correspondiente.*

---

## Documentación y contractual

| Actividad                                                                                                   | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Gestionar la parte comercial y contractual (devis, commandes, facturation)                                  | **I**   | **RA**       |
| Realizar el seguimiento contractual de la prestación                                                        | **RA**  | **I**        |
| Mantener y garantizar la disponibilidad de la documentación técnica del servicio VPC                        | **I**   | **RA**       |
| Documentar la arquitectura de red desplegada en su tenant (schémas, CMDB)                                   | **RA**  |              |

---

## Reversibilidad

| Actividad                                                                                                    | Cliente | Cloud Temple |
|-------------------------------------------------------------------------------------------------------------|---------|--------------|
| Planificar el proyecto de reversibilidad de red y seleccionar las arquitecturas objetivo                     | **RA**  | **I**        |
| Exportar la configuración del VPC y los recursos de red mediante la API o las herramientas disponibles       | **RA**  | **I**        |
| Proceder al desmantelamiento de las configuraciones VPC tras la rescisión del contrato                       | **I**   | **RA**       |

---

> *Si desea delegar total o parcialmente las responsabilidades enumeradas como a cargo del cliente, disponemos de servicios profesionales. Contacte a su interlocutor comercial de Cloud Temple.*