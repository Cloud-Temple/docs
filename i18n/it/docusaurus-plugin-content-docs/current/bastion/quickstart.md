---
title: Guida di avvio
---
import shivaSupport from './images/shiva_support.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'

Questa guida di avvio ti mostra come richiedere la creazione di un'Appliance e come registrare una nuova sessione e connetterti a essa.

## Prerequisiti

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. Gli apparati da gestire devono essere accessibili dal network in cui è distribuita l'Appliance Bastion.
3. Disporre dei diritti sul modulo Bastion.
4. Nel caso di distribuzione dell'Appliance on-premise, i flussi corrispondenti devono essere aperti.

## I flussi necessari per il funzionamento dell'appliance Bastion

Sono necessari diversi flussi per il corretto funzionamento dell'appliance Bastion.

### Gateway bastion

| Source                   | Destination                                 | Protocollo |
|--------------------------|---------------------------------------------|------------|
| Appliance bastion client | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242   |

### RDP Administration Flow

| Source                   | Destination                 | Protocol |
|--------------------------|-----------------------------|----------|
| Client bastion appliance | Instances to administer     | TCP/3389 |

### SSH Administration Flow

| Source                   | Destination                 | Protocol |
|--------------------------|-----------------------------|----------|
| Client bastion appliance | Instances to administer     | TCP/22   |

## Richiedere la creazione di un'Appliance

Prima di poter distribuire un'Appliance, è necessario richiedere una sottoscrizione a un'Appliance tramite una richiesta al supporto.
Il supporto è accessibile dalla Console tramite l'icona del salvagente nella barra in alto a destra della finestra.

<img src={shivaSupport} />

## Registrare un dispositivo

Per accedere regolarmente a un dispositivo da gestire, è più conveniente creare una sessione, che richiederà solo il tuo nome utente e la tua password a ogni connessione.

Per fare ciò, vai alla scheda « Dispositivi » nel menu « Bastion», quindi fai clic sul pulsante « Nuovo dispositivo ».

<img src={creerSession} />

Compila quindi le informazioni necessarie per la creazione del tuo dispositivo:

    - Nome del dispositivo;
    - Descrizione;
    - Appliance associata;
    - Tipo di protocollo (SSH o RDP);
    - Indirizzo IP dell'host;
    - Configurazione del tastierino.

<img src={creerSession2} />

Dovrebbe apparire una notifica in alto a destra della pagina che indica la creazione del dispositivo. La sessione verrà quindi aggiunta all'elenco dei tuoi dispositivi.

Per creare un nuovo dispositivo, puoi anche passare alla scheda « Appliance » e fare clic sull'azione della barra dell'Appliance a cui desideri associare un dispositivo.

<img src={creerSession3} />

## Connettersi a un dispositivo

Recati nell’opzione « Dispositivi » nell’area « Bastione ». Clicca sull’area delle azioni del dispositivo che desideri aprire e premi il pulsante « Apri ».

<img src={ouvrirSession} />

Ad ogni connessione al dispositivo, è necessario inserire soltanto le proprie credenziali di autenticazione.

<img src={ouvrirSession2} />

Dopo aver inserito le proprie credenziali, verrà visualizzata una notifica che conferma l’inizio della connessione al dispositivo e si aprirà la console verso la tua macchina virtuale.