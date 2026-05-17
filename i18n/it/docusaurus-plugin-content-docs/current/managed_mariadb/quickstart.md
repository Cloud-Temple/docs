---
title: Guida introduttiva
---

Benvenuti nella guida introduttiva di **MariaDB Gestito** Cloud Temple.

L'obiettivo di questa sezione è indirizzarvi verso le risorse necessarie per iniziare a utilizzare il vostro prodotto.

## Prima di iniziare

Assicurati di disporre degli accessi forniti da Cloud-Temple.

Assicurati che i flussi di rete siano aperti verso gli indirizzi IP forniti.

## Accedere al tuo cluster MariaDB gestito

In base al modello di distribuzione scelto, disponi di uno o più endpoint.

**StandAlone** : 1 solo endpoint (1 seule IP), accessibile sulla porta 3306.

**Distribuito** :

- 1 Endpoint Maxscale, accessibile sulla porta 3306, in grado di distribuire le tue richieste verso le istanze più appropriate (c'est le endpoint a privilégier)
- 1 Endpoint R/W, accessibile sulla porta 3306, che punta all'istanza primaria, in lettura-scrittura.
- 1 Endpoint R/O, accessibile sulla porta 3306, che punta a tutte le istanze, in sola lettura.

## Le tue autorizzazioni

Non disponi di alcuna autorizzazione a livello di motore di database (né `SUPER`, né `ALL_PRIVILEGE`)

Non è possibile riconfigurare il motore o le sue opzioni, né installare il performance_schema.

Le richieste di aggiunta di database, utenti o grant devono essere inoltrate ai team Cloud-Temple.