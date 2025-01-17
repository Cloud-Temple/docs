---
title: Matrice di responsabilità IaaS
---

Ecco il modello **RACI** che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'utilizzo delle infrastrutture IaaS di Cloud Temple.

## Definizione dei diversi ruoli

Ricordiamo qui i diversi ruoli del RACI:

| Ruolo         | Descrizione                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| (R) Realizza  | __R__ealizza il processo                                                              |
| (A) Approva   | __A__pprova la realizzazione del processo                                             |
| (C) Consulta  | __C__onsultato durante il processo                                                    |
| (I) Informato | __I__nformato dei risultati del processo (via strumenti, portale o messaggistica)     |

## Definizione della vostra esigenza

| Attività                                                                                             | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Definire l'architettura globale della vostra piattaforma Cloud Temple                                 | __RA__      | __CI__            | 
| Definire il numero di tenant e il numero di zone di disponibilità per ciascun tenant                  | __RA__      | __CI__            | 
| Definire la vostra strategia globale di ripresa o di continuità operativa                             | __RA__      | __CI__            | 
| Dimensionare correttamente la vostra piattaforma Cloud Temple (calcolo, storage, rete, backup,...)   | __RA__      | __CI__            | 
| Sottoscrivere i servizi con le informazioni necessarie                                                | __RA__      | __I__             | 

## Implementazione iniziale dei vostri tenant Cloud Temple

| Attività                                                                                                      | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire l'implementazione dei **datacenter fisici**                                                        |             | __RA__            | 
| Garantire l'implementazione delle infrastrutture di **calcolo**                                              | __I__       | __RA__            | 
| Garantire l'implementazione delle infrastrutture di **storage**                                              | __I__       | __RA__            | 
| Garantire l'implementazione della connettività alla **rete backbone(1)**                                     | __I__       | __RA__            | 
| Acquisire e mantenere le licenze software essenziali per il funzionamento della piattaforma Cloud Temple     |             | __RA__            | 
| Implementare la configurazione di base dei vostri tenant Cloud Temple                                        | __CI__      | __RA__            | 
| Implementare la configurazione iniziale per il servizio di backup                                            | __CI__      | __RA__            |
| *Se sottoscritti:* implementare la configurazione iniziale di rete per i servizi Internet e Firewall         | __CI__      | __RA__            |
| Offrire l'assistenza necessaria per prendere confidenza con i vostri ambienti Cloud Temple                    | __I__       | __RA__            | 
| Effettuare gli aggiustamenti di configurazione finali del servizio dopo la sua consegna                      | __RA__      | __C__             | 
| Configurare un repository di autenticazione esterno per la console di Cloud Temple                           | __RA__      | __C__             | 
| Creare gli utenti di ciascun tenant nella console Cloud Temple e assegnare i diritti                         | __RA__      |                   | 
| Validare la conformità della piattaforma consegnata con il framework SecNumCloud                             | __I__       | __RA__            |
| Validare la conformità della piattaforma consegnata con le specifiche richieste                              | __RA__      | __CI__            |

*(1) La rete backbone costituisce l'infrastruttura centrale di Cloud Temple, offrendo una spina dorsale su cui 
si basano le reti clienti specifiche, le quali sono integrate e supportate da questa infrastruttura principale.*

## Integrare il vostro sistema informativo nei vostri ambienti Cloud Temple

| Attività                                                                                                                     | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Creare, installare e aggiornare le vostre macchine virtuali                                                                  | __RA__      |                   | 
| Installare e configurare i software e middlewares sulle vostre macchine virtuali                                             | __RA__      |                   | 
| Acquistare e possedere licenze e diritti di utilizzo <br/>per i sistemi operativi delle vostre macchine virtuali            | __RA__      |                   | 
| Configurare la rete per ciascuna delle vostre macchine virtuali                                                              | __RA__      |                   |
| Assicurarsi che ciascuna macchina virtuale sia associata a un piano di backup coerente                                       | __RA__      | __C__             | 
| Assicurarsi che ciascuna macchina virtuale sia associata a un <br/>piano di ripresa o continuità operativa coerente          | __RA__      | __C__             | 
| Implementare una strategia di protezione antivirus sulla vostra macchina virtuale                                            | __RA__      |                   | 
| Implementare una soluzione di monitoraggio e sorveglianza sulle vostre macchine virtuali                                     | __RA__      |                   | 
| Definire la politica di TAG delle vostre macchine virtuali                                                                   | __RA__      |                   | 

## Operazioni ricorrenti

### Gestione degli accessi e delle identità

