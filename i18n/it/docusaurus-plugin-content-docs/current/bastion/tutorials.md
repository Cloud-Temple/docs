---
title: Tutorial
---
import sessions from './images/sessions.png'
import sessions2 from './images/sessions2.png'
import appliances from './images/appliances.png'
import ouvrirAppliance from './images/ouvrir_appliance.png'
import creerSession from './images/creer_session.png'
import creerSession2 from './images/creer_session2.png'
import creerSession3 from './images/creer_session3.png'
import ouvrirSession from './images/ouvrir_session.png'
import ouvrirSession2 from './images/ouvrir_session2.png'
import modifierSession from './images/modifier_session.png'
import modifierSession2 from './images/modifier_session2.png'
import supprimerSession from './images/supprimer_session.png'

Questi tutorial ti aiutano a distribuire e gestire un Bastion Cloud Temple dalla Console.

## Prerequisiti

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. Gli equipaggiamenti da gestire devono essere accessibili dal network in cui è distribuita l'Appliance Bastion.
3. Disporre dei diritti sul modulo Bastion.
4. Nel caso di distribuzione dell'Appliance on-premise, i flussi corrispondenti devono essere aperti.

## Interfaccia

Dopo esserti collegato al portale web Console, vai nella scheda "Bastion" nel menu a sinistra.

<img src={sessions} />

La scheda "Dispositivi" ti permette di visualizzare l'elenco dei tuoi dispositivi. Un dispositivo corrisponde a una configurazione di connessione tramite un'Appliance Bastion. Per ogni dispositivo, sono indicati il nome, i tag, la descrizione, l'Appliance associata, il tipo di connessione (SSH o RDP), l'IP dell'host e infine la configurazione della tastiera.

Puoi filtrare l'elenco dei tuoi dispositivi in base ai tag assegnati e un motore di ricerca ti permette di cercare una sessione in base al nome.

<img src={sessions2} />

La scheda "Appliances" ti fornisce l'elenco delle tue Appliances Bastion. Per ogni appliance, sono indicati il nome e la descrizione.

Un motore di ricerca è disponibile per consentirti di cercare un'appliance in base al nome.

<img src={appliances} />

## Deploy an Appliance

Before deploying an Appliance, you must submit a subscription request for an Appliance via a support request.

## Aprire un flusso verso un dispositivo

Nella scheda « Appliances », fare clic sulla barra delle azioni dell'Appliance che si desidera aprire. Successivamente, fare clic sul pulsante « Apri ».

<img src={ouvrirAppliance} />

Compilare quindi le informazioni necessarie per la connessione:

    - Scelta del protocollo (SSH o RDP);
    - Indirizzo IP dell'host da gestire;
    - Credenziali di accesso;
    - Configurazione della tastiera.

Fare quindi clic su « Connetti » per aprire l'Appliance. Si aprirà quindi la console della macchina virtuale da gestire.

## Registrare un dispositivo

Per accedere regolarmente a un dispositivo da gestire, è più conveniente creare una configurazione del dispositivo, che richiederà solo il tuo nome utente e la tua password a ogni connessione.

Per fare ciò, vai alla scheda « Dispositivi » del menu « Bastion», quindi fai clic sul pulsante « Nuovo dispositivo ».

<img src={creerSession} />

Compila quindi le informazioni necessarie per la creazione del tuo dispositivo:

    - Nome del dispositivo;
    - Descrizione;
    - Appliance associata;
    - Tipo di protocollo (SSH o RDP);
    - Indirizzo IP dell'host;
    - Lingua del tastierino.

<img src={creerSession2} />

Dovrebbe apparire una notifica in alto a destra della pagina che indica la creazione della tua configurazione del dispositivo. La configurazione verrà quindi aggiunta all'elenco dei tuoi dispositivi.

Per creare una nuova connessione, puoi anche passare alla scheda « Appliance » e fare clic sulla barra delle azioni dell'Appliance a cui desideri associare una configurazione del dispositivo.

<img src={creerSession3} />

## Connettersi a un dispositivo

Recati nell'angolo « Dispositivi » dell'angolo « Bastione ». Clicca sulla barra delle azioni del dispositivo che desideri aprire e premi il pulsante « Apri ».

<img src={ouvrirSession} />

Ad ogni connessione al dispositivo, è necessario inserire soltanto le proprie credenziali di autenticazione.

<img src={ouvrirSession2} />

Dopo aver inserito le proprie credenziali, viene visualizzata una notifica che conferma l'avvio della sessione e si apre la console verso la tua macchina virtuale.

## Modificare una configurazione dell'equipaggiamento

Recati nella scheda « Equipaggiamento » della sezione « Bastion », fai clic sulla barra delle azioni dell'equipaggiamento che desideri modificare e premi il pulsante « Modifica ».

<img src={modifierSession} />

Puoi quindi modificare il nome dell'equipaggiamento, la descrizione, l'Appliance associata, il protocollo (SSH o RDP), l'indirizzo IP dell'host o la lingua del tastierino.

<img src={modifierSession2} />

## Eliminare una configurazione dell'equipaggiamento

Vai alla scheda « Equipaggiamenti » nella sezione « Bastion », fai clic sulla barra delle azioni dell'equipaggiamento che desideri eliminare e premi il pulsante « Elimina ».

<img src={supprimerSession} />
