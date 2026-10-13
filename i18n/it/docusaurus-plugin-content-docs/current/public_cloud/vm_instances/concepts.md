---
title: Concetti
---

Il servizio **VM Instances** di Cloud Temple è un prodotto di calcolo condiviso qualificato **SecNumCloud**, che consente di distribuire macchine virtuali su richiesta, senza la gestione dell'infrastruttura sottostante. Questa pagina presenta i concetti fondamentali del servizio.

## Regioni e zone di disponibilità

Il servizio VM Instances è distribuito nella regione **FR1**. Durante la creazione di una macchina virtuale, è possibile scegliere la **zona di disponibilità (AZ)** in cui verrà ospitata.

Per ulteriori informazioni sulle zone di disponibilità e sulle regioni Cloud Temple, consultare:

- [Concetti delle zone di disponibilità](../../additional_content/concepts_az.md)
- [Concetti delle regioni](../../additional_content/concepts_regional.md)

## Classi di servizio

Il servizio offre tre classi di servizio adattate a diversi tipi di carichi di lavoro:

| Classe | Descrizione | Risorse |
|--------|-------------|------------|
| **Development** | Costo ottimizzato, per ambienti di test, integrazione e staging. Adatto a carichi non critici con utilizzo variabile. | Condivise |
| **General Purpose** | Bilancio ottimale vCPU/RAM per carichi di lavoro standard (applicazioni web, microservizi, database di dimensioni modeste). | Condivise |
| **Performance** | Progettato per carichi di lavoro intensivi che richiedono elevate prestazioni CPU. **Le vCPU sono dedicate** per garantire prestazioni costanti. | vCPU dedicate |

## Flavor (Gabarits)

Sono proposti flavor predefiniti per ciascuna classe di servizio. È inoltre possibile creare **flavor personalizzati** scegliendo liberamente il numero di vCPU e la quantità di RAM.

### Development

Ottimizzato per ambienti di test, integrazione e staging con un costo contenuto.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| dev.small | 1 | 2 Go | Test unitario, CI leggera |
| dev.medium | 2 | 4 Go | Integrazione, strumenti interni |
| dev.large | 4 | 8 Go | Ambiente di staging |

### General Purpose

Adatto ad applicazioni web, microservizi e database di dimensioni modeste.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| gp.small | 1 | 4 Go | Microservizio, test funzionale |
| gp.medium | 2 | 8 Go | Server web, applicazione leggera |
| gp.large | 4 | 16 Go | Applicazione standard |
| gp.xlarge | 8 | 32 Go | Database di medie dimensioni |
| gp.2xlarge | 16 | 64 Go | Applicazione critica |

### Performance

Le **vCPU sono dedicate** per garantire prestazioni costanti, anche sotto forte carico.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| perf.medium | 2 | 4 Go | Calcolo leggero, CI/CD |
| perf.large | 4 | 8 Go | Elaborazione batch, codifica |
| perf.xlarge | 8 | 16 Go | Calcolo intensivo |
| perf.2xlarge | 16 | 32 Go | Simulazione, analytics |

### Flavor personalizzati

È possibile creare un flavor personalizzato selezionando liberamente:

- Il numero di vCPU
- La quantità di RAM

Questa flessibilità consente di adattare precisamente il dimensionamento alle esigenze applicative ottimizzando al contempo i costi.

:::note
Le specifiche dei flavor possono subire evoluzioni. Consultare la console Cloud Temple per l'elenco aggiornato.
:::

## Archiviazione

Tutti i volumi del servizio VM Instances sono **volumi Flash persistenti montati in rete** (*network-attached*). Non esiste archiviazione locale effimera: i dati vengono conservati indipendentemente dallo stato della macchina virtuale.

### Disco di sistema

Ogni macchina virtuale dispone automaticamente di un **disco di sistema Flash** per ospitare il sistema operativo. Questo disco è una risorsa di archiviazione del servizio e non è gratuito; la sua dimensione dipende dal sistema operativo scelto:

- Dimensione: tra **15 e 100 Go** in base al SO selezionato.

