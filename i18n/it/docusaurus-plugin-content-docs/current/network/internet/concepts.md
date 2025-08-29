---
title: Concepti
---

## Assignment of a Public Internet Address (PA)

In this scenario, you are utilizing public IP addresses assigned to Cloud Temple, which you lease for your usages.

The establishment of internet connectivity and the assignment of associated public IP addresses is carried out through a **service request** specifying:

    Your Organization's Name
    The contact person's name, email, and phone number for finalizing configuration
    Tenant's Name
    The desired subnet size (minimum /29 in IPv4 and /64 in IPv6)
    If not already provided, RIPE (administrative contact information, among other details) will be requested by the support team

The provision of internet access is delivered via the BGP4 protocol in response to your support request, which will provide the following information:

    *Public IP prefix*
    *Interconnection prefix*
    *Any-cast gateway*
    *Subnet IP*
    *Local AS number*
    *Cloud Temple's AS number*
    *Keepalive timers and hold-time timer*
    *Addresses of route servers associated with your tenant*.

The use of the BGP4 protocol ensures efficient routing of your Internet traffic to the active edge router in your architecture, particularly beneficial in multi-zone deployment scenarios, such as distributed firewall clusters across two availability zones.

# Blocchi IPv4

### Offer of IPv4 Version 1

*Please note that this offer is no longer available for marketing as of May 2, 2024.*

IPv4 delivery is provided within the stock limits available to our clients, with a minimum block of 8 IPv4 addresses (/29 or 255.255.255.248).

You can view the affected IP address blocks in the 'Public IPs' menu under the Networks menu on the top left sidebar.

| Reference                             | Unité  | SKU                          |
| ------------------------------------- | ------ | ---------------------------- |
| Dedicated Public IPv4 Range          | 8 IPv4 | csp:(region):network:ipv4:v1 |

### Offer of IPv4 Version 2

The delivery of an IPv4 is provided within the **stock availability limits** for our clients, per IP address.

You can view the blocks of addresses assigned to you in the 'Public IPv4' menu under the Network section on the top left sidebar.

| Reference                     | Unité  | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Network - Dedicated IPv4 Public | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Blocchi IPv6

La comando per il blocco IPv6 viene eseguita tramite il menu *Internet* dell'oggetto *Réseaux*.

È possibile visualizzare i prefix che vi vengono assegnati nel menu *IPs pubblici* del menu Réseaux nella barra laterale verde a sinistra.

| Riferimento                             | Unità   | SKU                          |
| ------------------------------------- | ------- | ---------------------------- |
| Rete - Plage IPv6 dedicate            | 64 IPv6 | csp:(region):network:ipv6:v1 |

## Domini IP pubblici fornitori indipendenti (PI)

Se hai un'indirizzo IP Provider Independent (PI) proprio, puoi annunciarlo all'interno dell'Autonomous System di Cloud Temple. Questo ti permette di continuare ad utilizzare le tue indirizzo IP all'interno della infrastruttura Cloud Temple e semplifica le tue migrazioni.

Per farlo, effettua una **richiesta di servizio** che includa:

    Il nome dell'organizzazione
    Il nome di un contatto con il suo indirizzo email e numero di telefono per finalizzare la configurazione
    Il nome del tenente
    L'intervallo di indirizzi IP PI che detti possedi e desideri annunciare
    Se non sono già state fornite, le informazioni RIPE saranno richieste dal supporto

Non ci sono costi specifici per i clienti che utilizzano indirizzi Provider Independant.

### Reserva di banda larga internet

La banda larga Internet può essere prenotata in paliers da 100 Mbps. La capacità massima disponibile per una rete è di 10 Gbps, potenzialmente limitata dalle caratteristiche tecniche della tua rete.

La fatturazione si effettua al 95% percentile della periodo di fatturazione, solitamente un mese. Pertanto, puoi occasionalmente godere di un "burst" oltre la banda passante prenotata.

| Riferimento                                  | Unità    | SKU                                         |
| -----------------------------------------------| -------- | ------------------------------------------ |
| Rete - Banda larga Internet prenotata       | 100 Mbps  | csp:(region):network:traffic:internet:v1 |

__*Nota:*__
*Non ci sono *fatturazioni volumetriche* del tipo *'tasse di uscita'. Paghi solo la prenotazione della banda larga.*

## Anti-DDoS

Un'attacco DDoS mirava a degradare o rendere inaccessibile un servizio sovraccaricandolo tramite traffico illecito.

La protezione Anti-DDoS di Cloud Temple ti protegge dagli attori malintenzionati e **è attiva senza costi aggiuntivi contro le attacchi volumtrici**: il filtraggio viene eseguito in anticipo dai nostri partner telefonici.
