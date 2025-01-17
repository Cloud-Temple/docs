---
title: Tutoriels
---

Questi tutorial ti aiutano a distribuire e gestire un Bastion Cloud Temple dal portale Shiva. 


## Prerequisiti

1. Avere sottoscritto all'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. Gli apparati da amministrare devono essere accessibili dalla rete dove è distribuito l'Appliance Bastion.
3. Avere i diritti sul modulo Bastion.
4. Nel contesto di una distribuzione dell'Appliance onpremise, i flussi corrispondenti devono essere aperti.

## Interfaccia

Una volta connesso al portale web Shiva, vai nella scheda "Bastion" del menu a sinistra. 

![](images/sessions.png)

La scheda « Apparecchiature » ti permette di consultare l'elenco delle tue apparecchiature. Un'apparecchiatura corrisponde a una configurazione di
connessione tramite un'Appliance Bastion. Per ogni apparecchiatura, viene indicato il suo nome, i suoi tag, la 
descrizione, l'Appliance associato, il tipo di connessione (SSH o RDP), l'IP dell'host e infine la configurazione della tastiera.

Puoi filtrare l'elenco delle tue apparecchiature in base ai tag assegnati, e un motore di ricerca consente di cercare una sessione con il suo nome. 

![](images/sessions2.png)

La scheda « Appliances » ti dà l'elenco delle tue Appliances Bastion. Per ogni Appliance, vengono indicati il nome dell'Appliance e la sua descrizione. 

È disponibile un motore di ricerca per cercare un'Appliance con il suo nome.

![](images/appliances.png)

## Distribuire un'Appliance
Prima di poter distribuire un'Appliance, è necessario richiedere una sottoscrizione a un'Appliance tramite una richiesta al supporto.

## Aprire un flusso verso un'apparecchiatura
Nella scheda « Appliances », clicca sulla barra d'azione dell'Appliance che desideri aprire. Clicca quindi sul pulsante « Aprire ».

![](images/ouvrir_appliance.png)

Inserisci quindi le informazioni necessarie alla connessione:

    - Scelta del protocollo (SSH o RDP) ;
    - Indirizzo IP dell'host da amministrare ;
    - Informazioni di identificazione ;
    - Configurazione della tastiera.

Clicca quindi su « Connettere » per aprire l'Appliance. Si aprirà la console della macchina virtuale da amministrare.

## Registrare un'apparecchiatura

Per accedere regolarmente a un'apparecchiatura da amministrare, è più appropriato creare una configurazione dell'apparecchiatura, che richiederà solo il tuo nome utente e la tua password per ogni connessione.

Per fare ciò, vai nella scheda « Apparecchiature » del menu « Bastion », quindi clicca sul pulsante « Nuovo apparecchio ».

![](images/creer_session.png)

Inserisci quindi le informazioni necessarie per creare la tua apparecchiatura:

    - Nome dell'apparecchiatura ;
    - Descrizione ;
    - Appliance associato ;
    - Tipo di protocollo (SSH o RDP) ;
    - Indirizzo IP dell'host ;
    - Lingua della tastiera.

![](images/creer_session2.png)

Una notifica che indica la creazione della configurazione della tua apparecchiatura dovrebbe apparire in alto a destra della pagina. La configurazione verrà quindi aggiunta all'elenco delle tue apparecchiature.

Per creare una nuova connessione, puoi anche passare dalla scheda « Appliances » cliccando sulla barra d'azione dell'Appliance a cui desideri associare una configurazione dell'apparecchiatura.

![](images/creer_session3.png)

## Connettersi a un'apparecchiatura

Vai nella scheda « Apparecchiature » della scheda « Bastion ». Clicca sulla barra d'azione dell'apparecchiatura che desideri aprire, e clicca sul pulsante « Aprire ».

![](images/ouvrir_session.png)

A ogni connessione all'apparecchiatura, devi solo inserire le tue informazioni di autenticazione.

![](images/ouvrir_session2.png)

Dopo aver inserito le tue credenziali, apparirà una notifica di conferma dell'inizio della sessione e la console per la tua macchina virtuale si aprirà.

## Modificare una configurazione dell'apparecchiatura

Vai nella scheda « Apparecchiature » della sezione « Bastion », clicca sulla barra d'azione dell'apparecchiatura che desideri modificare, e clicca sul pulsante « Modificare ».

![](images/modifier_session.png)

Puoi quindi modificare il nome dell'apparecchiatura, la sua descrizione, l'Appliance associato, il protocollo (SSH o RDP), l'indirizzo IP dell'host o la lingua della tastiera.

![](images/modifier_session2.png)

## Eliminare una configurazione dell'apparecchiatura

Vai nella scheda « Apparecchiature » della sezione « Bastion », clicca sulla barra d'azione dell'apparecchiatura che desideri eliminare, e clicca sul pulsante « Eliminare ».

![](images/supprimer_session.png)