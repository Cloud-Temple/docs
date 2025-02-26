---
title: Matrice de responsabilità IaaS
---


Ecco il modello **RACI** che definisce la ripartizione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo delle infrastrutture IaaS di Cloud Temple.

## Definizione dei diversi ruoli

Qui ricordiamo i diversi ruoli del RACI:

| Ruolo         | Descrizione                                                                            |
|---------------|----------------------------------------------------------------------------------------|
| (R) Realizza  | __R__ealizza il processo                                                                |
| (A) Approva   | __A__pprova la realizzazione del processo                                               |
| (C) Consulta  | __C__onsultato durante il processo                                                      |
| (I) Informato | __I__nformato dei risultati del processo (tramite strumenti, portale o messaggi di posta)|

## Definizione delle vostre esigenze

| Attività                                                                                        | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------|---------------|--------------------|
| Definire l'architettura globale della vostra piattaforma Cloud Temple                           | __RA__        | __CI__             |
| Definire il numero di tenants e il numero di zone di disponibilità per ciascun tenant           | __RA__        | __CI__             |
| Definire la vostra strategia globale di ripristino o continuità operativa                       | __RA__        | __CI__             |
| Dimensionare correttamente la vostra piattaforma Cloud Temple (calcolo, storage, rete, backup,...)| __RA__         | __CI__             |
| Sottoscrivere ai servizi con le informazioni necessarie                                         | __RA__        | __I__              |

## Implementazione iniziale dei vostri tenants Cloud Temple

| Attività                                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire l'implementazione dei **data center fisici**                                                         |               | __RA__             |
| Garantire l'implementazione delle infrastrutture di **calcolo**                                                | __I__         | __RA__             |
| Garantire l'implementazione delle infrastrutture di **storage**                                                | __I__         | __RA__             |
| Garantire l'implementazione della connettività alla **rete backbone(1)**                                        | __I__         | __RA__             |
| Acquistare e mantenere le licenze software essenziali per il funzionamento della piattaforma Cloud Temple      |               | __RA__             |
| Implementare la configurazione di base dei vostri tenants Cloud Temple                                         | __CI__        | __RA__             |
| Implementare la configurazione iniziale per il servizio di backup                                              | __CI__        | __RA__             |
| *Se sottoscritti:* implementare la configurazione iniziale della rete per i servizi Internet e Firewall        | __CI__        | __RA__             |
| Fornire l'assistenza richiesta per la presa in carico dei vostri ambienti Cloud Temple                         | __I__         | __RA__             |
| Effettuare le regolazioni finali della configurazione del servizio dopo la sua consegna                        | __RA__        | __C__              |
| Configurare un repository di autenticazione esterno per la console Cloud Temple                                | __RA__        | __C__              |
| Creare gli utenti di ciascun tenant nella console Cloud Temple e assegnare i diritti                           | __RA__        |                    |
| Verificare la conformità della piattaforma consegnata con il benchmark SecNumCloud                             | __I__         | __RA__             |
| Verificare la conformità della piattaforma consegnata con le specifiche richieste                              | __RA__        | __CI__             |

*(1) La rete backbone costituisce l'infrastruttura centrale di Cloud Temple, fornendo una spina dorsale sulla quale si appoggiano le reti clienti specifiche, le quali sono integrate e supportate da questa infrastruttura principale.*

## Integrare il vostro sistema informativo nei vostri ambienti Cloud Temple

| Attività                                                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Creare, installare, aggiornare le vostre macchine virtuali                                                                     | __RA__        |                    |
| Installare e configurare software e middleware sulle vostre macchine virtuali                                                  | __RA__        |                    |
| Acquistare e detenere le licenze e i diritti d'uso <br/>per i sistemi operativi delle vostre macchine virtuali                 | __RA__        |                    |
| Configurare la rete per ciascuna delle vostre macchine virtuali                                                                | __RA__        |                    |
| Assicurarsi che ciascuna macchina virtuale sia associata a un piano di backup coerente                                          | __RA__        | __C__              |
| Assicurarsi che ciascuna macchina virtuale sia associata a un <br/>piano di ripristino o continuità operativa coerente         | __RA__        | __C__              |
| Implementare una strategia di protezione antivirus sulle vostre macchine virtuali                                              | __RA__        |                    |
| Implementare una soluzione di metrologia e monitoraggio sulle vostre macchine virtuali                                         | __RA__        |                    |
| Definire la politica di TAG delle vostre macchine virtuali                                                                     | __RA__        |                    |

