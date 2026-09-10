---
title: OCR-Tutorial
sidebar_position: 4
---

# Leitfaden: OCR mit DeepSeek beherrschen

Dieser Leitfaden beschreibt die Verwendung des Modells **DeepSeek-OCR**, einer führenden Lösung für die optische Kontextkomprimierung und Dokumentenanalyse.

:::info[Verfügbarkeit des OCR-Modells]
Dieser Leitfaden beschreibt die Integration von DeepSeek-OCR. Bevor Sie es verwenden, stellen Sie sicher, dass das Modell über `GET /v1/models` verfügbar ist, und konsultieren Sie den [catalogue et cycle de vie](https://llmaas.status.cloud-temple.app/lifecycle). Falls es nicht verfügbar ist, wählen Sie ein geeignetes Vision-Modell und verwenden Sie das entsprechende Anfrageformat; die spezifischen Parameter dieses Leitfadens sind nicht universell anwendbar.
:::

## Architektur und Funktionsweise

Im Gegensatz zu herkömmlichen OCR-Systemen ist DeepSeek-OCR ein End-to-End Vision-Language-Modell, das entwickelt wurde, um Dokumente visuell zu "lesen" und zu "verstehen".

### Technische Architektur
Er kombiniert zwei innovative Komponenten :
1.  **DeepEncoder (380M)** : Ein hybrider visueller Encoder, der **SAM-base** (für die lokale Wahrnehmung) und **CLIP-large** (für globales Wissen) kombiniert, verbunden durch einen 16x konvolutionellen Kompressor. Dies ermöglicht die Verarbeitung von Bildern mit hoher Auflösung mit sehr wenigen visuellen Tokens.
2.  **MoE-Decoder (3B)** : Basierend auf DeepSeek3B-MoE (570M aktive Parameter) generiert er strukturierten Text aus den komprimierten visuellen Tokens.

### Auflösungsmodi und Tokenverbrauch
Das Modell passt seinen Tokenverbrauch an die Auflösung des Bildes an. Je größer das Bild, desto mehr Tokens werden verbraucht, desto höher ist jedoch die Genauigkeit.

| Modus | Auflösung (px) | Vision-Tokens | Empfohlene Verwendung |
| :--- | :--- | :--- | :--- |
| **Tiny** | 512 x 512 | 64 | Folien, sehr großer Text |
| **Small** | 640 x 640 | 100 | Einfache Dokumente, Belege |
| **Base** | 1024 x 1024 | 256 | Standard-A4-Seiten |
| **Large** | 1280 x 1280 | 400 | Dichte Dokumente, kleine Schrift |
| **Gundam** | Dynamisch | ~800 | Zeitungen, Pläne, komplexe Scans |

:::tip[Optimierung]
Um Ihre Kosten und die Latenz zu optimieren, skalieren Sie Ihre Bilder auf die minimale Auflösung herunter, die erforderlich ist, damit der Text lesbar bleibt.
:::

### Mehrsprachige Unterstützung
Das Modell wurde auf einem umfangreichen Korpus mehrsprachiger Dokumente trainiert und unterstützt die Erkennung von nahezu **100 Sprachen** (darunter Französisch, Englisch, Chinesisch, Arabisch usw.), mit oder ohne Beibehaltung des Layouts.

## Leitfaden für Prompts (Prompt engineering)

Die Qualität des Ergebnisses hängt direkt vom verwendeten Prompt ab. DeepSeek-OCR reagiert auf spezifische Anweisungen, um seine verschiedenen Fähigkeiten zu aktivieren.

### 1. Standard-OCR (Markdown)
Zum Extrahieren des Textes mit seiner Struktur (Überschriften, Absätze, Tabellen).

**Prompt :**
> `Convert the document to markdown.`

**Ergebnis :** Strukturierter Text, formatierte Tabellen, beibehaltenes Layout.

### 2. "Deep parsing" (Figures, graphiques, formules)
Zur Analyse des semantischen Inhalts von Diagrammen, chemischen oder geometrischen Formeln.

**Prompt :**
> `Parse the figure.`

**Fähigkeiten :**
-   **Graphiques (Bar/Line/Pie)** : Konvertiert in eine HTML- oder Markdown-Tabelle.
-   **Formules Chimiques** : Konvertiert in das SMILES-Format.
-   **Géométrie** : Décrit les éléments géométriques.

### 3. Grounding (Lokalisierung)
Um die Koordinaten eines bestimmten Elements im Bild zu finden.

**Prompt :**
> `Locate <|ref|>élément à trouver<|/ref|> in the image.`

**Beispiel :** `Locate <|ref|>Total<|/ref|> in the image.`
**Ergebnis :** Gibt die Koordinaten der umschließenden Box (Bounding Box) des Elements zurück.

### 4. Objekterkennung
Um alle sichtbaren Objekte aufzulisten und zu lokalisieren.

**Prompt :**
> `Identify all objects in the image and output them in bounding boxes.`

## Implementierungstutorial (Python)

Hier finden Sie ein vollständiges Beispiel, das zeigt, wie Sie Ihre API-Anfrage strukturieren, um diese Funktionen zu nutzen.

### Voraussetzungen : Bildformat und Abhängigkeiten
-   **Format** : JPEG oder PNG.
-   **Modus** : RGB (keine Alpha-Transparenz).
-   **PDF** : Müssen zuvor in Bilder konvertiert werden (150-300 DPI).
-   **Größe** : Es wird empfohlen, Bilder mit sehr hoher Auflösung zu skalieren, um Fehler aufgrund der Größenbeschränkung (413 Payload Too Large) zu vermeiden.

Installieren Sie die erforderlichen Bibliotheken :
```bash
pip install requests Pillow
```

### Code: Dokumentenanalyse (OCR)

Nehmen wir das Beispiel dieses Schweizer Kassenzettels:

![Beispiel-Kassenzettel](@site/docs/llmaas/images/ReceiptSwiss.jpg)

Hier ist ein robustes Skript, das die optimale Bildskalierung und -kodierung übernimmt:

```python
import base64
import io
import requests
from PIL import Image

# Konfiguration
API_KEY = "VOTRE_TOKEN_API"
API_URL = "https://api.ai.cloud-temple.com/v1/chat/completions"
IMAGE_PATH = "ReceiptSwiss.jpg" # Assurez-vous que l'image est dans le dossier courant

def encode_image_optimized(path):
    """
    Optimise l'image (redimensionnement + compression JPEG) pour l'API.
    """
    with Image.open(path) as img:
        # 1. RGB-Konvertierung (um PNG/Alpha-Probleme zu vermeiden)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 2. Intelligente Größenanpassung bei zu großer Auflösung (> 2048px)
        # Dies vermeidet den Fehler 413 (Payload Too Large) und beschleunigt die Verarbeitung
        max_size = 2048
        if max(img.size) > max_size:
            img.thumbnail((max_size, max_size))
            
        # 3. JPEG-Komprimierung im Speicher
        buffer = io.BytesIO()
        img.save(buffer, format="JPEG", quality=85)
        
        return base64.b64encode(buffer.getvalue()).decode('utf-8')

# 1. Aufbau der multimodalen Nachricht
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

# 2. Absenden
print("Envoi de la requête...")
response = requests.post(
    API_URL, 
    headers={"Authorization": f"Bearer {API_KEY}"}, 
    json=payload
)

# 3. Ergebnis
if response.status_code == 200:
    print("\n--- Résultat OCR ---\n")
    print(response.json()['choices'][0]['message']['content'])
else:
    print(f"Erreur {response.status_code}: {response.text}")
```

**Beispielausgabe:**
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

### Code : Diagrammanalyse (deep parsing)

Um ein Finanzdiagramm in einem Bericht zu analysieren, ändern Sie einfach den Prompt-Text in der oben genannten Payload:

```python
# ... im Payload ...
"text": "Parse the figure." 
# ...
```

Das Modell gibt eine textuelle oder tabellarische Darstellung der Diagrammdaten zurück.

## Erweiterte Anwendungsfälle

### Extraktion komplexer Tabellen
DeepSeek-OCR überzeugt bei der Konvertierung von Tabellen, auch ohne klare Trennlinien.

**Eingabebild:**

![Tableau financier](@site/docs/llmaas/images/tableau.png)

**Modellausgabe (Prompt: "Convert the document to markdown table.") :**
```markdown
# RESSOURCES PaaS

## Leistungspositionen laaS Redhat Openshift - On-Demand - 12-Monats-Reservierung - Ohne Openshift-Lizenz

|    | Einheit    | Einzelpreis € netto/Monat | Laufzeit |
|---|---|---|---|
| OPENSHIFT - Control Plane - 3 Knoten - Region FR1    | 1 dedizierte Plane    | 1 956,81 €    | 12 Monate    |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 Kerne / 20 Threads - 64 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedizierte Worker    | 834,62 €    | 12 Monate    |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 Kerne / 40 Threads - 128 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedizierte Worker    | 2 756,21 €    | 12 Monate    |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 Kerne / 64 Threads - 384 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedizierte Worker    | 5 812,82 €    | 12 Monate    |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 Kerne / 96 Threads - 768 GB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedizierte Worker    | 8 413,27 €    | 12 Monate    |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 Kerne / 112 Threads - 1,5 TB RAM - 512 GiB FLASH 1500 IOPS) | 3 dedizierte Worker    | 13 835,78 €    | 12 Monate    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 Kerne / 64 Threads - 512 GB RAM - 512 GiB FLASH 1500 IOPS - 2xNVIDIA L40S 48GB) | 3 dedizierte Worker + GPU    | 13 378,32 €    | 12 Monate    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 Kerne / 64 Threads - 512 GB RAM - 512 GiB FLASH 1500 IOPS - 2xNVIDIA H100 80GB) | 3 dedizierte Worker + GPU    | 26 954,41 €    | 24 Monate    |

---

## Leistungspositionen Kubernetes Manage - (ohne Infrastruktur)

|    | Einheit    | Einzelpreis € netto/Monat | Laufzeit |
|---|---|---|---|
| KUBERNETES MANAGE - PRODUCTION (inkl. 3 Worker Nodes)    | 1 virtueller Cluster    | 2 250,00 €    | 1 Monat    |
| KUBERNETES MANAGE - DEV/TEST/ABNAHME (inkl. 3 Worker Nodes)    | 1 virtueller Cluster    | 1 500,00 €    | 1 Monat    |
| Zusätzlicher WORKER NODE für Kubernetes Manage - PRODUCTION    | 1 zusätzlicher Worker Node    | 450,00 €    | 1 Monat    |
| Zusätzlicher WORKER NODE für Kubernetes Manage - DEV/TEST/ABNAHME    | 3 zusätzliche Worker Nodes    | 300,00 €    | 1 Monat    |

---

## Leistungspositionen KI - LLMaas

|    | Einheit    | Einzelpreis € netto/Monat | Laufzeit |
|---|---|---|---|
| LLMaas - verbrauchte Tokens (Input) / Millionen    | 1 Million Tokens    | 0,90 €    | N/A    |
| LLMaas - generierte Tokens (Output) / Millionen    | 1 Million Tokens    | 4,00 €    | N/A    |
| LLMaas - Reasoning-Tokens / Millionen    | 1 Million Tokens    | 21,00 €    | N/A    |
| LLMaas - Sprache zu Text / Minute    | 1 Minute    | 0,010 €    | N/A    |
| LLMaas - Text zu Sprache / Minute    | 1 Minute    | 0,010 €    | N/A    |
```

### Mathematische Formeln (LaTeX)
Ideal für akademische Dokumente. Das Modell erkennt Gleichungen und gibt sie in der standardmäßigen LaTeX-Syntax aus.

**Eingabebild:**

![Equation](@site/docs/llmaas/images/equation.png)

**Modellausgabe (Prompt: "Convert to latex.") :**

> Hier ist die mathematische Darstellung des OCR-Ergebnisses:

Mittlerer quadratischer Fehler:

$$
\frac{1}{T} \int_{-T/2}^{T/2} \left[ f(t) - T_N(t) \right]^2 dt = E_N \left( a_0, \ldots, a_N; b_1, \ldots, b_N \right)
$$

Bedingung für das Minimum von $E_N$ in:

$$
\frac{\partial E_N}{\partial a_0} = 0, \frac{\partial E_N}{\partial a_i} = 0, \ldots, \frac{\partial E_N}{\partial b_N} = 0
$$

(2n+1) Gleichungen:

$$
\frac{\partial E_N}{\partial a_i} = \frac{1}{T} \int_{-T/2}^{T/2} \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right)^2 dt = \frac{1}{T} \int_{-T/2}^{T/2} \left\{ 2 \left( f(t) - T_N(t) \right) \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right) \right\} dt
$$

$$
= -\frac{1}{T} \int_{-T/2}^{T/2} 2 \left( f(t) - T_N(t) \right) \cos i \omega t dt = 0 \quad \text{for stationary point.}
$$

$$
\frac{2}{T} \int_{-T/2}^{T/2} f(t) \cos i \omega t dt = \frac{2}{T} \int_{-T/2}^{T/2} \left[ \frac{a_0}{2} + \sum_{n=1}^{N} \left( a_n \cos n \omega t + b_n \sin n \omega t \right) \right] \cos i \omega t dt \quad i \neq 0
$$

## Bekannte Einschränkungen

-   **Ausrichtung** : Das Modell unterstützt keine automatische Drehung. Stellen Sie sicher, dass Ihre Bilder korrekt ausgerichtet sind (horizontaler Text).
-   **Handschrift** : Obwohl leistungsstark, ist die Fehlerrate bei komplexer kursiver Handschrift höher als bei gedrucktem Text.
-   **Sehr hohe Auflösung** : Bilder, die die Abmessungen des "Gundam"-Modus (~2000x2000) überschreiten, werden skaliert, wodurch mikroskopisch kleiner Text unleserlich werden kann. Teilen Sie sehr große Aufnahmen in mehrere Bilder auf.