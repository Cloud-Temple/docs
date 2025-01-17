---
title: Convención de Servicio IaaS
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **CONVENCIÓN DE SERVICIOS IaaS**

| **Destinatarios :**                  | **MANDANTE**                                    |
| :----------------------------------- | :---------------------------------------------- |
| **Referencia del documento**         | CT.AM.JUR.ANX_Convention de Services_IaaS_v2.0  |
| **Sus interlocutores**               | *Nombre* *Apellido*                             |
|                                      | Account Manager                                 |
|                                      | e-mail : *nombre.apellido*@cloud-temple.com     |
| **Fecha de última actualización**    | 03/04/2024                                      |
| **Fecha de validación contractual**  | Día DD AAAA                                     |


----------------------------------------------------------------------------------

| **Versión** | **Fecha**   | **Acción**                              | **Autor**       |
| ----------- | ---------- | --------------------------------------  | --------------  |
| v0.1        | 07/06/2022 | Redacción inicial                       | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Integración de Indicadores              | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modificación pie de página              | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modificación Capital y Enriquecimiento  | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enriquecimiento                         | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Ajustes de conformidad SNC              | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publicación                             | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **TABLA DE CONTENIDOS**


- [1. **CONVENCIÓN DE SERVICIOS IaaS**](#1-convenction-de-servicios-iaas)
- [2. **TABLA DE CONTENIDOS**](#2-tabla-de-contenidos)
- [3. Preliminar y Glosario](#3-preliminar-y-glosario)
  - [3.1. Preliminar](#31-preliminar)
  - [3.2. Glosario](#32-glosario)
- [4. Acrónimos](#4-acrónimos)
- [5. Objeto de la presente Convención de servicio](#5-objeto-de-la-presente-convención-de-servicio)
- [6. Auditoría](#6-auditoría)
- [7. Descripción del Servicio](#7-descripción-del-servicio)
  - [7.1. Modelo de responsabilidad compartida](#71-modelo-de-responsabilidad-compartida)
  - [7.2. Presentación detallada del alcance del Servicio](#72-presentación-detallada-del-alcance-del-servicio)
    - [7.2.1. Infraestructuras de Datacenters](#721-infraestructuras-de-datacenters)
    - [7.2.2. Infraestructura de software de gestión del Servicio](#722-infraestructura-de-software-de-gestión-del-servicio)
    - [7.2.3. Infraestructuras de cálculo](#723-infraestructuras-de-cálculo)
    - [7.2.4. Infraestructura de almacenamiento](#724-infraestructura-de-almacenamiento)
    - [7.2.5. Infraestructura de red global](#725-infraestructura-de-red-global)
    - [7.2.6. Infraestructura de respaldo](#726-infraestructura-de-respaldo)
    - [7.2.7. Implementación de soluciones de recuperación o continuidad de actividad](#727-implementación-de-soluciones-de-recuperación-o-continuidad-de-actividad)
  - [7.3. Limitaciones de los servicios en el modelo IaaS calificado](#73-limitaciones-de-los-servicios-en-el-modelo-iaas-calificado)
    - [7.3.1. Servicios gestionados en RUN](#731-servicios-gestionados-en-run)
    - [7.3.2. Configuración de respaldo](#732-configuración-de-respaldo)
    - [7.3.3. Configuración de la copia de seguridad](#733-configuración-de-la-copia-de-seguridad)
  - [7.4. Implementación del servicio](#74-implementación-del-servicio)
    - [7.4.1. Prerrequisitos técnicos](#741-prerrequisitos-técnicos)
  - [7.5. Localización del servicio en Francia](#75-localización-del-servicio-en-francia)
    - [7.5.1. Localización de los Datacenters que alojan el Servicio](#751-localización-de-los-datacenters-que-alojan-el-servicio)
    - [7.5.2. Localización de las agencias de Cloud Temple que operan el servicio](#752-localización-de-las-agencias-de-cloud-temple-que-operan-el-servicio)
  - [7.6. Soporte](#76-soporte)
    - [7.6.1. Naturaleza del soporte que acompaña al servicio](#761-naturaleza-del-soporte-que-acompaña-al-servicio)
    - [7.6.2. Solicitud del servicio de soporte técnico](#762-solicitud-del-servicio-de-soporte-técnico)
    - [7.6.3. Proceso de gestión de Incidentes](#763-proceso-de-gestión-de-incidentes)
    - [7.6.4. Proceso de priorización de los tratamientos](#764-proceso-de-priorización-de-los-tratamientos)
    - [7.6.5. Idioma y localización del servicio de soporte](#765-idioma-y-localización-del-servicio-de-soporte)
- [8. Compromisos y niveles de servicio](#8-compromisos-y-niveles-de-servicio)
  - [8.1. Compromisos de disponibilidad de la infraestructura](#81-compromisos-de-disponibilidad-de-la-infraestructura)
  - [8.2. Compromisos de disponibilidad de la interfaz MANDANTE](#82-compromisos-de-disponibilidad-de-la-interfaz-mandante)
  - [8.3. Compromisos de disponibilidad del soporte](#83-compromisos-de-disponibilidad-del-soporte)
  - [8.4. Compromisos de disponibilidad del almacenamiento de objetos S3](#84-compromisos-de-disponibilidad-del-almacenamiento-de-objetos-s3)
  - [8.5. Precisión sobre el compromiso de respaldo](#85-precisión-sobre-el-compromiso-de-respaldo)
- [9. Organización de la relación contractual](#9-organización-de-la-relación-contractual)
  - [9.1. Responsabilidades del Proveedor](#91-responsabilidades-del-proveedor)
  - [9.2. Limitación de las responsabilidades del Proveedor](#92-limitación-de-las-responsabilidades-del-proveedor)
  - [9.3. Limitación de acceso](#93-limitación-de-acceso)
  - [9.4. Responsabilidades de los terceros participantes en la provisión del servicio Secure Temple](#94-responsabilidades-de-los-terceros-participantes-en-la-provisión-del-servicio-secure-temple)
  - [9.5. Responsabilidades y obligaciones del MANDANTE](#95-responsabilidades-y-obligaciones-del-mandante)
  - [9.6. Derechos del MANDANTE](#96-derechos-del-mandante)
  - [9.7. Eliminación de datos al final del Contrato](#97-eliminación-de-datos-al-final-del-contrato)
- [10. Ciclo de vida de la presente Convención de servicio](#10-ciclo-de-vida-de-la-presente-convención-de-servicio)
  - [10.1. Entrada en vigor de la Convención de servicio](#101-entrada-en-vigor-de-la-convención-de-servicio)
  - [10.2. Evolución de la Convención de servicio](#102-evolución-de-la-convención-de-servicio)
    - [10.2.1. Evolución desencadenada por el MANDANTE](#1021-evolución-desencadenada-por-el-mandante)
    - [10.2.2. Evolución desencadenada por el Proveedor](#1022-evolución-desencadenada-por-el-proveedor)
  - [10.3. Reversibilidad](#103-reversibilidad)
- [11. Disponibilidad, continuidad y restauración del servicio](#11-disponibilidad-continuidad-y-restauración-del-servicio)
  - [11.1. Gestión de Incidentes e interrupciones](#111-gestión-de-incidentes-e-interrupciones)
    - [11.1.1. Incidentes](#1111-incidentes)
      - [11.1.1.1. Tipos de Incidentes tratados en el marco de esta Convención de servicio](#11111-tipos-de-incidentes-tratados-en-el-marco-de-esta-convención-de-servicio)
      - [11.1.1.2. Tratamiento de los incidentes](#11112-tratamiento-de-los-incidentes)
      - [11.1.1.3. Nivel de notificación de los Incidentes de seguridad](#11113-nivel-de-notificación-de-los-incidentes-de-seguridad)
  - [11.2. Mantenimiento del Servicio](#112-mantenimiento-del-servicio)
    - [11.2.1. Naturaleza del mantenimiento](#1121-naturaleza-del-mantenimiento)
    - [11.2.2. Accesos remotos de Cloud Temple en el perímetro del MANDANTE](#1122-accesos-remotos-de-cloud-temple-en-el-perímetro-del-mandante)
    - [11.2.3. Accesos remotos de terceros participantes en la provisión del servicio en el perímetro del MANDANTE](#1123-accesos-remotos-de-terceros-participantes-en-la-provisión-del-servicio-en-el-perímetro-del-mandante)
- [12. Procedimiento de eliminación de datos al final del Contrato](#12-procedimiento-de-eliminación-de-datos-al-final-del-contrato)
- [13. Derecho aplicable](#13-derecho-aplicable)
  - [13.1. De manera general](#131-de-manera-general)
  - [13.2. Cumplimiento de la ley y reglamentaciones aplicables](#132-cumplimiento-de-la-ley-y-reglamentaciones-aplicables)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protección en relación con el derecho extra europeo](#134-protección-en-relación-con-el-derecho-extra-europeo)
- [14. FIRMAS](#14-firmas)


----------------------------------------------------------------------------------


# 3. Preliminar y Glosario

## 3.1. Preliminar

El presente documento formaliza la Convención de servicio asociada al servicio IaaS calificado SecNumCloud bajo la denominación de «*Secure Temple*».

\"La presente convención de servicio complementa y es complementaria a las condiciones generales de venta y uso del Proveedor. Se entiende que los documentos contractuales se interpretan de manera coherente entre ellos. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Convención de Servicio SecNumCloud IaaS
3. Convención de Servicio SecNumCloud PaaS
4. Convención específica particular
5. Plan de Seguridad Asegurado (PAS)
6. Condiciones Particulares de Uso (CPU)

## 3.2. Glosario

En la presente Convención de servicio, el **MANDANTE**, el **Proveedor** y las **Partes** están identificados en el Contrato
al que se anexa la presente Convención de servicio.

Las expresiones empleadas a continuación en la presente Convención de servicio serán interpretadas conforme a las definiciones que se les
atribuyen a continuación:


- **Cambio:** Cualquier adición, modificación o eliminación que impacta el Servicio, habiendo sido autorizada, planificada o realizada.

- **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de implementación y los impactos (incluidos los financieros) son conocidos y aceptados de antemano por las Partes. Entonces, se integra en el catálogo de cambios estándar, y según los casos puede tener un GTI y un GTR.

- **Contrato:** se refiere al contrato suscrito por el MANDANTE con el Proveedor para permitir que el MANDANTE se beneficie del Servicio, y al cual se adjunta el presente Acuerdo de servicio.

- **Acuerdo de servicio:** Este documento, elaborado en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y de acuerdo con los requisitos del Referencial SecNumCloud.

- **Solicitud de servicio:** solicitud del MANDANTE hacia el Proveedor en el marco del Servicio, cubriendo las operaciones que no puede realizar el MANDANTE desde la interfaz del MANDANTE y las solicitudes de soporte en el marco del Servicio. Las solicitudes de servicio están limitadas a las previstas en el Contrato o en el presente Acuerdo de servicio.

- **Disponibilidad:** Capacidad para asegurar la disponibilidad y el mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

- **Datos técnicos:** comprende el conjunto de datos manipulados para entregar el Servicio, notablemente incluyendo la identidad de los beneficiarios y de los administradores de la infraestructura técnica, los registros de la infraestructura técnica, configuración de los accesos, directorio, certificados...

- **Evento:** Un "evento" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

- **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales en una lámina de cálculo.

- **Incidente:** Cualquier evento imprevisto que interrumpe el funcionamiento normal del Servicio o compromete la seguridad de los datos.

- **Incidente de seguridad:** Cualquier evento en el perímetro del Servicio:

  - De naturaleza intencionadamente maliciosa;
  - De naturaleza accidental que atente contra la integridad, la confidencialidad o la trazabilidad del Servicio o de los datos del MANDANTE;
  - Que atente contra las medidas de seguridad existentes.
  
  Las fallas de disponibilidad de origen no malicioso no se consideran un Incidente de seguridad (falla de hardware, error, mal funcionamiento, desastre natural...).

- **Interfaz del MANDANTE:** Interfaz de administración del Servicio puesta a disposición del MANDANTE por el Proveedor, que agrupa una consola de administración web y una API.

- **Puesta en producción:** acción(es) de administración para realizar el Cambio cuando es aprobado (el cambio, en el sentido de ITIL, solo se refiere a la gestión del cambio y no a su realización/concreción).

- **Problema:** causa de uno o más Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo).

- **Región:** se refiere a un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, que proporciona servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y el cumplimiento regulatorio local.

- **Servicio:** se refiere al servicio IaaS calificado SecNumCloud "Secure Temple", entregado al MANDANTE por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, como se describe en la sección "Descripción del Servicio" del presente Acuerdo de servicio.

- **Secure Temple:** se refiere al servicio IaaS calificado SecNumCloud, propuesto por la empresa Cloud Temple, tal como se define en la certificación consultable en el sitio de la ANSSI y proporcionada en el anexo del presente Acuerdo de servicio.

- **Desastre:** se refiere a un evento grave de origen natural o humano, accidental o intencional, que ocasiona pérdidas y daños importantes a la Parte afectada.

- **Supervisión:** Vigilancia de un Sistema de Información o un Servicio, que implica la recopilación de diversos datos tales como mediciones y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente en los elementos supervisados, una prerrogativa que pertenece a las operaciones de Administración.

- **Tenant:** Una instancia aislada reservada para un usuario o grupo de usuarios, que comparte una infraestructura común mientras mantiene la independencia y la seguridad de los datos y las aplicaciones.

- **Zona de Disponibilidad (AZ) (Availability zone):** Una sección específica e independiente de la infraestructura de computación en la nube, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  | **Acrónimo** | **Definición**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comité consultivo sobre los cambios                            |
  | **CMDB**     | Configuration Management Database -- Base de datos de gestión de configuraciones        |
  | **COPIL**    | Comité de pilotaje                                                                      |
  | **COSTRAT**  | Comité estratégico                                                                      |
  | **COPROJ**   | Comité Proyecto                                                                         |
  | **DB**       | Database (base de datos)                                                                |
  | **DRP**      | Disaster Recovery Plan (PRA) (Plan de recuperación de actividad)                        |
  | **GTE**      | Garantía de Tiempo de Escalada                                                          |
  | **GTI**      | Garantía de Tiempo de Intervención                                                      |
  | **GTR**      | Garantía de Tiempo de Resolución                                                        |
  | **ITIL**     | Information Technology Infrastructure Library - Buenas prácticas para la gestión de SI  |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Mantenimiento en condición operativa                                                    |
  | **MOA**      | Maestría de Obra                                                                        |
  | **MOE**      | Maestría de Obra Ejecución                                                              |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Plan de Aseguramiento de la Calidad                                                     |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Plan de Aseguramiento de la Seguridad                                                   |
  | **PASSI**    | Proveedor de Auditoría de Seguridad de Sistemas de Información                          |
  | **RFC**      | Request For Change -- Solicitud de cambio                                               |
  | **RGPD**     | Reglamento General de Protección de Datos (personales)                                  |
  | **RPO**      | Recovery Point Objective -- Frescura de los datos restaurados en caso de Desastre       |
  | **RTO**      | Recovery Time Objective -- Tiempo de recuperación del servicio en caso de Desastre      |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Acuerdo sobre los niveles de servicio                        |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Tercera Mantenimiento de Aplicaciones                                                   |
  | **UO**       | Unidad de Obra                                                                          |
  | **VABE**     | Validación de Aptitud a la Buena Explotabilidad                                         |
  | **VABF**     | Validación de Aptitud al Buen Funcionamiento                                            |
  | **VM**       | Virtual Machine (Máquina virtual)                                                       |
  | **VSR**      | Validación de Servicio Regular                                                          |

# 5. Objeto del presente Acuerdo de servicio

El presente Acuerdo de servicio establece los términos y condiciones según los cuales el Proveedor se compromete a entregar el Servicio al
MANDANTE. Su objeto es:

- Precisar los requisitos de rendimiento esperados por el MANDANTE en términos de funcionalidad y fiabilidad del Servicio;

- Enunciar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

- Identificar las normas reglamentarias aplicables específicamente al Servicio entregado;

- Asegurar una uniformidad e integridad en la evaluación de la calidad del Servicio;

- Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en caso de que el Proveedor pierda su calificación SecNumCloud, el Contrato podrá rescindirse.
pleno derecho, sin incurrir en penas, por el PATROCINADOR. En tal eventualidad, el Proveedor se compromete a informar al PATROCINADOR
de esta descalificación mediante el envío de una notificación oficial, a través de una carta certificada con acuse de recibo.

Cabe señalar que una modificación o ajuste de la calificación SecNumCloud no será interpretado como una revocación de
la calificación inicial.

# 6. Auditoría

El Proveedor se compromete a permitir al PATROCINADOR, o a cualquier auditor externo y no competidor del Proveedor que este último haya designado, consultar todos los documentos necesarios para certificar el cumplimiento total de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización
de auditorías.

Al aceptar el presente Acuerdo de servicio, el PATROCINADOR otorga su autorización explícita a:

1.  La Agencia Nacional de la Seguridad de los Sistemas de Información (ANSSI) así como a la entidad de calificación competente para emprender la verificación de la conformidad del Servicio y de su sistema de información con el referencial SecNumCloud.
2.  Un proveedor de auditoría de seguridad de sistemas de información, debidamente calificado PASSI y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio ofrecido por el Proveedor se caracteriza por la disponibilidad de las siguientes prestaciones, las cuales se alinean con el
principio de responsabilidad compartida presentado en el referencial SecNumCloud:

-   La provisión de recursos de cálculo (compute);

-   La disponibilidad de espacios de almacenamiento;

-   El acceso a servicios de conectividad de red e internet;

-   La oferta de un servicio de respaldo dedicado a las máquinas virtuales.

El modelo de responsabilidades compartido entre el Proveedor y el PATROCINADOR en el marco del Servicio se presenta en el §7.1.

Se entiende que el Proveedor movilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales y
conforme a las exigencias del referencial SecNumCloud.

El Servicio está calificado SecNumCloud (ver certificado en Anexo).

## 7.2. Presentación detallada del alcance del Servicio

| Compute               | Recurso de cálculo del Arrendatario PATROCINADOR                                                                      |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Datos de producción del Arrendatario PATROCINADOR                                                                     |
| Almacenamiento objeto S3 | Disponibilidad de una infraestructura de almacenamiento de objetos soberana multi AZ y compatible con las API S3 estándar. |
| Respaldo              | Modulo suscripción al almacenamiento masivo adecuado                                                                  |
| Infraestructura de red | Recurso de red del Arrendatario PATROCINADOR                                                                          |
| Consola PATROCINADOR  | El servicio que permite al PATROCINADOR acceder a su servicio IaaS y administrarlo vía la interfaz Shiva              |
| Soporte               | El servicio de soporte que acompaña a los servicios anteriores y únicamente a estos (*)                               |

_(*) Dentro del alcance del Servicio calificado SNC y de las responsabilidades del Proveedor en la materia_

### 7.2.1. Infraestructuras de Centros de Datos

El Servicio incluye la disponibilidad, para cada Zona de disponibilidad, de las siguientes prestaciones calificadas:

-   Sitio de centro de datos ubicado en Francia para la Región FR, conforme a las últimas normas tecnológicas, con un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
-   Disponibilidad de salas técnicas dentro de centros de datos dedicados a la acogida de los equipos técnicos indispensables para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado, y otros componentes necesarios;
-   Alimentación eléctrica segura, garantizada por dos circuitos eléctricos distintos, asegurando una continuidad de servicio;
-   Provisión de servicios de climatización, ajustados para respetar las normas y recomendaciones de los fabricantes de equipos, con el fin de mantener un entorno óptimo para los dispositivos técnicos;
-   Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y la seguridad del servicio proporcionado.

El Proveedor asegura la disponibilidad de servicios avanzados de detección y extinción de incendios, diseñados para identificar y
neutralizar eficazmente cualquier inicio de fuego dentro de las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos
y datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente
sin dañar el equipo informático. Este servicio es fundamental para prevenir los riesgos de incendio, minimizar los daños potenciales y
asegurar la continuidad de las operaciones.

Se informa al PATROCINADOR que todos los procedimientos y medidas de seguridad implementadas, incluyendo las pruebas anuales de conmutación a
los grupos electrógenos, son esenciales para garantizar la continuidad y la integridad de los servicios proporcionados. Estas prácticas están diseñadas para
minimizar los riesgos de fallos y asegurar una respuesta óptima en caso de Incidente. Al aceptar estas condiciones, el cliente reconoce
la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. Se anima al PATROCINADOR a
familiarizarse con las recomendaciones de seguridad proporcionadas e integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de gestión del Servicio

El Proveedor proporciona al PATROCINADOR la consola de administración y la API necesarias para el uso del Servicio. También se compromete a mantener esta consola de administración y la API en condiciones operativas óptimas y a asegurar su seguridad de manera continua.
Esta consola de administración y la API se denominan colectivamente como "interfaz PATROCINADOR".

El Proveedor alerta al PATROCINADOR sobre el hecho de que un uso anormal de la interfaz PATROCINADOR, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que bloqueen el acceso a las APIs de comando o al Servicio. Cabe destacar que esta situación no constituye una indisponibilidad del Servicio, sino una acción de protección del Servicio y de la infraestructura del Proveedor; por lo tanto, el PATROCINADOR no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Proveedor precisa al PATROCINADOR que las solicitudes exactamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el PATROCINADOR envía solicitudes idénticas a una frecuencia superior, su rechazo no podrá ser interpretado como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cálculo

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el PATROCINADOR, de los equipos necesarios para
la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

- La provisión de los chasis técnicos necesarios para el correcto funcionamiento de las cuchillas de cálculo;
- La provisión de las cuchillas de cálculo en las cantidades especificadas por el PATROCINADOR y distribuidas según las zonas de disponibilidad de su elección. Cabe señalar que estas cuchillas de cálculo están exclusivamente dedicadas al PATROCINADOR;
- La disposición de sistemas operativos tipo hipervisores, así como la garantía del mantenimiento en condiciones operativas y de seguridad de la infraestructura de software necesaria para la gestión de estos sistemas operativos. Es importante destacar que, aunque el Proveedor es responsable del mantenimiento operativo y de la seguridad general del Servicio, no posee conocimientos específicos sobre los entornos de producción del PATROCINADOR ni sobre las exigencias relacionadas con sus cargas de trabajo. En consecuencia, la responsabilidad de decidir la actualización de los sistemas operativos de las cuchillas de cálculo hipervisores, una acción que puede requerir un reinicio, recae completamente en el PATROCINADOR. Esta operación puede realizarse a través de la Interfaz PATROCINADOR.

La elección del modelo de cuchilla de cálculo, seleccionado del catálogo ofrecido por el Proveedor, es responsabilidad del
PATROCINADOR.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al PATROCINADOR de una infraestructura de almacenamiento compartida de tipo SAN (Storage Area Network), ofreciendo varios
niveles de rendimiento. Este servicio incluye:

- La implementación y el mantenimiento en condiciones operativas y de seguridad de la red SAN dedicada;
- La instalación y gestión de los gabinetes de almacenamiento compartidos entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, su supervisión y su metrología;
- La implementación de sistemas automatizados para la asignación de LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del PATROCINADOR, conforme a los volúmenes suscritos por el PATROCINADOR.

### 7.2.5. Infraestructura de red global

El Proveedor despliega en el marco del Servicio, una red global facilitando al PATROCINADOR la disponibilidad de sus sistemas
alojados. Este servicio incluye:
-   La provisión, el mantenimiento operacional y en condiciones de seguridad de todas las conexiones de fibra óptica
    que interconectan las diferentes Zonas de disponibilidad;

-   La provisión, el mantenimiento operacional y en condiciones de seguridad de los equipos técnicos necesarios para el correcto
    funcionamiento de la red y la separación de los diferentes clientes.

La interconexión de red del Tenant COMITENTE, a Internet o a redes privadas, y los equipos de red, enlaces de operadores y otros
componentes técnicos que realizan esta interconexión, no forman parte del ámbito del Servicio. Esta interconexión de red se implementa
conforme a las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo

El Proveedor pone a disposición del COMITENTE un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus
máquinas virtuales. El Proveedor asegura el mantenimiento operativo y en condiciones de seguridad de este servicio de respaldo.
El Proveedor garantiza que los respaldos del COMITENTE estarán situados fuera de la Zona de disponibilidad de las cargas de trabajo
respaldadas, siempre que el COMITENTE haya suscrito a las Unidades de obra adecuadas.

Este servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS
de los Tenants del COMITENTE en el ámbito del Servicio. La elaboración y aplicación de una política de respaldo adecuada por parte del
COMITENTE depende de la suscripción a unidades de obra específicas. Por lo tanto, es responsabilidad del COMITENTE asegurarse de la
disponibilidad de los recursos técnicos necesarios del Proveedor para implementar su política de respaldo o
ajustarla según los medios disponibles.

El Proveedor se compromete a notificar al COMITENTE en caso de restricciones de capacidad y a proporcionar asistencia y asesoramiento para
la optimización de los recursos. Las obligaciones del Proveedor se limitarán a la implementación de las necesidades expresadas por el COMITENTE
en términos de política de respaldo, dentro del marco de los recursos suscritos.

### 7.2.7. Implementación de soluciones de recuperación de actividad o continuidad de actividad

El Proveedor proporciona al COMITENTE todas las soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos a través de varias Zonas de disponibilidad. Compete al COMITENTE la responsabilidad de gestionar eficazmente esta distribución de recursos, para la cual puede utilizar las herramientas del Proveedor disponibles para este propósito.

## 7.3. Limitaciones de los servicios en el modelo IaaS calificado

### 7.3.1. Servicios gestionados en RUN

Es importante señalar que se excluyen del Servicio:

-   El alojamiento de componentes físicos del COMITENTE;

-   La interconexión de red del Tenant COMITENTE, a Internet o a redes privadas, incluidos los enlaces de operadores;

-   Cualquier servicio de tipo gestionado, o TMA;

-   Cualquier asistencia en las máquinas virtuales a nivel de OS y superior en la pila de responsabilidades Iaa, incluso si se trata de simple supervisión.

No obstante, no se excluye en absoluto que el COMITENTE recurra a tales servicios a través de la oferta MSP del Proveedor para intervenir en modo gestionado en sus Tenants. Estos servicios no estarán cubiertos por el presente Acuerdo de servicio y sus compromisos/cláusulas bipartitas.

### 7.3.2. Configuración de respaldo

Por defecto, el Proveedor proporciona la implementación de los recursos de IaaS al COMITENTE, reservando recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Compete al COMITENTE elegir las Zonas de disponibilidad a través de la interfaz del COMITENTE.

### 7.3.3. Configuración del respaldo

El servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología que representan el entorno IaaS de los Tenants del COMITENTE en el ámbito del Servicio.

El servicio de respaldo y la realización de la política de respaldo del COMITENTE está sujeta a la suscripción de espacio de almacenamiento en el almacenamiento en masa necesario para asegurar el servicio. Por lo tanto, es responsabilidad del COMITENTE suscribirse con el Proveedor a los medios técnicos necesarios para asegurar la política de respaldo en su entorno informático, o ajustar la política de respaldo a los medios implementados. El Proveedor se compromete a informar al COMITENTE en caso de límite de capacidad técnica.

El Proveedor implementará los medios técnicos y humanos necesarios para el respaldo del sistema alojado dentro de los límites de los recursos suscritos por el COMITENTE.

Además, en el caso de entornos no cubiertos por el Proveedor, corresponde al COMITENTE definir su propia estrategia de respaldo y configurar él mismo los respaldos de las VM o realizar una Solicitud de servicio con el Proveedor para que se configure el respaldo de servidores físicos, siempre que el COMITENTE disponga de un contrato de servicio gestionado que permita al Proveedor actuar a través de la interfaz del COMITENTE que es la consola de administración que se pone a disposición en el ámbito de este Acuerdo de servicio y que dispone de funcionalidades para configurar los respaldos.

Además, este servicio solo tendrá el compromiso de traducir mediante la configuración a través de la interfaz del COMITENTE, la configuración especificada claramente por el COMITENTE.

Por razones de flexibilidad en la oferta del Proveedor, el COMITENTE tiene la opción de asociar una política de no respaldo a algunas de sus VM. En este caso, corresponde al COMITENTE asumir esta elección. El Proveedor no respaldará las VM asociadas con la política "no backup". El Proveedor alerta al COMITENTE que elegir la política "no backup" o elegir realizar respaldos manuales expone al COMITENTE a una pérdida definitiva de datos en caso de Incidente en las capas bajas o en las capas bajo su responsabilidad en el modelo IaaS. En tal caso, será imposible responsabilizar al Proveedor por la restauración de los datos ya que no habrá nada que restaurar. El Proveedor recomienda siempre realizar respaldos de las VM.

Para cualquier tema relacionado con el OS instalado en una máquina virtual y cualquier software o programa ejecutado "sobre el OS", es responsabilidad del COMITENTE realizar las operaciones de administración y supervisión dentro de la Unión Europea si desea asegurar que toda la verticalidad de las capas del SI sean operadas y gestionadas desde la Unión Europea. Las operaciones de administración fuera del ámbito de responsabilidad del Proveedor en el marco del presente Acuerdo de servicio están indicadas en la sección "Modelo de responsabilidades compartidas" del presente Acuerdo de Servicio.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el COMITENTE reconoce que deberá:

-   Operar con una virtualización de tipo VMware en las versiones soportadas por el editor y proporcionadas por el Proveedor en el ámbito del Servicio;

-   Utilizar a través del Proveedor la herramienta de respaldo;

-   Declarar IPs fijas desde las cuales el Proveedor le permitirá acceder a la interfaz del COMITENTE (Filtrado por lista blanca). Las modificaciones de esta lista de IP deberán realizarse a través de Solicitudes de servicio (lista no administrable desde la interfaz de administración del Servicio).

## 7.5. Localización del servicio en Francia

Se precisa que ninguna de las operaciones y ninguno de los componentes físicos involucrados en la provisión del Servicio, objeto del presente Acuerdo de servicio, está ubicado fuera de la Unión Europea.

Esto incluye especialmente el soporte, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que proporciona el Servicio. De hecho, todo el almacenamiento, todas las tareas de administración, supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los Datacenters que alojan el Servicio

Excepto las operaciones de los colaboradores y las agencias del Proveedor, todas las operaciones de producción (incluido el almacenamiento y el procesamiento de datos) y los componentes técnicos que proporcionan el Servicio están ubicados en los Datacenters situados en Francia.

### 7.5.2. Localización de las agencias Cloud Temple que operan el servicio

Los colaboradores de Cloud Temple que intervienen en el ámbito del Servicio operan desde las agencias de Cloud Temple todas situadas
exclusivamente en Francia. Estas agencias están ubicadas en Francia, en Tours, Lyon, Caen y París La Défense.

El COMITENTE está informado de la posibilidad de los empleados de Cloud Temple de trabajar a distancia. Sin embargo, el Proveedor garantiza el mismo nivel de seguridad con respecto a los accesos a distancia, especialmente en lo que respecta a los accesos VPN. Estos accesos remotos se implementan conforme a los requisitos del referencial SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte que acompaña al servicio

El Proveedor proporciona un servicio de soporte técnico destinado a asistir al COMITENTE en la gestión, resolución de problemas y optimización de sus recursos desplegados. Este servicio cubre una amplia gama de actividades, desde la ayuda en la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación se describe las características y funcionalidades del servicio de soporte:

-   Asistencia en la implementación inicial del uso del Servicio;
-   Asistencia en la resolución de incidentes;
-   Asistencia en la resolución de problemas;
-   Seguimiento y asesoramiento sobre la optimización de la base técnica.
Dans el marco del servicio de soporte, el Proveedor no se sustituye al MANDANTE en el uso del Servicio. El MANDANTE sigue siendo completamente responsable de la configuración, de la explotación de sus VM y de sus Tenants, y de la gestión de todos los elementos (datos y aplicaciones incluidas) que ha almacenado o instalado en las infraestructuras del Proveedor. El servicio de soporte técnico se proporciona de acuerdo con las Condiciones Generales de Venta y de Uso, el Proveedor estando obligado a una obligación de medios.

El MANDANTE se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose en particular de solicitar servicios no suscritos con el Proveedor y de involucrar a los equipos del Proveedor con sus propios clientes o con terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de las unidades de obra de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico es accesible mediante un sistema de tickets a través de la consola del MANDANTE y está disponible durante las horas normales de oficina, excluyendo días festivos (8h - 18h; Lunes - Viernes; calendario y horarios franceses). Para emergencias fuera del horario laboral, especialmente los incidentes que afectan significativamente la producción, el servicio de guardia puede ser contactado a través de un número comunicado al MANDANTE en la inicialización del Servicio.

Para cada solicitud o Incidente, es imperativo generar un ticket ante el soporte del Proveedor. La iniciación de este ticket, que incluye toda la información necesaria, es esencial y marca el inicio de la evaluación de los compromisos del Proveedor.

Tan pronto como el Proveedor recibe una solicitud o notificación de un Incidente, ya sea a través de la consola de gestión o tras una llamada telefónica, se crea automáticamente un ticket. Al declarar un Incidente, es esencial que el MANDANTE proporcione al proveedor el mayor número de detalles posible sobre el problema encontrado. Este enfoque es crucial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico eficaz.

El Cliente recibe una confirmación por correo electrónico, indicando la creación del ticket y su número único. El MANDANTE puede consultar el estado y el historial de sus solicitudes y declaraciones de Incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de Incidentes

Al declarar un Incidente, el equipo de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El Cliente debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando las pruebas requeridas. El Proveedor puede acceder al Servicio del Cliente para diagnosticar el Incidente.

Si los Servicios del Proveedor se consideran funcionales y el Incidente no le es imputable, el Cliente será informado. A petición del Cliente, el Proveedor puede ofrecer Servicios Profesionales para identificar el origen del problema, facturable previo acuerdo en bloques de 30 minutos.

En caso que el Incidente sea responsabilidad del Proveedor o de uno de sus subcontratistas, este completará el diagnóstico y se empleará en la restauración del Servicio sin costo adicional. El diagnóstico se basa en los intercambios entre las Partes y los datos del Proveedor, estos elementos se consideran probatorios por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de tratamientos

La determinación del nivel de prioridad de un expediente se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de criticidad:

-   Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| Impacto I1       | Uno o más servicios del Proveedor están interrumpidos                                                                |
| Impacto I2       | Uno o más servicios del Proveedor están degradados                                                                   |
| Impacto I3       | Uno o más servicios del Proveedor están actualmente estables, pero muestran signos de potencial declive a largo plazo |

-   Los niveles de Criticidad se definen de la siguiente manera:

| Nivel de criticidad | Descripción                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------------|
| Criticidad C1       | Uno o más servicios del Proveedor se degradan a una velocidad preocupante                               |
| Criticidad C2       | Uno o más servicios del Proveedor se deteriora progresivamente con el tiempo                            |
| Criticidad C3       | Uno o más servicios del Proveedor presentan uno o varios inconvenientes sin consecuencia significativa|

-   Basándose en un análisis profundo de la situación, teniendo en cuenta los elementos que determinan el Impacto y la Criticidad, se asigna una prioridad al ticket conforme a la siguiente matriz de decisión:

| Nivel de impacto <br/> \ Nivel de criticidad | Impacto I1       | Impacto I2       | Impacto I3       |
| ------------------------------------------- | --------------- | --------------- | --------------- |
| Criticidad C1                                | Prioridad **P1** | Prioridad **P2** | Prioridad **P3** |
| Criticidad C2                                | Prioridad **P2** | Prioridad **P3** | Prioridad **P4** |
| Criticidad C3                                | Prioridad **P3** | Prioridad **P4** | Prioridad **P5** |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### 7.6.5. Idioma y localización del servicio de soporte

El soporte es proporcionado por el Proveedor al MANDANTE como mínimo en idioma francés. El soporte también puede ser proporcionado en idioma inglés.

Las operaciones del servicio de soporte del Proveedor para la oferta de servicio de infraestructura cualificada SecNumCloud están situadas en la Unión Europea.

# 8. Compromisos y niveles de servicios

El Proveedor se compromete a garantizar una supervisión continua del rendimiento y de la integridad de seguridad de su infraestructura técnica que entrega el Servicio, velando por su funcionamiento óptimo.

La indisponibilidad de un servicio, objeto de un indicador de rendimiento, se reconoce tan pronto como se identifique por el sistema de supervisión del Proveedor, o tras una notificación por un usuario del MANDANTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, para garantizar un cómputo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente por la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor o por un retorno de usuario, asegurando así una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura

El Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican con la condición de que el MANDANTE implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la Región correspondiente.

En ausencia de cumplimiento de estas condiciones por parte del MANDANTE,
este se verá en la incapacidad de reclamar la aplicación de los
SLAs correspondientes, los cuales están específicamente identificados por un
asterisco (\*). El acceso a los SLAs se hace a través de la interfaz
MANDANTE. Las medidas se entienden calculadas mensualmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilidad de la potencia de cálculo (Compute): tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilidad del almacenamiento: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 3     : IC-INFRA_SNC-03** – Fiabilidad de la copia de seguridad: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 5     : IC-INFRA_SNC-05** – Acceso a Internet: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.

_**Observaciones**_ : 

- *En respuesta a un ataque por denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento de internet para
limitar el impacto de este ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al MANDANTE es atacada, el Proveedor puede recurrir a la técnica de blackholing
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP objetivo previamente con sus proveedores, con el fin de proteger los recursos del MANDANTE así como los de otros MANDANTES
y de la infraestructura del Proveedor. El Proveedor anima encarecidamente al MANDANTE a adoptar medidas similares, tales como la utilización de software de firewalls
de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*
- *El Proveedor insiste en la necesidad de que el CLIENTE minimice las aperturas de flujo, evitando en particular hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde toda Internet (subred 0.0.0.0/0), así como los protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz CLIENTE

- SLA 6 : IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada de 97%, asegurada de forma continua, 24 horas al día y 7 días a la semana.
- SLA 7 : IC-INFRA_SNC-07 -- Acceso a las APIs de control del Servicio: una disponibilidad de 99.9%, calculada sobre una base de 24h/24, 7d/7.

## 8.3. Compromiso de disponibilidad del soporte

- **SLA 8 : IC-INFRA_SNC-08** – Aquí están los compromisos de rendimiento del soporte técnico del Proveedor para los incidentes, excluyendo mantenimientos programados:

| Prioridad        | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| --------------- | --------------------------------------- | ---------------------- |
| Prioridad **P1** | 30min                                   | 95%                    |
| Prioridad **P2** | 2h                                      | 90%                    |
| Prioridad **P3** | 4h                                      | 90%                    |
| Prioridad **P4** | 24h                                     | 85%                    |
| Prioridad **P5** | 48h                                     | 85%                    |

- **SLA 9 : IC-INFRA_SNC-09** – Aquí están los compromisos de rendimiento del soporte técnico del Proveedor para las solicitudes de servicio:

|                  | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| ---------------- | --------------------------------------- | ---------------------- |
| Solicitud de servicio | 4h                                   | 90%                    |

*Nota:*

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el CLIENTE abre el ticket y la primera intervención del soporte del Proveedor.*
- *La investigación de incidentes relacionados con el CLIENTE no incluirá intervención remota en los servidores alojados del CLIENTE. Esta asistencia se limitará a la explicación de las métricas disponibles relativas al entorno del CLIENTE, para facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Sobre la base de los resultados de este análisis, se podrán sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento de objetos S3

- **SLA 10 : IC-INFRA_SNC-10** – Aquí están los compromisos de disponibilidad para el almacenamiento de objetos S3:

| Indicador        | Compromiso                                        | Objetivo de disponibilidad |
| ---------------- | ------------------------------------------------- | ------------------------- |
| IC-INFRA-SNC-10.1 | Durabilidad del almacenamiento de un objeto en una región | 99.9999999% / año         |
| IC-INFRA-SNC-10.2 | Disponibilidad de la API de Almacenamiento de Objetos S3   | 99.99%                    |
| IC-INFRA-SNC-10.3 | Latencia máxima de acceso a un objeto en una región       | 150 ms                    |

Notas:

- El Servicio de Almacenamiento de Objetos está específicamente diseñado para el almacenamiento de objetos y debe ser empleado únicamente para este propósito, **excluyendo categóricamente su uso en modo bloque**. Utilizar el modo bloque mediante métodos indirectos, incluyendo por ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una infracción a los términos de uso establecidos. Ningún incidente, mal funcionamiento o daño derivado de este uso no conforme será cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en este convenio de servicios.
- La garantía de durabilidad está condicionada a un uso de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de los datos, ya sea intencional o accidental, resultante de acciones emprendidas por el CLIENTE.

## 8.5. Precisión sobre el compromiso de respaldo

La estrategia de respaldo desplegada para el CLIENTE, está condicionada por la suscripción a las unidades de obra adecuadas.

El Proveedor se compromete a proporcionar una solución de respaldo que permitirá al CLIENTE aplicar las políticas de respaldos deseadas.

Se especifica que el alcance del Proveedor se detiene en la provisión de un servicio de respaldo y es el CLIENTE quien debe supervisar, a través de la interfaz de CLIENTE, la correcta ejecución de las políticas asociadas.

Se especifica que la gestión de capacidad de almacenamiento del espacio de almacenamiento dedicado a los respaldos, queda a cargo y bajo la responsabilidad del CLIENTE. El Proveedor pone a disposición la tasa de uso a través de la consola.

*Ejemplo: No respaldo de una máquina virtual:*

*El CLIENTE tiene la responsabilidad de verificar / supervisar la correcta ejecución de las políticas de respaldos. En el caso de que el CLIENTE detecte que una máquina virtual no está respaldada, le corresponde verificar la causa. El CLIENTE podrá solicitar el Soporte del Proveedor según el nivel de soporte suscrito para ser asistido.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9** será exclusivamente aplicable en el caso de un Incidente del servicio de respaldo.

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Proveedor

El Proveedor se compromete a:

- informar adecuadamente a su CLIENTE (por ejemplo, en caso de límite de capacidad de recursos técnicos que proporcionan el Servicio).

- informar formalmente al CLIENTE y en un plazo de un mes, de cualquier cambio jurídico, organizativo o técnico que pueda tener un impacto en la conformidad del Servicio con los requisitos de protección contra las leyes extraeuropeas (19.6 del marco de referencia SNC v3.2).

- proporcionar al CLIENTE interfaces y servicios que estén al menos en idioma español.

- estudiar y tener en cuenta los requisitos sectoriales específicos relacionados con los tipos de información confiados por el CLIENTE en el marco de la implementación del servicio y dentro de los límites de las responsabilidades del Proveedor.

- no divulgar ninguna información relativa a la prestación a terceros, salvo autorización formal y por escrito del CLIENTE.

- poner a disposición toda la información necesaria para la realización de auditorías de conformidad de acuerdo con las disposiciones del artículo 28 del RGPD.

- rendir cuentas ante el CLIENTE, a través de este Convenio de Servicio, de cualquier Incidente de seguridad que afecte al Servicio o al uso que el CLIENTE haga del Servicio (incluidos los datos del CLIENTE).

- autorizar a un proveedor de auditoría de la seguridad de los sistemas de información (PASSI) cualificado, mandatado por el Proveedor, para auditar el servicio así como su sistema de información, de acuerdo con el plan de control del SecNumCloud del Proveedor. Además, el Proveedor se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, llevadas a cabo por el cliente o un tercero mandatado.

- proporcionar, en calidad de subcontratista, de acuerdo con el artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y asesoramiento al CLIENTE alertándole cuando una instrucción emitida por este último pueda constituir una violación de las reglas de protección de datos.

- notificar por escrito, cuando un proyecto impacte o pueda impactar el nivel de seguridad del Servicio, al CLIENTE de los potenciales impactos, de las medidas de mitigación implementadas, así como los riesgos residuales que le conciernen.

- documentar e implementar todos los procedimientos necesarios para cumplir con los requisitos legales, regulatorios y contractuales aplicables al servicio, así como los requisitos de seguridad específicos del CLIENTE, definidos por este último y previstos en el Contrato. A petición del CLIENTE, el módulo de Documentación de la interfaz de CLIENTE permitirá un intercambio seguro de estos documentos.

- proporcionar, a petición del CLIENTE, los elementos de evaluación de los riesgos relativos a la sumisión de los datos del CLIENTE a la normativa de un estado no miembro de la Unión Europea.

A solicitud del CLIENTE, formal y por escrito, el Proveedor se compromete a:

1. Poner a disposición del CLIENTE el reglamento interno y la carta de ética del Proveedor;
2. Poner a disposición del CLIENTE las sanciones que se aplican en caso de infracción a la política de seguridad;
3. Proporcionar al CLIENTE todos los eventos que le conciernen en los elementos de registro del Servicio;
4. Al finalizar el Contrato, el Proveedor se compromete a eliminar los datos y Datos técnicos relativos al CLIENTE, conforme al "procedimiento de eliminación de datos al finalizar el Contrato" descrito en este Convenio de Servicio.
5. asegurar una eliminación segura de la totalidad de los datos del CLIENTE mediante reescritura completa de todos los soportes que hayan alojado sus datos dentro del marco del Servicio.
6. proporcionar la lista completa de los terceros autorizados a acceder a las infraestructuras que soportan los datos.
El Proveedor mantendrá actualizada y pondrá a disposición del CLIENTE la lista exhaustiva de los terceros autorizados para acceder a las infraestructuras que alojan los datos, informando a este último de cualquier cambio relacionado con los subcontratistas. El Proveedor y todas sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber, la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho, así como el respeto a los Derechos Humanos. El servicio proporcionado por el Proveedor cumple con la legislación vigente en materia de derechos fundamentales y con los valores de la Unión Europea relativos al respeto de la dignidad humana, la libertad, la igualdad, la democracia y el Estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor

Debido a todas las definiciones y condiciones mencionadas en el presente Acuerdo de Servicio, las responsabilidades del Proveedor se limitan de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección « Modelo de responsabilidades compartidas » del presente Acuerdo de Servicio, limita de hecho la implicación del Proveedor en las capas de funcionamiento que van "por encima" de la provisión de recursos de cálculo, red, almacenamiento y respaldo. Esto excluye en particular, pero no se limita a:

    -   La gestión de lo que está instalado en las máquinas virtuales (OS, middleware, aplicaciones, etc.);

    -   El mantenimiento de los OS y otros software instalados por el CLIENTE en sus máquinas en sus Tenants;

    -   La seguridad de los programas, software y aplicaciones instalados en las máquinas virtuales;

    -   La actualización de las máquinas virtuales;

    -   El respaldo de los datos a nivel aplicativo.

2.  El Proveedor no puede asumir compromisos de respaldo de los Tenants del CLIENTE sin que el CLIENTE haya previamente suscrito a las unidades de obra adecuadas.

3.  El Proveedor no puede alegar la propiedad de los datos transmitidos y generados por el CLIENTE. De hecho, estos pertenecen al CLIENTE.

4.  El Proveedor destaca que bajo ninguna circunstancia puede explotar los datos transmitidos y generados por el CLIENTE sin la validación previa de este último.

5.  El Proveedor se exime de toda responsabilidad sobre los componentes físicamente alojados y gestionados por el Proveedor, pero que son propiedad directa del CLIENTE o de un tercero con el cual el CLIENTE haya contratado. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y, por lo tanto, está fuera del ámbito del presente Acuerdo de Servicio. Es responsabilidad del CLIENTE evaluar el nivel de adherencia o dependencia que estos componentes introducen con respecto al Servicio IaaS calificado SecNumCloud.

## 9.3. Limitación de acceso

En el marco del Servicio, el Proveedor está formalmente prohibido de acceder a los Tenants pertenecientes al CLIENTE sin autorización previa. Es responsabilidad del CLIENTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el CLIENTE.

El CLIENTE reconoce que estos accesos son otorgados exclusivamente para las necesidades relacionadas con la prestación de servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros implicados en la prestación de servicio del Proveedor está estrictamente prohibido. En el caso de que una exigencia técnica específica requiera dicho acceso, este solo podría establecerse después de notificar claramente al CLIENTE, proporcionar una justificación detallada y obtener su acuerdo por escrito.

Esta medida garantiza el control y la seguridad de los datos del CLIENTE, asegurando que cualquier excepción a la regla esté debidamente autorizada y documentada.

## 9.4. Responsabilidades de los terceros que participan en la prestación del servicio Secure Temple

El Proveedor gestiona la lista de los socios terceros que participan en la prestación del Servicio. Estos terceros son los editores, proveedores (del Proveedor) y otros proveedores que participan en la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

-   El Proveedor exige a los terceros que participan en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio Secure Temple;

-   El Proveedor contractualiza con cada uno de los terceros que participan en la implementación del servicio, cláusulas de auditoría que permiten a un organismo de cualificación verificar que estos terceros cumplen con los requisitos legales y los requisitos SNC, permitiendo al Proveedor cumplir con sus compromisos en el presente Acuerdo de Servicio;

-   El Proveedor implementa un procedimiento que permite controlar regularmente las medidas implementadas por los terceros que participan en la implementación del servicio para cumplir con los requisitos para que el Proveedor cumpla con sus compromisos en el presente Acuerdo de Servicio;

-   El Proveedor implementa un procedimiento de monitoreo de los cambios realizados por los terceros que participan en la implementación del servicio que puedan afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del CLIENTE

Para recordar, el Proveedor proporciona al CLIENTE una plataforma de ejecución de máquinas virtuales, la configuración de estas es responsabilidad del CLIENTE. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Proveedor define a través de sus interfaces políticas de respaldo automáticas. Pero es responsabilidad del CLIENTE la activación de estas políticas de respaldo y, por lo tanto, activar las máquinas virtuales.

El CLIENTE autoriza a la ANSSI y al organismo de cualificación SNC a auditar el Servicio y la infraestructura técnica que entrega el Servicio.

## 9.6. Derechos del CLIENTE

En cualquier momento durante la relación contractual, el CLIENTE puede presentar una reclamación relativa al servicio calificado ante la ANSSI.

En cualquier momento, el CLIENTE puede solicitar al Proveedor que le haga accesible su reglamento interno y su carta de ética.

## 9.7. Borrado de datos al final del Contrato

Al término del contrato, ya sea que expire o sea rescindido por cualquier motivo, el Proveedor se compromete a proceder con el borrado seguro de la totalidad de los datos del CLIENTE, incluidos los datos técnicos. El Proveedor se asegurará de comunicar al CLIENTE un preaviso formal, respetando un plazo de veintiún (21) días naturales. Los datos del CLIENTE serán eliminados en un plazo máximo de treinta (30) días siguientes a esta notificación.

Para certificar esta eliminación, el Proveedor entregará al CLIENTE un certificado que confirme el borrado de los datos.

# 10. Ciclo de vida del presente Acuerdo de Servicio

## 10.1. Entrada en vigor del Acuerdo de Servicio

El presente Acuerdo de Servicio entra en vigor el día de su firma por el CLIENTE.

La recopilación, manipulación, almacenamiento y procesamiento de datos realizados en el marco de la preventa, la implementación, la interrupción del Servicio, son realizados conforme a la legislación vigente.

## 10.2. Evoluciones del Acuerdo de Servicio

Las modificaciones o adiciones al presente Acuerdo de Servicio provienen exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados para tal efecto. Estas propuestas de cambio serán examinadas por las Partes, habilitadas para determinar los aspectos que requieren una formalización por escrito.

Se acuerda que cualquier evolución del Acuerdo de Servicio, tras su validación, que altere las condiciones financieras inicialmente establecidas, requerirá el establecimiento y la firma de un anexo al Contrato en curso.

Los factores que pueden inducir una revisión de este Acuerdo de Servicio incluyen, pero no se limitan a:

-   La evolución de la infraestructura técnica que entrega el Servicio IaaS;
-   Los ajustes realizados a los servicios implementados por el Proveedor para proporcionar el Servicio;
-   Las variaciones de los compromisos asumidos y las sanciones aplicables;
-   Las reconfiguraciones organizativas dentro del CLIENTE o el Proveedor;
-   La expansión o reducción del alcance del Servicio.

La gestión de versiones y revisiones del Acuerdo de Servicio se registra al inicio del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el CLIENTE

Las evoluciones del Acuerdo de Servicio pueden tener, entre otras, las siguientes causas:

-   Una evolución de la infraestructura gestionada por el Proveedor;

-   Una modificación de los servicios implementados por el Proveedor;

-   Una modificación de los compromisos de niveles de servicio por parte del Proveedor.

### 10.2.2. Evoluciones desencadenadas por el Proveedor

Cualquier modificación del Acuerdo de Servicio está sujeta a la aceptación del CLIENTE. Se entiende que cualquier modificación o complemento validado que modifique los elementos financieros del Contrato puede implicar la firma de un anexo al mismo.

## 10.3. Reversibilidad

Además, Cloud Temple se compromete a permitir una revisión del presente Acuerdo de Servicio (que prevea en particular su rescisión) sin penalización para el CLIENTE en caso de pérdida de la calificación SecNumCloud.

Les Servicios no incluyen la obligación de reversibilidad (es decir, la asistencia al Cliente para migrar su sistema a otro Proveedor), con excepción de poner a disposición del COMITENTE, por parte del Proveedor, la interfaz del COMITENTE que permita al COMITENTE respaldar y recuperar sus datos, incluyendo, en particular, los datos de configuración de su sistema de información a través de una de las modalidades técnicas siguientes a elección del COMITENTE: la puesta a disposición de archivos en uno o más formatos documentados y aprovechables fuera del servicio proporcionado por el Proveedor o bien mediante la implementación de interfaces técnicas que permitan el acceso a los datos según un esquema documentado y aprovechable (API).

El COMITENTE, como único responsable de su sistema, debe hacer todo lo posible para facilitar esta operación según sea necesario (lo que implica, en particular, que implemente una documentación rigurosa a tal efecto) y la elaboración de planes de reversibilidad. En el caso de que el COMITENTE necesite un servicio complementario, el Proveedor puede ofrecer una misión de asesoramiento a este respecto en el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes e interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de este Acuerdo de servicio

-   Desastres

-   Averías y fallos

-   Incidentes de seguridad:

-   Impactando la disponibilidad del servicio

-   Impactando la confidencialidad del servicio

-   Impactando la integridad del servicio

#### 11.1.1.2. Tratamiento de los incidentes

-   Plazos

-   Acciones a posteriori

-   Archivar los documentos detallando los incidentes de seguridad.

-   Notificación de violación de datos personales (en línea): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad

El COMITENTE tiene la responsabilidad de elegir los niveles de gravedad de los Incidentes de seguridad sobre los cuales desea ser informado, por ejemplo, a través de su formalización en un PAS aplicable al Servicio.

Por defecto, el COMITENTE es informado:

-   De los incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de tratamientos del presente Acuerdo de servicio);

-   De las violaciones de datos personales de las cuales el COMITENTE es responsable del tratamiento;

-   De las violaciones de datos personales de las cuales el Proveedor es responsable del tratamiento y que contienen datos personales del COMITENTE.

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

El mantenimiento asegurado consiste en la implementación:

-   Del plan de mantenimiento en condiciones operativas del Servicio para asegurar buenos indicadores de disponibilidad, tal como se compromete el Proveedor anteriormente;

-   Del plan de PCA/PRA si es suscrito por el COMITENTE y se activa según los eventuales incidentes que puedan ocurrir.

### 11.2.2. Accesos remotos de Cloud Temple sobre el perímetro del COMITENTE

El Proveedor se prohíbe, dentro del marco del presente Acuerdo de servicio, cualquier acceso a los Tentants y al espacio de interfaz del COMITENTE.

Corresponderá al COMITENTE dar los accesos necesarios al personal del Proveedor. El COMITENTE reconoce que los accesos se utilizarán en el marco del alojamiento y, en última instancia, de la gestión de TI (si es suscrito por el COMITENTE).

### 11.2.3. Accesos remotos de terceros participantes en la prestación del servicio sobre el perímetro del COMITENTE

No se autoriza ningún acceso remoto de terceros participantes en la prestación del Servicio.

Si una necesidad técnica hiciera este caso necesario, entonces este tipo de acceso solo se realizaría después de la notificación del COMITENTE, justificación y obtención de su acuerdo por escrito.

# 12. Procedimiento de eliminación de datos al final del Contrato

Al término del Contrato, ya sea por su vencimiento o por cualquier otra causa, el Proveedor asegurará la eliminación segura de todos los datos tratados en el marco del Servicio, incluyendo los Datos técnicos del COMITENTE. El Proveedor dará un preaviso formal respetando un plazo de veintiún (21) días calendario. Los datos del COMITENTE serán eliminados en un plazo máximo de treinta (30) días después de la notificación. El Proveedor proporcionará un certificado de eliminación de datos al COMITENTE.

# 13. Derecho aplicable

## 13.1. De manera general

El derecho aplicable al presente Acuerdo de servicio es el derecho francés.

## 13.2. Respeto del derecho y de las normativas aplicables

El Proveedor se compromete a los siguientes puntos:

-  La identificación de las restricciones legales y normativas aplicables en el marco del Servicio;

-  El respeto de las restricciones legales y normativas aplicables a los datos confiados al Proveedor;

-  El respeto de la Ley de protección de datos y del RGPD;

-  La implementación de medios de protección de los datos personales;

-  La implementación de un proceso de vigilancia legal y normativa;

-  Disponer y mantener relaciones adecuadas o una vigilancia con las autoridades sectoriales en relación con la naturaleza de los datos tratados en el marco de los Servicios. Esto incluye en particular a la ANSSI, el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando como procesador en el sentido del artículo 28 del Reglamento General de Protección de Datos (RGPD), el Proveedor se compromete:

-  A asegurar la transparencia y la trazabilidad;

-  A designar un DPO encargado de definir y implementar las medidas de protección de datos personales;

-  Proporcionar asistencia y asesoramiento al COMITENTE y alertarlo si una instrucción de este último constituye una violación de las normas de protección de datos personales si el Proveedor tiene los medios para identificarlo;

-  Una garantía de seguridad sobre los datos tratados (debido a la calificación SecNumCloud).

## 13.4. Protección frente al derecho extraeuropeo

En caso de recurrir, para la prestación del Servicio, a una empresa tercera - incluyendo un subcontratista - que tenga su sede estatutario, administración central o establecimiento principal en un Estado no miembro de la Unión Europea o que pertenezca o sea controlada por una empresa tercera domiciliada fuera de la Unión Europea, el Proveedor se compromete a que dicha empresa tercera no tendrá ningún acceso a los datos operados en el servicio 'Secure Temple'.

Para recordar, los datos mencionados son aquellos que son confiados al Proveedor por el COMITENTE así como todos los Datos técnicos que incluyen información sobre los COMITENTES.

Para los fines del presente artículo, el concepto de control se entiende como el mencionado en el II del artículo L233-3 del código de comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Para Cloud Temple, el PROVEEDOR

Para \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMITENTE