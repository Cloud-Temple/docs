---
title: Matrice di responsabilità IaaS
---

Ecco il modello **RACI** che definisce la suddivisione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo delle infrastrutture IaaS di Cloud Temple.

## Definizione dei diversi ruoli

Richiamiamo qui i diversi ruoli del RACI:

| Ruolo        | Descrizione                                                                               |
|--------------|-------------------------------------------------------------------------------------------|
| (R) Realizza | __R__ealizza il processo                                                                  |
| (A) Approva  | __A__pprova la realizzazione del processo                                                 |
| (C) Consulta | __C__onsultato durante il processo                                                        |
| (I) Informato| __I__nformato dei risultati del processo (tramite strumenti, portale o messaggistica)     |

## Definizione delle vostre esigenze

| Attività                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Definire l'architettura globale della vostra piattaforma Cloud Temple                          | **RA**      | **CI**            |
| Definire il numero di tenant e il numero di zone di disponibilità per ciascun tenant           | **RA**      | **CI**            |
| Definire la vostra strategia globale di ripristino o continuità dell'attività                  | **RA**      | **CI**            |
| Dimensionare correttamente la vostra piattaforma Cloud Temple (calcolo, storage, rete, backup,...) | **RA**      | **CI**            |
| Sottoscrivere ai servizi con le informazioni necessarie                                        | **RA**      | **I**             |

## Implementazione iniziale dei vostri tenant Cloud Temple

| Attività                                                                                                     | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire l'implementazione dei **datacenter fisici**                                                        |             | **RA**            |
| Garantire l'implementazione delle infrastrutture di **calcolo**                                              | **I**       | **RA**            |
| Garantire l'implementazione delle infrastrutture di **storage**                                              | **I**       | **RA**            |
| Garantire l'implementazione della connettività al **rete backbone(1)**                                       | **I**       | **RA**            |
| Acquistare e mantenere le licenze software essenziali per il funzionamento della piattaforma Cloud Temple    |             | **RA**            |
| Implementare la configurazione base dei vostri tenant Cloud Temple                                           | **CI**      | **RA**            |
| Implementare la configurazione iniziale per il servizio di backup                                            | **CI**      | **RA**            |
| *Se sottoscritti:* implementare la configurazione iniziale di rete per i servizi Internet e Firewall         | **CI**      | **RA**            |
| Offrire l'assistenza necessaria per familiarizzare con i vostri ambienti Cloud Temple                        | **I**       | **RA**            |
| Effettuare le regolazioni finali della configurazione del servizio dopo la sua consegna                      | **RA**      | **C**             |
| Configurare un repository di autenticazione esterno per la console Cloud Temple                              | **RA**      | **C**             |
| Creare gli utenti di ciascun tenant nella console Cloud Temple e assegnare i diritti                         | **RA**      |                   |
| Validare la conformità della piattaforma consegnata con il riferimento SecNumCloud                           | **I**       | **RA**            |
| Validare la conformità della piattaforma consegnata con le specifiche richieste                              | **RA**      | **CI**            |

*(1) La rete backbone costituisce l'infrastruttura centrale di Cloud Temple, offrendo una "spina dorsale" sulla quale poggiano le reti clienti specifiche, che sono integrate e sostenute da questa infrastruttura principale.*

## Integrare il vostro sistema informativo nei vostri ambienti Cloud Temple

| Attività                                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Creare, installare, aggiornare le vostre macchine virtuali                                                                    | **RA**      |                   |
| Installare e configurare il software e i middleware sulle vostre macchine virtuali                                            | **RA**      |                   |
| Acquistare e detenere le licenze e i diritti d'uso <br/>per i sistemi operativi delle vostre macchine virtuali                | **RA**      |                   |
| Configurare la rete per ciascuna delle vostre macchine virtuali                                                               | **RA**      |                   |
| Assicurarsi che ogni macchina virtuale sia associata a un piano di backup coerente                                            | **RA**      | **C**             |
| Assicurarsi che ogni macchina virtuale sia associata a un <br/>piano di ripristino o di continuità dell'attività coerente     | **RA**      | **C**             |
| Implementare una strategia di protezione antivirus sulle vostre macchine virtuali                                             | **RA**      |                   |
| Implementare una soluzione di metrologia e monitoraggio sulle vostre macchine virtuali                                         | **RA**      |                   |
| Definire la politica di TAG delle vostre macchine virtuali                                                                    | **RA**      |                   |

## Operazioni ricorrenti

