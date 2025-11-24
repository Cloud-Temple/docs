---
title: Conceptos
sidebar_position: 3
---

# Conceptos y Arquitectura de LLMaaS

## Visión general

El servicio **LLMaaS** (Large Language Models as a Service) de Cloud Temple ofrece acceso seguro y soberano a los modelos de inteligencia artificial más avanzados, con la **certificación SecNumCloud** de la ANSSI.

## 🏗️ Arquitectura Técnica

### Infraestructura Cloud Temple

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Arquitectura Técnica LLMaaS Cloud Temple" />

### Componentes Principales

#### 1. **API Gateway LLMaaS**
- **Compatible con OpenAI** : Integración transparente con el ecosistema existente
- **Límite de tasa** : Gestión de cuotas por nivel de facturación
- **Equilibrio de carga** : Distribución inteligente sobre 12 máquinas GPU
- **Monitoreo** : Métricas en tiempo real y alertas

#### 2. **Authentication Service**
- **Secure API Tokens**: Automatic rotation
- **Access Control**: Granular permissions per model
- **Audit Trails**: Full access traceability

## 🤖 Modelos y tokens

### Catálogo de Modelos

*Catálogo completo: [Lista de modelos](./models)*

### Gestión de Tokens

#### **Tipos de tokens**
- **Tokens de entrada**: Su prompt y contexto
- **Tokens de salida**: Respuesta generada por el modelo
- **Tokens del sistema**: Metadatos e instrucciones

#### **Cálculo de Costos**
```
Coste total = (Tokens de entrada × 0,9€/M) + (Tokens de salida × 4€/M) + (Tokens de razonamiento de salida × 21€/M)
```

#### **Optimización**
- **Ventana de contexto**: Reutilice las conversaciones para ahorrar
- **Modelos adecuados**: Elija el tamaño según la complejidad
- **Tokens máximos**: Limite la longitud de las respuestas

### Tokenización

```python
```

# Ejemplo de estimación de tokens
```python
def estimate_tokens(text: str) -> int:
    """Estimación aproximada: 1 token ≈ 4 caracteres"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # tokens máximos deseados

estimated_input = estimate_tokens(prompt)  # ~6 tokens
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Coste estimado: {total_cost:.6f}€")
```

## 🔒 Security and Compliance

### SecNumCloud Certification

The LLMaaS service is hosted on a technical infrastructure that holds the **SecNumCloud 3.2 certification** from ANSSI, ensuring:

#### **Protección de Datos**
- **Cifrado extremo a extremo**: TLS 1.3 para todos los intercambios
- **Almacenamiento seguro**: Datos cifrados en reposo (AES-256)
- **Aislamiento**: Entornos dedicados por inquilino

#### **Soberanía Digital**
- **Almacenamiento en Francia**: Centros de datos Cloud Temple certificados
- **Derecho francés**: Cumplimiento nativo del RGPD
- **Sin exposición**: Sin transferencias a nubes extranjeras

#### **Auditoría y trazabilidad**
- **Registros completos** : Todas las interacciones registradas
- **Retención** : Conservación según políticas legales
- **Cumplimiento** : Informes de auditoría disponibles

### Security Controls

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Security Controls LLMaaS" />

### Seguridad de los Prompts

El análisis de prompts es una función de seguridad **integrada y nativa** en la plataforma LLMaaS. Habilitada por defecto, tiene como objetivo detectar y prevenir intentos de "jailbreak" o inyección de prompts maliciosos antes incluso de que lleguen al modelo. Esta protección se basa en un enfoque multicapa.

:::tip Contactar al soporte para desactivar
Es posible desactivar este análisis de seguridad para casos de uso muy específicos, aunque no se recomienda. Para cualquier consulta sobre este tema o para solicitar una desactivación, póngase en contacto con el soporte de Cloud Temple.
:::

