---
title: Conceptos
sidebar_position: 3
---

<a id="vista-general"></a>

## Presentación

El servicio **LLMaaS** (Large Language Models as a Service) de Cloud Temple da acceso, mediante una API compatible con OpenAI, a un catálogo de modelos de lenguaje cuya inferencia se realiza en Francia, en una infraestructura cualificada SecNumCloud y certificada HDS. Sus datos no se explotan ni se conservan tras el tratamiento.

Está dirigido a los equipos que integran la IA generativa en sus aplicaciones, incluso en sectores regulados (salud, finanzas, sector público). Casos de uso típicos:

- asistentes y chatbots multilingües;
- análisis y síntesis de documentos largos, generación aumentada por recuperación (RAG);
- generación de código y agentes;
- análisis de imágenes y documentos visuales;
- transcripción de audio y traducción.

## Ventajas

| Ventaja | Descripción |
|---|---|
| Confidencialidad | Los prompts y las respuestas no se explotan ni se conservan tras el tratamiento, salvo los resultados de un procesamiento por lotes, que se purgan tras un tiempo limitado. |
| Soberanía | Inferencia en Francia, en una infraestructura cualificada SecNumCloud y certificada HDS. |
| Compatibilidad con OpenAI | Para las llamadas admitidas, una aplicación existente cambia su URL base y su clave de API; algunas funcionalidades difieren (procesamiento por lotes, completions, embeddings, transcripción de audio): consulte la sección «Compatibilidad con OpenAI» de la [documentación de la API](./api.md). |
| Catálogo gestionado | Cloud Temple añade, actualiza y retira los modelos, y publica su ciclo de vida. |
| Facturación por uso | Solo se facturan los volúmenes consumidos, por unidad de facturación (tokens, minutos de audio). |
| Ecosistema | Los frameworks habituales (LangChain, Haystack, Semantic Kernel…) funcionan con la API. |

## Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| Catálogo de modelos | Modelos de diálogo, razonamiento, programación, visión, embedding, reranking, seguridad, traducción, transcripción de audio y generación de imágenes. Consulte la [guía de elección](./models.md). |
| API compatible con OpenAI | Un único punto de acceso, `https://api.ai.cloud-temple.com/v1`, con streaming de las respuestas y llamadas a funciones (*function calling*). |
| Búsqueda documental (RAG) | Embeddings y [reordenación de documentos](./rerank.md) para construir pipelines RAG. |
| Análisis de documentos visuales | Modelos de visión y [reconocimiento de documentos](./ocr.md). |
| Transcripción de audio | Transcripción por lotes o en tiempo real. |
| Procesamiento por lotes | Envío asíncrono de lotes de solicitudes: consulte el [procesamiento por lotes](./batch.md). |
| Modelos de seguridad | Modelos que se llaman como prefiltro o posfiltro para detectar contenidos problemáticos e intentos de elusión; no se aplican automáticamente. |

<a id="️-arquitectura-técnica"></a>

## Arquitectura

### Infraestructura Cloud Temple

import ArchitectureLLMaaS from '@site/docs/llmaas/images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Arquitectura Técnica LLMaaS Cloud Temple" />

### Componentes Principales

<a id="1-api-gateway-llmaas"></a>

#### API Gateway LLMaaS
- **Compatible con OpenAI** : Integración transparente con el ecosistema existente
- **Rate Limiting** : Gestión de cuotas por nivel de facturación
- **Load Balancing** : Distribución de las solicitudes sobre los recursos de inferencia
- **Monitoring** : Métricas en tiempo real y alertas

<a id="2-servicio-de-autenticación"></a>

#### Servicio de Autenticación
- **Claves API** : Creación, rotación y revocación bajo la responsabilidad del cliente. Consulte el [compartir de responsabilidades (RACI)](../contractual/llmaas/raci.md).
- **Control de acceso** : Permisos granulares por modelo
- **Audit trails** : Trazabilidad completa de los accesos

<a id="-integración-y-ecosistema"></a>

### Compatibilidad con OpenAI

El servicio LLMaaS es **compatible** con la API de OpenAI :

```python
# Migration transparente
from openai import OpenAI

# Avant (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Après (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Code identique !
response = client_ct.chat.completions.create(
    model="gpt-oss:120b",  # Modèle Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)
```

### Ecosistema Soportado

