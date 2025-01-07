---
title: Concepts
---

## Assegnazione di un indirizzo internet pubblico Provider Aggregated (PA)

In questo contesto, utilizzate indirizzi IP pubblici assegnati a Cloud Temple, che vi vengono noleggiati per i vostri utilizzi.

La creazione di una connettività internet e l'assegnazione degli indirizzi IP pubblici associati viene eseguita tramite __una richiesta di servizio__ che indica:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e n. di telefono per finalizzare la configurazione
    Il nome del tenant
    La dimensione del subnet desiderato (minimo /29 in IPv4 e /64 in IPv6)
    Se non sono già state fornite, le informazioni RIPE (contatto amministrativo in particolare) saranno richieste dal supporto

La consegna dell'accesso internet avviene tramite il protocollo BGP4 in seguito alla richiesta di supporto, che fornirà le seguenti informazioni:

- *prefisso pubblico*
- *prefisso d'interconnessione*
- *gateway any-cast*
- *Subnet IP*
- *AS locale*
- *AS di Cloud Temple*
- *timer keepalive e hold-time timer*
- *gli indirizzi dei route server associati al vostro tenant*.

L'uso del protocollo BGP4 garantisce un routing efficace dei vostri flussi Internet verso il gateway attivo della vostra architettura, particolarmente negli scenari di distribuzione multi-zona di disponibilità, come nel caso di cluster di firewall distribuiti tra due zone di disponibilità.

## Blocchi IPv4 

### Offerta di indirizzo IPv4 in versione 1

__*Questa offerta non è più commercializzata dal 2 maggio 2024*__

La consegna degli IPv4 avviene entro __i limiti delle scorte disponibili__ per i nostri clienti, con un blocco minimo di 8 IPV4 (/29 o 255.255.255.248).

È possibile visualizzare i blocchi di indirizzi che vi sono assegnati nel menu __*'IP pubblici'*__ del menu Reti nella barra verde a sinistra.

| Riferimento                             | Unità  | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Rete - Gamma IPv4 Pubblici dedicati | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offerta di indirizzo IPv4 in versione 2

La consegna di un IPv4 avviene entro __i limiti delle scorte disponibili__ per i nostri clienti, per indirizzo IP.

È possibile visualizzare i blocchi di indirizzi che vi sono assegnati nel menu __*'IP pubblici'*__ del menu Reti nella barra verde a sinistra.

| Riferimento                     | Unità  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Rete - IPv4 Pubblico dedicato | 1 IPv4 | csp:(region):network:ipv4:v2 |


## Blocchi IPv6

__All'1 maggio 2024, l'offerta di indirizzi IP Pubblici IPv6 non è ancora disponibile per la commercializzazione.__

L'obiettivo di commercializzazione è previsto per il secondo semestre del 2024.

| Riferimento                             | Unità   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Rete - Gamma IPv6 Pubblici dedicati | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Indirizzi IP pubblici Provider Independent (PI)

Se avete il vostro proprio indirizzo Provider Independent, avete la possibilità di annunciarlo all'interno del Sistema Autonomo di Cloud Temple. Questo vi permette di continuare a utilizzare i vostri propri indirizzi IP all'interno dell'infrastruttura Cloud Temple e di facilitare le vostre migrazioni.

Per fare ciò, effettuate __una richiesta di servizio__ indicando:

    Il nome della vostra Organizzazione
    Il nome di un contatto con la sua mail e n. di telefono per finalizzare la configurazione
    Il nome del tenant
    Il blocco di indirizzo IP PI che possedete e che desiderate annunciare
    Se non sono già state fornite, le informazioni RIPE associate saranno richieste dal supporto 

Non ci sono costi specifici per i clienti che utilizzano indirizzi Provider Independent.

### Prenotazione di banda passante internet

La banda passante internet è prenotabile a scaglioni di 100 Mbps. La capacità massima disponibile per un gateway è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche del vostro gateway.

La fatturazione avviene al 95° percentile sul periodo di fatturazione, solitamente un mese. Potete quindi occasionalmente beneficiare di un burst oltre la vostra capacità prenotata.

| Riferimento                                 | Unità    | SKU                                     |
| ----------------------------------------- | -------- | --------------------------------------- |
| Rete - Banda passante internet riservata | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota :*__
*Non c'è __fatturazione volumetrica__ di tipo __'egress fees'. Pagate solo la prenotazione di banda passante.__*


## Anti-DDoS

Un attacco da negazione di servizio distribuito (DDoS) mira a degradare o mettere offline un servizio sovraccaricandolo tramite traffico illecito.

La protezione Anti-DDoS di Cloud Temple vi protegge contro gli attori malevoli e __è attiva senza costi aggiuntivi contro gli attacchi volumetrici__: il filtraggio è realizzato a monte dai nostri partner telecom.