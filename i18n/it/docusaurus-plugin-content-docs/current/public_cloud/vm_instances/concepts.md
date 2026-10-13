---
title: Concetti
---

Il servizio **VM Instances** di Cloud Temple è un prodotto di compute mutualizzato qualificato **SecNumCloud**, che consente di distribuire macchine virtuali on demand, senza la gestione dell'infrastruttura sottostante. Questa pagina presenta i concetti fondamentali del servizio.

## Regioni e zone di disponibilità

Il servizio VM Instances è deployato nella regione **FR1**. Durante la creazione di una macchina virtuale, è possibile scegliere la **zona di disponibilità (AZ)** in cui verrà ospitata.

Per ulteriori informazioni sulle zone di disponibilità e sulle regioni Cloud Temple, consultare:

- [Concepts des zones de disponibilité](../../additional_content/concepts_az.md)
- [Concepts des régions](../../additional_content/concepts_regional.md)

## Classi di servizio

Il servizio offre tre classi di servizio adatte a diversi tipi di carichi di lavoro:

| Classe | Descrizione | Risorse |
|--------|-------------|------------|
| **Development** | Costo ottimizzato, per ambienti di test, integrazione e accettazione. Adatto a carichi non critici con utilizzo variabile. | Condivise |
| **General Purpose** | Equilibrio ottimale vCPU/RAM per carichi di lavoro standard (applicazioni web, microservizi, database di dimensioni moderate). | Condivise |
| **Performance** | Progettato per carichi di lavoro intensivi che richiedono elevate prestazioni CPU. **Le vCPU sono dedicate** per garantire prestazioni costanti. | vCPU dedicate |

## Flavor (Flavors)

Sono disponibili flavor predefiniti per ciascuna classe di servizio. È inoltre possibile creare **flavor custom** scegliendo liberamente il numero di vCPU e la quantità di RAM.

### Sviluppo

Ottimizzato per ambienti di test, integrazione e accettazione con costi controllati.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| dev.small | 1 | 2 Go | Test unitari, CI leggera |
| dev.medium | 2 | 4 Go | Integrazione, strumenti interni |
| dev.large | 4 | 8 Go | Ambiente di accettazione |

### General Purpose

Adatto alle applicazioni web, microservizi e database di dimensioni moderate.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| gp.small | 1 | 4 Go | Microservizio, test funzionale |
| gp.medium | 2 | 8 Go | Server web, applicazione leggera |
| gp.large | 4 | 16 Go | Applicazione standard |
| gp.xlarge | 8 | 32 Go | Database di medie dimensioni |
| gp.2xlarge | 16 | 64 Go | Applicazione critica |

### Prestazioni

Le **vCPU sono dedicati** per garantire prestazioni costanti, anche sotto forte carico.

| Flavor | vCPU | RAM | Tipo di utilizzo |
|--------|------|-----|------------|
| perf.medium | 2 | 4 Go | Calcolo leggero, CI/CD |
| perf.large | 4 | 8 Go | Elaborazione batch, codifica |
| perf.xlarge | 8 | 16 Go | Calcolo intensivo |
| perf.2xlarge | 16 | 32 Go | Simulazione, analytics |

### Template personalizzati

È possibile creare un template personalizzato selezionando liberamente :

- Il numero di vCPU
- La quantità di RAM

Questa flessibilità consente di adattare precisamente il dimensionamento alle esigenze applicative ottimizzando al contempo i costi.

:::note
Le specifiche dei template possono variare. Consultare la console Cloud Temple per l'elenco aggiornato.
:::

## Archiviazione

Tutti i volumi del servizio VM Instances sono **volumi Flash persistenti montati in rete** (*network-attached*). Non esiste archiviazione locale effimera: i vostri dati sono conservati indipendentemente dallo stato della macchina virtuale.

### Disco di sistema

Ogni macchina virtuale dispone automaticamente di un **disco di sistema Flash** per ospitare il sistema operativo. Questo disco è una risorsa di archiviazione del servizio e non è gratuito; la sua dimensione dipende dal sistema operativo scelto:

- Dimensione: tra **15 e 100 GB** a seconda del OS selezionato.

Il disco di sistema è fatturato al **GB** secondo il catalogo tariffario VM Instances. La sua creazione automatica con la VM significa che è necessario per il deployment dell'OS, e non che è incluso gratuitamente.

### Volumi aggiuntivi

È possibile aggiungere volumi di storage aggiuntivi a ogni macchina virtuale :

