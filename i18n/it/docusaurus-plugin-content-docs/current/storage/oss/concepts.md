

---
title: Concetti
---



## Elastic Cloud Storage (ECS): una soluzione di riferimento

L'offerta di archiviazione oggetti Cloud Temple si basa sulla tecnologia __Elastic Cloud Storage (ECS)__ di Dell, riconosciuta per le sue elevate prestazioni e il rispetto delle norme industriali. Con una compatibilità del __97% con il protocollo AWS S3__, questa soluzione garantisce:

- Un' integrazione facile e standardizzata;
- Una maggiore flessibilità per gli utenti;
- Una transizione fluida verso un'infrastruttura di archiviazione moderna.

---



## Impegni di sicurezza e certificazioni

Cloud Temple si impegna a garantire la sicurezza dei dati grazie a certificazioni riconosciute:

- __SecNumCloud__ : Certificazione rilasciata dall'ANSSI, che garantisce sovranità e sicurezza dei dati in un contesto francese ed europeo.
- __HDS (Hébergement de Données de Santé)__ : Conformità agli standard rigorosi per i dati medici sensibili.
- __ISO 27001__ : Adesione alle migliori pratiche per la sicurezza delle informazioni.



## Crittografia avanzata per una protezione ottimale

La crittografia dei dati viene applicata in modo sistematico, garantendo la loro sicurezza in ogni fase:

- __In transito__ : Protezione tramite il protocollo __TLS 1.3__.
- __In archiviazione__ : Tre opzioni adattate alle esigenze degli utenti:
  - __SSE-ECS__ : Chiavi gestite da Cloud Temple per una gestione semplificata.
  - __SSE-C__ : Chiavi fornite dal cliente per un controllo maggiore.
  - __CSE__ : Crittografia effettuata dal cliente per una massima sicurezza.

| Modello di crittografia         | Vantaggi                              | Svantaggi                     |
| ----------------------------- | -------------------------------------- | ----------------------------- |
| __SSE-ECS__                  | Gestione semplificata e trasparente     | Minore controllo sulle chiavi   |
| __SSE-C__                    | Controllo totale sulle chiavi            | Gestione delle chiavi necessaria       |
| __CSE__                      | Massima sicurezza                      | Complessità e impatto sulle prestazioni |



## Architettura e Deploy



### Distribuzione regionale

Il storage S3 Cloud Temple memorizza i dati in modo nativo su [__tre aree di disponibilità distinte__](../../additional_content/concepts_az.md) all'interno della stessa [regione](../../additional_content/concepts_regional.md) Cloud Temple. Questa architettura è progettata per offrire alta disponibilità e massima resilienza contro guasti hardware o software:

- Coding di Erasure (EC): Utilizziamo predefinito uno schema EC 12+4, che divide i dati in 12 segmenti di dati e 4 segmenti di parità. Questa tecnica permette di ricostruire i dati anche in caso di perdita di diversi segmenti.
- Distribuzione dei dati: I segmenti EC sono distribuiti su diversi nodi e rack, garantendo una protezione contro i guasti dei dischi, dei nodi e persino di interi rack.
- Replicazione geografica: Per una protezione aggiuntiva, i dati vengono replicati su 3 aree di disponibilità, offrendo una resilienza contro gli incidenti locali.

Questa replicazione assicura che, anche in caso di guasto di un'area, i dati rimangono accessibili e intatti, contribuendo così a un'infrastruttura di archiviazione estremamente resiliente.



## Prestazioni e livelli di servizio



### Livelli di servizio garantiti

Cloud Temple offre un'infrastruttura estremamente affidabile con impegni chiari:

| Impegno                         | Obiettivo                     |
| -------------------------------- | ----------------------------- |
| Disponibilità                   | 99,99% (inclusa la manutenzione)|
| Durabilità dei dati             | 99,99999999%                  |
| Larghezza di banda di rete garantita | 1 Gbps/secondo             |



### Limitazioni del storage oggetti

Cloud Temple offre una soluzione di storage oggetti con le seguenti caratteristiche tecniche:

• __Numero massimo di bucket per tenant__ : Il numero massimo di bucket per tenant è 999.

• __Dimensione massima per bucket__ : La dimensione massima di un oggetto è 5 TiB.

• __Numero di connessioni simultanee__ : Nessuna limitazione specifica.

• __Prestazioni__ :

- Fino a 1 Gb/s in entrata
- Fino a 1 Gb/s in uscita

---



## Concetti e organizzazione del storage



### L'account di archiviazione

Un __Account di archiviazione__ è un'entità logica che ha una __Chiave di accesso__ e una __Chiave segreta__ utilizzate per autenticare e sicurizzare le interazioni con un bucket.  
Su questo account sono definiti i ruoli e le autorizzazioni associati ai __bucket__, che permettono di controllare con precisione gli accessi e le azioni autorizzate per ogni utente o servizio.



### Tipi di account di archiviazione

La piattaforma di Archiviazione Oggetti Cloud Temple distingue due tipi di account di archiviazione, ciascuno con un ruolo e un livello di autorizzazioni specifiche :



