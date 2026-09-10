---
title: Creare una macchina virtuale
---

Questo tutorial ti guida attraverso i diversi metodi di creazione di una macchina virtuale nel tuo ambiente OpenIaaS.

## Introduzione

La Console Cloud Temple propone **tre metodi** per creare una macchina virtuale OpenIaaS :

1. **Da un Modello** : Distribuzione rapida da un modello preconfigurato
2. **Import XVA** : Importazione di una macchina virtuale da un file XVA
3. **Dal Marketplace** : Distribuzione di un'immagine certificata dal catalogo Cloud Temple

## Prerequisiti

- Disporre di un ambiente OpenIaaS configurato
- Avere le autorizzazioni necessarie per creare macchine virtuali
- Per la modalità XVA: disporre di un file XVA valido
- Per la modalità Marketplace: avere accesso al catalogo Marketplace

## Accesso alla creazione

Dal menu **OpenIaaS** > **Macchine Virtuali**, fai clic sul pulsante **Nuova macchina virtuale**.

Si apre una finestra che mostra i tre metodi di distribuzione disponibili. Seleziona il metodo desiderato per continuare.

---

## Metodo 1: Distribuzione da un modello

Questo metodo consente di creare rapidamente una macchina virtuale a partire da un modello preconfigurato.

### Fase 1: Selezione del Pool e del Modello

Seleziona innanzitutto il **Pool** (zone de disponibilité) in cui desideri distribuire la tua macchina virtuale, quindi scegli il **Modello** da utilizzare come base.

### Passo 2: Informazioni generali

Configura i parametri di base della tua macchina virtuale:

- **Nome** : Nome univoco della macchina virtuale (caratteri alfanumerici, trattini, underscore, punti e spazi consentiti)
- **CPU** : Numero di core virtuali (minimo 1)
- **RAM** : Quantità di memoria con selezione dell'unità (MB, GB, TB)

### Fase 3 : Cloud Init (opzionale)

Cloud Init consente di automatizzare la configurazione iniziale della tua macchina virtuale al primo avvio.

Puoi configurare:

- **Cloud Config** : Configurazione generale (hostname, utenti, pacchetti, ecc.)
- **Network Config** : Configurazione di rete in formato Netplan v2
- **Destroy After Boot** : Opzione per eliminare la configurazione Cloud Init dopo il primo avvio

:::info
Questo passaggio è completamente opzionale. Se non hai bisogno di Cloud Init, lascia i campi predefiniti e passa al passaggio successivo.
:::

### Fase 4 : Configurazione dei dischi

Gestisci i dischi virtuali della tua macchina virtuale. I dischi del modello vengono aggiunti automaticamente e non possono essere eliminati.

Per ogni disco, configura :

- **Nome** : Nome univoco del disco
- **Capacità** : Dimensione del disco con selezione dell'unità (MB, GB, TB)
- **Block Storage** : Archiviazione di destinazione

È possibile aggiungere fino a 24 dischi virtuali in totale. Fai clic su **Aggiungi un disco** per creare un nuovo disco.

:::warning
Se configuri Cloud Init, è obbligatorio almeno un disco per memorizzare la configurazione.
:::

### Passo 5: Configurazione degli adattatori di rete

Configura le interfacce di rete della tua macchina virtuale (massimo 7 adattatori).

Per ogni adattatore di rete :

- **Rete** : Seleziona la rete virtuale (con indicazione VPC o Private Backbone)
- **Indirizzo MAC** : Opzionale, generato automaticamente se non specificato

:::info[VPC]
La configurazione delle reti VPC è disponibile solo dalla scheda Rete della macchina virtuale una volta terminata l'operazione. La configurazione da questo modulo sarà disponibile a breve.
:::

Fai clic su **Aggiungi adattatore di rete** per creare una nuova interfaccia.

### Passaggio 6 : Alta disponibilità

Configura il livello di alta disponibilità della tua macchina virtuale.

:::tip
Per ulteriori informazioni sulla configurazione dell'alta disponibilità e sulle diverse modalità disponibili, consulta la guida dedicata: [Gestione dell'alta disponibilità di una macchina virtuale](./high_availability/manage_vm)
:::

### Fase 7: Riepilogo e convalida

Verificare l'intera configurazione prima di creare la macchina virtuale.

Il riepilogo visualizza tutti i parametri configurati:

