---
title: Tutorial OCR
sidebar_position: 4
---

# Guida : Padroneggiare l'OCR con DeepSeek

Questa guida descrive in dettaglio l'utilizzo del modello **DeepSeek-OCR**, una soluzione all'avanguardia per la compressione ottica del contesto e l'analisi dei documenti.

:::info[Disponibilità del modello OCR]
Questa guida descrive l'integrazione di DeepSeek-OCR. Prima di utilizzarlo, verifica che il modello sia esposto tramite `GET /v1/models` e consulta il [catalogo e ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle). Se non è disponibile, seleziona un modello di visione adatto e utilizza il formato della richiesta corrispondente; i parametri specifici di questa guida non sono universali.
:::

## Architettura e funzionamento

A differenza degli OCR tradizionali, DeepSeek-OCR è un modello Vision-Language end-to-end progettato per "leggere" e "comprendere" visivamente i documenti.

### Architettura tecnica
Combina due componenti innovativi:
1.  **DeepEncoder (380M)** : Un encoder visivo ibrido che combina **SAM-base** (per la percezione locale) e **CLIP-large** (per la conoscenza globale), collegati da un compressore convoluzionale 16x. Ciò consente di elaborare immagini ad alta risoluzione con un numero molto ridotto di token visivi.
2.  **Decoder MoE (3B)** : Basato su DeepSeek3B-MoE (570M parametri attivi), genera il testo strutturato a partire dai token visivi compressi.

### Modalità di risoluzione e consumo
Il modello adatta il consumo di token alla risoluzione dell'immagine. Più l'immagine è grande, più consuma token, ma maggiore è la precisione.

| Modalità | Risoluzione (px) | Token di visione | Utilizzo consigliato |
| :--- | :--- | :--- | :--- |
| **Tiny** | 512 x 512 | 64 | Presentazioni, testo molto grande |
| **Small** | 640 x 640 | 100 | Documenti semplici, scontrini |
| **Base** | 1024 x 1024 | 256 | Pagine A4 standard |
| **Large** | 1280 x 1280 | 400 | Documenti densi, caratteri piccoli |
| **Gundam** | Dinamica | ~800 | Giornali, piante, scansioni complesse |

:::tip[Ottimizzazione]
Per ottimizzare i costi e la latenza, ridimensionate le immagini alla risoluzione minima necessaria affinché il testo rimanga leggibile.
:::

### Supporto multilingue
Il modello è stato addestrato su un vasto corpus di documenti multilingue e supporta il riconoscimento di quasi **100 lingue** (tra cui francese, inglese, cinese, arabo, ecc.), con o senza preservazione del layout.

## Guida ai prompt (Prompt engineering)

La qualità del risultato dipende direttamente dal prompt utilizzato. DeepSeek-OCR risponde a istruzioni specifiche per attivare le sue diverse capacità.

### 1. OCR standard (Markdown)
Per estrarre il testo con la sua struttura (titoli, paragrafi, tabelle).

**Prompt :**
> `Convert the document to markdown.`

**Risultato :** Testo strutturato, tabelle formattate, impaginazione preservata.

### 2. "Deep parsing" (Figure, grafici, formule)
Per analizzare il contenuto semantico di grafici, formule chimiche o geometriche.

**Prompt :**
> `Parse the figure.`

**Capacità :**
-   **Grafici (Bar/Line/Pie)** : Converte in tabella HTML o Markdown.
-   **Formule Chimiche** : Converte in formato SMILES.
-   **Geometria** : Descrive gli elementi geometrici.

### 3. Grounding (localizzazione)
Per trovare le coordinate di un elemento specifico nell'immagine.

**Prompt :**
> `Locate <|ref|>élément à trouver<|/ref|> in the image.`

**Esempio :** `Locate <|ref|>Total<|/ref|> in the image.`
**Risultato :** Restituisce le coordinate della bounding box dell'elemento.

### 4. Rilevamento degli oggetti
Per elencare e localizzare tutti gli oggetti visibili.

**Prompt :**
> `Identify all objects in the image and output them in bounding boxes.`

## Tutorial di implementazione (Python)

Ecco un esempio completo che mostra come strutturare la chiamata API per utilizzare queste funzionalità.

### Prerequisiti: formato dell'immagine e dipendenze
-   **Formato** : JPEG o PNG.
-   **Modalità** : RGB (senza trasparenza Alpha).
-   **PDF** : Devono essere convertiti in immagini preventivamente (150-300 DPI).
-   **Dimensione** : Si consiglia di ridimensionare le immagini ad altissima risoluzione per evitare errori di limite di dimensione (413 Payload Too Large).

