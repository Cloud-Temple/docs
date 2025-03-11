---
title: Guida di avvio
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'


Questa guida di avvio ti illustra come richiedere la creazione di un'Appliance e come registrare una nuova sessione e connettersi ad essa.

## Prerequisiti

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. Le attrezzature da amministrare devono essere accessibili dalla rete in cui è distribuita l'Appliance Bastion.
3. Avere i diritti sul modulo Bastion.
4. Nell'ambito di una distribuzione dell'Appliance on-premise, i flussi corrispondenti devono essere aperti.


## I flussi necessari al funzionamento del prodotto Bastion

Diversi flussi sono necessari per il corretto funzionamento dell'Appliance Bastion.

### La gateway bastion
| Fonte                    | Destinazione                                  | Protocollo |
|--------------------------|-----------------------------------------------|------------|
| Appliance bastion client | 91.223.207.71 (botg.shiva.cloud-temple.com)   | UDP/4242   |

### Flussi di amministrazione RDP

| Fonte                    | Destinazione                | Protocollo |
|--------------------------|-----------------------------|------------|
| Appliance bastion client | Le istanze da amministrare  | TCP/3389   |

### Flussi di amministrazione SSH

| Fonte                    | Destinazione                | Protocollo |
|--------------------------|-----------------------------|------------|
| Appliance bastion client | Le istanze da amministrare  | TCP/22     |


## Richiedere la creazione di un'Appliance
Prima di poter distribuire un'Appliance, è necessario richiedere la sottoscrizione a un'Appliance tramite una richiesta al supporto.
Il supporto è accessibile nella console Shiva dall'icona del salvagente sulla barra in alto a destra della finestra.

<img src={shivaSupport} />


## Registrare un'attrezzatura

Per accedere regolarmente a un'attrezzatura da amministrare, è più adatto creare una sessione, che richiederà solo il tuo nome utente e la tua password a ogni connessione.

Per fare ciò, vai nella scheda « Attrezzature » del menu « Bastion », quindi, clicca sul pulsante « Nuova attrezzatura ».

<img src={creerSession} />


Quindi inserisci le informazioni necessarie per la creazione della tua attrezzatura:

    - Nome dell'attrezzatura ;
    - Descrizione ;
    - Appliance associata ;
    - Tipo di protocollo (SSH o RDP) ;
    - Indirizzo IP dell’host ;
    - Configurazione della tastiera.

<img src={creerSession2} />


Una notifica che indica la creazione dell'attrezzatura dovrebbe apparire in alto a destra della pagina. La sessione viene quindi aggiunta all'elenco delle tue attrezzature.

Per creare una nuova attrezzatura, puoi anche passare attraverso la scheda « Appliances » cliccando sulla barra di azione dell'Appliance a cui vuoi associare un'attrezzatura.

<img src={creerSession3} />

## Connettersi a un'attrezzatura

Vai nella scheda « Attrezzature » della scheda « Bastion ». Clicca sulla barra di azione dell'attrezzatura che vuoi aprire e clicca sul pulsante « Apri ».

<img src={ouvrirSession} />

A ogni connessione all'attrezzatura, devi solo inserire le tue informazioni di autenticazione.

<img src={ouvrirSession2} />

Dopo aver inserito le tue credenziali, appare una notifica che conferma l'inizio della connessione alla tua attrezzatura e si apre la console verso la tua macchina virtuale.