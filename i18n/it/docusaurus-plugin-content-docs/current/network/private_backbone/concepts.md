---
title: Concetti
---

<a id="concepts--private-backbone"></a>

## Presentazione

Il **Private Backbone** è l'offerta di connettività storica di Cloud Temple, progettata per gli esperti di rete. Basata su un'infrastruttura di livello 2 (VPLS), consente di creare reti private estese tra le zone di disponibilità di una regione e di esporre i vostri servizi su Internet. È adatta ad architetture cloud ibride complesse, quando desiderate mantenere il pieno controllo sulla vostra topologia di rete e gestire autonomamente i vostri apparati di sicurezza.

Il Private Backbone si basa su due pilastri, ciascuno descritto nella propria pagina:

- le **[reti private](../private_network/concepts.md)** regionali (tecnologia VPLS);
- l'**[accesso a Internet](../internet/concepts.md)** (indirizzamento pubblico, BGP, Anti-DDoS).

<a id="3-comparaison-private-backbone-vs-vpc"></a>

### Confronto Private Backbone vs VPC

| Criterio           | Private Backbone                  | VPC                        |
|--------------------|-----------------------------------|----------------------------|
| Livello di rete    | L2 (VPLS)                         | L3 (routing)               |
| Gestione           | Manuale (esperto)                 | Automatizzata (cloud-native) |
| Controllo della topologia | Totale                     | Guidato                    |
| Casi d'uso         | Architetture ibride complesse     | Applicazioni cloud-native  |
| Flessibilità       | Massima                           | Standard cloud             |

