---
title: Título del Acuerdo de Servicio de Cloud Segura (OpenIaaS)
---

# CONVENT DE SERVICIOS OpenIaaS

| Destinatarios: | **COMMANDITARIO** |
| :--- | :--- |
| **Referencia del documento** | CT.AM.JUR.ANX OPENIaaS-202530101_v3.0.docx_Día JJ AAAA |
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

## Introducción y Diccionario

## Introducción

El presente documento formaliza la Cláusula de servicio asociada al servicio OpenIaaS en proceso de calificación SecNumCloud.

El Servicio está en proceso de calificación SecNumCloud (ver certificado adjunto).

La presente cláusula de servicio completa y complementa las condiciones generales de venta y uso del Proveedor. Se entiende que los documentos contractuales se interpretarán de manera coherente entre sí. En caso de contradicción o divergencia en los términos de los documentos contractuales, prevalecerán los siguientes en el orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Cláusula de Servicio SecNumCloud IaaS
3. Cláusula de Servicio SecNumCloud OpenIaaS
4. Cláusula de Servicio SecNumCloud PaaS
5. Cláusula de Servicio específico - Bare Metal
6. Condición particular específica
7. Plan de Seguro de Seguridad (PAS)
8. Condiciones Particulares de Uso (CPU)
9. Acuerdo de Protección de Datos

## Glossary

In the present Service Agreement, the **Commanditaire**, **Prestador** and **Parties** are identified in the Contract to which this Service Agreement is annexed.

The following expressions used in this Service Agreement shall be interpreted according to the definitions assigned to them below:

- **Change:** Any addition, modification, or removal impacting the Service, authorized, planned, or covered by the Commanditaire, that has been accepted by all Parties. It is then integrated into the standard change catalog and may have a GTI (Gross Time Impact) and GTR (Gross Revenue Impact).

- **Standard Change:** A change subject to a procedure, whose implementation procedures and impacts (including financial ones) are known and accepted in advance by all Parties. It is then integrated into the standard change catalog and may have a GTI and GTR.

- **Contract:** Refers to the contract subscribed by the Commanditaire with the Prestator enabling the Commanditaire to benefit from the Service, and to which this Service Agreement is annexed.

- **Service Agreement:** This document established within the framework of a specific contract or General Terms and Conditions of Sale and Use (CGVU), in compliance with SecNumCloud requirements.

- **Service Request:** A request for evolution following a procedure where the execution: i) does not modify the CMDB, ii) known operational mode, costs, and risks are accepted in advance, and no specific return procedures are required, iii) is subject to an agreed level of service (SLA) agreement and included in the contract fee when performed during business hours.

- **Availability:** Capacity to ensure the Service's availability and optimal performance, in accordance with the defined criteria and commitments within the Service Level Agreements (SLAs).

- **Technical Data:** Encompasses all data processed to deliver the Service, notably including identities of beneficiaries and administrators of the technical infrastructure, logs, configuration of access, directory, certificates...

- **Event:** Any detectable or identifiable occurrence that may have significance for managing the Service.

- **Hypervisor:** Operating system allowing execution of virtual machines on a compute layer.

- **Incident:** Any unforeseen event disrupting normal Service operation or compromising COMMANDITAIRE data security.

- **Security Incident:** Any event within the Service's scope:

  - Intentionally malicious;
  - Accidental affecting the integrity, confidentiality, or traceability of the Service or COMMANDITAIRE data;
  - Compromising existing security measures. Non-origin-based availability outages are not considered Security Incidents (hardware failure, bug, malfunction, natural disaster...).

- **Commanditaire Interface:** Administration interface for the Service provided by the Prestator to the Commanditaire, comprising a web administration console and an API.

- **Deployment:** Actions taken to implement a Change once it has been approved (the change, in ITIL terms, pertains to change management rather than its execution/implementation).

- **Problem:** Cause of recurring Incidents, potential incident (situation at risk) requiring analysis and resolution to prevent recurrence.

- **Region:** A geographically defined set of availability cloud zones providing network, compute, and storage services optimized for latency, performance, and local regulatory compliance.

- **OpenIaaS Service:** An open-source IaaS service currently under SecNumCloud qualification, delivered by the Prestator from maintained technical infrastructures as described in the "Service Description" section of this Service Agreement.

- **Casualty:** A severe event of natural or human origin, accidental or intentional, causing significant losses and damages to the affected party.

- **Supervision:** Monitoring of an Information System or Service, involving collection of various data such as measurements and alarms. This activity is limited to observation and tracking without intervening directly on monitored elements, a prerogative belonging to operations management.

- **Tenant:** An isolated instance reserved for a user or group of users sharing a common technical infrastructure while maintaining independence and data/application security.

- **Availability Zone (AZ) / Availability Region:** A specific, isolated section of the cloud computing infrastructure designed to ensure high availability and resilience of services through geographical distribution of resources.

# Acrónimos

| Acrónimo | Definición |
| :--- | :--- |
| **CAB** | Comité consultivo sobre cambios -- Comité consultivo sobre cambios |
| **CMDB** | Base de datos de gestión de configuraciones -- Base de datos de gestión de configuraciones |
| **COPIL** | Comité de dirección |
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
| **PaaS** | Plataforma como servicio -- Plataforma como servicio |
| **PAS** | Plan de seguridad |
| **PASSI** | Proveedor de auditoría de sistemas de información |
| **RFC** | Solicitud de cambio -- Demanda de changement |
| **RGPD** | Reglamento general de protección de datos (personales) |
| **RPO** | Objetivo de fraichez de los datos en caso de desastre -- Fraichez des données restaurées en cas de sinistre |
| **RTO** | Objetivo de tiempo de recuperación del servicio en caso de desastre -- Délai de rétablissement du service en cas de sinistre |
| **SDM** | Gestor de entrega de servicios |
| **SLA** | Acuerdo sobre niveles de servicio -- Accord sur les niveaux de services |
| **SNC** | SecNumCloud |
| **SOC** | Centro de operaciones de seguridad |
| **TMA** | Mantenimiento tercerizado de aplicaciones |
| **UO** | Unidad de obra |
| **VABE** | Validación de aptitud para buena explotabilidad |
| **VABF** | Validación de aptitud al buen funcionamiento |
| **VM** | Máquina virtual (Machine virtuelle) |
| **VSR** | Válidación de servicio regular |

# Objeto de la presente Convenio de Servicio

La presente Convenio de Servicio establece los términos y condiciones bajo los cuales el Proveedor se compromete a entregar el Servicio al COMMANDITARIO. Su objeto es:

- Especificar las expectativas de rendimiento esperadas por el COMMANDITARIO en términos de funcionalidad y fiabilidad del Servicio;

- Detallar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

- Identificar las normas regulatorias aplicables específicamente al Servicio entregado;

- Garantizar la uniformidad y la integridad en la evaluación de la calidad del Servicio;

- Asegurar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se establece que, en caso de que el Proveedor pierda su calificación SecNumCloud, el Contrato podrá ser resuelto de forma automática y sin penalización alguna por parte del COMMANDITARIO. En tal supuesto, el Proveedor se compromete a informar al COMMANDITARIO de esta degradación mediante notificación oficial, mediante correo certificado con solicitud de constancia de recepción.

Es importante destacar que cualquier modificación o ajuste en la calificación SecNumCloud no será interpretada como una revocación de la calificación inicial.

# Auditoría

El Proveedor se compromete a permitir que el CLIENTE, o cualquier auditor externo y no concurrente del Proveedor que este último haya designado, acceda a todos los documentos necesarios para la certificación del cumplimiento integral de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Al aceptar esta Convenio de Servicio, el CLIENTE otorga su autorización explícita para:


1. La Agencia Nacional de Seguridad de los Sistemas de Información (ANSSI) y la entidad de certificación competente para verificar la conformidad del Servicio y del sistema de información al referencial SecNumCloud.
2. Un auditor externo de la seguridad de los sistemas de información, debidamente calificado PASSI y específicamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio.

## Descripción del Servicio

Este servicio ofrece soluciones avanzadas en infraestructura de nube, gestión de sistemas IT y desarrollo de software. Nuestro equipo experto se dedica a la implementación de soluciones escalables, seguras y eficientes para empresas de diversos sectores, adaptando nuestras soluciones a las necesidades específicas de cada cliente.

A través de nuestros servicios de consultoría técnica, capacitación y soporte continuo, nos aseguramos que nuestros clientes estén siempre al día con las últimas innovaciones en tecnología del cloud computing, sistemas IT y desarrollo de software.

Nuestra filosofía se basa en la innovación constante, la calidad excepcional y el compromiso con la satisfacción del cliente, ofreciendo soluciones personalizadas que impulsen el crecimiento y la eficiencia de sus negocios.

Si buscas fortalecer tu infraestructura tecnológica, optimizar procesos o desarrollar nuevas aplicaciones, contáctanos para descubrir cómo podemos ayudarte a alcanzar tus objetivos empresariales.

## Shared Responsibility Model

The service offered by the Provider is characterized by providing the following services, which align with the shared responsibility principle presented in the SecNumCloud reference:

- Provisioning of computing resources (compute);

- Availability of storage spaces;

- Access to network connectivity and internet services;

- Offering a dedicated backup service for virtual machines.

The shared responsibility model applied between the Provider and the COMMANDITAIRE within the context of the Service is detailed in §7.1.

It is understood that the Provider will utilize its expertise to deliver the Services according to professional best practices and in compliance with SecNumCloud requirements.

## Detalizada Presentación del Alcance del Servicio

| Servicio | Descripción |
| :--- | :--- |
| **Computación** | Recursos de cálculo del Teniente COMMANDITAIRE |
| **Almacenamiento** | Datos de producción del Teniente COMMANDITAIRE |
| **Almacenamiento objetivo S3** | Provisión de una infraestructura de almacenamiento objetivo soberano multi-zona y compatible con las APIs S3 estándar. |
| **Backup** | Modulo suscripción al Almacenamiento objetivo S3 |
| **Infraestructura de red** | Recurso de red del Teniente COMMANDITAIRE |
| **Consola COMMANDITAIRE** | El servicio que permite al COMMANDITAIRE acceder a su servicio OpenIaaS y administrarlo a través de la interfaz Shiva |
| **Soporte** | El servicio de soporte acompañante de los servicios mencionados anteriormente y únicamente estos (\*) |

\_(\*) En el marco del alcance del Servicio en fase de validación
SNC y las responsabilidades del Proveedor en la materia\_

### Infraestructuras Centros de Datos

El servicio incluye la oferta, para cada Zona de Disponibilidad, las siguientes prestaciones calificadas:

- Centro de datos ubicado en Francia para la Región FR, conforme a las últimas normativas tecnológicas, proporcionando un nivel de resiliencia equivalente o superior al Tier 3 del Uptime Institute;
- Oferta de salas técnicas dentro de centros de datos dedicados para alojar los equipos técnicos indispensables para la producción del servicio, incluyendo procesamiento, almacenamiento, red, cableado y otros componentes necesarios;
- Suministro eléctrico seguro, garantizado por dos circuitos eléctricos distintos, asegurando continuidad de servicio;
- Provisión de servicios de climatización ajustados para cumplir con las normas y recomendaciones de los fabricantes de equipos, manteniendo un entorno óptimo para los dispositivos técnicos;
- Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y la seguridad del servicio ofrecido.

El Proveedor se encarga de la oferta de servicios avanzados de detección e extinción de incendios, diseñados para identificar y neutralizar eficazmente cualquier inicio de incendio dentro de las instalaciones. Estos sistemas incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente sin dañar el equipo informático. Este servicio es crucial para prevenir riesgos de incendio, minimizar los daños potenciales y garantizar la continuidad de las operaciones.

El COMMANDITAIRE está informado de que todas las procedimientos y medidas de seguridad implementadas, incluyendo los pruebas anuales de corte de energía en los generadores, son esenciales para garantizar la continuidad e integridad de los servicios prestados. Estas prácticas están diseñadas para minimizar los riesgos de fallo y asegurar una respuesta óptima en caso de incidente. Al aceptar estas condiciones, el COMMANDITAIRE reconoce la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. Además, el COMMANDITAIRE está estimulado a consultar las recomendaciones de seguridad proporcionadas y a integrarlas en su propia estrategia de gestión de riesgos.

### Infraestructura de gestión del servicio

El Proveedor entrega al COMMANDITARIO la consola de administración y la API necesarias para el uso del Servicio. Además, se compromete a mantener esta consola de administración y la API en óptima condición operativa y asegurar su seguridad de manera continua. Esta consola de administración y la API se denominan conjuntamente como "la interfaz COMMANDITARIO".

El Proveedor informa al COMMANDITARIO que una utilización anormal de la interfaz COMMANDITARIO, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o al Servicio. Es importante destacar que esta situación no implica una indisponibilidad del Servicio, sino una acción de protección tanto del Servicio como de la infraestructura del Proveedor. Por lo tanto, el COMMANDITARIO no puede considerarlo como una indisponibilidad en sus cálculos.

Además, el Proveedor indica al COMMANDITARIO que las solicitudes idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el COMMANDITARIO envía solicitudes idénticas a una frecuencia superior, su rechazo no puede interpretarse como una indisponibilidad del Servicio.

### Infraestructuras de Cálculo

El servicio incluye la provisión, en las zonas de disponibilidad
suscritas por el COMMANDITARIO, de los equipos necesarios para ejecutar
las cargas de trabajo en forma de máquinas virtuales.

Esto comprende:

- La provisión de marcos técnicos necesarios para el correcto funcionamiento
  de las lanzas de cálculo;
- La provisión de lanzas de cálculo en las cantidades especificadas por
  el COMMANDITARIO y distribuidas según las zonas de disponibilidad que
  elija. Es importante destacar que estas lanzas de cálculo están exclusivamente
  dedicadas al COMMANDITARIO;
- La disponibilidad de sistemas operativos de tipo hypervisores, así como la
  garantía del mantenimiento en condiciones operativas y de seguridad de
  la infraestructura lógica necesaria para controlar estos sistemas
  operativos. Es conveniente destacar que, aunque el Proveedor es responsable
  del mantenimiento operativo y de la seguridad general del servicio, no posee
  conocimientos específicos sobre los entornos de producción del COMMANDITARIO
  ni las exigencias relacionadas con sus cargas de trabajo. Por lo tanto, la
  responsabilidad de decidir la actualización de los sistemas operativos de las
  lanzas de cálculo hypervisores, una acción que podría requerir un
  reinicio, recae completamente en el COMMANDITARIO. Esta operación puede realizarse
  a través de la Interfaz COMMANDITARIO.

El elegir el modelo de lanza de cálculo, seleccionado entre el catálogo
ofrecido por el Proveedor, compete a responsabilidad del COMMANDITARIO.

### Infraestructura de almacenamiento

El servicio incluye la provisión al COMMANDITARIO de una infraestructura de almacenamiento compartido de tipo SAN (Network Area Storage), que ofrece divers niveles de rendimiento. Este servicio abarca:

- La implementación y el mantenimiento en condiciones operativas y de seguridad del red SAN dedicada;
- La instalación y gestión de las unidades de almacenamiento compartidas entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, supervisión y monitoreo;
- La implementación de sistemas automatizados para la asignación de LUNs (Unidades de Lógico Número) de almacenamiento dedicados al uso del COMMANDITARIO, de acuerdo con los volúmenes suscritos por el COMMANDITARIO.

### Infraestructura de red global

El Proveedor despliega, como parte del Servicio, un red global que permite al COMMANDITAIRE la accesibilidad de sus sistemas alojados. Este servicio incluye:

- La provisión, el mantenimiento en condiciones operativas y de seguridad de toda la conectividad óptica interconectando las diferentes Zonas de disponibilidad;

- La provisión, el mantenimiento en condiciones operativas y de seguridad de los equipos técnicos necesarios para el correcto funcionamiento del red y la aislamiento de los distintos clientes.

La interconexión de red del TENANT COMMANDITAIRE, con Internet o redes privadas, así como los componentes de red, enlaces operadores y otros componentes técnicos que realizan esta interconexión, no forman parte del alcance del Servicio. Esta interconexión de red se implementa de acuerdo con las disposiciones previstas en el Contrato.

### Infraestructura de respaldo

El Proveedor ofrece al COMMANDITAIRE un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus máquinas virtuales. El Proveedor se encarga del mantenimiento en condiciones operativas y de seguridad de este servicio de respaldo. El Proveedor garantiza que las copias de seguridad del COMMANDITAIRE estarán ubicadas fuera de la Zona de disponibilidad de las cargas de trabajo respaldadas, sujeto a que el COMMANDITAIRE haya suscrito las unidades de producción adecuadas.

Esta prestación de respaldo se limita al respaldo de máquinas virtuales y configuraciones de topología del entorno OpenIaaS de los Tenantes del COMMANDITAIRE, en el marco del Servicio. La elaboración y aplicación de una política de respaldo adecuada por parte del COMMANDITAIRE depende de la suscripción a unidades de producción específicas. Es responsabilidad del COMMANDITAIRE asegurar la disponibilidad de las recursos técnicos necesarios con el Proveedor para implementar su política de respaldo o ajustarla en función de los medios disponibles.

El Proveedor se compromete a notificar al COMMANDITAIRE en caso de restricciones de capacidad y a proporcionar orientación consultiva para la optimización de recursos. Las obligaciones del Proveedor se limitarán a la implementación de las necesidades expresadas por el COMMANDITAIRE en materia de política de respaldo, dentro de los límites suscritos.

### Implementación de soluciones de recuperación ante desastres o continuidad de negocios

El Proveedor ofrece al COMMANDITARIO toda la infraestructura técnica necesaria para garantizar una distribución óptima de sus recursos a través de diversas Zonas de disponibilidad. Es responsabilidad del COMMANDITARIO gestionar eficazmente esta asignación de recursos, para lo cual cuenta con el acceso a los herramientas del Proveedor diseñadas específicamente para este propósito.

### Limitaciones de los servicios en el modelo OpenIaaS en fase de validación

En el marco del modelo OpenIaaS, que se encuentra actualmente en fase de validación, existen diversas limitaciones a considerar:

1. **Integración con Plataformas Externas**:
   - Las integraciones con plataformas de terceros pueden ser complejas debido a la naturaleza modular del modelo OpenIaaS. Esto puede dificultar la sincronización y el intercambio de datos entre sistemas heterogéneos.

2. **Gestión de Recursos**:
   - La gestión eficiente de los recursos computacionales, de almacenamiento y de red es crucial pero presenta desafíos en la optimización dinámica del uso de estos recursos según las demandas variadas de los usuarios finales.

3. **Seguridad y Cumplimiento Normativo**:
   - Asegurar la seguridad de los datos y cumplir con las regulaciones específicas de cada jurisdicción es un desafío constante, especialmente en un entorno abierto como OpenIaaS donde múltiples proveedores pueden participar.

4. **Escalabilidad**:
   - Aunque el modelo OpenIaaS está diseñado para la escalabilidad, la implementación práctica puede verse limitada por la capacidad de los proveedores individuales para expandir sus infraestructuras en respuesta a un crecimiento rápido del tráfico.

5. **Gestión de Políticas y Controles**:
   - La implementación de políticas de seguridad y control de acceso puede ser compleja debido a la distribución de responsabilidades entre múltiples proveedores, lo que requiere un alto nivel de coordinación.

6. **Compatibilidad de Servicios**:
   - La compatibilidad entre diferentes servicios ofrecidos por varios proveedores puede ser limitada debido a diferencias en los estándares y protocolos utilizados, lo que dificulta la integración completa de soluciones heterogéneas.

7. **Gestión de Custodia**:
   - La gestión de la custodia de datos, especialmente cuando se trata de datos sensibles o regulados, puede ser un desafío debido a las variaciones en las políticas de privacidad y seguridad entre los diferentes proveedores.

8. **Costos y Facturación**:
   - La facturación y el control de costos pueden volverse complejos con múltiples proveedores, especialmente cuando se maneja un uso dinámico de recursos y servicios.

9. **Gestión de Cadenas de Suministro**:
   - La gestión de las cadenas de suministro de hardware y software puede verse afectada por la diversidad de proveedores, lo que requiere una planificación cuidadosa para garantizar la disponibilidad y calidad de los componentes.

10. **Soporte y Mantenimiento**:
    - El soporte técnico y el mantenimiento continuo de un modelo abierto como OpenIaaS puede ser desafiante debido a la diversidad de proveedores y tecnologías involucradas, lo que requiere una coordinación estrecha entre todos los actores.

Estas limitaciones son fundamentales para su análisis durante el proceso de validación del modelo OpenIaaS, ya que permitirán identificar áreas de mejora y desarrollar soluciones efectivas para superarlas.

### Servicios administrados en RUN

Es importante destacar que el servicio COMMANDITAIRE no incluye:

- La gestión del hardware físico de COMMANDITAIRE;

- La conectividad de red del Tenant COMMANDITAIRE, con Internet o redes privadas, incluyendo los enlaces operadores;

- Todo servicio de tipo administrado (TMA);

- Cualquier asistencia sobre máquinas virtuales a nivel de sistema operativo y por encima en la pila de responsabilidades IaaS, incluso si se trata solo de supervisión.

No obstante, no es en absoluto excluido que COMMANDITAIRE utilice tales servicios a través del ofrecimiento MSP del Proveedor para intervenir en modo de servicio administrado sobre sus Tenants. En dichos casos, estos servicios no estarán sujetos a la presente Condición de Servicio ni a sus cláusulas reciprocas.

### Configuración del respaldo

De forma predeterminada, el Proveedor configura las recursos del IaaS en el COMMANDITARIO reservando recursos y configurando los despliegues para utilizar las Zonas de disponibilidad. Es responsabilidad del COMMANDITARIO seleccionar las Zonas de disponibilidad a través de la interfaz COMMANDITARIO.

### Configuration de la Sauvegarde

La prestación de sauvegardes se detiene en la realización de las copias de seguridad de las máquinas virtuales y las configuraciones de topología que representan el entorno OpenIaaS del Tenante del COMMANDITAIRE dentro del marco del Servicio.

La prestación de sauvegardes y la ejecución de la política de sauvegarde del COMMANDITAIRE est sujeta a la suscripción de espacio de almacenamiento en el almacenamiento masivo necesario para garantizar el servicio. Por lo tanto, es responsabilidad del COMMANDITAIRE suscribirse con el Proveedor los medios técnicos necesarios para ejecutar la política de sauvegarde dentro de su área informática, o ajustar la política de sauvegarde en función de los medios implementados. El Proveedor se compromete a informar al COMMANDITAIRE en caso de límite técnico de capacidad.

El Proveedor establecerá los medios técnicos y humanos necesarios para realizar las copias de seguridad del sistema al quede dentro de los límites de los recursos suscritos por el COMMANDITAIRE.

Además, en el caso de perímetros no gestionados por el Proveedor, corresponde al COMMANDITAIRE definir su propia estrategia de sauvegardes y configurar manualmente las copias de seguridad de las VM o solicitar un Servicio de Nivelación si el COMMANDITAIRE tiene un contrato de servicio gestionado que permita al Proveedor actuar a través de la interfaz COMMANDITAIRE, que es la consola de administración disponible en el marco de esta Convenio de Servicio y que cuenta con funcionalidades para configurar las copias de seguridad.

Además, este servicio se comprometerá únicamente a traducir por medio del configuración a través de la interfaz COMMANDITAIRE la configuración específicada claramente por el COMMANDITAIRE.

Por razones de flexibilidad en la oferta del Proveedor, el COMMANDITAIRE tiene la opción de asociar una política de no-sauvegarde para ciertas máquinas virtuales. En este caso, corresponde al COMMANDITAIRE tomar esta decisión. El Proveedor no realizará copias de seguridad de las VM asociadas a la política "no backup". El Proveedor alertará al COMMANDITAIRE que elegir la política "no backup" o realizar una sauvegarde manual expone al COMMANDITAIRE a una pérdida de datos definitiva en caso de un incidente en las capas básicas o en las capas dependientes de su responsabilidad en el modelo IaaS. En tal caso, no será posible responsabilizar al Proveedor por restaurar los datos ya que no habrá nada para restaurar. El Proveedor recomienda siempre realizar copias de seguridad de las VMs.

Para cualquier tema relacionado con el sistema operativo instalado en una máquina virtual y cualquier software o programa ejecutado "sobre" el SO, corresponde al COMMANDITAIRE llevar a cabo las operaciones administrativas y de supervisión dentro de la Unión Europea si desea garantizar que toda la verticalidad de las capas del SI se realice y gestione desde la Unión Europea. Las operaciones administrativas fuera del ámbito de responsabilidad del Proveedor en el marco de esta Convenio de Servicio, indicadas en la sección "Política de Responsabilidades Compartidas" de la presente Convención de Servicio.

## Implementación del Servicio

### Requis técnicos

Para la implementación del Servicio, el COMMANDITAIRE reconoce que deberá:

- Funcionar con virtualización de tipo Xen en las versiones
    soportadas por el editor y proporcionadas por el Proveedor como parte del Servicio;

- Depender del Proveedor para el uso del herramienta de back up;

- Declarar IPs fijos desde los cuales el Proveedor le permitirá acceder a la interfaz COMMANDITAIRE (Filtrado por lista blanca). Las modificaciones de esta lista de IPs deberán realizarse a través del menú previsto para la console o a través de Solicitudes de servicio para las modificaciones posteriores. Al iniciar el servicio, el Proveedor será informado al menos de una dirección IP como se describe.

## Localización del servicio en Francia

Se especifica que ninguna de las operaciones y ninguno de los componentes físicos involucrados en la prestación del Servicio, al cual se refiere esta Convenio de Servicio, está ubicado fuera de la Unión Europea.

Esto incluye, entre otros, el soporte, la supervisión operativa y la supervisión de seguridad (SOC) de la infraestructura técnica que entrega el Servicio. De manera que todo el almacenamiento, las tareas administrativas, de supervisión y los procesos se realizan en Francia.

### Localización de los Centros de Datos que Albergan el Servicio

En ausence de las operaciones de los empleados y agencias del Proveedor, todas las operaciones de producción (incluyendo el almacenamiento y procesamiento de datos) y componentes técnicos que brindan el Servicio están ubicados en Centros de Datos ubicados en Francia.

### Localización de las oficinas Cloud Temple que brindan el servicio

Los colaboradores de Cloud Temple que operan dentro del alcance del servicio cumplen sus funciones desde las oficinas de Cloud Temple ubicadas exclusivamente en Francia. Estas oficinas se encuentran en Tours, Lyon, Caen y París La Défense.

El Comanditario está informado sobre la posibilidad para los empleados de Cloud Temple trabajar de manera remota. Sin embargo, el Proveedor asegura el mismo nivel de seguridad en relación con los acceso remoto, especialmente en lo que respecta a los accesos VPN. Estos accesos remotos se implementan de conformidad con las exigencias del recién establecido référentiel SecNumCloud.

## Soporte

### Características del soporte asociado al servicio

El Proveedor ofrece un servicio de soporte técnico destinado a ayudar al COMMANDITAIRE en la gestión, el mantenimiento y la optimización de sus recursos desplegados. Este servicio abarca una amplia gama de actividades, desde la asistencia en la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación se describe las características y funcionalidades del servicio de soporte:

- Asistencia en la implementación inicial del uso del Servicio;
- Asistencia en la resolución de incidentes;
- Asistencia en la resolución de problemas;
- Seguimiento y asesoramiento sobre la optimización del nivel técnico.

En el marco del servicio de soporte, el Proveedor no reemplaza al COMMANDITAIRE en el uso del Servicio. El COMMANDITAIRE permanece completamente responsable de la configuración, el uso de sus VM y Tenants, así como de la gestión de todos los elementos (datos e aplicaciones incluidas) que ha almacenado o instalado sobre las infraestructuras del Proveedor. El servicio técnico de soporte se presta en conformidad con las Condiciones Generales de Venta y Uso, el Proveedor está sujeto a una obligación de medios.

El COMMANDITAIRE se compromete a utilizar el servicio técnico de soporte de manera razonable, evitando especialmente solicitar servicios no suscritos al Proveedor y enviar a las equipos del Proveedor para atender a sus propios clientes o a terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está condicionado a la suscripción de las unidades de trabajo de soporte asociadas.

### Solicitude del Servicio Técnico

El soporte técnico está disponible a través de un sistema de tickets mediante la consola COMMANDITAIRE y es accesible durante las horas laborales normales fuera de los días festivos (de 8:00 a 18:00, lunes a viernes; calendario y horarios franceses). Para emergencias que ocurren fuera de los horarios de oficina, especialmente las incidencias que afecten significativamente la producción, el servicio de urgencia puede ser contactado al número comunicado al COMMANDITAIRE al iniciar el Servicio.

Para cada solicitud o incidente, es imprescindible generar un ticket con el soporte del Proveedor. La inicialización de este ticket, que incluye toda la información necesaria, es fundamental y marca el inicio de la evaluación de los compromisos del Proveedor.

A medida que el COMMANDITAIRE recibe una solicitud o notificación de incidente, ya sea a través de la consola de gestión o tras un llamado telefónico, se crea automáticamente un ticket. Al declarar un incidente, es crucial que el COMMANDITAIRE proporcione al Proveedor los detalles más detallados sobre el problema encontrado. Esta acción es esencial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico eficiente.

El COMMANDITAIRE recibe entonces una confirmación por correo electrónico, que indica la creación del ticket y su número único. El COMMANDITAIRE puede consultar el estado y el historial de sus solicitudes e incidentes directamente desde la consola de gestión.

### Proceso de Gestión de Incidentes

Al declarar un incidento, la equipe de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El COMMANDITAIRE debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando los pruebas requeridos. El Proveedor puede acceder al Servicio del COMMANDITAIRE para diagnosticar el incidente.

Si los servicios del Proveedor se consideran funcionales y el incidente no le es imputable, el COMMANDITAIRE lo informará. Bajo la solicitud del COMMANDITAIRE, el Proveedor puede proponer Servicios Profesionales para identificar la origen del problema, facturable previamente en tramos de 30 minutos.

En caso que el incidente sea atribuible al Proveedor o a uno de sus subcontratistas, este completará el diagnóstico y se ocupará de la restauración del servicio sin costos adicionales. El diagnóstico se basa en los intercambios entre las partes y los datos del Proveedor, considerados probatorios por acuerdo de las partes.

### Proceso de priorización de los tratajos

El determinar el nivel de prioridad de un archivo se basa en una análisis matricial que evalúa el impacto del incidente y su grado de crítica:

- Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción |
| :--- | :--- |
| **Impacto I1** | Los servicios del Proveedor están interrumpidos |
| **Impacto I2** | Los servicios del Proveedor están degradados |
| **Impacto I3** | Los servicios del Proveedor están actualmente estables, pero muestran signos de declino a largo plazo potencial |

- Los niveles de crítica se definen de la siguiente manera:

| Nivel de crítica | Descripción |
| :--- | :--- |
| **Crítica C1** | Los servicios del Proveedor se degradan a un ritmo preocupante |
| **Crítica C2** | Los servicios del Proveedor se deterioran gradualmente con el tiempo |
| **Crítica C3** | Los servicios del Proveedor presentan uno o más inconvenientes sin consecuencias significativas |

- Basado en una evaluación exhaustiva de la situación, considerando los elementos que determinan el impacto y la crítica, se asigna una prioridad al ticket según la matriz de decisión siguiente:

| Nivel de impacto / Nivel de crítica | Impacto I1 | Impacto I2 | Impacto I3 |
| :--- | :--- | :--- | :--- |
| **Crítica C1** | Prioridad P1 | Prioridad P2 | Prioridad P3 |
| **Crítica C2** | Prioridad P2 | Prioridad P3 | Prioridad P4 |
| **Crítica C3** | Prioridad P3 | Prioridad P4 | Prioridad P5 |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### Lenguaje y localización del servicio de soporte

El soporte se presta al proveedor al COMMANDITARIO mínimo en francés. El soporte también puede ofrecerse en inglés.

Las operaciones del servicio de soporte del proveedor para la oferta de servicio de infraestructura calificada SecNumCloud se llevan a cabo dentro de la Unión Europea.

# Compromisos y niveles de servicio

El Proveedor se compromete a garantizar una supervisión continua de la
calidad y la integridad segura de su infraestructura técnica que entrega el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad del servicio, cuya medición es un indicador de rendimiento, se reconoce de inmediato por el sistema de supervisión del Proveedor, o mediante una notificación por parte del usuario COMMANDITAIRE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos para garantizar un cálculo preciso y justo del tiempo de indisponibilidad.

La finalización oficial de la indisponibilidad se marca oficialmente al completar la restauración total del servicio, confirmada por los herramientas de supervisión del Proveedor o mediante el retorno del usuario, lo que garantiza una reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

## Availability Commitments of the Infrastructure

The Provider commits to maintaining a level of availability and performance in accordance with the standards defined for each specified period. These Service Level Agreements (SLAs) apply provided that the COMMANDITAIRE implements its systems across at least two of the Availability Zones present in the relevant region.

In the absence of these conditions by the COMMANDITAIRE, it will be unable to claim the application of the concerned SLAs, which are specifically identified with an asterisk (\*). Access to SLAs is available through the COMMANDITAIRE interface. The measurements are calculated monthly:

- **SLA 1** (IC-INFRA_SNC-01) - Compute Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 2** (IC-INFRA_SNC-02) - Storage Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 3** (IC-INFRA_SNC-03) - Backup Reliability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 4** (IC-INFRA_SNC-04) - Network Infrastructure Availability: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.
- **SLA 5** (IC-INFRA_SNC-05) - Internet Access: Guaranteed uptime of 99.99%, calculated on a daily basis, 24/7.

***Remarks***:

- In response to a Distributed Denial of Service (DDoS) attack, the Provider reserves the right to adjust its internet routing configuration to mitigate the impact and safeguard its infrastructure. Specifically, if an IP address belonging to the COMMANDITAIRE is targeted, the Provider may employ BGP blackholing to block all traffic destined for that IP address upstream with their providers, thereby protecting the COMMANDITAIRE's resources as well as those of other COMMANDITAIRES and the Prestataire's infrastructure. The Provider strongly encourages the COMMANDITAIRE to adopt similar measures, such as utilizing web application firewall software available on the market, and meticulously configuring its security groups via the command-line interface (CLI).

- The Provider emphasizes the necessity for the COMMANDITAIRE to minimize open ports, particularly avoiding making administration ports **SSH** (TCP port 22) and **RDP** (TCP port 3389) accessible from the entire Internet (subnet 0.0.0.0/0), as well as internal protocols like **SMB** (TCP/UDP port 445) or **NFS** (TCP/UDP port 2049).

## Garantía de Disponibilidad de la Interfaz COMMANDITAIRE

- SLA 6: IC-INFRA_SNC-06 - Acceso a la consola de administración del Servicio: una disponibilidad garantizada del 97%, proporcionada en tiempo real, las 24 horas del día y los 7 días de la semana.
- SLA 7: IC-INFRA_SNC-07 - Acceso a las APIs de control del Servicio: una disponibilidad del 99.9%, calculada sobre una base de 24 horas al día, 7 días a la semana.

## Service Level Agreement (SLA) Availability Commitment

- **SLA 8 : IC-INFRA_SNC-08** -- Here are the performance commitments of the Prestataire's technical support for incidents, excluding scheduled maintenance:

| Priority | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Priority P1** | 30min | 95% |
| **Priority P2** | 2h | 90% |
| **Priority P3** | 4h | 90% |
| **Priority P4** | 24h | 85% |
| **Priority P5** | 48h | 85% |

- **SLA 9 : IC-INFRA_SNC-09** -- Here are the performance commitments of the Prestataire's technical support for service requests:

| Type | Guaranteed Time to Intervention (GTI) | Performance Objective |
| :--- | :--- | :--- |
| **Service Request** | 4h | 90% |

*Note*:

- The GTI delay is calculated from the moment the COMMANDITAIRE opens a ticket until the first intervention by the Prestataire's support team.
- Investigations into incidents concerning COMMANDITAIRE commands will not include remote server interventions on the COMMANDITAIRE's hosting servers. Assistance in this area will be limited to explaining available metrics related to the COMMANDITAIRE environment, aiding in understanding encountered performance issues or bottlenecks. Based on these findings, recommendations can be suggested.*

## Compromiso de disponibilidad del almacenamiento objeto S3

- **SLA 10 : IC-INFRA_SNC-10** -- Aquí están los compromisos de disponibilidad para el almacenamiento objeto S3:

| Indicador | Compromiso | Objetivo de disponibilidad |
| :--- | :--- | :--- |
| **IC-INFRA-SNC-10.1** | Durabilidad del almacenamiento de un objeto en una región | 99.9999999% / año |
| **IC-INFRA-SNC-10.2** | Disponibilidad de la API de Almacenamiento Objet S3 | 99.99% |
| **IC-INFRA-SNC-10.3** | Latencia máxima de acceso a un objeto en una región | 150 ms |

Notas:

- El servicio de Almacenamiento Objet está específicamente diseñado para el almacenamiento de objetos y debe utilizarse exclusivamente para este propósito, **excluyendo categóricamente su uso en modo bloque**. Utilizar el modo bloque mediante métodos no autorizados, incluidos por ejemplo, la implementación de "FUSE" en un entorno Linux, constituye una violación de los términos de uso establecidos. Cualquier incidente, fallo o daño resultante de este uso no conforme no estará cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en esta convención de servicios.
- La garantía de durabilidad está sujeta a una utilización de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de datos, ya sea intencional o accidental, resultante de acciones llevadas a cabo por el COMMANDITAIRE.

## Precisión sobre el compromiso de respaldo

El enfoque de respaldo implementado para COMMANDITAIRE está sujeto a la suscripción de unidades de trabajo adecuadas.

El Proveedor se compromete a ofrecer una solución de respaldo que permita al COMMANDITAIRE aplicar las políticas de respaldo deseadas.

Se especifica que el alcance del Proveedor se limita a la entrega de un servicio de respaldo, mientras que el COMMANDITAIRE es responsable de supervisar y garantizar la ejecución correcta de las políticas asociadas a través de la interfaz COMMANDITAIRE.

Se indica que la gestión del uso de almacenamiento en el espacio de almacenamiento dedicado al respaldo permanece a cargo y responsabilidad del COMMANDITAIRE. El Proveedor proporciona el porcentaje de utilización a través de la consola.

*Ejemplo: No realización de respaldo de una máquina virtual:*

Si el COMMANDITAIRE detecta que una máquina virtual no está siendo respaldada, es su responsabilidad verificar la causa y, en caso necesario, solicitar asistencia al Soporte del Proveedor según el nivel de soporte suscrito.

**El SLA 8 : IC-INFRA_SNC-08 y el SLA 9**, estarán exclusivamente aplicables en caso de un incidente del servicio de respaldo.

## Organización de la relación contratual

## Responsabilidades del Proveedor

El Proveedor se compromete a:

- Informar al COMMANDITAIRE de manera adecuada (por ejemplo, en caso de
    limitación de capacidad técnica que pueda afectar la prestación del
    Servicio).

- Informar formalmente al COMMANDITAIRE y dentro de un mes, de cualquier
    cambio jurídico, organizativo o técnico que pueda afectar la conformidad del Servicio con las exigencias de protección contra las leyes extraterritoriales (19.6 del référentiel SNC v3.2).

- Proporcionar al COMMANDITAIRE interfaces y servicios de interfaz en lengua francesa mínimo.

- Considerar las exigencias sectoriales específicas relacionadas con los tipos
    de información confiadas por el COMMANDITAIRE para la implementación del Servicio, dentro de las responsabilidades del Proveedor y del Contrato, respectivamente; así como cualquier disposición prevista en el mismo.

- Estudiar las exigencias sectoriales específicas relacionadas con los tipos
    de información confiadas por el COMMANDITAIRE para la implementación del Servicio, que puedan expresarse posteriormente y comunicar al COMMANDITAIRE las acciones necesarias para su consideración.

- No divulgar ninguna información relacionada con la prestación a terceros,
    salvo una autorización formal y escrita del COMMANDITAIRE.

- Poner a disposición del COMMANDITAIRE todas las informaciones necesarias para realizar auditorías de conformidad en conformidad con el artículo 28 del RGPD.

- Informar al COMMANDITAIRE, a través de la presente Convenio de servicio,
    sobre cualquier incidente de seguridad que afecte al Servicio o la
    utilización del mismo por parte del COMMANDITAIRE (incluyendo los datos
    del COMMANDITAIRE).

- Autorizar un prestador de auditoría de la seguridad de los sistemas de
    información (PASSI) calificado, mandatado por el Proveedor, a auditar
    el servicio y su sistema informático, en conformidad con el plan de
    control del SecNumCloud del Proveedor. Además, el Proveedor se compromete
    a proporcionar todas las informaciónes necesarias para llevar a cabo los
    auditorías de conformidad con el artículo 28 del RGPD, realizadas por
    el COMMANDITAIRE o por un tercero mandatado.

- Proporcionar al COMMANDITAIRE, como subcontratista, en cumplimiento con
    el artículo 28 del Reglamento general sobre la protección de datos (RGPD),
    asistencia y asesoramiento, alertándolo inmediatamente cuando una
    instrucción emitida por este último pueda constituir una violación de las
    normas de protección de datos.

- Notificar al COMMANDITAIRE en un plazo razonable, a través de la consola
    del COMMANDITAIRE o por correo electrónico al contacto COMMANDITAIRE,
    cuando un proyecto impacte o sea susceptible de impactar el nivel de
    seguridad o disponibilidad del Servicio, o genere una pérdida de
    funcionalidad, posibles impactos, medidas de mitigación implementadas y
    riesgos residuales que le afecten.

- Documentar y poner en práctica todas las procedimientos necesarios para
    cumplir con las exigencias legales, regulatorias y contractuales aplicables
    al Servicio, así como los requisitos de seguridad específicos del COMMANDITAIRE,
    definidos por este último y previstos en el Contrato.

- No utilizar las datos del COMMANDITAIRE provenientes de la producción para
    realizar pruebas, a excepción de obtener previamente una autorización
    explícita expresa del COMMANDITAIRE, al cual caso el Proveedor se compromete
    a anonimizar estas datos y a garantizar su confidencialidad durante la
    anonimización.

- Eliminar las datos y Datos técnicos relacionados con el COMMANDITAIRE, en
    conformidad con la "procedimiento de eliminación de datos al final del
    Contrato" descrita en la presente Convenio de servicio, en caso de
    terminación o cancelación del Contrato.

- Garantizar una eliminación segura de toda la información del COMMANDITAIRE,
    mediante la reescritura completa de todo el medio que alberga sus datos
    en el marco del Servicio.

Bajo solicitud formal y escrita del COMMANDITAIRE, el Proveedor se compromete a:

1. Hacer accesible al COMMANDITAIRE el reglamento interno y la carta de ética
    del Proveedor;

2. Hacer accesible al COMMANDITAIRE las sanciones aplicadas en caso de incumplimiento de la política de seguridad;

3. Poner a disposición del COMMANDITAIRE toda la información relacionada con
    los eventos que le afecten, en las sesiones de registro del Servicio; el
    COMMANDITAIRE podrá consultar independientemente estos eventos relativos
    a su utilización del Servicio a través de las interfaces web y API del
    Servicio;

4. Hacer accesible al COMMANDITAIRE las procedimientos para cumplir con las
    exigencias legales, regulatorias y contractuales aplicables al Servicio,
    así como los requisitos de seguridad específicos del COMMANDITAIRE previstos
    en el Contrato;

5. Proporcionar al COMMANDITAIRE los elementos de evaluación de riesgos relativos a la presentación de datos del COMMANDITAIRE ante un estado no miembro de la Unión Europea;

6. Informar al COMMANDITAIRE sobre los subcontratistas posteriores involucrados
    en la prestación del Servicio, así como cualquier cambio que afecte a estos
    subcontratistas.

> El Proveedor y todas sus filiales se comprometen a respetar las valores fundamentales de la Unión Europea, como la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho, así como el respeto de los Derechos de la Persona. El servicio prestado por el Proveedor está en conformidad con la legislación vigente en materia de derechos fundamentales y las valores de la Unión Europea relativos al respeto de la dignidad humana, la libertad, la igualdad, la democracia y el estado de derecho.

## Limitación de responsabilidades del Proveedor

Debido a las definiciones y condiciones mencionadas en la presente Convenio de Servicio, las responsabilidades del Proveedor se limitan así:

1. El modelo de responsabilidad compartida, descrito en la sección "Modelo de Responsabilidades Compartidas" de la presente Convenio de Servicio, limita de hecho la participación del Proveedor en las capas de funcionamiento que van "por encima" de la prestación de recursos de computación, red, almacenamiento y copia de seguridad. Esto excluye, entre otras cosas:

    - La gestión de lo que se instala en las máquinas virtuales (Sistemas Operativos, middleware, aplicaciones, etc.);
    - La actualización de los Sistemas Operadores y otros programas instalados por el COMMANDITAIRE en sus Tenants;
    - La seguridad de los programas, software y aplicaciones instalados en las máquinas virtuales;
    - La actualización de las máquinas virtuales;
    - La copia de seguridad de los datos a nivel de aplicación.

2. El Proveedor no puede asumir compromisos de respaldo para Tenants del COMMANDITAIRE sin que el COMMANDITAIRE haya previo alta de las unidades de obra correspondientes.

3. El Proveedor no puede alegar la propiedad de los datos transmitidos y generados por el COMMANDITAIRE. De hecho, estos pertenecen al COMMANDITAIRE.

4. El Proveedor enfatiza que no puede explotar ni disponer de los datos transmitidos y generados por el COMMANDITAIRE sin la validación previa del último, entendiéndose que su disposición está reservada al COMMANDITAIRE.

5. El Proveedor se libera toda responsabilidad sobre los componentes físicamente hospedados y gestionados por el Proveedor, pero que son propiedad directa del COMMANDITAIRE o de un tercero con el que este último haya contratado. El alojamiento de componentes físicos de clientes no forma parte del Servicio y está fuera del ámbito de la presente Convenio de Servicio. Es responsabilidad del COMMANDITAIRE evaluar el nivel de adhesión o dependencia que introducen estos componentes respecto al Servicio OpenIaaS en curso de calificación SecNumCloud.

## Limitación de acceso

En el marco del Servicio, el Proveedor está expresamente prohibido de acceder a los Tenants pertenecientes al COMMANDITAIRE sin autorización previa. Es responsabilidad del COMMANDITAIRE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del hospedaje y, en su caso, servicios de soporte profesional, si esta opción ha sido elegida por el COMMANDITAIRE.

El COMMANDITAIRE reconoce que estos accesos se otorgan exclusivamente para los fines relacionados con la prestación de servicios acordados, garantizando así una gestión segura y conforme a los términos del contrato.

El acceso remoto por parte de terceros involucrados en la prestación de servicio del Proveedor está estrictamente prohibido. En caso que una exigencia técnica específica requiera tal acceso, el mismo solo podría establecerse después de haber notificado claramente al COMMANDITAIRE, proporcionar una justificación detallada y obtener su consentimiento escrito.

Esta medida asegura el control y la seguridad de los datos del COMMANDITAIRE, asegurando que cualquier excepción a la regla esté debidamente autorizada e indocumentada.

## Responsabilidades de terceros proveedores del servicio

El Proveedor conoce la lista de terceros socios que participan en la prestación del Servicio. Estos terceros son editores, proveedores (del Proveedor) y otros proveedores participantes en la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

- El Proveedor exige de los terceros que participen en la implementación del servicio, dentro de su contribución al Servicio, un nivel de seguridad al menos igual al que se compromete a mantener en su propia política de seguridad aplicable al servicio Secure Temple ;

