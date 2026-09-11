---
title: Guida introduttiva
sidebar_position: 3
---

# Guida all'Avvio Rapido

Questa guida ti consente di effettuare la tua prima richiesta all'API LLMaaS in meno di 5 minuti.

## Prerequisiti

- Accesso alla Console Cloud Temple
- Account con permessi LLMaaS abilitati

## Passo 1: Generare una chiave API

1. Accedi alla Console Cloud Temple
2. Apri **LLMaaS** > **Chiavi API**
3. Clicca su **Crea una chiave API**
4. Copia e salva la chiave (verrà visualizzata una sola volta)

## Passo 2: Testare la connessione

Verificare che la chiave funzioni elencando i modelli disponibili:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Dovreste ricevere un elenco JSON dei modelli disponibili.

## Passo 3: Prima richiesta

Effettua la tua prima generazione di testo con un modello veloce:

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

## Passo 4 : Testare con Python

Installare la libreria requests e testare con codice Python:

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

Gli esempi utilizzano `gpt-oss:120b`. Prima dell'esecuzione, verificate che questo identificatore sia presente in `/v1/models` e consultatene il [ciclo di vita](https://llmaas.status.cloud-temple.app/lifecycle).

Per la vostra applicazione, scegliete in base alle capacità necessarie, alla qualità sui vostri dati e all'orizzonte di supporto. La [guida del catalogo](./models.md) dettagli questi criteri. Gli esempi di visione richiedono un modello multimodale e quelli di chiamata di strumenti un modello che supporti il *tool calling*.

Le impostazioni di ragionamento dipendono dal modello. Non date per scontato che un'istruzione testuale attivi o disattivi questa modalità per tutti i modelli della stessa famiglia.

## Parametri consigliati

Per iniziare, utilizza questi parametri:

```json
{
  "temperature": 0.7,
  "max_tokens": 200,
  "top_p": 1.0,
  "stream": false
}
```

Questi parametri impostano la temperatura a 0,7, limitano l'output a 200 token, mantengono `top_p` a 1 e disabilitano lo streaming per ricevere la risposta completa.

## Gestione degli errori comuni

### Errore 401 - Non autorizzato
```json
{"error": {"message": "Invalid API key", "type": "invalid_request_error"}}
```
**Soluzione** : Verificate la vostra chiave API nella Console Cloud Temple.

### Errore 400 - Modello non trovato
```json
{"error": {"message": "Model not found", "type": "invalid_request_error"}}
```
**Soluzione** : Utilizzare `/v1/models` per elencare i modelli disponibili.

### Errore 429 - Limite di velocità
```json
{"error": {"message": "Rate limit exceeded", "type": "rate_limit_error"}}
```
**Soluzione** : Attendere alcuni secondi e riprovare.

## Monitoraggio dell'utilizzo

Nella Console Cloud Temple, puoi:
- Visualizzare le richieste in tempo reale
- Consultare il consumo di token
- Configurare avvisi sui costi
- Analizzare le prestazioni per modello

## Approfondimenti: Esempi di Tool Calling e Vision

Questa sezione fornisce esempi di script Python semplici e autonomi per illustrare funzionalità specifiche dell'API LLMaaS. Ogni esempio è progettato per essere eseguito direttamente, con istruzioni chiare per la configurazione e l'utilizzo.

---

## 💡 Esempi di Codice Autonomi

Questa sezione fornisce esempi di script Python semplici e autonomi per illustrare funzionalità specifiche dell'API LLMaaS. Ogni esempio è progettato per essere eseguito direttamente, con istruzioni chiare per la configurazione e l'utilizzo.

### 1. Esempio Semplice di Tool Calling

Il "Tool Calling" (o chiamata di funzione) consente a un modello linguistico di richiedere l'esecuzione di una funzione che hai definito nel tuo codice. È una funzionalità potente per connettere i LLM a strumenti esterni (API, bases de données, etc.).

Il flusso è il seguente:
1.  L'utente pone una domanda che richiede uno strumento (ex: "quel temps fait-il ?").
2.  Invii la domanda e l'elenco degli strumenti disponibili all'API.
3.  Il modello, invece di rispondere direttamente, restituisce una richiesta `tool_calls` che chiede di eseguire una funzione specifica con determinati argomenti.
4.  Il tuo codice esegue la funzione richiesta.
5.  Restituisci il risultato della funzione al modello.
6.  Il modello utilizza questo risultato per formulare una risposta finale all'utente.

**Struttura dei file**

Per questo esempio, crea una directory `simple_tool_calling` con i seguenti file:

-   `test_tool_calling.py`: Lo script principale.
-   `requirements.txt`: Le dipendenze Python.
-   `.env`: Il file di configurazione da compilare con la tua chiave API.

**`requirements.txt`**
```txt
httpx
python-dotenv
```

