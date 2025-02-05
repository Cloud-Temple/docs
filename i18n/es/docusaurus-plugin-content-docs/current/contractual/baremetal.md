---
title: Convention de Service spécifique - Bare Metal
---

# 1. CONVENCIÓN DE SERVICIOS Bare Metal

  ------------------------------------------------------------------------------------------------------
  **Destinatarios :**                    **COMITENTE**
  -------------------------------------- ---------------------------------------------------------------
  **Referencia del documento**             CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Día MM AAAA - VF

  **Sus interlocutores**                 *Nombre* *Apellido*

                                         Account Manager

                                         e-mail : *nombre.apellido*\@cloud-temple.com

  **Fecha de la última actualización**       22/01/2025

  **Fecha de validación contractual**   Día MM AAAA
  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  **Versión**   **Fecha**     **Acción**                           **Autor**
  ------------- ------------ ------------------------------------ -----------------
  v1.0          22/01/2025   Redacción inicial                    Nicolas BODILIS
  ------------- ------------ ------------------------------------ -----------------
                                                                  

                                                                  

                                                                  
  ---------------------------------------------------------------------------------

# 2. TABLA DE CONTENIDOS

-   [1. **CONVENCIÓN DE SERVICIOS Bare**](#Xc3786c07943ae71dec5191b24567a7f31cb6100) Metal
-   [2. **TABLA DE CONTENIDOS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Preliminar y Glosario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Preliminar](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glosario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acrónimos](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Objeto de la presente Convención de servicio](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Auditoría](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Descripción del Servicio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modelo de responsabilidad compartida](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Presentación detallada del alcance del Servicio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Infraestructuras Datacenters](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Infraestructura de software de gestión del Servicio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Infraestructuras de cómputo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Infraestructura de almacenamiento](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Infraestructura de red global](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Implementación de soluciones de recuperación ante desastres o continuidad de actividad](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitaciones de los servicios en el modelo Bare Metal calificado](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Servicios gestionados en RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Configuración de respaldo](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)

    <!-- -->

    -   [7.4. Implementación del servicio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Requisitos técnicos](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)

    <!-- -->

    -   [7.5. Localización del servicio en Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Localización de los Datacenters que alojan el Servicio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Localización de las agencias Cloud Temple que operan el servicio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Soporte](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Naturaleza del soporte que acompaña el servicio](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Solicitud del servicio de soporte técnico](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Proceso de gestión de Incidentes](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Proceso de priorización de tratamientos](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Idioma y localización del servicio de soporte](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Compromisos y niveles de servicios](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Compromisos de disponibilidad de la infraestructura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Compromiso de disponibilidad de la interfaz COMITENTE](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Compromiso de disponibilidad del soporte](#Xfc8548982b300528a67725f1705f15805f405f0)
-   [9. Organización de la relación contractual](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Responsabilidades del Proveedor](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Limitación de responsabilidades del Proveedor](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Limitación de acceso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)

[9.4. Responsabilidades de los terceros que participan en la provisión del servicio Secure Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)

-   [9.5. Responsabilidades y obligaciones del COMITENTE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
-   [9.6. Derechos del COMITENTE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
-   [9.7. Borrado de datos al término del Contrato](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)

<!-- -->

-   [10. Ciclo de vida de la presente Convención de servicio](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Entrada en vigor de la Convención de servicio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Evoluciones de la Convención de servicio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Evoluciones desencadenadas por el COMITENTE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Evoluciones desencadenadas por el Proveedor](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilidad](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Disponibilidad, continuidad y restauración del servicio](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Gestión de Incidentes y de interrupciones](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1. Incidentes](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Tipos de Incidentes tratados en el marco de esta Convención de servicio](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Tratamiento de los incidentes](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Nivel de notificación de los Incidentes de seguridad](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Mantenimiento del Servicio](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Naturaleza del mantenimiento](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Accesos remotos de Cloud Temple en el ámbito del COMITENTE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Accesos remotos de terceros que participan en la prestación del servicio en el ámbito del COMITENTE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Procedimiento de borrado de datos al término del Contrato](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Ley aplicable](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. De manera general](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Cumplimiento de la ley y las regulaciones aplicables](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. RGPD](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protección frente a la ley extraeuropea](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. FIRMAS](#X7ad993788a708b47017c27c9d96178e8795e44f)

# 3. Preliminar y Glosario

## 3.1. Preliminar

El presente documento formaliza la Convención de servicio asociada al servicio Bare Metal en proceso de calificación SecNumCloud.

El Servicio está en proceso de calificación SecNumCloud (ver certificado en Anexo).

La presente convención de servicio complementa y es complementaria a las condiciones generales de venta y uso del Proveedor. Se entiende que los documentos contractuales se interpretan de manera coherente entre sí. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1.  Condiciones Generales de Venta y Uso (CGVU)
2.  Convención de Servicio SecNumCloud IaaS
3.  Convención de Servicio SecNumCloud OpenIaaS
4.  Convención de Servicio SecNumCloud PaaS
5.  Convención de Servicio específica - Bare Metal
6.  Convención específica particular
7.  Plan de Aseguramiento de Seguridad (PAS)
8.  Condiciones Particulares de Uso (CPU)
9.  Data Protection Agreement

## 3.2. Glosario

En la presente Convención de servicio, el **COMITENTE**, el **Proveedor** y las **Partes** están identificados en el Contrato al que es anexo la presente Convención de servicio.

Las expresiones utilizadas a continuación en la presente Convención de servicio se interpretarán de acuerdo con las definiciones que se les atribuyen a continuación:

-   **Cambio:** Cualquier adición, una modificación o eliminación que impacte el Servicio, habiendo sido autorizado, planificado o asumido.

-   **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de puesta en producción y los impactos (incluidos financieros) son conocidos y aceptados de antemano por las Partes. Luego se integra en el catálogo de cambios estándar, y puede, según el caso, tener un GTI y un GTR.
-   **Contrato:** designa el contrato suscrito por el PATROCINADOR con el Proveedor para permitir al PATROCINADOR beneficiarse del Servicio, y al cual se anexa el presente Acuerdo de Servicio.

-   **Convenio de servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y conforme a los requisitos del Referencial SecNumCloud.

-   **Solicitud de servicio:** solicitud de evolución que es objeto de un procedimiento, cuya realización: i) no modifica la CMDB, ii) el modo operativo, los costos y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de retroceso iii) la realización está sujeta a un acuerdo de nivel de servicio y se incluye en la tarifa del contrato cuando se realiza en horas hábiles y días laborales.

-   **Disponibilidad:** Capacidad para asegurar la disponibilidad y el mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

-   **Datos técnicos:** comprende el conjunto de datos manipulados para entregar el Servicio, notablemente la identidad de los beneficiarios y administradores de la infraestructura técnica, registros de la infraestructura técnica, configuración de accesos, directorio, certificados...

-   **Evento:** Un "evento" es cualquier ocurrencia detectable o identificable que puede ser importante para la gestión del Servicio.

-   **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales en una lama de cálculo.

-   **Incidente:** Cualquier evento imprevisto que interrumpe el funcionamiento normal del Servicio o compromete la seguridad de los datos.

-   **Incidente de seguridad:** Cualquier evento en el perímetro del Servicio:

    -   De naturaleza intencionalmente maliciosa;
    -   De naturaleza accidental que compromete la integridad, la confidencialidad o la trazabilidad del Servicio o de los datos del PATROCINADOR;
    -   Que compromete las medidas de seguridad existentes. Los compromisos de Disponibilidad de origen no malicioso no se consideran un Incidente de seguridad (fallo de hardware, error, mal funcionamiento, desastre natural...).

-   **Interfaz PATROCINADOR:** Interfaz de administración del Servicio puesta a disposición del PATROCINADOR por el Proveedor, que agrupa una consola de administración web y una API.

-   **Puesta en producción:** acción(es) de administración para realizar el Cambio cuando éste es aprobado (el cambio, en el sentido ITIL, se refiere sólo a la gestión del cambio y no a su realización/concreción).

-   **Problema:** causa de uno o más Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo) que requiere un análisis y una resolución para prevenir su recurrencia.

-   **Región:** designa un conjunto geográficamente delimitado de zonas de disponibilidad cloud, proporcionando servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad regulatoria local.

-   **Servicio:** designa el servicio Bare Metal en curso de cualificación SecNumCloud, entregado al PATROCINADOR por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, tal como se describe en la sección "Descripción del Servicio" del presente Acuerdo de servicio.

-   **Siniestro:** designa un evento grave de origen natural o humano, accidental o intencional, que causa pérdidas y daños importantes a la Parte afectada.

-   **Supervisión:** Vigilancia de un Sistema de Información o un Servicio, que implica la recopilación de diversos datos como medidas y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente en los elementos vigilados, una prerrogativa que pertenece a las operaciones de Administración.

-   **Tenant:** Una instancia aislada reservada para un usuario o grupo de usuarios, que comparten una infraestructura común mientras mantienen la independencia y seguridad de los datos y las aplicaciones.

-   **Zona de Disponibilidad (AZ) (Availability zone):** Una sección específica y aislada de la infraestructura de cloud computing, diseñada para asegurar la alta disponibilidad y resiliencia de los servicios mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  --------------------------------------------------------------------------------------------------------
  **Acrónimo**   **Definición**
  -------------- -----------------------------------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comité consultivo sobre los cambios

  **CMDB**       Configuration Management Database -- Base de datos de gestión de configuraciones

  **COPIL**      Comité de pilotaje

  **COSTRAT**    Comité estratégico

  **COPROJ**     Comité Proyecto

  **DB**         Database (base de datos)
                 
  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Plan de recuperación ante desastres)

  **GTE**        Garantía de Tiempo de Escalado

  **GTI**        Garantía de Tiempo de Intervención

  **GTR**        Garantía de Tiempo de Resolución

  **ITIL**       Information Technology Infrastructure Library - Buenas prácticas para la gestión de SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Mantenimiento en condiciones operativas

  **MOA**        Maestría de Obra

  **MOE**        Maestría de Ejecución

  **MSP**        Managed Services Provider

  **OS**         Operating system (sistema operativo)

  **PAQ**        Plan de Aseguramiento de la Calidad

  **PaaS**       Platform as a Service

  **PAS**        Plan de Aseguramiento de la Seguridad

  **PASSI**      Proveedor de Auditoría de Seguridad de Sistemas de Información

  **RFC**        Request For Change -- Solicitud de cambio

  **RGPD**       Reglamento General de Protección de Datos (personales)

  **RPO**        Recovery Point Objective -- Frescura de los datos restaurados en caso de Siniestro

  **RTO**        Recovery Time Objective -- Tiempo de recuperación del servicio en caso de Siniestro

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Acuerdo de niveles de servicio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Mantenimiento de Aplicaciones de Terceros

  **UO**         Unidad de Obra

  **VABE**       Validación de Aptitud para la Buena Explotabilidad

  **VABF**       Validación de Aptitud para el Buen Funcionamiento

  **VM**         Virtual Machine (Máquina virtual)

  **VSR**        Validación de Servicio Regular
  --------------------------------------------------------------------------------------------------------

# 5. Objeto del presente Acuerdo de servicio

El presente Acuerdo de servicio establece los términos y condiciones según los cuales el Proveedor se compromete a entregar el Servicio al PATROCINADOR. Su objeto es:

-   Precisar los requisitos de rendimiento esperados por el PATROCINADOR en términos de funcionalidad y fiabilidad del Servicio;

-   Enunciar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

-   Identificar las normas reglamentarias aplicables específicamente al Servicio entregado;

-   Asegurar uniformidad e integridad en la evaluación de la calidad del Servicio;

-   Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en el supuesto de que el Proveedor vea retirada su cualificación SecNumCloud, el Contrato podrá ser rescindido de pleno derecho, sin incurrir en sanciones, por el PATROCINADOR. En tal caso, el Proveedor se compromete a informar al PATROCINADOR de esta descalificación mediante el envío de una notificación oficial, por medio de una carta certificada con acuse de recibo.

Cabe señalar que una modificación o ajuste de la cualificación SecNumCloud no se interpretará como una revocación de la cualificación inicial.

# 6. Auditoría

El Proveedor se compromete a permitir al PATROCINADOR, o a cualquier auditor externo y no competidor del Proveedor que este último designe, consultar todos los documentos necesarios para certificar el cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Mediante la aceptación del presente Acuerdo de servicio, el PATROCINADOR confiere su autorización explícita a:

1.  La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) y a la entidad de cualificación competente para llevar a cabo la verificación de la conformidad del Servicio y de su sistema de información con el referencial SecNumCloud.
2.  Un proveedor de auditoría de la seguridad de sistemas de información, debidamente cualificado PASSI y expresamente designado por el Proveedor, para realizar auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio ofrecido por el Proveedor se caracteriza por la provisión de las siguientes prestaciones, las cuales se alinean con el principio de responsabilidad compartida presentado en el referencial SecNumCloud:

-   La provisión de recursos de cálculo (compute);

-   La puesta a disposición de espacios de almacenamiento;

-   El acceso a servicios de conectividad de red e internet;

-   El acceso a una consola de gestión de recursos desplegados;

El modelo de responsabilidades compartida aplicado entre el Proveedor y el PATROCINADOR en el marco del Servicio se presenta en §7.1.

Se entiende que el Proveedor movilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales y conforme a los requisitos del referencial SecNumCloud.
## 7.2. Presentación detallada del alcance del Servicio

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Compute                 Recurso de cálculo del Inquilino COMISIONADO
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Storage                 Datos de producción del Inquilino COMISIONADO

  Infraestructura de red  Recurso de red del Inquilino COMISIONADO

  Consola COMISIONADO     El servicio que permite al COMISIONADO acceder a su servicio Bare Metal y administrarlo a través de la interfaz de Consola

  Soporte                 El servicio de soporte que acompaña a los servicios anteriores y solo a estos (\*)
  -----------------------------------------------------------------------------------------------------------------------------------------------

(\*) Dentro del alcance del Servicio calificado SNC y de las responsabilidades del Proveedor en la materia\_

### 7.2.1. Infraestructuras de Centros de Datos

El Servicio incluye la provisión, para cada zona de disponibilidad, de los siguientes servicios en proceso de calificación:

-   Sitio de centro de datos ubicado en Francia para la Región FR, conforme a las últimas normas tecnológicas, ofreciendo un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
-   Provisión de salas técnicas dentro de centros de datos dedicados a recibir los equipos técnicos necesarios para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado y otros componentes necesarios;
-   Alimentación eléctrica segura, asegurada por dos circuitos eléctricos distintos, garantizando la continuidad del servicio;
-   Provisión de servicios de climatización, ajustados para cumplir con las normas y recomendaciones de los fabricantes de equipos, para mantener un entorno óptimo para los dispositivos técnicos;
-   Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva del rendimiento y la seguridad del servicio proporcionado.

El Proveedor asegura la provisión de servicios avanzados de detección y extinción de incendios, diseñados para identificar y neutralizar eficazmente cualquier inicio de fuego dentro de las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos y los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir riesgos de incendio, minimizar daños potenciales y asegurar la continuidad de las operaciones.

El COMISIONADO es informado de que todos los procedimientos y medidas de seguridad implementadas, incluidas las pruebas anuales de conmutación a los grupos electrógenos, son esenciales para garantizar la continuidad e integridad de los servicios proporcionados. Estas prácticas están diseñadas para minimizar los riesgos de fallos y asegurar una reactividad óptima en caso de Incidente. Al aceptar estas condiciones, el COMISIONADO reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. El COMISIONADO también es alentado a tomar conocimiento de las recomendaciones de seguridad proporcionadas e integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de gestión del Servicio

El Proveedor proporciona al COMISIONADO la consola de administración y la API necesarias para el uso del Servicio. También se compromete a mantener esta consola de administración y la API en condiciones óptimas de operación y a asegurar su seguridad de manera continua. Esta consola de administración y la API se denominan de manera conjunta como "interfaz COMISIONADO".

El Proveedor alerta al COMISIONADO sobre el hecho de que un uso anormal de la interfaz COMISIONADO, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o al Servicio. Es importante señalar que esta situación no constituye una indisponibilidad del Servicio, sino una acción de protección del Servicio y la infraestructura del Proveedor; por lo tanto, el COMISIONADO no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Proveedor aclara al COMISIONADO que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el COMISIONADO envía solicitudes idénticas a una frecuencia superior, su rechazo no podrá interpretarse como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cálculo

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el COMISIONADO, de los equipos necesarios para la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

-   La provisión de los chasis técnicos necesarios para el buen funcionamiento de las blades de cálculo;
-   La provisión de las blades de cálculo en las cantidades especificadas por el COMISIONADO y distribuidas según las zonas de disponibilidad de su elección. Cabe señalar que estas blades de cálculo están exclusivamente dedicadas al COMISIONADO;
-   La provisión de una consola tipo KVM para gestionar la administración del recurso de cálculo.

La elección del modelo de blade de cálculo, seleccionado del catálogo ofrecido por el Proveedor, es responsabilidad del COMISIONADO.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al COMISIONADO de una infraestructura de almacenamiento compartida de tipo SAN (Storage Area Network), ofreciendo varios niveles de rendimiento. Este servicio incluye:

-   La implementación y mantenimiento en condiciones operativas y de seguridad de la red SAN dedicada;
-   La instalación y gestión de las cabinas de almacenamiento compartidas entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, su supervisión y su metrología;
-   La implementación de sistemas automatizados para la asignación de LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del COMISIONADO, de acuerdo con los volúmenes suscritos por el COMISIONADO.

### 7.2.5. Infraestructura de red global

El Proveedor despliega en el marco del Servicio, una red global que facilita al COMISIONADO la accesibilidad de sus sistemas alojados. Este servicio incluye:

-   La provisión, mantenimiento en condiciones operativas y de seguridad de todas las conexiones de fibra óptica que interconectan las diferentes Zonas de disponibilidad;

-   La provisión, mantenimiento en condiciones operativas y de seguridad de los equipos técnicos necesarios para el buen funcionamiento de la red y la separación de los diferentes clientes.

La interconexión de red del Inquilino COMISIONADO, a Internet o a redes privadas, y los equipos de red, enlaces operadores y otros componentes técnicos que realizan esta interconexión, no forman parte del alcance del Servicio. Esta interconexión de red se implementa de acuerdo con las disposiciones previstas en el Contrato.

### 7.2.6. Implementación de soluciones de recuperación o continuidad de actividad

El Proveedor proporciona al COMISIONADO todas las soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos a través de varias Zonas de disponibilidad. Es responsabilidad del COMISIONADO gestionar eficazmente esta distribución de recursos, para lo cual tiene la posibilidad de utilizar las herramientas del Proveedor disponibles para este fin.

## 7.3. Limitaciones de los servicios en el modelo Bare Metal calificado

### 7.3.1. Servicios gestionados en RUN

Es importante tener en cuenta que están excluidos del Servicio:

