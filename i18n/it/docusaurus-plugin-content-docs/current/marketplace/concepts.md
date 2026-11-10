---
title: Concetti
---

<a id="definizione-e-posizionamento"></a>

## Presentazione

La **Marketplace Cloud Temple** è una piattaforma centralizzata che facilita l'accesso e il deployment di soluzioni cloud pronte all'uso: immagini di macchine virtuali da distribuire nei vostri ambienti Cloud Temple, servizi gestiti e soluzioni SaaS di partner.

La Marketplace Cloud Temple si posiziona come una leva di trasformazione digitale per le aziende alla ricerca di servizi affidabili, con un'integrazione semplice e rapida.

Consente di:

- **Centralizzare** l'accesso alle soluzioni partner selezionate da Cloud Temple
- **Semplificare** il deployment di ambienti cloud
- **Accelerare** l'implementazione di progetti digitali
- **Distribuire** nei vostri ambienti Cloud Temple, che hanno le proprie qualifiche; la sicurezza delle macchine distribuite resta di vostra responsabilità

Si rivolge ai team IT e DevOps che costruiscono i propri ambienti Cloud Temple, anche nei settori regolamentati, e alle direzioni aziendali alla ricerca di soluzioni SaaS di fornitori di software partner.

## Vantaggi

| Vantaggio | Descrizione |
|---|---|
| Accesso centralizzato | Immagini, servizi gestiti e soluzioni SaaS di partner riuniti in un unico catalogo, consultabile dalla Console Cloud Temple. |
| Distribuzione rapida | Le immagini di macchine virtuali vengono distribuite direttamente nei vostri ambienti, in pochi minuti per la maggior parte. |
| Soluzioni partner | Accesso alle soluzioni dei fornitori di software partner e contatto diretto con loro. |
| Integrazione nella Console | Il Marketplace si utilizza dall'interfaccia di gestione abituale, senza strumenti aggiuntivi. |

## Funzionalità

| Funzionalità | Descrizione |
|---|---|
| Immagini di macchine virtuali | Immagini preconfigurate da distribuire su IaaS OpenSource o IaaS VMware, in base alle destinazioni compatibili di ogni immagine: vedete la [guida introduttiva](./quickstart.md). |
| Servizi gestiti | Servizi gestiti per voi, presentati nel catalogo. |
| Soluzioni SaaS di partner | Soluzioni di fornitori di software partner, accessibili dal catalogo. |
| Messa in contatto | Contatto diretto con il fornitore di una soluzione dalla sua scheda. |
| Catalogo pubblico | L'elenco aggiornato delle soluzioni si trova nel [catalogo Marketplace del sito Cloud Temple](https://www.cloud-temple.com/marketplace/). |

<a id="integrazione-con-lecosistema-cloud-temple"></a>

## Architettura

### Console Cloud Temple

Il Marketplace è integrato nativamente nella console Cloud Temple, offrendo:

- **Accesso unificato** dall'interfaccia di gestione standard
- **Distribuzione diretta** di immagini di macchine virtuali sulle vostre infrastrutture esistenti
- **Gestione centralizzata** delle macchine virtuali così distribuite

### Compatibilità con i servizi

In base alle destinazioni compatibili di ogni immagine, le immagini di macchine virtuali del Marketplace vengono distribuite nei seguenti ambienti:

- **IaaS OpenSource** : Distribuzione su infrastruttura OpenIaaS
- **IaaS VMware** : Integrazione con l'ambiente vSphere

## Regioni e zone di disponibilità

Le immagini di macchine virtuali vengono distribuite nella regione e nelle zone di disponibilità del vostro ambiente Cloud Temple (regione FR1). Per i servizi gestiti e le soluzioni SaaS, la localizzazione è specifica di ogni offerta e indicata nella sua scheda.

<a id="tipi-di-soluzioni-disponibili"></a>

## Specifiche tecniche