#### Frameworks de IA
- ✅ **LangChain** : Integración nativa
- ✅ **Haystack** : Pipeline de documentos
- ✅ **Semantic Kernel** : Orquestación de Microsoft
- ✅ **AutoGen** : Agentes conversacionales

#### Herramientas de Desarrollo
- ✅ **Jupyter** : Cuadernos interactivos
- ✅ **Streamlit** : Aplicaciones web rápidas
- ✅ **Gradio** : Interfaces de usuario de IA
- ✅ **FastAPI** : APIs backend

#### Plataformas No-Code
- ✅ **Zapier** : Automatizaciones
- ✅ **Make** : Integraciones visuales
- ✅ **Bubble** : Aplicaciones web

## Regiones y zonas de disponibilidad

El servicio está disponible en la región FR1. La inferencia se realiza en Francia, en los centros de datos de Cloud Temple.

<a id="-modelos-y-tokens"></a>

## Especificaciones técnicas

### Catálogo de Modelos

*Consulte el [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) y la [guía de elección](./models.md).*

### Gestión de Tokens

<a id="tipos-de-tokens"></a>

#### Unidades de facturación
- **Tokens de entrada**: su prompt y su contexto
- **Tokens de salida**: la respuesta generada por el modelo
- **Tokens de razonamiento**: solo para los modelos «razonadores» o «híbridos» cuando el razonamiento está activo, y solo sobre los tokens vinculados a esta actividad
- **Tokens de reranking**: la [reordenación de documentos](./rerank.md)
- **Tokens batch** (entrada y salida): el [procesamiento por lotes](./batch.md)
- **Minutos de audio transcritos**: todo minuto iniciado se contabiliza

### Tokenización

```python
# Exemple d'estimation de tokens
def estimate_tokens(text: str) -> int:
    """Estimation approximative : 1 token ≈ 4 caractères"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # tokens max souhaités

estimated_input = estimate_tokens(prompt)  # ~6 tokens
print(f"Tokens estimés : {estimated_input}; limite de sortie : {response_max}")
```

<a id="-rendimiento-y-escalabilidad"></a>

### Monitorización en Tiempo Real

Acceso a través de la **Consola Cloud Temple** :
- Métricas de uso por modelo
- Gráficos de latencia y rendimiento
- Alertas sobre umbrales de rendimiento

### Límites