-   El alojamiento de componentes físicos del COMISIONADO;

-   La interconexión de red del Inquilino COMISIONADO, a Internet o a redes privadas, incluyendo los enlaces operadores;

-   Cualquier servicio de tipo gestionado, o TMA;

-   Cualquier asistencia en los sistemas operativos instalados y superiores en la pila de responsabilidades, incluso si se trata de simple supervisión.

Dicho esto, no está en absoluto excluido que el COMISIONADO recurra a tales servicios dentro de la oferta MSP del Proveedor para intervenir en modo de servicios gestionados en sus Inquilinos. Estos servicios no estarán entonces enmarcados por el presente Acuerdo de servicio y sus compromisos/cláusulas bipartitas.

### 7.3.2. Configuración de respaldo

Por defecto, el Proveedor proporciona la implementación de los recursos de Bare Metal al COMISIONADO reservando los recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Es responsabilidad del COMISIONADO elegir las Zonas de disponibilidad a través de la interfaz COMISIONADO.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el COMISIONADO reconoce que deberá:

-   Declarar IPs fijas desde las cuales el Proveedor le permitirá acceder a la interfaz COMISIONADO (Filtrado por lista blanca). Las modificaciones de esta lista de IPs deberán realizarse a través del menú previsto para este fin en la consola o mediante Solicitudes de servicio para modificaciones posteriores. Al inicio del servicio, el Proveedor habrá sido informado de al menos una dirección IP descrita.

## 7.5. Localización del servicio en Francia

Se especifica que ninguna de las operaciones y ninguno de los componentes físicos involucrados en la provisión del Servicio, objeto del presente Acuerdo de servicio, está ubicado fuera de la Unión Europea.
Cela inclut notamment le support, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que ofrece el Servicio. En efecto, todo el almacenamiento, todas las tareas de administración, supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los Datacenters que albergan el Servicio

A falta de operaciones de los colaboradores y agencias del Proveedor, todas las operaciones de producción (incluyendo el almacenamiento y procesamiento de datos) y componentes técnicos que ofrecen el Servicio se ubican en los Datacenters basados en Francia.

### 7.5.2. Localización de las agencias de Cloud Temple operando el servicio

Los colaboradores de Cloud Temple que intervienen en el alcance del Servicio operan desde las agencias de Cloud Temple ubicadas exclusivamente en Francia. Estas agencias están situadas en Francia, en Tours, Lyon, Caen y París La Défense.

El COMITENTE es informado de la posibilidad de que los empleados de Cloud Temple trabajen a distancia. Sin embargo, el Proveedor garantiza el mismo nivel de seguridad en cuanto a los accesos remotos, especialmente en lo que respecta a los accesos VPN. Estos accesos remotos se implementan conforme a las exigencias del referencial SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte que acompaña el servicio

El Proveedor proporciona un servicio de soporte técnico destinado a asistir al COMITENTE en la gestión, resolución de problemas y optimización de sus recursos desplegados. Este servicio cubre una amplia gama de actividades, desde la asistencia en la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación, se describe las características y funcionalidades del servicio de soporte:

- Asistencia en la implementación inicial del uso del Servicio;
- Asistencia en la resolución de incidentes;
- Asistencia en la resolución de problemas;
- Seguimiento y asesoría sobre la optimización del entorno técnico.

En el marco del servicio de soporte, el Proveedor no sustituye al COMITENTE en el uso del Servicio. El COMITENTE sigue siendo completamente responsable de la configuración, la explotación de sus VM y sus Tenants, y la gestión de todos los elementos (datos y aplicaciones incluidas) que haya almacenado o instalado en las infraestructuras del Proveedor. El servicio de soporte técnico se proporciona según las Condiciones Generales de Venta y Uso, estando el Proveedor sujeto a una obligación de medios.

El COMITENTE se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose especialmente de solicitar servicios no contratados al Proveedor y de hacer intervenir a los equipos del Proveedor ante sus propios clientes o terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la contratación de las unidades de obra de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico es accesible mediante un sistema de tickets a través de la consola COMITENTE y está disponible durante las horas normales de oficina, excepto días festivos (8h - 18h; Lunes -- Viernes; calendario y horarios franceses). Para emergencias que ocurran fuera del horario laboral, especialmente los incidentes que afectan significativamente la producción, el servicio de guardia puede ser contactado mediante un número proporcionado al COMITENTE al iniciar el Servicio.

Para cada solicitud o Incidente, es imprescindible generar un ticket con el soporte del Proveedor. La iniciación de este ticket, que incluye toda la información necesaria, es esencial y marca el comienzo de la evaluación de los compromisos del Proveedor.

Tan pronto como el Proveedor recibe una solicitud o una notificación de un Incidente, ya sea mediante la consola de gestión o tras una llamada telefónica, se crea automáticamente un ticket. Durante la declaración de un Incidente, es crucial que el COMITENTE proporcione al proveedor la máxima información posible sobre el problema encontrado. Este paso es fundamental para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico eficaz.

El COMITENTE recibe entonces una confirmación por correo electrónico, indicando la creación del ticket y su número único. El COMITENTE puede consultar el estado y el historial de sus solicitudes y declaraciones de Incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de Incidentes

Durante una declaración de un Incidente, el equipo de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El COMITENTE debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando las pruebas solicitadas. El Proveedor puede acceder al Servicio del COMITENTE para diagnosticar el Incidente.

Si los Servicios del Proveedor se consideran funcionales y el Incidente no es imputable a él, el COMITENTE será informado. A solicitud del COMITENTE, el Proveedor puede ofrecer Servicios Profesionales para identificar el origen del problema, facturables previo acuerdo en tramos de 30 minutos.

En el caso de que el Incidente sea responsabilidad del Proveedor o de uno de sus subcontratistas, este completa el diagnóstico y se ocupa de la restauración del Servicio sin costos adicionales. El diagnóstico se basa en el intercambio entre las Partes y los datos del Proveedor, estos elementos se consideran probatorios por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de tratamientos

La determinación del nivel de prioridad de un caso se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de criticidad:

- Los niveles de impacto se definen de la siguiente manera:

  -----------------------------------------------------------------------------------------------------------------------------------------
  Nivel de impacto   Descripción
  ----------------- -----------------------------------------------------------------------------------------------------------------------
  Impacto I1         El o los servicios del Proveedor están interrumpidos

  Impacto I2         El o los servicios del Proveedor están degradados

  Impacto I3         El o los servicios del Proveedor están actualmente estables, pero muestran signos de potencial declive a largo plazo
  -----------------------------------------------------------------------------------------------------------------------------------------

