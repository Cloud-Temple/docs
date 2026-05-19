---
title: Tutorial
---
import sessions from '@site/docs/bastion/images/sessions.png'
import sessions2 from '@site/docs/bastion/images/sessions2.png'
import appliances from '@site/docs/bastion/images/appliances.png'
import ouvrirAppliance from '@site/docs/bastion/images/ouvrir_appliance.png'
import creerSession from '@site/docs/bastion/images/creer_session.png'
import creerSession2 from '@site/docs/bastion/images/creer_session2.png'
import creerSession3 from '@site/docs/bastion/images/creer_session3.png'
import ouvrirSession from '@site/docs/bastion/images/ouvrir_session.png'
import ouvrirSession2 from '@site/docs/bastion/images/ouvrir_session2.png'
import modifierSession from '@site/docs/bastion/images/modifier_session.png'
import modifierSession2 from '@site/docs/bastion/images/modifier_session2.png'
import supprimerSession from '@site/docs/bastion/images/supprimer_session.png'

Questi tutorial ti aiutano a distribuire e gestire un Bastion Cloud Temple dalla Console.

## Prerequisiti

1. Avere sottoscritto il prodotto Cloud Temple (souscription Appliance Bastion).
2. Le apparecchiature da amministrare devono essere accessibili dalla rete in cui è distribuita l'Appliance Bastion.
3. Avere le autorizzazioni sul modulo Bastion.
4. Nel caso di un'installazione on-premise dell'Appliance, i flussi corrispondenti devono essere aperti.

## Interfaccia

Una volta connessi al portale web Console, accedere alla scheda "Bastion" nel menu a sinistra.

<img src={sessions} />

La scheda « Dispositivi » consente di visualizzare l'elenco dei propri dispositivi. Un dispositivo corrisponde a una configurazione di connessione tramite un'Appliance Bastion. Per ogni dispositivo sono indicati il nome, i tag, la descrizione, l'Appliance associata, il tipo di connessione (SSH o RDP), l'IP dell'host e, infine, la configurazione della tastiera.

È possibile filtrare l'elenco dei dispositivi in base ai tag assegnati e un motore di ricerca consente di cercare una sessione tramite il suo nome.

<img src={sessions2} />

La scheda « Appliances » fornisce l'elenco delle proprie Appliance Bastion. Per ogni Appliance sono indicati il nome e la descrizione.

È disponibile un motore di ricerca per consentire di cercare un'Appliance tramite il suo nome.

<img src={appliances} />

## Distribuire un'Appliance

Prima di poter distribuire un'Appliance, è necessario presentare una richiesta di sottoscrizione per un'Appliance tramite una richiesta al supporto.

## Aprire una connessione verso un dispositivo

Nella scheda « Appliance », fai clic sulla barra delle azioni dell'Appliance che desideri aprire. Fai quindi clic sul pulsante « Apri ».

<img src={ouvrirAppliance} />

Compila quindi le informazioni necessarie per la connessione:

    - Scelta del protocollo (SSH o RDP);
    - Indirizzo IP dell'host da amministrare;
    - Credenziali di accesso;
    - Configurazione della tastiera.

Fai quindi clic su « Connetti » per aprire l'Appliance. La console della macchina virtuale da amministrare si aprirà.

## Registrare un dispositivo

Per accedere regolarmente a un dispositivo da amministrare, è più opportuno creare una configurazione del dispositivo, che richiederà solo il nome utente e la password ad ogni connessione.

Per farlo, andare nella scheda « Dispositivi » del menu « Bastion », quindi fare clic sul pulsante « Nuovo dispositivo ».

<img src={creerSession} />

Compilare quindi le informazioni necessarie per la creazione del dispositivo:

    - Nome del dispositivo ;
    - Descrizione ;
    - Appliance associata ;
    - Tipo di protocollo (SSH o RDP) ;
    - Indirizzo IP dell'host ;
    - Lingua della tastiera.

<img src={creerSession2} />

Dovrebbe apparire una notifica che indica la creazione della configurazione del dispositivo in alto a destra nella pagina. La configurazione viene quindi aggiunta all'elenco dei dispositivi.

Per creare una nuova connessione, è possibile anche accedere alla scheda « Appliances » facendo clic sulla barra delle azioni dell'Appliance a cui si desidera associare una configurazione del dispositivo.

<img src={creerSession3} />

## Connettersi a un dispositivo

Vai alla scheda « Dispositivi » della scheda « Bastione ». Clicca sulla barra delle azioni del dispositivo che desideri aprire e clicca sul pulsante « Apri ».

<img src={ouvrirSession} />

Ogni volta che ti connetti al dispositivo, devi inserire solo le tue informazioni di autenticazione.

<img src={ouvrirSession2} />

Dopo aver inserito le tue credenziali, appare una notifica che conferma l'avvio della sessione e si apre la console verso la tua macchina virtuale.

## Modificare la configurazione del dispositivo

Vai alla scheda « Dispositivi » della sezione « Bastion », fai clic sulla barra delle azioni del dispositivo che desideri modificare e fai clic sul pulsante « Modifica ».

<img src={modifierSession} />

Successivamente, puoi modificare il nome del dispositivo, la descrizione, l'Appliance associata, il protocollo (SSH o RDP), l'indirizzo IP dell'host o la lingua della tastiera.

<img src={modifierSession2} />

## Eliminare una configurazione del dispositivo

Vai alla scheda « Dispositivi » della sezione « Bastion », clicca sulla barra delle azioni del dispositivo che desideri eliminare e clicca sul pulsante « Elimina ».

<img src={supprimerSession} />