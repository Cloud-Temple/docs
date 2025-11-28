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

Questi tutorial ti aiutano a distribuire e gestire un Bastion Cloud Temple dal portale Console.

## Prerequisiti

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. I dispositivi da amministrare devono essere accessibili dalla rete in cui è distribuita l'Appliance Bastion.
3. Avere i diritti sul modulo Bastion.
4. Nel caso di una distribuzione dell'Appliance on-premise, i flussi corrispondenti devono essere aperti.

## Interfaccia

Una volta connesso al portale web Console, vai alla scheda "Bastion" del menu a sinistra.

<img src={sessions} />

La scheda "Dispositivi" ti permette di consultare l'elenco dei tuoi dispositivi. Un dispositivo corrisponde a una configurazione di connessione tramite un'Appliance Bastion. Per ogni dispositivo, sono indicati il nome, i tag, la descrizione, l'Appliance associata, il tipo di connessione (SSH o RDP), l'IP dell'host e infine la configurazione della tastiera.

Puoi filtrare l'elenco dei tuoi dispositivi in base ai tag che gli sono assegnati, e un motore di ricerca permette di cercare una sessione con il suo nome.

<img src={sessions2} />

La scheda "Appliances" ti dà l'elenco delle tue Appliances Bastion. Per ogni Appliance, sono specificati il nome e la descrizione dell'Appliance.

È disponibile un motore di ricerca per consentirti di cercare un'Appliance con il suo nome.

<img src={appliances} />

## Distribuire un'Appliance

Prima di poter distribuire un'Appliance, è necessario fare una richiesta di sottoscrizione a un'Appliance tramite una richiesta al supporto.

## Aprire un flusso verso un dispositivo

Nella scheda "Appliances", clicca sulla barra delle azioni dell'Appliance che desideri aprire. Quindi clicca sul pulsante "Apri".

<img src={ouvrirAppliance} />

Inserisci quindi le informazioni necessarie per la connessione:

    - Scelta del protocollo (SSH o RDP);
    - Indirizzo IP dell'host da amministrare;
    - Informazioni di identificazione;
    - Configurazione della tastiera.

Quindi clicca su "Connetti" per aprire l'Appliance. Si aprirà la console della macchina virtuale da amministrare.

## Registrare un dispositivo

Per accedere regolarmente a un dispositivo da amministrare, è più appropriato creare una configurazione del dispositivo, che richiederà solo il tuo nome utente e la tua password ad ogni connessione.

Per farlo, vai alla scheda "Dispositivi" del menu "Bastion", quindi clicca sul pulsante "Nuovo dispositivo".

<img src={creerSession} />

Inserisci quindi le informazioni necessarie per la creazione del tuo dispositivo:

    - Nome del dispositivo;
    - Descrizione;
    - Appliance associata;
    - Tipo di protocollo (SSH o RDP);
    - Indirizzo IP dell'host;
    - Lingua della tastiera.

<img src={creerSession2} />

Dovrebbe apparire una notifica che ti informa della creazione della configurazione del dispositivo in alto a destra della pagina. La configurazione viene quindi aggiunta all'elenco dei tuoi dispositivi.

Per creare una nuova connessione, puoi anche passare attraverso la scheda "Appliances" cliccando sulla barra delle azioni dell'Appliance a cui desideri associare una configurazione del dispositivo.

<img src={creerSession3} />

## Connettersi a un dispositivo

Vai alla scheda "Dispositivi" della scheda "Bastion". Clicca sulla barra delle azioni del dispositivo che desideri aprire e clicca sul pulsante "Apri".

<img src={ouvrirSession} />

Ad ogni connessione al dispositivo, devi solo inserire le tue informazioni di autenticazione.

<img src={ouvrirSession2} />

Dopo aver inserito le tue credenziali, apparirà una notifica che conferma l'inizio della sessione e si aprirà la console verso la tua macchina virtuale.

## Modificare una configurazione del dispositivo

Vai alla scheda "Dispositivi" della sezione "Bastion", clicca sulla barra delle azioni del dispositivo che desideri modificare e clicca sul pulsante "Modifica".

<img src={modifierSession} />

Puoi quindi modificare il nome del dispositivo, la sua descrizione, l'Appliance associata, il protocollo (SSH o RDP), l'indirizzo IP dell'host o la lingua della tastiera.

<img src={modifierSession2} />

## Eliminare una configurazione del dispositivo

Vai alla scheda "Dispositivi" della sezione "Bastion", clicca sulla barra delle azioni del dispositivo che desideri eliminare e clicca sul pulsante "Elimina".

<img src={supprimerSession} />
