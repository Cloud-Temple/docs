---
title: Distribuzione da un template
tags:
  - iaas_vmware
  - tutorials
---
import shivaCatalogsCharger from '@site/docs/iaas_vmware/tutorials/images/shiva_catalogs_charger.png';
import shivaCatalogsAjout from '@site/docs/iaas_vmware/tutorials/images/shiva_catalogs_ajout.png';
import shivaCatalogsDeployer from '@site/docs/iaas_vmware/tutorials/images/shiva_catalogs_deployer.png';

Questa guida vi permetterà di distribuire in meno di 5 minuti le vostre prime istanze sul Cloud di Fiducia.

## __Prerequisiti__

1. Avere sottoscritto il prodotto Cloud Temple (sottoscrizione al prodotto IaaS).
2. Avere le autorizzazioni abilitate per il driver degli oggetti __'IaaS'__

## Distribuire una macchina virtuale da un modello

Questa guida mostra passo dopo passo come distribuire una macchina virtuale da un modello nella Console.

Nel portale Console, vai alla scheda "Cloud di fiducia", quindi a "Cataloghi". Prima di poter distribuire un modello, questo deve essere caricato nel tuo catalogo privato, nella scheda "Il mio catalogo".

A tal fine, hai due possibilità: importare il tuo modello direttamente nel tuo catalogo privato oppure importare un modello dal catalogo pubblico di Cloud Temple.

### Importare un modello personale nel catalogo privato

Nella scheda "Il mio catalogo", fai clic su "Pubblica file".

<img src={shivaCatalogsCharger} />

Quindi, segui i passaggi di pubblicazione del modello, inserendone il nome e una descrizione, e selezionando la posizione all'interno di una libreria.

Il modello dovrebbe quindi essere visualizzato nel tuo catalogo privato.

### Importare un modello dal catalogo pubblico

Nella scheda "Catalogo pubblico", fai clic sul pulsante "Aggiungi al mio catalogo" del modello di tua scelta per importarlo nel tuo catalogo privato. Dovrebbe successivamente apparire nel tuo catalogo privato.
<img src={shivaCatalogsAjout} />

### Distribuire il Template

Una volta importato il Template nel tuo catalogo privato, puoi distribuirlo facendo clic su "Distribuisci".

<img src={shivaCatalogsDeployer} />

Segui quindi le diverse fasi di distribuzione della risorsa, selezionandone la posizione fisica (datacenter, cluster di calcolo, datastore) e altri parametri di configurazione opzionali.