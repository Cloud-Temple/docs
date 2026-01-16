---
title: Convención de Servicio SecNumCloud OpenIaaS
---

# OpenIaaS SERVICE AGREEMENT

| Recipients: | **CLIENT** |
| :--- | :--- |
| **Document Reference** | CT.AM.JUR.ANX OPENIaaS-202530101_v3.0.docx_JJJJ_AAAA |
| **Your Contacts** | *First Name* *Last Name* Account Manager email: *firstname.lastname*@cloud-temple.com |
| **Last Updated Date** | 01/17/2025 |
| **Contractual Validation Date** | Day JJ AAAA |

------------------------------------------------------------------------

| Version | Date | Action | Author |
| :--- | :--- | :--- | :--- |
| v0.1 | 06/07/2022 | Initial Draft | Lorena ALCALDE |
| v0.2 | 09/14/2022 | Enrichment | Lorena ALCALDE |
| v1.0 | 12/30/2022 | Integration of Indicators | Lorena ALCALDE |
| v1.1 | 01/23/2023 | Footer Update | Lorena ALCALDE |
| v1.2 | 05/22/2023 | Enrichment | Lorena ALCALDE |
| v1.3 | 06/29/2023 | Enrichment | Lorena ALCALDE |
| v1.4 | 11/06/2023 | Capital Update and Enrichment | Lorena ALCALDE |
| v1.5 | 11/30/2023 | Enrichment | Lorena ALCALDE |
| v1.6 | 03/21/2024 | Enrichment | Lorena ALCALDE |
| v2.0 | 03/29/2024 | Compliance Adjustments (SNC) | Nicolas ABRIOUX |
| v2.0 | 04/03/2024 | Publication | Lorena ALCALDE |
| v3.0 | 01/17/2025 | Enrichment | Emeline CAZAUX |

# Preliminares y Glosario

## Preliminar

Este documento formaliza el Acuerdo de Servicio asociado al servicio OpenIaaS en proceso de calificación SecNumCloud.

El Servicio se encuentra en proceso de calificación SecNumCloud (ver certificación que se incluirá como Anexo).

Este Acuerdo de Servicio complementa y es complementario a las Condiciones Generales de Venta y Uso del Prestador. Se entiende que los documentos contractuales se interpretarán de forma coherente entre sí. En caso de contradicción o divergencia entre los términos de los documentos contractuales, prevalecerán unos sobre otros en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)

2. Acuerdo de Servicio SecNumCloud IaaS

3. Acuerdo de Servicio SecNumCloud OpenIaaS

4. Acuerdo de Servicio SecNumCloud PaaS

5. Acuerdo de Servicio específico - Bare Metal

6. Acuerdo específico particular

7. Plan de Garantía de Seguridad (PAS)

8. Condiciones Particulares de Uso (CPU)

9. Acuerdo de Protección de Datos

## Glosario

En el presente Acuerdo de Servicio, el **COMITENTE**, el **Prestador** y las **Partes** se identifican en el Contrato al que se anexa el presente Acuerdo de Servicio.

Las expresiones siguientes utilizadas en el presente Acuerdo de Servicio se interpretarán de acuerdo con las definiciones que se les asignan a continuación:

- **Cambio:** Todo añadido, modificación o eliminación que afecte al Servicio, autorizado, planificado o gestionado.

- **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de puesta en producción y sus impactos (incluidos los financieros) son conocidos y aceptados de antemano por las Partes. Se incorpora entonces al catálogo de cambios estándar y, según los casos, puede tener una GTI y una GTR.

- **Contrato:** Designa el contrato suscrito por el COMITENTE ante el Prestador para permitir al COMITENTE beneficiarse del Servicio, al que se anexa el presente Acuerdo de Servicio.

- \***Acuerdo de Servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y conforme a los requisitos del Referencial SecNumCloud.

- **Solicitud de servicio:** Solicitud de evolución sujeta a un procedimiento, cuya realización: i) no modifica la CMDB, ii) el modo operativo, los costes y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de reversión, iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la retribución del contrato cuando se realiza en horas laborables y días laborables.

- **Disponibilidad:** Capacidad para garantizar la disponibilidad y el mantenimiento de un rendimiento óptimo del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

- **Datos técnicos:** Incluye todo el conjunto de datos manipulados para proporcionar el Servicio, especialmente la identidad de los beneficiarios y administradores de la infraestructura técnica, los registros de la infraestructura técnica, la configuración de accesos, el directorio, los certificados, etc.

- **Evento:** Un "evento" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

- **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales sobre una placa de cálculo.

- **Incidente:** Todo evento imprevisto que perturbe el funcionamiento normal del Servicio o comprometa la seguridad de los datos.

- **Incidente de seguridad:** Todo evento dentro del ámbito del Servicio:

  - De naturaleza intencionalmente maliciosa;
  - De naturaleza accidental que afecte a la integridad, confidencialidad o trazabilidad del Servicio o de los datos del COMITENTE;
  - Que afecte a las medidas de seguridad existentes. Las afectaciones a la Disponibilidad de origen no malicioso no se consideran como un Incidente de seguridad (avería hardware, error de software, fallo, desastre natural...).

- **Interfaz COMITENTE:** Interfaz de administración del Servicio puesta a disposición del COMITENTE por el Prestador, que agrupa una consola web de administración y una API.

- **Puesta en producción:** Acción(es) de administración para la realización del Cambio cuando éste ha sido aprobado (el cambio, en sentido ITIL, se refiere únicamente a la gestión del cambio y no a su realización/concreción).

- **Problema:** Causa de uno o varios Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo) que requiere un análisis y una resolución para prevenir su recurrencia.

- **Región:** Designa un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, que proporciona servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad normativa local.

- **Servicio OpenIaaS:** Designa el servicio IaaS basado en tecnología open source, en proceso de calificación SecNumCloud, entregado al COMITENTE por el Prestador desde infraestructuras técnicas mantenidas por el Prestador, tal como se describe en la sección « Descripción del Servicio » del presente Acuerdo de Servicio.

<!-- -->

- **Siniestro:** Designa un evento grave de origen natural o humano, accidental o intencional, que causa pérdidas y daños importantes para la Parte afectada.

<!-- -->

- **Supervisión:** Vigilancia de un Sistema de Información o de un Servicio, que implica la recopilación de diversos datos tales como mediciones y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente sobre los elementos supervisados, una prerrogativa que corresponde a las operaciones de Administración.

- **Tenant:** Una instancia aislada reservada a un usuario o grupo de usuarios, que comparte una infraestructura común manteniendo la independencia y seguridad de los datos y aplicaciones.

- **Zona de Disponibilidad (AZ) (Zona de disponibilidad):** Una sección específica e aislada de la infraestructura de computación en la nube, diseñada para garantizar la alta disponibilidad y resiliencia de los servicios mediante una distribución geográfica de los recursos.

