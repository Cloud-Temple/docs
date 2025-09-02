---
title: Distribuzione da un template
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from './images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from './images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from './images/shiva_catalogs_deployer.png';

Questa guida ti permetterà di distribuire le tue prime istanze sul Cloud di Confianza in meno di 5 minuti.

## __Prerequisiti__

1. Aver sottoscritto l'offerta Cloud Temple (sottoscrizione all'offerta IaaS).
2. Avere i permessi attivati per il pilotaggio degli oggetti __'IaaS'__

## Distribuire una macchina virtuale da un Template

Questa guida ti mostra passo dopo passo come distribuire una macchina virtuale da un Template nella console Shiva.

Sul portale Shiva, vai alla scheda "Cloud di fiducia", poi "Cataloghi". Prima di poter distribuire un Template, questo deve essere caricato nel tuo catalogo privato, nella scheda "Il mio catalogo".

Per fare ciò, hai due possibilità: importare il tuo Template direttamente nel tuo catalogo privato o importare un modello dal catalogo pubblico di Cloud Temple.

### Importare un Template personale nel catalogo privato

Nella scheda "Il mio catalogo", clicca su "Pubblica file".

<img src={shivaCatalogsCharger} />

Segui quindi i passaggi per la pubblicazione del Template, inserendo il suo nome e una descrizione, and scegliendo la sua posizione in una libreria.

Il Template dovrebbe quindi apparire nel tuo catalogo privato.

### Importare un Template dal catalogo pubblico

Nella scheda "Catalogo pubblico", clicca sul pulsante "Aggiungi al mio catalogo" del Template di tua scelta per importarlo nel tuo catalogo privato. Questo dovrebbe quindi apparire nel tuo catalogo privato.
<img src={shivaCatalogsAjout} />

### Distribuire il Template

Una volta importato il Template nel tuo catalogo privato, puoi distribuirlo cliccando su "Distribuisci".

<img src={shivaCatalogsDeployer} />

Segui quindi i diversi passaggi per la distribuzione della risorsa, selezionando la sua posizione fisica (datacenter, cluster di calcolo, datastore) e altri parametri di configurazione opzionali.
