---
title: Modelo de Responsabilidad Compartida — Instancias VM
slug: /contractual/vm-instances/raci
---

# Modelo de Responsabilidad Compartida — Instancias VM

Este modelo **RACI** define la distribución de responsabilidades entre el cliente y Cloud Temple para el servicio de **Instancias VM** (máquinas virtuales compartidas).

> **Particularidades del servicio Instancias VM**  
> A diferencia de la oferta IaaS dedicada, el servicio Instancias VM se basa en una infraestructura de cómputo **compartida y completamente gestionada por Cloud Temple**. Cloud Temple gestiona completamente el hipervisor, las imágenes del sistema y la capa de infraestructura. El cliente conserva la plena responsabilidad de todo lo que se ejecuta dentro de sus instancias: sistema operativo invitado, aplicaciones, datos y seguridad de la aplicación.

---

## Definición de Roles

| Rol              | Descripción                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| (R) Responsable  | __R__ealiza el proceso                                                                            |
| (A) Aprueba      | __A__prueba la realización del proceso                                                            |
| (C) Consultado   | __C__onsultado durante el proceso                                                                 |
| (I) Informado    | __I__nformado de los resultados del proceso (a través de herramientas, portal o mensajería)       |

---

## Infraestructura Física e Hipervisor

Cloud Temple es completamente responsable de la capa de infraestructura e hipervisor. El cliente no tiene acceso a esta capa.

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la implementación y el mantenimiento de los **centros de datos físicos**                   |         | **RA**       |
| Garantizar la implementación y el mantenimiento de la infraestructura de **cómputo compartido**       | **I**   | **RA**       |
| Garantizar la implementación y el mantenimiento de la infraestructura de **almacenamiento**           | **I**   | **RA**       |
| Garantizar la implementación y el mantenimiento de la conectividad de la **red backbone**             | **I**   | **RA**       |
| Gestionar, actualizar y mantener la seguridad de los **hipervisores** *(1)*                           | **I**   | **RA**       |
| Garantizar la **alta disponibilidad** de la plataforma de hipervisores                                | **I**   | **RA**       |
| Gestionar incidentes, problemas y capacidades de las capas de infraestructura e hipervisor            | **I**   | **RA**       |
| Adquirir y mantener las **licencias** esenciales para el funcionamiento de la plataforma              |         | **RA**       |

*(1) Los hipervisores y la capa de virtualización son enteramente responsabilidad de Cloud Temple. El cliente no tiene acceso al hipervisor ni a la capa de gestión subyacente.*

---

## Imágenes, Plantillas y Catálogo

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Construir, publicar y mantener las **imágenes oficiales del catálogo** *(2)*                          | **I**   | **RA**       |
| Aplicar parches de seguridad y actualizaciones a las **imágenes del catálogo**                        |         | **RA**       |
| Validar la conformidad y seguridad de las imágenes publicadas en el catálogo                          |         | **RA**       |
| **Derivar** una imagen oficial del catálogo para crear una imagen personalizada *(3)*                 | **RA**  | **I**        |
| Garantizar la conformidad, las licencias y la seguridad de cualquier imagen personalizada derivada    | **RA**  |              |
| Mantener y actualizar imágenes personalizadas derivadas (parches OS, herramientas integradas)         | **RA**  |              |

*(2) Las imágenes oficiales del catálogo (distribuciones Linux, Windows Server, etc.) son construidas, mantenidas y actualizadas por Cloud Temple. Su nivel de seguridad inicial es responsabilidad de Cloud Temple.*  
*(3) El cliente puede derivar una imagen oficial del catálogo para crear una imagen personalizada. A partir de ese momento, la **responsabilidad total** de esa imagen recae sobre el cliente: conformidad, licencias, actualizaciones de seguridad, presencia y actualización de las tools y hardening. Cloud Temple no se encarga del mantenimiento de las imágenes derivadas.*

---

## Aprovisionamiento y Ciclo de Vida de las Instancias

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Crear, iniciar, detener y eliminar **instancias VM**                                                  | **RA**  | **I**        |
| Elegir el sabor (flavor) e imagen de inicio de la instancia                                           | **RA**  |              |
| Redimensionar una instancia (cambio de flavor) *(4)*                                                  | **RA**  | **I**        |
| Gestionar **metadatos y etiquetas** asociados a las instancias                                        | **RA**  |              |
| Gestionar el **ciclo de vida** de las instancias (creación, modificación, desmantelamiento)           | **RA**  |              |
| Tomar la decisión de agregar o reducir recursos                                                       | **RA**  |              |

*(4) El redimensionamiento puede requerir un reinicio de la instancia. La disponibilidad de la aplicación alojada durante esta operación es responsabilidad del cliente.*

---

## Sistema Operativo Invitado (Guest OS) y Tools

El cliente tiene el control total y la plena responsabilidad del sistema operativo dentro de sus instancias.

