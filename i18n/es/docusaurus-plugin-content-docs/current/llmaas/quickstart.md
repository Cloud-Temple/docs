---
title: Guía de Inicio
sidebar_position: 3
---

# Guía de Inicio Rápida

Este guía le permite realizar su primera solicitud a la API LLMaaS en menos de 5 minutos.

## Requisitos previos

- Acceso a la Consola Cloud Temple
- Cuenta con permisos LLMaaS activados

## Paso 1: Generar una clave API

1. Inicie sesión en la Consola Cloud Temple
2. Acceda a los ajustes de su cuenta
3. Genere una nueva clave API LLMaaS
4. Copie y guarde la clave (solo se mostrará una vez)

## Paso 2: Probar la conexión

Verifique que su clave funcione listando los modelos disponibles:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer SU_CLAVE_API"
```

Debería recibir una lista JSON de los modelos disponibles.

## Paso 3: Primera solicitud

Realice su primera generación de texto con un modelo rápido:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SU_CLAVE_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Escribe un haiku sobre la tecnología."
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

## Paso 4: Probar con Python

Instale la biblioteca requests y pruebe con código Python:

```bash
pip install requests
```

```python
import requests
import json

# Configuración
API_KEY = "SU_CLAVE_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Encabezados
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Solicitud
payload = {
    "model": "granite3.3:8b",
    "messages": [
        {
            "role": "user",
            "content": "Explica la fotosíntesis en 3 frases."
        }
    ],
    "max_tokens": 150,
    "temperature": 0.7
}

response = requests.post(
    f"{BASE_URL}/chat/completions",
    headers=headers,
    json=payload
)

if response.status_code == 200:
    result = response.json()
    print(result["choices"][0]["message"]["content"])
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

## Selección del modelo

Para su primer prueba, use uno de estos modelos recomendados:

| Modelo | Uso | Velocidad | Nota |
|--------|--------|---------|------|
| `granite3.3:8b` | Uso general, equilibrado | Rápido | Recomendado para empezar |
| `qwen3:14b` | Tareas complejas | Medio | Modo "pensando" visible |
| `gemma3:4b` | Pruebas rápidas, prototipado | Muy rápido | Respuestas detalladas |

Consulte el [catálogo completo de modelos](./models) para más opciones.

## Parámetros recomendados

Para empezar, use estos parámetros:

```json
{
  "temperature": 0.7,    // Creatividad moderada
  "max_tokens": 200,     // Respuestas concisas
  "top_p": 1.0,         // Diversidad estándar
  "stream": false       // Respuesta completa de una vez
}
```

## Gestión de errores comunes

### Error 401 - No autorizado
```json
{"error": {"message": "Clave API inválida", "type": "invalid_request_error"}}
```
**Solución**: Verifique su clave API en la Consola Cloud Temple.

### Error 400 - Modelo no encontrado
```json
{"error": {"message": "Modelo no encontrado", "type": "invalid_request_error"}}
```
**Solución**: Use `/v1/models` para listar los modelos disponibles.

### Error 429 - Límite de velocidad
```json
{"error": {"message": "Límite de velocidad excedido", "type": "rate_limit_error"}}
```
**Solución**: Espere unos segundos y pruebe nuevamente.

## Monitoreo del uso

En la Consola Cloud Temple, puede:
- Ver sus solicitudes en tiempo real
- Consultar su consumo de tokens
- Configurar alertas de costo
- Analizar el rendimiento por modelo

## Siguientes pasos

Una vez que haya realizado su primer prueba:

1. **Explore los modelos**: Pruebe diferentes modelos según sus necesidades
2. **Optimice los prompts**: Mejore la calidad de las respuestas
3. **Integre en su aplicación**: Consulte la [documentación API](./api)
4. **Casos de uso avanzados**: Vea los [tutoriales](./tutorials)

## Soporte

En caso de problema:
- Consulte la [documentación completa de la API](./api)
- Verifique el estado del servicio en la Consola
- Póngase en contacto con el soporte a través de la Consola Cloud Temple