---
title: Guida introduttiva
---
import shivaSupport from '@site/docs/bastion/images/shiva_support.png'
import creerSession from '@site/docs/bastion/images/creer_session.png'
import creerSession2 from '@site/docs/bastion/images/creer_session2.png'
import creerSession3 from '@site/docs/bastion/images/creer_session3.png'
import ouvrirSession from '@site/docs/bastion/images/ouvrir_session.png'
import ouvrirSession2 from '@site/docs/bastion/images/ouvrir_session2.png'

Questa guida introduttiva illustra come richiedere la creazione di un'Appliance e come registrare una nuova sessione e connettersi ad essa.

## Prerequisiti

1. Avere sottoscritto il prodotto Cloud Temple (sottoscrizione Appliance Bastion).
2. I dispositivi da amministrare devono essere accessibili dalla rete in cui è stata distribuita l'Appliance Bastion.
3. Avere i permessi sul modulo Bastion.
4. Nel caso di distribuzione on-premise dell'Appliance, i flussi corrispondenti devono essere aperti.

## I flussi necessari per il funzionamento del prodotto Bastion

Diversi flussi sono necessari per il corretto funzionamento dell'Appliance Bastion.

### Il gateway bastione

| Sorgente                   | Destinazione                                 | Protocollo |
|----------------------------|----------------------------------------------|------------|
| Appliance bastione client  | 91.223.207.71 (botg.shiva.cloud-temple.com)  | UDP/4242   |

### Flusso di amministrazione RDP

| Origine                  | Destinazione                | Protocollo |
|--------------------------|-----------------------------|------------|
| Appliance bastion client | Le istanze da amministrare  | TCP/3389   |

### Flusso di amministrazione SSH

| Sorgente                   | Destinazione                 | Protocollo |
|----------------------------|------------------------------|------------|
| Appliance bastion client | Le istanze da amministrare | TCP/22    |

## Richiedere la creazione di un'Appliance

Prima di poter distribuire un'Appliance, è necessario presentare una richiesta di sottoscrizione per un'Appliance tramite una richiesta al supporto.
Il supporto è accessibile nella Console tramite l'icona a forma di salvagente nella barra in alto a destra della finestra.

<img src={shivaSupport} />

## Registrare un dispositivo

Per accedere regolarmente a un dispositivo da amministrare, è più opportuno creare una sessione, che richiederà solo il nome utente e la password ad ogni connessione.

Per farlo, vai alla scheda « Dispositivi » del menu « Bastion », quindi fai clic sul pulsante « Nuovo dispositivo ».

<img src={creerSession} />

Compila quindi le informazioni necessarie per la creazione del tuo dispositivo :

    - Nome del dispositivo ;
    - Descrizione ;
    - Appliance associata ;
    - Tipo di protocollo (SSH o RDP) ;
    - Indirizzo IP dell'host ;
    - Configurazione della tastiera.

<img src={creerSession2} />

Dovrebbe apparire una notifica che conferma la creazione del dispositivo in alto a destra della pagina. La sessione viene quindi aggiunta all'elenco dei tuoi dispositivi.

Per creare un nuovo dispositivo, puoi anche passare alla scheda « Appliances » facendo clic sulla barra delle azioni dell'Appliance a cui desideri associare un dispositivo.

<img src={creerSession3} />

## Connettersi a un dispositivo

Vai alla scheda « Dispositivi » della scheda « Bastione ». Fai clic sulla barra delle azioni del dispositivo che desideri aprire e clicca sul pulsante « Apri ».

<img src={ouvrirSession} />

Ad ogni connessione al dispositivo, è necessario inserire solo le proprie informazioni di autenticazione.

<img src={ouvrirSession2} />

Dopo aver immesso le credenziali, viene visualizzata una notifica che conferma l'avvio della connessione al dispositivo e si apre la console verso la tua macchina virtuale.