# Acronyms

| Acronym | Definition |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Change Advisory Board |
| **CMDB** | Configuration Management Database -- Configuration Management Database |
| **COPIL** | Steering Committee |
| **COSTRAT** | Strategic Committee |
| **COPROJ** | Project Committee |
| **DB** | Database (database) |
| **DPA** | Data Protection Agreement |
| **DRP** | Disaster Recovery Plan (DRP) (Disaster Recovery Plan) |
| **GTE** | Escalation Time Guarantee |
| **GTI** | Intervention Time Guarantee |
| **GTR** | Resolution Time Guarantee |
| **ITIL** | Information Technology Infrastructure Library - Best practices for IT service management |
| **IaaS** | Infrastructure as a Service |
| **MCO** | Maintenance in Operational Condition |
| **MOA** | Client (Project Owner) |
| **MOE** | Contractor (Project Executor) |
| **MSP** | Managed Services Provider |
| **OS** | Operating system (operating system) |
| **PAQ** | Quality Assurance Plan |
| **PaaS** | Platform as a Service |
| **PAS** | Security Assurance Plan |
| **PASSI** | Information System Security Audit Provider |
| **RFC** | Request For Change -- Change Request |
| **RGPD** | General Data Protection Regulation (personal data) |
| **RPO** | Recovery Point Objective -- Data freshness upon restoration after an incident |
| **RTO** | Recovery Time Objective -- Service restoration time after an incident |
| **SDM** | Service Delivery Manager |
| **SLA** | Service Level Agreement -- Service Level Agreement |
| **SNC** | SecNumCloud |
| **SOC** | Security Operations Center |
| **TMA** | Third-party Application Maintenance |
| **UO** | Work Unit |
| **VABE** | Validation of Suitability for Good Operability |
| **VABF** | Validation of Suitability for Proper Functioning |
| **VM** | Virtual Machine (virtual machine) |
| **VSR** | Regular Service Validation |

# Objeto del presente Contrato de Servicio

El presente Contrato de Servicio establece los términos y condiciones según los cuales el Prestador se compromete a prestar el Servicio al COMITENTE. Su objeto es:

- Especificar los requisitos de rendimiento esperados por el COMITENTE en cuanto a funcionalidad y fiabilidad del Servicio;

- Enunciar las obligaciones del Prestador para cumplir con los niveles de servicio acordados;

- Identificar las normas regulatorias aplicables específicamente al Servicio prestado;

- Garantizar una uniformidad e integridad en la evaluación de la calidad del Servicio;

- Asegurar la excelencia de los servicios prestados, evaluada mediante indicadores cuantitativos de rendimiento.

Se estipula que, en caso de que al Prestador se le retire su calificación SecNumCloud, el Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalidades, por parte del COMITENTE. En tal caso, el Prestador se compromete a informar al COMITENTE de dicha descalificación mediante notificación oficial, a través de una carta certificada con acuse de recibo.

Cabe destacar que una modificación o ajuste de la calificación SecNumCloud no será interpretada como una revocación de la calificación inicial.

# Auditoría

El Prestador se compromete a permitir al COMITENTE, o a cualquier auditor externo e independiente del Prestador (que no sea competidor), que este último haya designado, acceder a todos los documentos necesarios para verificar el cumplimiento integral de las obligaciones derivadas de la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Al aceptar el presente Contrato de Servicio, el COMITENTE otorga su autorización expresa a:

1. La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI), así como a la entidad calificadora competente, para realizar la verificación de la conformidad del Servicio y su sistema de información con el marco de referencia SecNumCloud.
2. Un prestador de auditoría de seguridad de sistemas de información, debidamente cualificado PASSI y expresamente designado por el Prestador, para llevar a cabo auditorías de seguridad relativas al Servicio.

# Descripción del Servicio

## Modelo de responsabilidad compartida

El Servicio ofrecido por el Prestador se caracteriza por la puesta a disposición de las siguientes prestaciones, las cuales se alinean con el principio de responsabilidad compartida presentado en el referencial SecNumCloud:

- La provisión de recursos de cálculo (compute);

- La puesta a disposición de espacios de almacenamiento;

- El acceso a servicios de conectividad de red e internet;

- La oferta de un servicio de copia de seguridad dedicado a máquinas virtuales.

El modelo de responsabilidades compartidas aplicado entre el Prestador y el COMITENTE en el marco del Servicio se presenta en el apartado §7.1.

Queda entendido que el Prestador utilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales y conforme a los requisitos del referencial SecNumCloud.

## Detallada presentación del ámbito del Servicio

| Servicio | Descripción |
| :--- | :--- |
| **Compute** | Recurso de cálculo del Tenant COMPRADOR |
| **Storage** | Datos de producción del Tenant COMPRADOR |
| **Almacenamiento objeto S3** | Puesta a disposición de una infraestructura de almacenamiento objeto soberano multi-AZ y compatible con las API S3 estándar. |
| **Copia de seguridad** | Sujeto a suscripción al Almacenamiento objeto S3 |
| **Infraestructura de red** | Recursos de red del Tenant COMPRADOR |
| **Consola COMPRADOR** | El servicio que permite al COMPRADOR acceder a su servicio OpenIaaS y administrarlo a través de la interfaz de la Consola |
| **Soporte** | El servicio de soporte que acompaña a los servicios anteriores y únicamente a estos (\*) |

\_(\*) Dentro del ámbito del Servicio en proceso de calificación  
SNC y de las responsabilidades del Prestador al respecto\_

### Infraestructuras de Datacenters

El Servicio abarca la puesta a disposición, para cada Zona de Disponibilidad, de los servicios calificados a continuación:

- Sitio de datacenter ubicado en Francia para la Región FR, conforme a las últimas normas tecnológicas, con un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
- Puesta a disposición de salas técnicas dentro de datacenters dedicados al alojamiento de los equipos técnicos indispensables para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado y otros componentes necesarios;
- Alimentación eléctrica segura, garantizada mediante dos circuitos eléctricos independientes, asegurando la continuidad del servicio;
- Suministro de servicios de climatización, ajustados para cumplir con las normas y recomendaciones de los fabricantes de equipos, con el fin de mantener un entorno óptimo para los dispositivos técnicos;
- Supervisión continua y metrología detallada, que permiten un seguimiento preciso y una gestión proactiva del rendimiento y la seguridad del servicio prestado.

El Prestador garantiza la puesta a disposición de servicios avanzados de detección y extinción de incendios, diseñados para identificar y neutralizar eficazmente cualquier inicio de fuego dentro de las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos y los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir riesgos de incendio, minimizar los daños potenciales y asegurar la continuidad de las operaciones.

