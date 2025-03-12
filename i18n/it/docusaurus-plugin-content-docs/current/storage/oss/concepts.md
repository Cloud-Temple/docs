---
title: Concetti
---

## Elastic Cloud Storage (ECS): una soluzione di riferimento

L'offerta di storage a oggetti di Cloud Temple si basa sulla tecnologia __Elastic Cloud Storage (ECS)__ di Dell, riconosciuta per le sue alte prestazioni e il rispetto degli standard industriali. Con una __compatibilità del 97% con il protocollo AWS S3__, questa soluzione garantisce:

- Un'integrazione facile e standardizzata;
- Una maggiore flessibilità per gli utenti;
- Una transizione fluida verso un'infrastruttura di storage moderna.

---

## Impegni di sicurezza e certificazioni

Cloud Temple si impegna a garantire la sicurezza dei dati grazie a certificazioni riconosciute:

- __SecNumCloud__: Qualifica rilasciata dall'ANSSI, che garantisce sovranità e sicurezza dei dati in un contesto francese ed europeo.
- __HDS (Hébergement de Données de Santé)__: Conformità ai requisiti rigorosi per i dati medici sensibili.
- __ISO 27001__: Adesione alle migliori pratiche in materia di sicurezza delle informazioni.

## Crittografia avanzata per una protezione ottimale

La crittografia dei dati viene applicata sistematicamente, garantendo la loro sicurezza in ogni fase:

- __In transito__: Protezione tramite il protocollo __TLS 1.3__.
- __In archiviazione__: Tre opzioni adattate alle esigenze degli utenti:
  - __SSE-ECS__: Chiavi gestite da Cloud Temple per una gestione semplificata.
  - __SSE-C__: Chiavi fornite dal cliente per un maggiore controllo.
  - __CSE__: Crittografia realizzata dal cliente per una sicurezza massima.

| Modello di crittografia         | Vantaggi                              | Svantaggi                     |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| __SSE-ECS__                  | Gestione semplificata e trasparente     | Meno controllo sulle chiavi   |
| __SSE-C__                    | Controllo totale sulle chiavi            | Gestione delle chiavi necessaria       |
| __CSE__                      | Sicurezza massima                      | Complessità e impatto sulle prestazioni |

---

## Architettura e distribuzione

### Distribuzione di tipo regione

Lo storage S3 di Cloud Temple memorizza i dati in modo nativo su [__tre zone di disponibilità distinte__](../../additional_content/concepts_az.md) all'interno della stessa [regione](../../additional_content/concepts_regional.md) di Cloud Temple. Questa architettura è progettata per offrire alta disponibilità e massima resilienza contro guasti hardware o software:

- Erasure Coding (EC): Utilizziamo di default uno schema EC 12+4, che divide i dati in 12 segmenti di dati e 4 segmenti di parità. Questa tecnica permette di ricostruire i dati anche in caso di perdita di più segmenti.
- Distribuzione dei dati: I segmenti EC sono distribuiti su diversi nodi e rack, garantendo protezione contro guasti di dischi, nodi e persino rack interi.
- Replica geografica: Per una protezione aggiuntiva, i dati sono replicati su 3 zone di disponibilità, offrendo resilienza contro disastri locali.

Questa replica assicura che anche in caso di guasto di una zona, i dati rimangano accessibili e intatti,
contribuendo così a un'infrastruttura di storage altamente resiliente.

---

## Prestazioni e livelli di servizio

### Livelli di servizio garantiti

Cloud Temple propone un'infrastruttura altamente affidabile con impegni chiari:

| Impegno                      | Obiettivo                         |
| ------------------------------- | ----------------------------- |
| Disponibilità                   | 99,99% (include la manutenzione)|
| Durabilità dei dati          | 99,99999999%                  |
| Larghezza di banda di rete garantita  | 1 Gbp/secondo                 |

### Limitazioni dello storage a oggetti

Cloud Temple propone una soluzione di storage a oggetti con le seguenti caratteristiche tecniche:

• __Numero massimo di bucket per tenant__: Il numero massimo di bucket per tenant è 999.

• __Limite di dimensione per bucket__: La dimensione massima di un oggetto è 5 TB.

• __Numero di connessioni simultanee__: Nessun limite specifico.

• __Prestazioni di upload__:

- Fino a 100Gb/s in ingresso
- Fino a 100Gb/s in uscita

---

## Concetti e organizzazione dello storage

### L'account di storage

Uno __Storage Account__ è un'entità logica che possiede una __Access Key__ e una __Secret Key__ utilizzate per autenticare e proteggere le interazioni con un bucket.
È su questo account che vengono posizionati i ruoli e i permessi associati ai __bucket__, permettendo di controllare con precisione gli accessi e le azioni autorizzate per ogni utente o servizio.

### Il "bucket" nell'ecosistema dello storage a oggetti

Un bucket S3, reso popolare dal servizio Amazon Simple Storage Service (Amazon S3), è __un contenitore di storage pubblico__ nel cloud progettato per conservare una quantità illimitata di dati in modo sicuro, affidabile e altamente disponibile. Ogni bucket S3 può memorizzare file (chiamati "oggetti" in S3), dai documenti e immagini fino a grandi database o file video. I bucket sono utilizzati per organizzare lo spazio di storage in modo logico all'interno dello storage a oggetti di Cloud Temple, e ogni bucket è identificato da un nome unico fornito dall'utente. I bucket S3 offrono funzionalità avanzate, come la gestione delle versioni, la sicurezza dei dati tramite politiche di controllo degli accessi e la possibilità di immutabilità.

### L'offerta S3 di Cloud Temple utilizza il metodo 'PathStyle'?

A causa dei vincoli associati alla qualifica SecNumCloud, in questo momento, l'offerta è prevista per utilizzare il metodo '__PathStyle__'. Stiamo lavorando affinché il metodo '__UrlStyle__' sia disponibile nel primo trimestre del 2025.

### Richieste pre-firmate

Lo storage a oggetti di Cloud Temple supporta __richieste pre-firmate__, una funzionalità essenziale che permette di generare URL temporanei che danno accesso a oggetti specifici per un periodo limitato. Questa funzionalità è particolarmente utile per condividere file in modo sicuro con utenti esterni senza assegnare loro diritti permanenti o credenziali di accesso al bucket. Le richieste pre-firmate possono essere configurate con una durata di validità precisa, offrendo così un controllo granulare sull'accesso ai dati.
