---
título: Convención de Servicio SecNumCloud IaaS
---

# CONVENTION DE SERVICIOS IaaS

| Destinatarios: | **COMMANDITARIO** |
| :--- | :--- |
| **Referencia del documento** | CT.AM.JUR.ANX CdS-IaaS - 20251701_v3.0.docx_Día JJ AAAA |
| **Vos interlocutores** | *Apellido* *Nombre* Gerente de cuenta correo electrónico: *apellido.nombre*\@cloud-temple.com |
| **Fecha de última revisión** | 17/01/2025 |
| **Fecha de validación contratual** | Día JJ AAAA |

------------------------------------------------------------------------

| Versión | Fecha | Acción | Autor |
| :--- | :--- | :--- | :--- |
| v0.1 | 07/06/2022 | Redacción inicial | Lorena ALCALDE |
| v0.2 | 14/09/2022 | Enriquecimiento | Lorena ALCALDE |
| v1.0 | 30/12/2022 | Integración de Indicadores | Lorena ALCALDE |
| v1.1 | 23/01/2023 | Modificación pie de página | Lorena ALCALDE |
| v1.2 | 22/05/2023 | Enriquecimiento | Lorena ALCALDE |
| v1.3 | 29/06/2023 | Enriquecimiento | Lorena ALCALDE |
| v1.4 | 06/11/2023 | Modificación Capital y Enriquecimiento | Lorena ALCALDE |
| v1.5 | 30/11/2023 | Enriquecimiento | Lorena ALCALDE |
| v1.6 | 21/03/2024 | Enriquecimiento | Lorena ALCALDE |
| v2.0 | 29/03/2024 | Ajustes de conformidad SNC | Nicolas ABRIOUX |
| v2.0 | 03/04/2024 | Publicación | Lorena ALCALDE |
| V3.0 | 17/01/2025 | Enriquecimiento | Emeline CAZAUX |

------------------------------------------------------------------------

## Introducción y Diccionario

## Introducción

El presente documento formaliza la Cláusula de Servicio asociada al servicio IaaS calificado SecNumCloud, conocida como "Templo Seguro".

El Servicio está calificado SecNumCloud (ver certificado en Anexo).

La presente cláusula de servicio completa y complementa las Condiciones Generales de Venta y Uso del Proveedor. Se entiende que los documentos contractuales se interpretarán de manera coherente entre sí. En caso de contradicción o divergencia en los términos de los documentos contractuales, prevalecerán los siguientes en el orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Cláusula de Servicio SecNumCloud IaaS
3. Cláusula de Servicio OpenIaaS SecNumCloud
4. Cláusula de Servicio PaaS SecNumCloud
5. Cláusula de Servicio específico - Bare Metal
6. Cláusula específica particular
7. Plan de Seguro de Seguridad (PAS)
8. Condiciones Particulares de Uso (CPU)
9. Acuerdo de Protección de Datos

## Glossary

In the present Service Agreement, the **Commanditaire**, **Prestataire** and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned to them below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, with known and accepted production procedures and impacts (including financial ones) by all Parties. It is then integrated into the standard change catalog, and may have a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Prestataire for the Commanditaire to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document, established within a specific contract or General Terms of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Request for service:** A request for evolution following a procedure where realization: i) does not modify the CMDB; ii) known operational mode, costs, and risks are accepted upfront and do not require specific rollback modalities; iii) is subject to an agreed level of service (SLA) agreement and included in the contract revenue when performed during business hours.

- **Availability:** Capacity to ensure Service availability and optimal performance, in accordance with defined criteria and commitments within the Service Level Agreements (SLAs).

- **Technical data:** Encompasses all data processed for delivering the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates...

- **Event:** Any detectable or identifiable occurrence that may have significance for managing the Service.

- **Hypervisor:** Operating system enabling execution of virtual machines on a compute layer.

- **Incident:** Any unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security incident:** Any event within the Service's scope:

  - Intentionally malicious;
  - Accidental affecting the integrity, confidentiality, or traceability of the Service or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin disruption of availability due to hardware failure, bug, malfunction, natural disaster, etc., is not considered a security incident.

- **Commanditaire interface:** Administration interface for the Service provided by the Prestataire to the Commanditaire, comprising a web administration console and an API.

- **Production:** Actions of administration carried out upon Change approval (the change, in ITIL terms, pertains to change management but not its execution/implementation).

- **Problem:** Cause of recurring incidents, potential incident (situation at risk) requiring analysis and resolution for prevention recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services to optimize latency, performance, and local regulatory compliance.

- **Service:** The SecNumCloud certified IaaS service "Secure Temple," delivered by the Prestataire from maintained technical infrastructures as described in the "Description of Service" section of this Service Agreement.

- **Secure Temple:** Refers to the SecNumCloud IaaS service, offered by Cloud Temple, as defined in the accessible ANSSI attestation on their website and included as an attachment to this Service Agreement.

- **Catastrophe:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of a Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without direct intervention on monitored elements, a prerogative reserved for operations management.

- **Tenant:** An isolated instance reserved for a user or group of users sharing a common infrastructure while maintaining data and application independence and security.

- **Availability zone (AZ) (Availability region):** A specific, isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through geographical distribution of resources.

# Acrónimos

| Acrónimo | Definición |
| :--- | :--- |
| **CAB** | Comité consultivo sobre cambios -- Comité consultivo sobre cambios |
| **CMDB** | Base de datos de gestión de configuraciones -- Base de datos de gestión de configuraciones |
| **COPIL** | Comité de supervisión |
| **COSTRAT** | Comité estratégico |
| **COPROJ** | Comité de proyecto |
| **DB** | Base de datos (base de datos) |
| **DPA** | Acuerdo de protección de datos |
| **DRP** | Plan de recuperación ante desastres (PRA) -- Plan de reprise d'activité |
| **GTE** | Garantía de tiempo escalado |
| **GTI** | Garantía de tiempo de intervención |
| **GTR** | Garantía de tiempo de resolución |
| **ITIL** | Biblioteca de buenas prácticas para la gestión de SI -- Bonnes pratiques pour la gestion des SI |
| **IaaS** | Infraestructura como servicio (IaaS) |
| **MCO** | Mantenimiento en condiciones operativas |
| **MOA** | Gestión del proyecto |
| **MOE** | Gestión de obra |
| **MSP** | Proveedor de servicios gestionados |
| **OS** | Sistema operativo (sistema operativo) |
| **PAQ** | Plan de calidad |
| **PaaS** | Plataforma como servicio (PaaS) |
| **PAS** | Plan de seguridad |
| **PASSI** | Proveedor de auditoría de sistemas de información |
| **RFC** | Solicitud de cambio -- Demanda de changement |
| **RGPD** | Reglamento general de protección de datos (personales) |
| **RPO** | Objetivo de fraichez de los datos en caso de desastre -- Fraichez des données restaurées en cas de sinistre |
| **RTO** | Objetivo de tiempo de recuperación del servicio en caso de desastre -- Délai de rétablissement du service en cas de sinistre |
| **SDM** | Gestor de entrega de servicios |
| **SLA** | Acuerdo sobre niveles de servicio (SLA) -- Accord sur les niveaux de services |
| **SNC** | SecNumCloud |
| **SOC** | Centro de operaciones de seguridad |
| **TMA** | Mantenimiento de aplicaciones terceras |
| **UO** | Unidad de obra |
| **VABE** | Validación de aptitud para buena explotabilidad |
| **VABF** | Validación de aptitud al buen funcionamiento |
| **VM** | Máquina virtual (Machine virtuelle) |
| **VSR** | Válidación de servicio regular |

# Objet de la presente Convenio de Servicio

La presente Convenio de Servicio establece los términos y condiciones bajo los cuales el Proveedor se compromete a entregar el Servicio al COMMANDITARIO. Su objetivo es:

- Especificar las expectativas de rendimiento esperadas por el COMMANDITARIO en términos de funcionalidad y fiabilidad del Servicio;

- Detallar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

- Identificar las normas regulatorias aplicables específicamente al Servicio entregado;

- Garantizar la uniformidad y la integridad en la evaluación de la calidad del Servicio;

- Asegurar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se establece que, en caso de que el Proveedor pierda su calificación SecNumCloud, el Contrato podrá ser resuelto de forma automática y sin penalización alguna por parte del COMMANDITARIO. En tal supuesto, el Proveedor se compromete a informar al COMMANDITARIO de esta degradación de la calificación mediante un comunicado oficial, mediante correo certificado con solicitud de constancia de recepción.

Es importante destacar que cualquier modificación o ajuste en la calificación SecNumCloud no será interpretada como una revocación de la calificación inicial.

# Auditoría

El Proveedor se compromete a permitir que el **CLIENTE**, o cualquier auditor externo y no concurrente del Proveedor que este último haya designado, acceda a todos los documentos necesarios para la certificación del cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Al aceptar esta Convenio de Servicio, el **CLIENTE** otorga explícitamente su autorización al:

 1. La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) y a la entidad de certificación competente para realizar la verificación del cumplimiento del Servicio y del sistema de información al referencial SecNumCloud.
2. Un auditor externo de seguridad de sistemas de información, debidamente calificado PASSI y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio.

## Descripción del Servicio

Este servicio ofrece soluciones avanzadas en infraestructura de nube, gestión de sistemas IT y desarrollo de software. Nuestro equipo experto se dedica a la implementación de soluciones escalables, seguras y eficientes que permiten a las empresas optimizar sus operaciones y alcanzar nuevos niveles de productividad.

A través de una combinación de tecnologías de punta y metodologías innovadoras, nos enorgullecemos de proporcionar soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente. Nuestro enfoque se centra en la automatización, el análisis predictivo y la optimización continua para garantizar que nuestros clientes siempre estén a la vanguardia de la innovación tecnológica.

En nuestra oferta, encontrará desde la gestión de plataformas de computación en la nube hasta el desarrollo de aplicaciones empresariales, pasando por la implementación de soluciones de seguridad robusta y la optimización de infraestructuras IT. Nuestro compromiso con la calidad y la innovación nos permite ofrecer servicios de alta calidad que aseguran el éxito de sus negocios en un entorno digital cada vez más competitivo.

## Shared Responsibility Model

The service offered by the Provider is characterized by providing the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);
- Availability of storage spaces;
- Access to network connectivity and internet services;
- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the context of the Service is detailed in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services in accordance with professional best practices and in compliance with SecNumCloud requirements.

## Detallada Descripción del Alcance del Servicio

| Servicio | Descripción |
| :--- | :--- |
| **Computación** | Recursos de cálculo del Tenant COMMANDITAIRE |
| **Almacenamiento** | Datos de producción del Tenant COMMANDITAIRE |
| **Almacenamiento objetivo S3** | Provisión de una infraestructura de almacenamiento objetivo soberano multi-zona y compatible con las APIs S3 estándar. |
| **Backup** | Modulo suscripción a un almacenamiento masivo adecuado |
| **Infraestructura de red** | Recurso de red del Tenant COMMANDITAIRE |
| **Console COMMANDITAIRE** | El servicio que permite al COMMANDITAIRE acceder a su servicio IaaS y administrarlo a través de la interfaz Shiva |
| **Soporte** | El servicio de soporte asociado con los servicios anteriores y exclusivamente estos últimos (\*) |

\_(\*) En el límite del alcance del Servicio calificado SNC y las responsabilidades del Proveedor en relación con él\_

### Infraestructuras Centros de Datos

El servicio incluye la oferta, para cada Zona de Disponibilidad, las siguientes prestaciones calificadas:

- Centro de datos ubicado en Francia para la Región FR, conforme a las últimas normativas tecnológicas, proporcionando un nivel de resiliencia equivalente o superior al Tier 3 del Uptime Institute;
- Oferta de salas técnicas dentro de centros de datos dedicados para alojar los equipos técnicos indispensables para la producción del servicio, incluyendo procesamiento, almacenamiento, red, cableado y otros componentes necesarios;
- Alimentación eléctrica segura, garantizada por dos circuitos eléctricos distintos, asegurando continuidad de servicio;
- Suministro constante de servicios de climatización ajustados para cumplir con las normas y recomendaciones del fabricante de equipos, manteniendo un entorno óptimo para los dispositivos técnicos;
- Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y la seguridad del servicio ofrecido.

El Proveedor se encarga de la oferta de servicios avanzados de detección e extinción de incendios, diseñados para identificar y neutralizar eficazmente cualquier inicio de incendio dentro de las instalaciones. Estos sistemas incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir riesgos de incendio, minimizar los daños potenciales y garantizar la continuidad de las operaciones.

El COMMANDITAIRE está informado de que todas las procedimientos y medidas de seguridad implementadas, incluyendo los pruebas anuales de corte de energía en los generadores, son esenciales para garantizar la continuidad e integridad de los servicios prestados. Estas prácticas están diseñadas para minimizar los riesgos de fallo y asegurar una respuesta óptima en caso de incidente. Al aceptar estas condiciones, el COMMANDITAIRE reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. Además, el COMMANDITAIRE está animado a consultar las recomendaciones de seguridad proporcionadas y a integrarlas en su propia estrategia de gestión de riesgos.

### Infraestructura de gestión del servicio

El Proveedor entrega al COMMANDITARIO la consola de administración y la API necesarias para el uso del Servicio. Además, se compromete a mantener esta consola de administración y la API en óptima condición operativa y asegurar su seguridad de manera continua. Esta consola de administración y la API se denominan conjuntamente como "la interfaz COMMANDITARIO".

El Proveedor informa al COMMANDITARIO que una utilización anormal de la interfaz COMMANDITARIO, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o al Servicio. Es importante destacar que esta situación no implica una indisponibilidad del Servicio, sino una acción de protección tanto del Servicio como de la infraestructura del Proveedor. Por lo tanto, el COMMANDITARIO no puede considerarlo como una indisponibilidad en sus cálculos.

Además, el Proveedor indica al COMMANDITARIO que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el COMMANDITARIO envía solicitudes idénticas a una frecuencia superior, su rechazo no puede interpretarse como una indisponibilidad del Servicio.

### Infraestructuras de Cálculo

El servicio incluye la provisión, en las zonas de disponibilidad
suscritas por el COMMANDITARIO, de los equipos necesarios para ejecutar
las cargas de trabajo en forma de máquinas virtuales.

Esto comprende:

- La provisión de marcos técnicos necesarios para el correcto funcionamiento
  de las lanzallamas de cálculo;
- La provisión de lanzallamas de cálculo en las cantidades especificadas por
  el COMMANDITARIO y distribuidas según las zonas de disponibilidad que
  elija. Es importante destacar que estas lanzallamas de cálculo están
  exclusivamente dedicadas al COMMANDITARIO;
- La disponibilidad de sistemas operativos de tipo hypervisores, así como la
  garantía del mantenimiento en condiciones operativas y de seguridad de
  la infraestructura lógica necesaria para controlar estos sistemas
  operativos. Es conveniente destacar que, aunque el Proveedor es responsable
  del mantenimiento operativo y de la seguridad general del servicio, no
  posee conocimientos específicos sobre los entornos de producción del
  COMMANDITARIO ni las exigencias relacionadas con sus cargas de trabajo.
  Por lo tanto, la responsabilidad de decidir la actualización de los sistemas
  operativos de las lanzallamas de cálculo hypervisores, una acción que puede
  requerir un reinicio, recae completamente en el COMMANDITARIO. Esta
  operación puede realizarse a través de la interfaz COMMANDITARIO.

El elegir el modelo de lanzallama de cálculo, seleccionado entre el catálogo
ofrecido por el Proveedor, compete a la responsabilidad del COMMANDITARIO.

### Infraestructura de almacenamiento

El servicio incluye la provisión al COMMANDITARIO de una infraestructura
de almacenamiento compartida de tipo SAN (Network Area Storage), que ofrece
varios niveles de rendimiento. Este servicio abarca:

- La implementación y el mantenimiento en condiciones operativas y de seguridad
  del red SAN dedicada;
- La instalación y gestión de las cajas de almacenamiento compartidas entre los
  clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad,
  supervisión y monitoreo;
- La implementación de sistemas automatizados para la asignación de LUNs (Unidades
  de Lógico Numérico) de almacenamiento dedicados al uso del COMMANDITARIO,
  en conformidad con los volúmenes suscritos por el COMMANDITARIO.

### Infraestructura de red global

El Proveedor despliega, como parte del Servicio, un red global que permite al COMMANDITAIRE la accesibilidad de sus sistemas alojados. Este servicio incluye:

