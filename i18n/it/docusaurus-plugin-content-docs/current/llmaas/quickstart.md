---
title: Guida di Avvio
sidebar_position: 3
---

# Guida di Avvio Rapido

Questa guida ti permette di effettuare la tua prima richiesta all'API LLMaaS in meno di 5 minuti.

## Prerequisiti

- Accesso alla Console Cloud Temple
- Account con permessi LLMaaS attivati

## Step 1: Generare una chiave API

1. Accedi alla Console Cloud Temple
2. Vai alle impostazioni del tuo account
3. Genera una nuova chiave API LLMaaS
4. Copia e salva la chiave (verrà visualizzata solo una volta)

## Fase 2: Test della connessione

Verifica che la tua chiave funzioni elencando i modelli disponibili :

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Dovresti ricevere un elenco JSON dei modelli disponibili.

## Passo 3: Prima richiesta

Esegui la tua prima generazione di testo con un modello veloce:

```bash
curl -X POST "https://api.ai.cloud-temple.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer VOTRE_CLE_API" \
  -d '{
    "model": "granite3.3:8b",
    "messages": [
      {
        "role": "user",
        "content": "Scrivi un haiku sulla tecnologia."
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

## Passo 4: Test con Python

Installa la libreria requests e testa con codice Python:

```bash
pip install requests
```

```python
import requests
import json

# Configurazione
API_KEY = "LA TUA CHIAVE API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Headers
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Richiesta
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
    print(f"Errore: {response.status_code}")
    print(response.text)
```

## Scelta del modello

Per il tuo primo test, utilizza uno di questi modelli consigliati:

| Modello | Usage | Velocità | Nota |
|--------|--------|---------|------|
| `granite3.3:8b` | Utilizzo generale, bilanciato | Veloce | Consigliato per iniziare |
| `qwen3:14b` | Compiti complessi | Medio | Modalità "thinking" visibile |
| `gemma3:4b` | Test rapidi, prototipazione | Molto veloce | Risposte dettagliate |

Consulta il [catalogo completo dei modelli](./models) per ulteriori opzioni.

## Parametri consigliati

Per iniziare, utilizza questi parametri:

```json
{
  "temperature": 0.7,    // Creatività moderata
  "max_tokens": 200,     // Risposte concise
  "top_p": 1.0,         // Diversità standard
  "stream": false       // Risposta completa in un colpo
}
```

## Gestione degli errori comuni

### Errore 401 - Non autorizzato
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Soluzione** : Verifica la tua chiave API nella Console Cloud Temple.

### Errore 400 - Modello non trovato
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Soluzione** : Utilizza `/v1/models` per elencare i modelli disponibili.

### Errore 429 - Limite di velocità
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Soluzione** : Aspetta alcuni secondi e riprova.

## Monitoraggio dell'uso

Nella Console Cloud Temple, puoi:
- Visualizzare le tue richieste in tempo reale
- Consultare il consumo dei token
- Configurare avvisi di costo
- Analizzare le prestazioni per modello

## Vai oltre: Esempi di Tool Calling e Vision

Questa sezione fornisce esempi di script Python semplici e autonomi per illustrare funzionalità specifiche dell'API LLMaaS. Ogni esempio è stato progettato per essere eseguito direttamente, con istruzioni chiare per la configurazione e l'uso.

---

## 💡 Esempi di Codice Autonomi

Questa sezione fornisce esempi di script Python semplici e autonomi per illustrare funzionalità specifiche dell'API LLMaaS. Ogni esempio è stato progettato per essere eseguito direttamente, con istruzioni chiare per la configurazione e l'utilizzo.

### 1. Esempio semplice di Chiamata a strumento

La "Chiamata a strumento" (o chiamata di funzione) permette a un modello linguistico di richiedere l'esecuzione di una funzione definita nel tuo codice. È una funzionalità potente per collegare i modelli linguistici (LLMs) a strumenti esterni (API, database, ecc.).

Il flusso è il seguente:
1. L'utente pone una domanda che richiede un strumento (es: "che tempo fa?").
2. Invii la domanda e l'elenco degli strumenti disponibili all'API.
3. Il modello, invece di rispondere direttamente, restituisce una richiesta `tool_calls` che richiede di eseguire una funzione specifica con alcuni argomenti.
4. Il tuo codice esegue la funzione richiesta.
5. Restituisci il risultato della funzione al modello.
6. Il modello utilizza questo risultato per formulare una risposta finale all'utente.

**Struttura dei file**

Per questo esempio, crea una directory `simple_tool_calling` con i seguenti file:

- `test_tool_calling.py`: lo script principale.
- `requirements.txt`: le dipendenze Python.
- `.env.example`: un modello per il file di configurazione.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env.example`**
```env


# URL di base dell'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# La tua chiave API LLMaaS
API_KEY="votre_cle_api_ici"

# Facoltativo: Modello predefinito da utilizzare per il test

# Assicuratevi che questo modello sia compatibile con il "tool calling"
DEFAULT_MODEL="qwen3:30b-a3b"
```

**Codice sorgente (`test_tool_calling.py`)**

```python

# -*- coding: utf-8 -*-
"""
Esempio semplice di Tool Calling con l'API LLMaaS.

Questo script mostra come definire uno strumento semplice (una calcolatrice),
inviarlo a un modello compatibile e interpretare la risposta del modello
per eseguire lo strumento e restituire il risultato.
"""
import os
import json
import httpx
from dotenv import load_dotenv

# --- Configurazione ---

# Caricare le variabili di ambiente da un file .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")

# Utilizzare un modello noto per gestire correttamente la chiamata al tool
MODEL = os.getenv("DEFAULT_MODEL", "qwen3:30b-a3b")

# --- Definizione dello strumento ---

def calculator(expression: str) -> str:
    """
    Valuta un'espressione matematica semplice.
    Esempio: "2 + 2 * 10"
    """
    try:
        # Sicurezza: non utilizzare eval() direttamente in produzione senza una valida rigorosa.
        # Per questo esempio, limitiamo i caratteri autorizzati.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Errore: L'espressione contiene caratteri non autorizzati."
        # eval() è utilizzato qui per semplicità dell'esempio.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Errore di calcolo: {str(e)}"

# Descrizione degli strumenti nel formato atteso dall'API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Valuta un'espressione matematica. Ad esempio, '2+2*10'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "L'espressione matematica da valutare."
                    }
                },
                "required": ["expression"],
            },
        },
    }
]

# Mappatura tra il nome dello strumento e la funzione Python da chiamare
TOOL_FUNCTIONS_MAP = {
    "calculator": calculator
}

# --- Logica principale ---

def run_chat_with_tool_calling():
    """
    Funzione principale che esegue il scenario di test.
    """
    if not API_KEY:
        print("❌ Errore: La variabile d'ambiente API_KEY non è definita.")
        print("Per favore crea un file .env o esportalo nella tua sessione.")
        return

    print(f"🤖 Modello utilizzato : {MODEL}")
    print("-" * 30)

    # 1. Prima chiamata all'API con la domanda dell'utente
    # ---------------------------------------------------------
    print("➡️ Passo 1: Invio della richiesta iniziale al LLM...")

    # La cronologia dei messaggi inizia con la domanda dell'utente
    messages = [
        {"role": "user", "content": "Ciao, puoi calcolare 15 + (3 * 5) ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # Il modello decide se deve utilizzare uno strumento
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
        print(f"❌ Errore API (HTTP Status) nel passo 1: {e}")
        print(f"Risposta dell'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Errore API (Request) nel passo 1: {e}")
        return

    # Il messaggio dell'assistente contiene la richiesta di chiamata dello strumento
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Verifica ed esecuzione della chiamata dello strumento
    # ------------------------------------------------
    print("\n✅ Il LLM ha richiesto di utilizzare uno strumento.")

    if "tool_calls" not in assistant_message:
        print("🤔 Il modello non ha richiesto di utilizzare uno strumento. Risposta diretta :")
        print(assistant_message.get("content", "Nessun contenuto."))
        return

    tool_call = assistant_message["tool_calls"][0]
    function_name = tool_call["function"]["name"]
    function_args_str = tool_call["function"]["arguments"]
    tool_call_id = tool_call["id"]

    print(f"   - Strumento da chiamare : {function_name}")
    print(f"   - Argomenti       : {function_args_str}")

    if function_name in TOOL_FUNCTIONS_MAP:
        function_to_call = TOOL_FUNCTIONS_MAP[function_name]
        try:
            # Gli argomenti sono una stringa JSON, bisogna analizzarli
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Risultato dello strumento : {tool_result}")
        except Exception as e:
            print(f"❌ Errore durante l'esecuzione dello strumento: {e}")
            tool_result = f"Errore: {e}"
    else:
        print(f"❌ Strumento sconosciuto : {function_name}")
        tool_result = f"Errore: Strumento '{function_name}' non trovato."

    # 3. Seconda chiamata all'API con il risultato dello strumento
    # ----------------------------------------------------
    print("\n➡️ Passo 2: Invio del risultato dello strumento al LLM...")

    # Aggiungiamo il risultato dello strumento alla cronologia dei messaggi
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # Effettuiamo un'altra chiamata SENZA gli strumenti questa volta per ottenere la risposta finale
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
        print(f"❌ Errore API durante il passo 2: {e}")
        return

    final_answer = final_data["choices"][0]["message"]["content"]
    print("\n✅ Risposta finale del LLM :")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_chat_with_tool_calling()
```

**Utilizzo**

1.  **Installa le dipendenze :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configura la tua chiave API :**
    Copia `tests/llmaas/.env.example` in `tests/llmaas/.env` e sostituisci "votre_cle_api_ici" con la tua chiave API LLMaaS.
3.  **Esegui lo script :**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

### 2. Esempio semplice di Visione (Multimodale)

I modelli multimodali possono analizzare sia testo che immagini. Questo esempio mostra come inviare un'immagine e una domanda al modello per ottenere una descrizione di ciò che "vede".

