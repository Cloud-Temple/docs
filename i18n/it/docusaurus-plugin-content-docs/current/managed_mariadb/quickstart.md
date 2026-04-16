---
title: Guida introduttiva
---

Benvenuti nella guida introduttiva di **MariaDB Gestito** di Cloud Temple.

L'obiettivo di questa sezione è orientarvi verso le risorse necessarie per iniziare a utilizzare il vostro prodotto.

## Prima di iniziare

Assicuratevi di disporre degli accessi che vi sono stati forniti da Cloud-Temple.

Assicuratevi che i flussi di rete siano aperti verso gli IP che vi sono stati forniti.

## Accesso al vostro cluster MariaDB Gestito

A seconda del modello di distribuzione scelto, disponete di uno o più endpoint.

**StandAlone**: 1 unico endpoint (1 unico IP), accessibile sulla porta 3306.

**Distributed**:

- 1 Endpoint MaxScale, accessibile sulla porta 3306, in grado di distribuire le vostre query verso le istanze più appropriate (questo è l'endpoint preferito)
- 1 Endpoint R/W, accessibile sulla porta 3306, che punta all'istanza primaria, in modalità lettura-scrittura.
- 1 Endpoint R/O, accessibile sulla porta 3306, che punta a tutte le istanze, in modalità sola lettura.

## I vostri permessi

Non disponete di alcun permesso a livello del motore di database (né `SUPER`, né `ALL_PRIVILEGE`)

Non potete riconfigurare il motore o le sue opzioni, né installare il performance_schema.

Le richieste di aggiunta di database, utenti o grant devono essere effettuate ai team di Cloud-Temple.
