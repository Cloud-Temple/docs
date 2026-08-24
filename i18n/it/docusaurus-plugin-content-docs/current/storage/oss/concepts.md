---
title: Concetti di Object Storage
sidebar_position: 2
---

# Concetti di Archiviazione Oggetti (OSS)

## Architettura Tecnica

Il servizio di object storage di Cloud Temple è costruito su un'architettura distribuita che garantisce un'elevata durabilità e disponibilità dei dati. Gli oggetti sono memorizzati in modo ridondante su più nodi di archiviazione all'interno dei nostri datacenter certificati SecNumCloud.

L'accesso al servizio avviene tramite un'API RESTful standard, compatibile con il protocollo S3, consentendovi di utilizzare un'ampia gamma di strumenti e SDK esistenti.

## Componenti Principali

- **Oggetti** : I dati fondamentali archiviati nel servizio. Un oggetto è composto da dati (il file stesso) e metadati (informazioni descrittive sull'oggetto).
- **Buckets (Contenitori)** : Gli oggetti sono organizzati in bucket. Un bucket è un contenitore per gli oggetti e il suo nome deve essere univoco all'interno del servizio.
- **Chiavi** : Ogni oggetto in un bucket è identificato in modo univoco da una chiave (un nome di file).
- **Endpoints** : Gli URL regionali che si utilizzano per accedere all'API del servizio di archiviazione.

## Sicurezza e Crittografia

La sicurezza dei vostri dati è la nostra priorità assoluta. Il servizio OSS integra meccanismi di crittografia robusti per proteggere i vostri dati, sia quando sono memorizzati (a riposo) sia quando transitano sulla rete.

### Crittografia dei Dati a Riposo (Data at Rest Encryption - D@RE)

Per proteggere i vostri dati archiviati, il nostro servizio utilizza la crittografia lato server.

- **Attivazione** : La crittografia D@RE è attivata a livello di *namespace* (spazio dei nomi).
- **Algoritmo** : Utilizziamo una crittografia **AES a 256 bit** certificata **FIPS 140-3**, tramite la libreria software **RSA BSAFE Crypto-J** nella versione **7.x**.
- **Funzionamento** : Quando scrivete un oggetto in un bucket in cui D@RE è attivato, il servizio crittografa automaticamente i vostri dati prima di scriverli sui dischi. Quando leggete l'oggetto, viene decrittografato in modo trasparente per voi. La gestione delle chiavi di crittografia è interamente gestita dal servizio.

### Crittografia dei Dati in Transito

Tutte le comunicazioni con l'API del servizio di archiviazione oggetti, sia per caricare, scaricare o gestire i vostri dati, devono essere sicure.

- **Protocollo** : Imponiamo l'utilizzo del protocollo **TLS (Transport Layer Security)**, versioni **1.2 e 1.3**.
- **Funzionamento** : Utilizzando HTTPS per tutte le vostre richieste API, vi assicurate che i dati scambiati tra il vostro client e i nostri server siano crittografati, proteggendoli così dall'intercettazione o dall'alterazione durante il transito sulla rete.