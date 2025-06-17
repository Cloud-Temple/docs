---
title: Acuerdo de Servicio SecNumCloud PaaS
---

**Índice**

- [1. Marco](#1-marco)
- [2. Acrónimos](#2-acrónimos)
- [SNC           SecNumCloud](#snc-----------secnumcloud)
- [3. Glosario](#3-glosario)
- [4. Objeto del acuerdo de servicio PaaS del Prestador](#4-objeto-del-acuerdo-de-servicio-paas-del-prestador)
- [5. Evolución del acuerdo de servicio PaaS](#5-evolucion-del-acuerdo-de-servicio-paas)
- [6. Auditoría](#6-auditoria)
- [7. Descripción del servicio](#7-descripcion-del-servicio)
- [8. Implementación del servicio](#8-implementacion-del-servicio)
  - [8.1. Descripción de los componentes técnicos](#81-descripcion-de-los-componentes-tecnicos)
    - [8.1.1. Plataforma de servicio REDHAT OpenShift](#811-plataforma-de-servicio-redhat-openshift)
    - [8.1.2. Infraestructura de software de gestión de la plataforma Redhat Openshift](#812-infraestructura-de-software-de-gestion-de-la-plataforma-redhat-openshift)
    - [8.1.3. Infraestructura de respaldo asociada](#813-infraestructura-de-respaldo-asociada)
    - [8.1.4. Implementación de soluciones de recuperación de actividad o continuidad de actividad](#814-implementacion-de-soluciones-de-recuperacion-de-actividad-o-continidad-de-actividad)
- [9. Compromisos y niveles de servicio](#9-compromisos-y-niveles-de-servicio)
  - [9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift](#91-compromisos-de-disponibilidad-de-la-plataforma-redhat-openshift)
- [10. Modelo de responsabilidades compartidas aplicable](#10-modelo-de-responsabilidades-compartidas-aplicable)
  - [10.1. Responsabilidad y Obligaciones del Prestador](#101-responsabilidad-y-obligaciones-del-prestador)
  - [10.2. Limitación de responsabilidad del Prestador](#102-limitacion-de-responsabilidad-del-prestador)
  - [10.3. Limitación de acceso](#103-limitacion-de-acceso)
- [11. Eliminación de datos al finalizar el contrato](#11-eliminacion-de-datos-al-finalizar-el-contrato)
- [12. Derecho aplicable](#12-derecho-aplicable)

## 1. Marco

  --------------------- -------------------------------------------------
  Referencia             CT.AM.JUR.ANX.PAAS 2.1

  Fecha                  21 de enero de 2025
  --------------------- -------------------------------------------------

## 2. Acrónimos

  ------------------------------------------------------------------------------
  Acrónimo      Descripción
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Comité Consultivo de Cambios

  CMDB          Configuration Management Database -- Base de Datos de Gestión de Configuración

  COPIL         Comité de Gestión

  COSTRAT       Comité Estratégico

  DB            Base de datos

  DRP           Disaster Recovery Plan (Plan de Recuperación de Actividad)

  GTI           Garantía de Tiempo de Intervención

  GTR           Garantía de Tiempo de Resolución

  GTE           Garantía de Tiempo de Escalado

  HYPERVISEUR   Sistema operativo que permite la ejecución de VM en una unidad de cálculo

  ITIL          Information Technology Infrastructure Library - Buenas prácticas para la gestión de los sistemas de información

  IAAS          Infrastructure as a Service

  MCO           Mantenimiento en Condición Operativa

  MOA           Dirección de Obras

  MOE           Dirección de Obras

  OS            Sistema operativo

  PAQ           Plan de Aseguramiento de Calidad

  PAAS          Platform as a Service

  SDM           Gerente de Entrega de Servicios

  RFC           Request For Change -- Solicitud de Cambio

  RGPD          Reglamento General de Protección de Datos (personales)

  RPO           Recovery Point Objective -- Freshness de los datos restaurados en caso de siniestro

  RTO           Recovery Time Objective -- Tiempo de recuperación del servicio en caso de siniestro

  SLA           Service Level Agreement -- Acuerdo sobre los niveles de servicios

  UO            Unidad de Obra

  VABF          Validación de Aptitud al Buen Funcionamiento

  VABE          Validación de Aptitud a la Buena Explotabilidad

  VM            Máquina Virtual (Virtual Machine)

  VSR           Validación de Servicio Regular

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glosario

Las expresiones siguientes utilizadas en este documento se interpretarán de acuerdo con las definiciones que se les atribuyen a continuación:

  --------------------------------------------------------------------------------------------
  Expresión                       Definición
  -------------------------------- -----------------------------------------------------------
  "Secure Temple"                Se refiere al servicio IaaS calificado SecNumCloud, ofrecido por la sociedad Cloud Temple, tal como definido en la acreditación disponible en el sitio de la ANSSI y proporcionado como anexo de la presente Convención de Servicio.

  Región                           Una "región" en el contexto del cloud computing se refiere a un conjunto geográficamente delimitado de zonas de disponibilidad cloud, proporcionando servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad normativa local.

  Zona                             Una sección específica e independiente de la infraestructura de
  Disponibilidad(AZ)(Availability   computación en la nube, diseñada para garantizar la alta disponibilidad
  zone)                            y resiliencia de los servicios mediante una distribución geográfica de los recursos.
Tenant                           Una instancia aislada reservada para un usuario o grupo de usuarios, compartiendo una infraestructura común mientras mantiene la independencia y seguridad de los datos y aplicaciones
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Expresión      Definición
  --------------- ---------------------------------------------------------
  Incidente        Un "incidente" se refiere a cualquier evento inesperado que interrumpe el funcionamiento normal de un sistema o compromete la seguridad de los datos.

  Problema        Un "problema" es una causa fundamental de uno o más incidentes, identificada o sospechada, que requiere un análisis y resolución para prevenir su repetición

  Cambio      Un "cambio" se refiere a cualquier adición, modificación o supresión que afecta al Servicio, autorizado, planificado o respaldado.

  Cambio      Un "cambio estándar" es un cambio que forma parte de un procedimiento, cuyas modalidades de producción y impactos (incluidos financieros) son conocidos y aceptados de antemano por las Partes. Entonces, se integra al catálogo de cambios estándar, y según los casos, puede tener una GTI y una GTR.

  Puesta en       acciones de administración de realización del cambio
  producción      cuando este es aprobado (el cambio, en el sentido de ITIL, solo se refiere a la gestión del cambio y no a su realización/concreción).

  Solicitud de      solicitud de evolución que forma parte de un procedimiento, cuya realización: i) no modifica la CMDB, ii) el procedimiento operativo, los costos y riesgos son conocidos y aceptados de antemano y no requieren modalidades de retroceso específicas iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la tarifa del contrato cuando se realiza en horas laborables y días laborables.

  Elemento de      Un "elemento de configuración" es un componente
  configuración   identificable del sistema de información, como un software, hardware o documento, sujeto a gestión en el marco de la gestión de servicios IT

  Servicio         Un "servicio" se refiere al servicio calificado SecNumCloud,
                  entregado al COMPRADOR por el Proveedor, tal como descrito en la sección «Descripción del Servicio» de este Acuerdo de Servicio.

  Evento       Un "evento" es cualquier ocurrencia detectable o identificable que puede tener importancia para la gestión del Servicio.

  Siniestro        Un «siniestro» se refiere a un evento grave de origen
                  natural o humano, accidental o intencional, causando pérdidas y daños importantes a la Parte afectada.

  Acuerdo de   Este documento, establecido dentro de un contrato
  servicio         específico o de las Condiciones Generales de Venta y Uso (CGVU), y esto, en conformidad con los requisitos del Referencial SecNumCloud.

  Disponibilidad   Capacidad para garantizar la disponibilidad y mantenimiento de las prestaciones óptimas de un servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA)

Supervisión     Supervisión de un Sistema de Información o un
                  Servicio, implicando la recopilación de diversos datos
tales como medidas y alarmas. Esta actividad se limita a
                  la observación y seguimiento, sin intervenir directamente
                  en los elementos supervisados, una prerrogativa que
                  corresponde a las operaciones de Administración
  -------------------------------------------------------------------------

## 4. Objeto del Convenio de Servicios PaaS del Prestador

El presente Convenio de Servicios establece los términos y condiciones
según los cuales el Prestador se compromete a entregar al COMANDITARIO una
infraestructura conforme a las especificaciones de la oferta « Platform as a
Service -- PaaS », debidamente calificada SecNumCloud.

Objeto del Convenio de Servicios:

1. Especificar los requisitos de rendimiento esperados por el COMANDITARIO
    en términos de funcionalidad y fiabilidad de la infraestructura.
2. Establecer las obligaciones del Prestador para satisfacer los
    niveles de servicio acordados.
3. Identificar las normativas regulatorias aplicables específicamente a
    la infraestructura propuesta.
4. Garantizar una uniformidad e integridad en la evaluación de la
    calidad de los servicios prestados.
5. Garantizar la excelencia de los servicios proporcionados, evaluada mediante
    indicadores cuantitativos de rendimiento.

Se estipula que, en el caso de que el Prestador pierda su calificación SecNumCloud, este Contrato podrá ser rescindido de pleno derecho, sin incurrir en sanciones, por el COMANDITARIO. En tal caso, el Prestador se compromete a informar al COMANDITARIO de esta descalificación mediante el envío de una notificación oficial, a través de una carta certificada con acuse de recibo.

Se debe tener en cuenta que cualquier modificación o ajuste de la calificación SecNumCloud no se interpretará como una revocación de la calificación inicial.

## 5. Evolución del Convenio de Servicios PaaS

Las modificaciones o adiciones realizadas a este Convenio de Servicios provienen exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados al efecto. Estas propuestas de cambio serán examinadas en el comité estratégico, única instancia autorizada para determinar los aspectos que requieren formalización escrita.

Se acuerda que toda evolución del Convenio, después de su validación, que altere las condiciones financieras inicialmente establecidas, requerirá la elaboración y firma de un anexo al contrato vigente.

Los factores que pueden inducir una revisión de este Convenio incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS coordinada por el Prestador.
- Los ajustes realizados en los servicios desplegados por el Prestador.
- Las variaciones en los compromisos asumidos y las sanciones aplicables.
- Las reconfiguraciones organizativas dentro del COMANDITARIO o del Prestador.
- La expansión o reducción del alcance de los servicios a los que el COMANDITARIO se ha suscrito.

La gestión de versiones y revisiones del Convenio se consigna en el preámbulo del documento para facilitar su seguimiento.

## 6. Auditoría

El Prestador se compromete a permitir al COMANDITARIO, o a cualquier auditor externo que este haya designado, consultar todos los documentos necesarios para la acreditación del cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Prestador se compromete especialmente a poner a disposición del COMANDITARIO la lista de todos los terceros que pueden acceder a los datos y a informarle de cualquier cambio en los subcontratistas.**

Al aceptar este Convenio de Servicios, el COMANDITARIO otorga su autorización explícita a:

1. **La Agencia Nacional de Seguridad de los Sistemas de Información
    (ANSSI)** así como a la entidad de calificación competente para realizar
    la verificación de la conformidad del Servicio y su Sistema de Información
    con los estándares definidos por el Referencial SecNumCloud.
2. **Un proveedor de auditoría en seguridad de sistemas de información**,
    debidamente calificado y expresamente designado por el Prestador, para
    llevar a cabo auditorías de seguridad relativas al Servicio prestado
    por el Prestador.

## 7. Descripción del servicio

La oferta de servicios propuesta por el Prestador se caracteriza por la
puesta a disposición de las siguientes prestaciones, las cuales se alinean
con el principio de responsabilidad compartida detallado en las normas
establecidas por el referencial SecNumCloud:

- La provisión de una plataforma de gestión de contenedores Red Hat
    OpenShift operada por el Prestador.

Se entiende que el Prestador utilizará su expertise para realizar las
Prestaciones según las mejores prácticas profesionales, de conformidad con
sus Especificaciones y respetando las normas de su certificación ISO/IEC 27001
así como las directrices del Referencial SecNumCloud.

## 8. Implementación del servicio

Se precisa que todas las operaciones y componentes físicos involucrados en la
prestación del servicio calificado, cuyo objeto es este Convenio, se encuentran
en la Unión Europea. Esto incluye, entre otros, el soporte, la supervisión operativa
y la supervisión de seguridad (SOC).

### 8.1. Descripción de los componentes técnicos

Los servicios PaaS (Platform as a Service) incluyen todos los componentes y servicios
necesarios para su óptimo funcionamiento en cumplimiento de la calificación SecNumCloud.

En este sentido, su rendimiento y fiabilidad están intrínsecamente relacionados
con los componentes técnicos y los servicios de **la infraestructura IaaS**
del Prestador, como se especifica en el documento [Convenio de Servicios
IaaS](../iaas/sla_iaas.md) del
Prestador.

#### 8.1.1. Plataforma de servicio REDHAT OpenShift

El servicio incluye la puesta a disposición dentro de una región, en 3
zonas de disponibilidad,

#### 8.1.2. Infraestructura de software de gestión de la plataforma Red Hat OpenShift

El Prestador proporciona al COMANDITARIO la consola de administración y
la API necesaria para operar sus entornos PaaS Red Hat OpenShift. Se compromete
además a mantenerlos en condiciones operativas óptimas y a garantizar su seguridad
de manera continua.

En el marco específico del servicio proporcionado, el Prestador pone a disposición
del COMANDITARIO todas las interfaces y APIs de la plataforma Red Hat OpenShift
dentro del tenant seleccionado. Corresponde al COMANDITARIO establecer los
dispositivos de seguridad adecuados, como los cortafuegos (firewall), los cortafuegos
aplicativos web (WAF) y otras medidas de protección, así como definir las reglas de
filtrado asociadas para garantizar el acceso seguro a su plataforma de acuerdo
con su política de seguridad.

El Prestador advierte al COMANDITARIO sobre el hecho de que un uso anormal de su
consola de administración, especialmente en caso de sobrecarga de sus APIs de
comando (hammering), puede desencadenar medidas de seguridad automáticas que
bloqueen el acceso a las APIs de comando o a ciertos servicios del Prestador. Es
importante destacar que esta situación no constituye una inoperatividad del
servicio, sino una acción de protección de la infraestructura del Prestador; por
tanto, el COMANDITARIO no puede considerarla como una inoperatividad en sus cálculos.

Además, el Prestador informa al COMANDITARIO que las solicitudes idénticas (duplicados)
enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el COMANDITARIO
envía solicitudes idénticas con una frecuencia superior, su rechazo no debe interpretarse
como una inoperatividad del servicio.

#### 8.1.3. Infraestructura de copia de seguridad asociada

El Prestador pone a disposición del COMANDITARIO una plataforma de copia de seguridad
integrada, dedicada y gestionada, destinada a la protección de los datos de sus
entornos Red Hat OpenShift. El Prestador garantiza el mantenimiento en condiciones
operativas y de seguridad de esta plataforma integrada de copia de seguridad. Independientemente
del número de zonas de disponibilidad suscritas por el COMANDITARIO, el Prestador garantiza
que la plataforma de copia de seguridad del COMANDITARIO se encuentre fuera de la zona
de disponibilidad de las cargas de trabajo respaldadas.

La prestación de copia de seguridad se limita a la copia de seguridad de las máquinas
virtuales y las configuraciones de topología del entorno IaaS de los tenants SecNumCloud
del COMANDITARIO. La elaboración y aplicación de una política de copia de seguridad
adecuada por parte del COMANDITARIO depende de la suscripción a unidades de obra
específicas. Por lo tanto, corresponde al COMANDITARIO asegurarse de la disponibilidad
de los recursos técnicos necesarios ante el Prestador para implementar su política de
copia de seguridad o ajustarla según los medios disponibles.

El Prestador se compromete a notificar al COMANDITARIO en caso de restricciones de capacidad
y a proporcionar asesoramiento para optimizar los recursos. Las obligaciones del Prestador
se limitarán a la implementación de los requisitos expresados por el COMANDITARIO en
materia de política de copia de seguridad, dentro del marco de los recursos suscritos.

#### 8.1.4. Implementación de soluciones de recuperación de actividad o continuidad de actividad

El Prestador proporciona al COMANDITARIO todas las soluciones técnicas necesarias
para garantizar una distribución óptima de sus recursos a través de diversas zonas
de disponibilidad. Corresponde al COMANDITARIO la responsabilidad de gestionar eficazmente
esta distribución de recursos, para la cual tiene la posibilidad de utilizar las herramientas
del Prestador disponibles para este uso.

En particular, las aplicaciones desplegadas en la plataforma Red Hat OpenShift deben
soportar los mecanismos de redundancia propuestos por el Prestador para poder beneficiarse
de las soluciones de...
reanudación de actividad o continuidad de actividad asociadas.

## 9. Compromisos y niveles de servicio

El Prestador se compromete a garantizar una supervisión continua del rendimiento y la integridad segura de sus plataformas y servicios, velando por su funcionamiento óptimo.

La inoperatividad de un servicio, sujeta a un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Prestador, o como resultado de una notificación por parte de un usuario del COMITENTE. El inicio de la inoperatividad se fija en el momento más temprano entre estos dos eventos, para garantizar un recuento preciso y justo del tiempo de inoperatividad.

El fin de la inoperatividad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Prestador, o por un retorno del usuario, asegurando así una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

### 9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift

El Prestador se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican bajo la condición de que el COMITENTE implemente sus sistemas a través de al menos dos de las zonas de disponibilidad presentes en la región concernida.

En ausencia de cumplimiento de estas condiciones por parte del COMITENTE, éste se verá imposibilitado de reclamar la aplicación de los SLAs correspondientes, los cuales están específicamente identificados por un asterisco (*). El acceso a los SLAs se realiza a través de la interfaz del COMITENTE. **Las medidas se entienden calculadas mensualmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** -- Disponibilidad de la plataforma RedHat OpenShift: tasa de disponibilidad garantizada del 99,9%, calculada en base 24h/24, 7j/7.

***Notas*** :

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Prestador se reserva el derecho de ajustar su configuración de enrutamiento de internet para limitar el impacto de este ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al COMITENTE es objetivo, el Prestador puede recurrir a la técnica de blackholing a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP objetivo en sus proveedores, con el fin de proteger los recursos del COMITENTE así como los de otros COMITENTES y la infraestructura del Prestador. El Prestador anima vivamente al COMITENTE a adoptar medidas similares, tales como el uso de software de cortafuegos de aplicaciones disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*

- *El Prestador insiste en la necesidad para el COMITENTE de minimizar las aperturas de flujos, evitando especialmente hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde todo Internet (subred 0.0.0.0/0), así como los protocolos internos tales como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 10. Modelo de responsabilidades compartidas aplicable

### 10.1. Responsabilidad y obligaciones del Prestador

El Prestador se compromete a poner a disposición del COMITENTE interfaces de usuario en francés y en inglés, facilitando así el acceso y la gestión de los servicios proporcionados. El COMITENTE, por su parte, se compromete a respetar las restricciones legales y regulatorias vigentes relativas a los datos que confía al Prestador para su tratamiento.

En caso de transmisión de datos sujetos a requisitos legales específicos, el Prestador colaborará con el COMITENTE para identificar y poner en marcha las medidas de seguridad necesarias, de acuerdo con las obligaciones del Prestador y dentro del marco de la prestación de servicios.

El Prestador también se compromete a examinar y considerar los requisitos específicos relacionados con los sectores de actividad del COMITENTE, respetando las limitaciones de su responsabilidad, para garantizar un nivel de seguridad adecuado a las informaciones tratadas.

Si un proyecto es susceptible de afectar la seguridad del Servicio ofrecido o la disponibilidad de dicho Servicio o incluso generar una pérdida de funcionalidad, el Prestador se compromete a informar al COMITENTE a través de la consola o por correo electrónico al contacto del COMITENTE y en un plazo razonable sobre los impactos potenciales, las medidas correctivas previstas y los riesgos residuales que le conciernen, asegurando así una transparencia total.

El Prestador se compromete a no utilizar los datos del COMITENTE provenientes de la producción para realizar pruebas, a menos que obtenga previamente la autorización explícita del COMITENTE, en cuyo caso el Prestador se compromete a anonimizar estos datos y a garantizar su confidencialidad durante su anonimización.

En caso de cambio de subcontratista para el alojamiento, el Prestador informará al COMITENTE con antelación, asegurando que esta transición no afecte negativamente al servicio proporcionado.

A solicitud del COMITENTE, el Prestador proporcionará acceso a su reglamento interno, a su código de ética, a las sanciones aplicables en caso de incumplimiento de su política de seguridad, a los eventos que le conciernen, a los procedimientos relativos al servicio y a los requisitos específicos de seguridad.

El Prestador se compromete a informar al COMITENTE de cualquier cambio futuro en elementos de software bajo la responsabilidad de Cloud Temple siempre que no se pueda garantizar la compatibilidad completa.

### 10.2. Limitación de responsabilidad del Prestador

La estructura de responsabilidad compartida reduce eficazmente el alcance de la intervención del Prestador en los aspectos relacionados con la prestación de una plataforma RedHat OpenShift funcional, incluyendo:

- La gestión de la infraestructura IaaS que respalda la plataforma RedHat OpenShift y su provisión,
- La gestión de los sistemas necesarios para el correcto funcionamiento de la plataforma,
- El mantenimiento en condiciones de seguridad,
- La actualización de la plataforma RedHat OpenShift,
- La copia de seguridad de los datos de configuración esenciales de esta plataforma, a excepción de los datos y aplicaciones del COMITENTE que recaen en su responsabilidad.

Excluye especialmente, pero no exclusivamente:

- La actualización de los sistemas operativos y software instalados por el COMITENTE en sus entornos OpenShift en sus espacios locales,
- La seguridad de los programas, software y aplicaciones instalados dentro del entorno OpenShift por el COMITENTE,
- La copia de seguridad de los datos a nivel aplicativo,
- La configuración de las políticas de copia de seguridad.

### 10.3. Limitación de acceso

En el marco de este acuerdo de servicio, el Prestador está formalmente prohibido de acceder a los inquilinos pertenecientes al COMITENTE sin autorización previa. Es responsabilidad del COMITENTE proporcionar los accesos necesarios al personal del Prestador, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el COMITENTE.

El COMITENTE reconoce que estos accesos son otorgados exclusivamente para los fines relacionados con la prestación de servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros involucrados en la prestación de servicio del Prestador está estrictamente prohibido. En el caso de que una exigencia técnica específica requiera dicho acceso, éste solo podría establecerse después de haber notificado claramente al COMITENTE, proporcionado una justificación detallada y obtenido su consentimiento por escrito.

Esta medida garantiza el control y la seguridad de los datos del COMITENTE, asegurándose de que toda excepción a la regla esté debidamente autorizada y documentada.

## 11. Eliminación de datos al final del contrato

Al finalizar el contrato, ya sea que expire o sea resuelto por cualquier motivo, el Prestador se compromete a realizar la eliminación segura de todos los datos del COMITENTE, incluidos los datos técnicos. El Prestador se asegurará de comunicar al COMITENTE un aviso formal, respetando un plazo de veintiún (21) días calendario. Los datos del COMITENTE serán eliminados en un máximo de treinta (30) días posteriores a esta notificación.

Para acreditar esta eliminación, el Prestador entregará al COMITENTE un certificado que confirme la eliminación de los datos.

## 12. Derecho aplicable

El derecho aplicable para el presente acuerdo de servicio es el derecho francés.

En caso de que el Prestador, en el marco de los servicios prestados al COMITENTE, recorra a una empresa tercera, incluido un subcontratista, cuya sede social, administración central o principal establecimiento esté ubicado en un Estado no miembro de la Unión Europea, o que sea propiedad o esté bajo el control de una empresa tercera radicada fuera de la Unión Europea, el Prestador se compromete a garantizar que dicha empresa tercera no tenga ningún acceso a los datos tratados por el servicio del Prestador.

Es importante señalar que los datos en cuestión incluyen los confiados al Prestador por el COMITENTE, así como todos los datos técnicos tales como las identidades de los beneficiarios y administradores de la infraestructura técnica, los datos manipulados por las redes, los registros de la infraestructura técnica, el directorio, los certificados, la configuración de accesos, etc., que contienen información sobre el COMITENTE.

Para precisión, la noción de control está definida de conformidad con el II de
el artículo L233-3 del código de comercio