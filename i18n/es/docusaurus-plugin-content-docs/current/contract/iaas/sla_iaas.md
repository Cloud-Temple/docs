---
title: Convención de Servicio IaaS
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **CONVENCIÓN DE SERVICIOS IaaS**

| **Destinatarios :**                  | **COMITENTE**                                   |
| :----------------------------------- | :---------------------------------------------- |
| **Referencia del documento**         | CT.AM.JUR.ANX_Convention de Services_IaaS_v2.0  |
| **Sus interlocutores**               | *Nombre* *Apellido*                             |
|                                      | Account Manager                                 |
|                                      | e-mail : *nombre.apellido*@cloud-temple.com     |
| **Fecha de última actualización**    | 03/04/2024                                      |
| **Fecha de validación contractual**  | Día DD AAAA                                     |


----------------------------------------------------------------------------------

| **Versión** | **Fecha**  | **Acción**                              | **Autor**       |
| ----------- | ---------- | --------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Redacción inicial                       | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Integración Indicadores                 | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modificación pie de página              | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modificación Capital y Enriquecimiento  | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enriquecimiento                         | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enriquecimiento                         | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Ajustes conformidad SNC                 | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publicación                             | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **TABLA DE CONTENIDOS**


- [1. **CONVENCIÓN DE SERVICIOS IaaS**](#1-convención-de-servicios-iaas)
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
    - [7.2.1. Infraestructuras Datacenters](#721-infraestructuras-datacenters)
    - [7.2.2. Infraestructura software de gestión del Servicio](#722-infraestructura-software-de-gestión-del-servicio)
    - [7.2.3. Infraestructuras de cómputo](#723-infraestructuras-de-cómputo)
    - [7.2.4. Infraestructura de almacenamiento](#724-infraestructura-de-almacenamiento)
    - [7.2.5. Infraestructura de red global](#725-infraestructura-de-red-global)
    - [7.2.6. Infraestructura de respaldo](#726-infraestructura-de-respaldo)
    - [7.2.7. Implementación de soluciones de recuperación o continuidad de actividad](#727-implementación-de-soluciones-de-recuperación-o-continuidad-de-actividad)
  - [7.3. Limitaciones de los servicios en el modelo IaaS cualificado](#73-limitaciones-de-los-servicios-en-el-modelo-iaas-cualificado)
    - [7.3.1. Servicios gestionados en RUN](#731-servicios-gestionados-en-run)
    - [7.3.2. Configuración del respaldo](#732-configuración-del-respaldo)
    - [7.3.3. Configuración del respaldo](#733-configuración-del-respaldo)
  - [7.4. Implementación del servicio](#74-implementación-del-servicio)
    - [7.4.1. Requisitos técnicos](#741-requisitos-técnicos)
  - [7.5. Localización del servicio en Francia](#75-localización-del-servicio-en-francia)
    - [7.5.1. Localización de los Datacenters que alojan el Servicio](#751-localización-de-los-datacenters-que-alojan-el-servicio)
    - [7.5.2. Localización de las agencias Cloud Temple que operan el servicio](#752-localización-de-las-agencias-cloud-temple-que-operan-el-servicio)
  - [7.6. Soporte](#76-soporte)
    - [7.6.1. Naturaleza del soporte que acompaña el servicio](#761-naturaleza-del-soporte-que-acompaña-el-servicio)
    - [7.6.2. Solicitud del servicio de soporte técnico](#762-solicitud-del-servicio-de-soporte-técnico)
    - [7.6.3. Proceso de gestión de Incidentes](#763-proceso-de-gestión-de-incidentes)
    - [7.6.4. Proceso de priorización de tratamientos](#764-proceso-de-priorización-de-tratamientos)
    - [7.6.5. Idioma y localización del servicio de soporte](#765-idioma-y-localización-del-servicio-de-soporte)
- [8. Compromisos y niveles de servicios](#8-compromisos-y-niveles-de-servicios)
  - [8.1. Compromisos de disponibilidad de la infraestructura](#81-compromisos-de-disponibilidad-de-la-infraestructura)
  - [8.2. Compromiso de disponibilidad de la interfaz COMITENTE](#82-compromiso-de-disponibilidad-de-la-interfaz-comitente)
  - [8.3. Compromiso de disponibilidad del soporte](#83-compromiso-de-disponibilidad-del-soporte)
  - [8.4. Compromiso de disponibilidad del almacenamiento de objetos S3](#84-compromiso-de-disponibilidad-del-almacenamiento-de-objetos-s3)
  - [8.5. Precisión sobre el compromiso de respaldo](#85-precisión-sobre-el-compromiso-de-respaldo)
- [9. Organización de la relación contractual](#9-organización-de-la-relación-contractual)
  - [9.1. Responsabilidades del Proveedor](#91-responsabilidades-del-proveedor)
  - [9.2. Limitación de las responsabilidades del Proveedor](#92-limitación-de-las-responsabilidades-del-proveedor)
  - [9.3. Limitación de acceso](#93-limitación-de-acceso)
  - [9.4. Responsabilidades de terceros que participan en la prestación del servicio Secure Temple](#94-responsabilidades-de-terceros-que-participan-en-la-prestación-del-servicio-secure-temple)
  - [9.5. Responsabilidades y obligaciones del COMITENTE](#95-responsabilidades-y-obligaciones-del-comitente)
  - [9.6. Derechos del COMITENTE](#96-derechos-del-comitente)
  - [9.7. Eliminación de datos al final del Contrato](#97-eliminación-de-datos-al-final-del-contrato)
- [10. Ciclo de vida de la presente Convención de servicio](#10-ciclo-de-vida-de-la-presente-convención-de-servicio)
  - [10.1. Entrada en vigencia de la Convención de servicio](#101-entrada-en-vigencia-de-la-convención-de-servicio)
  - [10.2. Evoluciones de la Convención de servicio](#102-evoluciones-de-la-convención-de-servicio)
    - [10.2.1. Evoluciones desencadenadas por el COMITENTE](#1021-evoluciones-desencadenadas-por-el-comitente)
    - [10.2.2. Evoluciones desencadenadas por el Proveedor](#1022-evoluciones-desencadenadas-por-el-proveedor)
  - [10.3. Reversibilidad](#103-reversibilidad)
- [11. Disponibilidad, continuidad y restauración del servicio](#11-disponibilidad-continuidad-y-restauración-del-servicio)
  - [11.1. Gestión de Incidentes y interrupciones](#111-gestión-de-incidentes-y-interrupciones)
    - [11.1.1. Incidentes](#1111-incidentes)
      - [11.1.1.1. Tipos de Incidentes tratados en el marco de esta Convención de servicio](#11111-tipos-de-incidentes-tratados-en-el-marco-de-esta-convención-de-servicio)
      - [11.1.1.2. Tratamiento de los incidentes](#11112-tratamiento-de-los-incidentes)
      - [11.1.1.3. Nivel de notificación de los Incidentes de seguridad](#11113-nivel-de-notificación-de-los-incidentes-de-seguridad)
  - [11.2. Mantenimiento del Servicio](#112-mantenimiento-del-servicio)
    - [11.2.1. Naturaleza del mantenimiento](#1121-naturaleza-del-mantenimiento)
    - [11.2.2. Accesos remotos de Cloud Temple en el perímetro del COMITENTE](#1122-accesos-remotos-de-cloud-temple-en-el-perímetro-del-comitente)
    - [11.2.3. Accesos remotos de terceros que participan en la prestación del servicio en el perímetro del COMITENTE](#1123-accesos-remotos-de-terceros-que-participan-en-la-prestación-del-servicio-en-el-perímetro-del-comitente)
- [12. Procedimiento de eliminación de datos al final del Contrato](#12-procedimiento-de-eliminación-de-datos-al-final-del-contrato)
- [13. Derecho aplicable](#13-derecho-aplicable)
  - [13.1. De manera general](#131-de-manera-general)
  - [13.2. Cumplimiento de la ley y las normativas aplicables](#132-cumplimiento-de-la-ley-y-las-normativas-aplicables)
  - [13.3. GDPR](#133-gdpr)
  - [13.4. Protección respecto al derecho extracomunitario](#134-protección-respecto-al-derecho-extracomunitario)
- [14. FIRMAS](#14-firmas)


----------------------------------------------------------------------------------


# 3. Preliminar y Glosario

## 3.1. Preliminar

El presente documento formaliza la Convención de servicio asociada al servicio IaaS calificada SecNumCloud bajo la denominación de « *Secure Temple *».

\"La presente convención de servicio complementa y es complementaria a las condiciones generales de venta y uso del Proveedor. Se entiende que los documentos contractuales se interpretarán de manera coherente entre sí. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Convención de Servicio SecNumCloud IaaS
3. Convención de Servicio SecNumCloud PaaS
4. Convenio específico particular
5. Plan de Aseguramiento de Seguridad (PAS)
6. Condiciones Particulares de Uso (CPU)

## 3.2. Glosario

En la presente Convención de servicio, el **COMITENTE**, el **Proveedor** y las **Partes** están identificados en el Contrato al cual es anexo la presente Convención de servicio.

Las expresiones que se utilizan a continuación en la presente Convención de servicio se interpretarán conforme a las definiciones que se les atribuyen a continuación:


-   **Cambio:** Cualquier adición, modificación o eliminación que impacte el Servicio, habiendo sido autorizado, planificado o gestionado.

-   **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de implementación y los impactos (incluidos los financieros) son conocidos y aceptados de antemano por las Partes. Se integra en el catálogo de cambios estándar y, según el caso, puede tener un GTI y un GTR.

-   **Contrato:** designa el contrato suscrito por el COMITENTE con el Proveedor para permitir al COMITENTE beneficiarse del Servicio, y al cual se anexa el presente Acuerdo de servicio.

-   ***Acuerdo de servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y en conformidad con los requisitos del Referencial SecNumCloud.

-   **Solicitud de servicio:** solicitud del COMITENTE hacia el Proveedor en el marco del Servicio, que cubre las operaciones no realizables por el COMITENTE desde la interfaz COMITENTE y las solicitudes de soporte en el marco del Servicio. Las solicitudes de servicio están limitadas a aquellas previstas en el Contrato o en el presente Acuerdo de servicio.

-   **Disponibilidad:** Capacidad para asegurar la disponibilidad y mantenimiento del desempeño óptimo del Servicio, en acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

-   **Datos técnicos:** incluye todos los datos manipulados para proporcionar el Servicio, notablemente la identidad de los beneficiarios y administradores de la infraestructura técnica, registros de la infraestructura técnica, configuración de accesos, directorio, certificados...

-   **Evento:** Un "evento" es toda ocurrencia detectable o identificable que pueda ser importante para la gestión del Servicio.

-   **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales sobre una lámina de cálculo.

-   **Incidente:** Todo evento no planificado que interrumpe el funcionamiento normal del Servicio o compromete la seguridad de los datos.

-   **Incidente de seguridad:** Todo evento en el ámbito del Servicio:

    -   De naturaleza intencionalmente maliciosa;
    -   De naturaleza accidental que comprometa la integridad, confidencialidad o trazabilidad del Servicio o los datos del COMITENTE;
    -   Que comprometa las medidas de seguridad existentes.
    Las interrupciones de Disponibilidad que no sean maliciosas no se consideran un Incidente de seguridad (fallo de hardware, bug, mal funcionamiento, desastre natural...).

-   **Interfaz COMITENTE:** Interfaz de administración del Servicio puesta a disposición del COMITENTE por el Proveedor, que agrupa una consola de administración web y una API.

-   **Puesta en producción:** acción(es) de administración para realizar el Cambio cuando este es aprobado (el cambio, en el sentido ITIL, solo concierne a la gestión del cambio y no su realización/concreción).

-   **Problema:** causa de uno o más Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo).

-   **Región:** designa un conjunto geográficamente delimitado de zonas de disponibilidad cloud, que proporciona servicios de red, computación y almacenamiento para optimizar la latencia, el desempeño y la conformidad regulatoria local.

-   **Servicio:** designa el servicio IaaS calificado SecNumCloud «Secure Temple», proporcionado al COMITENTE por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, tal como se describe en la sección «Descripción del Servicio» del presente Acuerdo de servicio.

-   **Secure Temple:** designa el servicio IaaS calificado SecNumCloud, ofrecido por la empresa Cloud Temple, tal como se define en la certificación consultable en el sitio de la ANSSI y proporcionada en el anexo del presente Acuerdo de servicio.

-   **Desastre:** designa un evento grave de origen natural o humano, accidental o intencional, que cause pérdidas y daños importantes a la Parte afectada.

-   **Supervisión:** Vigilancia de un Sistema de Información o un Servicio, que implica la recolección de varios datos como mediciones y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente en los elementos supervisados, prerrogativa que pertenece a las operaciones de Administración.

-   **Tenant:** Una instancia aislada reservada para un usuario o grupo de usuarios, compartiendo una infraestructura común mientras se mantiene la independencia y seguridad de los datos y aplicaciones.

-   **Zona de Disponibilidad (AZ) (Availibility zone):** Una sección específica y aislada de la infraestructura de cloud computing, diseñada para asegurar la alta disponibilidad y resiliencia de los servicios mediante una distribución geográfica de los recursos.

# 4. Acrónimos

  | **Acrónimo** | **Definición**                                                                          |
  | ------------ | :-------------------------------------------------------------------------------------- |
  | **CAB**      | Change Advisory Board -- Comité consultivo sobre los cambios                            |
  | **CMDB**     | Configuration Management Database -- Base de datos de gestión de configuraciones        |
  | **COPIL**    | Comité de pilotaje                                                                      |
  | **COSTRAT**  | Comité estratégico                                                                      |
  | **COPROJ**   | Comité Proyecto                                                                         |
  | **DB**       | Database (base de datos)                                                                |
  | **DRP**      | Disaster Recovery Plan (PRA) (Plan de recuperación ante desastres)                      |
  | **GTE**      | Garantía de Tiempo de Escalada                                                          |
  | **GTI**      | Garantía de Tiempo de Intervención                                                      |
  | **GTR**      | Garantía de Tiempo de Resolución                                                        |
  | **ITIL**     | Information Technology Infrastructure Library - Buenas prácticas para la gestión de TI  |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Mantenimiento en condiciones operativas                                                 |
  | **MOA**      | Maestría de Obra                                                                        |
  | **MOE**      | Dirección de Obra                                                                       |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Plan de Aseguramiento de Calidad                                                        |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Plan de Aseguramiento de Seguridad                                                      |
  | **PASSI**    | Proveedor de Auditoría de Seguridad de Sistemas de Información                          |
  | **RFC**      | Request For Change -- Solicitud de cambio                                               |
  | **RGPD**     | Reglamento General de Protección de Datos (personales)                                  |
  | **RPO**      | Recovery Point Objective -- Frescura de los datos restaurados en caso de Desastre       |
  | **RTO**      | Recovery Time Objective -- Tiempo de recuperación del servicio en caso de Desastre      |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Acuerdo de nivel de servicio                                 |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Mantenimiento de Aplicaciones por Terceros                                              |
  | **UO**       | Unidad de Obra                                                                          |
  | **VABE**     | Validación de Aptitud para Buena Explotabilidad                                         |
  | **VABF**     | Validación de Aptitud para Buen Funcionamiento                                          |
  | **VM**       | Virtual Machine (Máquina virtual)                                                       |
  | **VSR**      | Validación de Servicio Regular                                                          |


# 5. Objeto del presente Acuerdo de servicio

El presente Acuerdo de servicio establece los términos y condiciones según los cuales el Proveedor se compromete a proporcionar el Servicio al COMITENTE. Su objeto es:

-   Precisar los requisitos de desempeño esperados por el COMITENTE en términos de funcionalidad y fiabilidad del Servicio;

-   Enumerar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

-   Identificar las normas regulatorias aplicables específicamente al Servicio proporcionado;

-   Asegurar una uniformidad e integridad en la evaluación de la calidad del Servicio;

-   Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de desempeño cuantitativos.

Se estipula que, en el supuesto de que al Proveedor se le retire su calificación SecNumCloud, el Contrato podrá ser rescindido de
pleno derecho, sin incurrir en penalidades, por el PATROCINADOR. En tal eventualidad, el Proveedor de Servicios se compromete a informar al PATROCINADOR
de esta descalificación mediante el envío de una notificación oficial, a través de una carta certificada con acuse de recibo.

Es importante señalar que una modificación o ajuste de la calificación SecNumCloud no se considerará como una revocación de
la calificación inicial.

# 6. Auditoría

El Proveedor de Servicios se compromete a permitir al PATROCINADOR, o a cualquier auditor tercero y no competidor del Proveedor de Servicios que éste haya designado, consultar todos los documentos necesarios para acreditar el cumplimiento total de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización
de auditorías.

Al aceptar este Acuerdo de Servicio, el PATROCINADOR otorga su autorización explícita a:

1.  La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) y la entidad de calificación competente para llevar a cabo la verificación de la conformidad del Servicio y su sistema de información con el marco de referencia SecNumCloud.
2.  Un proveedor de auditoría de seguridad de los sistemas de información, debidamente cualificado PASSI y expresamente designado por el Proveedor de Servicios, para realizar auditorías de seguridad del Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio ofrecido por el Proveedor de Servicios se caracteriza por la provisión de las siguientes prestaciones, que se alinean con el
principio de responsabilidad compartida presentado en el marco de referencia SecNumCloud:

-   La provisión de recursos de cómputo (compute);

-   La disponibilidad de espacios de almacenamiento;

-   El acceso a servicios de conectividad de red e internet;

-   La oferta de un servicio de respaldo dedicado a las máquinas virtuales.

El modelo de responsabilidades compartido aplicado entre el Proveedor de Servicios y el PATROCINADOR en el contexto del Servicio se presenta en §7.1.

Se entiende que el Proveedor de Servicios movilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales y
de acuerdo con los requisitos del marco de referencia SecNumCloud.

El Servicio está calificado SecNumCloud (ver atestación en el Anexo).

## 7.2. Presentación detallada del alcance del Servicio

| Compute               | Recurso de cómputo del Tenant PATROCINADOR                                                                         |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------- |
| Storage               | Datos de producción del Tenant PATROCINADOR                                                                       |
| Almacenamiento de objetos S3 | Provisión de una infraestructura de almacenamiento de objetos soberana multi-AZ y compatible con las API S3 estándar. |
| Respaldo              | Condicional a la suscripción al almacenamiento masivo adecuado                                                  |
| Infraestructura de red | Recurso de red del Tenant PATROCINADOR                                                                            |
| Consola PATROCINADOR  | El servicio que permite al PATROCINADOR acceder a su servicio IaaS y administrarlo a través de la interfaz Shiva   |
| Soporte               | El servicio de soporte que acompaña a los servicios anteriores y únicamente a estos (*)                            |

_(*) Dentro del alcance del Servicio calificado SNC y de las responsabilidades del Proveedor de Servicios al respecto_

### 7.2.1. Infraestructuras de Datacenters

El Servicio incluye la disposición, para cada Zona de Disponibilidad, de las prestaciones calificadas a continuación:

-   Sitio datacenter ubicado en Francia para la Región FR, conforme a las últimas normas tecnológicas, con un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
-   Disponibilidad de salas técnicas dentro de datacenters dedicados a recibir los equipos técnicos necesarios para la producción del servicio, incluyendo cómputo, almacenamiento, red, cableado y otros componentes necesarios;
-   Alimentación eléctrica segura, asegurada por dos circuitos eléctricos distintos, garantizando la continuidad del servicio;
-   Provisión de servicios de climatización, ajustados para cumplir con las normas y recomendaciones de los fabricantes de equipos, para mantener un ambiente óptimo para los dispositivos técnicos;
-   Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva del rendimiento y la seguridad del servicio proporcionado.

El Proveedor de Servicios asegura la disponibilidad de servicios avanzados de detección y extinción de incendios, diseñados para identificar y
neutralizar eficazmente cualquier inicio de fuego en las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos
y los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente
sin dañar el equipo informático. Este servicio es crucial para prevenir los riesgos de incendio, minimizar los posibles daños y
asegurar la continuidad de las operaciones.

El PATROCINADOR está informado de que todos los procedimientos y medidas de seguridad implementados, incluyendo las pruebas anuales de cambio a
los grupos electrógenos, son esenciales para garantizar la continuidad y la integridad de los servicios proporcionados. Estas prácticas están diseñadas para
minimizar los riesgos de fallos y asegurar una capacidad de reacción óptima en caso de incidente. Al aceptar estas condiciones, el cliente reconoce
la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. El PATROCINADOR también es alentado a
familiarizarse con las recomendaciones de seguridad proporcionadas e integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de gestión del Servicio

El Proveedor de Servicios proporciona al PATROCINADOR la consola de administración y la API necesarias para el uso del Servicio. Se compromete también a mantener esta consola de administración y la API en condiciones operativas óptimas y garantizar su seguridad de manera continua.
Esta consola de administración y la API se denominan de manera conjunta como "interfaz PATROCINADOR".

El Proveedor de Servicios alerta al PATROCINADOR sobre el hecho de que un uso anormal de la interfaz PATROCINADOR, particularmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o al Servicio. Es importante destacar que esta situación no constituye una indisponibilidad del Servicio, sino una acción de protección del Servicio y de la infraestructura del Proveedor de Servicios; por lo tanto, el PATROCINADOR no podrá considerarlo como una indisponibilidad en sus cálculos.

Además, el Proveedor de Servicios especifica al PATROCINADOR que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el PATROCINADOR envía solicitudes idénticas a una frecuencia mayor, su rechazo no podrá interpretarse como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cómputo

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el PATROCINADOR, de los equipos necesarios para
la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

- La provisión de los chasis técnicos necesarios para el correcto funcionamiento de las blades de cómputo;
- La provisión de blades de cómputo en las cantidades especificadas por el PATROCINADOR y distribuidas según las zonas de disponibilidad de su elección. Cabe destacar que estas blades de cómputo están exclusivamente dedicadas al PATROCINADOR;
- La disponibilidad de sistemas operativos tipo hipervisor, así como la garantía del mantenimiento en condiciones operativas y de seguridad de la infraestructura de software necesaria para la gestión de estos sistemas operativos. Es importante resaltar que, a pesar de que el Proveedor de Servicios es responsable del mantenimiento operativo y la seguridad global del Servicio, no tiene conocimientos específicos sobre los entornos de producción del PATROCINADOR ni de los requisitos relacionados con sus cargas de trabajo. Por lo tanto, la responsabilidad de decidir la actualización de los sistemas operativos de las blades de cómputo hipervisor, una acción que podría requerir un reinicio, recae completamente en el PATROCINADOR. Esta operación puede realizarse a través de la Interfaz PATROCINADOR.

La elección del modelo de blade de cómputo, seleccionado del catálogo ofrecido por el Proveedor de Servicios, es responsabilidad del
PATROCINADOR.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al PATROCINADOR de una infraestructura de almacenamiento compartido tipo SAN (Storage Area Network), ofreciendo diversos
niveles de rendimiento. Este servicio incluye:

- La implementación y el mantenimiento en condiciones operativas y de seguridad de la red SAN dedicada;
- La instalación y gestión de subsistemas de almacenamiento compartidos entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, su supervisión y metrología;
- La implementación de sistemas automatizados para la asignación de LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del PATROCINADOR, según los volúmenes suscritos por el PATROCINADOR.

### 7.2.5. Infraestructura de red global

El Proveedor de Servicios despliega, en el contexto del Servicio, una red global que facilita al PATROCINADOR la accesibilidad a sus sistemas
alojados. Este servicio incluye:
-   El suministro, el mantenimiento en condiciones operacionales y de seguridad de todos los enlaces de fibra óptica
    que interconectan las diferentes Zonas de disponibilidad;

-   El suministro, el mantenimiento en condiciones operacionales y de seguridad de los equipos técnicos necesarios para el buen
    funcionamiento de la red y el aislamiento de los diferentes clientes.

La interconexión de red del Tenant COMMITENTE, a Internet o a redes privadas, y los equipos de red, enlaces de operadores y otros
componentes técnicos que realizan esta interconexión, no forman parte del alcance del Servicio. Esta interconexión de red se implementa
de acuerdo con las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo

El Prestador pone a disposición del COMMITENTE un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus
máquinas virtuales. El Prestador asegura el mantenimiento en condiciones operacionales y de seguridad de este servicio de respaldo.
El Prestador garantiza que los respaldos del COMMITENTE estarán ubicados fuera de la Zona de disponibilidad de las cargas de trabajo
respaldadas, siempre que el COMMITENTE haya suscrito a las Unidades de obra adecuadas.

Este servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS
de los Tenants del COMMITENTE en el marco del Servicio. La elaboración y aplicación de una política de respaldo adecuada por el
COMMITENTE dependen de la suscripción a unidades de obra específicas. Por lo tanto, corresponde al COMMITENTE asegurarse de la
disponibilidad de los recursos técnicos necesarios ante el Prestador para implementar su política de respaldo o
ajustar esta última en función de los medios disponibles.

El Prestador se compromete a notificar al COMMITENTE en caso de restricciones de capacidad y a proporcionar asistencia y asesoramiento para
la optimización de los recursos. Las obligaciones del Prestador se limitarán a la implementación de las necesidades expresadas por el COMMITENTE
en materia de política de respaldo, dentro del marco de los recursos suscritos.

### 7.2.7. Implementación de soluciones de recuperación ante desastres o continuidad de la actividad

El Prestador proporciona al COMMITENTE todas las soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos a través de diversas Zonas de disponibilidad. Corresponde al COMMITENTE la responsabilidad de gestionar eficazmente esta distribución de recursos, para lo cual tiene la posibilidad de utilizar las herramientas del Prestador disponibles para este uso.

## 7.3. Limitaciones de los servicios en el modelo IaaS calificado

### 7.3.1. Servicios gestionados en RUN

Es importante notar que están excluidos del Servicio:

-   El alojamiento de componentes físicos del COMMITENTE;

-   La interconexión de red del Tenant COMMITENTE, a Internet o a redes privadas, incluyendo los enlaces de operador;

-   Cualquier servicio de tipo gestionado, o TMA;

-   Cualquier asistencia en las máquinas virtuales a nivel de sistema operativo y superiores en la pila de responsabilidades IaaS, incluso si se trata de simple supervisión.

Dicho esto, no está en absoluto excluido que el COMMITENTE recurra a dichos servicios a través de la oferta MSP del Prestador para intervenir en modo servicios gestionados en sus Tenants. Estos servicios no estarán, por lo tanto, enmarcados por el presente Acuerdo de servicio y sus compromisos/cláusulas bipartitas.

### 7.3.2. Configuración de la recuperación

Por defecto, el Prestador proporciona la implementación de los recursos IaaS al COMMITENTE reservando recursos y configurando las implementaciones para utilizar las Zonas de disponibilidad. Corresponde al COMMITENTE elegir las Zonas de disponibilidad a través de la interfaz COMMITENTE.

### 7.3.3. Configuración del respaldo

El servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología que representan el entorno IaaS de los Tenants del COMMITENTE en el marco del Servicio.

El servicio de respaldo y la implementación de la política de respaldo del COMMITENTE están sujetas a la suscripción de espacio de almacenamiento en el almacenamiento masivo necesario para garantizar el servicio. Por lo tanto, es responsabilidad del COMMITENTE suscribirse ante el Prestador los medios técnicos necesarios para asegurar la política de respaldo en su perímetro informático, o ajustar la política de respaldo a los medios implementados. El Prestador se compromete a informar al COMMITENTE en caso de limitación de capacidad técnica.

El Prestador implementará los medios técnicos y humanos necesarios para el respaldo del sistema alojado dentro del límite de los recursos suscritos por el COMMITENTE.

Además, en el caso de los perímetros no cubiertos por el Prestador, corresponde al COMMITENTE definir su propia estrategia de respaldo y configurar él mismo los respaldos de las máquinas virtuales, o realizar una Solicitud de servicio al Prestador para que se configure el respaldo para los servidores físicos, si el COMMITENTE dispone de un contrato de servicio gestionado que permita al Prestador actuar a través de la interfaz COMMITENTE, que es la consola de administración que se pone a disposición en el marco del presente Acuerdo de servicio y que dispone de funcionalidades para configurar los respaldos.

Además, este servicio solo tendrá como compromiso traducir mediante la configuración a través de la interfaz COMMITENTE, la configuración especificada claramente por el COMMITENTE.

Por razones de flexibilidad de la oferta del Prestador, el COMMITENTE tiene la opción de asociar una política de no-respaldo en algunas de sus máquinas virtuales. En este caso, corresponde al COMMITENTE asumir esta elección. El Prestador no respaldará las máquinas virtuales asociadas a la política "sin respaldo". El Prestador alerta al COMMITENTE que elegir la política "sin respaldo" o elegir respaldar manualmente expone al COMMITENTE a una pérdida de datos definitiva en caso de Incidente en las capas bajas o en las capas bajo su responsabilidad en el modelo IaaS. En tal caso, será imposible responsabilizar al Prestador de restaurar los datos porque no habrá nada que restaurar. El Prestador recomienda siempre respaldar las máquinas virtuales.

Para cualquier asunto relacionado con el sistema operativo instalado en una máquina virtual y cualquier software o programa ejecutado "por encima del sistema operativo", es responsabilidad del COMMITENTE realizar las operaciones de administración y supervisión dentro de la Unión Europea si desea garantizar que toda la verticalidad de las capas del SI sean operadas y gestionadas desde la Unión Europea. Las operaciones de administración fuera del perímetro de responsabilidad del Prestador en el marco del presente Acuerdo de servicio se indican en la sección "Modelo de responsabilidades compartidas" del presente Acuerdo de servicio.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el COMMITENTE reconoce que deberá:

-   Funcionar con una virtualización de tipo VMware en las versiones soportadas por el editor y proporcionadas por el Prestador en el marco del Servicio;

-   Recurrir a través del Prestador a la utilización de la herramienta de respaldo;

-   Declarar las IP fijas desde las cuales el Prestador le autorizará acceder a la interfaz COMMITENTE (Filtrado por lista blanca). Las modificaciones de esta lista de IP deberán realizarse a través de Solicitudes de servicio (lista no administrable desde la interfaz de administración del Servicio).

## 7.5. Localización del servicio en Francia

Se precisa que ninguna de las operaciones y ninguno de los componentes físicos involucrados en la prestación del Servicio, objeto del presente Acuerdo de servicio, está situado fuera de la Unión Europea.

Esto incluye, en particular, el soporte, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que presta el Servicio. De hecho, todo el almacenamiento, todas las tareas de administración, supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los Datacenters que alojan el Servicio

Con excepción de las operaciones de los colaboradores y las agencias del Prestador, todas las operaciones de producción (incluyendo el almacenamiento y tratamiento de datos) y componentes técnicos que prestan el Servicio están ubicados en los Datacenters basados en Francia.

### 7.5.2. Localización de las oficinas de Cloud Temple operando el servicio

Los colaboradores de Cloud Temple que operan dentro del perímetro del Servicio trabajan desde las oficinas de Cloud Temple todas situadas únicamente en Francia. Estas oficinas están ubicadas en Francia, en Tours, Lyon, Caen y Paris La Défense.

El COMMITENTE está informado de la posibilidad de que los empleados de Cloud Temple trabajen a distancia. No obstante, el Prestador garantiza el mismo nivel de seguridad respecto a los accesos a distancia, particularmente en lo que concierne a los accesos VPN. Estos accesos remotos se implementan de acuerdo con los requisitos del marco SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte que acompaña al servicio

El Prestador proporciona un servicio de soporte técnico destinado a asistir al COMMITENTE en la gestión, solución de problemas y optimización de
sus recursos desplegados. Este servicio cubre una amplia gama de actividades, desde la ayuda con la configuración inicial de los servicios
hasta el apoyo técnico avanzado para resolver problemas específicos.

A continuación se describe las características y funcionalidades del servicio de soporte:

-   Asistencia en la implementación inicial del uso del Servicio;
-   Asistencia en la resolución de incidentes;
-   Asistencia en la resolución de problemas;
-   Seguimiento y asesoramiento sobre la optimización de la base técnica.
Dans el marco del servicio de soporte, el Proveedor no sustituye al CLIENTE en el uso del Servicio. El CLIENTE sigue siendo completamente responsable de la configuración, operación de sus VM y de sus Tenants, y de la gestión de todos los elementos (datos y aplicaciones incluidos) que haya almacenado o instalado en las infraestructuras del Proveedor. El servicio de soporte técnico se proporciona de acuerdo con los Términos y Condiciones Generales de Venta y Uso, siendo el Proveedor responsable de una obligación de medios.

El CLIENTE se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose en particular de solicitar servicios no suscritos con el Proveedor y de hacer intervenir a los equipos del Proveedor con sus propios clientes o con terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso de soporte está condicionado a la suscripción de las unidades de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico es accesible a través de un sistema de tickets mediante la consola del CLIENTE y está disponible durante las horas normales de oficina, excepto festivos (8h - 18h; Lunes -- Viernes; calendario y horarios franceses). Para emergencias fuera del horario laboral, en particular incidentes que afecten significativamente la producción, se puede contactar al servicio de guardia a través de un número comunicado al CLIENTE al inicio del Servicio.

Para cada solicitud o Incidente, es imprescindible generar un ticket con el soporte del Proveedor. La creación de este ticket, que incluye toda la información necesaria, es esencial y marca el comienzo de la evaluación de los compromisos del Proveedor.

Tan pronto como el Proveedor recibe una solicitud o una notificación de Incidente, ya sea a través de la consola de gestión o tras una llamada telefónica, se crea automáticamente un ticket. Al declarar un Incidente, es esencial que el CLIENTE proporcione al proveedor el máximo de detalles sobre el problema encontrado. Este paso es crucial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico efectivo.

El Cliente recibe entonces una confirmación por correo electrónico, indicando la creación del ticket y su número único. El CLIENTE puede consultar el estado e historial de sus solicitudes y declaraciones de Incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de Incidentes

Al declarar un Incidente, el equipo de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El Cliente debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando las pruebas requeridas. El Proveedor puede acceder al Servicio del Cliente para diagnosticar el Incidente.

Si los Servicios del Proveedor se consideran funcionales y el Incidente no es imputable a él, el Cliente será informado. A solicitud del Cliente, el Proveedor puede proponer Servicios Profesionales para identificar el origen del problema, facturables previa acuerdo en tramos de 30 minutos.

En caso de que el Incidente sea responsabilidad del Proveedor o de uno de sus subcontratistas, este completa el diagnóstico y se dedica a restaurar el Servicio sin costos adicionales. El diagnóstico se basa en los intercambios entre las Partes y los datos del Proveedor, estos elementos se consideran como pruebas por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de los tratamientos

La determinación del nivel de prioridad de un caso se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de criticidad:

-   Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impacto I1       | Servicios del Proveedor interrumpidos                                                                                 |
| Impacto I2       | Servicios del Proveedor degradados                                                                                    |
| Impacto I3       | Servicios del Proveedor actualmente estables pero muestran signos de potencial declive a largo plazo                  |

-   Los niveles de criticidad se definen de la siguiente manera:

| Nivel de criticidad | Descripción                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticidad C1       | Servicios del Proveedor se degradan a una velocidad preocupante                                         |
| Criticidad C2       | Servicios del Proveedor se deterioran progresivamente con el tiempo                                     |
| Criticidad C3       | Servicios del Proveedor presentan uno o varios inconvenientes sin consecuencias significativas          |

-   Sobre la base de un análisis exhaustivo de la situación, teniendo en cuenta los elementos que determinan el Impacto y la Criticidad, se asigna una prioridad al ticket de acuerdo con la siguiente matriz de decisión:

| Nivel de impacto <br/> \ Nivel de criticidad | Impacto I1       | Impacto I2       | Impacto I3       |
| -------------------------------------------- | --------------- | --------------- | ---------------  |
| Criticidad C1                                 | Prioridad **P1** | Prioridad **P2** | Prioridad **P3** |
| Criticidad C2                                 | Prioridad **P2** | Prioridad **P3** | Prioridad **P4** |
| Criticidad C3                                 | Prioridad **P3** | Prioridad **P4** | Prioridad **P5** |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### 7.6.5. Idioma y localización del servicio de soporte

El soporte es proporcionado por el Proveedor al CLIENTE al menos en idioma francés. El soporte también puede ser proporcionado en inglés.

Las operaciones del servicio de soporte del Proveedor para la oferta de servicio de infraestructura calificada SecNumCloud están ubicadas en la Unión Europea.

# 8. Compromisos y niveles de servicios

El Proveedor se compromete a garantizar una vigilancia continua del rendimiento y la integridad de seguridad de su infraestructura técnica que entrega el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, sujeto a un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Proveedor, o tras una notificación por un usuario del CLIENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, para garantizar un conteo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente por la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor o por una devolución del usuario, asegurando así una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura

El Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican bajo la condición de que el CLIENTE implemente sus sistemas a través de al menos dos Zonas de disponibilidad presentes en la Región en cuestión.

En ausencia de cumplimiento de estas condiciones por parte del CLIENTE,
este no podrá reclamar la aplicación de los
SLAs correspondientes, los cuales están específicamente identificados por un
asterisco (\*). La accesibilidad a los SLAs se realiza a través de la interfaz
del CLIENTE. Las medidas se entienden calculadas mensualmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilidad de la potencia de cálculo (Compute): tasa de disponibilidad garantizada del 99,99%, calculada sobre una base de 24h/24, 7d/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilidad del almacenamiento: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base de 24h/24, 7d/7.
- **SLA 3     : IC-INFRA_SNC-03** – Confiabilidad de la copia de seguridad: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base de 24h/24, 7d/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base de 24h/24, 7d/7.
- **SLA 5     : IC-INFRA_SNC-05** – Acceso a Internet: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base de 24h/24, 7d/7.

_**Notas**_ : 

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento en Internet para 
limitar el impacto de dicho ataque y proteger su infraestructura. En particular, si se dirige una dirección IP perteneciente al CLIENTE, el Proveedor puede recurrir a la técnica de blackholing 
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP atacada en su origen ante sus proveedores, con el fin de proteger los recursos del CLIENTE así como los de otros CLIENTEs 
y la infraestructura del Proveedor. El Proveedor insta enfáticamente al CLIENTE a adoptar medidas similares, tales como el uso de software de firewall 
de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*
- *El Proveedor insiste en la necesidad para el MANDANTE de minimizar las aperturas de flujo, evitando especialmente hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde todo Internet (subred 0.0.0.0/0), así como los protocolos internos tales como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz del MANDANTE

-   SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada de 97%, asegurada en continuo, 24 horas al día y 7 días a la semana.
-   SLA 7: IC-INFRA_SNC-07 -- Acceso a las APIs de gestión del Servicio: una disponibilidad de 99.9%, calculada sobre una base 24h/24, 7d/7.

## 8.3. Compromiso de disponibilidad del soporte

- **SLA 8      : IC-INFRA_SNC-08** – Estos son los compromisos de rendimiento del soporte técnico del Proveedor para incidentes, excluyendo mantenimientos programados:

| Prioridad        | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| --------------- | ----------------------------------------- | ----------------------- |
| Prioridad **P1** | 30min                                     | 95%                     |
| Prioridad **P2** | 2h                                        | 90%                     |
| Prioridad **P3** | 4h                                        | 90%                     |
| Prioridad **P4** | 24h                                       | 85%                     |
| Prioridad **P5** | 48h                                       | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – Estos son los compromisos de rendimiento del soporte técnico del Proveedor para solicitudes de servicio:

|                     | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| ------------------- | ----------------------------------------- | ----------------------- |
| Solicitud de servicio | 4h                                      | 90%                     |

*Observación:*

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el MANDANTE abre el ticket y la primera intervención del soporte del Proveedor.*
- *La investigación de incidentes relacionados con los MANDANTES no incluirá intervención remota en los servidores alojados del MANDANTE. Esta asistencia se limitará a la explicación de las métricas disponibles relativas al entorno del MANDANTE, con el fin de facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Basado en los resultados de este análisis, se podrán sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento de objetos S3

- **SLA 10      : IC-INFRA_SNC-10** – Estos son los compromisos de disponibilidad para el almacenamiento de objetos S3:

| Indicador         | Compromiso                                          | Objetivo de disponibilidad |
| ----------------- | --------------------------------------------------- | ------------------------- |
| IC-INFRA-SNC-10.1 | Durabilidad del almacenamiento de un objeto en una región   | 99.9999999% / año        |
| IC-INFRA-SNC-10.2 | Disponibilidad de la API Almacenamiento de Objetos S3        | 99.99%                    |
| IC-INFRA-SNC-10.3 | Latencia máxima de acceso a un objeto en una región          | 150 ms                    |

Observaciones:

- El Servicio de Almacenamiento de Objetos está específicamente diseñado para el almacenamiento de objetos y debe emplearse únicamente con este fin, **excluyendo categóricamente su uso en modo bloque**. Utilizar el modo bloque mediante métodos indirectos, incluyendo por ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una infracción a los términos de uso establecidos. Ningún incidente, disfunción o daño resultante de este uso no conforme será cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en este convenio de servicios.
- La garantía de durabilidad está condicionada a un uso de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de los datos, ya sea intencional o accidental, resultante de acciones emprendidas por el MANDANTE.

## 8.5. Precisión sobre el compromiso de respaldo

La estrategia de respaldo desplegada para el MANDANTE, está condicionada por la suscripción a las unidades de obra adecuadas.

El Proveedor se compromete a la puesta a disposición de una solución de respaldo que permitirá al MANDANTE aplicar las políticas de respaldos deseadas.

Se precisa que el perímetro del Proveedor se detiene en la puesta a disposición de un servicio de respaldo y es el MANDANTE quien debe supervisar a través de la interfaz del MANDANTE la correcta ejecución de las políticas asociadas.

Se precisa que la gestión de capacidades de almacenamiento del espacio de almacenamiento dedicado a los respaldos, sigue siendo responsabilidad del MANDANTE. El Proveedor pone a disposición la tasa de uso a través de la consola.

*Ejemplo: No respaldo de una máquina virtual:*

*El MANDANTE tiene la responsabilidad de verificar / supervisar la correcta ejecución de las políticas de respaldos, en caso de que el MANDANTE constate que una máquina virtual no está respaldada, deberá verificar la causa, el MANDANTE podrá solicitar el Soporte del Prestador según el nivel de soporte suscrito para ser asistido.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9**, será exclusivamente aplicable en caso de un incidente del servicio de respaldo.

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Proveedor

El Proveedor se compromete a:

- informar adecuadamente a su MANDANTE (por ejemplo, en caso de límite de capacidad de recursos técnicos que entregan el Servicio).

- informar formalmente al MANDANTE y dentro de un plazo de un mes, de cualquier​ cambio jurídico, organizacional o técnico que pueda tener un impacto sobre la conformidad del Servicio con los requisitos de protección contra las leyes extra-europeas (19.6 del referencial SNC v3.2).

- proporcionar al MANDANTE interfaces y servicios que estén al menos en idioma francés.

- estudiar y tener en cuenta los requisitos sectoriales específicos relacionados con los tipos de información entregada por el MANDANTE en el marco de la implementación del servicio y dentro de los límites de responsabilidad del Proveedor.

- no divulgar ninguna información relativa a la prestación a terceros, salvo autorización formal y escrita del MANDANTE.

- poner a disposición todas las informaciones necesarias para la realización de auditorías de conformidad de acuerdo con las disposiciones del artículo 28 del RGPD.

- rendir cuentas ante el MANDANTE, mediante el presente Convenio de servicio, de cualquier Incidente de seguridad que impacte el Servicio o el uso que el MANDANTE haga del Servicio (incluyendo los datos del MANDANTE).

- autorizar a un proveedor de auditoría de la seguridad de la información (PASSI) cualificado, designado por el Proveedor, a auditar el servicio y su sistema de información, de acuerdo con el plan de control del SecNumCloud del Proveedor. Además, el Proveedor se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, realizadas por el mandante o un tercero designado.

- proporcionar, en calidad de encargado del tratamiento, en conformidad con el artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y asesoramiento al MANDANTE alertándolo tan pronto como una instrucción emitida por este último pueda constituir una violación de las reglas de protección de datos.

- notificar por escrito, cuando un proyecto impacte o sea susceptible de impactar el nivel de seguridad del Servicio, al MANDANTE de los potenciales impactos, las medidas de mitigación implementadas, así como de los riesgos residuales que le conciernen.

- documentar e implementar todos los procedimientos necesarios para cumplir con los requisitos legales, reglamentarios y contractuales aplicables al servicio, así como con las necesidades de seguridad específicas del MANDANTE, definidas por este último y previstas en el Contrato. A solicitud del MANDANTE, el módulo de Documentación de la interfaz del MANDANTE permitirá un intercambio seguro de estos documentos.

- proporcionar, a solicitud del MANDANTE, los elementos de apreciación de los riesgos relativos a la sumisión de los datos del MANDANTE a la ley de un estado no miembro de la Unión Europea.

A solicitud del MANDANTE formal y escrita, el Proveedor se compromete a:

1. Hacer accesible al MANDANTE el reglamento interno y el código de ética del Proveedor;

2. Hacer accesible al MANDANTE las sanciones aplicables en caso de infracción a la política de seguridad;

3. Proporcionar al MANDANTE todos los eventos que le conciernen en los registros del Servicio;

4. Al término del Contrato, el Proveedor se compromete a eliminar los datos y Datos técnicos relativos al MANDANTE, conforme a la «procedimiento de borrado de datos al final del Contrato» descrita en el presente Convenio de servicio.

5. asegurar un borrado seguro de la totalidad de los datos del MANDANTE mediante la reescritura completa de cualquier soporte que haya alojado sus datos en el marco del Servicio.

6. proporcionar la lista completa de terceros autorizados a acceder a las infraestructuras que contienen los datos.
Le Prestataire mantendrá actualizado y pondrá a disposición del CLIENTE la lista exhaustiva de los terceros autorizados a acceder a las infraestructuras que contienen los datos, informando a este último de cualquier cambio relativo a los subcontratistas. El Prestataire y el conjunto de sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber, la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho, así como el respeto a los Derechos Humanos. El servicio proporcionado por el Prestataire es conforme a la legislación vigente en materia de derechos fundamentales y a los valores de la Unión Europea relacionados con el respeto a la dignidad humana, la libertad, la igualdad, la democracia y el estado de derecho.

## 9.2. Limitación de responsabilidades del Prestataire

Debido a todas las definiciones y condiciones mencionadas en este Acuerdo de Servicio, las responsabilidades del Prestataire están limitadas de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección « Modèle de responsabilités partagées » de este Acuerdo de Servicio, limita de hecho la implicación del Prestataire en las capas de funcionamiento que están "por encima" de la puesta a disposición de recursos de cálculo, de red, de almacenamiento y de respaldo. Esto excluye en particular sin limitarse a:

    -   La gestión de lo que está instalado en las máquinas virtuales (OS, middleware, aplicaciones, etc.);

    -   El mantenimiento de los OS y otros softwares instalados por el CLIENTE en sus máquinas en sus Tenants;

    -   La seguridad de los programas, softwares y aplicaciones instaladas en las máquinas virtuales;

    -   La actualización de las máquinas virtuales;
  
    -   El respaldo de los datos a nivel aplicativo.

2.  El Prestataire no puede comprometerse a hacer respaldos de los Tenants del CLIENTE sin que el CLIENTE haya suscrito previamente a las unidades de obra adecuadas.

3.  El Prestataire no puede hacer valer la propiedad de los datos transmitidos y generados por el CLIENTE. De hecho, estos son propiedad del CLIENTE.

4.  El Prestataire subraya que no puede en ningún caso explotar los datos transmitidos y generados por el CLIENTE sin la validación previa de este último.
   
5.  El Prestataire se exime de toda responsabilidad sobre los componentes alojados físicamente y gestionados por el Prestataire, pero que son propiedad directa del CLIENTE o de un tercero con el cual el CLIENTE ha contratado. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y está, de hecho, fuera del alcance de este Acuerdo de Servicio. Es responsabilidad del CLIENTE evaluar el nivel de adherencia o dependencia que estos componentes introducen con respecto al Servicio IaaS calificado SecNumCloud.

## 9.3. Limitación de acceso

En el marco del Servicio, el Prestataire tiene estrictamente prohibido acceder a los Tenants pertenecientes al CLIENTE sin autorización previa. Es responsabilidad del CLIENTE proporcionar los accesos necesarios al personal del Prestataire, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el CLIENTE.

El CLIENTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de los servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por terceros implicados en la prestación del servicio del Prestataire está estrictamente prohibido. En caso de que un requisito técnico específico requiriera dicho acceso, este solo podría ser establecido después de haber notificado claramente al CLIENTE, proporcionado una justificación detallada y obtenido su acuerdo por escrito.

Esta medida garantiza el control y la seguridad de los datos del CLIENTE, asegurándose de que cualquier excepción a la norma esté debidamente autorizada y documentada.

## 9.4. Responsabilidades de terceros participando en la provisión del servicio Secure Temple

El Prestataire controla la lista de terceros socios participando en la provisión del Servicio. Estos terceros son los editores, prestadores (del Prestataire) y otros proveedores participando en la provisión del Servicio. El Prestataire aplica las siguientes medidas a estos terceros:

-   El Prestataire exige a los terceros participando en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio Secure Temple;

-   El Prestataire contrata, con cada uno de los terceros participando en la implementación del servicio, cláusulas de auditoría que permiten a una entidad de calificación verificar que estos terceros respetan los requisitos legales y los requisitos de SNC, permitiendo al Prestataire cumplir con sus compromisos en este Acuerdo de Servicio.

-   El Prestataire implementa un procedimiento que permite controlar regularmente las medidas puestas en marcha por los terceros participando en la implementación del servicio para cumplir con los requisitos del Prestataire de respetar sus compromisos en este Acuerdo de Servicio.

-   El Prestataire implementa un procedimiento de seguimiento de los cambios realizados por los terceros participando en la implementación del servicio que podrían afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del CLIENTE

Como recordatorio, el Prestataire proporciona al CLIENTE una plataforma de ejecución de máquinas virtuales, la configuración de estas es responsabilidad del CLIENTE. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Prestataire define a través de sus interfaces políticas de respaldo automáticas. Pero es responsabilidad del CLIENTE activar estas políticas de respaldo y, por lo tanto, activar las máquinas virtuales.

El CLIENTE autoriza a la ANSSI y a la entidad de calificación SNC a auditar el Servicio y la infraestructura técnica que proporciona el Servicio.

## 9.6. Derechos del CLIENTE

En cualquier momento durante la relación contractual, el CLIENTE puede presentar una reclamación relativa al servicio calificado ante la ANSSI.

En cualquier momento, el CLIENTE puede solicitar al Prestataire que le haga disponible su reglamento interno y su carta de ética.

## 9.7. Borrado de datos al finalizar el Contrato

Al finalizar el contrato, ya sea que expire o que sea rescindido por cualquier motivo, el Prestataire se compromete a proceder con el borrado seguro de la totalidad de los datos del CLIENTE, incluidos los datos técnicos. El Prestataire se asegurará de comunicar al CLIENTE una notificación formal, respetando un plazo de veintiún (21) días naturales. Los datos del CLIENTE serán entonces eliminados en un plazo máximo de treinta (30) días siguientes a esta notificación.

Para atestiguar esta eliminación, el Prestataire entregará al CLIENTE un certificado que confirme el borrado de los datos.

# 10. Ciclo de vida de este Acuerdo de Servicio

## 10.1. Entrada en vigor del Acuerdo de Servicio

Este Acuerdo de Servicio entra en vigor el día de su firma por el CLIENTE.

La recolección, la manipulación, el almacenamiento y el tratamiento de los datos hechos en el marco de la preventa, la implementación, la detención del Servicio, se hacen respetando la legislación vigente.

## 10.2. Evoluciones del Acuerdo de Servicio

Las modificaciones o adiciones realizadas a este Acuerdo de Servicio provienen exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados a tal efecto. Estas propuestas de cambio serán examinadas por las Partes, habilitadas para determinar los aspectos que requieran una formalización por escrito.

Se acuerda que cualquier evolución del Acuerdo de Servicio, después de la validación, que altere las condiciones financieras inicialmente establecidas, requerirá el establecimiento y la firma de una enmienda al Contrato en curso.

Los factores que pueden dar lugar a una revisión de este Acuerdo de Servicio incluyen, sin limitarse a:

-   La evolución de la infraestructura técnica que proporciona el Servicio IaaS;
-   Los ajustes realizados en los servicios desplegados por el Prestataire para proporcionar el Servicio;
-   Las variaciones en los compromisos adquiridos y las sanciones aplicables;
-   Las reconfiguraciones organizacionales dentro del CLIENTE o del Prestataire;
-   La ampliación o reducción del alcance del Servicio.

La gestión de las versiones y revisiones del Acuerdo de Servicio se consigna en el preámbulo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el CLIENTE

Las evoluciones del Acuerdo de Servicio pueden tener, en particular, su origen en:

-   Una evolución de la infraestructura gestionada por el Prestataire;

-   Una modificación de los servicios implementados por el Prestataire;

-   Una modificación de los compromisos de niveles de servicio por el Prestataire.

### 10.2.2. Evoluciones desencadenadas por el Prestataire

Cualquier modificación del Acuerdo de Servicio está sujeta a la aceptación del CLIENTE. Se entiende que cualquier modificación o complemento validado que modifique los elementos financieros del Contrato podrá implicar la firma de una enmienda al mismo.

## 10.3. Reversibilidad

Además, Cloud Temple se compromete a permitir una revisión de este Acuerdo de Servicio (previniendo en particular su rescisión) sin penalidad para el CLIENTE en caso de pérdida de la calificación SecNumCloud.
Los Servicios no comprenden la obligación de reversibilidad (es decir, la ayuda al Cliente para que pueda migrar su sistema a otro Proveedor) con la excepción de la puesta a disposición del COMITENTE por el Proveedor de la interfaz COMITENTE que permite al COMITENTE respaldar y recuperar sus datos, incluyendo en particular los datos de configuración de su sistema de información a través de una de las modalidades técnicas siguientes a elección del COMITENTE: la puesta a disposición de archivos según uno o varios formatos documentados y explotables fuera del servicio proporcionado por el Proveedor o bien mediante la puesta en marcha de interfaces técnicas que permitan el acceso a los datos según un esquema documentado y explotable (API).

El COMITENTE, único responsable de su sistema, debe hacer todo lo posible para facilitar esta operación según sea necesario (lo que implica, en particular, que ponga en marcha una documentación rigurosa al respecto) y la elaboración de planes de reversibilidad. En caso de que el COMITENTE necesite un servicio complementario, el Proveedor puede proponer una misión de asesoramiento a este respecto en el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes e interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de esta Convención de servicio

-   Siniestros

-   Averías y fallos

-   Incidentes de seguridad:

-   Que afecten a la disponibilidad del servicio

-   Que afecten a la confidencialidad del servicio

-   Que afecten a la integridad del servicio

#### 11.1.1.2. Tratamiento de los incidentes

-   Plazos

-   Acciones a posteriori

-   Archivar los documentos detallando los incidentes de seguridad.

-   Notificación de violación de datos de carácter personal (en línea): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad

El COMITENTE tiene la responsabilidad de elegir los niveles de gravedad de los Incidentes de seguridad sobre los que desea ser informado, por ejemplo, mediante su formalización en un PAS aplicable al Servicio.

Por defecto, el COMITENTE es informado:

-   De los incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de los tratamientos de la presente Convención de servicio);

-   De las violaciones de datos de carácter personal por las cuales el COMITENTE es responsable del tratamiento;

-   De las violaciones de datos de carácter personal por las cuales el Proveedor es responsable del tratamiento y que comporten datos personales del COMITENTE.

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

El mantenimiento asegurado consiste en la implementación:

-   Del plan de mantenimiento en condiciones operativas del Servicio para asegurar buenos indicadores de disponibilidad tal como se compromete el Proveedor más arriba;

-   Del plan de PCA/PRA si es suscrito por el COMITENTE y se activa según los posibles incidentes que pudieran ocurrir.

### 11.2.2. Accesos remotos de Cloud Temple en el perímetro del COMITENTE

El Proveedor se prohíbe, en el marco de la presente Convención de servicio, cualquier acceso a los Tenants y al espacio de la interfaz del COMITENTE.

Corresponderá al COMITENTE dar los accesos necesarios al personal del Proveedor. El COMITENTE reconoce que los accesos serán utilizados en el marco del alojamiento y, en última instancia, de la gestión (si es suscrito por el COMITENTE).

### 11.2.3. Accesos remotos de terceros participando en la provisión del servicio en el perímetro del COMITENTE

No se autoriza ningún acceso remoto de terceros participando en la provisión del Servicio.

Si una necesidad técnica hiciera necesario este caso, entonces este tipo de acceso solo se realizaría tras notificación del COMITENTE, justificación y obtención de su acuerdo por escrito.

# 12. Procedimiento de borrado de datos al final del Contrato

Al final del Contrato, ya sea porque el Contrato haya llegado a su término o por cualquier otra causa, el Proveedor asegurará el borrado seguro de la totalidad de los datos tratados en el marco del Servicio, incluyendo los Datos técnicos del COMITENTE. El Proveedor dará un preaviso formal respetando un plazo de veintiún días (21) calendario. Los datos del COMITENTE serán eliminados en un plazo máximo de treinta (30) días después de la notificación. El Proveedor proporcionará un certificado de eliminación de datos al COMITENTE.

# 13. Derecho aplicable

## 13.1. De manera general

El derecho aplicable y al que se somete la presente Convención de servicio es el derecho francés.

## 13.2. Cumplimiento de la ley y las regulaciones aplicables

El Proveedor se compromete a los siguientes puntos:

-   La identificación de las restricciones legales y regulatorias aplicables en el marco del Servicio;

-   El cumplimiento de las restricciones legales y regulatorias aplicables a los datos confiados al Proveedor;

-   El cumplimiento de la Ley de protección de datos y del RGPD;

-   La implementación de medios de protección de los datos personales;

-   La implementación de un proceso de vigilancia legal y regulatoria;

-   Disponer y mantener relaciones apropiadas o una vigilancia con las autoridades sectoriales en relación con la naturaleza de los datos tratados en el marco del Servicio. Esto incluye en particular el ANSSI, CERT-FR y CNIL.

## 13.3. RGPD

Actuando como encargado del tratamiento en el sentido del artículo 28 del Reglamento general de protección de datos (RGPD), el Proveedor se compromete:

-   A asegurar la transparencia y la trazabilidad;

-   A designar un DPO encargado de definir e implementar las medidas de protección de datos de carácter personal;

-   Ofrecer asistencia y asesoramiento al COMITENTE y alertarlo si una instrucción de este último constituye una violación de las reglas de protección de datos personales si el Proveedor tiene medios para identificarlo;

-   Una garantía de seguridad sobre los datos tratados (debido a la calificación SecNumCloud).

## 13.4. Protección frente al derecho extracomunitario

En caso de recurso por parte del Proveedor, en el marco del Servicio, a los servicios de una empresa tercera -incluyendo un subcontratista- cuyo domicilio, administración central o principal lugar de negocios se encuentre en un Estado no miembro de la Unión Europea o que pertenezca o esté controlada por una empresa tercera domiciliada fuera de la Unión Europea, el Proveedor se compromete a que dicha empresa tercera no tendrá acceso alguno a los datos operados por el servicio 'Secure Temple'.

Para recordar, los datos en cuestión son los confiados al Proveedor por el COMITENTE, así como todos los Datos técnicos que incluyan información sobre los COMITENTES.

Para los fines del presente artículo, la noción de control se entiende como se menciona en el artículo II de la L233-3 del código de comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Por Cloud Temple, el PROVEEDOR

Por \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMITENTE