---
title: Guida rapida
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

Questa guida rapida ti mostra come richiedere la creazione di un'Appliance e come registrare una nuova sessione e connetterti ad essa.

## Prerequisiti

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. I dispositivi da amministrare devono essere accessibili dalla rete in cui è distribuita l'Appliance Bastion.
3. Avere i diritti sul modulo Bastion.
4. Nel contesto di una distribuzione dell'Appliance on-premise, i flussi corrispondenti devono essere aperti.

## I flussi necessari per il funzionamento del prodotto Bastion

Diversi flussi sono necessari per il corretto funzionamento dell'Appliance Bastion.

### Il gateway bastion
| Fonte                    | Destinazione                                | Protocollo |
|--------------------------|---------------------------------------------|------------|
| Appliance bastion client | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242   |

### Flussi di amministrazione RDP

| Fonte                    | Destinazione               | Protocollo |
|--------------------------|-----------------------------|------------|
| Appliance bastion client | Le istanze da amministrare  | TCP/3389   |

### Flussi di amministrazione SSH

| Fonte                    | Destinazione               | Protocollo |
|--------------------------|-----------------------------|------------|
| Appliance bastion client | Le istanze da amministrare  | TCP/22     |

## Richiedere la creazione di un'Appliance
Prima di poter distribuire un'Appliance, è necessario richiedere una sottoscrizione a un'Appliance tramite una richiesta al supporto.
Il supporto è accessibile nella console Shiva dall'icona del salvagente sulla barra in alto a destra della finestra.

<img src={shivaSupport} />

## Registrare un dispositivo

Per accedere regolarmente a un dispositivo da amministrare, è più appropriato creare una sessione, che richiederà solo il tuo nome utente e la tua password ad ogni connessione.

Per fare ciò, vai nella scheda "Dispositivi" del menu "Bastion", quindi clicca sul pulsante "Nuovo dispositivo".

<img src={creerSession} />

Quindi inserisci le informazioni necessarie per la creazione del tuo dispositivo:

    - Nome del dispositivo;
    - Descrizione;
    - Appliance associata;
    - Tipo di protocollo (SSH o RDP);
    - Indirizzo IP dell'host;
    - Configurazione della tastiera.

<img src={creerSession2} />

Una notifica che indica la creazione del dispositivo dovrebbe apparire in alto a destra della pagina. La sessione viene quindi aggiunta all'elenco dei tuoi dispositivi.

Per creare un nuovo dispositivo, puoi anche passare attraverso la scheda "Appliances" cliccando sulla barra di azione dell'Appliance a cui vuoi associare un dispositivo.

<img src={creerSession3} />

## Connettersi a un dispositivo

Vai nella scheda "Dispositivi" della scheda "Bastion". Clicca sulla barra di azione del dispositivo che vuoi aprire e clicca sul pulsante "Apri".

<img src={ouvrirSession} />

Ad ogni connessione al dispositivo, devi solo inserire le tue informazioni di autenticazione.

<img src={ouvrirSession2} />

Dopo aver inserito le tue credenziali, appare una notifica che conferma l'inizio della connessione al tuo dispositivo e si apre la console verso la tua macchina virtuale.
