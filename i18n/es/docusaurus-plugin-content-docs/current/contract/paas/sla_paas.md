---
title: Convención de Servicio PaaS
---

**Tabla de contenidos**

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
    - [8.1.2. Infraestructura de software de gestión de la plataforma Redhat OpenShift](#812-infraestructura-de-software-de-gestión-de-la-plataforma-redhat-openshift)
    - [8.1.3. Infraestructura de respaldo asociada](#813-infraestructura-de-respaldo-asociada)
    - [8.1.4. Implementación de soluciones de recuperación o continuidad del negocio](#814-implementación-de-soluciones-de-recuperación-o-continuidad-del-negocio)
- [9. Compromisos y niveles de servicio](#9-compromisos-y-niveles-de-servicio)
  - [9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift](#91-compromisos-de-disponibilidad-de-la-plataforma-redhat-openshift)
- [10. Modelo de responsabilidades compartidas aplicable](#10-modelo-de-responsabilidades-compartidas-aplicable)
  - [10.1. Responsabilidad y obligaciones del Proveedor](#101-responsabilidad-y-obligaciones-del-proveedor)
  - [10.2. Limitación de responsabilidad del Proveedor](#102-limitación-de-responsabilidad-del-proveedor)
  - [10.3. Limitación de acceso](#103-limitación-de-acceso)
- [11. Destrucción de datos al finalizar el contrato](#11-destrucción-de-datos-al-finalizar-el-contrato)
- [12. Ley aplicable](#12-ley-aplicable)


## 1. Marco

|           |                        |
| --------- | ---------------------- |
| Referencia | CT.AM.JUR.ANX.PAAS 2.0 |
| Fecha      | 13 marzo 2024          |

## 2. Acrónimos

| Acrónimo    | Descripción                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Comité consultivo sobre los cambios                                                |
| CMDB        | Configuration Management Database – Base de datos de gestión de configuraciones                            |
| COPIL       | Comité de pilotaje                                                                                         |
| COSTRAT     | Comité estratégico                                                                                         |
| DB          | Database (base de datos)                                                                                   |
| DRP         | Disaster Recovery Plan (Plan de recuperación ante desastres)                                               |
| GTI         | Garantía de Tiempo de Intervención                                                                          |
| GTR         | Garantía de Tiempo de Resolución                                                                            |
| GTE         | Garantía de Tiempo de Escalada                                                                              |
| HYPERVISEUR | Sistema operativo que permite la ejecución de VM en una placa de cálculo                                    |
| ITIL        | Information Technology Infrastructure Library - Mejores prácticas para la gestión de sistemas de información|
| IAAS        | Infrastructure as a Service                                                                                |
| MCO         | Mantenimiento en condiciones operativas                                                                    |
| MOA         | Maestría de Obra                                                                                            |
| MOE         | Maestría de Ejecución                                                                                       |
| OS          | Operating system (Sistema operativo)                                                                       |
| PAQ         | Plan de Aseguramiento de Calidad                                                                            |
| PAAS        | Platform as a Service                                                                                      |
| SDM         | Service Delivery Manager                                                                                   |
| RFC         | Request For Change – Solicitud de cambio                                                                   |
| RGPD        | Reglamento General de Protección de Datos (personales)                                                     |
| RPO         | Recovery Point Objective – Frescura de los datos restaurados en caso de desastre                           |
| RTO         | Recovery Time Objective – Plazo de restauración del servicio en caso de desastre                           |
| SLA         | Service Level Agreement – Acuerdo de nivel de servicio                                                     |
| UO          | Unidad de Obra                                                                                             |
| VABF        | Validación de Aptitud para el Buen Funcionamiento                                                         |
| VABE        | Validación de Aptitud para la Buen Explotación                                                             |
| VM          | Virtual Machine (Máquina virtual)                                                                          |
| VSR         | Validación de Servicio Regular                                                                             |
| SNC         | SecNumCloud                                                                                                |

## 3. Glosario

Las expresiones a continuación empleadas en el presente documento serán interpretadas conforme a las definiciones que se les atribuyen a continuación:

| Expresión                                          | Definición                                                                                                                                                                                                                                                                            |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | La denominación "Secure Temple" se refiere al servicio de Infraestructura como Servicio (IaaS), calificado SecNumCloud, ofrecido por la empresa Cloud Temple.                                                                                                                          |
| Región                                              | Una "región" en el contexto de la computación en la nube se refiere a un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, <br/>que proporcionan servicios de red, cómputo y almacenamiento para optimizar la latencia, el rendimiento <br/>y la conformidad regulatoria local |
| Zona de Disponibilidad<br/>(AZ)<br/>(Availability zone) | Una sección específica e aislada de la infraestructura de computación en la nube, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de los recursos.                                                                               |
| Tenant                                              | Una instancia aislada reservada para un usuario o grupo de usuarios, que comparten una infraestructura común y al mismo tiempo mantienen la independencia y seguridad de los datos y aplicaciones.                                                                                        |

| Expresión               | Definición                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                 | Un "incidente" se refiere a cualquier evento inesperado que interrumpe el funcionamiento normal de un sistema o compromete la seguridad de los datos y las infraestructuras                                                                                                                                                                                                                                                                                   |
| Problème                 | Un "problème" es una causa fundamental de uno o varios incidentes, identificado o sospechado, que requiere un análisis y una resolución para prevenir su recurrencia                                                                                                                                                                                                                                                                          |
| Changement               | Un "cambio" se refiere a cualquier modificación realizada en el entorno informático, destinada a mejorar o corregir los sistemas, procesos o servicios.                                                                                                                                                                                                                                                                             |
| changement standard      | Un "cambio estándar" es una modificación preaprobada, de bajo riesgo, repetitiva y que sigue un procedimiento establecido, en el entorno informático.                                                                                                                                                                                                                                                                                 |
| Mise en production       | acción(es) de administración para la realización del cambio cuando éste es aprobado <br/>(el cambio, en el sentido de ITIL, solo concierne la gestión del cambio y no su realización/concreción).                                                                                                                                                                                                                                      |
| Demande de service       | solicitud de evolución sometida a un procedimiento, cuya realización: <br/> i) no modifica la CMDB, <br/> ii) el modo operativo, los costos y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de retroceso <br/> iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la tarifa del contrato cuando se lleva a cabo en horas laborables y días laborables. |
| Element de configuration | Un "elemento de configuración" es un componente identificable del sistema de información, como un software, un hardware o un documento, <br/> sujeto a gestión en el marco de la gestión de servicios IT                                                                                                                                                                                                                                        |
| Service                  | Un "servicio" es un medio para proporcionar valor a los CLIENTEs facilitando los resultados deseados sin que estos tengan que gestionar <br/> los costos y riesgos específicos                                                                                                                                                                                                                                                                |
| Evenement                | Un "evento" es cualquier ocurrencia detectable o identificable en un sistema informático o red, que puede tener importancia para la gestión de servicios IT                                                                                                                                                                                                                                                                           |
| Sinistre                 | Un "siniestro" se refiere a un evento dañino e inesperado que causa pérdidas materiales, financieras o de datos para un CLIENTE                                                                                                                                                                                                                                                                                                            |
| Convention de service    | Este documento, establecido en el marco de un contrato específico o de los Términos Generales de Venta y Uso (CGVU), y en conformidad con los requisitos del Referencial SecNumCloud.                                                                                                                                                                                                                                                   |
| Disponibilité            | Capacidad para asegurar la disponibilidad y el mantenimiento de un rendimiento óptimo de un servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA)                                                                                                                                                                                                                                                    |
| Supervision              | Supervisión de un Sistema de Información o un Servicio, que implica la recolección de diversos datos como medidas y alarmas. <br/> Esta actividad se limita a la observación y seguimiento, sin intervenir directamente en los elementos supervisados, una prerrogativa que pertenece a las operaciones de Administración.                                                                                                                        |

## 4. Objet de la convention de service PaaS du Prestataire

La presente Convención de Servicios establece los términos y condiciones según los cuales el Prestador se compromete a entregar al CLIENTE una infraestructura 
conforme a las especificaciones de la oferta « Platform as a Service – PaaS », debidamente calificada SecNumCloud.

Objeto de la Convención de Servicios:

1. Precisar los requisitos de rendimiento esperados por el CLIENTE en términos de funcionalidad y fiabilidad de la infraestructura.
2. Enunciar las obligaciones del Prestador para satisfacer los niveles de servicio acordados.
3. Identificar las normas regulatorias aplicables específicamente a la infraestructura propuesta.
4. Asegurar una uniformidad e integridad en la evaluación de la calidad de los servicios prestados.
5. Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en el supuesto de que el Prestador pierda su calificación SecNumCloud, el presente Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalizaciones, por el CLIENTE. 
En tal eventualidad, el Prestador se compromete a informar al CLIENTE de esta descalificación mediante el envío de una notificación oficial, a través de una carta certificada con solicitud de acuse de recibo.

Se debe notar que una modificación o ajuste de la calificación SecNumCloud no será interpretada como una revocación de la calificación inicial.

## 5. Evolution de la convention de service PaaS

Las modificaciones o adiciones a la presente convención de servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados a tal efecto. 
Estas propuestas de cambio serán examinadas en el comité estratégico, la única instancia autorizada para determinar los aspectos que requieran una formalización por escrito.

Se acuerda que cualquier evolución de la convención, después de su validación, que altere las condiciones financieras inicialmente establecidas, requerirá el establecimiento y la firma de un adendum al contrato en curso.

Los factores que pueden inducir una revisión de esta convención incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS gestionada por el Prestador.
- Los ajustes realizados en los servicios desplegados por el Prestador.
- Las variaciones de los compromisos tomados y las sanciones aplicables.
- Las reconfiguraciones organizacionales dentro del CLIENTE o del Prestador.
- La expansión o reducción del alcance de los servicios a los que el CLIENTE ha suscrito.

La gestión de versiones y revisiones de la convención se registra en el preámbulo del documento para facilitar su seguimiento.

## 6. Audit 

El Prestador se compromete a permitir al CLIENTE, o a cualquier auditor tercero designado por este último, consultar todos los documentos necesarios para la certificación del completo cumplimiento de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General sobre la Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Prestador se compromete en particular a mantener a disposición del CLIENTE la lista de todos los terceros que pueden acceder a los datos e informarle sobre cualquier cambio de subcontratistas.**

Mediante la aceptación de la presente convención de servicio, el CLIENTE otorga su autorización explícita a:

1. __La Agencia Nacional para la Seguridad de los Sistemas de Información (ANSSI)__ así como a la entidad de calificación competente para emprender la verificación de la conformidad del Servicio y de su Sistema de Información con los estándares definidos por el Referencial SecNumCloud.
2. __Un prestador de auditoría en seguridad de sistemas de información__, debidamente calificado y expresamente designado por el Prestador, para llevar a cabo auditorías de seguridad sobre el Servicio prestado por el Prestador.

## 7. Description du service

La oferta de servicios propuesta por el Prestador se caracteriza por la puesta a disposición de las prestaciones siguientes, 
las cuales se alinean con el principio de responsabilidad compartida detallado en las normas establecidas por el referencial SecNumCloud:

- La provisión de una plataforma de gestión de contenedores Redhat Openshift gestionada por el Prestador.

Se entiende que el Prestador pondrá en práctica su experiencia para realizar las Prestaciones según las mejores prácticas profesionales, 

conformément à leurs Spécifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Implementación del servicio

Se especifica que todas las operaciones y todos los componentes físicos involucrados en la provisión del servicio calificado, objeto del presente convenio, 
están ubicados en la Unión Europea. Esto incluye el soporte, la supervisión operativa y la supervisión de seguridad (SOC).

### 8.1. Descripción de los componentes técnicos

Los servicios PaaS (Platform as a Service) engloban la totalidad de los componentes y servicios requeridos para su funcionamiento óptimo en el respeto de la calificación SecNumCloud.

A este respecto, su rendimiento y fiabilidad están intrínsecamente ligados a los componentes técnicos y los servicios de **la infraestructura IaaS** del Prestador, como se especifica en el documento [Convenio de Servicio IaaS](../iaas/sla_iaas.md) del Prestador.

#### 8.1.1. Plataforma de servicio REDHAT OpenShift

El servicio abarca la puesta a disposición en una región, en 3 zonas de disponibilidad,

#### 8.1.2. Infraestructura de software de gestión de la plataforma Redhat Openshift

El Prestador proporciona al CLIENTE la consola de administración y la API necesarias para la explotación de sus entornos PaaS RedHat OpenShift. 
También se compromete a mantenerlos en condiciones operativas óptimas y a garantizar su seguridad de manera continua.

En el marco específico del servicio proporcionado, el Prestador pone a disposición del CLIENTE todas las interfaces y APIs de la plataforma RedHat OpenShift dentro del tenant seleccionado. Corresponde al CLIENTE instaurar los dispositivos de seguridad apropiados, tales como los firewalls, los firewalls de aplicaciones web (WAF), y otras medidas de protección, así como definir las reglas de filtrado asociadas para asegurar el acceso a su plataforma conforme a su política de seguridad.

El Prestador alerta al Cliente de que un uso anormal de su consola de administración, en particular en caso de sobrecarga de sus APIs de comando (hammering), 
puede desencadenar medidas de seguridad automáticas que resultarían en el bloqueo del acceso a las APIs de comando o a ciertos servicios del Prestador. Conviene subrayar que esta situación no constituye una indisponibilidad del servicio sino una acción de protección de la Infraestructura del Prestador; 
por lo tanto, el Cliente no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Prestador precisa al Cliente que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). 
Si el Cliente envía solicitudes idénticas a una frecuencia superior, su rechazo no debe interpretarse como una indisponibilidad del servicio.

#### 8.1.3. Infraestructura de respaldo asociada

El Prestador pone a disposición del CLIENTE una plataforma de respaldo integrada, dedicada y gestionada, destinada a la protección de los datos de sus entornos RedHat Openshift. 
El Prestador asegura el mantenimiento en condiciones operativas y en condiciones de seguridad de esta plataforma integrada de respaldo.
Independientemente del número de zonas de disponibilidad suscritas por el CLIENTE, el Prestador garantiza que la plataforma 
de respaldo del CLIENTE estará ubicada fuera de la zona de disponibilidad de las cargas de trabajo respaldadas.

La prestación de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS de los tenants SecNumCloud del CLIENTE. 
La elaboración y la aplicación de una política de respaldo adecuada por parte del CLIENTE dependen de la suscripción a unidades de obra específicas.
Corresponde al CLIENTE asegurarse de la disponibilidad de los recursos técnicos necesarios con el Prestador
para implementar su política de respaldo o ajustar esta última en función de los medios disponibles. 

El Prestador se compromete a notificar al CLIENTE en caso de restricciones de capacidad y a proporcionar asistencia y asesoramiento para la optimización de los recursos.
Las obligaciones del Prestador se limitarán a la implementación de las necesidades expresadas por el CLIENTE en cuanto a la política de respaldo, en el marco de los recursos suscritos.

#### 8.1.4. Implementación de soluciones de recuperación o continuidad de actividad

El Prestador proporciona al CLIENTE el conjunto de soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos 
en diversas zonas de disponibilidad. Corresponde al CLIENTE la responsabilidad de gestionar eficazmente esta distribución de recursos, 
para lo cual tiene la posibilidad de utilizar las herramientas del Prestador disponibles para este uso.

En particular, las aplicaciones desplegadas en la plataforma RedHat OpenShift deben soportar los mecanismos de redundancia propuestos por el Prestador para poder beneficiarse de las soluciones de recuperación de actividad o continuidad de actividad asociadas.

## 9. Compromisos y niveles de servicios

El Prestador se compromete a garantizar una vigilancia continua del rendimiento y la integridad de seguridad de sus 
plataformas y servicios, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, objeto de un indicador de rendimiento, es reconocida desde su identificación por el sistema de supervisión del Prestador, 
o tras una notificación por parte de un usuario del CLIENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, 
con el fin de garantizar un cómputo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente por la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Prestador, 
o por un retorno de usuario, asegurando así una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

### 9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift

El Prestador se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. 
Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican siempre que el CLIENTE implemente sus sistemas a través 
de al menos dos de las zonas de disponibilidad presentes en la región correspondiente. 

En ausencia de respeto de estas condiciones por parte del CLIENTE, éste se verá en la incapacidad de reivindicar la aplicación de los SLAs correspondientes, 
los cuales están específicamente identificados por un asterisco (*). El acceso a los SLAs se realiza a través de la interfaz CLIENTE. **Las medidas se entienden calculadas mensualmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilidad de la plataforma RedHat OpenShift: tasa de disponibilidad garantizada de 99.9%, calculada sobre una base 24h/24, 7d/7.

_**Notas**_ : 

- *En respuesta a un ataque por denegación de servicio distribuido (DDoS), el Prestador se reserva el derecho de ajustar su configuración de enrutamiento de internet para 
limitar el impacto de este ataque y resguardar su infraestructura. En particular, si una dirección IP perteneciente al CLIENTE es atacada, el Prestador puede recurrir a la técnica de blackholing 
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP atacada en los proveedores ascendentes, con el fin de proteger los recursos del CLIENTE así como los de otros clientes 
y de la infraestructura del Prestador. El Prestador alienta encarecidamente al CLIENTE a adoptar medidas similares, tales como el uso de software de firewall 
de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad vía la API de comando.*

- *El Prestador insiste en la necesidad para el CLIENTE de minimizar las aperturas de flujo, evitando en particular hacer accesibles los puertos 
de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde el conjunto de Internet (subred 0.0.0.0/0), así como los protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 10. Modelo de responsabilidades compartidas aplicable

### 10.1. Responsabilidad y Obligaciones del Prestador

El Prestador se compromete a poner a disposición del CLIENTE interfaces de usuario en lengua francesa e inglesa, facilitando así el acceso y la gestión de los servicios proporcionados.
El CLIENTE, por su parte, se compromete a respetar las restricciones legales y reglamentarias en vigor relativas a los datos que confía al Prestador para su procesamiento.

En caso de transmisión de datos sujetos a requisitos legales específicos, el Prestador colaborará con el CLIENTE para identificar y poner en marcha 
las medidas de seguridad necesarias, conforme a las obligaciones del Prestador y en el marco de la provisión de servicios.

El Prestador también se compromete a examinar y tomar en consideración las necesidades específicas relacionadas con los sectores de actividad del CLIENTE,
respetando las limitaciones de su responsabilidad, para garantizar un nivel de seguridad adecuado a la información procesada.

Si un proyecto es susceptible de impactar la seguridad del servicio ofrecido, el Prestador se compromete a informar al CLIENTE de los impactos potenciales, 
de las medidas correctivas previstas y de los riesgos residuales, asegurando una total transparencia.

El Prestador garantiza que no utilizará los datos del CLIENTE con fines de prueba sin un acuerdo previo y explícito del CLIENTE 
y se compromete a anonimizar y proteger la confidencialidad de estos datos durante su procesamiento.

En caso de cambio de subcontratista para el alojamiento, el Prestador informará al CLIENTE con antelación, asegurándose de que esta transición no afecte negativamente el servicio proporcionado.

A petición del CLIENTE, el Prestador proporcionará acceso a su reglamento interno, a su carta de ética, a las sanciones aplicables en caso de incumplimiento de su
politica de seguridad, a los eventos que le conciernen, a los procedimientos relativos al servicio y a los requisitos específicos de seguridad.

### 10.2. Limitación de responsabilidad del Proveedor

La estructura de responsabilidad compartida reduce eficazmente el alcance de la intervención del Proveedor a los aspectos relacionados con la provisión de una plataforma RedHat OpenShift funcional, que comprende:

- La gestión de la infraestructura IaaS que soporta la plataforma RedHat OpenShift y su aprovisionamiento,
- La gestión de los sistemas necesarios para el buen funcionamiento de la plataforma,
- El mantenimiento en condiciones de seguridad,
- La actualización de la plataforma RedHat OpenShift,
- La copia de seguridad de los datos de configuración esenciales de esta plataforma, a excepción de los datos y aplicaciones del CLIENTE que son de su responsabilidad.

Se excluyen particularmente, pero sin limitarse a:

- La actualización de los sistemas operativos y software instalados por el CLIENTE en sus entornos OpenShift en sus espacios arrendados,
- La seguridad de los programas, software y aplicaciones instalados dentro del entorno OpenShift por el CLIENTE,
- La copia de seguridad de los datos a nivel de aplicación,
- La configuración de las políticas de respaldo.

### 10.3. Limitación de acceso

En el marco de este acuerdo de servicio, el Proveedor tiene formalmente prohibido acceder a los inquilinos pertenecientes al CLIENTE sin autorización previa. 
Es responsabilidad del CLIENTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, 
cuando proceda, de los servicios profesionales de soporte, si esta opción ha sido elegida por el CLIENTE. 

El CLIENTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de los servicios acordados, 
asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros implicados en la prestación de servicios del Proveedor está estrictamente prohibido. 
En el caso de que un requisito técnico específico requiera dicho acceso, éste sólo podrá establecerse 
tras haber notificado claramente al CLIENTE, proporcionado una justificación detallada y obtenido su consentimiento por escrito. 

Esta medida garantiza el control y la seguridad de los datos del CLIENTE, asegurando que cualquier excepción a la norma sea debidamente autorizada y documentada.

## 11. Eliminación de datos al finalizar el contrato

Al final del contrato, ya sea que expire o se rescinda por cualquier motivo, el Proveedor se compromete a llevar a cabo la eliminación 
segura de la totalidad de los datos del Cliente, incluidos los datos técnicos. El Proveedor se asegurará de comunicar al CLIENTE un aviso formal, 
respetando un plazo de veintiún (21) días naturales. Los datos del CLIENTE serán entonces eliminados en un plazo máximo de treinta (30) días 
siguientes a esta notificación. 

Para atestiguar esta eliminación, el Proveedor entregará al Cliente un certificado que confirme la eliminación de los datos.

## 12. Derecho aplicable

El derecho aplicable a este acuerdo de servicio es el derecho francés.

En caso de que el Proveedor recurra, en el marco de los servicios prestados al CLIENTE, a una empresa tercera, incluido un subcontratista, cuya sede social, administración central 
o principal establecimiento se situe en un Estado no miembro de la Unión Europea, o que sea propiedad o esté bajo el control de una empresa tercera domiciliada fuera de la Unión Europea,
el Proveedor se compromete a garantizar que dicha empresa tercera no tendrá acceso alguno a los datos tratados por el servicio del Proveedor.

Cabe señalar que los datos referidos incluyen aquellos confiados al Proveedor por el CLIENTE, así como todos los datos técnicos tales como las identidades de los beneficiarios y administradores de la infraestructura técnica,
los datos manipulados por las redes, los registros de la infraestructura técnica, el directorio, los certificados, la configuración de los accesos, etc., que contengan información sobre el CLIENTE.

Para mayor precisión, la noción de control se define conforme al II del artículo L233-3 del código de comercio.