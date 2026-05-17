---
title: Matrice di responsabilità IaaS
displayed_sidebar: docSidebar
---


Ecco il modello **RACI** che definisce la ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo delle infrastrutture IaaS di Cloud Temple.

## Definizione dei diversi ruoli

Di seguito si ricordano i diversi ruoli del RACI :

| Ruolo         | Descrizione                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Esegue   | __R__ealizza il processo                                                              |
| (A) Approva  | __A__pprova la realizzazione del processo                                              |
| (C) Consulta | __C__onsultato durante il processo                                                     |
| (I) Informato| __I__nformato sui risultati del processo (tramite strumenti, portale o messaggistica) |

## Definizione delle tue esigenze

| Attività                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------|---------------|--------------------|
| Definire l'architettura globale della tua piattaforma Cloud Temple                              | **RA**        | **CI**             |
| Definire il numero di tenant e il numero di zone di disponibilità per ogni tenant               | **RA**        | **CI**             |
| Definire la strategia globale di disaster recovery o continuità operativa                      | **RA**        | **CI**             |
| Dimensionare correttamente la tua piattaforma Cloud Temple (calcolo, archiviazione, rete, backup,...) | **RA**        | **CI**             |
| Sottoscrivere i servizi con le informazioni necessarie                                           | **RA**        | **I**              |

## Implementazione iniziale dei vostri tenant Cloud Temple

| Attività                                                                                                     | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire l'implementazione dei **datacenter fisici**                                                        |               | **RA**             |
| Garantire l'implementazione delle infrastrutture di **calcolo**                                              | **I**         | **RA**             |
| Garantire l'implementazione delle infrastrutture di **archiviazione**                                        | **I**         | **RA**             |
| Garantire l'implementazione della connettività alla **rete backbone(1)**                                     | **I**         | **RA**             |
| Acquisire e mantenere le licenze software essenziali per il funzionamento della piattaforma Cloud Temple     |               | **RA**             |
| Implementare la configurazione di base dei vostri tenant Cloud Temple                                        | **CI**        | **RA**             |
| Implementare la configurazione iniziale per il servizio di backup                                            | **CI**        | **RA**             |
| *Se sottoscritti:* implementare la configurazione di rete iniziale per i servizi Internet e Firewall         | **CI**        | **RA**             |
| Fornire l'assistenza necessaria per l'avvio iniziale dei vostri ambienti Cloud Temple                        | **I**         | **RA**             |
| Effettuare le regolazioni di configurazione finali del servizio dopo la sua consegna                         | **RA**        | **C**              |
| Configurare un repository di autenticazione esterno per la console Cloud Temple                              | **RA**        | **C**              |
| Creare gli utenti di ogni tenant nella console Cloud Temple e assegnare i diritti                            | **RA**        |                    |
| Validare la conformità della piattaforma consegnata con lo standard SecNumCloud                               | **I**         | **RA**             |
| Validare la conformità della piattaforma consegnata con le specifiche richieste                               | **RA**        | **CI**             |

*(1) La rete backbone costituisce l'infrastruttura centrale di Cloud Temple, offrendo una spina dorsale su cui
si basano le reti client specifiche, le quali sono integrate e gestite da questa infrastruttura principale.*

## Integrare il proprio sistema informativo negli ambienti Cloud Temple

| Attività                                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Creare, installare e aggiornare le proprie macchine virtuali                                                                  | **RA**        |                    |
| Installare e configurare software e middleware sulle proprie macchine virtuali                                                | **RA**        |                    |
| Acquistare e detenere le licenze e i diritti d'uso per i sistemi operativi delle proprie macchine virtuali                    | **RA**        |                    |
| Configurare la rete per ciascuna delle proprie macchine virtuales                                                              | **RA**        |                    |
| Assicurarsi che ogni macchina virtuale sia associata a un piano di backup coerente                                            | **RA**        | **C**              |
| Assicurarsi che ogni macchina virtuale sia associata a un piano di disaster recovery o di continuità operativa coerente       | **RA**        | **C**              |
| Implementare una strategia di protezione antivirus sulle proprie macchine virtuales                                           | **RA**        |                    |
| Implementare una soluzione di telemetria e monitoraggio sulle proprie macchine virtuales                                      | **RA**        |                    |
| Definire la politica di tagging delle proprie macchine virtuales                                                              | **RA**        |                    |

## Operazioni ricorrenti

### Gestione degli accessi e delle identità

