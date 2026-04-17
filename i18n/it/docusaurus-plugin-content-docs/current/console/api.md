---
title: Documentazione API
---
import ShivaProfil001 from '@site/docs/console/images/shiva_profil_001.png'
import ShivaProfil002 from '@site/docs/console/images/shiva_profil_002.png'
import ShivaProfil003 from '@site/docs/console/images/shiva_profil_003.png'
import ShivaProfil004 from '@site/docs/console/images/shiva_profil_004.png'
import ShivaProfil005 from '@site/docs/console/images/shiva_profil_005.png'
import ShivaApi001 from '@site/docs/console/images/shiva_api_001.png'
import ShivaApi002 from '@site/docs/console/images/shiva_api_002.png'
import ShivaApi003 from '@site/docs/console/images/shiva_api_003.png'
import ShivaApi004 from '@site/docs/console/images/shiva_api_004.png'

## Introduzione

L'API Cloud Temple consente di creare e gestire tutte le risorse cloud in modo programmatico. Tutto ciò che è possibile fare tramite la console Cloud Temple può essere eseguito anche tramite l'API, dalla creazione di macchine virtuali alla configurazione della gestione delle identità e degli accessi.

Questa documentazione vi guida nell'utilizzo dell'API Cloud Temple, dall'autenticazione alle best practice, inclusa la gestione del ciclo di vita degli endpoint.

## Avvio rapido: La vostra prima richiesta API

:::info[Riepilogo - 3 passaggi per iniziare]
1. 🔑 **Generare il PAT** dalla console
2. 🚀 **Testare con curl** su `/iam/v2/roles`
3. ✅ **Analizzare la risposta** JSON
:::

### Prerequisiti

Prima di iniziare, è necessario disporre di un account Cloud Temple con le autorizzazioni appropriate per generare chiavi API.

### Passaggi