| Attività                                                                                                                       | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare l'accessibilità del servizio Console Cloud Temple e dell'API associata                                              |             | __RA__            |
| Assicurare l'accessibilità del sistema informativo distribuito sulle vostre macchine virtuali                                  | __RA__      |                   |
| Gestire le abilitazioni fisiche e logiche del team Cloud Temple sulle infrastrutture SecNumCloud                               |             | __RA__            |
| Amministrare gli accessi e la politica di sicurezza associata all'interfaccia della console Cloud Temple e alla sua API        | __RA__      |                   |
| Amministrare gli accessi e la politica di sicurezza associata al sistema informativo<br/> ospitato all'interno dei vostri tenant Cloud Temple | __RA__      |                   |

### Manutenzione in condizioni operative e di sicurezza

Le attività volte a mantenere in condizioni operative e sicure le infrastrutture e i servizi 
offerti da Cloud Temple, nell'ambito della sua offerta IaaS, sono svolte nell'obiettivo di conformità alla qualificazione SecNumCloud.

| Attività                                                                                                         | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Garantire la manutenzione in condizioni operative delle infrastrutture dei **datacenter fisici**                  | __I__       | __RA__            | 
| Garantire la manutenzione in condizioni di sicurezza delle infrastrutture dei **datacenter fisici**               | __I__       | __RA__            | 
| Garantire la manutenzione in condizioni operative delle infrastrutture di **calcolo**                             | __I__       | __RA__            | 
| Garantire la manutenzione in condizioni di sicurezza delle infrastrutture di **calcolo (2)**                      | __RA__      | __CI__            | 
| Garantire la manutenzione in condizioni operative delle infrastrutture di **storage**                              | __I__       | __RA__            | 
| Garantire la manutenzione in condizioni di sicurezza delle infrastrutture di **storage**                          | __I__       | __RA__            | 
| Garantire la manutenzione in condizioni operative delle infrastrutture della **rete backbone**                    | __I__       | __RA__            | 
| Garantire la manutenzione in condizioni di sicurezza delle infrastrutture della **rete backbone**                  | __I__       | __RA__            |
| Garantire la manutenzione in condizioni operative delle macchine virtuali distribuite nei tenant cliente **(3)**  | __RA__      |                   |
| Garantire la manutenzione in condizioni di sicurezza delle macchine virtuali distribuite nei tenant cliente **(3)** | __RA__      |                   |
| Assurer le maintien en condition opérationnelle des middleware déployées dans les tenants client                | __RA__      |                   |
| Assurer le maintien en condition de sécurité des middleware déployées dans les tenants client                   | __RA__      |                   |

*(2) Cloud Temple fornisce regolarmente le versioni più recenti del sistema operativo per i tuoi hypervisor.
Tuttavia, dal momento che Cloud Temple non è a conoscenza delle specificità dei tuoi ambienti di produzione e delle esigenze
legate ai tuoi carichi di lavoro, __la decisione di procedere all'aggiornamento del sistema operativo dei tuoi hypervisor, causando quindi un riavvio, spetta a te__. Questa operazione può essere eseguita tramite la console Cloud Temple o tramite l'API. Sono disponibili servizi professionali se desideri che Cloud Temple si occupi di alcune operazioni.*

*(3) Cloud Temple offre pacchetti di licenze per firewall (Fortinet, Stormshield) e bilanciatori di carico (HAProxy), e
collabora con i tuoi team per la configurazione iniziale durante la fase di implementazione. Tuttavia,
la responsabilità del mantenimento in condizioni operative e di sicurezza spetta a te durante la fase operativa
corrente. Sono disponibili servizi professionali se desideri che Cloud Temple si occupi di alcune operazioni.*

### Gestione dei cambiamenti, degli incidenti, dei problemi e delle capacità

| Attività                                                                                                              | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Gestire gli incidenti sulle infrastrutture **datacenters fisici**                                                     | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **datacenters fisici**                                                        |               | __RA__              |
| Gestire le capacità sulle infrastrutture **datacenters fisici**                                                       |               | __RA__              |
| Gestire gli incidenti sulle infrastrutture **calcolo**                                                                | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **calcolo**                                                                   |               | __RA__              |
| Gestire le capacità sulle infrastrutture **calcolo**                                                                  | __RA__        | __CI__              |
| Gestire gli incidenti sulle infrastrutture **storage**                                                                | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **storage**                                                                   |               | __RA__              |
| Gestire le capacità sulle infrastrutture **storage**                                                                  | __RA__        | __CI__              |
| Gestire gli incidenti sulle infrastrutture **rete backbone**                                                          | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **rete backbone**                                                             |               | __RA__              |
| Gestire le capacità sulle infrastrutture **rete backbone**                                                            |               | __RA__              |
| Configurare una nuova macchina virtuale o creare un nuovo ambiente applicativo all'interno di un tenant client        | __RA__        |                     |
| Modificare la configurazione delle macchine virtuali distribuite                                                      | __RA__        |                     |
| Eliminare una macchina virtuale distribuita                                                                           | __RA__        |                     |
| Decidere di aggiungere, modificare o rimuovere risorse sulla piattaforma Cloud Temple                                 | __RA__        | __CI__              |
| Eseguire la decisione di modifica delle risorse sulla piattaforma Cloud Temple                                        | __I__         | __RA__              |
| Applicare i tag alle macchine virtuali in conformità con la politica definita                                         | __RA__        |                     |