- Los niveles de Criticidad se definen de la siguiente manera:

  -------------------------------------------------------------------------------------------------------------------------------
  Nivel de criticidad   Descripción
  --------------------- ---------------------------------------------------------------------------------------------------------
  Criticidad C1          El o los servicios del Proveedor se degradan a una velocidad preocupante

  Criticidad C2          El o los servicios del Proveedor se deteriora gradualmente con el tiempo

  Criticidad C3          El o los servicios del Proveedor presentan uno o varios inconvenientes sin consecuencias significativas
  -------------------------------------------------------------------------------------------------------------------------------

- Basado en un análisis exhaustivo de la situación, teniendo en cuenta los elementos que determinan el Impacto y la Criticidad, se asigna una prioridad al ticket de acuerdo con la siguiente matriz de decisión:

  --------------------------------------------------------------------------------------------
  Nivel de impacto  Nivel de criticidad   Impacto I1         Impacto I2         Impacto I3
  -------------------------------------- ----------------- ----------------- -----------------
  Criticidad C1                           Prioridad **P1**   Prioridad **P2**   Prioridad **P3**

  Criticidad C2                           Prioridad **P2**   Prioridad **P3**   Prioridad **P4**

  Criticidad C3                           Prioridad **P3**   Prioridad **P4**   Prioridad **P5**
  --------------------------------------------------------------------------------------------

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el siguiente capítulo.

### 7.6.5. Lengua y localización del servicio de soporte

El soporte es proporcionado por el Proveedor al COMITENTE como mínimo en lengua francesa. El soporte también puede ser proporcionado en lengua inglesa.

Las operaciones del servicio de soporte del Proveedor para la oferta de servicio de Bare Metal en proceso de calificación SecNumCloud se ubican en la Unión Europea.

# 8. Compromisos y niveles de servicios

El Proveedor se compromete a garantizar una vigilancia continua de la performance y la integridad de seguridad de su infraestructura técnica que ofrece el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, objeto de un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Proveedor, o tras una notificación por un usuario del COMITENTE. El comienzo de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, para garantizar un cómputo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor, o por un usuario, asegurando así una reanudación efectiva de las operaciones y una medida fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura
Le Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento conforme con los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican siempre que el CLIENTE implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la Región correspondiente.

En ausencia de respeto por estas condiciones por parte del CLIENTE, este se verá incapacitado para reclamar la aplicación de los SLAs correspondientes, los cuales están específicamente identificados con un asterisco (\*). El acceso a los SLAs se realiza a través de la interfaz del CLIENTE. Las medidas se entienden calculadas mensualmente:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilidad de la potencia de cálculo (Compute): tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilidad del almacenamiento: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
-   \*\*SLA 3 (\*) : IC-INFRA_SNC-03\*\* -- Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
-   **SLA 4 : IC-INFRA_SNC-04** -- Acceso a Internet: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.

***Notas*** :

-   *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento de internet para limitar el impacto de este ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al CLIENTE es atacada, el Proveedor puede recurrir a la técnica de "blackholing" a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP atacada en la red de sus proveedores, con el propósito de proteger los recursos del CLIENTE así como los recursos de otros CLIENTEs y la infraestructura del Proveedor. El Proveedor alienta encarecidamente al CLIENTE a adoptar medidas similares, tales como el uso de software de cortafuegos de aplicaciones web disponibles en el mercado y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*

-   *El Proveedor insiste en la necesidad de que el CLIENTE minimice la apertura de flujos, evitando especialmente hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde todo internet (subred 0.0.0.0/0), así como los protocolos internos tales como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz del CLIENTE

-   SLA 5 : IC-INFRA_SNC-05 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada del 97%, asegurada de manera continua, 24 horas al día y 7 días a la semana.
-   SLA 6 : IC-INFRA_SNC-06 -- Acceso a las APIs de gestión del Servicio: una disponibilidad del 99,9%, calculada sobre una base 24h/24, 7d/7.

## 8.3. Compromiso de disponibilidad del soporte

-   **SLA 7 : IC-INFRA_SNC-07** -- Aquí están los compromisos de rendimiento del soporte técnico del Proveedor para los incidentes, excluyendo mantenimientos programados:

  ------------------------------------------------------------------------------------
  Prioridad          Garantía de tiempo de intervención (GTI)   Objetivo de rendimiento
  ----------------- ---------------------------------------- -------------------------
  Prioridad **P1**   30min                                     95%

  Prioridad **P2**   2h                                        90%

  Prioridad **P3**   4h                                        90%

  Prioridad **P4**   24h                                       85%

  Prioridad **P5**   48h                                       85%
  ------------------------------------------------------------------------------------

-   **SLA 8 : IC-INFRA_SNC-08** -- Aquí están los compromisos de rendimiento del soporte técnico del Proveedor para las solicitudes de servicio:

  ---------------------------------------------------------------------------------------
                       Garantía de tiempo de intervención (GTI)   Objetivo de rendimiento
  -------------------- ---------------------------------------- -------------------------
  Solicitud de servicio 4h                                       90%

  ---------------------------------------------------------------------------------------

*Nota* :

-   *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula como la diferencia entre el momento en que el CLIENTE abre un ticket y la primera intervención del soporte del Proveedor.*
-   *La investigación de incidentes relacionados con los CLIENTEs no incluirá intervención remota en los servidores alojados del CLIENTE. Esta asistencia se limitará a la explicación de las métricas disponibles relativas al entorno del CLIENTE, para facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Sobre la base de los resultados de este análisis, se podrán sugerir recomendaciones.*

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Proveedor

El Proveedor se compromete a:

-   informar adecuadamente a su CLIENTE (por ejemplo, en caso de límite de capacidad de recursos técnicos que prestan el Servicio).

-   informar formalmente al CLIENTE y en un plazo de un mes, de cualquier cambio jurídico, organizacional o técnico que pueda impactar la conformidad del Servicio con los requisitos de protección contra leyes fuera de Europa (19.6 del referencial SNC v3.2).

-   proporcionar al CLIENTE interfaces y servicios que estén, como mínimo, en lengua francesa.

