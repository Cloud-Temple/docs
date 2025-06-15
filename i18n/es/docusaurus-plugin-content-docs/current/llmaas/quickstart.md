---
title: Guía de Inicio
sidebar_position: 3
---

# Guía de Inicio Rápido

Esta guía le permite realizar su primera solicitud a la API LLMaaS en menos de 5 minutos.

## Requisitos previos

- Acceso a la Consola Cloud Temple
- Cuenta con permisos LLMaaS activados

## Paso 1: Generar una clave API

1. Inicie sesión en la Consola Cloud Temple
2. Acceda a la configuración de su cuenta
3. Genere una nueva clave API LLMaaS
4. Copie y guarde la clave (solo se mostrará una vez)

## Paso 2: Probar la conexión

Verifique que su clave funcione listando los modelos disponibles:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VUESTRA_CLAVE_API"
```

Debería recibir una lista JSON de los modelos disponibles.

## Paso 3: Primera solicitud

Realice su primera generación de texto con un modelo rápido:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VUESTRA_CLAVE_API" \
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
API_KEY = "VUESTRA_CLAVE_API"
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
| `granite3.3:8b` | Uso general, equilibrado | Rápido | Recomendado para principiantes |
| `qwen3:14b` | Tareas complejas | Medio | Modo "pensando" visible |
| `gemma3:4b` | Pruebas rápidas, prototipado | Muy rápido | Respuestas detalladas |

Consulte el [catálogo completo de modelos](./models) para más opciones.

## Parámetros recomendados

Para comenzar, use estos parámetros:

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

## Avanzado: Ejemplos de Tool Calling y Visión

Esta sección proporciona ejemplos de scripts Python simples y autónomos para ilustrar funciones específicas de la API LLMaaS. Cada ejemplo está diseñado para ejecutarse directamente, con instrucciones claras para la configuración y el uso.

---

## 💡 Ejemplos de Código Autónomo

Esta sección proporciona ejemplos de scripts Python simples y autónomos para ilustrar funciones específicas de la API LLMaaS. Cada ejemplo está diseñado para ejecutarse directamente, con instrucciones claras para la configuración y el uso.

### 1. Ejemplo Simple de Tool Calling

El "Tool Calling" (o llamada de función) permite a un modelo de lenguaje solicitar la ejecución de una función que ha definido en su código. Es una función poderosa para conectar los LLMs con herramientas externas (API, bases de datos, etc.).

El flujo es el siguiente:
1. El usuario hace una pregunta que requiere una herramienta (ej: "¿qué tiempo hace?").
2. Envía la pregunta y la lista de herramientas disponibles a la API.
3. El modelo, en lugar de responder directamente, devuelve una solicitud `tool_calls` pidiendo ejecutar una función específica con ciertos argumentos.
4. Su código ejecuta la función solicitada.
5. Vuelve a enviar el resultado de la función al modelo.
6. El modelo utiliza este resultado para formular una respuesta final al usuario.

**Estructura de archivos**

Para este ejemplo, cree un directorio `simple_tool_calling` con los siguientes archivos:

- `test_tool_calling.py`: El script principal.
- `requirements.txt`: Las dependencias Python.
- `.env.example`: Un modelo para su archivo de configuración.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env.example`**
```env
# URL base de la API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Su clave API LLMaaS
API_KEY="su_clave_api_aqui"

# Opcional: Modelo predeterminado a utilizar para la prueba
# Asegúrese de que este modelo sea compatible con el "tool calling"
DEFAULT_MODEL="qwen3:30b-a3b"
```

**Código fuente (`test_tool_calling.py`)**

