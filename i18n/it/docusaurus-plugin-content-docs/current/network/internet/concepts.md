---
title: Concetti
---

## Assegnazione di indirizzi Internet pubblici Provider Aggregated (PA)

In questo contesto, utilizzate indirizzi IP pubblici assegnati a Cloud Temple, che vi vengono noleggiati per il vostro utilizzo.

La creazione di una connettività Internet e l'assegnazione degli indirizzi IP pubblici associati viene effettuata tramite __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    La dimensione della subnet desiderata (minimo /29 in IPv4 e /64 in IPv6)
    Se non sono già state fornite, le informazioni RIPE (in particolare il contatto amministrativo) verranno richieste dal supporto

La consegna dell'accesso Internet avviene tramite il protocollo BGP4 in risposta alla richiesta di supporto, che fornirà le seguenti informazioni:

- *prefisso pubblico*
- *prefisso di interconnessione*
- *gateway any-cast*
- *Subnet IP*
- *AS locale*
- *AS di Cloud Temple*
- *timer keepalive e timer hold-time*
- *gli indirizzi dei route server associati al vostro tenant*.

L'utilizzo del protocollo BGP4 garantisce un routing efficiente dei vostri flussi Internet verso il gateway attivo della vostra architettura, in particolare negli scenari di distribuzione multi-zone di disponibilità, come nel caso di cluster di firewall distribuiti tra due zone di disponibilità.

## Blocchi IPv4

### Offerta di indirizzi IPv4 versione 1

__*Questa offerta non è più commercializzata dal 2 maggio 2024*__

La consegna degli IPv4 avviene __nei limiti delle scorte disponibili__ per i nostri clienti, con un blocco minimo di 8 IPv4 (/29 o 255.255.255.248).

È possibile visualizzare i blocchi di indirizzi che vi sono assegnati nel menu __*'IP pubblici'*__ del menu Reti nella banda verde a sinistra.

| Riferimento                                   | Unità  | SKU                          |
| --------------------------------------------- | ------ | ---------------------------- |
| Rete - Range IPv4 pubblici dedicati          | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offerta di indirizzi IPv4 versione 2

La consegna di un IPv4 avviene __nei limiti delle scorte disponibili__ per i nostri clienti, per indirizzo IP.

È possibile visualizzare i blocchi di indirizzi che vi sono assegnati nel menu __*'IP pubblici'*__ del menu Reti nella banda verde a sinistra.

| Riferimento                      | Unità  | SKU                          |
| -------------------------------- | ------ | ---------------------------- |
| Rete - IPv4 pubblico dedicato   | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Blocchi IPv6

L'ordine di blocchi IPv6 viene effettuato tramite il menu __*Internet*__ della scheda __*Reti*__.

È possibile visualizzare i prefissi che vi sono assegnati nel menu __*'IP pubblici'*__ del menu Reti nella banda verde a sinistra.

| Riferimento                                   | Unità   | SKU                          |
| --------------------------------------------- | ------- | ---------------------------- |
| Rete - Range IPv6 pubblici dedicati          | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Indirizzi IP pubblici Provider Independent (PI)

Se disponete di un vostro indirizzamento Provider Independent, avete la possibilità di annunciarlo all'interno dell'Autonomous System di Cloud Temple. Questo vi permette di continuare a utilizzare i vostri indirizzi IP all'interno dell'infrastruttura Cloud Temple e facilita le vostre migrazioni.

Per fare ciò, effettuate __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con email e numero di telefono per finalizzare la configurazione
    Il nome del tenant
    Il blocco di indirizzi IP PI che possedete e che desiderate annunciare
    Se non sono già state fornite, le informazioni RIPE associate verranno richieste dal supporto

Non c'è fatturazione specifica per i clienti che utilizzano indirizzi Provider Independent.

### Prenotazione di banda passante Internet

La banda passante Internet può essere prenotata a incrementi di 100 Mbps. La capacità massima disponibile per un gateway è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche del vostro gateway.

La fatturazione viene effettuata al 95° percentile sul periodo di fatturazione, solitamente un mese. Potete quindi occasionalmente beneficiare di un burst oltre la vostra capacità riservata.

| Riferimento                                   | Unità    | SKU                                     |
| --------------------------------------------- | -------- | --------------------------------------- |
| Rete - Banda passante Internet riservata     | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*Non c'è __fatturazione volumetrica__ di tipo __'egress fees'. Pagate solo la prenotazione di banda passante.__*

## Anti-DDoS

Un attacco di tipo Distributed Denial of Service (DDoS) mira a degradare o mettere offline un servizio sovraccaricandolo con traffico illegittimo.

La protezione Anti-DDoS di Cloud Temple vi protegge dagli attori malevoli ed __è attiva senza costi aggiuntivi contro gli attacchi volumetrici__: il filtraggio viene effettuato a monte dai nostri partner di telecomunicazioni.
