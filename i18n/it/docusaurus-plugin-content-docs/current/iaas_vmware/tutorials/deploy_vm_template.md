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

Nel portale Console, andate alla scheda "Cloud di fiducia", quindi a "Cataloghi". Prima di poter distribuire un modello, questo deve essere caricato nel vostro catalogo privato, nella scheda "Il mio catalogo".

A tal fine, avete due possibilità: importare il vostro modello direttamente nel vostro catalogo privato oppure importare un modello dal catalogo pubblico di Cloud Temple.

### Importare un modello personale nel catalogo privato

Nella scheda "Il mio catalogo", fate clic su "Pubblica file".

<img src={shivaCatalogsCharger} />

Quindi, seguite i passaggi di pubblicazione del modello, inserendone il nome e una descrizione, e selezionando la posizione all'interno di una libreria.

Il modello dovrebbe quindi essere visualizzato nel vostro catalogo privato.

### Importare un modello dal catalogo pubblico

Nella scheda "Catalogo pubblico", fate clic sul pulsante "Aggiungi al mio catalogo" del modello di vostra scelta per importarlo nel vostro catalogo privato. Dovrebbe successivamente apparire nel vostro catalogo privato.
<img src={shivaCatalogsAjout} />

### Distribuire il Template

Una volta importato il Template nel vostro catalogo privato, potete distribuirlo facendo clic su "Distribuisci".

<img src={shivaCatalogsDeployer} />

Seguite quindi le diverse fasi di distribuzione della risorsa, selezionandone la posizione fisica (datacenter, cluster di calcolo, datastore) e altri parametri di configurazione opzionali.