:::tip[VPC per un'esperienza cloud-native]
Per un'esperienza di rete semplificata e automatizzata, preferite il prodotto **[VPC](/network/vpc)**.
Il Private Backbone è consigliato se avete esigenze di estensione L2 o di controllo granulare della topologia di rete.
:::

### Destinatari e casi d'uso

- **Architetti di rete**: architetture cloud ibride con estensione L2 e L3.
- **Organizzazioni multisito**: estensione di una rete aziendale tra zone di disponibilità.
- **Dati sensibili**: comunicazione privata, senza esposizione su Internet.
- **Esposizione di servizi**: servizi web, API o applicativi pubblicati su Internet dietro il vostro firewall.
- **Housing**: connessione Internet e rete privata per apparati ospitati.

## Vantaggi

| Vantaggio                    | Descrizione                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------|
| Estensione L2 trasparente    | Il VPLS estende una rete di livello 2 tra le zone di disponibilità, come un'unica LAN.     |
| Isolamento                   | Ogni VLAN privata è isolata; controllate interamente gli accessi.                          |
| Connettività esterna         | Porte da 1 Gbps / 10 Gbps collegano le vostre sedi, gli operatori o gli apparati ospitati. |
| Circuiti dedicati            | Collegamenti a banda garantita, forniti su due percorsi ottici diversificati.             |
| Condivisione tra tenant      | Una rete privata può essere condivisa tra i tenant di una stessa organizzazione.          |

## Funzionalità

| Funzionalità                | Descrizione                                                                              |
|-----------------------------|------------------------------------------------------------------------------------------|
| VLAN private regionali      | Reti virtuali estese tra le zone di disponibilità.                                       |
| VLAN tagging e modalità Trunk | Supporto di 802.1q e QinQ (802.1ad), aggregazione di VLAN su un unico collegamento.    |
| Condivisione tra tenant     | Reti condivise all'interno di una stessa organizzazione.                                 |
| Connettività esterna        | Porte da 1 Gbps / 10 Gbps per IPSEC, MPLS o fibra.                                       |
| Circuiti dedicati           | Ethernet 1G / 10G e Fiber Channel 8G / 16G.                                              |
| IP pubblici                 | Indirizzi IPv4 e IPv6 pubblici per esporre i vostri servizi.                             |
| DNS inverso (PTR)           | Record PTR personalizzabile per ogni indirizzo IP pubblico.                              |
| Anti-DDoS nativo            | Protezione inclusa sull'accesso a Internet contro gli attacchi volumetrici.              |
| Peering eBGP                | Annuncio dei vostri prefissi IPv4 e IPv6.                                                |

<a id="1-réseaux-privés-vpls"></a>

## Architettura

### Architettura L2 estesa

Le reti private si basano sulla tecnologia **VPLS (Virtual Private LAN Service)**. Essa crea una rete di livello 2 (livello Ethernet) trasparente ed estesa tra tutte le **zone di disponibilità** di una regione.

La rete MPLS sottostante garantisce:

- una connettività tra servizi fino a **100 Gbps**;
- un'estensione L2 punto-multipunto **trasparente** per i clienti;
- **percorsi diversificati** per l'alta disponibilità.

### VLAN private regionali

Ogni rete virtuale è una **VLAN privata** isolata, propagata tra i cluster della regione:

- denominazione personalizzabile, indirizzamento IP libero (scegliete voi il vostro piano di indirizzamento);
- supporto di **802.1q** (VLAN tagging) e **QinQ / 802.1ad** (double tagging);
- possibilità di **modalità Trunk**: aggregare più VLAN su un unico collegamento fisico;
- propagazione selettiva: scelta dei cluster di destinazione (limite di 20 reti per azione).

### Condivisione tra tenant

Una rete privata può essere **condivisa tra più tenant** di una stessa organizzazione:

- attivazione tramite la console Cloud Temple;
- elenco dei tenant filtrato in base all'organizzazione e ai permessi;
- visualizzazione grafica della propagazione sui cluster e sugli hypervisor.

### Connettività esterna

Porte fisiche da **1 Gbps / 10 Gbps** (fibra o rame) consentono di collegare:

- apparati di rete ospitati in zona comune (firewall, router);
- collegamenti IPSEC, MPLS o in fibra verso siti on-premise;
- operatori terzi.

Queste porte sono oggetto di una **richiesta di servizio** e vengono fornite su preventivo.

<a id="2-accès-internet--adressage-public"></a>

### Accesso a Internet

#### Blocchi di indirizzi IP pubblici

Vengono messi a disposizione blocchi di **indirizzi IP pubblici** registrati presso il RIPE:

- **IPv4**: blocchi a partire da 1 indirizzo;
- **IPv6**: blocchi a partire da /64.

Questi indirizzi consentono di esporre i vostri servizi su Internet dalle infrastrutture Cloud Temple.

#### Gestione del DNS inverso (PTR)

Per ogni indirizzo IP pubblico, potete configurare un **record PTR** personalizzato tramite la console, per la risoluzione DNS inversa dei vostri servizi.

#### Anti-DDoS nativo

La protezione **Anti-DDoS** è inclusa nativamente nell'accesso a Internet. Protegge i vostri servizi esposti dagli attacchi volumetrici, senza configurazione aggiuntiva.

#### BGP e routing avanzato

Per un controllo granulare del routing:

- peering **eBGP** per annunciare i vostri prefissi IP;
- configurazione di **route server** e di vicini BGP;
- supporto dei prefissi IPv4 e IPv6;
- compatibile con i firewall di vostra scelta (FortiGate, pfSense, ecc.).

#### Casi d'uso Internet

- Esposizione di servizi web, API o applicativi su Internet.
- Connessione Internet per apparati in housing.
- Architetture con firewall dedicato che gestisce i flussi in entrata e in uscita.
- Peering BGP per le organizzazioni che dispongono di un proprio AS.

### Integrazione con i servizi Cloud Temple

Il Private Backbone è la base di rete dei servizi Cloud Temple. IaaS OpenSource, IaaS VMware, PaaS OpenShift, Housing e VPC possono utilizzare indirizzi IP pubblici e integrarsi con le reti private.

## Regioni e zone di disponibilità

Il Private Backbone è disponibile nella regione FR1. Le sue reti private si estendono tra tutte le zone di disponibilità della regione.

## Specifiche tecniche

| Parametro                  | Valore                                        |
|----------------------------|-----------------------------------------------|
| Prestazioni di rete di una VM | 10 Gbps massimo                            |
| Connettività tra servizi   | Fino a 100 Gbps                               |
| Connettività esterna       | Porte da 1 / 10 Gbps                          |
| Indirizzamento pubblico    | IPv4 a partire da un indirizzo, IPv6 a partire da /64 |

### Circuiti dedicati

Per le esigenze di elevata larghezza di banda con garanzia di throughput:

| Tipo              | Throughput | Impegno  |
|-------------------|---------|------------|
| Ethernet 1G       | 1 Gbps     | 36 mesi  |
| Ethernet 10G      | 10 Gbps    | 36 mesi  |
| Fiber Channel 8G  | 8 Gbps     | 36 mesi  |
| Fiber Channel 16G | 16 Gbps    | 36 mesi  |

Tutti i circuiti dedicati vengono forniti su **due percorsi ottici diversificati**.

### Limiti

- La propagazione di una rete privata avviene su un massimo di 20 reti per azione.
- Le prestazioni di rete di una VM sono limitate a 10 Gbps.

## Sicurezza e conformità

Il Private Backbone è certificato HDS e ISO 27001.

- **Isolamento**: ogni VLAN privata è isolata e la condivisione tra tenant è limitata a una stessa organizzazione.
- **Protezione**: l'accesso a Internet integra una protezione Anti-DDoS contro gli attacchi volumetrici.

## Disponibilità del servizio

L'obiettivo di disponibilità della rete è del 99,99 %, misurato su un mese.

## Responsabilità

La ripartizione delle responsabilità tra il cliente e Cloud Temple è descritta nella [matrice delle responsabilità (RACI) di rete](../../contractual/network/raci.md).

## Reversibilità

Non applicabile: il Private Backbone instrada i vostri flussi di rete e non conserva dati dei clienti. Il vostro piano di indirizzamento e la configurazione dei vostri apparati restano sotto il vostro controllo.

## Prezzi

I prezzi del Private Backbone sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[Private Backbone — prezzi](https://www.cloud-temple.com/produits/private-backbone/).
