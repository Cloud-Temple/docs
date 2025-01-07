---
title: Quickstart
---

Questa guida rapida ti presenta come richiedere la creazione di un Appliance e come registrare una nuova sessione e connettersi ad essa.

## Prerequisiti

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione Appliance Bastion).
2. Le attrezzature da amministrare devono essere accessibili dalla rete dove è distribuito il Appliance Bastion.
3. Avere i diritti sul modulo Bastion.
4. Nel contesto di un'implementazione dell'Appliance on-premise, i flussi corrispondenti devono essere aperti.

## I flussi necessari al funzionamento del prodotto Bastion

Diversi flussi sono necessari per il buon funzionamento del Appliance Bastion.

### Il gateway bastion
| Fonte                    | Destinazione                                  | Protocollo |
|--------------------------|-----------------------------------------------|------------|
| Appliance bastion client | 91.223.207.71 (botg.shiva.cloud-temple.com)   | UDP/4242   |

### Flussi di amministrazione RDP

| Fonte                    | Destinazione                 | Protocollo |
|--------------------------|-----------------------------|------------|
| Appliance bastion client | Le istanze da amministrare   | TCP/3389   |

### Flussi di amministrazione SSH

| Fonte                    | Destinazione                 | Protocollo |
|--------------------------|-----------------------------|------------|
| Appliance bastion client | Le istanze da amministrare   | TCP/22     |

## Richiedere la creazione di un Appliance
Prima di poter distribuire un Appliance, è necessario fare una richiesta di sottoscrizione a un Appliance tramite una richiesta al supporto.
Il supporto è accessibile nella console Shiva dall'icona di salvagente sulla barra in alto a destra della finestra.

![](images/shiva_support.png)


## Registrare un'attrezzatura

Per accedere regolarmente a un'attrezzatura da amministrare, è più adatto creare una sessione, che richiederà solo il tuo nome utente e la tua password a ogni connessione.

A tal fine, vai alla scheda « Attrezzature » del menu « Bastion », quindi fai clic sul pulsante « Nuova attrezzatura ».

![](images/creer_session.png)


Inserisci quindi le informazioni necessarie alla creazione della tua attrezzatura:

    - Nome dell'attrezzatura;
    - Descrizione;
    - Appliance associato;
    - Tipo di protocollo (SSH o RDP);
    - Indirizzo IP dell'host;
    - Configurazione della tastiera.

![](images/creer_session2.png)


Una notifica che indica la creazione dell'attrezzatura dovrebbe apparire in alto a destra della pagina. La sessione viene quindi aggiunta alla lista delle tue attrezzature.

Per creare una nuova attrezzatura, è anche possibile passare per la scheda « Appliances » facendo clic sulla barra delle azioni dell'Appliance a cui desideri associare un'attrezzatura.

![](images/creer_session3.png)

## Connettersi a un'attrezzatura

Vai alla scheda « Attrezzature » della scheda « Bastion ». Fai clic sulla barra delle azioni dell'attrezzatura che desideri aprire, quindi fai clic sul pulsante « Apri ».

![](images/ouvrir_session.png)

A ogni connessione all'attrezzatura, dovrai solo inserire le tue informazioni di autenticazione.

![](images/ouvrir_session2.png)

Dopo aver inserito le tue credenziali, apparirà una notifica che confermerà l'inizio della connessione alla tua attrezzatura e si aprirà la console verso la tua macchina virtuale.