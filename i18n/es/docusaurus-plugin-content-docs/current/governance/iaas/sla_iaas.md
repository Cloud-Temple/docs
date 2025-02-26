---
title: Convention de Service IaaS
---

![Logo Cloud Temple](images/ct.png)

# 1. **CONVENCIÓN DE SERVICIOS IaaS**

| **Destinataires :**                  | **PATROCINADOR**                               |
| :----------------------------------- | :--------------------------------------------- |
| **Référence du documents**           | CT.AM.JUR.ANX_Convention de Services_IaaS_v2.0 |
| **Vos interlocuteurs**               | *Nombre* *Apellido*                           |
|                                      | Account Manager                               |
|                                      | e-mail : *nombre.apellido*@cloud-temple.com   |
| **Date de dernière mise à jour**     | 03/04/2024                                    |
| **Date de validation contractuelle** | Día DD AAAA                                   |


----------------------------------------------------------------------------------

| **Version** | **Fecha**   | **Acción**                            | **Autor**       |
| ----------- | ----------  | ------------------------------------  | --------------- |
| v0.1        | 07/06/2022  | Redacción inicial                     | Lorena ALCALDE  |
| v0.2        | 14/09/2022  | Enriquecimiento                       | Lorena ALCALDE  |
| v1.0        | 30/12/2022  | Integración de Indicadores            | Lorena ALCALDE  |
| v1.1        | 23/01/2023  | Modificación del pie de página        | Lorena ALCALDE  |
| v1.2        | 22/05/2023  | Enriquecimiento                       | Lorena ALCALDE  |
| v1.3        | 29/06/2023  | Enriquecimiento                       | Lorena ALCALDE  |
| v1.4        | 06/11/2023  | Modificación Capital y Enriquecimiento| Lorena ALCALDE  |
| v1.5        | 30/11/2023  | Enriquecimiento                       | Lorena ALCALDE  |
| v1.6        | 21/03/2024  | Enriquecimiento                       | Lorena ALCALDE  |
| v2.0        | 29/03/2024  | Ajustes de conformidad SNC            | Nicolas ABRIOUX |
| v2.0        | 03/04/2024  | Publicación                           | Lorena ALCALDE  |


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
    - [7.2.1. Infraestructuras de Centros de Datos](#721-infraestructuras-de-centros-de-datos)
    - [7.2.2. Infraestructura Software de Gestión del Servicio](#722-infraestructura-software-de-gestión-del-servicio)
    - [7.2.3. Infraestructuras de cálculo](#723-infraestructuras-de-cálculo)
    - [7.2.4. Infraestructura de almacenamiento](#724-infraestructura-de-almacenamiento)
    - [7.2.5. Infraestructura de red global](#725-infraestructura-de-red-global)
    - [7.2.6. Infraestructura de respaldo](#726-infraestructura-de-respaldo)
    - [7.2.7. Implementación de soluciones de recuperación o continuidad de actividad](#727-implementación-de-soluciones-de-recuperación-o-continuidad-de-actividad)
  - [7.3. Limitaciones de los servicios en el modelo IaaS cualificado](#73-limitaciones-de-los-servicios-en-el-modelo-iaas-cualificado)
    - [7.3.1. Servicios gestionados en RUN](#731-servicios-gestionados-en-run)
    - [7.3.2. Configuración del respaldo](#732-configuración-del-respaldo)
    - [7.3.3. Configuración del respaldo](#733-configuración-del-respaldo)
  - [7.4. Implementación del servicio](#74-implementación-del-servicio)
    - [7.4.1. Prerrequisitos técnicos](#741-prerrequisitos-técnicos)
  - [7.5. Localización del servicio en Francia](#75-localización-del-servicio-en-francia)
    - [7.5.1. Localización de los Centros de Datos que alojan el Servicio](#751-localización-de-los-centros-de-datos-que-alojan-el-servicio)
    - [7.5.2. Localización de las agencias de Cloud Temple que operan el servicio](#752-localización-de-las-agencias-de-cloud-temple-que-operan-el-servicio)
  - [7.6. Soporte](#76-soporte)
    - [7.6.1. Naturaleza del soporte que acompaña el servicio](#761-naturaleza-del-soporte-que-acompaña-el-servicio)
    - [7.6.2. Solicitud del servicio de soporte técnico](#762-solicitud-del-servicio-de-soporte-técnico)
    - [7.6.3. Proceso de gestión de Incidentes](#763-proceso-de-gestión-de-incidentes)
    - [7.6.4. Proceso de priorización de los tratamientos](#764-proceso-de-priorización-de-los-tratamientos)
    - [7.6.5. Idioma y localización del servicio de soporte](#765-idioma-y-localización-del-servicio-de-soporte)
- [8. Compromisos y niveles de servicios](#8-compromisos-y-niveles-de-servicios)
  - [8.1. Compromisos de disponibilidad de la infraestructura](#81-compromisos-de-disponibilidad-de-la-infraestructura)
  - [8.2. Compromiso de disponibilidad de la interfaz del PATROCINADOR](#82-compromiso-de-disponibilidad-de-la-interfaz-del-patrocinador)
  - [8.3. Compromiso de disponibilidad del soporte](#83-compromiso-de-disponibilidad-del-soporte)
  - [8.4. Compromiso de disponibilidad del almacenamiento de objetos S3](#84-compromiso-de-disponibilidad-del-almacenamiento-de-objetos-s3)
  - [8.5. Precisión respecto al compromiso de respaldo](#85-precisión-respecto-al-compromiso-de-respaldo)
- [9. Organización de la relación contractual](#9-organización-de-la-relación-contractual)
  - [9.1. Responsabilidades del Proveedor](#91-responsabilidades-del-proveedor)
  - [9.2. Limitación de responsabilidades del Proveedor](#92-limitación-de-responsabilidades-del-proveedor)
  - [9.3. Limitación de acceso](#93-limitación-de-acceso)
  - [9.4. Responsabilidades de terceros que participan en la provisión del servicio Secure Temple](#94-responsabilidades-de-terceros-que-participan-en-la-provisión-del-servicio-secure-temple)
  - [9.5. Responsabilidades y obligaciones del PATROCINADOR](#95-responsabilidades-y-obligaciones-del-patrocinador)
  - [9.6. Derechos del PATROCINADOR](#96-derechos-del-patrocinador)
  - [9.7. Borrado de datos al final del Contrato](#97-borrado-de-datos-al-final-del-contrato)
- [10. Ciclo de vida de la presente Convención de servicio](#10-ciclo-de-vida-de-la-presente-convención-de-servicio)
  - [10.1. Entrada en vigor de la Convención de servicio](#101-entrada-en-vigor-de-la-convención-de-servicio)
  - [10.2. Evoluciones de la Convención de servicio](#102-evoluciones-de-la-convención-de-servicio)
    - [10.2.1. Evoluciones desencadenadas por el PATROCINADOR](#1021-evoluciones-desencadenadas-por-el-patrocinador)
    - [10.2.2. Evoluciones desencadenadas por el Proveedor](#1022-evoluciones-desencadenadas-por-el-proveedor)
  - [10.3. Reversibilidad](#103-reversibilidad)
- [11. Disponibilidad, continuidad y restauración del servicio](#11-disponibilidad-continuidad-y-restauración-del-servicio)
  - [11.1. Gestión de Incidentes e interrupciones](#111-gestión-de-incidentes-e-interrupciones)
    - [11.1.1. Incidentes](#1111-incidentes)
      - [11.1.1.1. Tipos de Incidentes tratados en el marco de esta Convención de servicio](#11111-tipos-de-incidentes-tratados-en-el-marco-de-esta-convención-de-servicio)
      - [11.1.1.2. Tratamiento de los Incidentes](#11112-tratamiento-de-los-incidentes)
      - [11.1.1.3. Nivel de notificación de los Incidentes de seguridad](#11113-nivel-de-notificación-de-los-incidentes-de-seguridad)
  - [11.2. Mantenimiento del Servicio](#112-mantenimiento-del-servicio)
    - [11.2.1. Naturaleza del mantenimiento](#1121-naturaleza-del-mantenimiento)
    - [11.2.2. Accesos remotos de Cloud Temple en el perímetro del PATROCINADOR](#1122-accesos-remotos-de-cloud-temple-en-el-perímetro-del-patrocinador)
    - [11.2.3. Accesos remotos de terceros participantes en la provisión del servicio en el perímetro del PATROCINADOR](#1123-accesos-remotos-de-terceros-participantes-en-la-provisión-del-servicio-en-el-perímetro-del-patrocinador)
- [12. Procedimiento de borrado de datos al final del Contrato](#12-procedimiento-de-borrado-de-datos-al-final-del-contrato)
- [13. Ley aplicable](#13-ley-aplicable)
  - [13.1. De manera general](#131-de-manera-general)
  - [13.2. Cumplimiento de la ley y las regulaciones aplicables](#132-cumplimiento-de-la-ley-y-las-regulaciones-aplicables)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protección respecto al derecho extraeuropeo](#134-protección-respecto-al-derecho-extraeuropeo)
- [14. FIRMAS](#14-firmas)


----------------------------------------------------------------------------------


# 3. Preliminar y Glosario

## 3.1. Preliminar

El presente documento formaliza la Convención de servicio asociada al servicio IaaS calificado SecNumCloud bajo la denominación de « *Secure Temple* ».

\"La presente convención de servicio complementa y es complementaria a las condiciones generales de venta y uso del Proveedor. 
Se entiende que los documentos contractuales se interpretan de manera coherente entre ellos. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán uno sobre otro en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Convención de Servicio SecNumCloud IaaS
3. Convención de Servicio SecNumCloud PaaS
4. Convención específica particular
5. Plan de Aseguramiento de Seguridad (PAS)
6. Condiciones Particulares de Uso (CPU)

## 3.2. Glosario

En la presente Convención de servicio, el **PATROCINADOR**, el **Proveedor** y las **Partes** están identificados en el Contrato
al que está anexa la presente Convención de servicio.

Las expresiones aquí empleadas en la presente Convención de servicio se interpretarán conforme a las definiciones que se les atribuyen a continuación:


-   **Cambio:** Cualquier adición, modificación o eliminación que impacte el Servicio, autorizado, planificado o gestionado.

-   **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de implementación y los impactos (incluidos los financieros) son conocidos y aceptados de antemano por las Partes. Se integra en el catálogo de cambios estándar y puede, en algunos casos, tener una GTI y una GTR.

-   **Contrato:** se refiere al contrato suscrito por el CLIENTE con el Proveedor para permitir que el CLIENTE pueda beneficiarse del Servicio, al cual se adjunta el presente Acuerdo de Servicio.

-   ***Acuerdo de servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), en conformidad con los requisitos del Referencial SecNumCloud.

-   **Solicitud de servicio:** petición del CLIENTE hacia el Proveedor en el marco del Servicio, que cubre las operaciones que el CLIENTE no puede realizar desde la interfaz CLIENTE y las solicitudes de soporte en el marco del Servicio. Las solicitudes de servicio están limitadas a aquellas previstas en el Contrato o el presente Acuerdo de Servicio.

-   **Disponibilidad:** Capacidad para asegurar la disponibilidad y el mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

-   **Datos técnicos:** incluye todos los datos manipulados para entregar el Servicio, notablemente la identidad de los beneficiarios y administradores de la infraestructura técnica, registros de la infraestructura técnica, configuración de accesos, directorios, certificados...

-   **Evento:** Un "evento" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

-   **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales en una lámina de cálculo.

-   **Incidente:** Cualquier evento inesperado que interrumpe el funcionamiento normal del Servicio o compromete la seguridad de los datos.

-   **Incidente de seguridad:** Cualquier evento en el perímetro del Servicio:

    -   De naturaleza intencionalmente maliciosa;
    -   De naturaleza accidental que afecte la integridad, la confidencialidad o la trazabilidad del Servicio o los datos del CLIENTE;
    -   Que afecte a las medidas de seguridad existentes.
    Las afectaciones a la Disponibilidad de origen no malicioso no se consideran un Incidente de seguridad (falla de hardware, bug, malfuncionamiento, desastre natural...).

-   **Interfaz CLIENTE:** Interfaz de administración del Servicio proporcionada al CLIENTE por el Proveedor, que agrupa una consola de administración web y una API.

-   **Puesta en producción:** acción(es) de administración para la realización del Cambio cuando este es aprobado (el cambio, en el sentido
    de ITIL, solo se refiere a la gestión del cambio y no a su realización/concreción).

-   **Problema:** causa de uno o más Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo).

-   **Región:** se refiere a un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, que proporcionan servicios de red,
    cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad reglamentaria local.

-   **Servicio:** se refiere al servicio IaaS calificado SecNumCloud «Secure Temple», entregado al CLIENTE por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, tal como se describe en la sección «Descripción del Servicio» del presente Acuerdo de Servicio.

-   **Secure Temple:** se refiere al servicio IaaS calificado SecNumCloud, ofrecido por la empresa Cloud Temple, según se define en la certificación consultable en el sitio de la ANSSI y proporcionada en el anexo del presente Acuerdo de Servicio.

-   **Siniestro:** se refiere a un evento grave de origen natural o humano, accidental o intencional, que causa pérdidas y daños significativos a la parte afectada.

-   **Supervisión:** Monitoreo de un Sistema de Información o Servicio, que implica la recopilación de diversos datos como mediciones y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente en los elementos monitoreados, una prerrogativa que pertenece a las operaciones de Administración.

-   **Tenant:** Una instancia aislada reservada para un usuario o grupo de usuarios, compartiendo una infraestructura común mientras se mantiene la independencia y la seguridad de los datos y las aplicaciones.

-   **Zona de Disponibilidad (AZ) (Availability zone):** Una sección específica e aislada de la infraestructura de cloud computing, diseñada
    para asegurar la alta disponibilidad y la resiliencia de los servicios
    mediante una distribución geográfica de los recursos.

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
  | **ITIL**     | Information Technology Infrastructure Library - Buenas prácticas para la gestión de SI  |
  | **IaaS**     | Infrastructure as a Service                                                             |
  | **MCO**      | Mantenimiento en condición operativa                                                    |
  | **MOA**      | Maîtrise d'Ouvrage                                                                      |
  | **MOE**      | Maîtrise d'Œuvre                                                                        |
  | **MSP**      | Managed Services Provider                                                               |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Plan de Aseguramiento de Calidad                                                        |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Plan de Aseguramiento de Seguridad                                                      |
  | **PASSI**    | Proveedor de Auditoría de Seguridad de Sistemas de Información                          |
  | **RFC**      | Request For Change -- Solicitud de cambio                                               |
  | **RGPD**     | Reglamento General de Protección de Datos (personales)                                  |
  | **RPO**      | Recovery Point Objective -- Frescura de los datos restaurados en caso de Siniestro      |
  | **RTO**      | Recovery Time Objective -- Plazo de recuperación del servicio en caso de Siniestro      |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Acuerdo de niveles de servicio                               |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Tercera Mantenimiento de Aplicaciones                                                   |
  | **UO**       | Unidad de Obra                                                                           |
  | **VABE**     | Validación de Aptitud para la Buena Explotabilidad                                      |
  | **VABF**     | Validación de Aptitud para el Buen Funcionamiento                                       |
  | **VM**       | Virtual Machine (Máquina virtual)                                                       |
  | **VSR**      | Validación de Servicio Regular                                                          |


# 5. Objeto del presente Acuerdo de servicio

El presente Acuerdo de servicio establece los términos y condiciones bajo los cuales el Proveedor se compromete a entregar el Servicio al
CLIENTE. Su objeto es:

-   Precisar los requisitos de rendimiento esperados por el CLIENTE en términos de funcionalidad y fiabilidad del Servicio;

-   Enunciar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

-   Identificar las normas reglamentarias aplicables específicamente al Servicio entregado;

-   Asegurar una uniformidad e integridad en la evaluación de la calidad del Servicio;

-   Garantizar la excelencia de los servicios prestados, evaluada mediante indicadores de desempeño cuantitativos.

Se estipula que, en el caso de que el Proveedor pierda su calificación SecNumCloud, el Contrato podrá ser rescindido por
pleno derecho, sin incurrir en penalidades, por el PATROCINADOR. En tal caso, el Proveedor se compromete a informar al PATROCINADOR
de dicha descalificación mediante el envío de una notificación oficial a través de una carta certificada con acuse de recibo.

Cabe señalar que una modificación o ajuste de la certificación SecNumCloud no se interpretará como una revocación de
la certificación inicial.

# 6. Auditoría

El Proveedor se compromete a permitir al PATROCINADOR, o a cualquier auditor externo y no concurrente designado por el Proveedor, consultar todos los documentos necesarios para asegurar el cumplimiento total de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización
de auditorías.

Al aceptar el presente Acuerdo de Servicio, el PATROCINADOR otorga su autorización explícita a:

1.  La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) así como a la entidad de certificación competente para emprender la verificación de la conformidad del Servicio y de su sistema de información con el estándar SecNumCloud.
2.  Un proveedor de auditoría de seguridad de sistemas de información, debidamente cualificado PASSI y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio ofrecido por el Proveedor se caracteriza por la provisión de las siguientes prestaciones, las cuales se alinean con el
principio de responsabilidad compartida presentado en el estándar SecNumCloud:

-   La provisión de recursos de computación (compute);

-   La puesta a disposición de espacios de almacenamiento;

-   El acceso a servicios de conectividad de red e internet;

-   La oferta de un servicio de respaldo dedicado a las máquinas virtuales.

El modelo de responsabilidades compartida aplicado entre el Proveedor y el PATROCINADOR en el marco del Servicio se presenta en §7.1.

Se entiende que el Proveedor utilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales y conforme a las exigencias del estándar SecNumCloud.

El Servicio está certificado SecNumCloud (ver certificación en el Anexo).

## 7.2. Presentación detallada del alcance del Servicio

| Compute               | Recurso de computación del Tenant PATROCINADOR                                                                          |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| Storage               | Datos de producción del Tenant PATROCINADOR                                                                              |
| Almacenamiento objeto S3 | puesta a disposición de una infraestructura de almacenamiento objeto soberana multi AZ y compatible con las API S3 estándar. |
| Respaldo              | Sujetos a la suscripción del almacenamiento masivo adecuado                                                              |
| Infraestructura de red | Recurso de red del Tenant PATROCINADOR                                                                                   |
| Consola PATROCINADOR  | El servicio que permite al PATROCINADOR acceder a su servicio IaaS y administrarlo a través de la interfaz Shiva          |
| Soporte               | El servicio de soporte que acompaña los servicios anteriores y únicamente estos (*)                                      |

_(*) Dentro del límite del alcance del Servicio certificado por SNC y las responsabilidades del Proveedor al respecto_

### 7.2.1. Infraestructuras de Centros de Datos

El Servicio incluye la provisión, para cada Zona de disponibilidad, de las siguientes prestaciones certificadas:

-   Sitio de centro de datos ubicado en Francia para la Región FR, conforme a las últimas normas tecnológicas, ofreciendo un nivel de resistencia equivalente o superior al nivel Tier 3 del Uptime Institute;
-   Provisión de salas técnicas en centros de datos dedicados para albergar los equipos técnicos indispensables para la producción del servicio, incluyendo computación, almacenamiento, red, cableado y otros componentes necesarios;
-   Alimentación eléctrica segura, asegurada por dos circuitos eléctricos distintos, garantizando la continuidad del servicio;
-   Provisión de servicios de climatización, ajustados para cumplir con las normas y recomendaciones de los fabricantes de equipos, con el fin de mantener un ambiente óptimo para los dispositivos técnicos;
-   Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y la seguridad del servicio proporcionado.

El Proveedor asegura la provisión de servicios avanzados de detección y extinción de incendios, diseñados para identificar y
neutralizar eficazmente cualquier conato de incendio en las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos
y los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente
sin dañar el equipo informático. Este servicio es crucial para prevenir riesgos de incendio, minimizar los posibles daños y
asegurar la continuidad de las operaciones.

El PATROCINADOR es informado de que todos los procedimientos y medidas de seguridad implementados, incluyendo las pruebas anuales de conmutación a
los grupos electrógenos, son esenciales para garantizar la continuidad y la integridad de los servicios proporcionados. Estas prácticas están diseñadas para
minimizar los riesgos de fallos y asegurar una capacidad de respuesta óptima en caso de Incidente. Al aceptar estas condiciones, el cliente reconoce
la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. El PATROCINADOR también es alentado a
tomar conocimiento de las recomendaciones de seguridad proporcionadas e integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de gestión del Servicio

El Proveedor proporciona al PATROCINADOR la consola de administración y la API necesarias para la utilización del Servicio. También se compromete a mantener esta consola de administración y la API en condiciones operativas óptimas y a asegurar su seguridad de manera continua.
Esta consola de administración y la API se designan en conjunto con el término «interface PATROCINADOR».

El Proveedor alerta al PATROCINADOR sobre el hecho de que un uso anormal de la interface PATROCINADOR, particularmente en caso de sobrecarga de sus APIs de comando (hammering), puede activar medidas de seguridad automáticas que podrían bloquear el acceso a las APIs de comando o al Servicio. Es importante destacar que esta situación no constituye una indisponibilidad del Servicio sino una acción de protección del Servicio y de la infraestructura del Proveedor; por lo tanto, el PATROCINADOR no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Proveedor informa al PATROCINADOR que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el PATROCINADOR envía solicitudes idénticas con una frecuencia superior, su rechazo no podrá interpretarse como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de computación

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el PATROCINADOR, de los equipos necesarios para la ejecución de cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

- La provisión de los chasis técnicos necesarios para el funcionamiento adecuado de las láminas de computación;
- La provisión de las láminas de computación en las cantidades especificadas por el PATROCINADOR y distribuidas según las zonas de disponibilidad de su elección. Cabe señalar que estas láminas de computación están exclusivamente dedicadas al PATROCINADOR;
- La puesta a disposición de sistemas operativos tipo hipervisores, así como la garantía del mantenimiento en condiciones operativas y de seguridad de la infraestructura de software necesaria para la gestión de estos sistemas operativos. Cabe destacar que, aunque el Proveedor es responsable del mantenimiento operativo y la seguridad general del Servicio, no posee conocimientos específicos sobre los entornos de producción del PATROCINADOR ni sobre las exigencias relacionadas con sus cargas de trabajo. Por lo tanto, la responsabilidad de decidir la actualización de los sistemas operativos de las láminas de computación hipervisores, una acción que puede requerir un reinicio, recae completamente en el PATROCINADOR. Esta operación puede ser realizada a través de la Interface PATROCINADOR.

La elección del modelo de lámina de computación, seleccionado del catálogo propuesto por el Proveedor, es responsabilidad del
PATROCINADOR.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al PATROCINADOR de una infraestructura de almacenamiento compartida de tipo SAN (Storage Area Network), ofreciendo varios
niveles de rendimiento. Este servicio abarca:

- La implementación y el mantenimiento en condiciones operativas y de seguridad de la red SAN dedicada;
- La instalación y gestión de las cabinas de almacenamiento compartidas entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, supervisión y metrología;
- La implantación de sistemas automatizados para la asignación de LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del PATROCINADOR, conforme a los volúmenes suscritos por el PATROCINADOR.

### 7.2.5. Infraestructura de red global

El Proveedor despliega, en el marco del Servicio, una red global que facilita al PATROCINADOR la accesibilidad de sus sistemas alojados. Este servicio incluye:
-   La provisión, el mantenimiento en condición operativa y en condición de seguridad de todas las conexiones de fibra óptica
    interconectando las diferentes Zonas de disponibilidad;

-   La provisión, el mantenimiento en condición operativa y en condición de seguridad de los equipos técnicos necesarios para el buen
    funcionamiento de la red y la aislamiento de los diferentes clientes.

La interconexión de red del Tenant COMITENTE, a Internet o a redes privadas, y los equipos de red, enlaces operadores y otros
componentes técnicos que realizan esta interconexión, no forman parte del alcance del Servicio. Esta interconexión de red se implementa
de acuerdo con las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo

El Prestador pone a disposición del COMITENTE un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus
máquinas virtuales. El Prestador asegura el mantenimiento en condición operativa y en condición de seguridad de este servicio de respaldo.
El Prestador garantiza que las copias de seguridad del COMITENTE estarán ubicadas fuera de la Zona de disponibilidad de las cargas de trabajo
respaldadas, siempre que el COMITENTE haya suscrito a las Unidades de obra adecuadas.

Esta prestación de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS
de los Tenants del COMITENTE en el marco del Servicio. La elaboración y aplicación de una política de respaldo adecuada por el
COMITENTE dependen de la suscripción a unidades de obra específicas. Por lo tanto, incumbe al COMITENTE asegurarse de la
disponibilidad de los recursos técnicos necesarios ante el Prestador para implementar su política de respaldo o
ajustar esta última en función de los medios disponibles.

El Prestador se compromete a notificar al COMITENTE en caso de restricciones de capacidad y a proporcionar asesoría para la
optimización de los recursos. Las obligaciones del Prestador se limitarán a la implementación de las necesidades expresadas por el COMITENTE
en materia de política de respaldo, en el marco de los recursos suscritos.

### 7.2.7. Implementación de soluciones de recuperación de actividad o de continuidad de actividad

El Prestador proporciona al COMITENTE todas las soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos en diversas Zonas de disponibilidad. Es responsabilidad del COMITENTE gestionar eficazmente esta distribución de recursos, para lo cual tiene la posibilidad de utilizar las herramientas del Prestador disponibles para este propósito.

## 7.3. Limitaciones de los servicios en el modelo IaaS calificado

### 7.3.1. Servicios gestionados en RUN

Es importante señalar que están excluidos del Servicio:

-   El alojamiento de componentes físicos del COMITENTE;

-   La interconexión de red del Tenant COMITENTE, a Internet o a redes privadas, incluyendo los enlaces del operador;

-   Cualquier servicio de tipo gestionado, o TMA;

-   Cualquier asistencia sobre las máquinas virtuales a nivel del OS y por encima en la pila de responsabilidades IaaS, incluso si se trata de simple supervisión.

Sin embargo, no se excluye en absoluto que el COMITENTE recurra a tales servicios a través de la oferta MSP del Prestador para intervenir en modo de servicios gestionados en sus Tenants. Estos servicios no estarán entonces cubiertos por el presente Convenio de servicio y sus compromisos/cláusulas bipartitas.

### 7.3.2. Configuración del respaldo

Por defecto, el Prestador proporciona la implementación de los recursos de IaaS al COMITENTE reservando recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Incumbe al COMITENTE elegir las Zonas de disponibilidad a través de la interfaz del COMITENTE.

### 7.3.3. Configuración del respaldo

El servicio de respaldo se limita a la copia de seguridad de las máquinas virtuales y las configuraciones de topología que representan el entorno IaaS de los Tenants del COMITENTE en el marco del Servicio.

La prestación de respaldo y la implementación de la política de respaldo del COMITENTE están sujetas a la suscripción de espacio de almacenamiento en el almacenamiento masivo necesario para asegurar el servicio. Por lo tanto, es responsabilidad del COMITENTE suscribir ante el Prestador los medios técnicos necesarios para asegurar la política de respaldo en su perímetro informático, o ajustar la política de respaldo a los medios disponibles. El Prestador se compromete a informar al COMITENTE en caso de límite de capacidad técnica.

El Prestador implementará los medios técnicos y humanos necesarios para el respaldo del sistema alojado dentro de los límites de los recursos suscritos por el COMITENTE.

Además, en el caso de los perímetros no cubiertos por el Prestador, corresponde al COMITENTE definir su propia estrategia de respaldo y configurar por sí mismo los respaldos de las VM, o realizar una Solicitud de servicio al Prestador para que se configure el respaldo de los servidores físicos, siempre que el COMITENTE disponga de un contrato de servicio gestionado que permita al Prestador actuar a través de la interfaz del COMITENTE, que es la consola de administración puesta a disposición en el marco de este Convenio de servicio y que dispone de funcionalidades para configurar los respaldos.

Además, este servicio solo tendrá como compromiso traducir mediante la configuración a través de la interfaz del COMITENTE, la configuración especificada claramente por el COMITENTE.

Por razones de flexibilidad de la oferta del Prestador, el COMITENTE tiene la opción de asociar una política de no-respaldo en algunas de sus VM. En este caso, corresponde al COMITENTE asumir esta elección. El Prestador no respaldará las VM asociadas con la política "no backup". El Prestador alerta al COMITENTE de que elegir la política "no backup" o elegir realizar el respaldo manualmente expone al COMITENTE a una pérdida definitiva de datos en caso de un Incidente en las capas bajas o en las capas que dependen de su responsabilidad en el modelo IaaS. En tal caso, será imposible responsabilizar al Prestador de restaurar los datos ya que no habrá nada que restaurar. El Prestador recomienda siempre respaldar las VM.

Para cualquier asunto relacionado con el OS instalado en una máquina virtual y cualquier software o programa ejecutado "encima del OS", es responsabilidad del COMITENTE llevar a cabo las operaciones de administración y supervisión dentro de la Unión Europea si desea garantizar que toda la verticalidad de las capas del SI se operen y gestionen desde la Unión Europea. Las operaciones de administración fuera del perímetro de responsabilidad del Prestador en el marco de este Convenio de servicio están indicadas en la sección "Modelo de responsabilidades compartidas" de este Convenio de Servicio.

## 7.4. Implementación del servicio

### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el COMITENTE reconoce que deberá:

-   Funcionar con una virtualización de tipo VMware en las versiones soportadas por el editor y suministradas por el Prestador en el marco del Servicio;

-   Recurrir a través del Prestador al uso de la herramienta de respaldo;

-   Declarar IPs fijas desde las cuales el Prestador le autorizará a acceder a la interfaz del COMITENTE (Filtrado por lista blanca). Las modificaciones de esta lista de IPs deberán realizarse a través de Solicitudes de servicio (lista no administrable desde la interfaz de administración del Servicio).

## 7.5. Localización del servicio en Francia

Se especifica que ninguna de las operaciones y ningún componente físico involucrado en la provisión del Servicio, objeto del presente Convenio de servicio, está ubicado fuera de la Unión Europea.

Esto incluye especialmente el soporte, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que presta el Servicio. De hecho, todo el almacenamiento, todas las tareas de administración, supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los Datacenters que alojan el Servicio

A falta de las operaciones de los colaboradores y las agencias del Prestador, todas las operaciones de producción (incluyendo el almacenamiento y procesamiento de los datos) y componentes técnicos que prestan el Servicio están ubicados en los Datacenters basados en Francia.

### 7.5.2. Localización de las agencias de Cloud Temple que operan el servicio

Los colaboradores de Cloud Temple que intervienen en el perímetro del Servicio operan desde las agencias de Cloud Temple, todas ubicadas
exclusivamente en Francia. Estas agencias se encuentran en Francia, en Tours, Lyon, Caen y París La Défense.

El COMITENTE está informado de la posibilidad de que los empleados de Cloud Temple trabajen a distancia. Sin embargo, el Prestador garantiza el mismo nivel de seguridad con respecto a los accesos a distancia, especialmente en cuanto a los accesos VPN. Estos accesos a distancia se implementan de acuerdo con los requisitos del referencial SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte acompañando el servicio

El Prestador suministra un servicio de soporte técnico destinado a asistir al COMITENTE en la gestión, solución de problemas y optimización de
sus recursos desplegados. Este servicio cubre una amplia gama de actividades, desde la ayuda en la configuración inicial de los servicios
hasta el soporte técnico avanzado para resolver problemas específicos.

Aquí hay una descripción de las características y funcionalidades del servicio de soporte:

-   Asistencia en la implementación inicial del uso del Servicio;
-   Asistencia en la resolución de incidentes;
-   Asistencia en la resolución de problemas;
-   Seguimiento y asesoramiento sobre la optimización de la base técnica.
Dans el marco del servicio de soporte, el Proveedor no sustituye al CLIENTE en el uso del Servicio. El CLIENTE sigue siendo completamente responsable de la configuración, la explotación de sus VM y de sus Tenants, y de la gestión de todos los elementos (incluidos datos y aplicaciones) que ha almacenado o instalado en las infraestructuras del Proveedor. El servicio de soporte técnico se proporciona de acuerdo con las Condiciones Generales de Venta y Uso, y el Proveedor está obligado a una obligación de medios.

El CLIENTE se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose en particular de solicitar servicios no suscritos con el Proveedor y de hacer intervenir al equipo del Proveedor ante sus propios clientes o terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de las unidades de obra de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico es accesible a través de un sistema de tickets vía la consola CLIENTE y está disponible durante el horario normal de oficina, excluyendo días festivos (8h - 18h; Lunes -- Viernes; calendario y horarios franceses). Para emergencias que ocurran fuera del horario de oficina, especialmente incidentes que afecten significativamente la producción, el servicio de guardia puede ser contactado mediante un número comunicado al CLIENTE al inicio del Servicio.

Para cada solicitud o incidente, es esencial generar un ticket al soporte del Proveedor. La iniciación de este ticket, que incluye toda la información necesaria, es fundamental y marca el inicio de la evaluación de los compromisos del Proveedor.

Tan pronto como el Proveedor reciba una solicitud o notificación de incidencia, ya sea a través de la consola de gestión o a raíz de una llamada telefónica, se crea automáticamente un ticket. Al declarar una incidencia, es esencial que el CLIENTE proporcione al Proveedor la mayor cantidad de detalles sobre el problema encontrado. Este paso es crucial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico efectivo.

El Cliente recibe entonces una confirmación por correo electrónico, indicando la creación del ticket y su número único. El CLIENTE puede consultar
el estado y el historial de sus solicitudes y declaraciones de incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de incidentes

Al declarar una incidencia, el equipo de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El Cliente debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando las pruebas requeridas. El Proveedor puede acceder al Servicio del Cliente para diagnosticar la incidencia.

Si los servicios del Proveedor se consideran funcionales y la incidencia no es imputable a él, se informará al Cliente. A petición del Cliente, el Proveedor puede ofrecer Servicios Profesionales para identificar el origen del problema, facturables con acuerdo previo en tramos de 30 minutos.

En el caso de que la incidencia sea responsabilidad del Proveedor o de uno de sus subcontratistas, éste completará el diagnóstico y se dedicará a restaurar el servicio sin costos adicionales. El diagnóstico se basa en los intercambios entre las Partes y los datos del Proveedor, estos elementos se consideran probatorios por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de tratamientos

La determinación del nivel de prioridad de un caso se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de criticidad:

-   Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impacto I1       | El o los servicios del Proveedor están interrumpidos                                                                  |
| Impacto I2       | El o los servicios del Proveedor están degradados                                                                     |
| Impacto I3       | El o los servicios del Proveedor están actualmente estables, pero muestran signos de potencial declive a largo plazo  |

-   Los niveles de Criticidad se definen de la siguiente manera:

| Nivel de criticidad | Descripción                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticidad C1       | El o los servicios del Proveedor se degradan a una velocidad preocupante                                 |
| Criticidad C2       | El o los servicios del Proveedor se deterioran progresivamente con el tiempo                             |
| Criticidad C3       | El o los servicios del Proveedor presentan uno o más inconvenientes sin consecuencias significativas     |

-   Con base en un análisis exhaustivo de la situación, que toma en cuenta los elementos que determinan el impacto y la criticidad, se asigna una prioridad al ticket de acuerdo con la matriz de decisión a continuación:

| Nivel de impacto <br/> \ Nivel de criticidad | Impacto I1       | Impacto I2       | Impacto I3       |
| -------------------------------------------- | ---------------- | ---------------- | ---------------- |
| Criticidad C1                                | Prioridad **P1** | Prioridad **P2** | Prioridad **P3** |
| Criticidad C2                                | Prioridad **P2** | Prioridad **P3** | Prioridad **P4** |
| Criticidad C3                                | Prioridad **P3** | Prioridad **P4** | Prioridad **P5** |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el siguiente capítulo.

### 7.6.5. Idioma y localización del servicio de soporte

El soporte es proporcionado por el Proveedor al CLIENTE como mínimo en idioma francés. El soporte también puede proporcionarse en idioma inglés.

Las operaciones del servicio de soporte del Proveedor para la oferta de servicio de infraestructura calificada SecNumCloud están ubicadas en la Unión Europea.

# 8. Compromisos y niveles de servicio

El Proveedor se compromete a garantizar una vigilancia continua del rendimiento y la integridad de seguridad de su infraestructura técnica que entrega el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, que es objeto de un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Proveedor o tras una notificación por un usuario del CLIENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, para garantizar un cálculo preciso y justo del tiempo de indisponibilidad.

El final de la indisponibilidad está oficialmente marcado por la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor o por un retorno del usuario, asegurando así una reanudación efectiva de las operaciones y una medida fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura

El Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican siempre que el CLIENTE implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la Región concerniente.

En ausencia del cumplimiento de estas condiciones por parte del CLIENTE,
este se verá en la incapacidad de reivindicar la aplicación de los
SLAs concernientes, los cuales están específicamente identificados con un
asterisco (\*). La accesibilidad a los SLAs se efectúa vía la interfaz
CLIENTE. Las medidas son calculadas mensualmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilidad de la potencia de cálculo (Compute): tasa de disponibilidad garantizada de 99.99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilidad del almacenamiento: tasa de disponibilidad garantizada de 99.99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 3     : IC-INFRA_SNC-03** – Fiabilidad de la copia de seguridad: tasa de disponibilidad garantizada de 99.99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada de 99.99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 5     : IC-INFRA_SNC-05** – Acceso a Internet: tasa de disponibilidad garantizada de 99.99%, calculada sobre una base 24h/24, 7d/7.

_**Notas**_ :

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento de internet para
limitar el impacto de este ataque y salvaguardar su infraestructura. En particular, si una dirección IP perteneciente al CLIENTE es objetivo, el Proveedor puede recurrir a la técnica de blackholing
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP atacada en sus proveedores, con el fin de proteger los recursos del CLIENTE, así como los de otros CLIENTES
y la infraestructura del Proveedor. El Proveedor anima encarecidamente al CLIENTE a adoptar medidas similares, tales como el uso de software de firewall de
aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*

- *El Prestador insiste en la necesidad de que el CLIENTE minimice las aperturas de flujos, evitando especialmente hacer accesibles los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde toda la Internet (subred 0.0.0.0/0), así como los protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz del CLIENTE

-   SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada del 97%, asegurada en todo momento, 24 horas al día y 7 días a la semana.
-   SLA 7: IC-INFRA_SNC-07 -- Acceso a las API de control del Servicio: una disponibilidad del 99.9%, calculada sobre una base de 24h/24, 7d/7.

## 8.3. Compromiso de disponibilidad del soporte

- **SLA 8      : IC-INFRA_SNC-08** – Aquí están los compromisos de rendimiento del soporte técnico del Prestador para los incidentes, excluyendo mantenimientos programados:

| Prioridad        | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| --------------- | ---------------------------------------- | ---------------------- |
| Prioridad **P1** | 30min                                    | 95%                    |
| Prioridad **P2** | 2h                                       | 90%                    |
| Prioridad **P3** | 4h                                       | 90%                    |
| Prioridad **P4** | 24h                                      | 85%                    |
| Prioridad **P5** | 48h                                      | 85%                    |

- **SLA 9      : IC-INFRA_SNC-09** – Aquí están los compromisos de rendimiento del soporte técnico del Prestador para las solicitudes de servicio:

|                     | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| ------------------- | ---------------------------------------- | ---------------------- |
| Solicitud de servicio | 4h                                     | 90%                    |

*Nota:*

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el CLIENTE abre el ticket y la primera intervención del soporte del Prestador.*
- *La investigación de incidentes que involucren a los CLIENTEs no incluirá intervención remota en los servidores alojados del CLIENTE. Esta asistencia se limitará a la explicación de las métricas disponibles relativas al entorno del CLIENTE, para facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Sobre la base de los resultados de este análisis, se podrán sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento de objetos S3

- **SLA 10      : IC-INFRA_SNC-10** – Aquí están los compromisos de disponibilidad para el almacenamiento de objetos S3:

| Indicador        | Compromiso                                             | Objetivo de disponibilidad       |
| ---------------- | ------------------------------------------------------ | ------------------------------- |
| IC-INFRA-SNC-10.1 | Durabilidad del almacenamiento de un objeto en una región | 99.9999999% / año                |
| IC-INFRA-SNC-10.2 | Disponibilidad de la API de Almacenamiento de Objetos S3 | 99.99%                          |
| IC-INFRA-SNC-10.3 | Latencia máxima de acceso a un objeto en una región     | 150 ms                          |

Notas:

- El Servicio de Almacenamiento de Objetos está específicamente diseñado para el almacenamiento de objetos y debe utilizarse solo para este propósito, **excluyendo categóricamente su uso en modo bloque**. Utilizar el modo bloque por métodos indirectos, incluyendo por ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una infracción de los términos de uso estipulados. Ningún incidente, fallo o daño resultante de este uso no conforme estará cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en este convenio de servicios.
- La garantía de durabilidad está condicionada a un uso de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de los datos, ya sea intencional o accidental, resultante de acciones emprendidas por el CLIENTE.

## 8.5. Precisión sobre el compromiso de respaldo

La estrategia de respaldo desplegada para el CLIENTE, está condicionada a la suscripción de las unidades de obra adecuadas.

El Prestador se compromete a poner a disposición una solución de respaldo que permitirá al CLIENTE aplicar las políticas de respaldos deseadas.

Se precisa que el alcance del Prestador se detiene en la puesta a disposición de un servicio de respaldo y que es responsabilidad del CLIENTE supervisar a través de la interfaz del CLIENTE la correcta ejecución de las políticas asociadas.

Se precisa que la gestión de capacidades de almacenamiento del espacio de almacenamiento dedicado a los respaldos, queda a cargo y responsabilidad del CLIENTE. El Prestador pone a disposición la tasa de uso a través de la consola.

*Ejemplo: No respaldo de una máquina virtual:*

*El CLIENTE tiene la responsabilidad de verificar / supervisar la correcta ejecución de las políticas de respaldo, en caso de que el CLIENTE constate que una máquina virtual no está respaldada, debe verificar la causa, el CLIENTE podrá solicitar al Soporte del Prestador según el nivel de soporte suscrito para ser asistido.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9**, será aplicable exclusivamente en caso de un Incidente del servicio de respaldo.

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Prestador

El Prestador se compromete a:

- informar adecuadamente a su CLIENTE (por ejemplo, en caso de límite de capacidad de recursos técnicos que ofrecen el Servicio).

- informar formalmente al CLIENTE y dentro de un plazo de un mes, de cualquier cambio legal, organizacional o técnico que pueda tener un impacto en la conformidad del Servicio con las exigencias de protección contra las leyes extracomunitarias (19.6 del referencial SNC v3.2).

- proporcionar al CLIENTE interfaces y servicios que estén al menos en francés.

- estudiar y tener en cuenta las exigencias sectoriales específicas relacionadas con los tipos de información confiada por el CLIENTE en el marco de la implementación del servicio y dentro del límite de las responsabilidades del Prestador.

- no divulgar ninguna información relacionada con la prestación a terceros, excepto con la autorización formal y escrita del CLIENTE.

- poner a disposición toda la información necesaria para la realización de auditorías de conformidad de acuerdo con las disposiciones del artículo 28 del RGPD.

- informar al CLIENTE, mediante este Convenio de servicio, de cualquier Incidente de seguridad que impacte el Servicio o el uso que el CLIENTE haga del Servicio (incluidos los datos del CLIENTE).

- autorizar a un proveedor de auditoría de la seguridad de los sistemas de información (PASSI) calificado, designado por el Prestador, a auditar el servicio y su sistema de información, de acuerdo con el plan de control del SecNumCloud del Prestador. Además, el Prestador se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, realizadas por el cliente o un tercero designado.

- proporcionar, como subcontratista, conforme al artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y asesoramiento al CLIENTE alertando de cualquier instrucción emitida por éste que sea susceptible de constituir una violación de las reglas de protección de datos.

- notificar por escrito, cuando un proyecto afecte o sea susceptible de afectar el nivel de seguridad del Servicio, al CLIENTE sobre los impactos potenciales, las medidas de mitigación implementadas y los riesgos residuales que lo afectan.

- documentar e implementar todos los procedimientos necesarios para cumplir con las exigencias legales, reglamentarias y contractuales aplicables al servicio, así como las necesidades de seguridad específicas del CLIENTE, definidas por éste y previstas en el Contrato. A solicitud del CLIENTE, el módulo de Documentación de la interfaz del CLIENTE permitirá un intercambio seguro de estos documentos.

- proporcionar, a solicitud del CLIENTE, los elementos de apreciación de los riesgos relativos a la sujeción de los datos del CLIENTE a la jurisdicción de un estado no miembro de la Unión Europea.

A solicitud formal y escrita del CLIENTE, el Prestador se compromete a:

1. Poner a disposición del CLIENTE el reglamento interno y la carta de ética del Prestador;

2. Poner a disposición del CLIENTE las sanciones aplicables en caso de infracción a la política de seguridad;

3. Proporcionar al CLIENTE todos los eventos que le conciernen en los elementos de registro del Servicio;

4. Al final del Contrato, el Prestador se compromete a eliminar los datos y Datos técnicos relacionados con el CLIENTE, de acuerdo con el "procedimiento de borrado de datos al final del Contrato" descrito en este Convenio de servicio.

5. asegurar un borrado seguro de todos los datos del CLIENTE mediante la reescritura completa de cualquier soporte que haya alojado sus datos en el marco del Servicio.

6. proporcionar la lista completa de terceros autorizados a acceder a las infraestructuras que albergan los datos.
Le Proveedor mantendrá actualizada y pondrá a disposición del CLIENTE la lista exhaustiva de terceros autorizados a acceder a las infraestructuras que contienen los datos, informando a este último de cualquier cambio relativo a los subcontratistas. El Proveedor y todas sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber, la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho y el respeto de los Derechos Humanos. El servicio proporcionado por el Proveedor cumple con la legislación vigente en materia de derechos fundamentales y con los valores de la Unión Europea relativos al respeto de la dignidad humana, la libertad, la igualdad, la democracia y el estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor

En virtud de todas las definiciones y condiciones mencionadas en el presente Acuerdo de servicio, las responsabilidades del Proveedor se limitan de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección « Modelo de responsabilidades compartidas » del presente Acuerdo de servicio, limita de hecho la implicación del Proveedor en las capas de funcionamiento que están "por encima" de la provisión de recursos de cálculo, red, almacenamiento y respaldo. Esto excluye en particular pero no se limita a:

    - La gestión de lo que está instalado en las máquinas virtuales (SO, middleware, aplicaciones, etc.);

    - La actualización de los SO y otros softwares instalados por el CLIENTE en sus máquinas en sus Tenants;

    - La seguridad de los programas, softwares y aplicaciones instalados en las máquinas virtuales;

    - La actualización de las máquinas virtuales;

    - El respaldo de los datos a nivel aplicativo.

2. El Proveedor no puede asumir compromisos de respaldo de los Tenants del CLIENTE sin que el CLIENTE haya suscrito previamente las unidades de obra adecuadas.

3. El Proveedor no puede arrogarse la propiedad de los datos transmitidos y generados por el CLIENTE. De hecho, estos pertenecen al CLIENTE.

4. El Proveedor subraya que en ningún caso puede explotar los datos transmitidos y generados por el CLIENTE sin la validación previa de este último.

5. El Proveedor se exime de toda responsabilidad sobre los componentes físicamente alojados y gestionados por el Proveedor, pero que son propiedad directa del CLIENTE o de un tercero con el cual el CLIENTE ha contratado. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y, por lo tanto, está fuera del alcance del presente Acuerdo de servicio. Es responsabilidad del CLIENTE evaluar el nivel de adherencia o dependencia que estos componentes introducen con respecto al Servicio IaaS calificado SecNumCloud.

## 9.3. Limitación de acceso

En el marco del Servicio, el Proveedor tiene estrictamente prohibido acceder a los Tenants que pertenecen al CLIENTE sin autorización previa. Es responsabilidad del CLIENTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el CLIENTE.

El CLIENTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por terceros involucrados en la prestación de servicio del Proveedor está estrictamente prohibido. En el caso de que una exigencia técnica específica requiera dicho acceso, este solo podrá establecerse después de haber notificado claramente al CLIENTE, proporcionar una justificación detallada y obtener su acuerdo por escrito.

Esta medida garantiza el control y la seguridad de los datos del CLIENTE, asegurando que cualquier excepción a la regla está debidamente autorizada y documentada.

## 9.4. Responsabilidades de terceros que participan en la prestación del servicio Secure Temple

El Proveedor controla la lista de terceros socios que participan en la prestación del Servicio. Estos terceros son los editores, proveedores (del Proveedor) y otros suministradores que participan en la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

- El Proveedor exige a los terceros que participan en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio Secure Temple;

- El Proveedor contrata, con cada uno de los terceros que participan en la implementación del servicio, cláusulas de auditoría que permiten a un organismo de calificación verificar que estos terceros cumplen con los requisitos legales y los requisitos SNC, permitiendo al Proveedor cumplir con sus compromisos en el presente Acuerdo de servicio.

- El Proveedor implementa un procedimiento para controlar regularmente las medidas implementadas por los terceros que participan en la implementación del servicio para cumplir con los requisitos del Proveedor para cumplir con sus compromisos en el presente Acuerdo de servicio.

- El Proveedor implementa un procedimiento de seguimiento de los cambios realizados por los terceros que participan en la implementación del servicio que puedan afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del CLIENTE

Como recordatorio, el Proveedor proporciona al CLIENTE una plataforma para la ejecución de máquinas virtuales, la configuración de las mismas es responsabilidad del CLIENTE. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Proveedor define a través de sus interfaces políticas de respaldo automático. Pero es responsabilidad del CLIENTE activar estas políticas de respaldo y, por lo tanto, activar las máquinas virtuales.

El CLIENTE autoriza a la ANSSI y al organismo de calificación SNC a auditar el Servicio y la infraestructura técnica que proporciona el Servicio.

## 9.6. Derechos del CLIENTE

En cualquier momento durante la relación contractual, el CLIENTE puede presentar una reclamación relativa al servicio calificado ante la ANSSI.

En cualquier momento, el CLIENTE puede solicitar al Proveedor que le facilite su reglamento interno y su carta de ética.

## 9.7. Eliminación de datos al finalizar el Contrato

Al finalizar el contrato, ya sea que expire o se rescinda por cualquier razón, el Proveedor se compromete a proceder a la eliminación segura de la totalidad de los datos del CLIENTE, incluidos los datos técnicos. El Proveedor se asegurará de comunicar al CLIENTE un aviso formal, respetando un plazo de veintiún (21) días naturales. Los datos del CLIENTE serán eliminados en un plazo máximo de treinta (30) días a partir de esta notificación.

Para certificar esta eliminación, el Proveedor entregará al CLIENTE un certificado que confirme la eliminación de los datos.

# 10. Ciclo de vida del presente Acuerdo de servicio

## 10.1. Entrada en vigor del Acuerdo de servicio

El presente Acuerdo de servicio entra en vigor el día de su firma por el CLIENTE.

La recopilación, manipulación, almacenamiento y procesamiento de datos realizados en el marco de la pre-venta, la implementación, la finalización del Servicio, se llevan a cabo de acuerdo con la legislación vigente.

## 10.2. Evoluciones del Acuerdo de servicio

Las modificaciones o adiciones al presente Acuerdo de servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobierno designados para tal fin. Estas propuestas de cambio serán examinadas por las Partes, facultadas para determinar los aspectos que requieren una formalización escrita.

Se acuerda que cualquier evolución del Acuerdo de servicio, una vez validada, que altere las condiciones financieras inicialmente establecidas, requerirá la elaboración y firma de una enmienda al Contrato vigente.

Los factores que pueden inducir una revisión de este Acuerdo de servicio incluyen, pero no se limitan a:

- La evolución de la infraestructura técnica que proporciona el Servicio IaaS;
- Los ajustes realizados a los servicios implementados por el Proveedor para proporcionar el Servicio;
- Las variaciones de los compromisos adquiridos y las sanciones aplicables;
- Las reconfiguraciones organizacionales dentro del CLIENTE o del Proveedor;
- La expansión o reducción del alcance del Servicio.

La gestión de las versiones y las revisiones del Acuerdo de servicio se consigna en el preámbulo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el CLIENTE

Las evoluciones del Acuerdo de servicio pueden ser originadas, notablemente, por:

- Una evolución de la infraestructura gestionada por el Proveedor;

- Una modificación de los servicios implementados por el Proveedor;

- Una modificación de los compromisos de niveles de servicio por el Proveedor.

### 10.2.2. Evoluciones desencadenadas por el Proveedor

Cualquier cambio en el Acuerdo de servicio está sujeto a la aceptación del CLIENTE. Se entiende que cualquier cambio o adición
validados que modifican los elementos financieros del Contrato, pueden implicar la firma de una enmienda al mismo.

## 10.3. Reversibilidad

Además, Cloud Temple se compromete a permitir una revisión del presente Acuerdo de servicio (que prevea, en particular, su rescisión) sin penalización
para el CLIENTE en caso de pérdida de la calificación SecNumCloud.
Les Services ne comprennent pas d'obligation de réversibilité (à savoir, l'aide au Client pour qu'il puisse migrer son système vers un autre" Prestataire) à l'exception de la mise à disposition du COMMANDITAIRE par le Prestataire de l'interface COMMANDITAIRE permettant au COMMANDITAIRE de sauvegardar y recuperar sus datos inclusive las datos de configuración de su sistema de información vía una de las modalidades técnicas siguientes a elección del COMMANDITAIRE: la puesta a disposición de archivos siguiendo uno o varios formatos documentados y explotables fuera del servicio provisto por el Prestataire o bien vía la puesta en marcha de interfaces técnicas permitiendo acceso a los datos siguiendo un esquema documentado y explotable (API).

El COMMANDITAIRE, único dueño de su sistema, debe hacer todo lo necesario para facilitar esta operación en cuanto sea necesario (lo que implica, en particular, que establezca una documentación rigurosa a tal efecto) y la elaboración de planes de reversibilidad. En caso de que el COMMANDITAIRE necesite un servicio complementario, el Prestataire puede proponer una misión de asesoría al respecto en el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes y de interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de esta Convención de servicio

-   Siniestras

-   Averías y fallos

-   Incidentes de seguridad:

-   Impactando la disponibilidad del servicio

-   Impactando la confidencialidad del servicio

-   Impactando la integridad del servicio

#### 11.1.1.2. Tratamiento de los incidentes

-   Plazos

-   Acciones a posteriori

-   Archivar los documentos detallando los incidentes de seguridad.

-   Notificación de violación de datos de carácter personal (en línea): https://notifications.cnil.fr/notifications/index

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad

El COMMANDITAIRE tiene la responsabilidad de elegir los niveles de gravedad de los Incidentes de seguridad para los cuales desea ser informado, por ejemplo, mediante su formalización en un PAS aplicable al Servicio.

Por defecto, el COMMANDITAIRE es informado:

-   De los incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de tratamientos de la presente Convención de servicio);

-   De las violaciones de datos de carácter personal por las cuales el COMMANDITAIRE es responsable del tratamiento;

-   De las violaciones de datos de carácter personal por las que el Prestataire es responsable del tratamiento y que involucren datos personales del COMMANDITAIRE.

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

El mantenimiento asegurado consiste en la implementación:

-   Del plan de mantenimiento en condiciones operativas del Servicio para asegurar buenos indicadores de disponibilidad tal como se compromete el Prestataire más arriba;

-   Del plan de PCA/PRA si se suscribe por el COMMANDITAIRE activado según los posibles incidentes que ocurran.

### 11.2.2. Accesos remotos de Cloud Temple en el perímetro del COMMANDITAIRE

El Prestataire se prohíbe, en el marco de la presente Convención de servicio, todo acceso a los Tenants y al espacio de la interfaz del COMMANDITAIRE.

Corresponderá al COMMANDITAIRE proporcionar los accesos necesarios al personal del Prestataire. El COMMANDITAIRE reconoce que los accesos serán utilizados en el marco del hospedaje y en última instancia de la gestión de servicios (si se suscribe por el COMMANDITAIRE).

### 11.2.3. Accesos remotos de terceros participantes en la provisión del servicio en el perímetro del COMMANDITAIRE

No se autoriza ningún acceso remoto de terceros participantes en la provisión del Servicio.

Si una necesidad técnica hiciera necesario este caso, entonces ese tipo de acceso solo se realizaría tras la notificación del COMMANDITAIRE, justificación y obtención de su acuerdo escrito.

# 12. Procedimiento de borrado de datos al final del Contrato

Al finalizar el Contrato, ya sea que el Contrato haya llegado a su término o por cualquier otra causa, el Prestataire asegurará el borrado seguro de la totalidad de los datos tratados en el marco del Servicio, incluidos los Datos técnicos del COMMANDITAIRE. El Prestataire dará un aviso formal respetando un plazo de veintiún (21) días calendario. Los datos del COMMANDITAIRE serán eliminados en un plazo máximo de treinta (30) días después de la notificación. El Prestataire proporciona un certificado de eliminación de datos al COMMANDITAIRE.

# 13. Derecho aplicable

## 13.1. De manera general

La ley aplicable y a la cual está sometida la presente Convención de servicio es la ley francesa.

## 13.2. Cumplimiento de la ley y las regulaciones aplicables

El Prestataire se compromete en los siguientes puntos:

-   La identificación de los requisitos legales y regulatorios aplicables en el marco del Servicio;

-   El cumplimiento de los requisitos legales y regulatorios aplicables a los datos confiados al Prestataire;

-   El cumplimiento de la Ley de informática y libertades y del RGPD;

-   La implementación de medidas de protección de datos personales;

-   La implementación de un proceso de seguimiento legal y regulatorio;

-   Disponer y mantener relaciones apropiadas o monitoreo con las autoridades sectoriales en relación con la naturaleza de los datos tratados en el marco del Servicio. Esto incluye, en particular, ANSSI, CERT-FR y CNIL.

## 13.3. RGPD

Actuando en calidad de subcontratista en el sentido del artículo 28 del Reglamento general sobre la protección de datos (RGPD), el Prestataire se compromete:

-   A asegurar la transparencia y la trazabilidad;

-   A designar un DPO encargado de definir e implementar las medidas de protección de los datos de carácter personal;

-   Brindar asistencia y asesoramiento al COMMANDITAIRE advirtiéndole si una instrucción de este último constituye una violación de las normas de protección de datos personales si el Prestataire tiene los medios para identificarlo;

-   Una garantía de seguridad sobre los datos tratados (debido a la calificación SecNumCloud).

## 13.4. Protección frente al derecho extraeuropeo

En caso de recurso por parte del Prestataire, en el marco del Servicio, al servicio de una empresa tercera, incluidas subcontratistas, con sede estatutaria, administración central o principal establecimiento en un Estado no miembro de la Unión Europea o perteneciente o estando controlada por una empresa tercera domiciliada fuera de la Unión Europea, el Prestataire se compromete a que dicha empresa tercera no tendrá ningún acceso a los datos operados por el servicio 'Secure Temple'.

Para recordar, los datos mencionados son aquellos que son confiados al Prestataire por el COMMANDITAIRE, así como todos los Datos técnicos que incluyen información sobre los COMMANDITAIRES.

Para los propósitos del presente artículo, la noción de control se entiende como la mencionada en el II del artículo L233-3 del código de comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Para Cloud Temple, el PRESTATAIRE

Para \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMMANDITAIRE