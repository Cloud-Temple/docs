---
title: Guida introduttiva
---

Benvenuti nella guida introduttiva di **MariaDB Gestito** Cloud Temple.

L'obiettivo di questa sezione è indirizzarvi verso le risorse necessarie per iniziare a utilizzare il vostro prodotto.

## Prima di iniziare

Assicurati di disporre degli accessi che ti sono stati forniti da Cloud-Temple.

Assicurati che i flussi di rete siano aperti verso gli indirizzi IP che ti sono stati forniti.

> **Prerequisiti di deployment** : Questo deployment richiede un cluster Kubernetes gestito completamente installato, con lo stack Prometheus e Grafana configurato per usufruire della telemetria completa e della dashboard Grafana associata.

Ogni cluster o server viene distribuito in modo isolato dall'operatore MariaDB in un namespace Kubernetes dedicato.

## Accedere al proprio cluster MariaDB Gestito

A seconda del modello di distribuzione scelto, si dispone di uno o più endpoint.

**StandAlone** : 1 solo endpoint (1 solo IP), accessibile sulla porta 3306.

**MultiAZ** :

- 1 Endpoint Maxscale, accessibile sulla porta 3306, in grado di distribuire le query verso le istanze più appropriate (è l'endpoint da privilegiare).
- 1 Endpoint R/W, accessibile sulla porta 3306, che punta all'istanza primaria, in lettura-scrittura.
- 1 Endpoint R/O, accessibile sulla porta 3306, che punta a tutte le istanze, in sola lettura.

## I tuoi permessi

Non disponi di alcun permesso a livello del motore di database (né `SUPER`, né `ALL_PRIVILEGE`).

Non puoi riconfigurare il motore o le sue opzioni, né installare `performance_schema`. (Ricordiamo che, inoltre, è sconsigliato attivarlo sulle istanze inferiori alla dimensione X-Large per motivi di risorse RAM).

Le richieste di aggiunta di database, utenti o grant devono essere rivolte ai team Cloud-Temple.