-   tener en cuenta los requisitos sectoriales específicos relacionados con los tipos de información confiada por el CLIENTE en la implementación del Servicio, dentro de los límites de las responsabilidades del Proveedor por una parte, y las disposiciones previstas en el Contrato por otra parte;

-   estudiar los requisitos sectoriales específicos relacionados con los tipos de información confiada por el CLIENTE en la implementación del Servicio, posteriormente expresados por el CLIENTE, e indicar a este último las acciones necesarias para su consideración.

-   no divulgar ninguna información relativa a la prestación a terceros, salvo autorización formal y escrita del CLIENTE.

-   poner a disposición toda la información necesaria para la realización de auditorías de conformidad según las disposiciones del artículo 28 del RGPD.

-   informar al CLIENTE, mediante el presente Acuerdo de servicio, de cualquier Incidente de seguridad que afecte al Servicio o al uso que el CLIENTE hace del Servicio (incluyendo los datos del CLIENTE).

-   autorizar a un proveedor de auditoría de la seguridad de los sistemas de información (PASSI) calificado, contratado por el Proveedor, para auditar el servicio así como su sistema de información, conforme al plan de control de SecNumCloud del Proveedor. Además, el Proveedor se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, realizadas por el CLIENTE o un tercero designado.

-   proporcionar, en calidad de encargado del tratamiento, conforme al artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y asesoramiento al CLIENTE alertándolo cuando una instrucción emitida por este último sea susceptible de constituir una violación de las normas de protección de datos.

-   notificar al CLIENTE en un plazo razonable, a través de la consola del CLIENTE o por correo electrónico al contacto del CLIENTE, cuando un proyecto impacte o pueda impactar el nivel de seguridad o disponibilidad del Servicio, o causar una pérdida de funcionalidad, los posibles impactos, las medidas de mitigación implementadas, así como los riesgos residuales que le conciernen.

-   documentar y poner en práctica todos los procedimientos necesarios para cumplir con los requisitos legales, reglamentarios y contractuales aplicables al servicio, así como las necesidades de seguridad específicas del CLIENTE, definidas por este último y previstas en el Contrato.

-   no utilizar los datos del CLIENTE derivados de la producción para realizar pruebas, a menos que se obtenga previamente la autorización explícita del CLIENTE, en cuyo caso el Proveedor se compromete a anonimizar estos datos y garantizar su confidencialidad durante el proceso de anonimización.

-   eliminar los datos y Datos técnicos relacionados con el CLIENTE, conforme al "procedimiento de borrado de datos al final del Contrato" descrito en el presente Acuerdo de servicio al finalizar o rescindir el Contrato.

-   asegurar un borrado seguro de la totalidad de los datos del CLIENTE mediante la reescritura completa de cualquier soporte que haya albergado sus datos en el marco del Servicio.

A solicitud del CLIENTE, formal y por escrito, el Proveedor se compromete a:

1.  Poner a disposición del CLIENTE el reglamento interno y la carta de ética del Proveedor;

2.  Poner a disposición del CLIENTE las sanciones en caso de infracción a la política de seguridad;

3.  Proporcionar al CLIENTE todos los eventos que le conciernen en los registros de servicio; el CLIENTE podrá consultar de manera autónoma los eventos relacionados con su uso del Servicio a través de las interfaces web y API del Servicio;

4.  Poner a disposición del CLIENTE los procedimientos para cumplir con los requisitos legales, reglamentarios y contractuales vigentes aplicables al Servicio, así como las necesidades de seguridad específicas del CLIENTE previstas en el Contrato;

5.  A proporcionar los elementos de apreciación de los riesgos relativos a la sumisión de los datos del PATROCINADOR al derecho de un estado no miembro de la Unión Europea;

6.  A informar al PATROCINADOR de los subcontratistas posteriores que participan en la prestación del Servicio, y a informarle de cualquier cambio que le afecte relativo a estos subcontratistas.

> El Proveedor y todas sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber, la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho, así como el respeto a los Derechos Humanos. El servicio prestado por el Proveedor es conforme a la legislación vigente en materia de derechos fundamentales y a los valores de la Unión Europea relativos al respeto a la dignidad humana, a la libertad, a la igualdad, a la democracia y al Estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor

Debido al conjunto de definiciones y condiciones mencionadas en el presente Acuerdo de servicio, las responsabilidades del Proveedor se limitan de la siguiente manera:

1.  El modelo de responsabilidad compartida, descrito en la sección «Modelo de responsabilidades compartidas» del presente Acuerdo de servicio, limita de hecho la implicación del Proveedor en las capas de funcionamiento que van "más allá" de la provisión de recursos de cómputo, red, almacenamiento y respaldo. Esto excluye en particular sin limitarse a:

    -   La gestión de lo que está instalado en las máquinas virtuales (OS, middlewares, aplicativos, etc.);

    -   La actualización de los OS y otros programas instalados por el PATROCINADOR en sus máquinas en sus Tenants;

    -   La seguridad de los programas, software y aplicativos instalados en las máquinas virtuales;

    -   La actualización de las máquinas virtuales;

    -   La copia de seguridad de los datos a nivel aplicativo.

2.  El Proveedor no puede ostentar la propiedad de los datos transmitidos y generados por el PATROCINADOR. De hecho, estos pertenecen a la propiedad del PATROCINADOR.

3.  El Proveedor subraya que en ningún caso puede explotar y/o disponer de los datos transmitidos y generados por el PATROCINADOR sin la validación previa de este último, entendiendo que su disposición es reservada al PATROCINADOR.

4.  El Proveedor no asume ninguna responsabilidad sobre los componentes alojados físicamente y gestionados por el Proveedor, pero que son propiedad directa del PATROCINADOR o de un tercero con el cual el PATROCINADOR tiene un contrato. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y está, de hecho, fuera del ámbito del presente Acuerdo de Servicio. Es responsabilidad del PATROCINADOR evaluar el nivel de adherencia o dependencia que estos componentes introducen en relación con el Servicio Bare Metal bajo cualificación SecNumCloud.

## 9.3. Limitación de acceso

Dentro del marco del Servicio, se prohíbe formalmente al Proveedor el acceso a los Tenants pertenecientes al PATROCINADOR sin autorización previa. Es responsabilidad del PATROCINADOR proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, si corresponde, de los servicios profesionales de soporte, si esta opción ha sido elegida por el PATROCINADOR.

