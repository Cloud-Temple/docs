---
title: Concepts
---

## Elastic Cloud Storage (ECS): una soluzione di riferimento

L'offerta di archiviazione oggetti Cloud Temple si basa sulla tecnologia __Elastic Cloud Storage (ECS)__ di Dell, riconosciuta per le sue alte prestazioni e per il rispetto degli standard industriali. Con una compatibilità del **97% con il protocollo AWS S3**, questa soluzione assicura:

- Un'integrazione facile e standardizzata;
- Una flessibilità aumentata per gli utenti;
- Una transizione fluida verso un'infrastruttura di archiviazione moderna.

---

## Impegni di sicurezza e certificazioni

Cloud Temple si impegna a garantire la sicurezza dei dati tramite certificazioni riconosciute:

- **SecNumCloud**: Qualifica rilasciata dall'ANSSI, che assicura sovranità e sicurezza dei dati in un contesto francese ed europeo.
- **HDS (Hébergement de Données de Santé)**: Conformità ai requisiti rigorosi per i dati medici sensibili.
- **ISO 27001**: Adesione alle migliori pratiche in materia di sicurezza delle informazioni.

## Crittografia avanzata per una protezione ottimale

La crittografia dei dati è applicata in modo sistematico, garantendone la sicurezza ad ogni fase:

- **In transito**: Protezione tramite il protocollo __TLS 1.3__.
- **In archiviazione**: Tre opzioni adatte alle esigenze degli utenti:
  - **SSE-ECS**: Chiavi gestite da Cloud Temple per una gestione semplificata.
  - **SSE-C**: Chiavi fornite dal cliente per un controllo maggiore.
  - **CSE**: Crittografia eseguita dal cliente per una sicurezza massima.

| Modello di crittografia        | Vantaggi                               | Svantaggi                        |
| -----------------------------  | -------------------------------------- | -------------------------------- |
| **SSE-ECS**                    | Gestione semplificata e trasparente    | Meno controllo sulle chiavi      |
| **SSE-C**                      | Controllo totale sulle chiavi          | Gestione delle chiavi necessaria |
| **CSE**                        | Sicurezza massima                      | Complessità e impatto sulle prestazioni |

---

## Architettura e distribuzione

### Distribuzione di tipo regionale

Lo storage S3 Cloud Temple memorizza i dati in modo nativo su __tre zone di disponibilità distinte__ all'interno di una stessa regione Cloud Temple. Questa architettura è progettata per offrire un'elevata disponibilità e una massima resilienza ai guasti hardware o software:
- Erasure Coding (EC): Utilizziamo di default uno schema EC 12+4, che divide i dati in 12 segmenti di dati e 4 segmenti di parità. Questa tecnica permette di ricostruire i dati anche in caso di perdita di più segmenti.
- Distribuzione dei dati: I segmenti EC sono distribuiti su nodi e rack differenti, garantendo una protezione contro i guasti di dischi, nodi e persino rack interi.
- Replicazione geografica: Per una protezione aggiuntiva, i dati sono replicati su 3 zone di disponibilità, offrendo una resilienza contro i disastri locali.

Questa replicazione garantisce che anche in caso di guasto di una zona, i dati rimangano accessibili e intatti,
contribuendo così a un'infrastruttura di archiviazione altamente resiliente.

---

## Prestazioni e livelli di servizio

### Livelli di servizio garantiti

Cloud Temple offre un'infrastruttura altamente affidabile con impegni chiari:

| Impegno                        | Obiettivo                      |
| ------------------------------ | ------------------------------ |
| Disponibilità                  | 99.99% (inclusa la manutenzione)|
| Durabilità dei dati            | 99,99999999%                   |
| Banda garantita della rete     | 1 Gbp/secondo                  |

### Limitazioni dello storage di oggetti

Cloud Temple propone una soluzione di storage di oggetti con le seguenti caratteristiche tecniche:

• **Numero massimo di bucket per tenant**: Il numero massimo di bucket per tenant è di 999.

• **Dimensione massima per bucket**: La dimensione massima di un oggetto è di 5 TB.

• **Numero di connessioni simultanee**: Nessun limite specifico.

• **Prestazioni in upload**:
  - Fino a 100Gb/s in ingresso
  - Fino a 100Gb/s in uscita

---

## Concetti e organizzazione dello storage

### L'account di archiviazione

Un **Storage Account** è un'entità logica che possiede una **Access Key** e una **Secret Key** utilizzate per autenticare e proteggere le interazioni con un bucket.
È su questo account che sono assegnati i ruoli e i permessi associati ai **bucket**, permettendo di controllare con precisione gli accessi e le azioni autorizzate per ogni utente o servizio.

### Il "bucket" nell'ecosistema dello storage di oggetti

Un bucket S3, popolarizzato dal servizio Amazon Simple Storage Service (Amazon S3), è **un contenitore di archiviazione pubblico** nel cloud progettato per conservare una quantità illimitata di dati in modo sicuro, affidabile e altamente disponibile. Ogni bucket S3 può memorizzare file (chiamati "oggetti" in S3), che vanno da documenti e immagini a grandi database o file video. I bucket sono utilizzati per organizzare lo spazio di archiviazione in modo logico all'interno dello storage di oggetti Cloud Temple, e ogni bucket è identificato da un nome univoco fornito dall'utente. I bucket S3 offrono funzionalità avanzate, come la gestione delle versioni, la sicurezza dei dati tramite politiche di controllo degli accessi, e la possibilità di immutabilità.

### L'offerta S3 Cloud Temple utilizza il metodo 'PathStyle'

Per via dei vincoli associati alla qualifica SecNumCloud, attualmente, l'offerta è prevista per utilizzare il metodo '**PathStyle**'. Stiamo lavorando affinché il metodo '**UrlStyle**' sia disponibile nel S1 2025.

### Richieste pre-firmate

Lo storage di oggetti Cloud Temple supporta le **richieste pre-firmate**, una funzionalità essenziale che consente di generare URL temporanee per accedere a oggetti specifici per un periodo limitato. Questa funzionalità è particolarmente utile per condividere file in modo sicuro con utenti esterni senza assegnare loro diritti permanenti o credenziali di accesso al bucket. Le richieste pre-firmate possono essere configurate con una durata di validità precisa, offrendo così un controllo granulare sull'accesso ai dati.