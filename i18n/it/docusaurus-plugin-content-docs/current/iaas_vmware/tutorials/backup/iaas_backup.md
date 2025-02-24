---
title: Domande frequenti sulla copia di sicurezza
tags:
  - iaas_vmware
  - tutorials
  - iaas_backup
---

#### Come clonare una macchina virtuale?

Esistono 2 modi per clonare una macchina virtuale:

- La prima opzione consente di clonare una macchina virtuale direttamente dall'icona __'Clone'__ della tua macchina virtuale:

![](images/backup_clone_iaas_001.png)
![](images/backup_clone_iaas_002.png)

- La seconda soluzione consiste nel clonare la macchina virtuale utilizzando __un backup__ della macchina virtuale e poi utilizzando __il ripristino in modalità clone__ di un backup.
Vai nella sezione __'Backup'__ della tua macchina virtuale e scegli l'azione __'Ripristina'__:

![](images/backup_resto_iaas_001.png)

Quindi scegli l'opzione __'Clone'__ per il ripristino:

![](images/backup_clone_iaas_004.png)

#### Perché quando vado alla pagina "politiche di backup" e seleziono una politica, non vedo le stesse macchine virtuali che vedo quando vado al "rapporto di backup" e seleziono la stessa politica?

Ciò significa che le macchine virtuali mancanti hanno avuto assegnata la politica in questione per un certo periodo di tempo (spiegando la loro presenza nei rapporti di backup), ma che __non è più il caso al momento attuale__.

#### Come aggiungere una politica di backup a una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__ nella sezione __'IaaS'__ del menu verde a sinistra dello schermo.

Seleziona una macchina virtuale, quindi la scheda __'Politiche di backup'__ di questa macchina:

![](images/backup_policy_iaas_001.png)

Aggiungi la politica di backup desiderata:

![](images/backup_policy_iaas_002.png)

### Come rimuovere una politica di backup da una macchina virtuale?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale, quindi la scheda __'Politiche di backup'__ di questa macchina.

Rimuovi la politica di backup desiderata e conferma la rimozione:

![](images/backup_policy_iaas_003.png)

__*Nota:*__ *Attenzione! __Secnumcloud richiede che ci sia almeno una politica di backup__ per ogni macchina virtuale.*

### Come sapere se un backup è stato eseguito correttamente?

Ci sono 2 possibili soluzioni:

1. Vai alla pagina __'Jobs'__ dal menu __'Backup'__ nel menu verde a sinistra del tuo schermo. Scegli il job corrispondente al backup e selezionalo.
Quindi, trova il *jobsession* corrispondente al tuo backup, selezionalo tramite il menu __'Azioni'__.

![](images/backup_policy_iaas_006.png)

Queste azioni consentono di ottenere i log dettagliati dell'esecuzione del backup. Puoi cercare nei registri di backup:

![](images/backup_policy_iaas_005.png)

2. Vai alla pagina __'Rapporti di backup'__ e seleziona la politica che ti interessa:

![](images/backup_policy_iaas_004.png)

Puoi quindi filtrare per data, scaricare il rapporto in formato __PDF__ o __CSV__ per utilizzarlo in strumenti di terze parti.

### Come avviare un ripristino?

Vai alla pagina __'Macchine Virtuali'__, seleziona una macchina virtuale, quindi la scheda __'Backup'__ di questa macchina. Per avviare il ripristino, seleziona il backup da ripristinare.

![](images/backup_clone_iaas_003.png)

### Che cos'è l'opzione di quiescing?

Il __quiescing__ è un processo che consiste nel avvertire il sistema affinché si metta in uno stato appropriato prima dell'inizio dello snapshot.
Per impostazione predefinita, il __quiescing è attivato__. Può essere disattivato manualmente nel caso in cui il sistema non gestisca bene lo snapshot o se l'agente dell'hypervisor non è installato sulla macchina virtuale.

Per farlo, nella sezione __'Backup'__ della tua macchina virtuale, fai clic su __'Modifica opzioni'__ e disabilita il __quiescing__:

![](images/backup_policy_iaas_007.png)

### Quali sono le opzioni di ripristino di una macchina virtuale?

3 opzioni principali per ripristinare una vm, sulla sua destinazione iniziale o su una destinazione diversa:

- __'CLONE'__: Ripristina la macchina virtuale rinominandola, senza sostituire la macchina virtuale originale.

![](images/backup_restore_iaas_001.png)

- __'PRODUCTION'__: Ripristina e __sostituisce__ la macchina virtuale di produzione (la macchina virtuale attualmente in produzione è __distrutta__)