- La provisión, el mantenimiento en condiciones operativas y de seguridad de toda la conectividad óptica entre las diferentes Zonas de disponibilidad;

- La provisión, el mantenimiento en condiciones operativas y de seguridad de los equipos técnicos necesarios para el correcto funcionamiento del red y la aislamiento de los distintos clientes.

La interconexión de red del TENANTE COMMANDITAIRE, con Internet o redes privadas, así como los componentes de red, enlaces operadores y otros componentes técnicos que realizan esta interconexión, no forman parte del alcance del Servicio. Esta interconexión de red se implementa de conformidad con las disposiciones previstas en el Contrato.

### Infraestructura de respaldo

El Proveedor ofrece al COMMANDITAIRE un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus máquinas virtuales. El Proveedor se encarga del mantenimiento en condiciones operativas y de seguridad de este servicio de respaldo. El Proveedor garantiza que las copias de seguridad del COMMANDITAIRE estarán ubicadas fuera de la Zona de disponibilidad de las cargas de trabajo protegidas, bajo la condición de que el COMMANDITAIRE haya suscrito las unidades de producción adecuadas.

Esta prestación de respaldo se limita al respaldo de máquinas virtuales y configuraciones de topología del entorno IaaS de los Tenantes del COMMANDITAIRE, en el marco del Servicio. La elaboración y aplicación de una política de respaldo adecuada por parte del COMMANDITAIRE depende de la suscripción a unidades de producción específicas. Es responsabilidad del COMMANDITAIRE asegurar la disponibilidad de los recursos técnicos necesarios con el Proveedor para implementar su política de respaldo o ajustarla en función de las posibilidades disponibles.

El Proveedor se compromete a notificar al COMMANDITAIRE en caso de limitaciones de capacidad y a proporcionar orientación consultiva para la optimización de recursos. Las obligaciones del Proveedor se limitarán a la implementación de los requisitos expresados por el COMMANDITAIRE en materia de política de respaldo, dentro de las unidades suscritas.

### Implementación de soluciones de recuperación ante desastres o continuidad de negocios

El Proveedor ofrece al COMMANDITARIO toda la infraestructura técnica necesaria para garantizar una distribución óptima de sus recursos a través de diversas Zonas de disponibilidad. Es responsabilidad del COMMANDITARIO gestionar eficazmente esta asignación de recursos, para lo cual cuenta con el acceso a los herramientas del Proveedor destinadas a este fin.

## Limitaciones de los servicios en el modelo IaaS calificado

En el marco del modelo de Infraestructura como Servicio (IaaS) calificado, existen varias limitaciones a considerar:

1. **Control y Gestión**: Aunque el proveedor ofrece una infraestructura virtualizada, el usuario tiene un control limitado sobre la gestión de los recursos subyacentes. Esto incluye aspectos como la configuración del hardware, las actualizaciones del sistema operativo y la optimización del rendimiento.

2. **Escalabilidad**: Aunque el IaaS ofrece una escalabilidad flexible, puede haber restricciones en términos de recursos disponibles para nuevas instancias o servicios que se agreguen rápidamente a la infraestructura.

3. **Seguridad y Cumplimiento**: Aunque el proveedor ofrece herramientas de seguridad, el usuario es responsable de implementar políticas de seguridad adecuadas y cumplir con los requisitos regulatorios específicos de su industria.

4. **Dependencia del Proveedor**: La dependencia de un único proveedor puede limitar la flexibilidad en términos de migración de servicios o cambio de plataforma, ya que esto podría implicar costos adicionales y complejidades administrativas.

5. **Costos Ocultos**: Aunque el IaaS ofrece un modelo de precios basado en la utilización, pueden surgir costos ocultos relacionados con el uso excesivo de recursos, transferencias de datos fuera del plan de suscripción, y cargos por servicios adicionales.

6. **Gestión de Datos**: La gestión de los datos almacenados en el IaaS puede ser compleja, especialmente cuando se trata de la integración con otros sistemas, la protección de datos sensibles y la conformidad con normativas como GDPR.

7. **Optimización del Rendimiento**: Aunque el usuario tiene cierta flexibilidad en la configuración de los recursos virtuales, optimizar el rendimiento de las aplicaciones puede ser un desafío debido a la naturaleza dinámica y distribuida de los servicios IaaS.

8. **Integración con Aplicaciones**: La integración de aplicaciones desarrolladas internamente con plataformas IaaS puede requerir esfuerzos adicionales para garantizar compatibilidad, especialmente si las aplicaciones dependen de tecnologías o interfaces específicas que no están disponibles en el entorno IaaS.

9. **Gestión de Ciclos de Vida**: La gestión completa del ciclo de vida de los recursos virtuales (creación, modificación, eliminación) puede ser compleja y requerir herramientas o procesos especializados para garantizar la eficiencia y la consistencia.

10. **Escalabilidad Horizontal vs Vertical**: Aunque el IaaS permite escalar horizontalmente (agregando más instancias), puede haber limitaciones en la escala vertical (mejorar las características de una sola instancia) debido a los recursos físicos del proveedor.

Estas limitaciones son cruciales para evaluar el rendimiento y la viabilidad del modelo IaaS calificado, especialmente en contextos donde se requieren altos niveles de control, flexibilidad y personalización.

### Servicios administrados en RUN

Es importante señalar que no incluye el servicio:

- Almacenamiento de componentes físicos del COMMANDITAIRE;

- Conectividad de red del Tenant COMMANDITAIRE, con Internet o redes privadas, incluyendo los enlaces operadores;

- Todo servicio de tipo administrado, o TMA;

- Asistencia sobre máquinas virtuales en nivel de OS y por encima en la capa de responsabilidad Iaa, incluso si se trata solo de supervisión.

Sin embargo, no es en absoluto excluido que COMMANDITAIRE utilice tales servicios a través del ofrecimiento MSP del Proveedor para intervenir en modo de servicio administrado sobre sus Tenants. En dichos casos, estos servicios no estarán sujetos a la presente Condición de Servicio ni a sus compromisos/cláusulas bilaterales.

### Configuración del respaldo

De forma predeterminada, el Proveedor configura las recursos del IaaS en el COMMANDITAIRE reservando recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Es responsabilidad del COMMANDITAIRE seleccionar las Zonas de disponibilidad a través de la interfaz COMMANDITAIRE.

### Configuration de la Sauvegarde

La prestación de sauvegardes se detiene en las máquinas virtuales y las configuraciones de topología que representan el entorno IaaS del Tenante COMMANDITAIRE dentro del marco del Servicio.

La prestación de sauvegardes y la ejecución de la política de sauvegarde del COMMANDITAIRE est sujeta a la suscripción de espacio de almacenamiento en el almacenamiento masivo necesario para garantizar el servicio. Por lo tanto, es responsabilidad del COMMANDITAIRE suscribirse con el Proveedor los medios técnicos necesarios para ejecutar la política de sauvegarde dentro de su área informática, o ajustar la política de sauvegarde en función de los métodos implementados. El Proveedor se compromete a informar al COMMANDITAIRE en caso de límite técnico de capacidad.

El Proveedor establecerá los medios técnicos y humanos necesarios para realizar la salvaguarda del sistema, dentro de las limitaciones de los recursos suscritos por el COMMANDITAIRE.

Además, en el caso de perímetros no gestionados por el Proveedor, corresponde al COMMANDITAIRE definir su propia estrategia de sauvegardes y configurar manualmente las salvaguardas de VM o solicitar un Servicio de Nivelación si el COMMANDITAIRE tiene un contrato de servicio gestionado que permita al Proveedor actuar a través de la interfaz COMMANDITAIRE, que es la consola de administración disponible en el marco de esta Convenio de Servicio y que cuenta con funcionalidades para configurar las salvaguardas.

Además, este servicio se comprometerá únicamente a traducir por medio del configuración a través de la interfaz COMMANDITAIRE la configuración específicada claramente por el COMMANDITAIRE.

Por razones de flexibilidad en la oferta del Proveedor, el COMMANDITAIRE tiene la opción de asociar una política de no-sauvegarde en ciertas máquinas virtuales. En este caso, corresponde al COMMANDITAIRE tomar esta decisión. El Proveedor no realizará salvaguardas para las VM asociadas a la política "no backup". El Proveedor informará al COMMANDITAIRE que elegir la política "no backup" o realizar una salvaguarda manual expone al COMMANDITAIRE a una pérdida de datos definitiva en caso de incidente en las capas básicas o en las capas dependientes de su responsabilidad en el modelo IaaS. En tal caso, sería imposible responsabilizar al Proveedor por restaurar los datos, ya que no habría nada para restaurar. El Proveedor recomienda siempre realizar salvaguardas de las VM.

