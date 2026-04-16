---
title: Concetti
---

Il servizio **VM Instances** di Cloud Temple è un'offerta di calcolo condiviso che consente di distribuire macchine virtuali su richiesta, senza gestire l'infrastruttura sottostante. Questa pagina presenta i concetti fondamentali del servizio.

## Regioni e zone di disponibilità

Il servizio VM Instances è distribuito nella regione **FR1**. Durante la creazione di una macchina virtuale, è possibile scegliere la **zona di disponibilità (AZ)** in cui verrà ospitata.

Per ulteriori informazioni sulle zone di disponibilità e le regioni Cloud Temple, consultare:

- [Concetti sulle zone di disponibilità](../../additional_content/concepts_az.md)
- [Concetti regionali](../../additional_content/concepts_regional.md)

## Classi di servizio

Il servizio offre tre classi di servizio adattate a diversi tipi di carichi di lavoro:

| Classe | Descrizione | Risorse |
|--------|-------------|---------|
| **Development** | Costo ottimizzato, per ambienti di test, integrazione e staging. Adatto a carichi non critici con utilizzo variabile. | Condivise |
| **General Purpose** | Equilibrio ottimale vCPU/RAM per carichi di lavoro standard (applicazioni web, micro-servizi, database di dimensioni moderate). | Condivise |
| **Performance** | Progettato per carichi di lavoro intensivi che richiedono elevate prestazioni CPU. **Le vCPU sono dedicate** per garantire prestazioni costanti. | vCPU dedicate |

## Flavor

Per ogni classe di servizio vengono offerti flavor predefiniti. È anche possibile creare **flavor personalizzati** scegliendo liberamente il numero di vCPU e la quantità di RAM.

### Development

Ottimizzato per ambienti di test, integrazione e staging con costi controllati.

| Flavor | vCPU | RAM | Utilizzo tipico |
|--------|------|-----|-----------------|
| dev.small | 1 | 2 GB | Test unitari, CI leggera |
| dev.medium | 2 | 4 GB | Integrazione, strumenti interni |
| dev.large | 4 | 8 GB | Ambiente di staging |

### General Purpose

Adatto per applicazioni web, micro-servizi e database di dimensioni moderate.

| Flavor | vCPU | RAM | Utilizzo tipico |
|--------|------|-----|-----------------|
| gp.small | 1 | 4 GB | Micro-servizio, test funzionali |
| gp.medium | 2 | 8 GB | Server web, applicazione leggera |
| gp.large | 4 | 16 GB | Applicazione standard |
| gp.xlarge | 8 | 32 GB | Database medio |
| gp.2xlarge | 16 | 64 GB | Applicazione critica |

### Performance

Le **vCPU sono dedicate** per garantire prestazioni costanti anche sotto carichi elevati.

| Flavor | vCPU | RAM | Utilizzo tipico |
|--------|------|-----|-----------------|
| perf.medium | 2 | 4 GB | Calcolo leggero, CI/CD |
| perf.large | 4 | 8 GB | Elaborazione batch, encoding |
| perf.xlarge | 8 | 16 GB | Calcolo intensivo |
| perf.2xlarge | 16 | 32 GB | Simulazione, analytics |

### Flavor personalizzati

È possibile creare un flavor personalizzato selezionando liberamente:

- Il numero di vCPU
- La quantità di RAM

Questa flessibilità consente di adattare con precisione il dimensionamento alle esigenze applicative ottimizzando i costi.

:::note
Le specifiche dei flavor possono evolversi. Consultare la console Cloud Temple per l'elenco aggiornato.
:::

## Storage

Tutti i volumi del servizio VM Instances sono **volumi Flash persistenti montati in rete** (*network-attached*). Non esiste storage locale effimero: i dati vengono conservati indipendentemente dallo stato della macchina virtuale.

### Disco di sistema

Ogni macchina virtuale dispone di un **disco di sistema Flash incluso per impostazione predefinita**, la cui dimensione dipende dal sistema operativo scelto:

- Dimensione: tra **15 e 100 GB** in base all'OS selezionato.

### Volumi aggiuntivi

È possibile aggiungere volumi di storage aggiuntivi a ogni macchina virtuale:

- **Dimensione massima**: 2 TB per volume
- **Numero massimo**: 16 volumi per VM
- **Granularità**: allocazione in GB
- **Fatturazione**: per GB allocato, con scelta della classe di storage

## Rete

### Interfaccia di rete

Ogni VM instance dispone di **un'unica interfaccia di rete**.

### Compatibilità di rete

Questa interfaccia può essere connessa a due tipi di reti Cloud Temple:

- **Rete privata backbone**: rete privata condivisa con isolamento logico rigoroso tra i tenant. Ideale per interconnettere le risorse Cloud Temple in un ambiente controllato. [Ulteriori informazioni](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)**: rete privata completamente gestita che consente una segmentazione avanzata e una configurazione di rete dettagliata degli ambienti. [Ulteriori informazioni](../../network/vpc/vpc.md)

### IP mobile (Floating IP)

Su una rete **VPC**, è possibile associare un **IP mobile** a una VM instance. Un IP mobile è un indirizzo IP pubblico che è possibile collegare o scollegare liberamente da un'istanza, indipendentemente dal suo ciclo di vita.

## Distribuzione e immagini

Le VM Instances vengono distribuite dalle **immagini ufficiali del Marketplace di Cloud Temple**. Questo catalogo di immagini selezionate garantisce ambienti testati, mantenuti e pronti all'uso per ogni sistema operativo supportato.

Il servizio supporta **Cloud-init** per la preconfigurazione automatica delle istanze all'avvio (iniezione di chiavi SSH, configurazione di rete, script di inizializzazione, ecc.).

## Protezione dei dati

### Backup (opzionale)

È disponibile un'opzione di backup con conservazione configurabile. Questa opzione è **fatturata separatamente**.

:::info
La replica VM non è inclusa per impostazione predefinita. Il suo studio è previsto per il secondo semestre 2026.
:::

## SLA e disponibilità

| Impegno | Valore |
|---------|--------|
| Disponibilità dell'infrastruttura | 99,9% (misurata mensilmente) |
| Garanzia di risorse | In base alla classe di servizio scelta |

## Automazione

Il servizio è completamente gestibile tramite:

- **Console Cloud Temple**: interfaccia grafica per la gestione quotidiana
- **API REST Cloud Temple**: controllo programmatico del ciclo di vita delle VM
- **Provider Terraform Cloud Temple**: Infrastructure as Code