El COMITENTE queda informado de que todas las procedimientos y medidas de seguridad implementadas, incluyendo las pruebas anuales de conmutación a los grupos electrógenos, son esenciales para garantizar la continuidad e integridad de los servicios prestados. Estas prácticas están diseñadas para minimizar los riesgos de fallo y asegurar una reactividad óptima en caso de incidente. Al aceptar estas condiciones, el COMITENTE reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. Asimismo, se anima al COMITENTE a familiarizarse con las recomendaciones de seguridad proporcionadas e integrarlas en su propia estrategia de gestión de riesgos.

### Software infrastructure for Service management

The Provider supplies the COMMANDITAIRE with the administration console and the API necessary for using the Service. The Provider undertakes to maintain this administration console and API in optimal operational condition and to ensure their continuous security. The administration console and API are collectively referred to as the « COMMANDITAIRE interface ».

The Provider alerts the COMMANDITAIRE that abnormal use of the COMMANDITAIRE interface, particularly in cases of API overload (hammering), may trigger automatic security measures resulting in the blocking of access to the command APIs or to the Service. It should be emphasized that this situation does not constitute Service unavailability, but rather a protective action taken to safeguard the Service and the Provider’s infrastructure; therefore, the COMMANDITAIRE may not consider it as an unavailability in its calculations.

Furthermore, the Provider informs the COMMANDITAIRE that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITAIRE submits identical requests at a higher frequency, their rejection cannot be interpreted as Service unavailability.

### Infraestructuras de cálculo

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el COMITENTE, de los equipos necesarios para ejecutar las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

- La provisión de los chasis técnicos necesarios para el correcto funcionamiento de las láminas de cálculo;
- La provisión de las láminas de cálculo en las cantidades especificadas por el COMITENTE y distribuidas según las zonas de disponibilidad elegidas por él. Cabe destacar que estas láminas de cálculo están exclusivamente dedicadas al COMITENTE;
- La puesta a disposición de sistemas operativos tipo hipervisores, así como la garantía del mantenimiento en condiciones operativas y de seguridad de la infraestructura software necesaria para gestionar estos sistemas operativos. Es importante destacar que, aunque el Prestador es responsable del mantenimiento operativo y de la seguridad global del Servicio, no posee conocimientos específicos sobre los entornos de producción del COMITENTE ni sobre los requisitos relacionados con sus cargas de trabajo. Por tanto, la responsabilidad de decidir sobre la actualización de los sistemas operativos de las láminas de cálculo con hipervisores, una acción que podría requerir un reinicio, recae íntegramente sobre el COMITENTE. Esta operación puede realizarse a través de la Interfaz del COMITENTE.

La elección del modelo de lámina de cálculo, seleccionado entre el catálogo ofrecido por el Prestador, corresponde a la responsabilidad del COMITENTE.

### Infraestructura de almacenamiento

El servicio incluye la provisión al COMITENTE de una infraestructura de almacenamiento compartida de tipo SAN (Red de Área de Almacenamiento), que ofrece diversos niveles de rendimiento. Este servicio comprende:

- La implementación y el mantenimiento en condiciones operativas y de seguridad de la red SAN dedicada;
- La instalación y gestión de los racks de almacenamiento compartidos entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, su supervisión y su medición;
- La implementación de sistemas automatizados para la asignación de LUNs (Números de Unidad Lógica) de almacenamiento dedicados al uso del COMITENTE, conforme a los volúmenes suscritos por el COMITENTE.

### Red global de infraestructura

El Prestador despliega, en el marco del Servicio, una red global que permite al COMITENTE poner sus sistemas alojados en acceso. Este servicio incluye:

- La provisión, el mantenimiento en condiciones operativas y de seguridad de todos los enlaces en fibra óptica que interconectan las distintas Zonas de disponibilidad;

- La provisión, el mantenimiento en condiciones operativas y de seguridad de los equipos técnicos necesarios para el correcto funcionamiento de la red y para la aislamiento entre los distintos clientes.

La interconexión de red del inquilino COMITENTE con Internet o con redes privadas, así como los equipos de red, enlaces de operadores y otros componentes técnicos que realizan esta interconexión, no forman parte del ámbito del Servicio. Esta interconexión de red se implementa conforme a las disposiciones previstas en el Contrato.

### Backup Infrastructure

The Provider makes available to the CLIENT an integrated, dedicated, and managed backup service designed to protect its virtual machines. The Provider ensures the operational readiness and security of this backup service.

The Provider guarantees that the CLIENT's backups will be located outside the availability zone of the workloads being backed up, provided that the CLIENT has subscribed to the appropriate Work Units.

This backup service is limited to backing up virtual machines and the topology configurations of the OpenIaaS environment of the CLIENT's Tenants within the scope of the Service. The development and implementation of an adequate backup policy by the CLIENT depend on the subscription to specific Work Units. Therefore, it is the CLIENT's responsibility to ensure the availability of the necessary technical resources with the Provider to implement its backup policy or adjust it according to the available resources.

The Provider undertakes to notify the CLIENT in case of capacity constraints and to provide advisory assistance for resource optimization. The Provider's obligations will be limited to implementing the backup policy requirements expressed by the CLIENT, within the scope of the subscribed resources.

### Implementation of Business Continuity or Disaster Recovery Solutions

The Provider supplies the CONTRACTOR with all the necessary technical solutions to ensure optimal distribution of its resources across multiple Availability Zones. It is the CONTRACTOR's responsibility to effectively manage this resource distribution, for which it has access to the tools provided by the Provider for this purpose.

## Limitations of services in the OpenIaaS model under qualification

### Managed Services in RUN

It is important to note that the following are excluded from the Service:

- Hosting of physical components of the CUSTOMER;

- Network interconnection of the CUSTOMER's Tenant, to the Internet or to private networks, including operator links;

- Any managed service or TMA (Third-Party Managed Application);

- Any support for virtual machines at the OS level and above in the IaaS responsibility stack, even if it involves only monitoring.

That said, the CUSTOMER is in no way precluded from using such services through the Provider’s MSP offering to perform managed services on its Tenants. These services will then not be governed by this Service Agreement or its bilateral commitments/clauses.

### Configuración de recuperación

Por defecto, el Proveedor proporciona la implementación de los recursos del IaaS al COMITENTE reservando recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Corresponde al COMITENTE elegir las Zonas de disponibilidad a través de la interfaz del COMITENTE.

### Backup Configuration

The backup service ends with the backup of virtual machines and topology configurations representing the OpenIaaS environment of the COMMANDITAIRE's Tenants within the scope of the Service.

The backup service and the completion of the COMMANDITAIRE's backup policy are subject to the subscription of storage space on the mass storage necessary to ensure the service. It is therefore the responsibility of the COMMANDITAIRE to subscribe to the necessary technical means from the Provider to ensure the backup policy within its IT environment, or to adjust the backup policy according to the resources implemented. The Provider undertakes to inform the COMMANDITAIRE in case of technical capacity limitations.

