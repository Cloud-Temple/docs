---
title: Domande frequenti
---

## Is S3 access restricted to the internal network?

No — there is no concept of a "private internal network." Access to the **S3** service is performed **via public IP addresses**. By default, S3 buckets are **private**, and access is controlled through IP address whitelists associated with the bucket.

Allowed IP addresses can be:

- **Dedicated public IPs** assigned to the client within the Cloud Temple infrastructure;
- or **external public IPs** (remote sites, warehouses, factories, partner operators, etc.).

## È possibile avere bucket accessibili dall'esterno?

Sì, ma solo in casi specifici. Il controllo di accesso è gestito **a livello di bucket**, consentendo di definire:

- dei **bucket strettamente privati**, accessibili esclusivamente dalle IP pubbliche autorizzate del cliente;
- dei **bucket parzialmente accessibili**, che consentono l'accesso da IP pubbliche esterne specifiche (siti remoti, partner).

## Cos'è un link di download sicuro S3?

Un **link pre-firmato** (*pre-signed URL*) è un URL temporaneo e firmato che consente l'accesso temporaneo a un oggetto S3 senza esporre credenziali permanenti. Il link contiene un **token** e una **data di scadenza**.

**Caratteristiche:**

- Durata di validità configurabile (es. 5 giorni per impostazione predefinita)
- Generazione tramite API o lato applicazione
- Accesso soggetto alle regole di whitelist IP e alle politiche del bucket

## Can signed URLs be used from outside?

Not if the bucket is restricted by IP list.

Even with a valid signed URL, access will be denied if the request does not originate from an **authorized public IP address** for that bucket.

Example:

> If the bucket is configured to allow only the client's dedicated public IPs, an external user will **not** be able to download the file, even with a temporary link.

## È possibile creare collegamenti temporanei per utilizzi occasionali?

Sì. È possibile generare **collegamenti pre-firmati** su richiesta per condividere file in modo temporaneo. Essi includono un **token di accesso** e scadono dopo il periodo configurato.

Tali collegamenti rimangono sempre soggetti alle **restrizioni IP** del bucket.

## Cosa accade se una richiesta proviene da un'IP non autorizzata?

L'accesso viene **rifiutato** (HTTP 403 – *Access Denied*).

Il servizio verifica:

1. La validità del **token** (se si tratta di un link pre-firmato)
2. L'**indirizzo IP di origine** della richiesta
3. Le **politiche ACL** e le regole configurate sul bucket

Ogni condizione non soddisfatta comporta il rifiuto dell'accesso.

## Scenari di utilizzo consigliati

- **Archiviazione interna cliente**: bucket privati accessibili esclusivamente dalle IP pubbliche dedicate del cliente (gestione tramite whitelist).
- **Condivisione temporanea sicura**: generazione di link pre-firmati con scadenza breve e controllo rigoroso delle IP autorizzate.
- **Accesso a sito remoto specifico**: autorizzazione di IP pubbliche esterne precise per siti aziendali (magazzini, fabbriche) dopo validazione di sicurezza.