Para cualquier tema relacionado con el sistema operativo instalado en una máquina virtual y cualquier software o programa ejecutado "sobre el SO", es responsabilidad del COMMANDITAIRE llevar a cabo las operaciones administrativas y de supervisión dentro de la Unión Europea si desea garantizar que toda la verticalidad de las capas del SI se realice y gestione desde la Unión Europea. Las operaciones administrativas fuera del ámbito de responsabilidad del Proveedor en el marco de la presente Convenio de Servicio, indicadas en la sección "Política de Responsabilidades Compartidas" de la presente Convención de Servicio.

## Implementación del Servicio

### Requis técnicos

Para la implementación del Servicio, el COMMANDITAIRE reconoce que deberá:

- Funcionar con virtualización de tipo VMware en las versiones
    soportadas por el editor y proporcionadas por el Proveedor como parte del Servicio;

- Depender del Proveedor para el uso del herramienta de back up;

- Declarar IPs fijos desde los cuales el Proveedor le permitirá acceder a la interfaz COMMANDITAIRE (Filtrado por lista blanca). Las modificaciones de esta lista de IPs deberán realizarse a través del menú previsto para la console o a través de Solicitudes de servicio para las modificaciones posteriores. Al iniciar el servicio, el Proveedor será informado al menos de una dirección IP como se describe.

## Ubicación del servicio en Francia

Se especifica que ninguna de las operaciones y ninguno de los componentes físicos involucrados en la prestación del Servicio, al cual se refiere la presente Condición de Servicio, no está ubicado fuera de la Unión Europea.

Esto incluye, entre otros, el soporte, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que entrega el Servicio. De manera que todo el almacenamiento, las tareas administrativas, de supervisión y los procesos se realizan en Francia.

### Localización de los Centros de Datos que Albergan el Servicio

En ausence de las operaciones de los empleados y agencias del Proveedor, todas las operaciones de producción (incluyendo el almacenamiento y procesamiento de datos) y componentes técnicos que brindan el Servicio están ubicados en Centros de Datos ubicados en Francia.

### Localización de las oficinas Cloud Temple que brindan el servicio

Los empleados de Cloud Temple que operan dentro del alcance del servicio trabajan desde las oficinas de Cloud Temple ubicadas exclusivamente en Francia. Estas oficinas se encuentran en Tours, Lyon, Caen y París La Défense.

El Comanditario está informado sobre la posibilidad para los empleados de Cloud Templo trabajar de manera remota. Sin embargo, el Proveedor asegura el mismo nivel de seguridad en relación con los acceso remoto, especialmente en lo que respecta a los accesos VPN. Estos accesos remotos se implementan de conformidad con las exigencias del recién establecido référentiel SecNumCloud.

## Soporte

### Características del soporte asociado al servicio

El Proveedor ofrece un servicio de soporte técnico destinado a ayudar al COMMANDITAIRE en la gestión, el mantenimiento y la optimización de sus recursos desplegados. Este servicio abarca una amplia gama de actividades, desde la asistencia en la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación se describe las características y funcionalidades del servicio de soporte:

- Asistencia en la implementación inicial del uso del Servicio;
- Asistencia en la resolución de incidentes;
- Asistencia en la resolución de problemas;
- Seguimiento y asesoramiento sobre la optimización del núcleo técnico.

En el marco del servicio de soporte, el Proveedor no reemplaza al COMMANDITAIRE en el uso del Servicio. El COMMANDITAIRE permanece completamente responsable de la configuración, el uso de sus VM y Tenants, así como de la gestión de todos los elementos (datos e aplicaciones incluidas) que almacena o instala sobre las infraestructuras del Proveedor. El servicio técnico de soporte se presta en conformidad con las Condiciones Generales de Venta y Uso, el Proveedor está sujeto a una obligación de medios.

El COMMANDITAIRE se compromete a utilizar el servicio técnico de soporte de manera razonable, evitando especialmente solicitar servicios no suscritos al Proveedor y enviar a las equipos del Proveedor para atender a sus propios clientes o a terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de las unidades de trabajo de soporte asociadas.

### Solicitude del Servicio Técnico

El soporte técnico está disponible a través de un sistema de tickets mediante la consola COMMANDITAIRE y es accesible durante las horas laborales normales fuera de los días festivos (de 8:00 a 18:00, lunes a viernes; calendario y horarios franceses). Para emergencias que ocurren fuera de los horarios de oficina, especialmente las incidencias que afecten significativamente la producción, el servicio de urgencia puede ser contactado mediante un número comunicado al COMMANDITAIRE al inicio del Servicio.

Para cada solicitud o incidente, es imprescindible generar un ticket con el soporte del Proveedor. La inicialización de este ticket, que incluye toda la información necesaria, es fundamental y marca el comienzo de la evaluación de los compromisos del Proveedor.

A medida que el COMMANDITAIRE recibe una solicitud o notificación de incidente, ya sea a través de la consola de gestión o tras una llamada telefónica, se crea automáticamente un ticket. Al declarar un incidente, es crucial que el COMMANDITAIRE proporcione al Proveedor los detalles más detallados sobre el problema encontrado. Esta acción es esencial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico eficiente.

El COMMANDITAIRE recibe entonces una confirmación por correo electrónico, que indica la creación del ticket y su número único. El COMMANDITAIRE puede consultar el estado y el historial de sus solicitudes e incidentes directamente desde la consola de gestión.

### Proceso de Gestión de Incidentes

Al declarar un incidento, la equipe de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El COMMANDITAIRE debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando los pruebas requeridos. El Proveedor puede acceder al Servicio del COMMANDITAIRE para diagnosticar el incidente.

Si los servicios del Proveedor se consideran funcionales y el incidente no le es imputable, el COMMANDITAIRE lo informará. Bajo la solicitud del COMMANDITAIRE, el Proveedor puede proponer servicios profesionales para identificar la origen del problema, facturable previamente en tramos de 30 minutos.

En caso de que el incidente sea atribuible al Proveedor o a uno de sus subcontratistas, este completará el diagnóstico y se encargará de la restauración del servicio sin costos adicionales. El diagnóstico se basa en los intercambios entre las partes y los datos del Proveedor, considerados probatorios por acuerdo de las partes.

### Proceso de priorización de los tratajos

El determinar el nivel de prioridad de un archivo se basa en una análisis matricial que evalúa el impacto del incidente y su grado de crítica:

- Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción |
| :--- | :--- |
| **Impacto I1** | El o los servicios del Proveedor están interrumpidos |
| **Impacto I2** | El o los servicios del Proveedor se ven afectados |
| **Impacto I3** | Los servicios del Proveedor están actualmente estables, pero muestran signos de declino a largo plazo potencial |

- Los niveles de crítica se definen de la siguiente manera:

| Nivel de crítica | Descripción |
| :--- | :--- |
| **Crítica C1** | Los servicios del Proveedor se degradan a un ritmo preocupante |
| **Crítica C2** | Los servicios del Proveedor se deterioran gradualmente con el tiempo |
| **Crítica C3** | Los servicios del Proveedor presentan uno o más inconvenientes sin consecuencias significativas |

- Basado en una evaluación exhaustiva de la situación, considerando los factores que determinan el impacto y la crítica, se asigna una prioridad al ticket según la matriz de decisión siguiente:

| Nivel de impacto / Nivel de crítica | Impacto I1 | Impacto I2 | Impacto I3 |
| :--- | :--- | :--- | :--- |
| **Crítica C1** | Prioridad P1 | Prioridad P2 | Prioridad P3 |
| **Crítica C2** | Prioridad P2 | Prioridad P3 | Prioridad P4 |
| **Crítica C3** | Prioridad P3 | Prioridad P4 | Prioridad P5 |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### Lenguaje y localización del servicio de soporte

El soporte se presta al proveedor al COMMANDITARIO mínimo en francés. El soporte también puede estar disponible en inglés.

Las operaciones del servicio de soporte del proveedor para la oferta de servicio de infraestructura calificada SecNumCloud se llevan a cabo dentro de la Unión Europea.

# Compromisos y niveles de servicio

El Proveedor se compromete a garantizar una supervisión continua de la
calidad y la integridad segura de su infraestructura técnica que entrega el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad del servicio, cuya medición es un indicador de rendimiento, se reconoce de inmediato por el sistema de supervisión del Proveedor, o mediante una notificación por parte del usuario COMMANDITAIRE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos para garantizar un cálculo preciso y justo del tiempo de indisponibilidad.

La finalización oficial de la indisponibilidad se marca por la restauración completa del servicio, confirmada tanto por los herramientas de supervisión del Proveedor como por una notificación del usuario, lo que garantiza una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

## Availability Commitments of the Infrastructure

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period. These Service Level Agreements (SLAs) are subject to the CONDITION that the COMMANDITAIRE implements its systems across at least two of the available zones within the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will be unable to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is provided through the COMMANDITAIRE interface. The measurements are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.

***Remarks***:

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic directed at the targeted IP from upstream providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIRES and the Provider’s infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the command-line interface API.

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## Garantía de Disponibilidad de la Interfaz COMMANDITAIRE

- SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio:
    una disponibilidad garantizada del 97%, proporcionada en tiempo real,
    las 24 horas del día y los 7 días de la semana.
- SLA 7: IC-INFRA_SNC-07 -- Acceso a las APIs de control del Servicio:
    una disponibilidad del 99.9%, calculada sobre una base de 24 horas al día,
    los 7 días de la semana.

## Service Level Agreement (SLA) Availability Commitment

- **SLA 8: IC-INFRA_SNC-08** - Here are the performance commitments of the Provider's technical support for incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

- **SLA 9: IC-INFRA_SNC-09** - Here are the performance commitments of the Provider's technical support for service requests:

| Type | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note*:

- *The GTI delay is calculated from the moment the COMMANDITAIRE opens the ticket until the first intervention by the Provider's support.*
- *Investigation of incidents concerning COMMANDITAIRE commands will not include remote server interventions on the COMMANDITAIRE's hosted servers. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE environment, facilitating understanding of encountered performance issues or problems. Based on these analysis results, recommendations can be suggested.*

## Compromiso de disponibilidad del almacenamiento objeto S3

- **SLA 10: IC-INFRA_SNC-10** - Aquí se detallan los compromisos de disponibilidad para el almacenamiento objeto S3:

| Indicador | Compromiso | Objetivo de disponibilidad |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durabilidad del almacenamiento de un objeto en una región | 99.9999999% / año |
| **IC-INFRA-SNC-10.2** | Disponibilidad de la API de Almacenamiento Objet S3 | 99.99% |
| **IC-INFRA-SNC-10.3** | Latencia máxima de acceso a un objeto en una región | 150 ms |

Notas:

- El servicio de Almacenamiento Objet está específicamente diseñado para el almacenamiento de objetos y debe utilizarse exclusivamente para este propósito, **excluyendo categóricamente su uso en modo bloque**. Utilizar el modo bloque mediante métodos no autorizados, incluidos por ejemplo, la implementación de "FUSE" en un entorno Linux, constituye una violación de los términos de uso mencionados. Cualquier incidente, fallo o daño resultante de este uso no conforme no estará cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en esta convención de servicios.
- La garantía de durabilidad está sujeta a una utilización de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de datos, sea intencional o accidental, resultante de acciones realizadas por el COMMANDITAIRE.

## Precisión sobre el compromiso de respaldo

El enfoque de respaldo implementado para COMMANDITAIRE está sujeto a la suscripción de unidades de trabajo adecuadas.

El Proveedor se compromete a ofrecer una solución de respaldo que permita al COMMANDITAIRE aplicar las políticas de respaldo deseadas.

Se especifica que el alcance del Proveedor se limita a la entrega de un servicio de respaldo, mientras que el COMMANDITAIRE es responsable de supervisar la ejecución correcta de las políticas asociadas a través de la interfaz COMMANDITAIRE.

Se indica que la gestión del uso de almacenamiento en el espacio de almacenamiento dedicado al respaldo permanece a cargo y responsabilidad del COMMANDITAIRE. El Proveedor proporciona el porcentaje de utilización a través de la consola.

*Ejemplo: No realización de respaldo de una máquina virtual:*

El COMMANDITAIRE tiene la responsabilidad de verificar / supervisar la ejecución correcta de las políticas de respaldo. En caso de que el COMMANDITAIRE detecte que una máquina virtual no está siendo respaldada, es su responsabilidad identificar la causa y, en caso necesario, solicitar asistencia al Soporte del Proveedor según el nivel de soporte suscrito.

**El SLA 8 : IC-INFRA_SNC-08 y el SLA 9**, estarán exclusivamente aplicables en el caso de un incidente del servicio de respaldo.

## Organización de la relación contratual

## Responsabilidades del Proveedor

El Proveedor se compromete a:

- Informar al COMMANDITAIRE de manera adecuada (por ejemplo, en caso
    de limitación de capacidad técnica que pueda afectar la prestación
    del Servicio).

- Informar formalmente al COMMANDITAIRE y dentro de un mes, de cualquier
    cambio jurídico, organizativo o técnico que pueda afectar la
    conformidad del Servicio con las exigencias de protección contra
    leyes extraterritoriales (19.6 del référentiel SNC v3.2).

- Proporcionar al COMMANDITAIRE interfaces y servicios de soporte en
    francés mínimo.

- Considerar las exigencias sectoriales específicas relacionadas con los
    tipos de información confiadas por el COMMANDITAIRE para la implementación
    del Servicio, dentro de las responsabilidades del Proveedor y del Contrato
    del otro lado; así como cualquier disposición prevista en el Contrato.

- Estudiar las exigencias sectoriales específicas relacionadas con los tipos
    de información confiadas por el COMMANDITAIRE, expresadas más adelante
    por este último, y comunicar al mismo las acciones necesarias para su
    consideración.

- No divulgar ninguna información relativa a la prestación a terceros,
    salvo una autorización formal y escrita del COMMANDITAIRE.

- Poner a disposición del COMMANDITAIRE todas las informaciones necesarias
    para realizar auditorías de conformidad según lo dispuesto en el artículo 28
    del RGPD.

- Informar al COMMANDITAIRE, a través de la presente Convenio de servicio,
    sobre cualquier incidente de seguridad que afecte al Servicio o al uso
    realizado por el COMMANDITAIRE del mismo (incluyendo los datos del COMMANDITAIRE).

- Autorizar un prestador de auditoría de la seguridad de los sistemas de
    información (PASSI) calificado, mandatado por el Proveedor, para auditar
    el servicio y su sistema informático, en conformidad con el plan de control
    del SecNumCloud del Proveedor. Además, el Proveedor se compromete a proporcionar
    todas las informaciónes necesarias para llevar a cabo auditorías de conformidad
    con el artículo 28 del RGPD, realizadas por el COMMANDITAIRE o por un tercero
    mandatado.

- Proporcionar al COMMANDITAIRE, en calidad de subcontratista, de acuerdo
    con el artículo 28 del Reglamento general sobre la protección de datos (RGPD),
    asistencia y asesoramiento, alertándolo inmediatamente cuando una instrucción
    emitida por este último sea susceptible de violar las normas de protección
    de datos.

- Notificar al COMMANDITAIRE en un plazo razonable, a través de la consola
    del COMMANDITAIRE o por correo electrónico al contacto COMMANDITAIRE,
    cuando un proyecto impacte o sea susceptible de impactar el nivel de seguridad
    o disponibilidad del Servicio, o genere una pérdida de funcionalidad, potenciales
    impactos, medidas de mitigación implementadas y riesgos residuales que le
    afecten.

- Documentar y poner en práctica todas las procedimientos necesarios para cumplir
    con las exigencias legales, regulatorias y contractuales aplicables al Servicio,
    así como los requisitos de seguridad específicos del COMMANDITAIRE, definidos
    por este último y previstos en el Contrato.

- No utilizar las datos del COMMANDITAIRE provenientes de la producción para realizar
    pruebas, a excepción de obtener previamente una autorización explícita del COMMANDITAIRE,
    al cual caso el Proveedor se compromete a anonimizar estas datos y a garantizar
    su confidencialidad durante su anonimización.