The Provider will implement the necessary technical and human resources to back up the hosted system, within the limits of the resources subscribed by the COMMANDITAIRE.

Furthermore, in cases where the environment is not covered by the Provider, it is the responsibility of the COMMANDITAIRE to define its own backup strategy and to configure VM backups independently, or to submit a Service Request to the Provider so that the backup configuration for physical servers can be implemented, provided the COMMANDITAIRE has a managed service contract enabling the Provider to act via the COMMANDITAIRE's interface—the administration console provided under this Service Agreement—which includes functionalities for configuring backups.

Additionally, this service will only commit to translating, via the COMMANDITAIRE interface, the configuration clearly specified by the COMMANDITAIRE.

For reasons of flexibility in the Provider's offer, the COMMANDITAIRE has the option to associate a "no backup" policy on certain of its VMs. In such cases, it is the responsibility of the COMMANDITAIRE to assume this choice. The Provider will not back up VMs associated with the "no backup" policy. The Provider alerts the COMMANDITAIRE that choosing the "no backup" policy or opting for manual backup exposes the COMMANDITAIRE to the risk of permanent data loss in the event of an incident on the lower layers or on layers dependent on its responsibility under the IaaS model. In such a case, it will be impossible to hold the Provider responsible for restoring data, as there will be nothing to restore. The Provider recommends always backing up VMs.

For any matter concerning the OS installed on a virtual machine and any software or program running "on top of the OS," it is the responsibility of the COMMANDITAIRE to perform administrative and monitoring operations within the European Union if it wishes to ensure that all layers of the IT environment are operated and managed from within the European Union. Administrative operations conducted outside the Provider's responsibility perimeter under this Service Agreement, as specified in the section "Shared Responsibility Model" of this Service Agreement.

## Implementación del servicio

### Requis técnicos

Para la implementación del Servicio, el COMITENTE reconoce que deberá:

- Funcionar con una virtualización de tipo Xen en las versiones soportadas por el editor y proporcionadas por el Prestador en el marco del Servicio;

- Recurrir a través del Prestador al uso de la herramienta de copia de seguridad;

- Declarar direcciones IP fijas desde las cuales el Prestador le autorizará el acceso a la interfaz COMITENTE (filtrado mediante lista blanca). Los cambios en esta lista de IPs deberán realizarse a través del menú previsto para tal fin en la consola o mediante Solicitudes de Servicio para modificaciones posteriores. En la inicialización del servicio, el Prestador habrá sido informado, como mínimo, de al menos 1 dirección IP tal como se describe.

## Service location in France

It is specified that none of the operations or physical components involved in the provision of the Service, the subject of this Service Agreement, are located outside the European Union.

This includes, in particular, support, operational monitoring, and security monitoring (SOC) of the technical infrastructure delivering the Service. As a result, all storage, administrative tasks, monitoring, and processing are carried out in France.

### Localización de los centros de datos que alojan el Servicio

A menos que las operaciones de los colaboradores y las agencias del Prestador lo requieran, todas las operaciones de producción (incluyendo el almacenamiento y el procesamiento de datos) y los componentes técnicos que entregan el Servicio se encuentran en los centros de datos ubicados en Francia.

### Location of Cloud Temple agencies operating the service

The Cloud Temple staff members providing services within the scope of the Service operate from Cloud Temple agencies, all exclusively located in France. These agencies are situated in France, in Tours, Lyon, Caen, and Paris La Défense.

The CLIENT is informed of the possibility that Cloud Temple employees may work remotely. However, the PROVIDER guarantees the same level of security regarding remote access, particularly concerning VPN access. These remote access arrangements are implemented in compliance with the requirements of the SecNumCloud reference framework.

## Soporte

### Naturaleza del soporte acompañante al servicio

El Prestador proporciona un servicio de soporte técnico destinado a asistir al COMITENTE en la gestión, resolución de fallos y optimización de sus recursos desplegados. Este servicio cubre un amplio abanico de actividades, desde la ayuda en la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación se describe la caracterización y funcionalidades del servicio de soporte:

- Asistencia en la implementación inicial del uso del Servicio;
- Asistencia en la resolución de incidentes;
- Asistencia en la resolución de problemas;
- Seguimiento y asesoramiento sobre la optimización de la infraestructura técnica.

Dentro del marco del servicio de soporte, el Prestador no sustituye al COMITENTE en el uso del Servicio. El COMITENTE permanece totalmente responsable de la configuración, explotación de sus máquinas virtuales (VM) y sus tenants, y de la gestión de todos los elementos (datos y aplicaciones incluidos) que haya almacenado o instalado en las infraestructuras del Prestador. El servicio de soporte técnico se presta de conformidad con las Condiciones Generales de Venta y Uso, y el Prestador está sujeto a una obligación de medios.

El COMITENTE se compromete a utilizar el servicio de soporte técnico de forma razonable, absteniéndose especialmente de solicitar servicios no contratados al Prestador y de hacer intervenir a los equipos del Prestador ante sus propios clientes o terceros no incluidos en el Contrato. El Prestador se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla estos criterios.

El nivel de compromiso del soporte queda condicionado a la suscripción de las unidades de obra de soporte asociadas.

### Technical Support Request

Technical support is accessible through a ticketing system via the COMMANDITAIRE console and is available during normal business hours, excluding public holidays (8:00 – 18:00; Monday to Friday; French calendar and time zone). For emergencies occurring outside of business hours, particularly incidents significantly affecting production, the on-call service can be reached via a number provided to the COMMANDITAIRE at Service initiation.

For each request or incident, it is mandatory to create a ticket with the Provider’s support team. Initiating this ticket, including all necessary information, is essential and marks the beginning of the evaluation of the Provider’s commitments.

As soon as the Provider receives a request or incident notification—whether through the management console or following a phone call—a ticket is automatically created. When reporting an incident, it is crucial that the COMMANDITAIRE provides the Provider with as much detail as possible regarding the issue encountered. This step is essential to enable an accurate assessment of the situation, proper prioritization, and effective diagnosis.

The COMMANDITAIRE will then receive an email confirmation indicating the creation of the ticket and its unique ticket number. The COMMANDITAIRE can check the status and history of their requests and incident reports directly from the management console.

### Proceso de gestión de Incidentes

Al presentarse un Incidente, el equipo de soporte técnico del Prestador inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El COMITENTE debe colaborar activamente con el Prestador proporcionando todas las informaciones necesarias y realizando las pruebas requeridas. El Prestador puede acceder al Servicio del COMITENTE para diagnosticar el Incidente.

Si los Servicios del Prestador se consideran funcionales y el Incidente no es atribuible a él, el COMITENTE será informado. A solicitud del COMITENTE, el Prestador puede ofrecer Servicios Profesionales para identificar el origen del problema, facturable bajo acuerdo previo por tramos de 30 minutos.

