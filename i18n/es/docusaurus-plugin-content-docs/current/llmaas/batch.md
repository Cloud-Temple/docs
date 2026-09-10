---
title: API por lotes
sidebar_position: 6
---

# Batch API — Procesamiento Asíncrono

La Batch API procesa varias conversaciones independientes con el mismo modelo, de forma asíncrona. Es adecuada para tareas diferidas de clasificación, síntesis o extracción de texto.

Envía las conversaciones directamente en JSON a `POST /v1/chat/completions/batch`, y luego recupera su estado y resultados con `GET /v1/chat/completions/batch/{id}`. Este contrato es específico de LLMaaS: no se basa en los endpoints de archivos y batches del SDK de OpenAI.

## Funcionamiento

1. Prepare una lista de conversaciones con un modelo y parámetros comunes.
2. Envíe el lote: la API devuelve **HTTP 202**, un identificador `id` y el estado `queued`.
3. Conserve este identificador y consulte el estado cada 30 a 60 segundos.
4. Recupere el array `results` cuando finalice el procesamiento y luego guarde los resultados en su aplicación.

Utilice la **misma clave de API** para enviar y consultar el lote. Otra clave, incluso si está asociada a la misma cuenta, no permite recuperar sus resultados.

## Enviar un lote

### POST /v1/chat/completions/batch

El campo `messages` es un **array de arrays**: cada subarray contiene los mensajes de una conversación independiente. Los demás parámetros son comunes a todas las conversaciones.

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch" \
  -H "Authorization: Bearer $LLMAAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      [
        {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
        {"role": "user", "content": "Mon accès VPN ne fonctionne plus."}
      ],
      [
        {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
        {"role": "user", "content": "Mon application se ferme au démarrage."}
      ]
    ],
    "max_tokens": 200,
    "temperature": 0.0
  }'
```

Verifique el identificador del modelo con `GET /v1/models` y su [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle) antes de la ejecución.

| Campo | Descripción |
|-------|-------------|
| `model` | Identificador del modelo utilizado para todas las conversaciones. |
| `messages` | Array no vacío de conversaciones, cada una representada por un array de mensajes. |
| `max_tokens`, `temperature`, `top_p`, etc. | Parámetros aplicados a cada conversación, según las capacidades del modelo. |
| `tools`, `tool_choice`, `response_format` | Parámetros transmitidos al modelo cuando se utilizan; la ejecución de las herramientas sigue siendo responsabilidad de su aplicación. |

El procesamiento fuerza `stream: false`. Las conversaciones y sus resultados se asocian por su posición en los arrays; conserve esta correspondencia en su aplicación.

Fragmento ilustrativo de la respuesta de creación:

```json
{
  "id": "batch-instance-exemple-identifiant",
  "object": "batch",
  "status": "queued",
  "model": "gpt-oss:120b",
  "model_requested": "gpt-oss:120b",
  "request_counts": {
    "total": 2,
    "completed": 0,
    "failed": 0
  }
}
```

`model_requested` indica el nombre solicitado; `model` indica el modelo resuelto, que puede diferir en caso de alias. Reutilice el identificador `id` efectivamente devuelto por el servicio, sin reconstruirlo.

## Seguir el procesamiento y recuperar los resultados

### GET /v1/chat/completions/batch/\{id\}

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch/$BATCH_ID" \
  -H "Authorization: Bearer $LLMAAS_API_KEY"
```

| Estado | Significado |
|--------|---------------|
| `queued` | En espera de procesamiento o de reanudación en la siguiente ventana de procesamiento. |
| `in_progress` | Procesamiento en curso. |
| `completed` | Procesamiento finalizado; inspeccione cada resultado para detectar errores individuales. |
| `failed` | Fallo general; inspeccione `error` y los resultados eventualmente disponibles. |
| `expired` | Estado de expiración; después de la purga, GET devuelve HTTP 404. |

La tabla `results` se incluye para los estados `completed` y `failed`. Cada elemento es ya sea una respuesta de chat o un objeto `error`. No hay ningún archivo de salida para descargar.

Extracto ilustrativo con un éxito y un error:

```json
{
  "id": "batch-instance-exemple-identifiant",
  "object": "batch",
  "status": "completed",
  "request_counts": {
    "total": 2,
    "completed": 1,
    "failed": 1
  },
  "results": [
    {
      "choices": [
        {"message": {"role": "assistant", "content": "Réseau"}, "finish_reason": "stop"}
      ],
      "usage": {"prompt_tokens": 30, "completion_tokens": 4, "total_tokens": 34}
    },
    {
      "error": {
        "type": "BatchSubRequestError",
        "message": "Échec du traitement de la conversation.",
        "index": 1
      }
    }
  ]
}
```

**`completed` no significa que todas las conversaciones hayan tenido éxito.** Una vez procesado el lote, `results[i]` corresponde a la conversación `messages[i]`. Para reintentar los errores, construya un nuevo lote que contenga únicamente las conversaciones correspondientes.

## Ejemplo completo en Python

Instale `httpx`, defina `LLMAAS_API_KEY` en su entorno, luego guarde el script como `batch_demo.py` y ejecute `python batch_demo.py`.

