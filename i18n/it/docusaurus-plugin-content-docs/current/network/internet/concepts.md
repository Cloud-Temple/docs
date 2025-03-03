---
title: Concepts
---

## Assegnazione di un indirizzo internet pubblico Provider Aggregated (PA)

In questo contesto, utilizzi degli indirizzi IP pubblici assegnati a Cloud Temple, che ti vengono noleggiati per i tuoi usi.

La creazione di una connettività internet e l'assegnazione degli indirizzi IP pubblici associati vengono realizzate tramite __una richiesta di servizio__ indicando:

    Il nome della tua Organizzazione
    Il nome di un contatto con il suo email e n. di telefono per finalizzare la configurazione
    Il nome del tenant
    La dimensione della subnet desiderata (minimo /29 in IPv4 e /64 in IPv6)
    Se non sono già state fornite, le informazioni RIPE (contatto amministrativo in particolare) verranno richieste dal supporto

La consegna dell'accesso internet avviene tramite il protocollo BGP4 a seguito della richiesta di supporto, che fornirà le seguenti informazioni:

- *prefisso pubblico*
- *prefisso di interconnessione*
- *gateway any-cast*
- *Subnet IP*
- *AS locale*
- *AS di Cloud Temple*
- *timer di keepalive e timer di hold-time*
- *gli indirizzi dei route server associati al tuo tenant*.

L'utilizzo del protocollo BGP4 garantisce un routing efficiente dei tuoi flussi Internet verso il gateway attivo della tua architettura, particolarmente negli scenari di distribuzione multi-zone di disponibilità, come nel caso di cluster di firewall distribuiti tra due zone di disponibilità.

## Blocchi IPv4

### Offerta di indirizzo IPv4 versione 1

__*Questa offerta non è più commercializzata dal 2 maggio 2024*__

La consegna degli IPv4 avviene nei __limiti delle scorte disponibili__ per i nostri clienti, con un blocco minimo di 8 IPv4 (/29 o 255.255.255.248).

È possibile visualizzare i blocchi di indirizzi che ti sono assegnati nel menu __*'IPs pubbliche'*__ del menu Reti nella banda verde a sinistra.

| Riferimento                             | Unità  | SKU                          |
| --------------------------------------- | ------ | ---------------------------- |
| Rete - Fascia IPv4 Pubbliche dedicate   | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offerta di indirizzo IPv4 versione 2

La consegna di un IPv4 avviene nei __limiti delle scorte disponibili__ per i nostri clienti, per indirizzo IP.

È possibile visualizzare i blocchi di indirizzi che ti sono assegnati nel menu __*'IPs pubbliche'*__ del menu Reti nella banda verde a sinistra.

| Riferimento                     | Unità  | SKU                          |
| ------------------------------- | ------ | ---------------------------- |
| Rete - IPv4 Pubblica dedicata   | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Blocchi IPv6

__Al 1° maggio 2024, l'offerta di indirizzi IP Pubblici IPv6 non è ancora disponibile per la commercializzazione.__

L'obiettivo di commercializzazione è previsto per il secondo semestre 2024.

| Riferimento                             | Unità   | SKU                          |
| --------------------------------------- | ------- | ---------------------------- |
| Rete - Fascia IPv6 Pubbliche dedicate   | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Indirizzi IP pubblici Provider Independent (PI)

Se disponi del tuo proprio indirizzo Provider Independent, hai la possibilità di annunciarlo all'interno del Sistema Autonomo di Cloud Temple. Questo ti consente di continuare a utilizzare i tuoi indirizzi IP all'interno dell'infrastruttura Cloud Temple e di facilitare le tue migrazioni.

Per farlo, effettua __una richiesta di servizio__ indicando:

    Il nome della tua Organizzazione
    Il nome di un contatto con il suo email e n. di telefono per finalizzare la configurazione
    Il nome del tenant
    Il blocco di indirizzi IP PI che detieni e che desideri annunciare
    Se non sono già state fornite, le informazioni RIPE associate verranno richieste dal supporto

Non c'è alcuna fatturazione specifica per i clienti che utilizzano indirizzi Provider Independent.

### Prenotazione di banda Internet

La banda Internet è prenotabile per incrementi di 100 Mbps. La capacità massima disponibile per un gateway è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche del tuo gateway.

La fatturazione viene effettuata al 95° percentile sul periodo di fatturazione, solitamente un mese. Puoi quindi occasionalmente sfruttare un burst oltre la tua capacità prenotata.

| Riferimento                                 | Unità    | SKU                                 |
| ------------------------------------------- | -------- | ----------------------------------- |
| Rete - Banda Internet prenotata             | 100 Mbps | csp:(region):network:traffic:internet:v1 |

__*Notavi*__
*Non c'è __fatturazione volumetrica__ di tipo __'egress fees'. Paghi solo la prenotazione della banda.__*


## Anti-DDoS

Un attacco di tipo Denial-of-Service Distribuito (DDoS) mira a degradare o mettere offline un servizio sovraccaricandolo tramite traffico illecito.

La protezione Anti-DDoS di Cloud Temple ti protegge contro gli attori dannosi ed è __attiva senza costi aggiuntivi contro gli attacchi volumetrici__: il filtraggio viene effettuato a monte dai nostri partner telecom.