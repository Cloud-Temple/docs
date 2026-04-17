---
title: Modelo de Responsabilidad Compartida — VPC
slug: /contractual/network/raci-vpc
---

# Modelo de Responsabilidad Compartida — VPC (Virtual Private Cloud)

Este modelo **RACI** define la distribución de responsabilidades entre el cliente y Cloud Temple para el servicio **VPC (Virtual Private Cloud)**.

> **Particularidades del servicio VPC**  
> El VPC es un servicio de red **completamente gestionado por Cloud Temple**, que ofrece una experiencia cloud-nativa: enrutamiento automático, alta disponibilidad integrada y gestión nativa de IPAM/DHCP. Cloud Temple garantiza el funcionamiento y la disponibilidad de la infraestructura de red subyacente (routers VPC, backbone inter-AZ, pasarela externa). El cliente es responsable del diseño, la configuración y la seguridad de su espacio de red: subredes, direccionamiento, políticas de filtrado e interconexiones.

---

## Definición de Roles

| Rol              | Descripción                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| (R) Responsable  | __R__ealiza el proceso                                                                            |
| (A) Aprueba      | __A__prueba la realización del proceso                                                            |
| (C) Consultado   | __C__onsultado durante el proceso                                                                 |
| (I) Informado    | __I__nformado de los resultados del proceso                                                       |

---

## Infraestructura de Red Física y Backbone

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la implementación y el mantenimiento de la **infraestructura de red física**                       |         | **RA**       |
| Garantizar la conectividad **inter-datacenter / inter-AZ** del backbone de Cloud Temple                       | **I**   | **RA**       |
| Mantener la **red backbone** en condición operativa                                                            | **I**   | **RA**       |
| Mantener la **red backbone** en condición de seguridad                                                         | **I**   | **RA**       |
| Gestionar incidentes, problemas y capacidades de la red backbone                                               | **I**   | **RA**       |
| Adquirir y mantener las **licencias** necesarias para el funcionamiento de la infraestructura de red          |         | **RA**       |

---

## Infraestructura VPC (Router, Gateway e IPAM)

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantener el **Router VPC** en condición operativa *(1)*                                                       | **I**   | **RA**       |
| Garantizar la **alta disponibilidad** del Router VPC                                                          | **I**   | **RA**       |
| Mantener la **Pasarela Externa (External Gateway)** en condición operativa *(1)*                              | **I**   | **RA**       |
| Garantizar la **alta disponibilidad** de la Pasarela Externa                                                   | **I**   | **RA**       |
| Garantizar el funcionamiento del servicio **IPAM y DHCP** subyacente                                          | **I**   | **RA**       |
| Gestionar incidentes y problemas en los componentes principales del VPC                                        | **I**   | **RA**       |
| Actualizar y mantener en seguridad los componentes principales del VPC                                         | **I**   | **RA**       |

*(1) El Router VPC y la Pasarela Externa son componentes completamente gestionados por Cloud Temple. Su disponibilidad está garantizada por Cloud Temple en el marco del SLA del servicio VPC.*

---

## Aprovisionamiento y Configuración del VPC

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Crear, modificar y eliminar un **VPC**                                                                         | **RA**  | **I**        |
| Definir la arquitectura de red del VPC (número de subredes, topología)                                        | **RA**  |              |
| Crear, modificar y eliminar **redes privadas (Private Networks / VLANs)** en el VPC                          | **RA**  | **I**        |
| Definir el **plan de direccionamiento IP** (rangos CIDR) de las redes privadas                               | **RA**  | **I**        |
| Configurar los **pools DHCP** (rangos dinámicos, DNS, pasarela)                                               | **RA**  | **C**        |
| Activar y configurar la **Pasarela Externa** (acceso a Internet, NAT, DNAT) *(2)*                             | **RA**  | **C**        |
| Gestionar las **rutas estáticas** dentro del VPC                                                               | **RA**  |              |

*(2) La activación de la Pasarela Externa abre el acceso a Internet para el VPC. El cliente es responsable de las reglas de filtrado y el control del tráfico asociados.*

---

## IPs Públicas y Exposición a Internet

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Asignar el **pool de IPs públicas** disponibles en la plataforma                                               | **I**   | **RA**       |
| Solicitar y asociar **IPs públicas (IPs flotantes)** a su VPC                                                  | **RA**  | **I**        |
| Configurar reglas **NAT / DNAT** para la exposición de servicios                                               | **RA**  |              |
| Gestionar el ciclo de vida de las IPs públicas (asociación, liberación, movimiento)                           | **RA**  | **I**        |
| Garantizar que los servicios expuestos en Internet cumplen las políticas de seguridad aplicables               | **RA**  |              |

---

