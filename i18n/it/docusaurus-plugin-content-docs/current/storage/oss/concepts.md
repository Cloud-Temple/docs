---
title: Concetti di Archiviazione Oggetto
sidebar_position: 2
---

# Concetti di Archiviazione Oggetto (OSS)

## Architettura Tecnica

Il servizio di archiviazione oggetti di Cloud Temple è basato su un'architettura distribuita che garantisce un'alta durabilità e disponibilità dei dati. Gli oggetti vengono archiviati in modo ridondante su diversi nodi di archiviazione all'interno dei nostri datacenter certificati SecNumCloud.

L'accesso al servizio avviene tramite un'API RESTful standard, compatibile con il protocollo S3, consentendoti di utilizzare una vasta gamma di strumenti e SDK esistenti.

## Componenti Principali

-   **Oggetti**: I dati fondamentali archiviati nel servizio. Un oggetto è composto da dati (il file stesso) e metadati (informazioni descrittive sull'oggetto).
-   **Bucket (Contenitori)**: Gli oggetti sono organizzati in bucket. Un bucket è un contenitore per gli oggetti, e il suo nome deve essere univoco all'interno del servizio.
-   **Chiavi**: Ogni oggetto all'interno di un bucket è identificato in modo univoco da una chiave (un nome di file).
-   **Endpoint**: URL regionali utilizzati per accedere all'API del servizio di archiviazione.

## Sicurezza e Crittografia

La sicurezza dei tuoi dati è la nostra priorità assoluta. Il servizio OSS integra meccanismi di crittografia robusti per proteggere i tuoi dati, sia quando sono memorizzati (inattivi) sia durante il trasferimento attraverso la rete.

### Crittografia dei dati a riposo (Data at Rest Encryption - D@RE)

Per proteggere i tuoi dati memorizzati, il nostro servizio utilizza la crittografia lato server.

-   **Attivazione**: La crittografia D@RE è abilitata a livello di *namespace* (spazio dei nomi).
-   **Algoritmo**: Utilizziamo l'algoritmo **AES-256**, uno dei più forti standard di crittografia disponibili.
-   **Funzionamento**: Quando scrivi un oggetto in un bucket in cui D@RE è abilitato, il servizio crittografa automaticamente i tuoi dati prima di scriverli sui dischi. Quando leggi l'oggetto, viene decrittografato in modo trasparente per te. La gestione delle chiavi di crittografia è completamente gestita dal servizio.

### Crittografia dei dati in transito

Tutte le comunicazioni con l'API del servizio di archiviazione oggetti, sia per caricare, scaricare o gestire i tuoi dati, devono essere protette.

-   **Protocollo**: Impone l'uso del protocollo **TLS (Transport Layer Security)**, versioni **1.2 e 1.3**.
-   **Funzionamento**: Utilizzando HTTPS per tutte le tue richieste API, ti assicuri che i dati scambiati tra il tuo client e i nostri server siano crittografati, proteggendoli così da intercettazioni o alterazioni durante il trasferimento attraverso la rete.