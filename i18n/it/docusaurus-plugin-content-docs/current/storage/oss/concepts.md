---
title: Concetti
---

## Elastic Cloud Storage (ECS): una soluzione di riferimento

L'offerta di storage a oggetti di Cloud Temple si basa sulla tecnologia __Elastic Cloud Storage (ECS)__ di Dell, rinomata per le sue elevate prestazioni e la conformità agli standard di settore. Con una compatibilità del __97% con il protocollo AWS S3__, questa soluzione garantisce:

- Un'integrazione facile e standardizzata;
- Una maggiore flessibilità per gli utenti;
- Una transizione fluida verso un'infrastruttura di storage moderna.

---

## Impegni di sicurezza e certificazioni

Cloud Temple si impegna a garantire la sicurezza dei dati attraverso certificazioni riconosciute:

- __SecNumCloud__: Qualifica rilasciata dall'ANSSI, che garantisce la sovranità e la sicurezza dei dati in un quadro francese ed europeo.
- __HDS (Hosting di Dati Sanitari)__: Conformità ai severi requisiti per i dati medici sensibili.
- __ISO 27001__: Adesione alle migliori pratiche in materia di sicurezza delle informazioni.

## Crittografia avanzata per una protezione ottimale

La crittografia dei dati viene applicata in modo sistematico, garantendone la sicurezza in ogni fase:

- __In transito__: Protezione tramite il protocollo __TLS 1.3__.
- __A riposo__: Tre opzioni adatte alle esigenze degli utenti:
  - __SSE-ECS__: Chiavi gestite da Cloud Temple per una gestione semplificata.
  - __SSE-C__: Chiavi fornite dal cliente per un maggiore controllo.
  - __CSE__: Crittografia eseguita dal cliente per la massima sicurezza.

| Modello di crittografia | Vantaggi | Svantaggi |
|---|---|---|
| __SSE-ECS__ | Gestione semplificata e trasparente | Meno controllo sulle chiavi |
| __SSE-C__ | Controllo totale sulle chiavi | Gestione delle chiavi necessaria |
| __CSE__ | Massima sicurezza | Complessità e impatto sulle prestazioni |

---

## Architettura e distribuzione

### Distribuzione di tipo regione

Lo storage S3 di Cloud Temple archivia i dati in modo nativo su [__tre zone di disponibilità distinte__](../../../../additional_content/concepts_az.md) all'interno della stessa [regione](../../../../additional_content/concepts_regional.md) di Cloud Temple. Questa architettura è progettata per offrire un'elevata disponibilità e la massima resilienza a guasti hardware o software:

- Erasure Coding (EC): Utilizziamo di default uno schema EC 12+4, che divide i dati in 12 segmenti di dati e 4 segmenti di parità. Questa tecnica consente di ricostruire i dati anche in caso di perdita di più segmenti.
- Distribuzione dei dati: I segmenti EC sono distribuiti su diversi nodi e rack, garantendo una protezione contro i guasti di dischi, nodi e persino interi rack.
- Replica geografica: Per una protezione aggiuntiva, i dati vengono replicati su 3 zone di disponibilità, offrendo resilienza a disastri locali.

Questa replica garantisce che anche in caso di guasto di una zona, i dati rimangano accessibili e intatti, contribuendo così a un'infrastruttura di storage altamente resiliente.

---

## Prestazioni e livelli di servizio

### Livelli di servizio garantiti

Cloud Temple offre un'infrastruttura altamente affidabile con impegni chiari:

| Impegno | Obiettivo |
|---|---|
| Disponibilità | 99,99% (include la manutenzione) |
| Durabilità dei dati | 99,999999999% |
| Larghezza di banda di rete garantita | 1 Gbp/secondo |

### Limitazioni dello storage a oggetti

Cloud Temple offre una soluzione di storage a oggetti con le seguenti caratteristiche tecniche:

• __Numero massimo di bucket per tenant__: Il numero massimo di bucket per tenant è 999.

• __Limite di dimensione per bucket__: La dimensione massima di un oggetto è di 5 TB.

• __Numero di connessioni simultanee__: Nessun limite specifico.

• __Prestazioni__:

- Fino a 1 Gb/s in ingresso
- Fino a 1 Gb/s in uscita

---

## Concetti e organizzazione dello storage

### L'account di storage

Uno __Storage Account__ è un'entità logica che possiede una __Chiave di Accesso__ e una __Chiave Segreta__ utilizzate per autenticare e proteggere le interazioni con un bucket.
Su questo account vengono impostati i ruoli e le autorizzazioni associati ai __bucket__, consentendo di controllare con precisione gli accessi e le azioni autorizzate per ogni utente o servizio.

### Tipi di account di storage

La piattaforma di Object Storage di Cloud Temple distingue due tipi di account di storage, ciascuno con un ruolo e un livello di autorizzazione specifici:

#### 1. Account di storage classico

Questo è il tipo di account standard che creerete per la maggior parte dei vostri utilizzi.