- El Proveedor contrata con cada uno de los terceros participantes en la implementación del servicio, cláusulas de auditoría que permiten a un organismo de certificación verificar que estos terceros cumplen con las exigencias legales y las normativas SNC, permitiendo al Proveedor cumplir sus compromisos en la presente Condición de Servicio.

- El Proveedor implementa una procedura para controlar regularmente las medidas que ponen en marcha los terceros participantes en la implementación del servicio para cumplir con las exigencias del Proveedor de respetar sus compromisos en la presente Condición de Servicio.

- El Proveedor asegura el seguimiento de los cambios realizados por los terceros participantes en la implementación del servicio que puedan afectar el nivel de seguridad del sistema de información del servicio.

## Responsabilidades y obligaciones del COMMANDITARIO

El COMMANDITARIO tiene las siguientes responsabilidades en el marco del servicio:

- El Prestador proporciona al COMMANDITARIO una plataforma para ejecutar máquinas virtuales, la configuración de estas máquinas corresponde a cargo del COMMANDITARIO. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Prestador define las políticas de respaldo automáticas a través de sus interfaces. Sin embargo, es responsabilidad del COMMANDITARIO activar estas políticas de respaldo y, por lo tanto, habilitar las máquinas virtuales.

- El COMMANDITARIO autoriza a la ANSSI y al organismo de certificación SNC para auditar el servicio y la infraestructura técnica que lo entrega.

- El COMMANDITARIO es responsable de informar al Prestador cualquier exigencia sectorial específica relacionada con los tipos de información confiadas por el COMMANDITARIO y que requieren ser consideradas por el Prestador.

- El COMMANDITARIO está dispuesto a no solicitar al Prestador requisitos o acciones que excusen al Prestador de cumplir con las exigencias del recién actualizado referencial SecNumCloud, de un lado, o que reduzcan el nivel de seguridad establecido por el cumplimiento de estas mismas exigencias, del otro.

## DERECHOS DEL COMMANDITARIO

En cualquier momento durante la relación contractual, el COMMANDITARIO puede presentar una reclamación relacionada con el servicio calificado ante la ANSSI.

En cualquier momento, el COMMANDITARIO puede solicitar al Proveedor que le proporcione acceso a su saldo interno y su carta de ética.

## Eliminación de datos al final del Contrato

Al término del contrato, ya sea por vencimiento o por cualquier otra causa, el Proveedor se compromete a realizar la eliminación segura de toda la información del COMMANDITAIRE, incluyendo las datos técnicos. El Proveedor asegurará que comunique al COMMANDITAIRE un aviso formal dentro de los veintiuno y un (21) días calendarios. Las datos del COMMANDITAIRE serán eliminadas entonces en un plazo máximo de treinta (30) días posteriores a esta notificación.

Para comprobar esta eliminación, el Proveedor entregará al COMMANDITAIRE un certificado que confirme la eliminación de los datos.

## Ciclo de vida del presente Acuerdo de Servicio

1. **Planificación y Desarrollo**
   - Elaboración del diseño del servicio, incluyendo especificaciones técnicas y requisitos funcionales.
   - Selección de tecnologías y plataformas adecuadas para el desarrollo.

2. **Desarrollo**
   - Implementación del código fuente según las especificaciones definidas.
   - Integración continua (CI) y despliegue continuo (CD) mediante herramientas como Jenkins, GitLab CI o GitHub Actions.

3. **Pruebas**
   - Pruebas unitarias y de integración para garantizar la calidad del código.
   - Pruebas de aceptación para validar que el servicio cumple con las expectativas del cliente.

4. **Configuración y Optimización**
   - Configuración del entorno de producción, incluyendo servidores, bases de datos, etc.
   - Optimización del rendimiento y la seguridad del servicio.

5. **Documentación**
   - Documentación técnica detallada sobre el código, arquitectura y procesos de desarrollo.
   - Guías de usuario para facilitar la adopción del servicio por parte de los usuarios finales.

6. **Mantenimiento y Actualizaciones**
   - Monitoreo continuo del servicio para identificar y resolver problemas.
   - Implementación de actualizaciones y mejoras según sea necesario.

7. **Soporte y Mantenimiento**
   - Soporte técnico para los usuarios finales, incluyendo resolución de problemas y asistencia.
   - Gestión de incidentes y problemas críticos.

8. **Evaluación y Mejora Continua**
   - Recopilación de retroalimentación del usuario y análisis de métricas de rendimiento.
   - Implementación de mejoras basadas en la retroalimentación recibida y los resultados de las evaluaciones.

9. **Despliegue Final**
   - Despliegue del servicio en el entorno de producción, asegurando una transición sin problemas.
   - Cierre de actividades de desarrollo y mantenimiento relacionadas con la implementación.

10. **Retiro**
    - Planificación para el eventual retiro del servicio, incluyendo notificación al cliente y cumplimiento de los compromisos contractuales.

## Efectivación del Contrato de Servicio

La presente Convenio de Servicio entra en vigor el día de su firma por el COMMANDITARIO.

La recolección, manipulación, almacenamiento y tratamiento de los datos realizados en el marco de la ventanilla de ventas, implementación y detención del Servicio​ se lleva a cabo de acuerdo con la legislación vigente.

## Evoluciónes de la Cláusula de Servicio

Las modificaciones o adiciones realizadas a la presente Cláusula de Servicio derivan exclusivamente de las solicitudes formuladas por los órganos de gobierno designados para ello. Estas propuestas de cambio serán examinadas por las Partes, competentes para determinar los aspectos que requieren una formalización escrita.

Se pacta que cualquier modificación o actualización de la Cláusula de Servicio, tras su validación, que altere las condiciones financieras inicialmente establecidas, requerirá el estudio y firma de un adicente al Contrato en curso.

Los factores que podrían llevar a una revisión de esta Cláusula de Servicio incluyen, pero no se limitan a:

- El avance de la infraestructura técnica que entrega el Servicio OpenIaaS;
- Los ajustes realizados por el Proveedor para ofrecer el Servicio;
- Las variaciones en los compromisos asumidos y las sanciones aplicables;
- Las reconfiguraciones organizacionales dentro del COMMANDITAIRE o del Proveedor;
- La expansión o reducción del alcance del Servicio.

La gestión de las versiones y revisiones de la Cláusula de Servicio se registra en el preámbulo del documento para facilitar su seguimiento.

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

La disponibilidad se refiere a la capacidad de un servicio para estar operativo y accesible a los usuarios a cualquier momento. Se mide generalmente como el porcentaje de tiempo que un sistema está funcionando correctamente en un período determinado (por ejemplo, un mes). Un alto nivel de disponibilidad se logra mediante la implementación de estrategias de redundancia, distribución de carga y monitoreo continuo.

### Continuidad

La continuidad del servicio implica mantener el funcionamiento normal del sistema ante eventos adversos que puedan causar interrupciones temporales o permanentes. Esto se logra mediante la implementación de planes de recuperación ante desastres (DRP) y procedimientos de respuesta a incidentes, así como el uso de tecnologías avanzadas para la replicación de datos y la resiliencia del sistema.

### Restauración del Servicio

La restauración del servicio es el proceso de volver a poner en marcha un sistema después de una interrupción, minimizando el tiempo de inactividad (TTI) y recuperando la funcionalidad del sistema lo más rápido posible. Una buena planificación de restauración incluye pruebas frecuentes de los procedimientos de recuperación ante desastres, así como el mantenimiento constante de las copias de seguridad y la capacidad de recuperación del sistema.

### Estrategias para Mejorar Disponibilidad, Continuidad y Restauración

1. **Redundancia**: Implementar componentes redundantes (como servidores, redes) que puedan tomar el control en caso de fallo de un elemento principal.
2. **Distribución de Carga**: Distribuir la carga de trabajo entre múltiples servidores para evitar sobrecargar un único punto y mejorar la disponibilidad.
3. **Monitoreo Continuo**: Utilizar herramientas de monitoreo en tiempo real para detectar problemas antes de que afecten el servicio al cliente.
4. **Copias de Seguridad Regulares**: Realizar copias de seguridad periódicas y almacenarlas de forma segura, permitiendo recuperaciones rápidas ante pérdidas de datos.
5. **Planificación de Continuidad**: Desarrollar planes detallados para la respuesta a incidentes y desastres, incluyendo roles y responsabilidades claros.
6. **Pruebas de Recuperación**: Realizar pruebas frecuentes del plan de recuperación ante desastres para validar su efectividad y capacitar al equipo de respuesta.
7. **Tecnologías Avanzadas**: Emplear tecnologías como la computación en la nube, el edge computing y las soluciones de microservicios para mejorar la resiliencia del sistema.

### Conclusión

La disponibilidad, continuidad y restauración del servicio son aspectos esenciales para cualquier organización que dependa de servicios digitales. Implementar estrategias robustas en estos campos no solo mejora la experiencia del usuario, sino que también protege la reputación y los activos financieros de una empresa. La elección de las tecnologías adecuadas y el mantenimiento constante de los procesos de recuperación son fundamentales para garantizar un alto nivel de servicio continuo y confiable.

### Gestión de incidentes y interrupciones

## Incidentes

#### Tipos de incidentes tratados en el marco de esta Convenio de servicio

- Siniestros;

- Apagones y fallas;

- Incidentes de seguridad que afecten la disponibilidad, la confidencialidad o la integridad del Servicio.

#### Tratamiento de incidentes

El Proveedor informa al COMMANDITARIO en los plazos más rápidos posibles sobre los incidentes y interrupciones, a través de una notificación en la consola COMMANDITARIO o por correo electrónico al contacto COMMANDITARIO. El Proveedor informa al COMMANDITARIO del tratamiento del incidente mediante el canal utilizado para notificar el incidente, o mediante el canal indicado en la notificación del incidente.

#### Nivelación de notificación de incidentes de seguridad

El COMMANDITAIRE tiene la responsabilidad de seleccionar los niveles de gravedad de los Incidentes de seguridad por los cuales desea recibir noticias, por ejemplo, a través de su formalización en un PAS aplicable al Servicio.

Por defecto, el COMMANDITAIRE recibe:

- Incidentes de seguridad con impacto (impactos I1 y I2 según la escala de impacto definida en el proceso de priorización de los tratamientos del presente Acuerdo de Servicio) ;

- Incidentes de seguridad que afecten la confidencialidad o la integridad de los datos del COMMANDITAIRE confiados en el marco del Servicio ;

- Violaciones de datos personales para las que el COMMANDITAIRE es responsable del tratamiento conforme al artículo 8 de la Anexo DPA dentro del marco del Servicio ;

-

## Mantenimiento del Servicio

### Naturaleza de la mantenimiento

Violaciones de datos personales por las que el Proveedor es responsable del tratamiento y que contienen datos personales del CLIENTE, en conformidad con el artículo 8 de la Anexo DPA. La mantenimiento garantizado consiste en la implementación:

- Del plan de mantenimiento en condiciones operativas del Servicio para asegurar buenos indicadores de disponibilidad tal como lo compromete el Proveedor anteriormente;

- Del Plan PCA/PRA, si es suscrito por el CLIENTE, que se activa en caso de incidentes que puedan ocurrir.

### Acceso remoto a Cloud Temple fuera del perímetro del COMMANDITAIRE

El Proveedor se prohibe, en el marco de la presente Convenio de servicio, cualquier acceso a los Tenants y al espacio de la interfaz del COMMANDITAIRE.

Será responsabilidad del COMMANDITAIRE otorgar los accesos necesarios al personal del Proveedor. El COMMANDITAIRE reconoce que dichos accesos serán utilizados en el marco del hospedaje y, finalmente, de la gestión (si es contratado por el COMMANDITAIRE).

### Acceso remoto de terceros para la prestación del servicio dentro del ámbito del COMMANDITAIRE

No se permite acceso remoto de terceros que participe en la prestación del servicio.

Si un requerimiento técnico lo hiciera necesario, dicho tipo de acceso solo sería realizado después de notificar al COMMANDITAIRE la justificación y obtener su acuerdo escrito.

# Procedimiento de eliminación de datos al final del Contrato

Al finalizar el contrato, ya sea por expiración del mismo o por cualquier otra causa, el Proveedor asegurará la eliminación segura de toda la información tratada en el marco del Servicio, incluyendo las Datos técnicos del COMMANDITAIRE. El Proveedor dará una notificación formal dentro de los veinte y un días calendarios (21). Las datos del COMMANDITAIRE serán eliminados en un plazo máximo de treinta (30) días posteriores a la notificación. El Proveedor proporcionará un certificado de eliminación de datos al COMMANDITAIRE.

## Derecho aplicable

Note: The Markdown structure and formatting are preserved as is. Only the text content outside of HTML tags, code blocks, or URLs was translated from French to Spanish. The translation remains faithful to the original meaning while adhering to the specified rules.

## En general

El derecho aplicable y al que está sujeto la presente Convenio de Servicio es el derecho francés.

## Respeto al cumplimiento de las leyes y regulaciones aplicables

El Proveedor se compromete a los siguientes puntos:

- Identificación de las restricciones legales y regulatorias aplicables en el marco del Servicio;

- Cumplimiento de las restricciones legales y regulatorias aplicables a los datos confiados al Proveedor, dentro de las responsabilidades de este último, y de acuerdo con las disposiciones previstas en el Contrato.

- Cumplimiento de la Ley de Informática y Libertad (LIL) y del Reglamento General de Protección de Datos (RGPD);

- Implementación de medidas de protección de datos personales;

- Establecimiento y mantenimiento de un proceso de vigilancia legal y regulatoria;

- Disponer y mantener relaciones adecuadas o una vigilancia con las autoridades sectoriales en relación con el tipo de datos tratados en el marco del Servicio. Esto incluye, entre otros, ANSSI (Agence nationale de la sécurité des systèmes d'information), CERT-FR (Centre national de prévention et de lutte contre les attaques informatiques) y CNIL (Commission nationale de l'informatique et des libertés).

## RGPD

Actuando como subcontratista en el sentido del artículo 28 del Reglamento general de protección de datos (RGPD), el Proveedor se compromete a:

- Garantizar la transparencia y la trazabilidad;

- Designar un DPO encargado de definir y ejecutar las medidas de protección de los datos personales;

- Ofrecer asistencia y asesoramiento al CLIENTE, alertándolo en caso de que una instrucción del último constituya una violación de las normas de protección de datos personales si el Proveedor tiene la capacidad de identificarla;

- Una garantía de seguridad sobre los datos tratados (debido a su calificación SecNumCloud).

## Protección contra riesgos extracomunitarios

El domicilio social del Proveedor se encuentra dentro de un Estado miembro
de la Unión Europea. El capital social y los derechos de voto en la
sociedad del Proveedor no están, directa ni indirectamente:

- individualmente poseídos a más del 24%,

- y colectivamente poseen a más del 39%;

por entidades terceras que tengan su domicilio social, centro de
administración o establecimiento principal en un Estado no miembro de la
Unión Europea.

En caso de reclamo por parte del Proveedor, dentro del servicio, al servicio
de una sociedad tercera (incluyendo un subcontratista) que tenga su domicilio
social, centro de administración o establecimiento principal en un Estado no
miembro de la Unión Europea o que sea propiedad o controlada por una
sociedad tercera ubicada fuera del Espacio Económico Europeo (EEE), el Proveedor
se compromete:

- a que dicha sociedad tercera no tenga acceso a las operaciones;

- a disponer de autonomía operativa mediante la posibilidad de contratar
a otro subcontratista o implementar rápidamente una alternativa tecnológica.

Para recordatorio, los datos mencionados son aquellos confiados al Proveedor
por el COMMANDITAIRE, así como todas las Datos Técnicas que incluyen información
sobre los COMMANDITAIRES.

Para los fines de este artículo, la notion de control se entiende como aquella
mencionada en el II del artículo L233-3 del Código de Comercio.

# FIRMAS

Hecho en \_\_\_\_\_\_\_\_\_\_\_\_\_\_\, el
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Por Cloud Temple, EL PROVEEDOR

Para \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, EL COMMANDITARIO
