---
title: Tutorial de OCR
sidebar_position: 4
---

# Guía : Dominar el OCR con DeepSeek

Esta guía detalla el uso del modelo **DeepSeek-OCR**, una solución de vanguardia para la compresión óptica de contexto y el análisis de documentos.

:::info[Disponibilidad del modelo OCR]
Esta guía describe la integración de DeepSeek-OCR. Antes de utilizarlo, verifique que el modelo esté expuesto mediante `GET /v1/models` y consulte el [catálogo y ciclo de vida](https://llmaas.status.cloud-temple.app/lifecycle). Si no está disponible, seleccione un modelo de visión adecuado y utilice el formato de solicitud correspondiente; los parámetros específicos de esta guía no son universales.
:::

## Arquitectura y funcionamiento

A diferencia de los OCR tradicionales, DeepSeek-OCR es un modelo de Visión-Lenguaje de extremo a extremo diseñado para "leer" y "comprender" visualmente los documentos.

### Arquitectura técnica
Combina dos componentes innovadores:
1.  **DeepEncoder (380M)** : Un codificador visual híbrido que combina **SAM-base** (para la percepción local) y **CLIP-large** (para el conocimiento global), conectados mediante un compresor convolucional 16x. Esto permite procesar imágenes de alta resolución con muy pocos tokens visuales.
2.  **Decodificador MoE (3B)** : Basado en DeepSeek3B-MoE (570M parámetros activos), genera el texto estructurado a partir de los tokens visuales comprimidos.

### Modos de resolución y consumo
El modelo adapta su consumo de tokens a la resolución de la imagen. Cuanto mayor sea la imagen, más tokens consumirá, pero mayor será la precisión.

| Modo | Resolución (px) | Tokens de visión | Uso recomendado |
| :--- | :--- | :--- | :--- |
| **Tiny** | 512 x 512 | 64 | Diapositivas, texto muy grande |
| **Small** | 640 x 640 | 100 | Documentos simples, tickets |
| **Base** | 1024 x 1024 | 256 | Páginas A4 estándar |
| **Large** | 1280 x 1280 | 400 | Documentos densos, caracteres pequeños |
| **Gundam** | Dinámica | ~800 | Periódicos, planos, escaneos complejos |

:::tip[Optimización]
Para optimizar sus costos y la latencia, redimensione sus imágenes a la resolución mínima necesaria para que el texto siga siendo legible.
:::

### Soporte multilingüe
El modelo ha sido entrenado en un vasto corpus de documentos multilingües y soporta el reconocimiento de casi **100 idiomas** (incluidos el francés, el inglés, el chino, el árabe, etc.), con o sin preservación del formato.

## Guía de prompts (Prompt engineering)

La calidad del resultado depende directamente del prompt utilizado. DeepSeek-OCR responde a instrucciones específicas para activar sus diferentes capacidades.

### 1. OCR estándar (Markdown)
Para extraer el texto con su estructura (títulos, párrafos, tablas).

**Prompt :**
> `Convert the document to markdown.`

**Resultado :** Texto estructurado, tablas formateadas, diseño preservado.

### 2. "Deep parsing" (Figuras, gráficos, fórmulas)
Para analizar el contenido semántico de gráficos, de fórmulas químicas o geométricas.

**Prompt :**
> `Parse the figure.`

**Capacidades :**
-   **Gráficos (Bar/Line/Pie)** : Convierte en tabla HTML o Markdown.
-   **Fórmulas Químicas** : Convierte al formato SMILES.
-   **Geometría** : Describe los elementos geométricos.

### 3. Grounding (localización)
Para encontrar las coordenadas de un elemento específico en la imagen.

**Prompt :**
> `Locate <|ref|>élément à trouver<|/ref|> in the image.`

**Ejemplo :** `Locate <|ref|>Total<|/ref|> in the image.`
**Resultado :** Devuelve las coordenadas de la caja delimitadora (bounding box) del elemento.

### 4. Detección de objetos
Para listar y localizar todos los objetos visibles.

**Prompt :**
> `Identify all objects in the image and output them in bounding boxes.`

## Tutorial de implementación (Python)

A continuación se presenta un ejemplo completo que muestra cómo estructurar su llamada a la API para utilizar estas capacidades.

### Prerrequisitos: formato de la imagen y dependencias
-   **Formato** : JPEG o PNG.
-   **Modo** : RGB (sin transparencia Alpha).
-   **PDF** : Deben convertirse en imágenes previamente (150-300 DPI).
-   **Tamaño** : Se recomienda redimensionar las imágenes de muy alta resolución para evitar errores de límite de tamaño (413 Payload Too Large).

Instale las bibliotecas necesarias:
```bash
pip install requests Pillow
```

### Código: análisis de documentos (OCR)

Tomemos el ejemplo de este ticket de caja suizo:

![Ticket de caja ejemplo](@site/docs/llmaas/images/ReceiptSwiss.jpg)

Aquí tienes un script robusto que maneja el redimensionamiento y la codificación óptima de la imagen:

```python
import base64
import io
import requests
from PIL import Image

# Configuración
API_KEY = "VOTRE_TOKEN_API"
API_URL = "https://api.ai.cloud-temple.com/v1/chat/completions"
IMAGE_PATH = "ReceiptSwiss.jpg" # Asegúrese de que la imagen esté en el directorio actual

def encode_image_optimized(path):
    """
    Optimise l'image (redimensionnement + compression JPEG) pour l'API.
    """
    with Image.open(path) as img:
        # 1. Conversión a RGB (para evitar problemas con PNG/Alpha)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 2. Redimensionamiento inteligente si es demasiado grande (> 2048px)
        # Esto evita el error 413 (Payload Too Large) y acelera el procesamiento
        max_size = 2048
        if max(img.size) > max_size:
            img.thumbnail((max_size, max_size))
            
        # 3. Compresión JPEG en memoria
        buffer = io.BytesIO()
        img.save(buffer, format="JPEG", quality=85)
        
        return base64.b64encode(buffer.getvalue()).decode('utf-8')

# 1. Construcción del mensaje multimodal
encoded_image = encode_image_optimized(IMAGE_PATH)

payload = {
    "model": "deepseek-ai/DeepSeek-OCR",
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Convert the document to markdown." # Prompt OCR Estándar
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/jpeg;base64,{encoded_image}"
                    }
                }
            ]
        }
    ],
    "temperature": 0.0, # CRUCIAL: 0.0 para la fidelidad
    "max_tokens": 4096
}

# 2. Envío
print("Envoi de la requête...")
response = requests.post(
    API_URL, 
    headers={"Authorization": f"Bearer {API_KEY}"}, 
    json=payload
)

# 3. Resultado
if response.status_code == 200:
    print("\n--- Résultat OCR ---\n")
    print(response.json()['choices'][0]['message']['content'])
else:
    print(f"Erreur {response.status_code}: {response.text}")
```

**Ejemplo de salida :**
```markdown
# Berghotel
**Grosse Scheidegg**
3818 Grindelwald
Familie R. Müller

Rech. Nr.  4572
Bar    Tisch   7/01

2xLatte Macchiato    à   4.50 CHF   9.00
1xGloki    à   5.00 CHF   5.00
...

**Total :** CHF **54.50**
**Incl. 7.6% MwSt** 54.50 CHF: 3.85
```

### Código: análisis de gráfico (deep parsing)

Para analizar un gráfico financiero en un informe, simplemente cambie el texto del prompt en el payload anterior:

```python
# ... en el payload ...
"text": "Parse the figure." 
# ...
```

El modelo devolverá una representación textual o tabular de los datos del gráfico.

## Casos de uso avanzados

### Extracción de tablas complejas
DeepSeek-OCR destaca en la conversión de tablas, incluso sin líneas de delimitación claras.

**Imagen de Entrada :**

![Tableau financier](@site/docs/llmaas/images/tableau.png)

**Salida del Modelo (Prompt: "Convert the document to markdown table.") :**
```markdown
# RECURSOS PaaS

## Unidades de obra laaS Redhat Openshift - bajo demanda - reserva 12 meses - Sin licencia Openshift

|    | Unidad    | Precio unitario € HT/mes | Compromiso |
|---|---|---|---|
| OPENSHIFT - Plano de control - 3 nodos - Región FR1    | 1 plano dedicado    | 1 956,81 €    | 12 meses    |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 núcleos / 20 hilos - 64 Go de RAM - 512 Gio FLASH 1500 ips) | 3 workers dedicados    | 834,62 €    | 12 meses    |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 núcleos / 40 hilos - 128 Go de RAM - 512 Gio FLASH 1500 ips) | 3 workers dedicados    | 2 756,21 €    | 12 meses    |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 núcleos / 64 hilos - 384 Go de RAM - 512 Gio FLASH 1500 ips) | 3 workers dedicados    | 5 812,82 €    | 12 meses    |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 núcleos / 96 hilos - 768 Go de RAM - 512 Gio FLASH 1500 ips) | 3 workers dedicados    | 8 413,27 €    | 12 meses    |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 núcleos / 112 hilos - 1.5 To de RAM - 512 Gio FLASH 1500 ips) | 3 workers dedicados    | 13 835,78 €    | 12 meses    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 núcleos / 64 hilos - 512 Go de RAM - 512 Gio FLASH 1500 ips - 2xNVIDIA L40S 48GO) | 3 workers dedicados + GPU    | 13 378,32 €    | 12 meses    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 núcleos / 64 hilos - 512 Go de RAM - 512 Gio FLASH 1500 ips - 2xNVIDIA H100 80GO) | 3 workers dedicados + GPU    | 26 954,41 €    | 24 meses    |

---

## Unidades de obra Kubernetes Manage - (sin infraestructura)

|    | Unidad    | Precio unitario € HT/mes | Compromiso |
|---|---|---|---|
| KUBERNETES MANAGE - PRODUCCIÓN (incluyendo 3 Worker Nodes)    | 1 clúster virtual    | 2 250,00 €    | 1 mes    |
| KUBERNETES MANAGE - DEV/TEST/RECETA (incluyendo 3 Worker Nodes)    | 1 clúster virtual    | 1 500,00 €    | 1 mes    |
| WORKER NODE adicional para Kubernetes Manage - PRODUCCIÓN    | 1 worker node adicional    | 450,00 €    | 1 mes    |
| WORKER NODE adicional para Kubernetes Manage - DEV/TEST/RECETA    | 3 worker node adicionales    | 300,00 €    | 1 mes    |

---

## Unidades de obra IA - LLMaas

|    | Unidad    | Precio unitario € HT/mes | Compromiso |
|---|---|---|---|
| LLMaas - tokens ingeridos (input) / millones    | 1 millón de tokens    | 0,90 €    | N/A    |
| LLMaas - tokens generados (output) / millones    | 1 millón de tokens    | 4,00 €    | N/A    |
| LLMaas - tokens de razonamiento / millones    | 1 millón de tokens    | 21,00 €    | N/A    |
| LLMaas - voz a texto / minuto    | 1 minuto    | 0,010 €    | N/A    |
| LLMaas - texto a voz / minuto    | 1 minuto    | 0,010 €    | N/A    |
```

### Fórmulas matemáticas (LaTeX)
Ideal para documentos académicos. El modelo reconoce las ecuaciones y las exporta en sintaxis LaTeX estándar.

**Imagen de Entrada :**

![Equation](@site/docs/llmaas/images/equation.png)

**Salida del Modelo (Prompt: "Convert to latex.") :**

> Aquí tienes la representación matemática del resultado del OCR :

Error cuadrático medio:

$$
\frac{1}{T} \int_{-T/2}^{T/2} \left[ f(t) - T_N(t) \right]^2 dt = E_N \left( a_0, \ldots, a_N; b_1, \ldots, b_N \right)
$$

Condición para el mínimo de $E_N$ en:

$$
\frac{\partial E_N}{\partial a_0} = 0, \frac{\partial E_N}{\partial a_i} = 0, \ldots, \frac{\partial E_N}{\partial b_N} = 0
$$

(2n+1) ecuaciones:

$$
\frac{\partial E_N}{\partial a_i} = \frac{1}{T} \int_{-T/2}^{T/2} \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right)^2 dt = \frac{1}{T} \int_{-T/2}^{T/2} \left\{ 2 \left( f(t) - T_N(t) \right) \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right) \right\} dt
$$

$$
= -\frac{1}{T} \int_{-T/2}^{T/2} 2 \left( f(t) - T_N(t) \right) \cos i \omega t dt = 0 \quad \text{for stationary point.}
$$

$$
\frac{2}{T} \int_{-T/2}^{T/2} f(t) \cos i \omega t dt = \frac{2}{T} \int_{-T/2}^{T/2} \left[ \frac{a_0}{2} + \sum_{n=1}^{N} \left( a_n \cos n \omega t + b_n \sin n \omega t \right) \right] \cos i \omega t dt \quad i \neq 0
$$

## Limitaciones conocidas

-   **Orientación** : El modelo no gestiona la rotación automática. Asegúrese de que sus imágenes estén bien orientadas (texto horizontal).
-   **Texto manuscrito** : Aunque es eficiente, la tasa de error es mayor en la escritura manuscrita cursiva compleja que en el texto impreso.
-   **Resolución muy alta** : Las imágenes que superen las dimensiones del modo "Gundam" (~2000x2000) se redimensionarán, lo que puede volver ilegible el texto microscópico. Divida los planos muy grandes en varias imágenes.