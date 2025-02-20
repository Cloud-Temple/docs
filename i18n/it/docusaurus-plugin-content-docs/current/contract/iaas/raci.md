---
title: Matrice di responsabilità IaaS
---

Ecco il modello **RACI** che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo delle infrastrutture IaaS di Cloud Temple.

## Definizione dei vari ruoli

Ricordiamo qui i diversi ruoli del RACI:

| Ruolo         | Descrizione                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realizza | __R__ealizza il processo                                                              |
| (A) Approva  | __A__pprova la realizzazione del processo                                             |
| (C) Consulta | __C__onsultato durante il processo                                                    |
| (I) Informato| __I__nformato sui risultati del processo (tramite tool, portale o messaggistica)       |

## Definire la vostra esigenza

| Attività                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Definire l'architettura globale della vostra piattaforma Cloud Temple                          | __RA__      | __CI__            | 
| Definire il numero di tenants e il numero di zone di disponibilità per ogni tenant             | __RA__      | __CI__            | 
| Definire la vostra strategia globale di ripresa o continuità operativa                         | __RA__      | __CI__            | 
| Dimensionare correttamente la vostra piattaforma Cloud Temple (calcolo, storage, rete, backup,...) | __RA__      | __CI__            | 
| Sottoscrivere ai servizi con le informazioni necessarie                                        | __RA__      | __I__             | 

## Implementazione iniziale dei vostri tenants Cloud Temple

| Attività                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare l'implementazione dei **datacenter fisici**                                                        |             | __RA__            | 
| Assicurare l'implementazione delle infrastrutture **calcolo**                                                 | __I__       | __RA__            | 
| Assicurare l'implementazione delle infrastrutture **storage**                                                 | __I__       | __RA__            | 
| Assicurare l'implementazione della connettività alla **rete backbone(1)**                                     | __I__       | __RA__            | 
| Acquistare e mantenere le licenze software essenziali per il funzionamento della piattaforma Cloud Temple     |             | __RA__            | 
| Implementare la configurazione di base dei vostri tenants Cloud Temple                                        | __CI__      | __RA__            | 
| Implementare la configurazione iniziale per il servizio di backup                                             | __CI__      | __RA__            |
| *Se sottoscritti:* implementare la configurazione di rete iniziale per i servizi Internet e Firewall          | __CI__      | __RA__            |
| Offrire l'assistenza necessaria per la gestione dei vostri ambienti Cloud Temple                              | __I__       | __RA__            | 
| Effettuare gli aggiustamenti finali di configurazione del servizio dopo la sua consegna                      | __RA__      | __C__             | 
| Configurare un archivio di autenticazione esterno per la console Cloud Temple                                 | __RA__      | __C__             | 
| Creare gli utenti di ogni tenant nella console Cloud Temple e assegnare i diritti                             | __RA__      |                   | 
| Validare la conformità della piattaforma consegnata con il framework SecNumCloud                              | __I__       | __RA__            |
| Validare la conformità della piattaforma consegnata con le specifiche richieste                               | __RA__      | __CI__            |

*(1) La rete backbone costituisce l'infrastruttura centrale di Cloud Temple, offrendo una spina dorsale su cui 
si basano le reti specifiche dei clienti, che sono integrate e supportate da questa infrastruttura principale.*

## Integrare il vostro sistema informativo nei vostri ambienti Cloud Temple

| Attività                                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Creare, installare, aggiornare le vostre macchine virtuali                                                                   | __RA__      |                   | 
| Installare e configurare i software e i middleware sulle vostre macchine virtuali                                            | __RA__      |                   | 
| Acquistare e mantenere le licenze e i diritti di utilizzo <br/> per i sistemi operativi delle vostre macchine virtuali       | __RA__      |                   | 
| Configurare la rete per ciascuna delle vostre macchine virtuali                                                              | __RA__      |                   |
| Assicurarsi che ogni macchina virtuale sia associata a un piano di backup coerente                                           | __RA__      | __C__             | 
| Assicurarsi che ogni macchina virtuale sia associata a un <br/>piano di ripresa o continuità operativa coerente              | __RA__      | __C__             | 
| Implementare una strategia di protezione antivirus sulle vostre macchine virtuali                                            | __RA__      |                   | 
| Implementare una soluzione di metrologia e monitoraggio sulle vostre macchine virtuali                                       | __RA__      |                   | 
| Definire la politica di tagging delle vostre macchine virtuali                                                               | __RA__      |                   | 

## Operazioni ricorrenti

### Gestione degli accessi e delle identità

| Attività                                                                                                                            | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare l'accessibilità del servizio Console Cloud Temple e dell'API associata                                                   |             | __RA__            |
| Assicurare l'accessibilità del sistema informativo distribuito sulle vostre macchine virtuali                                       | __RA__      |                   |
| Gestire le autorizzazioni fisiche e logiche delle squadre Cloud Temple alle infrastrutture SecNumCloud.                             |             | __RA__            |
| Amministrare gli accessi e la politica di sicurezza associati all'interfaccia della console Cloud Temple e alla sua API             | __RA__      |                   |
| Amministrare gli accessi e la politica di sicurezza associati al sistema informativo<br/> ospitato all'interno dei vostri tenants Cloud Temple | __RA__      |                   |

### Mantenimento in condizione operativa e di sicurezza

Le attività mirate a mantenere le infrastrutture e i servizi in condizioni operative e sicure 
forniti da Cloud Temple, nel quadro della sua offerta IaaS, sono realizzate con l'obiettivo di conformità alla qualificazione SecNumCloud.

| Attività                                                                                                          | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare il mantenimento in condizione operativa delle infrastrutture **datacenter fisici**                     | __I__       | __RA__            | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **datacenter fisici**                  | __I__       | __RA__            | 
| Assicurare il mantenimento in condizione operativa delle infrastrutture **calcolo**                               | __I__       | __RA__            | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **calcolo (2)**                        | __RA__      | __CI__            | 
| Assicurare il mantenimento in condizione operativa delle infrastrutture **storage**                               | __I__       | __RA__            | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **storage**                            | __I__       | __RA__            | 
| Assicurare il mantenimento in condizione operativa delle infrastrutture **reti backbone**                         | __I__       | __RA__            | 
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture **reti backbone**                      | __I__       | __RA__            |
| Assicurare il mantenimento in condizione operativa delle macchine virtuali distribuite nei tenants cliente **(3)**| __RA__      |                   |
| Assicurare il mantenimento in condizione di sicurezza delle macchine virtuali distribuite nei tenants cliente **(3)**| __RA__      |                   |
| Assurer le maintien en condition opérationnelle des middleswares déployées dans les tenants client                | __RA__      |                   |
| Assurer le maintien en condition de sicurezza des middleswares déployées dans les tenants client                   | __RA__      |                   |

*(2) Cloud Temple fornisce regolarmente le versioni più recenti del sistema operativo per i vostri hypervisor. 
Tuttavia, dato che Cloud Temple non è a conoscenza delle specificità dei vostri ambienti di produzione e delle esigenze 
legate ai vostri carichi di lavoro, __la decisione di procedere con l'aggiornamento del sistema operativo dei vostri hypervisor, 
portando quindi a un riavvio, spetta a voi__. Questa operazione può essere eseguita tramite la console Cloud Temple o l'API.
Sono disponibili servizi professionali se desiderate che Cloud Temple si occupi di alcune operazioni.*

*(3) Cloud Temple offre pacchetti di licenze per firewall (Fortinet, Stormshield) e load balancer (HAProxy), e 
collabora con le vostre squadre per la configurazione iniziale durante la fase di implementazione. Tuttavia, 
la responsabilità del mantenimento in stato operativo e di sicurezza ricade su di voi durante la fase di gestione 
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
| Gestire gli incidenti sulle infrastrutture **storage**                                                                | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **storage**                                                                   |               | __RA__              |
| Gestire le capacità sulle infrastrutture **storage**                                                                  | __RA__        | __CI__              |
| Gestire gli incidenti sulle infrastrutture **rete backbone**                                                          | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **rete backbone**                                                             |               | __RA__              |
| Gestire le capacità sulle infrastrutture **rete backbone**                                                            |               | __RA__              |
| Mettere in atto una nuova macchina virtuale o creare un nuovo ambiente applicativo all'interno di un tenant cliente   | __RA__        |                     |
| Modificare la configurazione delle macchine virtuali distribuite                                                      | __RA__        |                     |
| Eliminare una macchina virtuale distribuita                                                                           | __RA__        |                     |
| Prendere la decisione di aggiungere, modificare o rimuovere risorse sulla piattaforma Cloud Temple                    | __RA__        | __CI__              |
| Eseguire la decisione di modifica delle risorse sulla piattaforma Cloud Temple                                        | __I__         | __RA__              |
| Applicare i tag alle macchine virtuali in conformità alla politica definita                                           | __RA__        |                     |

### Gestione delle prestazioni

| Attività                                                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare la sorveglianza del corretto funzionamento e dell'affidabilità di tutte le attrezzature coinvolte nella fornitura del servizio qualificato SecNumCloud | __I__         | __RA__              |
| Assicurare il monitoraggio delle performance delle risorse fisiche di calcolo, storage e rete messe a disposizione dei vostri tenant __(4)__            | __RI__        | __A__               |
| Monitorare le prestazioni delle macchine virtuali che supportano i vostri ambienti                                                                      | __RA__        | __I__               |

*(4) La piattaforma Cloud Temple adotta una filosofia incentrata sulla __fornitura di infrastrutture dedicate__ per le esigenze di __calcolo__ (con lame fisiche), di __storage__ (tramite LUN dedicate su SAN) 
e di __rete__ (inclusi firewall e load balancer). Queste risorse dedicate sono messe a disposizione del cliente, la cui 
utilizzazione e il carico risultante dipendono direttamente dall'uso che ne fa. Spetta quindi al cliente implementare e gestire i sistemi di supervisione 
e di metrologia necessari per monitorare il funzionamento ottimale del proprio sistema informativo.*

### Gestione del backup e del ripristino delle attività sul backup integrato

| Attività                                                                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare il mantenimento in condizione operativa sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple **(5)**     |               | __RA__              |
| Assicurare il mantenimento in condizione di sicurezza delle infrastrutture di **backup** integrate nella piattaforma Cloud Temple          | __I__         | __RA__              |
| Gestire gli incidenti sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                          | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                             |               | __RA__              |
| Gestire le capacità sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple                                            | __AI__        | __RC__              |
| Assicurare il mantenimento in condizione operativa sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente **(6)**        | __RA__        |                     |
| Assicurare il mantenimento in condizione di sicurezza sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente             | __RA__        |                     |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                             | __RA__        |                     |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                               | __RA__        |                     |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                               | __RA__        | __CI__              |
| Gestire il ciclo di vita delle politiche di backup                                                                                        | __RA__        |                     |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita dei dati                                                       | __RA__        |                     |
| Assicurarsi che i piani di continuità operativa o di ripristino delle attività siano coerenti con il ciclo di vita dei dati               | __RA__        |                     |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                               | __RA__        |                     |
| Effettuare test periodici per valutare l'efficacia della strategia<br/> di ripristino delle attività o di continuità operativa              | __RA__        | __CI__              |

*(5) Al 1° gennaio 2024, la soluzione di backup integrata nella piattaforma Cloud Temple è IBM Spectrum Protect Plus. 
Questa soluzione è completamente automatizzata e può essere gestita tramite la console Cloud Temple o l'API Cloud Temple.*

### Gestione del backup e del ripristino delle attività per piattaforme di terze parti all'interno di un tenant cliente

| Attività                                                                                                                                  | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurarsi del mantenimento in condizioni operative sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente **(6)**     | __RA__      |                   |
| Assicurarsi del mantenimento in condizioni di sicurezza sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente          | __RA__      |                   |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                            | __RA__      |                   |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                               | __RA__      |                   |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                              | __RA__      | __CI__            |
| Gestire il ciclo di vita delle politiche di backup                                                                                        | __RA__      |                   |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                                       | __RA__      |                   |
| Assicurarsi che i piani di continuità operativa o di ripristino dell'attività siano coerenti con il ciclo di vita del dato                | __RA__      |                   |
| Eseguire test periodici per valutare l'efficacia della strategia di backup                                                               | __RA__      |                   |
| Eseguire test periodici per valutare l'efficacia della strategia<br/> di ripristino dell'attività o di continuità operativa              | __RA__      | __CI__            |

*(6) Questo riguarda qualsiasi soluzione di backup aggiuntiva implementata negli ambienti del cliente e gestita da quest'ultimo.
Cloud Temple offre servizi professionali per coloro che desiderano delegare alcune operazioni a Cloud Temple.*

### Gestione della documentazione e del contratto

| Attività                                                                                                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare la gestione commerciale e contrattuale del cliente, inclusa la redazione dei preventivi, la gestione degli ordini e la gestione della fatturazione         | __I__       | __RA__            |
| Assicurarsi del monitoraggio contrattuale del servizio, inclusa la validazione dei preventivi, il monitoraggio delle consegne e la supervisione della fatturazione  | __RA__      | __I__             |
| Assicurare la manutenzione e la disponibilità dell'inventario delle risorse fornite da Cloud Temple relative all'offerta SecNumCloud                                 | __I__       | __RA__            |
| Assicurare la manutenzione e la disponibilità della documentazione tecnica relativa all'offerta SecNumCloud                                                         | __I__       | __RA__            |
| Assicurare il monitoraggio del ciclo di vita delle macchine virtuali distribuite nei vostri ambienti Cloud Temple<br/> tramite la vostra CMDB (Configuration Management Database)    | __RA__      |                   | 
| Mantenere aggiornata la politica di accesso all'interfaccia della console Cloud Temple o all'API Cloud Temple                                                       | __RA__      |                   |

### Gestione dei log

| Attività                                                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Conservare e rendere disponibili i log della piattaforma IaaS Cloud Temple **(7)**                                                  |             | __RA__            |
| Conservare e rendere disponibili i log del sistema informatico<br/> ospitato all'interno dei vostri tenant Cloud Temple              | __RA__      |                   |

*(7) Al primo gennaio 2024, la durata di conservazione dei log della piattaforma è di un anno.*

## Connettività alla rete cliente (mpls, fibra dedicata, ipsec, ...)

| Attività                                                                                          | Ruolo Cliente | Ruolo Cloud Temple |
|---------------------------------------------------------------------------------------------------|-------------|-------------------|
| Abbonarsi a una connettività di rete operatore per accedere a un datacenter fisico Cloud Temple (8)| __RA__      | __CI__            |
| Gestire il piano di indirizzamento IP                                                              | __RA__      | __I__             |
| Gestire gli incidenti sui collegamenti di rete degli operatori cliente                             | __RA__      |                   |
| Gestire i problemi sui collegamenti di rete degli operatori cliente                                | __RA__      | __CI__            |
| Gestire le capacità sui collegamenti di rete degli operatori cliente                               | __RA__      | __CI__            |

*(8) Cloud Temple assume la responsabilità della rete per quanto riguarda la propria infrastruttura backbone, i propri punti di raccolta e i punti di interconnessione datacenter, garantendo così la connettività tra questi punti e la propria rete backbone.
Nell'offerta di hosting in rack fisico, Cloud Temple assume la responsabilità a partire dall'apparecchiatura situata in cima al rack, comunemente chiamata "top of rack".*

## Reversibilità

| Attività                                                                                                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture di destinazione                                                                                                        | __RA__      | __I__             |
| Implementare le operazioni di transizione, che esse implichino un'estrazione manuale, l'uso di API <br/>o qualsiasi altro metodo terzo compatibile con la piattaforma Cloud Temple.             | __RA__      | __I__             |
| Trasferire i dati controllando le ripercussioni della migrazione sulla qualità del servizio fornito <br/>dal sistema informativo del cliente.                                                 | __RA__      |                   | 
| Eseguire lo smantellamento delle configurazioni del Cloud Privato e delle opzioni associate al cliente, <br/>in seguito alla risoluzione del contratto.                                        | __I__       | __RA__            |
| Effettuare la cancellazione sicura dei dati sui supporti di memorizzazione e fornire una certificazione                                                                                       | __I__       | __RA__            |