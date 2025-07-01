---
title: Conceptos
sidebar_position: 3
---

# Conceptos y Arquitectura LLMaaS

## Visión general

El servicio **LLMaaS** (Large Language Models as a Service) de Cloud Temple proporciona un acceso seguro y soberano a los modelos de inteligencia artificial más avanzados, con la **calificación SecNumCloud** de la ANSSI.

## 🏗️ Arquitectura Técnica

### Infraestructura Cloud Temple

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Arquitectura Técnica LLMaaS Cloud Temple" />

### Componentes Principales

#### 1. **API Gateway LLMaaS**
- **Compatible con OpenAI**: Integración transparente con ecosistema existente
- **Límite de tasas**: Gestión de cuotas por nivel de facturación
- **Balanceo de carga**: Distribución inteligente en 12 máquinas GPU
- **Monitoreo**: Métricas en tiempo real y alertas

#### 2. **Servicio de Autenticación**
- **Tokens API seguros** : Rotación automática
- **Control de acceso** : Permisos granulares por modelo
- **Audit trails** : Rastreabilidad completa de los accesos

## 🤖 Modelos y Tokens

### Catálogo de Modelos

*Catálogo completo : [Lista de modelos](./models)*

### Gestión de Tokens

#### **Tipos de Tokens**
- **Tokens de entrada** : Su prompt y contexto
- **Tokens de salida** : Respuesta generada por el modelo
- **Tokens del sistema** : Metadatos e instrucciones

#### **Cálculo de los Costos**
```
Costo total = (Tokens de entrada × 0.9€/M) + (Tokens de salida × 4€/M) +  (Tokens de razonamiento × 21€/M)
```

#### **Optimización**
- **Ventana de contexto** : Reutilice las conversaciones para ahorrar
- **Modelos adecuados** : Elija el tamaño según la complejidad
- **Max tokens** : Limite la longitud de las respuestas

### Tokenización

```python

# Ejemplo de estimación de tokens
def estimate_tokens(text: str) -> int:
    """Estimación aproximada: 1 token ≈ 4 caracteres"""
    return len(text) // 4

prompt = "Explique la fotosíntesis"
response_max = 200  # tokens máximos deseados

estimated_input = estimate_tokens(prompt)  # ~6 tokens
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Costo estimado: {total_cost:.6f}€")
```

## 🔒 Seguridad y Conformidad

### Calificación SecNumCloud

El servicio LLMaaS se ejecuta en una infraestructura técnica que cuenta con la **calificación SecNumCloud 3.2** de la ANSSI, garantizando:

#### **Protección de los Datos**
- **Cifrado extremo a extremo** : TLS 1.3 para todos los intercambios
- **Almacenamiento seguro** : Datos cifrados en reposo (AES-256)
- **Aislamiento** : Entornos dedicados por inquilino

#### **Soberanía Digital**
- **Almacenamiento en Francia** : Datacenters Cloud Temple certificados
- **Derecho francés** : Conformidad con el RGPD nativa
- **Sin exposición** : Ningún transferencia a nubes extranjeras

#### **Auditoría y Rastreabilidad**
- **Registros completos** : Todas las interacciones registradas
- **Retención** : Conservación según políticas legales
- **Cumplimiento** : Informes de auditoría disponibles

### Controles de Seguridad

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controles de Seguridad LLMaaS" />

### Seguridad de los Prompts

El análisis de prompts es una **funcionalidad de seguridad nativa e integrada** en la plataforma LLMaaS. Activada por defecto, tiene como objetivo detectar y prevenir intentos de "jailbreak" o inyección de prompts maliciosos antes de que lleguen al modelo. Esta protección se basa en un enfoque multicapa.

:::tip Póngase en contacto con el soporte para desactivar
Es posible desactivar este análisis de seguridad para casos de uso muy específicos, aunque no se recomienda. Para cualquier consulta al respecto o para solicitar una desactivación, póngase en contacto con el soporte de Cloud Temple.
:::