- **Dimensione** : da **1 a 2 048 Go** per volume
- **Numero massimo** : 16 volumi per VM
- **Limite per famiglia** : **2 To per VM** in Development e General Purpose ; **16 To per VM** in Enterprise
- **Granularità** : allocazione al Go
- **Fatturazione** : al Go allocato, con scelta della classe di storage

### Classi di archiviazione

Sono disponibili due classi di archiviazione a blocchi per i volumi aggiuntivi :

| Classe | Uso | Prestazioni | Dimensione minima | Dimensione massima |
| --- | --- | --- | --- | --- |
| **Enterprise** | Archiviazione a blocchi ad alte prestazioni per carichi di lavoro sensibili alla latenza. | **7 500 IOPS/To** | **1 Go** | **2 048 Go** |
| **Standard** | Archiviazione a blocchi standard adatta alla maggior parte dei carichi di lavoro. | **1 500 IOPS/To** | **1 Go** | **2 048 Go** |

## Rete

### Interfaccia di rete

Ogni istanza VM può disporre di **da 1 a 7 schede di rete**. Ogni scheda di rete è associata a **una sola rete**.

### Compatibilità di rete

Questa interfaccia può essere collegata a due tipi di rete Cloud Temple :

- **Rete privata di backbone** : rete privata condivisa con isolamento logico rigoroso tra i tenant. Ideale per interconnettere le risorse Cloud Temple in un ambiente controllato. [En savoir plus](../../network/private_network/private_network.md)
- **VPC (Virtual Private Cloud)** : rete privata completamente gestita che consente una segmentazione avanzata e una configurazione di rete dettagliata dei vostri ambienti. [En savoir plus](../../network/vpc/vpc.md)

### IP flottante (Floating IP)

Su una rete **VPC**, è possibile associare un **IP flottante** a un'istanza VM. Un IP flottante è un indirizzo IP pubblico che è possibile allegare o staccare liberamente da un'istanza, indipendentemente dal suo ciclo di vita.

### Appliance virtuali

Le appliance virtuali **Stormshield** e **FortiVM** sono compatibili con la **famiglia Enterprise**, a condizione del rispetto dei prerequisiti tecnici e del perimetro di supporto applicabile.

## Deployment e immagini

Le VM Instances vengono deployate dalle **immagini ufficiali della Marketplace Cloud Temple**. I template disponibili sono quelli della [Marketplace filtrata per OpenIaaS](https://www.cloud-temple.com/marketplace/?m_deployment%5B%5D=openiaas&post_type=marketplace). Questo catalogo di immagini selezionate garantisce ambienti testati, mantenuti e pronti all'uso per ogni sistema operativo supportato.

Il servizio supporta **Cloud-init** per la pre-configurazione automatica delle istanze all'avvio (iniezione di chiavi SSH, configurazione di rete, script di inizializzazione, ecc.).

### Migration di un OS fuori Marketplace

Un sistema operativo non disponibile nella Marketplace può essere oggetto di una migrazione tramite ripristino **Veeam in modalità Bare Metal Recovery**, previa validazione tecnica. Cloud Temple garantisce in tal caso il funzionamento dell'infrastruttura VM, ma non garantisce il corretto funzionamento dell'OS guest, delle sue applicazioni o degli agenti necessari quando questi non sono installati o configurati correttamente. Il supporto dell'OS guest è in tal caso limitato.

Un secondo metodo è previsto con l'importazione di dischi **VHD/VMDK**, al fine di creare una VM a partire da un'immagine esistente. Questa funzionalità è in fase di sviluppo e prevista per il **quarto trimestre 2026**; non è disponibile nel servizio attuale.

## Protezione dei dati

### Backup (opzionale)

Sono disponibili due politiche di backup : **`No Backup`** et **`Backup 30 snapshots`**. Con `Backup 30 snapshots`, uno snapshot viene creato automaticamente ogni sera tra le **20:00 e le 22:00**. Se il cliente avvia un backup aggiuntivo durante il giorno, vengono creati due snapshot lo stesso giorno : la ritenzione attiva copre quindi **29 giorni** invece di 30. Questa opzione è **fatturata in aggiunta**.

:::info
La replicazione delle VM non è inclusa di default. La sua valutazione è prevista per il secondo semestre 2026.
:::

## SLA e disponibilità

| Impegno | Valore |
|------------|--------|
| Disponibilità dell'infrastruttura | 99,95% (misurata mensilmente) |
| Garanzia delle risorse | Secondo la classe di servizio scelta |

## Automazione

Il servizio è completamente gestibile tramite :

- **Console Cloud Temple** : interfaccia grafica per la gestione quotidiana
- **API REST Cloud Temple** : controllo programmatico del ciclo di vita delle VM
- **Provider Terraform Cloud Temple** : Infrastructure as Code