---
title: Convenio de Servicio SecNumCloud PaaS
---

**Tabla de contenido**

-   [1. Marco](#X09af6387e1d2792b8edc09fc15abd136a837db5)
-   [2. Acrónimos](#Xc79d173393c04b42ba8cdf223cca3c0202f4dee)
-   [3. Glosario](#X0c9d1d82fdc5fcc3d01a320dd2dd3715a6900b4)
-   [4. Objeto del convenio de servicio PaaS del
    Proveedor](#X23ec3c3767539f9e69acc7cbf5af8aa8c1b6ad7)
-   [5. Evolución del convenio de servicio
    PaaS](#Xa7161677dcf9a35d02c20807040326b39d55881)
-   [6. Auditoría](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Descripción del
    servicio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
-   [8. Implementación del
    servicio](#Xc98fb6da582d483e300add6a80df6e3eb76498a)
    -   [8.1. Descripción de los componentes
        técnicos](#Xa61c340e3fdf14082cef411d3a913fc4bdeeb4c)
        -   [8.1.1. Plataforma de servicio REDHAT
            OpenShift](#Xf81d22ed0abca8eab163c160107fa228901d82c)
        -   [8.1.2. Infraestructura de software de gestión de la plataforma
            Redhat Openshift](#Xf11ec2e6a431ae11852fe3129245b4d0fd0747b)
        -   [8.1.3. Infraestructura de respaldo
            asociada](#X77b1112fa2c2a53eb0cf09b416962164b77b437)
        -   [8.1.4. Implementación de soluciones de recuperación de
            actividad o continuidad de
            actividad](#Xae1394210f1c9bee4293a93160d2d11cc70ebdd)
-   [9. Compromisos y niveles de
    servicio](#Xad2b4ae071a52a99b502c4e84cbba3f15ac78f8)
    -   [9.1. Compromisos de disponibilidad de la plataforma RedHat
        OpenShift](#X273341276df81e9f6fad2000ac84216560e59fa)
-   [10. Modelo de responsabilidades compartidas
    aplicable](#Xa90d4e180ca2ae1d92e4e4cf00f20aca5061eac)
    -   [10.1. Responsabilidad y Obligaciones del
        Proveedor](#Xe5cf73850ea2189ab60f41560bf52e97d3019f9)
    -   [10.2. Limitación de responsabilidad del
        Proveedor](#X8856c8f606130116944398b24484722823c023c)
    -   [10.3. Limitación de
        acceso](#X902763258f1242326933ce46892d3f549e73e30)
-   [11. Eliminación de datos al final del
    contrato](#Xbe642a80027ce4ad88cc932e98b8661c2a0d3a6)
-   [12. Ley aplicable](#Xa219184d62eb90dfeec612801fd05c5d816c331)

## 1. Marco

  --------------------- -------------------------------------------------
  Referencia           CT.AM.JUR.ANX.PAAS 2.1

  Fecha                21 enero 2025
  --------------------- -------------------------------------------------

## 2. Acrónimos

  ------------------------------------------------------------------------------
  Acrónimo       Descripción
  ------------- ----------------------------------------------------------------
  CAB            Change Advisory Board -- Comité consultivo sobre cambios

  CMDB           Configuration Management Database -- Base de datos de gestión
                 de configuraciones

  COPIL          Comité de pilotaje

  COSTRAT        Comité estratégico

  DB             Database (base de datos)

  DRP            Disaster Recovery Plan (Plan de recuperación de
                 actividad)

  GTI            Garantía de Tiempo de Intervención

  GTR            Garantía de Tiempo de Resolución

  GTE            Garantía de Tiempo de Escalada

  HYPERVISEUR    Sistema operativo que permite la ejecución de VM en una 
                 lámina de cálculo

  ITIL           Information Technology Infrastructure Library - Buenas prácticas
                 para la gestión de sistemas de información

  IAAS           Infrastructure as a Service

  MCO            Mantenimiento en condiciones operativas

  MOA            Maestría de Obra

  MOE            Maestría de Ejecución

  OS             Operating system

  PAQ            Plan de Aseguramiento de Calidad

  PAAS           Platform as a Service

  SDM            Service Delivery Manager

  RFC            Request For Change -- Solicitud de cambio

  RGPD           Reglamento General de Protección de Datos (personales)

  RPO            Recovery Point Objective -- Frescura de los datos restaurados en
                 caso de siniestro

  RTO            Recovery Time Objective -- Plazo de restablecimiento del servicio en
                 caso de siniestro

  SLA            Service Level Agreement -- Acuerdo sobre los niveles de servicio

  UO             Unidad de Obra

  VABF           Validación de Aptitud para el Buen Funcionamiento

  VABE           Validación de Aptitud para la Buena Explotabilidad

  VM             Virtual Machine (Máquina virtual)

  VSR            Validación de Servicio Regular

  SNC            SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glosario

Las expresiones a continuación empleadas en el presente documento serán
interpretadas conforme a las definiciones que se les atribuyen
a continuación:

  --------------------------------------------------------------------------------------------
  Expresión                      Definición
  ----------------------------- -----------------------------------------------------------
  \"Secure Temple\"              Designa el servicio IaaS calificado SecNumCloud, propuesto por
                                 la empresa Cloud Temple, tal como se define en la certificación 
                                 consultable en el sitio de la ANSSI y proporcionada en el anexo del
                                 presente Convenio de servicio.

  Región                         Una \"región\" en el contexto del cloud computing designa
                                 un conjunto geográficamente delimitado de zonas de
                                 disponibilidad cloud, que proveen servicios de red, de
                                 cómputo y de almacenamiento para optimizar la latencia, la
                                 performance y la conformidad regulatoria local.

  Zona                           Una sección específica e aislada de la infraestructura de
  Disponibilidad(AZ)(Availability  cloud computing, diseñada para asegurar la alta disponibilidad
  zone)                            y la resiliencia de servicios mediante una distribución
                                 geográfica de los recursos.

  Tenant                         Una instancia aislada reservada a un usuario o grupo
                                 de usuarios, compartiendo una infraestructura común mientras
                                 mantiene la independencia y la seguridad de los datos y
                                 las aplicaciones.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Expresión       Definición
  --------------- ---------------------------------------------------------
  Incidente       Un \"incidente\" designa cualquier evento imprevisto que
                  perturba el funcionamiento normal de un sistema o
                  compromete la seguridad de los datos.

  Problema        Un \"problema\" es una causa fundamental de uno o
                  varios incidentes, identificada o sospechada, que requiere
                  un análisis y resolución para prevenir su recurrencia.

  Cambio          Un \"cambio\" designa cualquier adición, modificación o
                  eliminación que impacta el Servicio, habiendo sido autorizado,
                  planificado o gestionado.

  Cambio          Un \"cambio estándar\" es un cambio sujeto a un procedimiento,
  estándar        cuyas modalidades de puesta en producción y los impactos (incluyendo financieros) son
                  conocidos y aceptados de antemano por las Partes. Entonces se
                  integra en el catálogo de cambios estándares, y puede en
                  algunos casos tener una GTI y una GTR.

  Puesta en       acción(es) de administración para la realización del cambio
  producción      una vez aprobado (el cambio, en el sentido ITIL,
                  sólo cubre la gestión del cambio y no su realización/concreción).

  Solicitud de    solicitud de evolución sujeta a un procedimiento, cuya
  servicio        realización: i) no modifica la CMDB, ii) el modo
                  operativo, los costos y los riesgos son conocidos y
                  aceptados de antemano y no requieren de modalidades de
                  retroceso específicas iii) la realización está
                  sujeta a un acuerdo de nivel de servicio y está incluida en
                  la tarifa del contrato cuando se realice en 
                  horas laborables y días laborables.

  Elemento de     Un \"elemento de configuración\" es un componente
  configuración   identificable del sistema de información, como 
                  un software, hardware o documento, sujeto a
                  gestión en el marco de la gestión de servicios IT.

  Servicio        Un \"servicio\" designa el servicio calificado SecNumCloud,
                  entregado al CONTRATANTE por el Proveedor, tal como
                  se describe en la sección « Descripción del Servicio » del
                  presente Convenio de servicio.

  Evento          Un \"evento\" es cualquier ocurrencia detectable o
                  identificable que pueda tener importancia para la gestión
                  del Servicio.

  Siniestro       Un « siniestro » designa un suceso grave de origen
                  natural o humano, accidental o intencional,
                  ocasionando pérdidas y daños importantes a la
                  Parte afectada.

  Convenio de     Este documento, establecido en el marco de un contrato
  servicio        específico o las Condiciones Generales de Venta y
                  de Uso (CGVU), y en conformidad con los
                  requisitos del Referencial SecNumCloud.

  Disponibilidad  Capacidad para asegurar la disponibilidad y el mantenimiento de
                  las performance óptimas de un servicio, en concordancia con los
                  criterios y compromisos definidos en los Acuerdos de

                  Nivel de Servicio (SLA)

  Supervisión     Vigilancia de un Sistema de Información o de un
                  Servicio, que implica la recopilación de diversos datos
                  tales como medidas y alarmas. Esta actividad se limita a
                  la observación y el seguimiento, sin intervenir directamente
                  en los elementos supervisados, una prerrogativa que
                  pertenece a las operaciones de Administración.
  -------------------------------------------------------------------------

## 4. Objeto de la convención de servicio PaaS del Proveedor

La presente Convención de Servicios establece los términos y condiciones
según los cuales el Proveedor se compromete a entregar al COMITENTE una
infraestructura conforme a las especificaciones de la oferta «Platform as a
Service -- PaaS», debidamente calificada SecNumCloud.

Objeto de la Convención de Servicios:

1.  Precisar los requisitos de rendimiento esperados por el COMITENTE
    en términos de funcionalidad y fiabilidad de la infraestructura.
2.  Enunciar las obligaciones del Proveedor para cumplir con los
    niveles de servicio acordados.
3.  Identificar las normas reglamentarias aplicables específicamente a
    la infraestructura propuesta.
4.  Asegurar una uniformidad e integridad en la evaluación de la
    calidad de los servicios prestados.
5.  Garantizar la excelencia de los servicios proporcionados, evaluada
    mediante indicadores de rendimiento cuantitativos.

Se estipula que, en la hipótesis de que el Proveedor se vea
privado de su calificación SecNumCloud, el presente Contrato podrá ser
rescindido de pleno derecho, sin incurrir en penalizaciones, por el
COMITENTE. En tal eventualidad, el Proveedor se compromete a
informar al COMITENTE de esta descalificación mediante el envío de una
notificación oficial, por medio de una carta certificada con aviso
de recepción.

Cabe señalar que una modificación o ajuste de la
calificación SecNumCloud no se interpretará como una revocación de la
calificación inicial.

## 5. Evolución de la convención de servicio PaaS

Las modificaciones o adiciones a la presente convención de servicio
derivan exclusivamente de las solicitudes formuladas por los órganos de
gobernanza designados para tal fin. Estas propuestas de cambio serán
examinadas en el comité estratégico, la única instancia habilitada para
determinar los aspectos que requieran una formalización escrita.

Se acuerda que cualquier evolución de la convención, tras su validación,
que altere las condiciones financieras inicialmente establecidas, requerirá
la redacción y firma de una enmienda al contrato en vigor.

Los factores que pueden inducir una revisión de esta convención incluyen,
sin limitarse a:

-   La adaptación de la plataforma PaaS orquestada por el Proveedor.
-   Los ajustes realizados a los servicios desplegados por el Proveedor.
-   Las variaciones de los compromisos adquiridos y las sanciones aplicables.
-   Las reconfiguraciones organizativas dentro del COMITENTE o del Proveedor.
-   La expansión o reducción del alcance de los servicios
    a los que el COMITENTE se ha suscrito.

La gestión de las versiones y revisiones de la convención se consigna
en el preámbulo del documento para facilitar su seguimiento.

## 6. Auditoría

El Proveedor se compromete a permitir al COMITENTE, o a cualquier
auditor tercero que este último haya designado, consultar todos los documentos
necesarios para la validación del cumplimiento íntegro de las
obligaciones relacionadas con la conformidad con las disposiciones del artículo 28
del Reglamento General de Protección de Datos (RGPD), facilitando
así la realización de auditorías.

**El Proveedor se compromete específicamente a poner a disposición del
COMITENTE la lista de todos los terceros que puedan acceder a los
datos e informarle sobre cualquier cambio de subcontratistas.**

Mediante la aceptación de la presente convención de servicio, el
COMITENTE otorga su autorización explícita a:

1.  **La Agencia Nacional de Seguridad de los Sistemas de Información
    (ANSSI)** así como a la entidad de calificación competente para
    emprender la verificación de la conformidad del Servicio y de su
    Sistema de Información con los estándares definidos por el Referencial
    SecNumCloud.
2.  **Un proveedor de auditoría en seguridad de los sistemas de información**,
    debidamente cualificado y expresamente designado por el Proveedor, para
    llevar a cabo auditorías de seguridad sobre el Servicio prestado
    por el Proveedor.

## 7. Descripción del servicio

La oferta de servicios propuesta por el Proveedor se caracteriza por la
provisión de las siguientes prestaciones, que se alinean con el principio de
responsabilidad compartida detallado en las normas establecidas
por el referencial SecNumCloud:

-   La provisión de una plataforma de gestión de contenedores Redhat
    Openshift gestionada por el Proveedor.

Se entiende que el Proveedor empleará su experiencia para realizar
las Prestaciones según las mejores prácticas profesionales,
conforme a sus Especificaciones y respetando las normas de su
certificación ISO/IEC 27001 así como las directrices del Referencial
SecNumCloud.

## 8. Implementación del servicio

Se especifica que todas las operaciones y todos los componentes
físicos involucrados en la provisión del servicio calificado, del cual trata la
presente convención, están ubicados en la Unión Europea.
Esto incluye, en particular, el soporte, la supervisión operativa y
la supervisión de seguridad (SOC).

### 8.1. Descripción de los componentes técnicos

Los servicios PaaS (Platform as a Service) engloban la
totalidad de los componentes y servicios necesarios para su funcionamiento
óptimo en conformidad con la calificación SecNumCloud.

En este sentido, su rendimiento y fiabilidad están intrínsecamente ligados
a los componentes técnicos y a los servicios de **la infraestructura IaaS**
del Proveedor, como se especifica en el documento [Convención de Servicio
IaaS](../Working%20in%20progress%20-%20not%20use/iaas/sla_iaas.md) del
Proveedor.

#### 8.1.1. Plataforma de servicio REDHAT OpenShift

El servicio incluye la provisión dentro de una región, en 3
zonas de disponibilidad,

#### 8.1.2. Infraestructura de software de gestión de la plataforma Redhat Openshift

El Proveedor proporciona al COMITENTE la consola de administración y
la API necesarias para la operación de sus entornos PaaS RedHat
OpenShift. También se compromete a mantenerlas en condiciones
óptimas de operación y a asegurar su seguridad de manera continua.

En el contexto específico del servicio prestado, el Proveedor pone a la
disposición del COMITENTE todas las interfaces y APIs de la
plataforma RedHat OpenShift dentro del tenant seleccionado. Corresponde al
COMITENTE establecer los dispositivos de seguridad apropiados, tales
como cortafuegos (firewall), cortafuegos de aplicaciones web (WAF) y
otras medidas de protección, así como definir las reglas de filtrado
asociadas para asegurar el acceso a su plataforma de acuerdo con su
política de seguridad.

El Proveedor alerta al COMITENTE sobre el hecho de que un uso
anormal de su consola de administración, especialmente en caso de
sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de
seguridad automáticas que resulten en el bloqueo del acceso a las APIs de
comando o a ciertos servicios del Proveedor. Cabe destacar que esta
situación no constituye una indisponibilidad del servicio,
sino una acción de protección de la infraestructura del Proveedor; por lo
tanto, el COMITENTE no puede considerarla como una indisponibilidad
en sus cálculos.

Además, el Proveedor informa al COMITENTE que las solicitudes
idénticas (duplicadas) enviadas a sus APIs están limitadas a una por
segundo (Throttling). Si el COMITENTE envía solicitudes
idénticas a una frecuencia superior, su rechazo no debe
interpretarse como una indisponibilidad del servicio.

#### 8.1.3. Infraestructura de respaldo asociada

El Proveedor pone a disposición del COMITENTE una plataforma
de respaldo integrada, dedicada y gestionada, destinada a la protección de los
datos de sus entornos RedHat Openshift. El Proveedor asegura el
mantenimiento en condiciones operativas y en condiciones de seguridad de
esta plataforma integrada de respaldo. Independientemente del número de
zonas de disponibilidad suscritas por el COMITENTE, el Proveedor
garantiza que la plataforma de respaldo del COMITENTE se ubicará
fuera de la zona de disponibilidad de las cargas de trabajo respaldadas.

La prestación de respaldo se limita a la copia de seguridad de las máquinas
virtuales y las configuraciones de topología del entorno IaaS de los
tenants SecNumCloud del COMITENTE. La elaboración y aplicación de una
política de respaldo adecuada por el COMITENTE dependen de la
suscripción a unidades de trabajo específicas. Por lo tanto, corresponde
al COMITENTE asegurarse de la disponibilidad de los recursos técnicos
necesarios del Proveedor para implementar su política de respaldo o
ajustarla según los medios disponibles.

El Proveedor se compromete a notificar al COMITENTE en caso de
restricciones de capacidad y a proporcionar asistencia y asesoría para
la optimización de los recursos. Las obligaciones del Proveedor se
limitarán a la implementación de los requisitos expresados por el
COMITENTE en cuanto a su política de respaldo, en el marco de los
recursos suscritos.

#### 8.1.4. Implementación de soluciones de recuperación de actividad o de continuidad de actividad

El Proveedor proporciona al COMITENTE todas las soluciones
técnicas necesarias para garantizar una distribución óptima de sus
recursos a través de diversas zonas de disponibilidad. Corresponde al
COMITENTE la responsabilidad de gestionar eficazmente dicha distribución
de recursos, para lo cual tiene la posibilidad de explotar las herramientas
du Prestataire disponibles à cet usage.

En particulier, les applications déployées sur la plateforme RedHat
OpenShift doivent prendre en charge les mécanismes de redondance
proposés par le Prestataire afin de pouvoir bénéficier des solutions de
reprise d\'activité ou de continuité d\'activité associées.

## 9. Compromisos y niveles de servicios

El Prestataire se compromete a garantizar una vigilancia continua del
rendimiento y de la integridad segura de sus plataformas y
servicios, velando por su funcionamiento óptimo.

La indisponibilidad de un servicio, objeto de un indicador de
rendimiento, es reconocida desde su identificación por el sistema de
supervisión del Prestataire, o tras una notificación por un
usuario del COMITENTE. El inicio de la indisponibilidad se fija en el
momento más temprano entre estos dos eventos, con el fin de garantizar un
conteo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad está oficialmente marcado por la
restauración completa del servicio, confirmada ya sea por las herramientas de
supervisión del Prestataire, ya sea por un retorno de usuario, asegurando
así una reanudación efectiva de las operaciones y una medición fiel de la
duración de la interrupción.

### 9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift

El Prestataire se compromete a mantener un nivel de disponibilidad y de
rendimiento conforme a los estándares definidos para cada período
especificado. Los compromisos de nivel de servicio (Service Level
Agreements, SLAs) se aplican siempre que el COMITENTE
implemente sus sistemas a través de al menos dos de las zonas de
disponibilidad presentes en la región relevante.

En caso de que el COMITENTE no cumpla con estas condiciones,
éste no tendrá derecho a reclamar la aplicación de los
SLAs correspondientes, los cuales están específicamente identificados por un
asterisco (\*). El acceso a los SLAs se realiza a través de la interfaz
COMITENTE. **Las medidas se consideran calculadas mensualmente**:

-   \*\*SLA 1 (\*) : IC-PAAS_SNC-01\*\* -- Disponibilidad de la
    plataforma RedHat OpenShift : tasa de disponibilidad garantizada de
    99,9%, calculada sobre la base 24h/24, 7d/7.

***Notas*** :

-   *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el
    Prestataire se reserva el derecho de ajustar su configuración de
    enrutamiento de internet para limitar el impacto de este ataque y
    salvaguardar su infraestructura. En particular, si una dirección IP
    perteneciente al COMITENTE es atacada, el Prestataire puede
    recurrir a la técnica de blackholing a través de la comunidad BGP para
    bloquear todo el tráfico hacia la dirección IP objetivo en los proveedores
    más cercanos, con el fin de proteger los recursos del
    COMITENTE así como los de otros COMITENTES y los de
    la infraestructura del Prestataire. El Prestataire recomienda encarecidamente
    al COMITENTE adoptar medidas similares, como la
    utilización de software de cortafuegos de aplicaciones web
    disponibles en el mercado, y configurar cuidadosamente sus grupos
    de seguridad a través de la API de comando.*

-   *El Prestataire insiste en la necesidad de que el COMITENTE
    minimice las aperturas de flujo, evitando especialmente hacer
    accesibles los puertos de administración **SSH** (puerto TCP 22) y
    **RDP** (puerto TCP 3389) desde toda la Internet (subred
    0.0.0.0/0), así como los protocolos internos como **SMB** (puerto
    TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 10. Modelo de responsabilidades compartidas aplicable

### 10.1. Responsabilidad y Obligaciones del Prestataire

El Prestataire se compromete a poner a disposición del COMITENTE interfaces de usuario en francés e inglés, facilitando así
el acceso y la gestión de los servicios proporcionados. El COMITENTE,
por su parte, se compromete a cumplir con las restricciones legales y reglamentarias en
vigor relativas a los datos que confía al Prestataire para
su procesamiento.

En caso de transmisión de datos sujetos a requisitos legales
específicos, el Prestataire colaborará con el COMITENTE para
identificar e implementar las medidas de seguridad necesarias,
conforme a las obligaciones del Prestataire y en el marco de la
prestación de servicios.

El Prestataire también se compromete a revisar y tomar en consideración las necesidades específicas relacionadas con los sectores
de actividad del COMITENTE, respetando las limitaciones de su
responsabilidad, para garantizar un nivel de seguridad adecuado para la
información tratada.

Si un proyecto es susceptible de impactar la seguridad del Servicio ofrecido
o la disponibilidad de dicho Servicio o aún provocar una pérdida de
funcionalidad, el Prestataire se compromete a informar a través de la consola
o por correo electrónico a contacto del COMITENTE y en un plazo razonable
al COMITENTE sobre los impactos potenciales, las medidas correctivas
consideradas y los riesgos residuales que le conciernen, asegurando una
transparencia total.

El Prestataire se compromete a no utilizar los datos del COMITENTE
obtenidos de la producción para realizar pruebas, a excepción de obtener
previamente la autorización explícita del COMITENTE, en cuyo caso el
Prestataire se compromete a anonimizar estos datos y garantizar su
confidencialidad durante su anonimización.

En caso de cambio de subcontratante para el alojamiento, el
Prestataire informará al COMITENTE con antelación, asegurando que esta
transición no afecte negativamente el servicio proporcionado.

A petición del COMITENTE, el Prestataire proporcionará acceso a su
reglamento interno, a su carta de ética, a las sanciones aplicables
en caso de incumplimiento de su política de seguridad, a los eventos
concernientes, a los procedimientos relativos al servicio y a los
requisitos específicos de seguridad.

El Prestataire se compromete a informar al COMITENTE de cualquier
cambio futuro en elementos de software bajo la responsabilidad de Cloud
Temple cuando la compatibilidad completa no pueda ser garantizada.

### 10.2. Limitación de responsabilidad del Prestataire

La estructura de responsabilidad compartida reduce efectivamente la
extensión de la intervención del Prestataire a los aspectos relacionados
con la provisión de una plataforma RedHat OpenShift funcional, incluyendo:

-   La gestión de la infraestructura IaaS que soporta la
    plataforma RedHat OpenShift y su aprovisionamiento,
-   La gestión de los sistemas necesarios para el buen funcionamiento de la
    plataforma,
-   El mantenimiento en condiciones de seguridad,
-   La actualización de la plataforma RedHat OpenShift,
-   La copia de seguridad de los datos de configuración esenciales de esta
    plataforma, a excepción de los datos y aplicaciones del
    COMITENTE que son su responsabilidad.

Queda excluido, entre otros, pero sin limitarse a:

-   La actualización de los sistemas operativos y del software
    instalado por el COMITENTE en sus entornos OpenShift en
    sus espacios arrendados,
-   La seguridad de los programas, software y aplicaciones instalados en
    el entorno OpenShift por el COMITENTE,
-   La copia de seguridad de los datos a nivel aplicativo,
-   La configuración de las políticas de copia de seguridad.

### 10.3. Limitación de acceso

En el marco de este convenio de servicio, el Prestataire tiene
prohibido formalmente acceder a los tenants pertenecientes al
COMITENTE sin autorización previa. Es responsabilidad del
COMITENTE proporcionar los accesos necesarios al personal del
Prestataire, según las necesidades específicas del alojamiento y, en su
caso, de los servicios profesionales de soporte, si esta opción ha sido
elegida por el COMITENTE.

El COMITENTE reconoce que estos accesos se otorgan exclusivamente
para las necesidades relacionadas con la prestación de servicios
convenidos, garantizando así una gestión segura y conforme a los términos
del acuerdo.

El acceso remoto por terceros implicados en la prestación de servicio
del Prestataire está estrictamente prohibido. En caso de que un
requisito técnico específico requiera tal acceso, éste sólo podrá ser
establecido después de haber notificado claramente al
COMITENTE, proporcionado una justificación detallada y obtenido su
acuerdo por escrito.

Esta medida garantiza el control y la seguridad de los datos del
COMITENTE, asegurando que cualquier excepción a la regla esté debidamente
autorizada y documentada.

## 11. Eliminación de datos al final del contrato

Al término del contrato, ya sea que llegue a su vencimiento o que sea
rescindido por cualquier motivo, el Prestataire se compromete a proceder a la
eliminación segura de la totalidad de los datos del COMITENTE, incluyendo
los datos técnicos. El Prestataire se encargará de
comunicar al COMITENTE con un aviso formal, respetando un plazo de
veintiún (21) días calendario. Los datos del COMITENTE serán
eliminados en un plazo máximo de treinta (30) días tras
esta notificación.

Para atestiguar esta eliminación, el Prestataire entregará al
COMITENTE un certificado que confirme la eliminación de los datos.

## 12. Ley aplicable

La ley aplicable para el presente convenio de servicio es la ley
francesa.

En caso de recurso por parte del Prestataire, en el marco de los servicios proporcionados
al COMITENTE, a una empresa tercera, incluidos subcontratistas, cuyo
domicilio social, administración central o el principal
establecimiento esté situado en un estado no miembro de la Unión Europea,
o que sea propiedad o esté bajo el control de una empresa tercera
domiciliada fuera de la Unión Europea, el Prestataire se compromete a
garantizar que dicha empresa tercera no tendrá acceso a los datos
tratados por el servicio del Prestataire.

Cabe destacar que los datos en cuestión incluyen aquellos confiados al
Prestataire por el COMITENTE, así como todos los datos técnicos
como las identidades de los beneficiarios y de los
administradores de la infraestructura técnica, los datos manipulados
por las redes, los registros de la infraestructura técnica,
el directorio, los certificados, la configuración de los accesos, etc.,
que contienen información sobre el COMITENTE.

Para precisión, la noción de control se define conforme al II del
artículo L233-3 del código de comercio.