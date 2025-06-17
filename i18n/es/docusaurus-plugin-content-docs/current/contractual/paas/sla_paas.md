---
title: Convención de Servicio SecNumCloud PaaS
---

**Índice**

- [1. Marco](#1-marco)
- [2. Acrónimos](#2-acrónimos)
- [SNC           SecNumCloud](#snc-----------secnumcloud)
- [3. Glosario](#3-glosario)
- [4. Objeto de la convención de servicio PaaS del Prestador](#4-objeto-de-la-convención-de-servicio-paas-del-prestador)
- [5. Evolución de la convención de servicio PaaS](#5-evolución-de-la-convención-de-servicio-paas)
- [6. Auditoría](#6-auditoría)
- [7. Descripción del servicio](#7-descripción-del-servicio)
- [8. Implementación del servicio](#8-implementación-del-servicio)
  - [8.1. Descripción de los componentes técnicos](#81-descripción-de-los-componentes-técnicos)
    - [8.1.1. Plataforma de servicio REDHAT OpenShift](#811-plataforma-de-servicio-redhat-openshift)
    - [8.1.2. Infraestructura de software de gestión de la plataforma Redhat Openshift](#812-infraestructura-de-software-de-gestión-de-la-plataforma-redhat-openshift)
    - [8.1.3. Infraestructura de copia de seguridad asociada](#813-infraestructura-de-copia-de-seguridad-asociada)
    - [8.1.4. Implementación de soluciones de recuperación de actividad o continuidad de actividad](#814-implementación-de-soluciones-de-recuperación-de-actividad-o-continidad-de-actividad)
- [9. Compromisos y niveles de servicio](#9-compromisos-y-niveles-de-servicio)
  - [9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift](#91-compromisos-de-disponibilidad-de-la-plataforma-redhat-openshift)
- [10. Modelo de responsabilidades compartidas aplicable](#10-modelo-de-responsabilidades-compartidas-aplicable)
  - [10.1. Responsabilidad y Obligaciones del Prestador](#101-responsabilidad-y-obligaciones-del-prestador)
  - [10.2. Limitación de responsabilidad del Prestador](#102-limitación-de-responsabilidad-del-prestador)
  - [10.3. Limitación de acceso](#103-limitación-de-acceso)
- [11. Eliminación de datos al final del contrato](#11-eliminación-de-datos-al-final-del-contrato)
- [12. Derecho aplicable](#12-derecho-aplicable)

## 1. Marco

  --------------------- -------------------------------------------------
  Referencia            CT.AM.JUR.ANX.PAAS 2.1

  Fecha                 21 de enero de 2025
  --------------------- -------------------------------------------------

## 2. Acrónimos

  ------------------------------------------------------------------------------
  Acrónimo      Descripción
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Comité Consultivo sobre los Cambios

  CMDB          Configuration Management Database -- Base de Datos de Gestión de Configuración

  COPIL         Comité de Dirección

  COSTRAT       Comité Estratégico

  DB            Database (Base de datos)

  DRP           Disaster Recovery Plan (Plan de Recuperación ante Desastres)

  GTI           Garantía de Tiempo de Intervención

  GTR           Garantía de Tiempo de Resolución

  GTE           Garantía de Tiempo de Escalado

  HYPERVISEUR   Sistema operativo que permite la ejecución de VM en una lámina de cálculo

  ITIL          Information Technology Infrastructure Library - Buenas prácticas para la gestión de los sistemas de información

  IAAS          Infrastructure as a Service

  MCO           Mantenimiento en Condición Operativa

  MOA           Dirección de Proyecto

  MOE           Ejecución de Proyecto

  OS            Sistema operativo

  PAQ           Plan de Aseguramiento de Calidad

  PAAS          Platform as a Service

  SDM           Service Delivery Manager -- Gerente de Entrega de Servicios

  RFC           Request For Change -- Solicitud de Cambio

  RGPD          Reglamento General de Protección de Datos (personales)

  RPO           Recovery Point Objective -- Freshness de los datos restaurados en caso de siniestro

  RTO           Recovery Time Objective -- Tiempo de restablecimiento del servicio en caso de siniestro

  SLA           Service Level Agreement -- Acuerdo de Nivel de Servicios

  UO            Unidad de Obra

  VABF          Validación de Aptitud al Buen Funcionamiento

  VABE          Validación de Aptitud a la Buena Explotabilidad

  VM            Virtual Machine (Máquina Virtual)

  VSR           Validación de Servicio Regular

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glosario

Las expresiones siguientes utilizadas en este documento se interpretarán de acuerdo con las definiciones que se les atribuyen a continuación:

  --------------------------------------------------------------------------------------------
  Expresión                       Definición
  -------------------------------- -----------------------------------------------------------
  "Secure Temple"                Se refiere al servicio IaaS calificado SecNumCloud, ofrecido por
                                   la sociedad Cloud Temple, tal como se define en la declaración
                                   disponible en el sitio de la ANSSI y proporcionada como anexo de
                                   la presente Convenio de servicio.

  Región                           Una "región" en el contexto del cloud computing se refiere a
                                   un conjunto geográficamente delimitado de zonas de
                                   disponibilidad en la nube, que proporciona servicios de red, cálculo
                                   y almacenamiento para optimizar la latencia, el rendimiento y la
                                   conformidad normativa local.

  Zona                             Una sección específica e independiente de la infraestructura de
  Disponibilidad(AZ)(Availability   computación en la nube, diseñada para garantizar la alta disponibilidad
  zone)                            y la resiliencia de los servicios mediante una distribución
                                   geográfica de los recursos.

Inquilino                           Una instancia aislada reservada para un usuario o grupo de
                                   usuarios, compartiendo una infraestructura común, manteniendo
                                   la independencia y la seguridad de los datos y las aplicaciones
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Expresión      Definición
  --------------- ---------------------------------------------------------
  Incidente        Un "incidente" se refiere a cualquier evento inesperado que
                  interrumpe el funcionamiento normal de un sistema o compromete
                  la seguridad de los datos.

  Problema         Un "problema" es una causa fundamental de uno o varios
                   incidentes, identificada o sospechada, que requiere un análisis
                   y resolución para prevenir su repetición.

  Cambio           Un "cambio" se refiere a cualquier adición, modificación o
                   eliminación que afecta al Servicio, habiendo sido autorizado,
                   planificado o respaldado.

  Cambio           Un "cambio estándar" es un cambio que forma parte de un
  estándar          procedimiento, cuyas modalidades de puesta en producción y
                   impactos (incluidos los financieros) son conocidos y aceptados
                   de antemano por las Partes. Entonces se integra al catálogo de
                   cambios estándar y, según los casos, puede tener una GTI y una GTR.

  Puesta en        acciones de administración de realización del cambio
  producción       cuando éste es aprobado (el cambio, en el sentido de ITIL,
                   se refiere solo a la gestión del cambio y no a su
                   realización/concreción).

  Solicitud de      solicitud de evolución que forma parte de un procedimiento, cuya
  servicio          realización: i) no modifica la CMDB, ii) el procedimiento operativo,
                   los costos y los riesgos son conocidos y aceptados de antemano y
                   no requieren modalidades de retroceso específicas iii) la realización
                   está sujeta a un acuerdo de nivel de servicio e incluida en la tarifa
                   del contrato cuando se realiza en horas laborables y juega

rs abiertos.

  Elemento de      Un "elemento de configuración" es un componente
  configuración   identificable del sistema de información, tal como
                  un software, un hardware o un documento, sujeto a gestión
                  dentro del marco de la gestión de servicios IT

  Servicio        Un "servicio" se refiere al servicio calificado SecNumCloud,
                  entregado al COMITENTE por el Prestador, tal como
                  descrito en la sección «Descripción del Servicio» de la
                  presente Convenio de servicio.

  Evento          Un "evento" es cualquier ocurrencia detectable o
                  identificable que puede tener importancia para la gestión
                  del Servicio.

  Siniestro       Un "siniestro" se refiere a un evento grave de origen
                  natural o humano, accidental o intencional,
                  causando pérdidas y daños importantes a la
                  Parte afectada.

  Convenio de     Este documento, establecido en el marco de un contrato
  servicio        específico o de las Condiciones Generales de Venta y
                  Uso (CGVU), y en conformidad con los requisitos del
                  Referencial SecNumCloud.

  Disponibilidad  Capacidad para garantizar la disponibilidad y el mantenimiento de las
                  prestaciones óptimas de un servicio, de acuerdo con los
                  criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA)

Supervisión     Supervisión de un Sistema de Información o un
                  Servicio, que implica la recopilación de diversos datos
                  tales como mediciones y alarmas. Esta actividad se limita a
                  la observación y seguimiento, sin intervenir directamente
                  en los elementos supervisados, una prerrogativa que
                  corresponde a las operaciones de Administración
  -------------------------------------------------------------------------

## 4. Objeto del Convenio de Servicios PaaS del Proveedor

Este Convenio de Servicios establece los términos y condiciones según los cuales el Proveedor se compromete a entregar al COMITENTE una infraestructura conforme a las especificaciones de la oferta "Plataforma como Servicio - PaaS", debidamente calificada SecNumCloud.

Objeto del Convenio de Servicios:

1. Especificar los requisitos de rendimiento esperados por el COMITENTE en términos de funcionalidad y fiabilidad de la infraestructura.
2. Establecer las obligaciones del Proveedor para satisfacer los niveles de servicio acordados.
3. Identificar las normativas regulatorias aplicables específicamente a la infraestructura propuesta.
4. Garantizar una uniformidad e integridad en la evaluación de la calidad de los servicios prestados.
5. Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores cuantitativos de rendimiento.

Se estipula que, en el supuesto de que al Proveedor se le retire su calificación SecNumCloud, este Contrato podrá ser rescindido de pleno derecho, sin incurrir en sanciones, por parte del COMITENTE. En tal caso, el Proveedor se compromete a informar al COMITENTE de dicha descalificación mediante el envío de una notificación oficial, a través de una carta certificada con solicitud de acuse de recibo.

Cabe señalar que cualquier modificación o ajuste a la calificación SecNumCloud no se interpretará como una revocación de la calificación inicial.

## 5. Evolución de la convención de servicio PaaS

Las modificaciones o adiciones realizadas a la presente convención de servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados al efecto. Estas propuestas de cambio serán examinadas dentro del comité estratégico, única instancia habilitada para determinar los aspectos que requieren una formalización escrita.

Se ha convenido que toda evolución de la convención, tras su validación, que altere las condiciones financieras inicialmente establecidas, requerirá la elaboración y firma de un adicional al contrato vigente.

Los factores que pueden inducir una revisión de esta convención incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS coordinada por el Prestador.
- Los ajustes realizados a los servicios desplegados por el Prestador.
- Las variaciones de los compromisos adquiridos y las sanciones aplicables.
- Las reconfiguraciones organizativas dentro del COMITENTE o del Prestador.
- La expansión o reducción del alcance de los servicios a los que el COMITENTE ha suscrito.

La gestión de versiones y revisiones de la convención está establecida en el preámbulo del documento para facilitar su seguimiento.

## 6. Auditoría

El Prestador se compromete a permitir al COMITENTE, o a cualquier auditor tercero que este hubiera designado, consultar todo el conjunto de documentos necesarios para la certificación del cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Prestador se compromete especialmente a poner a disposición del COMITENTE la lista de todos los terceros que pueden acceder a los datos y a informarle de cualquier cambio en los subcontratistas.**

Al aceptar el presente acuerdo de servicio, el COMITENTE otorga su autorización expresa a:

1. **La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI)** así como a la entidad calificada competente para realizar la verificación de la conformidad del Servicio y su Sistema de Información con los estándares definidos en el Referente SecNumCloud.
2. **Un proveedor de auditoría en seguridad de sistemas de información**, debidamente calificado y expresamente designado por el Prestador, para realizar auditorías de seguridad relativas al Servicio prestado por el Prestador.

## 7. Descripción del servicio

La oferta de servicios proporcionada por el Prestador se caracteriza por la puesta a disposición de las siguientes prestaciones, las cuales se alinean con el principio de responsabilidad compartida detallado en las normas establecidas por el Referencial SecNumCloud:

- La provisión de una plataforma de gestión de contenedores Red Hat OpenShift pilotada por el Prestador.

Se entiende que el Prestador pondrá su expertise en juego para realizar las Prestaciones según las mejores prácticas profesionales, conforme a sus Especificaciones y respetando las normas de su certificación ISO/IEC 27001 así como las directrices del Referencial SecNumCloud.

## 8. Implementación del servicio

Se indica que todas las operaciones y componentes físicos involucrados en la prestación del servicio calificado, cuyo objeto es esta convención, se encuentran en la Unión Europea. Esto incluye, entre otros, el soporte, la supervisión operativa y la supervisión de seguridad (SOC).

### 8.1. Descripción de los componentes técnicos

Los servicios PaaS (Platform as a Service) incluyen toda la gama de componentes y servicios necesarios para su óptimo funcionamiento en cumplimiento de la calificación SecNumCloud.

En este sentido, su rendimiento y fiabilidad están intrínsecamente vinculados a los componentes técnicos y a los servicios de **la infraestructura IaaS** del Proveedor, como se especifica en el documento [Convenio de Servicio IaaS](../iaas/sla_iaas.md) del Proveedor.

#### 8.1.1. Plataforma de servicio REDHAT OpenShift

El servicio abarca la puesta a disposición dentro de una región, en 3 zonas de disponibilidad,

#### 8.1.2. Infraestructura de software de gestión de la plataforma Red Hat OpenShift

El Prestador proporciona al COMITENTE la consola de administración y la API necesaria para la operación de sus entornos PaaS de Red Hat OpenShift. Se compromete también a mantenerlos en condiciones óptimas de operación y a garantizar su seguridad de forma continua.

Dentro del marco específico del servicio proporcionado, el Prestador pone a disposición del COMITENTE todas las interfaces y API de la plataforma Red Hat OpenShift dentro del tenant seleccionado. Corresponde al COMITENTE establecer los dispositivos de seguridad adecuados, como los cortafuegos (firewall), los cortafuegos aplicativos web (WAF) y otras medidas de protección, así como definir las reglas de filtrado asociadas para garantizar el acceso a su plataforma de acuerdo con su política de seguridad.

El Prestador alerta al COMITENTE sobre el hecho de que un uso anormal de su consola de administración, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que bloqueen el acceso a las APIs de comando o a ciertos servicios del Prestador. Es importante destacar que esta situación no constituye una inaccesibilidad del servicio, sino una acción de protección de la infraestructura del Prestador; por lo tanto, el COMITENTE no puede considerarla como una inaccesibilidad en sus cálculos.

Además, el Prestador especifica al COMITENTE que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el COMITENTE envía solicitudes idénticas con una frecuencia superior, su rechazo no debe interpretarse como una inaccesibilidad del servicio.

#### 8.1.3. Infraestructura de respaldo asociada

El Prestador pone a disposición del COMANDITARIO una plataforma de respaldo integrada, dedicada y gestionada, destinada a la protección de los datos de sus entornos RedHat Openshift. El Prestador garantiza el mantenimiento en condiciones operativas y de seguridad de esta plataforma integrada de respaldo. Independientemente del número de zonas de disponibilidad suscritas por el COMANDITARIO, el Prestador garantiza que la plataforma de respaldo del COMANDITARIO se encuentre fuera de la zona de disponibilidad de las cargas de trabajo respaldadas.

El servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS de los inquilinos SecNumCloud del COMANDITARIO. La elaboración y aplicación de una política de respaldo adecuada por parte del COMANDITARIO dependen de la suscripción a unidades de obra específicas. Por lo tanto, corresponde al COMANDITARIO asegurarse de la disponibilidad de los recursos técnicos necesarios ante el Prestador para implementar su política de respaldo o ajustarla en función de los medios disponibles.

El Prestador se compromete a notificar al COMANDITARIO en caso de restricciones de capacidad y a proporcionar asesoramiento para la optimización de los recursos. Las obligaciones del Prestador se limitarán a la implementación de los requisitos expresados por el COMANDITARIO en materia de política de respaldo, dentro del marco de los recursos suscritos.

#### 8.1.4. Implementación de soluciones de recuperación de actividad o continuidad de actividad

El Proveedor proporciona al CONTRATANTE el conjunto de soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos a través de diversas zonas de disponibilidad. Corresponde al CONTRATANTE la responsabilidad de gestionar eficazmente esta distribución de recursos, para la cual tiene la posibilidad de utilizar las herramientas del Proveedor disponibles para este uso.

En particular, las aplicaciones implementadas en la plataforma RedHat OpenShift deben soportar los mecanismos de redundancia propuestos por el Proveedor para poder beneficiarse de las soluciones de recuperación de actividad o continuidad de actividad asociadas.

## 9. Compromisos y niveles de servicio

El Prestador se compromete a garantizar una vigilancia continua del rendimiento y de la integridad segura de sus plataformas y servicios, velando por su funcionamiento óptimo.

La inhabilitad de un servicio, objeto de un indicador de rendimiento, es reconocida desde su identificación por el sistema de supervisión del Prestador, o como consecuencia de una notificación por parte de un usuario del COMANDANTE. El inicio de la inhabilitad se fija en el momento más temprano entre estos dos eventos, para garantizar un cálculo preciso y justo del tiempo de inhabilitad.

La finalización de la inhabilitad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Prestador, o por un retorno del usuario, asegurando así una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

### 9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift

El Prestador se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los acuerdos de nivel de servicio (Service Level Agreements, SLAs) se aplican siempre que el COMITENTE implemente sus sistemas a través de al menos dos de las zonas de disponibilidad presentes en la región correspondiente.

En ausencia de cumplimiento de estas condiciones por parte del COMITENTE, éste no podrá reclamar la aplicación de los SLAs correspondientes, los cuales están específicamente identificados por un asterisco (*). El acceso a los SLAs se realiza a través de la interfaz COMITENTE. **Las mediciones se entienden calculadas mensualmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** -- Disponibilidad de la plataforma RedHat OpenShift: tasa de disponibilidad garantizada del 99,9%, calculada en base 24h/24, 7j/7.

***Notas*** :

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Prestador se reserva el derecho de ajustar su configuración de enrutamiento de internet para limitar el impacto de este ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al COMITENTE es objetivo, el Prestador puede recurrir a la técnica de blackholing a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP objetivo en los proveedores, con el fin de proteger los recursos del COMITENTE así como los de otros COMITENTES y la infraestructura del Prestador. El Prestador anima fuertemente al COMITENTE a adoptar medidas similares, como el uso de software de cortafuegos de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*

- *El Prestador insiste en la necesidad de que el COMITENTE minimice las aperturas de flujos, evitando especialmente hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde todo Internet (subred 0.0.0.0/0), así como los protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 10. Modelo de responsabilidades compartidas aplicable

### 10.1. Responsabilidad y obligaciones del Prestador

El Prestador se compromete a poner a disposición del CLIENTE interfaces de usuario en francés y en inglés, facilitando así el acceso y la gestión de los servicios prestados. El CLIENTE, por su parte, se compromete a respetar las restricciones legales y reglamentarias vigentes relativas a los datos que confía al Prestador para su tratamiento.

En caso de transmisión de datos sujetos a requisitos legales específicos, el Prestador colaborará con el CLIENTE para identificar y implementar las medidas de seguridad necesarias, de conformidad con las obligaciones del Prestador y dentro del marco de la prestación de servicios.

El Prestador también se compromete a examinar y tener en cuenta los requisitos específicos relacionados con los sectores de actividad del CLIENTE, respetando las limitaciones de su responsabilidad, para garantizar un nivel de seguridad adecuado a las informaciones tratadas.

Si un proyecto es susceptible de afectar la seguridad del Servicio ofrecido o la disponibilidad de dicho Servicio o incluso generar una pérdida de funcionalidad, el Prestador se compromete a informar al CLIENTE a través de la consola o por correo electrónico al contacto del CLIENTE y en un plazo razonable sobre los impactos potenciales, las medidas correctivas previstas y los riesgos residuales que le conciernen, asegurando una transparencia total.

El Prestador se compromete a no utilizar los datos del CLIENTE provenientes de la producción para realizar pruebas, a menos que obtenga previamente la autorización explícita del CLIENTE, en cuyo caso el Prestador se compromete a anonimizar estos datos y a garantizar su confidencialidad durante su anonimización.

En caso de cambio de subcontratista para el alojamiento, el Prestador informará al CLIENTE con antelación, asegurándose de que esta transición no afecte negativamente al servicio prestado.

Bajo solicitud del CLIENTE, el Prestador proporcionará acceso a su reglamento interno, a su código de ética, a las sanciones aplicables en caso de incumplimiento de su política de seguridad, a los eventos que le conciernen, a los procedimientos relativos al servicio y a los requisitos específicos de seguridad.

El Prestador se compromete a informar al CLIENTE sobre cualquier cambio futuro en elementos de software bajo la responsabilidad de Cloud Temple siempre que no se pueda garantizar la compatibilidad completa.

### 10.2. Limitación de responsabilidad del Prestador

La estructura de responsabilidad compartida reduce eficazmente el alcance de la intervención del Prestador en los aspectos relacionados con la provisión de una plataforma RedHat OpenShift funcional, incluyendo:

- La gestión de la infraestructura IaaS que respalda la plataforma RedHat OpenShift y su provisión,
- La gestión de los sistemas necesarios para el correcto funcionamiento de la plataforma,
- El mantenimiento en condiciones de seguridad,
- La actualización de la plataforma RedHat OpenShift,
- La copia de seguridad de los datos de configuración esenciales de esta plataforma, a excepción de los datos y aplicaciones del COMITENTE que corresponden a su responsabilidad.

Excluye especialmente, pero sin limitarse a:

- La actualización de los sistemas operativos y software instalado por el COMITENTE en sus entornos OpenShift en sus espacios locales,
- La seguridad de los programas, software y aplicaciones instalados dentro del entorno OpenShift por el COMITENTE,
- La copia de seguridad de los datos a nivel aplicativo,
- La configuración de las políticas de copia de seguridad.

### 10.3. Limitación de acceso

Dentro del marco de este convenio de servicio, el Prestador está formalmente prohibido de acceder a los inquilinos pertenecientes al COMANDITARIO sin autorización previa. Corresponde al COMANDITARIO proporcionar los accesos necesarios al personal del Prestador, según las necesidades específicas del alojamiento y, en su caso, servicios profesionales de soporte, si esta opción fue elegida por el COMANDITARIO.

El COMANDITARIO reconoce que estos accesos se otorgan exclusivamente para los fines relacionados con la prestación de los servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros involucrados en la prestación de servicios del Prestador está estrictamente prohibido. En el caso de que una exigencia técnica específica requiriera dicho acceso, éste solo podría establecerse tras haber notificado claramente al COMANDITARIO, proporcionado una justificación detallada y obtenido su acuerdo por escrito.

Esta medida garantiza el control y la seguridad de los datos del COMANDITARIO, asegurándose de que toda excepción a la regla esté debidamente autorizada y documentada.

## 11. Eliminación de datos al final del contrato

Al final del contrato, ya sea que expire o sea rescindido por cualquier motivo, el Prestador se compromete a realizar la eliminación segura de toda la información del Mandante, incluyendo los datos técnicos. El Prestador se asegurará de comunicar al Mandante un aviso formal, respetando un plazo de veintiún (21) días calendario. La información del Mandante se eliminará entonces en un plazo máximo de treinta (30) días posteriores a esta notificación.

Para acreditar esta eliminación, el Prestador entregará al Mandante un certificado que confirme la eliminación de los datos.

## 12. Ley aplicable

La ley aplicable para el presente acuerdo de servicios es la ley francesa.

En caso de que el Prestador recurre a una sociedad tercera, incluido un subcontratista, para prestar los servicios al COMANDANTE, cuya sede social, administración central o establecimiento principal se encuentre en un Estado no miembro de la Unión Europea, o que sea propiedad o esté bajo el control de una sociedad tercera radicada fuera de la Unión Europea, el Prestador se compromete a garantizar que dicha sociedad tercera no tendrá acceso a los datos tratados por el servicio del Prestador.

Es importante señalar que los datos en cuestión incluyen aquellos confiados al Prestador por el COMANDANTE, así como todos los datos técnicos, como las identidades de los beneficiarios y administradores de la infraestructura técnica, los datos manipulados por las redes, los registros de la infraestructura técnica, el directorio, los certificados, la configuración de accesos, etc., que contienen información sobre el COMANDANTE.

Para mayor claridad, el concepto de control se define de acuerdo con el inciso II del artículo L233-3 del Código de Comercio.