1. **Generare la chiave API**: Accedere alla [console Cloud Temple](https://shiva.cloud-temple.com/login) e generare il Personal Access Token (vedere la sezione [Chiavi API](#chiavi-api-personal-access-token) di seguito).

2. **Testare la prima richiesta**: Eseguire il seguente comando curl, sostituendo `<your-personal-access-token>` con il proprio token:

```bash
curl -X GET \
  -H "Authorization: Bearer <your-personal-access-token>" \
  -H "Content-Type: application/json" \
  "https://shiva.cloud-temple.com/api/iam/v2/roles"
```

3. **Analizzare la risposta**: Si riceverà l'elenco dei ruoli IAM disponibili nel tenant, consentendo di comprendere i permessi esistenti.

## Autenticazione

### Chiavi API (Personal Access Token)

La __chiave API__ consente di autenticarsi durante le richieste API. La generazione di una chiave API, nota anche come __Personal Access Token (PAT)__, è un modo sicuro per connettersi alle API della console senza utilizzare un'interfaccia grafica. Ciascuno di questi token è collegato a un tenant e all'utente che lo ha creato.

La creazione di questo token avviene dal proprio account. È possibile generare più chiavi e configurare i permessi per ciascuna entro i limiti dei propri diritti.

#### Creare una chiave API

Per creare una chiave API, è sufficiente __fare clic sul proprio profilo__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

Nel menu del profilo, fare clic su __'Personal Access Token'__

<img src={ShivaProfil003} />

Si vedranno quindi tutte le chiavi API create per questo utente in questo tenant. Fare clic su __'Nuovo token di accesso personale'__

<img src={ShivaProfil002} />

È quindi necessario:

- Specificare il nome di questo nuovo token,
- Impostare una data di scadenza (validità massima 12 mesi),
- Scegliere i permessi associati al token.

I dettagli del token verranno quindi visualizzati. __Attenzione: non sarà più possibile accedere a questi dettagli in seguito.__

Se non si registrano queste informazioni, sarà necessario eliminare e ricreare il token.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Per motivi di sicurezza, si consiglia di creare più token, ciascuno con uno scopo specifico (un token per applicazione o processo aziendale) anziché creare un token con tutti i permessi.

Si vedrà quindi il token appena creato e la sua data di scadenza futura.

<img src={ShivaProfil005} />

:::info[Ciclo di vita del token di autenticazione]
Quando si utilizza il __Personal Access Token (PAT)__ per autenticarsi con l'API, si riceve in cambio un token di accesso. È importante notare che questo token di accesso è un __JSON Web Token (JWT)__ con una durata limitata.

- __Durata__: Ogni token JWT è valido per __5 minuti__.
- __Verifica__: È possibile verificare la data di emissione (`iat`) e la data di scadenza (`exp`) del token decodificandolo. Strumenti online come [jwt.io](https://jwt.io) rendono questa operazione semplice.

Una volta scaduto il token, sarà necessario ri-autenticarsi con il PAT per ottenerne uno nuovo. Pertanto, si consiglia di gestire questo ciclo di vita nei propri script e applicazioni pianificando il rinnovo automatico del token.
:::

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) per le API della console Cloud Temple è disponibile direttamente nell'applicazione:

<img src={ShivaApi001} />

L'accesso all'API richiede l'autenticazione. Una volta autenticati, tutte le operazioni devono includere l'intestazione __'Authorization'__ con il token di accesso bearer ottenuto durante la fase di autenticazione.

Gli URL degli endpoint sono forniti direttamente in __Swagger__ (nell'oggetto "Servers" di ogni pagina API).

### Esplorare la documentazione interattiva

Il portale API consente di:

- Visualizzare tutti gli endpoint disponibili per modulo
- Testare le richieste direttamente dall'interfaccia
- Vedere i modelli di dati (schemi) per ogni risorsa
- Visualizzare i codici di risposta possibili per ogni endpoint

## Struttura degli endpoint

### Formato URL

Gli URL dell'API Cloud Temple seguono una struttura coerente:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{resource}
```

Dove:
- `{module}`: Il modulo interessato (compute, iam, network, backup, ecc.)
- `{version}`: La versione dell'API (v1, v2, ecc.)
- `{resource}`: La risorsa da manipolare (virtual-machines, users, networks, ecc.)

### Esempi di endpoint

```
# Macchine virtuali (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identità e accesso (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Reti
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Organizzazione per moduli

L'API Cloud Temple è organizzata in moduli funzionali:

| Modulo | Descrizione | URL base |
|--------|-------------|----------|
| Console Cloud Temple | Funzionalità generali | `/api/v1/` |
| Identità (IAM) | Gestione utenti e accessi | `/iam/v1/` |
| VMware IaaS | Risorse di virtualizzazione VMware | `/compute/v1/` |
| OpenIaaS | Risorse Xen Orchestra | `/openiaas/v1/` |
| S3 | Archiviazione oggetti | `/s3/v1/` |
| OpenShift | Piattaforma PaaS | `/openshift/v1/` |
| Bastion | Appliance bastion SSH/RDP | `/bastion/v1/` |
| Rete | Gestione rete livello 2 e 3 | `/network/v1/` |
| Housing | Colocation e housing | `/housing/v1/` |
| Marketplace | Catalogo soluzioni | `/marketplace/v1/` |
| Supporto | Ticket e supporto | `/support/v1/` |
| Notifica | Sistema di notifiche | `/notification/v1/` |
| LLMaaS | Intelligenza artificiale | `/llmaas/v1/` |

## Attività

Il tracciamento delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) è gestito tramite la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione riuscita dell'attività. L'identificatore univoco di questa attività viene restituito nelle intestazioni di risposta sotto la chiave 'Location'.

<img src={ShivaApi002} />

Una volta recuperato l'identificatore, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Activity:

<img src={ShivaApi003} />

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la data di esecuzione e lo stato di avanzamento. Ecco il modello di attività:

```json
{
  "id": "UUIDV4",
  "tenantId": "UUIDV4",
  "description": "STRING",
  "type": "ComputeActivity" | "BackupActivity" | "IAMActivity" | "TagActivity" | "RTMSActivity" | "BastionActivity" | "SupportActivity",
  "tags": "STRING[]",
  "initiator": "UUIDV4",
  "creationDate": "DATE",
  "concernedItems": [
    {
      "type": "string",
      "id": "string"
    }
  ],
  "state": "CompletedState | RunningState | WaitingState | FailedState",
  "operationType": "read" | "write"
}
```

### Stati dell'attività

L'oggetto __state__ può assumere forme diverse a seconda dello stato dell'attività:

#### waiting

Stato prima che l'operazione sia iniziata:

```json
waiting: {}
```

#### running

Stato quando l'operazione è in corso:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

Stato se l'operazione è fallita:

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completed

Stato se l'operazione è completata:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Identificatore risorsa creata]
L'identificatore (UUIDv4) della risorsa creata è disponibile nel risultato dell'attività una volta completata.
:::

## Limiti API

### Perché i limiti?

La console Cloud Temple definisce __limiti sul volume di richieste__ che un utente può effettuare all'API in un periodo specificato. L'implementazione di questi limiti di velocità è una misura comune nella gestione delle API, adottata per diversi motivi essenziali:

- __Prevenzione degli abusi__: Questi limiti aiutano a salvaguardare l'integrità dell'API prevenendo l'uso abusivo o negligente che potrebbe compromettere il funzionamento.
- __Garanzia della qualità del servizio__: Regolando l'accesso all'API, assicuriamo una distribuzione equa delle risorse, consentendo a tutti gli utenti di beneficiare di un'esperienza stabile e performante.

Si prenda ad esempio uno script mal progettato o inefficiente che tenta chiamate API ripetute, rischiando la saturazione delle risorse e il degrado delle prestazioni. Stabilendo soglie di richiesta, preveniamo queste situazioni e manteniamo __un servizio fluido e ininterrotto__ per tutti i nostri clienti.

### Quali sono i limiti di velocità per l'API della console Cloud Temple?

Applichiamo restrizioni quantitative sulle interazioni degli utenti con la console per ogni prodotto.

I limiti sono definiti in __richieste al secondo (r/s) e per IP sorgente__. Oltre la soglia limite, il sistema risponderà con un codice di errore HTTP 429, indicando che il limite di richieste autorizzate è stato superato.

Ecco i limiti definiti:

| Prodotto | Soglia limite |
|---|---|
| Console Cloud Temple | 25 r/s |
| Identità (IAM) | 25 r/s |
| VMware IaaS | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Rete | 25 r/s |
| Housing | 25 r/s |
| Marketplace | 25 r/s |
| Supporto | 25 r/s |
| Notifica | 25 r/s |
| LLMaaS | 25 r/s |

### Percorsi specifici

Alcuni endpoint API specifici, in particolare quelli relativi all'autenticazione o ad azioni sensibili, hanno limiti più restrittivi per migliorare la sicurezza e garantire la stabilità.

| Percorso | Soglia limite |
|---|---|
| Autenticazione (IAM) | 5 r/s |
| IaaS - Archiviazione (Datastores) | 20 r/s |
| Marketplace (Contatto) | 1 r/min - 5 r/h |

### Come funzionano i limiti di velocità?

Se il numero di richieste inviate a un endpoint API supera il limite autorizzato, l'endpoint risponderà con __un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero consentito di richieste. Quando ciò si verifica, l'endpoint API fornirà anche un oggetto JSON come risposta, contenente informazioni dettagliate sulla limitazione applicata:

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### Come evitare di effettuare troppe richieste?

Si consiglia di limitare il numero di chiamate API effettuate dalla propria automazione per rimanere al di sotto del limite di velocità impostato per l'endpoint.

Questa situazione si verifica spesso quando vengono eseguite più richieste in parallelo utilizzando più processi o thread.

Esistono diversi modi per migliorare l'efficienza della propria automazione, incluso l'utilizzo di meccanismi di __caching__ e l'implementazione __di un sistema di retry con backoff esponenziale__. Questo metodo comporta una breve pausa quando viene rilevato un errore di limite di velocità, quindi un nuovo tentativo della richiesta. Se la richiesta fallisce di nuovo, la durata della pausa viene aumentata gradualmente fino a quando la richiesta ha successo o fino a quando viene raggiunto un numero massimo di tentativi.

Questo approccio presenta molti vantaggi:

- __Il backoff esponenziale__ garantisce che i tentativi iniziali vengano effettuati rapidamente fornendo ritardi più lunghi in caso di fallimenti ripetuti.
- L'aggiunta di __variazione casuale__ alla pausa aiuta a prevenire che tutti i tentativi si verifichino simultaneamente.

È importante notare che __le richieste non riuscite non influiscono sul limite di velocità__. Tuttavia, reinviare continuamente una richiesta potrebbe non essere una soluzione praticabile a lungo termine, poiché questo comportamento potrebbe cambiare in futuro. Pertanto, si consiglia di non fare affidamento esclusivamente su questo meccanismo.

Le librerie Python __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ sono buoni punti di partenza per implementare strategie di mitigazione.

## Ciclo di vita e obsolescenza degli endpoint

### Politica di obsolescenza

Cloud Temple si impegna a mantenere la compatibilità dell'API nel tempo. Tuttavia, quando è necessario evolvere l'API (nuove funzionalità, ottimizzazioni, correzioni di sicurezza), alcuni endpoint possono diventare obsoleti e poi essere rimossi.

#### Regola minima di 3 mesi

Quando un endpoint viene contrassegnato come obsoleto:

1. **Annuncio ufficiale**: L'obsolescenza viene annunciata nelle note di rilascio della console
2. **Periodo di transizione**: L'endpoint rimane **accessibile e funzionale per almeno 3 mesi** dopo l'annuncio
3. **Data di rimozione**: Viene comunicata una data specifica di rimozione definitiva al momento dell'annuncio
4. **Alternativa documentata**: Il nuovo endpoint sostitutivo è documentato e disponibile

Questa regola di 3 mesi offre il tempo necessario per adattare il codice e migrare ai nuovi endpoint.

### Come identificare un endpoint obsoleto?

#### Nel portale API (Swagger)

Gli endpoint obsoleti appaiono barrati nella documentazione Swagger:


~~POST /v1/vecchio/endpoint~~

La descrizione dell'endpoint include:
- La data di annuncio dell'obsolescenza
- La data di rimozione pianificata
- L'endpoint sostitutivo raccomandato

<img src={ShivaApi004} />

### Best practice per gestire le obsolescenze

1. **Monitorare le funzionalità obsolete**: Consultare regolarmente le funzionalità obsolete nella console per essere informati delle prossime obsolescenze.

2. **Pianificare le migrazioni**: Non appena viene annunciata un'obsolescenza, pianificare la migrazione del codice al nuovo endpoint entro 3 mesi.

3. **Testare i nuovi endpoint**: Testare i nuovi endpoint non appena sono disponibili, anche durante il periodo di transizione.

4. **Documentare le dipendenze**: Mantenere un elenco degli endpoint utilizzati dall'applicazione per facilitare le migrazioni future.

## Best practice

### Sicurezza dei token

:::danger[Regole di sicurezza essenziali]
- 🚫 Non esporre mai i propri token nel codice versionato (Git, ecc.)
- 🔐 Utilizzare variabili di ambiente per memorizzare i token
- 🎯 Creare token con permessi minimi (principio del privilegio minimo)
- 🔄 Rinnovare regolarmente i token (massimo 12 mesi)
- ⚠️ Revocare immediatamente qualsiasi token compromesso
:::

### Gestione degli errori

Gestire sempre gli errori HTTP nel proprio codice. Prestare particolare attenzione ai seguenti codici:

| Codice | Descrizione | Azione consigliata |
|------|-------------|-------------------|
| **401** Unauthorized | Token scaduto o non valido | Ri-autenticarsi con il PAT |
| **403** Forbidden | Permessi insufficienti | Verificare i diritti del token |
| **429** Too Many Requests | Limite di velocità raggiunto | Attendere prima di riprovare (backoff) |
| **500/503** Server Error | Errore server temporaneo | Riprovare più tardi |

### Ottimizzazione delle chiamate API

- Utilizzare la paginazione per elenchi di grandi dimensioni
- Memorizzare in cache i dati che cambiano raramente
- Utilizzare filtri per limitare i dati restituiti
- Raggruppare le operazioni quando possibile
- Monitorare lo stato delle attività asincrone invece di polling intensivo

### Retry con backoff esponenziale

Per gestire errori temporanei o limitazione della velocità (HTTP 429), implementare una strategia di retry con backoff esponenziale:

:::tip[Strategia di retry consigliata]
- ⏱️ **Attesa progressiva**: 1s, 2s, 4s, 8s...
- 🎲 **Variazione casuale**: Evita che tutti i client riprovino simultaneamente
- 🔄 **Limite di tentativi**: Massimo 3-5 tentativi
- 📚 **Librerie Python**: [Backoff](https://pypi.org/project/backoff/) o [Tenacity](https://pypi.org/project/tenacity/)
:::
