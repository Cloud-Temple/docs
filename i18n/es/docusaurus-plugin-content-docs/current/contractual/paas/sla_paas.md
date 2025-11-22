---
title: Convención de Servicio SecNumCloud PaaS
---

## Framework

| Reference | CT.AM.JUR.ANX.PAAS 2.1 |
| :--- | :--- |
| **Date** | January 21, 2025 |

## Acronyms

| Acronym | Description |
| :--- | :--- |
| **CAB** | Change Advisory Board -- Change Advisory Board |
| **CMDB** | Configuration Management Database -- Configuration Management Database |
| **COPIL** | Steering Committee |
| **COSTRAT** | Strategic Committee |
| **DB** | Database (database) |
| **DRP** | Disaster Recovery Plan (Disaster Recovery Plan) |
| **GTI** | Guaranteed Time to Intervention |
| **GTR** | Guaranteed Time to Resolution |
| **GTE** | Guaranteed Time to Escalation |
| **HYPERVISEUR** | Operating system enabling VM execution on a compute blade |
| **ITIL** | Information Technology Infrastructure Library - Best practices for information systems management |
| **IAAS** | Infrastructure as a Service |
| **MCO** | Maintenance in Operational Condition |
| **MOA** | Client (Project Owner) |
| **MOE** | Contractor (Project Executor) |
| **OS** | Operating system |
| **PAQ** | Quality Assurance Plan |
| **PAAS** | Platform as a Service |
| **SDM** | Service Delivery Manager |
| **RFC** | Request For Change -- Change Request |
| **RGPD** | General Data Protection Regulation (personal data) |
| **RPO** | Recovery Point Objective -- Data freshness upon restoration after an incident |
| **RTO** | Recovery Time Objective -- Service restoration time after an incident |
| **SLA** | Service Level Agreement -- Service Level Agreement |
| **UO** | Work Unit |
| **VABF** | Validation of Operational Suitability |
| **VABE** | Validation of Operational Exploitability |
| **VM** | Virtual Machine (virtual machine) |
| **VSR** | Regular Service Validation |
| **SNC** | SecNumCloud |

## Glosario

Las expresiones siguientes utilizadas en el presente documento se interpretarán de acuerdo con las definiciones que se les asignan a continuación:

| Expresión | Definición |
| :--- | :--- |
| **\"Secure Temple\"** | Designa el servicio IaaS calificado SecNumCloud, ofrecido por la sociedad Cloud Temple, tal como se define en la attestación consultable en el sitio web de la ANSSI y proporcionada como anexo de la presente Convención de Servicio. |
| **Región** | Una "región" en el contexto del cloud computing designa un conjunto geográficamente delimitado de zonas de disponibilidad cloud, que proporciona servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad normativa local. |
| **Zona de Disponibilidad (AZ) (Availability zone)** | Una sección específica e aislada de la infraestructura de cloud computing, diseñada para garantizar la alta disponibilidad y resiliencia de los servicios mediante una distribución geográfica de los recursos. |
| **Tenant** | Una instancia aislada reservada a un usuario o grupo de usuarios, que comparte una infraestructura común manteniendo la independencia y seguridad de los datos y aplicaciones |