## Seguridad de Red

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar el **aislamiento de red entre inquilinos** a nivel de plataforma *(3)*                              |         | **RA**       |
| Definir y configurar las **políticas de micro-segmentación** (grupos de seguridad) *(4)*                      | **RA**  |              |
| Implementar el **filtrado de tráfico** entrante/saliente (cortafuegos de aplicaciones, IDS/IPS) *(5)*          | **RA**  |              |
| Gestionar los **certificados TLS** y la terminación SSL de los servicios expuestos                            | **RA**  |              |
| Realizar **pruebas de penetración** en los recursos alojados en el VPC *(6)*                                  | **RA**  | **C**        |
| Supervisar **comportamientos anómalos** en los flujos de red del inquilino                                     | **RA**  |              |

*(3) Cloud Temple garantiza el aislamiento estricto entre VPCs de diferentes inquilinos.*  
*(4) La micro-segmentación (grupos de seguridad) estará disponible en H1 2026.*  
*(5) El filtrado del tráfico de aplicaciones dentro del VPC es responsabilidad del cliente.*  
*(6) Las pruebas de penetración deben declararse previamente a Cloud Temple.*

---

## Interconexión con Redes Externas

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Definir la **estrategia de interconexión** con entornos on-premise u otras nubes                              | **RA**  | **C**        |
| Suscribirse y configurar un acceso **VPN site-to-site** *(disponible H2 2026)*                                | **RA**  | **C**        |
| Suscribirse y configurar **Cloud Connect** (enlace dedicado) *(disponible H2 2026)*                           | **RA**  | **C**        |
| Gestionar los **BGP / rutas** asociados a las interconexiones de operador                                      | **RA**  | **CI**       |
| Garantizar la **seguridad de los flujos** que transitan por las interconexiones                               | **RA**  |              |

---

## Conexión de Recursos al VPC

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Conectar **instancias VM** a una red privada del VPC                                                           | **RA**  | **I**        |
| Conectar **recursos IaaS** (VMs VMware, OpenIaaS) a las redes privadas del VPC                               | **RA**  | **C**        |
| Configurar las **interfaces de red** de los recursos conectados al VPC                                        | **RA**  |              |
| Garantizar que los recursos conectados aplican **configuraciones de red coherentes** (pasarela, DNS)         | **RA**  |              |

---

## Monitoreo y Observabilidad de Red

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Supervisar el funcionamiento de los **componentes principales del VPC** (router, pasarela)                    | **I**   | **RA**       |
| Supervisar el **rendimiento del backbone** de red de Cloud Temple                                             | **I**   | **RA**       |
| Recopilar y analizar los **logs de flujo de red** (flow logs) del VPC *(disponible H1 2026)*                 | **RA**  | **I**        |
| Implementar la **supervisión de flujos de aplicaciones** en el VPC                                            | **RA**  |              |
| Supervisar la **latencia y el ancho de banda** de los flujos dentro del VPC                                   | **RA**  | **I**        |

---

## Gestión de Cambios y Capacidades

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Decidir agregar, modificar o eliminar recursos de red en su VPC                                                | **RA**  | **CI**       |
| Gestionar las capacidades y la escalabilidad de la infraestructura de red backbone                            |         | **RA**       |
| Planificar y gestionar el crecimiento del plan de direccionamiento IP en el VPC                               | **RA**  | **C**        |

---

## Gestión de Accesos e Identidades

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la accesibilidad de la **Consola Cloud Temple** y la API de red                                    |         | **RA**       |
| Gestionar las habilitaciones de los equipos de Cloud Temple a la infraestructura de red                       |         | **RA**       |
| Administrar los derechos de acceso al VPC en la Consola Cloud Temple (IAM)                                    | **RA**  |              |

---

## Registros (Logs)

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservar y poner a disposición los **registros de la plataforma VPC** *(7)*                                  |         | **RA**       |
| Recopilar y conservar los **logs de flujo** y registros de aplicaciones del inquilino                         | **RA**  |              |

*(7) La duración de retención de los registros de la plataforma VPC se especifica en el acuerdo de servicio correspondiente.*

---

## Documentación y Contractual

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Gestionar los aspectos comerciales y contractuales                                                             | **I**   | **RA**       |
| Supervisar la ejecución contractual del servicio                                                               | **RA**  | **I**        |
| Mantener y poner a disposición la documentación técnica del servicio VPC                                       | **I**   | **RA**       |
| Documentar la arquitectura de red desplegada en el inquilino (esquemas, CMDB)                                  | **RA**  |              |

---

## Reversibilidad

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Planificar el proyecto de reversibilidad de red y elegir las arquitecturas objetivo                            | **RA**  | **I**        |
| Exportar la configuración del VPC y los recursos de red a través de la API o las herramientas proporcionadas   | **RA**  | **I**        |
| Proceder al desmantelamiento de las configuraciones VPC tras la rescisión del contrato                         | **I**   | **RA**       |

---

> *Se encuentran disponibles servicios profesionales si desea delegar en Cloud Temple algunas o todas las responsabilidades. Póngase en contacto con su responsable comercial de Cloud Temple.*
