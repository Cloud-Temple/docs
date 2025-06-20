---
title: Concetti
sidebar_position: 3
---

## Concetti e Architettura LLMaaS

## 🏗️ Architettura Tecnica

### Infrastruttura Cloud Temple

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Architettura Tecnica LLMaaS Cloud Temple" />

### Componenti Principali

#### 1. **API Gateway LLMaaS**
- **Compatibile con OpenAI** : Integrazione trasparente con l'ecosistema esistente
- **Limitazione delle richieste** : Gestione dei quoti per livello di fatturazione
- **Bilanciamento del carico** : Distribuzione intelligente su 12 macchine GPU
- **Monitoraggio** : Metriche in tempo reale e allarmi

#### 2. **Servizio di Autenticazione**
- **Tokens API sicuri** 
- **Controllo degli accessi** : Permessi granulari per modello
- **Tracce di audit** : Tracciabilità completa degli accessi

## 🤖 Modelli e Tokens

### Catalogo dei Modelli

*Catalogo completo : [Elenco dei modelli](./models)*

### Gestione dei Token

#### **Types de Tokens**
- **Tokens di input** : Il tuo prompt e contesto
- **Tokens di output** : Risposta generata dal modello
- **Tokens di sistema** : Metadati e istruzioni

#### **Calcolo dei Costi**
```
Costo totale = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M) +  (Tokens sortie Raisonnement × 21€/M)
```

#### **Ottimizzazione**
- **Finestra di contesto** : Riutilizza le conversazioni per risparmiare
- **Modelli appropriati** : Scegli la dimensione in base alla complessità
- **Max tokens** : Limita la lunghezza delle risposte

### Tokenizzazione

```python

# Esempio di stima dei token
def estimate_tokens(text: str) -> int:
    """Stima approssimativa: 1 token ≈ 4 caratteri"""
    return len(text) // 4

prompt = "Expliquez la photosynthèse"
response_max = 200  # token massimi desiderati

estimated_input = estimate_tokens(prompt)  # ~6 token
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Costo stimato: {total_cost:.6f}€")
```

## 🔒 Sicurezza e Conformità

### Qualifica SecNumCloud

Il servizio LLMaaS è calcolato su un'infrastruttura IaaS Cloud Temple che beneficia della **qualifica SecNumCloud 3.2** dell'ANSSI, garantendo:

#### **Protezione dei dati**
- **Crittografia end-to-end** : TLS 1.3 per tutti gli scambi
- **Archiviazione sicura** : Dati crittografati a riposo 
- **Isolamento** dell'ambiente

#### **Sovranità Digitale**
- **Hosting Francia** : Datacenter Cloud Temple certificati
- **Diritto francese** : Conformità al RGPD 
- **Nessuna esposizione** : Nessun trasferimento verso cloud esteri e nessun archiviazione dei dati

#### **Audit e Tracciabilità**
- **Log completi** : Tutte le interazioni tracciate
- **Ritenzione** : Conservazione secondo le politiche legali
- **Conformità**

### Controllo di Sicurezza

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controllo di Sicurezza LLMaaS" />

## 📈 Performance e Scalabilità

### Metriche di Prestazioni

#### **Latenza**
- **Tempo di risposta medio** : < 2 secondi per modelli 8B
- **Tempo del primo token** : < 1500ms
- **Banda di streaming** : 15-100 tokens al secondo in base al modello

#### **Banda**
- **Richieste simultanee** : Fino a 1000 richieste/minuto per tenant
- **Scala automatico** : Adattamento carico in tempo reale in base ai modelli richiesti
- **Disponibilità** : Obiettivo SLA del 99,9% di disponibilità mensile

### Monitoraggio in tempo reale

Accesso tramite **Console Cloud Temple** :
- Metriche di utilizzo per modello
- Grafici di latenza e throughput
- Avvisi sui limiti di prestazione
- Storico delle richieste

## 🌐 Integrazione e Ecosistema

### Compatibilità OpenAI

Il servizio LLMaaS è **compatibile** con l'API OpenAI :

```python

# Migrazione trasparente
from openai import OpenAI

# Prima (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Dopo (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Codice identico!
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Modello Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)

### Ecosistema Supportato

#### **Frameworks di Intelligenza Artificiale**
- ✅ **LangChain** : Integrazione nativa
- ✅ **Haystack** : Pipeline di documenti
- ✅ **Semantic Kernel** : Orchestrazione Microsoft
- ✅ **AutoGen** : Agenti conversazionali

#### **Strumenti Sviluppo**
- ✅ **Jupyter** : Notebook interattivi
- ✅ **Streamlit** : Applicazioni web rapide
- ✅ **Gradio** : Interfacce utente per l'IA
- ✅ **FastAPI** : API backend

#### **Piattaforme No-Code**
- ✅ **Zapier** : Automazioni
- ✅ **Make** : Integrazioni visive
- ✅ **Bubble** : Applicazioni web

## 🔄 Ciclo di Vita dei Modelli

### Aggiornamento dei Modelli

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Ciclo di Vita dei Modelli LLMaaS" />

### Politica di Versioning

- **Modelli stabili** : Versioni fisse disponibili per 6 mesi  
- **Modelli sperimentali** : Versioni beta per primi adottatori  
- **Depreciazione** : Avviso di 3 mesi prima del ritiro  
- **Migrazione** : Servizi professionali disponibili per garantire le vostre transizioni

## 💡 Buone Pratiche

### Ottimizzazione dei Costi

1. **Scelta del modello**
   ```python
   # Compito semplice → modello leggero
   if task_complexity == "simple":
       model = "llama3.2:3b"  # Più economico
   else:
       model = "llama3.1:70b"  # Più potente
   ```

2. **Gestione del contesto**
   ```python
   # Riutilizzare le conversazioni
   messages = [
       {"role": "system", "content": "Sei un assistente IA."},
       {"role": "user", "content": "Domanda 1"},
       {"role": "assistant", "content": "Risposta 1"},
       {"role": "user", "content": "Domanda 2"}  # Riutilizza il contesto
   ]
   ```

3. **Limitazione dei token**
   ```python
   response = client.chat.completions.create(
       model="granite3.3:8b",
       messages=messages,
       max_tokens=100,  # Limita la lunghezza
       temperature=0.7
   )
   ```

### Prestazioni

1. **Richieste asincrone**
   ```python
   import asyncio
   import aiohttp
   
   async def batch_requests(prompts):
       tasks = [process_prompt(prompt) for prompt in prompts]
       return await asyncio.gather(*tasks)
   ```

2. **Streaming per UX**
   ```python
   # Interfaccia in tempo reale
   for chunk in client.chat.completions.create(
       model="granite3.3:8b",
       messages=messages,
       stream=True
   ):
       if chunk.choices[0].delta.content:
           print(chunk.choices[0].delta.content, end="")
   ```

### Sicurezza

1. **Convalida degli input**
   ```python
   def sanitize_input(user_input: str) -> str:
       # Pulire le iniezioni potenziali
       cleaned = user_input.replace("```", "")
       return cleaned[:1000]  # Limitare la dimensione
   ```

2. **Gestione degli errori**
   ```python
   try:
       response = client.chat.completions.create(...)
   except Exception as e:
       logger.error(f"LLMaaS error: {e}")
       return "Désolé, erreur temporaire."
   ```