| Attività                                                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire l'accessibilità del servizio Console Cloud Temple e dell'API associata                                                     |               | **RA**             |
| Garantire l'accessibilità del sistema informativo distribuito sulle vostre macchine virtuali                                          | **RA**        |                    |
| Gestire le autorizzazioni fisiche e logiche dei team Cloud Temple per le infrastrutture SecNumCloud.                                  |               | **RA**             |
| Amministrare gli accessi e la politica di sicurezza associata relativi all'interfaccia della console Cloud Temple e alla sua API      | **RA**        |                    |
| Amministrare gli accessi e la politica di sicurezza associata al sistema informativo ospitato all'interno dei vostri tenant Cloud Temple | **RA**        |                    |

### mantenimento in condizioni operative e di sicurezza

Le attività volte a mantenere operative e sicure le infrastrutture e i servizi offerti da Cloud Temple, nell'ambito della propria offerta IaaS, sono svolte con l'obiettivo di garantire la conformità alla qualifica SecNumCloud.

| Attività                                                                                                          | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire il mantenimento operativo delle infrastrutture **datacenter fisici**                                    | **I**         | **RA**             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture **datacenter fisici**                   | **I**         | **RA**             |
| Garantire il mantenimento operativo delle infrastrutture **di calcolo**                                           | **I**         | **RA**             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture **di calcolo (2)**                      | **RA**        | **CI**             |
| Garantire il mantenimento operativo delle infrastrutture **di archiviazione**                                     | **I**         | **RA**             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture **di archiviazione**                    | **I**         | **RA**             |
| Garantire il mantenimento operativo delle infrastrutture **di rete backbone**                                     | **I**         | **RA**             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture **di rete backbone**                    | **I**         | **RA**             |
| Garantire il mantenimento operativo delle macchine virtuali distribuite nei tenant del cliente **(3)**            | **RA**        |                    |
| Garantire il mantenimento in condizioni di sicurezza delle macchine virtuali distribuite nei tenant del cliente **(3)** | **RA**        |                    |
| Garantire il mantenimento operativo dei middleware distribuiti nei tenant del cliente                             | **RA**        |                    |
| Garantire il mantenimento in condizioni di sicurezza dei middleware distribuiti nei tenant del cliente            | **RA**        |                    |

*(2) Cloud Temple fornisce regolarmente le versioni più recenti del sistema operativo per i vostri hypervisor.
Tuttavia, poiché Cloud Temple non è a conoscenza delle specificità dei vostri ambienti di produzione e dei requisiti
legati ai vostri carichi di lavoro, **la decisione di procedere all'aggiornamento del sistema operativo dei vostri hypervisor,
che comporterà un riavvio, spetta a voi**. Questa operazione può essere eseguita tramite la console Cloud Temple o tramite l'API.
Sono disponibili servizi professionali se desiderate che Cloud Temple gestisca determinate operazioni.*

*(3) Cloud Temple offre pacchetti di licenze per firewall (Fortinet, Stormshield) e bilanciatori di carico (HAProxy), e
collabora con i vostri team per la configurazione iniziale durante la fase di implementazione. Tuttavia,
la responsabilità del mantenimento operativo e in condizioni di sicurezza ricade su di voi durante la fase di gestione operativa
quotidiana. Sono disponibili servizi professionali se desiderate che Cloud Temple gestisca determinate operazioni.*

### Gestione dei cambiamenti, degli incidenti, dei problemi e delle capacità

| Activité                                                                                                              | Rôle Client | Rôle Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Gestire gli incidenti sulle infrastrutture **datacenter fisici**                                                      | **I**       | **RA**            |
| Gestire i problemi sulle infrastrutture **datacenter fisici**                                                         |             | **RA**            |
| Gestire le capacità sulle infrastrutture **datacenter fisici**                                                        |             | **RA**            |
| Gestire gli incidenti sulle infrastrutture **calcolo**                                                                | **I**       | **RA**            |
| Gestire i problemi sulle infrastrutture **calcolo**                                                                   |             | **RA**            |
| Gestire le capacità sulle infrastrutture **calcolo**                                                                  | **RA**      | **CI**            |
| Gestire gli incidenti sulle infrastrutture **storage**                                                                | **I**       | **RA**            |
| Gestire i problemi sulle infrastrutture **storage**                                                                   |             | **RA**            |
| Gestire le capacità sulle infrastrutture **storage**                                                                  | **RA**      | **CI**            |
| Gestire gli incidenti sulle infrastrutture **rete backbone**                                                          | **I**       | **RA**            |
| Gestire i problemi sulle infrastrutture **rete backbone**                                                             |             | **RA**            |
| Gestire le capacità sulle infrastrutture **rete backbone**                                                            |             | **RA**            |
| Implementare una nuova macchina virtuale o creare un nuovo ambiente applicativo all'interno di un tenant cliente     | **RA**      |                   |
| Modificare la configurazione delle macchine virtuali distribuite                                                    | **RA**      |                   |
| Eliminare una macchina virtuale distribuita                                                                           | **RA**      |                   |
| Prendere la decisione di aggiungere, modificare o rimuovere risorse sulla piattaforma Cloud Temple                   | **RA**      | **CI**            |
| Eseguire la decisione di modifica delle risorse sulla piattaforma Cloud Temple                                       | **I**       | **RA**            |
| Applicare i tag alle macchine virtuali conformemente alla politica definita                                         | **RA**      |                   |

