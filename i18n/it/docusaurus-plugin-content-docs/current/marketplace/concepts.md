---
title: Concetti
---

<a id="définition-et-positionnement"></a>

## Presentazione

La **Marketplace Cloud Temple** è una piattaforma centralizzata che facilita l'accesso e la distribuzione di soluzioni cloud pronte all'uso: immagini di macchine virtuali da distribuire nei vostri ambienti Cloud Temple, servizi gestiti e soluzioni SaaS dei partner.

La Marketplace Cloud Temple si posiziona come una leva di trasformazione digitale per le aziende alla ricerca di servizi affidabili, con un'integrazione semplice e rapida.

Consente di:

- **Centralizzare** l'accesso alle soluzioni dei partner selezionate da Cloud Temple
- **Semplificare** la distribuzione di ambienti cloud
- **Accelerare** l'implementazione di progetti digitali
- **Distribuire** nei vostri ambienti Cloud Temple, che possiedono le proprie qualifiche; la sicurezza delle macchine distribuite rimane di vostra responsabilità

Si rivolge alle team IT e DevOps che costruiscono i propri ambienti Cloud Temple, inclusi i settori regolamentati, nonché alle direzioni operative alla ricerca di soluzioni SaaS di editori partner.

## Vantaggi

| Vantaggio | Descrizione |
|---|---|
| Accesso centralizzato | Immagini, servizi gestiti e soluzioni SaaS dei partner riuniti in un unico catalogo, consultabile dalla Console Cloud Temple. |
| Distribuzione rapida | Le immagini di macchine virtuali si distribuiscono direttamente nei vostri ambienti, in pochi minuti nella maggior parte dei casi. |
| Soluzioni dei partner | Accesso alle soluzioni di editori partner e messa in contatto diretta con questi. |
| Integrazione con la Console | La Marketplace si utilizza dall'interfaccia di gestione abituale, senza strumenti aggiuntivi. |

## Funzionalità

| Funzionalità | Descrizione |
|---|---|
| Immagini di macchine virtuali | Immagini preconfigurate da distribuire su OpenIaaS, VMware o VM Instances, a seconda delle destinazioni compatibili di ciascuna immagine: vedere la [guida di avvio](./quickstart.md). |
| Servizi gestiti | Servizi operati per voi, presentati nel catalogo. |
| Soluzioni SaaS dei partner | Soluzioni di editori partner, accessibili dal catalogo. |
| Messa in contatto | Contatto diretto con l'editore di una soluzione dalla sua scheda. |
| Catalogo pubblico | L'elenco aggiornato delle soluzioni è disponibile nel [catalogo Marketplace del sito Cloud Temple](https://www.cloud-temple.com/marketplace/). |

<a id="intégration-avec-lécosystème-cloud-temple"></a>

## Architettura

### Console Cloud Temple

La Marketplace è integrata nativamente nella console Cloud Temple, offrendo:

- **Accesso unificato** dall'interfaccia di gestione abituale
- **Distribuzione diretta** delle immagini di macchine virtuali sulle vostre infrastrutture esistenti
- **Gestione centralizzata** delle macchine virtuali così distribuite

### Compatibilità con i servizi

A seconda delle destinazioni compatibili di ciascuna immagine, le immagini di macchine virtuali della Marketplace si distribuiscono nei seguenti ambienti:

- **IaaS OpenSource**: distribuzione su infrastruttura OpenIaaS
- **IaaS VMware**: integrazione con l'ambiente vSphere
- **VM Instances**: distribuzione dalla Marketplace o dal catalogo integrato nell'assistente di creazione; vedere il [tutorial VM Instance](./tutorials/deploy_vminstance.md)

## Regioni e zone di disponibilità

Le immagini di macchine virtuali si distribuiscono nella regione e nelle zone di disponibilità del vostro ambiente Cloud Temple (regione FR1). Per i servizi gestiti e le soluzioni SaaS, la localizzazione è propria di ciascuna offerta e figura sulla sua scheda.

<a id="types-de-solutions-disponibles"></a>