### Gestione delle performance

| Attività                                                                                                                                               | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare la sorveglianza del buon funzionamento e dell'affidabilità di tutti gli apparecchi coinvolti nella prestazione del servizio qualificato SecNumCloud | __I__         | __RA__              |
| Assicurare il monitoraggio delle performance delle risorse fisiche di calcolo, storage e rete messe a disposizione dei tuoi tenant __(4)__              | __RI__        | __A__               |
| Supervisionare le performance delle macchine virtuali che supportano i tuoi ambienti                                                                    | __RA__        | __I__               |

*(4) La piattaforma Cloud Temple adotta una filosofia incentrata su __la fornitura di infrastrutture dedicate__ per le esigenze di __calcolo__ (con blade fisici), di __storage__ (tramite LUN dedicate sui SAN) 
e di __rete__ (inclusi firewall e bilanciatori di carico). Queste risorse dedicate sono messe a disposizione del cliente, il cui utilizzo 
e il carico risultante dipendono direttamente dall'uso che ne fa. Spetta quindi al cliente implementare e gestire i sistemi di supervisione 
e metrologia necessari per garantire il monitoraggio del funzionamento ottimale del proprio sistema informativo.*

### Gestione del backup e del ripristino dell'attività tramite il backup integrato

| Attività                                                                                                                                   | Ruolo Cliente | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare il mantenimento in condizioni operative sulle infrastrutture di **backup** integrate nella piattaforma Cloud Temple **(5)**     |               | __RA__              |
| Assicurare il mantenimento in condizioni di sicurezza delle infrastrutture di **backup** integrate nella piattaforma Cloud Temple          | __I__         | __RA__              |
| Gestire gli incidenti sulle infrastrutture **backup** integrate nella piattaforma Cloud Temple                                             | __I__         | __RA__              |
| Gestire i problemi sulle infrastrutture **backup** integrate nella piattaforma Cloud Temple                                                |               | __RA__              |
| Gestire le capacità sulle infrastrutture **backup** integrate nella piattaforma Cloud Temple                                               | __AI__        | __RC__              |
| Assicurare il mantenimento in condizioni operative sulla soluzione di backup scelta all'interno dei propri tenant dal cliente **(6)**      | __RA__        |                     |
| Assicurare il mantenimento in condizioni di sicurezza sulla soluzione di backup scelta all'interno dei propri tenant dal cliente            | __RA__        |                     |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                           | __RA__        |                     |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                              | __RA__        |                     |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei propri tenant dal cliente                                             | __RA__        | __CI__              |
| Gestire il ciclo di vita delle politiche di backup                                                                                        | __RA__        |                     |
| Garantire che le politiche di backup siano coerenti con il ciclo di vita dei dati                                                          | __RA__        |                     |
| Garantire che i piani di continuità operativa o di ripristino dell'attività siano coerenti con il ciclo di vita dei dati                   | __RA__        |                     |
| Eseguire test periodici per valutare l'efficacia della strategia di backup                                                                 | __RA__        |                     |
| Eseguire test periodici per valutare l'efficacia della strategia<br/> di ripristino dell'attività o di continuità operativa                | __RA__        | __CI__              |

*(5) Al 1° gennaio 2024, la soluzione di backup integrata nella piattaforma Cloud Temple è IBM Spectrum Protect Plus.
Questa soluzione è completamente automatizzata e può essere gestita tramite la console Cloud Temple o l'API Cloud Temple.*

### Gestione del backup e del ripristino dell'attività per le piattaforme di terze parti all'interno di un tenant client

| Attività                                                                                                                                   | Ruolo Cliente | Ruolo Cloud Temple |