```python
# -*- coding: utf-8 -*-
"""
Ejemplo simple de Tool Calling con la API LLMaaS.

Este script muestra cómo definir una herramienta simple (una calculadora),
enviarla a un modelo compatible y interpretar la respuesta del modelo
para ejecutar la herramienta y devolver el resultado.
"""
import os
import json
import httpx
from dotenv import load_dotenv

# --- Configuración ---
# Cargar las variables de entorno desde un archivo .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Usar un modelo conocido para manejar bien el tool calling
MODEL = os.getenv("DEFAULT_MODEL", "qwen3:30b-a3b")

# --- Definición de la herramienta ---

def calculator(expression: str) -> str:
    """
    Evalúa una expresión matemática simple.
    Ejemplo: "2 + 2 * 10"
    """
    try:
        # Seguridad: no usar eval() directamente en producción sin validación estricta.
        # Para este ejemplo, limitamos los caracteres permitidos.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Error: La expresión contiene caracteres no permitidos."
        # eval() se usa aquí por simplicidad del ejemplo.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Error de cálculo: {str(e)}"

# Descripción de la herramienta en el formato esperado por la API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Evalúa una expresión matemática. Por ejemplo, '2+2*10'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "La expresión matemática a evaluar."
                    }
                },
                "required": ["expression"],
            },
        },
    }
]

# Mapeo entre el nombre de la herramienta y la función Python a llamar
TOOL_FUNCTIONS_MAP = {
    "calculator": calculator
}

# --- Lógica principal ---

def run_chat_with_tool_calling():
    """
    Función principal que ejecuta el escenario de prueba.
    """
    if not API_KEY:
        print("❌ Error: La variable de entorno API_KEY no está definida.")
        print("Por favor, cree un archivo .env o expórtela en su sesión.")
        return

    print(f"🤖 Modelo utilizado : {MODEL}")
    print("-" * 30)

    # 1. Primer llamado a la API con la pregunta del usuario
    # ---------------------------------------------------------
    print("➡️ Paso 1: Envío de la solicitud inicial al LLM...")

    # El historial de mensajes comienza con la pregunta del usuario
    messages = [
        {"role": "user", "content": "Hola, puedes calcular 15 + (3 * 5) ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # El modelo decide si debe usar una herramienta
    }

    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=60,
            )
            response.raise_for_status()
            response_data = response.json()

    except httpx.HTTPStatusError as e:
        print(f"❌ Error API (Estado HTTP) en el paso 1: {e}")
        print(f"Respuesta de la API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Error API (Solicitud) en el paso 1: {e}")
        return

    # El mensaje del asistente contiene la solicitud de llamada de herramienta
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Verificación y ejecución de la llamada de herramienta
    # ------------------------------------------------
    print("\n✅ El LLM ha solicitado usar una herramienta.")

    if "tool_calls" not in assistant_message:
```
print("🤔 El modelo no pidió usar una herramienta. Respuesta directa:")
        print(assistant_message.get("content", "Sin contenido."))
        return

    tool_call = assistant_message["tool_calls"][0]
    function_name = tool_call["function"]["name"]
    function_args_str = tool_call["function"]["arguments"]
    tool_call_id = tool_call["id"]

    print(f"   - Herramienta a llamar : {function_name}")
    print(f"   - Argumentos       : {function_args_str}")

    if function_name in TOOL_FUNCTIONS_MAP:
        function_to_call = TOOL_FUNCTIONS_MAP[function_name]
        try:
            # Los argumentos son una cadena JSON, hay que analizarlos
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Resultado de la herramienta : {tool_result}")
        except Exception as e:
            print(f"❌ Error al ejecutar la herramienta: {e}")
            tool_result = f"Error: {e}"
    else:
        print(f"❌ Herramienta desconocida : {function_name}")
        tool_result = f"Error: Herramienta '{function_name}' no encontrada."

    # 3. Segundo llamado a la API con el resultado de la herramienta
    # ----------------------------------------------------
    print("\n➡️ Paso 2: Envío del resultado de la herramienta al LLM...")

    # Añadimos el resultado de la herramienta al historial de mensajes
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # Hacemos un nuevo llamado SIN herramientas esta vez para obtener la respuesta final
    payload_final = {
        "model": MODEL,
        "messages": messages,
    }

    try:
        with httpx.Client() as client:
            response_final = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload_final,
                timeout=60,
            )
            response_final.raise_for_status()
            final_data = response_final.json()

    except (httpx.HTTPStatusError, httpx.RequestError) as e:
        print(f"❌ Error de API en el paso 2: {e}")
        return

    final_answer = final_data["choices"][0]["message"]["content"]
    print("\n✅ Respuesta final del LLM :")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_chat_with_tool_calling()
```

**Uso**

1.  **Instale las dependencias :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configure su clave API :**
    Copie `tests/llmaas/.env.example` a `tests/llmaas/.env` y reemplace `"su_clave_api_aqui"` con su clave API LLMaaS.
3.  **Ejecute el script :**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

### 2. Ejemplo Simple de Visión (Multimodal)

Los modelos multimodales pueden analizar tanto texto como imágenes. Este ejemplo muestra cómo enviar una imagen y una pregunta al modelo para obtener una descripción de lo que "ve".

**Estructura de archivos**

Cree un directorio `simple_vision` con los siguientes archivos :

-   `test_vision.py`: El script principal.
-   `requirements.txt`: Las dependencias (incluyendo `Pillow` para generar la imagen).
-   `.env.example`: El modelo de configuración.
-   `image_example.png`: La imagen a analizar (el script la generará para usted si falta).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env.example`**
```env
# URL base de la API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Su clave API LLMaaS
API_KEY="su_clave_api_aqui"

# Opcional: Modelo predeterminado a usar para la prueba
# Asegúrese de que este modelo sea multimodal (visión)
DEFAULT_MODEL="granite3.2-vision:2b"
```