## Operazioni ricorrenti

### Gestione degli accessi e delle identità

| Attività                                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire l'accessibilità del servizio Console Cloud Temple e dell'API associata                                                     |               | __RA__             |
| Garantire l'accessibilità del sistema informativo implementato sulle vostre macchine virtuali                                        | __RA__        |                    |
| Gestire le abilitazioni fisiche e logiche dei team Cloud Temple per le infrastrutture SecNumCloud                                     |               | __RA__             |
| Amministrare gli accessi e la politica di sicurezza associata legati all'interfaccia della console Cloud Temple e alla sua API       | __RA__        |                    |
| Amministrare gli accessi e la politica di sicurezza associata al sistema informativo<br/> ospitato all'interno dei vostri tenant Cloud Temple | __RA__   |                    |

### Mantenimento in condizioni operative e di sicurezza

Le attività volte a mantenere le infrastrutture e i servizi di Cloud Temple in condizioni operative e di sicurezza, nel quadro della sua offerta IaaS, sono realizzate con l'obiettivo di conformità alla certificazione SecNumCloud.

| Attività                                                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Garantire il mantenimento in condizioni operative delle infrastrutture dei **data center fisici**                   | __I__         | __RA__             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture dei **data center fisici**                | __I__         | __RA__             |
| Garantire il mantenimento in condizioni operative delle infrastrutture di **calcolo**                               | __I__         | __RA__             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture di **calcolo (2)**                        | __RA__        | __CI__             |
| Garantire il mantenimento in condizioni operative delle infrastrutture di **storage**                               | __I__         | __RA__             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture di **storage**                            | __I__         | __RA__             |
| Garantire il mantenimento in condizioni operative delle infrastrutture della **rete backbone**                      | __I__         | __RA__             |
| Garantire il mantenimento in condizioni di sicurezza delle infrastrutture della **rete backbone**                   | __I__         | __RA__             |
| Garantire il mantenimento in condizioni operative delle macchine virtuali implementate nei tenant cliente **(3)**   | __RA__        |                    |
| Garantire il mantenimento in condizioni di sicurezza delle macchine virtuali implementate nei tenant cliente **(3)**| __RA__        |                    |
| Garantire il mantenimento in condizioni operative dei middleware implementati nei tenant cliente                    | __RA__        |                    |

| Garantire la manutenzione in condizioni di sicurezza dei middleware distribuiti nei tenant del cliente      | __RA__      |                   |

*(2) Cloud Temple fornisce regolarmente le versioni più recenti del sistema operativo per i vostri hypervisor.
Tuttavia, poiché Cloud Temple non è a conoscenza delle specificità dei vostri ambienti di produzione e delle esigenze
legate ai vostri carichi di lavoro, __la decisione di aggiornare il sistema operativo dei vostri hypervisor,
causando quindi un riavvio, spetta a voi__. Questa operazione può essere eseguita tramite la console Cloud Temple o tramite l'API.
Sono disponibili servizi professionali se desiderate che Cloud Temple si occupi di alcune operazioni.*

*(3) Cloud Temple propone pacchetti di licenze per firewall (Fortinet, Stormshield) e bilanciatori di carico (HAProxy), e
lavora in collaborazione con i vostri team per la configurazione iniziale durante la fase di implementazione. Tuttavia,
la responsabilità della manutenzione operativa e della sicurezza spetta a voi durante la fase operativa
corrente. Sono disponibili servizi professionali se desiderate che Cloud Temple si occupi di alcune operazioni.*

### Gestione dei cambiamenti, degli incidenti, dei problemi e delle capacità

| Attività                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Gestire gli incidenti sulle infrastrutture **datacenter fisici**                                                      | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **datacenter fisici**                                                         |               | __RA__              |
| Gestire le capacità sulle infrastrutture **datacenter fisici**                                                        |               | __RA__              |
| Gestire gli incidenti sulle infrastrutture **calcolo**                                                                | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **calcolo**                                                                   |               | __RA__              |
| Gestire le capacità sulle infrastrutture **calcolo**                                                                  | __RA__        | __CI__              |
| Gestire gli incidenti sulle infrastrutture **archiviazione**                                                          | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **archiviazione**                                                             |               | __RA__              |
| Gestire le capacità sulle infrastrutture **archiviazione**                                                            | __RA__        | __CI__              |
| Gestire gli incidenti sulle infrastrutture **rete backbone**                                                          | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **rete backbone**                                                             |               | __RA__              |
| Gestire le capacità sulle infrastrutture **rete backbone**                                                            |               | __RA__              |
| Impostare una nuova macchina virtuale o creare un nuovo ambiente applicativo all'interno di un tenant del cliente     | __RA__        |                     |
| Modificare la configurazione delle macchine virtuali distribuite                                                      | __RA__        |                     |
| Eliminare una macchina virtuale distribuita                                                                           | __RA__        |                     |
| Prendere la decisione di aggiungere, modificare o rimuovere risorse sulla piattaforma Cloud Temple                    | __RA__        | __CI__              |
| Eseguire la decisione di modificare le risorse sulla piattaforma Cloud Temple                                         | __I__         | __RA__              |
| Applicare i tag alle macchine virtuali secondo la politica definita                                                   | __RA__        |                     |

### Gestione delle prestazioni

| Attività                                                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Garantire il monitoraggio del corretto funzionamento e della affidabilità di tutte le apparecchiature coinvolte nella fornitura del servizio qualificato SecNumCloud | __I__         | __RA__              |
| Garantire il monitoraggio delle prestazioni delle risorse fisiche di calcolo, archiviazione e rete messe a disposizione dei vostri tenant __(4)__     | __RI__        | __A__               |
| Monitorare le prestazioni delle macchine virtuali a supporto dei vostri ambienti                                                                     | __RA__        | __I__               |

*(4) La piattaforma Cloud Temple adotta una filosofia incentrata sulla __fornitura di infrastrutture dedicate__ per le esigenze di __calcolo__ (con lame fisiche), di __archiviazione__ (tramite LUN dedicate sui SAN) e di __rete__ (includendo firewall e bilanciatori di carico). Queste risorse dedicate sono messe a disposizione del cliente, il cui utilizzo e carico risultante dipendono direttamente dall'uso che ne fa. Pertanto, è responsabilità del cliente implementare e gestire i sistemi di monitoraggio e metrologia necessari per garantire il monitoraggio del funzionamento ottimale del suo sistema informativo.*

### Gestione del backup e del ripristino dell'attività sul backup integrato

| Attività                                                                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Garantire la manutenzione operativa sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple **(5)**  |               | __RA__              |
| Garantire la manutenzione in condizioni di sicurezza delle infrastrutture di **backup** integrate nella piattaforma Cloud Temple         | __I__         | __RA__              |
| Gestire gli incidenti sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                        | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                           |               | __RA__              |
| Gestire le capacità sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                          | __AI__        | __RC__              |
| Garantire la manutenzione operativa sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente **(6)**                    | __RA__        |                     |
| Garantire la manutenzione in condizioni di sicurezza sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente           | __RA__        |                     |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                           | __RA__        |                     |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                             | __RA__        |                     |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                             | __RA__        | __CI__              |
| Gestire il ciclo di vita delle politiche di backup                                                                                       | __RA__        |                     |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                                     | __RA__        |                     |
| Assicurarsi che i piani di continuità o di ripristino dell'attività siano coerenti con il ciclo di vita del dato                        | __RA__        |                     |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                            | __RA__        |                     |
| Effettuare test periodici per valutare l'efficacia della strategia di ripristino dell'attività o di continuità dell'attività           | __RA__        | __CI__              |

*(5) Al 1° gennaio 2024, la soluzione di backup integrata nella piattaforma Cloud Temple è IBM Spectrum Protect Plus.
Questa soluzione è completamente automatizzata e può essere gestita tramite la console Cloud Temple o l'API Cloud Temple.*

### Gestione del backup e del ripristino dell'attività per le piattaforme terze all'interno di un tenant del cliente

