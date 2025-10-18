

---
title: Concetti
---



## Infrastruttura Internet CloudTemple

CloudTemple opera come **Fornitore di Servizi Cloud (CSP)** dotato di un'infrastruttura Internet autonoma, estremamente resiliente e sicura. La nostra connettività di tipo operatore si basa su un numero ASN (Autonomous System Number) proprietario che ci conferisce un controllo totale sul routing e garantisce un'alta disponibilità per tutti i nostri servizi.

Questa infrastruttura autonoma ci permette di offrire una connettività Internet con funzionalità avanzate, adattate a tutti i tipi di offerte CloudTemple, dall'hosting dedicato alle soluzioni IaaS passando per i servizi PaaS.



## Architettura di rete e ridondanza

La nostra rete beneficia di un'architettura ridondante progettata per ottimizzare le prestazioni e garantire la continuità del servizio. CloudTemple dispone di un sistema autonomo indipendente con un insieme di prefissi IP pubblici assegnati, garantendo una connessione globale diretta.

Questa connettività si basa su **due percorsi distinti** per massimizzare la resilienza:

**Connessione di transito:** Due operatori principali di transito garantiscono la ridondanza a livello globale, consentendo un routing ottimale del traffico Internet verso le nostre infrastrutture.

**Punti di scambio:** La nostra presenza su due punti di scambio (IXP) a Parigi ci permette di ridurre significativamente la latenza per gli utenti europei, migliorando le prestazioni dei servizi regionali. Questo approccio garantisce anche una ridondanza naturale contro i guasti del fornitore.

L'utilizzo del protocollo BGP4 garantisce un routing efficace dei flussi Internet verso la gateway attiva della vostra architettura, particolarmente nei casi di distribuzione multi-zone di disponibilità, come ad esempio cluster di firewall distribuiti tra due zone di disponibilità.



## Protezione anti-DDoS integrata

Tutto il traffico in entrata verso l'infrastruttura CloudTemple beneficia di una protezione anti-DDoS avanzata, garantita da **F5**, un leader mondiale nella sicurezza delle reti. Questa protezione funziona in modo trasparente e automatico.

Gli attacchi volumetrici vengono rilevati e attenuati direttamente al bordo della rete F5, prima ancora di raggiungere la rete CloudTemple. Questo filtraggio a monte garantisce che nessun sovraccarico possa influenzare le nostre connessioni Internet, e solo le richieste legittime raggiungono le nostre infrastrutture.

**Tutti i servizi CloudTemple** beneficiano di questa protezione senza costi aggiuntivi, inclusi i prefissi clienti che possono essere migrati verso la nostra infrastruttura. Questo approccio integrato trasforma un vincolo di sicurezza in un vantaggio operativo per i nostri clienti.



## Assegnazione di indirizzi IP pubblici

CloudTemple offre un sistema flessibile di assegnazione di indirizzi IP pubblici Provider Aggregated (PA), che permette ai clienti di prenotare indirizzi IP pubblici **a unità** in base alle loro esigenze specifiche.



### Processo di prenotazione

La prenotazione di indirizzi IP pubblici avviene direttamente dalla console CloudTemple, offrendo una gestione autonoma e immediata:

**Attraverso l'API della console:** Integrazione possibile nei vostri flussi di automazione e provisioning.

**Attraverso la console web:** Interfaccia intuitiva accessibile dalla sezione *Internet* del vostro spazio clienti.

Il processo di prenotazione prevede questi semplici passaggi: accesso alla console, navigazione verso *Internet* > *Gestire gli indirizzi IP*, selezione di *Prenotare un nuovo indirizzo*, scelta tra IPv4 o IPv6, quindi conferma dell'ordine.



### Fatturazione

La fatturazione delle indirizzi IP pubblici avviene per unità di lavoro (UO) e inizia dalla prenotazione dell'indirizzo, garantendo una trasparenza totale dei costi.

| Riferimento | Unità | SKU |
|-----------|-------|-----|
| Rete - IPv4 Pubblico dedicato | 1 IPv4 | RSIP-IP4-UNIT |
| Rete - IPv6 Pubblico dedicato | 1 IPv6 | RSIP-IP6-UNIT |



