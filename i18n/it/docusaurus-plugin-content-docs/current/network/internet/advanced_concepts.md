---
title: Concetti avanzati
---

## Introduzione

Questa pagina presenta le funzionalità avanzate di routing BGP disponibili sull'infrastruttura Internet Cloud Temple.

## Comunità BGP

Cloud Temple offre una varietà di comunità BGP che consentono di controllare la selezione del percorso utilizzato dal tuo traffico.

### Cos'è una comunità BGP?

Le comunità BGP sono attributi opzionali che possono essere associati alle rotte BGP per contrassegnare, filtrare o influenzare il routing.

### Azioni sulla Preferenza Locale

Le seguenti comunità BGP consentono di modificare la **preferenza locale** dei tuoi prefissi, influenzando così la selezione del percorso verso la macchina che annuncia il prefisso all'interno dell'AS33930.

È possibile modificare la preferenza locale di un prefisso all'interno del backbone Internet Cloud Temple nell'AS 33930 utilizzando le seguenti comunità :

| Comunità BGP | Priorità | Preferenza Locale |
|:---------------|:------------|:----------------:|
| 33930:40010 | Priorità bassa | 10 |
| *Predefinito* | Backbone Cloud Temple (predefinito) | 100 |
| 33930:40150 | Priorità media | 150 |
| 33930:40200 | Priorità alta | 200 |
| 33930:40250 | Priorità massima  | 250 |

**Nota :** Più alto è il valore della preferenza locale, più il percorso è preferito nelle decisioni di routing BGP. Per impostazione predefinita, senza una comunità specifica, i tuoi prefissi utilizzano la preferenza locale standard di 100.

## Configurazione

Per applicare una comunità BGP alle tue route:

1. Definire una policy che contrassegna il prefisso con la comunità
2. Applicare questa policy alla sessione BGP con i server di route Cloud Temple

### Esempio di configurazione (bird)

```junos
# Définir une policy qui tag le préfixe avec la communauté
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

# Appliquer cette policy à la session BGP avec les serveurs de routes Cloud Temple
protocol bgp p_bkb_rs_001  {
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

Il prefisso 203.0.113.0/32 verrà annunciato con una **preferenza locale di 250** e il prefisso 203.0.113.1/32 verrà annunciato con una **preferenza locale di 100** (predefinita) all'interno dell'AS33930.