---
title: Convenio de Servicio Específico - Bare Metal
---

# 1. CONVENIO DE SERVICIOS Bare Metal

  ------------------------------------------------------------------------------------------------------
  **Destinatarios:**                    **CLIENTE**
  -------------------------------------- ---------------------------------------------------------------
  **Referencia del documento**             CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Jour MM AAAA - VF

  **Sus contactos**                 *Nombre* *Apellido*

                                         Account Manager

                                         correo electrónico: *nombre.apellido*\@cloud-temple.com

  **Fecha de última actualización**       22/01/2025

**Fecha de validación contractual**   Jour MM AAAA
  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  **Versión**   **Fecha**     **Acción**                           **Autor**
  ------------- ------------ ------------------------------------ -----------------
  v1.0          22/01/2025   Redacción inicial                    Nicolas BODILIS
  ------------- ------------ ------------------------------------ -----------------

  ---------------------------------------------------------------------------------

# 2. ÍNDICE

- [1. **CONVENIO DE SERVICIOS Bare**](#Xc3786c07943ae71dec5191b24567a7f31cb6100) Metal
- [2. **ÍNDICE**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
- [3. Preliminares y Glosario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
  - [3.1. Preliminares](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
  - [3.2. Glosario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
- [4. Abreviaturas](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
- [5. Objeto de este Convenio de Servicio](#X30e34f28e133265489633a87e3abd4d1a022de5)
- [6. Auditoría](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Descripción del Servicio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
  - [7.1. Modelo de responsabilidad compartida](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
  - [7.2. Presentación detallada del alcance del Servicio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
    - [7.2.1. Infraestructuras de Datacenters](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
    - [7.2.2. Infraestructura de software de gestión del Servicio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
    - [7.2.3. Infraestructuras de cálculo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
    - [7.2.4. Infraestructura de almacenamiento](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
    - [7.2.5. Infraestructura de red global](#X78b4484e386c95a988a698cd84bae342679ddb5)
    - [7.2.6. Implementación de soluciones de recuperación de actividad o continuidad de actividad](#X5610bffa77dd118e87cbee05f204158179c962f)
  - [7.3. Limitaciones de los servicios en el modelo Bare Metal calificado](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
    - [7.3.1. Servicios gestionados en RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
    - [7.3.2. Configuración de respaldo](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)

    <!-- -->

  - [7.4. Implementación del servicio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
    - [7.4.1. Requisitos técnicos](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)

    <!-- -->

  - [7.5. Localización del servicio en Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
    - [7.5.1. Localización de los Datacenters que albergan el Servicio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
    - [7.5.2. Localización de las agencias Cloud Temple que operan el servicio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
  - [7.6. Soporte](#X451baaab9b4764d97da95395b7e24265143a283)
    - [7.6.1. Naturaleza del soporte asociado al servicio](#X192381358bcad693baa22b16773742f4c8cf227)
    - [7.6.2. Solicitud del servicio de soporte técnico](#X03ef425751011df1818d9488df5625576c33f5e)
    - [7.6.3. Proceso de gestión de Incidentes](#Xac759d2aee6d685130dea876d7a1ed03888b994)
    - [7.6.4. Proceso de priorización de tratamientos](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
    - [7.6.5. Idioma y localización del servicio de soporte](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
- [8. Compromisos y niveles de servicio](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
  - [8.1. Compromiso de disponibilidad de la infraestructura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
  - [8.2. Compromiso de disponibilidad de la interfaz CLIENTE](#X86570f48e6da9370f069232b4ae175183f2dafd)
  - [8.3. Compromiso de disponibilidad del soporte](#Xfc8548982b300528a67725f1705f15805f405f0)
- [9. Organización de la relación contractual](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
  - [9.1. Responsabilidades del Prestador](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
  - [9.2. Limitación de responsabilidades del Prestador](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
  - [9.3. Limitación de acceso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)

[9.4. Responsabilidades de los terceros que participan en la prestación del servicio Secure Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)

- [9.5. Responsabilidades y obligaciones del CLIENTE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
- [9.6. Derechos del CLIENTE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
- [9.7. Eliminación de datos al finalizar el Contrato](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)

<!-- -->

- [10. Ciclo de vida de este Convenio de Servicio](#X89744c1f67247955b75e73d73aaa55899645415)
  - [10.1. Entrada en vigor del Convenio de Servicio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
  - [10.2. Evoluciones del Convenio de Servicio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
    - [10.2.1. Evoluciones provocadas por el CLIENTE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
    - [10.2.2. Evoluciones provocadas por el Prestador](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
  - [10.3. Reversibilidad](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
- [11. Disponibilidad, continuidad y restauración del servicio](#X115fcc8f59c1201dae17a3d86136d153be01044)
  - [11.1. Gestión de Incidentes e interrupciones](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
    - [11.1.1. Incidentes](#X648046c564ac1cd52bebb02b256b193a3da4d74)
      - [11.1.1.1. Tipos de Incidentes tratados en el marco de este Convenio de Servicio](#X09cc1e22db275b1a463f85596829f3f871ae224)
      - [11.1.1.2. Tratamiento de incidentes](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
      - [11.1.1.3. Nivel de notificación de Incidentes de seguridad](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
  - [11.2. Mantenimiento del Servicio](#X8f50b0b400c67568e380ddb602ac786ec585905)
    - [11.2.1. Naturaleza del mantenimiento](#X903d92edf16182242ecfd404337edbaf2243b81)
    - [11.2.2. Acceso remoto de Cloud Temple al perímetro del CLIENTE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
    - [11.2.3. Acceso remoto de terceros que participan en la prestación del servicio al perímetro del CLIENTE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
- [12. Procedimiento de eliminación de datos al finalizar el Contrato](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
- [13. Ley aplicable](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
  - [13.1. En general](#X5ed94d170893fb4c04d7110c419f01198fda773)
  - [13.2. Cumplimiento de la ley y regulaciones aplicables](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
  - [13.3. RGPD](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
  - [13.4. Protección frente a la ley extranjera](#X5171f5ee735df20bc2100671620eddd76dca12d)
- [14. FIRMAS](#X7ad993788a708b47017c27c9d96178e8795e44f)

# 3. Preliminares y Glosario

## 3.1. Preliminares

Este documento formaliza el Convenio de Servicio asociado al servicio Bare Metal en proceso de calificación SecNumCloud.

El Servicio está en proceso de calificación SecNumCloud (ver certificación en Anexo).

Este Convenio de Servicio complementa y es complementario a las condiciones generales de venta y uso del Prestador. Se entiende que los documentos contractuales se interpretarán de manera coherente entre sí. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Convenio de Servicio SecNumCloud IaaS
3. Convenio de Servicio SecNumCloud OpenIaaS
4. Convenio de Servicio SecNumCloud PaaS
5. Convenio de Servicio Específico - Bare Metal
6. Convenio Específico Particular
7. Plan de Seguridad (PAS)
8. Condiciones Particulares de Uso (CPU)
9. Acuerdo de Protección de Datos

## 3.2. Glosario

En este Convenio de Servicio, el **CLIENTE**, el **Prestador** y las **Partes** están identificados en el Contrato al que se anexa este Convenio de Servicio.

Las expresiones siguientes utilizadas en este Convenio de Servicio se interpretarán de acuerdo con las definiciones que se les atribuyen a continuación:

- **Cambio:** Cualquier adición, modificación o eliminación que afecte al Servicio, autorizada, planificada o soportada.

- **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de producción y sus impactos (incluidos los financieros) son conocidos y aceptados de antemano por las Partes. Se incluirá entonces en el catálogo de cambios estándar y, según los casos, podrá tener una GTI y una GTR.

- **Contrato:** Designa el contrato suscrito por el CLIENTE con el Prestador para permitir al CLIENTE beneficiarse del Servicio, y al que este Convenio de Servicio se anexa.

- \***Convenio de servicio:** Este documento, elaborado en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y en conformidad con los requisitos del Referencial SecNumCloud.
- **Solicitud de servicio :** solicitud de evolución sometida a un procedimiento, cuya realización: i) no modifica la CMDB, ii) el modo operativo, los costes y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de retroceso iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la tarifa del contrato cuando se realice en horas laborables y días laborables.

- **Disponibilidad :** Capacidad para garantizar la disponibilidad y el mantenimiento de las prestaciones óptimas del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

- **Datos técnicos :** comprende el conjunto de datos manipulados para prestar el Servicio, notablemente la identidad de los beneficiarios y administradores de la infraestructura técnica, registros de la infraestructura técnica, configuración de accesos, directorio, certificados\...

- **Evento :** Un "evento" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

- **Hipervisor :** Sistema operativo que permite la ejecución de máquinas virtuales en un nodo de cálculo.

- **Incidente :** Todo evento inesperado que interrumpe el funcionamiento normal del Servicio o compromete la seguridad de los datos.

- **Incidente de seguridad :** Todo evento dentro del ámbito del Servicio:

  - De naturaleza intencionalmente maliciosa;
  - De naturaleza accidental que afecte la integridad, confidencialidad o trazabilidad del Servicio o de los datos del COMITENTE;
  - Que afecte a las medidas de seguridad existentes. Las afectaciones a la Disponibilidad de origen no malicioso no se consideran un Incidente de seguridad (falla de hardware, error, fallo, desastre natural...).

- **Interfaz COMITENTE :** Interfaz de administración del Servicio puesta a disposición del COMITENTE por el Prestador, agrupando una consola de administración web y una API.

- **Puesta en producción :** acción(es) de administración de realización del Cambio cuando éste es aprobado (el cambio, en el sentido de ITIL, se refiere solo a la gestión del cambio y no a su realización/concreción).

- **Problema** : causa de uno o varios Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo) que requiere un análisis y resolución para prevenir su repetición.

- **Región :** designa un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, proporcionando servicios de red, cálculo y almacenamiento para optimizar la latencia, rendimiento y conformidad normativa local.

- **Servicio :** designa el servicio Bare Metal en proceso de calificación SecNumCloud, entregado al COMITENTE por el Prestador desde infraestructuras técnicas mantenidas por el Prestador, tal como descrito en la sección « Descripción del Servicio » de la presente Convención de Servicio.

- **Desastre :** designa un evento grave de origen natural o humano, accidental o intencional, causando pérdidas y daños importantes a la Parte afectada.

- **Supervisión :** Monitoreo de un Sistema de Información o un Servicio, implicando la recopilación de diversos datos tales como mediciones y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente en los elementos supervisados, una prerrogativa que corresponde a las operaciones de Administración.

- **Tenant :** una instancia aislada reservada a un usuario o grupo de usuarios, compartiendo una infraestructura común mientras mantiene la independencia y seguridad de los datos y aplicaciones.

- **Zona de Disponibilidad (AZ) (Availibility zone) :** una sección específica e aislada de la infraestructura de computación en la nube, diseñada para garantizar alta disponibilidad y resiliencia de los servicios mediante una distribución geográfica de los recursos.

- **Zona de Disponibilidad (AZ) (Availibility zone) :** una sección específica e aislada de la infraestructura de computación en la nube, diseñada para garantizar alta disponibilidad y resiliencia de los servicios mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  --------------------------------------------------------------------------------------------------------
  **Acrónimo**   **Definición**
  -------------- -----------------------------------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comité Consultivo sobre Cambios

  **CMDB**       Configuration Management Database -- Base de Datos de Gestión de Configuraciones

  **COPIL**      Comité de Dirección

  **COSTRAT**    Comité Estratégico

  **COPROJ**     Comité de Proyecto

  **DB**         Base de Datos (Database)

  **DPA**        Acuerdo de Protección de Datos

  **DRP**        Plan de Recuperación ante Desastres (PRA) (Disaster Recovery Plan)

  **GTE**        Garantía de Tiempo de Escalado

  **GTI**        Garantía de Tiempo de Intervención

  **GTR**        Garantía de Tiempo de Resolución

  **ITIL**       Information Technology Infrastructure Library - Buenas prácticas para la gestión de Sistemas de Información

  **IaaS**       Infraestructura como Servicio

  **MCO**        Mantenimiento en Condición Operativa

  **MOA**        Dirección de Obras

  **MOE**        Dirección de Obras

  **MSP**        Proveedor de Servicios Gestión

  **OS**         Sistema Operativo (Operating system)

  **PAQ**        Plan de Aseguramiento de Calidad

  **PaaS**       Plataforma como Servicio

  **PAS**        Plan de Aseguramiento de Seguridad

  **PASSI**      Prestador de Auditoría de Seguridad de Sistemas de Información

  **RFC**        Solicitud de Cambio -- Request For Change

  **RGPD**       Reglamento General de Protección de Datos (personales)

  **RPO**        Objetivo de Punto de Recuperación -- Freshness de datos restaurados en caso de Desastre

  **RTO**        Objetivo de Tiempo de Recuperación -- Tiempo de restablecimiento del servicio en caso de Desastre

  **SDM**        Gerente de Entrega de Servicio

  **SLA**        Acuerdo de Nivel de Servicio -- Service Level Agreement

  **SNC**        SecNumCloud

  **SOC**        Centro de Operaciones de Seguridad

  **TMA**        Tercera Mantenimiento de Aplicación

  **UO**         Unidad de Obra

  **VABE**       Validación de Aptitud para la Buena Explotabilidad

  **VABF**       Validación de Aptitud para el Buen Funcionamiento

  **VM**         Máquina Virtual (Virtual Machine)

**VSR**        Validación de Servicio Regular
  --------------------------------------------------------------------------------------------------------

# 5. Objeto de la presente Convención de Servicio

La presente Convención de Servicio establece los términos y condiciones según los cuales el Prestador se compromete a prestar el Servicio al COMITENTE. Su objeto es:

- Especificar las exigencias de rendimiento esperadas por el COMITENTE en términos de funcionalidad y fiabilidad del Servicio;
- Establecer las obligaciones del Prestador para satisfacer los niveles de servicio acordados;
- Identificar las normas regulatorias aplicables específicamente al Servicio prestado;
- Garantizar una uniformidad e integridad en la evaluación de la calidad del Servicio;
- Garantizar la excelencia de los servicios prestados, evaluada mediante indicadores cuantitativos de rendimiento.

Se estipula que, en el caso de que al Prestador se le retire su calificación SecNumCloud, el Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalidades, por parte del COMITENTE. En tal caso, el Prestador se compromete a informar al COMITENTE de dicha descalificación mediante el envío de una notificación oficial, a través de una carta certificada con acuse de recibo.

Debe tenerse en cuenta que un cambio o ajuste en la calificación SecNumCloud no se interpretará como una revocación de la calificación inicial.

# 6. Auditoría

El Prestador se compromete a permitir al COMITENTE, o a cualquier auditor tercero y no competidor del Prestador que éste haya designado, consultar todos los documentos necesarios para acreditar el cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Al aceptar la presente Convención de Servicio, el COMITENTE otorga su autorización explícita a:

1. La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) así como a la entidad de calificación competente para realizar la verificación de la conformidad del Servicio y su sistema de información con el marco SecNumCloud.
2. Un prestador de auditoría de seguridad de sistemas de información, debidamente calificado PASSI y expresamente designado por el Prestador, para llevar a cabo auditorías de seguridad relativas al Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio ofrecido por el Prestador se caracteriza por la puesta a disposición de las siguientes prestaciones, las cuales se alinean con el principio de responsabilidad compartida presentado en el marco SecNumCloud:

- La provisión de recursos de cálculo (compute);
- La puesta a disposición de espacios de almacenamiento;
- El acceso a servicios de conectividad de red e internet;
- El acceso a una consola de gestión de los recursos desplegados;

El modelo de responsabilidades compartidas aplicado entre el Prestador y el COMITENTE en el marco del Servicio se presenta en el §7.1.

Se entiende que el Prestador utilizará su expertise para realizar las Prestaciones según las mejores prácticas profesionales y de conformidad con los requisitos del marco SecNumCloud.

## 7.2. Presentación detallada del ámbito del Servicio

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Compute                 Recurso de cálculo del Tenant COMITENTE
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Storage                 Datos de producción del Tenant COMITENTE
Infraestructura de red   Recurso de red del Inquilino COMPRADOR

Consola COMPRADOR   El servicio que permite al COMPRADOR acceder a su servicio Bare Metal y administrarlo a través de la interfaz Consola

Soporte                 El servicio de soporte que acompaña a los servicios anteriores y únicamente a estos (\*)
-----------------------------------------------------------------------------------------------------------------------------------------------

(\*) En el marco del alcance del Servicio calificado SNC y las responsabilidades del Prestador en este sentido\_

### 7.2.1. Infraestructuras de centros de datos

El Servicio incluye la puesta a disposición, para cada Zona de disponibilidad, de las prestaciones en curso de calificación siguientes:

- Sitio de centro de datos ubicado en Francia para la Región FR, conforme a las últimas normas tecnológicas, con un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
- Puesta a disposición de salas técnicas dentro de centros de datos dedicados al alojamiento de equipos técnicos indispensables para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado y otros componentes necesarios;
- Suministro de alimentación eléctrica segura, garantizada por dos circuitos eléctricos distintos, asegurando la continuidad del servicio;
- Suministro de servicios de climatización, ajustados para cumplir con las normas y recomendaciones de los fabricantes de equipos, con el fin de mantener un entorno óptimo para los dispositivos técnicos;
- Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y seguridad del servicio proporcionado.

El Prestador garantiza la puesta a disposición de servicios avanzados de detección y extinción de incendios, diseñados para identificar y neutralizar eficazmente cualquier incendio dentro de las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos y datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir riesgos de incendio, minimizar daños potenciales y asegurar la continuidad de las operaciones.

El COMPRADOR es informado de que todos los procedimientos y medidas de seguridad implementadas, incluyendo las pruebas anuales de conmutación a grupos electrógenos, son esenciales para garantizar la continuidad e integridad de los servicios proporcionados. Estas prácticas están diseñadas para minimizar los riesgos de fallo y asegurar una reactividad óptima en caso de Incidente. Al aceptar estas condiciones, el COMPRADOR reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. El COMPRADOR también es alentado a conocer las recomendaciones de seguridad proporcionadas y a integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de gestión del Servicio

El Prestador proporciona al COMPRADOR la consola de administración y la API necesarias para utilizar el Servicio. Se compromete a mantener esta consola de administración y la API en condiciones operativas óptimas y a garantizar su seguridad de forma continua. Esta consola de administración y la API se denominan colectivamente bajo el término "interfaz COMPRADOR".

El Prestador advierte al COMPRADOR sobre el hecho de que un uso anormal de la interfaz COMPRADOR, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que bloqueen el acceso a las APIs de comando o al Servicio. Es importante destacar que esta situación no constituye una inoperatividad del Servicio, sino una acción de protección del Servicio y de la infraestructura del Prestador; por lo tanto, el COMPRADOR no puede considerarla como una inoperatividad en sus cálculos.

Además, el Prestador informa al COMPRADOR que las solicitudes idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el COMPRADOR envía solicitudes idénticas con una frecuencia superior, su rechazo no podrá interpretarse como una inoperatividad del Servicio.

### 7.2.3. Infraestructuras de cálculo

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el COMPRADOR, de los equipos necesarios para ejecutar las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

- La provisión de los chasis técnicos necesarios para el correcto funcionamiento de las láminas de cálculo;
- La provisión de las láminas de cálculo en las cantidades especificadas por el COMPRADOR y distribuidas según las zonas de disponibilidad de su elección. Es importante destacar que estas láminas de cálculo están exclusivamente dedicadas al COMPRADOR;
- La puesta a disposición de una consola tipo KVM para gestionar la gestión de la recurso de cálculo

La elección del modelo de lámina de cálculo, seleccionado entre el catálogo propuesto por el Prestador, corresponde a la responsabilidad del COMPRADOR.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al COMPRADOR de una infraestructura de almacenamiento compartido de tipo SAN (Storage Area Network), ofreciendo diversos niveles de rendimiento. Este servicio incluye:

- La implementación y el mantenimiento en condiciones operativas y de seguridad del red SAN dedicada;
- La instalación y gestión de los armarios de almacenamiento compartidos entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, su supervisión y metrología;
- La implementación de sistemas automatizados para la asignación de LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del COMPRADOR, de acuerdo con los volúmenes suscritos por el COMPRADOR.

### 7.2.5. Infraestructura de red global

El Prestador despliega dentro del marco del Servicio, una red global que facilita al COMPRADOR la puesta en accesibilidad de sus sistemas alojados. Este servicio incluye:

- La provisión, el mantenimiento en condiciones operativas y de seguridad de todas las conexiones en fibra óptica interconectando las diferentes Zonas de disponibilidad;

- La provisión, el mantenimiento en condiciones operativas y de seguridad de los equipos técnicos necesarios para el correcto funcionamiento de la red y la aislación de los diferentes clientes.

La interconexión de red del Inquilino COMPRADOR, a Internet o a redes privadas, y los equipos de red, enlaces de operadores y otros componentes técnicos que realizan esta interconexión, no forman parte del ámbito del Servicio. Esta interconexión de red se implementa de acuerdo con las disposiciones previstas en el Contrato.

### 7.2.6. Implementación de soluciones de recuperación de actividad o continuidad de actividad

El Prestador proporciona al COMPRADOR todo el conjunto de soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos en diversas Zonas de disponibilidad. Corresponde al COMPRADOR la responsabilidad de gestionar eficazmente esta distribución de recursos, para la cual tiene la posibilidad de utilizar las herramientas del Prestador disponibles para este uso.

## 7.3. Limitaciones de los servicios en el modelo Bare Metal calificado

### 7.3.1. Servicios gestionados en RUN

Es importante destacar que se excluyen del Servicio:

- El alojamiento de componentes físicos del COMPRADOR;

- La interconexión de red del Inquilino COMPRADOR, a Internet o a redes privadas, incluyendo los enlaces de operador;

- Todo servicio de tipo gestionado, o TMA;

- Toda asistencia sobre los sistemas operativos instalados y por encima en la pila de responsabilidades, incluso si se trata de simple supervisión.

No obstante, no se excluye absolutamente que el COMPRADOR recurre a dichos servicios dentro de la oferta MSP del Prestador para intervenir en modo servicios gestionados en sus Inquilinos. Estos servicios no estarán regulados por esta Convención de servicio y sus compromisos/cláusulas bipartitas.

### 7.3.2. Configuración de respaldo

Por defecto, el Prestador proporciona la implementación de los recursos de Bare Metal al COMPRADOR reservando recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Corresponde al COMPRADOR elegir las Zonas de disponibilidad a través de la interfaz COMPRADOR.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el COMPRADOR reconoce que deberá:

- Declarar IP fijas desde las que el Prestador lo autorizará a acceder a la interfaz COMPRADOR (Filtrado por lista blanca). Las modificaciones de esta lista de IP deberán realizarse a través del menú previsto a este efecto en la consola o mediante Solicitudes de servicio para modificaciones posteriores. En la inicialización del servicio, el Prestador habrá sido informado como mínimo de al menos una dirección IP tal como se describe.

## 7.5. Localización del servicio en Francia

Se precisa que ninguna de las operaciones y ningún componente físico involucrado en la provisión del Servicio, cuya presente Convención de servicio es objeto, se encuentra fuera de la Unión Europea.

Esto incluye, en particular, el soporte, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que proporciona el Servicio. De hecho, todo el almacenamiento, todas las tareas de administración, supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los centros de datos que albergan el Servicio

A falta de las operaciones de los colaboradores y agencias del Prestador, todas las operaciones de producción (incluyendo el almacenamiento y procesamiento de datos) y componentes técnicos que proporcionan el Servicio se encuentran en los centros de datos ubicados en Francia.

### 7.5.2. Localización de las agencias Cloud Temple que operan el servicio
Los colaboradores de Cloud Temple que intervienen en el ámbito del Servicio operan desde las agencias de Cloud Temple, todas ubicadas exclusivamente en Francia. Estas agencias están ubicadas en Francia, en Tours, Lyon, Caen y París La Défense.

El COMITENTE es informado de la posibilidad de que los empleados de Cloud Temple trabajen a distancia. Sin embargo, el Prestador garantiza el mismo nivel de seguridad en cuanto a accesos remotos, especialmente en cuanto a accesos VPN. Estos accesos remotos se implementan de acuerdo con los requisitos del referencial SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte asociado al servicio

El Prestador proporciona un servicio de soporte técnico destinado a asistir al COMITENTE en la gestión, resolución de fallos y optimización de sus recursos desplegados. Este servicio cubre una amplia gama de actividades, desde la ayuda en la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación se describe las características y funcionalidades del servicio de soporte:

- Asistencia en la implementación inicial del uso del Servicio;
- Asistencia en la resolución de incidentes;
- Asistencia en la resolución de problemas;
- Seguimiento y asesoramiento sobre la optimización de la infraestructura técnica.

Dentro del marco del servicio de soporte, el Prestador no sustituye al COMITENTE en el uso del Servicio. El COMITENTE sigue siendo plenamente responsable de la configuración, explotación de sus VM y Tenants, y gestión de todos los elementos (datos y aplicaciones incluidas) que haya almacenado o instalado en las infraestructuras del Prestador. El servicio de soporte técnico se proporciona de acuerdo con las Condiciones Generales de Venta y Uso, el Prestador estando obligado a un medio.

El COMITENTE se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose especialmente de solicitar servicios no suscritos al Prestador y de hacer intervenir a las equipos del Prestador ante sus propios clientes o terceros no incluidos en el Contrato. El Prestador se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de las unidades de obra de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico está disponible a través de un sistema de tickets a través de la consola del COMITENTE y está disponible durante las horas normales de oficina, fuera de días festivos (8h - 18h; Lunes - Viernes; calendario y horarios franceses). Para emergencias que ocurran fuera de las horas laborables, especialmente incidentes que afecten significativamente la producción, el servicio de guardia puede contactarse a través de un número comunicado al COMITENTE al inicio del Servicio.

Para cada solicitud o Incidente, es obligatorio generar un ticket ante el soporte del Prestador. La iniciación de este ticket, incluyendo todas las informaciones necesarias, es esencial y marca el comienzo de la evaluación de los compromisos del Prestador.

Tan pronto como el Prestador recibe una solicitud o notificación de Incidente, ya sea a través de la consola de gestión o como resultado de una llamada telefónica, se crea automáticamente un ticket. Al declarar un Incidente, es esencial que el COMITENTE proporcione al prestador la máxima cantidad de detalles sobre el problema encontrado. Esta acción es crucial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico eficaz.

El COMITENTE recibe entonces una confirmación por correo electrónico, indicando la creación del ticket y su número único. El COMITENTE puede consultar el estado y el historial de sus solicitudes y declaraciones de Incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de Incidentes

Al declarar un Incidente, el equipo de soporte técnico del Prestador inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El COMITENTE debe colaborar activamente con el Prestador proporcionando toda la información necesaria y realizando las pruebas requeridas. El Prestador puede acceder al Servicio del COMITENTE para diagnosticar el Incidente.

Si los Servicios del Prestador se consideran funcionales y el Incidente no le es imputable, el COMITENTE será informado. A petición del COMITENTE, el Prestador puede proponer Servicios Profesionales para identificar el origen del problema, facturable bajo acuerdo previo por tramos de 30 minutos.

En el caso de que el Incidente sea responsabilidad del Prestador o de uno de sus subcontratistas, este completa el diagnóstico y se ocupa de la restauración del Servicio sin costes adicionales. El diagnóstico se basa en los intercambios entre las Partes y los datos del Prestador, estos elementos siendo considerados probantes por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de tratamientos

La determinación del nivel de prioridad de un caso se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de criticidad:

- Los niveles de impacto están definidos de la siguiente manera:

  -----------------------------------------------------------------------------------------------------------------------------------------
  Nivel de impacto   Descripción
  ----------------- -----------------------------------------------------------------------------------------------------------------------
  Impacto I1         El o los servicios del Prestador están interrumpidos

  Impacto I2         El o los servicios del Prestador están degradados

Impacto I3         El o los servicios del Prestador están actualmente estables, pero muestran signos de potencial declive a largo plazo
  -----------------------------------------------------------------------------------------------------------------------------------------

- Los niveles de Criticidad están definidos de la siguiente manera:

  -------------------------------------------------------------------------------------------------------------------------------
  Nivel de criticidad   Descripción
  --------------------- ---------------------------------------------------------------------------------------------------------
  Criticidad C1          El o los servicios del Prestador se degradan a una velocidad preocupante

  Criticidad C2          El o los servicios del Prestador se deterioran progresivamente con el tiempo

Criticidad C3          El o los servicios del Prestador presentan uno o más inconvenientes sin consecuencias significativas
  -------------------------------------------------------------------------------------------------------------------------------

- Basado en un análisis profundo de la situación, considerando los elementos que determinan el Impacto y la Criticidad, se asigna una prioridad al ticket de acuerdo con la matriz de decisión siguiente:

  --------------------------------------------------------------------------------------------
  Nivel de impacto  Nivel de criticidad   Impacto I1         Impacto I2         Impacto I3
  -------------------------------------- ----------------- ----------------- -----------------
  Criticidad C1                           Prioridad **P1**   Prioridad **P2**   Prioridad **P3**

  Criticidad C2                           Prioridad **P2**   Prioridad **P3**   Prioridad **P4**

Criticidad C3                           Prioridad **P3**   Prioridad **P4**   Prioridad **P5**
  --------------------------------------------------------------------------------------------

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### 7.6.5. Idioma y localización del servicio de soporte

El soporte se proporciona por el Prestador al COMITENTE como mínimo en lengua francesa. El soporte también puede proporcionarse en lengua inglesa.

Las operaciones del servicio de soporte del Prestador para la oferta de servicio de Bare Metal en proceso de calificación SecNumCloud están ubicadas en la Unión Europea.

# 8. Compromisos y niveles de servicio

El Prestador se compromete a garantizar una supervisión continua del rendimiento y la integridad segura de su infraestructura técnica que entrega el Servicio, velando por su funcionamiento óptimo.

La inoperatividad de un servicio, objeto de un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Prestador, o como resultado de una notificación por parte de un usuario del COMITENTE. El comienzo de la inoperatividad se fija en el momento más temprano entre estos dos eventos, para garantizar un recuento preciso y justo del tiempo de inoperatividad.

El fin de la inoperatividad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Prestador, o por un retorno del usuario, asegurando así una recuperación efectiva de las operaciones y una medida fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura

El Prestador se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican bajo reserva de que el COMITENTE implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la región concernida.

En ausencia de cumplimiento de estas condiciones por parte del COMITENTE, este no podrá reclamar la aplicación de los SLAs correspondientes, los cuales están específicamente identificados por un asterisco (*). El acceso a los SLAs se realiza a través de la interfaz del COMITENTE. Las medidas se entienden calculadas mensualmente:
- **SLA 1 (\*) : IC-INFRA_SNC-01** -- Disponibilidad de la potencia de cálculo (Compute): tasa de disponibilidad garantizada del 99,99%, calculada en base 24 horas al día, 7 días a la semana.
- **SLA 2 (\*) : IC-INFRA_SNC-02** -- Disponibilidad del almacenamiento: tasa de disponibilidad garantizada del 99,99%, calculada en base 24 horas al día, 7 días a la semana.
- **SLA 3 (\*) : IC-INFRA_SNC-03** -- Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada del 99,99%, calculada en base 24 horas al día, 7 días a la semana.
- **SLA 4 : IC-INFRA_SNC-04** -- Acceso a Internet: tasa de disponibilidad garantizada del 99,99%, calculada en base 24 horas al día, 7 días a la semana.

***Notas*** :

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Prestador se reserva el derecho de ajustar su configuración de enrutamiento de Internet para limitar el impacto de este ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al CLIENTE es objetivo, el Prestador puede recurrir a la técnica de blackholing a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP objetivo en los proveedores, con el fin de proteger los recursos del CLIENTE así como los de otros CLIENTES y la infraestructura del Prestador. El Prestador anima fuertemente al CLIENTE a adoptar medidas similares, como el uso de software de cortafuegos de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*

- *El Prestador insiste en la necesidad para el CLIENTE de minimizar las aperturas de flujo, evitando especialmente hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde todo Internet (subred 0.0.0.0/0), así como los protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz CLIENTE

- SLA 5 : IC-INFRA_SNC-05 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada del 97%, garantizada de forma continua, 24 horas al día y 7 días a la semana.
- SLA 6 : IC-INFRA_SNC-06 -- Acceso a las APIs de control del Servicio: una disponibilidad del 99,9%, calculada en base 24 horas al día, 7 días a la semana.

## 8.3. Compromiso de disponibilidad del soporte

- **SLA 7 : IC-INFRA_SNC-07** -- Estos son los compromisos de rendimiento del soporte técnico del Prestador para los incidentes, fuera de las mantenimientos programados :

  ------------------------------------------------------------------------------------
  Prioridad          Garantía de tiempo de intervención (GTI)   Objetivo de rendimiento
  ----------------- ---------------------------------------- -------------------------
  Prioridad **P1**   30 minutos                               95%

  Prioridad **P2**   2 horas                                  90%

  Prioridad **P3**   4 horas                                  90%

  Prioridad **P4**   24 horas                                 85%

Prioridad **P5**   48 horas                                 85%
  ------------------------------------------------------------------------------------

- **SLA 8 : IC-INFRA_SNC-08** -- Estos son los compromisos de rendimiento del soporte técnico del Prestador para las solicitudes de servicio :

  ---------------------------------------------------------------------------------------
                       Garantía de tiempo de intervención (GTI)   Objetivo de rendimiento
  -------------------- ---------------------------------------- -------------------------
  Solicitud de servicio   4 horas                                  90%

  ---------------------------------------------------------------------------------------

*Nota* :

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el CLIENTE abre el ticket y la primera intervención del soporte del Prestador.*
- *La investigación de incidentes relacionados con los CLIENTES no incluirá intervención remota en los servidores alojados del CLIENTE. Esta asistencia se limitará a la explicación de las métricas disponibles relacionadas con el entorno del CLIENTE, para facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Basado en los resultados de este análisis, se podrán sugerir recomendaciones.*

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Prestador

El Prestador se compromete :

- a informar a su CLIENTE de manera adecuada (por ejemplo, en caso de límite de capacidad de recursos técnicos que proporcionan el Servicio).

- a informar formalmente al CLIENTE y en un plazo de un mes, de cualquier cambio legal, organizativo o técnico que pueda tener un impacto en la conformidad del Servicio con los requisitos de protección contra las leyes extranjeras (19.6 del referencial SNC v3.2).

- a proporcionar al CLIENTE interfaces y interfaces de servicio que estén en lengua francesa como mínimo.

- a tener en cuenta los requisitos sectoriales específicos relacionados con los tipos de información confiados por el CLIENTE en el marco de la implementación del Servicio y dentro de las responsabilidades del Prestador por un lado, y las disposiciones previstas en el Contrato por otro lado;

- a estudiar los requisitos sectoriales específicos relacionados con los tipos de información confiados por el CLIENTE en el marco de la implementación del Servicio, posteriormente expresados por el CLIENTE, y a indicar a este último las acciones necesarias para su consideración

- a no divulgar ninguna información relativa al servicio a terceros, salvo autorización formal y escrita del CLIENTE.

- a poner a disposición todas las informaciones necesarias para realizar auditorías de conformidad de acuerdo con las disposiciones del artículo 28 del RGPD.

- a informar al CLIENTE, mediante esta Convención de servicio, sobre cualquier incidente de seguridad que afecte al Servicio o al uso que el CLIENTE hace del Servicio (incluyendo los datos del CLIENTE).

- a autorizar a un auditor de seguridad de sistemas de información (PASSI) calificado, designado por el Prestador, para auditar el servicio así como su sistema de información, de acuerdo con el plan de control del SecNumCloud del Prestador. Además, el Prestador se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, realizadas por el CLIENTE o un tercero designado.

- a proporcionar, como subcontratista, de acuerdo con el artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y consejos al CLIENTE alertándole en cuanto una instrucción emitida por este último sea susceptible de constituir una violación de las reglas de protección de datos.

- a notificar al CLIENTE en un plazo razonable, a través de la consola del CLIENTE o por correo electrónico al contacto del CLIENTE, cuando un proyecto afecte o sea susceptible de afectar el nivel de seguridad o la disponibilidad del Servicio, o de generar una pérdida de funcionalidad, posibles impactos, medidas de mitigación implementadas, así como riesgos residuales que lo afecten.

- a documentar y poner en marcha todos los procedimientos necesarios para cumplir con los requisitos legales, reglamentarios y contractuales aplicables al servicio, así como los requisitos de seguridad específicos del CLIENTE, definidos por este último y previstos en el Contrato.

- a no utilizar los datos del CLIENTE provenientes de la producción para realizar pruebas, a menos que se obtenga previamente la autorización explícita del CLIENTE, en cuyo caso el Prestador se compromete a anonimizar estos datos y a garantizar su confidencialidad durante su anonimización.

- a eliminar los datos y datos técnicos relativos al CLIENTE, de acuerdo con la "procedimiento de eliminación de datos al final del Contrato" descrito en esta Convención de servicio, en caso de finalización o resiliación del Contrato.

- a garantizar una eliminación segura de todos los datos del CLIENTE mediante la reescritura completa de todos los soportes que hayan alojado sus datos en el marco del Servicio.

Bajo solicitud formal y escrita del CLIENTE, el Prestador se compromete a :

1. Hacer accesible al CLIENTE el reglamento interno y la carta de ética del Prestador ;

2. Hacer accesible al CLIENTE las sanciones aplicables en caso de infracción de la política de seguridad ;

3. Proporcionar al CLIENTE todo el conjunto de eventos que le conciernen en los elementos de registro del Servicio; el CLIENTE podrá, además, consultar de forma autónoma los eventos relativos a su uso del Servicio a través de las interfaces web y API del Servicio ;

4. Hacer accesible al CLIENTE los procedimientos que permiten cumplir con los requisitos legales, reglamentarios y contractuales vigentes aplicables al Servicio, así como los requisitos de seguridad específicos del CLIENTE previstos en el Contrato ;

5. Proporcionar los elementos de evaluación de riesgos relativos a la presentación de los datos del CLIENTE al derecho de un estado no miembro de la Unión Europea ;

6. Informar al CLIENTE sobre los subcontratistas posteriores que intervienen en la prestación del Servicio, y informarle de cualquier cambio que lo afecte relativo a estos subcontratistas.

> El Prestador y todas sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber, la dignidad humana, la libertad, la democracia, la igualdad, el Estado de derecho, así como el respeto a los derechos humanos. El servicio prestado por el Prestador es conforme a la legislación vigente en materia de derechos fundamentales y a los valores de la Unión Europea relativos al respeto de la dignidad humana, la libertad, la igualdad, la democracia y el Estado de derecho.

## 9.2. Limitación de responsabilidades del Prestador
De acuerdo con las definiciones y condiciones mencionadas en la presente Convención de servicio, las responsabilidades del Prestador están limitadas de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección «Modelo de responsabilidades compartidas» de la presente Convención de servicio, limita de hecho la participación del Prestador en las capas de funcionamiento que van "por encima" de la provisión de recursos de cálculo, red, almacenamiento y respaldo. Esto excluye, entre otros:

    - La gestión de lo que se instala en las máquinas virtuales (Sistemas Operativos, middleware, aplicaciones, etc.);

    - El mantenimiento actualizado de los Sistemas Operativos y otros software instalados por el COMANDITARIO en sus máquinas dentro de sus entornos;

    - La seguridad de los programas, software y aplicaciones instalados en las máquinas virtuales;

    - La actualización de las máquinas virtuales;

    - El respaldo de datos a nivel aplicativo.

2. El Prestador no puede invocar la propiedad de los datos transmitidos y generados por el COMANDITARIO. En efecto, estos datos pertenecen a la propiedad del COMANDITARIO.

3. El Prestador señala que no puede explotar y/o disponer de los datos transmitidos y generados por el COMANDITARIO sin la aprobación previa de este último, entendiendo que su disposición está reservada al COMANDITARIO.

4. El Prestador se exime de toda responsabilidad sobre los componentes físicamente alojados y gestionados por el Prestador, pero que son propiedad directa del COMANDITARIO o de un tercero con el que el COMANDITARIO haya celebrado un contrato. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y, de hecho, está fuera del ámbito de la presente Convención de servicio. Corresponde al COMANDITARIO evaluar el nivel de adhesión o dependencia que introducen estos componentes respecto al Servicio Bare Metal en curso de calificación SecNumCloud.

## 9.3. Limitación de acceso

Dentro del marco del Servicio, el Prestador está formalmente prohibido de acceder a los entornos pertenecientes al COMANDITARIO sin autorización previa. Corresponde al COMANDITARIO proporcionar los accesos necesarios al personal del Prestador, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el COMANDITARIO.

El COMANDITARIO reconoce que estos accesos se otorgan exclusivamente para los fines relacionados con la prestación de servicios acordados, garantizando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros involucrados en la prestación del servicio del Prestador está estrictamente prohibido. En el caso de que una exigencia técnica específica requiera dicho acceso, éste solo podría establecerse tras haber notificado claramente al COMANDITARIO, proporcionado una justificación detallada y obtenido su consentimiento escrito.

Esta medida garantiza el control y la seguridad de los datos del COMANDITARIO, asegurando que toda excepción a la regla esté debidamente autorizada y documentada.

## 9.4. Responsabilidades de los terceros participantes en la prestación del servicio

El Prestador mantiene la lista de terceros socios participantes en la prestación del Servicio. Estos terceros son los editores, proveedores (del Prestador) y otros proveedores participantes en la prestación del Servicio. El Prestador aplica las siguientes medidas a estos terceros:

- El Prestador exige a los terceros participantes en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio;

- El Prestador contrata, con cada uno de los terceros participantes en la implementación del servicio, cláusulas de auditoría que permitan a un organismo de calificación verificar que estos terceros cumplen con los requisitos legales y los requisitos SNC, permitiendo al Prestador cumplir con sus compromisos en la presente Convención de servicio.

- El Prestador implementa un procedimiento para controlar periódicamente las medidas implementadas por los terceros participantes en la implementación del servicio para cumplir con los requisitos del Prestador de cumplir con sus compromisos en la presente Convención de servicio.

- El Prestador realiza un seguimiento de los cambios realizados por los terceros participantes en la implementación del servicio susceptibles de afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del COMANDITARIO

El COMANDITARIO tiene las siguientes obligaciones dentro del marco del Servicio:

- Para recordar, el Prestador proporciona al COMANDITARIO una plataforma de cálculo (servidor sin sistema operativo) cuya configuración es responsabilidad del COMANDITARIO.

- El COMANDITARIO autoriza a la ANSSI y al organismo de calificación SNC a auditar el Servicio y la infraestructura técnica que proporciona el Servicio.

- El COMANDITARIO es responsable de indicar al Prestador las posibles exigencias sectoriales específicas relacionadas con los tipos de información confiados por el COMANDITARIO y que deben ser considerados por el Prestador.

- El COMANDITARIO acepta no solicitar al Prestador exigencias o acciones que obliguen al Prestador a desviarse de los requisitos del referencial SecNumCloud en su versión actual, por un lado, o que reduzcan el nivel de seguridad establecido por el cumplimiento de los requisitos de dicho referencial, por otro lado.

## 9.6. Derechos del COMANDITARIO

En cualquier momento durante la relación contractual, el COMANDITARIO puede presentar una reclamación relativa al servicio calificado ante la ANSSI.

En cualquier momento, el COMANDITARIO puede solicitar al Prestador que le haga accesible su reglamento interno y su código de ética.

## 9.7. Borrado de datos al final del Contrato

Al finalizar el contrato, ya sea por vencimiento o por resiliación por cualquier motivo, el Prestador se compromete a realizar un borrado seguro de todos los datos del COMANDITARIO, incluidos los datos técnicos. El Prestador se asegurará de comunicar al COMANDITARIO un aviso formal, respetando un plazo de veintiún (21) días calendario. Los datos del COMANDITARIO se eliminarán en un plazo máximo de treinta (30) días posteriores a dicha notificación.

Para acreditar dicha eliminación, el Prestador entregará al COMANDITARIO un certificado que confirme el borrado de los datos.

# 10. Ciclo de vida de la presente Convención de servicio

## 10.1. Entrada en vigor de la Convención de servicio

La presente Convención de servicio entra en vigor el día de su firma por parte del COMANDITARIO.

La recopilación, manipulación, almacenamiento y tratamiento de los datos realizados en el marco del pre-venta, implementación, parada del Servicio, se realizan respetando la legislación vigente.

## 10.2. Evoluciones de la Convención de servicio

Las modificaciones o adiciones realizadas a la presente Convención de servicio provienen exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados al efecto. Estas propuestas de cambio serán examinadas por las Partes, habilitadas para determinar los aspectos que requieren formalización escrita.

Se acuerda que toda evolución de la Convención de servicio, tras su validación, que altere las condiciones financieras iniciales establecidas, requerirá la elaboración y firma de un anexo al Contrato vigente.

Los factores que pueden inducir una revisión de esta Convención de servicio incluyen, sin limitarse a:

- La evolución de la infraestructura técnica que proporciona el Servicio Bare Metal;
- Los ajustes realizados en los servicios desplegados por el Prestador para proporcionar el Servicio;
- Las variaciones en los compromisos asumidos y las sanciones aplicables;
- Las reconfiguraciones organizativas dentro del COMANDITARIO o del Prestador;
- La expansión o reducción del alcance del Servicio.

La gestión de versiones y revisiones de la Convención de servicio se consigna en el preámbulo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones provocadas por el COMANDITARIO

Las evoluciones de la Convención de servicio pueden tener, entre otras, como origen:

- Una evolución de la infraestructura gestionada por el Prestador;

- Una modificación de los servicios implementados por el Prestador;

- Una modificación de los compromisos de niveles de servicio por parte del Prestador.

### 10.2.2. Evoluciones provocadas por el Prestador

Toda modificación de la Convención de servicio está sujeta a la aceptación del COMANDITARIO. Se entiende que toda modificación o complemento validado que modifique los elementos financieros del Contrato podrá implicar la firma de un anexo a dicho Contrato.

## 10.3. Reversibilidad

Cloud Temple se compromete a permitir una revisión de la presente Convención de servicio (previendo, entre otras, su resiliación) sin penalización para el COMANDITARIO en caso de pérdida de la calificación SecNumCloud.

Los Servicios no incluyen obligación de reversibilidad (es decir, ayuda al COMANDITARIO para que pueda migrar su sistema a otro "Prestador") a excepción de la provisión al COMANDITARIO por parte del Prestador de la interfaz COMANDITARIO que permita al COMANDITARIO salvar y recuperar sus datos, incluyendo especialmente los datos de configuración de su sistema de información a través de una de las siguientes modalidades técnicas a elección del COMANDITARIO: la provisión de archivos siguiendo uno o varios formatos documentados y explotables fuera del servicio proporcionado por el Prestador o bien mediante la implementación de interfaces técnicas que permitan el acceso a los datos siguiendo un esquema documentado y explotable (API).
El COMITENTE, único dueño de su sistema, debe poner en marcha todo lo necesario para facilitar esta operación según sea necesario (lo que implica, en particular, que establezca una documentación rigurosa al respecto) y la elaboración de planes de reversibilidad. En caso de que el COMITENTE necesite un servicio adicional, el Prestador puede proponer una misión de asesoramiento al respecto dentro de un contrato específico negociable.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de incidentes e interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de incidentes tratados en el marco de esta Convención de servicio

- Siniestros;

- Fallos y defectos;

- Incidentes de seguridad que afecten la disponibilidad, confidencialidad o integridad del Servicio.

#### 11.1.1.2. Tratamiento de incidentes

> El Prestador informa al COMITENTE lo antes posible sobre incidentes e interrupciones, mediante una notificación en la consola del COMITENTE o por correo electrónico al contacto del COMITENTE. El Prestador informa al COMITENTE sobre el tratamiento del incidente por el canal utilizado para notificar el incidente, o por el canal indicado en la notificación del incidente.

#### 11.1.1.3. Nivel de notificación de incidentes de seguridad

El COMITENTE tiene la responsabilidad de elegir los niveles de gravedad de los incidentes de seguridad para los que desea ser informado, por ejemplo, mediante su formalización en un PAS aplicable al Servicio.

Por defecto, el COMITENTE es informado:

- De incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de tratamientos de esta Convención de servicio);

- De incidentes de seguridad que afecten la confidencialidad o integridad de los datos del COMITENTE confiados en el marco del Servicio;

- De violaciones de datos personales para las que el COMITENTE es responsable del tratamiento de conformidad con el artículo 8 de la Anexa DPA en el marco del Servicio;

-

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

Debido a violaciones de datos personales para las que el Prestador es responsable del tratamiento y que contienen datos personales del COMITENTE, de conformidad con el artículo 8 de la Anexa DPA. El mantenimiento proporcionado consiste en la implementación:

- Del plan de mantenimiento en condiciones operativas del Servicio para garantizar buenos indicadores de disponibilidad, como se compromete el Prestador anteriormente;

- Del plan de PCA/PRA si el COMITENTE lo ha suscrito, activado según los posibles incidentes que puedan surgir.

### 11.2.2. Acceso remoto de Cloud Temple al perímetro del COMITENTE

El Prestador se prohíbe, en el marco de esta Convención de servicio, cualquier acceso a los inquilinos y al espacio de la interfaz del COMITENTE.

Corresponderá al COMITENTE otorgar los accesos necesarios al personal del Prestador. El COMITENTE reconoce que los accesos se utilizarán en el marco del alojamiento y, en última instancia, de la gestión de infraestructura (si el COMITENTE lo ha suscrito).

### 11.2.3. Acceso remoto de terceros participantes en la prestación del servicio en el perímetro del COMITENTE

No se permite ningún acceso remoto de terceros participantes en la prestación del Servicio.

Si una necesidad técnica lo hiciera necesario, este tipo de acceso solo se realizaría tras notificación del COMITENTE con justificación y obtención de su consentimiento escrito.

# 12. Procedimiento de eliminación de datos al final del Contrato

Al final del Contrato, ya sea que este haya finalizado o por cualquier otra causa, el Prestador garantizará la eliminación segura de toda la información tratada en el marco del Servicio, incluidas las Datos técnicos del COMITENTE. El Prestador dará un aviso formal respetando un plazo de veintiún (21) días calendario. Los datos del COMITENTE se eliminarán en un plazo máximo de treinta (30) días después de la notificación. El Prestador proporcionará un certificado de eliminación de datos al COMITENTE.

# 13. Ley aplicable

## 13.1. En general

La ley aplicable y a la que está sometida esta Convención de servicio es el derecho francés.

## 13.2. Cumplimiento de la ley y regulaciones aplicables

El Prestador se compromete en los siguientes puntos:

- Identificación de las restricciones legales y regulatorias aplicables en el marco del Servicio;

- Cumplimiento de las restricciones legales y regulatorias aplicables a los datos confiados al Prestador, dentro de las responsabilidades de este último por un lado, y de las disposiciones previstas en el Contrato por otro lado;

- Cumplimiento de la Ley Informatique y Libertés y del RGPD;

- Implementación de medios de protección de datos personales;

- Implementación de un proceso de vigilancia legal y regulatoria;

- Tener y mantener relaciones adecuadas o una vigilancia con las autoridades sectoriales vinculadas a la naturaleza de los datos tratados en el marco del Servicio. Esto incluye, en particular, la ANSSI, el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando como subcontratista según el artículo 28 del Reglamento General de Protección de Datos (RGPD), el Prestador se compromete:

- A garantizar transparencia y trazabilidad;

- A designar un Oficial de Protección de Datos encargado de definir y implementar las medidas de protección de datos personales;

- A brindar asistencia y consejo al COMITENTE al alertarle si una instrucción de este último constituye una violación de las reglas de protección de datos personales si el Prestador tiene la capacidad de identificarlo;

- A garantizar la seguridad de los datos tratados (debido a la calificación SecNumCloud).

## 13.4. Protección frente al derecho extranjero

La sede social del Prestador está establecida en un Estado miembro de la Unión Europea. El capital social y los derechos de voto en la sociedad del Prestador no están, directa o indirectamente:

- individualmente detenidos en más del 24%;

- y colectivamente detenidos en más del 39%;

por entidades externas que tengan su sede social, administración central o principal establecimiento en un Estado no miembro de la Unión Europea.

En caso de que el Prestador, en el marco del Servicio, recurre a los servicios de una sociedad externa -incluido un subcontratista- con sede social, administración central o principal establecimiento en un Estado no miembro de la Unión Europea o que esté o sea controlada por una sociedad externa con sede en el exterior de la Unión Europea, el Prestador se compromete:

- a que dicha sociedad externa no tendrá ningún acceso a los datos operados;

- a disponer de una autonomía de explotación a través de la posibilidad de recurrir a otro subcontratista o de implementar rápidamente una alternativa tecnológica.

Para recordar, los datos en cuestión son aquellos confiados al Prestador por el COMITENTE así como todos los Datos técnicos que contienen información sobre los COMITENTES.

Para los fines de este artículo, el concepto de control se entiende como el mencionado en el II del artículo L233-3 del código de comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Para Cloud Temple, el PRESTATARIO

Para \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMITENTE