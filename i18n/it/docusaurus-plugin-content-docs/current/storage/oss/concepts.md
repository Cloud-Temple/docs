---
title: Concepts
---

## Elastic Cloud Storage (ECS) : una soluzione di riferimento

L’offerta di storage oggetto Cloud Temple si basa sulla tecnologia __Elastic Cloud Storage (ECS)__ di Dell, riconosciuta per le sue alte prestazioni e il rispetto degli standard industriali. Con una compatibilità del **97% con il protocollo AWS S3**, questa soluzione garantisce:

- Un'integrazione facile e standardizzata;
- Una flessibilità accresciuta per gli utenti;
- Una transizione fluida verso un'infrastruttura di storage moderna.

---

## Impegni di sicurezza e certificazioni

Cloud Temple si impegna a garantire la sicurezza dei dati attraverso certificazioni riconosciute:

- **SecNumCloud** : Qualificazione rilasciata dall'ANSSI, assicurando sovranità e sicurezza dei dati in un contesto francese ed europeo.
- **HDS (Hébergement de Données de Santé)** : Conformità ai rigorosi requisiti per i dati medici sensibili.
- **ISO 27001** : Aderenza alle migliori pratiche in materia di sicurezza delle informazioni.

---

## Crittografia avanzata per una protezione ottimale

La crittografia dei dati viene applicata in modo sistematico, garantendo la loro sicurezza in ogni fase:

- **In transito** : Protezione tramite il protocollo __TLS 1.3__.
- **In archivio** : Tre opzioni adattate alle esigenze degli utenti:
  - **SSE-ECS** : Chiavi gestite da Cloud Temple per una gestione semplificata.
  - **SSE-C** : Chiavi fornite dal cliente per un controllo maggiore.
  - **CSE** : Crittografia eseguita dal cliente per una sicurezza massima.

| Modello di crittografia        | Vantaggi                              | Svantaggi                         |
| ------------------------------ | ------------------------------------- | --------------------------------- |
| **SSE-ECS**                    | Gestione semplificata e trasparente   | Meno controllo sulle chiavi       |
| **SSE-C**                      | Controllo totale sulle chiavi         | Gestione delle chiavi necessaria  |
| **CSE**                        | Massima sicurezza                     | Complessità e impatto sulle prestazioni |

---

## Livelli di servizio garantiti

Cloud Temple offre un'infrastruttura altamente affidabile con impegni chiari:

| Impegno                        | Obiettivo                      |
| ------------------------------ | ------------------------------ |
| Disponibilità                  | 99.99% (inclusa la manutenzione)|
| Durabilità dei dati            | 99,99999999%                   |
| Banda di rete garantita        | 1 Gbp/al secondo               |

## L'account di storage

Un **Storage Account** è un'entità logica che possiede una **Access Key** e una **Secret Key** utilizzate per autenticare e proteggere le interazioni con un bucket. 
Su questo account vengono posizionati i ruoli e le autorizzazioni associate ai **buckets**, consentendo di controllare precisamente gli accessi e le azioni autorizzate per ogni utente o servizio.

## Il "bucket" nell'ecosistema dello storage oggetto

Un bucket S3, reso popolare dal servizio Amazon Simple Storage Service (Amazon S3), è **un contenitore di storage pubblico** nel cloud progettato per conservare una quantità illimitata di dati in modo sicuro, affidabile e altamente disponibile. Ogni bucket S3 può archiviare file (chiamati "oggetti" in S3), che vanno da documenti e immagini a grandi basi di dati o file video. I buckets vengono utilizzati per organizzare lo spazio di archiviazione in modo logico all'interno dello storage oggetto Cloud Temple, e ogni bucket è identificato da un nome unico fornito dall'utente. I buckets S3 offrono funzionalità avanzate, come la gestione delle versioni, la sicurezza dei dati tramite politiche di controllo di accesso e la possibilità di immodificabilità.

## Distribuzione di tipo regionale

Lo storage S3 Cloud Temple archivia i dati in modo nativo su __tre zone di disponibilità distinte__ all'interno di una stessa regione Cloud Temple. Questa architettura è progettata per offrire un'alta disponibilità e una massima resilienza di fronte a guasti hardware o software:
- Erasure Coding (EC) : Utilizziamo di default uno schema EC 12+4, che divide i dati in 12 segmenti di dati e 4 segmenti di parità. Questa tecnica permette di ricostruire i dati anche in caso di perdita di più segmenti.
- Distribuzione dei dati : I segmenti EC sono disseminati su diversi nodi e rack, garantendo protezione contro guasti di dischi, nodi e persino interi rack.
- Replica geografica : Per una protezione aggiuntiva, i dati sono replicati su 3 zone di disponibilità, offrendo una resilienza contro i disastri locali.

Questa replica assicura che anche in caso di malfunzionamento di una zona, i dati rimangano accessibili e intatti,
contribuendo così a un'infrastruttura di storage altamente resiliente.

## Dimensione massima dei file che possono essere gestiti tramite la console web
Il limite sul web è di 40MB per file. Oltre, è necessario utilizzare un client nativo S3 con l'API.

## L'offerta S3 Cloud Temple utilizza il metodo 'PathStyle'

A causa delle restrizioni associate alla qualificazione SecNumCloud, al momento, l'offerta è progettata per utilizzare il metodo '**PathStyle**'. Stiamo lavorando affinché il metodo '**UrlStyle**' sia disponibile S1 2025.

## Numero massimo di buckets per tenant
Il numero massimo di buckets per tenant è di 999.