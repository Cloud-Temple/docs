---
title: Concetti avanzati
---

## Introduzione

Questa pagina presenta le funzionalità avanzate di routing BGP disponibili sull'infrastruttura Internet Cloud Temple.

## BGP Communities

Cloud Temple offre una varietà di community BGP che consentono di controllare la selezione del percorso seguito dal tuo traffico.

### Cos'è una comunità BGP?

Le comunità BGP sono attributi opzionali che possono essere associati alle route BGP per contrassegnarle, filtrarle o influenzare il routing.

### Actions on Local Preference

The following BGP communities allow you to modify the **local preference** of your prefixes, thereby influencing the path selection toward the machine announcing the prefix within AS33930.

You can adjust the local preference of a prefix within the Internet Cloud Temple backbone in AS 33930 by using the following communities:

| BGP Community | Priority | Local Preference |
|:--------------|:---------|:----------------:|
| 33930:40010 | Low priority | 10 | 
| *Default* | Cloud Temple backbone (default) | 100 | 
| 33930:40150 | Medium priority | 150 | 
| 33930:40200 | High priority | 200 | 
| 33930:40250 | Maximum priority | 250 | 

**Note:** The higher the local preference value, the more preferred the path is in BGP routing decisions. By default, without a specific community, your prefixes use the standard local preference of 100.

## Configurazione

Per applicare una comunità BGP alle tue annunciazioni:

1. Definire una policy che contrassegni il prefisso con la comunità
2. Applicare questa policy alla sessione BGP con i server di routing di Cloud Temple

### Esempio di configurazione (bird)

```junos
# Definire una policy che aggiunge il prefisso con la community
filter p_bkb_rs_001_export {
if net ~ [203.0.113.0/32]
        then {
            bgp_community.add((33930,40250));
            accept;
        }
if net ~ [203.0.113.1/32]
        then {
            accept;
        }
else reject;
}

# Apply this policy to the BGP session with Cloud Temple route servers
protocol bgp p_bkb_rs_001 {
        local 100.64.3.226 as 65551;
        neighbor 100.64.0.1 as 33930;
        multihop;
        keepalive time 10;
        hold time 30;
        ipv4 {
                export filter p_bkb_rs_001_export;
        };
}
```

The prefix 203.0.113.0/32 will be advertised with a **local preference of 250**, and the prefix 203.0.113.1/32 will be advertised with a **local preference of 100** (default) within AS33930.
