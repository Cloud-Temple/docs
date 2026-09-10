---
title: Guía de Inicio
sidebar_position: 3
---

# Guía de Inicio Rápido

Esta guía le permite realizar su primera solicitud a la API LLMaaS en menos de 5 minutos.

## Prerrequisitos

- Acceso a la Consola Cloud Temple
- Cuenta con permisos LLMaaS habilitados

## Paso 1: Generar una clave API

1. Inicie sesión en la Consola Cloud Temple
2. Abra **LLMaaS** > **Claves API**
3. Haga clic en **Crear una clave API**
4. Copie y guarde la clave (solo se mostrará una vez)

## Paso 2: Probar la conexión

Verifique que su clave funcione listando los modelos disponibles:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Debería recibir una lista JSON de los modelos disponibles.

## Paso 3: Primera solicitud

Realice su primera generación de texto con un modelo rápido:

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

## Elección del modelo

Los ejemplos utilizan `gpt-oss:120b`. Antes de su ejecución, verifique que este identificador figure en `/v1/models` y consulte su [cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle).

Para su aplicación, elija según las capacidades necesarias, la calidad con sus datos y el horizonte de soporte. La [guide du catalogue](./models.md) detalla estos criterios. Los ejemplos de visión requieren un modelo multimodal y los de llamada de herramientas un modelo que admita el *tool calling*.

Los ajustes de razonamiento dependen del modelo. No asuma que una instrucción de texto active o desactive este modo para todos los modelos de una misma familia.

## Parámetros recomendados

Para comenzar, utilice estos parámetros :

```json
{
  "temperature": 0.7,
  "max_tokens": 200,
  "top_p": 1.0,
  "stream": false
}
```

Estos parámetros ajustan la temperatura a 0,7, limitan la salida a 200 tokens, mantienen `top_p` en 1 y desactivan el streaming para recibir la respuesta completa.

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

### Error 429 - Límite de velocidad
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Solución** : Espere unos segundos e inténtelo de nuevo.

## Monitoreo del uso

En la Consola Cloud Temple, puede:
- Ver sus solicitudes en tiempo real
- Consultar su consumo de tokens
- Configurar alertas de costos
- Analizar el rendimiento por modelo

## Ir más allá: Ejemplos de Tool Calling y Visión

Esta sección proporciona ejemplos de scripts de Python simples y autónomos para ilustrar funcionalidades específicas de la API LLMaaS. Cada ejemplo está diseñado para ejecutarse directamente, con instrucciones claras para la configuración y el uso.

---

## 💡 Ejemplos de Código Autónomos

Esta sección proporciona ejemplos de scripts de Python simples y autónomos para ilustrar funcionalidades específicas de la API LLMaaS. Cada ejemplo está diseñado para ejecutarse directamente, con instrucciones claras para la configuración y el uso.

### 1. Ejemplo Simple de Tool Calling

El "Tool Calling" (o llamada a función) permite que un modelo de lenguaje solicite la ejecución de una función que hayas definido en tu código. Es una funcionalidad potente para conectar los LLMs con herramientas externas (APIs, bases de datos, etc.).

El flujo es el siguiente:
1.  El usuario hace una pregunta que requiere una herramienta (ej: "¿qué tiempo hace?").
2.  Envías la pregunta y la lista de herramientas disponibles a la API.
3.  El modelo, en lugar de responder directamente, devuelve una solicitud `tool_calls` pidiendo ejecutar una función específica con ciertos argumentos.
4.  Tu código ejecuta la función solicitada.
5.  Devuelves el resultado de la función al modelo.
6.  El modelo utiliza este resultado para formular una respuesta final al usuario.

**Estructura de los archivos**

Para este ejemplo, crea un directorio `simple_tool_calling` con los siguientes archivos:

