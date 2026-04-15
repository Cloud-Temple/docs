---
title: Concetti
---

Il servizio **VMaaS** di Cloud Temple è un'offerta di calcolo condiviso che consente di distribuire macchine virtuali su richiesta, senza gestire l'infrastruttura sottostante. Questa pagina presenta i concetti fondamentali del servizio.

## Architettura tecnica

Il servizio si basa su un'infrastruttura condivisa composta da:

- **Hypervisor**: Infrastruttura completamente gestita da Cloud Temple (nessuna scelta dell'hypervisor da parte del cliente).
- **Hardware di calcolo**: Blade Cisco UCS.
- **Storage**: Storage a blocchi condiviso ad alte prestazioni.

L'infrastruttura è ospitata in Francia.

## Regioni e zone di disponibilità

Il servizio VMaaS è distribuito nella regione **FR1**. Durante la creazione di una macchina virtuale, è possibile scegliere la **zona di disponibilità (AZ)** in cui verrà ospitata.

Per ulteriori informazioni sulle zone di disponibilità e le regioni Cloud Temple, consultare:

- [Concetti sulle zone di disponibilità](../additional_content/concepts_az.md)
- [Concetti regionali](../additional_content/concepts_regional.md)

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

Ogni macchina virtuale è dotata di **una scheda di rete**.

Il servizio è nativamente compatibile con il servizio **VPC (Virtual Private Cloud)** di Cloud Temple, che consente l'isolamento della rete e la segmentazione degli ambienti.

## Distribuzione e immagini

Le macchine virtuali vengono distribuite **esclusivamente dai template ufficiali del Marketplace di Cloud Temple**. Non è possibile utilizzare immagini personalizzate di terze parti.

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

## Sicurezza e conformità

| Certificazione |
|----------------|
| ISO 27001:2022 |
| ISAE 3402 |

:::info Qualificazione SecNumCloud
Questo servizio è in corso di qualificazione SecNumCloud da parte dell'ANSSI.
:::

I dati sono ospitati in **Francia**, in un ambiente condiviso con **isolamento logico rigoroso** tra i clienti.

## Automazione

Il servizio è completamente gestibile tramite:

- **Console Cloud Temple**: interfaccia grafica per la gestione quotidiana
- **API REST Cloud Temple**: controllo programmatico del ciclo di vita delle VM
- **Provider Terraform Cloud Temple**: Infrastructure as Code

## Prerequisiti

Per utilizzare il servizio VMaaS, è necessario disporre di:

- Un **Tenant Cloud Temple** attivo
- Un abbonamento minimo al **Supporto Standard** ([vedere la documentazione del supporto](https://docs.cloud-temple.com))
