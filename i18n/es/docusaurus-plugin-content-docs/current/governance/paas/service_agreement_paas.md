---
title: Convención de Servicio PaaS
---

**Tabla de contenido**

- [1. Marco](#1-marco)
- [2. Acrónimos](#2-acrónimos)
- [3. Glosario](#3-glosario)
- [4. Objeto de la convención de servicio PaaS del Proveedor](#4-objeto-de-la-convención-de-servicio-paas-del-proveedor)
- [5. Evolución de la convención de servicio PaaS](#5-evolución-de-la-convención-de-servicio-paas)
- [6. Auditoría](#6-auditoría)
- [7. Descripción del servicio](#7-descripción-del-servicio)
- [8. Implementación del servicio](#8-implementación-del-servicio)
  - [8.1. Descripción de los componentes técnicos](#81-descripción-de-los-componentes-técnicos)
    - [8.1.1. Plataforma de servicio REDHAT OpenShift](#811-plataforma-de-servicio-redhat-openshift)
    - [8.1.2. Infraestructura de software de gestión de la plataforma Redhat Openshift](#812-infraestructura-de-software-de-gestión-de-la-plataforma-redhat-openshift)
    - [8.1.3. Infraestructura de respaldo asociada](#813-infraestructura-de-respaldo-asociada)
    - [8.1.4. Implementación de soluciones de recuperación o continuidad de actividad](#814-implementación-de-soluciones-de-recuperación-o-continuidad-de-actividad)
- [9. Compromisos y niveles de servicios](#9-compromisos-y-niveles-de-servicios)
  - [9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift](#91-compromisos-de-disponibilidad-de-la-plataforma-redhat-openshift)
- [10. Modelo de responsabilidades compartidas aplicable](#10-modelo-de-responsabilidades-compartidas-aplicable)
  - [10.1. Responsabilidad y Obligaciones del Proveedor](#101-responsabilidad-y-obligaciones-del-proveedor)
  - [10.2. Limitación de responsabilidad del Proveedor](#102-limitación-de-responsabilidad-del-proveedor)
  - [10.3. Limitación de acceso](#103-limitación-de-acceso)
- [11. Borrado de datos al final del contrato](#11-borrado-de-datos-al-final-del-contrato)
- [12. Ley aplicable](#12-ley-aplicable)


## 1. Marco

|           |                        |
| --------- | ---------------------- |
| Referencia | CT.AM.JUR.ANX.PAAS 2.0 |
| Fecha      | 13 marzo 2024           |

## 2. Acrónimos

| Acrónimo    | Descripción                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Comité consultivo sobre los cambios                                                |
| CMDB        | Configuration Management Database – Base de datos de gestión de configuraciones                            |
| COPIL       | Comité de pilotaje                                                                                         |
| COSTRAT     | Comité estratégico                                                                                         |
| DB          | Database (base de datos)                                                                                   |
| DRP         | Disaster Recovery Plan (Plan de recuperación de actividad)                                                 |
| GTI         | Garantía de Tiempo de Intervención                                                                          |
| GTR         | Garantía de Tiempo de Resolución                                                                           |
| GTE         | Garantía de Tiempo de Escalada                                                                             |
| HYPERVISEUR | Sistema operativo que permite la ejecución de VM en una lámina de cálculo                                  |
| ITIL        | Information Technology Infrastructure Library - Buenas prácticas para la gestión de sistemas de información |
| IAAS        | Infrastructure as a Service                                                                                |
| MCO         | Mantenimiento en condiciones operativas                                                                    |
| MOA         | Majestad de Obra                                                                                           |
| MOE         | Majestad de Ejecución                                                                                      |
| OS          | Operating system                                                                                           |
| PAQ         | Plan de Aseguramiento de Calidad                                                                           |
| PAAS        | Platform as a Service                                                                                      |
| SDM         | Service Delivery Manager                                                                                   |
| RFC         | Request For Change – Solicitud de cambio                                                                   |
| RGPD        | Reglamento General de Protección de Datos (personales)                                                     |
| RPO         | Recovery Point Objective – Frescura de los datos restaurados en caso de siniestro                          |
| RTO         | Recovery Time Objective – Tiempo de recuperación del servicio en caso de siniestro                      |
| SLA         | Service Level Agreement – Acuerdo de niveles de servicio                                                   |
| UO          | Unidad de Obra                                                                                             |
| VABF        | Validación de Aptitud para el Buen Funcionamiento                                                          |
| VABE        | Validación de Aptitud para la Buena Explotabilidad                                                         |
| VM          | Virtual Machine (Máquina virtual)                                                                          |
| VSR         | Validación de Servicio Regular                                                                             |
| SNC         | SecNumCloud                                                                                                |

## 3. Glosario

Las expresiones a continuación empleadas en el presente documento se interpretarán de acuerdo con las definiciones asignadas a continuación:

| Expresión                                          | Definición                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | La denominación "Secure Temple" se refiere al servicio de Infraestructura como Servicio IaaS, cualificado SecNumCloud, ofrecido por la empresa Cloud Temple.                                                                                                                         |
| Región                                              | Una "región" en el contexto de la computación en la nube designa un conjunto geográficamente delimitado de zonas de disponibilidad de la nube, <br/>proporcionando servicios de red, cómputo y almacenamiento para optimizar la latencia, el rendimiento <br/>y la conformidad normativa local. |
| Zona Disponibilidad<br/>(AZ)<br/>(Availability zone) | Una sección específica y aislada de la infraestructura de computación en la nube, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de los recursos.                                                                                     |
| Tenant                                              | Una instancia aislada reservada para un usuario o grupo de usuarios, compartiendo una infraestructura común mientras se mantiene la independencia y seguridad de los datos y aplicaciones.                                                                                        |

| Expresión               | Definición                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                 | Un "incidente" designa cualquier evento imprevisto que interrumpe el funcionamiento normal de un sistema o compromete la seguridad de los datos y las infraestructuras.                                                                                                                                                                                                                                                                                   |
| Problema                 | Un "problema" es una causa fundamental de uno o más incidentes, identificada o sospechada, que requiere un análisis y una resolución para prevenir su recurrencia                                                                                                                                                                                                                                                                          |
| Cambio                   | Un "cambio" se refiere a cualquier modificación realizada en el entorno informático, con el objetivo de mejorar o corregir los sistemas, procesos o servicios.                                                                                                                                                                                                                                                                            |
| cambio estándar          | Un "cambio estándar" es una modificación preaprobada, de bajo riesgo, repetitiva y que sigue un procedimiento establecido, en el entorno informático.                                                                                                                                                                                                                                                                                |
| Puesta en producción     | acción(es) de administración de realización del cambio cuando este es aprobado <br/>(el cambio, en términos de ITIL, solo concierne la gestión del cambio y no su realización/concreción).                                                                                                                                                                                                                                         |
| Solicitud de servicio    | solicitud de evolución que está sujeta a un procedimiento, cuya realización: <br/> i) no modifica la CMDB,<br/>ii) el modo de operación, los costos y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de reversión<br/> iii) la realización está sujeta a un acuerdo de nivel de servicio y está incluida en la tarifa del contrato cuando se realiza en horas hábiles y días laborables.                                               |
| Elemento de configuración | Un "elemento de configuración" es un componente identificable del sistema de información, como software, hardware o documento,<br/> sujeto a gestión en el marco de la gestión de los servicios de TI                                                                                                                                                                                                                                      |
| Servicio                 | Un "servicio" es un medio para proporcionar valor a los CLIENTEs facilitando los resultados deseados sin que estos tengan que gestionar <br/>los costos y riesgos específicos                                                                                                                                                                                                                                                              |
| Evento                   | Un "evento" es cualquier ocurrencia detectable o identificable en un sistema informático o red, que puede tener importancia para la gestión de los servicios de TI                                                                                                                                                                                                                                                                             |
| Siniestro                | Un "siniestro" se refiere a un evento dañino imprevisto que causa pérdidas materiales, financieras o de datos para un CLIENTE                                                                                                                                                                                                                                                                                                           |
| Convención de servicio   | Este documento, establecido en el marco de un contrato específico o las Condiciones Generales de Venta y Uso (CGVU), y en conformidad con los requisitos del Referencial SecNumCloud.                                                                                                                                                                                                                                                       |
| Disponibilidad           | Capacidad para asegurar la disponibilidad y el mantenimiento del rendimiento óptimo de un servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA)                                                                                                                                                                                                                                          |
| Supervisión              | Vigilancia de un Sistema de Información o de un Servicio, que implica la recopilación de varios datos como medidas y alarmas. <br/>Esta actividad se limita a la observación y seguimiento, sin intervenir directamente sobre los elementos supervisados, una prerrogativa que pertenece a las operaciones de Administración.                                                                                                              |

## 4. Objeto de la convención de servicio PaaS del Proveedor

La presente Convención de Servicios establece los términos y condiciones según los cuales el Proveedor se compromete a entregar al CLIENTE una infraestructura 
conforme con las especificaciones de la oferta « Platform as a Service – PaaS », debidamente cualificada SecNumCloud.

Objeto de la Convención de Servicios :

1. Precisar los requisitos de rendimiento esperados por el CLIENTE en términos de funcionalidad y fiabilidad de la infraestructura.
2. Enunciar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados.
3. Identificar las normas reglamentarias aplicables específicamente a la infraestructura propuesta.
4. Asegurar la uniformidad y la integridad en la evaluación de la calidad de los servicios prestados.
5. Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en el supuesto en que al Proveedor se le retire su cualificación SecNumCloud, el presente Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalizaciones, por el CLIENTE. 
En tal eventualidad, el Proveedor se compromete a informar al CLIENTE de esta descalificación mediante el envío de una notificación oficial, por medio de una carta certificada con acuse de recibo.

Cabe señalar que una modificación o ajuste de la cualificación SecNumCloud no será interpretado como una revocación de la cualificación inicial.

## 5. Evolución de la convención de servicio PaaS

Las modificaciones o adiciones a la presente convención de servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados para ese efecto. 
Estas propuestas de cambio serán examinadas en el comité estratégico, la única instancia autorizada para determinar los aspectos que requieren una formalización por escrito.

Se acuerda que cualquier evolución de la convención, después de su validación, que altere las condiciones financieras inicialmente establecidas, requerirá la elaboración y firma de un adicionado al contrato vigente.

Los factores que pueden inducir una revisión de esta convención incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS orquestada por el Proveedor.
- Los ajustes realizados a los servicios desplegados por el Proveedor.
- Las variaciones de los compromisos assumidos y las sanciones aplicables.
- Las reconfiguraciones organizacionales dentro del CLIENTE o del Proveedor.
- La expansión o reducción del alcance de los servicios a los que el CLIENTE ha suscrito.

La gestión de las versiones y revisiones de la convención se consigna en el preámbulo del documento para facilitar su seguimiento.

## 6. Auditoría 

El Proveedor se compromete a permitir al CLIENTE, o a cualquier auditor externo que este último designe, consultar todos los documentos necesarios para la certificación del cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Proveedor se compromete especialmente a mantener a disposición del CLIENTE la lista de todos los terceros que pueden acceder a los datos e informarle de cualquier cambio de subcontratistas.**

Al aceptar la presente convención de servicio, el CLIENTE otorga su autorización explícita a:

1. __La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI)__ así como a la entidad de cualificación competente para llevar a cabo la verificación de la conformidad del Servicio y su Sistema de Información con los estándares definidos por el Referencial SecNumCloud.
2. __Un proveedor de auditoría en seguridad de sistemas de información__, debidamente cualificado y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio proporcionado por el Proveedor.

## 7. Descripción del servicio

La oferta de servicios propuesta por el Proveedor se caracteriza por la provisión de las siguientes prestaciones, 
las cuales se alinean con el principio de responsabilidad compartida detallado en las normas establecidas por el referencial SecNumCloud:

- La provisión de una plataforma de gestión de contenedores Redhat Openshift gestionada por el Proveedor.

Se entiende que el Proveedor movilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales,
conformidad con sus especificaciones y respetando las normas de su certificación ISO/IEC 27001 así como las directrices del Referencial SecNumCloud.

## 8. Implementación del servicio

Se precisa que todas las operaciones y todos los componentes físicos involucrados en la prestación del servicio calificado, objeto del presente convenio, 
están situados en la Unión Europea. Esto incluye, en particular, el soporte, la supervisión operativa y la supervisión de seguridad (SOC).

### 8.1. Descripción de los componentes técnicos

Los servicios PaaS (Platform as a Service) engloban la totalidad de los componentes y servicios requeridos para su funcionamiento óptimo en el respeto de la calificación SecNumCloud.

En este sentido, su rendimiento y fiabilidad están intrínsecamente ligados a los componentes técnicos y los servicios de **la infraestructura IaaS** del Proveedor, tal como se especifica en el documento [Convenio de Servicio IaaS](../iaas/sla_iaas.md) del Proveedor.

#### 8.1.1. Plataforma de servicio REDHAT OpenShift

El servicio engloba la puesta a disposición dentro de una región, en 3 zonas de disponibilidad,

#### 8.1.2. Infraestructura de software de gestión de la plataforma Redhat Openshift

El Proveedor proporciona al CLIENTE la consola de administración y la API necesarias para la explotación de sus entornos PaaS RedHat OpenShift. 
Se compromete también a mantenerlos en condiciones operativas óptimas y a asegurar su seguridad de manera continua.

En el marco específico del servicio proporcionado, el Proveedor pone a disposición del CLIENTE todas las interfaces y API de la plataforma RedHat OpenShift dentro del tenant seleccionado. Corresponde al CLIENTE instaurar los dispositivos de seguridad apropiados, tales como los cortafuegos (firewall), los cortafuegos de aplicaciones web (WAF), y otras medidas de protección, así como definir las reglas de filtrado asociadas para asegurar el acceso a su plataforma conforme a su política de seguridad.

El Proveedor alerta al CLIENTE sobre el hecho de que un uso anormal de su consola de administración, en particular en caso de sobrecarga de sus APIs de comando (hammering), 
puede desencadenar medidas de seguridad automáticas que conlleven el bloqueo del acceso a las APIs de comando o a ciertos servicios del Proveedor. Conviene subrayar que esta situación no constituye una indisponibilidad del servicio sino una acción de protección de la Infraestructura del Proveedor; 
por lo tanto, el CLIENTE no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Proveedor precisa al CLIENTE que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). 
Si el CLIENTE envía solicitudes idénticas a una frecuencia superior, su rechazo no debe interpretarse como una indisponibilidad del servicio.

#### 8.1.3. Infraestructura de respaldo asociada

El Proveedor pone a disposición del CLIENTE una plataforma de respaldo integrada, dedicada y gestionada, destinada a la protección de los datos de sus entornos RedHat Openshift. 
El Proveedor asegura el mantenimiento en condiciones operativas y de seguridad de esta plataforma integrada de respaldo.
Independientemente del número de zonas de disponibilidad suscritas por el CLIENTE, el Proveedor garantiza que la plataforma de 
respaldo del CLIENTE esté situada fuera de la zona de disponibilidad de las cargas de trabajo respaldadas.

El servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS de los tenants SecNumCloud del CLIENTE. 
La elaboración y aplicación de una política de respaldo adecuada por parte del CLIENTE dependen de la suscripción a unidades de obra específicas.
Por lo tanto, corresponde al CLIENTE asegurarse de la disponibilidad de los recursos técnicos necesarios ante el Proveedor
para implementar su política de respaldo o ajustar esta última en función de los medios disponibles. 

El Proveedor se compromete a notificar al CLIENTE en caso de limitaciones de capacidad y a proporcionar asistencia y asesoramiento para la optimización de los recursos.
Las obligaciones del Proveedor se limitarán a la implementación de las necesidades expresadas por el CLIENTE en materia de política de respaldo, en el marco de los recursos suscritos.

#### 8.1.4. Implementación de soluciones de recuperación de actividad o continuidad de actividad

El Proveedor proporciona al CLIENTE el conjunto de soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos 
a través de diversas zonas de disponibilidad. Incumbe al CLIENTE la responsabilidad de gestionar eficazmente esta distribución de recursos, 
para lo cual tiene la posibilidad de explotar las herramientas del Proveedor disponibles para este fin.

En particular, las aplicaciones desplegadas en la plataforma RedHat OpenShift deben soportar los mecanismos de redundancia propuestos por el Proveedor para poder beneficiarse de las soluciones de recuperación de actividad o continuidad de actividad asociadas.

## 9. Compromisos y niveles de servicio

El Proveedor se compromete a garantizar una supervisión continua del rendimiento y de la integridad de seguridad de sus 
plataformas y servicios, velando por su funcionamiento óptimo.

La indisponibilidad de un servicio, sujeto a un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Proveedor, 
o tras una notificación por un usuario del CLIENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, 
a fin de garantizar un cómputo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor, 
o por un retorno del usuario, asegurando así una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

### 9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift

El Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. 
Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican bajo la condición de que el CLIENTE implemente sus sistemas a través 
de al menos dos de las zonas de disponibilidad presentes en la región concernida. 

En ausencia del cumplimiento de estas condiciones por parte del CLIENTE, este último no podrá reclamar la aplicación de los SLAs concernidos, 
los cuales están específicamente identificados por un asterisco (*). El acceso a los SLAs se realiza mediante la interfaz CLIENTE. **Las medidas se entienden calculadas mensualmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilidad de la plataforma RedHat OpenShift: tasa de disponibilidad garantizada del 99,9%, calculada sobre una base 24h/24, 7d/7.

_**Notas**_ : 

- *En respuesta a un ataque por denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento de internet para 
limitar el impacto de este ataque y salvaguardar su infraestructura. En particular, si una dirección IP perteneciente al CLIENTE es objetivo, el Proveedor puede recurrir a la técnica de blackholing 
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP afectada en la red de sus proveedores, con el fin de proteger los recursos del CLIENTE así como los de otros clientes 
y de la infraestructura del Proveedor. El Proveedor alienta enfáticamente al CLIENTE a adoptar medidas similares, tales como el uso de software de cortafuegos 
de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad mediante la API de comando.*

- *El Proveedor insiste en la necesidad para el CLIENTE de minimizar las aperturas de flujo, evitando en particular hacer accesibles los puertos 
de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde toda la Internet (subred 0.0.0.0/0), así como los protocolos internos tales como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 10. Modelo de responsabilidades compartidas aplicable

### 10.1. Responsabilidad y Obligaciones del Proveedor

El Proveedor se compromete a poner a disposición del CLIENTE interfaces de usuario en idioma francés e inglés, facilitando así el acceso y la gestión de los servicios proporcionados.
El CLIENTE, por su parte, se compromete a respetar las restricciones legales y reglamentarias vigentes relativas a los datos que confía al Proveedor para su tratamiento.

En caso de transmisión de datos sujetos a exigencias legales específicas, el Proveedor colaborará con el CLIENTE para identificar e implementar 
las medidas de seguridad necesarias, conforme a las obligaciones del Proveedor y en el marco de la prestación de servicios.

El Proveedor también se compromete a examinar y tomar en consideración las necesidades específicas relacionadas con los sectores de actividad del CLIENTE,
respetando las limitaciones de su responsabilidad, para garantizar un nivel de seguridad adecuado a la información tratada.

Si un proyecto pudiera impactar la seguridad del servicio ofrecido, el Proveedor se compromete a informar al CLIENTE de los impactos potenciales, 
de las medidas correctivas contempladas y de los riesgos residuales, asegurando una transparencia total.

El Proveedor garantiza que no utilizará los datos del CLIENTE con fines de prueba sin un acuerdo previo y explícito del CLIENTE
y se compromete a anonimizar y proteger la confidencialidad de estos datos durante su tratamiento.

En caso de cambio de subcontratista para el alojamiento, el Proveedor informará al CLIENTE con antelación, asegurándose de que esta transición no afecte negativamente al servicio proporcionado.

A solicitud del CLIENTE, el Proveedor proporcionará acceso a su reglamento interno, a su carta de ética, a las sanciones aplicables en caso de no respeto de su
política de seguridad, a los eventos que le conciernen, a los procedimientos relativos al servicio y a los requisitos específicos de seguridad.

### 10.2. Limitación de responsabilidad del Proveedor

La estructura de responsabilidad compartida reduce eficazmente el alcance de la intervención del Proveedor a los aspectos relacionados con el suministro de una plataforma RedHat OpenShift funcional, que incluye:

- La gestión de la infraestructura IaaS que soporta la plataforma RedHat OpenShift y su aprovisionamiento,
- La gestión de los sistemas necesarios para el correcto funcionamiento de la plataforma,
- El mantenimiento en condiciones de seguridad,
- La actualización de la plataforma RedHat OpenShift,
- La copia de seguridad de los datos de configuración esenciales de esta plataforma, a excepción de los datos y las aplicaciones del CLIENTE que son de su responsabilidad.

Se excluye específicamente, pero sin limitarse a:

- La actualización de los sistemas operativos y del software instalados por el CLIENTE en sus entornos OpenShift en sus espacios arrendados,
- La seguridad de los programas, software y aplicaciones instalados dentro del entorno OpenShift por el CLIENTE,
- La copia de seguridad de los datos a nivel de aplicación,
- La configuración de las políticas de copia de seguridad.

### 10.3. Limitación de acceso

En el marco de este acuerdo de servicio, el Proveedor tiene prohibido formalmente acceder a los tenants pertenecientes al CLIENTE sin autorización previa.
Es responsabilidad del CLIENTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas de alojamiento y, 
en caso necesario, de los servicios profesionales de soporte, si esta opción ha sido elegida por el CLIENTE.

El CLIENTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de servicios acordados, 
asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros implicados en la prestación de servicios del Proveedor está estrictamente prohibido. 
En el caso de que una exigencia técnica específica requiriera dicho acceso, este solo podría establecerse después de haber notificado claramente al CLIENTE, 
proporcionado una justificación detallada y obtenido su consentimiento por escrito.

Esta medida garantiza el control y la seguridad de los datos del CLIENTE, asegurándose de que cualquier excepción a la regla esté debidamente autorizada y documentada.

## 11. Borrado de datos al final del contrato

Al final del contrato, ya sea que expire o se rescinda por cualquier motivo, el Proveedor se compromete a proceder al borrado 
seguro de la totalidad de los datos del Cliente, incluidos los datos técnicos. El Proveedor se asegurará de comunicar al CLIENTE un aviso formal, 
respetando un plazo de veintiún (21) días naturales. Los datos del CLIENTE se eliminarán dentro de un plazo máximo de treinta (30) días 
siguiendo esta notificación.

Para certificar esta eliminación, el Proveedor entregará al Cliente un certificado que confirme el borrado de los datos.

## 12. Ley aplicable

La ley aplicable para este acuerdo de servicio es la ley francesa.

En caso de que el Proveedor, en el marco de los servicios proporcionados al CLIENTE, recurra a una empresa tercera, incluidos subcontratistas, cuya sede social, administración central 
o principal lugar de negocios esté situado en un Estado no miembro de la Unión Europea, o que sea propiedad o esté bajo el control de una empresa tercera domiciliada fuera de la Unión Europea,
el Proveedor se compromete a garantizar que dicha empresa tercera no tendrá acceso a los datos tratados por el servicio del Proveedor.

Se debe notar que los datos en cuestión incluyen aquellos confiados al Proveedor por el CLIENTE, así como todos los datos técnicos como las identidades de los beneficiarios y administradores de la infraestructura técnica,
los datos manejados por las redes, los registros de la infraestructura técnica, el directorio, los certificados, la configuración de accesos, etc., que contienen información sobre el CLIENTE.

Para mayor precisión, la noción de control se define de acuerdo con el II del artículo L233-3 del código de comercio.