#### 1. Análisis estructural (`check_structure`)
- **Verificación de JSON malformado**: El sistema detecta si el prompt comienza con un `{` y intenta analizarlo como JSON. Si el análisis tiene éxito y el JSON contiene palabras clave sospechosas (ej: "system", "bypass"), o si el análisis falla de manera inesperada, esto puede indicar una tentativa de inyección.
- **Normalización Unicode**: El prompt se normaliza utilizando `unicodedata.normalize('NFKC', prompt)`. Si el prompt original difiere de su versión normalizada, esto puede indicar el uso de caracteres Unicode engañosos (homoglifos) para evadir los filtros. Por ejemplo, "аdmin" (cirílico) en lugar de "admin" (latino).

#### 2. Detección de Patrones Sospechosos (`check_patterns`)
- El sistema utiliza expresiones regulares (`regex`) para identificar patrones conocidos de ataques de prompts, en varios idiomas (francés, inglés, chino, japonés).
- **Ejemplos de patrones detectados** :
    - **Comandos del Sistema** : Palabras clave como "ignore las instrucciones", "ignore instructions", "忽略指令", "指示を無視".
    - **Inyección HTML** : Etiquetas HTML ocultas o maliciosas, por ejemplo `<div oculto>`, `<hidden div>`.
    - **Inyección Markdown** : Enlaces Markdown maliciosos, por ejemplo `[texto](javascript:...)`, `[texto](data:...)`.
    - **Secuencias Repetidas** : Repetición excesiva de palabras o frases como "olvida olvida olvida", "forget forget forget".
    - **Caracteres Especiales/Mixtos** : Uso de caracteres Unicode inusuales o mezcla de scripts para ocultar comandos (ej: "s\u0443stème").

#### 3. Análisis Comportamental (`check_behavior`)
- El balanceador de carga mantiene un historial de prompts recientes.
- **Detección de Fragmentación**: Combina los prompts recientes para ver si un ataque está fragmentado en varias solicitudes. Por ejemplo, si "ignore" se envía en un prompt y "instructions" en el siguiente, el sistema puede detectarlos juntos.
- **Detección de Repetición**: Identifica si el mismo prompt se repite de manera excesiva. El umbral actual para la detección de repetición es de **30 prompts consecutivos idénticos**.

Este enfoque multicapa permite detectar una amplia gama de ataques de prompts, desde los más simples hasta los más sofisticados, combinando el análisis estático del contenido y el análisis dinámico del comportamiento.

## 📈 Rendimiento y Escalabilidad

### Monitoreo en Tiempo Real

Acceso a través de **Console Cloud Temple** :
- Métricas de uso por modelo
- Gráficos de latencia y rendimiento
- Alertas sobre umbrales de rendimiento
- Historial de consultas

## 🌐 Integración y Ecosistema

### Compatibilidad OpenAI

El servicio LLMaaS es **compatible** con la API OpenAI :

