---
title: Concetti
---

## Presentazione

Il servizio **VM Instances** è un prodotto di calcolo condiviso che consente di distribuire macchine virtuali su richiesta, senza gestire l'infrastruttura sottostante. Offre diverse classi di servizio, dallo sviluppo a costo contenuto fino alla produzione critica, e si integra nativamente con le reti Cloud Temple. È possibile iniziare con una sola VM e far evolvere il proprio utilizzo senza minimo.

### Destinatari e casi d'uso

- **Team di sviluppo**: ambienti di test e di staging a costo contenuto.
- **Produzione web e applicativa**: hosting di applicazioni aziendali e di siti web.
- **Applicazioni ad alto consumo di dati**: database, elaborazione dei dati.
- **Aziende e settore pubblico**: hosting dei dati in un ambiente sovrano.

## Vantaggi

| Vantaggio              | Descrizione                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------|
| Flessibilità e scelta  | Diverse classi di servizio e flavor per adattare il costo a ogni utilizzo.                          |
| Semplicità di gestione | L'infrastruttura è interamente gestita; le VM vengono distribuite dal Marketplace in pochi minuti.  |
| Sovranità              | Dati ospitati in Francia, su un servizio qualificato SecNumCloud.                                   |
| Integrazione completa  | Compatibile con VPC e Private Backbone, pilotabile tramite API e Terraform.                         |
| Scalabilità            | Nessun minimo: si inizia con una sola VM.                                                           |

## Funzionalità

| Funzionalità               | Descrizione                                                                                       |
|----------------------------|---------------------------------------------------------------------------------------------------|
| Classi di servizio         | Development, General Purpose e Performance (vCPU dedicate).                                       |
| Flavor predefiniti e personalizzati | Flavor pronti all'uso, oppure numero di vCPU e quantità di RAM scelti liberamente.       |
| Distribuzione dal Marketplace | Creazione di VM dalle immagini ufficiali del Marketplace Cloud Temple.                         |
| Cloud-init                 | Pre-configurazione automatica delle istanze all'avvio.                                            |
| Scelta della zona          | Selezione della zona di disponibilità al momento della distribuzione.                             |
| Snapshot                   | Creazione e gestione degli snapshot dalla console.                                                |
| Archiviazione persistente  | Disco di sistema e volumi aggiuntivi Flash, in classe Standard o Enterprise.                      |
| Rete                       | Fino a 7 schede di rete, VPC con IP fluttuante, Private Backbone.                                 |
| Backup (opzionale)         | Politica `Backup 30 snapshots` con uno snapshot giornaliero.                                      |

### Distribuzione e immagini

