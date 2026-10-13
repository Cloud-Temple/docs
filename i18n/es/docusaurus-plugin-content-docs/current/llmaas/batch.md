---
title: Batch API
sidebar_position: 6
---

# Batch API — Procesamiento Asíncrono

La Batch API procesa varias conversaciones independientes con el mismo modelo de forma asíncrona. Es adecuada para tareas diferidas de clasificación, síntesis o extracción de texto.

Envía las conversaciones directamente en JSON a `POST /v1/chat/completions/batch`, y luego recupera su estado y resultados con `GET /v1/chat/completions/batch/{id}`. Este contrato es específico de LLMaaS: no se basa en los endpoints de archivos y lotes del SDK de OpenAI.

## Funcionamiento

1. Prepara un array de conversaciones con un modelo y parámetros comunes.
2. Envía el lote: la API devuelve **HTTP 202**, un identificador `id` y el estado `queued`.
3. Guarda este identificador y consulta el estado cada 30 a 60 segundos.
4. Recupera el array `results` cuando el procesamiento haya terminado, y guarda los resultados en tu aplicación.

Utiliza la **misma clave API** para enviar y consultar el lote. Otra clave, incluso si está asociada a la misma cuenta, no permite recuperar sus resultados.

## Enviar un lote

### POST /v1/chat/completions/batch

El campo `messages` es un **array de arrays**: cada sub-array contiene los mensajes de una conversación independiente. Los demás parámetros son comunes a todas las conversaciones.

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

Verifica el identificador del modelo con `GET /v1/models` y su [ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) antes de ejecutar.

| Campo | Descripción |
|-------|-------------|
| `model` | Identificador del modelo utilizado para todas las conversaciones. |
| `messages` | Array no vacío de conversaciones, cada una representada por un array de mensajes. |
| `max_tokens`, `temperature`, `top_p`, etc. | Parámetros aplicados a cada conversación, según las capacidades del modelo. |
| `tools`, `tool_choice`, `response_format` | Parámetros transmitidos al modelo cuando se utilizan; la ejecución de herramientas sigue siendo responsabilidad de tu aplicación. |

El procesamiento fuerza `stream: false`. Las conversaciones y sus resultados se asocian por su posición en los arrays; conserva esta correspondencia en tu aplicación.

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

`model_requested` indica el nombre solicitado; `model` indica el modelo resuelto, que puede diferir en caso de alias. Reutiliza el identificador `id` efectivamente devuelto por el servicio, sin reconstruirlo.

## Seguir el procesamiento y recuperar los resultados

### GET /v1/chat/completions/batch/\{id\}

```bash
curl "https://api.ai.cloud-temple.com/v1/chat/completions/batch/$BATCH_ID" \
  -H "Authorization: Bearer $LLMAAS_API_KEY"
```

| Estado | Significado |
|--------|---------------|
| `queued` | En espera de procesamiento o reanudación en la próxima ventana de procesamiento. |
| `in_progress` | Procesamiento en curso. |
| `completed` | Procesamiento terminado; inspecciona cada resultado para detectar errores individuales. |
| `failed` | Fallo global; inspecciona `error` y los resultados eventualmente disponibles. |
| `expired` | Estado de expiración; tras la purga, el GET devuelve HTTP 404. |

El array `results` se adjunta para los estados `completed` y `failed`. Cada elemento es o bien una respuesta de chat, o bien un objeto `error`. No hay archivo de salida para descargar.

Fragmento ilustrativo con un éxito y un error:

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

**`completed` no significa que todas las conversaciones hayan tenido éxito.** Una vez procesado el lote, `results[i]` corresponde a la conversación `messages[i]`. Para reanudar los errores, construye un nuevo lote que contenga únicamente las conversaciones afectadas.

## Ejemplo completo en Python

Instala `httpx`, define `LLMAAS_API_KEY` en tu entorno, y guarda el script como `batch_demo.py` ejecutando `python batch_demo.py`.

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
    # Limite d'attente de ce script, pas un engagement de délai du service.
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

    # Sauvegarder aussi les erreurs et les éventuels résultats partiels.
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

Si el script se detiene después del envío, reanuda el seguimiento con el GET y el identificador mostrado. No envíes automáticamente el mismo lote tras una pérdida de conexión: puede haber sido aceptado, lo que crearía un duplicado.

## Límites y retención

Los valores siguientes son los parámetros por defecto del servicio; pueden ajustarse por configuración.

| Parámetro | Valor por defecto |
|-----------|-------------------|
| Conversaciones por lote | 1 000 máximo |
| Capacidad de la cola | 100 lotes por instancia de procesamiento; no es un cupo por cuenta |
| Ventana de procesamiento | 22 h–7 h entre semana, todo el día el fin de semana, según la zona horaria del servicio |
| Retención tras el procesamiento | 24 h tras la finalización, luego purga automática |

Un lote puede permanecer en espera fuera de la ventana de procesamiento y ser suspendido y luego reanudado si esta ventana termina. **La retención de 24 h no constituye una garantía de procesamiento en 24 h.**

El estado del lote (cola, progreso y resultados consultables por GET) se conserva en memoria en la instancia de procesamiento, sin mecanismo de recuperación en disco. Un reinicio de esta instancia provoca la pérdida de este estado. Recupera y guarda tus resultados antes de su expiración. Conserva la clave que creó el lote hasta su recuperación.

Este contrato trata de conversaciones de chat. No ofrece subida JSONL, procesamiento de embeddings en lote, lista de lotes o cancelación vía API.

## Errores comunes

| Código HTTP | Causa o acción |
|-----------|-----------------|
| `400` | Solicitud incorrecta, conversaciones ausentes o mal estructuradas, tamaño máximo superado. Corrige el cuerpo enviado. |
| `401` | Autenticación inválida. Verifica tu clave API. |
| `403` | La clave utilizada para consultar el lote difiere de la que lo creó. |
| `404` | Identificador desconocido, lote expirado o estado perdido tras reinicio. |
| `501` | Procesamiento Batch desactivado en la instancia concernida. Contacta con soporte. |
| `503` | Cola saturada o instancia de procesamiento no disponible. Reintenta más tarde según el mensaje devuelto. |

Los errores propios de una conversación se encuentran en `results[].error`, incluso si el GET devolvió HTTP 200.

## Tarifas y recursos

Los parámetros de generación se aplican a cada conversación. Para las tarifas Batch, consulta el [catálogo tarifario oficial Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/).

- [API de generación de chat](./api.md#post-v1chatcompletions)
- [Elegir un modelo](./models.md)
- [Ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle)
