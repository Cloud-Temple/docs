---
title: Concetti
---

## Infrastruttura Internet CloudTemple

CloudTemple opera come **Cloud Service Provider (CSP)** dotato di un'infrastruttura Internet autonoma, altamente resiliente e sicura. La nostra connettività di tipo operator si basa su un proprio numero AS (Autonomous System Number) che ci conferisce un controllo totale sul routing e garantisce un'elevata disponibilità per tutti i nostri servizi.

Questa infrastruttura autonoma ci permette di offrire una connettività Internet con funzionalità avanzate, adatta a tutti i tipi di offerte CloudTemple, dall'hosting dedicato alle soluzioni IaaS, passando per i servizi PaaS.

## Architettura di rete e ridondanza

La nostra rete beneficia di un'architettura ridondante progettata per ottimizzare le prestazioni e garantire la continuità operativa. CloudTemple dispone di un sistema autonomo indipendente con un insieme di prefissi IP pubblici assegnati, che garantisce una connettività globale diretta.

Questa connettività si basa su **due percorsi distinti** per massimizzare la resilienza :

**Connettività di transito :** Due principali operatori di transito garantiscono la ridondanza a livello globale, consentendo un routing ottimale del traffico Internet verso le nostre infrastrutture.

**Punti di interscambio (IXP) :** La nostra presenza su due punti di interscambio (IXP) a Parigi ci permette di ridurre significativamente la latenza per gli utenti europei, migliorando al contempo le prestazioni dei servizi regionali. Questo approccio garantisce inoltre una ridondanza naturale contro i guasti del fornitore.

L'utilizzo del protocollo BGP4 garantisce un routing efficiente dei vostri flussi Internet verso il gateway attivo della vostra architettura, in particolare negli scenari di distribuzione su più zone di disponibilità, come nel caso di cluster di firewall distribuiti tra due zone di disponibilità.

## Protezione anti-DDoS integrata

Tutto il traffico in entrata verso l'infrastruttura CloudTemple beneficia di una protezione anti-DDoS avanzata, garantita da **F5**, un leader mondiale nella sicurezza di rete. Questa protezione opera in modo trasparente e automatico.

Gli attacchi volumetrici vengono rilevati e mitigati direttamente al bordo della rete F5, prima ancora di raggiungere la rete CloudTemple. Questo filtraggio a monte garantisce che nessuna saturazione possa influenzare le nostre connessioni Internet e solo le richieste legittime raggiungano le nostre infrastrutture.

**Tutti i servizi CloudTemple** beneficiano di questa protezione senza costi aggiuntivi, inclusi i prefissi client che possono essere migrati verso la nostra infrastruttura. Questo approccio integrato trasforma un requisito di sicurezza in un vantaggio operativo per i nostri clienti.

## Assegnazione di indirizzi IP pubblici

CloudTemple propone un sistema flessibile di assegnazione di indirizzi IP pubblici Provider Aggregated (PA), che consente ai clienti di riservare indirizzi IP pubblici **singolarmente** in base alle loro esigenze specifiche.

### Processo di prenotazione

La prenotazione di indirizzi IP pubblici avviene direttamente tramite la console CloudTemple, offrendo una gestione autonoma e immediata:

**Tramite l'API della console:** Integrazione possibile nei vostri workflow di automazione e provisioning.

**Tramite la console web:** Interfaccia intuitiva accessibile dalla sezione *Internet* della vostra area cliente.

Il processo di prenotazione segue queste semplici fasi: accesso alla console, navigazione verso *Internet* > *Gestisci gli indirizzi IP*, selezione di *Prenota un nuovo indirizzo*, scelta tra IPv4 o IPv6, quindi convalida dell'ordine.

### Fatturazione

La fatturazione degli indirizzi IP pubblici avviene per unità d'opera (UO) e inizia fin dalla prenotazione dell'indirizzo, garantendo una trasparenza totale dei costi.

| Riferimento | Unità | SKU |
|-----------|-------|-----|
| Rete - IPv4 Pubblica dedicata | 1 IPv4 | RSIP-IP4-UNIT |
| Rete - IPv6 Pubblica dedicata | 1 IPv6 | RSIP-IP6-UNIT |

## Blocchi IPv4

La fornitura di un'IPv4 avviene **nei limiti delle scorte disponibili** per i nostri clienti, per indirizzo IP.

L'ordine di indirizzi IPv4 viene effettuato dal menu ***'Indirizzi pubblici'*** del menu Reti nella barra verde a sinistra, tramite il pulsante ***"Ordina indirizzi IPv4 o prefissi IPv6"***.

È possibile visualizzare i blocchi di indirizzi assegnati a te in questo stesso menu.

| Riferimento                   | Unità  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Rete - IPv4 Pubblica dedicata | IPv4/32 | csp:(region):network:ipv4:v2 |

## Blocchi IPv6

L'ordine dei prefissi IPv6 viene effettuato dal menu ***'IP pubbliche'*** del menu Reti nella barra verde a sinistra, tramite il pulsante ***"Ordina indirizzi IPv4 o prefissi IPv6"***.

È possibile visualizzare i prefissi assegnati in questo stesso menu.

| Riferimento                             | Unità   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Rete - Intervallo IPv6 Pubblici dedicati | IPv6/48 | csp:(region):network:ipv6:v1 |

## Migrazione dei prefissi IP dei clienti

CloudTemple accompagna i clienti che desiderano migrare i propri prefissi IP verso la nostra infrastruttura, facilitando così i progetti di migrazione mantenendo invariata l'identità di rete esistente.

### Vantaggi della migrazione

Questo approccio consente di mantenere la vostra identità IP durante la migrazione verso CloudTemple, garantendo una continuità perfetta per le vostre applicazioni e clienti. Mantenete il controllo completo sull'utilizzo dei vostri indirizzi IP, beneficiando al contempo dell'infrastruttura CloudTemple.

### Processo di integrazione

Il tuo prefisso IP (ad esempio `203.0.113.0/24`) viene integrato nella rete backbone di CloudTemple e annunciato dal nostro AS. Una volta integrato, il prefisso può essere associato liberamente alle tue macchine virtuali, bilanciatori di carico o altri servizi.

**Tutti gli indirizzi del prefisso migrato beneficiano automaticamente della protezione anti-DDoS F5**, senza configurazione aggiuntiva né costi aggiuntivi.

### Requisiti

La migrazione dei prefissi IP richiede che il prefisso sia registrato in un registro Internet riconosciuto (ARIN, RIPE, APNIC, ecc.) e che ne siate i proprietari legittimi. La gestione BGP può essere affidata ai vostri team o avvalersi del supporto tecnico di CloudTemple, a seconda delle vostre preferenze.

## Riserva di banda internet

La banda internet è prenotabile in incrementi di 100 Mbps. La capacità massima disponibile per un gateway è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche del tuo gateway.

La fatturazione si basa sul 95° percentile durante il periodo di fatturazione, solitamente un mese. Puoi quindi occasionalmente usufruire di un burst oltre la capacità prenotata.

| Riferimento                                 | Unità    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Rete - Banda internet prenotata | 100 Mbps | csp:(region):network:trafic:internet:v1 |

***Nota:***
*Non è prevista una **fatturazione volumetrica** di tipo **'egress fees'. Paghi solo la prenotazione della banda.***

## Disponibilità per prodotto

Tutte queste funzionalità di connettività Internet sono disponibili su tutte le offerte CloudTemple, garantendo un'esperienza uniforme indipendentemente dal tipo di servizio utilizzato.

| Offerta | Connettività Internet | Protezione DDoS | Gestione RSIP | Migrazione prefissi |
|-------|----------------------|------------------|---------------|-------------------|
| Hosting dedicato | ✓ | ✓ | ✓ | ✓ |
| Hosting condiviso | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Questo approccio unificato garantisce che tutti i nostri clienti beneficiano di un accesso Internet di qualità carrier-grade, con sicurezza integrata e funzionalità avanzate, indipendentemente dalla loro scelta tecnologica.