Le VM Instances vengono distribuite dalle **immagini ufficiali del Marketplace Cloud Temple**. I template disponibili sono quelli del [Marketplace filtrato per OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Questo catalogo di immagini selezionate garantisce ambienti testati, mantenuti e pronti all'uso per ciascun sistema operativo supportato.

Il servizio supporta **Cloud-init** per la pre-configurazione automatica delle istanze all'avvio (iniezione di chiavi SSH, configurazione di rete, script di inizializzazione, ecc.).

### Migrazione di un OS al di fuori del Marketplace

Un sistema operativo non disponibile nel Marketplace può essere oggetto di migrazione tramite ripristino **Veeam in modalità Bare Metal Recovery**, previa validazione tecnica. Il funzionamento dell'infrastruttura VM è allora garantito, ma non quello del SO guest, delle sue applicazioni o degli agenti necessari quando questi non sono installati o configurati correttamente. Il supporto del SO guest è quindi limitato.

### Automazione

Il servizio è interamente pilotabile tramite:

- **Console Cloud Temple**: interfaccia grafica per la gestione quotidiana e la visualizzazione delle metriche (CPU, RAM, disco);
- **API REST Cloud Temple**: controllo programmatico del ciclo di vita delle VM;
- **Provider Terraform Cloud Temple**: Infrastructure as Code.

## Architettura

Le VM Instances vengono eseguite su un'infrastruttura condivisa, con un isolamento logico rigoroso tra i clienti. Tutti i volumi sono **volumi Flash persistenti montati in rete** (*network-attached*): non esiste archiviazione locale effimera, e i dati vengono conservati indipendentemente dallo stato della macchina virtuale.

Ogni VM si connette al **VPC** o al **Private Backbone** tramite le proprie schede di rete, e può essere distribuita dal Marketplace nella zona di disponibilità di propria scelta.

## Regioni e zone di disponibilità

Il servizio VM Instances è distribuito nella regione **FR1**. Durante la creazione di una macchina virtuale, è possibile scegliere la **zona di disponibilità (AZ)** in cui verrà ospitata. Questa scelta non richiede l'attivazione delle zone di disponibilità dell'offerta IaaS.

Per ulteriori informazioni sulle zone di disponibilità e sulle regioni Cloud Temple, consultare:

- [Concetti delle zone di disponibilità](../../additional_content/concepts_az.md)
- [Concetti delle regioni](../../additional_content/concepts_regional.md)

## Specifiche tecniche

### Classi di servizio

Il servizio offre tre classi di servizio adattate a diversi tipi di carichi di lavoro:

| Classe | Descrizione | Risorse |
|--------|-------------|------------|
| **Development** | Costo ottimizzato, per ambienti di test, integrazione e staging. Adatto a carichi non critici con utilizzo variabile. | Condivise |
| **General Purpose** | Bilancio ottimale vCPU/RAM per carichi di lavoro standard (applicazioni web, microservizi, database di dimensioni modeste). | Condivise |
| **Performance** | Progettato per carichi di lavoro intensivi che richiedono elevate prestazioni CPU. **Le vCPU sono dedicate** per garantire prestazioni costanti. | vCPU dedicate |

### Flavor (Gabarits)

Sono proposti flavor predefiniti per ciascuna classe di servizio. È inoltre possibile creare **flavor personalizzati** scegliendo liberamente il numero di vCPU e la quantità di RAM.

#### Development

Ottimizzato per ambienti di test, integrazione e staging con un costo contenuto.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| dev.small | 1 | 2 GB | Test unitario, CI leggera |
| dev.medium | 2 | 4 GB | Integrazione, strumenti interni |
| dev.large | 4 | 8 GB | Ambiente di staging |

#### General Purpose

Adatto ad applicazioni web, microservizi e database di dimensioni modeste.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservizio, test funzionale |
| gp.medium | 2 | 8 GB | Server web, applicazione leggera |
| gp.large | 4 | 16 GB | Applicazione standard |
| gp.xlarge | 8 | 32 GB | Database di medie dimensioni |
| gp.2xlarge | 16 | 64 GB | Applicazione critica |

#### Performance

Le **vCPU sono dedicate** per garantire prestazioni costanti, anche sotto forte carico.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| perf.medium | 2 | 4 GB | Calcolo leggero, CI/CD |
| perf.large | 4 | 8 GB | Elaborazione batch, codifica |
| perf.xlarge | 8 | 16 GB | Calcolo intensivo |
| perf.2xlarge | 16 | 32 GB | Simulazione, analytics |

#### Flavor personalizzati

È possibile creare un flavor personalizzato selezionando liberamente:

- Il numero di vCPU
- La quantità di RAM

Questa flessibilità consente di adattare precisamente il dimensionamento alle esigenze applicative ottimizzando al contempo i costi.

:::note
Le specifiche dei flavor possono subire evoluzioni. Consultare la console Cloud Temple per l'elenco aggiornato.
:::

### Archiviazione

Tutti i volumi del servizio VM Instances sono **volumi Flash persistenti montati in rete** (*network-attached*). Non esiste archiviazione locale effimera: i dati vengono conservati indipendentemente dallo stato della macchina virtuale.

#### Disco di sistema

Ogni macchina virtuale dispone automaticamente di un **disco di sistema Flash** per ospitare il sistema operativo. Questo disco è una risorsa di archiviazione del servizio e non è gratuito; la sua dimensione dipende dal sistema operativo scelto:

- Dimensione: tra **15 e 100 GB** in base al SO selezionato.

Il disco di sistema è fatturato al **Go**. La sua creazione automatica con la VM indica che è necessario per la distribuzione del SO, e non che è incluso gratuitamente.

#### Volumi aggiuntivi

È possibile aggiungere volumi di archiviazione supplementari a ciascuna macchina virtuale:

- **Dimensione**: da **1 a 2 048 GB** per volume
- **Numero massimo**: 16 volumi per VM
- **Limite per famiglia**: **2 TB per VM** in Development e General Purpose; **16 TB per VM** in Enterprise
- **Granularità**: allocazione al Go
- **Fatturazione**: al Go allocato, con scelta della classe di archiviazione

#### Classi di archiviazione

Sono disponibili due classi di archiviazione block per i volumi aggiuntivi:

| Classe | Utilizzo | Prestazioni | Dimensione minima | Dimensione massima |
| --- | --- | --- | --- | --- |
| **Enterprise** | Archiviazione block ad alte prestazioni per carichi di lavoro sensibili alla latenza. | **7 500 IOPS/To** | **1 GB** | **2 048 GB** |
| **Standard** | Archiviazione block standard adatta alla maggior parte dei carichi di lavoro. | **1 500 IOPS/To** | **1 GB** | **2 048 GB** |

### Rete

#### Interfaccia di rete

Ogni istanza VM può disporre di **da 1 a 7 schede di rete**. Ogni scheda di rete è associata a **una sola rete**.

#### Compatibilità di rete

Questa interfaccia può essere connessa a due tipi di reti Cloud Temple:

- **Rete privata backbone**: rete privata condivisa con isolamento logico rigoroso tra i tenant. Ideale per interconnettere le risorse Cloud Temple in un ambiente controllato. [Ulteriori informazioni](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: rete privata completamente gestita che consente una segmentazione avanzata e una configurazione di rete dettagliata degli ambienti. [Ulteriori informazioni](../../network/vpc/vpc.md)

#### IP fluttuante (Floating IP)

Su una rete **VPC**, è possibile associare un **IP fluttuante** a un'istanza VM. Un IP fluttuante è un indirizzo IP pubblico che è possibile collegare o scollegare liberamente da un'istanza, indipendentemente dal suo ciclo di vita.

#### Appliance virtuali

Le appliance virtuali **Stormshield** e **FortiVM** sono compatibili con la **famiglia Enterprise**, previa conformità ai prerequisiti tecnici e all'ambito di supporto applicabile.

### Limiti

- **Volumi**: 16 volumi aggiuntivi per VM, da 1 a 2 048 GB ciascuno.
- **Schede di rete**: 7 per VM, con una sola rete per scheda.
- **Capacità non riservata**: la creazione e il riavvio di una VM sono soggetti alla capacità disponibile. Solo un'istanza riservata garantisce la capacità, nell'ambito della sua prenotazione.

## Sicurezza e conformità

VM Instances è certificato HDS e ISO 27001, e qualificato SecNumCloud.

- **Isolamento**: ambiente condiviso con isolamento logico rigoroso tra i clienti.
- **Crittografia**: la crittografia a riposo dell'infrastruttura di archiviazione sottostante è garantita dal servizio. La crittografia applicativa dei dati (file system, database) resta a carico del cliente.
- **Residenza dei dati**: dati ospitati in Francia.

<a id="protection-des-données"></a>

## Backup e continuità

### Backup (opzionale)

Sono disponibili due politiche di backup: **`No Backup`** e **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, uno snapshot viene creato automaticamente ogni sera tra le **20:00 e le 22:00**. Se il cliente attiva un backup aggiuntivo durante il giorno, vengono creati due snapshot nello stesso giorno: la ritenzione attiva copre allora **29 giorni** invece di 30. Questa opzione è **fatturata a parte**.

:::info
La replicazione delle VM non è inclusa.
:::

<a id="sla-et-disponibilité"></a>

## Disponibilità del servizio

L'obiettivo di disponibilità è del **99,95 % per VM Instance**, misurato su un mese. Copre le risorse di calcolo (CPU, RAM); la connettività di rete e l'archiviazione persistente hanno i propri impegni. La garanzia delle risorse dipende dalla classe di servizio scelta.

I VM tools, preinstallati sulle immagini del Marketplace, sono necessari per la misurazione della disponibilità: si raccomanda di non disattivarli né rimuoverli.

## Responsabilità

La ripartizione delle responsabilità tra il cliente e Cloud Temple è descritta in dettaglio nella [matrice delle responsabilità (RACI) VM Instances](../../contractual/vm-instances/raci.md).

L'accesso al servizio per un **cliente diretto** richiede almeno il **Support Standard**, anche se il cliente amministra autonomamente il SO e le applicazioni. Il **Support Basic** è destinato ai clienti accompagnati da un partner formato.

## Reversibilità

| Operazione                | Deliverable                           | Tempistica  | Costo      |
|---------------------------|---------------------------------------|-------------|------------|
| Esportazione dei dati     | Immagini disco, in formati standard   | 30 giorni   | Senza costi |
| Assistenza alla migrazione | Supporto tecnico                     | Su richiesta | Su preventivo |
| Cancellazione sicura      | Certificato di distruzione            | 7 giorni    | Incluso    |

## Prezzi

Il compute è fatturato a ore, senza impegno mensile; ogni ora iniziata è dovuta. L'arresto di una VM sospende la fatturazione delle vCPU e della RAM, ma non quella dell'archiviazione. Il dettaglio delle regole di fatturazione e delle quote è descritto nelle [FAQ VM Instances](./faq.md). I prezzi sono pubblicati sulla pagina del prodotto sul sito Cloud Temple:
[VM Instances — prezzi](https://www.cloud-temple.com/produits/vm-instances/).
