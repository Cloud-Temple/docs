---
title: Concetti
---

# Concetti — Private Backbone

Il Private Backbone si basa su due pilastri complementari: le **reti private regionali** (tecnologia VPLS) e la **connettività Internet** (indirizzamento pubblico, BGP, Anti-DDoS).

---

## 1. Reti Private (VPLS)

### Architettura L2 estesa

Cloud Temple offre reti private basate sulla tecnologia **VPLS (Virtual Private LAN Service)**. Questa tecnologia crea una rete di livello 2 (strato Ethernet) trasparente ed estesa tra tutte le **zone di disponibilità** di una regione.

La rete MPLS sottostante garantisce:
- Connettività tra servizi fino a **100 Gbps**
- Estensione L2 punto-multipunto **trasparente** per i clienti
- **Percorsi diversificati** per l'alta disponibilità

### VLAN private regionali

Ogni rete virtuale è una **VLAN privata** isolata, propagata tra i cluster della regione:

- Denominazione personalizzabile, indirizzamento IP libero (il cliente sceglie il proprio piano di indirizzamento)
- Supporto **802.1q** (VLAN tagging) e **QinQ / 802.1ad** (double tagging)
- Possibilità di **modalità Trunk**: aggregare più VLAN su un unico collegamento fisico
- Propagazione selettiva: scelta dei cluster di destinazione (limite di 20 reti per azione)

### Condivisione inter-tenant

Una rete privata può essere **condivisa tra più tenant** della stessa organizzazione:
- Attivazione tramite la console Cloud Temple
- Elenco dei tenant filtrato per organizzazione e permessi
- Visualizzazione grafica della propagazione su cluster e hypervisor

### Connettività esterna

Le porte fisiche da **1 Gbps / 10 Gbps** (fibra o rame) consentono di collegare:
- Apparecchiature di rete ospitate nella zona comune (firewall, router)
- Connessioni IPSEC, MPLS o fibra verso siti on-premise
- Operatori terzi

Queste porte sono soggette a una **richiesta di servizio** e vengono consegnate su preventivo.

### Circuiti dedicati

Per esigenze di alta banda con garanzia di throughput:

| Tipo | Throughput | Impegno |
|------|-----------|---------|
| Ethernet 1G | 1 Gbps | 36 mesi |
| Ethernet 10G | 10 Gbps | 36 mesi |
| Fiber Channel 8G | 8 Gbps | 36 mesi |
| Fiber Channel 16G | 16 Gbps | 36 mesi |

Tutti i circuiti dedicati vengono consegnati automaticamente su **due percorsi ottici diversificati**.

---

## 2. Accesso Internet e Indirizzamento Pubblico

### Blocchi di indirizzi IP pubblici

Cloud Temple mette a disposizione blocchi di **indirizzi IP pubblici** registrati presso il RIPE:
- **IPv4**: blocchi da 1 indirizzo
- **IPv6**: blocchi da /64 (64 indirizzi)

Questi indirizzi consentono di esporre i tuoi servizi su Internet dall'infrastruttura Cloud Temple.

### Gestione DNS inverso (PTR)

Per ogni indirizzo IP pubblico, è possibile configurare un **record PTR** personalizzato tramite la console Cloud Temple, abilitando la risoluzione DNS inversa dei tuoi servizi.

### Anti-DDoS nativo

La protezione **Anti-DDoS** è inclusa nativamente nell'accesso Internet Cloud Temple. Protegge i tuoi servizi esposti dagli attacchi volumetrici senza configurazione aggiuntiva.

### BGP e Routing avanzato

Per le organizzazioni che necessitano di un controllo fine del routing:
- Peering **eBGP** disponibile per annunciare i propri prefissi IP
- Configurazione di **route server** e vicini BGP
- Supporto di prefissi IPv4 e IPv6
- Compatibile con il firewall di tua scelta (FortiGate, pfSense, ecc.)

### Casi d'uso Internet

- Esposizione di servizi web, API o applicativi su Internet
- Accesso Internet per apparecchiature in housing
- Architetture con firewall dedicato per la gestione dei flussi in entrata/uscita
- Peering BGP per organizzazioni con il proprio AS

---

## 3. Confronto Private Backbone vs VPC

| Criterio | Private Backbone | VPC |
|----------|-----------------|-----|
| Livello di rete | L2 (VPLS) | L3 (routing) |
| Gestione | Manuale (esperto) | Automatizzata (cloud-native) |
| Controllo topologia | Totale | Guidato |
| Caso d'uso | Architetture ibride complesse | Applicazioni cloud-native |
| Flessibilità | Massima | Standard cloud |

:::tip[VPC per un'esperienza cloud-native]
Per un'esperienza di rete semplificata e automatizzata, scegli l'offerta **[VPC](/network/vpc)**.  
Il Private Backbone è consigliato se hai bisogno di estensione L2 o controllo dettagliato della topologia di rete.
:::
