---
title: Convención de Servicio SecNumCloud OpenIaaS
---

# 1. CONVENCIÓN DE SERVICIOS OpenIaaS

  -----------------------------------------------------------------------
  **Destinatarios :**            **PATROCINADOR**
  ------------------------------ ----------------------------------------
  **Referencia del documento**   CT.AM.JUR.ANX OPENIaaS-
                                 202530101_v3.0.docx_Día DD AAAA

  **Sus interlocutores**         *Nombre* *Apellido*

                                 Account Manager

                                 e-mail : *nombre.apellido*\@cloud-temple.com

  **Fecha de última              17/01/2025
  actualización**                

  **Fecha de validación          Día DD AAAA
  contractual**                  
  -----------------------------------------------------------------------

------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  **Versión**  **Fecha**    **Acción**                             **Autor**
  ------------ ------------ ------------------------------------ --------------
  v0.1         07/06/2022   Redacción inicial                      Lorena ALCALDE

  v0.2         14/09/2022   Enriquecimiento                        Lorena ALCALDE

  v1.0         30/12/2022   Integración de Indicadores             Lorena ALCALDE

  v1.1         23/01/2023   Modificación del pie de página           Lorena ALCALDE

  v1.2         22/05/2023   Enriquecimiento                        Lorena ALCALDE

  v1.3         29/06/2023   Enriquecimiento                        Lorena ALCALDE

  v1.4         06/11/2023   Modificación Capital y                 Lorena ALCALDE
                             Enriquecimiento                       

  v1.5         30/11/2023   Enriquecimiento                        Lorena ALCALDE

  v1.6         21/03/2024   Enriquecimiento                        Lorena ALCALDE

  v2.0         29/03/2024   Ajustes de conformidad SNC             Nicolas
                                                                  ABRIOUX

  v2.0         03/04/2024   Publicación                            Lorena ALCALDE

  V3.0         17/01/2025   Enriquecimiento                        Emeline CAZAUX
  ------------ ------------ ------------------------------------ --------------

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
    -   [7.2. Presentación detallada del alcance del
        Servicio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
        -   [7.2.1. Infraestructuras de
            Datacenters](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
        -   [7.2.2. Infraestructura de software para la gestión del
            Servicio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
        -   [7.2.3. Infraestructuras de
            cómputo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
        -   [7.2.4. Infraestructura de
            almacenamiento](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
        -   [7.2.5. Infraestructura de red
            global](#X78b4484e386c95a988a698cd84bae342679ddb5)
        -   [7.2.6. Infraestructura de
            respaldo](#Xdf2c99a6958ca2f79a1cf60659dd5a3029ab31c)
        -   [7.2.7. Implementación de soluciones de recuperación ante desastres o
            continuidad de
            negocio](#X5610bffa77dd118e87cbee05f204158179c962f)
    -   [7.3. Limitaciones de los servicios en el modelo IaaS
        calificado](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
        -   [7.3.1. Servicios gestionados en
            RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
        -   [7.3.2. Configuración del
            respaldo](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)
        -   [7.3.3. Configuración de la
            copia de seguridad](#Xfd8664b285a442773de0c9989256f92bc1f6ca2)
    -   [7.4. Implementación del
        servicio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
        -   [7.4.1. Prerrequisitos
            técnicos](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)
    -   [7.5. Localización del servicio en
        Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
        -   [7.5.1. Localización de los Datacenters que alojan el
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
    servicio](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
    -   [8.1. Compromisos de disponibilidad de la
        infraestructura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
    -   [8.2. Compromiso de disponibilidad de la interfaz del
        PATROCINADOR](#X86570f48e6da9370f069232b4ae175183f2dafd)
    -   [8.3. Compromiso de disponibilidad del
        soporte](#Xfc8548982b300528a67725f1705f15805f405f0)
    -   [8.4. Compromiso de disponibilidad del almacenamiento de objetos
        S3](#Xd1858bb2ec86b964cb6a768cb7d9a7a780abb7b)
    -   [8.5. Precisión sobre el compromiso de
        respaldo](#Xcc0ee164bf81418fd2280ceac4eb569bf7b97f7)
-   [9. Organización de la relación
    contractual](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
    -   [9.1. Responsabilidades del
        Proveedor](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
    -   [9.2. Limitación de las responsabilidades del
        Proveedor](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
    -   [9.3. Limitación de
        acceso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)
    -   [9.4. Responsabilidades de terceros que participan en la provisión del
        servicio Secure
        Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)
    -   [9.5. Responsabilidades y obligaciones del
        PATROCINADOR](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
    -   [9.6. Derechos del
        PATROCINADOR](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
    -   [9.7. Eliminación de datos al final del
        Contrato](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)
-   [10. Ciclo de vida de la presente Convención de
    servicio](#X89744c1f67247955b75e73d73aaa55899645415)
    -   [10.1. Entrada en vigencia de la Convención de
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
    -   [11.1. Gestión de Incidentes y
        interrupciones](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
        -   [11.1.1.
            Incidentes](#X648046c564ac1cd52bebb02b256b193a3da4d74)
            -   [11.1.1.1. Tipos de Incidentes tratados en el marco de
                esta Convención de
                servicio](#X09cc1e22db275b1a463f85596829f3f871ae224)
            -   [11.1.1.2. Tratamiento de
                incidentes](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
            -   [11.1.1.3. Nivel de notificación de los Incidentes de
                seguridad](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
    -   [11.2. Mantenimiento del
        Servicio](#X8f50b0b400c67568e380ddb602ac786ec585905)
        -   [11.2.1. Naturaleza del
            mantenimiento](#X903d92edf16182242ecfd404337edbaf2243b81)
        -   [11.2.2. Accesos remotos de Cloud Temple en el alcance del
            PATROCINADOR](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
        -   [11.2.3. Accesos remotos de terceros que participan en la provisión del
            servicio en el alcance del
            PATROCINADOR](#X7ad951099cc984b8fc113222e52c4e27d11465f)
-   [12. Procedimiento de eliminación de datos al final del
    Contrato](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
-   [13. Derecho aplicable](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
    -   [13.1. De manera
        general](#X5ed94d170893fb4c04d7110c419f01198fda773)
    -   [13.2. Respeto del derecho y las normativas
        aplicables](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
    -   [13.3. RGPD](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
    -   [13.4. Protección frente al derecho
        extra-europeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
-   [14. FIRMAS](#X7ad993788a708b47017c27c9d96178e8795e44f)

------------------------------------------------------------------------

# 3. Preliminar y Glosario


## 3.1. Preliminar

El presente documento formaliza la Convención de servicio asociada al
servicio OpenIaaS en proceso de calificación SecNumCloud.

El Servicio está en proceso de calificación SecNumCloud (ver certificación
que estará en Anexo).

La presente convención de servicio complementa y es complementaria a las
condiciones generales de venta y uso del Proveedor. Se entiende que los documentos contractuales se interpretan de manera
coherente entre sí. En caso de contradicción o divergencia entre los
términos de los documentos contractuales, los documentos prevalecerán unos sobre
otros en el siguiente orden:

1.  Condiciones Generales de Venta y Uso (CGVU)

2.  Convención de Servicio SecNumCloud IaaS

3.  Convención de Servicio SecNumCloud OpenIaaS

4.  Convención de Servicio SecNumCloud PaaS

5.  Convención de Servicio específica - Bare Metal

6.  Convención específica particular

7.  Plan de Aseguramiento de Seguridad (PAS)

8.  Condiciones Particulares de Uso (CPU)

9.  Acuerdo de Protección de Datos

## 3.2. Glosario

En la presente Convención de servicio, el **MANDANTE**, el
**Proveedor** y las **Partes** están identificados en el Contrato
al que la presente Convención de servicio está anexada.

Las expresiones empleadas en la presente Convención de
servicio se interpretarán conforme a las definiciones que se les atribuyen a continuación:

-   **Cambio:** Toda adición, modificación o eliminación
    que impacte el Servicio, habiendo sido autorizada, planificada o llevada a cabo.

-   **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de puesta en producción e impactos
    (incluidos financieros) son conocidos y aceptados de antemano por las
    Partes. Es entonces integrado al catálogo de cambios
    estándar, y puede según los casos tener un GTI y un GTR.

-   **Contrato:** designa el contrato suscrito por el MANDANTE
    con el Proveedor para permitir al MANDANTE beneficiarse
    del Servicio, al cual la presente Convención de servicio está anexada.

-   **Convención de servicio:** Este documento, establecido en el marco de un
    contrato específico o de las Condiciones Generales de Venta y
    Uso (CGVU), conforme a los requisitos del
    Referencial SecNumCloud.

-   **Solicitud de servicio:** solicitud de evolución sujeta a un
    procedimiento, cuya realización: i) no modifica la CMDB, ii) las
    modalidades operativas, costos y riesgos son conocidos y aceptados de antemano y no requieren modalidades de restitución
    específicas iii) la realización está sujeta a un acuerdo de nivel de
    servicio e incluida en la tarifa del contrato cuando se
    realiza en horas laborables y días laborables.

-   **Disponibilidad:** Capacidad para asegurar la disponibilidad y el
    mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los
    criterios y compromisos definidos en los Acuerdos de Nivel de
    Servicio (SLA).

-   **Datos técnicos:** comprende el conjunto de datos manipulados
    para entregar el Servicio, notablemente la identidad de los
    beneficiarios y administradores de la infraestructura técnica,
    registros de la infraestructura técnica, configuración de accesos,
    directorio, certificados...

-   **Evento:** Un "evento" es cualquier ocurrencia detectable o
    identificable que pueda tener importancia para la gestión del
    Servicio.

-   **Hipervisor:** Sistema operativo que permite la ejecución de
    máquinas virtuales en una blade de cómputo.

-   **Incidente:** Cualquier evento imprevisto que perturbe el funcionamiento
    normal del Servicio o comprometa la seguridad de los datos.

-   **Incidente de seguridad:** Cualquier evento dentro del ámbito del
    Servicio:

    -   De naturaleza intencionalmente maliciosa;
    -   De naturaleza accidental que afecte la integridad, confidencialidad
        o la trazabilidad del Servicio o de los datos del MANDANTE;
    -   Que afecte a las medidas de seguridad existentes. Las
        afecciones a la Disponibilidad de origen no malicioso no se consideran como un Incidente de seguridad (fallo de hardware,
        error, mal funcionamiento, desastre natural...).

-   **Interfaz del MANDANTE:** Interfaz de administración del Servicio
    puesta a disposición del MANDANTE por el Proveedor, que agrupa
    una consola de administración web y una API.

-   **Puesta en producción:** acción(es) de administración para la realización
    del Cambio cuando éste es aprobado (el cambio, en el sentido
    ITIL, se refiere solo a la gestión del cambio y no a su
    realización/concretización).

-   **Problema:** causa de uno o varios Incidentes recurrentes, causa
    de un Incidente potencial (situación de riesgo) que requiere un análisis
    y una resolución para prevenir su recurrencia.

-   **Región:** designa un conjunto geográficamente delimitado de zonas
    de disponibilidad en la nube, que provee servicios de red, cómputo y
    almacenamiento para optimizar la latencia, el rendimiento y
    el cumplimiento regulatorio local.

-   **Servicio OpenIaaS:** designa el servicio IaaS basado en una
    tecnología de código abierto, en proceso de calificación SecNumCloud,
    entregado al MANDANTE por el Proveedor desde infraestructuras
    técnicas mantenidas por el Proveedor, descritas en la sección «Descripción del Servicio» de la presente Convención de servicio.

<!-- -->

-   **Desastre:** designa un evento grave de origen natural o
    humano, accidental o intencional, que cause pérdidas y
    daños importantes a la Parte afectada.

<!-- -->

-   **Supervisión:** Monitoreo de un Sistema de Información o de un
    Servicio, que implica la recopilación de diversos datos como
    medidas y alarmas. Esta actividad se limita a la observación y
    seguimiento, sin intervenir directamente sobre los elementos supervisados, una prerrogativa que pertenece a las operaciones de Administración.

-   **Tenant:** Una instancia aislada reservada para un usuario o grupo
    de usuarios, compartiendo una infraestructura común mientras
    se mantiene la independencia y seguridad de los datos y aplicaciones.

-   **Zona de Disponibilidad (AZ) (Availability zone):** Una sección
    específica y aislada de la infraestructura de computación en la nube,
    diseñada para asegurar la alta disponibilidad y resiliencia de
    los servicios mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  -----------------------------------------------------------------------------
  **Acrónimo**   **Definición**
  -------------- --------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comité consultivo sobre los
                 cambios

  **CMDB**       Configuration Management Database -- Base de datos de
                 gestión de configuraciones

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
                 prácticas para la gestión de SI

  **IaaS**       Infrastructure as a Service

  **MCO**        Mantenimiento en condición operativa

  **MOA**        Maestría de Obra

  **MOE**        Maestría de Obra

  **MSP**        Proveedor de Servicios Gestionados

  **OS**         Operating system (sistema operativo)

  **PAQ**        Plan de Aseguramiento de Calidad

  **PaaS**       Platform as a Service

  **PAS**        Plan de Aseguramiento de Seguridad

  **PASSI**      Proveedor de Auditoría de Seguridad de Sistemas de Información

  **RFC**        Request For Change -- Solicitud de cambio

  **RGPD**       Reglamento General de Protección de Datos (personales)

  **RPO**        Recovery Point Objective -- Frescura de los datos restaurados
                 en caso de Desastre

  **RTO**        Recovery Time Objective -- Tiempo objetivo de recuperación
                 del servicio en caso de Desastre

  **SDM**        Service Delivery Manager

  **SLA**        Service Level Agreement -- Acuerdo sobre los niveles de servicio

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center

  **TMA**        Mantenimiento Tercero de Aplicaciones

  **UO**         Unidad de Obra

  **VABE**       Validación de Idoneidad para la Buena Explotación

  **VABF**       Validación de Idoneidad para el Buen Funcionamiento

  **VM**         Virtual Machine (Máquina virtual)

  **VSR**        Validación de Servicio Regular
  -----------------------------------------------------------------------------

# 5. Objeto de la presente Convención de servicio

La presente Convención de servicio establece los términos y condiciones según
los cuales el Proveedor se compromete a entregar el Servicio al MANDANTE.
Su objeto es:

-   Precisar los requisitos de rendimiento esperados por el MANDANTE
    en términos de funcionalidad y fiabilidad del Servicio;

-   Enunciar las obligaciones del Proveedor para cumplir con
    los niveles de servicio acordados;

-   Identificar las normas regulatorias aplicables específicamente al
    Servicio entregado;

-   Asegurar uniformidad e integridad en la evaluación de la
    calidad del Servicio;

-   Garantizar la excelencia de los servicios prestados, evaluada mediante
    indicadores de rendimiento cuantitativos.

Se estipula que, en el supuesto de que al Proveedor se le retire
su calificación SecNumCloud, el Contrato podrá ser rescindido de
pleno derecho, sin incurrir en penalizaciones, por el MANDANTE. En una
telle éventualité, le Prestataire s'engage à informer le COMMANDITAIRE
de cette déqualification par envoi d'une notification officielle, au
moyen d'une lettre recommandée avec demande d'avis de réception.

Il convient de noter qu'une modification ou un ajustement de la
qualification SecNumCloud ne sera pas interprété comme une révocation de
la qualification initiale.

# 6. Auditar

El Prestataire se compromete a permitir al COMMANDITAIRE, o a cualquier auditor
tercero y no competidor del Prestataire que éste designe, consultar todos los documentos necesarios para certificar el respeto de todas las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Al aceptar el presente Convenio de servicio, el COMMANDITAIRE
confirió su autorización explícita a:

1.  La Agencia Nacional de la Seguridad de los Sistemas de Información (ANSSI)
    así como a la entidad de cualificación competente para emprender la
    verificación de la conformidad del Servicio y de su sistema de
    información al marco de referencia SecNumCloud.
2.  Un proveedor de auditoría de la seguridad de los sistemas de información,
    debidamente cualificado PASSI y expresamente designado por el Prestataire,
    para llevar a cabo auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio propuesto por el Prestataire se caracteriza por la puesta a
disposición de las siguientes prestaciones, las cuales se alinean con el
principio de responsabilidad compartida presentado en el marco de referencia
SecNumCloud:

-   La provisión de recursos de cálculo (compute);

-   La puesta a disposición de espacios de almacenamiento;

-   El acceso a servicios de conectividad de red e internet;

-   La oferta de un servicio de respaldo dedicado a las máquinas virtuales.

El modelo de responsabilidades compartida aplicado entre el Prestataire y el
COMMANDITAIRE en el marco del Servicio se presenta en §7.1.

Se entiende que el Prestataire movilizará su expertise para realizar
las Prestaciones según las mejores prácticas profesionales y
conforme a los requisitos del marco de referencia SecNumCloud.

## 7.2. Presentación detallada del perímetro del Servicio

  ------------------------------------------------------------------------
  Compute          Recurso de cálculo del Tenant COMMANDITAIRE
  ---------------- -------------------------------------------------------
  Storage          Datos de producción del Tenant COMMANDITAIRE

  Almacenamiento   puesta a disposición de una infraestructura de almacenamiento
  en objetos S3    en objetos soberano multi AZ y compatible con las API S3
                   estándar.

  Respaldo         Módulo de suscripción al Almacenamiento en objetos S3

  Infraestructura  Recurso de red del Tenant COMMANDITAIRE
  de red           

  Consola          El servicio que permite al COMMANDITAIRE acceder a su
  COMMANDITAIRE    servicio OpenIaaS y administrarlo a través de la interfaz
                   Shiva

  Soporte          El servicio de soporte que acompaña a los servicios
                   anteriores y exclusivamente a estos (\*)
  ------------------------------------------------------------------------

\_(\*) Dentro del límite del perímetro del Servicio en curso de cualificación
SNC y de las responsabilidades del Prestataire en esta materia\_

### 7.2.1. Infraestructuras de Datacenters

El Servicio engloba la puesta a disposición, para cada Zona de
disponibilidad, de las prestaciones calificadas a continuación:

-   Sitio datacenter situado en Francia para la Región FR, conforme a
    las últimas normas tecnológicas, proponiendo un nivel de
    resiliencia equivalente o superior al nivel Tier 3 del Uptime
    Institute;
-   Puesta a disposición de salas técnicas dentro de datacenters
    dedicados a la acogida de equipos técnicos indispensables para la
    producción del servicio, incluyendo cálculo, almacenamiento, red, cableado,
    y otros componentes necesarios;
-   Alimentación eléctrica segura, asegurada por dos circuitos
    eléctricos distintos, garantizando una continuidad de servicio;
-   Provisión de servicios de climatización, ajustados para respetar las
    normas y recomendaciones de los fabricantes de equipos, para
    mantener un ambiente óptimo para los dispositivos técnicos;
-   Supervisión continua y metrología detallada, permitiendo un seguimiento
    preciso y una gestión proactiva del rendimiento y de la seguridad
    del servicio proporcionado.

El Prestataire asegura la puesta a disposición de servicios avanzados de
detección y extinción de incendios, diseñados para identificar y
neutralizar eficazmente cualquier inicio de fuego dentro de las instalaciones.
Estos sistemas son esenciales para garantizar la seguridad de los equipos
y de los datos. Incluyen detectores de humo de alta precisión y dispositivos de
extinción que pueden actuar rápidamente sin dañar el equipo informático.
Este servicio es crucial para prevenir los riesgos de incendio, minimizar
los daños potenciales y asegurar la continuidad de las operaciones.

Se informa al COMMANDITAIRE que todos los procedimientos y medidas de
seguridad implementados, incluidos los ensayos anuales de conmutación a
los grupos electrógenos, son esenciales para garantizar la continuidad
y la integridad de los servicios proporcionados. Estas prácticas están
diseñadas para minimizar los riesgos de fallas y asegurar una reactividad
óptima en caso de Incidente. Al aceptar estas condiciones, el COMMANDITAIRE
reconoce la importancia de estas medidas y se compromete a cooperar plenamente
para facilitar su implementación. También se anima al COMMANDITAIRE a
conocer las recomendaciones de seguridad proporcionadas e integrarlas
en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de pilotaje del Servicio

El Prestataire proporciona al COMMANDITAIRE la consola de administración y
la API necesaria para la utilización del Servicio. También se compromete a
mantener esta consola de administración y API en condiciones operativas
óptimas y a garantizar su seguridad de manera continua. Esta consola de
administración y API se designan conjuntamente como "interfaz COMMANDITAIRE".

El Prestataire alerta al COMMANDITAIRE de que un uso anormal de la interfaz
COMMANDITAIRE, en particular en caso de sobrecarga de sus APIs de comando
(hammering), puede desencadenar medidas de seguridad automáticas que
resulten en el bloqueo del acceso a las APIs de comando o al Servicio.
Cabe señalar que esta situación no constituye una indisponibilidad del
Servicio, sino una acción de protección del Servicio y de la infraestructura
del Prestataire; por lo tanto, el COMMANDITAIRE no puede considerarla como
una indisponibilidad en sus cálculos.

Además, el Prestataire precisa al COMMANDITAIRE que las solicitudes
perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a
una por segundo (Throttling). Si el COMMANDITAIRE envía solicitudes
idénticas a una frecuencia superior, su rechazo no podrá ser interpretado
como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cálculo

El Servicio incluye la provisión, en las zonas de disponibilidad
suscritas por el COMMANDITAIRE, de los equipos necesarios para
la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

-   La provisión de los chasis técnicos necesarios para el correcto
    funcionamiento de las cuchillas de cálculo;
-   La provisión de las cuchillas de cálculo en las cantidades especificadas por
    el COMMANDITAIRE y distribuidas según las zonas de disponibilidad de su
    elección. Cabe señalar que estas cuchillas de cálculo están
    exclusivamente dedicadas al COMMANDITAIRE;
-   La puesta a disposición de sistemas operativos de tipo
    hipervisores, así como la garantía del mantenimiento en condiciones
    operativas y de seguridad de la infraestructura de software
    necesaria para la gestión de estos sistemas operativos. Cabe resaltar que,
    aunque el Prestataire es responsable del mantenimiento operativo y de la
    seguridad global del Servicio, no posee conocimientos específicos
    sobre los entornos de producción del COMMANDITAIRE ni sobre los
    requisitos relacionados con sus cargas de trabajo. Por lo tanto, la
    responsabilidad de decidir la actualización de los sistemas
    operativos de las cuchillas de cálculo hipervisores, una acción que puede
    requerir un reinicio, recae completamente sobre el COMMANDITAIRE. Esta
    operación puede realizarse a través de la Interfaz COMMANDITAIRE.

La elección del modelo de cuchilla de cálculo, seleccionada entre
el catálogo propuesto por el Prestataire, es responsabilidad del COMMANDITAIRE.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al COMMANDITAIRE de una infraestructura
de almacenamiento compartido de tipo SAN (Storage Area Network), ofreciendo
diversos niveles de rendimiento. Este servicio incluye:

-   La implementación y el mantenimiento en condiciones operativas y de
    seguridad de la red SAN dedicada;
-   La instalación y gestión de los arrays de almacenamiento compartidos
    entre los clientes, incluyendo su mantenimiento en condiciones operativas
    y de seguridad, supervisión y metrología;
-   La implementación de sistemas automatizados para la asignación de LUNs
    (Logical Unit Numbers) de almacenamiento dedicados al uso del
    COMMANDITAIRE, conforme a los volúmenes suscritos por el COMMANDITAIRE.

### 7.2.5. Infraestructura de red global

El Prestataire despliega, dentro del marco del Servicio, una red global
que facilita al COMMANDITAIRE la accesibilidad de sus sistemas alojados.
Este servicio incluye:

-   La provisión, el mantenimiento en condiciones operativas y de
    seguridad de todas las conexiones de fibra óptica que interconectan
    las diferentes Zonas de disponibilidad;
-   El suministro, el mantenimiento operativo y de seguridad de los
    equipos técnicos necesarios para el correcto funcionamiento de la
    red y el aislamiento de los diferentes clientes.

La interconexión de red del Tenant MANDANTE, a Internet o a redes
privadas, y los equipos de red, enlaces de operadores y otros componentes
técnicos que realizan esta interconexión, no forman parte del
perímetro del Servicio. Esta interconexión de red se implementa
conforme a las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo

El Proveedor pone a disposición del MANDANTE un servicio de respaldo
integrado, dedicado y gestionado, destinado a la protección de sus
máquinas virtuales. El Proveedor asegura el mantenimiento operativo y
de seguridad de este servicio de respaldo. El Proveedor garantiza que
los respaldos del MANDANTE estarán ubicados fuera de la Zona de
disponibilidad de las cargas de trabajo respaldadas, siempre que el
MANDANTE haya suscrito las Unidades de obra adecuadas.

Este servicio de respaldo se limita al respaldo de las máquinas virtuales
y las configuraciones de topología del entorno OpenIaaS de los Tenants
del MANDANTE en el marco del Servicio. La elaboración y aplicación de
una política de respaldo adecuada por parte del MANDANTE depende de la
suscripción a unidades de obra específicas. Por lo tanto, es
responsabilidad del MANDANTE asegurarse de la disponibilidad de los
recursos técnicos necesarios a través del Proveedor para implementar
su política de respaldo o ajustarla según los medios disponibles.

El Proveedor se compromete a notificar al MANDANTE en caso de
restricciones de capacidad y a proporcionar asistencia y asesoramiento
para la optimización de los recursos. Las obligaciones del Proveedor se
limitarán a la implementación de las necesidades expresadas por el
MANDANTE en términos de política de respaldo, dentro de los recursos
suscritos.

### 7.2.7. Implementación de soluciones de recuperación de actividad o continuidad de actividad

El Proveedor proporciona al MANDANTE todas las soluciones técnicas
necesarias para garantizar una distribución óptima de sus recursos a través
de diversas Zonas de disponibilidad. Es responsabilidad del MANDANTE
gestionar eficazmente esta distribución de recursos, para la cual tiene
la posibilidad de utilizar las herramientas del Proveedor disponibles
para este propósito.

## 7.3. Limitaciones de los servicios en el modelo OpenIaaS en proceso de calificación

### 7.3.1. Servicios gestionados en RUN

Es importante destacar que se excluyen del Servicio:

-   El alojamiento de componentes físicos del MANDANTE;

-   La interconexión de red del Tenant MANDANTE, a Internet o a redes
    privadas, incluyendo los enlaces de operador;

-   Cualquier servicio de tipo gestionado, o TMA;

-   Cualquier asistencia en las máquinas virtuales a nivel de SO y
    superior en la pila de responsabilidades IaaS, incluso si se trata de
    simple supervisión.

Sin embargo, no se excluye en absoluto que el MANDANTE recurra a tales
servicios a través de la oferta MSP del Proveedor para intervenir en
modo de servicios gestionados en sus Tenants. Estos servicios no estarán
cubiertos por este Acuerdo de servicio y sus compromisos/cláusulas 
bipartitas.

### 7.3.2. Configuración de respaldo

Por defecto, el Proveedor proporciona la implementación de los recursos
de IaaS al MANDANTE reservando recursos y configurando los despliegues
para utilizar las Zonas de disponibilidad. Es responsabilidad del
MANDANTE elegir las Zonas de disponibilidad a través de la interfaz del
MANDANTE.

### 7.3.3. Configuración del respaldo

El servicio de respaldo se limita al respaldo de las máquinas virtuales
y las configuraciones de topología que representan el entorno OpenIaaS de
los Tenants del MANDANTE en el marco del Servicio.

El servicio de respaldo y la finalización de la política de respaldo del
MANDANTE está sujeta a la suscripción de espacio de almacenamiento en 
el almacenamiento masivo necesario para asegurar el servicio. Por lo 
tanto, es responsabilidad del MANDANTE suscribir a través del Proveedor 
los medios técnicos necesarios para asegurar la política de respaldo en 
su ámbito informático o ajustar la política de respaldo a los medios puestos
en marcha. El Proveedor se compromete a informar al MANDANTE en caso de
límite de capacidad técnica.

El Proveedor implementará los medios técnicos y humanos
necesarios para hacer el respaldo del sistema alojado dentro de los
límites de los recursos suscritos por el MANDANTE.

Además, en los casos de los ámbitos no cubiertos por el
Proveedor, corresponde al MANDANTE definir su propia estrategia de
respaldo y configurar él mismo los respaldos de las MV o realizar una
Solicitud de servicio al Proveedor para que la configuración de los
respaldos para los servidores físicos sea implementada si el MANDANTE
dispone de un contrato de servicio gestionado que permita al Proveedor
actuar a través de la interfaz del MANDANTE, que es la consola de
administración que se pone a disposición en el marco de este Acuerdo de
servicio y que dispone de funcionalidades para configurar los respaldos.

Además, este servicio solo se comprometerá a reflejar mediante la
configuración a través de la interfaz del MANDANTE, la configuración
especificada claramente por el MANDANTE.

Por razones de flexibilidad de la oferta del Proveedor, el
MANDANTE tiene la opción de asociar una política de no respaldo en
algunas de sus MV. En ese caso, corresponde al MANDANTE
asumir esta elección. El Proveedor no respalda las MV 
asociadas con la política "no backup". El Proveedor alerta al MANDANTE
que elegir la política "no backup" o elegir respaldar manualmente
expone al MANDANTE a una pérdida de datos definitiva en caso de
Incidente en las capas bajas o en las capas que dependan de su
responsabilidad en el modelo IaaS. En tal caso, será imposible hacer
responsable al Proveedor de restaurar los datos, ya que no habrá
nada que restaurar. El Proveedor recomienda de siempre
respaldar las MV.

Para cualquier tema relacionado con el SO instalado en una máquina
virtual y cualquier software o programa ejecutado "por encima del SO",
es responsabilidad del MANDANTE realizar las operaciones
de administración y supervisión dentro de la Unión Europea si
desea garantizar que toda la verticalidad de las capas del SI sean
operadas y gestionadas desde la Unión Europea. Las operaciones
de administración fuera del ámbito de responsabilidad del Proveedor
en el marco del presente Acuerdo de servicio se indican en la
sección "Modelo de responsabilidades compartidas" del presente
Acuerdo de Servicio.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el MANDANTE reconoce que deberá:

-   Operar con una virtualización tipo Xen en las versiones
    soportadas por el editor y proporcionadas por el Proveedor en el
    marco del Servicio;

-   Recurrir a través del Proveedor al uso de la herramienta de
    respaldo;

-   Declarar direcciones IP fijas desde las cuales el Proveedor le
    autorizará el acceso a la interfaz del MANDANTE (filtrado por
    lista blanca). Las modificaciones de esta lista de IP deberán
    realizarse a través del menú previsto para tal efecto en la
    consola o mediante Solicitudes de servicio para las
    modificaciones posteriores. En la inicialización del
    servicio, el Proveedor habrá sido informado al menos de 1
    dirección IP tal como se describe.

## 7.5. Localización del servicio en Francia

Se especifica que ninguna de las operaciones y ninguno de los componentes
físicos implicados en la prestación del Servicio, objeto del presente
Acuerdo de servicio, está situado fuera de la Unión Europea.

Esto incluye, en particular, el soporte, la supervisión operativa y la
supervisión de seguridad (SOC) de la infraestructura técnica que dota
el Servicio. De hecho, todo el almacenamiento, todas las tareas de
administración, supervisión y todos los tratamientos se realizan en
Francia.

### 7.5.1. Localización de los Datacenters que alojan el Servicio

A falta de las operaciones de los colaboradores y las agencias del
Proveedor, todas las operaciones de producción (incluido el
almacenamiento y el procesamiento de datos) y componentes técnicos que
proporcionan el Servicio están ubicados en los Datacenters con base en
Francia.

### 7.5.2. Localización de las agencias Cloud Temple que operan el servicio

Los colaboradores de Cloud Temple que intervienen en el ámbito del
Servicio operan desde las agencias de Cloud Temple, todas ellas
ubicadas exclusivamente en Francia. Estas agencias están ubicadas en
Francia, en Tours, Lyon, Caen y París La Défense.

El MANDANTE está informado de la posibilidad de los empleados de Cloud 
Temple de trabajar a distancia. No obstante, el Proveedor garantiza el 
mismo nivel de seguridad en los accesos a distancia, especialmente en 
los accesos VPN. Estos accesos remotos se implementan de acuerdo con los 
requisitos del referencial SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte que acompaña el servicio

El Proveedor proporciona un servicio de soporte técnico destinado a
asistir al MANDANTE en la gestión, resolución de problemas y optimización
de sus recursos desplegados. Este servicio cubre una amplia gama de
actividades, desde la ayuda en la configuración inicial de los servicios
hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación, se describe las características y funcionalidades del servicio 
de soporte:

-   Asistencia en la implementación inicial del uso del Servicio;
-   Asistencia en la resolución de incidentes;
-   Asistencia en la resolución de problemas;
-   Seguimiento y asesoramiento sobre la optimización de la infraestructura técnica.
Dans le cadre du service de support, le Prestataire ne se substitue pas
au COMMANDITAIRE dans l'usage du Service. Le COMMANDITAIRE reste
entièrement responsable de la configuration, de l'exploitation de ses VM
et de ses Tenants, et de la gestion de tous les éléments (données et
applications incluses) qu'il a stockés ou installés sur les
infrastructures du Prestataire. Le service de support technique est
fourni en accord avec les Conditions Générales de Vente et
d'Utilisation, le Prestataire étant tenu à une obligation de moyens.

El COMMANDITAIRE se compromete a utilizar el servicio de soporte técnico
de manera razonable, absteniéndose, en particular, de solicitar servicios
no suscritos al Prestataire y de involucrar a los equipos del Prestataire
con sus propios clientes o con terceros no incluidos en el Contrato. El
Prestataire se reserva el derecho de rechazar cualquier solicitud de
servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de
las unidades de obra de soporte asociadas.

### 7.6.2. Sollicitation du service support technique

El soporte técnico es accesible a través de un sistema de tickets
mediante la consola del COMMANDITAIRE y está disponible durante las horas
normales de oficina fuera de los días festivos (8h - 18h; Lunes -- Viernes;
calendario y horarios franceses). Para emergencias que ocurran fuera de
las horas hábiles, incluyendo incidentes que afecten significativamente
la producción, el servicio de guardia puede ser contactado a través de un
número comunicado al COMMANDITAIRE al inicio del Servicio.

Para cada solicitud o Incidente, es imprescindible generar un ticket
ante el soporte del Prestataire. La inicialización de este ticket,
incluyendo toda la información necesaria, es esencial y marca el comienzo
de la evaluación de los compromisos del Prestataire.

Tan pronto como el Prestataire recibe una solicitud o notificación
de Incidente, ya sea a través de la consola de gestión o a raíz de una
llamada telefónica, se crea un ticket automáticamente. Al declarar un
Incidente, es esencial que el COMMANDITAIRE proporcione al Prestataire el
máximo de detalles sobre el problema encontrado. Este enfoque es crucial
para permitir una evaluación adecuada de la situación, su priorización y
un diagnóstico eficaz.

El COMMANDITAIRE recibe entonces una confirmación por correo electrónico,
indicando la creación del ticket y su número único. El COMMANDITAIRE puede
consultar el estado e historial de sus solicitudes y declaraciones
de Incidentes directamente desde la consola de gestión.

### 7.6.3. Processus de gestion des Incidents

Durante la declaración de un Incidente, el equipo de soporte técnico del
Prestataire inicia una investigación para identificar la causa del
problema y establecer un diagnóstico. El COMMANDITAIRE debe colaborar
activamente con el Prestataire proporcionando toda la información
necesaria y realizando las pruebas requeridas. El Prestataire puede
acceder al Servicio del COMMANDITAIRE para diagnosticar el Incidente.

Si los Servicios del Prestataire son considerados funcionales y el
Incidente no es imputable a él, el COMMANDITAIRE será informado. A solicitud
del COMMANDITAIRE, el Prestataire puede proponer Servicios
Profesionales para identificar el origen del problema, facturables bajo
acuerdo previo por tramo de 30 minutos.

En caso de que el Incidente sea responsabilidad del Prestataire o de
uno de sus subcontratistas, este completa el diagnóstico y trabaja en la
restauración del Servicio sin costo adicional. El diagnóstico se basa en
los intercambios entre las Partes y los datos del Prestataire, estos
elementos son considerados probatorios por acuerdo de las Partes.

### 7.6.4. Processus de priorisation des traitements

La determinación del nivel de prioridad de un caso se basa en un análisis
matricial que evalúa el impacto del Incidente y su grado de criticidad:

-   Los niveles de impacto se definen de la siguiente manera:

  -------------------------------------------------------------------------
  Nivel     Descripción
  de impacto
  ---------- ---------------------------------------------------------------
  Impacto I1  El o los servicios del Prestataire están interrumpidos

  Impacto I2  El o los servicios del Prestataire están degradados

  Impacto I3  El o los servicios del Prestataire son actualmente estables,
             pero muestran signos de potencial declive a largo plazo
  -------------------------------------------------------------------------

-   Los niveles de Criticidad se definen de la siguiente manera:

  ------------------------------------------------------------------------
  Nivel de   Descripción
  criticidad
  ----------- -----------------------------------------------------------
  Criticidad   El o los servicios del Prestataire se degradan a una
  C1          velocidad preocupante

  Criticidad   El o los servicios del Prestataire se deterioran
  C2          progresivamente con el tiempo

  Criticidad   El o los servicios del Prestataire presentan uno o varios
  C3          inconvenientes sin consecuencias significativas
  ------------------------------------------------------------------------

-   Basado en un análisis profundo de la situación, teniendo en cuenta
    los elementos que determinan el Impacto y la Criticidad, se asigna una
    prioridad al ticket conforme a la siguiente matriz de decisión:

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

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad
se detallan en el siguiente capítulo.

### 7.6.5. Langue et localisation du service de support

El soporte es proporcionado por el Prestataire al COMMANDITAIRE como mínimo
en lengua francesa. El soporte también puede ser proporcionado en lengua
inglesa.

Las operaciones del servicio de soporte del Prestataire para la oferta de
servicio de infraestructura calificada SecNumCloud están situadas en la Unión
Europea.

# 8. Engagements et niveaux de services

El Prestataire se compromete a garantizar una vigilancia continua de la
rendimiento y de la integridad de seguridad de su infraestructura
técnica proporcionando el Servicio, asegurando su óptimo funcionamiento.

La indisponibilidad de un servicio, cubierto por un indicador de rendimiento,
se reconoce desde su identificación por el sistema de supervisión del
Prestataire, o tras una notificación por un usuario del COMMANDITAIRE. El
inicio de la indisponibilidad se fija en el momento más temprano entre
estos dos eventos, para garantizar un cálculo preciso y justo del
tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente con la
restauración completa del servicio, confirmada ya sea por las herramientas de
supervisión del Prestataire o por una respuesta del usuario, asegurando así
una reanudación efectiva de las operaciones y una medición fiel de la
duración de la interrupción.

## 8.1. Engagements de disponibilité de l'infrastructure

El Prestataire se compromete a mantener un nivel de disponibilidad y
rendimiento conforme a los estándares definidos para cada período
especificado. Los compromisos de nivel de servicio (Service Level
Agreements, SLAs) se aplican siempre que el COMMANDITAIRE
implemente sus sistemas a través de al menos dos Zonas de
disponibilidad presentes en la Región correspondiente.

En ausencia del cumplimiento de estas condiciones por parte del
COMMANDITAIRE, este no podrá reclamar la aplicación de los SLAs
correspondientes, los cuales están específicamente identificados por un
asterisco (\*). El acceso a los SLAs se realiza a través de la interfaz
COMMANDITAIRE. Las medidas se entienden calculadas mensualmente:

-   \*\*SLA 1 (\*) : IC-INFRA_SNC-01\*\* -- Disponibilidad de la
    capacidad de cómputo (Compute): tasa de disponibilidad garantizada del
    99,99%, calculada sobre una base de 24h/24, 7d/7.
-   \*\*SLA 2 (\*) : IC-INFRA_SNC-02\*\* -- Disponibilidad del almacenamiento:
    tasa de disponibilidad garantizada del 99,99%, calculada sobre una base de
    24h/24, 7d/7.
-   **SLA 3 : IC-INFRA_SNC-03** -- Fiabilidad de la copia de seguridad: tasa de
    disponibilidad garantizada del 99,99%, calculada sobre una base de 24h/24,
    7d/7.
-   \*\*SLA 4 (\*) : IC-INFRA_SNC-04\*\* -- Disponibilidad de
    la infraestructura de red: tasa de disponibilidad garantizada del 99,99%,
    calculada sobre una base de 24h/24, 7d/7.
-   **SLA 5 : IC-INFRA_SNC-05** -- Acceso a Internet: tasa de
    disponibilidad garantizada del 99,99%, calculada sobre una base de 24h/24,
    7d/7.

***Observaciones*** :

-   *En respuesta a un ataque de denegación de servicio distribuido (DDoS),
    el Prestataire se reserva el derecho de ajustar su configuración de
    enrutamiento de Internet para limitar el impacto de este ataque y
    salvaguardar su infraestructura. En particular, si una dirección IP
    perteneciente al COMMANDITAIRE es atacada, el Prestataire puede recurrir
    a la técnica de blackholing a través de la comunidad BGP para bloquear
    todo el tráfico hacia la dirección IP atacada en su origen con sus
    proveedores, con el fin de proteger los recursos del COMMANDITAIRE así
    como los de otros COMMANDITAIRES y la infraestructura del Prestataire. El
    Prestataire insta encarecidamente al COMMANDITAIRE a adoptar medidas
    similares, como el uso de software de firewall de aplicaciones web.
    disponibles sur le marché, et à configurer soigneusement ses groupes
    de seguridad vía la API de comando.*

-   *El Proveedor insiste en la necesidad para el CLIENTE de minimizar
    las aperturas de flujo, evitando en particular hacer accesibles los
    puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto
    TCP 3389) desde todo Internet (subred 0.0.0.0/0), así como los
    protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS**
    (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz CLIENTE

-   SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del
    Servicio: una disponibilidad garantizada del 97%, asegurada de forma
    continua, 24 horas al día y 7 días a la semana.
-   SLA 7: IC-INFRA_SNC-07 -- Acceso a las APIs de gestión del Servicio:
    una disponibilidad del 99.9%, calculada sobre una base 24h/24, 7d/7.

## 8.3. Compromiso de disponibilidad del soporte

-   **SLA 8: IC-INFRA_SNC-08** -- Aquí están los compromisos de
    rendimiento del soporte técnico del Proveedor para los incidentes,
    excluyendo mantenimientos programados:

  ------------------------------------------------------------------------
  Prioridad       Garantía de tiempo de intervención     Objetivo de
                 (GTI)                                 rendimiento
  -------------- ----------------------------------- ---------------------
  Prioridad       30min                                95%
  **P1**                                             

  Prioridad       2h                                  90%
  **P2**                                             

  Prioridad       4h                                  90%
  **P3**                                             

  Prioridad       24h                                 85%
  **P4**                                             

  Prioridad       48h                                 85%
  **P5**                                             
  ------------------------------------------------------------------------

-   **SLA 9: IC-INFRA_SNC-09** -- Aquí están los compromisos de
    rendimiento del soporte técnico del Proveedor para las solicitudes de
    servicio:

  ------------------------------------------------------------------------
                   Garantía de tiempo de intervención   Objetivo de
                   (GTI)                              rendimiento
  ---------------- ---------------------------------- --------------------
  Solicitud de       4h                                 90%
  servicio                                             

  ------------------------------------------------------------------------

*Nota*:

-   *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula
    a partir de la diferencia entre el momento en que el CLIENTE abre el
    ticket y la primera intervención del soporte del Proveedor.*
-   *La investigación de incidentes referentes a los CLIENTEs no
    incluirá intervención remota en los servidores alojados del CLIENTE.
    Esta asistencia se limitará a la explicación de las métricas
    disponibles relativas al entorno del CLIENTE, con el fin de facilitar
    la comprensión de los incidentes o problemas de rendimiento
    encontrados. Basado en los resultados de este análisis, se podrán
    sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento de objetos S3

-   **SLA 10: IC-INFRA_SNC-10** -- Aquí están los compromisos de
    disponibilidad para el almacenamiento de objetos S3:

  ------------------------------------------------------------------------------
  Indicador          Compromiso                              Objetivo de
                                                             disponibilidad
  ------------------- -------------------------------------- -------------------
  IC-INFRA-SNC-10.1   Durabilidad del almacenamiento de un   99.9999999% / año
                      objeto en una región                   

  IC-INFRA-SNC-10.2   Disponibilidad de la API de            99.99%
                      Almacenamiento de Objetos S3           

  IC-INFRA-SNC-10.3   Latencia máxima de acceso a un objeto  150 ms
                      en una región                          
  ------------------------------------------------------------------------------

Observaciones:

-   El Servicio de Almacenamiento de Objetos está diseñado específicamente
    para el almacenamiento de objetos y debe ser utilizado únicamente con
    este fin, **excluyendo categóricamente su uso en modo bloque**.
    Utilizar el modo bloque mediante métodos indirectos, incluyendo por
    ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una
    infracción a los términos de uso establecidos. Ningún incidente,
    malfuncionamiento o daño resultante de este uso no conforme será 
    cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en 
    este acuerdo de servicios.
-   La garantía de durabilidad está condicionada al uso de los servicios
    conforme a las mejores prácticas y estándares actuales, y excluye
    explícitamente cualquier modificación de los datos, sea intencional o
    accidental, resultante de acciones emprendidas por el CLIENTE.

## 8.5. Precisión respecto al compromiso de copia de seguridad

La estrategia de copia de seguridad desplegada para el CLIENTE, está
condicionada por la suscripción a las unidades de obra adecuadas.

El Proveedor se compromete a proporcionar una solución de copia de
seguridad que permitirá al CLIENTE aplicar las políticas de copia de
seguridad deseadas.

Se precisa que el alcance del Proveedor se limita a la puesta a
disposición de un servicio de copia de seguridad y es responsabilidad del
CLIENTE supervisar, a través de la interfaz del CLIENTE, la correcta
ejecución de las políticas asociadas.

Se precisa que la gestión de capacidades de almacenamiento del espacio
dedicado a las copias de seguridad sigue siendo responsabilidad y a cargo
del CLIENTE. El Proveedor pone a disposición el nivel de uso a través de
la consola.

*Ejemplo: No copia de seguridad de una máquina virtual:*

*El CLIENTE tiene la responsabilidad de verificar / supervisar la correcta
ejecución de las políticas de copia de seguridad. En el caso de que el
CLIENTE constate que una máquina virtual no se está copiando, deberá
investigar la causa. El CLIENTE puede solicitar el Soporte del Proveedor
según el nivel de soporte suscrito para recibir asistencia.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9**, será exclusivamente aplicable en
el caso de un Incidente del servicio de copia de seguridad.

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Proveedor

El Proveedor se compromete:

-   a informar adecuadamente a su CLIENTE (por ejemplo, en caso de
    límite de capacidad de recursos técnicos que prestan el Servicio).

-   a informar formalmente al CLIENTE, con un mes de antelación,
    de cualquier cambio jurídico, organizativo o técnico que pueda
    impactar la conformidad del Servicio con los requisitos de protección
    contra leyes extraeuropeas (19.6 del marco de referencia SNC v3.2).

-   a proporcionar al CLIENTE interfaces y servicios que están
    al menos en idioma francés.

-   a tener en cuenta los requisitos sectoriales específicos relacionados
    con los tipos de información confiada por el CLIENTE en el marco de
    la prestación del Servicio y dentro de los límites de las
    responsabilidades del Proveedor por una parte, y de las disposiciones
    previstas en el Contrato por otra parte.

-   a estudiar los requisitos sectoriales específicos relacionados con
    los tipos de información confiada por el CLIENTE en el marco de la
    prestación del Servicio, posteriormente expresados por el CLIENTE, y
    a indicar a este último las acciones necesarias para su consideración.

-   a no divulgar ninguna información relacionada con la prestación a
    terceros, salvo autorización formal y escrita del CLIENTE.

-   a poner a disposición toda la información necesaria para la 
    realización de auditorías de conformidad conforme a las disposiciones 
    del artículo 28 del RGPD.

-   a informar al CLIENTE, a través del presente Acuerdo de Servicio, 
    sobre cualquier Incidente de seguridad que afecte al Servicio o al uso
    que el CLIENTE haga del Servicio (incluyendo los datos del CLIENTE).

-   a autorizar a un proveedor de auditoría de la seguridad de los
    sistemas de información (PASSI) cualificado y mandatado por el
    Proveedor, para auditar el servicio así como su sistema de
    información, conforme al plan de control del SecNumCloud del
    Proveedor. Además, el Proveedor se compromete a proporcionar toda la
    información necesaria para llevar a cabo las auditorías de
    conformidad con las disposiciones del artículo 28 del RGPD, realizadas
    por el CLIENTE o un tercero mandatado.

-   a proporcionar, en calidad de subcontratista y conforme al artículo 28
    del Reglamento General de Protección de Datos (RGPD), asistencia y 
    asesoramiento al CLIENTE, advirtiéndole tan pronto como una instrucción
    emitida por este último pueda constituir una violación de las normas
    de protección de datos.

-   a notificar al CLIENTE en un plazo razonable, a través de la consola del
    CLIENTE o por correo electrónico al contacto del CLIENTE, cuando un
    proyecto impacte o pueda impactar el nivel de seguridad o la
    disponibilidad del Servicio, o a causar una pérdida de funcionalidad,
    así como los impactos potenciales, las medidas de mitigación
    implementadas y los riesgos residuales que le conciernen.

-   a documentar e implementar todas las procedimientos
    necesarios para cumplir con los requisitos legales, regulatorios y
    contractuales aplicables al servicio, así como las necesidades
    específicas de seguridad del CLIENTE, definidas por este último y
    previstas en el Contrato.

-   a no utilizar los datos del CLIENTE resultantes de la
    producción para realizar pruebas, a excepción de obtener
    previamente la autorización explícita del MANDANTE, en cuyo caso
    el Proveedor se compromete a anonimizar dichos datos y asegurar la
    confidencialidad durante su anonimización.

-   a eliminar los datos y Datos técnicos relativos al
    MANDANTE, conforme al « procedimiento de borrado de
    datos al término del Contrato » descrito en el presente Convenio de
    servicio al finalizar o rescindir el Contrato.

-   a asegurar la eliminación segura de la totalidad de los datos del
    MANDANTE mediante la reescritura completa de todo soporte que haya
    alojado sus datos en el marco del Servicio.

A solicitud del MANDANTE formal y escrita, el Proveedor se compromete
a :

1.  Poner a disposición del MANDANTE el reglamento interno y la
    carta de ética del Proveedor ;

2.  Poner a disposición del MANDANTE las sanciones previstas en caso
    de infracción a la política de seguridad ;

3.  Proveer al MANDANTE todos los eventos que le conciernen
    en los elementos de registro del Servicio; el MANDANTE
    puede además consultar de forma autónoma los eventos relativos
    a su uso del Servicio a través de las interfaces web y API del
    Servicio ;

4.  Poner a disposición del MANDANTE los procedimientos que permiten
    cumplir con los requisitos legales, reglamentarios y contractuales vigentes aplicables al Servicio, así como las necesidades de seguridad 
    específicas del MANDANTE previstas en el Contrato ;

5.  Proveer los elementos de evaluación de riesgos relativos a la
    sumisión de los datos del MANDANTE al derecho de un estado
    no miembro de la Unión Europea ;

6.  Informar al MANDANTE sobre los subcontratistas posteriores 
    que intervienen en la prestación del Servicio, e informarle de cualquier cambio que le impacte relativo a estos subcontratistas.

> El Proveedor y todas sus filiales se comprometen a respetar
> los valores fundamentales de la Unión Europea, a saber, la dignidad 
> humana, la libertad, la democracia, la igualdad, el estado de derecho,
> así como el respeto de los Derechos Humanos. El servicio prestado por el 
> Proveedor es conforme a la legislación vigente en materia de derechos 
> fundamentales y a los valores de la Unión Europea relativos al respeto
> de la dignidad humana, la libertad, la igualdad, la 
> democracia y el Estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor

Debido a todos los términos y condiciones mencionados en el
presente Convenio de servicio, las responsabilidades del Proveedor son
limitadas de la siguiente manera:

1.  El modelo de responsabilidad compartida, descrito en la sección
    « Modelo de responsabilidades compartidas » del presente Convenio de
    servicio, limita de hecho la implicación del Proveedor en las
    capas de funcionamiento que van "por encima" de la provisión de
    recursos de cálculo, red, almacenamiento y respaldo. Esto excluye en particular y sin limitarse a:

    -   La gestión de lo que está instalado en las máquinas virtuales
        (SO, middlewares, aplicaciones, etc.);

    -   La actualización de los SO y demás software instalado por el
        MANDANTE en sus máquinas en sus Tenants;

    -   La seguridad de los programas, software y aplicaciones instalados
        en las máquinas virtuales;

    -   La actualización de las máquinas virtuales;

    -   La copia de seguridad de los datos a nivel de aplicación.

2.  El Proveedor no puede asumir compromisos de respaldo de los
    Tenants del MANDANTE sin que el MANDANTE haya previamente
    suscrito a las unidades de obra adecuadas.

3.  El Proveedor no puede reclamar la propiedad de los datos
    transmitidos y generados por el MANDANTE. De hecho, estos
    son propiedad del MANDANTE.

4.  El Proveedor recalca que no puede en ningún caso explotar y/o
    disponer de los datos transmitidos y generados por el MANDANTE
    sin previa validación de este último, entendiendo que su
    disposición está reservada al MANDANTE.

5.  El Proveedor se libera de toda responsabilidad sobre los componentes
    físicamente alojados y administrados por el Proveedor, pero que son propiedad directa del MANDANTE o de un tercero con el cual el
    MANDANTE haya contratado. El alojamiento de componentes
    físicos de los clientes no forma parte del Servicio y está de hecho
    fuera del marco del presente Convenio de servicio. Incumbe al
    MANDANTE evaluar el nivel de adherencia o dependencia
    que introducen estos componentes con respecto al Servicio OpenIaaS en
    curso de calificación SecNumCloud.

## 9.3. Limitación de acceso

En el marco del Servicio, el Proveedor tiene expresamente prohibido
acceder a los Tenants pertenecientes al MANDANTE sin previa autorización. Es responsabilidad del MANDANTE proporcionar los
accesos necesarios al personal del Proveedor, según las necesidades
específicas del alojamiento y, en su caso, de los servicios
profesionales de soporte, si esta opción ha sido elegida por el
MANDANTE.

El MANDANTE reconoce que estos accesos son otorgados exclusivamente
para las necesidades relacionadas con la prestación de servicios
convenidos, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros implicados en la prestación del
servicio del Proveedor está estrictamente prohibido. En caso de que un
requisito técnico específico requiera tal acceso, éste sólo podrá
establecerse después de haber notificado claramente al MANDANTE,
proporcionado una justificación detallada y obtenido su acuerdo por
escrito.

Esta medida garantiza el control y la seguridad de los datos del
MANDANTE, asegurando que toda excepción a la regla esté debidamente
autorizada y documentada.

## 9.4. Responsabilidades de terceros que participan en la prestación del servicio

El Proveedor gestiona la lista de terceros socios que participan en la
prestación del Servicio. Estos terceros son los editores, proveedores
(del Proveedor) y otros proveedores que participan en la prestación del
Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

-   El Proveedor exige a los terceros que participan en la implementación del
    servicio, en su contribución al Servicio, un nivel de seguridad al
    menos equivalente al que se compromete a mantener en su propia
    política de seguridad aplicable al servicio Secure Temple ;

-   El Proveedor contratualiza, con cada uno de los terceros que participan en
    la implementación del servicio, cláusulas de auditoría que permiten a un 
    organismo de calificación verificar que estos terceros cumplen con los
    requisitos legales y los requisitos SNC, permitiendo al Proveedor cumplir
    con sus compromisos en el presente Convenio de servicio.

-   El Proveedor implementa un procedimiento que permite controlar
    regularmente las medidas puestas en marcha por los terceros que participan
    en la implementación del servicio para cumplir con los requisitos del
    Proveedor y sus compromisos en el presente Convenio de servicio.

-   El Proveedor mantiene un seguimiento de los cambios realizados por los
    terceros que participan en la implementación del servicio que puedan
    afectar el nivel de seguridad del sistema de información del
    servicio.

## 9.5. Responsabilidades y obligaciones del MANDANTE

El MANDANTE tiene las siguientes obligaciones en el marco del
Servicio:

-   Como recordatorio, el Proveedor proporciona al MANDANTE una
    plataforma de ejecución de máquinas virtuales, la configuración de estas es
    responsabilidad del MANDANTE. Cada máquina virtual no puede
    funcionar sin una política de respaldo asociada. El Proveedor define a
    través de sus interfaces políticas de respaldo automáticas. Sin embargo, es
    responsabilidad del MANDANTE activar estas políticas de respaldo y de activar
    las máquinas virtuales.

-   El MANDANTE autoriza a ANSSI y al organismo de calificación
    SNC a auditar el Servicio y la infraestructura técnica que presta el
    Servicio.

-   El MANDANTE es responsable de indicar al Proveedor los
    eventuales requisitos sectoriales específicos relacionados con los tipos
    de información proporcionados por el MANDANTE y que necesitan ser 
    tenidos en cuenta por el Proveedor.

-   El MANDANTE acepta no solicitar al Proveedor requisitos o
    acciones que hagan que el Proveedor incumpla los requisitos del
    referencial SecNumCloud en su versión vigente por un lado, o que
    reduzcan el nivel de seguridad establecido por el cumplimiento de los
    requisitos de este mismo referencial por otro lado.

## 9.6. Derechos del MANDANTE

En cualquier momento durante la relación contractual, el MANDANTE
puede presentar una reclamación relacionada con el servicio cualificado
ante la ANSSI.

En cualquier momento, el MANDANTE puede solicitar al Proveedor que
le ponga a disposición su reglamento interno y su carta de ética.

## 9.7. Eliminación de datos al final del Contrato

Al finalizar el contrato, ya sea por su término o porque sea rescindido 
por cualquier razón, el Proveedor se compromete a proceder con la 
eliminación segura de la totalidad de los datos del MANDANTE, incluidos 
los datos técnicos. El Proveedor se asegurará de comunicar al 
MANDANTE un preaviso formal, respetando un plazo de veintiún (21) 
días naturales. Los datos del MANDANTE serán eliminados en un plazo 
máximo de treinta (30) días tras esta notificación.

Para atestiguar dicha eliminación, el Proveedor entregará al
MANDANTE un certificado que confirme la eliminación de los datos.

# 10. Ciclo de vida del presente Convenio de servicio

## 10.1. Entrada en vigor del Convenio de servicio

El presente Convenio de servicio entra en vigor el día de su firma 
por el MANDANTE.
La recolección, manipulación, almacenamiento y procesamiento de datos
realizados en el marco de la pre-venta, implementación, terminación del
Servicio, se llevan a cabo de acuerdo con la legislación vigente.

## 10.2. Evoluciones del Convenio de Servicio

Las modificaciones o adiciones realizadas al presente Convenio de servicio
se derivan exclusivamente de las solicitudes formuladas por los órganos de
gobernanza designados para tal fin. Estas propuestas de cambio serán
examinadas por las Partes, habilitadas para determinar los aspectos
que requieren una formalización escrita.

Se acuerda que cualquier evolución del Convenio de Servicio, tras
validación, que altere las condiciones financieras inicialmente establecidas,
requerirá la redacción y firma de un adendo al Contrato en
vigor.

Los factores que pueden inducir una revisión de este Convenio de Servicio
incluyen, sin limitarse a:

- La evolución de la infraestructura técnica que ofrece el Servicio OpenIaaS;
- Los ajustes realizados a los servicios implementados por el Proveedor
  para proporcionar el Servicio;
- Las variaciones de los compromisos asumidos y de las sanciones aplicables;
- Las reconfiguraciones organizacionales dentro del CONTRATANTE o del Proveedor;
- La expansión o reducción del ámbito del Servicio.

La gestión de versiones y revisiones del Convenio de Servicio se
consigna en el preámbulo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el CONTRATANTE

Las evoluciones del Convenio de Servicio pueden tener, en particular, origen en:

- Una evolución de la infraestructura gestionada por el Proveedor;

- Una modificación de los servicios implementados por el Proveedor;

- Una modificación de los compromisos de niveles de servicios por el
  Proveedor.

### 10.2.2. Evoluciones desencadenadas por el Proveedor

Cualquier modificación del Convenio de Servicio está sujeta a aceptación
del CONTRATANTE. Se entiende que cualquier modificación o complemento
validado que modifique los elementos financieros del Contrato, podrá implicar
la firma de un adendo a este.

## 10.3. Reversibilidad

Además, Cloud Temple se compromete a permitir una revisión del presente
Convenio de Servicio (incluida su terminación) sin penalización
para el CONTRATANTE en caso de pérdida de la calificación SecNumCloud.

Los Servicios no incluyen obligación de reversibilidad (es decir,
la ayuda al CONTRATANTE para que pueda migrar su sistema hacia otro
Proveedor) salvo la provisión por parte del Proveedor al CONTRATANTE
de la interfaz CONTRATANTE que permite al CONTRATANTE guardar y recuperar
sus datos, incluyendo en particular los datos de configuración de su sistema
de información a través de una de las modalidades técnicas siguientes a elección
del CONTRATANTE : la provisión de archivos siguiendo uno o varios formatos
documentados y utilizables fuera del servicio proporcionado por el
Proveedor o bien a través de la implementación de interfaces técnicas
que permiten el acceso a los datos según un esquema documentado y
utilizable (API).

El CONTRATANTE, como único responsable de su sistema, debe hacer todo
lo posible para facilitar esta operación según sea necesario (lo que implica,
en particular, que establezca una documentación rigurosa para este
propósito) y la elaboración de planes de reversibilidad. En caso de que el
CONTRATANTE necesite un servicio adicional, el
Proveedor puede ofrecer una misión de consultoría a tal efecto
bajo un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes e interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de este Convenio de Servicio

- Siniestros;

- Errores y fallos;

- Incidentes de seguridad que impactan la disponibilidad, la confidencialidad
  o la integridad del Servicio.

#### 11.1.1.2. Tratamiento de los incidentes

> El Proveedor informa al CONTRATANTE lo antes posible, sobre
> incidentes e interrupciones, mediante una notificación en la
> consola CONTRATANTE o por correo electrónico al contacto CONTRATANTE. El
> Proveedor informa al CONTRATANTE sobre el tratamiento del incidente a
> través del canal utilizado para notificar el incidente, o por el canal
> indicado en la notificación del incidente.

#### 11.1.1.3. Nivel de notificación de Incidentes de seguridad

El CONTRATANTE tiene la responsabilidad de elegir los niveles de gravedad
de los Incidentes de seguridad sobre los cuales desea ser informado, por
ejemplo, mediante su formalización en un PAS aplicable al Servicio.

Por defecto, el CONTRATANTE es informado:

- De los incidentes de seguridad con impacto (impactos I1 e I2 según la
  escala de impacto definida en el proceso de priorización de los tratamientos del presente Convenio de Servicio);

- De los incidentes de seguridad que afecten la confidencialidad o
  integridad de los datos del CONTRATANTE confiados en el marco del
  Servicio;

- De las violaciones de datos personales de los cuales el
  CONTRATANTE es responsable del tratamiento conforme al artículo
  8 del Anexo DPA en el marco del Servicio;

-   

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

De las violaciones de datos personales de los cuales el
Proveedor es responsable del tratamiento y que contienen datos
personales del CONTRATANTE, conforme al artículo 8 del Anexo
DPA. El mantenimiento asegurado consiste en la implementación:

- Del plan de mantenimiento en condiciones operativas del Servicio para
  asegurar buenos indicadores de disponibilidad tal como se compromete el
  Proveedor anteriormente;

- Del plan de PCA/PRA si suscrito por el CONTRATANTE desencadenado
  según los posibles incidentes que puedan surgir.

### 11.2.2. Accesos remotos de Cloud Temple en el ámbito del CONTRATANTE

El Proveedor se prohíbe, en el marco del presente Convenio de
servicio, cualquier acceso a los Tenants y al espacio de la interfaz del
CONTRATANTE.

Corresponderá al CONTRATANTE otorgar los accesos necesarios al personal
del Proveedor. El CONTRATANTE reconoce que los accesos serán utilizados
en el marco del alojamiento y en última instancia de la gestión remota (si
suscrito por el CONTRATANTE).

### 11.2.3. Accesos remotos de terceros que participan en la provisión del servicio en el ámbito del CONTRATANTE

No se autoriza ningún acceso remoto de terceros que participen en la provisión
del Servicio.

Si una necesidad técnica hiciera necesario este caso, entonces este
tipo de acceso no se realizaría hasta después de la notificación al
CONTRATANTE, justificación y obtención de su acuerdo por escrito.

# 12. Procedimiento de eliminación de datos al final del Contrato

Al final del Contrato, ya sea que el Contrato haya llegado a su término o por
cualquier otra causa, el Proveedor asegurará la eliminación segura de
la totalidad de los datos procesados en el marco del Servicio, incluyendo
los Datos técnicos del CONTRATANTE. El Proveedor dará
un aviso formal respetando un período de veintiún (21)
días naturales. Los datos del CONTRATANTE serán eliminados en un
período máximo de treinta (30) días después de la notificación. El Proveedor
proporcionará un certificado de eliminación de datos al CONTRATANTE.

# 13. Derecho aplicable

## 13.1. De manera general

El derecho aplicable y al cual se somete el presente Convenio de
servicio es el derecho francés.

## 13.2. Cumplimiento del derecho y de las regulaciones aplicables

El Proveedor se compromete en los siguientes puntos:

- La identificación de las restricciones legales y normativas
  aplicables en el marco del Servicio;

- El cumplimiento de las restricciones legales y normativas aplicables a
  los datos confiados al Proveedor en el límite de las responsabilidades
  de este por una parte, y de las disposiciones previstas en el Contrato
  por otra parte;

- El cumplimiento de la Ley de protección de datos y el RGPD;

- La implementación de medios de protección de datos personales;

- La implementación de un proceso de vigilancia legal y normativa;

- A disponer y mantener relaciones apropiadas o una vigilancia
  con las autoridades sectoriales en relación con la naturaleza de los datos
  procesados en el marco de los Servicios. Esto incluye en particular a la
  ANSSI, el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando en calidad de subcontratista en el sentido del artículo 28 del
Reglamento general de protección de datos (RGPD), el Proveedor
se compromete a:

- Asegurar la transparencia y la trazabilidad;

- Designar un DPO encargado de definir e implementar las
  medidas de protección de datos personales;

- Brindar asistencia y asesoramiento al CONTRATANTE y alertarlo
  si una instrucción de este último constituye una violación de las reglas
  de protección de datos personales si el Proveedor tiene medios
  para identificarlo;

- Garantizar la seguridad de los datos procesados (debido a la
  calificación SecNumCloud).

## 13.4. Protección frente al derecho extracomunitario

La sede estatutaria del Proveedor está establecida dentro de un Estado miembro
de la Unión Europea. El capital social y los derechos de voto en la
sociedad del Proveedor no están, directa o indirectamente:

- Individualmente poseídos en más del 24%;

- Y colectivamente poseídos en más del 39%;

por entidades terceras que posean su sede estatutaria, administración
central o establecimiento principal dentro de un Estado que no sea miembro de
la Unión Europea.

En caso de recurso por parte del Proveedor, en el marco del Servicio, al
servicio de una sociedad tercera, incluyéndole el subcontratista, que posea
su sede estatutaria, administración central o establecimiento principal dentro
de un Estado que no sea miembro de la Unión Europea o que pertenezca o
esté controlada por una sociedad tercera domiciliada fuera de la
Unión Europea, el Proveedor se compromete a:
-   a que esta mencionada sociedad tercera no tendrá ningún acceso
    a los datos operados ;

-   a disponer de una autonomía de explotación mediante la posibilidad
    de recurrir a otro subcontratista o de implementar rápidamente una
    alternativa tecnológica.

Para recordar, los datos afectados son aquellos que son confiados al
Proveedor por el MANDANTE así como todos los Datos Técnicos
que incluyen informaciones sobre los MANDANTES.

Para los propósitos del presente artículo, la noción de control se entiende
como la mencionada en el II del artículo L233-3 del código de
comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Por Cloud Temple, el PROVEEDOR

Por \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el MANDANTE