- Eliminar las datos y datos técnicos relacionados con el COMMANDITAIRE, en conformidad
    con la "procedimiento de eliminación de datos al final del Contrato" descrita en
    la presente Convenio de servicio, en caso de finalización o rescisión del Contrato.

- Garantizar una eliminación segura de toda la información del COMMANDITAIRE, mediante
    una reescritura completa de todo el medio que alberga sus datos en el marco del Servicio.

Bajo solicitud formal y escrita del COMMANDITAIRE, el Proveedor se compromete a:

1. Hacer accesible al COMMANDITAIRE el reglamento interno y la carta de ética
    del Proveedor;

2. Hacer accesible al COMMANDITAIRE las sanciones aplicadas en caso de incumplimiento
    de la política de seguridad;

3. Poner a disposición del COMMANDITAIRE toda la información relacionada con los
    eventos que le afecten, en las sesiones de registro del Servicio; el COMMANDITAIRE
    podrá consultar independientemente estos eventos relativos a su uso del Servicio
    a través de las interfaces web y API del Servicio;

4. Hacer accesible al COMMANDITAIRE los procedimientos para cumplir con las exigencias
    legales, regulatorias y contractuales aplicables al Servicio, así como los requisitos
    de seguridad específicos del COMMANDITAIRE previstos en el Contrato;

5. Proporcionar al COMMANDITAIRE los elementos de evaluación de riesgos relativos a
    la presentación de datos del COMMANDITAIRE ante un estado no miembro de la Unión
    Europea;

6. Informar al COMMANDITAIRE sobre los subcontratistas posteriores involucrados en la
    prestación del Servicio, así como cualquier cambio que afecte a estos subcontratistas.

> El Proveedor y todas sus filiales se comprometen a respetar las valores fundamentales
> de la Unión Europea, como la dignidad humana, la libertad, la democracia, la igualdad,
> el estado de derecho, así como el respeto de los Derechos de la Persona. El servicio
> prestado por el Proveedor está en conformidad con la legislación vigente en materia de
> derechos fundamentales y las valores de la Unión Europea relativos al respeto de la
> dignidad humana, la libertad, la igualdad, la democracia y el estado de derecho.

## Limitation del Compromiso del Proveedor

Debido a las definiciones y condiciones mencionadas en la presente Convenio de Servicio, las responsabilidades del Proveedor se limitan así:

1. El modelo de responsabilidad compartida, descrito en la sección "Modelo de Responsabilidades Compartidas" de la presente Convenio de Servicio, limita de hecho la participación del Proveedor en las capas de funcionamiento que van "por encima" de la prestación de recursos de computación, red, almacenamiento y copia de seguridad. Esto excluye, entre otras cosas:

    - La gestión de lo que se instala en las máquinas virtuales (Sistemas Operativos, middleware, aplicaciones, etc.);
    - La actualización de los Sistemas Operadores y otros programas instalados por el COMMANDITAIRE en sus Tenants;
    - La seguridad de los programas, software y aplicaciones instaladas en las máquinas virtuales;
    - La actualización de las máquinas virtuales;
    - La copia de seguridad de los datos a nivel de aplicación.

2. El Proveedor no puede asumir compromisos de respaldo para Tenants del COMMANDITAIRE sin que el COMMANDITAIRE haya previo alcance de las unidades de obra adecuadas.

3. El Proveedor no puede reclamar la propiedad de los datos transmitidos y generados por el COMMANDITAIRE. De hecho, estos pertenecen al COMMANDITAIRE.

4. El Proveedor subraya que no puede explotar ni disponer de los datos transmitidos y generados por el COMMANDITAIRE sin la validación previa del último, entendiéndose que su disposición está reservada al COMMANDITAIRE.

5. El Proveedor se libera toda responsabilidad sobre los componentes físicamente hospedados y gestionados por el Proveedor, pero que son propiedad directa del COMMANDITAIRE o de un tercero con el cual el COMMANDITAIRE haya contratado. El alojamiento de componentes físicos de clientes no forma parte del Servicio y está fuera del ámbito de la presente Convenio de Servicio. Es responsabilidad del COMMANDITAIRE evaluar el nivel de adhesión o dependencia que introducen estos componentes respecto al Servicio IaaS calificado SecNumCloud.

## Limitación de acceso

En el marco del Servicio, el Proveedor está expresamente prohibido de acceder a los Tenants pertenecientes al COMMANDITAIRE sin autorización previa. Es la responsabilidad del COMMANDITAIRE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del hospedaje y, en su caso, los servicios profesionales de soporte, si esta opción ha sido elegida por el COMMANDITAIRE.

El COMMANDITAIRE reconoce que estos accesos se otorgan exclusivamente para los fines relacionados con la prestación de servicios acordados, garantizando así una gestión segura y conforme a los términos del contrato.

El acceso remoto por parte de terceros involucrados en la prestación de servicio del Proveedor está estrictamente prohibido. En caso que una exigencia técnica específica requiera tal acceso, el mismo solo podría establecerse después de haber notificado claramente al COMMANDITAIRE, proporcionar una justificación detallada y obtener su consentimiento escrito.

Esta medida asegura el control y la seguridad de los datos del COMMANDITAIRE, asegurando que cualquier excepción a la regla esté debidamente autorizada e indocumentada.

## Responsabilidades de terceros proveedores para el servicio Secure Temple

El Proveedor conoce la lista de terceros socios que participan en la prestación del Servicio. Estos terceros son editores, proveedores (del Proveedor) y otros proveedores que contribuyen a la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

- El Proveedor exige de los terceros participantes en la implementación del servicio, dentro de su contribución al Servicio, un nivel de seguridad al menos igual al que se compromete a mantener en su propia política de seguridad aplicable al servicio Secure Temple;

- El Proveedor contrata con cada uno de los terceros participantes en la implementación del servicio, cláusulas de auditoría que permiten a un organismo de certificación verificar que estos terceros cumplen con las exigencias legales y las exigencias SNC, permitiendo al Proveedor cumplir sus compromisos en la presente Condición de Servicio.

- El Proveedor implementa una procedura para controlar regularmente las medidas que ponen en marcha los terceros participantes en la prestación del servicio para cumplir con las exigencias del Proveedor de respetar sus compromisos en la presente Condición de Servicio.

- El Proveedor asegura el seguimiento de los cambios realizados por los terceros participantes en la prestación del servicio que puedan afectar el nivel de seguridad del sistema de información del servicio.

## Responsabilidades y obligaciones del COMMANDITARIO

El COMMANDITARIO tiene las siguientes responsabilidades en el marco del servicio:

- El Prestador proporciona al COMMANDITARIO una plataforma para ejecutar máquinas virtuales, la configuración de estas máquinas corresponde a cargo del COMMANDITARIO. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Prestador define las políticas de respaldo automáticas a través de sus interfaces, pero es responsabilidad del COMMANDITARIO activar estas políticas de respaldo y, por lo tanto, activar las máquinas virtuales.

- El COMMANDITARIO autoriza al ANSSI y al organismo de certificación SNC para auditar el servicio y la infraestructura técnica que lo entrega.

- El COMMANDITARIO es responsable de indicar al Prestador cualquier exigencia sectorial específica relacionada con los tipos de información confiadas por el COMMANDITARIO y que requieren ser consideradas por el Prestador.

- El COMMANDITARIO está dispuesto a no solicitar al Prestador requisitos o acciones que excluyan del Prestador las exigencias o acciones establecidas en el referencial SecNumCloud de su versión actual, por un lado, o que reduzcan el nivel de seguridad establecido al cumplir con estas exigencias del mismo referencial, por otro lado.

## DERECHOS DEL COMMANDITARIO

En cualquier momento durante la relación contractual, el COMMANDITARIO
puede presentar una reclamación relacionada con el servicio calificado ante
la ANSSI.

En cualquier momento, el COMMANDITARIO puede solicitar al Proveedor que
le proporcione acceso a su saldo interno y su carta de ética.

## Eliminación de datos al final del Contrato

Al término del contrato, ya sea por vencimiento o por cualquier otra causa, el Proveedor se compromete a realizar la eliminación segura de toda la información del COMMANDITAIRE, incluyendo las datos técnicos. El Proveedor asegurará que comunique al COMMANDITAIRE un aviso formal dentro de los veintiuno y un (21) días calendarios. Las datos del COMMANDITAIRE serán eliminadas entonces en un plazo máximo de treinta (30) días posteriores a esta notificación.

Para comprobar esta eliminación, el Proveedor entregará al COMMANDITAIRE un certificado que confirme la eliminación de los datos.

## Ciclo de vida del presente Acuerdo de Servicio

Este ciclo de vida describe el proceso desde la creación hasta la eliminación de un servicio en nuestro sistema de cloud computing. A continuación, se detallan los pasos clave:

1. **Planificación y Diseño**
   - Definición de requisitos del servicio.
   - Especificación técnica y diseño del servicio.
   - Selección de infraestructura adecuada (servidores, almacenamiento, redes).

2. **Desarrollo**
   - Implementación del código fuente.
   - Configuración del entorno de producción.
   - Integración con otros servicios y sistemas externos.

3. **Pruebas**
   - Pruebas unitarias y de integración.
   - Pruebas de rendimiento y seguridad.
   - Validación de criterios de aceptación.

4. **Despliegue**
   - Despliegue del servicio en el entorno de producción.
   - Monitoreo inicial para detectar problemas iniciales.

5. **Operaciones y Mantenimiento**
   - Gestión diaria del servicio (actualizaciones, correcciones de errores).
   - Monitoreo continuo del rendimiento y la disponibilidad.
   - Gestión de incidentes y soporte al cliente.

6. **Optimización y Mejora Continua**
   - Análisis de datos para identificar áreas de mejora.
   - Implementación de nuevas características o mejoras basadas en el feedback del usuario.
   - Actualizaciones periódicas según las necesidades del negocio y la evolución tecnológica.

7. **Despliegue de Soporte Enduro**
   - Establecimiento de un modelo de soporte continuo para el servicio.
   - Gestión de versiones y migraciones de software.
   - Planificación de ciclos de vida del producto.

8. **Eliminación o Despliegue Fin**
   - Evaluación de la viabilidad de eliminar el servicio.
   - Planificación del despliegue final, incluyendo notificación al cliente y liberación de recursos.
   - Cumplimiento de criterios legales y contractuales relacionados con la eliminación del servicio.

9. **Documentación**
   - Documentación completa del proceso de vida del servicio (incluyendo decisiones, problemas resueltos, mejoras implementadas).
   - Archivo de registros para futuras referencias y auditorías.

Cada uno de estos pasos es crucial para garantizar la calidad, eficiencia y sostenibilidad del servicio en nuestro sistema de cloud computing.

## Efectivación del Contrato de Servicio

La presente Convenio de Servicio entra en vigor el día de su firma por el COMMANDITARIO.

La recolección, manipulación, almacenamiento y tratamiento de los datos realizados en el marco de la ventanilla de ventas, implementación y detención del Servicio​ se llevan a cabo de acuerdo con la legislación vigente.

## Evoluciónes de la Cláusula de Servicio

Las modificaciones o adiciones realizadas a la presente Cláusula de Servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobierno designados para tal efecto. Estas propuestas de cambio serán examinadas por las Partes, competentes para determinar los aspectos que requieren una formalización escrita.

Se pacta que cualquier modificación o actualización de la Cláusula de Servicio, después de su validación, que altere las condiciones financieras inicialmente establecidas, requerirá la emisión y firma de un adicente al Contrato en curso.

Los factores que podrían llevar a una revisión de esta Cláusula de Servicio incluyen, pero no se limitan a:

- El avance de la infraestructura técnica que entrega el Servicio IaaS;
- Los ajustes realizados por el Proveedor para ofrecer el Servicio;
- Las variaciones en los compromisos asumidos y las sanciones aplicables;
- Las reconfiguraciones organizacionales dentro del COMMANDITAIRE o del Proveedor;
- La ampliación o reducción del alcance del Servicio.

La gestión de las versiones y revisiones de la Cláusula de Servicio se consigna en el preámbulo del documento para facilitar su seguimiento.

### Evoluciones Descendidas por el COMMANDITAIRE

Las actualizaciones de la Convenio de Servicio pueden tener, entre otras cosas:

- Una evolución de la infraestructura gestionada por el Proveedor;

- Una modificación de los servicios implementados por el Proveedor;

- Una modificación de los compromisos de niveles de servicio por parte del Proveedor.

### Modificaciones Ejercitadas por el Proveedor

Cualquier modificación de la Condición del Servicio está sujeta a la aceptación del COMMANDITARIO. Se entiende que cualquier modificación o complemento validado que modifique los elementos financieros del Contrato, podrá requerir la firma de un convenio adicional al respectivo.

## Reversibilidad

Además, Cloud Temple se compromete a permitir la revisión de la presente Convenio de Servicio (que incluye, entre otras cosas, su rescisión) sin penalización para el COMMANDITAIRE en caso de pérdida de la calificación SecNumCloud.

Los Servicios no contienen obligación de reversibilidad (es decir, la ayuda al COMMANDITAIRE para que pueda migrar su sistema a otro "Prestador") a excepción de la entrega del COMMANDITAIRE por parte del Prestador de la interfaz COMMANDITAIRE que permite al COMMANDITAIRE guardar y recuperar sus datos, incluyendo especialmente los datos de configuración de su sistema de información a través de una o más modalidades técnicas al elección del COMMANDITAIRE: la entrega de archivos siguiendo un o más formatos documentados y explotables fuera del servicio proporcionado por el Prestador o bien mediante la implementación de interfaces técnicas que permitan el acceso a los datos siguiendo un esquema documentado y explotable (API).

El COMMANDITAIRE, único responsable de su sistema, debe tomar todas las medidas necesarias para facilitar esta operación en caso de ser necesario (lo que implica, entre otras cosas, la implementación de una documentación rigurosa a tal efecto) y la elaboración de planes de reversibilidad. En el caso de que el COMMANDITAIRE requiera una prestación adicional, el Prestador puede ofrecer una misión de asesoramiento en torno a este tema dentro del marco de un contrato específico a negociar.

## Disponibilidad, Continuidad y Restauración del Servicio

La disponibilidad, la continuidad y la restauración del servicio son aspectos cruciales en el ámbito de la computación en la nube y los sistemas IT. Estos conceptos se centran en garantizar que los servicios digitales estén accesibles, funcionen sin interrupciones y puedan recuperarse rápidamente en caso de fallos o desastres.

### Disponibilidad

La disponibilidad se refiere a la capacidad de un servicio para estar operativo y accesible a los usuarios a cualquier momento. Es una medida clave que indica el porcentaje de tiempo en que un sistema está funcionando correctamente. Un alto nivel de disponibilidad es esencial para mantener la confianza del cliente y evitar pérdidas económicas.

### Continuidad

La continuidad se refiere a la capacidad del servicio para mantener su operatividad sin interrupciones, incluso ante eventos imprevistos como fallas de hardware o software, ataques cibernéticos u otros problemas. La continuidad es fundamental para garantizar que los usuarios puedan acceder a los servicios cuando lo necesiten, independientemente del contexto externo.

### Restauración del Servicio

La restauración del servicio implica la capacidad de recuperar rápidamente el funcionamiento normal de un sistema tras una interrupción. Esto incluye tanto la recuperación de datos como la reactivación de los servicios, a menudo mediante planes de contingencia y procedimientos de respuesta ante emergencias. La eficiencia en la restauración del servicio es crítica para minimizar el impacto en los usuarios y reducir las pérdidas financieras.

### Estrategias para Mejorar Disponibilidad, Continuidad y Restauración

1. **Redundancia**: Implementar múltiples sistemas o componentes redundantes que puedan tomar el control en caso de un fallo principal.
2. **Distribución Geográfica**: Almacenar datos y servicios en múltiples ubicaciones geográficas para reducir el impacto de desastres locales.
3. **Planificación de Contingencia**: Desarrollar planes detallados que describan las acciones a seguir ante diferentes tipos de interrupción.
4. **Monitoreo y Alertas**: Utilizar herramientas de monitoreo continuo para detectar problemas temprano y activar alertas automáticas.
5. **Pruebas de Recuperación**: Realizar pruebas periódicas de los planes de recuperación para validar su efectividad.
6. **Automatización**: Emplear automatización en la gestión de infraestructura y servicios para reducir tiempos de respuesta a incidentes.
7. **Seguridad Cibernética Robusta**: Implementar medidas de seguridad robustas para proteger contra ataques cibernéticos que podrían comprometer la continuidad del servicio.
8. **Gestión de Cambios**: Controlar y gestionar los cambios en el sistema de manera controlada mediante prácticas como CI/CD (Continous Integration / Continuous Delivery).

### Ejemplo de Implementación en un entorno de Cloud Computing

En una infraestructura de computación en la nube, estas características se logran a través de:

- **Almacenamiento distribuido**: Utilizar servicios de almacenamiento en la nube que ofrecen replicación automática y redundancia.
- **Balanceadores de carga**: Distribuir el tráfico entre múltiples instancias para evitar puntos únicos de falla.
- **Sistemas de alerta por correo electrónico/SMS**: Notificar a los equipos de TI en tiempo real sobre incidentes críticos.
- **Plataformas de gestión de servicios (PaaS) y contenedores**: Facilitar la implementación, gestión y escalabilidad de aplicaciones.
- **Herramientas de monitoreo avanzadas**: Utilizar soluciones como Prometheus o Grafana para el monitoreo en tiempo real del rendimiento y estado de los servicios.

En resumen, la disponibilidad, continuidad y restauración del servicio son aspectos vitales que requieren una planificación cuidadosa, implementaciones robustas y prácticas de gestión continuas para garantizar un alto nivel de confiabilidad en los servicios digitales.

### Gestión de Incidentes y Interrupciones

## Incidentes

#### Tipos de incidentes abordados en el marco de esta Convenio de Servicio

- Siniestros;

- Apagones y fallas;

- Incidentes de seguridad que afecten la disponibilidad, la confidencialidad o la integridad del Servicio.

#### Tratamiento de incidentes

El Proveedor informará al COMMANDITARIO en los plazos más breves posibles sobre los incidentes y interrupciones, a través de una notificación en la consola COMMANDITARIO o por correo electrónico al contacto COMMANDITARIO. El Proveedor informará al COMMANDITARIO sobre el tratamiento del incidente mediante el canal utilizado para notificar el incidente, o mediante el canal indicado en la notificación del incidente.

#### Nivelación de notificación de incidentes de seguridad

El COMMANDITAIRE tiene la responsabilidad de seleccionar los niveles de gravedad de los incidentes de seguridad por los cuales desea recibir notificación, por ejemplo, a través de su formalización en un PAS aplicable al Servicio.

Por defecto, el COMMANDITAIRE recibe:

- Incidentes de seguridad con impacto (impactos I1 y I2 según la escala de impacto definida en el proceso de priorización de los tratamientos del presente Acuerdo de Servicio) ;

- Incidentes de seguridad que afecten la confidencialidad o la integridad de los datos del COMMANDITAIRE confiados en el marco del Servicio ;

- Violaciones de datos personales para las que el COMMANDITAIRE es responsable del tratamiento conforme al artículo 8 de la Anexo DPA dentro del marco del Servicio ;

-

### Mantenimiento del Servicio

### Naturaleza de la mantenimiento

Violaciones de datos personales por las que el Proveedor es responsable del tratamiento y que contienen datos personales del COMMANDITARIO, en conformidad con el artículo 8 de la Anexo DPA. La mantenimiento garantizado consiste en la implementación:

- Del plan de mantenimiento en condiciones operativas del Servicio para asegurar buenos indicadores de disponibilidad tal como lo establece el Proveedor anteriormente;

- Del Plan PCA/PRA, si es suscrito por el COMMANDITARIO, que se activa en caso de incidentes que puedan ocurrir.

### Acceso remoto a Cloud Temple fuera del perímetro del COMMANDITAIRE

El Proveedor se prohibe, en el marco de la presente Convenio de servicio, cualquier acceso a los Tenants y al espacio de la interfaz del COMMANDITAIRE.

Será responsabilidad del COMMANDITAIRE otorgar los accesos necesarios al personal del Proveedor. El COMMANDITAIRE reconoce que dichos accesos serán utilizados en el marco del alojamiento y, finalmente, de la gestión (si es contratado por el COMMANDITAIRE).

### Acceso remoto de terceros para la prestación del servicio dentro del ámbito del COMMANDITAIRE

No se permite acceso remoto de terceros que participe en la prestación del servicio.

Si un requerimiento técnico lo hiciera necesario, dicho tipo de acceso solo sería realizado después de notificar al COMMANDITAIRE la justificación y obtener su acuerdo escrito.

# Procedimiento de eliminación de datos al final del Contrato

Al finalizar el contrato, ya sea por expiración del mismo o por cualquier otra causa, el Proveedor asegurará la eliminación segura de toda la información procesada en el marco del Servicio, incluyendo las Datos técnicos del COMMANDITAIRE. El Proveedor dará un aviso formal dentro de los veinte y uno días calendarios (21). Las datos del COMMANDITAIRE serán eliminadas en un plazo máximo de treinta (30) días posteriores a la notificación. El Proveedor proporcionará un certificado de eliminación de datos al COMMANDITAIRE.

## Derecho aplicable

Note: The text "Derecho aplicable" is already in Spanish. No modifications were made, as it's a literal translation of the French term "Droit applicable". The structure and formatting are preserved, including the use of Markdown for the title.

## En general

El derecho aplicable y al que está sujeto la presente Convenio de Servicio es el derecho francés.

## Respeto al cumplimiento de las leyes y regulaciones aplicables

El Proveedor se compromete a los siguientes puntos:

- Identificación de las restricciones legales y regulatorias aplicables en el marco del Servicio;

- Cumplimiento de las restricciones legales y regulatorias aplicables a los datos confiados al Proveedor, dentro de las responsabilidades de este último, y de las disposiciones previstas en el Contrato.

- Cumplimiento de la Ley de Informática y Libertad (LIL) y del Reglamento General de Protección de Datos (RGPD);

- Implementación de medidas de protección de datos personales;

- Implementación de un proceso de vigilancia legal y regulatoria;

- Mantener relaciones adecuadas o una vigilancia con las autoridades sectoriales relevantes en función del tipo de datos tratados en el marco del Servicio. Esto incluye, entre otros, al ANSSI (Agence nationale de la sécurité des systèmes d'information), CERT-FR (Centre national de prévention et de lutte contre les attaques informatiques) y CNIL (Commission nationale de l'informatique et des libertés).

## RGPD

Actuando como subcontratista en el sentido del artículo 28 del Reglamento general de protección de datos (RGPD), el Proveedor se compromete a:

- Garantizar la transparencia y la trazabilidad;

- Designar un DPO encargado de definir y aplicar las medidas de protección de los datos personales;

- Ofrecer asistencia y asesoramiento al CLIENTE, alertándolo en caso de que una instrucción del último constituya una violación de las normas de protección de datos personales si el Proveedor tiene la capacidad de identificarla;

- Una garantía de seguridad sobre los datos tratados (debido a su calificación SecNumCloud).

## Protección contra riesgos extracomunitarios

El domicilio social del Proveedor se encuentra dentro de un Estado miembro
de la Unión Europea. El capital social y los derechos de voto en la
sociedad del Proveedor no están, directa ni indirectamente:

- individualmente poseídos a más del 24%,

- y colectivamente poseen a más del 39% de manera conjunta o secuencial
de entidades terceras que tengan su domicilio social, centro administrativo
o establecimiento principal en un Estado no miembro de la Unión Europea.

En caso de reclamo por parte del Proveedor, dentro del servicio, al servicio
de una sociedad tercera (incluyendo un subcontratista) que tenga su domicilio
social, centro administrativo o establecimiento principal en un Estado no
miembro de la Unión Europea o que sea propiedad o controlada por una sociedad
tercera ubicada fuera del Espacio Económico Europeo (EEE), el Proveedor se
compromete:

- a que dicha sociedad tercera no tenga acceso a los datos operativos del servicio
'Templo Seguro';

- a disponer de autonomía operativa mediante la posibilidad de contratar a otro
subcontratista o implementar rápidamente una alternativa tecnológica.

Para recordar, las datos en cuestión son aquellos confiados al Proveedor por
el COMMANDITAIRE, así como todas las Datos Técnicas que incluyan información
sobre los COMMANDITAIRES.

Para los fines de este artículo, el concepto de control se entiende como aquel
mencionado en el artículo L233-3 II del Código de Comercio.

# FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Para Cloud Temple, EL PROVEEDOR

Para \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, EL COMMANDITARIO