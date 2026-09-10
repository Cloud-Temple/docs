---
title: Modelo de responsabilidad compartida — Instancias de VM
slug: /contractual/vm-instances/raci
---

# Modelo de responsabilidad compartida — Instancias de VM

Este es el modelo **RACI** que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso del servicio **instancias de VM** (máquinas virtuales compartidas).

> **Particularidad de la oferta de instancias de VM**  
> A diferencia de la oferta IaaS dedicada, el servicio de instancias de VM se basa en una infraestructura de cálculo **compartida y totalmente gestionada por Cloud Temple**. Cloud Temple se encarga de la gestión completa del hipervisor, las imágenes del sistema y la capa de infraestructura. El cliente conserva la plena responsabilidad de lo que se ejecuta dentro de sus instancias: sistema operativo invitado, aplicaciones, datos y seguridad de las aplicaciones.

---

## Definición de roles

| Rol          | Descripción                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Ejecuta  | __R__ealiza el proceso                                                                |
| (A) Aprueba  | __A__prueba la realización del proceso                                                 |
| (C) Consulta | __C__onsultado durante el proceso                                                     |
| (I) Informado| __I__nformado de los resultados del proceso (vía herramientas, el portal o la mensajería) |

---

## Infraestructura física e hipervisor

Cloud Temple es completamente responsable de la capa de infraestructura e hipervisor. El cliente no tiene acceso a esta capa.

| Actividad                                                                                               | Cliente | Cloud Temple |
|---------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantir la implementación y el mantenimiento de los **datacenters físicos**                            |         | **RA**       |
| Garantir la implementación y el mantenimiento de las infraestructuras de **cálculo compartido**         | **I**   | **RA**       |
| Garantir la implementación y el mantenimiento de las infraestructuras de **almacenamiento**            | **I**   | **RA**       |
| Garantir la implementación y el mantenimiento de la conectividad de **red backbone**                  | **I**   | **RA**       |
| Gestionar, actualizar y mantener en condiciones de seguridad los **hipervisores** *(1)*               | **I**   | **RA**       |
| Garantir la **alta disponibilidad** de la plataforma de hipervisores                                    | **I**   | **RA**       |
| Gestionar los incidentes, problemas y capacidades de las capas de infraestructura e hipervisor        | **I**   | **RA**       |
| Adquirir y mantener las **licencias** esenciales para el funcionamiento de la plataforma              |         | **RA**       |

*(1) Los hipervisores y la capa de virtualización son completamente responsabilidad de Cloud Temple. El cliente no dispone de ningún acceso al hipervisor ni a la capa de gestión subyacente.*

---

## Imágenes, plantillas y catálogo

| Actividad                                                                                                       | Cliente | Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------|--------------|
| Construir, publicar y mantener las **imágenes oficiales** del catálogo *(2)*                                   | **I**   | **RA**       |
| Aplicar parches de seguridad y actualizaciones en las **imágenes del catálogo**                                |         | **RA**       |
| Verificar el cumplimiento y la seguridad de las imágenes publicadas en el catálogo                             |         | **RA**       |
| **Derivar** una imagen oficial del catálogo para crear una imagen personalizada *(3)*                         | **RA**  | **I**        |
| Garantizar el cumplimiento, las licencias y la seguridad de cualquier imagen personalizada derivada            | **RA**  |              |
| Mantener y actualizar las imágenes personalizadas derivadas (parches del SO, herramientas integradas)          | **RA**  |              |

*(2) Las imágenes oficiales del catálogo (distribuciones de Linux, Windows Server, etc.) son construidas, mantenidas y actualizadas por Cloud Temple. Su nivel de seguridad inicial es responsabilidad de Cloud Temple.*  
*(3) El cliente puede derivar una imagen oficial del catálogo para crear una imagen personalizada. A partir de ese momento, **la responsabilidad total** de esta imagen recae en él: cumplimiento, licencias, actualizaciones de seguridad, presencia y actualización de las herramientas, y endurecimiento. Cloud Temple no se encarga del mantenimiento de estas imágenes derivadas.*

