---
title: Concetti
---
import bastion from '@site/docs/bastion/images/bastion.png'

<a id="cest-quoi-le-bastion-cloud-temple-"></a>

## Presentazione

Il Bastion Cloud Temple è un servizio gestito che fornisce una connettività RDP o SSH sicura dalla console Cloud Temple verso le vostre infrastrutture fisiche e virtuali, che si trovino sul Cloud di fiducia, su un cloud pubblico oppure on-premise. Costituisce il punto di accesso unico per i vostri accessi di amministrazione: i vostri dispositivi vengono amministrati senza essere esposti a Internet, e tutte le azioni sono tracciate ai fini di audit e conformità.

<img src={bastion} />

### Destinatari e casi d'uso

Il Bastion si rivolge agli amministratori di sistema, ai team DevOps, alle organizzazioni soggette a requisiti normativi e al settore pubblico. Casi d'uso tipici:

- **Accesso di amministrazione remoto**: gateway sicuro verso infrastrutture sensibili.
- **Riduzione della superficie di attacco**: nessun dispositivo amministrato è esposto direttamente a Internet.
- **Accesso di partner e fornitori**: accessi temporanei e controllati ai dispositivi.
- **Conformità normativa**: tracciabilità delle azioni per gli audit.
- **Amministrazione multi-ambiente**: accesso unificato alle risorse cloud e on-premise.

<a id="les-avantages"></a>

## Vantaggi

| Vantaggio              | Descrizione                                                                                                                                                             |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Gestione centralizzata | Il Bastion è accessibile direttamente dalla console: tutti gli accessi di amministrazione sono gestiti in un unico punto.                                                |
| Sicurezza              | I dispositivi amministrati tramite il Bastion non sono esposti a Internet, il che li protegge in particolare dalla scansione delle loro porte da parte di utenti malintenzionati. |
| Tracciabilità          | Tutte le azioni di amministrazione vengono registrate.                                                                                                                  |
| Flessibilità di accesso | Un unico servizio amministra dispositivi situati sul Cloud di fiducia, su un cloud pubblico oppure on-premise.                                                         |
| Infrastructure as Code | Un'API REST consente di gestire i dispositivi interamente «as Code».                                                                                                    |

## Funzionalità

| Funzionalità             | Descrizione                                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------------|
| Accesso RDP e SSH        | Connessione sicura ai dispositivi da amministrare.                                                            |
| Connessione rapida       | Connessione occasionale a un dispositivo specificando il protocollo, il suo indirizzo IP e le vostre credenziali. |
| Dispositivi registrati   | Configurazione di connessione riutilizzabile: a ogni connessione vengono richieste solo le vostre credenziali. |
| Tag e ricerca            | Classificazione dei dispositivi per tag, ricerca per nome.                                                    |
| Flussi cifrati           | Tutte le comunicazioni tra la console, l'Appliance e i dispositivi sono cifrate.                              |
| Registrazione dei log    | Tracciabilità di tutte le azioni di amministrazione.                                                          |
| API REST                 | Creazione, modifica ed eliminazione dei dispositivi tramite API.                                              |

## Architettura

### L'Appliance Bastion

L'Appliance Bastion è una macchina virtuale distribuita in prossimità dei vostri dispositivi. Fa transitare un flusso sicuro e diretto dalla console verso i dispositivi da amministrare situati nella stessa rete virtuale.

Il flusso è cifrato e incapsulato in un tunnel VPN. La soluzione non richiede l'apertura di un flusso da Internet verso le vostre infrastrutture. È sufficiente che l'Appliance abbia accesso all'IP pubblico del modulo Console Bastion sulla porta 443.

Un'Appliance può essere utilizzata per effettuare una connessione rapida a un dispositivo. A ogni connessione devono essere specificati il protocollo desiderato, l'indirizzo IP della macchina e le vostre credenziali. Per evitare di inserire queste informazioni a ogni connessione, potete registrare i dispositivi che amministrate regolarmente.

<a id="les-sessions"></a>

### I dispositivi

Un dispositivo è una configurazione di connessione registrata nel Bastion. Associa una macchina da amministrare (nome, indirizzo IP, protocollo SSH o RDP, configurazione della tastiera) all'Appliance attraverso cui transita il flusso.

Questa configurazione è adatta a una connessione regolare a un dispositivo. Le informazioni essenziali vengono conservate: al momento della connessione vengono richieste solo le vostre credenziali.

### Integrazioni

- **console Cloud Temple**: gestione delle Appliance e dei dispositivi dal menu «Bastion».
- **API REST**: automazione della gestione dei dispositivi.

## Regioni e zone di disponibilità

Il servizio Bastion è operato dalla regione FR1 e i suoi log sono ospitati in Francia. L'Appliance viene distribuita il più vicino possibile ai vostri dispositivi: sul Cloud di fiducia, su un cloud pubblico oppure on-premise.

## Specifiche tecniche

| Parametro              | Valore                                   |
|------------------------|------------------------------------------|
| Protocolli             | RDP, SSH                                 |
| Dispositivi gestiti    | Fino a 50 per Appliance                  |
| Cifratura              | Obbligatoria, su tutti i flussi          |
| API                    | REST                                     |
| Registrazione dei log  | Tutte le azioni di amministrazione       |

### Limiti

- Un'Appliance amministra al massimo 50 dispositivi. Oltre questo limite, distribuite un'Appliance aggiuntiva.
- I dispositivi da amministrare devono essere raggiungibili dalla rete in cui è distribuita l'Appliance.

## Sicurezza e conformità

Il Bastion è certificato HDS e ISO 27001. È incluso nei servizi qualificati SecNumCloud e conformi C5.

- **Cifratura**: tutti i flussi sono cifrati.
- **Isolamento**: le Appliance funzionano in un ambiente dedicato, con un isolamento logico rigoroso delle macchine virtuali di amministrazione.
- **Controllo degli accessi**: controllo degli accessi granulare e applicazione delle policy sulle password.
- **Tracciabilità**: tutte le azioni di amministrazione vengono registrate.

## Disponibilità del servizio

L'obiettivo di disponibilità del servizio Bastion è del 99,9 %, misurato su un mese.

## Reversibilità

Al termine del servizio, potete recuperare i seguenti elementi, senza costi:

| Elemento esportato | Deliverable                    | Tempi di messa a disposizione |
|--------------------|--------------------------------|-------------------------------|
| Log di audit       | File di audit                  | 30 giorni                     |
| Configurazione     | Parametri dell'Appliance       | 15 giorni                     |

## Prezzi

Il Bastion è fatturato mensilmente, per Appliance. I prezzi sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[Bastion — prezzi](https://www.cloud-temple.com/produits/bastion/).