Installare le librerie necessarie :
```bash
pip install requests Pillow
```

### Codice: analisi del documento (OCR)

Prendiamo ad esempio questo scontrino svizzero:

![Scontrino di esempio](@site/docs/llmaas/images/ReceiptSwiss.jpg)

Ecco uno script robusto che gestisce il ridimensionamento e la codifica ottimale dell'immagine:

```python
import base64
import io
import requests
from PIL import Image

# Configurazione
API_KEY = "VOTRE_TOKEN_API"
API_URL = "https://api.ai.cloud-temple.com/v1/chat/completions"
IMAGE_PATH = "ReceiptSwiss.jpg" # Assicurarsi che l'immagine si trovi nella cartella corrente

def encode_image_optimized(path):
    """
    Optimise l'image (redimensionnement + compression JPEG) pour l'API.
    """
    with Image.open(path) as img:
        # 1. Conversione RGB (per evitare problemi PNG/Alpha)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 2. Ridimensionamento intelligente se troppo grande (> 2048px)
        # Questo evita l'errore 413 (Payload Too Large) e accelera l'elaborazione
        max_size = 2048
        if max(img.size) > max_size:
            img.thumbnail((max_size, max_size))
            
        # 3. Compressione JPEG in memoria
        buffer = io.BytesIO()
        img.save(buffer, format="JPEG", quality=85)
        
        return base64.b64encode(buffer.getvalue()).decode('utf-8')

# 1. Costruzione del messaggio multimodale
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
    "temperature": 0.0, # CRUCIALE: 0.0 per la fedeltà
    "max_tokens": 4096
}

# 2. Invio
print("Envoi de la requête...")
response = requests.post(
    API_URL, 
    headers={"Authorization": f"Bearer {API_KEY}"}, 
    json=payload
)

# 3. Risultato
if response.status_code == 200:
    print("\n--- Résultat OCR ---\n")
    print(response.json()['choices'][0]['message']['content'])
else:
    print(f"Erreur {response.status_code}: {response.text}")
```

**Esempio di output:**
```markdown
# Berghotel
**Grosse Scheidegg**
3818 Grindelwald
Famille R. Müller

Rech. Nr.  4572
Bar    Tisch   7/01

2xLatte Macchiato    à   4.50 CHF   9.00
1xGloki    à   5.00 CHF   5.00
...

**Total :** CHF **54.50**
**Incl. 7.6% MwSt** 54.50 CHF: 3.85
```

### Codice: analisi del grafico (deep parsing)

Per analizzare un grafico finanziario in un report, modificare semplicemente il testo del prompt nel payload sopra:

```python
# ... dans le payload ...
"text": "Parse the figure." 
# ...
```

Il modello restituirà una rappresentazione testuale o tabellare dei dati del grafico.

## Casi d'uso avanzati

### Estrazione di tabelle complesse
DeepSeek-OCR eccelle nella conversione di tabelle, anche senza linee di demarcazione chiare.

**Immagine di Input :**

![Tabella finanziaria](@site/docs/llmaas/images/tableau.png)