#### 1. Análisis estructural (`check_structure`)
- **JSON malformado** : El sistema detecta si el prompt comienza con un `{` y trata de analizarlo como JSON. Si el análisis tiene éxito y el JSON contiene palabras clave sospechosas (por ejemplo, "system", "bypass"), o si el análisis falla de manera inesperada, esto puede indicar una tentativa de inyección.
- **Normalización Unicode** : El prompt se normaliza utilizando `unicodedata.normalize('NFKC', prompt)`. Si el prompt original difiere de su versión normalizada, esto puede indicar el uso de caracteres Unicode engañosos (homógrafos) para evadir los filtros. Por ejemplo, "аdmin" (cirílico) en lugar de "admin" (latino).

#### 2. Detection of Suspicious Patterns (`check_patterns`)
- The system uses regular expressions (`regex`) to identify known attack patterns in prompts, across multiple languages (French, English, Chinese, Japanese).
- **Examples of detected patterns**:
    - **System Commands**: Keywords such as "ignore the instructions", "ignore instructions", "忽略指令", "指示を無視".
    - **HTML Injection**: Hidden or malicious HTML tags, for example `<div hidden>`, `<hidden div>`.
    - **Markdown Injection**: Malicious Markdown links, for example `[text](javascript:...)`, `[text](data:...)`.
    - **Repeated Sequences**: Excessive repetition of words or phrases such as "forget forget forget", "oublie oublie oublie".
    - **Special/Mixed Characters**: Use of unusual Unicode characters or mixing of scripts to obscure commands (e.g., "s\u0443stème").

#### 3. Behavioral Analysis (`check_behavior`)
- The load balancer maintains a history of recent prompts.
- **Fragmentation Detection**: It combines recent prompts to check if an attack is fragmented across multiple requests. For example, if "ignore" is sent in one prompt and "instructions" in the next, the system can detect them together.
- **Repetition Detection**: It identifies if the same prompt is repeated excessively. The current threshold for repetition detection is 30 consecutive identical prompts.

This multi-layered approach enables the detection of a wide range of prompt attacks, from the simplest to the most sophisticated, by combining static content analysis with dynamic behavioral analysis.

## 📈 Rendimiento y Escalabilidad

### Monitoreo en tiempo real

Acceso a través de **Console Cloud Temple**:
- Métricas de uso por modelo
- Gráficos de latencia y tasa de transferencia
- Alertas sobre umbrales de rendimiento
- Historial de solicitudes

## 🌐 Integration and Ecosystem

### Compatibilidad con OpenAI

El servicio LLMaaS es **compatible** con la API de OpenAI:

```python


# Migración transparente
from openai import OpenAI

# Antes (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# After (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="su-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# ¡Código idéntico!
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Modelo Cloud Temple
    messages=[{"role": "user", "content": "Hola"}]
)
```

### Ecosistema compatible

#### **Frameworks de IA**
- ✅ **LangChain** : Integración nativa
- ✅ **Haystack** : Pipeline de documentos
- ✅ **Semantic Kernel** : Orquestación de Microsoft
- ✅ **AutoGen** : Agentes conversacionales

#### **Herramientas de Desarrollo**
- ✅ **Jupyter** : Cuadernos interactivos
- ✅ **Streamlit** : Aplicaciones web rápidas
- ✅ **Gradio** : Interfaces de usuario para IA
- ✅ **FastAPI** : APIs backend

#### **Plataformas No-Code**
- ✅ **Zapier** : Automatizaciones
- ✅ **Make** : Integraciones visuales
- ✅ **Bubble** : Aplicaciones web

## 🔄 Ciclo de Vida de los Modelos

### Actualización de modelos

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Ciclo de vida de los modelos LLMaaS" />

### Política de versionado

- **Modelos estables**: Versiones fijas disponibles durante 6 meses  
- **Modelos experimentales**: Versiones beta para usuarios tempranos  
- **Depreciación**: Aviso previo de 3 meses antes de su eliminación  
- **Migración**: Servicios profesionales disponibles para garantizar sus transiciones

