---
title: Catálogo de Modelos de IA
sidebar_position: 2
---

# Catálogo de Modelos de IA de LLMaaS

## Consultar el catálogo actualizado

El **[catálogo y ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle)** es la referencia para los modelos en producción, las deprecaciones, las fechas de fin de soporte, los estatus LTS y las migraciones recomendadas. Utilice los filtros y la búsqueda del catálogo para preparar un nuevo proyecto o seguir los modelos de sus aplicaciones. Para las fechas del ciclo de vida y las migraciones, la información publicada en esta página hace autoridad en caso de discrepancia con un ejemplo anterior o una copia del catálogo.

Esta página explica cómo elegir y utilizar un modelo. Los inventarios, fechas y medidas de rendimiento son consultables directamente en las siguientes fuentes:

| Necesidad | Fuente a consultar |
|--------|--------------------|
| Elegir un modelo, verificar su contexto y su ciclo de vida | [Catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) |
| Obtener las credenciales expuestas por la API | `GET /v1/models` ([documentación](./api.md)) |
| Verificar la disponibilidad y los rendimientos observados | [Estado del servicio](https://llmaas.status.cloud-temple.app/) |
| Consultar las evoluciones del servicio y los anuncios de migración | [Changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog) |
| Examinar las medidas pasadas | [Historial de supervisión](https://llmaas.status.cloud-temple.app/history) |

## Elegir según su uso

El servicio cubre los usos siguientes. Verifique las capacidades del modelo seleccionado antes de la integración: no todos los modelos admiten las mismas entradas ni las mismas funcionalidades.

### Chat y razonamiento

Para asistentes, síntesis o análisis, compare la calidad de las respuestas sobre sus propios documentos, el tiempo de respuesta y el tamaño de contexto necesario. Para una aplicación llamada a perdurar, examine el estatus **LTS** y la fecha de fin de soporte publicada.

### Programación y agentes

Para generar código o construir un agente, verifique la admisión de llamadas a herramientas (*tool calling*) y pruebe secuencias completas de ejecución. La [guía de inicio rápido](./quickstart.md) presenta un ejemplo de llamada a función.

### Visión y multimodal

Elija un modelo que acepte imágenes para el análisis visual y la extracción de texto. Verifique los formatos admitidos por la API y la capacidad de contexto; la admisión de texto no implica la de imágenes. Consulte los ejemplos de [consultas multimodales](./api.md).

### Embedding y búsqueda semántica

Los embeddings transforman el texto en vectores utilizados por la búsqueda. Compare la cobertura lingüística, la longitud de los textos admitidos y la pertinencia sobre su corpus. Un cambio de modelo puede requerir recalcular los vectores y reconstruir el índice: no mezcle los embeddings de modelos diferentes. Consulte la [guía RAG](./rag_explained.md).

## Modelos de Reranking

El reranking reordena los documentos encontrados según su pertinencia para una pregunta. Complementa la búsqueda vectorial antes de la generación de la respuesta. Los endpoints `/v1/rerank` y `/v2/rerank` se presentan en la [guía Reranking](./rerank.md).

### Seguridad y guardrails

Los modelos de seguridad permiten evaluar contenidos en un recorrido aplicativo. Defina los criterios de filtrado, los umbrales y el tratamiento de los casos ambiguos con sus equipos de negocio; valídelos sobre sus datos.

### Traducción

Para una aplicación multilingüe, pruebe los idiomas concernidos, su terminología y la preservación del formato. La calidad debe evaluarse sobre los documentos realmente tratados.

### Audio e imagen

El catálogo incluye usos de transcripción de audio y generación de imágenes. Verifique el modelo y el protocolo requerido para cada uso, especialmente la distinción entre transcripción de archivos y transcripción en tiempo real.

## Recuperar las credenciales vía la API

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Utilice el identificador exacto devuelto por la API en el parámetro `model`. La presencia de un identificador no garantiza que aún designe al modelo original: un nombre antiguo puede ser redirigido a un sucesor. Verifique también su [ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle).

## Preparar la producción

1. Seleccione un modelo adecuado a su uso y verifique la licencia del modelo.
2. Consulte el estatus del modelo, su fecha de fin de soporte y su migración recomendada.
3. Pruebe la calidad, la latencia, el costo y las capacidades necesarias sobre sus casos reales.
4. Conserve el identificador del modelo en la configuración de su aplicación para facilitar una migración.
5. Siga el changelog y aplique la [guía de migración](./concepts.md#migración-hacia-otro-modelo) cuando se anuncie un cambio.

Las velocidades observadas dependen, entre otros factores, de la carga, de la longitud de las consultas y del modo de generación. Sirven como referencias, no como garantías de rendimiento para su aplicación.

Para conocer los precios públicos vigentes y establecer su estimación, consulte el [catálogo tarifario oficial Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). Para los niveles técnicos, consulte la [documentación API](./api.md). Para los tratamientos diferidos, consulte el [modo Batch](./batch.md).
