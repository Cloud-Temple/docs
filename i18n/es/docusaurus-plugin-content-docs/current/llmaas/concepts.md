---
title: Conceptos
sidebar_position: 3
---

# Conceptos y Arquitectura LLMaaS

## Vista General

El servicio **LLMaaS** (Large Language Models as a Service) de Cloud Temple proporciona un acceso seguro y soberano a los modelos de inteligencia artificial más avanzados, con la **calificación SecNumCloud** de la ANSSI.

## 🏗️ Arquitectura Técnica

### Infraestructura Cloud Temple

import ArchitectureLLMaaS from '@site/docs/llmaas/images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Architecture Technique LLMaaS Cloud Temple" />

### Componentes Principales

#### 1. **API Gateway LLMaaS**
- **Compatible con OpenAI** : Integración transparente con el ecosistema existente
- **Rate Limiting** : Gestión de cuotas por nivel de facturación
- **Load Balancing** : Distribución de las solicitudes en los recursos de inferencia
- **Monitoring** : Métricas en tiempo real y alertas

#### 2. **Servicio de Autenticación**
- **Claves API** : Creación, rotación y revocación bajo la responsabilidad del cliente. Ver el [partage des responsabilités (RACI)](../contractual/llmaas/raci.md).
- **Control de acceso** : Permisos granulares por modelo
- **Registros de auditoría** : Trazabilidad completa de los accesos

## 🤖 Modelos y Tokens

### Catálogo de Modelos

*Consulte el [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) y la [guía de selección](./models.md).*

### Gestión de Tokens

#### **Tipos de Tokens**
- **Tokens de entrada** : Su prompt y contexto
- **Tokens de salida** : Respuesta generada por el modelo
- **Tokens del sistema** : Metadatos e instrucciones

#### **Cálculo de Costos**
```
Chat/Completion = (Tokens entrée × 1.8€/M) + (Tokens sortie × 8€/M) + (Tokens sortie Raisonnement × 8€/M)
Reranking (€)   = Nombre de documents traités × 4 / 1 000 000
Batch (async)   = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M)
Audio (ASR)     = 0.01€ / minute de transcription
```

#### **Optimización**
- **Ventana de contexto** : Reutilice las conversaciones para ahorrar
- **Modelos adecuados** : Elija el tamaño según la complejidad
- **Max tokens** : Limite la longitud de las respuestas

### Tokenización

```python
# Ejemplo de estimación de tokens
def estimate_tokens(text: str) -> int:
    """Estimation approximative : 1 token ≈ 4 caractères"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # tokens max souhaités

estimated_input = estimate_tokens(prompt)  # ~6 tokens
total_cost = (estimated_input * 1.8 + response_max * 8) / 1_000_000
print(f"Coût estimé: {total_cost:.6f}€")
```

## 🔒 Seguridad y Cumplimiento

### Calificación SecNumCloud

El servicio LLMaaS se ejecuta en una infraestructura técnica que cuenta con la **calificación SecNumCloud 3.2** de la ANSSI, garantizando :

#### **Protección de Datos**
- **Cifrado de extremo a extremo** : TLS 1.3 para todas las comunicaciones
- **Almacenamiento seguro** : Datos cifrados en reposo (AES-256)

#### **Soberanía Digital**
- **Alojamiento en Francia** : Datacenters Cloud Temple certificados
- **Legislación francesa** : Cumplimiento nativo del RGPD
- **Sin exposición** : Sin transferencia hacia nubes extranjeras

#### **Auditoría y Trazabilidad**
- **Registros completos** : Todas las interacciones registradas
- **Retención** : Conservación según políticas legales
- **Cumplimiento normativo** : Informes de auditoría disponibles

### Controles de Seguridad

import SecurityControls from '@site/docs/llmaas/images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controles de Seguridad LLMaaS" />

### Seguridad de los Prompts

La plataforma LLMaaS no aplica filtrado automático del contenido de los prompts contra inyecciones o intentos de elusión de instrucciones (*jailbreaks*).

Los controles de contenido deben implementarse en su aplicación según su caso de uso. Puede llamar explícitamente a un [modelo de seguridad del catálogo](./models.md#seguridad-y-guardrails) para evaluar las entradas o las respuestas. Estos modelos no se ejecutan automáticamente en las solicitudes dirigidas a otros modelos.

Defina los criterios de filtrado y el procesamiento de los resultados con sus equipos de negocio, y luego pruébelos con sus datos, especialmente para medir los falsos positivos. El [modelo de responsabilidad compartida](../contractual/llmaas/raci.md) detalla los roles del cliente y de Cloud Temple.

## 📈 Rendimiento y Escalabilidad

### Monitoreo en Tiempo Real

Acceso a través de **Console Cloud Temple** :
- Métricas de uso por modelo
- Gráficos de latencia y throughput
- Alertas en umbrales de rendimiento
- Historial de solicitudes

## 🌐 Integración y Ecosistema

### Compatibilidad con OpenAI

El servicio LLMaaS es **compatible** con la API de OpenAI:

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

# Código idéntico!
response = client_ct.chat.completions.create(
    model="gpt-oss:120b",  # Modelo Cloud Temple
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
- ✅ **Jupyter** : Notebooks interactivos
- ✅ **Streamlit** : Aplicaciones web rápidas
- ✅ **Gradio** : Interfaces de usuario de IA
- ✅ **FastAPI** : APIs backend

#### **Plataformas No-Code**
- ✅ **Zapier** : Automatizaciones
- ✅ **Make** : Integraciones visuales
- ✅ **Bubble** : Aplicaciones web

## 🔄 Ciclo de Vida de los Modelos

El **[ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle)** publica los estados, plazos y migraciones recomendadas. Consúltelo antes de elegir un modelo y durante la operación de su aplicación.

### Leer el ciclo de vida

- **DMP** : fecha de puesta en producción.
- **DSP** : fecha de fin de producción (fin de soporte) anunciada para el modelo.
- **LTS (Long Term Support)** : modelo que cuenta con soporte extendido; verifique la fecha publicada para el modelo correspondiente.
- **Production** : modelo indicado en producción en el catálogo.
- **Deprecated** : modelo deprecado para el cual debe prepararse una migración. Este estado no significa necesariamente que las llamadas a la API ya estén interrumpidas.
- **Planned** : modelo anunciado, cuya disponibilidad debe verificarse antes de su uso.

Los anuncios de adición, redirección y retiro se publican en el [changelog del servicio](https://llmaas.status.cloud-temple.app/changelog). Para necesidades de estabilidad o soporte específicas, contacte al soporte técnico para aclarar las condiciones aplicables.

### Redirecciones e identificadores antiguos

Algunos identificadores antiguos se redirigen a un modelo sucesor. Por lo tanto, una solicitud puede seguir funcionando mientras es procesada por otro modelo. La continuidad de la llamada a la API no garantiza respuestas idénticas, ni las mismas capacidades, latencias o límites de contexto.

### Migración a otro modelo

1. Identifique el modelo afectado, la fecha de fin de soporte y el sucesor recomendado en el [ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle).
2. Verifique el identificador del sucesor con `GET /v1/models` y sus capacidades: visión, llamadas a herramientas, razonamiento y contexto según su uso.
3. Pruebe el sucesor con una muestra representativa de sus solicitudes: calidad, formatos de salida, herramientas, latencia y consumo.
4. Actualice el parámetro `model` en la configuración de su aplicación tras la validación y, a continuación, supervise los resultados.
5. Para los embeddings, planifique el recálculo de los vectores y la reconstrucción del índice si el modelo cambia.

### Modelos deprecados

La lista y los destinos de migración están disponibles en el [catálogo de ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle). Si no se indica ninguna migración, contacte al soporte antes de la fecha límite para elegir una solución adecuada.

## 💡 Buenas Prácticas

Para aprovechar al máximo la API LLMaaS, es esencial adoptar estrategias de optimización de costos, rendimiento y seguridad.

### Optimización de Costos

El control de los costos se basa en un uso inteligente de los tokens y los modelos.

1.  **Selección del Modelo** : Compare varios modelos con ejemplos representativos de su uso. Seleccione aquel que cumpla con sus requisitos de calidad y latencia, y luego mida su consumo de tokens. Consulte el [catálogo de ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) para identificar los modelos disponibles y sus sucesores. La facturación depende de la tarifa aplicable y de los volúmenes consumidos; el tamaño del modelo por sí solo no determina el costo facturado.

2.  **Gestión del Contexto** : El historial de la conversación (`messages`) se devuelve en cada llamada, consumiendo tokens de entrada. Para conversaciones largas, considere estrategias de resumen o de ventana para conservar solo la información relevante.
    ```python
    # Para una conversación larga, se pueden resumir los primeros intercambios.
    messages = [
        {"role": "system", "content": "Vous êtes un assistant IA."},
        {"role": "user", "content": "Résumé des 10 premiers échanges..."},
        {"role": "assistant", "content": "Ok, j'ai le contexte."},
        {"role": "user", "content": "Voici ma nouvelle question."}
    ]
    ```

3.  **Limitación de Tokens de Salida** : Utilice siempre el parámetro `max_tokens` para evitar respuestas excesivamente largas y costosas. Establezca un límite razonable según lo que espere.
    ```python
    # Solicitar un resumen de un máximo de 100 palabras.
    response = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Résume ce document..."}],
        max_tokens=150, # Marge de sécurité for ~100 mots
    )
    ```

### Rendimiento

La reactividad de su aplicación depende de la forma en que gestione las llamadas a la API.

1.  **Solicitudes Asíncronas** : Para procesar varias solicitudes sin esperar a que finalice cada una, utilice llamadas asíncronas. Esto es particularmente útil para aplicaciones backend que procesan un gran volumen de solicitudes simultáneas.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Procesa una sola solicitud de forma asíncrona
        response = await client.chat.completions.create(model="gpt-oss:120b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Inicia varias tareas en paralelo y espera su finalización
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming para la Experiencia de Usuario (UX)** : Para las interfaces de usuario (chatbots, asistentes), el streaming es esencial. Permite mostrar la respuesta del modelo palabra por palabra, dando una impresión de reactividad inmediata en lugar de esperar la respuesta completa.
    ```python
    # Muestra la respuesta en tiempo real en una interfaz de usuario
    response_stream = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Raconte-moi une histoire."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Mostrar el fragmento de texto en la interfaz de usuario
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Seguridad

La seguridad de su aplicación es primordial, especialmente cuando se procesan entradas de usuario.

1.  **Validación y Limpieza de Entradas (Sanitización)** : Nunca confíe en las entradas del usuario. Antes de enviarlas a la API, límpielas para eliminar cualquier código potencialmente malicioso o instrucciones de "inyección de prompt". También limite su tamaño para evitar abusos.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Ejemplo simple: eliminar los delimitadores de código y limitar la longitud.
        # Se pueden utilizar bibliotecas más robustas para una sanitización avanzada.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limite la taille à 2000 caractères
    ```

2.  **Gestión Robusta de Errores** : Envuelva siempre sus llamadas a la API en bloques `try...except` para manejar errores de red, errores de la API (ej: 429 Rate Limit, 500 Internal Server Error) y proporcionar una experiencia de usuario degradada pero funcional.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Manejar el caso en que la solicitud tarde demasiado
        return "Le service prend plus de temps que prévu, veuillez réessayer."
    except APIError as e:
        # Manejar errores específicos de la API
        logger.error(f"Erreur API LLMaaS: {e.status_code} - {e.message}")
        return "Désolé, une erreur est survenue avec le service d'IA."
    except Exception as e:
        # Manejar todos los demás errores (red, etc.)
        logger.error(f"Une erreur inattendue est survenue: {e}")
        return "Désolé, une erreur inattendue est survenue."
    ```