### Gestione degli accessi e delle identità

| Attività                                                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire l'accessibilità del servizio Console Cloud Temple e dell'API associata                                                    |             | **RA**            |
| Garantire l'accessibilità del sistema informativo distribuito sulle vostre macchine virtuali                                        | **RA**      |                   |
| Gestire le autorizzazioni fisiche e logiche dei team di Cloud Temple alle infrastrutture SecNumCloud.                               |             | **RA**            |
| Amministrare gli accessi e la politica di sicurezza associata all'interfaccia della console Cloud Temple e alla sua API             | **RA**      |                   |
| Amministrare gli accessi e la politica di sicurezza associata al sistema informativo<br/> ospitato nei vostri tenant Cloud Temple   | **RA**      |                   |

### Mantenimento delle condizioni operative e di sicurezza

Le attività volte a mantenere le condizioni operative e di sicurezza per le infrastrutture e i servizi offerti da Cloud Temple, nell'ambito della sua offerta IaaS, vengono svolte con l'obiettivo di conformità alla qualificazione SecNumCloud.

| Attività                                                                                                          | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire il mantenimento delle condizioni operative delle infrastrutture dei **datacenter fisici**               | **I**       | **RA**            |
| Garantire il mantenimento delle condizioni di sicurezza delle infrastrutture dei **datacenter fisici**            | **I**       | **RA**            |
| Garantire il mantenimento delle condizioni operative delle infrastrutture di **calcolo**                          | **I**       | **RA**            |
| Garantire il mantenimento delle condizioni di sicurezza delle infrastrutture di **calcolo (2)**                   | **RA**      | **CI**            |
| Garantire il mantenimento delle condizioni operative delle infrastrutture di **storage**                          | **I**       | **RA**            |
| Garantire il mantenimento delle condizioni di sicurezza delle infrastrutture di **storage**                        | **I**       | **RA**            |
| Garantire il mantenimento delle condizioni operative delle infrastrutture di **rete backbone**                    | **I**       | **RA**            |
| Garantire il mantenimento delle condizioni di sicurezza delle infrastrutture di **rete backbone**                 | **I**       | **RA**            |
| Garantire il mantenimento delle condizioni operative delle macchine virtuali distribuite nei tenant clienti **(3)**| **RA**      |                   |
| Garantire il mantenimento delle condizioni di sicurezza delle macchine virtuali distribuite nei tenant clienti **(3)** | **RA**      |                   |
| Garantire il mantenimento delle condizioni operative dei middleware distribuiti nei tenant clienti                | **RA**      |                   |

| Assicurare il mantenimento delle middleware in condizioni di sicurezza nei tenant del cliente                     | **RA**      |                   |

*(2) Cloud Temple fornisce regolarmente le versioni più recenti del sistema operativo per i vostri hypervisor.
Tuttavia, dato che Cloud Temple non è a conoscenza delle specifiche dei vostri ambienti di produzione e delle esigenze
legate ai vostri carichi di lavoro, **la decisione di procedere all'aggiornamento del sistema operativo dei vostri hypervisor,
comportando quindi un riavvio, rimane a voi**. Questa operazione può essere eseguita tramite la console di Cloud Temple o tramite l'API.
Sono disponibili servizi professionali se desiderate che Cloud Temple si occupi di alcune operazioni.*

*(3) Cloud Temple propone pacchetti di licenze per firewall (Fortinet, Stormshield) e load balancer (HAProxy), e collabora
con i vostri team per la configurazione iniziale durante la fase di implementazione. Tuttavia,
la responsabilità del mantenimento in condizioni operative e di sicurezza ricade su di voi durante la fase
operativa corrente. Sono disponibili servizi professionali se desiderate che Cloud Temple si occupi di alcune operazioni.*

### Gestione dei cambiamenti, degli incidenti, dei problemi e delle capacità