En caso de que el Incidente sea atribuible al Prestador o a uno de sus subcontratistas, este completará el diagnóstico y se encargará de la restauración del Servicio sin costos adicionales. El diagnóstico se basará en los intercambios entre las Partes y los datos del Prestador, considerándose estos elementos como probantes por acuerdo mutuo de las Partes.

### Proceso de priorización de los tratamientos

La determinación del nivel de prioridad de un caso se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de criticidad:

- Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción |
| :--- | :--- |
| **Impacto I1** | El o los servicios del Proveedor están interrumpidos |
| **Impacto I2** | El o los servicios del Proveedor están degradados |
| **Impacto I3** | El o los servicios del Proveedor actualmente son estables, pero muestran signos de posible deterioro a largo plazo |

- Los niveles de criticidad se definen de la siguiente manera:

| Nivel de criticidad | Descripción |
| :--- | :--- |
| **Criticidad C1** | El o los servicios del Proveedor se degradan a una velocidad preocupante |
| **Criticidad C2** | El o los servicios del Proveedor se deterioran progresivamente con el tiempo |
| **Criticidad C3** | El o los servicios del Proveedor presentan uno o varios inconvenientes sin consecuencias significativas |

- En base a un análisis exhaustivo de la situación, considerando los elementos determinantes del Impacto y la Criticidad, se asigna una prioridad al ticket conforme a la matriz de decisión siguiente:

| Nivel de impacto / Nivel de criticidad | Impacto I1 | Impacto I2 | Impacto I3 |
| :--- | :--- | :--- | :--- |
| **Criticidad C1** | Prioridad **P1** | Prioridad **P2** | Prioridad **P3** |
| **Criticidad C2** | Prioridad **P2** | Prioridad **P3** | Prioridad **P4** |
| **Criticidad C3** | Prioridad **P3** | Prioridad **P4** | Prioridad **P5** |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### Idioma y localización del servicio de soporte

El soporte es prestado por el Proveedor al COMITENTE como mínimo en idioma francés. El soporte también puede proporcionarse en idioma inglés.

Las operaciones del servicio de soporte del Proveedor para la oferta de servicio de infraestructura calificada SecNumCloud se encuentran en la Unión Europea.

# Commitments and Service Levels

The Provider undertakes to ensure continuous monitoring of the performance and security integrity of its technical infrastructure delivering the Service, ensuring optimal operation.

Service unavailability, subject to a performance indicator, is acknowledged as soon as it is detected by the Provider's monitoring system, or following notification from a user of the CLIENT. The start of unavailability is set at the earliest of these two events, ensuring accurate and fair calculation of downtime.

The end of unavailability is officially marked by the complete restoration of the service, confirmed either by the Provider's monitoring tools or by user feedback, thus ensuring an effective resumption of operations and an accurate measurement of the interruption duration.

## Compromisos de disponibilidad de la infraestructura

El Prestador se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican bajo la condición de que el COMITENTE implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la Región concernida.

En caso de no cumplimiento de estas condiciones por parte del COMITENTE, este quedará inhabilitado para reclamar la aplicación de los SLAs correspondientes, los cuales están específicamente identificados con un asterisco (\*). El acceso a los SLAs se realiza a través de la interfaz del COMITENTE. Las mediciones se calculan mensualmente:

- \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilidad de la potencia de cálculo (Compute): tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilidad del almacenamiento: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 3 : IC-INFRA_SNC-03** -- Fiabilidad de la copia de seguridad: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 5 : IC-INFRA_SNC-05** -- Acceso a Internet: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.

***Notas***:

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Prestador se reserva el derecho de ajustar su configuración de enrutamiento de internet para limitar el impacto de dicho ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al COMITENTE es objeto de ataque, el Prestador puede recurrir a la técnica de blackholing mediante la comunidad BGP para bloquear todo el tráfico hacia la dirección IP afectada en los proveedores upstream, con el fin de proteger los recursos del COMITENTE, así como los de otros COMITENTES y la infraestructura del Prestador. El Prestador insta encarecidamente al COMITENTE a adoptar medidas similares, tales como el uso de software de cortafuegos de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad mediante la API de comando.*

- *El Prestador insiste en la necesidad para el COMITENTE de minimizar las aperturas de flujos, evitando especialmente exponer los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) a todo Internet (subred 0.0.0.0/0), así como protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## Compromiso de disponibilidad de la interfaz COMPRADOR

- SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada del 97 %, asegurada de forma continua, 24 horas al día y 7 días a la semana.
- SLA 7: IC-INFRA_SNC-07 -- Acceso a las APIs de control del Servicio: una disponibilidad del 99,9 %, calculada sobre una base 24 horas al día, 7 días a la semana.

## Compromiso de disponibilidad del soporte

- **SLA 8: IC-INFRA_SNC-08** -- Estos son los compromisos de rendimiento del soporte técnico del Prestador para los incidentes, excluyendo las mantenimientos programados:

| Prioridad | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| :--- | :--- | :--- |
| **Prioridad P1** | 30 min | 95% |
| **Prioridad P2** | 2 h | 90% |
| **Prioridad P3** | 4 h | 90% |
| **Prioridad P4** | 24 h | 85% |
| **Prioridad P5** | 48 h | 85% |

- **SLA 9: IC-INFRA_SNC-09** -- Estos son los compromisos de rendimiento del soporte técnico del Prestador para las solicitudes de servicio:

| Tipo | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| :--- | :--- | :--- |
| **Solicitud de servicio** | 4 h | 90% |

*Nota*:

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el COMITENTE abre el ticket y la primera intervención del soporte del Prestador.*
- *La investigación de incidentes relacionados con los COMITENTES no incluirá intervención remota en los servidores alojados por el COMITENTE. Esta asistencia se limitará a la explicación de las métricas disponibles relativas al entorno del COMITENTE, con el fin de facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Sobre la base de los resultados de este análisis, podrán sugerirse recomendaciones.*

## S3 Object Storage Availability Commitment

- **SLA 10: IC-INFRA_SNC-10** -- Below are the availability commitments for S3 Object Storage:

| Indicator | Commitment | Availability Target |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Object storage durability within a region | 99.9999999% / year |
| **IC-INFRA-SNC-10.2** | S3 Object Storage API availability | 99.99% |
| **IC-INFRA-SNC-10.3** | Maximum latency for accessing an object within a region | 150 ms |

Notes:

- The Object Storage Service is specifically designed for object storage and must be used exclusively for this purpose, **strictly excluding its use in block mode**. Using it in block mode through indirect methods, such as employing *"FUSE"* in a Linux environment, constitutes a violation of the terms of use. No incident, malfunction, or damage resulting from such non-compliant usage will be covered by the Service Level Agreements (SLAs) defined in this service agreement.
- The durability guarantee is conditional upon the use of services in accordance with current best practices and standards, and explicitly excludes any data modification, whether intentional or accidental, resulting from actions taken by the **CLIENT**.

## Precision regarding backup commitment

The backup strategy deployed for the CLIENT is subject to the subscription of appropriate work units.

The Provider commits to making available a backup solution that will enable the CLIENT to implement the desired backup policies.

It is specified that the Provider's scope ends with the provision of a backup service, and it is the CLIENT's responsibility to monitor, via the CLIENT's interface, the proper execution of associated policies.

It is further specified that management of storage capacity for the dedicated backup storage space remains the sole responsibility of the CLIENT. The Provider will make available the utilization rate via the console.

*Example: Failure to back up a virtual machine:*

*The CLIENT is responsible for verifying and monitoring the correct execution of backup policies. If the CLIENT detects that a virtual machine is not being backed up, it is their responsibility to investigate the cause. The CLIENT may contact the Provider's Support team, according to the support level subscribed, for assistance.*

**SLA 8: IC-INFRA_SNC-08 and SLA 9** will apply exclusively in the event of a backup service incident.

# Organization of the contractual relationship

## Responsabilidades del Proveedor

El Proveedor se compromete a:

- Informar adecuadamente a su CLIENTE (por ejemplo, en caso de límite de capacidad de recursos técnicos que proporcionan el Servicio).

- Informar formalmente al CLIENTE y dentro de un plazo de un mes, de cualquier cambio jurídico, organizativo o técnico que pueda tener un impacto en la conformidad del Servicio con los requisitos de protección frente a las leyes extranjeras (19.6 del referencial SNC v3.2).

- Proporcionar al CLIENTE interfaces y interfaces de servicio que estén disponibles al menos en lengua francesa.

- Tener en cuenta los requisitos sectoriales específicos relacionados con los tipos de información confiados por el CLIENTE en el marco de la implementación del Servicio, dentro de los límites de las responsabilidades del Proveedor por una parte, y de las disposiciones previstas en el Contrato por otra parte.

- Estudiar los requisitos sectoriales específicos relacionados con los tipos de información confiados por el CLIENTE en el marco de la implementación del Servicio, posteriormente expresados por el CLIENTE, e informar a este último de las acciones necesarias para su consideración.

- No divulgar ninguna información relacionada con la prestación a terceros, salvo autorización formal y por escrito del CLIENTE.

- Poner a disposición todas las informaciones necesarias para la realización de auditorías de conformidad conforme a las disposiciones del artículo 28 del RGPD.

- Informar al CLIENTE, a través de esta Convención de Servicio, sobre cualquier incidente de seguridad que afecte al Servicio o al uso que el CLIENTE hace del Servicio (incluyendo los datos del CLIENTE).

- Permitir que un proveedor de auditoría de seguridad de sistemas de información (PASSI) cualificado, designado por el Proveedor, audite el servicio y su sistema de información, conforme al plan de control del SecNumCloud del Proveedor. Además, el Proveedor se compromete a proporcionar todas las informaciones necesarias para llevar a cabo las auditorías de conformidad según las disposiciones del artículo 28 del RGPD, realizadas por el cliente o por un tercero designado.

- Proporcionar, en calidad de subcontratista, conforme al artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y consejos al CLIENTE, alertándolo en caso de que una instrucción emitida por este último pueda constituir una violación de las normas de protección de datos.

- Notificar al CLIENTE en un plazo razonable, a través de la consola del CLIENTE o por correo electrónico al contacto designado del CLIENTE, cuando un proyecto afecte o pueda afectar al nivel de seguridad o disponibilidad del Servicio, o genere una pérdida de funcionalidad, los posibles impactos, las medidas de mitigación implementadas, así como los riesgos residuales que lo afecten.

- Documentar y poner en práctica todos los procedimientos necesarios para cumplir con los requisitos legales, reglamentarios y contractuales aplicables al servicio, así como con las necesidades de seguridad específicas del CLIENTE, definidas por este último y previstas en el Contrato.

- No utilizar los datos del CLIENTE derivados de la producción para realizar pruebas, salvo obtener previamente la autorización expresa del CLIENTE, en cuyo caso el Proveedor se compromete a anonimizar dichos datos y a garantizar su confidencialidad durante el proceso de anonimización.

- Eliminar los datos y los Datos técnicos relativos al CLIENTE, conforme a la «procedimiento de borrado de datos al final del Contrato» descrito en esta Convención de Servicio, en caso de finalización o rescisión del Contrato.

- Garantizar una eliminación segura de todos los datos del CLIENTE mediante una reescritura completa de todos los soportes que hayan albergado sus datos en el marco del Servicio.

Bajo solicitud formal y por escrito del CLIENTE, el Proveedor se compromete a:

1. Facilitar al CLIENTE el reglamento interno y la carta de ética del Proveedor;

2. Facilitar al CLIENTE las sanciones aplicables en caso de infracción a la política de seguridad;

3. Proporcionar al CLIENTE todos los eventos que le conciernen en los elementos de registro del Servicio; el CLIENTE podrá, además, consultar de forma autónoma los eventos relacionados con su uso del Servicio a través de las interfaces web y API del Servicio;

4. Facilitar al CLIENTE los procedimientos necesarios para cumplir con los requisitos legales, reglamentarios y contractuales vigentes aplicables al Servicio, así como con las necesidades de seguridad específicas del CLIENTE previstas en el Contrato;

5. Proporcionar los elementos de evaluación de riesgos relativos a la sometimiento de los datos del CLIENTE al derecho de un Estado no miembro de la Unión Europea;

6. Informar al CLIENTE sobre los subcontratistas posteriores que intervienen en la prestación del Servicio, y notificarle cualquier cambio que afecte a estos subcontratistas.

> El Proveedor y todas sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber: la dignidad humana, la libertad, la democracia, la igualdad, el Estado de derecho, así como el respeto a los Derechos Humanos. El servicio prestado por el Proveedor es conforme a la legislación vigente en materia de derechos fundamentales y a los valores de la Unión Europea relacionados con el respeto a la dignidad humana, la libertad, la igualdad, la democracia y el Estado de derecho.

## Limitación de responsabilidades del Prestador

Dado el conjunto de definiciones y condiciones mencionadas en el presente Acuerdo de servicio, las responsabilidades del Prestador quedan limitadas de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección « Modelo de responsabilidades compartidas » del presente Acuerdo de servicio, limita en la práctica la implicación del Prestador en las capas de funcionamiento situadas "por encima" de la provisión de recursos de cálculo, red, almacenamiento y copias de seguridad. Esto excluye especialmente, sin limitarse a:

    - La gestión de lo que está instalado en las máquinas virtuales (Sistemas Operativos, middleware, aplicaciones, etc.);

    - El mantenimiento actualizado de los Sistemas Operativos y otros software instalados por el COMITENTE en sus máquinas dentro de sus Tenants;

    - La seguridad de los programas, software y aplicaciones instalados en las máquinas virtuales;

    - La actualización de las máquinas virtuales;

    - La copia de seguridad de los datos a nivel aplicativo.

