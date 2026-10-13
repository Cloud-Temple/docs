---
title: Private Backbone
slug: /network/private_backbone
---

# Private Backbone — Connettività Avanzata

> **Prendi il controllo totale della tua rete con una connettività di livello 2 estesa, progettata per architetture ibride e configurazioni su misura.**

Il **Private Backbone** di Cloud Temple è il nostro prodotto di connettività storico, progettato per gli esperti. Basato su un'infrastruttura di rete di livello 2 (VPLS), consente di creare reti private estese tra le zone di disponibilità di una regione. È la soluzione ideale per le aziende che desiderano costruire architetture cloud ibride complesse e mantenere un controllo totale sulla topologia di rete.

<div class="card-grid">
  <div class="card">
    <h3>Concetti</h3>
    <p>Architettura VPLS, reti private regionali, accesso a Internet, indirizzamento pubblico IPv4/IPv6.</p>
    <a href="./private_backbone/concepts" class="card-link">Esplora i concetti →</a>
  </div>
  <div class="card">
    <h3>Guida introduttiva</h3>
    <p>Crea la tua prima rete privata e configura il tuo accesso a Internet in pochi passaggi.</p>
    <a href="./private_backbone/quickstart" class="card-link">Inizia →</a>
  </div>
  <div class="card">
    <h3>Tutorial</h3>
    <p>Configura un FortiGate o pfSense con BGP per gestire la tua connettività esterna.</p>
    <a href="./private_backbone/tutorials" class="card-link">Visualizza i tutorial →</a>
  </div>
</div>

---

## Panoramica del prodotto

Il **Private Backbone** fornisce un insieme completo di servizi di basso livello per interconnettere ed esporre le tue infrastrutture in un cloud sovrano. È composto da due pilastri:

- **Reti Private (VPLS)**: Creazione di reti di livello 2 estese e isolate tra le zone di disponibilità, ideale per architetture ibride complesse.
- **Accesso a Internet**: Connettività Internet ad alte prestazioni con allocazione di indirizzi IP pubblici (IPv4/IPv6) e protezione Anti-DDoS nativa.

:::tip[Per un'esperienza di rete cloud-native]
Per una gestione di rete più automatizzata, il nostro prodotto **[VPC (Virtual Private Cloud)](/network/vpc)** è la soluzione consigliata.
:::

---

## Metriche chiave

| Vantaggio | Valore |
|----------|--------|
| Prestazioni inter-servizi | Fino a **100 Gbps** |
| Connettività esterna | Ethernet **1G / 10G** |
| Indirizzamento pubblico | **IPv4 & IPv6** disponibili |
| Estensione di rete | Livello 2 trasparente tramite **VPLS** |
| Isolamento | Segmentazione **VLAN** completa |
| SLA disponibilità di rete | **99,99 %** |

---

## Funzionalità

| Funzionalità | Descrizione |
|----------------|-------------|
| VLAN privati regionali | Reti virtuali estese inter-AZ |
| Connettività esterna | Porte 1G/10G per IPSEC, MPLS, Fibra |
| Circuiti dedicati | Ethernet 1G/10G con percorsi diversificati |
| VLAN Tagging | Supporto 802.1q e QinQ (802.1ad) |
| Condivisione inter-tenant | Reti condivise nella stessa organizzazione |
| Modalità Trunk | Aggregazione di VLAN su un unico link |
| IP pubbliche IPv4/IPv6 | Allocazione unitaria, gestione DNS inverso (PTR) |
| Protezione Anti-DDoS | Nativa sull'accesso a Internet |

---

## Architettura

L'infrastruttura si basa su una rete **MPLS** con connettività inter-servizi fino a 100 Gbps:

- Estensione L2 punto-multipunto trasparente (VPLS)
- Porte di connessione esterna (1G/10G) per apparecchiature in housing o operatori terzi
- Percorsi diversificati automatici per i circuiti dedicati

### Integrazioni Cloud Temple

I seguenti servizi si basano sul Private Backbone:

| Servizio | Tipo |
|---------|------|
| IaaS OpenSource | Compute |
| IaaS VMware | Compute |
| PaaS OpenShift | Containers |
| Housing | Datacenter |
| VPC | Networking |

---

## Sicurezza & Conformità

**Certificazioni:** SecNumCloud 3.2 · HDS V1 · ISO 27001:2022 · ISAE 3402 · C5:2020

- Crittografia fisica dei link tra le Zone di Disponibilità
- Isolamento di rete e separazione del traffico
- Residenza dei dati in Francia (FR1)

---

## Prezzi

| Servizio | SKU |
|---------|-----|
| VLAN privato inter-AZ | `csp:(region):network:vlan:v1` |
| Circuito dedicato Ethernet 1G | `csp:(region):network:epl:1g:v1` |
| Circuito dedicato Ethernet 10G | `csp:(region):network:epl:10g:v1` |
| IP pubblica IPv4 | `csp:(region):network:ipv4:v1` |
| IP pubblica IPv6 | `csp:(region):network:ipv6:v1` |

I circuiti dedicati vengono consegnati su **due percorsi ottici diversificati** con un impegno minimo di **36 mesi**.

→ **[Tariffe pubbliche sul sito Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/)**