### Planificación Proyectada del Ciclo de Vida

La tabla siguiente presenta el ciclo de vida proyectado de nuestros modelos. El ecosistema de la IA generativa evoluciona muy rápidamente, lo que explica ciclos de vida que pueden parecer cortos. Nuestra intención es ofrecerles acceso a los modelos más potentes disponibles en cada momento.

No obstante, nos comprometemos a mantener en el tiempo los modelos que son más utilizados por nuestros clientes. Para casos de uso críticos que requieran estabilidad a largo plazo, es posible implementar fases de **soporte extendido**. No dude en **ponerse en contacto con el soporte** para discutir sus necesidades específicas.

Esta planificación se proporciona a título indicativo y se **revisa al inicio de cada trimestre**.

- **DMP (Fecha de Puesta en Producción)**: Fecha a partir de la cual el modelo se vuelve disponible en producción.
- **DSP (Fecha de Fin de Soporte)**: Fecha proyectada a partir de la cual el modelo ya no será mantenido. Se respetará un aviso previo de 3 meses antes de cualquier eliminación efectiva.

| Modelo                 | Editor                    | Fase       | DMP        | DSP        |
| :--------------------- | :------------------------ | :--------- | :--------- | :--------- |
| deepcoder:14b          | Agentica x Together AI    | Producción | 13/06/2025 | 30/12/2025 |
| cogito:32b             | Deep Cogito               | Producción | 13/06/2025 | 30/06/2026 |
| cogito:3b              | Deep Cogito               | Producción | 13/06/2025 | 30/12/2025 |
| cogito:8b              | Deep Cogito               | Producción | 13/06/2025 | 30/12/2025 |
| deepseek-r1:14b        | DeepSeek AI               | Producción | 13/06/2025 | 31/12/2025 |
| deepseek-r1:32b        | DeepSeek AI               | Producción | 13/06/2025 | 31/12/2025 |
| deepseek-ocr           | Qwen Team                 | Producción | 22/11/2025 | 31/12/2026 |
| gemma3:12b             | Google                    | Producción | 13/06/2025 | 31/12/2026 |
| gemma3:1b              | Google                    | Producción | 13/06/2025 | 31/12/2025 |
| gemma3:27b             | Google                    | Producción | 13/06/2025 | 30/03/2026 |
| gemma3:4b              | Google                    | Producción | 13/06/2025 | 31/12/2025 |
| gpt-oss:120b           | Qwen Team                 | Producción | 11/11/2025 | 30/06/2026 |
| gpt-oss:20b            | Qwen Team                 | Producción | 08/08/2025 | 30/03/2026 |
| embeddinggemma:300m    | Google                    | Producción | 10/09/2025 | 31/12/2026 |
| granite-embedding:278m | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| qwen3-embedding:0.6b   | Qwen Team                 | Producción | 18/10/2025 | 31/12/2026 |
| granite3-guardian:2b   | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3-guardian:8b   | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3.2-vision:2b   | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3.3:2b          | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3.3:8b          | IBM                       | Producción | 13/06/2025 | 31/12/2025 |
| granite4-small-h:32b   | IBM                       | Producción | 03/10/2025 | 30/09/2026 |
| granite4-tiny-h:7b     | IBM                       | Producción | 03/10/2025 | 30/09/2026 |
| llama3.3:70b           | Meta                      | Producción | 13/06/2025 | 31/12/2026 |
| magistral:24b          | Mistral AI                | Producción | 13/06/2025 | 30/03/2026 |
| mistral-small3.1:24b   | Mistral AI                | Producción | 13/06/2025 | 31/12/2025 |
| mistral-small3.2:24b   | Mistral AI                | Producción | 23/06/2025 | 30/06/2026 |
| devstral:24b           | Mistral AI & All Hands AI | Producción | 13/06/2025 | 30/03/2026 |
| qwen2.5vl:32b          | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:3b           | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:72b          | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:7b           | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3:0.6b             | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3:1.7b             | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3:14b              | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3:30b-a3b          | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3-2507:30b-a3b     | Qwen Team                 | Producción | 30/08/2025 | 30/03/2026 |
| qwen3-2507-think:4b    | Qwen Team                 | Producción | 31/08/2025 | 30/03/2026 |
| qwen3-2507:4b          | Qwen Team                 | Producción | 31/08/2025 | 30/03/2026 |
| qwen3:4b               | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3:8b               | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3-coder:30b        | Qwen Team                 | Producción | 02/08/2025 | 30/03/2026 |
| qwen3-2507:235b        | Qwen Team                 | Producción | 02/08/2025 | 30/03/2026 |
| qwen3:32b              | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwq:32b                | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen3-next:80b         | Qwen Team                 | Producción | 04/11/2025 | 30/03/2026 |