-   `test_tool_calling.py`: El script principal.
-   `requirements.txt`: Las dependencias de Python.
-   `.env`: El archivo de configuración que debes completar con tu clave API.

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
    """Calcule une opération entre deux nombres, par exemple : 15 + 20."""
    import math
    import operator

    operations = {
        "+": operator.add,
        "-": operator.sub,
        "*": operator.mul,
        "/": operator.truediv,
    }
    try:
        if len(expression) > 100:
            raise ValueError("Entrée trop longue.")
        left, symbol, right = expression.split()
        if symbol not in operations:
            raise ValueError("Opérateur autorisé : +, -, * ou /.")
        left, right = float(left), float(right)
        if not (math.isfinite(left) and math.isfinite(right)):
            raise ValueError("Les nombres doivent être finis.")
        result = operations[symbol](left, right)
        if not math.isfinite(result):
            raise ValueError("Résultat hors limites.")
        return str(result)
    except (ValueError, OverflowError, ZeroDivisionError) as e:
        return f"Erreur de calcul: {e}"

# Descripción de la herramienta en el formato esperado por la API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Effectue une seule opération entre deux nombres. Opérateurs autorisés : +, -, *, /. Exemple : 15 + 20.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Deux nombres et un opérateur séparés par des espaces, par exemple : 15 + 20."
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
        {"role": "user", "content": "Bonjour, peux-tu calculer 15 + 20 ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # El modelo decide si debe utilizar una herramienta
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

    # El mensaje del asistente contiene la solicitud de llamada de herramienta
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Verificación y ejecución de la llamada de herramienta
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
            # Los argumentos son una cadena JSON, hay que analizarlos
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

    # Se realiza otra llamada SIN las herramientas esta vez para obtener la respuesta final
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

1.  **Desde el directorio padre, abre el directorio creado e instala las dependencias:**
    ```bash
    cd simple_tool_calling
    python -m pip install -r requirements.txt
    ```
2.  **Configura tu clave API:**
    En el archivo `.env` presentado anteriormente, reemplaza `"votre_cle_api_ici"` por tu clave API LLMaaS. Verifica también que `DEFAULT_MODEL` apunte a un modelo disponible con las capacidades requeridas.
3.  **Desde este mismo directorio, ejecuta el script:**
    ```bash
    python test_tool_calling.py
    ```

### 2. Ejemplo Simple de Visión (Multimodal)

Los modelos multimodales pueden analizar tanto texto como imágenes. Este ejemplo muestra cómo enviar una imagen y una pregunta al modelo para obtener una descripción de lo que "ve".

**Estructura de archivos**

Cree un directorio `simple_vision` con los siguientes archivos:

-   `test_vision.py`: El script principal.
-   `requirements.txt`: Las dependencias (incluyendo `Pillow` para generar la imagen).
-   `.env`: El archivo de configuración que debe completarse con su clave API.
-   `image_example.png`: La imagen a analizar (el script la generará por usted si falta).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env`**
```env
# URL base de la API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Su clave API LLMaaS
API_KEY="votre_cle_api_ici"

# Opcional: Modelo predeterminado para usar en la prueba
# Asegúrese de que este modelo sea multimodal (visión)
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
                timeout=120, # Los modelos de visión pueden ser más lentos
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

1.  **Desde el directorio principal, abra el directorio creado e instale las dependencias:**
    ```bash
    cd simple_vision
    python -m pip install -r requirements.txt
    ```
2.  **Configure su clave API:**
    En el archivo `.env` presentado anteriormente, reemplace `"votre_cle_api_ici"` por su clave API LLMaaS. Verifique también que `DEFAULT_MODEL` designe un modelo disponible con las capacidades requeridas.
3.  **Desde este mismo directorio, ejecute el script:**
    ```bash
    python test_vision.py
    ```
    El script generará automáticamente una imagen `image_example.png` si no existe.

---

## Próximos pasos

Una vez completado su primer test con éxito:

1. **Explore los modelos**: Pruebe diferentes modelos según sus necesidades
2. **Optimice los prompts**: Mejore la calidad de las respuestas
3. **Intégrelo en su aplicación**: Consulte la [documentación de la API](./api)
4. **Casos de uso avanzados**: Consulte los [tutoriales](./tutorials)

## Soporte

En caso de problema:
- Consulte la [documentación completa de la API](./api)
- Verifique el estado del servicio en la Consola
- Contacte al soporte a través de la Consola Cloud Temple