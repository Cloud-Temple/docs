---
title: Convención de Servicio SecNumCloud IaaS
---


# 1. CONVENCIÓN DE SERVICIOS IaaS

  -----------------------------------------------------------------------
  **Destinatarios :**            **PATROCINADOR**
  ------------------------------ ----------------------------------------
  **Referencia del documento**   CT.AM.JUR.ANX CdS-IaaS -
                                 20251701_v3.0.docx_Día DD AAAA

  **Sus interlocutores**         *Nombre* *Apellido*

                                 Account Manager

                                 e-mail : *nombre.apellido*@cloud-temple.com

  **Fecha de última actualización**      17/01/2025

  **Fecha de validación contractual**           Día DD AAAA
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Versión**   **Fecha**     **Acción**                           **Autor**
  ------------- ------------ ------------------------------------ --------------
  v0.1          07/06/2022   Redacción inicial                    Lorena ALCALDE

  v0.2          14/09/2022   Enriquecimiento                      Lorena ALCALDE

  v1.0          30/12/2022   Integración Indicadores              Lorena ALCALDE

  v1.1          23/01/2023   Modificación pie de página           Lorena ALCALDE

  v1.2          22/05/2023   Enriquecimiento                      Lorena ALCALDE

  v1.3          29/06/2023   Enriquecimiento                      Lorena ALCALDE

  v1.4          06/11/2023   Modificación Capital y               Lorena ALCALDE
                             Enriquecimiento

  v1.5          30/11/2023   Enriquecimiento                      Lorena ALCALDE

  v1.6          21/03/2024   Enriquecimiento                      Lorena ALCALDE

  v2.0          29/03/2024   Ajustes conformidad SNC              Nicolas
                                                                  ABRIOUX

  v2.0          03/04/2024   Publicación                          Lorena ALCALDE

  V3.0          17/01/2025   Enriquecimiento                      Emeline CAZAUX
  ------------- ------------ ------------------------------------ --------------
  ------------------------------------------------------------------------------

------------------------------------------------------------------------

# 2. TABLA DE CONTENIDOS

-   [1. **CONVENCIÓN DE SERVICIOS
    IaaS**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
-   [2. **TABLA DE
    CONTENIDOS**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
-   [3. Preliminar y
    Glosario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
    -   [3.1. Preliminar](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
    -   [3.2. Glosario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
-   [4. Acrónimos](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
-   [5. Objeto de la presente Convención de
    servicio](#X30e34f28e133265489633a87e3abd4d1a022de5)
-   [6. Auditoría](#X910e2801262de94af715f54b8fb509cc70cc79a)
-   [7. Descripción del
    Servicio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
    -   [7.1. Modelo de responsabilidad
        compartida](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
    -   [7.2. Presentación detallada del perímetro del
        Servicio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Infraestructuras
            Datacenters](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Infraestructura de software de gestión del
            Servicio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Infraestructuras de
            cómputo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Infraestructura de
            almacenamiento](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Infraestructura de red
            global](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Infraestructura de
            respaldo](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementación de soluciones de recuperación o
            continuidad de
            actividad](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitaciones de los servicios en el modelo IaaS
        calificado](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Servicios gestionados en
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Configuración del
            respaldo](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Configuración del
            respaldo](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Implementación del
        servicio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Prerrequisitos
            técnicos](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Localización del servicio en
        Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Localización de los Datacenters que hospedan el
            Servicio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
        -   [7.5.2. Localización de las agencias de Cloud Temple que operan el
            servicio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
    -   [7.6. Soporte](#X451baaab9b4764d97da95395b7e24265143a283)
        -   [7.6.1. Naturaleza del soporte que acompaña el
            servicio](#X192381358bcad693baa22b16773742f4c8cf227)
        -   [7.6.2. Solicitud del servicio de soporte
            técnico](#X03ef425751011df1818d9488df5625576c33f5e)
        -   [7.6.3. Proceso de gestión de
            Incidentes](#Xac759d2aee6d685130dea876d7a1ed03888b994)
        -   [7.6.4. Proceso de priorización de los
            tratamientos](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
        -   [7.6.5. Idioma y localización del servicio de
            soporte](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
-   [8. Compromisos y niveles de
    servicios](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Compromisos de disponibilidad de la
        infraestructura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Compromisos de disponibilidad de la interfaz del
        PATROCINADOR](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Compromisos de disponibilidad del
        soporte](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Compromisos de disponibilidad del almacenamiento de objetos
        S3](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Precisión sobre el compromiso de
        respaldo](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organización de la relación
    contractual](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Responsabilidades del
        Proveedor](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Limitación de las responsabilidades del
        Proveedor](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Limitación del
        acceso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Responsabilidades de terceros que participan en la prestación del
        servicio Secure
        Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. Responsabilidades y obligaciones del
        PATROCINADOR](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. Derechos del
        PATROCINADOR](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Borrado de datos al finalizar el
        Contrato](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Ciclo de vida de la presente Convención de
    servicio](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Entrada en efecto de la Convención de
        servicio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
    -   [10.2. Evoluciones de la Convención de
        servicio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
        -   [10.2.1. Evoluciones desencadenadas por el
            PATROCINADOR](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
        -   [10.2.2. Evoluciones desencadenadas por el
            Proveedor](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
    -   [10.3. Reversibilidad](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
-   [11. Disponibilidad, continuidad y restauración del
    servicio](#X115fcc8f59c1201dae17a3d86136d153be01044)
    -   [11.1. Gestión de Incidentes e
        interrupciones](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Incidentes](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Tipos de Incidentes tratados en el marco de
                esta Convención de
                servicio](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Tratamiento de los
                incidentes](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Nivel de notificación de Incidentes de
                seguridad](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Mantenimiento del
        Servicio](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Naturaleza del
            mantenimiento](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Accesos remotos de Cloud Temple sobre el perímetro del
            PATROCINADOR](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Accesos remotos de terceros participantes en la prestación del
            servicio sobre el perímetro del
            PATROCINADOR](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Procedimiento de borrado de datos al finalizar el
    Contrato](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Derecho aplicable](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. De manera
        general](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Respeto del derecho y las reglamentaciones
        aplicables](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. RGPD](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protección con respecto al derecho
        extra-europeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. FIRMAS](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminar y Glosario

## 3.1. Preliminar
Le presente documento formaliza la Convención de servicio asociada al
servicio IaaS calificado SecNumCloud bajo la denominación de « *Secure
Temple *».

El Servicio está calificado SecNumCloud (ver certificado en el Anexo).

Esta convención de servicio complementa y es complementaria a las
condiciones generales de venta y uso del Proveedor. Se entiende que los
documentos contractuales se interpretan de manera
coherente entre sí. En caso de contradicción o diferencia entre los
términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

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

En la presente Convención de servicio, el **PATROCINADOR**, el
**Proveedor** y las **Partes** están identificados en el Contrato
al cual está anexa la presente Convención de servicio.

Las expresiones abajo empleadas en la presente Convención de
servicio serán interpretadas conforme a las definiciones que se les
atribuyen a continuación:

-   **Cambio :** Cualquier adición, modificación o eliminación que
    impacte el Servicio, habiendo sido autorizado, planificado o tomado a cargo. 

-   **Cambio estándar:** Cambio objeto de un
    procedimiento, cuyas modalidades de puesta en producción y sus impactos
    (incluidos financieros) son conocidos y aceptados de antemano por las
    Partes. Es entonces integrado en el catálogo de los cambios estándares,
    y puede en algunos casos tener GTI y GTR.

-   **Contrato :** designa el contrato suscrito por el PATROCINADOR
    con el Proveedor para permitir al PATROCINADOR beneficiarse
    del Servicio, y al cual la presente Convención de servicio está anexa.

-   \***Convención de servicio :** Este documento, establecido en el marco de un
    contrato específico o de las Condiciones Generales de Venta y
    Uso (CGVU), y esto, en conformidad con los requisitos del
    Referencial SecNumCloud.

-   **Solicitud de servicio :** solicitud de evolución objeto de un
    procedimiento, cuya realización: i) no modifica el CMDB, ii) el
    modo operativo, los costos y los riesgos son conocidos y aceptados de antemano y no requieren modalidades de retroceso específicas iii) la realización está sujeta a un acuerdo de nivel de 
    servicio e incluida en el contrato cuando se realiza en horas hábiles
    y días laborales.

-   **Disponibilidad :** Capacidad para asegurar la disponibilidad y el
    mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los
    criterios y compromisos definidos en los Acuerdos de Nivel de
    Servicio (SLA).

-   **Datos técnicos** : comprende el conjunto de datos manipulados
    para entregar el Servicio, notablemente la identidad de los
    beneficiarios y los administradores de la infraestructura técnica,
    los registros de la infraestructura técnica, configuración de accesos,
    directorio, certificados\...

-   **Evento :** Un \"evento\" es cualquier ocurrencia detectable o
    identificable que pueda tener importancia para la gestión del
    Servicio.

-   **Hipervisor :** Sistema operativo que permite la ejecución de
    máquinas virtuales en una lámina de cálculo.

-   **Incidente :** Cualquier evento imprevisto que perturba el funcionamiento
    normal del Servicio o compromete la seguridad de los datos.

-   **Incidente de seguridad :** Cualquier evento dentro del perímetro del
    Servicio:

    -   De naturaleza intencionalmente maliciosa ;
    -   De naturaleza accidental que afecte la integridad, la
        confidencialidad o la trazabilidad del Servicio o de los datos del
        PATROCINADOR ;
    -   Que afecte las medidas de seguridad existentes. Las
        afectaciones a la Disponibilidad de origen no malicioso no son
        consideradas como un Incidente de seguridad (falla de hardware,
        error, mal funcionamiento, desastre natural...).

-   **Interfaz PATROCINADOR :** Interfaz de administración del Servicio
    puesta a disposición del PATROCINADOR por el Proveedor, que agrupa
    una consola de administración web y una API.

-   **Puesta en producción :** acción(es) de administración para la
    realización del Cambio cuando este es aprobado (el cambio, en el sentido
    ITIL, solo concierne a la gestión del cambio y no a su realización/concreción).

-   **Problema** : causa de uno o varios Incidentes recurrentes, causa
    de un Incidente potencial (situación de riesgo) que requiere un análisis
    y una resolución para evitar su recurrencia.

-   **Región :** designa un conjunto geográficamente delimitado de zonas
    de disponibilidad en la nube, proporcionando servicios de red, de
    cálculo y de almacenamiento para optimizar la latencia, el rendimiento y
    la conformidad regulatoria local.

-   **Servicio :** designa el servicio IaaS calificado SecNumCloud « Secure
    Temple », entregado al PATROCINADOR por el Proveedor desde infraestructuras
    técnicas mantenidas por el Proveedor, como se describe en la sección
    « Descripción del Servicio » de la presente Convención de servicio.

-   **Secure Temple** : designa al servicio IaaS calificado SecNumCloud,
    ofrecido por la empresa Cloud Temple, tal como está definido en
    el certificado que se puede consultar en el sitio del ANSSI y proporcionado en
    el anexo de la presente Convención de servicio.

-   **Sinistro :** designa un evento grave de origen natural o
    humano, accidental o intencional, causando pérdidas y
    daños importantes a la Parte afectada por el siniestro.

-   **Supervisión :** Vigilancia de un Sistema de Información o un
    Servicio, que implica la recopilación de diversos datos tales como
    mediciones y alarmas. Esta actividad se limita a la observación y
    el seguimiento, sin intervenir directamente en los elementos
    vigilados, una prerrogativa perteneciente a las operaciones de
    Administración. 

-   **Tenant :** Una instancia aislada reservada a un usuario o grupo
    de usuarios, compartiendo una infraestructura común mientras
    mantiene la independencia y la seguridad de los datos y las
    aplicaciones.

-   **Zona de Disponibilidad (AZ) (Availability zone) :** Una sección
    específica e isolada de la infraestructura de cloud computing, diseñada
    para asegurar la alta disponibilidad y la resiliencia de los servicios
    mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  -----------------------------------------------------------------------------
  **Acrónimo**   **Definición**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comité consultivo sobre los
                 cambios

  **CMDB**       Configuration Management Database -- Base de datos de
                 gestión de las configuraciones

  **COPIL**      Comité de pilotaje

  **COSTRAT**    Comité estratégico

  **COPROJ**     Comité Proyecto

  **DB**         Database (base de datos)

  **DPA**        Data Protection Agreement

  **DRP**        Disaster Recovery Plan (PRA) (Plan de recuperación ante desastres)

  **GTE**        Garantía de Tiempo de Escalada

  **GTI**        Garantía de Tiempo de Intervención

  **GTR**        Garantía de Tiempo de Resolución

  **ITIL**       Information Technology Infrastructure Library - Buenas
                 prácticas para la gestión de los SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Mantenimiento en condiciones operativas

  **MOA**        Dirección de la Obra

  **MOE**        Dirección de la Ejecución

  **MSP**        Managed Services Provider

  **OS**         Operating system (sistema operativo)

  **PAQ**        Plan de Aseguramiento de la Calidad

  **PaaS**       Platform as a Service

  **PAS**        Plan de Aseguramiento de Seguridad

  **PASSI**      Proveedor de Auditoría de Seguridad de los Sistemas de Información

  **RFC**        Request For Change -- Solicitud de cambio

  **RGPD**       Reglamento General de Protección de Datos (personales)

  **RPO**        Recovery Point Objective -- Frescura de los datos
                 restaurados en caso de Sinistro

  **RTO**        Recovery Time Objective -- Plazo de recuperación del servicio
                 en caso de Sinistro

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Acuerdo de niveles de servicio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Tercero de Mantenimiento de Aplicaciones

  **UO**         Unidad de Obra

  **VABE**       Validación de Aptitud para la Buena Operatividad

  **VABF**       Validación de Aptitud para el Buen Funcionamiento

  **VM**         Virtual Machine (Máquina virtual)

  **VSR**        Validación de Servicio Regular
  -----------------------------------------------------------------------------

# 5. Objeto de la presente Convención de servicio

La presente Convención de servicio establece los términos y condiciones según
los cuales el Proveedor se compromete a entregar el Servicio al PATROCINADOR.
Su objeto es:

-   Precisar las exigencias de rendimiento esperadas por el PATROCINADOR
    en términos de funcionalidad y confiabilidad del Servicio;

-   Enunciar las obligaciones del Proveedor para satisfacer los
    niveles de servicio acordados;

-   Identificar las normas regulatorias aplicables específicamente al
    Servicio entregado;

-   Asegurar una uniformidad e integridad en la evaluación de la
    calidad del Servicio;

-   Garantizar la excelencia de los servicios prestados, evaluada mediante
    indicadores de rendimiento cuantitativos.

Se estipula que, en el supuesto de que el Proveedor se viera
retirar su calificación SecNumCloud, el Contrato podrá ser rescindido de
pleno derecho, sin incurrir en penalidades, por el MANDANTE. En tal
eventualidad, el Prestador se compromete a informar al MANDANTE
de esta descalificación mediante el envío de una notificación oficial,
a través de una carta certificada con acuse de recibo.

Cabe señalar que una modificación o ajuste de la
calificación SecNumCloud no será interpretado como una revocación de
la calificación inicial.

# 6. Auditoría

El Prestador se compromete a permitir al MANDANTE, o a cualquier auditor
tercero y no competidor del Prestador que este último haya designado, consultar
todos los documentos necesarios para la certificación del
cumplimiento íntegro de las obligaciones relacionadas con la conformidad con las
disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Al aceptar el presente Acuerdo de Servicios, el MANDANTE
otorga su autorización explícita a:

1.  La Agencia Nacional de la Seguridad de los Sistemas de Información (ANSSI)
    así como a la entidad de calificación competente para llevar a cabo la
    verificación de la conformidad del Servicio y de su sistema
    de información con el referencial SecNumCloud.
2.  Un proveedor de auditoría de la seguridad de los sistemas de información,
    debidamente calificado PASSI y expresamente designado por el Prestador,
    para llevar a cabo auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio ofrecido por el Prestador se caracteriza por la disposición de las siguientes prestaciones, las cuales se alinean con el
principio de responsabilidad compartida presentado en el referencial
SecNumCloud:

-   La provisión de recursos de cómputo (compute);

-   La Disposición de espacios de almacenamiento;

-   El acceso a servicios de conectividad a red e Internet;

-   La oferta de un servicio de respaldo dedicado para las máquinas virtuales.

El modelo de responsabilidades compartidas aplicado entre el Prestador y el
MANDANTE en el marco del Servicio se presenta en el §7.1.

Se entiende que el Prestador movilizará su pericia para realizar
las Prestaciones según las mejores prácticas profesionales y
de acuerdo con los requerimientos del referencial SecNumCloud.

## 7.2. Presentación detallada del alcance del Servicio

  -----------------------------------------------------------------------------
  Compute          Recurso de cómputo del Tenant MANDANTE 
  ---------------- ------------------------------------------------------------
  Storage          Datos de producción del Tenant MANDANTE

  Almacenamiento   Disposición de una infraestructura de almacenamiento
  objeto S3        objeto soberana multi AZ y compatible con las API estándar S3.

  Backup           Módulo suscripción al almacenamiento masivo adecuado 

  Infraestructura  Recurso de red del Tenant MANDANTE 
  de red 

  Consola          El servicio que permite al MANDANTE acceder a su 
  MANDANTE         servicio IaaS y administrarlo a través de la interfaz Shiva

  Soporte          El servicio de soporte que acompaña a los servicios anteriores 
                   y solamente a estos (\*)
  -----------------------------------------------------------------------------

\_(\*) Dentro del alcance del Servicio calificado SNC y las responsabilidades del Prestador en la materia\_

### 7.2.1. Infraestructuras de Centros de Datos

El Servicio incluye la puesta a disposición, para cada Zona de Disponibilidad, 
de las prestaciones calificadas a continuación: 

-   Sitio de centro de datos ubicado en Francia para la Región FR, conforme a
    las últimas normas tecnológicas, con un nivel de
    resiliencia igual o superior al nivel Tier 3 del Uptime Institute;
-   Disposición de salas técnicas dentro de centros de datos
    dedicados a la acogida de los equipos técnicos necesarios para
    la producción del servicio, incluyendo cómputo, almacenamiento, red, cableado
    y otros componentes necesarios;
-   Suministro eléctrico seguro, garantizado por dos circuitos
    eléctricos distintos, asegurando la continuidad del servicio;
-   Provisión de servicios de climatización, ajustados para cumplir con las
    normativas y recomendaciones de los fabricantes de equipos, para
    mantener un entorno óptimo para los dispositivos técnicos;
-   Supervisión continua y metrología detallada, permitiendo un seguimiento
    preciso y una gestión proactiva del rendimiento y la seguridad
    del servicio proporcionado.

El Prestador asegura la prestación de servicios avanzados de
detección y extinción de incendios, diseñados para identificar y
neutralizar eficazmente cualquier conato de incendio en las instalaciones.
Estos sistemas son esenciales para garantizar la seguridad de los equipos
y los datos. Incluyen detectores de humo de alta
precisión y dispositivos de extinción que pueden actuar rápidamente
sin dañar el equipo informático. Este servicio es crucial para
prevenir riesgos de incendio, minimizar los daños potenciales y
garantizar la continuidad de las operaciones.

El MANDANTE es informado que todos los procedimientos y medidas de
seguridad implementadas, incluidas las pruebas anuales de respaldo sobre
los grupos electrógenos, son esenciales para garantizar la continuidad
e integridad de los servicios prestados. Estas prácticas están diseñadas para
minimizar los riesgos de fallo y asegurar una óptima respuesta en caso
de Incidente. Al aceptar estas condiciones, el MANDANTE reconoce
la importancia de estas medidas y se compromete a cooperar plenamente para
facilitar su implementación. El MANDANTE también es alentado a
tomar nota de las recomendaciones de seguridad proporcionadas e
integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de administración del Servicio

El Prestador proporciona al MANDANTE la consola de administración y
la API necesaria para el uso del Servicio. También se compromete a mantener
esta consola de administración y la API en condiciones
óptimas de funcionamiento y a asegurar su seguridad de manera continua.
Esta consola de administración y la API se designan conjuntamente
con el término « interfaz MANDANTE ».

El Prestador alerta al MANDANTE sobre el hecho de que un uso
anormal de la interfaz MANDANTE, especialmente en caso de sobrecarga de
sus APIs de comando (hammering), puede desencadenar medidas de
seguridad automáticas que resulten en el bloqueo del acceso a las APIs de
comando o al Servicio. Cabe destacar que esta situación no
constituye una indisponibilidad del Servicio sino una acción de
protección del Servicio y de la infraestructura del Prestador; por
consiguiente, el MANDANTE no puede considerarla como una
indisponibilidad en sus cálculos.

Además, el Prestador precisa al MANDANTE que las solicitudes
perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a
una por segundo (Throttling). Si el MANDANTE somete solicitudes
idénticas a una frecuencia superior, su rechazo no podrá ser
interpretado como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cómputo

El Servicio incluye el suministro, en las zonas de disponibilidad
subscripta por el MANDANTE, de los equipos necesarios para
la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

-   La provisión de los chasis técnicos necesarios para el correcto
    funcionamiento de las hojas de cálculo;
-   La provisión de hojas de cálculo en las cantidades especificadas por
    el MANDANTE y distribuidas según las zonas de disponibilidad de
    su elección. Cabe señalar que estas hojas de cálculo son
    exclusivamente dedicadas al MANDANTE;
-   La disposición de sistemas operativos de tipo
    hipervisores, así como la garantía del mantenimiento en condiciones de
    operación y de seguridad de la infraestructura de software necesaria
    para la administración de estos sistemas operativos. Cabe destacar
    que, si bien el Prestador es responsable del mantenimiento operativo
    y de la seguridad global del Servicio, no posee ningún conocimiento específico
    sobre los entornos de producción del MANDANTE ni de los requisitos
    relacionados con sus cargas de trabajo. Por lo tanto, la responsabilidad de
    decidir sobre la actualización de los sistemas operativos de las hojas de
    cálculo hipervisor, una acción que puede requerir un reinicio,
    recae por completo en el MANDANTE. Esta
    operación puede ser realizada a través de la Interfaz MANDANTE.

La elección del modelo de hoja de cálculo, seleccionado entre el catálogo
propuesto por el Prestador, recae en la responsabilidad del
MANDANTE.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye el suministro al MANDANTE de una infraestructura
de almacenamiento compartida de tipo SAN (Storage Area Network), que ofrece diversos
niveles de rendimiento. Este servicio abarca:

-   La implementación y el mantenimiento en condiciones operativas y 
    de seguridad de la red SAN dedicada;
-   La instalación y gestión de las cabinas de almacenamiento compartidas entre
    los clientes, incluyendo su mantenimiento en condiciones operativas yer
    de seguridad, su supervisión y su medición;
-   La implementación de sistemas automatizados para la asignación de LUNs
    (Logical Unit Numbers) de almacenamiento dedicados al uso del
    MANDANTE, conforme a los volúmenes subscriptos por el
    MANDANTE.

### 7.2.5. Infraestructura de red global

El Prestador despliega en el marco del Servicio, una red global
que facilita al MANDANTE la accesibilidad de sus sistemas
alojados. Este servicio incluye:

-   La provisión, el mantenimiento en condiciones operativas y de
    seguridad de todos los enlaces de fibra óptica
    interconectar las diferentes Zonas de disponibilidad;

-   El suministro, el mantenimiento en condiciones operativas y en
    condiciones de seguridad de los equipos técnicos necesarios para el buen
    funcionamiento de la red y la separación de los diferentes clientes.

La interconexión de red del Tenant SPONSOR, a Internet o a redes
privadas, y los equipos de red, enlaces de operadores y otros
componentes técnicos que realizan esta interconexión, no forman parte
del alcance del Servicio. Esta interconexión de red se implementa de
acuerdo con las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo

El Proveedor pone a disposición del SPONSOR un servicio de
respaldo integrado, dedicado y gestionado, destinado a la protección de sus
máquinas virtuales. El Proveedor asegura el mantenimiento en condiciones
operativas y en condiciones de seguridad de este servicio de respaldo.
El Proveedor garantiza que los respaldos del SPONSOR estarán
ubicados fuera de la Zona de disponibilidad de las cargas de trabajo
respaldadas, siempre y cuando el SPONSOR haya suscrito a las Unidades
de obra adecuadas.

Este servicio de respaldo se limita al respaldo de las máquinas
virtuales y de las configuraciones de topología del entorno IaaS
de los Tenants del SPONSOR en el marco del Servicio. La elaboración y
aplicación de una política de respaldo adecuada por parte del
SPONSOR dependen de la suscripción a unidades de obra
específicas. Por tanto, es responsabilidad del SPONSOR asegurarse
de la disponibilidad de los recursos técnicos necesarios con el
Proveedor para implementar su política de respaldo o ajustar
esta última en función de los medios disponibles.

El Proveedor se compromete a notificar al SPONSOR en caso de
restricciones de capacidad y a proporcionar asesoramiento para
la optimización de los recursos. Las obligaciones del Proveedor se
limitarán a la implementación de las necesidades expresadas por el SPONSOR
en materia de política de respaldo, en el marco de los recursos
suscritos.

### 7.2.7. Implementación de soluciones de recuperación ante desastres o continuidad del negocio

El Proveedor proporciona al SPONSOR todas las soluciones
técnicas necesarias para garantizar una distribución óptima de sus
recursos a través de diversas Zonas de disponibilidad. Es responsabilidad del
SPONSOR gestionar eficazmente esta distribución
de recursos, para lo cual tiene la posibilidad de explotar las herramientas
del Proveedor disponibles para este uso.

## 7.3. Limitaciones de los servicios en el modelo IaaS calificado

### 7.3.1. Servicios gestionados en RUN

Es importante señalar que están excluidos del Servicio:

-   El alojamiento de componentes físicos del SPONSOR;

-   La interconexión de red del Tenant SPONSOR, a Internet o a redes
    privadas, incluyendo los enlaces de operador;

-   Cualquier servicio de tipo gestionado o TMA;

-   Cualquier asistencia en las máquinas virtuales a nivel del sistema operativo y
    por encima en la pila de responsabilidades de IaaS, incluso si se trata de
    mera supervisión.

Dicho esto, no se excluye en absoluto que el SPONSOR pueda
recurrir a tales servicios a través de la oferta MSP del Proveedor para
intervenir en modo servicios gestionados en sus Tenants. Estos servicios no
estarán entonces regulados por este Acuerdo de servicio y sus
compromisos/cláusulas bipartitas.

### 7.3.2. Configuración de respaldo

Por defecto, el Proveedor proporciona la instalación de los recursos de
IaaS al SPONSOR reservando recursos y configurando las
implementaciones para usar las Zonas de disponibilidad. Es responsabilidad del
SPONSOR elegir las Zonas de disponibilidad a través de la interfaz
SPONSOR.

### 7.3.3. Configuración del respaldo

El servicio de respaldo se limita al respaldo de las máquinas
virtuales y de las configuraciones de topología que representan
el entorno IaaS de los Tenants del SPONSOR en el marco del
Servicio.

El servicio de respaldo y la implementación de la política de
respaldos del SPONSOR está sujeta a la suscripción de espacio de
almacenamiento en el almacenamiento masivo necesario para garantizar el
servicio. Por tanto, es responsabilidad del SPONSOR suscribirse con el
Proveedor a los medios técnicos necesarios para implementar la política
de respaldo en su perímetro informático, o ajustar la política de
respaldo a los medios implementados. El Proveedor se compromete a informar
al SPONSOR en caso de límite de capacidad técnica.

El Proveedor implementará los medios técnicos y humanos
necesarios para el respaldo del sistema hospedado dentro del límite de
los recursos suscritos por el SPONSOR.

Además, en los casos de áreas no cubiertas por el
Proveedor, corresponde al SPONSOR definir su propia
estrategia de respaldo y configurar por sí mismo los respaldos de las VM
o realizar una Solicitud de servicio con el Proveedor para que la
configuración de los respaldos para los servidores físicos se implemente,
siempre que el SPONSOR disponga de un contrato de servicio gestionado
que permita al Proveedor actuar a través de la interfaz SPONSOR, que es
la consola de administración que se proporciona en el marco de este
Acuerdo de servicio y que dispone de funcionalidades para configurar
los respaldos.

Además, este servicio solo tendrá el compromiso de traducir mediante la
configuración a través de la interfaz SPONSOR, la configuración
especificada claramente por el SPONSOR.

Por motivos de flexibilidad de la oferta del Proveedor, el
SPONSOR tiene la opción de asociar una política de no respaldo en
algunas de sus VM. En este caso, corresponde al SPONSOR
asumir esta elección. El Proveedor no respaldará las VM asociadas
a la política "no backup". El Proveedor advierte al SPONSOR que
elegir la política “no backup” o elegir respaldar manualmente expone al
SPONSOR a una pérdida definitiva de datos en caso de Incidente
en las capas bajas o en las capas que dependan de su responsabilidad en
el modelo IaaS. En tal caso, será imposible responsabilizar al Proveedor
de restaurar los datos ya que no habrá nada que restaurar. El Proveedor
recomienda respaldar siempre las VM.

Para cualquier asunto relacionado con el SO instalado en una máquina
virtual y cualquier software o programa ejecutado "por encima del SO", es
responsabilidad del SPONSOR llevar a cabo las operaciones de
administración y supervisión dentro de la Unión Europea si desea
garantizar que toda la verticalidad de las capas del SI sea operada y
gestionada desde la Unión Europea. Las operaciones de
administración fuera del perímetro de responsabilidad del Proveedor en
el marco del presente Acuerdo de servicio se indican en la sección
“Modelo de responsabilidades compartidas” de este Acuerdo de Servicio.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el SPONSOR reconoce que deberá:

-   Funcionar con una virtualización de tipo VMware en las versiones
    soportadas por el proveedor y suministradas por el Proveedor en el
    marco del Servicio;

-   Recurrir a través del Proveedor a la utilización de la herramienta de
    respaldo;

-   Declarar IPs fijas desde las cuales el Proveedor permitirá
    acceder a la interfaz SPONSOR (Filtrado por lista blanca).
    Las modificaciones de esta lista de IP deberán realizarse a través del
    menú previsto a tal efecto en la consola o mediante Solicitudes de
    servicio para las modificaciones posteriores. Al iniciar el
    servicio, el Proveedor habrá sido informado de al menos 1
    dirección IP tal como se describe.

## 7.5. Localización del servicio en Francia

Se especifica que ninguna de las operaciones ni ninguno de los componentes
físicos involucrados en la prestación del Servicio, al que se refiere el presente
Acuerdo de servicio, están ubicados fuera de la Unión
Europea.

Esto incluye principalmente el soporte, la supervisión operativa y la
supervisión de seguridad (SOC) de la infraestructura técnica que brinda el
Servicio. De hecho, todo el almacenamiento, todas las tareas de administración,
supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los Datacenters que albergan el Servicio

A excepción de las operaciones de los colaboradores y agencias del
Proveedor, todas las operaciones de producción (que incluyen el
almacenamiento y el procesamiento de datos) y los componentes técnicos
que brindan el Servicio están ubicados en los Datacenters basados en Francia.

### 7.5.2. Localización de las agencias de Cloud Temple que operan el servicio

Los colaboradores de Cloud Temple que intervienen en el perímetro
del servicio operan desde las agencias de Cloud Temple, todas
ubicadas exclusivamente en Francia. Estas agencias están ubicadas en
Francia, en Tours, Lyon, Caen y París La Défense.

El SPONSOR está informado de la posibilidad de que los empleados de Cloud
Temple trabajen a distancia. Sin embargo, el Proveedor garantiza el
mismo nivel de seguridad respecto a los accesos remotos, particularmente
en cuanto a los accesos VPN. Estos accesos remotos se realizan
conforme a las exigencias del referencial SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte que acompaña al servicio

El Proveedor brinda un servicio de soporte técnico destinado a asistir al
SPONSOR en la gestión, solución de problemas y optimización de
sus recursos desplegados. Este servicio cubre una amplia gama
de actividades, desde asistencia en la configuración inicial de los servicios
hasta soporte técnico avanzado para resolver problemas específicos.

Aquí se describe las características y funcionalidades del servicio
de soporte:

-   Asistencia para la implementación inicial del uso del Servicio;
-   Asistencia para la resolución de incidentes;
-   Asistencia para la resolución de problemas;
-   Seguimiento y asesoramiento sobre la optimización de la base técnica.
Dans el ámbito del servicio de soporte, el Proveedor no se sustituye
al CLIENTE en el uso del Servicio. El CLIENTE sigue siendo
totalmente responsable de la configuración, la explotación de sus VM
y de sus Tenants, y de la gestión de todos los elementos (datos y
aplicaciones incluidas) que haya almacenado o instalado en las
infraestructuras del Proveedor. El servicio de soporte técnico se
proporciona de acuerdo con los Términos y Condiciones Generales de Venta y
Uso, estando el Proveedor sujeto a una obligación de medios.

El CLIENTE se compromete a utilizar el servicio de soporte técnico de
manera razonable, absteniéndose en particular de solicitar servicios
no suscritos al Proveedor y de hacer intervenir a los equipos
del Proveedor con sus propios clientes o terceros no incluidos en
el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud
de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de
las unidades de obra de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico es accesible a través de un sistema de tickets
mediante la consola del CLIENTE y está disponible durante las horas
normales de oficina fuera de días festivos (8h - 18h; Lunes -- Viernes;
calendario y horarios franceses). Para emergencias que ocurran fuera
de las horas laborables, en particular los incidentes que afecten significativamente
la producción, el servicio de guardia puede ser contactado a través de un número
comunicado al CLIENTE al inicio del Servicio.

Para cada solicitud o Incidente, es imperativo generar un ticket
con el soporte del Proveedor. La creación de este ticket,
incluyendo toda la información necesaria, es esencial y
marca el inicio de la evaluación de los compromisos del Proveedor.

Tan pronto como el Proveedor recibe una solicitud o notificación
de Incidente, ya sea a través de la consola de gestión o como
resultado de una llamada telefónica, se crea automáticamente un ticket. Al
declarar un Incidente, es esencial que el CLIENTE
proporcione al proveedor el máximo de detalles sobre el problema
encontrado. Este procedimiento es crucial para permitir una evaluación
adecuada de la situación, su priorización y un diagnóstico eficaz.

El CLIENTE recibe entonces una confirmación por correo electrónico, indicando
la creación del ticket y su número único. El CLIENTE puede
consultar el estado y el historial de sus solicitudes y declaraciones
de Incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de Incidentes

Al declarar un Incidente, el equipo de soporte técnico del
Proveedor inicia una investigación para identificar la causa del
problema y establecer un diagnóstico. El CLIENTE debe colaborar
activamente con el Proveedor proporcionando toda la información
necesaria y realizando las pruebas requeridas. El Proveedor puede
acceder al Servicio del CLIENTE para diagnosticar el Incidente.

Si los Servicios del Proveedor se consideran funcionales y el Incidente
no es imputable a él, se informará al CLIENTE. A solicitud
del CLIENTE, el Proveedor puede ofrecer Servicios Profesionales para identificar
el origen del problema, facturable previo acuerdo por tramo de 30 min.

En el caso de que el Incidente sea responsabilidad del Proveedor o de
alguno de sus subcontratistas, éste completará el diagnóstico y se dedicará
a la restauración del Servicio sin costo adicional. El diagnóstico
se basa en los intercambios entre las Partes y los datos del
Proveedor, estos elementos se consideran probatorios por acuerdo de
las Partes.

### 7.6.4. Proceso de priorización del tratamiento

La determinación del nivel de prioridad de un expediente se basa en un
análisis matricial que evalúa el impacto del Incidente y su grado de
criticidad:

-   Los niveles de impacto se definen de la siguiente manera:

  -------------------------------------------------------------------------
  Nivel     Descripción
  de
  impacto
  ---------- --------------------------------------------------------------
  Impacto I1  El o los servicios del Proveedor están interrumpidos

  Impacto I2  El o los servicios del Proveedor están degradados

  Impacto I3  El o los servicios del Proveedor están actualmente estables,
             pero muestran signos de potencial declive a largo plazo
  -------------------------------------------------------------------------

-   Los niveles de Criticidad se definen de la siguiente manera:

  -----------------------------------------------------------------------
  Nivel de   Descripción
  criticidad
  ----------- -----------------------------------------------------------
  Criticidad El o los servicios del Proveedor se degradan a una
  C1          velocidad preocupante

  Criticidad El o los servicios del Proveedor se deterioran
  C2          progresivamente con el tiempo

  Criticidad El o los servicios del Proveedor presentan uno o varios
  C3          inconvenientes sin consecuencia significativa
  -----------------------------------------------------------------------

-   Basándose en un análisis profundo de la situación, teniendo en cuenta
    los elementos que determinan el Impacto y la Criticidad, se asigna
    una prioridad al ticket de acuerdo con la matriz de decisión que se
    presenta a continuación:

  -------------------------------------------------------------------------
  Nivel de impacto  Nivel de         Impacto I1    Impacto I2    Impacto I3
  criticidad
  ---------------------------------- ------------ ------------ ------------
  Criticidad C1                       Prioridad     Prioridad     Prioridad
                                     **P1**       **P2**       **P3**

  Criticidad C2                       Prioridad     Prioridad     Prioridad
                                     **P2**       **P3**       **P4**

  Criticidad C3                       Prioridad     Prioridad     Prioridad
                                     **P3**       **P4**       **P5**
  -------------------------------------------------------------------------

Los compromisos de nivel de servicio correspondientes a cada nivel de
prioridad se detallan en el siguiente capítulo.

### 7.6.5. Idioma y ubicación del servicio de soporte

El soporte es proporcionado por el Proveedor al CLIENTE, como mínimo, en
idioma francés. El soporte también puede proporcionarse en idioma
inglés.

Las operaciones del servicio de soporte del Proveedor para la oferta de
servicio de infraestructura calificada SecNumCloud están ubicadas en la Unión
Europea.

# 8. Compromisos y niveles de servicios

El Proveedor se compromete a garantizar una supervisión continua de la
performance y la integridad de seguridad de su infraestructura técnica
entregando el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, que es objeto de un indicador de
rendimiento, se reconoce tan pronto como sea identificada por el sistema
de supervisión del Proveedor, o tras una notificación por parte de un
usuario del CLIENTE. El inicio de la indisponibilidad se fija en el
momento más temprano entre estos dos eventos, para garantizar un
conteo preciso y justo del tiempo de indisponibilidad.

El final de la indisponibilidad se marca oficialmente por la
restauración completa del servicio, confirmada ya sea por las herramientas de
supervisión del Proveedor o por un retorno de usuario, asegurando
así una reanudación efectiva de las operaciones y una medición fiel de la
duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura

El Proveedor se compromete a mantener un nivel de disponibilidad y de
rendimiento conforme a los estándares definidos para cada período
especificado. Los compromisos de nivel de servicio (Service Level
Agreements, SLAs) se aplican siempre que el CLIENTE
implante sus sistemas a través de al menos dos de las Zonas de
disponibilidad presentes en la Región en cuestión.

En ausencia del cumplimiento de estas condiciones por parte del CLIENTE,
éste no podrá reclamar la aplicación de los SLAs
correspondientes, los cuales están específicamente identificados por un
asterisco (\*). El acceso a los SLAs se realiza a través de la
interfaz del CLIENTE. Las medidas se entienden calculadas mensualmente:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilidad de la
    potencia de cálculo (Compute): tasa de disponibilidad garantizada de
    99,99%, calculada sobre una base 24h/24, 7d/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilidad del
    almacenamiento: tasa de disponibilidad garantizada de 99,99%,
    calculada sobre una base 24h/24, 7d/7.
-   **SLA 3 : IC-INFRA_SNC-03** -- Fiabilidad de la copia de seguridad:
    tasa de disponibilidad garantizada de 99,99%, calculada sobre una
    base 24h/24, 7d/7.
-   \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilidad de
    la infraestructura de red: tasa de disponibilidad garantizada de
    99,99%, calculada sobre una base 24h/24, 7d/7.
-   **SLA 5 : IC-INFRA_SNC-05** -- Acceso a Internet: tasa de
    disponibilidad garantizada de 99,99%, calculada sobre una base
    24h/24, 7d/7.

***Notas*** :

-   *En respuesta a un ataque por denegación de servicio distribuido
    (DDoS), el Proveedor se reserva el derecho de ajustar su configuración
    de enrutamiento de internet para limitar el impacto de este ataque y
    proteger su infraestructura. En particular, si una dirección IP
    perteneciente al CLIENTE es atacada, el Proveedor puede recurrir a la técnica
    de blackholing a través de la comunidad BGP para bloquear todo
    el tráfico hacia la dirección IP objetivo por adelantado en sus
    proveedores, con el fin de proteger los recursos del CLIENTE así como
    los de otros CLIENTES y de la infraestructura del Proveedor. El Proveedor
    anima encarecidamente al CLIENTE a adoptar medidas similares, tales como
    el uso de software de cortafuegos de aplicaciones web
    disponibles sur le marché, y a configurar cuidadosamente sus grupos
    de seguridad a través de la API de comando.*

-   *El Proveedor insiste en la necesidad de que el CLIENTE minimice las
    aperturas de flujo, evitando en particular hacer accesibles los
    puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto
    TCP 3389) desde toda Internet (subred 0.0.0.0/0), así como los
    protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS**
    (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz CLIENTE

-   SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del
    Servicio: una disponibilidad garantizada del 97%, asegurada de
    manera continua, 24 horas al día y 7 días a la semana.
-   SLA 7: IC-INFRA_SNC-07 -- Acceso a las APIs de control del Servicio:
    una disponibilidad del 99.9%, calculada sobre una base de 24h/24,
    7d/7.

## 8.3. Compromiso de disponibilidad del soporte

-   **SLA 8: IC-INFRA_SNC-08** -- Aquí están los compromisos de
    rendimiento del soporte técnico del Proveedor para los incidentes,
    excluyendo mantenimientos programados:

  ------------------------------------------------------------------------
  Prioridad       Garantía de tiempo de intervención    Objetivo de
                  (GTI)                                 rendimiento
  -------------- ----------------------------------- ---------------------
  Prioridad       30min                                95%
  **P1**

  Prioridad       2h                                   90%
  **P2**

  Prioridad       4h                                   90%
  **P3**

  Prioridad       24h                                  85%
  **P4**

  Prioridad       48h                                  85%
  **P5**
  ------------------------------------------------------------------------

-   **SLA 9: IC-INFRA_SNC-09** -- Aquí están los compromisos de
    rendimiento del soporte técnico del Proveedor para las solicitudes
    de servicio:

  ------------------------------------------------------------------------
                   Garantía de tiempo de intervención   Objetivo de
                   (GTI)                                rendimiento
  ---------------- ---------------------------------- --------------------
  Solicitud de     4h                                   90%
  servicio

  ------------------------------------------------------------------------

*Nota*:

-   *El plazo para la Garantía de Tiempo de Intervención (GTI) se
    calcula a partir de la diferencia entre el momento en que el CLIENTE
    abre el ticket y la primera intervención del soporte del
    Proveedor.*
-   *La investigación de incidentes relacionados con los CLIENTES no
    incluirá intervención remota en los servidores alojados del CLIENTE.
    Esta asistencia se limitará a la explicación de las métricas
    disponibles relativas al entorno del CLIENTE, para facilitar la
    comprensión de los incidentes o problemas de rendimiento
    encontrados. Sobre la base de los resultados de este análisis, se
    podrán sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento de objetos S3

-   **SLA 10: IC-INFRA_SNC-10** -- Aquí están los compromisos de
    disponibilidad para el almacenamiento de objetos S3:

  ------------------------------------------------------------------------------
  Indicador          Compromiso                             Objetivo de
                                                           disponibilidad
  ------------------- -------------------------------------- -------------------
  IC-INFRA-SNC-10.1   Durabilidad del almacenamiento de un   99.9999999% / año
                      objeto en una región

  IC-INFRA-SNC-10.2   Disponibilidad de la API de            99.99%
                      almacenamiento de objetos S3

  IC-INFRA-SNC-10.3   Latencia máxima de acceso a un         150 ms
                      objeto en una región
  ------------------------------------------------------------------------------

Observaciones:

-   El Servicio de Almacenamiento de Objetos está específicamente
    diseñado para el almacenamiento de objetos y debe ser empleado solo
    para este propósito, **excluyendo categóricamente su uso en modo
    bloque**. Recurrir al modo bloque por métodos indirectos, incluyendo
    por ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una
    infracción a los términos de uso establecidos. Ningún incidente,
    mal funcionamiento o daño derivado de este uso no conforme será
    cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en
    esta convención de servicios.
-   La garantía de durabilidad está condicionada a un uso de los
    servicios conforme a las mejores prácticas y estándares actuales, y
    excluye explícitamente cualquier modificación de datos, ya sea
    intencional o accidental, resultante de acciones emprendidas por el
    CLIENTE.

## 8.5. Precisión respecto al compromiso de respaldo

La estrategia de respaldo desplegada para el CLIENTE está condicionada
por la suscripción a las prestaciones adecuadas.

El Proveedor se compromete a poner a disposición una solución de respaldo
que permitirá al CLIENTE aplicar las políticas de respaldo deseadas.

Se precisa que el alcance del Proveedor se detiene en la puesta a
disposición de un servicio de respaldo y es responsabilidad del CLIENTE
supervisar, a través de la interfaz CLIENTE, la correcta ejecución de
las políticas asociadas.

Se precisa que la gestión de capacidades de almacenamiento del espacio
dedicado a los respaldos, sigue siendo responsabilidad del CLIENTE. El
Proveedor pone a disposición la tasa de utilización a través de la
consola.

*Ejemplo: No respaldo de una máquina virtual:*

*El CLIENTE tiene la responsabilidad de verificar/supervisar la correcta
ejecución de las políticas de respaldos; en caso de que el CLIENTE
constate que una máquina virtual no está respaldada, le corresponde
verificar la causa. El CLIENTE podrá solicitar el Soporte del Proveedor
según el nivel de soporte suscrito para ser asistido.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9**, será aplicable exclusivamente en
caso de un Incidente del servicio de respaldo.

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Proveedor

El Proveedor se compromete a:

-   informar adecuadamente a su CLIENTE (por ejemplo, en caso de límite
    de capacidad de recursos técnicos que ofrecen el Servicio).

-   informar formalmente al CLIENTE con un mes de antelación sobre
    cualquier cambio jurídico, organizacional o técnico que pueda tener
    un impacto en la conformidad del Servicio con los requisitos de
    protección contra leyes extraeuropeas (19.6 del referencial SNC
    v3.2).

-   proporcionar al CLIENTE interfaces y servicios que están
    al menos en idioma francés.

-   tener en cuenta los requisitos sectoriales específicos relacionados
    con los tipos de información confiada por el CLIENTE en el marco de
    la implementación del Servicio y en el límite de las
    responsabilidades del Proveedor, por un lado, y de las disposiciones
    previstas en el Contrato por otro lado;

-   estudiar los requisitos sectoriales específicos relacionados con
    los tipos de información confiada por el CLIENTE en el marco de la
    implementación del Servicio, expresados posteriormente por el
    CLIENTE, e indicar a este último las acciones necesarias para su
    consideración.

-   no divulgar ninguna información relacionada con la prestación a
    terceros, salvo autorización formal y escrita del CLIENTE.

-   poner a disposición toda la información necesaria para realizar
    auditorías de conformidad de acuerdo con las disposiciones del
    artículo 28 del RGPD.

-  rendir cuentas al CLIENTE, a través de este Convenio de servicio,
    de cualquier Incidente de seguridad que afecte al Servicio o a la
    utilización del Servicio por parte del CLIENTE (incluyendo los datos
    del CLIENTE).

-   autorizar a un proveedor de auditoría de la seguridad de los sistemas
    de información (PASSI) calificado, mandado por el Proveedor, para
    auditar el servicio así como su sistema de información, conforme al
    plan de control del SecNumCloud del Proveedor. Además, el Proveedor
    se compromete a proporcionar toda la información necesaria para
    llevar a cabo las auditorías de conformidad con las disposiciones
    del artículo 28 del RGPD, llevadas a cabo por el cliente o un
    tercero mandatado.

-   proporcionar, en calidad de subcontratista, de acuerdo con el
    artículo 28 del Reglamento General sobre la Protección de Datos
    (RGPD), asistencia y asesoramiento al CLIENTE alertándolo cada vez
    que una instrucción emitida por este último sea susceptible de
    constituir una violación de las normas de protección de datos.

-   notificar al CLIENTE en un plazo razonable, a través de la consola
    CLIENTE o por correo electrónico al contacto del CLIENTE, cuando un
    proyecto impacte o sea susceptible de impactar el nivel de seguridad
    o disponibilidad del Servicio, o cause una pérdida de
    funcionalidad, los posibles impactos, las medidas de mitigación
    adoptadas, así como los riesgos residuales que le conciernan.

-   documentar e implementar todas las procedimientos necesarios para
    cumplir con los requisitos legales, reglamentarios y contractuales
    aplicables al servicio, así como los requerimientos de seguridad
    específicos del CLIENTE, definidos por este último y previstos en el
    Contrato.

-   no usar los datos del CLIENTE provenientes de la producción para
    realizar pruebas, a excepción de obtener previamente la autorización
    explícita del CLIENTE, en cuyo caso el Proveedor se compromete a
    anonimizar estos datos y a asegurar su confidencialidad durante su
    anonimización.

-   eliminar los datos y Datos técnicos relativos al
COMMANDITAIRE, conforme a la « procedimiento de borrado de 
datos al final del Contrato » descrito en la presente Convención de 
servicio al finalizar o rescindir un Contrato.

-   asegurar un borrado seguro de la totalidad de los datos del 
    COMMANDITAIRE mediante la reescritura completa de cualquier soporte que 
    haya albergado sus datos en el marco del Servicio.

A pedido formal y escrito del COMMANDITAIRE, el Proveedor se compromete a :

1.  Poner a disposición del COMMANDITAIRE el reglamento interno y la 
    carta ética del Proveedor ;

2.  Poner a disposición del COMMANDITAIRE las sanciones incurridas en caso 
    de infracción a la política de seguridad ;

3.  Proporcionar al COMMANDITAIRE todos los eventos que le conciernen 
    en los registros del Servicio; el COMMANDITAIRE 
    también puede consultar de manera autónoma los eventos relacionados 
    con su uso del Servicio a través de las interfaces web y API del 
    Servicio;

4.  Poner a disposición del COMMANDITAIRE los procedimientos que permiten 
    cumplir con los requisitos legales, regulatorios y contractuales en 
    vigor aplicables al Servicio, así como las necesidades de seguridad 
    específicas del COMMANDITAIRE previstas en el Contrato ;

5.  Proporcionar los elementos de evaluación de riesgos relativos a la 
    sumisión de datos del COMMANDITAIRE al derecho de un estado 
    no miembro de la Unión Europea;

6.  Informar al COMMANDITAIRE sobre los subcontratistas adicionales 
    involucrados en la prestación del Servicio y comunicarle cualquier 
    cambio que le afecte relacionado con estos subcontratistas.

> El Proveedor y todas sus filiales se comprometen a respetar 
> los valores fundamentales de la Unión Europea, a saber, la dignidad 
> humana, la libertad, la democracia, la igualdad, el estado de derecho, así 
> como el respeto de los Derechos Humanos. El servicio proporcionado por el 
> Proveedor cumple con la legislación vigente en materia de 
> derechos fundamentales y con los valores de la Unión Europea relativos al 
> respeto de la dignidad humana, la libertad, la igualdad, la 
> democracia y el Estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor

Debido a todas las definiciones y condiciones mencionadas en la 
presente Convención de servicio, las responsabilidades del Proveedor están 
limitadas de la siguiente forma:

1.  El modelo de responsabilidad compartida, descrito en la sección 
    « Modelo de responsabilidades compartidas » de la presente Convención de 
    servicio, limita de hecho la implicación del Proveedor en las 
    capas de funcionamiento que van "por encima" de la provisión de 
    recursos de cálculo, red, almacenamiento y respaldo. Esto excluye en particular, sin limitarse a:

    -   La gestión de lo que se instala en las máquinas virtuales 
        (SO, middleware, aplicaciones, etc.);

    -   La actualización de los sistemas operativos y otros programas instalados por 
        el COMMANDITAIRE en sus máquinas en sus Tenants;

    -   La seguridad de los programas, software y aplicaciones instalados 
        en las máquinas virtuales;

    -   La actualización de las máquinas virtuales;

    -   El respaldo de datos a nivel de aplicación.

2.  El Proveedor no puede asumir compromisos de respaldo de los 
    Tenants del COMMANDITAIRE sin que el COMMANDITAIRE haya previamente 
    suscrito a las unidades de obra adecuadas.

3.  El Proveedor no puede reclamar la propiedad de los datos 
    transmitidos y generados por el COMMANDITAIRE. De hecho, estos 
    pertenecen al COMMANDITAIRE.

4.  El Proveedor destaca que no puede en ningún caso explotar y/o 
    disponer de los datos transmitidos y generados por el COMMANDITAIRE 
    sin la validación previa de este último, entendiendo que su 
    disposición está reservada al COMMANDITAIRE.

5.  El Proveedor se exime de toda responsabilidad sobre los componentes 
    físicamente alojados y gestionados por el Proveedor, pero que son 
    propiedad directa del COMMANDITAIRE o de un tercero con quien el 
    COMMANDITAIRE ha contratado. El alojamiento de componentes físicos 
    de clientes no forma parte del Servicio y está, por tanto, fuera del 
    alcance de la presente Convención de servicio. Compete al COMMANDITAIRE 
    evaluar el nivel de adherencia o dependencia que introducen estos 
    componentes con respecto al Servizio IaaS calificado SecNumCloud.

## 9.3. Limitación de acceso

En el marco del Servicio, el Proveedor tiene expresamente prohibido 
acceder a los Tenants pertenecientes al COMMANDITAIRE sin autorización 
previa. Es responsabilidad del COMMANDITAIRE proporcionar los accesos 
necesarios al personal del Proveedor, según las necesidades específicas del
alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido escogida por el 
COMMANDITAIRE.

El COMMANDITAIRE reconoce que estos accesos se otorgan exclusivamente 
para las necesidades relacionadas con la prestación de servicios convenidos, 
asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por terceros involucrados en la prestación de servicios del 
Proveedor está estrictamente prohibido. En el caso de que un 
requisito técnico específico necesitara tal acceso, este no podría 
establecerse sin haber notificado claramente al COMMANDITAIRE, proporcionado 
una justificación detallada y obtenido su consentimiento por escrito.

Esta medida garantiza el control y la seguridad de los datos del 
COMMANDITAIRE, asegurando que cualquier excepción a la regla esté debidamente 
autorizada y documentada.

## 9.4. Responsabilidades de terceros participantes en la prestación del servicio Secure Temple

El Proveedor gestiona la lista de los socios terceros que participan en la 
prestación del Servicio. Estos terceros son los editores, proveedores (del 
Proveedor) y otros proveedores que participan en la prestación del 
Servicio. El Proveedor aplica las medidas siguientes a estos terceros:

-   El Proveedor exige a los terceros que participan en la implementación del 
    servicio, en su contribución al Servicio, un nivel de seguridad al 
    menos equivalente al que se compromete a mantener en su propia 
    política de seguridad aplicable al servicio Secure Temple ;

-   El Proveedor contrata con cada uno de los terceros que participan en la 
    implementación del servicio, cláusulas de auditoría que permiten a un 
    organismo de certificación verificar que estos terceros cumplen con los 
    requisitos legales y las exigencias SNC, permitiendo al Proveedor 
    cumplir con sus compromisos en la presente Convención de servicio.

-   El Proveedor implementa un procedimiento para controlar 
    regularmente las medidas implementadas por los terceros que participan en 
    la implementación del servicio para cumplir con los requisitos del 
    Proveedor y así cumplir con sus compromisos en la presente Convención 
    de servicio.

-   El Proveedor lleva a cabo un seguimiento de los cambios realizados por los 
    terceros que participan en la implementación del servicio que puedan 
    afectar el nivel de seguridad del sistema de información del 
    servicio.

## 9.5. Responsabilidades y obligaciones del COMMANDITAIRE

El COMMANDITAIRE tiene las siguientes obligaciones en el marco del 
Servicio:

-   Como recordatorio, el Proveedor proporciona al COMMANDITAIRE una plataforma 
    de ejecución de máquinas virtuales, cuya configuración recae en el 
    COMMANDITAIRE. Cada máquina virtual no puede funcionar sin una 
    política de respaldo asociada. El Proveedor define a través de sus 
    interfaces políticas de respaldo automáticas, pero es responsabilidad 
    del COMMANDITAIRE activar estas políticas de respaldo y, por tanto, 
    activar las máquinas virtuales.

-   El COMMANDITAIRE autoriza a la ANSSI y al organismo de certificación 
    SNC a auditar el Servicio y la infraestructura técnica que proporciona 
    el Servicio.

-   El COMMANDITAIRE es responsable de informar al Proveedor sobre 
    cualquier posible requisito sectorial específico relacionado con los 
    tipos de información confiada por el COMMANDITAIRE y que necesita 
    ser tenido en cuenta por el Proveedor.

-   El COMMANDITAIRE acepta no solicitar al Proveedor requisitos ni 
    acciones que hagan que el Proveedor incumpla con los requisitos del 
    referencial SecNumCloud en su versión actual, por un lado, o que 
    disminuyan el nivel de seguridad establecido mediante el 
    cumplimiento de los requisitos de dicho referencial, por otro lado.

## 9.6. Derechos del COMMANDITAIRE

En cualquier momento durante la relación contractual, el COMMANDITAIRE 
puede presentar una reclamación relacionada con el servicio certificado ante 
la ANSSI.

En cualquier momento, el COMMANDITAIRE puede solicitar al Proveedor que 
le ponga a disposición su reglamento interno y su carta ética.

## 9.7. Borrado de datos al final del Contrato

Al final del contrato, ya sea que llegue a su término o que sea rescindido por 
cualquier motivo, el Proveedor se compromete a proceder con 
el borrado seguro de la totalidad de los datos del COMMANDITAIRE, 
incluidos los datos técnicos. El Proveedor se asegurará de comunicar 
al COMMANDITAIRE un preaviso formal, respetando un plazo de veintiún (21) días 
calendarios. Los datos del COMMANDITAIRE serán entonces 
eliminados en un plazo máximo de treinta (30) días después de esta 
notificación.

Para atestiguar esta eliminación, el Proveedor proporcionará al 
COMMANDITAIRE un certificado que confirme el borrado de los datos.

# 10. Ciclo de vida de la presente Convención de servicio

## 10.1. Entrada en vigor de la Convención de servicio

La presente Convención de servicio entra en vigor el día de su firma 
por el COMMANDITAIRE.

La recolección, manipulación, almacenamiento y procesamiento de datos 
realizados en el marco de la preventa, la implementación y la 
terminación del Servicio, se realizan de acuerdo con la legislación vigente.

## 10.2. Evoluciones de la Convención de servicio

Las modificaciones o adiciones realizadas a la presente Convención de servicio
découlent exclusivement des solicitudes formuladas por los órganos de
gobernanza designados a tal efecto. Estas propuestas de cambio serán
examinadas por las Partes, habilitadas para determinar los aspectos
que requieran una formalización escrita.

Se acuerda que cualquier evolución del Convenio de servicio, después de
su validación, que altere las condiciones financieras inicialmente establecidas,
requerirá el establecimiento y la firma de una adenda al Contrato en
vigor.

Los factores que pueden inducir una revisión de este Convenio de servicio
incluyen, sin limitarse a:

-   La evolución de la infraestructura técnica que ofrece el Servicio
    IaaS;
-   Los ajustes aplicados a los servicios desplegados por el Proveedor
    para proporcionar el Servicio;
-   Las variaciones de los compromisos asumidos y las sanciones aplicables;
-   Las reconfiguraciones organizacionales dentro del PATROCINADOR o
    del Proveedor;
-   La expansión o reducción del alcance del Servicio.

La gestión de versiones y revisiones del Convenio de servicio se
consigna al comienzo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el PATROCINADOR

Las evoluciones del Convenio de servicio pueden tener, entre otras, el
siguiente origen:

-   Una evolución de la infraestructura gestionada por el Proveedor;

-   Una modificación de los servicios implementados por el Proveedor;

-   Una modificación de los compromisos de niveles de servicios por el
    Proveedor.

### 10.2.2. Evoluciones desencadenadas por el Proveedor

Cualquier modificación del Convenio de servicio está sujeta a la aceptación
del PATROCINADOR. Se entiende que cualquier modificación o complemento
validado que altere los elementos financieros del Contrato, podrá implicar
la firma de una adenda al mismo.

## 10.3. Reversibilidad

Además, Cloud Temple se compromete a permitir una revisión del presente
Convenio de servicio (que prevea, en particular, su rescisión) sin penalización
para el PATROCINADOR en caso de pérdida de la certificación SecNumCloud.

Los Servicios no incluyen una obligación de reversibilidad (es decir,
la ayuda al PATROCINADOR para migrar su sistema a otro Proveedor) salvo la disposición
por parte del Proveedor al PATROCINADOR de la interfaz del PATROCINADOR que permita
al PATROCINADOR respaldar y recuperar sus datos, incluyendo los datos
de configuración de su sistema de información a través de una de las modalidades técnicas
siguientes a elección del PATROCINADOR: la disposición de archivos siguiendo uno o varios
formatos documentados y utilizables fuera del servicio proporcionado por el
Proveedor o bien a través de la implementación de interfaces técnicas
que permitan el acceso a los datos siguiendo un esquema documentado y
explotable (API).

El PATROCINADOR, único titular de su sistema, debe hacer todo lo posible
para facilitar esta operación según sea necesario (lo que implica,
en particular, que establezca una documentación rigurosa a tal fin) y la elaboración
de planes de reversibilidad. En caso de que el PATROCINADOR necesite un servicio complementario,
el Proveedor puede proponer una misión de asesoramiento al respecto en
el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes e interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de este Convenio de servicio

-   Siniestros;

-   Averías y fallos;

-   Incidentes de seguridad que impactan la disponibilidad, la confidencialidad
    o la integridad del Servicio.

#### 11.1.1.2. Tratamiento de los incidentes

> El Proveedor informa al PATROCINADOR lo antes posible,
> de los incidentes e interrupciones, mediante una notificación en la
> consola PATROCINADOR o por correo electrónico al contacto del PATROCINADOR. El
> Proveedor informa al PATROCINADOR del tratamiento del incidente por
> el canal utilizado para notificar el incidente, o por el canal indicado
> en la notificación del incidente.

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad

El PATROCINADOR es responsable de elegir los niveles de gravedad
de los Incidentes de seguridad para los cuales desea ser informado, por
ejemplo, a través de su formalización en un PAS aplicable al Servicio.

Por defecto, el PATROCINADOR es informado:

-   De los incidentes de seguridad con impacto (impactos I1 e I2 según
    la escala de impacto definida en el proceso de priorización del tratamiento de este
    Convenio de servicio);

-   De los incidentes de seguridad que impactan la confidencialidad o
    la integridad de los datos del PATROCINADOR confiados en el marco del
    Servicio;

-   De las violaciones de datos personales por los cuales el
    PATROCINADOR es responsable del tratamiento conforme al artículo
    8 del Anexo DPA en el marco del Servicio;

-

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

De las violaciones de datos personales por los cuales el
Proveedor es responsable del tratamiento y que incluyen datos
personales del PATROCINADOR, conforme al artículo 8 del Anexo
DPA. El mantenimiento asegurado consiste en la implementación:

-   Del plan de mantenimiento en condiciones operativas del Servicio para
    asegurar buenos indicadores de disponibilidad según lo compromete el
    Proveedor en la parte superior;

-   Del plan de PCA/PRA si está suscrito por el PATROCINADOR accionado según
    los posibles incidentes que pudieran ocurrir.

### 11.2.2. Accesos remotos de Cloud Temple en el perímetro del PATROCINADOR

El Proveedor se prohíbe, en el marco del presente Convenio de
servicio, todo acceso a los Tenants y al espacio de la interfaz del
PATROCINADOR.

Corresponde al PATROCINADOR dar los accesos necesarios al personal
del Proveedor. El PATROCINADOR reconoce que los accesos serán utilizados
en el marco del alojamiento y en última instancia de la gestión externalizada (si está suscrita
por el PATROCINADOR).

### 11.2.3. Accesos remotos de terceros que participen en la prestación del servicio en el perímetro del PATROCINADOR

No se autoriza ningún acceso remoto de terceros que participen en la prestación
del Servicio.

Si una necesidad técnica hiciera necesario este caso,
este tipo de acceso solo se realizaría después de la notificación al PATROCINADOR,
justificación y obtención de su acuerdo por escrito.

# 12. Procedimiento de eliminación de datos al final del Contrato

Al final del Contrato, ya sea que el Contrato haya llegado a su término o por
cualquier otra causa, el Proveedor asegurará la eliminación segura de
la totalidad de los datos tratados en el marco del Servicio, incluyendo
los Datos técnicos del PATROCINADOR. El Proveedor dará aviso formal,
respetando un plazo de veinte y un días (21) calendario. Los datos
del PATROCINADOR serán eliminados en un plazo máximo de treinta (30) días
después de la notificación. El Proveedor proporcionará un certificado
de eliminación de datos al PATROCINADOR.

# 13. Derecho aplicable

## 13.1. De manera general

El derecho aplicable que rige el presente Convenio de
servicio es el derecho francés.

## 13.2. Cumplimiento de la ley y las regulaciones aplicables

El Proveedor se compromete en los siguientes puntos:

-   La identificación de las restricciones legales y reglamentarias
    aplicables en el marco del Servicio;

-   El cumplimiento de las restricciones legales y reglamentarias aplicables a
    los datos confiados al Proveedor dentro del límite de las responsabilidades
    de este último por una parte, y de las disposiciones previstas en el Contrato
    por otra parte;

-   El cumplimiento de la Ley de protección de datos y del RGPD;

-   La implementación de medios de protección de los datos personales;

-   La implementación de un proceso de vigilancia legal y regulatoria;

-   Disponer y mantener relaciones apropiadas o una vigilancia
    con las autoridades sectoriales en relación con la naturaleza de los datos
    tratados en el marco del Servicio. Esto incluye, en particular, a la ANSSI,
    el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando en calidad de encargado del tratamiento de datos en el sentido del
artículo 28 del Reglamento General de Protección de Datos (RGPD), el Proveedor
se compromete a:

-   Asegurar la transparencia y la trazabilidad;

-   Designar a un DPO encargado de definir y implementar las
    medidas de protección de los datos personales;

-   Brindar asistencia y asesoramiento al PATROCINADOR y alertarlo
    si una instrucción de este último constituye una violación de las normas
    de protección de datos personales siempre que el Proveedor tenga los medios
    para identificarlo;

-   Una garantía de seguridad sobre los datos tratados (debido a la
    certificación SecNumCloud).

## 13.4. Protección frente al derecho extraeuropeo

La sede del Proveedor está establecida en un Estado miembro
de la Unión Europea. El capital social y los derechos de voto en la
sociedad del Proveedor no están, directa o indirectamente:

-   individualmente detenidos en más del 24%;

-   y colectivamente detenidos en más del 39%;

por entidades terceras que posean su sede, administración
central o establecimiento principal en un Estado no miembro de
la Unión Europea.

En caso que el Proveedor recurra, en el marco del Servicio, al
servicio de una sociedad tercera, incluyendo un subcontratista, que posea
su sede, administración central o establecimiento principal en un Estado
no miembro de la Unión Europea o que pertenezca o esté controlada por una
sociedad tercera domiciliada fuera de la Unión Europea, el Proveedor
se compromete a:

-   que esta mencionada sociedad tercera no dispondrá de acceso
    alguno a los datos operados por el servicio "Secure Temple";

-   disponer de autonomía operativa a través de la posibilidad
    de recurrir a otro subcontratista o de implementar rápidamente
    una alternativa tecnológica.
Pour recordar, los datos mencionados son aquellos que se confían al
Proveedor por el CONTRATANTE así como todos los Datos técnicos
que comprenden información sobre los CONTRATANTES.

Para los fines del presente artículo, la noción de control se entiende
como aquella mencionada en el II del artículo L233-3 del código de
comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Por Cloud Temple, el PROVEEDOR

Por \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el CONTRATANTE