---
title: Acuerdo de Servicio Específico - Bare Metal
---

# 1. ACUERDO DE SERVICIO BARE METAL

  ------------------------------------------------------------------------------------------------------
  **Destinatarios:**                     **CLIENTE**
  -------------------------------------- ---------------------------------------------------------------
  **Referencia del documento**           CT.AM.JUR.ANX. CdSS-BM - 20250122_v1.0.docx_Día MM AAAA - VF

  **Sus contactos**                      *Nombre* *Apellido*

                                         Account Manager

                                         e-mail: *nombre.apellido*\@cloud-temple.com

  **Fecha de última actualización**      22/01/2025

**Fecha de validación contractual**    Día MM AAAA
  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  **Versión**   **Fecha**    **Acción**                           **Autor**
  ------------- ------------ ------------------------------------ -----------------
  v1.0          22/01/2025   Redacción inicial                    Nicolas BODILIS
  ------------- ------------ ------------------------------------ -----------------

  ---------------------------------------------------------------------------------

# 2. ÍNDICE

- [1. **ACUERDO DE SERVICIO BARE METAL**](#Xc3786c07943ae71dec5191b24567a7f31cb6100)
- [2. **ÍNDICE**](#X3dffd8c5466b60a9d1847f151e1ff8bf27d5bbe)
- [3. Preliminar y Glosario](#X9df3d46524e9acceada5b6725a4b3f19a8b9b42)
  - [3.1. Preliminar](#X72bdbcbbf0c088c7b664a8859dff9c5e94a1c67)
  - [3.2. Glosario](#X0bd89fddb7967cedd9680ed4f7efa236729ef3e)
- [4. Acrónimos](#X69ea3329484b8f0083d344ad9c43d7dabdcccc9)
- [5. Objeto del presente Acuerdo de servicio](#X30e34f28e133265489633a87e3abd4d1a022de5)
- [6. Auditoría](#X910e2801262de94af715f54b8fb509cc70cc79a)
- [7. Descripción del Servicio](#X3d12a6c93683f0122f5f9a8e21e7c12fc92490b)
  - [7.1. Modelo de responsabilidad compartida](#X5ab2fd5cebb0dc76febf8e32f5665b447285437)
  - [7.2. Presentación detallada del alcance del Servicio](#Xd81ad0562f6e00e693916802084624b2a4885a5)
    - [7.2.1. Infraestructuras de Datacenters](#Xfd30a9e9ca5808eb0dd2b0f76d8755ff494726d)
    - [7.2.2. Infraestructura de software para la gestión del Servicio](#X429d709e167549b1f31f4cdbe79bbf526f0b1dc)
    - [7.2.3. Infraestructuras de cálculo](#X432e4596f65dd97ffb3314bc9725a08a9369f4d)
    - [7.2.4. Infraestructura de almacenamiento](#X30efbac0441ad31cd6ec07282a96acfcd07e9b2)
    - [7.2.5. Infraestructura de red global](#X78b4484e386c95a988a698cd84bae342679ddb5)
    - [7.2.6. Implementación de soluciones de recuperación ante desastres o continuidad de negocio](#X5610bffa77dd118e87cbee05f204158179c962f)
  - [7.3. Limitaciones de los servicios en el modelo Bare Metal cualificado](#X9afa960ae3673041349d17f6a264de8fb35d3b0)
    - [7.3.1. Servicios gestionados en RUN](#Xa64cd9832e1132b6d2d4e8ef50163a925fcceeb)
    - [7.3.2. Configuración de respaldo](#Xfc39a8474ae9c8d4eedbb3b8e543dc0a137bd71)

    <!-- -->

  - [7.4. Implementación del servicio](#X93e04903630a0a81d7b9ebc1a4c5a933dfa0088)
    - [7.4.1. Requisitos técnicos](#X59ca4242dbed0e6d5e3efa2ba91a80866647f92)

    <!-- -->

  - [7.5. Ubicación del servicio en Francia](#Xdcea3053acc96cf4c715a189f3d7d9842c70915)
    - [7.5.1. Ubicación de los Datacenters que alojan el Servicio](#Xac9c0f685576284f9431d5c1b6df99bc7ab662b)
    - [7.5.2. Ubicación de las agencias de Cloud Temple que operan el servicio](#X528b4e5e85b084898df1a4b0ee003fda94dca5d)
  - [7.6. Soporte](#X451baaab9b4764d97da95395b7e24265143a283)
    - [7.6.1. Naturaleza del soporte que acompaña al servicio](#X192381358bcad693baa22b16773742f4c8cf227)
    - [7.6.2. Solicitud del servicio de soporte técnico](#X03ef425751011df1818d9488df5625576c33f5e)
    - [7.6.3. Proceso de gestión de Incidentes](#Xac759d2aee6d685130dea876d7a1ed03888b994)
    - [7.6.4. Proceso de priorización de tratamientos](#X30a0604e2d2957ae43d1f1fe2cb9c04f5c05885)
    - [7.6.5. Idioma y ubicación del servicio de soporte](#X1afc584a9d5f886a1ad8b9ca498773d2e10cff8)
- [8. Compromisos y niveles de servicio](#Xf1662fa601c14a35f4b238c1effe9c712d3efbe)
  - [8.1. Compromisos de disponibilidad de la infraestructura](#X8e3206aed4045e8fbaad84d93ea150db664eb69)
  - [8.2. Compromiso de disponibilidad de la interfaz del CLIENTE](#X86570f48e6da9370f069232b4ae175183f2dafd)
  - [8.3. Compromiso de disponibilidad del soporte](#Xfc8548982b300528a67725f1705f15805f405f0)
- [9. Organización de la relación contractual](#Xf5428518d06ee6569b2c74ea4a26421ab0998e2)
  - [9.1. Responsabilidades del Proveedor](#X29068434a285c3f52c7ddc1ef50404d65e76fb5)
  - [9.2. Limitación de responsabilidades del Proveedor](#X19121b2bd4fb4e4f45228e8bab910b62dc757c1)
  - [9.3. Limitación de acceso](#X4e70434457f7c115f116a9f6ea4ab4af9b8d941)

[9.4. Responsabilidades de terceros que participan en la prestación del servicio Secure Temple](#Xc662a81cadd2baa300ca83a27240dec61621a56)

- [9.5. Responsabilidades y obligaciones del CLIENTE](#X53c94c34c467a68244ea6ce991e3e56c55d5d85)
- [9.6. Derechos del CLIENTE](#Xc34f07dff71165a85ac919098e14cdc0f0f59e0)
- [9.7. Borrado de datos al final del Contrato](#X18af7e8db06fe2d84076a4e5a797e8b384bc11c)

<!-- -->

- [10. Ciclo de vida del presente Acuerdo de servicio](#X89744c1f67247955b75e73d73aaa55899645415)
  - [10.1. Entrada en vigor del Acuerdo de servicio](#Xa3b4f57d1f6067d72eba0c13dc12b4e2e5a4cf1)
  - [10.2. Evoluciones del Acuerdo de servicio](#Xb5b2d189dece37be8660fbd35b3e0d097bb2969)
    - [10.2.1. Evoluciones desencadenadas por el CLIENTE](#X946a5e541a54ab2f0ca92ca2e5ab41b3740f564)
    - [10.2.2. Evoluciones desencadenadas por el Proveedor](#Xe94b2234fc6249c7021ff8c044fdaa857f6a9af)
  - [10.3. Reversibilidad](#X483eba08298e38537f9f27b026e82e1ece7ce7e)
- [11. Disponibilidad, continuidad y restauración del servicio](#X115fcc8f59c1201dae17a3d86136d153be01044)
  - [11.1. Gestión de Incidentes e interrupciones](#X55fc305b5e53901383e26fda6b4957fbeefa9ca)
    - [11.1.1. Incidentes](#X648046c564ac1cd52bebb02b256b193a3da4d74)
      - [11.1.1.1. Tipos de Incidentes tratados en el marco de este Acuerdo de servicio](#X09cc1e22db275b1a463f85596829f3f871ae224)
      - [11.1.1.2. Tratamiento de incidentes](#X726d7a25d789f16db26761d7df0c2c91f7bcc3a)
      - [11.1.1.3. Nivel de notificación de Incidentes de seguridad](#X61ceb4b8f57902c74fbf77bbb211197e5a82412)
  - [11.2. Mantenimiento del Servicio](#X8f50b0b400c67568e380ddb602ac786ec585905)
    - [11.2.1. Naturaleza del mantenimiento](#X903d92edf16182242ecfd404337edbaf2243b81)
    - [11.2.2. Accesos remotos de Cloud Temple en el perímetro del CLIENTE](#X89ffba42dc424905d6209f36393e0e9422b9ed6)
    - [11.2.3. Accesos remotos de terceros que participan en la prestación del servicio en el perímetro del CLIENTE](#X7ad951099cc984b8fc113222e52c4e27d11465f)
- [12. Procedimiento de borrado de datos al final del Contrato](#X4ef75d4456496b7eb26b3d2dd8783cf17bd26c2)
- [13. Derecho aplicable](#Xdc569bbb194e0e4a197cf31537db4bf08bf3eca)
  - [13.1. De manera general](#X5ed94d170893fb4c04d7110c419f01198fda773)
  - [13.2. Respeto del derecho y de las reglamentaciones aplicables](#Xce704548fdd653ba3dbdfe64fefff60a0972c3f)
  - [13.3. RGPD](#Xfc35add53571984b04e4fc9d49dcfff4b7b3395)
  - [13.4. Protección frente al derecho extraeuropeo](#X5171f5ee735df20bc2100671620eddd76dca12d)
- [14. FIRMAS](#X7ad993788a708b47017c27c9d96178e8795e44f)

# 3. Preliminar y Glosario

## 3.1. Preliminar

El presente documento formaliza el Acuerdo de servicio asociado al servicio Bare Metal en proceso de cualificación SecNumCloud.

El Servicio está en proceso de cualificación SecNumCloud (ver certificación en Anexo).

El presente acuerdo de servicio completa y es complementario a las condiciones generales de venta y uso del Proveedor. Se entiende que los documentos contractuales se interpretarán de manera coherente entre sí. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Acuerdo de Servicio SecNumCloud IaaS
3. Acuerdo de Servicio SecNumCloud OpenIaaS
4. Acuerdo de Servicio SecNumCloud PaaS
5. Acuerdo de Servicio específico - Bare Metal
6. Acuerdo específico particular
7. Plan de Aseguramiento de Seguridad (PAS)
8. Condiciones Particulares de Uso (CPU)
9. Acuerdo de Protección de Datos

## 3.2. Glosario

En el presente Acuerdo de servicio, el **CLIENTE**, el **Proveedor** y las **Partes** se identifican en el Contrato al que se anexa el presente Acuerdo de servicio.

Las expresiones empleadas a continuación en el presente Acuerdo de servicio se interpretarán de conformidad con las definiciones que se les atribuyen a continuación:

- **Cambio:** Cualquier adición, modificación o eliminación que afecte al Servicio, que haya sido autorizada, planificada o asumida.

- **Cambio estándar:** Cambio que sigue un procedimiento, cuyas modalidades de puesta en producción e impactos (incluidos los financieros) son conocidos y aceptados de antemano por las Partes. Se integra entonces en el catálogo de cambios estándares, y puede, según los casos, tener un GTI y un GTR.

- **Contrato:** designa el contrato suscrito por el CLIENTE con el Proveedor para permitir al CLIENTE beneficiarse del Servicio, y al que se anexa el presente Acuerdo de servicio.

- **Acuerdo de servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y esto, de conformidad con los requisitos del Referencial SecNumCloud.

- **Solicitud de servicio:** solicitud de evolución que sigue un procedimiento, cuya realización: i) no modifica la CMDB, ii) el modo operativo, los costes y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de retorno iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la tarifa del contrato cuando se realiza en horas laborables y días laborables.

- **Disponibilidad:** Capacidad para asegurar la disponibilidad y el mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

- **Datos técnicos**: incluye todos los datos manipulados para entregar el Servicio, notablemente incluyendo la identidad de los beneficiarios y administradores de la infraestructura técnica, registros de la infraestructura técnica, configuración de accesos, directorio, certificados...

- **Evento:** Un "evento" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

- **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales en una lámina de cálculo.

- **Incidente:** Cualquier evento imprevisto que perturbe el funcionamiento normal del Servicio o comprometa la seguridad de los datos.

- **Incidente de seguridad:** Cualquier evento en el ámbito del Servicio:

  - De naturaleza intencionadamente maliciosa;
  - De naturaleza accidental que afecte a la integridad, confidencialidad o trazabilidad del Servicio o de los datos del CLIENTE;
  - Que afecte a las medidas de seguridad existentes. Los atentados a la Disponibilidad de origen no malicioso no se consideran un Incidente de seguridad (avería de hardware, bug, mal funcionamiento, siniestro natural...).

- **Interfaz CLIENTE:** Interfaz de administración del Servicio puesta a disposición del CLIENTE por el Proveedor, que agrupa una consola de administración web y una API.

- **Puesta en producción:** acción(es) de administración de realización del Cambio cuando éste está aprobado (el cambio, en el sentido ITIL, sólo concierne a la gestión del cambio y no a su realización/concretización).

- **Problema**: causa de uno o varios Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo) que requiere un análisis y una resolución para prevenir su recurrencia.

- **Región:** designa un conjunto geográficamente delimitado de zonas de disponibilidad cloud, que proporciona servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad regulatoria local.

- **Servicio:** designa el servicio Bare Metal en proceso de cualificación SecNumCloud, entregado al CLIENTE por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, tal como se describe en la sección "Descripción del Servicio" del presente Acuerdo de servicio.

- **Siniestro:** designa un evento grave de origen natural o humano, accidental o intencional, que ocasiona pérdidas y daños importantes a la Parte siniestrada.

- **Supervisión:** Vigilancia de un Sistema de Información o de un Servicio, que implica la recopilación de diversos datos como medidas y alarmas. Esta actividad se limita a la observación y al seguimiento, sin intervenir directamente en los elementos vigilados, una prerrogativa que pertenece a las operaciones de Administración.

- **Tenant:** Una instancia aislada reservada a un usuario o grupo de usuarios, que comparten una infraestructura común manteniendo la independencia y la seguridad de los datos y las aplicaciones.

- **Zona de Disponibilidad (AZ) (Availability zone):** Una sección específica y aislada de la infraestructura de cloud computing, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  --------------------------------------------------------------------------------------------------------
  **Acrónimo**   **Definición**
  -------------- -----------------------------------------------------------------------------------------
  **CAB**        Change Advisory Board -- Comité consultivo sobre los cambios

  **CMDB**       Configuration Management Database -- Base de datos de gestión de configuraciones

  **COPIL**      Comité de dirección

  **COSTRAT**    Comité estratégico

  **COPROJ**     Comité de Proyecto

  **DB**         Database (base de datos)

  **DPA**        Data Protection Agreement (Acuerdo de Protección de Datos)

  **DRP**        Disaster Recovery Plan (PRA) (Plan de recuperación ante desastres)

  **GTE**        Garantía de Tiempo de Escalada

  **GTI**        Garantía de Tiempo de Intervención

  **GTR**        Garantía de Tiempo de Resolución

  **ITIL**       Information Technology Infrastructure Library - Buenas prácticas para la gestión de SI

  **IaaS**       Infrastructure as a Service (Infraestructura como Servicio)

  **MCO**        Mantenimiento en condiciones operativas

  **MOA**        Dirección de Proyecto

  **MOE**        Gestión de Proyecto

  **MSP**        Managed Services Provider (Proveedor de Servicios Gestionados)

  **OS**         Operating system (sistema operativo)

  **PAQ**        Plan de Aseguramiento de Calidad

  **PaaS**       Platform as a Service (Plataforma como Servicio)

  **PAS**        Plan de Aseguramiento de Seguridad

  **PASSI**      Proveedor de Auditoría de Seguridad de Sistemas de Información

  **RFC**        Request For Change -- Solicitud de cambio

  **RGPD**       Reglamento General de Protección de Datos (personales)

  **RPO**        Recovery Point Objective -- Frescura de los datos restaurados en caso de Siniestro

  **RTO**        Recovery Time Objective -- Tiempo de restablecimiento del servicio en caso de Siniestro

  **SDM**        Service Delivery Manager (Gestor de Entrega de Servicios)

  **SLA**        Service Level Agreement -- Acuerdo sobre los niveles de servicios

  **SNC**        SecNumCloud

  **SOC**        Security Operation Center (Centro de Operaciones de Seguridad)

  **TMA**        Mantenimiento de Aplicaciones por Terceros

  **UO**         Unidad de Obra

  **VABE**       Validación de Aptitud para la Buena Explotabilidad

  **VABF**       Validación de Aptitud para el Buen Funcionamiento

  **VM**         Virtual Machine (Máquina virtual)

**VSR**        Validación de Servicio Regular
  --------------------------------------------------------------------------------------------------------

# 5. Objeto del presente Acuerdo de servicio

El presente Acuerdo de servicio establece los términos y condiciones según los cuales el Proveedor se compromete a entregar el Servicio al CLIENTE. Su objeto es:

- Precisar las exigencias de rendimiento esperadas por el CLIENTE en términos de funcionalidad y fiabilidad del Servicio;

- Enunciar las obligaciones del Proveedor para satisfacer los niveles de servicio convenidos;

- Identificar las normas reglamentarias aplicables específicamente al Servicio entregado;

- Asegurar una uniformidad e integridad en la evaluación de la calidad del Servicio;

- Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en la hipótesis de que el Proveedor viera retirada su cualificación SecNumCloud, el Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalizaciones, por el CLIENTE. En tal eventualidad, el Proveedor se compromete a informar al CLIENTE de esta descalificación mediante el envío de una notificación oficial, por medio de una carta certificada con acuse de recibo.

Conviene señalar que una modificación o un ajuste de la cualificación SecNumCloud no será interpretado como una revocación de la cualificación inicial.

# 6. Auditoría

El Proveedor se compromete a permitir al CLIENTE, o a cualquier auditor tercero y no competidor del Proveedor que éste hubiera designado, consultar el conjunto de documentos necesarios para la certificación del respeto íntegro de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General sobre la Protección de Datos (RGPD), facilitando así la realización de auditorías.

Por la aceptación del presente Acuerdo de servicio, el CLIENTE confiere su autorización explícita a:

1. La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) así como a la entidad de cualificación competente para emprender la verificación de la conformidad del Servicio y de su sistema de información al referencial SecNumCloud.
2. Un proveedor de auditoría de la seguridad de los sistemas de información, debidamente cualificado PASSI y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio propuesto por el Proveedor se caracteriza por la puesta a disposición de las siguientes prestaciones, las cuales se alinean con el principio de responsabilidad compartida presentado en el referencial SecNumCloud:

- La provisión de recursos de cálculo (compute);

- La puesta a disposición de espacios de almacenamiento;

- El acceso a servicios de conectividad de red e internet;

- El acceso a una consola de gestión de los recursos desplegados;

El modelo de responsabilidades compartidas aplicado entre el Proveedor y el CLIENTE en el marco del Servicio se presenta en §7.1.

Se entiende que el Proveedor movilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales y conforme a las exigencias del referencial SecNumCloud.

## 7.2. Presentación detallada del alcance del Servicio

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Compute                 Recurso de cálculo del Tenant CLIENTE
  ----------------------- -----------------------------------------------------------------------------------------------------------------------
  Storage                 Datos de producción del Tenant CLIENTE

  Infraestructura de red   Recurso de red del Tenant CLIENTE

  Consola CLIENTE         El servicio que permite al CLIENTE acceder a su servicio Bare Metal y administrarlo a través de la interfaz Consola

Soporte                 El servicio de soporte que acompaña a los servicios anteriores y únicamente a éstos (\*)
  -----------------------------------------------------------------------------------------------------------------------------------------------

(\*) Dentro del límite del perímetro del Servicio cualificado SNC y de las responsabilidades del Proveedor en la materia\_

### 7.2.1. Infraestructuras de Datacenters

El Servicio engloba la puesta a disposición, para cada Zona de disponibilidad, de las prestaciones en proceso de cualificación que se indican a continuación:

- Sitio datacenter situado en Francia para la Región FR, conforme a las últimas normas tecnológicas, con un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
- Puesta a disposición de salas técnicas en datacenters dedicados a la acogida de los equipos técnicos indispensables para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado, y otros componentes necesarios;
- Alimentación eléctrica segura, asegurada por dos circuitos eléctricos distintos, garantizando una continuidad de servicio;
- Suministro de servicios de climatización, ajustados para respetar las normas y preconizaciones de los fabricantes de equipos, con el fin de mantener un entorno óptimo para los dispositivos técnicos;
- Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de los rendimientos y de la seguridad del servicio proporcionado.

El Proveedor asegura la puesta a disposición de servicios avanzados de detección y extinción de incendios, concebidos para identificar y neutralizar eficazmente cualquier inicio de fuego en el seno de las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos y de los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir los riesgos de incendio, minimizar los daños potenciales y asegurar la continuidad de las operaciones.

El CLIENTE está informado de que todos los procedimientos y medidas de seguridad puestos en marcha, incluidas las pruebas anuales de conmutación a los grupos electrógenos, son esenciales para garantizar la continuidad y la integridad de los servicios proporcionados. Estas prácticas están diseñadas para minimizar los riesgos de avería y asegurar una reactividad óptima en caso de Incidente. Al aceptar estas condiciones, el CLIENTE reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su puesta en marcha. También se anima al CLIENTE a tomar conocimiento de las recomendaciones de seguridad proporcionadas y a integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software para la gestión del Servicio

El Proveedor proporciona al CLIENTE la consola de administración y la API necesaria para la utilización del Servicio. Se compromete igualmente a mantener esta consola de administración y la API en condición operativa óptima y a asegurar su seguridad de manera continua. Esta consola de administración y la API se designan de manera agrupada bajo el término "interfaz CLIENTE".

El Proveedor alerta al CLIENTE sobre el hecho de que una utilización anormal de la interfaz CLIENTE, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que conlleven el bloqueo del acceso a las APIs de comando o al Servicio. Conviene subrayar que esta situación no constituye una indisponibilidad del Servicio sino una acción de protección del Servicio y de la infraestructura del Proveedor; por consiguiente, el CLIENTE no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Proveedor precisa al CLIENTE que las peticiones perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el CLIENTE somete peticiones idénticas a una frecuencia superior, su rechazo no podrá ser interpretado como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cálculo

El Servicio incluye el suministro, en las zonas de disponibilidad suscritas por el CLIENTE, de los equipos necesarios para la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto comprende:

- El suministro de los chasis técnicos necesarios para el buen funcionamiento de las láminas de cálculo;
- El suministro de las láminas de cálculo en las cantidades especificadas por el CLIENTE y repartidas según las zonas de disponibilidad de su elección. Cabe señalar que estas láminas de cálculo están exclusivamente dedicadas al CLIENTE;
- La puesta a disposición de una consola tipo KVM para pilotar la gestión del recurso de cálculo

La elección del modelo de lámina de cálculo, sel
