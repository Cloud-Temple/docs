---
title: Convenio de Servicio IaaS
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **CONVENIO DE SERVICIOS IaaS**

| **Destinatarios :**                  | **CLIENTE**                                    |
| :----------------------------------- | :--------------------------------------------- |
| **Referencia del documento**         | CT.AM.JUR.ANX_Convenio de Servicios_IaaS_v2.0  |
| **Sus interlocutores**               | *Nombre* *Apellido*                            |
|                                      | Account Manager                                |
|                                      | e-mail : *nombre.apellido*@cloud-temple.com    |
| **Fecha de última actualización**    | 03/04/2024                                     |
| **Fecha de validación contractual**  | Día DD AAAA                                    |

----------------------------------------------------------------------------------

| **Versión** | **Fecha**  | **Acción**                             | **Autor**       |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Redacción inicial                      | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enriquecimiento                        | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Integración Indicadores                | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modificación pie de página             | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enriquecimiento                        | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enriquecimiento                        | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modificación Capital y Enriquecimiento | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enriquecimiento                        | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enriquecimiento                        | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Ajustes conformidad SNC                | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publicación                            | Lorena ALCALDE  |

----------------------------------------------------------------------------------

# 2. **ÍNDICE**

- [1. **CONVENIO DE SERVICIOS IaaS**](#1-convenio-de-servicios-iaas)
- [2. **ÍNDICE**](#2-índice)
- [3. Preliminar y Glosario](#3-preliminar-y-glosario)
  - [3.1. Preliminar](#31-preliminar)
  - [3.2. Glosario](#32-glosario)
- [4. Acrónimos](#4-acrónimos)
- [5. Objeto del presente Convenio de servicio](#5-objeto-del-presente-convenio-de-servicio)
- [6. Auditoría](#6-auditoría)
- [7. Descripción del Servicio](#7-descripción-del-servicio)
  - [7.1. Modelo de responsabilidad compartida](#71-modelo-de-responsabilidad-compartida)
  - [7.2. Presentación detallada del perímetro del Servicio](#72-presentación-detallada-del-perímetro-del-servicio)
    - [7.2.1. Infraestructuras Datacenters](#721-infraestructuras-datacenters)
    - [7.2.2. Infraestructura software de gestión del Servicio](#722-infraestructura-software-de-gestión-del-servicio)
    - [7.2.3. Infraestructuras de cálculo](#723-infraestructuras-de-cálculo)
    - [7.2.4. Infraestructura de almacenamiento](#724-infraestructura-de-almacenamiento)
    - [7.2.5. Infraestructura de red global](#725-infraestructura-de-red-global)
    - [7.2.6. Infraestructura de backup](#726-infraestructura-de-backup)
    - [7.2.7. Implementación de soluciones de recuperación de actividad o de continuidad de actividad](#727-implementación-de-soluciones-de-recuperación-de-actividad-o-de-continua-de-actividad)
  - [7.3. Limitaciones de los servicios en el modelo IaaS cualificado](#73-limitaciones-de-los-servicios-en-el-modelo-iaas-cualificado)
    - [7.3.1. Servicios gestionados en RUN](#731-servicios-gestionados-en-run)
    - [7.3.2. Configuración de respaldo](#732-configuración-de-respaldo)
    - [7.3.3. Configuración del backup](#733-configuración-del-backup)
  - [7.4. Implementación del servicio](#74-implementación-del-servicio)
    - [7.4.1. Requisitos técnicos](#741-requisitos-técnicos)
  - [7.5. Localización del servicio en Francia](#75-localización-del-servicio-en-francia)
    - [7.5.1. Localización de los Datacenters que albergan el Servicio](#751-localización-de-los-datacenters-que-albergan-el-servicio)
    - [7.5.2. Localización de las agencias Cloud Temple que operan el servicio](#752-localización-de-las-agencias-cloud-temple-que-operan-el-servicio)
  - [7.6. Soporte](#76-soporte)
    - [7.6.1. Naturaleza del soporte que acompaña al servicio](#761-naturaleza-del-soporte-que-acompaña-al-servicio)
    - [7.6.2. Solicitud del servicio de soporte técnico](#762-solicitud-del-servicio-de-soporte-técnico)
    - [7.6.3. Proceso de gestión de Incidentes](#763-proceso-de-gestión-de-incidentes)
    - [7.6.4. Proceso de priorización de tratamientos](#764-proceso-de-priorización-de-tratamientos)
    - [7.6.5. Idioma y localización del servicio de soporte](#765-idioma-y-localización-del-servicio-de-soporte)
- [8. Compromisos y niveles de servicios](#8-compromisos-y-niveles-de-servicios)
  - [8.1. Compromisos de disponibilidad de la infraestructura](#81-compromisos-de-disponibilidad-de-la-infraestructura)
  - [8.2. Compromiso de disponibilidad de la interfaz CLIENTE](#82-compromiso-de-disponibilidad-de-la-interfaz-cliente)
  - [8.3. Compromiso de disponibilidad del soporte](#83-compromiso-de-disponibilidad-del-soporte)
  - [8.4. Compromiso de disponibilidad del almacenamiento de objetos S3](#84-compromiso-de-disponibilidad-del-almacenamiento-de-objetos-s3)
  - [8.5. Precisión respecto al compromiso de backup](#85-precisión-respecto-al-compromiso-de-backup)
- [9. Organización de la relación contractual](#9-organización-de-la-relación-contractual)
  - [9.1. Responsabilidades del Proveedor](#91-responsabilidades-del-proveedor)
  - [9.2. Limitación de las responsabilidades del Proveedor](#92-limitación-de-las-responsabilidades-del-proveedor)
  - [9.3. Limitación de acceso](#93-limitación-de-acceso)
  - [9.4. Responsabilidades de los terceros que participan en la prestación del servicio Secure Temple](#94-responsabilidades-de-los-terceros-que-participan-en-la-prestación-del-servicio-secure-temple)
  - [9.5. Responsabilidades y obligaciones del CLIENTE](#95-responsabilidades-y-obligaciones-del-cliente)
  - [9.6. Derechos del CLIENTE](#96-derechos-del-cliente)
  - [9.7. Borrado de datos al finalizar el Contrato](#97-borrado-de-datos-al-finalizar-el-contrato)
- [10. Ciclo de vida del presente Convenio de servicio](#10-ciclo-de-vida-del-presente-convenio-de-servicio)
  - [10.1. Entrada en vigor del Convenio de servicio](#101-entrada-en-vigor-del-convenio-de-servicio)
  - [10.2. Evoluciones del Convenio de servicio](#102-evoluciones-del-convenio-de-servicio)
    - [10.2.1. Evoluciones iniciadas por el CLIENTE](#1021-evoluciones-iniciadas-por-el-cliente)
    - [10.2.2. Evoluciones iniciadas por el Proveedor](#1022-evoluciones-iniciadas-por-el-proveedor)
  - [10.3. Reversibilidad](#103-reversibilidad)
- [11. Disponibilidad, continuidad y restauración del servicio](#11-disponibilidad-continua-y-restauración-del-servicio)
  - [11.1. Gestión de Incidentes y interrupciones](#111-gestión-de-incidentes-y-interrupciones)
    - [11.1.1. Incidentes](#1111-incidentes)
      - [11.1.1.1. Tipos de Incidentes tratados en el marco de este Convenio de servicio](#11111-tipos-de-incidentes-tratados-en-el-marco-de-este-convenio-de-servicio)
      - [11.1.1.2. Tratamiento de incidentes](#11112-tratamiento-de-incidentes)
      - [11.1.1.3. Nivel de notificación de los Incidentes de seguridad](#11113-nivel-de-notificación-de-los-incidentes-de-seguridad)
  - [11.2. Mantenimiento del Servicio](#112-mantenimiento-del-servicio)
    - [11.2.1. Naturaleza del mantenimiento](#1121-naturaleza-del-mantenimiento)
    - [11.2.2. Accesos remotos de Cloud Temple en el perímetro del CLIENTE](#1122-accesos-remotos-de-cloud-temple-en-el-perímetro-del-cliente)
    - [11.2.3. Accesos remotos de terceros participando en la prestación del servicio en el perímetro del CLIENTE](#1123-accesos-remotos-de-terceros-participando-en-la-prestación-del-servicio-en-el-perímetro-del-cliente)
- [12. Procedimiento de borrado de datos al finalizar el Contrato](#12-procedimiento-de-borrado-de-datos-al-finalizar-el-contrato)
- [13. Derecho aplicable](#13-derecho-aplicable)
  - [13.1. De manera general](#131-de-manera-general)
  - [13.2. Respeto del derecho y las regulaciones aplicables](#132-respeto-del-derecho-y-las-regulaciones-aplicables)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protección respecto al derecho extraeuropeo](#134-protección-respecto-al-derecho-extraeuropeo)
- [14. FIRMAS](#14-firmas)

----------------------------------------------------------------------------------

# 3. Preliminar y Glosario

## 3.1. Preliminar

El presente documento formaliza el Convenio de servicio asociado al servicio IaaS cualificado SecNumCloud bajo la denominación de «*Secure Temple*».

\"El presente convenio de servicio complementa y es complementario a las condiciones generales de venta y uso del Proveedor. Se
entiende que los documentos contractuales se interpretan de manera coherente entre sí. En caso de contradicción o divergencia entre los
términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Convenio de Servicio SecNumCloud IaaS
3. Convenio de Servicio SecNumCloud PaaS
4. Convenio específico particular
5. Plan de Garantía de Seguridad (PAS)
6. Condiciones Particulares de Uso (CPU)

## 3.2. Glosario

En el presente Convenio de servicio, el **CLIENTE**, el **Proveedor** y las **Partes** están identificados en el Contrato
al que se anexa el presente Convenio de servicio.

Las expresiones abajo empleadas en el presente Convenio de servicio se interpretarán conforme a las definiciones que se les atribuyen
a continuación:

- **Cambio :** Cualquier adición, modificación o eliminación que impacte el Servicio, autorizada, planificada o gestionada.
- **Cambio estándar :** Cambio sujeto a un procedimiento, cuyas modalidades de puesta en producción e impactos (incluidos financieros) son conocidos y aceptados de antemano por las Partes. Entonces se integra en el catálogo de cambios estándar y, según el caso, puede tener un GTI y un GTR.

- **Contrato:** designa el contrato suscrito por el COMITENTE con el Proveedor para permitir al COMITENTE beneficiarse del Servicio, al que se adjunta este Acuerdo de servicio.

- ***Acuerdo de servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y en conformidad con los requisitos del Referencial SecNumCloud.

- **Solicitud de servicio:** solicitud del COMITENTE hacia el Proveedor en el marco del Servicio, cubriendo las operaciones no realizables por el COMITENTE desde la interfaz COMITENTE y las solicitudes de soporte en el marco del Servicio. Las solicitudes de servicio se limitan a aquellas previstas en el Contrato o en el presente Acuerdo de servicio.

- **Disponibilidad:** Capacidad para garantizar la disponibilidad y el mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

- **Datos técnicos:** comprende el conjunto de datos manipulados para entregar el Servicio, notablemente incluyendo la identidad de los beneficiarios y administradores de la infraestructura técnica, los registros de la infraestructura técnica, configuración de accesos, directorio, certificados...

- **Evento:** Un "evento" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

- **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales sobre una blade de cálculo.

- **Incidente:** Cualquier evento imprevisto que perturbe el funcionamiento normal del Servicio o comprometa la seguridad de los datos.

- **Incidente de seguridad:** Cualquier evento en el ámbito del Servicio:

  - De naturaleza intencionalmente maliciosa;
  - De naturaleza accidental que compromete la integridad, confidencialidad o trazabilidad del Servicio o de los datos del COMITENTE;
  - Que compromete las medidas de seguridad existentes.
    Las faltas de Disponibilidad de origen no malicioso no se consideran un Incidente de seguridad (falla de hardware, bug, malfunction, desastre natural...).

- **Interfaz COMITENTE:** Interfaz de administración del Servicio puesta a disposición del COMITENTE por el Proveedor, que agrupa una consola de administración web y una API.

- **Puesta en producción:** acción(es) de administración de realización del Cambio cuando este es aprobado (el cambio, según
    ITIL, solo implica la gestión del cambio y no su realización/concreción).

- **Problema:** causa de uno o varios Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo).

- **Región:** designa un conjunto geográficamente delimitado de zonas de disponibilidad cloud, proporcionando servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad regulatoria local.

- **Servicio:** designa el servicio IaaS calificado SecNumCloud "Secure Temple", entregado al COMITENTE por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, como se describe en la sección "Descripción del Servicio" del presente Acuerdo de servicio.

- **Secure Temple:** designa el servicio IaaS calificado SecNumCloud, propuesto por la empresa Cloud Temple, definido en la certificación consultable en el sitio de la ANSSI y proporcionada como anexo del presente Acuerdo de servicio.

- **Siniestro:** designa un evento grave de origen natural o humano, accidental o intencional, ocasionando pérdidas y daños importantes a la Parte afectada.

- **Supervisión:** Vigilancia de un Sistema de Información o de un Servicio, que implica la recopilación de diversos datos tales como medidas y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente en los elementos vigilados, prerrogativa que pertenece a las operaciones de Administración.

- **Tenant:** Una instancia aislada reservada a un usuario o grupo de usuarios, compartiendo una infraestructura común mientras mantiene la independencia y seguridad de los datos y aplicaciones.

- **Zona de Disponibilidad (AZ) (Availability zone):** Una sección específica e aislada de la infraestructura de cloud computing, diseñada
    para asegurar la alta disponibilidad y la resiliencia de los servicios
    mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  | **Acrónimo** | **Definición**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comité consultivo sobre cambios                                |
  | **CMDB**     | Configuration Management Database -- Base de datos de gestión de configuraciones        |
  | **COPIL**    | Comité de dirección                                                                     |
  | **COSTRAT**  | Comité estratégico                                                                      |
  | **COPROJ**   | Comité de Proyecto                                                                      |
  | **DB**       | Database (base de datos)                                                                |
  | **DRP**      | Disaster Recovery Plan (PRA) (Plan de recuperación de desastres)                        |
  | **GTE**      | Garantía de Tiempo de Escalada                                                          |
  | **GTI**      | Garantía de Tiempo de Intervención                                                      |
  | **GTR**      | Garantía de Tiempo de Resolución                                                        |
  | **ITIL**     | Information Technology Infrastructure Library - Buenas prácticas para la gestión de SI  |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Mantenimiento en condiciones operativas                                                 |
  | **MOA**      | Dirección de Obra                                                                       |
  | **MOE**      | Dirección de Ejecución                                                                  |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Plan de Aseguramiento de Calidad                                                        |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Plan de Aseguramiento de Seguridad                                                      |
  | **PASSI**    | Prestador de Auditoría de Seguridad de Sistemas de Información                          |
  | **RFC**      | Request For Change - Solicitud de cambio                                                |
  | **RGPD**     | Reglamento General de Protección de Datos (personales)                                  |
  | **RPO**      | Recovery Point Objective - Frescura de los datos restaurados en caso de Siniestro       |
  | **RTO**      | Recovery Time Objective - Tiempo de recuperación del servicio en caso de Siniestro      |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Acuerdo sobre niveles de servicio                            |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Mantenimiento Aplicativo por Terceros                                                   |
  | **UO**       | Unidad de Obra                                                                          |
  | **VABE**     | Validación de Aptitud para la Buena Explotación                                         |
  | **VABF**     | Validación de Aptitud para el Buen Funcionamiento                                       |
  | **VM**       | Virtual Machine (Máquina virtual)                                                       |
  | **VSR**      | Validación de Servicio Regular                                                          |

# 5. Objeto del presente Acuerdo de servicio

El presente Acuerdo de servicio establece los términos y condiciones según los cuales el Proveedor se compromete a entregar el Servicio al
COMITENTE. Su objeto es:

- Precisar los requisitos de rendimiento esperados por el COMITENTE en términos de funcionalidad y fiabilidad del Servicio;

- Enunciar las obligaciones del Proveedor para satisfacer los niveles de servicio convenidos;

- Identificar las normas regulatorias aplicables específicamente al Servicio entregado;

- Asegurar una uniformidad e integridad en la evaluación de la calidad del Servicio;

- Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en caso de que el Proveedor sea descalificado de su calificación SecNumCloud, el Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalizaciones, por el COMITENTE. En tal eventualidad, el Proveedor se compromete a informar al COMITENTE de esta descalificación mediante el envío de una notificación oficial, a través de una carta certificada con acuse de recibo.
Il conviene de señalar que una modificación o un ajuste de la calificación SecNumCloud no será interpretado como una revocación de
la calificación inicial.

# 6. Auditoría

El Proveedor se compromete a permitir al MANDANTE, o a cualquier auditor externo y no competidor del Proveedor que este último haya designado, consultar todos los documentos necesarios para la certificación del cumplimiento de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización
de auditorías.

Mediante la aceptación del presente Acuerdo de servicio, el MANDANTE otorga su autorización explícita a:

1. La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) así como a la entidad de certificación competente para emprender la verificación de la conformidad del Servicio y de su sistema de información con el marco de referencia SecNumCloud.
2. Un proveedor de auditoría de la seguridad de los sistemas de información, debidamente cualificado PASSI y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio propuesto por el Proveedor se caracteriza por la puesta a disposición de las siguientes prestaciones, las cuales se alinean con el
principio de responsabilidad compartida presentado en el marco de referencia SecNumCloud:

- La provisión de recursos de cálculo (compute);

- La puesta a disposición de espacios de almacenamiento;

- El acceso a servicios de conectividad de red e internet;

- La oferta de un servicio de backup dedicado a las máquinas virtuales.

El modelo de responsabilidades compartido aplicado entre el Proveedor y el MANDANTE en el marco del Servicio se presenta en §7.1.

Se entiende que el Proveedor movilizará su experiencia para realizar las prestaciones según las mejores prácticas profesionales y
conforme a los requisitos del marco de referencia SecNumCloud.

El Servicio está certificado SecNumCloud (ver certificación en Anexo).

## 7.2. Presentación detallada del alcance del Servicio

| Compute               | Recurso de cálculo del Tenant MANDANTE                                                                               |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- |
| Storage               | Datos de producción del Tenant MANDANTE                                                                             |
| Almacenamiento objeto S3 | puesta a disposición de una infraestructura de almacenamiento de objeto soberana multi AZ y compatible con las API S3 estándar. |
| Backup                | Módulo suscripción al almacenamiento masivo adecuado                                                                 |
| Infraestructura de red| Recurso de red del Tenant MANDANTE                                                                                   |
| Consola MANDANTE      | El servicio que permite al MANDANTE acceder a su servicio IaaS y administrarlo a través de la interfaz Shiva        |
| Soporte               | El servicio de soporte que acompaña los servicios anteriores y solo estos (*)                                        |

*(*) Dentro del límite del alcance del Servicio certificado SNC y de las responsabilidades del Proveedor en la materia*

### 7.2.1. Infraestructuras Datacenters

El Servicio incluye la puesta a disposición, para cada Zona de disponibilidad, de las prestaciones certificadas a continuación:

- Sitio datacenter ubicado en Francia para la Región FR, conforme a las últimas normas tecnológicas, que proporciona un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
- Puesta a disposición de salas técnicas dentro de datacenters dedicados para alojar los equipos técnicos indispensables para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado y otros componentes necesarios;
- Alimentación eléctrica segura, asegurada por dos circuitos eléctricos distintos, garantizando una continuidad de servicio;
- Suministro de servicios de climatización, ajustados para cumplir con las normas y recomendaciones de los fabricantes de equipos, para mantener un entorno óptimo para los dispositivos técnicos;
- Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y la seguridad del servicio proporcionado.

El Proveedor asegura la puesta a disposición de servicios avanzados de detección y extinción de incendios, diseñados para identificar y
neutralizar eficazmente cualquier inicio de fuego dentro de las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos
y los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir los riesgos de incendio, minimizar los daños potenciales y
asegurar la continuidad de las operaciones.

El MANDANTE está informado de que todos los procedimientos y medidas de seguridad implementadas, incluyendo las pruebas anuales de cambio a
generadores, son esenciales para garantizar la continuidad e integridad de los servicios proporcionados. Estas prácticas están diseñadas para
minimizar los riesgos de fallo y asegurar una capacidad de respuesta óptima en caso de Incidente. Al aceptar estas condiciones, el cliente reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. El MANDANTE también es animado a
tomar conocimiento de las recomendaciones de seguridad proporcionadas y a integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de gestión del Servicio

El Proveedor proporciona al MANDANTE la consola de administración y la API necesaria para el uso del Servicio. También se compromete a mantener esta consola de administración y la API en condiciones operativas óptimas y a asegurar su seguridad de manera continua.
Esta consola de administración y la API se denominan de manera agrupada bajo el término «interfaz MANDANTE».

El Proveedor alerta al MANDANTE sobre el hecho de que un uso anormal de la interfaz MANDANTE, particularmente en caso de sobrecarga de sus APIs de comando (hammering), puede activar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o al Servicio. Cabe destacar que esta situación no constituye una indisponibilidad del Servicio sino una acción de protección del Servicio y de la infraestructura del Proveedor; por lo tanto, el MANDANTE no puede considerarlo como una indisponibilidad en sus cálculos.

Además, el Proveedor especifica al MANDANTE que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el MANDANTE envía solicitudes idénticas a una frecuencia superior, su rechazo no podrá ser interpretado como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cálculo

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el MANDANTE, de los equipos necesarios para
la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

- La provisión de los chasis técnicos necesarios para el buen funcionamiento de las hojas de cálculo;
- La provisión de las hojas de cálculo en las cantidades especificadas por el MANDANTE y distribuidas según las zonas de disponibilidad de su elección. Cabe señalar que estas hojas de cálculo están exclusivamente dedicadas al MANDANTE;
- La puesta a disposición de sistemas operativos de tipo hipervisores, así como la garantía del mantenimiento en condiciones operativas y de seguridad de la infraestructura de software necesaria para la gestión de estos sistemas operativos. Cabe resaltar que, aunque el Proveedor es responsable del mantenimiento operativo y de la seguridad global del Servicio, no tiene conocimiento específico de los entornos de producción del MANDANTE ni de los requisitos relacionados con sus cargas de trabajo. Por lo tanto, la responsabilidad de decidir la actualización de los sistemas operativos de las hojas de cálculo hipervisores, una acción que podría requerir un reinicio, recae completamente en el MANDANTE. Esta operación puede realizarse a través de la Interfaz MANDANTE.

La elección del modelo de hoja de cálculo, seleccionado del catálogo propuesto por el Proveedor, es responsabilidad del
MANDANTE.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al MANDANTE de una infraestructura de almacenamiento compartida de tipo SAN (Storage Area Network), que ofrece diferentes
niveles de rendimiento. Este servicio incluye:

- La implementación y mantenimiento en condiciones operativas y de seguridad de la red SAN dedicada;
- La instalación y gestión de los sistemas de almacenamiento compartidos entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, su supervisión y su metrología;
- La implementación de sistemas automatizados para la asignación de LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del MANDANTE, conforme a los volúmenes suscritos por el MANDANTE.

### 7.2.5. Infraestructura de red global

El Proveedor despliega en el marco del Servicio, una red global que facilita al MANDANTE la accesibilidad de sus sistemas
alojados. Este servicio incluye:

- La provisión, mantenimiento en condiciones operativas y de seguridad de todas las conexiones de fibra óptica
    interconectando las diferentes Zonas de disponibilidad;

- La provisión, mantenimiento en condiciones operativas y de seguridad de los equipos técnicos necesarios para el buen
    funcionamiento de la red y para la segregación de los diferentes clientes.
L'interconnexion réseau del Tenant COMMANDITAIRE, a Internet o a redes privadas, y los equipos de redes, enlaces de operadores y otros
componentes técnicos que realizan esta interconexión, no forman parte del alcance del Servicio. Esta interconexión de red se implementa
conforme a las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo

El Proveedor pone a disposición del COMMANDITAIRE un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus
máquinas virtuales. El Proveedor asegura el mantenimiento en condiciones operacionales y de seguridad de este servicio de respaldo.
El Proveedor garantiza que los respaldos del COMMANDITAIRE estarán ubicados fuera de la Zona de disponibilidad de las cargas de trabajo
respaldadas, siempre y cuando el COMMANDITAIRE haya suscrito a las Unidades de obra adecuadas.

Este servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS
de los Tenants del COMMANDITAIRE dentro del alcance del Servicio. La elaboración y aplicación de una política de respaldo adecuada por el
COMMANDITAIRE dependen de la suscripción a unidades de obra específicas. Por lo tanto, corresponde al COMMANDITAIRE asegurarse de la
disponibilidad de los recursos técnicos necesarios a través del Proveedor para implementar su política de respaldo o
ajustar esta última en función de los medios disponibles.

El Proveedor se compromete a notificar al COMMANDITAIRE en caso de restricciones de capacidad y a proporcionar asistencia y asesoramiento para
la optimización de los recursos. Las obligaciones del Proveedor se limitarán a la implementación de las necesidades expresadas por el COMMANDITAIRE
en términos de política de respaldo, dentro de los recursos suscritos.

### 7.2.7. Implementación de soluciones de recuperación de actividad o continuidad de actividad

El Proveedor proporciona al COMMANDITAIRE todas las soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos a través de diferentes Zonas de disponibilidad. Corresponde al COMMANDITAIRE la responsabilidad de gestionar eficazmente esta distribución de recursos, para lo cual tiene la posibilidad de explotar las herramientas del Proveedor disponibles para este uso.

## 7.3. Limitaciones de los servicios en el modelo IaaS cualificado

### 7.3.1. Servicios gestionados en RUN

Es importante destacar que están excluidos del Servicio:

- El alojamiento de componentes físicos del COMMANDITAIRE;

- La interconexión de red del Tenant COMMANDITAIRE, a Internet o a redes privadas, incluidos los enlaces de operador;

- Cualquier servicio de tipo gestionado, o TMA;

- Cualquier asistencia en las máquinas virtuales a nivel de OS y por encima en la pila de responsabilidades Iaa, incluso si se trata de simple supervisión.

Sin embargo, no se excluye en absoluto que el COMMANDITAIRE recurra a tales servicios a través de la oferta MSP del Proveedor para intervenir en modo de servicios gestionados en sus Tenants. Estos servicios no estarán entonces regulados por este Acuerdo de servicio y sus compromisos/cláusulas bilaterales.

### 7.3.2. Configuración de emergencia

Por defecto, el Proveedor proporciona la implementación de los recursos de IaaS al COMMANDITAIRE reservando recursos y configurando las implementaciones para utilizar las Zonas de disponibilidad. Corresponde al COMMANDITAIRE elegir las Zonas de disponibilidad a través de la interfaz COMMANDITAIRE.

### 7.3.3. Configuración del respaldo

El servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología que representan el entorno IaaS de los Tenants del COMMANDITAIRE dentro del marco del Servicio.

El servicio de respaldo y la realización de la política de respaldo del COMMANDITAIRE están sujetos a la suscripción de espacio de almacenamiento en el almacenamiento masivo necesario para asegurar el servicio. Por lo tanto, es responsabilidad del COMMANDITAIRE suscribirse con el Proveedor a los medios técnicos necesarios para asegurar la política de respaldo en su ámbito informático, o ajustar la política de respaldo a los medios implementados. El Proveedor se compromete a informar al COMMANDITAIRE en caso de límite de capacidad técnica.

El Proveedor implementará los medios técnicos y humanos necesarios para el respaldo del sistema alojado dentro del límite de los recursos suscritos por el COMMANDITAIRE.

Además, en el caso de los ámbitos no cubiertos por el Proveedor, corresponde al COMMANDITAIRE definir su propia estrategia de respaldo y configurar por sí mismo los respaldos de las VM o realizar una Solicitud de servicio al Proveedor para que se configure los respaldos para los servidores físicos si el COMMANDITAIRE dispone de un contrato de servicio gestionado que permita al Proveedor actuar a través de la interfaz COMMANDITAIRE, que es la consola de administración que se pone a disposición en el marco de este Acuerdo de servicio y que dispone de funcionalidades para configurar los respaldos.

Además, este servicio solo tendrá como compromiso traducir, mediante la configuración a través de la interfaz COMMANDITAIRE, la configuración especificada claramente por el COMMANDITAIRE.

Por razones de flexibilidad de la oferta del Proveedor, el COMMANDITAIRE tiene la opción de asociar una política de no-respaldo en algunas de sus VM. En ese caso, corresponde al COMMANDITAIRE asumir esta elección. El Proveedor no respaldará las VM asociadas a la política "no backup". El Proveedor advierte al COMMANDITAIRE que elegir la política "no backup" o elegir respaldar manualmente expone al COMMANDITAIRE a una pérdida definitiva de datos en caso de Incidente en las capas bajas o en las capas dependientes de su responsabilidad en el modelo IaaS. En tal caso, será imposible responsabilizar al Proveedor de restaurar los datos ya que no habrá nada que restaurar. El Proveedor recomienda siempre respaldar las VM.

Para cualquier tema relacionado con el SO instalado en una máquina virtual y cualquier software o programa ejecutado "por encima del SO", es responsabilidad del COMMANDITAIRE realizar las operaciones de administración y supervisión dentro de la Unión Europea si desea garantizar que toda la verticalidad de las capas del SI sean operadas y gestionadas desde la Unión Europea. Las operaciones de administración fuera del ámbito de responsabilidad del Proveedor en el marco del presente Acuerdo de servicio se indican en la sección "Modelo de responsabilidades compartidas" del presente Acuerdo de Servicio.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el COMMANDITAIRE reconoce que deberá:

- Funcionar con una virtualización de tipo VMware en las versiones soportadas por el editor y proporcionadas por el Proveedor dentro del marco del Servicio;

- Recurrir a través del Proveedor al uso de la herramienta de respaldo;

- Declarar IP fijas desde las cuales el Proveedor le autorizará a acceder a la interfaz COMMANDITAIRE (Filtrado por lista blanca). Las modificaciones de esta lista de IP deberán realizarse a través de Solicitudes de servicio (lista no administrable desde la interfaz de administración del Servicio).

## 7.5. Localización del servicio en Francia

Se precisa que ninguna de las operaciones ni ningún componente físico involucrado en la prestación del Servicio, objeto del presente Acuerdo de servicio, está ubicado fuera de la Unión Europea.

Esto incluye, en particular, el soporte, la supervisión operacional y la supervisión de seguridad (SOC) de la infraestructura técnica que brinda el Servicio. De hecho, todo el almacenamiento, todas las tareas de administración, supervisión y todos los procesamiento se realizan en Francia.

### 7.5.1. Localización de los Datacenters que alojan el Servicio

A excepción de las operaciones de los colaboradores y agencias del Proveedor, todas las operaciones de producción (incluyendo el almacenamiento y procesamiento de datos) y componentes técnicos que brindan el Servicio están ubicados en los Datacenters basados en Francia.

### 7.5.2. Localización de las agencias Cloud Temple operando el servicio

Los colaboradores de Cloud Temple que intervienen en el ámbito del Servicio operan desde las agencias de Cloud Temple todas situadas
exclusivamente en Francia. Estas agencias están situadas en Francia, en Tours, Lyon, Caen y París La Défense.

El COMMANDITAIRE está informado de la posibilidad de los empleados de Cloud Temple de trabajar a distancia. Sin embargo, el Proveedor garantiza el mismo nivel de seguridad en lo que respecta a los accesos a distancia, especialmente en lo concerniente a los accesos VPN. Estos accesos remotos se implementan conforme a los requisitos del marco de referencia SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte que acompaña el servicio

El Proveedor ofrece un servicio de soporte técnico destinado a asistir al COMMANDITAIRE en la gestión, solución de problemas y optimización de sus recursos desplegados. Este servicio cubre una amplia gama de actividades, desde la ayuda en la configuración inicial de los servicios
hasta el soporte técnico avanzado para resolver problemas específicos.

Aquí una descripción de las características y funcionalidades del servicio de soporte:

- Asistencia en la implementación inicial del uso del Servicio;
- Asistencia en la resolución de incidentes;
- Asistencia en la resolución de problemas;
- Seguimiento y asesoramiento sobre la optimización de la base técnica.
Dans le marco del servicio de soporte, el Prestador no reemplaza al COMITENTE en el uso del Servicio. El COMITENTE sigue siendo totalmente responsable de la configuración, la operación de sus VM y de sus Tenants, y de la gestión de todos los elementos (datos y aplicaciones incluidos) que haya almacenado o instalado en las infraestructuras del Prestador. El servicio de soporte técnico se proporciona de acuerdo con los Términos y Condiciones Generales de Venta y Uso, el Prestador está sujeto a una obligación de medios.

El COMITENTE se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose en particular de solicitar servicios no suscritos con el Prestador y de involucrar a los equipos del Prestador con sus propios clientes o terceros no incluidos en el Contrato. El Prestador se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de las unidades de trabajo de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico es accesible a través de un sistema de tickets mediante la consola del COMITENTE y está disponible durante el horario normal de oficina, excepto festivos (8h - 18h; Lunes - Viernes; calendario y horarios franceses). Para emergencias que ocurran fuera del horario laboral, especialmente incidentes que afecten significativamente la producción, se puede contactar el servicio de guardia a través de un número proporcionado al COMITENTE al inicio del Servicio.

Para cada solicitud o Incidente, es imperativo generar un ticket con el soporte del Prestador. La creación de este ticket, que incluye toda la información necesaria, es esencial y marca el inicio de la evaluación de los compromisos del Prestador.

En cuanto el Prestador recibe una solicitud o notificación de Incidente, ya sea a través de la consola de administración o tras una llamada telefónica, se crea un ticket automáticamente. Al declarar un Incidente, es esencial que el COMITENTE proporcione al prestador la mayor cantidad de detalles sobre el problema encontrado. Este enfoque es crucial para permitir una evaluación adecuada de la situación, priorización y diagnóstico efectivo.

El Cliente recibe entonces una confirmación por correo electrónico, indicando la creación del ticket y su número único. El COMITENTE puede consultar el estado y el historial de sus solicitudes y declaraciones de Incidentes directamente desde la consola de administración.

### 7.6.3. Proceso de gestión de Incidentes

Al declarar un incidente, el equipo de soporte técnico del Prestador inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El Cliente debe colaborar activamente con el Prestador proporcionando toda la información necesaria y realizando las pruebas requeridas. El Prestador puede acceder al Servicio del Cliente para diagnosticar el Incidente.

Si los Servicios del Prestador se consideran funcionales y el Incidente no es atribuible a él, se informará al Cliente. A petición del Cliente, el Prestador puede ofrecer Servicios Profesionales para identificar el origen del problema, facturables previo acuerdo en tramos de 30 minutos.

En caso de que el Incidente sea responsabilidad del Prestador o de uno de sus subcontratistas, este completará el diagnóstico y se dedicará a restaurar el Servicio sin costos adicionales. El diagnóstico se basa en los intercambios entre las Partes y los datos del Prestador, estos elementos se consideran probatorios por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de tratamientos

La determinación del nivel de prioridad de un expediente se basa en un análisis matricial que evalúa el impacto del incidente y su grado de criticidad:

- Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impacto I1      | El o los servicios del Prestador están interrumpidos                                                                   |
| Impacto I2      | El o los servicios del Prestador están degradados                                                                      |
| Impacto I3      | El o los servicios del Prestador están actualmente estables, pero muestran signos de potencial declive a largo plazo  |

- Los niveles de Criticidad se definen de la siguiente manera:

| Nivel de criticidad | Descripción                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticidad C1       | El o los servicios del Prestador se degradan a una velocidad preocupante                               |
| Criticidad C2       | El o los servicios del Prestador se deterioran progresivamente con el tiempo                           |
| Criticidad C3       | El o los servicios del Prestador presentan uno o varios inconvenientes sin consecuencia significativa   |

- Basándose en un análisis exhaustivo de la situación, teniendo en cuenta los elementos que determinan el Impacto y la Criticidad, se asigna una prioridad al ticket de acuerdo con la siguiente matriz de decisión:

| Nivel de Impacto <br/> \ Nivel de Criticidad | Impacto I1       | Impacto I2       | Impacto I3       |
| -------------------------------------------- | ---------------  | ---------------  | ---------------  |
| Criticidad C1                                | Prioridad **P1** | Prioridad **P2** | Prioridad **P3** |
| Criticidad C2                                | Prioridad **P2** | Prioridad **P3** | Prioridad **P4** |
| Criticidad C3                                | Prioridad **P3** | Prioridad **P4** | Prioridad **P5** |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el siguiente capítulo.

### 7.6.5. Idioma y localización del servicio de soporte

El soporte es proporcionado por el Prestador al COMITENTE al menos en idioma francés. El soporte también puede ser proporcionado en inglés.

Las operaciones del servicio de soporte del Prestador para la oferta de servicio de infraestructura calificada SecNumCloud están ubicadas en la Unión Europea.

# 8. Compromisos y niveles de servicios

El Prestador se compromete a garantizar una supervisión continua del rendimiento y la integridad de seguridad de su infraestructura técnica que proporciona el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, sujeta a un indicador de rendimiento, se reconoce en cuanto es identificada por el sistema de supervisión del Prestador, o tras una notificación por parte de un usuario del COMITENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, para garantizar un cálculo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente por la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Prestador, o por un retorno del usuario, asegurando así una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura

El Prestador se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican siempre que el COMITENTE implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la Región en cuestión.

En ausencia de cumplimiento de estas condiciones por parte del COMITENTE,
este no podrá reclamar la aplicación de
los SLAs correspondientes, los cuales están específicamente identificados con un asterisco (\*). El acceso a los SLAs se realiza a través de la interfaz del COMITENTE. Las medidas se entienden calculadas mensualmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilidad de la capacidad de cálculo (Compute): tasa de disponibilidad garantizada de 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilidad del almacenamiento: tasa de disponibilidad garantizada de 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 3 : IC-INFRA_SNC-03** – Confiabilidad de la copia de seguridad: tasa de disponibilidad garantizada de 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada de 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 5 : IC-INFRA_SNC-05** – Acceso a Internet: tasa de disponibilidad garantizada de 99,99%, calculada sobre una base 24h/24, 7d/7.

***Comentarios***:

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Prestador se reserva el derecho de ajustar su configuración de enrutamiento de internet para
limitar el impacto de este ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al COMITENTE es el objetivo, el Prestador puede recurrir a la técnica de blackholing
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP objetivo en upstream con sus proveedores, con el fin de proteger los recursos del COMITENTE así como los de otros COMITENTES
y de la infraestructura del Prestador. El Prestador recomienda encarecidamente al COMITENTE adoptar medidas similares, tales como el uso de software de firewall
de aplicaciones web disponibles en el mercado, y configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*
- *El Prestador insiste en la necesidad de que el MANDANTE minimice las aperturas de flujo, evitando en particular hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde toda Internet (subred 0.0.0.0/0), así como los protocolos internos tales como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz del MANDANTE

- SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada de 97%, asegurada de manera continua, 24 horas al día y 7 días a la semana.
- SLA 7: IC-INFRA_SNC-07 -- Acceso a las APIs de gestión del Servicio: una disponibilidad de 99.9%, calculada sobre una base de 24h/24, 7d/7.

## 8.3. Compromiso de disponibilidad del soporte

- **SLA 8      : IC-INFRA_SNC-08** – A continuación, los compromisos de rendimiento del soporte técnico del Prestador para los incidentes, excluyendo mantenimientos programados:

| Prioridad        | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| --------------- | ---------------------------------------- | ----------------------- |
| Prioridad **P1** | 30min                                   | 95%                     |
| Prioridad **P2** | 2h                                      | 90%                     |
| Prioridad **P3** | 4h                                      | 90%                     |
| Prioridad **P4** | 24h                                     | 85%                     |
| Prioridad **P5** | 48h                                     | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – A continuación, los compromisos de rendimiento del soporte técnico del Prestador para las solicitudes de servicio:

|                     | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| ------------------- | ---------------------------------------- | ----------------------- |
| Solicitud de servicio | 4h                                    | 90%                     |

*Nota:*

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el MANDANTE abre el ticket y la primera intervención por parte del soporte del Prestador.*
- *La investigación de incidentes relacionados con los MANDANTES no incluirá intervención remota en los servidores alojados del MANDANTE. Esta asistencia se limitará a la explicación de las métricas disponibles relacionadas con el entorno del MANDANTE, con el fin de facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Sobre la base de los resultados de este análisis, se podrán sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento de objetos S3

- **SLA 10      : IC-INFRA_SNC-10** – A continuación, los compromisos de disponibilidad para el almacenamiento de objetos S3:

| Indicador         | Compromiso                                         | Objetivo de disponibilidad |
| ----------------- | -------------------------------------------------- | ------------------------- |
| IC-INFRA-SNC-10.1 | Durabilidad del almacenamiento de un objeto en una región | 99.9999999% / año       |
| IC-INFRA-SNC-10.2 | Disponibilidad de la API de Almacenamiento de Objetos S3 | 99.99%                   |
| IC-INFRA-SNC-10.3 | Latencia máxima de acceso a un objeto en una región | 150 ms                   |

Notas:

- El Servicio de Almacenamiento de Objetos está específicamente diseñado para el almacenamiento de objetos y debe ser utilizado solo para este propósito, **excluyendo categóricamente su uso en modo bloque**. Usar el modo bloque a través de métodos indirectos, incluyendo por ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una infracción a los términos de uso establecidos. Ningún incidente, mal funcionamiento o daño derivado de este uso no conforme será cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en este convenio de servicios.
- La garantía de durabilidad está condicionada a un uso de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de los datos, ya sea intencional o accidental, resultante de acciones emprendidas por el MANDANTE.

## 8.5. Precisión respecto al compromiso de respaldo

La estrategia de respaldo implementada para el MANDANTE, está condicionada por la suscripción a las unidades de obra adecuadas.

El Prestador se compromete a poner a disposición una solución de respaldo que permitirá al MANDANTE aplicar las políticas de respaldos deseadas.

Se precisa que el alcance del Prestador se detiene en la puesta a disposición de un servicio de respaldo y es responsabilidad del MANDANTE supervisar a través de la interfaz del MANDANTE la correcta ejecución de las políticas asociadas.

Se precisa que la gestión de capacidades de almacenamiento del espacio de almacenamiento dedicado a los respaldos, sigue a cargo y bajo la responsabilidad del MANDANTE. El Prestador pone a disposición el índice de uso a través de la consola.

*Ejemplo: No respaldo de una máquina virtual:*

*El MANDANTE es responsable de verificar / supervisar la correcta ejecución de las políticas de respaldos, en el caso de que el MANDANTE constate que una máquina virtual no está respaldada, le corresponde verificar la causa, el MANDANTE podrá solicitar el Soporte del Prestador según el nivel de soporte suscrito para ser asistido.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9**, será aplicable exclusivamente en el caso de un Incidente del servicio de respaldo. 

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Prestador

El Prestador se compromete a:

- informar a su MANDANTE de manera adecuada (por ejemplo, en caso de límite de capacidad de recursos técnicos que prestan el Servicio).

- informar formalmente al MANDANTE y dentro de un plazo de un mes, de cualquier cambio jurídico, organizacional o técnico que pueda tener un impacto en la conformidad del Servicio con los requisitos de protección contra las leyes extraeuropeas (19.6 del referencial SNC v3.2).

- proporcionar al MANDANTE interfaces e interfaces de servicio que estén en idioma francés como mínimo.

- estudiar y tener en cuenta los requisitos sectoriales específicos relacionados con los tipos de información confiada por el MANDANTE en el marco de la implementación del servicio y dentro del límite de las responsabilidades del Prestador.

- no divulgar ninguna información relativa a la prestación a terceros, salvo autorización formal y escrita del MANDANTE.

- poner a disposición toda la información necesaria para la realización de auditorías de conformidad, de acuerdo con las disposiciones del artículo 28 del RGPD.

- rendir cuentas ante el MANDANTE, a través de este Convenio de servicio, de cualquier Incidente de seguridad que afecte el Servicio o el uso que el MANDANTE haga del Servicio (incluidas las datos del MANDANTE).

- autorizar a un prestador de auditoría de seguridad de sistemas de información (PASSI) calificado, mandatado por el Prestador, a auditar el servicio y su sistema de información, de acuerdo con el plan de control del SecNumCloud del Prestador. Además, el Prestador se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, llevadas a cabo por el mandante o un tercero mandatado.

- proporcionar, en calidad de sub-contratista, de acuerdo con el artículo 28 del Reglamento general sobre la protección de datos (RGPD), asistencia y asesoramiento al MANDANTE alertándolo tan pronto como una instrucción emitida por este último sea susceptible de constituir una violación de las normas de protección de datos.

- notificar por escrito, cuando un proyecto impacte o sea susceptible de impactar el nivel de seguridad del Servicio, los impactos potenciales al MANDANTE, las medidas de mitigación implementadas, así como los riesgos residuales que le conciernen.

- documentar e implementar todas las procedimientos necesarias para cumplir con los requisitos legales, reglamentarios y contractuales aplicables al servicio, así como con las necesidades de seguridad específicas del MANDANTE, definidos por este último y previstos en el Contrato. A solicitud del MANDANTE, el módulo de Documentación de la interfaz del MANDANTE permitirá un intercambio seguro de estos documentos.

- proporcionar, a solicitud del MANDANTE, los elementos de apreciación de riesgos relativos a la sumisión de datos del MANDANTE a la ley de un estado no miembro de la Unión Europea.

Ante una solicitud formal y escrita del MANDANTE, el Prestador se compromete a:

1. Hacer accesible al MANDANTE el reglamento interno y la carta de ética del Prestador;

2. Hacer accesible al MANDANTE las sanciones aplicables en caso de infracción a la política de seguridad;

3. Proporcionar al MANDANTE todos los eventos que le conciernen dentro de los elementos de registro del Servicio;

4. Al final del Contrato, el Prestador se compromete a eliminar los datos y Datos técnicos relativos al MANDANTE, conforme al “procedimiento de borrado de datos al final del Contrato” descrito en este Convenio de servicio.

5. asegurar un borrado seguro de la totalidad de los datos del MANDANTE mediante reescritura completa de todo soporte que haya alojado sus datos en el marco del Servicio.

6. proporcionar la lista completa de los terceros autorizados a acceder a las infraestructuras que albergan los datos.
Le Proveedor mantendrá actualizada y pondrá a disposición del CONTRATANTE la lista exhaustiva de los terceros autorizados para acceder a las infraestructuras que contienen los datos, informando a este último de cualquier cambio relacionado con los subcontratistas. El Proveedor y el conjunto de sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber, la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho, así como el respeto a los Derechos Humanos. El servicio proporcionado por el Proveedor es conforme a la legislación vigente en materia de derechos fundamentales y a los valores de la Unión Europea relativos al respeto de la dignidad humana, a la libertad, a la igualdad, a la democracia y al Estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor

En virtud de todas las definiciones y condiciones mencionadas en este Acuerdo de Servicio, las responsabilidades del Proveedor están limitadas de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección « Modelo de responsabilidades compartidas » de este Acuerdo de Servicio, limita de hecho la implicación del Proveedor en las capas de funcionamiento que van "por encima" de la puesta a disposición de recursos de cálculo, red, almacenamiento y respaldo. Esto excluye en particular sin limitarse a:

    - La gestión de lo que está instalado en las máquinas virtuales (SO, middleware, aplicaciones, etc.);

    - El mantenimiento y actualización de los SO y otros software instalados por el CONTRATANTE en sus máquinas en sus Tenants;

    - La seguridad de los programas, software y aplicaciones instalados en las máquinas virtuales;

    - La actualización de las máquinas virtuales;
  
    - El respaldo de datos a nivel de aplicación.

2. El Proveedor no puede asumir compromisos de respaldo de los Tenants del CONTRATANTE sin que el CONTRATANTE haya previamente suscrito a las unidades de obra adecuadas.

3. El Proveedor no puede atribuirse la propiedad de los datos transmitidos y generados por el CONTRATANTE. En efecto, estos pertenecen al CONTRATANTE.

4. El Proveedor señala que no puede en ningún caso explotar los datos transmitidos y generados por el CONTRATANTE sin la validación previa de este último.

5. El Proveedor se exime de toda responsabilidad sobre los componentes físicamente alojados y gestionados por el Proveedor, pero que son propiedad directa del CONTRATANTE o de un tercero con el cual el CONTRATANTE ha contratado. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y está, de hecho, fuera del ámbito de este Acuerdo de Servicio. Corresponde al CONTRATANTE evaluar el nivel de adherencia o dependencia que introducen estos componentes en relación con el Servicio IaaS calificado SecNumCloud.

## 9.3. Limitación de acceso

En el marco del Servicio, el Proveedor tiene estrictamente prohibido acceder a los Tenants pertenecientes al CONTRATANTE sin autorización previa. Es responsabilidad del CONTRATANTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción fue elegida por el CONTRATANTE.

El CONTRATANTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de los servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por terceros implicados en la prestación del servicio del Proveedor está estrictamente prohibido. En el caso de que una exigencia técnica específica requiera tal acceso, este solo podría establecerse después de haber notificado claramente al CONTRATANTE, proporcionado una justificación detallada y obtenido su acuerdo por escrito.

Esta medida garantiza el control y la seguridad de los datos del CONTRATANTE, asegurando que cualquier excepción a la regla esté debidamente autorizada y documentada.

## 9.4. Responsabilidades de los terceros que participan en la prestación del servicio Secure Temple

El Proveedor controla la lista de socios terceros que participan en la prestación del Servicio. Estos terceros son los editores, proveedores (del Proveedor) y otros suministradores que participan en la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

- El Proveedor exige a los terceros que participan en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio Secure Temple;

- El Proveedor formaliza, con cada uno de los terceros que participan en la implementación del servicio, cláusulas de auditoría que permiten a un organismo de cualificación verificar que estos terceros cumplen con los requisitos legales y los requisitos SNC, permitiendo al Proveedor cumplir con sus compromisos en este Acuerdo de Servicio.

- El Proveedor implementa un procedimiento para controlar regularmente las medidas adoptadas por los terceros que participan en la implementación del servicio para cumplir con los requisitos que permitan al Proveedor cumplir con sus compromisos en este Acuerdo de Servicio.

- El Proveedor implementa un procedimiento de seguimiento de los cambios realizados por los terceros que participan en la implementación del servicio que puedan afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del CONTRATANTE

Como recordatorio, el Proveedor proporciona al CONTRATANTE una plataforma de ejecución de máquinas virtuales, la configuración de estas corre a cargo del CONTRATANTE. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Proveedor define a través de sus interfaces políticas de respaldo automáticas. Pero es responsabilidad del CONTRATANTE activar estas políticas de respaldo y, por lo tanto, activar las máquinas virtuales.

El CONTRATANTE autoriza a la ANSSI y al organismo de cualificación SNC a auditar el Servicio y la infraestructura técnica que presta el Servicio.

## 9.6. Derechos del CONTRATANTE

En cualquier momento durante la relación contractual, el CONTRATANTE puede presentar una reclamación relativa al servicio calificado ante la ANSSI.

En cualquier momento, el CONTRATANTE puede solicitar al Proveedor que le haga accesible su reglamento interior y su carta de ética.

## 9.7. Eliminación de datos al final del Contrato

Al final del contrato, ya sea que llegue a término o sea rescindido por cualquier razón, el Proveedor se compromete a proceder con la eliminación segura de la totalidad de los datos del CONTRATANTE, incluidos los datos técnicos. El Proveedor se asegurará de comunicar al CONTRATANTE un aviso formal, respetando un plazo de veintiún (21) días naturales. Los datos del CONTRATANTE serán entonces eliminados en un máximo de treinta (30) días tras esta notificación.

Para confirmar esta eliminación, el Proveedor entregará al CONTRATANTE un certificado que confirme la eliminación de los datos.

# 10. Ciclo de vida del presente Acuerdo de Servicio

## 10.1. Entrada en efecto del Acuerdo de Servicio

El presente Acuerdo de Servicio entra en efecto el día de su firma por el CONTRATANTE.

La recopilación, manipulación, almacenamiento y tratamiento de los datos realizados en el marco de la preventa, implementación y cesación del Servicio se llevan a cabo respetando la legislación vigente.

## 10.2. Evoluciones del Acuerdo de Servicio

Las modificaciones o adiciones realizadas al presente Acuerdo de Servicio provienen exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados para tal efecto. Estas propuestas de cambio serán examinadas por las Partes, habilitadas para determinar los aspectos que requieren una formalización escrita.

Se acuerda que cualquier evolución del Acuerdo de Servicio, una vez validada, que altere las condiciones financieras inicialmente establecidas, requerirá el establecimiento y la firma de un anexo al Contrato en curso.

Los factores que pueden inducir una revisión de este Acuerdo de Servicio incluyen, sin limitarse a:

- La evolución de la infraestructura técnica que presta el Servicio IaaS;
- Los ajustes realizados en los servicios desplegados por el Proveedor para proporcionar el Servicio;
- Las variaciones de los compromisos adquiridos y de las sanciones aplicables;
- Las reconfiguraciones organizativas dentro del CONTRATANTE o del Proveedor;
- La expansión o reducción del alcance del Servicio.

La gestión de las versiones y revisiones del Acuerdo de Servicio se consigna en el preámbulo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el CONTRATANTE

Las evoluciones del Acuerdo de Servicio pueden tener, entre otros, su origen en:

- Una evolución de la infraestructura gestionada por el Proveedor;

- Una modificación de los servicios implementados por el Proveedor;

- Una modificación de los compromisos de niveles de servicio por el Proveedor.

### 10.2.2. Evoluciones desencadenadas por el Proveedor

Cualquier modificación del Acuerdo de Servicio está sujeta a la aceptación del CONTRATANTE. Se entiende que cualquier modificación o complemento validado que altere los elementos financieros del Contrato, podrá implicar la firma de un anexo al mismo.

## 10.3. Reversibilidad

Además, Cloud Temple se compromete a permitir una revisión del presente Acuerdo de Servicio (previniendo especialmente su rescisión) sin penalización para el CONTRATANTE en caso de pérdida de la cualificación SecNumCloud.
Les Services no comprenden una obligación de reversibilidad (es decir, la ayuda al Cliente para que pueda migrar su sistema a otro Proveedor), excepto la puesta a disposición del COMITENTE por parte del Proveedor de la interfaz COMITENTE que permite al COMITENTE salvaguardar y recuperar sus datos, incluyendo especialmente los datos de configuración de su sistema de información mediante una de las siguientes modalidades técnicas a elección del COMITENTE: la puesta a disposición de archivos en uno o varios formatos documentados y utilizables fuera del servicio proporcionado por el Proveedor, o a través de la implementación de interfaces técnicas que permitan el acceso a los datos según un esquema documentado y explotable (API).

El COMITENTE, único responsable de su sistema, debe hacer todo lo posible para facilitar esta operación según sea necesario (lo que implica, en particular, que establezca una documentación rigurosa a ese efecto) y la elaboración de planes de reversibilidad. En el caso de que el COMITENTE necesite una prestación complementaria, el Proveedor puede ofrecer una misión de consultoría a tal respecto en el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes e interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de este Acuerdo de servicio

- Siniestros

- Avarias y fallos

- Incidentes de seguridad:

- Impactando la disponibilidad del servicio

- Impactando la confidencialidad del servicio

- Impactando la integridad del servicio

#### 11.1.1.2. Tratamiento de los incidentes

- Plazos

- Acciones a posteriori

- Archivar los documentos que detallan los incidentes de seguridad.

- Notificación de violación de datos de carácter personal [en línea](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad

El COMITENTE tiene la responsabilidad de elegir los niveles de gravedad de los Incidentes de seguridad sobre los cuales desea ser informado, por ejemplo, mediante su formalización en un PAS aplicable al Servicio.

Por defecto, el COMITENTE es informado:

- De los incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de tratamientos del presente Acuerdo de servicio);

- De las violaciones de datos de carácter personal por las cuales el COMITENTE es responsable del tratamiento;

- De las violaciones de datos de carácter personal por las cuales el Proveedor es responsable del tratamiento y que contienen datos personales del COMITENTE.

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

El mantenimiento asegurado consiste en la implementación de:

- El plan de mantenimiento en condiciones operativas del Servicio para garantizar buenos indicadores de disponibilidad, como se compromete el Proveedor más arriba;

- El plan de PCA/PRA si es suscrito por el COMITENTE activado según los posibles incidentes que podrían ocurrir.

### 11.2.2. Accesos remotos de Cloud Temple en el perímetro del COMITENTE

El Proveedor se prohíbe, en el marco del presente Acuerdo de servicio, cualquier acceso a los Tenants y al espacio de la interfaz del COMITENTE.

Será responsabilidad del COMITENTE otorgar los accesos necesarios al personal del Proveedor. El COMITENTE reconoce que los accesos se utilizarán en el marco del alojamiento y, en última instancia, de la gestión externalizada (si es suscrito por el COMITENTE).

### 11.2.3. Accesos remotos de terceros participantes en la prestación del servicio en el perímetro del COMITENTE

No se permite ningún acceso remoto de terceros participantes en la prestación del Servicio.

Si una necesidad técnica hiciera necesario este escenario, entonces dicho tipo de acceso solo se realizaría tras la notificación al COMITENTE, justificación y obtención de su acuerdo por escrito.

# 12. Procedimiento de borrado de datos al final del Contrato

Al final del Contrato, ya sea que el Contrato haya llegado a su término o por cualquier otra causa, el Proveedor asegurará el borrado seguro de la totalidad de los datos tratados en el marco del Servicio, incluyendo los Datos técnicos del COMITENTE. El Proveedor dará un aviso formal respetando un período de veintiún (21) días calendario. Los datos del COMITENTE serán eliminados en un plazo máximo de treinta (30) días después de la notificación. El Proveedor proporcionará un certificado de eliminación de datos al COMITENTE.

# 13. Derecho aplicable

## 13.1. De manera general

El derecho aplicable y al que está sujeto el presente Acuerdo de servicio es el derecho francés.

## 13.2. Cumplimiento de la ley y regulaciones aplicables

El Proveedor se compromete a los siguientes puntos:

- La identificación de las restricciones legales y regulatorias aplicables en el marco del Servicio;

- El cumplimiento de las restricciones legales y regulatorias aplicables a los datos confiados al Proveedor;

- El respeto de la Ley de informática y libertades y del RGPD;

- La implementación de medios de protección de datos personales;

- La implementación de un proceso de seguimiento legal y regulatorio;

- Disponer y mantener relaciones apropiadas o un seguimiento con las autoridades sectoriales relacionadas con la naturaleza de los datos tratados en el marco del Servicio. Esto incluye, en particular, la ANSSI, el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando como subcontratista en el sentido del artículo 28 del Reglamento General de Protección de Datos (RGPD), el Proveedor se compromete a:

- Asegurar la transparencia y la trazabilidad;

- Designar un DPD encargado de definir e implementar medidas de protección de datos de carácter personal;

- Brindar asistencia y asesoramiento al COMITENTE alertándolo si una instrucción de este último constituye una violación de las normas de protección de datos personales, si el Proveedor tiene los medios para identificarlo;

- Una garantía de seguridad sobre los datos tratados (debido a la cualificación SecNumCloud).

## 13.4. Protección respecto a la ley extraeuropea

En caso de que el Proveedor, en el marco del Servicio, recurra a los servicios de una empresa tercera, incluyendo un subcontratista, que tenga su sede estatutaria, administración central o principal establecimiento en un Estado no miembro de la Unión Europea o que pertenezca o sea controlada por una empresa tercera domiciliada fuera de la Unión Europea, el Proveedor se compromete a que dicha empresa tercera no tendrá acceso a los datos operados por el servicio 'Secure Temple'.

Como recordatorio, los datos mencionados son aquellos confiados al Proveedor por el COMITENTE, así como todos los Datos técnicos que incluyen información sobre los COMITENTES.

Para las necesidades del presente artículo, la noción de control se entiende como la mencionada en el II del artículo L233-3 del código de comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Para Cloud Temple, el PROVEEDOR

Para \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMITENTE