---
title: Concetti
---

## Infrastruttura Internet di CloudTemple

CloudTemple opera come **Cloud Service Provider (CSP)** con un'infrastruttura Internet autonoma, altamente resiliente e sicura. La nostra connettività di livello carrier si basa sul nostro AS (Autonomous System Number) che ci conferisce il pieno controllo sul routing e garantisce un'elevata disponibilità per tutti i nostri servizi.

Questa infrastruttura autonoma ci consente di offrire connettività Internet con funzionalità avanzate, adatte a tutti i tipi di offerte CloudTemple, dall'hosting dedicato alle soluzioni IaaS e ai servizi PaaS.

## Architettura di rete e ridondanza

La nostra rete beneficia di un'architettura ridondante progettata per ottimizzare le prestazioni e garantire la continuità del servizio. CloudTemple dispone di un sistema autonomo indipendente con un insieme di prefissi IP pubblici assegnati, garantendo una connettività globale diretta.

Questa connettività si basa su **due percorsi distinti** per massimizzare la resilienza:

**Connettività di transito:** Due principali operatori di transito garantiscono la ridondanza a livello globale, consentendo un instradamento ottimale del traffico Internet verso le nostre infrastrutture.

**Punti di interscambio:** La nostra presenza in due punti di interscambio (IXP) a Parigi ci consente di ridurre significativamente la latenza per gli utenti europei, migliorando al contempo le prestazioni dei servizi regionali. Questo approccio garantisce anche una ridondanza naturale contro i guasti dei fornitori.

L'uso del protocollo BGP4 garantisce un instradamento efficiente dei flussi Internet verso il gateway attivo della tua architettura, in particolare negli scenari di implementazione multi-zona di disponibilità, come nel caso di cluster di firewall distribuiti tra due zone di disponibilità.

## Protezione anti-DDoS integrata

Tutto il traffico in entrata verso l'infrastruttura CloudTemple beneficia di una protezione anti-DDoS avanzata, fornita da **F5**, leader mondiale nella sicurezza di rete. Questa protezione funziona in modo trasparente e automatico.

Gli attacchi volumetrici vengono rilevati e mitigati direttamente ai margini della rete F5, prima ancora di raggiungere la rete CloudTemple. Questo filtraggio a monte garantisce che nessuna saturazione possa influire sulle nostre connessioni Internet e solo le richieste legittime raggiungono le nostre infrastrutture.

**Tutti i servizi CloudTemple** beneficiano di questa protezione senza costi aggiuntivi, compresi i prefissi dei clienti che possono essere migrati sulla nostra infrastruttura. Questo approccio integrato trasforma un vincolo di sicurezza in un vantaggio operativo per i nostri clienti.

## Assegnazione di indirizzi IP pubblici

CloudTemple offre un sistema flessibile per l'assegnazione di indirizzi IP pubblici Provider Aggregated (PA), consentendo ai clienti di prenotare indirizzi IP pubblici **singolarmente** in base alle loro esigenze specifiche.

### Processo di prenotazione

La prenotazione degli indirizzi IP pubblici viene effettuata direttamente tramite la console CloudTemple, offrendo una gestione autonoma e immediata:

**Tramite l'API della console:** Possibile integrazione nei flussi di lavoro di automazione e provisioning.

**Tramite la console web:** Interfaccia intuitiva accessibile dalla sezione *Internet* della tua area clienti.

Il processo di prenotazione segue questi semplici passaggi: connessione alla console, navigazione in *Internet* > *Gestisci indirizzi IP*, selezione di *Prenota un nuovo indirizzo*, scelta tra IPv4 o IPv6, quindi convalida dell'ordine.

### Fatturazione

La fatturazione degli indirizzi IP pubblici viene effettuata per unità di lavoro (UO) e inizia non appena l'indirizzo viene prenotato, garantendo la totale trasparenza dei costi.

| Riferimento | Unità | SKU |
|---|---|---|
| Rete - IPv4 Pubblico Dedicato | 1 IPv4 | RSIP-IP4-UNIT |
| Rete - IPv6 Pubblico Dedicato | 1 IPv6 | RSIP-IP6-UNIT |

## Blocchi IPv4

La consegna di IPv4 è soggetta a __limiti di stock disponibile__ per i nostri clienti, per indirizzo IP.

L'ordine di indirizzi IPv4 viene effettuato dal menu __*'IP pubblici'*__ del menu Reti nel banner verde a sinistra, tramite il pulsante __*"Ordina indirizzi IPv4 o prefissi IPv6"*__.

Puoi visualizzare i blocchi di indirizzi che ti sono stati assegnati in questo stesso menu.

| Riferimento | Unità | SKU |
|---|---|---|
| Rete - IPv4 Pubblico Dedicato | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Blocchi IPv6

L'ordine di prefissi IPv6 viene effettuato dal menu __*'IP pubblici'*__ del menu Reti nel banner verde a sinistra, tramite il pulsante __*"Ordina indirizzi IPv4 o prefissi IPv6"*__.

Puoi visualizzare i prefissi che ti sono stati assegnati in questo stesso menu.

| Riferimento | Unità | SKU |
|---|---|---|
| Rete - Range IPv6 Pubblici Dedicati | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Migrazione dei prefissi IP dei clienti

CloudTemple supporta i clienti che desiderano migrare i propri prefissi IP sulla nostra infrastruttura, facilitando così i progetti di migrazione mantenendo l'identità di rete esistente.

### Vantaggi della migrazione

Questo approccio ti consente di mantenere la tua identità IP durante la migrazione a CloudTemple, garantendo una continuità perfetta per le tue applicazioni e i tuoi clienti. Mantieni il pieno controllo sull'uso dei tuoi indirizzi IP beneficiando al contempo dell'infrastruttura CloudTemple.

### Processo di integrazione

Il tuo prefisso IP (ad esempio `203.0.113.0/24`) viene integrato nella rete backbone di CloudTemple e annunciato dal nostro AS. Una volta integrato, il prefisso può essere liberamente associato alle tue macchine virtuali, ai bilanciatori di carico o ad altri servizi.

**Tutti gli indirizzi del prefisso migrato beneficiano automaticamente della protezione anti-DDoS F5**, senza alcuna configurazione aggiuntiva o costo extra.

### Condizioni richieste

La migrazione dei prefissi IP richiede che il prefisso sia registrato presso un registro Internet riconosciuto (ARIN, RIPE, APNIC, ecc.) e che tu ne sia il legittimo proprietario. La gestione BGP può essere gestita dai tuoi team o beneficiare del supporto tecnico di CloudTemple in base alle tue preferenze.

## Prenotazione della larghezza di banda Internet

La larghezza di banda Internet può essere prenotata in incrementi di 100 Mbps. La capacità massima disponibile per un gateway è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche del tuo gateway.

La fatturazione viene effettuata al 95° percentile durante il periodo di fatturazione, generalmente un mese. Pertanto, puoi beneficiare occasionalmente di un burst oltre la tua capacità riservata.

| Riferimento | Unità | SKU |
|---|---|---|
| Rete - Larghezza di banda Internet riservata | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*Non c'è __fatturazione volumetrica__ del tipo __'egress fees'. Paghi solo per la prenotazione della larghezza di banda.__*

## Disponibilità per offerta

Tutte queste funzionalità di connettività Internet sono disponibili in tutte le offerte CloudTemple, garantendo un'esperienza coerente indipendentemente dal tipo di servizio utilizzato.

| Offerta | Connettività Internet | Protezione DDoS | Gestione RSIP | Migrazione Prefissi |
|---|---|---|---|---|
| Hosting Dedicato | ✓ | ✓ | ✓ | ✓ |
| Hosting Condiviso | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Questo approccio unificato garantisce che tutti i nostri clienti beneficino di un accesso Internet di livello carrier, con sicurezza integrata e funzionalità avanzate, indipendentemente dalla loro scelta tecnologica.
