---
title: Convención de Servicio PaaS
---

**Tabla de contenido**

- [1. Marco](#1-marco)
- [2. Acrónimos](#2-acrónimos)
- [3. Glosario](#3-glosario)
- [4. Objeto de la convención de servicio PaaS del Proveedor](#4-objeto-de-la-convención-de-servicio-paas-del-proveedor)
- [5. Evolución de la convención de servicio PaaS](#5-evolución-de-la-convención-de-servicio-paas)
- [6. Auditoría](#6-auditoría)
- [7. Descripción del servicio](#7-descripción-del-servicio)
- [8. Implementación del servicio](#8-implementación-del-servicio)
  - [8.1. Descripción de los componentes técnicos](#81-descripción-de-los-componentes-técnicos)
    - [8.1.1. Plataforma de servicio REDHAT OpenShift](#811-plataforma-de-servicio-redhat-openshift)
    - [8.1.2. Infraestructura de software de gestión de la plataforma Redhat Openshift](#812-infraestructura-de-software-de-gestión-de-la-plataforma-redhat-openshift)
    - [8.1.3. Infraestructura de respaldo asociada](#813-infraestructura-de-respaldo-asociada)
    - [8.1.4. Implementación de soluciones de recuperación o continuidad de la actividad](#814-implementación-de-soluciones-de-recuperación-o-continuidad-de-la-actividad)
- [9. Compromisos y niveles de servicio](#9-compromisos-y-niveles-de-servicio)
  - [9.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift](#91-compromisos-de-disponibilidad-de-la-plataforma-redhat-openshift)
- [10. Modelo de responsabilidades compartidas aplicable](#10-modelo-de-responsabilidades-compartidas-aplicable)
  - [10.1. Responsabilidad y obligaciones del Proveedor](#101-responsabilidad-y-obligaciones-del-proveedor)
  - [10.2. Limitación de responsabilidad del Proveedor](#102-limitación-de-responsabilidad-del-proveedor)
  - [10.3. Limitación de acceso](#103-limitación-de-acceso)
- [11. Borrado de datos al finalizar el contrato](#11-borrado-de-datos-al-finalizar-el-contrato)
- [12. Ley aplicable](#12-ley-aplicable)


## 1. Marco

|           |                        |
| --------- | ---------------------- |
| Referencia | CT.AM.JUR.ANX.PAAS 2.0 |
| Fecha      | 13 marzo 2024           |

## 2. Acrónimos

| Acrónimo    | Descripción                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| CAB         | Change Advisory Board – Comité consultivo sobre cambios                                                    |
| CMDB        | Configuration Management Database – Base de datos de gestión de configuraciones                            |
| COPIL       | Comité de pilotaje                                                                                         |
| COSTRAT     | Comité estratégico                                                                                         |
| DB          | Database (base de datos)                                                                                   |
| DRP         | Disaster Recovery Plan (Plan de recuperación de actividad)                                                 |
| GTI         | Garantía de Tiempo de Intervención                                                                          |
| GTR         | Garantía de Tiempo de Resolución                                                                            |
| GTE         | Garantía de Tiempo de Escalada                                                                              |
| HYPERVISEUR | Sistema operativo que permite la ejecución de VM en una lámina de cálculo                                   |
| ITIL        | Information Technology Infrastructure Library - Buenas prácticas para la gestión de sistemas de información |
| IAAS        | Infrastructure as a Service                                                                                |
| MCO         | Mantenimiento en condiciones operacionales                                                                  |
| MOA         | Maestría de la Obra                                                                                         |
| MOE         | Maestría de la Obra                                                                                         |
| OS          | Operating system (sistema operativo)                                                                        |
| PAQ         | Plan de Aseguramiento de la Calidad                                                                         |
| PAAS        | Platform as a Service                                                                                      |
| SDM         | Service Delivery Manager                                                                                   |
| RFC         | Request For Change – Solicitud de cambio                                                                    |
| RGPD        | Reglamento General de Protección de Datos (personales)                                                     |
| RPO         | Recovery Point Objective – Frescura de los datos restaurados en caso de siniestro                           |
| RTO         | Recovery Time Objective – Tiempo de recuperación del servicio en caso de siniestro                         |
| SLA         | Service Level Agreement – Acuerdo sobre los niveles de servicio                                             |
| UO          | Unidad de Obra                                                                                              |
| VABF        | Validación de Aptitud al Buen Funcionamiento                                                               |
| VABE        | Validación de Aptitud a la Buena Explotabilidad                                                            |
| VM          | Virtual Machine (Máquina virtual)                                                                           |
| VSR         | Validación de Servicio Regular                                                                             |
| SNC         | SecNumCloud                                                                                                |

## 3. Glosario

Las expresiones a continuación utilizadas en el presente documento serán interpretadas conforme a las definiciones que se les atribuyen a continuación:

| Expresión                                          | Definición                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | La denominación "Secure Temple" se refiere al servicio de Infraestructura como Servicio IaaS, cualificado SecNumCloud, ofrecido por la compañía Cloud Temple.                                                                                                                          |
| Región                                              | Una "región" en el contexto del cloud computing se refiere a un conjunto geográficamente delimitado de zonas de disponibilidad cloud, <br/>proporcionando servicios de red, de cálculo y de almacenamiento para optimizar la latencia, el rendimiento <br/>y la conformidad regulatoria local |
| Zona Disponibilidad<br/>(AZ)<br/>(Availability zone) | Una sección específica e aislada de la infraestructura de cloud computing, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de los recursos.                                                                    |
| Tenant                                              | Una instancia aislada reservada a un usuario o grupo de usuarios, compartiendo una infraestructura común mientras se mantiene la independencia y seguridad de los datos y las aplicaciones.                                                                                        |

| Expresión               | Definición                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                 | Un "incidente" se refiere a cualquier evento imprevisto que interrumpe el funcionamiento normal de un sistema o compromete la seguridad de los datos y las infraestructuras                                                                                                                                                                                                                                                                                   |
| Problema                 | Un "problema" es una causa fundamental de uno o más incidentes, identificada o sospechada, que requiere análisis y resolución para prevenir su recurrencia                                                                                                                                                                                                                                                                          |
| Cambio                   | Un "cambio" se refiere a cualquier modificación realizada en el entorno informático, con el objetivo de mejorar o corregir los sistemas, procesos o servicios.                                                                                                                                                                                                                                                                                           |
| cambio estándar          | Un "cambio estándar" es una modificación previamente aprobada, de bajo riesgo, repetitiva y que sigue un procedimiento establecido en el entorno informático.                                                                                                                                                                                                                                                                                          |
| Implantación             | acción(es) de administración para realizar el cambio cuando este está aprobado <br/>(el cambio, en el sentido ITIL, se refiere solo a la gestión del cambio y no a su realización/concreción).                                                                                                                                                                                                                                                             |
| Solicitud de servicio    | solicitud de evolución que es objeto de un procedimiento, cuya realización: <br/> i) no modifica la CMDB,<br/>ii) el modo operativo, los costos y los riesgos son conocidos y aceptados de antemano y no requieren modalidades específicas de reversión<br/> iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la tarifa del contrato cuando se realiza en horas y días laborables. |
| Elemento de configuración | Un "elemento de configuración" es un componente identificable del sistema de información, como software, hardware o un documento,<br/> sujeto a gestión en el marco de la gestión de servicios IT                                                                                                                                                                                                                                                       |
| Servicio                 | Un "servicio" es un medio para proporcionar valor a los CLIENTEs facilitando los resultados deseados sin que estos tengan que gestionar <br/>los costos y los riesgos específicos                                                                                                                                                                                                                                                                         |
| Evento                    | Un "evento" es cualquier ocurrencia detectable o identificable en un sistema informático o red, que puede tener importancia para la gestión de servicios IT                                                                                                                                                                                                                                                        |
| Sinistro                | Un "sinistro" se refiere a un evento dañino imprevisto que resulta en pérdidas materiales, financieras o de datos para un CLIENTE                                                                                                                                                                                                                                                                                                           |
| Convención de servicio    | Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y esto, en conformidad con los requisitos del Referencial SecNumCloud.                                                                                                                                                                                                                                                    |
| Disponibilidad            | Capacidad de asegurar la disponibilidad y el mantenimiento del rendimiento óptimo de un servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA)                                                                                                                                                                                                                                                      |
| Supervisión              | Monitoreo de un Sistema de Información o un Servicio, que implica la recolección de diversos datos como medidas y alarmas. <br/>Esta actividad se limita a la observación y el seguimiento, sin intervenir directamente en los elementos supervisados, una prerrogativa que pertenece a las operaciones de Administración.                                                                                                                         |

## 4. Objeto de la convención de servicio PaaS del Proveedor

La presente Convención de Servicios establece los términos y condiciones según los cuales el Proveedor se compromete a proporcionar al CLIENTE una infraestructura 
conforme a las especificaciones de la oferta «Platform as a Service – PaaS», debidamente calificada SecNumCloud.

Objeto de la Convención de Servicios:

1. Especificar los requisitos de rendimiento esperados por el CLIENTE en términos de funcionalidad y fiabilidad de la infraestructura.
2. Enunciar las obligaciones del Proveedor para cumplir con los niveles de servicio convenidos.
3. Identificar las normas regulatorias aplicables específicamente a la infraestructura propuesta.
4. Asegurar una uniformidad e integridad en la evaluación de la calidad de los servicios prestados.
5. Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en el supuesto de que al Proveedor se le retire su calificación SecNumCloud, el presente Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalidades, por el CLIENTE. 
En tal caso, el Proveedor se compromete a informar al CLIENTE de esta descalificación mediante el envío de una notificación oficial, mediante una carta certificada con acuse de recibo.

Cabe señalar que una modificación o ajuste de la calificación SecNumCloud no se interpretará como una revocación de la calificación inicial.

## 5. Evolución de la convención de servicio PaaS

Las modificaciones o adiciones a la presente convención de servicio resultan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados para tal fin. 
Estas propuestas de cambio serán examinadas en el comité estratégico, la única instancia autorizada para determinar los aspectos que requieren una formalización por escrito.

Se acuerda que cualquier evolución de la convención, una vez validada, que altere las condiciones financieras inicialmente establecidas, requerirá la elaboración y firma de una enmienda al contrato en curso.

Los factores que pueden inducir una revisión de esta convención incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS orquestada por el Proveedor.
- Los ajustes realizados en los servicios desplegados por el Proveedor.
- Las variaciones de los compromisos asumidos y las sanciones aplicables.
- Las reconfiguraciones organizacionales dentro del CLIENTE o del Proveedor.
- La expansión o reducción del ámbito de los servicios a los que el CLIENTE se ha suscrito.

La gestión de versiones y revisiones de la convención se consigna en el preámbulo del documento para facilitar su seguimiento.

## 6. Auditoría 

El Proveedor se compromete a permitir que el CLIENTE, o cualquier auditor tercero que este haya designado, consulte toda la documentación necesaria para dar fe del cumplimiento total de las obligaciones relacionadas con la conformidad de las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Proveedor se compromete a poner a disposición del CLIENTE la lista de todos los terceros que pueden acceder a los datos y a informarle de cualquier cambio de subcontratistas.**

Al aceptar la presente convención de servicio, el CLIENTE otorga su autorización explícita a:

1. __La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI)__ así como a la entidad de calificación competente para llevar a cabo la verificación del cumplimiento del Servicio y de su Sistema de Información con los estándares definidos por el Referencial SecNumCloud.
2. __Un proveedor de auditoría en seguridad de los sistemas de información__, debidamente calificado y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio proporcionado por el Proveedor.

## 7. Descripción del servicio

La oferta de servicios propuesta por el Proveedor se caracteriza por la provisión de las siguientes prestaciones, 
que se alinean con el principio de responsabilidad compartida detallado en las normas establecidas por el referencial SecNumCloud:

- La provisión de una plataforma de gestión de contenedores Redhat Openshift pilotada por el Proveedor.

Se entiende que el Proveedor empleará su expertise para realizar las prestaciones según las mejores prácticas profesionales, 

conformément à leurs Spécifications et en respectant les normes de sa certification ISO/IEC 27001 ainsi que les directives du Référentiel SecNumCloud.

## 8. Mise en œuvre du service

Il est précisé que toutes les opérations et tous les composants physiques impliqués dans la fourniture du service qualifié, dont la présente convention fait l’objet, 
sont situés dans l’Union Européenne. Cela inclut notamment le support, la supervision opérationnelle et la supervision de sécurité (SOC).

### 8.1. Description des composants techniques 

Les service PaaS (Platform as a Service) englobent l'intégralité des composants et services requis pour son fonctionnement optimal dans le respect de la qualification SecNumCloud.

À cet égard, leur performance et fiabilité sont intrinsèquement liées aux composants techniques et aux services de **l'infrastructure IaaS** du Prestataire, comme spécifié dans le document [Convention de Service IaaS](../iaas/sla_iaas.md) du Prestataire.

#### 8.1.1. Plateforme de service REDHAT OpenShift

Le service englobe la mise à disposition au sein d'une région, sur 3 zones de disponibilité, 

#### 8.1.2. Infrastructure logiciel de pilotage de la plateforme Redhat Openshift

Le Prestataire fournit au CLIENT la console d'administration et l'API nécessaire à l'exploitation de ses environnements PaaS RedHat OpenShift. 
Il s'engage également à les maintenir en condition opérationnelle optimale et à assurer sa sécurité de manière continue.

Dans le cadre spécifique du service fourni, le Prestataire met à la disposition du CLIENT toutes les interfaces et API de la plateforme RedHat OpenShift au sein du tenant sélectionné. Il revient au CLIENT d'instaurer les dispositifs de seguridad apropiados, tales como los cortafuegos (firewall), los cortafuegos de aplicaciones web (WAF), y otras medidas de protección, así como de definir las reglas de filtrado asociadas para securizar el acceso a su plataforma conforme a su política de seguridad.

El Prestataire alerta al Cliente sobre el hecho de que una utilización anormal de su consola de administración, particularmente en caso de sobrecarga de sus APIs de comando (hammering), 
puede desencadenar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o a ciertos servicios del Prestataire. Cabe destacar que esta situación no constituye una falta de disponibilidad del servicio sino una acción de protección de la Infraestructura del Prestataire; 
por lo tanto, el Cliente no puede considerarla como una falta de disponibilidad en sus cálculos.

Además, el Prestataire precisa al Cliente que las solicitudes perfectamente idénticas (duplicadas) enviadas a sus APIs están limitadas a una por segundo (Throttling). 
Si el Cliente envía solicitudes idénticas a una frecuencia superior, su rechazo no debe interpretarse como una falta de disponibilidad del servicio.

#### 8.1.3. Infrastructure de sauvegarde associée

El Prestataire pone a disposición del CLIENTE una plataforma de respaldo integrada, dedicada y gestionada, destinada a la protección de los datos de sus entornos RedHat Openshift. 
El Prestataire asegura el mantenimiento en condición operativa y de seguridad de esta plataforma integrada de respaldo.
Independientemente del número de zonas de disponibilidad suscritas por el CLIENTE, el Prestataire garantiza que la plataforma de 
respaldo del CLIENTE se situará fuera de la zona de disponibilidad de las cargas de trabajo respaldadas.

El servicio de respaldo se limita al respaldo de las máquinas virtuales y las configuraciones de topología del entorno IaaS de los tenants SecNumCloud del CLIENTE. 
La elaboración y aplicación de una política de respaldo adecuada por el CLIENTE depende de la suscripción a unidades de obra específicas.
Por lo tanto, corresponde al CLIENTE asegurarse de la disponibilidad de los recursos técnicos necesarios a través del Prestataire
para implementar su política de respaldo o ajustar esta última según los medios disponibles.

El Prestataire se compromete a notificar al CLIENTE en caso de limitaciones de capacidad y a proporcionar asesoría para la optimización de recursos.
Las obligaciones del Prestataire se limitarán a la implementación de las necesidades expresadas por el CLIENTE en materia de política de respaldo, dentro del marco de los recursos suscritos.

#### 8.1.4. Mise en œuvre de solutions de reprise d'activité ou de continuité d'activité

El Prestataire proporciona al CLIENTE todas las soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos 
a través de diversas zonas de disponibilidad. Corresponde al CLIENTE la responsabilidad de gestionar eficazmente esta distribución de recursos, 
para lo que tiene la posibilidad de explotar las herramientas del Prestataire disponibles para este uso.

En particular, las aplicaciones desplegadas en la plataforma RedHat OpenShift deben soportar los mecanismos de redundancia propuestos por el Prestataire para poder beneficiarse de las soluciones de recuperación de actividad o de continuidad de actividad asociadas.

## 9. Engagements et niveaux de services

El Prestataire se compromete a garantizar una vigilancia continua del rendimiento y la integridad de la seguridad de sus 
plataformas y servicios, velando por su funcionamiento óptimo.

La falta de disponibilidad de un servicio, que es el objetivo de un indicador de rendimiento, se reconoce en cuanto es identificada por el sistema de supervisión del Prestataire, 
o tras una notificación por un usuario del CLIENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, 
para garantizar un cálculo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Prestataire, 
o por una devolución de usuario, asegurando así una reanudación efectiva de las operaciones y una medida fiel de la duración de la interrupción.

### 9.1. Engagements de disponibilité de la plateforme RedHat OpenShift

El Prestataire se compromete a mantener un nivel de disponibilidad y rendimiento conforme a los estándares definidos para cada período especificado. 
Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican bajo la condición de que el CLIENTE implemente sus sistemas a través 
de al menos dos de las zonas de disponibilidad presentes en la región concernida.

En ausencia de respeto de estas condiciones por parte del CLIENTE, este no podrá reclamar la aplicación de los SLAs concernidos, 
los cuales están específicamente identificados con un asterisco (*). La accesibilidad a los SLAs se realiza a través del interfaz CLIENTE. **Las medidas se entienden calculadas mensualmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilidad de la plataforma RedHat OpenShift : tasa de disponibilidad garantizada del 99,9%, calculada sobre una base 24h/24, 7d/7.

_**Notas**_ : 

- *En respuesta a un ataque por denegación de servicio distribuido (DDoS), el Prestataire se reserva el derecho de ajustar su configuración de enrutamiento de internet para 
limitar el impacto de este ataque y salvaguardar su infraestructura. En particular, si una dirección IP que pertenece al CLIENTE es atacada, el Prestataire puede recurrir a la técnica de blackholing 
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP objetivo, en sus proveedores para proteger los recursos del CLIENTE así como los de otros clientes 
y la infraestructura del Prestataire. El Prestataire recomienda encarecidamente al CLIENTE adoptar medidas similares, tales como la utilización de software de cortafuegos 
de aplicaciones web disponibles en el mercado, y configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*

- *El Prestataire insiste en la necesidad de que el CLIENTE minimice las aberturas de flujo, evitando especialmente hacer accesibles los puertos 
de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde toda la Internet (subred 0.0.0.0/0), así como los protocolos internos como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 10. Modèle de responsabilités partagées applicable

### 10.1. Responsabilité et Obligations du Prestataire

El Prestataire se compromete a poner a disposición del CLIENTE interfaces de usuario en idioma francés e inglés, facilitando así el acceso y la gestión de los servicios proporcionados.
El CLIENTE, por su parte, se compromete a respetar las restricciones legales y reglamentarias vigentes relativas a los datos que confía al Prestataire para su procesamiento.

En caso de transmisión de datos sujetos a requisitos legales específicos, el Prestataire colaborará con el CLIENTE para identificar y implementar 
las medidas de seguridad necesarias, conforme a las obligaciones del Prestataire y en el marco de la prestación de servicios.

El Prestataire también se compromete a examinar y tomar en consideración las necesidades específicas relacionadas con los sectores de actividad del CLIENTE,
respetando las limitaciones de su responsabilidad, para garantizar un nivel de seguridad adecuado a la información tratada.

Si un proyecto es susceptible de impactar la seguridad del servicio ofrecido, el Prestataire se compromete a informar al CLIENTE de los impactos potenciales, 
de las medidas correctivas previstas y de los riesgos residuales, asegurando una transparencia total.

El Prestataire garantiza que no utilizará los datos del CLIENTE con fines de prueba sin un acuerdo previo y explícito del CLIENTE
y se compromete a anonimizar y proteger la confidencialidad de estos datos durante su procesamiento.

En caso de cambio de subcontratista para el alojamiento, El Prestataire informará al CLIENTE con anticipación, asegurando que esta transición no afecte negativamente el servicio proporcionado.

A petición del CLIENTE, el Prestataire proporcionará acceso a su reglamento interno, a su carta de ética, a las sanciones aplicables en caso de no respeto de su
politica de seguridad, a los eventos que le conciernen, a los procedimientos relativos al servicio y a los requisitos específicos de seguridad.

### 10.2. Limitación de responsabilidad del Proveedor

La estructura de responsabilidad compartida reduce eficazmente el alcance de la intervención del Proveedor a los aspectos relacionados con el suministro de una plataforma RedHat OpenShift funcional, que incluye:

- La gestión de la infraestructura IaaS que soporta la plataforma RedHat OpenShift y su aprovisionamiento,
- La gestión de los sistemas necesarios para el correcto funcionamiento de la plataforma,
- El mantenimiento en condiciones de seguridad,
- La actualización de la plataforma RedHat OpenShift,
- La copia de seguridad de los datos de configuración esenciales de esta plataforma, con excepción de los datos y aplicaciones del CLIENTE que son de su responsabilidad.

Se excluye específicamente, pero no limitándose a:

- La actualización de los sistemas operativos y software instalados por el CLIENTE en sus entornos OpenShift en sus espacios arrendados,
- La seguridad de los programas, software y aplicaciones instalados dentro del entorno OpenShift por el CLIENTE,
- La copia de seguridad de los datos a nivel aplicativo,
- La configuración de las políticas de copia de seguridad.

### 10.3. Limitación de acceso

En el marco de este convenio de servicio, el Proveedor tiene prohibido formalmente acceder a los tenants pertenecientes al CLIENTE sin autorización previa. 
Es responsabilidad del CLIENTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas de hospedaje y,
en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el CLIENTE.

El CLIENTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de servicios acordados,
asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por terceros implicados en la prestación de servicio del Proveedor está estrictamente prohibido.
En el caso de que un requisito técnico específico requiera dicho acceso, éste solo podría establecerse
después de haber notificado claramente al CLIENTE, proporcionado una justificación detallada y obtenido su consentimiento por escrito.

Esta medida garantiza el control y la seguridad de los datos del CLIENTE, asegurando que cualquier excepción a la regla sea debidamente autorizada y documentada.

## 11. Eliminación de datos al final del contrato

Al término del contrato, ya sea que este llegue a su fin o que sea rescindido por cualquier motivo, el Proveedor se compromete a proceder con la eliminación
segura de la totalidad de los datos del Cliente, incluidas las datos técnicos. El Proveedor se asegurará de comunicar al CLIENTE un aviso formal,
respetando un plazo de veintiún (21) días naturales. Los datos del CLIENTE serán entonces eliminados en un plazo máximo de treinta (30) días
siguientes a esta notificación.

Para atestiguar esta eliminación, el Proveedor entregará al Cliente un certificado confirmando la eliminación de los datos.

## 12. Derecho aplicable

El derecho aplicable para el presente convenio de servicio es el derecho francés.

En caso de recurso por parte del Proveedor, en el marco de los servicios prestados al CLIENTE, a una empresa tercera, incluidos los subcontratistas, cuya sede social, administración central
o principal establecimiento se encuentre en un Estado no miembro de la Unión Europea, o que sea propiedad o esté bajo el control de una empresa tercera domiciliada fuera de la Unión Europea,
el Proveedor se compromete a garantizar que dicha empresa tercera no tendrá acceso a los datos procesados por el servicio del Proveedor.

Cabe señalar que los datos mencionados incluyen aquellos confiados al Proveedor por el CLIENTE, así como todos los datos técnicos tales como las identidades de los beneficiarios y administradores de la infraestructura técnica,
los datos manipulados por las redes, los registros de la infraestructura técnica, el directorio, los certificados, la configuración de los accesos, etc., que contienen información sobre el CLIENTE.

Para mayor precisión, el concepto de control se define conforme al II del artículo L233-3 del código de comercio.