```bash
pip install httpx
```

```python
import json
import os
import time

import httpx

BASE_URL = "https://api.ai.cloud-temple.com/v1"
MODEL = os.getenv("LLMAAS_MODEL", "gpt-oss:120b")


def wait_for_batch(client, batch_id):
    # Límite de espera de este script, no es un compromiso de plazo del servicio.
    deadline = time.monotonic() + 24 * 60 * 60
    while time.monotonic() < deadline:
        response = client.get(f"/chat/completions/batch/{batch_id}")
        response.raise_for_status()
        batch = response.json()
        print(f"Statut : {batch['status']}", flush=True)
        if batch["status"] in {"completed", "failed", "expired"}:
            return batch
        time.sleep(30)
    raise TimeoutError(
        f"Attente locale terminée. Reprenez le suivi par GET avec l'id {batch_id}. "
        "Le traitement du batch n'est pas annulé."
    )


def main():
    api_key = os.environ["LLMAAS_API_KEY"]
    tickets = [
        "Mon accès VPN ne fonctionne plus.",
        "Mon application se ferme au démarrage.",
    ]
    conversations = [
        [
            {"role": "system", "content": "Classe le ticket : Réseau, Logiciel ou Autre."},
            {"role": "user", "content": ticket},
        ]
        for ticket in tickets
    ]
    with httpx.Client(
        base_url=BASE_URL,
        headers={"Authorization": f"Bearer {api_key}"},
        timeout=60.0,
    ) as client:
        response = client.post(
            "/chat/completions/batch",
            json={
                "model": MODEL,
                "messages": conversations,
                "max_tokens": 200,
                "temperature": 0.0,
            },
        )
        response.raise_for_status()
        batch_id = response.json()["id"]
        print(f"Batch accepté. Conservez cet identifiant : {batch_id}", flush=True)
        batch = wait_for_batch(client, batch_id)

    # Guarde también los errores y los posibles resultados parciales.
    with open(f"{batch_id}.json", "w", encoding="utf-8") as output:
        json.dump(batch, output, ensure_ascii=False, indent=2)

    print(f"Statut final : {batch['status']}")
    if batch.get("error"):
        print(f"Erreur globale : {batch['error']}")
    for index, result in enumerate(batch.get("results", [])):
        if result.get("error"):
            print(f"Ticket {index + 1} en erreur : {result['error']}")
        else:
            print(f"Ticket {index + 1} : {result['choices'][0]['message']}")


if __name__ == "__main__":
    main()
```

Si el script se detiene después del envío, reanude el seguimiento con la solicitud GET y el identificador mostrado. No envíe automáticamente el mismo lote después de una pérdida de conexión: podría haber sido aceptado, lo que crearía un duplicado.

## Límites y retención

Los valores a continuación son los parámetros predeterminados del servicio; pueden ajustarse mediante configuración.

| Parámetro | Valor predeterminado |
|-----------|-------------------|
| Conversaciones por lote | 1 000 como máximo |
| Capacidad de la cola | 100 lotes por instancia de procesamiento; no es una cuota por cuenta |
| Ventana de procesamiento | 22 h–7 h entre semana, todo el día los fines de semana, según la zona horaria del servicio |
| Retención después del procesamiento | 24 h después de la finalización, seguida de purga automática |

Un lote puede permanecer en espera fuera de la ventana de procesamiento y suspenderse y reanudarse cuando finalice dicha ventana. **La retención de 24 h no constituye una garantía de procesamiento en menos de 24 h.**

El estado del lote (cola de espera, progreso y resultados consultables mediante GET) se conserva en memoria en la instancia de procesamiento, sin mecanismo de recuperación en disco. Un reinicio de esta instancia provoca la pérdida de este estado. Recupere y guarde sus resultados antes de que expiren. Conserve la clave que creó el lote hasta su recuperación.

Este contrato trata sobre conversaciones de chat. No ofrece carga de JSONL, procesamiento de embeddings en lotes, listado de lotes ni cancelación mediante API.

## Errores comunes

| Código HTTP | Causa o acción |
|-----------|-----------------|
| `400` | Solicitud incorrecta, conversaciones ausentes o mal estructuradas, tamaño máximo excedido. Corrija el cuerpo enviado. |
| `401` | Autenticación inválida. Verifique su clave API. |
| `403` | La clave utilizada para consultar el lote difiere de la que lo creó. |
| `404` | Identificador desconocido, lote expirado o estado perdido tras el reinicio. |
| `501` | Procesamiento Batch desactivado en la instancia correspondiente. Contacte al soporte. |
| `503` | Cola saturada o instancia de procesamiento no disponible. Inténtelo de nuevo más tarde según el mensaje devuelto. |

Los errores propios de una conversación se encuentran en `results[].error`, incluso si la solicitud GET devolvió HTTP 200.

## Precios y recursos

Los parámetros de generación se aplican a cada conversación. Para las tarifas Batch, consulte la [tabla de precios de la API](./api.md#rate-limiting-y-facturación).

- [API de generación de chat](./api.md#post-v1chatcompletions)
- [Elegir un modelo](./models.md)
- [Ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle)