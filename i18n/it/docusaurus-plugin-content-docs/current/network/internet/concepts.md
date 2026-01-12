---
title: Concetti
---

## Internet Infrastructure CloudTemple

CloudTemple opera come **Cloud Service Provider (CSP)** con un'infrastruttura Internet autonoma, altamente resiliente e sicura. La nostra connettività di tipo operatore si basa su un numero di AS (Autonomous System Number) proprietario, che ci garantisce un controllo totale sul routing e assicura un'alta disponibilità per tutti i nostri servizi.

Questa infrastruttura autonoma ci permette di offrire una connettività Internet con funzionalità avanzate, adatte a tutte le tipologie di offerte CloudTemple, dall'hosting dedicato alle soluzioni IaaS passando per i servizi PaaS.

## Architettura di rete e ridondanza

La nostra rete si avvale di un'architettura ridondante progettata per ottimizzare le prestazioni e garantire la continuità del servizio. CloudTemple dispone di un sistema autonomo indipendente con un insieme di prefissi IP pubblici assegnati, assicurando una connettività diretta globale.

Questa connettività si basa su **due percorsi distinti** per massimizzare la resilienza:

**Connessione di transit:** Due operatori principali di transit garantiscono la ridondanza a livello globale, consentendo un routing ottimale del traffico Internet verso le nostre infrastrutture.

**Punti di scambio:** La nostra presenza su due punti di scambio (IXP) a Parigi ci permette di ridurre significativamente la latenza per gli utenti europei, migliorando al contempo le prestazioni dei servizi regionali. Questa strategia garantisce inoltre una ridondanza naturale contro i guasti dei fornitori.

L'utilizzo del protocollo BGP4 garantisce un routing efficiente dei flussi Internet verso la gateway attiva della vostra architettura, in particolare nei scenari di distribuzione multi-zone di disponibilità, come nel caso di cluster di firewall distribuiti tra due zone di disponibilità.

## Protezione DDoS integrata

Tutto il traffico in entrata verso l'infrastruttura CloudTemple beneficia di una protezione DDoS avanzata garantita da **F5**, un leader mondiale nella sicurezza di rete. Questa protezione opera in modo trasparente e automatico.

Le attacchi volumetrici vengono rilevati e mitigati direttamente al bordo della rete F5, prima ancora di raggiungere la rete CloudTemple. Questo filtraggio in upstream garantisce che nessuna saturazione possa influenzare le nostre connessioni Internet, e solo le richieste legittime raggiungono le nostre infrastrutture.

**Tutti i servizi CloudTemple** beneficiano di questa protezione senza costi aggiuntivi, inclusi i prefissi clienti che possono essere migrati verso la nostra infrastruttura. Questo approccio integrato trasforma un requisito di sicurezza in un vantaggio operativo per i nostri clienti.

## Assignment of Public IP Addresses

CloudTemple offers a flexible system for assigning Provider Aggregated (PA) public IP addresses, allowing clients to reserve public IP addresses **individually** according to their specific needs.

### Processo di prenotazione

La prenotazione di indirizzi IP pubblici avviene direttamente tramite la console CloudTemple, offrendo una gestione autonoma e immediata:

**Attraverso l'API della console:** Integrazione possibile nei vostri flussi di automazione e provisioning.

**Attraverso la console web:** Interfaccia intuitiva accessibile dalla sezione *Internet* del vostro spazio client.

Il processo di prenotazione segue queste semplici fasi: accesso alla console, navigazione verso *Internet* > *Gestisci gli indirizzi IP*, selezione di *Prenota un nuovo indirizzo*, scelta tra IPv4 o IPv6, quindi conferma dell'ordine.

### Fatturazione

La fatturazione degli indirizzi IP pubblici avviene per unità di misura (UM) e ha inizio al momento della prenotazione dell'indirizzo, garantendo una trasparenza totale dei costi.

| Riferimento | Unità | SKU |
|-------------|-------|-----|
| Rete - IPv4 pubblico dedicato | 1 IPv4 | RSIP-IP4-UNIT |
| Rete - IPv6 pubblico dedicato | 1 IPv6 | RSIP-IP6-UNIT |

## IPv4 Blocks

The delivery of IPv4 addresses is subject to __available stock__ for our customers, per IP address.

To order IPv4 addresses, go to the __*'Public IPs'*__ menu under Networks in the green bar on the left, and click the __*"Order IPv4 addresses or IPv6 prefixes"*__ button.

You can also view the address blocks assigned to you in the same menu.

| Reference                     | Unit   | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Public IPv4 Dedicated Network | IPv4/32 | csp:(region):network:ipv4:v2 |

## Blocchi IPv6

La richiesta di prefissi IPv6 avviene dal menu __*'IP pubblici'*__ del menu Reti nella barra verde a sinistra, tramite il pulsante __*"Richiedi indirizzi IPv4 o prefissi IPv6"*__.

È possibile visualizzare i prefissi assegnati a questo stesso menu.

| Riferimento                             | Unità   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Rete - Intervallo di indirizzi IPv6 pubblici dedicati | IPv6/48 | csp:(region):network:ipv6:v1 |

## IP prefix migration

CloudTemple supports clients wishing to migrate their own IP prefixes to our infrastructure, facilitating migration projects while preserving their existing network identity.

### Vantaggi della migrazione

Questo approccio consente di mantenere il tuo indirizzo IP durante la migrazione verso CloudTemple, garantendo una continuità perfetta per le tue applicazioni e i tuoi clienti. Mantieni il pieno controllo sull'utilizzo dei tuoi indirizzi IP, beneficiando contemporaneamente dell'infrastruttura di CloudTemple.

### Processo di integrazione

Il tuo prefisso IP (ad esempio `203.0.113.0/24`) viene integrato nella rete backbone di CloudTemple e annunciato dal nostro AS. Una volta integrato, il prefisso può essere associato liberamente alle tue macchine virtuali, bilanciatori di carico o altri servizi.

**Tutte le indirizzi del prefisso migrato beneficiano automaticamente della protezione anti-DDoS F5**, senza configurazioni aggiuntive né costi aggiuntivi.

### Requis

La migrazione dei prefissi IP richiede che il prefisso sia registrato in un registro Internet riconosciuto (ARIN, RIPE, APNIC, ecc.) e che ne sia il proprietario legittimo. La gestione BGP può essere gestita dal vostro team oppure supportata tecnicamente da CloudTemple, a seconda delle vostre preferenze.

## Reserved Internet Bandwidth

Internet bandwidth is reservable in increments of 100 Mbps. The maximum available capacity for a gateway is 10 Gbps, potentially limited by the technical specifications of your gateway.

Billing is based on the 95th percentile over the billing period, typically one month. You may therefore occasionally benefit from bursts exceeding your reserved capacity.

| Reference                                 | Unit     | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Network - Reserved Internet Bandwidth     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Note:*__
*There is no __volume-based billing__ of the type __'egress fees'__. You pay only for the bandwidth reservation.__*

## Disponibilità per offerta

L'intera gamma di funzionalità di connettività Internet è disponibile su tutte le offerte CloudTemple, garantendo un'esperienza omogenea indipendentemente dal tipo di servizio utilizzato.

| Offerta | Connessione Internet | Protezione DDoS | Gestione RSIP | Migrazione prefissi |
|-------|----------------------|------------------|---------------|-------------------|
| Hosting dedicato | ✓ | ✓ | ✓ | ✓ |
| Hosting condiviso | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Questa approccio unificato garantisce a tutti i nostri clienti l'accesso a una connettività Internet di qualità operatore, con sicurezza integrata e funzionalità avanzate, indipendentemente dalla scelta tecnologica.