### Gestione delle prestazioni

| Attività                                                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Garantire il monitoraggio del corretto funzionamento e dell'affidabilità di tutte le apparecchiature coinvolte nella fornitura del servizio qualificato SecNumCloud | **I**         | **RA**              |
| Garantire il monitoraggio delle prestazioni delle risorse fisiche di calcolo, archiviazione e rete messe a disposizione dei vostri tenant **(4)**                  | **RI**        | **A**               |
| Supervisionare le prestazioni delle macchine virtuali che supportano i vostri ambienti                                                                      | **RA**        | **I**               |

*(4) La piattaforma Cloud Temple adotta una filosofia incentrata sulla **fornitura di infrastrutture dedicate** per le esigenze di **calcolo** (con lame fisiche), di **archiviazione** (tramite LUN dedicate sui SANs)
e di **rete** (inclusi firewall e bilanciatori di carico). Queste risorse dedicate sono messe a disposizione del cliente, il cui utilizzo
e il relativo carico dipendono direttamente dall'uso che ne viene fatto. Spetta quindi al cliente implementare e gestire i sistemi di supervisione
e di raccolta di metriche necessari per garantire il monitoraggio del funzionamento ottimale del proprio sistema informativo.*

### Gestione del backup e del disaster recovery sul backup integrato

| Attività                                                                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire il mantenimento operativo delle infrastrutture di **backup** integrate nella piattaforma Cloud Temple **(5)** |               | **RA**             |
| Garantire il mantenimento della sicurezza delle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                | **I**         | **RA**             |
| Gestire gli incidenti sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                         | **I**         | **RA**             |
| Gestire i problemi sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                         |               | **RA**             |
| Gestire le capacità sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                         | **AI**        | **RC**             |
| Garantire il mantenimento operativo della soluzione di backup scelta dal cliente all'interno dei propri tenant **(6)**       | **RA**        |                    |
| Garantire il mantenimento della sicurezza della soluzione di backup scelta dal cliente all'interno dei propri tenant                  | **RA**        |                    |
| Gestire gli incidenti sulla soluzione di backup scelta dal cliente all'interno dei propri tenant                                            | **RA**        |                    |
| Gestire i problemi sulla soluzione di backup scelta dal cliente all'interno dei propri tenant                                            | **RA**        |                    |
| Gestire le capacità sulla soluzione di backup scelta dal cliente all'interno dei propri tenant                                            | **RA**        | **CI**             |
| Gestire il ciclo di vita delle politiche di backup                                                                                      | **RA**        |                    |
| Verificare che le politiche di backup siano coerenti con il ciclo di vita dei dati                                              | **RA**        |                    |
| Verificare che i piani di continuità operativa o di disaster recovery siano coerenti con il ciclo di vita dei dati                | **RA**        |                    |
| Eseguire test periodici per valutare l'efficacia della strategia di backup                                                   | **RA**        |                    |
| Eseguire test periodici per valutare l'efficacia della strategia di disaster recovery o di continuità operativa          | **RA**        | **CI**             |

*(5) Al 1° gennaio 2024, la soluzione di backup integrata nella piattaforma Cloud Temple è IBM Spectrum Protect Plus.
Questa soluzione è completamente automatizzata e può essere gestita tramite la console Cloud Temple o l'API Cloud Temple.*

### Gestione del backup e della ripresa delle attività per le piattaforme di terze parti all'interno di un tenant del cliente

| Attività                                                                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire il mantenimento operativo della soluzione di backup scelta dal cliente all'interno dei propri tenant **(6)**       | **RA**        |                    |
| Garantire il mantenimento della sicurezza della soluzione di backup scelta dal cliente all'interno dei propri tenant                  | **RA**        |                    |
| Gestire gli incidenti sulla soluzione di backup scelta dal cliente all'interno dei propri tenant                                            | **RA**        |                    |
| Gestire i problemi sulla soluzione di backup scelta dal cliente all'interno dei propri tenant                                            | **RA**        |                    |
| Gestire le capacità sulla soluzione di backup scelta dal cliente all'interno dei propri tenant                                            | **RA**        | **CI**             |
| Gestire il ciclo di vita delle politiche di backup                                                                                      | **RA**        |                    |
| Verificare che le politiche di backup siano coerenti con il ciclo di vita dei dati                                              | **RA**        |                    |
| Verificare che i piani di continuità operativa o di ripresa delle attività siano coerenti con il ciclo di vita dei dati                | **RA**        |                    |
| Eseguire test periodici per valutare l'efficacia della strategia di backup                                                   | **RA**        |                    |
| Eseguire test periodici per valutare l'efficacia della strategia di ripresa delle attività o di continuità operativa          | **RA**        | **CI**             |

*(6) Questo si riferisce a qualsiasi soluzione di backup aggiuntiva implementata negli ambienti del cliente e gestita da quest'ultimo.
Cloud Temple offre servizi professionali per chi desidera delegare alcune operazioni a Cloud Temple.*

### Gestione della documentazione e del contratto

| Attività                                                                                                                                                        | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire la gestione commerciale e contrattuale del cliente, inclusa la preparazione dei preventivi, l'elaborazione degli ordini e la gestione della fatturazione | **I**         | **RA**             |
| Garantire il monitoraggio contrattuale della prestazione, inclusa la validazione dei preventivi, il tracciamento delle consegne e il controllo della fatturazione | **RA**        | **I**              |
| Garantire la manutenzione e la disponibilità dell'inventario delle risorse fornite da Cloud Temple relative all'offerta SecNumCloud                              | **I**         | **RA**             |
| Garantire la manutenzione e la messa a disposizione della documentazione tecnica relativa all'offerta SecNumCloud                                                    | **I**         | **RA**             |
| Garantire il monitoraggio del ciclo di vita delle macchine virtuali distribuite nei vostri ambienti Cloud Temple tramite la vostra CMDB (Configuration Management Database) | **RA**        |                    |
| Mantenere aggiornata la politica di accesso all'interfaccia della console Cloud Temple o all'API Cloud Temple                                                          | **RA**        |                    |

### Gestione dei log

| Attività                                                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Conservare e mettere a disposizione i log della piattaforma IaaS Cloud Temple **(7)**                                     |               | **RA**             |
| Conservare e mettere a disposizione i log del sistema informativo ospitato all'interno dei vostri tenant Cloud Temple | **RA**        |                    |

*(7) Al 1° gennaio 2024, la durata di conservazione dei log della piattaforma è di un anno.*

## Connettività alla rete client (mpls, fibra dedicata, ipsec, ...)

| Attività                                                                                             | Ruolo Client | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------|--------------|--------------------|
| Sottoscrivere una connettività di rete dell'operatore per accedere a un datacenter fisico Cloud Temple (8) | **RA**       | **CI**             |
| Gestire il piano di indirizzamento IP                                                                | **RA**       | **I**              |
| Gestire gli incidenti sui link di rete degli operatori client                                        | **RA**       |                    |
| Gestire i problemi sui link di rete degli operatori client                                           | **RA**       | **CI**             |
| Gestire le capacità sui link di rete degli operatori client                                          | **RA**       | **CI**             |

*(8) Cloud Temple assume la responsabilità della rete relativa alla propria infrastruttura backbone, ai propri punti di raccolta nonché ai punti di interconnessione del datacenter, garantendo così la connettività tra questi punti e la propria rete backbone.
Nell'offerta di hosting in rack fisico, Cloud Temple assume la responsabilità a partire dall'attrezzatura situata nella parte superiore del rack, comunemente definita "top of rack".*

## Reversibilità

| Attività                                                                                                                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture di destinazione                                                                                                            | **RA**        | **I**              |
| Eseguire le operazioni di transizione, che comportino un'estrazione manuale, l'utilizzo di API o qualsiasi altro metodo di terze parti compatibile con la piattaforma Cloud Temple.               | **RA**        | **I**              |
| Trasferire i dati controllando al contempo le ripercussioni della migrazione sulla qualità del servizio fornito dal sistema informativo del cliente.                                              | **RA**        |                    |
| Procedere allo smantellamento delle configurazioni del Cloud Privato e delle opzioni associate al cliente, a seguito della risoluzione del contratto.                                              | **I**         | **RA**             |
| Effettuare la cancellazione sicura dei dati sui supporti di archiviazione e fornire un attestato                                                                                                 | **I**         | **RA**             |