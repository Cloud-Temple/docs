---
title: OCR Tutorial
sidebar_position: 4
---

# Guide: Mastering OCR with DeepSeek

This guide details the use of the **DeepSeek-OCR** model, a cutting-edge solution for optical context compression and document analysis.

:::info[OCR Model Availability]
This guide describes the integration of DeepSeek-OCR. Before using it, verify that the model is exposed via `GET /v1/models` and consult the [catalog and lifecycle](https://llmaas.status.cloud-temple.app/lifecycle). If it is not available, select a suitable vision model and use the corresponding request format; the specific parameters in this guide are not universal.
:::

## Architecture and Operation

Unlike traditional OCR, DeepSeek-OCR is an end-to-end Vision-Language model designed to visually "read" and "understand" documents.

### Technical Architecture
It combines two innovative components:
1.  **DeepEncoder (380M)**: A hybrid visual encoder that combines **SAM-base** (for local perception) and **CLIP-large** (for global knowledge), connected by a 16x convolutional compressor. This enables processing high-resolution images with very few visual tokens.
2.  **MoE Decoder (3B)**: Based on DeepSeek3B-MoE (570M active parameters), it generates structured text from the compressed visual tokens.

### Resolution Modes and Consumption
The model adapts its token consumption to the image resolution. The larger the image, the more tokens it consumes, but the higher the accuracy.

| Mode | Resolution (px) | Vision Tokens | Recommended Usage |
| :--- | :--- | :--- | :--- |
| **Tiny** | 512 x 512 | 64 | Slides, very large text |
| **Small** | 640 x 640 | 100 | Simple documents, tickets |
| **Base** | 1024 x 1024 | 256 | Standard A4 pages |
| **Large** | 1280 x 1280 | 400 | Dense documents, small font |
| **Gundam** | Dynamic | ~800 | Newspapers, blueprints, complex scans |

:::tip[Optimisation]
To optimize your costs and latency, resize your images to the minimum resolution required to keep the text readable.
:::

### Multilingual Support
The model was trained on a large corpus of multilingual documents and supports the recognition of nearly **100 languages** (including French, English, Chinese, Arabic, etc.), with or without layout preservation.

## Prompt Guide (Prompt engineering)

The quality of the output depends directly on the prompt used. DeepSeek-OCR responds to specific instructions to activate its various capabilities.

### 1. Standard OCR (Markdown)
To extract text along with its structure (headings, paragraphs, tables).

**Prompt:**
> `Convert the document to markdown.`

**Result:** Structured text, formatted tables, preserved layout.

### 2. "Deep parsing" (Figures, charts, formulas)
To analyze the semantic content of charts, chemical or geometric formulas.

**Prompt :**
> `Parse the figure.`

**Capabilities :**
-   **Charts (Bar/Line/Pie)** : Converts to HTML or Markdown table.
-   **Chemical Formulas** : Converts to SMILES format.
-   **Geometry** : Describes geometric elements.

### 3. Grounding (localization)
To find the coordinates of a specific element in the image.

**Prompt :**
> `Locate <|ref|>élément à trouver<|/ref|> in the image.`

**Example :** `Locate <|ref|>Total<|/ref|> in the image.`
**Result :** Returns the coordinates of the element's bounding box.

### 4. Object Detection
To list and locate all visible objects.

**Prompt :**
> `Identify all objects in the image and output them in bounding boxes.`

## Implementation Tutorial (Python)

Here is a complete example showing how to structure your API call to use these capabilities.

### Prerequisites: image format and dependencies
-   **Format** : JPEG or PNG.
-   **Mode** : RGB (no Alpha transparency).
-   **PDF** : Must be converted to images beforehand (150-300 DPI).
-   **Size** : It is recommended to resize very high-resolution images to avoid size limit errors (413 Payload Too Large).

Install the required libraries:
```bash
pip install requests Pillow
```

### Code: Document Analysis (OCR)

Let's take the example of this Swiss receipt:

![Ticket de caisse exemple](@site/docs/llmaas/images/ReceiptSwiss.jpg)

Here is a robust script that handles optimal image resizing and encoding:

```python
import base64
import io
import requests
from PIL import Image

# Configuration
API_KEY = "VOTRE_TOKEN_API"
API_URL = "https://api.ai.cloud-temple.com/v1/chat/completions"
IMAGE_PATH = "ReceiptSwiss.jpg" # Assurez-vous que l'image est dans le dossier courant

def encode_image_optimized(path):
    """
    Optimise l'image (redimensionnement + compression JPEG) pour l'API.
    """
    with Image.open(path) as img:
        # 1. RGB conversion (to avoid PNG/Alpha issues)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 2. Smart resizing if too large (> 2048px)
        # This avoids the 413 error (Payload Too Large) and speeds up processing
        max_size = 2048
        if max(img.size) > max_size:
            img.thumbnail((max_size, max_size))
            
        # 3. In-memory JPEG compression
        buffer = io.BytesIO()
        img.save(buffer, format="JPEG", quality=85)
        
        return base64.b64encode(buffer.getvalue()).decode('utf-8')

# 1. Construction of the multimodal message
encoded_image = encode_image_optimized(IMAGE_PATH)

payload = {
    "model": "deepseek-ai/DeepSeek-OCR",
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Convert the document to markdown." # Prompt OCR Standard
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
    "temperature": 0.0, # CRUCIAL : 0.0 pour la fidélité
    "max_tokens": 4096
}

# 2. Sending
print("Envoi de la requête...")
response = requests.post(
    API_URL, 
    headers={"Authorization": f"Bearer {API_KEY}"}, 
    json=payload
)

# 3. Result
if response.status_code == 200:
    print("\n--- Résultat OCR ---\n")
    print(response.json()['choices'][0]['message']['content'])
else:
    print(f"Erreur {response.status_code}: {response.text}")
```

**Example output:**
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

### Code: chart analysis (deep parsing)

To analyze a financial chart in a report, simply change the prompt text in the payload above:

```python
# ... in the payload ...
"text": "Parse the figure." 
# ...
```

The model will return a textual or tabular representation of the chart data.

## Advanced Use Cases

### Extraction of Complex Tables
DeepSeek-OCR excels at converting tables, even without clear demarcation lines.

**Input Image:**

![Tableau financier](@site/docs/llmaas/images/tableau.png)

**Model Output (Prompt: "Convert the document to markdown table.") :**
```markdown
# PaaS RESOURCES

## laaS Red Hat OpenShift Work Units - on-demand - 12-month reservation - Excluding OpenShift license

|    | Unit    | Unit Price € excl. VAT/month | Commitment |
|---|---|---|---|
| OPENSHIFT - Control Plane - 3 nodes - FR1 Region    | 1 dedicated plan    | 1 956,81 €    | 12 months    |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers    | 834,62 €    | 12 months    |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 cores / 40 threads - 128 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers    | 2 756,21 €    | 12 months    |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers    | 5 812,82 €    | 12 months    |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers    | 8 413,27 €    | 12 months    |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 TB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedicated workers    | 13 835,78 €    | 12 months    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 GB RAM - 512 GiB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedicated workers + GPU    | 13 378,32 €    | 12 months    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 GB RAM - 512 GiB FLASH 1500 IOPS - 2xNVIDIA H100 80GB) | 3 dedicated workers + GPU    | 26 954,41 €    | 24 months    |

---

## Managed Kubernetes Work Units - (excluding infrastructure)

|    | Unit    | Unit Price € excl. VAT/month | Commitment |
|---|---|---|---|
| MANAGED KUBERNETES - PRODUCTION (including 3 Worker Nodes)    | 1 virtual cluster    | 2 250,00 €    | 1 month    |
| MANAGED KUBERNETES - DEV/TEST/STAGING (including 3 Worker Nodes)    | 1 virtual cluster    | 1 500,00 €    | 1 month    |
| Additional WORKER NODE for Managed Kubernetes - PRODUCTION    | 1 additional worker node    | 450,00 €    | 1 month    |
| Additional WORKER NODE for Managed Kubernetes - DEV/TEST/STAGING    | 3 additional worker nodes    | 300,00 €    | 1 month    |

---

## AI Work Units - LLMaas

|    | Unit    | Unit Price € excl. VAT/month | Commitment |
|---|---|---|---|
| LLMaas - ingested tokens (input) / millions    | 1 million tokens    | 0,90 €    | N/A    |
| LLMaas - generated tokens (output) / millions    | 1 million tokens    | 4,00 €    | N/A    |
| LLMaas - reasoning tokens / millions    | 1 million tokens    | 21,00 €    | N/A    |
| LLMaas - speech to text / minute    | 1 minute    | 0,010 €    | N/A    |
| LLMaas - text to speech / minute    | 1 minute    | 0,010 €    | N/A    |
```

### Mathematical Formulas (LaTeX)
Ideal for academic documents. The model recognizes equations and outputs them in standard LaTeX syntax.

**Input Image:**

![Equation](@site/docs/llmaas/images/equation.png)

**Model Output (Prompt: "Convert to latex.") :**

> Here is the mathematical rendering of the OCR result:

Mean square error:

$$
\frac{1}{T} \int_{-T/2}^{T/2} \left[ f(t) - T_N(t) \right]^2 dt = E_N \left( a_0, \ldots, a_N; b_1, \ldots, b_N \right)
$$

Condition for minimum of $E_N$ in:

$$
\frac{\partial E_N}{\partial a_0} = 0, \frac{\partial E_N}{\partial a_i} = 0, \ldots, \frac{\partial E_N}{\partial b_N} = 0
$$

(2n+1) equations:

$$
\frac{\partial E_N}{\partial a_i} = \frac{1}{T} \int_{-T/2}^{T/2} \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right)^2 dt = \frac{1}{T} \int_{-T/2}^{T/2} \left\{ 2 \left( f(t) - T_N(t) \right) \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right) \right\} dt
$$

$$
= -\frac{1}{T} \int_{-T/2}^{T/2} 2 \left( f(t) - T_N(t) \right) \cos i \omega t dt = 0 \quad \text{for stationary point.}
$$

$$
\frac{2}{T} \int_{-T/2}^{T/2} f(t) \cos i \omega t dt = \frac{2}{T} \int_{-T/2}^{T/2} \left[ \frac{a_0}{2} + \sum_{n=1}^{N} \left( a_n \cos n \omega t + b_n \sin n \omega t \right) \right] \cos i \omega t dt \quad i \neq 0
$$

## Known Limitations

-   **Orientation** : The model does not support automatic rotation. Ensure your images are properly oriented (horizontal text).
-   **Handwritten Text** : Although performant, the error rate is higher for complex cursive handwriting than for printed text.
-   **Very High Resolution** : Images exceeding the dimensions of "Gundam" mode (~2000x2000) are resized, which may render microscopic text unreadable. Crop very large images into multiple images.