### Modelos Obsoletos

El mundo de los LLM evoluciona muy rápidamente. Para garantizar a nuestros clientes el acceso a las tecnologías más potentes, eliminamos periódicamente los modelos que ya no cumplen con los estándares actuales o que no se utilizan. Los modelos enumerados a continuación ya no están disponibles en la plataforma pública. Sin embargo, pueden reactivarse para proyectos específicos, bajo solicitud.

| Modelo                   | Editor                | Fase     | Fecha de Obsolescencia |
| :----------------------- | :-------------------- | :------- | :--------------------- |
| cogito:14b               | Deep Cogito           | Obsoleto | 17/10/2025             |
| deepseek-r1:671b         | DeepSeek AI           | Obsoleto | 17/10/2025             |
| deepseek-r1:70b          | DeepSeek AI           | Obsoleto | 17/10/2025             |
| foundation-sec:8b        | Foundation AI — Cisco | Obsoleto | 17/10/2025             |
| granite3.1-moe:3b        | IBM                   | Obsoleto | 17/10/2025             |
| llama3.1:8b              | Meta                  | Obsoleto | 17/10/2025             |
| phi4-reasoning:14b       | Microsoft             | Obsoleto | 17/10/2025             |
| lucie-instruct:7b        | OpenLLM-France        | Obsoleto | 17/10/2025             |
| qwen2.5:0.5b             | Qwen Team             | Obsoleto | 17/10/2025             |
| qwen2.5:1.5b             | Qwen Team             | Obsoleto | 17/10/2025             |
| qwen2.5:14b              | Qwen Team             | Obsoleto | 17/10/2025             |
| qwen2.5:32b              | Qwen Team             | Obsoleto | 17/10/2025             |
| qwen2.5:3b               | Qwen Team             | Obsoleto | 17/10/2025             |
| qwen3:235b               |                       | Obsoleto | 22/11/2025             |
| qwen3-2507-think:30b-a3b |                       | Obsoleto | 14/11/2025             |
| gemma3:12b               |                       | Obsoleto | 21/11/2025             |

## 💡 Buenas Prácticas

Para obtener el máximo provecho de la API LLMaaS, es fundamental adoptar estrategias de optimización de costos, rendimiento y seguridad.

### Optimización de Costos

El control de costos se basa en un uso inteligente de los tokens y de los modelos.

1.  **Elección del Modelo**: No utilices un modelo demasiado potente para una tarea sencilla. Un modelo más grande es más capaz, pero también es más lento y consume mucho más energía, lo que afecta directamente al costo. Ajusta el tamaño del modelo a la complejidad de tu necesidad para lograr un equilibrio óptimo.

    Por ejemplo, para procesar un millón de tokens:
    - **`Gemma 3 1B`** consume **0,15 kWh**.
    - **`Llama 3.3 70B`** consume **11,75 kWh**, es decir, **78 veces más**.

    ```python
    # Para una clasificación de sentimiento, un modelo compacto es suficiente y económico.
    if task == "sentiment_analysis":
        model = "granite3.3:2b"
    # Para un análisis jurídico complejo, se necesita un modelo más grande.
    elif task == "legal_analysis":
        model = "deepseek-r1:70b"
    ```

