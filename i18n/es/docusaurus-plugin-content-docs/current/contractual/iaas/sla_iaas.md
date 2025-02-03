---
title: Convention de Service IaaS
---
  
![Logo Cloud Temple](images/ct.png)

# 1. **CONVENTION DE SERVICES IaaS**

| **Destinataires :**                  | **COMMANDITAIRE**                               |
| :----------------------------------- | :---------------------------------------------- |
| **Référence du documents**           | CT.AM.JUR.ANX_Convention de Services_IaaS_v2.0  |
| **Vos interlocuteurs**               | *Prénom* *Nom*                                  |
|                                      | Account Manager                                 |
|                                      | e-mail : *prenom.nom*@cloud-temple.com          |
| **Date de dernière mise à jour**     | 03/04/2024                                      |
| **Date de validation contractuelle** | Jour JJ AAAA                                    |

----------------------------------------------------------------------------------

| **Version** | **Date**   | **Action**                             | **Auteur**      |
| ----------- | ---------- | -------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Rédaction initiale                     | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enrichissement                         | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Intégration Indicateurs                | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modification pied de page              | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modification Capital et Enrichissement | Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enrichissement                         | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enrichissement                         | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Ajustements conformité SNC             | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publication                            | Lorena ALCALDE  |

----------------------------------------------------------------------------------

# 2. **TABLE DES MATIÈRES**

