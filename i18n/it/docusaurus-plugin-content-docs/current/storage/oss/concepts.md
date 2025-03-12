---
title: Concepts
---

## Elastic Cloud Storage (ECS) : una soluzione di riferimento

L'offerta di archiviazione oggetti Cloud Temple si basa sulla tecnologia __Elastic Cloud Storage (ECS)__ di Dell, riconosciuta per le sue alte prestazioni e il rispetto degli standard industriali. Con una compatibilità del **97% con il protocollo AWS S3**, questa soluzione garantisce:

- Un'integrazione facile e standardizzata;
- Una flessibilità accresciuta per gli utenti;
- Una transizione fluida verso un'infrastruttura di storage moderna.

---

## Impegni di sicurezza e certificazioni

Cloud Temple si impegna a garantire la sicurezza dei dati grazie a certificazioni riconosciute:

- **SecNumCloud**: Qualificazione rilasciata da ANSSI, garantendo la sovranità e la sicurezza dei dati in un contesto francese ed europeo.
- **HDS (Hébergement de Données de Santé)**: Conformità ai requisiti rigorosi per i dati medici sensibili.
- **ISO 27001**: Adesione alle migliori pratiche in materia di sicurezza delle informazioni.

## Crittografia avanzata per una protezione ottimale

La crittografia dei dati è applicata in modo sistematico, garantendo la loro sicurezza in ogni fase:

- **In transito**: Protezione tramite il protocollo __TLS 1.3__.
- **In archiviazione**: Tre opzioni adatte alle esigenze degli utenti:
  - **SSE-ECS**: Chiavi gestite da Cloud Temple per una gestione semplificata.
  - **SSE-C**: Chiavi fornite dal cliente per un controllo maggiore.
  - **CSE:** Crittografia realizzata dal cliente per una sicurezza massima.

| Modello di crittografia      | Vantaggi                            | Svantaggi                      |
| ----------------------------- | ----------------------------------- | ------------------------------ |
| **SSE-ECS**                  | Gestione semplificata e trasparente | Minore controllo sulle chiavi  |
| **SSE-C**                    | Controllo totale sulle chiavi       | Gestione delle chiavi necessaria|
| **CSE**                      | Sicurezza massima                   | Complessità e impatto sulle prestazioni |

---

## Architettura e distribuzione

### Distribuzione di tipo regionale

Il servizio di storage S3 di Cloud Temple memorizza i dati in modo nativo su [**tre zone di disponibilità distinte**](../../additional_content/concepts_az.md) all'interno di una stessa [regione](../../additional_content/concepts_regional.md) Cloud Temple. Questa architettura è progettata per offrire un'alta disponibilità e una resilienza massima contro i guasti hardware o software:
- Erasure Coding (EC): Utilizziamo di default uno schema EC 12+4, che divide i dati in 12 segmenti di dati e 4 segmenti di parità. Questa tecnica consente di ricostruire i dati anche in caso di perdita di diversi segmenti.
- Distribuzione dei dati: I segmenti EC sono distribuiti su diversi nodi e rack, garantendo una protezione contro i guasti di dischi, di nodi e anche di interi rack.
- Replica geografica: Per una protezione aggiuntiva, i dati sono replicati su 3 zone di disponibilità, offrendo una resilienza contro i disastri locali.

Questa replica assicura che anche in caso di guasto di una zona, i dati rimangono accessibili e intatti,
contribuendo così a un'infrastruttura di archiviazione altamente resiliente.

---

## Prestazioni e livelli di servizio

### Livelli di servizio garantiti

Cloud Temple offre un'infrastruttura altamente affidabile con impegni chiari:

| Impegno                         | Obiettivo                        |
| ------------------------------- | ------------------------------- |
| Disponibilità                   | 99.99% (inclusa la manutenzione) |
| Durabilità dei dati             | 99,99999999%                     |
| Banda garantita                 | 1 Gbp/secondo                    |

### Limitazioni dello storage oggetti

Cloud Temple offre una soluzione di storage oggetti con le seguenti caratteristiche tecniche:

• **Numero massimo di buckets per tenant**: Il numero massimo di buckets per tenant è 999.

• **Dimensione massima per bucket**: La dimensione massima di un oggetto è 5 To.

• **Numero di connessioni simultanee**: Nessun limite specifico.

• **Prestazioni in upload**:
  - Fino a 100Gb/s in entrata
  - Fino a 100Gb/s in uscita

---

## Concetti e organizzazione dello storage

### Il conto di storage

Un **Storage Account** è un'entità logica che possiede un'**Access Key** e una **Secret Key** utilizzate per autenticare e proteggere le interazioni con un bucket.
È su questo account che vengono assegnati i ruoli e i permessi associati ai **buckets**, permettendo di controllare con precisione gli accessi e le azioni autorizzate per ciascun utente o servizio.

### Il "bucket" nell'ecosistema dello storage oggetti

Un bucket S3, popolarizzato dal servizio Amazon Simple Storage Service (Amazon S3), è **un contenitore di storage pubblico** nel cloud progettato per conservare una quantità illimitata di dati in modo sicuro, affidabile e altamente disponibile. Ogni bucket S3 può memorizzare file (chiamati "oggetti" in S3), che vanno da documenti e immagini a grandi database o file video. I buckets sono utilizzati per organizzare lo spazio di storage in modo logico all'interno dello storage oggetti di Cloud Temple, e ciascun bucket è identificato da un nome unico fornito dall'utente. I buckets S3 offrono funzionalità avanzate, come la gestione delle versioni, la protezione dei dati tramite politiche di controllo degli accessi, e la possibilità di immutabilità.

### L'offerta S3 Cloud Temple utilizza il metodo 'PathStyle'

A causa delle restrizioni associate alla qualificazione SecNumCloud, al momento, l'offerta è prevista per utilizzare il metodo '**PathStyle**'. Stiamo lavorando affinché il metodo '**UrlStyle**' sia disponibile nel Q1 2025.

### Richieste presigned

Lo storage oggetti di Cloud Temple supporta le **richieste pre-signate**, una funzionalità essenziale che consente di generare URL temporanei dando accesso a oggetti specifici per un periodo limitato. Questa funzionalità è particolarmente utile per condividere file in modo sicuro con utenti esterni senza attribuire loro diritti permanenti o credenziali di accesso al bucket. Le richieste pre-signate possono essere configurate con una durata di validità precisa, offrendo così un controllo granulare sull'accesso ai dati.