---
title: Panoramica della Console
---

import { ConsoleMap } from '@site/src/components/ConsoleMap';

La Console Cloud Temple è l'interfaccia di gestione della vostra piattaforma cloud. Qui create i vostri ambienti, gestite gli accessi dei vostri team, attivate i vostri prodotti, ordinate risorse e seguite i vostri consumi. Tutto ciò che fate nella Console è disponibile anche tramite la sua [API](./api.md), e il [provider Terraform](../terraform/terraform.md) vi permette di gestire la vostra piattaforma *as code*.

## Dove si colloca la Console

<ConsoleMap />

Occorre distinguere due percorsi:

- **La gestione.** I vostri team si collegano alla Console da un browser, all'indirizzo [shiva.cloud-temple.com](https://shiva.cloud-temple.com). L'accesso è limitato agli [indirizzi IP pubblici che avete autorizzato](./onboarding.md#aggiungere-un-indirizzo-ip) e il [doppio fattore](./onboarding.md#il-doppio-fattore-è-obbligatorio) è obbligatorio. I vostri script e Terraform passano dall'API, autenticati con una chiave API (*Personal Access Token*).
- **L'utilizzo.** Gli utenti delle vostre applicazioni raggiungono le vostre macchine e i vostri servizi tramite le offerte [Rete](../network/network_overview.md), come Internet o Private Network. Questo traffico non passa dalla Console: la Console serve a gestire la vostra infrastruttura, non a erogarla.

Le vostre risorse sono organizzate in **tenant**, ambienti isolati all'interno della vostra organizzazione, e distribuite in [regioni e zone di disponibilità](../additional_content/concepts_regional.md). I [concetti](./concepts.md) descrivono questo modello.

## Cosa potete fare

<div class="card-grid">
  <div class="card">
    <h3>Predisporre i vostri ambienti</h3>
    <p>Creare la vostra organizzazione e i vostri tenant, poi attivare i vostri prodotti.</p>
    <a href="./console/onboarding" class="card-link">Guida introduttiva &rarr;</a>
  </div>

  <div class="card">
    <h3>Gestire gli accessi</h3>
    <p>Utenti, permessi per tenant e federazione delle identità.</p>
    <a href="./console/iam" class="card-link">Modulo IAM &rarr;</a>
  </div>

  <div class="card">
    <h3>Seguire i costi</h3>
    <p>Consumi per prodotto, per servizio e per tenant.</p>
    <a href="./console/billing/concepts" class="card-link">Gestore dei costi &rarr;</a>
  </div>

  <div class="card">
    <h3>Monitorare le risorse</h3>
    <p>Metriche in formato Prometheus, consultabili nella Console o nei vostri strumenti.</p>
    <a href="./console/metrics/concepts" class="card-link">Metriche &rarr;</a>
  </div>

  <div class="card">
    <h3>Seguire operazioni e incidenti</h3>
    <p>Interventi pianificati sulla piattaforma e incidenti in corso.</p>
    <a href="./console/status" class="card-link">Operazioni pianificate &rarr;</a>
  </div>

  <div class="card">
    <h3>Contattare il supporto</h3>
    <p>Consulenza, assistenza sul vostro account, incidenti o servizi professionali: tutte le vostre richieste al supporto.</p>
    <a href="./console/console_quickstart#accesso-al-supporto-tecnico" class="card-link">Supporto tecnico &rarr;</a>
  </div>

  <div class="card">
    <h3>Ordinare risorse</h3>
    <p>Zone di disponibilità, cluster, storage e reti, con il monitoraggio degli ordini.</p>
    <a href="./console/orders" class="card-link">Distribuire risorse &rarr;</a>
  </div>

  <div class="card">
    <h3>Automatizzare</h3>
    <p>Tutte le funzioni della Console tramite l'API, e la vostra infrastruttura as code con Terraform.</p>
    <a href="./console/api" class="card-link">Documentazione API &rarr;</a>
  </div>
</div>

## Da dove iniziare

- **Scoprite Cloud Temple**: seguite la [guida introduttiva](./onboarding.md), dalla creazione della vostra organizzazione all'attivazione dei vostri prodotti.
- **Volete capire il modello** di organizzazione, tenant e permessi: leggete i [concetti](./concepts.md).
- **Cercate una funzione nell'interfaccia**: fate la [visita della Console](./console_quickstart.md).