2.  **Gestión del Contexto**: El historial de la conversación (`messages`) se devuelve en cada llamada, consumiendo tokens de entrada. Para conversaciones largas, considera estrategias de resumen o ventana deslizante para conservar solo la información relevante.
    ```python
    # Para una conversación larga, se puede resumir los primeros intercambios.
    messages = [
        {"role": "system", "content": "Eres un asistente de IA."},
        {"role": "user", "content": "Resumen de los 10 primeros intercambios..."},
        {"role": "assistant", "content": "Ok, tengo el contexto."},
        {"role": "user", "content": "Aquí está mi nueva pregunta."}
    ]
    ```

3.  **Limitación de Tokens de Salida**: Siempre utiliza el parámetro `max_tokens` para evitar respuestas excesivamente largas y costosas. Establece un límite razonable según lo que esperas.
    ```python
    # Solicitar un resumen de máximo 100 palabras.
    response = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[{"role": "user", "content": "Resume este documento..."}],
        max_tokens=150, # Margen de seguridad para ~100 palabras
    )
    ```

### Rendimiento

La reactividad de su aplicación depende de la forma en que gestiona las llamadas a la API.

1.  **Solicitudes asíncronas**: Para procesar múltiples solicitudes sin esperar la finalización de cada una, utilice llamadas asíncronas. Esto es especialmente útil para aplicaciones backend que manejan un gran volumen de solicitudes simultáneas.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Procesa una sola solicitud de forma asíncrona
        response = await client.chat.completions.create(model="granite3.3:8b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Inicia varias tareas en paralelo y espera su finalización
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming para la experiencia del usuario (UX)**: Para interfaces de usuario (chatbots, asistentes), el streaming es esencial. Permite mostrar la respuesta del modelo palabra a palabra, dando la impresión de reactividad inmediata en lugar de esperar la respuesta completa.
    ```python
    # Muestra la respuesta en tiempo real en una interfaz de usuario
    response_stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[{"role": "user", "content": "Cuéntame un cuento."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Mostrar el fragmento de texto en la IU
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Seguridad

La seguridad de su aplicación es fundamental, especialmente cuando maneja entradas de usuarios.

1.  **Validación y limpieza de entradas (Sanitización)**: Nunca confíe en las entradas de los usuarios. Antes de enviarlas a la API, limínelas para eliminar cualquier código potencialmente malicioso o instrucciones de "inyección de prompt". Además, limite su tamaño para evitar abusos.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Ejemplo simple: eliminar los delimitadores de código y limitar la longitud.
        # Pueden utilizarse bibliotecas más robustas para una sanitización avanzada.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limita la longitud a 2000 caracteres
    ```

2.  **Gestión robusta de errores**: Siempre envuelva sus llamadas a la API dentro de bloques `try...except` para manejar errores de red, errores de la API (por ejemplo, 429 Rate Limit, 500 Internal Server Error) y proporcionar una experiencia de usuario funcional aunque degradada.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Manejar el caso en que la solicitud tarda demasiado
        return "El servicio tarda más de lo esperado, por favor inténtelo de nuevo."
    except APIError as e:
        # Manejar errores específicos de la API
        logger.error(f"Error de API LLMaaS: {e.status_code} - {e.message}")
        return "Lo sentimos, ha ocurrido un error con el servicio de IA."
    except Exception as e:
        # Manejar todos los demás errores (red, etc.)
        logger.error(f"Ha ocurrido un error inesperado: {e}")
        return "Lo sentimos, ha ocurrido un error inesperado."
    ```