- **Caudal**: los límites de tokens por hora y por día dependen de su tier; se detallan en la [documentación de la API](./api.md), sección «Rate Limiting y Facturación».
- **Contexto**: el tamaño máximo de contexto depende del modelo; consulte el [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle).
- **Procesamiento por lotes**: capacidad de la cola y duración de conservación de los resultados en los [límites del procesamiento por lotes](./batch.md#límites-y-retención).

<a id="-seguridad-y-cumplimiento"></a>

## Seguridad y cumplimiento

### Calificación SecNumCloud

El servicio LLMaaS se ejecuta en una infraestructura técnica que cuenta con la **calificación SecNumCloud 3.2** de la ANSSI y de la **certificación HDS** para el alojamiento de datos de salud, garantizando:

#### Protección de Datos
- **Cifrado de extremo a extremo** : TLS 1.3 para todos los intercambios

#### Soberanía Digital
- **Alojamiento en Francia** : Centros de datos Cloud Temple certificados
- **Derecho francés** : Cumplimiento nativo del RGPD
- **Sin exposición** : Ninguna transferencia hacia nubes extranjeras

<a id="auditoría-y-trazabilidad"></a>

#### Confidencialidad de los Datos
- **Sin conservación**: sus datos permanecen estrictamente confidenciales y no se explotan ni se almacenan tras el procesamiento. Única excepción: los resultados de un [procesamiento por lotes](./batch.md) siguen siendo consultables durante un tiempo limitado tras su finalización (24 h por defecto) y después se purgan automáticamente; consulte las [condiciones de conservación](./batch.md#límites-y-retención)

### Controles de Seguridad

import SecurityControls from '@site/docs/llmaas/images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controles de Seguridad LLMaaS" />

### Seguridad de los Prompts

La plataforma LLMaaS no aplica un filtrado automático del contenido de los prompts contra inyecciones o intentos de elusión de instrucciones (*jailbreaks*).

Los controles de contenido deben implementarse en su aplicación según su caso de uso. Puede llamar explícitamente a un [modelo de seguridad del catálogo](./models.md#seguridad-y-guardrails) para evaluar las entradas o las respuestas. Estos modelos no se ejecutan automáticamente sobre las solicitudes dirigidas a otros modelos.

Defina los criterios de filtrado y el tratamiento de los resultados con sus equipos de negocio, y pruébelos en sus datos, especialmente para medir los falsos positivos. El [compartir de responsabilidades](../contractual/llmaas/raci.md) especifica los roles del cliente y de Cloud Temple.

<a id="-ciclo-de-vida-de-los-modelos"></a>

## Versiones y ciclo de vida

El **[ciclo de vida de los modelos](https://llmaas.status.cloud-temple.app/lifecycle)** publica los estados, plazos y migraciones recomendadas. Consúltelo antes de elegir un modelo y durante la explotación de su aplicación.

### Leer el ciclo de vida

- **DMP** : fecha de puesta en producción.
- **DSP** : fecha de salida de producción (fin del soporte) anunciada para el modelo.
- **LTS (Long Term Support)** : modelo que beneficia de un soporte extendido; verifique la fecha publicada para el modelo en cuestión.
- **Producción** : modelo indicado en producción en el catálogo.
- **Deprecated** : modelo obsoleto para el cual debe prepararse una migración. Este estado no significa necesariamente que las llamadas API ya estén interrumpidas.
- **Planned** : modelo anunciado, cuya disponibilidad debe verificarse antes de su uso.

Los anuncios de adición, redirección y retirada se publican en el [changelog del servicio](https://llmaas.status.cloud-temple.app/changelog). Para una necesidad de estabilidad o soporte particular, contacte con el soporte para precisar las modalidades aplicables.

### Redirecciones y antiguos identificadores

Algunos antiguos identificadores se redirigen hacia un modelo sucesor. Una solicitud puede por tanto seguir funcionando mientras es tratada por otro modelo. La continuidad de la llamada API no garantiza respuestas idénticas, ni las mismas capacidades, latencias o límites de contexto.

### Migración hacia otro modelo

1. Identifique el modelo concernido, el plazo y el sucesor recomendado en el [ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle).
2. Verifique el identificador del sucesor con `GET /v1/models` y sus capacidades : visión, llamadas a herramientas, razonamiento y contexto según su uso.
3. Pruebe el sucesor en una muestra representativa de sus solicitudes : calidad, formatos de salida, herramientas, latencia y consumo.
4. Actualice el parámetro `model` en la configuración de su aplicación tras la validación, y luego supervise los resultados.
5. Para los embeddings, prevé recalcular los vectores y reconstruir el índice si el modelo cambia.

### Modelos obsoletos

La lista y los destinos de migración están disponibles en el [catálogo de ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle). Si no se indica ninguna migración, contacte con el soporte antes del plazo para elegir una solución adecuada.

## Responsabilidades

El reparto de responsabilidades entre el cliente y Cloud Temple se detalla en la [matriz de responsabilidades (RACI) LLMaaS](../contractual/llmaas/raci.md).

## Reversibilidad

- **Ningún dato que recuperar**: el servicio no conserva ni los prompts ni las respuestas tras el tratamiento. Solo los resultados de un procesamiento por lotes deben recuperarse antes de su purga: consulte las [condiciones de conservación](./batch.md#límites-y-retención).
- **Portabilidad de las aplicaciones**: la API sigue el formato de OpenAI para las llamadas admitidas. Una aplicación que se limita a estas llamadas puede reconfigurarse hacia otro proveedor compatible cambiando la URL base y la clave de API, tras verificar el modelo y los parámetros. El procesamiento por lotes utiliza un contrato propio de Cloud Temple.
- **Embeddings**: los vectores dependen del modelo de embedding; un cambio de modelo obliga a recalcularlos.

<a id="cálculo-de-costes"></a>

## Precios

Los precios de LLMaaS se publican en la página del producto del sitio web de Cloud Temple:
[LLMaaS — precios](https://www.cloud-temple.com/produits/large-language-model-as-a-service-llmaas/).

El coste depende de los volúmenes consumidos en cada una de las [unidades de facturación](#unidades-de-facturación).

<a id="-buenas-prácticas"></a>

<a id="optimización"></a>

## Buenas prácticas

Para sacar el máximo partido de la API LLMaaS, es esencial adoptar estrategias de optimización de costes, rendimiento y seguridad.

### Optimización de Costes

El control de los costes se basa en un uso inteligente de los tokens y los modelos.

1.  **Elección del Modelo** : Compare varios modelos en ejemplos representativos de su uso. Quedese con el que responda a sus requisitos de calidad y latencia, y luego mida su consumo de tokens. Consulte el [catálogo de ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle) para identificar los modelos disponibles y sus sucesores. La facturación depende de la tarifa aplicable y de los volúmenes consumidos; el tamaño del modelo por sí solo no determina el coste facturado.

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

3.  **Limitación de Tokens de Salida** : Utilice siempre el parámetro `max_tokens` para evitar respuestas excesivamente largas y costosas. Fije un límite razonable en función de lo que espera.
    ```python
    # Pedir un resumen de máximo 100 palabras.
    response = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Résume ce document..."}],
        max_tokens=150, # Margen de seguridad para ~100 palabras
    )
    ```

### Rendimiento

La reactividad de su aplicación depende de la manera en que gestione las llamadas a la API.

1.  **Síncronas Asíncronas** : Para procesar varias solicitudes sin esperar a que finalice cada una, utilice llamadas asíncronas. Esto es especialmente útil para aplicaciones backend que procesan un gran volumen de solicitudes simultáneas.
    ```python
    import asyncio
    from openai import AsyncOpenAI

    client = AsyncOpenAI(api_key="...", base_url="...")

    async def process_prompt(prompt: str):
        # Procesa una sola solicitud de manera asíncrona
        response = await client.chat.completions.create(model="gpt-oss:120b", messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content

    async def batch_requests(prompts: list):
        # Lanza varias tareas en paralelo y espera su finalización
        tasks = [process_prompt(p) for p in prompts]
        return await asyncio.gather(*tasks)
    ```

2.  **Streaming para la Experiencia de Usuario (UX)** : Para las interfaces de usuario (chatbots, asistentes), el streaming es esencial. Permite mostrar la respuesta del modelo palabra por palabra, dando una impresión de reactividad inmediata en lugar de esperar a la respuesta completa.
    ```python
    # Muestra la respuesta en tiempo real en una interfaz de usuario
    response_stream = client.chat.completions.create(
        model="gpt-oss:120b",
        messages=[{"role": "user", "content": "Raconte-moi une histoire."}],
        stream=True
    )
    for chunk in response_stream:
        if chunk.choices[0].delta.content:
            # Mostrar el fragmento de texto en la UI
            print(chunk.choices[0].delta.content, end="", flush=True)
    ```

### Seguridad

La seguridad de tu aplicación es primordial, especialmente cuando se procesan entradas del usuario.

1.  **Validación y Limpieza de Entradas (Sanitization)**: Nunca confíes en las entradas del usuario. Antes de enviarlas a la API, límpialas para eliminar cualquier código potencialmente malicioso o instrucciones de "inyección de prompt". También limita su tamaño para evitar abusos.
    ```python
    def sanitize_input(user_input: str) -> str:
        # Ejemplo simple: eliminar delimitadores de código y limitar la longitud.
        # Se pueden utilizar bibliotecas más robustas para una sanitización avanzada.
        cleaned = user_input.replace("`", "").replace("'", "").replace("\"", "")
        return cleaned[:2000]  # Limita el tamaño a 2000 caracteres
    ```

2.  **Gestión Robusta de Errores**: Envuelve siempre tus llamadas a la API en bloques `try...except` para gestionar errores de red, errores de la API (por ejemplo, 429 Límite de tasa, 500 Error interno del servidor) y proporcionar una experiencia de usuario degradada pero funcional.
    ```python
    from openai import APIError, APITimeoutError

    try:
        response = client.chat.completions.create(...)
    except APITimeoutError:
        # Gestionar el caso en que la solicitud tarda demasiado
        return "El servicio tarda más de lo previsto, por favor inténtelo de nuevo."
    except APIError as e:
        # Gestionar errores específicos de la API
        logger.error(f"Error API LLMaaS: {e.status_code} - {e.message}")
        return "Lo sentimos, ha ocurrido un error con el servicio de IA."
    except Exception as e:
        # Gestionar todos los demás errores (red, etc.)
        logger.error(f"Ha ocurrido un error inesperado: {e}")
        return "Lo sentimos, ha ocurrido un error inesperado."
    ```