:::warning[Condición de Validez del SLA — Tools Obligatorias]
Las **tools de Instancias VM** (agentes de gestión del hipervisor) son **preinstaladas por Cloud Temple** al desplegar la instancia desde el catálogo. Estos agentes son indispensables para el correcto funcionamiento de la plataforma y la medición de la disponibilidad.

**Si el cliente desactiva o elimina estas tools, el SLA queda inmediatamente invalidado.** Cloud Temple ya no puede garantizar ni medir la disponibilidad de la instancia sin estos agentes. La presencia y el correcto funcionamiento de las tools son responsabilidad exclusiva del cliente durante toda la vida de la instancia.
:::

| Actividad                                                                                                      | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| **Preinstalar las tools** (agentes del hipervisor, controladores PV) al desplegar desde el catálogo *(5)*     |         | **RA**       |
| Garantizar que las **tools permanezcan instaladas, activas y actualizadas** *(6)*                             | **RA**  |              |
| Aplicar **parches y actualizaciones de seguridad** al sistema operativo invitado                              | **RA**  |              |
| **Reforzar** la configuración del sistema operativo (CIS, directrices ANSSI, etc.)                            | **RA**  |              |
| Gestionar **cuentas de usuario, contraseñas y claves SSH** dentro de la instancia *(7)*                       | **RA**  |              |
| Instalar y configurar **agentes de monitoreo** (métricas OS, registros del sistema)                           | **RA**  |              |
| Mantener la **conformidad normativa** aplicable al OS y los datos alojados                                    | **RA**  |              |

*(5) Cloud Temple proporciona una imagen inicial del catálogo con las tools preinstaladas. La responsabilidad de la configuración, el refuerzo y las actualizaciones posteriores del sistema operativo recae íntegramente en el cliente desde la primera conexión a la instancia.*  
*(6) La eliminación o desactivación de las tools por parte del cliente supone la suspensión inmediata de los compromisos de nivel de servicio (SLA) para la instancia afectada. Cloud Temple no puede ser considerado responsable de los fallos relacionados con la ausencia de estos agentes.*  
*(7) La seguridad de acceso a la instancia (solidez de las contraseñas, gestión de claves SSH, principio de mínimo privilegio) es responsabilidad exclusiva del cliente. Cloud Temple no puede ser considerado responsable de una vulneración resultante de una configuración de acceso insuficientemente segura.*

---

## Seguridad de las Instancias y Exposición a Internet

:::danger[Responsabilidad de Seguridad del Cliente]
Cloud Temple garantiza únicamente el **aislamiento de red entre inquilinos** a nivel de plataforma. La protección de cada instancia frente a amenazas de red (Internet, flujos internos) es **responsabilidad exclusiva del cliente**. Una instancia conectada a Internet sin filtrado adecuado o con credenciales débiles expone al cliente a riesgos de compromiso de los cuales Cloud Temple no puede ser considerado responsable.
:::

| Actividad                                                                                                            | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar el **aislamiento de red entre inquilinos** a nivel de plataforma                                         |         | **RA**       |
| **Proteger las instancias expuestas a Internet** (reglas de filtrado, grupos de seguridad, cortafuegos) *(A)*        | **RA**  |              |
| Garantizar que ningún servicio esté expuesto en Internet sin una **regla de filtrado explícita**                    | **RA**  |              |
| Implementar y mantener un **cortafuegos de aplicaciones** (WAF, IDS/IPS) si lo requiere el nivel de criticidad      | **RA**  |              |
| Configurar **contraseñas robustas y claves SSH seguras** en todas las instancias *(B)*                              | **RA**  |              |
| Aplicar el **principio de mínimo privilegio** en las cuentas OS y los accesos remotos (SSH, RDP)                    | **RA**  |              |
| Implementar una solución de **detección y respuesta a incidentes** (EDR, SIEM) si es necesario                      | **RA**  |              |
| Realizar el **endurecimiento de la configuración** de red y OS de las instancias                                    | **RA**  |              |
| Notificar a Cloud Temple ante **sospecha de compromiso** que afecte a la plataforma compartida                      | **RA**  | **C**        |

*(A) Cualquier instancia conectada a Internet a través de una IP pública o regla NAT sin filtrado adecuado lo es bajo la exclusiva responsabilidad del cliente. Cloud Temple no inspecciona ni filtra el tráfico entrante o saliente del inquilino.*  
*(B) El uso de contraseñas débiles, claves SSH comprometidas o acceso root sin restricciones constituye una vulneración de las buenas prácticas de seguridad. Cloud Temple no puede ser considerado responsable de una vulneración resultante de una configuración de acceso insuficientemente segura por parte del cliente.*

---

## Aplicaciones y Middleware

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Instalar, configurar y mantener **aplicaciones** y **middleware** en las instancias                   | **RA**  |              |
| Aplicar **parches de seguridad** a aplicaciones y middleware                                          | **RA**  |              |
| Adquirir y poseer las **licencias de software** para las aplicaciones alojadas                        | **RA**  |              |
| Implementar una **estrategia antivirus** en las instancias                                            | **RA**  |              |
| Gestionar la **continuidad de la aplicación** (balanceo de carga, replicación, clustering)            | **RA**  |              |