**Struttura dei file**

Crea una directory `simple_vision` con i seguenti file:

-   `test_vision.py`: Lo script principale.
-   `requirements.txt`: Le dipendenze (incluse `Pillow` per generare l'immagine).
-   `.env.example`: Il modello di configurazione.
-   `image_example.png`: L'immagine da analizzare (lo script la genererà per te se manca).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env.example`**
```env

# URL base dell'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# La tua chiave API LLMaaS
API_KEY="la_tua_chiave_api_ici"

# Facoltativo: Modello predefinito da utilizzare per il test

# Assicurati che questo modello sia multimodale (visione)
DEFAULT_MODEL="granite3.2-vision:2b"
```

**Codice sorgente (`test_vision.py`)**

```python

# -*- coding: utf-8 -*-
"""
Esempio semplice di utilizzo dell'API Vision di LLMaaS.

Questo script mostra come inviare un'immagine locale con una domanda
a un modello di visione (multimodale) e visualizzare la sua risposta.
"""
import os
import base64
import httpx
from dotenv import load_dotenv

# --- Configurazione ---

# Caricare le variabili d'ambiente da un file .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")

# Utilizzare un modello di visione.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # L'immagine deve essere nella stessa directory

# --- Funzioni ---

def encode_image_to_base64(image_path: str) -> str:
    """
    Codifica un'immagine in base64 per includerla nella richiesta API.
    """
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"❌ Errore: Il file immagine '{image_path}' non è stato trovato.")
        return ""
    except Exception as e:
        print(f"❌ Errore durante l'encoding dell'immagine: {e}")
        return ""

def generate_example_image():
    """
    Genera un'immagine semplice per il test se non esiste.
    Richiede la libreria Pillow (PIL).
    """
    try:
        from PIL import Image, ImageDraw
        if not os.path.exists(IMAGE_PATH):
            print(f"🖼️ L'immagine '{IMAGE_PATH}' non esiste, generazione in corso...")
            # Crea un'immagine semplice: un quadrato rosso su fondo bianco
            img = Image.new('RGB', (200, 200), color = 'white')
            draw = ImageDraw.Draw(img)
            draw.rectangle([50, 50, 150, 150], fill='red', outline='black')
            img.save(IMAGE_PATH)
            print("✅ Immagine di esempio generata.")
    except ImportError:
        print("⚠️ Avviso: La libreria Pillow non è installata.")
        print("   Si prega di installare 'Pillow' (`pip install Pillow`) per generare l'immagine di esempio,")
        print(f"   o posizionare manualmente un file chiamato '{IMAGE_PATH}' in questa directory.")
    except Exception as e:
        print(f"❌ Errore durante la generazione dell'immagine: {e}")

# --- Logica principale ---

def run_vision_test():
    """
    Funzione principale che esegue lo scenario di test di visione.
    """
    if not API_KEY:
        print("❌ Errore: La variabile d'ambiente API_KEY non è definita.")
        return

    # Generare l'immagine di esempio se necessario
    generate_example_image()

    # Codificare l'immagine in base64
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modello utilizzato : {MODEL}")
    print(f"🖼️ Immagine inviata : {IMAGE_PATH}")
    print("-" * 30)

    # Costruzione del payload nel formato multimodale
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Cosa vedi in questa immagine? Descrivi la forma e il colore principale."
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
        "max_tokens": 500 # Limitare la lunghezza della descrizione
    }

    print("➡️ Invio della richiesta al LLM di visione...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # I modelli di visione possono essere più lunghi
            )
            response.raise_for_status()
            response_data = response.json()

    except httpx.HTTPStatusError as e:
        print(f"❌ Errore API (HTTP Status): {e}")
        print(f"Risposta dell'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Errore API (Request): {e}")
        return

    final_answer = response_data["choices"][0]["message"]["content"]
    print("\n✅ Risposta del modello :")
    print(f"💬 \"{final_answer}\"")


if __name__ == "__main__":
    run_vision_test()
```

**Utilizzo**

1.  **Installa le dipendenze :**
    ```bash
    pip install -r tests/llmaas/requirements.txt
    ```
2.  **Configura la tua chiave API :**
    Copia `tests/llmaas/.env.example` in `tests/llmaas/.env` e sostituisci `"votre_cle_api_ici"` con la tua chiave API LLMaaS.
3.  **Esegui lo script :**
    ```bash
    python tests/llmaas/test_vision.py
    ```
    Lo script genererà automaticamente un'immagine `image_example.png` se non esiste.

## Prossimi passi

Dopo aver superato il tuo primo test:

1. **Esplora i modelli** : Prova diversi modelli in base alle tue esigenze
2. **Ottimizza i prompt** : Migliora la qualità delle risposte
3. **Integra nell'applicazione** : Consulta la [documentazione API](./api)
4. **Casi d'uso avanzati** : Vedere i [tutori](./tutorials)

## Supporto

In caso di problema:
- Consulta la [documentazione API completa](./api)
- Verifica lo stato del servizio nella Console
- Contatta il supporto tramite la Console Cloud Temple