Il disco di sistema è fatturato al **Go** secondo il [catalogo tariffario ufficiale Cloud Temple](https://www.cloud-temple.com/nos-tarifs-publics/). La sua creazione automatica con la VM indica che è necessario per la distribuzione del SO, e non che è incluso gratuitamente.

### Volumi aggiuntivi

È possibile aggiungere volumi di archiviazione supplementari a ciascuna macchina virtuale:

- **Dimensione**: da **1 a 2 048 Go** per volume
- **Numero massimo**: 16 volumi per VM
- **Limite per famiglia**: **2 TB per VM** in Development e General Purpose; **16 TB per VM** in Enterprise
- **Granularità**: allocazione al Go
- **Fatturazione**: al Go allocato, con scelta della classe di archiviazione

### Classi di archiviazione

Sono disponibili due classi di archiviazione block per i volumi aggiuntivi:

| Classe | Utilizzo | Prestazioni | Dimensione minima | Dimensione massima |
| --- | --- | --- | --- | --- |
| **Enterprise** | Archiviazione block ad alte prestazioni per carichi di lavoro sensibili alla latenza. | **7 500 IOPS/TB** | **1 Go** | **2 048 Go** |
| **Standard** | Archiviazione block standard adatta alla maggior parte dei carichi di lavoro. | **1 500 IOPS/TB** | **1 Go** | **2 048 Go** |

## Rete

### Interfaccia di rete

Ogni istanza VM può disporre di **da 1 a 7 schede di rete**. Ogni scheda di rete è associata a **una sola rete**.

### Compatibilità di rete

Questa interfaccia può essere connessa a due tipi di reti Cloud Temple:

- **Rete privata backbone**: rete privata condivisa con isolamento logico rigoroso tra i tenant. Ideale per interconnettere le risorse Cloud Temple in un ambiente controllato. [Ulteriori informazioni](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: rete privata completamente gestita che consente una segmentazione avanzata e una configurazione di rete dettagliata degli ambienti. [Ulteriori informazioni](../../network/vpc/vpc.md)

### IP fluttuante (Floating IP)

Su una rete **VPC**, è possibile associare un **IP fluttuante** a un'istanza VM. Un IP fluttuante è un indirizzo IP pubblico che è possibile attaccare o staccare liberamente da un'istanza, indipendentemente dal suo ciclo di vita.

### Appliance virtuali

Le appliance virtuali **Stormshield** e **FortiVM** sono compatibili con la **famiglia Enterprise**, previa conformità ai prerequisiti tecnici e all'ambito di supporto applicabile.

## Distribuzione e immagini

Le VM Instances vengono distribuite dalle **immagini ufficiali del Marketplace Cloud Temple**. I template disponibili sono quelli del [Marketplace filtrato per OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Questo catalogo di immagini selezionate garantisce ambienti testati, mantenuti e pronti all'uso per ciascun sistema operativo supportato.

Il servizio supporta **Cloud-init** per la pre-configurazione automatica delle istanze all'avvio (iniezione di chiavi SSH, configurazione di rete, script di inizializzazione, ecc.).

### Migrazione di un OS al di fuori del Marketplace

Un sistema operativo non disponibile nel Marketplace può essere oggetto di migrazione tramite ripristino **Veeam in modalità Bare Metal Recovery**, previa validazione tecnica. Cloud Temple garantisce quindi il funzionamento dell'infrastruttura VM, ma non garantisce il corretto funzionamento del SO guest, delle sue applicazioni o degli agenti necessari quando questi non sono installati o configurati correttamente. Il supporto del SO guest è quindi limitato.

Un secondo metodo è previsto con l'importazione di dischi **VHD/VMDK**, per creare una VM a partire da un'immagine esistente. Questa funzionalità è in sviluppo e prevista per il **quarto trimestre 2026**; non è disponibile nel servizio attuale.

## Protezione dei dati

### Backup (opzionale)

Sono disponibili due politiche di backup: **`No Backup`** e **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, uno snapshot viene creato automaticamente ogni sera tra le **20:00 e le 22:00**. Se il cliente attiva un backup aggiuntivo durante il giorno, vengono creati due snapshot nello stesso giorno: la ritenzione attiva copre allora **29 giorni** invece di 30. Questa opzione è **fatturata a parte**.

:::info
La replicazione delle VM non è inclusa di default. Il suo studio è previsto per il secondo semestre 2026.
:::

## SLA e disponibilità

| Impegno | Valore |
|------------|--------|
| Disponibilità dell'infrastruttura | 99,95% (misurato mensilmente) |
| Garanzia delle risorse | In base alla classe di servizio scelta |

## Automazione

Il servizio è interamente pilotabile tramite:

- **Console Cloud Temple**: interfaccia grafica per la gestione quotidiana
- **API REST Cloud Temple**: controllo programmatico del ciclo di vita delle VM
- **Provider Terraform Cloud Temple**: Infrastructure as Code