*   **Gestione delle chiavi**: Per ogni account classico, è possibile generare una coppia di chiavi di accesso (`Chiave di Accesso` e `Chiave Segreta`).
*   **Autorizzazioni granulari**: I diritti di accesso di questo account sono definiti a livello di ogni bucket tramite liste di controllo degli accessi (ACL). È necessario concedergli esplicitamente le autorizzazioni (lettura, scrittura, ecc.) sui bucket a cui deve accedere.

#### 2. Account di storage globale (Root)

Ogni *namespace* (tenant) dispone di un unico account di storage globale, talvolta chiamato "account root". Questo account dispone di privilegi amministrativi estesi.

*   **Accesso totale**: L'account globale ha accesso completo a tutti i bucket all'interno del namespace, senza che sia necessario assegnargli autorizzazioni specifiche. Può eseguire tutte le operazioni possibili sull'intero servizio di storage.
*   **Uso amministrativo**: È destinato principalmente a compiti di configurazione e amministrazione globali.
*   **Reimpostazione delle chiavi**: Data la sua importanza, se la chiave di accesso e la chiave segreta di questo account vengono perse, la piattaforma consente di reimpostarle per generarne di nuove.

### Il "bucket" nell'ecosistema dello storage a oggetti

Un bucket S3, reso popolare dal servizio Amazon Simple Storage Service (Amazon S3), è __un contenitore di storage pubblico__ nel cloud progettato per conservare una quantità illimitata di dati in modo sicuro, affidabile e altamente disponibile. Ogni bucket S3 può archiviare file (chiamati "oggetti" in S3), che vanno da documenti e immagini a grandi database o file video. I bucket vengono utilizzati per organizzare lo spazio di archiviazione in modo logico all'interno dello storage a oggetti di Cloud Temple e ogni bucket è identificato da un nome univoco fornito dall'utente. I bucket S3 offrono funzionalità avanzate, come la gestione delle versioni, la protezione dei dati tramite policy di controllo degli accessi e la possibilità di immutabilità.

### L'offerta S3 di Cloud Temple utilizza il metodo 'PathStyle'?

A causa dei vincoli associati alla qualifica SecNumCloud, al momento l'offerta è prevista per utilizzare il metodo '__PathStyle__'. Stiamo lavorando affinché il metodo '__UrlStyle__' sia disponibile nel secondo semestre del 2025.

### Richieste pre-firmate

Lo storage a oggetti di Cloud Temple supporta le __richieste pre-firmate__, una funzionalità essenziale che consente di generare URL temporanei che danno accesso a oggetti specifici per un periodo di tempo limitato. Questa funzionalità è particolarmente utile per condividere file in modo sicuro con utenti esterni senza assegnare loro diritti permanenti o credenziali di accesso al bucket. Le richieste pre-firmate possono essere configurate con un periodo di validità preciso, offrendo così un controllo granulare sull'accesso ai dati.

### Immutabilità degli oggetti (Object Lock)

Lo Storage a Oggetti di Cloud Temple, basato su Dell ECS, supporta la funzionalità di immutabilità tramite **Object Lock**, in conformità con lo standard S3. Questa opzione consente di configurare gli oggetti in modalità **WORM (Write Once, Read Many)**, proteggendoli così da qualsiasi modifica o cancellazione per un periodo definito. Si tratta di una protezione essenziale per la conformità normativa e la difesa contro i ransomware.

#### Funzionamento

L'immutabilità si applica alle versioni degli oggetti e può essere configurata in due modi:
*   **Periodo di conservazione fisso**: L'oggetto viene bloccato per una durata determinata (in giorni o anni).
*   **Conservazione legale (Legal Hold)**: L'oggetto viene bloccato a tempo indeterminato, fino a quando la conservazione non viene esplicitamente revocata.

#### Condizioni di implementazione

*   **Versionamento obbligatorio**: Per attivare l'Object Lock, il versionamento deve essere attivato sul bucket. Una volta attivo l'Object Lock, il versionamento non può più essere disattivato.
*   **Attivazione alla creazione**: L'immutabilità deve essere attivata al momento della creazione del bucket, tramite l'API S3 (ad esempio, con l'header `x-amz-bucket-object-lock-enabled: true`).
*   **Due modalità di protezione**:
    *   **Modalità Governance**: Gli utenti con autorizzazioni specifiche possono modificare o eliminare le impostazioni di conservazione.
    *   **Modalità Conformità**: Nessuno, compreso l'amministratore root, può modificare o eliminare le impostazioni di conservazione. È il livello di protezione più alto.

#### Casi d'uso principali

*   **Protezione anti-ransomware**: I backup protetti non possono essere crittografati o eliminati da un attacco, garantendo un ripristino affidabile dei dati.
*   **Conformità normativa**: Soddisfa i severi requisiti di conservazione dei dati in settori come la finanza (FINRA, SEC 17a-4) o la sanità.