El PATROCINADOR reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de los servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros involucrados en la prestación del servicio del Proveedor está estrictamente prohibido. En el caso de que una exigencia técnica específica requiera dicho acceso, este solo podría establecerse después de haber notificado claramente al PATROCINADOR, proporcionado una justificación detallada y obtenido su consentimiento por escrito.

Esta medida garantiza el control y la seguridad de los datos del PATROCINADOR, asegurándose de que cualquier excepción a la regla esté debidamente autorizada y documentada.

## 9.4. Responsabilidades de los terceros participantes en la prestación del servicio 

El Proveedor controla la lista de socios terceros participantes en la prestación del Servicio. Estos terceros son los editores, proveedores (del Proveedor) y otros proveedores que participan en la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

-   El Proveedor exige a los terceros participantes en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio;

-   El Proveedor firma contratos, con cada uno de los terceros participantes en la implementación del servicio, cláusulas de auditoría que permitan a un organismo de calificación verificar que estos terceros cumplen con los requisitos legales y los requisitos de SNC, permitiendo al Proveedor cumplir con sus compromisos en el presente Acuerdo de Servicio;

-   El Proveedor implementa un procedimiento para controlar regularmente las medidas puestas en marcha por los terceros participantes en la implementación del servicio para cumplir con los requisitos del Proveedor de cumplir con sus compromisos en el presente Acuerdo de Servicio;

-   El Proveedor asegura un seguimiento de los cambios realizados por los terceros participantes en la implementación del servicio que puedan afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del PATROCINADOR

El PATROCINADOR tiene las siguientes obligaciones dentro del marco del Servicio:

-   Cabe recordar que el Proveedor ofrece al PATROCINADOR una plataforma de cálculo (servidor sin OS) cuya configuración es responsabilidad del PATROCINADOR;

-   El PATROCINADOR autoriza a la ANSSI y al organismo de calificación SNC a auditar el Servicio y la infraestructura técnica que lo entrega;

-   El PATROCINADOR es responsable de indicar al Proveedor los posibles requisitos sectoriales específicos relacionados con los tipos de información confiada por el PATROCINADOR y que necesitan ser tomados en cuenta por el Proveedor;

-   El PATROCINADOR acepta no pedir al Proveedor requisitos o acciones que hagan que el Proveedor incumpla los requisitos del referencial SecNumCloud en su versión actual o que reduzcan el nivel de seguridad establecido por los requisitos de este mismo referencial.

## 9.6. Derechos del PATROCINADOR

En cualquier momento durante la relación contractual, el PATROCINADOR puede presentar una queja relacionada con el servicio calificado ante la ANSSI.

En cualquier momento, el PATROCINADOR puede solicitar al Proveedor que le haga accesible su reglamento interno y su carta de ética.

## 9.7. Borrado de datos al final del Contrato

Al finalizar el contrato, ya sea por vencimiento o por rescisión por cualquier motivo, el Proveedor se compromete a realizar el borrado seguro de todos los datos del PATROCINADOR, incluyendo los datos técnicos. El Proveedor se asegurará de comunicar al PATROCINADOR un aviso formal, respetando un plazo de veintiún (21) días naturales. Los datos del PATROCINADOR serán entonces eliminados en un plazo máximo de treinta (30) días tras esta notificación.

Para certificar esta eliminación, el Proveedor entregará al PATROCINADOR un certificado que confirme el borrado de los datos.

# 10. Ciclo de vida del presente Acuerdo de Servicio

## 10.1. Entrada en vigor del Acuerdo de Servicio

El presente Acuerdo de Servicio entra en vigor el día de su firma por el PATROCINADOR.

La recopilación, manipulación, almacenamiento y procesamiento de datos hechos en el contexto de la preventa, la implementación y la interrupción del Servicio se realizan de conformidad con la legislación vigente.

## 10.2. Evoluciones del Acuerdo de Servicio

Las modificaciones o adiciones al presente Acuerdo de Servicio se derivan exclusivamente de las solicitudes formuladas por los órganos de gobierno designados para este fin. Estas propuestas de cambio serán examinadas por las Partes, habilitadas para determinar los aspectos que requieren una formalización por escrito.

Se acuerda que cualquier evolución del Acuerdo de Servicio, tras su validación, que altere las condiciones financieras establecidas originalmente, requerirá el establecimiento y la firma de un anexo al Contrato en curso.

Los factores que pueden inducir una revisión de este Acuerdo de Servicio incluyen, sin limitarse a:

-   La evolución de la infraestructura técnica que entrega el Servicio Bare Metal;
-   Los ajustes realizados a los servicios desplegados por el Proveedor para proporcionar el Servicio;
-   Las variaciones en los compromisos asumidos y las sanciones aplicables;
-   Las reconfiguraciones organizacionales dentro del PATROCINADOR o del Proveedor;
-   La expansión o reducción del alcance del Servicio.

La gestión de las versiones y revisiones del Acuerdo de Servicio se consigna al inicio del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el PATROCINADOR

Las evoluciones del Acuerdo de Servicio pueden tener, en particular, los siguientes orígenes:

-   Una evolución de la infraestructura gestionada por el Proveedor;

-   Una modificación de los servicios implementados por el Proveedor;

-   Una modificación de los compromisos de niveles de servicios por el Proveedor.

### 10.2.2. Evoluciones desencadenadas por el Proveedor

Cualquier modificación del Acuerdo de Servicio está sujeta a la aceptación del PATROCINADOR. Se entiende que cualquier modificación o adición validada que modifique los elementos financieros del Contrato, pueda implicar la firma de un anexo al mismo.

## 10.3. Reversibilidad

Cloud Temple se compromete a permitir una revisión del presente Acuerdo de Servicio (previendo en particular su cancelación) sin penalización para el PATROCINADOR en caso de pérdida de la calificación SecNumCloud.
Les Services ne comprennent pas d'obligation de réversibilité (a saber, la ayuda al COMITENTE para que pueda migrar su sistema a otro Proveedor) a excepción de la puesta a disposición del COMITENTE por parte del Proveedor de la interfaz COMITENTE permitiendo al COMITENTE hacer copias de seguridad y recuperar sus datos incluyendo, en particular, los datos de configuración de su sistema de información vía uno de los modos técnicos siguientes a elección del COMITENTE: la puesta a disposición de archivos siguiendo uno o varios formatos documentados y explotables fuera del servicio proporcionado por el Proveedor o bien vía la implementación de interfaces técnicas permitiendo el acceso a los datos según un esquema documentado y explotable (API).

