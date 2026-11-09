---
title: Conceptos
---

:::info[Servicio gestionado, fuera de la Consola]

AIOps se contrata a través de los expertos de Cloud Temple, que estudian con usted su integración en su entorno y el modo de despliegue adecuado. No se pide desde la Consola Cloud Temple y no dispone en ella de vista ni de API.

:::

## Presentación

El servicio **AIOps** de Cloud Temple es una plataforma de inteligencia operativa que aplica la inteligencia artificial a las operaciones informáticas: supervisión, análisis de incidentes y automatización de las tareas de explotación. Se apoya en una CMDB híbrida para situar cada evento en su contexto (servicios, dependencias, criticidad). Actúa como copiloto de sus equipos: no los sustituye.

Está dirigido a los equipos de explotación, a los ingenieros de producción, a los SRE (*Site Reliability Engineers*) y a las direcciones de sistemas de información que quieren mejorar la calidad de servicio y reducir las tareas repetitivas. Casos de uso típicos:

- reducir el ruido durante una tormenta de alertas, agrupando los eventos ligados a una misma causa en un único incidente;
- detectar las anomalías en los informes de copia de seguridad y en los procesamientos por lotes;
- anticipar los incidentes gracias al análisis del comportamiento de las métricas.

## Ventajas

| Ventaja | Descripción |
|---|---|
| Reactividad | Según el modo de despliegue, AIOps propone (Stackless) o aplica (Stackfull) las correcciones conocidas. |
| Menos ruido | La correlación de las alertas concentra a sus equipos en los incidentes reales. |
| Postura proactiva | La detección de anomalías señala las desviaciones antes de que provoquen un incidente. |
| Transmisión de competencias | Las sugerencias de resolución y los runbooks probados difunden la experiencia de los ingenieros experimentados. |

## Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| Correlación contextual | Agregación de las alertas según la topología, para contener las tormentas de alertas. |
| Análisis de causas raíz | Identificación del componente defectuoso en la cadena de dependencias. |
| Análisis semántico de los registros | Comprensión de los errores en los registros de copia de seguridad y de procesamientos, más allá de los códigos de retorno. |
| Detección de anomalías | Aprendizaje del funcionamiento nominal y alerta en caso de desviación. |
| Autorremediación | En modo Stackfull, ejecución de escenarios de reparación enmarcados por salvaguardas; en modo Stackless, la ejecución corresponde a sus equipos. |
| Clasificación y enrutamiento | Categorización del incidente y envío al equipo adecuado. |
| Sugerencias de resolución | Cruce con la base de conocimientos y el historial de tickets, para proponer runbooks y causas probables. |

## Arquitectura

AIOps funciona como una torre de control conectada a sus herramientas de explotación:

- la **supervisión** la alimenta de forma continua (eventos, alertas, métricas y registros según el perímetro);
- la **herramienta ITSM** aporta el contexto operativo: incidentes, cambios, historial;
- la **CMDB** proporciona el repositorio de los servicios y de sus dependencias.

La torre de control correlaciona estas señales, enriquece los tickets (categorización, agrupación, priorización, sugerencias de runbooks) y deja constancia de sus acciones en la herramienta ITSM.

### Modos de despliegue

- **Stackless** (por defecto): no se añade ningún componente intrusivo a su sistema de información. AIOps se apoya en la recopilación existente y proporciona análisis, recomendaciones y sugerencias; la ejecución de las acciones corresponde a sus equipos.
- **Stackfull**: agentes de IA desplegados en su sistema de información ejecutan escenarios de remediación predefinidos, bajo la gobernanza de sus procesos ITSM.

### Integraciones

- **Supervisión**: Nagios, Centreon, Prometheus, Zabbix.
- **ITSM**: ServiceNow, Jira.
- **Entornos**: Azure, AWS, VMware.

## Regiones y zonas de disponibilidad

Los datos se alojan en Francia, en los centros de datos de Cloud Temple, y se aíslan por cliente. La inferencia de los modelos de IA se realiza en Francia.

## Especificaciones técnicas

| Parámetro | Valor |
|---|---|
| Conservación de los datos | 12 meses de forma estándar |
| Frecuencia de análisis | Tiempo real (flujo) |
| Modelos de IA | Supervisados, no supervisados y grandes modelos de lenguaje (LLM) |

### Límites

- AIOps no se pide desde la Consola Cloud Temple y no dispone en ella de vista ni de API.
- El perímetro cubierto y el modo de despliegue se definen con los expertos de Cloud Temple.

## Seguridad y cumplimiento

- **Aislamiento**: los datos de cada cliente están aislados.
- **Localización**: datos alojados y modelos de IA ejecutados en Francia, en la infraestructura de Cloud Temple.
- **Gobernanza de las acciones**: en modo Stackfull, los escenarios de remediación están predefinidos, enmarcados por salvaguardas y gobernados por sus procesos ITSM; en modo Stackless, AIOps no ejecuta ninguna acción.

## Reversibilidad

Para conocer las modalidades de exportación y de borrado de sus datos, consulte a los expertos de Cloud Temple.

## Precios

AIOps se contrata previo estudio con los expertos de Cloud Temple: [contáctenos](https://www.cloud-temple.com/contactez-nous/). Consulte también la [página AIOps del sitio web de Cloud Temple](https://www.cloud-temple.com/produits/ai-ops/).