| Attività                                                                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare il mantenimento in condizione operativa sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente **(6)**       | __RA__      |                   |
| Assicurare il mantenimento in condizione di sicurezza sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente            | __RA__      |                   |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                            | __RA__      |                   |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                               | __RA__      |                   |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                              | __RA__      | __CI__            |
| Gestire il ciclo di vita delle politiche di backup                                                                                        | __RA__      |                   |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                                       | __RA__      |                   |
| Assicurarsi che i piani di continuità operativa o di ripristino siano coerenti con il ciclo di vita del dato                              | __RA__      |                   |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                              | __RA__      |                   |
| Effettuare test periodici per valutare l'efficacia della strategia di ripristino di attività o di continuità operativa                    | __RA__      | __CI__            |

*(6) Questo riguarda ogni soluzione di backup supplementare implementata negli ambienti del cliente e gestita da esso.
Cloud Temple offre servizi professionali per coloro che desiderano delegare alcune operazioni a Cloud Temple.*

### Gestione della documentazione e del contratto

| Attività                                                                                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Assicurare la gestione commerciale e contrattuale del cliente, inclusa la redazione di offerte, il trattamento degli ordini e la gestione della fatturazione   | __I__         | __RA__             |
| Assicurare il monitoraggio contrattuale della prestazione, inclusa la validazione delle offerte, il tracciamento delle consegne e il monitoraggio della fatturazione | __RA__      | __I__              |
| Assicurare la manutenzione e la disponibilità dell'inventario delle risorse fornite da Cloud Temple relative all'offerta SecNumCloud                            | __I__         | __RA__             |
| Assicurare la manutenzione e la messa a disposizione della documentazione tecnica relativa all'offerta SecNumCloud                                              | __I__         | __RA__             |
| Assicurare il monitoraggio del ciclo di vita delle macchine virtuali distribuite nei vostri ambienti Cloud Temple<br/> tramite la vostra CMDB (Configuration Management Database) | __RA__      |                    |
| Mantenere aggiornata la politica di accesso all'interfaccia della console Cloud Temple o all'API Cloud Temple                                                   | __RA__        |                    |

### Gestione dei log

| Attività                                                                                                                 | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Conservare e mettere a disposizione i log della piattaforma IaaS Cloud Temple **(7)**                                    |               | __RA__             |
| Conservare e mettere a disposizione i log del sistema informativo<br/> ospitato all'interno dei vostri tenant Cloud Temple | __RA__        |                    |

*(7) Al primo gennaio 2024, la durata di conservazione dei log della piattaforma è di un anno.*

## Connettività alla rete cliente (mpls, fibra dedicata, ipsec, ...)

| Attività                                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------------|---------------|--------------------|
| Sottoscrivere una connettività di rete operatore per accedere a un data center fisico Cloud Temple (8) | __RA__        | __CI__             |
| Gestire il piano di indirizzamento IP                                                               | __RA__        | __I__              |
| Gestire gli incidenti sui collegamenti di rete degli operatori cliente                             | __RA__        |                    |
| Gestire i problemi sui collegamenti di rete degli operatori cliente                                | __RA__        | __CI__             |
| Gestire le capacità sui collegamenti di rete degli operatori cliente                               | __RA__        | __CI__             |

*(8) Cloud Temple si assume la responsabilità della rete riguardo la sua infrastruttura backbone, i punti di raccolta così come
i punti di interconnessione del data center, garantendo così la connettività tra questi punti e la sua rete backbone.
Nell'offerta di hosting in rack fisico, Cloud Temple si assume la responsabilità a partire dall'attrezzatura situata in cima al rack, comunemente chiamata "top of rack".*

## Reversibilità

| Attività                                                                                                                                                                                   | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture target                                                                                                              | __RA__        | __I__              |
| Implementare le operazioni di transizione, che implicano un'estrazione manuale, l'uso di API <br/>o qualsiasi altro metodo terzo compatibile con la piattaforma Cloud Temple                 | __RA__        | __I__              |
| Trasferire i dati monitorando le conseguenze della migrazione sulla qualità del servizio fornito <br/>dal sistema informativo del cliente                                                  | __RA__        |                    |
| Smantellare le configurazioni del Cloud Privato e le opzioni associate al cliente, <br/>a seguito della risoluzione del contratto                                                          | __I__         | __RA__             |
| Effettuare la cancellazione sicura dei dati sui supporti di archiviazione e fornire una certificazione                                                                                      | __I__         | __RA__             |