## Caratteristiche tecniche

Il catalogo riunisce immagini di macchine virtuali, servizi gestiti e soluzioni SaaS di editori partner. Si arricchisce in modo continuo: le soluzioni presentate qui sono solo degli esempi e l'elenco aggiornato figura nel [catalogo Marketplace del sito Cloud Temple](https://www.cloud-temple.com/marketplace/).

### Virtual Machine Images

Le immagini di macchine virtuali costituiscono il cuore attuale del prodotto Marketplace. Queste immagini preconfigurate consentono una distribuzione rapida di ambienti standardizzati.

**Caratteristiche:**

- Immagini verificate e validate da Cloud Temple prima della pubblicazione
- Distribuzione su OpenIaaS, VMware o VM Instances, a seconda delle destinazioni compatibili di ciascuna immagine
- Distribuzione in pochi minuti in genere, a seconda dell'immagine e dell'ambiente
- Integrazione nativa con la console Cloud Temple

### Soluzioni dei partner

La Marketplace propone anche l'accesso a soluzioni sviluppate dai nostri partner editori, che coprono diversi ambiti di attività.

**Processo di accesso:**

- Consultazione del catalogo dalla console
- Messa in contatto diretta con il partner
- A seconda dell'offerta, distribuzione nei vostri ambienti Cloud Temple o accesso al servizio SaaS operato dall'editore

### Limiti

- Il catalogo evolve in modo continuo: le soluzioni descritte in questa pagina sono degli esempi.
- L'aggiornamento delle soluzioni dei partner è di competenza dei rispettivi editori, così come i tempi di risposta alle richieste di contatto.

## Sicurezza e conformità

### Hosting e qualifiche

L'hosting e le qualifiche dipendono dal tipo di soluzione:

- **Immagini di macchine virtuali**: si distribuiscono nei vostri ambienti Cloud Temple e sono soggette alle loro qualifiche.
- **Servizi gestiti e soluzioni SaaS**: il loro hosting e le loro certificazioni sono propri di ciascuna offerta. Consultate le informazioni della sua scheda nel [catalogo Marketplace del sito](https://www.cloud-temple.com/marketplace/) e, per qualsiasi precisazione, contattate l'editore.

### Validazione delle soluzioni

Cloud Temple seleziona le soluzioni proposte nella Marketplace. Prima della pubblicazione, un'immagine di macchina virtuale viene verificata (file e metadati) e poi validata da Cloud Temple. Questa validazione non sostituisce la sicurezza delle macchine distribuite, che rimane di vostra responsabilità. Per una soluzione partner, l'editore rimane responsabile del suo contenuto e dei suoi aggiornamenti.

## Responsabilità

Il supporto della Marketplace stessa (catalogo, distribuzione delle immagini) è di competenza del supporto della Console Cloud Temple. Ciascuna offerta ha poi le proprie condizioni di supporto: quelle del servizio per un'offerta di Cloud Temple, quelle dell'editore per una soluzione partner, che assicura anche i suoi aggiornamenti e i suoi tempi di risposta. Le macchine virtuali distribuite dalla Marketplace sono risorse del vostro ambiente IaaS: vedere la [matrice delle responsabilità (RACI) IaaS](../contractual/iaas/raci.md).

## Reversibilità

- **Immagini di macchine virtuali**: le macchine distribuite sono risorse del vostro ambiente IaaS; la loro reversibilità segue quella dell'offerta interessata, IaaS OpenSource o IaaS VMware.
- **Soluzioni dei partner**: le condizioni di uscita sono quelle dell'editore, indicate da quest'ultimo.

## Tariffazione

La Marketplace non ha un costo proprio. Pagate l'infrastruttura su cui distribuite un'immagine e, a seconda dell'offerta scelta, la licenza o il servizio, fornito da Cloud Temple o da un partner, secondo le sue condizioni tariffarie. Il dettaglio di ciascuna offerta figura nel [catalogo Marketplace del sito Cloud Temple](https://www.cloud-temple.com/marketplace/).
