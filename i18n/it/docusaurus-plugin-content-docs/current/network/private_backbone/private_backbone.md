---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Connettività Avanzata

> **Prendi il pieno controllo della tua rete con connettività di livello 2 estesa, progettata per architetture ibride e configurazioni su misura.**

Il **Private Backbone** di Cloud Temple è la nostra offerta di connettività storica, progettata per gli esperti. Basata su un'infrastruttura di rete di livello 2 (VPLS), consente di creare reti private estese tra le zone di disponibilità di una regione. È la soluzione ideale per le organizzazioni che desiderano costruire architetture cloud ibride complesse e mantenere il pieno controllo sulla propria topologia di rete.

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Architettura VPLS, reti private regionali, accesso Internet, indirizzamento pubblico IPv4/IPv6.</p>
    <a href="./private_backbone/concepts" class="card-link">Esplora i concetti →</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Crea la tua prima rete privata e configura l'accesso a Internet in pochi passaggi.</p>
    <a href="./private_backbone/quickstart" class="card-link">Inizia →</a>
  </div>
  <div class="card">
    <h3>Tutorial</h3>
    <p>Configura FortiGate o pfSense con BGP per gestire la connettività esterna.</p>
    <a href="./private_backbone/tutorials" class="card-link">Vedi i tutorial →</a>
  </div>
</div>

---

## Presentazione del servizio

Il **Private Backbone** fornisce un insieme completo di servizi di basso livello per interconnettere ed esporre le tue infrastrutture in un cloud sovrano. Si compone di due pilastri:

- **Reti Private (VPLS)**: Creazione di reti di livello 2 estese e isolate tra le zone di disponibilità, ideale per architetture ibride complesse.
- **Accesso Internet**: Connettività Internet ad alte prestazioni con allocazione di indirizzi IP pubblici (IPv4/IPv6) e protezione Anti-DDoS nativa.

:::tip[Per un'esperienza di rete cloud-native]
Per una gestione della rete più automatizzata, la nostra offerta **[VPC (Virtual Private Cloud)](/network/vpc)** è la soluzione consigliata.
:::

---

## Metriche chiave

| Beneficio | Valore |
|-----------|--------|
| Prestazioni tra servizi | Fino a **100 Gbps** |
| Connettività esterna | Ethernet **1G / 10G** |
| Indirizzamento pubblico | **IPv4 e IPv6** disponibili |
| Estensione di rete | Livello 2 trasparente via **VPLS** |
| Isolamento | Segmentazione **VLAN** completa |
| SLA disponibilità rete | **99,99%** |

---

## Funzionalità

| Funzionalità | Descrizione |
|--------------|-------------|
| VLAN private regionali | Reti virtuali estese inter-AZ |
| Connettività esterna | Porte 1G/10G per IPSEC, MPLS, Fibra |
| Circuiti dedicati | Ethernet 1G/10G con percorsi diversificati |
| VLAN Tagging | Supporto 802.1q e QinQ (802.1ad) |
| Condivisione inter-tenant | Reti condivise all'interno della stessa organizzazione |
| Modalità Trunk | Aggregazione di VLAN su un singolo link |
| IP pubblici IPv4/IPv6 | Allocazione unitaria, gestione DNS inverso (PTR) |
| Protezione Anti-DDoS | Nativa sull'accesso Internet |

---

## Architettura

L'infrastruttura si basa su una rete **MPLS** con connettività tra servizi fino a 100 Gbps:

- Estensione L2 punto-multipunto trasparente (VPLS)
- Porte di connessione esterna (1G/10G) per apparecchiature in housing o operatori terzi
- Percorsi diversificati automatici per i circuiti dedicati

### Integrazioni Cloud Temple

I seguenti servizi si appoggiano sul Private Backbone:

| Servizio | Tipo |
|----------|------|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Container |
| Housing | Datacenter |
| VPC | Rete |

---

## Sicurezza e Conformità

**Certificazioni:** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Crittografia fisica dei collegamenti tra le Zone di Disponibilità
- Isolamento della rete e separazione del traffico
- Residenza dei dati in Francia (FR1)

---

## Prezzi

| Servizio | SKU |
|----------|-----|
| VLAN privata inter-AZ | `csp:(region):network:vlan:v1` |
| Circuito Ethernet 1G dedicato | `csp:(region):network:epl:1g:v1` |
| Circuito Ethernet 10G dedicato | `csp:(region):network:epl:10g:v1` |
| Indirizzo IPv4 pubblico | `csp:(region):network:ipv4:v1` |
| Indirizzo IPv6 pubblico | `csp:(region):network:ipv6:v1` |

I circuiti dedicati vengono consegnati su **due percorsi ottici diversificati** con un impegno minimo di **36 mesi**.

→ **[Prezzi ufficiali su cloud-temple.com](https://www.cloud-temple.com/produits/)**