**Código fuente (`test_vision.py`)**

```python
# -*- coding: utf-8 -*-
"""
Ejemplo simple de uso de la API de Visión de LLMaaS.

Este script muestra cómo enviar una imagen local con una pregunta
a un modelo de visión (multimodal) y mostrar su respuesta.
"""
import os
import base64
import httpx
from dotenv import load_dotenv

# --- Configuración ---
# Cargar las variables de entorno desde un archivo .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Usar un modelo de visión.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # La imagen debe estar en el mismo directorio

# --- Funciones ---

def encode_image_to_base64(image_path: str) -> str:
    """
    Codifica una imagen en base64 para incluirla en la solicitud API.
    """
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"❌ Error: El archivo de imagen '{image_path}' no se encontró.")
        return ""
    except Exception as e:
        print(f"❌ Error al codificar la imagen: {e}")
        return ""

def generate_example_image():
    """
    Genera una imagen simple para la prueba si no existe.
    Requiere la biblioteca Pillow (PIL).
    """
    try:
        from PIL import Image, ImageDraw
        if not os.path.exists(IMAGE_PATH):
            print(f"🖼️  La imagen '{IMAGE_PATH}' no existe, generando... ")
            # Crear una imagen simple: un cuadrado rojo sobre fondo blanco
            img = Image.new('RGB', (200, 200), color = 'white')
            draw = ImageDraw.Draw(img)
            draw.rectangle([50, 50, 150, 150], fill='red', outline='black')
            img.save(IMAGE_PATH)
            print("✅ Imagen de ejemplo generada.")
    except ImportError:
        print("⚠️  Advertencia: La biblioteca Pillow no está instalada.")
        print("   Por favor instale 'Pillow' (`pip install Pillow`) para generar la imagen de ejemplo,")
        print(f"   o coloque manualmente un archivo llamado '{IMAGE_PATH}' en este directorio.")
    except Exception as e:
        print(f"❌ Error al generar la imagen: {e}")


# --- Lógica principal ---

def run_vision_test():
    """
    Función principal que ejecuta el escenario de prueba de visión.
    """
    if not API_KEY:
        print("❌ Error: La variable de entorno API_KEY no está definida.")
        return

    # Generar la imagen de ejemplo si es necesario
    generate_example_image()

    # Codificar la imagen en base64
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modelo utilizado : {MODEL}")
    print(f"🖼️ Imagen enviada : {IMAGE_PATH}")
    print("-" * 30)

    # Construcción del payload en formato multimodal
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "¿Qué ves en esta imagen? Describe la forma y el color principal."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{base64_image}"
                        }
                    }
                ]
            }
        ],
        "max_tokens": 500 # Limitar la longitud de la descripción
    }

    print("➡️ Envío de la solicitud al LLM de visión...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # Los modelos de visión pueden tardar más
            )
            response.raise_for_status()
            response_data = response.json()

    except httpx.HTTPStatusError as e:
        print(f"❌ Error de API (Código de estado HTTP): {e}")
        print(f"Respuesta de la API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Error de API (Solicitud): {e}")
        return

    final_answer = response_data["choices"][0]["message"]["content"]
    print("\n✅ Respuesta del modelo :")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_vision_test()
```

**Uso**

1.  **Instale las dependencias :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configure su clave API :**
    Copie `tests/llmaas/.env.example` a `tests/llmaas/.env` y reemplace `"su_clave_api_aqui"` con su clave API LLMaaS.
3.  **Ejecute el script :**
    ```bash
    python tests/llmaas/test_vision.py
    ```
    El script generará automáticamente una imagen `image_example.png` si no existe.

---
## Próximos pasos

Una vez que su primer prueba sea exitosa :

1. **Explore los modelos** : Pruebe diferentes modelos según sus necesidades
2. **Optimice los prompts** : Mejore la calidad de las respuestas
3. **Intégrelo en su aplicación** : Consulte la [documentación API](./api)
4. **Casos de uso avanzados** : Vea los [tutoriales](./tutorials)

## Soporte

En caso de problema :
- Consulte la [documentación API completa](./api)
- Verifique el estado del servicio en la Consola
- Contacte al soporte a través de la Consola Cloud Temple