| Attività                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Gestire gli incidenti sulle infrastrutture dei **data center fisici**                                                 | **I**         | **RA**              |
| Gestire i problemi sulle infrastrutture dei **data center fisici**                                                    |               | **RA**              |
| Gestire le capacità sulle infrastrutture dei **data center fisici**                                                   |               | **RA**              |
| Gestire gli incidenti sulle infrastrutture di **calcolo**                                                             | **I**         | **RA**              |
| Gestire i problemi sulle infrastrutture di **calcolo**                                                                |               | **RA**              |
| Gestire le capacità sulle infrastrutture di **calcolo**                                                               | **RA**        | **CI**              |
| Gestire gli incidenti sulle infrastrutture di **archiviazione**                                                       | **I**         | **RA**              |
| Gestire i problemi sulle infrastrutture di **archiviazione**                                                          |               | **RA**              |
| Gestire le capacità sulle infrastrutture di **archiviazione**                                                         | **RA**        | **CI**              |
| Gestire gli incidenti sulle infrastrutture di **rete backbone**                                                       | **I**         | **RA**              |
| Gestire i problemi sulle infrastrutture di **rete backbone**                                                          |               | **RA**              |
| Gestire le capacità sulle infrastrutture di **rete backbone**                                                         |               | **RA**              |
| Implementare una nuova macchina virtuale o creare un nuovo ambiente applicativo all'interno di un tenant cliente      | **RA**        |                     |
| Modificare la configurazione delle macchine virtuali distribuite                                                      | **RA**        |                     |
| Eliminare una macchina virtuale distribuita                                                                           | **RA**        |                     |
| Prendere la decisione di aggiungere, modificare o rimuovere risorse sulla piattaforma Cloud Temple                    | **RA**        | **CI**              |
| Eseguire la decisione di modifica delle risorse sulla piattaforma Cloud Temple                                        | **I**         | **RA**              |
| Applicare i tag alle macchine virtuali in conformità alla politica definita                                           | **RA**        |                     |

### Gestione delle prestazioni

| Attività                                                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare il monitoraggio del corretto funzionamento e dell'affidabilità di tutte le attrezzature coinvolte nella fornitura del servizio qualificato SecNumCloud | **I**         | **RA**              |
| Garantire il monitoraggio delle prestazioni delle risorse fisiche di calcolo, archiviazione e rete messe a disposizione dei vostri tenant **(4)**                  | **RI**        | **A**               |
| Supervisare le prestazioni delle macchine virtuali che supportano i vostri ambienti                                                                      | **RA**        | **I**               |

*(4) La piattaforma Cloud Temple adotta una filosofia centrata sulla **fornitura di infrastrutture dedicate** per le esigenze di **calcolo** (con lame fisiche), **archiviazione** (tramite LUN dedicate su SAN)
e di **rete** (inclusi firewall e load balancer). Queste risorse dedicate sono messe a disposizione del cliente, il cui utilizzo
e il carico risultante dipendono direttamente dall'uso che ne fa. Pertanto, spetta al cliente implementare e gestire i sistemi di monitoraggio
e metrologia necessari per garantire il monitoraggio del funzionamento ottimale del proprio sistema informativo.*

### Gestione del backup e del ripristino delle attività sul backup integrato

| Attività                                                                                                                                | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare il mantenimento in condizioni operative sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple **(5)** |               | **RA**              |
| Assicurare il mantenimento in condizioni di sicurezza delle infrastrutture di **backup** integrate nella piattaforma Cloud Temple      | **I**         | **RA**              |
| Gestire gli incidenti sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                       | **I**         | **RA**              |
| Gestire i problemi sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                         |               | **RA**              |
| Gestire le capacità sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                        | **AI**        | **RC**              |
| Garantire il mantenimento in condizioni operative sulla soluzione di backup scelta all'interno dei propri tenant dal cliente **(6)**   | **RA**        |                     |
| Garantire il mantenimento in condizioni di sicurezza sulla soluzione di backup scelta all'interno dei propri tenant dal cliente        | **RA**        |                     |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                       | **RA**        |                     |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                          | **RA**        |                     |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                         | **RA**        | **CI**              |
| Gestire il ciclo di vita delle politiche di backup                                                                                      | **RA**        |                     |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                                     | **RA**        |                     |
| Assicurarsi che i piani di continuità operativa o di ripristino delle attività siano coerenti con il ciclo di vita del dato             | **RA**        |                     |
| Eseguire test periodici per valutare l'efficacia della strategia di backup                                                              | **RA**        |                     |
| Eseguire test periodici per valutare l'efficacia della strategia<br/> di ripristino delle attività o di continuità operativa            | **RA**        | **CI**              |

*(5) Al 1° gennaio 2024, la soluzione di backup integrata nella piattaforma Cloud Temple è IBM Spectrum Protect Plus.
Questa soluzione è completamente automatizzata e può essere gestita tramite la console Cloud Temple o l'API Cloud Temple.*

### Gestione del backup e del ripristino delle attività per le piattaforme di terze parti all'interno di un tenant cliente