**Output del Modello (Prompt: "Convert the document to markdown table.") :**
```markdown
# RESSOURCES PaaS

## Unités d'œuvre laaS Redhat Openshift - à la demande - réservation 12 mois - Hors licence Openshift

|    | Unité    | Prix unitaire € HT/mois | Engagement |
|---|---|---|---|
| OPENSHIFT - Plan de contrôle - 3 nœuds - Région FR1    | 1 plan dédié    | 1 956,81 €    | 12 mois    |
| OPENSHIFT - WORKER NODES - TINY - 3 x (10 cores / 20 threads - 64 Go de ram - 512 Gio FLASH 1500 ips) | 3 workers dédiés    | 834,62 €    | 12 mois    |
| OPENSHIFT - WORKER NODES - SMALL - 3 x (20 cores / 40 threads - 128 Go de ram - 512 Gio FLASH 1500 ips) | 3 workers dédiés    | 2 756,21 €    | 12 mois    |
| OPENSHIFT - WORKER NODES - STANDARD - 3 x (32 cores / 64 threads - 384 Go de ram - 512 Gio FLASH 1500 ips) | 3 workers dédiés    | 5 812,82 €    | 12 mois    |
| OPENSHIFT - WORKER NODES - ADVANCED - 3 x (48 cores / 96 threads - 768 Go de ram - 512 Gio FLASH 1500 ips) | 3 workers dédiés    | 8 413,27 €    | 12 mois    |
| OPENSHIFT - WORKER NODES - PERF - 3 x (56 cores / 112 threads - 1.5 To de ram - 512 Gio FLASH 1500 ips) | 3 workers dédiés    | 13 835,78 €    | 12 mois    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 Go de ram - 512 Gio FLASH 1500 ips - 2xNVIDIA L40S 48GO) | 3 workers dédiés + GPU    | 13 378,32 €    | 12 mois    |
| OPENSHIFT - WORKER NODES - GPU - 3 x (32 cores / 64 threads - 512 Go de ram - 512 Gio FLASH 1500 ips - 2xNVIDIA H100 80GO) | 3 workers dédiés + GPU    | 26 954,41 €    | 24 mois    |

---

## Unités d'œuvre Kubernetes Manage - (hors infrastructure)

|    | Unité    | Prix unitaire € HT/mois | Engagement |
|---|---|---|---|
| KUBERNETES MANAGE - PRODUCTION (incluant 3 Worker Nodes)    | 1 cluster virtuel    | 2 250,00 €    | 1 mois    |
| KUBERNETES MANAGE - DEV/TEST/RECETTE (incluant 3 Worker Nodes)    | 1 cluster virtuel    | 1 500,00 €    | 1 mois    |
| WORKER NODE additionnel pour Kubernetes Manage - PRODUCTION    | 1 worker node additionnel    | 450,00 €    | 1 mois    |
| WORKER NODE additionnel pour Kubernetes Manage - DEV/TEST/RECETTE    | 3 worker node additionnel    | 300,00 €    | 1 mois    |

---

## Unités d'œuvre IA - LLMaas

|    | Unité    | Prix unitaire € HT/mois | Engagement |
|---|---|---|---|
| LLMaas - tokens ingéré (input) / millions    | 1 million tokens    | 0,90 €    | N/A    |
| LLMaas - tokens généré (output) / millions    | 1 million tokens    | 4,00 €    | N/A    |
| LLMaas - tokens de raisonnement / millions    | 1 million tokens    | 21,00 €    | N/A    |
| LLMaas - voix vers texte / minute    | 1 minute    | 0,010 €    | N/A    |
| LLMaas - texte vers voix / minute    | 1 minute    | 0,010 €    | N/A    |
```

### Formule matematiche (LaTeX)
Ideale per documenti accademici. Il modello riconosce le equazioni e le restituisce in sintassi LaTeX standard.

**Immagine di Input :**

![Equation](@site/docs/llmaas/images/equation.png)

**Output del Modello (Prompt: "Convert to latex.") :**

> Ecco la resa matematica del risultato OCR :

Errore quadratico medio:

$$
\frac{1}{T} \int_{-T/2}^{T/2} \left[ f(t) - T_N(t) \right]^2 dt = E_N \left( a_0, \ldots, a_N; b_1, \ldots, b_N \right)
$$

Condizione per il minimo di $E_N$ in:

$$
\frac{\partial E_N}{\partial a_0} = 0, \frac{\partial E_N}{\partial a_i} = 0, \ldots, \frac{\partial E_N}{\partial b_N} = 0
$$

(2n+1) equazioni:

$$
\frac{\partial E_N}{\partial a_i} = \frac{1}{T} \int_{-T/2}^{T/2} \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right)^2 dt = \frac{1}{T} \int_{-T/2}^{T/2} \left\{ 2 \left( f(t) - T_N(t) \right) \frac{\partial}{\partial a_i} \left( f(t) - T_N(t) \right) \right\} dt
$$

$$
= -\frac{1}{T} \int_{-T/2}^{T/2} 2 \left( f(t) - T_N(t) \right) \cos i \omega t dt = 0 \quad \text{per punto stazionario.}
$$

$$
\frac{2}{T} \int_{-T/2}^{T/2} f(t) \cos i \omega t dt = \frac{2}{T} \int_{-T/2}^{T/2} \left[ \frac{a_0}{2} + \sum_{n=1}^{N} \left( a_n \cos n \omega t + b_n \sin n \omega t \right) \right] \cos i \omega t dt \quad i \neq 0
$$

## Limitazioni note

-   **Orientazione** : Il modello non gestisce la rotazione automatica. Assicurati che le immagini siano correttamente orientate (testo orizzontale).
-   **Testo manoscritto** : Sebbene performante, il tasso di errore è più elevato sulla scrittura corsiva complessa rispetto al testo stampato.
-   **Risoluzione molto elevata** : Le immagini che superano le dimensioni della modalità "Gundam" (~2000x2000) vengono ridimensionate, il che può rendere illeggibile il testo microscopico. Taglia le aree molto ampie in più immagini.