- [1. **CONVENTION DE SERVICES IaaS**](#1-convention-de-services-iaas)
- [2. **TABLE DES MATIÈRES**](#2-table-des-matières)
- [3. Préliminaire et Glossaire](#3-préliminaire-et-glossaire)
  - [3.1. Préliminaire](#31-préliminaire)
  - [3.2. Glossaire](#32-glossaire)
- [4. Acronymes](#4-acronymes)
- [5. Objet de la présente Convention de service](#5-objet-de-la-présente-convention-de-service)
- [6. Audit](#6-audit)
- [7. Description du Service](#7-description-du-service)
  - [7.1. Modèle de responsabilité partagé](#71-modèle-de-responsabilité-partagé)
  - [7.2. Présentation détaillée du périmètre du Service](#72-présentation-détaillée-du-périmètre-du-service)
    - [7.2.1. Infrastructures Datacenters](#721-infrastructures-datacenters)
    - [7.2.2. Infrastructure logicielle de pilotage du Service](#722-infrastructure-logicielle-de-pilotage-du-service)
    - [7.2.3. Infrastructures de calcul](#723-infrastructures-de-calcul)
    - [7.2.4. Infrastructure de stockage](#724-infrastructure-de-stockage)
    - [7.2.5. Infrastructure réseau globale](#725-infrastructure-réseau-globale)
    - [7.2.6. Infrastructure de sauvegarde](#726-infrastructure-de-sauvegarde)
    - [7.2.7. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité](#727-mise-en-œuvre-de-solutions-de-reprise-dactivité-ou-de-continuité-dactivité)
  - [7.3. Limitations des services dans le modèle IaaS qualifié](#73-limitations-des-services-dans-le-modèle-iaas-qualifié)
    - [7.3.1. Services managés en RUN](#731-services-managés-en-run)
    - [7.3.2. Configuration du secours](#732-configuration-du-secours)
    - [7.3.3. Configuration de la sauvegarde](#733-configuration-de-la-sauvegarde)
  - [7.4. Mise en œuvre du service](#74-mise-en-œuvre-du-service)
    - [7.4.1. Prérequis techniques](#741-prérequis-techniques)
  - [7.5. Localisation du service en France](#75-localisation-du-service-en-france)
    - [7.5.1. Localisation des Datacenters hébergeant le Service](#751-localisation-des-datacenters-hébergeant-le-service)
    - [7.5.2. Localisation des agences Cloud Temple opérant le service](#752-localisation-des-agences-cloud-temple-opérant-le-service)
  - [7.6. Support](#76-support)
    - [7.6.1. Nature du support accompagnant le service](#761-nature-du-support-accompagnant-le-service)
    - [7.6.2. Sollicitation du service support technique](#762-sollicitation-du-service-support-technique)
    - [7.6.3. Processus de gestion des Incidents](#763-processus-de-gestion-des-incidents)
    - [7.6.4. Processus de priorisation des traitements](#764-processus-de-priorisation-des-traitements)
    - [7.6.5. Langue et localisation du service de support](#765-langue-et-localisation-du-service-de-support)
- [8. Engagements et niveaux de services](#8-engagements-et-niveaux-de-services)
  - [8.1. Engagements de disponibilité de l'infrastructure](#81-engagements-de-disponibilité-de-linfrastructure)
  - [8.2. Engagement de disponibilité de l'interface COMMANDITAIRE](#82-engagement-de-disponibilité-de-linterface-commanditaire)
  - [8.3. Engagement de disponibilité du support](#83-engagement-de-disponibilité-du-support)
  - [8.4. Engagement de disponibilité du stockage objet S3](#84-engagement-de-disponibilité-du-stockage-objet-s3)
  - [8.5. Précision concernant l'engagement de sauvegarde](#85-précision-concernant-lengagement-de-sauvegarde)
- [9. Organisation de la relation contractuelle](#9-organisation-de-la-relation-contractuelle)
  - [9.1. Responsabilités du Prestataire](#91-responsabilités-du-prestataire)
  - [9.2. Limitation des responsabilités du Prestataire](#92-limitation-des-responsabilités-du-prestataire)
  - [9.3. Limitation d'accès](#93-limitation-daccès)
  - [9.4. Responsabilités des tiers participant à la fourniture du service Secure Temple](#94-responsabilités-des-tiers-participant-à-la-fourniture-du-service-secure-temple)
  - [9.5. Responsabilités et obligations du COMMANDITAIRE](#95-responsabilités-et-obligations-du-commanditaire)
  - [9.6. Droits du COMMANDITAIRE](#96-droits-du-commanditaire)
  - [9.7. Effacement des données en fin de Contrat](#97-effacement-des-données-en-fin-de-contrat)
- [10. Cycle de vie de la présente Convention de service](#10-cycle-de-vie-de-la-présente-convention-de-service)
  - [10.1. Entrée en effet de la Convention de service](#101-entrée-en-effet-de-la-convention-de-service)
  - [10.2. Évolutions de la Convention de service](#102-évolutions-de-la-convention-de-service)
    - [10.2.1. Évolutions déclenchées par le COMMANDITAIRE](#1021-évolutions-déclenchées-par-le-commanditaire)
    - [10.2.2. Évolutions déclenchées par le Prestataire](#1022-évolutions-déclenchées-par-le-prestataire)
  - [10.3. Réversibilité](#103-réversibilité)
- [11. Disponibilité, continuité et restauration du service](#11-disponibilité-continuité-et-restauration-du-service)
  - [11.1. Gestion des Incidents et des interruptions](#111-gestion-des-incidents-et-des-interruptions)
    - [11.1.1. Incidents](#1111-incidents)
      - [11.1.1.1. Types d'Incidents traités dans le cadre de cette Convention de service](#11111-types-dincidents-traités-dans-le-cadre-de-cette-convention-de-service)
      - [11.1.1.2. Traitement des incidents](#11112-traitement-des-incidents)
      - [11.1.1.3. Niveau de notification des Incidents de sécurité](#11113-niveau-de-notification-des-incidents-de-sécurité)
  - [11.2. Maintenance du Service](#112-maintenance-du-service)
    - [11.2.1. Nature de la maintenance](#1121-nature-de-la-maintenance)
    - [11.2.2. Accès distants de Cloud Temple sur le périmètre du COMMANDITAIRE](#1122-accès-distants-de-cloud-temple-sur-le-périmètre-du-commanditaire)
    - [11.2.3. Accès distants de tiers participant à la fourniture du service sur le périmètre du COMMANDITAIRE](#1123-accès-distants-de-tiers-participant-à-la-fourniture-du-service-sur-le-périmètre-du-commanditaire)
- [12. Procédure d'effacement des données en fin de Contrat](#12-procédure-deffacement-des-données-en-fin-de-contrat)
- [13. Droit applicable](#13-droit-applicable)
  - [13.1. De manière générale](#131-de-manière-générale)
  - [13.2. Respect du droit et des réglementations applicables](#132-respect-du-droit-et-des-réglementations-applicables)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protection vis à vis du droit extra-européen](#134-protection-vis-à-vis-du-droit-extra-européen)
- [14. SIGNATURES](#14-signatures)

----------------------------------------------------------------------------------

# 3. Préliminaire et Glossaire

## 3.1. Préliminaire

El presente documento formaliza la Convención de servicio asociada al servicio IaaS calificado SecNumCloud bajo la denominación de « *Secure Temple*».

\"La presente convención de servicio complementa y es complementaria a los términos y condiciones generales de venta y utilización del Proveedor. Se entiende que los documentos contractuales se interpretan de manera coherente entre sí. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1. Términos y Condiciones Generales de Venta y Uso (CGVU)
2. Convención de Servicio SecNumCloud IaaS
3. Convención de Servicio SecNumCloud PaaS
4. Convención específica particular
5. Plan de Aseguramiento de la Seguridad (PAS)
6. Términos y Condiciones Particulares de Uso (CPU)

## 3.2. Glossaire

En la presente Convención de servicio, el **COMMANDITAIRE**, el **Proveedor** y las **Partes** están identificados en el Contrato
al cual es anexo la presente Convención de servicio.

Las expresiones a continuación empleadas en la presente Convención de servicio serán interpretadas conforme a las definiciones que se les
atribuyen a continuación:

- **Changement :** Todo añadido, modificación o eliminación que impacte el Servicio, habiendo sido autorizado, planificado o gestionado.
- **Cambio estándar:** Cambio sujeto a un procedimiento, cuyas modalidades de implementación y los impactos (incluidos financieros) son conocidos y aceptados de antemano por las Partes. Luego se integra en el catálogo de cambios estándar, y según los casos puede tener un GTI y un GTR.

- **Contrato:** designa el contrato suscrito por el MANDANTE con el Proveedor para permitir al MANDANTE beneficiarse del Servicio, y al cual se adjunta el presente Acuerdo de servicio.

- ***Acuerdo de servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y en conformidad con los requisitos del Referencial SecNumCloud.

- **Solicitud de servicio:** solicitud del MANDANTE hacia el Proveedor en el marco del Servicio, que cubre las operaciones no realizables por el MANDANTE desde la interfaz del MANDANTE y las solicitudes de soporte en el marco del Servicio. Las solicitudes de servicio están limitadas a las previstas en el Contrato o en el presente Acuerdo de servicio.

- **Disponibilidad:** Capacidad para asegurar la disponibilidad y el mantenimiento del rendimiento óptimo del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

- **Datos técnicos:** comprende el conjunto de datos manipulados para entregar el Servicio, notablemente incluyendo la identidad de los beneficiarios y administradores de la infraestructura técnica, registros de la infraestructura técnica, configuración de accesos, directorio, certificados...

- **Evento:** Un "evento" es cualquier ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

- **Hipervisor:** Sistema operativo que permite la ejecución de máquinas virtuales en una hoja de cálculo.

- **Incidente:** Cualquier evento inesperado que interrumpa el funcionamiento normal del Servicio o comprometa la seguridad de los datos.

- **Incidente de seguridad:** Cualquier evento dentro del alcance del Servicio:

  - De naturaleza maliciosa intencionada;
  - De naturaleza accidental que comprometa la integridad, confidencialidad o trazabilidad del Servicio o de los datos del MANDANTE;
  - Que comprometa las medidas de seguridad existentes.
    Las interrupciones en la Disponibilidad de origen no malintencionado no se consideran como un Incidente de seguridad (fallo de hardware, error, mal funcionamiento, desastre natural...).

- **Interfaz del MANDANTE:** Interfaz de administración del Servicio puesta a disposición del MANDANTE por el Proveedor, que agrupa una consola de administración web y una API.

- **Puesta en producción:** acción(es) de administración para realizar el Cambio cuando este es aprobado (el cambio, en el sentido ITIL, solo se refiere a la gestión del cambio y no a su realización/concreción).

- **Problema:** causa de uno o más Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo).

- **Región:** designa un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, proporcionando servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento y la conformidad regulatoria local.

- **Servicio:** designa el servicio IaaS calificado SecNumCloud "Secure Temple", entregado al MANDANTE por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, tal como se describe en la sección "Descripción del Servicio" del presente Acuerdo de servicio.

- **Secure Temple:** designa el servicio IaaS calificado SecNumCloud, ofrecido por la empresa Cloud Temple, como se define en el certificado consultable en el sitio de la ANSSI y proporcionado como anexo del presente Acuerdo de servicio.

- **Sinestro:** designa un evento grave de origen natural o humano, accidental o intencional, que cause pérdidas y daños importantes a la Parte afectada.

- **Supervisión:** Supervisión de un Sistema de Información o Servicio, que implica la recopilación de diversos datos como mediciones y alarmas. Esta actividad se limita a la observación y el seguimiento, sin intervenir directamente sobre los elementos supervisados, una prerrogativa que pertenece a las operaciones de Administración.

- **Tenant:** Una instancia aislada reservada para un usuario o grupo de usuarios, que comparten una infraestructura común manteniendo la independencia y seguridad de los datos y aplicaciones.

- **Zona de Disponibilidad (AZ) (Availability zone):** Una sección específica e aislada de la infraestructura de computación en la nube, diseñada para asegurar la alta disponibilidad y resiliencia de los servicios mediante una distribución geográfica de los recursos.

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
  | **MCO**      | Mantenimiento en condiciones operativas                                                 |
  | **MOA**      | Gestión de Proyecto                                                                     |
  | **MOE**      | Gestión de Obra                                                                          |
  | **MSP**      | Proveedor de Servicios Gestionados                                                      |
  | **OS**       | Operating system (sistema operativo)                                                    |
  | **PAQ**      | Plan de Aseguramiento de Calidad                                                        |
  | **PaaS**     | Platform as a Service                                                                   |
  | **PAS**      | Plan de Aseguramiento de Seguridad                                                      |
  | **PASSI**    | Proveedor de Auditoría de Seguridad de Sistemas de Información                          |
  | **RFC**      | Request For Change -- Solicitud de cambio                                               |
  | **RGPD**     | Reglamento General de Protección de Datos (personales)                                  |
  | **RPO**      | Recovery Point Objective -- Frescura de los datos restaurados en caso de Sinestro        |
  | **RTO**      | Recovery Time Objective -- Plazo de recuperación del servicio en caso de Sinestro       |
  | **SDM**      | Service Delivery Manager                                                                |
  | **SLA**      | Service Level Agreement -- Acuerdo sobre niveles de servicio                            |
  | **SNC**      | SecNumCloud                                                                             |
  | **SOC**      | Security Operation Center                                                               |
  | **TMA**      | Soporte externo de aplicaciones                                                         |
  | **UO**       | Unidad de Obra                                                                           |
  | **VABE**     | Validación de Aptitud para la Buena Explotación                                          |
  | **VABF**     | Validación de Aptitud para el Buen Funcionamiento                                      |
  | **VM**       | Virtual Machine (Máquina virtual)                                                       |
  | **VSR**      | Validación de Servicio Regular                                                          |

# 5. Objeto del presente Acuerdo de servicio

El presente Acuerdo de servicio establece los términos y condiciones según los cuales el Proveedor se compromete a entregar el Servicio al
MANDANTE. Su objeto es:

- Precisar los requisitos de rendimiento esperados por el MANDANTE en términos de funcionalidad y fiabilidad del Servicio;

- Enunciar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

- Identificar las normas regulatorias aplicables específicamente al Servicio entregado;

- Asegurar una uniformidad e integridad en la evaluación de la calidad del Servicio;

- Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en caso de que el Proveedor pierda su calificación SecNumCloud, el Contrato podrá ser resuelto de pleno derecho, sin incurrir en sanciones, por el MANDANTE. En tal caso, el Proveedor se compromete a informar al MANDANTE
de esta descalificación mediante el envío de una notificación oficial, mediante una carta certificada con acuse de recibo.
Il convient de noter qu'une modification ou un ajustement de la qualification SecNumCloud ne sera pas interprété comme une révocation de
la qualification initiale.

# 6. Auditoría

El Proveedor se compromete a permitir al CLIENTE, o a cualquier auditor externo y no competidor del Proveedor que este último haya designado, consultar todos los documentos necesarios para la validación del cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización
de auditorías.

Mediante la aceptación de este Acuerdo de servicios, el CLIENTE otorga su autorización explícita a:

1. La Agencia Nacional de la Seguridad de los Sistemas de Información (ANSSI) así como a la entidad de calificación competente para llevar a cabo la verificación de la conformidad del Servicio y su sistema de información con el referencial SecNumCloud.
2. Un proveedor de auditoría de seguridad de sistemas de información, debidamente cualificado PASSI y expresamente designado por el Proveedor, para realizar auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio

## 7.1. Modelo de responsabilidad compartida

El Servicio ofrecido por el Proveedor se caracteriza por la prestación de los siguientes servicios, los cuales se alinean con el principio de responsabilidad compartida presentado en el referencial SecNumCloud:

- La provisión de recursos de cálculo (compute);

- La puesta a disposición de espacios de almacenamiento;

- El acceso a servicios de conectividad de red e internet;

- La oferta de un servicio de respaldo dedicado a las máquinas virtuales.

El modelo de responsabilidades compartido aplicable entre el Proveedor y el CLIENTE en el marco del Servicio se presenta en §7.1.

Se entiende que el Proveedor utilizará su pericia para realizar las Prestaciones según las mejores prácticas profesionales y de acuerdo con los requisitos del referencial SecNumCloud.

El Servicio está cualificado SecNumCloud (ver certificación en Anexo).

## 7.2. Presentación detallada del alcance del Servicio

| Compute               | Recurso de cálculo del Tenant CLIENTE                                                                               |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------ |
| Storage               | Datos de producción del Tenant CLIENTE                                                                             |
| Almacenamiento objeto S3 | puesta a disposición de una infraestructura de almacenamiento objeto soberano multi AZ y compatible con las API S3 estándar. |
| Respaldo              | Módulo suscripción al almacenamiento masivo adecuado                                                                |
| Infraestructura de red| Recurso de red del Tenant CLIENTE                                                                                   |
| Consola CLIENTE       | El servicio que permite al CLIENTE acceder a su servicio IaaS y administrarlo a través de la interfaz Shiva         |
| Soporte               | El servicio de soporte que acompaña a los servicios precedentes y únicamente a estos (*)                            |

*(*) Dentro del límite del alcance del Servicio cualificado SNC y de las responsabilidades del Proveedor en la materia*

### 7.2.1. Infraestructuras de Datacenters

El Servicio incluye la puesta a disposición, para cada Zona de disponibilidad, de las prestaciones cualificadas a continuación:

- Sitio datacenter ubicado en Francia para la Región FR, conforme con las últimas normas tecnológicas, proporcionando un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
- Disponibilidad de salas técnicas dentro de datacenters dedicados a alojar los equipos técnicos indispensables para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado, y otros componentes necesarios;
- Alimentación eléctrica segura, asegurada por dos circuitos eléctricos distintos, garantizando una continuidad de servicio;
- Suministro de servicios de climatización, ajustados para respetar las normas y recomendaciones de los fabricantes de equipos, con el fin de mantener un entorno óptimo para los dispositivos técnicos;
- Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y la seguridad del servicio proporcionado.

El Proveedor garantiza la disponibilidad de servicios avanzados de detección y extinción de incendios, diseñados para identificar y neutralizar eficazmente cualquier inicio de fuego en las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos y los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir riesgos de incendio, minimizar daños potenciales y asegurar la continuidad de las operaciones.

Se informa al CLIENTE que todos los procedimientos y medidas de seguridad implementadas, incluidos los tests anuales de conmutación a los grupos electrógenos, son esenciales para garantizar la continuidad e integridad de los servicios proporcionados. Estas prácticas están diseñadas para minimizar los riesgos de falla y asegurar una reactividad óptima en caso de Incidente. Al aceptar estas condiciones, el cliente reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. Se alienta al CLIENTE a tomar conocimiento de las recomendaciones de seguridad proporcionadas e integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software de gestión del Servicio

El Proveedor proporciona al CLIENTE la consola de administración y la API necesarias para el uso del Servicio. También se compromete a mantener esta consola de administración y la API en óptimas condiciones operacionales y a garantizar su seguridad de manera continua. Esta consola de administración y la API se designan conjuntamente bajo el término « interfaz CLIENTE ».

El Proveedor alerta al CLIENTE de que un uso anormal de la interfaz CLIENTE, especialmente en caso de una sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o al Servicio. Es importante destacar que esta situación no constituye una indisponibilidad del Servicio, sino una acción de protección del Servicio y de la infraestructura del Proveedor; por tanto, el CLIENTE no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Proveedor precisa al CLIENTE que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el CLIENTE envía solicitudes idénticas a una frecuencia superior, su rechazo no podrá ser interpretado como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cálculo

El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el CLIENTE, de los equipos necesarios para la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto incluye:

- La provisión de los chasis técnicos necesarios para el buen funcionamiento de las láminas de cálculo;
- La provisión de las láminas de cálculo en las cantidades especificadas por el CLIENTE y distribuidas según las zonas de disponibilidad de su elección. Es de notar que estas láminas de cálculo están exclusivamente dedicadas al CLIENTE;
- La puesta a disposición de sistemas operativos de tipo hipervisores, así como la garantía del mantenimiento en condiciones operacionales y de seguridad de la infraestructura de software necesaria para la gestión de estos sistemas operativos. Cabe destacar que, aunque el Proveedor es responsable del mantenimiento operacional y de la seguridad global del Servicio, no tiene conocimientos específicos sobre los entornos de producción del CLIENTE ni sobre los requisitos relacionados con sus cargas de trabajo. Por lo tanto, la responsabilidad de decidir la actualización de los sistemas operativos de las láminas de cálculo hipervisores, una acción que podría requerir un reinicio, recae completamente en el CLIENTE. Esta operación puede ser realizada a través de la Interfaz CLIENTE.

La elección del modelo de lámina de cálculo, seleccionado del catálogo ofrecido por el Proveedor, es responsabilidad del CLIENTE.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al CLIENTE de una infraestructura de almacenamiento compartida tipo SAN (Storage Area Network), ofreciendo varios niveles de rendimiento. Este servicio abarca:

- La implementación y el mantenimiento en condiciones operacionales y de seguridad de la red SAN dedicada;
- La instalación y gestión de los arreglos de almacenamiento compartidos entre los clientes, incluyendo su mantenimiento en condiciones operacionales y de seguridad, su supervisión y su metrología;
- La implementación de sistemas automatizados para la asignación de LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del CLIENTE, conforme a los volúmenes suscritos por el CLIENTE.

### 7.2.5. Infraestructura de red global

El Proveedor despliega en el marco del Servicio, una red global facilitando al CLIENTE la accesibilidad de sus sistemas alojados. Este servicio incluye:

- La provisión, el mantenimiento en condiciones operacionales y de seguridad de todas las conexiones de fibra óptica interconectando las diferentes Zonas de disponibilidad;

- La provisión, el mantenimiento en condiciones operacionales y de seguridad de los equipos técnicos necesarios para el buen funcionamiento de la red y la separación de los distintos clientes.

L'interconnexion réseau del Tenant PATROCINADOR, a Internet o a redes privadas, y los equipos de red, enlaces de operador y otros componentes técnicos que realizan esta interconexión, no forman parte del alcance del Servicio. Esta interconexión de red se implementa conforme a las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo

El Proveedor pone a disposición del PATROCINADOR un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus máquinas virtuales. El Proveedor asegura el mantenimiento en condiciones operativas y de seguridad de este servicio de respaldo. El Proveedor garantiza que los respaldos del PATROCINADOR estarán ubicados fuera de la Zona de disponibilidad de las cargas de trabajo respaldadas, con la condición de que el PATROCINADOR haya suscrito las Unidades de obra adecuadas.

Este servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS de los Tenants del PATROCINADOR en el marco del Servicio. La elaboración y aplicación de una política de respaldo adecuada por parte del PATROCINADOR dependen de la suscripción a unidades de obra específicas. Por lo tanto, corresponde al PATROCINADOR asegurarse de la disponibilidad de los recursos técnicos necesarios con el Proveedor para implementar su política de respaldo o ajustarla en función de los medios disponibles.

El Proveedor se compromete a notificar al PATROCINADOR en caso de restricciones de capacidad y a proporcionar asistencia y asesoría para la optimización de los recursos. Las obligaciones del Proveedor se limitarán a la implementación de las necesidades expresadas por el PATROCINADOR en materia de política de respaldo, en el marco de los recursos suscritos.

### 7.2.7. Implementación de soluciones de recuperación o continuidad de actividades

El Proveedor proporciona al PATROCINADOR todas las soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos a través de diversas Zonas de disponibilidad. Es responsabilidad del PATROCINADOR gestionar eficientemente esta distribución de recursos, para lo cual puede utilizar las herramientas del Proveedor disponibles para este propósito.

## 7.3. Limitaciones de los servicios en el modelo IaaS calificado

### 7.3.1. Servicios gestionados en RUN

Es importante señalar que están excluidos del Servicio:

- El alojamiento de componentes físicos del PATROCINADOR;

- La interconexión de red del Tenant PATROCINADOR, a Internet o a redes privadas, incluidos los enlaces de operador;

- Cualquier servicio de tipo gestionado, o TMA;

- Cualquier asistencia en las máquinas virtuales a nivel de SO y superior en la pila de responsabilidades de IaaS, incluso si se trata de supervisión simple.

Dicho esto, no está en absoluto excluido que el PATROCINADOR recurra a tales servicios mediante la oferta MSP del Proveedor para intervenir en modo de servicios gestionados en sus Tenants. Estos servicios no estarán entonces amparados por el presente Acuerdo de servicio y sus compromisos/cláusulas bipartitas.

### 7.3.2. Configuración de recuperación

Por defecto, el Proveedor proporciona la implementación de recursos de IaaS al PATROCINADOR reservando recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Corresponde al PATROCINADOR elegir las Zonas de disponibilidad a través de la interfaz del PATROCINADOR.

### 7.3.3. Configuración de respaldo

El servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología que representan el entorno IaaS de los Tenants del PATROCINADOR en el marco del Servicio.

El servicio de respaldo y la implementación de la política de respaldo del PATROCINADOR están sujetos a la suscripción de espacio de almacenamiento en el almacenamiento masivo necesario para asegurar el servicio. Por lo tanto, es responsabilidad del PATROCINADOR suscribirse con el Proveedor a los medios técnicos necesarios para asegurar la política de respaldo en su dominio informático, o ajustar la política de respaldo a los medios implementados. El Proveedor se compromete a informar al PATROCINADOR en caso de límite de capacidad técnica.

El Proveedor implementará los medios técnicos y humanos necesarios para el respaldo del sistema alojado dentro del límite de los recursos suscritos por el PATROCINADOR.

Además, en el caso de dominios no cubiertos por el Proveedor, corresponde al PATROCINADOR definir su propia estrategia de respaldo y configurar por sí mismo los respaldos de las VM o realizar una Solicitud de servicio al Proveedor para que la configuración de los respaldos de los servidores físicos sea implementada si el PATROCINADOR dispone de un contrato de servicio gestionado que permita al Proveedor actuar a través de la interfaz del PATROCINADOR, que es la consola de administración puesta a disposición en el marco de este Acuerdo de servicio y que dispone de funcionalidades para configurar los respaldos.

Además, este servicio solo se comprometerá a traducir mediante la configuración a través de la interfaz del PATROCINADOR la configuración especificada claramente por el PATROCINADOR.

Por razones de flexibilidad de la oferta del Proveedor, el PATROCINADOR tiene la opción de asociar una política de no-respaldo en algunas de sus VM. En este caso, corresponde al PATROCINADOR asumir esta elección. El Proveedor no respaldará las VM asociadas a la política "no backup". El Proveedor alerta al PATROCINADOR de que elegir la política "no backup" o elegir respaldar manualmente expone al PATROCINADOR a una pérdida de datos definitiva en caso de Incidente en las capas bajas o en las capas bajo su responsabilidad en el modelo IaaS. En tal caso, será imposible responsabilizar al Proveedor de restaurar los datos porque no habrá nada que restaurar. El Proveedor recomienda siempre respaldar las VM.

Para cualquier tema relacionado con el SO instalado en una máquina virtual y cualquier software o programa ejecutado "sobre el SO", es responsabilidad del PATROCINADOR realizar las operaciones de administración y supervisión dentro de la Unión Europea si desea garantizar que toda la verticalidad de las capas del SI sea operada y gestionada desde la Unión Europea. Las operaciones de administración fuera del ámbito de responsabilidad del Proveedor en el marco de este Acuerdo de servicio se indican en la sección "Modelo de responsabilidades compartidas" del presente Acuerdo de Servicio.

## 7.4. Implementación del servicio

### 7.4.1. Prerrequisitos técnicos

Para la implementación del Servicio, el PATROCINADOR reconoce que deberá:

- Funcionar con una virtualización de tipo VMware en las versiones soportadas por el editor y proporcionadas por el Proveedor en el marco del Servicio;

- Recurrir a través del Proveedor al uso de la herramienta de respaldo;

- Declarar IP fijas desde las cuales el Proveedor le autorizará el acceso a la interfaz del PATROCINADOR (Filtrado por lista blanca). Las modificaciones de esta lista de IP deberán realizarse a través de Solicitudes de servicio (lista no administrable desde la interfaz de administración del Servicio).

## 7.5. Localización del servicio en Francia

Se especifica que ninguna de las operaciones y ninguno de los componentes físicos involucrados en la prestación del Servicio, del cual trata el presente Acuerdo de servicio, se encuentran fuera de la Unión Europea.

Esto incluye en particular el soporte, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que presta el Servicio. De hecho, todo el almacenamiento, todas las tareas de administración, supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los Datacenters que alojan el Servicio

Excepto por las operaciones de los empleados y agencias del Proveedor, todas las operaciones de producción (incluyendo el almacenamiento y procesamiento de datos) y componentes técnicos que prestan el Servicio se encuentran en Datacenters ubicados en Francia.

### 7.5.2. Localización de las agencias Cloud Temple que operan el servicio

Los colaboradores de Cloud Temple que intervienen en el ámbito del Servicio operan desde las agencias de Cloud Temple, todas ubicadas exclusivamente en Francia. Estas agencias están situadas en Francia, en Tours, Lyon, Caen y París La Défense.

El PATROCINADOR está informado de la posibilidad de que los empleados de Cloud Temple trabajen a distancia. Sin embargo, el Proveedor garantiza el mismo nivel de seguridad en cuanto a los accesos a distancia, en particular en lo que respecta a los accesos VPN. Estos accesos remotos se implementan conforme a las exigencias del referencial SecNumCloud.

## 7.6. Soporte

### 7.6.1. Naturaleza del soporte que acompaña el servicio

El Proveedor proporciona un servicio de soporte técnico destinado a asistir al PATROCINADOR en la gestión, solución de problemas y optimización de sus recursos desplegados. Este servicio cubre una amplia gama de actividades, desde la asistencia en la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación, se muestra una descripción de las características y funcionalidades del servicio de soporte:

- Asistencia en la implementación inicial del uso del Servicio;
- Asistencia en la resolución de incidentes;
- Asistencia en la resolución de problemas;
- Seguimiento y asesoría en la optimización de la base técnica.
Dans el marco del servicio de soporte, el Proveedor no sustituye al CONTRATISTA en el uso del Servicio. El CONTRATISTA sigue siendo completamente responsable de la configuración, operación de sus VM y de sus Tenants, y de la gestión de todos los elementos (datos y aplicaciones incluidos) que ha almacenado o instalado en las infraestructuras del Proveedor. El servicio de soporte técnico se proporciona de acuerdo con las Condiciones Generales de Venta y Uso, el Proveedor estando obligado a una obligación de medios.

El CONTRATISTA se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose en particular de solicitar servicios no suscritos con el Proveedor y de hacer intervenir a los equipos del Proveedor con sus propios clientes o terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de las unidades de trabajo de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico

El soporte técnico es accesible mediante un sistema de tickets a través de la consola del CONTRATISTA y está disponible durante las horas normales de oficina a excepción de días festivos (8h - 18h; Lunes - Viernes; calendario y horarios franceses). Para emergencias que ocurran fuera del horario laboral, en particular incidentes que afecten significativamente la producción, el servicio de guardia puede ser contactado a través de un número proporcionado al CONTRATISTA al inicio del Servicio.

Para cada solicitud o Incidente, es imperativo generar un ticket con el soporte del Proveedor. La creación de este ticket, que incluye toda la información necesaria, es esencial y marca el inicio de la evaluación de los compromisos del Proveedor.

Tan pronto como el Proveedor recibe una solicitud o notificación de Incidente, ya sea a través de la consola de gestión o tras una llamada telefónica, se crea automáticamente un ticket. Al declarar un Incidente, es esencial que el CONTRATISTA proporcione al Proveedor la mayor cantidad de detalles posible sobre el problema encontrado. Este enfoque es crucial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico eficaz.

El Cliente recibe una confirmación por correo electrónico, indicando la creación del ticket y su número único. El CONTRATISTA puede consultar el estado y el historial de sus solicitudes y declaraciones de Incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de Incidentes

Al declarar un Incidente, el equipo de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El Cliente debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando las pruebas requeridas. El Proveedor puede acceder al Servicio del Cliente para diagnosticar el Incidente.

Si los Servicios del Proveedor se consideran funcionales y el Incidente no es atribuible a él, el Cliente será informado. A solicitud del Cliente, el Proveedor puede ofrecer Servicios Profesionales para identificar el origen del problema, facturables previo acuerdo en tramos de 30 minutos.

En el caso de que el Incidente sea responsabilidad del Proveedor o de uno de sus subcontratistas, éste completa el diagnóstico y se dedica a la restauración del Servicio sin costos adicionales. El diagnóstico se basa en los intercambios entre las Partes y los datos del Proveedor, estos elementos se consideran probatorios por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de tratamientos

La determinación del nivel de prioridad de un caso se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de criticidad:

- Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| Impacto I1       | El o los servicios del Proveedor están interrumpidos                                                                    |
| Impacto I2       | El o los servicios del Proveedor están degradados                                                                       |
| Impacto I3       | El o los servicios del Proveedor son actualmente estables, pero muestran signos de un potencial declive a largo plazo |

- Los niveles de Criticidades se definen de la siguiente manera:

| Nivel de criticidad | Descripción                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticidad C1        | El o los servicios del Proveedor se degradan a una velocidad preocupante                               |
| Criticidad C2        | El o los servicios del Proveedor se deterioran progresivamente con el tiempo                          |
| Criticidad C3        | El o los servicios del Proveedor presentan uno o varios inconvenientes sin consecuencias significativas |

- Sobre la base de un análisis exhaustivo de la situación, teniendo en cuenta los elementos que determinan el Impacto y la Criticidad, se asigna una prioridad al ticket conforme a la matriz de decisión que se muestra a continuación:

| Nivel de impacto <br/> \ Nivel de criticidad | Impacto I1       | Impacto I2       | Impacto I3       |
| ------------------------------------------- | --------------- | --------------- | --------------- |
| Criticidad C1                                | Prioridad **P1** | Prioridad **P2** | Prioridad **P3** |
| Criticidad C2                                | Prioridad **P2** | Prioridad **P3** | Prioridad **P4** |
| Criticidad C3                                | Prioridad **P3** | Prioridad **P4** | Prioridad **P5** |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### 7.6.5. Idioma y localización del servicio de soporte

El soporte es proporcionado por el Proveedor al CONTRATISTA como mínimo en idioma francés. El soporte también puede ser proporcionado en idioma inglés.

Las operaciones del servicio de soporte del Proveedor para la oferta de servicio de infraestructura calificada SecNumCloud están ubicadas en la Unión Europea.

# 8. Compromisos y niveles de servicios

El Proveedor se compromete a garantizar una vigilancia continua del rendimiento y la integridad de seguridad de su infraestructura técnica que entrega el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, que es objeto de un indicador de rendimiento, se reconoce tan pronto como es identificada por el sistema de supervisión del Proveedor, o tras una notificación por parte de un usuario del CONTRATISTA. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, para garantizar un cálculo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor, o por un retorno de usuario, asegurando así una reanudación efectiva de las operaciones y una medida fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura

El Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada periodo especificado. Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican siempre que el CONTRATISTA implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la Región correspondiente.

En ausencia de cumplimiento de estas condiciones por parte del CONTRATISTA,
este no podrá reclamar la aplicación de los
SLAs correspondientes, que están específicamente identificados por un
asterisco (\*). El acceso a los SLAs se realiza a través de la interfaz del
CONTRATISTA. Las medidas se entienden calculadas mensualmente:

- **SLA 1 (*) : IC-INFRA_SNC-01** – Disponibilidad de la capacidad de cómputo (Compute): tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 2 (*) : IC-INFRA_SNC-02** – Disponibilidad del almacenamiento: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 3     : IC-INFRA_SNC-03** – Fiabilidad de la copia de seguridad: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 4 (*) : IC-INFRA_SNC-04** – Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.
- **SLA 5     : IC-INFRA_SNC-05** – Acceso a Internet: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24h/24, 7d/7.

***Notas*** :

- *En respuesta a un ataque por denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento de internet para
limitar el impacto de este ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al CONTRATISTA es el objetivo, el Proveedor puede recurrir a la técnica de blackholing
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP objetivo en origen en sus proveedores, con el fin de proteger los recursos del CONTRATISTA así como los de otros CONTRATISTAs
y la infraestructura del Proveedor. El Proveedor recomienda encarecidamente al CONTRATISTA adoptar medidas similares, tales como el uso de software de firewall
de aplicaciones web disponibles en el mercado y configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*
- *El Proveedor insiste en la necesidad de que el CLIENTE minimice las aperturas de flujo, evitando principalmente hacer accesibles los puertos
de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde toda la Internet (subred 0.0.0.0/0), así como los protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz CLIENTE

- SLA 6 : IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio: una disponibilidad garantizada de 97%, asegurada continuamente, 24 horas al día, 7 días a la semana.
- SLA 7 : IC-INFRA_SNC-07 -- Acceso a las APIs de gestión del Servicio: una disponibilidad de 99.9%, calculada sobre una base 24h/24, 7d/7.

## 8.3. Compromiso de disponibilidad del soporte

- **SLA 8      : IC-INFRA_SNC-08** – Aquí están los compromisos de rendimiento del soporte técnico del Proveedor para los incidentes, excluyendo mantenimientos programados:

| Prioridad        | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| --------------- | ---------------------------------------- | ----------------------- |
| Prioridad **P1** | 30mn                                     | 95%                     |
| Prioridad **P2** | 2h                                       | 90%                     |
| Prioridad **P3** | 4h                                       | 90%                     |
| Prioridad **P4** | 24h                                      | 85%                     |
| Prioridad **P5** | 48h                                      | 85%                     |

- **SLA 9      : IC-INFRA_SNC-09** – Aquí están los compromisos de rendimiento del soporte técnico del Proveedor para las solicitudes de servicio:

|                    | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| ------------------ | ---------------------------------------- | ----------------------- |
| Solicitud de servicio | 4h                                     | 90%                     |

*Nota:*

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el CLIENTE abre el ticket y la primera intervención del soporte del Proveedor.*
- *La investigación de incidentes para los CLIENTES no incluirá intervención remota en los servidores alojados del CLIENTE. Esta asistencia se limitará a la explicación de las métricas disponibles en relación con
el entorno del CLIENTE, para facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. Basado en los resultados de este análisis, se podrán sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento de objetos S3

- **SLA 10      : IC-INFRA_SNC-10** – Aquí están los compromisos de disponibilidad para el almacenamiento de objetos S3:

| Indicador        | Compromiso                                        | Objetivo de disponibilidad |
| ---------------- | ------------------------------------------------- | ------------------------- |
| IC-INFRA-SNC-10.1 | Durabilidad del almacenamiento de un objeto en una región   | 99.9999999% / año          |
| IC-INFRA-SNC-10.2 | Disponibilidad de la API de Almacenamiento de Objetos S3           | 99.99%                    |
| IC-INFRA-SNC-10.3 | Latencia máxima de acceso a un objeto en una región | 150 ms                    |

Notas:

- El Servicio de Almacenamiento de Objetos está específicamente diseñado para el almacenamiento de objetos y debe emplearse únicamente con este fin, **excluyendo categóricamente su uso en modo bloque**. Recurrir al modo bloque mediante métodos indirectos, incluyendo por ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una infracción a los términos de uso establecidos. Ningún incidente, malfuncionamiento o daño resultante de este uso no conforme será cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en este convenio de servicios.
- La garantía de durabilidad está condicionada a un uso de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de los datos, ya sea intencionada o accidental, resultante de acciones emprendidas por el CLIENTE.

## 8.5. Precisión sobre el compromiso de respaldo

La estrategia de respaldo desplegada para el CLIENTE está condicionada a la suscripción de las unidades de obra adecuadas.

El Proveedor se compromete a poner a disposición una solución de respaldo que permita al CLIENTE aplicar las políticas de respaldos deseadas.

Se precisa que el alcance del Proveedor se detiene en la puesta a disposición de un servicio de respaldo, y es responsabilidad del CLIENTE supervisar a través de la interfaz CLIENTE la correcta ejecución de las políticas asociadas.

Se precisa que la gestión de capacidades de almacenamiento del espacio de almacenamiento dedicado a los respaldos, sigue bajo la responsabilidad del CLIENTE. El Proveedor pone a disposición la tasa de uso mediante la consola.

*Ejemplo: No respaldo de una máquina virtual:*

*El CLIENTE es responsable de verificar / supervisar la correcta ejecución de las políticas de respaldos. En caso de que el CLIENTE constate que una máquina virtual no está respaldada, deberá verificar la causa, y podrá solicitar al Soporte del Proveedor asistencia según el nivel de soporte suscrito.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9**, será aplicable exclusivamente en caso de un Incidente del servicio de respaldo.

# 9. Organización de la relación contractual

## 9.1. Responsabilidades del Proveedor

El Proveedor se compromete a:

- informar a su CLIENTE de manera adecuada (por ejemplo, en caso de límite de capacidad de recursos técnicos al entregar el Servicio).

- informar formalmente al CLIENTE y en un plazo de un mes, de cualquier cambio jurídico, organizativo o técnico que pueda tener un impacto en la conformidad del Servicio con los requisitos de protección contra las leyes extraeuropeas (19.6 del estándar SNC v3.2).

- proporcionar al CLIENTE interfaces y servicios que estén en francés como mínimo.

- estudiar y tener en cuenta las exigencias sectoriales específicas relacionadas con los tipos de información confiada por el CLIENTE en el marco de la implementación del servicio y dentro del límite de las responsabilidades del Proveedor.

- no divulgar ninguna información relativa a la prestación a terceros, salvo autorización formal y por escrito del CLIENTE.

- poner a disposición toda la información necesaria para la realización de auditorías de conformidad de acuerdo con las disposiciones del artículo 28 del RGPD.

- informar al CLIENTE, mediante el presente Convenio de servicio, de cualquier Incidente de seguridad que afecte al Servicio o al uso que el CLIENTE haga del Servicio (incluyendo los datos del CLIENTE).

- autorizar a un proveedor de auditoría de seguridad de sistemas de información (PASSI) cualificado, contratado por el Proveedor, a auditar el servicio así como su sistema de información, de acuerdo con el plan de control de SecNumCloud del Proveedor. Además, el Proveedor se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, realizadas por el CLIENTE o un tercero contratado.

- proporcionar, en calidad de subcontratista, de acuerdo con el artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y asesoramiento al CLIENTE al alertarle tan pronto como una instrucción emitida por este último sea susceptible de constituir una violación de las normas de protección de datos.

- notificar por escrito, cuando un proyecto impacte o sea susceptible de impactar el nivel de seguridad del Servicio, al CLIENTE sobre los impactos potenciales, las medidas de mitigación implementadas y los riesgos residuales que le conciernen.

- documentar y poner en práctica todos los procedimientos necesarios para cumplir con los requisitos legales, regulatorios y contractuales aplicables al servicio, así como con las necesidades de seguridad específicas del CLIENTE, definidas por este último y previstas en el Contrato. A solicitud del CLIENTE, el módulo de Documentación de la interfaz CLIENTE permitirá compartir de forma segura estos documentos.

- proporcionar, a solicitud del CLIENTE, los elementos de evaluación de riesgos relativos a la sujeción de los datos del CLIENTE a la legislación de un estado no miembro de la Unión Europea.

A solicitud del CLIENTE formal y por escrito, el Proveedor se compromete a :

1. Hacer accesible al CLIENTE el reglamento interno y la carta de ética del Proveedor;

2. Hacer accesible al CLIENTE las sanciones aplicables en caso de infracción a la política de seguridad;

3. Proporcionar al CLIENTE todos los eventos que le conciernen en los elementos de registro del Servicio;

4. Al final del Contrato, el Proveedor se compromete a suprimir los datos y Datos técnicos relativos al CLIENTE, de acuerdo con el «procedimiento de borrado de datos al final del Contrato» descrito en el presente Convenio de servicio.

5. asegurar un borrado seguro de la totalidad de los datos del CLIENTE mediante la reescritura completa de cualquier soporte que haya alojado sus datos en el marco del Servicio.

6. proporcionar la lista completa de terceros autorizados a acceder a las infraestructuras que albergan los datos.
Le Proveedor mantendrá actualizado y pondrá a disposición del MANDANTE la lista exhaustiva de terceros autorizados a acceder a las infraestructuras que manejan los datos, informando a este último de cualquier cambio relativo a los subcontratistas. El Proveedor y todas sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, a saber, la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho y el respeto de los Derechos Humanos. El servicio proporcionado por el Proveedor cumple con la legislación vigente en materia de derechos fundamentales y con los valores de la Unión Europea relativos al respeto de la dignidad humana, la libertad, la igualdad, la democracia y el estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor

En virtud de todas las definiciones y condiciones mencionadas en el presente Acuerdo de Servicio, las responsabilidades del Proveedor están limitadas de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección « Modelo de responsabilidades compartidas » del presente Acuerdo de Servicio, limita de hecho la implicación del Proveedor en las capas de funcionamiento que van "por encima" de la puesta a disposición de recursos de cálculo, red, almacenamiento y respaldo. Esto excluye en particular sin limitarse a:

    - La gestión de lo que se instala en las máquinas virtuales (SO, middleware, aplicaciones, etc.);

    - El mantenimiento actualizado de los SO y otros softwares instalados por el MANDANTE en sus máquinas en sus Tenants;

    - La seguridad de los programas, softwares y aplicaciones instalados en las máquinas virtuales;

    - La actualización de las máquinas virtuales;
  
    - El respaldo de los datos a nivel de aplicación.

2. El Proveedor no puede asumir compromisos de respaldo de los Tenants del MANDANTE sin que el MANDANTE haya previamente suscrito a las unidades de obra adecuadas.

3. El Proveedor no puede considerar la propiedad de los datos transmitidos y generados por el MANDANTE. De hecho, estos pertenecen al MANDANTE.

4. El Proveedor resalta que no puede en ningún caso explotar los datos transmitidos y generados por el MANDANTE sin la validación previa de este último.

5. El Proveedor exime toda responsabilidad sobre los componentes físicamente alojados y gestionados por el Proveedor, pero que son propiedad directa del MANDANTE o de un tercero con el cual el MANDANTE ha contratado. El alojamiento de componentes físicos de los clientes no hace parte del Servicio y queda de hecho fuera del alcance del presente Acuerdo de Servicio. Corresponde al MANDANTE evaluar el nivel de adherencia o dependencia que introducen estos componentes con respecto al Servicio IaaS cualificado SecNumCloud.

## 9.3. Limitación de acceso

En el marco del Servicio, el Proveedor tiene prohibido formalmente acceder a los Tenants pertenecientes al MANDANTE sin autorización previa. Es responsabilidad del MANDANTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el MANDANTE.

El MANDANTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de los servicios acordados, asegurando así una gestión segura y conforme con los términos del acuerdo.

El acceso remoto por terceros implicados en la prestación del servicio del Proveedor está estrictamente prohibido. En caso de que un requisito técnico específico requiriera dicho acceso, este solo podría establecerse después de haber notificado claramente al MANDANTE, proporcionado una justificación detallada y obtenido su aprobación por escrito.

Esta medida garantiza el control y la seguridad de los datos del MANDANTE, asegurando que cualquier excepción a la regla esté debidamente autorizada y documentada.

## 9.4. Responsabilidades de terceros que participan en la prestación del servicio Secure Temple

El Proveedor controla la lista de terceros socios que participan en la prestación del Servicio. Estos terceros son los editores, proveedores (del Proveedor) y otros participantes en la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

- El Proveedor exige a los terceros que participen en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio Secure Temple;

- El Proveedor formaliza, con cada uno de los terceros que participan en la implementación del servicio, cláusulas de auditoría que permitan a un organismo de certificación verificar que estos terceros cumplen con los requisitos legales y los requisitos de SNC, permitiendo al Proveedor cumplir con sus compromisos en el presente Acuerdo de Servicio.

- El Proveedor implementa un procedimiento para controlar regularmente las medidas implementadas por los terceros que participan en la implementación del servicio para cumplir con los requisitos del Proveedor de respetar sus compromisos en el presente Acuerdo de Servicio.

- El Proveedor implementa un procedimiento de seguimiento de los cambios realizados por los terceros que participan en la implementación del servicio que pueden afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del MANDANTE

Como recordatorio, el Proveedor proporciona al MANDANTE una plataforma de ejecución de máquinas virtuales, la configuración de estas es responsabilidad del MANDANTE. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Proveedor define a través de sus interfaces políticas de respaldo automáticas. Pero corresponde al MANDANTE la activación de estas políticas de respaldo y, por lo tanto, activar las máquinas virtuales.

El MANDANTE autoriza a la ANSSI y al organismo de certificación SNC a auditar el Servicio y la infraestructura técnica que proporciona el Servicio.

## 9.6. Derechos del MANDANTE

En cualquier momento durante la relación contractual, el MANDANTE puede presentar una reclamación relativa al servicio cualificado ante la ANSSI.

En cualquier momento, el MANDANTE puede solicitar al Proveedor que le haga accesible su reglamento interno y su carta de ética.

## 9.7. Eliminación de datos al final del Contrato

Al finalizar el contrato, ya sea que llegue a término o que se rescinda por cualquier motivo, el Proveedor se compromete a proceder con la eliminación segura de toda la información del MANDANTE, inclusive los datos técnicos. El Proveedor se asegurará de comunicar al MANDANTE un aviso formal, respetando un plazo de veintiún (21) días naturales. Los datos del MANDANTE serán entonces eliminados en un plazo máximo de treinta (30) días tras esta notificación.

Para acreditar esta eliminación, el Proveedor entregará al MANDANTE un certificado confirmando la eliminación de los datos.

# 10. Ciclo de vida del presente Acuerdo de Servicio

## 10.1. Entrada en vigor del Acuerdo de Servicio

El presente Acuerdo de Servicio entra en vigor el día de su firma por el MANDANTE.

La recolección, manipulación, almacenamiento y tratamiento de los datos realizados en el marco de la preventa, la implementación, la terminación del Servicio, se realizan en conformidad con la legislación vigente.

## 10.2. Evoluciones del Acuerdo de Servicio

Las modificaciones o adiciones realizadas al presente Acuerdo de Servicio resultan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados a tal efecto. Estas propuestas de cambio serán examinadas por las Partes, autorizadas a determinar los aspectos que requieren una formalización escrita.

Se acuerda que cualquier evolución del Acuerdo de Servicio, una vez validada, que altere las condiciones financieras inicialmente establecidas, requerirá la redacción y firma de una enmienda al Contrato vigente.

Los factores que pueden inducir una revisión de este Acuerdo de Servicio incluyen, sin limitarse a:

- La evolución de la infraestructura técnica que proporciona el Servicio IaaS;
- Los ajustes realizados en los servicios implementados por el Proveedor para proporcionar el Servicio;
- Las variaciones de los compromisos asumidos y las sanciones aplicables;
- Las reconfiguraciones organizacionales dentro del MANDANTE o del Proveedor;
- La expansión o reducción del alcance del Servicio.

La gestión de versiones y revisiones del Acuerdo de Servicio se consigna en el preámbulo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el MANDANTE

Las evoluciones del Acuerdo de Servicio pueden tener, en particular, su origen en:

- Una evolución de la infraestructura gestionada por el Proveedor;

- Una modificación de los servicios implementados por el Proveedor;

- Una modificación de los compromisos de niveles de servicios por parte del Proveedor.

### 10.2.2. Evoluciones desencadenadas por el Proveedor

Cualquier modificación del Acuerdo de Servicio está sujeta a la aprobación del MANDANTE. Se entiende que cualquier modificación o complemento
validados que modifiquen los elementos financieros del Contrato, podrá implicar la firma de una enmienda a este.

## 10.3. Reversibilidad

Además, Cloud Temple se compromete a permitir una revisión del presente Acuerdo de Servicio (previendo, en particular, su rescisión) sin penalización
para el MANDANTE en caso de pérdida de la certificación SecNumCloud.
Les Services ne comprennent pas d'obligation de réversibilité (a saber, la ayuda al Cliente para que pueda migrar su sistema hacia otro Proveedor) a excepción de la puesta a disposición del COMITENTE por parte del Proveedor de la interfaz COMITENTE que permite al COMITENTE guardar y recuperar sus datos, incluyendo las configuraciones de su sistema de información a través de una de las siguientes modalidades técnicas a elección del COMITENTE: la puesta a disposición de archivos según uno o varios formatos documentados y utilizables fuera del servicio suministrado por el Proveedor o bien mediante la implementación de interfaces técnicas que permiten el acceso a los datos según un esquema documentado y explotable (API).

El COMITENTE, único responsable de su sistema, debe hacer todo lo posible para facilitar esta operación en la medida de lo necesario (lo que implica, en particular, que establezca una documentación rigurosa a tal efecto) y la elaboración de planes de reversión. En caso de que el COMITENTE necesite un servicio complementario, el Proveedor puede ofrecer una misión de asesoramiento en este sentido en el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio

## 11.1. Gestión de Incidentes y interrupciones

### 11.1.1. Incidentes

#### 11.1.1.1. Tipos de Incidentes tratados en el marco de este Acuerdo de servicio

- Desastres

- Averías y fallos

- Incidentes de seguridad:

- Impactando la disponibilidad del servicio

- Impactando la confidencialidad del servicio

- Impactando la integridad del servicio

#### 11.1.1.2. Tratamiento de los incidentes

- Plazos

- Acciones a posteriori

- Archivar los documentos detallando los incidentes de seguridad.

- Notificación de violación de datos de carácter personal [en línea](<https://notifications.cnil.fr/notifications/index>)

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad

El COMITENTE tiene la responsabilidad de elegir los niveles de gravedad de los Incidentes de seguridad sobre los que desea ser informado, por ejemplo, mediante su formalización en un SLA aplicable al Servicio.

Por defecto, el COMITENTE es informado:

- De los incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de los tratamientos del presente Acuerdo de servicio);

- De las violaciones de datos de carácter personal de las que el COMITENTE es responsable del tratamiento;

- De las violaciones de datos de carácter personal para las que el Proveedor es responsable del tratamiento y que contienen datos personales del COMITENTE.

## 11.2. Mantenimiento del Servicio

### 11.2.1. Naturaleza del mantenimiento

El mantenimiento asegurado consiste en la implementación de:

- El plan de mantenimiento en condiciones operacionales del Servicio para asegurar buenos indicadores de disponibilidad tal como se compromete el Proveedor más arriba;

- El plan de PCA/PRA si suscrito por el COMITENTE, activado según los posibles incidentes que se produzcan.

### 11.2.2. Accesos remotos de Cloud Temple en el perímetro del COMITENTE

El Proveedor se prohíbe, en el marco del presente Acuerdo de servicio, todo acceso a los Tenants y al espacio de la interfaz del COMITENTE.

Corresponderá al COMITENTE dar los accesos necesarios al personal del Proveedor. El COMITENTE reconoce que los accesos serán utilizados en el ámbito del alojamiento y, al final, de la gestión externalizada de TI (si suscrito por el COMITENTE).

### 11.2.3. Accesos remotos de terceros participantes en la provisión del servicio en el perímetro del COMITENTE

No se autoriza ningún acceso remoto de terceros participantes en la provisión del Servicio.

Si una necesidad técnica hiciera necesario este caso, entonces este tipo de acceso solo se realizará después de la notificación del COMITENTE, justificación y obtención de su acuerdo por escrito.

# 12. Procedimiento de borrado de datos al final del Contrato

Al final del Contrato, ya sea que el Contrato haya finalizado o por cualquier otra causa, el Proveedor asegurará el borrado seguro de la totalidad de los datos tratados en el marco del Servicio, incluyendo los Datos técnicos del COMITENTE. El Proveedor dará un aviso formal respetando un plazo de veintiún días (21) calendario. Los datos del COMITENTE serán eliminados en un plazo máximo de treinta (30) días después de la notificación. El Proveedor proporciona un certificado de eliminación de datos al COMITENTE.

# 13. Derecho aplicable

## 13.1. De manera general

El derecho aplicable al presente Acuerdo de servicio es el derecho francés.

## 13.2. Cumplimiento del derecho y las regulaciones aplicables

El Proveedor se compromete a los siguientes puntos:

- La identificación de las limitaciones legales y reglamentarias aplicables en el marco del Servicio;

- El cumplimiento de las limitaciones legales y reglamentarias aplicables a los datos confiados al Proveedor;

- El cumplimiento de la Ley de Protección de Datos y del RGPD;

- La implementación de medios de protección de datos personales;

- La implementación de un proceso de vigilancia legal y reglamentaria;

- Disponer y mantener relaciones apropiadas o una vigilancia con las autoridades sectoriales en relación con la naturaleza de los datos tratados en el marco del Servicio. Esto incluye, en particular, la ANSSI, el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando como procesador en el sentido del artículo 28 del Reglamento General de Protección de Datos (RGPD), el Proveedor se compromete a:

- Asegurar la transparencia y la trazabilidad;

- Designar un DPO encargado de definir e implementar las medidas de protección de los datos personales;

- Brindar asistencia y asesoramiento al COMITENTE alertándolo si una instrucción de este último constituye una violación de las normas de protección de datos personales en caso de que el Proveedor tenga los medios para identificarlo;

- Una garantía de seguridad sobre los datos tratados (debido a la calificación SecNumCloud).

## 13.4. Protección respecto al derecho extracomunitario

En caso de recurso por parte del Proveedor, en el marco del Servicio, a una empresa tercera - incluyendo un subcontratista - que tenga su sede social, administración central o establecimiento principal en un Estado no miembro de la Unión Europea o perteneciente o siendo controlada por una empresa tercera domiciliada fuera de la Unión Europea, el Proveedor se compromete a que dicha empresa tercera no dispondrá de ningún acceso a los datos operados por el servicio 'Secure Temple'.

A modo de recordatorio, los datos a los que se hace referencia son los confiados al Proveedor por el COMITENTE, así como todos los Datos técnicos que contienen información sobre los COMITENTES.

Para los fines del presente artículo, la noción de control se toma como la prevista en el II del artículo L233-3 del Código de Comercio.

# 14. FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Por Cloud Temple, el PROVEEDOR

Por \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el COMITENTE