|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare il mantenimento in condizioni operative sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente **(6)**       | __RA__      |                   |
| Assicurare il mantenimento in condizioni di sicurezza sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente            | __RA__      |                   |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                             | __RA__      |                   |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                               | __RA__      |                   |
| Gestire le capacità sulla soluzione di backup scelta all'interno dei suoi tenant dal cliente                                              | __RA__      | __CI__            |
| Gestire il ciclo di vita delle politiche di backup                                                                                         | __RA__      |                   |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo di vita del dato                                                       | __RA__      |                   |
| Assicurarsi che i piani di continuità operativa o di ripristino dell'attività siano coerenti con il ciclo di vita del dato                | __RA__      |                   |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                              | __RA__      |                   |
| Effettuare test periodici per valutare l'efficacia della strategia<br/>di ripristino dell'attività o di continuità operativa               | __RA__      | __CI__            |

*(6) Questo riguarda qualsiasi soluzione di backup aggiuntiva implementata negli ambienti del cliente e gestita da quest'ultimo. 
Cloud Temple offre servizi professionali per coloro che desiderano delegare alcune operazioni a Cloud Temple.*

### Gestione della documentazione e del contratto

| Attività                                                                                                                                                        | Ruolo Cliente | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Assicurare la gestione commerciale e contrattuale del cliente, incluso l'istituzione di preventivi, il trattamento degli ordini e la gestione della fatturazione | __I__         | __RA__              |
| Assicurare il monitoraggio contrattuale del servizio, incluso la validazione dei preventivi, il monitoraggio delle consegne e la sorveglianza della fatturazione | __RA__        | __I__               |
| Assicurare la manutenzione e la disponibilità dell'inventario delle risorse fornite da Cloud Temple relativamente all'offerta SecNumCloud                        | __I__         | __RA__              |
| Assicurare la manutenzione e la messa a disposizione della documentazione tecnica relativa all'offerta SecNumCloud                                               | __I__         | __RA__              |
| Assicurare il monitoraggio del ciclo di vita delle macchine virtuali distribuite nei vostri ambienti Cloud Temple<br/> tramite il vostro CMDB (Configuration Management Database) | __RA__         |                   |
| Mantenere aggiornata la politica di accesso all'interfaccia della console Cloud Temple o all'API Cloud Temple                                                    | __RA__         |                   |

### Gestione dei log

| Attività                                                                                                               | Ruolo Cliente | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Conservare e mettere a disposizione i log della piattaforma IaaS Cloud Temple **(7)**                                  |               | __RA__              |
| Conservare e mettere a disposizione i log del sistema informativo<br/> ospitato all'interno dei vostri tenant Cloud Temple | __RA__     |                     |

*(7) Al primo gennaio 2024, la durata di conservazione dei log della piattaforma è di un anno.*

## Connettività alla rete client (mpls, fibra dedicata, ipsec, ...)

| Attività                                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------------|---------------|---------------------|
| Sottoscrivere una connettività di rete operatore per accedere a un data center fisico Cloud Temple (8) | __RA__       | __CI__              |
| Gestire il piano di indirizzamento IP                                                               | __RA__       | __I__               |
| Gestire gli incidenti sui collegamenti di rete degli operatori cliente                               | __RA__       |                     |
| Gestire i problemi sui collegamenti di rete degli operatori cliente                                  | __RA__       | __CI__              |
| Gestire le capacità sui collegamenti di rete degli operatori cliente                                 | __RA__       | __CI__              |

*(8) Cloud Temple assume la responsabilità della rete riguardante la sua infrastruttura backbone, i suoi punti di raccolta nonché 
i punti di interconnessione del datacenter, garantendo così la connettività tra questi punti e la sua rete backbone. 
Nell'offerta di hosting in bay fisico, Cloud Temple assume la responsabilità a partire dall'attrezzatura situata in cima al rack, comunemente chiamata "top of rack".*

## Reversibilità

| Attività                                                                                                                                                           | Ruolo Cliente | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------------|
| Pianificare il progetto di reversibilità e scegliere le infrastrutture di destinazione                                                                            | __RA__        | __I__               |
| Eseguire le operazioni di transizione, che implicano un'estrazione manuale, l'uso di API<br/> o qualsiasi altro metodo compatibile con la piattaforma Cloud Temple | __RA__        | __I__               |
| Trasferire i dati controllando allo stesso tempo le ripercussioni della migrazione sulla qualità del servizio fornito<br/> dal sistema informativo del cliente      | __RA__        |                     |
| Procedere allo smantellamento delle configurazioni del Cloud Privato e delle opzioni associate al cliente,<br/> in seguito alla risoluzione del contratto          | __I__         | __RA__              |
| Eseguire la cancellazione sicura dei dati sui supporti di memorizzazione e fornire una certificazione                                                              | __I__         | __RA__              |