El COMITENTE, único responsable de su sistema, debe hacer todo lo posible para facilitar esta operación cuando sea necesario (lo que implica, en particular, que debe implementar una documentación rigurosa a tal efecto) y la elaboración de planes de reversibilidad. En caso de que el COMITENTE necesite un servicio adicional, el Proveedor puede ofrecer una misión de asesoría al respecto en el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes y de interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de esta Convención de servicio

-   Siniestras;

-   Averías y fallos;

-   Incidentes de seguridad impactando la disponibilidad, la confidencialidad o la integridad del Servicio.

#### 11.1.1.2. Tratamiento de los incidentes

> El Proveedor informa al COMITENTE lo antes posible, de los incidentes y interrupciones, mediante una notificación en la consola COMITENTE o por correo electrónico al contacto COMITENTE. El Proveedor informa al COMITENTE del tratamiento del incidente por el canal utilizado para notificar el incidente, o por el canal indicado en la notificación del incidente.

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad

El COMITENTE tiene la responsabilidad de elegir los niveles de gravedad de los Incidentes de seguridad para los cuales desea ser informado, por ejemplo vía su formalización en un SLA aplicable al Servicio.

Por defecto, el COMITENTE es informado:

-   De los incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de tratamientos de la presente Convención de servicio);

-   De los incidentes de seguridad impactando la confidencialidad o la integridad de los datos del COMITENTE confiados en el marco del Servicio;

-   De las violaciones de datos de carácter personal para las cuales el COMITENTE es responsable del tratamiento conforme al artículo 8 del Anexo DPA en el marco del Servicio;

-   

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

De las violaciones de datos de carácter personal para las cuales el Proveedor es responsable del tratamiento y que contengan datos personales del COMITENTE, conforme al artículo 8 del Anexo DPA. El mantenimiento asegurado consiste en la implementación:

-   Del plan de mantenimiento en condiciones operacionales del Servicio para asegurar buenos indicadores de disponibilidad tal como se compromete el Proveedor arriba;

-   Del plan de PCA/PRA si se contrata por el COMITENTE, activado según los eventuales incidentes que ocurrieran.

### 11.2.2. Accesos remotos de Cloud Temple en el perímetro del COMITENTE

El Proveedor prohíbe, en el marco de la presente Convención de servicio, cualquier acceso a los Tenants y al espacio de la interfaz del COMITENTE.

Corresponderá al COMITENTE proporcionar los accesos necesarios al personal del Proveedor. El COMITENTE reconoce que los accesos serán utilizados en el marco del alojamiento y finalmente de la gestión de servicios (si se contrata por el COMITENTE).

### 11.2.3. Accesos remotos de terceros participantes en la prestación del servicio en el perímetro del COMITENTE

No se autoriza ningún acceso remoto de terceros participantes en la prestación del Servicio.

Si una necesidad técnica hiciera necesario este caso, entonces este tipo de acceso se realizaría solo después de la notificación del COMITENTE, con justificación y obtención de su acuerdo escrito.

# 12. Procedimiento de eliminación de datos al finalizar el Contrato

Al finalizar el Contrato, ya sea porque el Contrato ha terminado o por cualquier otra causa, el Proveedor garantizara la eliminación segura de la totalidad de los datos tratados en el marco del Servicio, incluyendo los Datos técnicos del COMITENTE. El Proveedor dará un preaviso formal respetando un plazo de veintiún (21) días naturales. Los datos del COMITENTE serán eliminados en un plazo máximo de treinta (30) días tras la notificación. El Proveedor proporcionará un certificado de eliminación de datos al COMITENTE.

# 13. Derecho aplicable

## 13.1. De forma general

El derecho aplicable y al cual está sometida la presente Convención de servicio es el derecho francés.

## 13.2. Respeto del derecho y de las regulaciones aplicables

El Proveedor se compromete en los siguientes puntos:

-   La identificación de las restricciones legales y reglamentarias aplicables en el marco del Servicio;

-   El respeto de las restricciones legales y reglamentarias aplicables a los datos confiados al Proveedor dentro de los límites de responsabilidad de este último por una parte, y de las disposiciones previstas en el Contrato por otra;

-   El respeto de la Ley informática y libertad y del RGPD;

-   La implementación de medios de protección de datos personales;

-   La implementación de un proceso de vigilancia legal y reglamentaria;

-   Disponer y mantener relaciones apropiadas o una vigilancia con las autoridades sectoriales en relación con la naturaleza de los datos tratados en el marco Servicio. Esto incluye, en particular, a la ANSSI, el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando en calidad de subcontratante en el sentido del artículo 28 del Reglamento General de Protección de Datos (RGPD), el Proveedor se compromete:

-   A asegurar la transparencia y la trazabilidad;

-   A designar un DPO encargado de definir e implementar medidas de protección de datos de carácter personal;

-   Aportar asistencia y asesoramiento al COMITENTE alertándolo si una instrucción de este último constituye una violación de las normas de protección de datos personales si el Proveedor tiene los medios para identificarlo;

-   Una garantía de seguridad sobre los datos tratados (debido a la certificación SecNumCloud).

## 13.4. Protección frente al derecho extracomunitario

La sede estatutaria del Proveedor está establecida en un Estado miembro de la Unión Europea. El capital social y los derechos de voto en la sociedad del Proveedor no son, directa o indirectamente:

-   individualmente detenidos en más de un 24%;

-   y colectivamente detenidos en más de un 39%;

por entidades terceras que posean su sede estatutaria, administración central o establecimiento principal en un Estado no miembro de la Unión Europea.

En caso de que el Proveedor recurriese, en el marco del Servicio, a los servicios de una sociedad tercera - incluyendo un subcontratista - que posea su sede estatutaria, administración central o establecimiento principal en un Estado no miembro de la Unión Europea o que pertenezca o sea controlada por una sociedad tercera domiciliada fuera de la Unión Europea, el Proveedor se compromete:

-   a que dicha sociedad tercera no tendrá acceso a los datos operados;

-   a disponer de una autonomía de explotación a través de la posibilidad de recurrir a otro subcontratista o de implementar rápidamente una alternativa tecnológica.

Para recordatorio, los datos mencionados son aquellos que se confían al Proveedor por el COMITENTE así como todos los Datos técnicos que incluyen información sobre los COMITENTES.

Para los fines del presente artículo, la noción de control se entiende como se menciona en el II del artículo L233-3 del código de comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Por Cloud Temple, el PROVEEDOR

Por \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMITENTE