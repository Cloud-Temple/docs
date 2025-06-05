---
title: Guida di Avvio
sidebar_position: 3
---

# Guida di Avvio Rapido

Questo guida ti permette di effettuare la tua prima richiesta all'API LLMaaS in meno di 5 minuti.

## Prerequisiti

- Accesso alla Console Cloud Temple
- Account con le autorizzazioni LLMaaS attivate

## Passo 1: Generare una chiave API

1. Connettiti alla Console Cloud Temple
2. Vai alle impostazioni del tuo account
3. Genera una nuova chiave API LLMaaS
4. Copia e salva la chiave (verrà visualizzata solo una volta)

## Passo 2: Testare la connessione

Verifica che la tua chiave funzioni elencando i modelli disponibili:

```bash
curl -X GET "https://api.ai.cloud-temple.com/v1/models" \
  -H "Authorization: Bearer VOTRE_CLE_API"
```

Dovresti ricevere una lista JSON dei modelli disponibili.

## Passo 3: Prima richiesta

Effettua la tua prima generazione di testo con un modello rapido:

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

Installa la libreria requests e testa con il codice Python:

```bash
pip install requests
```

```python
import requests
import json

# Configurazione
API_KEY = "VOTRE_CLE_API"
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
            "content": "Spiegami la fotosintesi in 3 frasi."
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

Per il tuo primo test, usa uno di questi modelli consigliati:

| Modello | Utilizzo | Velocità | Nota |
|--------|--------|---------|------|
| `granite3.3:8b` | Utilizzo generale, bilanciato | Velocità rapida | Consigliato per iniziare |
| `qwen3:14b` | Compiti complessi | Media | Modalità "thinking" visibile |
| `gemma3:4b` | Test rapidi, prototipazione | Velocità molto rapida | Risposte dettagliate |

Consulta il [catalogo completo dei modelli](./models) per ulteriori opzioni.

## Parametri consigliati

Per iniziare, usa questi parametri:

```json
{
  "temperature": 0.7,    // Creatività moderata
  "max_tokens": 200,     // Risposte concise
  "top_p": 1.0,         // Diversità standard
  "stream": false       // Risposta completa in una volta
}
```

## Gestione degli errori comuni

### Errore 401 - Non autorizzato
```json
{"error": {"message": "Chiave API non valida", "type": "invalid_request_error"}}
```
**Soluzione**: Verifica la tua chiave API nella Console Cloud Temple.

### Errore 400 - Modello non trovato
```json
{"error": {"message": "Modello non trovato", "type": "invalid_request_error"}}
```
**Soluzione**: Usa `/v1/models` per elencare i modelli disponibili.

### Errore 429 - Limite di velocità
```json
{"error": {"message": "Limite di velocità superato", "type": "rate_limit_error"}}
```
**Soluzione**: Aspetta alcuni secondi e riprova.

## Monitoraggio dell'uso

Nella Console Cloud Temple puoi:
- Visualizzare le tue richieste in tempo reale
- Consultare il consumo di token
- Configurare avvisi di costo
- Analizzare le prestazioni per modello

## Passi successivi

Dopo aver completato il tuo primo test:

1. **Esplora i modelli**: Prova diversi modelli in base alle tue esigenze
2. **Ottimizza i prompt**: Migliora la qualità delle risposte
3. **Integra nella tua applicazione**: Consulta la [documentazione API](./api)
4. **Casi d'uso avanzati**: Vedi i [tutori](./tutorials)

## Supporto

In caso di problema:
- Consulta la [documentazione API completa](./api)
- Verifica lo stato del servizio nella Console
- Contatta il supporto tramite la Console Cloud Temple