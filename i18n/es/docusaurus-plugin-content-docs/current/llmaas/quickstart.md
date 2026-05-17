---
title: Guía de Inicio
sidebar_position: 3
---

# Guía de Inicio Rápido

Esta guía le permite realizar su primera solicitud a la API LLMaaS en menos de 5 minutos.

## Requisitos

- Acceso a la Consola Cloud Temple
- Cuenta con permisos LLMaaS habilitados

## Paso 1: Generar una clave API

1. Inicie sesión en la Consola Cloud Temple
2. Acceda a la configuración de su cuenta
3. Genere una nueva clave API LLMaaS
4. Copie y guarde la clave (solo se mostrará una vez)

## Paso 2: Probar la conexión

Verifique que su clave funciona listando los modelos disponibles:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Debería recibir una lista JSON de los modelos disponibles.

## Paso 3: Primera solicitud

Realiza tu primera generación de texto con un modelo rápido:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_CLE_API" \
  -d '{
    "model": "gpt-oss:120b",
    "messages": [
      {
        "role": "user",
        "content": "Écris un haiku sur la technologie."
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
API_KEY = "VOTRE_CLE_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Encabezados
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Solicitud
payload = {
    "model": "gpt-oss:120b",
    "messages": [
        {
            "role": "user",
            "content": "Explique-moi la photosynthèse en 3 phrases."
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
    print(f"Erreur: {response.status_code}")
    print(response.text)
```

## Selección del modelo

Para su primera prueba, utilice uno de estos modelos recomendados :

| Modelo | Uso | Velocidad | Nota |
|--------|--------|---------|------|
| `gpt-oss:120b` | Uso general, equilibrado | Media | **LTS** — recomendado para producción |
| `qwen3-2507-think:4b` | Razonamiento complejo | Rápida | **LTS** — compacto con razonamiento profundo |
| `qwen3.5:9b` | Chat y análisis | Rápida | Buen equilibrio tamaño/calidad |

Consulte el [catálogo completo de modelos](./models) para más opciones. Prefiera los modelos marcados con **LTS** para sus aplicaciones en producción.

:::tip Consejo para los modelos Qwen con razonamiento
Algunos modelos de la familia **Qwen** (como `qwen3-2507-think:4b`, `qwen3.5:9b` o `qwen3.6:27b`) cuentan con un modo de razonamiento avanzado. Puede forzar su activación añadiendo `/think` al inicio de su prompt, o desactivarlo para una respuesta más directa y rápida con `/nothink`.
:::

## Parámetros recomendados

Para comenzar, utilice estos parámetros:

```json
{
  "temperature": 0.7,    // Créativité modérée
  "max_tokens": 200,     // Réponses concises
  "top_p": 1.0,         // Diversité standard
  "stream": false       // Réponse complète d'un coup
}
```

## Gestión de errores comunes

### Error 401 - No autorizado
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Solución** : Verifique su clave API en la Consola Cloud Temple.

### Error 400 - Modelo no encontrado
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Solución** : Utilice `/v1/models` para listar los modelos disponibles.

### Error 429 - Límite de tasa
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Solución** : Espere unos segundos y vuelva a intentarlo.

## Monitorización del uso

En la Consola Cloud Temple, puede:
- Ver sus solicitudes en tiempo real
- Consultar su consumo de tokens
- Configurar alertas de costo
- Analizar el rendimiento por modelo

## Ir más allá: Ejemplos de Tool Calling y Visión

Esta sección proporciona ejemplos de scripts Python simples y autónomos para ilustrar funcionalidades específicas de la API LLMaaS. Cada ejemplo está diseñado para ejecutarse directamente, con instrucciones claras para la configuración y el uso.

---

## 💡 Ejemplos de Código Independientes

Esta sección proporciona ejemplos de scripts Python simples e independientes para ilustrar funcionalidades específicas de la API LLMaaS. Cada ejemplo está diseñado para ejecutarse directamente, con instrucciones claras para la configuración y el uso.

### 1. Ejemplo Simple de Tool Calling

El "Tool Calling" (o llamada de función) permite a un modelo de lenguaje solicitar la ejecución de una función que has definido en tu código. Es una función potente para conectar los LLMs con herramientas externas (APIs, bases de datos, etc.).

El flujo es el siguiente:
1.  El usuario hace una pregunta que requiere una herramienta (ej: "¿qué tiempo hace?").
2.  Envías la pregunta y la lista de herramientas disponibles a la API.
3.  El modelo, en lugar de responder directamente, devuelve una solicitud `tool_calls` solicitando ejecutar una función específica con ciertos argumentos.
4.  Tu código ejecuta la función solicitada.
5.  Envías el resultado de la función al modelo.
6.  El modelo utiliza este resultado para formular una respuesta final al usuario.

**Estructura de los archivos**

Para este ejemplo, crea un directorio `simple_tool_calling` con los siguientes archivos:

-   `test_tool_calling.py`: El script principal.
-   `requirements.txt`: Las dependencias de Python.
-   `.env`: Un modelo para tu archivo de configuración.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est compatible avec le "tool calling"
DEFAULT_MODEL="gpt-oss:120b"
```

**Código Fuente (`test_tool_calling.py`)**

```python
# -*- coding: utf-8 -*-
"""
Exemple simple de Tool Calling avec l'API LLMaaS.

Ce script montre comment définir un outil simple (une calculatrice),
l'envoyer à un modèle compatible, et interpréter la réponse du modèle
pour exécuter l'outil et renvoyer le résultat.
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
# Utilizar un modelo conocido para gestionar bien el tool calling
MODEL = os.getenv("DEFAULT_MODEL", "gpt-oss:120b")

# --- Definición de la herramienta ---

def calculator(expression: str) -> str:
    """
    Évalue une expression mathématique simple.
    Exemple: "2 + 2 * 10"
    """
    try:
        # Seguridad: no usar eval() directamente en producción sin una validación estricta.
        # Para este ejemplo, limitamos los caracteres permitidos.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Erreur: L'expression contient des caractères non autorisés."
        # eval() se utiliza aquí por la simplicidad del ejemplo.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Erreur de calcul: {str(e)}"

# Descripción de la herramienta en el formato esperado por la API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Évalue une expression mathématique. Par exemple, '2+2*10'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "L'expression mathématique à évaluer."
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
    Fonction principale qui exécute le scénario de test.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        print("Veuillez créer un fichier .env ou l'exporter dans votre session.")
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print("-" * 30)

    # 1. Primera llamada a la API con la pregunta del usuario
    # ---------------------------------------------------------
    print("➡️ Étape 1: Envoi de la requête initiale au LLM...")

    # El historial de mensajes comienza con la pregunta del usuario
    messages = [
        {"role": "user", "content": "Bonjour, peux-tu calculer 15 + (3 * 5) ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # Le modèle décide s'il doit utiliser un outil
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
        print(f"❌ Erreur API (HTTP Status) lors de l'étape 1: {e}")
        print(f"Réponse de l'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Erreur API (Request) lors de l'étape 1: {e}")
        return

    # Le message de l'assistant contient la demande d'appel d'outil
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Verificación y ejecución de la llamada a la herramienta
    # ------------------------------------------------
    print("\n✅ Le LLM a demandé d'utiliser un outil.")

    if "tool_calls" not in assistant_message:
        print("🤔 Le modèle n'a pas demandé d'utiliser un outil. Réponse directe :")
        print(assistant_message.get("content", "Pas de contenu."))
        return

    tool_call = assistant_message["tool_calls"][0]
    function_name = tool_call["function"]["name"]
    function_args_str = tool_call["function"]["arguments"]
    tool_call_id = tool_call["id"]

    print(f"   - Outil à appeler : {function_name}")
    print(f"   - Arguments       : {function_args_str}")

    if function_name in TOOL_FUNCTIONS_MAP:
        function_to_call = TOOL_FUNCTIONS_MAP[function_name]
        try:
            # Les arguments sont une chaîne JSON, il faut les parser
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Résultat de l'outil : {tool_result}")
        except Exception as e:
            print(f"❌ Erreur lors de l'exécution de l'outil: {e}")
            tool_result = f"Erreur: {e}"
    else:
        print(f"❌ Outil inconnu : {function_name}")
        tool_result = f"Erreur: Outil '{function_name}' non trouvé."

    # 3. Segunda llamada a la API con el resultado de la herramienta
    # ----------------------------------------------------
    print("\n➡️ Étape 2: Envoi du résultat de l'outil au LLM...")

    # Se añade el resultado de la herramienta al historial de mensajes
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # Se realiza una nueva llamada SIN las herramientas esta vez para obtener la respuesta final
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
        print(f"❌ Erreur API lors de l'étape 2: {e}")
        return

    final_answer = final_data["choices"][0]["message"]["content"]
    print("\n✅ Réponse finale du LLM :")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_chat_with_tool_calling()
```

**Uso**

1.  **Instala las dependencias :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configura tu clave API :**
    Copia `tests/llmaas/.env.example` a `tests/llmaas/.env` y reemplaza `"votre_cle_api_ici"` por tu clave API LLMaaS.
3.  **Ejecuta el script :**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

### 2. Ejemplo Simple de Visión (Multimodal)

Los modelos multimodales pueden analizar tanto texto como imágenes. Este ejemplo muestra cómo enviar una imagen y una pregunta al modelo para obtener una descripción de lo que "ve".

**Estructura de los archivos**

Cree un directorio `simple_vision` con los siguientes archivos :

-   `test_vision.py`: El script principal.
-   `requirements.txt`: Las dependencias (incluye `Pillow` para generar la imagen).
-   `.env.example`: El archivo de configuración de ejemplo.
-   `image_example.png`: La imagen a analizar (el script la generará para usted si falta).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env.example`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est multimodal (vision)
DEFAULT_MODEL="granite3.2-vision:2b"
```

**Código Fuente (`test_vision.py`)**

```python
# -*- coding: utf-8 -*-
"""
Exemple simple d'utilisation de l'API Vision de LLMaaS.

Ce script montre comment envoyer une image locale avec une question
à un modèle de vision (multimodal) et afficher sa réponse.
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
# Utilizar un modelo de visión.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # La imagen debe estar en el mismo directorio

# --- Funciones ---

def encode_image_to_base64(image_path: str) -> str:
    """
    Encode une image en base64 pour l'inclure dans la requête API.
    """
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"❌ Erreur: Le fichier image '{image_path}' n'a pas été trouvé.")
        return ""
    except Exception as e:
        print(f"❌ Erreur lors de l'encodage de l'image: {e}")
        return ""

def generate_example_image():
    """
    Génère une image simple pour le test si elle n'existe pas.
    Nécessite la bibliothèque Pillow (PIL).
    """
    try:
        from PIL import Image, ImageDraw
        if not os.path.exists(IMAGE_PATH):
            print(f"🖼️  L'image '{IMAGE_PATH}' n'existe pas, génération en cours...")
            # Crea una imagen simple: un cuadrado rojo sobre fondo blanco
            img = Image.new('RGB', (200, 200), color = 'white')
            draw = ImageDraw.Draw(img)
            draw.rectangle([50, 50, 150, 150], fill='red', outline='black')
            img.save(IMAGE_PATH)
            print("✅ Image d'exemple générée.")
    except ImportError:
        print("⚠️  Avertissement: La bibliothèque Pillow n'est pas installée.")
        print("   Veuillez installer 'Pillow' (`pip install Pillow`) pour générer l'image d'exemple,")
        print(f"   ou placez manuellement un fichier nommé '{IMAGE_PATH}' dans ce répertoire.")
    except Exception as e:
        print(f"❌ Erreur lors de la génération de l'image: {e}")


# --- Lógica principal ---

def run_vision_test():
    """
    Fonction principale qui exécute le scénario de test de vision.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        return

    # Generar la imagen de ejemplo si es necesario
    generate_example_image()

    # Codificar la imagen en base64
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print(f"🖼️ Image envoyée : {IMAGE_PATH}")
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
                        "text": "Que vois-tu sur cette image ? Décris la forme et la couleur principale."
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

    print("➡️ Envoi de la requête au LLM de vision...")
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
        print(f"❌ Erreur API (HTTP Status): {e}")
        print(f"Réponse de l'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Erreur API (Request): {e}")
        return

    final_answer = response_data["choices"][0]["message"]["content"]
    print("\n✅ Réponse du modèle :")
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
    Copie `tests/llmaas/.env.example` a `tests/llmaas/.env` y reemplaza `"votre_cle_api_ici"` por tu clave API de LLMaaS.
3.  **Ejecuta el script :**
    ```bash
    python tests/llmaas/test_vision.py
    ```
    El script generará automáticamente una imagen `image_example.png` si no existe.

---

## Próximos pasos

Una vez completada con éxito su primera prueba:

1. **Explore los modelos** : Pruebe diferentes modelos según sus necesidades
2. **Optimice los prompts** : Mejore la calidad de las respuestas
3. **Integre en su aplicación** : Consulte la [documentación API](./api)
4. **Casos de uso avanzados** : Consulte los [tutoriales](./tutorials)

## Soporte

En caso de problema:
- Consulte la [documentación API completa](./api)
- Verifique el estado del servicio en la Consola
- Contacte al soporte a través de la Consola Cloud Temple