| Expresión | Definición |
| :--- | :--- |
| **Incidente** | Un "incidente" designa cualquier evento imprevisto que perturba el funcionamiento normal de un sistema o compromete la seguridad de los datos. |
| **Problema** | Un "problema" es una causa fundamental de uno o varios incidentes, identificada o sospechada, que requiere un análisis y resolución para prevenir su recurrencia. |
| **Cambio** | Un "cambio" designa cualquier adición, modificación o eliminación que afecte al Servicio, autorizada, planificada o gestionada. |
| **Cambio estándar** | Un "cambio estándar" es un cambio sujeto a un procedimiento, cuyas modalidades de puesta en producción y sus impactos (incluidos los financieros) son conocidos y aceptados de antemano por las Partes. Se incorpora entonces al catálogo de cambios estándar y, según los casos, puede tener una GTI y una GTR. |
| **Puesta en producción** | Acción(es) de administración para la realización del cambio cuando este ha sido aprobado (el cambio, en el sentido de ITIL, se refiere únicamente a la gestión del cambio y no a su realización/concretización). |
| **Solicitud de servicio** | Solicitud de evolución sujeta a un procedimiento, cuya realización: i) no modifica la CMDB, ii) el modo de operación, los costes y riesgos son conocidos y aceptados de antemano y no requieren modalidades de reversión específicas, iii) la realización está sujeta a un Acuerdo de Nivel de Servicio e incluida en la retribución del contrato cuando se realiza en horas laborables y días laborables. |
| **Elemento de configuración** | Un "elemento de configuración" es un componente identificable del sistema de información, como un software, hardware o documento, sujeto a gestión en el marco de la gestión de servicios TI. |
| **Servicio** | Un "servicio" designa el servicio calificado SecNumCloud, entregado al COMITENTE por el Prestador, tal como se describe en la sección « Descripción del Servicio » de la presente Convención de Servicio. |
| **Evento** | Un "evento" es cualquier ocurrencia detectable o identificable que puede tener importancia para la gestión del Servicio. |
| **Siniestro** | Un "siniestro" designa un evento grave de origen natural o humano, accidental o intencional, que causa pérdidas y daños importantes para la Parte afectada. |
| **Convención de Servicio** | Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y en conformidad con los requisitos del Referencial SecNumCloud. |
| **Disponibilidad** | Capacidad para garantizar la disponibilidad y el mantenimiento de un rendimiento óptimo de un servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA). |
| **Supervisión** | Vigilancia de un Sistema de Información o de un Servicio, que implica la recopilación de diversos datos tales como mediciones y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente sobre los elementos supervisados, una prerrogativa que corresponde a las operaciones de Administración. |

## Objeto del contrato de servicios PaaS del Prestador

Este Contrato de Servicios establece los términos y condiciones según los cuales el Prestador se compromete a entregar al COMITENTE una infraestructura conforme a las especificaciones de la oferta « Platform as a Service — PaaS», debidamente cualificada como SecNumCloud.

Objeto del Contrato de Servicios:

1. Definir los requisitos de rendimiento esperados por el COMITENTE en cuanto a funcionalidad y fiabilidad de la infraestructura.
2. Establecer las obligaciones del Prestador para cumplir con los niveles de servicio acordados.
3. Identificar las normas regulatorias aplicables específicamente a la infraestructura ofrecida.
4. Garantizar una uniformidad e integridad en la evaluación de la calidad de los servicios prestados.
5. Asegurar la excelencia de los servicios proporcionados, evaluada mediante indicadores cuantitativos de rendimiento.

Se estipula que, en caso de que al Prestador se le retire su cualificación SecNumCloud, este Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalizaciones, por parte del COMITENTE. En tal caso, el Prestador se compromete a informar al COMITENTE de dicha descalificación mediante notificación oficial, enviada por carta certificada con acuse de recibo.

Cabe destacar que cualquier modificación o ajuste de la cualificación SecNumCloud no será interpretado como una revocación de la cualificación inicial.

## Evolución de la convención de servicio PaaS

Los cambios o adiciones realizadas a la presente convención de servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados para tal fin. Estas propuestas de modificación serán examinadas dentro del comité estratégico, única instancia autorizada para determinar los aspectos que requieren una formalización escrita.

Se acuerda que toda evolución de la convención, tras su validación, que altere las condiciones financieras inicialmente establecidas, requerirá la elaboración y firma de un aditamento al contrato vigente.

Los factores que pueden inducir una revisión de esta convención incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS gestionada por el Prestador.
- Los ajustes realizados a los servicios desplegados por el Prestador.
- Las variaciones en los compromisos asumidos y las sanciones aplicables.
- Las reconfiguraciones organizativas dentro del COMANDITARIO o del Prestador.
- La expansión o reducción del ámbito de aplicación de los servicios a los que el COMANDITARIO ha suscrito.

La gestión de versiones y revisiones de la convención se documenta en el preámbulo del documento para facilitar su seguimiento.

## Auditoría

El Prestador se compromete a permitir al COMITENTE, o a cualquier auditor externo designado por este, consultar todos los documentos necesarios para verificar el cumplimiento integral de las obligaciones derivadas de la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Prestador se compromete especialmente a poner a disposición del COMITENTE la lista de todos los terceros que pueden acceder a los datos e informarle de cualquier cambio en los subcontratistas.**

Al aceptar el presente contrato de servicios, el COMITENTE otorga su autorización expresa a:

1. **La Agencia Nacional de la Seguridad de los Sistemas de Información (ANSSI)**, así como a la entidad calificada competente para realizar la verificación de la conformidad del Servicio y su Sistema de Información con los estándares definidos en el Referencial SecNumCloud.
2. **Un prestador de auditoría de seguridad de sistemas de información**, debidamente cualificado y expresamente designado por el Prestador, para llevar a cabo auditorías de seguridad sobre el Servicio prestado por el Prestador.

## Descripción del servicio

La oferta de servicios proporcionada por el Prestador se caracteriza por la
puesta a disposición de las siguientes prestaciones, las cuales se alinean
con el principio de responsabilidad compartida detallado en las normas establecidas
por el referencial SecNumCloud:

- Suministro de una plataforma de gestión de contenedores Red Hat
    OpenShift gestionada por el Prestador.

Queda entendido que el Prestador pondrá en práctica su experiencia para realizar
las Prestaciones según las mejores prácticas profesionales,
de acuerdo con sus Especificaciones y respetando las normas de su certificación
ISO/IEC 27001, así como las directrices del Referencial SecNumCloud.

## Implementation of the Service

It is specified that all operations and physical components involved in the provision of the qualified service, the subject of this agreement, are located within the European Union. This includes, in particular, support, operational monitoring, and security monitoring (SOC).

### Descripción de los componentes técnicos

Los servicios PaaS (Platform as a Service) incluyen todos los componentes y servicios necesarios para su funcionamiento óptimo, respetando la cualificación SecNumCloud.

En este sentido, su rendimiento y fiabilidad están intrínsecamente ligados a los componentes técnicos y a los servicios de la **infraestructura IaaS** del Prestador, tal como se especifica en el documento [Convenio de Servicio IaaS](../iaas/sla_iaas.md) del Prestador.

#### Plataforma de servicio REDHAT OpenShift

El servicio incluye la provisión dentro de una región, en 3 zonas de disponibilidad,

#### Software infrastructure for managing the Red Hat OpenShift platform

The Provider supplies the COMMANDITARY with the administration console and the necessary APIs for operating its Red Hat OpenShift PaaS environments. The Provider also commits to maintaining them in optimal operational condition and ensuring continuous security.

Within the specific scope of the service provided, the Provider makes available all interfaces and APIs of the Red Hat OpenShift platform within the selected tenant. It is the responsibility of the COMMANDITARY to implement appropriate security measures, such as firewalls (firewall), web application firewalls (WAF), and other protective measures, as well as to define the associated filtering rules to secure access to its platform in accordance with its security policy.

The Provider alerts the COMMANDITARY that abnormal use of its administration console—particularly in cases of API command overload (hammering)—may trigger automatic security measures that result in blocking access to the command APIs or certain services provided by the Provider. It should be emphasized that this situation does not constitute a service outage but rather a protective action taken toward the Provider’s infrastructure; therefore, the COMMANDITARY may not consider it an unavailability in its calculations.

Furthermore, the Provider informs the COMMANDITARY that perfectly identical requests (duplicates) sent to its APIs are limited to one per second (Throttling). If the COMMANDITARY submits identical requests at a higher frequency, their rejection must not be interpreted as a service unavailability.

#### Infraestructura de copia de seguridad asociada

El Prestador pone a disposición del COMITENTE una plataforma de copia de seguridad integrada, dedicada y gestionada, destinada a la protección de los datos de sus entornos RedHat OpenShift. El Prestador garantiza el mantenimiento de esta plataforma integrada de copia de seguridad en condiciones operativas y de seguridad. Independientemente del número de zonas de disponibilidad suscritas por el COMITENTE, el Prestador garantiza que la plataforma de copia de seguridad del COMITENTE se encuentre fuera de la zona de disponibilidad de las cargas de trabajo protegidas.

El servicio de copia de seguridad se limita a la copia de seguridad de las máquinas virtuales y de las configuraciones de topología del entorno IaaS de los inquilinos SecNumCloud del COMITENTE. La elaboración y aplicación de una política de copia de seguridad adecuada por parte del COMITENTE depende de la suscripción a unidades de obra específicas. Por tanto, corresponde al COMITENTE asegurarse de la disponibilidad de los recursos técnicos necesarios ante el Prestador para implementar su política de copia de seguridad o ajustarla según los medios disponibles.

