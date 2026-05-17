---
title: Guida di Avvio
sidebar_position: 3
---

# Guida Rapida

Questa guida ti consente di effettuare la tua prima richiesta all'API LLMaaS in meno di 5 minuti.

## Prerequisiti

- Accesso alla Console Cloud Temple
- Account con permessi LLMaaS abilitati

## Passo 1: Generare una chiave API

1. Accedi alla Console Cloud Temple
2. Vai alle impostazioni del tuo account
3. Genera una nuova chiave API LLMaaS
4. Copia e salva la chiave (verrà visualizzata solo una volta)

## Fase 2: Verificare la connessione

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
    "model": "gpt-oss:120b",
    "messages": [
      {
        "role": "user",
        "content": "Écris un haiku sur la technologie."
      }
    ],
    "max_tokens": 100,
    "temperature": 0.7
  }'
```

## Passo 4: Testare con Python

Installare la libreria requests e testare con del codice Python:

```bash
pip install requests
```

```python
import requests
import json

# Configurazione
API_KEY = "VOTRE_CLE_API"
BASE_URL = "https://api.ai.cloud-temple.com/v1"

# Intestazioni
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

# Richiesta
payload = {
    "model": "gpt-oss:120b",
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
    print(f"Erreur: {response.status_code}")
    print(response.text)
```

## Scelta del modello

Per il tuo primo test, utilizza uno di questi modelli consigliati :

| Modello | Utilizzo | Velocità | Nota |
|--------|--------|---------|------|
| `gpt-oss:120b` | Utilizzo generale, bilanciato | Media | **LTS** — consigliato per la produzione |
| `qwen3-2507-think:4b` | Ragionamento complesso | Rapida | **LTS** — compatto con ragionamento profondo |
| `qwen3.5:9b` | Chat e analisi | Rapida | Buon compromesso dimensione/qualità |

Consulta il [catalogo completo dei modelli](./models) per altre opzioni. Preferisci i modelli contrassegnati con **LTS** per le tue applicazioni in produzione.

:::tip Suggerimento per i modelli Qwen con ragionamento
Alcuni modelli della famiglia **Qwen** (come `qwen3-2507-think:4b`, `qwen3.5:9b` o `qwen3.6:27b`) dispongono di una modalità di ragionamento avanzata. Puoi forzarne l'attivazione aggiungendo `/think` all'inizio del tuo prompt, o disattivarlo per una risposta più diretta e rapida con `/nothink`.
:::

## Parametri consigliati

Per iniziare, utilizza questi parametri:

```json
{
  "temperature": 0.7,    // Créativité modérée
  "max_tokens": 200,     // Réponses concises
  "top_p": 1.0,         // Diversité standard
  "stream": false       // Réponse complète d'un coup
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
**Soluzione** : Utilizzare `/v1/models` per elencare i modelli disponibili.

### Errore 429 - Limite di richieste
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Soluzione** : Attendere alcuni secondi e riprovare.

## Monitoraggio dell'utilizzo

Nella Console Cloud Temple, puoi:
- Visualizzare le tue richieste in tempo reale
- Consultare il consumo di token
- Configurare avvisi di costo
- Analizzare le prestazioni per modello

## Approfondimenti: Esempi di Tool Calling e Visione

Questa sezione fornisce esempi di script Python semplici e autonomi per illustrare funzionalità specifiche dell'API LLMaaS. Ogni esempio è progettato per essere eseguito direttamente, con istruzioni chiare per la configurazione e l'utilizzo.

---

## 💡 Esempi di Codice Autonomi

Questa sezione fornisce esempi di script Python semplici e autonomi per illustrare funzionalità specifiche dell'API LLMaaS. Ogni esempio è progettato per essere eseguito direttamente, con istruzioni chiare per la configurazione e l'utilizzo.

### 1. Esempio Semplice di Tool Calling

Il "Tool Calling" (o chiamata di funzione) consente a un modello linguistico di richiedere l'esecuzione di una funzione definita nel tuo codice. È una funzionalità potente per collegare i LLM a strumenti esterni (API, database, ecc.).

Il flusso è il seguente:
1.  L'utente pone una domanda che richiede uno strumento (es: "che tempo fa?").
2.  Invii la domanda e l'elenco degli strumenti disponibili all'API.
3.  Il modello, invece di rispondere direttamente, restituisce una richiesta `tool_calls` per eseguire una funzione specifica con determinati argomenti.
4.  Il tuo codice esegue la funzione richiesta.
5.  Invii il risultato della funzione al modello.
6.  Il modello utilizza questo risultato per formulare una risposta finale all'utente.

**Struttura dei file**

Per questo esempio, crea una directory `simple_tool_calling` con i seguenti file :

-   `test_tool_calling.py`: Lo script principale.
-   `requirements.txt`: Le dipendenze Python.
-   `.env`: Un modello per il tuo file di configurazione.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est compatible avec le "tool calling"
DEFAULT_MODEL="gpt-oss:120b"
```

**Codice Sorgente (`test_tool_calling.py`)**

```python
# -*- coding: utf-8 -*-
"""
Exemple simple de Tool Calling avec l'API LLMaaS.

Ce script montre comment définir un outil simple (une calculatrice),
l'envoyer à un modèle compatible, et interpréter la réponse du modèle
pour exécuter l'outil et renvoyer le résultat.
"""
import os
import json
import httpx
from dotenv import load_dotenv

# --- Configurazione ---
# Carica le variabili d'ambiente da un file .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Utilizzare un modello noto per gestire correttamente il tool calling
MODEL = os.getenv("DEFAULT_MODEL", "gpt-oss:120b")

# --- Definizione dello strumento ---

def calculator(expression: str) -> str:
    """
    Évalue une expression mathématique simple.
    Exemple: "2 + 2 * 10"
    """
    try:
        # Sicurezza: non utilizzare eval() direttamente in produzione senza una validazione rigorosa.
        # Per questo esempio, limitiamo i caratteri consentiti.
        allowed_chars = "0123456789+-*/(). "
        if not all(char in allowed_chars for char in expression):
            return "Erreur: L'expression contient des caractères non autorisés."
        # eval() viene utilizzato qui per la semplicità dell'esempio.
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Erreur de calcul: {str(e)}"

# Descrizione dello strumento nel formato atteso dall'API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Évalue une expression mathématique. Par exemple, '2+2*10'.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "L'expression mathématique à évaluer."
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
    Fonction principale qui exécute le scénario de test.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        print("Veuillez créer un fichier .env ou l'exporter dans votre session.")
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print("-" * 30)

    # 1. Prima chiamata all'API con la domanda dell'utente
    # ---------------------------------------------------------
    print("➡️ Étape 1: Envoi de la requête initiale au LLM...")

    # La cronologia dei messaggi inizia con la domanda dell'utente
    messages = [
        {"role": "user", "content": "Bonjour, peux-tu calculer 15 + (3 * 5) ?"}
    ]

    payload = {
        "model": MODEL,
        "messages": messages,
        "tools": TOOLS_AVAILABLE,
        "tool_choice": "auto",  # Le modèle décide s'il doit utiliser un outil
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
        print(f"❌ Erreur API (HTTP Status) lors de l'étape 1: {e}")
        print(f"Réponse de l'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Erreur API (Request) lors de l'étape 1: {e}")
        return

    # Il messaggio dell'assistant contiene la richiesta di chiamata dello strumento
    assistant_message = response_data["choices"][0]["message"]
    messages.append(assistant_message)

    # 2. Verifica ed esecuzione della chiamata dello strumento
    # ------------------------------------------------
    print("\n✅ Le LLM a demandé d'utiliser un outil.")

    if "tool_calls" not in assistant_message:
        print("🤔 Le modèle n'a pas demandé d'utiliser un outil. Réponse directe :")
        print(assistant_message.get("content", "Pas de contenu."))
        return

    tool_call = assistant_message["tool_calls"][0]
    function_name = tool_call["function"]["name"]
    function_args_str = tool_call["function"]["arguments"]
    tool_call_id = tool_call["id"]

    print(f"   - Outil à appeler : {function_name}")
    print(f"   - Arguments       : {function_args_str}")

    if function_name in TOOL_FUNCTIONS_MAP:
        function_to_call = TOOL_FUNCTIONS_MAP[function_name]
        try:
            # Gli argomenti sono una stringa JSON, è necessario analizzarli
            function_args = json.loads(function_args_str)
            tool_result = function_to_call(**function_args)
            print(f"   - Résultat de l'outil : {tool_result}")
        except Exception as e:
            print(f"❌ Erreur lors de l'exécution de l'outil: {e}")
            tool_result = f"Erreur: {e}"
    else:
        print(f"❌ Outil inconnu : {function_name}")
        tool_result = f"Erreur: Outil '{function_name}' non trouvé."

    # 3. Seconda chiamata all'API con il risultato dello strumento
    # ----------------------------------------------------
    print("\n➡️ Étape 2: Envoi du résultat de l'outil au LLM...")

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
        print(f"❌ Erreur API lors de l'étape 2: {e}")
        return

    final_answer = final_data["choices"][0]["message"]["content"]
    print("\n✅ Réponse finale du LLM :")
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
    Copia `tests/llmaas/.env.example` in `tests/llmaas/.env` e sostituisci `"votre_cle_api_ici"` con la tua chiave API LLMaaS.
3.  **Esegui lo script :**
    ```bash
    python tests/llmaas/test_tool_calling.py
    ```

### 2. Esempio Semplice di Visione (Multimodale)

I modelli multimodali possono analizzare sia testo che immagini. Questo esempio mostra come inviare un'immagine e una domanda al modello per ottenere una descrizione di ciò che "vede".

**Struttura dei file**

Crea una directory `simple_vision` con i seguenti file :

-   `test_vision.py`: Lo script principale.
-   `requirements.txt`: Le dipendenze (incluendo `Pillow` per generare l'immagine).
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
# URL di base dell'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# La tua chiave API LLMaaS
API_KEY="votre_cle_api_ici"

# Opzionale: Modello predefinito da utilizzare per il test
# Assicurati che questo modello sia multimodale (visione)
DEFAULT_MODEL="granite3.2-vision:2b"
```

**Codice Sorgente (`test_vision.py`)**

```python
# -*- coding: utf-8 -*-
"""
Exemple simple d'utilisation de l'API Vision de LLMaaS.

Ce script montre comment envoyer une image locale avec une question
à un modèle de vision (multimodal) et afficher sa réponse.
"""
import os
import base64
import httpx
from dotenv import load_dotenv

# --- Configuration ---
# Carica le variabili d'ambiente da un file .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Utilizza un modello di visione.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # L'immagine deve trovarsi nella stessa directory

# --- Funzioni ---

def encode_image_to_base64(image_path: str) -> str:
    """
    Encode une image en base64 pour l'inclure dans la requête API.
    """
    try:
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
    except FileNotFoundError:
        print(f"❌ Erreur: Le fichier image '{image_path}' n'a pas été trouvé.")
        return ""
    except Exception as e:
        print(f"❌ Erreur lors de l'encodage de l'image: {e}")
        return ""

def generate_example_image():
    """
    Génère une image simple pour le test si elle n'existe pas.
    Nécessite la bibliothèque Pillow (PIL).
    """
    try:
        from PIL import Image, ImageDraw
        if not os.path.exists(IMAGE_PATH):
            print(f"🖼️  L'image '{IMAGE_PATH}' n'existe pas, génération en cours...")
            # Crea un'immagine semplice: un quadrato rosso su sfondo bianco
            img = Image.new('RGB', (200, 200), color = 'white')
            draw = ImageDraw.Draw(img)
            draw.rectangle([50, 50, 150, 150], fill='red', outline='black')
            img.save(IMAGE_PATH)
            print("✅ Image d'exemple générée.")
    except ImportError:
        print("⚠️  Avertissement: La bibliothèque Pillow n'est pas installée.")
        print("   Veuillez installer 'Pillow' (`pip install Pillow`) pour générer l'image d'exemple,")
        print(f"   ou placez manuellement un fichier nommé '{IMAGE_PATH}' dans ce répertoire.")
    except Exception as e:
        print(f"❌ Erreur lors de la génération de l'image: {e}")


# --- Logica principale ---

def run_vision_test():
    """
    Fonction principale qui exécute le scénario de test de vision.
    """
    if not API_KEY:
        print("❌ Erreur: La variable d'environnement API_KEY n'est pas définie.")
        return

    # Genera l'immagine di esempio se necessario
    generate_example_image()

    # Codifica l'immagine in base64
    base64_image = encode_image_to_base64(IMAGE_PATH)
    if not base64_image:
        return

    print(f"🤖 Modèle utilisé : {MODEL}")
    print(f"🖼️ Image envoyée : {IMAGE_PATH}")
    print("-" * 30)

    # Costruzione del payload in formato multimodale
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Que vois-tu sur cette image ? Décris la forme et la couleur principale."
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
        "max_tokens": 500 # Limita la lunghezza della descrizione
    }

    print("➡️ Envoi de la requête au LLM de vision...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # I modelli di visione possono richiedere più tempo
            )
            response.raise_for_status()
            response_data = response.json()

    except httpx.HTTPStatusError as e:
        print(f"❌ Erreur API (HTTP Status): {e}")
        print(f"Réponse de l'API : {e.response.text}")
        return
    except httpx.RequestError as e:
        print(f"❌ Erreur API (Request): {e}")
        return

    final_answer = response_data["choices"][0]["message"]["content"]
    print("\n✅ Réponse du modèle :")
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

---

## Prossimi passi

Una volta completato con successo il primo test:

1. **Esplora i modelli** : Testa diversi modelli in base alle tue esigenze
2. **Ottimizza i prompt** : Migliora la qualità delle risposte
3. **Integra nell'applicazione** : Consulta la [documentazione API](./api)
4. **Casi d'uso avanzati** : Consulta i [tutorial](./tutorials)

## Supporto

In caso di problemi:
- Consulta la [documentazione API completa](./api)
- Verifica lo stato del servizio nella Console
- Contatta il supporto tramite la Console Cloud Temple