2. El Prestador no puede asumir compromisos de copia de seguridad de los Tenants del COMITENTE sin que el COMITENTE haya suscrito previamente las unidades de obra adecuadas.

3. El Prestador no puede reivindicar la propiedad de los datos transmitidos y generados por el COMITENTE. En efecto, dichos datos son propiedad exclusiva del COMITENTE.

4. El Prestador destaca que en ningún caso puede explotar y/o disponer de los datos transmitidos y generados por el COMITENTE sin la autorización previa de este último, teniendo en cuenta que su uso está reservado exclusivamente al COMITENTE.

5. El Prestador se exime de toda responsabilidad respecto a los componentes físicos alojados y gestionados por el Prestador, pero que son propiedad directa del COMITENTE o de un tercero con el que el COMITENTE haya contratado. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y, por tanto, queda fuera del ámbito del presente Acuerdo de servicio. Corresponde al COMITENTE evaluar el nivel de adherencia o dependencia que introducen estos componentes respecto al Servicio OpenIaaS en proceso de calificación SecNumCloud.

## Access Restrictions

Within the scope of the Service, the Provider is formally prohibited from accessing Tenants belonging to the CLIENT without prior authorization. It is the responsibility of the CLIENT to provide the necessary access to the Provider's personnel, according to the specific requirements of the hosting and, where applicable, professional support services, if this option has been selected by the CLIENT.

The CLIENT acknowledges that such access is granted exclusively for the purposes related to the provision of the agreed services, thereby ensuring secure and compliant management in accordance with the terms of the agreement.

Remote access by third parties involved in the Provider's service delivery is strictly prohibited. In the event that a specific technical requirement necessitates such access, it may only be established after clearly notifying the CLIENT, providing a detailed justification, and obtaining the CLIENT’s written consent.

This measure ensures control and security of the CLIENT’s data, by guaranteeing that any exception to the rule is duly authorized and documented.

## Responsibilities of Third Parties Participating in Service Delivery

The Provider maintains a list of third-party partners involved in the delivery of the Service. These third parties include software vendors, service providers (of the Provider), and other suppliers participating in the delivery of the Service. The Provider implements the following measures with respect to these third parties:

- The Provider requires that all third parties involved in service implementation maintain a security level at least equivalent to the one it commits to maintaining in its own security policy applicable to the Secure Temple service;

- The Provider contracts with each third party involved in service implementation specific audit clauses enabling a qualified body to verify that these third parties comply with legal requirements and SNC requirements, thereby allowing the Provider to fulfill its obligations under this Service Agreement;

- The Provider implements a procedure to regularly monitor the measures implemented by third parties involved in service delivery to ensure compliance with the Provider’s requirements for fulfilling its obligations under this Service Agreement;

- The Provider conducts ongoing monitoring of changes made by third parties involved in service implementation that could impact the security level of the Service’s information system.

## Responsabilidades y obligaciones del COMITENTE

El COMITENTE tiene las siguientes obligaciones en el marco del Servicio:

- Para recordar, el Prestador proporciona al COMITENTE una plataforma de ejecución de máquinas virtuales, siendo responsabilidad del COMITENTE la configuración de estas. Cada máquina virtual no puede funcionar sin una política de copia de seguridad asociada. El Prestador define mediante sus interfaces políticas de copia de seguridad automática. No obstante, corresponde al COMITENTE activar dichas políticas de copia de seguridad y, por tanto, activar las máquinas virtuales.

- El COMITENTE autoriza a la ANSSI y al organismo de acreditación SNC a auditar el Servicio y la infraestructura técnica que proporciona el Servicio.

- El COMITENTE es responsable de informar al Prestador de cualquier exigencia sectorial específica relacionada con los tipos de información confiados por el COMITENTE y que deban ser tenidas en cuenta por el Prestador.

- El COMITENTE acepta no solicitar al Prestador exigencias o acciones que desvíen al Prestador de las exigencias del referencial SecNumCloud en su versión vigente, por un lado, ni que reduzcan el nivel de seguridad establecido mediante el cumplimiento de las exigencias de dicho referencial, por otro lado.

## Derechos del COMITENTE

En cualquier momento durante la relación contractual, el COMITENTE puede presentar una reclamación relativa al servicio calificado ante la ANSSI.

En cualquier momento, el COMITENTE puede solicitar al Prestador que le haga accesible su reglamento interno y su carta de ética.

## Eliminación de datos al final del contrato

Al final del contrato, ya sea por vencimiento o por rescisión por cualquier motivo, el Prestador se compromete a proceder con la eliminación segura de toda la información del COMANDITARIO, incluidas las datos técnicos. El Prestador se asegurará de notificar formalmente al COMANDITARIO con un plazo previo de veintiún (21) días calendario. A continuación, los datos del COMANDITARIO serán eliminados en un plazo máximo de treinta (30) días tras dicha notificación.

Para acreditar dicha eliminación, el Prestador entregará al COMANDITARIO un certificado que confirme la eliminación de los datos.

# Ciclo de vida de la presente Convención de servicio

## Entrada en vigor de la Convención de servicio

La presente Convención de servicio entra en vigor el día de su firma por parte del COMITENTE.

La recopilación, manipulación, almacenamiento y tratamiento de los datos realizados en el marco del pre-venta, la implementación, la interrupción del Servicio, se llevan a cabo respetando la legislación vigente.

## Evoluciones de la Convención de Servicio

Los cambios o adiciones realizados a la presente Convención de Servicio
derivan exclusivamente de las solicitudes formuladas por los órganos de
gobierno designados para este fin. Estas propuestas de modificación serán
examinadas por las Partes, facultadas para determinar los aspectos
que requieren una formalización por escrito.

Se acuerda que toda evolución de la Convención de Servicio, tras su validación,
que altere las condiciones financieras inicialmente establecidas,
requerirá la elaboración y firma de un aditamento al Contrato vigente.

Los factores que pueden provocar una revisión de esta Convención de Servicio
incluyen, sin limitarse a:

- La evolución de la infraestructura técnica que proporciona el Servicio
    OpenIaaS;
- Los ajustes realizados por el Prestador en los servicios desplegados
    para ofrecer el Servicio;
- Las variaciones en los compromisos asumidos y las sanciones aplicables;
- Las reconfiguraciones organizativas dentro del COMITENTE o del Prestador;
- La expansión o reducción del ámbito de aplicación del Servicio.

La gestión de versiones y revisiones de la Convención de Servicio se documenta
en el preámbulo del documento para facilitar su seguimiento.

### Evolutions triggered by the COMMANDITARY

The changes to the Service Agreement may, in particular, originate from:

- An evolution of the infrastructure managed by the Provider;

- A modification of the services implemented by the Provider;

- A change in the service level commitments by the Provider.

### Changes triggered by the Provider

Any modification to the Service Agreement must be accepted by the **CLIENT**. It is understood that any validated modification or addition altering the financial terms of the Contract may require the signing of an amendment to it.

## Reversibility

In addition, Cloud Temple undertakes to allow the revision of this Service Agreement (including its termination) without penalty for the CLIENT in the event of loss of SecNumCloud qualification.

The Services do not include a reversibility obligation (i.e., assistance to the CLIENT to enable migration of its system to another "Provider"), except for the provision by the Provider to the CLIENT of the CLIENT interface, allowing the CLIENT to back up and retrieve its data—including configuration data of its information system—through one of the following technical options, at the CLIENT’s discretion:  
- Provision of files in one or more documented and usable formats outside the service provided by the Provider; or  
- Implementation of technical interfaces enabling access to data according to a documented and usable schema (API).

The CLIENT, as sole owner of its system, must take all necessary measures to facilitate this operation as required (including, in particular, the development of thorough documentation and the creation of reversibility plans). If the CLIENT requires additional support, the Provider may offer a consulting engagement on this matter under a separate contract to be negotiated.

# Disponibilidad, continuidad y restauración del servicio

## Gestión de incidentes e interrupciones

### Incidentes

#### Types of Incidents Covered under this Service Agreement

- Accidents;

- Failures and malfunctions;

- Security incidents affecting the availability, confidentiality, or integrity of the Service.

#### Incident Management

> The Provider shall inform the CUSTOMER as soon as possible of any incidents or outages, through a notification in the CUSTOMER's console or by email to the designated CUSTOMER contact. The Provider shall inform the CUSTOMER about the incident resolution via the same channel used to report the incident, or via the channel specified in the incident notification.

#### Security Incident Notification Level

The **CLIENT** is responsible for selecting the severity levels of security incidents for which it wishes to be notified, for example by formalizing them in an applicable SLA for the Service.

By default, the **CLIENT** is notified of:

- Security incidents with impact (impact levels I1 and I2 according to the impact scale defined in the prioritization process for handling incidents in this Service Agreement);

- Security incidents affecting the confidentiality or integrity of the **CLIENT**'s data entrusted within the scope of the Service;

- Personal data breaches for which the **CLIENT** is responsible for processing, in accordance with Article 8 of Annex DPA under the terms of the Service;

## Servicio de mantenimiento

### Nature of the maintenance

Data breaches involving personal data for which the Provider is responsible for processing and which include personal data of the CLIENT, in accordance with Article 8 of Annex DPA. The maintenance provided consists of:

- Implementation of the Service’s operational continuity plan to ensure good availability indicators, as committed to by the Provider above;

- Implementation of the PCA/PRA plan, if subscribed by the CLIENT, triggered according to any incidents that may occur.

### Remote Access to Cloud Temple within the COMMANDITAIRE's Environment

Under the terms of this Service Agreement, the Provider is prohibited from accessing the COMMANDITAIRE's Tenants or the COMMANDITAIRE's interface space.

It shall be the responsibility of the COMMANDITAIRE to grant the necessary access to the Provider's personnel. The COMMANDITAIRE acknowledges that such access will be used solely for hosting purposes and ultimately for managed services (if subscribed to by the COMMANDITAIRE).

### Remote access by third parties participating in the provision of the service within the COMMANDITAIRE's scope

No remote access by third parties participating in the provision of the Service is permitted.

If a technical requirement made this situation necessary, such remote access would only be carried out after notifying the COMMANDITAIRE, providing justification, and obtaining their written approval.

# Procedure for Data Erasure at Contract End

At the end of the Contract, whether due to expiration or for any other reason, the Provider shall ensure the secure erasure of all data processed under the Service, including the COMMANDITARY's technical data. The Provider shall give formal notice, respecting a notice period of twenty-one (21) calendar days. The COMMANDITARY's data shall be deleted within a maximum of thirty (30) days after notification. The Provider shall issue a data deletion certificate to the COMMANDITARY.

# Applicable Law

## En general

El derecho aplicable y ante el cual está sometida la presente Convención de servicio es el derecho francés.

## Compliance with applicable laws and regulations

The Provider undertakes the following:

- Identification of legal and regulatory requirements applicable within the scope of the Service;

- Compliance with applicable legal and regulatory requirements regarding the data entrusted to the Provider, within the limits of the Provider’s responsibilities on one hand, and the provisions set forth in the Contract on the other hand;

- Compliance with the Data Protection Act (Loi informatique et libertés) and the GDPR;

- Implementation of measures to protect personal data;

- Establishment of a legal and regulatory monitoring process;

- Maintaining appropriate relationships or ongoing monitoring with sectoral authorities related to the nature of the data processed under the Service. This includes, in particular, ANSSI, CERT-FR, and CNIL.

## GDPR

Acting as a data processor within the meaning of Article 28 of the General Data Protection Regulation (GDPR), the Service Provider undertakes:

- To ensure transparency and traceability;

- To appoint a Data Protection Officer (DPO) responsible for defining and implementing measures to protect personal data;

- To provide assistance and advice to the CLIENT and alert the CLIENT if any instruction from the latter constitutes a breach of personal data protection rules, provided the Service Provider has the means to identify such a breach;

- A security guarantee for the processed data (due to the SecNumCloud certification).

## Protection frente al derecho extranjero

El domicilio social del Prestador se encuentra dentro de un Estado miembro de la Unión Europea. El capital social y los derechos de voto en la sociedad del Prestador no están, directa ni indirectamente:

- individualmente poseídos en más del 24%;

- y colectivamente poseídos en más del 39%;

por entidades externas cuyo domicilio social, administración central o establecimiento principal se encuentre dentro de un Estado que no sea miembro de la Unión Europea.

En caso de que el Prestador, en el marco del Servicio, recurra al servicio de una sociedad externa —incluyendo un subcontratista— cuyo domicilio social, administración central o establecimiento principal se encuentre dentro de un Estado que no sea miembro de la Unión Europea o que pertenezca o esté controlada por una sociedad externa con domicilio fuera de la Unión Europea, el Prestador se compromete a:

- que dicha sociedad externa no tenga acceso alguno a los datos operativos;

- a disponer de autonomía operativa mediante la posibilidad de recurrir a otro subcontratista o de implementar rápidamente una alternativa tecnológica.

A modo de recordatorio, las datos a los que se refiere este artículo son aquellos confiados al Prestador por el COMANDITARIO, así como todas las Datos técnicas que incluyan información sobre los COMANDITARIOS.

Para los fines del presente artículo, la noción de control se entiende según la definida en el apartado II del artículo L233-3 del Código de Comercio.

# FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Para Cloud Temple, el PRESTADOR

Para \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMITENTE