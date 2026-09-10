---
title: Catálogo de Modelos de IA
sidebar_position: 2
---

# Catálogo de Modelos LLM como Servicio

## Consultar el catálogo actualizado

El **[catálogo y ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle)** es la referencia para los modelos en producción, las depreciaciones, las fechas de fin de soporte, los estados LTS y las migraciones recomendadas. Utilice sus filtros y su búsqueda para preparar un nuevo proyecto o seguir los modelos de sus aplicaciones. Para las fechas del ciclo de vida y las migraciones, la información publicada en esta página es la referencia oficial en caso de discrepancia con un ejemplo antiguo o una copia del catálogo.

Esta página explica cómo elegir y utilizar un modelo. Los inventarios, fechas y métricas de rendimiento están disponibles directamente en las siguientes fuentes:

| Necesidad | Fuente a consultar |
|--------|--------------------|
| Elegir un modelo, verificar su contexto y su ciclo de vida | [Catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) |
| Obtener los identificadores expuestos por la API | `GET /v1/models` ([documentación](./api.md)) |
| Verificar la disponibilidad y el rendimiento observado | [Estado del servicio](https://llmaas.status.cloud-temple.app/) |
| Consultar las actualizaciones del servicio y los anuncios de migración | [Changelog LLMaaS](https://llmaas.status.cloud-temple.app/changelog) |
| Examinar las métricas anteriores | [Historial de monitoreo](https://llmaas.status.cloud-temple.app/history) |

## Elegir según su uso

El servicio cubre los usos a continuación. Verifique las capacidades del modelo seleccionado antes de la integración: no todos los modelos soportan las mismas entradas ni las mismas funcionalidades.

### Chat y razonamiento

Para asistentes, síntesis o análisis, compare la calidad de las respuestas sobre sus propios documentos, el tiempo de respuesta y el tamaño de contexto necesario. Para una aplicación destinada a perdurar, examine el estado **LTS** y la fecha de fin de soporte publicada.

### Programación y agentes

Para generar código o construir un agente, verifique el soporte para las llamadas a herramientas (*tool calling*) y pruebe secuencias completas de ejecución. La [guía de inicio rápido](./quickstart.md) presenta un ejemplo de llamada a función.

### Visión y multimodalidad

Elija un modelo que acepte imágenes para el análisis visual y la extracción de texto. Verifique los formatos aceptados por la API y la capacidad de contexto; el soporte para texto no implica el soporte para imágenes. Consulte los ejemplos de [solicitudes multimodales](./api.md).

### Embeddings y búsqueda semántica

Los embeddings transforman el texto en vectores utilizados por la búsqueda. Compare la cobertura lingüística, la longitud de los textos aceptados y la relevancia en su corpus. Un cambio de modelo puede requerir recalcular los vectores y reconstruir el índice: no mezcle los embeddings de modelos diferentes. Consulte el [guide RAG](./rag_explained.md).

## Modelos de Reranking

El reranking reclasifica los documentos recuperados según su relevancia para una consulta. Complementa la búsqueda vectorial antes de la generación de la respuesta. Los endpoints `/v1/rerank` y `/v2/rerank` se presentan en la [guía de Reranking](./rerank.md).

### Seguridad y guardrails

Los modelos de seguridad permiten evaluar el contenido dentro de un flujo de aplicación. Defina los criterios de filtrado, los umbrales y el tratamiento de los casos ambiguos junto con sus equipos de negocio; valídelos con sus datos.

### Traducción

Para una aplicación multilingüe, pruebe los idiomas correspondientes, su terminología y la preservación del formato. La calidad debe evaluarse en los documentos realmente procesados.

### Audio e imagen

El catálogo incluye usos de transcripción de audio y generación de imágenes. Verifique el modelo y el protocolo requeridos para cada uso, en particular la distinción entre transcripción de archivos y transcripción en tiempo real.

## Recuperar los identificadores a través de la API

```bash
curl "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Utilice el identificador exacto devuelto por la API en el parámetro `model`. La presencia de un identificador no garantiza que aún designe el modelo original: un nombre antiguo puede redirigirse a un sucesor. Verifique también su [ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle).

## Preparar la producción

1. Seleccione un modelo adecuado para su uso y verifique su licencia.
2. Consulte su estado, su fecha de fin de soporte y su migración recomendada.
3. Pruebe la calidad, la latencia, el costo y las capacidades necesarias en sus casos reales.
4. Conserve el identificador del modelo en la configuración de su aplicación para facilitar una migración.
5. Siga el changelog y aplique la [guía de migración](./concepts.md#migración-a-otro-modelo) cuando se anuncie un cambio.

Las velocidades observadas dependen, entre otros factores, de la carga, de la longitud de las solicitudes y del modo de generación. Sirven como referencia, no como garantías de rendimiento para su aplicación.

Para las tarifas y los niveles de acceso, consulte la [documentación de la API](./api.md). Para el procesamiento diferido, consulte el [modo Batch](./batch.md).