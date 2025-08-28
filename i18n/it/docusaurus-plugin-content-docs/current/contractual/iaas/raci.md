---
Matrice di responsabilità IaaS
---

Ecco il modello **RACI** che definisce la distribuzione delle responsabilità tra il cliente e Cloud Temple per l'uso delle infrastrutture IaaS di Cloud Temple.

## Definizione dei diversi ruoli

Ecco una riepilogazione dei diversi ruoli del RACI:

| Ruolo         | Descrizione                                                                   |
|---------------|-----------------------------------------------------------------------------|
| (R) Realizza  | __R__elizza il processo                                                                 |
| (A) Approva    | __A__pprova la realizzazione del processo                                             |
| (C) Consulta   | __C__onsultato durante il processo                                                      |
| (I) Informa    | __I__nformato sui risultati del processo (tramite l'outillage, il portale o la posta elettronica) |

## Definisci le tuo bisogno

| Attività                                                                                       | Ruolo Client | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Definire l'architettura globale della piattaforma Cloud Temple                           | **RA**      | **CI**            |
| Definire il numero di tenanti e il numero di zone di disponibilità per ogni tenant       | **RA**      | **CI**            |
| Definire la strategia globale di recupero o continuità aziendale                         | **RA**      | **CI**            |
| Dimensionare correttamente la piattaforma Cloud Temple (calcolo, archiviazione, rete, backup...) | **RA**      | **CI**            |
| Sottoscrivere i servizi con le informazioni necessarie                                   | **RA**      | **I**             |

## Implementazione iniziale dei nostri principi Cloud Temple

| Attività                                                                                                     | Ruolo Client | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare l'implementazione dei **datacenter fisici**                                                      |             | **RA**            |
| Assicurare l'implementazione delle infrastrutture di calcolo                                                     | **I**       | **RA**            |
| Assicurare l'implementazione delle infrastrutture di archiviazione                                                   | **I**       | **RA**            |
| Assicurare l'implementazione della connettività al **backbone di rete (1)**                                       | **I**       | **RA**            |
| Acquisire e mantenere le licenze software essenziali per il funzionamento della piattaforma Cloud Temple |             | **RA**            |
| Implementare la configurazione base dei tuoi tenenti Cloud Temple                                             | **CI**      | **RA**            |
| Implementare la configurazione iniziale per il servizio di backup                                          | **CI**      | **RA**            |
| *(Se applicabile): implementare la configurazione di rete iniziale per i servizi Internet e Firewall  | **CI**      | **RA**            |
| Fornire l'assistenza necessaria per la presa in carico dei tuoi ambienti Cloud Temple                         | **I**       | **RA**            |
| Effettuare gli aggiustamenti di configurazione finale del servizio dopo la consegna                              | **RA**      | **C**             |
| Configurare un database di autenticazione esterno per l'interfaccia Cloud Temple                            | **RA**      | **C**             |
| Creare gli utenti di ciascun tenente nella console Cloud Temple e assegnare i diritti                  | **RA**      |                   |
| Verificare la conformità della piattaforma consegnata con il database SecNumCloud                           | **I**       | **RA**            |
| Verificare la conformità della piattaforma consegnata con le specifiche richieste                               | **RA**      | **CI**            |

*(1) Il backbone di rete costituisce l'infrastruttura centrale di Cloud Temple, offrendo una colonna vertebrale su cui si basano i reti client specifiche, integrate e supportate da questa infrastruttura principale.*

## Integrare il tuo sistema di informazione nei tuoi ambienti Cloud Temple

| Attività                                                                                                      | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Creare, installare, aggiornare le macchine virtuali                                                                       | **RA**      |                   |
| Installare e configurare i software e i middleware sulle macchine virtuali                                              | **RA**      |                   |
| Acquistare e mantenere le licenze ed i diritti di utilizzo per gli sistemi operativi delle macchine virtuali  | **RA**      |                   |
| Configurare il network per ciascuna delle tue macchine virtuali                                                                 | **RA**      |                   |
| Assicurarsi che ogni macchina virtuale sia associata a un piano di backup coerente                                          | **RA**      | **C**             |
| Assicurarsi che ogni macchina virtuale sia associata a un piano di ripristino o continuità aziendale coerente | **RA**      | **C**             |
| Implementare una strategia antivirus sulle tue macchine virtuali                                                        | **RA**      |                   |
| Mettere in atto una soluzione di monitoraggio e metri sulle tue macchine virtuali                                     | **RA**      |                   |
| Definire la politica TAG delle tue macchine virtuali                                                                        | **RA**      |                   |

### Operazioni Ricorrenti

### Gestione degli accessi e delle identità

| Attività                                                                                                                             | Ruolo Client | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare l'accessibilità del servizio Console Cloud Temple e dell'API associata                                                                 |             | **RA**            |
| Assicurare l'accessibilità del sistema d'informazione distribuito sulle macchine virtuali dei clienti                               | **RA**      |                   |
| Gestire le autorizzazioni fisiche ed elettroniche delle squadre Cloud Temple verso le infrastrutture SecNumCloud.                  |             | **RA**            |
| Amministrare gli accessi e la politica di sicurezza correlata all'interfaccia del Console Cloud Temple e alla sua API              | **RA**      |                   |
| Amministrare gli accessi e la politica di sicurezza correlata al sistema d'informazione ospitato nei tenenti Cloud Temple       | **RA**      |                   |

### mantenimento operativo e sicuro

Le compiti principali per mantenere le sistema operativo e la sicurezza delle infrastrutture e dei servizi offerti da Cloud Temple, all'interno del suo piano IaaS, sono realizzati con l'obiettivo di conformità alla qualificazione SecNumCloud.

| Attività                                                                                          | Ruolo Client | Ruolo Cloud Temple |
|----------------------------------------------------------------------------------------------|----------------|-------------------|
| Assicurare il mantenimento operativo delle infrastrutture **datacenters fisici**                     | **I**       | **RA**            |
| Assicurare il mantenimento della sicurezza delle infrastrutture **datacenters fisici**                | **I**       | **RA**            |
| Assicurare il mantenimento operativo delle infrastrutture di calcolo                                    | **I**       | **RA**            |
| Assicurare il mantenimento della sicurezza delle infrastrutture di calcolo (2)                           | **RA**      | **CI**            |
| Assicurare il mantenimento operativo delle infrastrutture di archiviazione                          | **I**       | **RA**            |
| Assicurare il mantenimento della sicurezza delle infrastrutture di archiviazione                     | **I**       | **RA**            |
| Assicurare il mantenimento operativo delle infrastrutture di back-end fisico                          | **I**       | **RA**            |
| Assicurare il mantenimento della sicurezza delle infrastrutture di back-end fisico                 | **I**       | **RA**            |
| Assicurare il mantenimento operativo delle macchine virtuali impiegate nei tenenti client (3)         | **RA**      |                   |
| Assicurare il mantenimento della sicurezza delle macchine virtuali impiegate nei tenenti client (3)    | **RA**      |                   |
| Assicurare il mantenimento operativo dei middlewares impiegati nei tenenti client                    | **RA**      |                   |
| Assicurare il mantenimento della sicurezza dei middlewares impiegati nei tenenti client               | **RA**      |                   |

*(2) Cloud Temple fornisce regolarmente le versioni più recenti del sistema operativo per i vostri hypervisor. Tuttavia, poiché Cloud Temple non è informato delle specificità dei vostri ambienti di produzione e delle esigenze relative alle vostre carichi di lavoro, **la decisione di procedere con la versione aggiornata del sistema operativo per i vostri hypervisor, comportando così un riavvio, vi spetta**. Questa operazione può essere eseguita tramite la console Cloud Temple o tramite l'API. Servizi professionali sono disponibili se desiderate che Cloud Temple gestisca alcune operazioni.*

*(3) Cloud Temple offre pacchetti di licenza per firewall (Fortinet, Stormshield) e load balancer (HAProxy), e collabora con le vostre squadre per la configurazione iniziale durante la fase di implementazione. Tuttavia, la responsabilità del mantenimento operativo e della sicurezza rimane a voi durante la fase di utilizzo corrente. Servizi professionali sono disponibili se desiderate che Cloud Temple gestisca alcune operazioni.*

### Gestione dei cambi, degli incidenti, dei problemi e delle capacità

| Attività                                                                                                | Ruolo Client | Ruolo Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Gestione degli incidenti sulle infrastrutture **datacenters fisici**                                  | **I**       | **RA**            |
| Gestione dei problemi sulle infrastrutture **datacenters fisici**                                  |             | **RA**            |
| Gestione delle capacità sulle infrastrutture **datacenters fisici**                                  |             | **RA**            |
| Gestione degli incidenti sulle infrastrutture **calcolo**                                             | **I**       | **RA**            |
| Gestione dei problemi sulle infrastrutture **calcolo**                                             |             | **RA**            |
| Gestione delle capacità sulle infrastrutture **calcolo**                                             | **RA**      | **CI**            |
| Gestione degli incidenti sulle infrastrutture **storage**                                               | **I**       | **RA**            |
| Gestione dei problemi sulle infrastrutture **storage**                                               |             | **RA**            |
| Gestione delle capacità sulle infrastrutture **storage**                                               | **RA**      | **CI**            |
| Gestione degli incidenti sulle infrastrutture **backbone di rete**                                   | **I**       | **RA**            |
| Gestione dei problemi sulle infrastrutture **backbone di rete**                                   |             | **RA**            |
| Gestione delle capacità sulle infrastrutture **backbone di rete**                                   |             | **RA**            |
| Creazione di una nuova macchina virtuale o creazione di un ambiente applicativo all'interno di un tenant client | **RA**      |                   |
| Modifica della configurazione delle macchine virtuali in esecuzione                                                           | **RA**      |                   |
| Rimozione di una macchina virtuale in esecuzione                                                                  | **RA**      |                   |
| Prenda la decisione di aggiungere, modificare o rimuovere le risorse sulla piattaforma Cloud Temple          | **RA**      | **CI**            |
| Applica la decisione di modifica delle risorse sulla piattaforma Cloud Temple                                  | **I**       | **RA**            |
| Applicazione dei tag alle macchine virtuali in conformità della politica definita                          | **RA**      |                   |

### Gestione della performance

| Attività                                                                                                                                              | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare la sorveglianza del corretto funzionamento e della affidabilità di tutti gli impianti coinvolti nella fornitura del servizio qualificato SecNumCloud | **I**       | **RA**            |
| Assicurare il monitoraggio delle prestazioni delle risorse fisiche di calcolo, archiviazione e rete disponibili ai propri tenant **(4)**                  | **RI**      | **A**             |
| Supervisionare le prestazioni delle macchine virtuali che supportano gli ambienti                                                                 | **RA**      | **I**             |

*(4) La piattaforma Cloud Temple adotta una filosofia centrata sulla fornitura di infrastrutture dedicate per i bisogni di **calcolo** (con lame fisiche), di **archiviazione** (tramite LUNs dedicate su SAN) e di **rete** (compresi firewall e distribuitori di carico). Queste risorse dedicate sono messe a disposizione del cliente, la cui utilizzo e carico residuo dipendono direttamente dal modo in cui utilizza il sistema. È quindi responsabilità del cliente di implementare e gestire i sistemi di monitoraggio e metri necessari per garantire il corretto funzionamento del proprio sistema informativo.*

### Gestione della backup e ripristino integrato con la soluzione di backup fornita dalla piattaforma Cloud Temple

| Attività                                                                 | Ruolo Client | Ruolo Cloud Temple |
|-------------------------------------------------------------------|-------------|------------------|
| Mantenere le sistemi operativi in condizioni di funzionamento sulle infrastrutture di backup integrate nella piattaforma Cloud Temple (5) |             | RA               |
| Garantire la sicurezza delle infrastrutture di backup integrate nella piattaforma Cloud Temple                               | I          | RA               |
| Gestione degli incidenti sulle infrastrutture di backup integrate nella piattaforma Cloud Temple                           | I          | RA               |
| Gestione dei problemi sulle infrastrutture di backup integrate nella piattaforma Cloud Temple                           |             | RA               |
| Gestione delle capacità sulle infrastrutture di backup integrate nella piattaforma Cloud Temple                           | AI        | RC               |
| Mantenere le sistemi di backup funzionanti in condizioni di funzionamento all'interno dei tenetti del cliente (6)              | RA         |                  |
| Garantire la sicurezza sul sistema di backup scelto all'interno dei tenetti del cliente                                       | RA         |                  |
| Gestione degli incidenti sul sistema di backup scelto all'interno dei tenetti del cliente                                        | RA         |                  |
| Gestione dei problemi sul sistema di backup scelto all'interno dei tenetti del cliente                                        | RA         |                  |
| Gestione delle capacità sul sistema di backup scelto all'interno dei tenetti del cliente                                        | RA         | CI               |
| Gestione del ciclo vitale delle politiche di backup                                                                     | RA         |                  |
| Assicurarsi che le politiche di backup siano coerenti con il ciclo vitale della data                                                        | RA         |                  |
| Assicurarsi che i piani di continuità aziendale o ripristino d'attività siano coerenti con il ciclo vitale della data          | RA         |                  |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                                  | RA         |                  |
| Effettuare test periodici per valutare l'efficacia dei piani di continuità aziendale o ripristino d'attività                | RA         | CI               |

*(5) A partire dal 1° gennaio 2024, la soluzione di backup integrata nella piattaforma Cloud Temple è IBM Spectrum Protect Plus. Questa soluzione è completamente automatizzata e può essere gestita tramite la console Cloud Temple o l'API Cloud Temple.*

| Attività                                                                 | Ruolo Client | Ruolo Cloud Tempio |
|---------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare il funzionamento in condizioni operative della soluzione di backup scelta all'interno dei tenanti del cliente **(6)**       | **RA**      |                   |
| Assicurare la sicurezza della soluzione di backup scelta all'interno dei tenanti del cliente                  | **RA**      |                   |
| Gestire gli incidenti sulla soluzione di backup scelta all'interno dei tenanti del cliente                                            | **RA**      |                   |
| Gestire i problemi sulla soluzione di backup scelta all'interno dei tenanti del cliente                                            | **RA**      |                   |
| Gestire le livelli di capacità della soluzione di backup scelta all'interno dei tenanti del cliente                                            | **RA**      | **CI**            |
| Gestire il ciclo di vita delle politiche di backup                                                                                      | **RA**      |                   |
| Assicurare che le politiche di backup siano coerenti con il ciclo di vita della data                                              | **RA**      |                   |
| Assicurare che i piani di continuità aziendale o di ripristino delle attività siano coerenti con il ciclo di vita della data                | **RA**      |                   |
| Effettuare test periodici per valutare l'efficacia della strategia di backup                                                                  | **RA**      |                   |
| Effettuare test periodici per valutare l'efficacia dei piani di ripristino delle attività o di continuità aziendale          | **RA**      | **CI**            |

*(6) Ciò si riferisce a qualsiasi soluzione di backup aggiuntiva implementata negli ambienti del cliente e gestita da quest'ultimo.*
Cloud Tempio offre servizi professionali per coloro che desiderano delegare alcune operazioni a Cloud Tempio.

### Gestione della documentazione e del contrat

| Attività                                                                                                                                                        | Ruolo Client | Ruolo Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Assicurare la gestione commerciale e contrattuale del cliente, incluso l'esecuzione di preventivi, il trattamento delle ordini e la gestione delle fatture       | **I**       | **RA**            |
| Assicurare il monitoraggio contrattuale della fornitura, inclusa la validazione dei preventivi, il monitoraggio delle consegne e la sorveglianza delle fatture   | **RA**      | **I**             |
| Assicurare la manutenzione e l'accessibilità dell'inventario delle risorse fornite da Cloud Temple relative all'offerta SecNumCloud                          | **I**       | **RA**            |
| Assicurare la manutenzione e la disponibilità della documentazione tecnica relativa all'offerta SecNumCloud                                                    | **I**       | **RA**            |
| Assicurare il monitoraggio del ciclo di vita delle macchine virtuali impiegate nei tuoi ambienti Cloud Temple tramite il tuo CMDB (Configuration Management Database) | **RA**      |                   |
| Mantenere aggiornata la politica di accesso all'interfaccia della console Cloud Temple o all'API Cloud Temple                                                          | **RA**      |                   |

### Gestione dei log

| Attività                                                                                                | Ruolo Client | Ruolo Cloud Temple |
|---------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Conservare e renderizzare i log della piattaforma IaaS Cloud Temple **(7)**                             |             | RA               |
| Conservare e renderizzare i log del sistema d'informazione ospitato all'interno dei tuoi tenenti Cloud Temple | RA          |                 |

*(7) A partire dal 1° gennaio 2024, la durata di conservazione dei log della piattaforma è di un anno.*

## Connettività al rete client (MPLS, fibra ottica dedicata, IPSec, ...)

| Attività                                                                                             | Ruolo Client | Ruolo Cloud Temple |
|------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Sottoscrivere una connettività di rete operatore per accedere a un datacenter fisico Cloud Temple (8) | **RA**      | **CI**            |
| Gestire il piano di indirizzamento IP                                                                 | **RA**      | **I**             |
| Gestire gli incidenti sui link di rete operatore client                                                      | **RA**      |                   |
| Gestire i problemi sui link di rete operatore client                                                      | **RA**      | **CI**            |
| Gestire le capacità sui link di rete operatore client                                                      | **RA**      | **CI**            |

*(8) Cloud Temple assume la responsabilità della connettività relativa alla sua infrastruttura backbone, ai punti di raccolta e agli interconnessioni datacenter, garantendo così la connessione tra questi punti e il suo backbone. Nell'offerta di hosting in baia fisica, Cloud Temple assume la responsabilità a partire dall'equipaggiamento situato sopra il rack, comunement chiamato "top of rack".*

## Reversibilità

| Attività                                                                                                                                                                                       | Ruolo Client | Ruolo Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------????--------------------------------------------------------------------------------------------------------------------------------????  | RA          | I                  |
| Pianificare il progetto di reversibilità e scegliere le infrastrutture obiettivo                                                                                                                     | **RA**      | **I**             |
| Implementare le operazioni di transizione, che possono includere estrazione manuale, l'utilizzo di API o qualsiasi altro metodo terzo compatibile con la piattaforma Cloud Temple. | **RA**      | **I**             |
| Trasferire i dati controllando le ripercussioni della migrazione sulla qualità del servizio fornito dal sistema informativo del cliente.                                      | **RA**      |                  |
| Effettuare il dismantamento delle configurazioni Cloud Privato e delle opzioni associate al cliente, in seguito alla risoluzione del contratto.                                                  | **I**       | **RA**            |
| Realizzare la cancellazione sicura dei dati su supporti di archiviazione e fornire un attestato                                                                                             | **I**       | **RA**            |