```python

# Migración transparente
from openai import OpenAI

# Antes (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Después (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Código idéntico !
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Modelo Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Ecosistema Soportado

#### **Frameworks de IA**
- ✅ **LangChain** : Integración nativa
- ✅ **Haystack** : Pipeline de documentos
- ✅ **Semantic Kernel** : Orquestación de Microsoft
- ✅ **AutoGen** : Agentes conversacionales

#### **Herramientas de Desarrollo**
- ✅ **Jupyter** : Cuadernos interactivos
- ✅ **Streamlit** : Aplicaciones web rápidas
- ✅ **Gradio** : Interfaces de usuario de IA
- ✅ **FastAPI** : APIs backend

#### **Plataformas No-Code**
- ✅ **Zapier** : Automatizaciones
- ✅ **Make** : Integraciones visuales
- ✅ **Bubble** : Aplicaciones web

## 🔄 Ciclo de Vida de los Modelos

### Actualización de Modelos

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Ciclo de Vida de los Modelos LLMaaS" />

### Política de Versioning

- **Modelos estables**: Versiones fijas disponibles durante 6 meses
- **Modelos experimentales**: Versiones beta para adoptantes tempranas
- **Depreciación**: Aviso de 3 meses antes del retiro
- **Migración**: Servicios profesionales disponibles para garantizar sus transiciones

### Planificación del Ciclo de Vida Previsional

La tabla siguiente presenta el ciclo de vida previsional de nuestros modelos. El ecosistema de la IA generativa evoluciona muy rápidamente, lo que explica ciclos de vida que pueden parecer cortos. Nuestra intención es brindarle acceso a los modelos más potentes disponibles en el momento.

Sin embargo, nos comprometemos a preservar en el tiempo los modelos que son más utilizados por nuestros clientes. Para casos de uso críticos que requieren estabilidad a largo plazo, es posible realizar fases de **soporte extendido**. No dude en **contactar al soporte** para discutir sus necesidades específicas.

Esta planificación se proporciona a título informativo y se **revisa al comienzo de cada trimestre**.

- **DMP (Fecha de Puesta en Producción)**: Fecha en la que el modelo se vuelve disponible en producción.
- **DSP (Fecha de Fin de Soporte)**: Fecha prevista a partir de la cual el modelo ya no será mantenido. Se respetará un aviso de 3 meses antes de cualquier eliminación efectiva.

| Modelo                 | Editor                    | Fase       | DMP        | DSP        |
| :--------------------- | :------------------------ | :--------- | :--------- | :--------- |
| deepcoder:14b          | Agentica x Together AI    | Producción | 13/06/2025 | 30/06/2026 |
| cogito:14b             | Deep Cogito               | Producción | 13/06/2025 | 30/06/2026 |
| cogito:32b             | Deep Cogito               | Producción | 13/06/2025 | 30/06/2026 |
| cogito:3b              | Deep Cogito               | Producción | 13/06/2025 | 30/06/2026 |
| cogito:8b              | Deep Cogito               | Producción | 13/06/2025 | 30/06/2026 |
| deepseek-r1:14b        | DeepSeek AI               | Producción | 13/06/2025 | 31/12/2025 |
| deepseek-r1:32b        | DeepSeek AI               | Producción | 13/06/2025 | 31/12/2025 |
| deepseek-r1:671b       | DeepSeek AI               | Producción | 13/06/2025 | 31/12/2025 |
| deepseek-r1:70b        | DeepSeek AI               | Producción | 13/06/2025 | 31/12/2025 |
| foundation-sec:8b      | Foundation AI — Cisco     | Producción | 13/06/2025 | 30/09/2025 |
| gemma3:12b             | Google                    | Producción | 13/06/2025 | 31/12/2026 |
| gemma3:1b              | Google                    | Producción | 13/06/2025 | 31/12/2026 |
| gemma3:27b             | Google                    | Producción | 13/06/2025 | 31/12/2026 |
| gemma3:4b              | Google                    | Producción | 13/06/2025 | 31/12/2026 |
| granite-embedding:278m | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3-guardian:2b   | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3-guardian:8b   | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3.1-moe:3b      | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3.2-vision:2b   | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3.3:2b          | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| granite3.3:8b          | IBM                       | Producción | 13/06/2025 | 31/12/2026 |
| llama3.1:8b            | Meta                      | Producción | 13/06/2025 | 31/12/2025 |
| llama3.3:70b           | Meta                      | Producción | 13/06/2025 | 31/12/2026 |
| phi4-reasoning:14b     | Microsoft                 | Producción | 13/06/2025 | 31/12/2025 |
| magistral:24b          | Mistral AI                | Producción | 13/06/2025 | 31/12/2026 |
| mistral-small3.1:24b   | Mistral AI                | Producción | 13/06/2025 | 31/12/2026 |
| mistral-small3.2:24b   | Mistral AI                | Producción | 23/06/2025 | 30/03/2026 |
| devstral:24b           | Mistral AI & All Hands AI | Producción | 13/06/2025 | 31/12/2026 |
| lucie-instruct:7b      | OpenLLM-France            | Producción | 13/06/2025 | 30/10/2025 |
| qwen2.5:0.5b           | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5:1.5b           | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5:14b            | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5:32b            | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5:3b             | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |
| qwen2.5vl:32b          | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:3b           | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:72b          | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen2.5vl:7b           | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:0.6b             | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:1.7b             | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:14b              | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:30b-a3b          | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:4b               | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:8b               | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:32b              | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwen3:235b             | Qwen Team                 | Producción | 13/06/2025 | 31/12/2026 |
| qwq:32b                | Qwen Team                 | Producción | 13/06/2025 | 31/12/2025 |

## 💡 Buenas Prácticas

Para aprovechar al máximo la API LLMaaS, es esencial adoptar estrategias de optimización de costos, rendimiento y seguridad.

### Optimización de Costos

La gestión de costos se basa en un uso inteligente de los tokens y los modelos.

1. **Selección del Modelo**: No utilice un modelo potente para una tarea sencilla. Un modelo más grande es más capaz, pero también es más lento y consume mucho más energía, lo que afecta directamente al costo. Ajuste el tamaño del modelo a la complejidad de su necesidad para un equilibrio óptimo.

   Por ejemplo, para procesar un millón de tokens:
   - **`Gemma 3 1B`** consume **0.15 kWh**.
   - **`Llama 3.3 70B`** consume **11.75 kWh**, es decir, **78 veces más**.

   ```python
   # Para una clasificación de sentimiento, un modelo compacto es suficiente y económico.
   if task == "sentiment_analysis":
       model = "granite3.3:2b"
   # Para un análisis jurídico complejo, se necesita un modelo más grande.
   elif task == "legal_analysis":
       model = "deepseek-r1:70b"
   ```

2. **Gestión del Contexto**: El historial de la conversación (`messages`) se devuelve en cada llamada, consumiendo tokens de entrada. Para conversaciones largas, considere estrategias de resumen o ventana para conservar solo la información relevante.
   ```python
   # Para una conversación larga, se puede resumir los primeros intercambios.
   messages = [
       {"role": "system", "content": "Eres un asistente de IA."},
       {"role": "user", "content": "Resumen de los 10 primeros intercambios..."},
       {"role": "assistant", "content": "Entendido, tengo el contexto."},
       {"role": "user", "content": "Aquí está mi nueva pregunta."}
   ]
   ```

3. **Limitación de Tokens de Salida**: Siempre utilice el parámetro `max_tokens` para evitar respuestas excesivamente largas y costosas. Establezca un límite razonable según lo que espere.
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

1.  **Solicitudes asíncronas** : Para procesar varias solicitudes sin esperar el final de cada una, utilice llamadas asíncronas. Esto es especialmente útil para aplicaciones backend que tratan un gran volumen de solicitudes simultáneas.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Procesa una sola solicitud de manera asíncrona
        response = await client.chat.completions.create(model="granite3.3:8b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Lanza varias tareas en paralelo y espera su finalización
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming para la experiencia de usuario (UX)** : Para interfaces de usuario (chatbots, asistentes), el streaming es esencial. Permite mostrar la respuesta del modelo palabra por palabra, dando una sensación de reactividad inmediata en lugar de esperar la respuesta completa.
    ```python
    # Muestra la respuesta en tiempo real en una interfaz de usuario
    response_stream = client.chat.completions.create(
        model="granite3.3:8b",
        messages=[{"role": "user", "content": "Cuéntame un cuento."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Mostrar el fragmento de texto en la UI
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Seguridad

La seguridad de su aplicación es primordial, especialmente cuando maneja entradas de usuarios.

1. **Validación y limpieza de entradas (Sanitización)**: Nunca confíe en las entradas de los usuarios. Antes de enviarlas a la API, limítelas para eliminar cualquier código potencialmente malicioso o instrucciones de "inyección de prompt". También limite su tamaño para evitar abusos.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Ejemplo simple: eliminar los delimitadores de código y limitar la longitud.
        # Se pueden utilizar bibliotecas más robustas para una sanitización avanzada.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limita el tamaño a 2000 caracteres
    ```

2. **Gestión robusta de errores**: Siempre envuelva sus llamadas a la API en bloques `try...except` para manejar errores de red, errores de la API (por ejemplo, 429 Límite de velocidad, 500 Error Interno del Servidor) y proporcionar una experiencia de usuario funcional pero degradada.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Manejar el caso donde la solicitud tarda demasiado
        return "El servicio está tomando más tiempo del esperado, por favor intente de nuevo."
    except APIError as e:
        # Manejar errores específicos de la API
        logger.error(f"Error de API LLMaaS: {e.status_code} - {e.message}")
        return "Lo sentimos, ha ocurrido un error con el servicio de IA."
    except Exception as e:
        # Manejar todos los demás errores (red, etc.)
        logger.error(f"Ha ocurrido un error inesperado: {e}")
        return "Lo sentimos, ha ocurrido un error inesperado."
    ```