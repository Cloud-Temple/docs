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

L'API Cloud Temple consente di creare e gestire tutte le tue risorse cloud in modo programmatico. Tutto ciò che è possibile fare tramite la console Cloud Temple può essere realizzato anche tramite l'API, dalla creazione di macchine virtuali alla configurazione della gestione delle identità e degli accessi.

Questa documentazione ti guida nell'utilizzo dell'API Cloud Temple, dall'autenticazione alle best practice, passando per la gestione del ciclo di vita degli endpoint.

## Quickstart : La tua prima richiesta API

:::info[Riepilogo - 3 passaggi per iniziare]
1. 🔑 **Genera il tuo PAT** dalla console
2. 🚀 **Testa con curl** su `/iam/v2/roles`
3. ✅ **Analizza la risposta** JSON
:::

### Prerequisiti

Prima di iniziare, devi disporre di un account Cloud Temple con le autorizzazioni appropriate per generare le chiavi API.

### Passaggi

1. **Genera la tua chiave API** : Accedi alla [console Cloud Temple](https://shiva.cloud-temple.com/login) e genera il tuo Personal Access Token (vedi sezione [Chiavi API](#clés-api-personal-access-token) di seguito).

2. **Testa la tua prima richiesta** : Esegui il seguente comando curl sostituendo `<votre-personal-access-token>` con il tuo token :

```bash
curl -X GET \
  -H "Authorization: Bearer <votre-personal-access-token>" \
  -H "Content-Type: application/json" \
  "https://shiva.cloud-temple.com/api/iam/v2/roles"
```

3. **Analizza la risposta** : Riceverai l'elenco dei ruoli IAM disponibili nel tuo tenant, che ti permetterà di comprendere le autorizzazioni esistenti.

## Autenticazione

### Chiavi API (Personal Access Token)

La __chiave API__ consente di autenticarsi quando si desidera effettuare richieste all'API. La generazione di una chiave API, nota anche come __Token di accesso personale (PAT)__, è un metodo sicuro per connettersi alla Console API senza utilizzare un'interfaccia grafica. Ciascuno di questi token è associato a un tenant e all'utente che lo ha creato.

La creazione di questo token viene effettuata dal proprio account. È possibile generare più chiavi e configurare per ciascuna le autorizzazioni, nei limiti dei propri diritti.

#### Creare una chiave API

Per creare una chiave API, basta __cliccare sul tuo profilo__ :

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

Nel menu del profilo, clicca su __'Get di accesso personale'__

<img src={ShivaProfil003} />

A schermo vengono visualizzate tutte le chiavi API create per questo utente in questo tenant. Clicca su __'Nuovo get di accesso personale'__

<img src={ShivaProfil002} />

Devi quindi:

- Indicare il nome di questo nuovo get,
- Indicare una data di scadenza (massimo 12 mesi di validità),
- Scegliere le autorizzazioni associate al get.

Vengono quindi visualizzati i dettagli relativi al tuo get. __Attenzione, non è più possibile recuperarlo.__

Se non annoti queste informazioni, dovrai eliminare e ricreare il get.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Per motivi di sicurezza, si consiglia di creare più token, ciascuno con uno scopo specifico (un token per ogni applicazione o processo aziendale) anziché creare un unico token con tutte le autorizzazioni.

Vedrai quindi il nuovo get creato e la sua futura data di scadenza.

<img src={ShivaProfil005} />

:::info[Ciclo di vita del token di autenticazione]
Quando utilizzi il tuo __Personal Access Token (PAT)__ per autenticarti presso l'API, ricevi in risposta un token di accesso. È importante notare che questo token di accesso è un __JSON Web Token (JWT)__ con una durata di vita limitata.

- __Durata di vita__ : Ogni token JWT è valido per una durata di __5 minuti__.
- __Verifica__ : Puoi verificare la data di emissione (`iat`) e la data di scadenza (`exp`) del tuo token decodificandolo. Strumenti online come [jwt.io](https://jwt.io) ti permettono di farlo facilmente.

Una volta scaduto il token, dovrai riautenticarti con il tuo PAT per ottenerne uno nuovo. Si consiglia quindi di gestire questo ciclo di vita nei tuoi script e applicazioni prevedendo un rinnovo automatico del token.
:::

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

<img src={ShivaApi001} />

L'accesso alle API richiede l'autenticazione. Una volta autenticati, tutte le operazioni devono includere l'header __'Authorization'__ con il bearer access token ottenuto durante la fase di autenticazione.

L'URL dei punti di accesso è indicata direttamente in __Swagger__ (nell'oggetto "Servers" di ciascuna pagina API).

### Esplorare la documentazione interattiva

Il portale API consente di:

- Consultare tutti gli endpoint disponibili per modulo
- Testare direttamente le richieste dall'interfaccia
- Visualizzare i modelli di dati (schemi) per ogni risorsa
- Consultare i codici di risposta possibili per ogni endpoint

## Struttura degli endpoint

### Formato degli URL

Gli URL dell'API Cloud Temple seguono una struttura coerente:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{ressource}
```

Dove:
- `{module}` : Il modulo interessato (compute, iam, network, backup, ecc.)
- `{version}` : La versione dell'API (v1, v2, ecc.)
- `{ressource}` : La risorsa da gestire (virtual-machines, users, networks, ecc.)

### Esempi di endpoint
```
# Machines virtuelles (Compute)
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
POST   https://shiva.cloud-temple.com/api/compute/v1/virtual-machines
GET    https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
PATCH  https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}
DELETE https://shiva.cloud-temple.com/api/compute/v1/virtual-machines/{id}

