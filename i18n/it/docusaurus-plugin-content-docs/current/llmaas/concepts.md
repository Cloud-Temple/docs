---
title: Concetti
posizione_barra_laterale: 3
---

# Concetti e Architettura LLMaaS

## 🏗️ Architettura Tecnica

### Infrastruttura Cloud Temple

import ArchitectureLLMaaS from './images/llmaas_architecture_001.png';

<img src={ArchitectureLLMaaS} alt="Architettura Tecnica LLMaaS Cloud Temple" />

### Componenti Principali

#### 1. **API Gateway LLMaaS**
- **Compatibile con OpenAI** : Integrazione trasparente con l'ecosistema esistente
- **Limitazione delle richieste** : Gestione dei quoti per livello di fatturazione
- **Equilibrio del carico** : Distribuzione intelligente su 12 macchine GPU
- **Monitoraggio** : Metriche in tempo reale e alerting

#### 2. **Servizio di Autenticazione**  
- **Token API sicuri**  
- **Controllo di accesso** : Permessi granulari per modello  
- **Tracciabilità completa** : Tracciabilità completa degli accessi

## 🤖 Modelli e Token

### Catalogo dei Modelli

*Catalogo completo : [Elenco dei modelli](./models)*

### Gestione dei Token

#### **Tipi di Token**
- **Token di input** : Il tuo prompt e contesto
- **Token di output** : Risposta generata dal modello
- **Token di sistema** : Metadati e istruzioni

#### **Calcolo dei Costi**
```
Coût total = (Tokens entrée × 0.9€/M) + (Tokens sortie × 4€/M) +  (Tokens sortie Raisonnement × 21€/M)
```

#### **Ottimizzazione**
- **Context window** : Riutilizza le conversazioni per risparmiare
- **Modelli appropriati** : Scegli la dimensione in base alla complessità
- **Max tokens** : Limita la lunghezza delle risposte

### Tokenizzazione

```python
```

# Esempio di stima dei token
def estimate_tokens(text: str) -> int:
    """Stima approssimativa: 1 token ≈ 4 caratteri"""
    return len(text) // 4

prompt = "Spiega la fotosintesi"
response_max = 200  # token massimi desiderati

estimated_input = estimate_tokens(prompt)  # ~6 token
total_cost = (estimated_input * 0.9 + response_max * 4) / 1_000_000
print(f"Costo stimato: {total_cost:.6f}€")
```

## 🔒 Sicurezza e Conformità

### Qualifica SecNumCloud

Il servizio LLMaaS è calcolato su un'infrastruttura IaaS Cloud Temple che gode della **qualifica SecNumCloud 3.2** dell'ANSSI, garantendo:

#### **Protezione dei Dati**
- **Crittografia end-to-end** : TLS 1.3 per tutti gli scambi
- **Archiviazione sicura** : Dati crittografati a riposo 
- **Isolamento** dell'ambiente

#### **Sovranità Digitale**
- **Hosting Francia** : Datacenters Cloud Temple certificati
- **Diritto francese** : Conformità al RGPD 
- **Nessuna esposizione** : Nessun trasferimento verso cloud esteri e nessun archiviazione dei dati

#### **Audit e Tracciabilità**
- **Log completi** : Tutte le interazioni tracciate
- **Ritenzione** : Conservazione secondo le politiche legali
- **Compliance**

### Controlli di Sicurezza

import SecurityControls from './images/llmaas_security_002.png';

<img src={SecurityControls} alt="Controlli di Sicurezza LLMaaS" />

## 📈 Prestazioni e Scalabilità

### Metriche di prestazione

#### **Latenza**
- **Tempo di risposta medio** : < 2 secondi per modelli 8B
- **Tempo del primo token** : < 1500ms
- **Banda di streaming** : 15-100 token/al secondo in base al modello

#### **Banda**
- **Richieste simultanee** : Fino a 1000 richieste/minuto per tenant
- **Scaling automatico** : Adattamento della capacità in tempo reale in base ai modelli richiesti
- **Disponibilità** : Obiettivo SLA del 99,9% di disponibilità mensile

### Monitoraggio in tempo reale

Accesso tramite **Console Cloud Temple**:
- Metriche di utilizzo per modello
- Grafici di latenza e throughput
- Avvisi sui limiti di prestazione
- Storico delle richieste

## 🌐 Integrazione e Ecosistema

### Compatibilità OpenAI

Il servizio LLMaaS è **compatibile** con l'API OpenAI :

```python
```

# Migrazione trasparente
from openai import OpenAI

# Prima (OpenAI)
client_openai = OpenAI(api_key="sk-...")

# Dopo (Cloud Temple LLMaaS)
client_ct = OpenAI(
    api_key="votre-token-cloud-temple",
    base_url="https://api.ai.cloud-temple.com/v1"
)

# Codice identico !
response = client_ct.chat.completions.create(
    model="granite3.3:8b",  # Modèle Cloud Temple
    messages=[{"role": "user", "content": "Bonjour"}]
)

### Ecosistema Supportato

#### **Framework di Intelligenza Artificiale**
- ✅ **LangChain** : Integrazione nativa
- ✅ **Haystack** : Pipeline di documenti
- ✅ **Semantic Kernel** : Orchestrazione Microsoft
- ✅ **AutoGen** : Agenti conversazionali

#### **Strumenti di Sviluppo**
- ✅ **Jupyter** : Notebook interattivi
- ✅ **Streamlit** : Applicazioni web rapide
- ✅ **Gradio** : Interfacce utente per l'IA
- ✅ **FastAPI** : API backend

#### **Piattaforme Senza Codice**
- ✅ **Zapier** : Automazioni
- ✅ **Make** : Integrazioni visive
- ✅ **Bubble** : Applicazioni web

## 🔄 Ciclo di Vita dei Modelli

### Aggiornamento dei Modelli

import ModelLifecycle from './images/llmaas_lifecycle_003.png';

<img src={ModelLifecycle} alt="Ciclo di Vita dei Modelli LLMaaS" />

### Politica di Versioning

- **Modelli stabili** : Versioni fisse disponibili per 6 mesi  
- **Modelli sperimentali** : Versioni beta per early adopters  
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
       # Pulire le potenziali iniezioni
       cleaned = user_input.replace("```", "")
       return cleaned[:1000]  # Limitare la dimensione
   ```

2. **Gestione degli errori**
   ```python
   try:
       response = client.chat.completions.create(...)
   except Exception as e:
       logger.error(f"Errore LLMaaS: {e}")
       return "Spiacente, errore temporaneo."
   ```