---

## Red y Conectividad

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantener la **red backbone** y la infraestructura de red compartida                                   | **I**   | **RA**       |
| Configurar las **interfaces de red** de las instancias                                                | **RA**  |              |
| Gestionar el **plan de direccionamiento IP** dentro del inquilino                                     | **RA**  | **I**        |
| Configurar y gestionar los **grupos de seguridad** (reglas de filtrado)                               | **RA**  |              |
| Suscribirse y configurar el **acceso a Internet** (IPs públicas, NAT)                                 | **RA**  |              |
| Gestionar incidentes en los enlaces de red del **backbone** (capa Cloud Temple)                       | **I**   | **RA**       |

---

## Almacenamiento de las Instancias

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantener la **infraestructura de almacenamiento** compartida en condición operativa                   | **I**   | **RA**       |
| Mantener la infraestructura de almacenamiento en condición de seguridad                               | **I**   | **RA**       |
| Crear, adjuntar y gestionar **volúmenes de almacenamiento adicionales**                               | **RA**  | **I**        |
| Garantizar la **coherencia de los datos** almacenados en las instancias                               | **RA**  |              |
| Definir y aplicar una **política de cifrado de datos** dentro de las instancias                       | **RA**  |              |

---

## Copias de Seguridad y Snapshots

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Mantener la **infraestructura de copias de seguridad** en condición operativa                         | **I**   | **RA**       |
| **Activar y configurar** la política de copia de seguridad asociada a una instancia                  | **RA**  |              |
| **Activar snapshots** puntuales de una instancia                                                      | **RA**  |              |
| Verificar la **coherencia y restaurabilidad** de las copias de seguridad realizadas                   | **RA**  |              |
| Realizar **pruebas de restauración** periódicas                                                       | **RA**  |              |
| Gestionar la **capacidad de almacenamiento** dedicada a las copias de seguridad                       |         | **RC**       |
| Definir la **estrategia de continuidad o recuperación** para las aplicaciones alojadas                | **RA**  |              |

---

## Monitoreo y Rendimiento

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Supervisar el correcto funcionamiento de la **infraestructura física y los hipervisores**             | **I**   | **RA**       |
| Supervisar el rendimiento de los **recursos compartidos** (cómputo, almacenamiento, red)             | **I**   | **RA**       |
| Supervisar el **rendimiento de las instancias** (CPU, RAM, E/S de disco, red a nivel invitado)        | **RA**  |              |
| Implementar una solución de **métricas y alertas** para las aplicaciones alojadas                     | **RA**  |              |

---

## Gestión de Accesos e Identidades

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la accesibilidad de la **Consola Cloud Temple** y la API                                   |         | **RA**       |
| Gestionar las **habilitaciones** de los equipos de Cloud Temple para la infraestructura SecNumCloud   |         | **RA**       |
| Administrar el acceso a la **Consola Cloud Temple** (usuarios, roles, IAM)                           | **RA**  |              |
| Gestionar el acceso **dentro de las instancias** (cuentas OS, claves SSH, bastion)                   | **RA**  |              |
| Configurar un **directorio de autenticación externo** (SSO, LDAP) para la Consola                    | **RA**  | **C**        |

---

## Registros (Logs)

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservar y poner a disposición los **registros de la plataforma** de Instancias VM *(8)*             |         | **RA**       |
| Recopilar, conservar y analizar los **registros de sistema y de aplicación** de las instancias        | **RA**  |              |

*(8) La duración de retención de los registros de la plataforma se especifica en el acuerdo de servicio de Instancias VM.*

---

## Documentación y Contractual

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Gestionar los aspectos comerciales y contractuales (presupuestos, pedidos, facturación)               | **I**   | **RA**       |
| Supervisar la ejecución contractual del servicio (entregas, facturación)                              | **RA**  | **I**        |
| Mantener y poner a disposición la documentación técnica del servicio                                  | **I**   | **RA**       |
| Mantener actualizada la **CMDB** relativa a las instancias desplegadas en el inquilino               | **RA**  |              |
| Mantener actualizada la política de acceso a la Consola y la API                                      | **RA**  |              |

---

## Reversibilidad

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Planificar el proyecto de reversibilidad y elegir las infraestructuras objetivo                        | **RA**  | **I**        |
| Exportar datos e imágenes de instancias a través de la API o las herramientas proporcionadas           | **RA**  | **I**        |
| Proceder al desmantelamiento de las configuraciones tras la rescisión del contrato                     | **I**   | **RA**       |
| Realizar el borrado seguro de datos en los soportes de almacenamiento y emitir un certificado          | **I**   | **RA**       |

---

> *Se encuentran disponibles servicios profesionales si desea delegar en Cloud Temple algunas o todas las responsabilidades listadas como obligaciones del cliente. Póngase en contacto con su responsable comercial de Cloud Temple.*
