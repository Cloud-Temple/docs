---
title: Concepts
---

## Elastic Cloud Storage (ECS) : una soluzione di riferimento

L'offerta di storage oggetti Cloud Temple si basa sulla tecnologia __Elastic Cloud Storage (ECS)__ di Dell, riconosciuta per la sua alta performance e conformità agli standard industriali. Con una compatibilità del **97% con il protocollo AWS S3**, questa soluzione garantisce:

- Un'integrazione facile e standardizzata;
- Una flessibilità aumentata per gli utenti;
- Una transizione fluida verso un'infrastruttura di storage moderna.

---

## Impegni di sicurezza e certificazioni

Cloud Temple si impegna a garantire la sicurezza dei dati tramite certificazioni riconosciute:

- **SecNumCloud**: Qualificazione rilasciata da ANSSI, garantisce sovranità e sicurezza dei dati in un contesto francese ed europeo.
- **HDS (Hébergement de Données de Santé)**: Conformità ai requisiti rigidi per i dati medici sensibili.
- **ISO 27001**: Adesione alle migliori pratiche in materia di sicurezza delle informazioni.

---

## Crittografia avanzata per una protezione ottimale

La crittografia dei dati è applicata in modo sistematico, garantendone la sicurezza in ogni fase:

- **In transito**: Protezione tramite il protocollo __TLS 1.3__.
- **In archivio**: Tre opzioni adatte alle esigenze degli utenti:
  - **SSE-ECS**: Chiavi gestite da Cloud Temple per una gestione semplificata.
  - **SSE-C**: Chiavi fornite dal cliente per un controllo maggiore.
  - **CSE**: Crittografia effettuata dal cliente per la massima sicurezza.

| Modello di crittografia        | Vantaggi                             | Svantaggi                        |
| -----------------------------  | ------------------------------------ | -------------------------------- |
| **SSE-ECS**                    | Gestione semplificata e trasparente  | Minor controllo sulle chiavi     |
| **SSE-C**                      | Controllo totale sulle chiavi        | Necessità di gestione delle chiavi |
| **CSE**                        | Sicurezza massima                    | Complessità e impatto sulle prestazioni |

---

## Livelli di servizio garantiti

Cloud Temple offre un'infrastruttura altamente affidabile con impegni chiari:

| Impegno                        | Obiettivo                          |
| ------------------------------ | ---------------------------------- |
| Disponibilità                  | 99.99% (inclusa la manutenzione)   |
| Durabilità dei dati            | 99,99999999%                       |
| Banda di rete garantita        | 1 Gbp/secondo                      |

## L'account di storage

Un **Storage Account** è un'entità logica che possiede una **Access Key** e una **Secret Key** utilizzate per autenticare e proteggere le interazioni con un bucket. 
È su questo account che sono posizionati i ruoli e le autorizzazioni associate ai **buckets**, permettendo di controllare precisamente gli accessi e le azioni autorizzate per ciascun utente o servizio.


## Il "bucket" nell'ecosistema dello storage oggetti

Un bucket S3, reso popolare dal servizio Amazon Simple Storage Service (Amazon S3), è **un contenitore di storage pubblico** nel cloud progettato per conservare una quantità illimitata di dati in modo sicuro, affidabile e altamente disponibile. Ogni bucket S3 può immagazzinare file (chiamati "oggetti" in S3), che vanno da documenti e immagini a grandi database o file video. I buckets sono utilizzati per organizzare lo spazio di storage in modo logico all'interno dello storage oggetti Cloud Temple, e ogni bucket è identificato da un nome unico fornito dall'utente. I buckets S3 offrono funzionalità avanzate, come la gestione delle versioni, la sicurezza dei dati tramite politiche di controllo degli accessi e la possibilità di immutabilità.


## Distribuzione di tipo regionale

Lo storage S3 Cloud Temple conserva i dati in modo nativo su __tre zone di disponibilità distinte__ all'interno della stessa regione Cloud Temple. Questa architettura è progettata per offrire un'alta disponibilità e una massima resilienza di fronte a guasti hardware o software:
- Erasure Coding (EC): Utilizziamo di default uno schema EC 12+4, che divide i dati in 12 segmenti di dati e 4 segmenti di parità. Questa tecnica permette di ricostruire i dati anche in caso di perdita di più segmenti.
- Distribuzione dei dati: I segmenti EC sono distribuiti su diversi nodi e rack, garantendo una protezione contro i guasti di dischi, nodi e persino interi rack.
- Replicazione geografica: Per una protezione aggiuntiva, i dati sono replicati su 3 zone di disponibilità, offrendo una resilienza di fronte a disastri locali.

Questa replicazione assicura che anche in caso di guasto di una zona, i dati restano accessibili e integri, 
contribuendo quindi a un'infrastruttura di storage altamente resiliente.


## Dimensione massima del file gestibile con la console web
Il limite via web è di 40MB per file. Oltre questo, è necessario utilizzare un client nativo S3 con l'API. 

## L'offerta S3 Cloud Temple utilizza il metodo 'PathStyle'

A causa dei vincoli associati alla qualificazione SecNumCloud, in questo momento, l'offerta è prevista per utilizzare il metodo '**PathStyle**'. Stiamo lavorando affinché il metodo '**UrlStyle**' sia disponibile S1 2025.

## Numero massimo di buckets per tenant
Il numero massimo di buckets per tenant è di 999.