![](images/backup_restore_iaas_003.png)

- __'TEST'__: Ripristina la macchina virtuale di produzione __senza sovrascriverla__.

![](images/backup_restore_iaas_002.png)

### Come ripristinare e sostituire la macchina virtuale di produzione, senza mantenere la macchina virtuale attualmente in produzione?

Scegli la modalità di ripristino __'Production'__. L'opzione 'sovrascrivi la macchina virtuale' è predefinita.

![](images/backup_restore_iaas_003.png)

### Perché il numero di macchine virtuali è diverso tra i moduli backup e compute?

La differenza di macchine virtuali può derivare dal fatto che il modulo di backup non ha recuperato le ultime macchine create.

Per aggiornare il modulo di backup, è necessario richiedere al software di backup di re-inventariare le macchine virtuali.
Per farlo, nel menu __'Infrastruttura'__ del menu verde a sinistra dello schermo, naviga nel sottomenu __'Spectrum Protect Plus'__ e utilizza il pulsante __'Action'__ dell'inventario:

![](images/backup_inv_iaas_001.png)

Nota che è indicata la data dell'ultimo inventario.

Se persiste una differenza di macchine virtuali, potrebbe derivare dalle macchine virtuali che ospitano il sistema che consente
i backup. Infatti, queste non si contano esse stesse nel calcolo del numero di macchine sul modulo di backup.

### Come fare l'inventario delle macchine virtuali sul modulo backup?

Per avviare un inventario delle macchine virtuali sul modulo di backup, nel menu __'Infrastruttura'__ del menu verde a sinistra dello schermo, naviga nel sottomenu __'Spectrum Protect Plus'__ e utilizza il pulsante __'Action'__ dell'inventario:

![](images/backup_inv_iaas_001.png)

Nota che è indicata la data dell'ultimo inventario.

### Perché il backup della mia macchina virtuale fallisce indicando un problema di snapshot?

Questo errore significa che è la prima volta che la tua macchina cerca di essere sottoposta a backup.

__Durante il primo backup di una macchina virtuale, non deve essere presente alcuno snapshot sulla macchina.__

### Come ripristinare e sostituire la macchina virtuale di produzione, mantenendo e rinominando la macchina virtuale di produzione?

Ecco come procedere:

- Scegli la modalità __'CLONE'__ (la modalità clone comporta un cambiamento di indirizzo MAC e UUID della macchina virtuale),
- Rinomina la macchina virtuale ripristinata con il nome definitivo (della vm di produzione),
- Rinomina l'antica macchina virtuale di produzione (in _OLD).

### Come ripristinare una macchina virtuale, senza sostituire la macchina virtuale originale?

Ecco come procedere:

- Scegli la modalità __'CLONE'__ (la modalità clone comporta un cambiamento di indirizzo MAC e UUID della macchina virtuale)
- Definisci il nome del clone (_REST o altri)

### Perché non posso eliminare un disco in modalità instant access sulla mia macchina virtuale?

Esegui l'inventario del backup: nel menu __'Infrastruttura'__ del menu verde a sinistra dello schermo, naviga
nel sottomenu __'Spectrum Protect Plus'__ e utilizza il pulsante __'Action'__ dell'inventario:

![](images/backup_inv_iaas_001.png)

Esegui l'eliminazione del disco una volta terminato l'inventario. Aggiorna la macchina virtuale per verificare che il disco sia stato eliminato correttamente.

### Perché non posso avviare una macchina virtuale con una politica in stato Held (politica sospesa)?

Una politica in stato "Held" è una funzionalità che permette di sospendere temporaneamente le azioni di ritenzione e cancellazione dei dati, garantendo così che i dati restino intatti e disponibili oltre il loro periodo di ritenzione standard per ragioni specifiche come la conformità o le esigenze legali.

Supponiamo che un'azienda abbia una politica di ritenzione dei backup di 30 giorni per alcuni dati di produzione. A causa di un'indagine legale, ricevono una richiesta per preservare tutti i backup pertinenti per un periodo di tempo indeterminato. Hai la possibilità di sospendere la politica di backup associata tramite lo stato "Held" per impedire la cancellazione automatica di questi backup dopo 30 giorni, garantendo che i dati restino disponibili per tutta la durata dell'indagine.

Una politica di backup sospesa (in stato Held) non eseguirà i backup del programma ad essa assegnato, la macchina virtuale non può quindi essere considerata come protetta, il che non rispetta le norme SecNumCloud.

Non esitare a chiedere consiglio al nostro team di supporto su questo argomento.