| Attività                                                                                                                                | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare il mantenimento in condizione operativa sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente **(6)**       | **RA**      |                   |
| Assicurare il mantenimento in condizione di sicurezza sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                  | **RA**      |                   |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                            | **RA**      |                   |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                            | **RA**      |                   |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                            | **RA**      | **CI**            |
| Gestire il ciclo di vita delle politiche di backup                                                                                      | **RA**      |                   |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                              | **RA**      |                   |
| Assicurarsi che i piani di continuità operativa o di ripristino delle attività siano coerenti con il ciclo di vita del dato                | **RA**      |                   |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                   | **RA**      |                   |
| Effettuare test periodici per valutare l'efficacia della strategia<br/> di ripristino delle attività o di continuità operativa          | **RA**      | **CI**            |

*(6) Ciò riguarda ogni soluzione di backup aggiuntiva implementata negli ambienti del cliente e gestita da esso.
Cloud Temple offre servizi professionali per coloro che desiderano delegare alcune operazioni a Cloud Temple.*

### Gestione della documentazione e del contratto

| Attività                                                                                                                                                        | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare la gestione commerciale e contrattuale del cliente, inclusa la redazione di preventivi, il trattamento degli ordini e la gestione della fatturazione       | **I**       | **RA**            |
| Assicurare il monitoraggio contrattuale della prestazione, inclusa la validazione dei preventivi, il monitoraggio delle consegne e la sorveglianza della fatturazione                   | **RA**      | **I**             |
| Assicurare la manutenzione e la disponibilità dell'inventario delle risorse fornite da Cloud Temple relative all'offerta SecNumCloud                              | **I**       | **RA**            |
| Assicurare la manutenzione e la messa a disposizione della documentazione tecnica relativa all'offerta SecNumCloud                                                    | **I**       | **RA**            |
| Assicurare il monitoraggio del ciclo di vita delle macchine virtuali distribuite nei tuoi ambienti Cloud Temple<br/> tramite il tuo CMDB (Configuration Management Database) | **RA**      |                   |
| Mantenere aggiornata la politica di accesso all'interfaccia della console Cloud Temple o all'API Cloud Temple                                                          | **RA**      |                   |

### Gestione dei log

| Attività                                                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Conservare e mettere a disposizione i log della piattaforma IaaS Cloud Temple **(7)**                                |             | **RA**            |
| Conservare e mettere a disposizione i log del sistema informativo<br/> ospitato all'interno dei tuoi tenant Cloud Temple | **RA**      |                   |

*(7) Al primo gennaio 2024, la durata di conservazione dei log della piattaforma è di un anno.*

## Connettività alla rete del cliente (mpls, fibra dedicata, ipsec, ...)

| Attività                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Sottoscrivere una connettività di rete operatore per accedere a un datacenter fisico Cloud Temple (8) | **RA**      | **CI**            |
| Gestire il piano di indirizzamento IP                                                                         | **RA**      | **I**             |
| Gestire gli incidenti sui collegamenti di rete degli operatori del cliente                                          | **RA**      |                   |
| Gestire i problemi sui collegamenti di rete degli operatori del cliente                                          | **RA**      | **CI**            |
| Gestire le capacità sui collegamenti di rete degli operatori del cliente                                          | **RA**      | **CI**            |

*(8) Cloud Temple assume la responsabilità della rete per quanto riguarda la sua infrastruttura backbone, i suoi punti di raccolta nonché
i punti di interconnessione del datacenter, garantendo così la connettività tra questi punti e la sua rete backbone.
Nell'offerta di hosting nel rack fisico, Cloud Temple assume la responsabilità a partire dall'equipaggiamento situato in cima al rack, comunemente chiamato "top of rack".*

## Reversibilità

| Attività                                                                                                                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture di destinazione                                                                                                                     | **RA**      | **I**             |
| Implementare le operazioni di transizione, che comprendano un'estrazione manuale, l'uso di API <br/>o qualsiasi altro metodo terzo compatibile con la piattaforma Cloud Temple. | **RA**      | **I**             |
| Trasferire i dati controllando l'impatto della migrazione sulla qualità del servizio fornito <br/>dal sistema informativo del cliente.                                      | **RA**      |                   |
| Procedere con lo smantellamento delle configurazioni del Cloud Privato e delle opzioni associate al cliente, <br/>a seguito della cessazione del contratto.                                                  | **I**       | **RA**            |
| Eseguire la cancellazione sicura dei dati sui dispositivi di archiviazione e fornire una certificazione                                                                                             | **I**       | **RA**            |