# Identité et accès (IAM)
GET    https://shiva.cloud-temple.com/api/iam/v1/users
POST   https://shiva.cloud-temple.com/api/iam/v1/users
GET    https://shiva.cloud-temple.com/api/iam/v1/users/{id}

# Réseaux
GET    https://shiva.cloud-temple.com/api/network/v1/virtual-networks
POST   https://shiva.cloud-temple.com/api/network/v1/virtual-networks
```

### Organizzazione per modulo

L'API Cloud Temple è organizzata in moduli funzionali:

| Modulo | Descrizione | URL di base |
|--------|-------------|----------|
| Console Cloud Temple | Funzionalità generali | `/api/v1/` |
| Identità (IAM) | Gestione di utenti e accessi | `/iam/v1/` |
| IaaS VMware | Risorse di virtualizzazione VMware | `/compute/v1/` |
| OpenIaaS | Risorse Xen Orchestra | `/openiaas/v1/` |
| S3 | Archiviazione oggetti | `/s3/v1/` |
| OpenShift | Piattaforma PaaS | `/openshift/v1/` |
| Bastion | Appliance bastion SSH/RDP | `/bastion/v1/` |
| Réseau | Gestione di rete livello 2 e 3 | `/network/v1/` |
| Hébergement | Colocazione e housing | `/housing/v1/` |
| Marketplace | Catalogo di soluzioni | `/marketplace/v1/` |
| Support | Ticket e assistenza | `/support/v1/` |
| Notification | Sistema di notifiche | `/notification/v1/` |
| LLMaaS | Intelligenza artificiale | `/llmaas/v1/` |

## Le attività

Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) è gestito tramite la gestione delle attività. Ogni richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione riuscita dell'attività. L'identificativo univoco di questa attività viene restituito nelle intestazioni della risposta, sotto la chiave 'Location'.

<img src={ShivaApi002} />

Una volta recuperato l'identificativo, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Activity :

<img src={ShivaApi003} />

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la sua data di esecuzione, nonché il suo stato di avanzamento. Ecco il modello di un'attività :

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

### Stati di un'attività

L'oggetto __state__ può assumere diverse forme a seconda dello stato dell'attività, vale a dire:

#### in attesa

Stato prima che l'operazione sia iniziata:

```json
waiting: {}
```

#### esecuzione

Stato quando l'operazione è in corso:

```json
running: {
  "status": "string",
  "startDate": "Date",
  "progression": "number"
}
```

#### failed

Stato se l'operazione è fallita :

```json
failed: {
  "startDate": "Date",
  "stopDate": "Date",
  "reason": "string"
}
```

#### completato

Stato quando l'operazione è terminata :

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Identifiant de la ressource créée]
L'identificativo (UUIDv4) della risorsa creata è disponibile nel risultato dell'attività una volta completata.
:::

## Limiti API

### Perché dei limiti?

La console Cloud Temple definisce __dei limiti sul volume delle richieste__ che un utente può inviare all'API in un determinato periodo di tempo. L'istituzione di questi limiti di frequenza è una pratica comune nella gestione delle API, adottata per diversi motivi essenziali :

- __Prevenzione degli abusi__ : Questi limiti contribuiscono a preservare l'integrità dell'API impedendo utilizzi abusivi o impropri che potrebbero comprometterne il funzionamento.
- __Garanzia della qualità del servizio__ : Regolando l'accesso all'API, garantiamo una distribuzione equa delle risorse, consentendo così a tutti gli utenti di beneficiare di un'esperienza stabile e performante.

Prendiamo ad esempio uno script mal progettato o inefficiente che tenta chiamate ripetute all'API, rischiando di saturare le risorse e degradare le prestazioni. Stabilendo dei limiti di richieste, preveniamo queste situazioni e assicuriamo il mantenimento di __un servizio fluido e senza interruzioni__ per l'intera nostra clientela.

### Quali sono i limiti di rate per l'API della console Cloud Temple ?

Applichiamo restrizioni quantitative sulle interazioni degli utenti con la console per ciascun prodotto.

I limiti sono definiti in __richieste al secondo (r/s) e per IP di origine__. Oltre la soglia limite, il sistema risponderà con un codice di errore HTTP 429, indicando che il limite di richieste consentite è stato superato.

Ecco i limiti definiti :

| Prodotto | Soglia limite |
|---|---|
| Console Cloud Temple | 25 r/s |
| Identità (IAM) | 25 r/s |
| IaaS VMware | 25 r/s |
| OpenIaaS | 25 r/s |
| S3 | 25 r/s |
| OpenShift | 25 r/s |
| Bastion | 25 r/s |
| Rete | 25 r/s |
| Hosting | 25 r/s |
| Marketplace | 25 r/s |
| Supporto | 25 r/s |
| Notifiche | 25 r/s |
| LLMaaS | 25 r/s |

### Endpoint specifici

Alcuni endpoint API specifici, in particolare quelli legati all'autenticazione o ad azioni sensibili, presentano limiti più restrittivi per rafforzare la sicurezza e garantire la stabilità.

| Endpoint | Soglia limite |
|---|---|
| Autenticazione (IAM) | 5 r/s |
| IaaS - Storage (Datastores) | 20 r/s |
| Marketplace (Contact) | 1 r/min - 5 r/h |

### Come funzionano i limiti di velocità?

Se il numero di richieste inviate a un endpoint API supera il limite consentito, l'endpoint risponderà restituendo __un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero di richieste consentite. Quando ciò accade, l'endpoint fornirà inoltre un oggetto JSON come risposta, che conterrà informazioni dettagliate sulla limitazione applicata:

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

Questa situazione si verifica spesso quando più richieste vengono eseguite in parallelo, utilizzando più processi o thread.

Esistono diversi modi per migliorare l'efficienza della propria automazione, tra cui l'utilizzo di meccanismi di __caching__ e l'implementazione di __un sistema di ritentativo con attenuazione progressiva__. Questo metodo consiste nell'effettuare una breve pausa quando si verifica un errore di limite di velocità, per poi ritentare la richiesta. Se la richiesta fallisce nuovamente, la durata della pausa viene aumentata progressivamente fino al successo della richiesta o fino al raggiungimento di un numero massimo di tentativi.

Questo approccio presenta numerosi vantaggi:

- __L'attenuazione progressiva__ garantisce che i primi tentativi vengano eseguiti rapidamente, prevedendo al contempo ritardi più lunghi in caso di fallimenti ripetuti.
- L'aggiunta di __una variazione casuale__ alla pausa contribuisce a evitare che tutti i tentativi vengano eseguiti contemporaneamente.

È importante notare che __le richieste non andate a buon fine non influiscono sul vostro limite di velocità__. Tuttavia, continuare a inviare una richiesta potrebbe non rappresentare una soluzione sostenibile a lungo termine, poiché tale comportamento potrebbe essere modificato in futuro. Si consiglia pertanto di non fare affidamento esclusivamente su questo meccanismo.

Le librerie Python __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ rappresentano un buon punto di partenza per implementare strategie di attenuazione.

## Ciclo di vita e deprecazione degli endpoint

### Politica di deprecazione

Cloud Temple si impegna a mantenere la compatibilità della propria API nel tempo. Tuttavia, quando è necessario evolvere l'API (nuove funzionalità, ottimizzazioni, correzioni di sicurezza), alcuni endpoint possono essere deprecati e successivamente rimossi.

#### Regola dei 3 mesi minimi

Quando un endpoint è contrassegnato come deprecato :

1. **Annuncio ufficiale** : La deprecazione viene annunciata nelle note di versione della console
2. **Periodo di transizione** : L'endpoint rimane **accessibile e funzionante per almeno 3 mesi** dopo l'annuncio
3. **Data di rimozione** : Viene comunicata una data precisa per la rimozione definitiva fin dall'annuncio
4. **Alternativa documentata** : Il nuovo endpoint di sostituzione è documentato e disponibile

Questa regola dei 3 mesi vi lascia il tempo necessario per adattare il codice e migrare verso i nuovi endpoint.

### Come identificare un endpoint deprecato?

#### Nel portale API (Swagger)

Gli endpoint deprecati appaiono barrati nella documentazione Swagger :

~~POST /v1/ancien/endpoint~~

La descrizione dell'endpoint include :
- La data di annuncio della deprecazione
- La data di rimozione prevista
- L'endpoint di sostituzione consigliato

<img src={ShivaApi004} />

### Buone pratiche per gestire le deprecazioni

1. **Monitora le funzionalità deprecate** : Consulta regolarmente le funzionalità deprecate nella console per essere informato sulle deprecazioni imminenti.

2. **Pianifica le tue migrazioni** : Non appena viene annunciata una deprecazione, pianifica la migrazione del tuo codice verso il nuovo endpoint entro 3 mesi.

3. **Testa i nuovi endpoint** : Testa i nuovi endpoint non appena sono disponibili, anche durante il periodo di transizione.

4. **Documenta le tue dipendenze** : Mantieni un elenco degli endpoint utilizzati dalla tua applicazione per facilitare le migrazioni future.

## Buone pratiche

### Sicurezza dei token

:::danger[Regole di sicurezza essenziali]
- 🚫 Non esporre mai i propri token nel codice versionato (Git, ecc.)
- 🔐 Utilizzare variabili di ambiente per memorizzare i token
- 🎯 Creare token con permessi minimi (principio del minimo privilegio)
- 🔄 Rinnovare regolarmente i propri token (massimo 12 mesi)
- ⚠️ Revocare immediatamente qualsiasi token compromesso
:::

### Gestione degli errori

Gestisci sempre gli errori HTTP nel codice. Presta particolare attenzione ai seguenti codici :

| Codice | Descrizione | Azione consigliata |
|------|-------------|-------------------|
| **401** Non autorizzato | Token scaduto o non valido | Rieautenticarsi con il PAT |
| **403** Vietato | Autorizzazioni insufficienti | Verificare i permessi del token |
| **429** Troppe richieste | Limite di frequenza raggiunto | Attendere prima di riprovare (backoff) |
| **500/503** Errore server | Errore server temporaneo | Riprovare più tardi |

### Ottimizzazione delle chiamate API
- Utilizzare la paginazione per gli elenchi di grandi dimensioni
- Memorizzare nella cache i dati che cambiano raramente
- Utilizzare i filtri per limitare i dati restituiti
- Raggruppare le operazioni quando possibile
- Monitorare lo stato delle attività asincrone invece di effettuare un polling intensivo

### Retry con backoff esponenziale

Per gestire gli errori temporanei o il rate limiting (HTTP 429), implementa una strategia di retry con backoff esponenziale:

:::tip[Strategia di retry consigliata]
- ⏱️ **Attesa progressiva** : 1s, 2s, 4s, 8s...
- 🎲 **Variazione casuale** : Evita che tutti i client riprovino simultaneamente
- 🔄 **Limite di tentativi** : Massimo 3-5 tentativi
- 📚 **Librerie Python** : [Backoff](https://pypi.org/project/backoff/) o [Tenacity](https://pypi.org/project/tenacity/)
:::