---
title: Concetti
---

Il servizio **VM Instances** di Cloud Temple è un prodotto di calcolo condiviso che consente di distribuire macchine virtuali su richiesta, senza la necessità di gestire l'infrastruttura sottostante. Questa pagina presenta i concetti fondamentali del servizio.

## Regioni e zone di disponibilità

Il servizio VM Instances è distribuito nella regione **FR1**. Durante la creazione di una macchina virtuale, è possibile scegliere la **zona di disponibilità (AZ)** in cui verrà ospitata.

Per ulteriori informazioni sulle zone di disponibilità e le regioni Cloud Temple, consulta:

- [Concetti sulle zone di disponibilità](../../additional_content/concepts_az.md)
- [Concetti sulle regioni](../../additional_content/concepts_regional.md)

## Classi di servizio

Il servizio offre tre classi di servizio adatte a diversi tipi di carichi di lavoro:

| Classe | Descrizione | Risorse |
|--------|-------------|------------|
| **Sviluppo** | Costo ottimizzato, per ambienti di test, integrazione e pre-produzione. Adatto a carichi non critici con utilizzo variabile. | Condivise |
| **Uso Generale** | Equilibrio ottimale vCPU/RAM per carichi di lavoro standard (applicazioni web, microservizi, database di dimensioni moderate). | Condivise |
| **Prestazioni** | Progettato per carichi di lavoro intensivi che richiedono elevate prestazioni CPU. **I vCPU sono dedicati** per garantire prestazioni costanti. | vCPU dedicati |

## Configurazioni (Flavors)

Sono disponibili configurazioni predefinite per ogni classe di servizio. È inoltre possibile creare **configurazioni personalizzate** scegliendo liberamente il numero di vCPU e la quantità di RAM.

### Sviluppo

Ottimizzato per gli ambienti di test, integrazione e pre-produzione con un costo controllato.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------------|
| dev.small | 1 | 2 GB | Test unitari, CI leggera |
| dev.medium | 2 | 4 GB | Integrazione, strumenti interni |
| dev.large | 4 | 8 GB | Ambiente di pre-produzione |

### Uso Generale

Adatto a applicazioni web, microservizi e database di dimensioni moderate.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| gp.small | 1 | 4 GB | Microservizio, test funzionale |
| gp.medium | 2 | 8 GB | Server web, applicazione leggera |
| gp.large | 4 | 16 GB | Applicazione standard |
| gp.xlarge | 8 | 32 GB | Database medio |
| gp.2xlarge | 16 | 64 GB | Applicazione critica |

### Performance

I **vCPU sono dedicati** per garantire prestazioni costanti, anche sotto carico elevato.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------------|
| perf.medium | 2 | 4 GB | Calcolo leggero, CI/CD |
| perf.large | 4 | 8 GB | Elaborazione batch, codifica |
| perf.xlarge | 8 | 16 GB | Calcolo intensivo |
| perf.2xlarge | 16 | 32 GB | Simulazione, analytics |

### Template personalizzati

È possibile creare un template personalizzato selezionando liberamente :

- Il numero di vCPU
- La quantità di RAM

Questa flessibilità consente di adattare con precisione il dimensionamento alle esigenze applicative, ottimizzando al contempo i costi.

:::note
Le specifiche dei template possono subire delle variazioni. Consulta la console Cloud Temple per l'elenco aggiornato.
:::

## Archiviazione

Tutti i volumi del servizio VM Instances sono **volumi Flash persistenti montati in rete** (*network-attached*). Non esiste archiviazione locale effimera: i vostri dati vengono conservati indipendentemente dallo stato della macchina virtuale.

### Disco di sistema

Ogni macchina virtuale dispone di un **disco di sistema Flash incluso per impostazione predefinita**, la cui dimensione dipende dal sistema operativo scelto:

- Dimensione: tra **15 e 100 GB** in base al sistema operativo selezionato.

### Volumi aggiuntivi

È possibile aggiungere volumi di archiviazione aggiuntivi a ogni macchina virtuale :

- **Dimensione massima** : 2 TB per volume
- **Numero massimo** : 16 volumi per VM
- **Granularità** : allocazione per GB
- **Fatturazione** : per GB allocato, con scelta della classe di archiviazione

## Rete

### Interfaccia di rete

Ogni istanza VM può disporre di **da 1 a 7 schede di rete**. Ogni scheda di rete è associata a **una sola rete**.

### Compatibilità di rete

Questa interfaccia può essere connessa a due tipi di reti Cloud Temple :

- **Rete privata backbone** : rete privata condivisa con isolamento logico rigoroso tra i tenant. Ideale per interconnettere le vostre risorse Cloud Temple in un ambiente controllato. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : rete privata completamente gestita che consente una segmentazione avanzata e una configurazione di rete granulare dei vostri ambienti. [En savoir plus](../../network/vpc/vpc.md)

### IP flottante (Floating IP)

Su una rete **VPC**, è possibile associare un **IP flottante** a un'istanza VM. Un IP flottante è un indirizzo IP pubblico che è possibile collegare o scollegare liberamente da un'istanza, indipendentemente dal suo ciclo di vita.

## Distribuzione e immagini

Le istanze VM vengono distribuite dalle **immagini ufficiali della Marketplace Cloud Temple**. I template disponibili sono quelli della [Marketplace filtrata per OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Questo catalogo di immagini selezionate garantisce ambienti testati, mantenuti e pronti all'uso per ogni sistema operativo supportato.

Il servizio supporta **Cloud-init** per la preconfigurazione automatica delle istanze all'avvio (iniezione di chiavi SSH, configurazione di rete, script di inizializzazione, ecc.).

## Protezione dei dati

### Backup (opzionale)

Sono disponibili due politiche di backup: **`No Backup`** e **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, uno snapshot viene creato automaticamente ogni sera tra le **20 h e le 22 h**. Se il cliente avvia un backup aggiuntivo durante il giorno, vengono creati due snapshot lo stesso giorno: la ritenzione attiva copre quindi **29 giorni** invece di 30. Questa opzione è **fatturata a parte**.

:::info
La replicazione delle VM non è inclusa di default. La sua valutazione è prevista per il secondo semestre del 2026.
:::

## SLA e disponibilità

| Impegno | Valore |
|------------|--------|
| Disponibilità dell'infrastruttura | 99,95% (misurata mensilmente) |
| Garanzia delle risorse | In base alla classe di servizio scelta |

## Automazione

Il servizio è completamente gestibile tramite:

- **Console Cloud Temple** : interfaccia grafica per la gestione quotidiana
- **API REST Cloud Temple** : controllo programmatico del ciclo di vita delle VM
- **Provider Terraform Cloud Temple** : Infrastruttura come Codice