---

## Aprovisionamiento y ciclo de vida de las instancias

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Crear, iniciar, detener y eliminar **instancias VM**                                            | **RA** | **I**        |
| Elegir el tipo de máquina (flavor) y la imagen de inicio de la instancia                                        | **RA** |              |
| Redimensionar una instancia (cambio de tipo de máquina) *(4)*                                             | **RA** | **I**        |
| Gestionar los **metadatos y etiquetas** asociados a las instancias                                               | **RA** |              |
| Gestionar el **ciclo de vida** de las instancias (creación, modificación, desmantelamiento)                   | **RA** |              |
| Tomar la decisión de agregar o reducir recursos.                              | **RA** |            |

*(4) El redimensionamiento puede requerir un reinicio de la instancia. La disponibilidad de la aplicación alojada durante esta operación es responsabilidad del cliente.*

---

## Sistema operativo invitado (Guest OS) & herramientas

El cliente tiene el control total y la plena responsabilidad del sistema operativo dentro de sus instancias.

:::warning[Condición de validez del SLA — Herramientas obligatorias]
Las **tools VM instances** (agents de gestion de l'hyperviseur) están **preinstaladas por Cloud Temple** durante el despliegue de la instancia desde el catálogo. Estos agentes son indispensables para el correcto funcionamiento de la plataforma y para la medición de la disponibilidad.

**Si el cliente desactiva o elimina estas herramientas, el SLA caduca inmediatamente.** Cloud Temple ya no puede garantizar ni medir la disponibilidad de la instancia sin estos agentes. La presencia y el correcto funcionamiento de las herramientas son responsabilidad exclusiva del cliente durante la operación.
:::

| Activité                                                                                                        | Client | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------|--------|--------------|
| **Preinstalar las herramientas** (agents hyperviseur, PV drivers) durante el despliegue desde el catálogo *(5)*     |        | **RA**       |
| Asegurarse de que las **herramientas permanezcan instaladas, activadas y actualizadas** durante toda la vida útil de la instancia *(6)*       | **RA** |              |
| Aplicar **parches y actualizaciones de seguridad** del sistema operativo invitado                      | **RA** |              |
| **Endurecer** la configuración del sistema operativo (CIS, recommandations ANSSI, etc.)                       | **RA** |              |
| Gestionar las **cuentas de usuario, contraseñas y claves SSH** dentro de la instancia *(7)*                | **RA** |              |
| Instalar y configurar los **agentes de supervisión** (métriques OS, logs système)                              | **RA** |              |
| Mantener el **cumplimiento normativo** aplicable a los SO y a los datos alojados                            | **RA** |              |

*(5) Cloud Temple proporciona una imagen inicial en el estado de salida del catálogo con las herramientas preinstaladas. La responsabilidad de la configuración, el endurecimiento y las actualizaciones posteriores del sistema operativo recae íntegramente en el cliente desde la primera conexión a la instancia.*  
*(6) La eliminación o desactivación de las herramientas por parte del cliente provoca la suspensión inmediata de los compromisos de nivel de servicio (SLA) para la instancia en cuestión. Cloud Temple no puede ser responsable de los fallos relacionados con la ausencia de estos agentes.*  
*(7) La seguridad de los accesos a la instancia (solidité des mots de passe, gestion des clés SSH, principe de moindre privilège) es responsabilidad exclusiva del cliente. Cloud Temple no puede ser responsable de una vulneración derivada de una configuración de acceso insuficientemente segura.*

---

## Seguridad de las instancias y exposición a Internet

:::danger[Responsabilidad de seguridad del cliente]
Cloud Temple garantiza únicamente el **aislamiento interinquilino** a nivel de plataforma. La protección de cada instancia contra las amenazas de red (Internet, flux internes) es **totalmente responsabilidad del cliente**. Una instancia conectada a Internet sin un filtrado adecuado o con credenciales débiles expone al cliente a riesgos de compromiso por los cuales Cloud Temple no podría ser considerado responsable.
:::

| Activité                                                                                                              | Client | Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|--------|--------------|
| Garantizar el **aislamiento de red interinquilino** a nivel de plataforma                                              |        | **RA**       |
| **Proteger las instancias expuestas en Internet** (règles de filtrage, security groups, pare-feu) *(A)*               | **RA** |              |
| Asegurarse de que ningún servicio esté expuesto en Internet sin **regla de filtrado explícite**                            | **RA** |              |
| Implementar y mantener un **firewall de aplicación** (WAF, IDS/IPS) si lo requiere el nivel de criticité          | **RA** |              |
| Configurar **contraseñas robustas y claves SSH seguras** en todas las instancias *(B)*                  | **RA** |              |
| Aplicar el **principio de menor privilegio** en las cuentas del SO y los accesos remotos (SSH, RDP)                   | **RA** |              |
| Implementar una solución de **detección y respuesta a incidentes** (EDR, SIEM) si es necesario                         | **RA** |              |
| Realizar el **endurecimiento de la configuration** de red y SO de las instancias (deshabilitación de servicios inutiles)    | **RA** |              |
| Notificar a Cloud Temple en caso de **sospecha de compromiso** que afecte a la plataforma compartida                    | **RA** | **C**        |

*(A) Toda instancia conectada a Internet mediante una IP pública o una regla NAT sin un filtrado adecuado lo está bajo la exclusiva responsabilidad del cliente. Cloud Temple no realiza inspección ni filtrado de los flujos salientes o entrantes del tenant.*  
*(B) El uso de contraseñas débiles, claves SSH comprometidas o acceso root no restringido constituye un incumplimiento de las buenas prácticas de seguridad. Cloud Temple no puede ser considerado responsable de un compromiso resultante de una configuración de acceso insuficientemente segura por parte del cliente.*

---

## Aplicaciones y middleware

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Instalar, configurar y mantener las **aplicaciones** y **middleware** en las instancias                | **RA**  |              |
| Aplicar los **parches de seguridad** de las aplicaciones y middleware                                  | **RA**  |              |
| Adquirir y titular las **licencias de software** de las aplicaciones alojadas                          | **RA**  |              |
| Implementar una **estrategia antivirus** en las instancias                                             | **RA**  |              |
| Gestionar la **continuidad de la aplicación** (load balancing, réplication, clustering)                | **RA**  |              |

---

## Red y conectividad

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar el mantenimiento de la **red backbone** y de la infraestructura de red compartida                    | **I**  | **RA**       |
| Configurar las **interfaces de red** de las instancias                                                     | **RA** |              |
| Gestionar el **plan de direccionamiento IP** en el tenant                                                        | **RA** | **I**        |
| Configurar y gestionar los **grupos de seguridad** (security groups / règles de filtrage) *(6)*           | **RA** |              |
| Suscribir y configurar el **acceso a Internet** (IPs publiques, NAT)                                     | **RA** |         |
| Gestionar los incidentes en los enlaces de red **backbone** (couche Cloud Temple)                            | **I**  | **RA**       |

*(6) La configuración de las reglas de filtrado de red aplicables a las instancias es responsabilidad del cliente. Cloud Temple solo garantiza el aislamiento entre tenants a nivel de la plataforma.*

---

## Almacenamiento de instancias

| Actividad                                                                                              | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar el mantenimiento en condiciones operativas de la **infraestructura de almacenamiento** compartida        | **I**   | **RA**       |
| Garantizar el mantenimiento en condiciones de seguridad de la infraestructura de almacenamiento                          | **I**   | **RA**       |
| Crear, adjuntar y gestionar los **volúmenes de almacenamiento adicionales**                                   | **RA**  | **I**        |
| Asegurar la **consistencia de los datos** almacenados en las instancias                                  | **RA**  |              |
| Definir y aplicar una **política de cifrado de datos** dentro de las instancias *(7)*   | **RA**  |              |

*(7) El cifrado en reposo de la infraestructura de almacenamiento subyacente es responsabilidad de Cloud Temple. El cifrado a nivel de aplicación de los datos (a nivel del sistema de archivos o de la base de datos) es responsabilidad del cliente.*

---

## Copias de seguridad y snapshots

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar el mantenimiento operativo de la **infraestructura de copias de seguridad**                 | **I**   | **RA**       |
| **Activar y configurar** la política de copias de seguridad asociada a una instancia                   | **RA**  |              |
| **Crear snapshots** puntuales de una instancia                                                         | **RA**  |              |
| Verificar la **coherencia y la capacidad de restauración** de las copias de seguridad realizadas        | **RA**  |              |
| Realizar **pruebas de restauración** periódicas                                                        | **RA**  |              |
| Gestionar las **capacidades de almacenamiento** dedicadas a las copias de seguridad                    |         | **RC**       |
| Definir la **estrategia de continuidad o recuperación ante desastres** para las aplicaciones alojadas    | **RA**  |              |

---

## Supervisión y rendimiento

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Supervisar el correcto funcionamiento de la **infraestructura física y los hipervisores**              | **I**   | **RA**       |
| Garantizar el seguimiento del **rendimiento de los recursos compartidos** (cálculo, almacenamiento, red) | **I**   | **RA**       |
| Supervisar el **rendimiento de las instancias** (CPU, RAM, E/S de disco, red a nivel de invitado)       | **RA**  |              |
| Implementar una solución de **métricas y alertas** para las aplicaciones alojadas                      | **RA**  |              |

---

## Gestión de accesos & identidades

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la accesibilidad de la **Consola Cloud Temple** y de la API                                    |         | **RA**       |
| Gestionar las **habilitaciones** de los equipos de Cloud Temple en la infraestructura cualificada SecNumCloud          |         | **RA**       |
| Administrar los accesos a la **Consola Cloud Temple** (usuarios, roles, IAM)                        | **RA**  |              |
| Gestionar los accesos **dentro de las instancias** (cuentas OS, claves SSH, bastión)                              | **RA**  |              |
| Configurar un **repositorio de autenticación externa** (SSO, LDAP) para la Consola                  | **RA**  | **C**        |

---

## Registros (logs)

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Conservar y poner a disposición los **registros de la plataforma** de instancias VM *(8)*              |         | **RA**       |
| Recopilar, conservar y analizar los **registros del sistema y de las aplicaciones** de las instancias   | **RA**  |              |

*(8) La duración de retención de los registros de la plataforma se especifica en el acuerdo de servicio de las instancias VM.*

## Documentación & contractual

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Garantizar la gestión comercial y contractual (presupuestos, pedidos, facturación)                    | **I**   | **RA**       |
| Garantizar el seguimiento contractual del servicio (entregas, facturación)                              | **RA**  | **I**        |
| Garantizar el mantenimiento y la disponibilidad de la documentación técnica del servicio              | **I**   | **RA**       |
| Mantener actualizada la **CMDB** relativa a las instancias desplegadas en su tenant                   | **RA**  |              |
| Mantener actualizada la política de acceso a la Consola y a la API                                      | **RA**  |              |

---

## Reversibilidad

| Actividad                                                                                               | Cliente | Cloud Temple |
|--------------------------------------------------------------------------------------------------------|---------|--------------|
| Planificar el proyecto de reversibilidad y seleccionar las infraestructuras destino                   | **RA**  | **I**        |
| Exportar los datos y las imágenes de las instancias mediante la API o las herramientas disponibles    | **RA**  | **I**        |
| Proceder al desmantelamiento de las configuraciones tras la rescisión                                 | **I**   | **RA**       |
| Realizar la eliminación segura de los datos en los soportes de almacenamiento y emitir una constatación | **I**   | **RA**       |

---

> *Hay servicios profesionales disponibles si desea delegar total o parcialmente las responsabilidades enumeradas como a cargo del cliente. Contacte a su interlocutor comercial de Cloud Temple.*