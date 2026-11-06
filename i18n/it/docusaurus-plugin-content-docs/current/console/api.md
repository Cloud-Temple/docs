---
title: Documentazione dell'API della Console
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

L'API Cloud Temple consente di creare e gestire l'intero insieme delle proprie risorse cloud in modo programmatico. Tutto ciò che è possibile fare tramite la console Cloud Temple può essere realizzato anche tramite l'API, dalla creazione di macchine virtuali alla configurazione della gestione delle identità e degli accessi.

Questa documentazione guida l'utilizzo dell'API Cloud Temple, dall'autenticazione alle best practice, passando per la gestione del ciclo di vita degli endpoint.

## Quickstart: la prima richiesta API

:::info[In sintesi - 3 passaggi per iniziare]
1. 🔑 **Generare il PAT** dalla console
2. 🔄 **Scambiare ID e secret con un JWT**
3. 🚀 **Chiamare l'API con questo JWT** nell'header `Authorization`
:::

### Prerequisiti

Prima di iniziare, verificare i seguenti punti:

- **Account e tenant**: il proprio account dispone del permesso `iam_offline_access` nel tenant in cui si desidera **creare** il PAT.
- **Permessi del PAT**: selezionare solo i permessi necessari per le operazioni che lo script eseguirà. Non è necessario aggiungere `iam_offline_access` ai permessi del PAT per utilizzarlo sul punto di autenticazione.
- **Accesso di rete**: l'IP pubblico di uscita utilizzato dallo script deve essere autorizzato per l'organizzazione. Consultare [l'aggiunta di un indirizzo IP in Amministrazione > Accessi](./onboarding.md#aggiungere-un-indirizzo-ip). Prevedere circa **10 minuti** per la presa in considerazione di un'aggiunta. La consultazione e la modifica di questa lista richiedono rispettivamente `console_public_access_read` e `console_public_access_write`; questi permessi non sono necessari al PAT per autenticarsi.
- **Strumenti**: gli esempi seguenti utilizzano `curl` e un shell compatibile Bash.

:::warning[Il browser e lo script possono utilizzare IP diversi]
Una connessione riuscita alla Console non valida l'accesso di rete dello script. Un proxy, un VPN o un runner CI può utilizzare un altro IP pubblico di uscita. L'indirizzo configurato per raggiungere un proxy non è necessariamente l'indirizzo pubblico con cui esce su Internet. Far confermare quest'ultimo dal proprio team di rete e autorizzarlo per l'organizzazione interessata.
:::

### Passaggi

1. **Generare il PAT**: accedere alla [console Cloud Temple](https://shiva.cloud-temple.com/login), selezionare il tenant interessato e creare un Personal Access Token (vedere [Chiavi API](#chiavi-api-personal-access-token)). Conservare il suo **ID** e il suo **secret**. L'ID atteso è quello del PAT, non quello del tenant, dell'organizzazione o dell'utente.

2. **Ottenere un token di accesso JWT**: sostituire i valori fittizi `ID_DU_PAT` e `SECRET_DU_PAT` con quelli dello stesso PAT, non scaduto e non revocato. Inviare una richiesta **POST**, con un corpo JSON valido e l'header `Content-Type: application/json`, all'URL completo sottostante, che include **`/api/iam`**. Nessun Bearer token preliminare è necessario su questo punto di autenticazione.

```bash
ACCESS_TOKEN=$(curl --fail --silent --show-error \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"id":"ID_DU_PAT","secret":"SECRET_DU_PAT"}' \
  'https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token')
```

In caso di successo (HTTP 200), il corpo della risposta contiene il JWT, conservato qui nella variabile `ACCESS_TOKEN`. Se il comando fallisce, consultare la [risoluzione dei problemi](#risoluzione-dei-problemi-dellautenticazione-pat) prima di continuare.

3. **Chiamare un'API con il JWT**: utilizzare questo token di accesso in `Authorization: Bearer`. L'esempio seguente interroga l'elenco dei ruoli IAM:

```bash
curl --fail --silent --show-error \
  --header "Authorization: Bearer ${ACCESS_TOKEN}" \
  'https://shiva.cloud-temple.com/api/iam/v2/roles'
```

Il Bearer atteso è il **JWT ottenuto al passaggio 2**, né l'ID né il secret del PAT. Le operazioni successive restano soggette ai permessi concessi al PAT.

:::caution[Proteggere le credenziali]
I valori dell'esempio sono fittizi. Nelle proprie automazioni, fornire il secret tramite il proprio gestore di secret ed evitare di salvarlo nel codice, nella cronologia dello shell o nei log. Non condividere né il secret del PAT né il JWT ottenuto.
:::

## Autenticazione

### Chiavi API (Personal Access Token)

La __chiave API__ consente di autenticarsi quando si desidera effettuare richieste sull'API. La generazione di una chiave API, anche chiamata __Personal Access Token (PAT)__, è un modo sicuro per connettersi alle API Console senza passare da un'interfaccia grafica. Ciascuno di questi token è legato a un tenant e all'utente che lo ha creato.

La creazione di questo token avviene dal proprio account e richiede il permesso `iam_offline_access`. È possibile generare più chiavi e configurare per ciascuna le autorizzazioni nei limiti dei propri diritti. Questo permesso di creazione è distinto dai permessi operativi del PAT: lo scambio del suo ID e del suo secret con un JWT non richiede che esso stesso possieda `iam_offline_access`.

#### Creare una chiave API

Per creare una chiave API, basta __cliccare sul proprio profilo__:

<img src={ShivaProfil001} style={{maxWidth: '300px', width: '100%'}} />

Nel menu del profilo, cliccare su __'Token di accesso personale'__

<img src={ShivaProfil003} />

A questo punto si visualizzano a schermo tutte le chiavi API che sono state create per questo utente in questo tenant. Cliccare su __'Nuovo token di accesso personale'__

<img src={ShivaProfil002} />

È necessario quindi:

- Indicare il nome di questo nuovo token,
- Indicare una data di scadenza (massimo 12 mesi di validità),
- Selezionare i permessi associati al token.

I dettagli relativi al proprio token vengono quindi visualizzati. __Attenzione, non è più possibile accedervi a posteriori.__

Se non si annotano queste informazioni, sarà necessario distruggere e ricreare il token.

<img src={ShivaProfil004} style={{maxWidth: '600px', width: '100%'}} />

Per ragioni di sicurezza, è raccomandato creare più token ciascuno con una utilità specifica (un token per ogni applicazione o per ogni processo operativo) piuttosto che creare 1 token con l'insieme dei diritti.

Si visualizza quindi il nuovo token creato e la sua futura data di scadenza.

<img src={ShivaProfil005} />

:::info[Ciclo di vita del token di autenticazione]
Quando si utilizza il proprio __Personal Access Token (PAT)__ per autenticarsi presso l'API, si riceve in cambio un token di accesso. È importante notare che questo token di accesso è un __JSON Web Token (JWT)__ con una durata limitata.

- __Durata di vita__: Ciascun token JWT è valido per una durata di __5 minuti__.
- __Verifica__: È possibile consultare la data di emissione (`iat`) e la data di scadenza (`exp`) decodificando il JWT localmente. Non trasmettere un token attivo a un servizio di decodifica di terze parti. La sola decodifica non verifica la sua firma.

Una volta scaduto il token, sarà necessario ri-autenticarsi con il PAT per ottenerne uno nuovo. È quindi raccomandato gestire questo ciclo di vita nei propri script e applicazioni prevedendo un rinnovo automatico del token.
:::

### Risoluzione dei problemi dell'autenticazione PAT

Iniziare identificando la richiesta che fallisce: **lo scambio ID/secret** o **la chiamata operativa con il JWT**. I controlli da effettuare non sono gli stessi.

| Sintomo | Verifiche |
|---|---|
| Richiesta di autenticazione rifiutata | Verificare il metodo **POST**, l'URL completo `https://shiva.cloud-temple.com/api/iam/v2/auth/personal_access_token`, il tipo `application/json` e un corpo contenente le stringhe `id` e `secret`. In Postman, scegliere un corpo **raw / JSON**. Non inviare questo corpo con un metodo GET. |
| Fallimento dell'autenticazione nonostante una richiesta conforme | Verificare che l'ID e il secret corrispondano allo **stesso PAT**, nel tenant atteso, e che questo PAT non sia né scaduto né revocato. Non utilizzare l'ID del tenant al posto dell'ID del PAT. |
| **HTTP 403**, in particolare con una pagina HTML di rifiuto | Questo stato non dimostra una mancanza di permessi IAM. Verificare l'IP pubblico di uscita effettivo e la lista di accessi dell'organizzazione, quindi il proxy e la forma della richiesta: un proxy o un firewall applicativo (WAF) può rifiutare la richiesta prima che raggiunga l'API. Un corpo HTML può aiutare a identificare questo rifiuto, senza essere sufficiente a determinarne la causa. |
| Lo scambio riesce, ma la chiamata operativa fallisce | Verificare che l'header Bearer contenga il JWT ottenuto, che quest'ultimo non sia scaduto, e che il PAT possieda i permessi richiesti dall'operazione nel tenant corretto. Aggiungere `iam_offline_access` al PAT non risolve da solo un rifiuto su un'operazione operativa. |

Se il problema persiste, trasmettere al supporto l'ora del test **con il fuso orario**, il metodo e l'URL, lo stato HTTP, l'IP pubblico di uscita confermato, nonché la risposta e un eventuale identificativo di richiesta. Fornire un comando o uno screenshot **espurgato**: mascherare il secret, il JWT, gli header `Authorization` e `Proxy-Authorization`, nonché i cookie. Lo stato HTTP da solo non consente di identificare con certezza il componente che ha rifiutato la richiesta.

## Accesso al portale API

La documentazione OpenAPI 3.0 (Swagger) delle API della console Cloud Temple è disponibile direttamente nell'applicazione:

<img src={ShivaApi001} />

Le operazioni protette delle API richiedono l'header __`Authorization`__ con il Bearer JWT ottenuto durante la fase di autenticazione. Lo scambio iniziale dell'ID e del secret del PAT descritto sopra non richiede questo header.

L'URL dei punti di accesso è data direttamente in __Swagger__ (nell'oggetto "Servers" di ogni pagina API).

### Esplorare la documentazione interattiva

Il portale API consente di:

- Consultare l'insieme degli endpoint disponibili per modulo
- Testare direttamente le richieste dall'interfaccia
- Visualizzare i modelli di dati (schemi) per ciascuna risorsa
- Consultare i codici di risposta possibili per ciascun endpoint

## Struttura degli endpoint

### Formato degli URL

Gli URL dell'API Cloud Temple seguono una struttura coerente:

```
https://shiva.cloud-temple.com/api/{module}/v{version}/{ressource}
```

Dove:
- `{module}`: Il modulo interessato (compute, iam, network, backup, ecc.)
- `{version}`: La versione dell'API (v1, v2, ecc.)
- `{ressource}`: La risorsa da manipolare (virtual-machines, users, networks, ecc.)

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

| Modulo | Descrizione | Base URL |
|--------|-------------|----------|
| Console Cloud Temple | Funzionalità generali | `/api/v1/` |
| Identità (IAM) | Gestione degli utenti e degli accessi | `/iam/v1/` |
| IaaS VMware | Risorse di virtualizzazione VMware | `/compute/v1/` |
| OpenIaaS | Risorse Xen Orchestra | `/openiaas/v1/` |
| S3 | Storage di oggetti | `/s3/v1/` |
| OpenShift | Piattaforma PaaS | `/openshift/v1/` |
| Bastion | Appliance bastion SSH/RDP | `/bastion/v1/` |
| Rete | Gestione di rete livello 2 e 3 | `/network/v1/` |
| Hosting | Colocation e housing | `/housing/v1/` |
| Marketplace | Catalogo di soluzioni | `/marketplace/v1/` |
| Support | Ticket e assistenza | `/support/v1/` |
| Notifica | Sistema di notifiche | `/notification/v1/` |
| LLMaaS | Intelligenza artificiale | `/llmaas/v1/` |

## Le attività

Il monitoraggio delle richieste di tipo scrittura (POST, PUT, PATCH, DELETE) è assicurato tramite la gestione delle attività. Ciascuna richiesta di questo tipo genera automaticamente un'attività associata. Un codice di stato HTTP 201 conferma la creazione riuscita dell'attività. L'identificativo univoco di questa attività viene restituito negli header della risposta, sotto la chiave 'Location'.

<img src={ShivaApi002} />

Una volta recuperato l'identificativo, è possibile accedere ai dettagli dell'attività utilizzando l'API del modulo Activity:

<img src={ShivaApi003} />

Il contenuto dell'attività include tutte le informazioni essenziali per identificare l'operazione, la sua data di esecuzione, nonché il suo stato di avanzamento. Ecco il modello di un'attività:

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

L'oggetto __state__ può assumere diverse forme a seconda dello stato dell'attività, ovvero:

#### waiting

Stato prima che l'operazione abbia iniziato:

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

Stato se l'operazione è terminata:

```json
completed: {
  "startDate": "Date",
  "stopDate": "Date",
  "result": "string"
}
```

:::info[Identificativo della risorsa creata]
L'Identificativo (UUIDv4) della risorsa creata è disponibile nel risultato dell'attività una volta che questa è completata.
:::

## Limiti API

### Perché dei limiti?

La console Cloud Temple definisce __dei massimali sul volume di richieste__ che un utente può indirizzare all'API su un determinato periodo. L'istituzione di questi massimali di frequenza è una misura comune nella gestione delle API, adottata per diversi motivi essenziali:

- __Prevenzione degli abusi__: Questi limiti contribuiscono alla salvaguardia dell'integrità dell'API prevenendo gli usi abusivi o impropri suscettibili di comprometterne il funzionamento.
- __Garanzia della qualità del servizio__: Regolando l'accesso all'API, ci si assicura una distribuzione equa delle risorse, consentendo così a tutti gli utenti di beneficiare di un'esperienza stabile e performante.

Prendiamo l'esempio di uno script mal progettato o inefficace che tenta chiamate ripetitive all'API, rischiando di saturare le risorse e di degradare le prestazioni. Stabilendo delle soglie di richieste, si prevengono queste situazioni e si assicura il mantenimento di __un servizio fluido e senza interruzioni__ per l'intera clientela.

### Quali sono i limiti di rate per l'API della console Cloud Temple ?

Applichiamo restrizioni quantitative sulle interazioni degli utenti con la console per ogni prodotto.

I limiti sono definiti in __richieste per secondo (r/s) e per IP di origine__. Oltre la soglia limite, il sistema risponderà con un codice di errore HTTP 429, segnalando che il limite di richieste consentite è stato superato.

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
| Notifica | 25 r/s |
| LLMaaS | 25 r/s |

### Route specifiche

Alcuni endpoint API specifici, in particolare quelli legati all'autenticazione o ad azioni sensibili, hanno limiti più restrittivi per rafforzare la sicurezza e garantire la stabilità.

| Route | Soglia limite |
|---|---|
| Autenticazione (IAM) | 5 r/s |
| IaaS - Archiviazione (Datastores) | 20 r/s |
| Marketplace (Contatto) | 1 r/min - 5 r/h |

### Come funzionano i limiti di rate ?

Se il numero di richieste inviate a un endpoint API supera il limite consentito, l'endpoint reagirà restituendo __un codice di risposta HTTP 429__. Questo codice indica che l'utente ha superato il numero di richieste consentite. Quando ciò accade, l'endpoint fornirà anche un oggetto JSON come risposta, il quale conterrà informazioni dettagliate sulla limitazione applicata :

```json
{
  "error": {
    "status": "429 Too Many Requests",
    "message": "Too Many Requests"
  }
}
```

### Come evitare di effettuare troppe richieste ?

Si raccomanda di limitare il numero di chiamate API effettuate dalla propria automazione per restare al di sotto del limite di rate fissato per l'endpoint.

Questa situazione si verifica spesso quando più richieste vengono eseguite in parallelo, utilizzando più processi o thread.

Esistono diversi modi per migliorare l'efficienza della propria automazione, in particolare utilizzando meccanismi di __caching__ e implementando __un sistema di retry con backoff progressivo__. Questo metodo consiste nell'effettuare una breve pausa quando viene riscontrato un errore di limite di rate, per poi riprovare la richiesta. Se la richiesta fallisce di nuovo, la durata della pausa viene aumentata progressivamente fino a quando la richiesta non riesce o fino a quando non viene raggiunto un numero massimo di tentativi.

Questo approccio presenta numerosi vantaggi :

- __Il backoff progressivo__ garantisce che i primi tentativi vengano effettuati rapidamente, prevedendo al contempo tempi di attesa più lunghi in caso di fallimento ripetuto.
- L'aggiunta di __una variazione casuale__ alla pausa contribuisce a evitare che tutti i tentativi si verifichino simultaneamente.

È importante notare che __le richieste non riuscite non influenzano il proprio limite di rate__. Tuttavia, inviare continuamente una richiesta potrebbe non essere una soluzione sostenibile a lungo termine, poiché questo comportamento potrebbe essere modificato in futuro. Si raccomanda pertanto di non dipendere esclusivamente da questo meccanismo.

Le librerie __[Backoff](https://pypi.org/project/backoff/)__ e __[Tenacity](https://pypi.org/project/tenacity/)__ in Python sono un buon punto di partenza per implementare strategie di backoff.

## Ciclo di vita e deprecazione degli endpoint

### Politica di deprecazione

Cloud Temple si impegna a mantenere la compatibilità della propria API nel tempo. Tuttavia, quando è necessario evolvere l'API (nuove funzionalità, ottimizzazioni, correzioni di sicurezza), alcuni endpoint possono essere deprecati e poi rimossi.

#### Regola dei 3 mesi minimi

Quando un endpoint viene marcato come deprecato :

1. **Annuncio ufficiale** : La deprecazione viene annunciata nelle note di versione della console
2. **Periodo di transizione** : L'endpoint resta **accessibile e funzionante per almeno 3 mesi** dopo l'annuncio
3. **Data di rimozione** : Una data precisa di rimozione definitiva viene comunicata sin dall'annuncio
4. **Alternativa documentata** : Il nuovo endpoint sostitutivo è documentato e disponibile

Questa regola dei 3 mesi lascia il tempo necessario per adattare il proprio codice e migrare verso i nuovi endpoint.

### Come identificare un endpoint deprecato ?

#### Nel portale API (Swagger)

Gli endpoint deprecati appaiono barrati nella documentazione Swagger :


~~POST /v1/ancien/endpoint~~

La descrizione dell'endpoint include :
- La data di annuncio della deprecazione
- La data di rimozione prevista
- L'endpoint sostitutivo raccomandato

<img src={ShivaApi004} />

### Buone pratiche per gestire le deprecazioni

1. **Monitorare le funzionalità deprecate** : Consultare regolarmente le funzionalità deprecate nella console per conoscere le deprecazioni annunciate e la loro data di rimozione prevista.

2. **Pianificare le migrazioni** : Non appena una deprecazione viene annunciata, pianificare la migrazione del proprio codice verso il nuovo endpoint entro 3 mesi.

3. **Testare i nuovi endpoint** : Testare i nuovi endpoint non appena disponibili, anche durante il periodo di transizione.

4. **Documentare le proprie dipendenze** : Mantenere un elenco degli endpoint utilizzati dalla propria applicazione per facilitare le migrazioni future.

## Buone pratiche

### Sicurezza dei token

:::danger[Regole di sicurezza essenziali]
- 🚫 Non esporre mai i propri token in codice versionato (Git, ecc.)
- 🔐 Utilizzare variabili d'ambiente per memorizzare i token
- 🎯 Creare token con permessi minimi (principio del minimo privilegio)
- 🔄 Rinnovare regolarmente i propri token (massimo 12 mesi)
- ⚠️ Revocare immediatamente qualsiasi token compromesso
:::

### Gestione degli errori

Gestire sempre gli errori HTTP nel proprio codice. Prestare particolare attenzione ai seguenti codici :

| Codice | Descrizione | Azione raccomandata |
|------|-------------|-------------------|
| **401** Unauthorized | Token scaduto o non valido | Ri-autenticarsi con il proprio PAT |
| **403** Forbidden | Permessi insufficienti | Verificare i diritti del token |
| **429** Too Many Requests | Limite di rate raggiunto | Attendere prima di riprovare (backoff) |
| **500/503** Server Error | Errore server temporaneo | Riprovare più tardi |

### Ottimizzazione delle chiamate API

- Utilizzare la paginazione per le liste voluminose
- Mettere in cache i dati che cambiano raramente
- Utilizzare i filtri per limitare i dati restituiti
- Raggruppare le operazioni quando possibile
- Monitorare lo stato delle attività asincrone anziché effettuare polling intensivo

### Retry con backoff esponenziale

Per gestire gli errori temporanei o il rate limiting (HTTP 429), implementare una strategia di retry con backoff esponenziale :

:::tip[Strategia di retry raccomandata]
- ⏱️ **Attesa progressiva** : 1s, 2s, 4s, 8s...
- 🎲 **Variazione casuale** : Evita che tutti i client riprovino simultaneamente
- 🔄 **Limite di tentativi** : Massimo 3-5 tentativi
- 📚 **Librerie Python** : [Backoff](https://pypi.org/project/backoff/) o [Tenacity](https://pypi.org/project/tenacity/)
:::
