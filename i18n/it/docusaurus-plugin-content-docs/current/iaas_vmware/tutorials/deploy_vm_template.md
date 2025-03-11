---
title: Distribuzione da un modello
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

Questa guida ti permetterà di distribuire le tue prime istanze sul Cloud di Fiducia in meno di 5 minuti.

## __Prerequisiti__

1. Aver sottoscritto all'offerta Cloud Temple (sottoscrizione all'offerta IaaS).
2. Avere i permessi attivati per il driver degli oggetti __'IaaS'__

## Distribuire una macchina virtuale da un modello

Questa guida ti mostra passo dopo passo come distribuire una macchina virtuale da un modello nella console Shiva.

Sulla piattaforma Shiva, vai alla scheda "Cloud di fiducia", poi "Cataloghi". Prima di poter distribuire un modello, questo deve essere caricato nel tuo catalogo privato, nella scheda "Il mio catalogo".

Per fare ciò, hai due possibilità: importare il tuo modello direttamente nel tuo catalogo privato o importare un modello dal catalogo pubblico di Cloud Temple.

### Importare un modello personale nel catalogo privato

Nella scheda "Il mio catalogo", clicca su "Pubblica file".

<img src={shivaCatalogsCharger} />

Segui quindi i passaggi per la pubblicazione del modello, inserendo il suo nome e una descrizione, e scegliendo la sua posizione in una libreria.

Il modello dovrebbe quindi apparire nel tuo catalogo privato.

### Importare un modello dal catalogo pubblico

Nella scheda "Catalogo pubblico", clicca sul pulsante "Aggiungi al mio catalogo" del modello di tua scelta per importarlo nel tuo catalogo privato. Questo dovrebbe quindi apparire nel tuo catalogo privato.
<img src={shivaCatalogsAjout} />

### Distribuire il modello

Una volta importato il modello nel tuo catalogo privato, puoi distribuirlo cliccando su "Distribuisci".

<img src={shivaCatalogsDeployer} />

Segui quindi i vari passaggi per la distribuzione della risorsa, selezionando la sua posizione fisica (datacenter, cluster di calcolo, datastore) e altri parametri di configurazione opzionali.