## Blocchi IPv4

La consegna di una IPv4 avviene __entro la disponibilità dello stock__ per i nostri clienti, per indirizzo IP.

L'ordine degli indirizzi IPv4 può essere effettuato dal menu __*'IP pubbliche'*__ del menu Rete nella barra verde a sinistra, tramite il pulsante __*"Ordina indirizzi IPv4 o prefissi IPv6"*__.

È possibile visualizzare i blocchi di indirizzi assegnati nel medesimo menu.

| Riferimento                   | Unità  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Rete - IPv4 Pubblica dedicata | 1 IPv4 | csp:(region):network:ipv4:v2 |



## Blocchi IPv6

L'ordine dei prefissi IPv6 avviene dal menu __*'IP pubblici'*__ del menu Rete nella barra verde a sinistra, tramite il pulsante __*"Ordina indirizzi IPv4 o prefissi IPv6"*__.

È possibile visualizzare i prefissi assegnati a te in questo stesso menu.

| Riferimento                            | Unità   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Rete - Intervallo IPv6 Pubblico Dedicato | 64 IPv6 | csp:(region):network:ipv6:v1 |



## Migrazione dei prefissi IP dei clienti

CloudTemple accompagna i clienti che desiderano migrare i propri prefissi IP nella nostra infrastruttura, facilitando così i progetti di migrazione mantenendo l'identità di rete esistente.



### Vantaggi della migrazione

Questa metodologia consente di mantenere la vostra identità IP durante la migrazione verso CloudTemple, garantendo una continuità perfetta per le vostre applicazioni e clienti. Mantieni il pieno controllo sull'utilizzo delle vostre indirizzi IP mentre beneficiate dell'infrastruttura CloudTemple.



### Processo di integrazione

Il tuo prefisso IP (ad esempio `203.0.113.0/24`) viene integrato nella rete backbone CloudTemple e annunciato dal nostro AS. Una volta integrato, il prefisso può essere associato liberamente alle tue macchine virtuali, bilanciatori di carico o altri servizi.

**Tutte le indirizzi del prefisso migrato beneficiano automaticamente della protezione anti-DDoS F5**, senza configurazione aggiuntiva né costo aggiuntivo.



### Requisiti necessari

La migrazione dei prefissi IP richiede che il prefisso sia registrato in un registro Internet riconosciuto (ARIN, RIPE, APNIC, ecc.) e che ne sia il proprietario legittimo. La gestione BGP può essere gestita dal proprio team o beneficiare del supporto tecnico di CloudTemple in base alle proprie preferenze.



## Prenotazione della larghezza di banda internet

La larghezza di banda internet è prenotabile in blocchi di 100 Mbps. La capacità massima disponibile per una gateway è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche della tua gateway.

La fatturazione avviene al 95° percentile nel periodo di fatturazione, solitamente un mese. Puoi quindi occasionalmente beneficiare di un picco superiore alla tua capacità prenotata.

| Riferimento                                 | Unità    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Rete - Larghezza di banda internet prenotata | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*Non c'è una __fatturazione volumetrica__ di tipo __'egress fees'. Paghi solo la prenotazione della larghezza di banda.__*



## Disponibilità per offerta

Tutte queste funzionalità di connettività Internet sono disponibili su tutte le offerte CloudTemple, garantendo un'esperienza omogenea indipendentemente dal tipo di servizio utilizzato.

| Offerta | Connettività Internet | Protezione DDoS | Gestione RSIP | Migrazione prefissi |
|---------|------------------------|------------------|----------------|---------------------|
| Hosting dedicato | ✓ | ✓ | ✓ | ✓ |
| Hosting condiviso | ✓ | ✓ | ✓ | ✓ |
| IaaS VMware | ✓ | ✓ | ✓ | ✓ |
| IaaS OpenSource | ✓ | ✓ | ✓ | ✓ |
| PaaS OpenShift | ✓ | ✓ | ✓ | ✓ |

Questo approccio unificato garantisce che tutti i nostri clienti possano beneficiare di un accesso Internet di qualità operatore, con sicurezza integrata e funzionalità avanzate, indipendentemente dalla scelta tecnologica.