El Prestador se compromete a notificar al COMITENTE en caso de limitaciones de capacidad y a proporcionar asesoramiento para la optimización de los recursos. Las obligaciones del Prestador se limitarán a la implementación de los requisitos expresados por el COMITENTE en materia de política de copia de seguridad, dentro del marco de los recursos suscritos.

#### Implementation of Business Continuity or Disaster Recovery Solutions

The Provider supplies the CONTRACTOR with all the necessary technical solutions to ensure optimal distribution of its resources across multiple availability zones. It is the CONTRACTOR's responsibility to effectively manage this resource distribution, for which it has access to the tools provided by the Provider for this purpose.

In particular, applications deployed on the RedHat OpenShift platform must support the redundancy mechanisms offered by the Provider in order to benefit from the associated business continuity or disaster recovery solutions.

## Compromisos y niveles de servicio

El Prestador se compromete a garantizar una supervisión continua del rendimiento y de la integridad segura de sus plataformas y servicios, velando por su funcionamiento óptimo.

La indisponibilidad de un servicio, objeto de un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Prestador, o tras una notificación por parte de un usuario del COMITENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, con el fin de garantizar un cálculo preciso y justo del tiempo de indisponibilidad.

El final de la indisponibilidad se marca oficialmente con la restauración completa del servicio, confirmada ya sea mediante las herramientas de supervisión del Prestador, ya sea mediante un retorno del usuario, asegurando así una recuperación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

### Availability Commitments for the RedHat OpenShift Platform

The Provider undertakes to maintain an availability and performance level compliant with the standards defined for each specified period. Service Level Agreements (SLAs) apply provided that the CLIENT implements its systems across at least two of the availability zones present in the relevant region.

In the event that the CLIENT fails to meet these conditions, the CLIENT will be unable to claim the application of the corresponding SLAs, which are specifically identified by an asterisk (\*). SLA accessibility is provided through the CLIENT interface. **Measurements are calculated on a monthly basis**:

- \*\*SLA 1 (\*) : IC-PAAS_SNC-01\*\* -- RedHat OpenShift platform availability: guaranteed availability rate of 99.9%, calculated on a 24/7 basis.

***Notes***:

- *In response to a distributed denial-of-service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to limit the impact of the attack and protect its infrastructure. In particular, if an IP address belonging to the CLIENT is targeted, the Provider may employ blackholing via the BGP community to block all traffic destined for the targeted IP address upstream with its providers, with the aim of protecting the CLIENT’s resources as well as those of other CLIENTs and the Provider’s infrastructure. The Provider strongly encourages the CLIENT to adopt similar measures, such as using commercially available web application firewalls, and to carefully configure its security groups via the command API.*

- *The Provider emphasizes the importance for the CLIENT to minimize traffic openings, particularly by avoiding exposing administrative ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) to the entire Internet (0.0.0.0/0 subnet), as well as internal protocols such as **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).*

## Shared Responsibility Model applicable

### Responsabilidad y obligaciones del Prestador

El Prestador se compromete a poner a disposición del COMITENTE interfaces de usuario en francés y en inglés, facilitando así el acceso y la gestión de los servicios prestados. Por su parte, el COMITENTE se compromete a respetar las restricciones legales y reglamentarias vigentes relativas a los datos que confía al Prestador para su tratamiento.

En caso de transmisión de datos sujetos a requisitos legales específicos, el Prestador colaborará con el COMITENTE para identificar y poner en práctica las medidas de seguridad necesarias, conforme a las obligaciones del Prestador y dentro del marco de la prestación de servicios.

El Prestador también se compromete a examinar y tener en cuenta las necesidades específicas relacionadas con los sectores de actividad del COMITENTE, respetando las limitaciones de su responsabilidad, para garantizar un nivel de seguridad adecuado a la información tratada.

Si un proyecto pudiera afectar a la seguridad del Servicio ofrecido, a su disponibilidad o provocar una pérdida de funcionalidad, el Prestador se compromete a informar al COMITENTE, a través de la consola o por correo electrónico al contacto designado, y en un plazo razonable, sobre los impactos potenciales, las medidas correctivas previstas y los riesgos residuales, asegurando una transparencia total.

