---
title: Concetti
---

<a id="concepts-vpc"></a>
<a id="définition-et-positionnement"></a>

## Presentazione

Il **VPC (Virtual Private Cloud)** è un servizio di rete gestito che consente di creare reti private isolate, sicure e gestibili dalla console Cloud Temple. Offre un'esperienza cloud-native: la configurazione della rete e della sicurezza è automatizzata, senza apparati di rete da installare né da gestire.

Le reti private del VPC interconnettono i servizi **IaaS OpenSource**, **IaaS VMware** e **VM Instances**.

### VPC vs Private Backbone

Sono proposte due modalità di consumo della rete:

* **Private Backbone (offerta storica)**:
  * ideale per gli esperti che cercano la massima autonomia e configurazioni di rete specifiche (L2 esteso);
  * richiede l'installazione e la gestione manuale di apparati di sicurezza (firewall, router);
  * gestione manuale del piano di indirizzamento.

* **VPC**:
  * progettato per un'esperienza cloud-native e automatizzata;
  * sicurezza integrata (gateway, filtraggio, NAT) senza gestione di apparati di terze parti;
  * servizio gestito, in alta disponibilità;
  * ideale per i progetti moderni, il DevOps e l'hosting di applicazioni web.

<a id="cas-dusage"></a>

### Destinatari e casi d'uso

* **Hosting applicativo critico** che richiede un isolamento forte.
* **Segmentazione multi-progetto** (produzione, pre-produzione, sviluppo).
* **Ambienti di test** effimeri e isolati.
* **Fondamenta di rete sovrane** per i dati sensibili.

## Vantaggi

| Vantaggio                   | Descrizione                                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------------|
| Alta disponibilità          | Il piano dati è progettato per una disponibilità del 99,99 %.                               |
| Multi-zona senza riconfigurazione | Uno stesso piano di indirizzamento si estende su più zone di disponibilità, senza riconfigurazione IP. |
| Sicurezza integrata         | Gateway, filtraggio e NAT sono inclusi, senza apparati di rete da gestire.                  |
| Gestione unificata          | Gestione dalla console o tramite API.                                                       |
| Sovranità                   | Servizio qualificato SecNumCloud.                                                           |

<a id="fonctionnalités-principales"></a>

## Funzionalità

| Funzionalità                  | Descrizione                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| **Reti private regionali**    | Distribuzione multi-AZ e propagazione L2 trasparente.                       |
| **Private Networks**          | Reti segmentate, interconnettibili tra le offerte Cloud Temple.             |
| **Routing nativo**            | Comunicazione automatica tra le reti private di uno stesso VPC.             |
| **IPAM & DHCP**               | Prenotazione di indirizzi IP, gestione dei pool e assegnazione dinamica.    |
| **Accesso a Internet**        | Configurabile tramite il gateway (NAT, DNAT, egress controllato).           |
| **IP flottanti**              | Esposizione flessibile di servizi su Internet.                              |
| **Politiche di flusso**       | Filtraggio di sicurezza integrato per i flussi nord-sud ed est-ovest.       |
| **Osservabilità**             | Log e metriche di prestazione della rete.                                   |
| **Peering inter-VPC**         | Interconnessione di VPC (opzione a pagamento).                              |

### Modalità di distribuzione

* **VPC in modalità dedicata**: prerequisito, una sottoscrizione all'offerta IaaS OpenSource. Le istanze VPC (router, gateway) sono distribuite direttamente sulla vostra infrastruttura dedicata: le risorse di calcolo che ospitano i vostri servizi di rete sono fisicamente isolate.
* **VPC in modalità condivisa**: questa modalità si basa sull'offerta VM Instances. Fornisce il VPC senza un'infrastruttura dedicata preliminare, per esigenze puntuali o ambienti cloud-native.

## Architettura

Il VPC si basa su un'architettura ridondante e ad alta disponibilità, che poggia sul backbone inter-AZ a bassa latenza di Cloud Temple.

### Componenti chiave

* **Router VPC**: al centro di ogni VPC, gestisce il routing dinamico tra le diverse Private Networks (traffico est-ovest).
* **Private Networks (VLAN)**: segmenti di rete di livello 2 che collegano le vostre risorse (VM, server). Si estendono nativamente su più zone di disponibilità senza riconfigurazione IP.
* **Gateway esterno (External Gateway)**: punto di ingresso e di uscita opzionale per il traffico Internet (nord-sud). Integra funzionalità di NAT e di gestione dei flussi.

### Integrazioni

* **Metriche**: le metriche di prestazione e di consumo del VPC (traffico, stato dei gateway, ecc.) sono esportabili in formato Prometheus tramite l'API della console.

## Regioni e zone di disponibilità

Il VPC è disponibile nella regione FR1. Le sue reti private si estendono su più zone di disponibilità, con un piano di indirizzamento unico.

## Specifiche tecniche

| Parametro                 | Valore                          |
|---------------------------|---------------------------------|
| VPC per tenant            | 8                               |
| Reti private per VPC      | 16                              |
| Indirizzamento IP         | RFC 1918 / RFC 4193             |
| Peering inter-VPC         | Supportato (opzione a pagamento) |
| Traffico inter-AZ         | Incluso                         |
| Traffico in entrata       | Incluso                         |

### Limiti

* 8 VPC per tenant e 16 reti private per VPC.

## Sicurezza e conformità

Il VPC è certificato HDS e ISO 27001, e qualificato SecNumCloud.

<a id="isolation-et-sécurité"></a>

### Isolamento e sicurezza

Il VPC garantisce un isolamento rigoroso:

* ogni VPC è un'entità di rete indipendente, isolata logicamente dagli altri tenant;
* in modalità dedicata, la distribuzione avviene su risorse dedicate: nessuna risorsa di rete è condivisa tra clienti;
* tutte le operazioni di configurazione sono tracciabili tramite la console.

## Disponibilità del servizio

| Elemento                                                     | Obiettivo di disponibilità, misurato su un mese |
|--------------------------------------------------------------|-----------------------------------------------|
| Piano dati (routing tra reti, NAT, DNAT)                     | 99,99 %                                       |
| Piano di controllo (API, console)                            | 99,9 %                                        |

## Responsabilità

La ripartizione delle responsabilità tra il cliente e Cloud Temple è dettagliata nella [matrice delle responsabilità (RACI) VPC](../../contractual/network/raci_vpc.md).

## Reversibilità

La configurazione del VPC può essere esportata verso uno storage S3 per 30 giorni dopo la fine del servizio.

## Prezzi

I prezzi del VPC sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[VPC — prezzi](https://www.cloud-temple.com/produits/virtual-private-cloud-souverain/).