#### 1. Account di archiviazione classico

È il tipo di account standard che creerai per la maggior parte dei tuoi utilizzi.

*   **Gestione delle chiavi** : Per ogni account classico, puoi generare una coppia di chiavi di accesso (`Access Key` e `Secret Key`).
*   **Permessi granulari** : I diritti di accesso di questo account sono definiti a livello di ogni bucket tramite elenchi di controllo di accesso (ACL). Devi assegnare esplicitamente i permessi (lettura, scrittura, ecc.) a quei bucket ai quali deve accedere.



#### 2. Account di archiviazione globale (Root)

Ogni *spazio dei nomi* (tenant) dispone di un unico account di archiviazione globale, a volte chiamato "account root". Questo account dispone di privilegi amministrativi estesi.

*   **Accesso totale** : L'account globale ha un accesso completo a tutti i bucket all'interno dello spazio dei nomi, senza che sia necessario assegnargli autorizzazioni specifiche. Può eseguire tutte le operazioni possibili sull'intero servizio di archiviazione.
*   **Utilizzo amministrativo** : È principalmente destinato alle attività di configurazione e amministrazione globale.
*   **Ripristino delle chiavi** : Dato il suo importanza, se le chiavi di accesso e segrete di questo account vengono perse, la piattaforma ti permette di reimpostarle per generarne di nuove.



### Il "bucket" nell'ecosistema del storage oggetti

Un bucket S3, popolarizzato dal servizio Amazon Simple Storage Service (Amazon S3), è __un contenitore di archiviazione pubblico__ nel cloud progettato per conservare una quantità illimitata di dati in modo sicuro, affidabile e altamente disponibile. Ogni bucket S3 può archiviare file (chiamati "oggetti" in S3), che vanno da documenti e immagini a grandi basi di dati o file video. I bucket vengono utilizzati per organizzare lo spazio di archiviazione in modo logico all'interno del storage oggetti Cloud Temple, e ogni bucket è identificato da un nome unico fornito dall'utente. I bucket S3 offrono funzionalità avanzate, come la gestione delle versioni, la protezione dei dati tramite politiche di controllo degli accessi, e la possibilità di immutabilità.



### L'offerta S3 Cloud Temple utilizza il metodo 'PathStyle'

A causa delle restrizioni associate alla qualifica SecNumCloud, al momento l'offerta è prevista per utilizzare il metodo '__PathStyle__'. Stiamo lavorando per rendere disponibile il metodo '__UrlStyle__' nel secondo semestre del 2025.



### Richieste pre-firmate

L'archiviazione oggetti Cloud Temple supporta le __richieste pre-firmate__, una funzionalità essenziale che permette di generare URL temporanei che consentono l'accesso a oggetti specifici per un periodo limitato. Questa funzionalità è particolarmente utile per condividere file in modo sicuro con utenti esterni senza assegnare loro diritti permanenti o credenziali di accesso al bucket. Le richieste pre-firmate possono essere configurate con una durata di validità precisa, offrendo così un controllo granulare sull'accesso ai dati.



### Immutabilità degli oggetti (Object Lock)

Il Storage Oggetti di Cloud Temple, basato su Dell ECS, supporta la funzionalità di immutabilità tramite **Object Lock**, in conformità con lo standard S3. Questa opzione permette di configurare gli oggetti in modalità **WORM (Write Once, Read Many)**, proteggendoli così da qualsiasi modifica o cancellazione durante un periodo definito. È una protezione essenziale per la conformità normativa e la difesa contro i ransomware.



#### Funzionamento

L'immutabilità si applica alle versioni degli oggetti e può essere configurata in due modi:
*   **Periodo di conservazione fisso**: l'oggetto è bloccato per un periodo determinato (in giorni o anni).
*   **Ritenzione legale (Legal Hold)**: l'oggetto è bloccato indefinitamente, fino a quando la conservazione non viene esplicitamente rilasciata.



#### Condizioni di implementazione

*   **Versioning obbligatorio** : Per attivare l'Object Lock, il versioning deve essere abilitato sul bucket. Una volta attivato l'Object Lock, il versioning non può più essere disattivato.
*   **Attivazione alla creazione** : L'immutabilità deve essere abilitata al momento della creazione del bucket, attraverso l'API S3 (ad esempio, con l'intestazione `x-amz-bucket-object-lock-enabled: true`).
*   **Due modalità di protezione** :
    *   **Modalità Governance** : Gli utenti con permessi specifici possono modificare o eliminare i parametri di conservazione.
    *   **Modalità Compliance** : Nessuno, incluso l'amministratore root, può modificare o eliminare i parametri di conservazione. È il livello più alto di protezione.



#### Casi d'uso principali

*   **Protezione anti-ransomware** : I backup protetti non possono essere né crittografati né eliminati da un attacco, garantendo un ripristino affidabile dei dati.
*   **Conformità normativa** : Risponde agli obblighi rigorosi di conservazione dei dati nei settori come la finanza (FINRA, SEC 17a-4) o la sanità.