Il catalogo riunisce immagini di macchine virtuali, servizi gestiti e soluzioni SaaS di fornitori di software partner. Si arricchisce continuamente: le soluzioni descritte qui sono solo esempi, e l'elenco aggiornato si trova nel [catalogo Marketplace del sito Cloud Temple](https://www.cloud-temple.com/marketplace/).

### Immagini delle macchine virtuali

Le immagini delle macchine virtuali costituiscono il nucleo attuale del prodotto Marketplace. Queste immagini preconfigurate consentono un rapido deployment di ambienti standardizzati.

**Caratteristiche :**

- Immagini verificate e validate da Cloud Temple prima della pubblicazione
- Distribuzione su OpenIaaS o VMware, in base alle destinazioni compatibili di ogni immagine
- Distribuzione in pochi minuti in genere, a seconda dell'immagine e dell'ambiente
- Integrazione nativa con la console Cloud Temple

### Soluzioni partner

Il Marketplace offre inoltre l'accesso a soluzioni sviluppate dai nostri fornitori di software partner, che coprono diversi settori di attività.

**Processo di accesso :**

- Consultazione del catalogo dalla console
- Contatto diretto con il partner
- A seconda dell'offerta, distribuzione nei vostri ambienti Cloud Temple o accesso al servizio SaaS gestito dal fornitore

### Limiti

- Il catalogo evolve continuamente: le soluzioni descritte in questa pagina sono esempi.
- L'aggiornamento delle soluzioni partner spetta ai rispettivi fornitori, così come i tempi di risposta alle richieste di contatto.

## Sicurezza e conformità

### Hosting e qualifiche

L'hosting e le qualifiche dipendono dal tipo di soluzione:

- **Immagini di macchine virtuali**: vengono distribuite nei vostri ambienti Cloud Temple e rientrano nelle loro qualifiche.
- **Servizi gestiti e soluzioni SaaS**: l'hosting e le certificazioni sono specifici di ogni offerta. Consultate le informazioni della sua scheda nel [catalogo Marketplace del sito](https://www.cloud-temple.com/marketplace/) e, per ulteriori dettagli, contattate il fornitore.

### Validazione delle soluzioni

Cloud Temple seleziona le soluzioni proposte nel Marketplace. Prima della pubblicazione, un'immagine di macchina virtuale viene verificata (file e metadati) e poi validata da Cloud Temple. Questa validazione non sostituisce la messa in sicurezza delle macchine distribuite, che resta di vostra responsabilità. Per una soluzione partner, il fornitore resta responsabile del suo contenuto e dei suoi aggiornamenti.

## Responsabilità

Il supporto del Marketplace stesso (catalogo, distribuzione delle immagini) rientra nel supporto della Console Cloud Temple. Ogni offerta ha poi le proprie condizioni di supporto: quelle del servizio per un'offerta di Cloud Temple, quelle del fornitore per una soluzione partner, che si occupa anche dei relativi aggiornamenti e tempi di risposta. Le macchine virtuali distribuite dal Marketplace sono risorse del vostro ambiente IaaS: vedete la [matrice delle responsabilità (RACI) IaaS](../contractual/iaas/raci.md).

## Reversibilità

- **Immagini di macchine virtuali**: le macchine distribuite sono risorse del vostro ambiente IaaS; la loro reversibilità segue quella dell'offerta interessata, IaaS OpenSource o IaaS VMware.
- **Soluzioni partner**: le condizioni di uscita sono quelle indicate dal fornitore.

## Prezzi

Il Marketplace non ha un costo proprio. Pagate l'infrastruttura su cui distribuite un'immagine e, a seconda dell'offerta scelta, la licenza o il servizio, fornito da Cloud Temple o da un partner, alle sue condizioni di prezzo. Il dettaglio di ogni offerta si trova nel [catalogo Marketplace del sito Cloud Temple](https://www.cloud-temple.com/marketplace/).