El Prestador se compromete a no utilizar los datos del COMITENTE procedentes de producción para realizar pruebas, salvo que obtenga previamente la autorización expresa del COMITENTE, en cuyo caso el Prestador se compromete a anonimizar dichos datos y a garantizar su confidencialidad durante el proceso de anonimización.

En caso de cambio de subcontratista para el alojamiento, el Prestador informará al COMITENTE con antelación, asegurándose de que dicha transición no afecte negativamente al servicio prestado.

A solicitud del COMITENTE, el Prestador proporcionará acceso a su reglamento interno, a su código de ética, a las sanciones aplicables en caso de incumplimiento de su política de seguridad, a los eventos que le conciernen, a los procedimientos relacionados con el servicio y a los requisitos específicos de seguridad.

El Prestador se compromete a informar al COMITENTE de cualquier cambio previsto en elementos de software bajo la responsabilidad de Cloud Temple siempre que no se pueda garantizar una compatibilidad completa.

### Limitación de responsabilidad del Prestador

La estructura de responsabilidad compartida reduce eficazmente el alcance de la intervención del Prestador a los aspectos relacionados con la provisión de una plataforma RedHat OpenShift funcional, incluyendo:

- La gestión de la infraestructura IaaS que soporta la plataforma RedHat OpenShift y su aprovisionamiento,
- La gestión de los sistemas necesarios para el correcto funcionamiento de la plataforma,
- El mantenimiento en condiciones de seguridad,
- La actualización de la plataforma RedHat OpenShift,
- La realización de copias de seguridad de los datos de configuración esenciales de esta plataforma, a excepción de los datos y aplicaciones del COMITENTE, que quedan bajo su responsabilidad.

Excluye especialmente, aunque sin limitarse a:

- La actualización de los sistemas operativos y software instalados por el COMITENTE en sus entornos OpenShift dentro de sus espacios locales,
- La seguridad de los programas, software y aplicaciones instalados dentro del entorno OpenShift por el COMITENTE,
- La realización de copias de seguridad a nivel aplicativo,
- La configuración de las políticas de copia de seguridad.

### Limitación de acceso

En el marco de este acuerdo de servicios, el Prestador está formalmente prohibido de acceder a los inmuebles pertenecientes al COMITENTE sin autorización previa. Corresponde al COMITENTE proporcionar los accesos necesarios al personal del Prestador, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el COMITENTE.

El COMITENTE reconoce que estos accesos se otorgan exclusivamente para los fines relacionados con la prestación de los servicios acordados, garantizando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros involucrados en la prestación de servicios del Prestador está estrictamente prohibido. En caso de que una necesidad técnica específica requiriera dicho acceso, este solo podría establecerse tras notificar claramente al COMITENTE, proporcionar una justificación detallada y obtener su consentimiento por escrito.

Esta medida garantiza el control y la seguridad de los datos del COMITENTE, asegurando que toda excepción a la regla esté debidamente autorizada y documentada.

## Eliminación de datos al final del contrato

Al finalizar el contrato, ya sea por vencimiento o por rescisión por cualquier motivo, el Prestador se compromete a proceder con la eliminación segura de toda la información del COMITENTE, incluidas las datos técnicos. El Prestador se asegurará de notificar formalmente al COMITENTE con un plazo previo de veintiuno (21) días calendario. A continuación, los datos del COMITENTE serán eliminados en un plazo máximo de treinta (30) días posteriores a dicha notificación.

Para acreditar dicha eliminación, el Prestador entregará al COMITENTE un certificado que confirme la eliminación de los datos.

## Law Applicable

The law applicable to this Service Agreement is French law.

In the event that the Provider, in the course of providing services to the CLIENT, engages a third-party company—including a subcontractor—whose registered office, central administration, or principal establishment is located in a country that is not a member of the European Union, or which is owned or under the control of a third-party company domiciled outside the European Union, the Provider undertakes to ensure that such third party shall have no access to the data processed by the Provider's service.

It should be noted that the data referred to includes data entrusted to the Provider by the CLIENT, as well as all technical data such as the identities of beneficiaries and administrators of the technical infrastructure, data handled by the networks, logs from the technical infrastructure, directories, certificates, access configurations, etc., containing information about the CLIENT.

For clarity, the concept of "control" is defined in accordance with paragraph II of Article L233-3 of the French Commercial Code.