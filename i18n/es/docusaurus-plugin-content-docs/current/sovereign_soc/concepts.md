---
title: Conceptos
---

## Presentación

El Sovereign SOC es un servicio gestionado de cibervigilancia. Se encarga de la recopilación, el análisis y la cualificación de los eventos de seguridad de sus sistemas de información, ya estén alojados en la nube de confianza o en otro entorno. El servicio es de extremo a extremo: incluye la plataforma técnica de detección, el análisis automatizado y la validación humana 24/7 por parte de un equipo de analistas de seguridad. Usted solo recibe tickets de incidentes cualificados, acompañados de un plan de remediación con seguimiento.

### Una cualificación en embudo

Cada evento de seguridad pasa por tres niveles de análisis sucesivos, con el fin de recurrir a sus equipos únicamente ante incidentes confirmados:

1. **Detección automática**: análisis en tiempo real de los registros recopilados, mediante correspondencia con reglas de detección (pattern matching).
2. **Precualificación mediante IA**: modelos de inteligencia artificial enriquecen las alertas en relación con las amenazas y vulnerabilidades conocidas, y descartan los falsos positivos evidentes.
3. **Validación humana**: un analista del SOC cualifica el incidente antes de la emisión del ticket y, a continuación, hace el seguimiento de la remediación.

### Sovereign SOC o SIEM

Un SIEM (Security Information and Event Management) es la plataforma técnica que recopila, correlaciona y conserva los registros. El Sovereign SOC incluye esta plataforma, pero también el análisis y la cualificación de las alertas por parte de analistas. Si ya dispone de un equipo SOC interno y solo busca una plataforma de recopilación y correlación, un SIEM operado por usted mismo o por un tercero responde a esta necesidad.

### Destinatarios y casos de uso

El servicio está dirigido a los directores de sistemas de información (CIO) y responsables de seguridad de la información (CISO) que desean externalizar la vigilancia de la seguridad sin constituir un SOC interno, a los equipos operativos que reciben los tickets de incidentes y a los responsables de cumplimiento que necesitan centralizar las trazas de auditoría. Casos de uso típicos:

- **Detección de intrusiones**: intentos de acceso ilegítimos, compromisos de cuentas, escaladas de privilegios. Por ejemplo, una conexión anómala fuera del horario laboral es verificada por un analista (ausencia de una intervención de mantenimiento planificada), que le notifica para su bloqueo.
- **Detección de ransomware**: comportamientos de cifrado masivo de archivos y comunicaciones sospechosas hacia servidores de mando y control (C2).
- **Vigilancia de la infraestructura**: flujos de red anómalos y modificaciones críticas de configuración.
- **Trazabilidad**: centralización de las trazas de auditoría de sus sistemas.

## Ventajas

| Ventaja                    | Descripción                                                                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Soberanía                  | Los datos recopilados están alojados en Francia, y los analistas del SOC están ubicados en Francia.                                                |
| Vigilancia continua        | Las alertas se tratan las 24 horas del día, los 7 días de la semana, durante todo el año.                                                          |
| Alertas cualificadas       | La combinación del análisis automatizado y de la validación humana limita las solicitudes a sus equipos a los incidentes confirmados.             |
| Modelo de suscripción      | El servicio se contrata en forma de suscripción, sin inversión inicial en una plataforma de detección ni en un equipo dedicado.                     |
| Implementación rápida      | La arquitectura de recopilación y tratamiento está preaprovisionada.                                                                               |
| Coordinación de los equipos | Cuando sus sistemas están alojados en la nube de confianza, los equipos de cloud y de seguridad se coordinan en la gestión de los cambios, de los activos y de los incidentes. |

## Funcionalidades

| Funcionalidad                   | Descripción                                                                                                                       |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Catálogo de fuentes de registros | Recopilación de los registros de las principales tecnologías de sus sistemas de información.                                     |
| Reglas de detección             | Catálogo de reglas probadas que cubren las principales técnicas de ataque, documentadas según el marco de referencia MITRE ATT&CK. |
| Precualificación mediante IA    | Cualificación automatizada de primer nivel, para descartar los falsos positivos y enriquecer el análisis de las alertas.           |
| Experiencia humana 24/7         | Validación de las alertas críticas por un analista del SOC, propuesta y seguimiento de un plan de remediación.                    |
| Aislamiento de los datos        | Aislamiento lógico estricto de los datos de cada cliente.                                                                         |
| Ticketing                       | Creación automática de un ticket para cada incidente confirmado.                                                                  |
| Notificaciones                  | Envío de las alertas cualificadas por correo electrónico a los contactos que usted haya designado.                                |
| Portal del cliente              | Acceso a los tickets, a los paneles de control, al registro de las reglas de detección y a los entregables del servicio.          |
| Seguimiento mensual             | Panel de control mensual: revisión de los tickets, evolución del perímetro supervisado, registro de las reglas de detección implementadas. |

## Arquitectura

### Flujo de datos

1. **Recopilación**: los registros se recopilan según la naturaleza de cada fuente, mediante un agente de transferencia (forwarder) instalado en su infraestructura o mediante llamada a la API.
2. **Transporte**: los registros transitan por un túnel VPN IPsec hacia el enclave de recopilación del SOC.
3. **Tratamiento**: una plataforma compartida de recopilación y análisis aplica las reglas de detección, complementada por un módulo de análisis mediante IA. Los datos de cada cliente están aislados lógicamente en ella.
4. **Explotación**: los analistas del SOC tratan las alertas desde una consola de gestión dedicada y, a continuación, emiten los tickets de incidentes.

### Integraciones

- **Notificaciones**: alertas cualificadas enviadas por correo electrónico a los contactos designados.
- **Portal del cliente**: seguimiento de los incidentes en la herramienta de ticketing del servicio.
- **Herramientas ITSM de terceros**: la interconexión con sus herramientas de gestión de servicios de TI puede estudiarse caso por caso.

### Organización de la respuesta a incidentes

Se redacta con usted un procedimiento de gestión de incidentes de seguridad, asociado a una matriz de escalado. Este precisa los contactos, el modelo operativo y el proceso de tratamiento de los incidentes.

## Regiones y zonas de disponibilidad

El servicio se opera en Francia: todos los datos recopilados permanecen en el territorio nacional. Los sistemas supervisados, por su parte, pueden estar alojados en la nube de confianza, en una nube de terceros u on-premise, siempre que sus registros puedan encaminarse hasta el enclave de recopilación.

## Especificaciones técnicas

| Parámetro                     | Valor                                                                                          |
|-------------------------------|------------------------------------------------------------------------------------------------|
| Recopilación                  | Agente de transferencia instalado en su infraestructura, o recopilación mediante API           |
| Transporte                    | Túnel VPN IPsec; protocolos de recopilación compatibles con TLS 1.3                            |
| Cifrado en reposo             | AES-256                                                                                        |
| Conservación de los registros | 90 días; puede tenerse en cuenta una necesidad de conservación específica bajo petición        |
| Método de detección           | Correspondencia de patrones (pattern matching), reglas documentadas según MITRE ATT&CK         |
| Horario de supervisión        | 24/7, durante todo el año                                                                      |

### Reglas de detección

Las reglas de detección incluidas en el servicio se le presentan y se validan con usted durante la fase de build, en función del perímetro supervisado y de los registros disponibles. Están diseñadas para:

- cubrir las amenazas más probables;
- aplicarse sin un ajuste complejo sobre un sistema de información;
- disponer de una cobertura MITRE ATT&CK documentada, con umbrales y niveles de criticidad propuestos por defecto. Estos umbrales pueden adaptarse a partir de la lista de sus activos sensibles.

El ciclo de vida de las reglas se define con usted para acompañar la evolución del perímetro, de las amenazas, de las vulnerabilidades y de los incidentes de seguridad. El seguimiento mensual le permite conocer las reglas vigentes y los riesgos cubiertos.

Se distinguen dos tipos de nuevas reglas:

- **Regla simple**: una fuente de registros y una condición, por ejemplo la detección de un ataque de fuerza bruta sobre una autenticación.
- **Regla avanzada**: varias condiciones, o un enriquecimiento mediante IA (inteligencia sobre amenazas, sensibilidad de los activos).

### Fases del servicio

1. **Suscripción**: el perímetro del servicio y las opciones elegidas se definen con usted; usted toma conocimiento de los requisitos previos a su cargo.
2. **Build**: construcción del servicio con usted, puesta en marcha de la recopilación y de las reglas de detección, definición de la organización de la gestión de incidentes entre sus equipos y el SOC.
3. **Pre-run**: periodo de un mes dedicado al ajuste de las reglas de detección. Al término del mismo, puede establecerse con usted un objetivo de tasa de falsos positivos.
4. **Run**: vigilancia activa, notificaciones y escalados, definición y seguimiento de los planes de remediación, gobernanza mensual, evolución de las fuentes de registros y de las reglas de detección.

### Opciones

| Opción                                              | Descripción                                                                                                                                                                  |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alineación con su análisis de riesgos               | Opción del build. A partir de su análisis de riesgos de ciberseguridad, las reglas de detección y la criticidad de las alertas se alinean con sus riesgos, durante un taller conjunto. |
| Pruebas de intrusión                                | Opción del run. Verificación de la seguridad de una aplicación, o activación deliberada de reglas de detección para poner a prueba de extremo a extremo la organización implementada. |
| Conservación en frío de los registros               | Almacenamiento de los registros durante un largo periodo, fuera de los sistemas de detección, con protección de su integridad y de su confidencialidad.                      |

### Límites

- El servicio se basa en el análisis de los registros y en la correspondencia de patrones. No incluye funcionalidades avanzadas de análisis del comportamiento de usuarios y entidades (UEBA), ni correlación compleja entre varias fuentes.
- El nivel de falsos positivos depende de su contexto: calidad de los datos recopilados, exposición del sistema de información, cumplimiento de las buenas prácticas por parte de los usuarios y de los administradores.

## Seguridad y cumplimiento

El servicio y su sistema de información implementan medidas de seguridad técnicas y organizativas:

- **Alojamiento en Francia**: los datos recopilados y los modelos de IA que los analizan están alojados en Francia.
- **Cifrado**: los datos se cifran en tránsito y en reposo.
- **Aislamiento**: arquitectura aislada, aislamiento lógico de los datos de cada cliente.
- **Mantenimiento en condiciones de seguridad** de los componentes técnicos del servicio.
- **Medidas organizativas**: cartas de uso del sistema de información, de ética y de administración, verificación de antecedentes, cláusula de confidencialidad y concienciación en materia de seguridad para todos los colaboradores del SOC.
- **Supervisión continua**: las alertas son tratadas 24/7 por analistas ubicados en Francia.

## Reversibilidad

Los datos recopilados (registros) y las reglas de detección siguen siendo de su propiedad. Se le restituyen bajo petición, en formatos estándar.

## Precios

El Sovereign SOC se factura en forma de una suscripción fija, complementada con una parte variable calculada sobre el volumen diario medio de registros ingeridos; esta parte cubre la ingesta, la conservación de 90 días y el análisis mediante IA. La puesta en servicio (build) y las opciones se facturan por separado. Los precios se publican en la página del producto en el sitio web de Cloud Temple:
[Sovereign SOC — precios](https://www.cloud-temple.com/produits/sovereign-soc/).

## Buenas prácticas

- Se recomienda que el SOC recopile las alertas emitidas por sus propias soluciones de seguridad (xDR, cortafuegos de aplicaciones, IPS…), para que se cualifiquen junto con el resto de sus eventos.
- Proporcione la lista de sus activos sensibles: permite adaptar los umbrales y la criticidad de las alertas.
- Los accesos al portal del cliente son nominativos: le corresponde a usted revisarlos periódicamente.
