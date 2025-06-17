### 400 Error - Model Not Found
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Solution** : Use /v1/models to list available models.

# --- Configuration ---

## Support

In case of issues:
- Consult the [complete API documentation](./api)
- Check the service status in the Console
- Contact support via the Cloud Temple Console

# Headers
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

### 2. Simple Vision Example (Multimodal)

Multimodal models can analyze both text and images. This example shows how to send an image and a question to the model to get a description of what it "sees".

**File Structure**

Create a directory `simple_vision` with the following files:

-   `test_vision.py`: The main script.
-   `requirements.txt`: Dependencies (including `Pillow` to generate the image).
-   `.env.example`: The configuration template.
-   `image_example.png`: The image to analyze (the script will generate it for you if it's missing).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env.example`**
```env
```

# Use a known model to properly handle tool calling
MODEL = os.getenv("DEFAULT_MODEL", "qwen3:30b-a3b")

### 429 Error - Rate Limit
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Solution** : Wait a few seconds and try again.

# Your LLMaaS API Key
API_KEY="your_api_key_here"

## Prerequisites

- Access to the Cloud Temple Console
- Account with LLMaaS permissions enabled

# Load environment variables from a .env file
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")

# Optional: Default model to use for the test

## Usage Monitoring

In the Cloud Temple Console, you can:
- View your real-time requests
- Check your token consumption
- Set up cost alerts
- Analyze performance by model

# --- Tool Definition ---

def calculator(expression: str) -> str:
    """
    Evaluates a simple mathematical expression.
    Example: "2 + 2 * 10"
    """
    try:
        # Security: do not use eval() directly in production without strict validation.
        # For this example, we limit the allowed characters.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Error: The expression contains unauthorized characters."
        # eval() is used here for the simplicity of the example.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Calculation error: {str(e)}"

## Model Selection

For your first test, use one of these recommended models:

| Model | Usage | Speed | Note |
|--------|--------|---------|------|
| `granite3.3:8b` | General purpose, balanced | Fast | Recommended for beginners |
| `qwen3:14b` | Complex tasks | Medium | Visible "thinking" mode |
| `gemma3:4b` | Rapid tests, prototyping | Very fast | Detailed answers |

Check the [complete model catalog](./models) for more options.

## Step 2: Test the connection

Check that your key works by listing the available models:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

You should receive a JSON list of available models.

# Quick Start Guide

This guide allows you to make your first request to the LLMaaS API in less than 5 minutes.

# Request
payload = {
    "model": "granite3.3:8b",
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
    print(f"Error: {response.status_code}")
    print(response.text)
```

# Your LLMaaS API Key
API_KEY="your_api_key_here"

# Description of the tool in the format expected by the API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Evaluates a mathematical expression. For example, '2+2*10'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "The mathematical expression to evaluate."
                    }
                },
                "required": ["expression"],
            },
        },
    }
]

# Ensure that this model is compatible with "tool calling"
DEFAULT_MODEL="qwen3:30b-a3b"
```

**Source Code (`test_tool_calling.py`)**

```python
```

## Going Further: Examples of Tool Calling and Vision

This section provides simple and standalone Python scripts to illustrate specific features of the LLMaaS API. Each example is designed to be run directly, with clear instructions for configuration and use.

---

## Recommended Parameters

For starters, use these parameters:

```json
{
  "temperature": 0.7,    // Moderate creativity
  "max_tokens": 200,     // Concise answers
  "top_p": 1.0,         // Standard diversity
  "stream": false       // Full response at once
}
```

# Base URL of the LLMaaS API
API_URL="https://api.ai.cloud-temple.com/v1"

## Step 3: First Request

Make your first text generation with a fast model:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Write a haiku about technology."
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

# Optional: Default model to use for the test

# Use a vision model.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # L'image doit être dans le même répertoire

---
title: Getting Started Guide
sidebar_position: 3
---

# --- Functions ---

def encode_image_to_base64(image_path: str) -> str:
    """
    Encode an image in base64 to include in the API request.
    """
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"❌ Error: The image file '{image_path}' was not found.")
        return ""
    except Exception as e:
        print(f"❌ Error during image encoding: {e}")
        return ""

def generate_example_image():
    """
    Generates a simple image for testing if it doesn't exist.
    Requires the Pillow (PIL) library.
    """
    try:
        from PIL import Image, ImageDraw
        if not os.path.exists(IMAGE_PATH):
            print(f"🖼️  The image '{IMAGE_PATH}' does not exist, generating...")
            # Create a simple image: a red square on a white background
            img = Image.new('RGB', (200, 200), color = 'white')
            draw = ImageDraw.Draw(img)
            draw.rectangle([50, 50, 150, 150], fill='red', outline='black')
            img.save(IMAGE_PATH)
            print("✅ Example image generated.")
    except ImportError:
        print("⚠️  Warning: The Pillow library is not installed.")
        print("   Please install 'Pillow' (`pip install Pillow`) to generate the example image,")
        print(f"   or manually place a file named '{IMAGE_PATH}' in this directory.")
    except Exception as e:
        print(f"❌ Error during image generation: {e}")

# Mapping between the tool name and the Python function to call
TOOL_FUNCTIONS_MAP = {
    "calculator": calculator
}

## Common Error Handling

## 💡 Self-Contained Code Examples

This section provides simple and self-contained Python scripts to illustrate specific features of the LLMaaS API. Each example is designed to be run directly, with clear instructions for configuration and use.

# Make sure this model is multimodal (vision)
DEFAULT_MODEL="granite3.2-vision:2b"
```

**Source Code (`test_vision.py`)**

```python
```

## Step 4: Test with Python

Install the requests library and test with Python code:

```bash
pip install requests
```

```python
import requests
import json

```

# --- Configuration ---

# -*- coding: utf-8 -*-
"""
Simple example of Tool Calling with the LLMaaS API.

This script shows how to define a simple tool (une calculatrice), send it to a compatible model, and interpret the model's response to execute the tool and return the result.
"""
import os
import json
import httpx
from dotenv import load_dotenv

# --- Main logic ---

def run_vision_test():
    """
    Main function that runs the vision test scenario.
    """
    if not API_KEY:
        print("❌ Error: The environment variable API_KEY is not set.")
        return

    # Generate example image if needed
    generate_example_image()

    # Encode image to base64
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Used model : {MODEL}")
    print(f"🖼️ Image sent : {IMAGE_PATH}")
    print("-" * 30)

    # Build multimodal payload
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "What do you see in this image? Describe the main shape and color."
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
        "max_tokens": 500 # Limit description length
    }

    print("➡️ Sending request to the vision LLM...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # Vision models can be slower
            )
            response.raise_for_status()
            response_data = response.json()

    except httpx.HTTPStatusError as e:
        print(f"❌ API Error (HTTP Status): {e}")
        print(f"API response: {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ API Error (Request): {e}")
        return

    final_answer = response_data["choices"][0]["message"]["content"]
    print("\n✅ Model response:")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_vision_test()
```

**Usage**

1.  **Install dependencies:**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configure your API key:**
    Copy `tests/llmaas/.env.example` to `tests/llmaas/.env` and replace `"your_api_key_here"` with your LLMaaS API key.
3.  **Run the script:**
    ```bash
    python tests/llmaas/test_vision.py
    ```
    The script will automatically generate an image `image_example.png` if it doesn't exist.

---

# --- Main logic ---

def run_chat_with_tool_calling():
    """
    Main function that runs the test scenario.
    """
    if not API_KEY:
        print("❌ Error: The environment variable API_KEY is not set.")
        print("Please create a .env file or export it in your session.")
        return

    print(f"🤖 Model used : {MODEL}")
    print("-" * 30)

    # 1. First API call with the user's question
    # ---------------------------------------------------------
    print("➡️ Step 1: Sending the initial request to the LLM...")

    # The message history starts with the user's question
    messages = [
        {"role": "user", "content": "Hello, can you calculate 15 + (3 * 5) ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # The model decides whether to use a tool
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
        print(f"❌ API Error (HTTP Status) during step 1: {e}")
        print(f"API response: {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ API Error (Request) during step 1: {e}")
        return

    # The assistant's message contains the tool call request
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Check and execute the tool call
    # ------------------------------------------------
    print("\n✅ The LLM requested to use a tool.")

    if "tool_calls" not in assistant_message:
        print("🤔 The model did not request to use a tool. Direct response:")
        print(assistant_message.get("content", "No content."))
        return

    tool_call = assistant_message["tool_calls"][0]
    function_name = tool_call["function"]["name"]
    function_args_str = tool_call["function"]["arguments"]
    tool_call_id = tool_call["id"]

    print(f"   - Tool to call : {function_name}")
    print(f"   - Arguments       : {function_args_str}")

    if function_name in TOOL_FUNCTIONS_MAP:
        function_to_call = TOOL_FUNCTIONS_MAP[function_name]
        try:
            # The arguments are a JSON string, need to parse them
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Tool result : {tool_result}")
        except Exception as e:
            print(f"❌ Error during tool execution: {e}")
            tool_result = f"Error: {e}"
    else:
        print(f"❌ Unknown tool : {function_name}")
        tool_result = f"Error: Tool '{function_name}' not found."

    # 3. Second API call with the tool result
    # ----------------------------------------------------
    print("\n➡️ Step 2: Sending the tool result to the LLM...")

    # We add the tool's result to the message history
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # We make another call WITHOUT the tools this time to get the final response
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

### 1. Simple Tool Calling Example

"Tool Calling" (or function call) allows a language model to request the execution of a function you've defined in your code. This is a powerful feature to connect LLMs with external tools (APIs, databases, etc.).

The flow is as follows:
1. The user asks a question that requires a tool (e.g., "What's the weather like?").
2. You send the question and the list of available tools to the API.
3. The model, instead of answering directly, returns a `tool_calls` request asking to execute a specific function with certain arguments.
4. Your code executes the requested function.
5. You return the function's result to the model.
6. The model uses this result to formulate a final answer to the user.

**File Structure**

For this example, create a directory `simple_tool_calling` with the following files:

-   `test_tool_calling.py`: The main script.
-   `requirements.txt`: Python dependencies.
-   `.env.example`: A template for your configuration file.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env.example`**
```env
```

### 401 Error - Unauthorized
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Solution** : Check your API key in the Cloud Temple Console.

# Configuration
API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

## Next Steps

Once your first test is successful:

1. **Explore the models**: Test different models according to your needs
2. **Optimize prompts**: Improve the quality of responses
3. **Integrate into your application**: See the [API documentation](./api)
4. **Advanced use cases**: See the [tutorials](./tutorials)

## Step 1: Generate an API key

1. Log in to the Cloud Temple Console
2. Access your account settings
3. Generate a new LLMaaS API key
4. Copy and save the key (it will only be displayed once)

# Load environment variables from a .env file
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")

# Base URL of the LLMaaS API
API_URL="https://api.ai.cloud-temple.com/v1"

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

**Usage**

1.  **Install the dependencies:**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configure your API key:**
    Copy `tests/llmaas/.env.example` to `tests/llmaas/.env` and replace `"votre_cle_api_ici"` with your LLMaaS API key.
3.  **Run the script:**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

# -*- coding: utf-8 -*-
"""
Simple example of using the Vision API of LLMaaS.

This script shows how to send a local image with a question
to a multimodal model and display its answer.
"""
import os
import base64
import httpx
from dotenv import load_dotenv