- Informazioni generali (nome, CPU, RAM)
- Modello selezionato
- Cloud Init (se configurato)
- Dischi
- Adattatori di rete
- Alta disponibilità

Fare clic su **Crea** per avviare la distribuzione della macchina virtuale.

---

## Metodo 2: Importazione da un file XVA

Questo metodo consente di importare una macchina virtuale da un file in formato XVA (XenServer Virtual Appliance).

### Presentazione del formato XVA

Il formato XVA è il formato di esportazione/importazione nativo di XCP-ng e XenServer. Contiene una macchina virtuale completa con i suoi dischi e la sua configurazione.

### Passo 1: Nome della macchina virtuale

Definisci il nome della tua macchina virtuale.

Il nome deve rispettare le stesse regole previste per la distribuzione da un modello (caratteri alfanumerici, trattini, underscore, punti e spazi).

### Fase 2: Caricamento del file XVA

Carica il tuo file XVA dal tuo computer.

:::info
Il file deve avere l'estensione `.xva`. I nomi dei file devono contenere solo caratteri alfanumerici, trattini, underscore e punti (senza spazi).
:::

Trascina e rilascia il file nell'area prevista o fai clic per selezionare il file dal tuo esploratore.

### Fase 3: Selezione dello storage

Scegliere lo storage di destinazione per la macchina virtuale importata.

Selezionare un Block Storage nella struttura ad albero. Il sistema verifica automaticamente che lo spazio disponibile sia sufficiente per ospitare il file XVA.

### Fase 4: Riepilogo e convalida

Verificare le informazioni prima di avviare l'importazione.

Il riepilogo visualizza:

- Il nome della VM
- Il tipo di distribuzione (XVA)
- Il file XVA e le relative dimensioni
- Lo storage di destinazione

Fare clic su **Crea** per avviare l'importazione della macchina virtuale.

### Informazioni sull'opzione skip_set_template

Durante l'importazione di un file XVA, l'opzione `skip_set_template` determina se il risultato dell'importazione sarà una macchina virtuale direttamente utilizzabile o un modello. Questa opzione è utilizzata in particolare con strumenti di automazione come Packer. Maggiori informazioni: [documentazione XCP-ng](https://xcp-ng.org/blog/2024/02/22/using-packer-with-xcp-ng/).

---

## Metodo 3: Distribuzione dal Marketplace

Il Marketplace Cloud Temple offre immagini di macchine virtuali certificate e pronte all'uso.

### Selezione di un'immagine del Marketplace

Esplora il catalogo delle immagini disponibili per OpenIaaS.

Vengono visualizzate solo le immagini compatibili con la piattaforma OpenIaaS.

### Configurazione della macchina virtuale

La configurazione dal Marketplace segue un processo simile alla distribuzione da un modello, con alcune specificità:

- Le caratteristiche di sistema (OS, CPU, RAM) sono predefinite dall'immagine del Marketplace
- È possibile personalizzare il nome della VM
- Cloud Init è disponibile per la configurazione iniziale
- La mappatura di rete consente di associare le interfacce di rete dell'immagine alle tue reti

:::tip
Per una guida dettagliata alla distribuzione sul Marketplace, consulta il tutorial dedicato: [Distribuire un'immagine su OpenIaaS](../../marketplace/tutorials/deploy_openiaas)
:::

---

## Buone pratiche

### Scelta del metodo di distribuzione

- **Modello** : Ideale per distribuzioni standard e ripetitive all'interno della tua organizzazione
- **XVA** : Consigliato per migrare VM esistenti o utilizzare immagini personalizzate
- **Marketplace** : Perfetto per iniziare rapidamente con immagini certificate e mantenute

### Configurazione delle risorse

- **CPU e RAM** : Dimensionare in base alle esigenze reali del carico di lavoro
- **Dischi** : Prevedere un margine di crescita per evitare ridimensionamenti futuri

### Alta disponibilità

- Abilita la modalità **Restart** per le applicazioni critiche
- Utilizza **Best-Effort** per gli ambienti meno critici

### Cloud Init

- Utilizza Cloud Init per standardizzare la configurazione delle tue VM
- Documenta le configurazioni Cloud Init per facilitarne il riutilizzo
- Testa le configurazioni su VM di test prima del deployment in produzione

### Sicurezza

- Utilizzare nomi espliciti per facilitare l'identificazione e la gestione
- Pianificare una strategia di backup fin dalla creazione della VM