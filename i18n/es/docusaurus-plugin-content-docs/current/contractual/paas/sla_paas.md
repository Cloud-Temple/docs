---
title: Acuerdo de Servicio SecNumCloud PaaS
---

**Índice**

- [1. Marco](#X09af6387e1d2792b8edc09fc15abd136a837db5)
- [2. Acrónimos](#Xc79d173393c04b42ba8cdf223cca3c0202f4dee)
- [3. Glosario](#X0c9d1d82fdc5fcc3d01a320dd2dd3715a6900b4)
- [4. Objeto del acuerdo de servicio PaaS del Proveedor](#X23ec3c3767539f9e69acc7cbf5af8aa8c1b6ad7)
- [5. Evolución del acuerdo de servicio PaaS](#Xa7161677dcf9a35d02c20807040326b39d55881)
- [6. Auditoría](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Descripción del servicio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
- [8. Implementación del servicio](#Xc98fb6da582d483e300add6a80df6e3eb76498a)
  - [8.1. Descripción de los componentes técnicos](#Xa61c340e3fdf14082cef411d3a913fc4bdeeb4c)
    - [8.1.1. Plataforma de servicio REDHAT OpenShift](#Xf81d22ed0abca8eab163c160107fa228901d82c)
    - [8.1.2. Infraestructura de software para la gestión de la plataforma Redhat Openshift](#Xf11ec2e6a431ae11852fe3129245b4d0fd0747b)
    - [8.1.3. Infraestructura de respaldo asociada](#X77b1112fa2c2a53eb0cf09b416962164b77b437)
    - [8.1.4. Implementación de soluciones de recuperación de actividad o de continuidad de actividad](#Xae1394210f1c9bee4293a93160d2d11cc70ebdd)
- [9. Compromisos y niveles de servicios](#Xad2b4ae071a52a99b502c4e84cbba3f15ac78f8)
  - [9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift](#X273341276df81e9f6fad2000ac84216560e59fa)
- [10. Modelo de responsabilidades compartidas aplicable](#Xa90d4e180ca2ae1d92e4e4cf00f20aca5061eac)
  - [10.1. Responsabilidad y Obligaciones del Proveedor](#Xe5cf73850ea2189ab60f41560bf52e97d3019f9)
  - [10.2. Limitación de responsabilidad del Proveedor](#X8856c8f606130116944398b24484722823c023c)
  - [10.3. Limitación de acceso](#X902763258f1242326933ce46892d3f549e73e30)
- [11. Borrado de datos al final del contrato](#Xbe642a80027ce4ad88cc932e98b8661c2a0d3a6)
- [12. Derecho aplicable](#Xa219184d62eb90dfeec612801fd05c5d816c331)

## 1. Marco

  --------------------- -------------------------------------------------
  Referencia             CT.AM.JUR.ANX.PAAS 2.1

  Fecha                  21 de enero de 2025
  --------------------- -------------------------------------------------

## 2. Acrónimos

  ------------------------------------------------------------------------------
  Acrónimo      Descripción
  ------------- ----------------------------------------------------------------
  CAB           Change Advisory Board -- Comité consultivo sobre los cambios

  CMDB          Configuration Management Database -- Base de datos de gestión de configuraciones

  COPIL         Comité de pilotaje

  COSTRAT       Comité estratégico

  DB            Database (base de datos)

  DRP           Disaster Recovery Plan (Plan de recuperación de actividad)

  GTI           Garantía de Tiempo de Intervención

  GTR           Garantía de Tiempo de Resolución

  GTE           Garantía de Tiempo de Escalada

  HYPERVISEUR   Sistema operativo que permite la ejecución de VMs en una cuchilla de cálculo

  ITIL          Information Technology Infrastructure Library - Buenas prácticas para la gestión de los sistemas de información

  IAAS          Infrastructure as a Service

  MCO           Mantenimiento en condición operativa

  MOA           Dirección de Obra

  MOE           Dirección de Ejecución

  OS            Operating system (sistema operativo)

  PAQ           Plan de Aseguramiento de Calidad

  PAAS          Platform as a Service

  SDM           Service Delivery Manager

  RFC           Request For Change -- Solicitud de cambio

  RGPD          Reglamento General de Protección de Datos (personales)

  RPO           Recovery Point Objective -- Frescura de los datos restaurados en caso de siniestro

  RTO           Recovery Time Objective -- Plazo de restablecimiento del servicio en caso de siniestro

  SLA           Service Level Agreement -- Acuerdo sobre los niveles de servicios

  UO            Unidad de Obra

  VABF          Validación de Aptitud para el Buen Funcionamiento

  VABE          Validación de Aptitud para la Buena Explotabilidad

  VM            Virtual Machine (Máquina virtual)

  VSR           Validación de Servicio Regular

SNC           SecNumCloud
  ------------------------------------------------------------------------------

## 3. Glosario

Las expresiones empleadas a continuación en el presente documento se interpretarán de conformidad con las definiciones que se les atribuyen a continuación:

  --------------------------------------------------------------------------------------------
  Expresión                       Definición
  -------------------------------- -----------------------------------------------------------
  \"Secure Temple\"                Designa el servicio IaaS cualificado SecNumCloud, propuesto por la sociedad Cloud Temple, tal como se define en la certificación consultable en el sitio de la ANSSI y proporcionada en anexo del presente Acuerdo de servicio.

  Región                           Una \"región\" en el contexto de la computación en la nube designa un conjunto geográficamente delimitado de zonas de disponibilidad cloud, que proporciona servicios de red, de cálculo y de almacenamiento para optimizar la latencia, el rendimiento y la conformidad reglamentaria local.

  Zona de                          Una sección específica y aislada de la infraestructura de cloud computing, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de los recursos.
  Disponibilidad(AZ)(Availability
  zone)

Tenant                           Una instancia aislada reservada a un usuario o grupo de usuarios, que comparten una infraestructura común manteniendo la independencia y la seguridad de los datos y de las aplicaciones.
  --------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------
  Expresión      Definición
  --------------- ---------------------------------------------------------
  Incidente      Un \"incidente\" designa cualquier evento imprevisto que perturba el funcionamiento normal de un sistema o compromete la seguridad de los datos.

  Problema       Un \"problema\" es una causa fundamental de uno o varios incidentes, identificada o sospechada, que necesita un análisis y una resolución para prevenir su recurrencia.

  Cambio         Un \"cambio\" designa cualquier adición, modificación o eliminación que afecta al Servicio, que ha sido autorizado, planificado o asumido.

  Cambio         Un \"cambio estándar\" es un cambio sujeto a un procedimiento, cuyas modalidades de puesta en producción e impactos (incluidos financieros) son conocidos y aceptados de antemano por las Partes. Se integra entonces en el catálogo de cambios estándares, y puede según los casos tener un GTI y un GTR.
  estándar

  Puesta en      acción(es) de administración de realización del cambio cuando éste está aprobado (el cambio, en el sentido ITIL, sólo se refiere a la gestión del cambio y no a su realización/concretización).
  producción

  Solicitud de   solicitud de evolución sujeta a un procedimiento, cuya realización: i) no modifica la CMDB, ii) el modo operativo, los costes y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de retorno atrás iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la cuota del contrato cuando se realiza en horas laborables y días laborables.
  servicio

  Elemento de    Un \"elemento de configuración\" es un componente identificable del sistema de información, como un software, un hardware o un documento, sujeto a gestión en el marco de la gestión de los servicios IT.
  configuración

  Servicio       Un \"servicio\" designa el servicio cualificado SecNumCloud, entregado al CLIENTE por el Proveedor, tal como se describe en la sección « Descripción del Servicio » del presente Acuerdo de servicio.

  Evento         Un \"evento\" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

  Siniestro      Un « siniestro » designa un evento grave de origen natural o humano, accidental o intencional, que ocasiona pérdidas y daños importantes a la Parte siniestrada.

  Acuerdo de     Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Utilización (CGVU), y esto, de conformidad con las exigencias del Referencial SecNumCloud.
  servicio

  Disponibilidad Capacidad para asegurar la disponibilidad y el mantenimiento de las prestaciones óptimas de un servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

Supervisión    Vigilancia de un Sistema de Información o de un Servicio, que implica la recopilación de diversos datos como medidas y alarmas. Esta actividad se limita a la observación y al seguimiento, sin intervenir directamente en los elementos vigilados, una prerrogativa que pertenece a las operaciones de Administración.
  -------------------------------------------------------------------------

## 4. Objeto del acuerdo de servicio PaaS del Proveedor

El presente Acuerdo de Servicios establece los términos y condiciones según los cuales el Proveedor se compromete a entregar al CLIENTE una infraestructura conforme a las especificaciones de la oferta « Platform as a Service -- PaaS », debidamente cualificada SecNumCloud.

Objeto del Acuerdo de Servicios:

1. Precisar las exigencias de rendimiento esperadas por el CLIENTE en términos de funcionalidad y fiabilidad de la infraestructura.
2. Enunciar las obligaciones del Proveedor para satisfacer los niveles de servicio convenidos.
3. Identificar las normas reglamentarias aplicables específicamente a la infraestructura propuesta.
4. Asegurar una uniformidad e integridad en la evaluación de la calidad de los servicios prestados.
5. Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en la hipótesis de que el Proveedor viera retirada su cualificación SecNumCloud, el presente Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalizaciones, por el CLIENTE. En tal eventualidad, el Proveedor se compromete a informar al CLIENTE de esta descalificación mediante el envío de una notificación oficial, por medio de una carta certificada con acuse de recibo.

Conviene señalar que una modificación o un ajuste de la cualificación SecNumCloud no será interpretado como una revocación de la cualificación inicial.

## 5. Evolución del acuerdo de servicio PaaS

Las modificaciones o adiciones aportadas al presente acuerdo de servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados a tal efecto. Estas propuestas de cambio serán examinadas en el comité estratégico, única instancia habilitada para determinar los aspectos que requieren una formalización escrita.

Se conviene que toda evolución del acuerdo, tras validación, que altere las condiciones financieras inicialmente establecidas, requerirá el establecimiento y la firma de una adenda al contrato en curso.

Los factores que pueden inducir una revisión de este acuerdo incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS orquestada por el Proveedor.
- Los ajustes aportados a los servicios desplegados por el Proveedor.
- Las variaciones de los compromisos adquiridos y de las sanciones aplicables.
- Las reconfiguraciones organizativas en el seno del CLIENTE o del Proveedor.
- La expansión o reducción del ámbito de aplicación de los servicios a los que el CLIENTE ha suscrito.

La gestión de las versiones y de las revisiones del acuerdo se consigna en el preámbulo del documento para facilitar su seguimiento.

## 6. Auditoría

El Proveedor se compromete a permitir al CLIENTE, o a cualquier auditor tercero que este último hubiera designado, consultar el conjunto de documentos necesarios para la certificación del respeto íntegro de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General sobre la Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Proveedor se compromete especialmente a mantener a disposición del CLIENTE la lista de todos los terceros que pueden acceder a los datos e informarle de cualquier cambio de subcontratistas.**

Por la aceptación del presente acuerdo de servicio, el CLIENTE confiere su autorización explícita a:

1. **La Agencia Nacional de la Seguridad de los Sistemas de Información (ANSSI)** así como a la entidad de cualificación competente para emprender la verificación de la conformidad del Servicio y de su Sistema de Información con los estándares definidos por el Referencial SecNumCloud.
2. **Un proveedor de auditoría de seguridad de los sistemas de información**, debidamente cualificado y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio entregado por el Proveedor.

## 7. Descripción del servicio

La oferta de servicios propuesta por el Proveedor se caracteriza por la puesta a disposición de las siguientes prestaciones, las cuales se alinean con el principio de responsabilidad compartida detallado en las normas establecidas por el referencial SecNumCloud:

- La provisión de una plataforma de gestión de contenedores Redhat Openshift pilotada por el Proveedor.

Se entiende que el Proveedor movilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales, conforme a sus Especificaciones y respetando las normas de su certificación ISO/IEC 27001 así como las directivas del Referencial SecNumCloud.

## 8. Implementación del servicio

Se precisa que todas las operaciones y todos los componentes físicos implicados en el suministro del servicio cualificado, objeto del presente acuerdo, están situados en la Unión Europea. Esto incluye especialmente el soporte, la supervisión operativa y la supervisión de seguridad (SOC).

### 8.1. Descripción de los componentes técnicos

Los servicios PaaS (Platform as a Service) engloban la totalidad de los componentes y servicios requeridos para su funcionamiento óptimo respetando la cualificación SecNumCloud.

A este respecto, su rendimiento y fiabilidad están intrínsecamente ligados a los componentes técnicos y a los servicios de **la infraestructura IaaS** del Proveedor, como se especifica en el documento [Acuerdo de Servicio IaaS](../iaas/sla_iaas.md) del Proveedor.

#### 8.1.1. Plataforma de servicio REDHAT OpenShift

El servicio engloba la puesta a disposición dentro de una región, en 3 zonas de disponibilidad,