**`.env`**
```env
# URL base dell'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# La tua chiave API LLMaaS
API_KEY="votre_cle_api_ici"

# Opzionale: Modello predefinito da utilizzare per il test
# Assicurati che questo modello sia compatibile con il "tool calling"
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
    """Calcule une opération entre deux nombres, par exemple : 15 + 20."""
    import math
    import operator

    operations = {
        "+": operator.add,
        "-": operator.sub,
        "*": operator.mul,
        "/": operator.truediv,
    }
    try:
        if len(expression) > 100:
            raise ValueError("Entrée trop longue.")
        left, symbol, right = expression.split()
        if symbol not in operations:
            raise ValueError("Opérateur autorisé : +, -, * ou /.")
        left, right = float(left), float(right)
        if not (math.isfinite(left) and math.isfinite(right)):
            raise ValueError("Les nombres doivent être finis.")
        result = operations[symbol](left, right)
        if not math.isfinite(result):
            raise ValueError("Résultat hors limites.")
        return str(result)
    except (ValueError, OverflowError, ZeroDivisionError) as e:
        return f"Erreur de calcul: {e}"

# Descrizione dello strumento nel formato previsto dall'API
TOOLS_AVAILABLE = [
    {
        "type": "function",
        "function": {
            "name": "calculator",
            "description": "Effectue une seule opération entre deux nombres. Opérateurs autorisés : +, -, *, /. Exemple : 15 + 20.",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Deux nombres et un opérateur séparés par des espaces, par exemple : 15 + 20."
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
        {"role": "user", "content": "Bonjour, peux-tu calculer 15 + 20 ?"}
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

    # Il messaggio dell'assistente contiene la richiesta di chiamata dello strumento
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

    # Si aggiunge il risultato dello strumento alla cronologia dei messaggi
    messages.append(
        {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result
        }
    )

    # Si effettua una nuova chiamata SENZA gli strumenti questa volta per ottenere la risposta finale
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

1.  **Dalla directory padre, apri la directory creata e quindi installa le dipendenze:**
    ```bash
    cd simple_tool_calling
    python -m pip install -r requirements.txt
    ```
2.  **Configura la tua chiave API:**
    Nel file `.env` mostrato sopra, sostituisci `"votre_cle_api_ici"` con la tua chiave API LLMaaS. Verifica anche che `DEFAULT_MODEL` indichi un modello disponibile con le capacità richieste.
3.  **Da questa stessa directory, esegui lo script:**
    ```bash
    python test_tool_calling.py
    ```

### 2. Esempio Semplice di Visione (Multimodale)

I modelli multimodali possono analizzare sia testo che immagini. Questo esempio mostra come inviare un'immagine e una domanda al modello per ottenere una descrizione di ciò che "vede".

**Struttura dei file**

Crea una directory `simple_vision` con i seguenti file :

-   `test_vision.py`: Lo script principale.
-   `requirements.txt`: Le dipendenze (inclusa `Pillow` per generare l'immagine).
-   `.env`: Il file di configurazione da compilare con la tua chiave API.
-   `image_example.png`: L'immagine da analizzare (lo script la genererà per te se manca).

**`requirements.txt`**
```txt
httpx
python-dotenv
Pillow
```

**`.env`**
```env
# URL de base de l'API LLMaaS
API_URL="https://api.ai.cloud-temple.com/v1"

# Votre clé API LLMaaS
API_KEY="votre_cle_api_ici"

# Optionnel: Modèle par défaut à utiliser pour le test
# Assurez-vous que ce modèle est multimodal (vision)
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

# --- Configurazione ---
# Carica le variabili d'ambiente da un file .env
load_dotenv()

API_URL = os.getenv("API_URL", "https://api.ai.cloud-temple.com/v1")
API_KEY = os.getenv("API_KEY")
# Utilizzare un modello di visione.
MODEL = os.getenv("DEFAULT_MODEL", "granite3.2-vision:2b")
IMAGE_PATH = "image_example.png" # L'image doit être dans le même répertoire

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
        "max_tokens": 500 # Limiter la longueur de la description
    }

    print("➡️ Envoi de la requête au LLM de vision...")
    try:
        with httpx.Client() as client:
            response = client.post(
                f"{API_URL}/chat/completions",
                headers={"Authorization": f"Bearer {API_KEY}"},
                json=payload,
                timeout=120, # Les modèles de vision peuvent être plus longs
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

1.  **Dalla directory padre, apri la directory creata e installa le dipendenze :**
    ```bash
    cd simple_vision
    python -m pip install -r requirements.txt
    ```
2.  **Configura la tua chiave API :**
    Nel file `.env` mostrato sopra, sostituisci `"votre_cle_api_ici"` con la tua chiave API LLMaaS. Verifica anche che `DEFAULT_MODEL` indichi un modello disponibile con le capacità richieste.
3.  **Da questa stessa directory, esegui lo script :**
    ```bash
    python test_vision.py
    ```
    Lo script genererà automaticamente un'immagine `image_example.png` se non esiste.

---

## Prossimi passaggi

Una volta completato con successo il primo test:

1. **Esplorate i modelli** : Testate diversi modelli in base alle vostre esigenze
2. **Ottimizzate i prompt** : Migliorate la qualità delle risposte
3. **Integrate nella vostra applicazione** : Consultate la [documentation API](./api)
4. **Casi d'uso avanzati** : Vedi i [tutoriels](./tutorials)

## Supporto

In caso di problemi :
- Consultare la [documentation API complète](./api)
- Verificare lo stato del servizio nella Console
- Contattare il supporto tramite la Console Cloud Temple